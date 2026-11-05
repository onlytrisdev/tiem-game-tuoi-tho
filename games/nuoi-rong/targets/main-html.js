/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function x(a, b) {
        function c() {}
        c.prototype = a;
        var e = new c,
            l;
        for (l in b) e[l] = b[l];
        b.toString !== Object.prototype.toString && (e.toString = b.toString);
        return e
    }

    function nc(a) {
        return a instanceof Array ? function() {
            return s.iter(a)
        } : "function" == typeof a.iterator ? wa(a, a.iterator) : a.iterator
    }

    function wa(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Xc++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var i = {},
        la = function() {};
    i.DateTools = la;
    la.__name__ = ["DateTools"];
    la.__format_get = function(a, b) {
        switch (b) {
            case "%":
                return "%";
            case "C":
                return T.lpad(o.string(o["int"](a.getFullYear() / 100)), "0", 2);
            case "d":
                return T.lpad(o.string(a.getDate()), "0", 2);
            case "D":
                return la.__format(a, "%m/%d/%y");
            case "e":
                return o.string(a.getDate());
            case "H":
            case "k":
                return T.lpad(o.string(a.getHours()), "H" == b ? "0" : " ", 2);
            case "I":
            case "l":
                var c = a.getHours() %
                    12;
                return T.lpad(o.string(0 == c ? 12 : c), "I" == b ? "0" : " ", 2);
            case "m":
                return T.lpad(o.string(a.getMonth() + 1), "0", 2);
            case "M":
                return T.lpad(o.string(a.getMinutes()), "0", 2);
            case "n":
                return "\n";
            case "p":
                return 11 < a.getHours() ? "PM" : "AM";
            case "r":
                return la.__format(a, "%I:%M:%S %p");
            case "R":
                return la.__format(a, "%H:%M");
            case "s":
                return o.string(o["int"](a.getTime() / 1E3));
            case "S":
                return T.lpad(o.string(a.getSeconds()), "0", 2);
            case "t":
                return "\t";
            case "T":
                return la.__format(a, "%H:%M:%S");
            case "u":
                return c = a.getDay(),
                    0 == c ? "7" : null == c ? "null" : "" + c;
            case "w":
                return o.string(a.getDay());
            case "y":
                return T.lpad(o.string(a.getFullYear() % 100), "0", 2);
            case "Y":
                return o.string(a.getFullYear());
            default:
                throw "Date.format %" + b + "- not implemented yet.";
        }
    };
    la.__format = function(a, b) {
        for (var c = new Xa, e = 0;;) {
            var l = b.indexOf("%", e);
            if (0 > l) break;
            c.addSub(b, e, l - e);
            c.add(la.__format_get(a, s.substr(b, l + 1, 1)));
            e = l + 2
        }
        c.addSub(b, e, b.length - e);
        return c.b
    };
    la.format = function(a, b) {
        return la.__format(a, b)
    };
    la.parse = function(a) {
        var b = a / 1E3,
            c =
            b / 60,
            e = c / 60;
        return {
            ms: a % 1E3,
            seconds: b % 60 | 0,
            minutes: c % 60 | 0,
            hours: e % 24 | 0,
            days: e / 24 | 0
        }
    };
    var Pa = function(a, b) {
        b = b.split("u").join("");
        this.r = RegExp(a, b)
    };
    i.EReg = Pa;
    Pa.__name__ = ["EReg"];
    Pa.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw "EReg::matched";
        },
        matchedPos: function() {
            if (null == this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        __class__: Pa
    };
    var s = function() {};
    i.HxOverrides = s;
    s.__name__ = ["HxOverrides"];
    s.dateStr = function(a) {
        var b = a.getMonth() + 1,
            c = a.getDate(),
            e = a.getHours(),
            l = a.getMinutes(),
            d = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > e ? "0" + e : "" + e) + ":" + (10 > l ? "0" + l : "" + l) + ":" + (10 > d ? "0" + d : "" + d)
    };
    s.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw "Invalid date format : " + a;
        }
    };
    s.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    s.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    s.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c,
            1);
        return !0
    };
    s.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var Qa = function() {};
    i.Lambda = Qa;
    Qa.__name__ = ["Lambda"];
    Qa.array = function(a) {
        for (var b = [], a = nc(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    Qa.exists = function(a, b) {
        for (var c = nc(a)(); c.hasNext();) {
            var e = c.next();
            if (b(e)) return !0
        }
        return !1
    };
    Qa.filter = function(a, b) {
        for (var c = new Ya, e = nc(a)(); e.hasNext();) {
            var l = e.next();
            b(l) && c.add(l)
        }
        return c
    };
    Qa.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var e = nc(a)(); e.hasNext();) e.next(), c++;
        else
            for (e = nc(a)(); e.hasNext();) {
                var l = e.next();
                b(l) && c++
            }
        return c
    };
    var Ya = function() {
        this.length = 0
    };
    i.List = Ya;
    Ya.__name__ = ["List"];
    Ya.prototype = {
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        push: function(a) {
            this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++
        },
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h) return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        __class__: Ya
    };
    var oc = function() {};
    i.IMap = oc;
    oc.__name__ = ["IMap"];
    Math.__name__ = ["Math"];
    var p = function() {};
    i.Reflect = p;
    p.__name__ = ["Reflect"];
    p.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    p.setField = function(a, b, c) {
        a[b] = c
    };
    p.callMethod = function(a, b, c) {
        return b.apply(a, c)
    };
    p.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                e;
            for (e in a) "__id__" != e && "hx__closures__" != e && c.call(a, e) && b.push(e)
        }
        return b
    };
    p.isFunction =
        function(a) {
            return "function" == typeof a && !(a.__name__ || a.__ename__)
        };
    p.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var o = function() {};
    i.Std = o;
    o.__name__ = ["Std"];
    o.is = function(a, b) {
        return C.__instanceof(a, b)
    };
    o.instance = function(a, b) {
        return a instanceof b ? a : null
    };
    o.string = function(a) {
        return C.__string_rec(a, "")
    };
    o["int"] = function(a) {
        return a | 0
    };
    o.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == s.cca(a, 1) || 88 == s.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    o.parseFloat = function(a) {
        return parseFloat(a)
    };
    o.random = function(a) {
        return 0 >= a ? 0 : Math.floor(Math.random() * a)
    };
    var Xa = function() {
        this.b = ""
    };
    i.StringBuf = Xa;
    Xa.__name__ = ["StringBuf"];
    Xa.prototype = {
        add: function(a) {
            this.b += o.string(a)
        },
        addSub: function(a, b, c) {
            this.b = null == c ? this.b + s.substr(a, b, null) : this.b + s.substr(a, b, c)
        },
        __class__: Xa
    };
    var T = function() {};
    i.StringTools = T;
    T.__name__ = ["StringTools"];
    T.startsWith = function(a, b) {
        return a.length >= b.length && s.substr(a, 0, b.length) == b
    };
    T.lpad = function(a, b, c) {
        if (0 >= b.length) return a;
        for (; a.length < c;) a = b + a;
        return a
    };
    T.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    };
    var E = i.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    E.TNull = ["TNull", 0];
    E.TNull.__enum__ = E;
    E.TInt = ["TInt", 1];
    E.TInt.__enum__ = E;
    E.TFloat = ["TFloat", 2];
    E.TFloat.__enum__ = E;
    E.TBool = ["TBool", 3];
    E.TBool.__enum__ = E;
    E.TObject = ["TObject", 4];
    E.TObject.__enum__ = E;
    E.TFunction = ["TFunction", 5];
    E.TFunction.__enum__ =
        E;
    E.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = E;
        return a
    };
    E.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = E;
        return a
    };
    E.TUnknown = ["TUnknown", 8];
    E.TUnknown.__enum__ = E;
    var L = function() {};
    i.Type = L;
    L.__name__ = ["Type"];
    L.getClassName = function(a) {
        return a.__name__.join(".")
    };
    L.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    L.resolveClass = function(a) {
        a = i[a];
        return null == a || !a.__name__ ? null : a
    };
    L.resolveEnum = function(a) {
        a = i[a];
        return null == a || !a.__ename__ ? null : a
    };
    L.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw "Too many arguments";
        }
    };
    L.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    L.createEnum = function(a, b, c) {
        var e =
            p.field(a, b);
        if (null == e) throw "No such constructor " + b;
        if (p.isFunction(e)) {
            if (null == c) throw "Constructor " + b + " need parameters";
            return e.apply(a, c)
        }
        if (null != c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return e
    };
    L.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    L["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return E.TBool;
            case "string":
                return E.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? E.TInt : E.TFloat;
            case "object":
                if (null == a) return E.TNull;
                var b = a.__enum__;
                if (null != b) return E.TEnum(b);
                a = a instanceof Array && null == a.__enum__ ? Array : a.__class__;
                return null != a ? E.TClass(a) : E.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? E.TObject : E.TFunction;
            case "undefined":
                return E.TNull;
            default:
                return E.TUnknown
        }
    };
    i.XmlType = {
        __ename__: ["XmlType"],
        __constructs__: []
    };
    var w = function() {};
    i.Xml = w;
    w.__name__ = ["Xml"];
    w.parse = function(a) {
        return Ra.parse(a)
    };
    w.createElement = function(a) {
        var b = new w;
        b.nodeType = w.Element;
        b._children = [];
        b._attributes = new ma;
        b.set_nodeName(a);
        return b
    };
    w.createPCData = function(a) {
        var b = new w;
        b.nodeType = w.PCData;
        b.set_nodeValue(a);
        return b
    };
    w.createCData = function(a) {
        var b = new w;
        b.nodeType = w.CData;
        b.set_nodeValue(a);
        return b
    };
    w.createComment = function(a) {
        var b = new w;
        b.nodeType = w.Comment;
        b.set_nodeValue(a);
        return b
    };
    w.createDocType = function(a) {
        var b = new w;
        b.nodeType = w.DocType;
        b.set_nodeValue(a);
        return b
    };
    w.createProcessingInstruction = function(a) {
        var b = new w;
        b.nodeType = w.ProcessingInstruction;
        b.set_nodeValue(a);
        return b
    };
    w.createDocument =
        function() {
            var a = new w;
            a.nodeType = w.Document;
            a._children = [];
            return a
        };
    w.prototype = {
        get_nodeName: function() {
            if (this.nodeType != w.Element) throw "bad nodeType";
            return this._nodeName
        },
        set_nodeName: function(a) {
            if (this.nodeType != w.Element) throw "bad nodeType";
            return this._nodeName = a
        },
        set_nodeValue: function(a) {
            if (this.nodeType == w.Element || this.nodeType == w.Document) throw "bad nodeType";
            return this._nodeValue = a
        },
        get: function(a) {
            if (this.nodeType != w.Element) throw "bad nodeType";
            return this._attributes.get(a)
        },
        set: function(a,
            b) {
            if (this.nodeType != w.Element) throw "bad nodeType";
            this._attributes.set(a, b)
        },
        exists: function(a) {
            if (this.nodeType != w.Element) throw "bad nodeType";
            return this._attributes.exists(a)
        },
        elements: function() {
            if (null == this._children) throw "bad nodetype";
            return {
                cur: 0,
                x: this._children,
                hasNext: function() {
                    for (var a = this.cur, b = this.x.length; a < b && !(this.x[a].nodeType == w.Element);) a += 1;
                    this.cur = a;
                    return a < b
                },
                next: function() {
                    for (var a = this.cur, b = this.x.length; a < b;) {
                        var c = this.x[a],
                            a = a + 1;
                        if (c.nodeType == w.Element) return this.cur =
                            a, c
                    }
                    return null
                }
            }
        },
        firstElement: function() {
            if (null == this._children) throw "bad nodetype";
            for (var a = 0, b = this._children.length; a < b;) {
                var c = this._children[a];
                if (c.nodeType == w.Element) return c;
                a++
            }
            return null
        },
        addChild: function(a) {
            if (null == this._children) throw "bad nodetype";
            null != a._parent && s.remove(a._parent._children, a);
            a._parent = this;
            this._children.push(a)
        },
        __class__: w
    };
    var ea = i["com.funtomic.GameOpsStatus"] = {
        __ename__: ["com", "funtomic", "GameOpsStatus"],
        __constructs__: ["UNINITIALIZED", "INITIALIZING",
            "INITIALIZED", "QUITTING"
        ]
    };
    ea.UNINITIALIZED = ["UNINITIALIZED", 0];
    ea.UNINITIALIZED.__enum__ = ea;
    ea.INITIALIZING = ["INITIALIZING", 1];
    ea.INITIALIZING.__enum__ = ea;
    ea.INITIALIZED = ["INITIALIZED", 2];
    ea.INITIALIZED.__enum__ = ea;
    ea.QUITTING = ["QUITTING", 3];
    ea.QUITTING.__enum__ = ea;
    var f = function() {};
    i["com.funtomic.GameOps"] = f;
    f.__name__ = ["com", "funtomic", "GameOps"];
    f.init = function(a, b, c, e, l) {
        if (f.status == ea.UNINITIALIZED) {
            f.status = ea.INITIALIZING;
            f.domain = a;
            f.gameVersion = b;
            B.init();
            f.readLocalStorage();
            f.readGameStateLocalStorage();
            f.url = window.location.href;
            f.startTimer("session");
            f.platform = "web";
            f.sessionId = f.generateRandomString(20);
            null == f.localStorage.installDate && (f.localStorage.installDate = Math.round((new Date).getTime() / 1E3), f.firstSession = !0, f.reportEvent("first_run"));
            f.elapsedGameTime = f.storageGet("FuntomicGameOps-ElapsedGameTime", 0);
            null != f.localStorage.elapsedGameTime && (f.elapsedGameTime = f.localStorage.elapsedGameTime, p.deleteField(f.localStorage, "elapsedGameTime"));
            null == f.localStorage.originalVersion && (f.localStorage.originalVersion =
                f.gameVersion);
            f.elapsedPlayTimeAtInit = f.elapsedGameTime;
            f.userID = f.localStorage.userID;
            a = f.HTML5API_getUserId();
            null != a && (f.userID = a);
            f.levelsWon = 0;
            if (null == f.localStorage.config || null != f.localStorage.configForVersion && f.localStorage.configForVersion != f.gameVersion) f.localStorage.config = c;
            f.gameConfig = f.localStorage.config;
            null != f.localStorage.experimentId && (f.experimentId = f.localStorage.experimentId);
            null != f.localStorage.alternativeId && (f.alternativeId = f.localStorage.alternativeId);
            c = f.storageGet("FuntomicGameOps-SessionEndEvent",
                null);
            null != c && (f.reportEvents([c]), f.storageRemove("FuntomicGameOps-SessionEndEvent"));
            var d = null;
            null != p.field(window.document, "hidden") ? d = "" : p.field(window.document, "webkitHidden") && (d = "webkit");
            c = function() {
                f.isHidden = p.field(window.document, "" == d ? "hidden" : d + "Hidden");
                f.isHidden && f.sessionEnd();
                f.pauseTimers(f.isHidden)
            };
            a = function(a) {
                f.isHidden = "pagehide" == a.type;
                f.isHidden && f.sessionEnd();
                f.pauseTimers(f.isHidden)
            };
            null != d ? window.document.addEventListener(d + "visibilitychange", c, !1) : (window.addEventListener("pageshow",
                a, !1), window.addEventListener("pagehide", a, !1));
            (new P(5E3)).run = function() {
                f.sessionEnd()
            };
            f.reportEvent("session_start");
            f.gameStateGameOpsData.elapsed_game_time = f.elapsedGameTime;
            f.gameStateGameOpsData.install_date = f.localStorage.installDate;
            f.writeLocalStorage();
            f.writeGameStateLocalStorage();
            e.game_ops_data = f.gameStateGameOpsData;
            f.loadGameConfig(e, l)
        }
    };
    f.loadGameConfig = function(a, b) {
        I.verbose(["Fetching game config for: ", f.domain]);
        var c = new Gb(null);
        c.url = f.apiURLPrefix + f.apiConfigLocation;
        c.setParameter("domain", f.domain);
        c.setParameter("game_state", JSON.stringify(a));
        c.setParameter("game_ops_version", f.gameOpsVersion);
        c.setParameter("game_version", f.gameVersion);
        c.setParameter("platform_name", f.platform);
        null != f.userID && c.setParameter("user_id", f.userID);
        null != f.experimentId && c.setParameter("experiment_id", f.experimentId);
        null != f.alternativeId && c.setParameter("alternative_id", f.alternativeId);
        null != f.localStorage.userEmail && c.setParameter("user_email", f.localStorage.userEmail);
        null !=
            f.localStorage.configMd5 && c.setParameter("config_md5", f.localStorage.configMd5);
        c.onData = function(a) {
            f.onConfigLoadSuccess(a);
            null != b && b(!0);
            f.afterInit()
        };
        c.onStatus = f.onConfigLoadReturned;
        c.onError = function(a) {
            f.IOErrorHandler(a);
            f.status = ea.UNINITIALIZED;
            null != b && b(!1);
            f.afterInit()
        };
        c.request(!0)
    };
    f.onConfigLoadReturned = function(a) {
        switch (a) {
            case 500:
                f.onConfigLoadFailure();
                break;
            case 0:
                f.onConfigLoadTimeout()
        }
    };
    f.onConfigLoadTimeout = function() {
        I.error(["Timeout while fetching game config from server"])
    };
    f.onConfigLoadFailure = function() {
        I.error(["Error loading config"])
    };
    f.IOErrorHandler = function(a) {
        I.error(["Error caught ", a])
    };
    f.onConfigLoadSuccess = function(a) {
        var b = JSON.parse(a);
        I.verbose(["Config successfuly loaded", a]);
        null != b && (null != b.user_id && (f.userID = b.user_id, f.localStorage.userID = b.user_id), b.is_debug_mode && (f.isDebugMode = b.is_debug_mode), b.install_date && (f.localStorage.installDate = b.install_date), f.experimentId = b.experiment_id, f.localStorage.experimentId = f.experimentId, f.alternativeId =
            b.alternative_id, f.localStorage.alternativeId = f.alternativeId, null != b.config && (f.localStorage.config = b.config), f.gameConfig = f.localStorage.config, f.localStorage.configMd5 = b.config_md5, f.localStorage.configForVersion = f.gameVersion, f.localStorage.googlePublicKey = b.google_public_key, f.localStorage.appstoreId = b.appstore_id, f.writeLocalStorage(), f.status = ea.INITIALIZED, f.reportUnsentEvents())
    };
    f.afterInit = function() {
        null != f.alternativeId && f.HTML5API_setAlternativeId();
        var a = {
            game_ops_version: f.gameOpsVersion,
            game_version: f.gameVersion,
            game_session_id: f.sessionId,
            game_user_id: f.userID
        };
        null != f.experimentId && (a.game_experiment_id = f.experimentId);
        null != f.alternativeId && (a.game_alternative_id = f.alternativeId);
        f.HTML5API_reportCustomEvent("game_ops_data", a);
        I.debug(["Executing " + f.deferredReportEvents.length + " deferred event report calls"]);
        for (var a = 0, b = f.deferredReportEvents; a < b.length;) {
            var c = b[a];
            ++a;
            c()
        }
        f.deferredReportEvents = []
    };
    f.getConfig = function() {
        return f.gameConfig
    };
    f.getEventsStaticParams = function(a) {
        a = {
            domain: f.domain,
            uuid: f.userID,
            platform: f.platform,
            install_date: f.localStorage.installDate,
            original_version: f.localStorage.originalVersion,
            partial_data: f.localStorage.partialData,
            is_in_kizi_app: f.isInKiziApp(),
            events: a
        };
        null != f.mediaSource && (a.media_source = f.mediaSource);
        null != f.campaignName && (a.campaign_name = f.campaignName);
        return a
    };
    f.reportEvents = function(a) {
        if (f.status != ea.INITIALIZED) f.queueEvents(a);
        else {
            var b = f.getEventsStaticParams(a),
                c = f.apiURLPrefix + f.apiEventsLocation,
                e = new Gb(c);
            e.addParameter("data",
                JSON.stringify(b));
            I.verbose(["Posting event to:", c]);
            e.onData = f.eventReportSucceeded;
            e.onStatus = function(b) {
                f.onEventReportReturned(b, a)
            };
            e.onError = f.IOErrorHandler;
            e.request(!0);
            f.sessionEnd()
        }
    };
    f.onEventReportReturned = function(a, b) {
        switch (a) {
            case 500:
                f.eventReportFailed();
                break;
            case 0:
                f.eventReportTimeout(b)
        }
    };
    f.eventReportTimeout = function(a) {
        I.error(["Report event timeout"]);
        f.queueEvents(a)
    };
    f.eventReportFailed = function() {
        I.error(["Report event failed"]);
        f.localStorage.unsentEvents = [];
        f.writeLocalStorage()
    };
    f.eventReportSucceeded = function(a) {
        I.verbose(["Event Posted " + a]);
        f.reportUnsentEvents()
    };
    f.reportEvent = function(a, b) {
        if (!f.isEventsTraceOnly) switch (f.status[1]) {
            case 1:
                f.deferredReportEvents.push(function() {
                    f.reportEvent(a, b)
                });
                break;
            default:
                var c = f.prepareEventObject(a, b);
                f.reportEvents([c])
        }
    };
    f.prepareEventObject = function(a, b) {
        var c = la.format(new Date, "%Y-%m-%d %H:%M:%S"),
            e = o.string(new Date),
            l = e.indexOf("+"),
            e = s.substr(e, l, 5),
            c = {
                event_type: a,
                date: c + e
            };
        null != f.experimentId && (c.experiment_id = f.experimentId);
        null != f.alternativeId && (c.alternative_id = f.alternativeId);
        c.elapsed_play_time = Math.round(f.elapsedPlayTimeAtInit + f.sampleTimer("session") / 1E3);
        c.session_id = f.sessionId;
        c.game_ops_version = f.gameOpsVersion;
        c.game_version = f.gameVersion;
        null != f.url && (c.url = f.url);
        f.firstSession && (c.first_session = !0);
        null != f.fbId && (c.fb_id = f.fbId);
        return c = f.extendObject(c, b)
    };
    f.queueEvents = function(a) {
        I.verbose(["Queuing events:" + JSON.stringify(a)]);
        null == f.localStorage.unsentEvents && (f.localStorage.unsentEvents = []);
        for (var b = 0; b < a.length;) {
            var c = a[b];
            ++b;
            f.localStorage.unsentEvents.push(c)
        }
        f.localStorage.unsentEvents.length > f.MAX_SAVED_UNSENT_EVENTS && (f.localStorage.unsentEvents = [], f.localStorage.partialData = !0);
        f.writeLocalStorage();
        I.verbose(["There are now " + o.string(f.localStorage.unsentEvents.length) + " unsent events."])
    };
    f.reportUnsentEvents = function() {
        null != f.localStorage.unsentEvents && 0 < f.localStorage.unsentEvents.length && (I.verbose(["reporting unsent events", f.localStorage.unsentEvents.length]), f.reportEvents(f.localStorage.unsentEvents),
            f.localStorage.unsentEvents = [], f.writeLocalStorage())
    };
    f.sessionEnd = function(a, b) {
        null == a && (a = !0);
        var c = f.sampleTimer("session");
        if (-1 == c) I.error(["sessionEnd was called without a matching sessionStart!"]);
        else {
            for (var e = [], l = 0, d = f.levelsNumbers; l < d.length;) {
                var h = d[l];
                ++l; - 1 == e.indexOf(h) && e.push(h)
            }
            e = {
                session_duration: Math.round(c / 1E3),
                levels_numbers: e.toString(),
                won_percent: 0,
                levels_count: f.levelsNumbers.length,
                levels_won: f.levelsWon,
                sent_by: "application"
            };
            null != b && (e = f.extendObject(b, e));
            0 < e.levels_count &&
                (e.won_percent = 100 * (f.levelsWon / f.levelsNumbers.length));
            f.updateTotalElapsedTime(c / 1E3);
            c = f.prepareEventObject("session_end", e);
            a ? (I.verbose(["writing session end event to local storage"]), f.storageSet("FuntomicGameOps-SessionEndEvent", c)) : f.reportEvents([c])
        }
    };
    f.updateTotalElapsedTime = function(a) {
        f.storageSet("FuntomicGameOps-ElapsedGameTime", f.elapsedPlayTimeAtInit + a)
    };
    f.startTimer = function(a) {
        I.verbose(["Timer '" + a + "' started."]);
        p.setField(f.timers, a, [f.getTimestamp(), 0])
    };
    f.sampleTimer = function(a,
        b) {
        null == b && (b = !1);
        if (null == p.field(f.timers, a)) return -1;
        var c = p.field(f.timers, a)[1];
        0 != p.field(f.timers, a)[0] && (c += f.getTimestamp() - p.field(f.timers, a)[0]);
        b && p.deleteField(f.timers, a);
        I.verbose(["Timer '" + a + "' sampled. Current elapsed time is " + c]);
        return c
    };
    f.pauseTimers = function(a) {
        null == a && (a = !0);
        for (var b = 0, c = p.fields(f.timers); b < c.length;) {
            var e = c[b];
            ++b;
            a ? 0 != p.field(f.timers, e)[0] ? (p.field(f.timers, e)[1] += f.getTimestamp() - p.field(f.timers, e)[0], p.field(f.timers, e)[0] = 0, I.verbose(["Timer '" +
                e + "' paused at " + p.field(f.timers, e)[1] + " ms"
            ])) : I.verbose(["NOTE: Timer '" + e + "' attempt to pause at " + p.field(f.timers, e)[1] + " **but was already paused**"]) : 0 == p.field(f.timers, e)[0] ? (p.field(f.timers, e)[0] = f.getTimestamp(), I.verbose(["Timer '" + e + "' unpaused at " + p.field(f.timers, e)[1] + " ms"])) : I.verbose(["NOTE: Timer '" + e + "' attempt to unpause at " + p.field(f.timers, e)[1] + " **but was already unpaused**"])
        }
    };
    f.getTimestamp = function() {
        return (new Date).getTime()
    };
    f.extendObject = function(a, b) {
        for (var c =
            0, e = p.fields(b); c < e.length;) {
            var l = e[c];
            ++c;
            var d = p.field(b, l);
            a[null == l ? "null" : "" + l] = d
        }
        return a
    };
    f.generateRandomString = function(a) {
        for (var b = "", c = 0; c < a;) c++, b += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(61 * Math.random()));
        return b
    };
    f.storageSet = function(a, b) {
        return B.set(f.domain + a, b)
    };
    f.storageGet = function(a, b) {
        return B.get(f.domain + a, b)
    };
    f.storageRemove = function(a) {
        return B.remove(f.domain + a)
    };
    f.writeLocalStorage = function() {
        f.storageSet("FuntomicGameOps",
            f.localStorage)
    };
    f.writeGameStateLocalStorage = function() {
        f.storageSet("FuntomicGameOps-GameState", f.gameStateGameOpsData)
    };
    f.readLocalStorage = function() {
        f.localStorage = f.storageGet("FuntomicGameOps", {})
    };
    f.readGameStateLocalStorage = function() {
        f.gameStateGameOpsData = f.storageGet("FuntomicGameOps-GameState", {})
    };
    f.isInKiziApp = function() {
        return null != p.field(window, "jsinterface")
    };
    f.HTML5API_levelEnded = function(a) {
        null != f.HTML5API && null != f.HTML5API.levelEnded && f.HTML5API.levelEnded(a)
    };
    f.HTML5API_preloaderStarted =
        function(a) {
            null != f.HTML5API && null != f.HTML5API.preloaderStarted && f.HTML5API.preloaderStarted(a)
        };
    f.HTML5API_preloaderEnded = function(a) {
        null != f.HTML5API && null != f.HTML5API.preloaderEnded && f.HTML5API.preloaderEnded(a)
    };
    f.HTML5API_showStartButton = function() {
        return null != f.HTML5API && null != f.HTML5API.showStartButton && f.HTML5API.showStartButton()
    };
    f.HTML5API_showMidroll = function() {
        return null != f.HTML5API && null != f.HTML5API.showMidroll && f.HTML5API.showMidroll()
    };
    f.HTML5API_sendLocalNotification = function(a,
        b, c, e, l, d, h) {
        return null != f.HTML5API && null != f.HTML5API.sendLocalNotification ? f.HTML5API.sendLocalNotification(a, b, c, e, l, d, h) : null
    };
    f.HTML5API_cancelLocalNotification = function(a) {
        null != f.HTML5API && null != p.field(f.HTML5API, "cancelLocalNotification") && f.HTML5API.cancelLocalNotification(a)
    };
    f.HTML5API_isIncentivizedVideoAvailable = function() {
        return null != f.HTML5API && null != f.HTML5API.isIncentivizedVideoAvailable && f.HTML5API.isIncentivizedVideoAvailable()
    };
    f.HTML5API_showIncentivizedVideo = function(a) {
        null !=
            f.HTML5API && null != f.HTML5API.showIncentivizedVideo && f.HTML5API.showIncentivizedVideo(a)
    };
    f.HTML5API_reportCustomEvent = function(a, b) {
        null == b && (b = {});
        b.custom_event_name = a;
        null != f.HTML5API && null != f.HTML5API.reportCustomEvent && f.HTML5API.reportCustomEvent(b)
    };
    f.HTML5API_getUserId = function() {
        return null != f.HTML5API && null != f.HTML5API.getUserId ? f.HTML5API.getUserId() : null
    };
    f.HTML5API_setAlternativeId = function() {
        null != f.HTML5API && null != f.HTML5API.setAlternativeId && f.HTML5API.setAlternativeId(f.alternativeId)
    };
    var Fa = function() {};
    i["flambe.util.Disposable"] = Fa;
    Fa.__name__ = ["flambe", "util", "Disposable"];
    Fa.prototype = {
        __class__: Fa
    };
    var R = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    i["flambe.Component"] = R;
    R.__name__ = ["flambe", "Component"];
    R.__interfaces__ = [Fa];
    R.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: R
    };
    var I = function() {};
    i["com.funtomic.GameOpsLogger"] = I;
    I.__name__ = ["com", "funtomic", "GameOpsLogger"];
    I.verbose = function(a) {
        I.log(2, a.join(" "))
    };
    I.debug = function(a) {
        I.log(1, a.join(" "))
    };
    I.error = function(a) {
        I.log(0, "ERROR - " + a.join(" "));
        null
    };
    I.log = function(a) {
        a <= I.logLevel && (a = new Date, a.getDay(), a.getMonth(), a.getFullYear(), a.getHours(), a.getMinutes(), a.getSeconds(), null)
    };
    var B = function() {};
    i["com.funtomic.GameOpsStorage"] = B;
    B.__name__ = ["com", "funtomic", "GameOpsStorage"];
    B.init = function() {
        null != L.resolveClass("flambe.System") &&
            (B._prefix = "flambe:");
        B._storage = window.localStorage;
        B._isInitialized = !0
    };
    B.validateInitialized = function() {
        if (!B._isInitialized) throw "GameOpsStorage Is Not Initialized!";
    };
    B.reportErrorEvent = function(a) {
        3 < B._isErrorEventsSent || (B._isErrorEventsSent += 1, f.reportEvent("local_storage_error", a))
    };
    B.get_supported = function() {
        return !0
    };
    B.set = function(a, b) {
        B.validateInitialized();
        var c;
        try {
            var e = new Ma;
            e.useCache = !0;
            e.useEnumIndex = !1;
            e.serialize(b);
            c = e.toString()
        } catch (l) {
            return console.warn("Storage serialization failed:",
                l), B.reportErrorEvent({
                error_message: "Storage serialization failed: " + o.string(l)
            }), !1
        }
        try {
            B._storage.setItem(B._prefix + a, c)
        } catch (d) {
            console.warn("localStorage.setItem failed:", d.message);
            c = -2;
            e = !0 == p.field(window, "isStorageRedirected");
            try {
                c = JSON.stringify(window.parent.localStorage).length / 1024
            } catch (f) {
                c = -1
            }
            B.reportErrorEvent({
                error_message: "localStorage.setItem failed: " + o.string(d.message),
                local_storage_size: c,
                is_storage_redirected: e
            });
            B.clear();
            return !1
        }
        return !0
    };
    B.get = function(a, b) {
        B.validateInitialized();
        var c = null;
        try {
            c = B._storage.getItem(B._prefix + a)
        } catch (e) {
            console.warn("localStorage.getItem failed:", e.message), B.reportErrorEvent({
                error_message: "localStorage.getItem failed: " + o.string(e.message)
            })
        }
        if (null != c) try {
            return ha.run(c)
        } catch (l) {
            console.warn("Storage unserialization failed:", l), B.reportErrorEvent({
                error_message: "Storage unserialization failed: " + o.string(l)
            })
        }
        return b
    };
    B.remove = function(a) {
        B.validateInitialized();
        try {
            B._storage.removeItem(B._prefix + a)
        } catch (b) {
            console.warn("localStorage.removeItem failed:",
                b.message), B.reportErrorEvent({
                error_message: "localStorage.removeItem failed: " + o.string(b.message)
            })
        }
    };
    B.clear = function() {
        B.validateInitialized();
        try {
            B._storage.clear()
        } catch (a) {
            console.warn("localStorage.clear failed:", a.message), B.reportErrorEvent({
                error_message: "localStorage.clear failed: " + o.string(a.message)
            })
        }
    };
    var j = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    i["flambe.Entity"] = j;
    j.__name__ = ["flambe", "Entity"];
    j.__interfaces__ = [Fa];
    j.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var e = c.next;
                if (c == a) return null == b ? this.firstComponent = e : (b.owner = this, b.next = e), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2),
                    c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = e
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, e = this.firstChild; null != e;) c = e, e = e.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var e = c.next;
                if (c == a) {
                    null == b ? this.firstChild = e : b.next = e;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = e
            }
        },
        disposeChildren: function() {
            for (; null !=
                this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: j
    };
    var Mc = function() {};
    i["flambe.util.PackageLog"] = Mc;
    Mc.__name__ = ["flambe", "util", "PackageLog"];
    var pc = function() {};
    i["flambe.platform.Platform"] = pc;
    pc.__name__ = ["flambe", "platform", "Platform"];
    pc.prototype = {
        __class__: pc
    };
    var Sa = function() {};
    i["flambe.platform.html.HtmlPlatform"] = Sa;
    Sa.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    Sa.__interfaces__ = [pc];
    Sa.prototype = {
        init: function() {
            var a = this;
            z.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new hb(b);
            this._pointer = new fa;
            this._mouse = new Hb(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new ib;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container =
                b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var e = 0,
                l = function(c) {
                    if (!(1E3 > c.timeStamp - e)) {
                        var l = b.getBoundingClientRect(),
                            d = a.getX(c, l),
                            l = a.getY(c, l);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(d, l, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(d, l);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(d, l, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(d,
                                    l, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", l, !1);
            window.addEventListener("mousemove", l, !1);
            window.addEventListener("mouseup", l, !1);
            b.addEventListener("mousewheel", l, !1);
            b.addEventListener("DOMMouseScroll", l, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var d = "undefined" != typeof window.ontouchstart,
                l = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (d || l) {
                var f = new Ib(this._pointer,
                    d ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = f;
                l = function(b) {
                    var c;
                    c = d ? b.changedTouches : [b];
                    var l = b.target.getBoundingClientRect();
                    e = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            z.SHOULD_HIDE_MOBILE_BROWSER && z.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var h = c[b];
                                ++b;
                                var g = a.getX(h, l),
                                    i = a.getY(h, l);
                                f.submitDown((d ? h.identifier : h.pointerId) | 0, g, i)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b <
                                c.length;) h = c[b], ++b, g = a.getX(h, l), i = a.getY(h, l), f.submitMove((d ? h.identifier : h.pointerId) | 0, g, i);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) h = c[b], ++b, g = a.getX(h, l), i = a.getY(h, l), f.submitUp((d ? h.identifier : h.pointerId) | 0, g, i)
                    }
                };
                d ? (b.addEventListener("touchstart", l, !1), b.addEventListener("touchmove", l, !1), b.addEventListener("touchend", l, !1), b.addEventListener("touchcancel", l, !1)) : (b.addEventListener("MSPointerDown", l, !1), b.addEventListener("MSPointerMove",
                    l, !1), b.addEventListener("MSPointerUp", l, !1))
            } else this._touch = new Jb;
            var h = window.onerror;
            window.onerror = function(a, b, c) {
                m.uncaughtError.emit(a);
                return null != h ? h(a, b, c) : !1
            };
            var g = z.loadExtension("hidden", window.document);
            null != g.value ? (l = function() {
                m.hidden.set__(p.field(window.document, g.field))
            }, l(null), window.document.addEventListener(g.prefix + "visibilitychange", l, !1)) : (l = function(a) {
                m.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", l, !1), window.addEventListener("pagehide",
                l, !1));
            m.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var i = z.loadExtension("requestAnimationFrame").value;
            if (null != i) {
                var k = window.performance,
                    j = null != k && z.polyfill("now", k);
                j ? this._lastUpdate = k.now() : null;
                var n = null,
                    n = function(c) {
                        a.update(j ? k.now() : c);
                        i(n, b)
                    };
                i(n, b)
            } else window.setInterval(function() {
                a.update(Date.now())
            }, 16);
            qb.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) {
            return (new J(this,
                a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getTime: function() {
            return Date.now() / 1E3
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            m.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getTouch: function() {
            return this._touch
        },
        getExternal: function() {
            null == this._external && (this._external = new Kb);
            return this._external
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX - b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            try {
                var b = Nc.getContextWebGL(a, {
                    alpha: !1,
                    depth: !1,
                    failIfMajorPerformanceCaveat: !0
                });
                if (null != b)
                    if (z.detectSlowDriver(b)) null;
                    else return new Lb(this._stage, b)
            } catch (c) {}
            return new jb(a)
        },
        __class__: Sa
    };
    var ia = function(a, b) {
        this._value = a;
        this._changed = null != b ? new kb(b) : null
    };
    i["flambe.util.Value"] = ia;
    ia.__name__ = ["flambe",
        "util", "Value"
    ];
    ia.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new kb);
            return this._changed
        },
        __class__: ia
    };
    var lb = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    i["flambe.util.SignalConnection"] = lb;
    lb.__name__ = ["flambe", "util", "SignalConnection"];
    lb.__interfaces__ = [Fa];
    lb.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: lb
    };
    var Y = function(a) {
        this._head = null != a ? new lb(this, a) : null;
        this._deferredTasks = null
    };
    i["flambe.util.SignalBase"] = Y;
    Y.__name__ = ["flambe", "util", "SignalBase"];
    Y.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                e = new lb(this, a);
            this._head == Y.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(e, b)
            }) : this.listAdd(e, b);
            return e
        },
        disconnect: function(a) {
            var b = this;
            this._head == Y.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new qc(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = Y.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head,
                this._head = a;
            else {
                for (var c = null, e = this._head; null != e;) c = e, e = e._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: Y
    };
    var kb = function(a) {
        Y.call(this, a)
    };
    i["flambe.util.Signal2"] = kb;
    kb.__name__ = ["flambe", "util", "Signal2"];
    kb.__super__ = Y;
    kb.prototype = x(Y.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head ==
                Y.DISPATCHING_SENTINEL ? this.defer(function() {
                    c.emitImpl(a, b)
                }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), e = c; null != e;) e._listener(a, b), e.stayInList || e.dispose(), e = e._next;
            this.didEmit(c)
        },
        __class__: kb
    });
    var M = function(a) {
        Y.call(this, a)
    };
    i["flambe.util.Signal1"] = M;
    M.__name__ = ["flambe", "util", "Signal1"];
    M.__super__ = Y;
    M.prototype = x(Y.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == Y.DISPATCHING_SENTINEL ?
                this.defer(function() {
                    b.emitImpl(a)
                }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: M
    });
    var v = function(a, b) {
        this._behavior = null;
        ia.call(this, a, b)
    };
    i["flambe.animation.AnimatedFloat"] = v;
    v.__name__ = ["flambe", "animation", "AnimatedFloat"];
    v.__super__ = ia;
    v.prototype = x(ia.prototype, {
        set__: function(a) {
            this._behavior = null;
            return ia.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior &&
                (ia.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animate: function(a, b, c, e) {
            this.set__(a);
            this.animateTo(b, c, e)
        },
        animateTo: function(a, b, c) {
            this.set_behavior(new Za(this._value, a, b, c))
        },
        animateBy: function(a, b, c) {
            this.set_behavior(new Za(this._value, this._value + a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: v
    });
    var m = function() {};
    i["flambe.System"] = m;
    m.__name__ = ["flambe", "System"];
    m.init = function() {
        m._calledInit ||
            (m._platform.init(), m._calledInit = !0)
    };
    var qb = function() {};
    i["flambe.Log"] = qb;
    qb.__name__ = ["flambe", "Log"];
    qb.info = function() {
        null
    };
    qb.__super__ = Mc;
    qb.prototype = x(Mc.prototype, {
        __class__: qb
    });
    var rc = function() {
        this._realDt = 0
    };
    i["flambe.SpeedAdjuster"] = rc;
    rc.__name__ = ["flambe", "SpeedAdjuster"];
    rc.__super__ = R;
    rc.prototype = x(R.prototype, {
        get_name: function() {
            return "SpeedAdjuster_7"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: rc
    });
    var t = function() {};
    i["flambe.additions.Helpers"] = t;
    t.__name__ = ["flambe", "additions", "Helpers"];
    t.formatNumber = function(a, b) {
        null == b && (b = 2);
        for (var c = [{
            magnitude: Math.pow(10, 24),
            label: "Y"
        }, {
            magnitude: Math.pow(10, 21),
            label: "Z"
        }, {
            magnitude: Math.pow(10, 18),
            label: "E"
        }, {
            magnitude: Math.pow(10, 15),
            label: "P"
        }, {
            magnitude: Math.pow(10, 12),
            label: "T"
        }, {
            magnitude: Math.pow(10, 9),
            label: "B"
        }, {
            magnitude: Math.pow(10, 6),
            label: "M"
        }, {
            magnitude: Math.pow(10, 3),
            label: "k"
        }], e = Math.abs(a), l = 0; l < c.length;) {
            var d = c[l];
            ++l;
            if (e >= d.magnitude) return o.string(t.floatToStringPrecision(a /
                d.magnitude, b)) + d.label
        }
        return null == a ? "null" : "" + a
    };
    t.floatToStringPrecision = function(a, b) {
        if (0 == b) return "" + Math.round(a);
        var a = Math.round(a * Math.pow(10, b)),
            c = "" + a,
            e = c.length;
        if (e <= b) {
            for (; e < b;) c = "0" + c, e++;
            return "0." + c
        }
        return s.substr(c, 0, c.length - b) + "." + s.substr(c, c.length - b, null)
    };
    t.intToCommasString = function(a) {
        for (var a = null == a ? "null" : "" + a, b = "", c = 0, e = a.length; c < e;) {
            var l = c++;
            0 < l && 0 == l % 3 && (b = "," + b);
            b = s.substr(a, a.length - l - 1, 1) + b
        }
        return b
    };
    t.getRandRange = function(a, b) {
        return o.random(b - a) + a
    };
    t.chanceTest =
        function(a) {
            return o.random(100) < a
        };
    t.clampInt = function(a, b, c) {
        return Math.round(a < b ? b : a > c ? c : a)
    };
    t.clampFloat = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    t.getClockString = function(a) {
        a = la.parse(1E3 * a);
        return t.addZeros(a.hours, 2) + ":" + t.addZeros(a.minutes, 2) + ":" + t.addZeros(a.seconds, 2)
    };
    t.getCurrentDateString = function() {
        var a = new Date;
        return t.addZeros(a.getFullYear(), 4) + t.addZeros(a.getMonth() + 1, 2) + t.addZeros(a.getDate(), 2)
    };
    t.addZeros = function(a, b) {
        var c = "" + a,
            e = c.length;
        if (e <= b)
            for (; e < b;) c = "0" + c, e++;
        return c
    };
    t.generateRandomString = function(a) {
        for (var b = "", c = 0; c < a;) c++, b += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(61 * Math.random()));
        return b
    };
    var sc = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    i["flambe.math.Point"] = sc;
    sc.__name__ = ["flambe", "math", "Point"];
    sc.prototype = {
        __class__: sc
    };
    var y = function() {
        this._sinCache = this._cosCache = 0;
        this.blendMode = this.scissor = null;
        var a = this;
        R.call(this);
        this._flags |= 182;
        this._localMatrix = new Ga;
        var b = function() {
            a._flags |=
                24
        };
        this.x = new v(0, b);
        this.y = new v(0, b);
        this.rotation = new v(0, function() {
            a._flags |= 152
        });
        this.scaleX = new v(1, b);
        this.scaleY = new v(1, b);
        this.anchorX = new v(0, b);
        this.anchorY = new v(0, b);
        this.alpha = new v(1)
    };
    i["flambe.display.Sprite"] = y;
    y.__name__ = ["flambe", "display", "Sprite"];
    y.hitTest = function(a, b, c) {
        var e = a._compMap.Sprite_0;
        if (null != e) {
            if (6 != (e._flags & 6)) return null;
            e.getLocalMatrix().inverseTransform(b, c, y._scratchPoint) && (b = y._scratchPoint.x, c = y._scratchPoint.y);
            var l = e.scissor;
            if (null != l && !l.contains(b,
                c)) return null
        }
        a = y.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != e && e.containsLocal(b, c) ? e : null
    };
    y.render = function(a, b) {
        var c = a._compMap.Sprite_0;
        if (null != c) {
            var e = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= e) return;
            b.save();
            1 > e && b.multiplyAlpha(e);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var e = c.getLocalMatrix(),
                l = e.m02,
                d = e.m12;
            0 != (c._flags & 32) && (l = Math.round(l), d = Math.round(d));
            b.transform(e.m00, e.m10, e.m01, e.m11, l, d);
            e = c.scissor;
            null != e && b.applyScissor(e.x, e.y, e.width, e.height);
            c.draw(b)
        }
        e =
            a._compMap.Director_6;
        if (null != e) {
            e = e.occludedScenes;
            for (l = 0; l < e.length;) d = e[l], ++l, y.render(d, b)
        }
        for (e = a.firstChild; null != e;) l = e.next, y.render(e, b), e = l;
        null != c && b.restore()
    };
    y.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var e = y.hitTestBackwards(a.next, b, c);
            return null != e ? e : y.hitTest(a, b, c)
        }
        return null
    };
    y.__super__ = R;
    y.prototype = x(R.prototype, {
        get_name: function() {
            return "Sprite_0"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a &&
                a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            if (0 != (this._flags & 8)) {
                this._flags &= -9;
                if (0 != (this._flags & 128)) {
                    this._flags &= -129;
                    var a = 3.141592653589793 * this.rotation._value / 180;
                    this._sinCache = Math.sin(a);
                    this._cosCache = Math.cos(a)
                }
                var a = this.scaleX._value,
                    b = this.scaleY._value;
                this._localMatrix.set(this._cosCache * a, this._sinCache * a, -this._sinCache * b, this._cosCache * b, this.x._value, this.y._value);
                this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value)
            }
            return this._localMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        disablePointer: function() {
            this.set_pointerEnabled(!1);
            return this
        },
        onAdded: function() {
            0 != (this._flags &
                64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function() {},
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_0;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new M);
            return this._pointerDown
        },
        get_pointerMove: function() {
            null == this._pointerMove && (this._pointerMove = new M);
            return this._pointerMove
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new M);
            return this._pointerUp
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new M);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = m._platform.getPointer().move.connect(function(b) {
                for (var c =
                    b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                null != a._hoverConnection && (a._hoverConnection.dispose(), a._hoverConnection = null)
            }))
        },
        set_visible: function(a) {
            this._flags = tc.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = tc.set(this._flags, 4, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null !=
                this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: y
    });
    var D = function(a) {
        y.call(this);
        this.texture = a
    };
    i["flambe.display.ImageSprite"] = D;
    D.__name__ = ["flambe", "display", "ImageSprite"];
    D.__super__ = y;
    D.prototype = x(y.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: D
    });
    var U = function(a) {
        var b = this;
        D.call(this, a);
        this.pointerClick = new M;
        this.pointerSlide =
            new kb;
        this.pointerSlideUp = new M;
        this.pointerSlideDown = new M;
        this.pointerSlideLeft = new M;
        this.pointerSlideRight = new M;
        this._pointerClickFlag = !1;
        this.get_pointerDown().connect(function(a) {
            b._pointerClickFlag = !0;
            b._lastDownPointerEvent = a.clone();
            m._platform.getPointer().up.connect(function() {
                b._pointerClickFlag = !1
            }).once()
        });
        this.get_pointerUp().connect(function(a) {
            b._pointerClickFlag && (8 < Math.max(Math.abs(a.viewX - b._lastDownPointerEvent.viewX), Math.abs(a.viewY - b._lastDownPointerEvent.viewY)) ? b.pointerSlide.emit(b._lastDownPointerEvent,
                a) : b.pointerClick.emit(a));
            b._pointerClickFlag = !1
        });
        this.pointerSlide.connect(function(a, e) {
            var l = e.viewX - a.viewX,
                d = e.viewY - a.viewY;
            Math.abs(l) > Math.abs(d) ? 1 == Q.sign(l) ? b.pointerSlideRight.emit(l) : b.pointerSlideLeft.emit(-l) : Math.abs(l) < Math.abs(d) && (1 == Q.sign(d) ? b.pointerSlideDown.emit(d) : b.pointerSlideUp.emit(-d))
        })
    };
    i["flambe.additions.ImageSpriteExtension"] = U;
    U.__name__ = ["flambe", "additions", "ImageSpriteExtension"];
    U.__super__ = D;
    U.prototype = x(D.prototype, {
        isHit: function(a) {
            a = a.owner._compMap.Sprite_0;
            return this.x._value + this.getNaturalWidth() - this.anchorX._value < a.x._value - a.anchorX._value || this.x._value - this.anchorX._value > a.x._value + a.getNaturalWidth() - a.anchorX._value || this.y._value + this.getNaturalHeight() - this.anchorY._value / 2 < a.y._value - a.anchorY._value || this.y._value - this.anchorY._value > a.y._value + a.getNaturalHeight() - a.anchorY._value ? !1 : !0
        },
        onRemoved: function() {
            D.prototype.onRemoved.call(this);
            null != this.owner && this.owner.dispose()
        },
        __class__: U
    });
    var oa = function(a, b, c) {
        null == c && (c = 24);
        null == b && (b = -1);
        this.onFrameChanged = new M;
        this.onLoopFinish = new Na;
        this.onPlaysFinish = new Na;
        this.assetName = a;
        this._currentFrame = 0;
        this.plays = b;
        this._texturesMem = [];
        this._frameDT = 0;
        this.framesPerSec = c;
        D.call(this, this.getTexture())
    };
    i["flambe.additions.PngSequenceImageSprite"] = oa;
    oa.__name__ = ["flambe", "additions", "PngSequenceImageSprite"];
    oa.__super__ = D;
    oa.prototype = x(D.prototype, {
        nextImg: function() {
            if (0 != this.plays) {
                this._currentFrame += 1;
                var a = this.getTexture(!1);
                null == a && (this._currentFrame = 0, 0 <
                    this.plays && (this.plays -= 1), this.onLoopFinish.emit(), a = this.getTexture());
                0 == this.plays ? this.onPlaysFinish.emit() : (this.texture = a, this.onFrameChanged.emit(this._currentFrame))
            }
        },
        getTexture: function(a) {
            null == a && (a = !0);
            this._currentFrame > this._texturesMem.length - 1 && this._texturesMem.push(d.atlas.getTexture(this.assetName + this._currentFrame, a));
            return this._texturesMem[this._currentFrame]
        },
        onUpdate: function(a) {
            D.prototype.onUpdate.call(this, a);
            this._frameDT += a;
            this._frameDT >= 1 / this.framesPerSec && (this.nextImg(),
                this._frameDT -= 1 / this.framesPerSec)
        },
        onRemoved: function() {
            D.prototype.onRemoved.call(this)
        },
        __class__: oa
    });
    var uc = function() {};
    i["flambe.animation.Behavior"] = uc;
    uc.__name__ = ["flambe", "animation", "Behavior"];
    uc.prototype = {
        __class__: uc
    };
    var r = function() {};
    i["flambe.animation.Ease"] = r;
    r.__name__ = ["flambe", "animation", "Ease"];
    r.linear = function(a) {
        return a
    };
    r.sineIn = function(a) {
        return 1 - Math.cos(1.5707963267948966 * a)
    };
    r.sineOut = function(a) {
        return Math.sin(1.5707963267948966 * a)
    };
    r.sineInOut = function(a) {
        return 0.5 -
            Math.cos(3.141592653589793 * a) / 2
    };
    r.backOut = function(a) {
        return 1 - --a * a * (-2.70158 * a - 1.70158)
    };
    r.backInOut = function(a) {
        a *= 2;
        if (1 > a) return a * a * (2.70158 * a - 1.70158) / 2;
        a -= 2;
        return (1 - a * a * (-2.70158 * a - 1.70158)) / 2 + 0.5
    };
    r.elasticInOut = function(a) {
        return 0.5 > a ? -0.5 * Math.pow(2, 10 * (a -= 0.5)) * Math.sin(6.283185307179586 * (a - 0.1) / 0.4) : 0.5 * Math.pow(2, -10 * (a -= 0.5)) * Math.sin(6.283185307179586 * (a - 0.1) / 0.4) + 1
    };
    var Za = function(a, b, c, e) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != e ? e : r.linear
    };
    i["flambe.animation.Tween"] = Za;
    Za.__name__ = ["flambe", "animation", "Tween"];
    Za.__interfaces__ = [uc];
    Za.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: Za
    };
    var $a = function() {};
    i["flambe.asset.Asset"] = $a;
    $a.__name__ = ["flambe", "asset", "Asset"];
    $a.__interfaces__ = [Fa];
    $a.prototype = {
        __class__: $a
    };
    var q = i["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    q.WEBP = ["WEBP", 0];
    q.WEBP.__enum__ = q;
    q.JXR = ["JXR", 1];
    q.JXR.__enum__ = q;
    q.PNG = ["PNG", 2];
    q.PNG.__enum__ = q;
    q.JPG = ["JPG", 3];
    q.JPG.__enum__ = q;
    q.GIF = ["GIF", 4];
    q.GIF.__enum__ = q;
    q.DDS = ["DDS", 5];
    q.DDS.__enum__ = q;
    q.PVR = ["PVR", 6];
    q.PVR.__enum__ = q;
    q.PKM = ["PKM", 7];
    q.PKM.__enum__ = q;
    q.MP3 = ["MP3", 8];
    q.MP3.__enum__ = q;
    q.M4A = ["M4A", 9];
    q.M4A.__enum__ = q;
    q.OPUS = ["OPUS", 10];
    q.OPUS.__enum__ = q;
    q.OGG = ["OGG", 11];
    q.OGG.__enum__ = q;
    q.WAV = ["WAV", 12];
    q.WAV.__enum__ = q;
    q.Data = ["Data", 13];
    q.Data.__enum__ = q;
    var vc = function(a, b, c, e) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = e
    };
    i["flambe.asset.AssetEntry"] = vc;
    vc.__name__ = ["flambe", "asset", "AssetEntry"];
    vc.prototype = {
        __class__: vc
    };
    var Mb = function() {};
    i["flambe.asset.AssetPack"] = Mb;
    Mb.__name__ = ["flambe", "asset", "AssetPack"];
    Mb.__interfaces__ = [Fa];
    Mb.prototype = {
        __class__: Mb
    };
    var Nb = function() {};
    i["flambe.asset.File"] = Nb;
    Nb.__name__ = ["flambe", "asset",
        "File"
    ];
    Nb.__interfaces__ = [$a];
    Nb.prototype = {
        __class__: Nb
    };
    var ga = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    i["flambe.asset.Manifest"] = ga;
    ga.__name__ = ["flambe", "asset", "Manifest"];
    ga.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = p.field(Oc.getType(ga).assets[0], a);
        if (null == c) {
            if (b) throw V.withFields("Missing asset pack", ["name", a]);
            return null
        }
        var e = new ga;
        e.set_localBase("assets");
        for (var l = 0; l < c.length;) {
            var d = c[l];
            ++l;
            var f = d.name,
                h = a + "/" + f + "?v=" + o.string(d.md5),
                g = ga.inferFormat(f);
            g != q.Data && (f = V.removeFileExtension(f));
            e.add(f, h, d.bytes, g)
        }
        return e
    };
    ga.inferFormat = function(a) {
        a = V.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return q.GIF;
            case "jpg":
            case "jpeg":
                return q.JPG;
            case "jxr":
            case "wdp":
                return q.JXR;
            case "png":
                return q.PNG;
            case "webp":
                return q.WEBP;
            case "dds":
                return q.DDS;
            case "pvr":
                return q.PVR;
            case "pkm":
                return q.PKM;
            case "m4a":
                return q.M4A;
            case "mp3":
                return q.MP3;
            case "ogg":
                return q.OGG;
            case "opus":
                return q.OPUS;
            case "wav":
                return q.WAV
        } else null;
        return q.Data
    };
    ga.prototype = {
        add: function(a, b, c, e) {
            null == c && (c = 0);
            null == e && (e = ga.inferFormat(b));
            a = new vc(a, b, e, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return s.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && ga._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? V.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && Pc.that(!T.startsWith(a, "http://") && !T.startsWith(a,
                "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: ga
    };
    var Z = i["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    Z.Normal = ["Normal", 0];
    Z.Normal.__enum__ = Z;
    Z.Add = ["Add", 1];
    Z.Add.__enum__ = Z;
    Z.Multiply = ["Multiply", 2];
    Z.Multiply.__enum__ = Z;
    Z.Screen = ["Screen", 3];
    Z.Screen.__enum__ = Z;
    Z.Mask = ["Mask", 4];
    Z.Mask.__enum__ = Z;
    Z.Copy = ["Copy", 5];
    Z.Copy.__enum__ = Z;
    var Ta = i["flambe.display.EmitterType"] = {
        __ename__: ["flambe", "display", "EmitterType"],
        __constructs__: ["Gravity", "Radial"]
    };
    Ta.Gravity = ["Gravity", 0];
    Ta.Gravity.__enum__ = Ta;
    Ta.Radial = ["Radial", 1];
    Ta.Radial.__enum__ = Ta;
    var A = function(a, b) {
        this._file = a.getFile(b + ".pex");
        for (var c = w.parse(this._file.toString()), e = 0, l = 0, d = b.lastIndexOf("/"), d = 0 <= d ? s.substr(b, 0, d + 1) : "", c = c.firstElement().elements(); c.hasNext();) {
            var f = c.next();
            switch (f.get_nodeName().toLowerCase()) {
                case "texture":
                    this.texture =
                        a.getTexture(d + V.removeFileExtension(f.get("name")));
                    break;
                case "angle":
                    this.angle = A.getFloat(f, "value");
                    break;
                case "anglevariance":
                    this.angleVariance = A.getFloat(f, "value");
                    break;
                case "blendfuncdestination":
                    l = o["int"](A.getFloat(f, "value"));
                    break;
                case "blendfuncsource":
                    e = o["int"](A.getFloat(f, "value"));
                    break;
                case "duration":
                    this.duration = A.getFloat(f, "value");
                    break;
                case "emittertype":
                    this.type = 0 == o["int"](A.getFloat(f, "value")) ? Ta.Gravity : Ta.Radial;
                    break;
                case "finishcolor":
                    this.alphaEnd = A.getFloat(f,
                        "alpha");
                    break;
                case "finishcolorvariance":
                    this.alphaEndVariance = A.getFloat(f, "alpha");
                    break;
                case "finishparticlesize":
                    this.sizeEnd = A.getFloat(f, "value");
                    break;
                case "finishparticlesizevariance":
                    this.sizeEndVariance = A.getFloat(f, "value");
                    break;
                case "gravity":
                    this.gravityX = A.getFloat(f, "x");
                    this.gravityY = A.getFloat(f, "y");
                    break;
                case "maxparticles":
                    this.maxParticles = o["int"](A.getFloat(f, "value"));
                    break;
                case "maxradius":
                    this.maxRadius = A.getFloat(f, "value");
                    break;
                case "maxradiusvariance":
                    this.maxRadiusVariance =
                        A.getFloat(f, "value");
                    break;
                case "minradius":
                    this.minRadius = A.getFloat(f, "value");
                    break;
                case "particlelifespan":
                    this.lifespan = A.getFloat(f, "value");
                    break;
                case "particlelifespanvariance":
                    this.lifespanVariance = A.getFloat(f, "value");
                    break;
                case "radialaccelvariance":
                    this.radialAccelVariance = A.getFloat(f, "value");
                    break;
                case "radialacceleration":
                    this.radialAccel = A.getFloat(f, "value");
                    break;
                case "rotatepersecond":
                    this.rotatePerSecond = A.getFloat(f, "value");
                    break;
                case "rotatepersecondvariance":
                    this.rotatePerSecondVariance =
                        A.getFloat(f, "value");
                    break;
                case "rotationend":
                    this.rotationEnd = A.getFloat(f, "value");
                    break;
                case "rotationendvariance":
                    this.rotationEndVariance = A.getFloat(f, "value");
                    break;
                case "rotationstart":
                    this.rotationStart = A.getFloat(f, "value");
                    break;
                case "rotationstartvariance":
                    this.rotationStartVariance = A.getFloat(f, "value");
                    break;
                case "sourcepositionvariance":
                    this.emitXVariance = A.getFloat(f, "x");
                    this.emitYVariance = A.getFloat(f, "y");
                    break;
                case "speed":
                    this.speed = A.getFloat(f, "value");
                    break;
                case "speedvariance":
                    this.speedVariance =
                        A.getFloat(f, "value");
                    break;
                case "startcolor":
                    this.alphaStart = A.getFloat(f, "alpha");
                    break;
                case "startcolorvariance":
                    this.alphaStartVariance = A.getFloat(f, "alpha");
                    break;
                case "startparticlesize":
                    this.sizeStart = A.getFloat(f, "value");
                    break;
                case "startparticlesizevariance":
                    this.sizeStartVariance = A.getFloat(f, "value");
                    break;
                case "tangentialaccelvariance":
                    this.tangentialAccelVariance = A.getFloat(f, "value");
                    break;
                case "tangentialacceleration":
                    this.tangentialAccel = A.getFloat(f, "value")
            }
        }
        0 >= this.lifespan && (this.lifespan =
            this.duration);
        1 == e && 1 == l ? this.blendMode = Z.Add : 1 == e && 771 == l ? this.blendMode = null : (0 != e || 0 != l) && null
    };
    i["flambe.display.EmitterMold"] = A;
    A.__name__ = ["flambe", "display", "EmitterMold"];
    A.getFloat = function(a, b) {
        return o.parseFloat(a.get(b))
    };
    A.prototype = {
        __class__: A
    };
    var S = function(a) {
        this._emitElapsed = this._totalElapsed = 0;
        this.enabled = !0;
        this.numParticles = 0;
        y.call(this);
        this.texture = a.texture;
        this.blendMode = a.blendMode;
        this.type = a.type;
        this.alphaEnd = new v(a.alphaEnd);
        this.alphaEndVariance = new v(a.alphaEndVariance);
        this.alphaStart = new v(a.alphaStart);
        this.alphaStartVariance = new v(a.alphaStartVariance);
        this.angle = new v(a.angle);
        this.angleVariance = new v(a.angleVariance);
        this.duration = a.duration;
        this.emitXVariance = new v(a.emitXVariance);
        this.emitYVariance = new v(a.emitYVariance);
        this.gravityX = new v(a.gravityX);
        this.gravityY = new v(a.gravityY);
        this.maxRadius = new v(a.maxRadius);
        this.maxRadiusVariance = new v(a.maxRadiusVariance);
        this.minRadius = new v(a.minRadius);
        this.lifespan = new v(a.lifespan);
        this.lifespanVariance =
            new v(a.lifespanVariance);
        this.radialAccel = new v(a.radialAccel);
        this.radialAccelVariance = new v(a.radialAccelVariance);
        this.rotatePerSecond = new v(a.rotatePerSecond);
        this.rotatePerSecondVariance = new v(a.rotatePerSecondVariance);
        this.rotationEnd = new v(a.rotationEnd);
        this.rotationEndVariance = new v(a.rotationEndVariance);
        this.rotationStart = new v(a.rotationStart);
        this.rotationStartVariance = new v(a.rotationStartVariance);
        this.sizeEnd = new v(a.sizeEnd);
        this.sizeEndVariance = new v(a.sizeEndVariance);
        this.sizeStart =
            new v(a.sizeStart);
        this.sizeStartVariance = new v(a.sizeStartVariance);
        this.speed = new v(a.speed);
        this.speedVariance = new v(a.speedVariance);
        this.tangentialAccel = new v(a.tangentialAccel);
        this.tangentialAccelVariance = new v(a.tangentialAccelVariance);
        this.emitX = new v(0);
        this.emitY = new v(0);
        this._particles = Array(a.maxParticles);
        for (var a = 0, b = this._particles.length; a < b;) this._particles[a] = new Ob, ++a
    };
    i["flambe.display.EmitterSprite"] = S;
    S.__name__ = ["flambe", "display", "EmitterSprite"];
    S.random = function(a, b) {
        0 !=
            b && (a += b * (2 * Math.random() - 1));
        return a
    };
    S.__super__ = y;
    S.prototype = x(y.prototype, {
        onUpdate: function(a) {
            y.prototype.onUpdate.call(this, a);
            this.alphaEnd.update(a);
            this.alphaEndVariance.update(a);
            this.alphaStart.update(a);
            this.alphaStartVariance.update(a);
            this.angle.update(a);
            this.angleVariance.update(a);
            this.emitX.update(a);
            this.emitXVariance.update(a);
            this.emitY.update(a);
            this.emitYVariance.update(a);
            this.gravityX.update(a);
            this.gravityY.update(a);
            this.lifespan.update(a);
            this.lifespanVariance.update(a);
            this.maxRadius.update(a);
            this.maxRadiusVariance.update(a);
            this.minRadius.update(a);
            this.radialAccel.update(a);
            this.radialAccelVariance.update(a);
            this.rotatePerSecond.update(a);
            this.rotatePerSecondVariance.update(a);
            this.rotationEnd.update(a);
            this.rotationEndVariance.update(a);
            this.rotationStart.update(a);
            this.rotationStartVariance.update(a);
            this.sizeEnd.update(a);
            this.sizeEndVariance.update(a);
            this.sizeStart.update(a);
            this.sizeStartVariance.update(a);
            this.speed.update(a);
            this.speedVariance.update(a);
            this.tangentialAccel.update(a);
            this.tangentialAccelVariance.update(a);
            for (var b = this.type == Ta.Gravity, c = 0; c < this.numParticles;) {
                var e = this._particles[c];
                if (e.life > a) {
                    if (b) {
                        e.x += e.velX * a;
                        e.y += e.velY * a;
                        var l = this.gravityX._value,
                            d = -this.gravityY._value;
                        if (0 != e.radialAccel || 0 != e.tangentialAccel) var f = e.x - e.emitX,
                            h = e.y - e.emitY,
                            g = Math.sqrt(f * f + h * h),
                            f = f / g,
                            h = h / g,
                            l = l + f * e.radialAccel,
                            d = d + h * e.radialAccel,
                            g = f,
                            l = l + -h * e.tangentialAccel,
                            d = d + g * e.tangentialAccel;
                        e.velX += l * a;
                        e.velY += d * a
                    } else e.radialRotation += e.velRadialRotation *
                        a, e.radialRadius += e.velRadialRadius * a, l = e.radialRadius, e.x = this.emitX._value - Math.cos(e.radialRotation) * l, e.y = this.emitY._value - Math.sin(e.radialRotation) * l, l < this.minRadius._value && (e.life = 0);
                    e.scale += e.velScale * a;
                    e.rotation += e.velRotation * a;
                    e.alpha += e.velAlpha * a;
                    e.life -= a;
                    ++c
                } else --this.numParticles, c != this.numParticles && (this._particles[c] = this._particles[this.numParticles], this._particles[this.numParticles] = e)
            }
            if (this.enabled) {
                if (0 < this.duration && (this._totalElapsed += a, this._totalElapsed >= this.duration)) {
                    this.enabled = !1;
                    return
                }
                b = this.lifespan._value / this._particles.length;
                for (this._emitElapsed += a; this._emitElapsed >= b;) this.numParticles < this._particles.length && this.initParticle(this._particles[this.numParticles]) && ++this.numParticles, this._emitElapsed -= b
            }
        },
        draw: function(a) {
            for (var b = -this.texture.get_width() / 2, c = 0, e = this.numParticles; c < e;) {
                var l = this._particles[c];
                a.save();
                a.translate(l.x, l.y);
                1 > l.alpha && a.multiplyAlpha(l.alpha);
                0 != l.rotation && a.rotate(l.rotation);
                1 != l.scale && a.scale(l.scale, l.scale);
                a.drawTexture(this.texture,
                    b, b);
                a.restore();
                ++c
            }
        },
        initParticle: function(a) {
            a.life = S.random(this.lifespan._value, this.lifespanVariance._value);
            if (0 >= a.life) return !1;
            a.emitX = this.emitX._value;
            a.emitY = this.emitY._value;
            var b = -Q.toRadians(S.random(this.angle._value, this.angleVariance._value)),
                c = S.random(this.speed._value, this.speedVariance._value);
            a.velX = c * Math.cos(b);
            a.velY = c * Math.sin(b);
            a.radialAccel = S.random(this.radialAccel._value, this.radialAccelVariance._value);
            a.tangentialAccel = S.random(this.tangentialAccel._value, this.tangentialAccelVariance._value);
            a.radialRadius = S.random(this.maxRadius._value, this.maxRadiusVariance._value);
            a.velRadialRadius = -a.radialRadius / a.life;
            a.radialRotation = b;
            a.velRadialRotation = Q.toRadians(S.random(this.rotatePerSecond._value, this.rotatePerSecondVariance._value));
            this.type == Ta.Gravity ? (a.x = S.random(this.emitX._value, this.emitXVariance._value), a.y = S.random(this.emitY._value, this.emitYVariance._value)) : (b = a.radialRadius, a.x = this.emitX._value - Math.cos(a.radialRotation) * b, a.y = this.emitY._value - Math.sin(a.radialRotation) *
                b);
            c = this.texture.get_width();
            b = S.random(this.sizeStart._value, this.sizeStartVariance._value) / c;
            c = S.random(this.sizeEnd._value, this.sizeEndVariance._value) / c;
            a.scale = b;
            a.velScale = (c - b) / a.life;
            b = S.random(this.rotationStart._value, this.rotationStartVariance._value);
            c = S.random(this.rotationEnd._value, this.rotationEndVariance._value);
            a.rotation = b;
            a.velRotation = (c - b) / a.life;
            b = S.random(this.alphaStart._value, this.alphaStartVariance._value);
            c = S.random(this.alphaEnd._value, this.alphaEndVariance._value);
            a.alpha =
                b;
            a.velAlpha = (c - b) / a.life;
            return !0
        },
        set_maxParticles: function(a) {
            var b = this._particles.length;
            for (this._particles.length = a; b < a;) this._particles[b] = new Ob, ++b;
            this.numParticles > a && (this.numParticles = a);
            return a
        },
        __class__: S
    });
    var Ob = function() {
        this.emitX = this.emitY = this.x = this.velX = this.y = this.velY = this.radialRadius = this.velRadialRadius = this.radialRotation = this.velRadialRotation = this.radialAccel = this.tangentialAccel = this.scale = this.velScale = this.rotation = this.velRotation = this.alpha = this.velAlpha = this.life =
            0
    };
    i["flambe.display._EmitterSprite.Particle"] = Ob;
    Ob.__name__ = ["flambe", "display", "_EmitterSprite", "Particle"];
    Ob.prototype = {
        __class__: Ob
    };
    var $ = function(a, b, c) {
        y.call(this);
        this.color = a;
        this.width = new v(b);
        this.height = new v(c)
    };
    i["flambe.display.FillSprite"] = $;
    $.__name__ = ["flambe", "display", "FillSprite"];
    $.__super__ = y;
    $.prototype = x(y.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        onUpdate: function(a) {
            y.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: $
    });
    var Pb = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    i["flambe.display.Glyph"] = Pb;
    Pb.__name__ = ["flambe", "display", "Glyph"];
    Pb.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null !=
                this._kernings ? o["int"](this._kernings.get(a)) : 0
        },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new Ba);
            this._kernings.set(a, b)
        },
        __class__: Pb
    };
    var xa = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    i["flambe.display.Font"] = xa;
    xa.__name__ = ["flambe", "display", "Font"];
    xa.prototype = {
        layoutText: function(a, b, c, e, l) {
            null == l && (l = 0);
            null == e && (e = 0);
            null == c && (c = 0);
            null == b && (b = N.Left);
            return new ab(this, a, b, c, e, l)
        },
        reload: function() {
            this._glyphs = new Ba;
            this._glyphs.set(xa.NEWLINE.charCode,
                xa.NEWLINE);
            for (var a = new mb(this._file.toString()), b = new Ba, c = this.name.lastIndexOf("/"), c = 0 <= c ? s.substr(this.name, 0, c + 1) : "", e = a.keywords(); e.hasNext();) switch (e.next()) {
                case "info":
                    for (var l = a.pairs(); l.hasNext();) {
                        var d = l.next();
                        switch (d.key) {
                            case "size":
                                this.size = d.getInt()
                        }
                    }
                    break;
                case "common":
                    for (l = a.pairs(); l.hasNext();) switch (d = l.next(), d.key) {
                        case "lineHeight":
                            this.lineHeight = d.getInt()
                    }
                    break;
                case "page":
                    for (var l = 0, d = null, f = a.pairs(); f.hasNext();) {
                        var h = f.next();
                        switch (h.key) {
                            case "id":
                                l =
                                    h.getInt();
                                break;
                            case "file":
                                d = h.getString()
                        }
                    }
                    d = this._pack.getTexture(c + V.removeFileExtension(d));
                    b.set(l, d);
                    break;
                case "char":
                    l = null;
                    for (d = a.pairs(); d.hasNext();) switch (f = d.next(), f.key) {
                        case "id":
                            l = new Pb(f.getInt());
                            break;
                        case "x":
                            l.x = f.getInt();
                            break;
                        case "y":
                            l.y = f.getInt();
                            break;
                        case "width":
                            l.width = f.getInt();
                            break;
                        case "height":
                            l.height = f.getInt();
                            break;
                        case "page":
                            f = f.getInt();
                            l.page = b.get(f);
                            break;
                        case "xoffset":
                            l.xOffset = f.getInt();
                            break;
                        case "yoffset":
                            l.yOffset = f.getInt();
                            break;
                        case "xadvance":
                            l.xAdvance =
                                f.getInt()
                    }
                    this._glyphs.set(l.charCode, l);
                    break;
                case "kerning":
                    l = null;
                    f = d = 0;
                    for (h = a.pairs(); h.hasNext();) {
                        var g = h.next();
                        switch (g.key) {
                            case "first":
                                l = this._glyphs.get(g.getInt());
                                break;
                            case "second":
                                d = g.getInt();
                                break;
                            case "amount":
                                f = g.getInt()
                        }
                    }
                    null != l && 0 != f && l.setKerning(d, f)
            }
        },
        __class__: xa
    };
    var N = i["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    N.Left = ["Left", 0];
    N.Left.__enum__ = N;
    N.Center = ["Center", 1];
    N.Center.__enum__ = N;
    N.Right = ["Right", 2];
    N.Right.__enum__ = N;
    var ab = function(a, b, c, e, l, d) {
        this.lines = 0;
        var f = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + d);
        this.bounds = new Ha;
        for (var h = [], d = b.length, g = 0; g < d;) {
            var i = g++,
                i = b.charCodeAt(i),
                i = a._glyphs.get(i);
            null != i ? this._glyphs.push(i) : null
        }
        for (var b = -1, k = 0, j = 0, a = a._glyphs.get(10), d = function() {
            f.bounds.width = Q.max(f.bounds.width, k);
            f.bounds.height += j;
            h[f.lines] = k;
            j = k = 0;
            ++f.lines
        }, g = 0; g < this._glyphs.length;) {
            i = this._glyphs[g];
            this._offsets[g] =
                Math.round(k);
            var n = 0 < e && k + i.width > e;
            n || i == a ? (n && (0 <= b ? (this._glyphs[b] = a, k = this._offsets[b], g = b) : this._glyphs.splice(g, 0, a)), b = -1, j = this._lineOffset, d()) : (32 == i.charCode && (b = g), k += i.xAdvance + l, j = Q.max(j, i.height + i.yOffset), g + 1 < this._glyphs.length && (k += i.getKerning(this._glyphs[g + 1].charCode)));
            ++g
        }
        d();
        l = 0;
        a = ab.getAlignOffset(c, h[0], e);
        b = 1.79769313486231E308;
        d = -1.79769313486231E308;
        i = g = 0;
        for (n = this._glyphs.length; i < n;) {
            var o = this._glyphs[i];
            10 == o.charCode && (l += this._lineOffset, ++g, a = ab.getAlignOffset(c,
                h[g], e));
            this._offsets[i] += a;
            var m = l + o.yOffset;
            b < m || (b = m);
            d = Q.max(d, m + o.height);
            ++i
        }
        this.bounds.x = ab.getAlignOffset(c, this.bounds.width, e);
        this.bounds.y = b;
        this.bounds.height = d - b
    };
    i["flambe.display.TextLayout"] = ab;
    ab.__name__ = ["flambe", "display", "TextLayout"];
    ab.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2)
        }
    };
    ab.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, e = this._glyphs.length; c < e;) {
                var l = this._glyphs[c];
                10 == l.charCode ? b += this._lineOffset :
                    l.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: ab
    };
    var mb = function(a) {
        this._configText = a;
        this._keywordPattern = new Pa("([A-Za-z]+)(.*)", "");
        this._pairPattern = new Pa('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    i["flambe.display._Font.ConfigParser"] = mb;
    mb.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    mb.advance = function(a, b) {
        var c = b.matchedPos();
        return s.substr(a, c.pos + c.len, a.length)
    };
    mb.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = mb.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = mb.advance(b, a._pairPattern);
                    return new wc(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: mb
    };
    var wc = function(a, b) {
        this.key = a;
        this._value = b
    };
    i["flambe.display._Font.ConfigPair"] = wc;
    wc.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    wc.prototype = {
        getInt: function() {
            return o.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : s.substr(this._value, 1, this._value.length - 2)
        },
        __class__: wc
    };
    var xc = function() {};
    i["flambe.display.Graphics"] = xc;
    xc.__name__ = ["flambe", "display", "Graphics"];
    xc.prototype = {
        __class__: xc
    };
    var bb = i["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    bb.Portrait = ["Portrait", 0];
    bb.Portrait.__enum__ = bb;
    bb.Landscape = ["Landscape", 1];
    bb.Landscape.__enum__ = bb;
    var Qb = function() {};
    i["flambe.display.Texture"] = Qb;
    Qb.__name__ = ["flambe", "display", "Texture"];
    Qb.__interfaces__ = [$a];
    Qb.prototype = {
        __class__: Qb
    };
    var Qc = function() {};
    i["flambe.display.SubTexture"] = Qc;
    Qc.__name__ = ["flambe", "display", "SubTexture"];
    Qc.__interfaces__ = [Qb];
    var G = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        y.call(this);
        this._font = a;
        this._text = b;
        this._align = N.Left;
        this._flags |= 256;
        var e = function() {
            c._flags |= 256
        };
        this.wrapWidth = new v(0,
            e);
        this.letterSpacing = new v(0, e);
        this.lineSpacing = new v(0, e)
    };
    i["flambe.display.TextSprite"] = G;
    G.__name__ = ["flambe", "display", "TextSprite"];
    G.__super__ = y;
    G.prototype = x(y.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        setWrapWidth: function(a) {
            this.wrapWidth.set__(a);
            return this
        },
        setAlign: function(a) {
            this.set_align(a);
            return this
        },
        set_text: function(a) {
            a != this._text && (this._text = a, this._flags |= 256);
            return a
        },
        set_align: function(a) {
            a != this._align && (this._align = a, this._flags |= 256);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 256) && (this._flags &= -257, this._layout = this._font.layoutText(this._text, this._align,
                this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            y.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: G
    });
    var g = i["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",")
    };
    g.A = ["A", 0];
    g.A.__enum__ = g;
    g.B = ["B", 1];
    g.B.__enum__ = g;
    g.C = ["C", 2];
    g.C.__enum__ = g;
    g.D = ["D", 3];
    g.D.__enum__ = g;
    g.E = ["E", 4];
    g.E.__enum__ = g;
    g.F = ["F", 5];
    g.F.__enum__ = g;
    g.G = ["G", 6];
    g.G.__enum__ = g;
    g.H = ["H", 7];
    g.H.__enum__ = g;
    g.I = ["I", 8];
    g.I.__enum__ = g;
    g.J = ["J", 9];
    g.J.__enum__ = g;
    g.K = ["K", 10];
    g.K.__enum__ = g;
    g.L = ["L", 11];
    g.L.__enum__ = g;
    g.M = ["M", 12];
    g.M.__enum__ = g;
    g.N = ["N", 13];
    g.N.__enum__ = g;
    g.O = ["O", 14];
    g.O.__enum__ = g;
    g.P = ["P", 15];
    g.P.__enum__ = g;
    g.Q = ["Q", 16];
    g.Q.__enum__ = g;
    g.R = ["R", 17];
    g.R.__enum__ = g;
    g.S = ["S",
        18
    ];
    g.S.__enum__ = g;
    g.T = ["T", 19];
    g.T.__enum__ = g;
    g.U = ["U", 20];
    g.U.__enum__ = g;
    g.V = ["V", 21];
    g.V.__enum__ = g;
    g.W = ["W", 22];
    g.W.__enum__ = g;
    g.X = ["X", 23];
    g.X.__enum__ = g;
    g.Y = ["Y", 24];
    g.Y.__enum__ = g;
    g.Z = ["Z", 25];
    g.Z.__enum__ = g;
    g.Number0 = ["Number0", 26];
    g.Number0.__enum__ = g;
    g.Number1 = ["Number1", 27];
    g.Number1.__enum__ = g;
    g.Number2 = ["Number2", 28];
    g.Number2.__enum__ = g;
    g.Number3 = ["Number3", 29];
    g.Number3.__enum__ = g;
    g.Number4 = ["Number4", 30];
    g.Number4.__enum__ = g;
    g.Number5 = ["Number5", 31];
    g.Number5.__enum__ = g;
    g.Number6 = ["Number6", 32];
    g.Number6.__enum__ = g;
    g.Number7 = ["Number7", 33];
    g.Number7.__enum__ = g;
    g.Number8 = ["Number8", 34];
    g.Number8.__enum__ = g;
    g.Number9 = ["Number9", 35];
    g.Number9.__enum__ = g;
    g.Numpad0 = ["Numpad0", 36];
    g.Numpad0.__enum__ = g;
    g.Numpad1 = ["Numpad1", 37];
    g.Numpad1.__enum__ = g;
    g.Numpad2 = ["Numpad2", 38];
    g.Numpad2.__enum__ = g;
    g.Numpad3 = ["Numpad3", 39];
    g.Numpad3.__enum__ = g;
    g.Numpad4 = ["Numpad4", 40];
    g.Numpad4.__enum__ = g;
    g.Numpad5 = ["Numpad5", 41];
    g.Numpad5.__enum__ = g;
    g.Numpad6 = ["Numpad6", 42];
    g.Numpad6.__enum__ = g;
    g.Numpad7 = ["Numpad7", 43];
    g.Numpad7.__enum__ = g;
    g.Numpad8 = ["Numpad8", 44];
    g.Numpad8.__enum__ = g;
    g.Numpad9 = ["Numpad9", 45];
    g.Numpad9.__enum__ = g;
    g.NumpadAdd = ["NumpadAdd", 46];
    g.NumpadAdd.__enum__ = g;
    g.NumpadDecimal = ["NumpadDecimal", 47];
    g.NumpadDecimal.__enum__ = g;
    g.NumpadDivide = ["NumpadDivide", 48];
    g.NumpadDivide.__enum__ = g;
    g.NumpadEnter = ["NumpadEnter", 49];
    g.NumpadEnter.__enum__ = g;
    g.NumpadMultiply = ["NumpadMultiply", 50];
    g.NumpadMultiply.__enum__ = g;
    g.NumpadSubtract = ["NumpadSubtract", 51];
    g.NumpadSubtract.__enum__ = g;
    g.F1 = ["F1", 52];
    g.F1.__enum__ = g;
    g.F2 = ["F2", 53];
    g.F2.__enum__ = g;
    g.F3 = ["F3", 54];
    g.F3.__enum__ = g;
    g.F4 = ["F4", 55];
    g.F4.__enum__ = g;
    g.F5 = ["F5", 56];
    g.F5.__enum__ = g;
    g.F6 = ["F6", 57];
    g.F6.__enum__ = g;
    g.F7 = ["F7", 58];
    g.F7.__enum__ = g;
    g.F8 = ["F8", 59];
    g.F8.__enum__ = g;
    g.F9 = ["F9", 60];
    g.F9.__enum__ = g;
    g.F10 = ["F10", 61];
    g.F10.__enum__ = g;
    g.F11 = ["F11", 62];
    g.F11.__enum__ = g;
    g.F12 = ["F12", 63];
    g.F12.__enum__ = g;
    g.F13 = ["F13", 64];
    g.F13.__enum__ = g;
    g.F14 = ["F14", 65];
    g.F14.__enum__ = g;
    g.F15 = ["F15", 66];
    g.F15.__enum__ = g;
    g.Left = ["Left", 67];
    g.Left.__enum__ =
        g;
    g.Up = ["Up", 68];
    g.Up.__enum__ = g;
    g.Right = ["Right", 69];
    g.Right.__enum__ = g;
    g.Down = ["Down", 70];
    g.Down.__enum__ = g;
    g.Alt = ["Alt", 71];
    g.Alt.__enum__ = g;
    g.Backquote = ["Backquote", 72];
    g.Backquote.__enum__ = g;
    g.Backslash = ["Backslash", 73];
    g.Backslash.__enum__ = g;
    g.Backspace = ["Backspace", 74];
    g.Backspace.__enum__ = g;
    g.CapsLock = ["CapsLock", 75];
    g.CapsLock.__enum__ = g;
    g.Comma = ["Comma", 76];
    g.Comma.__enum__ = g;
    g.Command = ["Command", 77];
    g.Command.__enum__ = g;
    g.Control = ["Control", 78];
    g.Control.__enum__ = g;
    g.Delete = ["Delete", 79];
    g.Delete.__enum__ = g;
    g.End = ["End", 80];
    g.End.__enum__ = g;
    g.Enter = ["Enter", 81];
    g.Enter.__enum__ = g;
    g.Equals = ["Equals", 82];
    g.Equals.__enum__ = g;
    g.Escape = ["Escape", 83];
    g.Escape.__enum__ = g;
    g.Home = ["Home", 84];
    g.Home.__enum__ = g;
    g.Insert = ["Insert", 85];
    g.Insert.__enum__ = g;
    g.LeftBracket = ["LeftBracket", 86];
    g.LeftBracket.__enum__ = g;
    g.Minus = ["Minus", 87];
    g.Minus.__enum__ = g;
    g.PageDown = ["PageDown", 88];
    g.PageDown.__enum__ = g;
    g.PageUp = ["PageUp", 89];
    g.PageUp.__enum__ = g;
    g.Period = ["Period", 90];
    g.Period.__enum__ = g;
    g.Quote = ["Quote", 91];
    g.Quote.__enum__ = g;
    g.RightBracket = ["RightBracket", 92];
    g.RightBracket.__enum__ = g;
    g.Semicolon = ["Semicolon", 93];
    g.Semicolon.__enum__ = g;
    g.Shift = ["Shift", 94];
    g.Shift.__enum__ = g;
    g.Slash = ["Slash", 95];
    g.Slash.__enum__ = g;
    g.Space = ["Space", 96];
    g.Space.__enum__ = g;
    g.Tab = ["Tab", 97];
    g.Tab.__enum__ = g;
    g.Menu = ["Menu", 98];
    g.Menu.__enum__ = g;
    g.Search = ["Search", 99];
    g.Search.__enum__ = g;
    g.Unknown = function(a) {
        a = ["Unknown", 100, a];
        a.__enum__ = g;
        return a
    };
    var pa = i["flambe.input.MouseButton"] = {
        __ename__: ["flambe",
            "input", "MouseButton"
        ],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    pa.Left = ["Left", 0];
    pa.Left.__enum__ = pa;
    pa.Middle = ["Middle", 1];
    pa.Middle.__enum__ = pa;
    pa.Right = ["Right", 2];
    pa.Right.__enum__ = pa;
    pa.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = pa;
        return a
    };
    var Ua = i["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    Ua.Default = ["Default", 0];
    Ua.Default.__enum__ = Ua;
    Ua.Button = ["Button", 1];
    Ua.Button.__enum__ = Ua;
    Ua.None = ["None", 2];
    Ua.None.__enum__ = Ua;
    var Rb = function() {
        this.init(0, 0, 0, null)
    };
    i["flambe.input.MouseEvent"] = Rb;
    Rb.__name__ = ["flambe", "input", "MouseEvent"];
    Rb.prototype = {
        clone: function() {
            var a = new Rb;
            a.init(this.id, this.viewX, this.viewY, this.button);
            return a
        },
        init: function(a, b, c, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = e
        },
        __class__: Rb
    };
    var rb = i["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    rb.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = rb;
        return a
    };
    rb.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = rb;
        return a
    };
    var Sb = function() {
        this.init(0, 0, 0, null, null)
    };
    i["flambe.input.PointerEvent"] = Sb;
    Sb.__name__ = ["flambe", "input", "PointerEvent"];
    Sb.prototype = {
        clone: function() {
            var a = null,
                a = this.source;
            switch (a[1]) {
                case 0:
                    a = rb.Mouse(a[2].clone());
                    break;
                default:
                    a = this.source
            }
            var b = new Sb;
            b.init(this.id, this.viewX, this.viewY, this.hit, a);
            return b
        },
        init: function(a, b, c, e, l) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = e;
            this.source = l;
            this._stopped = !1
        },
        __class__: Sb
    };
    var yc = function(a) {
        this.id = a;
        this._source = rb.Touch(this)
    };
    i["flambe.input.TouchPoint"] = yc;
    yc.__name__ = ["flambe", "input", "TouchPoint"];
    yc.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: yc
    };
    var Q = function() {};
    i["flambe.math.FMath"] = Q;
    Q.__name__ = ["flambe", "math", "FMath"];
    Q.toRadians = function(a) {
        return 3.141592653589793 * a / 180
    };
    Q.max = function(a, b) {
        return a > b ? a : b
    };
    Q.min = function(a, b) {
        return a < b ? a : b
    };
    Q.sign = function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : 0
    };
    var Ga = function() {
        this.identity()
    };
    i["flambe.math.Matrix"] =
        Ga;
    Ga.__name__ = ["flambe", "math", "Matrix"];
    Ga.multiply = function(a, b, c) {
        null == c && (c = new Ga);
        var e = a.m00 * b.m00 + a.m01 * b.m10,
            l = a.m00 * b.m01 + a.m01 * b.m11,
            d = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = e;
        c.m01 = l;
        c.m02 = d;
        e = a.m10 * b.m00 + a.m11 * b.m10;
        l = a.m10 * b.m01 + a.m11 * b.m11;
        d = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = e;
        c.m11 = l;
        c.m12 = d;
        return c
    };
    Ga.prototype = {
        set: function(a, b, c, e, l, d) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = l;
            this.m10 = b;
            this.m11 = e;
            this.m12 = d
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        translate: function(a, b) {
            this.m02 +=
                this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        invert: function() {
            var a = this.determinant();
            if (0 == a) return !1;
            this.set(this.m11 / a, -this.m01 / a, -this.m10 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transformArray: function(a, b, c) {
            for (var e = 0; e < b;) {
                var l = a[e],
                    d = a[e + 1];
                c[e++] = l * this.m00 + d * this.m01 + this.m02;
                c[e++] = l * this.m10 + d * this.m11 + this.m12
            }
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a,
            b, c) {
            var e = this.determinant();
            if (0 == e) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / e;
            c.y = (b * this.m00 - a * this.m10) / e;
            return !0
        },
        clone: function(a) {
            null == a && (a = new Ga);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: Ga
    };
    var Ha = function(a, b, c, e) {
        null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, e)
    };
    i["flambe.math.Rectangle"] = Ha;
    Ha.__name__ = ["flambe", "math", "Rectangle"];
    Ha.prototype = {
        set: function(a, b, c, e) {
            this.x = a;
            this.y = b;
            this.width =
                c;
            this.height = e
        },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        clone: function(a) {
            null == a && (a = new Ha);
            a.set(this.x, this.y, this.width, this.height);
            return a
        },
        equals: function(a) {
            return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        __class__: Ha
    };
    var aa = function() {
        this._disposed = !1
    };
    i["flambe.platform.BasicAsset"] =
        aa;
    aa.__name__ = ["flambe", "platform", "BasicAsset"];
    aa.__interfaces__ = [$a];
    aa.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: aa
    };
    var cb = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Tb;
        this._bytesLoaded = new ma;
        this._pack = new Ub(b, this);
        var e = Qa.array(b);
        if (0 == e.length) this.handleSuccess();
        else {
            for (var d = new ma, f = 0; f < e.length;) {
                var h = e[f];
                ++f;
                var g = d.get(h.name);
                null == g && (g = [], d.set(h.name, g));
                g.push(h)
            }
            this._assetsRemaining =
                Qa.count(d);
            for (e = d.iterator(); e.hasNext();) d = [e.next()], this.pickBestEntry(d[0], function(a) {
                return function(e) {
                    if (null != e) {
                        var d = b.getFullURL(e);
                        try {
                            c.loadEntry(d, e)
                        } catch (l) {
                            c.handleError(e, "Unexpected error: " + o.string(l))
                        }
                        d = c.promise;
                        d.set_total(d._total + e.bytes)
                    } else e = a[0][0], cb.isAudio(e.format) ? c.handleLoad(e, ya.getInstance()) : c.handleError(e, "Could not find a supported format to load")
                }
            }(d))
        }
    };
    i["flambe.platform.BasicAssetPackLoader"] = cb;
    cb.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    cb.isAudio = function(a) {
        switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    cb.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var e = 0; e < c.length;) {
                    var d = c[e];
                    ++e;
                    for (var f = 0; f < a.length;) {
                        var h = a[f];
                        ++f;
                        if (h.format == d) {
                            b(h);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c =
                            this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, e = this._bytesLoaded.iterator(); e.hasNext();) var d = e.next(),
                c = c + d;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(V.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: cb
    };
    var Ub = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new ma;
        this.sounds = new ma;
        this.files = new ma
    };
    i["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Ub;
    Ub.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    Ub.__interfaces__ = [Mb];
    Ub.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw V.withFields("Missing texture", ["name", a]);
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw V.withFields("Missing sound", ["name", a]);
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw V.withFields("Missing file", ["name", a]);
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: Ub
    };
    var sb = function(a) {
        this._disposed = !1;
        this._content = a
    };
    i["flambe.platform.BasicFile"] = sb;
    sb.__name__ = ["flambe", "platform", "BasicFile"];
    sb.__interfaces__ = [Nb];
    sb.__super__ = aa;
    sb.prototype = x(aa.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: sb
    });
    var Uc = function() {};
    i["flambe.subsystem.MouseSystem"] = Uc;
    Uc.__name__ = ["flambe", "subsystem", "MouseSystem"];
    var qa = function(a) {
        this._pointer = a;
        this._source = rb.Mouse(qa._sharedEvent);
        this.down = new M;
        this.move = new M;
        this.up = new M;
        this.scroll = new M;
        this._y = this._x = 0;
        this._cursor = Ua.Default;
        this._buttonStates = new Ba
    };
    i["flambe.platform.BasicMouse"] = qa;
    qa.__name__ = ["flambe", "platform", "BasicMouse"];
    qa.__interfaces__ = [Uc];
    qa.prototype = {
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, zc.toButton(c)), this._pointer.submitDown(a,
                b, this._source), this.down.emit(qa._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(qa._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, zc.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(qa._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b,
            c) {
            this._x = a;
            this._y = b;
            qa._sharedEvent.init(qa._sharedEvent.id + 1, a, b, c)
        },
        __class__: qa
    };
    var Ac = function() {};
    i["flambe.subsystem.PointerSystem"] = Ac;
    Ac.__name__ = ["flambe", "subsystem", "PointerSystem"];
    Ac.prototype = {
        __class__: Ac
    };
    var fa = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new M;
        this.move = new M;
        this.up = new M;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    i["flambe.platform.BasicPointer"] = fa;
    fa.__name__ = ["flambe", "platform", "BasicPointer"];
    fa.__interfaces__ = [Ac];
    fa.prototype = {
        get_x: function() {
            return this._x
        },
        get_y: function() {
            return this._y
        },
        isDown: function() {
            return this._isDown
        },
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var e = [],
                    d = y.hitTest(m.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do {
                        var h = f._compMap.Sprite_0;
                        null != h && e.push(h);
                        f = f.parent
                    } while (null != f)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerDown(fa._sharedEvent), fa._sharedEvent._stopped) return;
                this.down.emit(fa._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var e = [],
                    d = y.hitTest(m.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do {
                        var h = f._compMap.Sprite_0;
                        null != h && e.push(h);
                        f = f.parent
                    } while (null != f)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerMove(fa._sharedEvent), fa._sharedEvent._stopped) return;
                this.move.emit(fa._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var e = [],
                    d = y.hitTest(m.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do {
                        var h = f._compMap.Sprite_0;
                        null != h && e.push(h);
                        f = f.parent
                    } while (null != f)
                }
                this.prepare(a,
                    b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerUp(fa._sharedEvent), fa._sharedEvent._stopped) return;
                this.up.emit(fa._sharedEvent)
            }
        },
        prepare: function(a, b, c, e) {
            this._x = a;
            this._y = b;
            fa._sharedEvent.init(fa._sharedEvent.id + 1, a, b, c, e)
        },
        __class__: fa
    };
    var Ia = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    i["flambe.platform.BasicTexture"] = Ia;
    Ia.__name__ = ["flambe", "platform", "BasicTexture"];
    Ia.__interfaces__ = [Qc];
    Ia.__super__ =
        aa;
    Ia.prototype = x(aa.prototype, {
        subTexture: function(a, b, c, e) {
            c = this.root.createTexture(c, e);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Ia
    });
    var Vb = function() {};
    i["flambe.subsystem.TouchSystem"] = Vb;
    Vb.__name__ = ["flambe", "subsystem", "TouchSystem"];
    Vb.prototype = {
        __class__: Vb
    };
    var Ib = function(a, b) {
        null == b && (b =
            4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new Ba;
        this._points = [];
        this.down = new M;
        this.move = new M;
        this.up = new M
    };
    i["flambe.platform.BasicTouch"] = Ib;
    Ib.__name__ = ["flambe", "platform", "BasicTouch"];
    Ib.__interfaces__ = [Vb];
    Ib.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.exists(a)) {
                var e = new yc(a);
                e.init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._source));
                this.down.emit(e)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var e = this._pointMap.get(a);
            null != e && (e.init(b, c), this._pointMap.remove(a), s.remove(this._points, e), this._pointerTouch == e && (this._pointerTouch = null, this._pointer.submitUp(b, c, e._source)), this.up.emit(e))
        },
        __class__: Ib
    };
    var nb = function() {};
    i["flambe.sound.Sound"] = nb;
    nb.__name__ = ["flambe", "sound", "Sound"];
    nb.__interfaces__ = [$a];
    nb.prototype = {
        __class__: nb
    };
    var ya = function() {
        this._disposed = !1;
        this._playback = new Wb(this)
    };
    i["flambe.platform.DummySound"] = ya;
    ya.__name__ = ["flambe", "platform", "DummySound"];
    ya.__interfaces__ = [nb];
    ya.getInstance = function() {
        null == ya._instance && (ya._instance = new ya);
        return ya._instance
    };
    ya.__super__ = aa;
    ya.prototype = x(aa.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: ya
    });
    var ob = function() {};
    i["flambe.sound.Playback"] =
        ob;
    ob.__name__ = ["flambe", "sound", "Playback"];
    ob.__interfaces__ = [Fa];
    ob.prototype = {
        __class__: ob
    };
    var Wb = function(a) {
        this._sound = a;
        this.volume = new v(0);
        this._complete = new ia(!0)
    };
    i["flambe.platform.DummyPlayback"] = Wb;
    Wb.__name__ = ["flambe", "platform", "DummyPlayback"];
    Wb.__interfaces__ = [ob];
    Wb.prototype = {
        dispose: function() {},
        __class__: Wb
    };
    var Jb = function() {
        this.down = new M;
        this.move = new M;
        this.up = new M
    };
    i["flambe.platform.DummyTouch"] = Jb;
    Jb.__name__ = ["flambe", "platform", "DummyTouch"];
    Jb.__interfaces__ = [Vb];
    Jb.prototype = {
        get_supported: function() {
            return !1
        },
        __class__: Jb
    };
    var tb = function() {
        this._entries = []
    };
    i["flambe.platform.EventGroup"] = tb;
    tb.__name__ = ["flambe", "platform", "EventGroup"];
    tb.__interfaces__ = [Fa];
    tb.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new Bc(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var e = this;
            this.addListener(a, b, function(a) {
                e.dispose();
                c(a)
            })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type,
                    c.listener, !1)
            }
            this._entries = []
        },
        __class__: tb
    };
    var Bc = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    i["flambe.platform._EventGroup.Entry"] = Bc;
    Bc.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    Bc.prototype = {
        __class__: Bc
    };
    var ub = function() {};
    i["flambe.platform.InternalGraphics"] = ub;
    ub.__name__ = ["flambe", "platform", "InternalGraphics"];
    ub.__interfaces__ = [xc];
    ub.prototype = {
        __class__: ub
    };
    var Cc = function() {};
    i["flambe.subsystem.RendererSystem"] = Cc;
    Cc.__name__ = ["flambe", "subsystem",
        "RendererSystem"
    ];
    Cc.prototype = {
        __class__: Cc
    };
    var vb = function() {};
    i["flambe.platform.InternalRenderer"] = vb;
    vb.__name__ = ["flambe", "platform", "InternalRenderer"];
    vb.__interfaces__ = [Cc];
    vb.prototype = {
        __class__: vb
    };
    var ib = function() {
        this._tickables = []
    };
    i["flambe.platform.MainLoop"] = ib;
    ib.__name__ = ["flambe", "platform", "MainLoop"];
    ib.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_7;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var e = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = e
        }
        for (c = a.firstChild; null != c;) e = c.next, ib.updateEntity(c, b), c = e
    };
    ib.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                m.volume.update(a);
                ib.updateEntity(m.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), y.render(m.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: ib
    };
    var Dc = function() {};
    i["flambe.platform.MathUtil"] = Dc;
    Dc.__name__ = ["flambe", "platform", "MathUtil"];
    Dc.nextPowerOfTwo = function(a) {
        for (var b = 1; b < a;) b <<= 1;
        return b
    };
    var zc = function() {};
    i["flambe.platform.MouseCodes"] = zc;
    zc.__name__ = ["flambe", "platform", "MouseCodes"];
    zc.toButton = function(a) {
        switch (a) {
            case 0:
                return pa.Left;
            case 1:
                return pa.Middle;
            case 2:
                return pa.Right
        }
        return pa.Unknown(a)
    };
    var Xb = function() {};
    i["flambe.platform.TextureRoot"] = Xb;
    Xb.__name__ = ["flambe", "platform", "TextureRoot"];
    Xb.prototype = {
        __class__: Xb
    };
    var Yb = function() {};
    i["flambe.platform.Tickable"] = Yb;
    Yb.__name__ = ["flambe", "platform", "Tickable"];
    Yb.prototype = {
        __class__: Yb
    };
    var Zb = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    i["flambe.platform.html.CanvasGraphics"] = Zb;
    Zb.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Zb.__interfaces__ = [ub];
    Zb.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        translate: function(a, b) {
            this._canvasCtx.translate(a | 0, b | 0)
        },
        scale: function(a, b) {
            this._canvasCtx.scale(a,
                b)
        },
        rotate: function(a) {
            this._canvasCtx.rotate(3.141592653589793 * a / 180)
        },
        transform: function(a, b, c, e, d, f) {
            this._canvasCtx.transform(a, b, c, e, d, f)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, e, d, f, h) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, e, d, f, h), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image,
                a.rootX + e | 0, a.rootY + d | 0, f | 0, h | 0, b | 0, c | 0, f | 0, h | 0)
        },
        fillRect: function(a, b, c, e, d) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, e, d), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + o.string(a);
                this._canvasCtx.fillStyle = "#" + o.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b =
                        "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, e) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, e | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        onResize: function() {},
        __class__: Zb
    };
    var jb = function(a) {
        this.graphics = new Zb(a, !1);
        this._hasGPU = new ia(!0)
    };
    i["flambe.platform.html.CanvasRenderer"] =
        jb;
    jb.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    jb.__interfaces__ = [vb];
    jb.prototype = {
        get_type: function() {
            return Oa.Canvas
        },
        createTextureFromImage: function(a) {
            a = new wb(jb.CANVAS_TEXTURES ? z.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: jb
    };
    var $b = function(a, b, c) {
        Ia.call(this,
            a, b, c)
    };
    i["flambe.platform.html.CanvasTexture"] = $b;
    $b.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    $b.__super__ = Ia;
    $b.prototype = x(Ia.prototype, {
        __class__: $b
    });
    var wb = function(a) {
        this._graphics = null;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    i["flambe.platform.html.CanvasTextureRoot"] = wb;
    wb.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    wb.__interfaces__ = [Xb];
    wb.__super__ = aa;
    wb.prototype = x(aa.prototype, {
        createTexture: function(a, b) {
            return new $b(this,
                a, b)
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: wb
    });
    var J = function(a, b) {
        cb.call(this, a, b)
    };
    i["flambe.platform.html.HtmlAssetPackLoader"] = J;
    J.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    J.detectImageFormats = function(a) {
        var b = [q.PNG, q.JPG, q.GIF],
            c = 2,
            e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function() {
            1 == e.width && b.unshift(q.WEBP);
            --c;
            0 == c && a(b)
        };
        e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function() {
            1 == d.width && b.unshift(q.JXR);
            --c;
            0 == c && a(b)
        };
        d.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    J.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == wa(a, a.canPlayType)) return [];
        var b = new Pa("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!K.get_supported() && b.match(c)) return [];
        for (var b = [{
            format: q.M4A,
            mimeType: "audio/mp4; codecs=mp4a"
        }, {
            format: q.MP3,
            mimeType: "audio/mpeg"
        }, {
            format: q.OPUS,
            mimeType: "audio/ogg; codecs=opus"
        }, {
            format: q.OGG,
            mimeType: "audio/ogg; codecs=vorbis"
        }, {
            format: q.WAV,
            mimeType: "audio/wav"
        }], c = [], e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            var f = "";
            try {
                f = a.canPlayType(d.mimeType)
            } catch (h) {}
            "" != f && c.push(d.format)
        }
        return c
    };
    J.supportsBlob = function() {
        if (J._detectBlobSupport) {
            J._detectBlobSupport = !1;
            if ((new Pa("\\bSilk\\b", "")).match(window.navigator.userAgent) ||
                null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            J._URL = z.loadExtension("URL").value
        }
        return null != J._URL && null != J._URL.createObjectURL
    };
    J.__super__ = cb;
    J.prototype = x(cb.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var e;
                    e = window.document.createElement("img");
                    var d = new tb;
                    d.addDisposingListener(e, "load", function() {
                        J.supportsBlob() && J._URL.revokeObjectURL(e.src);
                        var a = c._platform.getRenderer().createTextureFromImage(e);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    d.addDisposingListener(e, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    J.supportsBlob() ? this.download(a, b, "blob", function(a) {
                        e.src = J._URL.createObjectURL(a)
                    }) : e.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() {
                        var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (K.get_supported()) this.download(a,
                        b, "arraybuffer", function(a) {
                            K.ctx.decodeAudioData(a, function(a) {
                                c.handleLoad(b, new K(a))
                            }, function() {
                                c.handleLoad(b, ya.getInstance())
                            })
                        });
                    else {
                        var f;
                        f = window.document.createElement("audio");
                        f.preload = "auto";
                        var h = ++J._mediaRefCount;
                        null == J._mediaElements && (J._mediaElements = new Ba);
                        J._mediaElements.set(h, f);
                        d = new tb;
                        d.addDisposingListener(f, "canplaythrough", function() {
                            J._mediaElements.remove(h);
                            c.handleLoad(b, new xb(f))
                        });
                        d.addDisposingListener(f, "error", function() {
                            J._mediaElements.remove(h);
                            var a =
                                f.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, ya.getInstance()) : c.handleError(b, "Failed to load audio: " + f.error.code)
                        });
                        d.addListener(f, "progress", function() {
                            if (0 < f.buffered.length && 0 < f.duration) {
                                var a = f.buffered.end(0) / f.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        f.src = a;
                        f.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b, new sb(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == J._supportedFormats && (J._supportedFormats = new Tb, J.detectImageFormats(function(a) {
                J._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(J.detectAudioFormats()).concat([q.Data]))
            }));
            J._supportedFormats.get(a)
        },
        download: function(a, b, c, e) {
            var d = this,
                f = null,
                h = null,
                g = 0,
                i = !1,
                k = function() {
                    i && (i = !1, window.clearInterval(g))
                },
                j = 3,
                n = function() {
                    --j;
                    return 0 <= j ? (h(), !0) : !1
                },
                h = function() {
                    k();
                    null != f && f.abort();
                    f = new XMLHttpRequest;
                    f.open("GET", a, !0);
                    f.responseType = c;
                    var h = 0;
                    f.onprogress = function(a) {
                        i || (i = !0, g = window.setInterval(function() {
                            4 != f.readyState && 5E3 < Date.now() - h && !n() && (k(), d.handleError(b, "Download stalled"))
                        }, 1E3));
                        h = Date.now();
                        d.handleProgress(b, a.loaded)
                    };
                    f.onerror = function() {
                        if (0 !=
                            f.status || !n()) k(), d.handleError(b, "HTTP error " + f.status)
                    };
                    f.onload = function() {
                        var a = f.response;
                        null == a && (a = f.responseText);
                        k();
                        e(a)
                    };
                    f.send()
                };
            h()
        },
        __class__: J
    });
    var Ec = function() {};
    i["flambe.subsystem.ExternalSystem"] = Ec;
    Ec.__name__ = ["flambe", "subsystem", "ExternalSystem"];
    Ec.prototype = {
        __class__: Ec
    };
    var Kb = function() {};
    i["flambe.platform.html.HtmlExternal"] = Kb;
    Kb.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    Kb.__interfaces__ = [Ec];
    Kb.prototype = {
        call: function(a, b) {
            null == b && (b = []);
            for (var c =
                window, e = c, d = 0, f = a.split("."); d < f.length;) {
                var h = f[d];
                ++d;
                c = e;
                e = p.field(c, h)
            }
            return e.apply(c, b)
        },
        __class__: Kb
    };
    var Hb = function(a, b) {
        qa.call(this, a);
        this._canvas = b
    };
    i["flambe.platform.html.HtmlMouse"] = Hb;
    Hb.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    Hb.__super__ = qa;
    Hb.prototype = x(qa.prototype, {
        __class__: Hb
    });
    var xb = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    i["flambe.platform.html.HtmlSound"] = xb;
    xb.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    xb.__interfaces__ = [nb];
    xb.__super__ =
        aa;
    xb.prototype = x(aa.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new yb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new yb(this, a, !0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: xb
    });
    var yb = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new v(b, function() {
            e.updateVolume()
        });
        this.updateVolume();
        this._complete = new ia(!1);
        this.playAudio();
        m.hidden._value && this.set_paused(!0)
    };
    i["flambe.platform.html._HtmlSound.HtmlPlayback"] = yb;
    yb.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    yb.__interfaces__ = [Yb, ob];
    yb.prototype = {
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(),
                this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.play();
            this._tickableAdded || (Sa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = m.volume.get_changed().connect(function() {
                a.updateVolume()
            }), this._hideBinding = m.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        updateVolume: function() {
            this._clonedElement.volume =
                m.volume._value * this.volume._value
        },
        __class__: yb
    };
    var Fc = function() {};
    i["flambe.subsystem.StageSystem"] = Fc;
    Fc.__name__ = ["flambe", "subsystem", "StageSystem"];
    Fc.prototype = {
        __class__: Fc
    };
    var hb = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new Na;
        this.scaleFactor = hb.computeScaleFactor();
        1 != this.scaleFactor && (z.setVendorStyle(this._canvas, "transform-origin", "top left"), z.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        z.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange",
            function() {
                z.callLater(wa(b, b.hideMobileBrowser), 200)
            }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", wa(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new ia(null);
        null != window.orientation && (window.addEventListener("orientationchange", wa(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new ia(!1);
        z.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    i["flambe.platform.html.HtmlStage"] =
        hb;
    hb.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    hb.__interfaces__ = [Fc];
    hb.computeScaleFactor = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d"),
            b = z.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1136 < a * window.screen.width || 1136 < a * b ? 1 : a
    };
    hb.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        lockOrientation: function(a) {
            var b =
                z.loadExtension("lockOrientation", window.screen).value;
            if (null != b) {
                var c;
                switch (a[1]) {
                    case 0:
                        c = "portrait";
                        break;
                    case 1:
                        c = "landscape"
                }
                b.apply(window.screen, [c]) || null
            }
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                e = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == e) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = e | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a =
                this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            z.callLater(function() {
                z.hideMobileBrowser();
                z.callLater(function() {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(z.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == z.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], this.getParentWindow().document).value)
        },
        getParentWindow: function() {
            try {
                return window.parent.document, window.parent
            } catch (a) {
                return window
            }
        },
        __class__: hb
    };
    var z = function() {};
    i["flambe.platform.html.HtmlUtil"] = z;
    z.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    z.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    z.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    z.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = p.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + s.substr(a, 1,
            null), e = 0, d = z.VENDOR_PREFIXES; e < d.length;) {
            var f = d[e];
            ++e;
            var h = f + c,
                g = p.field(b, h);
            if (null != g) return {
                prefix: f,
                field: h,
                value: g
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    z.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            e = z.loadExtension(e, b);
            if (null != e.field) return e
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    z.polyfill = function(a, b) {
        null == b && (b = window);
        var c = z.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    z.setVendorStyle = function(a, b, c) {
        for (var a = a.style,
            e = 0, d = z.VENDOR_PREFIXES; e < d.length;) {
            var f = d[e];
            ++e;
            a.setProperty("-" + f + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    z.addVendorListener = function(a, b, c, e) {
        for (var d = 0, f = z.VENDOR_PREFIXES; d < f.length;) {
            var h = f[d];
            ++d;
            a.addEventListener(h + b, c, e)
        }
        a.addEventListener(b, c, e)
    };
    z.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return bb.Landscape;
            default:
                return bb.Portrait
        }
    };
    z.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    z.createCanvas = function(a) {
        var b =
            z.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    z.detectSlowDriver = function(a) {
        if (0 <= window.navigator.platform.indexOf("Win") && null != window.chrome) {
            for (var b = 0, a = a.getSupportedExtensions(); b < a.length;) {
                var c = a[b];
                ++b;
                if (0 <= c.indexOf("WEBGL_compressed_texture")) return !1
            }
            return !0
        }
        return !1
    };
    z.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var K = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    i["flambe.platform.html.WebAudioSound"] = K;
    K.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    K.__interfaces__ = [nb];
    K.get_supported = function() {
        if (K._detectSupport) {
            K._detectSupport = !1;
            var a = z.loadExtension("AudioContext").value;
            null != a && (K.ctx = new a, K.gain = K.createGain(), K.gain.connect(K.ctx.destination), m.volume.watch(function(a) {
                K.gain.gain.value = a
            }))
        }
        return null !=
            K.ctx
    };
    K.createGain = function() {
        return null != K.ctx.createGain ? K.ctx.createGain() : K.ctx.createGainNode()
    };
    K.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    K.__super__ = aa;
    K.prototype = x(aa.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new zb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new zb(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: K
    });
    var zb = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._head = K.gain;
        this._complete =
            new ia(!1);
        this._sourceNode = K.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            e._complete.set__(!0)
        };
        K.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new v(b, function(a) {
            e.setVolume(a)
        });
        1 != b && this.setVolume(b);
        m.hidden._value && this.set_paused(!0)
    };
    i["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = zb;
    zb.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    zb.__interfaces__ = [Yb, ob];
    zb.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (K.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = K.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = K.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (Sa.instance.mainLoop.addTickable(this),
                this._tickableAdded = !0, this._hideBinding = m.hidden.get_changed().connect(function(b) {
                    b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
                }))
        },
        __class__: zb
    };
    var Gc = function(a) {
        this._quads = this._maxQuads = this._dataOffset = this._backbufferWidth = this._backbufferHeight = 0;
        this._pendingSetScissor = !1;
        this._lastBlendMode = this._lastRenderTarget = this._lastShader = this._lastTexture = this._lastScissor = this._currentBlendMode = this._currentShader = this._currentTexture = this._currentRenderTarget =
            null;
        this._gl = a;
        a.clearColor(0, 0, 0, 0);
        a.enable(3042);
        a.pixelStorei(37441, 1);
        this._vertexBuffer = a.createBuffer();
        a.bindBuffer(34962, this._vertexBuffer);
        this._quadIndexBuffer = a.createBuffer();
        a.bindBuffer(34963, this._quadIndexBuffer);
        this._drawTextureShader = new ac(a);
        this._drawPatternShader = new bc(a);
        this._fillRectShader = new cc(a);
        this.resize(16)
    };
    i["flambe.platform.html.WebGLBatcher"] = Gc;
    Gc.__name__ = ["flambe", "platform", "html", "WebGLBatcher"];
    Gc.prototype = {
        resizeBackbuffer: function(a, b) {
            this._gl.viewport(0,
                0, a, b);
            this._backbufferWidth = a;
            this._backbufferHeight = b
        },
        willRender: function() {},
        didRender: function() {
            this.flush()
        },
        bindTexture: function(a) {
            this.flush();
            this._currentTexture = this._lastTexture = null;
            this._gl.bindTexture(3553, a)
        },
        deleteTexture: function(a) {
            null != this._lastTexture && this._lastTexture.root == a && (this.flush(), this._currentTexture = this._lastTexture = null);
            this._gl.deleteTexture(a.nativeTexture)
        },
        deleteFramebuffer: function(a) {
            a == this._lastRenderTarget && (this.flush(), this._currentRenderTarget =
                this._lastRenderTarget = null);
            this._gl.deleteFramebuffer(a.framebuffer)
        },
        prepareDrawTexture: function(a, b, c, e) {
            e != this._lastTexture && (this.flush(), this._lastTexture = e);
            return this.prepareQuad(5, a, b, c, this._drawTextureShader)
        },
        prepareFillRect: function(a, b, c) {
            return this.prepareQuad(6, a, b, c, this._fillRectShader)
        },
        prepareQuad: function(a, b, c, e, d) {
            b != this._lastRenderTarget && (this.flush(), this._lastRenderTarget = b);
            c != this._lastBlendMode && (this.flush(), this._lastBlendMode = c);
            d != this._lastShader && (this.flush(),
                this._lastShader = d);
            if (null != e || null != this._lastScissor)
                if (null == e || null == this._lastScissor || !this._lastScissor.equals(e)) this.flush(), this._lastScissor = null != e ? e.clone(this._lastScissor) : null, this._pendingSetScissor = !0;
            this._quads >= this._maxQuads && this.resize(2 * this._maxQuads);
            ++this._quads;
            b = this._dataOffset;
            this._dataOffset += 4 * a;
            return b
        },
        flush: function() {
            if (!(1 > this._quads)) {
                this._lastRenderTarget != this._currentRenderTarget && this.bindRenderTarget(this._lastRenderTarget);
                if (this._lastBlendMode !=
                    this._currentBlendMode) {
                    switch (this._lastBlendMode[1]) {
                        case 0:
                            this._gl.blendFunc(1, 771);
                            break;
                        case 1:
                            this._gl.blendFunc(1, 1);
                            break;
                        case 2:
                            this._gl.blendFunc(774, 771);
                            break;
                        case 3:
                            this._gl.blendFunc(1, 769);
                            break;
                        case 4:
                            this._gl.blendFunc(0, 770);
                            break;
                        case 5:
                            this._gl.blendFunc(1, 0)
                    }
                    this._currentBlendMode = this._lastBlendMode
                }
                this._pendingSetScissor && (null != this._lastScissor ? (this._gl.enable(3089), this._gl.scissor(this._lastScissor.x | 0, this._lastScissor.y | 0, this._lastScissor.width | 0, this._lastScissor.height |
                    0)) : this._gl.disable(3089), this._pendingSetScissor = !1);
                this._lastTexture != this._currentTexture && (this._gl.bindTexture(3553, this._lastTexture.root.nativeTexture), this._currentTexture = this._lastTexture);
                this._lastShader != this._currentShader && (this._lastShader.useProgram(), this._lastShader.prepare(), this._currentShader = this._lastShader);
                if (this._lastShader == this._drawPatternShader) {
                    var a = this._lastTexture,
                        b = a.root;
                    this._drawPatternShader.setRegion(a.rootX / b.width, a.rootY / b.height, a._width / b.width, a._height /
                        b.height)
                }
                this._gl.bufferData(34962, this.data.subarray(0, this._dataOffset), 35040);
                this._gl.drawElements(4, 6 * this._quads, 5123, 0);
                this._dataOffset = this._quads = 0
            }
        },
        resize: function(a) {
            this.flush();
            if (!(1024 < a)) {
                this._maxQuads = a;
                this.data = new Float32Array(24 * a);
                this._gl.bufferData(34962, 4 * this.data.length, 35040);
                for (var b = new Uint16Array(6 * a), c = 0; c < a;) {
                    var e = c++;
                    b[6 * e] = 4 * e;
                    b[6 * e + 1] = 4 * e + 1;
                    b[6 * e + 2] = 4 * e + 2;
                    b[6 * e + 3] = 4 * e + 2;
                    b[6 * e + 4] = 4 * e + 3;
                    b[6 * e + 5] = 4 * e
                }
                this._gl.bufferData(34963, b, 35044)
            }
        },
        bindRenderTarget: function(a) {
            null !=
                a ? (this._gl.bindFramebuffer(36160, a.framebuffer), this._gl.viewport(0, 0, a.width, a.height)) : (this._gl.bindFramebuffer(36160, null), this._gl.viewport(0, 0, this._backbufferWidth, this._backbufferHeight));
            this._lastRenderTarget = this._currentRenderTarget = a
        },
        __class__: Gc
    };
    var Ca = function(a, b) {
        this._inverseProjection = this._stateList = null;
        null == Ca._scratchQuadArray && (Ca._scratchQuadArray = new Float32Array(8));
        this._batcher = a;
        this._renderTarget = b
    };
    i["flambe.platform.html.WebGLGraphics"] = Ca;
    Ca.__name__ = ["flambe",
        "platform", "html", "WebGLGraphics"
    ];
    Ca.__interfaces__ = [ub];
    Ca.prototype = {
        save: function() {
            var a = this._stateList,
                b = this._stateList.next;
            null == b && (b = new dc, b.prev = a, a.next = b);
            a.matrix.clone(b.matrix);
            b.alpha = a.alpha;
            b.blendMode = a.blendMode;
            b.scissor = null != a.scissor ? a.scissor.clone(b.scissor) : null;
            this._stateList = b
        },
        translate: function(a, b) {
            var c = this._stateList.matrix;
            c.m02 += c.m00 * a + c.m01 * b;
            c.m12 += c.m10 * a + c.m11 * b
        },
        scale: function(a, b) {
            var c = this._stateList.matrix;
            c.m00 *= a;
            c.m10 *= a;
            c.m01 *= b;
            c.m11 *= b
        },
        rotate: function(a) {
            var b =
                this._stateList.matrix,
                a = 3.141592653589793 * a / 180,
                c = Math.sin(a),
                a = Math.cos(a),
                e = b.m00,
                d = b.m10,
                f = b.m01,
                h = b.m11;
            b.m00 = e * a + f * c;
            b.m10 = d * a + h * c;
            b.m01 = f * a - e * c;
            b.m11 = h * a - d * c
        },
        transform: function(a, b, c, e, d, f) {
            var h = this._stateList;
            Ca._scratchMatrix.set(a, b, c, e, d, f);
            Ga.multiply(h.matrix, Ca._scratchMatrix, h.matrix)
        },
        restore: function() {
            this._stateList = this._stateList.prev
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, e, d, f, h) {
            var g = this._stateList,
                i = a.root,
                b = this.transformQuad(b, c, f, h),
                c = i.width,
                i = i.height,
                e = (a.rootX + e) / c,
                d = (a.rootY + d) / i,
                f = e + f / c,
                h = d + h / i,
                c = g.alpha,
                a = this._batcher.prepareDrawTexture(this._renderTarget, g.blendMode, g.scissor, a),
                g = this._batcher.data;
            g[a] = b[0];
            g[++a] = b[1];
            g[++a] = e;
            g[++a] = d;
            g[++a] = c;
            g[++a] = b[2];
            g[++a] = b[3];
            g[++a] = f;
            g[++a] = d;
            g[++a] = c;
            g[++a] = b[4];
            g[++a] = b[5];
            g[++a] = f;
            g[++a] = h;
            g[++a] = c;
            g[++a] = b[6];
            g[++a] = b[7];
            g[++a] = e;
            g[++a] = h;
            g[++a] = c
        },
        fillRect: function(a, b, c, e, d) {
            var f = this._stateList,
                b = this.transformQuad(b, c, e, d),
                c = (a & 16711680) / 16711680,
                e = (a & 65280) / 65280,
                a = (a & 255) / 255,
                d = f.alpha,
                f = this._batcher.prepareFillRect(this._renderTarget, f.blendMode, f.scissor),
                h = this._batcher.data;
            h[f] = b[0];
            h[++f] = b[1];
            h[++f] = c;
            h[++f] = e;
            h[++f] = a;
            h[++f] = d;
            h[++f] = b[2];
            h[++f] = b[3];
            h[++f] = c;
            h[++f] = e;
            h[++f] = a;
            h[++f] = d;
            h[++f] = b[4];
            h[++f] = b[5];
            h[++f] = c;
            h[++f] = e;
            h[++f] = a;
            h[++f] = d;
            h[++f] = b[6];
            h[++f] = b[7];
            h[++f] = c;
            h[++f] = e;
            h[++f] = a;
            h[++f] = d
        },
        multiplyAlpha: function(a) {
            this._stateList.alpha *= a
        },
        setBlendMode: function(a) {
            this._stateList.blendMode =
                a
        },
        applyScissor: function(a, b, c, e) {
            var d = this._stateList,
                f = Ca._scratchQuadArray;
            f[0] = a;
            f[1] = b;
            f[2] = a + c;
            f[3] = b + e;
            d.matrix.transformArray(f, 4, f);
            this._inverseProjection.transformArray(f, 4, f);
            a = f[0];
            b = f[1];
            c = f[2] - a;
            e = f[3] - b;
            0 > c && (a += c, c = -c);
            0 > e && (b += e, e = -e);
            d.applyScissor(a, b, c, e)
        },
        willRender: function() {
            this._batcher.willRender()
        },
        didRender: function() {
            this._batcher.didRender()
        },
        onResize: function(a, b) {
            this._stateList = new dc;
            var c;
            c = null != this._renderTarget ? -1 : 1;
            this._stateList.matrix.set(2 / a, 0, 0, -2 * c /
                b, -1, c);
            this._inverseProjection = new Ga;
            this._inverseProjection.set(2 / a, 0, 0, 2 / b, -1, -1);
            this._inverseProjection.invert()
        },
        transformQuad: function(a, b, c, e) {
            var c = a + c,
                e = b + e,
                d = Ca._scratchQuadArray;
            d[0] = a;
            d[1] = b;
            d[2] = c;
            d[3] = b;
            d[4] = c;
            d[5] = e;
            d[6] = a;
            d[7] = e;
            this._stateList.matrix.transformArray(d, 8, d);
            return d
        },
        __class__: Ca
    };
    var dc = function() {
        this.scissor = this.prev = this.next = null;
        this.matrix = new Ga;
        this.alpha = 1;
        this.blendMode = Z.Normal
    };
    i["flambe.platform.html._WebGLGraphics.DrawingState"] = dc;
    dc.__name__ = ["flambe",
        "platform", "html", "_WebGLGraphics", "DrawingState"
    ];
    dc.prototype = {
        applyScissor: function(a, b, c, e) {
            if (null != this.scissor) var d = Q.max(this.scissor.x, a),
                f = Q.max(this.scissor.y, b),
                c = Q.min(this.scissor.x + this.scissor.width, a + c),
                e = Q.min(this.scissor.y + this.scissor.height, b + e),
                a = d,
                b = f,
                c = c - d,
                e = e - f;
            else this.scissor = new Ha;
            this.scissor.set(Math.round(a), Math.round(b), Math.round(c), Math.round(e))
        },
        __class__: dc
    };
    var Lb = function(a, b) {
        var c = this;
        this._hasGPU = new ia(!0);
        this.gl = b;
        b.canvas.addEventListener("webglcontextlost",
            function(a) {
                a.preventDefault();
                c._hasGPU.set__(!1)
            }, !1);
        b.canvas.addEventListener("webglcontextrestore", function() {
            c.init();
            c._hasGPU.set__(!0)
        }, !1);
        a.resize.connect(wa(this, this.onResize));
        this.init()
    };
    i["flambe.platform.html.WebGLRenderer"] = Lb;
    Lb.__name__ = ["flambe", "platform", "html", "WebGLRenderer"];
    Lb.__interfaces__ = [vb];
    Lb.prototype = {
        get_type: function() {
            return Oa.WebGL
        },
        createTextureFromImage: function(a) {
            if (this.gl.isContextLost()) return null;
            var b = new db(this, a.width, a.height);
            b.uploadImageData(a);
            return b.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            this.gl.isContextLost();
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        onResize: function() {
            var a = this.gl.canvas.width,
                b = this.gl.canvas.height;
            this.batcher.resizeBackbuffer(a, b);
            this.graphics.onResize(a, b)
        },
        init: function() {
            this.batcher = new Gc(this.gl);
            this.graphics = new Ca(this.batcher, null);
            this.onResize()
        },
        __class__: Lb
    };
    var ec = function(a, b, c) {
        Ia.call(this, a, b, c)
    };
    i["flambe.platform.html.WebGLTexture"] = ec;
    ec.__name__ = ["flambe", "platform", "html", "WebGLTexture"];
    ec.__super__ = Ia;
    ec.prototype = x(Ia.prototype, {
        __class__: ec
    });
    var db = function(a, b, c) {
        this.framebuffer = this._graphics = null;
        this._disposed = !1;
        this._renderer = a;
        this.width = Q.max(2, Dc.nextPowerOfTwo(b));
        this.height = Q.max(2, Dc.nextPowerOfTwo(c));
        b = a.gl;
        this.nativeTexture = b.createTexture();
        a.batcher.bindTexture(this.nativeTexture);
        b.texParameteri(3553, 10242, 33071);
        b.texParameteri(3553,
            10243, 33071);
        b.texParameteri(3553, 10240, 9729);
        b.texParameteri(3553, 10241, 9728)
    };
    i["flambe.platform.html.WebGLTextureRoot"] = db;
    db.__name__ = ["flambe", "platform", "html", "WebGLTextureRoot"];
    db.__interfaces__ = [Xb];
    db.drawBorder = function(a, b, c) {
        var e = a.getContext("2d");
        e.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        e.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1)
    };
    db.__super__ = aa;
    db.prototype = x(aa.prototype, {
        createTexture: function(a, b) {
            return new ec(this, a, b)
        },
        uploadImageData: function(a) {
            if (this.width != a.width || this.height != a.height) {
                var b =
                    z.createEmptyCanvas(this.width, this.height);
                b.getContext("2d").drawImage(a, 0, 0);
                db.drawBorder(b, a.width, a.height);
                a = b
            }
            this._renderer.batcher.bindTexture(this.nativeTexture);
            this._renderer.gl.texImage2D(3553, 0, 6408, 6408, 5121, a)
        },
        onDisposed: function() {
            var a = this._renderer.batcher;
            a.deleteTexture(this);
            null != this.framebuffer && a.deleteFramebuffer(this);
            this._graphics = this.framebuffer = this.nativeTexture = null
        },
        __class__: db
    });
    var na = function(a, b, c) {
        c = "#ifdef GL_ES\nprecision mediump float;\n#endif\n" + c;
        this._gl = a;
        this._program = a.createProgram();
        a.attachShader(this._program, na.createShader(a, 35633, b));
        a.attachShader(this._program, na.createShader(a, 35632, c));
        a.linkProgram(this._program);
        a.useProgram(this._program)
    };
    i["flambe.platform.shader.ShaderGL"] = na;
    na.__name__ = ["flambe", "platform", "shader", "ShaderGL"];
    na.createShader = function(a, b, c) {
        b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b);
        return b
    };
    na.prototype = {
        useProgram: function() {
            this._gl.useProgram(this._program)
        },
        prepare: function() {
            null
        },
        getAttribLocation: function(a) {
            return this._gl.getAttribLocation(this._program, a)
        },
        getUniformLocation: function(a) {
            return this._gl.getUniformLocation(this._program, a)
        },
        __class__: na
    };
    var bc = function(a) {
        na.call(this, a, "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp float a_alpha;\nvarying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nvoid main (void) {\nv_uv = a_uv;\nv_alpha = a_alpha;\ngl_Position = vec4(a_pos, 0, 1);\n}", "varying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;\nvoid main (void) {\ngl_FragColor = texture2D(u_texture, u_region.xy + mod(v_uv, u_region.zw)) * v_alpha;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_uv = this.getAttribLocation("a_uv");
        this.a_alpha = this.getAttribLocation("a_alpha");
        this.u_texture = this.getUniformLocation("u_texture");
        this.u_region = this.getUniformLocation("u_region");
        this.setTexture(0)
    };
    i["flambe.platform.shader.DrawPatternGL"] = bc;
    bc.__name__ = ["flambe", "platform", "shader", "DrawPatternGL"];
    bc.__super__ = na;
    bc.prototype = x(na.prototype, {
        setTexture: function(a) {
            this._gl.uniform1i(this.u_texture, a)
        },
        setRegion: function(a, b, c, e) {
            this._gl.uniform4f(this.u_region,
                a, b, c, e)
        },
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: bc
    });
    var ac = function(a) {
        na.call(this, a, "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp float a_alpha;\nvarying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nvoid main (void) {\nv_uv = a_uv;\nv_alpha = a_alpha;\ngl_Position = vec4(a_pos, 0, 1);\n}",
            "varying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nuniform lowp sampler2D u_texture;\nvoid main (void) {\ngl_FragColor = texture2D(u_texture, v_uv) * v_alpha;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_uv = this.getAttribLocation("a_uv");
        this.a_alpha = this.getAttribLocation("a_alpha");
        this.u_texture = this.getUniformLocation("u_texture");
        this.setTexture(0)
    };
    i["flambe.platform.shader.DrawTextureGL"] = ac;
    ac.__name__ = ["flambe", "platform", "shader", "DrawTextureGL"];
    ac.__super__ = na;
    ac.prototype =
        x(na.prototype, {
            setTexture: function(a) {
                this._gl.uniform1i(this.u_texture, a)
            },
            prepare: function() {
                this._gl.enableVertexAttribArray(this.a_pos);
                this._gl.enableVertexAttribArray(this.a_uv);
                this._gl.enableVertexAttribArray(this.a_alpha);
                this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
                this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
                this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
            },
            __class__: ac
        });
    var cc = function(a) {
        na.call(this, a, "attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
            "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_rgb = this.getAttribLocation("a_rgb");
        this.a_alpha = this.getAttribLocation("a_alpha")
    };
    i["flambe.platform.shader.FillRectGL"] = cc;
    cc.__name__ = ["flambe", "platform", "shader", "FillRectGL"];
    cc.__super__ = na;
    cc.prototype = x(na.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_rgb);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 24, 0);
            this._gl.vertexAttribPointer(this.a_rgb, 3, 5126, !1, 24, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 24, 20)
        },
        __class__: cc
    });
    var fc = function() {
        this._width = this._height = -1;
        this._transitor = null;
        R.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new j
    };
    i["flambe.scene.Director"] = fc;
    fc.__name__ = ["flambe", "scene", "Director"];
    fc.__super__ = R;
    fc.prototype = x(R.prototype, {
        get_name: function() {
            return "Director_6"
        },
        setSize: function(a, b) {
            this._width =
                a;
            this._height = b;
            return this
        },
        pushScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            null != e ? this.playTransition(e, a, b, function() {
                c.hide(e)
            }) : (this.add(a), this.invalidateVisibility())
        },
        unwindToScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            if (null != e) {
                if (e != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(e, a, b, function() {
                        c.hideAndDispose(e)
                    })
                }
            } else this.pushScene(a,
                b)
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        add: function(a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            s.remove(this.scenes,
                a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) {
            a = a._compMap.Scene_3;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function(a) {
            this.hide(a);
            a.dispose()
        },
        show: function(a) {
            a = a._compMap.Scene_3;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_3;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null !=
                this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(a, b, c, e) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new Hc(a, b, c, e), this._transitor.init(this)) : (e(), this.invalidateVisibility())
        },
        get_width: function() {
            return 0 > this._width ? m._platform.getStage().get_width() : this._width
        },
        get_height: function() {
            return 0 > this._height ? m._platform.getStage().get_height() : this._height
        },
        __class__: fc
    });
    var Hc =
        function(a, b, c, e) {
            this._from = a;
            this._to = b;
            this._transition = c;
            this._onComplete = e
        };
    i["flambe.scene._Director.Transitor"] = Hc;
    Hc.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    Hc.prototype = {
        init: function(a) {
            this._transition.init(a, this._from, this._to)
        },
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: Hc
    };
    var Ab = function() {};
    i["flambe.scene.Transition"] = Ab;
    Ab.__name__ = ["flambe", "scene", "Transition"];
    Ab.prototype = {
        init: function(a,
            b, c) {
            this._director = a;
            this._from = b;
            this._to = c
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: Ab
    };
    var ra = function(a, b) {
        this._duration = a;
        this._ease = null != b ? b : r.linear
    };
    i["flambe.scene.TweenTransition"] = ra;
    ra.__name__ = ["flambe", "scene", "TweenTransition"];
    ra.__super__ = Ab;
    ra.prototype = x(Ab.prototype, {
        init: function(a, b, c) {
            Ab.prototype.init.call(this, a, b, c);
            this._elapsed = 0
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function(a, b) {
            return a + (b - a) * this._ease(this._elapsed /
                this._duration)
        },
        __class__: ra
    });
    var gc = function(a, b) {
        ra.call(this, a, b)
    };
    i["flambe.scene.FadeTransition"] = gc;
    gc.__name__ = ["flambe", "scene", "FadeTransition"];
    gc.__super__ = ra;
    gc.prototype = x(ra.prototype, {
        init: function(a, b, c) {
            ra.prototype.init.call(this, a, b, c);
            a = this._to._compMap.Sprite_0;
            null == a && this._to.add(a = new y);
            a.alpha.set__(0)
        },
        update: function(a) {
            a = ra.prototype.update.call(this, a);
            this._to._compMap.Sprite_0.alpha.set__(this.interp(0, 1));
            return a
        },
        complete: function() {
            this._to._compMap.Sprite_0.alpha.set__(1)
        },
        __class__: gc
    });
    var Ic = function() {};
    i["flambe.scene.Scene"] = Ic;
    Ic.__name__ = ["flambe", "scene", "Scene"];
    Ic.__super__ = R;
    Ic.prototype = x(R.prototype, {
        get_name: function() {
            return "Scene_3"
        },
        __class__: Ic
    });
    var Bb = function(a, b) {
        this._direction = 2;
        ra.call(this, a, b)
    };
    i["flambe.scene.SlideTransition"] = Bb;
    Bb.__name__ = ["flambe", "scene", "SlideTransition"];
    Bb.__super__ = ra;
    Bb.prototype = x(ra.prototype, {
        up: function() {
            this._direction = 0;
            return this
        },
        down: function() {
            this._direction = 1;
            return this
        },
        init: function(a, b, c) {
            ra.prototype.init.call(this,
                a, b, c);
            switch (this._direction) {
                case 0:
                    this._x = 0;
                    this._y = -this._director.get_height();
                    break;
                case 1:
                    this._x = 0;
                    this._y = this._director.get_height();
                    break;
                case 2:
                    this._x = -this._director.get_width();
                    this._y = 0;
                    break;
                case 3:
                    this._x = this._director.get_width(), this._y = 0
            }
            a = this._from._compMap.Sprite_0;
            null == a && this._from.add(a = new y);
            a.setXY(0, 0);
            a = this._to._compMap.Sprite_0;
            null == a && this._to.add(a = new y);
            a.setXY(-this._x, -this._y)
        },
        update: function(a) {
            a = ra.prototype.update.call(this, a);
            this._from._compMap.Sprite_0.setXY(this.interp(0,
                this._x), this.interp(0, this._y));
            this._to._compMap.Sprite_0.setXY(this.interp(-this._x, 0), this.interp(-this._y, 0));
            return a
        },
        complete: function() {
            this._from._compMap.Sprite_0.setXY(0, 0);
            this._to._compMap.Sprite_0.setXY(0, 0)
        },
        __class__: Bb
    });
    var Ja = function() {};
    i["flambe.script.Action"] = Ja;
    Ja.__name__ = ["flambe", "script", "Action"];
    Ja.prototype = {
        __class__: Ja
    };
    var eb = function(a, b, c, e) {
        this._value = a;
        this._by = b;
        this._seconds = c;
        this._easing = e
    };
    i["flambe.script.AnimateBy"] = eb;
    eb.__name__ = ["flambe", "script",
        "AnimateBy"
    ];
    eb.__interfaces__ = [Ja];
    eb.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new Za(this._value._value, this._value._value + this._by, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: eb
    };
    var u = function(a, b, c, e) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = e
    };
    i["flambe.script.AnimateTo"] =
        u;
    u.__name__ = ["flambe", "script", "AnimateTo"];
    u.__interfaces__ = [Ja];
    u.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new Za(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: u
    };
    var W = function(a) {
        this._fn = a
    };
    i["flambe.script.CallFunction"] = W;
    W.__name__ = ["flambe", "script", "CallFunction"];
    W.__interfaces__ = [Ja];
    W.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: W
    };
    var sa = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    i["flambe.script.Delay"] = sa;
    sa.__name__ = ["flambe", "script", "Delay"];
    sa.__interfaces__ = [Ja];
    sa.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: sa
    };
    var Cb = function(a) {
        this._runningActions = null != a ? a.slice() : []
    };
    i["flambe.script.FirstOf"] = Cb;
    Cb.__name__ = ["flambe", "script", "FirstOf"];
    Cb.__interfaces__ = [Ja];
    Cb.prototype = {
        update: function(a, b) {
            for (var c = 0, e = this._runningActions; c < e.length;) {
                var d = e[c];
                ++c;
                if (null != d && (d = d.update(a, b), 0 <= d)) return d
            }
            return -1
        },
        __class__: Cb
    };
    var X = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    i["flambe.script.Parallel"] = X;
    X.__name__ = ["flambe", "script", "Parallel"];
    X.__interfaces__ = [Ja];
    X.prototype = {
        update: function(a, b) {
            for (var c = !0, e = 0, d = 0, f = this._runningActions.length; d < f;) {
                var h = d++,
                    g = this._runningActions[h];
                if (null != g) {
                    var i = g.update(a, b);
                    0 <= i ? (this._runningActions[h] = null, this._completedActions.push(g), i > e && (e = i)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], e) : -1
        },
        __class__: X
    };
    var Db = function(a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining = this._count = b
    };
    i["flambe.script.Repeat"] = Db;
    Db.__name__ = ["flambe", "script", "Repeat"];
    Db.__interfaces__ = [Ja];
    Db.prototype = {
        update: function(a, b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a,
                b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ? (this._remaining = this._count, c) : -1
        },
        __class__: Db
    };
    var ba = function() {
        R.call(this);
        this.stopAll()
    };
    i["flambe.script.Script"] = ba;
    ba.__name__ = ["flambe", "script", "Script"];
    ba.__super__ = R;
    ba.prototype = x(R.prototype, {
        get_name: function() {
            return "Script_5"
        },
        run: function(a) {
            a = new hc(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a,
                    this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: ba
    });
    var hc = function(a) {
        this.removed = !1;
        this.action = a
    };
    i["flambe.script._Script.Handle"] = hc;
    hc.__name__ = ["flambe", "script", "_Script", "Handle"];
    hc.__interfaces__ = [Fa];
    hc.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: hc
    };
    var ca = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    i["flambe.script.Sequence"] = ca;
    ca.__name__ = ["flambe", "script", "Sequence"];
    ca.__interfaces__ = [Ja];
    ca.prototype = {
        update: function(a,
            b) {
            for (var c = 0;;) {
                var e = this._runningActions[this._idx];
                if (null != e)
                    if (e = e.update(a - c, b), 0 <= e) c += e;
                    else return -1;
                    ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: ca
    };
    var Oa = i["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    Oa.Stage3D = ["Stage3D", 0];
    Oa.Stage3D.__enum__ = Oa;
    Oa.WebGL = ["WebGL", 1];
    Oa.WebGL.__enum__ = Oa;
    Oa.Canvas = ["Canvas", 2];
    Oa.Canvas.__enum__ = Oa;
    var Jc = function(a, b) {
        if (-1 < b.indexOf("{n}"))
            for (var c = 0;;) {
                var e = b.split("{n}").join(null == c ? "null" : "" + c);
                if (null == a.getFile(e, !1)) break;
                e = new ic(a, e);
                e.next = this.firstLibrary;
                this.firstLibrary = e;
                c++
            } else this.firstLibrary = new ic(a, b)
    };
    i["flambe.texturepacker.TexturePackerLibrary"] = Jc;
    Jc.__name__ = ["flambe", "texturepacker", "TexturePackerLibrary"];
    Jc.prototype = {
        createSprite: function(a, b) {
            null == b && (b = !0);
            for (var c = null, e = this.firstLibrary; null != e;) {
                c = e.createSprite(a + ".png", !1);
                if (null != c) break;
                e = e.next
            }
            if (b &&
                null == c) throw V.withFields("Missing sprite", ["name", a]);
            return c
        },
        getTexture: function(a, b) {
            null == b && (b = !0);
            for (var c = null, e = this.firstLibrary; null != e;) {
                c = e.getTexture(a + ".png", !1);
                if (null != c) break;
                e = e.next
            }
            if (b && null == c) throw V.withFields("Missing texture", ["name", a]);
            return c
        },
        __class__: Jc
    };
    var ic = function(a, b) {
        this.next = null;
        this._pack = a;
        var c = a.getFile(b);
        this._xml = w.parse(c.toString());
        this._items = new ma;
        for (var c = this._xml.firstElement().get("imagePath"), c = this._pack.getTexture(V.removeFileExtension(c)),
            e = this._xml.firstElement().elements(); e.hasNext();) {
            var d = e.next(),
                f = d.get("n"),
                h = new Kc(f, c, o.parseInt(d.get("x")), o.parseInt(d.get("y")), o.parseInt(d.get("w")), o.parseInt(d.get("h")), d.exists("r") ? "y" == d.get("r") : !1);
            d.exists("oX") && h.setOffset(o.parseInt(d.get("oX")), o.parseInt(d.get("oY")), o.parseInt(d.get("oW")), o.parseInt(d.get("oH")));
            this._items.set(f, h)
        }
    };
    i["flambe.texturepacker.SpritesLibrary"] = ic;
    ic.__name__ = ["flambe", "texturepacker", "SpritesLibrary"];
    ic.prototype = {
        createSprite: function(a,
            b) {
            null == b && (b = !0);
            var c = this._items.get(a);
            if (null == c) {
                if (b) throw V.withFields("Missing sprite", ["name", a]);
                return null
            }
            return new jc(c)
        },
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this._items.get(a);
            if (null == c) {
                if (b) throw V.withFields("Missing texture", ["name", a]);
                return null
            }
            return c.getSubTexture()
        },
        __class__: ic
    };
    var jc = function(a) {
        D.call(this, this.texture);
        this.symbol = a;
        this.texture = a.getSubTexture()
    };
    i["flambe.texturepacker.TexturePackerSprite"] = jc;
    jc.__name__ = ["flambe", "texturepacker",
        "TexturePackerSprite"
    ];
    jc.__super__ = D;
    jc.prototype = x(D.prototype, {
        draw: function(a) {
            this.symbol.rotated ? (a.save(), a.translate(0, this.symbol.width), a.rotate(-90), a.drawTexture(this.texture, this.symbol.offsetY, this.symbol.offsetX), a.restore()) : a.drawTexture(this.texture, this.symbol.offsetX, this.symbol.offsetY)
        },
        getNaturalHeight: function() {
            return this.symbol.rotated ? D.prototype.getNaturalWidth.call(this) + this.symbol.offsetWidth : D.prototype.getNaturalHeight.call(this) + this.symbol.offsetHeight
        },
        getNaturalWidth: function() {
            return this.symbol.rotated ?
                D.prototype.getNaturalHeight.call(this) + this.symbol.offsetHeight : D.prototype.getNaturalWidth.call(this) + this.symbol.offsetWidth
        },
        __class__: jc
    });
    var Kc = function(a, b, c, e, d, f, h) {
        this.offsetX = this.offsetY = this.offsetWidth = this.offsetHeight = 0;
        this.width = d;
        this.height = f;
        this.rotated = h;
        this.x = c;
        this.y = e;
        this.name = a;
        this.texture = b
    };
    i["flambe.texturepacker.TexturePackerSymbol"] = Kc;
    Kc.__name__ = ["flambe", "texturepacker", "TexturePackerSymbol"];
    Kc.prototype = {
        setOffset: function(a, b, c, e) {
            this.offsetX = a;
            this.offsetY =
                b;
            this.offsetWidth = c;
            this.offsetHeight = e
        },
        getSubTexture: function() {
            return this.texture.subTexture(this.x, this.y, this.width, this.height)
        },
        __class__: Kc
    };
    var Pc = function() {};
    i["flambe.util.Assert"] = Pc;
    Pc.__name__ = ["flambe", "util", "Assert"];
    Pc.that = function() {};
    var tc = function() {};
    i["flambe.util.BitSets"] = tc;
    tc.__name__ = ["flambe", "util", "BitSets"];
    tc.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var Tb = function() {
        this.success = new M;
        this.error = new M;
        this.progressChanged = new Na;
        this.hasResult = !1;
        this._total = this._progress =
            0
    };
    i["flambe.util.Promise"] = Tb;
    Tb.__name__ = ["flambe", "util", "Promise"];
    Tb.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result), null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: Tb
    };
    var Na = function(a) {
        Y.call(this, a)
    };
    i["flambe.util.Signal0"] = Na;
    Na.__name__ = ["flambe", "util", "Signal0"];
    Na.__super__ = Y;
    Na.prototype = x(Y.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == Y.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: Na
    });
    var qc =
        function(a) {
            this.next = null;
            this.fn = a
        };
    i["flambe.util._SignalBase.Task"] = qc;
    qc.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    qc.prototype = {
        __class__: qc
    };
    var V = function() {};
    i["flambe.util.Strings"] = V;
    V.__name__ = ["flambe", "util", "Strings"];
    V.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? s.substr(a, b + 1, null) : null
    };
    V.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? s.substr(a, 0, b) : a
    };
    V.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = s.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = s.substr(a, b + 1, null));
        return V.getFileExtension(a)
    };
    V.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    V.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[", e = 0; e < c;) {
                0 < e && (a += ", ");
                var d = b[e],
                    f = b[e + 1];
                if (o.is(f, Error)) {
                    var h = f.stack;
                    null != h && (f = h)
                }
                a += d + "=" + o.string(f);
                e += 2
            }
            a += "]"
        }
        return a
    };
    var Gb = function(a) {
        this.url = a;
        this.headers = new Ya;
        this.params = new Ya;
        this.async = !0
    };
    i["haxe.Http"] = Gb;
    Gb.__name__ = ["haxe", "Http"];
    Gb.prototype = {
        setParameter: function(a, b) {
            this.params = Qa.filter(this.params, function(b) {
                return b.param != a
            });
            this.params.push({
                param: a,
                value: b
            });
            return this
        },
        addParameter: function(a, b) {
            this.params.push({
                param: a,
                value: b
            });
            return this
        },
        request: function(a) {
            var b = this;
            b.responseData = null;
            var c = this.req = Rc.createXMLHttpRequest(),
                e = function() {
                    if (4 == c.readyState) {
                        var a;
                        try {
                            a = c.status
                        } catch (e) {
                            a = null
                        }
                        void 0 == a && (a = null);
                        if (null != a) b.onStatus(a);
                        if (null != a && 200 <= a && 400 > a) b.req = null, b.onData(b.responseData =
                            c.responseText);
                        else if (null == a) b.req = null, b.onError("Failed to connect or resolve host");
                        else switch (a) {
                            case 12029:
                                b.req = null;
                                b.onError("Failed to connect to host");
                                break;
                            case 12007:
                                b.req = null;
                                b.onError("Unknown host");
                                break;
                            default:
                                b.req = null, b.responseData = c.responseText, b.onError("Http Error #" + c.status)
                        }
                    }
                };
            this.async && (c.onreadystatechange = e);
            var d = this.postData;
            if (null != d) a = !0;
            else
                for (var f = this.params.iterator(); f.hasNext();) var h = f.next(),
                    d = null == d ? "" : d + "&",
                    d = d + (encodeURIComponent(h.param) +
                        "=" + encodeURIComponent(h.value));
            try {
                if (a) c.open("POST", this.url, this.async);
                else if (null != d) {
                    var g = 1 >= this.url.split("?").length;
                    c.open("GET", this.url + (g ? "?" : "&") + d, this.async);
                    d = null
                } else c.open("GET", this.url, this.async)
            } catch (i) {
                b.req = null;
                this.onError(i.toString());
                return
            }!Qa.exists(this.headers, function(a) {
                return "Content-Type" == a.header
            }) && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (a = this.headers.iterator(); a.hasNext();) f = a.next(), c.setRequestHeader(f.header,
                f.value);
            c.send(d);
            this.async || e(null)
        },
        onData: function() {},
        onError: function() {},
        onStatus: function() {},
        __class__: Gb
    };
    var Ma = function() {
        this.buf = new Xa;
        this.cache = [];
        this.useCache = Ma.USE_CACHE;
        this.useEnumIndex = Ma.USE_ENUM_INDEX;
        this.shash = new ma;
        this.scount = 0
    };
    i["haxe.Serializer"] = Ma;
    Ma.__name__ = ["haxe", "Serializer"];
    Ma.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" +
                b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, e = this.cache.length; c < e;) {
                var d = c++,
                    f = this.cache[d];
                if (typeof f == b && f == a) return this.buf.b += "r", this.buf.b = null == d ? this.buf.b + "null" : this.buf.b + ("" + d), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = p.fields(a); b <
                c.length;) {
                var e = c[b];
                ++b;
                this.serializeString(e);
                this.serialize(p.field(a, e))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = L["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    Math.isNaN(a) ? this.buf.b += "k" : Math.isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b +
                        "t" : this.buf.b + "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, e = 0; e < c;) {
                                var d = e++;
                                null == a[d] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[d]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case Ya:
                            this.buf.b += "l";
                            for (a =
                                a.iterator(); a.hasNext();) this.serialize(a.next());
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(s.dateStr(a));
                            break;
                        case ma:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case Ba:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case fb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c =
                                b.next(), e = p.field(c, "__id__"), p.deleteField(c, "__id__"), this.serialize(c), c.__id__ = e, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case pb:
                            e = 0;
                            d = a.length - 2;
                            b = new Xa;
                            for (c = Ma.BASE64; e < d;) {
                                var f = a.get(e++),
                                    h = a.get(e++),
                                    g = a.get(e++);
                                b.add(c.charAt(f >> 2));
                                b.add(c.charAt((f << 4 | h >> 4) & 63));
                                b.add(c.charAt((h << 2 | g >> 6) & 63));
                                b.add(c.charAt(g & 63))
                            }
                            e == d ? (d = a.get(e++), a = a.get(e++), b.add(c.charAt(d >> 2)), b.add(c.charAt((d << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : e == d + 1 && (a = a.get(e++), b.add(c.charAt(a >> 2)),
                                b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(L.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(L.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(a)) break;
                    this.buf.b += "o";
                    this.serializeFields(a);
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(L.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += o.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += o.string(b - 2);
                    for (c = 2; c < b;) e = c++, this.serialize(a[e]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " + o.string(a);
            }
        },
        __class__: Ma
    };
    var P = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    i["haxe.Timer"] = P;
    P.__name__ = ["haxe", "Timer"];
    P.delay = function(a, b) {
        var c = new P(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    P.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: P
    };
    var ha = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = ha.DEFAULT_RESOLVER;
        null == a && (a = L, ha.DEFAULT_RESOLVER =
            a);
        this.setResolver(a)
    };
    i["haxe.Unserializer"] = ha;
    ha.__name__ = ["haxe", "Unserializer"];
    ha.initCodes = function() {
        for (var a = [], b = 0, c = ha.BASE64.length; b < c;) {
            var e = b++;
            a[ha.BASE64.charCodeAt(e)] = e
        }
        return a
    };
    ha.run = function(a) {
        return (new ha(a)).unserialize()
    };
    ha.prototype = {
        setResolver: function(a) {
            this.resolver = null == a ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : a
        },
        get: function(a) {
            return this.buf.charCodeAt(a)
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var e = this.buf.charCodeAt(this.pos);
                if (e != e) break;
                if (45 == e) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > e || 57 < e) break;
                    a = 10 * a + (e - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++)) throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c) return L.createEnum(a,
                b);
            for (var e = []; 0 < c--;) e.push(this.unserialize());
            return L.createEnum(a, b, e)
        },
        unserialize: function() {
            switch (this.get(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    for (var a = this.pos;;) {
                        var b = this.buf.charCodeAt(this.pos);
                        if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                        else break
                    }
                    return o.parseFloat(s.substr(this.buf, a, this.pos - a));
                case 121:
                    a = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid string length";
                    b = s.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw "Invalid reference";
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw "Invalid string reference";
                    return this.scache[a];
                case 120:
                    throw this.unserialize();
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = L.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    a = this.unserializeEnum(b,
                        this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    this.pos++;
                    var c = this.readDigits(),
                        e = L.getEnumConstructs(b)[c];
                    if (null == e) throw "Unknown enum index " + a + "@" + c;
                    a = this.unserializeEnum(b, e);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Ya;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new ma;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b =
                        this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new Ba;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw "Invalid IntMap format";
                    return a;
                case 77:
                    a = new fb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return a = s.substr(this.buf, this.pos, 19), a = s.strDate(a), this.cache.push(a), this.pos += 19, a;
                case 115:
                    a =
                        this.readDigits();
                    e = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid bytes length";
                    var d = ha.CODES;
                    null == d && (d = ha.initCodes(), ha.CODES = d);
                    for (var f = this.pos, h = a & 3, g = f + (a - h), b = pb.alloc(3 * (a >> 2) + (2 <= h ? h - 1 : 0)), c = 0; f < g;) {
                        var i = d[T.fastCodeAt(e, f++)],
                            k = d[T.fastCodeAt(e, f++)];
                        b.set(c++, i << 2 | k >> 4);
                        i = d[T.fastCodeAt(e, f++)];
                        b.set(c++, k << 4 | i >> 2);
                        k = d[T.fastCodeAt(e, f++)];
                        b.set(c++, i << 6 | k)
                    }
                    2 <= h && (k = d[T.fastCodeAt(e, f++)], g = d[T.fastCodeAt(e, f++)], b.set(c++, k << 2 | g >> 4), 3 == h && (e = d[T.fastCodeAt(e,
                        f++)], b.set(c++, g << 4 | e >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = L.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw "Invalid custom data";
                    return a
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        __class__: ha
    };
    var Va = function() {};
    i["haxe.crypto.Md5"] = Va;
    Va.__name__ = ["haxe", "crypto", "Md5"];
    Va.encode = function(a) {
        var b =
            new Va,
            a = b.doEncode(Va.str2blks(a));
        return b.hex(a)
    };
    Va.str2blks = function(a) {
        for (var b = (a.length + 8 >> 6) + 1, c = [], e = 16 * b, d = 0; d < e;) {
            var f = d++;
            c[f] = 0
        }
        for (e = 0; e < a.length;) c[e >> 2] |= s.cca(a, e) << 8 * ((8 * a.length + e) % 4), e++;
        c[e >> 2] |= 128 << 8 * ((8 * a.length + e) % 4);
        a = 8 * a.length;
        b = 16 * b - 2;
        c[b] = a & 255;
        c[b] |= (a >>> 8 & 255) << 8;
        c[b] |= (a >>> 16 & 255) << 16;
        c[b] |= (a >>> 24 & 255) << 24;
        return c
    };
    Va.prototype = {
        bitOR: function(a, b) {
            return (a >>> 1 | b >>> 1) << 1 | a & 1 | b & 1
        },
        bitXOR: function(a, b) {
            return (a >>> 1 ^ b >>> 1) << 1 | a & 1 ^ b & 1
        },
        bitAND: function(a, b) {
            return (a >>>
                1 & b >>> 1) << 1 | a & 1 & b & 1
        },
        addme: function(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        },
        hex: function(a) {
            for (var b = "", c = 0; c < a.length;) {
                var e = a[c];
                ++c;
                for (var d = 0; 4 > d;) var f = d++,
                    b = b + ("0123456789abcdef".charAt(e >> 8 * f + 4 & 15) + "0123456789abcdef".charAt(e >> 8 * f & 15))
            }
            return b
        },
        rol: function(a, b) {
            return a << b | a >>> 32 - b
        },
        cmn: function(a, b, c, e, d, f) {
            return this.addme(this.rol(this.addme(this.addme(b, a), this.addme(e, f)), d), c)
        },
        ff: function(a, b, c, e, d, f, h) {
            return this.cmn(this.bitOR(this.bitAND(b,
                c), this.bitAND(~b, e)), a, b, d, f, h)
        },
        gg: function(a, b, c, e, d, f, h) {
            return this.cmn(this.bitOR(this.bitAND(b, e), this.bitAND(c, ~e)), a, b, d, f, h)
        },
        hh: function(a, b, c, e, d, f, h) {
            return this.cmn(this.bitXOR(this.bitXOR(b, c), e), a, b, d, f, h)
        },
        ii: function(a, b, c, e, d, f, h) {
            return this.cmn(this.bitXOR(c, this.bitOR(b, ~e)), a, b, d, f, h)
        },
        doEncode: function(a) {
            for (var b = 1732584193, c = -271733879, e = -1732584194, d = 271733878, f = 0; f < a.length;) var h = b,
                g = c,
                i = e,
                k = d,
                b = this.ff(b, c, e, d, a[f], 7, -680876936),
                d = this.ff(d, b, c, e, a[f + 1], 12, -389564586),
                e = this.ff(e, d, b, c, a[f + 2], 17, 606105819),
                c = this.ff(c, e, d, b, a[f + 3], 22, -1044525330),
                b = this.ff(b, c, e, d, a[f + 4], 7, -176418897),
                d = this.ff(d, b, c, e, a[f + 5], 12, 1200080426),
                e = this.ff(e, d, b, c, a[f + 6], 17, -1473231341),
                c = this.ff(c, e, d, b, a[f + 7], 22, -45705983),
                b = this.ff(b, c, e, d, a[f + 8], 7, 1770035416),
                d = this.ff(d, b, c, e, a[f + 9], 12, -1958414417),
                e = this.ff(e, d, b, c, a[f + 10], 17, -42063),
                c = this.ff(c, e, d, b, a[f + 11], 22, -1990404162),
                b = this.ff(b, c, e, d, a[f + 12], 7, 1804603682),
                d = this.ff(d, b, c, e, a[f + 13], 12, -40341101),
                e = this.ff(e, d, b, c, a[f + 14],
                    17, -1502002290),
                c = this.ff(c, e, d, b, a[f + 15], 22, 1236535329),
                b = this.gg(b, c, e, d, a[f + 1], 5, -165796510),
                d = this.gg(d, b, c, e, a[f + 6], 9, -1069501632),
                e = this.gg(e, d, b, c, a[f + 11], 14, 643717713),
                c = this.gg(c, e, d, b, a[f], 20, -373897302),
                b = this.gg(b, c, e, d, a[f + 5], 5, -701558691),
                d = this.gg(d, b, c, e, a[f + 10], 9, 38016083),
                e = this.gg(e, d, b, c, a[f + 15], 14, -660478335),
                c = this.gg(c, e, d, b, a[f + 4], 20, -405537848),
                b = this.gg(b, c, e, d, a[f + 9], 5, 568446438),
                d = this.gg(d, b, c, e, a[f + 14], 9, -1019803690),
                e = this.gg(e, d, b, c, a[f + 3], 14, -187363961),
                c = this.gg(c,
                    e, d, b, a[f + 8], 20, 1163531501),
                b = this.gg(b, c, e, d, a[f + 13], 5, -1444681467),
                d = this.gg(d, b, c, e, a[f + 2], 9, -51403784),
                e = this.gg(e, d, b, c, a[f + 7], 14, 1735328473),
                c = this.gg(c, e, d, b, a[f + 12], 20, -1926607734),
                b = this.hh(b, c, e, d, a[f + 5], 4, -378558),
                d = this.hh(d, b, c, e, a[f + 8], 11, -2022574463),
                e = this.hh(e, d, b, c, a[f + 11], 16, 1839030562),
                c = this.hh(c, e, d, b, a[f + 14], 23, -35309556),
                b = this.hh(b, c, e, d, a[f + 1], 4, -1530992060),
                d = this.hh(d, b, c, e, a[f + 4], 11, 1272893353),
                e = this.hh(e, d, b, c, a[f + 7], 16, -155497632),
                c = this.hh(c, e, d, b, a[f + 10], 23, -1094730640),
                b = this.hh(b, c, e, d, a[f + 13], 4, 681279174),
                d = this.hh(d, b, c, e, a[f], 11, -358537222),
                e = this.hh(e, d, b, c, a[f + 3], 16, -722521979),
                c = this.hh(c, e, d, b, a[f + 6], 23, 76029189),
                b = this.hh(b, c, e, d, a[f + 9], 4, -640364487),
                d = this.hh(d, b, c, e, a[f + 12], 11, -421815835),
                e = this.hh(e, d, b, c, a[f + 15], 16, 530742520),
                c = this.hh(c, e, d, b, a[f + 2], 23, -995338651),
                b = this.ii(b, c, e, d, a[f], 6, -198630844),
                d = this.ii(d, b, c, e, a[f + 7], 10, 1126891415),
                e = this.ii(e, d, b, c, a[f + 14], 15, -1416354905),
                c = this.ii(c, e, d, b, a[f + 5], 21, -57434055),
                b = this.ii(b, c, e, d, a[f + 12], 6,
                    1700485571),
                d = this.ii(d, b, c, e, a[f + 3], 10, -1894986606),
                e = this.ii(e, d, b, c, a[f + 10], 15, -1051523),
                c = this.ii(c, e, d, b, a[f + 1], 21, -2054922799),
                b = this.ii(b, c, e, d, a[f + 8], 6, 1873313359),
                d = this.ii(d, b, c, e, a[f + 15], 10, -30611744),
                e = this.ii(e, d, b, c, a[f + 6], 15, -1560198380),
                c = this.ii(c, e, d, b, a[f + 13], 21, 1309151649),
                b = this.ii(b, c, e, d, a[f + 4], 6, -145523070),
                d = this.ii(d, b, c, e, a[f + 11], 10, -1120210379),
                e = this.ii(e, d, b, c, a[f + 2], 15, 718787259),
                c = this.ii(c, e, d, b, a[f + 9], 21, -343485551),
                b = this.addme(b, h),
                c = this.addme(c, g),
                e = this.addme(e,
                    i),
                d = this.addme(d, k),
                f = f + 16;
            return [b, c, e, d]
        },
        __class__: Va
    };
    var Ba = function() {
        this.h = {}
    };
    i["haxe.ds.IntMap"] = Ba;
    Ba.__name__ = ["haxe", "ds", "IntMap"];
    Ba.__interfaces__ = [oc];
    Ba.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        get: function(a) {
            return this.h[a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return s.iter(a)
        },
        __class__: Ba
    };
    var fb =
        function() {
            this.h = {};
            this.h.__keys__ = {}
        };
    i["haxe.ds.ObjectMap"] = fb;
    fb.__name__ = ["haxe", "ds", "ObjectMap"];
    fb.__interfaces__ = [oc];
    fb.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++fb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return s.iter(a)
        },
        __class__: fb
    };
    var ma = function() {
        this.h = {}
    };
    i["haxe.ds.StringMap"] = ma;
    ma.__name__ = ["haxe", "ds", "StringMap"];
    ma.__interfaces__ = [oc];
    ma.prototype = {
        set: function(a,
            b) {
            this.h["$" + a] = b
        },
        get: function(a) {
            return this.h["$" + a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty("$" + a)
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return s.iter(a)
        },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        __class__: ma
    };
    var pb = function(a, b) {
        this.length = a;
        this.b = b
    };
    i["haxe.io.Bytes"] = pb;
    pb.__name__ = ["haxe", "io", "Bytes"];
    pb.alloc = function(a) {
        for (var b = [], c = 0; c < a;) c++, b.push(0);
        return new pb(a, b)
    };
    pb.prototype = {
        get: function(a) {
            return this.b[a]
        },
        set: function(a, b) {
            this.b[a] = b & 255
        },
        __class__: pb
    };
    var Sc = function() {};
    i["haxe.io.Eof"] = Sc;
    Sc.__name__ = ["haxe", "io", "Eof"];
    Sc.prototype = {
        toString: function() {
            return "Eof"
        },
        __class__: Sc
    };
    var Oc = function() {};
    i["haxe.rtti.Meta"] = Oc;
    Oc.__name__ = ["haxe", "rtti", "Meta"];
    Oc.getType = function(a) {
        a = a.__meta__;
        return null == a || null == a.obj ? {} : a.obj
    };
    var Ra = function() {};
    i["haxe.xml.Parser"] = Ra;
    Ra.__name__ = ["haxe", "xml", "Parser"];
    Ra.parse = function(a) {
        var b = w.createDocument();
        Ra.doParse(a, 0, b);
        return b
    };
    Ra.doParse = function(a, b, c) {
        null == b && (b = 0);
        for (var e = null, d = 1, f = 1, h = null, g = 0, i = 0, k = 0, j = a.charCodeAt(b), n = new Xa; j == j;) {
            switch (d) {
                case 0:
                    switch (j) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            d = f;
                            continue
                    }
                    break;
                case 1:
                    switch (j) {
                        case 60:
                            d = 0;
                            f = 2;
                            break;
                        default:
                            g = b;
                            d = 13;
                            continue
                    }
                    break;
                case 13:
                    60 == j ? (f = w.createPCData(n.b + s.substr(a, g, b - g)), n = new Xa, c.addChild(f), i++, d = 0, f = 2) : 38 == j && (n.addSub(a, g, b - g), d = 18, f = 13, g = b + 1);
                    break;
                case 17:
                    93 ==
                        j && 93 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (d = w.createCData(s.substr(a, g, b - g)), c.addChild(d), i++, b += 2, d = 1);
                    break;
                case 2:
                    switch (j) {
                        case 33:
                            if (91 == a.charCodeAt(b + 1)) {
                                b += 2;
                                if ("CDATA[" != s.substr(a, b, 6).toUpperCase()) throw "Expected <![CDATA[";
                                b += 5;
                                d = 17
                            } else if (68 == a.charCodeAt(b + 1) || 100 == a.charCodeAt(b + 1)) {
                                if ("OCTYPE" != s.substr(a, b + 2, 6).toUpperCase()) throw "Expected <!DOCTYPE";
                                b += 8;
                                d = 16
                            } else {
                                if (45 != a.charCodeAt(b + 1) || 45 != a.charCodeAt(b + 2)) throw "Expected <\!--";
                                b += 2;
                                d = 15
                            }
                            g = b + 1;
                            break;
                        case 63:
                            d = 14;
                            g =
                                b;
                            break;
                        case 47:
                            if (null == c) throw "Expected node name";
                            g = b + 1;
                            d = 0;
                            f = 10;
                            break;
                        default:
                            d = 3;
                            g = b;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
                        if (b == g) throw "Expected node name";
                        e = w.createElement(s.substr(a, g, b - g));
                        c.addChild(e);
                        d = 0;
                        f = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (j) {
                        case 47:
                            d = 11;
                            i++;
                            break;
                        case 62:
                            d = 9;
                            i++;
                            break;
                        default:
                            d = 5;
                            g = b;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
                        if (g == b) throw "Expected attribute name";
                        h = s.substr(a, g, b - g);
                        if (e.exists(h)) throw "Duplicate attribute";
                        d = 0;
                        f = 6;
                        continue
                    }
                    break;
                case 6:
                    switch (j) {
                        case 61:
                            d = 0;
                            f = 7;
                            break;
                        default:
                            throw "Expected =";
                    }
                    break;
                case 7:
                    switch (j) {
                        case 34:
                        case 39:
                            d = 8;
                            g = b;
                            break;
                        default:
                            throw 'Expected "';
                    }
                    break;
                case 8:
                    j == a.charCodeAt(g) && (f = s.substr(a, g + 1, b - g - 1), e.set(h, f), d = 0, f = 4);
                    break;
                case 9:
                    g = b = Ra.doParse(a, b, e);
                    d = 1;
                    break;
                case 11:
                    switch (j) {
                        case 62:
                            d = 1;
                            break;
                        default:
                            throw "Expected >";
                    }
                    break;
                case 12:
                    switch (j) {
                        case 62:
                            return 0 == i && c.addChild(w.createPCData("")), b;
                        default:
                            throw "Expected >";
                    }
                case 10:
                    if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
                        if (g == b) throw "Expected node name";
                        if (s.substr(a, g, b - g) != c.get_nodeName()) throw "Expected </" + c.get_nodeName() + ">";
                        d = 0;
                        f = 12;
                        continue
                    }
                    break;
                case 15:
                    45 == j && 45 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (c.addChild(w.createComment(s.substr(a, g, b - g))), b += 2, d = 1);
                    break;
                case 16:
                    91 == j ? k++ : 93 == j ? k-- : 62 == j && 0 == k && (c.addChild(w.createDocType(s.substr(a, g, b - g))), d = 1);
                    break;
                case 14:
                    63 == j && 62 == a.charCodeAt(b + 1) && (b++, d = s.substr(a,
                        g + 1, b - g - 2), c.addChild(w.createProcessingInstruction(d)), d = 1);
                    break;
                case 18:
                    59 == j && (g = s.substr(a, g, b - g), 35 == g.charCodeAt(0) ? (g = 120 == g.charCodeAt(1) ? o.parseInt("0" + s.substr(g, 1, g.length - 1)) : o.parseInt(s.substr(g, 1, g.length - 1)), n.add(String.fromCharCode(g))) : Ra.escapes.exists(g) ? n.add(Ra.escapes.get(g)) : n.b += o.string("&" + g + ";"), g = b + 1, d = f)
            }
            j = T.fastCodeAt(a, ++b)
        }
        1 == d && (g = b, d = 13);
        if (13 == d) return (b != g || 0 == i) && c.addChild(w.createPCData(n.b + s.substr(a, g, b - g))), b;
        throw "Unexpected end";
    };
    var C = function() {};
    i["js.Boot"] = C;
    C.__name__ = ["js", "Boot"];
    C.getClass = function(a) {
        return a instanceof Array && null == a.__enum__ ? Array : a.__class__
    };
    C.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, f = a.length; d < f;) var h = d++,
                            c = 2 != h ? c + ("," + C.__string_rec(a[h], b)) : c + C.__string_rec(a[h], b);
                        return c + ")"
                    }
                    c =
                        a.length;
                    d = "[";
                    b += "\t";
                    for (f = 0; f < c;) h = f++, d += (0 < h ? "," : "") + C.__string_rec(a[h], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != d && d != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                f = null != a.hasOwnProperty;
                for (c in a)
                    if (!f || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + C.__string_rec(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    C.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, f = c.length; d < f;) {
                var h = d++,
                    h = c[h];
                if (h == b || C.__interfLoop(h, b)) return !0
            }
        return C.__interfLoop(a.__super__, b)
    };
    C.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Lc:
                return (a | 0) === a;
            case Vc:
                return "number" == typeof a;
            case Wc:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case Yc:
                return !0;
            default:
                if (null != a) {
                    if ("function" == typeof b && (a instanceof b || C.__interfLoop(C.getClass(a), b))) return !0
                } else return !1;
                return b == Zc && null != a.__name__ || b == $c && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    C.__cast = function(a, b) {
        if (C.__instanceof(a, b)) return a;
        throw "Cannot cast " + o.string(a) + " to " + o.string(b);
    };
    var Rc = function() {};
    i["js.Browser"] = Rc;
    Rc.__name__ = ["js", "Browser"];
    Rc.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" !=
            typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw "Unable to create XMLHttpRequest object.";
    };
    var Nc = function() {};
    i["js.html._CanvasElement.CanvasUtil"] = Nc;
    Nc.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
    Nc.getContextWebGL = function(a, b) {
        for (var c = 0, d = ["webgl", "experimental-webgl"]; c < d.length;) {
            var f = d[c];
            ++c;
            f = a.getContext(f, b);
            if (null != f) return f
        }
        return null
    };
    var ja = function(a) {
        S.call(this, a);
        this.isFront = !0
    };
    i["kiziland.ParticleEffectSprite"] = ja;
    ja.__name__ = ["kiziland",
        "ParticleEffectSprite"
    ];
    ja.__super__ = S;
    ja.prototype = x(S.prototype, {
        creatureMoving: function() {
            return this
        },
        __class__: ja
    });
    var ta = function() {
        null == ta.bubblesEmitterMold && (ta.bubblesEmitterMold = new A(d.bootstrapPack, "bubbles"), ta.bubblesEmitterMold.texture = d.atlas.getTexture("bubble"), ta.bubblesEmitterMold.emitXVariance = k.WIDTH / 2, ta.bubblesEmitterMold.lifespan = 2.5, ta.bubblesEmitterMold.lifespanVariance = 1, ta.bubblesEmitterMold.emitYVariance = k.HEIGHT / 2);
        ja.call(this, ta.bubblesEmitterMold);
        this.hasCreatureMovingEffect = !0;
        this.setXY(k.WIDTH / 2, k.HEIGHT / 2)
    };
    i["kiziland.BubblesParticlesSprite"] = ta;
    ta.__name__ = ["kiziland", "BubblesParticlesSprite"];
    ta.__super__ = ja;
    ta.prototype = x(ja.prototype, {
        creatureMoving: function(a) {
            var b = this;
            this.emitY.set__(0);
            this.emitYVariance.set__(0);
            this.emitXVariance.set__(a.getNaturalWidth() / 2);
            this.sizeStart.set__(6);
            this.sizeStartVariance.set__(2);
            this.sizeEnd.set__(6);
            this.sizeEndVariance.set__(2);
            this.set_maxParticles(2);
            this.lifespan.set__(3);
            this.lifespanVariance.set__(1);
            this.speed.set__(80);
            this.speedVariance.set__(40);
            this.alphaStart.set__(1);
            this.alphaStartVariance.set__(0);
            this.alphaEnd.set__(1);
            this.alphaEndVariance.set__(0);
            this._emitElapsed = 2 * (this.lifespan._value / this._particles.length);
            this.setXY(a.lastX, a.lastY);
            P.delay(function() {
                b.set_maxParticles(0)
            }, 1E3);
            P.delay(function() {
                null != b.owner && b.owner.dispose()
            }, 4E3);
            return this
        },
        __class__: ta
    });
    var za = function() {};
    i["kiziland.ChangeToPortraitOverlay"] = za;
    za.__name__ = ["kiziland", "ChangeToPortraitOverlay"];
    za.show = function() {
        za.hide();
        za._showing = new j;
        var a = (new j).add(new $(3747644, m._platform.getStage().get_width(), m._platform.getStage().get_height())),
            b = new D(d.splashPack.getTexture("change_to_portrait")),
            c = m._platform.getStage().get_width() / b.getNaturalWidth(),
            e = m._platform.getStage().get_height() / b.getNaturalHeight(),
            c = Math.min(c, e);
        b.setScale(c).centerAnchor().setXY(m._platform.getStage().get_width() / 2, m._platform.getStage().get_height() / 2);
        za._showing.addChild(a);
        za._showing.addChild((new j).add(b));
        m.root.addChild(za._showing)
    };
    za.hide = function() {
        null != za._showing && (za._showing.dispose(), za._showing = null)
    };
    var k = function() {};
    i["kiziland.Consts"] = k;
    k.__name__ = ["kiziland", "Consts"];
    var da = function(a, b, c, e, f) {
        null == f && (f = -1);
        var h = this;
        U.call(this, d.atlas.getTexture(a));
        (new j).add(this);
        this._world = b;
        this._animate = !0;
        this.setXY(c, e);
        this.setAnchorBottomCenter();
        null != this._world && !this._world.isFake && (this.setDepthToBottom(), this.get_pointerDown().connect(function() {
            h.isMouseDownOnMe = !0;
            m._platform.getPointer().up.connect(function() {
                h.isMouseDownOnMe = !1
            })
        }), this._flyingAnimationSpeed = f, -1 != this._flyingAnimationSpeed ? (this.get_pointerDown().connect(function() {
            h._currentFlyingScript.stopAll();
            h.x.animateTo(h.x._value, 0);
            h.y.animateTo(h.y._value, 0);
            m._platform.getPointer().up.connect(function() {
                h.flyToNextPosition()
            })
        }), this.flyToNextPosition(), this._animateTestDelay = 0) : this._animateTestDelay = t.getRandRange(400, 600) / 1E3, this._animateDT = 0)
    };
    i["kiziland.WorldElement"] = da;
    da.__name__ = ["kiziland", "WorldElement"];
    da.__super__ = U;
    da.prototype = x(U.prototype, {
        removeAnimations: function() {
            this._animate = !1;
            null != this._currentFlyingScript && this._currentFlyingScript.stopAll();
            this.x.animateTo(this.x._value, 0);
            this.y.animateTo(this.y._value, 0)
        },
        setAnchorBottomCenter: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight())
        },
        getRandomX: function() {
            return t.getRandRange(this.getMinX(), this.getMaxX())
        },
        getRandomY: function() {
            return t.getRandRange(this.getMinY(), this.getMaxY())
        },
        getMinX: function() {
            return Math.ceil(0.05 * k.WIDTH +
                this.anchorX._value)
        },
        getMaxX: function() {
            return Math.ceil(0.95 * k.WIDTH - this.anchorX._value)
        },
        getMinY: function() {
            return 5 + Math.ceil(1.5 * k.TOPBAR_HEIGHT) + Math.ceil(this.anchorY._value)
        },
        getMaxY: function() {
            return Math.ceil(k.HEIGHT - 1.5 * k.TOPBAR_HEIGHT - this.getNaturalHeight() + this.anchorY._value)
        },
        animate: function() {},
        flyToNextPosition: function() {
            if (!this.isMouseDownOnMe && null != this.owner && this._animate) {
                null != this._currentFlyingScript && (this._currentFlyingScript.stopAll(), this._currentFlyingScript.dispose());
                var a = this.getRandomX(),
                    b = this.getRandomY(),
                    c = Math.max(Math.abs(a - this.x._value), Math.abs(b - this.y._value)) / this._flyingAnimationSpeed;
                a > this.x._value && -1 != this.scaleX._value ? this.scaleX.set__(-1) : a < this.x._value && 1 != this.scaleX._value && this.scaleX.set__(1);
                this._currentFlyingScript = new ba;
                a = new ca([new X([new u(this.x, a, c), new u(this.y, b, c)]), new W(wa(this, this.flyToNextPosition))]);
                this._currentFlyingScript.run(new Db(a));
                this.owner.add(this._currentFlyingScript)
            }
        },
        getState: function() {
            return {}
        },
        onUpdate: function(a) {
            U.prototype.onUpdate.call(this, a);
            this._animate && 0 < this._animateTestDelay && (this._animateDT += a, this._animateDT > this._animateTestDelay && (this._animateDT = 0, t.chanceTest(100 - 8 * this._world.elements.length) && this.animate()))
        },
        onRemoved: function() {
            U.prototype.onRemoved.call(this);
            null != this._world && s.remove(this._world.elements, this)
        },
        getRelativeX: function() {
            return t.clampFloat(this.x._value / k.WIDTH, this.getMinX() / k.WIDTH, this.getMaxX() / k.WIDTH)
        },
        getRelativeY: function() {
            return t.clampFloat(this.y._value /
                k.HEIGHT, this.getMinY() / k.HEIGHT, this.getMaxY() / k.HEIGHT)
        },
        setRelativeXY: function(a, b) {
            this.setXY(a * k.WIDTH, b * k.HEIGHT);
            this.setDepthToBottom(); - 1 != this._flyingAnimationSpeed && this.flyToNextPosition()
        },
        addDataToNextWorld: function() {},
        passToNextWorld: function() {
            var a = this,
                b = null == d.gameState.worlds[this._world.index + 1];
            b && (new Eb(this._world.index + 1)).saveState();
            if (!this._world.isFake) {
                var c = new D(this.texture);
                c.disablePointer();
                this._world.owner.addChild((new j).add(c.centerAnchor().setXY(this.x._value,
                    this.y._value)));
                var e = new ba,
                    f = new ca([new X([new u(c.scaleX, 10, 1), new u(c.scaleY, 10, 1), new u(c.alpha, 0, 1)]), new W(function() {
                        c.owner.dispose();
                        b && h.changeWorld(a._world.index + 1)
                    })]);
                e.run(f);
                c.owner.add(e)
            }
            this.dispose();
            this._world.saveState();
            this.addDataToNextWorld()
        },
        setDepthToBottom: function() {
            this.depth = this.y._value - this.anchorY._value + this.getNaturalHeight() * this.scaleY._value
        },
        addCoinsAnimation: function(a, b, c, e) {
            null == e && (e = 1);
            null == c && (c = 0.5);
            null == b && (b = !0);
            b && (d.gameState.coins += a);
            if (!(null == this._world || this._world.isFake)) {
                var f = d.atlas.createSprite("coin");
                f.centerAnchor().setXY(this.x._value - this.anchorX._value + this.getNaturalWidth() / 2, this.y._value - this.anchorY._value + this.getNaturalHeight() / 2).setScale(e);
                f.disablePointer();
                var g = new G(d.fontRobotoBold, 1E6 > a ? "+" + t.intToCommasString(a) : "+" + t.formatNumber(a, 0));
                g.setAlign(N.Left).setXY(f.getNaturalWidth(), d.fontRobotoBold.lineHeight / 2).setScale(1 / n.scale);
                g.disablePointer();
                g.set_pointerEnabled(!1);
                var i = new ba,
                    c = new ca([new X([new u(f.scaleY,
                        0.6 * f.scaleY._value, 0.2), new u(f.scaleX, 1.4 * f.scaleX._value, 0.2)]), new X([new u(f.scaleY, e, 0.2), new u(f.scaleX, e, 0.2)]), new Cb([new sa(0.2 * c), new eb(f.y, -150, c, r.sineOut), new eb(f.alpha, -1, c, r.sineIn)]), new W(function() {
                        null != h.topBar && b && (h.topBar.coinsDisplay += a, h.topBar.updateText())
                    }), new sa(2 * (c / 3)), new W(function() {
                        f.owner.dispose()
                    })]);
                i.run(c);
                this._world.owner.addChild((new j).add(f));
                f.owner.addChild((new j).add(g));
                f.owner.add(i)
            }
        },
        addStarsAnimation: function(a, b) {
            null == b && (b = !0);
            b && (d.gameState.stars +=
                a);
            if (!(null == this._world || this._world.isFake))
                for (var c = 0; c < a;) {
                    var e = c++,
                        f = [d.atlas.createSprite("star")];
                    f[0].centerAnchor().setXY(this.x._value - this.anchorX._value + this.getNaturalWidth() / 2 - (a - 1) / 2 * f[0].getNaturalWidth() + f[0].getNaturalWidth() * e, this.y._value - this.anchorY._value + this.getNaturalHeight() / 2);
                    f[0].disablePointer();
                    var g = h.topBar.starImage.x._value - h.topBar.starImage.anchorX._value + f[0].getNaturalWidth() / 2,
                        i = h.topBar.starImage.y._value - h.topBar.starImage.anchorY._value + f[0].getNaturalHeight() /
                        2,
                        n = Math.max(Math.abs(g - this.x._value), Math.abs(i - this.y._value)) / (0.7 * k.WIDTH),
                        o = new ba,
                        e = new ca([new sa(0.2 * e), new u(f[0].scaleX, -1, 0.3), new u(f[0].scaleX, 1, 0.3), new X([new u(f[0].scaleY, 0.6, 0.2), new u(f[0].scaleX, 1.4, 0.2)]), new X([new u(f[0].scaleY, 1, 0.2), new u(f[0].scaleX, 1, 0.2)]), new Cb([new sa(0.6 * n), new u(f[0].x, g, n, r.sineOut), new u(f[0].y, i, n, r.sineOut), new u(f[0].alpha, 0, n, r.sineIn)]), new W(function() {
                                return function() {
                                    null != h.topBar && (h.topBar.starsDisplay += 1, h.topBar.updateText())
                                }
                            }()),
                            new sa(n / 2), new W(function(a) {
                                return function() {
                                    a[0].owner.dispose()
                                }
                            }(f))
                        ]);
                    o.run(e);
                    this._world.owner.addChild((new j).add(f[0]));
                    f[0].owner.add(o)
                }
        },
        __class__: da
    });
    var O = function(a, b, c, e) {
        var f = this;
        this.level = e;
        this._clicksInRow = 1;
        this._lastMouseDownAt = 0;
        e = -1;
        null != a && a.isCreaturesFlyingAnimation && (e = k.WIDTH * t.getRandRange(5, 12) / 100);
        da.call(this, this.getConfigData().image, a, b, c, e);
        null != this._world && !this._world.isFake && (this.lastX = this.x._value, this.lastY = this.y._value, this._coinsToShowDT = 0,
            this._coinsToShowDelay = t.getRandRange(3E3, 5E3) / 1E3, this._blinkDT = this._coinsToShow = 0, this._blinkTestDelay = t.getRandRange(800, 1800) / 1E3, this.setBlinkImage(), this.get_pointerDown().connect(function(a) {
                f.startDragging(a.viewX, a.viewY);
                h.ctx.playSound("active_coin_click");
                a = f.clickRandomPow();
                a = Math.ceil(Math.pow(10, f._world.index) * Math.pow(10, a));
                0 < d.gameState.doubleCoinsPerSecSecLeft && (a *= 2);
                f._clicksInRow = 250 > (new Date).getTime() - f._lastMouseDownAt ? f._clicksInRow + 1 : 1;
                f._lastMouseDownAt = (new Date).getTime();
                var b = Math.ceil(f._clicksInRow / 15),
                    a = a * b;
                f.playSqueezeAnimation();
                f.addCoinsAnimation(a, !0, 0.5, (1 + b) / 2)
            }), this.checkMaxCreatureLevel())
    };
    i["kiziland.Creature"] = O;
    O.__name__ = ["kiziland", "Creature"];
    O.coinsPerSecFromMem = function(a) {
        O.coinsPerSecMem.length <= a && O.coinsPerSecMem.push(2 * O.coinsPerSecFromMem(a - 1) + 0.5 * a);
        return O.coinsPerSecMem[a]
    };
    O.__super__ = da;
    O.prototype = x(da.prototype, {
        stopLastSqueezeAnimation: function() {
            null != this.currentSqueezeScript && null != this.currentSqueezeScript.owner && (this.currentSqueezeScript.owner.dispose(),
                this.scaleX.animateTo(Q.sign(this.scaleX._value), 0), this.scaleY.animateTo(1, 0))
        },
        playSqueezeAnimation: function() {
            var a = this;
            this.stopLastSqueezeAnimation();
            this.currentSqueezeScript = new ba;
            this.currentSqueezeScript.run(new ca([new X([new u(this.scaleY, 0.8, 0.1, r.backInOut), new u(this.scaleX, 1.2 * Q.sign(this.scaleX._value), 0.1, r.backInOut)]), new X([new u(this.scaleY, 1, 0.1, r.backInOut), new u(this.scaleX, Q.sign(this.scaleX._value), 0.1, r.backInOut)]), new W(function() {
                a.currentSqueezeScript.owner.dispose()
            })]));
            this.owner.addChild((new j).add(this.currentSqueezeScript))
        },
        setBlinkImage: function() {
            this.removeBlink();
            this._blinkImage = d.atlas.createSprite(o.string(this.getConfigData().image) + "_eye", !1)
        },
        clickRandomPow: function() {
            var a = o.random(100);
            return a < 1 + 2 * (this.level - this._world.minCreatureLevel) ? 2 : a < 11 + 3 * (this.level - this._world.minCreatureLevel) ? 1 : 90 > a ? 0 : -1
        },
        checkMaxCreatureLevel: function() {
            null == d.gameState.maxCreatureLevelReached ? d.gameState.maxCreatureLevelReached = this.level : d.gameState.maxCreatureLevelReached <
                this.level && (d.gameState.maxCreatureLevelReached = this.level, h.creaturesStore.checkMaxCreatureLevelInStore(), f.reportEvent("new_creature", {
                    creature_level: this.level
                }))
        },
        coinsPerSec: function() {
            return O.coinsPerSecFromMem(this.level)
        },
        addTotalCoinsPerSec: function() {
            d.gameState.coinsPerSec += this.coinsPerSec()
        },
        addDiffCoinsPerSec: function() {
            0 == this.level ? this.addTotalCoinsPerSec() : d.gameState.coinsPerSec += this.coinsPerSec() - 2 * O.coinsPerSecFromMem(this.level - 1);
            null != h.topBar && h.topBar.updateText();
            null !=
                this._world && this._world.saveState()
        },
        mergeWith: function(a, b) {
            null == b && (b = !1);
            if (this.level == d.gCreaturesConfig.length - 1) return O.isNoMoreCreaturesPopupShown || (O.isNoMoreCreaturesPopupShown = !0, this.showNoMoreCreaturesPopup()), !1;
            if (this.isNextLevelInNextWorld() && h.isWorldFull(this._world.index + 1)) return b || h.showNextWorldIsFull(), !1;
            d.gameState.isFirstMergeTutorialDone = !0;
            this._world.isFake ? (a.dispose(), this.generateNext()) : this.mergeAnimation(a);
            return !0
        },
        mergeAnimation: function(a) {
            var b = this;
            this.preventChangingWorld =
                this.isNextLevelInNextWorld();
            this.disablePointer();
            a.disablePointer();
            this.stopLastSqueezeAnimation();
            a.stopLastSqueezeAnimation();
            this.centerAnchor();
            var c = this.y;
            c.set__(c._value - this.getNaturalHeight() / 2);
            a.centerAnchor();
            c = a.y;
            c.set__(c._value - a.getNaturalHeight() / 2);
            var e = (a.x._value + this.x._value) / 2,
                f = (a.y._value + this.y._value) / 2;
            this._world.callFunctions([
                function() {
                    b.x.animateTo(e, 0.2, r.sineInOut);
                    b.y.animateTo(f, 0.2, r.sineInOut);
                    a.x.animateTo(e, 0.2, r.sineInOut);
                    a.y.animateTo(f, 0.2, r.sineInOut);
                    b.scaleX.animateTo(0, 0.4, r.sineInOut);
                    b.scaleY.animateTo(0, 0.4, r.sineInOut);
                    a.scaleX.animateTo(0, 0.4, r.sineInOut);
                    a.scaleY.animateTo(0, 0.4, r.sineInOut)
                },
                function() {
                    a.dispose();
                    var c = new oa("Merge_effect", 1);
                    c.onFrameChanged.connect(function(a) {
                        6 == a && (b.generateNext(), b.preventChangingWorld = !1, b.centerAnchor(), b.scaleX.animateTo(1, 0.2, r.sineInOut), b.scaleY.animateTo(1, 0.2, r.sineInOut))
                    });
                    c.setXY(e - b.anchorX._value + b.getNaturalWidth() / 2 - c.getNaturalWidth() / 2, f - b.anchorY._value + b.getNaturalHeight() /
                        2 - c.getNaturalHeight() / 2);
                    b._world.owner.addChild((new j).add(c));
                    c.onPlaysFinish.connect((Ka = c.owner, wa(Ka, Ka.dispose))).once();
                    h.ctx.playSound(b.level == d.gameState.maxCreatureLevelReached ? "merge_final" : "merge_kizis")
                },
                function() {
                    if (0 != (b._flags & 4)) {
                        b.setAnchorBottomCenter();
                        var a = b.y;
                        a.set__(a._value + b.getNaturalHeight() / 2);
                        b.setDepthToBottom()
                    }
                }
            ], [200, 500, 0])
        },
        isNextLevelInNextWorld: function() {
            return -1 != this._world.maxCreatureLevel && this.level + 1 > this._world.maxCreatureLevel
        },
        generateNext: function() {
            if (this.isNextLevelInNextWorld())
                if (d.gWorldsConfig[this._world.index +
                    1].is_receiving_eggs) {
                    var a = this._world.addCreatureEgg(this.x._value, this.y._value, !1);
                    a.texture = d.atlas.getTexture(d.gWorldsConfig[this._world.index + 1].egg_image);
                    a.passToNextWorld()
                } else this.levelUp(), this.passToNextWorld();
            else this.levelUp()
        },
        levelUp: function() {
            this.level += 1;
            this.addDiffCoinsPerSec();
            this.checkMaxCreatureLevel();
            this._world.isFake || (this.texture = d.atlas.getTexture(this.getConfigData().image), this.setAnchorBottomCenter(), this.setBlinkImage(), null == h.creaturesStore.halfTimeEggItem &&
                P.delay((Ka = h.creaturesStore, wa(Ka, Ka.checkHalfTimeEggItem)), 5E3), this.set_pointerEnabled(!0))
        },
        getConfigData: function() {
            return d.gCreaturesConfig[Q.min(this.level, d.gCreaturesConfig.length - 1)]
        },
        startDragging: function(a, b) {
            var c = this;
            this._downX = a;
            this._downY = b;
            m._platform.getPointer().up.connect(function() {
                for (var a = 0, b = c._world.elements; a < b.length;) {
                    var d = b[a];
                    ++a;
                    if (C.__instanceof(d, O) && (d = C.__cast(d, O), d != c && d.level == c.level && c.isHit(d))) {
                        c.mergeWith(d);
                        break
                    }
                }
            }).once()
        },
        getState: function() {
            return {
                pos_x: this.getRelativeX(),
                pos_y: this.getRelativeY(),
                level: this.level
            }
        },
        addDataToNextWorld: function() {
            h.currentWorldIndex == this._world.index + 1 ? h.currentWorld.addCreature(this.x._value, this.y._value, this.level) : d.gameState.worlds[this._world.index + 1].creatures.push(this.getState())
        },
        onUpdate: function(a) {
            da.prototype.onUpdate.call(this, a);
            this.setPositionByPointer();
            this._coinsToShowDT += a;
            if (this._coinsToShowDT >= this._coinsToShowDelay) {
                this._coinsToShow += this.coinsPerSec() * this._coinsToShowDT;
                this._coinsToShowDT = 0;
                var b = Math.ceil(Math.pow(10,
                    o.string(Math.floor(this._coinsToShow)).length - 1));
                1 <= b && (h.ctx.playSound("passive_coin" + t.getRandRange(1, 4)), this.playSqueezeAnimation(), this.addCoinsAnimation(0 < d.gameState.doubleCoinsPerSecSecLeft ? 2 * b : b, !1), this._coinsToShow -= b)
            }
            null != this.y._behavior && this.setDepthToBottom();
            if (null != this._world.effectSprite && this._world.effectSprite.hasCreatureMovingEffect && (Math.abs(this.lastX - this.x._value) > 0.02 * k.WIDTH || Math.abs(this.lastY - this.y._value) > 0.02 * k.HEIGHT)) b = L.createInstance(L.resolveClass("kiziland." +
                this._world.effectSpriteClassName), []), this._world.bg.owner.addChild((new j).add(b.creatureMoving(this))), this.lastX = this.x._value, this.lastY = this.y._value;
            this._blinkDT += a;
            this._blinkDT > this._blinkTestDelay && (this._blinkDT = 0, t.chanceTest(20) && this.blink())
        },
        setPositionByPointer: function() {
            if (this.isMouseDownOnMe && m._platform.getPointer().isDown()) {
                var a = m._platform.getPointer().get_x(),
                    b = m._platform.getPointer().get_y(),
                    c = this.x._value + (a - this._downX) / n.scale;
                c < this.getMinX() ? c = this.getMinX() : c >
                    this.getMaxX() && (c = this.getMaxX());
                var d = this.y._value + (b - this._downY) / n.scale;
                d < this.getMinY() ? d = this.getMinY() : d > this.getMaxY() && (d = this.getMaxY());
                this.x.set__(c);
                this.y.set__(d);
                this.setDepthToBottom();
                this._downX = a;
                this._downY = b
            }
        },
        animate: function() {
            if (null == this.x._behavior && null == this.scaleX._behavior && null == this.y._behavior && null == this.scaleY._behavior && 0 != (this._flags & 4)) {
                var a;
                a = t.getRandRange(k.MIN_WANDER_DISTANCE, k.MAX_WANDER_DISTANCE) * (0 != o.random(2) ? -1 : 1);
                var b;
                b = t.getRandRange(k.MIN_WANDER_DISTANCE,
                    k.MAX_WANDER_DISTANCE) * (0 != o.random(2) ? -1 : 1);
                a = t.clampInt(this.x._value + a | 0, this.getMinX(), this.getMaxX());
                b = t.clampInt(this.y._value + b | 0, this.getMinY(), this.getMaxY());
                a > this.x._value && -1 != this.scaleX._value ? this.scaleX.set__(-1) : a < this.x._value && 1 != this.scaleX._value && this.scaleX.set__(1);
                this.x.animateTo(a, k.WANDER_DURATION, r.sineOut);
                this.y.animateTo(b, k.WANDER_DURATION, r.sineOut)
            }
        },
        blink: function() {
            var a = this;
            null != this._blinkImage && null != this.owner && null != this._world && this._world.callFunctions([
                function() {
                    a.owner.addChild((new j).add(a._blinkImage))
                },
                wa(this, this.removeBlink)
            ], [75, 0])
        },
        removeBlink: function() {
            null != this._blinkImage && null != this._blinkImage.owner && this._blinkImage.owner.dispose()
        },
        showNoMoreCreaturesPopup: function() {
            if (!h.isFullGameSimulate) {
                var a = d.atlas.createSprite("Game_end");
                a.setScale(0).centerAnchor();
                h.overlay.owner.parent.addChild((new j).add(a.setXY(k.WIDTH / 2, k.HEIGHT / 2)));
                var b = d.atlas.createSprite("Game_end_ok");
                b.get_pointerDown().connect(function() {
                    b.texture = d.atlas.getTexture("Game_end_ok_pressed");
                    P.delay(function() {
                        b.texture =
                            d.atlas.getTexture("Game_end_ok");
                        h.overlay.get_pointerDown().emit(null)
                    }, 150)
                }).once();
                a.owner.addChild((new j).add(b.setXY(0.49 * a.getNaturalWidth() - b.getNaturalWidth() / 2, 0.7 * a.getNaturalHeight())));
                h.overlayAndImageAsTVAnimation(h.overlay, a)
            }
        },
        __class__: O
    });
    var ka = function(a, b, c, e) {
        var f = this;
        da.call(this, "egg_red", a, b, c);
        this._isHigherLevelCreature = e;
        this._targetY = this.y._value;
        null != this._world && !this._world.isFake && (this.texture = d.atlas.getTexture(this._world.eggAsset), this.setDepthToBottom(),
            null != this._world.eggPlaceAsset && (a = d.atlas.createSprite(this._world.eggPlaceAsset), a.centerAnchor().setXY(this.getNaturalWidth() / 2, this.getNaturalHeight() / 2), this.owner.addChild((new j).add(a))), this.get_pointerDown().connect(function() {
                f.onPointerDownAction()
            }).once())
    };
    i["kiziland.CreatureEgg"] = ka;
    ka.__name__ = ["kiziland", "CreatureEgg"];
    ka.newInRandomX = function(a) {
        a = new ka(a, -150, -150, 0 < d.gameState.higherCreaturesInEggsSecLeft);
        a.x.set__(a.getRandomX());
        return a
    };
    ka.__super__ = da;
    ka.prototype = x(da.prototype, {
        onPointerDownAction: function() {
            h.ctx.playSound("hatch_egg");
            var a = new oa("egg_fx", 1, 12);
            a.centerAnchor().setXY(this.x._value - this.anchorX._value + this.getNaturalWidth() / 2, this.y._value - this.anchorY._value + this.getNaturalHeight() / 2);
            a.disablePointer();
            a.onPlaysFinish.connect(function() {
                a.owner.dispose()
            }).once();
            this._world.owner.addChild((new j).add(a));
            this.dispose();
            this._world.addCreature(this.x._value, this.y._value, this._isHigherLevelCreature ? t.clampInt(this._world.maxCreatureLevel - o.random(5),
                this._world.minCreatureLevel, d.gameState.maxCreatureLevelReached) : this._world.minCreatureLevel).addDiffCoinsPerSec();
            d.gameState.eggsOpenedSinceLatsSuperEgg = null == d.gameState.eggsOpenedSinceLatsSuperEgg ? 1 : d.gameState.eggsOpenedSinceLatsSuperEgg + 1;
            null != h.currentWorld && h.currentWorld.setSuperEggProgressBarFill();
            k.IS_NEW_BALANCE ? 0 == d.gameState.eggsOpenedSinceLatsSuperEgg % t.clampInt(Math.floor(Math.pow(1.25, h.creaturesStore.maxCreatureLevelInStore)), t.getRandRange(2, 5), 25) && this.addStarsAnimation(1) :
                t.chanceTest(k.CHANCE_FOR_STAR_IN_EGG) && this.addStarsAnimation(1)
        },
        setRandomPos: function() {
            this._targetY = this.getRandomY();
            this.setXY(this.getRandomX(), this._targetY);
            this.setDepthToBottom()
        },
        animateToRandomY: function() {
            this._targetY = this.getRandomY();
            this.depth = this._targetY - this.anchorY._value + this.getNaturalHeight();
            this.y.animateTo(this._targetY, 0.5, r.elasticInOut)
        },
        getState: function() {
            return {
                pos_x: this.getRelativeX(),
                pos_y: this.getRelativeY(),
                is_higher_level_creature: this._isHigherLevelCreature
            }
        },
        animate: function() {
            if (null == this.scaleY._behavior && null == this.y._behavior) {
                var a = new ba,
                    b = new ca([new X([new u(this.scaleY, 0.8, 0.2), new u(this.scaleX, 1.2, 0.2)]), new X([new u(this.scaleY, 1, 0.2), new u(this.scaleX, 1, 0.2)]), new eb(this.y, -15, 0.2, r.sineOut), new eb(this.y, 15, 0.3, r.sineOut), new W(function() {
                        a.owner.dispose()
                    })]);
                a.run(b);
                this.owner.addChild((new j).add(a))
            }
        },
        getRelativeY: function() {
            return t.clampFloat(this._targetY / k.HEIGHT, this.getMinY() / k.HEIGHT, this.getMaxY() / k.HEIGHT)
        },
        setRelativeXY: function(a,
            b) {
            da.prototype.setRelativeXY.call(this, a, b);
            this._targetY = this.y._value
        },
        addDataToNextWorld: function() {
            d.gameState.worlds[this._world.index + 1].eggs.push(this.getState())
        },
        __class__: ka
    });
    var kc = function() {
        var a = this;
        D.call(this, d.atlas.getTexture("shop_bg"));
        this.set_visible(!1);
        this.width = this.getNaturalWidth();
        this.height = this.getNaturalHeight();
        this.x.set__((k.WIDTH - this.width) / 2);
        (new j).add(this);
        this.items = [];
        this.onHasNewItem = new Na;
        this.onNewItemBought = new Na;
        this.closeBtn = d.atlas.createSprite("close_button");
        this.closeBtn.get_pointerDown().connect((Ka = h.overlay.get_pointerDown(), wa(Ka, Ka.emit)));
        this.owner.addChild((new j).add(this.closeBtn.setXY(0.83 * this.width, 0.025 * this.height)));
        this.displaySprite = new y;
        this.owner.addChild((new j).add(this.displaySprite));
        this.displaySprite.scissor = new Ha(0.01 * this.width, 0.115 * this.height, 0.98 * this.width - 0.01 * this.width, 0.975 * this.height - 0.115 * this.height);
        this.scrollerSprite = new y;
        this.displaySprite.owner.addChild((new j).add(this.scrollerSprite));
        this.scrollImage =
            d.atlas.createSprite("Store_scroll");
        this.scrollImageMinY = 0.12 * this.height;
        this.scrollImageMaxY = 0.89 * this.height;
        this.owner.addChild((new j).add(this.scrollImage.setXY(0.937 * this.width, this.scrollImageMinY)));
        this.overlay = new $(0, this.width, this.height);
        this.overlay.setAlpha(0);
        this.overlay.disablePointer();
        this.owner.addChild((new j).add(this.overlay));
        this.maxCreatureLevelInStore = 0;
        this.checkMaxCreatureLevelInStore();
        this.shouldHasHalfTimeEggItem() && this.addHalfTimeEggItem();
        this.reloadItems();
        var b = -1;
        this.get_pointerDown().connect(function(a) {
            b = a.viewY
        });
        this.get_pointerUp().connect(function() {
            b = -1
        });
        this.get_pointerOut().connect(function() {
            b = -1
        });
        this.get_pointerMove().connect(function(c) {
            -1 == b || 5 > Math.abs(b - c.viewY) || (a.scrollTo(a.scrollerSprite.anchorY._value + (b - c.viewY) / n.scale), b = c.viewY)
        })
    };
    i["kiziland.CreaturesStore"] = kc;
    kc.__name__ = ["kiziland", "CreaturesStore"];
    kc.__super__ = D;
    kc.prototype = x(D.prototype, {
        checkMaxCreatureLevelInStore: function() {
            4 < d.gameState.maxCreatureLevelReached &&
                (this.maxCreatureLevelInStore = Math.round(d.gameState.maxCreatureLevelReached - 4));
            this.reloadItems()
        },
        checkHalfTimeEggItem: function() {
            this.shouldHasHalfTimeEggItem() && null == this.halfTimeEggItem && (this.addHalfTimeEggItem(), this.halfTimeEggItem.showPopup())
        },
        setAdItem: function(a, b) {
            null == b && (b = !1);
            null == a && (a = !1);
            var c = this;
            if (a) try {
                var e = t.getCurrentDateString();
                d.gameState.rewardedAdItemsDate != e && (d.gameState.rewardedAdItemsDate = e, d.gameState.rewardedAdItemsGivenToday = 0, d.gameState.lastRewardedAdItemGivenAt =
                    0);
                this.isAdAvailable = !1;
                f.HTML5API_isIncentivizedVideoAvailable() ? 3 > d.gameState.maxCreatureLevelReached ? f.reportEvent("incentivized_video_ad_not_available", {
                    reason: "maxCreatureLevelReached is less than 3"
                }) : d.gameState.rewardedAdItemsGivenToday >= k.MAX_REWARDED_VIDEOS_PER_DAY ? f.reportEvent("incentivized_video_ad_not_available", {
                    reason: "max rewarded videos per day reached"
                }) : m._platform.getTime() - d.gameState.lastRewardedAdItemGivenAt < k.MIN_SEC_BETWEEN_REWARDED_VIDEOS ? f.reportEvent("incentivized_video_ad_not_available", {
                    reason: "less than minimum time between rewarded videos"
                }) : this.isAdAvailable = !0 : f.reportEvent("incentivized_video_ad_not_available", {
                    reason: "HTML5API_isIncentivizedVideoAvailable returned false"
                })
            } catch (g) {
                this.isAdAvailable = !1
            }
            this.isAdAvailable && (null == this.adItem || b) ? (null == this.adItem && (this.adItem = this.items[8 > this.maxCreatureLevelInStore ? this.items.length - 1 : t.getRandRange(this.items.length - 4, this.items.length - 1)]), f.reportEvent("incentivized_video_ad_set", {
                    creature_level: this.adItem.level
                }),
                this.adItem.viewAdClickable.set_visible(!0), this.adItem.viewAdClickable.pointerClick.connect(function() {
                    var a = c.adItem;
                    f.reportEvent("incentivized_video_ad_clicked", {
                        creature_level: a.level
                    });
                    try {
                        f.HTML5API_showIncentivizedVideo(function(b) {
                            var e;
                            e = 0 != (c._flags & 2) ? c.overlay : h.overlay;
                            var g, l;
                            b ? (d.gameState.isRewardedAdItemWasEverGiven = !0, d.gameState.rewardedAdItemsGivenToday += 1, d.gameState.lastRewardedAdItemGivenAt = m._platform.getTime(), c.isAdAvailable = !1, c.setAdItem(), g = d.atlas.createSprite("claim_kizi_bg"),
                                g.setScale(0).centerAnchor(), l = d.atlas.createSprite("claim_kizi"), l.get_pointerDown().connect(function() {
                                    l.texture = d.atlas.getTexture("claim_kizi_pressed");
                                    P.delay(function() {
                                        l.texture = d.atlas.getTexture("claim_kizi");
                                        a.addToGame();
                                        e.get_pointerDown().emit(null)
                                    }, 150)
                                }).once()) : (c.setAdItem(!0, !0), g = d.atlas.createSprite("exit_ad_bg"), g.setScale(0).centerAnchor(), l = d.atlas.createSprite("exit_ad"), l.get_pointerDown().connect(function() {
                                l.texture = d.atlas.getTexture("exit_ad_pressed");
                                P.delay(function() {
                                    l.texture =
                                        d.atlas.getTexture("exit_ad");
                                    e.get_pointerDown().emit(null)
                                }, 150)
                            }).once());
                            h.overlay.owner.parent.addChild((new j).add(g.setXY(k.WIDTH / 2, k.HEIGHT / 2)));
                            g.owner.addChild((new j).add(l.setXY(g.getNaturalWidth() / 2 - l.getNaturalWidth() / 2, 0.81 * g.getNaturalHeight())));
                            h.overlayAndImageAsTVAnimation(e, g, !0);
                            f.reportEvent("incentivized_video_ad_watched", {
                                creature_level: a.level,
                                is_fully_watched: b
                            })
                        })
                    } catch (b) {
                        c.isAdAvailable = !1, c.setAdItem(), f.reportEvent("incentivized_video_ad_crashed_on_clicked", {
                            creature_level: a.level
                        })
                    }
                }).once(),
                null == d.gameState.isRewardedAdItemWasEverGiven ? (e = d.atlas.createSprite("ad_tooltip"), e.setXY(this.adItem.viewAdClickable.getNaturalWidth() / 2 - e.getNaturalWidth() / 2, 0.4 * this.adItem.viewAdClickable.getNaturalHeight() - e.getNaturalHeight()), this.adItem.viewAdClickable.owner.addChild((new j).add(e))) : this.adItem.viewAdClickable.owner.disposeChildren()) : !this.isAdAvailable && null != this.adItem && (this.adItem.viewAdClickable.set_visible(!1), this.adItem = null)
        },
        toggle: function() {
            var a = this;
            this.set_visible(0 ==
                (this._flags & 2));
            0 != (this._flags & 2) ? (h.overlay.set_pointerEnabled(!0), h.overlay.get_pointerDown().connect(function() {
                a.toggle()
            }).once(), h.overlay.alpha.animateTo(0.5, 0.3), this.y.animate(-this.height - 10, k.TOPBAR_HEIGHT + 10, 0.3, r.backInOut), this.reloadItems(), this.setAdItem(!0)) : (h.overlay.disablePointer(), h.overlay.setAlpha(0), this.overlay.get_pointerDown().emit(null))
        },
        checkHasNewItem: function() {
            var a = this.hasNewItem;
            this.hasNewItem = 0 < this.items.filter(function(a) {
                    return a.isNewItem
                }).length || null !=
                this.halfTimeEggItem && !this.halfTimeEggItem.isBought();
            a != this.hasNewItem && (this.hasNewItem ? this.onHasNewItem.emit() : this.onNewItemBought.emit())
        },
        reloadItems: function() {
            null != this.halfTimeEggItem && this.halfTimeEggItem.reload();
            for (var a = 0, b = this.items; a < b.length;) {
                var c = b[a];
                ++a;
                c.reload()
            }
            a = this.items.length;
            for (b = this.maxCreatureLevelInStore + 1; a < b;) this.addItem(a++);
            this.checkHasNewItem()
        },
        addItem: function(a) {
            var b = new gb(this, a);
            this.items.push(b);
            a = b.getNaturalHeight() * (a + 1) + b.getNaturalHeight() /
                4 * a;
            null != this.halfTimeEggItem && (a += 1.5 * b.getNaturalHeight());
            b.setXY(0.025 * this.width, a);
            this.scrollerSprite.owner.addChild(b.owner);
            this.scrollTo(this.scrollerMaxY())
        },
        addHalfTimeEggItem: function() {
            if (null == this.halfTimeEggItem) {
                for (var a = 0, b = this.items; a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.setXY(c.x._value, c.y._value + 1.5 * c.getNaturalHeight())
                }
                this.halfTimeEggItem = new lc(this);
                this.halfTimeEggItem.setXY(0.025 * this.width, this.halfTimeEggItem.getNaturalHeight());
                this.scrollerSprite.owner.addChild(this.halfTimeEggItem.owner);
                this.scrollerSprite.owner.addChild((new j).add(d.atlas.createSprite("Store_separator").setXY(1.3 * this.halfTimeEggItem.x._value, this.halfTimeEggItem.y._value + 1.25 * this.halfTimeEggItem.getNaturalHeight())));
                this.scrollTo(0)
            }
        },
        showWorldIsFull: function() {
            var a = d.atlas.createSprite("Too_many");
            a.disablePointer().setScale(0).centerAnchor();
            this.overlay.owner.parent.addChild((new j).add(a.setXY(this.width / 2, this.height / 2)));
            a.owner.addChild((new j).add(d.atlas.createSprite("close_button").setXY(0.82 * a.getNaturalWidth(),
                0.04 * a.getNaturalHeight())));
            h.overlayAndImageAsTVAnimation(this.overlay, a)
        },
        shouldHasHalfTimeEggItem: function() {
            return 8 < d.gameState.maxCreatureLevelReached
        },
        onRemoved: function() {
            this.owner.dispose()
        },
        setScrollImagePos: function() {
            this.scrollerMaxY() < this.displaySprite.scissor.height ? this.scrollImage.set_visible(!1) : this.scrollImage.set_visible(!0);
            this.scrollImage.y.set__(this.scrollerSprite.anchorY._value / this.scrollerMaxY() * (this.scrollImageMaxY - this.scrollImageMinY) + this.scrollImageMinY)
        },
        scrollTo: function(a) {
            a >
                this.scrollerMaxY() ? a = this.scrollerMaxY() : 0 > a && (a = 0);
            this.scrollerSprite.anchorY.set__(a);
            this.setScrollImagePos()
        },
        scrollerMaxY: function() {
            var a = d.atlas.getTexture("store_item").get_height(),
                b = a * (this.maxCreatureLevelInStore + 1) + a / 4 * this.maxCreatureLevelInStore - (4 * a + 3 * (a / 4));
            null != this.halfTimeEggItem && (b += 1.5 * a);
            return 0 < b ? b : 0
        },
        showTutorial: function() {
            var a = this;
            this._isShowingTutorial = !0;
            var b = new oa("tutorial_click", -1, 4);
            b.disablePointer();
            h.topBar.owner.addChild((new j).add(b.setXY(h.topBar.creaturesStoreBtn.x._value +
                h.topBar.creaturesStoreBtn.getNaturalWidth() / 2 - b.getNaturalWidth() / 4, h.topBar.creaturesStoreBtn.y._value + h.topBar.creaturesStoreBtn.getNaturalHeight() / 2 - b.getNaturalHeight() / 3)));
            h.topBar.creaturesStoreBtn.get_pointerDown().connect(function() {
                b.owner.dispose();
                a.items[0].buyWithCoinsClickable.owner.addChild((new j).add(b.setXY(0.2 * a.items[0].buyWithCoinsClickable.getNaturalWidth() - b.getNaturalWidth() / 4, a.items[0].buyWithCoinsClickable.getNaturalHeight() / 2 - b.getNaturalHeight() / 2)));
                var c = function() {
                    null !=
                        b.owner && (b.owner.dispose(), a.closeBtn.owner.addChild((new j).add(b.setXY(a.closeBtn.getNaturalWidth() / 2 - b.getNaturalWidth() / 4, a.closeBtn.getNaturalHeight() / 2 - b.getNaturalHeight() / 2))), h.overlay.get_pointerDown().connect(function() {
                            b.owner.dispose();
                            d.gameState.isFirstBuyTutorialDone = !0
                        }).once())
                };
                a.items[0].buyWithCoinsClickable.pointerClick.connect(function() {
                    c()
                }).once();
                a.items[0].buyWithStarsClickable.pointerClick.connect(function() {
                    c()
                }).once()
            }).once()
        },
        onUpdate: function(a) {
            D.prototype.onUpdate.call(this,
                a);
            !this._isShowingTutorial && !d.gameState.isFirstBuyTutorialDone && null != h.topBar && h.topBar.coinsDisplay > this.items[0].getPriceCoins() && this.showTutorial()
        },
        __class__: kc
    });
    var gb = function(a, b) {
        this.newCreatureWorldIndex = 0;
        var c = this;
        this._store = a;
        this.level = b;
        D.call(this, d.atlas.getTexture("store_item"));
        this._width = this.getNaturalWidth();
        this._height = this.getNaturalHeight();
        (new j).add(this);
        for (var e = 0, f = d.gWorldsConfig; e < f.length;) {
            var h = f[e];
            ++e;
            if (null == h.max_creature_level || -1 == h.max_creature_level ||
                h.max_creature_level >= this.level) break;
            this.newCreatureWorldIndex += 1
        }
        e = this.getImage();
        this.owner.addChild((new j).add(e.setXY(0.02 * this._width, 0.48 * this._height - e.getNaturalHeight() / 2)));
        this._nameText = new G(d.fontRobotoBlack, d.gCreaturesConfig[this.level].name);
        this.owner.addChild((new j).add(this._nameText.setXY(0.198 * this._width, 0.126 * this._height).setScale(1 / n.scale)));
        this._perSecText = new G(d.fontRobotoMedium, t.formatNumber(O.coinsPerSecFromMem(this.level)) + " /sec");
        this.owner.addChild((new j).add(this._perSecText.setXY(this._nameText.x._value,
            0.4 * this._height).setScale(1 / n.scale)));
        this._boughtText = new G(d.fontRobotoBlackItalicSmall, "");
        this.owner.addChild((new j).add(this._boughtText.setXY(this._nameText.x._value, 0.7 * this._height).setScale(1 / n.scale)));
        this.buyWithStarsClickable = new U(d.atlas.getTexture("shop_button_stars"));
        this.buyWithStarsClickable.setXY(0.97 * this._width - this.buyWithStarsClickable.getNaturalWidth(), 0.3 * this._height - this.buyWithStarsClickable.getNaturalHeight() / 2);
        this.owner.addChild((new j).add(this.buyWithStarsClickable));
        this._priceStarsText = (new G(d.fontRobotoBlackItalic, "")).setAlign(N.Right);
        this.buyWithStarsClickable.owner.addChild((new j).add(this._priceStarsText.setXY(this.buyWithStarsClickable.getNaturalWidth() - 0.04 * this._width, 0.47 * this.buyWithStarsClickable.getNaturalHeight() - d.fontRobotoBlackItalic.lineHeight / 2).setScale(1 / n.scale)));
        this.buyWithCoinsClickable = new U(d.atlas.getTexture("shop_button_coins"));
        this.buyWithCoinsClickable.setXY(this.buyWithStarsClickable.x._value - 0.01 * this._width - this.buyWithCoinsClickable.getNaturalWidth(),
            this.buyWithStarsClickable.y._value);
        this.owner.addChild((new j).add(this.buyWithCoinsClickable));
        this.viewAdClickable = new U(d.atlas.getTexture("store_ad"));
        this.viewAdClickable.setXY(this.buyWithStarsClickable.x._value - 0.01 * this._width - this.viewAdClickable.getNaturalWidth() / 2, 0.71 * this._height - this.viewAdClickable.getNaturalHeight() / 2);
        this.owner.addChild((new j).add(this.viewAdClickable));
        this.viewAdClickable.set_visible(!1);
        this._priceText = (new G(d.fontRobotoBlackItalic, "")).setAlign(N.Right);
        this.buyWithCoinsClickable.owner.addChild((new j).add(this._priceText.setXY(this.buyWithCoinsClickable.getNaturalWidth() - 0.04 * this._width, this._priceStarsText.y._value).setScale(1 / n.scale)));
        this._newBadge = d.atlas.createSprite("Shop_badge");
        this.owner.addChild((new j).add(this._newBadge.setXY(e.x._value, e.y._value)));
        e = [this.buyWithCoinsClickable, this.buyWithStarsClickable];
        for (f = 0; f < e.length;) h = [e[f]], ++f, h[0].pointerClick.connect(function(a) {
            return function() {
                var b = a[0] == c.buyWithStarsClickable;
                c.buy(b) && (c.isNewItem && (c.isNewItem = !1, c._store.checkHasNewItem()), c._store.reloadItems());
                var e;
                e = b ? "shop_button_stars" : "shop_button_coins";
                a[0].texture = d.atlas.getTexture(e + "_pressed");
                P.delay(function(a) {
                    return function() {
                        a[0].texture = d.atlas.getTexture(e)
                    }
                }(a), 150)
            }
        }(h));
        this.viewAdClickable.pointerClick.connect(function() {
            c.viewAdClickable.texture = d.atlas.getTexture("store_ad_pressed");
            P.delay(function() {
                c.viewAdClickable.texture = d.atlas.getTexture("store_ad")
            }, 150)
        });
        this.reload()
    };
    i["kiziland.CreaturesStoreItem"] =
        gb;
    gb.__name__ = ["kiziland", "CreaturesStoreItem"];
    gb.__super__ = D;
    gb.prototype = x(D.prototype, {
        getImage: function() {
            return d.atlas.createSprite(d.gCreaturesConfig[this.level].store_image)
        },
        reload: function() {
            this.isNewItem = this.level == this._store.maxCreatureLevelInStore && 0 == this.getBoughtCoins() && 0 == this.getBoughtStars();
            this._newBadge.set_visible(this.isNewItem);
            null == h.topBar || h.topBar.coinsDisplay < this.getPriceCoins() ? (this.buyWithCoinsClickable.setAlpha(0.5), this.buyWithCoinsClickable.disablePointer()) :
                (this.buyWithCoinsClickable.setAlpha(1), this.buyWithCoinsClickable.set_pointerEnabled(!0));
            null == h.topBar || h.topBar.starsDisplay < this.getPriceStars() ? (this.buyWithStarsClickable.setAlpha(0.5), this.buyWithStarsClickable.disablePointer()) : (this.buyWithStarsClickable.setAlpha(1), this.buyWithStarsClickable.set_pointerEnabled(!0));
            this.setTexts()
        },
        getPriceCoins: function() {
            var a = k.FIRST_CREATURE_PRICE * Math.pow(k.CREATURE_PRICE_LEVEL_EXPONENT_BASE, this.level),
                b = this.getBoughtCoins();
            0 < b && (a *= Math.pow(k.CREATURE_PRICE_BOUGHT_EXPONENT_BASE,
                b));
            return 10 * Math.round(a / 10)
        },
        getPriceStars: function() {
            return Math.floor(this.level / 2 + 1)
        },
        getBoughtCoins: function() {
            return null != d.gameState.creaturesBoughtCoins[this.level] ? d.gameState.creaturesBoughtCoins[this.level] : 0
        },
        getBoughtStars: function() {
            return null != d.gameState.creaturesBoughtStars[this.level] ? d.gameState.creaturesBoughtStars[this.level] : 0
        },
        setTexts: function() {
            this._priceText.set_text(t.formatNumber(this.getPriceCoins(), 1));
            this._priceStarsText.set_text(t.formatNumber(this.getPriceStars()));
            this._boughtText.set_text(this.getBoughtCoins() + this.getBoughtStars() + " purchased")
        },
        buy: function(a) {
            null == a && (a = !1);
            var b = this.getPriceCoins(),
                c = this.getPriceStars(),
                e;
            e = h.isFullGameSimulate ? d.gameState.coins : h.topBar.coinsDisplay;
            var g;
            g = h.isFullGameSimulate ? d.gameState.stars : h.topBar.starsDisplay;
            if (a && g >= c || !a && e >= b) {
                if (d.gameState.worlds[this.newCreatureWorldIndex].eggs.length + d.gameState.worlds[this.newCreatureWorldIndex].creatures.length + d.gameState.worlds[this.newCreatureWorldIndex].superEggs.length >=
                    k.MAX_WORLD_ELEMENTS && "OneCreatureWorld" != d.gWorldsConfig[this.newCreatureWorldIndex].type) return this._store.showWorldIsFull(), !1;
                this.addToGame();
                a ? (h.ctx.playSound("star_purchase"), d.gameState.creaturesBoughtStars[this.level] = null == d.gameState.creaturesBoughtStars[this.level] ? 1 : d.gameState.creaturesBoughtStars[this.level] + 1, d.gameState.stars -= c, null != h.topBar && (h.topBar.starsDisplay -= c)) : (h.ctx.playSound("coin_purchase"), d.gameState.creaturesBoughtCoins[this.level] = null == d.gameState.creaturesBoughtCoins[this.level] ?
                    1 : d.gameState.creaturesBoughtCoins[this.level] + 1, d.gameState.coins -= b, null != h.topBar && (h.topBar.coinsDisplay -= b));
                null != h.topBar && h.topBar.updateText();
                f.reportEvent("creature_bought", {
                    creature_level: this.level,
                    currency: a ? "stars" : "coins",
                    price: a ? c : b
                });
                return !0
            }
            return !1
        },
        addToGame: function() {
            var a;
            null != h.currentWorld && h.currentWorld.index == this.newCreatureWorldIndex ? (a = h.currentWorld.addCreature(0, 0, this.level), a.setXY(a.getRandomX(), a.getRandomY()), a.setDepthToBottom(), h.currentWorld.saveState()) :
                (a = new O(null, 0, 0, this.level), a.setXY(a.getRandomX(), a.getRandomY()), d.gameState.worlds[this.newCreatureWorldIndex].creatures.push(a.getState()));
            a.addTotalCoinsPerSec()
        },
        onRemoved: function() {
            this.owner.dispose()
        },
        __class__: gb
    });
    var d = function(a) {
        if (null == a._compMap.Director_6) {
            var b, c;
            b = k.WIDTH;
            c = k.HEIGHT;
            a.add((new fc).setSize(b, c))
        }
        this._viewport = a;
        d.gameState = f.storageGet("gameState", {
            worlds: [],
            coinsPerSec: 0,
            coins: 0,
            stars: 10,
            maxCreatureLevelReached: 0,
            creaturesBoughtCoins: [],
            creaturesBoughtStars: [],
            isMusicOn: !0,
            isSfxOn: !0,
            isFirstEggTutorialDone: !1,
            isFirstPresentTutorialDone: !1,
            isFirstMergeTutorialDone: !1,
            isFirstBuyTutorialDone: !1
        });
        m._platform.getPointer().up.connect(function() {
            h.delataTimeFromLastTouch = 0
        })
    };
    i["kiziland.GameContext"] = d;
    d.__name__ = ["kiziland", "GameContext"];
    d.save = function() {
        f.storageSet("gameState", d.gameState)
    };
    d.showMidrollIfPossible = function() {
        f.HTML5API_showMidroll() && (f.HTML5API_levelEnded(), f.reportEvent("show_midroll_called"))
    };
    d.prototype = {
        unwindToScene: function(a, b) {
            this._viewport._compMap.Director_6.unwindToScene(a,
                b)
        },
        getSound: function(a) {
            return d.isSoundsPackLoaded ? d.soundsPack.getSound(a) : null
        },
        playSound: function(a, b) {
            null == b && (b = !0);
            if (b && d.gameState.isSfxOn || !b && d.gameState.isMusicOn) {
                var c = this.getSound(a);
                null != c && c.play(1)
            }
        },
        getLongSound: function(a) {
            return d.isLongSoundsPackLoaded ? d.longSoundsPack.getSound(a, !1) : null
        },
        __class__: d
    };
    var h = function() {
        R.call(this);
        null == d.gameState.eggGotDT && (d.gameState.eggGotDT = [0]);
        d.gameState.presentGotDT = 0;
        if (null == d.gameState.maxOfflineCountsSeconds || d.gameState.maxOfflineCountsSeconds <
            d.gConfig.max_offline_counts_seconds) d.gameState.maxOfflineCountsSeconds = d.gConfig.max_offline_counts_seconds;
        null == d.gameState.superCreatureCookingDT && (d.gameState.superCreatureCookingDT = []);
        if (d.gameState.superCreatureCookingDT.length < d.gSuperCreaturesConfig.length)
            for (var a = d.gameState.superCreatureCookingDT.length, b = d.gSuperCreaturesConfig.length; a < b;) a++, d.gameState.superCreatureCookingDT.push(0);
        null == d.gameState.lastCoinsAddedDT && (d.gameState.lastCoinsAddedDT = 0);
        d.gameState.quaterPresentTimeSecLeft =
            0;
        null == d.gameState.doubleCoinsPerSecSecLeft && (d.gameState.doubleCoinsPerSecSecLeft = 0);
        null == d.gameState.autoMergeCreaturesSecLeft && (d.gameState.autoMergeCreaturesSecLeft = 0);
        null == d.gameState.lastAutoMergeCreatureDT && (d.gameState.lastAutoMergeCreatureDT = 0);
        null == d.gameState.quaterEggTimeSecLeft && (d.gameState.quaterEggTimeSecLeft = 0);
        null == d.gameState.higherCreaturesInEggsSecLeft && (d.gameState.higherCreaturesInEggsSecLeft = 0);
        this.setLocalNotificationsDealy = 500;
        this.setLocalNotificationsDT = this.setLocalNotificationsDealy + 1
    };
    i["kiziland.GameScene"] = h;
    h.__name__ = ["kiziland", "GameScene"];
    h.create = function(a) {
        h.ctx = a;
        h.instance = new h;
        h.recalculateCoinsPerSec();
        h.setSuperCreatures();
        h.getOfflineElements();
        h.overlay = (new $(0, k.WIDTH, k.HEIGHT)).setAlpha(0);
        h.overlay.disablePointer();
        h.creaturesStore = new kc;
        h.wiki = new Fb;
        null == d.gameState.gotFirstEgg && (d.gameState.gotFirstEgg = !0, P.delay(function() {
            h.generateNewEgg(0)
        }, 1E3), d.gameState.eggGotDT = [h.getEggTimeSec(0) / 2]);
        h.currentWorldIndex = 0;
        h._checkSocialAfterOfflineCoinsPopup || P.delay(function() {
            H.receive()
        }, 500);
        return h.buildScene(h.currentWorldIndex)
    };
    h.buildScene = function(a) {
        var b = new j;
        b.add(h.instance);
        b.addChild(h.createWorld(a).owner);
        h.topBar = new mc;
        b.addChild(h.topBar.owner);
        b.addChild((new j).add(h.overlay));
        b.addChild(h.creaturesStore.owner);
        b.addChild(h.wiki.owner);
        return b
    };
    h.setSuperCreatures = function() {
        h.superCreatures = [];
        if (null != p.fields(d.gameState.superCreatures))
            for (var a = 0, b = p.fields(d.gameState.superCreatures); a < b.length;) {
                var c = b[a];
                ++a;
                c = p.field(d.gameState.superCreatures, c);
                null == c.active_times ? h.superCreatures.push(new Aa(c.index,
                    c.amount, 0)) : h.superCreatures.push(new Aa(c.index, c.amount, c.active_times))
            }
    };
    h.getEggTimeSec = function(a) {
        var b = k.EGG_TIME_SEC;
        null != d.gameState.worlds[a] && d.gameState.worlds[a].halfEggTime && (b /= 2);
        0 < d.gameState.quaterEggTimeSecLeft && (b /= 4);
        return b
    };
    h.generateNewEgg = function(a, b) {
        null == b && (b = !0);
        if (null != h.currentWorld && h.currentWorld.index == a) return null != h.currentWorld.addEggRandomly(b);
        if (!h.isWorldFull(a)) {
            var c = new ka(null, 0, 0, 0 < d.gameState.higherCreaturesInEggsSecLeft);
            c.setRandomPos();
            d.gameState.worlds[a].eggs.push(c.getState());
            return !0
        }
        return !1
    };
    h.createWorld = function(a) {
        null != h.currentWorld && h.currentWorld.saveState();
        h.currentWorldIndex = a;
        h.currentWorld = L.createInstance(L.resolveClass("kiziland." + d.gWorldsConfig[h.currentWorldIndex].type), [h.currentWorldIndex]);
        return h.currentWorld
    };
    h.changeWorld = function(a, b) {
        null == b && (b = 0.4);
        f.reportEvent("change_world", {
            source_world_index: h.currentWorldIndex,
            target_world_index: a
        });
        d.showAdOnWorldChangeToFirst && 0 == a ? d.showMidrollIfPossible() : (h.shouldShowAdForThisWorldChanged = d.showAdOnWorldChangeAndNoAction3Sec,
            P.delay(function() {
                m._platform.getPointer().up.connect(function() {
                    h.shouldShowAdForThisWorldChanged = !1
                }).once()
            }, 50));
        var c;
        c = h.currentWorldIndex > a ? (new Bb(b, r.backInOut)).up() : (new Bb(b, r.backInOut)).down();
        h.ctx.playSound(h.currentWorldIndex > a ? "switch_regions_down" : "switch_regions_up");
        h.worldChangedDT = 0;
        h.ctx.unwindToScene(h.buildScene(a), c)
    };
    h.recalculateCoinsPerSec = function() {
        for (var a = d.gameState.coinsPerSec = 0, b = p.fields(d.gameState.worlds); a < b.length;) {
            var c = b[a];
            ++a;
            c = p.field(d.gameState.worlds,
                c);
            if (null != c.creatures)
                for (var e = 0, f = p.fields(c.creatures); e < f.length;) {
                    var h = f[e];
                    ++e;
                    h = p.field(c.creatures, h);
                    d.gameState.coinsPerSec += O.coinsPerSecFromMem(h.level)
                }
        }
    };
    h.getOfflineElements = function() {
        if (null != d.gameState.lastCoinsAddedAt) {
            var a = Math.round(m._platform.getTime() - d.gameState.lastCoinsAddedAt);
            if (!(0 >= a)) {
                d.gameState.lastCoinsAddedAt = m._platform.getTime();
                for (var a = Math.round(Math.min(a, d.gameState.maxOfflineCountsSeconds)), b = d.gameState.coins, c = 0, e = 0, f = h.superCreatures; e < f.length;) {
                    var g =
                        f[e];
                    ++e;
                    g = Math.ceil(g.leftActiveSeconds());
                    g > c && (c = g)
                }
                a < c && (c = a);
                h.isSimulate = !0;
                for (e = 0; e < c;) e++, h.instance.step(1);
                h.isSimulate = !1;
                c = a - c;
                d.gameState.coins += d.gameState.coinsPerSec * c;
                if (d.gameState.eggGotDT.length < d.gameState.worlds.length) {
                    e = d.gameState.eggGotDT.length;
                    for (f = d.gameState.worlds.length; e < f;) e++, d.gameState.eggGotDT.push(0)
                }
                e = 0;
                for (f = d.gameState.worlds.length; e < f;)
                    if (g = e++, d.gWorldsConfig[g].is_receiving_eggs) {
                        d.gameState.eggGotDT[g] += c;
                        for (var i = 0, o = Math.floor(d.gameState.eggGotDT[g] /
                            h.getEggTimeSec(g)); i < o;)
                            if (i++, h.generateNewEgg(g, !1)) d.gameState.eggGotDT[g] -= h.getEggTimeSec(g);
                            else break
                    }
                e = 0;
                for (f = h.superCreatures; e < f.length;) g = f[e], ++e, d.gameState.superCreatureCookingDT[g.index] += c;
                var p = Math.round(d.gameState.coins - b);
                null != h.topBar && (h.topBar.coinsDisplay += p, h.topBar.updateText());
                60 < a && 0 < p && (h._checkSocialAfterOfflineCoinsPopup = !0, P.delay(function() {
                    var a = d.atlas.createSprite("Money");
                    a.disablePointer().setScale(0).centerAnchor();
                    h.overlay.owner.parent.addChild((new j).add(a.setXY(k.WIDTH /
                        2, k.HEIGHT / 2)));
                    a.owner.addChild((new j).add(d.atlas.createSprite("close_button").setXY(0.82 * a.getNaturalWidth(), 0.04 * a.getNaturalHeight())));
                    a.owner.addChild((new j).add(d.atlas.createSprite("coin").setXY(0.1 * a.getNaturalWidth(), 0.46 * a.getNaturalHeight()).setScale(1 / n.scale)));
                    a.owner.addChild((new j).add((new G(d.fontRobotoBlackItalicBig, t.formatNumber(p))).setAlign(N.Center).setXY(0.52 * a.getNaturalWidth(), 0.45 * a.getNaturalHeight()).setScale(1 / n.scale)));
                    h.overlayAndImageAsTVAnimation(h.overlay,
                        a);
                    h.overlay.get_pointerDown().connect(function() {
                        P.delay(function() {
                            H.receive()
                        }, 500)
                    }).once()
                }, 500))
            }
        }
    };
    h.isWorldFull = function(a) {
        return null == d.gameState.worlds[a] ? !1 : d.gameState.worlds[a].superEggs.length + d.gameState.worlds[a].eggs.length + d.gameState.worlds[a].creatures.length + d.gameState.worlds[a].presents >= k.MAX_WORLD_ELEMENTS
    };
    h.showNextWorldIsFull = function() {
        var a = d.atlas.createSprite("Too_many");
        a.disablePointer().setScale(0).centerAnchor();
        h.overlay.owner.parent.addChild((new j).add(a.setXY(k.WIDTH /
            2, k.HEIGHT / 2)));
        a.owner.addChild((new j).add(d.atlas.createSprite("close_button").setXY(0.82 * a.getNaturalWidth(), 0.04 * a.getNaturalHeight())));
        h.overlayAndImageAsTVAnimation(h.overlay, a)
    };
    h.setCloseAnimation = function(a, b, c) {
        null == c && (c = !1);
        a.get_pointerDown().connect(function(d) {
            if (c && null != d) h.setCloseAnimation(a, b, c);
            else {
                a.alpha.animateTo(0, 0.3);
                var d = new ba,
                    f = new ca([new u(b.scaleY, 0.01, 0.1), new X([new u(b.scaleY, 0, 0.2), new u(b.scaleX, 0, 0.2)]), new W(function() {
                        a.disablePointer();
                        b.owner.dispose()
                    })]);
                d.run(f);
                b.owner.add(d)
            }
        }).once()
    };
    h.overlayAndImageAsTVAnimation = function(a, b, c) {
        null == c && (c = !1);
        a.alpha.animateTo(0.5, 0.3);
        a.set_pointerEnabled(!0);
        var d = new ba,
            f = new ca([new X([new u(b.scaleY, 0.01, 0.2), new u(b.scaleX, 1, 0.2)]), new u(b.scaleY, 1, 0.1), new W(function() {
                h.setCloseAnimation(a, b, c)
            })]);
        d.run(f);
        b.owner.add(d)
    };
    h.autoMergeCreature = function() {
        if (null != h.currentWorld && h.currentWorld.autoMergeCreature()) return !0;
        for (var a = 0, b = d.gameState.worlds.length; a < b;) {
            var c = a++,
                c = Math.round(d.gameState.worlds.length -
                    1 - c);
            if (null == h.currentWorld || h.currentWorld.index != c)
                if (c = L.createInstance(L.resolveClass("kiziland." + d.gWorldsConfig[c].type), [c, !0]), c.autoMergeCreature()) return c.saveState(), !0
        }
        return !1
    };
    h.autoMergeCreatureForce = function() {
        if (null != h.currentWorld && h.currentWorld.autoMergeCreatureForce()) return !0;
        for (var a = 0, b = d.gameState.worlds.length; a < b;) {
            var c = a++,
                c = Math.round(d.gameState.worlds.length - 1 - c);
            if (null == h.currentWorld || h.currentWorld.index != c)
                if (c = L.createInstance(L.resolveClass("kiziland." + d.gWorldsConfig[c].type), [c, !0]), c.autoMergeCreatureForce()) return c.saveState(), !0
        }
        return !1
    };
    h.autoClickCreatures = function() {
        if (null == h.currentWorld || h.currentWorld.isFake) return 0;
        for (var a = 0, b = 0, c = h.currentWorld.elements; b < c.length;) {
            var e = c[b];
            ++b;
            if (C.__instanceof(e, O) && 0 != (e._flags & 4)) {
                var f = C.__cast(e, O);
                if (!f.isMouseDownOnMe) {
                    var g = f.clickRandomPow();
                    g = Math.ceil(Math.pow(10, f._world.index) * Math.pow(10, g));
                    0 < d.gameState.doubleCoinsPerSecSecLeft && (g *= 2);
                    f.playSqueezeAnimation();
                    f.addCoinsAnimation(g, !0, 0.5, 1);
                    a++
                }
            }
        }
        0 < a && h.ctx.playSound("active_coin_click");
        return a
    };
	// đóng function
    h.setLocalNotifications = function() {
        
    };
    h.__super__ = R;
    h.prototype = x(R.prototype, {
        get_name: function() {
            return "GameScene_0"
        },
        step: function(a) {
            if (null != d.gameState.lastCoinsAddedAt && 3 < m._platform.getTime() - d.gameState.lastCoinsAddedAt) h.currentWorld.visibleTimeSec = 0, 30 < m._platform.getTime() - d.gameState.lastCoinsAddedAt && (this.setLocalNotificationsDT = this.setLocalNotificationsDealy +
                1), h.getOfflineElements();
            else {
                d.gameState.lastCoinsAddedDT += a;
                0 < d.gameState.doubleCoinsPerSecSecLeft && (d.gameState.doubleCoinsPerSecSecLeft -= a);
                1 <= d.gameState.lastCoinsAddedDT && (d.gameState.coins += d.gameState.coinsPerSec, null != h.topBar && (h.topBar.coinsDisplay += d.gameState.coinsPerSec), 0 < d.gameState.doubleCoinsPerSecSecLeft && (d.gameState.coins += d.gameState.coinsPerSec, null != h.topBar && (h.topBar.coinsDisplay += d.gameState.coinsPerSec)), d.gameState.lastCoinsAddedDT = 0, d.gameState.lastCoinsAddedAt = m._platform.getTime(),
                    null != h.currentWorld && h.currentWorld.saveState(), d.save(), null != h.topBar && h.topBar.updateText(), null != h.creaturesStore && h.creaturesStore.reloadItems());
                if (d.gameState.eggGotDT.length < d.gameState.worlds.length)
                    for (var b = d.gameState.eggGotDT.length, c = d.gameState.worlds.length; b < c;) b++, d.gameState.eggGotDT.push(0);
                0 < d.gameState.quaterEggTimeSecLeft && (d.gameState.quaterEggTimeSecLeft -= a);
                0 < d.gameState.higherCreaturesInEggsSecLeft && (d.gameState.higherCreaturesInEggsSecLeft -= a);
                b = 0;
                for (c = d.gameState.worlds.length; b <
                    c;) {
                    var e = b++;
                    d.gWorldsConfig[e].is_receiving_eggs && (d.gameState.eggGotDT[e] += a, d.gameState.eggGotDT[e] > h.getEggTimeSec(e) && h.generateNewEgg(e) && (d.gameState.eggGotDT[e] = 0))
                }
                b = k.PRESENT_TIME_SEC;
                0 < d.gameState.quaterPresentTimeSecLeft && (d.gameState.quaterPresentTimeSecLeft -= a, b /= 4);
                null != h.currentWorld && (d.gameState.presentGotDT += a, d.gameState.presentGotDT > b && h.currentWorld.elements.length < k.MAX_WORLD_ELEMENTS && 2 < h.currentWorld.visibleTimeSec && (d.gameState.presentGotDT = 0, h.currentWorld.addPresent()));
                b = 0;
                for (c = h.superCreatures; b < c.length;) e = c[b], ++b, e.onUpdate(a);
                typeof window !== "undefined" && window.__gvAutoMergeStop && (d.gameState.autoMergeCreaturesSecLeft = 0, d.gameState.lastAutoMergeCreatureDT = 0, window.__gvAutoMergeForce = !1, window.__gvAutoMergeStartSec = 0, window.__gvAutoMergeStop = !1);
                typeof window !== "undefined" && window.__gvAutoMergeStartSec > 0 && (d.gameState.autoMergeCreaturesSecLeft = window.__gvAutoMergeStartSec, d.gameState.lastAutoMergeCreatureDT = k.SECONDS_BETWEEN_AUTO_MERGES + 1, window.__gvAutoMergeStartSec = 0);
                null == d.gameState.lastAutoMergeCreatureDT && (d.gameState.lastAutoMergeCreatureDT = 0);
                0 < d.gameState.autoMergeCreaturesSecLeft && (d.gameState.autoMergeCreaturesSecLeft -= a, d.gameState.lastAutoMergeCreatureDT += a, d.gameState.lastAutoMergeCreatureDT > k.SECONDS_BETWEEN_AUTO_MERGES && (d.gameState.lastAutoMergeCreatureDT = 0, typeof window !== "undefined" && window.__gvAutoMergeForce ? h.autoMergeCreatureForce() : h.autoMergeCreature()));
                typeof window !== "undefined" && window.__gvAutoClickStop && (window.__gvAutoClickPulse = !1, window.__gvAutoClickStop = !1);
                typeof window !== "undefined" && window.__gvAutoClickPulse && (window.__gvAutoClickPulse = !1, h.autoClickCreatures());
                h.isSimulate || (this.setLocalNotificationsDT += a, this.setLocalNotificationsDT > this.setLocalNotificationsDealy && (this.setLocalNotificationsDT = 0, h.setLocalNotifications()), h.worldChangedDT +=
                    a, h.delataTimeFromLastTouch += a, h.sendNoActionEventDT += a, h.delataTimeFromLastTouch > h.sendNoActionEventEvery && h.sendNoActionEventDT > h.sendNoActionEventEvery && (h.sendNoActionEventDT = 0, f.reportEvent("no_action", {
                        no_action_duration: h.delataTimeFromLastTouch,
                        is_auto_merge_active: 0 < d.gameState.autoMergeCreaturesSecLeft
                    }), (d.showAdEveryNoAction5Sec || d.showAdOnNoAction5Sec && 9 > h.delataTimeFromLastTouch) && d.showMidrollIfPossible()), d.showAdOnWorldChangeAndNoAction3Sec && h.shouldShowAdForThisWorldChanged && 3 < h.worldChangedDT &&
                    (h.shouldShowAdForThisWorldChanged = !1, d.showMidrollIfPossible()))
            }
        },
        onUpdate: function(a) {
            R.prototype.onUpdate.call(this, a);
            this.step(a)
        },
        __class__: h
    });
    var lc = function(a) {
        this._vImage = d.atlas.createSprite("Sound_on");
        gb.call(this, a, 0);
        this.owner.addChild((new j).add(this._vImage.setXY(0.05 * this._width, 0.4 * this._height - this._vImage.getNaturalHeight() / 2)));
        this.setTexts()
    };
    i["kiziland.HalfTimeEggItem"] = lc;
    lc.__name__ = ["kiziland", "HalfTimeEggItem"];
    lc.__super__ = gb;
    lc.prototype = x(gb.prototype, {
        getImage: function() {
            return d.atlas.createSprite("Store_egg_half")
        },
        reload: function() {
            this._newBadge.set_visible(this.isNewItem = !this.isBought());
            this._vImage.set_visible(this.isBought());
            null == h.topBar || h.topBar.coinsDisplay < this.getPriceCoins() || this.isBought() ? (this.buyWithCoinsClickable.setAlpha(0.5), this.buyWithCoinsClickable.disablePointer()) : (this.buyWithCoinsClickable.setAlpha(1), this.buyWithCoinsClickable.set_pointerEnabled(!0));
            null == h.topBar || h.topBar.starsDisplay < this.getPriceStars() || this.isBought() ? (this.buyWithStarsClickable.setAlpha(0.5), this.buyWithStarsClickable.disablePointer()) :
                (this.buyWithStarsClickable.setAlpha(1), this.buyWithStarsClickable.set_pointerEnabled(!0))
        },
        getPriceCoins: function() {
            return k.HALF_TIME_EGGS_COINS_PRICE
        },
        getPriceStars: function() {
            return k.HALF_TIME_EGGS_STARS_PRICE
        },
        setTexts: function() {
            this._nameText.set_text("Half-time");
            this._perSecText.set_text("egg /5 sec");
            this._priceText.set_text(t.formatNumber(this.getPriceCoins(), 1));
            this._priceStarsText.set_text(t.formatNumber(this.getPriceStars()))
        },
        buy: function(a) {
            null == a && (a = !1);
            var b = this.getPriceCoins(),
                c = this.getPriceStars(),
                e;
            e = h.isFullGameSimulate ? d.gameState.coins : h.topBar.coinsDisplay;
            var g;
            g = h.isFullGameSimulate ? d.gameState.stars : h.topBar.starsDisplay;
            return a && g >= c || !a && e >= b ? (a ? (h.ctx.playSound("star_purchase"), d.gameState.stars -= c, null != h.topBar && (h.topBar.starsDisplay -= c)) : (h.ctx.playSound("coin_purchase"), d.gameState.coins -= b, null != h.topBar && (h.topBar.coinsDisplay -= b)), d.gameState.worlds[0].halfEggTime = !0, null != h.topBar && h.topBar.updateText(), f.reportEvent("half_time_eggs_bought", {
                currency: a ?
                    "stars" : "coins",
                price: a ? c : b
            }), !0) : !1
        },
        addToGame: function() {},
        isBought: function() {
            return null != d.gameState.worlds[0] && !0 == d.gameState.worlds[0].halfEggTime
        },
        showPopup: function() {
            var a = this;
            if (!this.isBought()) {
                var b = d.atlas.createSprite("half_time_bg");
                b.setScale(0).centerAnchor();
                h.overlay.owner.parent.addChild((new j).add(b.setXY(k.WIDTH / 2, k.HEIGHT / 2)));
                var c;
                c = 0 != (this._store._flags & 2) ? this._store.overlay : h.overlay;
                var e = d.atlas.createSprite("half_time_coin");
                e.set_pointerEnabled(0 != (this.buyWithCoinsClickable._flags &
                    4));
                e.alpha = this.buyWithCoinsClickable.alpha;
                e.get_pointerDown().connect(function() {
                    a.buyWithCoinsClickable.pointerClick.emit(null);
                    e.texture = d.atlas.getTexture("half_time_coin_pressed");
                    P.delay(function() {
                        e.texture = d.atlas.getTexture("half_time_coin");
                        c.get_pointerDown().emit(null)
                    }, 150)
                }).once();
                b.owner.addChild((new j).add(e.setXY(0.05 * b.getNaturalWidth(), 0.8 * b.getNaturalHeight())));
                e.owner.addChild((new j).add((new G(d.fontRobotoBlackItalic, t.formatNumber(this.getPriceCoins(), 1))).setAlign(N.Right).setXY(e.getNaturalWidth() -
                    0.04 * b.getNaturalWidth(), 0.47 * e.getNaturalHeight() - d.fontRobotoBlackItalic.lineHeight / 2).setScale(1 / n.scale)));
                var f = d.atlas.createSprite("half_time_stars");
                f.set_pointerEnabled(0 != (this.buyWithStarsClickable._flags & 4));
                f.alpha = this.buyWithStarsClickable.alpha;
                f.get_pointerDown().connect(function() {
                    a.buyWithStarsClickable.pointerClick.emit(null);
                    f.texture = d.atlas.getTexture("half_time_stars_pressed");
                    P.delay(function() {
                            f.texture = d.atlas.getTexture("half_time_stars");
                            c.get_pointerDown().emit(null)
                        },
                        150)
                }).once();
                b.owner.addChild((new j).add(f.setXY(e.x._value + e.getNaturalWidth() + 0.03 * b.getNaturalWidth(), e.y._value)));
                f.owner.addChild((new j).add((new G(d.fontRobotoBlackItalic, "" + this.getPriceStars())).setAlign(N.Right).setXY(f.getNaturalWidth() - 0.04 * b.getNaturalWidth(), 0.47 * f.getNaturalHeight() - d.fontRobotoBlackItalic.lineHeight / 2).setScale(1 / n.scale)));
                var g = d.atlas.createSprite("half_time_later");
                g.get_pointerDown().connect(function() {
                    g.texture = d.atlas.getTexture("half_time_later_pressed");
                    P.delay(function() {
                        g.texture = d.atlas.getTexture("half_time_later");
                        c.get_pointerDown().emit(null)
                    }, 150)
                }).once();
                b.owner.addChild((new j).add(g.setXY(f.x._value + f.getNaturalWidth() + 0.03 * b.getNaturalWidth(), e.y._value)));
                h.overlayAndImageAsTVAnimation(c, b, !0)
            }
        },
        __class__: lc
    });
    var ua = function() {
        null == ua.leafEmitterMold && (ua.leafEmitterMold = new A(d.bootstrapPack, "leaf"), ua.leafEmitterMold.texture = d.atlas.getTexture("Particle_leaf02"), ua.leafEmitterMold.emitYVariance = k.HEIGHT / 2, ua.leafEmitterMold.lifespan =
            1.5 * (k.WIDTH / ua.leafEmitterMold.speed), ua.leafEmitterMold.lifespanVariance = 0);
        ja.call(this, ua.leafEmitterMold);
        this.hasCreatureMovingEffect = !1;
        this.setXY(k.WIDTH, k.HEIGHT / 2)
    };
    i["kiziland.LeafParticlesSprite"] = ua;
    ua.__name__ = ["kiziland", "LeafParticlesSprite"];
    ua.__super__ = ja;
    ua.prototype = x(ja.prototype, {
        __class__: ua
    });
    var F = function() {};
    i["kiziland.LocalNotification"] = F;
    F.__name__ = ["kiziland", "LocalNotification"];
    F.init = function() {
        if (null == F.idsMem || null == F.timesMem) null == d.gameState.localNotificationsIds &&
            (d.gameState.localNotificationsIds = {}), null == d.gameState.localNotificationsTimes && (d.gameState.localNotificationsTimes = {}), F.idsMem = d.gameState.localNotificationsIds, F.timesMem = d.gameState.localNotificationsTimes
    };
    F.saveMem = function() {
        d.gameState.localNotificationsIds = F.idsMem;
        d.gameState.localNotificationsTimes = F.timesMem;
        d.save()
    };
    F.set = function(a, b, c, d, f, h, g, i) {
        F.init();
        var j;
        j = 1E3 * (m._platform.getTime() + b);
        var k = new Date;
        k.setTime(j);
        j = k;
        j.getHours() >= F.latestHour && (j = j.getTime() + 36E5 * (24 - j.getHours()),
            k = new Date, k.setTime(j), j = k);
        j.getHours() < F.earliestHour && (b = j.getTime() / 1E3 + 3600 * (F.earliestHour - j.getHours()) - m._platform.getTime());
        if (Object.prototype.hasOwnProperty.call(F.idsMem, a) && Object.prototype.hasOwnProperty.call(F.timesMem, a)) {
            if (2 > Math.abs(p.field(F.timesMem, a) - m._platform.getTime() - b)) return;
            F.cancel(a)
        }
        p.setField(F.timesMem, a, m._platform.getTime() + b);
        p.setField(F.idsMem, a, F.send(b, c, d, f, h, g, i));
        F.saveMem()
    };
    F.cancel = function(a) {
        F.init();
        Object.prototype.hasOwnProperty.call(F.idsMem,
            a) && (f.HTML5API_cancelLocalNotification(o.string(p.field(F.idsMem, a))), p.deleteField(F.idsMem, a), p.deleteField(F.timesMem, a), F.saveMem())
    };
    F.send = function(a, b, c, d, h, g, i) {
        return o.string(f.HTML5API_sendLocalNotification(Math.ceil(a), b, c, d, h, g, i))
    };
    var n = function() {};
    i["kiziland.Main"] = n;
    n.__name__ = ["kiziland", "Main"];
    n.main = function() {
        z.SHOULD_HIDE_MOBILE_BROWSER = !1;
        m.init();
        m._platform.getStage().lockOrientation(bb.Portrait);
        /*
        if (!f.isInKiziApp()) try {
            if (-1 == ["localhost", "4399.com", "*.4399.com",
                ".4399.com", "*.4399.com"
            ].indexOf(window.parent.document.domain)) {
                window.location.replace("http://m.kizi.com/games/kiziland?ch=1100&utm_source=viral_html5&utm_medium=redirect&utm_content=kiziland&utm_campaign=viral_html5");
                return
            }
        } catch (a) {
            window.location.replace("http://m.kizi.com/games/kiziland?ch=1100&utm_source=viral_html5&utm_medium=redirect&utm_content=kiziland&utm_campaign=viral_html5");
            return
        }
        */
        f.init("kiziland", k.GAME_VERSION, n.defaultConfig, {}, n.onConfigLoaded);
        n.borderN = new $(0,
            0, 0);
        n.borderE = new $(0, 0, 0);
        n.borderS = new $(0, 0, 0);
        n.borderW = new $(0, 0, 0);
        n.imageN = null;
        n.imageE = null;
        n.imageS = null;
        n.imageW = null
    };
    n.onConfigLoaded = function() {
        var a = ga.fromAssets("splash"),
            a = m._platform.loadAssetPack(a);
        d.gIsMuted = f.storageGet("isMuted", !1);
        window.addEventListener("pagehide", function() {
            m.volume.set__(0)
        });
        window.addEventListener("pageshow", function() {
            d.gIsMuted ? m.volume.set__(0) : m.volume.set__(1);
            window.scrollTo(0, 1)
        });
        d.gIsMuted ? m.volume.set__(0) : m.volume.set__(1);
        var b = f.getConfig();
        d.gConfig = b;
        d.gWorldsConfig = d.gConfig.worlds;
        d.gCreaturesConfig = d.gConfig.creatures;
        d.gSuperCreaturesConfig = d.gConfig.super_creatures;
        d.gLocalNotifications = d.gConfig.local_notifications;
       // p.field(d.gConfig, "show_ad_on_no_action_5_sec") && (d.showAdOnNoAction5Sec = p.field(d.gConfig, "show_ad_on_no_action_5_sec"));
        //p.field(d.gConfig, "show_ad_every_no_action_5_sec") && (d.showAdEveryNoAction5Sec = p.field(d.gConfig, "show_ad_every_no_action_5_sec"));
        //p.field(d.gConfig, "show_ad_on_wiki_open") && (d.showAdOnWikiOpen =
           // p.field(d.gConfig, "show_ad_on_wiki_open"));
       // p.field(d.gConfig, "show_ad_on_world_change_and_no_action_3_sec") && (d.showAdOnWorldChangeAndNoAction3Sec = p.field(d.gConfig, "show_ad_on_world_change_and_no_action_3_sec"));
       // p.field(d.gConfig, "show_ad_on_world_change_to_first") && (d.showAdOnWorldChangeToFirst = p.field(d.gConfig, "show_ad_on_world_change_to_first"));
        k.EGG_TIME_SEC = d.gConfig.egg_time_seconds;
        k.PRESENT_TIME_SEC = d.gConfig.present_time_seconds;
        k.PRESENT_CLICKING_TIME_SEC = d.gConfig.present_clicking_time_seconds;
        k.PRESENT_LIVING_TIME_SEC = d.gConfig.present_living_time_seconds;
        k.MAX_WORLD_ELEMENTS = d.gConfig.max_world_elements;
        k.MAX_WANDER_DISTANCE = d.gConfig.max_wander_distance;
        k.MIN_WANDER_DISTANCE = d.gConfig.min_wander_distance;
        k.WANDER_DURATION = d.gConfig.wander_duration_seconds;
        k.CHANCE_FOR_STAR_IN_EGG = d.gConfig.chance_for_star_in_egg;
        k.EGGS_NEEDED_FOR_FIRST_SUPER_EGG = d.gConfig.eggs_needed_for_first_super_egg;
        k.EGGS_NEEDED_FOR_SUPER_EGG = d.gConfig.eggs_needed_for_super_egg;
        k.SECONDS_BETWEEN_AUTO_MERGES = d.gConfig.seconds_between_auto_merges;
        k.FIRST_CREATURE_PRICE = d.gConfig.first_creature_price;
        k.CREATURE_PRICE_LEVEL_EXPONENT_BASE = d.gConfig.creature_price_level_exponent_base;
        k.CREATURE_PRICE_BOUGHT_EXPONENT_BASE = d.gConfig.creature_price_bought_exponent_base;
        k.HALF_TIME_EGGS_COINS_PRICE = d.gConfig.half_time_eggs_coins_price;
        k.HALF_TIME_EGGS_STARS_PRICE = d.gConfig.half_time_eggs_stars_price;
        k.MAX_REWARDED_VIDEOS_PER_DAY = d.gConfig.max_rewarded_videos_per_day;
        k.MIN_SEC_BETWEEN_REWARDED_VIDEOS = d.gConfig.min_sec_between_rewarded_videos;
        k.IS_NEW_BALANCE =
            d.gConfig.is_new_balance;
        a.get(n.onSplashFinish)
    };
    n.onSplashFinish = function(a) {
        n.viewport = (new j).add(new y);
        m.root.addChild(n.viewport);
        d.splashPack = a;
        m._platform.getStage().resize.connect(n.layoutBorders);
        n.layoutBorders()
    };
    n.layoutBorders = function() {
        var a = m._platform.getStage().get_width(),
            b = m._platform.getStage().get_height();
        if (a > b && m._platform.getTouch().get_supported()) za.show();
        else {
            var c = [1, 1.5, 2, 4],
                e = 1;
            n.scale = 99;
            for (var f = 0; f < c.length;) {
                var h = c[f];
                ++f;
                Math.abs(n.scale - 1) > Math.abs(b / (k.DEFAULT_HEIGHT /
                    4 * h) - 1) && (e = h, n.scale = b / (k.DEFAULT_HEIGHT / 4 * e))
            }
            n.assetPackSize = e;
            k.HEIGHT = Math.floor(k.DEFAULT_HEIGHT / 4 * e);
            k.WIDTH = Math.floor(Math.min(a / n.scale, k.HEIGHT / 1.2625));
            if ((a != k.WIDTH || b != k.HEIGHT) && null == n.borderN.owner) m.root.addChild((new j).add(n.borderN)), m.root.addChild((new j).add(n.borderE)), m.root.addChild((new j).add(n.borderS)), m.root.addChild((new j).add(n.borderW));
            c = n.viewport._compMap.Sprite_0;
            c.x.set__(0.5 * a - 0.5 * n.scale * k.WIDTH);
            c.y.set__(0.5 * b - 0.5 * n.scale * k.HEIGHT);
            c.setScale(n.scale);
            n.borderN.setXY(0, 0);
            n.borderN.width.set__(a);
            n.borderN.height.set__(c.y._value);
            n.borderE.setXY(a - c.x._value, c.y._value);
            n.borderE.width.set__(c.x._value);
            n.borderE.height.set__(b - 2 * c.y._value);
            n.borderS.setXY(0, b - c.y._value);
            n.borderS.width.set__(a);
            n.borderS.height.set__(c.y._value);
            n.borderW.setXY(0, c.y._value);
            n.borderW.width.set__(c.x._value);
            n.borderW.height.set__(b - 2 * c.y._value);
            za.hide();
            null == n.ctx && (n.ctx = new d(n.viewport), n.ctx.unwindToScene(Tc.create(n.ctx)))
        }
    };
    var Tc = function() {};
    i["kiziland.PreloaderScene"] =
        Tc;
    Tc.__name__ = ["kiziland", "PreloaderScene"];
    Tc.create = function(a) {
        ta;
        va;
        ua;
        Da;
        var b = new j,
            c = (new j).add(new $(15790320, k.WIDTH, k.HEIGHT));
        b.addChild(c);
        c = new D(d.splashPack.getTexture("splash_screen"));
        c = (new j).add(c.centerAnchor().setScale(k.HEIGHT / c.getNaturalHeight()).setXY(k.WIDTH / 2, k.HEIGHT / 2));
        b.addChild(c);
        c = (new j).add((new $(3617596, 300, 20)).centerAnchor().setXY(k.WIDTH / 2, 0.65 * k.HEIGHT));
        b.addChild(c);
        var e = (new j).add(new $(16768258, 0, 20));
        c.addChild(e);
        var c = ga.fromAssets("bootstrap"),
            g = m._platform.loadAssetPack(c);
        g.get(function(b) {
            d.bootstrapPack = b;
            var b = ga.fromAssets(n.assetPackSize + "x"),
                c = m._platform.loadAssetPack(b);
            f.HTML5API_preloaderStarted();
            c.get(function(b) {
                f.HTML5API_preloaderEnded();
                d.pack = b;
                d.atlas = new Jc(b, "assets{n}.xml");
                b = d.atlas.getTexture("Top_bar");
                k.TOPBAR_HEIGHT = Math.ceil(b.get_height());
                b = ga.fromAssets("sounds");
                m._platform.loadAssetPack(b).get(function(b) {
                    d.soundsPack = b;
                    d.isSoundsPackLoaded = !0;
                    b = ga.fromAssets("long_sounds");
                    m._platform.loadAssetPack(b).get(function(b) {
                        d.longSoundsPack =
                            b;
                        d.isLongSoundsPackLoaded = !0;
                        b = a.getLongSound("gameplay_music");
                        null != b && (h.bgMusig = b.loop(0.1), h.bgMusig.volume.set__(0), d.gameState.isMusicOn && h.bgMusig.volume.animateTo(0.4, 1))
                    })
                });
                a.unwindToScene(h.create(a), new gc(0.5))
            });
            d.fontRobotoBlackItalic = new xa(d.bootstrapPack, "Roboto-BlackItalic-" + n.assetPackSize + "x");
            d.fontRobotoBlackItalicBig = new xa(d.bootstrapPack, "Roboto-BlackItalic-big-" + n.assetPackSize + "x");
            d.fontRobotoBlackItalicSmall = new xa(d.bootstrapPack, "Roboto-BlackItalic-small-" + n.assetPackSize +
                "x");
            d.fontRobotoBold = new xa(d.bootstrapPack, "Roboto-Bold-" + n.assetPackSize + "x");
            d.fontRobotoRegular = new xa(d.bootstrapPack, "Roboto-Regular-" + n.assetPackSize + "x");
            d.fontRobotoBlack = new xa(d.bootstrapPack, "Roboto-Black-" + n.assetPackSize + "x");
            d.fontRobotoMedium = new xa(d.bootstrapPack, "Roboto-Medium-" + n.assetPackSize + "x");
            d.showStartButton = f.HTML5API_showStartButton();
            c.progressChanged.connect(function() {
                var a = c._progress / c._total;
                1 < a && (a = 1);
                o.instance(e._compMap.Sprite_0, $).width.set__(150 + 150 * a)
            })
        });
        g.progressChanged.connect(function() {
            var a = g._progress / g._total;
            1 < a && (a = 1);
            o.instance(e._compMap.Sprite_0, $).width.set__(150 * a)
        });
        f.reportEvent("asset_pack", {
            size: n.assetPackSize,
            scale: n.scale
        });
        return b
    };
    var Wa = function(a) {
        var b = this;
        da.call(this, "present", a, 0, 0, 0.08 * k.WIDTH);
        this.setXY(this.getRandomX(), this.getRandomY());
        this._livingTime = 0;
        if (!this._world.isFake) {
            this.centerAnchor();
            this.setDepthToBottom();
            var c = new oa("present_fx", -1, 8);
            c.centerAnchor().setXY(this.getNaturalWidth() / 2, this.getNaturalHeight() /
                2);
            this.owner.addChild((new j).add(c));
            this._clickingMovie = new oa("present_clicking_fx", -1, 12);
            this._clickingMovie.disablePointer().centerAnchor();
            this._openMovie = new oa("present_open_fx", 1, 12);
            this._openMovie.onPlaysFinish.connect(function() {
                b._openMovie.owner.dispose()
            });
            this._openMovie.disablePointer().centerAnchor();
            this.pointerDownSec = 0;
            this.get_pointerDown().connect(function() {
                b.texture = d.atlas.getTexture("Present_pressed");
                b.centerAnchor();
                c.set_visible(!1);
                b._world.owner.addChild((new j).add(b._clickingMovie.setXY(b.x._value,
                    b.y._value)));
                m._platform.getPointer().up.connect(function() {
                    b.pointerDownSec = 0;
                    b.texture = d.atlas.getTexture("present");
                    b.centerAnchor();
                    c.set_visible(!0);
                    null != b._clickingMovie.owner && b._clickingMovie.owner.dispose();
                    b.scaleY.animateTo(1, 0.1, r.backOut);
                    b.scaleX.animateTo(Q.sign(b.scaleX._value), 0.1, r.backOut);
                    b._clickingMovie.setScale(1)
                }).once()
            })
        }
    };
    i["kiziland.Present"] = Wa;
    Wa.__name__ = ["kiziland", "Present"];
    Wa.__super__ = da;
    Wa.prototype = x(da.prototype, {
        open: function() {
            h.ctx.playSound("open_present");
            var a = o.random(100);
            k.IS_NEW_BALANCE ? 1 > a ? this.creature(2) : 5 > a ? this.creature(3) : 10 > a ? this.creature(4) : 12 > a ? this.stars(4) : 17 > a ? this.stars(3) : 27 > a ? this.stars(2) : 47 > a ? this.coins(1.5) : 70 > a ? this.coins(1) : this.coins(0.5) : 1 > a ? this.creature(0) : 5 > a ? this.creature(1) : 10 > a ? this.creature(3) : 20 > a ? this.coins(2) : 40 > a ? this.coins(1) : 60 > a ? this.coins(0.5) : 70 > a ? this.stars(3) : 82 > a ? this.stars(2) : this.stars(1);
            this.dispose();
            this._world.saveState()
        },
        coins: function(a) {
            a = k.IS_NEW_BALANCE ? Math.ceil(60 * d.gameState.coinsPerSec *
                a) : Math.round(h.creaturesStore.items[h.creaturesStore.items.length - 1].getPriceCoins() * a);
            this.playAnimation("present_coin_fx");
            this.addCoinsAnimation(a, !0, 3);
            f.reportEvent("present_opened", {
                type: "coins",
                value: a
            })
        },
        stars: function(a) {
            this.playAnimation("present_Star_fx");
            this.addStarsAnimation(a);
            f.reportEvent("present_opened", {
                type: "stars",
                value: a
            })
        },
        creature: function(a) {
            a = t.clampInt(this._world.maxCreatureLevel - a, this._world.minCreatureLevel, d.gameState.maxCreatureLevelReached);
            this._world.addCreature(this.x._value -
                this.anchorX._value + this.getNaturalWidth() / 2, this.y._value - this.anchorY._value + this.getNaturalHeight(), a).addTotalCoinsPerSec();
            null != h.topBar && h.topBar.updateText();
            this.playAnimation();
            f.reportEvent("present_opened", {
                type: "creature",
                value: a
            })
        },
        playAnimation: function(a) {
            if (!this._world.isFake) {
                var b = d.atlas.createSprite("Present_cloud");
                b.setScale(0).centerAnchor().disablePointer();
                var c = new ba,
                    e = new ca([new X([new u(b.scaleX, 3, 0.7), new u(b.scaleY, 3, 0.7), new u(b.alpha, 0, 0.7)]), new W(function() {
                        b.owner.dispose()
                    })]);
                c.run(e);
                this._world.owner.addChild((new j).add(b.setXY(this.x._value, this.y._value)));
                b.owner.add(c);
                this._world.owner.addChild((new j).add(this._openMovie.setXY(this.x._value, this.y._value)));
                if (null != a) {
                    var f = new oa(a, 1, 12);
                    f.onPlaysFinish.connect(function() {
                        f.owner.dispose()
                    });
                    f.disablePointer().centerAnchor();
                    this._world.owner.addChild((new j).add(f.setXY(this.x._value, this.y._value)))
                }
            }
        },
        onUpdate: function(a) {
            da.prototype.onUpdate.call(this, a);
            this.setDepthToBottom();
            this.isMouseDownOnMe ? (this.pointerDownSec +=
                a, this.pointerDownSec >= k.PRESENT_CLICKING_TIME_SEC ? this.open() : (this._livingTime = 0, this.alpha.animateTo(1, 0.1), this.scaleY.animateTo(1 + this.pointerDownSec / k.PRESENT_CLICKING_TIME_SEC, 0.1, r.sineOut), this.scaleX.animateTo((1 + this.pointerDownSec / k.PRESENT_CLICKING_TIME_SEC) * Q.sign(this.scaleX._value), 0.1, r.sineOut), this._clickingMovie.scaleY.animateTo(1 + this.pointerDownSec / k.PRESENT_CLICKING_TIME_SEC, 0.1, r.sineOut), this._clickingMovie.scaleX.animateTo(1 + this.pointerDownSec / k.PRESENT_CLICKING_TIME_SEC,
                    0.1, r.sineOut))) : this._livingTime += a;
            this._animate && 5 > k.PRESENT_LIVING_TIME_SEC - this._livingTime && (this.alpha.animateTo((k.PRESENT_LIVING_TIME_SEC - this._livingTime) / 5, 0.1), this._livingTime > k.PRESENT_LIVING_TIME_SEC && (this.dispose(), f.reportEvent("present_disappeared")))
        },
        onRemoved: function() {
            da.prototype.onRemoved.call(this);
            null != this._clickingMovie && null != this._clickingMovie.owner && this._clickingMovie.owner.dispose()
        },
        __class__: Wa
    });
    var Ea = function(a, b, c) {
        D.call(this, d.atlas.getTexture("Time_remaining"));
        this.setScale(0).centerAnchor().setXY(k.WIDTH / 2, k.HEIGHT / 2);
        this._getContentEntityFunc = c;
        (new j).add(this);
        this.owner.addChild((new j).add(d.atlas.createSprite(a)));
        a = d.atlas.createSprite(b);
        this.owner.addChild((new j).add(a.setXY(this.getNaturalWidth() / 2 - a.getNaturalWidth() / 2, 0.02 * this.getNaturalHeight())));
        this._contentPlaceSprite = new y;
        this.owner.addChild((new j).add(this._contentPlaceSprite.centerAnchor().setXY(0.5 * this.getNaturalWidth(), 0.737 * this.getNaturalHeight())));
        this.updateContent();
        this.show()
    };
    i["kiziland.RemainsPopup"] = Ea;
    Ea.__name__ = ["kiziland", "RemainsPopup"];
    Ea.newReadyIn = function(a, b) {
        return new Ea("Time_remaining_ready", a, b)
    };
    Ea.newEndsIn = function(a, b) {
        return new Ea("Time_remaining_ends", a, b)
    };
    Ea.__super__ = D;
    Ea.prototype = x(D.prototype, {
        updateContent: function() {
            null != this._contentPlaceSprite.owner.firstChild && this._contentPlaceSprite.owner.firstChild.dispose();
            this._contentPlaceSprite.owner.addChild(this._getContentEntityFunc())
        },
        show: function() {
            var a = this;
            h.overlay.owner.parent.addChild(this.owner);
            h.overlayAndImageAsTVAnimation(h.overlay, this);
            P.delay(function() {
                null != a.owner && h.overlay.get_pointerDown().emit(null)
            }, 5E3)
        },
        onUpdate: function(a) {
            D.prototype.onUpdate.call(this, a);
            this.updateContent()
        },
        onRemoved: function() {
            this.owner.dispose()
        },
        __class__: Ea
    });
    var va = function() {
        null == va.snowEmitterMold && (va.snowEmitterMold = new A(d.bootstrapPack, "snow"), va.snowEmitterMold.texture = d.atlas.getTexture("Particle_snow"), va.snowEmitterMold.emitXVariance = k.WIDTH / 2, va.snowEmitterMold.lifespan = 1.5 * (k.HEIGHT /
            va.snowEmitterMold.speed), va.snowEmitterMold.lifespanVariance = 0);
        ja.call(this, va.snowEmitterMold);
        this.hasCreatureMovingEffect = !1;
        this._emitElapsed = 2 * (this.lifespan._value / this._particles.length);
        this.setXY(k.WIDTH / 2, 0)
    };
    i["kiziland.SnowParticlesSprite"] = va;
    va.__name__ = ["kiziland", "SnowParticlesSprite"];
    va.__super__ = ja;
    va.prototype = x(ja.prototype, {
        __class__: va
    });
    var H = function() {
        R.call(this);
        this._waitingTime = 0
    };
    i["kiziland.SocialGift"] = H;
    H.__name__ = ["kiziland", "SocialGift"];
    H.initUsedKeys = function() {
        null ==
            H.usedKeys && (H.usedKeys = null == d.gameState.socialGiftsUsedKeys ? [] : d.gameState.socialGiftsUsedKeys)
    };
    H.receive = function() {
        var a = m._platform.getExternal().call("GET_SOCIAL_GIFT_CODE"),
            b = m._platform.getExternal().call("GET_SOCIAL_GIFT_KEY");
        if (!("" == a || "" == b || function() {
            var a = Va.encode(b + H.salt);
            return s.substr(a, 0, 8)
        }(this) != a))
            if (H.initUsedKeys(), -1 == H.usedKeys.indexOf(b)) {
                H.addUsedKey(b);
                var c = h.superCreatures.filter(function(a) {
                        return 0 < d.gameState.superCreatureCookingDT[a.index] && d.gameState.superCreatureCookingDT[a.index] <
                            C.__cast(a.config.cooking_time_sec, Lc)
                    }),
                    a = d.atlas.createSprite("Gift_popup_bg");
                a.disablePointer().setScale(0).centerAnchor();
                h.overlay.owner.parent.addChild((new j).add(a.setXY(k.WIDTH / 2, k.HEIGHT / 2)));
                h.overlayAndImageAsTVAnimation(h.overlay, a);
                if (0 == h.superCreatures.length) a.owner.addChild((new j).add(d.atlas.createSprite("big_star").centerAnchor().setXY(0.67 * a.getNaturalWidth(), 0.65 * a.getNaturalHeight()))), a.owner.addChild((new j).add((new G(d.fontRobotoBlackItalicBig, "10 X")).setXY(0.28 * a.getNaturalWidth(),
                    0.6 * a.getNaturalHeight()).setScale(1 / n.scale))), d.gameState.stars += 10, h.topBar.starsDisplay += 10, h.topBar.updateText(), f.reportEvent("social_gift_received", {
                    key: b,
                    type: "stars",
                    value: 10
                });
                else if (0 < c.length) {
                    var c = h.superCreatures[o.random(h.superCreatures.length)],
                        e = d.atlas.createSprite(c.config.image),
                        g = d.atlas.createSprite(o.string(c.config.indicator_image) + "_on");
                    a.owner.addChild((new j).add(e.centerAnchor().setXY(a.getNaturalWidth() / 2 - g.getNaturalWidth() / 2, 0.6 * a.getNaturalHeight())));
                    a.owner.addChild((new j).add(g.centerAnchor().setXY(e.x._value +
                        e.getNaturalWidth() / 2 + g.getNaturalWidth() / 2, e.y._value + e.getNaturalHeight() / 2 - g.getNaturalHeight() / 2)));
                    a.owner.addChild((new j).add((new G(d.fontRobotoBlackItalic, o.string(c.config.name) + " is ready!")).setAlign(N.Center).setXY(0.5 * a.getNaturalWidth(), 0.85 * a.getNaturalHeight()).setScale(1 / n.scale)));
                    c.fill();
                    Aa.saveState();
                    f.reportEvent("social_gift_received", {
                        key: b,
                        type: "fill_cooldown_time",
                        super_kizi_index: c.index,
                        ability: c.config.ability_function_name
                    })
                } else c = h.superCreatures[o.random(h.superCreatures.length)],
                    e = d.atlas.createSprite(c.config.image), g = d.atlas.createSprite(o.string(c.config.indicator_image) + "_on"), a.owner.addChild((new j).add(e.centerAnchor().setXY(a.getNaturalWidth() / 2 - g.getNaturalWidth() / 2, 0.6 * a.getNaturalHeight()))), a.owner.addChild((new j).add(g.centerAnchor().setXY(e.x._value + e.getNaturalWidth() / 2 + g.getNaturalWidth() / 2, e.y._value + e.getNaturalHeight() / 2 - g.getNaturalHeight() / 2))), a.owner.addChild((new j).add((new G(d.fontRobotoBlackItalic, o.string(c.config.name) + " added!")).setAlign(N.Center).setXY(0.5 *
                        a.getNaturalWidth(), 0.85 * a.getNaturalHeight()).setScale(1 / n.scale))), c.fill(), Aa.saveState(), f.reportEvent("social_gift_received", {
                        key: b,
                        type: "add_active",
                        super_kizi_index: c.index,
                        ability: c.config.ability_function_name
                    });
                d.save()
            }
    };
    H.send = function(a) {
        null == a && (a = !1);
        if (H.isFetchingShortenUrl && !a) h.overlay.owner.addChild((new j).add(new H));
        else if (null == H.shortenGiftUrl) {
            var b = t.generateRandomString(5);
            H.addUsedKey(b);
            f.reportEvent("sending_social_gift", {
                key: b,
                is_shorten_url: !1
            });
            m._platform.getExternal().call("SHARE_IN_WHATSAPP", ["Play KiziLand with me and get a gift: ", "sgc=" + function() {
                var a = Va.encode(b + H.salt);
                return s.substr(a, 0, 8)
            }(this) + "&sgk=" + b])
        } else H.addUsedKey(H.keyForShortenUrl), a = H.shortenGiftUrl, H.shortenGiftUrl = null, f.reportEvent("sending_social_gift", {
            key: H.keyForShortenUrl,
            is_shorten_url: !0
        }), m._platform.getExternal().call("SHARE_IN_WHATSAPP", ["Play KiziLand with me and get a gift: ", !1, a])
    };
    H.addUsedKey = function(a) {
        H.initUsedKeys();
        H.usedKeys.push(a);
        d.gameState.socialGiftsUsedKeys = H.usedKeys;
        d.save()
    };
    H.__super__ = R;
    H.prototype = x(R.prototype, {
        get_name: function() {
            return "SocialGift_2"
        },
        onUpdate: function(a) {
            this._waitingTime += a;
            if (!H.isFetchingShortenUrl || 4 < this._waitingTime) H.send(!0), this.owner.dispose()
        },
        __class__: H
    });
    var Da = function() {
        null == Da.starsEmitterMold && (Da.starsEmitterMold = new A(d.bootstrapPack, "stars"), Da.starsEmitterMold.texture = d.atlas.getTexture("Particle_star"), Da.starsEmitterMold.emitXVariance = k.WIDTH / 2, Da.starsEmitterMold.emitYVariance = k.HEIGHT / 4);
        ja.call(this, Da.starsEmitterMold);
        this.hasCreatureMovingEffect = this.isFront = !1;
        this.setXY(k.WIDTH / 2, k.HEIGHT / 4)
    };
    i["kiziland.StarsParticlesSprite"] = Da;
    Da.__name__ = ["kiziland", "StarsParticlesSprite"];
    Da.__super__ = ja;
    Da.prototype = x(ja.prototype, {
        __class__: Da
    });
    var Aa = function(a, b, c) {
        if (null == this.amountForLevelMem) {
            this.amountForLevelMem = [1];
            for (var e = 1, f = k.MAX_SUPER_CREATURE_LEVEL; e < f;) {
                var g = e++;
                this.amountForLevelMem.push(this.amountForLevelMem[g - 1] + 3 + 2 * (g - 1))
            }
        }
        this.index = a;
        this.amount = b;
        this.config = d.gSuperCreaturesConfig[this.index];
        this._activeTimes = c;
        0 == this._activeTimes && null != d.gameState.superCreatureCookingDT[this.index] && d.gameState.superCreatureCookingDT[this.index] >= C.__cast(this.config.cooking_time_sec, Lc) && (this._activeTimes = 1)
    };
    i["kiziland.SuperCreature"] = Aa;
    Aa.__name__ = ["kiziland", "SuperCreature"];
    Aa.addToGame = function(a) {
        var b = h.superCreatures.filter(function(b) {
            return b.index == a
        })[0];
        null == b ? (b = new Aa(a, 1, 0), h.superCreatures.push(b), null != h.currentWorld && h.currentWorld.showSuperCreatureBar(h.superCreatures.length -
            1)) : b.amount += 1;
        b.fill();
        Aa.saveState();
        f.reportEvent("super_kizi_added", {
            super_kizi_index: b.index,
            ability: b.config.ability_function_name,
            amount: b.amount
        });
        return b
    };
    Aa.saveState = function() {
        for (var a = [], b = 0, c = h.superCreatures; b < c.length;) {
            var e = c[b];
            ++b;
            a.push(e.getState())
        }
        d.gameState.superCreatures = a
    };
    Aa.prototype = {
        fill: function() {
            if (null == d.gameState.superCreatureCookingDT[this.index] || d.gameState.superCreatureCookingDT[this.index] <= C.__cast(this.config.cooking_time_sec, Lc) && 0 < d.gameState.superCreatureCookingDT[this.index]) d.gameState.superCreatureCookingDT[this.index] =
                this.config.cooking_time_sec;
            this._activeTimes += 1
        },
        getState: function() {
            return {
                index: this.index,
                amount: this.amount,
                active_times: this._activeTimes
            }
        },
        abilityDurationSec: function() {
            return this.config.ability_duration_sec + 5 * (this.amount - 1)
        },
        newBar: function() {
            var a = this;
            this.bar = d.atlas.createSprite("Skizi_indicator_bg");
            this.bar.setScale(1 / n.scale);
            (new j).add(this.bar);
            this.bar.owner.addChild((new j).add(d.atlas.createSprite(o.string(this.config.indicator_image) + "_off")));
            this._fillImage = d.atlas.createSprite(o.string(this.config.indicator_image) +
                "_on");
            this._fillImage.scissor = new Ha(0, this._fillImage.getNaturalHeight(), this._fillImage.getNaturalWidth(), 0);
            this.bar.owner.addChild((new j).add(this._fillImage));
            this._activeImage = d.atlas.createSprite("Skizi_indicator_active");
            this.bar.owner.addChild((new j).add(this._activeImage));
            this._badgeImage = d.atlas.createSprite("Gift_badge");
            this.bar.owner.addChild((new j).add(this._badgeImage.setXY(0.6 * this.bar.getNaturalWidth() * this.bar.scaleX._value, 0.6 * this.bar.getNaturalHeight() * this.bar.scaleY._value)));
            this._badgeText = new G(d.fontRobotoBold, "" + this._activeTimes);
            this._badgeText.setAlign(N.Center);
            this._badgeImage.owner.addChild((new j).add(this._badgeText.setXY(this._badgeImage.getNaturalWidth() / 2, this._badgeImage.getNaturalHeight() / 2 - this._badgeText._font.lineHeight / 2)));
            this.setBarFill();
            this.bar.get_pointerDown().connect(function() {
                a.onBarClicked()
            });
            return this.bar
        },
        onBarClicked: function() {
            var a = this,
                b = d.gameState.superCreatureCookingDT[this.index];
            this.isAbilityActive() && (this.abilityDurationSec(),
                this.abilityDurationSec());
            b >= this.config.cooking_time_sec ? (h.ctx.playSound("activate_super_kizi"), p.callMethod(this, p.field(this, this.config.ability_function_name), []), d.gameState.superCreatureCookingDT[this.index] = -this.abilityDurationSec(), 0 < this._activeTimes && (this._activeTimes -= 1), null != h.currentWorld && this.setBarFill(), Aa.saveState(), f.reportEvent("super_kizi_activated", {
                super_kizi_index: this.index,
                ability: this.config.ability_function_name
            })) : 0 <= b ? Ea.newReadyIn(o.string(this.config.indicator_image) +
                "_on", function() {
                    var b = new G(d.fontRobotoBold, ""),
                        e = Math.round(a.config.cooking_time_sec - d.gameState.superCreatureCookingDT[a.index]);
                    0 > e ? b.set_text("READY!") : b.set_text(t.getClockString(e));
                    b.setAlign(N.Center).setAnchor(0, d.fontRobotoBold.lineHeight / 2).setScale(1 / n.scale);
                    return (new j).add(b)
                }) : Ea.newEndsIn(o.string(this.config.indicator_image) + "_on", function() {
                var b = new G(d.fontRobotoBold, ""),
                    e = -Math.round(d.gameState.superCreatureCookingDT[a.index]);
                0 > e ? b.set_text("Done") : b.set_text(t.getClockString(e));
                b.setAlign(N.Center).setAnchor(0, d.fontRobotoBold.lineHeight / 2).setScale(1 / n.scale);
                return (new j).add(b)
            })
        },
        setBarFill: function() {
            var a = d.gameState.superCreatureCookingDT[this.index],
                a = this.isAbilityActive() ? 1 - (this.abilityDurationSec() + a) / this.abilityDurationSec() : a / this.config.cooking_time_sec,
                b = 0.0714 * this._fillImage.getNaturalHeight() * this._fillImage.scaleY._value,
                c = 0.0714 * this._fillImage.getNaturalHeight() * this._fillImage.scaleY._value;
            this._fillImage.scissor.height = -((this._fillImage.getNaturalHeight() *
                this._fillImage.scaleY._value - c - b) * Math.min(a, 1) + b);
            this._badgeText.set_text("" + this._activeTimes);
            1 > a && !this.isAbilityActive() ? (null != this._activeImageTimer && (this._activeImageTimer.stop(), this._activeImageTimer = null), this._activeImage.set_visible(!1), this._fillImage.setAlpha(0.6), this._badgeImage.set_visible(!1)) : (this.isAbilityActive() ? (null == this._activeImageTimer && this.setActiveImageTimer(), this._badgeImage.set_visible(0 < this._activeTimes)) : (this._activeImage.set_visible(!1), this._badgeImage.set_visible(1 <
                this._activeTimes)), this._fillImage.setAlpha(1))
        },
        setActiveImageTimer: function() {
            var a = this;
            null != this._activeImageTimer && this._activeImageTimer.stop();
            this._activeImage.set_visible(!0);
            this._activeImageTimer = new P(300);
            this._activeImageTimer.run = function() {
                a._activeImage.set_visible(0 == (a._activeImage._flags & 2))
            }
        },
        doubleCoinsPerSec: function() {
            d.gameState.doubleCoinsPerSecSecLeft = this.abilityDurationSec();
            null != h.topBar && h.topBar.updateText()
        },
        quaterEggTime: function() {
            d.gameState.quaterEggTimeSecLeft =
                this.abilityDurationSec()
        },
        quaterPresentTime: function() {
            d.gameState.quaterPresentTimeSecLeft = this.abilityDurationSec()
        },
        higherCreaturesInEggs: function() {
            d.gameState.higherCreaturesInEggsSecLeft = this.abilityDurationSec()
        },
        autoMergeCreatures: function() {
            d.gameState.autoMergeCreaturesSecLeft = this.abilityDurationSec();
            d.gameState.lastAutoMergeCreatureDT = k.SECONDS_BETWEEN_AUTO_MERGES + 1
        },
        isAbilityActive: function() {
            return 0 > d.gameState.superCreatureCookingDT[this.index]
        },
        leftActiveSeconds: function() {
            return this.isAbilityActive() ?
                Math.abs(d.gameState.superCreatureCookingDT[this.index]) : 0
        },
        onUpdate: function(a) {
            null == d.gameState.superCreatureCookingDT[this.index] && (d.gameState.superCreatureCookingDT[this.index] = 0);
            0 > d.gameState.superCreatureCookingDT[this.index] && 0 <= d.gameState.superCreatureCookingDT[this.index] + a && f.reportEvent("super_kizi_unactivated", {
                super_kizi_index: this.index,
                ability: this.config.ability_function_name
            });
            d.gameState.superCreatureCookingDT[this.index] += a;
            0 < this._activeTimes && d.gameState.superCreatureCookingDT[this.index] <=
                C.__cast(this.config.cooking_time_sec, Lc) && 0 < d.gameState.superCreatureCookingDT[this.index] && (d.gameState.superCreatureCookingDT[this.index] = this.config.cooking_time_sec);
            null != this.bar && this.setBarFill()
        },
        __class__: Aa
    };
    var La = function(a, b, c, e) {
        ka.call(this, a, b, c, !1);
        this.superCreatureIndex = e;
        null != this._world && !this._world.isFake && (this.texture = d.atlas.getTexture(d.gSuperCreaturesConfig[this.superCreatureIndex].egg_image))
    };
    i["kiziland.SuperCreatureEgg"] = La;
    La.__name__ = ["kiziland", "SuperCreatureEgg"];
    La.newRandomly = function(a) {
        var b = o.random(d.gSuperCreaturesConfig.length);
        if (null != d.gameState.lastSuperCreatureReceived || h.isFullGameSimulate && 1 == b)
            for (; b == d.gameState.lastSuperCreatureReceived || h.isFullGameSimulate && 1 == b;) b = o.random(d.gSuperCreaturesConfig.length);
        d.gameState.lastSuperCreatureReceived = b;
        a = new La(a, -150, -150, b);
        a.x.set__(a.getRandomX());
        return a
    };
    La.__super__ = ka;
    La.prototype = x(ka.prototype, {
        onPointerDownAction: function() {
            var a = this;
            this.dispose();
            h.ctx.playSound("hatch_super_kizi_egg");
            var b = Aa.addToGame(this.superCreatureIndex),
                c = d.atlas.createSprite(b.config.image);
            c.disablePointer();
            c.setAnchor(c.getNaturalWidth() / 2, c.getNaturalHeight());
            c.setScale(0);
            var e = new ba,
                f = new ca([new X([new u(c.scaleX, 1, 0.5, r.sineInOut), new u(c.scaleY, 1, 0.6, r.sineInOut)]), new u(c.scaleX, 1, 1, r.sineInOut), new X([new u(c.x, k.WIDTH / 2, 0.5, r.sineInOut), new u(c.y, k.HEIGHT / 2 + 5 * c.getNaturalHeight() / 2, 0.5, r.sineInOut), new u(c.scaleX, 5, 0.5, r.sineInOut), new u(c.scaleY, 5, 0.5, r.sineInOut), new u(c.alpha, 0.5, 0.5,
                    r.sineInOut)]), new X([new u(c.alpha, 1, 0.5, r.sineInOut), new u(c.x, b.bar.x._value + b.bar.getNaturalWidth() / 2, 0.7, r.sineInOut), new u(c.y, b.bar.y._value + b.bar.getNaturalHeight() / 2, 0.7, r.sineInOut), new u(c.scaleX, 0.1, 0.6, r.sineInOut), new u(c.scaleY, 0.1, 0.7, r.sineInOut)]), new W(function() {
                    c.set_visible(!1)
                }), new W(function() {
                    if (1 == b.amount) 0 == (h.wiki._flags & 2) && h.wiki.toggle(), h.wiki.showSuperCreature(h.superCreatures.indexOf(b));
                    else {
                        var a = d.atlas.createSprite("Skizi_level_up");
                        a.disablePointer().setScale(0).centerAnchor();
                        h.overlay.owner.parent.addChild((new j).add(a.setXY(k.WIDTH / 2, k.HEIGHT / 2)));
                        a.owner.addChild((new j).add(d.atlas.createSprite(b.config.image).centerAnchor().setXY(a.getNaturalWidth() / 2, 0.29 * a.getNaturalHeight())));
                        h.overlayAndImageAsTVAnimation(h.overlay, a)
                    }
                    c.owner.dispose()
                })]);
            e.run(f);
            var g = new oa("Skizi_open_egg", 1, 12);
            g.setScale(1.5);
            g.setAnchor(g.getNaturalWidth() / 2, g.getNaturalHeight());
            g.onFrameChanged.connect(function(d) {
                1 == d && (a._world.owner.addChild((new j).add(c.setXY(a.x._value, a.y._value))),
                    a._world.owner.addChild(b.bar.owner), c.owner.add(e))
            });
            g.onPlaysFinish.connect(function() {
                g.owner.dispose()
            });
            this._world.owner.addChild((new j).add(g.setXY(this.x._value, this.y._value)))
        },
        getState: function() {
            return {
                pos_x: this.getRelativeX(),
                pos_y: this.getRelativeY(),
                super_creature_index: this.superCreatureIndex
            }
        },
        getMinX: function() {
            return Math.ceil(0.1 * k.WIDTH + this.anchorX._value)
        },
        getMaxX: function() {
            return Math.floor(0.9 * k.WIDTH - this.anchorX._value)
        },
        getMinY: function() {
            return Math.ceil(0.1 * k.HEIGHT +
                Math.ceil(1.5 * k.TOPBAR_HEIGHT) + this.anchorY._value)
        },
        getMaxY: function() {
            return Math.floor(0.9 * k.HEIGHT - k.TOPBAR_HEIGHT - Math.ceil(this.getNaturalHeight() - this.anchorY._value))
        },
        __class__: La
    });
    var mc = function() {
        var a = this;
        D.call(this, d.atlas.getTexture("Top_bar"));
        (new j).add(this);
        var b = d.atlas.createSprite("coin");
        b.get_pointerDown().connect(function() {
            h.creaturesStore.toggle()
        });
        this.owner.addChild((new j).add(b.setXY(0.01 * k.WIDTH, this.getNaturalHeight() / 2 - b.getNaturalHeight() / 2)));
        this.coinsDisplay =
            d.gameState.coins;
        this._coinsText = new G(d.fontRobotoBlackItalic, "");
        this._coinsText.setXY(b.x._value + b.getNaturalWidth() + 0.01 * k.WIDTH, this.getNaturalHeight() / 3 - d.fontRobotoBlackItalic.lineHeight / 2);
        this._coinsText.setAlign(N.Left);
        this._coinsText.setScale(1 / n.scale);
        this.owner.addChild((new j).add(this._coinsText));
        this._coinsPerSecText = new G(d.fontRobotoBlackItalicSmall, "");
        this._coinsPerSecText.setXY(this._coinsText.x._value, this.getNaturalHeight() / 3 + d.fontRobotoBlackItalic.lineHeight / 2);
        this._coinsPerSecText.setAlign(N.Left);
        this._coinsPerSecText.setScale(1 / n.scale);
        this.owner.addChild((new j).add(this._coinsPerSecText));
        this.starImage = d.atlas.createSprite("star");
        this.starImage.get_pointerDown().connect(function() {
            h.creaturesStore.toggle()
        });
        this.owner.addChild((new j).add(this.starImage.setXY(0.28 * k.WIDTH, this.getNaturalHeight() / 2 - this.starImage.getNaturalHeight() / 2)));
        this.starsDisplay = d.gameState.stars;
        this._starsText = new G(d.fontRobotoBlackItalic, "");
        this._starsText.setXY(this.starImage.x._value + this.starImage.getNaturalWidth() +
            0.01 * k.WIDTH, this.getNaturalHeight() / 2 - d.fontRobotoBlackItalic.lineHeight / 2);
        this._starsText.setAlign(N.Left);
        this._starsText.setScale(1 / n.scale);
        this.owner.addChild((new j).add(this._starsText));
        b = d.atlas.createSprite("Top_bar_line");
        this.owner.addChild((new j).add(b.setXY(0.5 * k.WIDTH, this.getNaturalHeight() / 2 - b.getNaturalHeight() / 2)));
        b = d.atlas.createSprite("GUI_sound");
        b.setXY(0.995 * k.WIDTH - b.getNaturalWidth(), this.getNaturalHeight() / 2 - b.getNaturalHeight() / 2);
        this.owner.addChild((new j).add(b));
        b.get_pointerDown().connect(function() {
            a.showSoundMenu()
        });
        var c = d.atlas.createSprite("GUI_wiki");
        c.setXY(b.x._value - 0.05 * k.WIDTH - b.getNaturalWidth(), this.getNaturalHeight() / 2 - b.getNaturalHeight() / 2);
        this.owner.addChild((new j).add(c));
        c.get_pointerDown().connect(function() {
            h.wiki.toggle();
            f.reportEvent("wiki_btn_clicked");
            d.showAdOnWikiOpen && d.showMidrollIfPossible()
        });
        this.creaturesStoreBtn = d.atlas.createSprite("GUI_store");
        this.creaturesStoreBtn.setXY(c.x._value - 0.05 * k.WIDTH - this.creaturesStoreBtn.getNaturalWidth(),
            this.getNaturalHeight() / 2 - this.creaturesStoreBtn.getNaturalHeight() / 2);
        this.owner.addChild((new j).add(this.creaturesStoreBtn));
        this.creaturesStoreBtn.get_pointerDown().connect(function() {
            h.creaturesStore.toggle();
            f.reportEvent("store_opened");
            d.showMidrollIfPossible()
        });
        var e = d.atlas.createSprite("Shop_badge");
        e.setXY(0.55 * this.creaturesStoreBtn.getNaturalWidth(), 0.08 * this.creaturesStoreBtn.getNaturalHeight());
        e.set_visible(h.creaturesStore.hasNewItem);
        this.creaturesStoreBtn.owner.addChild((new j).add(e));
        this.updateText();
        h.creaturesStore.onHasNewItem.connect(function() {
            e.set_visible(!0)
        });
        h.creaturesStore.onNewItemBought.connect(function() {
            e.set_visible(!1)
        })
    };
    i["kiziland.TopBar"] = mc;
    mc.__name__ = ["kiziland", "TopBar"];
    mc.__super__ = D;
    mc.prototype = x(D.prototype, {
        updateText: function() {
            this._starsText.set_text(o.string(this.starsDisplay));
            this._coinsText.set_text(t.formatNumber(this.coinsDisplay));
            var a = d.gameState.coinsPerSec;
            0 < d.gameState.doubleCoinsPerSecSecLeft && (a *= 2);
            this._coinsPerSecText.set_text(o.string(1E6 >
                a ? a + " /sec" : t.formatNumber(a) + " /sec"))
        },
        showSoundMenu: function() {
            var a = d.atlas.createSprite("Sound_bg");
            a.setScale(0).centerAnchor();
            h.overlay.owner.parent.addChild((new j).add(a.setXY(k.WIDTH / 2, k.HEIGHT / 2)));
            var b = d.atlas.createSprite("close_button");
            b.get_pointerDown().connect(function() {
                h.overlay.get_pointerDown().emit(null)
            }).once();
            a.owner.addChild((new j).add(b.setXY(0.82 * a.getNaturalWidth(), 0.04 * a.getNaturalHeight())));
            b = new $(0, 0.79 * a.getNaturalWidth(), 0.24 * a.getNaturalHeight());
            b.setAlpha(0);
            a.owner.addChild((new j).add(b.setXY(a.getNaturalWidth() / 2 - b.width._value / 2, 0.281 * a.getNaturalHeight())));
            var c = d.atlas.createSprite("Sound_on");
            c.disablePointer();
            c.set_visible(d.gameState.isMusicOn);
            a.owner.addChild((new j).add(c.setXY(0.74 * a.getNaturalWidth(), 0.31 * a.getNaturalHeight())));
            b.get_pointerDown().connect(function() {
                d.gameState.isMusicOn = !d.gameState.isMusicOn;
                c.set_visible(d.gameState.isMusicOn);
                null != h.bgMusig && h.bgMusig.volume.animateTo(d.gameState.isMusicOn ? 0.4 : 0, 0.5);
                d.save()
            });
            var e = new $(0, b.width._value, b.height._value);
            e.setAlpha(0);
            a.owner.addChild((new j).add(e.setXY(a.getNaturalWidth() / 2 - b.width._value / 2, 0.61 * a.getNaturalHeight())));
            var f = d.atlas.createSprite("Sound_on");
            f.disablePointer();
            f.set_visible(d.gameState.isSfxOn);
            a.owner.addChild((new j).add(f.setXY(0.74 * a.getNaturalWidth(), 0.639 * a.getNaturalHeight())));
            e.get_pointerDown().connect(function() {
                d.gameState.isSfxOn = !d.gameState.isSfxOn;
                f.set_visible(d.gameState.isSfxOn);
                d.save()
            });
            h.overlayAndImageAsTVAnimation(h.overlay,
                a)
        },
        __class__: mc
    });
    var Fb = function() {
        var a = this;
        U.call(this, d.atlas.getTexture("kizipedia_bg_kizi"));
        this.set_visible(!1);
        this._width = this.getNaturalWidth();
        this._height = this.getNaturalHeight();
        this._isKizisTab = !0;
        this.x.set__((k.WIDTH - this._width) / 2);
        (new j).add(this);
        var b = d.atlas.createSprite("close_button");
        b.get_pointerDown().connect((Ka = h.overlay.get_pointerDown(), wa(Ka, Ka.emit)));
        this.owner.addChild((new j).add(b.setXY(0.83 * this._width, 0.025 * this._height)));
        this._kizisTabBtn = d.atlas.createSprite("kizipedia_normal_on");
        this.owner.addChild((new j).add(this._kizisTabBtn.setXY(0.0642 * this._width, 0.159 * this._height)));
        this._superkizisTabBtn = d.atlas.createSprite("kizipedia_super_off");
        this.owner.addChild((new j).add(this._superkizisTabBtn.setXY(this._kizisTabBtn.x._value + this._kizisTabBtn.getNaturalWidth() - 1, this._kizisTabBtn.y._value)));
        this._kizisTabBtn.get_pointerDown().connect(function() {
            a.showCreature(a._currentCreatureIndex)
        });
        this._superkizisTabBtn.get_pointerDown().connect(function() {
            a.showSuperCreature(a._currentSuperCreatureIndex)
        });
        this._dataSprite = new y;
        this.owner.addChild((new j).add(this._dataSprite));
        this._dataSprite.scissor = new Ha(0.08 * this._width, 0.083 * this._height, 0.9 * this._width - 0.08 * this._width, 0.918 * this._height - 0.083 * this._height);
        this._backBtn = d.atlas.createSprite("pedia_arrow_left");
        this._backBtn.setXY(0.12 * this._width, 0.37 * this._height);
        this._backBtn.get_pointerDown().connect(function() {
            a._backBtn.set_visible(!1);
            a._isKizisTab ? a.showCreature(a._currentCreatureIndex - 1) : a.showSuperCreature(a._currentSuperCreatureIndex -
                1)
        });
        this._backBtn.set_visible(!1);
        this.owner.addChild((new j).add(this._backBtn));
        this._nextBtn = d.atlas.createSprite("pedia_arrow_right");
        this._nextBtn.setXY(0.88 * this._width - this._nextBtn.getNaturalWidth(), this._backBtn.y._value);
        this._nextBtn.get_pointerDown().connect(function() {
            a._nextBtn.set_visible(!1);
            a._isKizisTab ? a.showCreature(a._currentCreatureIndex + 1) : a.showSuperCreature(a._currentSuperCreatureIndex + 1)
        });
        this._nextBtn.set_visible(!1);
        this.owner.addChild((new j).add(this._nextBtn));
        b = d.atlas.createSprite("Pedia_share");
        b.setXY(this._width / 2 - b.getNaturalWidth() / 2, 0.85 * this._height);
        b.get_pointerDown().connect(function() {
            f.reportEvent("share_button_clicked");
            m._platform.getExternal().call("SHARE_IN_WHATSAPP", ["Play KiziLand with me:"])
        });
        this.owner.addChild((new j).add(b));
        this._currentSuperCreatureIndex = this._currentCreatureIndex = 0;
        this.showCreature(0);
        this.pointerSlideRight.connect(function(b) {
            b > 0.05 * a._width && 0 != (a._backBtn._flags & 2) && a._backBtn.get_pointerDown().emit(null)
        });
        this.pointerSlideLeft.connect(function(b) {
            b >
                0.05 * a._width && 0 != (a._nextBtn._flags & 2) && a._nextBtn.get_pointerDown().emit(null)
        })
    };
    i["kiziland.Wiki"] = Fb;
    Fb.__name__ = ["kiziland", "Wiki"];
    Fb.__super__ = U;
    Fb.prototype = x(U.prototype, {
        toggle: function() {
            var a = this;
            this.set_visible(0 == (this._flags & 2));
            0 != (this._flags & 2) ? (h.overlay.set_pointerEnabled(!0), h.overlay.get_pointerDown().connect(function() {
                    a.toggle()
                }).once(), h.overlay.alpha.animateTo(0.5, 0.3), this.y.animate(-this._height - 10, k.TOPBAR_HEIGHT + 10, 0.3, r.backInOut), this._dataSprite.owner.disposeChildren(),
                this._isKizisTab ? this.showCreature(this._currentCreatureIndex) : this.showSuperCreature(this._currentSuperCreatureIndex)) : (h.overlay.disablePointer(), h.overlay.setAlpha(0))
        },
        showSuperCreature: function(a) {
            this._isKizisTab && (this._isKizisTab = !1, this.texture = d.atlas.getTexture("kizipedia_bg_super"), this._kizisTabBtn.texture = d.atlas.getTexture("kizipedia_normal_off"), this._superkizisTabBtn.texture = d.atlas.getTexture("kizipedia_super_on"), this._dataSprite.owner.disposeChildren());
            var b, c, e, g, i, k, m;
            a < h.superCreatures.length ?
                (m = h.superCreatures[a], b = d.atlas.createSprite(m.config.image), c = d.atlas.createSprite(o.string(m.config.indicator_image) + "_on"), e = m.config.name, g = null == m.amount ? "null" : "" + m.amount, k = la.parse(1E3 * m.config.cooking_time_sec), i = o.string(k.hours) + ":" + t.addZeros(k.minutes, 2) + " h", k = la.parse(1E3 * m.abilityDurationSec()), k = o.string(k.minutes) + ":" + t.addZeros(k.seconds, 2) + " m", m = m.config.wiki_fact) : (b = d.atlas.createSprite("Kizipedia_unknown_super"), c = d.atlas.createSprite("Skizi_indicator_icon_unknown"), g = e = "???",
                    k = i = "????", m = "????? ??? ?? ?????? ??? ?????");
            c.centerAnchor().setScale(0.7);
            var p = this._dataSprite.owner.firstChild,
                q = new y;
            (new j).add(q);
            this._dataSprite.owner.addChild(q.owner, !1);
            var s = Q.sign(a - this._currentSuperCreatureIndex) * this._width;
            q.setXY(s, 0);
            q.owner.addChild((new j).add(b.setXY(this._width / 2 - b.getNaturalWidth() / 2, this._backBtn.y._value + this._backBtn.getNaturalHeight() / 2 - b.getNaturalHeight() / 2)));
            q.owner.addChild((new j).add((new G(d.fontRobotoBold, "Name: " + e)).setXY(0.122 * this._width,
                0.558 * this._height).setScale(1 / n.scale)));
            q.owner.addChild((new j).add((new G(d.fontRobotoBold, "Level: " + g)).setXY(0.122 * this._width, 0.596 * this._height).setScale(1 / n.scale)));
            q.owner.addChild((new j).add(c.setXY(0.8 * this._width, 0.598 * this._height)));
            q.owner.addChild((new j).add((new G(d.fontRobotoBold, "Charge: " + i)).setXY(0.122 * this._width, 0.65 * this._height).setScale(1 / n.scale)));
            q.owner.addChild((new j).add((new G(d.fontRobotoBold, "Active: " + k)).setXY(0.522 * this._width, 0.65 * this._height).setScale(1 /
                n.scale)));
            q.owner.addChild((new j).add((new G(d.fontRobotoBold, m)).setWrapWidth(0.7 * this._width).setAlign(N.Center).centerAnchor().setXY(this._width / 2, 0.74 * this._height).setScale(1 / n.scale)));
            q.x.animateBy(-s, 0.3, r.backInOut);
            null != p && (p._compMap.Sprite_0.x.animateTo(-s, 0.3, r.backInOut), P.delay(wa(p, p.dispose), 300));
            this._currentSuperCreatureIndex = a;
            0 < this._currentSuperCreatureIndex ? this._backBtn.set_visible(!0) : this._backBtn.set_visible(!1);
            this._currentSuperCreatureIndex < d.gSuperCreaturesConfig.length -
                1 ? this._nextBtn.set_visible(!0) : this._nextBtn.set_visible(!1);
            0 != (this._flags & 2) && f.reportEvent("wiki_page_show", {
                tab: "superkizis"
            })
        },
        showCreature: function(a) {
            this._isKizisTab || (this._isKizisTab = !0, this.texture = d.atlas.getTexture("kizipedia_bg_kizi"), this._kizisTabBtn.texture = d.atlas.getTexture("kizipedia_normal_on"), this._superkizisTabBtn.texture = d.atlas.getTexture("kizipedia_super_off"), this._dataSprite.owner.disposeChildren());
            var b, c, e, g;
            a <= d.gameState.maxCreatureLevelReached ? (e = new O(null, 0,
                0, a), g = e.getConfigData(), b = d.atlas.createSprite(g.image), c = g.name, e = o.string(e.coinsPerSec()), g = g.wiki_fact) : (b = d.atlas.createSprite("Kizipedia_unknown"), e = c = "???", g = "????? ??? ?? ?????? ??? ?????");
            var h = this._dataSprite.owner.firstChild,
                i = new y,
                k = Q.sign(a - this._currentCreatureIndex) * this._width;
            (new j).add(i.setXY(k, 0));
            this._dataSprite.owner.addChild(i.owner, !1);
            i.owner.addChild((new j).add(b.setXY(this._width / 2 - b.getNaturalWidth() / 2, this._backBtn.y._value + this._backBtn.getNaturalHeight() / 2 - b.getNaturalHeight() /
                2)));
            i.owner.addChild((new j).add((new G(d.fontRobotoBold, c)).setAlign(N.Center).setXY(this._width / 2, 0.58 * this._height).setScale(1 / n.scale)));
            i.owner.addChild((new j).add(d.atlas.createSprite("coin").setXY(0.29 * this._width - (null == e ? "null" : "" + e).length * d.fontRobotoBold.lineHeight / 7, 0.61 * this._height).setScale(1 / n.scale)));
            i.owner.addChild((new j).add((new G(d.fontRobotoBold, e + " / sec")).setAlign(N.Center).setXY(0.49 * this._width + (null == e ? "null" : "" + e).length * d.fontRobotoBold.lineHeight / 7 / 2, 0.63 * this._height).setScale(1 /
                n.scale)));
            i.owner.addChild((new j).add((new G(d.fontRobotoBold, g)).setWrapWidth(0.7 * this._width).setAlign(N.Center).centerAnchor().setXY(this._width / 2, 0.74 * this._height).setScale(1 / n.scale)));
            i.x.animateBy(-k, 0.3, r.backInOut);
            null != h && (h._compMap.Sprite_0.x.animateTo(-k, 0.3, r.backInOut), P.delay(wa(h, h.dispose), 300));
            this._currentCreatureIndex = a;
            0 < this._currentCreatureIndex ? this._backBtn.set_visible(!0) : this._backBtn.set_visible(!1);
            this._currentCreatureIndex < d.gCreaturesConfig.length - 1 ? this._nextBtn.set_visible(!0) :
                this._nextBtn.set_visible(!1);
            0 != (this._flags & 2) && f.reportEvent("wiki_page_show", {
                tab: "kizis"
            })
        },
        __class__: Fb
    });
    var Eb = function(a, b) {
        null == b && (b = !1);
        var c = this;
        y.call(this);
        this.index = a;
        this.isFake = b;
        this.visibleTimeSec = 0;
        (new j).add(this);
        var e = d.gWorldsConfig[this.index];
        this.bg = new U(d.atlas.getTexture(e.background_image));
        this._backEntity = new j;
        this._elementsEntity = new j;
        this._presentsEntity = new j;
        this._frontEntity = new j;
        for (var g = 0, i = this.index + 1; g < i;) {
            var m = g++;
            d.gWorldsConfig[m].is_receiving_eggs &&
                (this._firstWorldInWorldsPackIndex = m)
        }
        this.eggAsset = d.gWorldsConfig[this._firstWorldInWorldsPackIndex].egg_image;
        this.maxCreatureLevel = null == e.max_creature_level ? -1 : e.max_creature_level;
        this.minCreatureLevel = 0 == this.index ? 0 : Math.round(d.gWorldsConfig[this.index - 1].max_creature_level) + 1;
        this.isCreaturesFlyingAnimation = e.is_creatures_flying_animation;
        this.eggPlaceAsset = e.egg_place_image;
        this.elements = [];
        this._initialState = d.gameState.worlds[this.index];
        null == this._initialState && (this._initialState = {});
        if (null != p.fields(this._initialState.creatures)) {
            g = 0;
            for (i = p.fields(this._initialState.creatures); g < i.length;) m = i[g], ++g, m = p.field(this._initialState.creatures, m), this.addCreature(m.pos_x, m.pos_y, m.level, !0)
        }
        if (null != p.fields(this._initialState.superEggs)) {
            g = 0;
            for (i = p.fields(this._initialState.superEggs); g < i.length;) m = i[g], ++g, m = p.field(this._initialState.superEggs, m), this.addSuperCreatureEgg(m.pos_x, m.pos_y, m.super_creature_index, !0)
        }
        if (null != p.fields(this._initialState.eggs)) {
            g = 0;
            for (i = p.fields(this._initialState.eggs); g <
                i.length;) m = i[g], ++g, m = p.field(this._initialState.eggs, m), this.addCreatureEgg(m.pos_x, m.pos_y, m.is_higher_level_creature, !0)
        }
        if (null != p.fields(this._initialState.presents)) {
            g = 0;
            for (i = this._initialState.presents; g < i;) g++, this.addPresent()
        }
        if (!this.isFake) {
            this.owner.addChild((new j).add(this.bg));
            null != e.top_left_image && (g = d.atlas.createSprite(e.top_left_image), g.disablePointer(), this.owner.addChild((new j).add(g.setXY(0, k.TOPBAR_HEIGHT))));
            null != e.top_right_image && (g = d.atlas.createSprite(e.top_right_image),
                g.disablePointer(), this.owner.addChild((new j).add(g.setXY(k.WIDTH - g.getNaturalWidth(), k.TOPBAR_HEIGHT))));
            this.owner.addChild(this._backEntity);
            this.owner.addChild(this._elementsEntity);
            this.owner.addChild(this._presentsEntity);
            this.owner.addChild(this._frontEntity);
            null != e.bottom_left_image && (g = d.atlas.createSprite(e.bottom_left_image), g.disablePointer(), this.owner.addChild((new j).add(g.setXY(0, k.HEIGHT - g.getNaturalHeight()))));
            null != e.bottom_right_image && (g = d.atlas.createSprite(e.bottom_right_image),
                g.disablePointer(), this.owner.addChild((new j).add(g.setXY(k.WIDTH - g.getNaturalWidth(), k.HEIGHT - g.getNaturalHeight()))));
            null != e.effect_class && (this.effectSpriteClassName = e.effect_class, this.effectSprite = L.createInstance(L.resolveClass("kiziland." + this.effectSpriteClassName), []), this.effectSprite.isFront ? this._frontEntity.addChild((new j).add(this.effectSprite)) : this._backEntity.addChild((new j).add(this.effectSprite)));
            e = new U(d.atlas.getTexture("Egg_progress_bg"));
            this.owner.addChild((new j).add(e.setXY(0,
                0.106 * k.HEIGHT)));
            e.pointerClick.connect(function() {
                Ea.newReadyIn(c.eggAsset, function() {
                    var a = Math.round(h.getEggTimeSec(c._firstWorldInWorldsPackIndex) - d.gameState.eggGotDT[c._firstWorldInWorldsPackIndex]);
                    if (0 <= a) {
                        var b = new G(d.fontRobotoBold, "");
                        b.setAlign(N.Center).setAnchor(0, d.fontRobotoBold.lineHeight / 2).setScale(1 / n.scale);
                        (new j).add(b);
                        0 < a ? b.set_text(a + " Sec") : b.set_text("READY!");
                        return b.owner
                    }
                    a = d.atlas.createSprite("Time_remaining_full");
                    (new j).add(a.centerAnchor());
                    if (c.index != c._firstWorldInWorldsPackIndex) {
                        a.setXY(0, -a.getNaturalHeight());
                        var e = new U(d.atlas.getTexture("Time_remaining_button"));
                        a.owner.addChild((new j).add(e.setXY(0, 1.25 * a.getNaturalHeight())));
                        e.get_pointerDown().connect(function() {
                            e.texture = d.atlas.getTexture("Time_remaining_button_pressed");
                            f.reportEvent("change_world_straight_to_first_btn_clicked", {
                                source_world_index: c.index
                            });
                            h.changeWorld(c._firstWorldInWorldsPackIndex);
                            h.overlay.get_pointerDown().emit(null)
                        }).once()
                    }
                    return a.owner
                })
            });
            this._eggProgressBarFillSpaceImage = d.atlas.createSprite("Progress_bar_bg");
            this._eggProgressBarFillSpaceImage.setXY(0.252 * e.getNaturalWidth(), e.getNaturalHeight() / 2 - this._eggProgressBarFillSpaceImage.getNaturalHeight() / 2);
            this._eggProgressBarGlowImage = d.atlas.createSprite("Progress_fill_full_glow");
            e.owner.addChild((new j).add(this._eggProgressBarGlowImage.setXY(this._eggProgressBarFillSpaceImage.x._value - 0.056 * this._eggProgressBarGlowImage.getNaturalWidth(), this._eggProgressBarFillSpaceImage.y._value - 0.305 * this._eggProgressBarGlowImage.getNaturalHeight())));
            this._eggProgressBarGlowImage.set_visible(!1);
            e.owner.addChild((new j).add(this._eggProgressBarFillSpaceImage));
            g = new y;
            g.scissor = new Ha(0, 0, this._eggProgressBarFillSpaceImage.getNaturalWidth(), this._eggProgressBarFillSpaceImage.getNaturalHeight());
            e.owner.addChild((new j).add(g.setXY(this._eggProgressBarFillSpaceImage.x._value, this._eggProgressBarFillSpaceImage.y._value)));
            this._eggProgressBarFillImage = d.atlas.createSprite("Present_progress_fill");
            g.owner.addChild((new j).add(this._eggProgressBarFillImage.setXY(-this._eggProgressBarFillImage.getNaturalWidth(),
                0)));
            e.owner.addChild((new j).add(d.atlas.createSprite(this.eggAsset).setXY(this._eggProgressBarFillSpaceImage.x._value / 2, 0.2 * e.getNaturalHeight()).centerAnchor().setScale(0.6)));
            this.setEggProgressBarFill(0);
            e = new U(d.atlas.getTexture("Present_progress_bg"));
            this.owner.addChild((new j).add(e.setXY(k.WIDTH - e.getNaturalWidth(), 0.106 * k.HEIGHT)));
            e.pointerClick.connect(function() {
                Ea.newReadyIn("Super_kizi_egg_generic", function() {
                    var a = new G(d.fontRobotoBold, ""),
                        b = Math.round((0 == h.superCreatures.length ?
                            k.EGGS_NEEDED_FOR_FIRST_SUPER_EGG : k.EGGS_NEEDED_FOR_SUPER_EGG) - d.gameState.eggsOpenedSinceLatsSuperEgg);
                    a.setAlign(N.Center).setAnchor(0, d.fontRobotoBold.lineHeight / 2).setScale(1 / n.scale);
                    if (0 > b) return a.set_text("READY!"), (new j).add(a);
                    a.set_text(null == b ? "null" : "" + b);
                    b = d.atlas.createSprite(c.eggAsset);
                    b.centerAnchor().setScale(0.5).setXY(-d.fontRobotoBold.lineHeight / 2 * (a._text.length + 1), 0);
                    (new j).addChild((new j).add(b));
                    b.owner.parent.addChild((new j).add(a));
                    var e = b.x;
                    e.set__(e._value + b.getNaturalWidth() *
                        b.scaleX._value / 2);
                    a = a.x;
                    a.set__(a._value + b.getNaturalWidth() * b.scaleX._value / 2);
                    return b.owner.parent
                })
            });
            this._superEggProgressBarFillSpaceImage = d.atlas.createSprite("Progress_bar_bg");
            e.owner.addChild((new j).add(this._superEggProgressBarFillSpaceImage.setXY(0.087 * e.getNaturalWidth(), e.getNaturalHeight() / 2 - this._superEggProgressBarFillSpaceImage.getNaturalHeight() / 2)));
            g = new y;
            g.scissor = new Ha(0, 0, this._superEggProgressBarFillSpaceImage.getNaturalWidth(), this._superEggProgressBarFillSpaceImage.getNaturalHeight());
            e.owner.addChild((new j).add(g.setXY(this._superEggProgressBarFillSpaceImage.x._value, this._superEggProgressBarFillSpaceImage.y._value)));
            this._superEggProgressBarFillImage = d.atlas.createSprite("Present_progress_fill");
            g.owner.addChild((new j).add(this._superEggProgressBarFillImage.setXY(-this._superEggProgressBarFillImage.getNaturalWidth(), 0)));
            e.owner.addChild((new j).add(d.atlas.createSprite("Super_kizi_egg_generic").setXY(this._superEggProgressBarFillSpaceImage.x._value + this._superEggProgressBarFillSpaceImage.getNaturalWidth() +
                (e.getNaturalWidth() - (this._superEggProgressBarFillSpaceImage.x._value + this._superEggProgressBarFillSpaceImage.getNaturalWidth())) / 2, 0.2 * e.getNaturalHeight()).centerAnchor().setScale(0.6)));
            this.setSuperEggProgressBarFill(0);
            if (this.index < d.gWorldsConfig.length - 1 && null != d.gameState.worlds[this.index + 1]) {
                var o = new U(d.atlas.getTexture("arrow_up"));
                o.centerAnchor().setXY(k.WIDTH / 2, k.TOPBAR_HEIGHT + o.anchorY._value + 0.02 * k.HEIGHT);
                o.pointerClick.connect(function() {
                    0 == c.elements.filter(function(a) {
                            return a.preventChangingWorld
                        }).length &&
                        (f.reportEvent("change_world_up_btn_clicked", {
                            source_world_index: c.index
                        }), h.changeWorld(c.index + 1))
                });
                this._frontEntity.addChild((new j).add(o));
                this.bg.pointerSlideDown.connect(function(a) {
                    a > 0.05 * k.HEIGHT && o.pointerClick.emit(null)
                })
            }
            if (0 < this.index && null != d.gameState.worlds[this.index - 1]) {
                var q = new U(d.atlas.getTexture("arrow_down"));
                q.centerAnchor().setXY(k.WIDTH / 2, 0.86 * k.HEIGHT);
                q.pointerClick.connect(function() {
                    0 == c.elements.filter(function(a) {
                        return a.preventChangingWorld
                    }).length && (f.reportEvent("change_world_down_btn_clicked", {
                        source_world_index: c.index
                    }), h.changeWorld(c.index - 1))
                });
                this._frontEntity.addChild((new j).add(q));
                this.bg.pointerSlideUp.connect(function(a) {
                    a > 0.05 * k.HEIGHT && q.pointerClick.emit(null)
                });
                d.gameState.isFirstArrowDownTutorialDone || this.showTapTutorial(q, function() {
                    d.gameState.isFirstArrowDownTutorialDone = !0;
                    f.reportEvent("tutorial_arrow_down_done")
                })
            }
            e = 0;
            for (g = h.superCreatures.length; e < g;) this.showSuperCreatureBar(e++)
        }
    };
    i["kiziland.World"] = Eb;
    Eb.__name__ = ["kiziland", "World"];
    Eb.__super__ = y;
    Eb.prototype =
        x(y.prototype, {
            addCreature: function(a, b, c, e) {
                null == e && (e = !1);
                c = new O(this, a, b, c);
                e && c.setRelativeXY(a, b);
                this._elementsEntity.addChild(c.owner);
                this.elements.push(c);
                !this._isShowingMergeTutorial && !d.gameState.isFirstMergeTutorialDone && (a = this.elements.filter(function(a) {
                    return C.__instanceof(a, O)
                }).map(function(a) {
                    return C.__cast(a, O)
                }), 2 <= a.length && this.showMergeTutorial(a[1], a[0]));
                return c
            },
            addCreatureEgg: function(a, b, c, e) {
                null == e && (e = !1);
                c = new ka(this, a, b, c);
                e && c.setRelativeXY(a, b);
                this._elementsEntity.addChild(c.owner);
                this.elements.push(c);
                !this._isShowingEggTutorial && !d.gameState.isFirstEggTutorialDone && this.showTapEggTutorial(c);
                return c
            },
            addEggRandomly: function(a) {
                null == a && (a = !0);
                var b = this;
                if (this.elements.length >= k.MAX_WORLD_ELEMENTS) return null;
                var c = ka.newInRandomX(this);
                a ? c.animateToRandomY() : c.setRandomPos();
                this._elementsEntity.addChild(c.owner);
                this.elements.push(c);
                this.saveState();
                !this._isShowingEggTutorial && !d.gameState.isFirstEggTutorialDone && P.delay(function() {
                    b.showTapEggTutorial(c)
                }, 700);
                return c
            },
            addSuperCreatureEgg: function(a, b, c, d) {
                null == d && (d = !1);
                c = new La(this, a, b, c);
                d && c.setRelativeXY(a, b);
                this._elementsEntity.addChild(c.owner);
                this.elements.push(c);
                return c
            },
            addSuperCreatureEggRandomly: function() {
                var a = La.newRandomly(this);
                a.animateToRandomY();
                this._elementsEntity.addChild(a.owner);
                this.elements.push(a);
                this.saveState();
                return a
            },
            addPresent: function() {
                var a = new Wa(this);
                this._presentsEntity.addChild(a.owner);
                this.elements.push(a);
                !this._isShowingPresentTutorial && !d.gameState.isFirstPresentTutorialDone &&
                    this.showLongTapTutorial(a);
                return a
            },
            showSuperCreatureBar: function(a) {
                var b = h.superCreatures[a].newBar();
                b.setXY(k.WIDTH / 5 * (a + 0.1), k.HEIGHT - b.getNaturalHeight() * b.scaleY._value);
                this.owner.addChild(b.owner)
            },
            setEggProgressBarFill: function(a) {
                null == a && (a = 0.1);
                if (!(d.gameState.eggGotDT.length < this._firstWorldInWorldsPackIndex + 1)) {
                    var b = d.gameState.eggGotDT[this._firstWorldInWorldsPackIndex] / h.getEggTimeSec(this._firstWorldInWorldsPackIndex);
                    1 > b && 0 != (this._eggProgressBarGlowImage._flags & 2) && (this._eggProgressBarGlowImage.set_visible(!1),
                        this._eggProgressBarFillImage.texture = d.atlas.getTexture("Present_progress_fill"), null != this._eggProgressBarGlowScript.owner && this._eggProgressBarGlowScript.dispose());
                    var c = new ba;
                    c.run(new ca([new u(this._eggProgressBarFillImage.x, -t.clampFloat(1 - b, 0, 1) * this._eggProgressBarFillSpaceImage.getNaturalWidth(), a), new W(function() {
                        c.owner.dispose()
                    })]));
                    this._eggProgressBarFillImage.owner.addChild((new j).add(c));
                    1 < b && 0 == (this._eggProgressBarGlowImage._flags & 2) && (this._eggProgressBarGlowImage.setAlpha(0),
                        this._eggProgressBarGlowImage.set_visible(!0), this._eggProgressBarFillImage.texture = d.atlas.getTexture("Progress_fill_full"), this._eggProgressBarGlowScript = new ba, this._eggProgressBarGlowScript.run(new Db(new ca([new u(this._eggProgressBarGlowImage.alpha, 1, 0.3), new sa(0.1), new u(this._eggProgressBarGlowImage.alpha, 0, 0.3)]))), this._eggProgressBarGlowImage.owner.addChild((new j).add(this._eggProgressBarGlowScript)))
                }
            },
            setSuperEggProgressBarFill: function(a) {
                null == a && (a = 0.1);
                var b = this;
                null == d.gameState.eggsOpenedSinceLatsSuperEgg &&
                    (d.gameState.eggsOpenedSinceLatsSuperEgg = 0);
                var c = d.gameState.eggsOpenedSinceLatsSuperEgg / (0 == h.superCreatures.length ? k.EGGS_NEEDED_FOR_FIRST_SUPER_EGG : k.EGGS_NEEDED_FOR_SUPER_EGG),
                    e = new ba;
                e.run(new ca([new u(this._superEggProgressBarFillImage.x, -t.clampFloat(1 - c, 0, 1) * this._superEggProgressBarFillImage.getNaturalWidth(), a), new W(function() {
                    1 <= c && (d.gameState.eggsOpenedSinceLatsSuperEgg = 0, b.setSuperEggProgressBarFill(), b.addSuperCreatureEggRandomly());
                    e.owner.dispose()
                })]));
                this._superEggProgressBarFillImage.owner.addChild((new j).add(e))
            },
            autoMergeCreature: function() {
                for (var a = 0, b = this.elements; a < b.length;) {
                    var c = b[a];
                    ++a;
                    if (C.__instanceof(c, ka) && !C.__instanceof(c, La) && null == c.y._behavior && null == c.scaleY._behavior) return C.__cast(c, ka).onPointerDownAction(), !0;
                    if (C.__instanceof(c, O) && (0 != (c._flags & 4) || h.isFullGameSimulate)) {
                        if (c = C.__cast(c, O), !c.isMouseDownOnMe && (c.level < d.gameState.maxCreatureLevelReached || h.isFullGameSimulate))
                            for (var e = 0, f = this.elements; e < f.length;) {
                                var g = f[e];
                                ++e;
                                if (C.__instanceof(g, O) && 0 != (g._flags & 4) && (g = C.__cast(g,
                                    O), !g.isMouseDownOnMe && c != g && c.level == g.level && c.mergeWith(g, !0))) return !0
                            }
                    } else if (h.isFullGameSimulate && C.__instanceof(c, Wa)) return C.__cast(c, Wa).open(), !0
                }
                return !1
            },
            autoMergeCreatureForce: function() {
                for (var a = 0, b = this.elements; a < b.length;) {
                    var c = b[a];
                    ++a;
                    if (C.__instanceof(c, ka) && !C.__instanceof(c, La) && null == c.y._behavior && null == c.scaleY._behavior) return C.__cast(c, ka).onPointerDownAction(), !0;
                    if (C.__instanceof(c, O) && (0 != (c._flags & 4) || h.isFullGameSimulate)) {
                        if (c = C.__cast(c, O), !c.isMouseDownOnMe)
                            for (var e = 0, f = this.elements; e < f.length;) {
                                var g = f[e];
                                ++e;
                                if (C.__instanceof(g, O) && 0 != (g._flags & 4) && (g = C.__cast(g, O), !g.isMouseDownOnMe && c != g && c.level == g.level && c.level < d.gCreaturesConfig.length - 1 && c.mergeWith(g, !0))) return !0
                            }
                    } else if (h.isFullGameSimulate && C.__instanceof(c, Wa)) return C.__cast(c, Wa).open(), !0
                }
                return !1
            },
            onRemoved: function() {
                y.prototype.onRemoved.call(this);
                this._isDisposed = !0
            },
            getState: function() {
                var a = {
                    creatures: [],
                    superEggs: [],
                    eggs: [],
                    presents: 0
                };
                null != d.gameState.worlds[this.index] && (a.halfEggTime = d.gameState.worlds[this.index].halfEggTime);
                for (var b = 0, c = this.elements; b < c.length;) {
                    var e = c[b];
                    ++b;
                    C.__instanceof(e, O) ? a.creatures.push(e.getState()) :
                        C.__instanceof(e, La) ? a.superEggs.push(e.getState()) : C.__instanceof(e, ka) ? a.eggs.push(e.getState()) : C.__instanceof(e, Wa) && (a.presents += 1)
                }
                return a
            },
            saveState: function() {
                d.gameState.worlds[this.index] = this.getState()
            },
            callFunctions: function(a, b) {
                for (var c = 0, d = 0, f = a.length; d < f;) {
                    var g = d++;
                    this.delay(a[g], c);
                    g < b.length && (c += b[g])
                }
            },
            delay: function(a, b) {
                var c = this;
                P.delay(function() {
                    c._isDisposed || a()
                }, b)
            },
            onUpdate: function(a) {
                y.prototype.onUpdate.call(this, a);
                if (!this.isFake) {
                    this.visibleTimeSec += a;
                    this.elements.sort(function(a,
                        b) {
                        return a.depth > b.depth ? -1 : a.depth < b.depth ? 1 : 0
                    });
                    for (var a = 0, b = this.elements; a < b.length;) {
                        var c = b[a];
                        ++a;
                        c.owner.parent.addChild(c.owner, !1)
                    }
                    this.setEggProgressBarFill()
                }
            },
            showTapEggTutorial: function(a) {
                this.showTapTutorial(a, function() {
                    d.gameState.isFirstEggTutorialDone = !0;
                    f.reportEvent("tutorial_egg_done")
                })
            },
            showTapTutorial: function(a, b) {
                this._isShowingEggTutorial = !0;
                var c = new oa("tutorial_click", -1, 4);
                c.disablePointer();
                this._frontEntity.addChild((new j).add(c.setXY(a.x._value - a.anchorX._value +
                    a.getNaturalWidth() / 2 - c.getNaturalWidth() / 4, (null != p.field(a, "depth") ? p.field(a, "depth") : a.y._value) - a.anchorY._value + a.getNaturalHeight() / 2 - c.getNaturalHeight() / 2)));
                a.get_pointerDown().connect(function() {
                    c.owner.dispose();
                    b()
                }).once()
            },
            showLongTapTutorial: function(a) {
                this._isShowingPresentTutorial = !0;
                a.removeAnimations();
                var b = new oa("tutorial_hold", -1, 4);
                b.disablePointer();
                this._frontEntity.addChild((new j).add(b.setXY(a.x._value - b.getNaturalWidth() / 4, a.y._value - b.getNaturalHeight() / 2)));
                a.get_pointerDown().connect(function() {
                    m._platform.getPointer().up.connect(function() {
                        null ==
                            a.owner && (b.owner.dispose(), d.gameState.isFirstPresentTutorialDone = !0, f.reportEvent("tutorial_present_done"))
                    }).once()
                })
            },
            showMergeTutorial: function(a, b) {
                var c = this;
                this._isShowingMergeTutorial = !0;
                a.removeAnimations();
                b.removeAnimations();
                var e = d.atlas.createSprite("tutorial_click0");
                e.disablePointer();
                this._frontEntity.addChild((new j).add(e.setXY(a.x._value - a.anchorX._value + a.getNaturalWidth() / 2 - e.getNaturalWidth() / 4, a.depth - a.anchorY._value + a.getNaturalHeight() / 2 - e.getNaturalHeight() / 2)));
                var g =
                    b.x._value - b.anchorX._value + b.getNaturalWidth() / 2 - e.getNaturalWidth() / 4,
                    h = b.depth - b.anchorY._value + b.getNaturalHeight() / 2 - e.getNaturalHeight() / 2,
                    i = Math.pow(Math.pow(g - e.x._value, 2) + Math.pow(h - e.y._value, 2), 0.5) / (0.4 * k.WIDTH),
                    n = new ba,
                    g = new ca([new sa(0.2), new W(function() {
                        e.texture = d.atlas.getTexture("tutorial_click1")
                    }), new sa(0.1), new X([new u(e.x, g, i, r.sineInOut), new u(e.y, h, i, r.sineInOut)]), new sa(0.1), new W(function() {
                        e.texture = d.atlas.getTexture("tutorial_click0")
                    }), new sa(0.2), new W(function() {
                        e.dispose();
                        d.gameState.isFirstMergeTutorialDone || c.showMergeTutorial(a, b)
                    })]);
                n.run(g);
                e.owner.addChild((new j).add(n));
                m._platform.getPointer().down.connect(function() {
                    m._platform.getPointer().up.connect(function() {
                        d.gameState.isFirstMergeTutorialDone && null != e.owner && (e.owner.dispose(), f.reportEvent("tutorial_merge_done"))
                    }).once()
                })
            },
            __class__: Eb
        });
    var Ka, Xc = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    i.Math = Math;
    Math.isFinite = function(a) {
        return isFinite(a)
    };
    Math.isNaN = function(a) {
        return isNaN(a)
    };
    String.prototype.__class__ = i.String = String;
    String.__name__ = ["String"];
    i.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = i.Date = Date;
    Date.__name__ = ["Date"];
    var Lc = i.Int = {
            __name__: ["Int"]
        },
        Yc = i.Dynamic = {
            __name__: ["Dynamic"]
        },
        Vc = i.Float = Number;
    Vc.__name__ = ["Float"];
    var Wc = i.Bool = Boolean;
    Wc.__ename__ = ["Bool"];
    var Zc = i.Class = {
            __name__: ["Class"]
        },
        $c = {};
    w.Element = "element";
    w.PCData = "pcdata";
    w.CData = "cdata";
    w.Comment = "comment";
    w.DocType = "doctype";
    w.ProcessingInstruction =
        "processingInstruction";
    w.Document = "document";
    f.isEventsTraceOnly = !1;
    //f.apiURLPrefix = "http://tools.funtomic.com/";
    //f.apiURLPrefix = "./";
    f.gameOpsVersion = "0.6.7";
    f.apiEventsLocation = "v2/events/";
    f.apiConfigLocation = "v1/config/";
    f.status = ea.UNINITIALIZED;
    f.MAX_SAVED_UNSENT_EVENTS = 1E3;
    f.localStorage = {};
    f.gameStateGameOpsData = {};
    f.firstSession = !1;
    f.isDebugMode = !1;
    f.levelsNumbers = [];
    f.deferredReportEvents = [];
    f.timers = {};
    f.HTML5API = p.field(window, "HTML5API");
    I.logLevel = 0;
    B._prefix = "";
    B._isErrorEventsSent = 0;
    Sa.instance = new Sa;
    Y.DISPATCHING_SENTINEL = new lb(null, null);
    m.root = new j;
    m.uncaughtError = new M;
    m.hidden = new ia(!1);
    m.volume = new v(1);
    m._platform = Sa.instance;
    m._calledInit = !1;
    y._scratchPoint = new sc;
    U.NAME = "Sprite_0";
    ga.__meta__ = {
        obj: {
            assets: [{
                splash: [{
                    bytes: 217799,
                    md5: "7a5dfa8a9b03c496e4fe74e990aa5709",
                    name: "change_to_portrait.png"
                }, {
                    bytes: 1124216,
                    md5: "f45e7d6d3425178c01888f2707fa9777",
                    name: "splash_screen.png"
                }],
                sounds: [{
                    bytes: 8832,
                    md5: "3d04b38d071f6ff732c45835f54c8c99",
                    name: "activate_super_kizi.mp3"
                }, {
                    bytes: 11421,
                    md5: "261b0e7f6eec088c12c3e11b0f0cd9d9",
                    name: "activate_super_kizi.ogg"
                }, {
                    bytes: 8320,
                    md5: "136055d3482dcf0ebbe35043898d01cb",
                    name: "active_coin_click.mp3"
                }, {
                    bytes: 11277,
                    md5: "4dde50aef1205c6ff5cd2de1312b0471",
                    name: "active_coin_click.ogg"
                }, {
                    bytes: 8320,
                    md5: "520516b92e1024b53542de294d4ffdb6",
                    name: "coin_purchase.mp3"
                }, {
                    bytes: 12640,
                    md5: "dccbeeb809973b19038cc991a6a470ff",
                    name: "coin_purchase.ogg"
                }, {
                    bytes: 8320,
                    md5: "a3aa59a85b7ee8dc406ba739843bf1d2",
                    name: "hatch_egg.mp3"
                }, {
                    bytes: 12207,
                    md5: "b9f2ba5699212ad01127cdcd2efff572",
                    name: "hatch_egg.ogg"
                }, {
                    bytes: 11904,
                    md5: "5fcc7f7f097419d3351952b648bf7a50",
                    name: "hatch_super_kizi_egg.mp3"
                }, {
                    bytes: 16576,
                    md5: "35df5905c08d599bbd85c1b9cdb78f71",
                    name: "hatch_super_kizi_egg.ogg"
                }, {
                    bytes: 14464,
                    md5: "6f4460197e07a5b27b0247305bfb7784",
                    name: "merge_final.mp3"
                }, {
                    bytes: 19604,
                    md5: "6a87e03b19e37d0552ba13b7c14567e5",
                    name: "merge_final.ogg"
                }, {
                    bytes: 9344,
                    md5: "4206c1decacae0a6d5f74d6d2ff79527",
                    name: "merge_kizis.mp3"
                }, {
                    bytes: 13255,
                    md5: "f0c6273d9769edaf5b16b32303bd6dc5",
                    name: "merge_kizis.ogg"
                }, {
                    bytes: 10880,
                    md5: "127f1818c6eae7d8a1eec4d9db1cb036",
                    name: "open_present.mp3"
                }, {
                    bytes: 14771,
                    md5: "83b359454fc027ab25a42dd84d851c9d",
                    name: "open_present.ogg"
                }, {
                    bytes: 7808,
                    md5: "1c7d92c6f80b713c5cf41211feb829c0",
                    name: "passive_coin1.mp3"
                }, {
                    bytes: 10472,
                    md5: "54c1bbfcf452ed690f779759f2ba3a77",
                    name: "passive_coin1.ogg"
                }, {
                    bytes: 7296,
                    md5: "6e88c71b01f1d4d09e87812386bac061",
                    name: "passive_coin2.mp3"
                }, {
                    bytes: 10406,
                    md5: "e076dc9f48c654c34e21b772251f71fa",
                    name: "passive_coin2.ogg"
                }, {
                    bytes: 7296,
                    md5: "b29250e67e5ddad2fa4af120c756a364",
                    name: "passive_coin3.mp3"
                }, {
                    bytes: 10294,
                    md5: "126bcac68b5cdc8c7d30f20faa35336f",
                    name: "passive_coin3.ogg"
                }, {
                    bytes: 8320,
                    md5: "d8daaef138a1ac9d53a42bc7de79f13f",
                    name: "passive_coin4.mp3"
                }, {
                    bytes: 10383,
                    md5: "603d60563f573f2c76b94b0fd91eb40b",
                    name: "passive_coin4.ogg"
                }, {
                    bytes: 10368,
                    md5: "6549d6211b2683e21d06f1eff7ce253c",
                    name: "star_purchase.mp3"
                }, {
                    bytes: 14024,
                    md5: "ee7af54b8c2580fb24829aee8a3e9481",
                    name: "star_purchase.ogg"
                }, {
                    bytes: 8320,
                    md5: "9e150d3528dae99e0d63b955c6191690",
                    name: "switch_regions_down.mp3"
                }, {
                    bytes: 9917,
                    md5: "8c61d70278c877a3df024a4c375ef5ef",
                    name: "switch_regions_down.ogg"
                }, {
                    bytes: 8320,
                    md5: "b94cc89966db7301ade6d33c424c1e8a",
                    name: "switch_regions_up.mp3"
                }, {
                    bytes: 9957,
                    md5: "3ff6cdb6fb9df0392ffdd74debb6a3ef",
                    name: "switch_regions_up.ogg"
                }],
                "1.5x": [{
                    bytes: 338226,
                    md5: "c3a312c0b0defa7289bbdf52932ab9e2",
                    name: "assets0.png"
                }, {
                    bytes: 4467,
                    md5: "155670c375f90ff623603836d0441c44",
                    name: "assets0.xml"
                }, {
                    bytes: 513811,
                    md5: "7f1f70060f40192a3c30c62263af1fa0",
                    name: "assets1.png"
                }, {
                    bytes: 1787,
                    md5: "cf191b107dde4cb07c6b8a9a567645c5",
                    name: "assets1.xml"
                }, {
                    bytes: 311996,
                    md5: "ad1d4e9b296eb0a2a126d29ba1cf0a40",
                    name: "assets2.png"
                }, {
                    bytes: 2135,
                    md5: "6e70284296bb07427d5b2136523b9a81",
                    name: "assets2.xml"
                }, {
                    bytes: 599558,
                    md5: "64d8b23d685defe87a98a93a25bdff14",
                    name: "assets3.png"
                }, {
                    bytes: 2858,
                    md5: "521c5dcc8a5884a7221d2041c73d1d09",
                    name: "assets3.xml"
                }, {
                    bytes: 545720,
                    md5: "c360172c7d29e054d66f9f52ea4bf5fe",
                    name: "assets4.png"
                }, {
                    bytes: 3090,
                    md5: "0af2246b3e6e905bf0b3b29445c99124",
                    name: "assets4.xml"
                }, {
                    bytes: 554784,
                    md5: "46540db43e0848d9e321beca7e8f9048",
                    name: "assets5.png"
                }, {
                    bytes: 2677,
                    md5: "9c1fb692ea02cf5b9d76a4e2b418a805",
                    name: "assets5.xml"
                }, {
                    bytes: 534583,
                    md5: "b777bbe74b22863cccb921932286d818",
                    name: "assets6.png"
                }, {
                    bytes: 6164,
                    md5: "447e02722d305a7ab94937a0e972b69b",
                    name: "assets6.xml"
                }, {
                    bytes: 845870,
                    md5: "b047c2efffa1df89852deba8722f9160",
                    name: "assets7.png"
                }, {
                    bytes: 9805,
                    md5: "0204f65a3e84b8bf7f1ae256222d9011",
                    name: "assets7.xml"
                }, {
                    bytes: 166745,
                    md5: "b9bfcaffe8afff6ee3a6eedaceccba14",
                    name: "assets8.png"
                }, {
                    bytes: 3806,
                    md5: "bce562e990eb83e81921dab719c42fdd",
                    name: "assets8.xml"
                }],
                "splash_screen.png": [],
                long_sounds: [{
                    bytes: 891520,
                    md5: "142dce199e034bc03f1348feaf51cf0e",
                    name: "gameplay_music.mp3"
                }, {
                    bytes: 842869,
                    md5: "5103eefb62af28fa8ea8936177cd9c55",
                    name: "gameplay_music.ogg"
                }],
                "4x": [{
                    bytes: 1112445,
                    md5: "6054008e6e238bbdae8052435ed9ce19",
                    name: "assets0.png"
                }, {
                    bytes: 2423,
                    md5: "7d17c19f6870c881b89ab24df359b0ef",
                    name: "assets0.xml"
                }, {
                    bytes: 2065382,
                    md5: "16cbeb1e69dcbc9f454a9204493aa6c0",
                    name: "assets1.png"
                }, {
                    bytes: 3543,
                    md5: "ac2e07b19ef038c8be6afecf96405e3e",
                    name: "assets1.xml"
                }, {
                    bytes: 698615,
                    md5: "e9007dd623b14e019368969956478228",
                    name: "assets10.png"
                }, {
                    bytes: 1817,
                    md5: "c7d393bcec18e92395d0ff944cace5ea",
                    name: "assets10.xml"
                }, {
                    bytes: 833704,
                    md5: "9b124d8b79135628702951dec23cc82a",
                    name: "assets11.png"
                }, {
                    bytes: 3869,
                    md5: "9e64c13a616fc3e3e3a490091c7b352f",
                    name: "assets11.xml"
                }, {
                    bytes: 1251344,
                    md5: "9db816d278803c3ccf3328c3c5d3f88a",
                    name: "assets12.png"
                }, {
                    bytes: 3078,
                    md5: "bf8d350684e3155a3bf1066e43708b8d",
                    name: "assets12.xml"
                }, {
                    bytes: 1401227,
                    md5: "5f9e49ee086b8a4e1f216b0c940389cf",
                    name: "assets13.png"
                }, {
                    bytes: 4695,
                    md5: "9820e905059dfe80204d95838436ae03",
                    name: "assets13.xml"
                }, {
                    bytes: 625229,
                    md5: "77e0b81dcdf3ee90c47b755d80d0891a",
                    name: "assets14.png"
                }, {
                    bytes: 3697,
                    md5: "d3992828f0e33af7ac239606de5c64fc",
                    name: "assets14.xml"
                }, {
                    bytes: 1098803,
                    md5: "8418235e239ded8f37b7b260aa88964e",
                    name: "assets2.png"
                }, {
                    bytes: 3135,
                    md5: "5f65cb7a60a083903ddd31a3bb9e6650",
                    name: "assets2.xml"
                }, {
                    bytes: 1510906,
                    md5: "af3a76d42ea5f64777ca084bbd4d55a5",
                    name: "assets3.png"
                }, {
                    bytes: 2063,
                    md5: "6dcd749b18ba7d8027b41a0ea0dc43c1",
                    name: "assets3.xml"
                }, {
                    bytes: 1414824,
                    md5: "8dd5f3096567519f421d5f73db42c6de",
                    name: "assets4.png"
                }, {
                    bytes: 1652,
                    md5: "5b1fd202240be8054a4e233be0ab40d6",
                    name: "assets4.xml"
                }, {
                    bytes: 1365943,
                    md5: "c8ce5900661e764c8a8277778c938384",
                    name: "assets5.png"
                }, {
                    bytes: 1371,
                    md5: "4caafc5f36243f8c54a664bc112a8f72",
                    name: "assets5.xml"
                }, {
                    bytes: 660311,
                    md5: "ac4cfa5a1c1d379c137840c086de6c08",
                    name: "assets6.png"
                }, {
                    bytes: 1658,
                    md5: "aea2f044f265bba506b094e8323fd1d3",
                    name: "assets6.xml"
                }, {
                    bytes: 669281,
                    md5: "725cb17f9a438ac424e989ef1b272da4",
                    name: "assets7.png"
                }, {
                    bytes: 3024,
                    md5: "4cd212d2ed913fc6c99cbc5261cd75aa",
                    name: "assets7.xml"
                }, {
                    bytes: 884417,
                    md5: "5389d4e5c12a124cb6278b691d55fc64",
                    name: "assets8.png"
                }, {
                    bytes: 2990,
                    md5: "3be550fd6fda5b545f2c14a7c9083569",
                    name: "assets8.xml"
                }, {
                    bytes: 1184940,
                    md5: "3fb70ee383f13580c3e01dc7ff7d2e2d",
                    name: "assets9.png"
                }, {
                    bytes: 3836,
                    md5: "0086b926fe11334449fa99e913aa5be4",
                    name: "assets9.xml"
                }],
                "2x": [{
                    bytes: 514617,
                    md5: "8da83ce619a386f557e683be902a5a24",
                    name: "assets0.png"
                }, {
                    bytes: 3885,
                    md5: "8e7b6992639b1fbaaaa8e54c5d5f3d19",
                    name: "assets0.xml"
                }, {
                    bytes: 631917,
                    md5: "474ce9fecbd2d18c00a58844d32fd583",
                    name: "assets1.png"
                }, {
                    bytes: 2228,
                    md5: "6fc73d6be30c93934fd0c8d10c0e3edd",
                    name: "assets1.xml"
                }, {
                    bytes: 299119,
                    md5: "ba2e8e83c20ecd928b5c3056f57de612",
                    name: "assets10.png"
                }, {
                    bytes: 1505,
                    md5: "bd427bbf57e249ad1911a075490f4888",
                    name: "assets10.xml"
                }, {
                    bytes: 505895,
                    md5: "9e3b5a076c77d2705215c8b5ea9ae254",
                    name: "assets11.png"
                }, {
                    bytes: 4119,
                    md5: "8dd66b0486a9773364409aeb8db7933c",
                    name: "assets11.xml"
                }, {
                    bytes: 566496,
                    md5: "fb8b64762febfd666d43c2cac2d1b8ed",
                    name: "assets12.png"
                }, {
                    bytes: 3844,
                    md5: "1725e1f510ccb69730a58f7e5cc6d6f9",
                    name: "assets12.xml"
                }, {
                    bytes: 636818,
                    md5: "896e6c24a5d48e428c11b6ec1b803016",
                    name: "assets13.png"
                }, {
                    bytes: 4836,
                    md5: "d5b04ecfadb438ffe8ebf7761b20bbba",
                    name: "assets13.xml"
                }, {
                    bytes: 465143,
                    md5: "1706dc97a30b3daf873bc511a637e8b8",
                    name: "assets14.png"
                }, {
                    bytes: 6197,
                    md5: "598c881e33fb6dd667baec24af5a6f6d",
                    name: "assets14.xml"
                }, {
                    bytes: 363081,
                    md5: "69accbb10ec9030903c27f7045b3fdf2",
                    name: "assets2.png"
                }, {
                    bytes: 2022,
                    md5: "b8b43b8debe590fbf4bef9a61bde2e5a",
                    name: "assets2.xml"
                }, {
                    bytes: 565306,
                    md5: "ea807cead776a57a02ac6a4940b9ebfa",
                    name: "assets3.png"
                }, {
                    bytes: 2444,
                    md5: "199aba3a91d1c96fe058281685ce7359",
                    name: "assets3.xml"
                }, {
                    bytes: 482981,
                    md5: "f5fa10469a0aad4e13c322179720f51d",
                    name: "assets4.png"
                }, {
                    bytes: 1278,
                    md5: "43b6f5e50a1fa6c39be122b555dc07ff",
                    name: "assets4.xml"
                }, {
                    bytes: 607012,
                    md5: "13d9ac9f5ed47306fda497d7c32ab884",
                    name: "assets5.png"
                }, {
                    bytes: 1566,
                    md5: "4e812137b4b4401545b9ae20c4a003bd",
                    name: "assets5.xml"
                }, {
                    bytes: 174816,
                    md5: "b147af543fb7b0c6e87a6f569ee664e8",
                    name: "assets6.png"
                }, {
                    bytes: 1710,
                    md5: "b6da78632a5c9206e583569dd2bc71e9",
                    name: "assets6.xml"
                }, {
                    bytes: 222064,
                    md5: "530419fc20c1a763439721bf5a683914",
                    name: "assets7.png"
                }, {
                    bytes: 1936,
                    md5: "0523a1c133344efb8aafa030e7186d23",
                    name: "assets7.xml"
                }, {
                    bytes: 221344,
                    md5: "148fd5d6719bdfa56d29b9545b2246c8",
                    name: "assets8.png"
                }, {
                    bytes: 1703,
                    md5: "fe0682ba537320d371b1bbf7d5f31415",
                    name: "assets8.xml"
                }, {
                    bytes: 359326,
                    md5: "41acee30e339937b4f88a69c5fbeb7d4",
                    name: "assets9.png"
                }, {
                    bytes: 3003,
                    md5: "75408742af5bf5253a7bb677727b8753",
                    name: "assets9.xml"
                }],
                "1x": [{
                    bytes: 638618,
                    md5: "59d16e53efbc600cd2965b6d772c0624",
                    name: "assets0.png"
                }, {
                    bytes: 4069,
                    md5: "98239fa6abf09136931be571459c7dfc",
                    name: "assets0.xml"
                }, {
                    bytes: 594009,
                    md5: "950d141aca033c040cb3a0be0741042e",
                    name: "assets1.png"
                }, {
                    bytes: 3980,
                    md5: "045178449a1bba69e07353d57323b6f5",
                    name: "assets1.xml"
                }, {
                    bytes: 616103,
                    md5: "7386912b8a91ccf5b6bde3ff2deff867",
                    name: "assets2.png"
                }, {
                    bytes: 10016,
                    md5: "fb4e4d8aadf34cb8a7a769fb01226b6b",
                    name: "assets2.xml"
                }, {
                    bytes: 515448,
                    md5: "018a09fb71f428936305dce5d4f555de",
                    name: "assets3.png"
                }, {
                    bytes: 14148,
                    md5: "746a2dbd36e620d260a5b950aec8dbe6",
                    name: "assets3.xml"
                }],
                bootstrap: [{
                    bytes: 9856,
                    md5: "2b62534007e704edeb3c42304ff4aaff",
                    name: "base-font-small.fnt"
                }, {
                    bytes: 5431,
                    md5: "b2f18750f99cbbab1bc128bc945a266c",
                    name: "base-font-small.png"
                }, {
                    bytes: 1427,
                    md5: "eb4d2ca4b567a65078e41f993ca56708",
                    name: "bubbles.pex"
                }, {
                    bytes: 3207,
                    md5: "c590f8a9b4b22c12607da1b122f4b4f5",
                    name: "empty_pixel.png"
                }, {
                    bytes: 12013,
                    md5: "b5ce8e3224f43f0b950ad86f58d246a8",
                    name: "font-hd.fnt"
                }, {
                    bytes: 37095,
                    md5: "b1ae829cc2a8cb4c06f815f796d2c37a",
                    name: "Font-hd.png"
                }, {
                    bytes: 12019,
                    md5: "efe4021030ba04bbaadcf0834139d166",
                    name: "font_small-hd.fnt"
                }, {
                    bytes: 24374,
                    md5: "f72e537952fac84f5ab9458786f77996",
                    name: "font_small-hd.png"
                }, {
                    bytes: 56816,
                    md5: "50c27f9c927c7ccf3291d857d0c38ed7",
                    name: "grilled_cheese_blue.fnt"
                }, {
                    bytes: 29002,
                    md5: "ac3b148e4d3ce878dac2552dd2198914",
                    name: "grilled_cheese_blue.png"
                }, {
                    bytes: 1403,
                    md5: "fb641b26994d12f186388d824250ce86",
                    name: "leaf.pex"
                }, {
                    bytes: 10576,
                    md5: "5e803ab2d16da64114d75ab4663a9246",
                    name: "Roboto-Black-1.5x.fnt"
                }, {
                    bytes: 10576,
                    md5: "ff23be4b7862d060c9dca499de9bddcb",
                    name: "Roboto-Black-1x.fnt"
                }, {
                    bytes: 10576,
                    md5: "6702563dfee54431ca2297f5d5701bd4",
                    name: "Roboto-Black-2x.fnt"
                }, {
                    bytes: 10576,
                    md5: "c7a38408fcb61d505d13fc9c7f152455",
                    name: "Roboto-Black-4x.fnt"
                }, {
                    bytes: 80655,
                    md5: "7efbd30e1d5a47a257b1a2bc8ee7f6a9",
                    name: "Roboto-Black.png"
                }, {
                    bytes: 10588,
                    md5: "43e20fcb0d726f5348af17473f724476",
                    name: "Roboto-BlackItalic-1.5x.fnt"
                }, {
                    bytes: 10588,
                    md5: "6f5c995d3dccc226e0a3f468892ef775",
                    name: "Roboto-BlackItalic-1x.fnt"
                }, {
                    bytes: 10588,
                    md5: "5b096d2de807e22a0ebdb2a7c4af86ee",
                    name: "Roboto-BlackItalic-2x.fnt"
                }, {
                    bytes: 10588,
                    md5: "88354c1a29d386fe036b2ead96c55e06",
                    name: "Roboto-BlackItalic-4x.fnt"
                }, {
                    bytes: 10594,
                    md5: "552d44d58de900a87d31e8e23397d9b2",
                    name: "Roboto-BlackItalic-big-1.5x.fnt"
                }, {
                    bytes: 10594,
                    md5: "0abc25e47f2a217aae0f0f8fa82ddf61",
                    name: "Roboto-BlackItalic-big-1x.fnt"
                }, {
                    bytes: 10594,
                    md5: "20baef1928b2495f31fc25ab8566aa65",
                    name: "Roboto-BlackItalic-big-2x.fnt"
                }, {
                    bytes: 10596,
                    md5: "8b13c5d779a43bbe1149bf07f70c8ece",
                    name: "Roboto-BlackItalic-big-4x.fnt"
                }, {
                    bytes: 206175,
                    md5: "59c3a596f7639ba1e39a7a06a0992a7e",
                    name: "Roboto-BlackItalic-big.png"
                }, {
                    bytes: 10594,
                    md5: "89ce64b8cb55fbc57cd9cc260f31392f",
                    name: "Roboto-BlackItalic-small-1.5x.fnt"
                }, {
                    bytes: 10593,
                    md5: "8429c98ee019dc0be9006fa2fa96269e",
                    name: "Roboto-BlackItalic-small-1x.fnt"
                }, {
                    bytes: 10594,
                    md5: "e2428212ad4e619042527a095808a665",
                    name: "Roboto-BlackItalic-small-2x.fnt"
                }, {
                    bytes: 10594,
                    md5: "753aef086e5efcb8fbb20eba71aa623b",
                    name: "Roboto-BlackItalic-small-4x.fnt"
                }, {
                    bytes: 69300,
                    md5: "a8301ecfd988344a4c0e3e3b4f616218",
                    name: "Roboto-BlackItalic-small.png"
                }, {
                    bytes: 101801,
                    md5: "9264043fa454b4937dfc2bf3609f9985",
                    name: "Roboto-BlackItalic.png"
                }, {
                    bytes: 10588,
                    md5: "acae0b47563489d47c35a91f1858b75f",
                    name: "Roboto-Bold-1.5x.fnt"
                }, {
                    bytes: 10588,
                    md5: "8b594690c07d7de475787ba8e1f8cb7a",
                    name: "Roboto-Bold-1x.fnt"
                }, {
                    bytes: 10588,
                    md5: "92a478a95f025d1d272983b2f11d8065",
                    name: "Roboto-Bold-2x.fnt"
                }, {
                    bytes: 10588,
                    md5: "eff2ae2d2cd34888e0c3207f5c9197ea",
                    name: "Roboto-Bold-4x.fnt"
                }, {
                    bytes: 10578,
                    md5: "b454053619b2a1ba3c65bfda55cc2352",
                    name: "Roboto-Medium-1.5x.fnt"
                }, {
                    bytes: 10578,
                    md5: "997f0385c3a8ac4d91349e5330c52e5d",
                    name: "Roboto-Medium-1x.fnt"
                }, {
                    bytes: 10578,
                    md5: "a439874f0a6d0e6aa2929a86e0a915ef",
                    name: "Roboto-Medium-2x.fnt"
                }, {
                    bytes: 10578,
                    md5: "8cdc4e7fb72b6cb5bd18d1c4872ce2cf",
                    name: "Roboto-Medium-4x.fnt"
                }, {
                    bytes: 74707,
                    md5: "273ea393711253888b8000afb72ca9ad",
                    name: "Roboto-Medium.png"
                }, {
                    bytes: 10591,
                    md5: "18832d71546451e0d3d64f80e152ff7d",
                    name: "Roboto-Regular-1.5x.fnt"
                }, {
                    bytes: 10591,
                    md5: "bdcd2befb0a822e66d5d3557759dfb6f",
                    name: "Roboto-Regular-1x.fnt"
                }, {
                    bytes: 10591,
                    md5: "e9be336b145db4f94b6892f5b175d120",
                    name: "Roboto-Regular-2x.fnt"
                }, {
                    bytes: 10591,
                    md5: "37ade169104a76ea190aa208de466979",
                    name: "Roboto-Regular-4x.fnt"
                }, {
                    bytes: 1440893,
                    md5: "a64f8d09eac6553c8b50fda3b43583f5",
                    name: "Roboto-Regular-Bold-White.png"
                }, {
                    bytes: 1401,
                    md5: "69a437ff9d4450e663744a5e6eacda28",
                    name: "snow.pex"
                }, {
                    bytes: 1370,
                    md5: "ae9d25d619d9023d0db84ba452211734",
                    name: "stars.pex"
                }]
            }]
        }
    };
    ga._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    xa.NEWLINE = new Pb(10);
    qa._sharedEvent =
        new Rb;
    fa._sharedEvent = new Sb;
    jb.CANVAS_TEXTURES = (new Pa("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    J._mediaRefCount = 0;
    J._detectBlobSupport = !0;
    z.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    z.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new Pa("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    K._detectSupport = !0;
    Ca._scratchMatrix = new Ga;
    Ma.USE_CACHE = !1;
    Ma.USE_ENUM_INDEX = !1;
    Ma.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    ha.DEFAULT_RESOLVER =
        L;
    ha.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    fb.count = 0;
    Ra.escapes = function() {
        var a = new ma;
        a.set("lt", "<");
        a.set("gt", ">");
        a.set("amp", "&");
        a.set("quot", '"');
        a.set("apos", "'");
        a.set("nbsp", String.fromCharCode(160));
        return a
    }(this);
    ta.NAME = "Sprite_1";
    k.GAME_VERSION = "0.0.4";
    k.DEFAULT_WIDTH = 1080;
    k.DEFAULT_HEIGHT = 1920;
    k.WIDTH = k.DEFAULT_WIDTH;
    k.HEIGHT = k.DEFAULT_HEIGHT;
    k.TOPBAR_HEIGHT = 150;
    k.MAX_WORLD_ELEMENTS = 10;
    k.EGG_TIME_SEC = 10;
    k.MAX_WANDER_DISTANCE = 40;
    k.MIN_WANDER_DISTANCE =
        10;
    k.WANDER_DURATION = 0.7;
    k.CHANCE_FOR_STAR_IN_EGG = 30;
    k.EGGS_NEEDED_FOR_FIRST_SUPER_EGG = 3;
    k.EGGS_NEEDED_FOR_SUPER_EGG = 3;
    k.PRESENT_TIME_SEC = 60;
    k.PRESENT_CLICKING_TIME_SEC = 3;
    k.PRESENT_LIVING_TIME_SEC = 30;
    k.MAX_SUPER_CREATURE_LEVEL = 5;
    k.SECONDS_BETWEEN_AUTO_MERGES = 1;
    k.FIRST_CREATURE_PRICE = 560;
    k.CREATURE_PRICE_LEVEL_EXPONENT_BASE = 2.8;
    k.CREATURE_PRICE_BOUGHT_EXPONENT_BASE = 1.15;
    k.HALF_TIME_EGGS_COINS_PRICE = 1E6;
    k.HALF_TIME_EGGS_STARS_PRICE = 50;
    k.MAX_REWARDED_VIDEOS_PER_DAY = 5;
    k.MIN_SEC_BETWEEN_REWARDED_VIDEOS =
        300;
    k.IS_NEW_BALANCE = !1;
    da.NAME = "Sprite_1";
    O.NAME = "Sprite_1";
    O.coinsPerSecMem = [0.5];
    O.isNoMoreCreaturesPopupShown = !1;
    ka.NAME = "Sprite_1";
    d.gConfig = {};
    d.gLocalNotifications = {};
    d.isSoundsPackLoaded = !1;
    d.isLongSoundsPackLoaded = !1;
    d.showAdOnNoAction5Sec = !1;
    d.showAdEveryNoAction5Sec = !1;
    d.showAdOnWikiOpen = !1;
    d.showAdOnWorldChangeAndNoAction3Sec = !1;
    d.showAdOnWorldChangeToFirst = !1;
    h.delataTimeFromLastTouch = 0;
    h.sendNoActionEventEvery = 5;
    h.sendNoActionEventDT = 0;
    h.worldChangedDT = 0;
    h.shouldShowAdForThisWorldChanged = !1;
    ua.NAME = "Sprite_1";
    F.earliestHour = 9;
    F.latestHour = 21;
    n.defaultConfig = {
        max_offline_counts_seconds: 7200,
        egg_time_seconds: 10,
        present_time_seconds: 60,
        present_clicking_time_seconds: 0.5,
        present_living_time_seconds: 30,
        max_world_elements: 10,
        max_rewarded_videos_per_day: 10,
        min_sec_between_rewarded_videos: 60,
        max_wander_distance: 40,
        min_wander_distance: 40,
        wander_duration_seconds: 0.7,
        chance_for_star_in_egg: 30,
        eggs_needed_for_first_super_egg: 100,
        eggs_needed_for_super_egg: 200,
        seconds_between_auto_merges: 1,
        first_creature_price: 400,
        creature_price_level_exponent_base: 2.8,
        creature_price_bought_exponent_base: 1.15,
        half_time_eggs_coins_price: 1E6,
        half_time_eggs_stars_price: 50,
        is_new_balance: !1,
        show_ad_on_no_action_5_sec: !1,
        show_ad_every_no_action_5_sec: !1,
        show_ad_on_wiki_open: !1,
        show_ad_on_world_change_and_no_action_3_sec: !1,
        show_ad_on_world_change_to_first: !0,
        local_notifications: {
            max_offline_counts: {
                title: "You Are Rich!",
                content: "Come get some new Kizis!",
                big_title: "You Are Rich!",
                big_content: "Come get some new Kizis!"
            },
            "24_h_offline": {
                title: "Kiziland needs you!",
                content: "Help us grow!",
                big_title: "Kiziland needs you!",
                big_content: "Come back and help us grow!"
            }
        },
        worlds: [{
            type: "World",
            max_creature_level: 5,
            is_receiving_eggs: !0,
            egg_image: "earth_level01-00egg",
            egg_place_image: null,
            background_image: "BG_earth_level01",
            top_left_image: "overlay_top_left_earth_level01",
            top_right_image: "overlay_top_right_earth_level01",
            bottom_left_image: "overlay_bottom_left_earth_level01",
            bottom_right_image: "overlay_bottom_right_earth_level01",
            effect_class: "LeafParticlesSprite",
            is_creatures_flying_animation: !1
        }, {
            type: "World",
            max_creature_level: 11,
            is_receiving_eggs: !1,
            egg_image: null,
            egg_place_image: null,
            background_image: "BG_earth_level02",
            top_left_image: "overlay_top_left_earth_level02",
            top_right_image: "overlay_top_right_earth_level02",
            bottom_left_image: "overlay_bottom_left_earth_level02",
            bottom_right_image: "overlay_bottom_right_earth_level02",
            effect_class: "SnowParticlesSprite",
            is_creatures_flying_animation: !1
        }, {
            type: "World",
            max_creature_level: 17,
            is_receiving_eggs: !1,
            egg_image: null,
            egg_place_image: "Egg_cloud",
            background_image: "BG_earth_level03",
            top_left_image: "overlay_top_left_earth_level03",
            top_right_image: "overlay_top_right_earth_level03",
            bottom_left_image: "overlay_bottom_left_earth_level03",
            bottom_right_image: "overlay_bottom_right_earth_level03",
            effect_class: "StarsParticlesSprite",
            is_creatures_flying_animation: !0
        }, {
            type: "World",
            max_creature_level: 23,
            is_receiving_eggs: !1,
            egg_image: null,
            egg_place_image: "Egg_bubbles",
            background_image: "BG_water_level01",
            top_left_image: null,
            top_right_image: null,
            bottom_left_image: "overlay_bottom_left_water_level01",
            bottom_right_image: "overlay_bottom_right_water_level01",
            effect_class: "BubblesParticlesSprite",
            is_creatures_flying_animation: !0
        }, {
            type: "World",
            max_creature_level: 29,
            is_receiving_eggs: !1,
            egg_image: null,
            egg_place_image: "Egg_bubbles",
            background_image: "BG_water_level02",
            top_left_image: null,
            top_right_image: null,
            bottom_left_image: "overlay_bottom_left_water_level02",
            bottom_right_image: "overlay_bottom_right_water_level02",
            effect_class: "BubblesParticlesSprite",
            is_creatures_flying_animation: !0
        }, {
            type: "World",
            max_creature_level: 35,
            is_receiving_eggs: !1,
            egg_image: null,
            egg_place_image: "Egg_bubbles",
            background_image: "BG_water_level03",
            top_left_image: null,
            top_right_image: null,
            bottom_left_image: "overlay_bottom_left_water_level03",
            bottom_right_image: "overlay_bottom_right_water_level03",
            effect_class: "LeafParticlesSprite",
            is_creatures_flying_animation: !1
        }],
        creatures: [{
            name: "Kidzi",
            image: "earth_level01-01baby",
            store_image: "Store_world01_level01_01",
            wiki_fact: "A baby Kizi"
        }, {
            name: "Kizi",
            image: "earth_level01-02kizi",
            store_image: "Store_world01_level01_02",
            wiki_fact: "Good ol' Kizi"
        }, {
            name: "Kizard",
            image: "earth_level01-03chameleon",
            store_image: "Store_world01_level01_03",
            wiki_fact: "Kizard, master of disguise"
        }, {
            name: "Grumpizi",
            image: "earth_level01-04cat",
            store_image: "Store_world01_level01_04",
            wiki_fact: '"Don\'t pet me!"'
        }, {
            name: "Alpakizi",
            image: "earth_level01-05llama",
            store_image: "Store_world01_level01_05",
            wiki_fact: "Boing Boing Boing"
        }, {
            name: "Kiziana Jones",
            image: "earth_level01-06explorer",
            store_image: "Store_world01_level01_06",
            wiki_fact: '"I love adventures"'
        }, {
            name: "Freezy",
            image: "earth_level02-01penguin",
            store_image: "Store_world01_level02_01",
            wiki_fact: "Likes ice cream"
        }, {
            name: "Fluffizi",
            image: "earth_level02-02bunny",
            store_image: "Store_world01_level02_02",
            wiki_fact: '"Feed me carrots"'
        }, {
            name: "Robeart",
            image: "earth_level02-03bear",
            store_image: "Store_world01_level02_03",
            wiki_fact: '"Je suis Kizi"'
        }, {
            name: "Mmmizi",
            image: "earth_level02-04goat",
            store_image: "Store_world01_level02_04",
            wiki_fact: "Goat Kizi Goat!"
        }, {
            name: "Jim",
            image: "earth_level02-05moose",
            store_image: "Store_world01_level02_05",
            wiki_fact: "Has a wonderful collection of sweaters"
        }, {
            name: "Kizilla",
            image: "earth_level02-06yeti",
            store_image: "Store_world01_level02_06",
            wiki_fact: "He only looks scary"
        }, {
            name: "Moskizo",
            image: "earth_level03-01butterfly",
            store_image: "Store_world01_level03_01",
            wiki_fact: "He is small and shy"
        }, {
            name: "Spookizi",
            image: "earth_level03-02bat",
            store_image: "Store_world01_level03_02",
            wiki_fact: "Only comes out at night"
        }, {
            name: "Cheezi",
            image: "earth_level03-03rat",
            store_image: "Store_world01_level03_03",
            wiki_fact: '"That balloon was a really bad idea..."'
        }, {
            name: "Flying Squizi",
            image: "earth_level03-04monga",
            store_image: "Store_world01_level03_04",
            wiki_fact: "He's pretty nuts"
        }, {
            name: "Konzor",
            image: "earth_level03-05bird",
            store_image: "Store_world01_level03_05",
            wiki_fact: "Free like the wind"
        }, {
            name: "Roki",
            image: "earth_level03-06rocketeer",
            store_image: "Store_world01_level03_06",
            wiki_fact: '"To the moon!"'
        }, {
            name: "Ringo",
            image: "water_level01-01starfish",
            store_image: "Store_world02_level01_01",
            wiki_fact: "Must frequently remind others not to eat him"
        }, {
            name: "Tentakizi",
            image: "water_level01-02Nautilus",
            store_image: "Store_world02_level01_02",
            wiki_fact: "Stop calling me a shrimp!"
        }, {
            name: "Blowzi",
            image: "water_level01-03blowfish",
            store_image: "Store_world02_level01_03",
            wiki_fact: "Blowzi is terrible with balloons"
        }, {
            name: "Jean Claw",
            image: "water_level01-04lobster",
            store_image: "Store_world02_level01_04",
            wiki_fact: "Loves making salad but is terrible at washing the dishes"
        }, {
            name: "Raymond",
            image: "water_level01-05mantaray",
            store_image: "Store_world02_level01_05",
            wiki_fact: "Slim and shady"
        }, {
            name: "Kizinaut",
            image: "water_level01-06diver",
            store_image: "Store_world02_level01_06",
            wiki_fact: "Takes forever to put on his diving suit"
        }, {
            name: "Clamzi",
            image: "water_level02-01clam",
            store_image: "Store_world02_level02_01",
            wiki_fact: "Frequently disappoints treasure seekers"
        }, {
            name: "Kissi",
            image: "water_level02-02seahorse",
            store_image: "Store_world02_level02_02",
            wiki_fact: "Big attraction at the kissing booth"
        }, {
            name: "Snappy",
            image: "water_level02-03crab",
            store_image: "Store_world02_level02_03",
            wiki_fact: "Do not sneak up on him"
        }, {
            name: "Snorkizi",
            image: "water_level02-04fish",
            store_image: "Store_world02_level02_04",
            wiki_fact: "Loves pancakes and seawater"
        }, {
            name: "Dolphizi",
            image: "water_level02-05dolphin",
            store_image: "Store_world02_level02_05",
            wiki_fact: "Non-human person"
        }, {
            name: "Mermizi",
            image: "water_level02-06merman",
            store_image: "Store_world02_level02_06",
            wiki_fact: "Loves dancing and chewing bubblegum"
        }, {
            name: "Jumpizi",
            image: "water_level03-01frog",
            store_image: "Store_world02_level03_01",
            wiki_fact: "Can jump 5 times its height"
        }, {
            name: "Quackizi",
            image: "water_level03-02duck",
            store_image: "Store_world02_level03_02",
            wiki_fact: "Does not like to share its food with others"
        }, {
            name: "Lutraki",
            image: "water_level03-04otter",
            store_image: "Store_world02_level03_04",
            wiki_fact: "So lazy they say it never turns around"
        }, {
            name: "Octokizi",
            image: "water_level03-03octopus",
            store_image: "Store_world02_level03_03",
            wiki_fact: "Has inspired a Beatles song"
        }, {
            name: "Lochnizi",
            image: "water_level03-05dragon",
            store_image: "Store_world02_level03_05",
            wiki_fact: "Legends says it is not real"
        }, {
            name: "Kizidon",
            image: "water_level03-06poseidon",
            store_image: "Store_world01_level03_06",
            wiki_fact: "Ruler of the sea, eater of many pretzels"
        }],
        super_creatures: [{
            name: "Omegasus",
            image: "Super_kizi01",
            egg_image: "Super_kizi_egg01",
            indicator_image: "Skizi_indicator_icon01",
            cooking_time_sec: 1200,
            ability_duration_sec: 100,
            ability_function_name: "higherCreaturesInEggs",
            wiki_fact: "Get better Kizis"
        }, {
            name: "Omicron",
            image: "Super_kizi02",
            egg_image: "Super_kizi_egg02",
            indicator_image: "Skizi_indicator_icon02",
            cooking_time_sec: 7200,
            ability_duration_sec: 180,
            ability_function_name: "autoMergeCreatures",
            wiki_fact: "Auto pilot. Plays for you"
        }, {
            name: "Alphazoid",
            image: "Super_kizi03",
            egg_image: "Super_kizi_egg03",
            indicator_image: "Skizi_indicator_icon03",
            cooking_time_sec: 1800,
            ability_duration_sec: 120,
            ability_function_name: "doubleCoinsPerSec",
            wiki_fact: "Doubles coins production"
        }, {
            name: "Zetarion",
            image: "Super_kizi04",
            egg_image: "Super_kizi_egg04",
            indicator_image: "Skizi_indicator_icon04",
            cooking_time_sec: 3600,
            ability_duration_sec: 120,
            ability_function_name: "quaterPresentTime",
            wiki_fact: "Get gifts faster"
        }, {
            name: "Kappatron",
            image: "Super_kizi05",
            egg_image: "Super_kizi_egg05",
            indicator_image: "Skizi_indicator_icon05",
            cooking_time_sec: 600,
            ability_duration_sec: 60,
            ability_function_name: "quaterEggTime",
            wiki_fact: "Get eggs faster"
        }]
    };
    Wa.NAME = "Sprite_1";
    va.NAME = "Sprite_1";
    H.salt = "_funtomic";
    Da.NAME = "Sprite_1";
    La.NAME = "Sprite_1";
    Fb.NAME = "Sprite_1";
    Eb.NAME = "Sprite_1";
    n.main()
})();