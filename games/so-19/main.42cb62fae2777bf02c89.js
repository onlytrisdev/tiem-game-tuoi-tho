!(function (n) {
    var e = {};
    function t(o) {
        if (e[o]) return e[o].exports;
        var r = (e[o] = { i: o, l: !1, exports: {} });
        return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    (t.m = n),
        (t.c = e),
        (t.d = function (n, e, o) {
            t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o });
        }),
        (t.r = function (n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (t.t = function (n, e) {
            if ((1 & e && (n = t(n)), 8 & e)) return n;
            if (4 & e && "object" == typeof n && n && n.__esModule) return n;
            var o = Object.create(null);
            if ((t.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n))
                for (var r in n)
                    t.d(
                        o,
                        r,
                        function (e) {
                            return n[e];
                        }.bind(null, r)
                    );
            return o;
        }),
        (t.n = function (n) {
            var e =
                n && n.__esModule
                    ? function () {
                          return n.default;
                      }
                    : function () {
                          return n;
                      };
            return t.d(e, "a", e), e;
        }),
        (t.o = function (n, e) {
            return Object.prototype.hasOwnProperty.call(n, e);
        }),
        (t.p = ""),
        t((t.s = 20));
})([
    function (n, e, t) {
        "use strict";
        n.exports = function (n) {
            var e = [];
            return (
                (e.toString = function () {
                    return this.map(function (e) {
                        var t = (function (n, e) {
                            var t = n[1] || "",
                                o = n[3];
                            if (!o) return t;
                            if (e && "function" == typeof btoa) {
                                var r = (function (n) {
                                        var e = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                                            t = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                                        return "/*# ".concat(t, " */");
                                    })(o),
                                    i = o.sources.map(function (n) {
                                        return "/*# sourceURL=".concat(o.sourceRoot).concat(n, " */");
                                    });
                                return [t].concat(i).concat([r]).join("\n");
                            }
                            return [t].join("\n");
                        })(e, n);
                        return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
                    }).join("");
                }),
                (e.i = function (n, t) {
                    "string" == typeof n && (n = [[null, n, ""]]);
                    for (var o = {}, r = 0; r < this.length; r++) {
                        var i = this[r][0];
                        null != i && (o[i] = !0);
                    }
                    for (var a = 0; a < n.length; a++) {
                        var s = n[a];
                        (null != s[0] && o[s[0]]) || (t && !s[2] ? (s[2] = t) : t && (s[2] = "(".concat(s[2], ") and (").concat(t, ")")), e.push(s));
                    }
                }),
                e
            );
        };
    },
    function (n, e) {
        n.exports = {
            "Добавьте чиселок": "Add numbers",
            "Чиселки «19»": "Numbers",
            "by PaperGame": "by PaperGame",
            "Отмена хода (0)": "Undo move (0)",
            "Отмена (0)": "Undo (0)",
            "Добавить чиселок": "Add numbers",
            "Подсказать ход": "Hint",
            "Подсказка": "Hint",
            "Закрыть": "Close",
            "Новая игра": "New Game",
            "Справка": "Help",
        };
    },
    function (n, e, t) {
        "use strict";
        n.exports = function (n, e) {
            return "string" != typeof (n = n.__esModule ? n.default : n) ? n : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), /["'() \t\n]/.test(n) || e ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n);
        };
    },
    function (n, e, t) {
        var o = t(4),
            r = t(5);
        "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[n.i, r, ""]]), o(r, { insert: "head", singleton: !1 }), (n.exports = r.locals || {});
    },
    function (n, e, t) {
        "use strict";
        var o,
            r,
            i =
                ((r = {}),
                function (n) {
                    if (void 0 === r[n]) {
                        var e = document.querySelector(n);
                        if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                            try {
                                e = e.contentDocument.head;
                            } catch (n) {
                                e = null;
                            }
                        r[n] = e;
                    }
                    return r[n];
                }),
            a = [];
        function s(n) {
            for (var e = -1, t = 0; t < a.length; t++)
                if (a[t].identifier === n) {
                    e = t;
                    break;
                }
            return e;
        }
        function u(n, e) {
            for (var t = {}, o = [], r = 0; r < n.length; r++) {
                var i = n[r],
                    u = e.base ? i[0] + e.base : i[0],
                    c = t[u] || 0,
                    l = "".concat(u, " ").concat(c);
                t[u] = c + 1;
                var d = s(l),
                    f = { css: i[1], media: i[2], sourceMap: i[3] };
                -1 !== d ? (a[d].references++, a[d].updater(f)) : a.push({ identifier: l, updater: b(f, e), references: 1 }), o.push(l);
            }
            return o;
        }
        function c(n) {
            var e = document.createElement("style"),
                o = n.attributes || {};
            if (void 0 === o.nonce) {
                var r = t.nc;
                r && (o.nonce = r);
            }
            if (
                (Object.keys(o).forEach(function (n) {
                    e.setAttribute(n, o[n]);
                }),
                "function" == typeof n.insert)
            )
                n.insert(e);
            else {
                var a = i(n.insert || "head");
                if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(e);
            }
            return e;
        }
        var l,
            d =
                ((l = []),
                function (n, e) {
                    return (l[n] = e), l.filter(Boolean).join("\n");
                });
        function f(n, e, t, o) {
            var r = t ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
            if (n.styleSheet) n.styleSheet.cssText = d(e, r);
            else {
                var i = document.createTextNode(r),
                    a = n.childNodes;
                a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
            }
        }
        var p = null,
            h = 0;
        function b(n, e) {
            var t, o, r;
            if (e.singleton) {
                var i = h++;
                (t = p = p || c(e)), (o = f.bind(null, t, i, !1)), (r = f.bind(null, t, i, !0));
            } else
                (t = c(e)),
                    (o = function (n, e, t) {
                        var o = t.css,
                            r = t.media,
                            i = t.sourceMap;
                        if (
                            (r ? n.setAttribute("media", r) : n.removeAttribute("media"),
                            i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                            n.styleSheet)
                        )
                            n.styleSheet.cssText = o;
                        else {
                            for (; n.firstChild; ) n.removeChild(n.firstChild);
                            n.appendChild(document.createTextNode(o));
                        }
                    }.bind(null, t, e)),
                    (r = function () {
                        var n;
                        null !== (n = t).parentNode && n.parentNode.removeChild(n);
                    });
            return (
                o(n),
                function (e) {
                    if (e) {
                        if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                        o((n = e));
                    } else r();
                }
            );
        }
        n.exports = function (n, e) {
            (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
            var t = u((n = n || []), e);
            return function (n) {
                if (((n = n || []), "[object Array]" === Object.prototype.toString.call(n))) {
                    for (var o = 0; o < t.length; o++) {
                        var r = s(t[o]);
                        a[r].references--;
                    }
                    for (var i = u(n, e), c = 0; c < t.length; c++) {
                        var l = s(t[c]);
                        0 === a[l].references && (a[l].updater(), a.splice(l, 1));
                    }
                    t = i;
                }
            };
        };
    },
    function (n, e, t) {
        (e = n.exports = t(0)(!1)).i(t(6), ""), e.i(t(7), ""), e.i(t(8), ""), e.i(t(14), ""), e.i(t(16), ""), e.i(t(17), "");
        var o = t(2),
            r = o(t(18)),
            i = o(t(19));
        e.push([
            n.i,
            "html, body {\n    height: 100%;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    overflow-x: hidden;\n}\nbody {\n    background: #fffeee;\n}\n.wrapper {\n    background: #fffeee url(" +
                r +
                ") repeat left top;\n    min-height: 100%;\n    padding-bottom: 100px;\n}\n.header {\n    position: relative;\n    height: 100px;\n    background: url(" +
                i +
                ') repeat-x left -5px;\n    font-size: 17px;\n    display: flex;\n    justify-content: space-between;\n}\n.header-title {\n    padding: 10px;\n    color: #333333;\n}\n.header-logo {\n    font-size: 20px;\n    margin-top: 2px;\n    margin-bottom: 5px;\n}\n.header-author {\n    font-size: 14px;\n}\n.app {\n    position: relative;\n    max-width: 800px;\n    margin: 0 auto;\n}\n.numbers {\n    text-align: left;\n    width: 500px;\n    margin: 25px auto 0 auto;\n    -webkit-tap-highlight-color: transparent;\n    color: #333333;\n}\n.win .numbers {\n    text-align: center;\n    font-size: 35px;\n}\n.win .btn {\n    display: none;\n}\n.numbers > div {\n    font-size: 28px;\n    display: inline-block;\n    width: 11.1%;\n    text-align: center;\n    cursor: pointer;\n    padding: 11px 0;\n    position: relative;\n}\n.number {\n    position: relative;\n    z-index: 2;\n}\n.number:after {\n    content: "";\n    position: absolute;\n    left: 1px;\n    top: 1px;\n    right: 1px;\n    bottom: 1px;\n    background: #4078c0;\n    opacity: 0.3;\n    border-width: 2px;\n    z-index: -1;\n    border-radius: 2px;\n}\n.number:hover:after {\n    opacity: 0.4;\n}\n.number_active {\n}\n.number_selected {\n    color: #fffeee;\n}\n.number_selected:after,\n.number_selected:hover:after{\n    opacity: 0.7;\n    background-color: #696;\n}\n.number_disabled {\n    opacity: 0.4;\n    color: #666666;\n    text-decoration: line-through;\n}\n.number_disabled:after,\n.number_disabled:hover:after {\n    opacity: 0.3;\n    background: black;\n}\n.number_removed {\n    transition: opacity ease-out 1s;\n    opacity: 0;\n}\n.number_animated:after {\n    transition: opacity ease-in-out 0.4s;\n    opacity: 0.8;\n    animation-name: numbersAnimation;\n    animation-delay: 0.4s;\n    animation-duration: 0.5s;\n    animation-iteration-count: infinite;\n}\n.number_animated.number_selected:after {\n    animation: none;\n}\n@keyframes numbersAnimation {\n    0% {opacity: 0.8;}\n    50% {opacity: 0.5;}\n    100% {opacity: 0.8;}\n}\n.btn-panel {\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #fffeee;\n    padding: 7px 0 12px 0;\n    z-index: 5;\n    box-shadow: -3px -5px 5px 0 rgba(0,0,0,0.3);\n}\n.btn-w {\n    display: flex;\n    justify-content: space-around;\n    max-width: 600px;\n    margin: 0 auto;\n}\n.numbers-w {\n    margin-bottom: 100px;\n}\n.btn {\n    font-size: 14px;\n    font-family: Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;\n    padding: 12px 15px;\n    outline: none;\n    background: #669966;\n    cursor: pointer;\n    border: none;\n    border-radius: 4px;\n    color: #eeeeee;\n    -webkit-tap-highlight-color: transparent;\n    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);\n}\n.btn:hover {\n    opacity: 0.9;\n}\n.btn:active {\n    opacity: 0.5;\n}\n.help {\n    display: none;\n    font-size: 15px;\n    line-height: 1.5;\n    position: absolute;\n    top: 70px;\n    right: 10px;\n    width: 500px;\n    padding: 10px 0;\n    background: #fffeee;\n    z-index: 10;\n    border-radius: 10px;\n    box-shadow: 0 3px 20px 0 rgba(0,0,0,0.35);\n    margin-bottom: 30px;\n}\n.help:after {\n    content: "";\n    position: absolute;\n    right: 18px;\n    top: -7px;\n    z-index: 11;\n    width: 15px;\n    height: 15px;\n    background: inherit;\n    transform: rotate(45grad);\n}\n.help p {\n    margin: 0;\n    padding: 5px 10px;\n}\n.disable-select {\n    user-select: none;\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n}\n.hint-btn {\n    background-color: #4078c0;\n}\n.tooltip {\n    position: relative;\n}\n.tooltip:after {\n    content: attr(data-tooltip);\n    position: absolute;\n    padding: 5px 10px;\n    border-radius: 4px;\n    background: #000000;\n    color: #ffffff;\n    white-space: nowrap;\n    left: 0;\n    top: -45px;\n    z-index: 5;\n}\n.tooltip:before {\n    content: "";\n    position: absolute;\n    background: #000000;\n    left: auto;\n    right: 60%;\n    top: -25px;\n    width: 10px;\n    height: 10px;\n    transform: rotate(45grad);\n    z-index: 4;\n}\n.btn .short {\n    display: none;\n}\n.shuffle-msg {\n    font-size: 17px;\n    margin: 20px auto 0 auto;\n    line-height: 1.5;\n    max-width: 500px;\n    padding: 0 10px;\n    color: #333333;\n}\n.shuffle-btn {\n    font-size: 17px;\n    padding: 5px 10px;\n    background: none;\n    outline: none;\n    border: none;\n    color: #ffffff;\n    background: #669966;\n    border-radius: 4px;\n    cursor: pointer;\n    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);\n}\n.shuffle-btn:hover {\n    background: #333;\n    color: #fff;\n}\n@media (max-width: 650px) {\n    .numbers {\n        width: 400px;\n    }\n    .numbers > div {\n        padding: 6px 0;\n    }\n    .help {\n        width: 400px;\n    }\n}\n@media (max-width: 550px) {\n    .numbers {\n        width: auto;\n        margin: 70px 10px 0 10px;\n    }\n    .numbers > div {\n        font-size: 20px;\n        padding: 9px 0;\n    }\n    .tooltip:after {\n        left: auto;\n        right: 0;\n    }\n    .tooltip:before {\n        left: auto;\n        right: 25%;\n    }\n    .help {\n        top: -15px;\n    }\n}\n@media (max-width: 500px) {\n    .btn {\n        padding: 10px;\n    }\n    .btn .short {\n        display: inline-block;\n    }\n    .btn .long {\n        display: none;\n    }\n    .help {\n        width: 300px;\n    }\n}\n@media (max-width: 370px) {\n    .numbers > div {\n        padding: 6px 0;\n    }\n}\n@media (max-width: 320px) {\n    .btn {\n        font-size: 13px;\n        padding: 10px 7px;\n    }\n}\n@media (max-width: 200px) {\n    .mute {\n        display: none;\n    }\n}\n',
            "",
        ]);
    },
    function (n, e, t) {
        (n.exports = t(0)(!1)).push([
            n.i,
            "body.alert-show {\n    overflow-y: hidden;\n}\n\n.btn-panel {\n    transition: 0s visibility 0s, opacity 0s linear 0.2s;\n}\n\nbody.alert-show .btn-panel {\n    visibility: hidden;\n    opacity: 0;\n}\n\n.alert-wind {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    background: #eeeeee;\n}\n.alert-wind-body {\n    line-height: 1.5;\n    padding: 0 10px;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    height: calc(100% - 48px);\n}\n\n/* close button */\n\n.alert-wind-okay {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    padding: 15px 0;\n    cursor: pointer;\n    background: #4078c0;\n    color: #fff;\n    box-shadow: 0 -2px 5px 0 rgba(0,0,0,0.35);\n}\n.alert-wind-okay:hover {\n    opacity: 0.9;\n}\n\n/* mask */\n\n.alert-mask {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 9;\n    background: #000000;\n    opacity: 0.7;\n}\n\n.alert-show .alert-wind,\n.alert-show .alert-mask {\n    display: block;\n}\n\n@media (min-width: 450px) {\n    .alert-wind {\n        width: 450px;\n        left: 50%;\n        margin-left: -225px;\n        border-radius: 4px;\n        max-height: 80%;\n        top: 7%;\n    }\n    .alert-wind-okay {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n    }\n}\n",
            "",
        ]);
    },
    function (n, e, t) {
        (n.exports = t(0)(!1)).push([
            n.i,
            ".example {\n    border-collapse: collapse;\n}\n.example td {\n    padding: 5px 12px;\n    border: 1px solid #333333;\n}\n.example-selected {\n    background: #4078c0;\n    color: #ffffff;\n}\n.example-selected {\n    background: #4078c0;\n    color: #ffffff;\n}\n.example-crossed {\n    background: #333333;\n    color: #333333;\n}\n",
            "",
        ]);
    },
    function (n, e, t) {
        e = n.exports = t(0)(!1);
        var o = t(2),
            r = o(t(9)),
            i = o(t(10)),
            a = o(t(11)),
            s = o(t(12)),
            u = o(t(13));
        e.push([
            n.i,
            ".new-game-btn, .help-btn, .mute, .colorTheme {\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n    border-radius: 4px;\n    box-shadow: 2px 2px 3px rgba(0,0,0,0.5);\n    /*overflow: hidden;*/\n}\n\n/* Кнопки справки и новой игры */\n\n.new-game-btn, .help-btn {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    width: 48px;\n    height: 48px;\n    background: #669966 url(" +
                r +
                ") no-repeat center center;\n    background-size: 70%;\n    opacity: 0.8;\n\n}\n.help-btn {\n    left: auto;\n    right: 10px;\n    background: #669966 url(" +
                i +
                ') no-repeat center center;\n    background-size: 50%;\n}\n@media (max-width: 550px) {\n    .new-game-btn, .help-btn {\n        top: -70px;\n        width: 38px;\n        height: 38px;\n    }\n}\n\n/* Подсказки для кнопок */\n\n.new-game-btn:after, .help-btn:after {\n    font-size: 12px;\n    display: block;\n    content: attr(title);\n    position: absolute;\n    left: 50px;\n    top: 10px;\n    background: #333;\n    color: #ffffff;\n    white-space: nowrap;\n    padding: 5px;\n    border-radius: 4px;\n}\n.new-game-btn:before, .help-btn:before {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: #333;\n    top: 17px;\n    left: 45px;\n    transform: rotate(45deg);\n}\n.help-btn:after {\n    left: auto;\n    right: 50px;\n}\n.help-btn:before {\n    left: auto;\n    right: 45px;\n}\n@media (max-width: 270px), (min-width: 551px) {\n    .new-game-btn:after, .help-btn:after,\n    .new-game-btn:before, .help-btn:before {\n        display: none;\n    }\n}\n\n/* mute */\n\n.mute {\n    position: absolute;\n    top: 15px;\n    height: 35px;\n    right: 10px;\n    width: 40px;\n    background: #669966 url(' +
                a +
                ") no-repeat center center;\n    background-size: 60%;\n}\n.mute.on {\n    background: #669966 url(" +
                s +
                ") no-repeat center center;\n    background-size: 60%;\n}\n\n/* colorTheme */\n\n.colorTheme {\n    position: absolute;\n    top: 15px;\n    right: 60px;\n    width: 40px;\n    height: 35px;\n    background: #669966 url(" +
                u +
                ") no-repeat center center;\n    background-size: 60%;\n}\n\n.mute, .colorTheme {\n    box-shadow: 2px 2px 3px rgba(0,0,0,0.3);\n}\n",
            "",
        ]);
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "8ac2864a09920fda60deb3e2b61df621.svg");
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "7d2713ae13293c85838148010e6ba72d.svg");
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "576d1b473904259bd61fb3656464bf50.svg");
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "19bf286b2b0b96e3e591ce1b7f5a95fa.svg");
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "c71a55d931a859c39c5c3d96c6daa1ea.svg");
    },
    function (n, e, t) {
        e = n.exports = t(0)(!1);
        var o = t(2)(t(15));
        e.push([
            n.i,
            ".numbers > div.win-message {\n    width: 300px;\n    padding-top: 180px;\n    background: url(" +
                o +
                ") no-repeat center top;\n    background-size: 150px;\n}\n.win-share {\n    font-size: 14px;\n    width: 200px;\n    margin: 30px auto 0 auto;\n    text-align: left;\n}\n",
            "",
        ]);
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "fb3a7984605feee129770767d10b2317.svg");
    },
    function (n, e, t) {
        (n.exports = t(0)(!1)).push([
            n.i,
            "/* Фон */\n\nbody.night .wrapper {\n    background: #2b2b2b;\n}\nbody.night .header {\n    background: #2b2b2b;\n}\nbody.night .header-title {\n    color: #f8f8f8;\n    /*color: #f0b676;*/\n}\n\n/* Чиселки */\n\nbody.night .number:after {\n    opacity: 0.8;\n}\nbody.night .number:hover:after {\n    opacity: 0.6;\n}\nbody.night .number_disabled {\n    color: transparent;\n}\n\n/* Кнопки */\n\nbody.night .btn-panel {\n    background: #333;\n    padding: 5px 0 7px 0;\n}\nbody.night .btn-panel .btn {\n    border-radius: 4px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n}\nbody.night .shuffle-msg {\n    color: #f8f8f8;\n}\nbody.night .btn-w {\n    max-width: 500px;\n}\n\nbody.night .new-game-btn:after,\nbody.night .help-btn:after,\nbody.night .new-game-btn:before,\nbody.night .help-btn:before {\n    background: #444;\n}\n\n/* Победа */\n\nbody.night .numbers > div.win-message {\n    color: #f8f8f8;\n}\n\n/* Alert */\n\nbody.night .alert-wind {\n    background: #2b2b2b;\n    color: #f8f8f8;\n}\n",
            "",
        ]);
    },
    function (n, e, t) {
        (e = n.exports = t(0)(!1)).push([n.i, "@import url(https://fonts.googleapis.com/css?family=Kirang+Haerang);", ""]),
            e.push([
                n.i,
                "/* Фон */\n\nbody.crazy .wrapper {\n    background: #649173;\n    background: -webkit-linear-gradient(to right, #DBD5A4, #649173);\n    background: linear-gradient(to right, #DBD5A4, #649173);\n}\nbody.crazy .header {\n    background: none;\n}\nbody.crazy .header-title {\n    color: #333333;\n}\n\n/* Чиселки */\n\nbody.crazy .number {\n    font-family: 'Kirang Haerang', cursive;\n    font-size: 28px;\n    color: #ffffff;\n}\nbody.crazy .number:after {\n    opacity: 0.8;\n}\nbody.crazy .number:hover:after {\n    opacity: 0.6;\n}\nbody.crazy .number_disabled {\n    opacity: 0.4;\n    color: #666666;\n}\nbody.crazy .number_disabled:after,\nbody.crazy .number_disabled:hover:after {\n    opacity: 0.3;\n    background: black;\n}\n\n/* Кнопки */\n\nbody.crazy .btn-panel {\n    background: #333;\n    padding: 5px 0 7px 0;\n}\nbody.crazy .btn-panel .btn {\n    border-radius: 4px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n}\nbody.crazy .shuffle-msg {\n    color: #333333;\n}\nbody.crazy .btn-w {\n    max-width: 500px;\n}\n\nbody.crazy .new-game-btn:after,\nbody.crazy .help-btn:after,\nbody.crazy .new-game-btn:before,\nbody.crazy .help-btn:before {\n    background: #444;\n}\n\n/* Победа */\n\nbody.crazy .numbers > div.win-message {\n    color: #f8f8f8;\n}\n",
                "",
            ]);
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "3d557eef8250568e02e1d34c7f4ff3e4.png");
    },
    function (n, e, t) {
        "use strict";
        t.r(e), (e.default = t.p + "9fbeda7a3aa6a2bf78b63e089d3ba038.png");
    },
    function (n, e, t) {
        "use strict";
        t.r(e);
        var o = {
            $: function (n) {
                return document.querySelector(n);
            },
            $$: function (n) {
                return document.querySelectorAll(n);
            },
            setStyle: function (n, e) {
                for (var t in e) e.hasOwnProperty(t) && (n.style[t] = e[t]);
            },
            on: function (n, e, t, o) {
                var r = "string" == typeof n ? this.$(n) : n;
                r &&
                    e.split(",").forEach(function (n) {
                        r.addEventListener(n, function (n) {
                            t.call(o, n);
                        });
                    });
            },
            toggleClassName: function (n, e, t) {
                var o = new RegExp("(^| )+" + e + "($| )+");
                return this.classNameExists(n, e, o) ? t || (n.className = n.className.replace(o, " ").replace(/ +$/, "")) : t && (n.className = n.className.replace(/ *$/, " " + e)), n;
            },
            classNameExists: function (n, e, t) {
                return (t || new RegExp("(^| )+" + e + "($| )+")).test(n.className);
            },
        };
        function r(n, e, t) {
            (this.index = e),
                (this.removed = !1),
                (this.el = document.createElement("DIV")),
                "number" == typeof n ? ((this.value = n), (this.disabled = !1), (this.el.className = "number number_active")) : ((this.value = t.indexOf(n) + 1), (this.disabled = !0), (this.el.className = "number number_disabled")),
                this.el.setAttribute("data-index", String(e)),
                (this.el.innerText = String(this.value));
        }
        r.prototype = {
            getEl: function () {
                return this.el;
            },
            enable: function () {
                (this.disabled = !1), this.isAnimated() ? (this.el.className = "number number_active number_animated") : (this.el.className = "number number_active");
            },
            disable: function () {
                (this.disabled = !0), (this.el.className = "number number_disabled");
            },
            select: function () {
                this.disabled || this.removed || o.toggleClassName(this.el, "number_selected", !0);
            },
            animate: function () {
                o.toggleClassName(this.el, "number_animated", !0);
            },
            isAnimated: function () {
                return -1 !== this.el.className.indexOf("number_animated");
            },
            remove: function () {
                var n = this;
                (this.disabled = !0),
                    (this.removed = !0),
                    (this.el.className = "number number_removed"),
                    setTimeout(function () {
                        n.el.parentNode && n.el.parentNode.removeChild(n.el);
                    }, 1e3);
            },
            mount: function (n) {
                n.appendChild(this.el);
            },
        };
        var i = r;
        function a(n, e, t) {
            var o;
            return function () {
                var r = this,
                    i = arguments,
                    a = t && !o;
                clearTimeout(o),
                    (o = setTimeout(function () {
                        (o = null), t || n.apply(r, i);
                    }, e)),
                    a && n.apply(r, i);
            };
        }
        var s = 0;
        function u(n, e) {
            return Math.floor(Math.random() * (e - n)) + n;
        }
        var c = {
            tid: 0,
            _is8m: function () {
                var n = new Date();
                return 2 === n.getMonth() && 8 === n.getDate();
            },
            run: function () {
                if (c._is8m()) return c.animation3();
                0.5 < Math.random() ? c.animation1() : c.animation2();
            },
            _text: function () {
                return c._is8m() ? "8" : u(1, 9);
            },
            animation1: function () {
                var n = document.createElement("DIV"),
                    e = ["#FFCC33", "#CC0033", "#6666CC", "#999933"];
                o.setStyle(n, { position: "absolute", left: "50%", top: "50%", zIndex: "100", transition: "margin 1s, font-size 1s, 1s opacity 0.5s", color: e[u(0, e.length)] }),
                    (n.innerText = c._text()),
                    document.body.appendChild(n),
                    document.body.offsetHeight;
                var t = Math.ceil(window.innerWidth / 2),
                    r = Math.ceil(window.innerHeight / 2);
                o.setStyle(n, { marginLeft: u(-t, t) + "px", marginTop: u(-r, r - 40) + "px", fontSize: u(20, 70) + "px", opacity: "0" }),
                    setTimeout(function () {
                        document.body.removeChild(n);
                    }, 1500),
                    (c.tid = setTimeout(function () {
                        c.animation1();
                    }, 100));
            },
            animation2: function () {
                var n = document.createElement("DIV"),
                    e = ["#FFCC33", "#CC0033", "#6666CC", "#999933"];
                o.setStyle(n, { position: "absolute", left: "0", top: "0", zIndex: "100", transition: "margin 4s, font-size 3s, 3s opacity 0.5s", color: e[u(0, e.length)] }),
                    (n.innerText = c._text()),
                    document.body.appendChild(n),
                    document.body.offsetHeight;
                var t = Math.ceil(window.innerWidth),
                    r = Math.ceil(window.innerHeight);
                o.setStyle(n, { left: u(0, t) + "px", marginTop: r + "px", fontSize: u(20, 70) + "px", opacity: "0" }),
                    setTimeout(function () {
                        document.body.removeChild(n);
                    }, 1500),
                    (c.tid = setTimeout(function () {
                        c.animation2();
                    }, 100));
            },
            stop: function () {
                c.tid && clearTimeout(c.tid);
            },
            animation3: function () {
                var n = document.createElement("DIV"),
                    e = ["#FFCC33", "#CC0033", "#6666CC", "#999933"],
                    t = Math.ceil(window.innerWidth),
                    r = Math.ceil(window.innerHeight);
                o.setStyle(n, { position: "absolute", left: u(0, t) + "px", top: u(0, r) + "px", zIndex: "100", transition: "margin 4s, transform 3s, font-size 3s, 3s opacity 0.5s", color: e[u(0, e.length)] }),
                    (n.innerText = c._text()),
                    document.body.appendChild(n),
                    document.body.offsetHeight,
                    o.setStyle(n, { transform: "scale(4)", opacity: "0" }),
                    setTimeout(function () {
                        document.body.removeChild(n);
                    }, 3500),
                    (c.tid = setTimeout(function () {
                        c.animation3();
                    }, 100));
            },
        };
        c.stop = function () {
            c.tid && clearTimeout(c.tid);
        };
        var l = (window.Animation = c),
            d = window.AudioContext || window.webkitAudioContext;
        function f() {
            f.context || (f.context = new d()), (this.r = Date.now()), (this.buffer = void 0), (this.volume = 0.5), (this.randomness = 0.1);
        }
        var p =
                ((f.state = function () {
                    return f.context || (f.context = new d()), f.context.state;
                }),
                (f.resume = function () {
                    return f.context || (f.context = new d()), f.context.resume();
                }),
                (f.prototype.z = function (n, e) {
                    var t = this.Generate(n);
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                    return this.Z(t.volume, t.randomness, t.frequency, t.length, t.attack, t.slide, t.noise, t.modulation, t.modulationPhase);
                }),
                (f.prototype.Z = function (n, e, t, o, r, i, a, s, u) {
                    void 0 === o && (o = 1), void 0 === r && (r = 0.1), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === u && (u = 0);
                    var c = 44100;
                    (n *= this.volume),
                        (t *= (2 * Math.PI) / c),
                        (t *= 1 + e * (2 * this.R() - 1)),
                        (i *= (1e3 * Math.PI) / Math.pow(c, 2)),
                        (r *= 0 | (o = 0 < o ? ((10 < o ? 10 : o) * c) | 0 : 1)),
                        (s *= (2 * Math.PI) / c),
                        (u *= Math.PI);
                    for (var l = [], d = 0, p = 0, h = 0; h < o; ++h)
                        (l[h] = n * Math.cos(d * t * Math.cos(p * s + u)) * (h < r ? h / r : 1 - (h - r) / (o - r))), (d += 1 + a * (2 * this.R() - 1)), (p += 1 + a * (2 * this.R() - 1)), (t += i);
                    this.buffer = l;
                    var b = f.context.createBuffer(1, l.length, c),
                        m = f.context.createBufferSource();
                    return b.getChannelData(0).set(l), (m.buffer = b), m.connect(f.context.destination), m.start(), m;
                }),
                (f.prototype.Generate = function (n) {
                    var e = this.r;
                    this.r = n;
                    for (var t = 9; t--; ) this.R();
                    var o = {};
                    return (
                        (o.seed = n),
                        (o.volume = 1),
                        (o.randomness = n ? this.randomness : 0),
                        (o.frequency = n ? (2e3 * Math.pow(this.R(), 2)) | 0 : 220),
                        (o.slide = n ? parseFloat((10 * Math.pow(this.R(), 3)).toFixed(1)) : 0),
                        (o.length = n ? parseFloat((0.1 + this.R()).toFixed(1)) : 1),
                        (o.attack = n ? parseFloat(this.R().toFixed(2)) : 0.1),
                        (o.noise = n ? parseFloat((5 * Math.pow(this.R(), 3)).toFixed(1)) : 0),
                        (o.modulation = n ? parseFloat((99 * Math.pow(this.R(), 5)).toFixed(1)) : 0),
                        (o.modulationPhase = n ? parseFloat(this.R().toFixed(2)) : 0),
                        (this.r = e),
                        o
                    );
                }),
                (f.prototype.R = function () {
                    return (this.r ^= this.r << 13), (this.r ^= this.r >> 7), (this.r ^= this.r << 17), (Math.abs(this.r) % 1e9) / 1e9;
                }),
                f),
            h = t(1),
            b =
                ((m.prototype.subscribe = function (n, e) {
                    this.events[n] || (this.events[n] = []), this.events[n].includes(e) || this.events[n].push(e);
                }),
                (m.prototype.on = function (n, e) {
                    return this.subscribe(n, e);
                }),
                (m.prototype.emit = function (n, e) {
                    if (this.events[n]) for (var t = 0, o = this.events[n]; t < o.length; t++) (0, o[t])(e);
                }),
                m);
        function m() {
            this.events = {};
        }
        var g = function (n, e, t, o) {
                return new (t = t || Promise)(function (r, i) {
                    function a(n) {
                        try {
                            u(o.next(n));
                        } catch (n) {
                            i(n);
                        }
                    }
                    function s(n) {
                        try {
                            u(o.throw(n));
                        } catch (n) {
                            i(n);
                        }
                    }
                    function u(n) {
                        n.done
                            ? r(n.value)
                            : (function (n) {
                                  return n instanceof t
                                      ? n
                                      : new t(function (e) {
                                            e(n);
                                        });
                              })(n.value).then(a, s);
                    }
                    u((o = o.apply(n, e || [])).next());
                });
            },
            v = function (n, e) {
                var t,
                    o,
                    r,
                    i,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: s(0), throw: s(1), return: s(2) }),
                    "function" == typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                            return this;
                        }),
                    i
                );
                function s(i) {
                    return function (s) {
                        return (function (i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (((t = 1), o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done)) return r;
                                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            r = i;
                                            break;
                                        case 4:
                                            return a.label++, { value: i[1], done: !1 };
                                        case 5:
                                            a.label++, (o = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = 0 < (r = a.trys).length && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                a.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && a.label < r[1]) {
                                                (a.label = r[1]), (r = i);
                                                break;
                                            }
                                            if (r && a.label < r[2]) {
                                                (a.label = r[2]), a.ops.push(i);
                                                break;
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    i = e.call(n, a);
                                } catch (n) {
                                    (i = [6, n]), (o = 0);
                                } finally {
                                    t = r = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, s]);
                    };
                }
            },
            y = { screen: { fullscreen: !1 } },
            x = Date.now(),
            w = 0,
            k =
                ((C.init = function (n, e) {
                    var t = this;
                    C.script ||
                        C.loadScript(
                            function () {
                                (C.YaGames = window.YaGames).init(n || y).then(function (n) {
                                    t.callbacks.forEach(function (e) {
                                        return e(n);
                                    }),
                                        (C.sdk = n),
                                        (t.callbacks = []),
                                        e && e(),
                                        n && n.yandexApp && n.yandexApp.enabled ? (C.unregisterSW(), C.checkManifest()) : C.registerSW();
                                });
                            },
                            function () {
                                t.callbacks.forEach(function (n) {
                                    return n(null);
                                }),
                                    (C.sdk = null),
                                    (t.callbacks = []),
                                    e && e();
                            }
                        );
                }),
                (C.registerSW = function () {
                    navigator && navigator.serviceWorker && navigator.serviceWorker.register("sw.js", { scope: "./" }).then(function (n) {});
                }),
                (C.unregisterSW = function () {
                    navigator.serviceWorker.getRegistrations().then(function (n) {
                        n.forEach(function (n) {
                            n.unregister().then(function (n) {});
                        });
                    });
                }),
                (C.checkManifest = function () {
                    fetch("yandex-manifest.json")
                        .then(function (n) {
                            return n.json();
                        })
                        .then(function (n) {
                            "3.5.2" !== n.yandex.app_version && "object" == typeof yandex && yandex.app && yandex.app.forceUpdate && yandex.app.forceUpdate();
                        })
                        .catch(function (n) {});
                }),
                (C.showFullscreenAdv = function (n) {
                    return g(this, void 0, void 0, function () {
                        var e;
                        return v(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, C.getSdkPromise()];
                                case 1:
                                    return (
                                        (e = t.sent()),
                                        21e4 < Date.now() - x &&
                                            (e.adv.showFullscreenAdv({
                                                callbacks: {
                                                    onClose: function (e) {
                                                        n && (e && w++, n(e, w));
                                                    },
                                                },
                                            }),
                                            (x = Date.now())),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (C.setLastShowAdvTime = function (n) {
                    x = n;
                }),
                (C.showRewardedVideo = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, C.getSdkPromise()];
                                case 1:
                                    return e.sent().adv.showRewardedVideo({ callbacks: n }), [2];
                            }
                        });
                    });
                }),
                (C.getPlayer = function (n) {
                    return g(this, void 0, void 0, function () {
                        var e, t;
                        return v(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return C.player ? [3, 3] : [4, C.getSdkPromise()];
                                case 1:
                                    return (e = o.sent()), (t = C), [4, e.getPlayer(n || C.getPlayerOptions)];
                                case 2:
                                    (t.player = o.sent()), (o.label = 3);
                                case 3:
                                    return [2, C.player];
                            }
                        });
                    });
                }),
                (C.getPlayerId = function () {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [4, C.getPlayer({ scopes: !1 })];
                                case 1:
                                    return [2, n.sent().getUniqueID()];
                            }
                        });
                    });
                }),
                (C.openAuthDialog = function () {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [4, C.getSdkPromise()];
                                case 1:
                                    return [4, n.sent().auth.openAuthDialog()];
                                case 2:
                                    return n.sent(), [2];
                            }
                        });
                    });
                }),
                (C.setData = function (n, e) {
                    return (
                        void 0 === e && (e = !1),
                        g(this, void 0, void 0, function () {
                            return v(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, C.getPlayer()];
                                    case 1:
                                        return [2, t.sent().setData(n, e)];
                                }
                            });
                        })
                    );
                }),
                (C.getData = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, C.getPlayer()];
                                case 1:
                                    return [2, e.sent().getData(n)];
                            }
                        });
                    });
                }),
                (C.setStats = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, C.getPlayer()];
                                case 1:
                                    return [2, e.sent().setStats(n)];
                            }
                        });
                    });
                }),
                (C.incrementStats = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, C.getPlayer()];
                                case 1:
                                    return [2, e.sent().incrementStats(n)];
                            }
                        });
                    });
                }),
                (C.getStats = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, C.getPlayer()];
                                case 1:
                                    return [2, e.sent().getStats(n)];
                            }
                        });
                    });
                }),
                (C.getPayments = function () {
                    return g(this, void 0, void 0, function () {
                        var n;
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return C.payments ? [3, 2] : [4, C.getSdkPromise()];
                                case 1:
                                    (n = e.sent()), (C.payments = n.getPayments({ signed: !0 })), (e.label = 2);
                                case 2:
                                    return [2, C.payments];
                            }
                        });
                    });
                }),
                (C.purchase = function (n, e) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPayments()];
                                case 1:
                                    return [2, e.sent().purchase({ id: n })];
                            }
                        });
                    });
                }),
                (C.consumePurchase = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPayments()];
                                case 1:
                                    return [2, e.sent().consumePurchase(n)];
                            }
                        });
                    });
                }),
                (C.getPurchases = function () {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.getPayments()];
                                case 1:
                                    return [2, n.sent().getPurchases()];
                            }
                        });
                    });
                }),
                (C.getLang = function () {
                    var n = this;
                    return new Promise(function (e) {
                        setTimeout(function () {
                            return g(n, void 0, void 0, function () {
                                var n;
                                return v(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, C.getSdkPromise()];
                                        case 2:
                                            return (n = t.sent()), e(n.environment && n.environment.i18n ? n.environment.i18n.lang : "ru"), [3, 4];
                                        case 3:
                                            return t.sent(), e("ru"), [3, 4];
                                        case 4:
                                            return [2];
                                    }
                                });
                            });
                        }, 1);
                    });
                }),
                (C.getCatalog = function () {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.getPayments()];
                                case 1:
                                    return [2, n.sent().getCatalog()];
                            }
                        });
                    });
                }),
                (C.getLeaderboards = function () {
                    return g(this, void 0, void 0, function () {
                        var n, e;
                        return v(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return C.lb ? [3, 3] : [4, C.getSdkPromise()];
                                case 1:
                                    return (n = t.sent()), (e = C), [4, n.getLeaderboards()];
                                case 2:
                                    (e.lb = t.sent()), (t.label = 3);
                                case 3:
                                    return [2, C.lb];
                            }
                        });
                    });
                }),
                (C.setLeaderboardScore = function (n, e, t) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.getLeaderboards()];
                                case 1:
                                    return [4, o.sent().setLeaderboardScore(n, e, t)];
                                case 2:
                                    return o.sent(), [2];
                            }
                        });
                    });
                }),
                (C.getLeaderboardPlayerEntry = function (n) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getLeaderboards()];
                                case 1:
                                    return [2, e.sent().getLeaderboardPlayerEntry(n)];
                            }
                        });
                    });
                }),
                (C.getLeaderboardEntries = function (n, e) {
                    return g(this, void 0, void 0, function () {
                        return v(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getLeaderboards()];
                                case 1:
                                    return [2, t.sent().getLeaderboardEntries(n, e)];
                            }
                        });
                    });
                }),
                (C.loadScript = function (n, e) {
                    ((C.script = document.createElement("script")).src = C.getSdkUrl()),
                        (C.script.async = !0),
                        (C.script.onload = n),
                        (C.script.onerror = e),
                        (function (n) {
                            var e = document.getElementsByTagName("script")[0];
                            e && e.parentNode ? e.parentNode.insertBefore(n, e) : document.body.appendChild(n);
                        })(C.script);
                }),
                (C.getSdkUrl = function () {
                    return "https://yandex.ru/games/sdk/v2";
                }),
                (C.getSdk = function (n) {
                    void 0 !== C.sdk ? n(C.sdk) : (C.callbacks.push(n), C.init());
                }),
                (C.getSdkPromise = function () {
                    return new Promise(function (n, e) {
                        C.getSdk(function (t) {
                            return t ? n(t) : e(null);
                        });
                    });
                }),
                (C.getPlayerOptions = { scopes: !1 }),
                (C.sdk = void 0),
                (C.callbacks = []),
                C);
        function C() {}
        var N = "53796892",
            S = "ontouchstart" in window,
            T = "pg-numbers-";
        function P(n) {
            try {
                return localStorage.getItem(T + n);
            } catch (n) {
                return "";
            }
        }
        function z(n, e) {
            try {
                return localStorage.setItem(T + n, e);
            } catch (n) {}
        }
        function _(n, e) {
            void 0 === e && (e = 0.5),
                P("mute") ||
                    ("running" === p.state()
                        ? new p().z(n, { volume: e })
                        : p.resume().then(function () {
                              new p().z(n, { volume: e });
                          }));
        }
        var M = function () {
                _(40846);
            },
            O = function () {
                _(9434);
            },
            E = function () {
                M();
            },
            A = function () {
                M();
            },
            L = function () {
                M();
            },
            D = {};
        !(function (n, e) {
            if ((void 0 === e && (e = 0.5), window.Audio)) {
                var t = new Audio("assets/sound/" + n + ".mp3");
                (t.volume = e || 1),
                    (D[n] = { audio: t, loaded: !1 }),
                    t.addEventListener("loadeddata", function () {
                        D[n].loaded = !0;
                    });
            }
        })("remove", 0.5);
        var j = "ru",
            R = function () {
                return j;
            };
        function F(n) {
            return "ru" === j ? n : void 0 !== h[n] && "" !== String(h[n]).trim() ? h[n] : n;
        }
        var H,
            I,
            B,
            U,
            W,
            G,
            $,
            q = new b();
        function V(n, e) {
            var t = document.createElement("div");
            return (t.className = n), e && o.setStyle(t, e), t;
        }
        function J(n, e) {
            (e || document.body).appendChild(n);
        }
        function K(n) {
            if (n) $ = Date.now();
            else {
                if (Date.now() - $ < 500) return;
                "function" == typeof G && (G(), (G = void 0));
            }
            o.toggleClassName(document.body, "alert-show", n);
        }
        k.getLang().then(function (n) {
            var e = j;
            (j = n), q.emit("lang", { lang: n, prevLang: e });
        });
        var Y =
                ((I = V("alert-wind", (H = { display: "none" }))),
                (B = V("alert-mask", H)),
                (U = V("alert-wind-body")),
                (W = V("alert-wind-okay")),
                (G = null),
                ($ = 0),
                (W.innerText = F("Закрыть")),
                q.on("lang", function () {
                    return (W.innerText = F("Đóng"));
                }),
                J(I),
                J(U, I),
                J(W, I),
                J(B),
                o.on(W, "click,touchstart", function () {
                    K(!1);
                }),
                setTimeout(function () {
                    var n = { display: "" };
                    o.setStyle(I, n), o.setStyle(B, n);
                }, 100),
                {
                    show: function (n, e, t) {
                        (U.innerHTML = n),
                            t
                                ? setTimeout(function () {
                                      K(!0);
                                  }, t)
                                : K(!0),
                            (G = e);
                    },
                    hide: function () {
                        K(!1);
                    },
                }),
            Z = void t(3);
        function Q(n) {
            this.props = n;
        }
        (Q.prototype.valueOf = function () {
            return this.el.valueOf();
        }),
            (Q.prototype.mount = function (n) {
                n.appendChild(this.valueOf());
            }),
            (Q.prototype.unmount = function (n) {
                n.removeChild(this.el.valueOf());
            }),
            (Q.prototype.toggleClassName = function (n, e) {
                return this.el.toggleClassName(n, e), this;
            }),
            (Q.prototype.toggle = function (n) {
                this.el.style({ display: n ? "" : "none" });
            }),
            (Q.prototype.style = function (n) {
                this.el.style(n);
            }),
            (Q.prototype.getStyle = function (n) {
                this.el.getStyle(n);
            }),
            (Q.prototype.text = function (n) {
                this.el.text(n);
            }),
            (Q.prototype.getBoundingClientRect = function () {
                return this.el.valueOf().getBoundingClientRect();
            });
        var X =
            ((nn.prototype.valueOf = function () {
                return this.el;
            }),
            (nn.prototype.toggleClassName = function (n, e) {
                this.el.classList.toggle(n, e);
            }),
            (nn.prototype.hasClassName = function (n) {
                return this.el.classList.contains(n);
            }),
            (nn.prototype.text = function (n) {
                this.el.innerText = n;
            }),
            (nn.prototype.html = function (n) {
                this.el.innerHTML = n;
            }),
            (nn.prototype.attr = function (n, e) {
                this.el.setAttribute(n, e);
            }),
            (nn.prototype.style = function (n) {
                for (var e in n) n.hasOwnProperty(e) && (this.el.style[e] = n[e]);
            }),
            (nn.prototype.getStyle = function (n) {
                return this.el.style[n];
            }),
            (nn.prototype.appendChild = function (n) {
                nn instanceof nn ? this.el.appendChild(n.valueOf()) : this.el.appendChild(n);
            }),
            (nn.prototype.removeFirstChild = function () {
                this.el.childNodes[0] && this.el.removeChild(this.el.childNodes[0]);
            }),
            Object.defineProperty(nn.prototype, "countChild", {
                get: function () {
                    return this.el.childNodes.length;
                },
                enumerable: !0,
                configurable: !0,
            }),
            (nn.prototype.getBoundingClientRect = function () {
                return this.el.getBoundingClientRect();
            }),
            nn);
        function nn(n, e, t) {
            if (((this.el = document.createElement(n || "DIV")), "string" == typeof e)) this.el.className = e;
            else {
                if ((e.id && this.el.setAttribute("id", e.id), e.className && (this.el.className = e.className), e.attrs)) for (var o in e.attrs) e.attrs.hasOwnProperty(o) && this.el.setAttribute(o, e.attrs[o]);
                e.style && Object.assign(this.el.style, e.style), e.onClick && this.el.addEventListener("click", e.onClick);
            }
            if (Array.isArray(t))
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if ("string" == typeof i) {
                        var a = document.createTextNode(i);
                        this.el.appendChild(a);
                    } else this.el.appendChild(i.valueOf());
                }
            else "string" == typeof t && ((a = document.createTextNode(t)), this.el.appendChild(a));
        }
        var en,
            tn,
            on =
                (((en = function (n, e) {
                    return (en =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (n, e) {
                                n.__proto__ = e;
                            }) ||
                        function (n, e) {
                            for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                        })(n, e);
                }),
                function (n, e) {
                    function t() {
                        this.constructor = n;
                    }
                    en(n, e), (n.prototype = null === e ? Object.create(e) : ((t.prototype = e.prototype), new t()));
                })(rn, (tn = X)),
                Object.defineProperty(rn.prototype, "scrollHeight", {
                    get: function () {
                        return this.el.scrollHeight;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (rn.prototype.scrollToBottom = function () {
                    this.el.scrollTo(0, this.scrollHeight);
                }),
                rn);
        function rn(n, e) {
            return tn.call(this, "div", n, e) || this;
        }
        function an(n) {
            Yn(n ? "Реклама показана" : "Реклама не показана");
        }
        (k.getPlayerOptions = { scopes: !1 }),
            k.init({ screen: { fullscreen: S } }, function () {}),
            q.on("lang", function (n) {
                var e;
                Zn({ lang: ((e = {}), (e[n.lang] = 1), e) });
            });
        var sn = document.getElementById("root"),
            un = a(function () {
                Yn("Клик по логотипу");
            }, 200);
        function cn(n) {
            var e = n.target;
            -1 !== e.className.indexOf("on") ? ((e.className = "mute"), (Nn = !1), z("mute", ""), M()) : ((e.className = "mute on"), (Nn = !0), z("mute", "on"));
        }
        var ln = ["default", "night", "crazy"],
            dn = P("colorTheme") || ln[0];
        function fn() {
            var n = ln.indexOf(dn);
            z("colorTheme", (dn = -1 === n || n + 1 > ln.length - 1 ? ln[0] : ln[n + 1])), (document.body.className = dn), M();
        }
        function pn() {
            return new on("header", [
                new on({ className: "header-title", onClick: un }, [new on("header-logo", [F("Số «19»")]), new on("header-author", [F("by Arcade")])]),
                new on({ className: "mute", onClick: cn }),
                new on({ className: "colorTheme", onClick: fn }),
            ]);
        }
        o.toggleClassName(document.body, dn, !0);
        var hn = pn();
        function bn() {
            L(), (Cn = []), Wn(), An(!0), ae(!0), Yn("Новая игра"), l.stop();
        }
        function mn() {
            return [
                new on({ className: "new-game-btn", onClick: bn, attrs: { title: F("Trò chơi mới") } }, []),
                new on({ className: "help-btn", onClick: re, attrs: { title: F("Gợi ý") } }, []),
                new on({ className: "help", style: { display: "none" } }, [yn("help")]),
                new on({ className: "pat", style: { display: "none" } }, [yn("pat")]),
                new on({ className: "numbers-w", onClick: Dn }, [new on("numbers disable-select", []), new on({ className: "shuffle-msg", style: { display: "none" } }, [yn("shuffle-msg")])]),
                new on("btn-panel", [
                    new on("btn-w", [
                        new on({ className: "btn undo-numbers-btn", onClick: Jn }, [new on("long", [F("Hủy lượt chơi (0)")]), new on("short", [F("Отмена (0)")])]),
                        new on({ className: "btn add-numbers-btn", onClick: Vn }, [F("Thêm số")]),
                        new on({ className: "btn hint-btn", onClick: Kn }, [new on("long", [F("Gợi ý")]), new on("short", [F("Подсказка")])]),
                    ]),
                ]),
            ];
        }
        sn.appendChild(hn.valueOf()),
            q.on("lang", function (n) {
                n.lang !== n.prevLang && (hn && sn.removeChild(hn.valueOf()), (hn = pn()), vn ? sn.insertBefore(hn.valueOf(), vn.valueOf()) : sn.appendChild(hn.valueOf()));
            });
        var gn,
            vn = new on("app", mn());
        function yn(n) {
            var e = n + "-" + ("ru" === R() ? "ru" : "en"),
                t = document.getElementById(e),
                o = new on("", []);
            return o.html(t.innerText), o;
        }
        sn.appendChild(vn.valueOf()),
            q.on("lang", function (n) {
                n.lang !== n.prevLang &&
                    (vn.html(""),
                    mn().forEach(function (n) {
                        return vn.appendChild(n.valueOf());
                    }),
                    (wn = Tn(".numbers")),
                    Rn());
            });
        var xn,
            wn = Tn(".numbers"),
            kn = "abcdefghi".split(""),
            Cn = [],
            Nn = "on" === P("mute"),
            Sn = !1;
        function Tn(n) {
            return document.querySelector(n);
        }
        function Pn(n) {
            return n.split("").map(function (n) {
                var e = Number(n);
                return isNaN(e) ? n : e;
            });
        }
        var zn = 0;
        function _n(n) {
            (Sn = !0),
                Y.show(Tn(n || ".help").innerHTML, function () {
                    (Sn = !0),
                        (zn = Date.now()),
                        M(),
                        setTimeout(function () {
                            Sn = !1;
                        }, 500);
                });
        }
        function Mn() {
            _n(".help");
        }
        function On(n, e, t) {
            var o = "string" == typeof n ? Tn(n) : n;
            o &&
                e.split(",").forEach(function (n) {
                    o.addEventListener(n, function (n) {
                        Sn || t(n);
                    });
                });
        }
        function En(n, e) {
            var t;
            On(
                n,
                "click,touchstart",
                ((t = e),
                function (n) {
                    var e = s;
                    (s = Date.now()), (void 0 === e || 300 < s - e) && t(n);
                })
            );
        }
        function An(n, e) {
            (xn && !n) || (xn = e || [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9]),
                (gn = void 0),
                (wn.innerHTML = ""),
                (Tn(".numbers-w").className = "numbers-w"),
                (xn = xn.map(function (n, e) {
                    var t = new i(n, e, kn);
                    return t.mount(wn), t;
                })),
                delete Qn.cache,
                n && k.showFullscreenAdv(an).then(),
                (qn = 0);
        }
        var Ln = null;
        function Dn(n) {
            Ln === n.target && n.preventDefault(), (Ln = n.target);
            var e = n.target.getAttribute("data-index");
            if (e) {
                if (((e = Number(e)), isNaN(e) || !xn[e] || xn[e].disabled)) return;
                if (void 0 !== gn && xn[gn]) {
                    if ((xn[gn].enable(), e === gn)) return void (gn = void 0);
                    var t = [e, gn].sort(function (n, e) {
                        return n - e;
                    });
                    if (
                        function (n, e) {
                            var t = xn[n],
                                o = xn[e];
                            if (!1 === t.disabled && !1 === o.disabled) {
                                var r = n % 9,
                                    i = e % 9;
                                if ((jn(n, e, 1) || (r == i && jn(n, e, 9))) && oe(n, e)) return !0;
                            }
                        }.apply(this, t)
                    )
                        return (
                            Un(),
                            xn[e].disable(),
                            xn[gn].disable(),
                            (gn = void 0),
                            (function () {
                                for (var n = Math.ceil(xn.length / 9), e = 0; e < n; e++) Hn(e);
                            })(),
                            z("result", Bn()),
                            z("history", JSON.stringify(Cn)),
                            (function () {
                                for (var n, e = 0; e < xn.length; e++) if (xn[e] && !1 === xn[e].disabled && !1 === xn[e].removed) return;
                                In(), window["yaCounter" + N] && window["yaCounter" + N].reachGoal("numbers-win"), Yn(Nn ? "Без звука" : "Со звуком"), Zn({ colorTheme: ((n = {}), (n[dn] = 1), n) }), l.run();
                            })(),
                            delete Qn.cache,
                            ne(),
                            void ae(!1)
                        );
                }
                xn[e].select(), (gn = e);
            }
        }
        function jn(n, e, t) {
            for (var o = n + t; o < e; o += t) if (xn[o] && !1 === xn[o].disabled) return !1;
            return !0;
        }
        function Rn() {
            var n = P("result");
            n && (xn = Pn(n));
            var e = P("history");
            try {
                e && ((Cn = JSON.parse(e)), Wn());
            } catch (n) {}
            An(Array.isArray(xn) && xn.length && xn[0] instanceof i), En(".shuffle-btn", ie);
        }
        Rn();
        var Fn = a(function () {
            !(function (n) {
                var e = P("mute"),
                    t = /iPad|iPhone|iPod/.test(navigator.userAgent);
                if (!e && ((D[n] && D[n].loaded) || t)) {
                    var o = D[n].audio.play();
                    null !== o && o.catch(function (n) {});
                }
            })("remove");
        }, 50);
        function Hn(n) {
            for (var e = 9 * n - 9, t = e; t < 9 + e; t++) if (!xn[t] || !1 === xn[t].disabled) return;
            for (var o = e; o < 9 + e; o++) Fn(), xn[o].remove(), delete xn[o];
        }
        function In() {
            (wn.innerHTML = '<div class="win-message">Победа!!!</div>'),
                (Tn(".numbers-w").className += " win"),
                "ru" === R() &&
                    (function n(e, t, o, r) {
                        if (!n[t]) {
                            var i = document.getElementsByTagName("script")[0],
                                a = document.createElement("script");
                            (a.src = e), (a.async = !0), i.parentNode.insertBefore(a, i), (n[t] = a);
                        }
                        window[t]
                            ? o(window[t])
                            : setTimeout(function () {
                                  (r = r || 0) < 25 && n(e, t, o, ++r);
                              }, 100);
                    })("https://vk.com/js/api/share.js?95", "VK", function (n) {
                        var e = (location.origin + location.pathname + "/assets/img/share-win.png").replace("index.html/", ""),
                            t = n.Share.button({ url: "https://yandex.ru/games/play/96675", image: e, title: "А вы сможете выиграть в Чиселки?" }, { type: "round", text: "Рассказать друзьям" });
                        (document.querySelector(".win-message").innerHTML += '<div class="win-share">' + t + "<p>Поделитесь с друзьями ВКонтакте. Пусть хорошие люди играют в хорошие игры.</p></div>"),
                            En(".win-message table", function () {
                                z("share-vk", "1"), Yn("Поделиться ВКонтакте");
                            });
                    });
        }
        function Bn() {
            var n = xn.map(function (n) {
                return !0 !== n.removed ? (n.disabled ? kn[n.value - 1] : n.value) : 0;
            });
            return (n = n.filter(function (n) {
                return 0 !== n;
            })).join("");
        }
        function Un() {
            9 < Cn.length && Cn.shift(), Cn.push(Bn()), Wn();
        }
        function Wn() {
            (Tn(".undo-numbers-btn .long").innerText = F("Hủy lượt chơi (0)").replace("0", Cn.length)), (Tn(".undo-numbers-btn .short").innerText = F("Hủy bỏ (0)").replace("0", Cn.length));
        }
        var Gn,
            $n,
            qn = 0;
        function Vn() {
            Date.now() - zn < 1e3 ||
                (Un(),
                xn
                    .filter(function (n) {
                        return !n.disabled && !n.removed;
                    })
                    .forEach(function (n) {
                        var e = new i(n.value, xn.length, kn);
                        e.mount(wn), xn.push(e);
                    }),
                delete Qn.cache,
                ae(!1),
                Yn("Добавить чиселок"),
                setTimeout(function () {
                    k.showFullscreenAdv(an).then();
                }, 1e3),
                0 === Xn(xn).length &&
                    qn < 3 &&
                    setTimeout(function () {
                        _n(".pat"), Yn("Пат"), qn++;
                    }, 250),
                E());
        }
        function Jn() {
            if (!(Date.now() - zn < 1e3)) {
                var n = Cn.pop();
                n && ((xn = Pn(n)), An(), Wn(), delete Qn.cache), A(), Yn("Отмена хода");
            }
        }
        function Kn(n) {
            if (!(Date.now() - zn < 1e3)) {
                M();
                var e = Qn();
                if (e) {
                    var t = 0 < e[2];
                    ne(),
                        setTimeout(function () {
                            xn[e[0]] && xn[e[1]] && (xn[e[0]].animate(), xn[e[1]].animate());
                        }, 100),
                        t || te(n.target, xn[e[0]].value + " и " + xn[e[1]].value);
                } else te(n.target, F("Добавьте чиселок"));
                Yn("Подсказать ход");
            }
        }
        function Yn(n) {
            var e = {};
            (e[n] = 1), Zn(e);
        }
        function Zn(n) {
            var e = window["yaCounter" + N];
            if (e && e.params)
                try {
                    e.params(n);
                } catch (n) {}
        }
        function Qn() {
            Qn.cache || ((Qn.cache = Xn(xn)), (Qn.index = -1));
            var n = Qn.cache;
            if (((Qn.index += 1) > n.length - 1 && (Qn.index = 0), n && n.length))
                return (
                    (n = n.map(function (n) {
                        return (n[2] = ee(n[0]) + ee(n[1])), n;
                    })).sort(function (n, e) {
                        return e[2] - n[2];
                    }),
                    n[Qn.index]
                );
        }
        function Xn(n) {
            var e,
                t,
                o,
                r = [];
            for (e = 0; e < n.length; e++)
                if (n[e] && !n[e].disabled) {
                    for (t = e + 1; t < n.length; t++)
                        if (n[t] && !n[t].disabled) {
                            oe(e, t) && r.push([e, t, 0]);
                            break;
                        }
                    for (o = e + 9; o < n.length; o += 9)
                        if (n[o] && !n[o].disabled) {
                            oe(e, o) && r.push([e, o, 0]);
                            break;
                        }
                }
            return r;
        }
        function ne() {
            for (var n = o.$$(".number_animated"), e = 0; e < n.length; e += 1) o.toggleClassName(n[e], "number_animated", !1);
        }
        function ee(n) {
            return 0 < xn[n].el.getBoundingClientRect().top ? 1 : 0;
        }
        function te(n, e) {
            o.toggleClassName(n, "tooltip", !0),
                n.setAttribute("data-tooltip", e),
                setTimeout(function () {
                    o.toggleClassName(n, "tooltip", !1);
                }, 800);
        }
        function oe(n, e) {
            var t = xn[n].value,
                o = xn[e].value;
            return t === o || t + o === 10;
        }
        function re() {
            M(), Mn();
        }
        function ie() {
            (Cn = []),
                Wn(),
                An(
                    !0,
                    (function (n) {
                        var e, t, o;
                        for (o = n.length - 1; 0 < o; o--) (e = Math.floor(Math.random() * (o + 1))), (t = n[o]), (n[o] = n[e]), (n[e] = t);
                        return n;
                    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9])
                ),
                O(),
                Yn("Перемешивание");
        }
        function ae(n) {
            var e = Tn(".shuffle-msg");
            e && (e.style.display = n ? "block" : "none");
        }
        function se() {
            return new Date().getTime();
        }
        On(document, "scroll", function () {
            var n;
            (n = (window.pageYOffset || document.documentElement.scrollTop) < Math.max(50, (document.body.scrollHeight - window.innerHeight) / 2) ? "#fffeee" : -1 !== navigator.userAgent.indexOf("Chrome") ? "#FFE4E1" : "#bed9db"),
                (document.body.style.background = n),
                (Qn.index = 0);
        }),
            document.addEventListener("DOMContentLoaded", function () {
                o.toggleClassName(document.body, "hidden", !1);
            }),
            q.on(
                "lang",
                a(function () {
                    P("alreadyRunning") ? z("version", "3.0") : (z("alreadyRunning", "1"), z("version", "2.1"), Mn());
                }, 600)
            ),
            setTimeout(function () {
                o.toggleClassName(document.body, "hidden", !1);
            }, 1500),
            (Gn = !0),
            ($n = se()),
            window.addEventListener("focus", function () {
                Gn || ((Gn = !0), 6e5 < se() - $n && (k.showFullscreenAdv(an).then(), Yn("Реклама после blur-focus")));
            }),
            window.addEventListener("blur", function () {
                (Gn = !1), ($n = se());
            }),
            (window.showWin = function () {
                In();
            }),
            window.addEventListener("load", function () {
                var n = Tn(".btn-panel");
                n &&
                    (n.style.right =
                        (function () {
                            if (void 0 === Z) {
                                var n = document.createElement("div");
                                (n.style.position = "fixed"), (n.style.top = "-1000px"), (n.style.overflow = "scroll"), document.body.appendChild(n), (Z = n.offsetWidth - n.clientWidth || 0), document.body.removeChild(n);
                            }
                            return Z;
                        })() + "px"),
                    (function (n, e) {
                        try {
                            var t = location.href;
                        } catch (n) {}
                        var o = "yaCounter" + e,
                            r = {};
                        function i(n) {
                            var e = n ? String(n) : "none";
                            return (
                                20 < e.length &&
                                    (e =
                                        "[" +
                                        (function (n) {
                                            for (var e = 2166136261, t = 0, o = n.length; t < o; ++t) (e ^= n.charCodeAt(t)), (e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24));
                                            return e >>> 0;
                                        })(e).toString(36) +
                                        "]" +
                                        e),
                                e
                            );
                        }
                        var a = window.onerror;
                        window.onerror = function (n, e, s, u, c) {
                            var l = "Script error." == n ? "Script error" : n;
                            if ("string" == typeof e && "number" == typeof s && "number" == typeof u) var d = [e, s, u].join(":");
                            var f = c && "string" == typeof c.stack && c.stack.replace(/\n/g, "\\n");
                            f && 2e3 < f.length && (f = f.substr(0, 1e3) + "\\n...\\n" + f.substr(-1e3));
                            var p = ["jserrs", i("3.5.2"), i(l), i(t), i("string" == typeof e && e), i(d), i(String(window.jsErrsDebug)), i(f), "1", 1],
                                h = [l, e, d, window.jsErrsDebug].join("|");
                            if (
                                (r[h] ||
                                    ((r[h] = !0),
                                    (function n(e) {
                                        var t = window[o];
                                        t
                                            ? t.params.apply(t, e)
                                            : setTimeout(function () {
                                                  n(e);
                                              }, 1e3);
                                    })(p)),
                                "function" == typeof a)
                            )
                                return a.apply(window, arguments);
                        };
                    })(0, N);
            });
    },
]);
