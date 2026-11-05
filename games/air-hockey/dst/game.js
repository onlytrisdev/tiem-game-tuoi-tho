/*! For license information please see game.js.LICENSE.txt */
(() => {
    var t = {
            213: (t, e, n) => {
                var i = n(924).default;
                function _regeneratorRuntime() {
                    "use strict";
                    (t.exports = _regeneratorRuntime = function _regeneratorRuntime() {
                        return e;
                    }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports);
                    var e = {},
                        n = Object.prototype,
                        o = n.hasOwnProperty,
                        s = "function" == typeof Symbol ? Symbol : {},
                        r = s.iterator || "@@iterator",
                        a = s.asyncIterator || "@@asyncIterator",
                        c = s.toStringTag || "@@toStringTag";
                    function define(t, e, n) {
                        return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
                    }
                    try {
                        define({}, "");
                    } catch (t) {
                        define = function define(t, e, n) {
                            return (t[e] = n);
                        };
                    }
                    function wrap(t, e, n, i) {
                        var o = e && e.prototype instanceof Generator ? e : Generator,
                            s = Object.create(o.prototype),
                            r = new Context(i || []);
                        return (
                            (s._invoke = (function (t, e, n) {
                                var i = "suspendedStart";
                                return function (o, s) {
                                    if ("executing" === i) throw new Error("Generator is already running");
                                    if ("completed" === i) {
                                        if ("throw" === o) throw s;
                                        return doneResult();
                                    }
                                    for (n.method = o, n.arg = s; ; ) {
                                        var r = n.delegate;
                                        if (r) {
                                            var a = maybeInvokeDelegate(r, n);
                                            if (a) {
                                                if (a === l) continue;
                                                return a;
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === i) throw ((i = "completed"), n.arg);
                                            n.dispatchException(n.arg);
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        i = "executing";
                                        var c = tryCatch(t, e, n);
                                        if ("normal" === c.type) {
                                            if (((i = n.done ? "completed" : "suspendedYield"), c.arg === l)) continue;
                                            return { value: c.arg, done: n.done };
                                        }
                                        "throw" === c.type && ((i = "completed"), (n.method = "throw"), (n.arg = c.arg));
                                    }
                                };
                            })(t, n, r)),
                            s
                        );
                    }
                    function tryCatch(t, e, n) {
                        try {
                            return { type: "normal", arg: t.call(e, n) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    e.wrap = wrap;
                    var l = {};
                    function Generator() {}
                    function GeneratorFunction() {}
                    function GeneratorFunctionPrototype() {}
                    var u = {};
                    define(u, r, function () {
                        return this;
                    });
                    var h = Object.getPrototypeOf,
                        p = h && h(h(values([])));
                    p && p !== n && o.call(p, r) && (u = p);
                    var f = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u));
                    function defineIteratorMethods(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            define(t, e, function (t) {
                                return this._invoke(e, t);
                            });
                        });
                    }
                    function AsyncIterator(t, e) {
                        function invoke(n, s, r, a) {
                            var c = tryCatch(t[n], t, s);
                            if ("throw" !== c.type) {
                                var l = c.arg,
                                    u = l.value;
                                return u && "object" == i(u) && o.call(u, "__await")
                                    ? e.resolve(u.__await).then(
                                          function (t) {
                                              invoke("next", t, r, a);
                                          },
                                          function (t) {
                                              invoke("throw", t, r, a);
                                          }
                                      )
                                    : e.resolve(u).then(
                                          function (t) {
                                              (l.value = t), r(l);
                                          },
                                          function (t) {
                                              return invoke("throw", t, r, a);
                                          }
                                      );
                            }
                            a(c.arg);
                        }
                        var n;
                        this._invoke = function (t, i) {
                            function callInvokeWithMethodAndArg() {
                                return new e(function (e, n) {
                                    invoke(t, i, e, n);
                                });
                            }
                            return (n = n ? n.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg());
                        };
                    }
                    function maybeInvokeDelegate(t, e) {
                        var n = t.iterator[e.method];
                        if (void 0 === n) {
                            if (((e.delegate = null), "throw" === e.method)) {
                                if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), maybeInvokeDelegate(t, e), "throw" === e.method)) return l;
                                (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                            }
                            return l;
                        }
                        var i = tryCatch(n, t.iterator, e.arg);
                        if ("throw" === i.type) return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), l;
                        var o = i.arg;
                        return o
                            ? o.done
                                ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = void 0)), (e.delegate = null), l)
                                : o
                            : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), l);
                    }
                    function pushTryEntry(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                    }
                    function resetTryEntry(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function Context(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(pushTryEntry, this), this.reset(!0);
                    }
                    function values(t) {
                        if (t) {
                            var e = t[r];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var n = -1,
                                    i = function next() {
                                        for (; ++n < t.length; ) if (o.call(t, n)) return (next.value = t[n]), (next.done = !1), next;
                                        return (next.value = void 0), (next.done = !0), next;
                                    };
                                return (i.next = i);
                            }
                        }
                        return { next: doneResult };
                    }
                    function doneResult() {
                        return { value: void 0, done: !0 };
                    }
                    return (
                        (GeneratorFunction.prototype = GeneratorFunctionPrototype),
                        define(f, "constructor", GeneratorFunctionPrototype),
                        define(GeneratorFunctionPrototype, "constructor", GeneratorFunction),
                        (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, c, "GeneratorFunction")),
                        (e.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
                        }),
                        (e.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : ((t.__proto__ = GeneratorFunctionPrototype), define(t, c, "GeneratorFunction")), (t.prototype = Object.create(f)), t;
                        }),
                        (e.awrap = function (t) {
                            return { __await: t };
                        }),
                        defineIteratorMethods(AsyncIterator.prototype),
                        define(AsyncIterator.prototype, a, function () {
                            return this;
                        }),
                        (e.AsyncIterator = AsyncIterator),
                        (e.async = function (t, n, i, o, s) {
                            void 0 === s && (s = Promise);
                            var r = new AsyncIterator(wrap(t, n, i, o), s);
                            return e.isGeneratorFunction(n)
                                ? r
                                : r.next().then(function (t) {
                                      return t.done ? t.value : r.next();
                                  });
                        }),
                        defineIteratorMethods(f),
                        define(f, c, "Generator"),
                        define(f, r, function () {
                            return this;
                        }),
                        define(f, "toString", function () {
                            return "[object Generator]";
                        }),
                        (e.keys = function (t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return (
                                e.reverse(),
                                function next() {
                                    for (; e.length; ) {
                                        var n = e.pop();
                                        if (n in t) return (next.value = n), (next.done = !1), next;
                                    }
                                    return (next.done = !0), next;
                                }
                            );
                        }),
                        (e.values = values),
                        (Context.prototype = {
                            constructor: Context,
                            reset: function reset(t) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(resetTryEntry), !t))
                                    for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                            },
                            stop: function stop() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function dispatchException(t) {
                                if (this.done) throw t;
                                var e = this;
                                function handle(n, i) {
                                    return (s.type = "throw"), (s.arg = t), (e.next = n), i && ((e.method = "next"), (e.arg = void 0)), !!i;
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n],
                                        s = i.completion;
                                    if ("root" === i.tryLoc) return handle("end");
                                    if (i.tryLoc <= this.prev) {
                                        var r = o.call(i, "catchLoc"),
                                            a = o.call(i, "finallyLoc");
                                        if (r && a) {
                                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                                        } else if (r) {
                                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                                        } else {
                                            if (!a) throw new Error("try statement without catch or finally");
                                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function abrupt(t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n];
                                    if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var s = i;
                                        break;
                                    }
                                }
                                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                                var r = s ? s.completion : {};
                                return (r.type = t), (r.arg = e), s ? ((this.method = "next"), (this.next = s.finallyLoc), l) : this.complete(r);
                            },
                            complete: function complete(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return (
                                    "break" === t.type || "continue" === t.type
                                        ? (this.next = t.arg)
                                        : "return" === t.type
                                        ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === t.type && e && (this.next = e),
                                    l
                                );
                            },
                            finish: function finish(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), resetTryEntry(n), l;
                                }
                            },
                            catch: function _catch(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var i = n.completion;
                                        if ("throw" === i.type) {
                                            var o = i.arg;
                                            resetTryEntry(n);
                                        }
                                        return o;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function delegateYield(t, e, n) {
                                return (this.delegate = { iterator: values(t), resultName: e, nextLoc: n }), "next" === this.method && (this.arg = void 0), l;
                            },
                        }),
                        e
                    );
                }
                (t.exports = _regeneratorRuntime), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            924: (t) => {
                function _typeof(e) {
                    return (
                        (t.exports = _typeof =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        (t.exports.__esModule = !0),
                        (t.exports.default = t.exports),
                        _typeof(e)
                    );
                }
                (t.exports = _typeof), (t.exports.__esModule = !0), (t.exports.default = t.exports);
            },
            264: (t, e, n) => {
                var i = n(213)();
                t.exports = i;
                try {
                    regeneratorRuntime = i;
                } catch (t) {
                    "object" == typeof globalThis ? (globalThis.regeneratorRuntime = i) : Function("r", "regeneratorRuntime = r")(i);
                }
            },
        },
        e = {};
    function __webpack_require__(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = (e[n] = { exports: {} });
        return t[n](o, o.exports, __webpack_require__), o.exports;
    }
    (__webpack_require__.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return __webpack_require__.d(e, { a: e }), e;
    }),
        (__webpack_require__.d = (t, e) => {
            for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (__webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (() => {
            "use strict";
            function _setPrototypeOf(t, e) {
                return (
                    (_setPrototypeOf = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function _setPrototypeOf(t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    _setPrototypeOf(t, e)
                );
            }
            function inheritsLoose_inheritsLoose(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), _setPrototypeOf(t, e);
            }
            function _getPrototypeOf(t) {
                return (
                    (_getPrototypeOf = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function _getPrototypeOf(t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    _getPrototypeOf(t)
                );
            }
            function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function _construct(t, e, n) {
                return (
                    (_construct = _isNativeReflectConstruct()
                        ? Reflect.construct.bind()
                        : function _construct(t, e, n) {
                              var i = [null];
                              i.push.apply(i, e);
                              var o = new (Function.bind.apply(t, i))();
                              return n && _setPrototypeOf(o, n.prototype), o;
                          }),
                    _construct.apply(null, arguments)
                );
            }
            function _wrapNativeSuper(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (
                    (_wrapNativeSuper = function _wrapNativeSuper(t) {
                        if (
                            null === t ||
                            !(function _isNativeFunction(t) {
                                return -1 !== Function.toString.call(t).indexOf("[native code]");
                            })(t)
                        )
                            return t;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, Wrapper);
                        }
                        function Wrapper() {
                            return _construct(t, arguments, _getPrototypeOf(this).constructor);
                        }
                        return (Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } })), _setPrototypeOf(Wrapper, t);
                    }),
                    _wrapNativeSuper(t)
                );
            }
            var t = (function (t) {
                function Exception(e) {
                    return t.call(this, e) || this;
                }
                return inheritsLoose_inheritsLoose(Exception, t), Exception;
            })(
                (function (t) {
                    function Throwable(e) {
                        return t.call(this, e) || this;
                    }
                    return inheritsLoose_inheritsLoose(Throwable, t), Throwable;
                })(_wrapNativeSuper(Error))
            );
            function Runnable() {}
            _interface(Runnable)._body(function run() {});
            var e = (function () {
                function System() {}
                return (
                    (System.currentTimeMillis = function currentTimeMillis() {
                        return new Date().getTime();
                    }),
                    System
                );
            })();
            function asyncGeneratorStep(t, e, n, i, o, s, r) {
                try {
                    var a = t[s](r),
                        c = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(c) : Promise.resolve(c).then(i, o);
            }
            var n = __webpack_require__(264),
                i = __webpack_require__.n(n);
            function Thread_Thread() {
                Thread_Thread._init.apply(Thread_Thread, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function OnDownloadObjectListener() {}
            _class(Thread_Thread)
                ._instance(
                    function (t) {
                        (t.id = -1), (t.runnuble = null);
                    },
                    function (t) {
                        t.isDrawFrame = !1;
                    },
                    "setDrawFrame",
                    function (t) {
                        this.isDrawFrame = t;
                    },
                    function (t) {
                        t.name = "";
                    },
                    "getName",
                    function () {
                        return this.name;
                    },
                    "setName",
                    function (t) {
                        this.name = t;
                    },
                    "isAlive",
                    function () {
                        return !1;
                    },
                    Thread_Thread.name,
                    function () {
                        Thread_Thread.Initialize(this);
                    },
                    [Runnable],
                    Thread_Thread.name,
                    function (t) {
                        Thread_Thread.Initialize(this), (this.runnuble = t), (this.runnuble.thread = this);
                    },
                    [Runnable, String],
                    Thread_Thread.name,
                    function (t, e) {
                        Thread_Thread.Initialize(this), (this.runnuble = t), (this.name = e);
                    },
                    "run",
                    function () {},
                    "start",
                    function () {
                        this.sleep(0);
                    },
                    "join",
                    function () {
                        this.interrupt();
                    },
                    "interrupt",
                    function () {
                        this.id >= 0 && (clearTimeout(this.id), (this.id = -1));
                    },
                    "sleep",
                    function (t) {
                        var e = null == this.runnuble ? this.run : this.runnuble.run,
                            n = null == this.runnuble ? this : this.runnuble;
                        this.isDrawFrame ? (this.id = requestAnimationFrame(bind(e, this))) : (this.id = setTimeout(bind(e, n), t));
                    }
                )
                ._static(
                    "interrupted",
                    function () {
                        return !1;
                    },
                    "Sleep",
                    (function () {
                        var t = (function _asyncToGenerator(t) {
                            return function () {
                                var e = this,
                                    n = arguments;
                                return new Promise(function (i, o) {
                                    var s = t.apply(e, n);
                                    function _next(t) {
                                        asyncGeneratorStep(s, i, o, _next, _throw, "next", t);
                                    }
                                    function _throw(t) {
                                        asyncGeneratorStep(s, i, o, _next, _throw, "throw", t);
                                    }
                                    _next(void 0);
                                });
                            };
                        })(
                            i().mark(function _callee(t) {
                                return i().wrap(function _callee$(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    "return",
                                                    new Promise(function (e) {
                                                        return setTimeout(e, t);
                                                    })
                                                );
                                            case 1:
                                            case "end":
                                                return e.stop();
                                        }
                                }, _callee);
                            })
                        );
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })()
                ),
                (globalContext.System = e),
                (globalContext.Thread = Thread_Thread),
                (globalContext.Runnable = Runnable),
                (globalContext.Exception = t);
            function OnProgressListener() {}
            function OnErrorListener() {}
            function OnDownloadListener() {}
            _interface(OnDownloadObjectListener._t({}))._instance("onDownload", function (t) {}), _interface(OnProgressListener)._instance("onProgress", function (t) {}), _interface(OnErrorListener)._instance("onError", function (t) {});
            var o = {};
            _interface(OnDownloadListener._t(o))._extends(OnDownloadObjectListener._t(o), OnProgressListener, OnErrorListener)._instance();
            var s = (function () {
                function Log() {}
                return (
                    (Log.println = function println(t, e, n) {
                        switch (t) {
                            case Log.VERBOSE:
                            case Log.DEBUG:
                                console.debug(e + " " + n);
                                break;
                            case Log.INFO:
                                console.info(e + " " + n);
                                break;
                            case Log.WARN:
                                console.warn(e + " " + n);
                                break;
                            case Log.ERROR:
                                console.error(e + " " + n);
                                break;
                            case Log.ASSERT:
                                console.assert(e + " " + n);
                        }
                    }),
                    (Log.d = function d(t, e) {
                        Log.println(Log.DEBUG, t, e);
                    }),
                    Log
                );
            })();
            function Loger() {
                Loger._init.apply(Loger, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Caller() {}
            function LogHolder() {}
            function _createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function _unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            (s.VERBOSE = 2),
                (s.DEBUG = 3),
                (s.INFO = 4),
                (s.WARN = 5),
                (s.ERROR = 6),
                (s.ASSERT = 7),
                _class(Loger)
                    ._instance(
                        function (t) {
                            t.caller = null;
                        },
                        "setCaller",
                        function (t) {
                            this.caller = t;
                        },
                        Loger.name,
                        function () {
                            Loger.Initialize(this), (this.caller = new Caller());
                        },
                        [String],
                        "e",
                        function (t) {
                            this.caller.log(s.ERROR, t);
                        },
                        [String, String],
                        "e",
                        function (t, e) {
                            this.caller.log(s.ERROR, t, e);
                        },
                        [String],
                        "w",
                        function (t) {
                            this.caller.log(s.WARN, t);
                        },
                        [String, String],
                        "w",
                        function (t, e) {
                            this.caller.log(s.WARN, t, e);
                        },
                        [String],
                        "i",
                        function (t) {
                            this.caller.log(s.INFO, t);
                        },
                        [String, String],
                        "i",
                        function (t, e) {
                            this.caller.log(s.INFO, t, e);
                        },
                        [String],
                        "d",
                        function (t) {
                            this.caller.log(s.DEBUG, t);
                        },
                        [String, String],
                        "d",
                        function (t, e) {
                            this.caller.log(s.DEBUG, t, e);
                        },
                        [String],
                        "v",
                        function (t) {
                            this.caller.log(s.VERBOSE, t);
                        },
                        [String, String],
                        "v",
                        function (t, e) {
                            this.caller.log(s.VERBOSE, t, e);
                        },
                        "log",
                        function (t, e, n) {
                            this.caller.log(t, e, n);
                        },
                        "exc",
                        function (t) {
                            this.caller.exc(t);
                        }
                    )
                    ._static("get", function () {
                        return LogHolder.loger;
                    }),
                _class(Caller)._instance(
                    [String],
                    "log",
                    function (t) {
                        log(s.DEBUG, "", t);
                    },
                    [Number, String],
                    "log",
                    function (t, e) {
                        this.log(t, "", e);
                    },
                    [Number, String, String],
                    "log",
                    function (t, e, n) {
                        s.println(t, e, n);
                    },
                    "exc",
                    function (t) {
                        t.printStackTrace();
                    }
                ),
                (Loger.Caller = Caller),
                _class(LogHolder)._instance("_static", function () {
                    this.loger = new Loger();
                });
            var r = null;
            function Resource() {
                Resource._init.apply(Resource, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ResourceHolder() {}
            _class(Resource)
                ._instance(
                    "_static",
                    function () {
                        (Resource.string = "string"),
                            (Resource.string_ru = "string_ru"),
                            (Resource.string_tr = "string_tr"),
                            (Resource.drawable = "drawable"),
                            (Resource.raw = "raw"),
                            (Resource.raw_mp3 = "raw_mp3"),
                            (Resource.melody = "melody");
                    },
                    "_init",
                    function () {
                        (this.drawable = {}), (this.raw = {}), (this.listener = null);
                    },
                    Resource.name,
                    function () {
                        Resource.Initialize(this);
                    },
                    function addRes(t) {
                        if (r) for (var e in t) r[e] = Object.assign(r[e] ? r[e] : {}, t[e]);
                        else r = t;
                        return r;
                    },
                    function preload() {
                        var t = this,
                            e = navigator.language.toLowerCase();
                        e.contains("ru") && r.string_ru ? Object.assign(r.string, r.string_ru) : e.contains("tr") && r.string_tr && Object.assign(r.string, r.string_tr);
                        var n = new Audio(),
                            i = n.canPlayType("audio/ogg"),
                            o = n.canPlayType("audio/mpeg");
                        Loger.get().d("Resource", String.format("ogg: %s, mp3: %s", i, o)), "probably" != i && (Object.assign(r.raw, r.raw_mp3), "probably" != o && (r.melody = {}));
                        for (var s, a = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(r.drawable)); !(s = a()).done; ) {
                            var c = s.value,
                                l = new Image(),
                                u = r.drawable[c];
                            (l.isLoad = !1),
                                (this.drawable[u] = l),
                                (l.onload = bind(
                                    function (e) {
                                        (e.isLoad = !0), t.isComplite() && null != t.listener && t.listener.onDownload();
                                    },
                                    this,
                                    l
                                )),
                                (l.src = "res/drawable/" + u);
                        }
                        for (var h, p = new (window.AudioContext || window.webkitAudioContext)(), f = _createForOfIteratorHelperLoose(Object.getOwnPropertyNames(r.raw)); !(h = f()).done; ) {
                            var g = h.value;
                            if (p && r.melody[g])
                                !(function () {
                                    var e = r.raw[g],
                                        n = "res/raw/" + e,
                                        i = new XMLHttpRequest();
                                    i.open("GET", n, !0), (i.responseType = "arraybuffer");
                                    var o = p.createBufferSource();
                                    (o.isLoad = !1),
                                        (t.raw[e] = o),
                                        (i.onload = bind(
                                            function (e) {
                                                var n = i.response;
                                                p.decodeAudioData(
                                                    n,
                                                    bind(
                                                        function (t) {
                                                            (e.buffer = t), (e.isLoad = !0), this.isComplite() && null != this.listener && this.listener.onDownload();
                                                        },
                                                        t,
                                                        _1
                                                    )
                                                );
                                            },
                                            t,
                                            o
                                        )),
                                        i.send();
                                })();
                            else {
                                var m = new Audio(),
                                    S = r.raw[g];
                                (m.isLoad = !1),
                                    (this.raw[S] = m),
                                    m.addEventListener(
                                        "loadeddata",
                                        bind(
                                            function (e) {
                                                (e.isLoad = !0), t.isComplite() && null != t.listener && t.listener.onDownload();
                                            },
                                            _this,
                                            m
                                        )
                                    ),
                                    (m.crossorigin = "anonymous"),
                                    (m.src = "res/raw/" + S);
                            }
                        }
                    },
                    "isComplite",
                    function () {
                        for (var t, e = 0, n = Object.getOwnPropertyNames(this.drawable), i = _createForOfIteratorHelperLoose(n); !(t = i()).done; ) {
                            var o = t.value;
                            1 == this.drawable[o].isLoad && e++;
                        }
                        for (var s, r = Object.getOwnPropertyNames(this.raw), a = _createForOfIteratorHelperLoose(r); !(s = a()).done; ) {
                            var c = s.value;
                            1 == this.raw[c].isLoad && e++;
                        }
                        return null != this.listener && this.listener.onProgress((100 * e) / (n.length + r.length)), e == n.length + r.length;
                    },
                    function setListener(t) {
                        this.listener = t;
                    },
                    "getString",
                    function (t) {
                        return t;
                    },
                    "getImage",
                    function (t) {
                        return this.drawable[t];
                    },
                    "getAudio",
                    function (t) {
                        return this.raw[t];
                    },
                    "getIdentifier",
                    function (t, e) {
                        return r[e][t];
                    },
                    "getResourceEntryName",
                    function (t) {
                        return t.substring(0, t.indexOf("."));
                    }
                )
                ._static(function get() {
                    return ResourceHolder.resource;
                }),
                _class(ResourceHolder)._instance("_static", function () {
                    this.resource = new Resource();
                });
            var a = (function () {
                    function SharedPreferences(t) {
                        this.name = t;
                        try {
                            this.obj = JSON.parse(localStorage.getItem(this.name));
                        } catch (t) {
                            console.warn(exc);
                        }
                        null == this.obj && (this.obj = {});
                    }
                    var t = SharedPreferences.prototype;
                    return (
                        (t.edit = function edit() {
                            return new c(this);
                        }),
                        (t.contains = function contains(t) {
                            return void 0 !== this.obj[t];
                        }),
                        SharedPreferences
                    );
                })(),
                c = (function () {
                    function Editor(t) {
                        this.sp = t;
                    }
                    var t = Editor.prototype;
                    return (
                        (t.putBoolean = function putBoolean(t, e) {
                            this.sp.obj[t] = e;
                        }),
                        (t.apply = function apply() {
                            try {
                                localStorage.setItem(this.sp.name, JSON.stringify(this.sp.obj));
                            } catch (t) {
                                console.warn(t);
                            }
                        }),
                        Editor
                    );
                })();
            function Context() {
                Context._init.apply(Context, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Application() {
                Application._init.apply(Application, [this].concat(Array.prototype.slice.call(arguments)));
            }
            (a.Editor = c),
                _class(Context)._body(
                    Context.name,
                    function () {},
                    "getApplicationContext",
                    function () {
                        return this;
                    },
                    "getResources",
                    function () {
                        return Resource.get();
                    },
                    "getString",
                    function (t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        return String.format.apply(String, [t].concat(n));
                    },
                    "getSharedPreferences",
                    function (t, e) {
                        return new a(t);
                    }
                ),
                _class(Application)._extends(Context)._body();
            var l = { RGB_565: 5, ARGB_8888: 8 };
            function Bitmap() {
                Bitmap._init.apply(Bitmap, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(Bitmap)._body(
                "_static",
                function () {
                    this.Config = l;
                },
                "getConfig",
                function () {
                    return Bitmap.Config.ARGB_8888;
                },
                function (t) {
                    (t.imageBitmap = null), (t.density = 160), (t.isClose = !1);
                },
                [HTMLCanvasElement],
                Bitmap.name,
                function (t) {
                    Bitmap.Initialize(this), (this.imageBitmap = t);
                },
                [HTMLImageElement],
                Bitmap.name,
                function (t) {
                    Bitmap.Initialize(this), (this.imageBitmap = t);
                },
                [HTMLVideoElement],
                Bitmap.name,
                function (t) {
                    Bitmap.Initialize(this), (this.imageBitmap = t);
                },
                "getWidth",
                function () {
                    return this.imageBitmap.width;
                },
                "getHeight",
                function () {
                    return this.imageBitmap.height;
                },
                "getDensity",
                function () {
                    return this.density;
                },
                "setDensity",
                function (t) {
                    this.density = t;
                },
                "recycle",
                function () {
                    null != this.imageBitmap && (this.imageBitmap.close && this.imageBitmap.close(), (this.isClose = !0));
                },
                "isRecycled",
                function () {
                    return this.isClose;
                },
                "copy",
                function (t, e) {
                    return Bitmap.createScaledBitmap(this, this.getWidth(), this.getHeight(), !0);
                },
                "getPixel",
                function (t, e) {
                    var n = [0];
                    return this.getPixels(n, 0, 0, t, e, 1, 1), n[0];
                },
                "getPixels",
                function (t, e, n, i, o, s, r) {
                    for (var a = this.imageBitmap.getContext("2d").getImageData(i, o, s, r).data, c = e; c < t.length; c++) t[c] = (a[4 * c + 3] << 24) | (a[4 * c] << 16) | (a[4 * c + 1] << 8) | a[4 * c + 2];
                },
                "setPixels",
                function (t, e, n, i, o, s, r) {
                    for (var a = this.imageBitmap.getContext("2d"), c = a.createImageData(s, r), l = c.data, u = e; u < t.length; u++)
                        (l[4 * u] = (t[u] >> 16) & 255), (l[4 * u + 1] = (t[u] >> 8) & 255), (l[4 * u + 2] = 255 & t[u]), (l[4 * u + 3] = (t[u] >> 24) & 255);
                    a.putImageData(c, i, o);
                }
            ),
                Bitmap._static(
                    [Bitmap],
                    "createBitmap",
                    function (t) {
                        return new Bitmap(t.imageBitmap, t.getWidth(), t.getHeight(), !0);
                    },
                    "createBitmapCanvas",
                    function (t, e, n) {
                        var i = document.createElement("canvas");
                        return (i.width = t), (i.height = e), new Bitmap(i);
                    },
                    [Number, Number, Number],
                    "createBitmap",
                    function (t, e, n) {
                        var i = new Image();
                        return (i.src = "invis.gif"), (i.alt = ""), (i.width = t), (i.height = e), new Bitmap(i);
                    },
                    [Bitmap, Number, Number, Number, Number],
                    "createBitmap",
                    function (t, e, n, i, o) {
                        return Bitmap.create(t, e, n, i, o, 0, 0, i, o);
                    },
                    "createScaledBitmap",
                    function (t, e, n, i) {
                        return Bitmap.create(t, 0, 0, t.getWidth(), t.getHeight(), 0, 0, e, n, i);
                    },
                    "create",
                    function (t, e, n, i, o, s, r, a, c, l) {
                        void 0 === l && (l = !0);
                        var u = document.createElement("canvas");
                        (u.width = a), (u.height = c);
                        var h = u.getContext("2d");
                        return h.save(), (h.imageSmoothingEnabled = l), h.drawImage(t.imageBitmap, e, n, i, o, s, r, a, c), h.restore(), new Bitmap(u);
                    }
                );
            var u = (function () {
                    function BitmapFactory() {}
                    return (
                        (BitmapFactory.decodeResource = function decodeResource(t, e, n) {
                            return new Bitmap(t.getImage(e));
                        }),
                        (BitmapFactory.decodeByteArray = function decodeByteArray(t, e, n, i) {
                            var o = (window.URL || window.webkitURL).createObjectURL(t),
                                s = new Image();
                            return (s.src = o), new Bitmap(s);
                        }),
                        (BitmapFactory.decodeDataUrl = function decodeDataUrl(t) {
                            return new Promise(function (e, n) {
                                var i = new Image();
                                (i.src = t),
                                    (i.onload = function () {
                                        var t = new Bitmap(i).copy();
                                        e(t);
                                    }),
                                    (i.onerror = function (t) {
                                        n(t);
                                    });
                            });
                        }),
                        BitmapFactory
                    );
                })(),
                h = function Options() {
                    (this.inJustDecodeBounds = !1), (this.inSampleSize = 1);
                },
                p = (function () {
                    function Color(t, e, n, i) {
                        void 0 === i && (i = 255), (this.r = t), (this.g = e), (this.b = n), (this.a = i);
                    }
                    (Color.rgb = function rgb(t, e, n) {
                        return new Color(t, e, n);
                    }),
                        (Color.rgba = function rgba(t, e, n, i) {
                            return new Color(t, e, n, i);
                        }),
                        (Color.argb = function argb(t, e, n, i) {
                            return new Color(e, n, i, t);
                        }),
                        (Color.fromInt = function fromInt(t) {
                            return new Color((t >> 16) & 255, (t >> 8) & 255, (t >> 0) & 255, (t >> 24) & 255);
                        });
                    var t = Color.prototype;
                    return (
                        (t.setAlpha = function setAlpha(t) {
                            this.a = t;
                        }),
                        (t.toString = function toString() {
                            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a / 255 + ")";
                        }),
                        Color
                    );
                })();
            (p.BLACK = p.rgb(0, 0, 0)),
                (p.DKGRAY = p.rgb(68, 68, 68)),
                (p.GRAY = p.rgb(136, 136, 136)),
                (p.LTGRAY = p.rgb(204, 204, 204)),
                (p.WHITE = p.rgb(255, 255, 255)),
                (p.RED = p.rgb(255, 0, 0)),
                (p.GREEN = p.rgb(0, 255, 0)),
                (p.BLUE = p.rgb(0, 0, 255)),
                (p.YELLOW = p.rgb(255, 255, 0)),
                (p.CYAN = p.rgb(0, 255, 255)),
                (p.MAGENTA = p.rgb(255, 0, 255)),
                (p.TRANSPARENT = p.rgba(0, 0, 0, 0));
            var f = { FILL: 0, STROKE: 1, FILL_AND_STROKE: 2 },
                g = { LEFT: "left", CENTER: "center", RIGHT: "right" },
                S = (function () {
                    function Paint(t) {
                        (this.filterBitmap = void 0),
                            (this.color = void 0),
                            (this.alpha = 255),
                            (this.style = f.FILL),
                            (this.antiAlias = !1),
                            (this.strokeWidth = void 0),
                            (this.ilterBitmap = !1),
                            (this.pathEffect = void 0),
                            (this.shadow = void 0);
                    }
                    var t = Paint.prototype;
                    return (
                        (t.setXfermode = function setXfermode(t) {
                            this.xfermode = t;
                        }),
                        (t.isFilterBitmap = function isFilterBitmap() {
                            return this.filterBitmap;
                        }),
                        (t.setFilterBitmap = function setFilterBitmap(t) {
                            this.filterBitmap = t;
                        }),
                        (t.getColor = function getColor() {
                            return this.color;
                        }),
                        (t.setColor = function setColor(t) {
                            t instanceof p ? (this.color = t) : "number" == typeof t && (this.color = p.fromInt(t));
                        }),
                        (t.getAlpha = function getAlpha() {
                            return this.alpha;
                        }),
                        (t.setAlpha = function setAlpha(t) {
                            this.alpha = t;
                        }),
                        (t.getStyle = function getStyle() {
                            return this.style;
                        }),
                        (t.setStyle = function setStyle(t) {
                            this.style = t;
                        }),
                        (t.setAntiAlias = function setAntiAlias(t) {
                            this.antiAlias = t;
                        }),
                        (t.getStrokeWidth = function getStrokeWidth() {
                            return this.strokeWidth;
                        }),
                        (t.setStrokeWidth = function setStrokeWidth(t) {
                            this.strokeWidth = t;
                        }),
                        (t.setFilterBitmap = function setFilterBitmap(t) {
                            this.filterBitmap = t;
                        }),
                        (t.getTextAlign = function getTextAlign() {
                            return this.textAlign;
                        }),
                        (t.setTextAlign = function setTextAlign(t) {
                            this.textAlign = t;
                        }),
                        (t.getTextSize = function getTextSize() {
                            return this.textSize;
                        }),
                        (t.setTextSize = function setTextSize(t) {
                            this.textSize = t;
                        }),
                        (t.getTypeface = function getTypeface() {
                            return this.typeface;
                        }),
                        (t.setTypeface = function setTypeface(t) {
                            this.typeface = t;
                        }),
                        (t.setShader = function setShader(t) {
                            this.shader = t;
                        }),
                        (t.setMaskFilter = function setMaskFilter(t) {
                            this.maskFilter = t;
                        }),
                        (t.setPathEffect = function setPathEffect(t) {
                            this.pathEffect = t;
                        }),
                        (t.setShadow = function setShadow(t) {
                            this.shadow = t;
                        }),
                        Paint
                    );
                })();
            (S.FILTER_BITMAP_FLAG = 2), (S.Style = f), (S.Align = g);
            var _ = function CornerPathEffect(t) {
                    (this.corner = void 0), (this.corner = t);
                },
                v = function Shadow(t, e, n) {
                    (this.blur = void 0), (this.color = void 0), (this.offsetX = void 0), (this.offsetY = void 0), (this.blur = 5), (this.color = t), (this.offsetX = e), (this.offsetY = n);
                },
                A = function PorterDuff() {};
            A.Mode = { SRC_OVER: "source-over", SRC_IN: "source-in", DST_OVER: "destination-over", DST_IN: "destination-in", COPY: "copy" };
            var w = function PorterDuffXfermode(t) {
                    (this.mode = void 0), (this.mode = t);
                },
                C = function Shader() {};
            C.TileMode = { CLAMP: 0, REPEAT: 1 };
            var P = (function (t) {
                    function BitmapShader(e, n, i) {
                        var o;
                        switch ((((o = t.call(this) || this).bitmap = null), (o.repeat = "repeat"), (o.bitmap = e), n)) {
                            case C.TileMode.CLAMP:
                                o.repeat = "no-repeat";
                            case C.TileMode.REPEAT:
                                o.repeat = "repeat";
                        }
                        return o;
                    }
                    return inheritsLoose_inheritsLoose(BitmapShader, t), BitmapShader;
                })(C),
                T = (function (t) {
                    function LinearGradient(e, n, i, o, s, r, a) {
                        var c;
                        return ((c = t.call(this) || this).x0 = e), (c.y0 = n), (c.x1 = i), (c.y1 = o), (c.colors = s), (c.positions = r), (c.tileMode = a), c;
                    }
                    return inheritsLoose_inheritsLoose(LinearGradient, t), LinearGradient;
                })(C),
                L = (function (t) {
                    function RadialGradient(e, n, i, o, s, r) {
                        var a;
                        return ((a = t.call(this) || this).centerX = e), (a.centerY = n), (a.radius = i), (a.colors = o), (a.stops = s), (a.tileMode = r), a;
                    }
                    return inheritsLoose_inheritsLoose(RadialGradient, t), RadialGradient;
                })(C);
            function RectF() {
                RectF._init.apply(RectF, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Rect() {
                Rect._init.apply(Rect, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(RectF)._body(
                RectF.name,
                function () {
                    this.set(0, 0, 0, 0);
                },
                [Number, Number, Number, Number],
                RectF.name,
                function (t, e, n, i) {
                    this.set(t, e, n, i);
                },
                [Number, Number, Number, Number],
                "set",
                function (t, e, n, i) {
                    (this.left = t), (this.top = e), (this.right = n), (this.bottom = i);
                },
                [RectF],
                "set",
                function (t) {
                    (this.left = t.left), (this.top = t.top), (this.right = t.right), (this.bottom = t.bottom);
                },
                "offset",
                function (t, e) {
                    (this.left += t), (this.top += e), (this.right += t), (this.bottom += e);
                },
                "getWidth",
                function () {
                    return this.right - this.left;
                },
                "getHeight",
                function () {
                    return this.bottom - this.top;
                }
            ),
                _class(Rect)
                    ._extends(RectF)
                    ._body(
                        Rect.name,
                        function () {
                            RectF._init(this);
                        },
                        [Number, Number, Number, Number],
                        Rect.name,
                        function (t, e, n, i) {
                            RectF._init(this, parseInt(t), parseInt(e), parseInt(n), parseInt(i));
                        },
                        [Number, Number, Number, Number],
                        "set",
                        function (t, e, n, i) {
                            RectF.set(this, parseInt(t), parseInt(e), parseInt(n), parseInt(i));
                        },
                        [Rect],
                        "set",
                        function (t) {
                            RectF.set(this, parseInt(t.left), parseInt(t.top), parseInt(t.right), parseInt(t.bottom));
                        },
                        "offset",
                        function (t, e) {
                            (t = parseInt(t)), (e = parseInt(e)), RectF.offset(this, t, e);
                        }
                    );
            var D = (function (t) {
                    function BlurMaskFilter(e, n) {
                        var i;
                        return (i = t.call(this) || this), BlurMaskFilter.Blur.NORMAL, (i.radius = e), (i.style = n), i;
                    }
                    return inheritsLoose_inheritsLoose(BlurMaskFilter, t), BlurMaskFilter;
                })(function MaskFilter() {}),
                E = { NORMAL: 0, SOLID: 1, OUTER: 2, INNER: 3 };
            D.Blur = E;
            var I = (function (t) {
                function DashPathEffect(e, n) {
                    var i;
                    return ((i = t.call(this) || this).intervals = e), (i.phase = n), i;
                }
                return inheritsLoose_inheritsLoose(DashPathEffect, t), DashPathEffect;
            })(function PathEffect() {});
            function Canvas_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function Canvas_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Canvas_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Canvas_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function Canvas_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function Canvas_Canvas() {
                Canvas_Canvas._init.apply(Canvas_Canvas, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(Canvas_Canvas)
                ._static(
                    "fromNode",
                    function (t) {
                        return new Canvas_Canvas(t);
                    },
                    "checkCompos",
                    function () {
                        var t = Bitmap.createBitmap(20, 20, l.ARGB_8888),
                            e = new Canvas_Canvas(t),
                            n = new S();
                        return (
                            n.setStyle(f.FILL),
                            n.setStrokeWidth(0),
                            n.setAntiAlias(!0),
                            n.setColor(p.GREEN),
                            e.drawRect(5, 5, 15, 15, n),
                            n.setColor(p.BLACK),
                            n.setMaskFilter(new D(2, D.Blur.NORMAL)),
                            n.setXfermode(new w(A.Mode.DST_OVER)),
                            e.drawRect(2, 2, 18, 18, n),
                            255 == p.fromInt(t.getPixel(10, 10)).g
                        );
                    }
                )
                ._instance(
                    "_init",
                    function () {
                        (this.canvas = null), (this.context = null);
                    },
                    Canvas_Canvas.name,
                    function () {
                        Canvas_Canvas.Initialize(this);
                    },
                    [Bitmap],
                    Canvas_Canvas.name,
                    function (t) {
                        Canvas_Canvas.Initialize(this),
                            t.imageBitmap instanceof HTMLCanvasElement
                                ? ((this.canvas = t.imageBitmap), (this.context = t.imageBitmap.getContext("2d")))
                                : t.imageBitmap instanceof HTMLImageElement &&
                                  ((this.canvas = document.createElement("canvas")),
                                  (this.canvas.width = t.getWidth()),
                                  (this.canvas.height = t.getHeight()),
                                  (this.context = this.canvas.getContext("2d")),
                                  this.drawBitmap(t, 0, 0, null),
                                  (t.imageBitmap = this.canvas));
                    },
                    [HTMLCanvasElement],
                    Canvas_Canvas.name,
                    function (t) {
                        Canvas_Canvas.Initialize(this), (this.canvas = t), (this.context = t.getContext("2d"));
                    },
                    "getWidth",
                    function () {
                        return this.canvas.width;
                    },
                    "getHeight",
                    function () {
                        return this.canvas.height;
                    },
                    "save",
                    function () {
                        this.context.save();
                    },
                    "restore",
                    function () {
                        this.context.restore();
                    },
                    "translate",
                    function (t, e) {
                        this.context.translate(t, e);
                    },
                    "scale",
                    function (t, e) {
                        this.context.scale(t, e);
                    },
                    "rotate",
                    function (t) {
                        this.context.rotate((t * Math.PI) / 180);
                    },
                    "clipRect",
                    function (t, e, n, i) {
                        var o = new Path2D();
                        o.rect(t, e, n - t, i - e), this.context.clip(o);
                    },
                    "clipPath",
                    function (t, e) {
                        var n = !1;
                        if ((this.context.beginPath(), this.addPath(t), this.context.closePath(), this.context.clip(e && e == R.DIFFERENCE ? "evenodd" : "nonzero"), e)) {
                            (this.context.fillStyle = "red"), this.context.fill();
                            for (var i = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), o = 0; o < i.data.length; o++) 0 == i.data[o] || n || (n = !0), (i.data[o] = 0);
                            return this.context.putImageData(i, 0, 0), n;
                        }
                    },
                    "clipOutPath",
                    function (t) {
                        (ret = !1), this.context.beginPath(), this.addPath(t), this.context.closePath(), this.context.clip("evenodd"), (this.context.fillStyle = "red"), this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                        for (var e, n = Canvas_createForOfIteratorHelperLoose(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height).data); !(e = n()).done; ) {
                            if (0 != e.value) {
                                ret = !0;
                                break;
                            }
                        }
                        return this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), ret;
                    },
                    "setPaint",
                    function (t) {
                        if (t) {
                            var e;
                            if (t.shader) {
                                if (t.shader instanceof P) e = this.context.createPattern(t.shader.bitmap.imageBitmap, t.shader.repeat);
                                else if (t.shader instanceof T) {
                                    e = this.context.createLinearGradient(t.shader.x0, t.shader.y0, t.shader.x1, t.shader.y1);
                                    for (var n = 0; n < t.shader.positions.length; n++) e.addColorStop(t.shader.positions[n], t.shader.colors[n]);
                                } else if (t.shader instanceof L) {
                                    e = this.context.createRadialGradient(t.shader.centerX, t.shader.centerY, 0, t.shader.centerX, t.shader.centerY, t.shader.radius);
                                    for (var i = 0; i < t.shader.stops.length; i++) e.addColorStop(t.shader.stops[i], t.shader.colors[i]);
                                }
                            } else t.color && (e = t.color.toString());
                            switch (
                                (this.context.lineWidth != t.getStrokeWidth() && (this.context.lineWidth = t.getStrokeWidth()),
                                255 != t.alpha && (this.context.globalAlpha = t.alpha / 255),
                                t.xfermode && (this.context.globalCompositeOperation = t.xfermode.mode),
                                t.pathEffect && t.pathEffect instanceof I && (this.context.setLineDash(t.pathEffect.intervals), (this.context.lineDashOffset = t.pathEffect.phase)),
                                t.maskFilter && t.maskFilter.style == E.NORMAL && (this.context.filter = "blur(" + t.maskFilter.radius / 2 + "px)"),
                                t.getStyle())
                            ) {
                                case S.Style.FILL:
                                    this.context.fillStyle = e;
                                    break;
                                case S.Style.STROKE:
                                    this.context.strokeStyle = e;
                                    break;
                                case S.Style.FILL_AND_STROKE:
                                    (this.context.fillStyle = e), (this.context.strokeStyle = e);
                            }
                        }
                    },
                    "setFont",
                    function (t) {
                        var e = "10px";
                        t.getTextSize() && (e = t.getTextSize() + "px ");
                        var n = "left";
                        t.textAlign && (n = t.getTextAlign());
                        var i = "sans-serif",
                            o = "";
                        t.getTypeface() && ((i = t.getTypeface().familyName), (o = t.getTypeface().style + " ")), (this.context.textBaseline = "ideographic"), (this.context.textAlign = n), (this.context.font = o + e + i);
                    },
                    "drawPaint",
                    function (t) {
                        this.context.save(), this.setPaint(t), this.context.rect(0, 0, this.canvas.width, this.canvas.height), this.context.fill(), this.context.restore();
                    },
                    [Bitmap, Number, Number, S],
                    "drawBitmap",
                    function (t, e, n, i) {
                        this.context.save(), this.setPaint(i), this.context.drawImage(t.imageBitmap, e, n), this.context.restore();
                    },
                    [Bitmap, Rect, RectF, S],
                    "drawBitmap",
                    function (t, e, n, i) {
                        this.context.save(), this.setPaint(i), this.context.drawImage(t.imageBitmap, e.left, e.top, e.getWidth(), e.getHeight(), n.left, n.top, n.getWidth(), n.getHeight()), this.context.restore();
                    },
                    "drawRect",
                    function (t, e, n, i, o) {
                        this.context.save(),
                            this.setPaint(o),
                            o.getStyle() == S.Style.FILL
                                ? this.context.fillRect(t, e, n - t, i - e)
                                : o.getStyle() == S.Style.STROKE
                                ? this.context.strokeRect(t, e, n - t, i - e)
                                : o.getStyle() == S.Style.FILL_AND_STROKE && (this.context.fillRect(t, e, n - t, i - e), this.context.strokeRect(t, e, n - t, i - e)),
                            this.context.restore();
                    },
                    "drawRoundRect",
                    function (t, e, n, i) {
                        if (!(t.getWidth() < e || t.getHeight() < n)) {
                            this.context.save(), this.setPaint(i);
                            var o = new Path2D();
                            o.moveTo(t.left, t.top + n),
                                o.ellipse
                                    ? (o.ellipse(t.left + e, t.top + n, e, n, 0, (180 * Math.PI) / 180, (270 * Math.PI) / 180),
                                      o.ellipse(t.right - e, t.top + n, e, n, 0, (270 * Math.PI) / 180, (360 * Math.PI) / 180),
                                      o.ellipse(t.right - e, t.bottom - n, e, n, 0, (0 * Math.PI) / 180, (90 * Math.PI) / 180),
                                      o.ellipse(t.left + e, t.bottom - n, e, n, 0, (90 * Math.PI) / 180, (180 * Math.PI) / 180))
                                    : (o.arc(t.left + e, t.top + n, e, (180 * Math.PI) / 180, (270 * Math.PI) / 180),
                                      o.arc(t.right - e, t.top + n, e, (270 * Math.PI) / 180, (360 * Math.PI) / 180),
                                      o.arc(t.right - e, t.bottom - n, e, (0 * Math.PI) / 180, (90 * Math.PI) / 180),
                                      o.arc(t.left + e, t.bottom - n, e, (90 * Math.PI) / 180, (180 * Math.PI) / 180)),
                                o.closePath(),
                                i.getStyle() == S.Style.FILL ? this.context.fill(o) : i.getStyle() == S.Style.STROKE ? this.context.stroke(o) : i.getStyle() == S.Style.FILL_AND_STROKE && (this.context.fill(o), this.context.stroke(o)),
                                this.context.restore();
                        }
                    },
                    "addPath",
                    function (e) {
                        this.context.save();
                        for (var n, i = Canvas_createForOfIteratorHelperLoose(e.matrix.transforms); !(n = i()).done; ) {
                            var o = n.value;
                            switch (o.transform) {
                                case "translate":
                                    this.context.translate(o.x, o.y);
                                    break;
                                case "rotate":
                                    this.context.rotate(o.rotate);
                                    break;
                                case "scale":
                                    this.context.scale(o.scaleX, o.scaleY);
                            }
                        }
                        for (var s, r = Canvas_createForOfIteratorHelperLoose(e.actions); !(s = r()).done; ) {
                            var a = s.value;
                            switch (a.action) {
                                case "moveTo":
                                    this.context.moveTo(a.x, a.y);
                                    break;
                                case "lineTo":
                                    this.context.lineTo(a.x, a.y);
                                    break;
                                case "arcTo":
                                    this.context.ellipse ? this.context.ellipse(a.x, a.y, a.radiusX, a.radiusY, 0, a.startAngle, a.endAngle, a.dir) : this.context.arc(a.x, a.y, a.radiusX, a.startAngle, a.endAngle, a.dir);
                                    break;
                                case "addRect":
                                    this.context.rect(a.left, a.top, a.right, a.bottom);
                                    break;
                                case "addRectRound":
                                    this.context.moveTo(a.left, a.top + a.ry),
                                        this.context.ellipse
                                            ? (this.context.ellipse(a.left + a.rx, a.top + a.ry, a.rx, a.ry, 0, (180 * Math.PI) / 180, (270 * Math.PI) / 180),
                                              this.context.ellipse(a.right - a.rx, a.top + a.ry, a.rx, a.ry, 0, (270 * Math.PI) / 180, (360 * Math.PI) / 180),
                                              this.context.ellipse(a.right - a.rx, a.bottom - a.ry, a.rx, a.ry, 0, (0 * Math.PI) / 180, (90 * Math.PI) / 180),
                                              this.context.ellipse(a.left + a.rx, a.bottom - a.ry, a.rx, a.ry, 0, (90 * Math.PI) / 180, (180 * Math.PI) / 180))
                                            : (this.context.arc(a.left + a.rx, a.top + a.ry, a.rx, (180 * Math.PI) / 180, (270 * Math.PI) / 180),
                                              this.context.arc(a.right - a.rx, a.top + a.ry, a.rx, (270 * Math.PI) / 180, (360 * Math.PI) / 180),
                                              this.context.arc(a.right - a.rx, a.bottom - a.ry, a.rx, (0 * Math.PI) / 180, (90 * Math.PI) / 180),
                                              this.context.arc(a.left + a.rx, a.bottom - a.ry, a.rx, (90 * Math.PI) / 180, (180 * Math.PI) / 180)),
                                        this.context.closePath();
                                    break;
                                case "addCircle":
                                    this.context.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, a.dir);
                                    break;
                                case "addOval":
                                    this.context.ellipse ? this.context.ellipse(a.x, a.y, a.radiusX, a.radiusY, 0, 0, 2 * Math.PI, a.dir) : this.context.arc(a.x, a.y, a.radiusX, 0, 2 * Math.PI, a.dir);
                                    break;
                                case "close":
                                    break;
                                default:
                                    throw new t(String.format("addPath not support action '%s'", a.action));
                            }
                        }
                        for (var c, l = Canvas_createForOfIteratorHelperLoose(e.paths); !(c = l()).done; ) {
                            var u = c.value;
                            this.addPath(u);
                        }
                        this.context.restore();
                    },
                    "drawPath",
                    function (t, e) {
                        this.context.save(), this.context.beginPath(), this.addPath(t), this.setPaint(e);
                        var n = 1 & t.getFillType() ? "evenodd" : "nonzero";
                        e.getStyle() == S.Style.FILL ? this.context.fill(n) : e.getStyle() == S.Style.STROKE ? this.context.stroke() : e.getStyle() == S.Style.FILL_AND_STROKE && (this.context.fill(n), this.context.stroke()),
                            this.context.closePath(),
                            this.context.restore();
                    },
                    "drawText",
                    function (t, e, n, i) {
                        this.context.save(),
                            this.setPaint(i),
                            this.setFont(i),
                            (i.getStyle() != S.Style.FILL && i.getStyle() != S.Style.FILL_AND_STROKE) || this.context.fillText(t, e, n),
                            i.getStyle() == S.Style.STROKE && this.context.strokeText(t, e, n),
                            this.context.restore();
                    },
                    "drawColor",
                    function (t) {
                        this.context.save(), (this.context.fillStyle = t.toString()), this.context.fill(), this.context.restore();
                    },
                    "drawLine",
                    function (t, e, n, i, o) {
                        this.context.save(), this.setPaint(o), this.context.beginPath(), this.context.moveTo(t, e), this.context.lineTo(n, i), this.context.stroke(), this.context.restore();
                    },
                    "drawPoint",
                    function (t, e, n) {
                        this.context.save(), this.setPaint(n), this.context.strokeRect(t, e, 1, 1), this.context.restore();
                    },
                    "drawCircle",
                    function (t, e, n, i) {
                        this.context.save(),
                            this.setPaint(i),
                            this.context.beginPath(),
                            this.context.arc(t, e, n, 0, 2 * Math.PI),
                            i.getStyle() == S.Style.FILL ? this.context.fill() : i.getStyle() == S.Style.STROKE ? this.context.stroke() : i.getStyle() == S.Style.FILL_AND_STROKE && (this.context.fill(), this.context.stroke()),
                            this.context.restore();
                    },
                    "drawArc",
                    function (t, e, n, i, o) {
                        this.context.save(), this.setPaint(o);
                        var s = 0.5 * (t.left + t.right),
                            r = 0.5 * (t.top + t.bottom),
                            a = (e * Math.PI) / 180,
                            c = a + (n * Math.PI) / 180;
                        this.context.beginPath(),
                            this.context.ellipse(s, r, s - t.left, r - t.top, 0, a, c),
                            o.getStyle() == S.Style.FILL ? this.context.fill() : o.getStyle() == S.Style.STROKE ? this.context.stroke() : o.getStyle() == S.Style.FILL_AND_STROKE && (this.context.fill(), this.context.stroke()),
                            this.context.restore();
                    },
                    "clear",
                    function () {
                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    }
                ),
                (Canvas_Canvas.isComposTrue = Canvas_Canvas.checkCompos());
            var R = { DIFFERENCE: 0, INTERSECT: 1 },
                M = (function () {
                    function Locale() {}
                    Locale.getDefault = function getDefault() {
                        return new Locale();
                    };
                    var t = Locale.prototype;
                    return (
                        (t.getLanguage = function getLanguage() {
                            return navigator.language.substr(0, 2);
                        }),
                        (t.getCountry = function getCountry() {
                            return navigator.language.substr(navigator.language.indexOf("-") + 1).toUpperCase();
                        }),
                        Locale
                    );
                })();
            function Orientation() {}
            _enum(Orientation)._body({ H: 1, V: 2, HV: 3 });
            var N = {
                WT: 0,
                HT: 0,
                WW: 0,
                HW: 0,
                FT: 0,
                FB: 0,
                FL: 0,
                FR: 0,
                WB: 0,
                HB: 0,
                O: 0,
                SD: 1,
                SP: 1,
                SE: 1,
                OXE: 0,
                OYE: 0,
                SN: 0,
                P: 0,
                DEN: 0,
                DEN_DEF: 160,
                getDenFactor: function getDenFactor() {
                    return this.DEN / this.DEN_DEF;
                },
                getDenSize: function getDenSize(t) {
                    return (t * this.DEN) / this.DEN_DEF;
                },
            };
            function ScenaParametr_ScenaParametr() {}
            function ModifyType() {}
            function MotionEvent_MotionEvent() {
                MotionEvent_MotionEvent._init.apply(MotionEvent_MotionEvent, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ScenaParametr_ScenaParametr)
                ._instance("_static", function () {
                    (this.TAG = "ScenaParametr"), (this.P = N), (this.sizesPort = [320, 480, 640, 800, 960, 1120, 1280]), (this.sizesLand = [480, 720, 960, 1200, 1440, 1680, 1920]), this.sizePort, this.sizeLand, this.orientation, this.iM;
                })
                ._static(
                    "init",
                    function (t, e, n, i) {
                        (ScenaParametr_ScenaParametr.orientation = e), (ScenaParametr_ScenaParametr.sizePort = n), (ScenaParametr_ScenaParametr.sizeLand = i);
                        var o = 1288,
                            s = 721;
                        e == Orientation.H ? ((o = 1288), (s = 721)) : e == Orientation.V && ((o = 721), (s = 1288)), ScenaParametr_ScenaParametr.reinit(o, s);
                    },
                    "reinit",
                    function (t, e) {
                        if (ScenaParametr_ScenaParametr.orientation == Orientation.H) {
                            (N.WT = Math.max(t, e)), (N.HT = Math.min(t, e));
                            var n = N.WT / ScenaParametr_ScenaParametr.sizeLand,
                                i = N.HT / ScenaParametr_ScenaParametr.sizePort;
                            i > n ? ((N.WW = N.WT), (N.HW = parseInt(ScenaParametr_ScenaParametr.sizeLand * n))) : ((N.HW = N.HT), (N.WW = parseInt(ScenaParametr_ScenaParametr.sizeLand * i)));
                        } else if (ScenaParametr_ScenaParametr.orientation == Orientation.V) {
                            (N.WT = Math.min(t, e)), (N.HT = Math.max(t, e));
                            var o = N.WT / ScenaParametr_ScenaParametr.sizePort,
                                r = N.HT / ScenaParametr_ScenaParametr.sizeLand;
                            r > o ? ((N.WW = N.WT), (N.HW = parseInt(ScenaParametr_ScenaParametr.sizeLand * o))) : ((N.HW = N.HT), (N.WW = parseInt(ScenaParametr_ScenaParametr.sizePort * r)));
                        } else ScenaParametr_ScenaParametr.orientation == Orientation.HV && ((N.WT = N.WW = t), (N.HT = N.HW = e));
                        s.d(ScenaParametr_ScenaParametr.TAG, String.format(M.getDefault(), "Reinit wh:%dx%d WH:%dx%d", t, e, N.WT, N.HT)),
                            (N.FT = (N.HT - N.HW) / 2),
                            (N.FL = (N.WT - N.WW) / 2),
                            (N.FB = N.FT + N.HW),
                            (N.FR = N.FL + N.WW),
                            (N.O = N.WT > N.HT ? 90 : 0),
                            (N.SD = N.SP = N.WT > N.HT ? N.HT / ScenaParametr_ScenaParametr.sizePort : N.WT / ScenaParametr_ScenaParametr.sizePort);
                    },
                    "BitmapFromUri",
                    function (t, e) {
                        B = null;
                        try {
                            (BU = MediaStore.Images.Media.getBitmap(t.getContentResolver(), e)), (B = Bitmap.createScaledBitmap(BU, int(1.5 * N.HT * (BU.getWidth() / BU.getHeight())), int(1.5 * N.HT), !0)), B != BU && BU.recycle();
                        } catch (t) {
                            t.printStackTrace();
                        }
                        return B;
                    },
                    "decodeFile",
                    function (t) {
                        bitmap = null;
                        try {
                            (O = new Options()),
                                (O.inJustDecodeBounds = !0),
                                u.decodeFile(t, O),
                                (O.inJustDecodeBounds = !1),
                                (O.inSampleSize = O.outHeight / N.HT),
                                (O.inDither = !0),
                                (bitmap = u.decodeFile(t, O)),
                                bitmap.setDensity(N.DEN_DEF);
                        } catch (t) {
                            t.printStackTrace();
                        }
                        return bitmap;
                    },
                    "decodeResource",
                    function (t, e) {
                        var n;
                        try {
                            n = u.decodeResource(t.getResources(), e, {});
                        } catch (t) {
                            Loger.get().w(String.format("loadImageContext from file id: %d failed with error: %s!", e, t.getMessage())), Loger.get().exc(t), (n = Bitmap.createBitmap(1, 1, l.ALPHA_8));
                        }
                        return null != n && n.setDensity(N.DEN_DEF), n;
                    },
                    "getScaled",
                    function (t, e, n) {
                        void 0 === e && (e = 1), void 0 === n && (n = 1);
                        var i,
                            o = parseInt((t.getWidth() / e) * N.SD) * e,
                            s = parseInt((t.getHeight() / n) * N.SD) * n;
                        return (
                            o > 0 && s > 0
                                ? (i = Bitmap.createScaledBitmap(t, o, s, !0))
                                : ((i = Bitmap.createBitmap(t)), Loger.get().w(ScenaParametr_ScenaParametr.TAG, String.format(M.getDefault(), "Error on getScaled method, w:%d, h:%d, P.SD:%.2f ", o, s, N.SD))),
                            i != t && t.recycle(),
                            i
                        );
                    },
                    "createBitmap",
                    function (t, e, n, i, o) {
                        void 0 === o && (o = !0);
                        var s = null,
                            r = new S();
                        r.setFilterBitmap(!0);
                        var a = e / t.getWidth(),
                            c = n / t.getHeight();
                        switch (i) {
                            case ModifyType.StretchProportions:
                                var u = Math.min(a, c);
                                (s = Bitmap.createBitmap(parseInt(t.getWidth() * u), parseInt(t.getHeight() * u), null != t.getConfig() ? t.getConfig() : l.RGB_565)).setDensity(t.getDensity()),
                                    new Canvas_Canvas(s).drawBitmap(t, new Rect(0, 0, t.getWidth(), t.getHeight()), new RectF(0, 0, s.getWidth(), s.getHeight()), r);
                                break;
                            case ModifyType.StretchFitCenter:
                                var h = Math.max(a, c),
                                    p = Bitmap.createScaledBitmap(t, parseInt(t.getWidth() * h), parseInt(t.getHeight() * h), !0);
                                (s = Bitmap.createBitmap(parseInt(e), parseInt(n), null != t.getConfig() ? t.getConfig() : l.RGB_565)).setDensity(N.DEN_DEF),
                                    new Canvas_Canvas(s).drawBitmap(p, 0.5 * -p.getWidth() + 0.5 * e, 0.5 * -p.getHeight() + 0.5 * n, null),
                                    p != t && p.recycle();
                                break;
                            case ModifyType.Stretch:
                                (s = Bitmap.createBitmap(parseInt(e), parseInt(n), null != t.getConfig() ? t.getConfig() : Bitmap.Config.RGB_565)).setDensity(t.getDensity()),
                                    new Canvas_Canvas(s).drawBitmap(t, new Rect(0, 0, t.getWidth(), t.getHeight()), new RectF(0, 0, e, n), r);
                                break;
                            case ModifyType.MirrorX:
                                (m = new Matrix()), m.preScale(-1, 1), (s = Bitmap.createBitmap(t, 0, 0, t.getWidth(), t.getHeight(), m, !0)).setDensity(t.getDensity());
                                break;
                            case ModifyType.MirrorY:
                                (m = new Matrix()), m.preScale(1, -1), (s = Bitmap.createBitmap(t, 0, 0, t.getWidth(), t.getHeight(), m, !0)).setDensity(t.getDensity());
                        }
                        return o && t.recycle(), s;
                    },
                    "cut",
                    function (t) {
                        var e = t.getHeight() * N.SD,
                            n = t.getWidth() * N.SD,
                            i = (e - N.HT) / N.SD;
                        i = i > 0 ? i : 0;
                        var o = (n - N.WT) / N.SD;
                        o = o > 0 ? o : 0;
                        var s = parseInt(t.getWidth() - o),
                            r = parseInt(t.getHeight() - i);
                        return (b = Bitmap.createBitmap(t, parseInt(0.5 * o), parseInt(0.5 * i), s, r)), t.recycle(), b;
                    }
                ),
                _enum(ModifyType)._body({ StretchFitCenter: 1, StretchProportions: 2, Stretch: 3, MirrorX: 4, MirrorY: 5 }),
                (ScenaParametr_ScenaParametr.ModifyType = ModifyType),
                _class(MotionEvent_MotionEvent)
                    ._instance(
                        "_static",
                        function () {
                            (this.ACTION_DOWN = 0), (this.ACTION_UP = 1), (this.ACTION_MOVE = 2), (this.ACTION_CANCEL = 3), (this.ACTION_WHEEL = 10), (this.ACTION_MASK = 255);
                        },
                        "_init",
                        function () {
                            (this.eventTarget = null), (this.offsetX = 0), (this.offsetY = 0), (this.scale = 1), (this.index = 0);
                        },
                        MotionEvent_MotionEvent.name,
                        function () {},
                        [Event],
                        MotionEvent_MotionEvent.name,
                        function (t) {
                            MotionEvent_MotionEvent.Initialize(this), (this.eventTarget = t);
                            var e = t.pageX - N.OXE,
                                n = t.pageY - N.OYE;
                            (this.offsetX = -N.OXE + e / N.SE - e), (this.offsetY = -N.OYE + n / N.SE - n);
                        },
                        [Event, Number],
                        MotionEvent_MotionEvent.name,
                        function (t, e) {
                            MotionEvent_MotionEvent.Initialize(this), (this.eventTarget = t), (this.index = e);
                            var n = t.changedTouches[this.index].pageX - N.OXE,
                                i = t.changedTouches[this.index].pageY - N.OYE;
                            (this.offsetX = -N.OXE + n / N.SE - n), (this.offsetY = -N.OYE + i / N.SE - i);
                        },
                        "getEventTime",
                        function () {
                            return this.eventTarget.timeStamp;
                        },
                        "getX",
                        function () {
                            return this.eventTarget.changedTouches && this.index >= 0 ? this.eventTarget.changedTouches[this.index].pageX + this.offsetX : this.eventTarget.pageX + this.offsetX;
                        },
                        [Number],
                        "getX",
                        function (t) {
                            return this.eventTarget.changedTouches && t >= 0 ? this.eventTarget.changedTouches[t].pageX + this.offsetX : this.eventTarget.pageX + this.offsetX;
                        },
                        "getY",
                        function () {
                            return this.eventTarget.changedTouches && this.index >= 0 ? this.eventTarget.changedTouches[this.index].pageY + this.offsetY : this.eventTarget.pageY + this.offsetY;
                        },
                        [Number],
                        "getY",
                        function (t) {
                            return this.eventTarget.changedTouches && t >= 0 ? this.eventTarget.changedTouches[t].pageY + this.offsetY : this.eventTarget.pageY + this.offsetY;
                        },
                        "getDeltaY",
                        function () {
                            return this.eventTarget.deltaY;
                        },
                        "offsetLocation",
                        function (t, e) {
                            (this.offsetX += t), (this.offsetY += e);
                        },
                        "setLocation",
                        function (t, e) {
                            this.eventTarget.changedTouches && this.index >= 0
                                ? ((this.offsetX = t - this.eventTarget.changedTouches[this.index].pageX), (this.offsetY = e - this.eventTarget.changedTouches[this.index].pageY))
                                : ((this.offsetX = t - this.eventTarget.pageX), (this.offsetY = e - this.eventTarget.pageY));
                        },
                        "getAction",
                        function () {
                            switch (this.eventTarget.type) {
                                case "touchstart":
                                case "mousedown":
                                    return MotionEvent_MotionEvent.ACTION_DOWN;
                                case "touchmove":
                                case "mousemove":
                                    return MotionEvent_MotionEvent.ACTION_MOVE;
                                case "touchend":
                                case "mouseup":
                                    return MotionEvent_MotionEvent.ACTION_UP;
                                case "touchcancel":
                                case "mouseout":
                                    return MotionEvent_MotionEvent.ACTION_CANCEL;
                                case "wheel":
                                    return MotionEvent_MotionEvent.ACTION_WHEEL;
                            }
                        },
                        "getPointerCount",
                        function () {
                            return this.eventTarget.changedTouches ? this.eventTarget.changedTouches.length : 1;
                        },
                        "getActionIndex",
                        function () {
                            return this.index;
                        },
                        "getPointerId",
                        function (t) {
                            return this.eventTarget.changedTouches ? this.eventTarget.changedTouches[t].identifier : 0;
                        },
                        "recycle",
                        function () {}
                    )
                    ._static("obtain", function (t) {
                        return t.clone();
                    });
            function HashMap_HashMap() {
                HashMap_HashMap._init.apply(HashMap_HashMap, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(HashMap_HashMap)._instance(
                HashMap_HashMap.name,
                function () {
                    this.map = new Map();
                },
                "size",
                function () {
                    return this.map.size;
                },
                "get",
                function (t) {
                    return this.map.get(t);
                },
                "put",
                function (t, e) {
                    this.map.set(t, e);
                },
                "putAll",
                function (t) {
                    var e = this;
                    t.map.forEach(function (t, n, i) {
                        e.map.set(n, t);
                    });
                },
                "clear",
                function () {
                    this.map.clear();
                },
                "remove",
                function (t) {
                    this.map.delete(t);
                },
                "keySet",
                function () {
                    return this.map.keys();
                },
                "entrySet",
                function () {
                    return this.map.entries();
                },
                "values",
                function () {
                    return this.map.values();
                },
                "entries",
                function () {
                    return this.map.entries();
                },
                "isEmpty",
                function () {
                    return 0 == this.map.size;
                },
                "containsKey",
                function (t) {
                    return this.map.has(t);
                }
            ),
                (HashMap_HashMap.prototype[Symbol.iterator] = HashMap_HashMap.prototype.entries);
            var k = (function (t) {
                function Uri(e) {
                    return t.call(this, Uri.fixedEncodeURI(e)) || this;
                }
                inheritsLoose_inheritsLoose(Uri, t),
                    (Uri.parse = function parse(t) {
                        return new Uri(t);
                    });
                var e = Uri.prototype;
                return (
                    (e.getScheme = function getScheme() {
                        var t = this.indexOf(":");
                        return this.substring(0, t >= 0 ? t : 0);
                    }),
                    (e.getPath = function getPath() {
                        return this.toString();
                    }),
                    (e.equals = function equals(t) {
                        return t instanceof Uri && this === t;
                    }),
                    (Uri.fixedEncodeURI = function fixedEncodeURI(t) {
                        return encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]");
                    }),
                    Uri
                );
            })(_wrapNativeSuper(String));
            function Intent_Intent() {
                Intent_Intent._init.apply(Intent_Intent, [this].concat(Array.prototype.slice.call(arguments)));
            }
            (k.EMPTY = new k("")),
                _class(Intent_Intent)._instance(
                    "_static",
                    function () {
                        (this.FLAG_ACTIVITY_NO_ANIMATION = 65536), (this.FLAG_ACTIVITY_NO_HISTORY = 1073741824), (this.FLAG_ACTIVITY_REORDER_TO_FRONT = 131072), (this.FLAG_ACTIVITY_CLEAR_TOP = 67108864), (this.ACTION_VIEW = "action.VIEW");
                    },
                    function (t) {
                        (t.context = null), (t.component = null), (t.mAction = null), (t.mData = null), (t.mFlags = 0), (t.mExtras = new HashMap_HashMap());
                    },
                    Intent_Intent.name,
                    function () {
                        Intent_Intent.Initialize(this);
                    },
                    [String, k],
                    Intent_Intent.name,
                    function (t, e) {
                        Intent_Intent.Initialize(this), (this.mAction = t), (this.mData = e);
                    },
                    [Context, Function],
                    Intent_Intent.name,
                    function (t, e) {
                        Intent_Intent.Initialize(this), (this.context = t), (this.component = new F(e));
                    },
                    "getFlags",
                    function () {
                        return this.mFlags;
                    },
                    "setFlags",
                    function (t) {
                        this.mFlags = t;
                    },
                    "getAction",
                    function () {
                        return this.mAction;
                    },
                    "getData",
                    function () {
                        return this.mData;
                    },
                    "getComponent",
                    function () {
                        return this.component;
                    },
                    "putExtra",
                    function (t, e) {
                        this.mExtras.put(t, e);
                    },
                    "hasExtra",
                    function (t) {
                        return this.mExtras.containsKey(t);
                    },
                    "getExtra",
                    function (t) {
                        return this.mExtras.get(t);
                    },
                    "getIntExtra",
                    function (t, e) {
                        var n = this.mExtras.get(t);
                        return void 0 !== n ? n : e;
                    },
                    "getBooleanExtra",
                    function (t, e) {
                        var n = this.mExtras.get(t);
                        return void 0 !== n ? n : e;
                    },
                    "getStringExtra",
                    function (t) {
                        var e = this.mExtras.get(t);
                        return void 0 !== e ? e : "";
                    },
                    "clone",
                    function () {
                        var t = new Intent_Intent(this.context, this.component.cls);
                        return t.mExtras.putAll(this.mExtras), (t.mFlags = this.mFlags), t;
                    }
                );
            var F = (function () {
                function Component(t) {
                    (this.cls = null), (this.cls = t);
                }
                var t = Component.prototype;
                return (
                    (t.getShortClassName = function getShortClassName() {
                        return this.cls.name;
                    }),
                    (t.newInstance = function newInstance() {
                        return new this.cls();
                    }),
                    Component
                );
            })();
            function MultiDexApplication() {
                MultiDexApplication._init.apply(MultiDexApplication, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function List_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function List_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return List_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return List_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function List_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function List() {
                List._init.apply(List, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(MultiDexApplication)
                ._extends(Application)
                ._body(function onCreate() {});
            var H = {};
            function ArrayList() {
                ArrayList._init.apply(ArrayList, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(List._t(H))._instance(
                function (t) {
                    t.array = new Array();
                },
                List.name,
                function () {
                    List.Initialize(this);
                },
                [Number],
                List.name,
                function (t) {
                    List.Initialize(this);
                },
                [List],
                List.name,
                function (t) {
                    List.Initialize(this), this.addAll(t);
                },
                "size",
                function () {
                    return this.array.length;
                },
                "isEmpty",
                function () {
                    return 0 == this.array.length;
                },
                "clear",
                function () {
                    this.array.length = 0;
                },
                "contains",
                function (t) {
                    return this.array.indexOf(t) > -1;
                },
                "indexOf",
                function (t) {
                    return this.array.indexOf(t);
                },
                "find",
                function (t) {
                    return this.array.find(t);
                },
                "get",
                function (t) {
                    return this.array[t];
                },
                "set",
                function (t, e) {
                    var n = this.get(t);
                    return (this.array[t] = e), n;
                },
                [H],
                "add",
                function (t) {
                    this.array.push(t);
                },
                [Number, H],
                "add",
                function (t, e) {
                    this.array.splice(t, 0, e);
                },
                "addAll",
                function (t) {
                    var e;
                    if ("array" == typeof t.array) (e = this.array).splice.apply(e, [0, 0].concat(t.array));
                    else for (var n = 0; n < t.array.length; n++) this.array.push(t.array[n]);
                },
                "subList",
                function (t, e) {
                    var n = new List();
                    return (n.array = this.array.slice(t, e)), n;
                },
                "remove",
                function (t) {
                    var e = t;
                    if (("number" != typeof t && (e = this.array.indexOf(t)), e > -1)) {
                        var n = this.array[e];
                        return this.array.splice(e, 1), n;
                    }
                },
                "removeAll",
                function (t) {
                    for (
                        var e,
                            n = this,
                            i = function _loop() {
                                var t = e.value,
                                    i = t.equals
                                        ? n.array.findIndex(function (e) {
                                              return t.equals(e);
                                          })
                                        : n.array.indexOf(t);
                                i > -1 && n.array.splice(i, 1);
                            },
                            o = List_createForOfIteratorHelperLoose(t);
                        !(e = o()).done;

                    )
                        i();
                },
                "iterator",
                function () {
                    return this.array.entries();
                },
                "entries",
                function () {
                    return this.array.entries();
                },
                "values",
                function () {
                    return this.array.values();
                },
                "toArray",
                function () {
                    return this.array.slice(0);
                }
            ),
                (List.prototype[Symbol.iterator] = List.prototype.values),
                _class(ArrayList)._extends(List)._instance();
            Activity.RESULT_OK;
            function Bundle() {
                Bundle._init.apply(Bundle, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Activity() {
                Activity._init.apply(Activity, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(Bundle)._body(),
                _class(Activity)
                    ._extends(Context)
                    ._body(
                        "_static",
                        function () {
                            (this.RESULT_CANCELED = 0), (this.RESULT_OK = -1);
                        },
                        "_init",
                        function () {
                            (this.mIntent = null), (this.mChildren = new ArrayList());
                        },
                        function onCreate() {},
                        "onResume",
                        function () {},
                        "onStart",
                        function () {},
                        "onPause",
                        function () {},
                        "onStop",
                        function () {},
                        "onDestroy",
                        function () {},
                        "onTouchEvent",
                        function (t) {
                            return !1;
                        },
                        "dispatchTouchEvent",
                        function (t) {
                            return !(null == this.mChildren.size() || !this.mChildren.get(this.mChildren.size() - 1).dispatchTouchEvent(t)) || this.onTouchEvent(t);
                        },
                        "startActivity",
                        function (t) {
                            t.getAction() == Intent_Intent.ACTION_VIEW && window.open(t.getData(), "WindowView");
                        },
                        "setContentView",
                        function (t) {
                            this.mChildren.add(t), t.setParent(this);
                            var e = document.getElementById("game");
                            e.appendChild(t.node);
                            var n = window.innerWidth / N.WT,
                                i = window.innerHeight / N.HT;
                            N.SE = Math.min(n, i);
                            var o = N.WT * N.SE,
                                s = N.HT * N.SE;
                            (N.OXE = (window.innerWidth - o) / 2),
                                (N.OYE = (window.innerHeight - s) / 2),
                                (e.style.top = "0"),
                                (e.style.left = "0"),
                                (e.style.width = N.WT + "px"),
                                (e.style.height = N.HT + "px"),
                                (e.style.transform = "scale(" + N.SE + ")"),
                                (e.style.transformOrigin = "left top"),
                                (e.style.marginLeft = N.OXE + "px"),
                                (e.style.marginTop = N.OYE + "px");
                        },
                        "addContentView",
                        function (t, e) {
                            this.mChildren.add(t), t.setParent(this), document.getElementById("game").appendChild(t.node);
                        },
                        "removeView",
                        function (t) {
                            var e = this.mChildren.indexOf(t);
                            if (e == this.mChildren.size() - 1 && (t.onVisibilityChanged(t, !1), e > 0)) {
                                var n = this.mChildren.get(e - 1);
                                n.onVisibilityChanged(n, !0);
                            }
                            this.mChildren.remove(t);
                            try {
                                document.getElementById("game").removeChild(t.node);
                            } catch (t) {}
                            t.onDetachedFromWindow(), t.setParent(null);
                        },
                        "findViewById",
                        function (t) {
                            return this.mChildren.find(function (e) {
                                return e.getId() == t;
                            });
                        },
                        function getIntent() {
                            return this.mIntent;
                        },
                        "runOnUiThread",
                        function (t) {
                            t.run ? t.run() : t();
                        },
                        "toString",
                        function () {
                            return this.constructor.name;
                        }
                    );
            var G = (function () {
                    function Handler() {}
                    var t = Handler.prototype;
                    return (
                        (t.post = function post(t) {
                            return this.postDelayed(t, 0);
                        }),
                        (t.postDelayed = function postDelayed(t, e) {
                            return (
                                setTimeout(function () {
                                    t.run ? t.run.apply(t) : t.apply();
                                }, e) > 0
                            );
                        }),
                        Handler
                    );
                })(),
                W = function Gravity() {};
            function OnClickListener() {}
            function Element() {
                Element._init.apply(Element, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function View_View() {
                View_View._init.apply(View_View, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Layout_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function Layout_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Layout_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Layout_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function Layout_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            (W.LEFT = 1),
                (W.CENTER_HORIZONTAL = 2),
                (W.RIGHT = 4),
                (W.TOP = 8),
                (W.CENTER_VERTICAL = 16),
                (W.BOTTOM = 32),
                _interface(OnClickListener)._body("onClick", function (t) {}),
                _class(Element)._instance(
                    "_init",
                    function () {
                        this.node = null;
                    },
                    Element.name,
                    function () {
                        Element.Initialize(this), this.createDOMNode();
                    },
                    "createDOMNode",
                    function () {
                        (this.node = document.createElement("div")), (this.node.className = "Element"), (this.node.id = this.constructor.name);
                    },
                    "onVisibilityChanged",
                    function (t, e) {
                        e && this.node.focus();
                    },
                    "onAttachedToWindow",
                    function () {
                        this.attached = !0;
                    },
                    "onDetachedFromWindow",
                    function () {
                        this.attached = !1;
                    }
                ),
                _class(View_View)
                    ._extends(Element)
                    ._instance(
                        "_init",
                        function () {
                            (this.params = null), (this.id = -1);
                        },
                        "getWidth",
                        function () {
                            return this.node.width;
                        },
                        "getHeight",
                        function () {
                            return this.node.height;
                        },
                        "getId",
                        function () {
                            return this.id;
                        },
                        "setId",
                        function (t) {
                            this.id = t;
                        },
                        "getContext",
                        function () {
                            return this.context;
                        },
                        "getResources",
                        function () {
                            return this.context.getResources();
                        },
                        View_View.name,
                        function (t) {
                            Element._init(this), View_View.Initialize(this), (this.context = t);
                        },
                        "createDOMNode",
                        function () {
                            var t = this;
                            (this.node = document.createElement("canvas")),
                                (this.node.className = "View"),
                                (this.node.id = this.constructor.name),
                                (this.node.width = N.WT),
                                (this.node.height = N.HT),
                                (this.canvas = Canvas_Canvas.fromNode(this.node)),
                                (this.node.style.position = "absolute"),
                                (this.node.style.top = "0"),
                                (this.node.style.left = "0"),
                                (this.node.style.width = N.WT + "px"),
                                (this.node.style.height = N.HT + "px"),
                                (this.node.style.margin = "0");
                            var e = function handler(e) {
                                if ((e.preventDefault(), "mousemove" === e.type)) (1 != e.buttons && 2 != e.buttons) || t.onTouchEvent(new MotionEvent_MotionEvent(e));
                                else t.onTouchEvent(new MotionEvent_MotionEvent(e));
                            };
                            this.node.addEventListener("mousedown", e), this.node.addEventListener("mousemove", e), this.node.addEventListener("mouseup", e), this.node.addEventListener("mouseout", e), this.node.addEventListener("wheel", e);
                            var n = function handlerTouch(e) {
                                e.preventDefault();
                                for (var n = e.changedTouches, i = 0; i < n.length; i++) t.onTouchEvent(new MotionEvent_MotionEvent(e, i));
                            };
                            this.node.addEventListener("touchstart", n), this.node.addEventListener("touchmove", n), this.node.addEventListener("touchend", n), this.node.addEventListener("touchcancel", n);
                        },
                        "onDraw",
                        function (t) {
                            t.context.clearRect(0, 0, t.canvas.width, t.canvas.height);
                        },
                        "onTouchEvent",
                        function (t) {
                            return !1;
                        },
                        "dispatchTouchEvent",
                        function (t) {
                            return this.onTouchEvent(t);
                        },
                        "setLayoutParams",
                        function (t) {
                            this.params = t;
                        },
                        "onSizeChanged",
                        function (t, e, n, i) {},
                        "isVisible",
                        function () {
                            return !this.node.hidden;
                        },
                        "onAttachedToWindow",
                        function () {
                            Element.onAttachedToWindow(this), this.invalidate();
                        },
                        "onDetachedFromWindow",
                        function () {
                            Element.onDetachedFromWindow(this);
                        },
                        "invalidate",
                        function () {
                            this.attached && requestAnimationFrame(bind(this.onDraw, this, this.canvas));
                        }
                    ),
                (View_View.OnClickListener = OnClickListener);
            var j = function LayoutParams(t, e) {};
            function ViewGroup() {
                ViewGroup._init.apply(ViewGroup, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function RelativeLayout() {
                RelativeLayout._init.apply(RelativeLayout, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function RotateLayout() {
                RotateLayout._init.apply(RotateLayout, [this].concat(Array.prototype.slice.call(arguments)));
            }
            (j.MATCH_PARENT = 1),
                (j.WRAP_CONTENT = 2),
                _class(ViewGroup)
                    ._extends(View_View)
                    ._body(
                        "_init",
                        function () {
                            (this.mParent = null), (this.mChildren = null);
                        },
                        ViewGroup.name,
                        function (t) {
                            View_View._init(this, t), ViewGroup.Initialize(this), (this.mChildren = new List());
                        },
                        [View_View],
                        "addView",
                        function (t) {
                            this.addView(t, -1);
                        },
                        [View_View, Number],
                        "addView",
                        function (t, e) {
                            if ((e < 0 && (e = this.node.children.length), e >= this.node.children.length)) {
                                for (var n, i = Layout_createForOfIteratorHelperLoose(this.mChildren); !(n = i()).done; ) {
                                    var o = n.value;
                                    o.isVisible() && o.onVisibilityChanged(o, !1);
                                }
                                this.mChildren.add(t), this.node.appendChild(t.node);
                            } else this.mChildren.add(e, t), this.node.insertBefore(t.node, this.node.children[e]);
                            t.onAttachedToWindow(), t.onVisibilityChanged(t, !0);
                        },
                        "removeView",
                        function (t) {
                            var e = this.mChildren.indexOf(t);
                            if (e == this.mChildren.size() - 1 && (t.onVisibilityChanged(t, !1), e > 0)) {
                                var n = this.mChildren.get(e - 1);
                                n.onVisibilityChanged(n, !0);
                            }
                            this.mChildren.remove(t);
                            try {
                                this.node.removeChild(t.node);
                            } catch (t) {}
                            t.onDetachedFromWindow();
                        },
                        "removeAllViews",
                        function () {
                            for (var t = 0; t < this.mChildren.size(); t++) {
                                var e = this.mChildren.get(t);
                                this.removeView(e), t--;
                            }
                        },
                        "findViewById",
                        function (t) {
                            return this.mChildren.find(function (e) {
                                return e.getId() == t;
                            });
                        },
                        "getParent",
                        function () {
                            return this.mParent;
                        },
                        "setParent",
                        function (t) {
                            this.mParent = t;
                        },
                        "dispatchTouchEvent",
                        function (t) {
                            return !(null == this.mChildren.size() || !this.mChildren.get(this.mChildren.size() - 1).dispatchTouchEvent(t)) || this.onTouchEvent(t);
                        }
                    ),
                _class(RelativeLayout)
                    ._extends(ViewGroup)
                    ._body(
                        RelativeLayout.name,
                        function (t) {
                            ViewGroup._init(this, t);
                        },
                        "createDOMNode",
                        function () {
                            (this.node = document.createElement("div")),
                                (this.node.className = "RelativeLayout"),
                                (this.node.id = this.constructor.name),
                                (this.node.width = N.WT),
                                (this.node.height = N.HT),
                                (this.node.style.position = "absolute"),
                                (this.node.style.top = "0"),
                                (this.node.style.left = "0"),
                                (this.node.style.width = N.WT + "px"),
                                (this.node.style.height = N.HT + "px"),
                                (this.node.style.padding = "0"),
                                (this.node.style.overflow = "hidden");
                        }
                    ),
                _class(RotateLayout)
                    ._extends(ViewGroup)
                    ._instance(
                        "createDOMNode",
                        function () {
                            (this.node = document.createElement("div")),
                                (this.node.className = "RotateLayout"),
                                (this.node.id = this.constructor.name),
                                (this.node.style.position = "absolute"),
                                (this.node.style.top = "0"),
                                (this.node.style.left = "0"),
                                (this.node.style.width = "100%"),
                                (this.node.style.height = "auto"),
                                (this.node.style.padding = "0");
                        },
                        "setAngle",
                        function () {}
                    );
            var z = {
                AUTO: 0,
                WIDE: 1,
                NARROW: 2,
                SQUARE: 3,
                SIZE_320px_50px: "320px_50px",
                SIZE_320px_100px: "320px_100px",
                SIZE_320px_250px: "320px_250px",
                SIZE_728px_90px: "728px_90px",
                SIZE_970px_90px: "970px_90px",
                SIZE_970px_250px: "970px_250px",
                SIZE_240px_400px: "240px_400px",
                SIZE_240px_600px: "240px_600px",
                SIZE_300px_300px: "300px_300px",
                SIZE_300px_500px: "300px_500px",
                SIZE_300px_600px: "300px_600px",
                SIZE_100_90px: "100%_90px",
                SIZE_100_120px: "100%_120px",
            };
            function AdvtCheckEnable() {}
            function AdvtConfig() {
                AdvtConfig._init.apply(AdvtConfig, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Advt() {
                Advt._init.apply(Advt, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Bitwise() {
                Bitwise._init.apply(Bitwise, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function AdvtYandex_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function AdvtYandex_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return AdvtYandex_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AdvtYandex_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function AdvtYandex_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function AdvtYandex() {
                AdvtYandex._init.apply(AdvtYandex, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(AdvtCheckEnable)._instance("check", function (t) {
                t.setEnableAdvt(!0);
            }),
                _class(function OnAdvtListener() {})._define(
                    "onLoad",
                    function () {},
                    "onError",
                    function () {},
                    "onShow",
                    function () {},
                    "onClose",
                    function () {},
                    "onComplete",
                    function () {},
                    "onClick",
                    function () {}
                ),
                _class(AdvtConfig)._instance(function () {
                    (this.id = ""), (this.timeoutBanner = 0), (this.sizeBanner = z.AUTO), (this.gravityBanner = W.CENTER_HORIZONTAL | W.TOP), (this.rotateBanner = 0), (this.listener = null);
                }),
                _class(Advt)._body(
                    _static,
                    function () {
                        (Advt.EXTRA_TYPE_NETWORK = "org.rad.base.advt.extra.TYPE_NETWORK"),
                            (Advt.EXTRA_BANNER = "org.rad.base.advt.extra.BANNER"),
                            (Advt.EXTRA_BANNER_ID = "org.rad.base.advt.extra.BANNER_ID"),
                            (Advt.EXTRA_BANNER_GRAVITY_IN_ACTIVITY = "org.rad.base.advt.extra.BANNER_GRAVITY_V"),
                            (Advt.EXTRA_BANNER_ROTATE = "org.rad.base.advt.extra.BANNER_ROTATE"),
                            (Advt.EXTRA_BANNER_SIZE = "org.rad.base.advt.extra.BANNER_SIZE"),
                            (Advt.EXTRA_NATIVE = "org.rad.base.advt.extra.NATIVE"),
                            (Advt.EXTRA_NATIVE_COUNT = "org.rad.base.advt.extra.NATIVE_COUNT"),
                            (Advt.EXTRA_INTERSTITIAL = "org.rad.base.advt.extra.INTERSTITIAL"),
                            (Advt.EXTRA_REWARDED = "org.rad.base.advt.extra.REWARDED"),
                            (Advt.idPub = ""),
                            (Advt.getIdPub = function () {
                                return Advt.idPub;
                            }),
                            (Advt.idApp = ""),
                            (Advt.getIdApp = function () {
                                return Advt.idApp;
                            }),
                            (Advt.typeAdvtNetwork = null),
                            (Advt.setAdvtNetwork = function (t, e, n) {
                                (Advt.idPub = t), (Advt.idApp = e), (Advt.typeAdvtNetwork = n);
                            });
                    },
                    _static,
                    "getAdvt",
                    function () {
                        var t = null;
                        try {
                            t = new (0, Advt.typeAdvtNetwork)();
                        } catch (t) {
                            t.printStackTrace();
                        }
                        return t;
                    },
                    _static,
                    function () {
                        Advt.advtCheckEnable = new AdvtCheckEnable();
                    },
                    _static,
                    "setCheckEnable",
                    function (t) {
                        Advt.advtCheckEnable = t;
                    },
                    function () {
                        this.activity = null;
                    },
                    "getActivity",
                    function getActivity() {
                        return this.activity;
                    },
                    function () {
                        this.rotateLayout = null;
                    },
                    "getLayout",
                    function () {
                        return this.rotateLayout;
                    },
                    function () {
                        this.id = 123456789;
                    },
                    "getNativeAd",
                    function (t, e) {},
                    "loadInterstitial",
                    function () {},
                    "loadRewarded",
                    function () {},
                    "isReadyInterstitial",
                    function () {},
                    "isReadyRewarded",
                    function () {},
                    "showBanner",
                    function (t) {},
                    "showInterstitial",
                    function (t) {},
                    "showRewarded",
                    function (t) {},
                    function () {
                        (this.advtCheckEnable = new AdvtCheckEnable()), (this.handler = new G());
                    },
                    function () {
                        this.enableAdvt = !1;
                    },
                    "isEnableAdvt",
                    function () {
                        return this.enableAdvt;
                    },
                    "setEnableAdvt",
                    function (t) {
                        (this.enableAdvt = t), t ? this.appendBanners() : this.removeBanners();
                    },
                    function () {
                        this.config = null;
                    },
                    Advt.name,
                    function () {
                        Advt.Initialize(this);
                    },
                    [Activity],
                    Advt.name,
                    function (t) {
                        Advt.Initialize(this), (this.activity = t);
                    },
                    [Activity, AdvtConfig],
                    Advt.name,
                    function (t, e) {
                        Advt.Initialize(this), (this.activity = t), (this.config = e), (this.advtShowComplete = new AdvtShowComplete());
                    },
                    "init",
                    function () {},
                    "consentAsk",
                    function () {},
                    "consentEdit",
                    function () {},
                    "onResume",
                    function () {
                        this.advtCheckEnable.check(this);
                    },
                    "onPause",
                    function () {
                        this.removeBanners();
                    },
                    "onDestroy",
                    function () {
                        (this.onAdvtListener = null), (this.advtShowComplete = null);
                    },
                    "appendBanners",
                    function () {
                        if (null == this.rotateLayout) {
                            this.removeLayout();
                            var t = new j(j.WRAP_CONTENT, j.WRAP_CONTENT, this.config.gravityBanner);
                            (this.rotateLayout = new RotateLayout(this.activity)), this.rotateLayout.setId(this.id), this.rotateLayout.setAngle(this.config.rotateBanner), this.activity.addContentView(this.rotateLayout, t);
                            var e = this.getBanner();
                            if (null != e) {
                                var n = new j(j.WRAP_CONTENT, j.WRAP_CONTENT);
                                this.rotateLayout.addView(e, n);
                            }
                        }
                    },
                    "removeBanners",
                    function () {
                        null != this.rotateLayout && this.rotateLayout.removeAllViews(), (this.rotateLayout = null), this.removeLayout();
                    },
                    "removeLayout",
                    function () {
                        var t = this.activity.findViewById(this.id);
                        null != t && null != t.getParent() && t.getParent().removeView(t);
                    }
                ),
                (Advt.AdvtConfig = AdvtConfig),
                (Advt.BannerSize = z),
                _class(Bitwise)._body(
                    _static,
                    function isFlagMask(t, e) {
                        return 0 != (t & e);
                    },
                    [Number, Number],
                    _static,
                    function isFlag(t, e) {
                        return 0 != (t & (1 << e));
                    },
                    [Number, Number, Boolean],
                    _static,
                    function setFlag(t, e, n) {
                        return n ? this.setFlag(t, e) : this.clearFlag(t, e);
                    },
                    [Number, Number],
                    _static,
                    function setFlag(t, e) {
                        return t | (1 << e);
                    },
                    [Number, Number],
                    _static,
                    function clearFlag(t, e) {
                        return t & ~(1 << e);
                    },
                    [Number, Number],
                    _static,
                    function getSubNumber(t, e) {
                        return this.getSubNumber(t, e, e);
                    },
                    [Number, Number, Number],
                    _static,
                    function getSubNumber(t, e, n) {
                        return (t >> n) & (255 >> (8 - (e - n + 1)));
                    },
                    [Number, Number, Number, Number],
                    _static,
                    function setSubNumber(t, e, n, i) {
                        var o = 65535 >> (8 - (e - n + 1));
                        return (t & ~(o << n)) | ((i & o) << n);
                    }
                ),
                _class(AdvtYandex)
                    ._extends(Advt)
                    ._body(
                        "_static",
                        function () {
                            (AdvtYandex.TAG = "AdvtYandex"), (AdvtYandex.advt = null);
                        },
                        function () {
                            (this.banners = null), (this.timeAdShow = 0);
                        },
                        AdvtYandex.name,
                        function () {
                            Advt._init(this), AdvtYandex.Initialize(this), (this.banners = new List());
                        },
                        "init",
                        function (t) {
                            _include("yandex_sdk", "https://yandex.ru/games/sdk/v2", function () {
                                window.YaGames &&
                                    window.YaGames.init({
                                        adv: {
                                            onAdvClose: function onAdvClose(t) {
                                                Loger.get().d(AdvtYandex.TAG, "Advt closed!");
                                            },
                                        },
                                        screen: { fullscreen: !1 },
                                    }).then(function (e) {
                                        Loger.get().d(AdvtYandex.TAG, "Advt Yandex init!"), (AdvtYandex.advt = e.adv), t && t();
                                    });
                            });
                        },
                        "consentAsk",
                        function () {},
                        "consentEdit",
                        function () {},
                        "showBanner",
                        function (t) {
                            var e = t.id;
                            if (e && 0 != e.length) {
                                if (null == window.yaContextCb) {
                                    window.yaContextCb = window.yaContextCb || [];
                                    var n = document.createElement("script");
                                    (n.src = "https://yandex.ru/ads/system/context.js"), (n.async = !0), document.head.appendChild(n);
                                }
                                var i = document.createElement("div");
                                (i.style.position = "absolute"), (i.style.width = "auto"), (i.style.height = "auto"), (i.style.transform += " scale(" + N.SE + ")");
                                var o = document.createElement("div");
                                switch (((o.id = "yandex_rtb_" + e), (o.style.background = "transparent"), (o.style.position = "absolute"), (o.style.display = "flex"), (o.style["justify-content"] = "center"), t.sizeBanner)) {
                                    case z.AUTO:
                                        (o.style.width = "100%"), (o.style.height = "90px");
                                        break;
                                    case z.WIDE:
                                        (o.style.width = "728px"), (o.style.height = "90px");
                                        break;
                                    case z.NARROW:
                                        (o.style.width = "320px"), (o.style.height = "50px");
                                        break;
                                    case z.SQUARE:
                                        (o.style.width = "240px"), (o.style.height = "400px");
                                        break;
                                    default:
                                        var s = t.sizeBanner.split("_");
                                        (o.style.width = s[0]), (o.style.height = s[1]);
                                }
                                Bitwise.isFlagMask(t.gravityBanner, W.LEFT)
                                    ? ((i.style.left = "0px"), (o.style.left = "0px"))
                                    : Bitwise.isFlagMask(t.gravityBanner, W.CENTER_HORIZONTAL)
                                    ? ((i.style.left = "50%"), (o.style.left = "50%"), (o.style.transform += " translate(-50%, 0px)"))
                                    : Bitwise.isFlagMask(t.gravityBanner, W.RIGHT) && ((i.style.right = "0px"), (o.style.right = "0px")),
                                    Bitwise.isFlagMask(t.gravityBanner, W.TOP)
                                        ? ((i.style.top = "0px"), (o.style.top = "0px"))
                                        : Bitwise.isFlagMask(t.gravityBanner, W.CENTER_VERTICAL)
                                        ? ((i.style.top = "50%"), (o.style.top = "50%"), (o.style.transform += " translate(0px, -50%)"))
                                        : Bitwise.isFlagMask(t.gravityBanner, W.BOTTOM) && ((i.style.bottom = "0px"), (o.style.bottom = "0px")),
                                    this.banners.add({ div: o, id: e });
                            }
                        },
                        "appendBanners",
                        function () {
                            for (
                                var t,
                                    e = function _loop() {
                                        var e = t.value;
                                        null != e &&
                                            (document.body.appendChild(e.div),
                                            Loger.get().d(AdvtYandex.TAG, String.format("append to body: %s", e.id)),
                                            window.yaContextCb.push(function () {
                                                Ya.Context.AdvManager.render({ renderTo: e.div.id, blockId: e.id }), Loger.get().d(AdvtYandex.TAG, String.format("push render for: %s", e.id));
                                            }));
                                    },
                                    n = AdvtYandex_createForOfIteratorHelperLoose(this.banners);
                                !(t = n()).done;

                            )
                                e();
                        },
                        "removeBanners",
                        function () {
                            for (var t, e = AdvtYandex_createForOfIteratorHelperLoose(this.banners); !(t = e()).done; ) {
                                var n = t.value;
                                null != n && document.body.removeChild(n.div);
                            }
                            this.banners.clear();
                        },
                        "getNativeAd",
                        function (t, e) {
                            return null;
                        },
                        "loadInterstitial",
                        function () {
                            Loger.get().d(TAG, "loadInterstitial()");
                        },
                        "loadRewarded",
                        function () {
                            Loger.get().d(TAG, "loadRewarded()");
                        },
                        "isReadyInterstitial",
                        function () {
                            return !0;
                        },
                        "isReadyRewarded",
                        function () {
                            return !0;
                        },
                        [AdvtConfig],
                        "showInterstitial",
                        function showInterstitial(t) {
                            var n = this,
                                i = e.currentTimeMillis();
                            i - this.timeAdShow >= 165e3 &&
                                AdvtYandex.advt &&
                                AdvtYandex.advt.showFullscreenAdv({
                                    callbacks: {
                                        onClose: function onClose(e) {
                                            e && ((n.timeAdShow = i), null != t.listener && t.listener.onComplete()), null != t.listener && t.listener.onClose();
                                        },
                                        onError: function onError(e) {
                                            Loger.get().d(AdvtYandex.TAG, String.format("showInterstitial error: %s", e)), null != t.listener && t.listener.onError();
                                        },
                                        onOffline: function onOffline() {
                                            Loger.get().d(AdvtYandex.TAG, "showInterstitial offline"), null != t.listener && t.listener.onError();
                                        },
                                    },
                                });
                        },
                        "showRewarded",
                        function (t) {
                            AdvtYandex.advt &&
                                AdvtYandex.advt.showRewardedVideo({
                                    callbacks: {
                                        onOpen: function onOpen() {
                                            Loger.get().d(AdvtYandex.TAG, "showRewarded video ad open."), null != t.listener && t.listener.onShow();
                                        },
                                        onRewarded: function onRewarded() {
                                            Loger.get().d(AdvtYandex.TAG, "showRewarded Rewarded!"), null != t.listener && t.listener.onComplete();
                                        },
                                        onClose: function onClose() {
                                            Loger.get().d(AdvtYandex.TAG, "showRewarded video ad closed."), null != t.listener && t.listener.onClose();
                                        },
                                        onError: function onError(e) {
                                            Loger.get().d(AdvtYandex.TAG, String.format("showRewarded error while open video ad: %s", e)), null != t.listener && t.listener.onError();
                                        },
                                    },
                                });
                        },
                        "onResume",
                        function () {
                            Loger.get().d(AdvtYandex.TAG, "onResume"), Advt.onResume(this);
                        },
                        "onPause",
                        function () {
                            Loger.get().d(AdvtYandex.TAG, "onPause()"), Advt.onPause(this);
                        },
                        "onDestroy",
                        function () {
                            Loger.get().d(AdvtYandex.TAG, "onDestroy()"), Advt.onDestroy(this);
                        }
                    );
            var U = (function () {
                function File(t) {
                    (this.path = void 0), (this.cons = void 0), (this.path = t);
                }
                var t = File.prototype;
                return (
                    (t.getName = function getName() {
                        var t = this.path.lastIndexOf(File.separatorChar);
                        return this.path.substring(t + 1);
                    }),
                    (t.getAbsolutePath = function getAbsolutePath() {
                        return this.path;
                    }),
                    File
                );
            })();
            U.separatorChar = "/";
            var K = (function () {
                function Serializ() {
                    (this.pathAppCash = "up"), (this.pathAppFiles = "up");
                }
                Serializ.get = function get() {
                    return q.instance;
                };
                var t = Serializ.prototype;
                return (
                    (t.getPathAppCash = function getPathAppCash() {
                        return this.pathAppCash;
                    }),
                    (t.getPathAppCashSeparator = function getPathAppCashSeparator() {
                        return this.pathAppCash + U.separatorChar;
                    }),
                    (t.getPathAppFiles = function getPathAppFiles() {
                        return this.pathAppFiles;
                    }),
                    (t.getPathAppFilesSeparator = function getPathAppFilesSeparator() {
                        return this.pathAppFiles + U.separatorChar;
                    }),
                    (t.init = function init(t, e) {
                        (this.pathAppCash = e), (this.pathAppFiles = e);
                    }),
                    (t.saveContext = function saveContext(t, e, n) {
                        try {
                            localStorage.setItem(n, JSON.stringify(e));
                        } catch (t) {
                            return Loger.get().exc(t), !1;
                        }
                        return !0;
                    }),
                    (t.loadContext = function loadContext(t, e, n) {
                        var i = null;
                        try {
                            i = JSON.parse(localStorage.getItem(e));
                        } catch (i) {
                            this.saveContext(t, n, e);
                        }
                        return null != i ? i : n;
                    }),
                    (t.deleteContext = function deleteContext(t, e) {
                        null == e || e.isEmpty() || localStorage.removeItem(e);
                    }),
                    (t.isDataFileExist = function isDataFileExist(t) {
                        return (t = t.replaceAll("file:", "")), null != localStorage.getItem(t);
                    }),
                    (t.saveData = function saveData(t, e) {
                        try {
                            localStorage.setItem(e, t);
                        } catch (t) {
                            return Loger.get().exc(t), "";
                        }
                        return e;
                    }),
                    (t.loadData = function loadData(t) {
                        var e;
                        try {
                            e = localStorage.getItem(t);
                        } catch (t) {
                            return Loger.get().exc(t), "";
                        }
                        return e;
                    }),
                    (t.saveImage = function saveImage(t, e, n) {
                        void 0 === n && (n = 95);
                        try {
                            var i = t.imageBitmap.toDataURL("image/jpeg", n);
                            localStorage.setItem(e, i);
                        } catch (t) {
                            return Loger.get().exc(t), "";
                        }
                        return e;
                    }),
                    (t.loadImage = function loadImage(t) {
                        var e = null;
                        try {
                            var n = localStorage.getItem(t);
                            e = u.decodeDataUrl(n);
                        } catch (t) {
                            Loger.get().exc(t);
                        }
                        return e;
                    }),
                    (t.concatUrl = function concatUrl() {
                        return "file:".concat(this.concat.apply(this, arguments));
                    }),
                    (t.concat = function concat() {
                        for (var t = "", e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        for (var o = 0; o < n.length; o++) t = t + "/" + n[o].replace(/(^\/+)|(\/+$)/g, "");
                        return t;
                    }),
                    (t.delFile = function delFile(t) {
                        if (null == t || t.isEmpty()) return !1;
                        localStorage.removeItem(t);
                    }),
                    (t.getFilesFromPath = function getFilesFromPath(t, e) {
                        var n = new ArrayList();
                        e = e.replaceAll("*", "(.*)");
                        for (var i = 0; i < localStorage.length; i++) {
                            var o = localStorage.key(i);
                            o.contains(t) && o.match(e) && n.add(new U(o));
                        }
                        return n;
                    }),
                    (t.getUriFromPath = function getUriFromPath(t) {
                        return t;
                    }),
                    (t.getResourceIdByName = function getResourceIdByName(t, e, n) {
                        return t.getResources().getIdentifier(e, n);
                    }),
                    (t.getStringResourceIdByName = function getStringResourceIdByName(t, e) {
                        return this.getResourceIdByName(t, e, "string");
                    }),
                    (t.getDrawableResourceIdByName = function getDrawableResourceIdByName(t, e) {
                        return this.getResourceIdByName(t, e, "drawable");
                    }),
                    (t.getRawResourceIdByName = function getRawResourceIdByName(t, e) {
                        return this.getResourceIdByName(t, e, "raw");
                    }),
                    (t.getResourceNameById = function getResourceNameById(t, e) {
                        return t.getResources().getResourceEntryName(e);
                    }),
                    (t.getStringResourceByName = function getStringResourceByName(t, e) {
                        var n = this.getStringResourceIdByName(t, e);
                        return 0 == n || null == n ? e : n;
                    }),
                    (t.getRawUri = function getRawUri(t, e) {
                        return new k(e);
                    }),
                    Serializ
                );
            })();
            K.TAG = "Serializ";
            var q = function SerializeHolder() {};
            function Events_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function Events_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Events_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Events_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function Events_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function Events() {
                Events._init.apply(Events, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function MediaPlayer() {
                MediaPlayer._init.apply(MediaPlayer, [this].concat(Array.prototype.slice.call(arguments)));
            }
            (q.instance = new K()),
                _class(Events)._instance(
                    function (t) {
                        t.listeners = new ArrayList();
                    },
                    "add",
                    function (t) {
                        var e = this;
                        this.listeners.add(t);
                        var n = Object.getOwnPropertyNames(t);
                        if (null == Object.getOwnPropertyDescriptor(this, n[0]))
                            for (
                                var i = function _loop(t) {
                                        Object.defineProperty(e, n[t], {
                                            value: function value() {
                                                this.emit.apply(this, [n[t]].concat(Array.prototype.slice.call(arguments)));
                                            },
                                        });
                                    },
                                    o = 0;
                                o < n.length;
                                o++
                            )
                                i(o);
                    },
                    "rem",
                    function (t) {
                        this.listeners.remove(t);
                    },
                    [],
                    "emit",
                    function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this.emit.apply(this, ["slot"].concat(e));
                    },
                    [String],
                    "emit",
                    function (t) {
                        for (var e = null, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                        for (var s, r = Events_createForOfIteratorHelperLoose(this.listeners); !(s = r()).done; ) {
                            var a = s.value;
                            try {
                                e = Object.call.apply(Object, [a[t], a].concat(i));
                            } catch (t) {
                                t.printStackTrace();
                            }
                        }
                        return e;
                    }
                ),
                _class(MediaPlayer)
                    ._static("create", function (t, e) {
                        return new MediaPlayer(t.getResources().getAudio(e));
                    })
                    ._instance(
                        function (t) {
                            (t.ctx = null), (t.video = null), (t.audio = null), (t.source = null), (t.gain = null), (t.isPlay = !1), (t.mOnCompletionListener = null);
                        },
                        MediaPlayer.name,
                        function () {
                            MediaPlayer.Initialize(this);
                        },
                        [AudioBufferSourceNode],
                        MediaPlayer.name,
                        function (t) {
                            MediaPlayer.Initialize(this), t.context && ((this.ctx = t.context), (this.source = t), (this.gain = this.ctx.createGain()), this.source.connect(this.gain), this.gain.connect(this.ctx.destination));
                        },
                        [Audio],
                        MediaPlayer.name,
                        function (t) {
                            MediaPlayer.Initialize(this), (this.audio = t);
                        },
                        [HTMLVideoElement],
                        MediaPlayer.name,
                        function (t) {
                            MediaPlayer.Initialize(this), (this.video = t);
                        },
                        "setDataSource",
                        function (t) {
                            this.video && (this.video.src = t);
                        },
                        "isPlaying",
                        function () {
                            return this.source ? this.isPlay : this.audio ? !this.audio.paused && !this.audio.ended : !!this.video && !this.video.paused && !this.video.ended;
                        },
                        "start",
                        function () {
                            if (this.source) {
                                this.ctx && "suspended" === this.ctx.state && this.ctx.resume();
                                var t = this.source.buffer,
                                    e = this.source.loop;
                                this.isPlay && this.source.stop(),
                                    this.source.disconnect(),
                                    (this.source = this.ctx.createBufferSource()),
                                    (this.source.buffer = t),
                                    (this.source.loop = e),
                                    this.source.connect(this.gain),
                                    this.source.start(),
                                    (this.isPlay = !0);
                            } else this.audio ? this.audio.play() : this.video && this.video.play();
                        },
                        "pause",
                        function () {
                            this.source ? (this.isPlay && this.source.stop(), (this.isPlay = !1)) : this.audio ? this.audio.pause() : this.video && this.video.pause();
                        },
                        "stop",
                        function () {
                            this.source ? (this.isPlay && this.source.stop(), (this.isPlay = !1)) : this.audio ? this.audio.pause() : this.video && this.video.pause();
                        },
                        "release",
                        function () {
                            this.source && (this.gain.disconnect(), this.source.disconnect(), (this.source.loop = !1), (this.isPlay = !1)), this.audio && (this.audio.loop = !1), this.video && (this.video.loop = !1);
                        },
                        "setOnCompletionListener",
                        function (t) {
                            (this.mOnCompletionListener = t), this.source ? (this.source.loop = !0) : this.audio && (this.audio.loop = !0);
                        },
                        "setLooping",
                        function (t) {
                            this.audio ? (this.audio.loop = !0) : this.video && (this.video.loop = t);
                        },
                        "setVolume",
                        function (t, e) {
                            this.source && this.gain ? this.gain.gain.setValueAtTime((t + e) / 2, this.ctx.currentTime) : this.audio ? (this.audio.volume = (t + e) / 2) : this.video && (this.video.volume = (t + e) / 2);
                        }
                    );
            var Z = (function () {
                    function SoundPool(t, e, n) {
                        this.sounds = new HashMap_HashMap();
                    }
                    var t = SoundPool.prototype;
                    return (
                        (t.load = function load(t, e, n) {
                            var i = t.getResources().getAudio(e);
                            return this.sounds.put(e, i), e;
                        }),
                        (t.play = function play(t, e, n, i, o, s) {
                            var r = this.sounds.get(t);
                            (r.loop = !!o), (r.volume = (e + n) / 2), r.play();
                        }),
                        SoundPool
                    );
                })(),
                $ = function AudioManager() {};
            function MediaAudio_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function MediaAudio_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return MediaAudio_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MediaAudio_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function MediaAudio_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function OnStateChangeListener() {}
            function MediaAudio() {
                MediaAudio._init.apply(MediaAudio, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function AudioHolder() {}
            ($.STREAM_MUSIC = 3),
                _class(OnStateChangeListener)._body(
                    "onStateChange",
                    function (t) {},
                    "onStateChangeMelody",
                    function (t) {},
                    "onStateChangeSound",
                    function (t) {}
                ),
                _class(MediaAudio)._static("get", function () {
                    return AudioHolder.instance;
                }),
                MediaAudio._body(
                    "_static",
                    function () {
                        (this.ACTION_STATE = "org.rad.base.media.STATE"),
                            (this.ACTION_REG = "org.rad.base.media.REG"),
                            (this.ACTION_UNREG = "org.rad.base.media.UNREG"),
                            (this.ACTION_MELODY = "org.rad.base.media.MELODY"),
                            (this.ACTION_SOUND = "org.rad.base.media.SOUND"),
                            (this.STATE = "STATE"),
                            (this.REG_ACTIVITY_NAME = "REG_ACTIVITY_NAME"),
                            (this.UNREG_ACTIVITY_NAME = "UNREG_ACTIVITY_NAME"),
                            (this.MELODY_NAME = "MELODY_NAME"),
                            (this.MELODY_LIST = "MELODY_LIST"),
                            (this.MELODY_REPEAT = "MELODY_REPEAT"),
                            (this.SOUND_NAME = "SOUND_NAME");
                    },
                    function (t) {
                        t.eventState = new Events();
                    },
                    "getEventState",
                    function () {
                        return this.eventState;
                    },
                    function (t) {
                        (t.lockSoundUser = new Object()),
                            (t.soundUser = new ArrayList()),
                            (t.handler = new G()),
                            (t.playerSound = null),
                            (t.playerMelody = null),
                            (t.completionListener = null),
                            (t.Click = ""),
                            (t.soundsPair = new HashMap_HashMap()),
                            (t.soundsPairConst = new HashMap_HashMap()),
                            (t.volume = 0),
                            (t.isOn = !1),
                            (t.isOnMelody = !1),
                            (t.isOnSound = !1),
                            (t.uriMelodyMain = ""),
                            (t.uriMelodyCurr = "");
                    },
                    [Context],
                    "init",
                    function (t) {
                        this.init(t, k.EMPTY);
                    },
                    [Context, String],
                    "init",
                    function (t, e) {
                        var n = this;
                        (this.uriMelodyMain = e),
                            (this.uriMelodyCurr = e),
                            (this.isOn = this.getState(t)),
                            (this.isOnMelody = this.getStateMelody(t)),
                            (this.isOnSound = this.getStateSound(t)),
                            (this.playerMelody = new MediaPlayer()),
                            (this.playerSound = new Z(10, $.STREAM_MUSIC, 0)),
                            (this.completionListener = function (e) {
                                n.playMelody(t, uriMelodyCurr, !0, !0);
                            }),
                            this.playMelody(t, this.uriMelodyCurr, !0, !0),
                            this.loadSoundsConst();
                    },
                    "loadSoundsConst",
                    function () {
                        this.soundsPairConst.put("sound_button_1", this.Click), this.soundsPair.putAll(this.soundsPairConst);
                    },
                    [Context, HashMap_HashMap],
                    "loadSounds",
                    function (t, e) {
                        this.unloadSounds();
                        for (var n, i = MediaAudio_createForOfIteratorHelperLoose(e.entrySet()); !(n = i()).done; ) {
                            var o = n.value,
                                s = o[0],
                                r = o[1];
                            this.soundsPair.put(s, this.playerSound.load(t, K.get().getRawResourceIdByName(t, r), 1));
                        }
                    },
                    [Context, List],
                    "loadSounds",
                    function (t, e) {
                        this.unloadSounds(), soundsPair.putAll(soundsPairConst);
                        for (var n, i = MediaAudio_createForOfIteratorHelperLoose(e); !(n = i()).done; ) {
                            var o = n.value;
                            soundsPair.put(o, playerSound.load(t, K.get().getRawResourceIdByName(t, o), 1));
                        }
                    },
                    "unloadSounds",
                    function () {
                        this.soundsPair.clear();
                    },
                    [Number],
                    "playSound",
                    function (t) {
                        this.isOn && this.isOnSound && this.playerSound.play(t, 1, 1, 1, 0, 1);
                    },
                    [Context, String],
                    "playSound",
                    function (t, e) {
                        (intent = new Intent(ACTION_SOUND)), intent.putExtra(SOUND_NAME, e), t.sendBroadcast(intent);
                    },
                    [String],
                    "playSound",
                    function (t) {
                        this.playSound(t, 1, 1);
                    },
                    [String, Number, Number],
                    "playSound",
                    function (t, e, n) {
                        if (this.isOn && this.isOnSound) {
                            var i = this.soundsPair.get(t);
                            null != i && this.playerSound.play(i, e, e, 1, 0, n);
                        }
                    },
                    [String, Number],
                    "playSound",
                    function (t, e) {
                        if (this.isOn && this.isOnSound) {
                            var n = soundsPair.get(t);
                            null != n && playerSound.play(n, e, e, 1, 0, 1);
                        }
                    },
                    "registerSoundUserBroudcast",
                    function (t) {
                        (intent = new Intent(ACTION_REG)), intent.putExtra(REG_ACTIVITY_NAME, t.toString()), t.sendBroadcast(intent);
                    },
                    [Activity],
                    "registerSoundUser",
                    function (t) {
                        this.registerSoundUser(t.toString());
                    },
                    [String],
                    "registerSoundUser",
                    function (t) {
                        this.soundUser.contains(t) || this.soundUser.add(t);
                        try {
                            this.isOn && this.isOnMelody && this.playerMelody.start();
                        } catch (t) {
                            t.printStackTrace();
                        }
                    },
                    "unregisterSoundUserBroadcast",
                    function (t) {
                        (intent = new Intent(ACTION_UNREG)), intent.putExtra(UNREG_ACTIVITY_NAME, t.toString()), t.sendBroadcast(intent);
                    },
                    [Activity],
                    "unregisterSoundUser",
                    function (t) {
                        this.unregisterSoundUser(t.toString());
                    },
                    [String],
                    "unregisterSoundUser",
                    function (t) {
                        this.handler.postDelayed(
                            new Runnable()._body({ m: this }, "run", function (e) {
                                try {
                                    e.soundUser.contains(t) && e.soundUser.remove(t), e.soundUser.isEmpty() && e.playerMelody.isPlaying() && e.playerMelody.pause();
                                } catch (t) {
                                    t.printStackTrace();
                                }
                            }),
                            1e3
                        );
                    },
                    "playMusic",
                    function () {
                        ((this.isOn && this.isOnMelody && !this.soundUser.isEmpty()) || !this.playerMelody.isPlaying()) && this.playerMelody.start();
                    },
                    [Context, String],
                    "playMelodyBroadcast",
                    function (t, e) {
                        this.playMelodyBroadcast(t, e, !1, !0);
                    },
                    [Context, String, Boolean],
                    "playMelodyBroadcast",
                    function (t, e, n) {
                        this.playMelodyBroadcast(t, e, !1, n);
                    },
                    [Context, String, Boolean, Boolean],
                    "playMelodyBroadcast",
                    function (t, e, n, i) {
                        (intent = new Intent(ACTION_MELODY)), intent.putExtra(MELODY_NAME, e), intent.putExtra(MELODY_LIST, n), intent.putExtra(MELODY_REPEAT, i), t.sendBroadcast(intent);
                    },
                    "playMelody",
                    function (t, e, n, i) {
                        if (!e.equals(k.EMPTY) && (n || !this.uriMelodyCurr.equals(e))) {
                            this.uriMelodyCurr = e;
                            try {
                                this.playerMelody.stop(),
                                    this.playerMelody.release(),
                                    (this.playerMelody = MediaPlayer.create(t.getApplicationContext(), e)),
                                    i && this.playerMelody.setOnCompletionListener(this.completionListener),
                                    this.playerMelody.setVolume(0.1, 0.1),
                                    this.isOn && this.isOnMelody && this.playerMelody.start();
                            } catch (t) {
                                t.printStackTrace();
                            }
                        }
                    },
                    "off",
                    function (t) {
                        (intent = new Intent(ACTION_STATE)), intent.putExtra(STATE, !1), t.sendBroadcast(intent);
                    },
                    "on",
                    function (t) {
                        (intent = new Intent(ACTION_STATE)), intent.putExtra(STATE, !0), t.sendBroadcast(intent);
                    },
                    "setState",
                    function (t, e) {
                        this.isOn = e;
                        try {
                            K.get().saveContext(t, this.isOn, "audio_on");
                        } catch (t) {
                            t.printStackTrace();
                        }
                        try {
                            null != this.playerMelody &&
                                (!e && this.playerMelody.isPlaying()
                                    ? (this.playerMelody.pause(), this.changeState())
                                    : this.isOn && this.isOnMelody && !this.soundUser.isEmpty() && !this.playerMelody.isPlaying() && (this.playerMelody.start(), this.changeState()));
                        } catch (t) {
                            t.printStackTrace();
                        }
                    },
                    "setStateMelody",
                    function (t, e) {
                        this.isOnMelody = e;
                        try {
                            K.get().saveContext(t, this.isOnMelody, "melody_on");
                        } catch (t) {
                            t.printStackTrace();
                        }
                        try {
                            null != this.playerMelody &&
                                (!e && this.playerMelody.isPlaying()
                                    ? (this.playerMelody.pause(), this.changeStateMelody())
                                    : this.isOn && this.isOnMelody && !this.soundUser.isEmpty() && !this.playerMelody.isPlaying() && (this.playerMelody.start(), this.changeStateMelody()));
                        } catch (t) {
                            t.printStackTrace();
                        }
                    },
                    "setStateSound",
                    function (t, e) {
                        this.isOnSound = e;
                        try {
                            K.get().saveContext(t, this.isOnSound, "sound_on"), this.changeStateSound();
                        } catch (t) {
                            t.printStackTrace();
                        }
                    },
                    "getState",
                    function (t) {
                        try {
                            return (this.isOn = K.get().loadContext(t, "audio_on", !0)), this.isOn;
                        } catch (t) {
                            t.printStackTrace();
                        }
                        return !0;
                    },
                    "getStateMelody",
                    function (t) {
                        try {
                            return (this.isOnMelody = K.get().loadContext(t, "melody_on", !0)), this.isOnMelody;
                        } catch (t) {
                            t.printStackTrace();
                        }
                        return !0;
                    },
                    "getStateSound",
                    function (t) {
                        try {
                            return (this.isOnSound = K.get().loadContext(t, "sound_on", !0)), this.isOnSound;
                        } catch (t) {
                            t.printStackTrace();
                        }
                        return !0;
                    },
                    "changeState",
                    function () {
                        this.eventState.onStateChange && this.eventState.onStateChange(this.isOn);
                    },
                    "changeStateMelody",
                    function () {
                        this.eventState.onStateChangeMelody && this.eventState.onStateChangeMelody(this.isOnMelody);
                    },
                    "changeStateSound",
                    function () {
                        this.eventState.onStateChangeSound && this.eventState.onStateChangeSound(this.isOnSound);
                    },
                    "release",
                    function () {
                        try {
                            playerMelody.isPlaying() && playerMelody.stop();
                        } catch (t) {
                            t.printStackTrace();
                        }
                        playerMelody.release(), unloadSounds(), playerSound.release();
                    }
                ),
                (MediaAudio.OnStateChangeListener = OnStateChangeListener),
                _class(AudioHolder)._instance("_static", function () {
                    this.instance = new MediaAudio();
                });
            var Q = (function () {
                    function SceneConfig() {
                        (this.pixelFormat = 0), (this.countThread = 1), (this.msSleep = 10), (this.drawFps = !1), (this.callback = null);
                    }
                    SceneConfig.get = function get() {
                        return J.instance;
                    };
                    var t = SceneConfig.prototype;
                    return (
                        (t.SceneConfig = function SceneConfig() {}),
                        (t.getPixelFormat = function getPixelFormat() {
                            return this.pixelFormat;
                        }),
                        (t.setPixelFormat = function setPixelFormat(t) {
                            return (this.pixelFormat = t), this;
                        }),
                        (t.getCountThread = function getCountThread() {
                            return this.countThread;
                        }),
                        (t.setCountThread = function setCountThread(t) {
                            return (this.countThread = t), this;
                        }),
                        (t.getMsSleep = function getMsSleep() {
                            return this.msSleep;
                        }),
                        (t.setMsSleep = function setMsSleep(t) {
                            return (this.msSleep = t), this;
                        }),
                        (t.isDrawFps = function isDrawFps() {
                            return this.drawFps;
                        }),
                        (t.setDrawFps = function setDrawFps(t) {
                            return (this.drawFps = t), this;
                        }),
                        (t.getCallback = function getCallback() {
                            return this.callback;
                        }),
                        (t.setSurfaceCallback = function setSurfaceCallback(t) {
                            return (this.callback = t), this;
                        }),
                        SceneConfig
                    );
                })(),
                J = function SceneConfigHolder() {};
            function SurfaceView() {
                SurfaceView._init.apply(SurfaceView, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SurfaceHolder() {}
            function Callback() {}
            function _2DCoordinat() {
                _2DCoordinat._init.apply(_2DCoordinat, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DVector() {
                _2DVector._init.apply(_2DVector, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DPoint_2DPoint() {
                _2DPoint_2DPoint._init.apply(_2DPoint_2DPoint, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Matrix_Matrix() {
                Matrix_Matrix._init.apply(Matrix_Matrix, [this].concat(Array.prototype.slice.call(arguments)));
            }
            (J.instance = new Q()),
                _class(SurfaceView)
                    ._extends(View_View)
                    ._body(
                        "_init",
                        function () {
                            (this.holderCallback = null), (this.surfaceFrame = null);
                        },
                        "addtHolderCallback",
                        function (t) {
                            this.holderCallback = t;
                        },
                        "getSurfaceFrame",
                        function () {
                            return this.surfaceFrame;
                        },
                        SurfaceView.name,
                        function (t) {
                            View_View._init(this, t), SurfaceView.Initialize(this), (this.surfaceFrame = new Rect(0, 0, this.node.width, this.node.height)), (this.node.className = "SurfaceView");
                        },
                        "lockCanvas",
                        function () {
                            return this.canvas;
                        },
                        "unlockCanvasAndPost",
                        function (t) {},
                        "onSizeChanged",
                        function (t, e, n, i) {
                            View_View.onSizeChanged(this, t, e, n, i), null != this.holderCallback && this.holderCallback.surfaceChanged(this, 0, t, e);
                        },
                        "onVisibilityChanged",
                        function (t, e) {
                            View_View.onVisibilityChanged(this, t, e);
                        },
                        "onAttachedToWindow",
                        function () {
                            View_View.onAttachedToWindow(this), null != this.holderCallback && this.holderCallback.surfaceCreated(this);
                        },
                        "onDetachedFromWindow",
                        function () {
                            View_View.onDetachedFromWindow(this), null != this.holderCallback && this.holderCallback.surfaceDestroyed(this);
                        }
                    ),
                _interface(SurfaceHolder),
                _interface(Callback)._body(
                    "surfaceCreated",
                    function (t) {},
                    "surfaceChanged",
                    function (t, e, n, i) {},
                    "surfaceDestroyed",
                    function (t) {}
                ),
                (SurfaceHolder.Callback = Callback),
                _class(_2DCoordinat)._body(
                    "_init",
                    function () {
                        (this.X = 0), (this.Y = 0);
                    },
                    _2DCoordinat.name,
                    function (t, e) {
                        (this.X = t), (this.Y = e);
                    },
                    "clone",
                    function () {
                        return new _2DCoordinat(this.X, this.Y);
                    },
                    [Number, Number],
                    "set",
                    function (t, e) {
                        (this.X = t), (this.Y = e);
                    },
                    [_2DCoordinat],
                    "set",
                    function (t) {
                        this.set(t.X, t.Y);
                    },
                    "equals",
                    function (t) {
                        if (t instanceof _2DCoordinat) {
                            var e = t;
                            return e.X == this.X && e.Y == this.Y;
                        }
                        return !1;
                    }
                ),
                _class(_2DVector)
                    ._extends(_2DCoordinat)
                    ._instance(
                        _2DVector.name,
                        function (t, e) {
                            _2DCoordinat._init(this, t, e);
                        },
                        [Number, Number],
                        "set",
                        function (t, e) {
                            (this.X = t), (this.Y = e);
                        },
                        [_2DVector],
                        "set",
                        function (t) {
                            (this.X = t.X), (this.Y = t.Y);
                        },
                        "thisSum",
                        function (t) {
                            (this.X = this.X + t.X), (this.Y = this.Y + t.Y);
                        },
                        "getSum",
                        function (t) {
                            return new _2DVector(this.X + t.X, this.Y + t.Y);
                        },
                        "thisDiff",
                        function (t) {
                            (this.X = this.X - t.X), (this.Y = this.Y - t.Y);
                        },
                        "getDiff",
                        function (t) {
                            return new _2DVector(this.X - t.X, this.Y - t.Y);
                        },
                        "thisMultipByScalar",
                        function (t) {
                            (this.X = this.X * t), (this.Y = this.Y * t);
                        },
                        "getMultipByScalar",
                        function (t) {
                            return new _2DVector(this.X * t, this.Y * t);
                        },
                        "getMultipScalar",
                        function (t) {
                            return this.X * t.X + this.Y * t.Y;
                        },
                        "getMultipScalarPseudo",
                        function (t) {
                            return this.X * t.Y - this.Y * t.X;
                        },
                        "isOrtogonal",
                        function (t) {
                            return 0 == int(100 * getMultipScalar(t));
                        },
                        "thisNormal",
                        function () {
                            var t = this.thisModul();
                            (this.X = this.X / t), (this.Y = this.Y / t);
                        },
                        "getNormal",
                        function () {
                            var t = this.thisModul();
                            return 0 != t ? new _2DVector(this.X / t, this.Y / t) : new _2DVector(0, 0);
                        },
                        "getOrtoClock",
                        function () {
                            return new _2DVector(-this.Y, this.X);
                        },
                        "getOrtoClockAnti",
                        function () {
                            return new _2DVector(this.Y, -this.X);
                        },
                        "thisModul",
                        function () {
                            return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
                        },
                        "thisAngleK",
                        function () {
                            return this.Y / this.X;
                        },
                        "getAngleCos",
                        function (t) {
                            var e = this.getMultipScalar(t),
                                n = this.thisModul() * t.thisModul();
                            return 0 == n ? 0 : e / n;
                        },
                        "getAngle",
                        function (t, e) {
                            var n = this.getAngleCos(t);
                            return e ? Math.toDegrees(Math.acos(n)) : Math.acos(n);
                        },
                        "toString",
                        function () {
                            return String.format("(%f:%f)", this.X, this.Y);
                        }
                    ),
                _class(_2DPoint_2DPoint)
                    ._extends(_2DCoordinat)
                    ._body(
                        _2DPoint_2DPoint.name,
                        function () {
                            _2DCoordinat._init(this, 0, 0);
                        },
                        [Number, Number],
                        _2DPoint_2DPoint.name,
                        function (t, e) {
                            _2DCoordinat._init(this, t, e);
                        },
                        [_2DPoint_2DPoint],
                        _2DPoint_2DPoint.name,
                        function (t) {
                            _2DCoordinat._init(this, t.X, t.Y);
                        },
                        "clone",
                        function () {
                            return new _2DPoint_2DPoint(X, Y);
                        },
                        "getCenter",
                        function (t) {
                            return new _2DPoint_2DPoint(0.5 * (this.X + t.X), 0.5 * (this.Y + t.Y));
                        },
                        [_2DVector],
                        "thisSum",
                        function (t) {
                            this.thisSum(t.X, t.Y);
                        },
                        [Number, Number],
                        "thisSum",
                        function (t, e) {
                            (this.X = this.X + t), (this.Y = this.Y + e);
                        },
                        [Number, Number],
                        "getSum",
                        function (t, e) {
                            return new _2DPoint_2DPoint(this.X + t, this.Y + e);
                        },
                        [_2DVector],
                        "getSum",
                        function (t) {
                            return new _2DPoint_2DPoint(this.X + t.X, this.Y + t.Y);
                        },
                        "getDiff",
                        function (t) {
                            return new _2DPoint_2DPoint(this.X - t.X, this.Y - t.Y);
                        },
                        "getVectorEnding",
                        function (t) {
                            return new _2DVector(this.X - t.X, this.Y - t.Y);
                        },
                        "getVectorBegining",
                        function (t) {
                            return new _2DVector(t.X - this.X, t.Y - this.Y);
                        },
                        [Number, Number],
                        "getDistance",
                        function (t, e) {
                            return Math.sqrt(Math.pow(this.X - t, 2) + Math.pow(this.Y - e, 2));
                        },
                        [_2DPoint_2DPoint],
                        "getDistance",
                        function (t) {
                            return Math.sqrt(Math.pow(this.X - t.X, 2) + Math.pow(this.Y - t.Y, 2));
                        },
                        "getAngleK",
                        function (t) {
                            return (this.Y - t.Y) / (this.X - t.X);
                        },
                        [Number, Number],
                        "PointNear",
                        function (t, e) {
                            var n = !1;
                            return e > Math.sqrt(Math.pow(this.X - t.X, 2) + Math.pow(this.Y - t.Y, 2)) && (n = !0), n;
                        },
                        [Number, Number, Number],
                        "PointNear",
                        function (t, e, n) {
                            var i = !1;
                            return n > Math.sqrt(Math.pow(this.X - t, 2) + Math.pow(this.Y - e, 2)) && (i = !0), i;
                        },
                        "isPointInside",
                        function (t) {
                            var e = !1;
                            return Canva.save(), Canva.clipRect(this.X, this.Y, this.X + 1, this.Y + 1, Op.REPLACE), Canva.clipPath(t) && (e = !0), Canva.restore(), e;
                        },
                        "toString",
                        function () {
                            return String.format("(%f:%f)", this.X, this.Y);
                        }
                    ),
                _class(Matrix_Matrix)._instance(
                    function (t) {
                        t.transforms = null;
                    },
                    Matrix_Matrix.name,
                    function () {
                        Matrix_Matrix.Initialize(this), (this.transforms = new ArrayList());
                    },
                    [Matrix_Matrix],
                    Matrix_Matrix.name,
                    function (t) {
                        Matrix_Matrix._init(this), this.transforms.addAll(t.transforms);
                    },
                    "postTranslate",
                    function (t, e) {
                        this.transforms.add(new tt(t, e));
                    },
                    "postRotate",
                    function (t, e, n) {
                        this.transforms.add(new et(t, e, n));
                    },
                    "postScale",
                    function (t, e, n, i) {
                        this.transforms.add(new nt(t, e, n, i));
                    },
                    "setTranslate",
                    function (t, e) {
                        this.transforms.add(new tt(t, e));
                    },
                    "setRotate",
                    function (t) {
                        this.transforms.add(new et(t, 0, 0));
                    },
                    "setScale",
                    function (t, e) {
                        this.transforms.add(new nt(t, e, 0, 0));
                    }
                );
            var tt = (function (t) {
                function Translate(e, n, i) {
                    var o;
                    return void 0 === i && (i = "translate"), ((o = t.call(this, i) || this).x = e), (o.y = n), o;
                }
                return inheritsLoose_inheritsLoose(Translate, t), Translate;
            })(function Transform(t) {
                this.transform = t;
            });
            tt.transform = "translate";
            var et = (function (t) {
                function Rotate(e, n, i) {
                    var o;
                    return ((o = t.call(this, n, i, "rotate") || this).rotate = e), o;
                }
                return inheritsLoose_inheritsLoose(Rotate, t), Rotate;
            })(tt);
            et.transform = "rotate";
            var nt = (function (t) {
                function Scale(e, n, i, o) {
                    var s;
                    return ((s = t.call(this, i, o, "scale") || this).scaleX = e), (s.scaleY = n), s;
                }
                return inheritsLoose_inheritsLoose(Scale, t), Scale;
            })(tt);
            function FillType() {}
            function Path() {
                Path._init.apply(Path, [this].concat(Array.prototype.slice.call(arguments)));
            }
            (nt.transform = "scale"),
                _enum(FillType)._body({ WINDING: 0, EVEN_ODD: 1, INVERSE_WINDING: 2, INVERSE_EVEN_ODD: 3 }),
                _class(Path)._instance(
                    "_static",
                    function () {
                        (this.Direction = { CW: 1 }), (this.FillType = FillType);
                    },
                    function (t) {
                        t.paths = null;
                    },
                    function (t) {
                        t.actions = null;
                    },
                    function (t) {
                        t.matrix = null;
                    },
                    function (t) {
                        t.fillType = 0;
                    },
                    "getFillType",
                    function () {
                        return this.fillType;
                    },
                    "setFillType",
                    function (t) {
                        this.fillType = t;
                    },
                    "isEmpty",
                    function () {
                        return this.actions.isEmpty() && this.paths.isEmpty();
                    },
                    Path.name,
                    function () {
                        Path.Initialize(this), (this.paths = new ArrayList()), (this.actions = new ArrayList()), (this.matrix = new Matrix_Matrix());
                    },
                    [Path],
                    Path.name,
                    function (t) {
                        Path._init(this), this.actions.addAll(t.actions), (this.matrix = new Matrix_Matrix(t.matrix));
                    },
                    [Path],
                    "addPath",
                    function (t) {
                        this.actions.addAll(t.actions);
                    },
                    [Path, Number, Number],
                    "addPath",
                    function (t, e, n) {
                        var i = t.clone(),
                            o = new Matrix_Matrix();
                        o.postTranslate(e, n), (i.matrix = o), this.paths.add(i);
                    },
                    [Path, Matrix_Matrix],
                    "addPath",
                    function (t, e) {
                        var n = t.clone();
                        (n.matrix = e), this.paths.add(n);
                    },
                    "offset",
                    function (t, e) {
                        this.matrix.postTranslate(t, e);
                    },
                    "transform",
                    function (t) {
                        this.matrix = t;
                    },
                    "reset",
                    function () {
                        this.paths.clear(), this.actions.clear(), (this.matrix = new Matrix_Matrix());
                    },
                    "moveTo",
                    function (t, e) {
                        this.actions.add(new ot(t, e));
                    },
                    "lineTo",
                    function (t, e) {
                        this.actions.add(new st(t, e));
                    },
                    [RectF, Number, Number],
                    "arcTo",
                    function (t, e, n) {
                        this.arcTo(t.left, t.top, t.right, t.bottom, e, n, !1);
                    },
                    [Number, Number, Number, Number, Number, Number, Boolean],
                    "arcTo",
                    function (t, e, n, i, o, s, r) {
                        this.actions.add(new rt(t, e, n, i, o, s));
                    },
                    "addRect",
                    function (t, e, n, i, o) {
                        this.actions.add(new at(t, e, n, i, o));
                    },
                    [RectF, Number, Number, Number],
                    "addRoundRect",
                    function (t, e, n, i) {
                        this.addRoundRect(t.left, t.top, t.right, t.bottom, e, n, i);
                    },
                    [Number, Number, Number, Number, Number, Number, Number],
                    "addRoundRect",
                    function (t, e, n, i, o, s, r) {
                        this.actions.add(new ct(t, e, n, i, o, s, r));
                    },
                    "addCircle",
                    function (t, e, n, i) {
                        this.actions.add(new ut(t, e, n, i));
                    },
                    [RectF, Number],
                    "addOval",
                    function (t, e) {
                        this.addOval(t.left, t.top, t.right, t.bottom, e);
                    },
                    [Number, Number, Number, Number, Number],
                    "addOval",
                    function (t, e, n, i, o) {
                        this.actions.add(new lt(t, e, n, i, o));
                    },
                    "close",
                    function () {
                        this.actions.add(new ht());
                    }
                );
            var it = function Action(t) {
                    this.action = t;
                },
                ot = (function (t) {
                    function MoveTo(e, n, i) {
                        var o;
                        return void 0 === i && (i = "moveTo"), ((o = t.call(this, i) || this).x = e), (o.y = n), o;
                    }
                    return inheritsLoose_inheritsLoose(MoveTo, t), MoveTo;
                })(it),
                st = (function (t) {
                    function LineTo(e, n) {
                        return t.call(this, e, n, "lineTo") || this;
                    }
                    return inheritsLoose_inheritsLoose(LineTo, t), LineTo;
                })(ot),
                rt = (function (t) {
                    function ArcTo(e, n, i, o, s, r) {
                        var a;
                        return (
                            ((a = t.call(this, (e + i) / 2, (n + o) / 2, "arcTo") || this).radiusX = (i - e) / 2),
                            (a.radiusY = (o - n) / 2),
                            (a.startAngle = (s * Math.PI) / 180),
                            (a.endAngle = a.startAngle + (r * Math.PI) / 180),
                            (a.dir = r < 0),
                            a
                        );
                    }
                    return inheritsLoose_inheritsLoose(ArcTo, t), ArcTo;
                })(ot),
                at = (function (t) {
                    function AddRect(e, n, i, o, s) {
                        var r;
                        return ((r = t.call(this, "addRect") || this).left = e), (r.right = i), (r.top = n), (r.bottom = o), (r.dir = s), r;
                    }
                    return inheritsLoose_inheritsLoose(AddRect, t), AddRect;
                })(it),
                ct = (function (t) {
                    function AddRectRound(e, n, i, o, s, r, a) {
                        var c;
                        return ((c = t.call(this, "addRectRound") || this).left = e), (c.right = i), (c.top = n), (c.bottom = o), (c.rx = s), (c.ry = r), (c.dir = a), c;
                    }
                    return inheritsLoose_inheritsLoose(AddRectRound, t), AddRectRound;
                })(it),
                lt = (function (t) {
                    function AddOval(e, n, i, o, s) {
                        var r;
                        return ((r = t.call(this, "addOval") || this).x = (e + i) / 2), (r.y = (n + o) / 2), (r.radiusX = (i - e) / 2), (r.radiusY = (o - n) / 2), (r.dir = s), r;
                    }
                    return inheritsLoose_inheritsLoose(AddOval, t), AddOval;
                })(it),
                ut = (function (t) {
                    function AddCircle(e, n, i, o) {
                        var s;
                        return ((s = t.call(this, "addCircle") || this).x = e), (s.y = n), (s.radius = i), (s.dir = o), s;
                    }
                    return inheritsLoose_inheritsLoose(AddCircle, t), AddCircle;
                })(it),
                ht = (function (t) {
                    function Close() {
                        return t.call(this, "close") || this;
                    }
                    return inheritsLoose_inheritsLoose(Close, t), Close;
                })(it);
            function IDraw() {}
            function IInvalidatePath() {}
            function ITouch() {}
            function ISceneComponent() {}
            function UpdateMode() {}
            function SceneComponent() {
                SceneComponent._init.apply(SceneComponent, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ISceneActivity() {}
            function ISceneAttach() {}
            function ISceneResourceLoad() {}
            function IScenePreview() {}
            function IScene() {}
            function Scene_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function Scene_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Scene_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Scene_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function Scene_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function Scene() {
                Scene._init.apply(Scene, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneRendererListener() {}
            function SceneRenderer_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function SceneRenderer_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return SceneRenderer_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SceneRenderer_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function SceneRenderer_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function SceneRenderer() {
                SceneRenderer._init.apply(SceneRenderer, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneDrawable() {
                SceneDrawable._init.apply(SceneDrawable, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneViewSurface() {
                SceneViewSurface._init.apply(SceneViewSurface, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Typeface() {
                Typeface._init.apply(Typeface, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Label() {
                Label._init.apply(Label, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ProgressBar() {
                ProgressBar._init.apply(ProgressBar, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Back() {
                Back._init.apply(Back, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _interface(IDraw)._body(function onDraw(t) {}),
                _interface(IInvalidatePath)._body("invalidatePath", function (t) {}),
                _interface(ITouch)._body("onTouchEvent", function (t) {}),
                _interface(ISceneComponent)
                    ._extends(IDraw, IInvalidatePath, ITouch)
                    ._body(
                        "onUpdate",
                        function (t) {},
                        "onRecycle",
                        function (t) {}
                    ),
                _enum(UpdateMode)._body({ CLEAR: 0, DRAW: 1 }),
                _class(SceneComponent)
                    ._implements(ISceneComponent)
                    ._body(
                        "_static",
                        function () {
                            (this.TAG = "SceneComponent"), (this.paintDebug = null), (this.UpdateMode = UpdateMode);
                        },
                        function (t) {
                            t.paintShadow = null;
                        },
                        "getPaintShadow",
                        function () {
                            return this.paintShadow;
                        },
                        function (t) {
                            t.dxShadow = 0;
                        },
                        "getDxShadow",
                        function () {
                            return this.dxShadow;
                        },
                        function (t) {
                            t.dyShadow = 0;
                        },
                        "getDyShadow",
                        function () {
                            return this.dyShadow;
                        },
                        [p, Number, Number],
                        "setShadow",
                        function (t, e, n) {
                            this.paintShadow = null;
                        },
                        [S, p, Number, Number],
                        "setShadow",
                        function (t, e, n, i) {
                            t.setShadow(new v(e, n, i));
                        },
                        "isDrawShadow",
                        function () {
                            return null != this.paintShadow;
                        },
                        function (t) {
                            t.pathMask = null;
                        },
                        "getPathMask",
                        function () {
                            return this.pathMask;
                        },
                        [Path],
                        "setMask",
                        function (t) {
                            (this.pathMask = new Path(t)), this.pathMask.offset(-this.offsetH, -this.offsetV);
                        },
                        "_static",
                        function () {
                            (this.paintDebug = new S()), this.paintDebug.setColor(p.RED), this.paintDebug.setStyle(S.Style.STROKE), this.paintDebug.setStrokeWidth(2);
                        },
                        function (t) {
                            t.scena = null;
                        },
                        "setScena",
                        function (t) {
                            this.scena = t;
                        },
                        "getScena",
                        function () {
                            return this.scena;
                        },
                        function (t) {
                            t.onClickListener = null;
                        },
                        "setOnClickListener",
                        function (t) {
                            this.onClickListener = t;
                        },
                        function (t) {
                            t.x = 0;
                        },
                        "getX",
                        function () {
                            return this.x;
                        },
                        "setX",
                        function (t) {
                            this.invalidateClear(), (this.x = t), this.invalidate();
                        },
                        "setXOnly",
                        function (t) {
                            this.x = t;
                        },
                        function (t) {
                            t.y = 0;
                        },
                        "getY",
                        function () {
                            return this.y;
                        },
                        "setY",
                        function (t) {
                            this.invalidateClear(), (this.y = t), this.invalidate();
                        },
                        "setYOnly",
                        function (t) {
                            this.y = t;
                        },
                        function (t) {
                            t.width = 0;
                        },
                        "getWidth",
                        function () {
                            return this.width;
                        },
                        "setWidth",
                        function (t) {
                            this.invalidateClear(), (this.width = t), this.callValues(), this.invalidate();
                        },
                        function (t) {
                            t.widthScale = 0;
                        },
                        "getWidthScale",
                        function () {
                            return this.widthScale;
                        },
                        "setWidthScale",
                        function (t) {
                            this.invalidateClear(), (this.width = t / scale), this.callValues(), this.invalidate();
                        },
                        function (t) {
                            t.height = 0;
                        },
                        "getHeight",
                        function () {
                            return this.height;
                        },
                        "setHeight",
                        function (t) {
                            this.invalidateClear(), (this.height = t), this.callValues(), this.invalidate();
                        },
                        function (t) {
                            t.heightScale = 0;
                        },
                        "getHeightScale",
                        function () {
                            return this.heightScale;
                        },
                        "setHeightScale",
                        function (t) {
                            this.invalidateClear(), (this.height = t / scale), this.callValues(), this.invalidate();
                        },
                        function (t) {
                            t.offsetH = 0;
                        },
                        "getOffsetH",
                        function () {
                            return this.offsetH;
                        },
                        function (t) {
                            t.offsetV = 0;
                        },
                        "getOffsetV",
                        function () {
                            return this.offsetV;
                        },
                        function (t) {
                            t.offsetHScale = 0;
                        },
                        "getOffsetHScale",
                        function () {
                            return this.offsetHScale;
                        },
                        function (t) {
                            t.offsetVScale = 0;
                        },
                        "getOffsetVScale",
                        function () {
                            return this.offsetVScale;
                        },
                        "left",
                        function () {
                            return this.x - this.offsetH;
                        },
                        "top",
                        function () {
                            return this.y - this.offsetV;
                        },
                        "right",
                        function () {
                            return this.x + this.offsetH;
                        },
                        "bottom",
                        function () {
                            return this.y + this.offsetV;
                        },
                        function (t) {
                            t.scale = 1;
                        },
                        "getScale",
                        function () {
                            return this.scale;
                        },
                        "setScale",
                        function (t) {
                            this.invalidateClear(), t < this.scaleMin ? (this.scale = this.scaleMin) : t > this.scaleMax ? (this.scale = this.scaleMax) : (this.scale = t), this.callValues(), this.invalidate();
                        },
                        "setScaleOnly",
                        function (t) {
                            t < this.scaleMin ? (this.scale = this.scaleMin) : t > this.scaleMax ? (this.scale = this.scaleMax) : (this.scale = t), this.callValues();
                        },
                        function (t) {
                            t.scaleMin = 1e-6;
                        },
                        "getScaleMin",
                        function () {
                            return this.scaleMin;
                        },
                        "setScaleMin",
                        function (t) {
                            this.scaleMin = t;
                        },
                        function (t) {
                            t.scaleMax = 1e6;
                        },
                        "getScaleMax",
                        function () {
                            return this.scaleMax;
                        },
                        "setScaleMax",
                        function (t) {
                            this.scaleMax = t;
                        },
                        function (t) {
                            t.rotate = 0;
                        },
                        "getRotate",
                        function () {
                            return this.rotate;
                        },
                        "setRotate",
                        function (t) {
                            if (Number.isNaN(t)) throw new IllegalArgumentException();
                            this.invalidateClear(), (this.rotate = t), this.invalidate();
                        },
                        "setRotateOnly",
                        function (t) {
                            if (isNaN(t)) throw new IllegalArgumentException();
                            this.rotate = t;
                        },
                        function (t) {
                            t.visible = !0;
                        },
                        "isVisible",
                        function () {
                            return this.visible;
                        },
                        "setVisible",
                        function (t) {
                            this.visible != t && ((this.visible = t), this.invalidate());
                        },
                        function (t) {
                            t.enable = !0;
                        },
                        "isEnable",
                        function () {
                            return this.enable;
                        },
                        "setEnable",
                        function (t) {
                            this.enable != t && ((this.enable = t), this.invalidate());
                        },
                        "callValues",
                        function () {
                            (this.widthScale = this.width * this.scale),
                                (this.heightScale = this.height * this.scale),
                                (this.offsetH = 0.5 * this.width),
                                (this.offsetV = 0.5 * this.height),
                                (this.offsetHScale = this.offsetH * this.scale),
                                (this.offsetVScale = this.offsetV * this.scale);
                        },
                        "setPosition",
                        function (t, e) {
                            this.invalidateClear(), (this.x = t), (this.y = e), this.invalidate();
                        },
                        "setPositionOnly",
                        function (t, e) {
                            (this.x = t), (this.y = e);
                        },
                        "setSize",
                        function (t, e) {
                            this.invalidateClear(), (this.width = t), (this.height = e), this.callValues(), this.invalidate();
                        },
                        "setSizeOnly",
                        function (t, e) {
                            (this.width = t), (this.height = e), this.callValues();
                        },
                        "setSizeScale",
                        function (t, e) {
                            this.invalidateClear(), (this.width = t / scale), (this.height = e / scale), this.callValues(), this.invalidate();
                        },
                        "setScaleFitProportions",
                        function (t, e) {
                            this.invalidateClear();
                            var n = t / this.width,
                                i = e / this.height;
                            (this.scale = Math.min(n, i)), this.callValues(), this.invalidate();
                        },
                        "setParam",
                        function (t, e, n, i) {
                            this.setPosition(t, e), this.setSize(n, i), this.callValues();
                        },
                        "setParamOnly",
                        function (t, e, n, i) {
                            this.setPositionOnly(t, e), this.setSizeOnly(n, i), this.callValues();
                        },
                        "getOffsetEvent",
                        function (t) {
                            return new _2DVector(t.getX() - this.x, t.getY() - this.y);
                        },
                        "isCaptureRelative",
                        function (t) {
                            var e = MotionEvent_MotionEvent.obtain(t);
                            e.offsetLocation(-this.x, -this.y);
                            var n = this.isCapture(e);
                            return e.recycle(), n;
                        },
                        [MotionEvent_MotionEvent],
                        "isCapture",
                        function (t) {
                            return this.isCapture(t.getX(), t.getY());
                        },
                        [Number, Number],
                        "isCapture",
                        function (t, e) {
                            return t > -this.offsetHScale && t < this.offsetHScale && e > -this.offsetVScale && e < this.offsetVScale;
                        },
                        "_init",
                        function () {
                            (this.pathClear = new Path()), (this.pathDraw = new Path());
                        },
                        "invalidateCancel",
                        function () {
                            this.pathClear.reset(), this.pathDraw.reset();
                        },
                        "invalidateClear",
                        function () {
                            this.invalidate(UpdateMode.CLEAR);
                        },
                        "invalidate",
                        function () {
                            this.invalidate(UpdateMode.DRAW);
                        },
                        [UpdateMode],
                        "invalidate",
                        function (t) {
                            var e = new Path();
                            e.addRect(-this.offsetH - 10, -this.offsetV - 10, this.offsetH + 10, this.offsetV + 10, Path.Direction.CW), this.invalidate(t, e);
                        },
                        [UpdateMode, Path],
                        "invalidate",
                        function (t, e) {
                            var n = new Matrix_Matrix();
                            n.postTranslate(this.x, this.y), n.postRotate(this.rotate, this.x, this.y), n.postScale(this.scale, this.scale, this.x, this.y), this.invalidate(t, e, n);
                        },
                        [UpdateMode, Path, Matrix_Matrix],
                        "invalidate",
                        function (t, e, n) {
                            switch (t) {
                                case UpdateMode.CLEAR:
                                    this.pathClear.isEmpty() && this.pathClear.addPath(e, n);
                                    break;
                                case UpdateMode.DRAW:
                                    this.pathDraw.reset(), this.pathDraw.addPath(e, n);
                            }
                        },
                        "invalidatePath",
                        function (t) {
                            var e = !1;
                            return this.pathClear.isEmpty() || (t.addPath(this.pathClear), this.pathClear.reset(), (e = !0)), this.pathDraw.isEmpty() || (t.addPath(this.pathDraw), this.pathDraw.reset(), (e = !0)), e;
                        },
                        "toString",
                        function () {
                            return String.format("x: %.3f, y: %.3f", x, y);
                        },
                        "onDraw",
                        function (t) {},
                        "onTouchEvent",
                        function (t) {
                            return !1;
                        },
                        "onUpdate",
                        function (t) {},
                        "onRecycle",
                        function (t) {
                            null != this.pathMask && this.pathMask.reset(), null != this.paintShadow && this.paintShadow.reset();
                        }
                    ),
                _interface(ISceneActivity)._body(
                    "getActivityCreate",
                    function () {},
                    "setActivityCreate",
                    function (t) {},
                    "getActivityShow",
                    function () {},
                    "setActivityShow",
                    function (t) {}
                ),
                _interface(ISceneAttach)._body(
                    [SceneComponent],
                    "attachCommun",
                    function (t) {},
                    [SceneComponent, Number],
                    "attachCommun",
                    function (t, e) {},
                    "deattachCommun",
                    function (t) {},
                    "clearCommun",
                    function () {}
                ),
                _interface(ISceneResourceLoad)._body(
                    "getLoadProgressListener",
                    function () {},
                    "setLoadProgressListener",
                    function (t) {},
                    "loadResource",
                    function (t) {}
                ),
                _interface(IScenePreview)._body("getPreview", function (t, e, n) {}),
                _interface(IScene)._extends(ISceneActivity, ISceneAttach, ISceneComponent, ISceneResourceLoad, IScenePreview),
                _class(Scene)
                    ._implements(IScene)
                    ._body(
                        "_init",
                        function () {
                            (this.resource = new HashMap_HashMap()), (this.components = new ArrayList()), this.listenerLoadProgress;
                        },
                        Scene.name,
                        function (t) {
                            Scene.Initialize(this), this.setActivityCreate(t);
                        },
                        "setLoadProgressListener",
                        function (t) {
                            this.listenerLoadProgress = t;
                        },
                        "getLoadProgressListener",
                        function () {
                            return this.listenerLoadProgress;
                        },
                        "loadResource",
                        function (t) {
                            var e = 0;
                            this.resource.put("", Serializ.get().loadData("", t));
                            for (var n, i = Scene_createForOfIteratorHelperLoose(resource.keySet()); !(n = i()).done; )
                                (res = n.value), resource.put(res, Serializ.get().loadData(res, t)), e++, null != listenerLoadProgress && listenerLoadProgress.onProgress((100 * (e + 1)) / resource.size());
                        },
                        function (t) {
                            t.activityCreate = null;
                        },
                        "getActivityCreate",
                        function () {
                            return this.activityCreate;
                        },
                        "setActivityCreate",
                        function (t) {
                            this.activityCreate = t;
                        },
                        function (t) {
                            t.activityShow = null;
                        },
                        "getActivityShow",
                        function () {
                            return this.activityShow;
                        },
                        "setActivityShow",
                        function (t) {
                            this.activityShow = t;
                        },
                        [SceneComponent],
                        "attachCommun",
                        function (t) {
                            t.setScena(this), this.components.add(t);
                        },
                        [SceneComponent, Number],
                        "attachCommun",
                        function (t, e) {
                            t.setScena(this), this.components.add(e, t);
                        },
                        "deattachCommun",
                        function (t) {
                            t.setScena(null), this.components.remove(t);
                        },
                        "clearCommun",
                        function () {
                            this.components.clear();
                        },
                        "invalidatePath",
                        function (t) {
                            try {
                                for (var e, n = Scene_createForOfIteratorHelperLoose(this.components); !(e = n()).done; ) {
                                    var i = e.value;
                                    try {
                                        i.invalidatePath(t);
                                    } catch (t) {
                                        t.printStackTrace();
                                    }
                                }
                            } catch (t) {
                                t.printStackTrace();
                            }
                            return !t.isEmpty();
                        },
                        "onDraw",
                        function (t) {
                            try {
                                for (var e, n = Scene_createForOfIteratorHelperLoose(this.components); !(e = n()).done; ) {
                                    var i = e.value;
                                    try {
                                        i.onDraw(t);
                                    } catch (t) {
                                        t.printStackTrace();
                                    }
                                }
                            } catch (t) {
                                t.printStackTrace();
                            }
                        },
                        "onTouchEvent",
                        function (t) {
                            try {
                                for (var e = this.components.size() - 1; e >= 0; e--) {
                                    if (this.components.get(e).onTouchEvent(t)) break;
                                }
                            } catch (t) {
                                t.printStackTrace();
                            }
                            return !0;
                        },
                        "onUpdate",
                        function (t) {
                            try {
                                for (component in components) component.onUpdate(t);
                            } catch (t) {
                                t.printStackTrace();
                            }
                        },
                        "onRecycle",
                        function (t) {
                            for (var e, n = Scene_createForOfIteratorHelperLoose(this.components); !(e = n()).done; ) {
                                e.value.onRecycle(t);
                            }
                            this.components.clear();
                            for (var i, o = Scene_createForOfIteratorHelperLoose(this.resource.values()); !(i = o()).done; ) {
                                var s = i.value;
                                null != s && s.recycle();
                            }
                        },
                        "getPreview",
                        function (t, e, n) {
                            if (0 == t || 0 == e) return null;
                            var i = Bitmap.createBitmap(parseInt(t * n), parseInt(e * n), Bitmap.Config.RGB_565);
                            i.setDensity(N.DEN_DEF);
                            var o = new Canvas_Canvas(i);
                            o.scale(n, n);
                            try {
                                for (var s, r = Scene_createForOfIteratorHelperLoose(this.components); !(s = r()).done; ) {
                                    s.value.onDraw(o);
                                }
                            } catch (t) {
                                t.printStackTrace();
                            }
                            return i;
                        }
                    ),
                _interface(SceneRendererListener)._body(
                    "surfaceCreated",
                    function (t) {},
                    "surfaceChanged",
                    function (t, e, n) {},
                    "surfaceDestroyed",
                    function (t) {}
                ),
                _class(SceneRenderer)
                    ._implements(SceneRendererListener)
                    ._body(
                        "_static",
                        function () {
                            (this.TAG = "SceneRenderer"), (this.lockDrawable = new Object()), (this.sceneDrawable = new HashMap_HashMap());
                        },
                        "_init",
                        function () {
                            (this.scene = null),
                                (this.callback = null),
                                (this.pixelFormat = 0),
                                (this.countThread = 0),
                                (this.msSleep = 0),
                                (this.drawFps = !1),
                                (this.timePrev = e.currentTimeMillis()),
                                (this.timeNew = 0),
                                (this.loop = 0),
                                (this.fps = 0);
                        },
                        "_static",
                        function () {
                            (this.paint = new S()), this.paint.setColor(p.BLUE), this.paint.setStyle(S.Style.STROKE), this.paint.setStrokeWidth(2), this.paint.setAlpha(100), this.paint.setTextAlign(S.Align.LEFT), this.paint.setTextSize(80);
                        },
                        SceneRenderer.name,
                        function (t) {
                            (this.scene = t),
                                (this.pixelFormat = Q.get().getPixelFormat()),
                                (this.countThread = Q.get().getCountThread()),
                                (this.msSleep = Q.get().getMsSleep()),
                                (this.drawFps = Q.get().isDrawFps()),
                                (this.callback = Q.get().getCallback());
                        },
                        "surfaceCreated",
                        function (t) {
                            if ((Loger.get().d(SceneRenderer.TAG, String.format("surfaceCreated holder: %s", t.getClass().getSimpleName())), !SceneRenderer.sceneDrawable.isEmpty()))
                                for (var e, n = SceneRenderer_createForOfIteratorHelperLoose(SceneRenderer.sceneDrawable.keySet()); !(e = n()).done; ) {
                                    var i = e.value;
                                    Loger.get().d(SceneRenderer.TAG, String.format("Prev Drawer of scene %s drawing on surface!!!", i.getClass().getSimpleName())), this.surfaceDestroyed(i);
                                }
                            for (var o = new ArrayList(), s = 0; s < this.countThread; s++) o.add(new SceneDrawable(s, this, t));
                            SceneRenderer.sceneDrawable.put(t, o);
                        },
                        "surfaceChanged",
                        function (t, e, n) {
                            0 == e && Loger.get().e(SceneRenderer.TAG, "SURFACE WIDTH IS ZERO"),
                                0 == n && Loger.get().e(SceneRenderer.TAG, "SURFACE HEIGHT IS ZERO"),
                                Loger.get().d(SceneRenderer.TAG, String.format("surfaceChanged holder: %s, w: %d, h: %d", t.getClass().getSimpleName(), e, n));
                        },
                        "surfaceDestroyed",
                        function (t) {
                            Loger.get().d(SceneRenderer.TAG, String.format("surfaceDestroyed holder: %s", t.getClass().getSimpleName()));
                            var e = null;
                            if ((SceneRenderer.sceneDrawable.containsKey(t) && (e = SceneRenderer.sceneDrawable.get(t)), null != e)) {
                                for (var n = 0; n < e.size(); n++)
                                    null != e.get(n) && (Loger.get().d(SceneRenderer.TAG, String.format("surfaceDestroyed holder: %s drawer %s", t.getClass().getSimpleName(), e.get(n).getName())), e.get(n).stoped(), e.remove(n), n--);
                                SceneRenderer.sceneDrawable.remove(t);
                            }
                        }
                    ),
                _class(SceneDrawable)
                    ._extends(Thread_Thread)
                    ._instance(
                        "_init",
                        function () {
                            (this.cont = !0),
                                (this.sr = null),
                                (this.holder = null),
                                (this.tempCanvas = null),
                                (this.tempCanvasBitmap = null),
                                (this.path = new Path()),
                                (this.p = new Path()),
                                (this.frameDraw = new Rect()),
                                (this.frameSurface = new Rect()),
                                (this.frameCanvas = new Rect()),
                                (this.redraw = 0),
                                (this.badGl = !1);
                        },
                        "_static",
                        function () {
                            this.REDRAW_COUNT = 3;
                        },
                        SceneDrawable.name,
                        function (t, e, n) {
                            Thread_Thread._init(this),
                                SceneDrawable.Initialize(this),
                                this.setDrawFrame(!0),
                                this.setName("Drawable scene " + t + " for view " + n.getClass().getSimpleName()),
                                (this.sr = e),
                                (this.holder = n),
                                (this.badGl = !1),
                                this.run();
                        },
                        "run",
                        function () {
                            if (this.cont) {
                                if (
                                    (this.sr.drawFps &&
                                        ((this.sr.timeNew = e.currentTimeMillis()),
                                        (this.sr.loop = this.sr.timeNew - this.sr.timePrev),
                                        (this.sr.loop = this.sr.loop > 0 ? this.sr.loop : 1),
                                        (this.sr.fps = 1e3 / this.sr.loop),
                                        (this.sr.timePrev = this.sr.timeNew)),
                                    !this.cont)
                                )
                                    return;
                                try {
                                    var t;
                                    null != (t = this.holder.lockCanvas()) &&
                                        (this.holder.onDraw(t),
                                        this.sr.drawFps &&
                                            (this.p.reset(),
                                            this.p.addPath(this.path),
                                            t.drawPath(this.p, SceneRenderer.paint),
                                            t.drawText(String.format("fps: %d", this.sr.fps), 100, 0.15 * N.HT, SceneRenderer.paint),
                                            t.drawText(String.format("loop: %d", this.sr.loop), 100, 0.25 * N.HT, SceneRenderer.paint)),
                                        this.holder.unlockCanvasAndPost(t));
                                } catch (t) {
                                    t.printStackTrace();
                                }
                                if (!this.cont) return;
                                this.sleep(this.sr.msSleep);
                            }
                        },
                        "stoped",
                        function () {
                            Loger.get().d(SceneRenderer.TAG, String.format("END thread drawer %s", this.getName())), (this.cont = !1);
                            try {
                                this.join();
                            } catch (t) {
                                t.printStackTrace();
                            }
                            null != this.tempCanvasBitmap && this.tempCanvasBitmap.recycle();
                        }
                    ),
                _class(SceneViewSurface)
                    ._extends(SurfaceView)
                    ._body(
                        "_init",
                        function () {
                            (this.scene = null), (this.width = 0), (this.height = 0), (this.badGl = !1), (this.sceneRendererListener = null);
                        },
                        "setRenderer",
                        function (t) {
                            (this.sceneRendererListener = t),
                                this.addtHolderCallback(
                                    new ((function (e) {
                                        function _class2() {
                                            return e.apply(this, arguments) || this;
                                        }
                                        inheritsLoose_inheritsLoose(_class2, e);
                                        var n = _class2.prototype;
                                        return (
                                            (n.surfaceCreated = function surfaceCreated(e) {
                                                t.surfaceCreated(e);
                                            }),
                                            (n.surfaceChanged = function surfaceChanged(e, n, i, o) {
                                                t.surfaceChanged(e, i, o);
                                            }),
                                            (n.surfaceDestroyed = function surfaceDestroyed(e) {
                                                t.surfaceDestroyed(e);
                                            }),
                                            _class2
                                        );
                                    })(SurfaceHolder.Callback))()
                                );
                        },
                        SceneViewSurface.name,
                        function (t) {
                            SurfaceView._init(this, t), SceneViewSurface.Initialize(this), (this.scene = new Scene(t)), this.setRenderer(new SceneRenderer(this)), this.setBadGl();
                        },
                        "setBadGl",
                        function () {},
                        "onMeasure",
                        function (t, e) {
                            (this.height = View_View.MeasureSpec.getSize(e)), (this.width = View_View.MeasureSpec.getSize(t)), setMeasuredDimension(this.width, this.height);
                        },
                        "onSizeChanged",
                        function (t, e, n, i) {
                            SurfaceView.onSizeChanged(this, t, e, n, i), ScenaParametr.reinit(t, e);
                        },
                        "onWindowVisibilityChanged",
                        function (t) {
                            SurfaceView.onWindowVisibilityChanged(this, t);
                        },
                        "onAttachedToWindow",
                        function () {
                            SurfaceView.onAttachedToWindow(this);
                        },
                        "onDetachedFromWindow",
                        function () {
                            SurfaceView.onDetachedFromWindow(this);
                        },
                        "onStartView",
                        function () {},
                        "onResumeView",
                        function () {},
                        "onPauseView",
                        function () {},
                        "onStopView",
                        function () {},
                        "setLoadProgressListener",
                        function (t) {
                            this.scene.setLoadProgressListener(t);
                        },
                        "getLoadProgressListener",
                        function () {
                            return this.scene.getLoadProgressListener();
                        },
                        "loadResource",
                        function (t) {
                            this.scene.loadResource(t);
                        },
                        "getActivityCreate",
                        function () {
                            return this.scene.getActivityCreate();
                        },
                        "setActivityCreate",
                        function (t) {
                            this.scene.setActivityCreate(t);
                        },
                        "getActivityShow",
                        function () {
                            return this.scene.getActivityShow();
                        },
                        "setActivityShow",
                        function (t) {
                            this.scene.setActivityShow(t);
                        },
                        [SceneComponent],
                        "attachCommun",
                        function (t) {
                            this.scene.attachCommun(t);
                        },
                        [SceneComponent, Number],
                        "attachCommun",
                        function (t, e) {
                            this.scene.attachCommun(t, e);
                        },
                        "deattachCommun",
                        function (t) {
                            this.scene.deattachCommun(t);
                        },
                        "clearCommun",
                        function () {
                            this.scene.clearCommun();
                        },
                        "invalidatePath",
                        function (t) {
                            return this.scene.invalidatePath(t);
                        },
                        "onDraw",
                        function (t) {
                            View_View.onDraw(this, t), this.scene.onDraw(t);
                        },
                        "onTouchEvent",
                        function (t) {
                            return this.scene.onTouchEvent(t);
                        },
                        "onUpdate",
                        function (t) {
                            this.scene.onUpdate(t);
                        },
                        "onRecycle",
                        function (t) {
                            this.scene.onRecycle(t);
                        },
                        "getPreview",
                        function (t, e, n) {
                            return this.scene.getPreview(t, e, n);
                        }
                    ),
                _class(Typeface)
                    ._instance(
                        "_static",
                        function () {
                            (this.NORMAL = ""), (this.BOLD = "bold"), (this.ITALIC = "italic"), (this.BOLD_ITALIC = "bold italic");
                        },
                        "_init",
                        function () {
                            (this.familyName = null), (this.style = null);
                        },
                        Typeface.name,
                        function (t, e) {
                            (this.familyName = t), (this.style = e);
                        }
                    )
                    ._static("create", function (t, e) {
                        return new Typeface((t = t.replace("-condensed", "")), e);
                    }),
                _class(Label)
                    ._extends(SceneComponent)
                    ._body(
                        function (t) {
                            (t.text = ""), (t.paintText = new S()), (t.paintContur = new S()), (t.conturDraw = !1);
                        },
                        [String, Typeface, p, Number],
                        Label.name,
                        function (t, e, n, i) {
                            SceneComponent._init(this),
                                Label.Initialize(this),
                                (this.text = t),
                                this.paintText.setColor(n),
                                this.paintText.setTypeface(e),
                                this.paintText.setStyle(S.Style.FILL),
                                this.paintText.setTextAlign(i),
                                this.paintText.setTextSize(this.height),
                                this.paintText.setAntiAlias(!0);
                        },
                        [String, Typeface, p, Number, Number, Number, Number],
                        Label.name,
                        function (t, e, n, i, o, s, r) {
                            Label._init(this, t, e, n, i), this.setParam(o, s, 0, r);
                        },
                        [String, Typeface, p, Number, Number, Number, Number, Number],
                        Label.name,
                        function (t, e, n, i, o, s, r, a) {
                            Label._init(this, t, e, n, i), this.setParam(o, s, 0, r), (this.scale = a);
                        },
                        "setTextHeight",
                        function (t) {
                            this.paintText.setTextSize(t);
                        },
                        [p, Number, Number],
                        "setShadow",
                        function (t, e, n) {
                            SceneComponent.setShadow(this, this.paintText, t, e, n),
                                null != this.getPaintShadow() &&
                                    (this.getPaintShadow().setTextAlign(paintText.getTextAlign()),
                                    this.getPaintShadow().setTypeface(paintText.getTypeface()),
                                    this.getPaintShadow().setStyle(paintText.getStyle()),
                                    this.getPaintShadow().setTextSize(paintText.getTextSize()));
                        },
                        "setSize",
                        function (t, e) {
                            this.paintText.setTextSize(e), this.conturDraw && this.paintContur.setTextSize(e), null != this.getPaintShadow() && this.getPaintShadow().setTextSize(e), SceneComponent.setSize(this, t, e);
                        },
                        "setParam",
                        function (t, e, n, i) {
                            SceneComponent.setParam(this, t, e, n, i), this.setSize(n, i);
                        },
                        [Boolean, Number, Number],
                        "setConturParam",
                        function (t, e, n) {
                            return (
                                (this.conturDraw = t),
                                this.paintContur.setColor(e),
                                this.paintContur.setTypeface(this.paintText.getTypeface()),
                                this.paintContur.setStyle(S.Style.STROKE),
                                this.paintContur.setStrokeWidth(n),
                                this.paintContur.setTextAlign(this.paintText.getTextAlign()),
                                this.paintContur.setTextSize(this.paintText.getTextSize()),
                                this.paintContur.setAntiAlias(!0),
                                this.invalidate(),
                                this
                            );
                        },
                        [Boolean, Number, Number, Number],
                        "setConturParam",
                        function (t, e, n, i) {
                            return (
                                (this.conturDraw = t),
                                this.paintContur.setColor(e),
                                this.paintContur.setTypeface(this.paintText.getTypeface()),
                                this.paintContur.setStyle(f.STROKE),
                                this.paintContur.setStrokeWidth(n),
                                this.paintContur.setTextAlign(this.paintText.getTextAlign()),
                                this.paintContur.setTextSize(this.paintText.getTextSize()),
                                this.paintContur.setAntiAlias(!0),
                                this.paintContur.setMaskFilter(new D(i, D.Blur.NORMAL)),
                                this.invalidate(),
                                this
                            );
                        },
                        "setAlpha",
                        function (t) {
                            this.paintText.setAlpha(t), this.paintContur.setAlpha(t), this.getPaintShadow().setAlpha(t), this.invalidate();
                        },
                        "setText",
                        function (t) {
                            (this.text = t), this.invalidate();
                        },
                        "onDraw",
                        function (t) {
                            this.visible &&
                                (t.save(),
                                t.translate(this.x, this.y),
                                t.rotate(this.rotate),
                                t.scale(this.scale, this.scale),
                                this.isDrawShadow() && t.drawText(this.text, this.paintText.getTextAlign() == g.CENTER ? 0 : -this.offsetH + this.getDxShadow(), this.offsetV + this.getDyShadow(), this.getPaintShadow()),
                                this.conturDraw && t.drawText(this.text, this.paintContur.getTextAlign() == g.CENTER ? 0 : -this.offsetH, this.offsetV, this.paintContur),
                                t.drawText(this.text, this.paintText.getTextAlign() == S.Align.CENTER ? 0 : -this.offsetH, this.offsetV, this.paintText),
                                t.restore());
                        },
                        "onRecycle",
                        function (t) {
                            (this.text = null), (this.paintText = null), (this.paintContur = null);
                        }
                    ),
                _class(ProgressBar)
                    ._extends(SceneComponent)
                    ._instance(
                        function (t) {
                            (t.PBack = new S()), (t.PContur = new S()), (t.rectFull = null), (t.rectProgress = null), (t.label = null);
                        },
                        "getLabel",
                        function () {
                            return this.label;
                        },
                        function (t) {
                            (t.percent = 0), (t.prefix = ""), (t.widthS = 0);
                        },
                        "setWidthStroke",
                        function (t) {
                            this.widthS = t;
                        },
                        ProgressBar.name,
                        function () {
                            ProgressBar._init(this, p.GREEN);
                        },
                        [p],
                        ProgressBar.name,
                        function (t) {
                            SceneComponent._init(this),
                                ProgressBar.Initialize(this),
                                (this.rectFull = new RectF(0.5 * -this.width, 0.5 * -this.height, 0.5 * this.width, 0.5 * this.height)),
                                (this.rectProgress = new RectF(0.5 * -this.width + this.widthS, 0.45 * -this.height, 0.5 * -this.width + this.widthS, 0.45 * this.height)),
                                this.PContur.setColor(p.WHITE),
                                this.PContur.setStyle(S.Style.STROKE),
                                this.PContur.setStrokeWidth(1),
                                this.PContur.setMaskFilter(new D(1, D.Blur.NORMAL)),
                                this.PBack.setColor(t),
                                this.PBack.setStyle(S.Style.FILL_AND_STROKE),
                                this.PBack.setStrokeWidth(1),
                                this.PBack.setMaskFilter(new D(1, D.Blur.NORMAL)),
                                (this.label = new Label("0.0 %", null, p.LTGRAY, S.Align.CENTER, 0, 0.5 * this.height + 12, 12));
                        },
                        "setParam",
                        function (t, e, n, i) {
                            SceneComponent.setParam(this, t, e, n, i),
                                this.label.setPosition(0, 0.5 * this.height + 12),
                                (this.rectFull = new RectF(0.5 * -this.width, 0.5 * -this.height, 0.5 * this.width, 0.5 * this.height)),
                                (this.rectProgress = new RectF(0.5 * -this.width + this.widthS, 0.45 * -this.height, 0.5 * -this.width + this.widthS, 0.45 * this.height));
                        },
                        "setProgress",
                        function (t) {
                            this.percent = t > 100 ? 100 : t;
                            var e = ((this.width - 2 * this.widthS) / 100) * this.percent;
                            this.rectProgress.set(0.5 * -this.width + this.widthS, 0.45 * -this.height, 0.5 * -this.width + e, 0.45 * this.height),
                                this.label.setText(String.format("%s %.1f", this.prefix, this.percent) + " %"),
                                this.invalidate();
                        },
                        "setLabelPrifix",
                        function (t) {
                            (this.prefix = t), this.label.setText(String.format("%s %.1f", t, this.percent) + " %");
                        },
                        "setColor",
                        function (t) {
                            this.PBack.setColor(t);
                        },
                        "invalidatePath",
                        function (t) {
                            var e = !1;
                            SceneComponent.invalidatePath(this, t) && (e = !0);
                            var n = new Path(),
                                i = new Matrix_Matrix();
                            return i.setTranslate(this.x, this.y), i.setRotate(this.rotate), i.setScale(this.scale, this.scale), this.label.invalidatePath(n) && t.addPath(n, i), e;
                        },
                        "onDraw",
                        function (t) {
                            this.visible &&
                                (t.save(), t.translate(this.x, this.y), t.rotate(this.rotate), t.drawRoundRect(this.rectFull, 2, 2, this.PContur), t.drawRoundRect(this.rectProgress, 2, 2, this.PBack), this.label.onDraw(t), t.restore());
                        }
                    ),
                _class(Back)
                    ._extends(SceneComponent)
                    ._body(
                        function (t) {
                            (t.paint = null), (t.paintBorder = new S());
                        },
                        function (t) {
                            t.color = p.TRANSPARENT;
                        },
                        "getColor",
                        function () {
                            return this.color;
                        },
                        "setColor",
                        function (t) {
                            t instanceof p ? (this.color = t) : "number" == typeof t && (this.color = p.fromInt(t)), this.paint.setColor(t);
                        },
                        "setCorner",
                        function (t) {
                            0 != t ? (this.paint.setPathEffect(new _(t)), this.paintBorder.setPathEffect(new _(t))) : (this.paint.setPathEffect(null), this.paintBorder.setPathEffect(null));
                        },
                        "setShader",
                        function (t) {
                            this.paint.setShader(t);
                        },
                        "getAlpha",
                        function () {
                            return this.paint.getAlpha();
                        },
                        "setAlpha",
                        function (t) {
                            this.paint.setAlpha(t), this.invalidate();
                        },
                        "setBorder",
                        function (t, e) {
                            t > 0
                                ? (this.paintBorder.setStyle(S.Style.STROKE), this.paintBorder.setStrokeWidth(t), this.paintBorder.setColor(e), this.paintBorder.setAntiAlias(!0))
                                : (this.paintBorder.setStyle(S.Style.FILL), this.paintBorder.setStrokeWidth(0), this.paintBorder.setColor(p.WHITE));
                        },
                        Back.name,
                        function () {
                            SceneComponent._init(this),
                                Back.Initialize(this),
                                (this.paint = new S()),
                                this.paint.setAntiAlias(!0),
                                this.paint.setStyle(S.Style.FILL_AND_STROKE),
                                this.paint.setStrokeWidth(0),
                                this.setBorder(0, p.TRANSPARENT);
                        },
                        [C],
                        Back.name,
                        function (t) {
                            SceneComponent._init(this), Back.Initialize(this), (this.paint = new S()), this.paint.setStyle(f.FILL_AND_STROKE), this.paint.setStrokeWidth(0), this.paint.setShader(t), this.setBorder(0, p.TRANSPARENT);
                        },
                        [p],
                        Back.name,
                        function (t) {
                            SceneComponent._init(this), Back.Initialize(this), (this.paint = new S()), this.paint.setStyle(S.Style.FILL_AND_STROKE), this.paint.setStrokeWidth(0), this.paint.setColor(t), this.setBorder(0, p.TRANSPARENT);
                        },
                        "onDraw",
                        function (t) {
                            this.visible &&
                                (t.save(),
                                t.translate(this.x, this.y),
                                t.scale(this.scale, this.scale),
                                t.drawRect(-this.offsetH, -this.offsetV, this.offsetH, this.offsetV, this.paint),
                                0 != this.paintBorder.getStrokeWidth() && t.drawRect(-this.offsetH, -this.offsetV, this.offsetH, this.offsetV, this.paintBorder),
                                t.restore());
                        },
                        "onTouchEvent",
                        function (t) {
                            return this.enable, !1;
                        },
                        "onRecycle",
                        function (t) {},
                        "onUpdate",
                        function (t) {}
                    );
            var dt = (function () {
                function Pair(t, e) {
                    (this.first = t), (this.second = e);
                }
                return (
                    (Pair.create = function create(t, e) {
                        return new Pair(t, e);
                    }),
                    Pair
                );
            })();
            function GestureDetector() {
                GestureDetector._init.apply(GestureDetector, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function OnGestureListener() {}
            function SimpleOnGestureListener() {
                SimpleOnGestureListener._init.apply(SimpleOnGestureListener, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DCollisionType() {}
            function _2DSegment() {
                _2DSegment._init.apply(_2DSegment, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DBound() {
                _2DBound._init.apply(_2DBound, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DObject() {}
            _class(GestureDetector)._instance(
                function (t) {
                    (t.listener = null),
                        (t.eventDown = null),
                        (t.eventMove = null),
                        (t.eventTapUpFirst = null),
                        (t.idTimeotTapUpFirst = -1),
                        (t.maxTapMove = 10),
                        (t.minTimePressLong = 1e3),
                        (t.maxTimeTapSingle = 150),
                        (t.maxTimeTapDouble = 250);
                },
                "isTimeoutSingleTup",
                function () {
                    return -1 != this.idTimeotTapUpFirst;
                },
                "setTimeoutSingleTap",
                function (t) {
                    var e = this;
                    (this.eventTapUpFirst = MotionEvent_MotionEvent.obtain(t)),
                        (this.idTimeotTapUpFirst = setTimeout(function () {
                            e.listener.onSingleTapUp(t), (e.idTimeotTapUpFirst = -1), (e.eventTapUpFirst = null);
                        }, 2 * this.maxTimeTapDouble));
                },
                "clearTimeoutSingleTap",
                function () {
                    -1 != this.idTimeotTapUpFirst && (clearTimeout(this.idTimeotTapUpFirst), (this.idTimeotTapUpFirst = -1), (this.eventTapUpFirst = null));
                },
                [OnGestureListener],
                GestureDetector.name,
                function (t) {
                    GestureDetector._init(this, null, t);
                },
                [Context, OnGestureListener],
                GestureDetector.name,
                function (t, e) {
                    GestureDetector.Initialize(this), (this.listener = e);
                },
                "resetState",
                function () {
                    (this.eventDown = null), (this.eventMove = null);
                },
                "onTouchEvent",
                function (t) {
                    if (null == this.listener) return !1;
                    switch (t.getAction()) {
                        case MotionEvent_MotionEvent.ACTION_DOWN:
                            this.resetState(), (this.eventDown = MotionEvent_MotionEvent.obtain(t)), this.listener.onDown(this.eventDown);
                            break;
                        case MotionEvent_MotionEvent.ACTION_MOVE:
                            if (null != this.eventDown) {
                                this.checkTap(t);
                                var e = null != this.eventMove ? this.eventMove : this.eventDown,
                                    n = e.getX() - t.getX(),
                                    i = e.getY() - t.getY();
                                this.listener.onScroll(this.eventDown, t, n, i);
                            }
                            this.eventMove = MotionEvent_MotionEvent.obtain(t);
                            break;
                        case MotionEvent_MotionEvent.ACTION_UP:
                            if (null != this.eventDown) {
                                this.checkTap(t);
                                var o = (t.getEventTime() - this.eventDown.getEventTime()) / 1e3,
                                    s = (t.getX() - this.eventDown.getX()) / o,
                                    r = (t.getY() - this.eventDown.getY()) / o;
                                this.listener.onFling(this.eventDown, t, s, r), this.resetState();
                            }
                            break;
                        case MotionEvent_MotionEvent.ACTION_WHEEL:
                            this.listener.onScroll(t, t, t.getDeltaY(), t.getDeltaY());
                    }
                },
                "checkTap",
                function (t) {
                    var e = t.getEventTime() - this.eventDown.getEventTime(),
                        n = Math.abs(t.getX() - this.eventDown.getX()),
                        i = Math.abs(t.getY() - this.eventDown.getY());
                    n < this.maxTapMove && i < this.maxTapMove
                        ? e < this.maxTimeTapSingle
                            ? t.getAction() == MotionEvent_MotionEvent.ACTION_UP &&
                              (this.isTimeoutSingleTup()
                                  ? ((e = t.getEventTime() - this.eventTapUpFirst.getEventTime()), this.clearTimeoutSingleTap(), e < this.maxTimeTapDouble && this.listener.onDoubleTap(t))
                                  : this.setTimeoutSingleTap(t))
                            : e > this.minTimePressLong && this.listener.onLongPress(this.eventDown)
                        : this.clearTimeoutSingleTap();
                }
            ),
                _interface(OnGestureListener)._body(
                    "onDown",
                    function (t) {},
                    "onShowPress",
                    function (t) {},
                    "onSingleTapUp",
                    function (t) {},
                    "onScroll",
                    function (t, e, n, i) {},
                    "onLongPress",
                    function (t) {},
                    "onFling",
                    function (t, e, n, i) {}
                ),
                (GestureDetector.OnGestureListener = OnGestureListener),
                _class(SimpleOnGestureListener)
                    ._implements(OnGestureListener)
                    ._body(
                        "onSingleTapUp",
                        function (t) {
                            return !1;
                        },
                        "onDoubleTap",
                        function (t) {
                            return !1;
                        },
                        "onLongPress",
                        function (t) {},
                        "onScroll",
                        function (t, e, n, i) {
                            return !1;
                        },
                        "onFling",
                        function (t, e, n, i) {
                            return !1;
                        },
                        "onDown",
                        function (t) {
                            return !1;
                        }
                    ),
                (GestureDetector.SimpleOnGestureListener = SimpleOnGestureListener),
                _enum(_2DCollisionType)._body({ Reflect: 0, ReflectX: 1, ReflectY: 2, ReflectXPerspective: 3, Refract: 4, Shift: 5, Pass: 6, Goal: 7, Viscous: 8 }),
                _class(_2DSegment)._instance(
                    function (t) {
                        t.Begin, t.End, t.Vector, t.Normal, t.Left, t.Right, t.Modul, t.AngleK, t.ScalarQwadr, t.OrdB;
                    },
                    [_2DVector, _2DPoint_2DPoint],
                    _2DSegment.name,
                    function (t, e) {
                        (this.End = e),
                            (this.Begin = e.getDiff(t)),
                            (this.Vector = t),
                            (this.Normal = this.Vector.getNormal()),
                            (this.Left = this.Normal.getOrtoClockAnti()),
                            (this.Right = this.Normal.getOrtoClock()),
                            (this.Modul = this.Vector.thisModul()),
                            (this.AngleK = this.Vector.thisAngleK()),
                            (this.OrdB = this.Begin.Y - this.AngleK * this.Begin.X),
                            (this.ScalarQwadr = this.Vector.getMultipScalar(this.Vector));
                    },
                    [_2DPoint_2DPoint, _2DVector],
                    _2DSegment.name,
                    function (t, e) {
                        (this.Begin = t),
                            (this.End = t.getSum(e)),
                            (this.Vector = e),
                            (Normal = Vector.getNormal()),
                            (Left = Normal.getOrtoClockAnti()),
                            (Right = Normal.getOrtoClock()),
                            (Modul = Vector.thisModul()),
                            (AngleK = Vector.thisAngleK()),
                            (OrdB = Begin.Y - AngleK * Begin.X),
                            (ScalarQwadr = Vector.getMultipScalar(Vector));
                    },
                    [_2DPoint_2DPoint, _2DPoint_2DPoint],
                    _2DSegment.name,
                    function (t, e) {
                        (this.Begin = t),
                            (this.End = e),
                            (this.Vector = this.End.getVectorEnding(this.Begin)),
                            (this.Normal = this.Vector.getNormal()),
                            (this.Left = this.Normal.getOrtoClockAnti()),
                            (this.Right = this.Normal.getOrtoClock()),
                            (this.Modul = this.Vector.thisModul()),
                            (this.AngleK = this.Vector.thisAngleK()),
                            (this.OrdB = this.Begin.Y - this.AngleK * this.Begin.X),
                            (this.ScalarQwadr = this.Vector.getMultipScalar(this.Vector));
                    },
                    [_2DPoint_2DPoint],
                    _2DSegment.name,
                    function (t) {
                        this.Begin = t;
                    },
                    "setPointEnding",
                    function (t) {
                        (this.End = t),
                            (this.Vector = this.End.getVectorEnding(this.Begin)),
                            (this.Normal = this.Vector.getNormal()),
                            (this.Left = this.Normal.getOrtoClockAnti()),
                            (this.Right = this.Normal.getOrtoClock()),
                            (this.Modul = this.Vector.thisModul()),
                            (this.AngleK = this.Vector.thisAngleK()),
                            (this.OrdB = this.Begin.Y - this.AngleK * this.Begin.X),
                            (this.ScalarQwadr = this.Vector.getMultipScalar(this.Vector));
                    },
                    "getDistance",
                    function (t) {
                        var e = t.getVectorEnding(this.Begin),
                            n = e.getMultipScalar(this.Vector) / this.ScalarQwadr;
                        return this.Begin.equals(this.End)
                            ? new _2DSegment(Begin, t)
                            : n >= 0 && n <= 1
                            ? new _2DSegment(e.getDiff(this.Normal.getMultipByScalar(e.getMultipScalar(this.Normal))), t)
                            : n < 0
                            ? new _2DSegment(this.Begin, t)
                            : n > 1
                            ? new _2DSegment(this.End, t)
                            : null;
                    },
                    "isIntersect",
                    function (t, e) {
                        var n = this.Vector.getMultipScalarPseudo(this.Begin.getVectorBegining(t.Begin)),
                            i = this.Vector.getMultipScalarPseudo(this.Begin.getVectorBegining(t.End)),
                            o = t.Vector.getMultipScalarPseudo(t.Begin.getVectorBegining(this.Begin)),
                            s = t.Vector.getMultipScalarPseudo(t.Begin.getVectorBegining(this.End)),
                            r = this.Vector.getMultipScalarPseudo(t.Vector);
                        return 0 == r ? 0 == n : Math.signum(n) != Math.signum(i) && Math.signum(o) != Math.signum(s) && ((e.X = float(this.Begin.X + (this.Vector.X * o) / r)), (e.Y = float(this.Begin.Y + (this.Vector.Y * o) / r)), !0);
                    },
                    "onDraw",
                    function (t) {
                        t.drawLine(Begin.X, Begin.Y, End.X, End.Y, _2DObjectGraphic.Pa);
                    },
                    "toString",
                    function () {
                        return String.format("B%s E%s", this.Begin.toString(), this.End.toString());
                    }
                ),
                _class(_2DBound)._instance(
                    function (t) {
                        t.segment, t.type;
                    },
                    [_2DSegment, _2DCollisionType],
                    _2DBound.name,
                    function (t, e) {
                        (this.segment = t), (this.type = e);
                    },
                    [_2DPoint_2DPoint, _2DPoint_2DPoint, _2DCollisionType],
                    _2DBound.name,
                    function (t, e, n) {
                        this(new _2DSegment(t, e), n);
                    },
                    "Recycle",
                    function () {},
                    "onDraw",
                    function (t) {
                        _2DObjectGraphic_2DObjectGraphic.Pa.setStrokeWidth(3),
                            this.type == _2DCollisionType.Pass ? _2DObjectGraphic_2DObjectGraphic.Pa.setColor(p.GREEN) : this.type == _2DCollisionType.Shift && _2DObjectGraphic_2DObjectGraphic.Pa.setColor(p.RED),
                            t.drawLine(this.segment.Begin.X, this.segment.Begin.Y, this.segment.End.X, this.segment.End.Y, _2DObjectGraphic_2DObjectGraphic.Pa);
                    }
                ),
                _interface(_2DObject)._instance(
                    "getPos",
                    function () {},
                    "setPos",
                    function (t) {},
                    "getWidth",
                    function () {},
                    "getHeight",
                    function () {},
                    "getVel",
                    function () {},
                    "setVel",
                    function (t) {},
                    "getScale",
                    function () {},
                    "getScaleP",
                    function () {}
                );
            var pt = (function (t) {
                function LinearInterpolator() {
                    return t.apply(this, arguments) || this;
                }
                return (
                    inheritsLoose_inheritsLoose(LinearInterpolator, t),
                    (LinearInterpolator.prototype.getInterpolation = function getInterpolation(t) {
                        return t;
                    }),
                    LinearInterpolator
                );
            })(function BaseInterpolator() {});
            function Executor() {
                Executor._init.apply(Executor, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(Executor)
                ._implements(Runnable)
                ._body(
                    "_init",
                    function () {
                        (this.name = "Executor"), (this.executor = null), (this.runnable = null);
                    },
                    "getName",
                    function () {
                        return this.name;
                    },
                    "setName",
                    function (t) {
                        this.name = t;
                    },
                    "getExecutor",
                    function () {
                        return this.executor;
                    },
                    "setExecutor",
                    function (t) {
                        this.executor = t;
                    },
                    Executor.name,
                    function () {
                        Executor.Initialize(this);
                    },
                    [Executor],
                    Executor.name,
                    function (t) {
                        Executor.Initialize(this), (this.executor = t);
                    },
                    [Runnable],
                    Executor.name,
                    function (t) {
                        Executor.Initialize(this), this.set(t);
                    },
                    "set",
                    function (t) {
                        return null == this.executor ? (this.runnable = t) : this.executor.set(t), this;
                    },
                    "run",
                    function () {
                        null == this.executor ? this.runnable.run() : this.executor.run();
                    },
                    "out",
                    function () {
                        (this.runnable = null), null != this.executor && this.executor.out();
                    },
                    "interrupt",
                    function () {
                        (this.runnable = null), null != this.executor && this.executor.interrupt();
                    }
                );
            var ft = (function () {
                    function Looper() {}
                    return (Looper.getMainLooper = function getMainLooper() {}), Looper;
                })(),
                gt = (function () {
                    function HandlerAnimation() {}
                    var t = HandlerAnimation.prototype;
                    return (
                        (t.post = function post(t) {
                            return this.postDelayed(t, 0);
                        }),
                        (t.postDelayed = function postDelayed(t, e) {
                            return (
                                requestAnimationFrame(function () {
                                    t.run ? t.run.apply(t) : t.apply();
                                }) > 0
                            );
                        }),
                        HandlerAnimation
                    );
                })();
            function ExecutorAnimation() {
                ExecutorAnimation._init.apply(ExecutorAnimation, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ExecutorThread() {
                ExecutorThread._init.apply(ExecutorThread, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ExecutorThreadMain() {
                ExecutorThreadMain._init.apply(ExecutorThreadMain, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function AnimationCaller() {}
            function AnimationListener() {}
            function Animation() {
                Animation._init.apply(Animation, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ExecutorAnimation)
                ._extends(Executor)
                ._body(
                    "_init",
                    function () {
                        this.handler = null;
                    },
                    "getHandler",
                    function () {
                        return this.handler;
                    },
                    ExecutorAnimation.name,
                    function () {
                        Executor._init(this), (this.handler = new gt(ft.getMainLooper()));
                    },
                    [Runnable],
                    ExecutorAnimation.name,
                    function (t) {
                        Executor._init(this, t), (this.handler = new gt(ft.getMainLooper()));
                    },
                    [Executor],
                    ExecutorAnimation.name,
                    function (t) {
                        Executor._init(this, t), (this.handler = new gt(ft.getMainLooper()));
                    },
                    "postDelayed",
                    function (t) {
                        null == this.executor ? this.handler.postDelayed(this.runnable, t) : this.handler.postDelayed(this.executor, t);
                    },
                    "run",
                    function () {
                        null == this.executor ? this.handler.post(this.runnable) : this.handler.post(this.executor);
                    },
                    "out",
                    function () {
                        Executor.out(this);
                    }
                ),
                _class(ExecutorThread)
                    ._extends(Executor)
                    ._body(
                        "_init",
                        function () {
                            (this.cont = !1), (this.thread = null);
                        },
                        "setName",
                        function (t) {
                            Executor.setName(this, t), null != this.thread && this.thread.setName(t);
                        },
                        "isCont",
                        function () {
                            return this.cont;
                        },
                        "getThread",
                        function () {
                            return this.thread;
                        },
                        "isWork",
                        function () {
                            return null != this.thread && this.thread.isAlive();
                        },
                        ExecutorThread.name,
                        function () {
                            Executor._init(this), ExecutorThread.Initialize(this);
                        },
                        [String],
                        ExecutorThread.name,
                        function (t) {
                            Executor._init(this), ExecutorThread.Initialize(this), this.setName(t);
                        },
                        [Executor],
                        ExecutorThread.name,
                        function (t) {
                            Executor._init(this, t), ExecutorThread.Initialize(this);
                        },
                        [String, Executor],
                        ExecutorThread.name,
                        function (t, e) {
                            Executor._init(this, e), this.setName(t);
                        },
                        "run",
                        function () {
                            (this.cont = !0), this.isWork() || (null == this.executor ? (this.thread = new Thread_Thread(this.runnable, this.name)) : (this.thread = new Thread_Thread(this.executor, this.name)), this.thread.start());
                        },
                        "out",
                        function () {
                            (this.cont = !1), Executor.out(this);
                            try {
                                null != this.thread && this.thread.join();
                            } catch (t) {
                                t.printStackTrace();
                            }
                        },
                        "interrupt",
                        function () {
                            (this.cont = !1), Executor.interrupt(this), null != this.executor && this.executor.interrupt(), null != this.thread && (this.thread.interrupt(), (this.thread = null));
                        }
                    ),
                _class(ExecutorThreadMain)
                    ._extends(Executor)
                    ._body(
                        "_init",
                        function () {
                            this.handler = null;
                        },
                        "getHandler",
                        function () {
                            return this.handler;
                        },
                        ExecutorThreadMain.name,
                        function () {
                            Executor._init(this), (this.handler = new G(ft.getMainLooper()));
                        },
                        [Runnable],
                        ExecutorThreadMain.name,
                        function (t) {
                            Executor._init(this, t), (this.handler = new G(ft.getMainLooper()));
                        },
                        [Executor],
                        ExecutorThreadMain.name,
                        function (t) {
                            Executor._init(this, t), (this.handler = new G(ft.getMainLooper()));
                        },
                        "postDelayed",
                        function (t) {
                            null == this.executor ? this.handler.postDelayed(this.runnable, t) : this.handler.postDelayed(this.executor, t);
                        },
                        "run",
                        function () {
                            null == this.executor ? this.handler.post(this.runnable) : this.handler.post(this.executor);
                        },
                        "out",
                        function () {
                            Executor.out(this);
                        }
                    ),
                _class(AnimationCaller)._body(
                    [Number, Number],
                    "call",
                    function (t, e) {},
                    [Number],
                    "call",
                    function (t) {
                        return !1;
                    }
                ),
                _class(AnimationListener)._body(
                    "beforeAnimation",
                    function () {},
                    "afterAnimation",
                    function () {}
                ),
                _class(Animation)
                    ._extends(Executor)
                    ._instance(
                        _static,
                        function () {
                            (this.TAG = "Animation"), (this.INFINITE = -1);
                        },
                        function (t) {
                            t.animationCaller = null;
                        },
                        "setAnimationCaller",
                        function (t) {
                            return (this.animationCaller = t), this;
                        },
                        function (t) {
                            t.animationListener = null;
                        },
                        "setAnimationListener",
                        function (t) {
                            return (this.animationListener = t), this;
                        },
                        function (t) {
                            t.interpolator = new pt();
                        },
                        "setInterpolator",
                        function (t) {
                            return (this.interpolator = t), this;
                        },
                        function (t) {
                            t.speed = 0;
                        },
                        "setSpeed",
                        function (t) {
                            return (this.speed = t), this;
                        },
                        "setDuration",
                        function (t) {
                            return this.setSpeed(1 / t);
                        },
                        function (t) {
                            t.repeatCount = 1;
                        },
                        "setRepeatCount",
                        function (t) {
                            return (this.repeatCount = t), this;
                        },
                        function (t) {
                            t.sleepMs = 20;
                        },
                        "setSleepMs",
                        function (t) {
                            return (this.sleepMs = t), this;
                        },
                        function (t) {
                            t.background = !1;
                        },
                        "isBackground",
                        function () {
                            return background;
                        },
                        "setBackground",
                        function (t) {
                            return (this.background = t), this;
                        },
                        function (t) {
                            t.isDrawFrame = !1;
                        },
                        "setDrawFrame",
                        function (t) {
                            return (this.isDrawFrame = t), this;
                        },
                        function (t) {
                            t.cont = !0;
                        },
                        "isCont",
                        function () {
                            return this.cont;
                        },
                        function (t) {
                            (t.reset = !1), (t.timePrev = e.currentTimeMillis()), (t.timeNew = e.currentTimeMillis()), (t.timeInterval = 0), (t.progress = 0), (t.progressSum = 0);
                        },
                        "pause",
                        function (t) {
                            (this.progressSum = t), (this.progress = 0), (this.timeInterval = 0);
                        },
                        function (t) {
                            t.name = Animation.TAG;
                        },
                        "setName",
                        function (t) {
                            this.name = t;
                        },
                        Animation.name,
                        function () {
                            Executor._init(this), Animation.Initialize(this);
                        },
                        "reinit",
                        function () {
                            (this.cont = !0), (this.reset = !1), (this.timePrev = e.currentTimeMillis()), (this.timeNew = e.currentTimeMillis()), (this.timeInterval = 0), (this.progress = 0), (this.progressSum = 0);
                        },
                        "run",
                        function () {
                            this.reinit(),
                                this.isDrawFrame
                                    ? (this.setExecutor(new ExecutorAnimation()), this.set(this.runAnimThreadMain))
                                    : this.background
                                    ? (this.setExecutor(new ExecutorThread(this.name)), this.set(this.runAnimThread))
                                    : (this.setExecutor(new ExecutorThreadMain()), this.set(this.runAnimThreadMain)),
                                Executor.run(this);
                        },
                        "out",
                        function () {
                            (this.cont = !1), Executor.out(this);
                        },
                        "interrupt",
                        function () {
                            (this.cont = !1), Executor.interrupt(this);
                        },
                        function (t) {
                            (t.runAnimThread = new Runnable()._body("run", function () {
                                for (before(); cont(); ) {
                                    update();
                                    try {
                                        if ((animate(), !cont())) break;
                                        Thread.sleep(sleepMs);
                                    } catch (t) {
                                        t.printStackTrace();
                                    }
                                }
                                after();
                            })),
                                (t.runAnimThreadMain = new Runnable()._body(
                                    "_init",
                                    function () {
                                        (this.name = ""), (this.before = !1);
                                    },
                                    { anim: t },
                                    "run",
                                    function (t) {
                                        if ((this.before || (t.before(), (this.before = !0), (this.name = t.name)), t.contin())) {
                                            t.update();
                                            try {
                                                t.animate();
                                            } catch (t) {
                                                t.printStackTrace();
                                            }
                                            t.contin() && t.getExecutor().getHandler().postDelayed(this, t.sleepMs);
                                        }
                                        t.contin() || t.after();
                                    }
                                ));
                        },
                        "contin",
                        function () {
                            return this.cont && (this.progressSum < 1 * this.repeatCount || this.repeatCount == Animation.INFINITE);
                        },
                        "update",
                        function () {
                            (this.timePrev = this.reset ? e.currentTimeMillis() : this.timeNew),
                                (this.timeNew = e.currentTimeMillis()),
                                (this.timeInterval = this.timeNew - this.timePrev),
                                (this.progress = this.speed * this.timeInterval),
                                (this.progressSum += this.progress);
                        },
                        "before",
                        function () {
                            null != this.animationListener && this.animationListener.beforeAnimation();
                        },
                        "after",
                        function () {
                            null != this.animationListener && this.animationListener.afterAnimation();
                        },
                        "animate",
                        function () {
                            this.progressSum < 1
                                ? (this.animationCaller.call(this.interpolator.getInterpolation(this.progressSum - this.progress), this.interpolator.getInterpolation(this.progressSum)),
                                  (this.reset = this.animationCaller.call(this.timeInterval)))
                                : (this.animationCaller.call(this.interpolator.getInterpolation(this.progressSum - this.progress), this.interpolator.getInterpolation(1)),
                                  (this.reset = this.animationCaller.call(this.timeInterval)),
                                  (this.cont = !1));
                        }
                    ),
                (Animation.AnimationCaller = AnimationCaller),
                (Animation.AnimationListener = AnimationListener);
            var mt = (function () {
                function SpriteFrameListener() {}
                return (SpriteFrameListener.prototype.onFrame = function onFrame(t) {}), SpriteFrameListener;
            })();
            function _2DSprite() {
                _2DSprite._init.apply(_2DSprite, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SpritePlay() {
                SpritePlay._init.apply(SpritePlay, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DObjectGraphic_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function _2DObjectGraphic_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _2DObjectGraphic_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _2DObjectGraphic_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _2DObjectGraphic_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function _2DObjectGraphic_2DObjectGraphic() {
                _2DObjectGraphic_2DObjectGraphic._init.apply(_2DObjectGraphic_2DObjectGraphic, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScenePleaseWait() {
                ScenePleaseWait._init.apply(ScenePleaseWait, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function LoadViewTask() {}
            function ActivityListener() {}
            function CreatorPleaseWait() {}
            function ActivityBase() {
                ActivityBase._init.apply(ActivityBase, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(_2DSprite)._body(
                "_init",
                function () {
                    (this.spritePlay = null), (this.FrameX = 0), (this.FrameY = 0), (this.Play = 0), (this.timeout = 20), (this.sleep = 20);
                },
                "setFreq",
                function (t) {
                    this.timeout = 1e3 / t;
                },
                "_init",
                function () {
                    (this.parent = null),
                        (this.bmp = null),
                        (this.frameHeight = 0),
                        (this.frameWidth = 0),
                        (this.frameCount = 0),
                        (this.frameCurrent = 0),
                        (this.frameEnd = -1),
                        (this.frameNext = 0),
                        (this.row = 1),
                        (this.col = 1),
                        (this.rectTarget = null),
                        (this.rectFrame = null),
                        (this.course = !1),
                        (this.playWithListener = !1);
                },
                "isPlayWithListener",
                function () {
                    return playWithListener;
                },
                "_init",
                function () {
                    this.end, this.peak, this.sign, this.timeAll, this.timeFrame;
                },
                [Bitmap, Number, Number, Number, _2DObjectGraphic_2DObjectGraphic],
                _2DSprite.name,
                function (t, e, n, i, o) {
                    (this.bmp = t),
                        (this.row = e),
                        (this.col = n),
                        (this.frameCount = e * n),
                        (this.frameWidth = t.getWidth() / n),
                        (this.frameHeight = t.getHeight() / e),
                        (this.rectTarget = new RectF(-this.frameWidth / 2, -this.frameHeight / 2, this.frameWidth / 2, this.frameHeight / 2)),
                        (this.rectFrame = new Rect(this.FrameX, this.FrameY, this.FrameX + this.frameWidth, this.FrameY + this.frameHeight)),
                        (this.timeout = 1e3 / i),
                        (this.parent = o);
                },
                [Bitmap, Number, Number, _2DObjectGraphic_2DObjectGraphic],
                _2DSprite.name,
                function (t, e, n, i) {
                    this(t, 1, e, n, i);
                },
                [Bitmap, Boolean, Number, Number, _2DObjectGraphic_2DObjectGraphic],
                _2DSprite.name,
                function (t, e, n, i, o) {
                    this(t, n, i, o), (this.course = e);
                },
                "Recycle",
                function (t) {
                    null != spritePlay && (spritePlay.interrupt(), (spritePlay = null)), t && bmp.recycle();
                },
                "onDraw",
                function (t) {
                    t.drawBitmap(this.bmp, this.rectFrame, this.rectTarget, null);
                },
                "callRect",
                function () {
                    (this.FrameX = (this.frameCurrent % this.col) * this.frameWidth),
                        (this.FrameY = parseInt(this.frameCurrent / this.col) * this.frameHeight),
                        this.rectFrame.set(this.FrameX, this.FrameY, this.FrameX + this.frameWidth, this.FrameY + this.frameHeight),
                        this.parent.invalidate();
                },
                "PlaySign",
                function (t) {
                    return t < frameCurrent ? (frameCurrent - t < frameCount / 2 ? -1 : 1) : t > frameCurrent ? (t - frameCurrent < frameCount / 2 ? 1 : -1) : 0;
                },
                "setFrameNext",
                function () {
                    (this.frameCurrent = (this.frameCurrent + 1) % this.frameCount), this.callRect();
                },
                "setFrameMoment",
                function (t) {
                    (this.frameCurrent = t < this.frameCount && t >= 0 ? t : 0), this.callRect();
                },
                [Number],
                "setFrame",
                function (t) {
                    t == this.frameEnd || t == frameCurrent || this.playWithListener || ((this.frameEnd = t), null != spritePlay && spritePlay.interrupt(), (spritePlay = new SpritePlay(this, PlaySign(t), t, null, -1, null)));
                },
                [Number, Number, mt],
                "setFrame",
                function (t, e, n) {
                    return this.setFrame(t, e, n, -1, null);
                },
                [Number, Number, mt, Number, mt],
                "setFrame",
                function (t, e, n, i, o) {
                    return !this.playWithListener && ((this.playWithListener = !0), (this.frameEnd = e), null != this.spritePlay && this.spritePlay.interrupt(), (spritePlay = new SpritePlay(this, 0 == t ? PlaySign(e) : t, e, n, i, o)), !0);
                },
                "getTimeout",
                function () {
                    return this.timeout;
                },
                [Number],
                "playT",
                function (t) {
                    this.play(this.sign, t);
                },
                [Number, Number],
                "playT",
                function (t, e) {
                    0 != e ? ((this.timeout = e), (sleep = int(0.5 * e)), (this.sign = t), null == spritePlay ? (spritePlay = new SpritePlay(this, t, -1, null, -1, null)) : spritePlay.init()) : (this.sign = 0);
                },
                [Number],
                "play",
                function (t) {
                    null != this.spritePlay && this.spritePlay.interrupt(), 0 != t && (this.spritePlay = new SpritePlay(this, t, -1, null, -1, null));
                },
                [Number, Number, mt],
                "play",
                function (t, e, n) {
                    null != spritePlay && spritePlay.interrupt(), 0 != t && (spritePlay = new SpritePlay(this, t, -1, null, e, n));
                }
            ),
                _class(SpritePlay)
                    ._extends(Animation)
                    ._instance(
                        "_init",
                        function () {
                            (this.name = "Unnamed"), (this.sprite = null), (this.listenerEnd = null), (this.listenerPeak = null);
                        },
                        SpritePlay.name,
                        function (t, e, n, i, o, s) {
                            Animation._init(this),
                                SpritePlay.Initialize(this),
                                (this.sprite = t),
                                (this.listenerEnd = i),
                                (this.listenerPeak = s),
                                null != t.parent && (this.name = t.parent.getNameSprite(t)),
                                this.setName(String.format('Play sprite "%s", frame end %d, sign %d', name, n, e)),
                                (t.sleep = parseInt(0.5 * t.timeout)),
                                (t.sign = e),
                                (t.end = n),
                                (t.peak = o),
                                this.init(t),
                                this.setRepeatCount(Animation.INFINITE),
                                this.setAnimationCaller(
                                    new AnimationCaller()._instance({ anim: this, msInterval: _1 }, [Number], "call", function (t, e) {
                                        return t.call(t.sprite, e);
                                    })
                                ).run();
                        },
                        "init",
                        function (t) {
                            (t.timeAll = parseInt(t.frameCount * t.timeout)), t.sign > 0 ? (t.timeFrame = parseInt(t.frameCurrent * t.timeout)) : (t.timeFrame = parseInt(((t.frameCurrent + 1) % t.frameCount) * t.timeout));
                        },
                        "call",
                        function (t, e) {
                            var n = parseInt(e);
                            if (0 == t.sign) return (t.playWithListener = !1), !1;
                            if (
                                ((n %= t.timeAll),
                                t.sign > 0 ? (t.timeFrame = t.timeFrame + n < t.timeAll ? t.timeFrame + n : t.timeFrame + n - t.timeAll) : (t.timeFrame = t.timeFrame - n >= 0 ? t.timeFrame - n : timeAll + (t.timeFrame - n)),
                                (t.frameNext = parseInt(t.timeFrame / t.timeout)),
                                t.frameCurrent != t.frameNext)
                            ) {
                                if ((t.frameCurrent == t.peak && null != this.listenerPeak && this.listenerPeak.onFrame(t.parent), t.frameCurrent == t.end))
                                    return (t.layWithListener = !1), null != this.listenerEnd && t.frameCurrent == t.frameEnd && this.listenerEnd.onFrame(t.parent), this.interrupt(), !1;
                                (t.frameCurrent = t.frameNext < t.frameCount ? t.frameNext : t.frameCurrent), t.callRect();
                            }
                            return !1;
                        }
                    ),
                _class(_2DObjectGraphic_2DObjectGraphic)
                    ._extends(SceneComponent)
                    ._implements(_2DObject)
                    ._body(
                        "_static",
                        function () {
                            (this.Pa = new S()), this.Pa.setStyle(S.Style.FILL), this.Pa.setColor(p.BLUE), this.Pa.setStrokeWidth(2), this.Pa.setTextSize(20);
                        },
                        "_init",
                        function () {
                            (this.perspective = !0), (this.path = null), (this.paint = null);
                        },
                        "getPaint",
                        function () {
                            return this.paint;
                        },
                        "setPaint",
                        function (t) {
                            this.paint = t;
                        },
                        "_init",
                        function () {
                            (this.B_ = null), this.HB_, this.WB_, (this.Sprites = new List()), this.SpriteCurent, this.M, this.Pos;
                        },
                        "getPos",
                        function () {
                            return this.Pos;
                        },
                        "setPos",
                        function (t) {
                            this.Pos = t;
                        },
                        "_init",
                        function () {
                            (this.PT = 0), (this.V = 0);
                        },
                        "getVel",
                        function () {
                            return this.V;
                        },
                        "setVel",
                        function (t) {
                            this.V = t;
                        },
                        "_init",
                        function () {
                            (this.vLim = 999999), (this.VT = 0), (this.velTangSprite = 0), (this.SP = 1);
                        },
                        "getScaleP",
                        function () {
                            return this.SP;
                        },
                        "_init",
                        function () {
                            this.Poligon = null;
                        },
                        "setPosition",
                        function (t, e) {
                            (this.Pos.X = t), (this.Pos.Y = e);
                        },
                        "getPosition",
                        function () {
                            return this.Pos;
                        },
                        "getVelocity",
                        function () {
                            return this.V;
                        },
                        [Number, Number],
                        "setVelocity",
                        function (t, e) {
                            (this.V.X = t), (this.V.Y = e), this.V.thisModul() > this.vLim * N.SD && (this.V.thisNormal(), this.V.thisMultipByScalar(this.vLim * N.SD));
                        },
                        [_2DVector],
                        "setVelocity",
                        function (t) {
                            this.setVelocity(t.X, t.Y);
                        },
                        "setVelocityLimit",
                        function (t) {
                            this.vLim = t;
                        },
                        "setOrintation",
                        function (t) {
                            this.PT = t % 360;
                        },
                        "setVelocityTang",
                        function (t) {
                            this.VT = t;
                        },
                        "setWieght",
                        function (t) {
                            this.M = t;
                        },
                        [Bitmap, Bitmap, Number, _2DPoint_2DPoint, Number, Number, Number],
                        _2DObjectGraphic_2DObjectGraphic.name,
                        function (t, e, n, i, o, s, r) {
                            SceneComponent._init(this),
                                _2DObjectGraphic_2DObjectGraphic.Initialize(this),
                                (this.M = 1),
                                (this.Pos = i),
                                (this.V = new _2DVector(0, 0)),
                                (SpriteCurent = new _2DSprite(t, n, 20, this)),
                                Sprites.add(dt.create("Pasiv", SpriteCurent)),
                                (this.B_ = e),
                                setScale(r),
                                setWidth(o),
                                setHeight(s),
                                null != e && ((HB_ = e.getHeight()), (WB_ = e.getWidth()));
                        },
                        [Bitmap, _2DPoint_2DPoint, Number, Number, Number],
                        _2DObjectGraphic_2DObjectGraphic.name,
                        function (t, e, n, i, o) {
                            SceneComponent._init(this),
                                _2DObjectGraphic_2DObjectGraphic.Initialize(this),
                                (this.M = 5),
                                (this.Pos = e),
                                (this.V = new _2DVector(0, 0)),
                                (this.B_ = t),
                                this.setScale(o),
                                this.setWidth(n),
                                this.setHeight(i),
                                null != t && ((this.HB_ = t.getHeight()), (this.WB_ = t.getWidth()));
                        },
                        [Path, S, _2DPoint_2DPoint, Number, Number, Number],
                        _2DObjectGraphic_2DObjectGraphic.name,
                        function (t, e, n, i, o, s) {
                            SceneComponent._init(this), _2DObjectGraphic_2DObjectGraphic.Initialize(this), (this.M = s), (this.Pos = n), (this.V = new _2DVector(0, 0)), (this.path = t), (this.paint = e), this.setWidth(i), this.setHeight(o);
                        },
                        [UpdateMode],
                        "invalidate",
                        function (t) {
                            var e = new Path(),
                                n = new Matrix_Matrix();
                            n.postTranslate(this.Pos.X, this.Pos.Y),
                                n.postRotate(this.rotate, this.Pos.X, this.Pos.Y),
                                n.postScale(this.scale, this.scale, this.Pos.X, this.Pos.Y),
                                e.addRect(-this.offsetH - 10, -this.offsetV - 10, this.offsetH + 10, this.offsetV + 10, Path.Direction.CW),
                                this.invalidate(t, e, n);
                        },
                        "toString",
                        function () {
                            return String.format("P{%.3f;%.3f} V{%.3f;%.3f} S{%.3f}", Pos.X, Pos.Y, V.X, V.Y, scale);
                        },
                        "onDraw",
                        function (t) {
                            this.visible &&
                                ((this.SP = this.perspective ? 1 - N.P * (N.SN - this.Pos.Y) : 1),
                                t.save(),
                                t.translate(this.Pos.X, this.Pos.Y),
                                t.rotate(this.PT),
                                t.scale(this.scale * this.SP, this.scale * this.SP),
                                null != this.path && null != this.paint ? t.drawPath(this.path, this.paint) : null != this.B_ && t.drawBitmap(this.B_, -this.WB_ / 2, -this.HB_ / 2, this.paint),
                                null != this.SpriteCurent && this.SpriteCurent.onDraw(t),
                                t.restore());
                        },
                        "onTouchEvent",
                        function (t) {
                            return null != this.GestDetect && this.GestDetect.onTouchEvent(t), !1;
                        },
                        "onUpdate",
                        function (t) {
                            this.Pos.thisSum(this.V.getMultipByScalar(t)), this.setOrintation(this.PT + this.VT * t);
                        },
                        "onRecycle",
                        function (t) {
                            for (var e, n = _2DObjectGraphic_createForOfIteratorHelperLoose(this.Sprites); !(e = n()).done; ) {
                                e.value.second.Recycle(t);
                            }
                            this.Sprites.clear(), null != this.B_ && t && this.B_.recycle(), null != this.path && (this.path.reset(), (this.path = null));
                        },
                        "setPerspective",
                        function (t) {
                            this.perspective = t;
                        },
                        "setVelocityCourse",
                        function (t) {
                            if (null != this.SpriteCurent && (0 != t.X || 0 != t.Y) && 16 == SpriteCurent.frameCount && SpriteCurent.course && !SpriteCurent.isPlayWithListener()) {
                                var e = Math.abs(t.thisAngleK());
                                e < 0.19891236
                                    ? t.X < 0
                                        ? SpriteCurent.setFrame(12)
                                        : SpriteCurent.setFrame(4)
                                    : e < 0.66817863
                                    ? t.X < 0
                                        ? t.Y < 0
                                            ? SpriteCurent.setFrame(11)
                                            : SpriteCurent.setFrame(13)
                                        : t.Y < 0
                                        ? SpriteCurent.setFrame(5)
                                        : SpriteCurent.setFrame(3)
                                    : e < 1.49660576
                                    ? t.X < 0
                                        ? t.Y < 0
                                            ? SpriteCurent.setFrame(10)
                                            : SpriteCurent.setFrame(14)
                                        : t.Y < 0
                                        ? SpriteCurent.setFrame(6)
                                        : SpriteCurent.setFrame(2)
                                    : e < 5.02733949
                                    ? t.X < 0
                                        ? t.Y < 0
                                            ? SpriteCurent.setFrame(9)
                                            : SpriteCurent.setFrame(15)
                                        : t.Y < 0
                                        ? SpriteCurent.setFrame(7)
                                        : SpriteCurent.setFrame(1)
                                    : t.Y < 0
                                    ? SpriteCurent.setFrame(8)
                                    : SpriteCurent.setFrame(0);
                            }
                        },
                        "setBitmap",
                        function (t) {
                            this.SpriteCurent = new _2DSprite(t, 1, 20, this);
                        },
                        "addSprite",
                        function (t, e) {
                            this.Sprites.add(dt.create(t, e));
                        },
                        "setSprite",
                        function (t) {
                            for (var e, n = _2DObjectGraphic_createForOfIteratorHelperLoose(this.Sprites); !(e = n()).done; ) {
                                var i = e.value;
                                if (i.first.equalsIgnoreCase(t)) return (this.SpriteCurent = i.second), this.SpriteCurent;
                            }
                            return null;
                        },
                        "getSprite",
                        function (t) {
                            var e = this.Sprites.iterator();
                            do {
                                var n = e.next();
                                if (n.first.equalsIgnoreCase(t)) return n.second;
                            } while (e.hasNext());
                            return null;
                        },
                        "getNameSprite",
                        function (t) {
                            for (var e, n = _2DObjectGraphic_createForOfIteratorHelperLoose(this.Sprites); !(e = n()).done; ) {
                                var i = e.value;
                                if (i.second == t) return i.first;
                            }
                            return null;
                        },
                        "getSpriteCurent",
                        function () {
                            return this.SpriteCurent;
                        },
                        "setOnGestureListener",
                        function (t) {
                            this.GestDetect = new GestureDetector(t);
                        },
                        "PointDown",
                        function (t, e) {
                            return e > Math.sqrt(Math.pow(t.X - Pos.X, 2) + Math.pow(t.Y - Pos.Y, 2));
                        },
                        [_2DObjectGraphic_2DObjectGraphic],
                        "getPointTouch",
                        function (t) {
                            var e = (this.height / 2) * this.scale * this.SP,
                                n = this.Pos.getVectorBegining(t.Pos);
                            return n.thisNormal(), this.Pos.getSum(n.getMultipByScalar(e));
                        },
                        [_2DBound],
                        "getPointTouch",
                        function (t) {
                            var e = (this.height / 2) * this.scale * this.SP,
                                n = this.Pos.getVectorBegining(t.segment.getDistance(this.Pos).Begin);
                            return n.thisNormal(), this.Pos.getSum(n.getMultipByScalar(e));
                        }
                    ),
                _class(ScenePleaseWait)
                    ._extends(SceneViewSurface)
                    ._instance(
                        function (t) {
                            (t.progress = null), (t.progressTotal = null);
                        },
                        "getProgress",
                        function () {
                            return this.progress;
                        },
                        "getProgressTotal",
                        function () {
                            return this.progressTotal;
                        },
                        function (t) {
                            (t.objSprite = null), (t.label = null), (t.back = null);
                        },
                        [Activity],
                        ScenePleaseWait.name,
                        function (t) {
                            ScenePleaseWait._init(this, t, 0, 0);
                        },
                        [Activity, Number, Number],
                        ScenePleaseWait.name,
                        function (t, e, n) {
                            SceneViewSurface._init(this, t),
                                ScenePleaseWait.Initialize(this),
                                (this.back = new Back(p.BLACK)),
                                this.back.setParam(0.5 * N.WT, 0.5 * N.HT, N.WT, N.HT),
                                n > 0 &&
                                    ((this.objSprite = new _2_2DObjectGraphic(null, new _2DPoint_2DPoint(0.5 * N.WT, 0.5 * N.HT), 20 * N.SD, 20 * N.SD, 1)),
                                    this.objSprite.addSprite("Sprite", new _2_2DSprite(ScenaParametr_ScenaParametr.decodeResource(t, n), !1, 16, 20, objSprite)),
                                    this.objSprite.setSprite("Sprite").setFrameMoment(0),
                                    this.objSprite.setPerspective(!1)),
                                e > 0 &&
                                    ((this.label = new Label(t.getString(e), Fonts.FontCaption, p.LTGRAY, S.Align.CENTER, 0.5 * N.WT, 0.75 * N.HT, (24 * N.SP) / N.SD)),
                                    this.label.setConturParam(!0, p.rgb(100, 0, 150), parseInt((4 * N.SP) / N.SD))),
                                (this.progress = new ProgressBar()),
                                this.progress.setParam(0.5 * N.WT, 0.25 * N.HT, 0.5 * N.WT, 4 * N.SP),
                                this.progress.setColor(p.rgb(100, 0, 150)),
                                this.progress.setVisible(!1),
                                (this.progressTotal = new ProgressBar()),
                                this.progressTotal.setParam(0.5 * N.WT, 0.2 * N.HT, 0.5 * N.WT, 4 * N.SP),
                                this.progressTotal.setColor(p.rgb(100, 0, 150)),
                                this.progressTotal.setVisible(!1),
                                this.attachCommun(this.back),
                                n > 0 && this.attachCommun(this.objSprite),
                                e > 0 && this.attachCommun(this.label),
                                this.attachCommun(this.progress),
                                this.attachCommun(this.progressTotal);
                        },
                        [Activity, String],
                        ScenePleaseWait.name,
                        function (t, e) {
                            ScenePleaseWait._init(this, t, e, null, 0, 0);
                        },
                        [Activity, String, Bitmap, Number, Number],
                        ScenePleaseWait.name,
                        function (t, e, n, i, o) {
                            SceneViewSurface._init(this, t),
                                ScenePleaseWait.Initialize(this),
                                (this.back = new Back(p.BLACK)),
                                this.back.setParam(0.5 * N.WT, 0.5 * N.HT, N.WT, N.HT),
                                null != n &&
                                    ((this.objSprite = new _2DObjectGraphic_2DObjectGraphic(null, new _2DPoint_2DPoint(0.5 * N.WT, 0.5 * N.HT), n.getWidth() / i, n.getHeight() / o, 1)),
                                    this.objSprite.addSprite("Sprite", new _2DSprite(n, 2, 4, 20, this.objSprite)),
                                    this.objSprite.setSprite("Sprite").setFrameMoment(0),
                                    this.objSprite.setPerspective(!1)),
                                e.isEmpty() ||
                                    ((this.label = new Label(e, Typeface.create("sans-serif", Typeface.BOLD), p.LTGRAY, S.Align.CENTER, 0.5 * N.WT, 0.75 * N.HT, (24 * N.SP) / N.SD)),
                                    this.label.setConturParam(!0, p.rgb(100, 0, 150), parseInt((4 * N.SP) / N.SD))),
                                (this.progress = new ProgressBar()),
                                this.progress.setParam(0.5 * N.WT, 0.25 * N.HT, 0.5 * N.WT, 4 * N.SP),
                                this.progress.setColor(p.rgb(100, 0, 150)),
                                this.progress.setVisible(!1),
                                (this.progressTotal = new ProgressBar()),
                                this.progressTotal.setParam(0.5 * N.WT, 0.2 * N.HT, 0.5 * N.WT, 4 * N.SP),
                                this.progressTotal.setColor(p.rgb(100, 0, 150)),
                                this.progressTotal.setVisible(!1),
                                this.attachCommun(this.back),
                                null != n && this.attachCommun(this.objSprite),
                                e.isEmpty() || this.attachCommun(this.label),
                                this.attachCommun(this.progress),
                                this.attachCommun(this.progressTotal);
                        },
                        "onRecycle",
                        function (t) {},
                        "onAttachedToWindow",
                        function () {
                            null != this.objSprite && this.objSprite.getSpriteCurent().play(1), SceneViewSurface.onAttachedToWindow(this);
                        },
                        "onDetachedFromWindow",
                        function () {
                            null != this.objSprite && this.objSprite.getSpriteCurent().play(0), SceneViewSurface.onDetachedFromWindow(this);
                        }
                    ),
                _interface(LoadViewTask)._instance("doLoadView", function (t) {}),
                _class(ActivityListener)._body(
                    "onDarkEnd",
                    function () {},
                    "onFinish",
                    function () {}
                ),
                _class(CreatorPleaseWait)._instance("getPleaseView", function (t) {
                    return new ScenePleaseWait(t);
                }),
                _class(ActivityBase)
                    ._extends(Activity)
                    ._body(
                        "_static",
                        function () {
                            (this.TAG = "ActivityBase"),
                                (this.creatorPleaseWait = new CreatorPleaseWait()),
                                (this.setCreatorPleaseWait = function (t) {
                                    ActivityBase.creatorPleaseWait = t;
                                }),
                                (this.id = 1),
                                (this.getId = function () {
                                    return ActivityBase.id++;
                                });
                        },
                        "_init",
                        function () {
                            (this.playMelody = !0),
                                (this.activityListener = null),
                                (this.hideSystemUI = new Runnable()._body("run", function () {
                                    Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT &&
                                        ((viewDecor = getWindow().getDecorView()),
                                        (uiOpt =
                                            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                                            View.SYSTEM_UI_FLAG_FULLSCREEN |
                                            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY |
                                            View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                                            View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
                                            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN),
                                        viewDecor.setSystemUiVisibility(uiOpt));
                                }));
                        },
                        "isPlayMelody",
                        function () {
                            return this.playMelody;
                        },
                        "setPlayMelody",
                        function (t) {
                            this.playMelody = t;
                        },
                        "setActivityListener",
                        function (t) {
                            this.activityListener = t;
                        },
                        "onCreate",
                        function (t) {
                            Activity.onCreate(this, t);
                        },
                        "onWindowFocusChanged",
                        function (t) {
                            Activity.onWindowFocusChanged(this, t), t && hideSystemUI.run();
                        },
                        "onResume",
                        function () {
                            this.playMelody && MediaAudio.get().registerSoundUser(this), Activity.onResume(this);
                        },
                        "onPause",
                        function () {
                            this.playMelody && MediaAudio.get().unregisterSoundUser(this), Activity.onPause(this);
                        },
                        "onRequestPermissionsResult",
                        function (t, e, n) {
                            Permissions.getInstance().onRequestPermissionsResult(t, e, n);
                        },
                        "Result",
                        function (t) {
                            Serializ.get().saveContext(this, t, "result");
                        }
                    ),
                (ActivityBase.LoadViewTask = LoadViewTask),
                (ActivityBase.ActivityListener = ActivityListener);
            var St = (function (t) {
                function ActivitySceneDialog() {
                    for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return ((e = t.call.apply(t, [this].concat(i)) || this).dialogView = void 0), (e.started = !1), (e.params = new FrameLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT, Gravity.BOTTOM)), e;
                }
                inheritsLoose_inheritsLoose(ActivitySceneDialog, t);
                var e = ActivitySceneDialog.prototype;
                return (
                    (e.onCreate = function onCreate(e) {
                        t.prototype.onCreate.call(this, e);
                    }),
                    (e.setContentView = function setContentView(t) {
                        t instanceof SceneDialog &&
                            ((dialogView = t),
                            dialogView.setActivityShow(this),
                            started
                                ? dialogView.light(
                                      -0.002,
                                      new OnLightEndListener() || {
                                          onLightEnd: function onLightEnd() {
                                              setView(dialogView), Log.d("", "ActivitySceneDialog.setContentView"), dialogView.dark(0.002, null);
                                          },
                                      }
                                  )
                                : setView(dialogView));
                    }),
                    (e.setView = function setView(e) {
                        t.prototype.setContentView.call(this, e);
                    }),
                    (e.onStart = function onStart() {
                        dialogView.dark(0.002, null), t.prototype.onStart.call(this), (started = !0), Log.d("", String.format("onStartDialog %s", ""));
                    }),
                    (e.onStop = function onStop() {
                        t.prototype.onStop.call(this), Log.d("", String.format("onStopDialog %s", ""));
                    }),
                    (e.onResume = function onResume() {
                        t.prototype.onResume.call(this), null != dialogView && dialogView.onResumeView();
                    }),
                    (e.onPause = function onPause() {
                        t.prototype.onPause.call(this), null != dialogView && dialogView.onPauseView();
                    }),
                    (e.finish = function finish() {
                        dialogView.light(
                            -0.002,
                            new OnLightEndListener() || {
                                onLightEnd: function onLightEnd() {
                                    finishSuper(), null != activityListener && (activityListener.onFinish(), (activityListener = null));
                                },
                            }
                        );
                    }),
                    (e.finishSuper = function finishSuper() {
                        t.prototype.finish.call(this);
                    }),
                    (e.onDestroy = function onDestroy() {
                        dialogView.onRecycle(!0), t.prototype.onDestroy.call(this);
                    }),
                    ActivitySceneDialog
                );
            })(ActivityBase);
            (St.HELP_IMAGES = "help_images"),
                (St.HERO_IMAGE = "hero_image"),
                (St.PRIZE_IMAGE = "prize_image"),
                (St.INDEX_WORLD = "index_world"),
                (St.INDEX_LEVEL = "index_level"),
                (St.ACCOUNT_HERO = "account_hero"),
                (St.ACCOUNT_OPPON = "account_oppon"),
                (St.ACCOUNT_ARM = "account_arm"),
                (St.CodReqDialogPause = 1),
                (St.CodResExit = 10),
                (St.CodResRestart = 11),
                (St.CodResVideo = 12),
                (St.CodResShare = 13),
                (St.CodResComment = 14),
                (St.CodResUpdate = 15),
                (St.CodResNewGame = 16),
                (St.CodResAdsPlay = 20),
                (St.CodResAdsOff = 21),
                (St.CodResData = 30);
            St.CodResData, St.CodResUpdate, St.CodResAdsOff;
            var yt = St.CodResComment,
                _t = St.CodResExit,
                vt = St.CodResRestart;
            function ScreenActivity() {
                ScreenActivity._init.apply(ScreenActivity, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenDialog() {
                ScreenDialog._init.apply(ScreenDialog, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ScreenActivity)._body(
                "_static",
                function () {
                    this.TAG = "ScreenActivity";
                },
                "isDialog",
                function () {
                    return !1;
                },
                function (t) {
                    t.thisA = null;
                },
                "setActivity",
                function (t) {
                    this.thisA = t;
                },
                function (t) {
                    t.intent = null;
                },
                "setIntent",
                function (t) {
                    this.intent = t;
                },
                function (t) {
                    t.requestCode = 0;
                },
                "getRequestCode",
                function () {
                    return this.requestCode;
                },
                "setRequestCode",
                function (t) {
                    this.requestCode = t;
                },
                function (t) {
                    t.resultCode = 0;
                },
                "getResultCode",
                function () {
                    return this.resultCode;
                },
                [Number],
                "setResult",
                function (t) {
                    this.resultCode = t;
                },
                function (t) {
                    t.data = null;
                },
                "getData",
                function () {
                    return this.data;
                },
                [Number, Intent_Intent],
                "setResult",
                function (t, e) {
                    (this.resultCode = t), (this.data = e);
                },
                function (t) {
                    t.view = null;
                },
                "getView",
                function () {
                    return this.view;
                },
                "getProgressBar",
                function () {
                    return this.thisA.getProgressBar();
                },
                function (t) {
                    t.stateChangeListener = null;
                },
                "getStateChangeListener",
                function () {
                    return this.stateChangeListener;
                },
                "setStateChangeListener",
                function (t) {
                    this.stateChangeListener = t;
                },
                "onSaveInstanceState",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onSaveInstanceState()", this.getClass().getSimpleName()));
                },
                "onCreate",
                function (t) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onCreate()", this.getClass().getSimpleName()));
                },
                "onStart",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onStart()", this.getClass().getSimpleName()));
                },
                "onResume",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onResume()", this.getClass().getSimpleName()));
                },
                "onPause",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onPause()", this.getClass().getSimpleName()));
                },
                "onStop",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onStop()", this.getClass().getSimpleName()));
                },
                "onDestroy",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.onDestroy()", this.getClass().getSimpleName())), (this.stateChangeListener = null), this.view instanceof SceneViewSurface && this.view.onRecycle(!0);
                },
                "dispatchTouchEvent",
                function (t) {
                    return !1;
                },
                "onTouchEvent",
                function (t) {
                    return !1;
                },
                "onBackPressed",
                function () {},
                "onActivityResult",
                function (t, e, n) {},
                "onCreateContextMenu",
                function (t, e, n) {},
                "onContextItemSelected",
                function (t) {
                    return !1;
                },
                [View_View],
                "setContentView",
                function (t) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.setContentView(%s)", this.getClass().getSimpleName(), t.getClass().getSimpleName())), (this.view = t), this.thisA.setContentView(this, t);
                },
                [LoadViewTask],
                "setContentView",
                function (t) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.setContentView(%s)", this.getClass().getSimpleName(), t.getClass().getSimpleName())), this.thisA.setContentView(this, t);
                },
                [Intent_Intent],
                "startActivity",
                function (t) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.startActivity(%s)", this.getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent")),
                        this.thisA.startActivity(t);
                },
                [Intent_Intent, ActivityListener],
                "startActivity",
                function (t, e) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.startActivity(%s, ActivityListener)", this.getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent")),
                        this.thisA.startActivity(t, e);
                },
                "startActivitySuper",
                function (t) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.startActivitySuper(%s)", getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent")),
                        this.thisA.startActivitySuper(t);
                },
                "startActivityForResult",
                function (t, e) {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.startActivityForResult(%s)", this.getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent")),
                        this.thisA.startActivityForResult(t, e);
                },
                "finish",
                function () {
                    Loger.get().d(ScreenActivity.TAG, String.format("%s.finish()", this.getClass().getSimpleName())), this.thisA.finish(this);
                },
                "finishSuper",
                function () {
                    this.thisA.finishSuper();
                },
                "getApplicationContext",
                function () {
                    return this.thisA.getApplicationContext();
                },
                "getIntent",
                function () {
                    return this.intent;
                },
                "getString",
                function (t) {
                    for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                    return (e = this.thisA).getString.apply(e, [t].concat(i));
                },
                "getSharedPreferences",
                function (t, e) {
                    return this.thisA.getSharedPreferences(t, e);
                },
                "runOnUiThread",
                function (t) {
                    this.thisA.runOnUiThread(t);
                }
            ),
                _class(ScreenDialog)
                    ._extends(ScreenActivity)
                    ._body("isDialog", function () {
                        return !0;
                    });
            var bt = {
                string: {
                    app_name: "Air Hockey Pro",
                    app_ver: "2022.08.09",
                    info_text_1: "Phát triển:",
                    info_text_2: "localhost",
                    please_wait: "Vui lòng đợi",
                    goal: "Vào",
                    like: "Bạn có thích trò chơi?",
                    dialog_yes: "Đồng ý",
                    dialog_no: "Không",
                    settings: "Cài Đặt",
                    difficulty: "Chọn độ khó",
                    easy: "Dễ",
                    medium: "Bình thường",
                    hard: "Khó",
                    very_hard: "Rất khó",
                    you_won: "Chiến thắng",
                    you_lose: "Thất bại",
                },
                string_ru: {
                    app_name: "Аэро Хоккей Профи",
                    info_text_1: "Разработчик:",
                    info_text_2: "Юрий Радченко",
                    please_wait: "Подождите немного",
                    goal: "Гол",
                    like: "Вам понравилась игра?",
                    dialog_yes: "Да",
                    dialog_no: "Нет",
                    settings: "Настройки",
                    difficulty: "Сложность",
                    easy: "Легко",
                    medium: "Средне",
                    hard: "Сложно",
                    very_hard: "Очень сложно",
                    you_won: "Вы победили",
                    you_lose: "Вы проиграли",
                },
                string_tr: {
                    app_name: "Air Hockey Pro",
                    please_wait: "Lütfen bekle",
                    goal: "Gol",
                    like: "Oyunu beğendin mi?",
                    dialog_yes: "Evet",
                    dialog_no: "Numara",
                    settings: "Ayarlar",
                    difficulty: "Zorluk",
                    easy: "Kolayca",
                    medium: "Orta",
                    hard: "Zor",
                    very_hard: "Çok zor",
                    you_won: "Kazandın",
                    you_lose: "Kaybettin",
                },
                drawable: {
                    logo_radbrothers: "logo_radbrothers.png",
                    button_gdpr: "button_gdpr.png",
                    button_info: "button_info.png",
                    button_back: "button_back.png",
                    button_logout: "button_logout.png",
                    button_options: "button_options.png",
                    button_musicoff: "button_musicoff.png",
                    button_musicon: "button_musicon.png",
                    button_soundoff: "button_soundoff.png",
                    button_soundon: "button_soundon.png",
                    button_close: "button_close.png",
                    button_pause: "button_pause.png",
                    button_restart: "button_restart.png",
                },
                raw: { sound_click: "sound_click.ogg", sound_lose: "sound_lose.ogg", sound_ping: "sound_ping.ogg", sound_puck_missed: "sound_puck_missed.ogg", sound_puck_scored: "sound_puck_scored.ogg", sound_won: "sound_won.ogg" },
                raw_mp3: { sound_click: "sound_click.mp3", sound_lose: "sound_lose.mp3", sound_ping: "sound_ping.mp3", sound_puck_missed: "sound_puck_missed.mp3", sound_puck_scored: "sound_puck_scored.mp3", sound_won: "sound_won.mp3" },
                melody: {},
            };
            function Bmp() {
                Bmp._init.apply(Bmp, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function BmpButtonClickListener() {}
            function BmpButton() {
                BmpButton._init.apply(BmpButton, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function GlowButton() {
                GlowButton._init.apply(GlowButton, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Orientation_Orientation() {}
            function ComponentLimits() {
                ComponentLimits._init.apply(ComponentLimits, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Polsunok() {
                Polsunok._init.apply(Polsunok, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ManagerComponent_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function ManagerComponent_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ManagerComponent_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ManagerComponent_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function ManagerComponent_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            (bt = Resource.get().addRes(bt)),
                _class(Bmp)._body(
                    _static,
                    function (t) {
                        t.TAG = "Bmp";
                    },
                    _static,
                    function (t) {
                        t.lock = new Object();
                    },
                    _static,
                    function (t) {
                        t.reusableBitmaps = null;
                    },
                    _static,
                    function recycle(t) {
                        null != t ? t.isRecycled() || t.recycle() : Loger.get().d(this.TAG, "Recycle bitmap is null, please check this call!!!");
                    },
                    _static,
                    function () {},
                    [Bitmap],
                    _static,
                    function createBitmap(t) {
                        return Bitmap.createBitmap(t);
                    },
                    [Bitmap, Number, Number, Number, Number],
                    _static,
                    function createBitmap(t, e, n, i, o) {
                        return Bitmap.createBitmap(t, e, n, i, o);
                    },
                    [Number, Number, l],
                    _static,
                    function createBitmap(t, e, n) {
                        return Bitmap.createBitmap(t, e, n);
                    },
                    [Bitmap, Number, Number, Number, Number, Matrix_Matrix, Boolean],
                    _static,
                    function createBitmap(t, e, n, i, o, s, r) {
                        return Bitmap.createBitmap(t, e, n, i, o, s, r);
                    },
                    _static,
                    function decodeResource(t, e) {
                        var n = this.getOptions();
                        return u.decodeResource(t.getResources(), e, n), this.setOptions(n), u.decodeResource(t.getResources(), e, n);
                    },
                    _static,
                    function decodeFile(t) {
                        var e = this.getOptions();
                        return u.decodeFile(t, e), this.setOptions(e), u.decodeFile(t, e);
                    },
                    _static,
                    function decodeFileDescriptor(t) {
                        var e = this.getOptions();
                        return u.decodeFileDescriptor(t, null, e), this.setOptions(e), u.decodeFileDescriptor(t, null, e);
                    },
                    [Array, Number, Number],
                    _static,
                    function decodeByteArray(t, e, n) {
                        var i = this.getOptions();
                        return u.decodeByteArray(t, e, n, i), this.setOptions(i), u.decodeByteArray(t, e, n, i);
                    },
                    [Array, Number, Number, h],
                    _static,
                    function decodeByteArray(t, e, n, i) {
                        return this.setOptions(i), u.decodeByteArray(t, e, n, i);
                    },
                    _static,
                    function getOptions() {
                        var t = new h();
                        return (t.inJustDecodeBounds = !0), t;
                    },
                    _static,
                    function setOptions(t) {
                        0 == t.inSampleSize && (t.inSampleSize = this.calculateInSampleSize(t)), this.Build.VERSION.SDK_INT >= this.Build.VERSION_CODES.HONEYCOMB && this.addInBitmapOptions(t), (t.inJustDecodeBounds = !1);
                    },
                    _static,
                    function calculateInSampleSize(t) {
                        var e = t.outWidth,
                            n = t.outHeight,
                            i = 1;
                        if (e > this.P.WT || n > this.P.HT) {
                            for (var o = n / 2, s = e / 2; s / i > this.P.WT && o / i > this.P.HT; ) i *= 2;
                            for (var r = (e * n) / i, a = N.WT * N.HT * 2; r > a; ) (i *= 2), (r /= 2);
                        }
                        return i;
                    },
                    _static,
                    function addInBitmapOptions(t) {
                        t.inMutable = !0;
                        var e = this.getBitmapFromReusableSet(t);
                        null != e && (t.inBitmap = e);
                    },
                    _static,
                    function getBitmapFromReusableSet(t) {
                        var e = null;
                        if (null != this.reusableBitmaps && !this.reusableBitmaps.isEmpty())
                            for (var n, i = this.reusableBitmaps.iterator(); i.hasNext(); )
                                if (null != (n = i.next().get()) && n.isMutable()) {
                                    if (this.canUseForInBitmap(n, t)) {
                                        (e = n),
                                            i.remove(),
                                            new Canvas_Canvas(e).drawColor(p.TRANSPARENT, PorterDuff.Mode.CLEAR),
                                            Loger.get().d(this.TAG, String.format(M.getDefault(), "Reuse bitmap(%dx%d) from set, total count: %d", e.getWidth(), e.getHeight(), this.reusableBitmaps.size()));
                                        break;
                                    }
                                } else i.remove(), Loger.get().d(this.TAG, String.format(M.getDefault(), "Remove bitmap from set, total count: %d", this.reusableBitmaps.size()));
                        return e;
                    },
                    _static,
                    function canUseForInBitmap(t, e) {
                        return t.getWidth() == e.outWidth && t.getHeight() == e.outHeight && t.getConfig() == e.inPreferredConfig && 1 == e.inSampleSize;
                    },
                    _static,
                    function getBytesPerPixel(t) {
                        return t == this.Config.ARGB_8888 ? 4 : t == this.Config.RGB_565 || t == this.Config.ARGB_4444 ? 2 : (this.Config.ALPHA_8, 1);
                    }
                ),
                _interface(BmpButtonClickListener)._body("onClick", function (t, e, n) {}),
                _class(BmpButton)
                    ._extends(SceneComponent)
                    ._instance(
                        "_init",
                        function () {
                            (this.paint = null),
                                (this.Play = !1),
                                (this.atten = 0),
                                (this.Atten = !1),
                                (this.AA = null),
                                (this.AP = null),
                                (this.BOn = null),
                                (this.BOff = null),
                                (this.radioSwitch = null),
                                (this.Listener = null),
                                (this.FrameX = 0),
                                (this.FrameY = 0),
                                (this.FrameH = 0),
                                (this.FrameW = 0),
                                (this.RCount = 0),
                                (this.CCount = 0),
                                (this.RCurent = 0),
                                (this.CCurent = 0),
                                (this.rectB = new Rect()),
                                (this.rectF = new Rect()),
                                (this.rectN = new RectF()),
                                (this.rectP = new RectF()),
                                (this.rectShadow = new RectF()),
                                (this.switched = !1),
                                (this.pressed = !1),
                                (this.pressedTime = 0);
                        },
                        "getBOn",
                        function () {
                            return this.BOn;
                        },
                        "getBOff",
                        function () {
                            return this.BOff;
                        },
                        "setRadioSwitch",
                        function (t) {
                            null != t ? ((this.radioSwitch = t), this.radioSwitch.getButtons().add(this)) : (this.radioSwitch.getButtons().remove(this), (this.radioSwitch = null));
                        },
                        "setListener",
                        function (t) {
                            this.Listener = t;
                        },
                        "isSwitched",
                        function () {
                            return this.switched;
                        },
                        "setSwitched",
                        function (t) {
                            (this.switched = t), this.invalidate();
                        },
                        [Number, Number, p],
                        "setBitmap",
                        function (t, e, n) {
                            this.setBitmap(createBitmap(t, e, n));
                        },
                        [Bitmap],
                        "setBitmap",
                        function (t) {
                            this.setBitmap(t, t);
                        },
                        [Bitmap, Bitmap],
                        "setBitmap",
                        function (t, e) {
                            (this.BOn = t),
                                (this.BOff = e),
                                (this.FrameW = t.getWidth() / this.CCount),
                                (this.FrameH = t.getHeight() / this.RCount),
                                this.rectB.set(0, 0, t.getWidth(), t.getHeight()),
                                this.rectF.set(this.FrameX, this.FrameY, this.FrameX + this.FrameW, this.FrameY + this.FrameH);
                        },
                        _static,
                        "createBitmap",
                        function (t, e, n) {
                            var i = Bitmap.createBitmap(t, e, Bitmap.Config.ARGB_8888);
                            return i.setDensity(160), new Canvas_Canvas(i).drawColor(n), i;
                        },
                        [Number, Number, p, BmpButtonClickListener],
                        BmpButton.name,
                        function (t, e, n, i) {
                            BmpButton._init(this, BmpButton.createBitmap(t, e, n), null, 1, 1, !1, i);
                        },
                        [Bitmap, BmpButtonClickListener],
                        BmpButton.name,
                        function (t, e) {
                            BmpButton._init(this, t, null, 1, 1, !1, e);
                        },
                        [Bitmap, Bitmap, BmpButtonClickListener],
                        BmpButton.name,
                        function (t, e, n) {
                            BmpButton._init(this, t, e, 1, 1, !1, n);
                        },
                        [Bitmap, Bitmap, Boolean, BmpButtonClickListener],
                        BmpButton.name,
                        function (t, e, n, i) {
                            BmpButton._init(this, t, e, 1, 1, n, i);
                        },
                        [Bitmap, Bitmap, Number, Number, Boolean, BmpButtonClickListener],
                        BmpButton.name,
                        function (t, e, n, i, o, s) {
                            SceneComponent._init(this),
                                BmpButton.Initialize(this),
                                (this.BOn = t),
                                (this.BOff = e),
                                (this.RCount = n),
                                (this.CCount = i),
                                null != t &&
                                    ((this.FrameW = t.getWidth() / i),
                                    (this.FrameH = t.getHeight() / n),
                                    this.rectB.set(0, 0, t.getWidth(), t.getHeight()),
                                    this.rectF.set(this.FrameX, this.FrameY, this.FrameX + this.FrameW, this.FrameY + this.FrameH)),
                                (this.Listener = s),
                                (this.switched = o),
                                (this.paint = new S(S.FILTER_BITMAP_FLAG));
                        },
                        "addLabel",
                        function (t) {
                            var e, n;
                            try {
                                (n = new Canvas_Canvas((e = this.BOn.copy(Bitmap.Config.ARGB_8888, !0)))),
                                    t.onDraw(n),
                                    (this.BOn = e),
                                    null != this.BOff && ((n = new Canvas_Canvas((e = this.BOff.copy(Bitmap.Config.ARGB_8888, !0)))), t.onDraw(n), (this.BOff = e)),
                                    this.invalidate();
                            } catch (t) {
                                t.printStackTrace();
                            }
                        },
                        "onRecycle",
                        function (t) {
                            null != this.AA && this.AA.Stoped(),
                                null != this.AP && this.AP.Stoped(),
                                null != this.BOn && this.BOn.recycle(),
                                null != this.BOff && this.BOff.recycle(),
                                (this.BOn = null),
                                (this.BOff = null),
                                (this.paint = null),
                                (this.Listener = null);
                        },
                        "setPosition",
                        function (t, e) {
                            (t == this.getX() && e == this.getY()) || (this.pressed = !1), SceneComponent.setPosition(this, t, e);
                        },
                        "setSize",
                        function (t, e) {
                            SceneComponent.setSize(this, t, e),
                                (this.width = parseInt(t) / this.CCount),
                                (this.height = parseInt(e) / this.RCount),
                                this.rectB.set(0, 0, this.BOn.getWidth(), this.BOn.getHeight()),
                                this.rectN.set(-this.offsetHScale, -this.offsetVScale, this.offsetHScale, this.offsetVScale),
                                this.rectP.set(1 - this.offsetHScale, 1 - this.offsetVScale, this.offsetHScale - 1, this.offsetVScale - 1),
                                this.rectShadow.set(this.rectN),
                                this.rectShadow.offset(this.getDxShadow(), this.getDyShadow());
                        },
                        [p, Number, Number],
                        "setShadow",
                        function (t, e, n) {
                            SceneComponent.setShadow(this, this.paint, t, e, n), this.rectShadow.set(this.rectN), this.rectShadow.offset(this.getDxShadow(), this.getDyShadow());
                        },
                        "setPlay",
                        function (t) {
                            (this.Play = t), !t || (null != AP && AP.getState() != java.lang.Thread.State.TERMINATED) ? null != AP && AP.Stoped() : (AP = new AnimPlay(20));
                        },
                        "setAttention",
                        function (t) {
                            this.Atten = t;
                        },
                        "getAttention",
                        function () {
                            return this.Atten;
                        },
                        "getAlpha",
                        function () {
                            return this.paint.getAlpha();
                        },
                        "setAlpha",
                        function (t) {
                            this.paint.setAlpha(t);
                        },
                        "setEnable",
                        function (t) {
                            SceneComponent.setEnable(this, t), this.enable ? this.paint.setAlpha(255) : this.paint.setAlpha(100);
                        },
                        "onDraw",
                        function (t) {
                            this.visible &&
                                (t.save(),
                                t.translate(this.x, this.y),
                                t.scale(this.scale, this.scale),
                                this.switched && null != this.BOff
                                    ? this.pressed
                                        ? t.drawBitmap(this.BOff, this.rectB, this.rectP, this.paint)
                                        : (this.isDrawShadow() && t.drawBitmap(this.BOff, this.rectF, this.rectShadow, this.getPaintShadow()), t.drawBitmap(this.BOff, this.rectB, this.rectN, this.paint))
                                    : this.pressed
                                    ? t.drawBitmap(this.BOn, this.rectF, this.rectP, this.paint)
                                    : (this.isDrawShadow() && t.drawBitmap(this.BOn, this.rectF, this.rectShadow, this.getPaintShadow()), t.drawBitmap(this.BOn, this.rectF, this.rectN, this.paint)),
                                t.restore());
                        },
                        "onTouchEvent",
                        function (t) {
                            if (!this.enable || !this.visible) return !1;
                            var n = t.getX(),
                                i = t.getY();
                            switch (t.getAction()) {
                                case MotionEvent_MotionEvent.ACTION_DOWN:
                                    n > this.x - this.offsetHScale &&
                                        n < this.x + this.offsetHScale &&
                                        i > this.y - this.offsetVScale &&
                                        i < this.y + this.offsetVScale &&
                                        ((this.pressed = !0), (this.pressedTime = e.currentTimeMillis()), this.invalidate());
                                    break;
                                case MotionEvent_MotionEvent.ACTION_UP:
                                    if (
                                        this.pressed &&
                                        n > this.x - this.width / 2 &&
                                        n < this.x + this.width / 2 &&
                                        i > this.y - this.height / 2 &&
                                        i < this.y + this.height / 2 &&
                                        ((this.switched = !this.switched), this.pressed && this.invalidate(), (this.pressed = !1), null != this.radioSwitch && this.radioSwitch.onSwitch(this), null != this.Listener)
                                    )
                                        return this.Listener.onClick(t, this.pressed, this.switched);
                                    this.pressed && this.invalidate(), (this.pressed = !1);
                                    break;
                                case MotionEvent_MotionEvent.ACTION_MOVE:
                                    (e.currentTimeMillis() - this.pressedTime > 250 || !(n > this.x - this.offsetHScale && n < this.x + this.offsetHScale && i > this.y - this.offsetVScale && i < this.y + this.offsetVScale)) &&
                                        (this.pressed && this.invalidate(), (this.pressed = !1));
                            }
                            return !1;
                        },
                        "onUpdate",
                        function (t) {},
                        "setBmpButtonClickListener",
                        function (t) {
                            this.Listener = t;
                        }
                    ),
                (BmpButton.BmpButtonClickListener = BmpButtonClickListener),
                _class(GlowButton)
                    ._extends(BmpButton)
                    ._body(
                        function (t) {
                            t.Listener = null;
                        },
                        function (t) {
                            t.paintBorderLight = new S();
                        },
                        function (t) {
                            t.paintBorderColor = new S();
                        },
                        function (t) {
                            t.paintBack = new S();
                        },
                        function (t) {
                            t.paintCaption = new S();
                        },
                        function (t) {
                            t.paintTextE = new S();
                        },
                        function (t) {
                            t.paintTextD = new S();
                        },
                        function (t) {
                            t.colorUp = 0;
                        },
                        function (t) {
                            t.wBr = 0;
                        },
                        function (t) {
                            t.wBrHf = 0;
                        },
                        function (t) {
                            t.radius = 0;
                        },
                        function (t) {
                            t.Caption = "";
                        },
                        "setCaption",
                        function (t) {
                            this.Caption = t;
                        },
                        function (t) {
                            t.Text = "";
                        },
                        "setText",
                        function (t) {
                            this.Text = t;
                        },
                        function (t) {
                            t.bitmapIconOrigin = null;
                        },
                        "setBitmapIconOrigin",
                        function (t) {
                            (this.bitmapIconOrigin = t), (this.bitmapIconSwitch = t);
                        },
                        function (t) {
                            t.bitmapIconSwitch = null;
                        },
                        "setBitmapIconSwitch",
                        function (t) {
                            this.bitmapIconSwitch = t;
                        },
                        [Number, Number, Number],
                        GlowButton.name,
                        function (t, e, n) {
                            GlowButton._init(this, t, e, n, !1);
                        },
                        [Number, Number, Number, Boolean],
                        GlowButton.name,
                        function (t, e, n, i) {
                            BmpButton._init(this, null, null, i, null),
                                GlowButton.Initialize(this),
                                (this.colorUp = t),
                                (this.wBr = e),
                                (this.wBrHf = this.wBr / 2),
                                (this.radius = n),
                                this.paintBorderColor.setColor(t),
                                this.paintBorderColor.setStyle(f.STROKE),
                                this.paintBorderColor.setStrokeWidth(this.wBr),
                                this.paintBorderColor.setAntiAlias(!0),
                                this.paintBorderColor.setMaskFilter(new D(this.wBrHf, E.NORMAL)),
                                this.paintBorderLight.setColor(p.WHITE),
                                this.paintBorderLight.setStyle(f.STROKE),
                                this.paintBorderLight.setStrokeWidth(0.5 * this.wBr),
                                this.paintBorderLight.setAntiAlias(!0),
                                this.paintBorderLight.setMaskFilter(new D(0.5 * this.wBrHf, E.NORMAL)),
                                this.paintBack.setColor(p.argb(150, 0, 0, 0)),
                                this.paintBack.setStyle(f.FILL_AND_STROKE),
                                this.paintBack.setStrokeWidth(0),
                                this.paintBack.setAntiAlias(!0),
                                this.paintBack.setMaskFilter(new D(2 * this.wBr, E.NORMAL)),
                                this.paintCaption.setColor(p.WHITE),
                                this.paintCaption.setStyle(f.FILL_AND_STROKE),
                                this.paintCaption.setStrokeWidth(0),
                                this.paintCaption.setAlpha(255),
                                this.paintCaption.setAntiAlias(!0),
                                this.paintCaption.setTextAlign(g.CENTER),
                                this.paintTextE.setColor(p.WHITE),
                                this.paintTextE.setStyle(f.FILL_AND_STROKE),
                                this.paintTextE.setStrokeWidth(1),
                                this.paintTextE.setAlpha(255),
                                this.paintTextE.setAntiAlias(!0),
                                this.paintTextE.setTextAlign(g.CENTER),
                                this.paintTextD.setColor(p.WHITE),
                                this.paintTextD.setStyle(f.FILL_AND_STROKE),
                                this.paintTextD.setStrokeWidth(1),
                                this.paintTextD.setAlpha(80),
                                this.paintTextD.setAntiAlias(!0),
                                this.paintTextD.setTextAlign(g.CENTER);
                        },
                        "setSize",
                        function (t, e) {
                            this.paintCaption.setTextSize(0.2 * e), this.paintTextE.setTextSize(0.3 * e), this.paintTextD.setTextSize(0.3 * e);
                            var n = Bmp.createBitmap(t, e, l.ARGB_8888);
                            n.setDensity(ScenaParametr_ScenaParametr.P.DEN_DEF);
                            var i = Bmp.createBitmap(t, e, l.ARGB_8888);
                            i.setDensity(ScenaParametr_ScenaParametr.P.DEN_DEF), this.setBitmap(n, i), BmpButton.setSize(this, t, e), this.drawButton();
                        },
                        "setParam",
                        function (t, e, n, i) {
                            this.paintCaption.setTextSize(0.2 * i), this.paintTextE.setTextSize(0.3 * i), this.paintTextD.setTextSize(0.3 * i);
                            var o = Bmp.createBitmap(n, i, l.ARGB_8888);
                            o.setDensity(ScenaParametr_ScenaParametr.P.DEN_DEF);
                            var s = Bmp.createBitmap(n, i, l.ARGB_8888);
                            s.setDensity(ScenaParametr_ScenaParametr.P.DEN_DEF), this.setBitmap(o, s), BmpButton.setParam(this, t, e, n, i), this.drawButton();
                        },
                        "drawButton",
                        function () {
                            var t = new Canvas_Canvas(this.getBOn());
                            t.drawRoundRect(new RectF(this.wBr, this.wBr, this.width - this.wBr, this.height - this.wBr), this.radius, this.radius, this.paintBack),
                                t.drawRoundRect(new RectF(this.wBr, this.wBr, this.width - this.wBr, this.height - this.wBr), this.radius, this.radius, this.paintBorderColor),
                                t.drawRoundRect(new RectF(this.wBr, this.wBr, this.width - this.wBr, this.height - this.wBr), this.radius, this.radius, this.paintBorderLight),
                                null != this.bitmapIconOrigin && t.drawBitmap(this.bitmapIconOrigin, this.offsetH - 0.5 * this.bitmapIconOrigin.getWidth(), this.offsetV - 0.5 * this.bitmapIconOrigin.getHeight(), null),
                                (t = new Canvas_Canvas(this.getBOff())).drawRoundRect(new RectF(this.wBr, this.wBr, this.width - this.wBr, this.height - this.wBr), this.radius, this.radius, this.paintBack),
                                t.drawRoundRect(new RectF(this.wBr, this.wBr, this.width - this.wBr, this.height - this.wBr), this.radius, this.radius, this.paintBorderColor),
                                t.drawRoundRect(new RectF(this.wBr, this.wBr, this.width - this.wBr, this.height - this.wBr), this.radius, this.radius, this.paintBorderLight),
                                null != this.bitmapIconSwitch && t.drawBitmap(this.bitmapIconSwitch, this.offsetH - 0.5 * this.bitmapIconSwitch.getWidth(), this.offsetV - 0.5 * this.bitmapIconSwitch.getHeight(), null);
                        },
                        "onDraw",
                        function (t) {
                            BmpButton.onDraw(this, t),
                                t.save(),
                                t.translate(this.x, this.y),
                                t.drawText(this.Caption, 0, 0.3 * -this.offsetVScale, this.paintCaption),
                                this.isEnable() ? t.drawText(this.Text, 0, 0.3 * this.offsetVScale, this.paintTextE) : t.drawText(this.Text, 0, 0.3 * this.offsetVScale, this.paintTextD),
                                t.restore();
                        }
                    ),
                _interface(function onButtonTouchListener() {})._body(
                    "onClick",
                    function (t) {},
                    "onClickDb",
                    function (t) {}
                ),
                _class(Orientation_Orientation)._instance("_static", function () {
                    (this.Horizontal = 1), (this.Vertical = 2);
                }),
                _class(ComponentLimits)
                    ._extends(SceneComponent)
                    ._instance(
                        function (t) {
                            (t.PBack = new S()), (t.PContur = new S()), (t.min = 0), (t.max = 0);
                        },
                        "setLimits",
                        function (t, e) {}
                    ),
                _class(Polsunok)
                    ._extends(ComponentLimits)
                    ._instance(
                        function (t) {
                            (t.AA = null), (t.Alpha = 127), (t.orientation = 0);
                        },
                        "getOrientation",
                        function () {
                            return this.orientation;
                        },
                        "setLimits",
                        function (t, e) {
                            (this.max = e), (this.min = t), this.invalidate();
                        },
                        Polsunok.name,
                        function (t) {
                            ComponentLimits._init(this),
                                Polsunok.Initialize(this),
                                (this.orientation = t),
                                this.PBack.setColor(p.BLACK),
                                this.PBack.setStyle(S.Style.FILL_AND_STROKE),
                                this.PBack.setStrokeWidth(1),
                                this.PBack.setAntiAlias(!0),
                                this.PBack.setAlpha(127),
                                this.PContur.setColor(p.WHITE),
                                this.PContur.setStyle(S.Style.FILL_AND_STROKE),
                                this.PContur.setStrokeWidth(1),
                                this.PContur.setAntiAlias(!0),
                                this.PContur.setAlpha(127);
                        },
                        "onDraw",
                        function (t) {
                            switch ((t.save(), t.translate(this.x, this.y), t.scale(this.scale, this.scale), this.orientation)) {
                                case Orientation_Orientation.Vertical:
                                    var e = (this.max - this.min) / this.height,
                                        n = -this.offsetVScale,
                                        i = this.offsetVScale;
                                    t.drawRoundRect(new RectF(-this.offsetHScale, n + 1, this.offsetHScale, i - 1), this.offsetHScale, this.offsetHScale, this.PBack),
                                        t.drawRoundRect(new RectF(-this.offsetHScale, n + -this.min / e + 1, this.offsetHScale, n + -this.min / e + (i - n) / e - 1), this.offsetHScale, this.offsetHScale, this.PContur);
                                    break;
                                case Orientation_Orientation.Horizontal:
                                    var o = (this.max - this.min) / this.width,
                                        s = -this.offsetHScale,
                                        r = this.offsetHScale;
                                    t.drawRoundRect(new RectF(s + 1, -this.offsetVScale, r - 1, this.offsetVScale), this.offsetVScale, this.offsetVScale, this.PBack),
                                        t.drawRoundRect(new RectF(s + -this.min / o + 1, -this.offsetVScale, s + -this.min / o + (r - s) / o - 1, this.offsetVScale), this.offsetVScale, this.offsetVScale, this.PContur);
                            }
                            t.restore();
                        },
                        "onTouchEvent",
                        function (t) {
                            return !1;
                        },
                        "onUpdate",
                        function (t) {},
                        "onRecycle",
                        function (t) {},
                        "setAlpha",
                        function (t) {
                            null != AA && AA.Stoped(), (AA = t ? new AnimAlpha(-300) : new AnimAlpha(300));
                        }
                    );
            var At = 1,
                wt = { Min: 1, Center: 2, Max: 3 };
            function OnObjectTouchListener() {}
            function OnObjectVisibilityListener() {}
            function OnScrollListener() {}
            function ManagerComponent() {
                ManagerComponent._init.apply(ManagerComponent, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ObjectTouchOnGestureListener() {
                ObjectTouchOnGestureListener._init.apply(ObjectTouchOnGestureListener, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ObjectScrollOnGestureListener() {
                ObjectScrollOnGestureListener._init.apply(ObjectScrollOnGestureListener, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function AnimationFling() {
                AnimationFling._init.apply(AnimationFling, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneView() {
                SceneView._init.apply(SceneView, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneDialogResult() {
                SceneDialogResult._init.apply(SceneDialogResult, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenDialogResult() {
                ScreenDialogResult._init.apply(ScreenDialogResult, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _interface(OnObjectTouchListener)._instance(
                "onClick",
                function (t, e) {},
                "onClickDb",
                function (t, e) {},
                "onClickLong",
                function (t, e) {}
            ),
                _interface(OnObjectVisibilityListener)._instance("onChangeVisible", function (t, e) {}),
                _interface(OnScrollListener)._body("onScroll", function (t) {}),
                _class(ManagerComponent)
                    ._extends(SceneComponent)
                    ._instance(
                        "_static",
                        function () {
                            (this.TAG = "ManagerComponent"), (this.Align = wt);
                        },
                        function (t) {
                            (t.gestureDetectorTouch = null), (t.gestureDetectorScroll = null), (t.objectTouchOnGestureListener = null), (t.objectScrollOnGestureListener = null);
                        },
                        function (t) {
                            t.onObjectTouchListener = null;
                        },
                        "setOnObjectTouchListener",
                        function (t) {
                            this.onObjectTouchListener = t;
                        },
                        function (t) {
                            t.onObjectVisibilityListener = null;
                        },
                        "setOnObjectVisibilityListener",
                        function (t) {
                            this.onObjectVisibilityListener = t;
                        },
                        function (t) {
                            t.onScrollListener = null;
                        },
                        "setOnScrollListener",
                        function (t) {
                            this.onScrollListener = t;
                        },
                        function (t) {
                            t.orientation = Orientation_Orientation.Horizontal;
                        },
                        "getOrientation",
                        function () {
                            return this.orientation;
                        },
                        function (t) {
                            (t.countCol = 1), (t.countRow = 1);
                        },
                        function (t) {
                            t.widthElement = 0;
                        },
                        "getWidthElement",
                        function () {
                            return this.widthElement;
                        },
                        function (t) {
                            t.heightElement = 0;
                        },
                        "getHeightElement",
                        function () {
                            return this.heightElement;
                        },
                        function (t) {
                            t.animationFling = null;
                        },
                        function (t) {
                            t.typeLimits = At;
                        },
                        "setTypeLimits",
                        function (t) {
                            (this.typeLimits = t), this.createLimits();
                        },
                        function (t) {
                            t.isOverfill = !1;
                        },
                        function (t) {
                            t.align = wt.Min;
                        },
                        "getAlign",
                        function () {
                            return this.align;
                        },
                        "setAlign",
                        function (t) {
                            this.align = t;
                        },
                        function (t) {
                            t.componentLimits = null;
                        },
                        "getComponentLimits",
                        function () {
                            return this.componentLimits;
                        },
                        function (t) {
                            t.lockElements = new Object();
                        },
                        "getLockElements",
                        function () {
                            return this.lockElements;
                        },
                        function (t) {
                            t.elements = new List();
                        },
                        "getElements",
                        function () {
                            return this.elements;
                        },
                        function (t) {
                            t.selected = new List();
                        },
                        "getSelected",
                        function () {
                            return selected;
                        },
                        "isEmpty",
                        function () {
                            return this.elements.isEmpty();
                        },
                        ManagerComponent.name,
                        function (t, e) {
                            SceneComponent._init(this),
                                ManagerComponent.Initialize(this),
                                (this.orientation = e),
                                this.createLimits(),
                                (this.handler = new G(ft.getMainLooper())),
                                this.handler.post(
                                    new Runnable()._instance({ mc: this, context: t }, "run", function (t, e) {
                                        (t.objectTouchOnGestureListener = new ObjectTouchOnGestureListener(t)),
                                            (t.objectScrollOnGestureListener = new ObjectScrollOnGestureListener(t)),
                                            (t.gestureDetectorTouch = new GestureDetector(e, t.objectTouchOnGestureListener)),
                                            (t.gestureDetectorScroll = new GestureDetector(e, t.objectScrollOnGestureListener));
                                    })
                                );
                        },
                        "setPosition",
                        function (t, e) {
                            if ((SceneComponent.setPosition(this, t, e), null != this.componentLimits && this.componentLimits instanceof Polsunok)) {
                                var n = this.componentLimits.getOrientation();
                                this.componentLimits.setPosition(n == Orientation_Orientation.Horizontal ? this.offsetHScale : this.widthScale - 3, n == Orientation_Orientation.Vertical ? this.offsetVScale : this.heightScale - 3);
                            }
                        },
                        "setSize",
                        function (t, e) {
                            if ((SceneComponent.setSize(this, t, e), null != this.componentLimits && this.componentLimits instanceof Polsunok)) {
                                var n = this.componentLimits.getOrientation();
                                this.componentLimits.setSize(n == Orientation_Orientation.Horizontal ? this.width : this.componentLimits.getWidth(), n == Orientation_Orientation.Vertical ? this.height : this.componentLimits.getHeight());
                            }
                        },
                        "setParam",
                        function (t, e, n, i) {
                            SceneComponent.setParam(this, t, e, n, i),
                                null != this.componentLimits &&
                                    this.componentLimits instanceof Polsunok &&
                                    (this.orientation == Orientation_Orientation.Vertical
                                        ? this.componentLimits.setParam(this.widthScale - 3, this.offsetVScale, 6, this.heightScale)
                                        : this.componentLimits.setParam(this.offsetHScale, this.heightScale - 3, this.widthScale, 6));
                        },
                        "createLimits",
                        function () {
                            switch (this.typeLimits) {
                                case At:
                                    var t;
                                    this.orientation == Orientation_Orientation.Vertical
                                        ? (t = new Polsunok(Orientation_Orientation.Vertical)).setParam(this.widthScale - 3, this.offsetVScale, 6, this.heightScale)
                                        : (t = new Polsunok(Orientation_Orientation.Horizontal)).setParam(this.offsetHScale, this.heightScale - 3, this.widthScale, 6),
                                        (this.componentLimits = t);
                                case Dots:
                            }
                        },
                        [List],
                        "setLimits",
                        function (t) {
                            this.setLimits(t, !1);
                        },
                        [List, Boolean],
                        "setLimits",
                        function (t, e) {
                            if (!t.isEmpty()) {
                                switch (this.orientation) {
                                    case Orientation_Orientation.Vertical:
                                        var n = t.get(0).getY() - 0.5 * this.heightElement,
                                            i = t.get(t.size() - 1).getY() + 0.5 * this.heightElement;
                                        this.componentLimits.setLimits(n, i), (this.scrollPercent = (100 * -n) / (i - n - this.height));
                                        break;
                                    case Orientation_Orientation.Horizontal:
                                        var o = t.get(0).getX() - 0.5 * this.widthElement,
                                            s = t.get(t.size() - 1).getX() + 0.5 * this.widthElement;
                                        this.componentLimits.setLimits(o, s), (this.scrollPercent = (100 * -s) / (o - s - this.width));
                                }
                                e && null != this.onScrollListener && this.onScrollListener.onScroll(this.scrollPercent);
                            }
                        },
                        "getCountObject",
                        function () {
                            return this.elements.size();
                        },
                        function (t) {
                            t.scrollPercent = 0;
                        },
                        "getScrollPercent",
                        function () {
                            return this.scrollPercent;
                        },
                        "setScrollPercent",
                        function (t) {
                            this.moveObjectTo(t);
                        },
                        "addComponent",
                        function (t) {
                            var e = this.elements.size();
                            if (this.orientation == Orientation_Orientation.Vertical) {
                                var n = 0.5 * this.widthElement + this.widthElement * (e % this.countCol),
                                    i = this.elements.isEmpty() ? 0 : this.elements.get(0).getY() - 0.5 * this.heightElement * this.scale,
                                    o = 0.5 * this.heightElement + this.heightElement * parseInt(e / this.countCol) + i;
                                t.setPositionOnly(n, o), t.getY() > this.height && (this.isOverfill = !0);
                            } else {
                                var s = this.elements.isEmpty() ? 0 : this.elements.get(0).getX() - 0.5 * this.widthElement * this.scale,
                                    r = 0.5 * this.widthElement + this.widthElement * parseInt(e / this.countRow) + s,
                                    a = 0.5 * this.heightElement + this.heightElement * (e % this.countRow);
                                t.setPositionOnly(r, a), t.getX() > this.width && (this.isOverfill = !0);
                            }
                            this.elements.add(t), this.setLimits(this.elements), this.invalidate();
                        },
                        [Number],
                        "delComponent",
                        function (t) {
                            if (t < this.elements.size()) {
                                var e = this.elements.get(t);
                                return this.delComponent(e), e;
                            }
                            return null;
                        },
                        [SceneComponent],
                        "delComponent",
                        function (t) {
                            var e = this.elements.indexOf(t);
                            if (-1 != e) {
                                for (var n = this.elements.size() - 1; n > e; n--) this.elements.get(n).setX(this.elements.get(n - 1).getX()), this.elements.get(n).setY(this.elements.get(n - 1).getY());
                                this.elements.remove(t), this.flingObjects(0), this.invalidate();
                            }
                        },
                        "setComponents",
                        function (t) {
                            this.elements.addAll(t), this.invalidate();
                        },
                        "clearComponents",
                        function (t) {
                            for (var e, n = ManagerComponent_createForOfIteratorHelperLoose(this.elements); !(e = n()).done; ) {
                                e.value.onRecycle(t);
                            }
                            this.elements.clear(), this.selected.clear(), this.invalidate();
                        },
                        "getCountGrid",
                        function () {
                            return this.countCol * this.countRow;
                        },
                        "setCountObject",
                        function (t, e) {
                            (this.countCol = t), (this.countRow = e), (this.widthElement = this.width / t), (this.heightElement = this.height / e);
                        },
                        "setSizeObject",
                        function (t, e) {
                            this.orientation == Orientation_Orientation.Vertical
                                ? ((this.countCol = t), (this.widthElement = this.width / countCol), (this.heightElement = e), (this.countRow = parseInt(height / heightElement)))
                                : ((this.countRow = t), (this.heightElement = this.height / countRow), (this.widthElement = e), (this.countCol = int(width / widthElement)));
                        },
                        "invalidatePath",
                        function (t) {
                            var e = !1;
                            if (SceneComponent.invalidatePath(this, t)) e = !0;
                            else {
                                var n = new Path(),
                                    i = new Matrix_Matrix();
                                i.setTranslate(this.x - this.offsetHScale, this.y - this.offsetVScale), i.setRotate(this.rotate), i.setScale(this.scale, this.scale);
                                for (var o = 0; o < this.elements.size(); o++) {
                                    this.elements.get(o).invalidatePath(n) && (t.addPath(n, i), n.reset(), (e = !0));
                                }
                            }
                            return e;
                        },
                        [UpdateMode],
                        "invalidate",
                        function (t) {
                            SceneComponent.invalidate(this, t);
                            for (var e = 0; e < this.elements.size(); e++) {
                                this.elements.get(e).invalidateCancel();
                            }
                        },
                        "onDraw",
                        function (t) {
                            t.save(), t.translate(this.x - this.offsetHScale, this.y - this.offsetVScale), t.clipRect(0, 0, this.widthScale, this.heightScale);
                            for (var e = 0; e < this.elements.size(); e++) {
                                this.elements.get(e).onDraw(t);
                            }
                            null != this.componentLimits && this.isOverfill && this.componentLimits.onDraw(t), t.restore();
                        },
                        "onTouchEvent",
                        function (t) {
                            var e, n;
                            if (this.elements.isEmpty()) return !1;
                            var i = MotionEvent_MotionEvent.obtain(t);
                            i.offsetLocation(-(this.x - this.offsetHScale), -(this.y - this.offsetVScale));
                            var o = i.getX(),
                                s = i.getY();
                            if (((n = e = this.gestureDetectorScroll.onTouchEvent(i)), o > 0 && o < this.widthScale && s > 0 && s < this.heightScale))
                                if (e) this.objectTouchOnGestureListener.setCall(!1);
                                else {
                                    t.getAction() == MotionEvent_MotionEvent.ACTION_DOWN && null != this.animationFling && this.animationFling.interrupt();
                                    for (var r, a = ManagerComponent_createForOfIteratorHelperLoose(this.elements); !(r = a()).done; ) {
                                        if ((e = r.value.onTouchEvent(i))) break;
                                    }
                                    e || (e = this.gestureDetectorTouch.onTouchEvent(i));
                                }
                            return n || t.getAction() != MotionEvent_MotionEvent.ACTION_UP || (this.objectTouchOnGestureListener.setCall(!0), this.flingObjects(0)), i.recycle(), e;
                        },
                        "onUpdate",
                        function (t) {},
                        "onRecycle",
                        function (t) {
                            this.clearComponents(t);
                        },
                        "isCaptureRelative",
                        function (t) {
                            var e = MotionEvent_MotionEvent.obtain(t);
                            e.offsetLocation(-(x - offsetHScale), -(y - offsetVScale));
                            var n = this.isCapture(e);
                            return e.recycle(), n;
                        },
                        [Number, Number],
                        "isCapture",
                        function (t, e) {
                            return t > 0 && t < this.widthScale && e > 0 && e < this.heightScale;
                        },
                        "centered",
                        function () {
                            this.flingObjects(0);
                        },
                        "flingObjects",
                        function (t) {
                            if (null == this.animationFling || !this.animationFling.isCont())
                                try {
                                    this.animationFling = new AnimationFling(this, t);
                                } catch (t) {
                                    t.printStackTrace();
                                }
                        },
                        [Number],
                        "moveObjects",
                        function (t) {
                            return this.moveObjects(t, this.elements);
                        },
                        [Number, Object],
                        "moveObjects",
                        function (t, e) {
                            var n = !0;
                            if (e.isEmpty()) return !1;
                            var i = this.orientation == Orientation_Orientation.Vertical ? e.get(0).getY() - 0.5 * this.heightElement : e.get(0).getX() - 0.5 * this.widthElement,
                                o = this.orientation == Orientation_Orientation.Vertical ? e.get(e.size() - 1).getY() + 0.5 * this.heightElement : e.get(e.size() - 1).getX() + 0.5 * this.widthElement,
                                s = this.orientation == Orientation_Orientation.Vertical ? this.heightScale : this.widthScale,
                                r = this.orientation == Orientation_Orientation.Vertical ? this.heightElement : this.widthElement;
                            if (((this.isOverfill = !(o - i <= s + 1)), this.isOverfill)) t > 0 ? (t = i + t < 0 ? t : -i) : t < 0 && (t = o + t > s ? t : s - o);
                            else
                                switch (this.align) {
                                    case wt.Min:
                                        t = -i;
                                        break;
                                    case wt.Center:
                                        t > 0 ? (t = i + t < 0.5 * s - 0.5 * e.size() * r ? t : 0.5 * s - 0.5 * e.size() * r - i) : t < 0 && (t = o + t > 0.5 * s + 0.5 * e.size() * r ? t : 0.5 * s + 0.5 * e.size() * r - o);
                                        break;
                                    case wt.Max:
                                        t = s - o;
                                }
                            if (0 != t)
                                for (var a, c = null != this.onObjectVisibilityListener, l = ManagerComponent_createForOfIteratorHelperLoose(e); !(a = l()).done; ) {
                                    var u = a.value,
                                        h = c && this.isCapture(u.getX(), u.getY());
                                    switch (this.orientation) {
                                        case Orientation_Orientation.Vertical:
                                            u.setPositionOnly(u.getX(), u.getY() + t);
                                            break;
                                        case Orientation_Orientation.Horizontal:
                                            u.setPositionOnly(u.getX() + t, u.getY());
                                    }
                                    if (c) {
                                        var p = this.isCapture(u.getX(), u.getY());
                                        p != h && this.onObjectVisibilityListener.onChangeVisible(u, p);
                                    }
                                }
                            else n = !1;
                            return this.setLimits(e, !0), this.invalidate(), n;
                        },
                        "moveObjectTo",
                        function (t) {
                            if (!this.elements.isEmpty())
                                switch (this.orientation) {
                                    case Orientation_Orientation.Vertical:
                                        var e = this.elements.get(0).getY() - 0.5 * this.heightElement,
                                            n = this.elements.get(this.elements.size() - 1).getY() + 0.5 * this.heightElement;
                                        this.moveObjects(e - (t * (n - e - this.height)) / 100);
                                        break;
                                    case Orientation_Orientation.Horizontal:
                                        var i = this.elements.get(0).getX() - 0.5 * this.widthElement,
                                            o = this.elements.get(this.elements.size() - 1).getX() + 0.5 * this.widthElement;
                                        this.moveObjects(o - (t * (i - o - this.height)) / 100);
                                }
                        }
                    ),
                _class(ObjectTouchOnGestureListener)
                    ._extends(SimpleOnGestureListener)
                    ._instance(
                        function (t) {
                            t.call = !0;
                        },
                        "setCall",
                        function (t) {
                            this.call = t;
                        },
                        ObjectTouchOnGestureListener.name,
                        function (t) {
                            this.mc = t;
                        },
                        "onSingleTapUp",
                        function (t) {
                            if (this.call && null != this.mc.onObjectTouchListener)
                                for (var e, n = ManagerComponent_createForOfIteratorHelperLoose(this.mc.elements); !(e = n()).done; ) {
                                    var i = e.value;
                                    if (i.isCaptureRelative(t)) return this.mc.onObjectTouchListener.onClick(i, t);
                                }
                            return !1;
                        },
                        "onDoubleTap",
                        function (t) {
                            if (this.call && null != this.mc.onObjectTouchListener)
                                for (var e, n = ManagerComponent_createForOfIteratorHelperLoose(this.mc.elements); !(e = n()).done; ) {
                                    var i = e.value;
                                    if (i.isCaptureRelative(t)) return this.mc.onObjectTouchListener.onClickDb(i, t);
                                }
                            return SimpleOnGestureListener.onDoubleTap(this, t);
                        },
                        "onLongPress",
                        function (t) {
                            if (this.call && null != this.mc.onObjectTouchListener)
                                for (var e, n = ManagerComponent_createForOfIteratorHelperLoose(this.mc.elements); !(e = n()).done; ) {
                                    var i = e.value;
                                    i.isCaptureRelative(t) && this.mc.onObjectTouchListener.onClickLong(i, t);
                                }
                            SimpleOnGestureListener.onLongPress(this, t);
                        }
                    ),
                _class(ObjectScrollOnGestureListener)
                    ._extends(SimpleOnGestureListener)
                    ._instance(
                        ObjectScrollOnGestureListener.name,
                        function (t) {
                            this.mc = t;
                        },
                        "onScroll",
                        function (t, e, n, i) {
                            if (this.mc.isCapture(t) && this.mc.isCapture(e)) {
                                switch (this.mc.orientation) {
                                    case Orientation_Orientation.Vertical:
                                        this.mc.moveObjects(-i);
                                        break;
                                    case Orientation_Orientation.Horizontal:
                                        this.mc.moveObjects(-n);
                                }
                                return !0;
                            }
                            return !1;
                        },
                        "onFling",
                        function (t, e, n, i) {
                            if (this.mc.isCapture(t) && this.mc.isCapture(e)) {
                                var o = 0;
                                switch (this.mc.orientation) {
                                    case Orientation_Orientation.Vertical:
                                        o = i;
                                        break;
                                    case Orientation_Orientation.Horizontal:
                                        o = n;
                                }
                                if (Math.abs(o) > 10 * N.SP) return this.mc.flingObjects(o), !0;
                            }
                            return !1;
                        }
                    ),
                _class(AnimationFling)
                    ._extends(Animation)
                    ._instance(
                        function (t) {
                            (t.distance = 0), (t.velocity = 0), (t.manager = null);
                        },
                        AnimationFling.name,
                        function (t, e) {
                            Animation._init(this), AnimationFling.Initialize(this), (this.manager = t), this.setName(this.getClass().getSimpleName()), (this.velocity = 0.5 * e), this.setRepeatCount(-1), this.run();
                        },
                        "run",
                        function () {
                            0 != this.velocity ? this.fling() : this.centered(), Animation.run(this);
                        },
                        "fling",
                        function () {
                            this.setAnimationCaller(
                                new AnimationCaller()._instance(
                                    "_init",
                                    function () {
                                        this.move = !0;
                                    },
                                    { anim: this, msInterval: _1 },
                                    [Number],
                                    "call",
                                    function (t, e) {
                                        if (this.move && Math.abs(t.velocity) > 10 * N.SP) {
                                            var n = e / 1e3;
                                            n > 0 &&
                                                ((t.distance = t.velocity * n),
                                                t.velocity < 0
                                                    ? ((t.velocity = t.velocity + 500 * N.SP * n), (t.velocity = t.velocity < 0 ? t.velocity : 0))
                                                    : t.velocity > 0 && ((t.velocity = t.velocity - 500 * N.SP * n), (t.velocity = t.velocity > 0 ? t.velocity : 0)),
                                                (this.move = t.manager.moveObjects(t.distance)));
                                        } else t.centered();
                                        return !1;
                                    }
                                )
                            );
                        },
                        "centered",
                        function () {
                            var t = -this.getDistanceAlign();
                            (this.velocity = 250 * Math.signum(t) * N.SP),
                                this.setAnimationCaller(
                                    new AnimationCaller()._instance(
                                        "_init",
                                        function () {
                                            (this.distanceTotal = 0), (this.move = !0);
                                        },
                                        { anim: this, dist: t, msInterval: _1 },
                                        [Number],
                                        "call",
                                        function (t, e, n) {
                                            if (this.move && Math.abs(this.distanceTotal) < Math.abs(e)) {
                                                var i = n / 1e3;
                                                i > 0 &&
                                                    ((t.distance = t.velocity * i),
                                                    (t.distance = Math.abs(this.distanceTotal + t.distance) < Math.abs(e) ? t.distance : e - this.distanceTotal),
                                                    (this.distanceTotal += t.distance),
                                                    t.velocity < 0 ? (t.velocity = t.velocity - 500 * N.SP * i) : t.velocity > 0 && (t.velocity = t.velocity + 500 * N.SP * i),
                                                    (this.move = t.manager.moveObjects(t.distance)));
                                            } else t.out();
                                            return !1;
                                        }
                                    )
                                );
                        },
                        "getDistanceAlign",
                        function () {
                            var t = 0,
                                e = 0,
                                n = this.manager.getElements();
                            if (n.isEmpty()) return 0;
                            var i = this.manager.orientation == Orientation_Orientation.Vertical ? n.get(0).getY() - 0.5 * this.manager.heightElement : n.get(0).getX() - 0.5 * this.manager.widthElement,
                                o = this.manager.orientation == Orientation_Orientation.Vertical ? n.get(n.size() - 1).getY() + 0.5 * this.manager.heightElement : n.get(n.size() - 1).getX() + 0.5 * this.manager.widthElement,
                                s = this.manager.orientation == Orientation_Orientation.Vertical ? this.manager.heightScale : this.manager.widthScale,
                                r = this.manager.orientation == Orientation_Orientation.Vertical ? this.manager.heightElement : this.manager.widthElement,
                                a = this.manager.isOverfill ? (this.manager.orientation == Orientation_Orientation.Vertical ? this.manager.countRow : this.manager.countCol) : n.size();
                            switch (((this.manager.isOverfill = !(o - i <= s + 1)), this.manager.align)) {
                                case wt.Min:
                                    e = 0.5 * r;
                                    break;
                                case wt.Center:
                                    e = a % 2 == 0 ? 0.5 * s - 0.5 * r : 0.5 * s;
                                    break;
                                case wt.Max:
                                    e = s - 0.5 * r;
                            }
                            var c = this.manager.isOverfill ? n.size() : parseInt(n.size() / 2) + (n.size() % 2);
                            switch (this.manager.orientation) {
                                case Orientation_Orientation.Vertical:
                                    t = n.get(0).getY() - e;
                                    for (var l = 0; l < c; l++) {
                                        var u = n.get(l);
                                        t = Math.abs(u.getY() - e) < Math.abs(t) ? u.getY() - e : t;
                                    }
                                    break;
                                case Orientation_Orientation.Horizontal:
                                    t = n.get(0).getX() - e;
                                    for (var h = 0; h < c; h++) {
                                        var p = n.get(h);
                                        t = Math.abs(p.getX() - e) < Math.abs(t) ? p.getX() - e : t;
                                    }
                            }
                            return t;
                        }
                    ),
                (ManagerComponent.OnObjectTouchListener = OnObjectTouchListener),
                (ManagerComponent.OnObjectVisibilityListener = OnObjectVisibilityListener),
                (ManagerComponent.OnScrollListener = OnScrollListener),
                _class(SceneView)
                    ._extends(View_View)
                    ._instance(
                        function (t) {
                            t.scene = null;
                        },
                        SceneView.name,
                        function (t) {
                            View_View._init(this, t), SceneView.Initialize(this), (this.scene = new Scene(t));
                        },
                        "onMeasure",
                        function (t, e) {
                            View_View.onMeasure(this, t, e);
                        },
                        "onResumeView",
                        function () {},
                        "onPauseView",
                        function () {},
                        "getActivityCreate",
                        function () {
                            return this.scene.getActivityCreate();
                        },
                        "setActivityCreate",
                        function (t) {
                            this.scene.setActivityCreate(t);
                        },
                        "getActivityShow",
                        function () {
                            return this.scene.getActivityShow();
                        },
                        "setActivityShow",
                        function (t) {
                            this.scene.setActivityShow(t);
                        },
                        "setLoadProgressListener",
                        function (t) {
                            this.scene.setLoadProgressListener(t);
                        },
                        "getLoadProgressListener",
                        function () {
                            return this.scene.getLoadProgressListener();
                        },
                        "loadResource",
                        function (t) {
                            this.scene.loadResource(t);
                        },
                        [SceneComponent],
                        "attachCommun",
                        function (t) {
                            this.scene.attachCommun(t);
                        },
                        [SceneComponent, Number],
                        "attachCommun",
                        function (t, e) {
                            this.scene.attachCommun(t, e);
                        },
                        "deattachCommun",
                        function (t) {
                            scene.deattachCommun(t);
                        },
                        "clearCommun",
                        function () {
                            scene.clearCommun();
                        },
                        "invalidatePath",
                        function (t) {
                            return !1;
                        },
                        "onDraw",
                        function (t) {
                            View_View.onDraw(this, t), this.scene.onDraw(t), this.invalidate();
                        },
                        "onTouchEvent",
                        function (t) {
                            return View_View.onTouchEvent(this, t), this.scene.onTouchEvent(t);
                        },
                        "onUpdate",
                        function (t) {
                            this.scene.onUpdate(t);
                        },
                        "onRecycle",
                        function (t) {
                            this.scene.onRecycle(t);
                        },
                        "getPreview",
                        function (t, e, n) {
                            return this.scene.getPreview(t, e, n);
                        }
                    ),
                _class(SceneDialogResult)
                    ._extends(SceneView)
                    ._body(
                        function (t) {
                            t.labelCaption = null;
                        },
                        "getLabelCaption",
                        function () {
                            return this.labelCaption;
                        },
                        function (t) {
                            t.labelScope = null;
                        },
                        "getLabelScope",
                        function () {
                            return this.labelScope;
                        },
                        function (t) {
                            t.managerButton = null;
                        },
                        "getManagerButton",
                        function () {
                            return this.managerButton;
                        },
                        function (t) {
                            t.buttonClose = null;
                        },
                        "getButtonClose",
                        function () {
                            return this.buttonClose;
                        },
                        [Context],
                        SceneDialogResult.name,
                        function (t) {
                            SceneView._init(this, t), SceneDialogResult.Initialize(this);
                        },
                        [Activity],
                        SceneDialogResult.name,
                        function (t) {
                            SceneView._init(this, t), SceneDialogResult.Initialize(this);
                            var e = new GlowButton(4278217844, 30 * N.SP, 10 * N.SP);
                            e.setParam(0.5 * N.WT, 0.5 * N.HT, 0.95 * N.WW, 0.3 * N.HW),
                                (this.labelCaption = new Label("", Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, S.Align.CENTER)),
                                this.labelCaption.setParam(0.5 * N.WT, 0.5 * N.HT - 150 * N.SD, 150 * N.SD, 80 * N.SD),
                                (this.labelScope = new Label("", Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, S.Align.CENTER)),
                                this.labelScope.setParam(0.5 * N.WT, 0.5 * N.HT + 150 * N.SD, 150 * N.SD, 80 * N.SD);
                            var n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_close));
                            (this.buttonClose = new BmpButton(n, null)),
                                this.buttonClose.setParam(0.5 * N.WT + 350 * N.SD, 0.5 * N.HT - 150 * N.SD, n.getWidth(), n.getHeight()),
                                (this.managerButton = new ManagerComponent(t, Orientation_Orientation.Horizontal)),
                                this.managerButton.setParam(0.5 * N.WT, 0.5 * N.HT, 0.8 * N.WW, 180 * N.SD),
                                this.managerButton.setCountObject(4, 1),
                                this.managerButton.setAlign(ManagerComponent.Align.Center),
                                this.attachCommun(e),
                                this.attachCommun(this.labelCaption),
                                this.attachCommun(this.labelScope),
                                this.attachCommun(this.buttonClose),
                                this.attachCommun(this.managerButton);
                        }
                    ),
                _class(ScreenDialogResult)
                    ._extends(ScreenDialog)
                    ._body(
                        _static,
                        function (t) {
                            t.EXTRA_SCOPE_USER = "extra_scope_user";
                        },
                        _static,
                        function (t) {
                            t.EXTRA_SCOPE_BOT = "extra_scope_bot";
                        },
                        function (t) {
                            t.advt = null;
                        },
                        function (t) {
                            t.view = null;
                        },
                        "getView",
                        function () {
                            return this.view;
                        },
                        "onCreate",
                        function (t) {
                            var e = this;
                            ScreenDialog.onCreate(this, t),
                                (this.advt = Advt.getAdvt(this.thisA, this.getIntent())),
                                new G(ft.getMainLooper()).postDelayed(
                                    Runnable._lambda(function () {
                                        (new AdvtConfig().id = App.getIdInterstitial()), e.advt.showInterstitial();
                                    }, 3e3)
                                );
                            var n,
                                i = 4282268879,
                                o = 30 * N.SP,
                                s = (N.WW, 200 * N.SP);
                            this.view = new SceneDialogResult(this.thisA);
                            var r = this.getIntent().getIntExtra(ScreenDialogResult.EXTRA_SCOPE_USER, 0),
                                a = this.getIntent().getIntExtra(ScreenDialogResult.EXTRA_SCOPE_BOT, 0);
                            r > a
                                ? (this.view.getLabelCaption().setText(this.getString(bt.string.you_won)),
                                  this.view.getLabelCaption().setConturParam(!0, 4278664345, 20 * N.SP, 20 * N.SP),
                                  this.view.getLabelScope().setConturParam(!0, 4278664345, 20 * N.SP, 20 * N.SP),
                                  MediaAudio.get().playSound(App.soundWon))
                                : (this.view.getLabelCaption().setText(this.getString(bt.string.you_lose)),
                                  this.view.getLabelCaption().setConturParam(!0, 4292945189, 20 * N.SP, 20 * N.SP),
                                  this.view.getLabelScope().setConturParam(!0, 4292945189, 20 * N.SP, 20 * N.SP),
                                  MediaAudio.get().playSound(App.soundLose));
                            var c = String.format(M.getDefault(), "%d:%d", r, a);
                            this.view.getLabelScope().setText(c), (n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_restart)));
                            var l = new GlowButton(i, o, 10 * ScenaParametr_ScenaParametr.P.SP);
                            l.setBitmapIconOrigin(n),
                                l.setSize(s, s),
                                l.setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        return MediaAudio.get().playSound(App.soundClick), e.setResult(vt), e.finish(), !0;
                                    })
                                ),
                                this.getView().getManagerButton().addComponent(l),
                                (n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_logout)));
                            var u = new GlowButton(i, o, 10 * ScenaParametr_ScenaParametr.P.SP);
                            u.setBitmapIconOrigin(n),
                                u.setSize(s, s),
                                u.setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        return MediaAudio.get().playSound(App.soundClick), e.setResult(_t), e.finish(), !0;
                                    })
                                ),
                                this.getView().getManagerButton().addComponent(u),
                                this.getView().getManagerButton().centered(),
                                this.setContentView(this.view);
                        },
                        "onResume",
                        function () {
                            this.advt.onResume(), ScreenDialog.onResume(this);
                        },
                        "onPause",
                        function () {
                            this.advt.onPause(), ScreenDialog.onPause(this);
                        },
                        "onDestroy",
                        function () {
                            this.advt.onDestroy(), ScreenDialog.onDestroy(this);
                        }
                    );
            var Ct = ScreenDialogResult.EXTRA_SCOPE_USER,
                Pt = ScreenDialogResult.EXTRA_SCOPE_BOT;
            function ComponentCombi_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function ComponentCombi_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ComponentCombi_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ComponentCombi_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function ComponentCombi_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function ComponentCombi() {
                ComponentCombi._init.apply(ComponentCombi, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ManagerObjectElement() {
                ManagerObjectElement._init.apply(ManagerObjectElement, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ComponentCombi)
                ._extends(SceneComponent)
                ._instance(
                    function (t) {
                        t.components = new ArrayList();
                    },
                    "getComponents",
                    function () {
                        return this.components;
                    },
                    "setComponents",
                    function (t) {
                        this.components = t;
                    },
                    "clearComponents",
                    function () {
                        for (var t, e = ComponentCombi_createForOfIteratorHelperLoose(this.components); !(t = e()).done; ) {
                            t.value.onRecycle(!0);
                        }
                        this.components.clear();
                    },
                    "addComponent",
                    function (t) {
                        this.components.add(t);
                    },
                    ComponentCombi.name,
                    function () {
                        SceneComponent._init(this), ComponentCombi.Initialize(this);
                    },
                    [Number, Number],
                    ComponentCombi.name,
                    function (t, e) {
                        SceneComponent._init(this), ComponentCombi.Initialize(this), this.setSize(t, e);
                        for (var n = 0; n < (arguments.length <= 2 ? 0 : arguments.length - 2); n++) this.addComponent(n + 2 < 2 || arguments.length <= n + 2 ? void 0 : arguments[n + 2]);
                    },
                    "invalidatePath",
                    function (t) {
                        var e = !1;
                        if (SceneComponent.invalidatePath(this, t)) e = !0;
                        else {
                            var n = new Path(),
                                i = new Matrix_Matrix();
                            i.setTranslate(this.x, this.y), i.setRotate(this.rotate), i.setScale(this.scale, this.scale);
                            for (var o = 0; o < this.components.size(); o++) {
                                this.components.get(o).invalidatePath(n) && (t.addPath(n, i), n.reset(), (e = !0));
                            }
                        }
                        return e;
                    },
                    [UpdateMode],
                    "invalidate",
                    function (t) {
                        SceneComponent.invalidate(this, t);
                        for (var e = 0; e < this.components.size(); e++) {
                            this.components.get(e).invalidateCancel();
                        }
                    },
                    "onDraw",
                    function (t) {
                        t.save(), t.translate(this.x, this.y), t.scale(this.scale, this.scale), t.clipRect(-this.offsetH, -this.offsetV, this.offsetH, this.offsetV);
                        for (var e, n = ComponentCombi_createForOfIteratorHelperLoose(this.components); !(e = n()).done; ) {
                            e.value.onDraw(t);
                        }
                        t.restore();
                    },
                    "onTouchEvent",
                    function (t) {
                        var e = !1,
                            n = MotionEvent_MotionEvent.obtain(t);
                        if ((n.offsetLocation(-this.x, -this.y), this.isCapture(n)))
                            for (var i = this.components.size() - 1; i >= 0; i--) {
                                if ((e = this.components.get(i).onTouchEvent(n))) break;
                            }
                        return n.recycle(), e;
                    },
                    "onUpdate",
                    function (t) {},
                    "onRecycle",
                    function (t) {
                        for (var e, n = ComponentCombi_createForOfIteratorHelperLoose(this.components); !(e = n()).done; ) {
                            e.value.onRecycle(t);
                        }
                    }
                );
            var Tt = {};
            function ManagerObject_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function ManagerObject_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ManagerObject_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ManagerObject_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function ManagerObject_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function OnObjectActionListener() {}
            function ManagerObject() {
                ManagerObject._init.apply(ManagerObject, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneDialogBase() {
                SceneDialogBase._init.apply(SceneDialogBase, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ManagerObjectElement._t(Tt))
                ._extends(ComponentCombi)
                ._instance(
                    function (t) {
                        (t.index = 0), (t.object = null);
                    },
                    "getIndex",
                    function () {
                        return this.index;
                    },
                    "getObject",
                    function () {
                        return this.object;
                    },
                    [Tt],
                    "setObject",
                    function (t) {
                        this.object = t;
                    },
                    ManagerObjectElement.name,
                    function () {
                        ManagerObjectElement._init(this, 0, null);
                    },
                    [Number, Tt],
                    ManagerObjectElement.name,
                    function (t, e) {
                        ComponentCombi._init(this), ManagerObjectElement.Initialize(this), (this.index = t), (this.object = e);
                    }
                ),
                _interface(OnObjectActionListener)._instance(
                    "onLoadListRequire",
                    function () {},
                    "onAddRequire",
                    function (t) {},
                    "onDownloadRequire",
                    function (t) {},
                    "onRenameRequire",
                    function (t, e) {},
                    "onDeleteRequire",
                    function (t) {}
                ),
                _class(ManagerObject)
                    ._extends(ManagerComponent)
                    ._instance(
                        function (t) {
                            (t.lock = new Object()), (t.onObjectActionListener = null);
                        },
                        "setOnObjectActionListener",
                        function (t) {
                            try {
                                this.onObjectActionListener = t;
                            } catch (t) {
                                t.printStackTrace();
                            }
                        },
                        ManagerObject.name,
                        function (t, e) {
                            ManagerComponent._init(this, t, e), ManagerObject.Initialize(this);
                        },
                        "addObjects",
                        function (t) {
                            if (null != t) {
                                for (var e, n = this.getElements().size(), i = ManagerObject_createForOfIteratorHelperLoose(t); !(e = i()).done; ) {
                                    var o = new ManagerObjectElement(n, e.value);
                                    if ((o.setSizeOnly(this.widthElement, this.heightElement), this.addComponent(o), n++, null != this.onObjectActionListener && this.onObjectActionListener.onAddRequire(o), Thread_Thread.interrupted()))
                                        return;
                                }
                                this.setLimits(this.getElements(), !0);
                            }
                        },
                        "delObjects",
                        function (t, e) {
                            for (var n = e; n >= t; n--) {
                                var i = this.delComponent(n);
                                null != this.onObjectActionListener && this.onObjectActionListener.onDeleteRequire(i);
                            }
                        },
                        "setObjects",
                        function (t) {
                            this.clearObjects(), this.addObjects(t);
                        },
                        "clearObjects",
                        function () {
                            this.clearComponents(!0), null != this.onObjectActionListener && this.onObjectActionListener.onLoadListRequire();
                        },
                        "FileDel",
                        function () {
                            this.clearComponents(!0), null != this.onObjectActionListener && this.setObjects(this.onObjectActionListener.onLoadListRequire());
                        }
                    ),
                (ManagerObject.OnObjectActionListener = OnObjectActionListener),
                _class(SceneDialogBase)
                    ._extends(SceneView)
                    ._body(
                        function (t) {
                            t.labelCaption = null;
                        },
                        "getLabelCaption",
                        function () {
                            return this.labelCaption;
                        },
                        function (t) {
                            t.managerButton = null;
                        },
                        "getManagerButton",
                        function () {
                            return this.managerButton;
                        },
                        function (t) {
                            t.managerBack = null;
                        },
                        "getManagerBack",
                        function () {
                            return this.managerBack;
                        },
                        function (t) {
                            t.buttonClose = null;
                        },
                        "getButtonClose",
                        function () {
                            return this.buttonClose;
                        },
                        [Context],
                        SceneDialogBase.name,
                        function (t) {
                            SceneView._init(this, t), SceneDialogBase.Initialize(this);
                        },
                        [Activity],
                        SceneDialogBase.name,
                        function (t) {
                            SceneView._init(this, t), SceneDialogBase.Initialize(this);
                            var e = 30 * N.SP,
                                n = (N.WW, N.SP, new GlowButton(4278217844, e, 10 * N.SP));
                            n.setParam(0.5 * N.WT, 0.5 * N.HT, 0.95 * N.WW, 0.3 * N.HW),
                                (this.labelCaption = new Label("", Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, S.Align.LEFT)),
                                this.labelCaption.setParam(0.5 * N.WT - 290 * N.SD, 0.5 * N.HT - 150 * N.SD, 150 * N.SD, 50 * N.SD);
                            var i = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_close));
                            (this.buttonClose = new BmpButton(i, null)),
                                this.buttonClose.setParam(0.5 * N.WT + 320 * N.SD, 0.5 * N.HT - 150 * N.SD, i.getWidth(), i.getHeight()),
                                (this.managerButton = new ManagerComponent(t, Orientation_Orientation.Horizontal)),
                                this.managerButton.setParam(0.5 * N.WT, 0.5 * N.HT, 0.8 * N.WW, 180 * N.SD),
                                this.managerButton.setCountObject(4, 1),
                                this.managerButton.setAlign(ManagerComponent.Align.Center),
                                (this.managerBack = new ManagerObject(t, Orientation_Orientation.Horizontal)),
                                this.managerBack.setParam(0.5 * N.WT, 0.5 * N.HT + 200 * N.SD, 940 * N.SD, 180 * N.SD),
                                this.managerBack.setCountObject(3, 1),
                                this.attachCommun(n),
                                this.attachCommun(this.labelCaption),
                                this.attachCommun(this.buttonClose),
                                this.attachCommun(this.managerButton);
                        }
                    );
            var Lt = void 0;
            function ScreenDialogSettingsMenu() {
                ScreenDialogSettingsMenu._init.apply(ScreenDialogSettingsMenu, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenDialogSettingsGame() {
                ScreenDialogSettingsGame._init.apply(ScreenDialogSettingsGame, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ScreenDialogSettingsMenu)
                ._extends(ScreenDialog)
                ._body(
                    function (t) {
                        t.advt = null;
                    },
                    function (t) {
                        t.view = null;
                    },
                    "getView",
                    function () {
                        return this.view;
                    },
                    function (t) {
                        t.buttonMelody = null;
                    },
                    "getButtonMelody",
                    function () {
                        return this.buttonMelody;
                    },
                    function (t) {
                        t.buttonSound = null;
                    },
                    "getButtonSound",
                    function () {
                        return this.buttonSound;
                    },
                    function (t) {
                        t.onStateChangeListener = new MediaAudio.OnStateChangeListener()._body(
                            { ctx: Lt, on: _1 },
                            "onStateChange",
                            function (t, e) {},
                            { ctx: Lt, on: _1 },
                            "onStateChangeMelody",
                            function (t, e) {
                                t.buttonMelody.setSwitched(!e);
                            },
                            { ctx: Lt, on: _1 },
                            "onStateChangeSound",
                            function (t, e) {
                                t.buttonSound.setSwitched(!e);
                            }
                        );
                    },
                    "onCreate",
                    function (t) {
                        var e = this;
                        ScreenDialog.onCreate(this, t), (this.view = new SceneDialogBase(this.thisA)), (this.advt = Advt.getAdvt(this.thisA, this.getIntent()));
                        var n = 4282268879,
                            i = 30 * N.SP,
                            o = (N.WW, 200 * N.SP);
                        MediaAudio.get().getEventState().add(this.onStateChangeListener),
                            this.view.getButtonClose().setBmpButtonClickListener(
                                BmpButtonClickListener._lambda(function (t, n, i) {
                                    return MediaAudio.get().playSound(App.soundClick), e.finish(), !0;
                                })
                            ),
                            this.view.getLabelCaption().setText(this.getString(bt.string.settings).toUpperCase());
                        var s = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_musicon)),
                            r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_musicoff));
                        (this.buttonMelody = new GlowButton(n, i, 10 * ScenaParametr_ScenaParametr.P.SP, !MediaAudio.get().getStateMelody(this.thisA))),
                            this.buttonMelody.setBitmapIconOrigin(s),
                            this.buttonMelody.setBitmapIconSwitch(r),
                            this.buttonMelody.setSize(o, o),
                            this.buttonMelody.setBmpButtonClickListener(
                                BmpButtonClickListener._lambda(function (t, n, i) {
                                    return MediaAudio.get().playSound(App.soundClick), MediaAudio.get().setStateMelody(e.thisA, !i), !0;
                                })
                            ),
                            this.view.getManagerButton().addComponent(this.buttonMelody),
                            (s = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_soundon))),
                            (r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_soundoff))),
                            (this.buttonSound = new GlowButton(n, i, 10 * ScenaParametr_ScenaParametr.P.SP, !MediaAudio.get().getStateSound(this.thisA))),
                            this.buttonSound.setBitmapIconOrigin(s),
                            this.buttonSound.setBitmapIconSwitch(r),
                            this.buttonSound.setSize(o, o),
                            this.buttonSound.setBmpButtonClickListener(
                                BmpButtonClickListener._lambda(function (t, n, i) {
                                    return MediaAudio.get().playSound(App.soundClick), MediaAudio.get().setStateSound(e.thisA, !i), !0;
                                })
                            ),
                            this.view.getManagerButton().addComponent(this.buttonSound),
                            this.view.getManagerButton().centered(),
                            this.view.getManagerBack().setOnObjectActionListener(
                                new ManagerObject.OnObjectActionListener()._body(
                                    { ctx: this },
                                    "onLoadListRequire",
                                    function (t) {
                                        return null;
                                    },
                                    { ctx: this, element: _1 },
                                    "onAddRequire",
                                    function (t, e) {
                                        var n = ScenaParametr_ScenaParametr.decodeResource(t.thisA, e.getObject()),
                                            i = new BmpButton((n = ScenaParametr_ScenaParametr.createBitmap(n, e.getWidth(), e.getHeight(), ScenaParametr_ScenaParametr.ModifyType.StretchFitCenter)), null);
                                        i.setParam(0, 0, e.getWidth(), e.getHeight()), e.addComponent(i);
                                    },
                                    { ctx: this, element: _1 },
                                    "onDownloadRequire",
                                    function (t, e) {},
                                    { ctx: this, element: _1, nameNew: _2 },
                                    "onRenameRequire",
                                    function (t, e, n) {
                                        return !1;
                                    },
                                    { ctx: this, element: _1 },
                                    "onDeleteRequire",
                                    function (t, e) {
                                        return !1;
                                    }
                                )
                            ),
                            this.setContentView(this.view);
                    },
                    "onResume",
                    function () {
                        ScreenDialog.onResume(this);
                        var t = new AdvtConfig();
                        (t.id = App.getIdBannerDialogTop()),
                            (t.sizeBanner = App.getSizeBannerDialogTop()),
                            (t.gravityBanner = W.CENTER_HORIZONTAL | W.TOP),
                            this.advt.showBanner(t),
                            (t.id = App.getIdBannerLeft()),
                            (t.sizeBanner = App.getSizeBannerLeft()),
                            (t.gravityBanner = W.LEFT | W.CENTER_VERTICAL),
                            this.advt.showBanner(t),
                            (t.id = App.getIdBannerRight()),
                            (t.sizeBanner = App.getSizeBannerRight()),
                            (t.gravityBanner = W.RIGHT | W.CENTER_VERTICAL),
                            this.advt.showBanner(t),
                            this.advt.onResume();
                    },
                    "onPause",
                    function () {
                        this.advt.onPause(), ScreenDialog.onPause(this);
                    },
                    "onDestroy",
                    function () {
                        this.advt.onDestroy(), MediaAudio.get().getEventState().rem(this.onStateChangeListener), ScreenDialog.onDestroy(this);
                    }
                ),
                _class(ScreenDialogSettingsGame)
                    ._extends(ScreenDialogSettingsMenu)
                    ._body("onCreate", function (t) {
                        var e = this;
                        ScreenDialogSettingsMenu.onCreate(this, t);
                        var n,
                            i = 4282268879,
                            o = 30 * N.SP,
                            s = (N.WW, 200 * N.SP);
                        n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_restart));
                        var r = new GlowButton(i, o, 10 * ScenaParametr_ScenaParametr.P.SP);
                        r.setBitmapIconOrigin(n),
                            r.setSize(s, s),
                            r.setBmpButtonClickListener(
                                BmpButtonClickListener._lambda(function (t, n, i) {
                                    return MediaAudio.get().playSound(App.soundClick), e.setResult(vt), e.finish(), !0;
                                })
                            ),
                            this.getView().getManagerButton().addComponent(r),
                            (n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(this.thisA, bt.drawable.button_logout)));
                        var a = new GlowButton(i, o, 10 * ScenaParametr_ScenaParametr.P.SP);
                        a.setBitmapIconOrigin(n),
                            a.setSize(s, s),
                            a.setBmpButtonClickListener(
                                BmpButtonClickListener._lambda(function (t, n, i) {
                                    return MediaAudio.get().playSound(App.soundClick), e.setResult(_t), e.finish(), !0;
                                })
                            ),
                            this.getView().getManagerButton().addComponent(a),
                            this.getView().getManagerButton().centered();
                    });
            var Dt = (function (t) {
                function DecelerateInterpolator(e) {
                    var n;
                    return ((n = t.call(this) || this).mFactor = 1), e && (n.mFactor = e), n;
                }
                return (
                    inheritsLoose_inheritsLoose(DecelerateInterpolator, t),
                    (DecelerateInterpolator.prototype.getInterpolation = function getInterpolation(t) {
                        return 1 == this.mFactor ? 1 - (1 - t) * (1 - t) : 1 - Math.pow(1 - t, 2 * this.mFactor);
                    }),
                    DecelerateInterpolator
                );
            })(pt);
            function ScreenAdvt() {
                ScreenAdvt._init.apply(ScreenAdvt, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DGoal() {
                _2DGoal._init.apply(_2DGoal, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ListenerGoal() {}
            function _2DPoligon_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function _2DPoligon_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _2DPoligon_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _2DPoligon_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _2DPoligon_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function _2DPoligon() {
                _2DPoligon._init.apply(_2DPoligon, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function MaskType() {}
            function BackImage() {
                BackImage._init.apply(BackImage, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Serializable() {}
            function GameLevel() {
                GameLevel._init.apply(GameLevel, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function GameScore() {
                GameScore._init.apply(GameScore, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneGame() {
                SceneGame._init.apply(SceneGame, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Bot() {
                Bot._init.apply(Bot, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DReflect() {
                _2DReflect._init.apply(_2DReflect, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DReflectX() {
                _2DReflectX._init.apply(_2DReflectX, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DReflectXPerspective() {
                _2DReflectXPerspective._init.apply(_2DReflectXPerspective, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DViscous() {
                _2DViscous._init.apply(_2DViscous, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DShift() {
                _2DShift._init.apply(_2DShift, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DCollision_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function _2DCollision_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _2DCollision_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _2DCollision_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _2DCollision_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function _2DCollision() {
                _2DCollision._init.apply(_2DCollision, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function OnGestListener() {
                OnGestListener._init.apply(OnGestListener, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ParticlesAdd() {
                ParticlesAdd._init.apply(ParticlesAdd, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function _2DKickSpring() {
                _2DKickSpring._init.apply(_2DKickSpring, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ScreenAdvt)
                ._extends(ScreenActivity)
                ._instance(
                    function () {
                        this.advt = null;
                    },
                    "getAdvt",
                    function () {
                        return this.advt;
                    },
                    "onCreate",
                    function (t) {
                        ScreenActivity.onCreate(this, t), (this.advt = Advt.getAdvt(this.thisA, this.getIntent()));
                    },
                    "onResume",
                    function () {
                        ScreenActivity.onResume(this), this.advt.onResume();
                    },
                    "onPause",
                    function () {
                        this.advt.onPause(), ScreenActivity.onPause(this);
                    },
                    "onDestroy",
                    function () {
                        this.advt.onDestroy(), ScreenActivity.onDestroy(this);
                    }
                ),
                _class(_2DGoal)._body(
                    _static,
                    function (t) {
                        t.anEvent = !1;
                    },
                    _static,
                    function (t) {
                        t.D = null;
                    },
                    _static,
                    function (t) {
                        t.DistanceTouch = 0;
                    },
                    _static,
                    function (t) {
                        t.Listener = null;
                    },
                    _static,
                    "Comput",
                    function (t, e, n) {
                        return null == _2DGoal.Listener || _2DGoal.anEvent || ((_2DGoal.anEvent = !0), _2DGoal.Listener.onGoal(n.Bound)), !0;
                    },
                    _static,
                    "Reset",
                    function () {
                        _2DGoal.anEvent = !1;
                    },
                    _static,
                    "setListenerGoal",
                    function (t) {
                        _2DGoal.Listener = t;
                    }
                ),
                _interface(ListenerGoal)._body("onGoal", function (t) {}),
                (_2DGoal.ListenerGoal = ListenerGoal),
                _class(_2DPoligon)._instance(
                    function (t) {
                        t.Type, t.bounds;
                    },
                    _2DPoligon.name,
                    function () {
                        this.bounds = new ArrayList();
                    },
                    "Recycle",
                    function () {
                        this.bounds.clear();
                    },
                    "onDraw",
                    function (t) {
                        for (var e, n = _2DPoligon_createForOfIteratorHelperLoose(this.bounds); !(e = n()).done; ) {
                            e.value.onDraw(t);
                        }
                    },
                    "offset",
                    function (t) {
                        for (var e, n = new _2DPoligon(), i = _2DPoligon_createForOfIteratorHelperLoose(this.bounds); !(e = i()).done; ) {
                            var o = e.value;
                            n.addPoint(new _2DPoint_2DPoint(o.segment.Begin.X + t.X, o.segment.Begin.Y + t.Y), o.type);
                        }
                        return n;
                    },
                    "addPoint",
                    function (t, e) {
                        var n = null,
                            i = this.bounds.size();
                        return 0 == i ? (n = new _2DSegment(t)) : (this.bounds.get(i - 1).segment.setPointEnding(t), (n = new _2DSegment(t, this.bounds.get(0).segment.Begin))), this.bounds.add(new _2DBound(n, e)), n;
                    },
                    "isInside",
                    function (t) {
                        for (var e, n = !1, i = new _2DPoint_2DPoint(0, 0), o = _2DPoligon_createForOfIteratorHelperLoose(this.bounds); !(e = o()).done; ) {
                            var s = e.value,
                                r = s.segment.getDistance(t);
                            if (((n = !1), s.segment.Vector.isOrtogonal(r.Vector) && r.Vector.getMultipScalar(s.segment.Right) > 0)) {
                                for (var a, c = _2DPoligon_createForOfIteratorHelperLoose(this.bounds); !(a = c()).done; ) {
                                    var l = a.value;
                                    if (bounds.indexOf(l) != bounds.indexOf(s) && r.isIntersect(l.segment, i)) {
                                        n = !0;
                                        break;
                                    }
                                }
                                if (!n) return !0;
                            }
                        }
                        return !1;
                    },
                    [_2DPoint_2DPoint, List],
                    "getInside",
                    function (t, e) {
                        var n = t,
                            i = null,
                            o = null,
                            s = -1,
                            r = -1;
                        e.clear();
                        for (var a, c = null, l = _2DPoligon_createForOfIteratorHelperLoose(this.bounds); !(a = l()).done; ) {
                            var u = a.value;
                            (c = u.segment.getDistance(t)), (null == i || i.Modul > c.Modul) && ((i = c), (o = u.segment), (s = this.bounds.indexOf(u)));
                        }
                        if (i.Begin == o.Begin) {
                            r = s > 0 ? s - 1 : this.bounds.size() - 1;
                            var h = this.bounds.get(r).segment.Right;
                            (i.Vector.getMultipScalar(o.Left) >= 0 || i.Vector.getMultipScalar(bounds.get(r).segment.Left) >= 0) && ((n = i.Begin.getSum(o.Right.getSum(h).getNormal())), e.add(this.bounds.get(s)), e.add(this.bounds.get(r)));
                        } else if (i.Begin == o.End) {
                            r = s < this.bounds.size() - 1 ? s + 1 : 0;
                            var p = this.bounds.get(r).segment.Right;
                            (i.Vector.getMultipScalar(o.Left) >= 0 || i.Vector.getMultipScalar(bounds.get(r).segment.Left) >= 0) && ((n = i.Begin.getSum(o.Right.getSum(p).getNormal())), e.add(this.bounds.get(s)), e.add(this.bounds.get(r)));
                        } else i.Vector.getMultipScalar(o.Left) >= 0 && ((n = i.Begin.getSum(o.Right.getNormal())), e.add(this.bounds.get(s)));
                        return n;
                    },
                    [_2DObject, _2DPoint_2DPoint, List],
                    "getInside",
                    function (t, e, n) {
                        var i = (t.getWidth() / 2) * t.getScale() * t.getScaleP(),
                            o = e,
                            s = null,
                            r = null;
                        n.clear();
                        for (var a, c = null, l = _2DPoligon_createForOfIteratorHelperLoose(this.bounds); !(a = l()).done; ) {
                            var u = a.value;
                            (c = u.segment.getDistance(o)), (null == s || s.Modul > c.Modul) && ((s = c), (r = u));
                        }
                        return (
                            null != s &&
                                (s.Vector.getMultipScalar(r.segment.Right) >= 0
                                    ? s.Modul < i && (n.add(r), (o = s.Begin.getSum(r.segment.Right.getMultipByScalar(i))))
                                    : (n.add(r), (o = s.Begin.getSum(r.segment.Right.getMultipByScalar(i))))),
                            o
                        );
                    }
                ),
                _enum(MaskType)._body({ none: 0, elipse: 1 }),
                _class(BackImage)
                    ._extends(Back)
                    ._body(
                        "_static",
                        function () {
                            this.MaskType = MaskType;
                        },
                        function (t) {
                            (t.recycle = !0), (t.bitmap = null);
                        },
                        "getBitmap",
                        function () {
                            return this.bitmap;
                        },
                        [Bitmap],
                        "setBitmap",
                        function (t) {
                            null != t && (this.bitmap = t);
                        },
                        [Bitmap, Boolean],
                        "setBitmap",
                        function (t, e) {
                            (this.recycle = e), this.setBitmap(t);
                        },
                        [Bitmap, ModifyType],
                        "setBitmap",
                        function (t, e) {
                            this.setBitmap(t, e, !0);
                        },
                        [Bitmap, ModifyType, Boolean],
                        "setBitmap",
                        function (t, e, n) {
                            this.scaledBitmap(t, this.width, this.height, e, n);
                        },
                        [Path],
                        "setMask",
                        function (t) {
                            Back.setMask(this, t);
                        },
                        [MaskType],
                        "setMask",
                        function (t) {
                            switch (t) {
                                case MaskType.none:
                                    this.paint.setShader(null), (this.pathMask = null);
                                    break;
                                case MaskType.elipse:
                                    if (null == this.bitmap || this.bitmap.isRecycled()) break;
                                    this.paint.setShader(new P(this.bitmap, C.TileMode.CLAMP, C.TileMode.CLAMP));
                                    var e = new Path();
                                    e.addOval(new RectF(0, 0, this.bitmap.getWidth(), this.bitmap.getHeight()), Path.Direction.CW), Back.setMask(this, e);
                            }
                        },
                        "_init",
                        function () {
                            this.paintMuar = null;
                        },
                        "setMuar",
                        function (t, e) {
                            t > 0 ? ((paintMuar = new Paint()), paintMuar.setStyle(Paint.Style.FILL_AND_STROKE), paintMuar.setStrokeWidth(paint.getStrokeWidth()), paintMuar.setColor(e), paintMuar.setAlpha(t)) : (paintMuar = null);
                        },
                        [p, Number, Number],
                        "setShadow",
                        function (t, e, n) {
                            SceneComponent.setShadow(this, this.paint, t, e, n);
                        },
                        BackImage.name,
                        function () {
                            Back._init(this), BackImage.Initialize(this), this.paint.setFilterBitmap(!0);
                        },
                        [Bitmap],
                        BackImage.name,
                        function (t) {
                            BackImage._init(this), this.setBitmap(t);
                        },
                        "onDraw",
                        function (t) {
                            this.visible &&
                                (t.save(),
                                t.translate(this.x, this.y),
                                t.scale(this.scale, this.scale),
                                t.rotate(this.rotate),
                                null != this.pathMask ? t.clipPath(this.pathMask) : t.clipRect(-this.offsetH, -this.offsetV, this.offsetH, this.offsetV),
                                null == this.bitmap ||
                                    this.bitmap.isRecycled() ||
                                    (this.isDrawShadow() && t.drawBitmap(this.bitmap, -this.offsetH + this.getDxShadow(), -this.offsetV + this.getDyShadow(), this.getPaintShadow()),
                                    t.drawBitmap(this.bitmap, -this.offsetH, -this.offsetV, this.paint)),
                                0 != this.paintBorder.getStrokeWidth() && (null == this.pathMask ? t.drawRect(-this.offsetH, -this.offsetV, this.offsetH, this.offsetV, this.paintBorder) : t.drawPath(this.pathMask, this.paintBorder)),
                                null != this.paintMuar && t.drawRect(-this.offsetH, -this.offsetV, this.offsetH, this.offsetV, this.paintMuar),
                                t.restore());
                        },
                        "onTouchEvent",
                        function (t) {
                            return !!this.enable && !(null == this.onClickListener || t.getAction() != MotionEvent.ACTION_UP || !isCaptureRelative(t)) && (this.onClickListener.onClick(t), !0);
                        },
                        "onRecycle",
                        function (t) {
                            null != this.bitmap && this.recycle && this.bitmap.recycle(), (this.bitmap = null), null != this.pathMask && (this.pathMask.reset(), (this.pathMask = null)), Back.onRecycle(this, t);
                        },
                        "scaledBitmap",
                        function () {
                            this.setBitmap(Bitmap.createScaledBitmap(this.bitmap, parseInt(this.widthScale), parseInt(this.heightScale), !0)), this.setSize(parseInt(this.widthScale), parseInt(this.heightScale)), this.setScale(1);
                        },
                        [ModifyType],
                        "scaledBitmap",
                        function (t) {
                            this.scaledBitmap(this.width, this.height, t);
                        },
                        [Number, Number, ModifyType],
                        "scaledBitmap",
                        function (t, e, n) {
                            var i = this.getBitmap(),
                                o = ScenaParametr_ScenaParametr.createBitmap(i, t, e, n, !1);
                            this.setBitmap(o), this.setSize(t, e);
                        },
                        [Bitmap, Number, Number, ModifyType, Boolean],
                        "scaledBitmap",
                        function (t, e, n, i, o) {
                            var s = ScenaParametr_ScenaParametr.createBitmap(t, e, n, i, !1);
                            this.setBitmap(s, !1), this.setSizeOnly(e, n), o && t != s && Bmp.recycle(t);
                        },
                        "createEmbossBitmap",
                        function (t) {
                            t > 0 &&
                                (paint.setMaskFilter(new EmbossMaskFilter(new float[1](), 1, 1, t)),
                                (bNew = Bitmap.createBitmap(parseInt(width), parseInt(height), Bitmap.Config.ARGB_8888)),
                                bNew.setDensity(ScenaParametr_ScenaParametr.P.DEN_DEF),
                                (canvas = new Canvas(bNew)),
                                canvas.drawBitmap(bitmap, 0, 0, paint),
                                setBitmap(bNew)),
                                paint.setMaskFilter(null);
                        }
                    ),
                _interface(Serializable)._body(),
                _class(GameLevel)
                    ._implements(Serializable)
                    ._body(
                        function (t) {
                            t.accountUser = 0;
                        },
                        function (t) {
                            t.accountBot = 0;
                        },
                        function (t) {
                            t.difficulty = 0;
                        },
                        function (t) {
                            (t.bitmapField = null), (t.bitmapPuck = null), (t.bitmapUser = null), (t.bitmapBot = null), (t.bitmap = null);
                        }
                    ),
                _class(GameScore)._body(
                    _static,
                    function (t) {
                        t.accountEnd = 7;
                    },
                    _static,
                    function (t) {
                        t.Level = null;
                    },
                    _static,
                    function (t) {
                        t.accountHero = 0;
                    },
                    _static,
                    function (t) {
                        t.accountOppon = 0;
                    },
                    _static,
                    "reset",
                    function () {
                        (GameScore.accountHero = 0), (GameScore.accountOppon = 0);
                    },
                    _static,
                    "load",
                    function (t) {
                        (GameScore.accountHero = 0), (GameScore.accountOppon = 0);
                    },
                    _static,
                    "save",
                    function (t) {
                        (t.accountUser = GameScore.accountHero), (t.accountBot = GameScore.accountOppon);
                    }
                ),
                _class(SceneGame)
                    ._extends(SceneViewSurface)
                    ._body(
                        _static,
                        function (t) {
                            t.DX = 30 * N.SP;
                        },
                        _static,
                        function (t) {
                            t.LINE_WIDTH = 20 * N.SP;
                        },
                        function (t) {
                            t.labelGoal = null;
                        },
                        "getLabelGoal",
                        function () {
                            return this.labelGoal;
                        },
                        function (t) {
                            t.bmpPuckAction = null;
                        },
                        function (t) {
                            t.bmpParticles = null;
                        },
                        function (t) {
                            (t.bmpOpponArmPasiv = null), (t.bmpOpponArmAction = null), (t.bmpHeroArmPasiv = null), (t.bmpHeroArmAction = null);
                        },
                        function (t) {
                            (t.field = null), (t.tablo = null), (t.avatarHero = null), (t.avatarOppon = null), (t.aim = null), (t.ametr = null);
                        },
                        function (t) {
                            t.bPause = null;
                        },
                        "getbPause",
                        function () {
                            return this.bPause;
                        },
                        function (t) {
                            t.scoreUser = null;
                        },
                        "getScoreUser",
                        function () {
                            return this.scoreUser;
                        },
                        function (t) {
                            t.scoreBot = null;
                        },
                        "getScoreBot",
                        function () {
                            return this.scoreBot;
                        },
                        function (t) {
                            t.objUser = null;
                        },
                        "getObjUser",
                        function () {
                            return this.objUser;
                        },
                        function (t) {
                            t.objBot = null;
                        },
                        "getObjBot",
                        function () {
                            return this.objBot;
                        },
                        function (t) {
                            t.objPuck = null;
                        },
                        "getObjPuck",
                        function () {
                            return this.objPuck;
                        },
                        function (t) {
                            t.pathLeftTop = null;
                        },
                        function (t) {
                            t.pathRightTop = null;
                        },
                        function (t) {
                            t.pathRightBottom = null;
                        },
                        function (t) {
                            t.pathLeftBottom = null;
                        },
                        function (t) {
                            t.paintLight = null;
                        },
                        function (t) {
                            t.paintLeftTop = null;
                        },
                        function (t) {
                            t.paintLeftBottom = null;
                        },
                        function (t) {
                            t.paintRightTop = null;
                        },
                        function (t) {
                            t.paintRightBottom = null;
                        },
                        function (t) {
                            t.needStart = !0;
                        },
                        function (t) {
                            t.needResume = !0;
                        },
                        function (t) {
                            t.levelCurent = null;
                        },
                        SceneGame.name,
                        function (t, e) {
                            SceneViewSurface._init(this, t), SceneGame.Initialize(this), (this.levelCurent = e), (GameScore.Level = e), GameScore.load(this.levelCurent);
                            var n = e.bitmapField;
                            (this.field = new BackImage(e.bitmapField)),
                                this.field.setParam(0.5 * N.WT, 0.5 * N.HT, n.getWidth(), n.getHeight()),
                                this.attachCommun(this.field),
                                (n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_pause))),
                                (this.bPause = new BmpButton(n, null, 1, 1, !0, null)),
                                this.bPause.setParam(N.FL + 100 * N.SP, N.FT + 0.5 * N.HW - 50 * N.SP, n.getWidth(), n.getHeight()),
                                this.attachCommun(this.bPause),
                                (this.scoreUser = new Label("0", Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, g.CENTER, N.FR - 100 * N.SP, N.FT + 0.5 * N.HW + 50 * N.SP, 80 * N.SP)),
                                this.attachCommun(this.scoreUser),
                                (this.scoreBot = new Label("0", Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, g.CENTER, N.FR - 100 * N.SP, N.FT + 0.5 * N.HW - 50 * N.SP, 80 * N.SP)),
                                this.attachCommun(this.scoreBot),
                                (this.objUser = new _2DObjectGraphic_2DObjectGraphic(e.bitmapUser, new _2DPoint_2DPoint(N.FL + 0.5 * N.WT, N.FB - 100 * N.SP - SceneGame.DX), 200 * N.SP, 200 * N.SP, 1)),
                                this.objUser.setWieght(20),
                                this.attachCommun(this.objUser),
                                (this.objBot = new _2DObjectGraphic_2DObjectGraphic(e.bitmapBot, new _2DPoint_2DPoint(N.FL + 0.5 * N.WT, N.FT + 100 * N.SP + SceneGame.DX), 200 * N.SP, 200 * N.SP, 1)),
                                this.objBot.setWieght(20),
                                this.attachCommun(this.objBot),
                                (this.objPuck = new _2DObjectGraphic_2DObjectGraphic(e.bitmapPuck, new _2DPoint_2DPoint(N.FL + 0.5 * N.WW, N.FT + 0.5 * N.HW), 120 * N.SP, 120 * N.SP, 1)),
                                this.objPuck.setWieght(10),
                                this.objPuck.setVelocityLimit(2e3 * N.SP),
                                this.attachCommun(this.objPuck),
                                (this.labelGoal = new Label(t.getString(bt.string.goal).toUpperCase(), Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, g.CENTER)),
                                this.labelGoal.setParam(N.FL + 0.5 * N.WW, N.FT + 0.5 * N.HW, N.WW, 80 * N.SP),
                                this.labelGoal.setVisible(!1),
                                this.attachCommun(this.labelGoal);
                        },
                        function (t) {
                            t.boundsField = null;
                        },
                        "onDraw",
                        function (t) {
                            SceneViewSurface.onDraw(this, t);
                        },
                        "onRecycle",
                        function (t) {
                            s.d("", String.format("GV onRecycle %s", "")),
                                null != this.bmpHeroArmPasiv && this.bmpHeroArmPasiv.recycle(),
                                null != this.bmpHeroArmAction && this.bmpHeroArmAction.recycle(),
                                null != this.bmpOpponArmPasiv && this.bmpOpponArmPasiv.recycle(),
                                null != this.bmpOpponArmAction && this.bmpOpponArmAction.recycle(),
                                SceneViewSurface.onRecycle(this, t);
                        }
                    ),
                _class(Bot)._body(
                    function (t) {
                        t.cont = !1;
                    },
                    function (t) {
                        t.GV = null;
                    },
                    function (t) {
                        (t.objBot = null), (t.objPuck = null);
                    },
                    function (t) {
                        t.difficulty = 0;
                    },
                    function (t) {
                        t.posBase = 0;
                    },
                    function (t) {
                        t.trace = 0;
                    },
                    function (t) {
                        t.pTarget = new _2DPoint_2DPoint(0, 0);
                    },
                    function (t) {
                        t.vTemp = new _2DVector(0, 0);
                    },
                    function (t) {
                        t.vLook = new _2DVector(0, 0);
                    },
                    function (t) {
                        t.vVelo = new _2DVector(0, 0);
                    },
                    Bot.name,
                    function (t, e, n, i, o) {
                        Bot.Initialize(this), (this.posBase = n), (this.trace = i), (this.difficulty = o), (this.objBot = e), (this.objPuck = t), (this.cont = !0);
                    },
                    "stoped",
                    function () {
                        this.cont = !1;
                    },
                    "update",
                    function (t) {
                        if (this.cont) {
                            var e = (this.objPuck.getHeight() / 2) * this.objPuck.SP + (this.objBot.getHeight() / 2) * this.objBot.SP;
                            if (this.objPuck.Pos.Y > N.FT + 0.5 * N.HW) {
                                var n = 0.5 * N.WT;
                                this.pTarget.set(0.25 * (this.objPuck.Pos.X - n) * this.trace + n, this.posBase),
                                    this.vVelo.set(0.25 * (this.objPuck.Pos.X - n) * this.trace + n - this.objBot.Pos.X, this.posBase - this.objBot.Pos.Y),
                                    this.vLook.set(this.objPuck.Pos.getVectorEnding(this.objBot.Pos));
                            } else
                                this.pTarget.set(Number.NaN, Number.NaN),
                                    this.objBot.Pos.Y < this.objPuck.Pos.Y
                                        ? (this.vTemp.set(0, -e / 2), this.vVelo.set(this.objPuck.Pos.getSum(this.vTemp).getVectorEnding(this.objBot.Pos)))
                                        : this.objBot.Pos.X < this.objPuck.Pos.X
                                        ? (this.vTemp.set(2 * -e, -e), this.vVelo.set(this.objPuck.Pos.getSum(this.vTemp).getVectorEnding(this.objBot.Pos)))
                                        : (this.vTemp.set(2 * e, -e), this.vVelo.set(this.objPuck.Pos.getSum(this.vTemp).getVectorEnding(this.objBot.Pos))),
                                    this.vLook.set(this.vVelo);
                            this.vVelo.thisModul() > 0 && (this.vVelo.thisNormal(), this.vVelo.thisMultipByScalar(400 * N.SP + 4 * this.difficulty * N.SP)),
                                !Number.isNaN(this.pTarget.X) && !Number.isNaN(this.pTarget.X) && this.objBot.Pos.getDistance(this.pTarget) < this.objBot.Pos.getDistance(this.objBot.Pos.getSum(this.vVelo.getMultipByScalar(t)))
                                    ? this.objBot.Pos.set(this.pTarget)
                                    : (this.objBot.Pos.thisSum(this.vVelo.getMultipByScalar(t)), this.objBot.setVelocity(this.vVelo)),
                                this.objBot.Pos.getDistance(this.objPuck.Pos) > 1.05 * e && this.objBot.setVelocityCourse(this.vLook);
                        }
                    }
                ),
                _class(_2DReflect)._body(_static, { XX: null }, _static, { D: null }, _static, { DistanceTouch: 0 }, _static, function Comput(t, e, n) {
                    return (
                        (this.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP()),
                        (this.D = n.Distance),
                        null != this.D && ((this.XX = this.D.Vector.getOrtoClock()), t.setVel(this.XX.getMultipByScalar((2 * this.XX.getMultipScalar(t.getVel())) / this.XX.getMultipScalar(this.XX)).getDiff(t.getVel())), !0)
                    );
                }),
                _class(_2DReflectX)._body(_static, { D: null }, _static, { DistanceTouch: 0 }, _static, function Comput(t, e, n) {
                    return (this.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP()), (this.D = n.Distance), null != this.D && ((t.getVel().X = -t.getVel().X), !0);
                }),
                _class(_2DReflectXPerspective)._body(_static, { D: null }, _static, { DistanceTouch: 0 }, _static, function Comput(t, e, n) {
                    return (
                        (this.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP()),
                        (this.D = n.Distance),
                        null != this.D && (this.Math.abs(t.getVel().X) < 0.2 * this.Math.abs(t.getVel().Y) ? this._2DReflect.Comput(t, e, n) : ((t.getVel().X = -t.getVel().X), !0))
                    );
                }),
                _class(_2DViscous)._body(_static, { D: null }, _static, { DistanceTouch: 0 }, _static, function Comput(t, e, n) {
                    return (this.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP()), (this.D = n.Distance), this.D, (t.getVel().X = t.getVel().X / 2), (t.getVel().Y = t.getVel().Y / 3), !0;
                }),
                _class(_2DShift)._body(
                    _static,
                    function (t) {
                        t.XX = null;
                    },
                    _static,
                    function (t) {
                        t.D = null;
                    },
                    _static,
                    function (t) {
                        t.DistanceTouch = 0;
                    },
                    [_2DObject, _2DPoligon, _2DCollision],
                    _static,
                    "Comput",
                    function (t, e, n) {
                        return (_2DShift.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP()), (_2DShift.D = n.Distance), null != _2DShift.D;
                    },
                    _static,
                    "ComputWithSetPos",
                    function (t, e, n) {
                        return (
                            (_2DShift.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP()),
                            (_2DShift.D = n.Distance),
                            null != _2DShift.D && (t.setPos(_2DShift.D.Begin.getSum(_2DShift.D.Normal.getMultipByScalar(_2DShift.DistanceTouch))), !0)
                        );
                    },
                    [_2DObject, _2DObject],
                    _static,
                    "Comput",
                    function (t, e) {
                        return (
                            (_2DShift.DistanceTouch = (t.getWidth() / 2) * t.getScale() * t.getScaleP() + (e.getWidth() / 2) * e.getScale() * e.getScaleP()),
                            t.getPos().getDistance(e.getPos()) <= _2DShift.DistanceTouch && (e.setPos(t.getPos().getSum(t.getPos().getVectorBegining(e.getPos()).getNormal().getMultipByScalar(_2DShift.DistanceTouch))), !0)
                        );
                    }
                ),
                _class(_2DCollision)._body(
                    function (t) {
                        t.Type = null;
                    },
                    function (t) {
                        t.Bound = null;
                    },
                    function (t) {
                        t.Distance = null;
                    },
                    _2DCollision.name,
                    function (t, e, n) {
                        _2DCollision.Initialize(this), (this.Bound = e), (this.Distance = n), (this.Type = t);
                    },
                    _static,
                    "FindCollisionLabirinnt",
                    function (t, e) {
                        for (var n = !1, i = e.bounds.size(), o = 0; o < i; o++) {
                            var s = e.bounds.get(o).segment,
                                r = s.getDistance(t.getPos());
                            null != r && r.Modul <= (t.getWidth() / 2) * t.getScale() * t.getScaleP() && (n |= this.ComputCollisionLabirint(t, e, new _2DCollision(e.bounds.get(o).type, s, r)));
                        }
                        return n;
                    },
                    [_2DObject, _2DPoligon],
                    _static,
                    "FindCollision",
                    function (t, e) {
                        var n = new ArrayList();
                        return this.FindCollision(t, e, t.getPos(), n);
                    },
                    [_2DObject, _2DPoligon, _2DPoint_2DPoint, List],
                    _static,
                    "FindCollision",
                    function (t, e, n, i) {
                        var o = !1,
                            s = e.getInside(n, i);
                        if (s != t.getPos()) {
                            t.setPos(s);
                            for (var r, a = _2DCollision_createForOfIteratorHelperLoose(i); !(r = a()).done; ) {
                                var c = r.value;
                                o |= this.ComputCollision(t, e, new _2DCollision(c.type, c.segment, c.segment.getDistance(s)));
                            }
                        }
                        return o;
                    },
                    [_2DObject, _2DPoligon],
                    _static,
                    "findCollision",
                    function (t, e) {
                        var n = new ArrayList();
                        return this.findCollision(t, e, t.getPos(), n);
                    },
                    [_2DObject, _2DPoligon, _2DPoint_2DPoint, List],
                    _static,
                    "findCollision",
                    function (t, e, n, i) {
                        var o = !1,
                            s = e.getInside(t, n, i);
                        if (s != t.getPos()) {
                            t.setPos(s);
                            for (var r, a = _2DCollision_createForOfIteratorHelperLoose(i); !(r = a()).done; ) {
                                var c = r.value;
                                o |= this.ComputCollision(t, e, new _2DCollision(c.type, c.segment, c.segment.getDistance(s)));
                            }
                        }
                        return o;
                    },
                    _static,
                    "ComputCollision",
                    function (t, e, n) {
                        switch (n.Type) {
                            case _2DCollisionType.Reflect:
                                return _2DReflect.Comput(t, e, n);
                            case _2DCollisionType.ReflectX:
                                return _2DReflectX.Comput(t, e, n);
                            case _2DCollisionType.ReflectXPerspective:
                                return _2DReflectXPerspective.Comput(t, e, n);
                            case _2DCollisionType.Viscous:
                                return _2DViscous.Comput(t, e, n);
                            case _2DCollisionType.Goal:
                                return _2DGoal.Comput(t, e, n);
                            case _2DCollisionType.Shift:
                                return _2DShift.Comput(t, e, n);
                            case _2DCollisionType.Pass:
                            default:
                                return !1;
                        }
                    },
                    _static,
                    "ComputCollisionLabirint",
                    function (t, e, n) {
                        switch (n.Type) {
                            case _2DCollisionType.Reflect:
                                return _2DReflect.Comput(t, e, n);
                            case _2DCollisionType.ReflectX:
                                return _2DReflectX.Comput(t, e, n);
                            case _2DCollisionType.ReflectXPerspective:
                                return _2DReflectXPerspective.Comput(t, e, n);
                            case _2DCollisionType.Viscous:
                                return _2DViscous.Comput(t, e, n);
                            case _2DCollisionType.Goal:
                                return _2DGoal.Comput(t, e, n);
                            case _2DCollisionType.Shift:
                                return _2DShift.ComputWithSetPos(t, e, n);
                            case _2DCollisionType.Pass:
                            default:
                                return !1;
                        }
                    }
                ),
                _class(OnGestListener)
                    ._extends(SimpleOnGestureListener)
                    ._body(
                        function (t) {
                            t.screenGame = null;
                        },
                        function (t) {
                            t.objPuck = null;
                        },
                        function (t) {
                            t.objUser = null;
                        },
                        function (t) {
                            t.downIsMove = !1;
                        },
                        OnGestListener.name,
                        function (t, e, n) {
                            SimpleOnGestureListener._init(this), OnGestListener.Initialize(this), (this.screenGame = t), (this.objPuck = e), (this.objUser = n), this.AnimFling(n.Pos);
                        },
                        "release",
                        function () {},
                        "onDown",
                        function (t) {
                            this.downIsMove = !1;
                            var e = new ArrayList(),
                                n = new _2DPoint_2DPoint(t.getX(), t.getY()),
                                i = new _2DPoint_2DPoint(t.getX(), t.getY()),
                                o = this.screenGame.boundsUser.getInside(i, e);
                            this.screenGame.boundsBot.getInside(n, e);
                            return i.Y > N.FT + 0.5 * N.HW && (this.setPoint(o), (this.downIsMove = !0)), SimpleOnGestureListener.onDown(this, t);
                        },
                        "onScroll",
                        function (t, e, n, i) {
                            var o = new ArrayList(),
                                s = new _2DPoint_2DPoint(e.getX(), e.getY()),
                                r = this.screenGame.boundsUser.getInside(this.objUser, s, o);
                            return (this.downIsMove || s.Y > N.FT + 0.5 * N.HW) && (this.setPoint(r), (this.downIsMove = !0)), SimpleOnGestureListener.onScroll(this, t, e, n, i);
                        },
                        function (t) {
                            t.gl = null;
                        },
                        function (t) {
                            (t.oldPos = null), (t.targetPos = null);
                        },
                        function (t) {
                            t.velocity = new _2DVector(0, 0);
                        },
                        function (t) {
                            t.vVelo = new _2DVector(0, 0);
                        },
                        function (t) {
                            (t.pPrev = new _2DPoint_2DPoint(0, 0)), (t.pCur = new _2DPoint_2DPoint(0, 0));
                        },
                        function (t) {
                            (t.distanceTotal = 0), (t.distanceCur = 0);
                        },
                        function (t) {
                            t.cont = !1;
                        },
                        function (t) {
                            t.upd = !1;
                        },
                        "AnimFling",
                        function (t) {
                            (this.oldPos = t), (this.targetPos = t), (this.cont = !0);
                        },
                        "setPoint",
                        function (t) {
                            (this.oldPos = this.objUser.Pos),
                                (this.targetPos = t),
                                (this.upd = !0),
                                (this.velocity = t
                                    .getVectorEnding(this.oldPos)
                                    .getNormal()
                                    .getMultipByScalar(2e4 * N.SP)),
                                (this.distanceTotal = t.getDistance(this.oldPos));
                        },
                        "setPointImmediately",
                        function (t) {
                            (this.oldPos = this.gl.objUser.Pos), (this.targetPos = t);
                            var e = new ArrayList();
                            (this.velocity = t.getVectorEnding(this.oldPos)),
                                (this.distanceTotal = t.getDistance(this.oldPos)),
                                this.objUser.setPosition(t.X, t.Y),
                                _2DCollision.findCollision(this.objUser, this.screenGame.boundsUser, this.targetPos, e),
                                this.objUser.setVelocity(this.velocity),
                                this.objUser.setVelocityCourse(this.objPuck.Pos.getVectorEnding(this.objUser.Pos));
                        },
                        "stoped",
                        function () {
                            this.cont = !1;
                        },
                        "update",
                        function (t) {
                            var e,
                                n = new ArrayList();
                            try {
                                this.upd &&
                                    ((e = this.objUser.Pos.getSum(this.velocity.getMultipByScalar(t))),
                                    (this.distanceCur = this.oldPos.getDistance(e)),
                                    this.distanceCur >= this.distanceTotal && ((e = this.targetPos), (this.upd = !1)),
                                    _2DCollision.findCollision(this.objUser, this.screenGame.boundsUser, e, n)),
                                    this.pCur.set(this.objUser.Pos),
                                    this.vVelo.set((this.pCur.X - this.pPrev.X) / this.timeInterval, (this.pCur.Y - this.pPrev.Y) / t),
                                    this.objUser.setVelocity(this.vVelo),
                                    this.objUser.setVelocityCourse(this.objPuck.Pos.getVectorEnding(this.objUser.Pos)),
                                    this.pPrev.set(this.pCur),
                                    this.objUser.invalidate();
                            } catch (t) {
                                t.printStackTrace();
                            }
                        }
                    ),
                _class(ParticlesAdd)
                    ._extends(Thread)
                    ._body(
                        function (t) {
                            t.cont = !1;
                        },
                        function (t) {
                            t.gv = null;
                        },
                        function (t) {
                            t.objPuck = null;
                        },
                        function (t) {
                            t.objUser = null;
                        },
                        function (t) {
                            t.objBot = null;
                        },
                        function (t) {
                            t.objBot2 = null;
                        },
                        function (t) {
                            t.TimePrev = System.currentTimeMillis();
                        },
                        function (t) {
                            t.TimeNew = 0;
                        },
                        function (t) {
                            t.TimeInterval = 0;
                        },
                        "run",
                        function () {
                            this.Comput();
                        },
                        ParticlesAdd.name,
                        function (t, e, n, i, o) {
                            Thread._init(this), ParticlesAdd.Initialize(this), (this.gv = t), (this.objPuck = e), (this.objUser = n), (this.objBot = i), (this.objBot2 = o), this.setName("ParticlesAdd"), this.start();
                        },
                        "Stoped",
                        function () {
                            this.cont = !1;
                            try {
                                this.join();
                            } catch (t) {}
                        },
                        "Comput",
                        function () {
                            var t = new _2DPoint_2DPoint(this.objPuck.Pos);
                            new _2DPoint_2DPoint(this.objUser.Pos), new _2DPoint_2DPoint(this.objBot.Pos), null != this.objBot2 && new _2DPoint_2DPoint(this.objBot2.Pos);
                            for (this.cont = !0; this.cont; ) {
                                this.objPuck.Pos.getDistance(t) >= 0.5 * this.objPuck.getHeight() * this.objPuck.SP && (this.gv.addParticles(this.objPuck.Pos.clone()), t.set(this.objPuck.Pos)),
                                    this.objUser.Pos.getDistance(this.pHero) >= 0.5 * this.objUser.getHeight() * this.P.SD && (this.gv.addParticles(this.objUser.Pos.clone()), this.pHero.set(this.objUser.Pos)),
                                    this.objBot.Pos.getDistance(this.pOppon) >= 0.5 * this.objBot.getHeight() * this.P.SD && (this.gv.addParticles(this.objBot.Pos.clone()), this.pOppon.set(this.objBot.Pos)),
                                    null != this.objBot2 && this.objBot2.Pos.getDistance(this.pOpponS) >= 0.5 * this.objBot2.getHeight() * this.P.SD && (this.gv.addParticles(this.objBot2.Pos.clone()), this.pOpponS.set(this.objBot2.Pos));
                                try {
                                    this.sleep(20);
                                } catch (t) {
                                    t.printStackTrace();
                                }
                            }
                        }
                    ),
                _class(_2DKickSpring)._body(_static, "calc", function (t, e, n) {
                    var i = (t.getHeight() / 2) * t.getScale() * t.SP + (e.getHeight() / 2) * e.SP * e.getScale();
                    if (t.Pos.getDistance(e.Pos) <= i) {
                        var o,
                            s = (t.getHeight() / 2) * t.getScale() * t.SP,
                            r = t.Pos.getVectorBegining(e.Pos),
                            a = t.Pos.getSum(r.getNormal().getMultipByScalar(s)).getVectorBegining(e.Pos).getOrtoClock();
                        return (
                            (o =
                                0 == e.getVel().thisModul()
                                    ? r
                                    : r.getMultipScalar(e.getVel()) >= 0
                                    ? r.getSum(e.getVel())
                                    : t.getVel().thisModul() < 50 * N.SP
                                    ? r.getSum(a.getMultipByScalar((2 * a.getMultipScalar(e.getVel())) / a.getMultipScalar(a)).getDiff(e.getVel()))
                                    : r),
                            (e.V = o.getNormal().getMultipByScalar(n)),
                            (e.Pos = t.Pos.getSum(r.getNormal().getMultipByScalar(i))),
                            !0
                        );
                    }
                    return !1;
                });
            var Bt = (function () {
                function Random() {}
                var t = Random.prototype;
                return (
                    (t.nextInt = function nextInt(t) {
                        return Math.floor(Math.random() * Math.floor(t));
                    }),
                    (t.nextFloat = function nextFloat() {
                        return Math.random();
                    }),
                    (t.nextBoolean = function nextBoolean() {
                        return Math.random() >= 0.5;
                    }),
                    Random
                );
            })();
            function _2DPressOut() {
                _2DPressOut._init.apply(_2DPressOut, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function Physic_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function Physic_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Physic_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Physic_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function Physic_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function Physic() {
                Physic._init.apply(Physic, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(_2DPressOut)._body(
                _static,
                function (t) {
                    t.random = new Bt();
                },
                _static,
                "calc",
                function (t, e, n) {
                    var i = (t.getWidth() / 2) * t.getScale() * t.getScaleP() + (e.getWidth() / 2) * e.getScale() * e.getScaleP();
                    return t.getPos().getDistance(e.getPos()) <= i && (e.setPos(t.getPos().getSum(t.getPos().getVectorBegining(e.getPos()).getNormal().getMultipByScalar(i))), !0);
                }
            ),
                _class(Physic)._body(
                    function (t) {
                        t.cont = !1;
                    },
                    function (t) {
                        t.game = null;
                    },
                    function (t) {
                        t.objPuck = null;
                    },
                    function (t) {
                        t.objUser = null;
                    },
                    function (t) {
                        t.objBot = null;
                    },
                    function (t) {
                        t.objBot2 = null;
                    },
                    function (t) {
                        t.kTrenie = 0.3;
                    },
                    function (t) {
                        t.speedMin = 1e3 * N.SP;
                    },
                    function (t) {
                        t.speedAfterKick = 2e3 * N.SP;
                    },
                    Physic.name,
                    function (t, e, n, i, o, s) {
                        Physic.Initialize(this), (this.game = t), (this.objPuck = e), (this.objUser = n), (this.objBot = i), (this.objBot2 = o), (this.speedAfterKick = 2e3 * N.SP + 4 * s * N.SP), (this.cont = !0);
                    },
                    "stoped",
                    function () {
                        this.cont = !1;
                    },
                    "update",
                    function (t) {
                        var e = new ArrayList();
                        if (_2DCollision.findCollision(this.objPuck, this.game.boundsField, this.objPuck.Pos, e)) {
                            _2DPressOut.calc(this.objPuck, this.objUser, this.speedAfterKick), _2DPressOut.calc(this.objPuck, this.objBot, this.speedAfterKick);
                            for (var n, i = Physic_createForOfIteratorHelperLoose(e); !(n = i()).done; ) {
                                var o = n.value,
                                    s = this.objPuck.getPointTouch(o);
                                this.game.addPuckAction(s),
                                    this.game.setRotate(
                                        this.objPuck
                                            .getVelocity()
                                            .getMultipByScalar(1 / N.SP)
                                            .getMultipScalarPseudo(this.objPuck.Pos.getVectorBegining(s).getMultipByScalar(1 / N.SP))
                                    );
                            }
                        }
                        _2DCollision.findCollision(this.objBot, this.game.boundsBot),
                            this.cont &&
                                (_2DKickSpring.calc(this.objUser, this.objPuck, this.speedAfterKick) && this.game.addPuckAction(this.objUser.getPointTouch(this.objPuck)),
                                _2DKickSpring.calc(this.objBot, this.objPuck, this.speedAfterKick) && this.game.addPuckAction(this.objBot.getPointTouch(this.objPuck)),
                                this.objPuck.onUpdate(t),
                                this.objPuck.getVelocity().thisModul() > this.speedMin && this.objPuck.getVelocity().thisDiff(this.objPuck.getVelocity().getMultipByScalar(this.kTrenie * t)));
                    }
                );
            var Et = 0;
            function ScreenGame() {
                ScreenGame._init.apply(ScreenGame, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneDialog_OnLightEndListener() {}
            function OnDarkEndListener() {}
            function SceneDialog_SceneDialog() {
                SceneDialog_SceneDialog._init.apply(SceneDialog_SceneDialog, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function AlphaAnimation() {
                AlphaAnimation._init.apply(AlphaAnimation, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneDialogLike() {
                SceneDialogLike._init.apply(SceneDialogLike, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenDialogLike() {
                ScreenDialogLike._init.apply(ScreenDialogLike, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneMenu() {
                SceneMenu._init.apply(SceneMenu, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenMenu() {
                ScreenMenu._init.apply(ScreenMenu, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneSettings() {
                SceneSettings._init.apply(SceneSettings, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenSettings() {
                ScreenSettings._init.apply(ScreenSettings, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(ScreenGame)
                ._extends(ScreenAdvt)
                ._body(
                    _static,
                    function (t) {
                        t.TAG = "ScreenGame";
                    },
                    _static,
                    function (t) {
                        t.EXTRA_DIFFICULTY = "difficulty";
                    },
                    _static,
                    function (t) {
                        t.EXTRA_MODE = "mode";
                    },
                    function (t) {
                        t.viewGame = null;
                    },
                    function (t) {
                        t.Goal1 = null;
                    },
                    function (t) {
                        t.Goal2 = null;
                    },
                    function (t) {
                        t.Pol = new _2DPoligon();
                    },
                    function (t) {
                        (t.boundsField = null), (t.boundsUser = null), (t.boundsBot = null);
                    },
                    function (t) {
                        t.physic = null;
                    },
                    function (t) {
                        t.PA = null;
                    },
                    function (t) {
                        t.bot = null;
                    },
                    function (t) {
                        t.gestList = null;
                    },
                    function (t) {
                        t.difficulty = 0;
                    },
                    function (t) {
                        t.handler = new G();
                    },
                    function (t) {
                        t.screenPaused = !1;
                    },
                    function (t) {
                        t.updater = null;
                    },
                    "onCreate",
                    function (t) {
                        var e = this;
                        ScreenAdvt.onCreate(this, t), (Et = 30 * N.SP), (this.difficulty = this.getIntent().getIntExtra(ScreenGame.EXTRA_DIFFICULTY, 10));
                        var n = this.createLevel(this.difficulty);
                        this.createField(),
                            (this.viewGame = new SceneGame(this.thisA, n)),
                            (this.viewGame.boundsField = this.boundsField),
                            (this.bot = new Bot(this.viewGame.getObjPuck(), this.viewGame.getObjBot(), N.FT + 100 * N.SP + Et, 1, this.difficulty)),
                            (this.physic = new Physic(this, this.viewGame.getObjPuck(), this.viewGame.getObjUser(), this.viewGame.getObjBot(), null, this.difficulty)),
                            (this.gestList = new OnGestListener(this, this.viewGame.getObjPuck(), this.viewGame.getObjUser())),
                            this.viewGame.getObjUser().setOnGestureListener(this.gestList),
                            this.viewGame.getbPause().setBmpButtonClickListener(
                                BmpButtonClickListener._lambda(function (t, n, i) {
                                    MediaAudio.get().playSound(App.soundClick);
                                    var o = App.intentDialogPause.clone();
                                    return e.startActivityForResult(o, St.CodReqDialogPause), !0;
                                })
                            ),
                            this.setContentView(this.viewGame);
                    },
                    "onResume",
                    function () {
                        var t = new AdvtConfig();
                        (t.id = App.getIdBannerLeft()),
                            (t.sizeBanner = App.getSizeBannerLeft()),
                            (t.gravityBanner = W.LEFT | W.CENTER_VERTICAL),
                            this.getAdvt().showBanner(t),
                            (t.id = App.getIdBannerRight()),
                            (t.sizeBanner = App.getSizeBannerRight()),
                            (t.gravityBanner = W.RIGHT | W.CENTER_VERTICAL),
                            this.getAdvt().showBanner(t),
                            ScreenAdvt.onResume(this),
                            (this.screenPaused = !1),
                            this.startBot();
                    },
                    "onPause",
                    function () {
                        (this.screenPaused = !0), this.stopBot(), ScreenAdvt.onPause(this);
                    },
                    "onDestroy",
                    function () {
                        null != this.gestList && this.gestList.release(), ScreenAdvt.onDestroy(this);
                    },
                    "onActivityResult",
                    function (t, e, n) {
                        if ((s.d("", String.format("onActivityResult %d %d", t, e)), t == St.CodReqDialogPause))
                            switch (e) {
                                case St.CodResExit:
                                    this.finish();
                                    break;
                                case St.CodResRestart:
                                    this.startActivity(this.getIntent());
                            }
                        ScreenAdvt.onActivityResult(this, t, e, n);
                    },
                    "startBot",
                    function () {
                        this.screenPaused ||
                            (this.stopBot(),
                            (this.updater = new Animation()
                                .setDrawFrame(!0)
                                .setSleepMs(10)
                                .setDuration(-1)
                                .setAnimationCaller(
                                    new Animation.AnimationCaller()._body({ scr: this, msInterval: _1 }, [Number], "call", function (t, e) {
                                        var n = e / 1e3;
                                        return t.gestList.update(n), t.bot.update(n), t.physic.update(n), Animation.AnimationCaller.call(this, e);
                                    })
                                )),
                            this.updater.run());
                    },
                    "stopBot",
                    function () {
                        null != this.updater && this.updater.out();
                    },
                    "createLevel",
                    function (t) {
                        var e = new S();
                        e.setAntiAlias(!0), e.setStyle(S.Style.FILL_AND_STROKE), e.setStrokeWidth(0);
                        var n,
                            i = new GameLevel();
                        (i.difficulty = t),
                            (i.bitmapField = Bmp.createBitmap(N.WT, N.HT, Bitmap.Config.ARGB_8888)),
                            i.bitmapField.setDensity(N.DEN_DEF),
                            (n = new Canvas_Canvas(i.bitmapField)).drawColor(p.BLACK),
                            e.setColor(4279900698),
                            n.drawRect(N.FL, N.FT, N.FR, N.FB, e),
                            e.setStyle(S.Style.STROKE),
                            e.setStrokeWidth(20 * N.SP),
                            e.setColor(4281545523),
                            n.drawLine(N.FL + Et, N.FT + 0.5 * N.HW, N.FR - Et, N.FT + 0.5 * N.HW, e),
                            n.drawCircle(N.FL + 0.5 * N.WW, N.FT + 0.5 * N.HW, 0.2 * N.WW, e),
                            n.drawArc(new RectF(N.FL + 0.3 * N.WW, N.FB - Et - 0.2 * N.WW, N.FR - 0.3 * N.WW, N.FB - Et + 0.2 * N.WW), -180, 180, !1, e),
                            n.drawArc(new RectF(N.FL + 0.3 * N.WW, N.FT + Et - 0.2 * N.WW, N.FR - 0.3 * N.WW, N.FT + Et + 0.2 * N.WW), 0, 180, !1, e),
                            e.setPathEffect(new I(new Array(20, 10), 0)),
                            n.drawLine(N.FL + 0.3 * N.WW, N.FT + Et, N.FR - 0.3 * N.WW, N.FT + Et, e),
                            n.drawLine(N.FL + 0.3 * N.WW, N.FB - Et, N.FR - 0.3 * N.WW, N.FB - Et, e),
                            e.setPathEffect(null);
                        var o = new Path();
                        return (
                            o.moveTo(N.FL + Et, N.FT + 0.5 * N.HW),
                            o.lineTo(N.FL + Et, N.FT + 2 * Et),
                            o.arcTo(new RectF(N.FL + Et, N.FT + Et, N.FL + 2 * Et, N.FT + 2 * Et), -180, 90),
                            o.lineTo(N.FL + 0.3 * N.WW, N.FT + Et),
                            e.setColor(4278217844),
                            e.setStrokeWidth(2 * Et),
                            e.setMaskFilter(new D(Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            e.setColor(p.WHITE),
                            e.setStrokeWidth(0.5 * Et),
                            e.setMaskFilter(new D(0.25 * Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            o.reset(),
                            o.moveTo(N.FL + Et, N.FT + 0.5 * N.HW),
                            o.lineTo(N.FL + Et, N.FB - 2 * Et),
                            o.arcTo(new RectF(N.FL + Et, N.FB - 2 * Et, N.FL + 2 * Et, N.FB - Et), -180, -90),
                            o.lineTo(N.FL + 0.3 * N.WW, N.FB - Et),
                            e.setColor(4278219010),
                            e.setStrokeWidth(2 * Et),
                            e.setMaskFilter(new D(Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            e.setColor(p.WHITE),
                            e.setStrokeWidth(0.5 * Et),
                            e.setMaskFilter(new D(0.25 * Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            o.reset(),
                            o.moveTo(N.FR - Et, N.FT + 0.5 * N.HW),
                            o.lineTo(N.FR - Et, N.FT + 2 * Et),
                            o.arcTo(new RectF(N.FR - 2 * Et, N.FT + Et, N.FR - Et, N.FT + 2 * Et), 0, -90),
                            o.lineTo(N.FR - 0.3 * N.WW, N.FT + Et),
                            e.setColor(4279710068),
                            e.setStrokeWidth(2 * Et),
                            e.setMaskFilter(new D(Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            e.setColor(p.WHITE),
                            e.setStrokeWidth(0.5 * Et),
                            e.setMaskFilter(new D(0.25 * Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            o.reset(),
                            o.moveTo(N.FR - Et, N.FT + 0.5 * N.HW),
                            o.lineTo(N.FR - Et, N.FB - 2 * Et),
                            o.arcTo(new RectF(N.FR - 2 * Et, N.FB - 2 * Et, N.FR - Et, N.FB - Et), 0, 90),
                            o.lineTo(N.FR - 0.3 * N.WW, N.FB - Et),
                            e.setColor(4286648411),
                            e.setStrokeWidth(2 * Et),
                            e.setMaskFilter(new D(Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            e.setColor(p.WHITE),
                            e.setStrokeWidth(0.5 * Et),
                            e.setMaskFilter(new D(0.25 * Et, D.Blur.NORMAL)),
                            n.drawPath(o, e),
                            (i.bitmapPuck = Bmp.createBitmap(180 * N.SP, 180 * N.SP, Bitmap.Config.ARGB_8888)),
                            i.bitmapPuck.setDensity(N.DEN_DEF),
                            e.setStyle(S.Style.FILL_AND_STROKE),
                            e.setStrokeWidth(0),
                            e.setColor(4282309695),
                            e.setMaskFilter(new D(20 * N.SP, D.Blur.NORMAL)),
                            (n = new Canvas_Canvas(i.bitmapPuck)).drawCircle(90 * N.SP, 90 * N.SP, 60 * N.SP, e),
                            e.setMaskFilter(null),
                            n.drawCircle(90 * N.SP, 90 * N.SP, 60 * N.SP, e),
                            e.setColor(p.WHITE),
                            n.drawCircle(90 * N.SP, 90 * N.SP, 50 * N.SP, e),
                            e.setColor(4284343135),
                            n.drawCircle(90 * N.SP, 90 * N.SP, 30 * N.SP, e),
                            e.setColor(p.WHITE),
                            n.drawCircle(90 * N.SP, 90 * N.SP, 25 * N.SP, e),
                            (i.bitmapUser = Bmp.createBitmap(280 * N.SP, 280 * N.SP, Bitmap.Config.ARGB_8888)),
                            i.bitmapUser.setDensity(N.DEN_DEF),
                            e.setColor(4278664345),
                            e.setMaskFilter(new D(40 * N.SP, D.Blur.NORMAL)),
                            (n = new Canvas_Canvas(i.bitmapUser)).drawCircle(140 * N.SP, 140 * N.SP, 100 * N.SP, e),
                            e.setMaskFilter(null),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 100 * N.SP, e),
                            e.setColor(p.WHITE),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 90 * N.SP, e),
                            e.setColor(4281164480),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 40 * N.SP, e),
                            e.setColor(4278664345),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 30 * N.SP, e),
                            (i.bitmapBot = Bmp.createBitmap(280 * N.SP, 280 * N.SP, Bitmap.Config.ARGB_8888)),
                            i.bitmapBot.setDensity(N.DEN_DEF),
                            e.setColor(4292945189),
                            e.setMaskFilter(new D(40 * N.SP, D.Blur.NORMAL)),
                            (n = new Canvas_Canvas(i.bitmapBot)).drawCircle(140 * N.SP, 140 * N.SP, 100 * N.SP, e),
                            e.setMaskFilter(null),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 100 * N.SP, e),
                            e.setColor(p.WHITE),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 90 * N.SP, e),
                            e.setColor(4294401373),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 40 * N.SP, e),
                            e.setColor(4292945189),
                            n.drawCircle(140 * N.SP, 140 * N.SP, 30 * N.SP, e),
                            i
                        );
                    },
                    "createField",
                    function () {
                        (this.boundsField = new _2DPoligon()),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FL + Et, N.FT + Et), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FL + 0.3 * N.WW, N.FT + Et), _2DCollisionType.Reflect),
                            (this.Goal1 = this.boundsField.addPoint(new _2DPoint_2DPoint(N.FL + 0.3 * N.WW, -200 * N.SP), _2DCollisionType.Goal)),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FR - 0.3 * N.WW, -200 * N.SP), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FR - 0.3 * N.WW, N.FT + Et), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FR - Et, N.FT + Et), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FR - Et, N.FB - Et), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FR - 0.3 * N.WW, N.FB - Et), _2DCollisionType.Reflect),
                            (this.Goal2 = this.boundsField.addPoint(new _2DPoint_2DPoint(N.FR - 0.3 * N.WW, N.HT + 200 * N.SP), _2DCollisionType.Goal)),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FL + 0.3 * N.WW, N.HT + 200 * N.SP), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FL + 0.3 * N.WW, N.FB - Et), _2DCollisionType.Reflect),
                            this.boundsField.addPoint(new _2DPoint_2DPoint(N.FL + Et, N.FB - Et), _2DCollisionType.Reflect),
                            (this.boundsBot = new _2DPoligon()),
                            this.boundsBot.addPoint(new _2DPoint_2DPoint(N.FL + Et, N.FT + Et), _2DCollisionType.Shift),
                            this.boundsBot.addPoint(new _2DPoint_2DPoint(N.FR - Et, N.FT + Et), _2DCollisionType.Shift),
                            this.boundsBot.addPoint(new _2DPoint_2DPoint(N.FR - Et, N.FT + 0.5 * N.HW), _2DCollisionType.Shift),
                            this.boundsBot.addPoint(new _2DPoint_2DPoint(N.FL + Et, N.FT + 0.5 * N.HW), _2DCollisionType.Shift),
                            (this.boundsUser = new _2DPoligon()),
                            this.boundsUser.addPoint(new _2DPoint_2DPoint(N.FL + Et, N.FT + 0.5 * N.HW), _2DCollisionType.Shift),
                            this.boundsUser.addPoint(new _2DPoint_2DPoint(N.FR - Et, N.FT + 0.5 * N.HW), _2DCollisionType.Shift),
                            this.boundsUser.addPoint(new _2DPoint_2DPoint(N.FR - Et, N.FB - Et), _2DCollisionType.Shift),
                            this.boundsUser.addPoint(new _2DPoint_2DPoint(N.FL + Et, N.FB - Et), _2DCollisionType.Shift),
                            _2DGoal.setListenerGoal(
                                new _2DGoal.ListenerGoal()._body({ ctx: this, Goal: _1 }, "onGoal", function (t, e) {
                                    t.stopBot(),
                                        e == t.Goal1
                                            ? (MediaAudio.get().playSound(App.soundPuckDrop),
                                              MediaAudio.get().playSound(App.soundPuckScored),
                                              t.viewGame.getLabelGoal().setConturParam(!0, 4278664345, 20 * N.SP, 20 * N.SP),
                                              (GameScore.accountHero = GameScore.accountHero + 1),
                                              t.viewGame.getScoreUser().setText("" + GameScore.accountHero))
                                            : e == t.Goal2 &&
                                              (MediaAudio.get().playSound(App.soundPuckDrop),
                                              MediaAudio.get().playSound(App.soundPuckMissed),
                                              t.viewGame.getLabelGoal().setConturParam(!0, 4292945189, 20 * N.SP, 20 * N.SP),
                                              (GameScore.accountOppon = GameScore.accountOppon + 1),
                                              t.viewGame.getScoreBot().setText("" + GameScore.accountOppon)),
                                        GameScore.accountOppon == GameScore.accountEnd || GameScore.accountHero == GameScore.accountEnd
                                            ? (t.viewGame.getObjPuck().setVisible(!1),
                                              t.viewGame.getObjPuck().setVelocity(0, 0),
                                              t.viewGame.getObjPuck().Pos.set(N.FL + 0.5 * N.WW, N.FT + 0.5 * N.HW),
                                              t.runOnUiThread(function () {
                                                  var e = App.intentDialogResult.clone();
                                                  e.putExtra(Ct, GameScore.accountHero), e.putExtra(Pt, GameScore.accountOppon), t.startActivityForResult(e, St.CodReqDialogPause), _2DGoal.Reset(), GameScore.reset();
                                              }))
                                            : (t.viewGame.getObjPuck().setVisible(!1),
                                              t.viewGame.getObjPuck().setVelocity(0, 0),
                                              e == t.Goal1
                                                  ? t.viewGame.getObjPuck().Pos.set(N.FL + 0.5 * N.WW, N.FT + 0.5 * N.HW - 160 * N.SP)
                                                  : e == t.Goal2 && t.viewGame.getObjPuck().Pos.set(N.FL + 0.5 * N.WW, N.FT + 0.5 * N.HW + 160 * N.SP),
                                              new Animation()
                                                  .setBackground(!1)
                                                  .setDuration(2e3)
                                                  .setInterpolator(new Dt(3))
                                                  .setAnimationCaller(
                                                      new Animation.AnimationCaller()._body([Number, Number], "call", function (e, n) {
                                                          t.viewGame.getLabelGoal().setRotate(1080 * n), t.viewGame.getLabelGoal().setSize(N.WW, 100 * N.SP + 100 * N.SP * n), Animation.AnimationCaller.call(this, e, n);
                                                      })
                                                  )
                                                  .setAnimationListener(
                                                      new Animation.AnimationListener()._body(
                                                          "beforeAnimation",
                                                          function () {
                                                              t.viewGame.getLabelGoal().setVisible(!0), Animation.AnimationListener.beforeAnimation(this);
                                                          },
                                                          "afterAnimation",
                                                          function () {
                                                              t.handler.postDelayed(function () {
                                                                  t.viewGame.getLabelGoal().setVisible(!1), t.viewGame.getObjPuck().setVisible(!0), _2DGoal.Reset(), t.startBot();
                                                              }, 1e3),
                                                                  Animation.AnimationListener.afterAnimation(this);
                                                          }
                                                      )
                                                  )
                                                  .run());
                                })
                            );
                    },
                    function (t) {
                        t.timeLast = System.currentTimeMillis();
                    },
                    function (t) {
                        t.timeNew = 0;
                    },
                    "addPuckAction",
                    function (t) {
                        (this.timeNew = System.currentTimeMillis()), this.timeNew - this.timeLast > 20 && (MediaAudio.get().playSound(App.soundPing), (this.timeLast = this.timeNew));
                    },
                    "addParticles",
                    function (t) {},
                    "setRotate",
                    function (t) {}
                ),
                _interface(SceneDialog_OnLightEndListener)._body("onLightEnd", function () {}),
                _interface(OnDarkEndListener)._body("onDarkEnd", function () {}),
                _class(SceneDialog_SceneDialog)
                    ._extends(SceneView)
                    ._body(
                        "_init",
                        function () {
                            (this.alphaAnim = null), (this.paintBack = new S()), (this.alphaCurrent = 0), (this.alphaLimit = 0), (this.alphaSpeed = 0);
                        },
                        "_static",
                        function () {
                            this.TAG = "SceneDialog";
                        },
                        [Activity, Number, Number],
                        SceneDialog_SceneDialog.name,
                        function (t, e, n) {
                            SceneDialog_SceneDialog._init(this, t, 0.001, e, n);
                        },
                        [Activity, Number, Number, Number],
                        SceneDialog_SceneDialog.name,
                        function (t, e, n, i) {
                            SceneView._init(this, t),
                                SceneDialog_SceneDialog.Initialize(this),
                                (this.alphaCurrent = n),
                                (this.alphaLimit = i),
                                (this.alphaSpeed = e),
                                this.paintBack.setXfermode(new w(A.Mode.COPY)),
                                this.paintBack.setColor(p.BLACK),
                                this.paintBack.setStyle(S.Style.FILL_AND_STROKE),
                                this.paintBack.setAlpha(this.alphaCurrent);
                        },
                        "onDraw",
                        function (t) {
                            t.drawPaint(this.paintBack), SceneView.onDraw(this, t);
                        },
                        "onTouchEvent",
                        function (t) {
                            return SceneView.onTouchEvent(this, t);
                        },
                        [SceneDialog_OnLightEndListener],
                        "light",
                        function (t) {
                            this.light(-Math.abs(this.alphaSpeed), t);
                        },
                        [Number, SceneDialog_OnLightEndListener],
                        "light",
                        function (t, e) {
                            this.light(this.alphaLimit, t, e);
                        },
                        [Number, Number, SceneDialog_OnLightEndListener],
                        "light",
                        function (t, e, n) {
                            Loger.get().d(SceneDialog_SceneDialog.TAG, "light(alphaLimit, speed, listener)"), null != this.alphaAnim && this.alphaAnim.out(), (this.alphaAnim = new AlphaAnimation(t, e, null, n, this));
                        },
                        [OnDarkEndListener],
                        "dark",
                        function (t) {
                            this.dark(Math.abs(this.alphaSpeed), t);
                        },
                        [Number, OnDarkEndListener],
                        "dark",
                        function (t, e) {
                            this.dark(this.alphaLimit, t, e);
                        },
                        [Number, Number, OnDarkEndListener],
                        "dark",
                        function (t, e, n) {
                            Loger.get().d(SceneDialog_SceneDialog.TAG, "dark(alphaLimit, speed, listener)"), null != this.alphaAnim && this.alphaAnim.out(), (this.alphaAnim = new AlphaAnimation(t, e, n, null, this));
                        }
                    ),
                _class(AlphaAnimation)
                    ._extends(Animation)
                    ._instance(
                        "_static",
                        function () {
                            this.TAG = "AlphaAnimation";
                        },
                        function (t) {
                            (t.dialog = null), (t.alphaLimit = 0), (t.alphaCurrent = 0), (t.darkEndListener = null);
                        },
                        "setDarkEndListener",
                        function (t) {
                            this.darkEndListener = t;
                        },
                        function (t) {
                            t.lightEndListener = null;
                        },
                        "setLightEndListener",
                        function (t) {
                            this.lightEndListener = t;
                        },
                        AlphaAnimation.name,
                        function (t, e, n, i, o) {
                            Animation._init(this),
                                AlphaAnimation.Initialize(this),
                                Loger.get().d(AlphaAnimation.TAG, "AlphaAnimation(alphaLimit, alphaSpeed, SceneDialog)"),
                                (this.alphaLimit = t),
                                (this.dialog = o),
                                this.setName(AlphaAnimation.TAG),
                                this.setSpeed(Math.abs(e)),
                                this.setDarkEndListener(n),
                                this.setLightEndListener(i),
                                e > 0 ? this.dark() : this.light(),
                                this.run();
                        },
                        "dark",
                        function () {
                            this.setAnimationListener(
                                new AnimationListener()._body({ anim: this }, "afterAnimation", function (t) {
                                    null != t.darkEndListener && t.darkEndListener.onDarkEnd(), (t.darkEndListener = null);
                                })
                            ),
                                this.setAnimationCaller(
                                    new AnimationCaller()._body({ anim: this, progressPrev: _1, progressCurr: _2 }, [Number, Number], "call", function (t, e, n) {
                                        (t.alphaCurrent = parseInt(t.alphaLimit * n)), t.dialog.paintBack.setAlpha(t.alphaCurrent), t.dialog.invalidate();
                                    })
                                );
                        },
                        "light",
                        function () {
                            this.setAnimationListener(
                                new AnimationListener()._body({ anim: this }, "afterAnimation", function (t) {
                                    null != t.lightEndListener && t.lightEndListener.onLightEnd(), (t.lightEndListener = null);
                                })
                            ),
                                this.setAnimationCaller(
                                    new AnimationCaller()._body({ anim: this, progressPrev: _1, progressCurr: _2 }, [Number, Number], "call", function (t, e, n) {
                                        (t.alphaCurrent = parseInt(t.alphaLimit * (1 - n))), t.dialog.paintBack.setAlpha(t.alphaCurrent), t.dialog.invalidate();
                                    })
                                );
                        },
                        "out",
                        function () {
                            Animation.out(this), (this.lightEndListener = null), (this.darkEndListener = null);
                        },
                        "interrupt",
                        function () {
                            Animation.interrupt(this), (this.lightEndListener = null), (this.darkEndListener = null);
                        }
                    ),
                _class(SceneDialogLike)
                    ._extends(SceneDialog_SceneDialog)
                    ._body(
                        function (t) {
                            t.buttonYes = null;
                        },
                        "getButtonYes",
                        function () {
                            return this.buttonYes;
                        },
                        function (t) {
                            t.buttonNo = null;
                        },
                        "getButtonNo",
                        function () {
                            return this.buttonNo;
                        },
                        function (t) {
                            t.buttonClose = null;
                        },
                        "getButtonClose",
                        function () {
                            return this.buttonClose;
                        },
                        [Context],
                        SceneDialogLike.name,
                        function (t) {
                            SceneDialog_SceneDialog._init(this, t, 0, 150), SceneDialogLike.Initialize(this);
                        },
                        [Activity],
                        SceneDialogLike.name,
                        function (t) {
                            SceneDialog_SceneDialog._init(this, t, 0, 150);
                        },
                        [Activity, Number, Number],
                        SceneDialogLike.name,
                        function (t, e, n) {
                            SceneDialog_SceneDialog._init(this, t, e, n), SceneDialogLike.Initialize(this);
                            var i = new Back(p.rgb(13, 17, 35));
                            i.setParam(0.5 * N.WT, 0.5 * N.HT, 960 * N.SD, 320 * N.SD), i.setCorner(20 * N.SD), i.setBorder(4, p.argb(100, 255, 255, 255));
                            var o = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_close));
                            (this.buttonClose = new BmpButton(o, null)), this.buttonClose.setParam(0.5 * N.WT + 400 * N.SD, 0.5 * N.HT - 100 * N.SD, o.getWidth(), o.getHeight());
                            var s = new Label(this.getActivityCreate().getString(bt.string.like).toUpperCase(), Typeface.create("sans-serif-condensed", Typeface.NORMAL), p.WHITE, S.Align.CENTER);
                            s.setParam(0.5 * N.WT - 0 * N.SD, 0.5 * N.HT - 0 * N.SD, 960 * N.SD, 30 * N.SD),
                                (o = Bitmap.createBitmap(N.WT / 5, N.HT / 10, Bitmap.Config.ARGB_8888)),
                                (this.buttonYes = new BmpButton(o, null)),
                                this.buttonYes.setParam(0.7 * N.WT, 0.6 * N.HT, o.getWidth(), o.getHeight()),
                                this.buttonYes.addLabel(
                                    new Label(
                                        this.getActivityCreate().getString(bt.string.dialog_yes).toUpperCase(),
                                        Typeface.create("sans-serif-condensed", Typeface.NORMAL),
                                        p.rgb(110, 110, 110),
                                        S.Align.CENTER,
                                        0.5 * o.getWidth(),
                                        0.5 * o.getHeight(),
                                        0.35 * o.getHeight(),
                                        1
                                    )
                                ),
                                (o = Bitmap.createBitmap(N.WT / 5, N.HT / 10, Bitmap.Config.ARGB_8888)),
                                (this.buttonNo = new BmpButton(o, null)),
                                this.buttonNo.setParam(0.3 * N.WT, 0.6 * N.HT, o.getWidth(), o.getHeight()),
                                this.buttonNo.addLabel(
                                    new Label(
                                        this.getActivityCreate().getString(bt.string.dialog_no).toUpperCase(),
                                        Typeface.create("sans-serif-condensed", Typeface.NORMAL),
                                        p.rgb(110, 110, 110),
                                        S.Align.CENTER,
                                        0.5 * o.getWidth(),
                                        0.5 * o.getHeight(),
                                        0.35 * o.getHeight(),
                                        1
                                    )
                                ),
                                this.attachCommun(i),
                                this.attachCommun(this.buttonClose),
                                this.attachCommun(s),
                                this.attachCommun(this.buttonYes),
                                this.attachCommun(this.buttonNo);
                        }
                    ),
                _class(ScreenDialogLike)
                    ._extends(ScreenDialog)
                    ._body("onCreate", function (t) {
                        ScreenDialog.onCreate(this, t);
                        var e = new SceneDialogLike(this.thisA);
                        e.getButtonNo().setBmpButtonClickListener(
                            new BmpButton.BmpButtonClickListener()._body({ ctx: this, event: _1, pressed: _2, switched: _3 }, "onClick", function (t, e, n, i) {
                                return MediaAudio.get().playSound("click"), t.setResult(_t), t.finish(), !0;
                            })
                        ),
                            e.getButtonYes().setBmpButtonClickListener(
                                new BmpButton.BmpButtonClickListener()._body({ ctx: this, event: _1, pressed: _2, switched: _3 }, "onClick", function (t, e, n, i) {
                                    return MediaAudio.get().playSound("click"), t.setResult(yt), t.finish(), !0;
                                })
                            ),
                            e.getButtonClose().setBmpButtonClickListener(
                                new BmpButton.BmpButtonClickListener()._body({ ctx: this, event: _1, pressed: _2, switched: _3 }, "onClick", function (t, e, n, i) {
                                    return MediaAudio.get().playSound("click"), t.setResult(_t), t.finish(), !0;
                                })
                            ),
                            this.setContentView(e);
                    }),
                _class(SceneMenu)
                    ._extends(SceneViewSurface)
                    ._body(
                        function (t) {
                            t.buttonPlayerOne = null;
                        },
                        "getButtonPlayerOne",
                        function () {
                            return this.buttonPlayerOne;
                        },
                        function (t) {
                            t.buttonPlayerTwo = null;
                        },
                        "getButtonPlayerTwo",
                        function () {
                            return this.buttonPlayerTwo;
                        },
                        function (t) {
                            t.buttonOptions = null;
                        },
                        "getButtonOptions",
                        function () {
                            return this.buttonOptions;
                        },
                        function (t) {
                            t.buttonExit = null;
                        },
                        "getButtonExit",
                        function () {
                            return this.buttonExit;
                        },
                        SceneMenu.name,
                        function (t) {
                            SceneViewSurface._init(this, t), SceneMenu.Initialize(this), this.init(t);
                        },
                        "init",
                        function (t) {
                            var e = 4292553121,
                                n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_options));
                            (this.buttonOptions = new GlowButton(e, 20 * N.SP, 10 * N.SP)),
                                this.buttonOptions.setBitmapIconOrigin(n),
                                this.buttonOptions.setParam(0.9 * this.P.WT, 0.9 * this.P.HT, 200 * N.SP, 200 * N.SP),
                                (n = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_logout))),
                                (this.buttonExit = new GlowButton(e, 20 * N.SP, 10 * N.SP)),
                                this.buttonExit.setBitmapIconOrigin(n),
                                this.buttonExit.setParam(0.1 * this.P.WW, 0.9 * this.P.HT, 200 * N.SP, 1.8 * n.getHeight()),
                                (this.buttonPlayerOne = new GlowButton(e, 20 * N.SP, 10 * N.SP)),
                                this.buttonPlayerOne.setText(this.getContext().getString(bt.string.title_player_one)),
                                this.buttonPlayerOne.setParam(0.5 * this.P.WT, 0.5 * this.P.HT - 0.2 * this.P.WT, 0.8 * this.P.WT, 200 * N.SP),
                                (this.buttonPlayerTwo = new GlowButton(e, 20 * N.SP, 10 * N.SP)),
                                this.buttonPlayerTwo.setText(this.getContext().getString(bt.string.title_player_two)),
                                this.buttonPlayerTwo.setParam(0.5 * this.P.WT, 0.5 * this.P.HT, 0.8 * this.P.WT, 200 * N.SP),
                                this.attachCommun(this.buttonPlayerOne),
                                this.attachCommun(this.buttonPlayerTwo),
                                this.attachCommun(this.buttonOptions),
                                this.attachCommun(this.buttonExit);
                        }
                    ),
                _class(ScreenMenu)
                    ._extends(ScreenAdvt)
                    ._body(
                        function (t) {
                            t.preferences = null;
                        },
                        "onCreate",
                        function (t) {
                            var e = this;
                            ScreenAdvt.onCreate(this, t),
                                this.thisA.runOnUiThread(function () {
                                    e.getAdvt().consentAsk(), e.getAdvt().init();
                                }),
                                (this.preferences = this.getSharedPreferences("COMMENT", Activity.MODE_PRIVATE));
                            var n = this.preferences.edit();
                            this.preferences.contains("isComment") || (n.putBoolean("isComment", !1), n.apply());
                            var i = new SceneMenu(this.thisA);
                            this.setContentView(i),
                                i.getButtonPlayerOne().setBmpButtonClickListener(function (t, n, i) {
                                    return e.startActivitySettings(1), !0;
                                }),
                                i.getButtonPlayerTwo().setBmpButtonClickListener(function (t, n, i) {
                                    return e.startActivitySettings(2), !0;
                                }),
                                i.getButtonOptions().setBmpButtonClickListener(function (t, n, i) {
                                    MediaAudio.get().playSound("click");
                                    var o = App.intentDialogOptions.clone();
                                    return (
                                        o.putExtra(Advt.EXTRA_BANNER, 0),
                                        o.putExtra(Advt.EXTRA_BANNER_ID, App.IdBanner),
                                        o.putExtra(Advt.EXTRA_BANNER_SIZE, Advt.BannerSize.NARROW),
                                        o.putExtra(Advt.EXTRA_BANNER_GRAVITY_IN_ACTIVITY, W.CENTER_HORIZONTAL | W.TOP),
                                        e.startActivityForResult(o, St.CodReqDialogPause),
                                        !0
                                    );
                                }),
                                i.getButtonExit().setBmpButtonClickListener(function (t, n, i) {
                                    return MediaAudio.get().playSound("click"), e.validateComment(), !0;
                                });
                        },
                        "startActivitySettings",
                        function (t) {
                            var e = App.intentSettings.clone();
                            e.putExtra(Advt.EXTRA_BANNER, 1e3),
                                e.putExtra(Advt.EXTRA_BANNER_ID, App.IdBanner),
                                e.putExtra(Advt.EXTRA_BANNER_SIZE, Advt.BannerSize.NARROW),
                                e.putExtra(Advt.EXTRA_BANNER_GRAVITY_IN_ACTIVITY, W.CENTER_HORIZONTAL | W.TOP),
                                e.putExtra(ScreenGame.EXTRA_MODE, t),
                                this.startActivity(e);
                        },
                        "validateComment",
                        function () {
                            if (this.ConnectionHelper.isConnected() && !this.preferences.getBoolean("isComment", !1)) {
                                var t = App.intentDialogLike.clone();
                                this.startActivityForResult(t, St.CodReqDialogPause);
                            } else this.finish();
                        }
                    ),
                _class(SceneSettings)
                    ._extends(SceneViewSurface)
                    ._body(
                        function (t) {
                            t.labelCaption = null;
                        },
                        "getLabelCaption",
                        function () {
                            return this.labelCaption;
                        },
                        function (t) {
                            t.buttonBack = null;
                        },
                        "getButtonBack",
                        function () {
                            return this.buttonBack;
                        },
                        function (t) {
                            t.buttonEasy = null;
                        },
                        "getButtonEasy",
                        function () {
                            return this.buttonEasy;
                        },
                        function (t) {
                            t.buttonMedium = null;
                        },
                        "getButtonMedium",
                        function () {
                            return this.buttonMedium;
                        },
                        function (t) {
                            t.buttonHard = null;
                        },
                        "getButtonHard",
                        function () {
                            return this.buttonHard;
                        },
                        function (t) {
                            t.buttonVeryHard = null;
                        },
                        "getButtonVeryHard",
                        function () {
                            return this.buttonVeryHard;
                        },
                        function (t) {
                            t.buttonOptions = null;
                        },
                        "getButtonOptions",
                        function () {
                            return this.buttonOptions;
                        },
                        function (t) {
                            t.buttonExit = null;
                        },
                        "getButtonExit",
                        function () {
                            return this.buttonExit;
                        },
                        function (t) {
                            t.buttonInfo = null;
                        },
                        "getButtonInfo",
                        function () {
                            return this.buttonInfo;
                        },
                        SceneSettings.name,
                        function (t) {
                            SceneViewSurface._init(this, t), SceneSettings.Initialize(this), this.init(t);
                        },
                        "init",
                        function (t) {
                            var e = 4282268879,
                                n = 30 * N.SP,
                                i = N.WW,
                                o = 200 * N.SP,
                                s = new Back(p.BLACK);
                            s.setParam(0.5 * N.WT, 0.5 * N.HT, N.WT, N.HT),
                                this.attachCommun(s),
                                (this.labelCaption = new Label(this.getActivityCreate().getString(bt.string.difficulty).toUpperCase(), Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, S.Align.CENTER)),
                                this.labelCaption.setParam(0.5 * N.WT, 0.5 * N.HT - 500 * N.SD, 150 * N.SD, 80 * N.SD),
                                this.labelCaption.setConturParam(!0, e, 20 * N.SD, 20 * N.SD);
                            var r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_back));
                            (this.buttonBack = new GlowButton(e, n, 10 * N.SP)),
                                this.buttonBack.setBitmapIconOrigin(r),
                                this.buttonBack.setParam(100 * N.SP * 0.5, N.HT - 100 * N.SP * 0.5, 200 * N.SP, 200 * N.SP),
                                (this.buttonEasy = new GlowButton(4279816472, n, 10 * N.SP)),
                                this.buttonEasy.setText(this.getContext().getString(bt.string.easy).toUpperCase()),
                                this.buttonEasy.setParam(0.5 * N.WT, 0.5 * N.HT - 200 * N.SP, i, o),
                                (this.buttonMedium = new GlowButton(4292201762, n, 10 * N.SP)),
                                this.buttonMedium.setText(this.getContext().getString(bt.string.medium).toUpperCase()),
                                this.buttonMedium.setParam(0.5 * N.WT, 0.5 * N.HT, i, o),
                                (this.buttonHard = new GlowButton(4292184866, n, 10 * N.SP)),
                                this.buttonHard.setText(this.getContext().getString(bt.string.hard).toUpperCase()),
                                this.buttonHard.setParam(0.5 * N.WT, 0.5 * N.HT + 200 * N.SP, i, o),
                                (this.buttonVeryHard = new GlowButton(4292161826, n, 10 * N.SP)),
                                this.buttonVeryHard.setText(this.getContext().getString(bt.string.very_hard).toUpperCase()),
                                this.buttonVeryHard.setParam(0.5 * N.WT, 0.5 * N.HT + 400 * N.SP, i, o),
                                (r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_options))),
                                (this.buttonOptions = new GlowButton(e, n, 4 * N.SP)),
                                this.buttonOptions.setBitmapIconOrigin(r),
                                this.buttonOptions.setParam(N.WT - 0.5 * o, N.HT - 0.5 * o, o, o),
                                (r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_logout))),
                                (this.buttonExit = new GlowButton(e, n, 4 * N.SP)),
                                this.buttonExit.setBitmapIconOrigin(r),
                                this.buttonExit.setParam(0.5 * o, N.HT - 0.5 * o, o, o),
                                (r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_info))),
                                (this.buttonInfo = new GlowButton(e, n, 4 * N.SP)),
                                this.buttonInfo.setBitmapIconOrigin(r),
                                this.buttonInfo.setParam(0.5 * o, N.HT - 0.5 * o, o, o),
                                this.attachCommun(this.labelCaption),
                                this.attachCommun(this.buttonEasy),
                                this.attachCommun(this.buttonMedium),
                                this.attachCommun(this.buttonHard),
                                this.attachCommun(this.buttonVeryHard),
                                this.attachCommun(this.buttonInfo),
                                this.attachCommun(this.buttonOptions);
                        }
                    ),
                _class(ScreenSettings)
                    ._extends(ScreenAdvt)
                    ._body(
                        function (t) {
                            t.preferences = null;
                        },
                        function (t) {
                            t.sceneSettings = null;
                        },
                        "onCreate",
                        function (t) {
                            var e = this;
                            ScreenAdvt.onCreate(this, t), (this.preferences = this.getSharedPreferences("COMMENT", Activity.MODE_PRIVATE));
                            var n = this.preferences.edit();
                            this.preferences.contains("isComment") || (n.putBoolean("isComment", !1), n.apply()),
                                (this.sceneSettings = new SceneSettings(this.thisA)),
                                this.setContentView(this.sceneSettings),
                                this.sceneSettings.getButtonEasy().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        return MediaAudio.get().playSound(App.soundClick), e.startActivityGame(10), !0;
                                    })
                                ),
                                this.sceneSettings.getButtonMedium().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        return MediaAudio.get().playSound(App.soundClick), e.startActivityGame(40), !0;
                                    })
                                ),
                                this.sceneSettings.getButtonHard().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        return MediaAudio.get().playSound(App.soundClick), e.startActivityGame(70), !0;
                                    })
                                ),
                                this.sceneSettings.getButtonVeryHard().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        return MediaAudio.get().playSound(App.soundClick), e.startActivityGame(100), !0;
                                    })
                                ),
                                this.sceneSettings.getButtonOptions().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        MediaAudio.get().playSound(App.soundClick);
                                        var o = App.intentDialogOptions.clone();
                                        return e.startActivityForResult(o, St.CodReqDialogPause), !0;
                                    })
                                ),
                                this.sceneSettings.getButtonExit().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, e, n) {
                                        return MediaAudio.get().playSound(App.soundClick), history.back(), !0;
                                    })
                                ),
                                this.sceneSettings.getButtonInfo().setBmpButtonClickListener(
                                    BmpButtonClickListener._lambda(function (t, n, i) {
                                        MediaAudio.get().playSound(App.soundClick);
                                        var o = App.intentDialogInfo.clone();
                                        return e.startActivityForResult(o, St.CodReqDialogPause), !0;
                                    })
                                );
                        },
                        "onResume",
                        function () {
                            var t = new AdvtConfig();
                            (t.id = App.getIdBannerTop()),
                                (t.sizeBanner = App.getSizeBannerTop()),
                                (t.gravityBanner = W.CENTER_HORIZONTAL | W.TOP),
                                this.getAdvt().showBanner(t),
                                (t.id = App.getIdBannerLeft()),
                                (t.sizeBanner = App.getSizeBannerLeft()),
                                (t.gravityBanner = W.LEFT | W.CENTER_VERTICAL),
                                this.getAdvt().showBanner(t),
                                (t.id = App.getIdBannerRight()),
                                (t.sizeBanner = App.getSizeBannerRight()),
                                (t.gravityBanner = W.RIGHT | W.CENTER_VERTICAL),
                                this.getAdvt().showBanner(t),
                                ScreenAdvt.onResume(this);
                        },
                        "startActivityGame",
                        function (t) {
                            var e = App.intentGame.clone();
                            e.putExtra(ScreenGame.EXTRA_DIFFICULTY, t), this.startActivity(e);
                        },
                        "validateComment",
                        function () {
                            if (this.ConnectionHelper.isConnected() && !this.preferences.getBoolean("isComment", !1)) {
                                var t = App.intentDialogLike.clone();
                                this.startActivityForResult(t, St.CodReqDialogPause);
                            } else this.finish();
                        }
                    );
            globalThis.Map;
            function SceneDialogInfo() {
                SceneDialogInfo._init.apply(SceneDialogInfo, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ScreenDialogInfo() {
                ScreenDialogInfo._init.apply(ScreenDialogInfo, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function App() {
                App._init.apply(App, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneEclipse() {
                SceneEclipse._init.apply(SceneEclipse, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ActivityScreenHub_createForOfIteratorHelperLoose(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function ActivityScreenHub_unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ActivityScreenHub_arrayLikeToArray(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ActivityScreenHub_arrayLikeToArray(t, e);
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                        return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function ActivityScreenHub_arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function ActivityScreenHub() {
                ActivityScreenHub._init.apply(ActivityScreenHub, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function SceneSplash() {
                SceneSplash._init.apply(SceneSplash, [this].concat(Array.prototype.slice.call(arguments)));
            }
            function ActivityMain() {
                ActivityMain._init.apply(ActivityMain, [this].concat(Array.prototype.slice.call(arguments)));
            }
            _class(SceneDialogInfo)
                ._extends(SceneDialog_SceneDialog)
                ._instance(
                    function (t) {
                        t.buttonClose = null;
                    },
                    "getButtonClose",
                    function () {
                        return this.buttonClose;
                    },
                    [Activity],
                    SceneDialogInfo.name,
                    function (t) {
                        SceneDialogInfo._init(this, t, 0, 150);
                    },
                    [Activity, Number, Number],
                    SceneDialogInfo.name,
                    function (t, e, n) {
                        SceneDialog_SceneDialog._init(this, t, e, n), SceneDialogInfo.Initialize(this);
                        var i = new GlowButton(4278217844, 30 * N.SP, 10 * N.SP);
                        i.setParam(0.5 * N.WT, 0.5 * N.HT, 0.95 * N.WW, 0.3 * N.HW);
                        var o = new Label(t.getString(bt.string.app_name), Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, S.Align.LEFT);
                        o.setParam(0.5 * N.WT - 290 * N.SD, 0.5 * N.HT - 150 * N.SD, 150 * N.SD, 50 * N.SD);
                        var s = new Label("Ver: " + t.getString(bt.string.app_ver), Typeface.create("sans-serif", Typeface.BOLD), p.WHITE, S.Align.LEFT);
                        s.setParam(0.5 * N.WT - 290 * N.SD, 0.5 * N.HT - 90 * N.SD, 150 * N.SD, 50 * N.SD);
                        var r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.button_close));
                        (this.buttonClose = new BmpButton(r, null)), this.buttonClose.setParam(0.5 * N.WT + 320 * N.SD, 0.5 * N.HT - 150 * N.SD, r.getWidth(), r.getHeight());
                        var a = new Label(this.getActivityCreate().getString(bt.string.info_text_1), Typeface.create("sans-serif-condensed", Typeface.NORMAL), p.WHITE, S.Align.CENTER);
                        a.setParam(0.5 * N.WT - 0 * N.SD, 0.5 * N.HT - 0 * N.SD, 960 * N.SD, 30 * N.SD);
                        var c = new Label(this.getActivityCreate().getString(bt.string.info_text_2), Typeface.create("sans-serif-condensed", Typeface.NORMAL), p.WHITE, S.Align.CENTER);
                        c.setParam(0.5 * N.WT - 0 * N.SD, 0.5 * N.HT + 40 * N.SD, 960 * N.SD, 30 * N.SD);
                        var l = new BackImage((r = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.logo_radbrothers))));
                        l.setParam(0.5 * N.WT + 0 * N.SD, 0.5 * N.HT + 150 * N.SD, r.getWidth(), r.getHeight()),
                            this.attachCommun(i),
                            this.attachCommun(o),
                            this.attachCommun(s),
                            this.attachCommun(this.buttonClose),
                            this.attachCommun(a),
                            this.attachCommun(c),
                            this.attachCommun(l);
                    }
                ),
                _class(ScreenDialogInfo)
                    ._extends(ScreenDialog)
                    ._instance(
                        "_static",
                        function () {
                            this.EXTRA_INT_COUNT_HELPS = "extra_int_count_helps";
                        },
                        "onCreate",
                        function (t) {
                            ScreenDialog.onCreate(this, t);
                            var e = new SceneDialogInfo(this.thisA);
                            e.getButtonClose().setBmpButtonClickListener(
                                new BmpButtonClickListener()._instance({ scr: this, event: _1, pressed: _2, switched: _3 }, "onClick", function (t, e, n, i) {
                                    return MediaAudio.get().playSound("click"), t.finish(), !0;
                                })
                            ),
                                this.setContentView(e);
                        },
                        "onResume",
                        function () {
                            ScreenDialog.onResume(this);
                        },
                        "onPause",
                        function () {
                            ScreenDialog.onPause(this);
                        },
                        "onDestroy",
                        function () {
                            ScreenDialog.onDestroy(this);
                        }
                    ),
                _class(App)
                    ._extends(MultiDexApplication)
                    ._body(
                        _static,
                        function (t) {
                            t.intentDialogInfo = null;
                        },
                        _static,
                        function (t) {
                            t.intentDialogOptions = null;
                        },
                        _static,
                        function (t) {
                            t.intentDialogLike = null;
                        },
                        _static,
                        function (t) {
                            t.intentSelect = null;
                        },
                        _static,
                        function (t) {
                            t.intentSettings = null;
                        },
                        _static,
                        function (t) {
                            t.intentGame = null;
                        },
                        _static,
                        function (t) {
                            t.intentDialogPause = null;
                        },
                        _static,
                        function (t) {
                            t.intentDialogResult = null;
                        },
                        _static,
                        "getIdBannerDialogTop",
                        function () {
                            return isMobile() ? "R-A-1725757-25" : "R-A-1725757-26";
                        },
                        _static,
                        "getSizeBannerDialogTop",
                        function () {
                            return isMobile() ? "100%_100px" : "970px_250px";
                        },
                        _static,
                        "getIdBannerTop",
                        function () {
                            return isMobile() ? "R-A-1725757-21" : "R-A-1725757-22";
                        },
                        _static,
                        "getSizeBannerTop",
                        function () {
                            return isMobile() ? "100%_50px" : "970px_120px";
                        },
                        _static,
                        "getIdBannerLeft",
                        function () {
                            return isMobile() ? "" : "R-A-1725757-23";
                        },
                        _static,
                        "getSizeBannerLeft",
                        function () {
                            return isMobile() ? "0px_0px" : "240px_auto";
                        },
                        _static,
                        "getIdBannerRight",
                        function () {
                            return isMobile() ? "" : "R-A-1725757-24";
                        },
                        _static,
                        "getSizeBannerRight",
                        function () {
                            return isMobile() ? "0px_0px" : "240px_auto";
                        },
                        _static,
                        "getIdInterstitial",
                        function () {
                            return "R-A-1725757-4";
                        },
                        _static,
                        "getIdRewarded",
                        function () {
                            return "";
                        },
                        _static,
                        function (t) {
                            t.folderSave = "save";
                        },
                        _static,
                        function (t) {
                            t.foldersCash = new Array();
                        },
                        _static,
                        function (t) {
                            t.foldersFiles = new Array()[App.folderSave];
                        },
                        _static,
                        function (t) {
                            t.soundClick = "sound_click";
                        },
                        _static,
                        function (t) {
                            t.soundPing = "sound_ping";
                        },
                        _static,
                        function (t) {
                            t.soundPuckDrop = "sound_puck_drop";
                        },
                        _static,
                        function (t) {
                            t.soundPuckScored = "sound_puck_scored";
                        },
                        _static,
                        function (t) {
                            t.soundPuckMissed = "sound_puck_missed";
                        },
                        _static,
                        function (t) {
                            t.soundWon = "sound_won";
                        },
                        _static,
                        function (t) {
                            t.soundLose = "sound_lose";
                        },
                        App.name,
                        function () {
                            MultiDexApplication._init(this), App.Initialize(this);
                        },
                        "onCreate",
                        function () {
                            MultiDexApplication.onCreate(this), s.d("App", "AirHockey onCreate"), this.init();
                        },
                        "init",
                        function () {
                            (App.intentSelect = new Intent_Intent(this, ScreenMenu.class)),
                                App.intentSelect.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_CLEAR_TOP),
                                (App.intentSettings = new Intent_Intent(this, ScreenSettings.class)),
                                App.intentSettings.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_CLEAR_TOP),
                                (App.intentGame = new Intent_Intent(this, ScreenGame.class)),
                                App.intentGame.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_CLEAR_TOP),
                                (App.intentDialogInfo = new Intent_Intent(this, ScreenDialogInfo.class)),
                                App.intentDialogInfo.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_NO_HISTORY),
                                (App.intentDialogOptions = new Intent_Intent(this, ScreenDialogSettingsMenu.class)),
                                App.intentDialogOptions.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_NO_HISTORY),
                                (App.intentDialogLike = new Intent_Intent(this, ScreenDialogLike.class)),
                                App.intentDialogLike.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_NO_HISTORY),
                                (App.intentDialogPause = new Intent_Intent(this, ScreenDialogSettingsGame.class)),
                                App.intentDialogPause.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_NO_HISTORY),
                                (App.intentDialogResult = new Intent_Intent(this, ScreenDialogResult.class)),
                                App.intentDialogResult.setFlags(Intent_Intent.FLAG_ACTIVITY_NO_ANIMATION | Intent_Intent.FLAG_ACTIVITY_NO_HISTORY),
                                K.get().init(this, App.foldersCash, App.foldersFiles),
                                ScenaParametr_ScenaParametr.init(this, Orientation.V, 900, 1600),
                                Q.get().setCountThread(1).setMsSleep(7),
                                ActivityBase.setCreatorPleaseWait(
                                    new CreatorPleaseWait()._body({ ctx: this, activitySceneBase: _1 }, "getPleaseView", function (t, e) {
                                        return new ScenePleaseWait(e, t.getString(bt.string.please_wait));
                                    })
                                ),
                                Advt.setAdvtNetwork("", "", AdvtYandex.class),
                                MediaAudio.get().init(this),
                                MediaAudio.get().setState(this, !0);
                            var t = new HashMap_HashMap();
                            t.put(App.soundClick, App.soundClick),
                                t.put(App.soundPing, App.soundPing),
                                t.put(App.soundPuckScored, App.soundPuckScored),
                                t.put(App.soundPuckMissed, App.soundPuckMissed),
                                t.put(App.soundWon, App.soundWon),
                                t.put(App.soundLose, App.soundLose),
                                MediaAudio.get().loadSounds(this, t);
                        }
                    ),
                _class(SceneEclipse)
                    ._extends(SceneDialog_SceneDialog)
                    ._body(SceneEclipse.name, function (t, e) {
                        SceneDialog_SceneDialog._init(this, t, e, 0, 255);
                    }),
                _class(ActivityScreenHub)
                    ._extends(ActivityBase)
                    ._body(
                        _static,
                        function () {
                            (this.TAG = "ActivityScreenHub"), (this.EXTRA_REQUEST_CODE = "extra_request_code"), (this.EXTRA_INTENTS = "extra_intents");
                        },
                        function (t) {
                            (t.params = new j(j.MATCH_PARENT, j.MATCH_PARENT)),
                                (t.screens = new ArrayList()),
                                (t.viewCurr = null),
                                (t.wait = null),
                                (t.eclipse = null),
                                (t.layout = null),
                                (t.handlerMainThread = null),
                                (t.idEclipse = ActivityBase.getId()),
                                (t.idWait = ActivityBase.getId());
                        },
                        "remScreen",
                        function (t) {
                            return this.screens.isEmpty() || this.screens.remove(t), this.getCurrentScreen();
                        },
                        "getCurrentScreen",
                        function () {
                            return this.screens.isEmpty() ? null : this.screens.get(this.screens.size() - 1);
                        },
                        "getScreenPrev",
                        function () {
                            return this.screens.size() > 1 ? this.screens.get(this.screens.size() - 2) : null;
                        },
                        "getProgressBar",
                        function () {
                            return this.wait.getProgress();
                        },
                        "getProgressBarTotal",
                        function () {
                            return this.wait.getProgressTotal();
                        },
                        "setView",
                        function (t, e) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setView(%s, %s)", this.getClass().getSimpleName(), null != t ? t.getClass().getSimpleName() : "null", null != e ? e.getClass().getSimpleName() : "null")),
                                null == t || t == this.getCurrentScreen()
                                    ? (null != e && -1 == e.getId() && e.setId(ActivityBase.getId()),
                                      null == this.layout.findViewById(this.eclipse.getId()) && this.layout.addView(this.eclipse),
                                      null != t && t.isDialog()
                                          ? this.eclipse.dark(
                                                150,
                                                0.002,
                                                new OnDarkEndListener()._instance({ act: this, screen: t, view: e }, "onDarkEnd", function (t, e, n) {
                                                    Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setView(%s)->onDarkEnd()", t.getClass().getSimpleName(), null != n ? n.getClass().getSimpleName() : "null")),
                                                        null != e.getStateChangeListener() && e.getStateChangeListener().onDarkEnd(),
                                                        (t.viewCurr = n),
                                                        null != n && null == t.layout.findViewById(n.getId()) && t.layout.addView(t.viewCurr);
                                                })
                                            )
                                          : this.eclipse.dark(
                                                255,
                                                0.002,
                                                new OnDarkEndListener()._body({ act: this, screen: t, view: e }, "onDarkEnd", function (t, e, n) {
                                                    Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setView(%s)->onDarkEnd()", t.getClass().getSimpleName(), null != n ? n.getClass().getSimpleName() : "null")),
                                                        null != t.viewCurr ? t.layout.removeView(t.viewCurr) : t.layout.removeView(t.wait),
                                                        null != e && null != e.getStateChangeListener() && (e.getStateChangeListener().onDarkEnd(), e.setStateChangeListener(null)),
                                                        (t.viewCurr = n),
                                                        null != n && null == t.layout.findViewById(n.getId()) && t.layout.addView(t.viewCurr, 0),
                                                        t.eclipse.light(
                                                            -0.002,
                                                            new SceneDialog_OnLightEndListener()._body({ act: t, view: n }, "onLightEnd", function (t, e) {
                                                                t.layout.removeView(t.eclipse),
                                                                    Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setView(%s)->onLightEnd()", t.getClass().getSimpleName(), null != e ? e.getClass().getSimpleName() : "null"));
                                                            })
                                                        );
                                                })
                                            ))
                                    : Loger.get().d(ActivityScreenHub.TAG, "Screen not current.");
                        },
                        [View_View],
                        "setContentView",
                        function (t) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setContentView(%s)", this.getClass().getSimpleName(), t.getClass().getSimpleName())), this.setContentView(this.getCurrentScreen(), t);
                        },
                        [ScreenActivity, View_View],
                        "setContentView",
                        function (t, e) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setContentView(%s, %s)", this.getClass().getSimpleName(), null != t ? t.getClass().getSimpleName() : "null", e.getClass().getSimpleName())),
                                this.setView(t, e);
                        },
                        [ScreenActivity, LoadViewTask],
                        "setContentView",
                        function (t, e) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.setContentView(%s)", this.getClass().getSimpleName(), e.getClass().getSimpleName())),
                                this.getProgressBar().setProgress(0),
                                this.setView(t, this.wait),
                                this.handlerMainThread.post(
                                    new Runnable()._instance({ act: this, task: e }, "run", function (t, e) {
                                        try {
                                            e.doLoadView(t);
                                        } catch (t) {
                                            Loger.get().exc(t);
                                        }
                                    })
                                );
                        },
                        [Intent_Intent],
                        "startActivity",
                        function (t) {
                            this.startActivity(t, null);
                        },
                        [Intent_Intent, ActivityListener],
                        "startActivity",
                        function (t, e) {
                            Loger.get().d(
                                ActivityScreenHub.TAG,
                                String.format("%s.startActivity(%s, ActivityListener)", this.getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent")
                            ),
                                this.startActivityForResult(t, -1, e);
                        },
                        "startActivitySuper",
                        function (t) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.startActivitySuper(%s)", this.getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent"));
                            try {
                                ActivityBase.startActivity(this, t);
                            } catch (t) {
                                this.layout.removeView(this.eclipse), Loger.get().exc(t);
                            }
                        },
                        [Intent_Intent, Number],
                        "startActivityForResult",
                        function (t, e) {
                            this.startActivityForResult(t, e, null);
                        },
                        [Intent_Intent, Number, ActivityListener],
                        "startActivityForResult",
                        function (t, e, n) {
                            Loger.get().d(
                                ActivityScreenHub.TAG,
                                String.format("%s.startActivityForResult(%s, %d, ActivityListener)", this.getClass().getSimpleName(), null != t && null != t.getComponent() ? t.getComponent().getShortClassName() : "Intent", e)
                            ),
                                null == this.layout.findViewById(this.eclipse.getId()) && this.layout.addView(this.eclipse),
                                this.handlerMainThread.post(
                                    new Runnable()._body({ act: this, intent: t, requestCode: e, listener: n, layout: this.layout, eclipse: this.eclipse }, "run", function (t, e, n, i, o, s) {
                                        if ((null == o.findViewById(s.getId()) && o.addView(s), null != e && null != e.getComponent()))
                                            try {
                                                var r = e.getComponent().newInstance();
                                                if (r instanceof ScreenActivity) {
                                                    if (((screen = r), Bitwise.isFlagMask(e.getFlags(), Intent_Intent.FLAG_ACTIVITY_CLEAR_TOP)))
                                                        for (var a = !1, c = 0; c < t.screens.size(); c++) {
                                                            var l = t.screens.get(c);
                                                            (a || (null != l && l.getClass() == screen.getClass())) && ((a = !0), o.removeView(l.getView()), l.onPause(), l.onStop(), l.onDestroy(), t.screens.remove(c), c--);
                                                        }
                                                    else if (null != t.getCurrentScreen() && t.getCurrentScreen().getClass() == screen.getClass()) return void (screen instanceof ScreenDialog || o.removeView(s));
                                                    t.screens.add(screen), screen.setActivity(t), screen.setIntent(e), screen.setRequestCode(n), e.putExtra(ActivityScreenHub.EXTRA_REQUEST_CODE, n), screen.onCreate(new Bundle());
                                                    var u = t.getScreenPrev();
                                                    return void screen.setStateChangeListener(
                                                        new ActivityListener()._body({ screenPrev: u, listener: i, screen }, "onDarkEnd", function (e, n, i) {
                                                            null != e &&
                                                                (e.onPause(),
                                                                e.onStop(),
                                                                Bitwise.isFlagMask(e.getIntent().getFlags(), Intent_Intent.FLAG_ACTIVITY_NO_HISTORY) && (null != e.getView() && o.removeView(e.getView()), e.onDestroy(), t.screens.remove(e))),
                                                                null != n && n.onDarkEnd(),
                                                                i.onStart(),
                                                                i.onResume();
                                                        })
                                                    );
                                                }
                                            } catch (t) {
                                                return void Loger.get().exc(t);
                                            }
                                        startActivityForResultSuper(e, n);
                                    })
                                );
                        },
                        "startActivityForResultSuper",
                        function (t, e) {
                            try {
                                ActivityBase.startActivityForResult(this, t, e), ActivityBase.overridePendingTransition(this, 0, 0);
                            } catch (t) {
                                this.layout.removeView(this, eclipse), Loger.get().exc(t);
                            }
                        },
                        "finish",
                        function () {
                            this.finish(this.getCurrentScreen());
                        },
                        [ScreenActivity],
                        "finish",
                        function (t) {
                            this.finish(t, null);
                        },
                        [ScreenActivity, ActivityListener],
                        "finish",
                        function (t, e) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.finish(%s)", this.getClass().getSimpleName(), null != t ? t.getClass().getSimpleName() : "null")),
                                null == this.layout.findViewById(this.eclipse.getId()) && this.layout.addView(this.eclipse),
                                this.handlerMainThread.post(
                                    new Runnable()._instance({ act: this, screenFinish: t, listener: e }, "run", function (t, e, n) {
                                        null == t.layout.findViewById(t.eclipse.getId()) && t.layout.addView(t.eclipse);
                                        var i = t.getCurrentScreen(),
                                            o = t.remScreen(e);
                                        if (null != e && i != e) return e.onPause(), e.onStop(), void e.onDestroy();
                                        if (null != o) {
                                            if (null != i && i.isDialog())
                                                return (
                                                    t.layout.removeView(t.viewCurr),
                                                    (t.viewCurr = o.view),
                                                    null != e && (e.onPause(), e.onStop(), e.onDestroy()),
                                                    void t.eclipse.light(
                                                        150,
                                                        -0.002,
                                                        new SceneDialog_OnLightEndListener()._instance({ act: t, screenPrev: o, screenCurrent: i }, "onLightEnd", function (t, e, n) {
                                                            e.onStart(), e.onResume(), n.getRequestCode() > -1 && e.onActivityResult(n.getRequestCode(), n.getResultCode(), n.getData()), t.layout.removeView(t.eclipse);
                                                        })
                                                    )
                                                );
                                            null == o.view && Loger.get().w(ActivityScreenHub.TAG, String.format("View is null on screen %s", o.getClass().getSimpleName())),
                                                o.setStateChangeListener(
                                                    new ActivityListener()._instance({ screenFinish: e, screenPrev: o }, "onDarkEnd", function (t, e) {
                                                        null != t && (t.onPause(), t.onStop(), t.onDestroy()), e.onStart(), e.onResume();
                                                    })
                                                ),
                                                t.setView(o, o.view);
                                        } else
                                            t.eclipse.dark(
                                                0.002,
                                                new OnDarkEndListener()._instance({ act: t, screenFinish: e, listener: n }, "onDarkEnd", function (t, e, n) {
                                                    null != n && n.onDarkEnd(), null != e && (e.onPause(), e.onStop(), e.onDestroy()), t.finishSuper();
                                                })
                                            );
                                    })
                                );
                        },
                        "finishSuper",
                        function () {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.finishSuper()", getClass().getSimpleName())),
                                this._super(ActivityBase, finish),
                                this._super(ActivityBase, overridePendingTransition, 0, 0),
                                null != activityListener && activityListener.onFinish();
                        },
                        "dispatchTouchEvent",
                        function (t) {
                            return null != this.getCurrentScreen() && this.getCurrentScreen().dispatchTouchEvent(t), ActivityBase.dispatchTouchEvent(this, t);
                        },
                        "onTouchEvent",
                        function (t) {
                            return null != this.getCurrentScreen() && this.getCurrentScreen().onTouchEvent(t), ActivityBase.onTouchEvent(this, t);
                        },
                        "onCreate",
                        function (t) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onCreate(Bundle)", this.getClass().getSimpleName())),
                                ActivityBase.onCreate(this, t),
                                (this.handlerMainThread = new G()),
                                (this.layout = new RelativeLayout(this)),
                                this.layout.setLayoutParams(this.params),
                                ActivityBase.setContentView(this, this.layout),
                                (this.eclipse = new SceneEclipse(this, 1)),
                                this.eclipse.setId(this.idEclipse),
                                (this.wait = ActivityBase.creatorPleaseWait.getPleaseView(this)),
                                this.wait.setId(this.idWait);
                        },
                        "onSaveInstanceState",
                        function (t) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onSaveInstanceState()", this.getClass().getSimpleName()));
                            for (var e, n = ActivityScreenHub_createForOfIteratorHelperLoose(screens); !(e = n()).done; ) {
                                e.value.onSaveInstanceState();
                            }
                            ActivityBase.onSaveInstanceState(this, t);
                        },
                        "onStart",
                        function () {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onStart()", this.getClass().getSimpleName())),
                                this.layout && null == this.layout.findViewById(this.eclipse.getId()) && this.layout.addView(this.eclipse),
                                null != this.getCurrentScreen() && this.getCurrentScreen().onStart(),
                                ActivityBase.onStart(this);
                        },
                        "onResume",
                        function () {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onResume()", this.getClass().getSimpleName())),
                                this.layout.removeView(this.eclipse),
                                null != this.getCurrentScreen() && this.getCurrentScreen().onResume(),
                                ActivityBase.onResume(this);
                        },
                        "onPause",
                        function () {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onPause()", this.getClass().getSimpleName())), null != this.getCurrentScreen() && this.getCurrentScreen().onPause(), ActivityBase.onPause(this);
                        },
                        "onStop",
                        function () {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onStop()", this.getClass().getSimpleName())),
                                null != this.getCurrentScreen() && this.getCurrentScreen().onStop(),
                                this.layout.removeView(this.eclipse),
                                ActivityBase.onStop(this);
                        },
                        "onDestroy",
                        function () {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onDestroy()", this.getClass().getSimpleName()));
                            for (var t, e = ActivityScreenHub_createForOfIteratorHelperLoose(screens); !(t = e()).done; ) {
                                t.value.onDestroy();
                            }
                            ActivityBase.onDestroy(this);
                        },
                        "onActivityResult",
                        function (t, e, n) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onActivityResult()", this.getClass().getSimpleName())),
                                null != this.getCurrentScreen() && this.getCurrentScreen().onActivityResult(t, e, n),
                                this.layout.removeView(this.eclipse),
                                ActivityBase.onActivityResult(this, t, e, n);
                        },
                        "onCreateContextMenu",
                        function (t, e, n) {
                            Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onCreateContextMenu()", getClass().getSimpleName())),
                                null != getCurrentScreen() && getCurrentScreen().onCreateContextMenu(t, e, n),
                                this.ActivityBase.onCreateContextMenu(t, e, n);
                        },
                        "onContextItemSelected",
                        function (t) {
                            return (
                                Loger.get().d(ActivityScreenHub.TAG, String.format("%s.onContextItemSelected()", getClass().getSimpleName())),
                                null != getCurrentScreen() && getCurrentScreen().onContextItemSelected(t),
                                this.ActivityBase.onContextItemSelected(t)
                            );
                        }
                    ),
                _class(SceneSplash)
                    ._extends(SceneView)
                    ._body(SceneSplash.name, function (t) {
                        SceneView._init(this, t), SceneSplash.Initialize(this);
                        var e = ScenaParametr_ScenaParametr.getScaled(ScenaParametr_ScenaParametr.decodeResource(t, bt.drawable.logo_radbrothers)),
                            n = new BackImage(e);
                        n.setParam(0.5 * ScenaParametr_ScenaParametr.P.WT, 0.5 * ScenaParametr_ScenaParametr.P.HT, e.getWidth(), e.getHeight()), this.attachCommun(n);
                    }),
                _class(ActivityMain)
                    ._extends(ActivityScreenHub)
                    ._body(
                        function (t) {
                            t.advt = null;
                        },
                        "onCreate",
                        function (t) {
                            var e = this;
                            ActivityScreenHub.onCreate(this, t),
                                this.setContentView(new SceneSplash(this)),
                                (this.advt = new AdvtYandex(this, new Advt.AdvtConfig())),
                                this.advt.consentAsk(),
                                this.advt.init(function () {
                                    var t = new AdvtConfig();
                                    (t.id = App.getIdInterstitial()), e.advt.showInterstitial(t);
                                }),
                                null == t && this.startActivityNeed();
                        },
                        "onDestroy",
                        function () {
                            null != this.advt && this.advt.onDestroy(), ActivityScreenHub.onDestroy(this);
                        },
                        "onNewIntent",
                        function (t) {
                            ActivityScreenHub.onNewIntent(this, t),
                                null == t.getAction() || t.getAction().equals(Intent_Intent.ACTION_MAIN) || (this.remScreens(this.App.intentSelect.getComponent().getClassName()), this.startActivityNeed());
                        },
                        "startActivityNeed",
                        function () {
                            this.startActivityMenu();
                        },
                        "startActivityMenu",
                        function () {
                            var t = this;
                            new G(ft.getMainLooper()).postDelayed(function () {
                                var e = App.intentSettings.clone();
                                t.startActivity(e);
                            }, 10);
                        }
                    );
            new (function AppController(t, e, n) {
                var i = document.getElementById("splash"),
                    o = document.getElementById("progress"),
                    s = document.createElement("div");
                (s.id = "game"), (s.style.position = "absolute"), (s.style.overflow = "hidden");
                var r = Resource.get();
                r.setListener(
                    new ((function (n) {
                        function _class() {
                            return n.apply(this, arguments) || this;
                        }
                        inheritsLoose_inheritsLoose(_class, n);
                        var r = _class.prototype;
                        return (
                            (r.onDownload = function onDownload() {
                                document.body.removeChild(i), document.body.appendChild(s), t.onCreate(), e.onCreate(), e.onStart(), e.onResume();
                            }),
                            (r.onProgress = function onProgress(t) {
                                Loger.get().d("game.js", String.format("Resourse load %.2f percent.", t)), (o.value = t);
                            }),
                            _class
                        );
                    })(OnDownloadListener))()
                ),
                    r.preload(),
                    document.addEventListener("visibilitychange", function (t, n) {
                        "visible" == document.visibilityState ? (e.onStart(), e.onResume()) : "hidden" == document.visibilityState && (e.onPause(), e.onStop());
                    }),
                    (window.onbeforeunload = function (t) {
                        e.onPause(), e.onStop;
                    }),
                    window.addEventListener("resize", function (t) {
                        var e = window.innerWidth / N.WT,
                            n = window.innerHeight / N.HT;
                        N.SE = Math.min(e, n);
                        var i = N.WT * N.SE,
                            o = N.HT * N.SE;
                        (N.OXE = (window.innerWidth - i) / 2), (N.OYE = (window.innerHeight - o) / 2), (s.style.transform = "scale(" + N.SE + ")"), (s.style.marginLeft = N.OXE + "px"), (s.style.marginTop = N.OYE + "px");
                    });
            })(new App(), new ActivityMain(), bt);
        })();
})();
