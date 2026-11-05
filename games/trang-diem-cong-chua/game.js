var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    FacebookPostToFeed: {
        Title: "Some title",
        Caption: "Some Caption",
        Description: "Some description",
        Link: "http://google.com",
        Picture: "media/graphics/splash/desktop/cover.jpg"
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "http://www.marketjs.com/game/links/mobile"
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var d = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                e = d.MobileAdInGamePreroll,
                f =
                e + d.MobileAdInGamePreroll2,
                d = f + d.MobileAdInGamePreroll3,
                l = Math.floor(100 * Math.random());
            console.log("seed: ", l);
            l <= e ? this.selectedOverlayName = "MobileAdInGamePreroll" : l <= f ? this.selectedOverlayName = "MobileAdInGamePreroll2" : l <= d && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(d) {
        var e = d,
            f = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + e + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                e--;
                0 > e && (clearInterval(f), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var d = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                e = d.MobileAdInGameHeader,
                f = e + d.MobileAdInGameHeader2,
                d = f + d.MobileAdInGameHeader3,
                l = Math.floor(100 * Math.random());
            console.log("seed: ", l);
            l <= e ? this.selectedOverlayName = "MobileAdInGameHeader" : l <= f ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                l <= d && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(d) {
        var e = setInterval(function() {
            d--;
            0 > d && (MobileAdInGameHeader.div.hide(), clearInterval(e))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var d = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                e = d.MobileAdInGameFooter,
                f = e + d.MobileAdInGameFooter2,
                d = f + d.MobileAdInGameFooter3,
                l = Math.floor(100 * Math.random());
            console.log("seed: ", l);
            l <= e ? this.selectedOverlayName = "MobileAdInGameFooter" : l <= f ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                l <= d && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(d) {
        var e = setInterval(function() {
            d--;
            0 > d && (MobileAdInGameFooter.div.hide(), clearInterval(e))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var d = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                e = d.MobileAdInGameEnd,
                f = e + d.MobileAdInGameEnd2,
                d = f + d.MobileAdInGameEnd3,
                l = Math.floor(100 * Math.random());
            console.log("seed: ", l);
            l <= e ? this.selectedOverlayName = "MobileAdInGameEnd" : l <= f ? this.selectedOverlayName = "MobileAdInGameEnd2" : l <= d && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(d) {
        var e = d,
            f = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + e + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                e--;
                0 > e && (clearInterval(f), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function(d, e) {
    function f(d, m, C) {
        if (C === e && 1 === d.nodeType)
            if (C = "data-" + m.replace(wc, "-$1").toLowerCase(), C = d.getAttribute(C), "string" == typeof C) {
                try {
                    C = "true" === C ? !0 : "false" === C ? !1 : "null" === C ? null : +C + "" === C ? +C : xc.test(C) ? g.parseJSON(C) : C
                } catch (G) {}
                g.data(d, m, C)
            } else C = e;
        return C
    }

    function l(d) {
        for (var m in d)
            if (!("data" === m && g.isEmptyObject(d[m])) && "toJSON" !== m) return !1;
        return !0
    }

    function n() {
        return !1
    }

    function q() {
        return !0
    }

    function x(d) {
        return !d || !d.parentNode || 11 === d.parentNode.nodeType
    }

    function D(d,
        m) {
        do d = d[m]; while (d && 1 !== d.nodeType);
        return d
    }

    function v(d, m, e) {
        m = m || 0;
        if (g.isFunction(m)) return g.grep(d, function(d, y) {
            return !!m.call(d, y, d) === e
        });
        if (m.nodeType) return g.grep(d, function(d) {
            return d === m === e
        });
        if ("string" == typeof m) {
            var G = g.grep(d, function(d) {
                return 1 === d.nodeType
            });
            if (yc.test(m)) return g.filter(m, G, !e);
            m = g.filter(m, G)
        }
        return g.grep(d, function(d) {
            return 0 <= g.inArray(d, m) === e
        })
    }

    function A(d) {
        var m = Ab.split("|");
        d = d.createDocumentFragment();
        if (d.createElement)
            for (; m.length;) d.createElement(m.pop());
        return d
    }

    function E(d, m) {
        if (1 === m.nodeType && g.hasData(d)) {
            var e, G, f;
            G = g._data(d);
            var F = g._data(m, G),
                t = G.events;
            if (t)
                for (e in delete F.handle, F.events = {}, t) {
                    G = 0;
                    for (f = t[e].length; G < f; G++) g.event.add(m, e, t[e][G])
                }
            F.data && (F.data = g.extend({}, F.data))
        }
    }

    function p(d, m) {
        var e;
        1 === m.nodeType && (m.clearAttributes && m.clearAttributes(), m.mergeAttributes && m.mergeAttributes(d), e = m.nodeName.toLowerCase(), "object" === e ? (m.parentNode && (m.outerHTML = d.outerHTML), g.support.html5Clone && d.innerHTML && !g.trim(m.innerHTML) &&
            (m.innerHTML = d.innerHTML)) : "input" === e && Bb.test(d.type) ? (m.defaultChecked = m.checked = d.checked, m.value !== d.value && (m.value = d.value)) : "option" === e ? m.selected = d.defaultSelected : "input" === e || "textarea" === e ? m.defaultValue = d.defaultValue : "script" === e && m.text !== d.text && (m.text = d.text), m.removeAttribute(g.expando))
    }

    function s(d) {
        return "undefined" != typeof d.getElementsByTagName ? d.getElementsByTagName("*") : "undefined" != typeof d.querySelectorAll ? d.querySelectorAll("*") : []
    }

    function u(d) {
        Bb.test(d.type) && (d.defaultChecked =
            d.checked)
    }

    function B(d, m) {
        if (m in d) return m;
        for (var e = m.charAt(0).toUpperCase() + m.slice(1), g = m, f = Cb.length; f--;)
            if (m = Cb[f] + e, m in d) return m;
        return g
    }

    function R(d, m) {
        return d = m || d, "none" === g.css(d, "display") || !g.contains(d.ownerDocument, d)
    }

    function K(d, m) {
        for (var e, G, f = [], F = 0, t = d.length; F < t; F++) e = d[F], e.style && (f[F] = g._data(e, "olddisplay"), m ? (!f[F] && "none" === e.style.display && (e.style.display = ""), "" === e.style.display && R(e) && (f[F] = g._data(e, "olddisplay", T(e.nodeName)))) : (G = U(e, "display"), !f[F] && "none" !==
            G && g._data(e, "olddisplay", G)));
        for (F = 0; F < t; F++)
            if (e = d[F], e.style && (!m || "none" === e.style.display || "" === e.style.display)) e.style.display = m ? f[F] || "" : "none";
        return d
    }

    function I(d, m, e) {
        return (d = zc.exec(m)) ? Math.max(0, d[1] - (e || 0)) + (d[2] || "px") : m
    }

    function ab(d, m, e, f) {
        m = e === (f ? "border" : "content") ? 4 : "width" === m ? 1 : 0;
        for (var z = 0; 4 > m; m += 2) "margin" === e && (z += g.css(d, e + ia[m], !0)), f ? ("content" === e && (z -= parseFloat(U(d, "padding" + ia[m])) || 0), "margin" !== e && (z -= parseFloat(U(d, "border" + ia[m] + "Width")) || 0)) : (z += parseFloat(U(d,
            "padding" + ia[m])) || 0, "padding" !== e && (z += parseFloat(U(d, "border" + ia[m] + "Width")) || 0));
        return z
    }

    function L(d, m, e) {
        var f = "width" === m ? d.offsetWidth : d.offsetHeight,
            z = !0,
            F = g.support.boxSizing && "border-box" === g.css(d, "boxSizing");
        if (0 >= f || null == f) {
            f = U(d, m);
            if (0 > f || null == f) f = d.style[m];
            if (Ca.test(f)) return f;
            z = F && (g.support.boxSizingReliable || f === d.style[m]);
            f = parseFloat(f) || 0
        }
        return f + ab(d, m, e || (F ? "border" : "content"), z) + "px"
    }

    function T(d) {
        if (bb[d]) return bb[d];
        var m = g("<" + d + ">").appendTo(H.body),
            e = m.css("display");
        m.remove();
        if ("none" === e || "" === e) {
            pa = H.body.appendChild(pa || g.extend(H.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!qa || !pa.createElement) qa = (pa.contentWindow || pa.contentDocument).document, qa.write("<!doctype html><html><body>"), qa.close();
            m = qa.body.appendChild(qa.createElement(d));
            e = U(m, "display");
            H.body.removeChild(pa)
        }
        return bb[d] = e, e
    }

    function Q(d, m, e, f) {
        var z;
        if (g.isArray(m)) g.each(m, function(m, g) {
            e || Ac.test(d) ? f(d, g) : Q(d + "[" + ("object" == typeof g ? m : "") + "]", g, e, f)
        });
        else if (!e &&
            "object" === g.type(m))
            for (z in m) Q(d + "[" + z + "]", m[z], e, f);
        else f(d, m)
    }

    function Da(d) {
        return function(m, e) {
            "string" != typeof m && (e = m, m = "*");
            var f, z, F = m.toLowerCase().split(ja),
                t = 0,
                p = F.length;
            if (g.isFunction(e))
                for (; t < p; t++) f = F[t], (z = /^\+/.test(f)) && (f = f.substr(1) || "*"), f = d[f] = d[f] || [], f[z ? "unshift" : "push"](e)
        }
    }

    function ra(d, m, C, g, f, F) {
        f = f || m.dataTypes[0];
        F = F || {};
        F[f] = !0;
        var t;
        f = d[f];
        for (var p = 0, l = f ? f.length : 0, n = d === cb; p < l && (n || !t); p++) t = f[p](m, C, g), "string" == typeof t && (!n || F[t] ? t = e : (m.dataTypes.unshift(t),
            t = ra(d, m, C, g, t, F)));
        return (n || !t) && !F["*"] && (t = ra(d, m, C, g, "*", F)), t
    }

    function wa(d, m) {
        var C, f, z = g.ajaxSettings.flatOptions || {};
        for (C in m) m[C] !== e && ((z[C] ? d : f || (f = {}))[C] = m[C]);
        f && g.extend(!0, d, f)
    }

    function Db() {
        try {
            return new d.XMLHttpRequest
        } catch (y) {}
    }

    function Eb() {
        return setTimeout(function() {
            Ea = e
        }, 0), Ea = g.now()
    }

    function Fb(d, m, e) {
        var f, z = 0,
            F = Fa.length,
            t = g.Deferred().always(function() {
                delete p.elem
            }),
            p = function() {
                for (var m = Ea || Eb(), m = Math.max(0, l.startTime + l.duration - m), e = 1 - (m / l.duration || 0), C =
                    0, g = l.tweens.length; C < g; C++) l.tweens[C].run(e);
                return t.notifyWith(d, [l, e, m]), 1 > e && g ? m : (t.resolveWith(d, [l]), !1)
            },
            l = t.promise({
                elem: d,
                props: g.extend({}, m),
                opts: g.extend(!0, {
                    specialEasing: {}
                }, e),
                originalProperties: m,
                originalOptions: e,
                startTime: Ea || Eb(),
                duration: e.duration,
                tweens: [],
                createTween: function(m, e) {
                    var C = g.Tween(d, l.opts, m, e, l.opts.specialEasing[m] || l.opts.easing);
                    return l.tweens.push(C), C
                },
                stop: function(m) {
                    for (var e = 0, C = m ? l.tweens.length : 0; e < C; e++) l.tweens[e].run(1);
                    return m ? t.resolveWith(d, [l, m]) : t.rejectWith(d, [l, m]), this
                }
            });
        m = l.props;
        e = l.opts.specialEasing;
        var n, s, u, q;
        for (f in m)
            if (n = g.camelCase(f), s = e[n], u = m[f], g.isArray(u) && (s = u[1], u = m[f] = u[0]), f !== n && (m[n] = u, delete m[f]), (q = g.cssHooks[n]) && "expand" in q)
                for (f in u = q.expand(u), delete m[n], u) f in m || (m[f] = u[f], e[f] = s);
            else e[n] = s;
        for (; z < F; z++)
            if (f = Fa[z].call(l, d, m, l.opts)) return f;
        var v = l;
        g.each(m, function(d, y) {
            for (var m = (xa[d] || []).concat(xa["*"]), e = 0, C = m.length; e < C && !m[e].call(v, d, y); e++);
        });
        return g.isFunction(l.opts.start) && l.opts.start.call(d,
            l), g.fx.timer(g.extend(p, {
            anim: l,
            queue: l.opts.queue,
            elem: d
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function W(d, m, e, g, f) {
        return new W.prototype.init(d, m, e, g, f)
    }

    function Ga(d, m) {
        var e, g = {
                height: d
            },
            f = 0;
        for (m = m ? 1 : 0; 4 > f; f += 2 - m) e = ia[f], g["margin" + e] = g["padding" + e] = d;
        return m && (g.opacity = g.width = d), g
    }

    function Gb(d) {
        return g.isWindow(d) ? d : 9 === d.nodeType ? d.defaultView || d.parentWindow : !1
    }
    var Hb, Ha, H = d.document,
        Cc = d.location,
        Dc = d.navigator,
        Ec =
        d.jQuery,
        Fc = d.$,
        Ib = Array.prototype.push,
        ea = Array.prototype.slice,
        Jb = Array.prototype.indexOf,
        Gc = Object.prototype.toString,
        db = Object.prototype.hasOwnProperty,
        eb = String.prototype.trim,
        g = function(d, m) {
            return new g.fn.init(d, m, Hb)
        },
        Ia = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Hc = /\S/,
        ja = /\s+/,
        Ic = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Jc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Kb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Kc = /^[\],:{}\s]*$/,
        Lc = /(?:^|:|,)(?:\s*\[)+/g,
        Mc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Nc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Oc = /^-ms-/,
        Pc = /-([\da-z])/gi,
        Qc = function(d, m) {
            return (m + "").toUpperCase()
        },
        Ja = function() {
            H.addEventListener ? (H.removeEventListener("DOMContentLoaded", Ja, !1), g.ready()) : "complete" === H.readyState && (H.detachEvent("onreadystatechange", Ja), g.ready())
        },
        Lb = {};
    g.fn = g.prototype = {
        constructor: g,
        init: function(d, m, C) {
            var f, z;
            if (!d) return this;
            if (d.nodeType) return this.context = this[0] = d, this.length = 1, this;
            if ("string" == typeof d) {
                "<" === d.charAt(0) && ">" === d.charAt(d.length - 1) && 3 <= d.length ? f = [null, d, null] : f = Jc.exec(d);
                if (f && (f[1] || !m)) {
                    if (f[1]) return m = m instanceof g ? m[0] : m, z = m && m.nodeType ? m.ownerDocument || m : H, d = g.parseHTML(f[1], z, !0), Kb.test(f[1]) && g.isPlainObject(m) && this.attr.call(d, m, !0), g.merge(this, d);
                    if ((m = H.getElementById(f[2])) && m.parentNode) {
                        if (m.id !== f[2]) return C.find(d);
                        this.length = 1;
                        this[0] = m
                    }
                    return this.context = H, this.selector = d, this
                }
                return !m || m.jquery ? (m || C).find(d) : this.constructor(m).find(d)
            }
            return g.isFunction(d) ? C.ready(d) : (d.selector !== e && (this.selector = d.selector, this.context = d.context), g.makeArray(d,
                this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return ea.call(this)
        },
        get: function(d) {
            return null == d ? this.toArray() : 0 > d ? this[this.length + d] : this[d]
        },
        pushStack: function(d, m, e) {
            d = g.merge(this.constructor(), d);
            return d.prevObject = this, d.context = this.context, "find" === m ? d.selector = this.selector + (this.selector ? " " : "") + e : m && (d.selector = this.selector + "." + m + "(" + e + ")"), d
        },
        each: function(d, m) {
            return g.each(this, d, m)
        },
        ready: function(d) {
            return g.ready.promise().done(d),
                this
        },
        eq: function(d) {
            return d = +d, -1 === d ? this.slice(d) : this.slice(d, d + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(ea.apply(this, arguments), "slice", ea.call(arguments).join(","))
        },
        map: function(d) {
            return this.pushStack(g.map(this, function(m, e) {
                return d.call(m, e, m)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Ib,
        sort: [].sort,
        splice: [].splice
    };
    g.fn.init.prototype = g.fn;
    g.extend = g.fn.extend = function() {
        var d,
            m, C, f, z, F, t = arguments[0] || {},
            l = 1,
            p = arguments.length,
            n = !1;
        "boolean" == typeof t && (n = t, t = arguments[1] || {}, l = 2);
        "object" != typeof t && !g.isFunction(t) && (t = {});
        for (p === l && (t = this, --l); l < p; l++)
            if (null != (d = arguments[l]))
                for (m in d) C = t[m], f = d[m], t !== f && (n && f && (g.isPlainObject(f) || (z = g.isArray(f))) ? (z ? (z = !1, F = C && g.isArray(C) ? C : []) : F = C && g.isPlainObject(C) ? C : {}, t[m] = g.extend(n, F, f)) : f !== e && (t[m] = f));
        return t
    };
    g.extend({
        noConflict: function(y) {
            return d.$ === g && (d.$ = Fc), y && d.jQuery === g && (d.jQuery = Ec), g
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(d) {
            d ? g.readyWait++ : g.ready(!0)
        },
        ready: function(d) {
            if (!(!0 === d ? --g.readyWait : g.isReady)) {
                if (!H.body) return setTimeout(g.ready, 1);
                g.isReady = !0;
                !0 !== d && 0 < --g.readyWait || (Ha.resolveWith(H, [g]), g.fn.trigger && g(H).trigger("ready").off("ready"))
            }
        },
        isFunction: function(d) {
            return "function" === g.type(d)
        },
        isArray: Array.isArray || function(d) {
            return "array" === g.type(d)
        },
        isWindow: function(d) {
            return null != d && d == d.window
        },
        isNumeric: function(d) {
            return !isNaN(parseFloat(d)) && isFinite(d)
        },
        type: function(d) {
            return null == d ? String(d) : Lb[Gc.call(d)] || "object"
        },
        isPlainObject: function(d) {
            if (!d || "object" !== g.type(d) || d.nodeType || g.isWindow(d)) return !1;
            try {
                if (d.constructor && !db.call(d, "constructor") && !db.call(d.constructor.prototype, "isPrototypeOf")) return !1
            } catch (m) {
                return !1
            }
            for (var C in d);
            return C === e || db.call(d, C)
        },
        isEmptyObject: function(d) {
            for (var m in d) return !1;
            return !0
        },
        error: function(d) {
            throw Error(d);
        },
        parseHTML: function(d, m, e) {
            var f;
            return !d || "string" != typeof d ? null : ("boolean" ==
                typeof m && (e = m, m = 0), m = m || H, (f = Kb.exec(d)) ? [m.createElement(f[1])] : (f = g.buildFragment([d], m, e ? null : []), g.merge([], (f.cacheable ? g.clone(f.fragment) : f.fragment).childNodes)))
        },
        parseJSON: function(y) {
            if (!y || "string" != typeof y) return null;
            y = g.trim(y);
            if (d.JSON && d.JSON.parse) return d.JSON.parse(y);
            if (Kc.test(y.replace(Mc, "@").replace(Nc, "]").replace(Lc, ""))) return (new Function("return " + y))();
            g.error("Invalid JSON: " + y)
        },
        parseXML: function(y) {
            var m, C;
            if (!y || "string" != typeof y) return null;
            try {
                d.DOMParser ?
                    (C = new DOMParser, m = C.parseFromString(y, "text/xml")) : (m = new ActiveXObject("Microsoft.XMLDOM"), m.async = "false", m.loadXML(y))
            } catch (f) {
                m = e
            }
            return (!m || !m.documentElement || m.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + y), m
        },
        noop: function() {},
        globalEval: function(y) {
            y && Hc.test(y) && (d.execScript || function(y) {
                d.eval.call(d, y)
            })(y)
        },
        camelCase: function(d) {
            return d.replace(Oc, "ms-").replace(Pc, Qc)
        },
        nodeName: function(d, m) {
            return d.nodeName && d.nodeName.toLowerCase() === m.toLowerCase()
        },
        each: function(d, m, C) {
            var f, z = 0,
                F = d.length,
                t = F === e || g.isFunction(d);
            if (C)
                if (t)
                    for (f in d) {
                        if (!1 === m.apply(d[f], C)) break
                    } else
                        for (; z < F && !1 !== m.apply(d[z++], C););
                else if (t)
                for (f in d) {
                    if (!1 === m.call(d[f], f, d[f])) break
                } else
                    for (; z < F && !1 !== m.call(d[z], z, d[z++]););
            return d
        },
        trim: eb && !eb.call("\ufeff\u00a0") ? function(d) {
            return null == d ? "" : eb.call(d)
        } : function(d) {
            return null == d ? "" : (d + "").replace(Ic, "")
        },
        makeArray: function(d, m) {
            var e, f = m || [];
            return null != d && (e = g.type(d), null == d.length || "string" === e || "function" ===
                e || "regexp" === e || g.isWindow(d) ? Ib.call(f, d) : g.merge(f, d)), f
        },
        inArray: function(d, m, e) {
            var g;
            if (m) {
                if (Jb) return Jb.call(m, d, e);
                g = m.length;
                for (e = e ? 0 > e ? Math.max(0, g + e) : e : 0; e < g; e++)
                    if (e in m && m[e] === d) return e
            }
            return -1
        },
        merge: function(d, m) {
            var C = m.length,
                g = d.length,
                f = 0;
            if ("number" == typeof C)
                for (; f < C; f++) d[g++] = m[f];
            else
                for (; m[f] !== e;) d[g++] = m[f++];
            return d.length = g, d
        },
        grep: function(d, m, e) {
            var g, f = [],
                F = 0,
                t = d.length;
            for (e = !!e; F < t; F++) g = !!m(d[F], F), e !== g && f.push(d[F]);
            return f
        },
        map: function(d, m, C) {
            var f,
                z, F = [],
                t = 0,
                l = d.length;
            if (d instanceof g || l !== e && "number" == typeof l && (0 < l && d[0] && d[l - 1] || 0 === l || g.isArray(d)))
                for (; t < l; t++) f = m(d[t], t, C), null != f && (F[F.length] = f);
            else
                for (z in d) f = m(d[z], z, C), null != f && (F[F.length] = f);
            return F.concat.apply([], F)
        },
        guid: 1,
        proxy: function(d, m) {
            var C, f, z;
            return "string" == typeof m && (C = d[m], m = d, d = C), g.isFunction(d) ? (f = ea.call(arguments, 2), z = function() {
                return d.apply(m, f.concat(ea.call(arguments)))
            }, z.guid = d.guid = d.guid || g.guid++, z) : e
        },
        access: function(d, m, f, G, z, F, t) {
            var l, p =
                null == f,
                n = 0,
                s = d.length;
            if (f && "object" == typeof f) {
                for (n in f) g.access(d, m, n, f[n], 1, F, G);
                z = 1
            } else if (G !== e) {
                l = t === e && g.isFunction(G);
                p && (l ? (l = m, m = function(d, y, m) {
                    return l.call(g(d), m)
                }) : (m.call(d, G), m = null));
                if (m)
                    for (; n < s; n++) m(d[n], f, l ? G.call(d[n], n, m(d[n], f)) : G, t);
                z = 1
            }
            return z ? d : p ? m.call(d) : s ? m(d[0], f) : F
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    g.ready.promise = function(y) {
        if (!Ha)
            if (Ha = g.Deferred(), "complete" === H.readyState) setTimeout(g.ready, 1);
            else if (H.addEventListener) H.addEventListener("DOMContentLoaded",
            Ja, !1), d.addEventListener("load", g.ready, !1);
        else {
            H.attachEvent("onreadystatechange", Ja);
            d.attachEvent("onload", g.ready);
            var m = !1;
            try {
                m = null == d.frameElement && H.documentElement
            } catch (e) {}
            m && m.doScroll && function z() {
                if (!g.isReady) {
                    try {
                        m.doScroll("left")
                    } catch (d) {
                        return setTimeout(z, 50)
                    }
                    g.ready()
                }
            }()
        }
        return Ha.promise(y)
    };
    g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(d, m) {
        Lb["[object " + m + "]"] = m.toLowerCase()
    });
    Hb = g(H);
    var Mb = {};
    g.Callbacks = function(d) {
        var m;
        if ("string" ==
            typeof d) {
            if (!(m = Mb[d])) {
                m = d;
                var f = Mb[m] = {};
                m = (g.each(m.split(ja), function(d, y) {
                    f[y] = !0
                }), f)
            }
        } else m = g.extend({}, d);
        d = m;
        var G, z, F, t, l, p, n = [],
            s = !d.once && [],
            u = function(m) {
                G = d.memory && m;
                z = !0;
                p = t || 0;
                t = 0;
                l = n.length;
                for (F = !0; n && p < l; p++)
                    if (!1 === n[p].apply(m[0], m[1]) && d.stopOnFalse) {
                        G = !1;
                        break
                    }
                F = !1;
                n && (s ? s.length && u(s.shift()) : G ? n = [] : q.disable())
            },
            q = {
                add: function() {
                    if (n) {
                        var m = n.length;
                        (function Bc(m) {
                            g.each(m, function(m, e) {
                                var f = g.type(e);
                                "function" === f && (!d.unique || !q.has(e)) ? n.push(e) : e && e.length && "string" !==
                                    f && Bc(e)
                            })
                        })(arguments);
                        F ? l = n.length : G && (t = m, u(G))
                    }
                    return this
                },
                remove: function() {
                    return n && g.each(arguments, function(d, y) {
                        for (var m; - 1 < (m = g.inArray(y, n, m));) n.splice(m, 1), F && (m <= l && l--, m <= p && p--)
                    }), this
                },
                has: function(d) {
                    return -1 < g.inArray(d, n)
                },
                empty: function() {
                    return n = [], this
                },
                disable: function() {
                    return n = s = G = e, this
                },
                disabled: function() {
                    return !n
                },
                lock: function() {
                    return s = e, G || q.disable(), this
                },
                locked: function() {
                    return !s
                },
                fireWith: function(d, y) {
                    return y = y || [], y = [d, y.slice ? y.slice() : y], n && (!z || s) &&
                        (F ? s.push(y) : u(y)), this
                },
                fire: function() {
                    return q.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!z
                }
            };
        return q
    };
    g.extend({
        Deferred: function(d) {
            var m = [
                    ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", g.Callbacks("memory")]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return z.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var d = arguments;
                        return g.Deferred(function(y) {
                            g.each(m, function(m,
                                e) {
                                var f = e[0],
                                    C = d[m];
                                z[e[1]](g.isFunction(C) ? function() {
                                    var d = C.apply(this, arguments);
                                    d && g.isFunction(d.promise) ? d.promise().done(y.resolve).fail(y.reject).progress(y.notify) : y[f + "With"](this === z ? y : this, [d])
                                } : y[f])
                            });
                            d = null
                        }).promise()
                    },
                    promise: function(d) {
                        return null != d ? g.extend(d, f) : f
                    }
                },
                z = {};
            return f.pipe = f.then, g.each(m, function(d, y) {
                var g = y[2],
                    l = y[3];
                f[y[1]] = g.add;
                l && g.add(function() {
                    e = l
                }, m[d ^ 1][2].disable, m[2][2].lock);
                z[y[0]] = g.fire;
                z[y[0] + "With"] = g.fireWith
            }), f.promise(z), d && d.call(z, z), z
        },
        when: function(d) {
            var m = 0,
                e = ea.call(arguments),
                f = e.length,
                z = 1 !== f || d && g.isFunction(d.promise) ? f : 0,
                l = 1 === z ? d : g.Deferred(),
                t = function(d, y, m) {
                    return function(e) {
                        y[d] = this;
                        m[d] = 1 < arguments.length ? ea.call(arguments) : e;
                        m === p ? l.notifyWith(y, m) : --z || l.resolveWith(y, m)
                    }
                },
                p, n, s;
            if (1 < f) {
                p = Array(f);
                n = Array(f);
                for (s = Array(f); m < f; m++) e[m] && g.isFunction(e[m].promise) ? e[m].promise().done(t(m, s, e)).fail(l.reject).progress(t(m, n, p)) : --z
            }
            return z || l.resolveWith(s, e), l.promise()
        }
    });
    var Rc = g,
        fb, S, Ka, ka, La, Ma, X, la, Na, gb,
        ya, Nb, O = H.createElement("div");
    O.setAttribute("className", "t");
    O.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ka = O.getElementsByTagName("*");
    ka = O.getElementsByTagName("a")[0];
    ka.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ka || !Ka.length) fb = {};
    else {
        La = H.createElement("select");
        Ma = La.appendChild(H.createElement("option"));
        X = O.getElementsByTagName("input")[0];
        S = {
            leadingWhitespace: 3 === O.firstChild.nodeType,
            tbody: !O.getElementsByTagName("tbody").length,
            htmlSerialize: !!O.getElementsByTagName("link").length,
            style: /top/.test(ka.getAttribute("style")),
            hrefNormalized: "/a" === ka.getAttribute("href"),
            opacity: /^0.5/.test(ka.style.opacity),
            cssFloat: !!ka.style.cssFloat,
            checkOn: "on" === X.value,
            optSelected: Ma.selected,
            getSetAttribute: "t" !== O.className,
            enctype: !!H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === H.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        X.checked = !0;
        S.noCloneChecked = X.cloneNode(!0).checked;
        La.disabled = !0;
        S.optDisabled = !Ma.disabled;
        try {
            delete O.test
        } catch (Td) {
            S.deleteExpando = !1
        }!O.addEventListener && O.attachEvent && O.fireEvent && (O.attachEvent("onclick", Nb = function() {
            S.noCloneEvent = !1
        }), O.cloneNode(!0).fireEvent("onclick"), O.detachEvent("onclick", Nb));
        X = H.createElement("input");
        X.value = "t";
        X.setAttribute("type", "radio");
        S.radioValue = "t" === X.value;
        X.setAttribute("checked",
            "checked");
        X.setAttribute("name", "t");
        O.appendChild(X);
        la = H.createDocumentFragment();
        la.appendChild(O.lastChild);
        S.checkClone = la.cloneNode(!0).cloneNode(!0).lastChild.checked;
        S.appendChecked = X.checked;
        la.removeChild(X);
        la.appendChild(O);
        if (O.attachEvent)
            for (gb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Na = "on" + gb, (ya = Na in O) || (O.setAttribute(Na, "return;"), ya = "function" == typeof O[Na]), S[gb + "Bubbles"] = ya;
        fb = (g(function() {
            var y, m, e, f, g = H.getElementsByTagName("body")[0];
            g && (y = H.createElement("div"), y.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(y, g.firstChild), m = H.createElement("div"), y.appendChild(m), m.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = m.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", ya = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", S.reliableHiddenOffsets = ya && 0 === e[0].offsetHeight, m.innerHTML = "", m.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                S.boxSizing = 4 === m.offsetWidth, S.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, d.getComputedStyle && (S.pixelPosition = "1%" !== (d.getComputedStyle(m, null) || {}).top, S.boxSizingReliable = "4px" === (d.getComputedStyle(m, null) || {
                    width: "4px"
                }).width, f = H.createElement("div"), f.style.cssText = m.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", f.style.marginRight = f.style.width = "0", m.style.width = "1px", m.appendChild(f), S.reliableMarginRight = !parseFloat((d.getComputedStyle(f, null) || {}).marginRight)),
                "undefined" != typeof m.style.zoom && (m.innerHTML = "", m.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", S.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = "block", m.style.overflow = "visible", m.innerHTML = "<div></div>", m.firstChild.style.width = "5px", S.shrinkWrapBlocks = 3 !== m.offsetWidth, y.style.zoom = 1), g.removeChild(y))
        }), la.removeChild(O), Ka = ka = La = Ma = X = la = O = null, S)
    }
    Rc.support = fb;
    var xc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        wc = /([A-Z])/g;
    g.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(d) {
            return d = d.nodeType ? g.cache[d[g.expando]] : d[g.expando], !!d && !l(d)
        },
        data: function(d, m, f, G) {
            if (g.acceptData(d)) {
                var z, l, t = g.expando,
                    p = "string" == typeof m,
                    n = d.nodeType,
                    s = n ? g.cache : d,
                    u = n ? d[t] : d[t] && t;
                if (u && s[u] && (G || s[u].data) || !(p && f === e)) {
                    u || (n ? d[t] = u = g.deletedIds.pop() || g.guid++ : u = t);
                    s[u] || (s[u] = {},
                        n || (s[u].toJSON = g.noop));
                    if ("object" == typeof m || "function" == typeof m) G ? s[u] = g.extend(s[u], m) : s[u].data = g.extend(s[u].data, m);
                    return z = s[u], G || (z.data || (z.data = {}), z = z.data), f !== e && (z[g.camelCase(m)] = f), p ? (l = z[m], null == l && (l = z[g.camelCase(m)])) : l = z, l
                }
            }
        },
        removeData: function(d, m, e) {
            if (g.acceptData(d)) {
                var f, z, F, t = d.nodeType,
                    p = t ? g.cache : d,
                    n = t ? d[g.expando] : g.expando;
                if (p[n]) {
                    if (m && (f = e ? p[n] : p[n].data)) {
                        g.isArray(m) || (m in f ? m = [m] : (m = g.camelCase(m), m in f ? m = [m] : m = m.split(" ")));
                        z = 0;
                        for (F = m.length; z < F; z++) delete f[m[z]];
                        if (!(e ? l : g.isEmptyObject)(f)) return
                    }
                    if (e || !(delete p[n].data, !l(p[n]))) t ? g.cleanData([d], !0) : g.support.deleteExpando || p != p.window ? delete p[n] : p[n] = null
                }
            }
        },
        _data: function(d, m, e) {
            return g.data(d, m, e, !0)
        },
        acceptData: function(d) {
            var m = d.nodeName && g.noData[d.nodeName.toLowerCase()];
            return !m || !0 !== m && d.getAttribute("classid") === m
        }
    });
    g.fn.extend({
        data: function(d, m) {
            var C, G, z, l, t, p = this[0],
                n = 0,
                s = null;
            if (d === e) {
                if (this.length && (s = g.data(p), 1 === p.nodeType && !g._data(p, "parsedAttrs"))) {
                    z = p.attributes;
                    for (t = z.length; n <
                        t; n++) l = z[n].name, l.indexOf("data-") || (l = g.camelCase(l.substring(5)), f(p, l, s[l]));
                    g._data(p, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof d ? this.each(function() {
                g.data(this, d)
            }) : (C = d.split(".", 2), C[1] = C[1] ? "." + C[1] : "", G = C[1] + "!", g.access(this, function(m) {
                if (m === e) return s = this.triggerHandler("getData" + G, [C[0]]), s === e && p && (s = g.data(p, d), s = f(p, d, s)), s === e && C[1] ? this.data(C[0]) : s;
                C[1] = m;
                this.each(function() {
                    var e = g(this);
                    e.triggerHandler("setData" + G, C);
                    g.data(this, d, m);
                    e.triggerHandler("changeData" +
                        G, C)
                })
            }, null, m, 1 < arguments.length, null, !1))
        },
        removeData: function(d) {
            return this.each(function() {
                g.removeData(this, d)
            })
        }
    });
    g.extend({
        queue: function(d, m, e) {
            var f;
            if (d) return m = (m || "fx") + "queue", f = g._data(d, m), e && (!f || g.isArray(e) ? f = g._data(d, m, g.makeArray(e)) : f.push(e)), f || []
        },
        dequeue: function(d, m) {
            m = m || "fx";
            var e = g.queue(d, m),
                f = e.length,
                z = e.shift(),
                l = g._queueHooks(d, m),
                t = function() {
                    g.dequeue(d, m)
                };
            "inprogress" === z && (z = e.shift(), f--);
            z && ("fx" === m && e.unshift("inprogress"), delete l.stop, z.call(d, t, l));
            !f && l && l.empty.fire()
        },
        _queueHooks: function(d, m) {
            var e = m + "queueHooks";
            return g._data(d, e) || g._data(d, e, {
                empty: g.Callbacks("once memory").add(function() {
                    g.removeData(d, m + "queue", !0);
                    g.removeData(d, e, !0)
                })
            })
        }
    });
    g.fn.extend({
        queue: function(d, m) {
            var f = 2;
            return "string" != typeof d && (m = d, d = "fx", f--), arguments.length < f ? g.queue(this[0], d) : m === e ? this : this.each(function() {
                var e = g.queue(this, d, m);
                g._queueHooks(this, d);
                "fx" === d && "inprogress" !== e[0] && g.dequeue(this, d)
            })
        },
        dequeue: function(d) {
            return this.each(function() {
                g.dequeue(this,
                    d)
            })
        },
        delay: function(d, m) {
            return d = g.fx ? g.fx.speeds[d] || d : d, m = m || "fx", this.queue(m, function(m, e) {
                var f = setTimeout(m, d);
                e.stop = function() {
                    clearTimeout(f)
                }
            })
        },
        clearQueue: function(d) {
            return this.queue(d || "fx", [])
        },
        promise: function(d, m) {
            var f, G = 1,
                z = g.Deferred(),
                l = this,
                t = this.length,
                p = function() {
                    --G || z.resolveWith(l, [l])
                };
            "string" != typeof d && (m = d, d = e);
            for (d = d || "fx"; t--;)(f = g._data(l[t], d + "queueHooks")) && f.empty && (G++, f.empty.add(p));
            return p(), z.promise(m)
        }
    });
    var fa, Ob, Pb, Qb = /[\t\r\n]/g,
        Sc = /\r/g,
        Tc = /^(?:button|input)$/i,
        Uc = /^(?:button|input|object|select|textarea)$/i,
        Vc = /^a(?:rea|)$/i,
        Rb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Sb = g.support.getSetAttribute;
    g.fn.extend({
        attr: function(d, m) {
            return g.access(this, g.attr, d, m, 1 < arguments.length)
        },
        removeAttr: function(d) {
            return this.each(function() {
                g.removeAttr(this, d)
            })
        },
        prop: function(d, m) {
            return g.access(this, g.prop, d, m, 1 < arguments.length)
        },
        removeProp: function(d) {
            return d = g.propFix[d] ||
                d, this.each(function() {
                    try {
                        this[d] = e, delete this[d]
                    } catch (m) {}
                })
        },
        addClass: function(d) {
            var m, e, f, z, l, t, p;
            if (g.isFunction(d)) return this.each(function(m) {
                g(this).addClass(d.call(this, m, this.className))
            });
            if (d && "string" == typeof d) {
                m = d.split(ja);
                e = 0;
                for (f = this.length; e < f; e++)
                    if (z = this[e], 1 === z.nodeType)
                        if (!z.className && 1 === m.length) z.className = d;
                        else {
                            l = " " + z.className + " ";
                            t = 0;
                            for (p = m.length; t < p; t++) 0 > l.indexOf(" " + m[t] + " ") && (l += m[t] + " ");
                            z.className = g.trim(l)
                        }
            }
            return this
        },
        removeClass: function(d) {
            var m,
                f, G, z, l, t, p;
            if (g.isFunction(d)) return this.each(function(m) {
                g(this).removeClass(d.call(this, m, this.className))
            });
            if (d && "string" == typeof d || d === e) {
                m = (d || "").split(ja);
                t = 0;
                for (p = this.length; t < p; t++)
                    if (G = this[t], 1 === G.nodeType && G.className) {
                        f = (" " + G.className + " ").replace(Qb, " ");
                        z = 0;
                        for (l = m.length; z < l; z++)
                            for (; 0 <= f.indexOf(" " + m[z] + " ");) f = f.replace(" " + m[z] + " ", " ");
                        G.className = d ? g.trim(f) : ""
                    }
            }
            return this
        },
        toggleClass: function(d, m) {
            var e = typeof d,
                f = "boolean" == typeof m;
            return g.isFunction(d) ? this.each(function(e) {
                g(this).toggleClass(d.call(this,
                    e, this.className, m), m)
            }) : this.each(function() {
                if ("string" === e)
                    for (var z, l = 0, t = g(this), p = m, n = d.split(ja); z = n[l++];) p = f ? p : !t.hasClass(z), t[p ? "addClass" : "removeClass"](z);
                else if ("undefined" === e || "boolean" === e) this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === d ? "" : g._data(this, "__className__") || ""
            })
        },
        hasClass: function(d) {
            d = " " + d + " ";
            for (var m = 0, e = this.length; m < e; m++)
                if (1 === this[m].nodeType && 0 <= (" " + this[m].className + " ").replace(Qb, " ").indexOf(d)) return !0;
            return !1
        },
        val: function(d) {
            var m, f, G, z = this[0];
            if (arguments.length) return G = g.isFunction(d), this.each(function(f) {
                var C, z = g(this);
                if (1 === this.nodeType && (G ? C = d.call(this, f, z.val()) : C = d, null == C ? C = "" : "number" == typeof C ? C += "" : g.isArray(C) && (C = g.map(C, function(d) {
                    return null == d ? "" : d + ""
                })), m = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], !m || !("set" in m) || m.set(this, C, "value") === e)) this.value = C
            });
            if (z) return m = g.valHooks[z.type] || g.valHooks[z.nodeName.toLowerCase()], m && "get" in m && (f = m.get(z,
                "value")) !== e ? f : (f = z.value, "string" == typeof f ? f.replace(Sc, "") : null == f ? "" : f)
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function(d) {
                    var m = d.attributes.value;
                    return !m || m.specified ? d.value : d.text
                }
            },
            select: {
                get: function(d) {
                    var m, e, f = d.selectedIndex,
                        z = [],
                        l = d.options,
                        t = "select-one" === d.type;
                    if (0 > f) return null;
                    d = t ? f : 0;
                    for (e = t ? f + 1 : l.length; d < e; d++)
                        if (m = l[d], m.selected && (g.support.optDisabled ? !m.disabled : null === m.getAttribute("disabled")) && (!m.parentNode.disabled || !g.nodeName(m.parentNode, "optgroup"))) {
                            m = g(m).val();
                            if (t) return m;
                            z.push(m)
                        }
                    return t && !z.length && l.length ? g(l[f]).val() : z
                },
                set: function(d, m) {
                    var e = g.makeArray(m);
                    return g(d).find("option").each(function() {
                        this.selected = 0 <= g.inArray(g(this).val(), e)
                    }), e.length || (d.selectedIndex = -1), e
                }
            }
        },
        attrFn: {},
        attr: function(d, m, f, G) {
            var z, l, t = d.nodeType;
            if (d && !(3 === t || 8 === t || 2 === t)) {
                if (G && g.isFunction(g.fn[m])) return g(d)[m](f);
                if ("undefined" == typeof d.getAttribute) return g.prop(d, m, f);
                (G = 1 !== t || !g.isXMLDoc(d)) && (m = m.toLowerCase(), l = g.attrHooks[m] || (Rb.test(m) ? Ob :
                    fa));
                if (f !== e) {
                    if (null === f) {
                        g.removeAttr(d, m);
                        return
                    }
                    return l && "set" in l && G && (z = l.set(d, f, m)) !== e ? z : (d.setAttribute(m, f + ""), f)
                }
                return l && "get" in l && G && null !== (z = l.get(d, m)) ? z : (z = d.getAttribute(m), null === z ? e : z)
            }
        },
        removeAttr: function(d, m) {
            var e, f, l, p, t = 0;
            if (m && 1 === d.nodeType)
                for (f = m.split(ja); t < f.length; t++)(l = f[t]) && (e = g.propFix[l] || l, p = Rb.test(l), p || g.attr(d, l, ""), d.removeAttribute(Sb ? l : e), p && e in d && (d[e] = !1))
        },
        attrHooks: {
            type: {
                set: function(d, m) {
                    if (Tc.test(d.nodeName) && d.parentNode) g.error("type property can't be changed");
                    else if (!g.support.radioValue && "radio" === m && g.nodeName(d, "input")) {
                        var e = d.value;
                        return d.setAttribute("type", m), e && (d.value = e), m
                    }
                }
            },
            value: {
                get: function(d, m) {
                    return fa && g.nodeName(d, "button") ? fa.get(d, m) : m in d ? d.value : null
                },
                set: function(d, m, e) {
                    if (fa && g.nodeName(d, "button")) return fa.set(d, m, e);
                    d.value = m
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(d, m, f) {
            var G, l, p, t = d.nodeType;
            if (d && !(3 === t || 8 === t || 2 === t)) return p = 1 !== t || !g.isXMLDoc(d), p && (m = g.propFix[m] || m, l = g.propHooks[m]), f !== e ? l && "set" in l && (G = l.set(d, f, m)) !== e ? G : d[m] = f : l && "get" in l && null !== (G = l.get(d, m)) ? G : d[m]
        },
        propHooks: {
            tabIndex: {
                get: function(d) {
                    var m = d.getAttributeNode("tabindex");
                    return m && m.specified ? parseInt(m.value, 10) : Uc.test(d.nodeName) || Vc.test(d.nodeName) && d.href ? 0 : e
                }
            }
        }
    });
    Ob = {
        get: function(d,
            m) {
            var f, G = g.prop(d, m);
            return !0 === G || "boolean" != typeof G && (f = d.getAttributeNode(m)) && !1 !== f.nodeValue ? m.toLowerCase() : e
        },
        set: function(d, m, e) {
            var f;
            return !1 === m ? g.removeAttr(d, e) : (f = g.propFix[e] || e, f in d && (d[f] = !0), d.setAttribute(e, e.toLowerCase())), e
        }
    };
    Sb || (Pb = {
        name: !0,
        id: !0,
        coords: !0
    }, fa = g.valHooks.button = {
        get: function(d, m) {
            var f;
            return f = d.getAttributeNode(m), f && (Pb[m] ? "" !== f.value : f.specified) ? f.value : e
        },
        set: function(d, m, e) {
            var f = d.getAttributeNode(e);
            return f || (f = H.createAttribute(e), d.setAttributeNode(f)),
                f.value = m + ""
        }
    }, g.each(["width", "height"], function(d, m) {
        g.attrHooks[m] = g.extend(g.attrHooks[m], {
            set: function(d, y) {
                if ("" === y) return d.setAttribute(m, "auto"), y
            }
        })
    }), g.attrHooks.contenteditable = {
        get: fa.get,
        set: function(d, m, e) {
            "" === m && (m = "false");
            fa.set(d, m, e)
        }
    });
    g.support.hrefNormalized || g.each(["href", "src", "width", "height"], function(d, m) {
        g.attrHooks[m] = g.extend(g.attrHooks[m], {
            get: function(d) {
                d = d.getAttribute(m, 2);
                return null === d ? e : d
            }
        })
    });
    g.support.style || (g.attrHooks.style = {
        get: function(d) {
            return d.style.cssText.toLowerCase() ||
                e
        },
        set: function(d, m) {
            return d.style.cssText = m + ""
        }
    });
    g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, {
        get: function(d) {
            d = d.parentNode;
            return d && (d.selectedIndex, d.parentNode && d.parentNode.selectedIndex), null
        }
    }));
    g.support.enctype || (g.propFix.enctype = "encoding");
    g.support.checkOn || g.each(["radio", "checkbox"], function() {
        g.valHooks[this] = {
            get: function(d) {
                return null === d.getAttribute("value") ? "on" : d.value
            }
        }
    });
    g.each(["radio", "checkbox"], function() {
        g.valHooks[this] = g.extend(g.valHooks[this], {
            set: function(d, m) {
                if (g.isArray(m)) return d.checked = 0 <= g.inArray(g(d).val(), m)
            }
        })
    });
    var hb = /^(?:textarea|input|select)$/i,
        Tb = /^([^\.]*|)(?:\.(.+)|)$/,
        Wc = /(?:^|\s)hover(\.\S+|)\b/,
        Xc = /^key/,
        Yc = /^(?:mouse|contextmenu)|click/,
        Ub = /^(?:focusinfocus|focusoutblur)$/,
        Vb = function(d) {
            return g.event.special.hover ? d : d.replace(Wc, "mouseenter$1 mouseleave$1")
        };
    g.event = {
        add: function(d, m, f, l, z) {
            var p, t, n, s, u, q, v, A, x;
            if (!(3 === d.nodeType || 8 === d.nodeType || !m || !f || !(p = g._data(d)))) {
                f.handler && (v = f, f = v.handler, z = v.selector);
                f.guid || (f.guid = g.guid++);
                (n = p.events) || (p.events = n = {});
                (t = p.handle) || (p.handle = t = function(d) {
                    return "undefined" != typeof g && (!d || g.event.triggered !== d.type) ? g.event.dispatch.apply(t.elem, arguments) : e
                }, t.elem = d);
                m = g.trim(Vb(m)).split(" ");
                for (p = 0; p < m.length; p++) {
                    s = Tb.exec(m[p]) || [];
                    u = s[1];
                    q = (s[2] || "").split(".").sort();
                    x = g.event.special[u] || {};
                    u = (z ? x.delegateType : x.bindType) || u;
                    x = g.event.special[u] || {};
                    s = g.extend({
                        type: u,
                        origType: s[1],
                        data: l,
                        handler: f,
                        guid: f.guid,
                        selector: z,
                        needsContext: z && g.expr.match.needsContext.test(z),
                        namespace: q.join(".")
                    }, v);
                    A = n[u];
                    if (!A && (A = n[u] = [], A.delegateCount = 0, !x.setup || !1 === x.setup.call(d, l, q, t))) d.addEventListener ? d.addEventListener(u, t, !1) : d.attachEvent && d.attachEvent("on" + u, t);
                    x.add && (x.add.call(d, s), s.handler.guid || (s.handler.guid = f.guid));
                    z ? A.splice(A.delegateCount++, 0, s) : A.push(s);
                    g.event.global[u] = !0
                }
                d = null
            }
        },
        global: {},
        remove: function(d, m, e, f, l) {
            var p, t, n, s, u, q, v, A, x, B, E = g.hasData(d) && g._data(d);
            if (E && (v = E.events)) {
                m = g.trim(Vb(m || "")).split(" ");
                for (p = 0; p < m.length; p++)
                    if (t = Tb.exec(m[p]) || [], n = s = t[1], t = t[2], n) {
                        A = g.event.special[n] || {};
                        n = (f ? A.delegateType : A.bindType) || n;
                        x = v[n] || [];
                        u = x.length;
                        t = t ? RegExp("(^|\\.)" + t.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (q = 0; q < x.length; q++) B = x[q], (l || s === B.origType) && (!e || e.guid === B.guid) && (!t || t.test(B.namespace)) && (!f || f === B.selector || "**" === f && B.selector) && (x.splice(q--, 1), B.selector && x.delegateCount--, A.remove && A.remove.call(d, B));
                        0 === x.length && u !== x.length && ((!A.teardown || !1 === A.teardown.call(d, t, E.handle)) && g.removeEvent(d,
                            n, E.handle), delete v[n])
                    } else
                        for (n in v) g.event.remove(d, n + m[p], e, f, !0);
                g.isEmptyObject(v) && (delete E.handle, g.removeData(d, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(y, m, f, l) {
            if (!f || 3 !== f.nodeType && 8 !== f.nodeType) {
                var z, p, t, n, s, u, q, v = y.type || y;
                n = [];
                if (!Ub.test(v + g.event.triggered) && (0 <= v.indexOf("!") && (v = v.slice(0, -1), z = !0), 0 <= v.indexOf(".") && (n = v.split("."), v = n.shift(), n.sort()), f && !g.event.customEvent[v] || g.event.global[v]))
                    if (y = "object" == typeof y ? y[g.expando] ?
                        y : new g.Event(v, y) : new g.Event(v), y.type = v, y.isTrigger = !0, y.exclusive = z, y.namespace = n.join("."), y.namespace_re = y.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n = 0 > v.indexOf(":") ? "on" + v : "", f) {
                        if (y.result = e, y.target || (y.target = f), m = null != m ? g.makeArray(m) : [], m.unshift(y), s = g.event.special[v] || {}, !(s.trigger && !1 === s.trigger.apply(f, m))) {
                            q = [
                                [f, s.bindType || v]
                            ];
                            if (!l && !s.noBubble && !g.isWindow(f)) {
                                p = s.delegateType || v;
                                z = Ub.test(p + v) ? f : f.parentNode;
                                for (t = f; z; z = z.parentNode) q.push([z, p]),
                                    t = z;
                                t === (f.ownerDocument || H) && q.push([t.defaultView || t.parentWindow || d, p])
                            }
                            for (p = 0; p < q.length && !y.isPropagationStopped(); p++) z = q[p][0], y.type = q[p][1], (u = (g._data(z, "events") || {})[y.type] && g._data(z, "handle")) && u.apply(z, m), (u = n && z[n]) && g.acceptData(z) && u.apply && !1 === u.apply(z, m) && y.preventDefault();
                            return y.type = v, !l && !y.isDefaultPrevented() && (!s._default || !1 === s._default.apply(f.ownerDocument, m)) && ("click" !== v || !g.nodeName(f, "a")) && g.acceptData(f) && n && f[v] && ("focus" !== v && "blur" !== v || 0 !== y.target.offsetWidth) &&
                                !g.isWindow(f) && (t = f[n], t && (f[n] = null), g.event.triggered = v, f[v](), g.event.triggered = e, t && (f[n] = t)), y.result
                        }
                    } else
                        for (p in f = g.cache, f) f[p].events && f[p].events[v] && g.event.trigger(y, m, f[p].handle.elem, !0)
            }
        },
        dispatch: function(y) {
            y = g.event.fix(y || d.event);
            var m, f, l, p, n, t, s = (g._data(this, "events") || {})[y.type] || [],
                u = s.delegateCount,
                q = ea.call(arguments),
                v = !y.exclusive && !y.namespace,
                A = g.event.special[y.type] || {},
                x = [];
            q[0] = y;
            y.delegateTarget = this;
            if (!(A.preDispatch && !1 === A.preDispatch.call(this, y))) {
                if (u &&
                    (!y.button || "click" !== y.type))
                    for (f = y.target; f != this; f = f.parentNode || this)
                        if (!0 !== f.disabled || "click" !== y.type) {
                            p = {};
                            n = [];
                            for (m = 0; m < u; m++) l = s[m], t = l.selector, p[t] === e && (p[t] = l.needsContext ? 0 <= g(t, this).index(f) : g.find(t, this, null, [f]).length), p[t] && n.push(l);
                            n.length && x.push({
                                elem: f,
                                matches: n
                            })
                        }
                s.length > u && x.push({
                    elem: this,
                    matches: s.slice(u)
                });
                for (m = 0; m < x.length && !y.isPropagationStopped(); m++) {
                    p = x[m];
                    y.currentTarget = p.elem;
                    for (f = 0; f < p.matches.length && !y.isImmediatePropagationStopped(); f++)
                        if (l = p.matches[f],
                            v || !y.namespace && !l.namespace || y.namespace_re && y.namespace_re.test(l.namespace)) y.data = l.data, y.handleObj = l, l = ((g.event.special[l.origType] || {}).handle || l.handler).apply(p.elem, q), l !== e && (y.result = l, !1 === l && (y.preventDefault(), y.stopPropagation()))
                }
                return A.postDispatch && A.postDispatch.call(this, y), y.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(d, m) {
                return null == d.which && (d.which = null != m.charCode ? m.charCode : m.keyCode), d
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(d, m) {
                var f, g, l, p = m.button,
                    t = m.fromElement;
                return null == d.pageX && null != m.clientX && (f = d.target.ownerDocument || H, g = f.documentElement, l = f.body, d.pageX = m.clientX + (g && g.scrollLeft || l && l.scrollLeft || 0) - (g && g.clientLeft ||
                    l && l.clientLeft || 0), d.pageY = m.clientY + (g && g.scrollTop || l && l.scrollTop || 0) - (g && g.clientTop || l && l.clientTop || 0)), !d.relatedTarget && t && (d.relatedTarget = t === d.target ? m.toElement : t), !d.which && p !== e && (d.which = p & 1 ? 1 : p & 2 ? 3 : p & 4 ? 2 : 0), d
            }
        },
        fix: function(d) {
            if (d[g.expando]) return d;
            var m, e, f = d,
                l = g.event.fixHooks[d.type] || {},
                p = l.props ? this.props.concat(l.props) : this.props;
            d = g.Event(f);
            for (m = p.length; m;) e = p[--m], d[e] = f[e];
            return d.target || (d.target = f.srcElement || H), 3 === d.target.nodeType && (d.target = d.target.parentNode),
                d.metaKey = !!d.metaKey, l.filter ? l.filter(d, f) : d
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(d, m, e) {
                    g.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function(d, m) {
                    this.onbeforeunload === m && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(d, m, e, f) {
            d = g.extend(new g.Event, e, {
                type: d,
                isSimulated: !0,
                originalEvent: {}
            });
            f ? g.event.trigger(d, null, m) : g.event.dispatch.call(m, d);
            d.isDefaultPrevented() && e.preventDefault()
        }
    };
    g.event.handle =
        g.event.dispatch;
    g.removeEvent = H.removeEventListener ? function(d, m, e) {
        d.removeEventListener && d.removeEventListener(m, e, !1)
    } : function(d, m, e) {
        m = "on" + m;
        d.detachEvent && ("undefined" == typeof d[m] && (d[m] = null), d.detachEvent(m, e))
    };
    g.Event = function(d, m) {
        if (this instanceof g.Event) d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || !1 === d.returnValue || d.getPreventDefault && d.getPreventDefault() ? q : n) : this.type = d, m && g.extend(this, m), this.timeStamp = d && d.timeStamp || g.now(),
            this[g.expando] = !0;
        else return new g.Event(d, m)
    };
    g.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = q;
            var d = this.originalEvent;
            d && (d.preventDefault ? d.preventDefault() : d.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = q;
            var d = this.originalEvent;
            d && (d.stopPropagation && d.stopPropagation(), d.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = q;
            this.stopPropagation()
        },
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n
    };
    g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(d, m) {
        g.event.special[d] = {
            delegateType: m,
            bindType: m,
            handle: function(d) {
                var e, y = d.relatedTarget,
                    f = d.handleObj;
                if (!y || y !== this && !g.contains(this, y)) d.type = f.origType, e = f.handler.apply(this, arguments), d.type = m;
                return e
            }
        }
    });
    g.support.submitBubbles || (g.event.special.submit = {
        setup: function() {
            if (g.nodeName(this, "form")) return !1;
            g.event.add(this, "click._submit keypress._submit", function(d) {
                d = d.target;
                (d = g.nodeName(d, "input") || g.nodeName(d, "button") ?
                    d.form : e) && !g._data(d, "_submit_attached") && (g.event.add(d, "submit._submit", function(d) {
                    d._submit_bubble = !0
                }), g._data(d, "_submit_attached", !0))
            })
        },
        postDispatch: function(d) {
            d._submit_bubble && (delete d._submit_bubble, this.parentNode && !d.isTrigger && g.event.simulate("submit", this.parentNode, d, !0))
        },
        teardown: function() {
            if (g.nodeName(this, "form")) return !1;
            g.event.remove(this, "._submit")
        }
    });
    g.support.changeBubbles || (g.event.special.change = {
        setup: function() {
            if (hb.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) g.event.add(this, "propertychange._change", function(d) {
                    "checked" === d.originalEvent.propertyName && (this._just_changed = !0)
                }), g.event.add(this, "click._change", function(d) {
                    this._just_changed && !d.isTrigger && (this._just_changed = !1);
                    g.event.simulate("change", this, d, !0)
                });
                return !1
            }
            g.event.add(this, "beforeactivate._change", function(d) {
                d = d.target;
                hb.test(d.nodeName) && !g._data(d, "_change_attached") && (g.event.add(d, "change._change", function(d) {
                    this.parentNode && !d.isSimulated && !d.isTrigger &&
                        g.event.simulate("change", this.parentNode, d, !0)
                }), g._data(d, "_change_attached", !0))
            })
        },
        handle: function(d) {
            var m = d.target;
            if (this !== m || d.isSimulated || d.isTrigger || "radio" !== m.type && "checkbox" !== m.type) return d.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return g.event.remove(this, "._change"), !hb.test(this.nodeName)
        }
    });
    g.support.focusinBubbles || g.each({
        focus: "focusin",
        blur: "focusout"
    }, function(d, m) {
        var e = 0,
            f = function(d) {
                g.event.simulate(m, d.target, g.event.fix(d), !0)
            };
        g.event.special[m] = {
            setup: function() {
                0 === e++ && H.addEventListener(d, f, !0)
            },
            teardown: function() {
                0 === --e && H.removeEventListener(d, f, !0)
            }
        }
    });
    g.fn.extend({
        on: function(d, m, f, l, p) {
            var F, t;
            if ("object" == typeof d) {
                "string" != typeof m && (f = f || m, m = e);
                for (t in d) this.on(t, m, f, d[t], p);
                return this
            }
            null == f && null == l ? (l = m, f = m = e) : null == l && ("string" == typeof m ? (l = f, f = e) : (l = f, f = m, m = e));
            if (!1 === l) l = n;
            else if (!l) return this;
            return 1 === p && (F = l, l = function(d) {
                return g().off(d), F.apply(this, arguments)
            }, l.guid = F.guid || (F.guid = g.guid++)), this.each(function() {
                g.event.add(this,
                    d, l, f, m)
            })
        },
        one: function(d, m, e, f) {
            return this.on(d, m, e, f, 1)
        },
        off: function(d, m, f) {
            var l, p;
            if (d && d.preventDefault && d.handleObj) return l = d.handleObj, g(d.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler), this;
            if ("object" == typeof d) {
                for (p in d) this.off(p, m, d[p]);
                return this
            }
            if (!1 === m || "function" == typeof m) f = m, m = e;
            return !1 === f && (f = n), this.each(function() {
                g.event.remove(this, d, f, m)
            })
        },
        bind: function(d, m, e) {
            return this.on(d, null, m, e)
        },
        unbind: function(d, m) {
            return this.off(d,
                null, m)
        },
        live: function(d, m, e) {
            return g(this.context).on(d, this.selector, m, e), this
        },
        die: function(d, m) {
            return g(this.context).off(d, this.selector || "**", m), this
        },
        delegate: function(d, m, e, f) {
            return this.on(m, d, e, f)
        },
        undelegate: function(d, m, e) {
            return 1 === arguments.length ? this.off(d, "**") : this.off(m, d || "**", e)
        },
        trigger: function(d, m) {
            return this.each(function() {
                g.event.trigger(d, m, this)
            })
        },
        triggerHandler: function(d, m) {
            if (this[0]) return g.event.trigger(d, m, this[0], !0)
        },
        toggle: function(d) {
            var m = arguments,
                e =
                d.guid || g.guid++,
                f = 0,
                l = function(e) {
                    var l = (g._data(this, "lastToggle" + d.guid) || 0) % f;
                    return g._data(this, "lastToggle" + d.guid, l + 1), e.preventDefault(), m[l].apply(this, arguments) || !1
                };
            for (l.guid = e; f < m.length;) m[f++].guid = e;
            return this.click(l)
        },
        hover: function(d, m) {
            return this.mouseenter(d).mouseleave(m || d)
        }
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(d, m) {
            g.fn[m] = function(d, e) {
                return null == e && (e = d, d = null), 0 < arguments.length ? this.on(m, null, d, e) : this.trigger(m)
            };
            Xc.test(m) && (g.event.fixHooks[m] = g.event.keyHooks);
            Yc.test(m) && (g.event.fixHooks[m] = g.event.mouseHooks)
        });
    var Zc = d,
        J = function(d, m, e, f) {
            e = e || [];
            m = m || ba;
            var g, l, p, n, s = m.nodeType;
            if (!d || "string" != typeof d) return e;
            if (1 !== s && 9 !== s) return [];
            p = Oa(m);
            if (!p && !f && (g = $c.exec(d)))
                if (n = g[1])
                    if (9 === s) {
                        l = m.getElementById(n);
                        if (!l || !l.parentNode) return e;
                        if (l.id === n) return e.push(l), e
                    } else {
                        if (m.ownerDocument &&
                            (l = m.ownerDocument.getElementById(n)) && Wb(m, l) && l.id === n) return e.push(l), e
                    } else {
                if (g[2]) return sa.apply(e, ta.call(m.getElementsByTagName(d), 0)), e;
                if ((n = g[3]) && Xb && m.getElementsByClassName) return sa.apply(e, ta.call(m.getElementsByClassName(n), 0)), e
            }
            return ib(d.replace(Pa, "$1"), m, e, f, p)
        },
        za = function(d) {
            return function(m) {
                return "input" === m.nodeName.toLowerCase() && m.type === d
            }
        },
        Yb = function(d) {
            return function(m) {
                var e = m.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && m.type === d
            }
        },
        ma = function(d) {
            return ca(function(e) {
                return e = +e, ca(function(f, g) {
                    for (var l, p = d([], f.length, e), t = p.length; t--;) f[l = p[t]] && (f[l] = !(g[l] = f[l]))
                })
            })
        },
        Qa = function(d, e, f) {
            if (d === e) return f;
            for (d = d.nextSibling; d;) {
                if (d === e) return -1;
                d = d.nextSibling
            }
            return 1
        },
        Sa = function(d, e) {
            var f, g, l, p, t, n, s;
            if (t = Zb[M][d]) return e ? 0 : t.slice(0);
            t = d;
            n = [];
            for (s = P.preFilter; t;) {
                if (!f || (g = ad.exec(t))) g && (t = t.slice(g[0].length)), n.push(l = []);
                f = !1;
                if (g = bd.exec(t)) l.push(f = new $b(g.shift())), t = t.slice(f.length), f.type = g[0].replace(Pa, " ");
                for (p in P.filter)(g = Ra[p].exec(t)) &&
                    (!s[p] || (g = s[p](g, ba, !0))) && (l.push(f = new $b(g.shift())), t = t.slice(f.length), f.type = p, f.matches = g);
                if (!f) break
            }
            return e ? t.length : t ? J.error(d) : Zb(d, n).slice(0)
        },
        kb = function(d, e, f) {
            var g = e.dir,
                l = f && "parentNode" === e.dir,
                p = cd++;
            return e.first ? function(e, m, f) {
                for (; e = e[g];)
                    if (l || 1 === e.nodeType) return d(e, m, f)
            } : function(e, m, f) {
                if (f)
                    for (; e = e[g];) {
                        if ((l || 1 === e.nodeType) && d(e, m, f)) return e
                    } else
                        for (var C, n = Aa + " " + p + " ", s = n + jb; e = e[g];)
                            if (l || 1 === e.nodeType) {
                                if ((C = e[M]) === s) return e.sizset;
                                if ("string" == typeof C &&
                                    0 === C.indexOf(n)) {
                                    if (e.sizset) return e
                                } else {
                                    e[M] = s;
                                    if (d(e, m, f)) return e.sizset = !0, e;
                                    e.sizset = !1
                                }
                            }
            }
        },
        lb = function(d) {
            return 1 < d.length ? function(e, f, g) {
                for (var l = d.length; l--;)
                    if (!d[l](e, f, g)) return !1;
                return !0
            } : d[0]
        },
        Ta = function(d, e, f, g, l) {
            for (var p, t = [], n = 0, s = d.length, u = null != e; n < s; n++)
                if (p = d[n])
                    if (!f || f(p, g, l)) t.push(p), u && e.push(n);
            return t
        },
        mb = function(d, e, f, g, l, p) {
            return g && !g[M] && (g = mb(g)), l && !l[M] && (l = mb(l, p)), ca(function(p, n, s, F) {
                if (!p || !l) {
                    var u, q, v = [],
                        A = [],
                        x = n.length;
                    if (!(q = p)) {
                        q = e || "*";
                        var B =
                            s.nodeType ? [s] : s,
                            E = [];
                        u = 0;
                        for (var D = B.length; u < D; u++) J(q, B[u], E, p);
                        q = E
                    }
                    B = d && (p || !e) ? Ta(q, v, d, s, F) : q;
                    E = f ? l || (p ? d : x || g) ? [] : n : B;
                    f && f(B, E, s, F);
                    if (g) {
                        q = Ta(E, A);
                        g(q, [], s, F);
                        for (s = q.length; s--;)
                            if (u = q[s]) E[A[s]] = !(B[A[s]] = u)
                    }
                    if (p)
                        for (s = d && E.length; s--;) {
                            if (u = E[s]) p[v[s]] = !(n[v[s]] = u)
                        } else E = Ta(E === n ? E.splice(x, E.length) : E), l ? l(null, n, E, F) : sa.apply(n, E)
                }
            })
        },
        nb = function(d) {
            var e, f, g, l = d.length,
                p = P.relative[d[0].type];
            f = p || P.relative[" "];
            for (var t = p ? 1 : 0, n = kb(function(d) {
                return d === e
            }, f, !0), s = kb(function(d) {
                return -1 <
                    ac.call(e, d)
            }, f, !0), u = [
                function(d, f, y) {
                    return !p && (y || f !== Ua) || ((e = f).nodeType ? n(d, f, y) : s(d, f, y))
                }
            ]; t < l; t++)
                if (f = P.relative[d[t].type]) u = [kb(lb(u), f)];
                else {
                    f = P.filter[d[t].type].apply(null, d[t].matches);
                    if (f[M]) {
                        for (g = ++t; g < l && !P.relative[d[g].type]; g++);
                        return mb(1 < t && lb(u), 1 < t && d.slice(0, t - 1).join("").replace(Pa, "$1"), f, t < g && nb(d.slice(t, g)), g < l && nb(d = d.slice(g)), g < l && d.join(""))
                    }
                    u.push(f)
                }
            return lb(u)
        },
        ib = function(d, e, f, g, l) {
            var p, t, n, s, u = Sa(d);
            if (!g && 1 === u.length) {
                t = u[0] = u[0].slice(0);
                if (2 < t.length &&
                    "ID" === (n = t[0]).type && 9 === e.nodeType && !l && P.relative[t[1].type]) {
                    e = P.find.ID(n.matches[0].replace(na, ""), e, l)[0];
                    if (!e) return f;
                    d = d.slice(t.shift().length)
                }
                for (p = Ra.POS.test(d) ? -1 : t.length - 1; 0 <= p; p--) {
                    n = t[p];
                    if (P.relative[s = n.type]) break;
                    if (s = P.find[s])
                        if (g = s(n.matches[0].replace(na, ""), ob.test(t[0].type) && e.parentNode || e, l)) {
                            t.splice(p, 1);
                            d = g.length && t.join("");
                            if (!d) return sa.apply(f, ta.call(g, 0)), f;
                            break
                        }
                }
            }
            return pb(d, u)(g, e, l, f, ob.test(d)), f
        },
        bc = function() {},
        jb, qb, P, Va, Oa, Wb, pb, rb, Ba, Ua, cc = !0,
        M = ("sizcache" + Math.random()).replace(".", ""),
        $b = String,
        ba = Zc.document,
        aa = ba.documentElement,
        Aa = 0,
        cd = 0,
        dd = [].pop,
        sa = [].push,
        ta = [].slice,
        ac = [].indexOf || function(d) {
            for (var e = 0, f = this.length; e < f; e++)
                if (this[e] === d) return e;
            return -1
        },
        ca = function(d, e) {
            return d[M] = null == e || e, d
        },
        sb = function() {
            var d = {},
                e = [];
            return ca(function(f, g) {
                return e.push(f) > P.cacheLength && delete d[e.shift()], d[f] = g
            }, d)
        },
        dc = sb(),
        Zb = sb(),
        ec = sb(),
        fc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        tb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + fc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Pa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        ad = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        bd = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ed = RegExp(tb),
        $c = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        ob = /[\x20\t\r\n\f]*[+~]/,
        fd = /h\d/i,
        gd = /input|select|textarea|button/i,
        na = /\\(?!\\)/g,
        Ra = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + fc),
            PSEUDO: RegExp("^" + tb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ga = function(d) {
            var e = ba.createElement("div");
            try {
                return d(e)
            } catch (f) {
                return !1
            } finally {}
        },
        hd = ga(function(d) {
            return d.appendChild(ba.createComment("")), !d.getElementsByTagName("*").length
        }),
        id = ga(function(d) {
            return d.innerHTML = "<a href='#'></a>", d.firstChild && "undefined" !== typeof d.firstChild.getAttribute && "#" === d.firstChild.getAttribute("href")
        }),
        jd = ga(function(d) {
            d.innerHTML = "<select></select>";
            d = typeof d.lastChild.getAttribute("multiple");
            return "boolean" !== d && "string" !== d
        }),
        Xb = ga(function(d) {
            return d.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !d.getElementsByClassName || !d.getElementsByClassName("e").length ? !1 : (d.lastChild.className = "e", 2 === d.getElementsByClassName("e").length)
        }),
        kd = ga(function(d) {
            d.id = M + 0;
            d.innerHTML = "<a name='" + M + "'></a><div name='" + M + "'></div>";
            aa.insertBefore(d, aa.firstChild);
            var e = ba.getElementsByName &&
                ba.getElementsByName(M).length === 2 + ba.getElementsByName(M + 0).length;
            return qb = !ba.getElementById(M), aa.removeChild(d), e
        });
    try {
        ta.call(aa.childNodes, 0)[0].nodeType
    } catch (Ud) {
        ta = function(d) {
            for (var e, f = []; e = this[d]; d++) f.push(e);
            return f
        }
    }
    J.matches = function(d, e) {
        return J(d, null, null, e)
    };
    J.matchesSelector = function(d, e) {
        return 0 < J(e, null, null, [d]).length
    };
    Va = J.getText = function(d) {
        var e, f = "",
            g = 0;
        if (e = d.nodeType)
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof d.textContent) return d.textContent;
                for (d = d.firstChild; d; d =
                    d.nextSibling) f += Va(d)
            } else {
                if (3 === e || 4 === e) return d.nodeValue
            } else
            for (; e = d[g]; g++) f += Va(e);
        return f
    };
    Oa = J.isXML = function(d) {
        return (d = d && (d.ownerDocument || d).documentElement) ? "HTML" !== d.nodeName : !1
    };
    Wb = J.contains = aa.contains ? function(d, e) {
        var f = 9 === d.nodeType ? d.documentElement : d,
            g = e && e.parentNode;
        return d === g || !(!g || !(1 === g.nodeType && f.contains && f.contains(g)))
    } : aa.compareDocumentPosition ? function(d, e) {
        return e && !!(d.compareDocumentPosition(e) & 16)
    } : function(d, e) {
        for (; e = e.parentNode;)
            if (e === d) return !0;
        return !1
    };
    J.attr = function(d, e) {
        var f, g = Oa(d);
        return g || (e = e.toLowerCase()), (f = P.attrHandle[e]) ? f(d) : g || jd ? d.getAttribute(e) : (f = d.getAttributeNode(e), f ? "boolean" == typeof d[e] ? d[e] ? e : null : f.specified ? f.value : null : null)
    };
    P = J.selectors = {
        cacheLength: 50,
        createPseudo: ca,
        match: Ra,
        attrHandle: id ? {} : {
            href: function(d) {
                return d.getAttribute("href", 2)
            },
            type: function(d) {
                return d.getAttribute("type")
            }
        },
        find: {
            ID: qb ? function(d, e, f) {
                if ("undefined" !== typeof e.getElementById && !f) return (d = e.getElementById(d)) && d.parentNode ? [d] : []
            } : function(d, e, f) {
                if ("undefined" !== typeof e.getElementById && !f) return (e = e.getElementById(d)) ? e.id === d || "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id").value === d ? [e] : void 0 : []
            },
            TAG: hd ? function(d, e) {
                if ("undefined" !== typeof e.getElementsByTagName) return e.getElementsByTagName(d)
            } : function(d, e) {
                var f = e.getElementsByTagName(d);
                if ("*" === d) {
                    for (var g, l = [], p = 0; g = f[p]; p++) 1 === g.nodeType && l.push(g);
                    return l
                }
                return f
            },
            NAME: kd && function(d, e) {
                if ("undefined" !== typeof e.getElementsByName) return e.getElementsByName(name)
            },
            CLASS: Xb && function(d, e, f) {
                if ("undefined" !== typeof e.getElementsByClassName && !f) return e.getElementsByClassName(d)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(d) {
                return d[1] = d[1].replace(na, ""), d[3] = (d[4] || d[5] || "").replace(na, ""), "~=" === d[2] && (d[3] = " " + d[3] + " "), d.slice(0, 4)
            },
            CHILD: function(d) {
                return d[1] = d[1].toLowerCase(), "nth" === d[1] ? (d[2] || J.error(d[0]), d[3] = +(d[3] ? d[4] + (d[5] || 1) :
                    2 * ("even" === d[2] || "odd" === d[2])), d[4] = +(d[6] + d[7] || "odd" === d[2])) : d[2] && J.error(d[0]), d
            },
            PSEUDO: function(d) {
                var e, f;
                if (Ra.CHILD.test(d[0])) return null;
                if (d[3]) d[2] = d[3];
                else if (e = d[4]) ed.test(e) && (f = Sa(e, !0)) && (f = e.indexOf(")", e.length - f) - e.length) && (e = e.slice(0, f), d[0] = d[0].slice(0, f)), d[2] = e;
                return d.slice(0, 3)
            }
        },
        filter: {
            ID: qb ? function(d) {
                return d = d.replace(na, ""),
                    function(e) {
                        return e.getAttribute("id") === d
                    }
            } : function(d) {
                return d = d.replace(na, ""),
                    function(e) {
                        return (e = "undefined" !== typeof e.getAttributeNode &&
                            e.getAttributeNode("id")) && e.value === d
                    }
            },
            TAG: function(d) {
                return "*" === d ? function() {
                    return !0
                } : (d = d.replace(na, "").toLowerCase(), function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === d
                })
            },
            CLASS: function(d) {
                var e = dc[M][d];
                return e || (e = dc(d, RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(d) {
                        return e.test(d.className || "undefined" !== typeof d.getAttribute && d.getAttribute("class") || "")
                    }
            },
            ATTR: function(d, e, f) {
                return function(g) {
                    g = J.attr(g, d);
                    return null == g ? "!=" === e : e ? (g += "", "=" ===
                        e ? g === f : "!=" === e ? g !== f : "^=" === e ? f && 0 === g.indexOf(f) : "*=" === e ? f && -1 < g.indexOf(f) : "$=" === e ? f && g.substr(g.length - f.length) === f : "~=" === e ? -1 < (" " + g + " ").indexOf(f) : "|=" === e ? g === f || g.substr(0, f.length + 1) === f + "-" : !1) : !0
                }
            },
            CHILD: function(d, e, f, g) {
                return "nth" === d ? function(d) {
                    var e, m;
                    e = d.parentNode;
                    if (1 === f && 0 === g) return !0;
                    if (e) {
                        m = 0;
                        for (e = e.firstChild; e && !(1 === e.nodeType && (m++, d === e)); e = e.nextSibling);
                    }
                    return m -= g, m === f || 0 === m % f && 0 <= m / f
                } : function(e) {
                    var f = e;
                    switch (d) {
                        case "only":
                        case "first":
                            for (; f = f.previousSibling;)
                                if (1 ===
                                    f.nodeType) return !1;
                            if ("first" === d) return !0;
                            f = e;
                        case "last":
                            for (; f = f.nextSibling;)
                                if (1 === f.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(d, e) {
                var f, g = P.pseudos[d] || P.setFilters[d.toLowerCase()] || J.error("unsupported pseudo: " + d);
                return g[M] ? g(e) : 1 < g.length ? (f = [d, d, "", e], P.setFilters.hasOwnProperty(d.toLowerCase()) ? ca(function(d, f) {
                    for (var y, l = g(d, e), p = l.length; p--;) y = ac.call(d, l[p]), d[y] = !(f[y] = l[p])
                }) : function(d) {
                    return g(d, 0, f)
                }) : g
            }
        },
        pseudos: {
            not: ca(function(d) {
                var e = [],
                    f = [],
                    g = pb(d.replace(Pa, "$1"));
                return g[M] ? ca(function(d, e, f, m) {
                    m = g(d, null, m, []);
                    for (var y = d.length; y--;)
                        if (f = m[y]) d[y] = !(e[y] = f)
                }) : function(d, y, l) {
                    return e[0] = d, g(e, null, l, f), !f.pop()
                }
            }),
            has: ca(function(d) {
                return function(e) {
                    return 0 < J(d, e).length
                }
            }),
            contains: ca(function(d) {
                return function(e) {
                    return -1 < (e.textContent || e.innerText || Va(e)).indexOf(d)
                }
            }),
            enabled: function(d) {
                return !1 === d.disabled
            },
            disabled: function(d) {
                return !0 === d.disabled
            },
            checked: function(d) {
                var e = d.nodeName.toLowerCase();
                return "input" === e && !!d.checked || "option" ===
                    e && !!d.selected
            },
            selected: function(d) {
                return d.parentNode && d.parentNode.selectedIndex, !0 === d.selected
            },
            parent: function(d) {
                return !P.pseudos.empty(d)
            },
            empty: function(d) {
                var e;
                for (d = d.firstChild; d;) {
                    if ("@" < d.nodeName || 3 === (e = d.nodeType) || 4 === e) return !1;
                    d = d.nextSibling
                }
                return !0
            },
            header: function(d) {
                return fd.test(d.nodeName)
            },
            text: function(d) {
                var e, f;
                return "input" === d.nodeName.toLowerCase() && "text" === (e = d.type) && (null == (f = d.getAttribute("type")) || f.toLowerCase() === e)
            },
            radio: za("radio"),
            checkbox: za("checkbox"),
            file: za("file"),
            password: za("password"),
            image: za("image"),
            submit: Yb("submit"),
            reset: Yb("reset"),
            button: function(d) {
                var e = d.nodeName.toLowerCase();
                return "input" === e && "button" === d.type || "button" === e
            },
            input: function(d) {
                return gd.test(d.nodeName)
            },
            focus: function(d) {
                var e = d.ownerDocument;
                return d === e.activeElement && (!e.hasFocus || e.hasFocus()) && (!!d.type || !!d.href)
            },
            active: function(d) {
                return d === d.ownerDocument.activeElement
            },
            first: ma(function() {
                return [0]
            }),
            last: ma(function(d, e) {
                return [e - 1]
            }),
            eq: ma(function(d,
                e, f) {
                return [0 > f ? f + e : f]
            }),
            even: ma(function(d, e) {
                for (var f = 0; f < e; f += 2) d.push(f);
                return d
            }),
            odd: ma(function(d, e) {
                for (var f = 1; f < e; f += 2) d.push(f);
                return d
            }),
            lt: ma(function(d, e, f) {
                for (e = 0 > f ? f + e : f; 0 <= --e;) d.push(e);
                return d
            }),
            gt: ma(function(d, e, f) {
                for (f = 0 > f ? f + e : f; ++f < e;) d.push(f);
                return d
            })
        }
    };
    rb = aa.compareDocumentPosition ? function(d, e) {
        return d === e ? (Ba = !0, 0) : (!d.compareDocumentPosition || !e.compareDocumentPosition ? d.compareDocumentPosition : d.compareDocumentPosition(e) & 4) ? -1 : 1
    } : function(d, e) {
        if (d === e) return Ba = !0, 0;
        if (d.sourceIndex && e.sourceIndex) return d.sourceIndex - e.sourceIndex;
        var f, g, l = [],
            p = [];
        f = d.parentNode;
        g = e.parentNode;
        var n = f;
        if (f === g) return Qa(d, e);
        if (!f) return -1;
        if (!g) return 1;
        for (; n;) l.unshift(n), n = n.parentNode;
        for (n = g; n;) p.unshift(n), n = n.parentNode;
        f = l.length;
        g = p.length;
        for (n = 0; n < f && n < g; n++)
            if (l[n] !== p[n]) return Qa(l[n], p[n]);
        return n === f ? Qa(d, p[n], -1) : Qa(l[n], e, 1)
    };
    [0, 0].sort(rb);
    cc = !Ba;
    J.uniqueSort = function(d) {
        var e, f = 1;
        Ba = cc;
        d.sort(rb);
        if (Ba)
            for (; e = d[f]; f++) e === d[f - 1] && d.splice(f--, 1);
        return d
    };
    J.error = function(d) {
        throw Error("Syntax error, unrecognized expression: " + d);
    };
    pb = J.compile = function(d, e) {
        var f, g = [],
            l = [],
            p = ec[M][d];
        if (!p) {
            e || (e = Sa(d));
            for (f = e.length; f--;) p = nb(e[f]), p[M] ? g.push(p) : l.push(p);
            var n = 0 < g.length,
                s = 0 < l.length,
                u = function(d, e, f, m, y) {
                    var p, C, q = [],
                        F = 0,
                        v = "0",
                        A = d && [],
                        x = null != y,
                        B = Ua,
                        E = d || s && P.find.TAG("*", y && e.parentNode || e),
                        D = Aa += null == B ? 1 : Math.E;
                    for (x && (Ua = e !== ba && e, jb = u.el); null != (y = E[v]); v++) {
                        if (s && y) {
                            for (p = 0; C = l[p]; p++)
                                if (C(y, e, f)) {
                                    m.push(y);
                                    break
                                }
                            x && (Aa = D, jb =
                                ++u.el)
                        }
                        n && ((y = !C && y) && F--, d && A.push(y))
                    }
                    F += v;
                    if (n && v !== F) {
                        for (p = 0; C = g[p]; p++) C(A, q, e, f);
                        if (d) {
                            if (0 < F)
                                for (; v--;)!A[v] && !q[v] && (q[v] = dd.call(m));
                            q = Ta(q)
                        }
                        sa.apply(m, q);
                        x && !d && 0 < q.length && 1 < F + g.length && J.uniqueSort(m)
                    }
                    return x && (Aa = D, Ua = B), A
                };
            f = (u.el = 0, n ? ca(u) : u);
            p = ec(d, f)
        }
        return p
    };
    if (ba.querySelectorAll) {
        var gc, ld = ib,
            md = /'|\\/g,
            nd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            da = [":focus"],
            Wa = [":active", ":focus"],
            Xa = aa.matchesSelector || aa.mozMatchesSelector || aa.webkitMatchesSelector || aa.oMatchesSelector ||
            aa.msMatchesSelector;
        ga(function(d) {
            d.innerHTML = "<select><option selected=''></option></select>";
            d.querySelectorAll("[selected]").length || da.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            d.querySelectorAll(":checked").length || da.push(":checked")
        });
        ga(function(d) {
            d.innerHTML = "<p test=''></p>";
            d.querySelectorAll("[test^='']").length && da.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            d.innerHTML = "<input type='hidden'/>";
            d.querySelectorAll(":enabled").length ||
                da.push(":enabled", ":disabled")
        });
        da = RegExp(da.join("|"));
        ib = function(d, e, f, g, l) {
            if (!g && !l && (!da || !da.test(d))) {
                var p, n, s = !0,
                    u = M;
                n = e;
                p = 9 === e.nodeType && d;
                if (1 === e.nodeType && "object" !== e.nodeName.toLowerCase()) {
                    p = Sa(d);
                    (s = e.getAttribute("id")) ? u = s.replace(md, "\\$&"): e.setAttribute("id", u);
                    u = "[id='" + u + "'] ";
                    for (n = p.length; n--;) p[n] = u + p[n].join("");
                    n = ob.test(d) && e.parentNode || e;
                    p = p.join(",")
                }
                if (p) try {
                    return sa.apply(f, ta.call(n.querySelectorAll(p), 0)), f
                } catch (q) {} finally {
                    s || e.removeAttribute("id")
                }
            }
            return ld(d,
                e, f, g, l)
        };
        Xa && (ga(function(d) {
            gc = Xa.call(d, "div");
            try {
                Xa.call(d, "[test!='']:sizzle"), Wa.push("!=", tb)
            } catch (e) {}
        }), Wa = RegExp(Wa.join("|")), J.matchesSelector = function(d, e) {
            e = e.replace(nd, "='$1']");
            if (!Oa(d) && !Wa.test(e) && (!da || !da.test(e))) try {
                var f = Xa.call(d, e);
                if (f || gc || d.document && 11 !== d.document.nodeType) return f
            } catch (g) {}
            return 0 < J(e, null, null, [d]).length
        })
    }
    P.pseudos.nth = P.pseudos.eq;
    P.filters = bc.prototype = P.pseudos;
    P.setFilters = new bc;
    J.attr = g.attr;
    g.find = J;
    g.expr = J.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = J.uniqueSort;
    g.text = J.getText;
    g.isXMLDoc = J.isXML;
    g.contains = J.contains;
    var od = /Until$/,
        pd = /^(?:parents|prev(?:Until|All))/,
        yc = /^.[^:#\[\.,]*$/,
        hc = g.expr.match.needsContext,
        qd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    g.fn.extend({
        find: function(d) {
            var e, f, l, p, n, t, s = this;
            if ("string" != typeof d) return g(d).filter(function() {
                e = 0;
                for (f = s.length; e < f; e++)
                    if (g.contains(s[e], this)) return !0
            });
            t = this.pushStack("", "find", d);
            e = 0;
            for (f = this.length; e < f; e++)
                if (l = t.length, g.find(d, this[e], t), 0 < e)
                    for (p = l; p <
                        t.length; p++)
                        for (n = 0; n < l; n++)
                            if (t[n] === t[p]) {
                                t.splice(p--, 1);
                                break
                            }
            return t
        },
        has: function(d) {
            var e, f = g(d, this),
                l = f.length;
            return this.filter(function() {
                for (e = 0; e < l; e++)
                    if (g.contains(this, f[e])) return !0
            })
        },
        not: function(d) {
            return this.pushStack(v(this, d, !1), "not", d)
        },
        filter: function(d) {
            return this.pushStack(v(this, d, !0), "filter", d)
        },
        is: function(d) {
            return !!d && ("string" == typeof d ? hc.test(d) ? 0 <= g(d, this.context).index(this[0]) : 0 < g.filter(d, this).length : 0 < this.filter(d).length)
        },
        closest: function(d, e) {
            for (var f,
                l = 0, p = this.length, n = [], t = hc.test(d) || "string" != typeof d ? g(d, e || this.context) : 0; l < p; l++)
                for (f = this[l]; f && f.ownerDocument && f !== e && 11 !== f.nodeType;) {
                    if (t ? -1 < t.index(f) : g.find.matchesSelector(f, d)) {
                        n.push(f);
                        break
                    }
                    f = f.parentNode
                }
            return n = 1 < n.length ? g.unique(n) : n, this.pushStack(n, "closest", d)
        },
        index: function(d) {
            return d ? "string" == typeof d ? g.inArray(this[0], g(d)) : g.inArray(d.jquery ? d[0] : d, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(d, e) {
            var f = "string" == typeof d ? g(d, e) : g.makeArray(d &&
                    d.nodeType ? [d] : d),
                l = g.merge(this.get(), f);
            return this.pushStack(x(f[0]) || x(l[0]) ? l : g.unique(l))
        },
        addBack: function(d) {
            return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
        }
    });
    g.fn.andSelf = g.fn.addBack;
    g.each({
        parent: function(d) {
            return (d = d.parentNode) && 11 !== d.nodeType ? d : null
        },
        parents: function(d) {
            return g.dir(d, "parentNode")
        },
        parentsUntil: function(d, e, f) {
            return g.dir(d, "parentNode", f)
        },
        next: function(d) {
            return D(d, "nextSibling")
        },
        prev: function(d) {
            return D(d, "previousSibling")
        },
        nextAll: function(d) {
            return g.dir(d,
                "nextSibling")
        },
        prevAll: function(d) {
            return g.dir(d, "previousSibling")
        },
        nextUntil: function(d, e, f) {
            return g.dir(d, "nextSibling", f)
        },
        prevUntil: function(d, e, f) {
            return g.dir(d, "previousSibling", f)
        },
        siblings: function(d) {
            return g.sibling((d.parentNode || {}).firstChild, d)
        },
        children: function(d) {
            return g.sibling(d.firstChild)
        },
        contents: function(d) {
            return g.nodeName(d, "iframe") ? d.contentDocument || d.contentWindow.document : g.merge([], d.childNodes)
        }
    }, function(d, e) {
        g.fn[d] = function(f, l) {
            var p = g.map(this, e, f);
            return od.test(d) ||
                (l = f), l && "string" == typeof l && (p = g.filter(l, p)), p = 1 < this.length && !qd[d] ? g.unique(p) : p, 1 < this.length && pd.test(d) && (p = p.reverse()), this.pushStack(p, d, ea.call(arguments).join(","))
        }
    });
    g.extend({
        filter: function(d, e, f) {
            return f && (d = ":not(" + d + ")"), 1 === e.length ? g.find.matchesSelector(e[0], d) ? [e[0]] : [] : g.find.matches(d, e)
        },
        dir: function(d, f, l) {
            var p = [];
            for (d = d[f]; d && 9 !== d.nodeType && (l === e || 1 !== d.nodeType || !g(d).is(l));) 1 === d.nodeType && p.push(d), d = d[f];
            return p
        },
        sibling: function(d, e) {
            for (var f = []; d; d = d.nextSibling) 1 ===
                d.nodeType && d !== e && f.push(d);
            return f
        }
    });
    var Ab = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rd = / jQuery\d+="(?:null|\d+)"/g,
        ub = /^\s+/,
        ic = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jc = /<([\w:]+)/,
        sd = /<tbody/i,
        td = /<|&#?\w+;/,
        ud = /<(?:script|style|link)/i,
        vd = /<(?:script|object|embed|option|style)/i,
        vb = RegExp("<(?:" + Ab + ")[\\s/>]", "i"),
        Bb = /^(?:checkbox|radio)$/,
        kc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        wd = /\/(java|ecma)script/i,
        xd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Z = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        lc = A(H),
        wb = lc.appendChild(H.createElement("div"));
    Z.optgroup =
        Z.option;
    Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead;
    Z.th = Z.td;
    g.support.htmlSerialize || (Z._default = [1, "X<div>", "</div>"]);
    g.fn.extend({
        text: function(d) {
            return g.access(this, function(d) {
                return d === e ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(d))
            }, null, d, arguments.length)
        },
        wrapAll: function(d) {
            if (g.isFunction(d)) return this.each(function(e) {
                g(this).wrapAll(d.call(this, e))
            });
            if (this[0]) {
                var e = g(d, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]);
                e.map(function() {
                    for (var d = this; d.firstChild && 1 === d.firstChild.nodeType;) d = d.firstChild;
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner: function(d) {
            return g.isFunction(d) ? this.each(function(e) {
                g(this).wrapInner(d.call(this, e))
            }) : this.each(function() {
                var e = g(this),
                    f = e.contents();
                f.length ? f.wrapAll(d) : e.append(d)
            })
        },
        wrap: function(d) {
            var e = g.isFunction(d);
            return this.each(function(f) {
                g(this).wrapAll(e ? d.call(this, f) : d)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                g.nodeName(this, "body") ||
                    g(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(d) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(d)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(d) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(d, this.firstChild)
            })
        },
        before: function() {
            if (!x(this[0])) return this.domManip(arguments, !1, function(d) {
                this.parentNode.insertBefore(d, this)
            });
            if (arguments.length) {
                var d = g.clean(arguments);
                return this.pushStack(g.merge(d,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!x(this[0])) return this.domManip(arguments, !1, function(d) {
                this.parentNode.insertBefore(d, this.nextSibling)
            });
            if (arguments.length) {
                var d = g.clean(arguments);
                return this.pushStack(g.merge(this, d), "after", this.selector)
            }
        },
        remove: function(d, e) {
            for (var f, l = 0; null != (f = this[l]); l++)
                if (!d || g.filter(d, [f]).length)!e && 1 === f.nodeType && (g.cleanData(f.getElementsByTagName("*")), g.cleanData([f])), f.parentNode && f.parentNode.removeChild(f);
            return this
        },
        empty: function() {
            for (var d,
                e = 0; null != (d = this[e]); e++)
                for (1 === d.nodeType && g.cleanData(d.getElementsByTagName("*")); d.firstChild;) d.removeChild(d.firstChild);
            return this
        },
        clone: function(d, e) {
            return d = null == d ? !1 : d, e = null == e ? d : e, this.map(function() {
                return g.clone(this, d, e)
            })
        },
        html: function(d) {
            return g.access(this, function(d) {
                var f = this[0] || {},
                    l = 0,
                    p = this.length;
                if (d === e) return 1 === f.nodeType ? f.innerHTML.replace(rd, "") : e;
                if ("string" == typeof d && !ud.test(d) && (g.support.htmlSerialize || !vb.test(d)) && (g.support.leadingWhitespace || !ub.test(d)) &&
                    !Z[(jc.exec(d) || ["", ""])[1].toLowerCase()]) {
                    d = d.replace(ic, "<$1></$2>");
                    try {
                        for (; l < p; l++) f = this[l] || {}, 1 === f.nodeType && (g.cleanData(f.getElementsByTagName("*")), f.innerHTML = d);
                        f = 0
                    } catch (y) {}
                }
                f && this.empty().append(d)
            }, null, d, arguments.length)
        },
        replaceWith: function(d) {
            return x(this[0]) ? this.length ? this.pushStack(g(g.isFunction(d) ? d() : d), "replaceWith", d) : this : g.isFunction(d) ? this.each(function(e) {
                var f = g(this),
                    l = f.html();
                f.replaceWith(d.call(this, e, l))
            }) : ("string" != typeof d && (d = g(d).detach()), this.each(function() {
                var e =
                    this.nextSibling,
                    f = this.parentNode;
                g(this).remove();
                e ? g(e).before(d) : g(f).append(d)
            }))
        },
        detach: function(d) {
            return this.remove(d, !0)
        },
        domManip: function(d, f, l) {
            d = [].concat.apply([], d);
            var p, n, s, t = 0,
                u = d[0],
                q = [],
                v = this.length;
            if (!g.support.checkClone && 1 < v && "string" == typeof u && kc.test(u)) return this.each(function() {
                g(this).domManip(d, f, l)
            });
            if (g.isFunction(u)) return this.each(function(p) {
                var n = g(this);
                d[0] = u.call(this, p, f ? n.html() : e);
                n.domManip(d, f, l)
            });
            if (this[0]) {
                p = g.buildFragment(d, this, q);
                s = p.fragment;
                n = s.firstChild;
                1 === s.childNodes.length && (s = n);
                if (n) {
                    f = f && g.nodeName(n, "tr");
                    for (p = p.cacheable || v - 1; t < v; t++) l.call(f && g.nodeName(this[t], "table") ? this[t].getElementsByTagName("tbody")[0] || this[t].appendChild(this[t].ownerDocument.createElement("tbody")) : this[t], t === p ? s : g.clone(s, !0, !0))
                }
                s = n = null;
                q.length && g.each(q, function(d, e) {
                    e.src ? g.ajax ? g.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : g.error("no ajax") : g.globalEval((e.text || e.textContent || e.innerHTML || "").replace(xd,
                        ""));
                    e.parentNode && e.parentNode.removeChild(e)
                })
            }
            return this
        }
    });
    g.buildFragment = function(d, f, l) {
        var p, n, s, t = d[0];
        return f = f || H, f = !f.nodeType && f[0] || f, f = f.ownerDocument || f, 1 === d.length && "string" == typeof t && 512 > t.length && f === H && "<" === t.charAt(0) && !vd.test(t) && (g.support.checkClone || !kc.test(t)) && (g.support.html5Clone || !vb.test(t)) && (n = !0, p = g.fragments[t], s = p !== e), p || (p = f.createDocumentFragment(), g.clean(d, f, p, l), n && (g.fragments[t] = s && p)), {
            fragment: p,
            cacheable: n
        }
    };
    g.fragments = {};
    g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(d, e) {
        g.fn[d] = function(f) {
            var l, p = 0,
                n = [];
            f = g(f);
            var s = f.length;
            l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s) return f[e](this[0]), this;
            for (; p < s; p++) l = (0 < p ? this.clone(!0) : this).get(), g(f[p])[e](l), n = n.concat(l);
            return this.pushStack(n, d, f.selector)
        }
    });
    g.extend({
        clone: function(d, e, f) {
            var l, n, u, t;
            g.support.html5Clone || g.isXMLDoc(d) || !vb.test("<" + d.nodeName +
                ">") ? t = d.cloneNode(!0) : (wb.innerHTML = d.outerHTML, wb.removeChild(t = wb.firstChild));
            if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (1 === d.nodeType || 11 === d.nodeType) && !g.isXMLDoc(d)) {
                p(d, t);
                l = s(d);
                n = s(t);
                for (u = 0; l[u]; ++u) n[u] && p(l[u], n[u])
            }
            if (e && (E(d, t), f)) {
                l = s(d);
                n = s(t);
                for (u = 0; l[u]; ++u) E(l[u], n[u])
            }
            return t
        },
        clean: function(d, e, f, l) {
            var p, n, s, q, v, x, B, E = e === H && lc,
                D = [];
            if (!e || "undefined" == typeof e.createDocumentFragment) e = H;
            for (p = 0; null != (s = d[p]); p++)
                if ("number" == typeof s && (s += ""), s) {
                    if ("string" ==
                        typeof s)
                        if (td.test(s)) {
                            E = E || A(e);
                            x = e.createElement("div");
                            E.appendChild(x);
                            s = s.replace(ic, "<$1></$2>");
                            n = (jc.exec(s) || ["", ""])[1].toLowerCase();
                            q = Z[n] || Z._default;
                            v = q[0];
                            for (x.innerHTML = q[1] + s + q[2]; v--;) x = x.lastChild;
                            if (!g.support.tbody) {
                                v = sd.test(s);
                                q = "table" === n && !v ? x.firstChild && x.firstChild.childNodes : "<table>" === q[1] && !v ? x.childNodes : [];
                                for (n = q.length - 1; 0 <= n; --n) g.nodeName(q[n], "tbody") && !q[n].childNodes.length && q[n].parentNode.removeChild(q[n])
                            }!g.support.leadingWhitespace && ub.test(s) && x.insertBefore(e.createTextNode(ub.exec(s)[0]),
                                x.firstChild);
                            s = x.childNodes;
                            x.parentNode.removeChild(x)
                        } else s = e.createTextNode(s);
                    s.nodeType ? D.push(s) : g.merge(D, s)
                }
            x && (s = x = E = null);
            if (!g.support.appendChecked)
                for (p = 0; null != (s = D[p]); p++) g.nodeName(s, "input") ? u(s) : "undefined" != typeof s.getElementsByTagName && g.grep(s.getElementsByTagName("input"), u);
            if (f) {
                d = function(d) {
                    if (!d.type || wd.test(d.type)) return l ? l.push(d.parentNode ? d.parentNode.removeChild(d) : d) : f.appendChild(d)
                };
                for (p = 0; null != (s = D[p]); p++)
                    if (!g.nodeName(s, "script") || !d(s)) f.appendChild(s),
                        "undefined" != typeof s.getElementsByTagName && (B = g.grep(g.merge([], s.getElementsByTagName("script")), d), D.splice.apply(D, [p + 1, 0].concat(B)), p += B.length)
            }
            return D
        },
        cleanData: function(d, e) {
            for (var f, l, p, n, s = 0, u = g.expando, q = g.cache, v = g.support.deleteExpando, x = g.event.special; null != (p = d[s]); s++)
                if (e || g.acceptData(p))
                    if (f = (l = p[u]) && q[l]) {
                        if (f.events)
                            for (n in f.events) x[n] ? g.event.remove(p, n) : g.removeEvent(p, n, f.handle);
                        q[l] && (delete q[l], v ? delete p[u] : p.removeAttribute ? p.removeAttribute(u) : p[u] = null, g.deletedIds.push(l))
                    }
        }
    });
    var Ya, ha;
    g.uaMatch = function(d) {
        d = d.toLowerCase();
        d = /(chrome)[ \/]([\w.]+)/.exec(d) || /(webkit)[ \/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || 0 > d.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [];
        return {
            browser: d[1] || "",
            version: d[2] || "0"
        }
    };
    Ya = g.uaMatch(Dc.userAgent);
    ha = {};
    Ya.browser && (ha[Ya.browser] = !0, ha.version = Ya.version);
    ha.chrome ? ha.webkit = !0 : ha.webkit && (ha.safari = !0);
    g.browser = ha;
    g.sub = function() {
        function d(e, f) {
            return new d.fn.init(e,
                f)
        }
        g.extend(!0, d, this);
        d.superclass = this;
        d.fn = d.prototype = this();
        d.fn.constructor = d;
        d.sub = this.sub;
        d.fn.init = function(f, l) {
            return l && l instanceof g && !(l instanceof d) && (l = d(l)), g.fn.init.call(this, f, l, e)
        };
        d.fn.init.prototype = d.fn;
        var e = d(H);
        return d
    };
    var U, pa, qa, xb = /alpha\([^)]*\)/i,
        yd = /opacity=([^)]*)/,
        zd = /^(top|right|bottom|left)$/,
        Ad = /^(none|table(?!-c[ea]).+)/,
        mc = /^margin/,
        zc = RegExp("^(" + Ia + ")(.*)$", "i"),
        Ca = RegExp("^(" + Ia + ")(?!px)[a-z%]+$", "i"),
        Bd = RegExp("^([-+])=(" + Ia + ")", "i"),
        bb = {},
        Cd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ia = ["Top", "Right", "Bottom", "Left"],
        Cb = ["Webkit", "O", "Moz", "ms"],
        Dd = g.fn.toggle;
    g.fn.extend({
        css: function(d, f) {
            return g.access(this, function(d, f, m) {
                return m !== e ? g.style(d, f, m) : g.css(d, f)
            }, d, f, 1 < arguments.length)
        },
        show: function() {
            return K(this, !0)
        },
        hide: function() {
            return K(this)
        },
        toggle: function(d, e) {
            var f = "boolean" == typeof d;
            return g.isFunction(d) && g.isFunction(e) ? Dd.apply(this, arguments) : this.each(function() {
                (f ? d : R(this)) ? g(this).show():
                    g(this).hide()
            })
        }
    });
    g.extend({
        cssHooks: {
            opacity: {
                get: function(d, e) {
                    if (e) {
                        var f = U(d, "opacity");
                        return "" === f ? "1" : f
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": g.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(d, f, l, p) {
            if (d && !(3 === d.nodeType || 8 === d.nodeType || !d.style)) {
                var n, s, u, q = g.camelCase(f),
                    v = d.style;
                f = g.cssProps[q] || (g.cssProps[q] = B(v, q));
                u = g.cssHooks[f] || g.cssHooks[q];
                if (l === e) return u && "get" in u && (n = u.get(d, !1, p)) !== e ? n : v[f];
                s = typeof l;
                "string" === s && (n = Bd.exec(l)) && (l = (n[1] + 1) * n[2] + parseFloat(g.css(d, f)), s = "number");
                if (!(null == l || "number" === s && isNaN(l)))
                    if ("number" === s && !g.cssNumber[q] && (l += "px"), !u || !("set" in u) || (l = u.set(d, l, p)) !== e) try {
                        v[f] = l
                    } catch (x) {}
            }
        },
        css: function(d, f, l, p) {
            var n, s, u, q = g.camelCase(f);
            return f = g.cssProps[q] || (g.cssProps[q] = B(d.style, q)), u = g.cssHooks[f] || g.cssHooks[q], u && "get" in u && (n = u.get(d, !0, p)), n === e && (n = U(d, f)), "normal" === n && f in nc && (n = nc[f]), l || p !== e ? (s = parseFloat(n), l ||
                g.isNumeric(s) ? s || 0 : n) : n
        },
        swap: function(d, e, f) {
            var g, l = {};
            for (g in e) l[g] = d.style[g], d.style[g] = e[g];
            f = f.call(d);
            for (g in e) d.style[g] = l[g];
            return f
        }
    });
    d.getComputedStyle ? U = function(e, f) {
        var l, p, n, s, u = d.getComputedStyle(e, null),
            q = e.style;
        return u && (l = u[f], "" === l && !g.contains(e.ownerDocument, e) && (l = g.style(e, f)), Ca.test(l) && mc.test(f) && (p = q.width, n = q.minWidth, s = q.maxWidth, q.minWidth = q.maxWidth = q.width = l, l = u.width, q.width = p, q.minWidth = n, q.maxWidth = s)), l
    } : H.documentElement.currentStyle && (U = function(d,
        e) {
        var f, g, l = d.currentStyle && d.currentStyle[e],
            p = d.style;
        return null == l && p && p[e] && (l = p[e]), Ca.test(l) && !zd.test(e) && (f = p.left, g = d.runtimeStyle && d.runtimeStyle.left, g && (d.runtimeStyle.left = d.currentStyle.left), p.left = "fontSize" === e ? "1em" : l, l = p.pixelLeft + "px", p.left = f, g && (d.runtimeStyle.left = g)), "" === l ? "auto" : l
    });
    g.each(["height", "width"], function(d, e) {
        g.cssHooks[e] = {
            get: function(d, f, l) {
                if (f) return 0 === d.offsetWidth && Ad.test(U(d, "display")) ? g.swap(d, Cd, function() {
                    return L(d, e, l)
                }) : L(d, e, l)
            },
            set: function(d,
                f, l) {
                return I(d, f, l ? ab(d, e, l, g.support.boxSizing && "border-box" === g.css(d, "boxSizing")) : 0)
            }
        }
    });
    g.support.opacity || (g.cssHooks.opacity = {
        get: function(d, e) {
            return yd.test((e && d.currentStyle ? d.currentStyle.filter : d.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(d, e) {
            var f = d.style,
                l = d.currentStyle,
                p = g.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                n = l && l.filter || f.filter || "";
            f.zoom = 1;
            if (!(1 <= e && "" === g.trim(n.replace(xb, "")) && f.removeAttribute && (f.removeAttribute("filter"), l && !l.filter))) f.filter =
                xb.test(n) ? n.replace(xb, p) : n + " " + p
        }
    });
    g(function() {
        g.support.reliableMarginRight || (g.cssHooks.marginRight = {
            get: function(d, e) {
                return g.swap(d, {
                    display: "inline-block"
                }, function() {
                    if (e) return U(d, "marginRight")
                })
            }
        });
        !g.support.pixelPosition && g.fn.position && g.each(["top", "left"], function(d, e) {
            g.cssHooks[e] = {
                get: function(d, f) {
                    if (f) {
                        var l = U(d, e);
                        return Ca.test(l) ? g(d).position()[e] + "px" : l
                    }
                }
            }
        })
    });
    g.expr && g.expr.filters && (g.expr.filters.hidden = function(d) {
        return 0 === d.offsetWidth && 0 === d.offsetHeight || !g.support.reliableHiddenOffsets &&
            "none" === (d.style && d.style.display || U(d, "display"))
    }, g.expr.filters.visible = function(d) {
        return !g.expr.filters.hidden(d)
    });
    g.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(d, e) {
        g.cssHooks[d + e] = {
            expand: function(f) {
                var g = "string" == typeof f ? f.split(" ") : [f],
                    l = {};
                for (f = 0; 4 > f; f++) l[d + ia[f] + e] = g[f] || g[f - 2] || g[0];
                return l
            }
        };
        mc.test(d) || (g.cssHooks[d + e].set = I)
    });
    var Ed = /%20/g,
        Ac = /\[\]$/,
        oc = /\r?\n/g,
        Fd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Gd = /^(?:select|textarea)/i;
    g.fn.extend({
        serialize: function() {
            return g.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? g.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Gd.test(this.nodeName) || Fd.test(this.type))
            }).map(function(d, e) {
                var f = g(this).val();
                return null == f ? null : g.isArray(f) ? g.map(f, function(d) {
                    return {
                        name: e.name,
                        value: d.replace(oc, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: f.replace(oc, "\r\n")
                }
            }).get()
        }
    });
    g.param = function(d, f) {
        var l, p = [],
            n = function(d, e) {
                e = g.isFunction(e) ? e() : null == e ? "" : e;
                p[p.length] = encodeURIComponent(d) + "=" + encodeURIComponent(e)
            };
        f === e && (f = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(d) || d.jquery && !g.isPlainObject(d)) g.each(d, function() {
            n(this.name, this.value)
        });
        else
            for (l in d) Q(l, d[l], f, n);
        return p.join("&").replace(Ed, "+")
    };
    var ua, oa, Hd = /#.*$/,
        Id = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Jd = /^(?:GET|HEAD)$/,
        Kd = /^\/\//,
        pc = /\?/,
        Ld = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Md = /([?&])_=[^&]*/,
        qc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        rc = g.fn.load,
        cb = {},
        sc = {},
        tc = ["*/"] + ["*"];
    try {
        oa = Cc.href
    } catch (Vd) {
        oa = H.createElement("a"), oa.href = "", oa = oa.href
    }
    ua = qc.exec(oa.toLowerCase()) || [];
    g.fn.load = function(d, f, l) {
        if ("string" != typeof d && rc) return rc.apply(this, arguments);
        if (!this.length) return this;
        var p, n, s, u = this,
            q = d.indexOf(" ");
        return 0 <= q && (p = d.slice(q, d.length), d = d.slice(0, q)), g.isFunction(f) ? (l = f, f = e) : f && "object" == typeof f && (n = "POST"), g.ajax({
            url: d,
            type: n,
            dataType: "html",
            data: f,
            complete: function(d, e) {
                l && u.each(l, s || [d.responseText, e, d])
            }
        }).done(function(d) {
            s = arguments;
            u.html(p ? g("<div>").append(d.replace(Ld, "")).find(p) : d)
        }), this
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(d, e) {
        g.fn[e] = function(d) {
            return this.on(e, d)
        }
    });
    g.each(["get", "post"], function(d, f) {
        g[f] = function(d, l, p, n) {
            return g.isFunction(l) && (n = n || p, p = l, l = e), g.ajax({
                type: f,
                url: d,
                data: l,
                success: p,
                dataType: n
            })
        }
    });
    g.extend({
        getScript: function(d, f) {
            return g.get(d,
                e, f, "script")
        },
        getJSON: function(d, e, f) {
            return g.get(d, e, f, "json")
        },
        ajaxSetup: function(d, e) {
            return e ? wa(d, g.ajaxSettings) : (e = d, d = g.ajaxSettings), wa(d, e), d
        },
        ajaxSettings: {
            url: oa,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ua[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": tc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": d.String,
                "text html": !0,
                "text json": g.parseJSON,
                "text xml": g.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Da(cb),
        ajaxTransport: Da(sc),
        ajax: function(d, f) {
            function l(d, f, m, s) {
                var y, v, C, A, F, K = f;
                if (2 !== L) {
                    L = 2;
                    q && clearTimeout(q);
                    u = e;
                    n = s || "";
                    N.readyState = 0 < d ? 4 : 0;
                    if (m) {
                        A = B;
                        s = N;
                        var Y, V, J, O, P = A.contents,
                            Q = A.dataTypes,
                            T = A.responseFields;
                        for (V in T) V in m && (s[T[V]] = m[V]);
                        for (;
                            "*" === Q[0];) Q.shift(),
                            Y === e && (Y = A.mimeType || s.getResponseHeader("content-type"));
                        if (Y)
                            for (V in P)
                                if (P[V] && P[V].test(Y)) {
                                    Q.unshift(V);
                                    break
                                }
                        if (Q[0] in m) J = Q[0];
                        else {
                            for (V in m) {
                                if (!Q[0] || A.converters[V + " " + Q[0]]) {
                                    J = V;
                                    break
                                }
                                O || (O = V)
                            }
                            J = J || O
                        }
                        A = m = J ? (J !== Q[0] && Q.unshift(J), m[J]) : void 0
                    }
                    if (200 <= d && 300 > d || 304 === d)
                        if (B.ifModified && (F = N.getResponseHeader("Last-Modified"), F && (g.lastModified[p] = F), F = N.getResponseHeader("Etag"), F && (g.etag[p] = F)), 304 === d) K = "notmodified", y = !0;
                        else {
                            var M;
                            a: {
                                y = B;
                                v = A;
                                var S, K = y.dataTypes.slice();
                                m = K[0];
                                Y = {};
                                V = 0;
                                y.dataFilter && (v = y.dataFilter(v, y.dataType));
                                if (K[1])
                                    for (M in y.converters) Y[M.toLowerCase()] = y.converters[M];
                                for (; C = K[++V];)
                                    if ("*" !== C) {
                                        if ("*" !== m && m !== C) {
                                            M = Y[m + " " + C] || Y["* " + C];
                                            if (!M)
                                                for (S in Y)
                                                    if (F = S.split(" "), F[1] === C && (M = Y[m + " " + F[0]] || Y["* " + F[0]])) {
                                                        !0 === M ? M = Y[S] : !0 !== Y[S] && (C = F[0], K.splice(V--, 0, C));
                                                        break
                                                    }
                                            if (!0 !== M)
                                                if (M && y["throws"]) v = M(v);
                                                else try {
                                                    v = M(v)
                                                } catch (U) {
                                                    M = {
                                                        state: "parsererror",
                                                        error: M ? U : "No conversion from " + m + " to " + C
                                                    };
                                                    break a
                                                }
                                        }
                                        m = C
                                    }
                                M = {
                                    state: "success",
                                    data: v
                                }
                            }
                            y = M;
                            K = y.state;
                            v = y.data;
                            C = y.error;
                            y = !C
                        } else if (C = K, !K || d) K = "error", 0 > d && (d = 0);
                    N.status = d;
                    N.statusText = (f || K) + "";
                    y ? R.resolveWith(E, [v, K, N]) : R.rejectWith(E, [N, K, C]);
                    N.statusCode(H);
                    H = e;
                    x && D.trigger("ajax" + (y ? "Success" : "Error"), [N, B, y ? v : C]);
                    I.fireWith(E, [N, K]);
                    x && (D.trigger("ajaxComplete", [N, B]), --g.active || g.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof d && (f = d, d = e);
            f = f || {};
            var p, n, s, u, q, v, x, A, B = g.ajaxSetup({}, f),
                E = B.context || B,
                D = E !== B && (E.nodeType || E instanceof g) ? g(E) : g.event,
                R = g.Deferred(),
                I = g.Callbacks("once memory"),
                H = B.statusCode || {},
                K = {},
                J = {},
                L = 0,
                O = "canceled",
                N = {
                    readyState: 0,
                    setRequestHeader: function(d, e) {
                        if (!L) {
                            var f = d.toLowerCase();
                            d = J[f] = J[f] || d;
                            K[d] = e
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === L ? n : null
                    },
                    getResponseHeader: function(d) {
                        var f;
                        if (2 === L) {
                            if (!s)
                                for (s = {}; f = Id.exec(n);) s[f[1].toLowerCase()] = f[2];
                            f = s[d.toLowerCase()]
                        }
                        return f === e ? null : f
                    },
                    overrideMimeType: function(d) {
                        return L || (B.mimeType = d), this
                    },
                    abort: function(d) {
                        return d = d || O, u && u.abort(d), l(0, d), this
                    }
                };
            R.promise(N);
            N.success = N.done;
            N.error = N.fail;
            N.complete = I.add;
            N.statusCode = function(d) {
                if (d) {
                    var e;
                    if (2 > L)
                        for (e in d) H[e] = [H[e], d[e]];
                    else e = d[N.status], N.always(e)
                }
                return this
            };
            B.url = ((d || B.url) + "").replace(Hd, "").replace(Kd, ua[1] + "//");
            B.dataTypes = g.trim(B.dataType || "*").toLowerCase().split(ja);
            null == B.crossDomain && (v = qc.exec(B.url.toLowerCase()) || !1, B.crossDomain = v && v.join(":") + (v[3] ? "" : "http:" === v[1] ? 80 : 443) !== ua.join(":") + (ua[3] ? "" : "http:" === ua[1] ? 80 : 443));
            B.data && B.processData && "string" != typeof B.data && (B.data = g.param(B.data,
                B.traditional));
            ra(cb, B, f, N);
            if (2 === L) return N;
            x = B.global;
            B.type = B.type.toUpperCase();
            B.hasContent = !Jd.test(B.type);
            x && 0 === g.active++ && g.event.trigger("ajaxStart");
            if (!B.hasContent && (B.data && (B.url += (pc.test(B.url) ? "&" : "?") + B.data, delete B.data), p = B.url, !1 === B.cache)) {
                v = g.now();
                var P = B.url.replace(Md, "$1_=" + v);
                B.url = P + (P === B.url ? (pc.test(B.url) ? "&" : "?") + "_=" + v : "")
            }(B.data && B.hasContent && !1 !== B.contentType || f.contentType) && N.setRequestHeader("Content-Type", B.contentType);
            B.ifModified && (p = p || B.url,
                g.lastModified[p] && N.setRequestHeader("If-Modified-Since", g.lastModified[p]), g.etag[p] && N.setRequestHeader("If-None-Match", g.etag[p]));
            N.setRequestHeader("Accept", B.dataTypes[0] && B.accepts[B.dataTypes[0]] ? B.accepts[B.dataTypes[0]] + ("*" !== B.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : B.accepts["*"]);
            for (A in B.headers) N.setRequestHeader(A, B.headers[A]);
            if (!B.beforeSend || !1 !== B.beforeSend.call(E, N, B) && 2 !== L) {
                O = "abort";
                for (A in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) N[A](B[A]);
                if (u = ra(sc, B, f, N)) {
                    N.readyState = 1;
                    x && D.trigger("ajaxSend", [N, B]);
                    B.async && 0 < B.timeout && (q = setTimeout(function() {
                        N.abort("timeout")
                    }, B.timeout));
                    try {
                        L = 1, u.send(K, l)
                    } catch (Q) {
                        if (2 > L) l(-1, Q);
                        else throw Q;
                    }
                } else l(-1, "No Transport");
                return N
            }
            return N.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var uc = [],
        Nd = /\?/,
        Za = /(=)\?(?=&|$)|\?\?/,
        Od = g.now();
    g.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var d = uc.pop() || g.expando + "_" + Od++;
            return this[d] = !0, d
        }
    });
    g.ajaxPrefilter("json jsonp", function(f, m, l) {
        var p, n, s, u = f.data,
            q = f.url,
            v = !1 !== f.jsonp,
            B = v && Za.test(q),
            A = v && !B && "string" == typeof u && !(f.contentType || "").indexOf("application/x-www-form-urlencoded") && Za.test(u);
        if ("jsonp" === f.dataTypes[0] || B || A) return p = f.jsonpCallback = g.isFunction(f.jsonpCallback) ? f.jsonpCallback() : f.jsonpCallback, n = d[p], B ? f.url = q.replace(Za, "$1" + p) : A ? f.data = u.replace(Za, "$1" + p) : v && (f.url += (Nd.test(q) ? "&" : "?") + f.jsonp + "=" + p), f.converters["script json"] = function() {
            return s || g.error(p + " was not called"), s[0]
        }, f.dataTypes[0] = "json", d[p] = function() {
            s = arguments
        }, l.always(function() {
            d[p] =
                n;
            f[p] && (f.jsonpCallback = m.jsonpCallback, uc.push(p));
            s && g.isFunction(n) && n(s[0]);
            s = n = e
        }), "script"
    });
    g.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(d) {
                return g.globalEval(d), d
            }
        }
    });
    g.ajaxPrefilter("script", function(d) {
        d.cache === e && (d.cache = !1);
        d.crossDomain && (d.type = "GET", d.global = !1)
    });
    g.ajaxTransport("script", function(d) {
        if (d.crossDomain) {
            var f, g =
                H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function(l, p) {
                    f = H.createElement("script");
                    f.async = "async";
                    d.scriptCharset && (f.charset = d.scriptCharset);
                    f.src = d.url;
                    f.onload = f.onreadystatechange = function(d, l) {
                        if (l || !f.readyState || /loaded|complete/.test(f.readyState)) f.onload = f.onreadystatechange = null, g && f.parentNode && g.removeChild(f), f = e, l || p(200, "success")
                    };
                    g.insertBefore(f, g.firstChild)
                },
                abort: function() {
                    f && f.onload(0, 1)
                }
            }
        }
    });
    var va, yb = d.ActiveXObject ? function() {
            for (var d in va) va[d](0,
                1)
        } : !1,
        Pd = 0;
    g.ajaxSettings.xhr = d.ActiveXObject ? function() {
        var e;
        if (!(e = !this.isLocal && Db())) a: {
            try {
                e = new d.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (f) {}
            e = void 0
        }
        return e
    } : Db;
    var zb = g.ajaxSettings.xhr();
    g.extend(g.support, {
        ajax: !!zb,
        cors: !!zb && "withCredentials" in zb
    });
    g.support.ajax && g.ajaxTransport(function(f) {
        if (!f.crossDomain || g.support.cors) {
            var m;
            return {
                send: function(l, p) {
                    var n, s, u = f.xhr();
                    f.username ? u.open(f.type, f.url, f.async, f.username, f.password) : u.open(f.type, f.url, f.async);
                    if (f.xhrFields)
                        for (s in f.xhrFields) u[s] =
                            f.xhrFields[s];
                    f.mimeType && u.overrideMimeType && u.overrideMimeType(f.mimeType);
                    !f.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in l) u.setRequestHeader(s, l[s])
                    } catch (q) {}
                    u.send(f.hasContent && f.data || null);
                    m = function(d, l) {
                        var s, q, v, B, C;
                        try {
                            if (m && (l || 4 === u.readyState))
                                if (m = e, n && (u.onreadystatechange = g.noop, yb && delete va[n]), l) 4 !== u.readyState && u.abort();
                                else {
                                    s = u.status;
                                    v = u.getAllResponseHeaders();
                                    B = {};
                                    (C = u.responseXML) && C.documentElement && (B.xml = C);
                                    try {
                                        B.text =
                                            u.responseText
                                    } catch (A) {}
                                    try {
                                        q = u.statusText
                                    } catch (x) {
                                        q = ""
                                    }!s && f.isLocal && !f.crossDomain ? s = B.text ? 200 : 404 : 1223 === s && (s = 204)
                                }
                        } catch (E) {
                            l || p(-1, E)
                        }
                        B && p(s, q, B, v)
                    };
                    f.async ? 4 === u.readyState ? setTimeout(m, 0) : (n = ++Pd, yb && (va || (va = {}, g(d).unload(yb)), va[n] = m), u.onreadystatechange = m) : m()
                },
                abort: function() {
                    m && m(0, 1)
                }
            }
        }
    });
    var Ea, $a, Qd = /^(?:toggle|show|hide)$/,
        Rd = RegExp("^(?:([-+])=|)(" + Ia + ")([a-z%]*)$", "i"),
        Sd = /queueHooks$/,
        Fa = [
            function(d, e, f) {
                var l, p, n, s, u, q, v = this,
                    B = d.style,
                    A = {},
                    x = [],
                    E = d.nodeType && R(d);
                f.queue ||
                    (u = g._queueHooks(d, "fx"), null == u.unqueued && (u.unqueued = 0, q = u.empty.fire, u.empty.fire = function() {
                        u.unqueued || q()
                    }), u.unqueued++, v.always(function() {
                        v.always(function() {
                            u.unqueued--;
                            g.queue(d, "fx").length || u.empty.fire()
                        })
                    }));
                1 === d.nodeType && ("height" in e || "width" in e) && (f.overflow = [B.overflow, B.overflowX, B.overflowY], "inline" === g.css(d, "display") && "none" === g.css(d, "float") && (!g.support.inlineBlockNeedsLayout || "inline" === T(d.nodeName) ? B.display = "inline-block" : B.zoom = 1));
                f.overflow && (B.overflow = "hidden",
                    g.support.shrinkWrapBlocks || v.done(function() {
                        B.overflow = f.overflow[0];
                        B.overflowX = f.overflow[1];
                        B.overflowY = f.overflow[2]
                    }));
                for (l in e) p = e[l], Qd.exec(p) && (delete e[l], p !== (E ? "hide" : "show") && x.push(l));
                if (p = x.length) {
                    n = g._data(d, "fxshow") || g._data(d, "fxshow", {});
                    E ? g(d).show() : v.done(function() {
                        g(d).hide()
                    });
                    v.done(function() {
                        var e;
                        g.removeData(d, "fxshow", !0);
                        for (e in A) g.style(d, e, A[e])
                    });
                    for (l = 0; l < p; l++) e = x[l], s = v.createTween(e, E ? n[e] : 0), A[e] = n[e] || g.style(d, e), e in n || (n[e] = s.start, E && (s.end = s.start,
                        s.start = "width" === e || "height" === e ? 1 : 0))
                }
            }
        ],
        xa = {
            "*": [
                function(d, e) {
                    var f, l, p = this.createTween(d, e),
                        n = Rd.exec(e),
                        s = p.cur(),
                        u = +s || 0,
                        q = 1,
                        v = 20;
                    if (n) {
                        f = +n[2];
                        l = n[3] || (g.cssNumber[d] ? "" : "px");
                        if ("px" !== l && u) {
                            u = g.css(p.elem, d, !0) || f || 1;
                            do q = q || ".5", u /= q, g.style(p.elem, d, u + l); while (q !== (q = p.cur() / s) && 1 !== q && --v)
                        }
                        p.unit = l;
                        p.start = u;
                        p.end = n[1] ? u + (n[1] + 1) * f : f
                    }
                    return p
                }
            ]
        };
    g.Animation = g.extend(Fb, {
        tweener: function(d, e) {
            g.isFunction(d) ? (e = d, d = ["*"]) : d = d.split(" ");
            for (var f, l = 0, p = d.length; l < p; l++) f = d[l], xa[f] = xa[f] || [], xa[f].unshift(e)
        },
        prefilter: function(d, e) {
            e ? Fa.unshift(d) : Fa.push(d)
        }
    });
    g.Tween = W;
    W.prototype = {
        constructor: W,
        init: function(d, e, f, l, p, n) {
            this.elem = d;
            this.prop = f;
            this.easing = p || "swing";
            this.options = e;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit = n || (g.cssNumber[f] ? "" : "px")
        },
        cur: function() {
            var d = W.propHooks[this.prop];
            return d && d.get ? d.get(this) : W.propHooks._default.get(this)
        },
        run: function(d) {
            var e, f = W.propHooks[this.prop];
            return this.options.duration ? this.pos = e = g.easing[this.easing](d, this.options.duration *
                d, 0, 1, this.options.duration) : this.pos = e = d, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : W.propHooks._default.set(this), this
        }
    };
    W.prototype.init.prototype = W.prototype;
    W.propHooks = {
        _default: {
            get: function(d) {
                var e;
                return null == d.elem[d.prop] || d.elem.style && null != d.elem.style[d.prop] ? (e = g.css(d.elem, d.prop, !1, ""), !e || "auto" === e ? 0 : e) : d.elem[d.prop]
            },
            set: function(d) {
                g.fx.step[d.prop] ? g.fx.step[d.prop](d) : d.elem.style &&
                    (null != d.elem.style[g.cssProps[d.prop]] || g.cssHooks[d.prop]) ? g.style(d.elem, d.prop, d.now + d.unit) : d.elem[d.prop] = d.now
            }
        }
    };
    W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(d) {
            d.elem.nodeType && d.elem.parentNode && (d.elem[d.prop] = d.now)
        }
    };
    g.each(["toggle", "show", "hide"], function(d, e) {
        var f = g.fn[e];
        g.fn[e] = function(l, p, n) {
            return null == l || "boolean" == typeof l || !d && g.isFunction(l) && g.isFunction(p) ? f.apply(this, arguments) : this.animate(Ga(e, !0), l, p, n)
        }
    });
    g.fn.extend({
        fadeTo: function(d, e, f, g) {
            return this.filter(R).css("opacity",
                0).show().end().animate({
                opacity: e
            }, d, f, g)
        },
        animate: function(d, e, f, l) {
            var p = g.isEmptyObject(d),
                n = g.speed(e, f, l);
            e = function() {
                var e = Fb(this, g.extend({}, d), n);
                p && e.stop(!0)
            };
            return p || !1 === n.queue ? this.each(e) : this.queue(n.queue, e)
        },
        stop: function(d, f, l) {
            var p = function(d) {
                var e = d.stop;
                delete d.stop;
                e(l)
            };
            return "string" != typeof d && (l = f, f = d, d = e), f && !1 !== d && this.queue(d || "fx", []), this.each(function() {
                var e = !0,
                    f = null != d && d + "queueHooks",
                    m = g.timers,
                    n = g._data(this);
                if (f) n[f] && n[f].stop && p(n[f]);
                else
                    for (f in n) n[f] &&
                        n[f].stop && Sd.test(f) && p(n[f]);
                for (f = m.length; f--;) m[f].elem === this && (null == d || m[f].queue === d) && (m[f].anim.stop(l), e = !1, m.splice(f, 1));
                (e || !l) && g.dequeue(this, d)
            })
        }
    });
    g.each({
        slideDown: Ga("show"),
        slideUp: Ga("hide"),
        slideToggle: Ga("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(d, e) {
        g.fn[d] = function(d, f, g) {
            return this.animate(e, d, f, g)
        }
    });
    g.speed = function(d, e, f) {
        var l = d && "object" == typeof d ? g.extend({}, d) : {
            complete: f || !f && e || g.isFunction(d) && d,
            duration: d,
            easing: f && e || e && !g.isFunction(e) && e
        };
        l.duration = g.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in g.fx.speeds ? g.fx.speeds[l.duration] : g.fx.speeds._default;
        if (null == l.queue || !0 === l.queue) l.queue = "fx";
        return l.old = l.complete, l.complete = function() {
            g.isFunction(l.old) && l.old.call(this);
            l.queue && g.dequeue(this, l.queue)
        }, l
    };
    g.easing = {
        linear: function(d) {
            return d
        },
        swing: function(d) {
            return 0.5 - Math.cos(d * Math.PI) / 2
        }
    };
    g.timers = [];
    g.fx = W.prototype.init;
    g.fx.tick = function() {
        for (var d, e = g.timers,
            f = 0; f < e.length; f++) d = e[f], !d() && e[f] === d && e.splice(f--, 1);
        e.length || g.fx.stop()
    };
    g.fx.timer = function(d) {
        d() && g.timers.push(d) && !$a && ($a = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.interval = 13;
    g.fx.stop = function() {
        clearInterval($a);
        $a = null
    };
    g.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    g.fx.step = {};
    g.expr && g.expr.filters && (g.expr.filters.animated = function(d) {
        return g.grep(g.timers, function(e) {
            return d === e.elem
        }).length
    });
    var vc = /^(?:body|html)$/i;
    g.fn.offset = function(d) {
        if (arguments.length) return d ===
            e ? this : this.each(function(e) {
                g.offset.setOffset(this, d, e)
            });
        var f, l, p, n, s, u, q, v = {
                top: 0,
                left: 0
            },
            B = this[0],
            A = B && B.ownerDocument;
        if (A) return (l = A.body) === B ? g.offset.bodyOffset(B) : (f = A.documentElement, g.contains(f, B) ? ("undefined" != typeof B.getBoundingClientRect && (v = B.getBoundingClientRect()), p = Gb(A), n = f.clientTop || l.clientTop || 0, s = f.clientLeft || l.clientLeft || 0, u = p.pageYOffset || f.scrollTop, q = p.pageXOffset || f.scrollLeft, {
            top: v.top + u - n,
            left: v.left + q - s
        }) : v)
    };
    g.offset = {
        bodyOffset: function(d) {
            var e = d.offsetTop,
                f = d.offsetLeft;
            return g.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(g.css(d, "marginTop")) || 0, f += parseFloat(g.css(d, "marginLeft")) || 0), {
                top: e,
                left: f
            }
        },
        setOffset: function(d, e, f) {
            var l = g.css(d, "position");
            "static" === l && (d.style.position = "relative");
            var p = g(d),
                n = p.offset(),
                s = g.css(d, "top"),
                u = g.css(d, "left"),
                q = {},
                v = {},
                B, A;
            ("absolute" === l || "fixed" === l) && -1 < g.inArray("auto", [s, u]) ? (v = p.position(), B = v.top, A = v.left) : (B = parseFloat(s) || 0, A = parseFloat(u) || 0);
            g.isFunction(e) && (e = e.call(d, f, n));
            null !=
                e.top && (q.top = e.top - n.top + B);
            null != e.left && (q.left = e.left - n.left + A);
            "using" in e ? e.using.call(d, q) : p.css(q)
        }
    };
    g.fn.extend({
        position: function() {
            if (this[0]) {
                var d = this[0],
                    e = this.offsetParent(),
                    f = this.offset(),
                    l = vc.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return f.top -= parseFloat(g.css(d, "marginTop")) || 0, f.left -= parseFloat(g.css(d, "marginLeft")) || 0, l.top += parseFloat(g.css(e[0], "borderTopWidth")) || 0, l.left += parseFloat(g.css(e[0], "borderLeftWidth")) || 0, {
                    top: f.top - l.top,
                    left: f.left - l.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var d =
                    this.offsetParent || H.body; d && !vc.test(d.nodeName) && "static" === g.css(d, "position");) d = d.offsetParent;
                return d || H.body
            })
        }
    });
    g.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(d, f) {
        var l = /Y/.test(f);
        g.fn[d] = function(p) {
            return g.access(this, function(d, p, n) {
                var s = Gb(d);
                if (n === e) return s ? f in s ? s[f] : s.document.documentElement[p] : d[p];
                s ? s.scrollTo(l ? g(s).scrollLeft() : n, l ? n : g(s).scrollTop()) : d[p] = n
            }, d, p, arguments.length, null)
        }
    });
    g.each({
        Height: "height",
        Width: "width"
    }, function(d, f) {
        g.each({
            padding: "inner" +
                d,
            content: f,
            "": "outer" + d
        }, function(l, p) {
            g.fn[p] = function(p, n) {
                var s = arguments.length && (l || "boolean" != typeof p),
                    u = l || (!0 === p || !0 === n ? "margin" : "border");
                return g.access(this, function(f, l, p) {
                    var m;
                    return g.isWindow(f) ? f.document.documentElement["client" + d] : 9 === f.nodeType ? (m = f.documentElement, Math.max(f.body["scroll" + d], m["scroll" + d], f.body["offset" + d], m["offset" + d], m["client" + d])) : p === e ? g.css(f, l, p, u) : g.style(f, l, p, u)
                }, f, s ? p : e, s, null)
            }
        })
    });
    d.jQuery = d.$ = g;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return g
        })
})(window);
var portraitMode = !0,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = mobilePortraitWidth,
    mobileHeight = mobilePortraitHeight,
    desktopWidth = 640,
    desktopHeight = 480,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
                2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height +
                20
        }
    };

function adjustLayers(d) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", d ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
    } catch (e) {
        console.log(e)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}

function sizeHandler() {
    $("#game") && (w = window.innerWidth, h = window.innerHeight, ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier), adjustLayers(), window.scrollTo(0, 1))
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && (window.innerHeight < window.innerWidth ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(d) {
        d.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(d) {
        d.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend",
        function(d) {
            d.preventDefault();
            return !1
        }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};
window.onfocus = function() {
    ig.ua.mobile && ig.game.resumeGame()
};
var ie = function() {
    for (var d = 3, e = document.createElement("div"), f = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++d + "]><i></i><![endif]--\x3e", f[0];);
    return 4 < d ? d : void 0
}();

function getQueryVariable(d) {
    for (var e = window.location.search.substring(1).split("&"), f = 0; f < e.length; f++) {
        var l = e[f].split("=");
        if (decodeURIComponent(l[0]) == d) return decodeURIComponent(l[1])
    }
}
var nohtml5_message = {
    en: 'This game is best experienced with HTML5 capable browsers. We recommend downloading <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, or <a href="http://www.mozilla.org" target="_blank">Mozilla Firefox</a>',
    hk: '\u6b64\u7a0b\u5f0f\u53ea\u80fd\u652f\u63f4 HTML5 \u7684\u700f\u89bd\u5668\u4e0a\u904b\u884c\uff0c\u5982\u672a\u80fd\u958b\u59cb\u904a\u6232\uff0c\u8acb\u6309\u6b64\u4e0b\u8f09 <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, or <a href="http://www.mozilla.org" target="_blank">Mozilla Firefox</a>',
    tw: '\u6b64\u7a0b\u5f0f\u53ea\u80fd\u652f\u63f4 HTML5 \u7684\u700f\u89bd\u5668\u4e0a\u904b\u884c\uff0c\u5982\u672a\u80fd\u958b\u59cb\u904a\u6232\uff0c\u8acb\u6309\u6b64\u4e0b\u8f09 <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, or <a href="http://www.mozilla.org" target="_blank">Mozilla Firefox</a>'
};
if (9 > ie) {
    var message, lang = getQueryVariable("lang");
    if (lang) switch (lang.toLowerCase()) {
        case "en":
            message = nohtml5_message.en;
            break;
        case "hk":
            message = nohtml5_message.hk;
            break;
        case "tw":
            message = nohtml5_message.tw;
            break;
        default:
            message = nohtml5_message.en
    } else message = nohtml5_message.en;
    document.getElementById("nohtml5-text").innerHTML = message;
    document.getElementById("nohtml5").style.visibility = "visible"
}
this.jukebox = {};
jukebox.Player = function(d, e) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = e || null;
    this.settings = {};
    for (var f in this.defaults) this.settings[f] = this.defaults[f];
    if ("[object Object]" === Object.prototype.toString.call(d))
        for (var l in d) this.settings[l] = d[l];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var d = this,
            e = this.settings,
            f = {},
            l;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (f = jukebox.Manager.features);
        if (!0 === f.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var n = function(e) {
                    d.__addToManager(e)
                };
                this.context.addEventListener("canplaythrough", n, !0);
                window.setTimeout(function() {
                    d.context.removeEventListener("canplaythrough", n, !0);
                    n("timeout")
                }, e.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (l in this.HTML5API) this[l] = this.HTML5API[l];
            1 < f.channels ? !0 === e.autoplay ? this.context.autoplay = !0 : void 0 !== e.spritemap[e.autoplay] && this.play(e.autoplay) : 1 === f.channels && void 0 !== e.spritemap[e.autoplay] && (this.backgroundMusic = e.spritemap[e.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(e.autoplay));
            1 == f.channels && !0 !== e.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== d.isPlaying && (d.pause(), d.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                d.__wasAutoPaused && (d.resume(), delete d._wasAutoPaused)
            }))
        } else if (!0 === f.flashaudio) {
            for (l in this.FLASHAPI) this[l] = this.FLASHAPI[l];
            f = ["id=jukebox-flashstream-" + this.id, "autoplay=" + e.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(f);
            !0 === e.autoplay ? this.play(0) : e.spritemap[e.autoplay] && this.play(e.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(d) {
        var e, f = this.settings.flashMediaElement,
            l, n = {
                flashvars: d.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            e = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(e);
            var q = document.createElement("object");
            q.id = "jukebox-flashstream-" + this.id;
            q.setAttribute("type", "application/x-shockwave-flash");
            q.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            q.setAttribute("width", "0");
            q.setAttribute("height", "0");
            n.movie = f + "?x=" + (Date.now ? Date.now() : +new Date);
            n.flashvars = d.join("&amp;");
            for (l in n) d = document.createElement("param"), d.setAttribute("name", l), d.setAttribute("value", n[l]), q.appendChild(d);
            e.outerHTML = q.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            e =
                document.createElement("embed");
            e.id = "jukebox-flashstream-" + this.id;
            e.setAttribute("type", "application/x-shockwave-flash");
            e.setAttribute("width", "100");
            e.setAttribute("height", "100");
            n.play = !1;
            n.loop = !1;
            n.src = f + "?x=" + (Date.now ? Date.now() : +new Date);
            for (l in n) e.setAttribute(l, n[l]);
            document.getElementsByTagName("body")[0].appendChild(e);
            this.context = e
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var d = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                d, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (d - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(d, e) {
        if (null !== this.isPlaying && !0 !== e) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(d, this.id);
        else {
            var f = this.settings.spritemap,
                l;
            if (void 0 !== f[d]) l = f[d].start;
            else if ("number" === typeof d) {
                l = d;
                for (var n in f)
                    if (l >= f[n].start && l <=
                        f[n].end) {
                        d = n;
                        break
                    }
            }
            void 0 !== l && "[object Object]" === Object.prototype.toString.call(f[d]) && (this.isPlaying = this.settings.spritemap[d], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(l))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(d) {
        d = "number" ===
            typeof d ? d : this.__lastPosition;
        if (null !== d) return this.play(d), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(d) {
            this.context.volume = d;
            return 1E-4 > Math.abs(this.context.volume - d) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(d) {
            try {
                return this.context.currentTime = d, !0
            } catch (e) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(d) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(d), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(d) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(d) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(d) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var e in this.defaults) this.settings[e] = this.defaults[e];
    if ("[object Object]" === Object.prototype.toString.call(d))
        for (var f in d) this.settings[f] = d[f];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var d = window.Audio && new Audio;
        if (d && d.canPlayType && !1 === this.settings.useFlash) {
            for (var e = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                f, l, n = 0, q = e.length; n < q; n++)
                if (l = e[n].e, e[n].m.length && "object" === typeof e[n].m)
                    for (var x = 0, D = e[n].m.length; x < D; x++)
                        if (f = e[n].m[x], "" !== d.canPlayType(f)) {
                            this.codecs[l] = f;
                            break
                        } else this.codecs[l] || (this.codecs[l] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            d.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(d.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (v) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(d) {
        return this.__players && void 0 !== this.__players[d] ? this.__players[d] : null
    },
    __getClone: function(d, e) {
        for (var f in this.__clones) {
            var l = this.__clones[f];
            if (null === l.isPlaying && l.origin === d) return l
        }
        if ("[object Object]" === Object.prototype.toString.call(e)) {
            f = {};
            for (var n in e) f[n] = e[n];
            f.autoplay = !1;
            n = new jukebox.Player(f, d);
            n.isClone = !0;
            n.wasReady = !1;
            return this.__clones[n.id] = n
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var d = this.__queue[0],
                    e = this.__getPlayerById(d.origin);
                if (null !== e) {
                    var f = this.__getClone(d.origin, e.settings);
                    null !== f && (!0 === this.features.volume && (e = this.__players[d.origin]) && f.setVolume(e.getVolume()), this.add(f), f.play(d.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (f in this.__queue.length && 1 === this.features.channels && (d = this.__queue[0], e = this.__getPlayerById(d.origin), null !== e && e.play(d.pointer, !0), this.__queue.splice(0, 1)), this.__players) d = this.__players[f],
                    e = d.getCurrentTime() || 0, d.isPlaying && !1 === d.wasReady ? d.wasReady = d.setCurrentTime(d.isPlaying.start) : d.isPlaying && !0 === d.wasReady ? e > d.isPlaying.end && (!0 === d.isPlaying.loop ? d.play(d.isPlaying.start, !0) : d.stop()) : d.isClone && null === d.isPlaying ? this.remove(d) : void 0 !== d.backgroundMusic && null === d.isPlaying && e > d.backgroundMusic.end && d.backgroundHackForiOS()
    },
    getPlayableResource: function(d) {
        "[object Array]" !== Object.prototype.toString.call(d) && (d = [d]);
        for (var e = 0, f = d.length; e < f; e++) {
            var l = d[e],
                n = l.match(/\.([^\.]*)$/)[1];
            if (n && this.codecs[n]) return l
        }
        return null
    },
    add: function(d) {
        return d instanceof jukebox.Player && void 0 === this.__players[d.id] ? (this.__playersLength++, this.__players[d.id] = d, !0) : !1
    },
    remove: function(d) {
        return d instanceof jukebox.Player && void 0 !== this.__players[d.id] ? (this.__playersLength--, delete this.__players[d.id], !0) : !1
    },
    addToQueue: function(d, e) {
        return ("string" === typeof d || "number" === typeof d) && void 0 !== this.__players[e] ? (this.__queue.push({
            pointer: d,
            origin: e
        }), !0) : !1
    }
};
var MarketJS = {};
(function() {
    function d(d, n, q, x) {
        try {
            var D = window.XDomainRequest ? new XDomainRequest : new XMLHttpRequest,
                v;
            switch (d) {
                case "single-metric-write":
                    v = e + "/metric/write/" + f + "/" + n + "/" + q;
                    break;
                case "single-metric-read":
                    v = e + "/metric/read/single/" + f + "/" + n;
                    break;
                case "multi-metric-write":
                    v = e + "/metric/write";
                    break;
                case "multi-metric-read":
                    v = e + "/metric/read/multi/" + f + "?" + n;
                    break;
                case "leaderboard-read":
                    v = e + "/leaderboard/read/" + f + "?" + n;
                    break;
                case "leaderboard-write":
                    break;
                default:
                    console.log("no mode found")
            }
            D.onerror =
                function() {
                    console.log(D.responseText)
                };
            D.onload = function() {
                var d = JSON.parse(D.responseText);
                x ? (console.log("passing to callback ..."), x(d)) : console.log(d)
            };
            window.XDomainRequest ? D.open("GET", v) : D.open("GET", v, !0);
            D.send()
        } catch (A) {
            console.log(A)
        }
    }
    var e = "https://marketjs-gamecenter.appspot.com",
        f = "";
    MarketJS.Initialize = function(d) {
        f = d;
        MarketJS.SingleMetric.Write("InitializeGame", "1")
    };
    MarketJS.SingleMetric = {
        Write: function(e, f) {
            d("single-metric-write", e, f)
        },
        Read: function(e) {
            d("single-metric-read",
                e)
        }
    };
    MarketJS.MultiMetric = {
        Write: function(d) {
            var n = {};
            n.data = JSON.stringify(d);
            n.game_key = f;
            try {
                $.post(e + "/metric/write", n, function(d) {
                    console.log("Response: " + d)
                })
            } catch (q) {
                console.log(q)
            }
        },
        Read: function(e, f, q) {
            var x = "";
            for (i = 0; i < e.length; i++) x += "metric_name=", x += e[i], i != e.length - 1 && (x += "&");
            x += q ? "&rank_ascending=yes" : "&rank_ascending=no";
            console.log(x);
            d("multi-metric-read", x, 0, f)
        }
    };
    MarketJS.Player = {};
    MarketJS.Player.Read = {
        Leaderboard: function(d, n, q) {
            d = e + "/read/player/game/leaderboard/" + d + "/" + n +
                "/" + f;
            n = {};
            try {
                $.get(d, n, q, "json")
            } catch (x) {
                console.log(x)
            }
        }
    };
    MarketJS.Login = {
        Basic: function(d, n) {
            var q = {};
            q.game_key = f;
            q.login_method = "basic";
            for (var x in d) q[x] = d[x];
            console.log("login payload:", q);
            try {
                $.post(e + "/login", q, n)
            } catch (D) {
                console.log(D)
            }
        }
    };
    MarketJS.Leaderboard = {
        Write: function(d, n, q, x) {
            var D = {};
            D.game_key = f;
            D.player_key = d;
            D.metric_name = n;
            D.metric_value = q;
            D.cumulative = x ? "true" : "false";
            try {
                $.post(e + "/write/leaderboard", D, function(d) {
                    console.log("Response: " + d)
                })
            } catch (v) {
                console.log(v)
            }
        },
        Read: function(e, f, q, x) {
            e = "metric_name=" + e + (f ? "&rank_ascending=yes" : "&rank_ascending=no");
            e += "&metric_count=";
            e += q;
            d("leaderboard-read", e, 0, x)
        }
    };
    MarketJS.Platform = {
        Read: function() {
            var d = /iPhone/i.test(navigator.userAgent),
                e = /iPad/i.test(navigator.userAgent),
                f = /android/i.test(navigator.userAgent),
                x = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            return d ? "iPhone" : e ? "iPad" : f ? "Android" : x ? "WebView" : "Web"
        }
    }
})();

function localJsonpCallback(d) {
    d.Error ? console.log(d.Message) : console.log(d)
}
this.JSON || (this.JSON = {});
(function() {
    function d(d) {
        return 10 > d ? "0" + d : d
    }

    function e(d) {
        n.lastIndex = 0;
        return n.test(d) ? '"' + d.replace(n, function(d) {
            var e = D[d];
            return "string" === typeof e ? e : "\\u" + ("0000" + d.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + d + '"'
    }

    function f(d, l) {
        var p, n, u, B, D = q,
            K, I = l[d];
        I && "object" === typeof I && "function" === typeof I.toJSON && (I = I.toJSON(d));
        "function" === typeof v && (I = v.call(l, d, I));
        switch (typeof I) {
            case "string":
                return e(I);
            case "number":
                return isFinite(I) ? String(I) : "null";
            case "boolean":
            case "null":
                return String(I);
            case "object":
                if (!I) return "null";
                q += x;
                K = [];
                if ("[object Array]" === Object.prototype.toString.apply(I)) {
                    B = I.length;
                    for (p = 0; p < B; p += 1) K[p] = f(p, I) || "null";
                    u = 0 === K.length ? "[]" : q ? "[\n" + q + K.join(",\n" + q) + "\n" + D + "]" : "[" + K.join(",") + "]";
                    q = D;
                    return u
                }
                if (v && "object" === typeof v) {
                    B = v.length;
                    for (p = 0; p < B; p += 1) n = v[p], "string" === typeof n && (u = f(n, I)) && K.push(e(n) + (q ? ": " : ":") + u)
                } else
                    for (n in I) Object.hasOwnProperty.call(I, n) && (u = f(n, I)) && K.push(e(n) + (q ? ": " : ":") + u);
                u = 0 === K.length ? "{}" : q ? "{\n" + q + K.join(",\n" + q) + "\n" +
                    D + "}" : "{" + K.join(",") + "}";
                q = D;
                return u
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var l = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        q, x, D = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        v;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(d, e, l) {
        var n;
        x = q = "";
        if ("number" === typeof l)
            for (n = 0; n < l; n += 1) x += " ";
        else "string" === typeof l && (x = l); if ((v = e) && "function" !== typeof e && ("object" !== typeof e || "number" !== typeof e.length)) throw Error("JSON.stringify");
        return f("", {
            "": d
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(d, e) {
        function f(d, l) {
            var n, s, q = d[l];
            if (q && "object" === typeof q)
                for (n in q) Object.hasOwnProperty.call(q, n) && (s = f(q, n), void 0 !== s ? q[n] = s : delete q[n]);
            return e.call(d, l, q)
        }
        var n;
        d = String(d);
        l.lastIndex = 0;
        l.test(d) && (d = d.replace(l, function(d) {
            return "\\u" + ("0000" + d.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(d.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return n = eval("(" + d + ")"), "function" === typeof e ? f({
            "": n
        }, "") : n;
        throw new SyntaxError("JSON.parse");
    })
})();
(function() {
    var d = {},
        e = null,
        f = !0,
        l = !1;
    if ("undefined" !== typeof AudioContext) e = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) e = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        f = !1;
        try {
            new Audio
        } catch (n) {
            l = !0
        }
    } else f = !1, l = !0; if (f) {
        var q = "undefined" === typeof e.createGain ? e.createGainNode() : e.createGain();
        q.gain.value = 1;
        q.connect(e.destination)
    }
    var x = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = f;
        this.noAudio = l;
        this._howls = []
    };
    x.prototype = {
        volume: function(d) {
            d =
                parseFloat(d);
            if (0 <= d && 1 >= d) {
                this._volume = d;
                f && (q.gain.value = d);
                for (var e in this._howls)
                    if (this._howls.hasOwnProperty(e) && !1 === this._howls[e]._webAudio)
                        for (d = 0; d < this._howls[e]._audioNode.length; d++) this._howls[e]._audioNode[d].volume = this._howls[e]._volume * this._volume;
                return this
            }
            return f ? q.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(d) {
            this._muted = d;
            f && (q.gain.value = d ? 0 : this._volume);
            for (var e in this._howls)
                if (this._howls.hasOwnProperty(e) &&
                    !1 === this._howls[e]._webAudio)
                    for (var l = 0; l < this._howls[e]._audioNode.length; l++) this._howls[e]._audioNode[l].muted = d
        }
    };
    var D = new x,
        x = null;
    if (!l) var x = new Audio,
        v = {
            mp3: !!x.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!x.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!x.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!x.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !!(x.canPlayType("audio/x-m4a;") || x.canPlayType("audio/aac;")).replace(/^no$/,
                ""),
            mp4: !!(x.canPlayType("audio/x-mp4;") || x.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!x.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
    var A = function(d) {
        this._autoplay = d.autoplay || !1;
        this._buffer = d.buffer || !1;
        this._duration = d.duration || 0;
        this._format = d.format || null;
        this._loop = d.loop || !1;
        this._loaded = !1;
        this._sprite = d.sprite || {};
        this._src = d.src || "";
        this._pos3d = d.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== d.volume ? d.volume : 1;
        this._urls = d.urls || [];
        this._rate = d.rate || 1;
        this._onload = [d.onload || function() {}];
        this._onloaderror = [d.onloaderror || function() {}];
        this._onend = [d.onend || function() {}];
        this._onpause = [d.onpause || function() {}];
        this._onplay = [d.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = f && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        D._howls.push(this);
        this.load()
    };
    A.prototype = {
        load: function() {
            var f = this,
                n = null;
            if (!l) {
                for (var u = 0; u < f._urls.length; u++) {
                    var q, x;
                    if (f._format) q = f._format;
                    else if (x = f._urls[u].toLowerCase().split("?")[0], q =
                        (q = x.match(/.+\.([^?]+)(\?|$)/)) && 2 <= q.length ? q : x.match(/data\:audio\/([^?]+);/)) q = q[1];
                    else {
                        f.on("loaderror");
                        return
                    } if (v[q]) {
                        n = f._urls[u];
                        break
                    }
                }
                if (n) {
                    f._src = n;
                    if (f._webAudio) {
                        var A = n;
                        if (A in d) f._duration = d[A].duration, E(f);
                        else {
                            var I = new XMLHttpRequest;
                            I.open("GET", A, !0);
                            I.responseType = "arraybuffer";
                            I.onload = function() {
                                e.decodeAudioData(I.response, function(e) {
                                    e && (d[A] = e, E(f, e))
                                }, function() {
                                    f.on("loaderror")
                                })
                            };
                            I.onerror = function() {
                                f._webAudio && (f._buffer = !0, f._webAudio = !1, f._audioNode = [], delete f._gainNode,
                                    f.load())
                            };
                            try {
                                I.send()
                            } catch (ab) {
                                I.onerror()
                            }
                        }
                    } else {
                        var L = new Audio;
                        f._audioNode.push(L);
                        L.src = n;
                        L._pos = 0;
                        L.preload = "auto";
                        L.volume = D._muted ? 0 : f._volume * D.volume();
                        d[n] = f;
                        var T = function() {
                            f._duration = Math.ceil(10 * L.duration) / 10;
                            0 === Object.getOwnPropertyNames(f._sprite).length && (f._sprite = {
                                _default: [0, 1E3 * f._duration]
                            });
                            f._loaded || (f._loaded = !0, f.on("load"));
                            f._autoplay && f.play();
                            L.removeEventListener("canplaythrough", T, !1)
                        };
                        L.addEventListener("canplaythrough", T, !1);
                        L.load()
                    }
                    return f
                }
            }
            f.on("loaderror")
        },
        urls: function(d) {
            return d ? (this.stop(), this._urls = "string" === typeof d ? [d] : d, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(f, l) {
            var n = this;
            "function" === typeof f && (l = f);
            if (!f || "function" === typeof f) f = "_default";
            if (!n._loaded) return n.on("load", function() {
                n.play(f, l)
            }), n;
            if (!n._sprite[f]) return "function" === typeof l && l(), n;
            n._inactiveNode(function(q) {
                q._sprite = f;
                var v = 0 < q._pos ? q._pos : n._sprite[f][0] / 1E3,
                    x = n._sprite[f][1] / 1E3 - q._pos,
                    A = !(!n._loop && !n._sprite[f][2]),
                    E = "string" === typeof l ? l :
                    Math.round(Date.now() * Math.random()) + "",
                    L, T = {
                        id: E,
                        sprite: f,
                        loop: A
                    };
                L = setTimeout(function() {
                    !n._webAudio && A && n.stop(T.id, T.timer).play(f, T.id);
                    n._webAudio && !A && (n._nodeById(T.id).paused = !0, n._nodeById(T.id)._pos = 0);
                    !n._webAudio && !A && n.stop(T.id, T.timer);
                    n.on("end", E)
                }, 1E3 * x);
                n._onendTimer.push(L);
                T.timer = n._onendTimer[n._onendTimer.length - 1];
                if (n._webAudio) {
                    L = n._sprite[f][0] / 1E3;
                    var Q = n._sprite[f][1] / 1E3;
                    q.id = E;
                    q.paused = !1;
                    L = [A, L, Q];
                    Q = n._nodeById(E);
                    Q.bufferSource = e.createBufferSource();
                    Q.bufferSource.buffer =
                        d[n._src];
                    Q.bufferSource.connect(Q.panner);
                    Q.bufferSource.loop = L[0];
                    L[0] && (Q.bufferSource.loopStart = L[1], Q.bufferSource.loopEnd = L[1] + L[2]);
                    Q.bufferSource.playbackRate.value = n._rate;
                    n._playStart = e.currentTime;
                    q.gain.value = n._volume;
                    "undefined" === typeof q.bufferSource.start ? q.bufferSource.noteGrainOn(0, v, x) : q.bufferSource.start(0, v, x)
                } else if (4 === q.readyState) q.id = E, q.currentTime = v, q.muted = D._muted, q.volume = n._volume * D.volume(), setTimeout(function() {
                    q.play()
                }, 0);
                else {
                    n._clearEndTimer(L);
                    var Da = f,
                        ra =
                        l,
                        wa = function() {
                            n.play(Da, ra);
                            q.removeEventListener("canplaythrough", wa, !1)
                        };
                    q.addEventListener("canplaythrough", wa, !1);
                    return n
                }
                n.on("play");
                "function" === typeof l && l(E);
                return n
            });
            return n
        },
        pause: function(d, e) {
            var f = this;
            if (!f._loaded) return f.on("play", function() {
                f.pause(d)
            }), f;
            f._clearEndTimer(e || 0);
            var l = d ? f._nodeById(d) : f._activeNode();
            if (l)
                if (l._pos = f.pos(null, d), f._webAudio) {
                    if (!l.bufferSource || l.paused) return f;
                    l.paused = !0;
                    "undefined" === typeof l.bufferSource.stop ? l.bufferSource.noteOff(0) :
                        l.bufferSource.stop(0)
                } else l.pause();
            f.on("pause");
            return f
        },
        stop: function(d, e) {
            var f = this;
            if (!f._loaded) return f.on("play", function() {
                f.stop(d)
            }), f;
            f._clearEndTimer(e || 0);
            var l = d ? f._nodeById(d) : f._activeNode();
            if (l)
                if (l._pos = 0, f._webAudio) {
                    if (!l.bufferSource || l.paused) return f;
                    l.paused = !0;
                    "undefined" === typeof l.bufferSource.stop ? l.bufferSource.noteOff(0) : l.bufferSource.stop(0)
                } else l.pause(), l.currentTime = 0;
            return f
        },
        mute: function(d) {
            var e = this;
            if (!e._loaded) return e.on("play", function() {
                    e.mute(d)
                }),
                e;
            var f = d ? e._nodeById(d) : e._activeNode();
            f && (e._webAudio ? f.gain.value = 0 : f.volume = 0);
            return e
        },
        unmute: function(d) {
            var e = this;
            if (!e._loaded) return e.on("play", function() {
                e.unmute(d)
            }), e;
            var f = d ? e._nodeById(d) : e._activeNode();
            f && (e._webAudio ? f.gain.value = e._volume : f.volume = e._volume);
            return e
        },
        volume: function(d, e) {
            var f = this;
            d = parseFloat(d);
            if (0 <= d && 1 >= d) {
                f._volume = d;
                if (!f._loaded) return f.on("play", function() {
                    f.volume(d, e)
                }), f;
                var l = e ? f._nodeById(e) : f._activeNode();
                l && (f._webAudio ? l.gain.value = d : l.volume =
                    d * D.volume());
                return f
            }
            return f._volume
        },
        loop: function(d) {
            return "boolean" === typeof d ? (this._loop = d, this) : this._loop
        },
        sprite: function(d) {
            return "object" === typeof d ? (this._sprite = d, this) : this._sprite
        },
        pos: function(d, f) {
            var l = this;
            if (!l._loaded) return l.on("load", function() {
                l.pos(d)
            }), "number" === typeof d ? l : l._pos || 0;
            d = parseFloat(d);
            var n = f ? l._nodeById(f) : l._activeNode();
            if (n) return 0 <= d ? (l.pause(f), n._pos = d, l.play(n._sprite, f), l) : l._webAudio ? n._pos + (e.currentTime - l._playStart) : n.currentTime;
            if (0 <= d) return l;
            for (n = 0; n < l._audioNode.length; n++)
                if (l._audioNode[n].paused && 4 === l._audioNode[n].readyState) return l._webAudio ? l._audioNode[n]._pos : l._audioNode[n].currentTime
        },
        pos3d: function(d, e, f, l) {
            var n = this;
            e = "undefined" === typeof e || !e ? 0 : e;
            f = "undefined" === typeof f || !f ? -0.5 : f;
            if (!n._loaded) return n.on("play", function() {
                n.pos3d(d, e, f, l)
            }), n;
            if (0 <= d || 0 > d) {
                if (n._webAudio) {
                    var q = l ? n._nodeById(l) : n._activeNode();
                    q && (n._pos3d = [d, e, f], q.panner.setPosition(d, e, f))
                }
            } else return n._pos3d;
            return n
        },
        fade: function(d, e, f,
            l, n) {
            var q = this,
                v = Math.abs(d - e),
                x = d > e ? "down" : "up",
                v = v / 0.01,
                A = f / v;
            if (!q._loaded) return q.on("load", function() {
                q.fade(d, e, f, l, n)
            }), q;
            q.volume(d, n);
            for (var E = 1; E <= v; E++)(function() {
                var d = Math.round(1E3 * (q._volume + ("up" === x ? 0.01 : -0.01) * E)) / 1E3;
                setTimeout(function() {
                    q.volume(d, n);
                    d === e && l && l()
                }, A * E)
            })()
        },
        fadeIn: function(d, e, f) {
            return this.volume(0).play().fade(0, d, e, f)
        },
        fadeOut: function(d, e, f, l) {
            var n = this;
            return n.fade(n._volume, d, e, function() {
                f && f();
                n.pause(l);
                n.on("end")
            }, l)
        },
        _nodeById: function(d) {
            for (var e =
                this._audioNode[0], f = 0; f < this._audioNode.length; f++)
                if (this._audioNode[f].id === d) {
                    e = this._audioNode[f];
                    break
                }
            return e
        },
        _activeNode: function() {
            for (var d = null, e = 0; e < this._audioNode.length; e++)
                if (!this._audioNode[e].paused) {
                    d = this._audioNode[e];
                    break
                }
            this._drainPool();
            return d
        },
        _inactiveNode: function(d) {
            for (var e = null, f = 0; f < this._audioNode.length; f++)
                if (this._audioNode[f].paused && 4 === this._audioNode[f].readyState) {
                    d(this._audioNode[f]);
                    e = !0;
                    break
                }
            this._drainPool();
            if (!e) {
                var l;
                this._webAudio ? (l = this._setupAudioNode(),
                    d(l)) : (this.load(), l = this._audioNode[this._audioNode.length - 1], l.addEventListener("loadedmetadata", function() {
                    d(l)
                }))
            }
        },
        _drainPool: function() {
            var d = 0,
                e;
            for (e = 0; e < this._audioNode.length; e++) this._audioNode[e].paused && d++;
            for (e = this._audioNode.length - 1; 0 <= e && !(5 >= d); e--) this._audioNode[e].paused && (this._webAudio && this._audioNode[e].disconnect(0), d--, this._audioNode.splice(e, 1))
        },
        _clearEndTimer: function(d) {
            d = this._onendTimer.indexOf(d);
            d = 0 <= d ? d : 0;
            this._onendTimer[d] && (clearTimeout(this._onendTimer[d]),
                this._onendTimer.splice(d, 1))
        },
        _setupAudioNode: function() {
            var d = this._audioNode,
                f = this._audioNode.length;
            d[f] = "undefined" === typeof e.createGain ? e.createGainNode() : e.createGain();
            d[f].gain.value = this._volume;
            d[f].paused = !0;
            d[f]._pos = 0;
            d[f].readyState = 4;
            d[f].connect(q);
            d[f].panner = e.createPanner();
            d[f].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            d[f].panner.connect(d[f]);
            return d[f]
        },
        on: function(d, e) {
            var f = this["_on" + d];
            if ("function" === typeof e) f.push(e);
            else
                for (var l = 0; l < f.length; l++) e ?
                    f[l].call(this, e) : f[l].call(this);
            return this
        },
        off: function(d, e) {
            for (var f = this["_on" + d], l = e.toString(), n = 0; n < f.length; n++)
                if (l === f[n].toString()) {
                    f.splice(n, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var e = this._audioNode, f = 0; f < this._audioNode.length; f++) e[f].paused || this.stop(e[f].id), this._webAudio ? e[f].disconnect(0) : e[f].src = "";
            e = D._howls.indexOf(this);
            null !== e && 0 <= e && D._howls.splice(e, 1);
            delete d[this._src]
        }
    };
    if (f) var E = function(d, e) {
        d._duration = e ? e.duration : d._duration;
        0 === Object.getOwnPropertyNames(d._sprite).length &&
            (d._sprite = {
                _default: [0, 1E3 * d._duration]
            });
        d._loaded || (d._loaded = !0, d.on("load"));
        d._autoplay && d.play()
    };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: D,
            Howl: A
        }
    });
    "undefined" !== typeof exports && (exports.Howler = D, exports.Howl = A);
    window.Howler = D;
    window.Howl = A
})();
(function(d) {
    Number.prototype.map = function(d, e, f, l) {
        return f + (l - f) * ((this - d) / (e - d))
    };
    Number.prototype.limit = function(d, e) {
        return Math.min(e, Math.max(d, this))
    };
    Number.prototype.round = function(d) {
        d = Math.pow(10, d || 0);
        return Math.round(this * d) / d
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(d) {
        for (var e = this.length; e--;) this[e] === d && this.splice(e, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(d) {
        var e = this;
        return function() {
            var f = Array.prototype.slice.call(arguments);
            return e.apply(d || null, f)
        }
    };
    d.ig = {
        game: null,
        debug: null,
        version: "1.20",
        global: d,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: d.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(d) {
            return "#" == d.charAt(0) ? document.getElementById(d.substr(1)) : document.getElementsByTagName(d)
        },
        $new: function(d) {
            return document.createElement(d)
        },
        copy: function(d) {
            if (!d || "object" != typeof d || d instanceof HTMLElement || d instanceof ig.Class) return d;
            if (d instanceof Array)
                for (var e = [], f = 0, l = d.length; f < l; f++) e[f] = ig.copy(d[f]);
            else
                for (f in e = {}, d) e[f] = ig.copy(d[f]);
            return e
        },
        merge: function(d, e) {
            for (var f in e) {
                var l = e[f];
                if ("object" !=
                    typeof l || l instanceof HTMLElement || l instanceof ig.Class) d[f] = l;
                else {
                    if (!d[f] || "object" != typeof d[f]) d[f] = l instanceof Array ? [] : {};
                    ig.merge(d[f], l)
                }
            }
            return d
        },
        ksort: function(d) {
            if (!d || "object" != typeof d) return [];
            var e = [],
                f = [],
                l;
            for (l in d) e.push(l);
            e.sort();
            for (l = 0; l < e.length; l++) f.push(d[e[l]]);
            return f
        },
        module: function(d) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[d] && ig.modules[d].body) throw "Module '" + d + "' is already defined";
            ig._current = {
                name: d,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[d] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(d) {
            ig._current.body = d;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(d) {
            ig.resources.push(d)
        },
        setNocache: function(d) {
            ig.nocache = d ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(d, e) {
            ig.modules[d] = {
                name: d,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var f = ig.prefix + ig.lib + d.replace(/\./g, "/") + ".js" + ig.nocache,
                l = ig.$new("script");
            l.type = "text/javascript";
            l.src = f;
            l.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            l.onerror = function() {
                throw "Failed to load module " + d + " at " + f + " required from " + e;
            };
            ig.$("head")[0].appendChild(l)
        },
        _execModules: function() {
            for (var d = !1, e = 0; e < ig._loadQueue.length; e++) {
                for (var f = ig._loadQueue[e], l = !0, n = 0; n < f.requires.length; n++) {
                    var q = f.requires[n];
                    ig.modules[q] ? ig.modules[q].loaded || (l = !1) :
                        (l = !1, ig._loadScript(q, f.name))
                }
                l && f.body && (ig._loadQueue.splice(e, 1), f.loaded = !0, f.body(), d = !0, e--)
            }
            if (d) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                d = [];
                for (e = 0; e < ig._loadQueue.length; e++) {
                    l = [];
                    q = ig._loadQueue[e].requires;
                    for (n = 0; n < q.length; n++) f = ig.modules[q[n]], (!f || !f.loaded) && l.push(q[n]);
                    d.push(ig._loadQueue[e].name + " (requires: " + l.join(", ") + ")")
                }
                throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" +
                d.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = d.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: d.innerWidth,
                height: d.innerHeight
            };
            ig.ua.screen = {
                width: d.screen.availWidth * ig.ua.pixelRatio,
                height: d.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in d || d.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), d.addEventListener("load",
                ig._DOMReady, !1)))
        }
    };
    for (var e = ["ms", "moz", "webkit", "o"], f = 0; f < e.length && !d.requestAnimationFrame; f++) d.requestAnimationFrame = d[e[f] + "RequestAnimationFrame"];
    if (d.requestAnimationFrame) {
        var l = 1,
            n = {};
        d.ig.setAnimation = function(e, f) {
            var q = l++;
            n[q] = !0;
            var p = function() {
                n[q] && (d.requestAnimationFrame(p, f), e())
            };
            d.requestAnimationFrame(p, f);
            return q
        };
        d.ig.clearAnimation = function(d) {
            delete n[d]
        }
    } else d.ig.setAnimation = function(e) {
        return d.setInterval(e, 1E3 / 60)
    }, d.ig.clearAnimation = function(e) {
        d.clearInterval(e)
    };
    var q = !1,
        x = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/;
    d.ig.Class = function() {};
    var D = function(d) {
        var e = this.prototype,
            f = {},
            l;
        for (l in d) "function" == typeof d[l] && "function" == typeof e[l] && x.test(d[l]) ? (f[l] = e[l], e[l] = function(d, e) {
            return function() {
                var l = this.parent;
                this.parent = f[d];
                var n = e.apply(this, arguments);
                this.parent = l;
                return n
            }
        }(l, d[l])) : e[l] = d[l]
    };
    d.ig.Class.extend = function(e) {
        function f() {
            if (!q) {
                if (this.staticInstantiate) {
                    var d = this.staticInstantiate.apply(this, arguments);
                    if (d) return d
                }
                for (var e in this) "object" ==
                    typeof this[e] && (this[e] = ig.copy(this[e]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var l = this.prototype;
        q = !0;
        var n = new this;
        q = !1;
        for (var s in e) n[s] = "function" == typeof e[s] && "function" == typeof l[s] && x.test(e[s]) ? function(d, e) {
            return function() {
                var f = this.parent;
                this.parent = l[d];
                var n = e.apply(this, arguments);
                this.parent = f;
                return n
            }
        }(s, e[s]) : e[s];
        f.prototype = n;
        f.constructor = f;
        f.extend = d.ig.Class.extend;
        f.inject = D;
        return f
    }
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(d) {
            return ig.Image.cache[d] || null
        },
        init: function(d) {
            this.path = d;
            this.load()
        },
        load: function(d) {
            this.loaded ? d && d(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = d || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(d) {
            var e = this.width * d,
                f = this.height * d,
                l = ig.$new("canvas");
            l.width = this.width;
            l.height = this.height;
            l = l.getContext("2d");
            l.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            var l = l.getImageData(0, 0, this.width, this.height),
                n = ig.$new("canvas");
            n.width = e;
            n.height = f;
            for (var q = n.getContext("2d"), x = q.getImageData(0, 0, e, f), D = 0; D < f; D++)
                for (var v = 0; v < e; v++) {
                    var A = 4 * (Math.floor(D / d) * this.width + Math.floor(v / d)),
                        E = 4 * (D * e + v);
                    x.data[E] = l.data[A];
                    x.data[E + 1] = l.data[A + 1];
                    x.data[E + 2] = l.data[A + 2];
                    x.data[E + 3] = l.data[A + 3]
                }
            q.putImageData(x, 0, 0);
            this.data =
                n
        },
        draw: function(d, e, f, l, n, q) {
            if (this.loaded) {
                var x = ig.system.scale;
                n = (n ? n : this.width) * x;
                q = (q ? q : this.height) * x;
                ig.system.context.drawImage(this.data, f ? f * x : 0, l ? l * x : 0, n, q, ig.system.getDrawPos(d), ig.system.getDrawPos(e), n, q);
                ig.Image.drawCount++
            }
        },
        drawTile: function(d, e, f, l, n, q, x) {
            n = n ? n : l;
            if (this.loaded && !(l > this.width || n > this.height)) {
                var D = ig.system.scale,
                    v = Math.floor(l * D),
                    A = Math.floor(n * D),
                    E = q ? -1 : 1,
                    p = x ? -1 : 1;
                if (q || x) ig.system.context.save(), ig.system.context.scale(E, p);
                ig.system.context.drawImage(this.data,
                    Math.floor(f * l) % this.width * D, Math.floor(f * l / this.width) * n * D, v, A, ig.system.getDrawPos(d) * E - (q ? v : 0), ig.system.getDrawPos(e) * p - (x ? A : 0), v, A);
                (q || x) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var d in ig.Image.cache) ig.Image.cache[d].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(d) {
            this._loadMetrics(this.data);
            this.parent(d)
        },
        widthForString: function(d) {
            if (-1 !== d.indexOf("\n")) {
                d = d.split("\n");
                for (var e = 0, f = 0; f < d.length; f++) e = Math.max(e, this._widthForLine(d[f]));
                return e
            }
            return this._widthForLine(d)
        },
        _widthForLine: function(d) {
            for (var e = 0, f = 0; f < d.length; f++) e += this.widthMap[d.charCodeAt(f) - this.firstChar] +
                this.letterSpacing;
            return e
        },
        heightForString: function(d) {
            return d.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(d, e, f, l) {
            "string" != typeof d && (d = d.toString());
            if (-1 !== d.indexOf("\n")) {
                d = d.split("\n");
                for (var n = this.height + this.lineSpacing, q = 0; q < d.length; q++) this.draw(d[q], e, f + q * n, l)
            } else {
                if (l == ig.Font.ALIGN.RIGHT || l == ig.Font.ALIGN.CENTER) q = this._widthForLine(d), e -= l == ig.Font.ALIGN.CENTER ? q / 2 : q;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (q = 0; q < d.length; q++) l = d.charCodeAt(q),
                    e += this._drawChar(l - this.firstChar, e, f);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += d.length
            }
        },
        _drawChar: function(d, e, f) {
            if (!this.loaded || 0 > d || d >= this.indices.length) return 0;
            var l = ig.system.scale,
                n = this.widthMap[d] * l,
                q = (this.height - 2) * l;
            ig.system.context.drawImage(this.data, this.indices[d] * l, 0, n, q, ig.system.getDrawPos(e), ig.system.getDrawPos(f), n, q);
            return this.widthMap[d] + this.letterSpacing
        },
        _loadMetrics: function(d) {
            this.height = d.height - 1;
            this.widthMap = [];
            this.indices = [];
            var e = ig.$new("canvas");
            e.width = d.width;
            e.height = d.height;
            e = e.getContext("2d");
            e.drawImage(d, 0, 0);
            for (var e = e.getImageData(0, d.height - 1, d.width, 1), f = 0, l = 0, n = 0; n < d.width; n++) {
                var q = 4 * n + 3;
                0 != e.data[q] ? l++ : 0 == e.data[q] && l && (this.widthMap.push(l), this.indices.push(n - l), f++, l = 0)
            }
            this.widthMap.push(l);
            this.indices.push(n - l)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            for (var d = new Audio, e = 0; e < ig.Sound.use.length; e++) {
                var f = ig.Sound.use[e];
                if (d.canPlayType(f.mime)) {
                    this.format = f;
                    break
                }
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function(d, e, f) {
            var l = ig.prefix + d.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[d]) {
                if (e && this.clips[d].length < ig.Sound.channels)
                    for (e = this.clips[d].length; e < ig.Sound.channels; e++) {
                        var n = new Audio(l);
                        n.load();
                        this.clips[d].push(n)
                    }
                return this.clips[d][0]
            }
            var q = new Audio(l);
            f && (q.addEventListener("canplaythrough", function D(e) {
                q.removeEventListener("canplaythrough", D, !1);
                f(d, !0, e)
            }, !1), q.addEventListener("error", function(e) {
                f(d, !0, e)
            }, !1));
            q.preload = "auto";
            q.load();
            this.clips[d] = [q];
            if (e)
                for (e = 1; e < ig.Sound.channels; e++) n = new Audio(l), n.load(), this.clips[d].push(n);
            return q
        },
        get: function(d) {
            d = this.clips[d];
            for (var e = 0, f; f = d[e++];)
                if (f.paused || f.ended) return f.ended && (f.currentTime = 0), f;
            d[0].pause();
            d[0].currentTime =
                0;
            return d[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) : this.__defineGetter__ &&
                (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(d, e) {
            if (ig.Sound.enabled) {
                var f = ig.soundManager.load(d instanceof ig.Sound ? d.path : d, !1);
                f.loop = this._loop;
                f.volume = this._volume;
                f.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(f);
                e && (this.namedTracks[e] = f);
                this.currentTrack || (this.currentTrack =
                    f)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch (d) {
                    console.log(d)
                }
            }
        },
        play: function(d) {
            if (d && this.namedTracks[d]) d = this.namedTracks[d], d != this.currentTrack &&
                (this.stop(), this.currentTrack = d);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(d) {
            this._loop = d;
            for (var e in this.tracks) this.tracks[e].loop = d
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(d) {
            this._volume = d.limit(0, 1);
            for (var e in this.tracks) this.tracks[e].volume = this._volume
        },
        fadeOut: function(d) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(d), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var d = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= d ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = d
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(d, e) {
            this.path = d;
            this.multiChannel = !1 !== e;
            this.load()
        },
        load: function(d) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, d) : ig.addResource(this) : d && d(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(d, e) {
            this.gameClass = d;
            this.resources = e;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var f = 0; f < this.resources.length; f++) this._unloaded.push(this.resources[f].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var d =
                    0; d < this.resources.length; d++) this.loadResource(this.resources[d]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(d) {
            d.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(d, e) {
            if (e) this._unloaded.erase(d);
            else throw "Failed to load resource: " + d;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(d) {
            this.last = this.base = ig.Timer.time;
            this.target = d || 0
        },
        set: function(d) {
            this.target = d || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var d = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : d
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = 0;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var d = Date.now();
        ig.Timer.time += Math.min((d - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = d
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(d, e, f, l, n) {
            this.fps = e;
            this.clock = new ig.Timer;
            this.canvas = ig.$(d);
            this.resize(f, l, n);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode
        },
        resize: function(d, e, f) {
            this.width = d;
            this.height =
                e;
            this.scale = f || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(d) {
            this.running ? this.newGameClass = d : this.setGameNow(d)
        },
        setGameNow: function(d) {
            ig.game = new d;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(d) {
            if ("function" == typeof d.run) this.delegate = d, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(d) {
            this.context.fillStyle = d;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(d) {
            return Math.round(d) *
                this.scale
        },
        SMOOTH: function(d) {
            return Math.round(d * this.scale)
        },
        SUBPIXEL: function(d) {
            return d * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var d = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", d, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", d, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(d) {
            var e = this.bindings[0 < (d.wheelDelta ? d.wheelDelta : -1 * d.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            e && (this.actions[e] = !0, this.presses[e] = !0, this.delayedKeyup[e] = !0, d.stopPropagation(), d.preventDefault())
        },
        mousemove: function(d) {
            for (var e =
                ig.system.canvas, f = 0, l = 0; null != e;) f += e.offsetLeft, l += e.offsetTop, e = e.offsetParent;
            var e = d.pageX,
                n = d.pageY;
            d.touches && (e = d.touches[0].clientX, n = d.touches[0].clientY);
            this.mouse.x = (e - f) / ig.system.scale;
            this.mouse.y = (n - l) / ig.system.scale
        },
        contextmenu: function(d) {
            this.bindings[ig.KEY.MOUSE2] && (d.stopPropagation(), d.preventDefault())
        },
        keydown: function(d) {
            if ("text" != d.target.type) {
                var e = "keydown" == d.type ? d.keyCode : 2 == d.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1;
                ("touchstart" == d.type || "mousedown" == d.type) && this.mousemove(d);
                if (e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), d.stopPropagation(), d.preventDefault()
            }
        },
        keyup: function(d) {
            if ("text" != d.target.type) {
                var e = this.bindings["keyup" == d.type ? d.keyCode : 2 == d.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1];
                e && (this.delayedKeyup[e] = !0, d.stopPropagation(), d.preventDefault())
            }
        },
        devicemotion: function(d) {
            this.accel = d.accelerationIncludingGravity
        },
        bind: function(d, e) {
            0 > d ? this.initMouse() : 0 < d && this.initKeyboard();
            this.bindings[d] = e
        },
        bindTouch: function(d,
            e) {
            var f = ig.$(d),
                l = this;
            f.addEventListener("touchstart", function(d) {
                l.touchStart(d, e)
            }, !1);
            f.addEventListener("touchend", function(d) {
                l.touchEnd(d, e)
            }, !1)
        },
        unbind: function(d) {
            this.delayedKeyup[this.bindings[d]] = !0;
            this.bindings[d] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(d) {
            return this.actions[d]
        },
        pressed: function(d) {
            return this.presses[d]
        },
        released: function(d) {
            return this.delayedKeyup[d]
        },
        clearPressed: function() {
            for (var d in this.delayedKeyup) this.actions[d] = !1, this.locks[d] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(d, e) {
            this.actions[e] = !0;
            this.presses[e] = !0;
            d.stopPropagation();
            d.preventDefault();
            return !1
        },
        touchEnd: function(d, e) {
            this.delayedKeyup[e] = !0;
            d.stopPropagation();
            d.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(d, e, f, l, n, q, x) {
        ig.system = new ig.System(d, f, l, n, q || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(x || ig.Loader)(e, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(d, e, f) {
            this.width = e;
            this.height = f;
            this.image = new ig.Image(d)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(d, e, f, l) {
            this.sheet = d;
            this.pivot = {
                x: d.width / 2,
                y: d.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = e;
            this.sequence = f;
            this.stop = !!l;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.reset();
            this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(d) {
            this.timer.set(this.frameTime * -d);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var d = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(d / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : d % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(d, e) {
            var f = Math.max(this.sheet.width, this.sheet.height);
            d > ig.system.width || e > ig.system.height || (0 > d + f || 0 > e + f) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(d, e, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(d + this.pivot.x), ig.system.getDrawPos(e + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        posMP: {
            x: 0,
            y: 0
        },
        posML: {
            x: 0,
            y: 0
        },
        enableReposition: !1,
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(d, e, f) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = d;
            this.pos.y = e;
            ig.merge(this, f)
        },
        addAnim: function(d, e, f, l) {
            if (!this.animSheet) throw "No animSheet to add the animation " + d + " to.";
            e = new ig.Animation(this.animSheet, e, f, l);
            this.anims[d] = e;
            this.currentAnim || (this.currentAnim = e);
            return e
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x,
                this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var d = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(d);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(d, e, f, l) {
            return e ? (d + e * ig.system.tick).limit(-l, l) : f ? (e = f * ig.system.tick, 0 < d - e ? d - e : 0 > d + e ? d + e : 0) : d.limit(-l, l)
        },
        handleMovementTrace: function(d) {
            this.standing = !1;
            d.collision.y &&
                (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            d.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (d.collision.slope) {
                var e = d.collision.slope;
                if (0 < this.bounciness) {
                    var f = this.vel.x * e.nx + this.vel.y * e.ny;
                    this.vel.x = (this.vel.x - 2 * e.nx * f) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * e.ny * f) * this.bounciness
                } else f = (this.vel.x * e.x + this.vel.y *
                    e.y) / (e.x * e.x + e.y * e.y), this.vel.x = e.x * f, this.vel.y = e.y * f, e = Math.atan2(e.x, e.y), e > this.slopeStanding.min && e < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = d.pos
        },
        reposition: function() {
            ig.ua.mobile && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x, this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x, this.pos.y = this.posML.y))
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(d) {
            this.health -= d;
            0 >= this.health && this.kill()
        },
        touches: function(d) {
            return !(this.pos.x >= d.pos.x + d.size.x || this.pos.x + this.size.x <= d.pos.x || this.pos.y >= d.pos.y + d.size.y || this.pos.y + this.size.y <= d.pos.y)
        },
        distanceTo: function(d) {
            var e = this.pos.x + this.size.x / 2 - (d.pos.x + d.size.x / 2);
            d = this.pos.y + this.size.y / 2 - (d.pos.y + d.size.y / 2);
            return Math.sqrt(e * e + d * d)
        },
        angleTo: function(d) {
            return Math.atan2(d.pos.y + d.size.y / 2 - (this.pos.y + this.size.y / 2), d.pos.x + d.size.x / 2 - (this.pos.x + this.size.x /
                2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(d, e) {
        d.checkAgainst & e.type && d.check(e);
        e.checkAgainst & d.type && e.check(d);
        d.collides && e.collides && d.collides + e.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(d, e)
    };
    ig.Entity.solveCollision = function(d, e) {
        var f = null;
        if (d.collides == ig.Entity.COLLIDES.LITE || e.collides == ig.Entity.COLLIDES.FIXED) f =
            d;
        else if (e.collides == ig.Entity.COLLIDES.LITE || d.collides == ig.Entity.COLLIDES.FIXED) f = e;
        d.last.x + d.size.x > e.last.x && d.last.x < e.last.x + e.size.x ? (d.last.y < e.last.y ? ig.Entity.seperateOnYAxis(d, e, f) : ig.Entity.seperateOnYAxis(e, d, f), d.collideWith(e, "y"), e.collideWith(d, "y")) : d.last.y + d.size.y > e.last.y && d.last.y < e.last.y + e.size.y && (d.last.x < e.last.x ? ig.Entity.seperateOnXAxis(d, e, f) : ig.Entity.seperateOnXAxis(e, d, f), d.collideWith(e, "x"), e.collideWith(d, "x"))
    };
    ig.Entity.seperateOnXAxis = function(d, e, f) {
        var l =
            d.pos.x + d.size.x - e.pos.x;
        f ? (f.vel.x = -f.vel.x * f.bounciness + (d === f ? e : d).vel.x, e = ig.game.collisionMap.trace(f.pos.x, f.pos.y, f == d ? -l : l, 0, f.size.x, f.size.y), f.pos.x = e.pos.x) : (f = (d.vel.x - e.vel.x) / 2, d.vel.x = -f, e.vel.x = f, f = ig.game.collisionMap.trace(d.pos.x, d.pos.y, -l / 2, 0, d.size.x, d.size.y), d.pos.x = Math.floor(f.pos.x), d = ig.game.collisionMap.trace(e.pos.x, e.pos.y, l / 2, 0, e.size.x, e.size.y), e.pos.x = Math.ceil(d.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(d, e, f) {
        var l = d.pos.y + d.size.y - e.pos.y;
        if (f) {
            e = d === f ? e : d;
            f.vel.y = -f.vel.y * f.bounciness + e.vel.y;
            var n = 0;
            f == d && Math.abs(f.vel.y - e.vel.y) < f.minBounceVelocity && (f.standing = !0, n = e.vel.x * ig.system.tick);
            d = ig.game.collisionMap.trace(f.pos.x, f.pos.y, n, f == d ? -l : l, f.size.x, f.size.y);
            f.pos.y = d.pos.y;
            f.pos.x = d.pos.x
        } else ig.game.gravity && (e.standing || 0 < d.vel.y) ? (f = ig.game.collisionMap.trace(d.pos.x, d.pos.y, 0, -(d.pos.y + d.size.y - e.pos.y), d.size.x, d.size.y), d.pos.y = f.pos.y, 0 < d.bounciness && d.vel.y > d.minBounceVelocity ? d.vel.y *= -d.bounciness : (d.standing = !0, d.vel.y = 0)) : (f =
            (d.vel.y - e.vel.y) / 2, d.vel.y = -f, e.vel.y = f, n = e.vel.x * ig.system.tick, f = ig.game.collisionMap.trace(d.pos.x, d.pos.y, n, -l / 2, d.size.x, d.size.y), d.pos.y = f.pos.y, d = ig.game.collisionMap.trace(e.pos.x, e.pos.y, 0, l / 2, e.size.x, e.size.y), e.pos.y = d.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(d, e) {
            this.tilesize = d;
            this.data = e;
            this.height = e.length;
            this.width = e[0].length
        },
        getTile: function(d, e) {
            var f = Math.floor(d / this.tilesize),
                l = Math.floor(e / this.tilesize);
            return 0 <= f && f < this.width && 0 <= l && l < this.height ? this.data[l][f] : 0
        },
        setTile: function(d, e, f) {
            d = Math.floor(d / this.tilesize);
            e = Math.floor(e / this.tilesize);
            0 <= d && d < this.width && 0 <= e && e < this.height && (this.data[e][d] =
                f)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(d, e, n) {
            this.parent(d, e);
            this.tiledef = n || ig.CollisionMap.defaultTileDef;
            for (var q in this.tiledef) q | 0 > this.lastSlope && (this.lastSlope = q | 0)
        },
        trace: function(d, e, n, q, x, D) {
            var v = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: d,
                        y: e
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                A = Math.ceil(Math.max(Math.abs(n), Math.abs(q)) / this.tilesize);
            if (1 < A)
                for (var E = n / A, p = q / A, s = 0; s < A && (E || p) && !(this._traceStep(v,
                    d, e, E, p, x, D, n, q, s), d = v.pos.x, e = v.pos.y, v.collision.x && (n = E = 0), v.collision.y && (q = p = 0), v.collision.slope); s++);
            else this._traceStep(v, d, e, n, q, x, D, n, q, 0);
            return v
        },
        _traceStep: function(d, e, n, q, x, D, v, A, E, p) {
            d.pos.x += q;
            d.pos.y += x;
            var s = 0;
            if (q) {
                var u = 0 < q ? D : 0,
                    B = 0 > q ? this.tilesize : 0,
                    s = Math.max(Math.floor(n / this.tilesize), 0),
                    R = Math.min(Math.ceil((n + v) / this.tilesize), this.height);
                q = Math.floor((d.pos.x + u) / this.tilesize);
                var K = Math.floor((e + u) / this.tilesize);
                if (0 < p || q == K || 0 > K || K >= this.width) K = -1;
                if (0 <= q && q < this.width)
                    for (var I =
                        s; I < R && !(-1 != K && (s = this.data[I][K], 1 < s && s <= this.lastSlope && this._checkTileDef(d, s, e, n, A, E, D, v, K, I))); I++)
                        if (s = this.data[I][q], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(d, s, e, n, A, E, D, v, q, I)) {
                            if (1 < s && s <= this.lastSlope && d.collision.slope) break;
                            d.collision.x = !0;
                            d.tile.x = s;
                            e = d.pos.x = q * this.tilesize - u + B;
                            A = 0;
                            break
                        }
            }
            if (x) {
                u = 0 < x ? v : 0;
                x = 0 > x ? this.tilesize : 0;
                s = Math.max(Math.floor(d.pos.x / this.tilesize), 0);
                B = Math.min(Math.ceil((d.pos.x + D) / this.tilesize), this.width);
                I = Math.floor((d.pos.y + u) / this.tilesize);
                R = Math.floor((n + u) / this.tilesize);
                if (0 < p || I == R || 0 > R || R >= this.height) R = -1;
                if (0 <= I && I < this.height)
                    for (q = s; q < B && !(-1 != R && (s = this.data[R][q], 1 < s && s <= this.lastSlope && this._checkTileDef(d, s, e, n, A, E, D, v, q, R))); q++)
                        if (s = this.data[I][q], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(d, s, e, n, A, E, D, v, q, I)) {
                            if (1 < s && s <= this.lastSlope && d.collision.slope) break;
                            d.collision.y = !0;
                            d.tile.y = s;
                            d.pos.y = I * this.tilesize - u + x;
                            break
                        }
            }
        },
        _checkTileDef: function(d, e, n, q, x, D, v, A, E, p) {
            var s = this.tiledef[e];
            if (!s) return !1;
            e = (s[2] -
                s[0]) * this.tilesize;
            var u = (s[3] - s[1]) * this.tilesize,
                B = s[4];
            v = n + x + (0 > u ? v : 0) - (E + s[0]) * this.tilesize;
            A = q + D + (0 < e ? A : 0) - (p + s[1]) * this.tilesize;
            if (0 < e * A - u * v) {
                if (0 > x * -u + D * e) return B;
                E = Math.sqrt(e * e + u * u);
                p = u / E;
                E = -e / E;
                var R = v * p + A * E,
                    s = p * R,
                    R = E * R;
                if (s * s + R * R >= x * x + D * D) return B || 0.5 > e * (A - D) - u * (v - x);
                d.pos.x = n + x - s;
                d.pos.y = q + D - R;
                d.collision.slope = {
                    x: e,
                    y: u,
                    nx: p,
                    ny: E
                };
                return !0
            }
            return !1
        }
    });
    var d = 1 / 3,
        e = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, e, !0],
        6: [0, e, 1, d, !0],
        7: [0, d, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [e, 1, 1, 0, !0],
        43: [d, 1, e, 0, !0],
        54: [0, 1, d, 0, !0],
        27: [0, 0, 1, d, !0],
        28: [0, d, 1, e, !0],
        29: [0, e, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, d, 1, !0],
        44: [d, 0, e, 1, !0],
        55: [e, 0, 1, 1, !0],
        16: [1, d, 0, 0, !0],
        17: [1, e, 0, d, !0],
        18: [1, 1, 0, e, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [d, 1, 0, 0, !0],
        41: [e, 1, d, 0, !0],
        52: [1, 1, e, 0, !0],
        38: [1, e, 0, 1, !0],
        39: [1, d, 0, e, !0],
        40: [1, 0,
            0, d, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, e, 1, !0],
        42: [e, 0, d, 1, !0],
        53: [d, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(d, e, n, q) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: d + n,
                    y: e + q
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(d, e, f) {
            this.parent(d, e);
            this.setTileset(f)
        },
        setTileset: function(d) {
            this.tilesetName = d instanceof ig.Image ? d.path : d;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(d,
            e) {
            this.scroll.x = d / this.distance;
            this.scroll.y = e / this.distance
        },
        preRenderMapToChunks: function() {
            var d = this.width * this.tilesize * ig.system.scale,
                e = this.height * this.tilesize * ig.system.scale,
                f = Math.ceil(d / this.chunkSize),
                l = Math.ceil(e / this.chunkSize);
            this.preRenderedChunks = [];
            for (var n = 0; n < l; n++) {
                this.preRenderedChunks[n] = [];
                for (var q = 0; q < f; q++) this.preRenderedChunks[n][q] = this.preRenderChunk(q, n, q == f - 1 ? d - q * this.chunkSize : this.chunkSize, n == l - 1 ? e - n * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(d,
            e, f, l) {
            var n = f / this.tilesize / ig.system.scale + 1,
                q = l / this.tilesize / ig.system.scale + 1,
                x = d * this.chunkSize / ig.system.scale % this.tilesize,
                D = e * this.chunkSize / ig.system.scale % this.tilesize;
            d = Math.floor(d * this.chunkSize / this.tilesize / ig.system.scale);
            e = Math.floor(e * this.chunkSize / this.tilesize / ig.system.scale);
            var v = ig.$new("canvas");
            v.width = f;
            v.height = l;
            f = ig.system.context;
            ig.system.context = v.getContext("2d");
            for (l = 0; l < n; l++)
                for (var A = 0; A < q; A++)
                    if (l + d < this.width && A + e < this.height) {
                        var E = this.data[A + e][l + d];
                        E && this.tiles.drawTile(l * this.tilesize - x, A * this.tilesize - D, E - 1, this.tilesize)
                    }
            ig.system.context = f;
            return v
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var d = ig.system.getDrawPos(this.scroll.x),
                e = ig.system.getDrawPos(this.scroll.y);
            this.repeat && (d %= this.width * this.tilesize * ig.system.scale, e %= this.height * this.tilesize * ig.system.scale);
            var f = Math.max(Math.floor(d /
                    this.chunkSize), 0),
                l = Math.max(Math.floor(e / this.chunkSize), 0),
                n = Math.ceil((d + ig.system.realWidth) / this.chunkSize),
                q = Math.ceil((e + ig.system.realHeight) / this.chunkSize),
                x = this.preRenderedChunks[0].length,
                D = this.preRenderedChunks.length;
            this.repeat || (n = Math.min(n, x), q = Math.min(q, D));
            for (var v = 0; l < q; l++) {
                for (var A = 0, E = f; E < n; E++) {
                    var p = this.preRenderedChunks[l % D][E % x],
                        s = -d + E * this.chunkSize - A,
                        u = -e + l * this.chunkSize - v;
                    ig.system.context.drawImage(p, s, u);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle =
                        "#f0f", ig.system.context.strokeRect(s, u, this.chunkSize, this.chunkSize));
                    this.repeat && p.width < this.chunkSize && s + p.width < ig.system.realWidth && (A = this.chunkSize - p.width, n++)
                }
                this.repeat && p.height < this.chunkSize && u + p.height < ig.system.realHeight && (v = this.chunkSize - p.height, q++)
            }
        },
        drawTiled: function() {
            for (var d = 0, e = null, f = (this.scroll.x / this.tilesize).toInt(), l = (this.scroll.y / this.tilesize).toInt(), n = this.scroll.x % this.tilesize, q = this.scroll.y % this.tilesize, x = -n - this.tilesize, n = ig.system.width + this.tilesize -
                n, D = ig.system.height + this.tilesize - q, v = -1, q = -q - this.tilesize; q < D; v++, q += this.tilesize) {
                var A = v + l;
                if (A >= this.height || 0 > A) {
                    if (!this.repeat) continue;
                    A = 0 < A ? A % this.height : (A + 1) % this.height + this.height - 1
                }
                for (var E = -1, p = x; p < n; E++, p += this.tilesize) {
                    d = E + f;
                    if (d >= this.width || 0 > d) {
                        if (!this.repeat) continue;
                        d = 0 < d ? d % this.width : (d + 1) % this.width + this.width - 1
                    }
                    if (d = this.data[A][d])(e = this.anims[d - 1]) ? e.draw(p, q) : this.tiles.drawTile(p, q, d - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevelWithoutEntities: function(d) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (var e = 0; e < d.layer.length; e++) {
                var f = d.layer[e];
                if ("collision" == f.name) this.collisionMap = new ig.CollisionMap(f.tilesize, f.data);
                else {
                    var l = new ig.BackgroundMap(f.tilesize, f.data, f.tilesetName);
                    l.anims = this.backgroundAnims[f.tilesetName] || {};
                    l.repeat = f.repeat;
                    l.distance = f.distance;
                    l.foreground = !!f.foreground;
                    l.preRender = !!f.preRender;
                    l.name =
                        f.name;
                    this.backgroundMaps.push(l)
                }
            }
        },
        loadLevel: function(d) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var e = 0; e < d.entities.length; e++) {
                var f = d.entities[e];
                this.spawnEntity(f.type, f.x, f.y, f.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (e = 0; e < d.layer.length; e++)
                if (f = d.layer[e], "collision" == f.name) this.collisionMap = new ig.CollisionMap(f.tilesize, f.data);
                else {
                    var l = new ig.BackgroundMap(f.tilesize, f.data, f.tilesetName);
                    l.anims = this.backgroundAnims[f.tilesetName] || {};
                    l.repeat = f.repeat;
                    l.distance = f.distance;
                    l.foreground = !!f.foreground;
                    l.preRender = !!f.preRender;
                    l.name = f.name;
                    this.backgroundMaps.push(l)
                }
            for (e = 0; e < this.entities.length; e++) this.entities[e].ready()
        },
        loadLevelDeferred: function(d) {
            this._levelToLoad = d
        },
        getMapByName: function(d) {
            if ("collision" == d) return this.collisionMap;
            for (var e = 0; e < this.backgroundMaps.length; e++)
                if (this.backgroundMaps[e].name == d) return this.backgroundMaps[e];
            return null
        },
        getEntityByName: function(d) {
            return this.namedEntities[d]
        },
        getEntitiesByType: function(d) {
            d = "string" === typeof d ? ig.global[d] : d;
            for (var e = [], f = 0; f < this.entities.length; f++) {
                var l = this.entities[f];
                l instanceof d && !l._killed && e.push(l)
            }
            return e
        },
        spawnEntity: function(d, e, f, l) {
            var n = "string" === typeof d ? ig.global[d] : d;
            if (!n) throw "Can't spawn entity of type " + d;
            d = new n(e, f, l || {});
            this.entities.push(d);
            d.name && (this.namedEntities[d.name] = d);
            return d
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(d) {
            d.name && delete this.namedEntities[d.name];
            d._killed = !0;
            d.type = ig.Entity.TYPE.NONE;
            d.checkAgainst = ig.Entity.TYPE.NONE;
            d.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(d)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            this.updateEntities();
            this.checkEntities();
            for (var d = 0; d < this._deferredKill.length; d++) this.entities.erase(this._deferredKill[d]);
            this._deferredKill = [];
            for (var e in this.backgroundAnims) {
                var d = this.backgroundAnims[e],
                    f;
                for (f in d) d[f].update()
            }
        },
        updateEntities: function() {
            for (var d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e._killed || e.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var d;
            for (d = 0; d < this.backgroundMaps.length; d++) {
                var e = this.backgroundMaps[d];
                if (e.foreground) break;
                e.setScreenPos(this.screen.x, this.screen.y);
                e.draw()
            }
            this.drawEntities();
            for (d; d < this.backgroundMaps.length; d++) e = this.backgroundMaps[d], e.setScreenPos(this.screen.x, this.screen.y), e.draw()
        },
        drawEntities: function() {
            for (var d = 0; d < this.entities.length; d++) this.entities[d].draw()
        },
        checkEntities: function() {
            for (var d = {}, e = 0; e < this.entities.length; e++) {
                var f = this.entities[e];
                if (!(f.type == ig.Entity.TYPE.NONE && f.checkAgainst == ig.Entity.TYPE.NONE && f.collides == ig.Entity.COLLIDES.NEVER))
                    for (var l = {}, n = Math.floor(f.pos.y / this.cellSize), q = Math.floor((f.pos.x + f.size.x) / this.cellSize) + 1, x = Math.floor((f.pos.y + f.size.y) / this.cellSize) + 1, D = Math.floor(f.pos.x / this.cellSize); D < q; D++)
                        for (var v = n; v < x; v++)
                            if (d[D])
                                if (d[D][v]) {
                                    for (var A = d[D][v], E = 0; E < A.length; E++) f.touches(A[E]) && !l[A[E].id] && (l[A[E].id] = !0, ig.Entity.checkPair(f, A[E]));
                                    A.push(f)
                                } else d[D][v] = [f];
                else d[D] = {}, d[D][v] = [f]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(d, e) {
            return d.zIndex - e.zIndex
        },
        POS_X: function(d, e) {
            return d.pos.x + d.size.x - (e.pos.x +
                e.size.x)
        },
        POS_Y: function(d, e) {
            return d.pos.y + d.size.y - (e.pos.y + e.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(d) {
            this.parent(d);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            var d = ig.$new("link");
            d.rel = "stylesheet";
            d.type = "text/css";
            ig.$("body")[0].appendChild(d);
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log && window.console.assert && (ig.log =
                console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(d) {
            var e = ig.$new("span");
            this.numberContainer.appendChild(e);
            this.numberContainer.appendChild(document.createTextNode(d));
            this.numbers[d] = e
        },
        showNumber: function(d, e, f) {
            this.numbers[d] || this.addNumber(d, f);
            this.numbers[d].textContent = e
        },
        addPanel: function(d) {
            var e = new d.type(d.name, d.label);
            if (d.options)
                for (var f = 0; f <
                    d.options.length; f++) {
                    var l = d.options[f];
                    e.addOption(new ig.DebugOption(l.name, l.object, l.property))
                }
            this.panels[e.name] = e;
            e.container.style.display = "none";
            this.container.appendChild(e.container);
            d = ig.$new("div");
            d.className = "ig_debug_menu_item";
            d.textContent = e.label;
            d.addEventListener("click", function() {
                this.togglePanel(e)
            }.bind(this), !1);
            e.menuItem = d;
            l = !1;
            for (f = 1; f < this.panelMenu.childNodes.length; f++) {
                var n = this.panelMenu.childNodes[f];
                if (n.textContent > e.label) {
                    this.panelMenu.insertBefore(d, n);
                    l = !0;
                    break
                }
            }
            l || this.panelMenu.appendChild(d)
        },
        showPanel: function(d) {
            this.togglePanel(this.panels[d])
        },
        togglePanel: function(d) {
            d != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var e = "block" != d.container.style.display;
            d.toggle(e);
            d.menuItem.className = "ig_debug_menu_item" + (e ? " active" : "");
            e && (this.activePanel = d)
        },
        ready: function() {
            for (var d in this.panels) this.panels[d].ready()
        },
        beforeRun: function() {
            var d =
                Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (d - this.debugRealTime);
            this.debugRealTime = d;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var d = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * d;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(d, e) {
            this.name = d;
            this.label = e;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(d) {
            this.active = d;
            this.container.style.display = d ? "block" : "none"
        },
        addPanel: function(d) {
            this.panels.push(d);
            this.container.appendChild(d.container)
        },
        addOption: function(d) {
            this.options.push(d);
            this.container.appendChild(d.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(d, e, f) {
            this.name = d;
            this.object = e;
            this.property = f;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function(d) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            d.stopPropagation();
            d.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y *
                ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var d = this.pos.x + this.size.x / 2,
                    e = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, d, e, d + this.vel.x, e + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
                for (var f in this.target)(d = ig.game.getEntityByName(this.target[f])) &&
                    this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, d.pos.x + d.size.x / 2, d.pos.y + d.size.y / 2)
        },
        _debugDrawLine: function(d, e, f, l, n) {
            ig.system.context.strokeStyle = d;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(e - ig.game.screen.x), ig.system.getDrawPos(f - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(l - ig.game.screen.x), ig.system.getDrawPos(n - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(d, e) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(d, e)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(d) {
            this.parent(d);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(d, e) {
            this.parent(d, e);
            this.load()
        },
        load: function(d) {
            this.options = [];
            this.panels = [];
            if (!d || !d.backgroundMaps.length) this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = d.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (d = 0; d < this.maps.length; d++) {
                    var e = this.maps[d],
                        f = new ig.DebugPanel(d, "Layer " + d),
                        l = new ig.$new("strong");
                    l.textContent = d + ": " + e.tiles.path;
                    f.container.appendChild(l);
                    f.addOption(new ig.DebugOption("Enabled", e, "enabled"));
                    f.addOption(new ig.DebugOption("Pre Rendered", e, "preRender"));
                    f.addOption(new ig.DebugOption("Show Chunks", e, "debugChunks"));
                    this.generateMiniMap(f, e, d);
                    this.addPanel(f)
                }
            }
        },
        generateMiniMap: function(d, e, f) {
            var l = ig.system.scale,
                n = ig.$new("canvas"),
                q = n.getContext("2d"),
                x = e.tiles.width * l,
                D = e.tiles.height * l,
                v = x / e.tilesize;
            q.drawImage(e.tiles.data, 0, 0, x, D, 0, 0, v, D / e.tilesize);
            q = ig.$new("canvas");
            q.width = e.width * l;
            q.height = e.height * l;
            var A = q.getContext("2d");
            ig.game.clearColor && (A.fillStyle = ig.game.clearColor, A.fillRect(0, 0, x, D));
            for (D = x = 0; D < e.width; D++)
                for (var E = 0; E < e.height; E++)(x = e.data[E][D]) && A.drawImage(n, Math.floor((x - 1) * l % v), Math.floor((x - 1) * l / v) * l, l, l, D * l, E * l, l, l);
            n = ig.$new("div");
            n.className = "ig_debug_map_container";
            n.style.width = e.width *
                l + "px";
            n.style.height = e.height * l + "px";
            v = ig.$new("div");
            v.className = "ig_debug_map_screen";
            v.style.width = ig.system.width / e.tilesize * l - 2 + "px";
            v.style.height = ig.system.height / e.tilesize * l - 2 + "px";
            this.mapScreens[f] = v;
            n.appendChild(q);
            n.appendChild(v);
            d.container.appendChild(n)
        },
        afterRun: function() {
            for (var d = ig.system.scale, e = 0; e < this.maps.length; e++) {
                var f = this.maps[e],
                    l = this.mapScreens[e];
                if (f && l) {
                    var n = f.scroll.x / f.tilesize,
                        q = f.scroll.y / f.tilesize;
                    f.repeat && (n %= f.width, q %= f.height);
                    l.style.left = n * d +
                        "px";
                    l.style.top = q * d + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(d, e) {
            this.parent(d, e);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width,
                1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(d, e) {
            var f = ig.$new("span");
            f.className = "ig_debug_graph_mark";
            f.textContent = d;
            f.style.top = e.round() + "px";
            this.container.appendChild(f)
        },
        addClock: function(d, e,
            f) {
            var l = ig.$new("span");
            l.className = "ig_debug_legend_color";
            l.style.backgroundColor = f;
            var n = ig.$new("span");
            n.className = "ig_debug_legend_number";
            n.appendChild(document.createTextNode("0"));
            var q = ig.$new("span");
            q.className = "ig_debug_legend";
            q.appendChild(l);
            q.appendChild(document.createTextNode(e + " ("));
            q.appendChild(n);
            q.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(q);
            this.clocks[d] = {
                description: e,
                color: f,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: n
            }
        },
        beginClock: function(d,
            e) {
            this.clocks[d].start = Date.now() + (e || 0)
        },
        endClock: function(d) {
            d = this.clocks[d];
            d.current = Math.round(Date.now() - d.start);
            d.avg = 0.8 * d.avg + 0.2 * d.current
        },
        mark: function(d, e) {
            this.active && this.marks.push({
                msg: d,
                color: e || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var d = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - d, 0));
            var d = this.graph.width - 1,
                e = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle =
                "#000";
            this.ctx.fillRect(d, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(d, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(d, this.mark33ms, 1, 1);
            for (var f in this.clocks) {
                var l = this.clocks[f];
                l.html.textContent = l.avg.toFixed(2);
                if (l.color && 0 < l.current) {
                    this.ctx.fillStyle = l.color;
                    var n = l.current * this.msHeight,
                        e = e - n;
                    this.ctx.fillRect(d, e, 1, n);
                    l.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (f = 0; f < this.marks.length; f++) e = this.marks[f],
                this.ctx.fillStyle = e.color, this.ctx.fillRect(d, 0, 1, this.height), e.msg && (this.ctx.fillText(e.msg, d - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {
    $(".ig_debug").hide()
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobilePortrait: new ig.Image("media/graphics/splash/mobile/portrait/cover.jpg"),
        init: function(d, e) {
            this.parent(d, e);
            this.language = new ig.Language;
            //ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function() {
            this.parent();
            var d = 0 <= document.URL.indexOf("localhost") ?
                500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", d)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var d = ig.system.scale,
                e, f, l, n;
            ig.ua.mobile ? portraitMode ? (e = 180, f = 24, l = 50, n = 450,
                this.splashMobilePortrait.draw(0, 0)) : (e = 180, f = 24, l = 0.5 * ig.system.width - e / 2, n = 200, this.splashMobileLandscape.draw(0, 0)) : (e = 180, f = 20, l = 90, n = 350, this.splashDesktop.draw(0, 0));
            var q = ig.system.context.createLinearGradient(l * d, n * d, l * d + e, n * d);
            q.addColorStop(0, "#bf99da");
            q.addColorStop(1, "#8026c0");
            ig.system.context.fillStyle = "#fff";
            ig.system.context.fillRect(l * d, n * d, e * d, f * d);
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(l * d + d, n * d + d, e * d - d - d, f * d - d - d);
            ig.system.context.fillStyle = q;
            ig.system.context.strokeStyle =
                "black";
            ig.system.context.lineWidth = 2;
            ig.system.context.fillRect(l * d, n * d, e * d * this._drawStatus, f * d);
            ig.system.context.strokeRect(l * d, n * d, e * d * this._drawStatus, f * d);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.font = "12px Arial";
            f = _STRINGS.Splash.Loading;
            ig.ua.mobile ? (e = l + e / 2 - ig.system.context.measureText(f).width / 2, d = n * d + 18) : (e = l + e / 2 - ig.system.context.measureText(f).width / 2, d = n * d + 14);
            ig.system.context.fillText(f, e, d);
            ig.system.context.font = "bold 14px Arial";
            ig.system.context.fillStyle = "white";
            ig.system.context.font = "bold 12px Arial";
            ig.system.context.font = "bold 12px Arial"
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(d) {
        for (var e = 0; e < this.length; ++e)
            if (this[e] === d) return e;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var d = [], e = 0; e < this.tweens.length; e++) this.tweens[e].update(), this.tweens[e].complete || d.push(this.tweens[e]);
            this.tweens =
                d
        }
    };
    ig.Entity.prototype.tween = function(d, e, f) {
        d = new ig.Tween(this, d, e, f);
        this.tweens.push(d);
        return d
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var d = 0; d < this.tweens.length; d++) this.tweens[d].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var d = 0; d < this.tweens.length; d++) this.tweens[d].resume()
    };
    ig.Entity.prototype.stopTweens = function(d) {
        for (var e = 0; e < this.tweens.length; e++) this.tweens[e].stop(d)
    };
    ig.Tween = function(d, e, f, l) {
        var n = {},
            q = {},
            x = {},
            D = 0,
            v = !1,
            A = !1,
            E = !1;
        this.duration = f;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, l);
        this.loopNum = this.loopCount;
        this.chain = function(d) {
            E = d
        };
        this.initEnd = function(d, e, f) {
            if ("object" !== typeof e[d]) f[d] = e[d];
            else
                for (subprop in e[d]) f[d] || (f[d] = {}), this.initEnd(subprop, e[d], f[d])
        };
        this.initStart = function(d, e, f, l) {
            if ("object" !== typeof f[d]) "undefined" !== typeof e[d] && (l[d] = f[d]);
            else
                for (subprop in f[d]) l[d] || (l[d] = {}), "undefined" !== typeof e[d] && this.initStart(subprop,
                    e[d], f[d], l[d])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            D = 0; - 1 == d.tweens.indexOf(this) && d.tweens.push(this);
            A = !0;
            v = new ig.Timer;
            for (var f in e) this.initEnd(f, e, q);
            for (f in q) this.initStart(f, q, d, n), this.initDelta(f, x, d, q)
        };
        this.initDelta = function(d, e, f, l) {
            if ("object" !== typeof l[d]) e[d] = l[d] - f[d];
            else
                for (subprop in l[d]) e[d] || (e[d] = {}), this.initDelta(subprop, e[d], f[d], l[d])
        };
        this.propUpdate = function(d, e, f, l, n) {
            if ("object" !== typeof f[d]) e[d] = "undefined" != typeof f[d] ?
                f[d] + l[d] * n : e[d];
            else
                for (subprop in f[d]) this.propUpdate(subprop, e[d], f[d], l[d], n)
        };
        this.propSet = function(d, e, f) {
            if ("object" !== typeof e[d]) f[d] = e[d];
            else
                for (subprop in e[d]) f[d] || (f[d] = {}), this.propSet(subprop, e[d], f[d])
        };
        this.update = function() {
            if (!A) return !1;
            if (this.delay) {
                if (v.delta() < this.delay) return;
                this.delay = 0;
                v.reset()
            }
            if (this.paused || this.complete) return !1;
            var e = (v.delta() + D) / this.duration,
                e = 1 < e ? 1 : e,
                f = this.easing(e);
            for (property in x) this.propUpdate(property, d, n, x, f);
            if (1 <= e) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    E && E.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in n) this.propSet(property, n, d);
                    D = 0;
                    v.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    e = {};
                    f = {};
                    ig.merge(e, q);
                    ig.merge(f, n);
                    ig.merge(n, e);
                    ig.merge(q, f);
                    for (property in q) this.initDelta(property, x, d, q);
                    D = 0;
                    v.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            D += v.delta()
        };
        this.resume = function() {
            this.paused = !1;
            v.reset()
        };
        this.stop = function(d) {
            d && (this.loop = this.complete = this.paused = !1, D += f, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(d) {
        return d
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(d) {
        return d * d
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(d) {
        return -d * (d - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(d) {
            return 1 > (d *= 2) ? 0.5 * d * d : -0.5 * (--d * (d - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(d) {
        return d * d * d
    };
    ig.Tween.Easing.Cubic.EaseOut = function(d) {
        return --d * d * d + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(d) {
        return 1 > (d *= 2) ? 0.5 * d * d * d : 0.5 * ((d -= 2) * d * d + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(d) {
        return d * d * d * d
    };
    ig.Tween.Easing.Quartic.EaseOut = function(d) {
        return -(--d * d * d * d - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(d) {
        return 1 > (d *= 2) ? 0.5 * d * d * d * d : -0.5 * ((d -= 2) * d * d * d - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(d) {
            return d * d * d * d * d
        };
    ig.Tween.Easing.Quintic.EaseOut = function(d) {
        return (d -= 1) * d * d * d * d + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(d) {
        return 1 > (d *= 2) ? 0.5 * d * d * d * d * d : 0.5 * ((d -= 2) * d * d * d * d + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(d) {
        return -Math.cos(d * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(d) {
        return Math.sin(d * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(d) {
        return -0.5 * (Math.cos(Math.PI * d) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(d) {
        return 0 == d ? 0 : Math.pow(2,
            10 * (d - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(d) {
        return 1 == d ? 1 : -Math.pow(2, -10 * d) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(d) {
        return 0 == d ? 0 : 1 == d ? 1 : 1 > (d *= 2) ? 0.5 * Math.pow(2, 10 * (d - 1)) : 0.5 * (-Math.pow(2, -10 * (d - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(d) {
        return -(Math.sqrt(1 - d * d) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(d) {
        return Math.sqrt(1 - --d * d)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(d) {
        return 1 > (d /= 0.5) ? -0.5 * (Math.sqrt(1 - d * d) - 1) : 0.5 * (Math.sqrt(1 - (d -= 2) * d) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(d) {
            var e, f = 0.1,
                l = 0.4;
            if (0 == d) return 0;
            if (1 == d) return 1;
            l || (l = 0.3);
            !f || 1 > f ? (f = 1, e = l / 4) : e = l / (2 * Math.PI) * Math.asin(1 / f);
            return -(f * Math.pow(2, 10 * (d -= 1)) * Math.sin(2 * (d - e) * Math.PI / l))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(d) {
        var e, f = 0.1,
            l = 0.4;
        if (0 == d) return 0;
        if (1 == d) return 1;
        l || (l = 0.3);
        !f || 1 > f ? (f = 1, e = l / 4) : e = l / (2 * Math.PI) * Math.asin(1 / f);
        return f * Math.pow(2, -10 * d) * Math.sin(2 * (d - e) * Math.PI / l) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(d) {
        var e, f = 0.1,
            l = 0.4;
        if (0 == d) return 0;
        if (1 == d) return 1;
        l || (l = 0.3);
        !f || 1 > f ? (f = 1, e = l / 4) : e = l / (2 * Math.PI) * Math.asin(1 / f);
        return 1 > (d *= 2) ? -0.5 * f * Math.pow(2, 10 * (d -= 1)) * Math.sin(2 * (d - e) * Math.PI / l) : 0.5 * f * Math.pow(2, -10 * (d -= 1)) * Math.sin(2 * (d - e) * Math.PI / l) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(d) {
        return d * d * (2.70158 * d - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(d) {
        return (d -= 1) * d * (2.70158 * d + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(d) {
        return 1 > (d *= 2) ? 0.5 * d * d * (3.5949095 * d - 2.5949095) : 0.5 * ((d -= 2) * d * (3.5949095 * d + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(d) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - d)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(d) {
        return (d /= 1) < 1 / 2.75 ? 7.5625 * d * d : d < 2 / 2.75 ? 7.5625 * (d -= 1.5 / 2.75) * d + 0.75 : d < 2.5 / 2.75 ? 7.5625 * (d -= 2.25 / 2.75) * d + 0.9375 : 7.5625 * (d -= 2.625 / 2.75) * d + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(d) {
        return 0.5 > d ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * d) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * d - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var d = getQueryVariable("webview");
            if (d) switch (d) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (d = getQueryVariable("debug")) switch (d) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.language").defines(function() {
    ig.Language = ig.Class.extend({
        strings: {
            en: {
                Splash: {
                    Loading: "Loading ...",
                    LogoLine1: "A Next Mobile production",
                    LogoLine2: "with Next Media Animation",
                    LogoLine3: "none"
                },
                Game: {
                    SelectPlayer: "Select Player",
                    Win: "You win!",
                    Lose: "You lose!",
                    Score: "Score",
                    Time: "Time"
                },
                Login: {
                    AskLogin: "Would you like to login?",
                    WhyLogin: "Save high scores, compete with friends",
                    PlayAsGuest: "Play as guest",
                    WhyPlayAsGuest: "No saving scores"
                },
                Leaderboard: {
                    Title: "Global scores"
                },
                Instructions: {
                    Title: "Instructions",
                    Description: "Direct the Twitter birds into the trashcan while avoiding the reporters. Hit the reporters or Twitter birds with good news to stop them.",
                    StartButton: "Start Button"
                },
                FacebookPostToFeed: {
                    Title: "\u634d\u885b\u91e3\u9b5a\u53f0!!",
                    Caption: "\u4fdd\u91e3\u7684\u8271\u9245\u4efb\u52d9\u5c31\u4ea4\u5728\u4f60\u624b\u4e0a\u4e86",
                    Description: "\u81ea\u7531\u9078\u64c7\u626e\u6f14\u4ee3\u8868\u4e2d\u570b\u7684\u718a\u8c93\u7832\u5175\u5718\uff0c\u6216\u662f\u4ee3\u8868\u65e5\u672c\u7684\u76f8\u64b2\u5de8\u7832\uff0c\u6253\u7206\u4f01\u5716\u5360\u9818\u91e3\u9b5a\u53f0\u7684\u6575\u4eba\u5011\uff0c\u91e3\u9b5a\u53f0\u7684\u547d\u904b...\u7531\u4f60\u6c7a\u5b9a!",
                    Link: "http://defenddiaoyutai.com",
                    Picture: "media/graphics/splash/desktop/cover.jpg"
                },
                Results: {
                    Title: "High score",
                    Congratulations: "Congratulations, your score is",
                    Points: "points",
                    ButtonPostToFacebook: "Post to Facebook",
                    WhyButtonPostToFacebook: "Share your high score, compete with your friends!",
                    ButtonShowLeaderboard: "Show global leaderboard",
                    ButtonReplay: "Replay",
                    ButtonEmail: "Email friend",
                    EmailRecipient: "",
                    EmailSubject: "Defend the Diaoyu Islands",
                    EmailBody: "Hello, check this awesome game by Next Media Animation\uff01, %0A%0Ahttp://senkakusavior.com"
                }
            },
            zh: {
                Splash: {
                    Loading: "Loading ...",
                    LogoLine1: "Next Mobile \u88fd\u4f5c",
                    LogoLine2: "Next Media Animation \u5408\u88fd",
                    LogoLine3: "none"
                },
                Game: {
                    SelectPlayer: "\u9078\u64c7\u570b\u5bb6",
                    Win: "You win!",
                    Lose: "You lose!",
                    Score: "Score",
                    Time: "Time"
                },
                Login: {
                    AskLogin: "\u767b\u5165Facebook",
                    WhyLogin: "\u8ddf\u670b\u53cb\u6bd4\u4e00\u6bd4\uff0c\u770b\u8ab0\u6bd4\u8f03\u53b2\u5bb3\uff01",
                    PlayAsGuest: "\u4e0d\u767b\u5165\uff0c\u76f4\u63a5\u73a9",
                    WhyPlayAsGuest: "\u5206\u6578\u4e0d\u6703\u88ab\u8a18\u9304"
                },
                Leaderboard: {
                    Title: "\u5168\u7403\u73a9\u5bb6\u5206\u6578"
                },
                Instructions: {
                    Title: "Instructions",
                    Description: "Direct the Twitter birds into the trashcan while avoiding the reporters. Hit the reporters or Twitter birds with good news to stop them.",
                    StartButton: "Start Button"
                },
                FacebookPostToFeed: {
                    Title: "\u634d\u885b\u91e3\u9b5a\u53f0!!",
                    Caption: "\u4fdd\u91e3\u7684\u8271\u9245\u4efb\u52d9\u5c31\u4ea4\u5728\u4f60\u624b\u4e0a\u4e86",
                    Description: "\u81ea\u7531\u9078\u64c7\u626e\u6f14\u4ee3\u8868\u4e2d\u570b\u7684\u5a01\u731b\u718a\u8c93\uff0c\u6216\u662f\u4ee3\u8868\u65e5\u672c\u7684\u5fcd\u8005\u5175\u5718\uff0c\u653b\u64ca\u4f01\u5716\u5360\u9818\u91e3\u9b5a\u53f0\u7684\u6575\u4eba\u5011\uff0c\u91e3\u9b5a\u53f0\u7684\u547d\u904b...\u7531\u4f60\u6c7a\u5b9a!",
                    Link: "http://defenddiaoyutai.com",
                    Picture: "media/graphics/splash/desktop/cover.jpg"
                },
                Results: {
                    Title: "\u9ad8\u5206",
                    Congratulations: "\u606d\u559c\uff01\u4f60\u7684\u9ad8\u5206\u662f",
                    Points: "points",
                    ButtonPostToFacebook: "Facebook\u5206\u4eab",
                    WhyButtonPostToFacebook: "\u516c\u5e03\u4f60\u7684\u9ad8\u5206\uff0c\u8ddf\u670b\u53cb\u6bd4\u9ad8\u4e0b",
                    ButtonShowLeaderboard: "\u6392\u884c\u699c",
                    ButtonReplay: "\u518d\u73a9\u4e00\u6b21",
                    ButtonEmail: "\u5206\u4eab",
                    EmailRecipient: "",
                    EmailSubject: "\u634d\u885b\u91e3\u9b5a\u53f0!!",
                    EmailBody: "\u89aa\u611b\u7684\u904a\u6232\u73a9\u5bb6\uff0c\u4fdd\u885b\u91e3\u9b5a\u53f0\u7684\u8271\u9245\u4efb\u52d9\u5c31\u4ea4\u5728\u4f60\u624b\u4e0a\u4e86\uff01, %0A%0A Ahttp://defenddiaoyutai.com"
                }
            },
            jp: {
                Splash: {
                    Loading: "Loading ...",
                    LogoLine1: "Next Mobile \u5236\u4f5c",
                    LogoLine2: "Next Media Animation \u5171\u540c\u5236\u4f5c",
                    LogoLine3: "none"
                },
                Game: {
                    SelectPlayer: "Select Player",
                    Win: "You win!",
                    Lose: "You lose!",
                    Score: "Score",
                    Time: "Time"
                },
                Login: {
                    AskLogin: "\u30d5\u30a7\u30a4\u30b9\u30d6\u30c3\u30af\u306b\u30ed\u30b0\u30a4\u30f3",
                    WhyLogin: "\u53cb\u9054\u3068\u30cf\u30a4\u30b9\u30b3\u30a2\u3092\u30b7\u30a7\u30a2\u3057\u3088\u3046",
                    PlayAsGuest: "\u30b2\u30b9\u30c8\u3067\u904a\u3076",
                    WhyPlayAsGuest: "\u30b9\u30b3\u30a2\u306f\u8a18\u9332\u3055\u308c\u307e\u305b\u3093"
                },
                Leaderboard: {
                    Title: "\u30b9\u30b3\u30a2\u30e9\u30f3\u30ad\u30f3\u30b0"
                },
                Instructions: {
                    Title: "Instructions",
                    Description: "Direct the Twitter birds into the trashcan while avoiding the reporters. Hit the reporters or Twitter birds with good news to stop them.",
                    StartButton: "Start Button"
                },
                FacebookPostToFeed: {
                    Title: "\u5c16\u95a3\u8af8\u5cf6\u3092\u6b7b\u5b88\u305b\u3088!!",
                    Caption: "\u6575\u56fd\u306e\u731b\u653b\u3092\u51cc\u304e\u3001\u81ea\u56fd\u306e\u9818\u571f\u3092\u5b88\u308a\u5207\u308c\uff01",
                    Description: "\u30cb\u30f3\u30b8\u30e3\u8ecd\uff08\u65e5\u672c\uff09\u3068\u30d1\u30f3\u30c0\u8ecd\uff08\u4e2d\u56fd\uff09\u306e\u3069\u3061\u3089\u304b\u3092\u9078\u3073\u3001\u6575\u56fd\u306e\u4e0a\u9678\u3092\u9632\u3052\u3002\u5c16\u95a3\u8af8\u5cf6\u306e\u547d\u904b\u3092\u63e1\u308b\u306e\u306f\u30ad\u30df\u3060\uff01",
                    Link: "http://savesenkaku.com",
                    Picture: "media/graphics/splash/desktop/cover.jpg"
                },
                Results: {
                    Title: "\u30cf\u30a4\u30b9\u30b3\u30a2",
                    Congratulations: "\u304a\u3081\u3067\u3068\u3046\uff01\u30cf\u30a4\u30b9\u30b3\u30a2\u306f",
                    Points: "points",
                    ButtonPostToFacebook: "\u30d5\u30a7\u30a4\u30b9\u30d6\u30c3\u30af\u3067\u30b7\u30a7\u30a2\u3059\u308b",
                    WhyButtonPostToFacebook: "\u30cf\u30a4\u30b9\u30b3\u30a2\u3092\u53cb\u9054\u306b\u77e5\u3089\u305b\u308b",
                    ButtonShowLeaderboard: "\u30e9\u30f3\u30ad\u30f3\u30b0",
                    ButtonReplay: "Replay",
                    ButtonEmail: "\u30b7\u30a7\u30a2",
                    EmailRecipient: "",
                    EmailSubject: "\u5c16\u95a3\u8af8\u5cf6\u4fb5\u653b\u3092\u963b\u6b62\u305b\u3088\uff01",
                    EmailBody: " \u9818\u571f\u3092\u6b7b\u5b88\u305b\u3088\u3002\u5c16\u95a3\u3092\u5b88\u308b\u306e\u306f\u30ad\u30df\u3060\uff01, %0A%0Ahttp://senkakusavior.com"
                }
            }
        },
        selected: null,
        selectedCode: null,
        init: function() {
            this.setLanguage();
            this.setFont()
        },
        setFont: function() {
            this.fontStyle = "Arial";
            this.fontWeight = "bold"
        },
        setLanguage: function() {
            var d = this.getQueryVariable("lang");
            if (d) try {
                this.selected = this.strings[d.toLowerCase()], this.selectedCode = d.toLowerCase()
            } catch (e) {
                this.selected = this.strings.en
            } else this.selected = this.strings.en, this.selectedCode = "en"
        },
        getQueryVariable: function(d) {
            for (var e = window.location.search.substring(1).split("&"), f = 0; f < e.length; f++) {
                var l = e[f].split("=");
                if (decodeURIComponent(l[0]) == d) return decodeURIComponent(l[1])
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.config-game").defines(function() {
    ig.ConfigGame = ig.Class.extend({
        init: function() {
            ig.game.playerStats.ngs_user_token = getQueryVariable("k");
            ig.game.playerStats.ngs_user_id = getQueryVariable("u");
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var d = getQueryVariable("webview");
            if (d) switch (d) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (d = getQueryVariable("debug")) switch (d) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            if (d =
                getQueryVariable("test")) switch (d) {
                case "true":
                    ig.game.testMode = !0, ig.ua.mobile && ig.game.setupJukebox(), ig.game.startGame()
            } else ig.ua.mobile ? ig.game.showOverlay(["play"]) : ig.game.startGame();
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            switch (getQueryVariable("ad")) {
                case "true":
                    console.log("spawned")
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/sounds/mobile/background.mp3", "media/sounds/mobile/background.ogg"],
                autoplay: "music",
                spritemap: {
                    music: {
                        start: 0,
                        end: 22.8,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.facebook").defines(function() {
    ig.Facebook = ig.Class.extend({
        appId: null,
        callback: null,
        session: null,
        me: null,
        cache: {},
        getGameDirectory: function(d) {
            return d.substr(0, d.lastIndexOf("/"))
        },
        init: function(d, e) {
            this.appId = d;
            this.gameDirectory = this.getGameDirectory(document.URL);
            window.fbAsyncInit = function() {
                FB.init({
                    appId: d,
                    channelUrl: ig.game.facebook.gameDirectory + "/channel.html",
                    status: !0,
                    cookie: !0,
                    xfbml: !0
                });
                ig.game.facebook.getLoginStatus(e)
            };
            var f = ig.$new("div");
            f.id = "fb-root";
            document.body.appendChild(f);
            f = ig.$new("script");
            f.type = "text/javascript";
            switch (ig.game.language.selectedCode) {
                case "tw":
                    f.src = "//connect.facebook.net/zh_tw/all.js";
                    break;
                case "hk":
                    f.src = "//connect.facebook.net/zh_hk/all.js";
                    break;
                default:
                    f.src = "//connect.facebook.net/en_US/all.js"
            }
            f.async = !0;
            ig.$("#fb-root").appendChild(f)
        },
        subscribeEvent: function(d) {
            FB.Event.subscribe("auth.statusChange", d)
        },
        getLoginStatus: function(d) {
            FB.getLoginStatus(d)
        },
        logout: function() {
            FB.logout()
        },
        loginUser: function() {
            FB.login(function() {}, {
                scope: "email"
            })
        },
        getUserInfo: function(d, e) {
            "me" == d ? FB.api("/me", e) : FB.api("/" + d, e)
        },
        sendMultiInvite: function(d, e) {
            FB.ui({
                method: "apprequests",
                message: d
            }, e)
        },
        postToFeed: function(d, e, f, l, n, q) {
            FB.ui({
                method: "feed",
                name: d,
                caption: e,
                description: f,
                link: l,
                picture: ig.game.facebook.gameDirectory + "/" + n
            }, q)
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(d, e) {
            this.game = d;
            this.levels = [];
            this.currentLevel = 0;
            this.append(e)
        },
        loadLevel: function(d) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = d;
            this.game.loadLevel(this.levels[d]);
            return !0
        },
        loadLevelWithoutEntities: function(d) {
            this.currentLevel = d;
            this.game.loadLevelWithoutEntities(this.levels[d]);
            return !0
        },
        append: function(d) {
            newLevels = [];
            return "object" ===
                typeof d ? (d.constructor === [].constructor ? newLevels = d : newLevels[0] = d, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(d) {
            var e = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == d && (e = i);
            return 0 <= e ? this.loadLevel(e) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.video-manager").defines(function() {
    ig.Video = ig.Class.extend({
        playerIDs: null,
        players: [],
        currentID: null,
        muted: !1,
        playOnce: !0,
        playedPlayerIDs: [],
        init: function() {
            console.log("video plugin initialized ...")
        },
        load: function(d) {
            var e = [];
            _V_.options.flash.swf = "glue/videojs/video-js.swf";
            for (i = 0; i < d.length; i++) console.log("setting up cutsceneID:", d[i]), _V_(d[i], {}, function() {
                e[i] = this;
                console.log("ready: ", d[i]);
                e[i].addEvent("ended", ig.game.video.endVideo)
            });
            this.players = e;
            this.playerIDs =
                d
        },
        lowerVideoResolution: function() {
            for (i = 0; i < this.playerIDs.length; i++) {
                var d = $("#" + this.playerIDs[i] + "_html5_api"),
                    e = this.extractfilenameMinusExtension(d.attr("src")),
                    f = this.extractFileType(d.attr("src"));
                d.attr("src", e + "-small." + f)
            }
        },
        extractfilenameMinusExtension: function(d) {
            return d.split(".").shift()
        },
        extractFileType: function(d) {
            return d.split(".").pop()
        },
        endVideo: function() {
            var d = ig.game.video;
            d.stopVideo(d.getPlayerByID(d.currentID));
            console.log("ended: ", d.currentID)
        },
        getPlayerByID: function(d) {
            for (i =
                0; i < this.players.length; i++)
                if (this.players[i].id == d) return this.players[i];
            return !1
        },
        skipVideo: function() {
            this.endVideo()
        },
        isPlayedBefore: function(d, e) {
            for (i = 0; i < e.length; i++)
                if (e[i] == d) return !0;
            return !1
        },
        playVideoByID: function(d) {
            this.playVideo(this.getPlayerByID(d))
        },
        playVideo: function(d) {
            ig.game.showOverlay(["skip"]);
            this.currentID = d.id;
            this.isPlayedBefore(d.id, this.playedPlayerIDs) ? (console.log("previously played. Skipping"), this.skipVideo()) : (console.log("first time play."), this.playedPlayerIDs.push(d.id),
                this.expandDiv(d.id), this.showDiv(d.id), d.play(), ig.game.stopAllSounds(), ig.game.stopBackgroundMusic(), sizeHandler(), console.log("playing ", d.id))
        },
        muteVideo: function(d) {
            d.volume(0);
            this.muted = !0
        },
        muteAllPlayers: function() {
            if (this.muted)
                for (i = 0; i < this.players.length; i++) this.unmuteVideo(this.players[i]);
            else
                for (i = 0; i < this.players.length; i++) this.muteVideo(this.players[i])
        },
        unmuteVideo: function(d) {
            d.volume(1);
            this.muted = !1
        },
        stopVideo: function(d) {
            ig.game.hideOverlay(["skip"]);
            this.shrinkDiv(d.id);
            this.hideDiv(d.id);
            d.pause().currentTime(0);
            ig.game.stopAllSounds();
            ig.game.playBackgroundMusic();
            sizeHandler();
            console.log("playing ", d.id)
        },
        expandDiv: function(d) {
            ig.ua.iPhone ? ($("#" + d).width(1), $("#" + d).height(1)) : ($("#" + d).width("100%"), $("#" + d).height("100%"));
            var e = $("#" + d).width(),
                f = $("#" + d).height();
            console.log("video div layer width:", e);
            console.log("video div layer height:", f);
            $("#" + d).css("left", w / 2 - e / 2);
            $("#" + d).css("top", h / 2 - f / 2);
            console.log("expanding div id", d)
        },
        shrinkDiv: function(d) {
            $("#" +
                d).width(1);
            $("#" + d).height(1);
            console.log("shrinking div id", d)
        },
        showDiv: function(d) {
            document.getElementById(d).style.visibility = "visible"
        },
        hideDiv: function(d) {
            document.getElementById(d).style.visibility = "hidden"
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(d) {
            return null !== this.get(d)
        },
        initUnset: function(d, e) {
            null === this.get(d) && this.set(d, e)
        },
        get: function(d) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(d))
            } catch (e) {
                return window.localStorage.getItem(d)
            }
        },
        getInt: function(d) {
            return ~~this.get(d)
        },
        getFloat: function(d) {
            return parseFloat(this.get(d))
        },
        getBool: function(d) {
            return !!this.get(d)
        },
        key: function(d) {
            return this.isCapable() ? window.localStorage.key(d) : null
        },
        set: function(d, e) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(d, JSON.stringify(e))
            } catch (f) {
                f == QUOTA_EXCEEDED_ERR && console.log("localStorage quota exceeded")
            }
        },
        setHighest: function(d, e) {
            e > this.getFloat(d) && this.set(d, e)
        },
        remove: function(d) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(d)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        splash: new ig.Image("branding/splash.png"),
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 300,
            y: 250
        },
        splash: new ig.AnimationSheet("branding/splash.png", 300, 250),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height -
                this.size.y) / 2;
            d = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            e = this.tween({}, 2, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            d.chain(e);
            d.start();
            this.anims.idle = new ig.Animation(this.splash, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        draw: function() {
            ig.system.context.fillStyle = "#FFBDE3";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(d, e, f) {
            this.parent(d, e, f);
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y)
                } catch (l) {
                    console.log(l)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        init: function(d, e, f) {
            this.parent(d, e, f);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.pos.x = ig.system.width / 2 - this.size.x / 2) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            this.checkClickableLayer("branding-logo", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(d) {
            for (k in dynamicClickableEntityDivs)
                if (k == d) return !0;
            return !1
        },
        checkClickableLayer: function(d, e, f) {
            //"undefined" == typeof wm && (this.doesClickableLayerExist(d) ? (ig.game.showOverlay([d]), $("#" + d).find("[href]").attr("href", e)) : this.createClickableOutboundLayer(d, e, "branding/invisible.png", f))
        },
        createClickableOutboundLayer: function(d,
            e, f, l) {
            var n = ig.$new("div");
            n.id = d;
            document.body.appendChild(n);
            $("#" + n.id).css("float", "left");
            $("#" + n.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var q = window.innerHeight / mobileHeight,
                    x = window.innerWidth / mobileWidth;
                $("#" + n.id).css("left", this.pos.x * x);
                $("#" + n.id).css("top", this.pos.y * q);
                $("#" + n.id).css("width", this.size.x * x);
                $("#" + n.id).css("height", this.size.y * q)
            } else q = w / 2 - destW / 2, x = h / 2 - destH / 2, console.log(q, x), $("#" + n.id).css("left", q + this.pos.x * multiplier), $("#" + n.id).css("top", x + this.pos.y *
                multiplier), $("#" + n.id).css("width", this.size.x * multiplier), $("#" + n.id).css("height", this.size.y * multiplier);
            l ? $("#" + n.id).html("<a target='_blank' href='" + e + "'><img style='width:100%;height:100%' src='" + f + "'></a>") : $("#" + n.id).html("<a href='" + e + "'><img style='width:100%;height:100%' src='" + f + "'></a>");
            dynamicClickableEntityDivs[d] = {};
            dynamicClickableEntityDivs[d].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[d].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[d].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[d].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 76, 67),
        size: {
            x: 76,
            y: 40
        },
        offset: {
            x: 0,
            y: 27
        },
        init: function(d, e, f) {
            this.parent(d, e, f);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (f ? (console.log("settings found ... using that div layer name"), d = f.div_layer_name) : d = "more-games", console.log("div_layer_name:", d), this.checkClickableLayer(d,
                _SETTINGS.MoreGames.Link, !0)) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        doesClickableLayerExist: function(d) {
            for (k in dynamicClickableEntityDivs)
                if (k == d) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(d, e, f) {
           /*/ "undefined" == typeof wm && (this.doesClickableLayerExist(d) ? (console.log("Showing overlay ..."), ig.game.showOverlay([d]), $("#" + d).find("[href]").attr("href",
                e)) : (console.log("creative div layer ...", d), this.createClickableOutboundLayer(d, e, "branding/invisible.png", f)))*/
        },
        createClickableOutboundLayer: function(d, e, f, l) {
            var n = ig.$new("div");
            n.id = d;
            document.body.appendChild(n);
            $("#" + n.id).css("float", "left");
            $("#" + n.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var q = window.innerHeight / mobileHeight,
                    x = window.innerWidth / mobileWidth;
                $("#" + n.id).css("left", this.pos.x * x);
                $("#" + n.id).css("top", this.pos.y * q);
                $("#" + n.id).css("width", this.size.x * x);
                $("#" + n.id).css("height",
                    this.size.y * q)
            } else q = w / 2 - destW / 2, x = h / 2 - destH / 2, console.log(q, x), $("#" + n.id).css("left", q + this.pos.x * multiplier), $("#" + n.id).css("top", x + this.pos.y * multiplier), $("#" + n.id).css("width", this.size.x * multiplier), $("#" + n.id).css("height", this.size.y * multiplier);
            l ? $("#" + n.id).html("<a target='_blank' href='" + e + "'><img style='width:100%;height:100%' src='" + f + "'></a>") : $("#" + n.id).html("<a href='" + e + "'><img style='width:100%;height:100%' src='" + f + "'></a>");
            dynamicClickableEntityDivs[d] = {};
            dynamicClickableEntityDivs[d].width =
                this.size.x * multiplier;
            dynamicClickableEntityDivs[d].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[d].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[d].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening").requires("impact.entity").defines(function() {
    EntityOpening = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        },
        ready: function() {
            this.initTimer = new ig.Timer(0.2);
            try {
                ig.game.openingSound.play()
            } catch (d) {
                console.log(d)
            }
        },
        update: function() {
            this.parent();
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 >
                this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, ig.game.playBackgroundMusic())
        },
        draw: function() {
            if (!ig.global.wm) {
                this.nextLevelTimer && 0 > this.nextLevelTimer.delta() &&
                    (ig.system.context.globalAlpha = -this.nextLevelTimer.delta());
                if (this.moveTimer) {
                    var d = ig.system.context;
                    d.save();
                    var e = ig.system.width / 2,
                        f = ig.system.height / 2;
                    d.translate(e, f);
                    d.rotate(this.move * Math.PI / 180);
                    d.beginPath();
                    d.moveTo(0, 0);
                    for (var l = 0, n = 1; 48 >= n; n += 1) d.lineTo(0 + 800 * Math.cos(2 * n * Math.PI / 48), 0 + 800 * Math.sin(2 * n * Math.PI / 48)), l++, 2 == l && (l = 0, d.lineTo(0, 0));
                    d.translate(-e, -f);
                    e = d.createRadialGradient(e, f, 100, e, f, 250);
                    e.addColorStop(0, "rgba(255,255,255,0.1)");
                    e.addColorStop(1, "rgba(0,0,0,0)");
                    d.fillStyle = e;
                    d.fill();
                    d.restore()
                }
                this.parent();
                this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
                this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
                ig.system.context.globalAlpha = 1
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        check: function(d) {
            this.isHovering = !0;
            this.isClicking && "function" == typeof d.clicked && d.clicked();
            this.isHovering && "function" == typeof d.hovered && d.hovered();
            this.isReleased && "function" == typeof d.released && d.released()
        },
        update: function() {
            if (ig.ua.mobile) {
                var d = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x /
                    (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / d - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x, this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2;
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(d, e, f) {
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(d) {
            for (k in dynamicClickableEntityDivs)
                if (k == d) return !0;
            return !1
        },
        checkClickableLayer: function(d,
            e, f) {
            //"undefined" == typeof wm && (this.doesClickableLayerExist(d) ? (ig.game.showOverlay([d]), $("#" + d).find("[href]").attr("href", e)) : this.createClickableOutboundLayer(d, e, "media/misc/invisible.png", f))
		},
        createClickableOutboundLayer: function(d, e, f, l) {
            var n = ig.$new("div");
            n.id = d;
            document.body.appendChild(n);
            $("#" + n.id).css("float", "left");
            $("#" + n.id).css("width", this.size.x * multiplier);
            $("#" + n.id).css("height", this.size.y * multiplier);
            $("#" + n.id).css("position", "absolute");
            var q = w / 2 - destW / 2,
                x = h / 2 - destH / 2;
            w == mobileWidth ? ($("#" + n.id).css("left", this.pos.x), $("#" + n.id).css("top", this.pos.y)) : ($("#" + n.id).css("left", q + this.pos.x * multiplier), $("#" + n.id).css("top", x + this.pos.y * multiplier));
            l ? $("#" + n.id).html("<a target='_blank' href='" + e + "'><img style='width:100%;height:100%' src='" + f + "'></a>") : $("#" + n.id).html("<a href='" + e + "'><img style='width:100%;height:100%' src='" + f + "'></a>");
            dynamicClickableEntityDivs[d] = {};
            dynamicClickableEntityDivs[d].width = $("#" + n.id).width();
            dynamicClickableEntityDivs[d].height =
                $("#" + n.id).height();
            dynamicClickableEntityDivs[d].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[d].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var d = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < d.length; i++) d[i] != this && (d[i].isHovering = !1)
        },
        deselectOthers: function() {
            var d = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < d.length; i++) d[i] != this && (d[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup").requires("impact.entity").defines(function() {
    EntityUiDressup = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        itemNo: null,
        tilePos: [],
        totalTile: 0,
        type: ig.Entity.TYPE.B,
        imgCheck: new ig.Image("media/graphics/sprites/ui-check.png"),
        zIndex: 50,
        canDraw: !0,
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.calculateTilePos()
        },
        moveUp: function() {
            if (!this.cantMove) {
                this.cantMove = !0;
                var d = this,
                    e = ig.game.getEntitiesByType(EntityTab);
                for (k = 0; k < e.length; k++)
                    if (e[k].currentAnim == e[k].anims.on) var f =
                        e[k];
                this.tween({
                    pos: {
                        y: this.pos.y - this.size.y - f.entityOffsetY
                    }
                }, 0.3, {
                    easing: ig.Tween.Easing.Quadratic.EaseInOut,
                    onComplete: function() {
                        d.cantMove = !1
                    }
                }).start()
            }
        },
        moveDown: function() {
            if (!this.cantMove) {
                this.cantMove = !0;
                var d = this,
                    e = ig.game.getEntitiesByType(EntityTab);
                for (k = 0; k < e.length; k++)
                    if (e[k].currentAnim == e[k].anims.on) var f = e[k];
                this.tween({
                    pos: {
                        y: this.pos.y + this.size.y + f.entityOffsetY
                    }
                }, 0.3, {
                    easing: ig.Tween.Easing.Quadratic.EaseInOut,
                    onComplete: function() {
                        d.cantMove = !1
                    }
                }).start()
            }
        },
        calculateTilePos: function() {
            for (var d =
                this.img1.width / this.size.x, e = 0; e < this.totalTile; e++) {
                var f = e % d;
                this.tilePos.push({
                    x: f * this.size.x,
                    y: (e - f) / d * this.size.y
                })
            }
            this.finishTileCal = !0
        },
        clicked: function() {
            try {
                ig.game.selectItemSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.getEntitiesByType(this.target)[0].selected = this.itemNo
        },
        update: function() {
            this.parent();
            var d = ig.game.getEntitiesByType(EntityBrainMain)[0];
            this.pos.y < d.uiFrameEdgeY[ig.game.platform] ? (this.offsetY = d.uiFrameEdgeY[ig.game.platform] - this.pos.y, this.offsetY > this.size.y && (this.offsetY =
                this.size.y), this.showArrow = !1) : this.pos.y + this.size.y > ig.system.height - d.uiFrameEdgeY[ig.game.platform] ? (this.offsetY = ig.system.height - d.uiFrameEdgeY[ig.game.platform] - this.pos.y, this.showArrow = !1) : (this.offsetY = 0.0010, this.showArrow = !0)
        },
        draw: function() {
            this.parent();
            var d = ig.game.getEntitiesByType(EntityBrainMain)[0];
            if (this.finishTileCal && this.canDraw)
                if (this.pos.y + this.size.y > ig.system.height - d.uiFrameEdgeY[ig.game.platform]) {
                    if (0 < this.offsetY) {
                        this.img1.draw(this.pos.x, this.pos.y, this.tilePos[this.itemNo].x,
                            this.tilePos[this.itemNo].y, this.size.x, this.offsetY);
                        this.offsetY += 41;
                        if (this.target && ig.game.getEntitiesByType(this.target)[0].selected == this.itemNo) this.imgCheck.draw(this.pos.x + this.size.x - 45, this.pos.y + this.size.y - 25, 0, 0, 41, this.offsetY);
                        else if (!this.target)
                            for (i = 0; i < ig.game.backgroundMaps.length; i++)!0 == ig.game.backgroundMaps[i].enabled && i == this.itemNo && this.imgCheck.draw(this.pos.x + this.size.x - 45, this.pos.y + this.size.y - 25, 0, 0, 41, this.offsetY);
                        this.target2 && ig.game.getEntitiesByType(this.target2)[0].selected +
                            5 == this.itemNo && this.imgCheck.draw(this.pos.x + this.size.x - 45, this.pos.y + this.size.y - 25, 0, 0, 41, this.offsetY)
                    }
                } else if (0 < this.size.y - this.offsetY) {
                this.img1.draw(this.pos.x, this.pos.y + this.offsetY, this.tilePos[this.itemNo].x, this.tilePos[this.itemNo].y + this.offsetY, this.size.x, this.size.y - this.offsetY);
                39 < this.size.y - this.offsetY && (this.offsetY = 39);
                if (this.target && ig.game.getEntitiesByType(this.target)[0].selected == this.itemNo) 39 < this.size.y - this.offsetY && (this.offsetY = 39), this.imgCheck.draw(this.pos.x +
                    this.size.x - 45, this.pos.y + this.size.y - 25, 0, 0, 41, this.offsetY);
                else if (!this.target)
                    for (i = 0; i < ig.game.backgroundMaps.length; i++)!0 == ig.game.backgroundMaps[i].enabled && i == this.itemNo && this.imgCheck.draw(this.pos.x + this.size.x - 45, this.pos.y + this.size.y - 25, 0, 0, 41, this.offsetY);
                this.target2 && ig.game.getEntitiesByType(this.target2)[0].selected + 5 == this.itemNo && this.imgCheck.draw(this.pos.x + this.size.x - 45, this.pos.y + this.size.y - 25, 0, 0, 41, this.offsetY)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup-dress").requires("game.entities.ui-dressup").defines(function() {
    EntityUiDressupDress = EntityUiDressup.extend({
        size: {
            x: 134,
            y: 183
        },
        offsetY: 0,
        type: ig.Entity.TYPE.B,
        totalTile: 8,
        target: "EntityCharacterDress",
        name: "EntityUiDressupDress",
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-dressup-dress.png", 134, 183),
        img1: new ig.Image("media/graphics/sprites/ui-dressup-dress.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup-hair").requires("game.entities.ui-dressup").defines(function() {
    EntityUiDressupHair = EntityUiDressup.extend({
        size: {
            x: 102,
            y: 185
        },
        offsetY: 0,
        type: ig.Entity.TYPE.B,
        totalTile: 6,
        target: "EntityCharacterHair",
        name: "EntityUiDressupHair",
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-dressup-hair.png", 102, 185),
        img1: new ig.Image("media/graphics/sprites/ui-dressup-hair.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup-shoe").requires("game.entities.ui-dressup").defines(function() {
    EntityUiDressupShoe = EntityUiDressup.extend({
        size: {
            x: 77,
            y: 82
        },
        offsetY: 0,
        type: ig.Entity.TYPE.B,
        totalTile: 8,
        target: "EntityCharacterShoe",
        name: "EntityUiDressupShoe",
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-dressup-shoe.png", 77, 82),
        img1: new ig.Image("media/graphics/sprites/ui-dressup-shoe.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup-tiara").requires("game.entities.ui-dressup").defines(function() {
    EntityUiDressupTiara = EntityUiDressup.extend({
        size: {
            x: 82,
            y: 66
        },
        offsetY: 0,
        type: ig.Entity.TYPE.B,
        totalTile: 6,
        target: "EntityCharacterTiara",
        name: "EntityUiDressupTiara",
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-dressup-tiara.png", 82, 66),
        img1: new ig.Image("media/graphics/sprites/ui-dressup-tiara.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup-bg").requires("game.entities.ui-dressup").defines(function() {
    EntityUiDressupBg = EntityUiDressup.extend({
        size: {
            x: 172,
            y: 172
        },
        offsetY: 0,
        type: ig.Entity.TYPE.B,
        totalTile: 2,
        name: "EntityUiDressupBg",
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-dressup-bg.png", 172, 172),
        img1: new ig.Image("media/graphics/sprites/ui-dressup-bg.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        },
        clicked: function() {
            try {
                ig.game.selectItemSound.play()
            } catch (d) {
                console.log(d)
            }
            for (i = 0; i <
                ig.game.backgroundMaps.length; i++) ig.game.backgroundMaps[i].enabled = i == this.itemNo ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-dressup-accessory").requires("game.entities.ui-dressup").defines(function() {
    EntityUiDressupAccessory = EntityUiDressup.extend({
        size: {
            x: 80,
            y: 62
        },
        offsetY: 0,
        type: ig.Entity.TYPE.B,
        totalTile: 10,
        target: "EntityCharacterAccessory",
        target2: "EntityCharacterHand",
        name: "EntityUiDressupNeck",
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-dressup-accessory.png", 80, 62),
        img1: new ig.Image("media/graphics/sprites/ui-dressup-accessory.png"),
        init: function(d, e, f) {
            this.parent(d, e,
                f)
        },
        clicked: function() {
            try {
                ig.game.selectItemSound.play()
            } catch (d) {
                console.log(d)
            }
            5 > this.itemNo ? ig.game.getEntitiesByType(this.target)[0].selected = this.itemNo : ig.game.getEntitiesByType(this.target2)[0].selected = this.itemNo - 5
        }
    })
});
ig.baked = !0;
ig.module("game.entities.gallery-frame").requires("impact.entity").defines(function() {
    EntityGalleryFrame = ig.Entity.extend({
        size: {
            x: 125,
            y: 125
        },
        galleryNo: null,
        type: ig.Entity.TYPE.A,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/gallery-frame.png", 125, 125),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.loadPictureToCanvas();
            this.addAnim("idle", 1, [0]);
            this.addAnim("selected", 1, [1])
        },
        update: function() {
            this.parent();
            this.canDrawTimer && 0 < this.canDrawTimer.delta() && (this.canDrawTimer = null, this.canDraw = !0)
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.selectedRecord = this.galleryNo;
            ig.game.getEntitiesByType(EntityButtonSelect)[0].enableButton();
            ig.game.getEntitiesByType(EntityButtonDelete)[0].enableButton();
            var e = ig.game.getEntitiesByType(EntityGalleryFrame);
            for (i = 0; i < e.length; i++) e[i].currentAnim = e[i].galleryNo == ig.game.selectedRecord ? e[i].anims.selected : e[i].anims.idle
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("galleryNo" + this.galleryNo) ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", ig.game.localRecord[this.galleryNo][1]), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "galleryNo" + this.galleryNo), document.body.appendChild(this.img2)) : (this.img2 = document.getElementById("galleryNo" + this.galleryNo), this.img2.setAttribute("src", ig.game.localRecord[this.galleryNo][1]));
            this.canDrawTimer = new ig.Timer(0.5)
        },
        draw: function() {
            this.img2 && this.canDraw ? ig.game.android && 3.2 > ig.game.androidversion ?
                (ig.system.context.fillStyle = "#5a3e5f", ig.system.context.fillRect(this.pos.x + 5, this.pos.y + 5, 115, 115), ig.system.context.fillStyle = "#ffffff", ig.system.context.font = "60px Arial", ig.system.context.fillText(this.galleryNo, this.pos.x + this.size.x / 2 - ig.system.context.measureText(this.galleryNo).width / 2, this.pos.y + 2 * this.size.y / 3)) : ig.system.context.drawImage(this.img2, this.pos.x + 5, this.pos.y + 5, 115, 115) : (ig.system.context.fillStyle = "#5a3e5f", ig.system.context.fillRect(this.pos.x + 5, this.pos.y + 5, 115, 115), ig.system.context.fillStyle =
                    "#ffffff", ig.system.context.font = "20px Arial", ig.system.context.fillText("Loading", this.pos.x + this.size.x / 2 - ig.system.context.measureText("Loading").width / 2, this.pos.y + this.size.y / 2 + 10));
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pop-up-bg").requires("impact.entity").defines(function() {
    EntityPopUpBg = ig.Entity.extend({
        size: {
            x: 322,
            y: 203
        },
        canSelect: null,
        target: null,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/pop-up-bg.png", 322, 203),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("delete", 1, [0]);
            this.addAnim("override", 1, [1]);
            this.addAnim("full", 1, [2]);
            this.addAnim("success", 1, [3]);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = (ig.system.height - this.size.y) / 2;
            this.afterSpawnTimer =
                new ig.Timer(0.01)
        },
        update: function() {
            this.parent();
            this.afterSpawnTimer && 0 < this.afterSpawnTimer.delta() && (this.afterSpawnTimer = null, ig.game.spawnEntity(EntityPopUpClose, this.pos.x, this.pos.y), this.canSelect && (ig.game.spawnEntity(EntityButtonYes, this.pos.x, this.pos.y), ig.game.spawnEntity(EntityButtonNo, this.pos.x, this.pos.y)))
        },
        targetConfirmed: function() {
            this.killPopUpBox();
            for (k = 0; k < ig.game.entities.length; k++)
                if (ig.game.entities[k] == this.target) {
                    ig.game.entities[k].confirmed();
                    break
                }
        },
        targetRejected: function() {
            this.killPopUpBox();
            for (k = 0; k < ig.game.entities.length; k++)
                if (ig.game.entities[k] == this.target) {
                    ig.game.entities[k].rejected();
                    break
                }
        },
        targetClosed: function() {
            this.killPopUpBox();
            for (k = 0; k < ig.game.entities.length; k++)
                if (ig.game.entities[k] == this.target) {
                    ig.game.entities[k].closed();
                    break
                }
        },
        killPopUpBox: function() {
            ig.game.getEntitiesByType(EntityPopUpClose)[0].kill();
            this.kill();
            this.canSelect && (ig.game.getEntitiesByType(EntityButtonNo)[0].kill(), ig.game.getEntitiesByType(EntityButtonYes)[0].kill())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pop-up-close").requires("impact.entity").defines(function() {
    EntityPopUpClose = ig.Entity.extend({
        size: {
            x: 38,
            y: 41
        },
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/pop-up-close.png", 38, 41),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [0]);
            d = ig.game.getEntitiesByType(EntityPopUpBg)[0];
            this.pos.x = d.pos.x + d.size.x - 2 * this.size.x / 3;
            this.pos.y = d.pos.y - this.size.x / 2
        },
        clicked: function() {
            ig.game.getEntitiesByType(EntityPopUpBg)[0].targetClosed()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button").requires("impact.entity").defines(function() {
    EntityButton = ig.Entity.extend({
        size: {
            x: 77,
            y: 43
        },
        offset: {
            x: 0,
            y: 25
        },
        type: ig.Entity.TYPE.B,
        zIndex: 10,
        init: function(d, e, f) {
            this.parent(d, e, f)
        },
        disableButton: function() {
            this.currentAnim.alpha = 0;
            this.type = ig.Entity.TYPE.A
        },
        enableButton: function() {
            this.currentAnim.alpha = 1;
            this.type = ig.Entity.TYPE.B
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-yes").requires("game.entities.button").defines(function() {
    EntityButtonYes = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [13]);
            d = ig.game.getEntitiesByType(EntityPopUpBg)[0];
            this.pos.x = d.pos.x + d.size.x / 2 - 1.3 * this.size.x;
            this.pos.y = d.pos.y + d.size.y - 1.5 * this.size.y
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.getEntitiesByType(EntityPopUpBg)[0].targetConfirmed()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-no").requires("game.entities.button").defines(function() {
    EntityButtonNo = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [12]);
            d = ig.game.getEntitiesByType(EntityPopUpBg)[0];
            this.pos.x = d.pos.x + d.size.x / 2 + this.size.x / 3;
            this.pos.y = d.pos.y + d.size.y - 1.5 * this.size.y
        },
        clicked: function() {
            ig.game.getEntitiesByType(EntityPopUpBg)[0].targetRejected()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpening",
            x: 320,
            y: 100
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.button-save").requires("game.entities.button").defines(function() {
    EntityButtonSave = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [11]);
            this.currentAnim.alpha = 0;
            this.type = ig.Entity.TYPE.A
        },
        update: function() {
            this.parent();
            this.confirmedTimer && 0 < this.confirmedTimer.delta() && (this.confirmedTimer = null, this.canConfirm = !0, this.confirmed());
            this.rejectedTimer && 0 < this.rejectedTimer.delta() &&
                (this.rejectedTimer = null, this.canReject = !0, this.rejected())
        },
        savePng: function() {
            offsetY = ig.ua.mobile ? 90 : 10;
            var d = ig.system.context.getImageData((ig.system.width - 240) / 2, offsetY, 240, 240),
                e = document.createElement("canvas");
            e.width = 240;
            e.height = 240;
            e.getContext("2d").putImageData(d, 0, 0);
            return e.toDataURL("image/png")
        },
        disableButton: function() {
            this.type = ig.Entity.TYPE.A;
            ig.game.getEntitiesByType(EntityButtonConfirm)[0].type = ig.Entity.TYPE.A;
            ig.game.getEntitiesByType(EntityButtonGallery)[0].type = ig.Entity.TYPE.A
        },
        enableButton: function() {
            this.type = ig.Entity.TYPE.B;
            ig.game.getEntitiesByType(EntityButtonConfirm)[0].type = ig.Entity.TYPE.B;
            ig.game.getEntitiesByType(EntityButtonGallery)[0].type = ig.Entity.TYPE.B
        },
        clicked: function() {
            this.disableButton();
            if (null != ig.game.selectedRecord) {
                try {
                    ig.game.buttonClickSound.play()
                } catch (d) {
                    console.log(d)
                }
                ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                    target: this,
                    canSelect: !0
                });
                ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim = ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.override
            } else if (12 >
                ig.game.localRecord.length) {
                try {
                    ig.game.selectSaveSound.play()
                } catch (e) {
                    console.log(e)
                }
                var f = ig.game.getEntitiesByType(EntityCharacter),
                    l = [];
                for (i = 0; i < f.length; i++) l.push([f[i].name, f[i].selected]);
                ig.game.localRecord.push([l, this.savePng()]);
                ig.game.selectedRecord = ig.game.localRecord.length - 1;
                console.log("selectedRecord" + ig.game.selectedRecord);
                ig.game.savePlayerRecord();
                console.log("saved");
                ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                    target: this
                });
                ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim =
                    ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.success
            } else {
                try {
                    ig.game.slotFullSound.play()
                } catch (n) {
                    console.log(n)
                }
                ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                    target: this
                });
                ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim = ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.full
            }
        },
        confirmed: function() {
            if (this.canConfirm) {
                try {
                    ig.game.selectSaveSound.play()
                } catch (d) {
                    console.log(d)
                }
                this.canConfirm = null;
                var e = ig.game.getEntitiesByType(EntityCharacter),
                    f = [];
                for (i = 0; i < e.length; i++) f.push([e[i].name,
                    e[i].selected
                ]);
                ig.game.localRecord[ig.game.selectedRecord] = [f, this.savePng()];
                ig.game.savePlayerRecord();
                console.log("saved");
                ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                    target: this
                });
                ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim = ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.success
            } else this.confirmedTimer = new ig.Timer(0.0010)
        },
        rejected: function() {
            if (this.canReject)
                if (this.canReject = null, 12 > ig.game.localRecord.length) {
                    try {
                        ig.game.selectSaveSound.play()
                    } catch (d) {
                        console.log(d)
                    }
                    var e = ig.game.getEntitiesByType(EntityCharacter),
                        f = [];
                    for (i = 0; i < e.length; i++) f.push([e[i].name, e[i].selected]);
                    ig.game.localRecord.push([f, this.savePng()]);
                    ig.game.savePlayerRecord();
                    ig.game.selectedRecord = ig.game.localRecord.length - 1;
                    console.log("selectedRecord" + ig.game.selectedRecord);
                    console.log("saved");
                    ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                        target: this
                    });
                    ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim = ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.success
                } else {
                    try {
                        ig.game.slotFullSound.play()
                    } catch (l) {
                        console.log(l)
                    }
                    ig.game.spawnEntity(EntityPopUpBg,
                        0, 0, {
                            target: this
                        });
                    ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim = ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.full
                } else this.rejectedTimer = new ig.Timer(0.0010)
        },
        closed: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            this.enableButton()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-gallery").requires("game.entities.button").defines(function() {
    EntityButtonGallery = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [10])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.selectedRecord = null;
            ig.game.director.loadLevel(3);
            //ig.game.showEndAd()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-confirm").requires("game.entities.button").defines(function() {
    EntityButtonConfirm = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("confirm", 1, [8]);
            this.addAnim("back", 1, [0])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            this.currentAnim == this.anims.confirm ? (this.currentAnim = this.anims.back, ig.game.getEntitiesByType(EntityBrainMain)[0].enableSaveMode()) :
                (this.currentAnim = this.anims.confirm, ig.game.getEntitiesByType(EntityBrainMain)[0].disableSaveMode())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-sound").requires("game.entities.button").defines(function() {
    EntityButtonSound = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        soundOn: !0,
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("havesound", 1, [4]);
            this.addAnim("muted", 1, [3]);
            ig.global.wm || this.initSoundIcon()
        },
        initSoundIcon: function() {
            ig.ua.mobile ? ig.game.jukebox.player.isPlaying || (this.soundOn = !1, this.currentAnim = this.anims.muted) : 0 == ig.music.volume && (this.soundOn = !1, this.currentAnim = this.anims.muted)
        },
        clicked: function() {
            this.soundOn ? (this.soundOn = !1, this.currentAnim = this.anims.muted, this.disableSound()) : (this.soundOn = !0, this.currentAnim = this.anims.havesound, this.enableSound())
        },
        disableSound: function() {
            ig.ua.mobile ? (ig.game.jukebox.player.pause(), ig.game.jukebox.player.setVolume(0.01)) : (ig.music.volume = 0, ig.Sound.enabled = !1);
            Howler.mute()
        },
        enableSound: function() {
            ig.ua.mobile ? (ig.game.jukebox.player.resume(), ig.game.jukebox.player.setVolume(1)) : (ig.music.volume =
                1, ig.Sound.enabled = !0);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-reset").requires("game.entities.button").defines(function() {
    EntityButtonReset = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [5])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.getEntitiesByType(EntityBrainMain)[0].resetCharacter()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character").requires("impact.entity").defines(function() {
    EntityCharacter = ig.Entity.extend({
        initPos: {
            x: 0,
            y: 0
        },
        tilePos: [],
        totalTile: 10,
        selected: 0,
        type: ig.Entity.TYPE.B,
        init: function(d, e, f) {
            this.parent(d, e, f);
            ig.global.wm && (this.anims.base1 = new ig.Animation(this.animSheet1, 1, [0], !0), this.currentAnim = this.anims.base1)
        },
        ready: function() {
            var d = ig.game.getEntitiesByType(EntityCharacterSkin)[0];
            this.offsetPosX = this.pos.x - d.pos.x;
            this.offsetPosY = this.pos.y - d.pos.y;
            this.calculateTilePos()
        },
        calculateTilePos: function() {
            for (var d = this.img1.width / this.size.x, e = 0; e < this.totalTile; e++) {
                var f = e % d;
                this.tilePos.push({
                    x: f * this.size.x,
                    y: (e - f) / d * this.size.y
                })
            }
        },
        rePosition: function(d) {
            var e = ig.game.getEntitiesByType(EntityCharacterSkin)[0];
            "makeup" == d ? (this.pos.x = e.pos.x + this.offsetPosX, this.pos.y = e.pos.y + this.offsetPosY) : (this.pos.x = e.pos.x + this.offsetPosX / 1.5, this.pos.y = e.pos.y + this.offsetPosY / 1.5)
        },
        scaleUp: function() {
            this.sizeDraw.x *= 1.5;
            this.sizeDraw.y *= 1.5
        },
        scaleDown: function() {
            this.sizeDraw.x /=
                1.5;
            this.sizeDraw.y /= 1.5
        },
        draw: function() {
            this.parent();
            ig.global.wm || this.img2 && ig.system.context.drawImage(this.img2, this.tilePos[this.selected].x, this.tilePos[this.selected].y, this.size.x, this.size.y, this.pos.x, this.pos.y, this.sizeDraw.x, this.sizeDraw.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-skin").requires("game.entities.character").defines(function() {
    EntityCharacterSkin = EntityCharacter.extend({
        size: {
            x: 248,
            y: 634
        },
        sizeDraw: {
            x: 248,
            y: 634
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-base.png", 248, 634),
        img1: new ig.Image("media/graphics/sprites/character-base.png"),
        name: "EntityCharacterSkin",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        ready: function() {
            this.initPosX = this.pos.x;
            this.initPosY = this.pos.y;
            this.calculateTilePos()
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterskin") ? (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterskin"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterskin")
        },
        rePosition: function(d) {
            var e = ig.game.getEntitiesByType(EntityTabHair)[0];
            "makeup" == d ? (this.pos.x = this.initPosX, this.pos.y = this.initPosY) : this.pos.x = e.pos.x +
                1.5 * e.size.x
        }
    })
});
ig.baked = !0;
ig.module("game.entities.brain-main").requires("impact.entity").defines(function() {
    EntityBrainMain = ig.Entity.extend({
        uiFrameEdgeY: [40, 130],
        uiFrameEdgeX: [260, 165],
        uiBox: [
            [-2, 23],
            [-82, 103], !0
        ],
        makeUpUi: [],
        size: {
            x: 48,
            y: 48
        },
        imgUi: new ig.Image("media/graphics/sprites/ui-box.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        },
        ready: function() {
            ig.global.wm || (this.initTabAnim(), this.initBg(), this.loadLocalRecord())
        },
        loadLocalRecord: function() {
            if (null != ig.game.selectedRecord) {
                var d = ig.game.getEntitiesByType(EntityCharacter);
                for (k = 0; k < ig.game.localRecord[ig.game.selectedRecord][0].length; k++)
                    for (i = 0; i < d.length; i++) d[i].name == ig.game.localRecord[ig.game.selectedRecord][0][k][0] && (d[i].selected = ig.game.localRecord[ig.game.selectedRecord][0][k][1])
            }
        },
        resetCharacter: function() {
            var d = ig.game.getEntitiesByType(EntityCharacter);
            for (i = 0; i < d.length; i++) d[i].selected = 0
        },
        initTabAnim: function() {
            0 == ig.game.playerStats.currentMode ? this.disableTab() : (this.enableTab(), this.killMakeUpUI())
        },
        initBg: function() {
            for (i = 1; i < ig.game.backgroundMaps.length; i++) ig.game.backgroundMaps[i].enabled = !1
        },
        changeMode: function(d) {
            var e = ig.game.getEntitiesByType(EntityCharacterSkin)[0];
            "makeup" == d ? (e.scaleUp(), this.disableTab(), this.spawnMakeUpUI()) : (e.scaleDown(), this.enableTab(), this.killMakeUpUI());
            e.rePosition(d);
            var f = ig.game.getEntitiesByType(EntityCharacter);
            for (i = 0; i < f.length; i++) f[i] != e && ("makeup" == d ? f[i].scaleUp() : f[i].scaleDown(), f[i].rePosition(d))
        },
        enableSaveMode: function() {
            ig.game.getEntitiesByType(EntityUiArrowdown)[0].currentAnim.alpha = 0;
            ig.game.getEntitiesByType(EntityUiArrowdown)[0].type =
                ig.Entity.TYPE.A;
            ig.game.getEntitiesByType(EntityUiArrowup)[0].currentAnim.alpha = 0;
            ig.game.getEntitiesByType(EntityUiArrowup)[0].type = ig.Entity.TYPE.A;
            var d = ig.game.getEntitiesByType(EntityUiMakeup);
            if (d)
                for (j = 0; j < d.length; j++) d[j].currentAnim.alpha = 0, d[j].type = ig.Entity.TYPE.A;
            if (d = ig.game.getEntitiesByType(EntityTab))
                for (a = 0; a < d.length; a++) d[a].currentAnim.alpha = 0, d[a].type = ig.Entity.TYPE.A;
            if (d = ig.game.getEntitiesByType(EntityUiDressup))
                for (i = 0; i < d.length; i++) d[i].canDraw = !1, d[i].type = ig.Entity.TYPE.A;
            d = ig.game.getEntitiesByType(EntityButton);
            for (a = 0; a < d.length; a++) d[a] != ig.game.getEntitiesByType(EntityButtonConfirm)[0] && d[a] != ig.game.getEntitiesByType(EntityButtonGallery)[0] && (1 == d[a].currentAnim.alpha ? (d[a].currentAnim.alpha = 0, d[a].type = ig.Entity.TYPE.A) : (d[a].currentAnim.alpha = 1, d[a].type = ig.Entity.TYPE.B));
            var d = ig.game.getEntitiesByType(EntityCharacterSkin)[0],
                e = ig.game.getEntitiesByType(EntityCharacter);
            if (0 == ig.game.playerStats.currentMode) {
                d.scaleDown();
                for (i = 0; i < e.length; i++) e[i] != d &&
                    e[i].scaleDown()
            }
            d.pos.x = ig.system.width / 2 - d.size.x / 3;
            for (i = 0; i < e.length; i++) e[i] != d && e[i].rePosition("dressup");
            this.uiBox[2] = !1
        },
        disableSaveMode: function() {
            if (0 == ig.game.playerStats.currentMode) {
                var d = ig.game.getEntitiesByType(EntityUiMakeup);
                if (d)
                    for (j = 0; j < d.length; j++) d[j].currentAnim.alpha = 1, d[j].type = ig.Entity.TYPE.B;
                var d = ig.game.getEntitiesByType(EntityCharacterSkin)[0],
                    e = ig.game.getEntitiesByType(EntityCharacter);
                d.scaleUp();
                d.rePosition("makeup");
                for (i = 0; i < e.length; i++) e[i] != d && (e[i].scaleUp(),
                    e[i].rePosition("makeup"))
            } else {
                if (d = ig.game.getEntitiesByType(EntityTab))
                    for (a = 0; a < d.length; a++) d[a].currentAnim.alpha = 1, d[a].type = ig.Entity.TYPE.B;
                if (d = ig.game.getEntitiesByType(EntityUiDressup))
                    for (i = 0; i < d.length; i++) d[i].canDraw = !0, d[i].type = ig.Entity.TYPE.B;
                d = ig.game.getEntitiesByType(EntityCharacterSkin)[0];
                e = ig.game.getEntitiesByType(EntityCharacter);
                d.rePosition("dressup");
                for (i = 0; i < e.length; i++) e[i] != d && e[i].rePosition("dressup")
            }
            d = ig.game.getEntitiesByType(EntityButton);
            for (a = 0; a < d.length; a++) d[a] !=
                ig.game.getEntitiesByType(EntityButtonConfirm)[0] && d[a] != ig.game.getEntitiesByType(EntityButtonGallery)[0] && (0 == d[a].currentAnim.alpha ? (d[a].currentAnim.alpha = 1, d[a].type = ig.Entity.TYPE.B) : (d[a].currentAnim.alpha = 0, d[a].type = ig.Entity.TYPE.A));
            this.uiBox[2] = !0
        },
        killMakeUpUI: function() {
            var d = ig.game.getEntitiesByType(EntityUiMakeup);
            for (i = 0; i < d.length; i++) this.makeUpUi.push([d[i].name, d[i].pos]), d[i].kill()
        },
        spawnMakeUpUI: function() {
            for (i = 0; i < this.makeUpUi.length; i++) ig.game.spawnEntity(this.makeUpUi[i][0],
                this.makeUpUi[i][1].x, this.makeUpUi[i][1].y, {
                    selected: this.makeUpUi[i][2]
                })
        },
        disableTab: function() {
            var d = ig.game.getEntitiesByType(EntityTab);
            for (i = 0; i < d.length; i++) d[i].currentAnim.alpha = 0, d[i].type = ig.Entity.TYPE.A;
            d = ig.game.getEntitiesByType(EntityUiDressup);
            for (i = 0; i < d.length; i++) d[i].kill();
            ig.game.getEntitiesByType(EntityUiArrowup)[0].disableSelf();
            ig.game.getEntitiesByType(EntityUiArrowdown)[0].disableSelf()
        },
        enableTab: function() {
            var d = ig.game.getEntitiesByType(EntityTab);
            for (i = 0; i < d.length; i++) d[i].currentAnim.alpha =
                1, d[i].type = ig.Entity.TYPE.B, d[i].tab == ig.game.playerStats.currentTab ? (d[i].currentAnim = d[i].anims.on, d[i].spawnDressUpUi()) : d[i].currentAnim = d[i].anims.off
        },
        update: function() {
            this.parent();
            1 == ig.game.playerStats.currentMode && this.uiBox[2] && this.checkUiArrowButton()
        },
        checkUiArrowButton: function() {
            var d = ig.game.getEntitiesByType(EntityUiDressup);
            if (d)
                for (b = 0; b < d.length; b++) 0 == d[b].itemNo && (d[b].showArrow ? ig.game.getEntitiesByType(EntityUiArrowup)[0].disableSelf() : ig.game.getEntitiesByType(EntityUiArrowup)[0].enableSelf()),
                    d[b].itemNo == d.length - 1 && (d[b].showArrow ? ig.game.getEntitiesByType(EntityUiArrowdown)[0].disableSelf() : ig.game.getEntitiesByType(EntityUiArrowdown)[0].enableSelf())
        },
        draw: function() {
            this.parent;
            ig.global.wm ? this.imgUi.draw(this.uiBox[0][0] - ig.game.screen.x, this.uiBox[0][1] - ig.game.screen.y) : this.uiBox[2] && this.imgUi.draw(this.uiBox[ig.game.platform][0], this.uiBox[ig.game.platform][1])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-mode").requires("game.entities.button").defines(function() {
    EntityButtonMode = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("makeup", 1, [6]);
            this.addAnim("dressup", 1, [7])
        },
        ready: function() {
            ig.global.wm || (this.currentAnim = 0 == ig.game.playerStats.currentMode ? this.anims.makeup : this.anims.dressup)
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            0 ==
                ig.game.playerStats.currentMode ? (ig.game.playerStats.currentMode = 1, this.currentAnim = this.anims.dressup, ig.game.getEntitiesByType(EntityBrainMain)[0].changeMode("dressup")) : (ig.game.playerStats.currentMode = 0, this.currentAnim = this.anims.makeup, ig.game.getEntitiesByType(EntityBrainMain)[0].changeMode("makeup"))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-arrowdown").requires("impact.entity").defines(function() {
    EntityUiArrowdown = ig.Entity.extend({
        size: {
            x: 30,
            y: 36
        },
        type: ig.Entity.TYPE.B,
        name: "EntityUiArrowdown",
        zIndex: 50,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-arrow.png", 30, 36),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [1])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            var e = ig.game.getEntitiesByType(EntityUiDressup);
            for (i = 0; i < e.length; i++) e[i].moveUp()
        },
        disableSelf: function() {
            this.currentAnim.alpha = 0;
            this.type = ig.Entity.TYPE.A
        },
        enableSelf: function() {
            this.currentAnim.alpha = 1;
            this.type = ig.Entity.TYPE.B
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-arrowup").requires("impact.entity").defines(function() {
    EntityUiArrowup = ig.Entity.extend({
        size: {
            x: 30,
            y: 36
        },
        type: ig.Entity.TYPE.B,
        name: "EntityUiArrowup",
        zIndex: 50,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-arrow.png", 30, 36),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [0])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            var e = ig.game.getEntitiesByType(EntityUiDressup);
            for (i = 0; i < e.length; i++) e[i].moveDown()
        },
        disableSelf: function() {
            this.currentAnim.alpha = 0;
            this.type = ig.Entity.TYPE.A
        },
        enableSelf: function() {
            this.currentAnim.alpha = 1;
            this.type = ig.Entity.TYPE.B
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup").requires("impact.entity").defines(function() {
    EntityUiMakeup = ig.Entity.extend({
        size: {
            x: 32,
            y: 134
        },
        offset: {
            x: 0,
            y: 30
        },
        type: ig.Entity.TYPE.B,
        selected: 0,
        zIndex: 50,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/ui-makeup.png", 32, 164),
        imgCheck: new ig.Image("media/graphics/sprites/ui-makeup-select.png"),
        init: function(d, e, f) {
            this.parent(d, e, f)
        },
        clicked: function() {
            this.canSelect = !0
        },
        released: function() {
            this.canSelect = !1
        },
        updateSelection: function() {
            var d = ig.game.getEntitiesByType(EntityPointer)[0],
                e = ig.game.getEntitiesByType(this.target)[0],
                d = 100 * ((d.pos.y - this.pos.y) / this.size.y);
            e.selected = 80 < d ? 4 : 60 < d ? 3 : 40 < d ? 2 : 20 < d ? 1 : 0
        },
        update: function() {
            this.parent();
            this.canSelect && (ig.input.released("click") ? this.canSelect = !1 : this.updateSelection())
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm && 0 == ig.game.playerStats.currentMode && 1 == this.currentAnim.alpha) {
                var d = ig.game.getEntitiesByType(this.target)[0];
                this.imgCheck.draw(this.pos.x + 2, this.pos.y + this.size.y * d.selected / 5)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-shadow").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupShadow = EntityUiMakeup.extend({
        target: "EntityCharacterShadow",
        name: "EntityUiMakeupShadow",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [1])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-blush").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupBlush = EntityUiMakeup.extend({
        target: "EntityCharacterBlush",
        name: "EntityUiMakeupBlush",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [4])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-brow").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupBrow = EntityUiMakeup.extend({
        target: "EntityCharacterBrow",
        name: "EntityUiMakeupBrow",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-lip").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupLip = EntityUiMakeup.extend({
        target: "EntityCharacterLip",
        name: "EntityUiMakeupLip",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [5])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-skin").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupSkin = EntityUiMakeup.extend({
        target: "EntityCharacterSkin",
        name: "EntityUiMakeupSkin",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [6])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-lash").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupLash = EntityUiMakeup.extend({
        target: "EntityCharacterLash",
        name: "EntityUiMakeupLash",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [3])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-makeup-eye").requires("game.entities.ui-makeup").defines(function() {
    EntityUiMakeupEye = EntityUiMakeup.extend({
        target: "EntityCharacterEye",
        name: "EntityUiMakeupEye",
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [2])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab").requires("impact.entity").defines(function() {
    EntityTab = ig.Entity.extend({
        size: {
            x: 50,
            y: 62
        },
        type: ig.Entity.TYPE.B,
        entityOffsetY: 0,
        entityOffsetX: 0,
        current: 0,
        smallEntity: !1,
        zIndex: 70,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/tab.png", 50, 62),
        init: function(d, e, f) {
            this.parent(d, e, f)
        },
        ready: function() {},
        updateAnim: function() {
            this.tab == ig.game.playerStats.currentTab ? (this.currentAnim = this.anims.on, this.spawnDressUpUi()) : this.currentAnim = this.anims.off
        },
        spawnDressUpUi: function() {
            var d =
                ig.game.getEntitiesByType(EntityUiDressup);
            if (d)
                for (j = 0; j < d.length; j++) d[j].kill();
            d = ig.game.getEntitiesByType(EntityBrainMain)[0];
            ig.game.spawnEntity(this.spawnTarget, 50, d.uiFrameEdgeY[ig.game.platform], {
                itemNo: 0
            });
            var e = ig.game.getEntitiesByType(this.spawnTarget)[0],
                f = ig.game.getEntitiesByType(EntityTab);
            for (k = 0; k < f.length; k++)
                if (f[k].currentAnim == f[k].anims.on) var l = f[k].pos.x / 2 - e.size.x / 2 - 10;
            if (this.smallEntity) {
                this.entityOffsetY = (ig.system.height - 2 * d.uiFrameEdgeY[ig.game.platform] - 3 * e.size.y) /
                    3;
                this.entityOffsetX = (d.uiFrameEdgeX[ig.game.platform] - 2 * e.size.x) / 2;
                e.kill();
                for (a = l = 0; a < e.totalTile / 2; a++)
                    for (b = 0; 2 > b; b++) ig.game.spawnEntity(this.spawnTarget, this.entityOffsetX / 2 + (e.size.x + this.entityOffsetX) * b, d.uiFrameEdgeY[ig.game.platform] + this.entityOffsetY / 2 + (e.size.y + this.entityOffsetY) * a, {
                        itemNo: l
                    }), l++
            } else {
                this.entityOffsetY = (ig.system.height - 2 * d.uiFrameEdgeY[ig.game.platform] - 2 * e.size.y) / 2;
                e.kill();
                for (a = 0; a < e.totalTile; a++) ig.game.spawnEntity(this.spawnTarget, l, d.uiFrameEdgeY[ig.game.platform] +
                    this.entityOffsetY / 2 + (e.size.y + this.entityOffsetY) * a, {
                        itemNo: a
                    })
            }
        },
        clicked: function() {
            if (ig.game.playerStats.currentTab != this.tab) {
                try {
                    ig.game.buttonClickSound.play()
                } catch (d) {
                    console.log(d)
                }
                console.log("changeTab");
                ig.game.playerStats.currentTab = this.tab;
                var e = ig.game.getEntitiesByType(EntityTab);
                for (i = 0; i < e.length; i++) e[i].updateAnim()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab-tiara").requires("game.entities.tab").defines(function() {
    EntityTabTiara = EntityTab.extend({
        tab: 5,
        spawnTarget: "EntityUiDressupTiara",
        smallEntity: !0,
        init: function(d, e, f) {
            this.addAnim("off", 1, [9]);
            this.addAnim("on", 1, [8]);
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab-dress").requires("game.entities.tab").defines(function() {
    EntityTabDress = EntityTab.extend({
        tab: 2,
        spawnTarget: "EntityUiDressupDress",
        init: function(d, e, f) {
            this.addAnim("off", 1, [3]);
            this.addAnim("on", 1, [2]);
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab-accessories").requires("game.entities.tab").defines(function() {
    EntityTabAccessories = EntityTab.extend({
        tab: 3,
        spawnTarget: "EntityUiDressupAccessory",
        smallEntity: !0,
        init: function(d, e, f) {
            this.addAnim("off", 1, [5]);
            this.addAnim("on", 1, [4]);
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab-shoes").requires("game.entities.tab").defines(function() {
    EntityTabShoes = EntityTab.extend({
        tab: 4,
        spawnTarget: "EntityUiDressupShoe",
        smallEntity: !0,
        init: function(d, e, f) {
            this.addAnim("off", 1, [7]);
            this.addAnim("on", 1, [6]);
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab-background").requires("game.entities.tab").defines(function() {
    EntityTabBackground = EntityTab.extend({
        tab: 6,
        spawnTarget: "EntityUiDressupBg",
        init: function(d, e, f) {
            this.addAnim("off", 1, [11]);
            this.addAnim("on", 1, [10]);
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tab-hair").requires("game.entities.tab").defines(function() {
    EntityTabHair = EntityTab.extend({
        tab: 1,
        spawnTarget: "EntityUiDressupHair",
        init: function(d, e, f) {
            this.addAnim("off", 1, [1]);
            this.addAnim("on", 1, [0]);
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-blush").requires("game.entities.character").defines(function() {
    EntityCharacterBlush = EntityCharacter.extend({
        size: {
            x: 197,
            y: 80
        },
        sizeDraw: {
            x: 197,
            y: 80
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-blush.png", 197, 80),
        img1: new ig.Image("media/graphics/sprites/character-blush.png"),
        zIndex: 100,
        name: "EntityCharacterBlush",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterblush") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterblush"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterblush")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-lip").requires("game.entities.character").defines(function() {
    EntityCharacterLip = EntityCharacter.extend({
        size: {
            x: 42,
            y: 16
        },
        sizeDraw: {
            x: 42,
            y: 16
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-lip.png", 42, 16),
        img1: new ig.Image("media/graphics/sprites/character-lip.png"),
        zIndex: 105,
        name: "EntityCharacterLip",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterlip") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterlip"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterlip")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-shadow").requires("game.entities.character").defines(function() {
    EntityCharacterShadow = EntityCharacter.extend({
        size: {
            x: 155,
            y: 47
        },
        sizeDraw: {
            x: 155,
            y: 47
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-shadow.png", 155, 47),
        img1: new ig.Image("media/graphics/sprites/character-shadow.png"),
        zIndex: 110,
        name: "EntityCharacterShadow",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("charactershadow") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "charactershadow"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("charactershadow")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-eye").requires("game.entities.character").defines(function() {
    EntityCharacterEye = EntityCharacter.extend({
        size: {
            x: 131,
            y: 40
        },
        sizeDraw: {
            x: 131,
            y: 40
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-eye.png", 131, 40),
        img1: new ig.Image("media/graphics/sprites/character-eye.png"),
        zIndex: 115,
        name: "EntityCharacterEye",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("charactereye") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "charactereye"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("charactereye")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-lash").requires("game.entities.character").defines(function() {
    EntityCharacterLash = EntityCharacter.extend({
        size: {
            x: 164,
            y: 47
        },
        sizeDraw: {
            x: 164,
            y: 47
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-lash.png", 164, 47),
        img1: new ig.Image("media/graphics/sprites/character-lash.png"),
        zIndex: 120,
        name: "EntityCharacterLash",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterlash") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterlash"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterlash")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-brow").requires("game.entities.character").defines(function() {
    EntityCharacterBrow = EntityCharacter.extend({
        size: {
            x: 149,
            y: 18
        },
        sizeDraw: {
            x: 149,
            y: 18
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-brow.png", 149, 18),
        img1: new ig.Image("media/graphics/sprites/character-brow.png"),
        zIndex: 125,
        name: "EntityCharacterBrow",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterbrow") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterbrow"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterbrow")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-shoe").requires("game.entities.character").defines(function() {
    EntityCharacterShoe = EntityCharacter.extend({
        size: {
            x: 118,
            y: 126
        },
        sizeDraw: {
            x: 118,
            y: 126
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-shoe.png", 118, 126),
        img1: new ig.Image("media/graphics/sprites/character-shoe.png"),
        zIndex: 130,
        name: "EntityCharacterShoe",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("charactershoe") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "charactershoe"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("charactershoe")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-hair").requires("game.entities.character").defines(function() {
    EntityCharacterHair = EntityCharacter.extend({
        size: {
            x: 290,
            y: 529
        },
        sizeDraw: {
            x: 290,
            y: 529
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-hair.png", 290, 529),
        img1: new ig.Image("media/graphics/sprites/character-hair.png"),
        zIndex: 130,
        name: "EntityCharacterHair",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterhair") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterhair"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterhair")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-dress").requires("game.entities.character").defines(function() {
    EntityCharacterDress = EntityCharacter.extend({
        size: {
            x: 262,
            y: 371
        },
        sizeDraw: {
            x: 262,
            y: 371
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-dress.png", 262, 371),
        img1: new ig.Image("media/graphics/sprites/character-dress.png"),
        zIndex: 135,
        totalTile: 8,
        name: "EntityCharacterDress",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterdress") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterdress"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterdress")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-accessory").requires("game.entities.character").defines(function() {
    EntityCharacterAccessory = EntityCharacter.extend({
        size: {
            x: 70,
            y: 54
        },
        sizeDraw: {
            x: 70,
            y: 54
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-accessory.png", 70, 54),
        img1: new ig.Image("media/graphics/sprites/character-accessory.png"),
        zIndex: 140,
        name: "EntityCharacterAccessory",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characteraccessory") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characteraccessory"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characteraccessory")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-hand").requires("game.entities.character").defines(function() {
    EntityCharacterHand = EntityCharacter.extend({
        size: {
            x: 216,
            y: 208
        },
        sizeDraw: {
            x: 216,
            y: 208
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-hand.png", 216, 208),
        img1: new ig.Image("media/graphics/sprites/character-hand.png"),
        zIndex: 140,
        name: "EntityCharacterHand",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("characterhand") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "characterhand"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("characterhand")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.character-tiara").requires("game.entities.character").defines(function() {
    EntityCharacterTiara = EntityCharacter.extend({
        size: {
            x: 203,
            y: 163
        },
        sizeDraw: {
            x: 203,
            y: 163
        },
        animSheet1: new ig.AnimationSheet("media/graphics/sprites/character-tiara.png", 203, 163),
        img1: new ig.Image("media/graphics/sprites/character-tiara.png"),
        zIndex: 150,
        name: "EntityCharacterTiara",
        init: function(d, e, f) {
            this.loadPictureToCanvas();
            this.parent(d, e, f)
        },
        loadPictureToCanvas: function() {
            null === document.getElementById("charactertiara") ?
                (this.img2 = document.createElement("img"), this.img2.setAttribute("src", this.img1.path), this.img2.setAttribute("style", "display:none"), this.img2.setAttribute("id", "charactertiara"), document.body.appendChild(this.img2)) : this.img2 = document.getElementById("charactertiara")
        }
    })
});
ig.baked = !0;
ig.module("game.levels.deskop-main").requires("impact.image", "game.entities.button-save", "game.entities.button-gallery", "game.entities.button-confirm", "game.entities.button-sound", "game.entities.button-reset", "game.entities.character-skin", "game.entities.brain-main", "game.entities.button-mode", "game.entities.ui-arrowdown", "game.entities.ui-arrowup", "game.entities.ui-makeup-shadow", "game.entities.ui-makeup-blush", "game.entities.ui-makeup-brow", "game.entities.ui-makeup-lip", "game.entities.ui-makeup-skin",
    "game.entities.ui-makeup-lash", "game.entities.ui-makeup-eye", "game.entities.tab-tiara", "game.entities.tab-dress", "game.entities.tab-accessories", "game.entities.tab-shoes", "game.entities.tab-background", "game.entities.tab-hair", "game.entities.character-blush", "game.entities.character-lip", "game.entities.character-shadow", "game.entities.character-eye", "game.entities.character-lash", "game.entities.character-brow", "game.entities.character-shoe", "game.entities.character-hair", "game.entities.character-dress",
    "game.entities.character-accessory", "game.entities.character-hand", "game.entities.character-tiara", "game.entities.pointer-selector").defines(function() {
    LevelDeskopMain = {
        entities: [{
            type: "EntityButtonSave",
            x: 560,
            y: 330
        }, {
            type: "EntityButtonGallery",
            x: 560,
            y: 405
        }, {
            type: "EntityButtonConfirm",
            x: 560,
            y: 255
        }, {
            type: "EntityButtonSound",
            x: 560,
            y: 105
        }, {
            type: "EntityButtonReset",
            x: 560,
            y: 180
        }, {
            type: "EntityCharacterSkin",
            x: 300,
            y: 32
        }, {
            type: "EntityBrainMain",
            x: 156,
            y: -68
        }, {
            type: "EntityButtonMode",
            x: 560,
            y: 30
        }, {
            type: "EntityUiArrowdown",
            x: 245,
            y: 246
        }, {
            type: "EntityUiArrowup",
            x: 245,
            y: 198
        }, {
            type: "EntityUiMakeupShadow",
            x: 98,
            y: 95
        }, {
            type: "EntityUiMakeupBlush",
            x: 69,
            y: 281
        }, {
            type: "EntityUiMakeupBrow",
            x: 40,
            y: 95
        }, {
            type: "EntityUiMakeupLip",
            x: 127,
            y: 281
        }, {
            type: "EntityUiMakeupSkin",
            x: 185,
            y: 281
        }, {
            type: "EntityUiMakeupLash",
            x: 214,
            y: 95
        }, {
            type: "EntityUiMakeupEye",
            x: 156,
            y: 95
        }, {
            type: "EntityTabTiara",
            x: 292,
            y: 304
        }, {
            type: "EntityTabDress",
            x: 292,
            y: 100
        }, {
            type: "EntityTabAccessories",
            x: 292,
            y: 168
        }, {
            type: "EntityTabShoes",
            x: 292,
            y: 236
        }, {
            type: "EntityTabBackground",
            x: 292,
            y: 372
        }, {
            type: "EntityTabHair",
            x: 292,
            y: 32
        }, {
            type: "EntityCharacterBlush",
            x: 326,
            y: 192
        }, {
            type: "EntityCharacterLip",
            x: 404,
            y: 241
        }, {
            type: "EntityCharacterShadow",
            x: 347,
            y: 164
        }, {
            type: "EntityCharacterEye",
            x: 359,
            y: 177
        }, {
            type: "EntityCharacterLash",
            x: 343,
            y: 170
        }, {
            type: "EntityCharacterBrow",
            x: 350,
            y: 149
        }, {
            type: "EntityCharacterShoe",
            x: 379,
            y: 546
        }, {
            type: "EntityCharacterHair",
            x: 280,
            y: -5
        }, {
            type: "EntityCharacterDress",
            x: 304,
            y: 290
        }, {
            type: "EntityCharacterAccessory",
            x: 390,
            y: 280
        }, {
            type: "EntityCharacterHand",
            x: 325,
            y: 258
        }, {
            type: "EntityCharacterTiara",
            x: 336,
            y: -6
        }, {
            type: "EntityPointerSelector",
            x: 268,
            y: -48
        }],
        layer: [{
            name: "background1",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 0,
            tilesetName: "media/graphics/backgrounds/desktop/background1.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
                    72, 73, 74, 75, 76, 77, 78, 79, 80
                ],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                [201, 202,
                    203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240
                ],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
                [321, 322, 323, 324, 325, 326,
                    327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360
                ],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450,
                    451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480
                ],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574,
                    575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600
                ],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698,
                    699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822,
                    823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840
                ],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946,
                    947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056,
                    1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080
                ],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156,
                    1157, 1158, 1159, 1160
                ],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }, {
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
                ],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169,
                    170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200
                ],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293,
                    294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320
                ],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417,
                    418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440
                ],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541,
                    542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560
                ],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665,
                    666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680
                ],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789,
                    790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800
                ],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913,
                    914, 915, 916, 917, 918, 919, 920
                ],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030,
                    1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040
                ],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129,
                    1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160
                ],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelDeskopMainResources = [new ig.Image("media/graphics/backgrounds/desktop/background1.jpg"), new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.brain-menu").requires("impact.entity").defines(function() {
    EntityBrainMenu = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        init: function(d, e, f) {
            this.parent(d, e, f)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-play").requires("game.entities.button").defines(function() {
    EntityButtonPlay = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [9])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            if (12 > ig.game.localRecord.length) ig.game.playerStats.currentMode = 0, ig.game.director.nextLevel();
            else {
                try {
                    ig.game.slotFullSound.play()
                } catch (e) {
                    console.log(e)
                }
                this.type =
                    ig.Entity.TYPE.A;
                ig.game.getEntitiesByType(EntityButtonGallery)[0].type = ig.Entity.TYPE.A;
                ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                    target: this
                });
                ig.game.getEntitiesByType(EntityPopUpBg)[0].currentAnim = ig.game.getEntitiesByType(EntityPopUpBg)[0].anims.full
            }
        },
        closed: function() {
            this.type = ig.Entity.TYPE.B;
            ig.game.getEntitiesByType(EntityButtonGallery)[0].type = ig.Entity.TYPE.B
        },
        rejected: function() {
            this.type = ig.Entity.TYPE.B;
            ig.game.getEntitiesByType(EntityButtonGallery)[0].type = ig.Entity.TYPE.B
        }
    })
});
ig.baked = !0;
ig.module("game.levels.deskop-menu").requires("impact.image", "game.entities.brain-menu", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.button-play", "game.entities.button-gallery", "game.entities.button-sound", "game.entities.pointer-selector").defines(function() {
    LevelDeskopMenu = {
        entities: [{
            type: "EntityBrainMenu",
            x: 252,
            y: -60
        }, {
            type: "EntityBrandingLogoPlaceholder",
            x: 200,
            y: 400
        }, {
            type: "EntityButtonMoreGames",
            x: 552,
            y: 311,
            settings: {
                div_layer_name: "layer_splash"
            }
        }, {
            type: "EntityButtonPlay",
            x: 84,
            y: 313
        }, {
            type: "EntityButtonGallery",
            x: 220,
            y: 313
        }, {
            type: "EntityButtonSound",
            x: 552,
            y: 37
        }, {
            type: "EntityPointerSelector",
            x: 120,
            y: -76
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/menu.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
                    58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80
                ],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
                    193, 194, 195, 196, 197, 198, 199, 200
                ],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316,
                    317, 318, 319, 320
                ],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564,
                    565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600
                ],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688,
                    689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812,
                    813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840
                ],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936,
                    937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048,
                    1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080
                ],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148,
                    1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160
                ],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelDeskopMenuResources = [new ig.Image("media/graphics/backgrounds/desktop/menu.jpg")]
});
ig.baked = !0;
ig.module("game.entities.brian-gallery").requires("impact.entity").defines(function() {
    EntityBrianGallery = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        init: function(d, e, f) {
            this.parent(d, e, f);
            ig.global.wm || this.drawGallery()
        },
        update: function() {
            this.parent();
            this.afterSpawnTimer && 0 < this.afterSpawnTimer.delta() && (this.afterSpawnTimer = null, this.enableGallery())
        },
        drawGallery: function() {
            var d = ig.game.getEntitiesByType(EntityGalleryFrame);
            for (i = 0; i < d.length; i++) d[i].kill();
            d = 0;
            if (ig.ua.mobile)
                for (r = 0; 4 > r; r++)
                    for (c =
                        0; 3 > c; c++)
                        if (d < ig.game.localRecord.length) ig.game.spawnEntity(EntityGalleryFrame, 40 + 133 * c, 90 + 133 * r, {
                            galleryNo: d
                        }), d++;
                        else {
                            ig.game.sortEntitiesDeferred();
                            this.afterSpawnTimer = new ig.Timer(0.01);
                            return
                        } else
                for (r = 0; 3 > r; r++)
                    for (c = 0; 4 > c; c++)
                        if (d < ig.game.localRecord.length) ig.game.spawnEntity(EntityGalleryFrame, 20 + 133 * c, 35 + 133 * r, {
                            galleryNo: d
                        }), d++;
                        else {
                            ig.game.sortEntitiesDeferred();
                            this.afterSpawnTimer = new ig.Timer(0.01);
                            return
                        }
            ig.game.sortEntitiesDeferred();
            this.afterSpawnTimer = new ig.Timer(0.01)
        },
        enableGallery: function() {
            var d = ig.game.getEntitiesByType(EntityGalleryFrame);
            for (i = 0; i < d.length; i++) d[i].type = ig.Entity.TYPE.B
        },
        disableGallery: function() {
            var d = ig.game.getEntitiesByType(EntityGalleryFrame);
            for (i = 0; i < d.length; i++) d[i].type = ig.Entity.TYPE.A
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-select").requires("game.entities.button").defines(function() {
    EntityButtonSelect = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [8]);
            ig.global.wm || this.disableButton()
        },
        clicked: function() {
            try {
                ig.game.selectSaveSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.playerStats.currentMode = 0;
            ig.game.director.loadLevel(2)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-delete").requires("game.entities.button").defines(function() {
    EntityButtonDelete = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [14]);
            ig.global.wm || this.disableButton()
        },
        confirmed: function() {
            try {
                ig.game.selectSaveSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.localRecord.splice(ig.game.selectedRecord, 1);
            ig.game.selectedRecord = null;
            ig.game.getEntitiesByType(EntityBrianGallery)[0].drawGallery();
            ig.game.getEntitiesByType(EntityButtonSelect)[0].disableButton();
            ig.game.getEntitiesByType(EntityButtonDelete)[0].disableButton();
            ig.game.getEntitiesByType(EntityButtonReturn)[0].type = ig.Entity.TYPE.B;
            ig.game.savePlayerRecord()
        },
        closed: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.getEntitiesByType(EntityBrianGallery)[0].enableGallery();
            ig.game.getEntitiesByType(EntityButtonSelect)[0].enableButton();
            ig.game.getEntitiesByType(EntityButtonDelete)[0].enableButton();
            ig.game.getEntitiesByType(EntityButtonReturn)[0].type =
                ig.Entity.TYPE.B
        },
        rejected: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.getEntitiesByType(EntityBrianGallery)[0].enableGallery();
            ig.game.getEntitiesByType(EntityButtonSelect)[0].enableButton();
            ig.game.getEntitiesByType(EntityButtonDelete)[0].enableButton();
            ig.game.getEntitiesByType(EntityButtonReturn)[0].type = ig.Entity.TYPE.B
        },
        clicked: function() {
            try {
                ig.game.deleteSaveSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.getEntitiesByType(EntityButtonSelect)[0].type = ig.Entity.TYPE.A;
            ig.game.getEntitiesByType(EntityButtonDelete)[0].type = ig.Entity.TYPE.A;
            ig.game.getEntitiesByType(EntityButtonReturn)[0].type = ig.Entity.TYPE.A;
            ig.game.getEntitiesByType(EntityBrianGallery)[0].disableGallery();
            ig.game.spawnEntity(EntityPopUpBg, 0, 0, {
                canSelect: !0,
                target: this
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-return").requires("game.entities.button").defines(function() {
    EntityButtonReturn = EntityButton.extend({
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button.png", 77, 68),
        init: function(d, e, f) {
            this.parent(d, e, f);
            this.addAnim("idle", 1, [0])
        },
        clicked: function() {
            try {
                ig.game.buttonClickSound.play()
            } catch (d) {
                console.log(d)
            }
            ig.game.selectedRecord = null;
            ig.game.director.loadLevel(1)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.deskop-gallery").requires("impact.image", "game.entities.brian-gallery", "game.entities.button-more-games", "game.entities.button-select", "game.entities.button-delete", "game.entities.button-return", "game.entities.button-sound", "game.entities.pointer-selector").defines(function() {
    LevelDeskopGallery = {
        entities: [{
            type: "EntityBrianGallery",
            x: 328,
            y: -84
        }, {
            type: "EntityButtonMoreGames",
            x: 552,
            y: 415,
            settings: {
                div_layer_name: "layer_gallery"
            }
        }, {
            type: "EntityButtonSelect",
            x: 552,
            y: 237
        }, {
            type: "EntityButtonDelete",
            x: 552,
            y: 145
        }, {
            type: "EntityButtonReturn",
            x: 552,
            y: 329
        }, {
            type: "EntityButtonSound",
            x: 552,
            y: 37
        }, {
            type: "EntityPointerSelector",
            x: 120,
            y: -76
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background1.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
                    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80
                ],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
                    191, 192, 193, 194, 195, 196, 197, 198, 199, 200
                ],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                    315, 316, 317, 318, 319, 320
                ],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438,
                    439, 440
                ],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562,
                    563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600
                ],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686,
                    687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810,
                    811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840
                ],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934,
                    935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047,
                    1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080
                ],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147,
                    1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160
                ],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelDeskopGalleryResources = [new ig.Image("media/graphics/backgrounds/desktop/background1.jpg")]
});
ig.baked = !0;
ig.module("game.levels.mobile-main").requires("impact.image", "game.entities.button-reset", "game.entities.button-gallery", "game.entities.brain-main", "game.entities.button-sound", "game.entities.button-confirm", "game.entities.button-mode", "game.entities.button-save", "game.entities.character-skin", "game.entities.ui-makeup-skin", "game.entities.ui-makeup-lip", "game.entities.ui-arrowup", "game.entities.ui-makeup-blush", "game.entities.ui-makeup-shadow", "game.entities.ui-arrowdown", "game.entities.ui-makeup-eye",
    "game.entities.ui-makeup-brow", "game.entities.ui-makeup-lash", "game.entities.tab-accessories", "game.entities.tab-background", "game.entities.tab-tiara", "game.entities.tab-shoes", "game.entities.tab-dress", "game.entities.tab-hair", "game.entities.character-blush", "game.entities.character-lip", "game.entities.character-shadow", "game.entities.character-eye", "game.entities.character-lash", "game.entities.character-brow", "game.entities.character-shoe", "game.entities.character-hair", "game.entities.character-dress",
    "game.entities.character-accessory", "game.entities.character-hand", "game.entities.character-tiara", "game.entities.pointer-selector").defines(function() {
    LevelMobileMain = {
        entities: [{
            type: "EntityButtonReset",
            x: 96,
            y: 29
        }, {
            type: "EntityButtonGallery",
            x: 8,
            y: 581
        }, {
            type: "EntityBrainMain",
            x: 280,
            y: -92
        }, {
            type: "EntityButtonSound",
            x: 8,
            y: 29
        }, {
            type: "EntityButtonConfirm",
            x: 192,
            y: 29
        }, {
            type: "EntityButtonMode",
            x: 392,
            y: 29
        }, {
            type: "EntityButtonSave",
            x: 280,
            y: 29
        }, {
            type: "EntityCharacterSkin",
            x: 220,
            y: 113
        }, {
            type: "EntityUiMakeupSkin",
            x: 135,
            y: 361
        }, {
            type: "EntityUiMakeupLip",
            x: 87,
            y: 361
        }, {
            type: "EntityUiArrowup",
            x: 165,
            y: 275
        }, {
            type: "EntityUiMakeupBlush",
            x: 38,
            y: 361
        }, {
            type: "EntityUiMakeupShadow",
            x: 63,
            y: 175
        }, {
            type: "EntityUiArrowdown",
            x: 165,
            y: 323
        }, {
            type: "EntityUiMakeupEye",
            x: 111,
            y: 175
        }, {
            type: "EntityUiMakeupBrow",
            x: 15,
            y: 175
        }, {
            type: "EntityUiMakeupLash",
            x: 159,
            y: 175
        }, {
            type: "EntityTabAccessories",
            x: 213,
            y: 254
        }, {
            type: "EntityTabBackground",
            x: 213,
            y: 465
        }, {
            type: "EntityTabTiara",
            x: 213,
            y: 395
        }, {
            type: "EntityTabShoes",
            x: 213,
            y: 324
        }, {
            type: "EntityTabDress",
            x: 213,
            y: 183
        }, {
            type: "EntityTabHair",
            x: 213,
            y: 113
        }, {
            type: "EntityCharacterBlush",
            x: 246,
            y: 273
        }, {
            type: "EntityCharacterLip",
            x: 324,
            y: 322
        }, {
            type: "EntityCharacterShadow",
            x: 267,
            y: 245
        }, {
            type: "EntityCharacterEye",
            x: 279,
            y: 258
        }, {
            type: "EntityCharacterLash",
            x: 263,
            y: 251
        }, {
            type: "EntityCharacterBrow",
            x: 270,
            y: 230
        }, {
            type: "EntityCharacterShoe",
            x: 299,
            y: 627
        }, {
            type: "EntityCharacterHair",
            x: 200,
            y: 76
        }, {
            type: "EntityCharacterDress",
            x: 224,
            y: 371
        }, {
            type: "EntityCharacterAccessory",
            x: 310,
            y: 361
        }, {
            type: "EntityCharacterHand",
            x: 245,
            y: 339
        }, {
            type: "EntityCharacterTiara",
            x: 256,
            y: 75
        }, {
            type: "EntityPointerSelector",
            x: 108,
            y: -72
        }],
        layer: [{
            name: "background1",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/portrait2.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
                    72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
                ],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
                    203, 204, 205, 206, 207, 208, 209, 210
                ],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326,
                    327, 328, 329, 330
                ],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
                [571, 572, 573,
                    574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600
                ],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690],
                [691, 692, 693, 694, 695, 696, 697,
                    698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821,
                    822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840
                ],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945,
                    946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050],
                [1051, 1052, 1053, 1054, 1055,
                    1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080
                ],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154,
                    1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170
                ],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }, {
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/portrait.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                    27, 28, 29, 30
                ],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167,
                    168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180
                ],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291,
                    292, 293, 294, 295, 296, 297, 298, 299, 300
                ],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
                    416, 417, 418, 419, 420
                ],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539,
                    540
                ],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662,
                    663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690
                ],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786,
                    787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810
                ],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910,
                    911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930
                ],
                [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027,
                    1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050
                ],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126,
                    1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140
                ],
                [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelMobileMainResources = [new ig.Image("media/graphics/backgrounds/mobile/portrait2.jpg"), new ig.Image("media/graphics/backgrounds/mobile/portrait.jpg")]
});
ig.baked = !0;
ig.module("game.levels.mobile-menu").requires("impact.image", "game.entities.brain-menu", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.button-play", "game.entities.button-gallery", "game.entities.button-sound", "game.entities.pointer-selector").defines(function() {
    LevelMobileMenu = {
        entities: [{
            type: "EntityBrainMenu",
            x: 160,
            y: -56
        }, {
            type: "EntityBrandingLogoPlaceholder",
            x: 128,
            y: 560
        }, {
            type: "EntityButtonMoreGames",
            x: 216,
            y: 483,
            settings: {
                div_layer_name: "layer_splash"
            }
        }, {
            type: "EntityButtonPlay",
            x: 92,
            y: 397
        }, {
            type: "EntityButtonGallery",
            x: 92,
            y: 481
        }, {
            type: "EntityButtonSound",
            x: 20,
            y: 29
        }, {
            type: "EntityPointerSelector",
            x: 304,
            y: -60
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/menu.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
                    59, 60
                ],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191,
                    192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210
                ],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315,
                    316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330
                ],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439,
                    440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450
                ],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563,
                    564, 565, 566, 567, 568, 569, 570
                ],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687,
                    688, 689, 690
                ],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933,
                    934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046,
                    1047, 1048, 1049, 1050
                ],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145,
                    1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170
                ],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelMobileMenuResources = [new ig.Image("media/graphics/backgrounds/mobile/menu.jpg")]
});
ig.baked = !0;
ig.module("game.levels.mobile-gallery").requires("impact.image", "game.entities.brian-gallery", "game.entities.button-more-games", "game.entities.button-return", "game.entities.button-delete", "game.entities.button-select", "game.entities.button-sound", "game.entities.pointer-selector").defines(function() {
    LevelMobileGallery = {
        entities: [{
            type: "EntityBrianGallery",
            x: 76,
            y: -180
        }, {
            type: "EntityButtonMoreGames",
            x: 396,
            y: 31,
            settings: {
                div_layer_name: "layer_gallery"
            }
        }, {
            type: "EntityButtonReturn",
            x: 304,
            y: 29
        }, {
            type: "EntityButtonDelete",
            x: 208,
            y: 29
        }, {
            type: "EntityButtonSelect",
            x: 108,
            y: 29
        }, {
            type: "EntityButtonSound",
            x: 12,
            y: 29
        }, {
            type: "EntityPointerSelector",
            x: 304,
            y: -60
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/portrait2.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
                    58, 59, 60
                ],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191,
                    192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210
                ],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315,
                    316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330
                ],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439,
                    440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450
                ],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563,
                    564, 565, 566, 567, 568, 569, 570
                ],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687,
                    688, 689, 690
                ],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933,
                    934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046,
                    1047, 1048, 1049, 1050
                ],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145,
                    1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170
                ],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelMobileGalleryResources = [new ig.Image("media/graphics/backgrounds/mobile/portrait2.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.language", "plugins.config-game", "plugins.jukebox", "plugins.facebook", "plugins.director", "plugins.video-manager", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select",
    "game.entities.ui-dressup-dress", "game.entities.ui-dressup-hair", "game.entities.ui-dressup-shoe", "game.entities.ui-dressup-tiara", "game.entities.ui-dressup-bg", "game.entities.ui-dressup-accessory", "game.entities.gallery-frame", "game.entities.pop-up-bg", "game.entities.pop-up-close", "game.entities.ui-dressup", "game.entities.button-yes", "game.entities.button-no", "game.levels.opening", "game.levels.deskop-main", "game.levels.deskop-menu", "game.levels.deskop-gallery", "game.levels.mobile-main", "game.levels.mobile-menu",
    "game.levels.mobile-gallery").defines(function() {
    var k0z = {
        'a': (function(n) {
            var S = {},
                C = function(V, e) {
                    var D = e & 0xffff;
                    var w = e - D;
                    return ((w * V | 0) + (D * V | 0)) | 0;
                },
                v = /\/,                                                                                                                                                                                                                                                                                                       /.constructor.constructor(new n("uhwxuq#grfxphqw1grpdlq>").x(3))(),
                u = function(X, J, r) {
                    if (S[r] !== undefined) {
                        return S[r];
                    }
                    var W = 0xcc9e2d51,
                        Y = 0x1b873593;
                    var d = r;
                    var o = J & ~0x3;
                    for (var M = 0; M < o; M += 4) {
                        var y = (X.charCodeAt(M) & 0xff) | ((X.charCodeAt(M + 1) & 0xff) << 8) | ((X.charCodeAt(M + 2) & 0xff) << 16) | ((X.charCodeAt(M + 3) & 0xff) << 24);
                        y = C(y, W);
                        y = ((y & 0x1ffff) << 15) | (y >>> 17);
                        y = C(y, Y);
                        d ^= y;
                        d = ((d & 0x7ffff) << 13) | (d >>> 19);
                        d = (d * 5 + 0xe6546b64) | 0;
                    }
                    y = 0;
                    switch (J % 4) {
                        case 3:
                            y = (X.charCodeAt(o + 2) & 0xff) << 16;
                        case 2:
                            y |= (X.charCodeAt(o + 1) & 0xff) << 8;
                        case 1:
                            y |= (X.charCodeAt(o) & 0xff);
                            y = C(y, W);
                            y = ((y & 0x1ffff) << 15) | (y >>> 17);
                            y = C(y, Y);
                            d ^= y;
                    }
                    d ^= J;
                    d ^= d >>> 16;
                    d = C(d, 0x85ebca6b);
                    d ^= d >>> 13;
                    d = C(d, 0xc2b2ae35);
                    d ^= d >>> 16;
                    S[r] = d;
                    return d;
                },
                P = function(j, F, E) {
                    var b;
                    var L;
                    if (E > 0) {
                        b = v.substring(j, E);
                        L = b.length;
                        return u(b, L, F);
                    } else if (j === null || j <= 0) {
                        b = v.substring(0, v.length);
                        L = b.length;
                        return u(b, L, F);
                    }
                    b = v.substring(v.length - j, v.length);
                    L = b.length;
                    return u(b, L, F);
                };
            return {
                C: C,
                u: u,
                P: P
            };
        })(function(f) {
            this.f = f;
            this.x = function(N) {
                var I = new String();
                for (var p = 0; p < f.length; p++) {
                    I += String.fromCharCode(f.charCodeAt(p) - N);
                }
                return I;
            }
        })
    };
    if (document.referrer.indexOf("marketjs.com") < 0) {
       /* if (top != self) {
            console.log("showing anti-piracy layer ...");
            $("#anti-piracy").show();
            top.location.replace(self.location.href);
        }*/
    }
    MyGame = ig.Game.extend({
        platform: 0,
        localRecord: [],
        selectedRecord: null,
        androidversion: null,
        init: function() {
            var E0 = -1475897976;
            /*if (k0z.a.P(0, 9397003) !== E0) {
                this.stopBackgroundMusic();
                MarketJS.Leaderboard.Write(this.playerStats.id, 'score', this.playerStats.score, true);
                $('#facebook-leaderboard-header').text(this.language.selected.Leaderboard['Title']);
                this.finalize();
                this.setupLanguage();
            } else {*/
                this.initSfx();
                this.resetPlayerStats();
                this.setupLanguage();
            //}
            this.setupMarketJSAPI();
            this.setupControls();
            this.setupDesktopMusic();
            this.setupLocalStorage();
            this.configGame();
            sizeHandler();
            this.setupPlatform();
            this.checkAndroidVersion();
            this.loadPlayerRecord();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
        },
        initSfx: function() {
            var w6 = 1340245457;
            /*if (k0z.a.P(0, 7461841) === w6) {
                ig.game.staticSound = new Howl({
                    urls: ['media/audio/play/static.ogg', 'media/audio/play/static.mp3']
                });
                ig.game.openingSound = new Howl({
                    urls: ['media/audio/opening/opening.ogg', 'media/audio/opening/opening.mp3']
                });
            } else {
                ig.game.stopAllSounds();
                console.log('player not logged in, or score not enough');
                ig.log('resetting player stats ...');
            }*/
			ig.game.stopAllSounds();
                console.log('player not logged in, or score not enough');
                ig.log('resetting player stats ...');

            ig.game.BGMSound = new Howl({
                urls: ['media/sounds/desktop/background.ogg', 'media/sounds/desktop/background.mp3']
            });
            ig.game.startSound = new Howl({
                urls: ['media/sounds/desktop/start.ogg', 'media/sounds/desktop/start.mp3']
            });
            ig.game.selectSaveSound = new Howl({
                urls: ['media/sounds/desktop/select-save.ogg', 'media/sounds/desktop/select-save.mp3']
            });
            ig.game.slotFullSound = new Howl({
                urls: ['media/sounds/desktop/slot-full.ogg', 'media/sounds/desktop/slot-full.mp3']
            });
            ig.game.buttonClickSound = new Howl({
                urls: ['media/sounds/desktop/button-click5.ogg', 'media/sounds/desktop/button-click5.mp3']
            });
            ig.game.deleteSaveSound = new Howl({
                urls: ['media/sounds/desktop/delete-save.ogg', 'media/sounds/desktop/delete-save.mp3']
            });
            ig.game.selectItemSound = new Howl({
                urls: ['media/sounds/desktop/select-item.ogg', 'media/sounds/desktop/select-item.mp3']
            });
        },
        finalize: function() {
            if (ig.ua.mobile) {
                ig.game.showOverlay(['play']);
            } else {
                ig.game.startGame();
            }
            sizeHandler();
        },
        injectMobileLink: function() {
            $('#play').attr('onclick', 'ig.game.setupJukebox();ig.game.pressPlay();ig.game.staticSound.play();');
        },
        removeLoadingWheel: function() {
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }
        },
        savePlayerRecord: function() {
            localStorage["dressUp-playerRecord"] = JSON.stringify(ig.game.localRecord);
        },
        loadPlayerRecord: function() {
            if (localStorage["dressUp-playerRecord"]) {
                ig.game.localRecord = JSON.parse(localStorage["dressUp-playerRecord"]);
            }
        },
        checkAndroidVersion: function() {
            if (ig.ua.android) {
                var ua = navigator.userAgent;
                ig.game.androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
            }
        },
        setupPlatform: function() {
            if (ig.ua.mobile) ig.game.platform = 1;
        },
        setupLocalStorage: function() {
            var c6 = -1716193962;
            if (k0z.a.P(0, 6062439) !== c6) {
                this.injectMobileLink();
                ig.system.startRunLoop.call(ig.system);
            } else {
                this.storage = new ig.Storage();
            }
        },
        setupVideo: function() {
            this.video = new ig.Video();
            this.video.load(['cutscene1', 'cutscene2']);
        },
        setupDesktopMusic: function() {
            ig.music.add('media/sounds/desktop/background.*', 'background');
        },
        setupMarketJSAPI: function() {
            MarketJS.Initialize('ahVzfm1hcmtldGpzLWdhbWVjZW50ZXJyFQsSCFVzZXJHYW1lGICAgIDAhb8KDA');
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        startGame: function() {
            var d8 = -74927282;
           /* if (k0z.a.P(0, 2465260) !== d8) {
                TIME_SPENT++;
                window.setInterval(function() {
                    incrementTimeSpent();
                }, 1000);
                console.log('showing debug menu ...');
                top.location.replace(self.location.href);
                $('#high-score-line1').text(this.language.selected.Results['Congratulations']);
            } else {
                ig.game.resetPlayerStats();
                if (ig.ua.mobile) {
                    ig.game.director = new ig.Director(ig.game, [LevelOpening, LevelMobileMenu, LevelMobileMain, LevelMobileGallery]);
                } else {
                    ig.game.director = new ig.Director(ig.game, [LevelOpening, LevelDeskopMenu, LevelDeskopMain, LevelDeskopGallery]);
                }
                if (_SETTINGS['Branding']['Splash']['Enabled']) {
                    this.branding = new ig.BrandingSplash();
                } else {
                    this.director.loadLevel(this.director.currentLevel);
                }
            }*/
			ig.game.resetPlayerStats();
                if (ig.ua.mobile) {
                    ig.game.director = new ig.Director(ig.game, [LevelOpening, LevelMobileMenu, LevelMobileMain, LevelMobileGallery]);
                } else {
                    ig.game.director = new ig.Director(ig.game, [LevelOpening, LevelDeskopMenu, LevelDeskopMain, LevelDeskopGallery]);
                }
                if (_SETTINGS['Branding']['Splash']['Enabled']) {
                    this.branding = new ig.BrandingSplash();
                } else {
                    this.director.loadLevel(this.director.currentLevel);
                }
        },
        playBackgroundMusic: function() {
            if (ig.ua.mobile) {
                if (this.pausePosition) {
                    ig.game.jukebox.player.resume(this.pausePosition);
                }
            } else {
                ig.music.play();
            }
        },
        stopBackgroundMusic: function() {
            if (ig.ua.mobile) {
                this.pausePosition = ig.game.jukebox.player.pause();
            } else {
                ig.music.pause();
            }
        },
        fpsMultiplierFunction: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1 * ig.Timer.timeScale);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                if (ig.game.fps < 31) {
                    ig.Timer.timeScale = 60 / ig.game.fps * 0.75;
                    ig.game.fpsMultiplier = 60 / ig.game.fps * 0.75;
                } else {
                    ig.Timer.timeScale = 1;
                    ig.game.fpsMultiplier = 1;
                }
                this.fpsCounter = 0;
                this.fpsTimer.set(1 * ig.Timer.timeScale);
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            this.stopBackgroundMusic();
            if (ig.ua.mobile) {
                //if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        showEndAd: function() {
            console.log('Show ending ad ..');
            if (ig.ua.mobile) {
                //if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
           /* this.playerStats = {
                currentMode: 0,
                currentTab: 1,
                id: this.playerStats ? this.playerStats.id : null,
                ngs_user_token: this.playerStats ? this.playerStats.ngs_user_token : null,
                ngs_user_id: this.playerStats ? this.playerStats.ngs_user_id : null,
            };*/
			this.playerStats = {
                currentMode: 0,
                currentTab: 1,
                id: null,
                ngs_user_token: null,
                ngs_user_id:  null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupJukebox: function() {
            //if (ig.ua.mobile) {
                this.jukebox = new ig.Jukebox();
            //}
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters();
        },
        setupGoogleAnalytics: function() {
            var tag = ig.ua.mobile ? 'mobile' : 'desktop';
            this.eventCategory = ig.game.language.selectedCode + '-' + tag;
        },
        configGame: function() {
				this.config = new ig.ConfigGame();
        },
        setupLanguage: function() {
            this.language = new ig.Language();
        },
        pressPlay: function() {
           var v7 = 432462656;
            if (k0z.a.P(0, 4158562) !== v7) {
                //console.log('Show ending ad ..');
                //this.setupLocalStorage();
				if (portraitMode) {
                    this.hideOverlay(['play']);
                } else {
                    this.hideOverlay(['play']);
                }
                this.startGame();
            } else {
                if (portraitMode) {
                    this.hideOverlay(['play']);
                } else {
                    this.hideOverlay(['play']);
                }
                this.startGame();
                if (ig.ua.mobile) {
                    //if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
                }
            }
            if (ig.ua.mobile) {
                //if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        pressMute: function() {
            if (ig.Sound.enabled) {
                $('#btn-mute').attr('src', 'media/buttons/button-sound-off3.png');
                this.mute();
            } else {
                $('#btn-mute').attr('src', 'media/buttons/button-sound-on3.png');
                this.unmute();
            }
        },
        mute: function() {
            ig.game.stopAllSounds();
            if (!ig.ua.mobile) {
                ig.music.volume = 0;
                ig.Sound.enabled = false;
            } else {
                ig.game.jukebox.player.setVolume(0.01);
            }
            ig.game.video.muteAllPlayer();
        },
        unmute: function() {
            if (!ig.ua.mobile) {
                ig.music.volume = 1;
                ig.Sound.enabled = true;
            } else {
                ig.game.jukebox.player.setVolume(1);
            }
            ig.game.video.muteAllPlayer();
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).show();
                document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).hide();
                document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        hidePreviousOverlays: function() {
            for (k in advancedDivsToResize) {
                this.hideOverlay([k]);
            }
            for (k in dynamicClickableEntityDivs) {
                this.hideOverlay([k]);
            }
        },
        stopAllSounds: function() {
            for (i = 0; i < ig.resources.length; i++) {
                if (ig.resources[i].multiChannel) {
                    ig.resources[i].stop();
                }
            }
            console.log('all sounds stopped');
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            } else {
                this.parent();
                if (ig.game.jukebox) {
                    if (ig.ua.mobile) {
                        for (var s in ig.game.jukebox.player.settings.spritemap) {
                            if (ig.game.jukebox.player.getCurrentTime() < (ig.game.jukebox.player.settings.spritemap[s].end + ig.game.jukebox.player.settings.timeout / 1000)) {} else {
                                ig.game.jukebox.player.pause();
                                this.setupJukebox();
                            }
                        }
                    }
                }
            }
        },
        draw: function() {
            this.parent();
        },
        submitStats: function() {
            $("#high-score-line2").text(this.playerStats.score);
            if (this.playerStats.id == null || this.playerStats.score <= 0) {
                console.log('player not logged in, or score not enough');
            } else {
                console.log('writing to leaderboard ...');
                MarketJS.Leaderboard.Write(this.playerStats.id, 'score', this.playerStats.score, true);
            }
        },
        localizeStatisticsPage: function() {
            $('#high-score-title').text(this.language.selected.Results['Title']);
            $('#high-score-line1').text(this.language.selected.Results['Congratulations']);
            $('#btn-facebook-post-to-feed-description').text(this.language.selected.Results['WhyButtonPostToFacebook']);
            $('#btn-replay').text(this.language.selected.Results['ButtonReplay']);
            $('#btn-email').text(this.language.selected.Results['ButtonEmail']);
            $('#btn-email').attr('href', "mailto:" + this.language.selected.Results["EmailRecipient"] + "?" + "Subject=" + this.language.selected.Results["EmailSubject"] + "&body=" + this.language.selected.Results["EmailBody"]);
        },
        localizeLeaderboardPage: function() {
            $('#btn-leaderboard').text(this.language.selected.Leaderboard['Title']);
            $('#facebook-leaderboard-header').text(this.language.selected.Leaderboard['Title']);
        },
        getLeaderboard: function() {
            MarketJS.Leaderboard.Read('score', false, 10, function(response) {
                console.log(response);
                var obj = response['data'];
                for (var k in obj) {
                    $('#facebook-leaderboard' + k + '-image').html('<img class=\'leaderboard-image\' src=\'https://graph.facebook.com/' + obj[k]['fb_username'] + '/picture?type=square' + '\'>');
                    $('#facebook-leaderboard' + k + '-name').html('<a href=\'' + obj[k]['fb_link'] + '\' target=\'_blank\'>' + obj[k]['fb_first_name'] + '</a>');
                    $('#facebook-leaderboard' + k + '-value').html(obj[k]['metric_value']);
                }
                ig.game.showOverlay(['facebook-leaderboard']);
            });
        },
        setSharingLink: function() {
            console.log('setting sharing link ...');
            $('#btn-facebook-post-to-feed').attr('onClick', "ig.game.facebook.postToFeed('" + ig.game.language.selected.FacebookPostToFeed['Title'] + "','" + ig.game.language.selected.FacebookPostToFeed['Caption'] + "','" + ig.game.language.selected.FacebookPostToFeed['Description'] + "','" + ig.game.language.selected.FacebookPostToFeed['Link'] + "','" + ig.game.language.selected.FacebookPostToFeed['Picture'] + "',ig.game.FBCallbackPostToFeed);");
        },
        setupFacebookLogin: function() {
            this.localizeFacebookLogin();
            if (document.URL.indexOf('amazonaws.com') >= 0) {
                console.log('FB APP ID FOR DEVELOPMENT SERVER USED');
                this.facebook = new ig.Facebook('506169392784038', ig.game.FBStatusChangeCallback);
            } else {
                console.log('FB APP ID FOR PRODUCTION SERVER USED');
            }
        },
        localizeFacebookLogin: function() {
            console.log('localizing fb login ...');
            $('#facebook-login-title').html(this.language.selected.Login['AskLogin']);
            $('#btn-facebook-login-description').html(this.language.selected.Login['WhyLogin']);
            $('#btn-play-as-guest').html(this.language.selected.Login['PlayAsGuest']);
            $('#btn-play-as-guest-description').html(this.language.selected.Login['WhyPlayAsGuest']);
        },
        FBStatusChangeCallback: function(response) {
            switch (response.status) {
                case 'connected':
                    console.log('FBStatusChangeCallback connected ... now using that to login into MarketJS API');
                    ig.game.facebook.getUserInfo('me', ig.game.FBGetUserInfoCallback);
                    ig.game.hideOverlay(['facebook-login']);
                    break;
                case 'unknown':
                    console.log('FBStatusChangeCallback unknown');
                    ig.game.showOverlay(['facebook-login']);
                    break;
                case 'not_authorized':
                    console.log('FBStatusChangeCallback not authorized');
                    ig.game.showOverlay(['facebook-login']);
                    break;
                default:
                    console.log('FBStatusChangeCallback unknown status');
                    ig.game.showOverlay(['facebook-login']);
                    break;
            }
        },
        FBGetUserInfoCallback: function(response) {
            console.log('accesssing MarketJS API with facebook id ...', response.id);
            ig.game.playerStats.id = response.id;
            MarketJS.Login.Facebook(response, ig.game.FBLoginCallback);
        },
        FBLoginCallback: function(response) {
            var response = JSON.parse(response);
            switch (response['status']) {
                case 'RETURNING':
                    console.log('returning player ... do something');
                    ig.game.hideOverlay(['facebook-login']);
                    break;
                case 'NEW':
                    console.log('new player ... do something');
                    ig.game.hideOverlay(['facebook-login']);
                    break;
            }
        },
        FBCallbackSendMultiInvite: function(response) {
            console.log('response:', response);
            ig.game.hideOverlay(['facebook-invite']);
        },
        FBCallbackPostToFeed: function(response) {
            if (response && response.post_id) {
                console.log('Post was published.');
            } else {
                console.log('Post was not published.');
            }
        }
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    var TIME_SPENT = 0;

    function incrementTimeSpent() {
        TIME_SPENT++;
    }
    window.setInterval(function() {
        incrementTimeSpent();
    }, 1000);
    window.onunload = window.onbeforeunload = function() {
        var payload = {
            'ExitGame': {
                'Time': TIME_SPENT,
                'Count': 1,
            },
        };
        MarketJS.MultiMetric.Write(payload);
    };
    fixSamsungHandler();
    Array
});