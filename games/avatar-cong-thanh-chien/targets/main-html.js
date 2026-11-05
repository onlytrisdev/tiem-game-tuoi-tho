'use strict';
(function() {
    function m(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c,
            f;
        for (f in b) d[f] = b[f];
        b.toString !== Object.prototype.toString && (d.toString = b.toString);
        return d
    }

    function Ae(a) {
        return a instanceof Array ? function() {
            return z.iter(a)
        } : "function" == typeof a.iterator ? v(a, a.iterator) : a.iterator
    }

    function v(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Ke++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope, arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var e = {},
        Ga = function(a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    e.EReg = Ga;
    Ga.__name__ = ["EReg"];
    Ga.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw new n("EReg::matched");
        },
        matchedPos: function() {
            if (null == this.r.m) throw new n("No string matched");
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        replace: function(a, b) {
            return a.replace(this.r, b)
        },
        __class__: Ga
    };
    var z = function() {};
    e.HxOverrides = z;
    z.__name__ = ["HxOverrides"];
    z.strDate = function(a) {
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
                throw new n("Invalid date format : " +
                    a);
        }
    };
    z.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    z.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    z.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    z.iter = function(a) {
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
    var Nb = function() {};
    e.Lambda = Nb;
    Nb.__name__ = ["Lambda"];
    Nb.array = function(a) {
        for (var b = [], a = Ae(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    Nb.has = function(a, b) {
        for (var c = Ae(a)(); c.hasNext();)
            if (c.next() == b) return !0;
        return !1
    };
    Nb.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var d = Ae(a)(); d.hasNext();) d.next(), c++;
        else
            for (d = Ae(a)(); d.hasNext();) {
                var f = d.next();
                b(f) && c++
            }
        return c
    };
    var wc = function() {
        this.length = 0
    };
    e.List = wc;
    wc.__name__ = ["List"];
    wc.prototype = {
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        iterator: function() {
            return new Vd(this.h)
        },
        __class__: wc
    };
    var Vd = function(a) {
        this.head = a;
        this.val = null
    };
    e["_List.ListIterator"] = Vd;
    Vd.__name__ = ["_List", "ListIterator"];
    Vd.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            this.val = this.head[0];
            this.head = this.head[1];
            return this.val
        },
        __class__: Vd
    };
    var ma = function() {};
    e.Main = ma;
    ma.__name__ = ["Main"];
    ma.onSuccess = function(a) {
        ma.bootstrapPack = a;
        if (i._platform.getTouch().get_supported()) i._platform.getTouch().down.connect(function() {
            a.getSound("empty").play().dispose();
            a.getSound("empty").dispose()
        }).once();
        else a.getSound("empty").dispose();
        i._platform.getStage().resize.connect(ma.onResize);
        i.root.add(new xc);
        t.defaultTransition(new Ha(1, 15, 10));
        t.init(new yc(a, "loader_bar/progress", "loader_bar/total", za.Left));
        t["goto"](cb);
        ma.onResize()
    };
    ma.main = function() {
        i.init();
        ja.init();
        Ua.init(new zc, ma.localizationLoaded)
    };
    ma.localizationLoaded = function() {
        i.loadAssetPack(I.getManifest("bootstrap")).get(ma.onSuccess)
    };
    ma.onResize = function() {
        if (!(null == t.director || null == t.director.owner))
            if (null != ma.resizeScreen && (ma.resizeScreen.dispose(), ma.resizeScreen = null), i._platform.getStage().get_height() > i._platform.getStage().get_width()) {
                var a;
                a = 640 < i._platform.getStage().get_width() ? "orientation_ipad" : "orientation_iphone";
                i.root.add(new zb(0));
                ma.resizeScreen = (new g).add(new fa(0, i._platform.getStage().get_width(), i._platform.getStage().get_height())).addChild(J.center((new g).add(new r(ma.bootstrapPack.getTexture(a)))));
                i.root.addChild(ma.resizeScreen)
            } else a = i.root._compMap.SpeedAdjuster_30, null != a && a.dispose()
    };
    Math.__name__ = ["Math"];
    var da = function() {};
    e.Reflect = da;
    da.__name__ = ["Reflect"];
    da.hasField = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    da.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return c instanceof n && (c = c.val), null
        }
    };
    da.callMethod = function(a, b, c) {
        return b.apply(a, c)
    };
    da.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                d;
            for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d)
        }
        return b
    };
    da.isFunction = function(a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    };
    da.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var D = function() {};
    e.Std = D;
    D.__name__ = ["Std"];
    D.is = function(a, b) {
        return G.__instanceof(a, b)
    };
    D.instance = function(a, b) {
        return a instanceof b ? a : null
    };
    D.string = function(a) {
        return G.__string_rec(a, "")
    };
    D["int"] = function(a) {
        return a | 0
    };
    D.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == z.cca(a, 1) || 88 == z.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    D.parseFloat = function(a) {
        return parseFloat(a)
    };
    var Ia = function() {
        this.b = ""
    };
    e.StringBuf = Ia;
    Ia.__name__ = ["StringBuf"];
    Ia.prototype = {
        add: function(a) {
            this.b += D.string(a)
        },
        addSub: function(a, b, c) {
            this.b = null == c ? this.b + z.substr(a, b, null) : this.b + z.substr(a, b, c)
        },
        __class__: Ia
    };
    var M = function() {};
    e.StringTools = M;
    M.__name__ = ["StringTools"];
    M.htmlEscape = function(a, b) {
        a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
        return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a
    };
    M.startsWith = function(a, b) {
        return a.length >= b.length && z.substr(a, 0, b.length) == b
    };
    M.isSpace = function(a, b) {
        var c = z.cca(a, b);
        return 8 < c && 14 > c || 32 == c
    };
    M.ltrim = function(a) {
        for (var b = a.length, c = 0; c < b && M.isSpace(a, c);) c++;
        return 0 < c ? z.substr(a, c, b - c) : a
    };
    M.rtrim = function(a) {
        for (var b = a.length, c = 0; c < b && M.isSpace(a, b - c - 1);) c++;
        return 0 < c ? z.substr(a, 0, b - c) : a
    };
    M.trim = function(a) {
        return M.ltrim(M.rtrim(a))
    };
    M.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    M.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    };
    var Q = e.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    Q.TNull = ["TNull", 0];
    Q.TNull.__enum__ = Q;
    Q.TInt = ["TInt", 1];
    Q.TInt.__enum__ = Q;
    Q.TFloat = ["TFloat", 2];
    Q.TFloat.__enum__ = Q;
    Q.TBool = ["TBool", 3];
    Q.TBool.__enum__ = Q;
    Q.TObject = ["TObject", 4];
    Q.TObject.__enum__ = Q;
    Q.TFunction = ["TFunction", 5];
    Q.TFunction.__enum__ = Q;
    Q.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = Q;
        return a
    };
    Q.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = Q;
        return a
    };
    Q.TUnknown = ["TUnknown", 8];
    Q.TUnknown.__enum__ = Q;
    var V = function() {};
    e.Type = V;
    V.__name__ = ["Type"];
    V.getClass = function(a) {
        return null == a ? null : G.getClass(a)
    };
    V.getClassName = function(a) {
        a = a.__name__;
        return null == a ? null : a.join(".")
    };
    V.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    V.resolveClass = function(a) {
        a = e[a];
        return null == a || !a.__name__ ? null : a
    };
    V.resolveEnum = function(a) {
        a = e[a];
        return null == a || !a.__ename__ ? null : a
    };
    V.createInstance = function(a, b) {
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
                throw new n("Too many arguments");
        }
    };
    V.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    V.createEnum = function(a, b, c) {
        var d = da.field(a, b);
        if (null == d) throw new n("No such constructor " + b);
        if (da.isFunction(d)) {
            if (null == c) throw new n("Constructor " + b + " need parameters");
            return da.callMethod(a, d, c)
        }
        if (null != c && 0 != c.length) throw new n("Constructor " + b + " does not need parameters");
        return d
    };
    V.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    V["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return Q.TBool;
            case "string":
                return Q.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? Q.TInt : Q.TFloat;
            case "object":
                if (null == a) return Q.TNull;
                var b = a.__enum__;
                if (null != b) return Q.TEnum(b);
                a = G.getClass(a);
                return null != a ? Q.TClass(a) : Q.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? Q.TObject : Q.TFunction;
            case "undefined":
                return Q.TNull;
            default:
                return Q.TUnknown
        }
    };
    var p = function(a) {
        this.nodeType = a;
        this.children = [];
        this.attributeMap = new S
    };
    e.Xml = p;
    p.__name__ = ["Xml"];
    p.parse = function(a) {
        return kb.parse(a)
    };
    p.createElement = function(a) {
        var b = new p(p.Element);
        if (b.nodeType != p.Element) throw new n("Bad node type, expected Element but found " +
            b.nodeType);
        b.nodeName = a;
        return b
    };
    p.createPCData = function(a) {
        var b = new p(p.PCData);
        if (b.nodeType == p.Document || b.nodeType == p.Element) throw new n("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    p.createCData = function(a) {
        var b = new p(p.CData);
        if (b.nodeType == p.Document || b.nodeType == p.Element) throw new n("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    p.createComment = function(a) {
        var b = new p(p.Comment);
        if (b.nodeType == p.Document || b.nodeType == p.Element) throw new n("Bad node type, unexpected " +
            b.nodeType);
        b.nodeValue = a;
        return b
    };
    p.createDocType = function(a) {
        var b = new p(p.DocType);
        if (b.nodeType == p.Document || b.nodeType == p.Element) throw new n("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    p.createProcessingInstruction = function(a) {
        var b = new p(p.ProcessingInstruction);
        if (b.nodeType == p.Document || b.nodeType == p.Element) throw new n("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    p.createDocument = function() {
        return new p(p.Document)
    };
    p.prototype = {
        get_nodeValue: function() {
            if (this.nodeType == p.Document || this.nodeType == p.Element) throw new n("Bad node type, unexpected " + this.nodeType);
            return this.nodeValue
        },
        get: function(a) {
            if (this.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.get(a)
        },
        set: function(a, b) {
            if (this.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + this.nodeType);
            this.attributeMap.set(a, b)
        },
        exists: function(a) {
            if (this.nodeType != p.Element) throw new n("Bad node type, expected Element but found " +
                this.nodeType);
            return this.attributeMap.exists(a)
        },
        attributes: function() {
            if (this.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.keys()
        },
        elements: function() {
            if (this.nodeType != p.Document && this.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = [], b = 0, c = this.children; b < c.length;) {
                var d = c[b];
                ++b;
                d.nodeType == p.Element && a.push(d)
            }
            return z.iter(a)
        },
        elementsNamed: function(a) {
            if (this.nodeType != p.Document && this.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var b = [], c = 0, d = this.children; c < d.length;) {
                var f = d[c];
                ++c;
                var h;
                if (h = f.nodeType == p.Element) {
                    if (f.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + f.nodeType);
                    h = f.nodeName == a
                }
                h && b.push(f)
            }
            return z.iter(b)
        },
        firstChild: function() {
            if (this.nodeType != p.Document && this.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " +
                this.nodeType);
            return this.children[0]
        },
        firstElement: function() {
            if (this.nodeType != p.Document && this.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = 0, b = this.children; a < b.length;) {
                var c = b[a];
                ++a;
                if (c.nodeType == p.Element) return c
            }
            return null
        },
        addChild: function(a) {
            if (this.nodeType != p.Document && this.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this
        },
        removeChild: function(a) {
            if (this.nodeType != p.Document && this.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + this.nodeType);
            return z.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        toString: function() {
            return gc.print(this)
        },
        __class__: p
    };
    var Va = function() {};
    e["flambe.util.Disposable"] = Va;
    Va.__name__ = ["flambe", "util", "Disposable"];
    Va.prototype = {
        __class__: Va
    };
    var l = function() {
        this._flags = 0;
        this.owner = this.next = null
    };
    e["flambe.Component"] = l;
    l.__name__ = ["flambe", "Component"];
    l.__interfaces__ = [Va];
    l.prototype = {
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
        __class__: l
    };
    var xc = function() {
        this.lockLocation = null;
        this.battleBackground = "";
        this.lostLeftBattle = !1;
        this.currentScene = "";
        this.hasSeenBattle = this.hasSeenMap = !1;
        this.enemyLevel = 0;
        this.lastBattleChars = [];
        this.waterCompleted = this.earthCompleted = this.fireCompleted = this.hasScollsAll = this.bossBattle = !1;
        this.aangPowerLevel = 0;
        l.call(this);
        this.wonBattleBossEarth = this.wonBattleBossWater = this.wonBattleScrollEarth = this.wonBattleScrollWater = !1;
        this._savedLocations = [];
        this.scrollCountWater = new R(0);
        this.scrollCountEarth = new R(0);
        this.scrollCountFire = new R(0);
        this._saveActionState = new Wd;
        this.loadFromLocalStorage();
        this._save = hc.getStoredInstance()
    };
    e["com.avatar.components.GameTracker"] = xc;
    xc.__name__ = ["com", "avatar", "components", "GameTracker"];
    xc.__super__ = l;
    xc.prototype = m(l.prototype, {
        get_name: function() {
            return "GameTracker_0"
        },
        loadFromLocalStorage: function() {
            if (i._platform.getStorage().get_supported()) {
                var a = i._platform.getStorage().get("avatar-10th-lsk-map-h");
                null != a && (a = new ga(a), this.fireCompleted = a.unserialize(), this.waterCompleted = a.unserialize(), this.earthCompleted = a.unserialize(), this.aangPowerLevel = a.unserialize(), this.hasSeenBattle = a.unserialize(), this.hasSeenMap = a.unserialize(), this.scrollCountFire.set__(a.unserialize()), this.scrollCountEarth.set__(a.unserialize()), this.scrollCountWater.set__(a.unserialize()), this._currentLocationStr = a.unserialize(), this._savedLocations = a.unserialize())
            }
        },
        flush: function() {
            if (i._platform.getStorage().get_supported()) {
                var a = new Aa;
                a.serialize(this.fireCompleted);
                a.serialize(this.waterCompleted);
                a.serialize(this.earthCompleted);
                a.serialize(this.aangPowerLevel);
                a.serialize(this.hasSeenBattle);
                a.serialize(this.hasSeenMap);
                a.serialize(this.scrollCountFire._value);
                a.serialize(this.scrollCountEarth._value);
                a.serialize(this.scrollCountWater._value);
                a.serialize(this._currentLocationStr);
                a.serialize(this._savedLocations);
                i._platform.getStorage().set("avatar-10th-lsk-map-h", a.toString())
            }
        },
        reset: function() {},
        leaveBattle: function() {
            this.lostLeftBattle = !0;
            for (var a = this._save.getLastSaveInformation(), b = 0, c = a.length; b < c;) {
                var d = b++;
                a[d].setExperienceBattle(0)
            }
        },
        getSave: function() {
            return this._save
        },
        getActionState: function() {
            return this._saveActionState
        },
        winBattleScrollWater: function() {
            this._currentLocation.hideLocation();
            this._savedLocations.push(this._currentLocation.getName());
            this._currentLocation.setType(y.Fork);
            this._currentLocationType = y.Fork;
            this.wonBattleScrollWater = !0;
            var a = this.scrollCountWater,
                b = a._value;
            a.set__(b + 1);
            b;
            3 == this.scrollCountWater._value && (this.hasScollsAll = !0);
            this.flush()
        },
        winBattleMainWater: function() {
            this._currentLocation.hideLocation();
            this._savedLocations.push(this._currentLocation.getName());
            this._currentLocation.setType(y.Fork);
            this._currentLocationType = y.Fork;
            this.waterCompleted = this.wonBattleBossWater = !0;
            this.flush()
        },
        winBattleScrollEarth: function() {
            this._currentLocation.hideLocation();
            this._savedLocations.push(this._currentLocation.getName());
            this._currentLocation.setType(y.Fork);
            this._currentLocationType = y.Fork;
            this.wonBattleScrollEarth = !0;
            var a = this.scrollCountEarth,
                b = a._value;
            a.set__(b + 1);
            b;
            3 == this.scrollCountEarth._value && (this.hasScollsAll = !0);
            this.flush()
        },
        winBattleMainEarth: function() {
            this._currentLocation.hideLocation();
            this._savedLocations.push(this._currentLocation.getName());
            this._currentLocation.setType(y.Fork);
            this._currentLocationType = y.Fork;
            this.earthCompleted = this.wonBattleBossEarth = !0;
            this.flush()
        },
        winBattleScrollFire: function() {
            this._currentLocation.hideLocation();
            this._savedLocations.push(this._currentLocation.getName());
            this._currentLocation.setType(y.Fork);
            this._currentLocationType = y.Fork;
            this.wonBattleScrollFire = !0;
            var a = this.scrollCountFire,
                b = a._value;
            a.set__(b + 1);
            b;
            3 == this.scrollCountFire._value && (this.hasScollsAll = !0);
            this.flush()
        },
        winBattleMainFire: function() {
            this._currentLocation.hideLocation();
            this._savedLocations.push(this._currentLocation.getName());
            this._currentLocation.setType(y.Fork);
            this._currentLocationType = y.Fork;
            this.fireCompleted = this.wonBattleBossFire = !0;
            this.flush()
        },
        setCurrentMapLocation: function(a) {
            this._currentLocation = a;
            this._currentLocationStr = a.getName();
            this._currentLocationType = a.getType();
            this.flush()
        },
        getCurrentLocationType: function() {
            return this._currentLocationType
        },
        setCurrentLocationType: function(a) {
            this._currentLocationType = a
        },
        setBattleWater: function(a) {
            this._waterBattle = a
        },
        unlockBattleWater: function() {
            this.aangPowerLevel = 1;
            this._waterBattle.unlock()
        },
        setBattleEarth: function(a) {
            this._earthBattle = a
        },
        unlockBattleEarth: function() {
            this.aangPowerLevel = 2;
            this._earthBattle.unlock()
        },
        setBattleFire: function(a) {
            this._fireBattle = a
        },
        unlockBattleFire: function() {
            this.aangPowerLevel = 3;
            this._fireBattle.unlock()
        },
        getSavedLocations: function() {
            return this._savedLocations
        },
        getCurrentLocationString: function() {
            return this._currentLocationStr
        },
        __class__: xc
    });
    var Ac = function(a, b, c, d) {
        l.call(this);
        this._manager = a;
        this._gameScreen = b;
        this._pack = c;
        this._global = d;
        this._banner = new r(this._pack.getTexture("battleScreenWavePanel"));
        this._currentWave = 0;
        this._isEndHandled = !1;
        this._tracker = i.root._compMap.GameTracker_0;
        this._locationType = this._tracker.getCurrentLocationType();
        this._humanPlayerConfig = [];
        this.setBattleConfig()
    };
    e["com.avatar.components.battle.BattleManager"] = Ac;
    Ac.__name__ = ["com", "avatar", "components", "battle", "BattleManager"];
    Ac.__super__ = l;
    Ac.prototype = m(l.prototype, {
        get_name: function() {
            return "BattleManager_4"
        },
        onUpdate: function() {
            0 == this._manager.getGroupComputer().getSize() && (this._currentWave != this._waves ? this.startBattle() : this._isEndHandled || this.handleEnd(!0));
            0 == this._manager.getGroupHuman().getSize() && (this._isEndHandled || this.handleEnd(!1))
        },
        onAdded: function() {
            this.owner.add(new x);
            this._script = this.owner.add(new x).getComponent("Script_2");
            this._manager.setGroupHuman(lb.createGroup(this._gameScreen, this._pack, this._global, this._humanPlayerConfig, pa.Human));
            this.owner.addChild(this._bannerEnt = (new g).add(this._banner.centerAnchor().setXY(683, -150)));
            this._bannerEnt.addChild((new g).add(this._text = j.getField("battle.wave", null, A.Center)));
            this._text.disablePointer().setScale(0.9).setXY(360, 20)
        },
        setBattleConfig: function() {
            var a = [k.Aang, k.Katara, k.Sokka];
            this._tracker.waterCompleted && (a = [k.Aang, k.Katara, k.Sokka, k.Toph]);
            this._tracker.earthCompleted && (a = [k.Aang, k.Katara, k.Sokka, k.Toph, k.Zuko]);
            for (var b = Ba.generateRandomSet(a.length), c = 0, d = b.length; c < d;) {
                var f = c++;
                this._humanPlayerConfig.push(a[b[f]])
            }
            this._computerPlayerConfigs = [
                [k.Wasp, k.Wasp],
                [k.Soldier, k.Wasp],
                [k.Wasp, k.Soldier],
                [k.Soldier, k.Soldier],
                [k.Soldier, k.Wasp, k.Wasp],
                [k.Soldier, k.Soldier, k.Wasp],
                [k.Soldier, k.Wasp, k.Soldier]
            ];
            this._tracker.earthCompleted && (this._computerPlayerConfigs = [
                [k.Wasp, k.Soldier, k.Wasp],
                [k.Spider, k.Soldier, k.Wasp],
                [k.Soldier, k.Wasp],
                [k.Spider, k.Wasp, k.Soldier],
                [k.Wasp, k.Soldier],
                [k.Spider, k.Soldier, k.Soldier],
                [k.Spider, k.Soldier, k.Wasp, k.Wasp],
                [k.Soldier, k.Soldier, k.Wasp],
                [k.Spider, k.Soldier, k.Wasp, k.Soldier],
                [k.Soldier, k.Wasp, k.Soldier]
            ]);
            this._locationType == y.WaterScroll || this._locationType == y.EarthScroll || this._locationType == y.FireScroll ? this._waves = 3 : this._locationType == y.WaterBattle ? (this._waves = 4, this._humanPlayerConfig = [k.Aang, k.Katara, k.Sokka]) : this._locationType == y.EarthBattle ? (this._waves = 4, this._humanPlayerConfig = [k.Aang, k.Katara, k.Sokka, k.Toph]) : this._locationType == y.FireBattle ? (this._waves = 4, this._humanPlayerConfig = [k.Aang, k.Katara, k.Zuko, k.Toph]) : this._waves = this.waveAmount();
            this._computerPlayerConfigChoice = Math.floor(Math.random() * this._computerPlayerConfigs.length)
        },
        handleEnd: function(a) {
            var b = this;
            this.setGroupSpeed(this._manager.getGroupHuman(), 0);
            this.setGroupSpeed(this._manager.getGroupComputer(), 0);
            this._isEndHandled = !0;
            this.owner._compMap.ActionQueue_9.clear();
            var c;
            this.owner.addChild(c = new g);
            a ? c.add(j.getField("battle.win").centerAnchor()) : c.add(j.getField("battle.lose").centerAnchor());
            c = c._compMap.Sprite_3;
            c.centerAnchor().setXY(683, 135).setScale(0);
            this._script.run(new E([new W([new C(c.scaleX, 1, 0.5, u.backOut), new C(c.scaleY, 1, 0.5, u.backOut)]), new N(0.5), new W([new C(c.scaleX, 0, 0.25, u.backIn), new C(c.scaleY, 0, 0.25, u.backIn)]), new K(function() {
                a && (b._manager.handleGroupDataUpdate(), b._locationType == y.WaterScroll ? b._tracker.winBattleScrollWater() : b._locationType == y.EarthScroll ? b._tracker.winBattleScrollEarth() : b._locationType == y.FireScroll ? b._tracker.winBattleScrollFire() : b._locationType == y.WaterBattle ? b._tracker.winBattleMainWater() : b._locationType == y.EarthBattle ? b._tracker.winBattleMainEarth() : b._locationType == y.FireBattle && b._tracker.winBattleMainFire());
                a || b._tracker.leaveBattle();
                s.stop();
                i.root._compMap.GameTracker_0.bossBattle ? b._pack.getSound("music/aseg_bossbattlemusic_endv1").play(1.4) : b._pack.getSound("music/aseg_battlemusic_endv1").play(1.4);
                t.push(db)
            })]))
        },
        startBattle: function() {
            var a = this;
            this._currentWave++;
            this._locationType == y.WaterBattle && this._currentWave == this._waves ? (this._manager.setGroupComputer(lb.createGroup(this._gameScreen, this._pack, this._global, [k.PrinceZuko], pa.Computer)), s.stop(), s.loop(this._pack, "music/aseg_boss_battlemusicloopv1")) : this._locationType == y.EarthBattle && this._currentWave == this._waves ? (this._manager.setGroupComputer(lb.createGroup(this._gameScreen, this._pack, this._global, [k.Azula], pa.Computer)), s.stop(), s.loop(this._pack, "music/aseg_boss_battlemusicloopv1")) : this._locationType == y.FireBattle && this._currentWave == this._waves ? (this._manager.setGroupComputer(lb.createGroup(this._gameScreen, this._pack, this._global, [k.Ozai], pa.Computer)), s.stop(), s.loop(this._pack, "music/aseg_boss_battlemusicloopv1")) : this._manager.setGroupComputer(lb.createGroup(this._gameScreen, this._pack, this._global, this._computerPlayerConfigs[this._computerPlayerConfigChoice], pa.Computer));
            var b = this._manager.getGroupHuman(),
                c = this._manager.getGroupComputer();
            this._script.run(new E([new K(function() {
                i.root._compMap.Sprite_3.set_pointerEnabled(!1);
                a.setGroupSpeed(b, 1.0E-4);
                a.setGroupSpeed(c, 1.0E-4);
                a._text.set_text(j.getField("battle.wave", null, A.Center).get_text() + a._currentWave + " of " + a._waves)
            }), new N(0.25), new W([new C(this._banner.y, 130, 1, u.backOut), new K(function() {
                1 == a._currentWave && a.animateGroupIn(b, 500);
                a.animateGroupIn(c, -500)
            })]), new N(1.25), new C(this._banner.y, -150, 1, u.backIn), new K(function() {
                a.setGroupSpeed(b, 1);
                a.setGroupSpeed(c, 1);
                i.root._compMap.Sprite_3.set_pointerEnabled(!0)
            })]))
        },
        animateGroupIn: function(a, b) {
            for (var c = a.getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                this._script.run(new E([new W([new Ab(c[h].getAlpha(), 1, this.xSpeed(), u.quintInOut), new Ab(c[h].getX(), b, this.xSpeed(), u.quintInOut)])]))
            }
        },
        setGroupSpeed: function(a, b) {
            for (var c = a.getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                c[h].setSpeedStatus(b)
            }
        },
        xSpeed: function() {
            return 0.7 + 0.2 * Math.random()
        },
        waveAmount: function() {
            return Math.floor(2 * Math.random() + 1)
        },
        __class__: Ac
    });
    var eb = function(a) {
        l.call(this);
        this._player = a
    };
    e["com.avatar.components.battle.action.ActionComputer"] = eb;
    eb.__name__ = "com,avatar,components,battle,action,ActionComputer".split(",");
    eb.__super__ = l;
    eb.prototype = m(l.prototype, {
        get_name: function() {
            return "ActionComputer_10"
        },
        onAdded: function() {
            this.init()
        },
        onUpdate: function() {
            this._player.canAttack._value && (this._player.setNormalTimer(0), this._player.canAttack.set__(!1), this._player.setIsQueued(!0), this.queueAction(this._groupManager.selectRandomMember(pa.Human)))
        },
        queueAction: function(a) {
            this._actionQueue.addAttack(v(this, this.action), a)
        },
        action: function(a) {
            null != this._player.owner && !this._player.isEnclosed() && (this._player.getAction(this.getActionType()).doAction(a), this._player.setIsQueued(!1))
        },
        init: function() {
            this._touch = this.owner._internal_getFromParents("PlayerTouch_12");
            this._touch.addPlayerInteraction(this._player);
            this._actionQueue = this.owner._internal_getFromParents("ActionQueue_9");
            this._groupManager = this.owner._internal_getFromParents("GroupManager_8")
        },
        getActionType: function() {
            var a = this._player.getActions();
            return 0.2 > Math.random() ? a[1].getActionType() : a[0].getActionType()
        },
        __class__: eb
    });
    var mb = function(a) {
        l.call(this);
        this._player = a
    };
    e["com.avatar.components.battle.action.ActionHuman"] = mb;
    mb.__name__ = "com,avatar,components,battle,action,ActionHuman".split(",");
    mb.__super__ = l;
    mb.prototype = m(l.prototype, {
        get_name: function() {
            return "ActionHuman_11"
        },
        onUpdate: function() {
            (null == this._player.currentPreTarget._value || null == this._player.currentPreTarget._value.owner) && 0 < this._groupManager.getGroupComputer().getSize() && this._player.currentPreTarget.set__(this._groupManager.selectRandomMember(pa.Computer))
        },
        onAdded: function() {
            this.init()
        },
        queueAction: function(a, b) {
            this._actionType = a;
            this._actionQueue.addAttack(v(this, this.action), b);
            this._menuQueue.hideMenu();
            this._player.setIsQueued(!0)
        },
        action: function(a) {
            null != this._player.owner && (this._player.setNormalTimer(0), this._player.getAction(this._actionType).doAction(a), this._player.setIsQueued(!1))
        },
        init: function() {
            this._touch = this.owner._internal_getFromParents("PlayerTouch_12");
            this._touch.addPlayerInteraction(this._player);
            this._actionQueue = this.owner._internal_getFromParents("ActionQueue_9");
            this._menuQueue = this.owner._internal_getFromParents("MenuQueue_6");
            this._groupManager = this.owner._internal_getFromParents("GroupManager_8")
        },
        __class__: mb
    });
    var Bc = function() {
        l.call(this);
        this._attackQueue = [];
        this._attackQueueTarget = [];
        this._isPaused = !1
    };
    e["com.avatar.components.battle.action.ActionQueue"] = Bc;
    Bc.__name__ = "com,avatar,components,battle,action,ActionQueue".split(",");
    Bc.__super__ = l;
    Bc.prototype = m(l.prototype, {
        get_name: function() {
            return "ActionQueue_9"
        },
        onUpdate: function() {
            this._isPaused || this.initiateAttack()
        },
        addAttack: function(a, b) {
            this._attackQueue.push(a);
            this._attackQueueTarget.push(b)
        },
        initiateAttack: function() {
            0 < this._attackQueue.length && this._attackQueue.shift()(this._attackQueueTarget.shift())
        },
        pause: function() {
            this._isPaused = !0
        },
        unPause: function() {
            this._isPaused = !1
        },
        clear: function() {
            this._attackQueue = [];
            this._attackQueueTarget = []
        },
        __class__: Bc
    });
    var Cc = function() {
        l.call(this);
        this._showQueue = [];
        this._hideQueue = [];
        this._playerQueue = []
    };
    e["com.avatar.components.battle.action.MenuQueue"] = Cc;
    Cc.__name__ = "com,avatar,components,battle,action,MenuQueue".split(",");
    Cc.__super__ = l;
    Cc.prototype = m(l.prototype, {
        get_name: function() {
            return "MenuQueue_6"
        },
        onUpdate: function() {
            this._isShown || this.showMenu();
            null != this._currentPlayer && null == this._currentPlayer.owner && this.hideMenu()
        },
        addMenu: function(a, b, c) {
            this.isPlayerInQueue(c) || (this._showQueue.push(a), this._hideQueue.push(b), this._playerQueue.push(c))
        },
        showMenu: function() {
            0 < this._showQueue.length && (this._showQueue.shift()(), this._currentPlayer = this._playerQueue.shift(), this._isShown = !0)
        },
        hideMenu: function() {
            0 < this._hideQueue.length && (this._hideQueue.shift()(), this._isShown = !1)
        },
        isPlayerInQueue: function(a) {
            for (var b = 0, c = this._playerQueue.length; b < c;) {
                var d = b++;
                if (a == this._playerQueue[d]) return !0
            }
            return !1
        },
        __class__: Cc
    });
    var O = function(a, b, c, d, f, h, e) {
        this._pack = a;
        this._player = b;
        this._statusBarLock = c;
        this._actionQueue = d;
        this._actionType = f;
        this._actionLength = h;
        this._turnCount = e;
        this._currentTurn = new R(this._turnCount)
    };
    e["com.avatar.components.battle.action.actionTypes.A_Action"] = O;
    O.__name__ = "com,avatar,components,battle,action,actionTypes,A_Action".split(",");
    O.prototype = {
        doAction: function(a) {
            var b = this;
            if (null == a.owner) {
                var c = a.getGroup().getAllMembers();
                if (0 == c.length) {
                    this._player.setNormalTimer(this._player.getNormalMaxTime() - 0.01);
                    return
                }
                a = c[0]
            }
            this.addActionTurn();
            a.owner.add(new x);
            a.owner.add(new x).getComponent("Script_2").run(new E([new K(function() {
                b._actionQueue.pause();
                b._statusBarLock.lock(b._player);
                b._player.currentTarget.set__(a)
            }), new N(1), new W([new N(this._actionLength), new E([new N(0.1), new K(function() {
                b.hasMissed() && b._actionType != o.Water_Heal && b._actionType != o.Earth_RockDefense ? b.missed(a) : b.hasBlocked(a) && b._actionType != o.Water_Heal && b._actionType != o.Earth_RockDefense ? b.blockedBy(a) : (b.action(a), b.setTargetResponse(a, b._actionType))
            })])]), new N(0.1), new K(function() {
                b.setTargetResponse(a, o.Idle_);
                Ob.addExperience(b._player, a);
                for (var c = a.getGroup().getAllMembers(), f = 0; f < c.length;) 0 >= c[f].getHealth() ? (b.handleDeath(c[f]), c = a.getGroup().getAllMembers(), f = 0) : f++;
                b._statusBarLock.unlock();
                b._actionQueue.unPause()
            })]))
        },
        addActionTurn: function() {
            for (var a = this._player.getActions(), b = 0, c = a.length; b < c;) {
                var d = b++;
                if (-1 < a[d].getTurnCount().get__() -
                    1) {
                    var d = a[d].getTurnCount(),
                        f = d._value;
                    d.set__(f - 1);
                    f
                }
            }
            this.getTurnCount().set__(this.getTurnCountMax())
        },
        handleDeath: function(a) {
            a.getGroup().getType() == pa.Human && a.owner.parent.parent.add(new Dc(this._pack, a.getName(), a.getHeight(), a.getX().get__(), a.getY().get__()));
            var b = a.getGroup();
            a.clearExperienceNew();
            b.getType() == pa.Human && b.owner._internal_getFromParents("GroupManager_8").handleGroupDataUpdate();
            a.getGroup().removeMember(a)
        },
        setReady: function() {
            this._currentTurn.set__(0)
        },
        getTurnCount: function() {
            return this._currentTurn
        },
        getTurnCountMax: function() {
            return this._turnCount
        },
        setTurnCount: function(a) {
            this._currentTurn.set__(a)
        },
        action: function() {
            null
        },
        getActionType: function() {
            return this._actionType
        },
        getActionLength: function() {
            return this._actionLength
        },
        hasMissed: function() {
            return Math.random() > this._player.getChance()
        },
        missed: function(a) {
            this._pack.getSound("sfx/attack_miss_2").play(2);
            a.currentResponse.set__("");
            a.currentResponse.set__(j.getField("battle.missed").get_text())
        },
        hasBlocked: function(a) {
            return a.isDefended() ? !0 : Math.random() < a.getBlock()
        },
        blockedBy: function(a) {
            this._pack.getSound("sfx/block_attack_2").play(2);
            a.currentResponse.set__("");
            a.currentResponse.set__(j.getField("battle.blocked").get_text())
        },
        setTargetResponse: function(a, b) {
            a.isResponding.set__(b)
        },
        __class__: O
    };
    var nb = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 2);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionAccuracyAttack"] = nb;
    nb.__name__ = "com,avatar,components,battle,action,actionTypes,ActionAccuracyAttack".split(",");
    nb.__super__ = O;
    nb.prototype = m(O.prototype, {
        action: function(a) {
            var b = this;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var c = a.getGroup().getAllMembers(),
                d = 0;
            a.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                c[d].affectChance();
                c[d].currentResponse.set__(j.getField("battle.blinded").get_text());
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length), new N(0.5), new K(function() {
                d = 0
            }), new Ca(new E([new K(function() {
                /* c[d].currentResponse.set__("");
                var a = b._player.getAttack() / 3 * Math.random(),
                    a = Math.floor(b._player.getAttack() / 2 + a),
                    h = c[d].getHealth() - a;
                c[d].setHealth(h);
                c[d].currentResponse.set__("-" + a);
                d++ */
            }), new N(0.2 * Math.random() + 0.01)]), c.length)]))
        },
        setTargetResponse: function(a, b) {
            for (var c = a.getGroup().getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                c[h].isResponding.set__(b)
            }
        },
        __class__: nb
    });
    var ea = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 0);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionAttack"] = ea;
    ea.__name__ = "com,avatar,components,battle,action,actionTypes,ActionAttack".split(",");
    ea.__super__ = O;
    ea.prototype = m(O.prototype, {
        action: function(a) {
            this._pack.getSound("sfx/" + this._sound).play(2);
            a.currentResponse.set__("");
            var b = this._player.getAttack() / 3 * Math.random(),
                b = Math.floor(this._player.getAttack() + b),
                c = a.getHealth() - b;
            a.setHealth(c);
            a.currentResponse.set__("-" + b)
        },
        __class__: ea
    });
    var Ec = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 2);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionHeal"] = Ec;
    Ec.__name__ = "com,avatar,components,battle,action,actionTypes,ActionHeal".split(",");
    Ec.__super__ = O;
    Ec.prototype = m(O.prototype, {
        doAction: function() {
            O.prototype.doAction.call(this, this._player)
        },
        action: function(a) {
            var b = this;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var c = a.getGroup().getAllMembers(),
                d = 0;
            a.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                var a = 4 * Math.random(),
                    a = Math.floor(5 * b._player.getAttack() +
                        a);
                a + c[d].getHealth() > c[d].getMaxHealth() ? (c[d].setHealth(c[d].getMaxHealth()), a = c[d].getMaxHealth() - a, a = Math.floor(Math.abs(a))) : c[d].setHealth(c[d].getHealth() + a);
                c[d].currentResponse.set__("+" + a);
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length)]))
        },
        setTargetResponse: function(a, b) {
            for (var c = a.getGroup().getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                c[h].isResponding.set__(b)
            }
        },
        __class__: Ec
    });
    var Pb = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 3);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionMultiplePlayerAttack"] = Pb;
    Pb.__name__ = "com,avatar,components,battle,action,actionTypes,ActionMultiplePlayerAttack".split(",");
    Pb.__super__ = O;
    Pb.prototype = m(O.prototype, {
        action: function(a) {
            var b = this;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var c = a.getGroup().getAllMembers(),
                d = 0;
            a.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                var a = b._player.getAttack() / 3 * Math.random(),
                    a = Math.ceil(0.8 * b._player.getAttack() + a),
                    h = c[d].getHealth() -
                    a;
                c[d].setHealth(h);
                c[d].currentResponse.set__("-" + a);
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length)]))
        },
        __class__: Pb
    });
    var Fc = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 2);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionMultiplePlayerAttackHigh"] = Fc;
    Fc.__name__ = "com,avatar,components,battle,action,actionTypes,ActionMultiplePlayerAttackHigh".split(",");
    Fc.__super__ = O;
    Fc.prototype = m(O.prototype, {
        action: function(a) {
            var b = this;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var c = a.getGroup().getAllMembers(),
                d = 0;
            a.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                var a = b._player.getAttack() / 3 * Math.random(),
                    a = Math.ceil(1.5 * b._player.getAttack() + a),
                    h = c[d].getHealth() - a;
                c[d].setHealth(h);
                c[d].currentResponse.set__("-" + a);
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length)]))
        },
        __class__: Fc
    });
    var Qb = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 1);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionResetChargeAttack"] = Qb;
    Qb.__name__ = "com,avatar,components,battle,action,actionTypes,ActionResetChargeAttack".split(",");
    Qb.__super__ = O;
    Qb.prototype = m(O.prototype, {
        action: function(a) {
            var b = this;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var c = a.getGroup().getAllMembers(),
                d = 0;
            a.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                c[d].setNormalTimer(0);
                c[d].currentResponse.set__(j.getField("battle.reset").get_text());
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length), new N(0.5), new K(function() {
                d = 0
            }), new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                var a = b._player.getAttack() / 3 * Math.random(),
                    a = Math.floor(b._player.getAttack() / 3 + a),
                    h = c[d].getHealth() - a;
                c[d].setHealth(h);
                c[d].currentResponse.set__("-" + a);
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length)]))
        },
        setTargetResponse: function(a, b) {
            for (var c = a.getGroup().getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                c[h].isResponding.set__(b)
            }
        },
        __class__: Qb
    });
    var Gc = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 2);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionRockBlock"] = Gc;
    Gc.__name__ = "com,avatar,components,battle,action,actionTypes,ActionRockBlock".split(",");
    Gc.__super__ = O;
    Gc.prototype = m(O.prototype, {
        action: function(a) {
            this._pack.getSound("sfx/" + this._sound).play(2);
            a.currentResponse.set__("");
            a.affectEnclose();
            a.currentResponse.set__(j.getField("battle.buried").get_text())
        },
        __class__: Gc
    });
    var ic = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 3);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionRockDefense"] = ic;
    ic.__name__ = "com,avatar,components,battle,action,actionTypes,ActionRockDefense".split(",");
    ic.__super__ = O;
    ic.prototype = m(O.prototype, {
        doAction: function() {
            O.prototype.doAction.call(this, this._player)
        },
        action: function(a) {
            this._pack.getSound("sfx/" + this._sound).play(2);
            a.currentResponse.set__("");
            a.affectDefense();
            a.currentResponse.set__(j.getField("battle.shield").get_text())
        },
        __class__: ic
    });
    var Hc = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 2);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionStun"] = Hc;
    Hc.__name__ = "com,avatar,components,battle,action,actionTypes,ActionStun".split(",");
    Hc.__super__ = O;
    Hc.prototype = m(O.prototype, {
        action: function(a) {
            var b = this;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var c;
            a.owner.addChild(c = new g);
            c.add(new x);
            c.add(new x).getComponent("Script_2").run(new E([new K(function() {
                a.currentResponse.set__("");
                a.affectStun();
                a.currentResponse.set__(j.getField("battle.stunned").get_text())
            }), new N(0.5), new K(function() {
                a.currentResponse.set__("");
                var c = b._player.getAttack() / 3 * Math.random(),
                    c = Math.floor(b._player.getAttack() / 2 + c),
                    f = a.getHealth() - c;
                a.setHealth(f);
                a.currentResponse.set__("-" + c)
            })]))
        },
        __class__: Hc
    });
    var Ic = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 3);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionSurgeStatusAttack"] = Ic;
    Ic.__name__ = "com,avatar,components,battle,action,actionTypes,ActionSurgeStatusAttack".split(",");
    Ic.__super__ = O;
    Ic.prototype = m(O.prototype, {
        action: function(a) {
            var b = this,
                c = a.getGroup().getAllMembers(),
                d = 0;
            this._pack.getSound("sfx/" + this._sound).play(2);
            a.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                c[d].setNormalTimer(0);
                c[d].currentResponse.set__(j.getField("battle.reset").get_text());
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length), new N(0.5), new K(function() {
                d = 0
            }), new Ca(new E([new K(function() {
                c[d].currentResponse.set__("");
                var a = b._player.getAttack() / 3 * Math.random(),
                    a = Math.floor(b._player.getAttack() / 2 + a),
                    h = c[d].getHealth() - a;
                c[d].setHealth(h);
                c[d].currentResponse.set__("-" + a);
                d++
            }), new N(0.2 * Math.random() + 0.01)]), c.length)]))
        },
        __class__: Ic
    });
    var Jc = function(a, b, c, d, f, h) {
        O.call(this, a, b, c, d, f, 1, 3);
        this._sound = h
    };
    e["com.avatar.components.battle.action.actionTypes.ActionSurgeStatusStun"] = Jc;
    Jc.__name__ = "com,avatar,components,battle,action,actionTypes,ActionSurgeStatusStun".split(",");
    Jc.__super__ = O;
    Jc.prototype = m(O.prototype, {
        action: function(a) {
            var b = a.getGroup().getAllMembers(),
                c = 0;
            this._pack.getSound("sfx/" + this._sound).play(2);
            var d;
            a.owner.addChild(d = new g);
            d.add(new x);
            d.add(new x).getComponent("Script_2").run(new E([new Ca(new E([new K(function() {
                b[c].currentResponse.set__("");
                b[c].setNormalTimer(0);
                b[c].currentResponse.set__(j.getField("battle.reset").get_text());
                c++
            }), new N(0.2 * Math.random() + 0.01)]), b.length), new N(0.5), new K(function() {
                a.currentResponse.set__("");
                a.affectStun();
                a.currentResponse.set__(j.getField("battle.stunned").get_text())
            })]))
        },
        __class__: Jc
    });
    var o = e["com.avatar.components.battle.action.actionTypes.ActionType"] = {
        __ename__: "com,avatar,components,battle,action,actionTypes,ActionType".split(","),
        __constructs__: "Normal_Fire,Normal_Earth,Normal_Water,Normal_Air,Normal_Attack,Air_AccuracyAttack,Water_ResetChargeAttack,Earth_RockDefense,Fire_MultiplePlayerAttackHigh,Water_Heal,Earth_RockBlock,Fire_MultiplePlayerAttack,Attack_Stun,Attack_MultipleAttack,Fire_SurgeStatusAttack,Fire_SurgeStatusStun,Idle_".split(",")
    };
    o.Normal_Fire = ["Normal_Fire", 0];
    o.Normal_Fire.__enum__ = o;
    o.Normal_Earth = ["Normal_Earth", 1];
    o.Normal_Earth.__enum__ = o;
    o.Normal_Water = ["Normal_Water", 2];
    o.Normal_Water.__enum__ = o;
    o.Normal_Air = ["Normal_Air", 3];
    o.Normal_Air.__enum__ = o;
    o.Normal_Attack = ["Normal_Attack", 4];
    o.Normal_Attack.__enum__ = o;
    o.Air_AccuracyAttack = ["Air_AccuracyAttack", 5];
    o.Air_AccuracyAttack.__enum__ = o;
    o.Water_ResetChargeAttack = ["Water_ResetChargeAttack", 6];
    o.Water_ResetChargeAttack.__enum__ = o;
    o.Earth_RockDefense = ["Earth_RockDefense", 7];
    o.Earth_RockDefense.__enum__ = o;
    o.Fire_MultiplePlayerAttackHigh = ["Fire_MultiplePlayerAttackHigh", 8];
    o.Fire_MultiplePlayerAttackHigh.__enum__ = o;
    o.Water_Heal = ["Water_Heal", 9];
    o.Water_Heal.__enum__ = o;
    o.Earth_RockBlock = ["Earth_RockBlock", 10];
    o.Earth_RockBlock.__enum__ = o;
    o.Fire_MultiplePlayerAttack = ["Fire_MultiplePlayerAttack", 11];
    o.Fire_MultiplePlayerAttack.__enum__ = o;
    o.Attack_Stun = ["Attack_Stun", 12];
    o.Attack_Stun.__enum__ = o;
    o.Attack_MultipleAttack = ["Attack_MultipleAttack", 13];
    o.Attack_MultipleAttack.__enum__ = o;
    o.Fire_SurgeStatusAttack = ["Fire_SurgeStatusAttack", 14];
    o.Fire_SurgeStatusAttack.__enum__ = o;
    o.Fire_SurgeStatusStun = ["Fire_SurgeStatusStun", 15];
    o.Fire_SurgeStatusStun.__enum__ = o;
    o.Idle_ = ["Idle_", 16];
    o.Idle_.__enum__ = o;
    var ha = function(a, b, c, d) {
        l.call(this);
        this._pack = a;
        this._dropEntity = new g;
        this._dropEntity.add((new q).setXY(b, c));
        this._dropEntity.addChild((new g).add(this._dropImage = new r(a.getTexture("power/" + d)))).addChild((new g).add(this._dropShadow = new r(a.getTexture("power/puShadow"))));
        this._dropImage.centerAnchor().disablePixelSnapping().setXY(0, -60).setAlpha(0);
        this._dropShadow.centerAnchor().disablePixelSnapping().setAlpha(0).setBlendMode(aa.Multiply)
    };
    e["com.avatar.components.battle.droppable.A_Droppable"] = ha;
    ha.__name__ = "com,avatar,components,battle,droppable,A_Droppable".split(",");
    ha.__super__ = l;
    ha.prototype = m(l.prototype, {
        get_name: function() {
            return "A_Droppable_23"
        },
        onUpdate: function(a) {
            this._dropImage.y.update(a);
            this._dropImage.alpha.update(a);
            this._dropShadow.alpha.update(a);
            this._dropShadow.scaleY.update(a);
            this._dropShadow.scaleX.update(a)
        },
        onAdded: function() {
            var a = this,
                b;
            b = this.owner._internal_getFromParents("Disposer_27");
            null == b && this.owner.add(b = new sa);
            this.owner.addChild(this._dropEntity);
            this._owner = this.owner;
            b.connect1(this._dropImage.get_pointerDown(), v(this, this.handlePress));
            this._dropEntity.add(new x);
            this._dropEntity.add(new x).getComponent("Script_2").run(new E([new N(Math.random()), new W([new C(this._dropShadow.alpha, 1, 0.1625), new C(this._dropImage.alpha, 1, 0.1625), new Ab(this._dropImage.y, -20, 0.1625)]), new K(function() {
                a._dropImage.y.set_behavior(new ka(a._dropImage.y._value, a._dropImage.y._value - 5, 1.5));
                a._dropShadow.scaleY.set_behavior(new ka(1, 0.95, 1.5));
                a._dropShadow.scaleX.set_behavior(new ka(1, 0.95, 1.5))
            })]))
        },
        handlePress: function() {
            this._pack.getSound("sfx/UI_tick").play(1)
        },
        __class__: ha
    });
    var Kc = function(a, b, c, d) {
        ha.call(this, a, b, c, d)
    };
    e["com.avatar.components.battle.droppable.DroppableActionsUp"] = Kc;
    Kc.__name__ = "com,avatar,components,battle,droppable,DroppableActionsUp".split(",");
    Kc.__super__ = ha;
    Kc.prototype = m(ha.prototype, {
        onAdded: function() {
            ha.prototype.onAdded.call(this)
        },
        handlePress: function(a) {
            ha.prototype.handlePress.call(this, a);
            for (var a = this._owner._internal_getFromParents("GroupManager_8").getGroupHuman().getAllMembers(), b = 0, c = a.length; b < c;)
                for (var d = b++, d = a[d].getActions(), f = 0, h = d.length; f < h;) {
                    var e = f++;
                    d[e].setReady()
                }
            this._dropEntity.dispose();
            this.dispose()
        },
        __class__: Kc
    });
    var Lc = function(a, b, c, d) {
        ha.call(this, a, b, c, d)
    };
    e["com.avatar.components.battle.droppable.DroppableHealth"] = Lc;
    Lc.__name__ = "com,avatar,components,battle,droppable,DroppableHealth".split(",");
    Lc.__super__ = ha;
    Lc.prototype = m(ha.prototype, {
        onAdded: function() {
            ha.prototype.onAdded.call(this)
        },
        handlePress: function(a) {
            ha.prototype.handlePress.call(this, a);
            for (var a = this._owner._internal_getFromParents("GroupManager_8").getGroupHuman().getAllMembers(), b = 0, c = a.length; b < c;) {
                var d = b++;
                a[d].setHealth(a[d].getMaxHealth())
            }
            this._dropEntity.dispose();
            this.dispose()
        },
        __class__: Lc
    });
    var Mc = function(a, b, c, d) {
        ha.call(this, a, b, c, d)
    };
    e["com.avatar.components.battle.droppable.DroppableSpeed"] = Mc;
    Mc.__name__ = "com,avatar,components,battle,droppable,DroppableSpeed".split(",");
    Mc.__super__ = ha;
    Mc.prototype = m(ha.prototype, {
        onAdded: function() {
            ha.prototype.onAdded.call(this)
        },
        handlePress: function(a) {
            ha.prototype.handlePress.call(this, a);
            for (var a = this._owner._internal_getFromParents("GroupManager_8").getGroupHuman().getAllMembers(), b = 0, c = a.length; b < c;) {
                var d = b++;
                a[d].affectSpeedFast()
            }
            this._dropEntity.dispose();
            this.dispose()
        },
        __class__: Mc
    });
    var Nc = function(a) {
        l.call(this);
        this._members = [];
        this._type = a;
        this.memberSize = new R(0)
    };
    e["com.avatar.components.battle.group.Group"] = Nc;
    Nc.__name__ = "com,avatar,components,battle,group,Group".split(",");
    Nc.__super__ = l;
    Nc.prototype = m(l.prototype, {
        get_name: function() {
            return "Group_14"
        },
        getType: function() {
            return this._type
        },
        getSize: function() {
            return this.memberSize._value
        },
        getAllMembers: function() {
            return this._members
        },
        addMember: function(a) {
            var b;
            this.owner.addChild(b = new g);
            b.add(a);
            this._members.push(a);
            this.memberSize.set__(this.memberSize._value + 1)
        },
        removeMember: function(a) {
            return z.remove(this._members, a) ? (null != a.owner && a.owner.dispose(), this.memberSize.set__(this.memberSize._value - 1), !0) : !1
        },
        getMember: function(a) {
            for (var b = 0, c, d = z.iter(this._members); d.hasNext();) {
                c = d.next();
                if (b == a) break;
                b++
            }
            return c
        },
        __class__: Nc
    });
    var lb = function() {};
    e["com.avatar.components.battle.group.GroupGenerator"] = lb;
    lb.__name__ = "com,avatar,components,battle,group,GroupGenerator".split(",");
    lb.createGroup = function(a, b, c, d, f) {
        f = new Nc(f);
        a.addChild((new g).add(f));
        for (var a = 0, h = d.length; a < h;) {
            var e = a++;
            f.addMember(lb.playerSelect(b, c, d[e], f))
        }
        return f
    };
    lb.playerSelect = function(a, b, c, d) {
        switch (c[1]) {
            case 0:
                return $.generateAang(a, b, d);
            case 7:
                return $.generateEnemyAzula(a, b, d);
            case 1:
                return $.generateKatara(a, b, d);
            case 6:
                return $.generateEnemyOzai(a, b, d);
            case 5:
                return $.generateEnemyPrinceZuko(a, b, d);
            case 2:
                return $.generateSokka(a, b, d);
            case 10:
                return $.generateEnemySoldier(a, b, d);
            case 8:
                return $.generateEnemySpider(a, b, d);
            case 3:
                return $.generateToph(a, b, d);
            case 9:
                return $.generateEnemyWasp(a, b, d);
            case 4:
                return $.generateZuko(a, b, d)
        }
    };
    var Oc = function(a) {
        l.call(this);
        this._pack = a;
        this._overlay = new g;
        this._tracker = i.root._compMap.GameTracker_0
    };
    e["com.avatar.components.battle.group.GroupManager"] = Oc;
    Oc.__name__ = "com,avatar,components,battle,group,GroupManager".split(",");
    Oc.__super__ = l;
    Oc.prototype = m(l.prototype, {
        get_name: function() {
            return "GroupManager_8"
        },
        setGroupHuman: function(a) {
            this._groupHuman = this.handleGroupDataLoad(a);
            this.upgradeGroup(this._groupHuman);
            this._tracker.lastBattleChars = [];
            for (var a = this._groupHuman.getAllMembers(), b = 0, c = a.length; b < c;) {
                var d = b++;
                this._tracker.lastBattleChars.push(a[d].getName())
            }
            Bb.setGroup(this._groupHuman);
            this.handleGroupDataUpdate()
        },
        setGroupComputer: function(a) {
            this.setGroupLevelEnemy(a.getAllMembers());
            this._groupComputer = a;
            Bb.setGroup(this._groupComputer)
        },
        getGroupHuman: function() {
            return this._groupHuman
        },
        getGroupComputer: function() {
            return this._groupComputer
        },
        selectRandomMember: function(a) {
            switch (a[1]) {
                case 0:
                    return this.selectMember(this._groupHuman);
                case 1:
                    return this.selectMember(this._groupComputer)
            }
            return null
        },
        handleGroupDataLoad: function(a) {
            for (var b = this._tracker.getSave(), c = a.getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                b.loadCharacter(c[h])
            }
            return a
        },
        handleGroupDataUpdate: function() {
            var a = this._tracker.getSave();
            a.incrementSaveCount();
            for (var b = this._tracker.getActionState(), c = this._groupHuman.getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                a.saveCharacter(c[h]);
                b.actionStateSave(c[h])
            }
            a.flush()
        },
        selectMember: function(a) {
            var b = Math.floor(Math.random() * a.getSize());
            return a.getMember(b)
        },
        setGroupLevelEnemy: function(a) {
            for (var b = this._tracker.enemyLevel, c = 0, d = a.length; c < d;) {
                var f = c++;
                a[f].setLevel(b)
            }
        },
        upgradeGroup: function(a) {
            for (var b = this._tracker.getActionState(), c = a.getAllMembers(), d = 0, f = c.length; d < f;) {
                var h = d++;
                "aang" == c[h].getName() ? $.upgradeAang(this._pack, c[h], this._tracker.aangPowerLevel) : ("toph" == c[h].getName() || "zuko" == c[h].getName()) && this.checkIfUsed(c[h], a);
                b.actionStateLoad(c[h])
            }
        },
        checkIfUsed: function(a, b) {
            var c = Ob.getGroupLevelAVG(b);
            Math.floor(c / 2) > a.getLevel() && (a.setExperience(Ba.computeExperience(c)), a.setLevel(c), a.setHealth(a.getMaxHealth()), this._tracker.flush())
        },
        __class__: Oc
    });
    var pa = e["com.avatar.components.battle.group.GroupType"] = {
        __ename__: "com,avatar,components,battle,group,GroupType".split(","),
        __constructs__: ["Human", "Computer"]
    };
    pa.Human = ["Human", 0];
    pa.Human.__enum__ = pa;
    pa.Computer = ["Computer", 1];
    pa.Computer.__enum__ = pa;
    var F = function(a, b, c, d, f, h, e, g, B) {
        l.call(this);
        this._name = a;
        this._level = b;
        this._attack = c;
        this._block = d;
        this._chance = f;
        this._maxHealth = h;
        this._group = g;
        this._height = B;
        this.actionsArra = new R([]);
        this._normalMaxTime = 6;
        this._normalTimer = this._normalMaxTime * e
    };
    e["com.avatar.components.battle.player.A_Player"] = F;
    F.__name__ = "com,avatar,components,battle,player,A_Player".split(",");
    F.__super__ = l;
    F.prototype = m(l.prototype, {
        get_name: function() {
            return "A_Player_15"
        },
        onAdded: function() {
            this.init();
            this.owner.add(this._statusBarGroup = new Pc(this))
        },
        onUpdate: function(a) {
            this._hasChanceAffect && (this._elapsedChance += a, 20 < this._elapsedChance && (this._hasChanceAffect = !1));
            this._hasSlowedAffect && (this._elapsedSlow += a, 20 < this._elapsedSlow && (this._hasSlowedAffect = !1, this.isAffected.set__(null), this.isAffected.set__(o.Idle_)));
            this._hasDefenseAffect && (this._elapsedDefense += a, 20 < this._elapsedDefense && (this._hasDefenseAffect = !1, this.isAffected.set__(null), this.isAffected.set__(o.Idle_)));
            this._hasStunAffect && (this._elapsedStun += a, 20 < this._elapsedStun && (this.setSpeedStatus(1), this._hasStunAffect = !1, this.isAffected.set__(null), this.isAffected.set__(o.Idle_)));
            this._hasEncloseAffect && (this._elapsedEnclose += a, 20 < this._elapsedEnclose && (this.setSpeedStatus(1), this._hasEncloseAffect = !1, this.isAffected.set__(null), this.isAffected.set__(o.Idle_)));
            this._hasSpeedAffect && (this._elapsedSpeed += a, 20 < this._elapsedSpeed && (this.setSpeedStatus(1), this._hasSpeedAffect = !1))
        },
        affectChance: function() {
            this._hasChanceAffect || (this._elapsedChance = 0, this._hasChanceAffect = !0)
        },
        affectDefense: function() {
            this._hasDefenseAffect || (this._elapsedDefense = 0, this._hasDefenseAffect = !0, this.isAffected.set__(o.Earth_RockDefense))
        },
        affectStun: function() {
            this._hasStunAffect || (this.setSpeedStatus(0), this._elapsedStun = 0, this._hasStunAffect = !0, this.isAffected.set__(o.Attack_Stun))
        },
        affectEnclose: function() {
            this._hasEncloseAffect || (this.setSpeedStatus(0), this._elapsedEnclose = 0, this._hasEncloseAffect = !0, this.isAffected.set__(o.Earth_RockBlock))
        },
        affectSpeedFast: function() {
            this._hasEncloseAffect || (this.setSpeedStatus(1.7), this._elapsedSpeed = 0, this._hasSpeedAffect = !0)
        },
        isEnclosed: function() {
            return this._hasEncloseAffect
        },
        isDefended: function() {
            return this._hasDefenseAffect
        },
        setLevel: function(a) {
            this._level = a
        },
        getLevel: function() {
            return this._level
        },
        getGroup: function() {
            return this._group
        },
        getSprite: function() {
            return this._sprite
        },
        getAlpha: function() {
            return this._sprite.alpha
        },
        getName: function() {
            return this._name
        },
        getHeight: function() {
            return this._height
        },
        getAttack: function() {
            return Math.ceil(20 * this._level * (this._attack / 99))
        },
        getBlock: function() {
            return this._block
        },
        getChance: function() {
            return this._hasChanceAffect ? 0 : this._chance
        },
        getExperience: function() {
            return this._experience
        },
        setExperience: function(a) {
            this._experience = a
        },
        getExperienceNew: function() {
            return this._experienceNew
        },
        clearExperienceNew: function() {
            this._experienceNew = 0
        },
        addExperienceNew: function(a) {
            this._experienceNew += a
        },
        getHealth: function() {
            return this.health._value
        },
        setHealth: function(a) {
            this.health.set__(a)
        },
        getMaxHealth: function() {
            return Math.ceil(100 * this._level * (this._maxHealth / 99))
        },
        getNormalTimer: function() {
            return this._normalTimer
        },
        setNormalTimer: function(a) {
            this._normalTimer = a
        },
        getNormalMaxTime: function() {
            return this._hasSlowedAffect ? 2 * this._normalMaxTime : this._normalMaxTime
        },
        getX: function() {
            return this._sprite.x
        },
        getY: function() {
            return this._sprite.y
        },
        setXY: function(a, b) {
            this._sprite.setXY(a, b)
        },
        getActionCurrent: function() {
            return this._actionCurrent
        },
        setActions: function(a) {
            this.actionsArra.set__(a)
        },
        getActions: function() {
            return this.actionsArra._value
        },
        getAction: function(a) {
            this._actionCurrent = a;
            for (var b = 0, c = this.actionsArra._value.length; b < c;) {
                var d = b++;
                if (a == this.actionsArra._value[d].getActionType()) return this.actionsArra._value[d]
            }
            return null
        },
        isQueued: function() {
            return this._isQueued
        },
        setIsQueued: function(a) {
            this._isQueued = a
        },
        setSpeedStatus: function(a) {
            this._statusBarGroup.setSpeed(a)
        },
        init: function() {
            this.health = new R(this.getMaxHealth());
            this._sprite = new q;
            this._sprite.x.set__(0);
            this._sprite.y.set__(0);
            this._hasChanceAffect = !1;
            this._elapsedChance = 0;
            this._hasSlowedAffect = !1;
            this._elapsedSlow = 0;
            this._hasSpeedAffect = !1;
            this._elapsedSpeed = 0;
            this._hasStunAffect = !1;
            this._experienceNew = this._experience = this._elapsedStun = 0;
            this.owner.add(this._sprite);
            this.canAttack = new R(!1);
            this.isActing = new R(null);
            this.isResponding = new R(null);
            this.isAffected = new R(null);
            this.isTargeted = new R(!1);
            this.currentTarget = new R(null);
            this.currentPreTarget = new R(null);
            this._isAnimated = this._canUpdateSpecial = this._canUpdateAttack = !0;
            this.currentResponse = new R("");
            this._isQueued = !1;
            this.owner.add(this._speed = new zb(1))
        },
        __class__: F
    });
    var Qc = function(a, b, c) {
        F.call(this, a, 1, 99, 0.5, 0.9, 70, Math.random(), b, 180);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerAang"] = Qc;
    Qc.__name__ = "com,avatar,components,battle,player,PlayerAang".split(",");
    Qc.__super__ = F;
    Qc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new mb(this));
            a.add(new ob(this._statusBarGroup, this._pack));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new pb(this._pack, this.canAttack, this.actionsArra, this, this.currentPreTarget));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_1", "hit_2", "hit_3"], null, this.canAttack))
        },
        __class__: Qc
    });
    var Rc = function(a, b, c) {
        F.call(this, a, 1, 150, 0, 0.95, 2200, Math.random(), b, 230);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerAzula"] = Rc;
    Rc.__name__ = "com,avatar,components,battle,player,PlayerAzula".split(",");
    Rc.__super__ = F;
    Rc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new eb(this));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new fb(this._pack, this.health));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_hoo", "hit_ooh", "hit_ugh"], ["death_human_enemy"]))
        },
        __class__: Rc
    });
    var $ = function() {};
    e["com.avatar.components.battle.player.PlayerGenerator"] = $;
    $.__name__ = "com,avatar,components,battle,player,PlayerGenerator".split(",");
    $.generateAang = function(a, b, c) {
        var b = new Qc("aang", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Air, "attack_aang_normal"), new nb(a, b, d, c, o.Air_AccuracyAttack, "attack_aang_air")]);
        return b
    };
    $.generateKatara = function(a, b, c) {
        var b = new Sc("katara", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Water, "attack_kat_normal"), new Ec(a, b, d, c, o.Water_Heal, "attack_kat_heal")]);
        return b
    };
    $.generateZuko = function(a, b, c) {
        var b = new Tc("zuko", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Fire, "attack_zuko_normal"), new Pb(a, b, d, c, o.Fire_MultiplePlayerAttack, "attack_zuko_fire")]);
        return b
    };
    $.generateToph = function(a, b, c) {
        var b = new Uc("toph", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Earth, "attack_toph_normal"), new Gc(a, b, d, c, o.Earth_RockBlock, "attack_toph_earth")]);
        return b
    };
    $.generateSokka = function(a, b, c) {
        var b = new Vc("sokka", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Attack, "attack_sokka_slash"), new Hc(a, b, d, c, o.Attack_Stun, "attack_sokka_throw")]);
        return b
    };
    $.generateEnemyPrinceZuko = function(a, b, c) {
        var b = new Wc("princezuko", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Fire, "attack_zuko_normal"), new Pb(a, b, d, c, o.Fire_MultiplePlayerAttack, "attack_zuko_fire")]);
        return b
    };
    $.generateEnemyOzai = function(a, b, c) {
        var b = new Xc("ozai", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Fire, "attack_ozai_normal"), new Ic(a, b, d, c, o.Fire_SurgeStatusAttack, "attack_ozai_normal")]);
        return b
    };
    $.generateEnemyAzula = function(a, b, c) {
        var b = new Rc("azula", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Fire, "attack_ozai_normal"), new Jc(a, b, d, c, o.Fire_SurgeStatusAttack, "attack_ozai_normal")]);
        return b
    };
    $.generateEnemySoldier = function(a, b, c) {
        var b = new Yc("soldier", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Fire, "attack_soldier_normal"), new Pb(a, b, d, c, o.Normal_Fire, "attack_soldier_fire")]);
        return b
    };
    $.generateEnemySpider = function(a, b, c) {
        var b = new Zc("spiderLizard", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Attack, "attack_spider"), new ea(a, b, d, c, o.Normal_Attack, "attack_spider")]);
        return b
    };
    $.generateEnemyWasp = function(a, b, c) {
        var b = new $c("wasp", c, a),
            d;
        d = c.owner._internal_getFromParents("StatusBarLock_18");
        c = c.owner._internal_getFromParents("ActionQueue_9");
        b.setActions([new ea(a, b, d, c, o.Normal_Attack, "attack_bee"), new ea(a, b, d, c, o.Normal_Attack, "attack_bee")]);
        return b
    };
    $.upgradeAang = function(a, b, c) {
        var d;
        b.getGroup();
        d = b.getGroup().owner._internal_getFromParents("StatusBarLock_18");
        var f;
        b.getGroup();
        f = b.getGroup().owner._internal_getFromParents("ActionQueue_9");
        switch (c) {
            case 0:
                b.setActions([new ea(a, b, d, f, o.Normal_Air, "attack_aang_normal"), new nb(a, b, d, f, o.Air_AccuracyAttack, "attack_aang_air")]);
                break;
            case 1:
                b.setActions([new ea(a, b, d, f, o.Normal_Air, "attack_aang_normal"), new nb(a, b, d, f, o.Air_AccuracyAttack, "attack_aang_air"), new Qb(a, b, d, f, o.Water_ResetChargeAttack, "attack_aang_earth")]);
                break;
            case 2:
                b.setActions([new ea(a, b, d, f, o.Normal_Air, "attack_aang_normal"), new nb(a, b, d, f, o.Air_AccuracyAttack, "attack_aang_air"), new Qb(a, b, d, f, o.Water_ResetChargeAttack, "attack_aang_water"), new ic(a, b, d, f, o.Earth_RockDefense, "attack_aang_earth")]);
                break;
            case 3:
                b.setActions([new ea(a, b, d, f, o.Normal_Air, "attack_aang_normal"), new nb(a, b, d, f, o.Air_AccuracyAttack, "attack_aang_air"), new Qb(a, b, d, f, o.Water_ResetChargeAttack, "attack_aang_water"), new ic(a, b, d, f, o.Earth_RockDefense, "attack_aang_earth"), new Fc(a, b, d, f, o.Fire_MultiplePlayerAttackHigh, "attack_aang_fire")]);
                break;
            default:
                null
        }
    };
    var Sc = function(a, b, c) {
        F.call(this, a, 1, 45, 0.15, 0.89, 99, Math.random(), b, 200);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerKatara"] = Sc;
    Sc.__name__ = "com,avatar,components,battle,player,PlayerKatara".split(",");
    Sc.__super__ = F;
    Sc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new mb(this));
            a.add(new ob(this._statusBarGroup, this._pack));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new pb(this._pack, this.canAttack, this.actionsArra, this, this.currentPreTarget));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_1", "hit_2", "hit_3"], null, this.canAttack))
        },
        __class__: Sc
    });
    var Xc = function(a, b, c) {
        F.call(this, a, 1, 160, 0, 0.85, 4500, Math.random(), b, 300);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerOzai"] = Xc;
    Xc.__name__ = "com,avatar,components,battle,player,PlayerOzai".split(",");
    Xc.__super__ = F;
    Xc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new eb(this));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new fb(this._pack, this.health));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_hoo", "hit_ooh", "hit_ugh"], ["death_human_enemy"]))
        },
        __class__: Xc
    });
    var Wc = function(a, b, c) {
        F.call(this, a, 1, 140, 0.06, 0.9, 2E3, Math.random(), b, 240);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerPrinceZuko"] = Wc;
    Wc.__name__ = "com,avatar,components,battle,player,PlayerPrinceZuko".split(",");
    Wc.__super__ = F;
    Wc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new eb(this));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new fb(this._pack, this.health));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_hoo", "hit_ooh", "hit_ugh"], ["death_human_enemy"]))
        },
        __class__: Wc
    });
    var Vc = function(a, b, c) {
        F.call(this, a, 1, 90, 0.15, 0.95, 90, Math.random(), b, 200);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerSokka"] = Vc;
    Vc.__name__ = "com,avatar,components,battle,player,PlayerSokka".split(",");
    Vc.__super__ = F;
    Vc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new mb(this));
            a.add(new ob(this._statusBarGroup, this._pack));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new pb(this._pack, this.canAttack, this.actionsArra, this, this.currentPreTarget));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_1", "hit_2", "hit_3"], null, this.canAttack))
        },
        __class__: Vc
    });
    var Yc = function(a, b, c) {
        F.call(this, a, 1, 70, 0, 0.85, 30, Math.random(), b, 225);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerSoldier"] = Yc;
    Yc.__name__ = "com,avatar,components,battle,player,PlayerSoldier".split(",");
    Yc.__super__ = F;
    Yc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new eb(this));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new fb(this._pack, this.health));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_hoo", "hit_ooh", "hit_ugh"], ["death_human_enemy"]))
        },
        __class__: Yc
    });
    var Zc = function(a, b, c) {
        F.call(this, a, 1, 60, 0, 0.85, 1E3, Math.random(), b, 260);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerSpider"] = Zc;
    Zc.__name__ = "com,avatar,components,battle,player,PlayerSpider".split(",");
    Zc.__super__ = F;
    Zc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new eb(this));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new fb(this._pack, this.health));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_spider"], ["death_spider"]))
        },
        __class__: Zc
    });
    var Uc = function(a, b, c) {
        F.call(this, a, 1, 120, 0.15, 0.89, 99, Math.random(), b, 200);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerToph"] = Uc;
    Uc.__name__ = "com,avatar,components,battle,player,PlayerToph".split(",");
    Uc.__super__ = F;
    Uc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new mb(this));
            a.add(new ob(this._statusBarGroup, this._pack));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new pb(this._pack, this.canAttack, this.actionsArra, this, this.currentPreTarget));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_1", "hit_2", "hit_3"], null, this.canAttack))
        },
        __class__: Uc
    });
    var $c = function(a, b, c) {
        F.call(this, a, 1, 40, 0, 1, 15, Math.random(), b, 190);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerWasp"] = $c;
    $c.__name__ = "com,avatar,components,battle,player,PlayerWasp".split(",");
    $c.__super__ = F;
    $c.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g);
            this.owner.add(new eb(this));
            a.add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height));
            a.add(new ua(this, this._pack));
            a.add(new va(this._pack, this.currentResponse, this._height));
            a.add(new fb(this._pack, this.health));
            a.add(new wa(this._pack, this.isResponding, this.health, ["hit_bee_monster"], ["death_bee"]))
        },
        __class__: $c
    });
    var Tc = function(a, b, c) {
        F.call(this, a, 1, 130, 0.15, 0.89, 75, Math.random(), b, 200);
        this._pack = c
    };
    e["com.avatar.components.battle.player.PlayerZuko"] = Tc;
    Tc.__name__ = "com,avatar,components,battle,player,PlayerZuko".split(",");
    Tc.__super__ = F;
    Tc.prototype = m(F.prototype, {
        onAdded: function() {
            F.prototype.onAdded.call(this);
            var a;
            this.owner.addChild(a = new g).add(new mb(this));
            a.add(new ob(this._statusBarGroup, this._pack)).add(new ta(this._pack, this._name, this.isActing, this.isResponding, this.isAffected, this.isTargeted, !1, this._height)).add(new ua(this, this._pack)).add(new pb(this._pack, this.canAttack, this.actionsArra, this, this.currentPreTarget)).add(new va(this._pack, this.currentResponse, this._height)).add(new wa(this._pack, this.isResponding, this.health, ["hit_1", "hit_2", "hit_3"], null, this.canAttack))
        },
        __class__: Tc
    });
    var k = e["com.avatar.components.battle.player.Players"] = {
        __ename__: "com,avatar,components,battle,player,Players".split(","),
        __constructs__: "Aang,Katara,Sokka,Toph,Zuko,PrinceZuko,Ozai,Azula,Spider,Wasp,Soldier".split(",")
    };
    k.Aang = ["Aang", 0];
    k.Aang.__enum__ = k;
    k.Katara = ["Katara", 1];
    k.Katara.__enum__ = k;
    k.Sokka = ["Sokka", 2];
    k.Sokka.__enum__ = k;
    k.Toph = ["Toph", 3];
    k.Toph.__enum__ = k;
    k.Zuko = ["Zuko", 4];
    k.Zuko.__enum__ = k;
    k.PrinceZuko = ["PrinceZuko", 5];
    k.PrinceZuko.__enum__ = k;
    k.Ozai = ["Ozai", 6];
    k.Ozai.__enum__ = k;
    k.Azula = ["Azula", 7];
    k.Azula.__enum__ = k;
    k.Spider = ["Spider", 8];
    k.Spider.__enum__ = k;
    k.Wasp = ["Wasp", 9];
    k.Wasp.__enum__ = k;
    k.Soldier = ["Soldier", 10];
    k.Soldier.__enum__ = k;
    var gb = function(a, b, c, d, f) {
        l.call(this);
        this._player = a;
        this._xCoord = b;
        this._yCoord = c;
        this._width = 0;
        this._height = f;
        this._maxWidth = d
    };
    e["com.avatar.components.battle.statusBar.A_StatusBar"] = gb;
    gb.__name__ = "com,avatar,components,battle,statusBar,A_StatusBar".split(",");
    gb.__super__ = l;
    gb.prototype = m(l.prototype, {
        get_name: function() {
            return "A_StatusBar_17"
        },
        onStart: function() {
            this._statusBarLock = this.owner._internal_getFromParents("StatusBarLock_18")
        },
        onUpdate: function(a) {
            this.updateWidthTop();
            !this._statusBarLock.isLocked() && !this._player.isQueued() && (this._player.getNormalTimer() < this._player.getNormalMaxTime() ? (this._player.setNormalTimer(a + this._player.getNormalTimer()), this._player.canAttack.set__(!1)) : (this._player.setNormalTimer(this._player.getNormalMaxTime()), this._player.canAttack.set__(!0)))
        },
        getX: function() {
            return this._xCoord
        },
        getY: function() {
            return this._yCoord
        },
        setWidth: function(a) {
            this._width = a
        },
        getWidth: function() {
            return this._width
        },
        updateWidthTop: function() {},
        __class__: gb
    });
    var ad = function(a, b, c, d, f) {
        gb.call(this, a, -d, f, b, c)
    };
    e["com.avatar.components.battle.statusBar.StatusBarAttack"] = ad;
    ad.__name__ = "com,avatar,components,battle,statusBar,StatusBarAttack".split(",");
    ad.__super__ = gb;
    ad.prototype = m(gb.prototype, {
        updateWidthTop: function() {
            this.setWidth(this._player.getNormalTimer() / this._player.getNormalMaxTime() * this._maxWidth)
        },
        __class__: ad
    });
    var Pc = function(a) {
        l.call(this);
        this._health = new bd(a, 83, 68, 0, -36);
        this._attack = new ad(a, 83, 68, 0, -36);
        this._speed = new zb
    };
    e["com.avatar.components.battle.statusBar.StatusBarGroup"] = Pc;
    Pc.__name__ = "com,avatar,components,battle,statusBar,StatusBarGroup".split(",");
    Pc.__super__ = l;
    Pc.prototype = m(l.prototype, {
        get_name: function() {
            return "StatusBarGroup_19"
        },
        onAdded: function() {
            this.init()
        },
        getStatusHealth: function() {
            return this._health
        },
        getStatusAttack: function() {
            return this._attack
        },
        setSpeed: function(a) {
            this._speed.scale.set__(a)
        },
        init: function() {
            this.owner.addChild(this._barEntity = new g);
            this._barEntity.add(this._speed);
            this._barEntity.addChild((new g).add(this._health));
            this._barEntity.addChild((new g).add(this._attack))
        },
        __class__: Pc
    });
    var bd = function(a, b, c, d, f) {
        gb.call(this, a, d, f, b, c)
    };
    e["com.avatar.components.battle.statusBar.StatusBarHealth"] = bd;
    bd.__name__ = "com,avatar,components,battle,statusBar,StatusBarHealth".split(",");
    bd.__super__ = gb;
    bd.prototype = m(gb.prototype, {
        updateWidthTop: function() {
            this.setWidth(this._player.getHealth() / this._player.getMaxHealth() * this._maxWidth)
        },
        __class__: bd
    });
    var cd = function() {
        l.call(this);
        this._isLocked = !1
    };
    e["com.avatar.components.battle.statusBar.StatusBarLock"] = cd;
    cd.__name__ = "com,avatar,components,battle,statusBar,StatusBarLock".split(",");
    cd.__super__ = l;
    cd.prototype = m(l.prototype, {
        get_name: function() {
            return "StatusBarLock_18"
        },
        lock: function(a) {
            this._lockee = a;
            this._isLocked = !0
        },
        unlock: function() {
            this._isLocked = !1
        },
        isLocked: function() {
            if (null == this._lockee) return !1;
            return null == this._lockee.owner ? (this._lockee = null, !1) : this._isLocked
        },
        __class__: cd
    });
    var Ba = function() {};
    e["com.avatar.components.battle.utils.Algorithms"] = Ba;
    Ba.__name__ = "com,avatar,components,battle,utils,Algorithms".split(",");
    Ba.computeLevel = function(a) {
        return Math.floor(0.1 * Math.sqrt(a)) + 1
    };
    Ba.computeExperience = function(a) {
        return Math.floor(Math.pow(a / 0.1, 2))
    };
    Ba.computeExperienceEarnedFromBattle = function(a, b) {
        var c = Math.floor((b.getLevel() - a) / 2);
        0 >= c && (c = 1);
        var d = b.getAttack();
        120 < d && (d = 120);
        var f = b.getMaxHealth();
        120 < f && (f = 120);
        return Math.ceil(60 * (c * (d + f) / 2 / 99))
    };
    Ba.generateRandomSet = function(a) {
        var b;
        b = 3 < a ? 2 + Math.floor(3 * Math.random()) : 2 + Math.floor(2 * Math.random());
        for (var c = []; c.length < b;) {
            var d = Math.floor(Math.random() * a);
            Ba.hasNumber(d, c) || c.push(d)
        }
        return c
    };
    Ba.hasNumber = function(a, b) {
        if (0 == b.length) return !1;
        for (var c = 0, d = b.length; c < d;) {
            var f = c++;
            if (a == b[f]) return !0
        }
        return !1
    };
    var Bb = function() {};
    e["com.avatar.components.battle.utils.BattlePosition"] = Bb;
    Bb.__name__ = "com,avatar,components,battle,utils,BattlePosition".split(",");
    Bb.setGroup = function(a) {
        a.getType() == pa.Computer ? Bb.setGroupComputer(a) : a.getType() == pa.Human && Bb.setGroupHuman(a)
    };
    Bb.setGroupComputer = function(a) {
        var b = a.getSize(),
            a = a.getAllMembers();
        1 > b || (1 == b ? a[0].setXY(1450, 550) : 2 == b ? (a[0].setXY(1380, 475), a[1].setXY(1550, 550)) : 3 == b ? (a[0].setXY(1380, 430), a[1].setXY(1550, 505), a[2].setXY(1380, 580)) : 4 == b && (a[0].setXY(1380, 400), a[1].setXY(1550, 475), a[2].setXY(1380, 550), a[3].setXY(1550, 625)))
    };
    Bb.setGroupHuman = function(a) {
        var b = a.getSize(),
            a = a.getAllMembers();
        1 > b || (1 == b ? a[0].setXY(-100, 550) : 2 == b ? (a[0].setXY(-20, 475), a[1].setXY(-190, 550)) : 3 == b ? (a[0].setXY(-20, 430), a[1].setXY(-190, 505), a[2].setXY(-20, 580)) : 4 == b && (a[0].setXY(-20, 400), a[1].setXY(-190, 475), a[2].setXY(-20, 550), a[3].setXY(-190, 625)))
    };
    var Ob = function() {};
    e["com.avatar.components.battle.utils.Level"] = Ob;
    Ob.__name__ = "com,avatar,components,battle,utils,Level".split(",");
    Ob.addExperience = function(a, b) {
        a.addExperienceNew(Ba.computeExperienceEarnedFromBattle(a.getLevel(), b))
    };
    Ob.increaseLevel = function(a) {
        var b = Ba.computeLevel(a.getExperience());
        a.getLevel() != b && a.setLevel(b)
    };
    Ob.getGroupLevelAVG = function(a) {
        var b = 0,
            c;
        c = a.getAllMembers();
        for (c = z.iter(c); c.hasNext();) var d = c.next(),
            b = b + d.getLevel();
        return 0 == b ? 1 : Math.floor(b / a.getSize())
    };
    var dd = function(a) {
        l.call(this);
        this._hasNoInput = !0;
        this._global = a
    };
    e["com.avatar.components.battle.utils.PlayerTouch"] = dd;
    dd.__name__ = "com,avatar,components,battle,utils,PlayerTouch".split(",");
    dd.__super__ = l;
    dd.prototype = m(l.prototype, {
        get_name: function() {
            return "PlayerTouch_12"
        },
        addPlayerInteraction: function(a) {
            this.owner._internal_getFromParents("Disposer_27").connect1(a.getSprite().get_pointerDown(), v(this, this.interactWith))
        },
        setCurrentPlayer: function(a) {
            this._currentPlayer = a
        },
        interactWith: function(a) {
            if (null != this._currentPlayer && this._currentPlayer.canAttack._value && !this._currentPlayer.isQueued()) {
                var a = a.hit.owner,
                    b;
                b = a._internal_getFromParents("A_Player_15");
                this._actionHuman = b.owner._internal_getFromParents("ActionHuman_11");
                this._button = a._internal_getFromParents("ViewActionButton_13");
                null != this._button && !this._button.isOn() && this._global.getSound("sfx/UI_error").play(1.4);
                null != this._button && this._button.isOn() ? (this._global.getSound("sfx/UI_tick").play(1.4), this._actionHuman.queueAction(this._button.getActionName(), b.currentPreTarget._value)) : null == this._actionHuman && (this._global.getSound("sfx/UI_tick").play(1.4), this._currentPlayer.currentPreTarget._value.isTargeted.set__(!1), this._currentPlayer.currentPreTarget.set__(b), b.isTargeted.set__(!0))
            }
        },
        __class__: dd
    });
    var Xd = function(a, b) {
        this.x = a;
        this.y = b
    };
    e["com.avatar.components.battle.utils.Point"] = Xd;
    Xd.__name__ = "com,avatar,components,battle,utils,Point".split(",");
    Xd.prototype = {
        __class__: Xd
    };
    var ed = function(a, b, c, d) {
        l.call(this);
        this._pack = a;
        this._action = b;
        this._xCoord = c;
        this._yCoord = d;
        this._fontWhite = j.getFormat("battle.battleText").font;
        this._isOn = !0
    };
    e["com.avatar.components.battle.view.ViewActionButton"] = ed;
    ed.__name__ = "com,avatar,components,battle,view,ViewActionButton".split(",");
    ed.__super__ = l;
    ed.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewActionButton_13"
        },
        onUpdate: function(a) {
            this._actionSprite.x.update(a);
            this._actionSprite.y.update(a);
            this._actionSprite.alpha.update(a)
        },
        onAdded: function() {
            this._owner = this.owner;
            this.init()
        },
        show: function() {
            this._actionSprite.set_pointerEnabled(!0);
            this._actionSprite.x.animateTo(this._xCoord, 0.75, u.backOut);
            this._actionSprite.y.animateTo(this._yCoord, 0.75, u.backOut);
            this._actionSprite.alpha.animateTo(1, 0.4, u.backOut)
        },
        hide: function() {
            this._actionSprite.set_pointerEnabled(!1);
            this._actionSprite.x.animateTo(-60, 0.75, u.backIn);
            this._actionSprite.y.animateTo(-60, 0.75, u.backIn);
            this._actionSprite.alpha.animateTo(0, 0.6, u.backIn)
        },
        getActionName: function() {
            return this._action.getActionType()
        },
        isOn: function() {
            return this._isOn
        },
        init: function() {
            var a = this.owner._compMap.Disposer_27;
            null == a && this.owner.add(a = new sa);
            this._actionEntity = new g;
            this._actionSprite = new r(this._pack.getTexture("actions/" + this.parseEnum(this._action.getActionType())));
            this._actionSprite.centerAnchor();
            this._actionSprite.setAlpha(0);
            this._actionSprite.setXY(0, -60);
            this._actionSprite.set_pointerEnabled(!1);
            this._textSprite = new Ja(this._fontWhite, "");
            a.connect2(this._action.getTurnCount().get_changed(), v(this, this.onChangeTurnCount));
            0 != this._action.getTurnCount().get__() && (this._textSprite.set_text(this._action.getTurnCount().get__() + ""), this._actionSprite.texture = this._pack.getTexture("actions/" + this.parseEnum(this._action.getActionType()) + "Off"), this._isOn = !1);
            this._textSprite.setXY(60, -10);
            this._actionEntity.add(this._actionSprite);
            this._actionEntity.addChild((new g).add(this._textSprite));
            this.owner.addChild(this._actionEntity)
        },
        onChangeTurnCount: function() {
            0 != this._action.getTurnCount().get__() ? (this._textSprite.set_text(this._action.getTurnCount().get__() + ""), this._actionSprite.texture = this._pack.getTexture("actions/" + this.parseEnum(this._action.getActionType()) + "Off"), this._isOn = !1) : (this._textSprite.set_text(""), this._actionSprite.texture = this._pack.getTexture("actions/" + this.parseEnum(this._action.getActionType())), this._isOn = !0)
        },
        parseEnum: function(a) {
            a = D.string(a);
            return a = a.split("_")[0]
        },
        __class__: ed
    });
    var ta = function(a, b, c, d, f, h, e, g) {
        l.call(this);
        this._playerName = b;
        this._isReflected = e;
        this._isProvoking = c;
        this._isResponding = d;
        this._isAffected = f;
        this._isTargeted = h;
        this._pack = a;
        this._height = g;
        this._movieArray = []
    };
    e["com.avatar.components.battle.view.ViewCharacter"] = ta;
    ta.__name__ = "com,avatar,components,battle,view,ViewCharacter".split(",");
    ta.__super__ = l;
    ta.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewCharacter_15"
        },
        onUpdate: function() {},
        onAdded: function() {
            this.owner._internal_getFromParents("Disposer_27").connect2(this._isProvoking.get_changed(), v(this, this.onChangeIsProvoking));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._isResponding.get_changed(), v(this, this.onChangeIsResponding));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._isTargeted.get_changed(), v(this, this.onChangeIsTargeted));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._isAffected.get_changed(), v(this, this.onChangeIsAffected));
            this.owner.addChild(this._viewEntity = new g);
            this._targetEntity = (new g).add(this._targetSprite = new r(this._pack.getTexture("targetPointer")));
            this._targetSprite.centerAnchor().setXY(0, -this._height);
            this._targetSprite.x.set_behavior(new ka(-5, 5));
            this._targetSprite.y.set_behavior(new ka(-this._height, -this._height + 5, 2));
            this._viewEntity.add(this._sprite = new q);
            this._isReflected && this.reflect(this._sprite);
            this._viewEntity.addChild((new g).add(this._mPlayerChars = (new qb(new Cb(this._pack, "characters"))).loop(this._playerName + "_idle")));
            this._viewEntity.addChild(this._movieEntity = new g);
            this._viewEntity.addChild((new g).add(this._spriteFX = new q).add(this._mPlayerHits = (new qb(new Cb(this._pack, "fx"))).loop("fx_idle1")));
            this._sprite.setScale(0.9)
        },
        onChangeIsProvoking: function(a) {
            null != a && this._mPlayerChars.play(this._playerName + "_action" + this.parseEnum(a, !1))
        },
        onChangeIsAffected: function(a) {
            if (null != a) switch (a[1]) {
                case 7:
                    this.addStaticAffectFX();
                    break;
                case 12:
                    this.addAffectFX("fx_air1");
                    break;
                case 10:
                    this.addAffectFX("fx_earth2");
                    break;
                case 16:
                    this.removeAffectFX()
            }
        },
        addStaticAffectFX: function() {
            var a = new q,
                b = null;
            this._movieArray.push(b = (new qb(new Cb(this._pack, "fx"))).loop("fx_earth3_static"));
            this._movieEntity.addChild((new g).add(a).add(b))
        },
        addAffectFX: function(a) {
            var b = this,
                c = new q,
                d = null;
            this._movieArray.push(d = (new qb(new Cb(this._pack, "fx"))).loop("fx_idle1").setDecorator(function(a) {
                a.set_pointerEnabled(!1);
                "fx_earth2" == a.symbol._name ? b.owner._internal_getFromParents("Disposer_27").connect0(a.get_looped(), function() {
                    d.loop("fx_earth2_static", !0)
                }) : "fx_earth1" == a.symbol._name ? b.owner._internal_getFromParents("Disposer_27").connect0(a.get_looped(), function() {
                    d.loop("fx_earth3_static", !0)
                }) : "fx_air1" == a.symbol._name && (a = a.y, a.set__(a._value - b._height / 3))
            }));
            this._movieEntity.addChild((new g).add(c).add(d.loop(a, !1)))
        },
        removeAffectFX: function() {
            0 < this._movieArray.length && this._movieArray.shift().owner.dispose()
        },
        onChangeIsResponding: function(a) {
            this._spriteFX.setBlendMode(aa.Normal);
            switch (a[1]) {
                case 0:
                    this._mPlayerChars.loop(this._playerName +
                        "_hit", !0);
                    this._mPlayerHits.play("fx_fire1", !1);
                    break;
                case 1:
                    this._mPlayerChars.loop(this._playerName + "_hit", !0);
                    this._mPlayerHits.play("fx_earth1", !1);
                    break;
                case 2:
                    this._mPlayerChars.loop(this._playerName + "_hit", !0);
                    this._mPlayerHits.play("fx_water1", !1);
                    break;
                case 3:
                    this._mPlayerChars.loop(this._playerName + "_hit", !0);
                    this._mPlayerHits.play("fx_air1", !1);
                    break;
                case 4:
                    this._mPlayerChars.loop(this._playerName + "_hit", !0);
                    this._mPlayerHits.play("fx_attack1", !1);
                    break;
                case 5:
                    this._mPlayerChars.loop(this._playerName +
                        "_stun", !1);
                    this._mPlayerHits.play("fx_air1", !1);
                    break;
                case 6:
                    this._mPlayerChars.loop(this._playerName + "_hit", !1);
                    this._mPlayerHits.play("fx_water1", !1);
                    break;
                case 9:
                    this._spriteFX.setBlendMode(aa.Add);
                    this._mPlayerHits.play("fx_heal1", !1);
                    break;
                case 10:
                    this._mPlayerChars.loop(this._playerName + "_hit", !1);
                    this._mPlayerHits.play("fx_earth1", !1);
                    break;
                case 11:
                    this._mPlayerChars.loop(this._playerName + "_hit", !1);
                    this._mPlayerHits.play("fx_fire1", !1);
                    break;
                case 8:
                    this._mPlayerChars.loop(this._playerName +
                        "_hit", !1);
                    this._mPlayerHits.play("fx_fire1", !1);
                    break;
                case 12:
                    this._mPlayerChars.loop(this._playerName + "_stun", !1);
                    this._mPlayerHits.play("fx_attack1", !1);
                    break;
                case 13:
                    this._mPlayerChars.loop(this._playerName + "_hit", !1);
                    this._mPlayerHits.play("fx_attack1", !1);
                    break;
                case 14:
                    this._mPlayerChars.loop(this._playerName + "_hit", !1);
                    this._mPlayerHits.play("fx_fire2", !1);
                    break;
                case 15:
                    this._mPlayerChars.loop(this._playerName + "_hit", !1);
                    this._mPlayerHits.play("fx_fire2", !1);
                    break;
                case 16:
                    this._mPlayerChars.loop(this._playerName +
                        "_idle", !1), this._mPlayerHits.play("fx_idle1", !1)
            }
        },
        onChangeIsTargeted: function(a) {
            !0 == a ? this._viewEntity.addChild(this._targetEntity) : this._viewEntity.removeChild(this._targetEntity)
        },
        reflect: function(a) {
            a.scaleX.set__(-1 * Math.abs(a.scaleX._value));
            return a
        },
        parseEnum: function(a, b) {
            var c = D.string(a),
                c = c.split("_")[0];
            return b ? c.toLowerCase() : c
        },
        __class__: ta
    });
    var ua = function(a) {
        l.call(this);
        this._player = a;
        this._currentTarget = a.currentTarget
    };
    e["com.avatar.components.battle.view.ViewCharacterAction"] = ua;
    ua.__name__ = "com,avatar,components,battle,view,ViewCharacterAction".split(",");
    ua.__super__ = l;
    ua.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewCharacterAction_21"
        },
        onAdded: function() {
            this.owner.addChild(this._viewEntity = new g);
            this.owner._internal_getFromParents("Disposer_27").connect2(this._currentTarget.get_changed(), v(this, this.onChangeCurrentTarget))
        },
        onChangeCurrentTarget: function(a) {
            null != a && (Db.getPerformance(this._player.getActionCurrent()).run(this._player, a, this._pack, this._viewEntity), this._currentTarget.set__(null))
        },
        __class__: ua
    });
    var Dc = function(a, b, c, d, f) {
        l.call(this);
        this._playerName = b;
        this._pack = a;
        this._height = c;
        this._x = d + 30 * Math.random();
        this._y = f + 30 * Math.random()
    };
    e["com.avatar.components.battle.view.ViewCharacterDummy"] = Dc;
    Dc.__name__ = "com,avatar,components,battle,view,ViewCharacterDummy".split(",");
    Dc.__super__ = l;
    Dc.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewCharacterDummy_25"
        },
        onAdded: function() {
            this.owner.addChild(this._viewEntity = new g);
            this._viewEntity.add(this._sprite = (new q).setXY(this._x, this._y).setBlendMode(aa.Screen));
            this._sprite.set_pointerEnabled(!1);
            this._sprite.x.animateTo(200, 0.75, u.backOut);
            var a;
            this._mPlayerChars = (new qb(new Cb(this._pack, "characters"))).loop(this._playerName + "_idle");
            this._viewEntity.addChild(a = (new g).add(this._mPlayerChars));
            a.add(new zb(0.75))
        },
        __class__: Dc
    });
    var fb = function(a, b) {
        l.call(this);
        this._playerHealth = b;
        this._pack = a
    };
    e["com.avatar.components.battle.view.ViewDroppable"] = fb;
    fb.__name__ = "com,avatar,components,battle,view,ViewDroppable".split(",");
    fb.__super__ = l;
    fb.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewDroppable_22"
        },
        onAdded: function() {
            this.owner._internal_getFromParents("Disposer_27").connect2(this._playerHealth.get_changed(), v(this, this.onChangeIsResponding))
        },
        onChangeIsResponding: function(a) {
            0 >= a && this.dropItem() && this.pickDroppable(Math.floor(3 * Math.random()))
        },
        pickDroppable: function(a) {
            switch (a) {
                case 0:
                    this.owner.parent.parent.addChild((new g).add(new Lc(this._pack, this.setX(), this.setY(), "healthPU")));
                    break;
                case 1:
                    this.owner.parent.parent.addChild((new g).add(new Mc(this._pack, this.setX(), this.setY(), "speedPU")));
                    break;
                case 2:
                    this.owner.parent.parent.addChild((new g).add(new Kc(this._pack, this.setX(), this.setY(), "chargePU")))
            }
        },
        dropItem: function() {
            return 0.25 > Math.random()
        },
        setY: function() {
            return 360 + 150 * Math.random()
        },
        setX: function() {
            return 573 + 150 * Math.random()
        },
        __class__: fb
    });
    var pb = function(a, b, c, d, f) {
        l.call(this);
        this._canAttack = b;
        this._actions = c;
        this._currentPreTarget = f;
        this._player = d;
        this._pack = a;
        this._actionButtons = []
    };
    e["com.avatar.components.battle.view.ViewMenu"] = pb;
    pb.__name__ = "com,avatar,components,battle,view,ViewMenu".split(",");
    pb.__super__ = l;
    pb.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewMenu_20"
        },
        onAdded: function() {
            this.owner.addChild(this._viewEntity = new g);
            this._viewEntity.add((new q).centerAnchor());
            this._viewEntity.addChild(this._glowEntity = new g);
            this._viewEntity.addChild(this._viewButtons = new g);
            this._glowEntity.add(this._characterGlow = new r(this._pack.getTexture("characterGlow")));
            this._characterGlow.centerAnchor();
            this._characterGlow.setXY(-12, -57);
            this._characterGlow.setAlpha(0);
            this._characterGlow.setBlendMode(aa.Add);
            this._characterGlow.set_pointerEnabled(!1);
            this._menuWidth = 80;
            this.addButtons();
            this._menuQueue = this.owner._internal_getFromParents("MenuQueue_6");
            this._touch = this.owner._internal_getFromParents("PlayerTouch_12");
            this.owner._internal_getFromParents("Disposer_27").connect2(this._player.canAttack.get_changed(), v(this, this.canAttack));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._player.actionsArra.get_changed(), v(this, this.changeButtons))
        },
        showMenu: function() {
            for (var a = 0, b = this._actionButtons.length; a < b;) this._actionButtons[a++].show();
            this._characterGlow.alpha.set_behavior(new ka(0.5, 1, 0.8));
            null != this._currentPreTarget._value.owner && this._currentPreTarget._value.isTargeted.set__(!0);
            this._touch.setCurrentPlayer(this._player)
        },
        hideMenu: function() {
            for (var a = 0, b = this._actionButtons.length; a < b;) this._actionButtons[a++].hide();
            this._characterGlow.alpha.set_behavior(null);
            this._characterGlow.alpha.animateTo(0, 1, u.expoOut);
            this._currentPreTarget._value.isTargeted.set__(!1)
        },
        addButtons: function() {
            for (var a = this._actions._value.length, b = 0; b < a;) {
                var c = b++,
                    d = 0 + 110 * Math.cos(this.getRads(c, 5)),
                    f = -(90 + 115.5 * Math.sin(this.getRads(c, 5)));
                this._viewButtons.addChild((new g).add(this._actionButtons[c] = new ed(this._pack, this._actions._value[c], d, f)))
            }
        },
        changeButtons: function(a) {
            this._viewButtons.disposeChildren();
            this._actions.set__(a);
            this.addButtons()
        },
        getRads: function(a, b) {
            return 2 * Math.PI * a / (2 * (b - 1))
        },
        canAttack: function(a) {
            !0 == a && this._menuQueue.addMenu(v(this, this.showMenu), v(this, this.hideMenu), this._player)
        },
        __class__: pb
    });
    var wa = function(a, b, c, d, f, h) {
        l.call(this);
        this._isResponding = b;
        this._health = c;
        this._pack = a;
        this._soundHits = d;
        this._soundDeaths = f;
        this._canAttack = h
    };
    e["com.avatar.components.battle.view.ViewSfx"] = wa;
    wa.__name__ = "com,avatar,components,battle,view,ViewSfx".split(",");
    wa.__super__ = l;
    wa.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewSfx_32"
        },
        onAdded: function() {
            this.owner._internal_getFromParents("Disposer_27").connect2(this._isResponding.get_changed(), v(this, this.onChangeIsResponding));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._health.get_changed(), v(this, this.onChangeHealth));
            null != this._canAttack && this.owner._internal_getFromParents("Disposer_27").connect2(this._canAttack.get_changed(), v(this, this.onChangeCanAttack))
        },
        onChangeIsResponding: function(a) {
            a != o.Idle_ && a != o.Water_Heal && this._pack.getSound("sfx/" + this._soundHits[Math.floor(Math.random() * this._soundHits.length)]).play(2)
        },
        onChangeHealth: function(a) {
            var b = this;
            0 >= a && null != this._soundDeaths && (i.root.addChild(this._scriptEntity = new g), this._scriptEntity.add(new x), this._scriptEntity.add(new x).getComponent("Script_2").run(new E([new N(0.1), new K(function() {
                var a = Math.floor(Math.random() * b._soundDeaths.length);
                b._pack.getSound("sfx/" + b._soundDeaths[a]).play(2);
                b._scriptEntity.parent.removeChild(b._scriptEntity)
            })])))
        },
        onChangeCanAttack: function(a) {
            !1 != a && this._pack.getSound("sfx/UI_character_ready").play(2)
        },
        __class__: wa
    });
    var ob = function(a, b) {
        l.call(this);
        this._statusBarGroup = a;
        this._statusHealth = a.getStatusHealth();
        this._statusAttack = a.getStatusAttack();
        this._rectangleAttack = new Eb(0, 0, 83, 68);
        this._rectangleHealth = new Eb(0, 0, 83, 68);
        this._pack = b;
        this._handledDeath = !1
    };
    e["com.avatar.components.battle.view.ViewStatusBarGroup"] = ob;
    ob.__name__ = "com,avatar,components,battle,view,ViewStatusBarGroup".split(",");
    ob.__super__ = l;
    ob.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewStatusBarGroup_16"
        },
        onUpdate: function() {
            this._rectangleHealth.width = this._statusHealth.getWidth();
            this._rectangleAttack.width = this._statusAttack.getWidth()
        },
        onAdded: function() {
            this.owner.addChild(this._groupContainer = new g);
            this.displayHealth(this._groupContainer);
            this.displayAttack(this._groupContainer)
        },
        displayHealth: function(a) {
            this._healthFillBot = new r(this._pack.getTexture("meter/powerMeterHealth_empty"));
            this._healthFillBot.setXY(this._statusHealth.getX(), this._statusHealth.getY());
            a.addChild((new g).add(this._healthFillBot));
            this._healthFillTop = new r(this._pack.getTexture("meter/powerMeterHealth_full"));
            this._healthFillTop.setXY(this._statusHealth.getX() + 8, this._statusHealth.getY() + 7);
            this._healthFillTop.scissor = this._rectangleHealth;
            a.addChild((new g).add(this._healthFillTop))
        },
        displayAttack: function(a) {
            this._attackFillBot = new r(this._pack.getTexture("meter/powerMeterAttack_empty"));
            this._attackFillBot.setXY(this._statusAttack.getX(), this._statusAttack.getY());
            this.reflect(this._attackFillBot);
            a.addChild((new g).add(this._attackFillBot));
            this._attackFillTop = new r(this._pack.getTexture("meter/powerMeterAttack_full"));
            this._attackFillTop.setXY(this._statusAttack.getX() - 8, this._statusAttack.getY() + 7);
            this._attackFillTop.scissor = this._rectangleAttack;
            this.reflect(this._attackFillTop);
            a.addChild((new g).add(this._attackFillTop))
        },
        reflect: function(a) {
            a.scaleX.set__(-1 * Math.abs(a.scaleX._value))
        },
        __class__: ob
    });
    var va = function(a, b, c) {
        l.call(this);
        this._response = b;
        this._pack = a;
        this._height = c
    };
    e["com.avatar.components.battle.view.ViewTextResponse"] = va;
    va.__name__ = "com,avatar,components,battle,view,ViewTextResponse".split(",");
    va.__super__ = l;
    va.prototype = m(l.prototype, {
        get_name: function() {
            return "ViewTextResponse_33"
        },
        onAdded: function() {
            this.owner._internal_getFromParents("Disposer_27").connect2(this._response.get_changed(), v(this, this.showResponse));
            this._fontBlue = j.getFormat("battle.battlePlus").font;
            this._fontRed = j.getFormat("battle.battleMinus").font;
            this._fontWhite = j.getFormat("battle.battleText").font;
            this._responseSprite = new Ja(this._fontBlue, "");
            this._responseSprite.setXY(0, -this._height);
            this._responseSprite.set_pointerEnabled(!1);
            this.owner.addChild(this._viewEntity = (new g).add(this._responseSprite))
        },
        showResponse: function(a) {
            "+" == a.charAt(0) ? this._responseSprite.set_font(this._fontBlue) : "-" == a.charAt(0) ? this._responseSprite.set_font(this._fontRed) : this._responseSprite.set_font(this._fontWhite);
            this._responseSprite.set_text(a);
            this._responseSprite.centerAnchor();
            this.animateText()
        },
        animateText: function() {
            this._responseSprite.alpha.set__(1);
            this._responseSprite.y.set__(-this._height);
            this._responseSprite.alpha.animateTo(0, 1, u.elasticIn);
            this._responseSprite.y.animateTo(-this._height - 10, 0.3, u.elasticInOut)
        },
        __class__: va
    });
    var Db = function() {};
    e["com.avatar.components.battle.view.action.perform.A_ActionPerform"] = Db;
    Db.__name__ = "com,avatar,components,battle,view,action,perform,A_ActionPerform".split(",");
    Db.getPerformance = function() {
        return new fd
    };
    Db.prototype = {
        run: function(a, b, c, d) {
            var f = this;
            d.addChild(this._scriptEntity = new g);
            b = a.getX().get__() > b.getX().get__() ? -60 : 60;
            this._previousPoint = new Xd(a.getX().get__(), a.getY().get__());
            this._scriptEntity.add(new x);
            this._scriptEntity.add(new x).getComponent("Script_2").run(new E([new W([new C(a.getX(), a.getX().get__() + b, 0.5, u.circInOut)]), new K(function() {
                a.isActing.set__(a.getActionCurrent())
            }), new N(a.getAction(a.getActionCurrent()).getActionLength()), new K(function() {
                a.isActing.set__(null)
            }), new W([new C(a.getX(), this._previousPoint.x, 0.5, u.circInOut), new C(a.getY(), this._previousPoint.y, 0.5, u.circInOut)]), new K(function() {
                f._scriptEntity.dispose()
            })]))
        },
        __class__: Db
    };
    var fd = function() {};
    e["com.avatar.components.battle.view.action.perform.ActionPerformAttack"] = fd;
    fd.__name__ = "com,avatar,components,battle,view,action,perform,ActionPerformAttack".split(",");
    fd.__super__ = Db;
    fd.prototype = m(Db.prototype, {
        run: function(a, b, c, d) {
            Db.prototype.run.call(this, a, b, c, d)
        },
        __class__: fd
    });
    var gd = function(a) {
        l.call(this);
        this._pack = a
    };
    e["com.avatar.components.map.MapBackground"] = gd;
    gd.__name__ = ["com", "avatar", "components", "map", "MapBackground"];
    gd.__super__ = l;
    gd.prototype = m(l.prototype, {
        get_name: function() {
            return "MapBackground_25"
        },
        onAdded: function() {
            this.init()
        },
        centerOnWalker: function(a) {
            this.translateX(683 - a.getX().get__());
            this.translateY(384 - a.getY().get__())
        },
        translateX: function(a) {
            var b = this._mainSprite.x;
            b.set__(b._value + a)
        },
        translateY: function(a) {
            var b = this._mainSprite.y;
            b.set__(b._value + a)
        },
        init: function() {
            this._mainSprite = new q;
            this._fillSprite = new fa(3355443, 5E3, 2E3);
            this._fillSprite.setXY(-500, -500);
            this.owner.add(this._mainSprite);
            this.owner.addChild((new g).add(this._fillSprite));
            var a = 0,
                b = null,
                c = 0;
            do {
                b = this._pack.getTexture("mapb" + a, !1);
                if (null != b) {
                    var d = new r(b);
                    d.setXY(c, 0);
                    c += b.get_width();
                    this.owner.addChild((new g).add(d))
                }
                a++
            } while (null != b)
        },
        __class__: gd
    });
    var hd = function(a, b) {
        l.call(this);
        this._walker = a;
        this._background = b
    };
    e["com.avatar.components.map.MapCamera"] = hd;
    hd.__name__ = ["com", "avatar", "components", "map", "MapCamera"];
    hd.__super__ = l;
    hd.prototype = m(l.prototype, {
        get_name: function() {
            return "MapCamera_26"
        },
        onAdded: function() {
            this.init()
        },
        centerOnWalker: function() {
            var a = this._walker.getX().get__() - this._fillCamera.width._value / 2,
                b = this._walker.getY().get__() - this._fillCamera.height._value / 2;
            this._fillCamera.setXY(a, b)
        },
        init: function() {
            this.owner.addChild((new g).add(this._fillCamera = new fa(16711680, 150, 150)));
            this._fillCamera.setAlpha(0);
            this._fillCamera.set_pointerEnabled(!1);
            this.centerOnWalker();
            this.owner._internal_getFromParents("Disposer_27").connect2(this._walker.getX().get_changed(), v(this, this.onWalkerMoveX));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._walker.getY().get_changed(), v(this, this.onWalkerMoveY));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._fillCamera.x.get_changed(), v(this, this.onCameraMoveX));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._fillCamera.y.get_changed(), v(this, this.onCameraMoveY));
            554 > this._walker.getX().get__() && this._fillCamera.x.set__(480);
            3694 < this._walker.getX().get__() && this._fillCamera.x.set__(3615);
            575 < this._walker.getY().get__() && this._fillCamera.y.set__(500);
            343 > this._walker.getY().get__() && this._fillCamera.y.set__(268)
        },
        onWalkerMoveX: function() {
            554 < this._walker.getX().get__() && 3694 > this._walker.getX().get__() && this._fillCamera.x.animateTo(this._walker.getX().get__() - this._fillCamera.width._value / 2, 4, u.expoOut)
        },
        onWalkerMoveY: function() {
            343 < this._walker.getY().get__() && 575 > this._walker.getY().get__() && this._fillCamera.y.animateTo(this._walker.getY().get__() - this._fillCamera.height._value / 2, 4, u.expoOut)
        },
        onCameraMoveX: function(a, b) {
            this._background.translateX(b - a)
        },
        onCameraMoveY: function(a, b) {
            this._background.translateY(b -
                a)
        },
        __class__: hd
    });
    var id = function(a, b, c, d, f, h, e, g, B, j, n, jc, m) {
        l.call(this);
        this._pack = a;
        this._global = b;
        this._walker = c;
        this._name = d;
        this._type = f;
        this._xCoord = h;
        this._yCoord = e;
        this._width = g;
        this._height = B;
        this._paths = j;
        this._level = n;
        this._book = jc;
        this._background = m;
        this._clickable = new r(this._pack.getTexture("touchable"));
        this._tracker = i.root._compMap.GameTracker_0
    };
    e["com.avatar.components.map.MapLocation"] = id;
    id.__name__ = ["com", "avatar", "components", "map", "MapLocation"];
    id.__super__ = l;
    id.prototype = m(l.prototype, {
        get_name: function() {
            return "MapLocation_1"
        },
        onUpdate: function(a) {
            this._clickable.alpha.update(a)
        },
        onAdded: function() {
            this._owner = this.owner;
            this.init()
        },
        getName: function() {
            return this._name
        },
        getLevel: function() {
            return this._level
        },
        unlock: function() {
            this._isLocked = !1;
            null != this._lockImg.owner && this._lockImg.owner.dispose()
        },
        getX: function() {
            return this._xCoord
        },
        getY: function() {
            return this._yCoord
        },
        getWidth: function() {
            return this._width
        },
        getHeight: function() {
            return this._height
        },
        getPaths: function() {
            return this._paths
        },
        getType: function() {
            return this._type
        },
        getBook: function() {
            return this._book
        },
        setType: function(a) {
            this._type = a
        },
        visit: function() {
            this._hasVisited = !0
        },
        hideLocation: function() {
            null != this._locationImg.owner && this._locationImg.owner.dispose()
        },
        showClickable: function() {
            this._clickable.alpha.set_behavior(new ka(0.6666, 1, 1))
        },
        hideClickable: function() {
            this._clickable.alpha.set_behavior(null);
            this._clickable.setAlpha(0)
        },
        init: function() {
            this._mapManager = this.owner._internal_getFromParents("MapManager_7");
            this._sprite = new fa(65535, this._width, this._height);
            this.setTypeColor();
            this._sprite.setXY(this._xCoord, this._yCoord);
            this._sprite.setAlpha(0);
            this.owner.addChild((new g).add(this._sprite));
            this._hasVisited = !1;
            this._lockImg = new r(this._pack.getTexture("lockIcon"));
            this._isLocked = this._type == y.WaterBattle || this._type == y.EarthBattle || this._type == y.FireBattle ? !0 : !1;
            this.addClickable();
            this.addIcon();
            this._isWarningOn = !1;
            this.owner._internal_getFromParents("Disposer_27").connect1(this._sprite.get_pointerDown(), v(this, this.onPointerDown))
        },
        addClickable: function() {
            this._owner.addChild(this._clickEntity = (new g).add(this._clickable.centerAnchor().setXY(this._xCoord + this._width / 2, this._yCoord + this._height / 2).setBlendMode(aa.Multiply)));
            this._clickable.setAlpha(0);
            this._clickable.set_pointerEnabled(!1)
        },
        addIcon: function() {
            switch (this._type[1]) {
                case 0:
                    return;
                case 1:
                    this._locationImg = new r(this._pack.getTexture("waterScroll_Icon"));
                    break;
                case 2:
                    this._locationImg = new r(this._pack.getTexture("fireScroll_Icon"));
                    break;
                case 3:
                    this._locationImg = new r(this._pack.getTexture("earthScroll_Icon"));
                    break;
                case 4:
                    this._locationImg = new r(this._pack.getTexture("fireNation_Icon"));
                    break;
                case 6:
                    this._locationImg = new r(this._pack.getTexture("fireNation_Icon"));
                    break;
                case 5:
                    this._locationImg = new r(this._pack.getTexture("fireNation_Icon"))
            }
            this._locationImg.setXY(this._xCoord + this._width / 2, this._yCoord + this._height / 2);
            this._locationImg.centerAnchor();
            this._locationImg.set_pointerEnabled(!1);
            this.owner.addChild((new g).add(this._locationImg));
            this._isLocked && (this._lockImg.setXY(this._xCoord + this._width / 2, this._yCoord + this._height / 2), this._lockImg.centerAnchor(), this._lockImg.set_pointerEnabled(!1), this.owner.addChild((new g).add(this._lockImg)))
        },
        findNeighbors: function() {
            for (var a = this._mapManager.getLocationAll(), b = 0, c = a.length; b < c;) {
                var d = b++;
                this.hasSharedPath(a[d]) && this != a[d] ? a[d].showClickable() : a[d].hideClickable()
            }
        },
        handleLockedLocation: function(a, b) {
            this._tracker.lockLocation = b;
            t.push(rb, new Da(0.2))
        },
        onPointerDown: function(a) {
            this._global.getSound("sfx/UI_tick").play(1);
            var b = this._walker.getCurrentLocation();
            this.hasSharedPath(b) && !this._walker.isWalking() && this != b && !this._isLocked && (b.getType() == y.Fork || b.getBook() == this._book) ? this._walker.walkTo(this, this.getSharedPath(b)) : !this._walker.isWalking() && this == b ? this._walker.handleAtDestination(this, !0) : this.hasSharedPath(b) && this._isLocked && this.handleLockedLocation(a, this.getType())
        },
        hasSharedPath: function(a) {
            for (var a = a.getPaths(), b = 0, c = a.length; b < c;)
                for (var d = b++, f = 0, h = this._paths.length; f < h;) {
                    var e = f++;
                    if (a[d] == this._paths[e]) return !0
                }
            return !1
        },
        getSharedPath: function(a) {
            for (var a = a.getPaths(), b = 0, c = a.length; b < c;)
                for (var d = b++, f = 0, h = this._paths.length; f < h;) {
                    var e = f++;
                    if (a[d] == this._paths[e]) return this._mapManager.getPath(a[d])
                }
            return null
        },
        getBackground: function() {
            return this._background
        },
        setTypeColor: function() {
            switch (this._type[1]) {
                case 0:
                    this._sprite.color = 3355443;
                    break;
                case 1:
                    this._sprite.color = 255;
                    break;
                case 2:
                    this._sprite.color = 16711680;
                    break;
                case 3:
                    this._sprite.color = 65280;
                    break;
                case 4:
                    this._sprite.color = 4095;
                    break;
                case 5:
                    this._sprite.color = 16773120;
                    break;
                case 6:
                    this._sprite.color = 65520
            }
        },
        __class__: id
    });
    var y = e["com.avatar.components.map.MapLocationType"] = {
        __ename__: ["com", "avatar", "components", "map", "MapLocationType"],
        __constructs__: "Fork,WaterScroll,FireScroll,EarthScroll,WaterBattle,FireBattle,EarthBattle".split(",")
    };
    y.Fork = ["Fork", 0];
    y.Fork.__enum__ = y;
    y.WaterScroll = ["WaterScroll", 1];
    y.WaterScroll.__enum__ = y;
    y.FireScroll = ["FireScroll", 2];
    y.FireScroll.__enum__ = y;
    y.EarthScroll = ["EarthScroll", 3];
    y.EarthScroll.__enum__ = y;
    y.WaterBattle = ["WaterBattle", 4];
    y.WaterBattle.__enum__ = y;
    y.FireBattle = ["FireBattle", 5];
    y.FireBattle.__enum__ = y;
    y.EarthBattle = ["EarthBattle", 6];
    y.EarthBattle.__enum__ = y;
    var jd = function() {
        l.call(this);
        this._locationHashMap = new S;
        this._pathHashMap = new S;
        this._tracker = i.root._compMap.GameTracker_0
    };
    e["com.avatar.components.map.MapManager"] = jd;
    jd.__name__ = ["com", "avatar", "components", "map", "MapManager"];
    jd.__super__ = l;
    jd.prototype = m(l.prototype, {
        get_name: function() {
            return "MapManager_7"
        },
        addLocation: function(a) {
            this._locationHashMap.set(a.getName(), a);
            return a
        },
        getLocation: function(a) {
            a = this._locationHashMap.get(a);
            null == a && (a = this._locationHashMap.get("fork-14"));
            return a
        },
        addPath: function(a) {
            this._pathHashMap.set(a.getName(), a);
            return a
        },
        getPath: function(a) {
            return this._pathHashMap.get(a)
        },
        getLocationAll: function() {
            for (var a = [], b = this._locationHashMap.iterator(); b.hasNext();) a.push(b.next());
            return a
        },
        loadFromSave: function() {
            for (var a = this._tracker.getSavedLocations(), b = 0, c = a.length; b < c;) {
                var d = b++;
                this.beatArea(a[d])
            }
        },
        beatArea: function(a) {
            a = this._locationHashMap.get(a);
            a.getType() == y.WaterBattle ? (a.unlock(), this._tracker.waterCompleted = !0) : a.getType() == y.EarthBattle && (a.unlock(), this._tracker.earthCompleted = !0);
            a.setType(y.Fork);
            a.hideLocation()
        },
        __class__: jd
    });
    var Yd = function(a, b, c, d, f, h, e) {
        this._name = a;
        this._xCoord = b;
        this._yCoord = c;
        this._polyLine = d;
        this._level = f;
        this._book = h;
        this._background = e;
        this.translateLine()
    };
    e["com.avatar.components.map.MapPath"] = Yd;
    Yd.__name__ = ["com", "avatar", "components", "map", "MapPath"];
    Yd.prototype = {
        getName: function() {
            return this._name
        },
        getBackground: function() {
            return this._background
        },
        getLevel: function() {
            return this._level
        },
        getPolyLine: function() {
            return this._polyLine
        },
        translateLine: function() {
            for (var a = 0, b = this._polyLine.length; a < b;) {
                var c = a++;
                this._polyLine[c].x += this._xCoord;
                this._polyLine[c].y += this._yCoord
            }
        },
        __class__: Yd
    };
    var kd = function(a, b) {
        l.call(this);
        this._pack = a;
        this._global = b;
        this._tracker = i.root._compMap.GameTracker_0
    };
    e["com.avatar.components.map.MapWalker"] = kd;
    kd.__name__ = ["com", "avatar", "components", "map", "MapWalker"];
    kd.__super__ = l;
    kd.prototype = m(l.prototype, {
        get_name: function() {
            return "MapWalker_2"
        },
        onAdded: function() {
            this.init()
        },
        onUpdate: function(a) {
            this._fillShip.x.update(a);
            this._fillShip.y.update(a);
            this._fillShip.anchorX.update(a);
            this._fillShip.anchorY.update(a);
            this.checkBattleLoss();
            this._isWalking && (this._elapsed += a, this._elapsed > this._duration && (t.push(Ka, new Ha(0.5, 10, 10)), this._elapsed = 0, this._duration = this.duration()))
        },
        setCurrentLocation: function(a) {
            this._elapsed = 0;
            this._currentLocation = a;
            this._currentLocation.visit();
            this._currentLocation.findNeighbors();
            this._global.getSound("sfx/UI_pluck").play(2);
            this._fillShip.setXY(a.getX() + a.getWidth() / 2, a.getY() + a.getHeight() / 2);
            var a = this._fillShip.getNaturalWidth() / 2,
                b = this._fillShip.getNaturalHeight() / 2;
            this._fillShip.anchorX.set_behavior(new ka(a, 10 + a, 3));
            this._fillShip.anchorY.set_behavior(new ka(b, 5 + b, 2))
        },
        getCurrentLocation: function() {
            return this._currentLocation
        },
        getX: function() {
            return this._fillShip.x
        },
        getY: function() {
            return this._fillShip.y
        },
        isWalking: function() {
            return this._isWalking
        },
        checkBattleLoss: function() {
            this._tracker.lostLeftBattle && (this._tracker.lostLeftBattle = !1, null != this._script && this._script.stopAll(), this.handleAtDestination(this._currentLocation, !1))
        },
        walkTo: function(a, b) {
            var c = this;
            this._tracker.enemyLevel = b.getLevel();
            this._tracker.battleBackground = b.getBackground();
            this._targetLocation = a;
            this._hasWalked = this._isWalking = !0;
            for (var d = b.getPolyLine(), f, h = null, e = null, g = [], B = 0, i = d.length; B < i;) {
                var j = B++;
                this.equals(d[0]) ? (0 == j && (h = d[0]), f = this.calculateTime(d[j], h), g.push(new kc(d[j].x, d[j].y, f)), h = d[j]) : (j != d.length - 1 && (e = d[j + 1]), f = this.calculateTime(d[j], e), g.unshift(new kc(d[j].x, d[j].y, f)), e = d[j])
            }
            this._shipContainer.add(this._script = new x);
            this._shipContainer.add(this._script = new x).getComponent("Script_2").run(new E([new E(g), new K(function() {
                c.handleAtDestination(c._targetLocation, !0)
            })]))
        },
        handleAtDestination: function(a, b) {
            this._tracker.setCurrentMapLocation(a);
            this.setCurrentLocation(a);
            this._tracker.enemyLevel = a.getLevel();
            this._tracker.battleBackground = a.getBackground();
            this.handleCurrentLocation(b);
            this._isWalking = !1
        },
        handleCurrentLocation: function(a) {
            if (a) switch (this._currentLocation.getType()[1]) {
                case 1:
                    t.push(Ka, new Ha(0.5, 10, 10));
                    break;
                case 3:
                    t.push(Ka, new Ha(0.5, 10, 10));
                    break;
                case 2:
                    t.push(Ka, new Ha(0.5, 10, 10));
                    break;
                case 4:
                    i.root._compMap.GameTracker_0.bossBattle = !0;
                    t.push(Ka, new Ha(0.5, 10, 10));
                    break;
                case 6:
                    i.root._compMap.GameTracker_0.bossBattle = !0;
                    t.push(Ka, new Ha(0.5, 10, 10));
                    break;
                case 5:
                    i.root._compMap.GameTracker_0.bossBattle = !0, t.push(Ka, new Ha(0.5, 10, 10))
            } else this._tracker.setCurrentLocationType(y.Fork)
        },
        calculateTime: function(a, b) {
            var c = Math.pow(a.x - b.x, 2),
                d = Math.pow(a.y - b.y, 2);
            return Math.sqrt(c + d) / 60
        },
        equals: function(a) {
            var b = Math.abs(this._fillShip.x._value - a.x),
                a = Math.abs(this._fillShip.y._value - a.y);
            return 20 > b && 20 > a ? !0 : !1
        },
        showWalker: function() {
            this.owner.addChild(this._shipContainer = (new g).add(this._fillShip))
        },
        init: function() {
            this._fillShip = new r(this._pack.getTexture("appa_icon"));
            this._fillShip.disablePixelSnapping();
            this._fillShip.centerAnchor();
            this._fillShip.anchorY.set__(84);
            this._fillShip.set_pointerEnabled(!1);
            this._hasWalked = this._isWalking = !1;
            this._elapsed = 0;
            this._duration = this.duration()
        },
        duration: function() {
            return 0.5 + 1.5 * Math.random()
        },
        __class__: kd
    });
    var ld = function(a, b) {
        l.call(this);
        this._pack = a;
        this._global = b;
        this._tracker = i.root._compMap.GameTracker_0
    };
    e["com.avatar.components.map.Mappa"] = ld;
    ld.__name__ = ["com", "avatar", "components", "map", "Mappa"];
    ld.__super__ = l;
    ld.prototype = m(l.prototype, {
        get_name: function() {
            return "Mappa_24"
        },
        onAdded: function() {
            this.owner.add(this._mapManager = new jd);
            this.createMap();
            this.owner._internal_getFromParents("Disposer_27").connect2(this._tracker.scrollCountWater.get_changed(), v(this, this.unlockBattleWater));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._tracker.scrollCountEarth.get_changed(), v(this, this.unlockBattleEarth));
            this.owner._internal_getFromParents("Disposer_27").connect2(this._tracker.scrollCountFire.get_changed(), v(this, this.unlockBattleFire))
        },
        createMap: function() {
            var a = new gd(this._pack);
            this.owner.add(a);
            this.addPath();
            var b = new kd(this._pack, this._global);
            this.owner.add(b);
            this.addNodes(b);
            null != this._tracker.getCurrentLocationString() ? b.setCurrentLocation(this._mapManager.getLocation(this._tracker.getCurrentLocationString())) : b.setCurrentLocation(this._mapManager.getLocation("fork-14"));
            a.centerOnWalker(b);
            this.owner.add(new hd(b, a));
            this._mapManager.loadFromSave();
            this.checkScrollsWater();
            this.checkScrollsEarth();
            this.checkScrollsFire();
            b.showWalker()
        },
        addNodes: function(a) {
            for (var b = this._pack.getFile("locations.json"), b = JSON.parse(b.toString()).layers[1].objects, c, d = 0, f = b.length; d < f;) {
                c = d++;
                var h, e, g, B, i;
                h = b[c].properties.paths;
                g = D.parseInt(b[c].properties.level);
                B = D.parseInt(b[c].properties.book);
                i = b[c].properties.background;
                e = h.split(",");
                h = V.createEnum(y, b[c].type);
                c = new id(this._pack, this._global, a, b[c].name, h, b[c].x, b[c].y, b[c].width, b[c].height, e, g, B, i);
                this.owner.add(c);
                h == y.WaterBattle ? this._tracker.setBattleWater(c) : h == y.EarthBattle ? this._tracker.setBattleEarth(c) : h == y.FireBattle && this._tracker.setBattleFire(c);
                this._mapManager.addLocation(c)
            }
        },
        addPath: function() {
            for (var a = this._pack.getFile("locations.json"), a = JSON.parse(a.toString()).layers[2].objects, b = 0, c = a.length; b < c;) {
                var d = b++,
                    f, h;
                f = D.parseInt(a[d].properties.level);
                h = D.parseInt(a[d].properties.book);
                this._mapManager.addPath(new Yd(a[d].name, a[d].x, a[d].y, a[d].polyline, f, h, a[d].properties.background))
            }
        },
        unlockBattleWater: function(a) {
            3 == a && this._tracker.unlockBattleWater()
        },
        unlockBattleEarth: function(a) {
            3 == a && this._tracker.unlockBattleEarth()
        },
        unlockBattleFire: function(a) {
            3 == a && this._tracker.unlockBattleFire()
        },
        checkScrollsWater: function() {
            3 == this._tracker.scrollCountWater._value && this._tracker.unlockBattleWater()
        },
        checkScrollsEarth: function() {
            3 == this._tracker.scrollCountEarth._value && this._tracker.unlockBattleEarth()
        },
        checkScrollsFire: function() {
            3 == this._tracker.scrollCountFire._value && this._tracker.unlockBattleFire()
        },
        __class__: ld
    });
    var md = function(a, b) {
        l.call(this);
        this._pack = a;
        this._global = b;
        this._modalImageArray = []
    };
    e["com.avatar.components.result.Result"] = md;
    md.__name__ = ["com", "avatar", "components", "result", "Result"];
    md.__super__ = l;
    md.prototype = m(l.prototype, {
        get_name: function() {
            return "Result_5"
        },
        onAdded: function() {
            this.owner.addChild(this._modalContainer = (new g).add((new q).setXY(320, 395)));
            this.owner.addChild((new g).add(j.getField("results.results").disablePointer().centerAnchor().setXY(683, 135))).addChild(this._tapContinue = (new g).add(j.getField(ja.get_mobile() ? "results.tapContinue" : "results.clickContinue").disablePointer().centerAnchor().setXY(683, 835)));
            this._tapContinue._compMap.Sprite_3.alpha.set_behavior(new ka(1, 0.5, 0.4));
            this._tracker = this.owner._internal_getFromParents("GameTracker_0");
            this.showModals()
        },
        showModals: function() {
            for (var a = this._tracker.getSave().getLastBattleInformation(), b = 0, c = a.length; b < c;) {
                var d = b++,
                    f = Ba.computeLevel(a[d].getExperience()),
                    h = Ba.computeExperience(f),
                    f = new nd(this._pack, this._global, a[d].getName(), f, a[d].getExperience(), a[d].getExperienceBattle(), h, d, a[d]);
                0 < a[d].getHealth() && a[d].addExperience(a[d].getExperienceBattle());
                this._modalContainer.addChild((new g).add(f));
                f.animate()
            }
            this.owner.addChild(a = new g);
            a.add(new x);
            a.add(new x).getComponent("Script_2").run(new E([new N(2), new Ab(this._tapContinue._compMap.Sprite_3.y, -200, 0.5, u.backOut)]));
            this._tracker.getSave().flush()
        },
        __class__: md
    });
    var nd = function(a, b, c, d, f, h, e, g, B) {
        l.call(this);
        this._pack = a;
        this._global = b;
        this._name = c;
        this._level = d;
        this._startExperience = new Y(f);
        this._endExperience = h;
        this._nextLevelExp = e;
        this._order = g;
        this._save = B
    };
    e["com.avatar.components.result.ResultModal"] = nd;
    nd.__name__ = ["com", "avatar", "components", "result", "ResultModal"];
    nd.__super__ = l;
    nd.prototype = m(l.prototype, {
        get_name: function() {
            return "ResultModal_27"
        },
        onRemoved: function() {
            this._signalExperience.dispose()
        },
        onUpdate: function(a) {
            this._startExperience.update(a)
        },
        onAdded: function() {
            this._barFill = new fa(15532032, this.statusWidth(), 15);
            this._barFill.setXY(61, 325);
            var a = this._name.toLowerCase() + "Portrait",
                a = new r(this._pack.getTexture("modal/" + a));
            a.centerAnchor();
            a.setXY(108, 160);
            this._modalImgBack = new r(this._pack.getTexture("modal/modalBack"));
            this._modalImgTop = new r(this._pack.getTexture("modal/modalTop"));
            this._modalImgTop.centerAnchor();
            this._modalImgTop.setXY(this._modalImgBack.getNaturalWidth() / 2, 328);
            this._modalNewLevel = new r(this._pack.getTexture("modal/newLevelPanel"));
            this._modalNewLevel.centerAnchor();
            this._modalNewLevel.setXY(this._modalImgBack.getNaturalWidth() / 2, 297);
            this.owner.add(this._modalImgBack);
            this.owner.addChild((new g).add(this._modalNewLevel).addChild((new g).add(j.getField("results.newLevel", 190).centerAnchor().disablePointer().setXY(this._modalNewLevel.getNaturalWidth() / 2 + 5, 24))));
            this.owner.addChild((new g).add(this._modalImgTop)).addChild((new g).add(a)).addChild((new g).add(this._barFill));
            var b;
            this.owner.addChild((new g).add(j.getField("results." + this._name.toLowerCase(), 190, A.Center).centerAnchor().disablePointer().setXY(109, 42))).addChild(a = (new g).add(j.getField("results.level"))).addChild(b = (new g).add(j.getField("results.experience", 190, A.Center)));
            var c = this._levelText = D.instance(a._compMap.Sprite_3, Ja);
            c.set_text(c._text + this._level);
            D.instance(a._compMap.Sprite_3, Ja).centerAnchor().disablePointer().setXY(109, 290);
            this._experience = D.instance(b._compMap.Sprite_3, Ja);
            this._experience.set_text(D.string(this._startExperience) + "/" + this._nextLevelExp);
            D.instance(b._compMap.Sprite_3, Ja).centerAnchor().disablePointer().setXY(109, 360);
            this._modalImgBack.setXY(240 * this._order, 700).centerAnchor();
            this._signalExperience = this._startExperience.get_changed().connect(v(this, this.onChangeExperience))
        },
        animate: function() {
            this.owner.add(new x);
            this.owner.add(new x).getComponent("Script_2").run(new W([new E([new N(0.3333 + 0.3333 * this._order), new C(this._modalImgBack.y, 0, 0.3333, u.cubeInOut)]), new E([new N(1.6664999999999999), new C(this._startExperience, this._startExperience._value + this._endExperience, 1)])]))
        },
        onChangeExperience: function(a) {
            a >= this._nextLevelExp && (this._nextLevelExp = Ba.computeExperience(++this._level), this._levelText.set_text("lvl: " + this._level), this.showNewLevel());
            this._experience.set_text(Math.floor(a) + "/" + this._nextLevelExp);
            this._experience.centerAnchor();
            this._experience.setXY(115, 360);
            this._barFill.width.set__(this.statusWidth())
        },
        showNewLevel: function() {
            this._global.getSound("sfx/UI_slap").play(1.2);
            this._modalNewLevel.y.animateTo(247, 0.1625);
            this._save.setHealth(this._save.getHealthMax());
            i.root._compMap.GameTracker_0.getSave().flush()
        },
        statusWidth: function() {
            return 139 * (this._startExperience._value / this._nextLevelExp)
        },
        __class__: nd
    });
    var hc = function() {
        this._characters = new S;
        this._saveCount = 0
    };
    e["com.avatar.components.save.Save"] = hc;
    hc.__name__ = ["com", "avatar", "components", "save", "Save"];
    hc.getStoredInstance = function() {
        if (i._platform.getStorage().get_supported()) {
            var a = i._platform.getStorage().get("avatar-10th-lsk-d");
            if (null != a) return ga.run(a)
        }
        return new hc
    };
    hc.prototype = {
        loadCharacter: function(a) {
            if (this._characters.exists(a.getName())) {
                var b;
                b = this._characters.get(a.getName());
                a.setExperience(b.getExperience());
                Ob.increaseLevel(a);
                b.getHealth() < a.getMaxHealth() / 2 ? a.setHealth(Math.floor(a.getMaxHealth() / 2)) : a.setHealth(b.getHealth())
            } else this.newCharacterSave(a, this._saveCount)
        },
        saveCharacter: function(a) {
            if (this._characters.exists(a.getName())) {
                var b;
                b = this._characters.get(a.getName());
                this.updateCharacterSave(a, this._saveCount, b)
            } else this.newCharacterSave(a, this._saveCount)
        },
        incrementSaveCount: function() {
            this._saveCount++
        },
        flush: function() {
            if (i._platform.getStorage().get_supported()) {
                var a = Aa.run(this);
                ga.run(a);
                i._platform.getStorage().set("avatar-10th-lsk-d", a)
            }
        },
        updateCharacterSave: function(a, b, c) {
            c.setExperience(a.getExperience());
            c.setExperienceBattle(a.getExperienceNew());
            c.setHealth(a.getHealth());
            c.setHealthMax(a.getMaxHealth());
            c.setCurrentSave(b)
        },
        newCharacterSave: function(a, b) {
            var c = new Zd(a.getName(), a.getExperience(), a.getExperienceNew(), a.getHealth(), a.getMaxHealth(), b);
            this._characters.set(new String(a.getName() + ""), c)
        },
        getLastSaveInformation: function() {
            for (var a = [], b = this._characters.iterator(); b.hasNext();) {
                var c = b.next();
                c.getCurrentSave() == this._saveCount && a.push(c)
            }
            return a
        },
        getLastBattleInformation: function() {
            for (var a = [], b = this._characters.iterator(); b.hasNext();) {
                var c = b.next();
                this.nameExists(c.getName()) && a.push(c)
            }
            return a
        },
        nameExists: function(a) {
            for (var b = i.root._compMap.GameTracker_0.lastBattleChars, c = 0, d = b.length; c < d;) {
                var f = c++;
                if (a == b[f]) return !0
            }
            return !1
        },
        hxSerialize: function(a) {
            a.serialize(this._characters);
            a.serialize(this._saveCount)
        },
        hxUnserialize: function(a) {
            this._characters = a.unserialize();
            this._saveCount = a.unserialize()
        },
        __class__: hc
    };
    var Wd = function() {
        this._actionsStateMap = new S
    };
    e["com.avatar.components.save.SaveActionState"] = Wd;
    Wd.__name__ = ["com", "avatar", "components", "save", "SaveActionState"];
    Wd.prototype = {
        actionStateSave: function(a) {
            var b = a.getName(),
                a = a.getActions();
            this._actionsStateMap.set(b, a)
        },
        actionStateLoad: function(a) {
            var b;
            b = this._actionsStateMap.get(a.getName());
            if (null != b)
                for (var a = a.getActions(), c = 0, d = b.length; c < d;) {
                    var f = c++;
                    this.actionPair(b[f], a)
                }
        },
        actionPair: function(a, b) {
            for (var c = 0, d = b.length; c < d;) {
                var f = c++;
                if (b[f].getActionType() == a.getActionType()) {
                    b[f].setTurnCount(a.getTurnCount().get__());
                    break
                }
            }
        },
        __class__: Wd
    };
    var Zd = function(a, b, c, d, f, h) {
        this._name = a;
        this._experience = b;
        this._experienceBattle = c;
        this._health = Math.floor(d);
        this._healthMax = f;
        this._lastSave = h;
        this._experience = 0
    };
    e["com.avatar.components.save.SaveCharacter"] = Zd;
    Zd.__name__ = ["com", "avatar", "components", "save", "SaveCharacter"];
    Zd.prototype = {
        getName: function() {
            return this._name
        },
        setExperience: function(a) {
            this._experience = a
        },
        addExperience: function(a) {
            this._experience += a
        },
        getExperience: function() {
            return this._experience
        },
        setExperienceBattle: function(a) {
            this._experienceBattle = a
        },
        getExperienceBattle: function() {
            return this._experienceBattle
        },
        setHealth: function(a) {
            this._health = a
        },
        setHealthMax: function(a) {
            this._healthMax = a
        },
        getHealth: function() {
            return this._health
        },
        getHealthMax: function() {
            return this._healthMax
        },
        setCurrentSave: function(a) {
            this._lastSave = a
        },
        getCurrentSave: function() {
            return this._lastSave
        },
        hxSerialize: function(a) {
            a.serialize(this._healthMax);
            a.serialize(this._name);
            a.serialize(this._experience);
            a.serialize(this._health);
            a.serialize(this._lastSave);
            a.serialize(this._experience)
        },
        hxUnserialize: function(a) {
            this._healthMax = a.unserialize();
            this._name = a.unserialize();
            this._experience = a.unserialize();
            this._health = a.unserialize();
            this._lastSave = a.unserialize();
            this._experience = a.unserialize()
        },
        __class__: Zd
    };
    var hb = function(a) {
        null == a && (a = !0);
        l.call(this);
        this.opaque = a;
        this.shown = new La;
        this.hidden = new La
    };
    e["flambe.scene.Scene"] = hb;
    hb.__name__ = ["flambe", "scene", "Scene"];
    hb.__super__ = l;
    hb.prototype = m(l.prototype, {
        get_name: function() {
            return "Scene_0"
        },
        __class__: hb
    });
    var Ma = function() {
        this._intialized = !1;
        hb.call(this);
        this.requiredPacks = []
    };
    e["s2.scene.BaseScene"] = Ma;
    Ma.__name__ = ["s2", "scene", "BaseScene"];
    Ma.__super__ = hb;
    Ma.prototype = m(hb.prototype, {
        onAdded: function() {
            var a = this.owner._compMap.Disposer_27;
            null == a && this.owner.add(a = new sa);
            var b = t.director.get_topScene(),
                b = null != b ? b._compMap.Scene_0 : null,
                c = null,
                c = null != b ? b.hidden.connect(v(this, this.onShown)).once() : this.shown.connect(v(this, this.onShown)).once();
            a.add(c);
            this._hiddenBind = this.hidden.connect(v(this, this.onHidden)).once();
            a.add(this._hiddenBind);
            a.connect0(i._platform.getStage().resize, v(this, this.onResize));
            this._intialized || (this.assetsReady(), this._intialized = !0, this.onResize())
        },
        assetsReady: function() {},
        injectAssets: function(a) {
            this._assets = a
        },
        onShown: function() {},
        onHidden: function() {},
        onResize: function() {},
        __class__: Ma
    });
    var H = function() {
        this.standardHeight = 768;
        this.standardWidth = 1366;
        Ma.call(this)
    };
    e["s2.scene.AutoBackingScene"] = H;
    H.__name__ = ["s2", "scene", "AutoBackingScene"];
    H.__super__ = Ma;
    H.prototype = m(Ma.prototype, {
        setBackground: function(a) {
            this.__ = new $d(this.standardWidth, this.standardHeight, a.getNaturalWidth(), a.getNaturalHeight());
            (null == this._backing ? this._backing = new g : this._backing).add(a);
            if (null != this.owner && null != this.owner.parent) this.onResize()
        },
        onAdded: function() {
            this.setBackground(new fa(16711680, this.standardWidth, this.standardHeight));
            this._container = (new g).add(new q).addChild(this._backing);
            this.owner.addChild(this._container);
            Ma.prototype.onAdded.call(this)
        },
        onResize: function() {
            var a = Math.min(i._platform.getStage().get_width() / (1024 * this.__.scaleX), i._platform.getStage().get_height() / (600 * this.__.scaleY)),
                b = this.__.newWidth * a,
                c = this.__.newHeight * a;
            this._container._compMap.Sprite_3.setScale(a).setXY(0.5 * (i._platform.getStage().get_width() - b), 0.5 * (i._platform.getStage().get_height() - c))
        },
        __class__: H
    });
    var Ka = function() {
        this.hasStarted = !1;
        H.call(this);
        this.requiredPacks.push("game_scene");
        this.requiredPacks.push("global")
    };
    e["com.avatar.scenes.BattleScene"] = Ka;
    Ka.__name__ = ["com", "avatar", "scenes", "BattleScene"];
    Ka.__super__ = H;
    Ka.prototype = m(H.prototype, {
        assetsReady: function() {
            var a = this,
                b = this.owner._compMap.Disposer_27,
                c = this._assets.get("game_scene"),
                d = this._assets.get("global");
            i.root._compMap.GameTracker_0.currentScene = "battle";
            i.root._compMap.GameTracker_0.lostLeftBattle = !1;
            var f = i.root._compMap.GameTracker_0.battleBackground;
            this._pack = c;
            this._global = d;
            "" != f ? this.setBackground(new Fb(this._global.getTexture("backgrounds/" + f + "_bg1"), this._global.getTexture("backgrounds/" + f + "_bg2"))) : this.setBackground(new Fb(this._global.getTexture("backgrounds/forest_bg1"), this._global.getTexture("backgrounds/forest_bg2")));
            this._btnPause = (new g).add(new r(d.getTexture("pauseBtn")));
            this._btnEscape = (new g).add(new r(c.getTexture("runBtn")));
            this._characterContainer = new g;
            this._characterContainerSpr = new q;
            this._container.add(this._characterContainerSpr);
            this._container.addChild(this._characterContainer).addChild(this._btnPause).addChild(this._btnEscape);
            b.connect1(this._btnPause._compMap.Sprite_3.get_pointerUp(), v(this, this.onPauseButtonClick));
            b.connect1(this._btnEscape._compMap.Sprite_3.get_pointerUp(), v(this, this.onEscapeButtonClick));
            b.connect0(this.owner._compMap.Scene_0.shown, function() {
                i.root._compMap.GameTracker_0.hasSeenBattle ? a.hasStarted || (a.hasStarted = !0, a.startGame(c, d, a._characterContainer)) : (i.root._compMap.GameTracker_0.hasSeenBattle = !0, i.root._compMap.GameTracker_0.flush(), t.push(qa, new Da(0.2)))
            })
        },
        onResize: function() {
            H.prototype.onResize.call(this);
            J.top(J.right(this._btnPause, 20), 40);
            J.bottom(J.center(this._btnEscape), 20)
        },
        onEscapeButtonClick: function() {
            this._global.getSound("sfx/UI_tick").play(2);
            s.stop();
            i.root._compMap.GameTracker_0.bossBattle ? this._pack.getSound("music/aseg_bossbattlemusic_endv1").play(1.4) : this._pack.getSound("music/aseg_battlemusic_endv1").play(1.4);
            i.root._compMap.GameTracker_0.leaveBattle();
            this._gameScreen.dispose();
            this._btnPause.dispose();
            this._btnEscape.dispose();
            t.push(db, new od(0.5, 15, 15))
        },
        onPauseButtonClick: function() {
            this._global.getSound("sfx/UI_pause").play(2);
            t.push(ib, new Da(0.2))
        },
        startGame: function(a, b, c) {
            var d = this;
            null == i.root._compMap.Sprite_3 && i.root.add(new q);
            this._global = b;
            this._gameScreen = new g;
            c.addChild(this._gameScreen);
            c.addChild(c = new g);
            null == this._gameScreen._compMap.Disposer_27 && this._gameScreen.add(new sa);
            this._gameScreen.add(new cd);
            this._gameScreen.add(new dd(b));
            var f = new Oc(a);
            this._gameScreen.add(f);
            this._gameScreen.add(new Cc);
            this._gameScreen.add(new Bc);
            var h;
            c.add(new x);
            c.add(new x).getComponent("Script_2").run(new E([new K(function() {
                s.stop();
                d._pack.getSound("music/aseg_battlemusic_introv1").play(1.4);
                d._gameScreen.add(h = new Ac(f, d._gameScreen, a, b));
                h.startBattle()
            }), new N(2), new K(function() {
                s.loop(a, "music/aseg_battlemusicloopv1")
            })]))
        },
        __class__: Ka
    });
    var qa = function() {
        this._bCanChange = !0;
        this._nCurScreen = 0;
        this._aScreens = [];
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("global");
        this.requiredPacks.push("instruction_battle_scene")
    };
    e["com.avatar.scenes.InstructionSceneBattle"] = qa;
    qa.__name__ = ["com", "avatar", "scenes", "InstructionSceneBattle"];
    qa.__super__ = H;
    qa.prototype = m(H.prototype, {
        onRemoved: function() {
            this._assets.unload("instruction_battle_scene")
        },
        assetsReady: function() {
            var a = this,
                b = this._assets.get("instruction_battle_scene");
            this._global = this._assets.get("global");
            var c = this.owner._compMap.Disposer_27;
            null == c && this.owner.add(c = new sa);
            this._script = this.owner._compMap.Script_2;
            null == this._script && this.owner.add(this._script = new x);
            this.setBackground((new fa(0, 1366, 768)).setAlpha(0.4));
            var d, f, h = (new g).add(f = new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("controls/content"))).setXY(246, 140))).addChild((new g).add(j.getField("instructionsPlayer.title").centerAnchor().disablePointer().setXY(f.getNaturalWidth() / 2, 80))).addChild((new g).add(d = j.getField("instructionsPlayer.standard", 220, A.Right).disablePointer().setXY(22, 150))).addChild((new g).add(j.getField("instructionsPlayer.standardBody", 220, A.Right).disablePointer().setXY(22, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsPlayer.special", 220, A.Right).disablePointer().setXY(22, 255))).addChild((new g).add(j.getField("instructionsPlayer.specialBody", 220, A.Right).disablePointer().setXY(22, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsPlayer.attack", 220, A.Right).disablePointer().setXY(22, 383))).addChild((new g).add(j.getField("instructionsPlayer.attackBody", 220, A.Right).disablePointer().setXY(22, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsPlayer.charge", 210, A.Left).disablePointer().setXY(645, 150))).addChild((new g).add(j.getField("instructionsPlayer.chargeBody", 210, A.Left).disablePointer().setXY(645, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsPlayer.health", 210, A.Left).disablePointer().setXY(645, 383))).addChild((new g).add(j.getField("instructionsPlayer.healthBody", 210, A.Left).disablePointer().setXY(645, this.calcY(d, 4))));
            this._aScreens.push(h);
            h = (new g).add(new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("targeting/left"))).setXY(83, 142))).addChild((new g).add((new r(b.getTexture("targeting/right"))).setXY(489, 139))).addChild((new g).add(d = j.getField("instructionsTarget.title").centerAnchor().disablePointer().setXY(f.getNaturalWidth() / 2, 80))).addChild((new g).add(d = j.getField("instructionsTarget.target", 190, A.Center).disablePointer().setXY(340, 155))).addChild((new g).add(d = j.getField("instructionsTarget.automaticTarget", 190, A.Center).disablePointer().setXY(340, 278))).addChild((new g).add(j.getField("instructionsTarget.automaticTargetBody", 190, A.Center).disablePointer().setXY(340, this.calcY(d, 4))));
            this._aScreens.push(h);
            h = (new g).add(new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("specials/avatar"))).setXY(44, 178))).addChild((new g).add((new r(b.getTexture("specials/icon1"))).setXY(254, 190))).addChild((new g).add((new r(b.getTexture("specials/icon2"))).setXY(254, 292))).addChild((new g).add((new r(b.getTexture("specials/icon3"))).setXY(551, 190))).addChild((new g).add((new r(b.getTexture("specials/icon4"))).setXY(549, 290))).addChild((new g).add(j.getField("instructionsSpecial.title").centerAnchor().disablePointer().setXY(f.getNaturalWidth() / 2, 80))).addChild((new g).add(d = j.getField("instructionsSpecial.air", 200).disablePointer().setXY(355, 205))).addChild((new g).add(j.getField("instructionsSpecial.airBody", 200).disablePointer().setXY(355, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsSpecial.water", 200).disablePointer().setXY(355, 310))).addChild((new g).add(j.getField("instructionsSpecial.waterBody", 200).disablePointer().setXY(355, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsSpecial.earth", 200).disablePointer().setXY(650, 205))).addChild((new g).add(j.getField("instructionsSpecial.earthBody", 200).disablePointer().setXY(650, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsSpecial.fire", 200).disablePointer().setXY(650, 310))).addChild((new g).add(j.getField("instructionsSpecial.fireBody", 200).disablePointer().setXY(650, this.calcY(d, 4))));
            this._aScreens.push(h);
            h = (new g).add(new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("group/cell1_icon"))).setXY(23, 334))).addChild((new g).add((new r(b.getTexture("group/cell1_photo"))).setXY(27, 162))).addChild((new g).add((new r(b.getTexture("group/cell2_icon"))).setXY(242, 334))).addChild((new g).add((new r(b.getTexture("group/cell2_photo"))).setXY(245, 164))).addChild((new g).add((new r(b.getTexture("group/cell3_icon"))).setXY(455, 334))).addChild((new g).add((new r(b.getTexture("group/cell3_photo"))).setXY(455, 164))).addChild((new g).add((new r(b.getTexture("group/cell4_icon"))).setXY(666, 334))).addChild((new g).add((new r(b.getTexture("group/cell4_photo"))).setXY(664, 164))).addChild((new g).add((new r(b.getTexture("group/line"))).setXY(229, 160))).addChild((new g).add((new r(b.getTexture("group/line"))).setXY(440, 160))).addChild((new g).add((new r(b.getTexture("group/line"))).setXY(650, 160))).addChild((new g).add(d = j.getField("instructionsGroup.title").centerAnchor().disablePointer().setXY(f.getNaturalWidth() / 2, 80))).addChild((new g).add(d = j.getField("instructionsGroup.katara", 220, A.Center).disablePointer().setXY(15, 136))).addChild((new g).add(d = j.getField("instructionsGroup.sokka", 220, A.Center).disablePointer().setXY(225, 136))).addChild((new g).add(d = j.getField("instructionsGroup.toph", 220, A.Center).disablePointer().setXY(435, 136))).addChild((new g).add(d = j.getField("instructionsGroup.zuko", 220, A.Center).disablePointer().setXY(645, 136))).addChild((new g).add(d = j.getField("instructionsGroup.water", 135, A.Left).disablePointer().setXY(107, 343))).addChild((new g).add(j.getField("instructionsGroup.waterBody", 135, A.Left).disablePointer().setXY(107, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsGroup.stun", 135, A.Left).disablePointer().setXY(327, 343))).addChild((new g).add(j.getField("instructionsGroup.stunBody", 135, A.Left).disablePointer().setXY(327, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsGroup.earth", 135, A.Left).disablePointer().setXY(538, 343))).addChild((new g).add(j.getField("instructionsGroup.earthBody", 135, A.Left).disablePointer().setXY(538, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsGroup.fire", 135, A.Left).disablePointer().setXY(748, 343))).addChild((new g).add(j.getField("instructionsGroup.fireBody", 135, A.Left).disablePointer().setXY(748, this.calcY(d, 4))));
            this._aScreens.push(h);
            h = (new g).add(new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("pickups/pickUps_elements"))).setXY(70, 73))).addChild((new g).add(d = j.getField("instructionsPickup.title").centerAnchor().disablePointer().setXY(f.getNaturalWidth() / 2, 80))).addChild((new g).add(d = j.getField("instructionsPickup.speed", 240, A.Center).disablePointer().setXY(42, 330))).addChild((new g).add(j.getField("instructionsPickup.speedBody", 240, A.Center).disablePointer().setXY(42, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsPickup.charge", 240, A.Center).disablePointer().setXY(315, 330))).addChild((new g).add(j.getField("instructionsPickup.chargeBody", 240, A.Center).disablePointer().setXY(315, this.calcY(d, 4)))).addChild((new g).add(d = j.getField("instructionsPickup.health", 240, A.Center).disablePointer().setXY(595, 330))).addChild((new g).add(j.getField("instructionsPickup.healthBody", 240, A.Center).disablePointer().setXY(595, this.calcY(d, 4))));
            this._aScreens.push(h);
            this._container.addChild(b = (new g).add(j.getField(ja.get_mobile() ? "instructions.tapContinue" : "instructions.clickContinue", 1366, A.Center).disablePointer().setXY(0, 621)));
            b._compMap.Sprite_3.alpha.set_behavior(new ka(1, 0.5, 0.4));
            b = 0;
            for (d = this._aScreens.length; b < d;) f = b++, this._aScreens[f]._compMap.Sprite_3.setXY(-q.getBounds(this._aScreens[f]).width, 110);
            this._aScreens[0]._compMap.Sprite_3.setXY(245, 110);
            this._container.addChild(this._aScreens[0]);
            this._nCurScreen = 0;
            c.connect1(i._platform.getPointer().down, function() {
                a.changeSlide()
            })
        },
        changeSlide: function() {
            var a = this;
            if (this._bCanChange)
                if (this._global.getSound("sfx/UI_tick").play(1.5), this._bCanChange = !1, this._nCurScreen++, this._nCurScreen == this._aScreens.length) t.director.popScene(t.getTransition());
                else {
                    var b = this._aScreens[this._nCurScreen - 1]._compMap.Sprite_3,
                        c = this._aScreens[this._nCurScreen]._compMap.Sprite_3;
                    this._container.addChild(this._aScreens[this._nCurScreen]);
                    this._script.run(new E([new W([new C(b.x, i._platform.getStage().get_width(), 0.25, u.quadIn), new C(b.alpha, 0, 0.25, u.quadIn), new E([new N(0.1), new W([new C(c.x, 245, 0.25, u.quadOut), new C(c.alpha, 1, 0.25, u.quadOut)])])]), new K(function() {
                        b.owner.parent.removeChild(b.owner);
                        a._bCanChange = !0
                    })]))
                }
        },
        calcY: function(a, b) {
            return a.y._value +
                a.getNaturalHeight() + b
        },
        __class__: qa
    });
    var Na = function() {
        this._bCanChange = !0;
        this._nCurScreen = 0;
        this._aScreens = [];
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("global");
        this.requiredPacks.push("instruction_map_scene")
    };
    e["com.avatar.scenes.InstructionSceneMap"] = Na;
    Na.__name__ = ["com", "avatar", "scenes", "InstructionSceneMap"];
    Na.__super__ = H;
    Na.prototype = m(H.prototype, {
        onRemoved: function() {
            this._assets.unload("instruction_map_scene")
        },
        assetsReady: function() {
            var a = this,
                b = this._assets.get("instruction_map_scene");
            this._global = this._assets.get("global");
            var c = this.owner._compMap.Disposer_27;
            null == c && this.owner.add(c = new sa);
            this._script = this.owner._compMap.Script_2;
            null == this._script && this.owner.add(this._script = new x);
            this.setBackground((new fa(0, 1366, 768)).setAlpha(0.4));
            var d, f;
            this._aScreens.push((new g).add(new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("map/map"))).setXY(29, 137))).addChild((new g).add((new r(b.getTexture("map/icon1"))).setXY(546, 70))).addChild((new g).add((new r(b.getTexture("map/icon2"))).setXY(543, 153))).addChild((new g).add((new r(b.getTexture("map/icon3"))).setXY(549, 235))).addChild((new g).add((new r(b.getTexture("map/icon4"))).setXY(523, 310))).addChild((new g).add((new r(b.getTexture("map/icon5"))).setXY(508, 401))).addChild((new g).add((new r(b.getTexture("map/vert_line"))).setXY(525, 76))).addChild((new g).add(j.getField("instructionsMap.title").disablePointer().centerAnchor().setXY(270, 85))).addChild((new g).add(d = j.getField("instructionsMap.appa1").disablePointer().setXY(622, 82))).addChild((new g).add(f = j.getField("instructionsMap.appa1Body", 235).disablePointer().setXY(622, this.calcY(d, 0)))).addChild((new g).add(d = j.getField("instructionsMap.scroll", 235).disablePointer().setXY(622, this.calcY(f, 0)))).addChild((new g).add(f = j.getField("instructionsMap.scrollBody", 235).disablePointer().setXY(622, this.calcY(d, 2)))).addChild((new g).add(d = j.getField("instructionsMap.boss", 235).disablePointer().setXY(622, this.calcY(f, 2)))).addChild((new g).add(f = j.getField("instructionsMap.bossBody", 235).disablePointer().setXY(622, this.calcY(d, 2)))).addChild((new g).add(d = j.getField("instructionsMap.appa2", 235).disablePointer().setXY(622, this.calcY(f, 0)))).addChild((new g).add(f = j.getField("instructionsMap.appa2Body", 235).disablePointer().setXY(622, this.calcY(d, 2)))).addChild((new g).add(d = j.getField("instructionsMap.roads", 235).disablePointer().setXY(622, this.calcY(f, 10)))).addChild((new g).add(f = j.getField("instructionsMap.roadsBody", 235).disablePointer().setXY(622, this.calcY(d, 2)))));
            this._container.addChild(b = (new g).add(j.getField(ja.get_mobile() ? "instructions.tapContinue" : "instructions.clickContinue", 1366, A.Center).disablePointer().setXY(0, 621)));
            b._compMap.Sprite_3.alpha.set_behavior(new ka(1, 0.5, 0.4));
            b = 0;
            for (d = this._aScreens.length; b < d;) f = b++, this._aScreens[f]._compMap.Sprite_3.setXY(-q.getBounds(this._aScreens[f]).width, 110);
            this._aScreens[0]._compMap.Sprite_3.setXY(245, 110);
            this._container.addChild(this._aScreens[0]);
            this._nCurScreen = 0;
            c.connect1(i._platform.getPointer().down, function() {
                a.changeSlide()
            })
        },
        changeSlide: function() {
            this._global.getSound("sfx/UI_tick").play(1.5);
            t.director.popScene(t.getTransition())
        },
        calcY: function(a, b) {
            return a.y._value + a.getNaturalHeight() + b
        },
        __class__: Na
    });
    var Oa = function() {
        this._bCanChange = !0;
        this._nCurScreen = 0;
        this._aScreens = [];
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("overlay_book3_scene");
        this.requiredPacks.push("global")
    };
    e["com.avatar.scenes.MapFinalSceneFire"] = Oa;
    Oa.__name__ = ["com", "avatar", "scenes", "MapFinalSceneFire"];
    Oa.__super__ = H;
    Oa.prototype = m(H.prototype, {
        onRemoved: function() {
            this._assets.unload("overlay_book3_scene")
        },
        assetsReady: function() {
            var a = this,
                b = this._assets.get("overlay_book3_scene");
            this._global = this._assets.get("global");
            var c = this.owner._compMap.Disposer_27;
            null == c && this.owner.add(c = new sa);
            this._script = this.owner._compMap.Script_2;
            null == this._script && this.owner.add(this._script = new x);
            this.setBackground((new fa(0, 1366, 768)).setAlpha(0.4));
            var d;
            this._aScreens.push((new g).add(new r(this._global.getTexture("slideBg"))).addChild((new g).add((new r(b.getTexture("bookThreePlayersShadows"))).setXY(-10, 330).setBlendMode(aa.Multiply))).addChild((new g).add((new r(b.getTexture("bookThreePlayers"))).setXY(15, 70))).addChild((new g).add((new r(b.getTexture("avatarLogo"))).setXY(410, 165))).addChild((new g).add(d = j.getField("bookThree.game", 300, A.Center).disablePointer().setXY(500, 60))).addChild((new g).add(j.getField("bookThree.congrats", 360, A.Center).disablePointer().setXY(470, this.calcY(d, 0)))).addChild((new g).add(j.getField(ja.get_mobile() ? "bookOne.tapAnywhere" : "bookOne.clickAnywhere", 500, A.Center).disablePointer().setXY(350, 400))));
            b = 0;
            for (d = this._aScreens.length; b < d;) {
                var f = b++;
                this._aScreens[f]._compMap.Sprite_3.setXY(-q.getBounds(this._aScreens[f]).width, 110)
            }
            this._aScreens[0]._compMap.Sprite_3.setXY(245, 110);
            this._container.addChild(this._aScreens[0]);
            this._nCurScreen = 0;
            c.connect1(i._platform.getPointer().down, function() {
                a.changeSlide()
            })
        },
        onResize: function() {
            H.prototype.onResize.call(this)
        },
        changeSlide: function() {
            this._bCanChange && (this._global.getSound("sfx/UI_tick").play(1.5), this._bCanChange = !1, t.director.popScene(t.getTransition()))
        },
        calcY: function(a, b) {
            return a.y._value + a.getNaturalHeight() + b
        },
        __class__: Oa
    });
    var sb = function() {
        H.call(this);
        this.requiredPacks.push("map_scene");
        this.requiredPacks.push("global");
        this.requiredPacks.push("pause_scene");
        this.requiredPacks.push("overlay_scenes")
    };
    e["com.avatar.scenes.MapScene"] = sb;
    sb.__name__ = ["com", "avatar", "scenes", "MapScene"];
    sb.__super__ = H;
    sb.prototype = m(H.prototype, {
        onRemoved: function() {
            this._assets.unload("map_scene");
            this._assets.unload("overlay_scenes")
        },
        assetsReady: function() {
            var a = this,
                b = this.owner._compMap.Disposer_27,
                c = this._assets.get("map_scene");
            this._global = this._assets.get("global");
            this._tracker = i.root._compMap.GameTracker_0;
            this._btnPause = (new g).add(new r(this._global.getTexture("pauseBtn")));
            this._mapContainer = new g;
            this._container.addChild(this._mapContainer).addChild(this._btnPause);
            b.connect0(this.owner._compMap.Scene_0.shown, function() {
                i.root._compMap.GameTracker_0.hasSeenMap || (i.root._compMap.GameTracker_0.hasSeenMap = !0, i.root._compMap.GameTracker_0.flush(), t.push(Na, new Da(0.2)));
                a._tracker.currentScene = "map";
                i.root._compMap.GameTracker_0.bossBattle = !1;
                s.loop(c, "music/aseg_selection_map_loopv1");
                a.checkSpecialBattleWin();
                a.checkBattleMainUnlock()
            });
            this.startMap(c, this._global, this._mapContainer);
            b.connect1(this._btnPause._compMap.Sprite_3.get_pointerUp(), v(this, this.onPauseButtonClick))
        },
        onResize: function() {
            H.prototype.onResize.call(this);
            J.top(J.right(this._btnPause, 20), 40)
        },
        onPauseButtonClick: function() {
            this._global.getSound("sfx/UI_pause").play(2);
            t.push(ib, new Da(0.2))
        },
        startMap: function(a, b, c) {
            null == c._compMap.Disposer_27 && c.add(new sa);
            a = new ld(a, b);
            c.add(a)
        },
        checkBattleMainUnlock: function() {
            if (this._tracker.hasScollsAll) {
                var a = new g;
                i.root.addChild(a);
                this._tracker.hasScollsAll = !1;
                var b = new g;
                b.add(j.getField("map.unlocked"));
                var c = b._compMap.Sprite_3;
                c.centerAnchor().setXY(683, 350).setScale(0);
                this._container.addChild(b);
                a.add(new x);
                a.add(new x).getComponent("Script_2").run(new E([new W([new C(c.scaleX, 1, 0.25, u.backOut), new C(c.scaleY, 1, 0.25, u.backOut)]), new N(1.5), new W([new C(c.scaleX, 0, 0.25, u.backIn), new C(c.scaleY, 0, 0.25, u.backIn)])]))
            }
        },
        checkSpecialBattleWin: function() {
            this._tracker.wonBattleScrollWater ? (t.push(Wa, new Da(0.2)), this._tracker.wonBattleScrollWater = !1) : this._tracker.wonBattleScrollEarth ? (t.push(Wa, new Da(0.2)), this._tracker.wonBattleScrollEarth = !1) : this._tracker.wonBattleScrollFire ? (t.push(Wa, new Da(0.2)), this._tracker.wonBattleScrollFire = !1) : this._tracker.wonBattleBossWater ? this._tracker.wonBattleBossWater = !1 : this._tracker.wonBattleBossEarth ? this._tracker.wonBattleBossEarth = !1 : this._tracker.wonBattleBossFire && (t.push(Oa, new Da(0.2)), this._tracker.wonBattleBossFire = !1)
        },
        __class__: sb
    });
    var rb = function() {
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("overlay_scenes");
        this.requiredPacks.push("global")
    };
    e["com.avatar.scenes.MapWarningScene"] = rb;
    rb.__name__ = ["com", "avatar", "scenes", "MapWarningScene"];
    rb.__super__ = H;
    rb.prototype = m(H.prototype, {
        assetsReady: function() {
            var a = this.owner._compMap.Disposer_27;
            this._pack = this._assets.get("overlay_scenes");
            this._global = this._assets.get("global");
            this._global.getSound("sfx/UI_error").play(1.5);
            this.setBackground(this._backSprite = new fa(0, 1366, 768));
            this._backSprite.setAlpha(0);
            this._viewEntity = new g;
            this._container.addChild(this._viewEntity);
            this.showWarning(this._pack, this._viewEntity);
            this._isResumed = !1;
            a.connect1(this._container._compMap.Sprite_3.get_pointerDown(), v(this, this.onResumeGame))
        },
        onResize: function() {
            H.prototype.onResize.call(this)
        },
        onResumeGame: function() {
            this._isResumed || (this._isResumed = !0, this._global.getSound("sfx/UI_tick").play(1.5), this._viewEntity.add(new x), this._viewEntity.add(new x).getComponent("Script_2").run(new E([new W([new C(this._warningImg.scaleX, 0, 0.5, u.backIn), new C(this._warningImg.scaleY, 0, 0.5, u.backIn), new C(this._backSprite.alpha, 0, 0.5, u.backIn)]), new K(function() {
                t["goto"](sb)
            })])))
        },
        showWarning: function(a, b) {
            this._warningImg = new r(a.getTexture("warningPanel_blank"));
            this._warningImg.centerAnchor();
            this._warningImg.setXY(683, 400);
            this._warningImg.setScale(0);
            var c = (new g).add(j.getField("warning.warning"));
            c._compMap.Sprite_3.centerAnchor().setXY(this._warningImg.getNaturalWidth() / 2, 80);
            var d = new g;
            i.root._compMap.GameTracker_0.lockLocation == y.WaterBattle ? d.add(j.getField("warning.collectAllWater", 510, A.Center)) : i.root._compMap.GameTracker_0.lockLocation == y.EarthBattle ? d.add(j.getField("warning.collectAllEarth", 510, A.Center)) : d.add(j.getField("warning.collectAllFire", 510, A.Center));
            d._compMap.Sprite_3.centerAnchor().setXY(this._warningImg.getNaturalWidth() / 2, 200);
            b.add(this._warningImg);
            b.addChild(c);
            b.addChild(d);
            b.add(new x);
            b.add(new x).getComponent("Script_2").run(new E([new W([new C(this._warningImg.scaleX, 1, 0.5, u.backOut), new C(this._warningImg.scaleY, 1, 0.5, u.backOut), new C(this._backSprite.alpha, 0.4, 0.5, u.backOut)])]))
        },
        __class__: rb
    });
    var ib = function() {
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("pause_scene");
        this.requiredPacks.push("global")
    };
    e["com.avatar.scenes.PauseScene"] = ib;
    ib.__name__ = ["com", "avatar", "scenes", "PauseScene"];
    ib.__super__ = H;
    ib.prototype = m(H.prototype, {
        assetsReady: function() {
            var a = this,
                b = this.owner._compMap.Disposer_27;
            this._pack = this._assets.get("pause_scene");
            this._global = this._assets.get("global");
            this.setBackground((new fa(0, 1366, 768)).setAlpha(0.4));
            this._frame = (new g).add(new r(this._pack.getTexture("pauseOverlayScreen")));
            var c = this._frame._compMap.Sprite_3.getNaturalWidth(),
                d = this._frame._compMap.Sprite_3.getNaturalHeight(),
                f = (new g).add((new r(this._pack.getTexture("resume"))).centerAnchor()).add(new Gb),
                h = (new g).add(new q).addChild((new g).add((new r(this._pack.getTexture(0 == i.volume._value ? "volume_on" : "volume_off"))).centerAnchor())).add(new Gb),
                e = (new g).add((new r(this._pack.getTexture("instructions"))).centerAnchor()).add(new Gb),
                l = (new g).add((new r(this._pack.getTexture("close"))).centerAnchor()).add(new Gb);
            this._buttons = (new g).add(new q);
            for (var B = [f, h, e, l], n = 0, m = 0, jc = B.length; m < jc;) {
                var p = m++,
                    p = B[p],
                    k = p._compMap.Sprite_3,
                    o = q.getBounds(p);
                k.setXY(n + 0.5 * o.width + 5, 0);
                n = k.x._value + 0.5 * o.width;
                this._buttons.addChild(p)
            }
            B = q.getBounds(this._buttons);
            this._buttons._compMap.Sprite_3.setXY(0.5 * c - B.get_centerX(), 0.5 * d - B.get_centerY());
            this._confirm = (new g).add(new q);
            m = (new g).add(j.getField("pause.confirmQuit").centerAnchor());
            m._compMap.Sprite_3.setXY(0.5 * c, 0.5 * q.getBounds(m).height - 80);
            B = (new g).add(j.getField("pause.yes").centerAnchor());
            B._compMap.Sprite_3.setXY(46, 65);
            n = (new g).add(j.getField("pause.no").centerAnchor());
            n._compMap.Sprite_3.setXY(q.getBounds(B).width + 89, 65);
            jc = (new g).add(new q).addChild(B).addChild(n);
            p = q.getBounds(jc);
            jc._compMap.Sprite_3.setXY(c / 2 - p.width / 2, m._compMap.Sprite_3.getNaturalHeight() * m._compMap.Sprite_3.scaleY._value + m._compMap.Sprite_3.y._value);
            this._confirm.addChild(m).addChild(jc);
            m = q.getBounds(this._confirm);
            this._confirm._compMap.Sprite_3.setXY(c / 2 - m.width / 2 - m.x, d / 2 - m.height / 2);
            this._frame.addChild(this._confirm);
            this._frame.addChild(this._buttons);
            this._container.addChild(this._frame);
            this._confirm._compMap.Sprite_3.set_visible(!1);
            b.connect1(h._compMap.Sprite_3.get_pointerUp(), v(this, this.onMuteClick));
            b.connect1(l._compMap.Sprite_3.get_pointerUp(), v(this, this.onQuitClick));
            b.connect1(f._compMap.Sprite_3.get_pointerUp(), v(this, this.onResumeGame));
            b.connect1(e._compMap.Sprite_3.get_pointerUp(), v(this, this.onHelpClick));
            b.connect1(this._backing._compMap.Sprite_3.get_pointerUp(), v(this, this.onResumeGame));
            b.connect1(n._compMap.Sprite_3.get_pointerUp(), v(this, this.onNoClick));
            b.connect1(B._compMap.Sprite_3.get_pointerUp(), v(this, this.onYesClick));
            b.connect2(i.volume.get_changed(), function(b) {
                h.disposeChildren();
                h.addChild((new g).add((new r(a._pack.getTexture(0 == b ? "volume_on" : "volume_off"))).centerAnchor()))
            })
        },
        onResize: function() {
            H.prototype.onResize.call(this);
            J.center(this._frame)
        },
        onYesClick: function() {
            this._global.getSound("sfx/UI_tick").play(1.5);
            t["goto"](cb)
        },
        onNoClick: function() {
            this._global.getSound("sfx/UI_tick").play(1.5);
            this._confirm._compMap.Sprite_3.set_visible(!1);
            this._buttons._compMap.Sprite_3.set_visible(!0);
            D.instance(this._frame._compMap.Sprite_3, r).texture = this._pack.getTexture("pauseOverlayScreen")
        },
        onMuteClick: function() {
            this._global.getSound("sfx/UI_tick").play(1.5);
            i.volume.set__(0 == i.volume._value ? 1 : 0)
        },
        onHelpClick: function() {
            this._global.getSound("sfx/UI_tick").play(1.5);
            "map" == i.root._compMap.GameTracker_0.currentScene ? t.push(Na) : "battle" == i.root._compMap.GameTracker_0.currentScene && t.push(qa)
        },
        onQuitClick: function() {
            this._global.getSound("sfx/UI_pause").play(1.5);
            this._confirm._compMap.Sprite_3.set_visible(!0);
            this._buttons._compMap.Sprite_3.set_visible(!1);
            D.instance(this._frame._compMap.Sprite_3, r).texture = this._pack.getTexture("confirmationOverlay")
        },
        onResumeGame: function() {
            this._global.getSound("sfx/UI_tick").play(1.5);
            t.director.popScene(t.getTransition())
        },
        __class__: ib
    });
    var db = function() {
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("result_scene");
        this.requiredPacks.push("global")
    };
    e["com.avatar.scenes.ResultScene"] = db;
    db.__name__ = ["com", "avatar", "scenes", "ResultScene"];
    db.__super__ = H;
    db.prototype = m(H.prototype, {
        assetsReady: function() {
            var a = this.owner._compMap.Disposer_27,
                b = this._assets.get("result_scene");
            this._global = this._assets.get("global");
            this._canEscape = !1;
            this.setBackground(this._backSprite = new fa(0, 1366, 768));
            this._backSprite.setAlpha(0);
            this.startResult(b, this._global, this._container);
            a.connect1(this._container._compMap.Sprite_3.get_pointerUp(), v(this, this.onResumeGame))
        },
        onResize: function() {
            H.prototype.onResize.call(this)
        },
        onResumeGame: function() {
            this._canEscape && (this._global.getSound("sfx/UI_tick").play(1.5), t["goto"](sb, new Da(0.2)))
        },
        startResult: function(a, b, c) {
            var d = this;
            null == c._compMap.Disposer_27 && c.add(new sa);
            c.addChild(this._warningEnt = new g);
            this._warningEnt.add(new x);
            this._warningEnt.add(new x).getComponent("Script_2").run(new E([new W([new C(this._backSprite.alpha, 0.4, 0.5, u.backOut), new K(function() {
                d._warningEnt.add(new md(a, b))
            })]), new N(2), new K(function() {
                d._canEscape = !0
            })]))
        },
        __class__: db
    });
    var Wa = function() {
        H.call(this);
        this.opaque = !1;
        this.requiredPacks.push("overlay_scenes");
        this.requiredPacks.push("global");
        this._canClick = !1;
        this._tracker = i.root._compMap.GameTracker_0
    };
    e["com.avatar.scenes.ScrollScene"] = Wa;
    Wa.__name__ = ["com", "avatar", "scenes", "ScrollScene"];
    Wa.__super__ = H;
    Wa.prototype = m(H.prototype, {
        assetsReady: function() {
            var a = this.owner._compMap.Disposer_27,
                b = this._assets.get("overlay_scenes");
            this._global = this._assets.get("global");
            this.setBackground(this._backSprite = new fa(0, 1366, 768));
            this._backSprite.setAlpha(0);
            this.startResult(b, this._global, this._container);
            a.connect1(this._container._compMap.Sprite_3.get_pointerDown(), v(this, this.onResumeGame))
        },
        onResize: function() {
            H.prototype.onResize.call(this)
        },
        onResumeGame: function() {
            this._canClick && (this._global.getSound("sfx/UI_tick").play(1.5), this._scrollEnt.add(new x), this._scrollEnt.add(new x).getComponent("Script_2").run(new E([new W([new C(this._backImg.scaleX, 0, 0.5, u.backIn), new C(this._backImg.scaleY, 0, 0.5, u.backIn), new C(this._backSprite.alpha, 0, 0.5, u.backIn)]), new K(function() {
                t["goto"](sb)
            })])))
        },
        startResult: function(a, b, c) {
            var d = this;
            this._mSprite = new q;
            this._backImg = new r(b.getTexture("slideBg"));
            b = null;
            this._tracker.wonBattleScrollWater ? b = new r(a.getTexture("scroll_water")) : this._tracker.wonBattleScrollEarth ? b = new r(a.getTexture("scroll_earth")) : this._tracker.wonBattleScrollFire && (b = new r(a.getTexture("scroll_fire")));
            this._scrollEnt = new g;
            this._backImg.centerAnchor();
            this._backImg.setXY(683, 400);
            this._backImg.setScale(0);
            c.addChild(this._scrollEnt = (new g).add(this._backImg));
            a = (new g).add(b.setXY(500, 105));
            c = (new g).add(j.getField("scroll.newScroll", 360, A.Center));
            c._compMap.Sprite_3.centerAnchor().setXY(270, 150);
            b = (new g).add(j.getField("scroll.earned", 360, A.Center));
            b._compMap.Sprite_3.centerAnchor().setXY(270, 300);
            var f = (new g).add(j.getField("scroll.clickContinue"));
            f._compMap.Sprite_3.centerAnchor().setXY(this._backImg.getNaturalWidth() / 2, 420).setScale(0);
            var h = 0,
                e = null;
            this._tracker.wonBattleScrollWater ? (h = i.root._compMap.GameTracker_0.scrollCountWater._value, e = (new g).add(j.getField("scroll.waterBending", null, A.Center))) : this._tracker.wonBattleScrollEarth ? (h = i.root._compMap.GameTracker_0.scrollCountEarth._value, e = (new g).add(j.getField("scroll.earthBending", null, A.Center))) : this._tracker.wonBattleScrollFire ? (h = i.root._compMap.GameTracker_0.scrollCountFire._value, e = (new g).add(j.getField("scroll.fireBending", null, A.Center))) : null;
            var l = D.instance(e._compMap.Sprite_3, Ja);
            l.setXY(615, 365);
            l.set_text(l._text + (" " + h + "/3"));
            this._scrollEnt.addChild(a);
            this._scrollEnt.addChild(c);
            this._scrollEnt.addChild(f);
            this._scrollEnt.addChild(b);
            this._scrollEnt.addChild(e);
            this._scrollEnt.add(new x);
            this._scrollEnt.add(new x).getComponent("Script_2").run(new E([new W([new C(this._backImg.scaleX, 0.8, 0.5, u.backOut), new C(this._backImg.scaleY, 0.8, 0.5, u.backOut), new C(this._backSprite.alpha, 0.4, 0.5, u.backOut)]), new N(0.5), new W([new C(f._compMap.Sprite_3.scaleX, 1, 0.5, u.backOut), new C(f._compMap.Sprite_3.scaleY, 1, 0.5, u.backOut)]), new K(function() {
                d._canClick = !0
            })]))
        },
        __class__: Wa
    });
    var cb = function() {
        H.call(this);
        this.requiredPacks.push("title_scene");
        this.requiredPacks.push("global")
    };
    e["com.avatar.scenes.TitleScene"] = cb;
    cb.__name__ = ["com", "avatar", "scenes", "TitleScene"];
    cb.__super__ = H;
    cb.prototype = m(H.prototype, {
        assetsReady: function() {
            var a = this.owner._compMap.Disposer_27;
            this._pack = this._assets.get("title_scene");
            this._global = this._assets.get("global");
            s.loop(this._pack, "music/aseg_titlescreenloopv1");
            i.root._compMap.GameTracker_0.reset();
            var b;
            this._container.addChild(b = (new g).add(this._muteBtn = new r(this._pack.getTexture(1 == i.volume._value ? "muteBtn" : "muteBtnOff"))));
            this._muteBtn.centerAnchor().setXY(220, 140);
            this.setBackground(new Fb(this._pack.getTexture("bg1"), this._pack.getTexture("bg2")));
            var c = (new g).add(j.getField(ja.get_mobile() ? "title.tapPlay" : "title.clickPlay", 700, A.Center).disablePointer().setXY(343, 615));
            c._compMap.Sprite_3.alpha.set_behavior(new ka(1, 0.5, 0.4));
            this._container.addChild(c);
            a.connect1(this._container._compMap.Sprite_3.get_pointerUp(), v(this, this.onNextButtonClick));
            a.connect1(b._compMap.Sprite_3.get_pointerUp(), v(this, this.onMuteClick))
        },
        onResize: function() {
            H.prototype.onResize.call(this)
        },
        onRemoved: function() {
            this._assets.unload("title_scene")
        },
        onNextButtonClick: function(a) {
            this._global.getSound("sfx/UI_tick").play(1.5);
            V.getClass(a.hit) != r && (Ua.track(["play"]), s.stop(), a = "music/aseg_titlescreen_endstingerv1a", 0.5 < Math.random() && (a = "music/aseg_titlescreen_endstingerv1b"), this._pack.getSound(a).play(2), t.push(sb))
        },
        onMuteClick: function() {
            i.volume.set__(0 == i.volume._value ? 1 : 0);
            this._muteBtn.texture = this._pack.getTexture(1 == i.volume._value ? "muteBtn" : "muteBtnOff")
        },
        __class__: cb
    });
    var lc = function() {};
    e["com.nick.main.JSEmbedProxy"] = lc;
    lc.__name__ = ["com", "nick", "main", "JSEmbedProxy"];
    lc.get_base = function() {
        return lc.callJSEmbedMethod("baseUrl()")
    };
    lc.callJSEmbedMethod = function(a) {
        try {
            var b = eval("jsembed." + a);
            if (null != b) return b
        } catch (c) {
            c instanceof n && (c = c.val)
        }
        return ""
    };
    var sa = function() {
        l.call(this);
        this._disposables = []
    };
    e["flambe.Disposer"] = sa;
    sa.__name__ = ["flambe", "Disposer"];
    sa.__super__ = l;
    sa.prototype = m(l.prototype, {
        get_name: function() {
            return "Disposer_27"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        connect0: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        connect1: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        connect2: function(a, b) {
            this.add(a.connect(b));
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            l.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: sa
    });
    var g = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    e["flambe.Entity"] = g;
    g.__name__ = ["flambe", "Entity"];
    g.__interfaces__ = [Va];
    g.prototype = {
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
                var d = c.next;
                if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d
            }
            return !1
        },
        getComponent: function(a) {
            return this._compMap[a]
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, d = this.firstChild; null != d;) c = d, d = d.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var d = c.next;
                if (c == a) {
                    null == b ? this.firstChild = d : b.next = d;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = d
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        _internal_getFromParents: function(a, b) {
            var c = this;
            do {
                var d = c._compMap[a];
                null != b && (d = d instanceof b ? d : null);
                if (null != d) return d;
                c = c.parent
            } while (null != c);
            return null
        },
        __class__: g
    };
    var Be = function() {};
    e["flambe.util.PackageLog"] = Be;
    Be.__name__ = ["flambe", "util", "PackageLog"];
    var ae = function() {};
    e["flambe.platform.Platform"] = ae;
    ae.__name__ = ["flambe", "platform", "Platform"];
    ae.prototype = {
        __class__: ae
    };
    var tb = function() {};
    e["flambe.platform.html.HtmlPlatform"] = tb;
    tb.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    tb.__interfaces__ = [ae];
    tb.prototype = {
        init: function() {
            var a = this;
            L.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {
                c instanceof
                n && (c = c.val)
            }
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new Rb(b);
            this._pointer = new na;
            this._mouse = new pd(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Sb;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var d = 0,
                f = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var f = b.getBoundingClientRect(),
                            h = a.getX(c, f),
                            f = a.getY(c, f);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(h, f, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(h, f);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(h, f, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(h, f, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", f, !1);
            window.addEventListener("mousemove", f, !1);
            window.addEventListener("mouseup", f, !1);
            b.addEventListener("mousewheel", f, !1);
            b.addEventListener("DOMMouseScroll", f, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var h = "undefined" != typeof window.ontouchstart,
                f = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (h || f) {
                var e = new qd(this._pointer, h ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = e;
                f = function(b) {
                    var c;
                    c = h ? b.changedTouches : [b];
                    var f = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            L.SHOULD_HIDE_MOBILE_BROWSER && L.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var g = c[b];
                                ++b;
                                var B = a.getX(g, f),
                                    j = a.getY(g, f);
                                e.submitDown((h ? g.identifier : g.pointerId) | 0, B, j)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) g = c[b], ++b, B = a.getX(g, f), j = a.getY(g, f), e.submitMove((h ? g.identifier : g.pointerId) | 0, B, j);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) g = c[b], ++b, B = a.getX(g, f), j = a.getY(g, f), e.submitUp((h ? g.identifier : g.pointerId) | 0, B, j)
                    }
                };
                h ? (b.addEventListener("touchstart", f, !1), b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", f, !1), b.addEventListener("touchcancel", f, !1)) : (b.addEventListener("MSPointerDown", f, !1), b.addEventListener("MSPointerMove", f, !1), b.addEventListener("MSPointerUp", f, !1))
            } else this._touch = new rd;
            var g = window.onerror;
            window.onerror = function(a, b, c) {
                i.uncaughtError.emit(a);
                return null != g ? g(a, b, c) : !1
            };
            var B = L.loadExtension("hidden", window.document);
            null != B.value ? (f = function() {
                i.hidden.set__(da.field(window.document, B.field))
            }, f(null), window.document.addEventListener(B.prefix + "visibilitychange", f, !1)) : (f = function(a) {
                i.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", f, !1), window.addEventListener("pagehide", f, !1));
            i.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var j = L.loadExtension("requestAnimationFrame").value;
            if (null != j) {
                var l = window.performance,
                    m = null != l && L.polyfill("now", l);
                m ? this._lastUpdate = l.now() : null;
                var p = null,
                    p = function(c) {
                        a.update(m ? l.now() : c);
                        j(p, b)
                    };
                j(p, b)
            } else window.setInterval(function() {
                a.update(Date.now())
            }, 16);
            mc.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) {
            return (new T(this, a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = Ce.getLocalStorage();
                this._storage = null != a ? new sd(a) : new td
            }
            return this._storage
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            i.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getMouse: function() {
            return this._mouse
        },
        getTouch: function() {
            return this._touch
        },
        getExternal: function() {
            null == this._external && (this._external = new ud);
            return this._external
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX -
                b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            return new Tb(a)
        },
        __class__: tb
    };
    var R = function(a, b) {
        this._value = a;
        this._changed = null != b ? new Ub(b) : null
    };
    e["flambe.util.Value"] = R;
    R.__name__ = ["flambe", "util", "Value"];
    R.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        get__: function() {
            return this._value
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new Ub);
            return this._changed
        },
        toString: function() {
            return "" + D.string(this._value)
        },
        __class__: R
    };
    var Vb = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    e["flambe.util.SignalConnection"] = Vb;
    Vb.__name__ = ["flambe", "util", "SignalConnection"];
    Vb.__interfaces__ = [Va];
    Vb.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: Vb
    };
    var ia = function(a) {
        this._head = null != a ? new Vb(this, a) : null;
        this._deferredTasks = null
    };
    e["flambe.util.SignalBase"] = ia;
    ia.__name__ = ["flambe", "util", "SignalBase"];
    ia.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                d = new Vb(this, a);
            this._head == ia.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(d, b)
            }) : this.listAdd(d, b);
            return d
        },
        disconnect: function(a) {
            var b = this;
            this._head == ia.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new be(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = ia.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, d = this._head; null != d;) c = d, d = d._next;
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
        __class__: ia
    };
    var Ub = function(a) {
        ia.call(this, a)
    };
    e["flambe.util.Signal2"] = Ub;
    Ub.__name__ = ["flambe", "util", "Signal2"];
    Ub.__super__ = ia;
    Ub.prototype = m(ia.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == ia.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), d = c; null != d;) d._listener(a, b), d.stayInList || d.dispose(), d = d._next;
            this.didEmit(c)
        },
        __class__: Ub
    });
    var ba = function(a) {
        ia.call(this, a)
    };
    e["flambe.util.Signal1"] = ba;
    ba.__name__ = ["flambe", "util", "Signal1"];
    ba.__super__ = ia;
    ba.prototype = m(ia.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == ia.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: ba
    });
    var Y = function(a, b) {
        this._behavior = null;
        R.call(this, a, b)
    };
    e["flambe.animation.AnimatedFloat"] = Y;
    Y.__name__ = ["flambe", "animation", "AnimatedFloat"];
    Y.__super__ = R;
    Y.prototype = m(R.prototype, {
        set__: function(a) {
            this._behavior = null;
            return R.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (R.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animateTo: function(a, b, c) {
            this.set_behavior(new ub(this._value, a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: Y
    });
    var i = function() {};
    e["flambe.System"] = i;
    i.__name__ = ["flambe", "System"];
    i.init = function() {
        i._calledInit || (i._platform.init(), i._calledInit = !0)
    };
    i.loadAssetPack = function(a) {
        return i._platform.loadAssetPack(a)
    };
    var mc = function() {};
    e["flambe.Log"] = mc;
    mc.__name__ = ["flambe", "Log"];
    mc.info = function() {
        null
    };
    mc.__super__ = Be;
    mc.prototype = m(Be.prototype, {
        __class__: mc
    });
    var zb = function(a) {
        null == a && (a = 1);
        this._realDt = 0;
        l.call(this);
        this.scale = new Y(a)
    };
    e["flambe.SpeedAdjuster"] = zb;
    zb.__name__ = ["flambe", "SpeedAdjuster"];
    zb.__super__ = l;
    zb.prototype = m(l.prototype, {
        get_name: function() {
            return "SpeedAdjuster_30"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: zb
    });
    var vd = function() {};
    e["flambe.animation.Behavior"] = vd;
    vd.__name__ = ["flambe", "animation", "Behavior"];
    vd.prototype = {
        __class__: vd
    };
    var u = function() {};
    e["flambe.animation.Ease"] = u;
    u.__name__ = ["flambe", "animation", "Ease"];
    u.linear = function(a) {
        return a
    };
    u.quadIn = function(a) {
        return a * a
    };
    u.quadOut = function(a) {
        return a * (2 - a)
    };
    u.cubeInOut = function(a) {
        return 0.5 >= a ? 4 * a * a * a : 1 + 4 * --a * a * a
    };
    u.quintInOut = function(a) {
        return 1 > (a *= 2) ? a * a * a * a * a / 2 : ((a -= 2) * a * a * a * a + 2) / 2
    };
    u.circInOut = function(a) {
        return 0.5 >= a ? (Math.sqrt(1 - 4 * a * a) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2
    };
    u.expoOut = function(a) {
        return -Math.pow(2, -10 * a) + 1
    };
    u.backIn = function(a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    u.backOut = function(a) {
        return 1 - --a * a * (-2.70158 * a - 1.70158)
    };
    u.elasticIn = function(a) {
        return -(Math.pow(2, 10 * (a -= 1)) * Math.sin(6.283185307179586 * (a - 0.06366197723675814 * Math.asin(1)) / 0.4))
    };
    u.elasticInOut = function(a) {
        return 0.5 > a ? -0.5 * Math.pow(2, 10 * (a -= 0.5)) * Math.sin(6.283185307179586 * (a - 0.1) / 0.4) : 0.5 * Math.pow(2, -10 * (a -= 0.5)) * Math.sin(6.283185307179586 * (a - 0.1) / 0.4) + 1
    };
    var ka = function(a, b, c, d, f) {
        null == f && (f = 0);
        null == d && (d = 0);
        null == c && (c = 1);
        this.start = a;
        this.end = b;
        this.cycles = d;
        this.speed = new Y(c);
        this._count = 1.5707963267948966 + f * (3.141592653589793 / c);
        this._distance = 0.5 * (a - b);
        this._center = b + this._distance
    };
    e["flambe.animation.Sine"] = ka;
    ka.__name__ = ["flambe", "animation", "Sine"];
    ka.__interfaces__ = [vd];
    ka.prototype = {
        update: function(a) {
            this.speed.update(a);
            this._count += a * (3.141592653589793 / this.speed._value);
            return this.isComplete() ? this._center + 3.141592653589793 * this._distance : this._center + Math.sin(this._count) * this._distance
        },
        isComplete: function() {
            return 0 < this.cycles && 0.5 * ((this._count - 1.5707963267948966) / 3.141592653589793) >= this.cycles
        },
        __class__: ka
    };
    var ub = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != d ? d : u.linear
    };
    e["flambe.animation.Tween"] = ub;
    ub.__name__ = ["flambe", "animation", "Tween"];
    ub.__interfaces__ = [vd];
    ub.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: ub
    };
    var Hb = function() {};
    e["flambe.asset.Asset"] = Hb;
    Hb.__name__ = ["flambe", "asset", "Asset"];
    Hb.__interfaces__ = [Va];
    Hb.prototype = {
        __class__: Hb
    };
    var w = e["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    w.WEBP = ["WEBP", 0];
    w.WEBP.__enum__ = w;
    w.JXR = ["JXR", 1];
    w.JXR.__enum__ = w;
    w.PNG = ["PNG", 2];
    w.PNG.__enum__ = w;
    w.JPG = ["JPG", 3];
    w.JPG.__enum__ = w;
    w.GIF = ["GIF", 4];
    w.GIF.__enum__ = w;
    w.DDS = ["DDS", 5];
    w.DDS.__enum__ = w;
    w.PVR = ["PVR", 6];
    w.PVR.__enum__ = w;
    w.PKM = ["PKM", 7];
    w.PKM.__enum__ = w;
    w.MP3 = ["MP3", 8];
    w.MP3.__enum__ = w;
    w.M4A = ["M4A", 9];
    w.M4A.__enum__ = w;
    w.OPUS = ["OPUS", 10];
    w.OPUS.__enum__ = w;
    w.OGG = ["OGG", 11];
    w.OGG.__enum__ = w;
    w.WAV = ["WAV", 12];
    w.WAV.__enum__ = w;
    w.Data = ["Data", 13];
    w.Data.__enum__ = w;
    var ce = function(a, b, c, d) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d
    };
    e["flambe.asset.AssetEntry"] = ce;
    ce.__name__ = ["flambe", "asset", "AssetEntry"];
    ce.prototype = {
        __class__: ce
    };
    var nc = function() {};
    e["flambe.asset.AssetPack"] = nc;
    nc.__name__ = ["flambe", "asset", "AssetPack"];
    nc.__interfaces__ = [Va];
    nc.prototype = {
        __class__: nc
    };
    var wd = function() {};
    e["flambe.asset.File"] = wd;
    wd.__name__ = ["flambe", "asset", "File"];
    wd.__interfaces__ = [Hb];
    wd.prototype = {
        __class__: wd
    };
    var Z = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    e["flambe.asset.Manifest"] = Z;
    Z.__name__ = ["flambe", "asset", "Manifest"];
    Z.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = da.field(oc.getType(Z).assets[0], a);
        if (null == c) {
            if (b) throw new n(la.withFields("Missing asset pack", ["name", a]));
            return null
        }
        var d = new Z;
        d.set_localBase("assets");
        for (var f = 0; f < c.length;) {
            var h = c[f];
            ++f;
            var e = h.name,
                g = a + "/" + e + "?v=" + D.string(h.md5),
                B = Z.inferFormat(e);
            B != w.Data && (e = la.removeFileExtension(e));
            d.add(e, g, h.bytes, B)
        }
        return d
    };
    Z.exists = function(a) {
        return da.hasField(oc.getType(Z).assets[0], a)
    };
    Z.inferFormat = function(a) {
        a = la.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return w.GIF;
            case "jpg":
            case "jpeg":
                return w.JPG;
            case "jxr":
            case "wdp":
                return w.JXR;
            case "png":
                return w.PNG;
            case "webp":
                return w.WEBP;
            case "dds":
                return w.DDS;
            case "pvr":
                return w.PVR;
            case "pkm":
                return w.PKM;
            case "m4a":
                return w.M4A;
            case "mp3":
                return w.MP3;
            case "ogg":
                return w.OGG;
            case "opus":
                return w.OPUS;
            case "wav":
                return w.WAV
        } else null;
        return w.Data
    };
    Z.prototype = {
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = Z.inferFormat(b));
            a = new ce(a, b, d, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return z.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && Z._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? la.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && xd.that(!M.startsWith(a, "http://") && !M.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        set_remoteBase: function(a) {
            null != a && xd.that(M.startsWith(a, "http://") || M.startsWith(a, "https://"), "remoteBase must be on a remote domain, starting with http(s)://", null);
            return this._remoteBase = a
        },
        __class__: Z
    };
    var aa = e["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    aa.Normal = ["Normal", 0];
    aa.Normal.__enum__ = aa;
    aa.Add = ["Add", 1];
    aa.Add.__enum__ = aa;
    aa.Multiply = ["Multiply", 2];
    aa.Multiply.__enum__ = aa;
    aa.Screen = ["Screen", 3];
    aa.Screen.__enum__ = aa;
    aa.Mask = ["Mask", 4];
    aa.Mask.__enum__ = aa;
    aa.Copy = ["Copy", 5];
    aa.Copy.__enum__ = aa;
    var Wb = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    e["flambe.math.Point"] = Wb;
    Wb.__name__ = ["flambe", "math", "Point"];
    Wb.prototype = {
        __class__: Wb
    };
    var q = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = this._sinCache = this._cosCache = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        l.call(this);
        this._flags |= 182;
        this._localMatrix = new vb;
        var b = function() {
            a._flags |= 24
        };
        this.x = new Y(0, b);
        this.y = new Y(0, b);
        this.rotation = new Y(0, function() {
            a._flags |= 152
        });
        this.scaleX = new Y(1, b);
        this.scaleY = new Y(1, b);
        this.anchorX = new Y(0, b);
        this.anchorY = new Y(0, b);
        this.alpha = new Y(1)
    };
    e["flambe.display.Sprite"] = q;
    q.__name__ = ["flambe", "display", "Sprite"];
    q.hitTest = function(a, b, c) {
        var d = a._compMap.Sprite_3;
        if (null != d) {
            if (6 != (d._flags & 6)) return null;
            d.getLocalMatrix().inverseTransform(b, c, q._scratchPoint) && (b = q._scratchPoint.x, c = q._scratchPoint.y);
            var f = d.scissor;
            if (null != f && !f.contains(b, c)) return null
        }
        a = q.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
    };
    q.getBounds = function(a, b) {
        null == b && (b = new Eb);
        b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
        q.getBoundsImpl(a, null, b);
        b.width -= b.x;
        b.height -= b.y;
        return b
    };
    q.render = function(a, b) {
        var c = a._compMap.Sprite_3;
        if (null != c) {
            var d = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= d) return;
            b.save();
            1 > d && b.multiplyAlpha(d);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var d = c.getLocalMatrix(),
                f = d.m02,
                h = d.m12;
            0 != (c._flags & 32) && (f = Math.round(f), h = Math.round(h));
            b.transform(d.m00, d.m10, d.m01, d.m11, f, h);
            d = c.scissor;
            null != d && b.applyScissor(d.x, d.y, d.width, d.height);
            c.draw(b)
        }
        d = a._compMap.Director_31;
        if (null != d) {
            d = d.occludedScenes;
            for (f = 0; f < d.length;) h = d[f], ++f, q.render(h, b)
        }
        for (d = a.firstChild; null != d;) f = d.next, q.render(d, b), d = f;
        null != c && b.restore()
    };
    q.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var d = q.hitTestBackwards(a.next, b, c);
            return null != d ? d : q.hitTest(a, b, c)
        }
        return null
    };
    q.getBoundsImpl = function(a, b, c) {
        var d = a._compMap.Sprite_3;
        if (null != d) {
            var b = null != b ? vb.multiply(b, d.getLocalMatrix()) : d.getLocalMatrix(),
                f = d.getNaturalWidth(),
                d = d.getNaturalHeight();
            0 < f && 0 < d && (q.extendRect(b, 0, 0, c), q.extendRect(b, f, 0, c), q.extendRect(b, f, d, c), q.extendRect(b, 0, d, c))
        }
        f = a._compMap.Director_31;
        if (null != f)
            for (var f = f.occludedScenes, d = 0, h = f.length; d < h;) q.getBoundsImpl(f[d], b, c), ++d;
        for (a = a.firstChild; null != a;) f = a.next, q.getBoundsImpl(a, b, c), a = f
    };
    q.extendRect = function(a, b, c, d) {
        a = a.transform(b, c, q._scratchPoint);
        b = a.x;
        c = a.y;
        b < d.x && (d.x = b);
        c < d.y && (d.y = c);
        b > d.width && (d.width = b);
        c > d.height && (d.height = c)
    };
    q.__super__ = l;
    q.prototype = m(l.prototype, {
        get_name: function() {
            return "Sprite_3"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
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
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix = null != a ? vb.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);
                ++this._viewMatrixUpdateCount
            }
            return this._viewMatrix
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
        setBlendMode: function(a) {
            this.blendMode = a;
            return this
        },
        disablePointer: function() {
            this.set_pointerEnabled(!1);
            return this
        },
        disablePixelSnapping: function() {
            this.set_pixelSnapping(!1);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
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
        isViewMatrixDirty: function() {
            if (0 != (this._flags & 16)) return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty()
        },
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_3;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new ba);
            return this._pointerDown
        },
        get_pointerMove: function() {
            null == this._pointerMove && (this._pointerMove = new ba);
            return this._pointerMove
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new ba);
            return this._pointerUp
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new ba);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = i._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                null != a._hoverConnection && (a._hoverConnection.dispose(), a._hoverConnection = null)
            }))
        },
        set_visible: function(a) {
            this._flags = pc.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = pc.set(this._flags, 4, a);
            return a
        },
        set_pixelSnapping: function(a) {
            this._flags = pc.set(this._flags, 32, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
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
        __class__: q
    });
    var fa = function(a, b, c) {
        q.call(this);
        this.color = a;
        this.width = new Y(b);
        this.height = new Y(c)
    };
    e["flambe.display.FillSprite"] = fa;
    fa.__name__ = ["flambe", "display", "FillSprite"];
    fa.__super__ = q;
    fa.prototype = m(q.prototype, {
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
            q.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: fa
    });
    var yd = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    e["flambe.display.Glyph"] = yd;
    yd.__name__ = ["flambe", "display", "Glyph"];
    yd.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? D["int"](this._kernings.h[a]) : 0
        },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new Pa);
            this._kernings.h[a] = b
        },
        __class__: yd
    };
    var Xb = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    e["flambe.display.Font"] = Xb;
    Xb.__name__ = ["flambe", "display", "Font"];
    Xb.prototype = {
        disposeFiles: function() {
            this._file.dispose();
            return this
        },
        layoutText: function(a, b, c, d, f) {
            null == f && (f = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = A.Left);
            return new Ib(this, a, b, c, d, f)
        },
        reload: function() {
            this._glyphs = new Pa;
            this._glyphs.h[Xb.NEWLINE.charCode] = Xb.NEWLINE;
            for (var a = new Yb(this._file.toString()), b = new Pa, c = this.name.lastIndexOf("/"), c = 0 <= c ? z.substr(this.name, 0, c + 1) : "", d = a.keywords(); d.hasNext();) switch (d.next()) {
                case "info":
                    for (var f = a.pairs(); f.hasNext();) {
                        var h = f.next();
                        switch (h.key) {
                            case "size":
                                this.size = h.getInt()
                        }
                    }
                    break;
                case "common":
                    for (f = a.pairs(); f.hasNext();) switch (h = f.next(), h.key) {
                        case "lineHeight":
                            this.lineHeight = h.getInt()
                    }
                    break;
                case "page":
                    for (var f = 0, h = null, e = a.pairs(); e.hasNext();) {
                        var g = e.next();
                        switch (g.key) {
                            case "id":
                                f = g.getInt();
                                break;
                            case "file":
                                h = g.getString()
                        }
                    }
                    h = this._pack.getTexture(c + la.removeFileExtension(h));
                    b.h[f] = h;
                    break;
                case "char":
                    f = null;
                    for (h = a.pairs(); h.hasNext();) switch (e = h.next(), e.key) {
                        case "id":
                            f = new yd(e.getInt());
                            break;
                        case "x":
                            f.x = e.getInt();
                            break;
                        case "y":
                            f.y = e.getInt();
                            break;
                        case "width":
                            f.width = e.getInt();
                            break;
                        case "height":
                            f.height = e.getInt();
                            break;
                        case "page":
                            e = e.getInt();
                            f.page = b.h[e];
                            break;
                        case "xoffset":
                            f.xOffset = e.getInt();
                            break;
                        case "yoffset":
                            f.yOffset = e.getInt();
                            break;
                        case "xadvance":
                            f.xAdvance = e.getInt()
                    }
                    this._glyphs.h[f.charCode] = f;
                    break;
                case "kerning":
                    f = null;
                    e = h = 0;
                    for (g = a.pairs(); g.hasNext();) {
                        var B = g.next();
                        switch (B.key) {
                            case "first":
                                f = this._glyphs.h[B.getInt()];
                                break;
                            case "second":
                                h = B.getInt();
                                break;
                            case "amount":
                                e = B.getInt()
                        }
                    }
                    null != f && 0 != e && f.setKerning(h, e)
            }
        },
        __class__: Xb
    };
    var A = e["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    A.Left = ["Left", 0];
    A.Left.__enum__ = A;
    A.Center = ["Center", 1];
    A.Center.__enum__ = A;
    A.Right = ["Right", 2];
    A.Right.__enum__ = A;
    var Ib = function(a, b, c, d, f, h) {
        this.lines = 0;
        var e = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + h);
        this.bounds = new Eb;
        for (var g = [], h = b.length, B = 0; B < h;) {
            var j = B++,
                j = b.charCodeAt(j),
                j = a._glyphs.h[j];
            null != j ? this._glyphs.push(j) : null
        }
        for (var b = -1, i = 0, l = 0, a = a._glyphs.h[10], h = function() {
                e.bounds.width = jb.max(e.bounds.width, i);
                e.bounds.height += l;
                g[e.lines] = i;
                l = i = 0;
                ++e.lines
            }, B = 0; B < this._glyphs.length;) {
            j = this._glyphs[B];
            this._offsets[B] = Math.round(i);
            var m = 0 < d && i + j.width > d;
            m || j == a ? (m && (0 <= b ? (this._glyphs[b] = a, i = this._offsets[b], B = b) : this._glyphs.splice(B, 0, a)), b = -1, l = this._lineOffset, h()) : (32 == j.charCode && (b = B), i += j.xAdvance + f, l = jb.max(l, j.height + j.yOffset), B + 1 < this._glyphs.length && (i += j.getKerning(this._glyphs[B + 1].charCode)));
            ++B
        }
        h();
        f = 0;
        a = Ib.getAlignOffset(c, g[0], d);
        b = 1.79769313486231E308;
        h = -1.79769313486231E308;
        j = B = 0;
        for (m = this._glyphs.length; j < m;) {
            var n = this._glyphs[j];
            10 == n.charCode && (f += this._lineOffset, ++B, a = Ib.getAlignOffset(c, g[B], d));
            this._offsets[j] += a;
            var p = f + n.yOffset,
                b = b < p ? b : p,
                h = jb.max(h, p + n.height);
            ++j
        }
        this.bounds.x = Ib.getAlignOffset(c, this.bounds.width, d);
        this.bounds.y = b;
        this.bounds.height = h - b
    };
    e["flambe.display.TextLayout"] = Ib;
    Ib.__name__ = ["flambe", "display", "TextLayout"];
    Ib.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2)
        }
    };
    Ib.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, d = this._glyphs.length; c < d;) {
                var f = this._glyphs[c];
                10 == f.charCode ? b += this._lineOffset : f.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Ib
    };
    var Yb = function(a) {
        this._configText = a;
        this._keywordPattern = new Ga("([A-Za-z]+)(.*)", "");
        this._pairPattern = new Ga('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    e["flambe.display._Font.ConfigParser"] = Yb;
    Yb.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Yb.advance = function(a, b) {
        var c = b.matchedPos();
        return z.substr(a, c.pos + c.len, a.length)
    };
    Yb.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = Yb.advance(b, a._keywordPattern);
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
                    b = Yb.advance(b, a._pairPattern);
                    return new de(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Yb
    };
    var de = function(a, b) {
        this.key = a;
        this._value = b
    };
    e["flambe.display._Font.ConfigPair"] = de;
    de.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    de.prototype = {
        getInt: function() {
            return D.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : z.substr(this._value, 1, this._value.length - 2)
        },
        __class__: de
    };
    var ee = function() {};
    e["flambe.display.Graphics"] = ee;
    ee.__name__ = ["flambe", "display", "Graphics"];
    ee.prototype = {
        __class__: ee
    };
    var r = function(a) {
        q.call(this);
        this.texture = a
    };
    e["flambe.display.ImageSprite"] = r;
    r.__name__ = ["flambe", "display", "ImageSprite"];
    r.__super__ = q;
    r.prototype = m(q.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: r
    });
    var Zb = e["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    Zb.Portrait = ["Portrait", 0];
    Zb.Portrait.__enum__ = Zb;
    Zb.Landscape = ["Landscape", 1];
    Zb.Landscape.__enum__ = Zb;
    var zd = function() {};
    e["flambe.display.Texture"] = zd;
    zd.__name__ = ["flambe", "display", "Texture"];
    zd.__interfaces__ = [Hb];
    zd.prototype = {
        __class__: zd
    };
    var Ad = function() {};
    e["flambe.display.SubTexture"] = Ad;
    Ad.__name__ = ["flambe", "display", "SubTexture"];
    Ad.__interfaces__ = [zd];
    Ad.prototype = {
        __class__: Ad
    };
    var Ja = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        q.call(this);
        this._font = a;
        this._text = b;
        this._align = A.Left;
        this._flags |= 256;
        var d = function() {
            c._flags |= 256
        };
        this.wrapWidth = new Y(0, d);
        this.letterSpacing = new Y(0, d);
        this.lineSpacing = new Y(0, d)
    };
    e["flambe.display.TextSprite"] = Ja;
    Ja.__name__ = ["flambe", "display", "TextSprite"];
    Ja.__super__ = q;
    Ja.prototype = m(q.prototype, {
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
        get_text: function() {
            return this._text
        },
        set_text: function(a) {
            a != this._text && (this._text = a, this._flags |= 256);
            return a
        },
        set_font: function(a) {
            a != this._font && (this._font = a, this._flags |= 256);
            return a
        },
        set_align: function(a) {
            a != this._align && (this._align = a, this._flags |= 256);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 256) && (this._flags &= -257, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            q.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: Ja
    });
    var Ea = e["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    Ea.Left = ["Left", 0];
    Ea.Left.__enum__ = Ea;
    Ea.Middle = ["Middle", 1];
    Ea.Middle.__enum__ = Ea;
    Ea.Right = ["Right", 2];
    Ea.Right.__enum__ = Ea;
    Ea.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = Ea;
        return a
    };
    var Qa = e["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    Qa.Default = ["Default", 0];
    Qa.Default.__enum__ = Qa;
    Qa.Button = ["Button", 1];
    Qa.Button.__enum__ = Qa;
    Qa.None = ["None", 2];
    Qa.None.__enum__ = Qa;
    var fe = function() {
        this.init(0, 0, 0, null)
    };
    e["flambe.input.MouseEvent"] = fe;
    fe.__name__ = ["flambe", "input", "MouseEvent"];
    fe.prototype = {
        init: function(a, b, c, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d
        },
        __class__: fe
    };
    var Bd = e["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    Bd.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Bd;
        return a
    };
    Bd.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = Bd;
        return a
    };
    var ge = function() {
        this.init(0, 0, 0, null, null)
    };
    e["flambe.input.PointerEvent"] = ge;
    ge.__name__ = ["flambe", "input", "PointerEvent"];
    ge.prototype = {
        init: function(a, b, c, d, f) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = f;
            this._stopped = !1
        },
        __class__: ge
    };
    var he = function(a) {
        this.id = a;
        this._source = Bd.Touch(this)
    };
    e["flambe.input.TouchPoint"] = he;
    he.__name__ = ["flambe", "input", "TouchPoint"];
    he.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: he
    };
    var jb = function() {};
    e["flambe.math.FMath"] = jb;
    jb.__name__ = ["flambe", "math", "FMath"];
    jb.max = function(a, b) {
        return a > b ? a : b
    };
    jb.clamp = function(a, b, c) {
        return a < b ? b : a > c ? c : a
    };
    var vb = function() {
        this.identity()
    };
    e["flambe.math.Matrix"] = vb;
    vb.__name__ = ["flambe", "math", "Matrix"];
    vb.multiply = function(a, b, c) {
        null == c && (c = new vb);
        var d = a.m00 * b.m00 + a.m01 * b.m10,
            f = a.m00 * b.m01 + a.m01 * b.m11,
            h = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = d;
        c.m01 = f;
        c.m02 = h;
        d = a.m10 * b.m00 + a.m11 * b.m10;
        f = a.m10 * b.m01 + a.m11 * b.m11;
        h = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = d;
        c.m11 = f;
        c.m12 = h;
        return c
    };
    vb.prototype = {
        set: function(a, b, c, d, f, h) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = f;
            this.m10 = b;
            this.m11 = d;
            this.m12 = h
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        transform: function(a, b, c) {
            null == c && (c = new Wb);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a, b, c) {
            var d = this.determinant();
            if (0 == d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d;
            return !0
        },
        clone: function(a) {
            null == a && (a = new vb);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: vb
    };
    var Eb = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d)
    };
    e["flambe.math.Rectangle"] = Eb;
    Eb.__name__ = ["flambe", "math", "Rectangle"];
    Eb.prototype = {
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = d
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
        get_centerX: function() {
            return this.x + this.width / 2
        },
        get_centerY: function() {
            return this.y + this.height / 2
        },
        __class__: Eb
    };
    var ra = function() {
        this._disposed = !1
    };
    e["flambe.platform.BasicAsset"] = ra;
    ra.__name__ = ["flambe", "platform", "BasicAsset"];
    ra.__interfaces__ = [Hb];
    ra.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: ra
    };
    var Jb = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Cd;
        this._bytesLoaded = new S;
        this._pack = new Dd(b, this);
        var d = Nb.array(b);
        if (0 == d.length) this.handleSuccess();
        else {
            for (var f = new S, h = 0; h < d.length;) {
                var e = d[h];
                ++h;
                var g = f.get(e.name);
                null == g && (g = [], f.set(e.name, g));
                g.push(e)
            }
            this._assetsRemaining = Nb.count(f);
            for (d = new Ed(f, f.arrayKeys()); d.hasNext();) f = [d.next()], this.pickBestEntry(f[0], function(a) {
                return function(d) {
                    if (null != d) {
                        var f = b.getFullURL(d);
                        try {
                            c.loadEntry(f, d)
                        } catch (h) {
                            h instanceof n && (h = h.val), c.handleError(d, "Unexpected error: " + D.string(h))
                        }
                        f = c.promise;
                        f.set_total(f._total + d.bytes)
                    } else d = a[0][0], Jb.isAudio(d.format) ? c.handleLoad(d, Fa.getInstance()) : c.handleError(d, "Could not find a supported format to load")
                }
            }(f))
        }
    };
    e["flambe.platform.BasicAssetPackLoader"] = Jb;
    Jb.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Jb.isAudio = function(a) {
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
    Jb.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var d = 0; d < c.length;) {
                    var f = c[d];
                    ++d;
                    for (var h = 0; h < a.length;) {
                        var e = a[h];
                        ++h;
                        if (e.format == f) {
                            b(e);
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
                        c = this._pack.textures;
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
            for (var c = 0, d = this._bytesLoaded.iterator(); d.hasNext();) var f = d.next(),
                c = c + f;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(la.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Jb
    };
    var Dd = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new S;
        this.sounds = new S;
        this.files = new S
    };
    e["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Dd;
    Dd.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    Dd.__interfaces__ = [nc];
    Dd.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw new n(la.withFields("Missing texture", ["name", a]));
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw new n(la.withFields("Missing sound", ["name", a]));
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw new n(la.withFields("Missing file", ["name", a]));
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
        get_manifest: function() {
            return this._manifest
        },
        __class__: Dd
    };
    var qc = function(a) {
        this._disposed = !1;
        this._content = a
    };
    e["flambe.platform.BasicFile"] = qc;
    qc.__name__ = ["flambe", "platform", "BasicFile"];
    qc.__interfaces__ = [wd];
    qc.__super__ = ra;
    qc.prototype = m(ra.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: qc
    });
    var ie = function() {};
    e["flambe.subsystem.MouseSystem"] = ie;
    ie.__name__ = ["flambe", "subsystem", "MouseSystem"];
    ie.prototype = {
        __class__: ie
    };
    var xa = function(a) {
        this._pointer = a;
        this._source = Bd.Mouse(xa._sharedEvent);
        this.down = new ba;
        this.move = new ba;
        this.up = new ba;
        this.scroll = new ba;
        this._y = this._x = 0;
        this._cursor = Qa.Default;
        this._buttonStates = new Pa
    };
    e["flambe.platform.BasicMouse"] = xa;
    xa.__name__ = ["flambe", "platform", "BasicMouse"];
    xa.__interfaces__ = [ie];
    xa.prototype = {
        get_supported: function() {
            return !0
        },
        set_cursor: function(a) {
            return this._cursor = a
        },
        submitDown: function(a, b, c) {
            this._buttonStates.h.hasOwnProperty(c) || (this._buttonStates.h[c] = !0, this.prepare(a, b, je.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(xa._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit(xa._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.h.hasOwnProperty(c) && (this._buttonStates.remove(c), this.prepare(a, b, je.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(xa._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            xa._sharedEvent.init(xa._sharedEvent.id + 1, a, b, c)
        },
        __class__: xa
    };
    var ke = function() {};
    e["flambe.subsystem.PointerSystem"] = ke;
    ke.__name__ = ["flambe", "subsystem", "PointerSystem"];
    ke.prototype = {
        __class__: ke
    };
    var na = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new ba;
        this.move = new ba;
        this.up = new ba;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    e["flambe.platform.BasicPointer"] = na;
    na.__name__ = ["flambe", "platform", "BasicPointer"];
    na.__interfaces__ = [ke];
    na.prototype = {
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var d = [],
                    f = q.hitTest(i.root, a, b);
                if (null != f) {
                    var h = f.owner;
                    do {
                        var e = h._compMap.Sprite_3;
                        null != e && d.push(e);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerDown(na._sharedEvent), na._sharedEvent._stopped) return;
                this.down.emit(na._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var d = [],
                    f = q.hitTest(i.root, a, b);
                if (null != f) {
                    var h = f.owner;
                    do {
                        var e = h._compMap.Sprite_3;
                        null != e && d.push(e);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerMove(na._sharedEvent), na._sharedEvent._stopped) return;
                this.move.emit(na._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var d = [],
                    f = q.hitTest(i.root, a, b);
                if (null != f) {
                    var h = f.owner;
                    do {
                        var e = h._compMap.Sprite_3;
                        null != e && d.push(e);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.onPointerUp(na._sharedEvent), na._sharedEvent._stopped) return;
                this.up.emit(na._sharedEvent)
            }
        },
        prepare: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            na._sharedEvent.init(na._sharedEvent.id + 1, a, b, c, d)
        },
        __class__: na
    };
    var Kb = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    e["flambe.platform.BasicTexture"] = Kb;
    Kb.__name__ = ["flambe", "platform", "BasicTexture"];
    Kb.__interfaces__ = [Ad];
    Kb.__super__ = ra;
    Kb.prototype = m(ra.prototype, {
        subTexture: function(a, b, c, d) {
            c = this.root.createTexture(c, d);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        split: function(a, b) {
            null == b && (b = 1);
            for (var c = [], d = this._width / a | 0, f = this._height / b | 0, h = 0; h < b;)
                for (var e = h++, g = 0; g < a;) {
                    var j = g++;
                    c.push(this.subTexture(j * d, e * f, d, f))
                }
            return c
        },
        get_graphics: function() {
            return this.root.getGraphics()
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_x: function() {
            return this._x
        },
        get_y: function() {
            return this._y
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: Kb
    });
    var Fd = function() {};
    e["flambe.subsystem.TouchSystem"] = Fd;
    Fd.__name__ = ["flambe", "subsystem", "TouchSystem"];
    Fd.prototype = {
        __class__: Fd
    };
    var qd = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new Pa;
        this._points = [];
        this.down = new ba;
        this.move = new ba;
        this.up = new ba
    };
    e["flambe.platform.BasicTouch"] = qd;
    qd.__name__ = ["flambe", "platform", "BasicTouch"];
    qd.__interfaces__ = [Fd];
    qd.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.h.hasOwnProperty(a)) {
                var d = new he(a);
                d.init(b, c);
                this._pointMap.h[a] = d;
                this._points.push(d);
                null == this._pointerTouch && (this._pointerTouch = d, this._pointer.submitDown(b, c, d._source));
                this.down.emit(d)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.h[a];
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var d = this._pointMap.h[a];
            null != d && (d.init(b, c), this._pointMap.remove(a), z.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b, c, d._source)), this.up.emit(d))
        },
        __class__: qd
    };
    var $b = function() {};
    e["flambe.sound.Sound"] = $b;
    $b.__name__ = ["flambe", "sound", "Sound"];
    $b.__interfaces__ = [Hb];
    $b.prototype = {
        __class__: $b
    };
    var Fa = function() {
        this._disposed = !1;
        this._playback = new Gd(this)
    };
    e["flambe.platform.DummySound"] = Fa;
    Fa.__name__ = ["flambe", "platform", "DummySound"];
    Fa.__interfaces__ = [$b];
    Fa.getInstance = function() {
        null == Fa._instance && (Fa._instance = new Fa);
        return Fa._instance
    };
    Fa.__super__ = ra;
    Fa.prototype = m(ra.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: Fa
    });
    var ac = function() {};
    e["flambe.sound.Playback"] = ac;
    ac.__name__ = ["flambe", "sound", "Playback"];
    ac.__interfaces__ = [Va];
    ac.prototype = {
        __class__: ac
    };
    var Gd = function(a) {
        this._sound = a;
        this.volume = new Y(0);
        this._complete = new R(!0)
    };
    e["flambe.platform.DummyPlayback"] = Gd;
    Gd.__name__ = ["flambe", "platform", "DummyPlayback"];
    Gd.__interfaces__ = [ac];
    Gd.prototype = {
        get_sound: function() {
            return this._sound
        },
        dispose: function() {},
        __class__: Gd
    };
    var Hd = function() {};
    e["flambe.subsystem.StorageSystem"] = Hd;
    Hd.__name__ = ["flambe", "subsystem", "StorageSystem"];
    Hd.prototype = {
        __class__: Hd
    };
    var td = function() {
        this.clear()
    };
    e["flambe.platform.DummyStorage"] = td;
    td.__name__ = ["flambe", "platform", "DummyStorage"];
    td.__interfaces__ = [Hd];
    td.prototype = {
        get_supported: function() {
            return !1
        },
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        get: function(a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        clear: function() {
            this._hash = new S
        },
        __class__: td
    };
    var rd = function() {
        this.down = new ba;
        this.move = new ba;
        this.up = new ba
    };
    e["flambe.platform.DummyTouch"] = rd;
    rd.__name__ = ["flambe", "platform", "DummyTouch"];
    rd.__interfaces__ = [Fd];
    rd.prototype = {
        get_supported: function() {
            return !1
        },
        __class__: rd
    };
    var rc = function() {
        this._entries = []
    };
    e["flambe.platform.EventGroup"] = rc;
    rc.__name__ = ["flambe", "platform", "EventGroup"];
    rc.__interfaces__ = [Va];
    rc.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new le(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var d = this;
            this.addListener(a, b, function(a) {
                d.dispose();
                c(a)
            })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: rc
    };
    var le = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    e["flambe.platform._EventGroup.Entry"] = le;
    le.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    le.prototype = {
        __class__: le
    };
    var Id = function() {};
    e["flambe.platform.InternalGraphics"] = Id;
    Id.__name__ = ["flambe", "platform", "InternalGraphics"];
    Id.__interfaces__ = [ee];
    Id.prototype = {
        __class__: Id
    };
    var me = function() {};
    e["flambe.subsystem.RendererSystem"] = me;
    me.__name__ = ["flambe", "subsystem", "RendererSystem"];
    me.prototype = {
        __class__: me
    };
    var Jd = function() {};
    e["flambe.platform.InternalRenderer"] = Jd;
    Jd.__name__ = ["flambe", "platform", "InternalRenderer"];
    Jd.__interfaces__ = [me];
    Jd.prototype = {
        __class__: Jd
    };
    var Sb = function() {
        this._tickables = []
    };
    e["flambe.platform.MainLoop"] = Sb;
    Sb.__name__ = ["flambe", "platform", "MainLoop"];
    Sb.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_30;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var d = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = d
        }
        for (c = a.firstChild; null != c;) d = c.next, Sb.updateEntity(c, b), c = d
    };
    Sb.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                i.volume.update(a);
                Sb.updateEntity(i.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), q.render(i.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: Sb
    };
    var je = function() {};
    e["flambe.platform.MouseCodes"] = je;
    je.__name__ = ["flambe", "platform", "MouseCodes"];
    je.toButton = function(a) {
        switch (a) {
            case 0:
                return Ea.Left;
            case 1:
                return Ea.Middle;
            case 2:
                return Ea.Right
        }
        return Ea.Unknown(a)
    };
    var ne = function() {};
    e["flambe.platform.TextureRoot"] = ne;
    ne.__name__ = ["flambe", "platform", "TextureRoot"];
    ne.prototype = {
        __class__: ne
    };
    var Kd = function() {};
    e["flambe.platform.Tickable"] = Kd;
    Kd.__name__ = ["flambe", "platform", "Tickable"];
    Kd.prototype = {
        __class__: Kd
    };
    var Xa = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    e["flambe.platform.html.CanvasGraphics"] = Xa;
    Xa.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Xa.__interfaces__ = [Id];
    Xa.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        translate: function(a, b) {
            this._canvasCtx.translate(a | 0, b | 0)
        },
        scale: function(a, b) {
            this._canvasCtx.scale(a, b)
        },
        transform: function(a, b, c, d, f, h) {
            this._canvasCtx.transform(a, b, c, d, f, h)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, d, f, h, e) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, f, h, e), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + d | 0, a.rootY + f | 0, h | 0, e | 0, b | 0, c | 0, h | 0, e | 0)
        },
        fillRect: function(a, b, c, d, f) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, d, f), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + D.string(a);
                this._canvasCtx.fillStyle = "#" + D.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, d | 0, f | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
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
        applyScissor: function(a, b, c, d) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, d | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        __class__: Xa
    };
    var Tb = function(a) {
        this.graphics = new Xa(a, !1);
        this._hasGPU = new R(!0)
    };
    e["flambe.platform.html.CanvasRenderer"] = Tb;
    Tb.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Tb.__interfaces__ = [Jd];
    Tb.prototype = {
        get_type: function() {
            return wb.Canvas
        },
        createTextureFromImage: function(a) {
            a = new bc(Tb.CANVAS_TEXTURES ? L.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        createTexture: function(a, b) {
            return (new bc(L.createEmptyCanvas(a, b))).createTexture(a, b)
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
        __class__: Tb
    };
    var Ld = function(a, b, c) {
        Kb.call(this, a, b, c)
    };
    e["flambe.platform.html.CanvasTexture"] = Ld;
    Ld.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Ld.__super__ = Kb;
    Ld.prototype = m(Kb.prototype, {
        __class__: Ld
    });
    var bc = function(a) {
        this._graphics = null;
        this.updateCount = 0;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    e["flambe.platform.html.CanvasTextureRoot"] = bc;
    bc.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    bc.__interfaces__ = [ne];
    bc.__super__ = ra;
    bc.prototype = m(ra.prototype, {
        createTexture: function(a, b) {
            return new Ld(this, a, b)
        },
        getGraphics: function() {
            null == this._graphics && (this.getContext2d(), this._graphics = new Md(this));
            return this._graphics
        },
        getContext2d: function() {
            G.__instanceof(this.image, HTMLCanvasElement) || (this.image = L.createCanvas(this.image));
            return this.image.getContext("2d", null)
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: bc
    });
    var Md = function(a) {
        Xa.call(this, a.image, !0);
        this._renderTarget = a
    };
    e["flambe.platform.html._CanvasTextureRoot.InternalGraphics"] = Md;
    Md.__name__ = ["flambe", "platform", "html", "_CanvasTextureRoot", "InternalGraphics"];
    Md.__super__ = Xa;
    Md.prototype = m(Xa.prototype, {
        drawTexture: function(a, b, c) {
            Xa.prototype.drawTexture.call(this, a, b, c);
            ++this._renderTarget.updateCount
        },
        drawSubTexture: function(a, b, c, d, f, h, e) {
            Xa.prototype.drawSubTexture.call(this, a, b, c, d, f, h, e);
            ++this._renderTarget.updateCount
        },
        fillRect: function(a, b, c, d, f) {
            Xa.prototype.fillRect.call(this, a, b, c, d, f);
            ++this._renderTarget.updateCount
        },
        __class__: Md
    });
    var T = function(a, b) {
        Jb.call(this, a, b)
    };
    e["flambe.platform.html.HtmlAssetPackLoader"] = T;
    T.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    T.detectImageFormats = function(a) {
        var b = [w.PNG, w.JPG, w.GIF],
            c = 2,
            d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function() {
            1 == d.width && b.unshift(w.WEBP);
            --c;
            0 == c && a(b)
        };
        d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var f;
        f = window.document.createElement("img");
        f.onload = f.onerror = function() {
            1 == f.width && b.unshift(w.JXR);
            --c;
            0 == c && a(b)
        };
        f.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    T.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == v(a, a.canPlayType)) return [];
        var b = new Ga("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!U.get_supported() && b.match(c)) return [];
        for (var b = [{
                format: w.M4A,
                mimeType: "audio/mp4; codecs=mp4a"
            }, {
                format: w.MP3,
                mimeType: "audio/mpeg"
            }, {
                format: w.OPUS,
                mimeType: "audio/ogg; codecs=opus"
            }, {
                format: w.OGG,
                mimeType: "audio/ogg; codecs=vorbis"
            }, {
                format: w.WAV,
                mimeType: "audio/wav"
            }], c = [], d = 0; d < b.length;) {
            var f = b[d];
            ++d;
            var h = "";
            try {
                h = a.canPlayType(f.mimeType)
            } catch (e) {
                e instanceof
                n && (e = e.val)
            }
            "" != h && c.push(f.format)
        }
        return c
    };
    T.supportsBlob = function() {
        if (T._detectBlobSupport) {
            T._detectBlobSupport = !1;
            if ((new Ga("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            T._URL = L.loadExtension("URL").value
        }
        return null != T._URL && null != T._URL.createObjectURL
    };
    T.__super__ = Jb;
    T.prototype = m(Jb.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var d;
                    d = window.document.createElement("img");
                    var f = new rc;
                    f.addDisposingListener(d, "load", function() {
                        T.supportsBlob() && T._URL.revokeObjectURL(d.src);
                        var a = c._platform.getRenderer().createTextureFromImage(d);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    f.addDisposingListener(d, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    T.supportsBlob() ? this.download(a, b, "blob", function(a) {
                        d.src = T._URL.createObjectURL(a)
                    }) : d.src = a;
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
                    if (U.get_supported()) this.download(a, b, "arraybuffer", function(a) {
                        U.ctx.decodeAudioData(a, function(a) {
                            c.handleLoad(b, new U(a))
                        }, function() {
                            c.handleLoad(b, Fa.getInstance())
                        })
                    });
                    else {
                        var h;
                        h = window.document.createElement("audio");
                        h.preload = "auto";
                        var e = ++T._mediaRefCount;
                        null == T._mediaElements && (T._mediaElements = new Pa);
                        T._mediaElements.h[e] = h;
                        f = new rc;
                        f.addDisposingListener(h, "canplaythrough", function() {
                            T._mediaElements.remove(e);
                            c.handleLoad(b, new sc(h))
                        });
                        f.addDisposingListener(h, "error", function() {
                            T._mediaElements.remove(e);
                            var a = h.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, Fa.getInstance()) : c.handleError(b, "Failed to load audio: " + h.error.code)
                        });
                        f.addListener(h, "progress", function() {
                            if (0 < h.buffered.length && 0 < h.duration) {
                                var a = h.buffered.end(0) / h.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        h.src = a;
                        h.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b, new qc(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == T._supportedFormats && (T._supportedFormats = new Cd, T.detectImageFormats(function(a) {
                T._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(T.detectAudioFormats()).concat([w.Data]))
            }));
            T._supportedFormats.get(a)
        },
        download: function(a, b, c, d) {
            var f = this,
                h = null,
                e = null,
                g = 0,
                j = !1,
                i = function() {
                    j && (j = !1, window.clearInterval(g))
                },
                l = 3,
                m = function() {
                    --l;
                    return 0 <= l ? (e(), !0) : !1
                },
                e = function() {
                    i();
                    null != h && h.abort();
                    h = new XMLHttpRequest;
                    h.open("GET", a, !0);
                    h.responseType = c;
                    var e = 0;
                    h.onprogress = function(a) {
                        j || (j = !0, g = window.setInterval(function() {
                            4 != h.readyState && 5E3 < Date.now() - e && !m() && (i(), f.handleError(b, "Download stalled"))
                        }, 1E3));
                        e = Date.now();
                        f.handleProgress(b, a.loaded)
                    };
                    h.onerror = function() {
                        if (0 != h.status || !m()) i(), f.handleError(b, "HTTP error " + h.status)
                    };
                    h.onload = function() {
                        var a = h.response;
                        null == a && (a = h.responseText);
                        i();
                        d(a)
                    };
                    h.send()
                };
            e()
        },
        __class__: T
    });
    var oe = function() {};
    e["flambe.subsystem.ExternalSystem"] = oe;
    oe.__name__ = ["flambe", "subsystem", "ExternalSystem"];
    oe.prototype = {
        __class__: oe
    };
    var ud = function() {};
    e["flambe.platform.html.HtmlExternal"] = ud;
    ud.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    ud.__interfaces__ = [oe];
    ud.prototype = {
        get_supported: function() {
            return !0
        },
        call: function(a, b) {
            null == b && (b = []);
            for (var c = window, d = c, f = 0, h = a.split("."); f < h.length;) {
                var e = h[f];
                ++f;
                c = d;
                d = da.field(c, e)
            }
            return da.callMethod(c, d, b)
        },
        __class__: ud
    };
    var pd = function(a, b) {
        xa.call(this, a);
        this._canvas = b
    };
    e["flambe.platform.html.HtmlMouse"] = pd;
    pd.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    pd.__super__ = xa;
    pd.prototype = m(xa.prototype, {
        set_cursor: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "";
                    break;
                case 1:
                    b = "pointer";
                    break;
                case 2:
                    b = "none"
            }
            this._canvas.style.cursor = b;
            return xa.prototype.set_cursor.call(this, a)
        },
        __class__: pd
    });
    var sc = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    e["flambe.platform.html.HtmlSound"] = sc;
    sc.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    sc.__interfaces__ = [$b];
    sc.__super__ = ra;
    sc.prototype = m(ra.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new tc(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new tc(this, a, !0)
        },
        onDisposed: function() {
            this.audioElement = null
        },
        __class__: sc
    });
    var tc = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new Y(b, function() {
            d.updateVolume()
        });
        this.updateVolume();
        this._complete = new R(!1);
        this.playAudio();
        i.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._HtmlSound.HtmlPlayback"] = tc;
    tc.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    tc.__interfaces__ = [Kd, ac];
    tc.prototype = {
        get_sound: function() {
            return this._sound
        },
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.play();
            this._tickableAdded || (tb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = i.volume.get_changed().connect(function() {
                a.updateVolume()
            }), this._hideBinding = i.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        updateVolume: function() {
            this._clonedElement.volume = i.volume._value * this.volume._value
        },
        __class__: tc
    };
    var pe = function() {};
    e["flambe.subsystem.StageSystem"] = pe;
    pe.__name__ = ["flambe", "subsystem", "StageSystem"];
    pe.prototype = {
        __class__: pe
    };
    var Rb = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new La;
        this.scaleFactor = Rb.computeScaleFactor();
        1 != this.scaleFactor && (L.setVendorStyle(this._canvas, "transform-origin", "top left"), L.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        L.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            L.callLater(v(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", v(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new R(null);
        null != window.orientation && (window.addEventListener("orientationchange", v(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new R(!1);
        L.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    e["flambe.platform.html.HtmlStage"] = Rb;
    Rb.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    Rb.__interfaces__ = [pe];
    Rb.computeScaleFactor = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d", null),
            b = L.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1136 < a * window.screen.width || 1136 < a * b ? 1 : a
    };
    Rb.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                d = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == d) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = d | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            L.callLater(function() {
                L.hideMobileBrowser();
                L.callLater(function() {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(L.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == L.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: Rb
    };
    var sd = function(a) {
        this._storage = a
    };
    e["flambe.platform.html.HtmlStorage"] = sd;
    sd.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    sd.__interfaces__ = [Hd];
    sd.prototype = {
        get_supported: function() {
            return !0
        },
        set: function(a, b) {
            var c;
            try {
                var d = new Aa;
                d.useCache = !0;
                d.useEnumIndex = !1;
                d.serialize(b);
                c = d.toString()
            } catch (f) {
                return f instanceof n && (f = f.val), !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (h) {
                return h instanceof n && (h = h.val), !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" +
                    a)
            } catch (d) {
                d instanceof n && (d = d.val), null
            }
            if (null != c) try {
                return ga.run(c)
            } catch (f) {
                f instanceof n && (f = f.val), null
            }
            return b
        },
        __class__: sd
    };
    var L = function() {};
    e["flambe.platform.html.HtmlUtil"] = L;
    L.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    L.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    L.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    L.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = da.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() +
                z.substr(a, 1, null), d = 0, f = L.VENDOR_PREFIXES; d < f.length;) {
            var h = f[d];
            ++d;
            var e = h + c,
                g = da.field(b, e);
            if (null != g) return {
                prefix: h,
                field: e,
                value: g
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    L.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            d = L.loadExtension(d, b);
            if (null != d.field) return d
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    L.polyfill = function(a, b) {
        null == b && (b = window);
        var c = L.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    L.setVendorStyle = function(a, b, c) {
        for (var a = a.style, d = 0, f = L.VENDOR_PREFIXES; d < f.length;) {
            var h = f[d];
            ++d;
            a.setProperty("-" + h + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    L.addVendorListener = function(a, b, c, d) {
        for (var f = 0, h = L.VENDOR_PREFIXES; f < h.length;) {
            var e = h[f];
            ++f;
            a.addEventListener(e + b, c, d)
        }
        a.addEventListener(b, c, d)
    };
    L.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return Zb.Landscape;
            default:
                return Zb.Portrait
        }
    };
    L.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    L.createCanvas = function(a) {
        var b = L.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    L.fixAndroidMath = function() {
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
    var U = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    e["flambe.platform.html.WebAudioSound"] = U;
    U.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    U.__interfaces__ = [$b];
    U.get_supported = function() {
        if (U._detectSupport) {
            U._detectSupport = !1;
            var a = L.loadExtension("AudioContext").value;
            null != a && (U.ctx = new a, U.gain = U.createGain(), U.gain.connect(U.ctx.destination), i.volume.watch(function(a) {
                U.gain.gain.value = a
            }))
        }
        return null != U.ctx
    };
    U.createGain = function() {
        return null != U.ctx.createGain ? U.ctx.createGain() : U.ctx.createGainNode()
    };
    U.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    U.__super__ = ra;
    U.prototype = m(ra.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new uc(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new uc(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: U
    });
    var uc = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = U.gain;
        this._complete = new R(!1);
        this._sourceNode = U.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            d._complete.set__(!0)
        };
        U.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new Y(b, function(a) {
            d.setVolume(a)
        });
        1 != b && this.setVolume(b);
        i.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = uc;
    uc.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    uc.__interfaces__ = [Kd, ac];
    uc.prototype = {
        get_sound: function() {
            return this._sound
        },
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (U.ctx.currentTime - this._startedAt) % this._sound.get_duration()
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
            null == this._gainNode && (this._gainNode = U.createGain(), this.insertNode(this._gainNode));
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
            this._startedAt = U.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (tb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = i.hidden.get_changed().connect(function(b) {
                b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: uc
    };
    var Nd = function() {
        this._transitor = null;
        l.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new g
    };
    e["flambe.scene.Director"] = Nd;
    Nd.__name__ = ["flambe", "scene", "Director"];
    Nd.__super__ = l;
    Nd.prototype = m(l.prototype, {
        get_name: function() {
            return "Director_31"
        },
        pushScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            null != d ? this.playTransition(d, a, b, function() {
                c.hide(d)
            }) : (this.add(a), this.invalidateVisibility())
        },
        popScene: function(a) {
            var b = this;
            this.completeTransition();
            var c = this.get_topScene();
            if (null != c) {
                this.scenes.pop();
                var d = this.get_topScene();
                null != d ? this.playTransition(c, d, a, function() {
                    b.hideAndDispose(c)
                }) : (this.hideAndDispose(c), this.invalidateVisibility())
            }
        },
        unwindToScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var d = this.get_topScene();
            if (null != d) {
                if (d != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(d, a, b, function() {
                        c.hideAndDispose(d)
                    })
                }
            } else this.pushScene(a, b)
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
            z.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) {
            a = a._compMap.Scene_0;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function(a) {
            this.hide(a);
            a.dispose()
        },
        show: function(a) {
            a = a._compMap.Scene_0;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_0;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(a, b, c, d) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new qe(a, b, c, d), this._transitor.init(this)) : (d(), this.invalidateVisibility())
        },
        __class__: Nd
    });
    var qe = function(a, b, c, d) {
        this._from = a;
        this._to = b;
        this._transition = c;
        this._onComplete = d
    };
    e["flambe.scene._Director.Transitor"] = qe;
    qe.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    qe.prototype = {
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
        __class__: qe
    };
    var ya = function() {};
    e["flambe.scene.Transition"] = ya;
    ya.__name__ = ["flambe", "scene", "Transition"];
    ya.prototype = {
        init: function(a, b, c) {
            this._director = a;
            this._from = b;
            this._to = c
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: ya
    };
    var xb = function(a, b) {
        this._duration = a;
        this._ease = null != b ? b : u.linear
    };
    e["flambe.scene.TweenTransition"] = xb;
    xb.__name__ = ["flambe", "scene", "TweenTransition"];
    xb.__super__ = ya;
    xb.prototype = m(ya.prototype, {
        init: function(a, b, c) {
            ya.prototype.init.call(this, a, b, c);
            this._elapsed = 0
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function(a, b) {
            return a + (b - a) * this._ease(this._elapsed / this._duration)
        },
        __class__: xb
    });
    var Da = function(a, b) {
        xb.call(this, a, b)
    };
    e["flambe.scene.FadeTransition"] = Da;
    Da.__name__ = ["flambe", "scene", "FadeTransition"];
    Da.__super__ = xb;
    Da.prototype = m(xb.prototype, {
        init: function(a, b, c) {
            xb.prototype.init.call(this, a, b, c);
            a = this._to._compMap.Sprite_3;
            null == a && this._to.add(a = new q);
            a.alpha.set__(0)
        },
        update: function(a) {
            a = xb.prototype.update.call(this, a);
            this._to._compMap.Sprite_3.alpha.set__(this.interp(0, 1));
            return a
        },
        complete: function() {
            this._to._compMap.Sprite_3.alpha.set__(1)
        },
        __class__: Da
    });
    var Ya = function() {};
    e["flambe.script.Action"] = Ya;
    Ya.__name__ = ["flambe", "script", "Action"];
    Ya.prototype = {
        __class__: Ya
    };
    var Ab = function(a, b, c, d) {
        this._value = a;
        this._by = b;
        this._seconds = c;
        this._easing = d
    };
    e["flambe.script.AnimateBy"] = Ab;
    Ab.__name__ = ["flambe", "script", "AnimateBy"];
    Ab.__interfaces__ = [Ya];
    Ab.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new ub(this._value._value, this._value._value + this._by, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: Ab
    };
    var C = function(a, b, c, d) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = d
    };
    e["flambe.script.AnimateTo"] = C;
    C.__name__ = ["flambe", "script", "AnimateTo"];
    C.__interfaces__ = [Ya];
    C.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new ub(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: C
    };
    var K = function(a) {
        this._fn = a
    };
    e["flambe.script.CallFunction"] = K;
    K.__name__ = ["flambe", "script", "CallFunction"];
    K.__interfaces__ = [Ya];
    K.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: K
    };
    var N = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    e["flambe.script.Delay"] = N;
    N.__name__ = ["flambe", "script", "Delay"];
    N.__interfaces__ = [Ya];
    N.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a -
                    b
            }
            return -1
        },
        __class__: N
    };
    var kc = function(a, b, c, d, f) {
        this._x = a;
        this._y = b;
        this._seconds = c;
        this._easingX = d;
        this._easingY = f
    };
    e["flambe.script.MoveTo"] = kc;
    kc.__name__ = ["flambe", "script", "MoveTo"];
    kc.__interfaces__ = [Ya];
    kc.prototype = {
        update: function(a, b) {
            var c = b._compMap.Sprite_3;
            null == this._tweenX && (this._tweenX = new ub(c.x._value, this._x, this._seconds, this._easingX), c.x.set_behavior(this._tweenX), c.x.update(a), this._tweenY = new ub(c.y._value, this._y, this._seconds, null != this._easingY ? this._easingY : this._easingX), c.y.set_behavior(this._tweenY), c.y.update(a));
            return c.x._behavior != this._tweenX && c.y._behavior != this._tweenY ? (c = jb.max(this._tweenX.elapsed, this._tweenY.elapsed) - this._seconds, this._tweenY = this._tweenX = null, 0 < c ? Math.max(0, a - c) : 0) : -1
        },
        __class__: kc
    };
    var W = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Parallel"] = W;
    W.__name__ = ["flambe", "script", "Parallel"];
    W.__interfaces__ = [Ya];
    W.prototype = {
        add: function(a) {
            this._runningActions.push(a)
        },
        update: function(a, b) {
            for (var c = !0, d = 0, f = 0, h = this._runningActions.length; f < h;) {
                var e = f++,
                    g = this._runningActions[e];
                if (null != g) {
                    var j = g.update(a, b);
                    0 <= j ? (this._runningActions[e] = null, this._completedActions.push(g), j > d && (d = j)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], d) : -1
        },
        __class__: W
    };
    var Ca = function(a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining = this._count = b
    };
    e["flambe.script.Repeat"] = Ca;
    Ca.__name__ = ["flambe", "script", "Repeat"];
    Ca.__interfaces__ = [Ya];
    Ca.prototype = {
        update: function(a, b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a, b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ? (this._remaining = this._count, c) : -1
        },
        __class__: Ca
    };
    var x = function() {
        l.call(this);
        this.stopAll()
    };
    e["flambe.script.Script"] = x;
    x.__name__ = ["flambe", "script", "Script"];
    x.__super__ = l;
    x.prototype = m(l.prototype, {
        get_name: function() {
            return "Script_2"
        },
        run: function(a) {
            a = new Od(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: x
    });
    var Od = function(a) {
        this.removed = !1;
        this.action = a
    };
    e["flambe.script._Script.Handle"] = Od;
    Od.__name__ = ["flambe", "script", "_Script", "Handle"];
    Od.__interfaces__ = [Va];
    Od.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: Od
    };
    var E = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Sequence"] = E;
    E.__name__ = ["flambe", "script", "Sequence"];
    E.__interfaces__ = [Ya];
    E.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var d = this._runningActions[this._idx];
                if (null != d)
                    if (d = d.update(a - c, b), 0 <= d) c += d;
                    else return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: E
    };
    var wb = e["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    wb.Stage3D = ["Stage3D", 0];
    wb.Stage3D.__enum__ = wb;
    wb.WebGL = ["WebGL", 1];
    wb.WebGL.__enum__ = wb;
    wb.Canvas = ["Canvas", 2];
    wb.Canvas.__enum__ = wb;
    var Pd = function() {};
    e["flambe.swf.Symbol"] = Pd;
    Pd.__name__ = ["flambe", "swf", "Symbol"];
    Pd.prototype = {
        __class__: Pd
    };
    var Qd = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    e["flambe.swf.BitmapSymbol"] = Qd;
    Qd.__name__ = ["flambe", "swf", "BitmapSymbol"];
    Qd.__interfaces__ = [Pd];
    Qd.prototype = {
        createSprite: function() {
            var a = new r(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            return a
        },
        __class__: Qd
    };
    var Cb = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = JSON.parse(this._file.toString());
        this._symbols = new S;
        this.frameRate = c.frameRate;
        for (var d = [], f = 0, h = c.movies; f < h.length;) {
            var e = h[f];
            ++f;
            e = new Rd(this, e);
            d.push(e);
            this._symbols.set(e._name, e)
        }
        c = c.textureGroups;
        (1 != c[0].scaleFactor || 1 < c.length) && null;
        c = c[0].atlases;
        for (f = 0; f < c.length;) {
            var g = c[f];
            ++f;
            h = a.getTexture(b + "/" + la.removeFileExtension(g.file));
            e = 0;
            for (g = g.textures; e < g.length;) {
                var j = g[e];
                ++e;
                j = new Qd(j, h);
                this._symbols.set(j._name, j)
            }
        }
        for (c = 0; c < d.length;) {
            h = d[c];
            ++c;
            f = 0;
            for (h = h.layers; f < h.length;) {
                e = h[f];
                ++f;
                e = e.keyframes;
                g = e.length;
                for (j = 0; j < g;) {
                    var i = j++,
                        l = e[i];
                    if (null != l.symbolName) {
                        var m = this._symbols.get(l.symbolName);
                        l.symbol = m
                    }
                    if (l.tweened && 1 == l.duration && i + 1 < g && (i = e[i + 1], !i.visible || null == i.symbolName)) l.visible = !1
                }
            }
        }
    };
    e["flambe.swf.Library"] = Cb;
    Cb.__name__ = ["flambe", "swf", "Library"];
    Cb.prototype = {
        createSprite: function(a, b) {
            null == b && (b = !0);
            var c = this._symbols.get(a);
            if (null == c) {
                if (b) throw new n(la.withFields("Missing symbol", ["name", a]));
                return null
            }
            return c.createSprite()
        },
        __class__: Cb
    };
    var qb = function(a) {
        this._oneshotSprite = this._loopingSprite = null;
        l.call(this);
        this._lib = a;
        this._root = new g;
        this.movie = new R(null);
        this.setCache(!0)
    };
    e["flambe.swf.MoviePlayer"] = qb;
    qb.__name__ = ["flambe", "swf", "MoviePlayer"];
    qb.__super__ = l;
    qb.prototype = m(l.prototype, {
        get_name: function() {
            return "MoviePlayer_26"
        },
        setCache: function(a) {
            this._cache = a ? new S : null;
            return this
        },
        setDecorator: function(a) {
            this._decorator = a;
            return this
        },
        play: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._oneshotSprite || this._oneshotSprite.symbol._name != a) this._oneshotSprite = this.playFromCache(a);
            return this
        },
        loop: function(a, b) {
            null == b && (b = !0);
            if (b || null == this._loopingSprite || this._loopingSprite.symbol._name != a) this._oneshotSprite = null, this._loopingSprite = this.playFromCache(a);
            return this
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this._root.dispose();
            this._oneshotSprite = this._loopingSprite = null;
            this.movie.set__(null)
        },
        onUpdate: function(a) {
            null != this._oneshotSprite && this._oneshotSprite._position + a > this._oneshotSprite.symbol.duration && (this._oneshotSprite = null, this.setCurrent(this._loopingSprite))
        },
        playFromCache: function(a) {
            var b;
            null != this._cache ? (b = this._cache.get(a), null != b ? b.set_position(0) : (b = this.createMovie(a), this._cache.set(a, b))) : b = this.createMovie(a);
            return this.setCurrent(b)
        },
        createMovie: function(a) {
            a = this._lib.createSprite(a, !0);
            null != this._decorator && this._decorator(a);
            return a
        },
        setCurrent: function(a) {
            this._root.add(a);
            return this.movie.set__(a)
        },
        __class__: qb
    });
    var vc = function(a) {
        this._looped = null;
        q.call(this);
        this.symbol = a;
        this.speed = new Y(1);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var d = b++;
            this._animators[d] = new re(a.layers[d])
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    e["flambe.swf.MovieSprite"] = vc;
    vc.__name__ = ["flambe", "swf", "MovieSprite"];
    vc.__super__ = q;
    vc.prototype = m(q.prototype, {
        onAdded: function() {
            q.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        onRemoved: function() {
            q.prototype.onRemoved.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onUpdate: function(a) {
            q.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags & 768) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                    break;
                case 512:
                    this._flags &= -513
            }
            this["goto"](this._position * this.symbol.frameRate)
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
                        var d = c[b];
                        ++b;
                        d.needsKeyframeUpdate = !0;
                        d.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) d = c[b], ++b, d.composeFrame(a);
                this._frame = a
            }
        },
        set_position: function(a) {
            return this._position = jb.clamp(a, 0, this.symbol.duration)
        },
        set_paused: function(a) {
            this._flags = pc.set(this._flags, 256, a);
            return a
        },
        get_looped: function() {
            null == this._looped && (this._looped = new La);
            return this._looped
        },
        set_pixelSnapping: function(a) {
            for (var b = 0, c = this._animators; b < c.length;) {
                var d = c[b];
                ++b;
                d.setPixelSnapping(a)
            }
            return q.prototype.set_pixelSnapping.call(this, a)
        },
        rewind: function() {
            this._position = 0;
            this._flags |= 512
        },
        __class__: vc
    });
    var re = function(a) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new g;
        if (a.empty) this._sprites = null;
        else {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b < c;) {
                var d = b++,
                    f = a.keyframes[d];
                this._sprites[d] = 0 < d && a.keyframes[d - 1].symbol == f.symbol ? this._sprites[d - 1] : null == f.symbol ? new q : f.symbol.createSprite()
            }
            this.content.add(this._sprites[0])
        }
    };
    e["flambe.swf._MovieSprite.LayerAnimator"] = re;
    re.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    re.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_3.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var d;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, d = this._sprites[this.keyframeIdx], d != this.content._compMap.Sprite_3 && ((null == d ? null : G.getClass(d)) == vc && d.rewind(), this.content.add(d))) : d = this.content._compMap.Sprite_3;
                    var f = b[this.keyframeIdx],
                        h = f.visible && null != f.symbol;
                    d.set_visible(h);
                    if (h) {
                        var h = f.x,
                            e = f.y,
                            g = f.scaleX,
                            j = f.scaleY,
                            i = f.skewX,
                            l = f.skewY,
                            m = f.alpha;
                        if (f.tweened && this.keyframeIdx < c) {
                            a = (a - f.index) / f.duration;
                            c = f.ease;
                            if (0 != c) {
                                var n;
                                0 > c ? (n = 1 - a, n = 1 - n * n, c = -c) : n = a * a;
                                a = c * n + (1 - c) * a
                            }
                            b = b[this.keyframeIdx + 1];
                            h += (b.x - h) * a;
                            e += (b.y - e) * a;
                            g += (b.scaleX - g) * a;
                            j += (b.scaleY - j) * a;
                            i += (b.skewX - i) * a;
                            l += (b.skewY - l) * a;
                            m += (b.alpha - m) * a
                        }
                        b = d.getLocalMatrix();
                        a = 0;
                        c = 1;
                        n = 0;
                        var p = 1;
                        0 != i && (a = Math.sin(i), c = Math.cos(i));
                        0 != l && (n = Math.sin(l), p = Math.cos(l));
                        b.set(p * g, n * g, -a * j, c * j, h, e);
                        b.translate(-f.pivotX, -f.pivotY);
                        d.alpha.set__(m)
                    }
                }
            }
        },
        setPixelSnapping: function(a) {
            if (null != this._sprites)
                for (var b = 0, c = this._sprites; b < c.length;) {
                    var d = c[b];
                    ++b;
                    d.set_pixelSnapping(a)
                }
        },
        __class__: re
    };
    var Rd = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) {
            var f = c++,
                h = new se(b.layers[f]);
            this.frames = Math.max(h.frames, this.frames);
            this.layers[f] = h
        }
        this.duration = this.frames / this.frameRate
    };
    e["flambe.swf.MovieSymbol"] = Rd;
    Rd.__name__ = ["flambe", "swf", "MovieSymbol"];
    Rd.__interfaces__ = [Pd];
    Rd.prototype = {
        createSprite: function() {
            return new vc(this)
        },
        __class__: Rd
    };
    var se = function(a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, d = this.keyframes.length; c < d;) {
            var f = c++,
                b = new te(a.keyframes[f], b);
            this.keyframes[f] = b;
            this.empty = this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    e["flambe.swf.MovieLayer"] = se;
    se.__name__ = ["flambe", "swf", "MovieLayer"];
    se.prototype = {
        __class__: se
    };
    var te = function(a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        var c = a.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease = a.ease)
    };
    e["flambe.swf.MovieKeyframe"] = te;
    te.__name__ = ["flambe", "swf", "MovieKeyframe"];
    te.prototype = {
        __class__: te
    };
    var xd = function() {};
    e["flambe.util.Assert"] = xd;
    xd.__name__ = ["flambe", "util", "Assert"];
    xd.that = function() {};
    var pc = function() {};
    e["flambe.util.BitSets"] = pc;
    pc.__name__ = ["flambe", "util", "BitSets"];
    pc.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var Cd = function() {
        this.success = new ba;
        this.error = new ba;
        this.progressChanged = new La;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    e["flambe.util.Promise"] = Cd;
    Cd.__name__ = ["flambe", "util", "Promise"];
    Cd.prototype = {
        get_result: function() {
            if (!this.hasResult) throw new n("Promise result not yet available");
            return this._result
        },
        set_result: function(a) {
            if (this.hasResult) throw new n("Promise result already assigned");
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
        __class__: Cd
    };
    var La = function(a) {
        ia.call(this, a)
    };
    e["flambe.util.Signal0"] = La;
    La.__name__ = ["flambe", "util", "Signal0"];
    La.__super__ = ia;
    La.prototype = m(ia.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == ia.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: La
    });
    var be = function(a) {
        this.next = null;
        this.fn = a
    };
    e["flambe.util._SignalBase.Task"] = be;
    be.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    be.prototype = {
        __class__: be
    };
    var la = function() {};
    e["flambe.util.Strings"] = la;
    la.__name__ = ["flambe", "util", "Strings"];
    la.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? z.substr(a, b + 1, null) : null
    };
    la.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? z.substr(a, 0, b) : a
    };
    la.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = z.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = z.substr(a, b + 1, null));
        return la.getFileExtension(a)
    };
    la.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    la.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[", d = 0; d < c;) {
                0 < d && (a += ", ");
                var f = b[d],
                    h = b[d + 1];
                if (D.is(h, Error)) {
                    var e = h.stack;
                    null != e && (h = e)
                }
                a += f + "=" + D.string(h);
                d += 2
            }
            a += "]"
        }
        return a
    };
    var ue = function() {};
    e["haxe.IMap"] = ue;
    ue.__name__ = ["haxe", "IMap"];
    var ve = function(a, b) {
        this.high = a;
        this.low = b
    };
    e["haxe._Int64.___Int64"] = ve;
    ve.__name__ = ["haxe", "_Int64", "___Int64"];
    ve.prototype = {
        __class__: ve
    };
    var Aa = function() {
        this.buf = new Ia;
        this.cache = [];
        this.useCache = Aa.USE_CACHE;
        this.useEnumIndex = Aa.USE_ENUM_INDEX;
        this.shash = new S;
        this.scount = 0
    };
    e["haxe.Serializer"] = Aa;
    Aa.__name__ = ["haxe", "Serializer"];
    Aa.run = function(a) {
        var b = new Aa;
        b.serialize(a);
        return b.toString()
    };
    Aa.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d;) {
                var f = c++,
                    h = this.cache[f];
                if (typeof h == b && h == a) return this.buf.b += "r", this.buf.b = null == f ? this.buf.b + "null" : this.buf.b + ("" + f), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = da.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(da.field(a, d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = V["typeof"](a);
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
                    isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
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
                            for (var c = a.length, d = 0; d < c;) {
                                var f = d++;
                                null == a[f] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[f]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case wc:
                            this.buf.b += "l";
                            a = a.h;
                            for (b = null; null != a;) b = a[0], a = a[1], this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(a.getTime());
                            break;
                        case S:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != Ra[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case Pa:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.h[c]);
                            this.buf.b += "h";
                            break;
                        case Lb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = da.field(c, "__id__"), da.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Sa:
                            d = 0;
                            f = a.length - 2;
                            b = new Ia;
                            for (c = Aa.BASE64; d < f;) {
                                var h = a.get(d++),
                                    e = a.get(d++),
                                    g = a.get(d++);
                                b.add(c.charAt(h >> 2));
                                b.add(c.charAt((h << 4 | e >> 4) & 63));
                                b.add(c.charAt((e << 2 | g >> 6) & 63));
                                b.add(c.charAt(g & 63))
                            }
                            d == f ? (f = a.get(d++), a = a.get(d++), b.add(c.charAt(f >> 2)), b.add(c.charAt((f << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : d == f + 1 && (a = a.get(d++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(V.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(V.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (G.__instanceof(a, Ge)) a = V.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (G.__instanceof(a, He)) this.buf.b += "B", this.serializeString(V.getEnumName(a));
                    else {
                        if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a)
                    }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(V.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += D.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += D.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw new n("Cannot serialize function");
                default:
                    throw new n("Cannot serialize " + D.string(a));
            }
        },
        __class__: Aa
    };
    var cc = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    e["haxe.Timer"] = cc;
    cc.__name__ = ["haxe", "Timer"];
    cc.delay = function(a, b) {
        var c = new cc(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    cc.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: cc
    };
    var ga = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = ga.DEFAULT_RESOLVER;
        null == a && (a = V, ga.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    e["haxe.Unserializer"] = ga;
    ga.__name__ = ["haxe", "Unserializer"];
    ga.initCodes = function() {
        for (var a = [], b = 0, c = ga.BASE64.length; b < c;) {
            var d = b++;
            a[ga.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    ga.run = function(a) {
        return (new ga(a)).unserialize()
    };
    ga.prototype = {
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
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        readFloat: function() {
            for (var a = this.pos;;) {
                var b = this.buf.charCodeAt(this.pos);
                if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break
            }
            return D.parseFloat(z.substr(this.buf, a, this.pos - a))
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw new n("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw new n("Invalid object key");
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++)) throw new n("Invalid enum format");
            var c = this.readDigits();
            if (0 == c) return V.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return V.createEnum(a, b, d)
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
                    return this.readFloat();
                case 121:
                    var a = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new n("Invalid string length");
                    var b = z.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return NaN;
                case 109:
                    return -Infinity;
                case 112:
                    return Infinity;
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
                    if (0 > a || a >= this.cache.length) throw new n("Invalid reference");
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw new n("Invalid string reference");
                    return this.scache[a];
                case 120:
                    throw new n(this.unserialize());
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new n("Class not found " + a);
                    a = V.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new n("Enum not found " + a);
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new n("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = V.getEnumConstructs(b)[c];
                    if (null == d) throw new n("Unknown enum index " + a + "@" + c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new wc;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new S;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new Pa;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw new n("Invalid IntMap format");
                    return a;
                case 77:
                    a = new Lb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos +
                        1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = z.substr(this.buf, this.pos, 19), a = z.strDate(a), this.pos += 19) : (a = this.readFloat(), b = new Date, b.setTime(a), a = b), this.cache.push(a), a;
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new n("Invalid bytes length");
                    var f = ga.CODES;
                    null == f && (f = ga.initCodes(), ga.CODES = f);
                    for (var h = this.pos, e = a & 3, g = h + (a - e), b = Sa.alloc(3 * (a >> 2) + (2 <= e ? e - 1 : 0)), c = 0; h < g;) {
                        var j = f[M.fastCodeAt(d, h++)],
                            i = f[M.fastCodeAt(d, h++)];
                        b.set(c++, j << 2 | i >> 4);
                        j = f[M.fastCodeAt(d, h++)];
                        b.set(c++, i << 4 | j >> 2);
                        i = f[M.fastCodeAt(d, h++)];
                        b.set(c++, j << 6 | i)
                    }
                    2 <= e && (i = f[M.fastCodeAt(d, h++)], g = f[M.fastCodeAt(d, h++)], b.set(c++, i << 2 | g >> 4), 3 == e && (d = f[M.fastCodeAt(d, h++)], b.set(c++, g << 4 | d >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new n("Class not found " +
                        a);
                    a = V.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw new n("Invalid custom data");
                    return a;
                case 65:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new n("Class not found " + a);
                    return b;
                case 66:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new n("Enum not found " + a);
                    return b
            }
            this.pos--;
            throw new n("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: ga
    };
    var Sa = function(a) {
        this.length = a.byteLength;
        this.b = new De(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b
    };
    e["haxe.io.Bytes"] = Sa;
    Sa.__name__ = ["haxe", "io", "Bytes"];
    Sa.alloc = function(a) {
        return new Sa(new Ee(a))
    };
    Sa.ofString = function(a) {
        for (var b = [], c = 0; c < a.length;) {
            var d = M.fastCodeAt(a, c++);
            55296 <= d && 56319 >= d && (d = d - 55232 << 10 | M.fastCodeAt(a, c++) & 1023);
            127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63))
        }
        return new Sa((new De(b)).buffer)
    };
    Sa.prototype = {
        get: function(a) {
            return this.b[a]
        },
        set: function(a, b) {
            this.b[a] = b & 255
        },
        getString: function(a, b) {
            if (0 > a || 0 > b || a + b > this.length) throw new n(Ta.OutsideBounds);
            for (var c = "", d = this.b, f = String.fromCharCode, e = a, g = a + b; e < g;) {
                var j = d[e++];
                if (128 > j) {
                    if (0 == j) break;
                    c += f(j)
                } else if (224 > j) c += f((j & 63) << 6 | d[e++] & 127);
                else if (240 > j) var i = d[e++],
                    c = c + f((j & 31) << 12 | (i & 127) << 6 | d[e++] & 127);
                else var i = d[e++],
                    l = d[e++],
                    j = (j & 15) << 18 | (i & 127) << 12 | (l & 127) << 6 | d[e++] & 127,
                    c = c + f((j >> 10) + 55232),
                    c = c + f(j & 1023 | 56320)
            }
            return c
        },
        __class__: Sa
    };
    var dc = function() {};
    e["haxe.crypto.Base64"] = dc;
    dc.__name__ = ["haxe", "crypto", "Base64"];
    dc.decode = function(a, b) {
        null == b && (b = !0);
        if (b)
            for (; 61 == z.cca(a, a.length - 1);) a = z.substr(a, 0, -1);
        return (new we(dc.BYTES)).decodeBytes(Sa.ofString(a))
    };
    var we = function(a) {
        for (var b = a.length, c = 1; b > 1 << c;) c++;
        if (8 < c || b != 1 << c) throw new n("BaseCode : base length must be a power of two.");
        this.base = a;
        this.nbits = c
    };
    e["haxe.crypto.BaseCode"] = we;
    we.__name__ = ["haxe", "crypto", "BaseCode"];
    we.prototype = {
        initTable: function() {
            for (var a = [], b = 0; 256 > b;) {
                var c = b++;
                a[c] = -1
            }
            b = 0;
            for (c = this.base.length; b < c;) {
                var d = b++;
                a[this.base.b[d]] = d
            }
            this.tbl = a
        },
        decodeBytes: function(a) {
            var b = this.nbits;
            null == this.tbl && this.initTable();
            for (var c = this.tbl, d = a.length * b >> 3, f = Sa.alloc(d), e = 0, g = 0, j = 0, i = 0; i < d;) {
                for (; 8 > g;) {
                    var g = g + b,
                        e = e << b,
                        l = c[a.get(j++)];
                    if (-1 == l) throw new n("BaseCode : invalid encoded char");
                    e |= l
                }
                g -= 8;
                f.set(i++, e >> g & 255)
            }
            return f
        },
        __class__: we
    };
    var Pa = function() {
        this.h = {}
    };
    e["haxe.ds.IntMap"] = Pa;
    Pa.__name__ = ["haxe", "ds", "IntMap"];
    Pa.__interfaces__ = [ue];
    Pa.prototype = {
        set: function(a, b) {
            this.h[a] = b
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
            return z.iter(a)
        },
        __class__: Pa
    };
    var Lb = function() {
        this.h = {};
        this.h.__keys__ = {}
    };
    e["haxe.ds.ObjectMap"] = Lb;
    Lb.__name__ = ["haxe", "ds", "ObjectMap"];
    Lb.__interfaces__ = [ue];
    Lb.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++Lb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return z.iter(a)
        },
        __class__: Lb
    };
    var Ed = function(a, b) {
        this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length
    };
    e["haxe.ds._StringMap.StringMapIterator"] = Ed;
    Ed.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    Ed.prototype = {
        hasNext: function() {
            return this.index < this.count
        },
        next: function() {
            return this.map.get(this.keys[this.index++])
        },
        __class__: Ed
    };
    var S = function() {
        this.h = {}
    };
    e["haxe.ds.StringMap"] = S;
    S.__name__ = ["haxe", "ds", "StringMap"];
    S.__interfaces__ = [ue];
    S.prototype = {
        set: function(a, b) {
            null != Ra[a] ? this.setReserved(a, b) : this.h[a] = b
        },
        get: function(a) {
            return null != Ra[a] ? this.getReserved(a) : this.h[a]
        },
        exists: function(a) {
            return null != Ra[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a)
        },
        setReserved: function(a, b) {
            null == this.rh && (this.rh = {});
            this.rh["$" + a] = b
        },
        getReserved: function(a) {
            return null == this.rh ? null : this.rh["$" + a]
        },
        existsReserved: function(a) {
            return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a)
        },
        remove: function(a) {
            if (null != Ra[a]) {
                a = "$" + a;
                if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a]
            } else {
                if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a]
            }
            return !0
        },
        keys: function() {
            var a = this.arrayKeys();
            return z.iter(a)
        },
        arrayKeys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
            if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        iterator: function() {
            return new Ed(this, this.arrayKeys())
        },
        __class__: S
    };
    var Ta = e["haxe.io.Error"] = {
        __ename__: ["haxe", "io", "Error"],
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    Ta.Blocked = ["Blocked", 0];
    Ta.Blocked.__enum__ = Ta;
    Ta.Overflow = ["Overflow", 1];
    Ta.Overflow.__enum__ = Ta;
    Ta.OutsideBounds = ["OutsideBounds", 2];
    Ta.OutsideBounds.__enum__ = Ta;
    Ta.Custom = function(a) {
        a = ["Custom", 3, a];
        a.__enum__ = Ta;
        return a
    };
    var Za = function() {};
    e["haxe.io.FPHelper"] = Za;
    Za.__name__ = ["haxe", "io", "FPHelper"];
    Za.i32ToFloat = function(a) {
        var b = a >>> 23 & 255,
            c = a & 8388607;
        return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127)
    };
    Za.floatToI32 = function(a) {
        if (0 == a) return 0;
        var b;
        b = 0 > a ? -a : a;
        var c = Math.floor(Math.log(b) / 0.6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        b = Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607;
        return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b
    };
    Za.i64ToDouble = function(a, b) {
        var c = (b >> 20 & 2047) - 1023,
            d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
        return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c)
    };
    Za.doubleToI64 = function(a) {
        var b = Za.i64tmp;
        if (0 == a) b.low = 0, b.high = 0;
        else {
            var c;
            c = 0 > a ? -a : a;
            var d = Math.floor(Math.log(c) / 0.6931471805599453);
            c = 4503599627370496 * (c / Math.pow(2, d) - 1);
            c = Math.round(c);
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0
        }
        return b
    };
    var oc = function() {};
    e["haxe.rtti.Meta"] = oc;
    oc.__name__ = ["haxe", "rtti", "Meta"];
    oc.getType = function(a) {
        a = oc.getMeta(a);
        return null == a || null == a.obj ? {} : a.obj
    };
    oc.getMeta = function(a) {
        return a.__meta__
    };
    var kb = function() {};
    e["haxe.xml.Parser"] = kb;
    kb.__name__ = ["haxe", "xml", "Parser"];
    kb.parse = function(a, b) {
        null == b && (b = !1);
        var c = p.createDocument();
        kb.doParse(a, b, 0, c);
        return c
    };
    kb.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var f = null, e = 1, g = 1, j = null, i = 0, l = 0, m = 0, k = a.charCodeAt(c), o = new Ia, q = 1, r = -1; k == k;) {
            switch (e) {
                case 0:
                    switch (k) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            e = g;
                            continue
                    }
                    break;
                case 1:
                    switch (k) {
                        case 60:
                            e = 0;
                            g = 2;
                            break;
                        default:
                            i = c;
                            e = 13;
                            continue
                    }
                    break;
                case 13:
                    60 == k ? (o.addSub(a, i, c - i), g = p.createPCData(o.b), o = new Ia, d.addChild(g), l++, e = 0, g = 2) : 38 == k && (o.addSub(a, i, c - i), e = 18, q = 13, i = c + 1);
                    break;
                case 17:
                    93 == k && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (k = p.createCData(z.substr(a, i, c - i)), d.addChild(k), l++, c += 2, e = 1);
                    break;
                case 2:
                    switch (k) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) {
                                c += 2;
                                if ("CDATA[" != z.substr(a, c, 6).toUpperCase()) throw new n("Expected <![CDATA[");
                                c += 5;
                                e = 17
                            } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != z.substr(a, c + 2, 6).toUpperCase()) throw new n("Expected <!DOCTYPE");
                                c += 8;
                                e = 16
                            } else {
                                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new n("Expected <\!--");
                                c += 2;
                                e = 15
                            }
                            i = c + 1;
                            break;
                        case 63:
                            e = 14;
                            i = c;
                            break;
                        case 47:
                            if (null == d) throw new n("Expected node name");
                            i = c + 1;
                            e = 0;
                            g = 10;
                            break;
                        default:
                            e = 3;
                            i = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k)) {
                        if (c == i) throw new n("Expected node name");
                        f = p.createElement(z.substr(a, i, c - i));
                        d.addChild(f);
                        l++;
                        e = 0;
                        g = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (k) {
                        case 47:
                            e = 11;
                            break;
                        case 62:
                            e = 9;
                            break;
                        default:
                            e = 5;
                            i = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k)) {
                        if (i == c) throw new n("Expected attribute name");
                        j = z.substr(a, i, c - i);
                        if (f.exists(j)) throw new n("Duplicate attribute");
                        e = 0;
                        g = 6;
                        continue
                    }
                    break;
                case 6:
                    switch (k) {
                        case 61:
                            e = 0;
                            g = 7;
                            break;
                        default:
                            throw new n("Expected =");
                    }
                    break;
                case 7:
                    switch (k) {
                        case 34:
                        case 39:
                            o = new Ia;
                            e = 8;
                            i = c + 1;
                            r = k;
                            break;
                        default:
                            throw new n('Expected "');
                    }
                    break;
                case 8:
                    switch (k) {
                        case 38:
                            o.addSub(a, i, c - i);
                            e = 18;
                            q = 8;
                            i = c + 1;
                            break;
                        case 62:
                            if (b) throw new n("Invalid unescaped " + String.fromCharCode(k) + " in attribute value");
                            k == r && (o.addSub(a, i, c - i), g = o.b, o = new Ia, f.set(j, g), e = 0, g = 4);
                            break;
                        case 60:
                            if (b) throw new n("Invalid unescaped " + String.fromCharCode(k) + " in attribute value");
                            k == r && (o.addSub(a, i, c - i), g = o.b, o = new Ia, f.set(j, g), e = 0, g = 4);
                            break;
                        default:
                            k == r && (o.addSub(a, i, c - i), g = o.b, o = new Ia, f.set(j, g), e = 0, g = 4)
                    }
                    break;
                case 9:
                    i = c = kb.doParse(a, b, c, f);
                    e = 1;
                    break;
                case 11:
                    switch (k) {
                        case 62:
                            e = 1;
                            break;
                        default:
                            throw new n("Expected >");
                    }
                    break;
                case 12:
                    switch (k) {
                        case 62:
                            return 0 == l && d.addChild(p.createPCData("")), c;
                        default:
                            throw new n("Expected >");
                    }
                case 10:
                    if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k)) {
                        if (i == c) throw new n("Expected node name");
                        g = z.substr(a, i, c - i);
                        if (d.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + d.nodeType);
                        if (g != d.nodeName) throw new n("Expected </" + function() {
                            if (d.nodeType != p.Element) throw "Bad node type, expected Element but found " + d.nodeType;
                            return d.nodeName
                        }(this) + ">");
                        e = 0;
                        g = 12;
                        continue
                    }
                    break;
                case 15:
                    45 == k && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (k = p.createComment(z.substr(a, i, c - i)), d.addChild(k), l++, c += 2, e = 1);
                    break;
                case 16:
                    91 == k ? m++ : 93 == k ? m-- : 62 == k && 0 == m && (k = p.createDocType(z.substr(a, i, c - i)), d.addChild(k), l++, e = 1);
                    break;
                case 14:
                    63 == k && 62 == a.charCodeAt(c + 1) && (c++, k = z.substr(a, i + 1, c - i - 2), k = p.createProcessingInstruction(k), d.addChild(k), l++, e = 1);
                    break;
                case 18:
                    if (59 == k) {
                        i = z.substr(a, i, c - i);
                        if (35 == i.charCodeAt(0)) i = 120 == i.charCodeAt(1) ? D.parseInt("0" + z.substr(i, 1, i.length - 1)) : D.parseInt(z.substr(i, 1, i.length - 1)), o.b += String.fromCharCode(i);
                        else if (kb.escapes.exists(i)) o.add(kb.escapes.get(i));
                        else {
                            if (b) throw new n("Undefined entity: " + i);
                            o.b += D.string("&" + i + ";")
                        }
                        i = c + 1;
                        e = q
                    } else if (!(97 <= k && 122 >= k || 65 <= k && 90 >= k || 48 <= k && 57 >= k || 58 == k || 46 == k || 95 == k || 45 == k) && 35 != k) {
                        if (b) throw new n("Invalid character in entity: " + String.fromCharCode(k));
                        o.b += "&";
                        o.addSub(a, i, c - i);
                        c--;
                        i = c + 1;
                        e = q
                    }
            }
            k = M.fastCodeAt(a, ++c)
        }
        1 == e && (i = c, e = 13);
        if (13 == e) {
            if (c != i || 0 == l) o.addSub(a, i, c - i), a = p.createPCData(o.b), d.addChild(a), l++;
            return c
        }
        if (!b && 18 == e && 13 == q) return o.b += "&", o.addSub(a, i, c - i), a = p.createPCData(o.b), d.addChild(a), l++, c;
        throw new n("Unexpected end");
    };
    var gc = function(a) {
        this.output = new Ia;
        this.pretty = a
    };
    e["haxe.xml.Printer"] = gc;
    gc.__name__ = ["haxe", "xml", "Printer"];
    gc.print = function(a, b) {
        null == b && (b = !1);
        var c = new gc(b);
        c.writeNode(a, "");
        return c.output.b
    };
    gc.prototype = {
        writeNode: function(a, b) {
            switch (a.nodeType) {
                case 2:
                    this.output.b += D.string(b + "<![CDATA[");
                    this.write(M.trim(function() {
                        if (a.nodeType == p.Document || a.nodeType == p.Element) throw new n("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this)));
                    this.output.b += "]]\>";
                    this.pretty && (this.output.b += "");
                    break;
                case 3:
                    var c;
                    if (a.nodeType == p.Document || a.nodeType == p.Element) throw new n("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    c = (new Ga("[\n\r\t]+", "g")).replace(c, "");
                    this.output.b = null == b ? this.output.b + "null" : this.output.b + ("" + b);
                    this.write(M.trim("<\!--" + c + "--\>"));
                    this.pretty && (this.output.b += "");
                    break;
                case 6:
                    if (a.nodeType != p.Document && a.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + a.nodeType);
                    for (c = z.iter(a.children); c.hasNext();) this.writeNode(c.next(), b);
                    break;
                case 0:
                    this.output.b += D.string(b + "<");
                    this.write(function() {
                        if (a.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + a.nodeType);
                        return a.nodeName
                    }(this));
                    for (c = a.attributes(); c.hasNext();) {
                        var d = c.next();
                        this.output.b += D.string(" " + d + '="');
                        this.write(M.htmlEscape(a.get(d), !0));
                        this.output.b += '"'
                    }
                    if (this.hasChildren(a)) {
                        this.output.b += ">";
                        this.pretty && (this.output.b += "");
                        if (a.nodeType != p.Document && a.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + a.nodeType);
                        for (c = z.iter(a.children); c.hasNext();) this.writeNode(c.next(), this.pretty ? b + "\t" : b);
                        this.output.b += D.string(b + "</");
                        this.write(function() {
                            if (a.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + a.nodeType);
                            return a.nodeName
                        }(this));
                        this.output.b += ">"
                    } else this.output.b += "/>";
                    this.pretty && (this.output.b += "");
                    break;
                case 1:
                    if (a.nodeType == p.Document || a.nodeType == p.Element) throw new n("Bad node type, unexpected " +
                        a.nodeType);
                    c = a.nodeValue;
                    0 != c.length && (this.write(b + M.htmlEscape(c)), this.pretty && (this.output.b += ""));
                    break;
                case 5:
                    this.write("<?" + function() {
                        if (a.nodeType == p.Document || a.nodeType == p.Element) throw new n("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this) + "?>");
                    break;
                case 4:
                    this.write("<!DOCTYPE " + function() {
                        if (a.nodeType == p.Document || a.nodeType == p.Element) throw new n("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this) + ">")
            }
        },
        write: function(a) {
            this.output.b = null == a ? this.output.b + "null" : this.output.b + ("" + a)
        },
        hasChildren: function(a) {
            if (a.nodeType != p.Document && a.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + a.nodeType);
            for (a = z.iter(a.children); a.hasNext();) {
                var b = a.next();
                switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (0 != M.ltrim(function() {
                                if (b.nodeType == p.Document || b.nodeType == p.Element) throw new n("Bad node type, unexpected " + b.nodeType);
                                return b.nodeValue
                            }(this)).length) return !0
                }
            }
            return !1
        },
        __class__: gc
    };
    var n = function(a) {
        Error.call(this);
        this.val = a;
        this.message = "" + a;
        Error.captureStackTrace && Error.captureStackTrace(this, n)
    };
    e["js._Boot.HaxeError"] = n;
    n.__name__ = ["js", "_Boot", "HaxeError"];
    n.__super__ = Error;
    n.prototype = m(Error.prototype, {
        __class__: n
    });
    var G = function() {};
    e["js.Boot"] = G;
    G.__name__ = ["js", "Boot"];
    G.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = G.__nativeClassName(a);
        return null != a ? G.__resolveNativeClass(a) : null
    };
    G.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, f = a.length; d < f;) var e = d++,
                            c = 2 != e ? c + ("," + G.__string_rec(a[e], b)) : c + G.__string_rec(a[e], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (f = 0; f < c;) e = f++, d += (0 < e ? "," : "") + G.__string_rec(a[e], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (g) {
                    return g instanceof
                    n && (g = g.val), "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                f = null != a.hasOwnProperty;
                for (c in a)
                    if (!f || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + G.__string_rec(a[c], b));
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
    G.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, f = c.length; d < f;) {
                var e = d++,
                    e = c[e];
                if (e == b || G.__interfLoop(e, b)) return !0
            }
        return G.__interfLoop(a.__super__, b)
    };
    G.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Le:
                return (a | 0) === a;
            case Ie:
                return "number" == typeof a;
            case Je:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case Me:
                return !0;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (a instanceof b || G.__interfLoop(G.getClass(a), b)) return !0
                    } else {
                        if ("object" == typeof b && G.__isNativeObj(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == Ge && null != a.__name__ || b == He && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    G.__cast = function(a, b) {
        if (G.__instanceof(a, b)) return a;
        throw new n("Cannot cast " + D.string(a) + " to " + D.string(b));
    };
    G.__nativeClassName = function(a) {
        a = G.__toStr.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    G.__isNativeObj = function(a) {
        return null != G.__nativeClassName(a)
    };
    G.__resolveNativeClass = function(a) {
        return Function("return typeof " + a + ' != "undefined" ? ' + a + " : null")()
    };
    var Ce = function() {};
    e["js.Browser"] = Ce;
    Ce.__name__ = ["js", "Browser"];
    Ce.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return b instanceof n && (b = b.val), null
        }
    };
    var $a = function(a) {
        if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else {
            this.a = [];
            for (var b = 0; b < a;) this.a[b++] = 0;
            this.byteLength = a
        }
    };
    e["js.html.compat.ArrayBuffer"] = $a;
    $a.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    $a.sliceImpl = function(a, b) {
        var c = new De(this, a, null == b ? null : b - a),
            d = new Ee(c.byteLength);
        (new De(d)).set(c);
        return d
    };
    $a.prototype = {
        slice: function(a, b) {
            return new $a(this.a.slice(a, b))
        },
        __class__: $a
    };
    var Fe = function(a, b, c) {
        this.buf = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c;
        if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new n(Ta.OutsideBounds);
    };
    e["js.html.compat.DataView"] = Fe;
    Fe.__name__ = ["js", "html", "compat", "DataView"];
    Fe.prototype = {
        getInt8: function(a) {
            a = this.buf.a[this.offset + a];
            return 128 <= a ? a - 256 : a
        },
        getUint8: function(a) {
            return this.buf.a[this.offset + a]
        },
        getInt16: function(a, b) {
            var c = this.getUint16(a, b);
            return 32768 <= c ? c - 65536 : c
        },
        getUint16: function(a, b) {
            return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset + a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1]
        },
        getInt32: function(a, b) {
            var c = this.offset + a,
                d = this.buf.a[c++],
                f = this.buf.a[c++],
                e = this.buf.a[c++],
                c = this.buf.a[c++];
            return b ? d | f << 8 | e << 16 | c << 24 : c | e << 8 | f << 16 | d << 24
        },
        getUint32: function(a, b) {
            var c = this.getInt32(a, b);
            return 0 > c ? c + 4294967296 : c
        },
        getFloat32: function(a, b) {
            return Za.i32ToFloat(this.getInt32(a, b))
        },
        getFloat64: function(a, b) {
            var c = this.getInt32(a, b),
                d = this.getInt32(a + 4, b);
            return Za.i64ToDouble(b ? c : d, b ? d : c)
        },
        setInt8: function(a, b) {
            this.buf.a[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255
        },
        setUint8: function(a, b) {
            this.buf.a[a + this.offset] = b & 255
        },
        setInt16: function(a, b, c) {
            this.setUint16(a, 0 > b ? b + 65536 : b, c)
        },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 & 255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255)
        },
        setInt32: function(a, b, c) {
            this.setUint32(a, b, c)
        },
        setUint32: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255)
        },
        setFloat32: function(a, b, c) {
            this.setUint32(a, Za.floatToI32(b), c)
        },
        setFloat64: function(a, b, c) {
            b = Za.doubleToI64(b);
            c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a, b.low))
        },
        __class__: Fe
    };
    var yb = function() {};
    e["js.html.compat.Uint8Array"] = yb;
    yb.__name__ = ["js", "html", "compat", "Uint8Array"];
    yb._new = function(a, b, c) {
        if ("number" == typeof a) {
            c = [];
            for (b = 0; b < a;) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new $a(c)
        } else if (G.__instanceof(a, $a)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new $a(c);
        else throw new n("TODO " + D.string(a));
        c.subarray = yb._subarray;
        c.set = yb._set;
        return c
    };
    yb._set = function(a, b) {
        if (G.__instanceof(a.buffer, $a)) {
            if (a.byteLength + b > this.byteLength) throw new n("set() outside of range");
            for (var c = 0, d = a.byteLength; c < d;) {
                var f = c++;
                this[f + b] = a[f]
            }
        } else if (a instanceof Array && null == a.__enum__) {
            if (a.length + b > this.byteLength) throw new n("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) f = c++, this[f + b] = a[f]
        } else throw new n("TODO");
    };
    yb._subarray = function(a, b) {
        var c = yb._new(this.slice(a, b));
        c.byteOffset = a;
        return c
    };
    var P = function() {};
    e["nicksdk.AntiPiracy"] = P;
    P.__name__ = ["nicksdk", "AntiPiracy"];
    P.checkPiracy = function(a) {
        null == a && (a = "");
        var b = P.decrypt("aHR0cDovL3d3dy5uaWNrLmNvbS9uaWNrLWFzc2V0cy9nYW1lcy9uaWNrX2RvbWFpbi9OaWNrRG9tYWluLmpzb24=");
        P.REDIRECT_URL = "" != a ? a : P.decrypt("aHR0cDovL3d3dy5uaWNrLmNvbS9nYW1lcy8=");
        P.DOMAIN_LIST.push(P.decrypt("LipzZXZlbjIuY29t"));
        P.DOMAIN_LIST.push(P.decrypt("LipzZXZlbjIubmV0"));
        P.DOMAIN_LIST.push(P.decrypt("MTkyLjE2OC4q"));
        i._platform.getExternal().call("eval", ["window.getDomains = function(data) {eval('list=data.domains');}"]);
        i._platform.getExternal().call("eval", ["window.getList = function() {return list;}"]);
        P.eval("var script = document.createElement('script');script.src = \"" + b + '";document.body.insertBefore(script, document.body.firstChild);');
        cc.delay(function() {
            for (var a = null, a = i._platform.getExternal().call("getList"), a = G.__cast(a, Array), b = 0; b < a.length;) {
                var f = a[b];
                ++b;
                P.DOMAIN_LIST.push(f)
            }
            P.startCheck()
        }, P.GET_DOMAINS_DELAY)
    };
    P.decrypt = function(a) {
        a = dc.decode(a);
        return a.getString(0, a.length)
    };
    P.startCheck = function() {
        P.debug("startCheck()");
        var a = "",
            a = "",
            a = window.document.referrer;
        P.debug("referrer = " + a);
        if ("" == a) a = window.location.host;
        else var b = a.indexOf("//"),
            a = z.substr(a, b + 2, null),
            b = a.indexOf("/"),
            a = a.substring(0, b);
        P.debug("domain = " + a);
        for (var b = !0, c = 0, d = P.DOMAIN_LIST; c < d.length;) {
            var f = d[c];
            ++c;
            var e = new Ga(f, "i");
            P.debug(f);
            P.debug(e.match(a));
            if (e.match(a)) {
                b = !1;
                break
            }
        }
        b ? (P.debug("redirect"), cc.delay(P.redirect, P.REDIRECT_DELAY)) : P.debug("do not redirect")
    };
    P.redirect = function() {};
    P.eval = function(a) {
        i._platform.getExternal().call("eval", ["void (function() {" + a + "}())"])
    };
    P.debug = function(a) {
        P.IS_DEBUG && console.log(a)
    };
    var xe = function() {};
    e["s2.client.ClientBootstrap"] = xe;
    xe.__name__ = ["s2", "client", "ClientBootstrap"];
    xe.prototype = {
        __class__: xe
    };
    var ec = function() {
        this.complete = new La;
        this._options = new S;
        706560 >= i._platform.getStage().get_width() * i._platform.getStage().get_height() && ja.get_mobile() && (I.suffix = "mob")
    };
    e["s2.client.CommonBootstrap"] = ec;
    ec.__name__ = ["s2", "client", "CommonBootstrap"];
    ec.__interfaces__ = [xe];
    ec.prototype = {
        start: function() {
            null
        },
        track: function() {},
        __class__: ec
    };
    var Ua = function() {};
    e["s2.client.Config"] = Ua;
    Ua.__name__ = ["s2", "client", "Config"];
    Ua.init = function(a, b) {
        null == Ua.initialized && (Ua.initialized = new R(!1));
        Ua.initialized._value || (a.complete.connect(function() {
            Ua.initialized.set__(!0);
            null != b && b()
        }).once(), Ua._bootstrap = a, a.start())
    };
    Ua.track = function(a) {
        Ua._bootstrap.track(a)
    };
    var zc = function() {
        this._gameName = this._gameProperty = "";
        ec.call(this);
        this.setupBasePaths()
    };
    e["s2.client.NickBootstrap"] = zc;
    zc.__name__ = ["s2", "client", "NickBootstrap"];
    zc.__super__ = ec;
    zc.prototype = m(ec.prototype, {
        start: function() {
            var a = new Z,
                b = lc.get_base() + "xml/config.xml";
            a.add("xml/config.xml", b);
            i._platform.loadAssetPack(a).get(v(this, this.onConfigLoaded))
        },
        onConfigLoaded: function(a) {
            a = a.getFile("xml/config.xml");
            this._config = p.parse(a.toString());
            null != this._parser && (this._parser(this._config), this._parser = null);
            a.dispose();
            var a = this._config.elementsNamed("config").next().elementsNamed("tracking").next(),
                b = null != a && "true" == a.get("enabled").toString().toLowerCase();
            this._gameName = a.elementsNamed("gameName").next().firstChild().toString();
            this._gameProperty = null != a.elementsNamed("gameProperty").next() ? a.elementsNamed("gameProperty").next().firstChild().toString() : "";
            this.setupTracking(b);
            a = a.elementsNamed("locale").next();
            if (null != a) {
                if (a.nodeType != p.Document && a.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + a.nodeType);
                a = a.children[0].toString()
            } else a = null;
            this._localizationRegion = a;
            a = null == this._localizationRegion || "" == this._localizationRegion ? "" : "_" + this._localizationRegion;
            j.init(v(this, this.onLocalizationLoaded), new Sd, "strings/strings" + a + ".xml");
            P.checkPiracy()
        },
        setupTracking: function(a) {
            var b = !1;
            a && i._platform.getExternal().get_supported() && (b = null != window.trackFlashEvent);
            this._externalSupported = b
        },
        onLocalizationLoaded: function() {
            this.complete.emit()
        },
        track: function(a) {
            this._externalSupported && i._platform.getExternal().call("trackFlashEvent", [this._gameName, a[0], "true"])
        },
        setupBasePaths: function() {
            var a;
            a = i._platform.getExternal().get_supported() ? lc.get_base() : null;
            var b = new Ga("^http(s)?://", "i");
            null != a && 0 < a.length && (b.match(a) ? (b = window.location.href, b = b.split("/"), (null == b[b.length - 1] || -1 < b[b.length - 1].indexOf(".")) && b.pop(), b = b.join("/"), b = Mb.absoluteToRelative(b, a), null != b ? (I.relativeBase = b + "assets/", j.relativeBase = b) : (I.externalBase = a + "assets/", j.externalBase = a)) : (I.relativeBase = a + "assets/", j.relativeBase = a))
        },
        __class__: zc
    });
    var Gb = function() {
        l.call(this)
    };
    e["s2.display.ButtonMode"] = Gb;
    Gb.__name__ = ["s2", "display", "ButtonMode"];
    Gb.__super__ = l;
    Gb.prototype = m(l.prototype, {
        get_name: function() {
            return "ButtonMode_12"
        },
        connectToSprite: function() {
            null != this._disposer && this._disposer.dispose();
            this._disposer = new sa;
            this._disposer.connect1(this._sprite.get_pointerMove(), v(this, this.onPointerMove));
            this._disposer.connect1(this._sprite.get_pointerOut(), v(this, this.onPointerOut))
        },
        onRemoved: function() {
            null != this._disposer && this._disposer.dispose();
            this._disposer = null;
            i._platform.getMouse().set_cursor(Qa.Default)
        },
        onUpdate: function() {
            i._platform.getMouse().get_supported() && this._sprite != this.owner._compMap.Sprite_3 && (this._sprite = this.owner._compMap.Sprite_3, null != this._sprite && this.connectToSprite())
        },
        onPointerMove: function() {
            i._platform.getMouse().set_cursor(Qa.Button)
        },
        onPointerOut: function() {
            i._platform.getMouse().set_cursor(Qa.Default)
        },
        __class__: Gb
    });
    var J = function() {};
    e["s2.display.LayoutUtil"] = J;
    J.__name__ = ["s2", "display", "LayoutUtil"];
    J.left = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? ca.px : ca.percent,
            d = J.getSprite(a);
        d.x.set__(0);
        var f = q.getBounds(a),
            e = Math.sqrt(d.getLocalMatrix().m00 * d.getLocalMatrix().m00 + d.getLocalMatrix().m01 * d.getLocalMatrix().m01),
            b = c == ca.px ? b : i._platform.getStage().get_width() * b,
            b = ab.globalToLocal(a, b, 0, null);
        d.x.set__(b.x * e - f.x);
        return a
    };
    J.right = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? ca.px : ca.percent,
            d = J.getSprite(a);
        d.x.set__(0);
        var f = q.getBounds(a),
            e = Math.sqrt(d.getLocalMatrix().m00 * d.getLocalMatrix().m00 + d.getLocalMatrix().m01 * d.getLocalMatrix().m01),
            b = c == ca.px ? i._platform.getStage().get_width() - b : i._platform.getStage().get_width() - i._platform.getStage().get_width() * b,
            b = ab.globalToLocal(a, b, 0, null);
        d.x.set__(b.x * e - f.x - f.width);
        return a
    };
    J.top = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? ca.px : ca.percent,
            d = J.getSprite(a);
        d.y.set__(0);
        var f = q.getBounds(a),
            e = Math.sqrt(d.getLocalMatrix().m10 * d.getLocalMatrix().m10 + d.getLocalMatrix().m11 * d.getLocalMatrix().m11),
            b = c == ca.px ? b : i._platform.getStage().get_height() * b,
            b = ab.globalToLocal(a, 0, b, null);
        d.y.set__(b.y * e - f.y);
        return a
    };
    J.bottom = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? ca.px : ca.percent,
            d = J.getSprite(a);
        d.y.set__(0);
        var f = Math.sqrt(d.getLocalMatrix().m10 * d.getLocalMatrix().m10 + d.getLocalMatrix().m11 * d.getLocalMatrix().m11),
            e = q.getBounds(a),
            b = c == ca.px ? i._platform.getStage().get_height() -
            b : i._platform.getStage().get_height() - i._platform.getStage().get_height() * b,
            b = ab.globalToLocal(a, 0, b, null);
        d.y.set__(b.y * f - e.y - e.height);
        return a
    };
    J.centerX = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? ca.px : ca.percent,
            d = J.getSprite(a);
        d.x.set__(0);
        var f = Math.sqrt(d.getLocalMatrix().m00 * d.getLocalMatrix().m00 + d.getLocalMatrix().m01 * d.getLocalMatrix().m01),
            e = q.getBounds(a),
            b = c == ca.px ? 0.5 * i._platform.getStage().get_width() - b : 0.5 * i._platform.getStage().get_width() * b,
            b = ab.globalToLocal(a, b, 0, null);
        d.x.set__(Math.round(b.x * f - 0.5 * e.width - e.x));
        return a
    };
    J.centerY = function(a, b, c) {
        null == b && (b = 0);
        var c = null == c ? ca.px : ca.percent,
            d = J.getSprite(a);
        d.y.set__(0);
        var f = q.getBounds(a),
            e = Math.sqrt(d.getLocalMatrix().m10 * d.getLocalMatrix().m10 + d.getLocalMatrix().m11 * d.getLocalMatrix().m11),
            b = c == ca.px ? 0.5 * i._platform.getStage().get_height() - b : 0.5 * i._platform.getStage().get_height() * b,
            b = ab.globalToLocal(a, 0, b, null);
        d.y.set__(Math.round(b.y * e - 0.5 * f.height - f.y));
        return a
    };
    J.center = function(a, b, c) {
        null == c && (c = 0);
        null == b && (b = 0);
        J.centerX(a, b);
        return J.centerY(a, c)
    };
    J.getSprite = function(a) {
        var b = a._compMap.Sprite_3;
        null == b && a.add(b = new q);
        return b
    };
    var ca = e["s2.display.Units"] = {
        __ename__: ["s2", "display", "Units"],
        __constructs__: ["px", "percent"]
    };
    ca.px = ["px", 0];
    ca.px.__enum__ = ca;
    ca.percent = ["percent", 1];
    ca.percent.__enum__ = ca;
    var Fb = function(a, b) {
        q.call(this);
        this.left = a;
        this.right = b
    };
    e["s2.display.MultiTextureSprite"] = Fb;
    Fb.__name__ = ["s2", "display", "MultiTextureSprite"];
    Fb.__super__ = q;
    Fb.prototype = m(q.prototype, {
        draw: function(a) {
            a.drawTexture(this.left, 0, 0);
            a.drawTexture(this.right, this.left.get_width(), 0)
        },
        getNaturalWidth: function() {
            return this.left.get_width() + this.right.get_width()
        },
        getNaturalHeight: function() {
            return jb.max(this.left.get_height(), this.right.get_height())
        },
        __class__: Fb
    });
    var fc = function(a, b, c) {
        q.call(this);
        this.progress = new Y(0);
        xd.that(a.get_width() == b.get_width() && a.get_height() == b.get_height(), "Texture widths must match.", null);
        this.position = 0;
        this.textureFront = a;
        this.textureBack = b;
        null == c && (c = za.Left);
        if (null != c) switch (c[1]) {
            case 0:
                this._drawFunction = v(this, this.left);
                break;
            case 1:
                this._drawFunction = v(this, this.right);
                break;
            case 2:
                this._drawFunction = v(this, this.top);
                break;
            case 3:
                this._drawFunction = v(this, this.bottom);
                break;
            default:
                this._drawFunction = v(this, this.left)
        } else this._drawFunction = v(this, this.left)
    };
    e["s2.display.SwapSprite"] = fc;
    fc.__name__ = ["s2", "display", "SwapSprite"];
    fc.__super__ = q;
    fc.prototype = m(q.prototype, {
        onUpdate: function(a) {
            this.progress.update(a);
            q.prototype.onUpdate.call(this, a)
        },
        draw: function(a) {
            this._drawFunction(a, jb.clamp(this.progress._value, 0, 1))
        },
        left: function(a, b) {
            this.position = this.textureFront.get_width() * b;
            a.drawTexture(this.textureBack, 0, 0);
            a.save();
            a.applyScissor(0, 0, this.position, this.textureFront.get_height());
            a.drawTexture(this.textureFront, 0, 0);
            a.restore()
        },
        right: function(a, b) {
            this.position = this.textureFront.get_width() * (1 - b);
            a.drawTexture(this.textureFront, 0, 0);
            a.save();
            a.applyScissor(0, 0, this.position, this.textureFront.get_height());
            a.drawTexture(this.textureBack, 0, 0);
            a.restore()
        },
        top: function(a, b) {
            this.position = this.textureFront.get_height() * b;
            a.drawSubTexture(this.textureFront, 0, 0, 0, 0, this.textureFront.get_width(), this.position);
            a.drawSubTexture(this.textureBack, 0, this.position, 0, this.position, this.textureFront.get_width(), this.textureFront.get_height() - this.position)
        },
        bottom: function(a, b) {
            this.position = this.textureFront.get_height() * (1 - b);
            a.drawTexture(this.textureFront, 0, 0);
            a.save();
            a.applyScissor(0, 0, this.textureFront.get_width(), this.position);
            a.drawTexture(this.textureBack, 0, 0);
            a.restore()
        },
        getNaturalWidth: function() {
            return this.textureFront.get_width()
        },
        getNaturalHeight: function() {
            return this.textureFront.get_height()
        },
        __class__: fc
    });
    var za = e["s2.display.SwapDirection"] = {
        __ename__: ["s2", "display", "SwapDirection"],
        __constructs__: ["Left", "Right", "Top", "Bottom"]
    };
    za.Left = ["Left", 0];
    za.Left.__enum__ = za;
    za.Right = ["Right", 1];
    za.Right.__enum__ = za;
    za.Top = ["Top", 2];
    za.Top.__enum__ = za;
    za.Bottom = ["Bottom", 3];
    za.Bottom.__enum__ = za;
    var I = function(a, b) {
        this.loadedBytes = this.totalBytes = 0;
        this.ready = !1;
        this._retryCount = 0;
        this.releaseCacheOnRemove = this._isLoading = !1;
        this._nLoaded = this._nNeeded = 0;
        l.call(this);
        this.progressed = new Ub;
        this.success = new La;
        this._disposer = new sa;
        this._suffix = null != b ? b : I.suffix;
        this._manifests = new S;
        this._packsReady = new S;
        this._packsLoading = [];
        this._queue = [];
        this.autoCacheResults = !0;
        this.releaseCacheOnRemove = !1;
        this._nLoaded = this._nNeeded = 0;
        if (null != a)
            for (var c = 0, d = a.length; c < d;) {
                var f = c++;
                this.require(a[f])
            }
    };
    e["s2.loading.Assets"] = I;
    I.__name__ = ["s2", "loading", "Assets"];
    I.getManifest = function(a) {
        var b = null;
        null != I.suffix && Z.exists(a +
            "_" + I.suffix) && Z.fromAssets(a + "_" + I.suffix);
        b = Z.fromAssets(a);
        return I.setupManifest(b)
    };
    I.setupManifest = function(a) {
        null == a && (a = new Z);
        null != I.externalBase ? a.set_remoteBase(I.externalBase) : null != I.relativeBase && a.set_localBase(I.relativeBase);
        return a
    };
    I.getCached = function(a) {
        null == I._cache && (I._cache = new S);
        return I._cache.exists(a) ? I._cache.get(a) : null
    };
    I.cache = function(a, b) {
        null == I._cache && (I._cache = new S);
        I._cache.set(a, b)
    };
    I.release = function(a) {
        if (null != I._cache && I._cache.exists(a)) {
            var b = I._cache.get(a);
            I._cache.remove(a);
            return b
        }
        return new Td
    };
    I.__super__ = l;
    I.prototype = m(l.prototype, {
        get_name: function() {
            return "Assets_10"
        },
        require: function(a) {
            var b;
            b = null == this._suffix ? "" : "_" + this._suffix;
            if (Z.exists(a + b)) this.addManifest(Z.fromAssets(a + b), a);
            else if (Z.exists(a)) this.addManifest(Z.fromAssets(a), a);
            else throw new n("The directory " + a + " does not exist in the manifest." + (null == this._suffix ? "" : " Also attempted path " + a + b));
            return this
        },
        addManifest: function(a, b) {
            if (this._manifests.exists(b)) throw new n("Asset key for manifest " +
                b + " already exists.");
            this._nNeeded++;
            null != I.externalBase ? a.set_remoteBase(I.externalBase) : null != I.relativeBase && a.set_localBase(I.relativeBase);
            this._manifests.set(b, a);
            this._queue.push(b);
            return this
        },
        load: function() {
            this.loadedBytes = this.totalBytes = 0;
            this.ready = !1;
            for (var a = this._manifests.iterator(); a.hasNext();)
                for (var b = a.next(), b = z.iter(b._entries); b.hasNext();) this.totalBytes += b.next().bytes;
            this.loadManifest(this._queue.shift())
        },
        unload: function(a) {
            Nb.has(this._queue, a) && z.remove(this._queue, a);
            var b = this.get(a);
            I.release(a);
            this._manifests.remove(a);
            b.dispose()
        },
        loadManifest: function(a) {
            var b = I.getCached(a);
            if (null != b) {
                var c = b.get_manifest();
                this._manifests.set(a, c);
                this.onSuccess(b)
            } else {
                var d = i.loadAssetPack(this._manifests.get(a));
                if (d.hasResult) this.onSuccess(d.get_result());
                else this._isLoading = !0, this._packsLoading.push(d), b = d.success.connect(v(this, this.onSuccess)).once(), c = d.error.connect(v(this, this.onError)), d = d.progressChanged.connect(v(this, this.onProgress)), this._currentManifest = a, this._disposer.add(b), this._disposer.add(c), this._disposer.add(d)
            }
        },
        onProgress: function() {
            for (var a = 0, b = 0, c = this._packsLoading.length; b < c;) var d = b++,
                a = a + this._packsLoading[d]._progress;
            for (b = this._packsReady.iterator(); b.hasNext();)
                for (c = b.next().get_manifest().iterator(); c.hasNext();) d = c.next(), a += d.bytes;
            this.progressed.emit(a, this.totalBytes);
            this.loadedBytes = a
        },
        onRemoved: function() {
            if (this.releaseCacheOnRemove)
                for (var a = this._manifests.keys(); a.hasNext();) {
                    var b = a.next();
                    I.release(b)
                }
            this._disposer.dispose();
            this.ready = this._isLoading = !1;
            this._packsLoading = [];
            this._packsReady = new S
        },
        get: function(a) {
            if (this.ready) {
                var b = this._packsReady.get(a + (null == this._suffix ? "" : "_" + this._suffix));
                if (null != b) return b;
                b = this._packsReady.get(a);
                if (null != b) return b;
                throw new n("Asset pack " + a + " not part of this asset requirement.");
            }
            throw new n("Can't get an asset pack before all packs are loaded and ready.");
        },
        onSuccess: function(a) {
            this._retryCount = 0;
            this._disposer.dispose();
            this._nLoaded++;
            this._manifests.keys();
            for (var b = this._manifests.keys(); b.hasNext();) {
                var c = b.next();
                this._manifests.get(c) == a.get_manifest() && (this.autoCacheResults && I.cache(c, a), this._packsReady.set(c, a))
            }
            this._nLoaded == this._nNeeded ? (this.progressed.emit(this.totalBytes, this.totalBytes), this._isLoading = !1, this.ready = !0, this.success.emit()) : (this._packsLoading.shift(), this.loadManifest(this._queue.shift()))
        },
        onError: function(a) {
            console.log(a);
            3 < this._retryCount ? alert(a + "\nAttempted retries: " + this._retryCount) : (this._disposer.dispose(), this._retryCount++, this.loadManifest(this._currentManifest))
        },
        __class__: I
    });
    var Td = function() {};
    e["s2.loading.NullAssetPack"] = Td;
    Td.__name__ = ["s2", "loading", "NullAssetPack"];
    Td.__interfaces__ = [nc];
    Td.prototype = {
        getTexture: function() {
            return null
        },
        getSound: function() {
            return null
        },
        getFile: function() {
            return null
        },
        dispose: function() {},
        get_manifest: function() {
            return null
        },
        __class__: Td
    };
    var ye = function() {};
    e["s2.localization.LocaleParser"] = ye;
    ye.__name__ = ["s2", "localization", "LocaleParser"];
    ye.prototype = {
        __class__: ye
    };
    var Sd = function() {};
    e["s2.localization.DParser"] = Sd;
    Sd.__name__ = ["s2", "localization", "DParser"];
    Sd.__interfaces__ = [ye];
    Sd.prototype = {
        parseFonts: function(a) {
            var b = new Z,
                c = [];
            if (G.__instanceof(a, p))
                for (a = a.firstElement().elements(); a.hasNext();)
                    for (var d = a.next().elements(); d.hasNext();) {
                        var f = d.next().get("font"); - 1 == c.indexOf(f) && (b.add(f + ".fnt", f + ".fnt"), c.push(f))
                    }
            return b
        },
        parseDefinitions: function(a) {
            for (var b = new Z, c = a.get_manifest().iterator(); c.hasNext();) {
                var d = c.next();
                b.add(d.url, d.name);
                var f = a.getFile(d.name).toString(),
                    e = 0;
                do {
                    var g = f.indexOf('file="', e),
                        e = -1; - 1 < g && (g += 6, e = f.indexOf('"', g), g = f.substring(g, e), b.add(g.split(".")[0], g))
                } while (-1 < e);
                a.getFile(d.name).dispose()
            }
            return b
        },
        parseStrings: function(a, b) {
            var c = new S,
                d = new S;
            if (G.__instanceof(a, p))
                for (var f = a.firstElement().elements(); f.hasNext();) {
                    var e = f.next(),
                        g = e.elements();
                    if (e.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + e.nodeType);
                    for (e = e.nodeName; g.hasNext();) {
                        var i = g.next(),
                            j = i.get("font"),
                            k;
                        k = (null != Ra[j] ? d.existsReserved(j) : d.h.hasOwnProperty(j)) ? null != Ra[j] ? d.getReserved(j) : d.h[j] : (new Xb(b, j)).disposeFiles();
                        var l;
                        l = null == i.get("fontScale") ? 1 : D.parseFloat(i.get("fontScale"));
                        var m = e + ".";
                        if (i.nodeType != p.Element) throw new n("Bad node type, expected Element but found " + i.nodeType);
                        var m = m + i.nodeName,
                            o = k,
                            q = D.parseFloat(i.get("lineHeight"));
                        if (i.nodeType != p.Document && i.nodeType != p.Element) throw new n("Bad node type, expected Element or Document but found " + i.nodeType);
                        i = {
                            id: m,
                            font: o,
                            lineHeight: q,
                            scale: l,
                            text: i.children[0].get_nodeValue()
                        };
                        null != Ra[j] ? d.setReserved(j, k) : d.h[j] = k;
                        c.set(i.id, i)
                    }
                }
            return c
        },
        __class__: Sd
    };
    var j = function() {};
    e["s2.localization.Locale"] = j;
    j.__name__ = ["s2", "localization", "Locale"];
    j.init = function(a, b, c, d) {
        null == d && (d = "assets/fonts");
        null == c && (c = "xml/translation.xml");
        j._formats = new S;
        j._xmlPath = c;
        j._fontDirectory = d;
        j._onReady = a;
        j._parser = b;
        a = new Z;
        b = c;
        null != j.externalBase ? b = j.externalBase + j._xmlPath : null != j.relativeBase && (b = j.relativeBase + j._xmlPath);
        a.add(c, b);
        i._platform.loadAssetPack(a).get(j.onXmlSuccess)
    };
    j.getField = function(a, b, c) {
        null == b && (b = 0);
        if (j._formats.exists(a)) {
            var a = j._formats.get(a),
                d = new Ja(a.font, a.text);
            d.wrapWidth.set__(b / a.scale);
            d.set_align(c);
            d.setScale(a.scale);
            d.set_pixelSnapping(!1);
            return d
        }
        throw new n("No string id : '" + a + "' exists.");
    };
    j.getFormat = function(a) {
        if (j._formats.exists(a)) return j._formats.get(a);
        throw new n("No string id : '" + a + "' exists.");
    };
    j.onXmlSuccess = function(a) {
        a = a.getFile(j._xmlPath);
        j._x = p.parse(a.toString());
        a.dispose();
        a = j.prepManifest(j._parser.parseFonts(j._x));
        i._platform.loadAssetPack(a).get(j.onDefinitionLoadSuccess)
    };
    j.onDefinitionLoadSuccess = function(a) {
        a = j.prepManifest(j._parser.parseDefinitions(a));
        i._platform.loadAssetPack(a).get(j.onAtlasLoadSuccess)
    };
    j.prepManifest = function(a) {
        null != j.externalBase ? a.set_remoteBase(j.externalBase + j._fontDirectory) : null != j.relativeBase ? a.set_localBase(j.relativeBase + j._fontDirectory) : a.set_localBase(j._fontDirectory);
        return a
    };
    j.onAtlasLoadSuccess = function(a) {
        j._formats = j._parser.parseStrings(j._x, a);
        for (a = j._formats.iterator(); a.hasNext();) {
            var b = a.next(),
                c = M.replace(b.text, "<br>", "\n");
            c != b.text && (b.text = c)
        }
        j.loading = !1;
        null != j._onReady && j._onReady.apply(null, []);
        j._onReady = null
    };
    var Ha = function(a, b, c) {
        this._time = a;
        this._tilesWide = b;
        this._tilesHigh = c;
        this._holder = new g
    };
    e["s2.scene.BoxTransition"] = Ha;
    Ha.__name__ = ["s2", "scene", "BoxTransition"];
    Ha.__super__ = ya;
    Ha.prototype = m(ya.prototype, {
        init: function(a, b, c) {
            ya.prototype.init.call(this, a, b, c);
            this._elapsed = 0;
            this._texture = i._platform.getRenderer().createTexture(i._platform.getStage().get_width(), i._platform.getStage().get_height());
            q.render(b, this._texture.get_graphics());
            this._parallel = new W;
            for (var b = this._texture.split(this._tilesWide, this._tilesHigh), c = 0, d = b.length; c < d;) {
                var f = c++,
                    e = b[f],
                    f = new r(e),
                    e = (new g).add(f.centerAnchor().setXY(e.get_x() + 0.5 * e.get_width(), e.get_y() + 0.5 * e.get_height()));
                this._parallel.add(new C(f.alpha, 0, 0.5 * Math.random()));
                this._parallel.add(new C(f.scaleX, 2, 0.5 * Math.random()));
                this._parallel.add(new C(f.scaleY, 2, 0.5 * Math.random()));
                this._holder.addChild(e)
            }
            this._holder.add(new x);
            this._holder.add(new x).getComponent("Script_2").run(this._parallel);
            a.owner.addChild(this._holder)
        },
        update: function() {
            return 0 <= this._parallel.update(0, this._holder)
        },
        complete: function() {
            this._holder.dispose();
            this._texture.dispose()
        },
        __class__: Ha
    });
    var od = function(a, b, c) {
        this._time = a;
        this._tilesWide = b;
        this._tilesHigh = c;
        this._holder = new g
    };
    e["s2.scene.DropTransition"] = od;
    od.__name__ = ["s2", "scene", "DropTransition"];
    od.__super__ = ya;
    od.prototype = m(ya.prototype, {
        init: function(a, b, c) {
            ya.prototype.init.call(this, a, b, c);
            this._elapsed = 0;
            this._texture = i._platform.getRenderer().createTexture(i._platform.getStage().get_width(), i._platform.getStage().get_height());
            q.render(b, this._texture.get_graphics());
            this._parallel = new W;
            for (var b = this._texture.split(this._tilesWide, this._tilesHigh), c = 0, d = b.length; c < d;) {
                var f = c++,
                    f = [b[f]],
                    e = new r(f[0]),
                    j = [(new g).add(e.centerAnchor().setXY(f[0].get_x() + 0.5 * f[0].get_width(), f[0].get_y() + 0.5 * f[0].get_height()))],
                    k = Math.random() * this._time;
                this._parallel.add(new E([new N(0.25 * Math.random() * this._time), new W([new C(e.rotation, -360 + 720 * Math.random(), k, u.quadIn), new C(e.y, i._platform.getStage().get_height() + f[0].get_height(), k, u.quadIn)]), new K(function(a, b) {
                    return function() {
                        a[0].dispose();
                        b[0].dispose()
                    }
                }(j, f))]));
                this._holder.addChild(j[0])
            }
            this._holder.add(new x);
            this._holder.add(new x).getComponent("Script_2").run(this._parallel);
            a.owner.addChild(this._holder)
        },
        update: function() {
            return 0 <= this._parallel.update(0, this._holder)
        },
        complete: function() {
            this._holder.dispose();
            this._texture.dispose()
        },
        __class__: od
    });
    var ze = function(a, b) {
        null == b && (b = -1);
        this._obscured = 0 > b ? a.symbol.duration / 2 : b;
        this._movie = a;
        this._holder = new g
    };
    e["s2.scene.MovieTransition"] = ze;
    ze.__name__ = ["s2", "scene", "MovieTransition"];
    ze.__super__ = ya;
    ze.prototype = m(ya.prototype, {
        init: function(a, b, c) {
            ya.prototype.init.call(this, a, b, c);
            b = Math.max(i._platform.getStage().get_height() / 768, i._platform.getStage().get_width() / 1024);
            this._holder.add(this._movie);
            this._movie.setScale(b);
            this._movie.set_paused(!1);
            this._movie.set_position(0);
            this._movie.set_paused(!0);
            b = this._to._compMap.Sprite_3;
            null == b && this._to.add(b = new q);
            b.alpha.set__(0);
            a.owner.addChild(this._holder)
        },
        update: function(a) {
            this._movie.set_paused(!1);
            var b = this._movie;
            b.set_position(b._position + a);
            this._movie.set_paused(!0);
            this._movie._position >= this._obscured && (this._to._compMap.Sprite_3.alpha.set__(1), a = this._from._compMap.Sprite_3, null == a && this._from.add(a = new q), a.alpha.set__(0));
            return this._movie._position >= this._movie.symbol.duration
        },
        complete: function() {
            this._movie.set_paused(!1);
            this._movie.set_position(this._movie.symbol.duration);
            this._movie.set_paused(!0);
            this._to._compMap.Sprite_3.alpha.set__(1);
            this._holder.dispose()
        },
        __class__: ze
    });
    var oa = e["s2.scene.Position"] = {
        __ename__: ["s2", "scene", "Position"],
        __constructs__: "topRight,topLeft,topCenter,bottomRight,bottomCenter,bottomLeft,centerRight,centerCenter,centerLeft".split(",")
    };
    oa.topRight = function(a, b, c) {
        a = ["topRight", 0, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.topLeft = function(a, b, c) {
        a = ["topLeft", 1, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.topCenter = function(a, b, c) {
        a = ["topCenter", 2, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.bottomRight = function(a, b, c) {
        a = ["bottomRight", 3, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.bottomCenter = function(a, b, c) {
        a = ["bottomCenter", 4, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.bottomLeft = function(a, b, c) {
        a = ["bottomLeft", 5, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.centerRight = function(a, b, c) {
        a = ["centerRight", 6, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.centerCenter = function(a, b, c) {
        a = ["centerCenter", 7, a, b, c];
        a.__enum__ = oa;
        return a
    };
    oa.centerLeft = function(a, b, c) {
        a = ["centerLeft", 8, a, b, c];
        a.__enum__ = oa;
        return a
    };
    var Ud = function() {
        this._positioned = !1;
        this._elapsed = 0;
        this._autoHide = -1;
        this._visible = !1;
        H.call(this);
        this.opaque = !1
    };
    e["s2.scene.Popup"] = Ud;
    Ud.__name__ = ["s2", "scene", "Popup"];
    Ud.__super__ = H;
    Ud.prototype = m(H.prototype, {
        highlight: function(a) {
            this._highlights = a;
            this._copies = [];
            for (var b = new Eb, c = new Wb, d = 0, f = a.length; d < f;) {
                var e = d++,
                    b = q.getBounds(a[e], b),
                    c = ab.localToGlobal(a[e].parent, b.x, b.y, c),
                    c = ab.globalToLocal(this._container, c.x, c.y, c),
                    j = a[e]._compMap.Sprite_3.getViewMatrix(),
                    k = Math.sqrt(j.m00 * j.m00 + j.m01 * j.m01),
                    j = Math.sqrt(j.m10 * j.m10 + j.m11 * j.m11),
                    l = i._platform.getRenderer().createTexture(Math.ceil(b.width * k), Math.ceil(b.height * j));
                l.get_graphics().scale(k, j);
                l.get_graphics().translate(-b.x, -b.y);
                q.render(a[e], l.get_graphics());
                e = (new g).add((new r(l)).setXY(c.x, c.y));
                this._copies.push(e);
                this._container.addChild(e)
            }
            return this
        },
        setAutoHide: function(a) {
            this._autoHide = a;
            return this
        },
        clickToDismiss: function() {
            var a = this;
            this.owner._compMap.Disposer_27.connect1(this._container._compMap.Sprite_3.get_pointerUp(), function() {
                a._visible && a.hide()
            });
            return this
        },
        onUpdate: function(a) {
            this._visible && (this._elapsed += a, 0 < this._autoHide && this._elapsed >= this._autoHide && this.hide())
        },
        addDialog: function(a, b) {
            null != this._dialog && this._dialog.dispose();
            this._dialog = (new g).add(j.getField(a).centerAnchor());
            this._container.addChild(this._dialog);
            switch (b[1]) {
                case 0:
                    var c = b[4],
                        d = b[3];
                    J.right(J.top(this._dialog, b[2], c), d, c);
                    break;
                case 1:
                    c = b[4];
                    d = b[3];
                    J.left(J.top(this._dialog, b[2], c), d, c);
                    break;
                case 2:
                    c = b[4];
                    d = b[3];
                    J.centerX(J.top(this._dialog, b[2], c), d, c);
                    break;
                case 3:
                    c = b[4];
                    d = b[3];
                    J.left(J.bottom(this._dialog, b[2], c), d, c);
                    break;
                case 4:
                    c = b[4];
                    d = b[3];
                    J.centerX(J.bottom(this._dialog, b[2], c), d, c);
                    break;
                case 5:
                    c = b[4];
                    d = b[3];
                    J.left(J.bottom(this._dialog, b[2], c), d, c);
                    break;
                case 6:
                    c = b[4];
                    d = b[3];
                    J.right(J.centerY(this._dialog, b[2], c), d, c);
                    break;
                case 7:
                    c = b[4];
                    d = b[3];
                    J.centerX(J.centerY(this._dialog, b[2], c), d, c);
                    break;
                case 8:
                    c = b[4], d = b[3], J.left(J.centerY(this._dialog, b[2], c), d, c)
            }
            c = this._dialog._compMap.Sprite_3.scaleX._value;
            this._dialog._compMap.Sprite_3.setScale(0.2);
            this._dialog._compMap.Sprite_3.setAlpha(0);
            this._dialog.add(new x);
            this._dialog.add(new x).getComponent("Script_2").run(new E([new N(0.1), new W([new C(this._dialog._compMap.Sprite_3.alpha, 1, 0.2), new C(this._dialog._compMap.Sprite_3.scaleX, c, 0.8, u.backOut), new C(this._dialog._compMap.Sprite_3.scaleY, c, 0.8, u.backOut)])]));
            return this
        },
        hide: function() {
            var a = this;
            this._visible = !1;
            this.owner.add(new x);
            this.owner.add(new x).getComponent("Script_2").run(new E([new C(this._backing._compMap.Sprite_3.alpha, 0, 0.2, u.quadOut), new K(function() {
                if (null != a._copies)
                    for (var b = a._copies.length; 0 < b--;) {
                        var c = D.instance(a._copies[b]._compMap.Sprite_3, r).texture;
                        a._copies[b].dispose();
                        c.dispose()
                    }
                t.director.popScene()
            })]));
            null != this._dialog && (this._dialog.add(new x), this._dialog.add(new x).getComponent("Script_2").run(new W([new C(this._dialog._compMap.Sprite_3.scaleX, 0.01, 0.3, u.quadIn), new C(this._dialog._compMap.Sprite_3.scaleY, 0.01, 0.3, u.quadIn)])))
        },
        assetsReady: function() {
            this.setBackground((new fa(0, this.__.standardWidth, this.__.standardHeight)).setAlpha(0));
            this._frame = (new g).add(new q)
        },
        onShown: function() {
            var a = this;
            this.owner.add(new x);
            this.owner.add(new x).getComponent("Script_2").run(new E([new C(this._backing._compMap.Sprite_3.alpha, 0.8, 0.2, u.quadOut), new K(function() {
                a._visible = !0
            })]))
        },
        __class__: Ud
    });
    var bb = function(a) {
        null == a && (a = !0);
        this._wait = !1;
        hb.call(this);
        this.waitForTransitions = a
    };
    e["s2.scene.SceneLoader"] = bb;
    bb.__name__ = ["s2", "scene", "SceneLoader"];
    bb.__super__ = hb;
    bb.prototype = m(hb.prototype, {
        load: function() {
            this._wait = !1;
            this._assets.load()
        },
        setNextScene: function(a, b, c) {
            null == b && (b = !0);
            null != this._progressBind && (this._progressBind.dispose(), this._loadCompleteBind.dispose());
            this.nextScene = a;
            this._unwind = b;
            this._assets = new I(a.requiredPacks);
            this._transition = null == c ? t.getTransition() : c;
            this._progressBind = this._assets.progressed.connect(v(this, this.onProgress));
            this._loadCompleteBind = this._assets.success.connect(v(this, this.onLoadSuccess));
            return this
        },
        onProgress: function(a, b) {
            var c = a / b;
            this.owner.add(new fa(13369344, i._platform.getStage().get_width(), i._platform.getStage().get_height()));
            null != this.owner.firstChild && this.owner.firstChild.dispose();
            this.owner.addChild((new g).add(new fa(16777215, c * i._platform.getStage().get_width(), i._platform.getStage().get_height())))
        },
        onLoadSuccess: function() {
            this._progressBind.dispose();
            this._loadCompleteBind.dispose();
            this.nextScene.injectAssets(this._assets);
            this._assets = null;
            null != t.director._transitor && this.waitForTransitions ? this._wait = !0 : this.progressToNextScene()
        },
        onUpdate: function() {
            this._wait && null == t.director._transitor && this.progressToNextScene()
        },
        progressToNextScene: function() {
            this._unwind ? t.director.unwindToScene((new g).add(this.nextScene), this._transition) : (t.director.popScene(), t.director.pushScene((new g).add(this.nextScene), this._transition));
            this._transition = null;
            this._wait = !1
        },
        __class__: bb
    });
    var t = function() {};
    e["s2.scene.Scenes"] = t;
    t.__name__ = ["s2", "scene", "Scenes"];
    t.init = function(a) {
        t.director = new Nd;
        t.shown = new La;
        i.root.addChild((new g).add(t.director), !1);
        t.setPreloadScene(null != a ? a : new bb)
    };
    t.setPreloadScene = function(a) {
        t.preloadScene = a
    };
    t["goto"] = function(a, b, c) {
        null == b && (b = t.getTransition());
        var d = V.getClassName(a);
        if (!c)
            for (var c = 0, f = t.director.scenes; c < f.length;) {
                var e = f[c];
                ++c;
                for (var g = e.firstComponent; null != g;) {
                    if (G.__instanceof(g, a) && V.getClassName(null == g ? null : G.getClass(g)) == d) {
                        t.director.unwindToScene(e, b);
                        return
                    }
                    g = g.next
                }
            }
        a = t.checkForPreload(V.createInstance(a, []), !0, b);
        t.director.unwindToScene(a, b)
    };
    t.checkForPreload = function(a, b, c) {
        null == b && (b = !0);
        null != t._shownBind && t._shownBind.dispose();
        t._shownBind = a.shown.connect(function() {
            t.shown.emit()
        });
        t._shownBind.once();
        if (G.__instanceof(a, Ma)) {
            var d;
            d = G.__cast(a, Ma).requiredPacks;
            for (var f = 0; f < d.length;) {
                var e = d[f];
                ++f;
                if (null == I.getCached(e)) return t.preloadScene.setNextScene(G.__cast(a, Ma), b, c), t.preloadScene.load(), (new g).add(t.preloadScene)
            }
            b = new I(d);
            b.load();
            G.__cast(a, Ma).injectAssets(b)
        }
        return (new g).add(a)
    };
    t.push = function(a, b) {
        null == b && (b = t.getTransition());
        var c = t.checkForPreload(V.createInstance(a, []), !1, b);
        t.director.pushScene(c, b)
    };
    t.defaultTransition = function(a) {
        t._defaultTransition = a
    };
    t.getTransition = function() {
        return t._defaultTransition
    };
    var yc = function(a, b, c, d) {
        null == c && (c = "loading_off");
        null == b && (b = "loading_on");
        bb.call(this, !1);
        this._pack = a;
        this._onName = b;
        this._offName = c;
        this._dir = null == d ? za.Left : d
    };
    e["s2.scene.SwapPreloadScene"] = yc;
    yc.__name__ = ["s2", "scene", "SwapPreloadScene"];
    yc.__super__ = bb;
    yc.prototype = m(bb.prototype, {
        onAdded: function() {
            bb.prototype.onAdded.call(this);
            this._backing = (new g).add(new Fb(this._pack.getTexture("bg1"), this._pack.getTexture("bg2")));
            var a = new fc(this._pack.getTexture(this._onName), this._pack.getTexture(this._offName), this._dir);
            this._progress = (new g).add(a.setXY(47, 42));
            a.alpha.set_behavior(new ka(1, 0.8, 0.4));
            this._text = (new g).add(j.getField("loading.loading").centerAnchor());
            this._container = (new g).add(new q).addChild(this._backing).addChild(this._text).addChild(this._progress);
            this.owner.addChild(this._container);
            this._resizeHandle = i._platform.getStage().resize.connect(v(this, this.onResize));
            this.onResize()
        },
        onResize: function() {
            var a = Math.min(i._platform.getStage().get_width() / 1024, i._platform.getStage().get_height() / 600),
                b = 1366 * a,
                c = 768 * a;
            this._container._compMap.Sprite_3.setScale(a).setXY(0.5 * (i._platform.getStage().get_width() - b), 0.5 * (i._platform.getStage().get_height() -
                c));
            J.center(this._progress);
            J.center(this._text);
            this._text._compMap.Sprite_3.y.set__(this._progress._compMap.Sprite_3.y._value + this._progress._compMap.Sprite_3.getNaturalHeight() + 20)
        },
        onProgress: function(a, b) {
            G.__cast(this._progress._compMap.Sprite_3, fc).progress.animateTo(a / b, 0.1)
        },
        onLoadSuccess: function() {
            G.__cast(this._progress._compMap.Sprite_3, fc).progress.set__(1);
            bb.prototype.onLoadSuccess.call(this)
        },
        onRemoved: function() {
            bb.prototype.onRemoved.call(this);
            this._resizeHandle.dispose()
        },
        __class__: yc
    });
    var s = function() {};
    e["s2.sound.MusicManager"] = s;
    s.__name__ = ["s2", "sound", "MusicManager"];
    s.loop = function(a, b, c) {
        null == c && (c = 1);
        var d = a.getSound(b);
        s.init(d);
        s.loopSound(a, b, c)
    };
    s.stop = function() {
        null != s._bgLoop && (s._bgLoop.dispose(), s._bgLoop = null);
        null != s._audioTag && s._audioTag.pause()
    };
    s.loopSoundStandard = function(a, b, c) {
        s._volume = c;
        null == s._bgLoop || s._bgLoop.get_sound() != a.getSound(b) ? (null != s._bgLoop && s._bgLoop.dispose(), s._bgLoop = a.getSound(b).loop(s.get_muted().get__() ? 0 : s._volume)) : null != s._bgLoop && s._bgLoop.volume.animateTo(s.get_muted().get__() ? 0 : s._volume, 0.2)
    };
    s.get_muted = function() {
        null == s._muted && (s._muted = new R(!1, s.onMuteChange));
        return s._muted
    };
    s.onMuteChange = function(a) {
        null != s._audioTag ? (s._audioTag.muted = a, s._audioTag.volume = a ? 0 : s._volume * i.volume._value) : null != s._bgLoop && s._bgLoop.volume.set__(a ? 0 : s._volume)
    };
    s.init = function(a) {
        s._init || (s.loopSound = s.loopSoundStandard, G.__instanceof(a, Fa) && (s.loopSound = s.loopSoundHack, a = window.document, s._audioTag = a.createElement("audio"), s._audioTag.id = "flambe_audioTag_hack", i.hidden.get_changed().connect(function(a) {
            s._audioTag.muted = a;
            s._audioTag.volume = a ? 0 : s._volume * i.volume._value
        }), i.volume.get_changed().connect(function(a) {
            s._audioTag.volume = s._volume * a
        }), a.body.appendChild(s._audioTag)), s._init = !0)
    };
    s.loopSoundHack = function(a, b, c) {
        s._volume = c;
        s._audioTag.volume = s.get_muted().get__() ? 0 : c * i.volume._value;
        s._audioTag.autoplay = !0;
        s._audioTag.loop = !0;
        s._audioTag.preload = "auto";
        s._audioTag.src = s.findFullSoundURL(a, b);
        s._audioTag.muted = s.get_muted().get__()
    };
    s.findFullSoundURL = function(a, b) {
        for (var c = a.get_manifest().iterator(); c.hasNext();) {
            var d = c.next();
            if (d.name == b) return a.get_manifest().getFullURL(d)
        }
        return null
    };
    var $d = function(a, b, c, d) {
        this.standardWidth = a;
        this.standardHeight = b;
        this.newWidth = c;
        this.newHeight = d;
        this.scaleX = c / a;
        this.scaleY = d / b;
        this.minScale = Math.min(this.scaleX, this.scaleY);
        this.maxScale = Math.max(this.scaleX, this.scaleY)
    };
    e["s2.util.Coords"] = $d;
    $d.__name__ = ["s2", "util", "Coords"];
    $d.prototype = {
        __class__: $d
    };
    var Mb = function() {};
    e["s2.util.PathUtil"] = Mb;
    Mb.__name__ = ["s2", "util", "PathUtil"];
    Mb.absoluteToRelative = function(a, b) {
        console.log("Start Path: " + a + " - end path: " + b);
        if (Mb.sameDomain(a, b)) {
            var c = M.replace(M.replace(a, "http://", ""), "https://", "").split("/"),
                d = M.replace(M.replace(b, "http://", ""), "https://", "").split("/");
            c.shift();
            d.shift();
            "" == c[c.length - 1] && c.pop();
            for (var f = 0, e = Math.floor(Math.min(c.length, d.length)); f++ < e;) c[0] == d[0] ? (c.splice(0, 1), d.splice(0, 1)) : f = e + 1;
            e = "";
            for (f = c.length; 0 < f--;) e += "../";
            console.log("Relative path: " + e +
                d.join("/"));
            return e + d.join("/")
        }
        return null
    };
    Mb.sameDomain = function(a, b) {
        var c = Mb.getHost(a),
            d = Mb.getHost(b);
        return null != c && null != d && c == d ? !0 : !1
    };
    Mb.getHost = function(a) {
        return M.startsWith(a, "http://") || M.startsWith(a, "https://") ? M.replace(M.replace(a, "http://", ""), "https://", "").split("/")[0] : null
    };
    var ab = function() {};
    e["s2.util.Positioning"] = ab;
    ab.__name__ = ["s2", "util", "Positioning"];
    ab.localToGlobal = function(a, b, c, d) {
        a = a._compMap.Sprite_3;
        return null != a ? a.getViewMatrix().transform(b + a.anchorX._value, c + a.anchorY._value, d) : null
    };
    ab.globalToLocal = function(a, b, c, d) {
        a = a._compMap.Sprite_3;
        null == d && (d = new Wb(b, c));
        null != a && (a.getViewMatrix().inverseTransform(b, c, d), d.x -= a.anchorX._value, d.y -= a.anchorY._value);
        return d
    };
    var X = function(a) {
        null == X._parts && (X._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
        X._parts;
        this.url = a;
        this.query = new S;
        var b = new Ga("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)", "");
        b.match(a);
        for (var a = 0, c = X._parts.length; a < c;) {
            var d = a++,
                e = b.matched(d);
            if (null != e)
                if ("query" != X._parts[d]) this[X._parts[d]] = e;
                else
                    for (var d = e.split("&"), e = 0, g = d.length; e < g;) {
                        var i = e++,
                            i = d[i].split("=");
                        this.query.set(i[0], i[1])
                    }
        }
    };
    e["s2.util.URLParser"] = X;
    X.__name__ = ["s2", "util", "URLParser"];
    X.init = function() {
        null == X._parts && (X._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
        return X._parts
    };
    X.parse = function(a) {
        null == X._parts && (X._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
        X._parts;
        return new X(a)
    };
    X.fromBrowser = function() {
        return X.parse(D.string(window.location))
    };
    X.prototype = {
        toString: function() {
            null == X._parts && (X._parts = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","));
            X._parts;
            for (var a = "For Url -> " + this.url + "\n", b = 0, c = X._parts.length; b < c;) var d = b++,
                a = a + (X._parts[d] +
                    ": " + D.string(da.field(this, X._parts[d])) + (d == X._parts.length - 1 ? "" : "\n"));
            return a
        },
        __class__: X
    };
    var ja = function() {};
    e["s2.util.Utils"] = ja;
    ja.__name__ = ["s2", "util", "Utils"];
    ja.get_mobile = function() {
        if (!ja._inited) throw new n("Must call Utils.init() first.");
        return ja._mobile
    };
    ja.init = function() {
        var a;
        a = window.navigator.userAgent.toLowerCase();
        ja._mobile = -1 < a.indexOf("mini") || -1 < a.indexOf("mobile") || -1 < a.indexOf("pocketpc") || -1 < a.indexOf("smartphone") || -1 < a.indexOf("android") || -1 < a.indexOf("silk") || -1 < a.indexOf("arm") && -1 < a.indexOf("msie");
        ja.iPhone = -1 < a.indexOf("iphone");
        ja.chrome = -1 < a.indexOf("crios");
        ja._inited = !0
    };
    var Ke = 0;
    e.Math = Math;
    String.prototype.__class__ = e.String = String;
    String.__name__ = ["String"];
    e.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = e.Date = Date;
    Date.__name__ = ["Date"];
    var Le = e.Int = {
            __name__: ["Int"]
        },
        Me = e.Dynamic = {
            __name__: ["Dynamic"]
        },
        Ie = e.Float = Number;
    Ie.__name__ = ["Float"];
    var Je = e.Bool = Boolean;
    Je.__ename__ = ["Bool"];
    var Ge = e.Class = {
            __name__: ["Class"]
        },
        He = {},
        Ra = {},
        Ee = Function("return typeof ArrayBuffer != 'undefined' ? ArrayBuffer : null")() || $a;
    null == Ee.prototype.slice && (Ee.prototype.slice = $a.sliceImpl);
    Function("return typeof DataView != 'undefined' ? DataView : null")();
    var De = Function("return typeof Uint8Array != 'undefined' ? Uint8Array : null")() || yb._new;
    p.Element = 0;
    p.PCData = 1;
    p.CData = 2;
    p.Comment = 3;
    p.DocType = 4;
    p.ProcessingInstruction = 5;
    p.Document = 6;
    H.NAME = "Scene_0";
    Ka.NAME = "Scene_3";
    qa.NAME = "Scene_3";
    qa.SLIDE_X = 245;
    qa.SLIDE_Y = 110;
    qa._click = "sfx/UI_tick";
    qa._clickMenu = "sfx/UI_pause";
    qa._intensity = 1.5;
    qa._leftText1 = 22;
    qa._widthText1 = 220;
    qa._leftText2 = 645;
    qa._widthText2 = 210;
    Na.NAME = "Scene_3";
    Na.SLIDE_X = 245;
    Na.SLIDE_Y = 110;
    Na._click = "sfx/UI_tick";
    Na._clickMenu = "sfx/UI_pause";
    Na._intensity = 1.5;
    Oa.NAME = "Scene_3";
    Oa.SLIDE_X = 245;
    Oa.SLIDE_Y = 110;
    Oa._leftText1 = 500;
    Oa._click = "sfx/UI_tick";
    Oa._clickMenu = "sfx/UI_pause";
    Oa._intensity = 1.5;
    sb.NAME = "Scene_3";
    rb.NAME = "Scene_3";
    rb._click = "sfx/UI_tick";
    rb._error = "sfx/UI_error";
    rb._intensity = 1.5;
    ib.NAME = "Scene_3";
    ib._click = "sfx/UI_tick";
    ib._clickMenu = "sfx/UI_pause";
    ib._intensity = 1.5;
    db.NAME = "Scene_3";
    db._click = "sfx/UI_tick";
    db._clickMenu = "sfx/UI_pause";
    db._intensity = 1.5;
    Wa.NAME = "Scene_3";
    Wa._click = "sfx/UI_tick";
    Wa._clickMenu = "sfx/UI_pause";
    Wa._intensity = 1.5;
    cb.NAME = "Scene_3";
    cb._click = "sfx/UI_tick";
    cb._clickMenu = "sfx/UI_pause";
    cb._intensity = 1.5;
    tb.instance = new tb;
    ia.DISPATCHING_SENTINEL = new Vb(null, null);
    i.root = new g;
    i.uncaughtError = new ba;
    i.hidden = new R(!1);
    i.volume = new Y(1);
    i._platform = tb.instance;
    i._calledInit = !1;
    Z.__meta__ = {
        obj: {
            assets: [{
                pause_scene: [{
                    bytes: 1274,
                    md5: "c01f3e3c85b2e2ff390e8463952549ab",
                    name: "close.png"
                }, {
                    bytes: 45964,
                    md5: "6c5d262d341313ffba258013982722bd",
                    name: "confirmationOverlay.png"
                }, {
                    bytes: 1231,
                    md5: "62d77f71efb9de8316ca21403cbc0cd4",
                    name: "instructions.png"
                }, {
                    bytes: 69861,
                    md5: "d96b73593ad082d5e137a93389024d5b",
                    name: "pauseOverlayScreen.png"
                }, {
                    bytes: 1010,
                    md5: "483ea746ef042e6f1a8c58988d03df13",
                    name: "resume.png"
                }, {
                    bytes: 1805,
                    md5: "d6fa74836501555faa4738369488152a",
                    name: "volume_off.png"
                }, {
                    bytes: 1961,
                    md5: "439c65fe73f1ba4ba19c348e796a1e21",
                    name: "volume_on.png"
                }],
                overlay_book2_scene: [{
                    bytes: 6653,
                    md5: "bccc69253b2915a0414e6d547af55155",
                    name: "bookTwoMystery.png"
                }, {
                    bytes: 33487,
                    md5: "e6a4bd6a09bf5c11b1dd8a37b7003e34",
                    name: "bookTwoPlayers.png"
                }],
                global: [{
                    bytes: 77327,
                    md5: "8810a65f7d4e9ecfe1bd55866aee18b1",
                    name: "backgrounds/canyon_bg1.jpg"
                }, {
                    bytes: 72873,
                    md5: "b7fe65b6e472f361221fa3e2b2522348",
                    name: "backgrounds/canyon_bg2.jpg"
                }, {
                    bytes: 66043,
                    md5: "a5643dc46439180659afdb629ea73ecd",
                    name: "backgrounds/forest_bg1.jpg"
                }, {
                    bytes: 69163,
                    md5: "d39e6a665114f257a45e85bc7fb0c430",
                    name: "backgrounds/forest_bg2.jpg"
                }, {
                    bytes: 80992,
                    md5: "40d805c0b385cde84ff24faf7dbb0f22",
                    name: "backgrounds/mountain_bg1.jpg"
                }, {
                    bytes: 83798,
                    md5: "4eb30b92075c5193deb7f58e22007b82",
                    name: "backgrounds/mountain_bg2.jpg"
                }, {
                    bytes: 104476,
                    md5: "6960641689a855c66abd6c2f2eb03cc1",
                    name: "backgrounds/temple_bg1.jpg"
                }, {
                    bytes: 101218,
                    md5: "e23f62f9aafe77c0f348f2cf594bfcb2",
                    name: "backgrounds/temple_bg2.jpg"
                }, {
                    bytes: 7450,
                    md5: "283d545ba7145a0017f0054868c56e20",
                    name: "pauseBtn.png"
                }, {
                    bytes: 36910,
                    md5: "c75f2c5632a059afbeb420f0296fae54",
                    name: "sfx/UI_error.mp3"
                }, {
                    bytes: 38631,
                    md5: "319ee5d144e56701f1f0b8f17a6f78f4",
                    name: "sfx/UI_error.ogg"
                }, {
                    bytes: 15385,
                    md5: "e0e9759c7006ddfcb88adb57dd7d51a9",
                    name: "sfx/UI_pause.mp3"
                }, {
                    bytes: 12690,
                    md5: "fa43fb8b66cc4baf66d35f50679342f9",
                    name: "sfx/UI_pause.ogg"
                }, {
                    bytes: 22002,
                    md5: "94b9713491951e7359216168dfe53135",
                    name: "sfx/UI_pluck.mp3"
                }, {
                    bytes: 20982,
                    md5: "ad23de68f7dca151437bf2ba7f039068",
                    name: "sfx/UI_pluck.ogg"
                }, {
                    bytes: 22327,
                    md5: "7e675f43d17304d5bbf3932f6250784b",
                    name: "sfx/UI_slap.mp3"
                }, {
                    bytes: 23602,
                    md5: "03c5afae470143684c4cd2bf01b9c875",
                    name: "sfx/UI_slap.ogg"
                }, {
                    bytes: 10152,
                    md5: "5917f9aaa63de8266e0b40053fc30fa1",
                    name: "sfx/UI_tick.mp3"
                }, {
                    bytes: 6715,
                    md5: "d6ee9098b504545aadad2f35a1f42874",
                    name: "sfx/UI_tick.ogg"
                }, {
                    bytes: 167795,
                    md5: "ebc8c90f5950547f9d3c8f8ccc2adf32",
                    name: "slideBg.png"
                }],
                overlay_scenes: [{
                    bytes: 31836,
                    md5: "1ab91e14517a29c8998eb6db9ee8dbff",
                    name: "scroll_earth.png"
                }, {
                    bytes: 35916,
                    md5: "ff4d9169b28ccfaa3c07779f1e184f8c",
                    name: "scroll_fire.png"
                }, {
                    bytes: 30988,
                    md5: "90f1ba655986685d96b635c6dfc898b4",
                    name: "scroll_water.png"
                }, {
                    bytes: 71565,
                    md5: "9a7a1aeed6fab4fe437a64a2ce11b931",
                    name: "warningPanel_blank.png"
                }],
                map_scene: [{
                    bytes: 6480,
                    md5: "7173015f70fbe33b060802074734f27a",
                    name: "appa_icon.png"
                }, {
                    bytes: 6588,
                    md5: "66c386f3648ce90f6c5f60c5cdd0167d",
                    name: "earthScroll_Icon.png"
                }, {
                    bytes: 5024,
                    md5: "d7c88e256ff6163f778647c94b9110c8",
                    name: "fireNation_Icon.png"
                }, {
                    bytes: 7086,
                    md5: "e7df9705e31c1f6dc4446c6235e706ca",
                    name: "fireScroll_Icon.png"
                }, {
                    bytes: 252105,
                    md5: "dc0ec2a35efadb6b35bf64ef5c87dfa8",
                    name: "locations.json"
                }, {
                    bytes: 2967,
                    md5: "03d252283336f51d67f4991283a0c68e",
                    name: "lockIcon.png"
                }, {
                    bytes: 168190,
                    md5: "0977995f3b478710c11eacdf38f9bc60",
                    name: "mapb0.jpg"
                }, {
                    bytes: 150094,
                    md5: "d88c0a3e73550823a025690f3ab19c37",
                    name: "mapb1.jpg"
                }, {
                    bytes: 146084,
                    md5: "c2da26ba8ca68aa6e520e22b0f985452",
                    name: "mapb2.jpg"
                }, {
                    bytes: 141449,
                    md5: "9455378a99a32cf9200055d5ea95db14",
                    name: "mapb3.jpg"
                }, {
                    bytes: 145486,
                    md5: "ebf12dd44a3edba63dd67f90a79340e1",
                    name: "mapb4.jpg"
                }, {
                    bytes: 160443,
                    md5: "e9421bf42b662fbcf5d723cec8ef4061",
                    name: "music/aseg_selection_map_loopv1.m4a"
                }, {
                    bytes: 412106,
                    md5: "908f7054cee17b3bf7fa913ac140a529",
                    name: "music/aseg_selection_map_loopv1.mp3"
                }, {
                    bytes: 326672,
                    md5: "da3d3aa14363bdbca9f7f9ad5cd4ee3d",
                    name: "music/aseg_selection_map_loopv1.ogg"
                }, {
                    bytes: 629,
                    md5: "a30154d9dc9f8e15b545334332d687d0",
                    name: "touchable.png"
                }, {
                    bytes: 6769,
                    md5: "67cae4d51040931cee3dd53ae417ff71",
                    name: "waterScroll_Icon.png"
                }],
                instruction_map_scene: [{
                    bytes: 4451,
                    md5: "9149457695a2e5125da88fc2dba97351",
                    name: "map/icon1.png"
                }, {
                    bytes: 5411,
                    md5: "32d99c4e374d5e87d9fa827f3add0dad",
                    name: "map/icon2.png"
                }, {
                    bytes: 3267,
                    md5: "5fdee18087e1c5c4236fac95b74938d9",
                    name: "map/icon3.png"
                }, {
                    bytes: 5357,
                    md5: "003ba6d933b585a3dbd4752ffd507720",
                    name: "map/icon4.png"
                }, {
                    bytes: 3074,
                    md5: "4635ce7aafc6ea72ab80165c85c65168",
                    name: "map/icon5.png"
                }, {
                    bytes: 62387,
                    md5: "37fca3850cd9eed38b2c782e2b62de76",
                    name: "map/map.png"
                }, {
                    bytes: 1491,
                    md5: "37f646a55562b03589538492f65be4b7",
                    name: "map/vert_line.png"
                }],
                fonts: [{
                    bytes: 1630,
                    md5: "e93989b284a0097c362750028ad625ae",
                    name: "ceviche_blue_46.fnt"
                }, {
                    bytes: 5841,
                    md5: "52df08d7a980c480c8e44124dea52d61",
                    name: "ceviche_blue_46.png"
                }, {
                    bytes: 1629,
                    md5: "fc8016964cdf679c098586724e40d913",
                    name: "ceviche_red_46.fnt"
                }, {
                    bytes: 5612,
                    md5: "a9ac9ccd479c8784bf1580f98a58a916",
                    name: "ceviche_red_46.png"
                }, {
                    bytes: 10680,
                    md5: "240f9bc5f61a5060de1e3c1fb76d3054",
                    name: "ceviche_white_102.fnt"
                }, {
                    bytes: 75744,
                    md5: "c533f8792cd3981c3818aed524a558ab",
                    name: "ceviche_white_102.png"
                }, {
                    bytes: 10766,
                    md5: "9b73118c48403aff05d004b01c91c44e",
                    name: "ceviche_white_150.fnt"
                }, {
                    bytes: 112142,
                    md5: "5841a350fd5b18a855a0e8e42022bdec",
                    name: "ceviche_white_150.png"
                }, {
                    bytes: 10643,
                    md5: "7dc7503ba708ed65e1522aa3d632aa8f",
                    name: "ceviche_white_46.fnt"
                }, {
                    bytes: 41669,
                    md5: "decd027ffc1edcfee08b4f3420cbbe55",
                    name: "ceviche_white_46.png"
                }, {
                    bytes: 10489,
                    md5: "8dd117aff62f1e65813b1aa4ca450655",
                    name: "herculanum_black_32.fnt"
                }, {
                    bytes: 10938,
                    md5: "ad6a8387d6ab9a454119384012b082fc",
                    name: "herculanum_black_32.png"
                }, {
                    bytes: 10551,
                    md5: "df216167658022ee06e94ddae13f5017",
                    name: "herculanum_white_36.fnt"
                }, {
                    bytes: 20451,
                    md5: "fbd4d3bb77f519570d742862bf3841f2",
                    name: "herculanum_white_36.png"
                }, {
                    bytes: 10693,
                    md5: "5cd3112190f2996b1b24ceed5967f810",
                    name: "herculanum_white_59.fnt"
                }, {
                    bytes: 39994,
                    md5: "581cef0647b61efefed7927ad38ba590",
                    name: "herculanum_white_59.png"
                }, {
                    bytes: 13552,
                    md5: "71366286e5089293e6d55c9ae7e440ae",
                    name: "palatino_black_22.fnt"
                }, {
                    bytes: 9290,
                    md5: "4841376552c32251b285199cf4611cb4",
                    name: "palatino_black_22.png"
                }],
                overlay_book1_scene: [{
                    bytes: 14496,
                    md5: "712846138b2e7ae6c6eb1c740ac41eb1",
                    name: "bookOneMystery.png"
                }, {
                    bytes: 28492,
                    md5: "80cd33443af4a07a8cd4ea43d355d69b",
                    name: "bookOnePlayers.png"
                }],
                game_scene: [{
                    bytes: 4586,
                    md5: "e77260ecd4267b5b525eeff452920837",
                    name: "actions/Air.png"
                }, {
                    bytes: 3405,
                    md5: "a945c7cee074ad2e183be6b4f33b5961",
                    name: "actions/AirOff.png"
                }, {
                    bytes: 3719,
                    md5: "6b6a44ecfb1140e7959058a4d5e5663e",
                    name: "actions/Attack.png"
                }, {
                    bytes: 2863,
                    md5: "803ed1fe97d5fbfa5e64b0c68e9dca09",
                    name: "actions/AttackOff.png"
                }, {
                    bytes: 4429,
                    md5: "e431f544e33d93f80c521c4393b20a6b",
                    name: "actions/Earth.png"
                }, {
                    bytes: 3295,
                    md5: "b256c56d0478a9a864f12d7a7c259f58",
                    name: "actions/EarthOff.png"
                }, {
                    bytes: 4512,
                    md5: "8780d27f3db7c9bb94fedd81d12b12b2",
                    name: "actions/Fire.png"
                }, {
                    bytes: 3557,
                    md5: "0b886a809220737c19d1e6dd6cbedfc8",
                    name: "actions/FireOff.png"
                }, {
                    bytes: 4482,
                    md5: "21d949337bf06dfec3891e71bef74098",
                    name: "actions/Normal.png"
                }, {
                    bytes: 4830,
                    md5: "f03fbed7698765c3a22fa4e906f608a8",
                    name: "actions/Water.png"
                }, {
                    bytes: 3627,
                    md5: "bbf5310ae4bafa0c7c539b4f3b38aefe",
                    name: "actions/WaterOff.png"
                }, {
                    bytes: 76625,
                    md5: "48bc9d041c19f5bb3e47429521ec0277",
                    name: "battleScreenWavePanel.png"
                }, {
                    bytes: 2292,
                    md5: "bdda5b23b77508f6691ac9fa9b46b726",
                    name: "characterGlow.png"
                }, {
                    bytes: 133740,
                    md5: "a1c00d6fa3cfd8efa6249e00b5671e8b",
                    name: "characters/atlas0.png"
                }, {
                    bytes: 162490,
                    md5: "3f19727ece775758383212e2c8a23cd4",
                    name: "characters/atlas1.png"
                }, {
                    bytes: 131918,
                    md5: "b56bf6349d96097792e295e66c5161ea",
                    name: "characters/atlas2.png"
                }, {
                    bytes: 314651,
                    md5: "6c53c2326c19b462222e331b5c3c51a4",
                    name: "characters/library.json"
                }, {
                    bytes: 162685,
                    md5: "201d787dfe3a6bd697a8ea663d0f0140",
                    name: "fx/atlas0.png"
                }, {
                    bytes: 19622,
                    md5: "f384d01396e7e237f21ba409a7d73efb",
                    name: "fx/library.json"
                }, {
                    bytes: 25304,
                    md5: "9c3e432a200cb6a498fbf72ae958fe9f",
                    name: "meter/powerMeterAttack_empty.png"
                }, {
                    bytes: 850,
                    md5: "9c6aa75d6b3444438d95fb5ee05d21b1",
                    name: "meter/powerMeterAttack_full.png"
                }, {
                    bytes: 24495,
                    md5: "3a2a1cffcce76d5bda44d5550b7fd77c",
                    name: "meter/powerMeterHealth_empty.png"
                }, {
                    bytes: 863,
                    md5: "e3bbdefd7f17ee9362facfc560663fc9",
                    name: "meter/powerMeterHealth_full.png"
                }, {
                    bytes: 81556,
                    md5: "6cf1c62fd9805e36d2e61007149c22d9",
                    name: "music/aseg_battlemusic_endv1.mp3"
                }, {
                    bytes: 52746,
                    md5: "549c5e17520a1f252aa3d4d9db0251e9",
                    name: "music/aseg_battlemusic_endv1.ogg"
                }, {
                    bytes: 53972,
                    md5: "300c5d5b62785d241707a908fd11ce8e",
                    name: "music/aseg_battlemusic_introv1.mp3"
                }, {
                    bytes: 40559,
                    md5: "7e17536b0b0a2e01648a3ccb40f2d5e8",
                    name: "music/aseg_battlemusic_introv1.ogg"
                }, {
                    bytes: 229903,
                    md5: "7459359eb8f5b51b82ac91b3292a14c5",
                    name: "music/aseg_battlemusicloopv1.m4a"
                }, {
                    bytes: 690104,
                    md5: "d878e7f787c4394bafb732da9900b4e4",
                    name: "music/aseg_battlemusicloopv1.mp3"
                }, {
                    bytes: 545823,
                    md5: "0d5f5296eaec2623aa1d932074fd72fe",
                    name: "music/aseg_battlemusicloopv1.ogg"
                }, {
                    bytes: 219442,
                    md5: "bd8d3f7757b5546253e9a2c6ea3d89c8",
                    name: "music/aseg_boss_battlemusicloopv1.m4a"
                }, {
                    bytes: 648731,
                    md5: "b2780d7855a3d23d2a58ac32dc7cb1ba",
                    name: "music/aseg_boss_battlemusicloopv1.mp3"
                }, {
                    bytes: 482173,
                    md5: "315eef5f8fdc8bdbdbaeb6ad7ecde568",
                    name: "music/aseg_boss_battlemusicloopv1.ogg"
                }, {
                    bytes: 81978,
                    md5: "90ade68ae281ea62a92a745318cfa9c1",
                    name: "music/aseg_bossbattlemusic_endv1.mp3"
                }, {
                    bytes: 57470,
                    md5: "c75f272f5baf2cc4ed7358f7a11787fe",
                    name: "music/aseg_bossbattlemusic_endv1.ogg"
                }, {
                    bytes: 2480,
                    md5: "2adb618134fe0d195c26824886e8ad67",
                    name: "power/chargePU.png"
                }, {
                    bytes: 2445,
                    md5: "ab52a110dc310c6ae3fb4b5ff41523af",
                    name: "power/healthPU.png"
                }, {
                    bytes: 587,
                    md5: "5eb22863a95e5dcf8221a418724d2f5a",
                    name: "power/puShadow.png"
                }, {
                    bytes: 2651,
                    md5: "088fc4a2e2ddea0e97487b597459e7a2",
                    name: "power/speedPU.png"
                }, {
                    bytes: 8329,
                    md5: "7049958ab7af6fd7cf8a23d454784ced",
                    name: "runBtn.png"
                }, {
                    bytes: 25233,
                    md5: "721d81c6979a673ef2810d48ab62f03a",
                    name: "sfx/attack_aang_air.mp3"
                }, {
                    bytes: 19111,
                    md5: "c1b46e7af18936a9718022f6841659af",
                    name: "sfx/attack_aang_air.ogg"
                }, {
                    bytes: 26489,
                    md5: "08e2bec7a84f1a534dbe24a7a1d9e74a",
                    name: "sfx/attack_aang_earth.mp3"
                }, {
                    bytes: 22024,
                    md5: "7d4a96d2e84616bfd135193bf7ac576a",
                    name: "sfx/attack_aang_earth.ogg"
                }, {
                    bytes: 15203,
                    md5: "baaafc533c1e839c14e2f7d0c137fde0",
                    name: "sfx/attack_aang_fire.mp3"
                }, {
                    bytes: 13195,
                    md5: "147ab121ea4fd14c8f1913a6ebf4d9c9",
                    name: "sfx/attack_aang_fire.ogg"
                }, {
                    bytes: 26908,
                    md5: "881fca2e4070e1939aac3be964bccfab",
                    name: "sfx/attack_aang_normal.mp3"
                }, {
                    bytes: 18848,
                    md5: "51ef7a9400c5405ce5533558b2622086",
                    name: "sfx/attack_aang_normal.ogg"
                }, {
                    bytes: 25235,
                    md5: "fdf820fdddab979f6f890413ea66bf13",
                    name: "sfx/attack_aang_water.mp3"
                }, {
                    bytes: 15793,
                    md5: "af735b169d3c518166fb8a86e4420d80",
                    name: "sfx/attack_aang_water.ogg"
                }, {
                    bytes: 14779,
                    md5: "9443407a7737ccc33d7893f685c0a72c",
                    name: "sfx/attack_bee.mp3"
                }, {
                    bytes: 13636,
                    md5: "fefd3a9301376e6c82e49c9853fe902f",
                    name: "sfx/attack_bee.ogg"
                }, {
                    bytes: 40698,
                    md5: "4ba0bcdaf5a1d100f8d560b199027d91",
                    name: "sfx/attack_kat_heal.mp3"
                }, {
                    bytes: 30369,
                    md5: "275937b76317f3dad60919c66d107441",
                    name: "sfx/attack_kat_heal.ogg"
                }, {
                    bytes: 22309,
                    md5: "29d579e5eb4d43ab4615faa22d891ddf",
                    name: "sfx/attack_kat_normal.mp3"
                }, {
                    bytes: 16730,
                    md5: "36311229cbcd35ef6bfdb24462a90a67",
                    name: "sfx/attack_kat_normal.ogg"
                }, {
                    bytes: 4333,
                    md5: "38a1ea7d6b41fbf570cfeb835bfded76",
                    name: "sfx/attack_miss_2.mp3"
                }, {
                    bytes: 5788,
                    md5: "7ed79bbc820d446eeec52d1ecfce7eff",
                    name: "sfx/attack_miss_2.ogg"
                }, {
                    bytes: 29835,
                    md5: "926b37889b1b42befddd49d288efde0a",
                    name: "sfx/attack_ozai_normal.mp3"
                }, {
                    bytes: 15473,
                    md5: "65bb419ffc025cbe8b70ae0153d18a41",
                    name: "sfx/attack_ozai_normal.ogg"
                }, {
                    bytes: 16878,
                    md5: "2b65de288f514a5d85448282e422660d",
                    name: "sfx/attack_sokka_slash.mp3"
                }, {
                    bytes: 13001,
                    md5: "52de9692620cf4e9277e5957608e2218",
                    name: "sfx/attack_sokka_slash.ogg"
                }, {
                    bytes: 18968,
                    md5: "ef16b14651ae97fdafda99ea0b5de46b",
                    name: "sfx/attack_sokka_throw.mp3"
                }, {
                    bytes: 15129,
                    md5: "741ef1a41489f95df06fcd8004195096",
                    name: "sfx/attack_sokka_throw.ogg"
                }, {
                    bytes: 19805,
                    md5: "36146f616d1cf619c18937d682b29e67",
                    name: "sfx/attack_soldier_fire.mp3"
                }, {
                    bytes: 15963,
                    md5: "547260b739980f2db98aa65dd2fd8918",
                    name: "sfx/attack_soldier_fire.ogg"
                }, {
                    bytes: 14373,
                    md5: "b91f6f369bd06c6485daba818d25d545",
                    name: "sfx/attack_soldier_normal.mp3"
                }, {
                    bytes: 12065,
                    md5: "e9cda7b6f2a9f190cfae851340da56d2",
                    name: "sfx/attack_soldier_normal.ogg"
                }, {
                    bytes: 16455,
                    md5: "cdef2ea6b36eeb74e7d47f2a07c71a7e",
                    name: "sfx/attack_spider.mp3"
                }, {
                    bytes: 12697,
                    md5: "a56d9afcd8022ec3e518ec3f09340113",
                    name: "sfx/attack_spider.ogg"
                }, {
                    bytes: 237141,
                    md5: "44a82955cd14efa4731903f0d89b2757",
                    name: "sfx/attack_toph_earth.mp3"
                }, {
                    bytes: 23316,
                    md5: "4ef1055d2bfaf323427bf16ae2f9bd13",
                    name: "sfx/attack_toph_earth.ogg"
                }, {
                    bytes: 235889,
                    md5: "c4c009bf38ae1cd7c159743f181ded16",
                    name: "sfx/attack_toph_normal.mp3"
                }, {
                    bytes: 25651,
                    md5: "b3f60f16b6eb1abfd8765987321d38df",
                    name: "sfx/attack_toph_normal.ogg"
                }, {
                    bytes: 30251,
                    md5: "f560594e1455b67073f4c007028224bf",
                    name: "sfx/attack_zuko_fire.mp3"
                }, {
                    bytes: 22130,
                    md5: "b49aeb15981227ff6a02b264cdaebbc2",
                    name: "sfx/attack_zuko_fire.ogg"
                }, {
                    bytes: 30253,
                    md5: "0b394b283c3ef51b95841eac17bb07a1",
                    name: "sfx/attack_zuko_normal.mp3"
                }, {
                    bytes: 22464,
                    md5: "6a82ffd479cad620d7d1ce22f0c23d65",
                    name: "sfx/attack_zuko_normal.ogg"
                }, {
                    bytes: 4333,
                    md5: "e9703bb6c01d4a4a85eff93ff62b7843",
                    name: "sfx/block_attack.mp3"
                }, {
                    bytes: 6273,
                    md5: "9ac618233b7050ef3e453822c003961b",
                    name: "sfx/block_attack.ogg"
                }, {
                    bytes: 5171,
                    md5: "129225af78d62084a32f06e05747e50d",
                    name: "sfx/block_attack_2.mp3"
                }, {
                    bytes: 6204,
                    md5: "dd5af24a0df72fec2ffdceb5d14068ca",
                    name: "sfx/block_attack_2.ogg"
                }, {
                    bytes: 16033,
                    md5: "027a8e4dece1acc57678de3842a6e37f",
                    name: "sfx/death_bee.mp3"
                }, {
                    bytes: 14031,
                    md5: "7393d7ef1209c172cf5e2d6fe6ccee3c",
                    name: "sfx/death_bee.ogg"
                }, {
                    bytes: 18967,
                    md5: "8af10f61abff891c81911c724812b134",
                    name: "sfx/death_human_enemy.mp3"
                }, {
                    bytes: 15418,
                    md5: "4fd3939ca92f9992ffebed526004e5d9",
                    name: "sfx/death_human_enemy.ogg"
                }, {
                    bytes: 16454,
                    md5: "aef414f82a263bdc7b53b47f693d80fc",
                    name: "sfx/death_spider.mp3"
                }, {
                    bytes: 12260,
                    md5: "4e3d622597339717a6218e647f1c4a94",
                    name: "sfx/death_spider.ogg"
                }, {
                    bytes: 9342,
                    md5: "d12fc61fd14a3cdb5357fa71d3bf3b59",
                    name: "sfx/hit_1.mp3"
                }, {
                    bytes: 9061,
                    md5: "ccbcae01a5b7fbb533b3267c68a7d8b5",
                    name: "sfx/hit_1.ogg"
                }, {
                    bytes: 9342,
                    md5: "a11d5eec2b878cbd83efb177fbf2165e",
                    name: "sfx/hit_2.mp3"
                }, {
                    bytes: 8969,
                    md5: "927abbad4e7b48af0c7074881584636f",
                    name: "sfx/hit_2.ogg"
                }, {
                    bytes: 12267,
                    md5: "03559923f15ec6d7190fb0f9d47fe0eb",
                    name: "sfx/hit_3.mp3"
                }, {
                    bytes: 10801,
                    md5: "a4f335f10b5e3d958fda57ee42afa5db",
                    name: "sfx/hit_3.ogg"
                }, {
                    bytes: 12277,
                    md5: "c1135cce4699dba7989797926e9a0c1d",
                    name: "sfx/hit_bee_monster.mp3"
                }, {
                    bytes: 11972,
                    md5: "56599c3e14b3fa29359cbc65f7b1658a",
                    name: "sfx/hit_bee_monster.ogg"
                }, {
                    bytes: 12269,
                    md5: "2a9ffdbbf94742b52b106a37b468104a",
                    name: "sfx/hit_hoo.mp3"
                }, {
                    bytes: 10896,
                    md5: "be719656742a37544efb20ecf2e76e88",
                    name: "sfx/hit_hoo.ogg"
                }, {
                    bytes: 12269,
                    md5: "806f74b80112d5482fe0d63a4bb30c5f",
                    name: "sfx/hit_ooh.mp3"
                }, {
                    bytes: 11019,
                    md5: "a49ae674211a91070a3049be8d4a60e8",
                    name: "sfx/hit_ooh.ogg"
                }, {
                    bytes: 12272,
                    md5: "9aad27de87de9b533a3ae993c5869a1a",
                    name: "sfx/hit_spider.mp3"
                }, {
                    bytes: 10706,
                    md5: "c25f004b8b8b44284d27d1f0a4db42f3",
                    name: "sfx/hit_spider.ogg"
                }, {
                    bytes: 12269,
                    md5: "75172e886e262b1c4f9a75c55ba7398a",
                    name: "sfx/hit_ugh.mp3"
                }, {
                    bytes: 11110,
                    md5: "4b6aa8ccf44323be4ab49435cf9899c0",
                    name: "sfx/hit_ugh.ogg"
                }, {
                    bytes: 11862,
                    md5: "3decf277cf965203e2e84a0f9d853ffb",
                    name: "sfx/UI_character_ready.mp3"
                }, {
                    bytes: 11578,
                    md5: "a979fb00bf49b7f00a168de183be77c1",
                    name: "sfx/UI_character_ready.ogg"
                }, {
                    bytes: 3492,
                    md5: "6e082e3cff08dadf3a111dc8b04ff6a3",
                    name: "sfx/UI_tick.mp3"
                }, {
                    bytes: 5172,
                    md5: "233a442cfc6fda2bffcad729fe9d2d2b",
                    name: "sfx/UI_tick.ogg"
                }, {
                    bytes: 708,
                    md5: "5be236a0dadcac23efa2a4da8dd6b544",
                    name: "targetPointer.png"
                }],
                bootstrap: [{
                    bytes: 53676,
                    md5: "32fcf80959cff5761cb0452010122d84",
                    name: "bg1.jpg"
                }, {
                    bytes: 53090,
                    md5: "1e1c7c18462649d67172ec57ae535e58",
                    name: "bg2.jpg"
                }, {
                    bytes: 288,
                    md5: "5b2de37068d39d45771e6ce7cf247958",
                    name: "empty.mp3"
                }, {
                    bytes: 4435,
                    md5: "db402228bb9a528056a8ab34e4433e25",
                    name: "empty.ogg"
                }, {
                    bytes: 16973,
                    md5: "9edbb8ce3367996a4a9ec297a6a8aef7",
                    name: "loader_bar/progress.png"
                }, {
                    bytes: 16709,
                    md5: "b8a378b5aa782fde7d789edf4fb5bfc4",
                    name: "loader_bar/total.png"
                }, {
                    bytes: 6842,
                    md5: "7817afed25c676e8513cd34ecded99cc",
                    name: "orientation_ipad.png"
                }, {
                    bytes: 8359,
                    md5: "a167b4354b9f1ee0474302921a7a1c3b",
                    name: "orientation_iphone.png"
                }],
                title_scene: [{
                    bytes: 75426,
                    md5: "1c94eb97b0f13078bc0432f9942912fb",
                    name: "bg1.jpg"
                }, {
                    bytes: 69173,
                    md5: "b90c0d73443be9be4fac80f336b997ef",
                    name: "bg2.jpg"
                }, {
                    bytes: 70660,
                    md5: "fa545f5ad5e63b8de9ec1410abb3bb9d",
                    name: "music/aseg_titlescreen_endstingerv1a.m4a"
                }, {
                    bytes: 74053,
                    md5: "50ef71bd02f5f594c1a1bb4ab92b19da",
                    name: "music/aseg_titlescreen_endstingerv1a.mp3"
                }, {
                    bytes: 91857,
                    md5: "3af5ce220da8be957a5537961be54ed5",
                    name: "music/aseg_titlescreen_endstingerv1a.ogg"
                }, {
                    bytes: 69918,
                    md5: "a11d9d86cb9d79d1eb1a83e7de33df99",
                    name: "music/aseg_titlescreen_endstingerv1b.m4a"
                }, {
                    bytes: 69877,
                    md5: "5bc1397ea45f527c621bc5a26792428b",
                    name: "music/aseg_titlescreen_endstingerv1b.mp3"
                }, {
                    bytes: 83514,
                    md5: "423de861f3f41ad309ec2ca3a76794b6",
                    name: "music/aseg_titlescreen_endstingerv1b.ogg"
                }, {
                    bytes: 154448,
                    md5: "5cc5b6009edc12f52a7f378385094bd0",
                    name: "music/aseg_titlescreenloopv1.m4a"
                }, {
                    bytes: 491131,
                    md5: "16b331e69bd84c5a239eb1c1ea4e3c51",
                    name: "music/aseg_titlescreenloopv1.mp3"
                }, {
                    bytes: 696630,
                    md5: "8cadb52bcfb654a202a303608bee63ce",
                    name: "music/aseg_titlescreenloopv1.ogg"
                }, {
                    bytes: 4433,
                    md5: "094da17156a56e49756ce1707f13ef29",
                    name: "muteBtn.png"
                }, {
                    bytes: 19322,
                    md5: "2cca7fc1f07735ce02fb0d99871dc9ab",
                    name: "muteBtnOff.png"
                }],
                result_scene: [{
                    bytes: 7647,
                    md5: "a5add3810eb64a92c03684e39180e233",
                    name: "modal/aangPortrait.png"
                }, {
                    bytes: 84,
                    md5: "558f2479ad55f85a89ecbe1408a5d473",
                    name: "modal/barFill.png"
                }, {
                    bytes: 8159,
                    md5: "68e89a5b2f6b5a814ea094d9be5c2710",
                    name: "modal/kataraPortrait.png"
                }, {
                    bytes: 46047,
                    md5: "46124fdec92eae842d3932cbf387031b",
                    name: "modal/modalBack.png"
                }, {
                    bytes: 19643,
                    md5: "6abb8e8329ece61a5eddf01a30416775",
                    name: "modal/modalTop.png"
                }, {
                    bytes: 6537,
                    md5: "cd59e0d9e0c823f4ff6a8c917554a94d",
                    name: "modal/newLevelPanel.png"
                }, {
                    bytes: 7674,
                    md5: "d32705f261d63df25fcd2a6fe4f9a1b1",
                    name: "modal/sokkaPortrait.png"
                }, {
                    bytes: 8131,
                    md5: "0c550d6d7ead0953a00083fa860c9468",
                    name: "modal/tophPortrait.png"
                }, {
                    bytes: 7610,
                    md5: "0bf7888e647a7a1c0a2db0d08e22eb4d",
                    name: "modal/zukoPortrait.png"
                }],
                overlay_book3_scene: [{
                    bytes: 18407,
                    md5: "b086c42b3fe2a300d3c52255b89926d1",
                    name: "avatarLogo.png"
                }, {
                    bytes: 33238,
                    md5: "9b38035604c55253483d5b0d94190338",
                    name: "bookThreePlayers.png"
                }, {
                    bytes: 68451,
                    md5: "e7d3ff06c6a5dbca2e641363c861d1f9",
                    name: "bookThreePlayersShadows.png"
                }],
                instruction_battle_scene: [{
                    bytes: 26515,
                    md5: "032e79621119053bcace02a03db63a28",
                    name: "controls/content.png"
                }, {
                    bytes: 4867,
                    md5: "5029f4769d325543268813a6dbb768b1",
                    name: "group/cell1_icon.png"
                }, {
                    bytes: 10038,
                    md5: "5052dc544406f8a07ef87d2027d4a4fc",
                    name: "group/cell1_photo.png"
                }, {
                    bytes: 3719,
                    md5: "6b6a44ecfb1140e7959058a4d5e5663e",
                    name: "group/cell2_icon.png"
                }, {
                    bytes: 8649,
                    md5: "5abdbec2acad56401d8e391357131d51",
                    name: "group/cell2_photo.png"
                }, {
                    bytes: 15979,
                    md5: "c82b266dcb8c19ffdc31d0c339076e64",
                    name: "group/cell3_icon.png"
                }, {
                    bytes: 75955,
                    md5: "42bb73b16202f03d8652bb898a1a4b0a",
                    name: "group/cell3_photo.png"
                }, {
                    bytes: 15421,
                    md5: "ca405a34446be891417dcedf6586650c",
                    name: "group/cell4_icon.png"
                }, {
                    bytes: 74716,
                    md5: "ae84b9048f878c51db86539c6d9f3d76",
                    name: "group/cell4_photo.png"
                }, {
                    bytes: 1077,
                    md5: "192e167db9ec3dbfca911693cc1f5911",
                    name: "group/line.png"
                }, {
                    bytes: 14692,
                    md5: "11eba65674c2500d055902878d29b3f5",
                    name: "pickups/pickUps_elements.png"
                }, {
                    bytes: 10436,
                    md5: "9aba1c65030e7997de3069b39b3c39fb",
                    name: "specials/avatar.png"
                }, {
                    bytes: 6929,
                    md5: "bfa2091c78f8b7dae351ccfe851675bb",
                    name: "specials/icon1.png"
                }, {
                    bytes: 7010,
                    md5: "988e312b4908f8c940b695658db22994",
                    name: "specials/icon2.png"
                }, {
                    bytes: 6260,
                    md5: "8618eb53eed5deba5ab2cd453b635524",
                    name: "specials/icon3.png"
                }, {
                    bytes: 6453,
                    md5: "428a133eefeb1f373007fdda8f9da4ed",
                    name: "specials/icon4.png"
                }, {
                    bytes: 16215,
                    md5: "e768d7da4d296df9f85784d9ca825f5d",
                    name: "targeting/left.png"
                }, {
                    bytes: 18346,
                    md5: "f84170ff7c00f10b16d3cb67f7ab63be",
                    name: "targeting/right.png"
                }]
            }]
        }
    };
    Z._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    q._scratchPoint = new Wb;
    Xb.NEWLINE = new yd(10);
    xa._sharedEvent = new fe;
    na._sharedEvent = new ge;
    Tb.CANVAS_TEXTURES = (new Ga("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    T._mediaRefCount = 0;
    T._detectBlobSupport = !0;
    L.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    L.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new Ga("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    U._detectSupport = !0;
    Aa.USE_CACHE = !1;
    Aa.USE_ENUM_INDEX = !1;
    Aa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    ga.DEFAULT_RESOLVER = V;
    ga.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    dc.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    dc.BYTES = Sa.ofString(dc.CHARS);
    Lb.count = 0;
    Za.i64tmp = new ve(0, 0);
    kb.escapes = function() {
        var a = new S;
        null != Ra.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != Ra.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null != Ra.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != Ra.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != Ra.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this);
    G.__toStr = {}.toString;
    yb.BYTES_PER_ELEMENT = 1;
    P.REDIRECT_URL = "";
    P.DOMAIN_LIST = [];
    P.REDIRECT_DELAY = 3E4;
    P.GET_DOMAINS_DELAY = 3E3;
    P.IS_DEBUG = !1;
    j.loading = !0;
    Ud.NAME = "Scene_0";
    s._volume = 0;
    s._init = !1;
    ja._mobile = !1;
    ja._inited = !1;
    ma.main()
})();