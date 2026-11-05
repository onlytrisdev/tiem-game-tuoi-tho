! function(e) {
    "use strict";
    var s = {},
        i = function() {
            return Zs.__string_rec(this, "")
        };

    function t(t, e) {
        function s() {}
        s.prototype = t;
        var i = new s;
        for (var n in e) i[n] = e[n];
        return e.toString !== Object.prototype.toString && (i.toString = e.toString), i
    }
    var g = function(t, e) {
        this.r = new RegExp(t, e.split("u").join(""))
    };
    (s.EReg = g).__name__ = ["EReg"], g.prototype = {
        match: function(t) {
            return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m
        },
        matched: function(t) {
            if (null != this.r.m && 0 <= t && t < this.r.m.length) return this.r.m[t];
            throw new Ks("EReg::matched")
        },
        split: function(t) {
            var e = "#__delim__#";
            return t.replace(this.r, e).split(e)
        },
        __class__: g
    };
    var $ = function() {};
    (s.HxOverrides = $).__name__ = ["HxOverrides"], $.strDate = function(t) {
        switch (t.length) {
            case 8:
                var e = t.split(":"),
                    s = new Date;
                return s.setTime(0), s.setUTCHours(e[0]), s.setUTCMinutes(e[1]), s.setUTCSeconds(e[2]), s;
            case 10:
                var i = t.split("-");
                return new Date(i[0], i[1] - 1, i[2], 0, 0, 0);
            case 19:
                var n = t.split(" "),
                    r = n[0].split("-"),
                    a = n[1].split(":");
                return new Date(r[0], r[1] - 1, r[2], a[0], a[1], a[2]);
            default:
                throw new Ks("Invalid date format : " + t)
        }
    }, $.cca = function(t, e) {
        var s = t.charCodeAt(e);
        if (s == s) return s
    }, $.substr = function(t, e, s) {
        if (null == s) s = t.length;
        else if (s < 0) {
            if (0 != e) return "";
            s = t.length + s
        }
        return t.substr(e, s)
    }, $.remove = function(t, e) {
        var s = t.indexOf(e);
        return -1 != s && (t.splice(s, 1), !0)
    }, $.iter = function(t) {
        return {
            cur: 0,
            arr: t,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var f = function() {};
    (s.Lambda = f).__name__ = ["Lambda"], f.has = function(t, e) {
        for (var s = Ei(t)(); s.hasNext();) {
            if (s.next() == e) return !0
        }
        return !1
    }, f.exists = function(t, e) {
        for (var s = Ei(t)(); s.hasNext();) {
            if (e(s.next())) return !0
        }
        return !1
    };
    var tt = function() {
        this.length = 0
    };
    (s.List = tt).__name__ = ["List"], tt.prototype = {
        add: function(t) {
            var e = new n(t, null);
            null == this.h ? this.h = e : this.q.next = e, this.q = e, this.length++
        },
        push: function(t) {
            var e = new n(t, this.h);
            this.h = e, null == this.q && (this.q = e), this.length++
        },
        remove: function(t) {
            for (var e = null, s = this.h; null != s;) {
                if (s.item == t) return null == e ? this.h = s.next : e.next = s.next, this.q == s && (this.q = e), this.length--, !0;
                s = (e = s).next
            }
            return !1
        },
        iterator: function() {
            return new r(this.h)
        },
        __class__: tt
    };
    var n = function(t, e) {
        this.item = t, this.next = e
    };
    (s["_List.ListNode"] = n).__name__ = ["_List", "ListNode"], n.prototype = {
        __class__: n
    };
    var r = function(t) {
        this.head = t
    };
    (s["_List.ListIterator"] = r).__name__ = ["_List", "ListIterator"], r.prototype = {
        hasNext: function() {
            return null != this.head
        },
        next: function() {
            var t = this.head.item;
            return this.head = this.head.next, t
        },
        __class__: r
    }, Math.__name__ = ["Math"];
    var W = function() {};
    (s.Reflect = W).__name__ = ["Reflect"], W.field = function(t, e) {
        try {
            return t[e]
        } catch (t) {
            return null
        }
    }, W.fields = function(t) {
        var e = [];
        if (null != t) {
            var s = Object.prototype.hasOwnProperty;
            for (var i in t) "__id__" != i && "hx__closures__" != i && s.call(t, i) && e.push(i)
        }
        return e
    }, W.isFunction = function(t) {
        return "function" == typeof t && !(t.__name__ || t.__ename__)
    }, W.compareMethods = function(t, e) {
        return t == e || !(!W.isFunction(t) || !W.isFunction(e)) && (t.scope == e.scope && t.method == e.method && null != t.method)
    }, W.deleteField = function(t, e) {
        return !!Object.prototype.hasOwnProperty.call(t, e) && (delete t[e], !0)
    };
    var j = function() {};
    (s.Std = j).__name__ = ["Std"], j.string = function(t) {
        return Zs.__string_rec(t, "")
    }, j.parseInt = function(t) {
        var e = parseInt(t, 10);
        return 0 != e || 120 != $.cca(t, 1) && 88 != $.cca(t, 1) || (e = parseInt(t)), isNaN(e) ? null : e
    }, j.random = function(t) {
        return t <= 0 ? 0 : Math.floor(Math.random() * t)
    };
    var P = function() {
        this.b = ""
    };
    (s.StringBuf = P).__name__ = ["StringBuf"], P.prototype = {
        __class__: P
    };
    var E = function() {};
    (s.StringTools = E).__name__ = ["StringTools"], E.htmlEscape = function(t, e) {
        return t = t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"), e ? t.split('"').join("&quot;").split("'").join("&#039;") : t
    }, E.isSpace = function(t, e) {
        var s = $.cca(t, e);
        return 8 < s && s < 14 || 32 == s
    }, E.ltrim = function(t) {
        for (var e = t.length, s = 0; s < e && E.isSpace(t, s);) ++s;
        return 0 < s ? $.substr(t, s, e - s) : t
    }, E.rtrim = function(t) {
        for (var e = t.length, s = 0; s < e && E.isSpace(t, e - s - 1);) ++s;
        return 0 < s ? $.substr(t, 0, e - s) : t
    }, E.trim = function(t) {
        return E.ltrim(E.rtrim(t))
    }, E.replace = function(t, e, s) {
        return t.split(e).join(s)
    }, E.hex = function(t, e) {
        for (var s = ""; s = "0123456789ABCDEF".charAt(15 & t) + s, 0 < (t >>>= 4););
        if (null != e)
            for (; s.length < e;) s = "0" + s;
        return s
    };
    var a = s.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: ["TNull", "TInt", "TFloat", "TBool", "TObject", "TFunction", "TClass", "TEnum", "TUnknown"]
    };
    a.TNull = ["TNull", 0], a.TNull.toString = i, (a.TNull.__enum__ = a).TInt = ["TInt", 1], a.TInt.toString = i, (a.TInt.__enum__ = a).TFloat = ["TFloat", 2], a.TFloat.toString = i, (a.TFloat.__enum__ = a).TBool = ["TBool", 3], a.TBool.toString = i, (a.TBool.__enum__ = a).TObject = ["TObject", 4], a.TObject.toString = i, (a.TObject.__enum__ = a).TFunction = ["TFunction", 5], a.TFunction.toString = i, (a.TFunction.__enum__ = a).TClass = function(t) {
        var e = ["TClass", 6, t];
        return e.__enum__ = a, e.toString = i, e
    }, a.TEnum = function(t) {
        var e = ["TEnum", 7, t];
        return e.__enum__ = a, e.toString = i, e
    }, a.TUnknown = ["TUnknown", 8], a.TUnknown.toString = i, a.TUnknown.__enum__ = a;
    var et = function() {};
    (s.Type = et).__name__ = ["Type"], et.getEnum = function(t) {
        return null == t ? null : t.__enum__
    }, et.getClassName = function(t) {
        var e = t.__name__;
        return null == e ? null : e.join(".")
    }, et.getEnumName = function(t) {
        return t.__ename__.join(".")
    }, et.resolveClass = function(t) {
        var e = s[t];
        return null != e && e.__name__ ? e : null
    }, et.resolveEnum = function(t) {
        var e = s[t];
        return null != e && e.__ename__ ? e : null
    }, et.createEmptyInstance = function(t) {
        function e() {}
        return e.prototype = t.prototype, new e
    }, et.createEnum = function(t, e, s) {
        var i = W.field(t, e);
        if (null == i) throw new Ks("No such constructor " + e);
        if (W.isFunction(i)) {
            if (null == s) throw new Ks("Constructor " + e + " need parameters");
            return i.apply(t, s)
        }
        if (null != s && 0 != s.length) throw new Ks("Constructor " + e + " does not need parameters");
        return i
    }, et.createEnumIndex = function(t, e, s) {
        var i = t.__constructs__[e];
        if (null == i) throw new Ks(e + " is not a valid enum constructor index");
        return et.createEnum(t, i, s)
    }, et.typeof = function(t) {
        switch (typeof t) {
            case "boolean":
                return a.TBool;
            case "function":
                return t.__name__ || t.__ename__ ? a.TObject : a.TFunction;
            case "number":
                return Math.ceil(t) == t % 2147483648 ? a.TInt : a.TFloat;
            case "object":
                if (null == t) return a.TNull;
                var e = t.__enum__;
                if (null != e) return a.TEnum(e);
                var s = Zs.getClass(t);
                return null != s ? a.TClass(s) : a.TObject;
            case "string":
                return a.TClass(String);
            case "undefined":
                return a.TNull;
            default:
                return a.TUnknown
        }
    }, et.enumEq = function(t, e) {
        if (t == e) return !0;
        try {
            if (t[0] != e[0]) return !1;
            for (var s = 2, i = t.length; s < i;) {
                var n = s++;
                if (!et.enumEq(t[n], e[n])) return !1
            }
            var r = t.__enum__;
            if (r != e.__enum__ || null == r) return !1
        } catch (t) {
            return !1
        }
        return !0
    };
    var N = function(t) {
        this.nodeType = t, this.children = [], this.attributeMap = new js
    };
    (s.Xml = N).__name__ = ["Xml"], N.parse = function(t) {
        return zs.parse(t)
    }, N.createElement = function(t) {
        var e = new N(N.Element);
        if (e.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + e.nodeType);
        return e.nodeName = t, e
    }, N.createPCData = function(t) {
        var e = new N(N.PCData);
        if (e.nodeType == N.Document || e.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, N.createCData = function(t) {
        var e = new N(N.CData);
        if (e.nodeType == N.Document || e.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, N.createComment = function(t) {
        var e = new N(N.Comment);
        if (e.nodeType == N.Document || e.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, N.createDocType = function(t) {
        var e = new N(N.DocType);
        if (e.nodeType == N.Document || e.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, N.createProcessingInstruction = function(t) {
        var e = new N(N.ProcessingInstruction);
        if (e.nodeType == N.Document || e.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + e.nodeType);
        return e.nodeValue = t, e
    }, N.createDocument = function() {
        return new N(N.Document)
    }, N.prototype = {
        get: function(t) {
            if (this.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + this.nodeType);
            var e = this.attributeMap;
            return null != Ci[t] ? e.getReserved(t) : e.h[t]
        },
        set: function(t, e) {
            if (this.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + this.nodeType);
            var s = this.attributeMap;
            null != Ci[t] ? s.setReserved(t, e) : s.h[t] = e
        },
        exists: function(t) {
            if (this.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + this.nodeType);
            var e = this.attributeMap;
            return null != Ci[t] ? e.existsReserved(t) : e.h.hasOwnProperty(t)
        },
        attributes: function() {
            if (this.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.keys()
        },
        elements: function() {
            if (this.nodeType != N.Document && this.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var t = [], e = 0, s = this.children; e < s.length;) {
                var i = s[e];
                ++e, i.nodeType == N.Element && t.push(i)
            }
            return $.iter(t)
        },
        firstElement: function() {
            if (this.nodeType != N.Document && this.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var t = 0, e = this.children; t < e.length;) {
                var s = e[t];
                if (++t, s.nodeType == N.Element) return s
            }
            return null
        },
        addChild: function(t) {
            if (this.nodeType != N.Document && this.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + this.nodeType);
            null != t.parent && t.parent.removeChild(t), this.children.push(t), t.parent = this
        },
        removeChild: function(t) {
            if (this.nodeType != N.Document && this.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + this.nodeType);
            return !!$.remove(this.children, t) && !(t.parent = null)
        },
        __class__: N
    };
    var _ = function() {};
    (s["awe6.interfaces.IPauseable"] = _).__name__ = ["awe6", "interfaces", "IPauseable"], _.prototype = {
        __class__: _
    };
    var o = function() {};
    (s["awe6.interfaces.IDisposable"] = o).__name__ = ["awe6", "interfaces", "IDisposable"], o.prototype = {
        __class__: o
    };
    var h = function() {};
    (s["awe6.interfaces.IUpdateable"] = h).__name__ = ["awe6", "interfaces", "IUpdateable"], h.prototype = {
        __class__: h
    };
    var l = function() {};
    (s["awe6.interfaces.IProcess"] = l).__name__ = ["awe6", "interfaces", "IProcess"], l.__interfaces__ = [_, o, h];
    var u = function(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._isEntity = Zs.__instanceof(this, y), this._init()
    };
    (s["awe6.core.Process"] = u).__name__ = ["awe6", "core", "Process"], u.__interfaces__ = [l], u.prototype = {
        _init: function() {
            this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this.isDisposed = !1, this._age = 0, this._updates = 0
        },
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())
        },
        _disposer: function() {},
        getAge: function(t) {
            return null == t && (t = !0), t ? this._age : this._updates
        },
        update: function(t) {
            null == t && (t = 0), this.isActive && !this.isDisposed && (this._age += t, this._updates++, this._updater(t))
        },
        _updater: function(t) {
            null == t && (t = 0)
        },
        set_isActive: function(t) {
            return this.isDisposed ? this.isActive = !1 : (t != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = t : t ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(te.RESUME, this, !0, !0, !0)) : this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(te.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
        },
        pause: function() {
            this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(te.PAUSE, this, !0, !0, !0))
        },
        _pauser: function() {},
        resume: function() {
            this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(te.RESUME, this, !0, !0, !0))
        },
        _resumer: function() {},
        __class__: u
    };
    var c = function() {};
    (s["awe6.interfaces.IAgendaManager"] = c).__name__ = ["awe6", "interfaces", "IAgendaManager"], c.prototype = {
        __class__: c
    };
    var d = function() {};
    (s["awe6.interfaces.IEntityCollection"] = d).__name__ = ["awe6", "interfaces", "IEntityCollection"], d.__interfaces__ = [c], d.prototype = {
        __class__: d
    };
    var p = function() {};
    (s["awe6.interfaces.IViewable"] = p).__name__ = ["awe6", "interfaces", "IViewable"], p.prototype = {
        __class__: p
    };
    var y = function() {};
    (s["awe6.interfaces.IEntity"] = y).__name__ = ["awe6", "interfaces", "IEntity"], y.__interfaces__ = [d, p, l], y.prototype = {
        __class__: y
    };
    var v = function(t, e, s) {
        null == this.get_view() && (this.view = new Wt(t, s, 0, this)), this.set_id(null == e ? t.tools.createGuid() : e), u.call(this, t)
    };
    (s["awe6.core.Entity"] = v).__name__ = ["awe6", "core", "Entity"], v.__interfaces__ = [y], v.__super__ = u, v.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this.agenda = zt.ALWAYS, this._entityAgendaPairs = new Hs, this._isAgendaDirty = !0, this._cachedEntities = []
        },
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), et.enumEq(this.get_agenda(), zt.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(zt.ALWAYS))), this._isAgendaDirty = !1);
            for (var e = 0, s = this._cachedEntities; e < s.length;) {
                var i = s[e];
                ++e, i.update(t)
            }
        },
        _disposer: function() {
            this.remove(), this._kernel.messenger.removeSubscribers(this), this._kernel.messenger.removeSubscribers(null, null, null, this, null);
            var t = this._getEntities();
            t.reverse();
            for (var e = 0; e < t.length;) {
                var s = t[e];
                ++e, s.dispose()
            }
            for (var i = this._entityAgendaPairs.iterator(); i.hasNext();) {
                var n = i.next();
                this._entityAgendaPairs.remove(n)
            }
            this.get_view().dispose(), u.prototype._disposer.call(this)
        },
        addEntity: function(t, e, s, i) {
            if (null == i && (i = 0), null == s && (s = !1), this.isDisposed || null == t) return null;
            null == e && (e = zt.ALWAYS);
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var r = n.next();
                if (r.entity == t && et.enumEq(r.agenda, e)) return t
            }(this._isAgendaDirty = !0, t.get_parent() != this) && (t.remove(s), Zs.__instanceof(t, v) && t._setParent(this));
            var a = new I(t, e),
                _ = this._entityAgendaPairs;
            return _.head = new Gs(a, _.head), s && (et.enumEq(e, this.get_agenda()) || e == zt.ALWAYS ? this.get_view().addChild(t.get_view(), i) : (t.get_view().set_priority(i), a.isAddedToView = !0)), t
        },
        removeEntity: function(t, e, s) {
            if (null == s && (s = !1), !this.isDisposed && null != t) {
                for (var i = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                    var r = n.next();
                    r.entity != t || null != e && !et.enumEq(r.agenda, e) || (this._entityAgendaPairs.remove(r), i = !0)
                }
                if (i) {
                    if (this._isAgendaDirty = !0, Zs.__instanceof(t, v)) t._setParent(null);
                    s && t.get_view().remove()
                }
            }
        },
        remove: function(t) {
            null == t && (t = !1), null != this.get_parent() && this.get_parent().removeEntity(this, null, t)
        },
        getEntities: function(t) {
            return this._getEntities(t)
        },
        _getEntities: function(t) {
            if (!this._isAgendaDirty && (null == t || et.enumEq(t, this.get_agenda()))) return this._cachedEntities;
            for (var e = [], s = this._entityAgendaPairs.iterator(); s.hasNext();) {
                var i = s.next();
                (null == t || et.enumEq(t, i.agenda)) && e.push(i.entity)
            }
            return e.reverse(), e
        },
        getEntitiesByClass: function(t, e, s, i, n) {
            if (null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(t, e, !0);
            for (var r = [], a = this._getEntities(e), _ = 0; _ < a.length;) {
                var o = a[_];
                ++_, Zs.__instanceof(o, t) && r.push(o), s && (r = r.concat(o.getEntitiesByClass(t, e, !0)))
            }
            return i && null != this.get_parent() && (r = r.concat(this.get_parent().getEntitiesByClass(t, e, !1, !0))), r
        },
        setAgenda: function(t) {
            if (null == t && (t = zt.ALWAYS), et.enumEq(this.get_agenda(), t)) return !1;
            this._isAgendaDirty = !0;
            for (var e = this._entityAgendaPairs.iterator(); e.hasNext();) {
                var s = e.next(),
                    i = et.enumEq(this.get_agenda(), s.agenda) && s.entity.get_view().get_parent() == this.get_view();
                i && s.entity.get_view().remove(), s.isAddedToView = s.isAddedToView || i
            }
            this.agenda = t;
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var r = n.next();
                r.isAddedToView && (et.enumEq(zt.ALWAYS, r.agenda) || et.enumEq(this.get_agenda(), r.agenda)) && this.get_view().addChild(r.entity.get_view())
            }
            return !0
        },
        _setParent: function(t) {
            this.parent = t
        },
        set_id: function(t) {
            return this.id = t, this.id
        },
        get_agenda: function() {
            return this.agenda
        },
        get_parent: function() {
            return this.parent
        },
        get_view: function() {
            return this.view
        },
        __class__: v
    });
    var m = function() {};
    (s["awe6.interfaces.IPositionable"] = m).__name__ = ["awe6", "interfaces", "IPositionable"], m.prototype = {
        __class__: m
    };
    var T = function(t, e, s, i, n, r, a, _, o, h, l) {
        null == a && (a = 0), null == r && (r = 0), null == n && (n = 20), null == i && (i = 100), this._stateUp = new A(t, e), this._stateOver = new A(t, s), this.x = r, this.y = a, this.set_width(i), this.set_height(n), this._keyType = _, this.onClickCallback = o, this.onRollOverCallback = h, this.onRollOutCallback = l, v.call(this, t)
    };
    (s["awe6.core.BasicButton"] = T).__name__ = ["awe6", "core", "BasicButton"], T.__interfaces__ = [m], T.__super__ = v, T.prototype = t(v.prototype, {
        _init: function() {
            v.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, zt.SUB_TYPE(w.UP), !0), this.addEntity(this._stateOver, zt.SUB_TYPE(w.OVER), !0), this.setAgenda(zt.SUB_TYPE(w.UP))
        },
        _updater: function(t) {
            null == t && (t = 0), v.prototype._updater.call(this, t);
            var e = this._kernel.inputs.mouse,
                s = this._isPointInsideRectangle(e.x + this.get_view().x - this.get_view().globalX, e.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
            s && e.set_cursorType(se.BUTTON), s && !this.isOver && this.onRollOver(), !s && this.isOver && (e.set_cursorType(se.AUTO), this.onRollOut()), this.isOver = s, this.isOver && e.getIsButtonDown() && this.setAgenda(zt.SUB_TYPE(w.OVER)), this.isOver && e.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
        },
        _isPointInsideRectangle: function(t, e, s, i, n, r) {
            return !(t < s) && (!(e < i) && (!(s + n < t) && !(i + r < e)))
        },
        onClick: function() {
            this.setAgenda(zt.SUB_TYPE(w.UP)), null != this.onClickCallback && this.onClickCallback()
        },
        onRollOver: function() {
            this.setAgenda(zt.SUB_TYPE(w.OVER)), null != this.onRollOverCallback && this.onRollOverCallback()
        },
        onRollOut: function() {
            this.setAgenda(zt.SUB_TYPE(w.UP)), null != this.onRollOutCallback && this.onRollOutCallback()
        },
        setPosition: function(t, e) {
            this.set_x(t), this.set_y(e)
        },
        set_x: function(t) {
            return this.x = t, null != this.get_view() && this.get_view().set_x(this.x), this.x
        },
        set_y: function(t) {
            return this.y = t, null != this.get_view() && this.get_view().set_y(this.y), this.y
        },
        set_width: function(t) {
            return this.width = t, this.width
        },
        set_height: function(t) {
            return this.height = t, this.height
        },
        __class__: T
    });
    var A = function(t, e) {
        v.call(this, t), this.view = e
    };
    (s["awe6.core._BasicButton._HelperState"] = A).__name__ = ["awe6", "core", "_BasicButton", "_HelperState"], A.__super__ = v, A.prototype = t(v.prototype, {
        __class__: A
    });
    var w = s["awe6.core._BasicButton._HelperEState"] = {
        __ename__: ["awe6", "core", "_BasicButton", "_HelperEState"],
        __constructs__: ["UP", "OVER"]
    };
    w.UP = ["UP", 0], w.UP.toString = i, (w.UP.__enum__ = w).OVER = ["OVER", 1], w.OVER.toString = i, w.OVER.__enum__ = w;
    var S = function() {};
    (s["awe6.interfaces.IEncrypter"] = S).__name__ = ["awe6", "interfaces", "IEncrypter"], S.prototype = {
        __class__: S
    };
    var b = function(t) {
        this._defaultSecret = t
    };
    (s["awe6.core.Encrypter"] = b).__name__ = ["awe6", "core", "Encrypter"], b.__interfaces__ = [S], b.prototype = {
        decrypt: function(t, e) {
            null == e && (e = "");
            var s = "" != e ? e : this._defaultSecret;
            return this._xor(t, s)
        },
        _xor: function(t, e) {
            for (var s = new Os(new Ui(t.length)), i = 0, n = 0, r = s.length; n < r;) {
                var a = n++,
                    _ = t.b[a] ^ $.cca(e, i);
                s.b[a] = 255 & _, ++i >= e.length && (i = 0)
            }
            return s
        },
        __class__: b
    };
    var I = function(t, e) {
        this.entity = t, this.agenda = e, this.isAddedToView = !1
    };
    (s["awe6.core._Entity._HelperEntityAgendaPair"] = I).__name__ = ["awe6", "core", "_Entity", "_HelperEntityAgendaPair"], I.prototype = {
        __class__: I
    };
    var C = function() {};
    (s["awe6.interfaces.IInputJoypad"] = C).__name__ = ["awe6", "interfaces", "IInputJoypad"], C.prototype = {
        __class__: C
    };
    var U = function(t, e, s, i, n, r, a, _, o, h, l, u, c, d) {
        this._kernel = t, this._keyUp = null != e ? e : $t.UP, this._keyRight = null != s ? s : $t.RIGHT, this._keyDown = null != i ? i : $t.DOWN, this._keyLeft = null != n ? n : $t.LEFT, this._keyPrimary = null != r ? r : $t.SPACE, this._keySecondary = null != a ? a : $t.Z, this._keyUpAlt = null != _ ? _ : $t.W, this._keyRightAlt = null != o ? o : $t.D, this._keyDownAlt = null != h ? h : $t.S, this._keyLeftAlt = null != l ? l : $t.A, this._keyPrimaryAlt = null != u ? u : $t.Q, this._keySecondaryAlt = null != c ? c : $t.E, this._joypadTouchType = null != d ? d : this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._kernel.factory.joypadTouchType != qt.DISABLED, this._joypadStateCache = {
            age: 0,
            isFire: !1,
            isUp: !1,
            isRight: !1,
            isDown: !1,
            isLeft: !1,
            isPrevFire: !1,
            isPrevUp: !1,
            isPrevRight: !1,
            isPrevDown: !1,
            isPrevLeft: !1
        }
    };
    (s["awe6.core.InputJoypad"] = U).__name__ = ["awe6", "core", "InputJoypad"], U.__interfaces__ = [C], U.prototype = {
        _checkKeyboard: function(t, e) {
            switch (t[1]) {
                case 0:
                    return !!this._checkKeyboard(Zt.PRIMARY, e) || this._checkKeyboard(Zt.SECONDARY, e);
                case 1:
                    return !!e(this._keyUp) || e(this._keyUpAlt);
                case 2:
                    return !!e(this._keyRight) || e(this._keyRightAlt);
                case 3:
                    return !!e(this._keyDown) || e(this._keyDownAlt);
                case 4:
                    return !!e(this._keyLeft) || e(this._keyLeftAlt);
                case 5:
                    return !!e(this._keyPrimary) || e(this._keyPrimaryAlt);
                case 6:
                    return !!e(this._keySecondary) || e(this._keySecondaryAlt)
            }
        },
        getIsButtonDown: function(t) {
            return !!this._checkKeyboard(t, mi(yi = this._kernel.inputs.keyboard, yi.getIsKeyDown)) || !!this._isTouchEnabled && this._checkTouchIsDown(t)
        },
        getIsButtonPress: function(t) {
            return !!this._checkKeyboard(t, mi(yi = this._kernel.inputs.keyboard, yi.getIsKeyPress)) || !!this._isTouchEnabled && this._checkTouchIsPress(t)
        },
        _getTouchButtonPosition: function(t) {
            switch (t[1]) {
                case 1:
                    return {
                        x: .5 * this._kernel.factory.width, y: .25 * this._kernel.factory.height
                    };
                case 2:
                    return {
                        x: .75 * this._kernel.factory.width, y: .5 * this._kernel.factory.height
                    };
                case 3:
                    return {
                        x: .5 * this._kernel.factory.width, y: .75 * this._kernel.factory.height
                    };
                case 4:
                    return {
                        x: .25 * this._kernel.factory.width, y: .5 * this._kernel.factory.height
                    };
                case 0:
                case 5:
                case 6:
                    return {
                        x: .5 * this._kernel.factory.width, y: .5 * this._kernel.factory.height
                    }
            }
        },
        _getClosestTouchButton: function(t, e) {
            null == t && (t = this._mouse.x), null == e && (e = this._mouse.y);
            for (var s = 99999999, i = Zt.FIRE, n = 0, r = [Zt.FIRE, Zt.UP, Zt.RIGHT, Zt.DOWN, Zt.LEFT, Zt.PRIMARY]; n < r.length;) {
                var a = r[n];
                ++n;
                var _ = this._getTouchButtonPosition(a),
                    o = this._kernel.tools.distance(t, e, _.x, _.y, !0);
                o < s && (s = o, i = a)
            }
            return i
        },
        _getTouchState: function() {
            var t;
            if (null != this._mouse ? t = !0 : Zs.__instanceof(this._kernel.inputs.mouse, Nt) ? (this._mouse = Zs.__cast(this._kernel.inputs.mouse, Nt), t = !0) : t = !1, !t || this._mouse.getAge() == this._joypadStateCache.age) return this._joypadStateCache;
            var e = {
                    age: this._mouse.getAge(),
                    isFire: !1,
                    isUp: !1,
                    isRight: !1,
                    isDown: !1,
                    isLeft: !1,
                    isPrevFire: this._joypadStateCache.isFire,
                    isPrevUp: this._joypadStateCache.isUp,
                    isPrevRight: this._joypadStateCache.isRight,
                    isPrevDown: this._joypadStateCache.isDown,
                    isPrevLeft: this._joypadStateCache.isLeft
                },
                s = this._joypadTouchType;
            switch (s[1]) {
                case 1:
                    var i = this._getClosestTouchButton();
                    e.isFire = i == Zt.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (e.isUp = i == Zt.UP, e.isRight = i == Zt.RIGHT, e.isDown = i == Zt.DOWN, e.isLeft = i == Zt.LEFT);
                    break;
                case 2:
                    var n = s[2];
                    null == n && (n = 20), e.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, e.isUp = this._mouse.getButtonDragHeight() < -n, e.isRight = this._mouse.getButtonDragWidth() > n, e.isDown = this._mouse.getButtonDragHeight() > n, e.isLeft = this._mouse.getButtonDragWidth() < -n;
                    break;
                case 3:
                    var r = s[2];
                    if (e.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._kernel.inputs.mouse.getIsButtonDown()) {
                        null == r && (r = 100);
                        var a = this._mouse.getDeltaX(),
                            _ = this._mouse.getDeltaY();
                        e.isUp = _ < -r, e.isRight = r < a, e.isDown = r < _, e.isLeft = a < -r
                    }
            }
            return this._joypadStateCache = e, this._joypadStateCache
        },
        _checkTouchIsDown: function(t) {
            var e = this._getTouchState();
            switch (t[1]) {
                case 1:
                    return e.isUp;
                case 2:
                    return e.isRight;
                case 3:
                    return e.isDown;
                case 4:
                    return e.isLeft;
                case 0:
                case 5:
                case 6:
                    return e.isFire
            }
        },
        _checkTouchIsPress: function(t) {
            var e = this._getTouchState();
            switch (t[1]) {
                case 1:
                    return !!e.isUp && !e.isPrevUp;
                case 2:
                    return !!e.isRight && !e.isPrevRight;
                case 3:
                    return !!e.isDown && !e.isPrevDown;
                case 4:
                    return !!e.isLeft && !e.isPrevLeft;
                case 0:
                case 5:
                case 6:
                    return !!e.isFire && !e.isPrevFire
            }
        },
        __class__: U
    };
    var k = function() {};
    (s["awe6.interfaces.IResettable"] = k).__name__ = ["awe6", "interfaces", "IResettable"], k.prototype = {
        __class__: k
    };
    var M = function() {};
    (s["awe6.interfaces.IInputManager"] = M).__name__ = ["awe6", "interfaces", "IInputManager"], M.__interfaces__ = [k], M.prototype = {
        __class__: M
    };
    var x = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.InputManager"] = x).__name__ = ["awe6", "core", "InputManager"], x.__interfaces__ = [M], x.__super__ = u, x.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this.joypad = this.createJoypad(), this.keyboard = this._inputKeyboard = new Pt(this._kernel), this.mouse = this._inputMouse = new Nt(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t);
            var e = this._inputKeyboard;
            e.isActive && !e.isDisposed && (e._age += t, e._updates++, e._updater(t));
            var s = this._inputMouse;
            s.isActive && !s.isDisposed && (s._age += t, s._updates++, s._updater(t))
        },
        _disposer: function() {
            var t = this._inputKeyboard;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer());
            var e = this._inputMouse;
            e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), u.prototype._disposer.call(this)
        },
        createJoypad: function(t, e, s, i, n, r, a, _, o, h, l, u, c) {
            return new U(this._kernel, t, e, s, i, n, r, a, _, o, h, l, u, c)
        },
        reset: function() {
            var t = this._inputKeyboard;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer());
            var e = this._inputMouse;
            return e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._init(), !0
        },
        __class__: x
    });
    var R = function() {};
    (s["awe6.interfaces.IMessageManager"] = R).__name__ = ["awe6", "interfaces", "IMessageManager"], R.__interfaces__ = [k], R.prototype = {
        __class__: R
    };
    var D = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.MessageManager"] = D).__name__ = ["awe6", "core", "MessageManager"], D.__interfaces__ = [R], D.__super__ = u, D.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new Hs, this._messageQueue = new tt
        },
        removeSubscribers: function(t, e, s, i, n) {
            for (var r = this._getSubscriptions(t, e, s, i, n, !0).iterator(); r.hasNext();) {
                var a = r.next();
                this._subscriptions.remove(a), this._isVerbose && xs.trace("Removing " + j.string(a.sender) + ":" + j.string(a.message), {
                    fileName: "MessageManager.hx",
                    lineNumber: 80,
                    className: "awe6.core.MessageManager",
                    methodName: "removeSubscribers"
                })
            }
        },
        sendMessage: function(t, e, s, i, n) {
            null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._sendMessage(t, e, e, s, i, n)
        },
        reset: function() {
            return this.removeSubscribers(), this._messageQueue = new tt, !0
        },
        _updater: function(t) {
            if (null == t && (t = 0), u.prototype._updater.call(this, t), this._isOkToSendMessage())
                for (var e = this._messageQueue.h; null != e;) {
                    var s = e.item;
                    e = e.next;
                    var i = s;
                    this._sendMessage(i.message, i.sender, i.target, i.isBubbleDown, i.isBubbleUp, i.isBubbleEverywhere), this._messageQueue.remove(i)
                }
        },
        _isOkToSendMessage: function() {
            return null != this._kernel.scenes.get_scene()
        },
        _sendMessage: function(t, e, s, i, n, r) {
            if (null == r && (r = !1), null == n && (n = !1), null == i && (i = !1), this._isVerbose && xs.trace("Sending message: " + j.string(t) + " from " + e.id + "(" + j.string(null == e ? null : Zs.getClass(e)) + ") via " + s.id + " (" + j.string(null == s ? null : Zs.getClass(s)) + ")", {
                    fileName: "MessageManager.hx",
                    lineNumber: 119,
                    className: "awe6.core.MessageManager",
                    methodName: "_sendMessage"
                }), this._isOkToSendMessage()) {
                if (r) {
                    var a = this._kernel.scenes.get_scene().getEntities()[0];
                    if (null != a && null != a.get_parent()) return void this._sendMessage(t, e, this._kernel.scenes.get_scene().getEntities()[0].get_parent(), !0)
                }
                for (var _ = this._getSubscriptions(s, t, null, e).iterator(); _.hasNext();) {
                    var o = _.next();
                    if (!this._send(o, t, e)) return
                }
                if (i)
                    for (var h = s.getEntities(), l = 0; l < h.length;) {
                        var u = h[l];
                        ++l, this._sendMessage(t, e, u, !0)
                    }
                n && null != s.get_parent() && Zs.__instanceof(s.get_parent(), y) && this._sendMessage(t, e, s.get_parent(), !1, !0)
            } else this._messageQueue.push(new O(t, e, s, i, n, r))
        },
        _send: function(t, e, s) {
            var i = t.handler.apply(t.subscriber, [e, s]);
            return t.isRemovedAfterFirstSend && this._subscriptions.remove(t), i
        },
        _getSubscriptions: function(t, e, s, i, n, r) {
            null == r && (r = !1);
            for (var a = new Hs, _ = this._subscriptions.iterator(); _.hasNext();) {
                var o = _.next();
                if (null == t || t == o.subscriber || t == o.sender) {
                    if (null != e && !Zs.__instanceof(e, o.messageClass)) {
                        var h = et.typeof(e);
                        if (7 == h[1]) {
                            h[2];
                            if (et.getEnum(e) != et.getEnum(o.message) || e[0] != o.message[0] || e.slice(2).toString() != o.message.slice(2).toString()) continue
                        } else if (e != o.message) continue
                    }
                    if (null == s || W.compareMethods(o.handler, s)) {
                        if (null != i) {
                            if (r) {
                                if (null != o.senderClassType) continue;
                                if (null == o.sender) continue
                            }
                            if (null != o.senderClassType && !Zs.__instanceof(i, o.senderClassType)) continue;
                            if (null != o.sender && o.sender != i) continue
                        }
                        a.head = new Gs(o, a.head)
                    }
                }
            }
            return a
        },
        __class__: D
    });
    var B = function(t, e, s, i, n, r) {
        null == r && (r = !1), this.subscriber = t, this.message = e, this.handler = s, this.sender = i, this.senderClassType = n, this.isRemovedAfterFirstSend = r, this.messageClass = null == e ? null : Zs.getClass(e)
    };
    (s["awe6.core._MessageManager._HelperSubscription"] = B).__name__ = ["awe6", "core", "_MessageManager", "_HelperSubscription"], B.prototype = {
        __class__: B
    };
    var O = function(t, e, s, i, n, r) {
        null == r && (r = !1), null == n && (n = !1), null == i && (i = !1), this.message = t, this.sender = e, this.target = s, this.isBubbleDown = i, this.isBubbleUp = n, this.isBubbleEverywhere = r
    };
    (s["awe6.core._MessageManager._HelperMessage"] = O).__name__ = ["awe6", "core", "_MessageManager", "_HelperMessage"], O.prototype = {
        __class__: O
    };
    var L = function() {};
    (s["awe6.interfaces.IScene"] = L).__name__ = ["awe6", "interfaces", "IScene"], L.__interfaces__ = [p, d, l], L.prototype = {
        __class__: L
    };
    var F = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this.type = e, this.isPauseable = s, this.isMuteable = i, this.isSessionSavedOnNext = n, u.call(this, t)
    };
    (s["awe6.core.Scene"] = F).__name__ = ["awe6", "core", "Scene"], F.__interfaces__ = [L], F.__super__ = u, F.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this.isDisposable = !0, this._entity = new v(this._kernel), this.view = this._entity.get_view()
        },
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t), this._entity.update(t)
        },
        _disposer: function() {
            this._entity.dispose(), this.get_view().dispose(), u.prototype._disposer.call(this)
        },
        addEntity: function(t, e, s, i) {
            return null == i && (i = 0), null == s && (s = !1), this._entity.addEntity(t, e, s, i)
        },
        removeEntity: function(t, e, s) {
            null == s && (s = !1), this._entity.removeEntity(t, e, s)
        },
        getEntities: function(t) {
            return this._entity.getEntities(t)
        },
        getEntitiesByClass: function(t, e, s, i, n) {
            return null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._entity.getEntitiesByClass(t, e, s, i, !1)
        },
        get_view: function() {
            return this.view
        },
        setAgenda: function(t) {
            return this._entity.setAgenda(t)
        },
        __class__: F
    });
    var G = function() {};
    (s["awe6.interfaces.ISceneManager"] = G).__name__ = ["awe6", "interfaces", "ISceneManager"], G.prototype = {
        __class__: G
    };
    var H = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.SceneManager"] = H).__name__ = ["awe6", "core", "SceneManager"], H.__interfaces__ = [G], H.__super__ = u, H.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this.view = new Wt(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t), null != this.get_scene() && this.get_scene().update(t), null != this._sceneTransition && this._sceneTransition.update(t)
        },
        _disposer: function() {
            null != this.get_scene() && this.get_scene().dispose(), null != this._sceneTransition && this._sceneTransition.dispose(), this.view.dispose(), u.prototype._disposer.call(this)
        },
        setScene: function(t) {
            var e = null;
            if (null != this.get_scene()) {
                e = this.get_scene().type;
                var s = this._kernel.factory.createSceneTransition(t, e);
                null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = s, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null
            }
            this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(t), this._kernel.overlay.showButton(ie.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(ie.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(ie.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(ie.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(ie.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
        },
        back: function() {
            var t = this._kernel.factory.getBackSceneType(this.get_scene().type);
            null != t && this.setScene(t)
        },
        next: function() {
            this.get_scene().isSessionSavedOnNext && null != this._kernel.get_session() && this._kernel.get_session().save();
            var t = this._kernel.factory.getNextSceneType(this.get_scene().type);
            null != t && this.setScene(t)
        },
        get_scene: function() {
            return this.scene
        },
        __class__: H
    });
    var V = function() {};
    (s["awe6.interfaces.ITextStyle"] = V).__name__ = ["awe6", "interfaces", "ITextStyle"], V.prototype = {
        __class__: V
    };
    var Q = function(t, e, s, i, n, r, a, _, o, h) {
        null == o && (o = 0), null == n && (n = !1), null == i && (i = !1), this.font = null != t ? t : "_sans", this.size = null != e ? e : 12, this.color = null != s ? s : 0, this.isBold = i, this.isItalic = n, this.align = null != r ? r : re.LEFT, this.spacingHorizontal = null != a ? a : 0, this.spacingVertical = null != _ ? _ : 0, this.thickness = o, this.filters = h
    };
    (s["awe6.core.TextStyle"] = Q).__name__ = ["awe6", "core", "TextStyle"], Q.__interfaces__ = [V], Q.prototype = {
        toString: function() {
            return j.string(this.font + "," + this.size + "," + this.color + "," + j.string(this.isBold) + "," + j.string(this.isItalic) + "," + j.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + j.string(this.filters))
        },
        clone: function() {
            return new Q(this.font, this.size, this.color, this.isBold, this.isItalic, this.align, this.spacingHorizontal, this.spacingVertical, this.thickness, this.filters)
        },
        __class__: Q
    };
    var J = function() {};
    (s["awe6.interfaces.ITools"] = J).__name__ = ["awe6", "interfaces", "ITools"], J.__interfaces__ = [S], J.prototype = {
        __class__: J
    };
    var Y = function(t) {
        this._kernel = t, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
    };
    (s["awe6.core.Tools"] = Y).__name__ = ["awe6", "core", "Tools"], Y.__interfaces__ = [J], Y.prototype = {
        createGuid: function(t, e) {
            return null == e && (e = ""), null == t && (t = !1), t ? e + $.substr(this._randomCharacter() + this._randomCharacter() + this._randomCharacter(), 0, 10) : e + (this._randomCharacter() + this._randomCharacter() + "-") + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter()
        },
        _randomCharacter: function() {
            return $.substr(E.hex(0 | 65536 * (1 + Math.random()), 1), 1, null)
        },
        sortByPriority: function(t, e) {
            var s = t.get_priority(),
                i = e.get_priority();
            return s < i ? -1 : i < s ? 1 : 0
        },
        _isCamelCase: function(t) {
            return t.toUpperCase() != t && (!(-1 < t.indexOf(" ")) && !(-1 < t.indexOf("_")))
        },
        _isConstCase: function(t) {
            return t.toUpperCase() == t && !(-1 < t.indexOf(" "))
        },
        fromCamelCase: function(t) {
            if (null == t || "" == t) return "";
            for (var e = "", s = t.split(""), i = "", n = 0; n < s.length;) {
                var r = s[n];
                ++n, r.toLowerCase() != r && (e += i), e += r, i = " "
            }
            return e
        },
        toConstCase: function(t) {
            if (null == t || "" == t) return "";
            if (this._isConstCase(t)) return t;
            this._isCamelCase(t) && (t = this.fromCamelCase(t));
            return t = E.replace(t, "     ", " "), t = E.replace(t, "    ", " "), t = E.replace(t, "   ", " "), t = E.replace(t, "  ", " "), (t = E.replace(t, " ", "_")).toUpperCase()
        },
        limit: function(t, e, s) {
            return s < t ? s : t < e ? e : t
        },
        distance: function(t, e, s, i, n) {
            null == n && (n = !1);
            var r = s - t,
                a = i - e,
                _ = r * r + a * a;
            return n ? _ : Math.sqrt(_)
        },
        shuffle: function(t) {
            for (var e = t.slice(), s = e.length; 1 < s;) {
                var i = j.random(s),
                    n = e[--s];
                e[s] = e[i], e[i] = n
            }
            return e
        },
        serialize: function(t) {
            return Ds.run(t)
        },
        unserialize: function(t) {
            return Bs.run(t)
        },
        decrypt: function(t, e) {
            return null == e && (e = ""), this._encrypter.decrypt(t, e)
        },
        __class__: Y
    };
    var z = function() {};
    (s["awe6.interfaces.IAssetManager"] = z).__name__ = ["awe6", "interfaces", "IAssetManager"], z.prototype = {
        __class__: z
    };
    var X = function() {};
    (s["awe6.interfaces.IAssetManagerProcess"] = X).__name__ = ["awe6", "interfaces", "IAssetManagerProcess"], X.__interfaces__ = [l, z];
    var K = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.drivers.AAssetManager"] = K).__name__ = ["awe6", "core", "drivers", "AAssetManager"], K.__interfaces__ = [X], K.__super__ = u, K.prototype = t(u.prototype, {
        _init: function() {
            this._packageId = this._kernel.getConfig("settings.assets.packages.default"), null == this._packageId && (this._packageId = "assets"), u.prototype._init.call(this)
        },
        getAsset: function(t, e, s) {
            return null == e && (e = this._packageId), this._driverGetAsset(t, e, s)
        },
        _driverGetAsset: function(t, e, s) {
            return null
        },
        __class__: K
    });
    var Z = function() {};
    (s["awe6.interfaces.IAudioManager"] = Z).__name__ = ["awe6", "interfaces", "IAudioManager"], Z.prototype = {
        __class__: Z
    };
    var q = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.drivers.AAudioManager"] = q).__name__ = ["awe6", "core", "drivers", "AAudioManager"], q.__interfaces__ = [Z], q.__super__ = u, q.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
        },
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t);
            for (var e = 0, s = this._sounds; e < s.length;) {
                var i = s[e];
                ++e, i.isDisposed && $.remove(this._sounds, i)
            }
        },
        _disposer: function() {
            for (var t = 0, e = this._sounds; t < e.length;) {
                var s = e[t];
                ++t, s.dispose()
            }
            this.set_isMute(!1), u.prototype._disposer.call(this)
        },
        start: function(t, e, s, i, n, r, a, _) {
            if ((null == a && (a = !1), null == r && (r = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), null == e && (e = Xt.DEFAULT), a) && 0 != this._getSounds(t, e).length) return;
            this._sounds.push(this._driverSoundFactory(t, e, s, i, n, r, _))
        },
        _driverSoundFactory: function(t, e, s, i, n, r, a) {
            return null == r && (r = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new st(this._kernel, t, this._packageId, e, s, i, n, r, a)
        },
        stop: function(t, e) {
            for (var s = this._getSounds(t, e), i = 0; i < s.length;) {
                var n = s[i];
                ++i, n.stop()
            }
        },
        transform: function(t, e, s, i, n) {
            null == n && (n = !1), null == i && (i = 0), null == s && (s = 1);
            for (var r = this._getSounds(t, e), a = 0; a < r.length;) {
                var _ = r[a];
                ++a, _.transform(s, i, n)
            }
        },
        set_isMute: function(t) {
            return this.isMute = t, this._driverSetIsMute(t), this.isMute
        },
        _driverSetIsMute: function(t) {},
        _getSounds: function(t, e) {
            var s = [];
            if (null == t && null == e) s = this._sounds.slice();
            else if (null == e)
                for (var i = 0, n = this._sounds; i < n.length;) {
                    var r = n[i];
                    ++i, r.id == t && s.push(r)
                } else if (null == t)
                    for (var a = 0, _ = this._sounds; a < _.length;) {
                        var o = _[a];
                        ++a, et.enumEq(o.audioChannelType, e) && s.push(o)
                    } else
                        for (var h = 0, l = this._sounds; h < l.length;) {
                            var u = l[h];
                            ++h, u.id == t && et.enumEq(u.audioChannelType, e) && s.push(u)
                        }
            return s
        },
        __class__: q
    });
    var st = function(t, e, s, i, n, r, a, _, o) {
        null == _ && (_ = 0), null == a && (a = 1), null == r && (r = 0), null == n && (n = 1), this._kernel = t, this.isDisposed = !1, this.id = e, this._packageId = s, this.audioChannelType = null != i ? i : Xt.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = r, this._volume = a, this._pan = _, this._onCompleteCallback = o, this._init()
    };
    (s["awe6.core.drivers._AHelperSound"] = st).__name__ = ["awe6", "core", "drivers", "_AHelperSound"], st.__interfaces__ = [o], st.prototype = {
        _init: function() {
            this._driverInit()
        },
        _driverInit: function() {},
        transform: function(t, e, s) {
            null == s && (s = !1), null == e && (e = 0), null == t && (t = 1), this.isDisposed || (s ? (this._volume = t, this._pan = e) : (this._volume = this._kernel.tools.limit(t, 0, 1), this._pan = this._kernel.tools.limit(e, -1, 1)), this._driverTransform(s))
        },
        _driverTransform: function(t) {
            null == t && (t = !1)
        },
        stop: function() {
            this._driverStop(), this.dispose()
        },
        _driverStop: function() {},
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this._driverStop())
        },
        __class__: st
    };
    var it = function() {};
    (s["awe6.interfaces.IFactory"] = it).__name__ = ["awe6", "interfaces", "IFactory"], it.prototype = {
        __class__: it
    };
    var nt = function(t, e, s) {
        null == e && (e = !1), this._context = t, this.isDebug = e, this._config = s, this.config = new js, this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Kt.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = qt.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = ne.GAME, this.keyPause = $t.P, this.keyMute = $t.M, this.keyNext = $t.SPACE, this.keyBack = $t.ESCAPE, this.keySpecial = $t.CONTROL, this._configurer(!0), this._driverInit()
    };
    (s["awe6.core.drivers.AFactory"] = nt).__name__ = ["awe6", "core", "drivers", "AFactory"], nt.__interfaces__ = [o, it], nt.prototype = {
        _driverInit: function() {
            null != this._config && "<?xml" == $.substr(this._config, 0, 5) && this._traverseElements(N.parse(this._config).firstElement().elements(), ""), this._launchKernel()
        },
        _traverseElements: function(t, e) {
            0 != e.length && (e += ".");
            for (var s = t; s.hasNext();) {
                var i = s.next();
                if (i.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + i.nodeType);
                var n, r = e + i.nodeName;
                if (i.elements().hasNext() && this._traverseElements(i.elements(), r), i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                if (null != i.children[0]) {
                    if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                    n = "<![CDATA[" == $.substr(Xs.print(i.children[0]), 0, 9)
                } else n = !1;
                if (n) {
                    if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                    var a = i.children[0];
                    if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                    var _ = Xs.print(i.children[0]).split("<![CDATA[").join("").split("]]>").join("");
                    if (a.nodeType == N.Document || a.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + a.nodeType);
                    a.nodeValue = _
                }
                if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                if (null == i.children[0]) {
                    var o = this.config;
                    null != Ci[r] ? o.setReserved(r, "") : o.h[r] = ""
                } else {
                    if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                    var h = i.children[0].nodeType;
                    if (h != N.Element && h != N.Document) {
                        var l;
                        if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                        if (null == i.children[0]) l = "";
                        else {
                            if (i.nodeType != N.Document && i.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + i.nodeType);
                            var u = i.children[0];
                            if (u.nodeType == N.Document || u.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + u.nodeType);
                            l = u.nodeValue
                        }
                        var c = this.config,
                            d = l;
                        null != Ci[r] ? c.setReserved(r, d) : c.h[r] = d
                    } else {
                        var p = this.config;
                        null != Ci[r] ? p.setReserved(r, "") : p.h[r] = ""
                    }
                }
                for (var g = i.attributes(); g.hasNext();) {
                    var f = g.next(),
                        E = r + "." + f,
                        y = this.config,
                        v = i.get(f);
                    null != Ci[E] ? y.setReserved(E, v) : y.h[E] = v
                }
            }
        },
        _configurer: function(t) {
            null == t && (t = !1)
        },
        _launchKernel: function() {
            null == this._concreteKernel && (this._configurer(!1), this._concreteKernel = new Bt(this, this._context))
        },
        _getAssetUrls: function() {
            for (var t = [], e = 0; e < 1e3;) {
                var s = "settings.assets.url" + e++,
                    i = this.config;
                if (null != Ci[s] ? i.existsReserved(s) : i.h.hasOwnProperty(s)) {
                    var n = this.config;
                    t.push(j.string(null != Ci[s] ? n.getReserved(s) : n.h[s]))
                }
            }
            return t
        },
        onInitComplete: function(t) {
            null == this._kernel && null != t && (this._kernel = t, this._tools = this._kernel.tools, this.id = $.substr(this._tools.toConstCase(E.trim(this.id)), 0, 16), this.version = $.substr(E.trim(this.version), 0, 16), this.author = $.substr(E.trim(this.author), 0, 16))
        },
        createAssetManager: function() {
            return Zs.__instanceof(this._kernel.assets, X) ? Zs.__cast(this._kernel.assets, X) : new Mt(this._kernel)
        },
        createEncrypter: function() {
            return new b(this.secret)
        },
        createLogger: function() {
            return null
        },
        createOverlay: function() {
            return new Ot(this._kernel)
        },
        createPreloader: function() {
            return new Lt(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            return null == t && (t = this.startingSceneType), new F(this._kernel, t)
        },
        createSceneTransition: function(t, e) {
            return new Gt(this._kernel)
        },
        createSession: function(t) {
            return new It(this._kernel, t)
        },
        createTextStyle: function(t) {
            return new Q
        },
        getBackSceneType: function(t) {
            return null
        },
        getNextSceneType: function(t) {
            return null
        },
        dispose: function() {
            if (!this.isDisposed && null != this._concreteKernel) {
                this.isDisposed = !0, this._driverDisposer();
                var t = this._concreteKernel;
                t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), this._concreteKernel = null, this._kernel = null, this.config = null
            }
        },
        _driverDisposer: function() {},
        __class__: nt
    };
    var rt = function() {};
    (s["awe6.interfaces.IInputKeyboard"] = rt).__name__ = ["awe6", "interfaces", "IInputKeyboard"], rt.prototype = {
        __class__: rt
    };
    var at = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.drivers.AInputKeyboard"] = at).__name__ = ["awe6", "core", "drivers", "AInputKeyboard"], at.__interfaces__ = [rt], at.__super__ = u, at.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this._driverInit(), this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t);
            for (var e = new js, s = [], i = 0, n = this._buffer; i < n.length;) {
                var r = n[i];
                ++i;
                var a = null == r.keyCode ? "null" : "" + r.keyCode;
                (null != Ci[a] ? e.existsReserved(a) : e.h.hasOwnProperty(a)) ? s.push(r): r.isDown ? this._keys[r.keyCode].isDown || (this._onDown(r.keyCode), null != Ci[a] ? e.setReserved(a, !0) : e.h[a] = !0) : this._keys[r.keyCode].isDown && (this._onUp(r.keyCode), null != Ci[a] ? e.setReserved(a, !0) : e.h[a] = !0)
            }
            this._buffer = s.slice();
            for (var _ = 0, o = this._keys; _ < o.length;) {
                var h = o[_];
                ++_, h.isDown ? h.updatesDown++ : h.updatesUp++, h.isDown ? h.timeDown += t : h.timeUp += t
            }
        },
        _disposer: function() {
            this._keys = null, u.prototype._disposer.call(this)
        },
        _addEvent: function(t, e) {
            this._buffer.push(new ot(t, e))
        },
        _onDown: function(t) {
            var e = this._keys[t];
            e.isUsed = !0, e.isDown = !0, e.timeUpPrevious = e.timeUp, e.updatesUpPrevious = e.updatesUp, e.updatesUp = 0, e.timeUp = 0
        },
        _onUp: function(t) {
            var e = this._keys[t];
            e.isDown = !1, e.timeDownPrevious = e.timeDown, e.updatesDownPrevious = e.updatesDown, e.updatesDown = 0, e.timeDown = 0
        },
        _reset: function(t) {
            this._buffer = [], this._keys = [];
            for (var e = 0; e < 256;) {
                var s = e++;
                this._keys[s] = new _t(this._kernel)
            }
        },
        getIsKeyDown: function(t) {
            if (null == t) return !1;
            var e = this.getKeyCode(t);
            return this._keys[e].isDown
        },
        getIsKeyPress: function(t) {
            if (null == t) return !1;
            var e = this.getKeyCode(t);
            return 1 == this._keys[e].updatesDown
        },
        getIsKeyRelease: function(t) {
            if (null == t) return !1;
            var e = this.getKeyCode(t);
            return !!this._keys[e].isUsed && 1 == this._keys[e].updatesUp
        },
        getKeyDownDuration: function(t, e, s) {
            if (null == s && (s = !1), null == e && (e = !0), null == t) return 0;
            var i = this.getKeyCode(t);
            return s ? e ? this._keys[i].timeDownPrevious : this._keys[i].updatesDownPrevious : e ? this._keys[i].timeDown : this._keys[i].updatesDown
        },
        getKeyCode: function(t) {
            switch (t[1]) {
                case 0:
                    return 144;
                case 1:
                    return 12;
                case 2:
                    return 47;
                case 3:
                    return 18;
                case 4:
                    return 8;
                case 5:
                    return 20;
                case 6:
                    return 17;
                case 7:
                    return 46;
                case 8:
                    return 40;
                case 9:
                    return 35;
                case 10:
                    return 13;
                case 11:
                    return 27;
                case 12:
                    return 112;
                case 13:
                    return 121;
                case 14:
                    return 122;
                case 15:
                    return 123;
                case 16:
                    return 124;
                case 17:
                    return 125;
                case 18:
                    return 126;
                case 19:
                    return 113;
                case 20:
                    return 114;
                case 21:
                    return 115;
                case 22:
                    return 116;
                case 23:
                    return 117;
                case 24:
                    return 118;
                case 25:
                    return 119;
                case 26:
                    return 120;
                case 27:
                    return 36;
                case 28:
                    return 45;
                case 29:
                    return 37;
                case 30:
                    return 96;
                case 31:
                    return 97;
                case 32:
                    return 98;
                case 33:
                    return 99;
                case 34:
                    return 100;
                case 35:
                    return 101;
                case 36:
                    return 102;
                case 37:
                    return 103;
                case 38:
                    return 104;
                case 39:
                    return 105;
                case 40:
                    return 107;
                case 41:
                    return 110;
                case 42:
                    return 111;
                case 43:
                    return 108;
                case 44:
                    return 106;
                case 45:
                    return 109;
                case 46:
                    return 34;
                case 47:
                    return 33;
                case 48:
                    return 39;
                case 49:
                    return 16;
                case 50:
                    return 32;
                case 51:
                    return 9;
                case 52:
                    return 38;
                case 53:
                    return 65;
                case 54:
                    return 66;
                case 55:
                    return 67;
                case 56:
                    return 68;
                case 57:
                    return 69;
                case 58:
                    return 70;
                case 59:
                    return 71;
                case 60:
                    return 72;
                case 61:
                    return 73;
                case 62:
                    return 74;
                case 63:
                    return 75;
                case 64:
                    return 76;
                case 65:
                    return 77;
                case 66:
                    return 78;
                case 67:
                    return 79;
                case 68:
                    return 80;
                case 69:
                    return 81;
                case 70:
                    return 82;
                case 71:
                    return 83;
                case 72:
                    return 84;
                case 73:
                    return 85;
                case 74:
                    return 86;
                case 75:
                    return 87;
                case 76:
                    return 88;
                case 77:
                    return 89;
                case 78:
                    return 90;
                case 79:
                    return 48;
                case 80:
                    return 49;
                case 81:
                    return 50;
                case 82:
                    return 51;
                case 83:
                    return 52;
                case 84:
                    return 53;
                case 85:
                    return 54;
                case 86:
                    return 55;
                case 87:
                    return 56;
                case 88:
                    return 57;
                case 89:
                    return 186;
                case 90:
                    return 187;
                case 91:
                    return 189;
                case 92:
                    return 191;
                case 93:
                    return 222;
                case 94:
                    return 219;
                case 95:
                    return 221;
                case 96:
                    return 220;
                case 97:
                    return 192;
                case 98:
                    return 223;
                case 99:
                    return 0 | t[2]
            }
        },
        getKey: function(t) {
            var e = $t.__constructs__.slice();
            e.pop();
            for (var s = 0; s < e.length;) {
                var i = e[s];
                ++s;
                var n = et.createEnum($t, i);
                if (this.getKeyCode(n) == t) return n
            }
            return $t.SUB_TYPE(t)
        },
        __class__: at
    });
    var _t = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    (s["awe6.core.drivers._AInputKeyboard._HelperKey"] = _t).__name__ = ["awe6", "core", "drivers", "_AInputKeyboard", "_HelperKey"], _t.prototype = {
        __class__: _t
    };
    var ot = function(t, e) {
        this.keyCode = t, this.isDown = e
    };
    (s["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = ot).__name__ = ["awe6", "core", "drivers", "_AInputKeyboard", "_HelperKeyEvent"], ot.prototype = {
        __class__: ot
    };
    var ht = function() {};
    (s["awe6.interfaces.IInputMouse"] = ht).__name__ = ["awe6", "interfaces", "IInputMouse"], ht.prototype = {
        __class__: ht
    };
    var lt = function(t) {
        u.call(this, t)
    };
    (s["awe6.core.drivers.AInputMouse"] = lt).__name__ = ["awe6", "core", "drivers", "AInputMouse"], lt.__interfaces__ = [ht], lt.__super__ = u, lt.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(se.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), this._deltaTimePrev = t, u.prototype._updater.call(this, t), this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._handleButton(ee.LEFT, 0 < this._buffer.length ? this._buffer.shift() : this._buttonLeft.isDown, t), this._handleButton(ee.MIDDLE, this._isMiddleDown(), t), this._handleButton(ee.RIGHT, this._isRightDown(), t), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += t), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
        },
        _isMiddleDown: function() {
            return !1
        },
        _isRightDown: function() {
            return !1
        },
        _isWithinBounds: function() {
            return !0
        },
        _getPosition: function() {
            this.x = 0, this.y = 0
        },
        _handleButton: function(t, e, s) {
            null == s && (s = 0);
            var i = this._getButton(t);
            e ? (i.isDown || (i.timeUpPrevious = i.timeUp, i.updatesUpPrevious = i.updatesUp, i.timeUp = i.updatesUp = 0, i.clickX = this.x, i.clickY = this.y), i.timeDown += s, i.updatesDown++, i.isDown = !0) : (i.isDown && (i.timeDownPrevious = i.timeDown, i.updatesDownPrevious = i.updatesDown, i.timeDown = i.updatesDown = 0), i.timeUp += s, i.updatesUp++, i.isDown = !1)
        },
        _disposer: function() {
            u.prototype._disposer.call(this)
        },
        _reset: function(t) {
            this._buffer = [], this._buttonLeft = new ut(this._kernel), this._buttonMiddle = new ut(this._kernel), this._buttonRight = new ut(this._kernel)
        },
        _getButton: function(t) {
            switch (null == t && (t = ee.LEFT), t[1]) {
                case 0:
                    return this._buttonLeft;
                case 1:
                    return this._buttonMiddle;
                case 2:
                    return this._buttonRight
            }
        },
        getDeltaX: function(t) {
            null == t && (t = !0);
            var e = this._deltaX;
            return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
        },
        getDeltaY: function(t) {
            null == t && (t = !0);
            var e = this._deltaY;
            return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
        },
        getIsButtonDown: function(t) {
            return this._getButton(t).isDown
        },
        getIsButtonPress: function(t) {
            return 1 == this._getButton(t).updatesDown
        },
        getIsButtonRelease: function(t) {
            return 1 == this._getButton(t).updatesUp
        },
        getButtonDownDuration: function(t, e, s) {
            null == s && (s = !1), null == e && (e = !0);
            var i = this._getButton(t);
            return s ? e ? i.timeDownPrevious : i.updatesDownPrevious : e ? i.timeDown : i.updatesDown
        },
        getButtonDragWidth: function(t) {
            var e = this._getButton(t);
            return e.isDown ? this.x - e.clickX : 0
        },
        getButtonDragHeight: function(t) {
            var e = this._getButton(t);
            return e.isDown ? this.y - e.clickY : 0
        },
        set_isVisible: function(t) {
            return this.isVisible = t, this.isVisible
        },
        set_cursorType: function(t) {
            return this.cursorType = t, this.cursorType
        },
        __class__: lt
    });
    var ut = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    (s["awe6.core.drivers._AInputMouse._HelperButton"] = ut).__name__ = ["awe6", "core", "drivers", "_AInputMouse", "_HelperButton"], ut.prototype = {
        __class__: ut
    };
    var ct = function() {};
    (s["awe6.interfaces.ILogger"] = ct).__name__ = ["awe6", "interfaces", "ILogger"], ct.prototype = {
        __class__: ct
    };
    var dt = function() {};
    (s["awe6.interfaces.IKernel"] = dt).__name__ = ["awe6", "interfaces", "IKernel"], dt.__interfaces__ = [ct, _], dt.prototype = {
        __class__: dt
    };
    var pt = function(t, e) {
        this.factory = t, this._context = e, this.tools = this._tools = new Y(this), u.call(this, this)
    };
    (s["awe6.core.drivers.AKernel"] = pt).__name__ = ["awe6", "core", "drivers", "AKernel"], pt.__interfaces__ = [dt], pt.__super__ = u, pt.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this._view = new Wt(this, this._context, 0, this), this._processes = new tt, this._helperFramerate = new gt(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new Mt(this._kernel), this.audio = this._audioManager = new xt(this._kernel), this.inputs = this._inputManager = new x(this._kernel), this.scenes = this._sceneManager = new H(this._kernel), this.messenger = this._messageManager = new D(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
        },
        _driverGetIsLocal: function() {
            return !1
        },
        _driverInit: function() {},
        _driverDisposer: function() {},
        onPreloaderComplete: function(t) {
            this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
            var e = this.factory.createAssetManager();
            e != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = e, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new Ft(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
        },
        _updater: function(t) {
            null == t && (t = 0), this._helperFramerate.update();
            var e = this.factory.isFixedUpdates ? 1e3 / this.factory.targetFramerate | 0 : this._helperFramerate.timeInterval;
            u.prototype._updater.call(this, e);
            for (var s = this._processes.h; null != s;) {
                var i = s.item;
                s = s.next, i.update(e)
            }
            var n = this._view;
            n.isActive && !n.isDisposed && (n._age += e, n._updates++, n._updater(e))
        },
        _disposer: function() {
            for (var t = this._processes.h; null != t;) {
                var e = t.item;
                t = t.next;
                var s = e;
                this._removeProcess(s)
            }
            Zs.__instanceof(this.factory, o) && Zs.__cast(this.factory, o).dispose(), this.factory = null;
            var i = this._view;
            i.isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer()), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), u.prototype._disposer.call(this)
        },
        getConfig: function(t) {
            var e = this.factory.config;
            if (null != Ci[t] ? e.existsReserved(t) : e.h.hasOwnProperty(t)) {
                var s = this.factory.config;
                return null != Ci[t] ? s.getReserved(t) : s.h[t]
            }
            return null
        },
        log: function(t) {
            null != this._logger ? this._logger.log(t) : this.isDebug && xs.trace("LOG: " + j.string(t), {
                fileName: "AKernel.hx",
                lineNumber: 248,
                className: "awe6.core.drivers.AKernel",
                methodName: "log"
            })
        },
        getFramerate: function(t) {
            return null == t && (t = !0), t ? this._helperFramerate.framerate : this.factory.targetFramerate
        },
        _addProcess: function(t, e) {
            null == e && (e = !0), null != t && (e ? this._processes.add(t) : this._processes.push(t))
        },
        _removeProcess: function(t) {
            return null != t && (t.dispose(), this._processes.remove(t))
        },
        set_isEyeCandy: function(t) {
            return this.factory.isEyeCandyOptionEnabled ? (this.isEyeCandy = t, this._driverSetIsEyeCandy(t)) : this.isEyeCandy = !0, this.isEyeCandy
        },
        _driverSetIsEyeCandy: function(t) {},
        set_isFullScreen: function(t) {
            return !this.factory.isFullScreenOptionEnabled || et.enumEq(this.factory.fullScreenType, Kt.DISABLED) ? this.isFullScreen = !1 : (this.isFullScreen = t, this._driverSetIsFullScreen(t)), this.isFullScreen
        },
        _driverSetIsFullScreen: function(t) {},
        _pauser: function() {
            u.prototype._pauser.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().pause()
        },
        _resumer: function() {
            u.prototype._resumer.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().resume()
        },
        get_session: function() {
            return this.session
        },
        set_session: function(t) {
            return this.session = t, this.get_session()
        },
        __class__: pt
    });
    var gt = function(t) {
        this.framerate = t, this._timeAtLastUpdate = (new Date).getTime() / 1e3 * 1e3 | 0
    };
    (s["awe6.core.drivers._AKernel._HelperFramerate"] = gt).__name__ = ["awe6", "core", "drivers", "_AKernel", "_HelperFramerate"], gt.prototype = {
        update: function() {
            this.timeInterval = ((new Date).getTime() / 1e3 * 1e3 | 0) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = (new Date).getTime() / 1e3 * 1e3 | 0
        },
        __class__: gt
    };
    var ft = function() {};
    (s["awe6.interfaces.IOverlay"] = ft).__name__ = ["awe6", "interfaces", "IOverlay"], ft.prototype = {
        __class__: ft
    };
    var Et = function() {};
    (s["awe6.interfaces.IOverlayProcess"] = Et).__name__ = ["awe6", "interfaces", "IOverlayProcess"], Et.__interfaces__ = [p, l, ft];
    var yt = function(t, e, s, i, n, r, a, _, o, h, l, u, c, d, p, g, f) {
        null == f && (f = .35), null == g && (g = 0), null == p && (p = 8), null == s && (s = 30), null == e && (e = 30), null == i && (i = new Wt(t)), null == n && (n = new Wt(t)), null == r && (r = new Wt(t)), null == a && (a = new Wt(t)), null == _ && (_ = new Wt(t)), null == o && (o = new Wt(t)), null == h && (h = new Wt(t)), null == l && (l = new Wt(t)), null == u && (u = new Wt(t)), null == c && (c = new Wt(t)), null == d && (d = new Wt(t)), this._borderView = i, this._buttonBack = new T(t, n, r, e, s), this._buttonMute = new T(t, a, _, e, s), this._buttonUnmute = new T(t, o, h, e, s), this._buttonPause = new T(t, l, u, e, s), this._buttonUnpause = new T(t, c, d, e, s), this._pauseBlur = p, this._pauseColor = g, this._pauseAlpha = f, this._context = new createjs.Container, v.call(this, t, null, this._context)
    };
    (s["awe6.core.drivers.AOverlay"] = yt).__name__ = ["awe6", "core", "drivers", "AOverlay"], yt.__interfaces__ = [Et], yt.__super__ = v, yt.prototype = t(v.prototype, {
        _init: function() {
            v.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new Wt(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new Wt(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new Wt(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100;
            var t = mi(this, this.activateButton);
            this._buttonBack.onClickCallback = function() {
                t(ie.BACK)
            };
            var e = mi(this, this.activateButton);
            this._buttonMute.onClickCallback = function() {
                e(ie.MUTE)
            };
            var s = mi(this, this.activateButton);
            this._buttonPause.onClickCallback = function() {
                s(ie.PAUSE)
            };
            var i = mi(this, this.activateButton);
            this._buttonUnmute.onClickCallback = function() {
                i(ie.UNMUTE)
            };
            var n = mi(this, this.activateButton);
            this._buttonUnpause.onClickCallback = function() {
                n(ie.UNPAUSE)
            }, this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
            var r = this._buttonBack.height,
                a = this._buttonBack.width,
                _ = this._kernel.factory.width - 4 * a,
                o = r;
            this.positionButton(ie.BACK, _, o), this.positionButton(ie.MUTE, _ += a, o), this.positionButton(ie.UNMUTE, _, o), this.positionButton(ie.PAUSE, _ += a, o), this.positionButton(ie.UNPAUSE, _, o)
        },
        _driverInit: function() {
            this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
        },
        _updater: function(t) {
            if (null == t && (t = 0), v.prototype._updater.call(this, t), 0 < this._flashDuration) {
                this._flashDuration -= this._flashAsTime ? t : 1;
                this._tools;
                var e = this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration);
                this._flashAlpha = 1 < e ? 1 : e < 0 ? 0 : e
            }
            this._flashView.set_isVisible(0 < this._flashAlpha), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? ie.BACK : ie.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? ie.PAUSE : ie.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? ie.UNMUTE : ie.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(t), this._pauseView.update(t))
        },
        _disposer: function() {
            null != this.get_pauseEntity() && this.get_pauseEntity().dispose(), this.get_view().dispose(), v.prototype._disposer.call(this)
        },
        _getButton: function(t) {
            switch (t[1]) {
                case 0:
                    return this._buttonBack;
                case 1:
                    return this._buttonMute;
                case 2:
                    return this._buttonUnmute;
                case 3:
                    return this._buttonPause;
                case 4:
                    return this._buttonUnpause;
                case 5:
                    t[2];
                    return null
            }
        },
        showButton: function(t, e) {
            null == e && (e = !0);
            var s = this._getButton(t);
            null != s && (e ? this.addEntity(s, null, !0) : this.removeEntity(s, null, !0))
        },
        positionButton: function(t, e, s, i, n) {
            var r = this._getButton(t);
            null != r && (r.set_x(e), r.set_y(s), null != i && r.set_width(i), null != n && r.set_height(n))
        },
        hideButtons: function() {
            this.showButton(ie.BACK, !1), this.showButton(ie.MUTE, !1), this.showButton(ie.UNMUTE, !1), this.showButton(ie.PAUSE, !1), this.showButton(ie.UNPAUSE, !1)
        },
        flash: function(t, e, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), t = null != t ? t : e ? 500 : .5 * this._kernel.factory.targetFramerate, this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e;
            this._tools;
            this._flashAlpha = this._flashStartingAlpha = 1 < s ? 1 : s < 0 ? 0 : s
        },
        activateButton: function(t) {
            switch (t[1]) {
                case 0:
                    this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(ie.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
                    break;
                case 1:
                    this._buttonMute.get_view().get_isInViewStack() && (this.showButton(ie.MUTE, !1), this.showButton(ie.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
                    break;
                case 2:
                    this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(ie.MUTE, !0), this.showButton(ie.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
                    break;
                case 3:
                    this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(ie.PAUSE, !1), this.showButton(ie.UNPAUSE, !0), this.activateButton(ie.MUTE));
                    break;
                case 4:
                    this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(ie.PAUSE, !0), this.showButton(ie.UNPAUSE, !1), this.activateButton(this._wasMute ? ie.MUTE : ie.UNMUTE), this._kernel.resume(), this._drawPause(!1));
                    break;
                case 5:
                    t[2]
            }
        },
        _drawPause: function(t) {
            null == t && (t = !0), this._pauseView.set_isVisible(t)
        },
        get_pauseEntity: function() {
            return this.pauseEntity
        },
        set_pauseEntity: function(t) {
            return null != this.get_pauseEntity() && this.get_pauseEntity().get_view().remove(), this.pauseEntity = t, this._pauseView.addChild(this.get_pauseEntity().get_view()), this.get_pauseEntity()
        },
        __class__: yt
    });
    var vt = function() {};
    (s["awe6.interfaces.IProgress"] = vt).__name__ = ["awe6", "interfaces", "IProgress"];
    var mt = function() {};
    (s["awe6.interfaces.IPreloader"] = mt).__name__ = ["awe6", "interfaces", "IPreloader"], mt.__interfaces__ = [vt, p, l];
    var Tt = function(t, e, s) {
        null == s && (s = !1), this._assets = e, this._isDecached = s, u.call(this, t)
    };
    (s["awe6.core.drivers.APreloader"] = Tt).__name__ = ["awe6", "core", "drivers", "APreloader"], Tt.__interfaces__ = [mt], Tt.__super__ = u, Tt.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new Wt(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, 0 < this._assets.length && this._next()
        },
        _next: function() {
            if (this._currentAsset++, this._currentAsset > this._assets.length) {
                if (!this._isComplete) {
                    try {
                        var t = mi(yi = this._kernel, yi.onPreloaderComplete),
                            e = this;
                        Ps.delay(function() {
                            t(e)
                        }, 100)
                    } catch (t) {}
                    this._isComplete = !0
                }
            } else this._driverLoad(this._assets[this._currentAsset - 1]), this._currentProgress = 0
        },
        _driverLoad: function(t) {},
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t), 0 == this._assets.length && this._kernel.onPreloaderComplete(this), this.get_view().set_isVisible(100 < this._age)
        },
        _disposer: function() {
            this.get_view().dispose(), this._driverDisposer(), u.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        get_view: function() {
            return this.view
        },
        __class__: Tt
    });
    var At = function(t) {
        this._context = new createjs.Container, v.call(this, t, null, this._context)
    };
    (s["awe6.core.drivers.AProfiler"] = At).__name__ = ["awe6", "core", "drivers", "AProfiler"], At.__super__ = v, At.prototype = t(v.prototype, {
        _init: function() {
            v.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
        },
        _updater: function(t) {
            null == t && (t = 0), v.prototype._updater.call(this, t), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
        },
        _driverUpdate: function() {},
        __class__: At
    });
    var wt = function() {};
    (s["awe6.interfaces.ISceneTransition"] = wt).__name__ = ["awe6", "interfaces", "ISceneTransition"], wt.__interfaces__ = [p, vt, l];
    var St = function(t, e) {
        null == e && (e = 500), this._duration = e, this._context = new createjs.Container, v.call(this, t, null, this._context)
    };
    (s["awe6.core.drivers.ASceneTransition"] = St).__name__ = ["awe6", "core", "drivers", "ASceneTransition"], St.__interfaces__ = [wt], St.__super__ = v, St.prototype = t(v.prototype, {
        _init: function() {
            v.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), v.prototype._updater.call(this, t), this._age > this._duration && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        get_progress: function() {
            this._tools;
            var t = this._age / this._duration;
            return 1 < t ? 1 : t < 0 ? 0 : t
        },
        __class__: St
    });
    var bt = function() {};
    (s["awe6.interfaces.ISession"] = bt).__name__ = ["awe6", "interfaces", "ISession"], bt.prototype = {
        __class__: bt
    };
    var It = function(t, e) {
        null == e && (e = ""), this._kernel = t, "" == e && (e = "DEBUG_AWE6"), this.id = e, this._tools = this._kernel.tools, this._version = 1, this._init()
    };
    (s["awe6.core.drivers.ASession"] = It).__name__ = ["awe6", "core", "drivers", "ASession"], It.__interfaces__ = [bt], It.prototype = {
        _init: function() {
            this._driverLoad(), W.field(this._savedData, "_____VERSION") != this._version && this._driverReset();
            var t = null != W.field(this._savedData, this.id);
            this._data = {}, this._resetter(), this._setter(), t && (this._data = W.field(this._savedData, this.id), this._getter(), this.loadCount++)
        },
        _driverLoad: function() {
            this._savedData = {}
        },
        _driverSave: function() {},
        _driverReset: function() {
            this._savedData = {}
        },
        _getter: function() {
            this.loadCount = this._data.loadCount, this.saveCount = this._data.saveCount
        },
        _setter: function() {
            this._data.loadCount = this.loadCount, this._data.saveCount = this.saveCount
        },
        _resetter: function() {
            this.loadCount = 0, this.saveCount = 0
        },
        reset: function(t) {
            null == t && (t = !1), this._data = {}, this._resetter(), this._setter(), t && (this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave())
        },
        save: function() {
            this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave()
        },
        __class__: It
    };
    var Ct = function() {};
    (s["awe6.interfaces.IPriority"] = Ct).__name__ = ["awe6", "interfaces", "IPriority"], Ct.prototype = {
        __class__: Ct
    };
    var Ut = function() {};
    (s["awe6.interfaces.IView"] = Ut).__name__ = ["awe6", "interfaces", "IView"], Ut.__interfaces__ = [h, o, m, Ct], Ut.prototype = {
        __class__: Ut
    };
    var kt = function(t, e, s, i) {
        null == s && (s = 0), this.context = e, this.set_priority(s), this.owner = i, u.call(this, t)
    };
    (s["awe6.core.drivers.AView"] = kt).__name__ = ["awe6", "core", "drivers", "AView"], kt.__interfaces__ = [Ut], kt.__super__ = u, kt.prototype = t(u.prototype, {
        _init: function() {
            u.prototype._init.call(this), this.globalX = 0, this.globalY = 0, this.set_x(0), this.set_y(0), this.set_isVisible(!0), this._isDirty = !0, this._children = []
        },
        addChild: function(t, e) {
            if (null == e && (e = 0), this.isDisposed || null == t) return null;
            if (t.get_parent() != this && (t.remove(), Zs.__instanceof(t, kt))) {
                var s = t;
                this._children.push(s), s._setParent(this)
            }
            return 0 != e && t.set_priority(e), this._isDirty = !0, t
        },
        removeChild: function(t) {
            if (!this.isDisposed && null != t) {
                if (Zs.__instanceof(t, kt)) {
                    var e = t;
                    if (e.get_parent() != this) return;
                    $.remove(this._children, e), e._setParent(null)
                }
                this._isDirty = !0
            }
        },
        remove: function() {
            null != this.get_parent() && this.get_parent().removeChild(this)
        },
        clear: function() {
            for (var t = 0, e = this._children; t < e.length;) {
                var s = e[t];
                ++t, this.removeChild(s)
            }
        },
        _updater: function(t) {
            null == t && (t = 0), u.prototype._updater.call(this, t);
            for (var e = 0, s = this._children; e < s.length;) {
                var i = s[e];
                ++e, i.isActive && !i.isDisposed && (i._age += t, i._updates++, i._updater(t))
            }
            this._isDirty && this._draw(), this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY
        },
        _disposer: function() {
            this.remove(), this._driverDisposer(), this.clear(), u.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        _draw: function() {
            this.isDisposed || (this._children.sort(mi(yi = this._tools, yi.sortByPriority)), this._driverDraw(), this._isDirty = !1)
        },
        _driverDraw: function() {},
        _setParent: function(t) {
            this.parent = t
        },
        get_priority: function() {
            return this.priority
        },
        set_priority: function(t) {
            if (t == this.get_priority()) return this.get_priority();
            if (this.priority = t, Zs.__instanceof(this.get_parent(), kt)) {
                var e = this.get_parent();
                null != e && (e._isDirty = !0)
            }
            return this.get_priority()
        },
        set_isVisible: function(t) {
            if (t == this.isVisible) return this.isVisible;
            if (this.isVisible = t, Zs.__instanceof(this.get_parent(), kt)) {
                var e = this.get_parent();
                null != e && e._draw()
            }
            return this.isVisible
        },
        get_parent: function() {
            return this.parent
        },
        get_isInViewStack: function() {
            return !!this.isVisible && (this.owner == this._kernel || null != this.get_parent() && this.get_parent().get_isInViewStack())
        },
        set_x: function(t) {
            return this.x = t, this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.x
        },
        set_y: function(t) {
            return this.y = t, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY, this.y
        },
        __class__: kt
    });
    var Mt = function(t) {
        K.call(this, t)
    };
    (s["awe6.core.drivers.createjs.AssetManager"] = Mt).__name__ = ["awe6", "core", "drivers", "createjs", "AssetManager"], Mt.__super__ = K, Mt.prototype = t(K.prototype, {
        _driverGetAsset: function(t, e, s) {
            var i = null;
            return null != Mt.loadQueue && (i = Mt.loadQueue.getResult(t)), i
        },
        __class__: Mt
    });
    var xt = function(t) {
        q.call(this, t)
    };
    (s["awe6.core.drivers.createjs.AudioManager"] = xt).__name__ = ["awe6", "core", "drivers", "createjs", "AudioManager"], xt.__super__ = q, xt.prototype = t(q.prototype, {
        _init: function() {
            q.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", mi(this, this._onVisibilityChange))
        },
        _disposer: function() {
            window.document.removeEventListener("visibilitychange", mi(this, this._onVisibilityChange)), q.prototype._disposer.call(this)
        },
        _driverSoundFactory: function(t, e, s, i, n, r, a) {
            return null == r && (r = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new Rt(this._kernel, t, this._packageId, e, s, i, n, r, a)
        },
        _driverSetIsMute: function(t) {
            try {
                createjs.Sound.muted = t
            } catch (t) {}
            try {
                createjs.Sound.setMute(t)
            } catch (t) {}
        },
        _onVisibilityChange: function(t) {
            this._getVisibilityPropery() ? (this._visibilityWasMute = this.isMute, this.set_isMute(!0)) : this.set_isMute(this._visibilityWasMute)
        },
        _getVisibilityPropery: function() {
            for (var t = ["hidden", "mozHidden", "msHidden", "oHidden", "webkitHidden"], e = 0; e < t.length;) {
                var s = t[e];
                ++e;
                var i = window.document;
                if (Object.prototype.hasOwnProperty.call(i, s)) return W.field(window.document, s)
            }
            return window.document.hidden
        },
        __class__: xt
    });
    var Rt = function(t, e, s, i, n, r, a, _, o) {
        null == _ && (_ = 0), null == a && (a = 1), null == r && (r = 0), null == n && (n = 1), st.call(this, t, e, s, i, 1 == n ? 0 : n, r, a, _, o)
    };
    (s["awe6.core.drivers.createjs._HelperSound"] = Rt).__name__ = ["awe6", "core", "drivers", "createjs", "_HelperSound"], Rt.__super__ = st, Rt.prototype = t(st.prototype, {
        _driverInit: function() {
            try {
                this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan), createjs.WebAudioPlugin.context && "suspended" == createjs.WebAudioPlugin.context.state && createjs.WebAudioPlugin.context.resume()
            } catch (t) {}
            null != this._sound ? (this._sound.addEventListener("complete", mi(this, this._onSoundComplete)), this._driverTransform()) : this.dispose()
        },
        _driverTransform: function(t) {
            null == t && (t = !1), null != this._sound && (t && (this._volume *= this._sound.volume, this._pan *= this._sound.pan), this._sound.volume = this._volume, this._sound.pan = this._pan)
        },
        _driverStop: function() {
            if (null != this._sound) try {
                this._sound.stop()
            } catch (t) {}
        },
        _onSoundComplete: function(t) {
            null != this._onCompleteCallback && this._onCompleteCallback.apply(this, []), this.dispose()
        },
        __class__: Rt
    });
    var Dt = function(t, e, s) {
        nt.call(this, t, e, s)
    };
    (s["awe6.core.drivers.createjs.Factory"] = Dt).__name__ = ["awe6", "core", "drivers", "createjs", "Factory"], Dt.__super__ = nt, Dt.prototype = t(nt.prototype, {
        _driverInit: function() {
            this.isDebug || (xs.trace = function(t, e) {
                Zs.__trace(t, null)
            });
            var t = new createjs.Container;
            if (this._context.addChild(t), this._context = t, this._countConfigsLoaded = 0, this._countConfigsToLoad = 0, "" != this._config) {
                var e = null != this._config ? this._config : "assets/__config.xml",
                    s = this._context.getStage().canvas.getAttribute("config");
                null != s && "" != s && (e = s), this._loadConfig(e)
            } else this._launchKernel()
        },
        _launchKernel: function() {
            this._displayCredits();
            var t = !0,
                e = this.config;
            if (null != Ci["settings.nativeExperience"] ? e.existsReserved("settings.nativeExperience") : e.h.hasOwnProperty("settings.nativeExperience")) {
                var s = this.config;
                t = "true" == (null != Ci["settings.nativeExperience"] ? s.getReserved("settings.nativeExperience") : s.h["settings.nativeExperience"])
            }
            var i = this._context.getStage().canvas.getAttribute("nativeExperience");
            null != i && "" != i && (t = "true" == i), this.isNativeExperience = t, nt.prototype._launchKernel.call(this);
            var n = this._concreteKernel.system.isDesktop,
                r = "default",
                a = this.config;
            if (null != Ci["settings.fullScreen"] ? a.existsReserved("settings.fullScreen") : a.h.hasOwnProperty("settings.fullScreen")) {
                var _ = this.config;
                r = null != Ci["settings.fullScreen"] ? _.getReserved("settings.fullScreen") : _.h["settings.fullScreen"]
            }
            var o = this._context.getStage().canvas.getAttribute("fullScreen");
            null != o && "" != o && (r = o), this._kernel.set_isFullScreen(n && ("desktop" == r || "all" == r) || !n && ("mobile" == r || "all" == r || "default" == r)), this._kernel.isFullScreen && this.isNativeExperience && !n && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
        },
        _displayCredits: function() {
            var t, e = this.config;
            if (null != Ci["settings.asciiArt"] ? e.existsReserved("settings.asciiArt") : e.h.hasOwnProperty("settings.asciiArt")) {
                var s = this.config;
                t = null != Ci["settings.asciiArt"] ? s.getReserved("settings.asciiArt") : s.h["settings.asciiArt"]
            } else t = "";
            xs.trace(t, {
                fileName: "Factory.hx",
                lineNumber: 126,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), xs.trace(this.id + " v" + this.version + " by " + this.author, {
                fileName: "Factory.hx",
                lineNumber: 127,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), xs.trace("Powered by awe6 (http://awe6.org)", {
                fileName: "Factory.hx",
                lineNumber: 128,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), this.isDecached && xs.trace("Note: decaching is currently enabled", {
                fileName: "Factory.hx",
                lineNumber: 131,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), xs.trace("", {
                fileName: "Factory.hx",
                lineNumber: 133,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            })
        },
        _loadConfig: function(t) {
            if ("<?xml" == $.substr(t, 0, 5)) this._parseXml(t);
            else {
                this.isDecached && (t += "?dc=" + j.random(99999));
                try {
                    var e = new Ms(t);
                    e.onError = mi(this, this._onIOError), e.onData = mi(this, this._onComplete), e.request()
                } catch (t) {
                    return t instanceof Ks && (t = t.val), void this._onIOError(j.string(t))
                }
                this._countConfigsToLoad++
            }
        },
        _parseXml: function(t) {
            this._traverseElements(N.parse(t).firstElement().elements(), "");
            var e = this.config;
            if (!(null != Ci["settings.joinXml"] ? !e.existsReserved("settings.joinXml") : !e.h.hasOwnProperty("settings.joinXml")) && this._countConfigsLoaded < 100) {
                var s = this.config,
                    i = null != Ci["settings.joinXml"] ? s.getReserved("settings.joinXml") : s.h["settings.joinXml"];
                this.config.remove("settings.joinXml");
                for (var n = i.split(","), r = 0; r < n.length;) {
                    var a = n[r];
                    ++r, this._loadConfig(a)
                }
            }
            this._countConfigsLoaded == this._countConfigsToLoad && this._launchKernel()
        },
        _onIOError: function(t) {
            xs.trace("IO Errors Occurred During Config Loading:" + t, {
                fileName: "Factory.hx",
                lineNumber: 187,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), xs.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
                fileName: "Factory.hx",
                lineNumber: 188,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), null != this._config && "<?xml" == $.substr(this._config, 0, 5) ? (xs.trace("Embedded Config detected, using that to continue ...", {
                fileName: "Factory.hx",
                lineNumber: 191,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (xs.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
                fileName: "Factory.hx",
                lineNumber: 197,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), xs.trace("Unable to continue without Config.", {
                fileName: "Factory.hx",
                lineNumber: 198,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }))
        },
        _onComplete: function(t) {
            if (this._countConfigsLoaded++, "" != t) {
                var e = t;
                "<?xml" != $.substr(e, 0, 5) && (e = this.createEncrypter().decrypt(Os.ofString(e)).toString()), this._parseXml(e)
            } else this._onIOError(t)
        },
        _getAssetUrls: function() {
            for (var t = ["bin/assets/audio/Applause.m4a", "bin/assets/audio/Applause.ogg", "bin/assets/audio/Ball1.m4a", "bin/assets/audio/Ball1.ogg", "bin/assets/audio/Ball2.m4a", "bin/assets/audio/Ball2.ogg", "bin/assets/audio/Ball3.m4a", "bin/assets/audio/Ball3.ogg", "bin/assets/audio/Ball4.m4a", "bin/assets/audio/Ball4.ogg", "bin/assets/audio/Ball5.m4a", "bin/assets/audio/Ball5.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/Coin.m4a", "bin/assets/audio/Coin.ogg", "bin/assets/audio/CrowdMiss.m4a", "bin/assets/audio/CrowdMiss.ogg", "bin/assets/audio/CrowdScore.m4a", "bin/assets/audio/CrowdScore.ogg", "bin/assets/audio/Defeated.m4a", "bin/assets/audio/Defeated.ogg", "bin/assets/audio/Medal1.m4a", "bin/assets/audio/Medal1.ogg", "bin/assets/audio/Medal2.m4a", "bin/assets/audio/Medal2.ogg", "bin/assets/audio/Medal3.m4a", "bin/assets/audio/Medal3.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/Player.m4a", "bin/assets/audio/Player.ogg", "bin/assets/audio/Shot.m4a", "bin/assets/audio/Shot.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/Tackle1.m4a", "bin/assets/audio/Tackle1.ogg", "bin/assets/audio/Tackle2.m4a", "bin/assets/audio/Tackle2.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/Whistle.m4a", "bin/assets/audio/Whistle.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.eot", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.svg", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.ttf", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.woff", "bin/assets/gui/Action.png", "bin/assets/gui/AvatarUnitA0.png", "bin/assets/gui/AvatarUnitA1.png", "bin/assets/gui/AvatarUnitA2.png", "bin/assets/gui/AvatarUnitA3.png", "bin/assets/gui/AvatarUnitA4.png", "bin/assets/gui/AvatarUnitA5.png", "bin/assets/gui/AvatarUnitA6.png", "bin/assets/gui/AvatarUnitA7.png", "bin/assets/gui/AvatarUnitB0.png", "bin/assets/gui/AvatarUnitB1.png", "bin/assets/gui/AvatarUnitB2.png", "bin/assets/gui/AvatarUnitB3.png", "bin/assets/gui/AvatarUnitB4.png", "bin/assets/gui/AvatarUnitB5.png", "bin/assets/gui/AvatarUnitB6.png", "bin/assets/gui/AvatarUnitB7.png", "bin/assets/gui/BgAbstract1.png", "bin/assets/gui/BgAbstract2.png", "bin/assets/gui/BgAbstract3.png", "bin/assets/gui/BgAbstract4.png", "bin/assets/gui/BgDetail.jpg", "bin/assets/gui/BgGradient1.png", "bin/assets/gui/BgGradient2.png", "bin/assets/gui/BgGradient3.png", "bin/assets/gui/Burst.jpg", "bin/assets/gui/Buttons.png", "bin/assets/gui/HeroMedals.png", "bin/assets/gui/HeroUnitA0.png", "bin/assets/gui/HeroUnitA1.png", "bin/assets/gui/HeroUnitA2.png", "bin/assets/gui/HeroUnitA3.png", "bin/assets/gui/HeroUnitA4.png", "bin/assets/gui/HeroUnitA5.png", "bin/assets/gui/HeroUnitA6.png", "bin/assets/gui/HeroUnitA7.png", "bin/assets/gui/HeroUnitB0.png", "bin/assets/gui/HeroUnitB1.png", "bin/assets/gui/HeroUnitB2.png", "bin/assets/gui/HeroUnitB3.png", "bin/assets/gui/HeroUnitB4.png", "bin/assets/gui/HeroUnitB5.png", "bin/assets/gui/HeroUnitB6.png", "bin/assets/gui/HeroUnitB7.png", "bin/assets/gui/Hud.png", "bin/assets/gui/InstructionsA.png", "bin/assets/gui/InstructionsB.png", "bin/assets/gui/PanelBigBg.png", "bin/assets/gui/PanelBigFg.png", "bin/assets/gui/PanelLevel.png", "bin/assets/gui/PanelResult.png", "bin/assets/gui/PanelShop.png", "bin/assets/gui/PanelSmallBg.png", "bin/assets/gui/PanelSmallFg.png", "bin/assets/gui/PanelUnit.png", "bin/assets/gui/PauseBg.png", "bin/assets/gui/SceneFgFooter1.png", "bin/assets/gui/SceneFgFooter2.png", "bin/assets/gui/SceneFgHeader1.png", "bin/assets/gui/SceneFgHeader2.png", "bin/assets/gui/TeamCarousel.png", "bin/assets/gui/TeamsHud.png", "bin/assets/gui/TeamsLevel1.png", "bin/assets/gui/TeamsLevel2.png", "bin/assets/gui/Vignette.png", "bin/assets/location/BoardsBg.png", "bin/assets/location/BoardsFg.png", "bin/assets/location/Coin.png", "bin/assets/location/CrowdBg.png", "bin/assets/location/CrowdFg.png", "bin/assets/location/Goal.png", "bin/assets/location/Goalies1.png", "bin/assets/location/Goalies2.png", "bin/assets/location/Ground.png", "bin/assets/location/UnitAKits1.png", "bin/assets/location/UnitAKits2.png", "bin/assets/location/UnitASkins.png", "bin/assets/location/UnitBKits1.png", "bin/assets/location/UnitBKits2.png", "bin/assets/location/UnitBSkins.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png"], e = [], s = 0, i = t.length; s < i;) {
                var n = s++;
                t[n] = $.substr(t[n], 4, null), ("__" == $.substr(t[n], 0, 2) || -1 < t[n].indexOf("/__")) && e.push(t[n])
            }
            for (var r = 0; r < e.length;) {
                var a = e[r];
                ++r, $.remove(t, a)
            }
            return t
        },
        _driverDisposer: function() {
            null != this._context.parent && this._context.parent.removeChild(this._context)
        },
        preventDefaultForKeys: function(t) {
            this._kernel.inputs.keyboard.preventDefaultForKeys(t)
        },
        allowDefaultForKeys: function(t) {
            this._kernel.inputs.keyboard.allowDefaultForKeys(t)
        },
        __class__: Dt
    });
    var Pt = function(t) {
        at.call(this, t)
    };
    (s["awe6.core.drivers.createjs.InputKeyboard"] = Pt).__name__ = ["awe6", "core", "drivers", "createjs", "InputKeyboard"], Pt.__super__ = at, Pt.prototype = t(at.prototype, {
        _driverInit: function() {
            this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", mi(this, this._onKeyDown)), this._document.addEventListener("keyup", mi(this, this._onKeyUp))
        },
        _disposer: function() {
            this._document.removeEventListener("keydown", mi(this, this._onKeyDown)), this._document.removeEventListener("keyup", mi(this, this._onKeyUp)), at.prototype._disposer.call(this)
        },
        _onKeyDown: function(t) {
            this.isActive && (-1 != this._preventDefaultKeyCodes.indexOf(t.keyCode) && t.preventDefault(), this._addEvent(t.keyCode, !0))
        },
        _onKeyUp: function(t) {
            this.isActive && (-1 != this._preventDefaultKeyCodes.indexOf(t.keyCode) && t.preventDefault(), this._addEvent(t.keyCode, !1))
        },
        preventDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < t.length;) {
                    var s = t[e];
                    ++e;
                    var i = this.getKeyCode(s);
                    f.has(this._preventDefaultKeyCodes, i) || this._preventDefaultKeyCodes.push(i)
                }
        },
        allowDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < this._preventDefaultKeyCodes.length;) {
                    var s = this.getKey(this._preventDefaultKeyCodes[e]);
                    f.has(t, s) ? this._preventDefaultKeyCodes.splice(e, 1) : ++e
                }
        },
        __class__: Pt
    });
    var Nt = function(t) {
        lt.call(this, t)
    };
    (s["awe6.core.drivers.createjs.InputMouse"] = Nt).__name__ = ["awe6", "core", "drivers", "createjs", "InputMouse"], Nt.__super__ = lt, Nt.prototype = t(lt.prototype, {
        _driverInit: function() {
            this._stage = this._kernel._stage, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", mi(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", mi(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", mi(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", mi(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", mi(this, this._onMouseUp))), window.focus()
        },
        _disposer: function() {
            this._isTouch ? (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", mi(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", mi(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", mi(this, this._onTouchEnd))) : (this._stage.removeEventListener("stagemousedown", mi(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", mi(this, this._onMouseUp))), lt.prototype._disposer.call(this)
        },
        _isWithinBounds: function() {
            return this._stage.mouseInBounds
        },
        _getPosition: function() {
            if (this._isTouch) this.x = this._touchX, this.y = this._touchY;
            else {
                this._tools;
                var t = this._stage.mouseX / this._stage.scaleX,
                    e = this._kernel.factory.width;
                this.x = 0 | (e < t ? e : t < 0 ? 0 : t);
                this._tools;
                var s = this._stage.mouseY / this._stage.scaleY,
                    i = this._kernel.factory.height;
                this.y = 0 | (i < s ? i : s < 0 ? 0 : s)
            }
            this.x = this.x == this._kernel.factory.width ? this._xPrev : this.x, this.y = this.y == this._kernel.factory.height ? this._yPrev : this.y
        },
        _onTouchStart: function(t) {
            this._onMouseDown(t), this._onTouch(t), this.x = this._touchX, this.y = this._touchY
        },
        _onTouchEnd: function(t) {
            this._onMouseUp(t), this._onTouch(t), Nt._isSoundTriggered || (this._kernel.audio.start("Silence"), Nt._isSoundTriggered = !0, this._kernel.isFullScreen && this._kernel.factory.isNativeExperience && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()))
        },
        _onTouch: function(t) {
            try {
                this._tools;
                var e = (t.targetTouches[0].pageX - (0 | this._stage.canvas.offsetLeft)) / this._kernel._scaleX,
                    s = this._kernel.factory.width;
                this._touchX = 0 | (s < e ? s : e < 0 ? 0 : e);
                this._tools;
                var i = (t.targetTouches[0].pageY - (0 | this._stage.canvas.offsetTop)) / this._kernel._scaleY,
                    n = this._kernel.factory.height;
                this._touchY = 0 | (n < i ? n : i < 0 ? 0 : i)
            } catch (t) {}
            this._stage.mouseInBounds && t.preventDefault()
        },
        _onMouseDown: function(t) {
            window.focus(), this.isActive && (this._isTouch || 2 != t.nativeEvent.button) && this._buffer.push(!0)
        },
        _onMouseUp: function(t) {
            this.isActive && (this._isTouch || 2 != t.nativeEvent.button) && this._buffer.push(!1)
        },
        set_isVisible: function(t) {
            return this._stage.cursor = t ? "none" : "auto", lt.prototype.set_isVisible.call(this, t)
        },
        set_cursorType: function(t) {
            var e;
            switch (t[1]) {
                case 0:
                    e = "crosshair";
                    break;
                case 1:
                    e = "auto";
                    break;
                case 2:
                case 3:
                    e = "pointer";
                    break;
                case 4:
                    e = "text";
                    break;
                case 5:
                    e = t[2]
            }
            return this._stage.canvas.style.cursor = e, lt.prototype.set_cursorType.call(this, t)
        },
        __class__: Nt
    });
    var Bt = function(t, e) {
        pt.call(this, t, e)
    };
    (s["awe6.core.drivers.createjs.Kernel"] = Bt).__name__ = ["awe6", "core", "drivers", "createjs", "Kernel"], Bt.__super__ = pt, Bt.prototype = t(pt.prototype, {
        _driverGetIsLocal: function() {
            var t;
            switch (window.location.protocol) {
                case "http:":
                case "https:":
                    t = !1;
                    break;
                default:
                    t = !0
            }
            return t
        },
        _driverInit: function() {
            this.system = new Vt(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + $.substr(E.hex(this.factory.bgColor, 8), 2, 6)), t.graphics.drawRect(0, 0, this.factory.width, this.factory.height), t.graphics.endFill(), this._stage.addChildAt(t, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", mi(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", mi(this, this._onContextMenu), !1), window.addEventListener("unload", mi(this, this._onUnload))
        },
        _onUnload: function(t) {
            window.removeEventListener("unload", mi(this, this._onUnload)), this.get_session().save()
        },
        _onContextMenu: function(t) {
            if (t.preventDefault(), t.stopImmediatePropagation(), null != this.overlay) {
                var e = mi(yi = this.overlay, yi.activateButton);
                Ps.delay(function() {
                    e(ie.PAUSE)
                }, 100)
            }
        },
        _driverDisposer: function() {
            this._stage.canvas.removeEventListener("contextmenu", mi(this, this._onContextMenu))
        },
        _onEnterFrame: function(t) {
            null != t.paused && 1 == t.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(t));
            var e = j.string(window.innerWidth) + ":" + j.string(window.innerHeight);
            this._prevWindowSize != e && this._driverSetIsFullScreen(this.isFullScreen)
        },
        _driverSetIsEyeCandy: function(t) {},
        _driverSetIsFullScreen: function(t) {
            this._prevWindowSize = j.string(window.innerWidth) + ":" + j.string(window.innerHeight), this._scaleX = this._scaleY = 1;
            var e = this.factory.width,
                s = this.factory.height,
                i = window.innerWidth,
                n = window.innerHeight,
                r = e < s,
                a = i < n;
            this.system.isRotated = !this.system.isDesktop && r != a;
            var _ = 0,
                o = 0;
            if (t) {
                var h = Math.min(i / e, n / s),
                    l = this.factory.fullScreenType;
                switch (l[1]) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                        this._scaleX = i / e, this._scaleY = n / s;
                        break;
                    case 3:
                        this._scaleX = this._scaleY = h;
                        break;
                    case 4:
                        h = h < .5 ? .25 : h < 1 ? .5 : Math.floor(h), this._scaleX = this._scaleY = h;
                        break;
                    case 5:
                        var u = l[2];
                        if (null != u.bleedWidth && null != u.bleedHeight) {
                            var c = e - 2 * j.parseInt(j.string(u.bleedWidth) + ""),
                                d = s - 2 * j.parseInt(j.string(u.bleedHeight) + ""),
                                p = Math.min(i / c, n / d);
                            this._scaleX = this._scaleY = p
                        }
                }
                _ = Math.round((i - e * this._scaleX) / 2), o = Math.round((n - s * this._scaleY) / 2)
            }
            this._stage.canvas.style.setProperty("width", Math.round(e * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(s * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", _ + "px", ""), this._stage.canvas.style.setProperty("margin-top", o + "px", "")
        },
        __class__: Bt
    });
    var Ot = function(t, e, s, i, n, r, a, _, o, h, l, u, c, d, p, g, f) {
        yt.call(this, t, e, s, i, n, r, a, _, o, h, l, u, c, d, p, g, f)
    };
    (s["awe6.core.drivers.createjs.Overlay"] = Ot).__name__ = ["awe6", "core", "drivers", "createjs", "Overlay"], Ot.__super__ = yt, Ot.prototype = t(yt.prototype, {
        _driverInit: function() {
            Zs.__cast(this._borderView, Wt).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + E.hex(this._pauseColor, 6)), t.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), t.alpha = this._pauseAlpha, this._pauseContext.addChild(t), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
        },
        _updater: function(t) {
            null == t && (t = 0), yt.prototype._updater.call(this, t), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
        },
        flash: function(t, e, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), this._flashContext.removeAllChildren();
            var n = new createjs.Shape;
            n.graphics.beginFill("#" + E.hex(i, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), t = null != t ? t : e ? 500 : .5 * this._kernel.factory.targetFramerate, this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e;
            this._tools;
            this._flashAlpha = this._flashStartingAlpha = 1 < s ? 1 : s < 0 ? 0 : s
        },
        __class__: Ot
    });
    var Lt = function(t, e, s) {
        Tt.call(this, t, e, s)
    };
    (s["awe6.core.drivers.createjs.Preloader"] = Lt).__name__ = ["awe6", "core", "drivers", "createjs", "Preloader"], Lt.__super__ = Tt, Lt.prototype = t(Tt.prototype, {
        _init: function() {
            this._context = new createjs.Container, this.view = new Wt(this._kernel, this._context), Tt.prototype._init.call(this), this._system = this._kernel.system, this._isDesktop = this._system.isDesktop, this._audioHoldDelay = 0, this._completedDelay = 0;
            var t = this._isDecached ? "?dc=" + j.random(999999) : "",
                e = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
            null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && f.has(e, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3");
            var s = [];
            if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
                this._audioHoldDelay = this._getAudioHoldDelay();
                var i = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
                this._validSoundFormat = createjs.Sound.getCapability("ogg") ? "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._proprietaryAudioFormat : "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
                for (var n = 0, r = this._assets; n < r.length;) {
                    var a = r[n];
                    ++n;
                    var _ = $.substr(a, -3, null);
                    if (f.has(e, _) && (s.push(a), !i && _ == this._validSoundFormat)) {
                        var o = "assets.audio." + $.substr(a.split("/").pop(), 0, -4);
                        this._isFastTestMode || this._manifest.push({
                            src: a + t,
                            id: o
                        })
                    }
                }
            }
            for (var h = 0; h < s.length;) {
                var l = s[h];
                ++h, $.remove(this._assets, l)
            }
            for (var u = 0, c = this._assets; u < c.length;) {
                var d = c[u];
                ++u, this._manifest.push({
                    src: d + t,
                    id: d
                })
            }
            this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound), this._manifest = this._tools.shuffle(this._manifest), this._loadQueue.addEventListener("complete", mi(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", mi(this, this._onError)), this._loadQueue.addEventListener("error", mi(this, this._onError));
            var p = mi(yi = this._loadQueue, yi.loadManifest),
                g = this._manifest;
            Ps.delay(function() {
                p(g)
            }, 200)
        },
        _next: function() {},
        get_progress: function() {
            return this._loadQueue.progress
        },
        _onComplete: function(t) {
            this._isComplete || (this._isComplete = !0, Mt.loadQueue = this._loadQueue, this._completedDelay = this._audioHoldDelay, this._loadQueue.removeEventListener("complete", mi(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", mi(this, this._onError)), this._loadQueue.removeEventListener("error", mi(this, this._onError)), 0 != this._audioHoldDelay && this._showAudioHoldMessage())
        },
        _onError: function(t) {
            xs.trace([t, t.title, t.message, t.data], {
                fileName: "Preloader.hx",
                lineNumber: 148,
                className: "awe6.core.drivers.createjs.Preloader",
                methodName: "_onError"
            })
        },
        _showAudioHoldMessage: function() {},
        _updater: function(t) {
            null == t && (t = 0), Tt.prototype._updater.call(this, t), this._isComplete && (this._completedDelay -= t, (0 <= this._audioHoldDelay && this._completedDelay <= 0 || this._kernel.inputs.keyboard.getIsKeyRelease(this._kernel.factory.keyNext) || this._kernel.inputs.mouse.getIsButtonRelease()) && (this._assets = []))
        },
        _getIsStockAndroidBrowser: function() {
            var t = -1 < this._system.userAgent.indexOf("Android") && -1 < this._system.userAgent.indexOf("Mozilla/5.0") && -1 < this._system.userAgent.indexOf("AppleWebKit"),
                e = new g("AppleWebKit/([\\d.]+)", ""),
                s = e.match(this._system.userAgent),
                i = s ? parseFloat(e.matched(1)) : 0,
                n = new g("Chrome/([\\d.]+)", ""),
                r = n.match(this._system.userAgent),
                a = r ? parseFloat(n.matched(1)) : 0;
            return !!t && (!!(s && i < 537) || !!r && a < 37)
        },
        _getAudioHoldDelay: function() {
            if (this._isSoundDisabled) return 0;
            try {
                if ("[WebAudioPlugin]" != createjs.Sound.activePlugin || "suspended" != createjs.Sound.activePlugin.context.state) return 0
            } catch (t) {}
            var t = -1,
                e = this._kernel.factory.config;
            if (null != Ci["settings.audioHoldDelay"] ? e.existsReserved("settings.audioHoldDelay") : e.h.hasOwnProperty("settings.audioHoldDelay")) {
                var s = this._kernel.factory.config;
                t = j.parseInt(null != Ci["settings.audioHoldDelay"] ? s.getReserved("settings.audioHoldDelay") : s.h["settings.audioHoldDelay"])
            }
            try {
                var i = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
                null != i && "" != i && (t = j.parseInt(i))
            } catch (t) {}
            return t
        },
        __class__: Lt
    });
    var Ft = function(t) {
        At.call(this, t)
    };
    (s["awe6.core.drivers.createjs.Profiler"] = Ft).__name__ = ["awe6", "core", "drivers", "createjs", "Profiler"], Ft.__super__ = At, Ft.prototype = t(At.prototype, {
        _init: function() {
            At.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
            var t = new createjs.Shape;
            this._context.addChild(t), t.alpha = .25, this._isMemoryEnabled && (t.graphics.beginFill("#" + E.hex(this._backgroundColor, 6)), t.graphics.drawRect(0, 0, this._width, this._height), t.graphics.endFill()), t.graphics.beginFill("#" + E.hex(this._marginColor, 6)), t.graphics.drawRect(0, 0, this._width, this._marginHeight), t.graphics.endFill(), t.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + E.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + E.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
        },
        _driverUpdate: function() {
            var t = 0 | this._kernel.getFramerate(!0);
            Math.min(this._height, this._height / this._kernel.factory.targetFramerate * t);
            if (this._fpsTextField.text = this._fpsLabel + ": " + t + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0) {
                var e = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024),
                    s = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024);
                this._memoryTextField.text = this._memoryLabel + ": " + e + " / " + s
            }
        },
        __class__: Ft
    });
    var Gt = function(t, e) {
        St.call(this, t, e)
    };
    (s["awe6.core.drivers.createjs.SceneTransition"] = Gt).__name__ = ["awe6", "core", "drivers", "createjs", "SceneTransition"], Gt.__super__ = St, Gt.prototype = t(St.prototype, {
        _init: function() {
            St.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
            var t = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
            this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(t)
        },
        _updater: function(t) {
            if (null == t && (t = 0), St.prototype._updater.call(this, t), !this.isDisposed) {
                var e = this.get_progress();
                this._context.alpha = 1 - e
            }
        },
        __class__: Gt
    });
    var Ht = function(t, e) {
        It.call(this, t, e)
    };
    (s["awe6.core.drivers.createjs.Session"] = Ht).__name__ = ["awe6", "core", "drivers", "createjs", "Session"], Ht.__super__ = It, Ht.prototype = t(It.prototype, {
        _init: function() {
            var t = !0;
            null != this._kernel.getConfig("settings.sessionSaved") && (t = "false" != this._kernel.getConfig("settings.sessionSaved")), this._storage = t ? qs.getLocalStorage() : qs.getSessionStorage(), It.prototype._init.call(this)
        },
        _driverLoad: function() {
            if (this._savedData = {}, null != window.document.cookie && $s.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize($s.get(this._kernel.factory.id)), this._driverSave(), $s.remove(this._kernel.factory.id)), null != this._storage) try {
                var t = this._storage.getItem(this._kernel.factory.id);
                null != t && (this._savedData = this._tools.unserialize(t))
            } catch (t) {}
        },
        _driverReset: function() {
            if (null != this._storage) try {
                this._storage.removeItem(this._kernel.factory.id)
            } catch (t) {}
            this._savedData = {}
        },
        _driverSave: function() {
            if (null != this._storage) try {
                this._storage.setItem(this._kernel.factory.id, this._tools.serialize(this._savedData))
            } catch (t) {}
        },
        __class__: Ht
    });
    var Vt = function(t) {
        this._kernel = t, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = window.navigator.userAgent, this.isSilk = new g("Silk", "").match(this.userAgent), this.isCocoonjs = 1 == window.navigator.isCocoonJS, this.isCocoonjs && this._cocoonOverrides(), this.isCrosswalk = new g("Crosswalk", "").match(this.userAgent), this.isCordova = null != window.cordova, new g("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new g("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new g("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new g("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new g("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new g("Windows", "").match(this.userAgent) && (this.isWindows = !0, new g("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
    };
    (s["awe6.core.drivers.createjs.System"] = Vt).__name__ = ["awe6", "core", "drivers", "createjs", "System"], Vt.prototype = {
        _cocoonOverrides: function() {
            Image.prototype.naturalWidth = function() {
                return this.width
            }, Image.prototype.naturalHeight = function() {
                return this.height
            }
        },
        requestFullScreen: function() {
            try {
                /* var t = window.document.documentElement;
                null != mi(t, t.requestFullscreen) ? t.requestFullscreen() : null != t.msRequestFullscreen ? t.msRequestFullscreen() : null != t.mozRequestFullScreen ? t.mozRequestFullScreen() : null != t.webkitRequestFullscreen && t.webkitRequestFullscreen() */
            } catch (t) {}
        },
        requestExitFullScreen: function() {
            try {
                var t = window.document;
                null != mi(t, t.exitFullscreen) ? t.exitFullscreen() : null != t.msExitFullscreen ? t.msExitFullscreen() : null != t.mozCancelFullScreen ? t.mozCancelFullScreen() : null != t.webkitExitFullscreen && t.webkitExitFullscreen()
            } catch (t) {}
        },
        requestLockScreen: function() {
            if (!this.isDesktop) try {
                var t = this._kernel.factory.width < this._kernel.factory.height ? "portrait-primary" : "landscape-primary",
                    e = window.screen;
                null != e.orientation ? null != mi(yi = e.orientation, yi.lock) ? e.orientation.lock(t) : null != e.orientation.lockOrientation && e.orientation.lockOrientation(t) : null != e.mozOrientation ? e.mozLockOrientation(t) : null != e.msOrientation && e.msLockOrientation(t)
            } catch (t) {}
        },
        __class__: Vt
    };
    var Wt = function(t, e, s, i) {
        kt.call(this, t, e, s, i)
    };
    (s["awe6.core.drivers.createjs.View"] = Wt).__name__ = ["awe6", "core", "drivers", "createjs", "View"], Wt.__super__ = kt, Wt.prototype = t(kt.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), kt.prototype._init.call(this)
        },
        _driverDisposer: function() {
            if (null != this.context && null != this.context.parent) try {
                this.context.parent.removeChild(this.context)
            } catch (t) {}
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var t = this._children, e = 0; e < t.length;) {
                var s = t[e];
                ++e, s.isVisible && this._container.addChild(s.context)
            }
        },
        set_x: function(t) {
            return this.context.x = t, kt.prototype.set_x.call(this, t)
        },
        set_y: function(t) {
            return this.context.y = t, kt.prototype.set_y.call(this, t)
        },
        __class__: Wt
    });
    var jt = function(t, e, s, i) {
        if (null == i && (i = !0), null == s && (s = 100), null == e && (e = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = e, this.height = s, this._context = new createjs.Container, this.setPosition(0, 0), i) {
            var n = new createjs.Shape;
            n.graphics.beginFill("#FF0000"), n.graphics.drawRect(0, 0, this.width, this.height), n.graphics.endFill(), n.visible = !1, this._context.addChild(n), this._context.mask = n
        }
        v.call(this, t, null, this._context)
    };
    (s["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = jt).__name__ = ["awe6", "core", "drivers", "createjs", "extras", "gui", "GuiEntity"], jt.__interfaces__ = [m], jt.__super__ = v, jt.prototype = t(v.prototype, {
        setPosition: function(t, e) {
            this.set_x(t), this.set_y(e)
        },
        set_x: function(t) {
            return this.x = t, this._context.x = this.x, this.x
        },
        set_y: function(t) {
            return this.y = t, this._context.y = this.y, this.y
        },
        __class__: jt
    });
    var Qt = function(t, e, s, i, n, r, a) {
        null == a && (a = !1), null == r && (r = !1), null == i && (i = ""), this.textStyle = n, this._isMultiline = r, this._isCached = a, jt.call(this, t, e, s, !1), this.set_text(i)
    };
    (s["awe6.core.drivers.createjs.extras.gui.Text"] = Qt).__name__ = ["awe6", "core", "drivers", "createjs", "extras", "gui", "Text"], Qt.__super__ = jt, Qt.prototype = t(jt.prototype, {
        _init: function() {
            jt.prototype._init.call(this), this._textField = new createjs.Text, this._textField.text = this.text, this._draw(), this._context.addChild(this._textField), this._isDirty = !1, this._prevTextStyle = this.textStyle.toString()
        },
        _updater: function(t) {
            null == t && (t = 0), jt.prototype._updater.call(this, t), this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString(), this._isDirty && this._draw(), this._prevTextStyle = this.textStyle.toString()
        },
        _draw: function() {
            if (this._textField.lineWidth = this.width, this._prevTextStyle != this.textStyle.toString()) {
                switch (this.textStyle.align[1]) {
                    case 0:
                    case 1:
                        this._textField.textAlign = "left";
                        break;
                    case 2:
                        this._textField.textAlign = "center", this._textField.x = .5 * this.width;
                        break;
                    case 3:
                        this._textField.textAlign = "right", this._textField.x = this.width
                }
                var t = E.hex(this.textStyle.color, 6);
                if (this._textField.color = "#" + t, this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", this._textField.lineHeight = this.textStyle.spacingVertical, null != this.textStyle.filters) {
                    var e = this._textField;
                    e.shadow = null;
                    var s = this.textStyle.filters.slice();
                    if (null != this._textFieldOutline && null != this._textFieldOutline.parent && this._textFieldOutline.parent.removeChild(this._textFieldOutline), this._textFieldOutline = null, 2 == s.length || 6 == s.length) {
                        this._textFieldOutline = this._textField.clone();
                        var i = E.hex(s.shift(), 6);
                        this._textFieldOutline.color = "#" + i;
                        var n = s.shift();
                        this._textFieldOutline.outline = 2 * n, this._context.addChildAt(this._textFieldOutline, 0), e = this._textFieldOutline
                    }
                    4 == s.length && (e.shadow = new createjs.Shadow("#" + E.hex(s[0], 6), s[1], s[2], s[3]))
                }
            }
            this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
        },
        set_text: function(t) {
            return null == t && (t = ""), this.text == t || (this.text = t, this._textField.text = this.text, null != this._textFieldOutline && (this._textFieldOutline.text = this.text), this._isDirty = !0), this.text
        },
        __class__: Qt
    });
    var Jt = function(t, e, s, i) {
        kt.call(this, t, e, s, i)
    };
    (s["awe6.core.drivers.flash.View"] = Jt).__name__ = ["awe6", "core", "drivers", "flash", "View"], Jt.__super__ = kt, Jt.prototype = t(kt.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), kt.prototype._init.call(this)
        },
        _driverDisposer: function() {
            null != this.context.parent && this.context.parent.removeChild(this.context)
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var t = this._children, e = 0; e < t.length;) {
                var s = t[e];
                ++e, s.isVisible && this._container.addChild(s.context)
            }
        },
        set_x: function(t) {
            return this.context.x = t, kt.prototype.set_x.call(this, t)
        },
        set_y: function(t) {
            return this.context.y = t, kt.prototype.set_y.call(this, t)
        },
        __class__: Jt
    });
    var Yt = function(t, e, s) {
        null == s && (s = 1e3), this._callbackFunction = e, this._duration = s, v.call(this, t)
    };
    (s["awe6.extras.Delay"] = Yt).__name__ = ["awe6", "extras", "Delay"], Yt.__super__ = v, Yt.prototype = t(v.prototype, {
        _updater: function(t) {
            null == t && (t = 0), v.prototype._updater.call(this, t), this._duration -= t, this._duration <= 0 && (null != this._callbackFunction && this._callbackFunction(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: Yt
    });
    var zt = s["awe6.interfaces.EAgenda"] = {
        __ename__: ["awe6", "interfaces", "EAgenda"],
        __constructs__: ["ALWAYS", "BIRTH", "DEATH", "STANDARD", "ATTACK", "DEFEND", "SUB_TYPE"]
    };
    zt.ALWAYS = ["ALWAYS", 0], zt.ALWAYS.toString = i, (zt.ALWAYS.__enum__ = zt).BIRTH = ["BIRTH", 1], zt.BIRTH.toString = i, (zt.BIRTH.__enum__ = zt).DEATH = ["DEATH", 2], zt.DEATH.toString = i, (zt.DEATH.__enum__ = zt).STANDARD = ["STANDARD", 3], zt.STANDARD.toString = i, (zt.STANDARD.__enum__ = zt).ATTACK = ["ATTACK", 4], zt.ATTACK.toString = i, (zt.ATTACK.__enum__ = zt).DEFEND = ["DEFEND", 5], zt.DEFEND.toString = i, (zt.DEFEND.__enum__ = zt).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 6, t];
        return e.__enum__ = zt, e.toString = i, e
    };
    var Xt = s["awe6.interfaces.EAudioChannel"] = {
        __ename__: ["awe6", "interfaces", "EAudioChannel"],
        __constructs__: ["DEFAULT", "EFFECTS", "INTERFACE", "MUSIC", "SUB_TYPE"]
    };
    Xt.DEFAULT = ["DEFAULT", 0], Xt.DEFAULT.toString = i, (Xt.DEFAULT.__enum__ = Xt).EFFECTS = ["EFFECTS", 1], Xt.EFFECTS.toString = i, (Xt.EFFECTS.__enum__ = Xt).INTERFACE = ["INTERFACE", 2], Xt.INTERFACE.toString = i, (Xt.INTERFACE.__enum__ = Xt).MUSIC = ["MUSIC", 3], Xt.MUSIC.toString = i, (Xt.MUSIC.__enum__ = Xt).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 4, t];
        return e.__enum__ = Xt, e.toString = i, e
    };
    var Kt = s["awe6.interfaces.EFullScreen"] = {
        __ename__: ["awe6", "interfaces", "EFullScreen"],
        __constructs__: ["DISABLED", "NO_SCALE", "SCALE_ASPECT_RATIO_IGNORE", "SCALE_ASPECT_RATIO_PRESERVE", "SCALE_NEAREST_MULTIPLE", "SUB_TYPE"]
    };
    Kt.DISABLED = ["DISABLED", 0], Kt.DISABLED.toString = i, (Kt.DISABLED.__enum__ = Kt).NO_SCALE = ["NO_SCALE", 1], Kt.NO_SCALE.toString = i, (Kt.NO_SCALE.__enum__ = Kt).SCALE_ASPECT_RATIO_IGNORE = ["SCALE_ASPECT_RATIO_IGNORE", 2], Kt.SCALE_ASPECT_RATIO_IGNORE.toString = i, (Kt.SCALE_ASPECT_RATIO_IGNORE.__enum__ = Kt).SCALE_ASPECT_RATIO_PRESERVE = ["SCALE_ASPECT_RATIO_PRESERVE", 3], Kt.SCALE_ASPECT_RATIO_PRESERVE.toString = i, (Kt.SCALE_ASPECT_RATIO_PRESERVE.__enum__ = Kt).SCALE_NEAREST_MULTIPLE = ["SCALE_NEAREST_MULTIPLE", 4], Kt.SCALE_NEAREST_MULTIPLE.toString = i, (Kt.SCALE_NEAREST_MULTIPLE.__enum__ = Kt).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 5, t];
        return e.__enum__ = Kt, e.toString = i, e
    };
    var Zt = s["awe6.interfaces.EJoypadButton"] = {
        __ename__: ["awe6", "interfaces", "EJoypadButton"],
        __constructs__: ["FIRE", "UP", "RIGHT", "DOWN", "LEFT", "PRIMARY", "SECONDARY"]
    };
    Zt.FIRE = ["FIRE", 0], Zt.FIRE.toString = i, (Zt.FIRE.__enum__ = Zt).UP = ["UP", 1], Zt.UP.toString = i, (Zt.UP.__enum__ = Zt).RIGHT = ["RIGHT", 2], Zt.RIGHT.toString = i, (Zt.RIGHT.__enum__ = Zt).DOWN = ["DOWN", 3], Zt.DOWN.toString = i, (Zt.DOWN.__enum__ = Zt).LEFT = ["LEFT", 4], Zt.LEFT.toString = i, (Zt.LEFT.__enum__ = Zt).PRIMARY = ["PRIMARY", 5], Zt.PRIMARY.toString = i, (Zt.PRIMARY.__enum__ = Zt).SECONDARY = ["SECONDARY", 6], Zt.SECONDARY.toString = i, Zt.SECONDARY.__enum__ = Zt;
    var qt = s["awe6.interfaces.EJoypadTouch"] = {
        __ename__: ["awe6", "interfaces", "EJoypadTouch"],
        __constructs__: ["DISABLED", "DPAD", "JOYSTICK", "SWIPE"]
    };
    qt.DISABLED = ["DISABLED", 0], qt.DISABLED.toString = i, (qt.DISABLED.__enum__ = qt).DPAD = ["DPAD", 1], qt.DPAD.toString = i, (qt.DPAD.__enum__ = qt).JOYSTICK = function(t) {
        var e = ["JOYSTICK", 2, t];
        return e.__enum__ = qt, e.toString = i, e
    }, qt.SWIPE = function(t) {
        var e = ["SWIPE", 3, t];
        return e.__enum__ = qt, e.toString = i, e
    };
    var $t = s["awe6.interfaces.EKey"] = {
        __ename__: ["awe6", "interfaces", "EKey"],
        __constructs__: ["NUM_LOCK", "CLEAR", "HELP", "ALT", "BACKSPACE", "CAPS_LOCK", "CONTROL", "DELETE", "DOWN", "END", "ENTER", "ESCAPE", "F1", "F10", "F11", "F12", "F13", "F14", "F15", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "HOME", "INSERT", "LEFT", "NUMPAD_0", "NUMPAD_1", "NUMPAD_2", "NUMPAD_3", "NUMPAD_4", "NUMPAD_5", "NUMPAD_6", "NUMPAD_7", "NUMPAD_8", "NUMPAD_9", "NUMPAD_ADD", "NUMPAD_DECIMAL", "NUMPAD_DIVIDE", "NUMPAD_ENTER", "NUMPAD_MULTIPLY", "NUMPAD_SUBTRACT", "PAGE_DOWN", "PAGE_UP", "RIGHT", "SHIFT", "SPACE", "TAB", "UP", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "NUMBER_0", "NUMBER_1", "NUMBER_2", "NUMBER_3", "NUMBER_4", "NUMBER_5", "NUMBER_6", "NUMBER_7", "NUMBER_8", "NUMBER_9", "COLON", "EQUALS", "HYPHEN", "SLASH", "TILDE", "SQUARELEFT", "SQUARERIGHT", "BACKSLASH", "APOSTROPHE", "TOPLEFT", "SUB_TYPE"]
    };
    $t.NUM_LOCK = ["NUM_LOCK", 0], $t.NUM_LOCK.toString = i, ($t.NUM_LOCK.__enum__ = $t).CLEAR = ["CLEAR", 1], $t.CLEAR.toString = i, ($t.CLEAR.__enum__ = $t).HELP = ["HELP", 2], $t.HELP.toString = i, ($t.HELP.__enum__ = $t).ALT = ["ALT", 3], $t.ALT.toString = i, ($t.ALT.__enum__ = $t).BACKSPACE = ["BACKSPACE", 4], $t.BACKSPACE.toString = i, ($t.BACKSPACE.__enum__ = $t).CAPS_LOCK = ["CAPS_LOCK", 5], $t.CAPS_LOCK.toString = i, ($t.CAPS_LOCK.__enum__ = $t).CONTROL = ["CONTROL", 6], $t.CONTROL.toString = i, ($t.CONTROL.__enum__ = $t).DELETE = ["DELETE", 7], $t.DELETE.toString = i, ($t.DELETE.__enum__ = $t).DOWN = ["DOWN", 8], $t.DOWN.toString = i, ($t.DOWN.__enum__ = $t).END = ["END", 9], $t.END.toString = i, ($t.END.__enum__ = $t).ENTER = ["ENTER", 10], $t.ENTER.toString = i, ($t.ENTER.__enum__ = $t).ESCAPE = ["ESCAPE", 11], $t.ESCAPE.toString = i, ($t.ESCAPE.__enum__ = $t).F1 = ["F1", 12], $t.F1.toString = i, ($t.F1.__enum__ = $t).F10 = ["F10", 13], $t.F10.toString = i, ($t.F10.__enum__ = $t).F11 = ["F11", 14], $t.F11.toString = i, ($t.F11.__enum__ = $t).F12 = ["F12", 15], $t.F12.toString = i, ($t.F12.__enum__ = $t).F13 = ["F13", 16], $t.F13.toString = i, ($t.F13.__enum__ = $t).F14 = ["F14", 17], $t.F14.toString = i, ($t.F14.__enum__ = $t).F15 = ["F15", 18], $t.F15.toString = i, ($t.F15.__enum__ = $t).F2 = ["F2", 19], $t.F2.toString = i, ($t.F2.__enum__ = $t).F3 = ["F3", 20], $t.F3.toString = i, ($t.F3.__enum__ = $t).F4 = ["F4", 21], $t.F4.toString = i, ($t.F4.__enum__ = $t).F5 = ["F5", 22], $t.F5.toString = i, ($t.F5.__enum__ = $t).F6 = ["F6", 23], $t.F6.toString = i, ($t.F6.__enum__ = $t).F7 = ["F7", 24], $t.F7.toString = i, ($t.F7.__enum__ = $t).F8 = ["F8", 25], $t.F8.toString = i, ($t.F8.__enum__ = $t).F9 = ["F9", 26], $t.F9.toString = i, ($t.F9.__enum__ = $t).HOME = ["HOME", 27], $t.HOME.toString = i, ($t.HOME.__enum__ = $t).INSERT = ["INSERT", 28], $t.INSERT.toString = i, ($t.INSERT.__enum__ = $t).LEFT = ["LEFT", 29], $t.LEFT.toString = i, ($t.LEFT.__enum__ = $t).NUMPAD_0 = ["NUMPAD_0", 30], $t.NUMPAD_0.toString = i, ($t.NUMPAD_0.__enum__ = $t).NUMPAD_1 = ["NUMPAD_1", 31], $t.NUMPAD_1.toString = i, ($t.NUMPAD_1.__enum__ = $t).NUMPAD_2 = ["NUMPAD_2", 32], $t.NUMPAD_2.toString = i, ($t.NUMPAD_2.__enum__ = $t).NUMPAD_3 = ["NUMPAD_3", 33], $t.NUMPAD_3.toString = i, ($t.NUMPAD_3.__enum__ = $t).NUMPAD_4 = ["NUMPAD_4", 34], $t.NUMPAD_4.toString = i, ($t.NUMPAD_4.__enum__ = $t).NUMPAD_5 = ["NUMPAD_5", 35], $t.NUMPAD_5.toString = i, ($t.NUMPAD_5.__enum__ = $t).NUMPAD_6 = ["NUMPAD_6", 36], $t.NUMPAD_6.toString = i, ($t.NUMPAD_6.__enum__ = $t).NUMPAD_7 = ["NUMPAD_7", 37], $t.NUMPAD_7.toString = i, ($t.NUMPAD_7.__enum__ = $t).NUMPAD_8 = ["NUMPAD_8", 38], $t.NUMPAD_8.toString = i, ($t.NUMPAD_8.__enum__ = $t).NUMPAD_9 = ["NUMPAD_9", 39], $t.NUMPAD_9.toString = i, ($t.NUMPAD_9.__enum__ = $t).NUMPAD_ADD = ["NUMPAD_ADD", 40], $t.NUMPAD_ADD.toString = i, ($t.NUMPAD_ADD.__enum__ = $t).NUMPAD_DECIMAL = ["NUMPAD_DECIMAL", 41], $t.NUMPAD_DECIMAL.toString = i, ($t.NUMPAD_DECIMAL.__enum__ = $t).NUMPAD_DIVIDE = ["NUMPAD_DIVIDE", 42], $t.NUMPAD_DIVIDE.toString = i, ($t.NUMPAD_DIVIDE.__enum__ = $t).NUMPAD_ENTER = ["NUMPAD_ENTER", 43], $t.NUMPAD_ENTER.toString = i, ($t.NUMPAD_ENTER.__enum__ = $t).NUMPAD_MULTIPLY = ["NUMPAD_MULTIPLY", 44], $t.NUMPAD_MULTIPLY.toString = i, ($t.NUMPAD_MULTIPLY.__enum__ = $t).NUMPAD_SUBTRACT = ["NUMPAD_SUBTRACT", 45], $t.NUMPAD_SUBTRACT.toString = i, ($t.NUMPAD_SUBTRACT.__enum__ = $t).PAGE_DOWN = ["PAGE_DOWN", 46], $t.PAGE_DOWN.toString = i, ($t.PAGE_DOWN.__enum__ = $t).PAGE_UP = ["PAGE_UP", 47], $t.PAGE_UP.toString = i, ($t.PAGE_UP.__enum__ = $t).RIGHT = ["RIGHT", 48], $t.RIGHT.toString = i, ($t.RIGHT.__enum__ = $t).SHIFT = ["SHIFT", 49], $t.SHIFT.toString = i, ($t.SHIFT.__enum__ = $t).SPACE = ["SPACE", 50], $t.SPACE.toString = i, ($t.SPACE.__enum__ = $t).TAB = ["TAB", 51], $t.TAB.toString = i, ($t.TAB.__enum__ = $t).UP = ["UP", 52], $t.UP.toString = i, ($t.UP.__enum__ = $t).A = ["A", 53], $t.A.toString = i, ($t.A.__enum__ = $t).B = ["B", 54], $t.B.toString = i, ($t.B.__enum__ = $t).C = ["C", 55], $t.C.toString = i, ($t.C.__enum__ = $t).D = ["D", 56], $t.D.toString = i, ($t.D.__enum__ = $t).E = ["E", 57], $t.E.toString = i, ($t.E.__enum__ = $t).F = ["F", 58], $t.F.toString = i, ($t.F.__enum__ = $t).G = ["G", 59], $t.G.toString = i, ($t.G.__enum__ = $t).H = ["H", 60], $t.H.toString = i, ($t.H.__enum__ = $t).I = ["I", 61], $t.I.toString = i, ($t.I.__enum__ = $t).J = ["J", 62], $t.J.toString = i, ($t.J.__enum__ = $t).K = ["K", 63], $t.K.toString = i, ($t.K.__enum__ = $t).L = ["L", 64], $t.L.toString = i, ($t.L.__enum__ = $t).M = ["M", 65], $t.M.toString = i, ($t.M.__enum__ = $t).N = ["N", 66], $t.N.toString = i, ($t.N.__enum__ = $t).O = ["O", 67], $t.O.toString = i, ($t.O.__enum__ = $t).P = ["P", 68], $t.P.toString = i, ($t.P.__enum__ = $t).Q = ["Q", 69], $t.Q.toString = i, ($t.Q.__enum__ = $t).R = ["R", 70], $t.R.toString = i, ($t.R.__enum__ = $t).S = ["S", 71], $t.S.toString = i, ($t.S.__enum__ = $t).T = ["T", 72], $t.T.toString = i, ($t.T.__enum__ = $t).U = ["U", 73], $t.U.toString = i, ($t.U.__enum__ = $t).V = ["V", 74], $t.V.toString = i, ($t.V.__enum__ = $t).W = ["W", 75], $t.W.toString = i, ($t.W.__enum__ = $t).X = ["X", 76], $t.X.toString = i, ($t.X.__enum__ = $t).Y = ["Y", 77], $t.Y.toString = i, ($t.Y.__enum__ = $t).Z = ["Z", 78], $t.Z.toString = i, ($t.Z.__enum__ = $t).NUMBER_0 = ["NUMBER_0", 79], $t.NUMBER_0.toString = i, ($t.NUMBER_0.__enum__ = $t).NUMBER_1 = ["NUMBER_1", 80], $t.NUMBER_1.toString = i, ($t.NUMBER_1.__enum__ = $t).NUMBER_2 = ["NUMBER_2", 81], $t.NUMBER_2.toString = i, ($t.NUMBER_2.__enum__ = $t).NUMBER_3 = ["NUMBER_3", 82], $t.NUMBER_3.toString = i, ($t.NUMBER_3.__enum__ = $t).NUMBER_4 = ["NUMBER_4", 83], $t.NUMBER_4.toString = i, ($t.NUMBER_4.__enum__ = $t).NUMBER_5 = ["NUMBER_5", 84], $t.NUMBER_5.toString = i, ($t.NUMBER_5.__enum__ = $t).NUMBER_6 = ["NUMBER_6", 85], $t.NUMBER_6.toString = i, ($t.NUMBER_6.__enum__ = $t).NUMBER_7 = ["NUMBER_7", 86], $t.NUMBER_7.toString = i, ($t.NUMBER_7.__enum__ = $t).NUMBER_8 = ["NUMBER_8", 87], $t.NUMBER_8.toString = i, ($t.NUMBER_8.__enum__ = $t).NUMBER_9 = ["NUMBER_9", 88], $t.NUMBER_9.toString = i, ($t.NUMBER_9.__enum__ = $t).COLON = ["COLON", 89], $t.COLON.toString = i, ($t.COLON.__enum__ = $t).EQUALS = ["EQUALS", 90], $t.EQUALS.toString = i, ($t.EQUALS.__enum__ = $t).HYPHEN = ["HYPHEN", 91], $t.HYPHEN.toString = i, ($t.HYPHEN.__enum__ = $t).SLASH = ["SLASH", 92], $t.SLASH.toString = i, ($t.SLASH.__enum__ = $t).TILDE = ["TILDE", 93], $t.TILDE.toString = i, ($t.TILDE.__enum__ = $t).SQUARELEFT = ["SQUARELEFT", 94], $t.SQUARELEFT.toString = i, ($t.SQUARELEFT.__enum__ = $t).SQUARERIGHT = ["SQUARERIGHT", 95], $t.SQUARERIGHT.toString = i, ($t.SQUARERIGHT.__enum__ = $t).BACKSLASH = ["BACKSLASH", 96], $t.BACKSLASH.toString = i, ($t.BACKSLASH.__enum__ = $t).APOSTROPHE = ["APOSTROPHE", 97], $t.APOSTROPHE.toString = i, ($t.APOSTROPHE.__enum__ = $t).TOPLEFT = ["TOPLEFT", 98], $t.TOPLEFT.toString = i, ($t.TOPLEFT.__enum__ = $t).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 99, t];
        return e.__enum__ = $t, e.toString = i, e
    };
    var te = s["awe6.interfaces.EMessage"] = {
        __ename__: ["awe6", "interfaces", "EMessage"],
        __constructs__: ["DISPOSE", "INIT", "PAUSE", "RESUME", "SUB_TYPE"]
    };
    te.DISPOSE = ["DISPOSE", 0], te.DISPOSE.toString = i, (te.DISPOSE.__enum__ = te).INIT = ["INIT", 1], te.INIT.toString = i, (te.INIT.__enum__ = te).PAUSE = ["PAUSE", 2], te.PAUSE.toString = i, (te.PAUSE.__enum__ = te).RESUME = ["RESUME", 3], te.RESUME.toString = i, (te.RESUME.__enum__ = te).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 4, t];
        return e.__enum__ = te, e.toString = i, e
    };
    var ee = s["awe6.interfaces.EMouseButton"] = {
        __ename__: ["awe6", "interfaces", "EMouseButton"],
        __constructs__: ["LEFT", "MIDDLE", "RIGHT"]
    };
    ee.LEFT = ["LEFT", 0], ee.LEFT.toString = i, (ee.LEFT.__enum__ = ee).MIDDLE = ["MIDDLE", 1], ee.MIDDLE.toString = i, (ee.MIDDLE.__enum__ = ee).RIGHT = ["RIGHT", 2], ee.RIGHT.toString = i, ee.RIGHT.__enum__ = ee;
    var se = s["awe6.interfaces.EMouseCursor"] = {
        __ename__: ["awe6", "interfaces", "EMouseCursor"],
        __constructs__: ["ARROW", "AUTO", "BUTTON", "HAND", "IBEAM", "SUB_TYPE"]
    };
    se.ARROW = ["ARROW", 0], se.ARROW.toString = i, (se.ARROW.__enum__ = se).AUTO = ["AUTO", 1], se.AUTO.toString = i, (se.AUTO.__enum__ = se).BUTTON = ["BUTTON", 2], se.BUTTON.toString = i, (se.BUTTON.__enum__ = se).HAND = ["HAND", 3], se.HAND.toString = i, (se.HAND.__enum__ = se).IBEAM = ["IBEAM", 4], se.IBEAM.toString = i, (se.IBEAM.__enum__ = se).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 5, t];
        return e.__enum__ = se, e.toString = i, e
    };
    var ie = s["awe6.interfaces.EOverlayButton"] = {
        __ename__: ["awe6", "interfaces", "EOverlayButton"],
        __constructs__: ["BACK", "MUTE", "UNMUTE", "PAUSE", "UNPAUSE", "SUB_TYPE"]
    };
    ie.BACK = ["BACK", 0], ie.BACK.toString = i, (ie.BACK.__enum__ = ie).MUTE = ["MUTE", 1], ie.MUTE.toString = i, (ie.MUTE.__enum__ = ie).UNMUTE = ["UNMUTE", 2], ie.UNMUTE.toString = i, (ie.UNMUTE.__enum__ = ie).PAUSE = ["PAUSE", 3], ie.PAUSE.toString = i, (ie.PAUSE.__enum__ = ie).UNPAUSE = ["UNPAUSE", 4], ie.UNPAUSE.toString = i, (ie.UNPAUSE.__enum__ = ie).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 5, t];
        return e.__enum__ = ie, e.toString = i, e
    };
    var ne = s["awe6.interfaces.EScene"] = {
        __ename__: ["awe6", "interfaces", "EScene"],
        __constructs__: ["SPLASH", "INTRO", "SELECT_SESSION", "SELECT_STORY", "SELECT_LEVEL", "INSTRUCTIONS", "SETTINGS", "MENU", "AVATAR", "SHOP", "REWARDS", "LEADERBOARD", "GAME", "INTERSTITIAL", "CINEMATIC", "RESULTS", "EXIT", "TEST", "SUB_TYPE"]
    };
    ne.SPLASH = ["SPLASH", 0], ne.SPLASH.toString = i, (ne.SPLASH.__enum__ = ne).INTRO = ["INTRO", 1], ne.INTRO.toString = i, (ne.INTRO.__enum__ = ne).SELECT_SESSION = ["SELECT_SESSION", 2], ne.SELECT_SESSION.toString = i, (ne.SELECT_SESSION.__enum__ = ne).SELECT_STORY = ["SELECT_STORY", 3], ne.SELECT_STORY.toString = i, (ne.SELECT_STORY.__enum__ = ne).SELECT_LEVEL = ["SELECT_LEVEL", 4], ne.SELECT_LEVEL.toString = i, (ne.SELECT_LEVEL.__enum__ = ne).INSTRUCTIONS = ["INSTRUCTIONS", 5], ne.INSTRUCTIONS.toString = i, (ne.INSTRUCTIONS.__enum__ = ne).SETTINGS = ["SETTINGS", 6], ne.SETTINGS.toString = i, (ne.SETTINGS.__enum__ = ne).MENU = ["MENU", 7], ne.MENU.toString = i, (ne.MENU.__enum__ = ne).AVATAR = ["AVATAR", 8], ne.AVATAR.toString = i, (ne.AVATAR.__enum__ = ne).SHOP = ["SHOP", 9], ne.SHOP.toString = i, (ne.SHOP.__enum__ = ne).REWARDS = ["REWARDS", 10], ne.REWARDS.toString = i, (ne.REWARDS.__enum__ = ne).LEADERBOARD = ["LEADERBOARD", 11], ne.LEADERBOARD.toString = i, (ne.LEADERBOARD.__enum__ = ne).GAME = ["GAME", 12], ne.GAME.toString = i, (ne.GAME.__enum__ = ne).INTERSTITIAL = ["INTERSTITIAL", 13], ne.INTERSTITIAL.toString = i, (ne.INTERSTITIAL.__enum__ = ne).CINEMATIC = ["CINEMATIC", 14], ne.CINEMATIC.toString = i, (ne.CINEMATIC.__enum__ = ne).RESULTS = ["RESULTS", 15], ne.RESULTS.toString = i, (ne.RESULTS.__enum__ = ne).EXIT = ["EXIT", 16], ne.EXIT.toString = i, (ne.EXIT.__enum__ = ne).TEST = ["TEST", 17], ne.TEST.toString = i, (ne.TEST.__enum__ = ne).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 18, t];
        return e.__enum__ = ne, e.toString = i, e
    };
    var re = s["awe6.interfaces.ETextAlign"] = {
        __ename__: ["awe6", "interfaces", "ETextAlign"],
        __constructs__: ["JUSTIFY", "LEFT", "CENTER", "RIGHT"]
    };
    re.JUSTIFY = ["JUSTIFY", 0], re.JUSTIFY.toString = i, (re.JUSTIFY.__enum__ = re).LEFT = ["LEFT", 1], re.LEFT.toString = i, (re.LEFT.__enum__ = re).CENTER = ["CENTER", 2], re.CENTER.toString = i, (re.CENTER.__enum__ = re).RIGHT = ["RIGHT", 3], re.RIGHT.toString = i, re.RIGHT.__enum__ = re;
    var ae = s["awe6.interfaces.ETextStyle"] = {
        __ename__: ["awe6", "interfaces", "ETextStyle"],
        __constructs__: ["BUTTON", "BODY", "HEADLINE", "SUBHEAD", "SMALLPRINT", "OVERSIZED", "SUB_TYPE"]
    };
    ae.BUTTON = ["BUTTON", 0], ae.BUTTON.toString = i, (ae.BUTTON.__enum__ = ae).BODY = ["BODY", 1], ae.BODY.toString = i, (ae.BODY.__enum__ = ae).HEADLINE = ["HEADLINE", 2], ae.HEADLINE.toString = i, (ae.HEADLINE.__enum__ = ae).SUBHEAD = ["SUBHEAD", 3], ae.SUBHEAD.toString = i, (ae.SUBHEAD.__enum__ = ae).SMALLPRINT = ["SMALLPRINT", 4], ae.SMALLPRINT.toString = i, (ae.SMALLPRINT.__enum__ = ae).OVERSIZED = ["OVERSIZED", 5], ae.OVERSIZED.toString = i, (ae.OVERSIZED.__enum__ = ae).SUB_TYPE = function(t) {
        var e = ["SUB_TYPE", 6, t];
        return e.__enum__ = ae, e.toString = i, e
    };
    var _e = function(t) {
        this._context = new createjs.Container, this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, this._context.mouseChildren = !1, this._context.mouseEnabled = !1, v.call(this, t, null, this._context)
    };
    (s["b10soc.AEntity"] = _e).__name__ = ["b10soc", "AEntity"], _e.__super__ = v, _e.prototype = t(v.prototype, {
        __class__: _e
    });
    var oe = function(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = t.factory
    };
    (s["b10soc.AVo"] = oe).__name__ = ["b10soc", "AVo"], oe.prototype = {
        __class__: oe
    };
    var he = function(t) {
        Mt.call(this, t)
    };
    (s["b10soc.AssetManager"] = he).__name__ = ["b10soc", "AssetManager"], he.__super__ = Mt, he.prototype = t(Mt.prototype, {
        _init: function() {
            Mt.prototype._init.call(this), this._factory = this._kernel.factory, this.overlayPauseUp = this._createView(le.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(le.OVERLAY_PAUSE_OVER)
        },
        get_buttonOver: function() {
            return this._createView(le.BUTTON_OVER)
        },
        get_buttonUp: function() {
            return this._createView(le.BUTTON_UP)
        },
        get_buttonSmallOver: function() {
            return this._createView(le.BUTTON_SMALL_OVER)
        },
        get_buttonSmallUp: function() {
            return this._createView(le.BUTTON_SMALL_UP)
        },
        get_buttonArrowTopOver: function() {
            return this._createView(le.BUTTON_ARROW_TOP_OVER)
        },
        get_buttonArrowTopUp: function() {
            return this._createView(le.BUTTON_ARROW_TOP_UP)
        },
        get_buttonArrowBottomOver: function() {
            return this._createView(le.BUTTON_ARROW_BOTTOM_OVER)
        },
        get_buttonArrowBottomUp: function() {
            return this._createView(le.BUTTON_ARROW_BOTTOM_UP)
        },
        _createView: function(t) {
            var e, s = new createjs.Container,
                i = new createjs.Bitmap(this.getAsset("assets/gui/Buttons.png"));
            switch (t[1]) {
                case 0:
                    e = new createjs.Rectangle(0, 0, 200, 65);
                    break;
                case 1:
                    e = new createjs.Rectangle(200, 0, 200, 65);
                    break;
                case 2:
                    e = new createjs.Rectangle(400, 65, 100, 30);
                    break;
                case 3:
                    e = new createjs.Rectangle(400, 95, 100, 30);
                    break;
                case 4:
                    e = new createjs.Rectangle(266, 65, 66, 30);
                    break;
                case 5:
                    e = new createjs.Rectangle(266, 95, 66, 30);
                    break;
                case 6:
                    e = new createjs.Rectangle(336, 65, 66, 30);
                    break;
                case 7:
                    e = new createjs.Rectangle(336, 95, 66, 30);
                    break;
                case 8:
                    e = new createjs.Rectangle(0, 65, 65, 65);
                    break;
                case 9:
                    e = new createjs.Rectangle(65, 65, 65, 65);
                    break;
                case 10:
                    e = new createjs.Rectangle(130, 65, 65, 65);
                    break;
                case 11:
                    e = new createjs.Rectangle(195, 65, 65, 65);
                    break;
                case 12:
                    e = new createjs.Rectangle(400, 0, 50, 50);
                    break;
                case 13:
                    e = new createjs.Rectangle(450, 0, 50, 50)
            }
            return i.sourceRect = e, i.cache(0, 0, i.sourceRect.width, i.sourceRect.height), s.addChild(i), new Wt(this._kernel, s)
        },
        __class__: he
    });
    var le = s["b10soc.EAsset"] = {
        __ename__: ["b10soc", "EAsset"],
        __constructs__: ["BUTTON_UP", "BUTTON_OVER", "BUTTON_SMALL_UP", "BUTTON_SMALL_OVER", "BUTTON_ARROW_TOP_UP", "BUTTON_ARROW_TOP_OVER", "BUTTON_ARROW_BOTTOM_UP", "BUTTON_ARROW_BOTTOM_OVER", "BUTTON_TWITTER_UP", "BUTTON_TWITTER_OVER", "BUTTON_FACEBOOK_UP", "BUTTON_FACEBOOK_OVER", "OVERLAY_PAUSE_UP", "OVERLAY_PAUSE_OVER"]
    };
    le.BUTTON_UP = ["BUTTON_UP", 0], le.BUTTON_UP.toString = i, (le.BUTTON_UP.__enum__ = le).BUTTON_OVER = ["BUTTON_OVER", 1], le.BUTTON_OVER.toString = i, (le.BUTTON_OVER.__enum__ = le).BUTTON_SMALL_UP = ["BUTTON_SMALL_UP", 2], le.BUTTON_SMALL_UP.toString = i, (le.BUTTON_SMALL_UP.__enum__ = le).BUTTON_SMALL_OVER = ["BUTTON_SMALL_OVER", 3], le.BUTTON_SMALL_OVER.toString = i, (le.BUTTON_SMALL_OVER.__enum__ = le).BUTTON_ARROW_TOP_UP = ["BUTTON_ARROW_TOP_UP", 4], le.BUTTON_ARROW_TOP_UP.toString = i, (le.BUTTON_ARROW_TOP_UP.__enum__ = le).BUTTON_ARROW_TOP_OVER = ["BUTTON_ARROW_TOP_OVER", 5], le.BUTTON_ARROW_TOP_OVER.toString = i, (le.BUTTON_ARROW_TOP_OVER.__enum__ = le).BUTTON_ARROW_BOTTOM_UP = ["BUTTON_ARROW_BOTTOM_UP", 6], le.BUTTON_ARROW_BOTTOM_UP.toString = i, (le.BUTTON_ARROW_BOTTOM_UP.__enum__ = le).BUTTON_ARROW_BOTTOM_OVER = ["BUTTON_ARROW_BOTTOM_OVER", 7], le.BUTTON_ARROW_BOTTOM_OVER.toString = i, (le.BUTTON_ARROW_BOTTOM_OVER.__enum__ = le).BUTTON_TWITTER_UP = ["BUTTON_TWITTER_UP", 8], le.BUTTON_TWITTER_UP.toString = i, (le.BUTTON_TWITTER_UP.__enum__ = le).BUTTON_TWITTER_OVER = ["BUTTON_TWITTER_OVER", 9], le.BUTTON_TWITTER_OVER.toString = i, (le.BUTTON_TWITTER_OVER.__enum__ = le).BUTTON_FACEBOOK_UP = ["BUTTON_FACEBOOK_UP", 10], le.BUTTON_FACEBOOK_UP.toString = i, (le.BUTTON_FACEBOOK_UP.__enum__ = le).BUTTON_FACEBOOK_OVER = ["BUTTON_FACEBOOK_OVER", 11], le.BUTTON_FACEBOOK_OVER.toString = i, (le.BUTTON_FACEBOOK_OVER.__enum__ = le).OVERLAY_PAUSE_UP = ["OVERLAY_PAUSE_UP", 12], le.OVERLAY_PAUSE_UP.toString = i, (le.OVERLAY_PAUSE_UP.__enum__ = le).OVERLAY_PAUSE_OVER = ["OVERLAY_PAUSE_OVER", 13], le.OVERLAY_PAUSE_OVER.toString = i, le.OVERLAY_PAUSE_OVER.__enum__ = le;
    var ue = function(t, e, s) {
        this.COLOR_GREY = 5789784, this.COLOR_BLACK = 0, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_HUD_ALERT = ae.SUB_TYPE("HUD_ALERT"), this.TEXTSTYLE_HUD_COINS = ae.SUB_TYPE("HUD_COINS"), this.TEXTSTYLE_HUD_DISTANCE = ae.SUB_TYPE("HUD_DISTANCE"), this.TEXTSTYLE_HUD_TITLE = ae.SUB_TYPE("HUD_TITLE"), this.TEXTSTYLE_PANEL_STATS = ae.SUB_TYPE("PANEL_STATS"), this.TEXTSTYLE_PANEL_MESSAGE = ae.SUB_TYPE("PANEL_MESSAGE"), this.TEXTSTYLE_PANEL_TITLE = ae.SUB_TYPE("PANEL_TITLE"), Dt.call(this, t, e, s)
    };
    (s["b10soc.Factory"] = ue).__name__ = ["b10soc", "Factory"], ue.__super__ = Dt, ue.prototype = t(Dt.prototype, {
        _configurer: function(t) {
            if (null == t && (t = !1), t) {
                this.id = "b10soc";
                var e = "1";
                null != Rs.getString("revision") && (e = Rs.getString("revision").split("\r\n")[0]), this.version = "1.0." + e, this.author = "https://localhost/tran-bong-kinh-dien-2019/game", this.isDecached = !1, this.width = 720, this.height = 405, this.joypadTouchType = qt.DISABLED, this.bgColor = 0, this.startingSceneType = ne.INTRO, this.targetFramerate = 30, this.isFixedUpdates = !0
            }
        },
        _launchKernel: function() {
            Dt.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId")), "true" == this._kernel.getConfig("settings.disableEyeCandy") && this._kernel.set_isEyeCandy(!1)
        },
        createAssetManager: function() {
            return null == this._assets && (this._assets = new he(this._kernel)), this._assets
        },
        createLogger: function() {
            var t = j.string(this._kernel.getConfig("settings.googleAnalytics.id"));
            return "" != t ? new ce(this._kernel, t) : Dt.prototype.createLogger.call(this)
        },
        createOverlay: function() {
            return new rs(this._kernel)
        },
        createPreloader: function() {
            return new pe(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            switch (this._kernel.log("scene: " + j.string(t)), t[1]) {
                case 1:
                    return new ws(this._kernel, t);
                case 4:
                    return new Cs(this._kernel, t);
                case 5:
                    return new As(this._kernel, t);
                case 7:
                    return new Ss(this._kernel, t);
                case 8:
                    return new ms(this._kernel, t);
                case 9:
                    return new Us(this._kernel, t);
                case 12:
                    return new Ts(this._kernel, t);
                case 15:
                    return new bs(this._kernel, t)
            }
            return Dt.prototype.createScene.call(this, t)
        },
        createSceneTransition: function(t, e) {
            return new Is(this._kernel)
        },
        createSession: function(t) {
            return new ge(this._kernel, t)
        },
        createTextStyle: function(t) {
            null == t && (t = ae.BODY);
            var e, s = this._kernel.getConfig("settings.font.name");
            if (null == t) e = new Q(s, 12, 8421504);
            else switch (t[1]) {
                case 0:
                    e = new Q(s, 18, this.COLOR_WHITE, !1, !1, re.CENTER, 0, 0, 0, []);
                    break;
                case 1:
                    e = new Q(s, 16, this.COLOR_BLACK, !1, !1, re.LEFT, 0, 18, 0, []);
                    break;
                case 2:
                    e = new Q(s, 22, this.COLOR_WHITE, !1, !1, re.CENTER, 0, 0, 0, []);
                    break;
                case 3:
                    e = new Q(s, 22, this.COLOR_WHITE, !1, !1, re.RIGHT, 0, 0, 0, []);
                    break;
                case 4:
                    e = new Q("Arial", 11, this.COLOR_GREY, !1, !1, re.CENTER, 0, 0, 0, []);
                    break;
                case 5:
                    e = new Q(s, 44, this.COLOR_WHITE, !1, !1, re.RIGHT, 0, 0, 0, []);
                    break;
                case 6:
                    switch (t[2]) {
                        case "HUD_ALERT":
                            e = new Q(s, 60, this.COLOR_WHITE, !1, !1, re.CENTER, 0, 0, 0, [0, 4]);
                            break;
                        case "HUD_COINS":
                            e = new Q(s, 22, this.COLOR_WHITE, !1, !1, re.RIGHT, 0, 0, 0, []);
                            break;
                        case "HUD_DISTANCE":
                            e = new Q(s, 22, this.COLOR_WHITE, !1, !1, re.LEFT, 0, 0, 0, []);
                            break;
                        case "HUD_TITLE":
                            e = new Q(s, 12, this.COLOR_WHITE, !1, !1, re.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_MESSAGE":
                            e = new Q(s, 12, this.COLOR_WHITE, !1, !1, re.CENTER, 0, 0, 0, []);
                            break;
                        case "PANEL_STATS":
                            e = new Q(s, 12, this.COLOR_WHITE, !1, !1, re.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_TITLE":
                            e = new Q(s, 19, this.COLOR_WHITE, !1, !1, re.RIGHT, 0, 0, 0, []);
                            break;
                        case "PRELOADER":
                            e = new Q(s, 14, this.COLOR_WHITE, !1, !1, re.CENTER, 0, 0, 0, []);
                            break;
                        default:
                            e = null
                    }
            }
            return e
        },
        getBackSceneType: function(t) {
            switch (t[1]) {
                case 4:
                    return ne.AVATAR;
                case 12:
                    return ne.SELECT_LEVEL;
                case 5:
                case 8:
                case 9:
                case 13:
                case 15:
                    return ne.MENU
            }
            return Dt.prototype.getBackSceneType.call(this, t)
        },
        getNextSceneType: function(t) {
            switch (t[1]) {
                case 1:
                    return ne.MENU;
                case 4:
                    return ne.GAME;
                case 5:
                case 7:
                    return ne.AVATAR;
                case 8:
                case 9:
                    return ne.SELECT_LEVEL;
                case 12:
                    return ne.RESULTS;
                case 13:
                case 15:
                    return ne.SHOP
            }
            return Dt.prototype.getNextSceneType.call(this, t)
        },
        __class__: ue
    });
    var ce = function(t, e) {
        if (this._kernel = t, this._id = e, this._factory = this._kernel.factory, this._isTrackerEnabled = !t.isLocal && "true" == t.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) try {
            this._gaLib = ga, this._gaLib("create", this._id, "auto"), this._gaLib("send", "pageview"), xs.trace("Google Analytics enabled with property ID " + this._id, {
                fileName: "LoggerGoogleAnalytics.hx",
                lineNumber: 40,
                className: "b10soc.LoggerGoogleAnalytics",
                methodName: "new"
            })
        } catch (t) {
            this._isTrackerEnabled = !1, xs.trace("Google Analytics failed with property ID " + this._id, {
                fileName: "LoggerGoogleAnalytics.hx",
                lineNumber: 45,
                className: "b10soc.LoggerGoogleAnalytics",
                methodName: "new"
            })
        }
    };
    (s["b10soc.LoggerGoogleAnalytics"] = ce).__name__ = ["b10soc", "LoggerGoogleAnalytics"], ce.__interfaces__ = [ct], ce.prototype = {
        log: function(t) {
            $.substr(j.string(t), 0, 25);
            var e = j.string(t).split(": ");
            this._isTrackerEnabled ? this._gaLib("send", {
                hitType: "event",
                eventCategory: e[0],
                eventAction: e[1],
                eventLabel: e[2]
            }) : xs.trace("Logger:" + j.string([e[0], e[1], e[2]]), {
                fileName: "LoggerGoogleAnalytics.hx",
                lineNumber: 65,
                className: "b10soc.LoggerGoogleAnalytics",
                methodName: "log"
            })
        },
        __class__: ce
    };
    var de = function() {};
    (s["b10soc.Main"] = de).__name__ = ["b10soc", "Main"], de.main = function() {
        var t = window.document.getElementById("gameCanvas"),
            e = Js.getParams(),
            s = null != Ci.lang ? e.getReserved("lang") : e.h.lang;
        if (null != s) {
            var i = "assets/__Config_" + s + ".xml";
            t.setAttribute("config", i)
        }
        var n = new createjs.Stage(t),
            r = new createjs.Container;
        n.addChild(r), de.factory = new ue(r, !1, Rs.getString("config"))
    };
    var pe = function(t, e, s) {
        Lt.call(this, t, e, s)
    };
    (s["b10soc.Preloader"] = pe).__name__ = ["b10soc", "Preloader"], pe.__super__ = Lt, pe.prototype = t(Lt.prototype, {
        _init: function() {
            this._factory = this._kernel.factory, this._proprietaryAudioFormat = "m4a";
            var t = new createjs.Bitmap("assets/__PreloaderBg.png");
            Lt.prototype._init.call(this);
            this._bg = new createjs.Shape, this._bg.graphics.beginFill("#404040"), this._bg.graphics.drawRoundRect(-2, -2, 204, 14, 4), this._bg.graphics.endFill(), this._fg = new createjs.Shape, this._fg.graphics.beginFill("#ffffff"), this._fg.graphics.drawRoundRect(0, 0, 200, 10, 4), this._fg.graphics.endFill(), this._bg.x = this._fg.x = .5 * (this._kernel.factory.width - 200), this._bg.y = this._fg.y = this._kernel.factory.height - 20 - 10 - 2, this._context.addChild(t), this._context.addChild(this._bg), this._context.addChild(this._fg)
        },
        _updater: function(t) {
            null == t && (t = 0), Lt.prototype._updater.call(this, t), this._fg.scaleX = this.get_progress()
        },
        _showAudioHoldMessage: function() {
            var t = new ps(this._kernel, this._kernel.factory.width, 20, j.string(this._kernel.getConfig("gui.audioHoldMessage")).toUpperCase(), this._kernel.factory.createTextStyle(ae.SUB_TYPE("PRELOADER")));
            t.setPosition(0, this._bg.y - 6), this.get_view().addChild(t.get_view()), this._context.removeChild(this._bg), this._context.removeChild(this._fg)
        },
        __class__: pe
    });
    var ge = function(t, e) {
        Ht.call(this, t, e)
    };
    (s["b10soc.Session"] = ge).__name__ = ["b10soc", "Session"], ge.__super__ = Ht, ge.prototype = t(Ht.prototype, {
        _init: function() {
            this._version = 3, Ht.prototype._init.call(this)
        },
        _getter: function() {
            Ht.prototype._getter.call(this), this._upgradeMovementUnitA = this._getValidatedInteger(this._data.upgradeMovementUnitA), this._upgradeShootingUnitA = this._getValidatedInteger(this._data.upgradeShootingUnitA), this._upgradeDefenseUnitA = this._getValidatedInteger(this._data.upgradeDefenseUnitA), this._upgradeMagnetUnitA = this._getValidatedInteger(this._data.upgradeMagnetUnitA), this._medalLevel1UnitA = this._getValidatedInteger(this._data.medalLevel1UnitA), this._medalLevel2UnitA = this._getValidatedInteger(this._data.medalLevel2UnitA), this._medalLevel3UnitA = this._getValidatedInteger(this._data.medalLevel3UnitA), this._coinsUnitA = this._getValidatedInteger(this._data.coinsUnitA), this._upgradeMovementUnitB = this._getValidatedInteger(this._data.upgradeMovementUnitB), this._upgradeShootingUnitB = this._getValidatedInteger(this._data.upgradeShootingUnitB), this._upgradeDefenseUnitB = this._getValidatedInteger(this._data.upgradeDefenseUnitB), this._upgradeMagnetUnitB = this._getValidatedInteger(this._data.upgradeMagnetUnitB), this._medalLevel1UnitB = this._getValidatedInteger(this._data.medalLevel1UnitB), this._medalLevel2UnitB = this._getValidatedInteger(this._data.medalLevel2UnitB), this._medalLevel3UnitB = this._getValidatedInteger(this._data.medalLevel3UnitB), this._coinsUnitB = this._getValidatedInteger(this._data.coinsUnitB), this.team = null != this._data.team ? et.createEnum(Ue, this._data.team, null) : Ue.TEAM_1, this.cache.createOpponents(this.team)
        },
        _getValidatedInteger: function(t) {
            return null == t || isNaN(t) ? 0 : t
        },
        _setter: function() {
            Ht.prototype._setter.call(this), this._data.upgradeMovementUnitA = this._upgradeMovementUnitA, this._data.upgradeShootingUnitA = this._upgradeShootingUnitA, this._data.upgradeDefenseUnitA = this._upgradeDefenseUnitA, this._data.upgradeMagnetUnitA = this._upgradeMagnetUnitA, this._data.medalLevel1UnitA = this._medalLevel1UnitA, this._data.medalLevel2UnitA = this._medalLevel2UnitA, this._data.medalLevel3UnitA = this._medalLevel3UnitA, this._data.coinsUnitA = this._coinsUnitA, this._data.upgradeMovementUnitB = this._upgradeMovementUnitB, this._data.upgradeShootingUnitB = this._upgradeShootingUnitB, this._data.upgradeDefenseUnitB = this._upgradeDefenseUnitB, this._data.upgradeMagnetUnitB = this._upgradeMagnetUnitB, this._data.medalLevel1UnitB = this._medalLevel1UnitB, this._data.medalLevel2UnitB = this._medalLevel2UnitB, this._data.medalLevel3UnitB = this._medalLevel3UnitB, this._data.coinsUnitB = this._coinsUnitB, this._data.team = this.team
        },
        _resetter: function() {
            Ht.prototype._resetter.call(this), this.team = Ue.TEAM_1, this.cache = new fe(this._kernel, this.team), this.resetUnit(ke.UNIT_A), this.resetUnit(ke.UNIT_B)
        },
        resetUnit: function(t) {
            switch (t[1]) {
                case 0:
                    this._upgradeMovementUnitA = 0, this._upgradeShootingUnitA = 0, this._upgradeDefenseUnitA = 0, this._upgradeMagnetUnitA = 0, this._medalLevel1UnitA = 0, this._medalLevel2UnitA = 0, this._medalLevel3UnitA = 0, this._coinsUnitA = 0;
                    break;
                case 1:
                    this._upgradeMovementUnitB = 0, this._upgradeShootingUnitB = 0, this._upgradeDefenseUnitB = 0, this._upgradeMagnetUnitB = 0, this._medalLevel1UnitB = 0, this._medalLevel2UnitB = 0, this._medalLevel3UnitB = 0, this._coinsUnitB = 0
            }
        },
        setCoins: function(t, e) {
            switch (null == t && (t = this.cache.unitType), t[1]) {
                case 0:
                    return this._coinsUnitA = e;
                case 1:
                    return this._coinsUnitB = e
            }
        },
        getCoins: function(t) {
            var e;
            switch (null == t && (t = this.cache.unitType), t[1]) {
                case 0:
                    e = this._coinsUnitA;
                    break;
                case 1:
                    e = this._coinsUnitB
            }
            return 0 | Math.min(99999, e)
        },
        setMedal: function(t, e, s) {
            switch (null == e && (e = this.cache.unitType), e[1]) {
                case 0:
                    switch (t[1]) {
                        case 0:
                            this._medalLevel1UnitA = 0 | Math.max(this._medalLevel1UnitA, s[1]);
                            break;
                        case 1:
                            this._medalLevel2UnitA = 0 | Math.max(this._medalLevel2UnitA, s[1]);
                            break;
                        case 2:
                            this._medalLevel3UnitA = 0 | Math.max(this._medalLevel3UnitA, s[1])
                    }
                    break;
                case 1:
                    switch (t[1]) {
                        case 0:
                            this._medalLevel1UnitB = 0 | Math.max(this._medalLevel1UnitB, s[1]);
                            break;
                        case 1:
                            this._medalLevel2UnitB = 0 | Math.max(this._medalLevel2UnitB, s[1]);
                            break;
                        case 2:
                            this._medalLevel3UnitB = 0 | Math.max(this._medalLevel3UnitB, s[1])
                    }
            }
        },
        getMedal: function(t, e) {
            switch (null == e && (e = this.cache.unitType), e[1]) {
                case 0:
                    switch (t[1]) {
                        case 0:
                            return et.createEnumIndex(Se, this._medalLevel1UnitA, null);
                        case 1:
                            return et.createEnumIndex(Se, this._medalLevel2UnitA, null);
                        case 2:
                            return et.createEnumIndex(Se, this._medalLevel3UnitA, null)
                    }
                    break;
                case 1:
                    switch (t[1]) {
                        case 0:
                            return et.createEnumIndex(Se, this._medalLevel1UnitB, null);
                        case 1:
                            return et.createEnumIndex(Se, this._medalLevel2UnitB, null);
                        case 2:
                            return et.createEnumIndex(Se, this._medalLevel3UnitB, null)
                    }
            }
        },
        setUpgrade: function(t, e, s) {
            switch (null == e && (e = this.cache.unitType), s < 0 && (s = 0), 8 < s && (s = 8), e[1]) {
                case 0:
                    switch (t[1]) {
                        case 0:
                            this._upgradeMovementUnitA = s;
                            break;
                        case 1:
                            this._upgradeShootingUnitA = s;
                            break;
                        case 2:
                            this._upgradeDefenseUnitA = s;
                            break;
                        case 3:
                            this._upgradeMagnetUnitA = s
                    }
                    break;
                case 1:
                    switch (t[1]) {
                        case 0:
                            this._upgradeMovementUnitB = s;
                            break;
                        case 1:
                            this._upgradeShootingUnitB = s;
                            break;
                        case 2:
                            this._upgradeDefenseUnitB = s;
                            break;
                        case 3:
                            this._upgradeMagnetUnitB = s
                    }
            }
        },
        getUpgrade: function(t, e) {
            switch (null == e && (e = this.cache.unitType), e[1]) {
                case 0:
                    switch (t[1]) {
                        case 0:
                            return this._upgradeMovementUnitA;
                        case 1:
                            return this._upgradeShootingUnitA;
                        case 2:
                            return this._upgradeDefenseUnitA;
                        case 3:
                            return this._upgradeMagnetUnitA
                    }
                    break;
                case 1:
                    switch (t[1]) {
                        case 0:
                            return this._upgradeMovementUnitB;
                        case 1:
                            return this._upgradeShootingUnitB;
                        case 2:
                            return this._upgradeDefenseUnitB;
                        case 3:
                            return this._upgradeMagnetUnitB
                    }
            }
        },
        getUpgradeTitle: function(t) {
            var e;
            switch (t[1]) {
                case 0:
                    e = "gui.upgrades.movement";
                    break;
                case 1:
                    e = "gui.upgrades.shooting";
                    break;
                case 2:
                    e = "gui.upgrades.defense";
                    break;
                case 3:
                    e = "gui.upgrades.magnet"
            }
            return j.string(this._kernel.getConfig(e)).toUpperCase()
        },
        getMedalTitle: function(t) {
            var e;
            switch (t[1]) {
                case 0:
                    e = "gui.medals.none";
                    break;
                case 1:
                    e = "gui.medals.bronze";
                    break;
                case 2:
                    e = "gui.medals.silver";
                    break;
                case 3:
                    e = "gui.medals.gold"
            }
            return j.string(this._kernel.getConfig(e)).toUpperCase()
        },
        setIsTester: function(t) {
            this._isTester = t
        },
        get_isTester: function() {
            return !!this._kernel.isDebug || this._isTester
        },
        getMedalFromCachedOutcomes: function() {
            if (this.cache.currentPeriod != Ie.GAME_OVER) return Se.MEDAL_NONE;
            var t = 0;
            return t += this.cache.getOutcome(Ie.PERIOD_1) == be.WIN ? 1 : 0, t += this.cache.getOutcome(Ie.PERIOD_2) == be.WIN ? 1 : 0, t += this.cache.getOutcome(Ie.PERIOD_3) == be.WIN ? 1 : 0, et.createEnumIndex(Se, t, null)
        },
        __class__: ge
    });
    var fe = function(t, e) {
        this._kernel = t, this.totalPlays = 0, this.debugMessage = "", this.unitType = ke.UNIT_B, this.levelType = Ae.LEVEL_1, this.reset()
    };
    (s["b10soc._Session._HelperCache"] = fe).__name__ = ["b10soc", "_Session", "_HelperCache"], fe.prototype = {
        reset: function() {
            this.medalType = Se.MEDAL_NONE, this.currentPeriod = Ie.PERIOD_1, this._period1Outcome = be.FUTURE, this._period2Outcome = be.FUTURE, this._period3Outcome = be.FUTURE
        },
        createOpponents: function(t) {
            this.playerTeam = new Ge(this._kernel, t), this.level3OpponentTeam = new Ge(this._kernel, this._suggestTeam([this.playerTeam], 1, 9)), this.level2OpponentTeam = new Ge(this._kernel, this._suggestTeam([this.playerTeam, this.level3OpponentTeam], 10, 20)), this.level1OpponentTeam = new Ge(this._kernel, this._suggestTeam([this.playerTeam, this.level3OpponentTeam, this.level2OpponentTeam], 21, Ue.__constructs__.slice().length))
        },
        _suggestTeam: function(i, t, e) {
            var s = this._getTeamVos(t, e).filter(function(t) {
                for (var e = 0; e < i.length;) {
                    var s = i[e];
                    if (++e, t.type == s.type) return !1;
                    if (t.kitType == s.kitType) return !1
                }
                return !0
            });
            return this._kernel.tools.shuffle(s)[0].type
        },
        _getTeamVos: function(t, e) {
            for (var s = [], i = t, n = e; i < n;) {
                var r = i++;
                s.push(new Ge(this._kernel, et.createEnumIndex(Ue, r, null)))
            }
            return s
        },
        getOutcome: function(t) {
            if (t == this.currentPeriod) return be.ACTIVE;
            switch (t[1]) {
                case 0:
                    return null;
                case 1:
                    return this._period1Outcome;
                case 2:
                    return this._period2Outcome;
                case 3:
                    return this._period3Outcome
            }
        },
        setOutcome: function(t, e) {
            switch (null == t && (t = this.currentPeriod), t[1]) {
                case 0:
                    break;
                case 1:
                    this._period1Outcome = e;
                    break;
                case 2:
                    this._period2Outcome = e;
                    break;
                case 3:
                    this._period3Outcome = e
            }
        },
        getOpponentTeam: function(t) {
            switch (t[1]) {
                case 0:
                    return this.level1OpponentTeam;
                case 1:
                    return this.level2OpponentTeam;
                case 2:
                    return this.level3OpponentTeam
            }
        },
        __class__: fe
    };
    var Ee = function() {};
    (s["b10soc.game.IRenderable"] = Ee).__name__ = ["b10soc", "game", "IRenderable"], Ee.prototype = {
        __class__: Ee
    };
    var ye = function(t, e, s, i) {
        this._rotation = 0, this.x = e, this.y = s, this._location = i, _e.call(this, t)
    };
    (s["b10soc.game.Ball"] = ye).__name__ = ["b10soc", "game", "Ball"], ye.__interfaces__ = [Ee], ye.__super__ = _e, ye.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this._source = this._assets.getAsset("assets/location/UnitASkins.png"), this.offsetY = 38
        },
        getSprite: function() {
            var t = 5 - (0 | this._rotation) % 6,
                e = t % 3,
                s = 2 < t ? 1 : 0;
            return {
                source: this._source,
                x: 864 + 32 * e,
                y: 880 + 40 * s,
                width: 32,
                height: 40,
                isFlip: !0
            }
        },
        setPosition: function(t, e, s) {
            this._rotation += s;
            this._tools;
            this.x = .875 * this.x + .125 * t;
            this._tools;
            this.y = .875 * this.y + .125 * e, this.y < 10 && (this.y = 10), this.y > this._location.vo.floorHeight && (this.y = this._location.vo.floorHeight)
        },
        getSpriteSkin: function() {
            return null
        },
        getSpriteHead: function() {
            return null
        },
        __class__: ye
    });
    var ve = function(t, e, s, i) {
        this._ease = .15, this.x = e, this.y = s, this.altitude = i, _e.call(this, t)
    };
    (s["b10soc.game.Camera"] = ve).__name__ = ["b10soc", "game", "Camera"], ve.__super__ = _e, ve.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this.yScaler = .5
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t);
            this._tools;
            var e = this.altitude *= .95;
            this.altitude = 500 < e ? 500 : e < 0 ? 0 : e
        },
        setPosition: function(t, e, s) {
            this._tools;
            var i = this._ease;
            this.x = this.x * (1 - i) + t * i;
            this._tools;
            var n = this._ease;
            this.y = this.y * (1 - n) + e * n, null != s && (this.altitude = s)
        },
        getCoords: function() {
            var t = this.x,
                e = this.y;
            return t += 10 * Math.sin(this._updates / 100), (e += 15 * Math.sin(this._updates / 40)) < this._getMinY() && (e = this._getMinY()), e > this._getMaxY() && (e = this._getMaxY()), {
                x: t + this._getSkewX(this.y),
                y: e * this.yScaler + this.altitude
            }
        },
        _getMinY: function() {
            return (-350 - this.altitude) / this.yScaler
        },
        _getMaxY: function() {
            return (258 - this.altitude) / this.yScaler
        },
        getRenderableCoordsFromWorldCoords: function(t, e) {
            return {
                x: t + this._getSkewX(e),
                y: e * this.yScaler
            }
        },
        getWorldCoordsFromScreenCoords: function(t, e) {
            var s = {
                x: -this.x + (t - this._getSkewX(e / this.yScaler)),
                y: -this.y + e / this.yScaler
            };
            if (this.y < this._getMinY()) {
                var i = this.y - this._getMinY();
                s.x -= this._getSkewX(i), s.y += i
            }
            return s
        },
        _getSkewX: function(t) {
            return .21 * t
        },
        __class__: ve
    });
    var me = function(t, e, s) {
        this.radius = 32, this.x = e, this.y = s, _e.call(this, t)
    };
    (s["b10soc.game.Coin"] = me).__name__ = ["b10soc", "game", "Coin"], me.__interfaces__ = [Ee], me.__super__ = _e, me.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this._frame = 0, this._seed = j.random(32), this._source = this._assets.getAsset("assets/location/Coin.png"), this.offsetY = 30
        },
        _disposer: function() {
            _e.prototype._disposer.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t), this._frame = (this._seed + this._updates) % 32
        },
        getSprite: function() {
            return {
                source: this._source,
                x: 32 * this._frame,
                y: 0,
                width: 32,
                height: 32,
                isFlip: !0
            }
        },
        isCollision: function(t, e, s) {
            var i = t - this.x,
                n = e - this.y,
                r = Math.sqrt(i * i + n * n),
                a = 200 * s,
                _ = (this._tools, r / a),
                o = 1 < _ ? 1 : _ < 0 ? 0 : _;
            return !(1 < o) && (r < this.radius || (this.x += i / r * (1 - o) * 25, this.y += n / r * (1 - o) * 25, !1))
        },
        getSpriteSkin: function() {
            var t = this.getSprite();
            return t.y += 32, t
        },
        getSpriteHead: function() {
            return null
        },
        __class__: me
    });
    var Te = s["b10soc.game.EKit"] = {
        __ename__: ["b10soc", "game", "EKit"],
        __constructs__: ["KIT_0", "KIT_1", "KIT_2", "KIT_3", "KIT_4", "KIT_5", "KIT_6", "KIT_7"]
    };
    Te.KIT_0 = ["KIT_0", 0], Te.KIT_0.toString = i, (Te.KIT_0.__enum__ = Te).KIT_1 = ["KIT_1", 1], Te.KIT_1.toString = i, (Te.KIT_1.__enum__ = Te).KIT_2 = ["KIT_2", 2], Te.KIT_2.toString = i, (Te.KIT_2.__enum__ = Te).KIT_3 = ["KIT_3", 3], Te.KIT_3.toString = i, (Te.KIT_3.__enum__ = Te).KIT_4 = ["KIT_4", 4], Te.KIT_4.toString = i, (Te.KIT_4.__enum__ = Te).KIT_5 = ["KIT_5", 5], Te.KIT_5.toString = i, (Te.KIT_5.__enum__ = Te).KIT_6 = ["KIT_6", 6], Te.KIT_6.toString = i, (Te.KIT_6.__enum__ = Te).KIT_7 = ["KIT_7", 7], Te.KIT_7.toString = i, Te.KIT_7.__enum__ = Te;
    var Ae = s["b10soc.game.ELevel"] = {
        __ename__: ["b10soc", "game", "ELevel"],
        __constructs__: ["LEVEL_1", "LEVEL_2", "LEVEL_3"]
    };
    Ae.LEVEL_1 = ["LEVEL_1", 0], Ae.LEVEL_1.toString = i, (Ae.LEVEL_1.__enum__ = Ae).LEVEL_2 = ["LEVEL_2", 1], Ae.LEVEL_2.toString = i, (Ae.LEVEL_2.__enum__ = Ae).LEVEL_3 = ["LEVEL_3", 2], Ae.LEVEL_3.toString = i, Ae.LEVEL_3.__enum__ = Ae;
    var we = s["b10soc.game.ELocation"] = {
        __ename__: ["b10soc", "game", "ELocation"],
        __constructs__: ["LOCATION_A"]
    };
    we.LOCATION_A = ["LOCATION_A", 0], we.LOCATION_A.toString = i, we.LOCATION_A.__enum__ = we;
    var Se = s["b10soc.game.EMedal"] = {
        __ename__: ["b10soc", "game", "EMedal"],
        __constructs__: ["MEDAL_NONE", "MEDAL_BRONZE", "MEDAL_SILVER", "MEDAL_GOLD"]
    };
    Se.MEDAL_NONE = ["MEDAL_NONE", 0], Se.MEDAL_NONE.toString = i, (Se.MEDAL_NONE.__enum__ = Se).MEDAL_BRONZE = ["MEDAL_BRONZE", 1], Se.MEDAL_BRONZE.toString = i, (Se.MEDAL_BRONZE.__enum__ = Se).MEDAL_SILVER = ["MEDAL_SILVER", 2], Se.MEDAL_SILVER.toString = i, (Se.MEDAL_SILVER.__enum__ = Se).MEDAL_GOLD = ["MEDAL_GOLD", 3], Se.MEDAL_GOLD.toString = i, Se.MEDAL_GOLD.__enum__ = Se;
    var be = s["b10soc.game.EOutcome"] = {
        __ename__: ["b10soc", "game", "EOutcome"],
        __constructs__: ["FUTURE", "ACTIVE", "WIN", "LOSS"]
    };
    be.FUTURE = ["FUTURE", 0], be.FUTURE.toString = i, (be.FUTURE.__enum__ = be).ACTIVE = ["ACTIVE", 1], be.ACTIVE.toString = i, (be.ACTIVE.__enum__ = be).WIN = ["WIN", 2], be.WIN.toString = i, (be.WIN.__enum__ = be).LOSS = ["LOSS", 3], be.LOSS.toString = i, be.LOSS.__enum__ = be;
    var Ie = s["b10soc.game.EPeriod"] = {
        __ename__: ["b10soc", "game", "EPeriod"],
        __constructs__: ["GAME_OVER", "PERIOD_1", "PERIOD_2", "PERIOD_3"]
    };
    Ie.GAME_OVER = ["GAME_OVER", 0], Ie.GAME_OVER.toString = i, (Ie.GAME_OVER.__enum__ = Ie).PERIOD_1 = ["PERIOD_1", 1], Ie.PERIOD_1.toString = i, (Ie.PERIOD_1.__enum__ = Ie).PERIOD_2 = ["PERIOD_2", 2], Ie.PERIOD_2.toString = i, (Ie.PERIOD_2.__enum__ = Ie).PERIOD_3 = ["PERIOD_3", 3], Ie.PERIOD_3.toString = i, Ie.PERIOD_3.__enum__ = Ie;
    var Ce = s["b10soc.game.EPose"] = {
        __ename__: ["b10soc", "game", "EPose"],
        __constructs__: ["SLIDE", "RUN_1", "RUN_2", "RUN_3", "RUN_4", "RUN_5", "RUN_6", "RUN_7", "RUN_8", "RUN_9", "RUN_10", "LOSER"]
    };
    Ce.SLIDE = ["SLIDE", 0], Ce.SLIDE.toString = i, (Ce.SLIDE.__enum__ = Ce).RUN_1 = ["RUN_1", 1], Ce.RUN_1.toString = i, (Ce.RUN_1.__enum__ = Ce).RUN_2 = ["RUN_2", 2], Ce.RUN_2.toString = i, (Ce.RUN_2.__enum__ = Ce).RUN_3 = ["RUN_3", 3], Ce.RUN_3.toString = i, (Ce.RUN_3.__enum__ = Ce).RUN_4 = ["RUN_4", 4], Ce.RUN_4.toString = i, (Ce.RUN_4.__enum__ = Ce).RUN_5 = ["RUN_5", 5], Ce.RUN_5.toString = i, (Ce.RUN_5.__enum__ = Ce).RUN_6 = ["RUN_6", 6], Ce.RUN_6.toString = i, (Ce.RUN_6.__enum__ = Ce).RUN_7 = ["RUN_7", 7], Ce.RUN_7.toString = i, (Ce.RUN_7.__enum__ = Ce).RUN_8 = ["RUN_8", 8], Ce.RUN_8.toString = i, (Ce.RUN_8.__enum__ = Ce).RUN_9 = ["RUN_9", 9], Ce.RUN_9.toString = i, (Ce.RUN_9.__enum__ = Ce).RUN_10 = ["RUN_10", 10], Ce.RUN_10.toString = i, (Ce.RUN_10.__enum__ = Ce).LOSER = ["LOSER", 11], Ce.LOSER.toString = i, Ce.LOSER.__enum__ = Ce;
    var Ue = s["b10soc.game.ETeam"] = {
        __ename__: ["b10soc", "game", "ETeam"],
        __constructs__: ["TEAM_1", "TEAM_2", "TEAM_3", "TEAM_4", "TEAM_5", "TEAM_6", "TEAM_7", "TEAM_8", "TEAM_9", "TEAM_10", "TEAM_11", "TEAM_12", "TEAM_13", "TEAM_14", "TEAM_15", "TEAM_16", "TEAM_17", "TEAM_18", "TEAM_19", "TEAM_20", "TEAM_21", "TEAM_22", "TEAM_23", "TEAM_24", "TEAM_25", "TEAM_26", "TEAM_27", "TEAM_28", "TEAM_29", "TEAM_30", "TEAM_31", "TEAM_32", "TEAM_33", "TEAM_34", "TEAM_35", "TEAM_36", "TEAM_37", "TEAM_38", "TEAM_39", "TEAM_40", "TEAM_41", "TEAM_42", "TEAM_43", "TEAM_44", "TEAM_45", "TEAM_46", "TEAM_47", "TEAM_48", "TEAM_49", "TEAM_50", "TEAM_51", "TEAM_52", "TEAM_53", "TEAM_54", "TEAM_55", "TEAM_56", "TEAM_57", "TEAM_58", "TEAM_59", "TEAM_60", "TEAM_61", "TEAM_62", "TEAM_63", "TEAM_64", "TEAM_65", "TEAM_66", "TEAM_67", "TEAM_68", "TEAM_69", "TEAM_70"]
    };
    Ue.TEAM_1 = ["TEAM_1", 0], Ue.TEAM_1.toString = i, (Ue.TEAM_1.__enum__ = Ue).TEAM_2 = ["TEAM_2", 1], Ue.TEAM_2.toString = i, (Ue.TEAM_2.__enum__ = Ue).TEAM_3 = ["TEAM_3", 2], Ue.TEAM_3.toString = i, (Ue.TEAM_3.__enum__ = Ue).TEAM_4 = ["TEAM_4", 3], Ue.TEAM_4.toString = i, (Ue.TEAM_4.__enum__ = Ue).TEAM_5 = ["TEAM_5", 4], Ue.TEAM_5.toString = i, (Ue.TEAM_5.__enum__ = Ue).TEAM_6 = ["TEAM_6", 5], Ue.TEAM_6.toString = i, (Ue.TEAM_6.__enum__ = Ue).TEAM_7 = ["TEAM_7", 6], Ue.TEAM_7.toString = i, (Ue.TEAM_7.__enum__ = Ue).TEAM_8 = ["TEAM_8", 7], Ue.TEAM_8.toString = i, (Ue.TEAM_8.__enum__ = Ue).TEAM_9 = ["TEAM_9", 8], Ue.TEAM_9.toString = i, (Ue.TEAM_9.__enum__ = Ue).TEAM_10 = ["TEAM_10", 9], Ue.TEAM_10.toString = i, (Ue.TEAM_10.__enum__ = Ue).TEAM_11 = ["TEAM_11", 10], Ue.TEAM_11.toString = i, (Ue.TEAM_11.__enum__ = Ue).TEAM_12 = ["TEAM_12", 11], Ue.TEAM_12.toString = i, (Ue.TEAM_12.__enum__ = Ue).TEAM_13 = ["TEAM_13", 12], Ue.TEAM_13.toString = i, (Ue.TEAM_13.__enum__ = Ue).TEAM_14 = ["TEAM_14", 13], Ue.TEAM_14.toString = i, (Ue.TEAM_14.__enum__ = Ue).TEAM_15 = ["TEAM_15", 14], Ue.TEAM_15.toString = i, (Ue.TEAM_15.__enum__ = Ue).TEAM_16 = ["TEAM_16", 15], Ue.TEAM_16.toString = i, (Ue.TEAM_16.__enum__ = Ue).TEAM_17 = ["TEAM_17", 16], Ue.TEAM_17.toString = i, (Ue.TEAM_17.__enum__ = Ue).TEAM_18 = ["TEAM_18", 17], Ue.TEAM_18.toString = i, (Ue.TEAM_18.__enum__ = Ue).TEAM_19 = ["TEAM_19", 18], Ue.TEAM_19.toString = i, (Ue.TEAM_19.__enum__ = Ue).TEAM_20 = ["TEAM_20", 19], Ue.TEAM_20.toString = i, (Ue.TEAM_20.__enum__ = Ue).TEAM_21 = ["TEAM_21", 20], Ue.TEAM_21.toString = i, (Ue.TEAM_21.__enum__ = Ue).TEAM_22 = ["TEAM_22", 21], Ue.TEAM_22.toString = i, (Ue.TEAM_22.__enum__ = Ue).TEAM_23 = ["TEAM_23", 22], Ue.TEAM_23.toString = i, (Ue.TEAM_23.__enum__ = Ue).TEAM_24 = ["TEAM_24", 23], Ue.TEAM_24.toString = i, (Ue.TEAM_24.__enum__ = Ue).TEAM_25 = ["TEAM_25", 24], Ue.TEAM_25.toString = i, (Ue.TEAM_25.__enum__ = Ue).TEAM_26 = ["TEAM_26", 25], Ue.TEAM_26.toString = i, (Ue.TEAM_26.__enum__ = Ue).TEAM_27 = ["TEAM_27", 26], Ue.TEAM_27.toString = i, (Ue.TEAM_27.__enum__ = Ue).TEAM_28 = ["TEAM_28", 27], Ue.TEAM_28.toString = i, (Ue.TEAM_28.__enum__ = Ue).TEAM_29 = ["TEAM_29", 28], Ue.TEAM_29.toString = i, (Ue.TEAM_29.__enum__ = Ue).TEAM_30 = ["TEAM_30", 29], Ue.TEAM_30.toString = i, (Ue.TEAM_30.__enum__ = Ue).TEAM_31 = ["TEAM_31", 30], Ue.TEAM_31.toString = i, (Ue.TEAM_31.__enum__ = Ue).TEAM_32 = ["TEAM_32", 31], Ue.TEAM_32.toString = i, (Ue.TEAM_32.__enum__ = Ue).TEAM_33 = ["TEAM_33", 32], Ue.TEAM_33.toString = i, (Ue.TEAM_33.__enum__ = Ue).TEAM_34 = ["TEAM_34", 33], Ue.TEAM_34.toString = i, (Ue.TEAM_34.__enum__ = Ue).TEAM_35 = ["TEAM_35", 34], Ue.TEAM_35.toString = i, (Ue.TEAM_35.__enum__ = Ue).TEAM_36 = ["TEAM_36", 35], Ue.TEAM_36.toString = i, (Ue.TEAM_36.__enum__ = Ue).TEAM_37 = ["TEAM_37", 36], Ue.TEAM_37.toString = i, (Ue.TEAM_37.__enum__ = Ue).TEAM_38 = ["TEAM_38", 37], Ue.TEAM_38.toString = i, (Ue.TEAM_38.__enum__ = Ue).TEAM_39 = ["TEAM_39", 38], Ue.TEAM_39.toString = i, (Ue.TEAM_39.__enum__ = Ue).TEAM_40 = ["TEAM_40", 39], Ue.TEAM_40.toString = i, (Ue.TEAM_40.__enum__ = Ue).TEAM_41 = ["TEAM_41", 40], Ue.TEAM_41.toString = i, (Ue.TEAM_41.__enum__ = Ue).TEAM_42 = ["TEAM_42", 41], Ue.TEAM_42.toString = i, (Ue.TEAM_42.__enum__ = Ue).TEAM_43 = ["TEAM_43", 42], Ue.TEAM_43.toString = i, (Ue.TEAM_43.__enum__ = Ue).TEAM_44 = ["TEAM_44", 43], Ue.TEAM_44.toString = i, (Ue.TEAM_44.__enum__ = Ue).TEAM_45 = ["TEAM_45", 44], Ue.TEAM_45.toString = i, (Ue.TEAM_45.__enum__ = Ue).TEAM_46 = ["TEAM_46", 45], Ue.TEAM_46.toString = i, (Ue.TEAM_46.__enum__ = Ue).TEAM_47 = ["TEAM_47", 46], Ue.TEAM_47.toString = i, (Ue.TEAM_47.__enum__ = Ue).TEAM_48 = ["TEAM_48", 47], Ue.TEAM_48.toString = i, (Ue.TEAM_48.__enum__ = Ue).TEAM_49 = ["TEAM_49", 48], Ue.TEAM_49.toString = i, (Ue.TEAM_49.__enum__ = Ue).TEAM_50 = ["TEAM_50", 49], Ue.TEAM_50.toString = i, (Ue.TEAM_50.__enum__ = Ue).TEAM_51 = ["TEAM_51", 50], Ue.TEAM_51.toString = i, (Ue.TEAM_51.__enum__ = Ue).TEAM_52 = ["TEAM_52", 51], Ue.TEAM_52.toString = i, (Ue.TEAM_52.__enum__ = Ue).TEAM_53 = ["TEAM_53", 52], Ue.TEAM_53.toString = i, (Ue.TEAM_53.__enum__ = Ue).TEAM_54 = ["TEAM_54", 53], Ue.TEAM_54.toString = i, (Ue.TEAM_54.__enum__ = Ue).TEAM_55 = ["TEAM_55", 54], Ue.TEAM_55.toString = i, (Ue.TEAM_55.__enum__ = Ue).TEAM_56 = ["TEAM_56", 55], Ue.TEAM_56.toString = i, (Ue.TEAM_56.__enum__ = Ue).TEAM_57 = ["TEAM_57", 56], Ue.TEAM_57.toString = i, (Ue.TEAM_57.__enum__ = Ue).TEAM_58 = ["TEAM_58", 57], Ue.TEAM_58.toString = i, (Ue.TEAM_58.__enum__ = Ue).TEAM_59 = ["TEAM_59", 58], Ue.TEAM_59.toString = i, (Ue.TEAM_59.__enum__ = Ue).TEAM_60 = ["TEAM_60", 59], Ue.TEAM_60.toString = i, (Ue.TEAM_60.__enum__ = Ue).TEAM_61 = ["TEAM_61", 60], Ue.TEAM_61.toString = i, (Ue.TEAM_61.__enum__ = Ue).TEAM_62 = ["TEAM_62", 61], Ue.TEAM_62.toString = i, (Ue.TEAM_62.__enum__ = Ue).TEAM_63 = ["TEAM_63", 62], Ue.TEAM_63.toString = i, (Ue.TEAM_63.__enum__ = Ue).TEAM_64 = ["TEAM_64", 63], Ue.TEAM_64.toString = i, (Ue.TEAM_64.__enum__ = Ue).TEAM_65 = ["TEAM_65", 64], Ue.TEAM_65.toString = i, (Ue.TEAM_65.__enum__ = Ue).TEAM_66 = ["TEAM_66", 65], Ue.TEAM_66.toString = i, (Ue.TEAM_66.__enum__ = Ue).TEAM_67 = ["TEAM_67", 66], Ue.TEAM_67.toString = i, (Ue.TEAM_67.__enum__ = Ue).TEAM_68 = ["TEAM_68", 67], Ue.TEAM_68.toString = i, (Ue.TEAM_68.__enum__ = Ue).TEAM_69 = ["TEAM_69", 68], Ue.TEAM_69.toString = i, (Ue.TEAM_69.__enum__ = Ue).TEAM_70 = ["TEAM_70", 69], Ue.TEAM_70.toString = i, Ue.TEAM_70.__enum__ = Ue;
    var ke = s["b10soc.game.EUnit"] = {
        __ename__: ["b10soc", "game", "EUnit"],
        __constructs__: ["UNIT_A", "UNIT_B"]
    };
    ke.UNIT_A = ["UNIT_A", 0], ke.UNIT_A.toString = i, (ke.UNIT_A.__enum__ = ke).UNIT_B = ["UNIT_B", 1], ke.UNIT_B.toString = i, ke.UNIT_B.__enum__ = ke;
    var Me = s["b10soc.game.EUpgrade"] = {
        __ename__: ["b10soc", "game", "EUpgrade"],
        __constructs__: ["UPGRADE_MOVEMENT", "UPGRADE_SHOOTING", "UPGRADE_DEFENSE", "UPGRADE_MAGNET"]
    };
    Me.UPGRADE_MOVEMENT = ["UPGRADE_MOVEMENT", 0], Me.UPGRADE_MOVEMENT.toString = i, (Me.UPGRADE_MOVEMENT.__enum__ = Me).UPGRADE_SHOOTING = ["UPGRADE_SHOOTING", 1], Me.UPGRADE_SHOOTING.toString = i, (Me.UPGRADE_SHOOTING.__enum__ = Me).UPGRADE_DEFENSE = ["UPGRADE_DEFENSE", 2], Me.UPGRADE_DEFENSE.toString = i, (Me.UPGRADE_DEFENSE.__enum__ = Me).UPGRADE_MAGNET = ["UPGRADE_MAGNET", 3], Me.UPGRADE_MAGNET.toString = i, Me.UPGRADE_MAGNET.__enum__ = Me;
    var xe = function(t, e, s, i, n) {
        this._isShot = !1, this._levelVo = e, this._unitVo = s, this._hud = i, this._callback = n, _e.call(this, t)
    };
    (s["b10soc.game.Goal"] = xe).__name__ = ["b10soc", "game", "Goal"], xe.__super__ = _e, xe.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this.addEntity(new ns(this._kernel, this._assets.getAsset("assets/location/Goal.png")), null, !0, 1), this.addEntity(this._goalie = new Re(this._kernel, this._levelVo), null, !0, 3);
            var t = mi(this, this._shoot);
            this.addEntity(this._tweezer = new ri(this._kernel, mi(yi = this._hud, yi.configureTimer), this._levelVo.goalTime, 0, 0, 1e3 * this._levelVo.goalTime | 0, 0, null, null, function() {
                t(!1)
            })), this._hud.goalTransition(!1), this._biasShooting = this._unitVo.getBias(Me.UPGRADE_SHOOTING, .8, 1.2), this._kernel.audio.start("CrowdScore", Xt.EFFECTS, 1, 0, 1), this._kernel.audio.start("Applause", Xt.EFFECTS, -1, 0, 1)
        },
        _updater: function(t) {
            if (null == t && (t = 0), _e.prototype._updater.call(this, t), !this._isShot) {
                var e = Math.round(12 * (1 - Math.abs(Math.sin(this._updates / (1.2 * this._levelVo.goalTime))))) / 12,
                    s = Math.round(12 * this._levelVo.goalScoreZone / this._biasShooting) / 12;
                this._hud.configurePower(e, s), 20 < this._updates && (this._kernel.inputs.joypad.getIsButtonPress(Zt.FIRE) || this._kernel.inputs.joypad.getIsButtonPress(Zt.UP) || this._kernel.inputs.joypad.getIsButtonPress(Zt.LEFT) || this._kernel.inputs.joypad.getIsButtonPress(Zt.RIGHT) || this._kernel.inputs.joypad.getIsButtonPress(Zt.DOWN) || this._kernel.inputs.mouse.getIsButtonDown() && this._kernel.inputs.mouse.getButtonDownDuration() < 100) && (this._shoot(s < e), this._isShot = !0)
            }
        },
        _disposer: function() {
            this._hud.goalTransition(!0), _e.prototype._disposer.call(this)
        },
        _shoot: function(t) {
            if (!this._isShot) {
                this._isShot = !0, this._kernel.overlay.flash(500, !0, 1, t ? 65280 : 16711680), this._kernel.audio.stop("Applause", Xt.EFFECTS), this._kernel.audio.start(t ? "CrowdScore" : "CrowdMiss", Xt.EFFECTS, 1, 0, 1), t && this._kernel.audio.start("Whistle", Xt.EFFECTS, 1, 0, 1), this._kernel.audio.start("Shot", Xt.EFFECTS, 1, 0, 1);
                var e = this._tweezer;
                e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._goalie.configure(t ? be.WIN : be.LOSS), null != this._callback && (this._callback(t), this._callback = null)
            }
        },
        __class__: xe
    });
    var Re = function(t, e) {
        this._isPosed = !1, this._HEIGHT = 200, this._WIDTH = 200, this._levelVo = e, _e.call(this, t)
    };
    (s["b10soc.game.Goalie"] = Re).__name__ = ["b10soc", "game", "Goalie"], Re.__super__ = _e, Re.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this);
            var t = this._assets.getAsset(this._session.cache.getOpponentTeam(this._levelVo.type).kitType[1] < Te.__constructs__.slice().length / 2 ? "assets/location/Goalies1.png" : "assets/location/Goalies2.png");
            this._bitmap = new createjs.Bitmap(t), this._bitmap.x = .5 * (this._factory.width - this._WIDTH), this._bitmap.y = 55, Math.random() < .5 && (this._bitmap.scaleX = -1, this._bitmap.regX = this._WIDTH), this._ball = new createjs.Bitmap(t), this._ball.sourceRect = new createjs.Rectangle(800, 800, this._WIDTH, this._HEIGHT), this._ball.x = .5 * (this._factory.width - this._WIDTH), this._ball.y = 165, this.configure(be.ACTIVE), this._context.addChild(this._bitmap), this._context.addChild(this._ball)
        },
        _updater: function(t) {
            if (null == t && (t = 0), _e.prototype._updater.call(this, t), this._ball.visible = !this._isPosed, !this._isPosed) {
                this._bitmap.x = .5 * (this._factory.width - this._WIDTH) + 10 * Math.sin(this._updates / 20);
                var e = Math.random();
                this._bitmap.y = 55 + e
            }
        },
        configure: function(t) {
            var e = this._session.cache.getOpponentTeam(this._levelVo.type).kitType;
            this._bitmap.sourceRect = this._getRectangle(e, this._session.cache.unitType, t)
        },
        _disposer: function() {
            _e.prototype._disposer.call(this)
        },
        _getRectangle: function(t, e, s) {
            var i, n = e == ke.UNIT_A;
            switch (s[1]) {
                case 2:
                    switch (this._isPosed = !0, t[1]) {
                        case 0:
                        case 4:
                            i = n ? 1 : 4;
                            break;
                        case 1:
                        case 5:
                            i = n ? 7 : 10;
                            break;
                        case 2:
                        case 6:
                            i = n ? 13 : 16;
                            break;
                        case 3:
                        case 7:
                            i = n ? 19 : 22
                    }
                    break;
                case 3:
                    switch (this._isPosed = !0, t[1]) {
                        case 0:
                        case 4:
                            i = n ? 2 : 5;
                            break;
                        case 1:
                        case 5:
                            i = n ? 8 : 11;
                            break;
                        case 2:
                        case 6:
                            i = n ? 14 : 17;
                            break;
                        case 3:
                        case 7:
                            i = n ? 20 : 23
                    }
                    break;
                default:
                    switch (t[1]) {
                        case 0:
                        case 4:
                            i = n ? 0 : 3;
                            break;
                        case 1:
                        case 5:
                            i = n ? 6 : 9;
                            break;
                        case 2:
                        case 6:
                            i = n ? 12 : 15;
                            break;
                        case 3:
                        case 7:
                            i = n ? 18 : 21
                    }
            }
            var r = i % 5,
                a = Math.floor(i / 5);
            return new createjs.Rectangle(r * this._WIDTH, a * this._HEIGHT, this._WIDTH, this._HEIGHT)
        },
        __class__: Re
    });
    var De = function() {};
    (s["b10soc.game.ICollidable"] = De).__name__ = ["b10soc", "game", "ICollidable"], De.prototype = {
        __class__: De
    };
    var Pe = function(t, e, s) {
        oe.call(this, t), this.type = e, this.title = this._getTitle(), this.locationType = we.LOCATION_A, this.medalType = this._session.getMedal(this.type, s), this.isLocked = this._getIsLocked(s), this.isNew = this.medalType == Se.MEDAL_NONE && !this.isLocked, this.message = this._getMessage(), this.goalDistance = this._getGoalDistance(), this.goalTime = this._getGoalTime(), this.goalScoreZone = this._getGoalScoreZone(), this.opponentStrength = this._getOpponentStrength(), this.opponentSpeed = this._getOpponentSpeed(), this.opponentReleaseDistance = this._getOpponentReleaseDistance()
    };
    (s["b10soc.game.LevelVo"] = Pe).__name__ = ["b10soc", "game", "LevelVo"], Pe.__super__ = oe, Pe.prototype = t(oe.prototype, {
        _getTitle: function() {
            var t;
            switch (this.type[1]) {
                case 0:
                    t = "gui.levels.level1";
                    break;
                case 1:
                    t = "gui.levels.level2";
                    break;
                case 2:
                    t = "gui.levels.level3"
            }
            return this._kernel.getConfig(t)
        },
        _getIsLocked: function(t) {
            switch (this.type[1]) {
                case 0:
                    return !1;
                case 1:
                    return this._session.getMedal(Ae.LEVEL_1, t)[1] <= Se.MEDAL_NONE[1];
                case 2:
                    return this._session.getMedal(Ae.LEVEL_2, t)[1] <= Se.MEDAL_NONE[1]
            }
        },
        _getMessage: function() {
            var t, e = this._kernel.getConfig(this.isLocked ? "gui.scenes.selectLevel.messageLocked" : "gui.scenes.selectLevel.messageNew");
            switch (this.type[1]) {
                case 0:
                    t = "";
                    break;
                case 1:
                    t = "gui.levels.level1";
                    break;
                case 2:
                    t = "gui.levels.level2"
            }
            var s = this._kernel.getConfig(t);
            return E.replace(e, "__PREVIOUS_LEVEL__", s)
        },
        _getGoalDistance: function() {
            var t;
            switch (this.type[1]) {
                case 0:
                    t = 4;
                    break;
                case 1:
                    t = 6;
                    break;
                case 2:
                    t = 8
            }
            return 1024 * t
        },
        _getGoalTime: function() {
            switch (this.type[1]) {
                case 0:
                    return 10;
                case 1:
                    return 8;
                case 2:
                    return 6
            }
        },
        _getGoalScoreZone: function() {
            switch (this.type[1]) {
                case 0:
                    return .2;
                case 1:
                    return .5;
                case 2:
                    return .75
            }
        },
        _getOpponentStrength: function() {
            switch (this.type[1]) {
                case 0:
                    return .1;
                case 1:
                    return .2;
                case 2:
                    return .3
            }
        },
        _getOpponentSpeed: function() {
            switch (this.type[1]) {
                case 0:
                    return .9;
                case 1:
                    return .95;
                case 2:
                    return 1
            }
        },
        _getOpponentReleaseDistance: function() {
            var t;
            switch (this.type[1]) {
                case 0:
                    t = 1.5;
                    break;
                case 1:
                    t = 1.25;
                    break;
                case 2:
                    t = 1.125
            }
            return 256 * Math.round(t)
        },
        __class__: Pe
    });
    var Ne = function(t, e, s) {
        this.levelVo = e, this._unitVo = s, this.vo = new Be(t, this.levelVo.locationType), _e.call(this, t)
    };
    (s["b10soc.game.Location"] = Ne).__name__ = ["b10soc", "game", "Location"], Ne.__super__ = _e, Ne.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this._createCoinReleases(), this._createOpponentReleases(), this.addEntity(this.ball = new ye(this._kernel, 0, .5 * this.vo.floorHeight, this)), this.addEntity(this.player = new Le(this._kernel, this._unitVo, this)), this.addEntity(this.camera = new ve(this._kernel, -.25 * this._factory.width, -this.player.y, 600)), this.addEntity(this._renderer = new Fe(this._kernel, this, this._kernel.factory.width, this._kernel.factory.height), null, !0), this._kernel.audio.start("Applause", Xt.EFFECTS, -1, 0, 0)
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t);
            for (var e = this.player.x + this._factory.width + 200; 0 < this._coinReleases.length && e > this._coinReleases[0].x;) {
                var s = this._coinReleases.shift();
                this._createCoin(s.x, s.y)
            }
            for (; 0 < this._opponentReleases.length && e > this._opponentReleases[0].x;) {
                var i = this._opponentReleases.shift();
                this._createOpponent(i.x, i.y)
            }
            this._updates % 10 == 0 && (this.player.isDefeated ? this._kernel.audio.transform("Applause", Xt.EFFECTS, .25) : this._kernel.audio.transform("Applause", Xt.EFFECTS, .25 + .5 * this.player.x / this.levelVo.goalDistance))
        },
        _disposer: function() {
            this._kernel.audio.stop("Applause", Xt.EFFECTS), _e.prototype._disposer.call(this)
        },
        _createCoinReleases: function() {
            this._coinReleases = [];
            var t = 0;
            for (t = 128, this._coinReleases.push({
                    x: t,
                    y: .375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .625 * this.vo.floorHeight
                }), t += 32, this._coinReleases.push({
                    x: t,
                    y: .375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .4375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .5625 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .625 * this.vo.floorHeight
                }), t += 32, this._coinReleases.push({
                    x: t,
                    y: .375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .4375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .5 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .5625 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .625 * this.vo.floorHeight
                }), t += 32, this._coinReleases.push({
                    x: t,
                    y: .4375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .5 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: t,
                    y: .5625 * this.vo.floorHeight
                }), t += 32, this._coinReleases.push({
                    x: t,
                    y: .5 * this.vo.floorHeight
                }), t = 512; t < this.levelVo.goalDistance - 256;) t += 128, this._coinReleases.push({
                x: t + 256 * (Math.random() - .5),
                y: Math.random() * this.vo.floorHeight
            });
            for (var e = 0; e < 10;) {
                var s = e++;
                this._coinReleases.push({
                    x: this.levelVo.goalDistance,
                    y: s / 10 * this.vo.floorHeight
                })
            }
        },
        _createOpponentReleases: function() {
            this._opponentReleases = [];
            for (var t = 640; t < this.levelVo.goalDistance;) t += this.levelVo.opponentReleaseDistance, this._opponentReleases.push({
                x: t,
                y: Math.random() * this.vo.floorHeight
            })
        },
        _createCoin: function(t, e) {
            var s = new me(this._kernel, t, e);
            return this.addEntity(s), s
        },
        _createOpponent: function(t, e) {
            var s = new Oe(this._kernel, t, e, this);
            return this.addEntity(s), s
        },
        getRenderables: function() {
            return this.getEntitiesByClass(Ee)
        },
        getDistanceToGoal: function() {
            return 0 | Math.max(this.levelVo.goalDistance - this.player.x, 0)
        },
        collide: function(t, e) {
            if (t == e) return null;
            if (t.isDefeated || e.isDefeated) return null;
            var s = t.x - e.x,
                i = t.y - e.y;
            if (Math.sqrt(s * s + i * i) > t.radius + e.radius) return null;
            var n = t,
                r = e,
                a = (n.x * r.radius + r.x * n.radius) / (n.radius + r.radius),
                _ = (n.y * r.radius + r.y * n.radius) / (n.radius + r.radius),
                o = (n.speed.x * (n.mass - r.mass) + 2 * r.mass * r.speed.x) / (n.mass + r.mass),
                h = (n.speed.y * (n.mass - r.mass) + 2 * r.mass * r.speed.y) / (n.mass + r.mass),
                l = (r.speed.x * (r.mass - n.mass) + 2 * n.mass * n.speed.x) / (n.mass + r.mass),
                u = (r.speed.y * (r.mass - n.mass) + 2 * n.mass * n.speed.y) / (n.mass + r.mass);
            return n.speed.x = o, n.speed.y = h, r.speed.x = l, r.speed.y = u, n.x = n.prevPosition.x, n.y = n.prevPosition.y, r.x = r.prevPosition.x, r.y = r.prevPosition.y, {
                x: a,
                y: _
            }
        },
        isCollidingWithBoards: function(t, e) {
            var s = !1;
            return t.x < -256 && (t.x = -256, t.speed.x *= -e, s = !0), t.y < 10 && (t.y = 10, t.speed.y *= -e, s = !0), 1024 < t.y && (t.y = 1024, t.speed.y *= -e, s = !0), s
        },
        __class__: Ne
    });
    var Be = function(t, e) {
        oe.call(this, t), this.type = e, this.floorWidth = 2048, this.floorHeight = 1024, this.imageBoardsBg = this._assets.getAsset("assets/location/BoardsBg.png"), this.imageBoardsFg = this._assets.getAsset("assets/location/BoardsFg.png"), this.imageCrowdBg = this._assets.getAsset("assets/location/CrowdBg.png"), this.imageCrowdFg = this._assets.getAsset("assets/location/CrowdFg.png"), this.imageGround = this._assets.getAsset("assets/location/Ground.png"), this.parallaxCrowdBg = .5, this.parallaxCrowdFg = 2
    };
    (s["b10soc.game.LocationVo"] = Be).__name__ = ["b10soc", "game", "LocationVo"], Be.__super__ = oe, Be.prototype = t(oe.prototype, {
        __class__: Be
    });
    var Oe = function(t, e, s, i) {
        this._slideCount = 0, this._lastFlip = 0, this._isFlip = !0, this.isDefeated = !1, this.mass = 1, this.radius = 15, this.x = e, this.y = s, this._location = i, _e.call(this, t)
    };
    (s["b10soc.game.Opponent"] = Oe).__name__ = ["b10soc", "game", "Opponent"], Oe.__interfaces__ = [De, Ee], Oe.__super__ = _e, Oe.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this);
            var t = this._session.cache.getOpponentTeam(this._location.levelVo.type);
            this._genderNumber = this._session.cache.unitType[1], this._kitIndex = t.kitType[1], this._skinBias = t.skinBias;
            var e = 0 == this._genderNumber;
            this._source = this._assets.getAsset(this._kitIndex < Te.__constructs__.slice().length / 2 ? e ? "assets/location/UnitAKits1.png" : "assets/location/UnitBKits1.png" : e ? "assets/location/UnitAKits2.png" : "assets/location/UnitBKits2.png"), this._sourceSkin = this._assets.getAsset(e ? "assets/location/UnitASkins.png" : "assets/location/UnitBSkins.png"), this.offsetY = 102, this._levelNumber = this._location.levelVo.type[1] + 1, this.prevPosition = {
                x: this.x,
                y: this.y
            }, this.speed = {
                x: 0,
                y: 0
            }, this._velocity = (.2 * Math.random() + .8) * this._location.levelVo.opponentSpeed, this._seed = j.random(32), this._isForward = Math.random() < (this._session.cache.currentPeriod[1] - 1) / 30
        },
        _disposer: function() {
            _e.prototype._disposer.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t), this.prevPosition.x = this.x, this.prevPosition.y = this.y, this.isDefeated ? (this.speed.x *= .9, this.speed.y *= .9) : this._aimTowards(this._location.player.isDefeated || 8e3 < this._age ? null : this._location.player), this.x += this.speed.x, this.y += this.speed.y, this.y += (Math.random() - .5) * this.speed.x * .5, this._location.isCollidingWithBoards(this, 1);
            for (var e = 0, s = this._location.getEntitiesByClass(Oe); e < s.length;) {
                var i = s[e];
                ++e, this._location.collide(this, i)
            }
        },
        _aimTowards: function(t) {
            var e = this._isForward ? 1 : -1,
                s = 0;
            null != t && (e = t.x - this.x + (this._isForward ? 32 * Math.abs(this._location.player.speed.x) : 0), s = t.y - this.y), this.speed.x += (0 < e ? 1 : -1) * this._velocity, this.speed.y += (0 < s ? 1 : -1) * this._velocity, null != t ? (this.speed.x *= .905, this.speed.y *= .905) : (this.speed.x *= .975, this.speed.y *= .975)
        },
        getSprite: function() {
            if (this._pose = Ce.LOSER, !this.isDefeated) {
                this._pose = Ce.SLIDE;
                var t = [Ce.RUN_1, Ce.RUN_2, Ce.RUN_3, Ce.RUN_4, Ce.RUN_5, Ce.RUN_6, Ce.RUN_7, Ce.RUN_8, Ce.RUN_9, Ce.RUN_10];
                Math.sqrt(this.speed.x * this.speed.x + this.speed.y * this.speed.y) < 3 || (this._pose = t[((this._updates + this._seed) / 2 | 0) % t.length]), 0 < this._slideCount && (this._slideCount--, this._pose = Ce.SLIDE)
            }
            var e = this._getSpriteIndex() + this._kitIndex % 4 * 12,
                s = e % 6,
                i = Math.floor(e / 6);
            return {
                source: this._source,
                x: 160 * s,
                y: 110 * i,
                width: 160,
                height: 110,
                isFlip: this._getIsFlip()
            }
        },
        _getSpriteIndex: function() {
            switch (this._pose[1]) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
                case 5:
                    return 5;
                case 6:
                    return 6;
                case 7:
                    return 7;
                case 8:
                    return 8;
                case 9:
                    return 9;
                case 10:
                    return 10;
                case 11:
                    return 11
            }
        },
        getSpriteSkin: function() {
            var t = this._seed % 3 + this._skinBias;
            t < 0 && (t = 0), 2 < t && (t = 2);
            var e = this._getSpriteIndex() + t % 3 * 12,
                s = e % 6,
                i = Math.floor(e / 6);
            return {
                source: this._sourceSkin,
                x: 160 * s,
                y: 110 * i,
                width: 160,
                height: 110,
                isFlip: this._getIsFlip()
            }
        },
        getSpriteHead: function() {
            var t = this._seed % 3 + this._skinBias;
            t < 0 && (t = 0), 2 < t && (t = 2);
            var e = 3 * (this._seed % 3) + t,
                s = 9 * (this._pose == Ce.SLIDE ? 1 : this._pose == Ce.LOSER ? 2 : 0) + e % 9,
                i = this._session.cache.unitType == ke.UNIT_A ? 0 : 1,
                n = this._getHeadOffset();
            return {
                source: this._sourceSkin,
                x: 32 * s,
                y: 880 + 40 * i,
                width: 32,
                height: 40,
                isFlip: this._getIsFlip(),
                offsetX: -n.x,
                offsetY: n.y
            }
        },
        _getHeadOffset: function() {
            if (0 == this._genderNumber) switch (this._pose[1]) {
                case 0:
                    return {
                        x: -12, y: 6
                    };
                case 1:
                    return {
                        x: 14, y: 20
                    };
                case 2:
                    return {
                        x: 18, y: 17
                    };
                case 3:
                case 4:
                    return {
                        x: 16, y: 12
                    };
                case 5:
                    return {
                        x: 14, y: 16
                    };
                case 6:
                    return {
                        x: 18, y: 18
                    };
                case 7:
                    return {
                        x: 18, y: 14
                    };
                case 8:
                    return {
                        x: 16, y: 10
                    };
                case 9:
                    return {
                        x: 18, y: 12
                    };
                case 10:
                    return {
                        x: 16, y: 14
                    };
                case 11:
                    return {
                        x: 20, y: -78
                    }
            } else switch (this._pose[1]) {
                case 0:
                    return {
                        x: -12, y: 6
                    };
                case 1:
                    return {
                        x: 14, y: 20
                    };
                case 2:
                    return {
                        x: 18, y: 17
                    };
                case 3:
                case 4:
                    return {
                        x: 16, y: 12
                    };
                case 5:
                    return {
                        x: 14, y: 12
                    };
                case 6:
                    return {
                        x: 17, y: 15
                    };
                case 7:
                    return {
                        x: 16, y: 13
                    };
                case 8:
                    return {
                        x: 15, y: 8
                    };
                case 9:
                    return {
                        x: 16, y: 12
                    };
                case 10:
                    return {
                        x: 15, y: 12
                    };
                case 11:
                    return {
                        x: 20, y: -78
                    }
            }
        },
        _getIsFlip: function() {
            if (this.isDefeated) return this._isFlip;
            var t = this.speed.x < 0;
            return t != this._isFlip && this._updates - this._lastFlip > this._factory.targetFramerate && (this._lastFlip = this._updates, this._isFlip = t), this._isFlip
        },
        defeat: function() {
            this.isDefeated = !0, this._kernel.audio.start("Defeated", Xt.EFFECTS, 1, 0, .3)
        },
        setSlide: function(t) {
            0 < this._slideCount || (this._slideCount = 10, this._lastFlip = this._updates, this._isFlip = t)
        },
        __class__: Oe
    });
    var Le = function(t, e, s) {
        this._prevBallDelay = 0, this._tackleCooldown = 0, this._shovel = -1e3, this._life = 1, this._lastFlip = 0, this._isFlip = !1, this.isDefeated = !1, this.mass = 1, this.radius = 25, this.unitVo = e, this._location = s, this._ball = this._location.ball, _e.call(this, t)
    };
    (s["b10soc.game.Player"] = Le).__name__ = ["b10soc", "game", "Player"], Le.__interfaces__ = [De, Ee], Le.__super__ = _e, Le.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this._biasMovement = this.unitVo.getBias(Me.UPGRADE_MOVEMENT, .65, 1), this._biasDefense = this.unitVo.getBias(Me.UPGRADE_DEFENSE, .8, 2), this._biasMagnet = this.unitVo.getBias(Me.UPGRADE_MAGNET, 0, 1), this.x = -256, this.y = 504, this.prevPosition = {
                x: this.x,
                y: this.y
            }, this.speed = {
                x: 4.85 / this._biasMovement,
                y: 0
            }, this.offsetY = 102, this._genderNumber = this.unitVo.type[1], this._kitIndex = this._session.cache.playerTeam.kitType[1];
            var t = 0 == this._genderNumber;
            this._source = this._assets.getAsset(this._kitIndex < Te.__constructs__.slice().length / 2 ? t ? "assets/location/UnitAKits1.png" : "assets/location/UnitBKits1.png" : t ? "assets/location/UnitAKits2.png" : "assets/location/UnitBKits2.png"), this._sourceSkin = this._assets.getAsset(t ? "assets/location/UnitASkins.png" : "assets/location/UnitBSkins.png"), this._kernel.audio.start("Player", Xt.EFFECTS, -1, 0, 0, 0)
        },
        _disposer: function() {
            _e.prototype._disposer.call(this), this._kernel.audio.stop("Player", Xt.EFFECTS)
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t), this._tackleCooldown--, this.prevPosition.x = this.x, this.prevPosition.y = this.y, this._move(t), this._moveBall(), this._shovel += 3;
            var e = Math.max(this._shovel, -.25 * this._factory.width),
                s = -this.x - 3 * this.speed.x - this._factory.width * (this.isDefeated ? 0 : .25);
            s > -e - .5 * this._factory.width && (s = -e - .5 * this._factory.width), s < 200 - this._location.levelVo.goalDistance && (s = 200 - this._location.levelVo.goalDistance), this._location.camera.setPosition(s, -this.y), this._updates % 10 == 0 && this._kernel.audio.transform("Player", Xt.EFFECTS, this._getSpeed() / 35)
        },
        _move: function(t) {
            if (null == t && (t = 0), !this.isDefeated) {
                var e = this._location.camera.getWorldCoordsFromScreenCoords(this._kernel.inputs.mouse.x - .5 * this._factory.width, this._kernel.inputs.mouse.y - .5 * this._factory.height),
                    s = e.x - this.x,
                    i = e.y - this.y;
                this._kernel.inputs.mouse.getIsButtonDown() && (Math.abs(s) < 50 && (s = 0), Math.abs(i) < 50 && (i = 0), this.speed.x += s / 200, this.speed.y += i / 200);
                var n = this._kernel.inputs.joypad;
                n.getIsButtonDown(Zt.LEFT) && (this.speed.x -= 1), n.getIsButtonDown(Zt.RIGHT) && (this.speed.x += 1), n.getIsButtonDown(Zt.UP) && (this.speed.y -= 1), n.getIsButtonDown(Zt.DOWN) && (this.speed.y += 1)
            }
            this._tools;
            var r = this.speed.x;
            this.speed.x = 12 < r ? 12 : r < -5 ? -5 : r;
            this._tools;
            var a = this.speed.y;
            this.speed.y = 12 < a ? 12 : a < -15 ? -15 : a, this.x < -78 && (this.speed.x = Math.max(this.speed.x, 4)), this.x < this._shovel && (this.x = this._shovel, this.speed.x = Math.max(this.speed.x, 9)), this.x += this.speed.x * this._biasMovement * 1.1, this.y += this.speed.y * this._biasMovement * 1.1, this.speed.x *= .9, this.speed.y *= .9, Math.abs(this.speed.x) < .5 && (this.speed.x = 0), Math.abs(this.speed.y) < .5 && (this.speed.y = 0), this.y += (Math.random() - .5) * this.speed.x * .25, this._location.isCollidingWithBoards(this, .1);
            for (var _ = this._location.camera.getCoords(), o = 0, h = this._location.getEntitiesByClass(me); o < h.length;) {
                var l = h[o];
                ++o, l.isCollision(this.x, this.y, this._biasMagnet) && this._activateCoin(l), l.x + _.x < -800 && (l.isDisposed || (l.isDisposed = !0, l.set_isActive(!1), l._disposer()))
            }
            if (!this.isDefeated)
                for (var u = 0, c = this._location.getEntitiesByClass(Oe); u < c.length;) {
                    var d = c[u];
                    ++u, null != this._location.collide(this, d) && (this._activateOpponent(), d.setSlide(d.x > this.x), Math.random() < .2 && d.defeat()), d.x + _.x < -800 && (d.isDisposed || (d.isDisposed = !0, d.set_isActive(!1), d._disposer()))
                }
        },
        _moveBall: function() {
            if (this.isDefeated) this._ball.setPosition(this._ball.x - 100, this._ball.y, -1);
            else {
                var t = Math.abs(Math.sin(this._updates / 10));
                this._prevBallDelay <= 0 && 2 < this._getSpeed() && t < .2 && (this._prevBallDelay = 5, this._kernel.audio.start("Ball" + (j.random(5) + 1), Xt.EFFECTS, 1, 0, this._getSpeed() / 45, null, !0)), this._prevBallDelay--;
                var e = 18 * this.speed.x * t * this._biasMovement,
                    s = 12 * this.speed.y * t * this._biasMovement;
                e += this.speed.x < 0 ? -45 : 45, s += 5 * this.speed.y + 25, this._ball.setPosition(this.x + e, this.y + s, this._getSpeed() / 15)
            }
        },
        _getSpeed: function() {
            return Math.sqrt(this.speed.x * this.speed.x + this.speed.y * this.speed.y)
        },
        getSprite: function() {
            if (this._pose = Ce.LOSER, !this.isDefeated) {
                this._pose = Ce.SLIDE;
                var t = [Ce.RUN_1, Ce.RUN_2, Ce.RUN_3, Ce.RUN_4, Ce.RUN_5, Ce.RUN_6, Ce.RUN_7, Ce.RUN_8, Ce.RUN_9, Ce.RUN_10];
                this._getSpeed() < 2 && -100 < this.x || (this._pose = t[(this._updates / 2 | 0) % t.length])
            }
            var e = this._getSpriteIndex() + this._kitIndex % 4 * 12,
                s = e % 6,
                i = Math.floor(e / 6);
            return {
                source: this._source,
                x: 160 * s,
                y: 110 * i,
                width: 160,
                height: 110,
                isFlip: this._getIsFlip()
            }
        },
        _getSpriteIndex: function() {
            switch (this._pose[1]) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
                case 5:
                    return 5;
                case 6:
                    return 6;
                case 7:
                    return 7;
                case 8:
                    return 8;
                case 9:
                    return 9;
                case 10:
                    return 10;
                case 11:
                    return 11
            }
        },
        getSpriteSkin: function() {
            var t = this._getSpriteIndex() + 12,
                e = t % 6,
                s = Math.floor(t / 6);
            return {
                source: this._sourceSkin,
                x: 160 * e,
                y: 110 * s,
                width: 160,
                height: 110,
                isFlip: this._getIsFlip()
            }
        },
        getSpriteHead: function() {
            var t = 9 * (this._pose == Ce.SLIDE ? 1 : this._pose == Ce.LOSER ? 2 : 0) + 1,
                e = this._session.cache.unitType == ke.UNIT_A ? 0 : 1,
                s = this._getHeadOffset();
            return {
                source: this._sourceSkin,
                x: 32 * t,
                y: 880 + 40 * e,
                width: 32,
                height: 40,
                isFlip: this._getIsFlip(),
                offsetX: -s.x,
                offsetY: s.y
            }
        },
        _getHeadOffset: function() {
            if (0 == this._genderNumber) switch (this._pose[1]) {
                case 0:
                    return {
                        x: -12, y: 6
                    };
                case 1:
                    return {
                        x: 14, y: 20
                    };
                case 2:
                    return {
                        x: 18, y: 17
                    };
                case 3:
                case 4:
                    return {
                        x: 16, y: 12
                    };
                case 5:
                    return {
                        x: 14, y: 16
                    };
                case 6:
                    return {
                        x: 18, y: 18
                    };
                case 7:
                    return {
                        x: 18, y: 14
                    };
                case 8:
                    return {
                        x: 16, y: 10
                    };
                case 9:
                    return {
                        x: 18, y: 12
                    };
                case 10:
                    return {
                        x: 16, y: 14
                    };
                case 11:
                    return {
                        x: 20, y: -78
                    }
            } else switch (this._pose[1]) {
                case 0:
                    return {
                        x: -12, y: 6
                    };
                case 1:
                    return {
                        x: 14, y: 20
                    };
                case 2:
                    return {
                        x: 18, y: 17
                    };
                case 3:
                case 4:
                    return {
                        x: 16, y: 12
                    };
                case 5:
                    return {
                        x: 14, y: 12
                    };
                case 6:
                    return {
                        x: 17, y: 15
                    };
                case 7:
                    return {
                        x: 16, y: 13
                    };
                case 8:
                    return {
                        x: 15, y: 8
                    };
                case 9:
                    return {
                        x: 16, y: 12
                    };
                case 10:
                    return {
                        x: 15, y: 12
                    };
                case 11:
                    return {
                        x: 20, y: -78
                    }
            }
        },
        _getIsFlip: function() {
            if (this.isDefeated) return this._isFlip;
            var t = this.speed.x < 0;
            return t != this._isFlip && this._updates - this._lastFlip > this._factory.targetFramerate / 4 && (this._lastFlip = this._updates, this._isFlip = t), this._isFlip
        },
        _activateCoin: function(t) {
            this._session.setCoins(null, this._session.getCoins() + 20), t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())
        },
        _activateOpponent: function() {
            this._kernel.audio.start("Tackle" + (j.random(2) + 1), Xt.EFFECTS, 1, 0, .35, null, !0), 0 < this._tackleCooldown || (this._tackleCooldown = 10, this._life -= this._location.levelVo.opponentStrength / this._biasDefense, this._life <= 0 && (this.isDefeated = !0), this._kernel.overlay.flash(500, !0, .5, 16711680))
        },
        __class__: Le
    });
    var Fe = function(t, e, s, i) {
        this._location = e, this._width = s, this._height = i, _e.call(this, t)
    };
    (s["b10soc.game.Renderer"] = Fe).__name__ = ["b10soc", "game", "Renderer"], Fe.__super__ = _e, Fe.prototype = t(_e.prototype, {
        _init: function() {
            _e.prototype._init.call(this), this._context.cache(0, 0, this._width, this._height), this._canvas = this._context.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._patternGround = this._context2d.createPattern(this._location.vo.imageGround, "repeat-x"), this._patternBoardsBg = this._context2d.createPattern(this._location.vo.imageBoardsBg, "repeat-x"), this._patternBoardsFg = this._context2d.createPattern(this._location.vo.imageBoardsFg, "repeat-x"), this._patternCrowdBg = this._context2d.createPattern(this._location.vo.imageCrowdBg, "repeat-x"), this._patternCrowdFg = this._context2d.createPattern(this._location.vo.imageCrowdFg, "repeat-x")
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t);
            var e = this._location.camera.getCoords(),
                s = e.x + .5 * this._width,
                i = e.y + .5 * this._height;
            this._context2d.clearRect(0, 0, this._width, this._height), s -= 2048, this._drawCrowdBg(s, i), this._drawGround(s, i), this._drawBoardsBg(s, i), this._drawRenderables(s + 2048, i), this._drawBoardsFg(s, i), this._drawCrowdFg(s, i)
        },
        _drawRenderables: function(t, e) {
            var s = this._location.getRenderables();
            s.sort(mi(this, this._sortRenderable));
            for (var i = 0; i < s.length;) {
                var n = s[i];
                ++i;
                var r = n.getSprite(),
                    a = n.getSpriteSkin(),
                    _ = n.getSpriteHead(),
                    o = this._location.camera.getRenderableCoordsFromWorldCoords(n.x, n.y),
                    h = o.x + t,
                    l = o.y + e;
                this._context2d.save(), r.isFlip && (this._context2d.translate(h, 0), this._context2d.scale(r.isFlip ? -1 : 1, 1), this._context2d.translate(-h, 0)), null != _ && this._context2d.drawImage(_.source, _.x, _.y, _.width, _.height, h - _.offsetX, l - n.offsetY - _.offsetY, _.width, _.height), null != a && this._context2d.drawImage(a.source, a.x, a.y, a.width, a.height, h - .5 * a.width, l - n.offsetY, a.width, a.height), this._context2d.drawImage(r.source, r.x, r.y, r.width, r.height, h - .5 * r.width, l - n.offsetY, r.width, r.height), this._context2d.restore()
            }
        },
        _sortRenderable: function(t, e) {
            return t.y - e.y | 0
        },
        _drawCrowdBg: function(t, e) {
            e += -480, t *= .9, this._context2d.fillStyle = this._patternCrowdBg, this._context2d.save(), this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this._width, this._height), this._context2d.restore()
        },
        _drawCrowdFg: function(t, e) {
            e += 464, t *= 1.25, this._context2d.fillStyle = this._patternCrowdFg, this._context2d.save(), this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this._width, this._height), this._context2d.restore()
        },
        _drawGround: function(t, e) {
            t -= 105, this._context2d.fillStyle = this._patternGround, this._context2d.save(), this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this._width, this._height), this._context2d.restore()
        },
        _drawBoardsBg: function(t, e) {
            e += -160, this._context2d.fillStyle = this._patternBoardsBg, this._context2d.save(), this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this._width, this._height), this._context2d.restore()
        },
        _drawBoardsFg: function(t, e) {
            e += 400, this._context2d.fillStyle = this._patternBoardsFg, this._context2d.save(), this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this._width, this._height), this._context2d.restore()
        },
        __class__: Fe
    });
    var Ge = function(t, e) {
        oe.call(this, t), this.type = e, this.title = this._getTitle(), this.short = this._getShort(), this.kitType = this._getKitType(), this.skinBias = this._getSkinBias()
    };
    (s["b10soc.game.TeamVo"] = Ge).__name__ = ["b10soc", "game", "TeamVo"], Ge.__super__ = oe, Ge.prototype = t(oe.prototype, {
        _getTitle: function() {
            var t = this.type;
            return this._kernel.getConfig(0 == t[1] ? "gui.teams.team1.title" : "gui.teams.team" + (this.type[1] + 1) + ".title")
        },
        _getShort: function() {
            var t = this.type;
            return this._kernel.getConfig(0 == t[1] ? "gui.teams.team1.short" : "gui.teams.team" + (this.type[1] + 1) + ".short")
        },
        _getKitType: function() {
            var t = this.type,
                e = this._kernel.getConfig(0 == t[1] ? "gui.teams.team1.kit" : "gui.teams.team" + (this.type[1] + 1) + ".kit");
            return et.createEnumIndex(Te, j.parseInt(e), null)
        },
        _getSkinBias: function() {
            var t = this.type;
            return j.parseInt(this._kernel.getConfig(0 == t[1] ? "gui.teams.team1.skin" : "gui.teams.team" + (this.type[1] + 1) + ".skin"))
        },
        __class__: Ge
    });
    var He = function(t, e) {
        this._MAX_UPGRADES = 8, oe.call(this, t), this.type = e, this.title = this._getTitle(), this.subtitle = this._getSubtitle()
    };
    (s["b10soc.game.UnitVo"] = He).__name__ = ["b10soc", "game", "UnitVo"], He.__super__ = oe, He.prototype = t(oe.prototype, {
        _getTitle: function() {
            var t;
            switch (this.type[1]) {
                case 0:
                    t = "gui.units.unitA.title";
                    break;
                case 1:
                    t = "gui.units.unitB.title"
            }
            return this._kernel.getConfig(t)
        },
        _getSubtitle: function() {
            var t;
            switch (this.type[1]) {
                case 0:
                    t = "gui.units.unitA.subtitle";
                    break;
                case 1:
                    t = "gui.units.unitB.subtitle"
            }
            return this._kernel.getConfig(t)
        },
        getDefault: function(t) {
            switch (this.type[1]) {
                case 0:
                    switch (t[1]) {
                        case 0:
                            return 2;
                        case 1:
                            return 5;
                        case 2:
                            return 4;
                        case 3:
                            return 3
                    }
                    break;
                case 1:
                    switch (t[1]) {
                        case 0:
                            return 5;
                        case 1:
                            return 3;
                        case 2:
                            return 2;
                        case 3:
                            return 4
                    }
            }
        },
        getUpgrade: function(t) {
            switch (t[1]) {
                case 0:
                    return this._session.getUpgrade(Me.UPGRADE_MOVEMENT, this.type);
                case 1:
                    return this._session.getUpgrade(Me.UPGRADE_SHOOTING, this.type);
                case 2:
                    return this._session.getUpgrade(Me.UPGRADE_DEFENSE, this.type);
                case 3:
                    return this._session.getUpgrade(Me.UPGRADE_MAGNET, this.type)
            }
        },
        getTotal: function(t) {
            var e, s = this._MAX_UPGRADES;
            switch (t[1]) {
                case 0:
                    e = this.getDefault(Me.UPGRADE_MOVEMENT) + this.getUpgrade(Me.UPGRADE_MOVEMENT);
                    break;
                case 1:
                    e = this.getDefault(Me.UPGRADE_SHOOTING) + this.getUpgrade(Me.UPGRADE_SHOOTING);
                    break;
                case 2:
                    e = this.getDefault(Me.UPGRADE_DEFENSE) + this.getUpgrade(Me.UPGRADE_DEFENSE);
                    break;
                case 3:
                    e = this.getDefault(Me.UPGRADE_MAGNET) + this.getUpgrade(Me.UPGRADE_MAGNET)
            }
            return 0 | Math.min(s, e)
        },
        getAvailable: function(t) {
            switch (t[1]) {
                case 0:
                    return this._MAX_UPGRADES - this.getTotal(Me.UPGRADE_MOVEMENT);
                case 1:
                    return this._MAX_UPGRADES - this.getTotal(Me.UPGRADE_SHOOTING);
                case 2:
                    return this._MAX_UPGRADES - this.getTotal(Me.UPGRADE_DEFENSE);
                case 3:
                    return this._MAX_UPGRADES - this.getTotal(Me.UPGRADE_MAGNET)
            }
        },
        getBias: function(t, e, s) {
            var i = this.getTotal(t);
            i < 0 && (i = 0), i > this._MAX_UPGRADES && (i = this._MAX_UPGRADES);
            var n = s - e;
            return e + i / this._MAX_UPGRADES * n
        },
        getPercentageComplete: function() {
            return (this.getTotal(Me.UPGRADE_MOVEMENT) + this.getTotal(Me.UPGRADE_SHOOTING) + this.getTotal(Me.UPGRADE_DEFENSE) + this.getTotal(Me.UPGRADE_MAGNET)) / (4 * this._MAX_UPGRADES)
        },
        __class__: He
    });
    var Ve = function(t, e, s, i) {
        null == i && (i = !1), null == s && (s = 100), null == e && (e = 100), this._assets = Zs.__cast(t.assets, he), this._factory = Zs.__cast(t.factory, ue), this._session = Zs.__cast(t.get_session(), ge), this._system = t.system, jt.call(this, t, e, s, i)
    };
    (s["b10soc.gui.AGuiEntity"] = Ve).__name__ = ["b10soc", "gui", "AGuiEntity"], Ve.__super__ = jt, Ve.prototype = t(jt.prototype, {
        __class__: Ve
    });
    var We = function(t) {
        Ve.call(this, t, 720, 405, !1)
    };
    (s["b10soc.gui.Action"] = We).__name__ = ["b10soc", "gui", "Action"], We.__super__ = Ve, We.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._context.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Action.png")))
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._bitmap.x = 30 * Math.sin(this._updates / 50)
        },
        __class__: We
    });
    var je = function(t, e) {
        this._sceneType = e, Ve.call(this, t, t.factory.width, t.factory.height, !1)
    };
    (s["b10soc.gui.Bg"] = je).__name__ = ["b10soc", "gui", "Bg"], je.__super__ = Ve, je.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._texture = this._assets.getAsset("assets/gui/BgDetail.jpg"), this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getAbstract())), this._bitmap.cache(0, 0, this.width, this.height), this._context.addChild(this._bitmap), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getAbstract()))), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getGradient()))), this._canvas = this._bitmap.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._pattern = this._context2d.createPattern(this._texture, "repeat"), this._context2d.fillStyle = this._pattern
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._draw()
        },
        _draw: function() {
            var t = -2 * this._kernel._updates % this._texture.width,
                e = 10 * Math.sin(this._kernel._updates / 30) - 10;
            this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this.width, this.height), this._context2d.translate(-t, -e)
        },
        _getAbstract: function() {
            switch (this._sceneType[1]) {
                case 4:
                case 9:
                    return "assets/gui/BgAbstract4.png";
                case 7:
                    return "assets/gui/BgAbstract1.png";
                case 8:
                    return "assets/gui/BgAbstract2.png";
                case 15:
                    return "assets/gui/BgAbstract3.png";
                default:
                    return "assets/gui/BgAbstract4.png"
            }
        },
        _getGradient: function() {
            switch (this._sceneType[1]) {
                case 7:
                    return "assets/gui/BgGradient1.png";
                case 4:
                case 8:
                    return "assets/gui/BgGradient2.png";
                case 9:
                    return "assets/gui/BgGradient3.png";
                case 15:
                    return "assets/gui/Vignette.png";
                default:
                    return "assets/gui/BgGradient3.png"
            }
        },
        __class__: je
    });
    var Qe = function(t, e, s, i, n, r, a, _, o) {
        null == n && (n = 0), null == i && (i = 0);
        var h = new Jt(t),
            l = new Jt(t);
        T.call(this, t, h, l, e, s, i, n, r, a, _, o)
    };
    (s["b10soc.gui.BlankButton"] = Qe).__name__ = ["b10soc", "gui", "BlankButton"], Qe.__super__ = T, Qe.prototype = t(T.prototype, {
        _updater: function(t) {
            null == t && (t = 0);
            var e = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = e.x, this.get_view().globalY = e.y, T.prototype._updater.call(this, t)
        },
        __class__: Qe
    });
    var Je = function(t, e, s, i) {
        null == e && (e = 1), this._scale = e, Ve.call(this, t, 192, 192, !1), this.setPosition(0 | s, 0 | i)
    };
    (s["b10soc.gui.Burst"] = Je).__name__ = ["b10soc", "gui", "Burst"], Je.__super__ = Ve, Je.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this);
            var t = this._scale,
                e = Math.random() < .5 ? -1 : 1;
            this._context.scaleX = t * e;
            var s = this._scale,
                i = Math.random() < .5 ? -1 : 1;
            this._context.scaleY = s * i, this._context.compositeOperation = "lighter", this._context.mouseEnabled = !1, this._context.mouseChildren = !1, this._sprite = new createjs.Sprite(this._createSpriteSheet(), 0), this._context.addChild(this._sprite), this._drop = 0
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._sprite.gotoAndStop(this._updates - 1), 16 <= this._updates && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())), this._drop += Math.random(), this._context.y += this._drop
        },
        _createSpriteSheet: function() {
            return new createjs.SpriteSheet({
                framerate: this._factory.targetFramerate,
                images: [this._assets.getAsset("assets/gui/Burst.jpg")],
                frames: {
                    width: 192,
                    height: 192,
                    count: 16,
                    regX: 96,
                    regY: 96
                }
            })
        },
        __class__: Je
    });
    var Ye = function(t, e, s, i, n, r, a, _) {
        null == i && (i = 0), null == s && (s = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._title = e.toUpperCase(), T.call(this, t, this._assets.get_buttonUp(), this._assets.get_buttonOver(), 200, 65, s, i, n, r, a, _)
    };
    (s["b10soc.gui.Button"] = Ye).__name__ = ["b10soc", "gui", "Button"], Ye.__super__ = T, Ye.prototype = t(T.prototype, {
        _init: function() {
            T.prototype._init.call(this);
            var t = 19;
            new g("iP[ao]d|iPhone", "i").match(window.navigator.userAgent) && (t -= 2);
            var e = this.width - 10,
                s = this.height - t,
                i = this._kernel.factory.createTextStyle(ae.BUTTON);
            this._textUp = new ps(this._kernel, e, s, this._title, i), this._textOver = new ps(this._kernel, e, s, this._title, i), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        setTitle: function(t) {
            this._title != t && (this._title = t.toUpperCase(), this._textUp.set_text(this._textOver.set_text(this._title)))
        },
        onRollOver: function() {
            T.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Xt.INTERFACE, 0, 0, .25)
        },
        __class__: Ye
    });
    var ze = function(t, e, s, i, n, r, a, _) {
        null == i && (i = 0), null == s && (s = 0), this._isTop = e, this._assets = t.assets, this._factory = t.factory, T.call(this, t, this._isTop ? this._assets.get_buttonArrowTopUp() : this._assets.get_buttonArrowBottomUp(), this._isTop ? this._assets.get_buttonArrowTopOver() : this._assets.get_buttonArrowBottomOver(), 66, 30, s, i, n, r, a, _)
    };
    (s["b10soc.gui.ButtonArrow"] = ze).__name__ = ["b10soc", "gui", "ButtonArrow"], ze.__super__ = T, ze.prototype = t(T.prototype, {
        onRollOver: function() {
            T.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Xt.INTERFACE, 0, 0, .25)
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = e.x, this.get_view().globalY = e.y, T.prototype._updater.call(this, t)
        },
        __class__: ze
    });
    var Xe = function(t, e, s, i, n, r, a, _) {
        null == i && (i = 0), null == s && (s = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, T.call(this, t, this._assets.get_buttonSmallUp(), this._assets.get_buttonSmallOver(), 100, 30, s, i, n, r, a, _), this.setTitle(e)
    };
    (s["b10soc.gui.ButtonSmall"] = Xe).__name__ = ["b10soc", "gui", "ButtonSmall"], Xe.__super__ = T, Xe.prototype = t(T.prototype, {
        _init: function() {
            T.prototype._init.call(this);
            var t = 6;
            new g("iP[ao]d|iPhone", "i").match(window.navigator.userAgent) && (t -= 2);
            var e = this.width - 10,
                s = this.height - t,
                i = this._kernel.factory.createTextStyle(ae.BUTTON);
            i.size = 12, this._textUp = new ps(this._kernel, e, s, this._title, i);
            var n = this._kernel.factory.createTextStyle(ae.BUTTON);
            n.size = 12, this._textOver = new ps(this._kernel, e, s, this._title, n), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = e.x, this.get_view().globalY = e.y, T.prototype._updater.call(this, t)
        },
        setTitle: function(t) {
            this._title = t, this._title = this._title.toUpperCase(), this._textUp.set_text(this._title), this._textOver.set_text(this._title)
        },
        onRollOver: function() {
            T.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Xt.INTERFACE, 0, 0, .25)
        },
        onClick: function() {
            T.prototype.onClick.call(this), this.isOver = !1
        },
        __class__: Xe
    });
    var Ke = function(t, e) {
        null == e && (e = !0), this._isAnimated = e, Ve.call(this, t, 120, 32, !1)
    };
    (s["b10soc.gui.Coins"] = Ke).__name__ = ["b10soc", "gui", "Coins"], Ke.__super__ = Ve, Ke.prototype = t(Ve.prototype, {
        _init: function() {
            var t = this;
            Ve.prototype._init.call(this), this._displayValue = this._prevCoins = this._session.getCoins(), this._isAnimated ? (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(0, 0, 32, 32), this._bitmap.y = 3) : (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(320, 0, 32, 32), this._bitmap.cache(0, 0, 32, 32)), this._bitmap.x = this.width - 32, this._bitmap.y = 3, this._context.addChild(this._bitmap);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ps(this._kernel, this._bitmap.x - 5, 20, j.string(this._kernel.getConfig("gui.scenes.game.hud.coins")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._message = new ps(this._kernel, this._bitmap.x - 5, 35, j.string(this._displayValue), this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)), this._message.setPosition(.85 * this._message.width - 1, .5 * this._message.height + 5), this._message._context.regX = .85 * this._message.width, this._message._context.regY = .5 * this._message.height, this._session.get_isTester() && this.addEntity(new Qe(this._kernel, 0 | this.width, 0 | this.height, 0, 0, null, function() {
                t._session.setCoins(null, t._session.getCoins() + 100)
            }), null, !0, 10), this.addEntity(this._message, null, !0, 1)
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e = this;
            if (Ve.prototype._updater.call(this, t), this._isAnimated && (this._bitmap.sourceRect.x = this._updates % 32 * 32), !(this._age < 3e3)) {
                if (this._prevCoins != this._session.getCoins()) {
                    if (this._kernel.audio.start("Coin", Xt.INTERFACE, 0, 0, .65, null, !1), null != this._tweezer) {
                        var s = this._tweezer;
                        s.isDisposed || (s.isDisposed = !0, s.set_isActive(!1), s._disposer())
                    }
                    this.addEntity(this._tweezer = new ri(this._kernel, function(t) {
                        e._message._context.scaleX = e._message._context.scaleY = t
                    }, 1.75, 1, 0, 1e3, null, si.EASE_OUT, ii.QUARTIC))
                }
                if (this._prevCoins = this._session.getCoins(), this._displayValue != this._session.getCoins()) {
                    this._tools;
                    this._displayValue = Math.round(.9 * this._displayValue + .1 * this._session.getCoins()), Math.abs(this._displayValue - this._session.getCoins()) < 5 && (this._displayValue = this._session.getCoins()), this._message.set_text(j.string(this._displayValue))
                }
            }
        },
        __class__: Ke
    });
    var Ze = function(t, e, s) {
        this._MEDAL_WIDTH = 100, this._unitType = e, this._medalType = s, Ve.call(this, t, 720, 405, !1)
    };
    (s["b10soc.gui.Hero"] = Ze).__name__ = ["b10soc", "gui", "Hero"], Ze.__super__ = Ve, Ze.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._container = new createjs.Container, this._context.addChild(this._container), this._container.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getImage()))), this._medalBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/HeroMedals.png"));
            var t = this._getMedalCol() * this._MEDAL_WIDTH;
            this._medalBitmap.sourceRect = new createjs.Rectangle(t, 0, this._MEDAL_WIDTH, this.height), this._medalBitmap.x = .5 * (this.width - this._MEDAL_WIDTH), this._medalType != Se.MEDAL_NONE && this._container.addChild(this._medalBitmap)
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._container.x = 10 * Math.sin(this._updates / 50)
        },
        _getImage: function() {
            var t = new Ge(this._kernel, this._session.team);
            switch (this._unitType[1]) {
                case 0:
                    switch (t.kitType[1]) {
                        case 0:
                            return "assets/gui/HeroUnitA0.png";
                        case 1:
                            return "assets/gui/HeroUnitA1.png";
                        case 2:
                            return "assets/gui/HeroUnitA2.png";
                        case 3:
                            return "assets/gui/HeroUnitA3.png";
                        case 4:
                            return "assets/gui/HeroUnitA4.png";
                        case 5:
                            return "assets/gui/HeroUnitA5.png";
                        case 6:
                            return "assets/gui/HeroUnitA6.png";
                        case 7:
                            return "assets/gui/HeroUnitA7.png"
                    }
                    break;
                case 1:
                    switch (t.kitType[1]) {
                        case 0:
                            return "assets/gui/HeroUnitB0.png";
                        case 1:
                            return "assets/gui/HeroUnitB1.png";
                        case 2:
                            return "assets/gui/HeroUnitB2.png";
                        case 3:
                            return "assets/gui/HeroUnitB3.png";
                        case 4:
                            return "assets/gui/HeroUnitB4.png";
                        case 5:
                            return "assets/gui/HeroUnitB5.png";
                        case 6:
                            return "assets/gui/HeroUnitB6.png";
                        case 7:
                            return "assets/gui/HeroUnitB7.png"
                    }
            }
        },
        _getMedalCol: function() {
            switch (this._unitType[1]) {
                case 0:
                    switch (this._medalType[1]) {
                        case 0:
                        case 1:
                            return 0;
                        case 2:
                            return 1;
                        case 3:
                            return 2
                    }
                    break;
                case 1:
                    switch (this._medalType[1]) {
                        case 0:
                            return 0;
                        case 1:
                            return 3;
                        case 2:
                            return 4;
                        case 3:
                            return 5
                    }
            }
        },
        __class__: Ze
    });
    var qe = function(t, e) {
        this._isCoinsVisible = e, this._isCoinsVisible = !0, Ve.call(this, t, t.factory.width, t.factory.height, !1)
    };
    (s["b10soc.gui.Hud"] = qe).__name__ = ["b10soc", "gui", "Hud"], qe.__super__ = Ve, qe.prototype = t(Ve.prototype, {
        _init: function() {
            var e = this;
            Ve.prototype._init.call(this);
            var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png"));
            t.sourceRect = new createjs.Rectangle(0, 0, this.width, 80), this._context.addChild(t), this._coins = new Ke(this._kernel, !1), this.addEntity(this._coins, null, this._isCoinsVisible, 10), this._coins.setPosition(52, 12), this._periods = new es(this._kernel), this.addEntity(this._periods, null, !0, 10), this._periods.setPosition((this.width - this._periods.width) / 2, 12), this._distance = new ts(this._kernel), this.addEntity(this._distance, null, !0, 10), this._distance.setPosition(411, 12), this._timer = new is(this._kernel), this.addEntity(this._timer, null, !0, 10), this._timer.setPosition(411, 12), this._timer.get_view().set_isVisible(!1), this._alert = new $e(this._kernel), this.addEntity(this._alert, null, !0, 20), this._alert.setPosition((this.width - this._alert.width) / 2, (this.height - this._alert.height) / 2), this._power = new ss(this._kernel), this.addEntity(this._power, null, !0, 20), this._power.get_view().set_isVisible(!1), this.addEntity(new ri(this._kernel, function(t) {
                e._periods.set_y(Math.round(t))
            }, -100, this._periods.y, 1e3, 1e3, 0, si.EASE_OUT, ii.QUARTIC)), this.addEntity(new ri(this._kernel, function(t) {
                e._distance.set_y(t)
            }, -100, this._distance.y, 2e3, 1e3, 0, si.EASE_OUT, ii.QUARTIC)), this.addEntity(new ri(this._kernel, function(t) {
                e._coins.set_y(t)
            }, -100, this._coins.y, 3e3, 1e3, 0, si.EASE_OUT, ii.QUARTIC))
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t)
        },
        configureDistance: function(t) {
            this._distance.configure(t)
        },
        configureTimer: function(t) {
            this._timer.configure(t)
        },
        configurePeriods: function(t, e, s, i, n) {
            this._periods.configure(t, e, s, i, n)
        },
        configureAlert: function(t) {
            this._alert.configure(t)
        },
        configurePower: function(t, e) {
            this._power.configure(t, e)
        },
        goalTransition: function(t) {
            this._distance.get_view().set_isVisible(t), this._timer.get_view().set_isVisible(!t), this._power.get_view().set_isVisible(!t)
        },
        __class__: qe
    });
    var $e = function(t) {
        Ve.call(this, t, 500, 90, !1)
    };
    (s["b10soc.gui.HudAlert"] = $e).__name__ = ["b10soc", "gui", "HudAlert"], $e.__super__ = Ve, $e.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_ALERT);
            this._title = new ps(this._kernel, this.width, 20, "", t), this.addEntity(this._title, null, !0, 10)
        },
        configure: function(t) {
            var e = this;
            if ("___" != t) {
                this._value = t, this._title.set_text(t.toUpperCase()), this._context.alpha = 1, this._context.uncache();
                var s = mi(yi = this._context, yi.cache),
                    i = this.width,
                    n = this.height;
                if (Ps.delay(function() {
                        s(0, 0, i, n)
                    }, 100), null != this._tweezer) {
                    var r = this._tweezer;
                    r.isDisposed || (r.isDisposed = !0, r.set_isActive(!1), r._disposer())
                }
                this.addEntity(this._tweezer = new ri(this._kernel, function(t) {
                    e._context.alpha = t
                }, 1, 0, 1e3, 500, 0, si.EASE_OUT, ii.QUARTIC))
            }
        },
        __class__: $e
    });
    var ts = function(t) {
        Ve.call(this, t, 220, 60, !1)
    };
    (s["b10soc.gui.HudDistance"] = ts).__name__ = ["b10soc", "gui", "HudDistance"], ts.__super__ = Ve, ts.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ps(this._kernel, this.width, 20, j.string(this._kernel.getConfig("gui.scenes.game.hud.distance")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var e = 120, s = 0, i = this._convertDistanceToFormattedDistance(0).split(""); s < i.length;) {
                var n = i[s];
                ++s;
                var r = this._createDigit(n, e, 5);
                this._digits.push(r), this.addEntity(r, null, !0, 10), e += "." == n ? 8 : 14
            }
        },
        configure: function(t) {
            if (this._value != t) {
                this._value = t;
                for (var e = 0, s = 0, i = this._convertDistanceToFormattedDistance(this._value).split(""); s < i.length;) {
                    var n = i[s];
                    ++s, this._digits[e].set_text(n), ++e
                }
            }
        },
        _convertDistanceToFormattedDistance: function(t) {
            var e = t / 64;
            9999 < e && (e = 9999);
            for (var s = Math.floor(e), i = e - s, n = null == s ? "null" : "" + s, r = $.substr((null == i ? "null" : "" + i).split(".").pop(), 0, 1); n.length < 4;) n = " " + n;
            for (; r.length < 1;) r += "0";
            return n + "." + r + "M"
        },
        _createDigit: function(t, e, s) {
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_DISTANCE),
                n = new ps(this._kernel, 20, 24, t, i);
            return n.setPosition(e, s), n
        },
        __class__: ts
    });
    var es = function(t) {
        Ve.call(this, t, 246, 60, !1)
    };
    (s["b10soc.gui.HudPeriods"] = es).__name__ = ["b10soc", "gui", "HudPeriods"], es.__super__ = Ve, es.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._team1 = new cs(this._kernel, !0, this._session.cache.playerTeam.type), this._team1._context.x = 8, this._team1._context.y = 7, this._context.addChild(this._team1._context), this._team2 = new cs(this._kernel, !0, this._session.cache.getOpponentTeam(this._session.cache.levelType).type), this._team2._context.x = this.width - 68, this._team2._context.y = 7, this._context.addChild(this._team2._context), this._teamBorder1 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._teamBorder1.sourceRect = new createjs.Rectangle(720, 0, 76, 48), this._teamBorder1.x = 0, this._teamBorder1.y = -1, this._context.addChild(this._teamBorder1), this._teamBorder2 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._teamBorder2.sourceRect = new createjs.Rectangle(720, 0, 76, 48), this._teamBorder2.x = this.width - 76, this._teamBorder2.y = -1, this._context.addChild(this._teamBorder2), this._outlines = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._outlines.sourceRect = new createjs.Rectangle(720, 48, 90, 32), this._outlines.x = (this.width - 90) / 2, this._outlines.y = 14, this._context.addChild(this._outlines), this._active = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._active.sourceRect = new createjs.Rectangle(930, 48, 30, 30), this._active.x = this._outlines.x, this._active.y = this._outlines.y, this._active.alpha = .15, this._context.addChild(this._active), this._period1 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._period1.sourceRect = new createjs.Rectangle(810, 48, 1, 1), this._period1.x = this._outlines.x, this._period1.y = this._outlines.y, this._context.addChild(this._period1), this._period2 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._period2.sourceRect = new createjs.Rectangle(810, 48, 1, 1), this._period2.x = this._outlines.x + 30, this._period2.y = this._outlines.y, this._context.addChild(this._period2), this._period3 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._period3.sourceRect = new createjs.Rectangle(810, 48, 30, 32), this._period3.x = this._outlines.x + 60, this._period3.y = this._outlines.y, this._context.addChild(this._period3);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            t.align = re.CENTER, this._title = new ps(this._kernel, this.width, 20, j.string(this._kernel.getConfig("gui.scenes.game.hud.periods")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10)
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._active.sourceRect = new createjs.Rectangle(930 + (this._updates / 2 | 0) % 3 * 30, 48, 30, 32)
        },
        configure: function(t, e, s, i, n) {
            null == e && (e = this._session.cache.currentPeriod), null == s && (s = this._session.cache.getOutcome(Ie.PERIOD_1)), null == i && (i = this._session.cache.getOutcome(Ie.PERIOD_2)), null == n && (n = this._session.cache.getOutcome(Ie.PERIOD_3)), this._active.visible = t, this._active.x = this._outlines.x - 1 + 30 * (e[1] - 1), this._period1Outcome == s && this._period2Outcome == i && this._period3Outcome == n || (this._period1Outcome = s, this._period2Outcome = i, this._period3Outcome = n, this._period1.sourceRect = this._getOutcomeRectangle(this._session.cache.levelType, this._period1Outcome), this._period2.sourceRect = this._getOutcomeRectangle(this._session.cache.levelType, this._period2Outcome), this._period3.sourceRect = this._getOutcomeRectangle(this._session.cache.levelType, this._period3Outcome))
        },
        _getOutcomeRectangle: function(t, e) {
            switch (e[1]) {
                case 2:
                    switch (t[1]) {
                        case 0:
                        case 1:
                        case 2:
                            return new createjs.Rectangle(810, 48, 30, 32)
                    }
                    break;
                case 3:
                    switch (t[1]) {
                        case 0:
                            return new createjs.Rectangle(840, 48, 30, 32);
                        case 1:
                            return new createjs.Rectangle(870, 48, 30, 32);
                        case 2:
                            return new createjs.Rectangle(900, 48, 30, 32)
                    }
                    break;
                default:
                    return new createjs.Rectangle(810, 48, 1, 1)
            }
        },
        __class__: es
    });
    var ss = function(t) {
        this._BARS_TOTAL = 12, this._BAR_HEIGHT = 24, this._BAR_WIDTH = 8, this._BARS_HEIGHT = 24, this._BARS_WIDTH = 204, Ve.call(this, t, t.factory.width, 50, !1)
    };
    (s["b10soc.gui.HudPower"] = ss).__name__ = ["b10soc", "gui", "HudPower"], ss.__super__ = Ve, ss.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this.set_y(this._factory.height - this.height), this._value = this._scoreZone = 1, this._source = this._assets.getAsset("assets/gui/Hud.png");
            var t = new createjs.Bitmap(this._source);
            t.sourceRect = new createjs.Rectangle(0, 80, this.width, 50), this._context.addChild(t), this._under = new createjs.Bitmap(this._source), this._under.sourceRect = new createjs.Rectangle(720, 80 + this._BARS_HEIGHT, this._BARS_WIDTH, this._BARS_HEIGHT), this._under.x = (this.width - this._BARS_WIDTH) / 2, this._context.addChild(this._under), this._bars = new createjs.Bitmap(this._source), this._bars.sourceRect = new createjs.Rectangle(720, 80, this._BARS_WIDTH, this._BARS_HEIGHT), this._bars.cache(0, 0, this._BARS_WIDTH, this._BARS_HEIGHT), this._context2d = Zs.__cast(this._bars.cacheCanvas, HTMLCanvasElement).getContext("2d", null), this._bars.x = (this.width - this._BARS_WIDTH) / 2, this._context.addChild(this._bars), this._outlines = new createjs.Bitmap(this._source), this._outlines.sourceRect = new createjs.Rectangle(720, 80, this._BARS_WIDTH, this._BARS_HEIGHT), this._outlines.x = (this.width - this._BARS_WIDTH) / 2, this._context.addChild(this._outlines);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            e.align = re.CENTER, this._title = new ps(this._kernel, this.width, 20, j.string(this._kernel.getConfig("gui.scenes.game.hud.power")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 22), this.addEntity(this._title, null, !0, 10)
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._value < .1 && (this._value = 0), this._draw()
        },
        configure: function(t, e) {
            this._value = t, this._scoreZone = e
        },
        _draw: function() {
            if (this._context2d.clearRect(0, 0, this._BARS_WIDTH, this._BARS_HEIGHT), 0 != this._value)
                for (var t = 6, e = Math.round(this._BARS_TOTAL * this._value), s = this._BARS_WIDTH / 2 + 2, i = 0, n = e; i < n;) {
                    var r = i++,
                        a = this._getBarRectangle(r / this._BARS_TOTAL >= this._scoreZone);
                    this._context2d.drawImage(this._source, a.x, a.y, a.width, a.height, s + t - this._BAR_WIDTH, 0, this._BAR_WIDTH, this._BAR_HEIGHT), this._context2d.drawImage(this._source, a.x, a.y, a.width, a.height, this._BARS_WIDTH - t - s, 0, this._BAR_WIDTH, this._BAR_HEIGHT), t += this._BAR_WIDTH
                }
        },
        _getBarRectangle: function(t) {
            return new createjs.Rectangle(this.width + this._BARS_WIDTH + (t ? this._BAR_WIDTH : 0), 80, this._BAR_WIDTH, this._BAR_HEIGHT)
        },
        __class__: ss
    });
    var is = function(t) {
        Ve.call(this, t, 220, 60, !1)
    };
    (s["b10soc.gui.HudTimer"] = is).__name__ = ["b10soc", "gui", "HudTimer"], is.__super__ = Ve, is.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ps(this._kernel, this.width, 20, j.string(this._kernel.getConfig("gui.scenes.game.hud.timer")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var e = 155, s = 0, i = this._convertAgeToFormattedTime(0).split(""); s < i.length;) {
                var n = i[s];
                ++s;
                var r = this._createDigit(n, e, 5);
                this._digits.push(r), this.addEntity(r, null, !0, 10), e += "." == n ? 8 : 14
            }
        },
        configure: function(t) {
            if (this._value != t) {
                this._value = t;
                for (var e = 0, s = 0, i = this._convertAgeToFormattedTime(this._value).split(""); s < i.length;) {
                    var n = i[s];
                    ++s, this._digits[e].set_text(n), ++e
                }
            }
        },
        _convertAgeToFormattedTime: function(t) {
            var e = t;
            9.9 < e && (e = 9.9);
            for (var s = Math.floor(e), i = e - s, n = null == s ? "null" : "" + s, r = $.substr((null == i ? "null" : "" + i).split(".").pop(), 0, 1); n.length < 2;) n = " " + n;
            for (; r.length < 1;) r += "0";
            return n + "." + r + "S"
        },
        _createDigit: function(t, e, s) {
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_DISTANCE),
                n = new ps(this._kernel, 20, 24, t, i);
            return n.setPosition(e, s), n
        },
        __class__: is
    });
    var ns = function(t, e, s, i) {
        null == i && (i = 1), null == s && (s = !1), this._imageElement = e, this._isAdd = s, Ve.call(this, t, this._imageElement.width, this._imageElement.height, !1), this.set_alpha(i)
    };
    (s["b10soc.gui.Image"] = ns).__name__ = ["b10soc", "gui", "Image"], ns.__super__ = Ve, ns.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        configure: function(t, e) {
            null == e && (e = !1), this._isAdd = e, this._bitmap.image = t, this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        set_alpha: function(t) {
            return this._bitmap.alpha = t
        },
        __class__: ns
    });
    var rs = function(t) {
        this._assetManager = Zs.__cast(t.assets, he), this._buttonSize = 50, Ot.call(this, t, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .85)
    };
    (s["b10soc.gui.Overlay"] = rs).__name__ = ["b10soc", "gui", "Overlay"], rs.__super__ = Ot, rs.prototype = t(Ot.prototype, {
        _init: function() {
            Ot.prototype._init.call(this);
            var t = this._kernel.factory.width - this._buttonSize - 5;
            this.positionButton(ie.PAUSE, t, 4), this.positionButton(ie.UNPAUSE, -this._buttonSize - 10, 4), this.positionButton(ie.BACK, -this._buttonSize - 10, 4), this.positionButton(ie.MUTE, -this._buttonSize - 10, 4), this.positionButton(ie.UNMUTE, -this._buttonSize - 10, 4), this._flashView.set_isVisible(!0), this._pauseMenu = new us(this._kernel), this.set_pauseEntity(this._pauseMenu)
        },
        flash: function(t, e, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), this._flashContext.compositeOperation = 0 == i ? "source-over" : "lighter", Ot.prototype.flash.call(this, t, e, s, i)
        },
        _drawPause: function(t) {
            null == t && (t = !0), Ot.prototype._drawPause.call(this, t), this._pauseMenu.pauseHandler(t)
        },
        __class__: rs
    });
    var as = function(t, e) {
        this._isSmall = e, Ve.call(this, t, this._isSmall ? 230 : 380, this._isSmall ? 190 : 240, !1)
    };
    (s["b10soc.gui.Panel"] = as).__name__ = ["b10soc", "gui", "Panel"], as.__super__ = Ve, as.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this.set_y(.5 * (this._factory.height - this.height) | 0), this.addEntity(new v(this._kernel, null, this._bgContext = new createjs.Container), null, !0, 1), this._bgContext.alpha = .5, this.addEntity(new ns(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallBg.png" : "assets/gui/PanelBigBg.png")), null, !0, 2), this.addEntity(new v(this._kernel, null, this._fgContext = new createjs.Container), null, !0, 999), this.addEntity(new ns(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallFg.png" : "assets/gui/PanelBigFg.png")), null, !0, 1e3)
        },
        __class__: as
    });
    var _s = function(t, e) {
        this._type = e, as.call(this, t, !0)
    };
    (s["b10soc.gui.PanelLevel"] = _s).__name__ = ["b10soc", "gui", "PanelLevel"], _s.__super__ = as, _s.prototype = t(as.prototype, {
        _init: function() {
            var t;
            switch (as.prototype._init.call(this), this.vo = new Pe(this._kernel, this._type), this._type[1]) {
                case 0:
                    t = this._session.cache.level1OpponentTeam;
                    break;
                case 1:
                    t = this._session.cache.level2OpponentTeam;
                    break;
                case 2:
                    t = this._session.cache.level3OpponentTeam
            }
            this._teamVo = t;
            var e = this._teamVo.type[1],
                s = e < Ue.__constructs__.slice().length / 2 ? "assets/gui/TeamsLevel1.png" : "assets/gui/TeamsLevel2.png",
                i = e % 5,
                n = Math.floor(e % 35 / 5);
            this._bgBitmap = new createjs.Bitmap(this._assets.getAsset(s)), this._bgBitmap.sourceRect = new createjs.Rectangle(180 * i, 140 * n, 180, 140), this._bgBitmap.x = (this.width - 180) / 2, this._bgBitmap.y = (this.height - 140) / 2, this._bgContext.addChild(this._bgBitmap), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevel.png"));
            var r = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(r, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var a = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            a.size = 30, this._titleBig = new ps(this._kernel, 125, 30, this._teamVo.short.toUpperCase(), a), this._titleBig.setPosition(0, 65), this.addEntity(this._titleBig, null, !0, 10);
            var _ = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            _.size = 10, this._titleSmall = new ps(this._kernel, 125, 20, $.substr(this._teamVo.title.toUpperCase(), 0, 16), _), this._titleSmall.setPosition(0, 100), this.addEntity(this._titleSmall, null, !0, 10);
            var o = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new ps(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), o, null, null, .5), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10)
        },
        _getMessage: function() {
            return this.vo.message
        },
        _getFgCol: function() {
            if (this.vo.isLocked) return 4;
            switch (this.vo.medalType[1]) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3
            }
        },
        __class__: _s
    });
    var os = function(t, e) {
        this._medalType = e, this._delayInitial = 1500, this._delayMedal = 750, as.call(this, t, !0)
    };
    (s["b10soc.gui.PanelResult"] = os).__name__ = ["b10soc", "gui", "PanelResult"], os.__super__ = as, os.prototype = t(as.prototype, {
        _init: function() {
            as.prototype._init.call(this), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelResult.png")), this._fgBitmap.sourceRect = new createjs.Rectangle(0, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var t, e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            switch (this._message = new ps(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), e), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10), this._medalType[1]) {
                case 0:
                    t = [];
                    break;
                case 1:
                    t = [Se.MEDAL_BRONZE];
                    break;
                case 2:
                    t = [Se.MEDAL_BRONZE, Se.MEDAL_SILVER];
                    break;
                case 3:
                    t = [Se.MEDAL_BRONZE, Se.MEDAL_SILVER, Se.MEDAL_GOLD]
            }
            for (var s = this._delayInitial, i = 0; i < t.length;) {
                var n = t[i];
                ++i, s += this._delayMedal, this.addEntity(new Yt(this._kernel, function(t, e) {
                    return function() {
                        e[0](t[0])
                    }
                }([n], [mi(this, this._showMedal)]), s))
            }
        },
        _showMedal: function(t) {
            var e = this._getFgCol(t);
            this._fgBitmap.sourceRect.x = e * this.width;
            var s = t[1];
            this.addEntity(new Je(this._kernel, 1, 40 * (s + 1), 70), null, !0, 1e3), this._kernel.overlay.flash(100 * s + 100, !0, .3 * s), 0 < s && (this._kernel.audio.start("CrowdScore", Xt.INTERFACE, 1, 0, .5 * s), this._kernel.audio.start("Medal" + s, Xt.INTERFACE, 1, 0, .5 * s))
        },
        _getMessage: function() {
            var t = "";
            return t += j.string(this._kernel.getConfig("gui.scenes.results.message")) + " ", t += this._session.getMedalTitle(this._medalType) + "\n"
        },
        _getFgCol: function(t) {
            switch (t[1]) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3
            }
        },
        __class__: os
    });
    var hs = function(t, e) {
        this._type = e, as.call(this, t, !1)
    };
    (s["b10soc.gui.PanelShop"] = hs).__name__ = ["b10soc", "gui", "PanelShop"], hs.__super__ = as, hs.prototype = t(as.prototype, {
        _init: function() {
            as.prototype._init.call(this), this.vo = new He(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
            var t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var e = new cs(this._kernel, !0, this._session.team);
            e.setPosition(127, 42), this.addEntity(e, null, !0, 20);
            var s = new Ke(this._kernel);
            s.setPosition(215, 43), this.addEntity(s, null, !0, 30);
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new ps(this._kernel, 112, this.height - 60, e.getShort().toUpperCase(), i, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            var n = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new ps(this._kernel, this._message.width, this.height - 60, this.vo.title.toUpperCase(), n, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var r = 86, a = [Me.UPGRADE_MOVEMENT, Me.UPGRADE_SHOOTING, Me.UPGRADE_DEFENSE, Me.UPGRADE_MAGNET], _ = 0; _ < a.length;) {
                var o = a[_];
                ++_;
                var h = this._createUpgrade(o, this._type, 0, r);
                this.addEntity(h, null, !0, 15), r += 0 | h.height
            }
        },
        _createUpgrade: function(t, e, s, i) {
            var n = new Es(this._kernel, t, this.vo);
            return n.setPosition(s, i), n
        },
        _getFgCol: function() {
            switch (this._type[1]) {
                case 0:
                    return 0;
                case 1:
                    return 1
            }
        },
        __class__: hs
    });
    var ls = function(t, e) {
        this._statHeight = 12, this._statWidth = 8, this._type = e, as.call(this, t, !0)
    };
    (s["b10soc.gui.PanelUnit"] = ls).__name__ = ["b10soc", "gui", "PanelUnit"], ls.__super__ = as, ls.prototype = t(as.prototype, {
        _init: function() {
            as.prototype._init.call(this), this.vo = new He(this._kernel, this._type), this._team = new cs(this._kernel, !0, this._session.team), this._team.setPosition(126, 44), this.addEntity(this._team, null, !0, 20), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
            var t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new ps(this._kernel, 117, this.height - 60, "", e, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            var s = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new ps(this._kernel, this._message.width, this.height - 60, this._getTitle().toUpperCase(), s, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var i = 80, n = [Me.UPGRADE_MOVEMENT, Me.UPGRADE_SHOOTING, Me.UPGRADE_DEFENSE, Me.UPGRADE_MAGNET], r = 0; r < n.length;) {
                var a = n[r];
                ++r;
                var _ = this._createBar(a);
                _.set_y(i), i += _.height, this.addEntity(_, null, !0, 15)
            }
            this.configure(this._session.team)
        },
        configure: function(t) {
            this._team.configure(t), this._message.set_text(this._team.getShort())
        },
        _createBar: function(t) {
            var e = new Ve(this._kernel, this.width, this._statHeight + 2, !1),
                s = this._title.textStyle.clone();
            s.size = 16;
            var i = new ps(this._kernel, this._message.width, e.height, this._session.getUpgradeTitle(t).toUpperCase(), s);
            e.addEntity(i, null, !0, 1);
            for (var n = [], r = 0, a = this.vo.getDefault(t); r < a;) {
                r++;
                n.push(0)
            }
            for (var _ = 0, o = this.vo.getUpgrade(t); _ < o;) {
                _++;
                n.push(1)
            }
            for (var h = 0, l = this.vo.getAvailable(t); h < l;) {
                h++;
                n.push(2)
            }
            for (; 8 < n.length;) n.shift();
            for (var u = 123, c = 0; c < n.length;) {
                var d = n[c];
                ++c;
                var p = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
                p.sourceRect = new createjs.Rectangle(2 * this.width + d * this._statWidth, 0, this._statWidth, this._statHeight), e._context.addChild(p), p.x = u, p.y = 7, u += this._statWidth
            }
            return e
        },
        _getTitle: function() {
            return this.vo.title
        },
        _getFgCol: function() {
            switch (this._type[1]) {
                case 0:
                    return 0;
                case 1:
                    return 1
            }
        },
        __class__: ls
    });
    var us = function(t) {
        _e.call(this, t)
    };
    (s["b10soc.gui.PauseMenu"] = us).__name__ = ["b10soc", "gui", "PauseMenu"], us.__super__ = _e, us.prototype = t(_e.prototype, {
        _init: function() {
            var t = this;
            _e.prototype._init.call(this), this.addEntity(this._debugText = new ps(this._kernel, this._factory.width - 20, 20, "", this._factory.createTextStyle(ae.SMALLPRINT), !0, !1, .5), null, !0, 2), this._debugText.setPosition(10, this._factory.height - this._debugText.height);
            var e = (this._kernel.factory.width - 200) / 2,
                s = (this._kernel.factory.height - 65 * (this._isFullScreenSupported() ? 4 : 3)) / 2;
            this.addEntity(new Qe(this._kernel, 460, 50, (this._kernel.factory.width - 400) / 2, 0, null, mi(this, this._pressAuthor)), zt.ALWAYS, !0, 1), this.addEntity(this._logo = new ns(this._kernel, this._kernel.assets.getAsset("assets/gui/PauseBg.png")), null, !0, 0), this.addEntity(new Ye(this._kernel, this._kernel.getConfig("gui.buttons.unpause"), e, s, null, function() {
                t._kernel.overlay.activateButton(ie.UNPAUSE)
            }), zt.ALWAYS, !0, 1), this.addEntity(this._audioButton = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.audioOff"), e, s += 65, null, function() {
                t._kernel.overlay._wasMute = !t._kernel.overlay._wasMute, t._kernel.overlay.activateButton(ie.UNPAUSE)
            }), zt.ALWAYS, !0, 1), this._isFullScreenSupported() && this.addEntity(this._fullScreenButton = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.fullScreenOn"), e, s += 65, null, function() {
                t._stageClick(), t._kernel.overlay.activateButton(ie.UNPAUSE)
            }), zt.ALWAYS, !0, 1), this.addEntity(new Ye(this._kernel, this._kernel.getConfig("gui.buttons.back"), e, s += 65, null, function() {
                t._kernel.overlay.activateButton(ie.UNPAUSE), t._kernel.scenes.back()
            }), zt.DEFEND, !0, 1), this.addEntity(new Ye(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), e, s, null, function() {
                t._kernel.overlay.activateButton(ie.UNPAUSE), t._pressInstructions()
            }), zt.STANDARD, !0, 1)
        },
        _isFullScreenSupported: function() {
            try {
                var t = window.document.documentElement;
                if (null != mi(t, t.requestFullscreen)) return !0;
                if (null != t.msRequestFullscreen) return !0;
                if (null != t.mozRequestFullScreen) return !0;
                if (null != t.webkitRequestFullscreen) return !0
            } catch (t) {}
            return !1
        },
        _isFullScreenEnabled: function() {
            try {
                var t = window.document;
                return !!t.fullscreenElement || (!!t.mozFullScreenElement || (!!t.webkitFullscreenElement || t.msFullscreenElement))
            } catch (t) {}
            return !1
        },
        _disposer: function() {
            this._kernel._stage.removeEventListener("click", mi(this, this._stageClick), !0), _e.prototype._disposer.call(this)
        },
        _pressInstructions: function() {
            try {
                this._kernel.scenes.get_scene()._pressInstructions()
            } catch (t) {
                this._kernel.scenes.setScene(ne.INSTRUCTIONS)
            }
        },
        _pressAuthor: function() {
            try {
                this._kernel.scenes.get_scene()._pressAuthor()
            } catch (t) {}
        },
        _updater: function(t) {
            null == t && (t = 0), _e.prototype._updater.call(this, t), this._isFullScreenClicked = !1
        },
        pauseHandler: function(t) {
            var e = this;
            t ? (this._audioButton.setTitle(this._kernel.getConfig(this._kernel.audio.isMute ? "gui.buttons.audioOn" : "gui.buttons.audioOff")), null != this._fullScreenButton && this._fullScreenButton.setTitle(this._kernel.getConfig(this._isFullScreenEnabled() ? "gui.buttons.fullScreenOff" : "gui.buttons.fullScreenOn")), this._kernel._stage.addEventListener("click", mi(this, this._stageClick), !0), this._debugText.set_text(this._factory.id.toLowerCase() + " v" + this._factory.version + " @ " + Math.round(this._kernel.getFramerate()) + "fps : " + this._session.cache.debugMessage), this.addEntity(new ri(this._kernel, function(t) {
                e._context.y = t
            }, this._factory.height, 0, 0, 500, null, si.EASE_OUT, ii.QUARTIC)), this.addEntity(new ri(this._kernel, function(t) {
                e._logo.set_alpha(t)
            }, 0, 1, 2e3, 2e3, null, si.EASE_OUT, ii.QUARTIC))) : this._kernel._stage.removeEventListener("click", mi(this, this._stageClick), !0)
        },
        _stageClick: function(t) {
            this._kernel.isActive || null != this._fullScreenButton && (this._isFullScreenClicked || this._fullScreenButton.isOver && (this._isFullScreenEnabled() ? this._kernel.system.requestExitFullScreen() : (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()), this._isFullScreenClicked = !0, null != t && t.stopPropagation(), this._kernel.overlay.activateButton(ie.UNPAUSE)))
        },
        __class__: us
    });
    var cs = function(t, e, s) {
        this._isSmall = e, this._type = s, Ve.call(this, t, this._isSmall ? 60 : 180, this._isSmall ? 32 : 140, !1)
    };
    (s["b10soc.gui.Team"] = cs).__name__ = ["b10soc", "gui", "Team"], cs.__super__ = Ve, cs.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._context.cache(0, 0, this.width, this.height), this._context2d = Zs.__cast(this._context.cacheCanvas, HTMLCanvasElement).getContext("2d", null), this.configure(this._type)
        },
        configure: function(t) {
            this._type = t, this._vo = new Ge(this._kernel, this._type);
            var e = this._type[1],
                s = e < Ue.__constructs__.slice().length / 2,
                i = this._isSmall ? "assets/gui/TeamsHud.png" : s ? "assets/gui/TeamsLevel1.png" : "assets/gui/TeamsLevel2.png",
                n = this._assets.getAsset(i),
                r = e % 5 + (this._isSmall && !s ? 5 : 0),
                a = Math.floor(e % 35 / 5),
                _ = r * this.width,
                o = a * this.height;
            this._context2d.clearRect(0, 0, this.width, this.height), this._context2d.drawImage(n, _, o, this.width, this.height, 0, 0, this.width, this.height)
        },
        getShort: function() {
            return this._vo.short
        },
        __class__: cs
    });
    var ds = function(t, e) {
        this._callback = e, Ve.call(this, t, 76, 260, !1)
    };
    (s["b10soc.gui.TeamCarousel"] = ds).__name__ = ["b10soc", "gui", "TeamCarousel"], ds.__super__ = Ve, ds.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this);
            var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/TeamCarousel.png"));
            t.sourceRect = new createjs.Rectangle(0, 0, this.width, this.height), this._context.addChild(t), this._teamsContainer = new createjs.Container, this._context.addChild(this._teamsContainer);
            var e = new createjs.Bitmap(this._assets.getAsset("assets/gui/TeamCarousel.png"));
            e.sourceRect = new createjs.Rectangle(this.width, 0, this.width, this.height), this._context.addChild(e), this._buttonTop = new ze(this._kernel, !0, 5, 6), this.addEntity(this._buttonTop, null, !0, 10), this._buttonBottom = new ze(this._kernel, !1, 5, this.height - 36), this.addEntity(this._buttonBottom, null, !0, 10), this._configure()
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t);
            var e = !1;
            (this._kernel.inputs.keyboard.getIsKeyPress($t.UP) || this._buttonTop.isOver && this._kernel.inputs.mouse.getIsButtonPress()) && (this._scroll(-1), e = !0), (this._kernel.inputs.keyboard.getIsKeyPress($t.DOWN) || this._buttonBottom.isOver && this._kernel.inputs.mouse.getIsButtonPress()) && (this._scroll(1), e = !0), e || ((this._kernel.inputs.keyboard.getIsKeyDown($t.UP) && this._kernel.inputs.keyboard.getKeyDownDuration($t.UP) % Math.round(this._factory.targetFramerate / 2) == 0 || this._buttonTop.isOver && this._kernel.inputs.mouse.getIsButtonDown() && this._kernel.inputs.mouse.getButtonDownDuration() % Math.round(this._factory.targetFramerate / 2) == 0) && this._scroll(-1), (this._kernel.inputs.keyboard.getIsKeyDown($t.DOWN) && this._kernel.inputs.keyboard.getKeyDownDuration($t.DOWN) % Math.round(this._factory.targetFramerate / 2) == 0 || this._buttonBottom.isOver && this._kernel.inputs.mouse.getIsButtonDown() && this._kernel.inputs.mouse.getButtonDownDuration() % Math.round(this._factory.targetFramerate / 2) == 0) && this._scroll(1))
        },
        _scroll: function(t) {
            if (0 != t) {
                var e = et.createEnumIndex(Ue, (this._session.team[1] + t + Ue.__constructs__.slice().length) % Ue.__constructs__.slice().length, null);
                this._session.team = e, this._configure()
            }
        },
        _configure: function() {
            for (var t = this._session.team, e = 0, s = this.getEntitiesByClass(cs); e < s.length;) {
                var i = s[e];
                ++e, i.isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer())
            }
            this._teamsContainer.removeAllChildren();
            for (var n = 37, r = 0; r < 5;) {
                var a = r++,
                    _ = et.createEnumIndex(Ue, (t[1] - 2 + a + Ue.__constructs__.slice().length) % Ue.__constructs__.slice().length, null),
                    o = new cs(this._kernel, !0, _);
                this.addEntity(o), 2 == a && (n += 6), o._context.x = 8, o._context.y = n, n += 36, 2 == a && (n += 5), this._teamsContainer.addChild(o._context)
            }
            null != this._callback && this._callback()
        },
        __class__: ds
    });
    var ps = function(t, e, s, i, n, r, a, _) {
        null == _ && (_ = 1), null == a && (a = !1), null == r && (r = !1), null == i && (i = ""), i = E.replace(i, "<BR/>", "\n"), i = E.replace(i, "<br/>", "\n"), Qt.call(this, t, e, s, i, n, r, a), this.set_alpha(_)
    };
    (s["b10soc.gui.Text"] = ps).__name__ = ["b10soc", "gui", "Text"], ps.__super__ = Qt, ps.prototype = t(Qt.prototype, {
        _init: function() {
            Qt.prototype._init.call(this), this._textField.textBaseline = "alphabetic", this._textField.y += 1.15 * this.textStyle.size, this._prevTextStyle = "invalidated"
        },
        set_alpha: function(t) {
            return this._context.alpha = t
        },
        __class__: ps
    });
    var gs = function(t, e, s) {
        this._big = e, this._small = s, Ve.call(this, t, 360, 200, !1)
    };
    (s["b10soc.gui.TitleBig"] = gs).__name__ = ["b10soc", "gui", "TitleBig"], gs.__super__ = Ve, gs.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this);
            this._textBig = new ps(this._kernel, this.width, 30, "", this._factory.createTextStyle(ae.OVERSIZED), !1, !1, 1), this._textBig.setPosition(-1, 20), this.addEntity(this._textBig, null, !0, 1), this._textSmall = new ps(this._kernel, this.width, 30, "", this._factory.createTextStyle(ae.SUBHEAD), !1, !1, .5), this._textSmall.setPosition(0, 10), this.addEntity(this._textSmall, null, !0, 1), this.configure(this._big, this._small)
        },
        configure: function(t, e) {
            this._big = t, this._small = e, this._textBig.set_text(this._big.toUpperCase()), this._textSmall.set_text(this._small.toUpperCase())
        },
        __class__: gs
    });
    var fs = function(t, e) {
        this._title = e, Ve.call(this, t, 350, 40, !1)
    };
    (s["b10soc.gui.TitleSmall"] = fs).__name__ = ["b10soc", "gui", "TitleSmall"], fs.__super__ = Ve, fs.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._text = new ps(this._kernel, this.width, 30, "", this._factory.createTextStyle(ae.HEADLINE), !1, !1, 1), this._text.setPosition(0, 7), this.addEntity(this._text, null, !0, 1), this.set_x((this._factory.width - this.width) / 2), this.configure(this._title)
        },
        configure: function(t) {
            this._title = t, this._title = this._title.toUpperCase(), this._text.set_text(this._title)
        },
        __class__: fs
    });
    var Es = function(t, e, s) {
        this._statHeight = 24, this._statWidth = 16, this._MAX_STATS = 8, this._type = e, this._unitVo = s, Ve.call(this, t, 380, 28, !1)
    };
    (s["b10soc.gui.Upgrade"] = Es).__name__ = ["b10soc", "gui", "Upgrade"], Es.__super__ = Ve, Es.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._prevCoins = this._session.getCoins();
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            t.size -= 4;
            var e = new ps(this._kernel, 112, this.height, this._session.getUpgradeTitle(this._type).toUpperCase(), t);
            e.set_y(1), this.addEntity(e, null, !0, 1), this._bars = new createjs.Container, this._bars.x = 123, this._context.addChild(this._bars), this._button = new Xe(this._kernel, "", 245, -2, null, mi(this, this.buy)), this._session.get_isTester() && this.addEntity(new Qe(this._kernel, this._statWidth * this._MAX_STATS, this._statHeight, this._bars.x, 0, null, mi(this, this._reduce)), null, !0, 1);
            var s = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new ps(this._kernel, 100, 20, "", s, null, null, .5), this._message.setPosition(244, 4), this.addEntity(this._message, null, !0, 29), this.configure()
        },
        _updater: function(t) {
            null == t && (t = 0), Ve.prototype._updater.call(this, t), this._prevCoins != this._session.getCoins() && (this._prevCoins = this._session.getCoins(), this.configure())
        },
        configure: function() {
            this._bars.removeAllChildren();
            var t = this._unitVo.getTotal(this._type),
                e = this._getPrice(t + 1),
                s = e <= this._session.getCoins();
            this._button.setTitle(j.string(this._kernel.getConfig("gui.buttons.buy")) + " " + e), t == this._MAX_STATS ? (this._button.remove(!0), this._message.set_text(j.string(this._kernel.getConfig("gui.scenes.shop.maxed")).toUpperCase())) : s ? (this._message.set_text(""), this.addEntity(this._button, null, !0, 30)) : (this._button.remove(!0), this._message.set_text(null == e ? "null" : "" + e));
            for (var i = [], n = 0, r = this._unitVo.getDefault(this._type); n < r;) {
                n++;
                i.push(0)
            }
            for (var a = 0, _ = this._unitVo.getUpgrade(this._type); a < _;) {
                a++;
                i.push(1)
            }
            for (var o = 0, h = this._unitVo.getAvailable(this._type); o < h;) {
                o++;
                i.push(2)
            }
            for (; 8 < i.length;) i.shift();
            for (var l = 0, u = 0; u < i.length;) {
                var c = i[u];
                ++u;
                var d = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
                d.sourceRect = new createjs.Rectangle(2 * this.width + c * this._statWidth, 0, this._statWidth, this._statHeight), this._bars.addChild(d), d.x = l, l += this._statWidth
            }
        },
        _getPrice: function(t) {
            t < 0 && (t = 0), t > this._MAX_STATS && (t = this._MAX_STATS);
            return [0, 100, 300, 500, 800, 1300, 2100, 3400, 5500][t]
        },
        buy: function() {
            var t = this._unitVo.getTotal(this._type),
                e = this._getPrice(t + 1);
            e <= this._session.getCoins() && (this._session.setCoins(null, this._session.getCoins() - e), this._session.setUpgrade(this._type, this._unitType, this._unitVo.getUpgrade(this._type) + 1), this.configure(), this._kernel.audio.start("Coin", Xt.INTERFACE, 0, 0, .5))
        },
        _reduce: function() {
            this._session.setUpgrade(this._type, this._unitType, this._session.getUpgrade(this._type, this._unitType) - 1), this.configure()
        },
        __class__: Es
    });
    var ys = function(t, e) {
        null == e && (e = 1), Ve.call(this, t, null, null, !1), this.set_alpha(e)
    };
    (s["b10soc.gui.Vignette"] = ys).__name__ = ["b10soc", "gui", "Vignette"], ys.__super__ = Ve, ys.prototype = t(Ve.prototype, {
        _init: function() {
            Ve.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Vignette.png")), this._context.addChild(this._bitmap)
        },
        set_alpha: function(t) {
            return this._bitmap.alpha = t
        },
        __class__: ys
    });
    var vs = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, F.call(this, t, e, s = !0, i, n)
    };
    (s["b10soc.scenes.AScene"] = vs).__name__ = ["b10soc", "scenes", "AScene"], vs.__super__ = F, vs.prototype = t(F.prototype, {
        _init: function() {
            F.prototype._init.call(this), this._easyTweezers = [], this._kernel.overlay.get_pauseEntity().setAgenda(zt.STANDARD), this._factory.preventDefaultForKeys([$t.SPACE]), this._kernel.audio.start("MusicMenu", Xt.MUSIC, -1, 0, .35, null, !0)
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([$t.SPACE]), F.prototype._disposer.call(this)
        },
        _pressContinue: function() {
            this._kernel.log("button: continue: " + j.string(this.type)), this._kernel.inputs.keyboard.getIsKeyDown($t.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown($t.SQUARERIGHT) && this._session.setIsTester(!this._session.get_isTester());
            var t = this._factory.getNextSceneType(this.type);
            t == ne.SELECT_LEVEL && this._session.getMedal(Ae.LEVEL_1) == Se.MEDAL_NONE && (t = ne.GAME);
            var e = mi(yi = this._kernel.scenes, yi.setScene),
                s = t;
            this._outro(function() {
                e(s)
            })
        },
        _pressInstructions: function() {
            this._kernel.log("button: instructions");
            var t = mi(yi = this._kernel.scenes, yi.setScene);
            this._outro(function() {
                t(ne.INSTRUCTIONS)
            })
        },
        _pressWebsite: function() {
            var e = this;
            this._kernel.log("url: website"), this._kernel.log("button: website"), Ps.delay(function() {
                var t = e._kernel.getConfig("settings.urls.website");
                window.top.location.href = j.string(t)
            }, 500)
        },
        _pressAuthor: function() {
            var e = this;
            this._kernel.log("button: author"), Ps.delay(function() {
                var t = e._kernel.getConfig("settings.urls.author");
                window.top.location.href = j.string(t)
            }, 500)
        },
        _outro: function(t) {
            this._isOutroCalled || (this._isOutroCalled = !0, null != t && t())
        },
        _addBg: function() {
            this.addEntity(new je(this._kernel, this.type), null, !0, 1)
        },
        _addFg: function(t, e, s, i) {
            null == i && (i = 0), null == s && (s = ""), null == e && (e = "");
            var n = this;
            this._fgHeader = new ns(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgHeader2.png" : "assets/gui/SceneFgHeader1.png"));
            var r = this._fgHeader;
            r.set_x(r.x - i), this.addEntity(this._fgHeader, null, !0, 110), t ? this._fgHeader.addEntity(new fs(this._kernel, e), null, !0, 1) : this._fgHeader.addEntity(new gs(this._kernel, e, s), null, !0, 1), this._fgFooter = new ns(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgFooter2.png" : "assets/gui/SceneFgFooter1.png")), this.addEntity(this._fgFooter, null, !0, 100), this.addEntity(new ri(this._kernel, function(t) {
                n._fgHeader.set_y(t)
            }, -this._factory.height, this._fgHeader.y, 500, 1e3, null, si.EASE_OUT, ii.EXPONENTIAL)), this.addEntity(new ri(this._kernel, function(t) {
                n._fgFooter.set_y(t)
            }, this._factory.height, this._fgFooter.y, t ? 0 : 750, 1e3, null, si.EASE_OUT, ii.EXPONENTIAL))
        },
        _addButtons: function(t, e, s, i, n, r, a) {
            null == a && (a = 0), null == r && (r = 0), null == n && (n = 0), null == t && (t = 1e3);
            var _ = this;
            this._buttonRight = e, this._buttonLeft = s, this._buttonCenter = i, null != this._buttonRight && (this._buttonRight.setPosition(this._factory.width - 200 - 30, this._factory.height - 65 - 13), this.addEntity(this._buttonRight, null, !0, t), this.addEntity(new ri(this._kernel, function(t) {
                _._buttonRight.set_y(t)
            }, this._factory.height + 60, this._buttonRight.y, n + 1200, 2e3, null, si.EASE_OUT, ii.ELASTIC()))), null != this._buttonCenter && (this._buttonCenter.setPosition(.5 * (this._factory.width - 200), this._factory.height - 65 - 13), this.addEntity(this._buttonCenter, null, !0, t + 1), this.addEntity(new ri(this._kernel, function(t) {
                _._buttonCenter.set_y(t)
            }, this._factory.height + 60, this._buttonCenter.y, a + 1300, 2e3, null, si.EASE_OUT, ii.ELASTIC()))), null != this._buttonLeft && (this._buttonLeft.setPosition(30, this._factory.height - 65 - 13), this.addEntity(this._buttonLeft, null, !0, t + 2), this.addEntity(new ri(this._kernel, function(t) {
                _._buttonLeft.set_y(t)
            }, this._factory.height + 60, this._buttonLeft.y, r + 1400, 2e3, null, si.EASE_OUT, ii.ELASTIC())))
        },
        _defaultOutro: function(t) {
            var e = this;
            if (!this._isOutroCalled) {
                this._isOutroCalled = !0;
                for (var s = 0, i = this.getEntitiesByClass(ri); s < i.length;) {
                    var n = i[s];
                    ++s, n.remove()
                }
                this._easyTweez(!1), null != this._buttonLeft && this.addEntity(new ri(this._kernel, function(t) {
                    e._buttonLeft.set_y(t)
                }, this._buttonLeft.y, this._factory.height, 0, 1e3, null, si.EASE_IN, ii.BACK())), null != this._buttonCenter && this.addEntity(new ri(this._kernel, function(t) {
                    e._buttonCenter.set_y(t)
                }, this._buttonCenter.y, this._factory.height, 50, 1e3, null, si.EASE_IN, ii.BACK())), null != this._buttonRight && this.addEntity(new ri(this._kernel, function(t) {
                    e._buttonRight.set_y(t)
                }, this._buttonRight.y, this._factory.height, 100, 1e3, null, si.EASE_IN, ii.BACK())), this.addEntity(new ri(this._kernel, function(t) {
                    e._fgHeader.set_y(t)
                }, this._fgHeader.y, -this._factory.height, 250, 500, null, si.EASE_IN, ii.EXPONENTIAL)), this.addEntity(new ri(this._kernel, function(t) {
                    e._fgFooter.set_y(t)
                }, this._fgFooter.y, this._factory.height, 500, 500, null, si.EASE_IN, ii.EXPONENTIAL)), this.addEntity(new ri(this._kernel, function(t) {}, 0, 0, 100, 1e3, null, si.EASE_IN, ii.BACK(), t)), this._kernel.audio.start("Transition", Xt.INTERFACE, 0, 0, .25), this._kernel.isDebug && t()
            }
        },
        _easyTweez: function(t) {
            null == t && (t = !0);
            for (var e = 0, s = this._easyTweezers; e < s.length;) {
                var i = [s[e]];
                ++e, t ? i[0].isVerticalIn ? this.addEntity(new ri(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_y(t)
                    }
                }(i), -this._factory.height + i[0].guiEntity.y, i[0].guiEntity.y, 500 + 100 * i[0].sequence, 2e3, null, si.EASE_OUT, ii.QUARTIC)) : this.addEntity(new ri(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_x(t)
                    }
                }(i), this._factory.width + i[0].guiEntity.x, i[0].guiEntity.x, 500 + 100 * i[0].sequence, 2e3, null, si.EASE_OUT, ii.QUARTIC)) : this.addEntity(new ri(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_x(t)
                    }
                }(i), i[0].guiEntity.x, -1.5 * this._factory.width + i[0].guiEntity.x, 50 * i[0].sequence, 500, null, si.EASE_IN, ii.BACK()))
            }
        },
        _addEasyTweez: function(t, e, s) {
            null == s && (s = !0), null != t && this._easyTweezers.push({
                guiEntity: t,
                sequence: e,
                isVerticalIn: s
            })
        },
        _createBurst: function(t, e, s, i) {
            null == i && (i = 1e4);
            var n = new Je(this._kernel, t, e, s);
            return this.addEntity(n, null, !0, i), n
        },
        __class__: vs
    });
    var ms = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Avatar"] = ms).__name__ = ["b10soc", "scenes", "Avatar"], ms.__super__ = vs, ms.prototype = t(vs.prototype, {
        _init: function() {
            var e = this;
            vs.prototype._init.call(this), this._session.cache.levelType = Ae.LEVEL_1, this._kernel.audio.start("MusicMenu", Xt.MUSIC, -1, 0, .15, 0, !0), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.avatar.title")), this._panelUnitA = new ls(this._kernel, ke.UNIT_A), this._panelUnitA.set_x(15), this.addEntity(this._panelUnitA, null, !0, 1e3), this._panelUnitB = new ls(this._kernel, ke.UNIT_B), this._panelUnitB.set_x(this._factory.width - this._panelUnitB.width - 15), this.addEntity(this._panelUnitB, null, !0, 1e3), this.addEntity(new ri(this._kernel, function(t) {
                e._panelUnitA.set_x(t)
            }, -(this._panelUnitA.width + this._panelUnitA.x), this._panelUnitA.x, 1500, 1e3, null, si.EASE_OUT, ii.QUARTIC)), this.addEntity(new ri(this._kernel, function(t) {
                e._panelUnitB.set_x(t)
            }, this._factory.width, this._panelUnitB.x, 1500, 1e3, null, si.EASE_OUT, ii.QUARTIC)), this._avatarUnitA = new ns(this._kernel, this._assets.getAsset(this._getAvatarImage(ke.UNIT_A, this._session.team))), this._avatarUnitB = new ns(this._kernel, this._assets.getAsset(this._getAvatarImage(ke.UNIT_B, this._session.team))), this.addEntity(this._avatarUnitA, null, !0, 300), this.addEntity(this._avatarUnitB, null, !0, 300), this.addEntity(new ri(this._kernel, function(t) {
                e._avatarUnitA.set_x(t)
            }, -this._factory.width, this._avatarUnitA.x, 100, 2e3, null, si.EASE_OUT, ii.QUARTIC)), this.addEntity(new ri(this._kernel, function(t) {
                e._avatarUnitB.set_x(t)
            }, this._factory.width, this._avatarUnitB.x, 100, 2e3, null, si.EASE_OUT, ii.QUARTIC)), this._teamCarousel = new ds(this._kernel, mi(this, this._callbackTeamChange)), this.addEntity(this._teamCarousel, null, !0, 1e3), this._teamCarousel.setPosition(Math.round((this._factory.width - this._teamCarousel.width) / 2), 60), this.addEntity(new ri(this._kernel, function(t) {
                e._teamCarousel.set_y(Math.round(t))
            }, this._factory.height, this._teamCarousel.y, 2e3, 1e3, null, si.EASE_OUT, ii.QUARTIC));
            var t = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitA"), 0, 0, this._kernel.factory.keyNext, mi(this, this._pressUnitA)),
                s = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitB"), 0, 0, null, mi(this, this._pressUnitB));
            this._addButtons(null, s, t), this._easyTweez()
        },
        _getAvatarImage: function(t, e) {
            var s = new Ge(this._kernel, e);
            switch (t[1]) {
                case 0:
                    switch (s.kitType[1]) {
                        case 0:
                            return "assets/gui/AvatarUnitA0.png";
                        case 1:
                            return "assets/gui/AvatarUnitA1.png";
                        case 2:
                            return "assets/gui/AvatarUnitA2.png";
                        case 3:
                            return "assets/gui/AvatarUnitA3.png";
                        case 4:
                            return "assets/gui/AvatarUnitA4.png";
                        case 5:
                            return "assets/gui/AvatarUnitA5.png";
                        case 6:
                            return "assets/gui/AvatarUnitA6.png";
                        case 7:
                            return "assets/gui/AvatarUnitA7.png"
                    }
                    break;
                case 1:
                    switch (s.kitType[1]) {
                        case 0:
                            return "assets/gui/AvatarUnitB0.png";
                        case 1:
                            return "assets/gui/AvatarUnitB1.png";
                        case 2:
                            return "assets/gui/AvatarUnitB2.png";
                        case 3:
                            return "assets/gui/AvatarUnitB3.png";
                        case 4:
                            return "assets/gui/AvatarUnitB4.png";
                        case 5:
                            return "assets/gui/AvatarUnitB5.png";
                        case 6:
                            return "assets/gui/AvatarUnitB6.png";
                        case 7:
                            return "assets/gui/AvatarUnitB7.png"
                    }
            }
        },
        _callbackTeamChange: function() {
            this._avatarUnitA.configure(this._assets.getAsset(this._getAvatarImage(ke.UNIT_A, this._session.team))), this._avatarUnitB.configure(this._assets.getAsset(this._getAvatarImage(ke.UNIT_B, this._session.team))), this._panelUnitA.configure(this._session.team), this._panelUnitB.configure(this._session.team)
        },
        _outro: function(t) {
            var e = this;
            this._defaultOutro(t), this._kernel.audio.start("CrowdScore", Xt.INTERFACE, 1, 0, .5), this.addEntity(new ri(this._kernel, function(t) {
                e._panelUnitA.set_x(t)
            }, this._panelUnitA.x, -this._factory.width, 0, 800, null, si.EASE_IN, ii.BACK())), this.addEntity(new ri(this._kernel, function(t) {
                e._panelUnitB.set_x(t)
            }, this._panelUnitB.x, this._factory.width, 0, 800, null, si.EASE_IN, ii.BACK())), this.addEntity(new ri(this._kernel, function(t) {
                e._avatarUnitA.set_x(t)
            }, this._avatarUnitA.x, -this._factory.width, 0, 1e3, null, si.EASE_IN, ii.BACK(.75))), this.addEntity(new ri(this._kernel, function(t) {
                e._avatarUnitB.set_x(t)
            }, this._avatarUnitB.x, this._factory.width, 0, 1e3, null, si.EASE_IN, ii.BACK(.75))), this.addEntity(new ri(this._kernel, function(t) {
                e._teamCarousel.set_y(Math.round(t))
            }, this._teamCarousel.y, this._factory.height, 0, 800, null, si.EASE_IN, ii.BACK(.75)))
        },
        _pressUnitA: function() {
            this._session.cache.unitType = ke.UNIT_A, this._pressContinue()
        },
        _pressUnitB: function() {
            this._session.cache.unitType = ke.UNIT_B, this._pressContinue()
        },
        _pressContinue: function() {
            this._session.cache.createOpponents(this._session.team), vs.prototype._pressContinue.call(this)
        },
        __class__: ms
    });
    var Ts = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Game"] = Ts).__name__ = ["b10soc", "scenes", "Game"], Ts.__super__ = vs, Ts.prototype = t(vs.prototype, {
        _init: function() {
            if (vs.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(zt.DEFEND), this._session.cache.totalPlays++, this._session.cache.reset(), this._levelVo = new Pe(this._kernel, this._session.cache.levelType), this._unitVo = new He(this._kernel, this._session.cache.unitType), this.addEntity(this._hud = new qe(this._kernel, !this._levelVo.isNew), null, !0, 100), this.addEntity(this._vignette = new ys(this._kernel, 1), null, !0, 20), this._createLocation(), this._session.get_isTester()) {
                var t = mi(this, this._winMedal),
                    e = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.testMode.bronze"), 0, 0, null, function() {
                        t(Se.MEDAL_BRONZE)
                    }),
                    s = mi(this, this._winMedal),
                    i = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.testMode.silver"), 0, 0, null, function() {
                        s(Se.MEDAL_SILVER)
                    }),
                    n = mi(this, this._winMedal),
                    r = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.testMode.gold"), 0, 0, null, function() {
                        n(Se.MEDAL_GOLD)
                    });
                this._addButtons(null, r, e, i, 1e3, 1e3, 1e3)
            }
            this._kernel.audio.stop(null, Xt.MUSIC), this._kernel.log("play: " + j.string(this._levelVo.type)), this._factory.preventDefaultForKeys([$t.UP, $t.RIGHT, $t.DOWN, $t.LEFT, $t.SPACE])
        },
        _createDelay: function(t, e) {
            null == e && (e = 1e3), this.addEntity(new Yt(this._kernel, t, e))
        },
        _removeLocationAndGoal: function() {
            if (null != this._location) {
                var t = this._location;
                t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), this._location = null
            }
            if (null != this._goal) {
                var e = this._goal;
                e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._goal = null
            }
            this._isTransitioning = !1
        },
        _createLocation: function() {
            this._removeLocationAndGoal(), this._session.cache.currentPeriod != Ie.PERIOD_1 && this._kernel.overlay.flash(1e3, !0, 1, 16777215), this._vignette.get_view().set_isVisible(!1), this.addEntity(this._location = new Ne(this._kernel, this._levelVo, this._unitVo), null, !0, 10), this._hud.configurePeriods(!0);
            var t, e = this._hud;
            switch (this._session.cache.currentPeriod[1]) {
                case 0:
                    t = null;
                    break;
                case 1:
                    t = "gui.scenes.game.hud.startPeriod1";
                    break;
                case 2:
                    t = "gui.scenes.game.hud.startPeriod2";
                    break;
                case 3:
                    t = "gui.scenes.game.hud.startPeriod3"
            }
            e.configureAlert(this._kernel.getConfig(t))
        },
        _createGoal: function() {
            this._removeLocationAndGoal(), this._kernel.overlay.flash(1e3, !0, 1, 16777215), this.addEntity(this._goal = new xe(this._kernel, this._levelVo, this._unitVo, this._hud, mi(this, this._goalCallback)), null, !0, 10)
        },
        _winMedal: function(t) {
            this._session.cache.medalType = t, this._session.setMedal(this._levelVo.type, this._unitVo.type, t), this._session.setCoins(null, this._session.getCoins() + this._getScore(t)), this._kernel.log("medal: " + j.string(t) + ": " + j.string(this._levelVo.type)), this._gameOver()
        },
        _gameOver: function() {
            this._kernel.scenes.next()
        },
        _updater: function(t) {
            null == t && (t = 0), vs.prototype._updater.call(this, t), null != this._location && (this._hud.configureDistance(this._location.getDistanceToGoal()), this._isTransitioning || (0 == this._location.getDistanceToGoal() ? (this._isTransitioning = !0, this._kernel.overlay.flash(500, !0, 1, 16777215), this._createGoal()) : this._location.player.isDefeated && (this._isTransitioning = !0, this._kernel.overlay.flash(500, !0, 1, 0), this._kernel.audio.start("CrowdMiss", Xt.EFFECTS, 1, 0, 1), this._kernel.audio.start("Defeated", Xt.EFFECTS, 1, 0, 1), this._kernel.audio.start("Whistle", Xt.EFFECTS, 1, 0, .5), this._vignette.get_view().set_isVisible(!0), this._session.cache.setOutcome(null, be.LOSS), this._hud.configureAlert(this._kernel.getConfig("gui.scenes.game.hud.defeated")), this._nextPeriod(), this._whatNext(2e3))));
            this._goal
        },
        _goalCallback: function(t) {
            this._vignette.get_view().set_isVisible(!t), this._session.cache.setOutcome(null, t ? be.WIN : be.LOSS), this._hud.configureAlert(this._kernel.getConfig(t ? "gui.scenes.game.hud.score" : "gui.scenes.game.hud.miss")), this._nextPeriod(), this._whatNext()
        },
        _nextPeriod: function() {
            switch (this._session.cache.currentPeriod[1]) {
                case 0:
                    break;
                case 1:
                    this._session.cache.currentPeriod = Ie.PERIOD_2;
                    break;
                case 2:
                    this._session.cache.currentPeriod = Ie.PERIOD_3;
                    break;
                case 3:
                    this._session.cache.currentPeriod = Ie.GAME_OVER
            }
            this._hud.configurePeriods(!1)
        },
        _whatNext: function(t) {
            switch (null == t && (t = 1500), this._session.cache.currentPeriod[1]) {
                case 0:
                    var e = mi(this, this._winMedal),
                        s = this._session.getMedalFromCachedOutcomes();
                    this._createDelay(function() {
                        e(s)
                    }, t);
                    break;
                case 1:
                case 2:
                case 3:
                    this._createDelay(mi(this, this._createLocation), t)
            }
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([$t.UP, $t.RIGHT, $t.DOWN, $t.LEFT, $t.SPACE]), this._kernel.audio.stop(null, Xt.MUSIC);
            var t = this._session;
            t.saveCount++, t._setter(), t._savedData._____VERSION = t._version, t._savedData[t.id] = t._data, t._driverSave(), vs.prototype._disposer.call(this)
        },
        _getScore: function(t) {
            switch (t[1]) {
                case 0:
                    return 0;
                case 1:
                    return 3e3;
                case 2:
                    return 5e3;
                case 3:
                    return 8e3
            }
        },
        __class__: Ts
    });
    var As = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Instructions"] = As).__name__ = ["b10soc", "scenes", "Instructions"], As.__super__ = vs, As.prototype = t(vs.prototype, {
        _init: function() {
            vs.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(zt.DEFEND), this._kernel.audio.start("MusicMenu", Xt.MUSIC, -1, 0, .15, 0, !0), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.instructions.title"));
            var t = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, this._kernel.factory.keyNext, mi(this, this._pressContinue));
            this._addButtons(null, t);
            var e = new ns(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"));
            this.addEntity(e, null, !0, 20), e.setPosition((this._factory.width - e.width) / 7, (this._factory.height - e.height) / 2);
            var s = new ps(this._kernel, 300, 300, j.string(this._kernel.getConfig("gui.scenes.instructions.message")).toUpperCase(), this._factory.createTextStyle(ae.BODY), !0, !1);
            s.setPosition(this._kernel.factory.width - s.width - 40, 90), this.addEntity(s, null, !0, 21), this._addEasyTweez(e, 1, !1), this._addEasyTweez(s, 2, !1), this._easyTweez(!0)
        },
        _outro: function(t) {
            this._defaultOutro(t)
        },
        __class__: As
    });
    var ws = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Intro"] = ws).__name__ = ["b10soc", "scenes", "Intro"], ws.__super__ = vs, ws.prototype = t(vs.prototype, {
        _updater: function(t) {
            null == t && (t = 0), vs.prototype._updater.call(this, t), this._kernel.scenes.next()
        },
        __class__: ws
    });
    var Ss = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Menu"] = Ss).__name__ = ["b10soc", "scenes", "Menu"], Ss.__super__ = vs, Ss.prototype = t(vs.prototype, {
        _init: function() {
            var e = this;
            vs.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Xt.MUSIC, -1, 0, .15, 0, !0), this._kernel.audio.start("CrowdScore", Xt.EFFECTS, 0, 0, .5), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.menu.title"), this._kernel.getConfig("gui.scenes.menu.subtitle")), this.addEntity(this._action = new We(this._kernel), null, !0, 200), this.addEntity(new ri(this._kernel, function(t) {
                e._action.set_x(t)
            }, -this._factory.width, this._action.x, 500, 2e3, null, si.EASE_OUT, ii.ELASTIC()));
            var t = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, this._kernel.factory.keyNext, mi(this, this._pressContinue)),
                s = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), 0, 0, null, mi(this, this._pressInstructions));
            this._addButtons(null, t, s), this._easyTweez()
        },
        _outro: function(t) {
            var e = this;
            this._defaultOutro(t), this.addEntity(new ri(this._kernel, function(t) {
                e._action.set_x(t)
            }, this._action.x, this._factory.width, 0, 1e3, null, si.EASE_IN, ii.BACK()))
        },
        __class__: Ss
    });
    var bs = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Results"] = bs).__name__ = ["b10soc", "scenes", "Results"], bs.__super__ = vs, bs.prototype = t(vs.prototype, {
        _init: function() {
            var e = this;
            vs.prototype._init.call(this), this._levelVo = new Pe(this._kernel, this._session.cache.levelType, this._session.cache.unitType), this._kernel.audio.start("GameStart", Xt.INTERFACE, 1, 0, .5), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.results.title"), this._levelVo.title, 120), this.addEntity(this._hero = new Ze(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this.addEntity(new ri(this._kernel, function(t) {
                e._hero.set_x(t)
            }, -this._factory.width, this._hero.x, 500, 2e3, null, si.EASE_OUT, ii.ELASTIC())), this._panelResult = new os(this._kernel, this._session.cache.medalType), this._panelResult.set_x(this._factory.width - this._panelResult.width - 15), this.addEntity(this._panelResult, null, !0, 1e3), this.addEntity(new ri(this._kernel, function(t) {
                e._panelResult.set_x(t)
            }, this._factory.width, this._panelResult.x, 1500, 1e3, null, si.EASE_OUT, ii.QUARTIC));
            var t = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, this._kernel.factory.keyNext, mi(this, this._pressContinue)),
                s = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.website"), 0, 0, null, mi(this, this._pressWebsite));
            this._addButtons(null, t, s), this._easyTweez(!0)
        },
        _updater: function(t) {
            null == t && (t = 0), vs.prototype._updater.call(this, t), 2e3 < this._age && Math.random() < this._session.cache.medalType[1] / 3 && this._createBurst(.5 * Math.random() + .5, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .5) * this._factory.width, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .25) * this._factory.height, 299)
        },
        _outro: function(t) {
            var e = this;
            this._defaultOutro(t), this.addEntity(new ri(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._hero.x, this._factory.width, 0, 1e3, null, si.EASE_IN, ii.BACK())), this.addEntity(new ri(this._kernel, function(t) {
                e._panelResult.set_x(t)
            }, this._panelResult.x, this._factory.width, 0, 800, null, si.EASE_IN, ii.BACK()))
        },
        __class__: bs
    });
    var Is = function(t) {
        Gt.call(this, t, 1e3)
    };
    (s["b10soc.scenes.SceneTransition"] = Is).__name__ = ["b10soc", "scenes", "SceneTransition"], Is.__super__ = Gt, Is.prototype = t(Gt.prototype, {
        _init: function() {
            Gt.prototype._init.call(this)
        },
        __class__: Is
    });
    var Cs = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.SelectLevel"] = Cs).__name__ = ["b10soc", "scenes", "SelectLevel"], Cs.__super__ = vs, Cs.prototype = t(vs.prototype, {
        _init: function() {
            vs.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Xt.MUSIC, -1, 0, .15, 0, !0), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.selectLevel.title")), this._panelLevel1 = new _s(this._kernel, Ae.LEVEL_1), this._panelLevel1.set_x(15), this.addEntity(this._panelLevel1, null, !0, 200), this._panelLevel2 = new _s(this._kernel, Ae.LEVEL_2), this._panelLevel2.set_x(.5 * (this._factory.width - this._panelLevel2.width)), this.addEntity(this._panelLevel2, null, !0, 200), this._panelLevel3 = new _s(this._kernel, Ae.LEVEL_3), this._panelLevel3.set_x(this._factory.width - this._panelLevel3.width - 15), this.addEntity(this._panelLevel3, null, !0, 200);
            var t = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.levels.level1"), 0, 0, this._kernel.factory.keyNext, mi(this, this._pressLevel1)),
                e = this._panelLevel2.vo.isLocked ? null : new Ye(this._kernel, this._kernel.getConfig("gui.buttons.levels.level2"), 0, 0, null, mi(this, this._pressLevel2)),
                s = this._panelLevel3.vo.isLocked ? null : new Ye(this._kernel, this._kernel.getConfig("gui.buttons.levels.level3"), 0, 0, null, mi(this, this._pressLevel3));
            this._addButtons(null, s, t, e), this._addEasyTweez(this._panelLevel1, 1, !1), this._addEasyTweez(this._panelLevel2, 2, !1), this._addEasyTweez(this._panelLevel3, 3, !1), this._easyTweez()
        },
        _updater: function(t) {
            null == t && (t = 0), vs.prototype._updater.call(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._defaultOutro(t), this._kernel.audio.start("CrowdScore", Xt.INTERFACE, 1, 0, .5), this.addEntity(new ri(this._kernel, function(t) {
                e._kernel.audio.transform("MusicMenu", Xt.MUSIC, t)
            }, .5, 0, 0, 2e3))
        },
        _pressLevel1: function() {
            this._session.cache.levelType = Ae.LEVEL_1, this._pressContinue()
        },
        _pressLevel2: function() {
            this._session.cache.levelType = Ae.LEVEL_2, this._pressContinue()
        },
        _pressLevel3: function() {
            this._session.cache.levelType = Ae.LEVEL_3, this._pressContinue()
        },
        __class__: Cs
    });
    var Us = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), vs.call(this, t, e, s, i, n)
    };
    (s["b10soc.scenes.Shop"] = Us).__name__ = ["b10soc", "scenes", "Shop"], Us.__super__ = vs, Us.prototype = t(vs.prototype, {
        _init: function() {
            var e = this;
            vs.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Xt.MUSIC, 0, 0, .15, 0, !0), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.shop.title")), this.addEntity(this._hero = new Ze(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-160), this.addEntity(new ri(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._factory.width, this._hero.x, 500, 2e3, null, si.EASE_OUT, ii.QUARTIC)), this._panelShop = new hs(this._kernel, this._session.cache.unitType), this._panelShop.set_x(this._factory.width - this._panelShop.width - 15), this.addEntity(this._panelShop, null, !0, 1e3), this.addEntity(new ri(this._kernel, function(t) {
                e._panelShop.set_x(t)
            }, this._factory.width, this._panelShop.x, 1500, 1e3, null, si.EASE_OUT, ii.QUARTIC));
            var t = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, this._kernel.factory.keyNext, mi(this, this._pressContinue)),
                s = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.avatar"), 0, 0, null, mi(this, this._pressAvatar)),
                i = new Ye(this._kernel, this._kernel.getConfig("gui.buttons.reset"), 0, 0, null, mi(this, this._pressReset));
            this._addButtons(null, t, s, 1 == this._panelShop.vo.getPercentageComplete() ? i : null), this._easyTweez(!0)
        },
        _outro: function(t) {
            var e = this;
            this._defaultOutro(t), this.addEntity(new ri(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._hero.x, -this._factory.width, 0, 1e3, null, si.EASE_IN, ii.BACK())), this.addEntity(new ri(this._kernel, function(t) {
                e._panelShop.set_x(t)
            }, this._panelShop.x, this._factory.width, 0, 800, null, si.EASE_IN, ii.BACK()))
        },
        _pressReset: function() {
            this._kernel.log("button: reset: "), this._session.resetUnit(this._session.cache.unitType);
            var t = mi(yi = this._kernel.scenes, yi.setScene);
            this._outro(function() {
                t(ne.MENU)
            })
        },
        _pressAvatar: function() {
            this._kernel.log("button: avatar: ");
            var t = mi(yi = this._kernel.scenes, yi.setScene);
            this._outro(function() {
                t(ne.AVATAR)
            })
        },
        __class__: Us
    });
    var ks = function() {};
    (s["haxe.IMap"] = ks).__name__ = ["haxe", "IMap"];
    var Ms = function(t) {
        this.url = t, this.headers = new tt, this.params = new tt, this.async = !0, this.withCredentials = !1
    };
    (s["haxe.Http"] = Ms).__name__ = ["haxe", "Http"], Ms.prototype = {
        request: function(t) {
            var i = this;
            i.responseData = null;
            var n = this.req = qs.createXMLHttpRequest(),
                e = function(t) {
                    if (4 == n.readyState) {
                        var e;
                        try {
                            e = n.status
                        } catch (t) {
                            e = null
                        }
                        if (null != e && "undefined" != typeof window) {
                            var s = window.location.protocol.toLowerCase();
                            new g("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "").match(s) && (e = null != n.responseText ? 200 : 404)
                        }
                        if (null == e && (e = null), null != e && i.onStatus(e), null != e && 200 <= e && e < 400) i.req = null, i.onData(i.responseData = n.responseText);
                        else if (null == e) i.req = null, i.onError("Failed to connect or resolve host");
                        else switch (e) {
                            case 12007:
                                i.req = null, i.onError("Unknown host");
                                break;
                            case 12029:
                                i.req = null, i.onError("Failed to connect to host");
                                break;
                            default:
                                i.req = null, i.responseData = n.responseText, i.onError("Http Error #" + n.status)
                        }
                    }
                };
            this.async && (n.onreadystatechange = e);
            var s = this.postData;
            if (null != s) t = !0;
            else
                for (var r = this.params.h; null != r;) {
                    var a = r.item;
                    r = r.next;
                    var _ = a;
                    null == s ? s = "" : s += "&";
                    var o = _.param,
                        h = encodeURIComponent(o) + "=",
                        l = _.value;
                    s += h + encodeURIComponent(l)
                }
            try {
                if (t) n.open("POST", this.url, this.async);
                else if (null != s) {
                    var u = this.url.split("?").length <= 1;
                    n.open("GET", this.url + (u ? "?" : "&") + s, this.async), s = null
                } else n.open("GET", this.url, this.async)
            } catch (t) {
                return t instanceof Ks && (t = t.val), i.req = null, void this.onError(t.toString())
            }
            n.withCredentials = this.withCredentials, !f.exists(this.headers, function(t) {
                return "Content-Type" == t.header
            }) && t && null == this.postData && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var c = this.headers.h; null != c;) {
                var d = c.item;
                c = c.next;
                var p = d;
                n.setRequestHeader(p.header, p.value)
            }
            n.send(s), this.async || e()
        },
        onData: function(t) {},
        onError: function(t) {},
        onStatus: function(t) {},
        __class__: Ms
    };
    var xs = function() {};
    (s["haxe.Log"] = xs).__name__ = ["haxe", "Log"], xs.trace = function(t, e) {
        Zs.__trace(t, e)
    };
    var Rs = function() {};
    (s["haxe.Resource"] = Rs).__name__ = ["haxe", "Resource"], Rs.getString = function(t) {
        for (var e = 0, s = Rs.content; e < s.length;) {
            var i = s[e];
            if (++e, i.name == t) return null != i.str ? i.str : Ls.decode(i.data).toString()
        }
        return null
    };
    var Ds = function() {
        this.buf = new P, this.cache = [], this.useCache = Ds.USE_CACHE, this.useEnumIndex = Ds.USE_ENUM_INDEX, this.shash = new js, this.scount = 0
    };
    (s["haxe.Serializer"] = Ds).__name__ = ["haxe", "Serializer"], Ds.run = function(t) {
        var e = new Ds;
        return e.serialize(t), e.toString()
    }, Ds.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(t) {
            var e = this.shash,
                s = null != Ci[t] ? e.getReserved(t) : e.h[t];
            if (null != s) return this.buf.b += "R", void(this.buf.b += null == s ? "null" : "" + s);
            var i = this.shash,
                n = this.scount++;
            null != Ci[t] ? i.setReserved(t, n) : i.h[t] = n, this.buf.b += "y", t = encodeURIComponent(t), this.buf.b += j.string(t.length), this.buf.b += ":", this.buf.b += null == t ? "null" : "" + t
        },
        serializeRef: function(t) {
            for (var e = typeof t, s = 0, i = this.cache.length; s < i;) {
                var n = s++,
                    r = this.cache[n];
                if (typeof r == e && r == t) return this.buf.b += "r", this.buf.b += null == n ? "null" : "" + n, !0
            }
            return this.cache.push(t), !1
        },
        serializeFields: function(t) {
            for (var e = 0, s = W.fields(t); e < s.length;) {
                var i = s[e];
                ++e, this.serializeString(i), this.serialize(W.field(t, i))
            }
            this.buf.b += "g"
        },
        serialize: function(t) {
            var e = et.typeof(t);
            switch (e[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    var s = t;
                    if (0 == s) return void(this.buf.b += "z");
                    this.buf.b += "i", this.buf.b += null == s ? "null" : "" + s;
                    break;
                case 2:
                    var i = t;
                    isNaN(i) ? this.buf.b += "k" : isFinite(i) ? (this.buf.b += "d", this.buf.b += null == i ? "null" : "" + i) : this.buf.b += i < 0 ? "m" : "p";
                    break;
                case 3:
                    this.buf.b += t ? "t" : "f";
                    break;
                case 4:
                    if (Zs.__instanceof(t, bi)) {
                        var n = et.getClassName(t);
                        this.buf.b += "A", this.serializeString(n)
                    } else if (Zs.__instanceof(t, Ii)) this.buf.b += "B", this.serializeString(et.getEnumName(t));
                    else {
                        if (this.useCache && this.serializeRef(t)) return;
                        this.buf.b += "o", this.serializeFields(t)
                    }
                    break;
                case 5:
                    throw new Ks("Cannot serialize function");
                case 6:
                    var r = e[2];
                    if (r == String) return void this.serializeString(t);
                    if (this.useCache && this.serializeRef(t)) return;
                    switch (r) {
                        case Array:
                            var a = 0;
                            this.buf.b += "a";
                            for (var _ = 0, o = t.length; _ < o;) {
                                var h = _++;
                                null == t[h] ? ++a : (0 < a && (1 == a ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == a ? "null" : "" + a), a = 0), this.serialize(t[h]))
                            }
                            0 < a && (1 == a ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == a ? "null" : "" + a)), this.buf.b += "h";
                            break;
                        case Date:
                            var l = t;
                            this.buf.b += "v", this.buf.b += j.string(l.getTime());
                            break;
                        case tt:
                            this.buf.b += "l";
                            for (var u = t.h; null != u;) {
                                var c = u.item;
                                u = u.next;
                                var d = c;
                                this.serialize(d)
                            }
                            this.buf.b += "h";
                            break;
                        case Vs:
                            this.buf.b += "q";
                            for (var p = t, g = p.keys(); g.hasNext();) {
                                var f = g.next();
                                this.buf.b += ":", this.buf.b += null == f ? "null" : "" + f, this.serialize(p.h[f])
                            }
                            this.buf.b += "h";
                            break;
                        case Ws:
                            this.buf.b += "M";
                            for (var E = t, y = E.keys(); y.hasNext();) {
                                var v = y.next(),
                                    m = W.field(v, "__id__");
                                W.deleteField(v, "__id__"), this.serialize(v), v.__id__ = m, this.serialize(E.h[v.__id__])
                            }
                            this.buf.b += "h";
                            break;
                        case js:
                            this.buf.b += "b";
                            for (var T = t, A = T.keys(); A.hasNext();) {
                                var w = A.next();
                                this.serializeString(w), this.serialize(null != Ci[w] ? T.getReserved(w) : T.h[w])
                            }
                            this.buf.b += "h";
                            break;
                        case Os:
                            var S = t;
                            this.buf.b += "s", this.buf.b += j.string(Math.ceil(8 * S.length / 6)), this.buf.b += ":";
                            var b = 0,
                                I = S.length - 2,
                                C = Ds.BASE64_CODES;
                            if (null == C) {
                                var U = Ds.BASE64.length;
                                C = new Array(U);
                                for (var k = 0, M = Ds.BASE64.length; k < M;) {
                                    var x = k++;
                                    C[x] = $.cca(Ds.BASE64, x)
                                }
                                Ds.BASE64_CODES = C
                            }
                            for (; b < I;) {
                                var R = S.b[b++],
                                    D = S.b[b++],
                                    P = S.b[b++];
                                this.buf.b += String.fromCharCode(C[R >> 2]), this.buf.b += String.fromCharCode(C[63 & (R << 4 | D >> 4)]), this.buf.b += String.fromCharCode(C[63 & (D << 2 | P >> 6)]), this.buf.b += String.fromCharCode(C[63 & P])
                            }
                            if (b == I) {
                                var N = S.b[b++],
                                    B = S.b[b++];
                                this.buf.b += String.fromCharCode(C[N >> 2]), this.buf.b += String.fromCharCode(C[63 & (N << 4 | B >> 4)]), this.buf.b += String.fromCharCode(C[B << 2 & 63])
                            } else if (b == I + 1) {
                                var O = S.b[b++];
                                this.buf.b += String.fromCharCode(C[O >> 2]), this.buf.b += String.fromCharCode(C[O << 4 & 63])
                            }
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != t.hxSerialize ? (this.buf.b += "C", this.serializeString(et.getClassName(r)), this.useCache && this.cache.push(t), t.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(et.getClassName(r)), this.useCache && this.cache.push(t), this.serializeFields(t))
                    }
                    break;
                case 7:
                    var L = e[2];
                    if (this.useCache) {
                        if (this.serializeRef(t)) return;
                        this.cache.pop()
                    }
                    this.buf.b += j.string(this.useEnumIndex ? "j" : "w"), this.serializeString(et.getEnumName(L)), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += j.string(t[1])) : this.serializeString(t[0]), this.buf.b += ":";
                    var F = t.length;
                    this.buf.b += j.string(F - 2);
                    for (var G = 2, H = F; G < H;) {
                        var V = G++;
                        this.serialize(t[V])
                    }
                    this.useCache && this.cache.push(t);
                    break;
                default:
                    throw new Ks("Cannot serialize " + j.string(t))
            }
        },
        __class__: Ds
    };
    var Ps = function(t) {
        var e = this;
        this.id = setInterval(function() {
            e.run()
        }, t)
    };
    (s["haxe.Timer"] = Ps).__name__ = ["haxe", "Timer"], Ps.delay = function(t, e) {
        var s = new Ps(e);
        return s.run = function() {
            s.stop(), t()
        }, s
    }, Ps.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: Ps
    };
    var Ns = function() {};
    (s["haxe._Unserializer.DefaultResolver"] = Ns).__name__ = ["haxe", "_Unserializer", "DefaultResolver"], Ns.prototype = {
        resolveClass: function(t) {
            return et.resolveClass(t)
        },
        resolveEnum: function(t) {
            return et.resolveEnum(t)
        },
        __class__: Ns
    };
    var Bs = function(t) {
        this.buf = t, this.length = t.length, this.pos = 0, this.scache = [], this.cache = [];
        var e = Bs.DEFAULT_RESOLVER;
        null == e && (e = new Ns, Bs.DEFAULT_RESOLVER = e), this.resolver = e
    };
    (s["haxe.Unserializer"] = Bs).__name__ = ["haxe", "Unserializer"], Bs.initCodes = function() {
        for (var t = [], e = 0, s = Bs.BASE64.length; e < s;) {
            var i = e++;
            t[Bs.BASE64.charCodeAt(i)] = i
        }
        return t
    }, Bs.run = function(t) {
        return new Bs(t).unserialize()
    }, Bs.prototype = {
        readDigits: function() {
            for (var t = 0, e = !1, s = this.pos;;) {
                var i = this.buf.charCodeAt(this.pos);
                if (i != i) break;
                if (45 != i) {
                    if (i < 48 || 57 < i) break;
                    t = 10 * t + (i - 48), this.pos++
                } else {
                    if (this.pos != s) break;
                    e = !0, this.pos++
                }
            }
            return e && (t *= -1), t
        },
        readFloat: function() {
            for (var t = this.pos;;) {
                var e = this.buf.charCodeAt(this.pos);
                if (e != e) break;
                if (!(43 <= e && e < 58 || 101 == e || 69 == e)) break;
                this.pos++
            }
            return parseFloat($.substr(this.buf, t, this.pos - t))
        },
        unserializeObject: function(t) {
            for (;;) {
                if (this.pos >= this.length) throw new Ks("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var e = this.unserialize();
                if ("string" != typeof e) throw new Ks("Invalid object key");
                var s = this.unserialize();
                t[e] = s
            }
            this.pos++
        },
        unserializeEnum: function(t, e) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw new Ks("Invalid enum format");
            var s = this.readDigits();
            if (0 == s) return et.createEnum(t, e);
            for (var i = []; 0 < s--;) i.push(this.unserialize());
            return et.createEnum(t, e, i)
        },
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 65:
                    var t = this.unserialize(),
                        e = this.resolver.resolveClass(t);
                    if (null == e) throw new Ks("Class not found " + t);
                    return e;
                case 66:
                    var s = this.unserialize(),
                        i = this.resolver.resolveEnum(s);
                    if (null == i) throw new Ks("Enum not found " + s);
                    return i;
                case 67:
                    var n = this.unserialize(),
                        r = this.resolver.resolveClass(n);
                    if (null == r) throw new Ks("Class not found " + n);
                    var a = et.createEmptyInstance(r);
                    if (this.cache.push(a), a.hxUnserialize(this), 103 != this.buf.charCodeAt(this.pos++)) throw new Ks("Invalid custom data");
                    return a;
                case 77:
                    var _ = new Ws;
                    this.cache.push(_);
                    for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var o = this.unserialize();
                        _.set(o, this.unserialize())
                    }
                    return this.pos++, _;
                case 82:
                    var h = this.readDigits();
                    if (h < 0 || h >= this.scache.length) throw new Ks("Invalid string reference");
                    return this.scache[h];
                case 97:
                    this.buf;
                    var l = [];
                    for (this.cache.push(l);;) {
                        var u = this.buf.charCodeAt(this.pos);
                        if (104 == u) {
                            this.pos++;
                            break
                        }
                        if (117 == u) {
                            this.pos++;
                            var c = this.readDigits();
                            l[l.length + c - 1] = null
                        } else l.push(this.unserialize())
                    }
                    return l;
                case 98:
                    var d = new js;
                    this.cache.push(d);
                    for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var p = this.unserialize(),
                            g = this.unserialize();
                        null != Ci[p] ? d.setReserved(p, g) : d.h[p] = g
                    }
                    return this.pos++, d;
                case 99:
                    var f = this.unserialize(),
                        E = this.resolver.resolveClass(f);
                    if (null == E) throw new Ks("Class not found " + f);
                    var y = et.createEmptyInstance(E);
                    return this.cache.push(y), this.unserializeObject(y), y;
                case 100:
                    return this.readFloat();
                case 102:
                    return !1;
                case 105:
                    return this.readDigits();
                case 106:
                    var v = this.unserialize(),
                        m = this.resolver.resolveEnum(v);
                    if (null == m) throw new Ks("Enum not found " + v);
                    this.pos++;
                    var T = this.readDigits(),
                        A = m.__constructs__.slice()[T];
                    if (null == A) throw new Ks("Unknown enum index " + v + "@" + T);
                    var w = this.unserializeEnum(m, A);
                    return this.cache.push(w), w;
                case 107:
                    return NaN;
                case 108:
                    var S = new tt;
                    this.cache.push(S);
                    for (this.buf; 104 != this.buf.charCodeAt(this.pos);) S.add(this.unserialize());
                    return this.pos++, S;
                case 109:
                    return -1 / 0;
                case 110:
                    return null;
                case 111:
                    var b = {};
                    return this.cache.push(b), this.unserializeObject(b), b;
                case 112:
                    return 1 / 0;
                case 113:
                    var I = new Vs;
                    this.cache.push(I);
                    this.buf;
                    for (var C = this.buf.charCodeAt(this.pos++); 58 == C;) {
                        var U = this.readDigits(),
                            k = this.unserialize();
                        I.h[U] = k, C = this.buf.charCodeAt(this.pos++)
                    }
                    if (104 != C) throw new Ks("Invalid IntMap format");
                    return I;
                case 114:
                    var M = this.readDigits();
                    if (M < 0 || M >= this.cache.length) throw new Ks("Invalid reference");
                    return this.cache[M];
                case 115:
                    var x = this.readDigits(),
                        R = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < x) throw new Ks("Invalid bytes length");
                    var D = Bs.CODES;
                    null == D && (D = Bs.initCodes(), Bs.CODES = D);
                    for (var P = this.pos, N = 3 & x, B = P + (x - N), O = new Os(new Ui(3 * (x >> 2) + (2 <= N ? N - 1 : 0))), L = 0; P < B;) {
                        var F = D[R.charCodeAt(P++)],
                            G = D[R.charCodeAt(P++)];
                        O.b[L++] = 255 & (F << 2 | G >> 4);
                        var H = D[R.charCodeAt(P++)];
                        O.b[L++] = 255 & (G << 4 | H >> 2);
                        var V = D[R.charCodeAt(P++)];
                        O.b[L++] = 255 & (H << 6 | V)
                    }
                    if (2 <= N) {
                        var W = D[R.charCodeAt(P++)],
                            j = D[R.charCodeAt(P++)];
                        if (O.b[L++] = 255 & (W << 2 | j >> 4), 3 == N) {
                            var Q = D[R.charCodeAt(P++)];
                            O.b[L++] = 255 & (j << 4 | Q >> 2)
                        }
                    }
                    return this.pos += x, this.cache.push(O), O;
                case 116:
                    return !0;
                case 118:
                    var J;
                    if (48 <= this.buf.charCodeAt(this.pos) && this.buf.charCodeAt(this.pos) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 1) && this.buf.charCodeAt(this.pos + 1) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 2) && this.buf.charCodeAt(this.pos + 2) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 3) && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4)) J = $.strDate($.substr(this.buf, this.pos, 19)), this.pos += 19;
                    else {
                        var Y = this.readFloat();
                        J = new Date(Y)
                    }
                    return this.cache.push(J), J;
                case 119:
                    var z = this.unserialize(),
                        X = this.resolver.resolveEnum(z);
                    if (null == X) throw new Ks("Enum not found " + z);
                    var K = this.unserializeEnum(X, this.unserialize());
                    return this.cache.push(K), K;
                case 120:
                    throw Ks.wrap(this.unserialize());
                case 121:
                    var Z = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < Z) throw new Ks("Invalid string length");
                    var q = $.substr(this.buf, this.pos, Z);
                    return this.pos += Z, q = decodeURIComponent(q.split("+").join(" ")), this.scache.push(q), q;
                case 122:
                    return 0
            }
            throw this.pos--, new Ks("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
        },
        __class__: Bs
    };
    var Os = function(t) {
        this.length = t.byteLength, this.b = new Mi(t), (this.b.bufferValue = t).hxBytes = this, t.bytes = this.b
    };
    (s["haxe.io.Bytes"] = Os).__name__ = ["haxe", "io", "Bytes"], Os.alloc = function(t) {
        return new Os(new Ui(t))
    }, Os.ofString = function(t) {
        for (var e = [], s = 0; s < t.length;) {
            var i = t.charCodeAt(s++);
            55296 <= i && i <= 56319 && (i = i - 55232 << 10 | 1023 & t.charCodeAt(s++)), i <= 127 ? e.push(i) : (i <= 2047 ? e.push(192 | i >> 6) : (i <= 65535 ? e.push(224 | i >> 12) : (e.push(240 | i >> 18), e.push(128 | i >> 12 & 63)), e.push(128 | i >> 6 & 63)), e.push(128 | 63 & i))
        }
        return new Os(new Mi(e).buffer)
    }, Os.ofData = function(t) {
        var e = t.hxBytes;
        return null != e ? e : new Os(t)
    }, Os.fastGet = function(t, e) {
        return t.bytes[e]
    }, Os.prototype = {
        getString: function(t, e) {
            if (t < 0 || e < 0 || t + e > this.length) throw new Ks(Qs.OutsideBounds);
            for (var s = "", i = this.b, n = String.fromCharCode, r = t, a = t + e; r < a;) {
                var _ = i[r++];
                if (_ < 128) {
                    if (0 == _) break;
                    s += n(_)
                } else if (_ < 224) s += n((63 & _) << 6 | 127 & i[r++]);
                else if (_ < 240) {
                    s += n((31 & _) << 12 | (127 & i[r++]) << 6 | 127 & i[r++])
                } else {
                    var o = (15 & _) << 18 | (127 & i[r++]) << 12 | (127 & i[r++]) << 6 | 127 & i[r++];
                    s += n(55232 + (o >> 10)), s += n(1023 & o | 56320)
                }
            }
            return s
        },
        toString: function() {
            return this.getString(0, this.length)
        },
        __class__: Os
    };
    var Ls = function() {};
    (s["haxe.crypto.Base64"] = Ls).__name__ = ["haxe", "crypto", "Base64"], Ls.decode = function(t, e) {
        if (null == e && (e = !0), e)
            for (; 61 == $.cca(t, t.length - 1);) t = $.substr(t, 0, -1);
        return new Fs(Ls.BYTES).decodeBytes(Os.ofString(t))
    };
    var Fs = function(t) {
        for (var e = t.length, s = 1; 1 << s < e;) ++s;
        if (8 < s || e != 1 << s) throw new Ks("BaseCode : base length must be a power of two.");
        this.base = t, this.nbits = s
    };
    (s["haxe.crypto.BaseCode"] = Fs).__name__ = ["haxe", "crypto", "BaseCode"], Fs.prototype = {
        initTable: function() {
            for (var t = [], e = 0; e < 256;) {
                t[e++] = -1
            }
            for (var s = 0, i = this.base.length; s < i;) {
                var n = s++;
                t[this.base.b[n]] = n
            }
            this.tbl = t
        },
        decodeBytes: function(t) {
            var e = this.nbits;
            this.base;
            null == this.tbl && this.initTable();
            for (var s = this.tbl, i = t.length * e >> 3, n = new Os(new Ui(i)), r = 0, a = 0, _ = 0, o = 0; o < i;) {
                for (; a < 8;) {
                    a += e, r <<= e;
                    var h = s[t.b[_++]];
                    if (-1 == h) throw new Ks("BaseCode : invalid encoded char");
                    r |= h
                }
                a -= 8, n.b[o++] = 255 & r >> a
            }
            return n
        },
        __class__: Fs
    };
    var Gs = function(t, e) {
        this.elt = t, this.next = e
    };
    (s["haxe.ds.GenericCell"] = Gs).__name__ = ["haxe", "ds", "GenericCell"], Gs.prototype = {
        __class__: Gs
    };
    var Hs = function() {};
    (s["haxe.ds.GenericStack"] = Hs).__name__ = ["haxe", "ds", "GenericStack"], Hs.prototype = {
        remove: function(t) {
            for (var e = null, s = this.head; null != s;) {
                if (s.elt == t) {
                    null == e ? this.head = s.next : e.next = s.next;
                    break
                }
                s = (e = s).next
            }
            return null != s
        },
        iterator: function() {
            var e = this.head;
            return {
                hasNext: function() {
                    return null != e
                },
                next: function() {
                    var t = e;
                    return e = t.next, t.elt
                }
            }
        },
        __class__: Hs
    };
    var Vs = function() {
        this.h = {}
    };
    (s["haxe.ds.IntMap"] = Vs).__name__ = ["haxe", "ds", "IntMap"], Vs.__interfaces__ = [ks], Vs.prototype = {
        keys: function() {
            var t = [];
            for (var e in this.h) this.h.hasOwnProperty(e) && t.push(0 | e);
            return $.iter(t)
        },
        __class__: Vs
    };
    var Ws = function() {
        this.h = {
            __keys__: {}
        }
    };
    (s["haxe.ds.ObjectMap"] = Ws).__name__ = ["haxe", "ds", "ObjectMap"], Ws.__interfaces__ = [ks], Ws.assignId = function(t) {
        return t.__id__ = ++Ws.count
    }, Ws.getId = function(t) {
        return t.__id__
    }, Ws.prototype = {
        set: function(t, e) {
            var s = t.__id__ || (t.__id__ = ++Ws.count);
            this.h[s] = e, this.h.__keys__[s] = t
        },
        keys: function() {
            var t = [];
            for (var e in this.h.__keys__) this.h.hasOwnProperty(e) && t.push(this.h.__keys__[e]);
            return $.iter(t)
        },
        __class__: Ws
    };
    var js = function() {
        this.h = {}
    };
    (s["haxe.ds.StringMap"] = js).__name__ = ["haxe", "ds", "StringMap"], js.__interfaces__ = [ks], js.prototype = {
        setReserved: function(t, e) {
            null == this.rh && (this.rh = {}), this.rh["$" + t] = e
        },
        getReserved: function(t) {
            return null == this.rh ? null : this.rh["$" + t]
        },
        existsReserved: function(t) {
            return null != this.rh && this.rh.hasOwnProperty("$" + t)
        },
        remove: function(t) {
            return null != Ci[t] ? (t = "$" + t, !(null == this.rh || !this.rh.hasOwnProperty(t)) && (delete this.rh[t], !0)) : !!this.h.hasOwnProperty(t) && (delete this.h[t], !0)
        },
        keys: function() {
            return $.iter(this.arrayKeys())
        },
        arrayKeys: function() {
            var t = [];
            for (var e in this.h) this.h.hasOwnProperty(e) && t.push(e);
            if (null != this.rh)
                for (var e in this.rh) 36 == e.charCodeAt(0) && t.push(e.substr(1));
            return t
        },
        __class__: js
    };
    var Qs = s["haxe.io.Error"] = {
        __ename__: ["haxe", "io", "Error"],
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    Qs.Blocked = ["Blocked", 0], Qs.Blocked.toString = i, (Qs.Blocked.__enum__ = Qs).Overflow = ["Overflow", 1], Qs.Overflow.toString = i, (Qs.Overflow.__enum__ = Qs).OutsideBounds = ["OutsideBounds", 2], Qs.OutsideBounds.toString = i, (Qs.OutsideBounds.__enum__ = Qs).Custom = function(t) {
        var e = ["Custom", 3, t];
        return e.__enum__ = Qs, e.toString = i, e
    };
    var Js = function() {};
    (s["haxe.web.Request"] = Js).__name__ = ["haxe", "web", "Request"], Js.getParams = function() {
        for (var t = $.substr(window.location.search, 1, null), e = new js, s = 0, i = new g("[&;]", "g").split(t); s < i.length;) {
            var n = i[s];
            ++s;
            var r = n.split("=");
            if (!(r.length < 2)) {
                var a = r.shift(),
                    _ = decodeURIComponent(a.split("+").join(" ")),
                    o = r.join("="),
                    h = decodeURIComponent(o.split("+").join(" "));
                null != Ci[_] ? e.setReserved(_, h) : e.h[_] = h
            }
        }
        return e
    };
    var Ys = function(t, e, s) {
        this.xml = e, this.message = t, this.position = s, this.lineNumber = 1;
        for (var i = this.positionAtLine = 0, n = s; i < n;) {
            var r = i++,
                a = e.charCodeAt(r);
            10 == a ? (this.lineNumber++, this.positionAtLine = 0) : 13 != a && this.positionAtLine++
        }
    };
    (s["haxe.xml.XmlParserException"] = Ys).__name__ = ["haxe", "xml", "XmlParserException"], Ys.prototype = {
        toString: function() {
            return et.getClassName(Zs.getClass(this)) + ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine
        },
        __class__: Ys
    };
    var zs = function() {};
    (s["haxe.xml.Parser"] = zs).__name__ = ["haxe", "xml", "Parser"], zs.parse = function(t, e) {
        null == e && (e = !1);
        var s = N.createDocument();
        return zs.doParse(t, e, 0, s), s
    }, zs.doParse = function(t, e, s, i) {
        null == s && (s = 0);
        for (var n = null, r = 1, a = 1, _ = null, o = 0, h = 0, l = 0, u = t.charCodeAt(s), c = new P, d = 1, p = -1; u == u;) {
            switch (r) {
                case 0:
                    switch (u) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            break;
                        default:
                            r = a;
                            continue
                    }
                    break;
                case 1:
                    if (60 != u) {
                        o = s, r = 13;
                        continue
                    }
                    r = 0, a = 2;
                    break;
                case 2:
                    switch (u) {
                        case 33:
                            if (91 == t.charCodeAt(s + 1)) {
                                if ("CDATA[" != $.substr(t, s += 2, 6).toUpperCase()) throw new Ks(new Ys("Expected <![CDATA[", t, s));
                                r = 17, o = (s += 5) + 1
                            } else if (68 == t.charCodeAt(s + 1) || 100 == t.charCodeAt(s + 1)) {
                                if ("OCTYPE" != $.substr(t, s + 2, 6).toUpperCase()) throw new Ks(new Ys("Expected <!DOCTYPE", t, s));
                                r = 16, o = (s += 8) + 1
                            } else {
                                if (45 != t.charCodeAt(s + 1) || 45 != t.charCodeAt(s + 2)) throw new Ks(new Ys("Expected \x3c!--", t, s));
                                r = 15, o = (s += 2) + 1
                            }
                            break;
                        case 47:
                            if (null == i) throw new Ks(new Ys("Expected node name", t, s));
                            o = s + 1, r = 0, a = 10;
                            break;
                        case 63:
                            r = 14, o = s;
                            break;
                        default:
                            r = 3, o = s;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= u && u <= 122 || 65 <= u && u <= 90 || 48 <= u && u <= 57 || 58 == u || 46 == u || 95 == u || 45 == u)) {
                        if (s == o) throw new Ks(new Ys("Expected node name", t, s));
                        n = N.createElement($.substr(t, o, s - o)), i.addChild(n), ++h, r = 0, a = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (u) {
                        case 47:
                            r = 11;
                            break;
                        case 62:
                            r = 9;
                            break;
                        default:
                            r = 5, o = s;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= u && u <= 122 || 65 <= u && u <= 90 || 48 <= u && u <= 57 || 58 == u || 46 == u || 95 == u || 45 == u)) {
                        if (o == s) throw new Ks(new Ys("Expected attribute name", t, s));
                        if (_ = $.substr(t, o, s - o), n.exists(_)) throw new Ks(new Ys("Duplicate attribute [" + _ + "]", t, s));
                        r = 0, a = 6;
                        continue
                    }
                    break;
                case 6:
                    if (61 != u) throw new Ks(new Ys("Expected =", t, s));
                    r = 0, a = 7;
                    break;
                case 7:
                    switch (u) {
                        case 34:
                        case 39:
                            c = new P, r = 8, o = s + 1, p = u;
                            break;
                        default:
                            throw new Ks(new Ys('Expected "', t, s))
                    }
                    break;
                case 8:
                    switch (u) {
                        case 38:
                            var g = s - o;
                            c.b += $.substr(t, o, null == g ? null : g), r = 18, d = 8, o = s + 1;
                            break;
                        case 60:
                        case 62:
                            if (e) throw new Ks(new Ys("Invalid unescaped " + String.fromCharCode(u) + " in attribute value", t, s));
                            if (u == p) {
                                var f = s - o;
                                c.b += $.substr(t, o, null == f ? null : f);
                                var E = c.b;
                                c = new P, n.set(_, E), r = 0, a = 4
                            }
                            break;
                        default:
                            if (u == p) {
                                var y = s - o;
                                c.b += $.substr(t, o, null == y ? null : y);
                                var v = c.b;
                                c = new P, n.set(_, v), r = 0, a = 4
                            }
                    }
                    break;
                case 9:
                    o = s = zs.doParse(t, e, s, n), r = 1;
                    break;
                case 10:
                    if (!(97 <= u && u <= 122 || 65 <= u && u <= 90 || 48 <= u && u <= 57 || 58 == u || 46 == u || 95 == u || 45 == u)) {
                        if (o == s) throw new Ks(new Ys("Expected node name", t, s));
                        var m = $.substr(t, o, s - o);
                        if (i.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + i.nodeType);
                        if (m != i.nodeName) {
                            if (i.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + i.nodeType);
                            throw new Ks(new Ys("Expected </" + i.nodeName + ">", t, s))
                        }
                        r = 0, a = 12;
                        continue
                    }
                    break;
                case 11:
                    if (62 != u) throw new Ks(new Ys("Expected >", t, s));
                    r = 1;
                    break;
                case 12:
                    if (62 == u) return 0 == h && i.addChild(N.createPCData("")), s;
                    throw new Ks(new Ys("Expected >", t, s));
                case 13:
                    if (60 == u) {
                        var T = s - o;
                        c.b += $.substr(t, o, null == T ? null : T);
                        var A = N.createPCData(c.b);
                        c = new P, i.addChild(A), ++h, r = 0, a = 2
                    } else if (38 == u) {
                        var w = s - o;
                        c.b += $.substr(t, o, null == w ? null : w), r = 18, d = 13, o = s + 1
                    }
                    break;
                case 14:
                    if (63 == u && 62 == t.charCodeAt(s + 1)) {
                        var S = $.substr(t, o + 1, ++s - o - 2);
                        i.addChild(N.createProcessingInstruction(S)), ++h, r = 1
                    }
                    break;
                case 15:
                    45 == u && 45 == t.charCodeAt(s + 1) && 62 == t.charCodeAt(s + 2) && (i.addChild(N.createComment($.substr(t, o, s - o))), ++h, s += 2, r = 1);
                    break;
                case 16:
                    91 == u ? ++l : 93 == u ? --l : 62 == u && 0 == l && (i.addChild(N.createDocType($.substr(t, o, s - o))), ++h, r = 1);
                    break;
                case 17:
                    if (93 == u && 93 == t.charCodeAt(s + 1) && 62 == t.charCodeAt(s + 2)) {
                        var b = N.createCData($.substr(t, o, s - o));
                        i.addChild(b), ++h, s += 2, r = 1
                    }
                    break;
                case 18:
                    if (59 == u) {
                        var I = $.substr(t, o, s - o);
                        if (35 == I.charCodeAt(0)) {
                            var C = 120 == I.charCodeAt(1) ? j.parseInt("0" + $.substr(I, 1, I.length - 1)) : j.parseInt($.substr(I, 1, I.length - 1));
                            c.b += String.fromCharCode(C)
                        } else {
                            var U = zs.escapes;
                            if (null != Ci[I] ? U.existsReserved(I) : U.h.hasOwnProperty(I)) {
                                var k = zs.escapes,
                                    M = null != Ci[I] ? k.getReserved(I) : k.h[I];
                                c.b += j.string(M)
                            } else {
                                if (e) throw new Ks(new Ys("Undefined entity: " + I, t, s));
                                c.b += j.string("&" + I + ";")
                            }
                        }
                        o = s + 1, r = d
                    } else if (!(97 <= u && u <= 122 || 65 <= u && u <= 90 || 48 <= u && u <= 57 || 58 == u || 46 == u || 95 == u || 45 == u) && 35 != u) {
                        if (e) throw new Ks(new Ys("Invalid character in entity: " + String.fromCharCode(u), t, s));
                        c.b += "&";
                        var x = s - o;
                        c.b += $.substr(t, o, null == x ? null : x), o = s--, r = d
                    }
            }
            u = t.charCodeAt(++s)
        }
        if (1 == r && (o = s, r = 13), 13 == r) {
            if (s != o || 0 == h) {
                var R = s - o;
                c.b += $.substr(t, o, null == R ? null : R), i.addChild(N.createPCData(c.b)), ++h
            }
            return s
        }
        if (!e && 18 == r && 13 == d) {
            c.b += "&";
            var D = s - o;
            return c.b += $.substr(t, o, null == D ? null : D), i.addChild(N.createPCData(c.b)), ++h, s
        }
        throw new Ks(new Ys("Unexpected end", t, s))
    };
    var Xs = function(t) {
        this.output = new P, this.pretty = t
    };
    (s["haxe.xml.Printer"] = Xs).__name__ = ["haxe", "xml", "Printer"], Xs.print = function(t, e) {
        null == e && (e = !1);
        var s = new Xs(e);
        return s.writeNode(t, ""), s.output.b
    }, Xs.prototype = {
        writeNode: function(t, e) {
            switch (t.nodeType) {
                case 0:
                    if (this.output.b += j.string(e + "<"), t.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + t.nodeType);
                    this.output.b += j.string(t.nodeName);
                    for (var s = t.attributes(); s.hasNext();) {
                        var i = s.next();
                        this.output.b += j.string(" " + i + '="');
                        var n = E.htmlEscape(t.get(i), !0);
                        this.output.b += j.string(n), this.output.b += '"'
                    }
                    if (this.hasChildren(t)) {
                        if (this.output.b += ">", this.pretty && (this.output.b += "\n"), t.nodeType != N.Document && t.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + t.nodeType);
                        for (var r = $.iter(t.children); r.hasNext();) {
                            var a = r.next();
                            this.writeNode(a, this.pretty ? e + "\t" : e)
                        }
                        if (this.output.b += j.string(e + "</"), t.nodeType != N.Element) throw new Ks("Bad node type, expected Element but found " + t.nodeType);
                        this.output.b += j.string(t.nodeName), this.output.b += ">", this.pretty && (this.output.b += "\n")
                    } else this.output.b += "/>", this.pretty && (this.output.b += "\n");
                    break;
                case 1:
                    if (t.nodeType == N.Document || t.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + t.nodeType);
                    var _ = t.nodeValue;
                    if (0 != _.length) {
                        var o = e + E.htmlEscape(_);
                        this.output.b += j.string(o), this.pretty && (this.output.b += "\n")
                    }
                    break;
                case 2:
                    if (this.output.b += j.string(e + "<![CDATA["), t.nodeType == N.Document || t.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + t.nodeType);
                    var h = E.trim(t.nodeValue);
                    this.output.b += j.string(h), this.output.b += "]]>", this.pretty && (this.output.b += "\n");
                    break;
                case 3:
                    if (t.nodeType == N.Document || t.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + t.nodeType);
                    var l = t.nodeValue,
                        u = new RegExp("[\n\r\t]+", "g".split("u").join(""));
                    l = "\x3c!--" + (l = l.replace(u, "")) + "--\x3e", this.output.b += null == e ? "null" : "" + e;
                    var c = E.trim(l);
                    this.output.b += j.string(c), this.pretty && (this.output.b += "\n");
                    break;
                case 4:
                    if (t.nodeType == N.Document || t.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + t.nodeType);
                    this.output.b += j.string("<!DOCTYPE " + t.nodeValue + ">"), this.pretty && (this.output.b += "\n");
                    break;
                case 5:
                    if (t.nodeType == N.Document || t.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + t.nodeType);
                    this.output.b += j.string("<?" + t.nodeValue + "?>"), this.pretty && (this.output.b += "\n");
                    break;
                case 6:
                    if (t.nodeType != N.Document && t.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + t.nodeType);
                    for (var d = $.iter(t.children); d.hasNext();) {
                        var p = d.next();
                        this.writeNode(p, e)
                    }
            }
        },
        hasChildren: function(t) {
            if (t.nodeType != N.Document && t.nodeType != N.Element) throw new Ks("Bad node type, expected Element or Document but found " + t.nodeType);
            for (var e = $.iter(t.children); e.hasNext();) {
                var s = e.next();
                switch (s.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (s.nodeType == N.Document || s.nodeType == N.Element) throw new Ks("Bad node type, unexpected " + s.nodeType);
                        if (0 != E.ltrim(s.nodeValue).length) return !0
                }
            }
            return !1
        },
        __class__: Xs
    };
    var Ks = function(t) {
        Error.call(this), this.val = t, this.message = String(t), Error.captureStackTrace && Error.captureStackTrace(this, Ks)
    };
    (s["js._Boot.HaxeError"] = Ks).__name__ = ["js", "_Boot", "HaxeError"], Ks.wrap = function(t) {
        return t instanceof Error ? t : new Ks(t)
    }, Ks.__super__ = Error, Ks.prototype = t(Error.prototype, {
        __class__: Ks
    });
    var Zs = function() {};
    (s["js.Boot"] = Zs).__name__ = ["js", "Boot"], Zs.__unhtml = function(t) {
        return t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
    }, Zs.__trace = function(t, e) {
        var s, i = null != e ? e.fileName + ":" + e.lineNumber + ": " : "";
        if (i += Zs.__string_rec(t, ""), null != e && null != e.customParams)
            for (var n = 0, r = e.customParams; n < r.length;) {
                var a = r[n];
                ++n, i += "," + Zs.__string_rec(a, "")
            }
        "undefined" != typeof document && null != (s = document.getElementById("haxe:trace")) ? s.innerHTML += Zs.__unhtml(i) + "<br/>" : "undefined" != typeof console && null != console.log && console.log(i)
    }, Zs.getClass = function(t) {
        if (t instanceof Array && null == t.__enum__) return Array;
        var e = t.__class__;
        if (null != e) return e;
        var s = Zs.__nativeClassName(t);
        return null != s ? Zs.__resolveNativeClass(s) : null
    }, Zs.__string_rec = function(t, e) {
        if (null == t) return "null";
        if (5 <= e.length) return "<...>";
        var s = typeof t;
        switch ("function" == s && (t.__name__ || t.__ename__) && (s = "object"), s) {
            case "function":
                return "<function>";
            case "object":
                if (t instanceof Array) {
                    if (t.__enum__) {
                        if (2 == t.length) return t[0];
                        var i = t[0] + "(";
                        e += "\t";
                        for (var n = 2, r = t.length; n < r;) {
                            var a = n++;
                            i += 2 != a ? "," + Zs.__string_rec(t[a], e) : Zs.__string_rec(t[a], e)
                        }
                        return i + ")"
                    }
                    var _ = "[";
                    e += "\t";
                    for (var o = 0, h = t.length; o < h;) {
                        var l = o++;
                        _ += (0 < l ? "," : "") + Zs.__string_rec(t[l], e)
                    }
                    return _ += "]"
                }
                var u;
                try {
                    u = t.toString
                } catch (t) {
                    return "???"
                }
                if (null != u && u != Object.toString && "function" == typeof u) {
                    var c = t.toString();
                    if ("[object Object]" != c) return c
                }
                var d = null,
                    p = "{\n";
                e += "\t";
                var g = null != t.hasOwnProperty;
                for (var d in t) g && !t.hasOwnProperty(d) || "prototype" != d && "__class__" != d && "__super__" != d && "__interfaces__" != d && "__properties__" != d && (2 != p.length && (p += ", \n"), p += e + d + " : " + Zs.__string_rec(t[d], e));
                return p += "\n" + (e = e.substring(1)) + "}";
            case "string":
                return t;
            default:
                return String(t)
        }
    }, Zs.__interfLoop = function(t, e) {
        if (null == t) return !1;
        if (t == e) return !0;
        var s = t.__interfaces__;
        if (null != s)
            for (var i = 0, n = s.length; i < n;) {
                var r = s[i++];
                if (r == e || Zs.__interfLoop(r, e)) return !0
            }
        return Zs.__interfLoop(t.__super__, e)
    }, Zs.__instanceof = function(t, e) {
        if (null == e) return !1;
        switch (e) {
            case Array:
                return t instanceof Array && null == t.__enum__;
            case Si:
                return "boolean" == typeof t;
            case Ai:
                return !0;
            case wi:
                return "number" == typeof t;
            case Ti:
                return "number" == typeof t && (0 | t) === t;
            case String:
                return "string" == typeof t;
            default:
                if (null == t) return !1;
                if ("function" == typeof e) {
                    if (t instanceof e) return !0;
                    if (Zs.__interfLoop(Zs.getClass(t), e)) return !0
                } else if ("object" == typeof e && Zs.__isNativeObj(e) && t instanceof e) return !0;
                return e == bi && null != t.__name__ || (e == Ii && null != t.__ename__ || t.__enum__ == e)
        }
    }, Zs.__cast = function(t, e) {
        if (Zs.__instanceof(t, e)) return t;
        throw new Ks("Cannot cast " + j.string(t) + " to " + j.string(e))
    }, Zs.__nativeClassName = function(t) {
        var e = Zs.__toStr.call(t).slice(8, -1);
        return "Object" == e || "Function" == e || "Math" == e || "JSON" == e ? null : e
    }, Zs.__isNativeObj = function(t) {
        return null != Zs.__nativeClassName(t)
    }, Zs.__resolveNativeClass = function(t) {
        return e[t]
    };
    var qs = function() {};
    (s["js.Browser"] = qs).__name__ = ["js", "Browser"], qs.getLocalStorage = function() {
        try {
            var t = window.localStorage;
            return t.getItem(""), t
        } catch (t) {
            return null
        }
    }, qs.getSessionStorage = function() {
        try {
            var t = window.sessionStorage;
            return t.getItem(""), t
        } catch (t) {
            return null
        }
    }, qs.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw new Ks("Unable to create XMLHttpRequest object.")
    };
    var $s = function() {};
    (s["js.Cookie"] = $s).__name__ = ["js", "Cookie"], $s.set = function(t, e, s, i, n) {
        var r = t + "=" + encodeURIComponent(e);
        if (null != s) {
            var a = (new Date).getTime() + 1e3 * s;
            r += ";expires=" + new Date(a).toGMTString()
        }
        null != i && (r += ";path=" + i), null != n && (r += ";domain=" + n), window.document.cookie = r
    }, $s.all = function() {
        for (var t = new js, e = window.document.cookie.split(";"), s = 0; s < e.length;) {
            var i = e[s];
            ++s;
            var n = (i = E.ltrim(i)).split("=");
            if (!(n.length < 2)) {
                var r = n[0],
                    a = decodeURIComponent(n[1].split("+").join(" "));
                null != Ci[r] ? t.setReserved(r, a) : t.h[r] = a
            }
        }
        return t
    }, $s.get = function(t) {
        var e = $s.all();
        return null != Ci[t] ? e.getReserved(t) : e.h[t]
    }, $s.exists = function(t) {
        var e = $s.all();
        return null != Ci[t] ? e.existsReserved(t) : e.h.hasOwnProperty(t)
    }, $s.remove = function(t, e, s) {
        $s.set(t, "", -10, e, s)
    };
    var ti = function(t) {
        if (t instanceof Array && null == t.__enum__) this.a = t, this.byteLength = t.length;
        else {
            var e = t;
            this.a = [];
            for (var s = 0, i = e; s < i;) {
                var n = s++;
                this.a[n] = 0
            }
            this.byteLength = e
        }
    };
    (s["js.html.compat.ArrayBuffer"] = ti).__name__ = ["js", "html", "compat", "ArrayBuffer"], ti.sliceImpl = function(t, e) {
        var s = new Mi(this, t, null == e ? null : e - t),
            i = new Ui(s.byteLength);
        return new Mi(i).set(s), i
    }, ti.prototype = {
        slice: function(t, e) {
            return new ti(this.a.slice(t, e))
        },
        __class__: ti
    };
    var ei = function() {};
    (s["js.html.compat.Uint8Array"] = ei).__name__ = ["js", "html", "compat", "Uint8Array"], ei._new = function(t, e, s) {
        var i;
        if ("number" == typeof t) {
            i = [];
            for (var n = 0, r = t; n < r;) {
                i[n++] = 0
            }
            i.byteLength = i.length, i.byteOffset = 0, i.buffer = new ti(i)
        } else if (Zs.__instanceof(t, ti)) {
            var a = t;
            null == e && (e = 0), null == s && (s = a.byteLength - e), (i = 0 == e ? a.a : a.a.slice(e, e + s)).byteLength = i.length, i.byteOffset = e, i.buffer = a
        } else {
            if (!(t instanceof Array && null == t.__enum__)) throw new Ks("TODO " + j.string(t));
            (i = t.slice()).byteLength = i.length, i.byteOffset = 0, i.buffer = new ti(i)
        }
        return i.subarray = ei._subarray, i.set = ei._set, i
    }, ei._set = function(t, e) {
        if (Zs.__instanceof(t.buffer, ti)) {
            var s = t;
            if (t.byteLength + e > this.byteLength) throw new Ks("set() outside of range");
            for (var i = 0, n = t.byteLength; i < n;) {
                var r = i++;
                this[r + e] = s[r]
            }
        } else {
            if (!(t instanceof Array && null == t.__enum__)) throw new Ks("TODO");
            var a = t;
            if (a.length + e > this.byteLength) throw new Ks("set() outside of range");
            for (var _ = 0, o = a.length; _ < o;) {
                var h = _++;
                this[h + e] = a[h]
            }
        }
    }, ei._subarray = function(t, e) {
        var s = ei._new(this.slice(t, e));
        return s.byteOffset = t, s
    };
    var si = s["tweezer.EEase"] = {
        __ename__: ["tweezer", "EEase"],
        __constructs__: ["EASE_IN", "EASE_IN_OUT", "EASE_OUT", "EASE_OUT_IN"]
    };
    si.EASE_IN = ["EASE_IN", 0], si.EASE_IN.toString = i, (si.EASE_IN.__enum__ = si).EASE_IN_OUT = ["EASE_IN_OUT", 1], si.EASE_IN_OUT.toString = i, (si.EASE_IN_OUT.__enum__ = si).EASE_OUT = ["EASE_OUT", 2], si.EASE_OUT.toString = i, (si.EASE_OUT.__enum__ = si).EASE_OUT_IN = ["EASE_OUT_IN", 3], si.EASE_OUT_IN.toString = i, si.EASE_OUT_IN.__enum__ = si;
    var ii = s["tweezer.ETween"] = {
        __ename__: ["tweezer", "ETween"],
        __constructs__: ["BACK", "BOUNCE", "CIRCULAR", "CUBIC", "ELASTIC", "EXPONENTIAL", "LINEAR", "QUADRATIC", "QUARTIC", "QUINTIC", "SINE"]
    };
    ii.BACK = function(t) {
        var e = ["BACK", 0, t];
        return e.__enum__ = ii, e.toString = i, e
    }, ii.BOUNCE = ["BOUNCE", 1], ii.BOUNCE.toString = i, (ii.BOUNCE.__enum__ = ii).CIRCULAR = ["CIRCULAR", 2], ii.CIRCULAR.toString = i, (ii.CIRCULAR.__enum__ = ii).CUBIC = ["CUBIC", 3], ii.CUBIC.toString = i, (ii.CUBIC.__enum__ = ii).ELASTIC = function(t, e) {
        var s = ["ELASTIC", 4, t, e];
        return s.__enum__ = ii, s.toString = i, s
    }, ii.EXPONENTIAL = ["EXPONENTIAL", 5], ii.EXPONENTIAL.toString = i, (ii.EXPONENTIAL.__enum__ = ii).LINEAR = ["LINEAR", 6], ii.LINEAR.toString = i, (ii.LINEAR.__enum__ = ii).QUADRATIC = ["QUADRATIC", 7], ii.QUADRATIC.toString = i, (ii.QUADRATIC.__enum__ = ii).QUARTIC = ["QUARTIC", 8], ii.QUARTIC.toString = i, (ii.QUARTIC.__enum__ = ii).QUINTIC = ["QUINTIC", 9], ii.QUINTIC.toString = i, (ii.QUINTIC.__enum__ = ii).SINE = ["SINE", 10], ii.SINE.toString = i, ii.SINE.__enum__ = ii;
    var ni = function() {};
    (s["tweezer.TweenFactory"] = ni).__name__ = ["tweezer", "TweenFactory"], ni.createTweenFunction = function(e, s, i, t, n) {
        switch (null == t && (t = si.EASE_IN), null == n && (n = ii.LINEAR), n[1]) {
            case 0:
                var r = n[2];
                switch (null == r && (r = 1.70158), t[1]) {
                    case 0:
                        return function(t) {
                            return ai.easeIn(t, e, s, i, r)
                        };
                    case 1:
                        return function(t) {
                            return ai.easeInOut(t, e, s, i, r)
                        };
                    case 2:
                        return function(t) {
                            return ai.easeOut(t, e, s, i, r)
                        };
                    case 3:
                        return function(t) {
                            return ai.easeOutIn(t, e, s, i, r)
                        }
                }
                break;
            case 1:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return _i.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return _i.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return _i.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return _i.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 2:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return oi.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return oi.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return oi.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return oi.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 3:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return hi.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return hi.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return hi.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return hi.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 4:
                var a = n[3],
                    _ = n[2];
                switch (null == _ && (_ = .3 * i * (t == si.EASE_IN_OUT ? 1.5 : 1)), null == a && (a = 0), t[1]) {
                    case 0:
                        return function(t) {
                            return li.easeIn(t, e, s, i, _, a)
                        };
                    case 1:
                        return function(t) {
                            return li.easeInOut(t, e, s, i, _, a)
                        };
                    case 2:
                        return function(t) {
                            return li.easeOut(t, e, s, i, _, a)
                        };
                    case 3:
                        return function(t) {
                            return li.easeOutIn(t, e, s, i, _, a)
                        }
                }
                break;
            case 5:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return ui.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return ui.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return ui.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return ui.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 6:
                return function(t) {
                    return ci.ease(t, e, s, i)
                };
            case 7:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return di.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return di.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return di.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return di.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 8:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return pi.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return pi.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return pi.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return pi.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 9:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return gi.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return gi.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return gi.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return gi.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 10:
                switch (t[1]) {
                    case 0:
                        return function(t) {
                            return fi.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return fi.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return fi.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return fi.easeOutIn(t, e, s, i)
                        }
                }
        }
    };
    var ri = function(t, e, s, i, n, r, a, _, o, h, l) {
        null == a && (a = 0), null == r && (r = 1e3), null == n && (n = 0), this._updateCallback = e, this._startValue = s, this._endValue = i, this._startDelay = n, this._duration = r, this._endDelay = a, this._easeType = _, this._tweenType = o, this._completeCallback = h, this._isSnap = l, v.call(this, t), this._updater(), this._updates = 0
    };
    (s["tweezer.Tweezer"] = ri).__name__ = ["tweezer", "Tweezer"], ri.__super__ = v, ri.prototype = t(v.prototype, {
        _init: function() {
            v.prototype._init.call(this), this._tweenFunction = ni.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
        },
        _updater: function(t) {
            if (null == t && (t = 0), v.prototype._updater.call(this, t), null != this._updateCallback) {
                var e = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration));
                this._updateCallback(this._isSnap ? Math.round(e) : e)
            }
            this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: ri
    });
    var ai = function() {};
    (s["tweezer.tweens.Back"] = ai).__name__ = ["tweezer", "tweens", "Back"], ai.easeIn = function(t, e, s, i, n) {
        return s * (t /= i) * t * ((n + 1) * t - n) + e
    }, ai.easeOut = function(t, e, s, i, n) {
        return s * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
    }, ai.easeInOut = function(t, e, s, i, n) {
        return (t /= i / 2) < 1 ? s / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : s / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
    }, ai.easeOutIn = function(t, e, s, i, n) {
        return t < i / 2 ? ai.easeOut(2 * t, e, s / 2, i, n) : ai.easeIn(2 * t - i, e + s / 2, s / 2, i, n)
    };
    var _i = function() {};
    (s["tweezer.tweens.Bounce"] = _i).__name__ = ["tweezer", "tweens", "Bounce"], _i.easeIn = function(t, e, s, i) {
        return s - _i.easeOut(i - t, 0, s, i) + e
    }, _i.easeOut = function(t, e, s, i) {
        return (t /= i) < .36363636363636365 ? s * (7.5625 * t * t) + e : t < .7272727272727273 ? s * (7.5625 * (t -= .5454545454545454) * t + .75) + e : t < .9090909090909091 ? s * (7.5625 * (t -= .8181818181818182) * t + .9375) + e : s * (7.5625 * (t -= .9545454545454546) * t + .984375) + e
    }, _i.easeInOut = function(t, e, s, i) {
        return t < i / 2 ? .5 * _i.easeIn(2 * t, 0, s, i) + e : .5 * _i.easeOut(2 * t - i, 0, s, i) + .5 * s + e
    }, _i.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? _i.easeOut(2 * t, e, s / 2, i) : _i.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var oi = function() {};
    (s["tweezer.tweens.Circular"] = oi).__name__ = ["tweezer", "tweens", "Circular"], oi.easeIn = function(t, e, s, i) {
        return -s * (Math.sqrt(1 - (t /= i) * t) - 1) + e
    }, oi.easeOut = function(t, e, s, i) {
        return t = t / i - 1, s * Math.sqrt(1 - t * t) + e
    }, oi.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + e : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    }, oi.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? oi.easeOut(2 * t, e, s / 2, i) : oi.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var hi = function() {};
    (s["tweezer.tweens.Cubic"] = hi).__name__ = ["tweezer", "tweens", "Cubic"], hi.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t * t + e
    }, hi.easeOut = function(t, e, s, i) {
        return s * ((t = t / i - 1) * t * t + 1) + e
    }, hi.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t * t + e : s / 2 * ((t -= 2) * t * t + 2) + e
    }, hi.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? hi.easeOut(2 * t, e, s / 2, i) : hi.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var li = function() {};
    (s["tweezer.tweens.Elastic"] = li).__name__ = ["tweezer", "tweens", "Elastic"], li.easeIn = function(t, e, s, i, n, r) {
        return 0 == t ? e : 1 == (t /= i) ? e + s : (0 == r || r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), -r * Math.pow(2, 10 * --t) * Math.sin((t * i - a) * (2 * Math.PI) / n) + e);
        var a
    }, li.easeOut = function(t, e, s, i, n, r) {
        return 0 == t ? e : 1 == (t /= i) ? e + s : (0 == r || r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), r * Math.pow(2, -10 * t) * Math.sin((t * i - a) * (2 * Math.PI) / n) + s + e);
        var a
    }, li.easeInOut = function(t, e, s, i, n, r) {
        return 0 == t ? e : 2 == (t /= i / 2) ? e + s : (0 == r || r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), t < 1 ? r * Math.pow(2, 10 * --t) * Math.sin((t * i - a) * (2 * Math.PI) / n) * -.5 + e : r * Math.pow(2, -10 * --t) * Math.sin((t * i - a) * (2 * Math.PI) / n) * .5 + s + e);
        var a
    }, li.easeOutIn = function(t, e, s, i, n, r) {
        return t < i / 2 ? li.easeOut(2 * t, e, s / 2, i, n, r) : li.easeIn(2 * t - i, e + s / 2, s / 2, i, n, r)
    };
    var ui = function() {};
    (s["tweezer.tweens.Exponential"] = ui).__name__ = ["tweezer", "tweens", "Exponential"], ui.easeIn = function(t, e, s, i) {
        return 0 == t ? e : s * Math.pow(2, 10 * (t / i - 1)) + e - .001 * s
    }, ui.easeOut = function(t, e, s, i) {
        return t == i ? e + s : 1.001 * s * (1 - Math.pow(2, -10 * t / i)) + e
    }, ui.easeInOut = function(t, e, s, i) {
        return 0 == t ? e : t == i ? e + s : (t /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * s : s / 2 * 1.0005 * (2 - Math.pow(2, -10 * --t)) + e
    }, ui.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? ui.easeOut(2 * t, e, s / 2, i) : ui.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var ci = function() {};
    (s["tweezer.tweens.Linear"] = ci).__name__ = ["tweezer", "tweens", "Linear"], ci.ease = function(t, e, s, i) {
        return s * t / i + e
    };
    var di = function() {};
    (s["tweezer.tweens.Quadratic"] = di).__name__ = ["tweezer", "tweens", "Quadratic"], di.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t + e
    }, di.easeOut = function(t, e, s, i) {
        return -s * (t /= i) * (t - 2) + e
    }, di.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t + e : -s / 2 * (--t * (t - 2) - 1) + e
    }, di.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? di.easeOut(2 * t, e, s / 2, i) : di.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var pi = function() {};
    (s["tweezer.tweens.Quartic"] = pi).__name__ = ["tweezer", "tweens", "Quartic"], pi.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t * t * t + e
    }, pi.easeOut = function(t, e, s, i) {
        return -s * ((t = t / i - 1) * t * t * t - 1) + e
    }, pi.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t * t * t + e : -s / 2 * ((t -= 2) * t * t * t - 2) + e
    }, pi.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? pi.easeOut(2 * t, e, s / 2, i) : pi.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var gi = function() {};
    (s["tweezer.tweens.Quintic"] = gi).__name__ = ["tweezer", "tweens", "Quintic"], gi.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t * t * t * t + e
    }, gi.easeOut = function(t, e, s, i) {
        return s * ((t = t / i - 1) * t * t * t * t + 1) + e
    }, gi.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t * t * t * t + e : s / 2 * ((t -= 2) * t * t * t * t + 2) + e
    }, gi.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? gi.easeOut(2 * t, e, s / 2, i) : gi.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var fi = function() {};

    function Ei(t) {
        return t instanceof Array ? function() {
            return $.iter(t)
        } : "function" == typeof t.iterator ? mi(t, t.iterator) : t.iterator
    }(s["tweezer.tweens.Sine"] = fi).__name__ = ["tweezer", "tweens", "Sine"], fi.easeIn = function(t, e, s, i) {
        return -s * Math.cos(t / i * (Math.PI / 2)) + s + e
    }, fi.easeOut = function(t, e, s, i) {
        return s * Math.sin(t / i * (Math.PI / 2)) + e
    }, fi.easeInOut = function(t, e, s, i) {
        return -s / 2 * (Math.cos(Math.PI * t / i) - 1) + e
    }, fi.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? fi.easeOut(2 * t, e, s / 2, i) : fi.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var yi, vi = 0;

    function mi(t, e) {
        return null == e ? null : (null == e.__id__ && (e.__id__ = vi++), null == t.hx__closures__ ? t.hx__closures__ = {} : s = t.hx__closures__[e.__id__], null == s && ((s = function() {
            return s.method.apply(s.scope, arguments)
        }).scope = t, s.method = e, t.hx__closures__[e.__id__] = s), s);
        var s
    }
    s.Math = Math, String.prototype.__class__ = s.String = String, String.__name__ = ["String"], s.Array = Array, Array.__name__ = ["Array"], Date.prototype.__class__ = s.Date = Date, Date.__name__ = ["Date"];
    var Ti = s.Int = {
            __name__: ["Int"]
        },
        Ai = s.Dynamic = {
            __name__: ["Dynamic"]
        },
        wi = s.Float = Number;
    wi.__name__ = ["Float"];
    var Si = s.Bool = Boolean;
    Si.__ename__ = ["Bool"];
    var bi = s.Class = {
            __name__: ["Class"]
        },
        Ii = {};
    Rs.content = [{
        name: "revision",
        data: "OTMNCjIwMTgvMTAvMjMgMDk6MTg6MzENCg"
    }, {
        name: "config",
        data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8+DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJleG8yLWV4dHJhYm9sZGl0YWxpYy13ZWJmb250IiAvPg0KCQk8YXNjaWlBcnQ+DQogICBfX19fX19fXyAgX19fX19fX19fX19fX19fX18gIF9fIF9fX19fX19fXyAgX19fXyANCiAgLyBfXy8gX18gXC8gX19fLyBfX18vIF9fLyBfIFwvIC8vIC8gX18vIF8gXC8gX18gXA0KIF9cIFwvIC9fLyAvIC9fXy8gL19fLyBfLy8gLCBfLyBfICAvIF8vLyAsIF8vIC9fLyAvDQovX19fL1xfX19fL1xfX18vXF9fXy9fX18vXy98Xy9fLy9fL19fXy9fL3xffFxfX19fLyANCg0KCQk8L2FzY2lpQXJ0Pg0KCQk8dXJscz4NCgkJCTx3ZWJzaXRlPmh0dHA6Ly9iMTBiLmNvbTwvd2Vic2l0ZT4NCgkJCTxhdXRob3I+aHR0cDovL2IxMGIuY29tPC9hdXRob3I+DQoJCTwvdXJscz4NCgkJPGdvb2dsZUFuYWx5dGljcyBpZD0iVUEtMjI0MDYzMzctMzIiIGVuYWJsZWQ9InRydWUiIC8+DQoJCTxhdWRpb0hvbGREZWxheT41MDAwPC9hdWRpb0hvbGREZWxheT4NCgkJPGRpc2FibGVFeWVDYW5keT5mYWxzZTwvZGlzYWJsZUV5ZUNhbmR5Pg0KCTwvc2V0dGluZ3M+DQoJPGd1aT4NCgkJPGF1ZGlvSG9sZE1lc3NhZ2U+UFJFU1MgVE8gQ09OVElOVUU8L2F1ZGlvSG9sZE1lc3NhZ2U+DQoJCTxidXR0b25zPg0KCQkJPHdlYnNpdGU+TW9yZSBnYW1lczwvd2Vic2l0ZT4NCgkJCTxpbnN0cnVjdGlvbnM+SG93IHRvIHBsYXk8L2luc3RydWN0aW9ucz4NCgkJCTxwbGF5PlBsYXkgbm93PC9wbGF5Pg0KCQkJPGF2YXRhcj5DaGFuZ2UgaGVybzwvYXZhdGFyPg0KCQkJPHNlbGVjdExldmVsPlN0YXJ0IG1hdGNoPC9zZWxlY3RMZXZlbD4NCgkJCTxyZXBsYXk+UGxheSBhZ2FpbjwvcmVwbGF5Pg0KCQkJPGNvbnRpbnVlPkNvbnRpbnVlPC9jb250aW51ZT4NCgkJCTxmaW5pc2hlZD5HYW1lIG92ZXI8L2ZpbmlzaGVkPg0KCQkJPHJlc2V0PlJlc2V0IEhlcm88L3Jlc2V0Pg0KCQkJPGJ1eT5CdXk8L2J1eT4NCgkJCTx1bnBhdXNlPlJlc3VtZTwvdW5wYXVzZT4NCgkJCTxhdWRpb09uPlNvdW5kIE9uPC9hdWRpb09uPg0KCQkJPGF1ZGlvT2ZmPlNvdW5kIE9mZjwvYXVkaW9PZmY+DQoJCQk8ZnVsbFNjcmVlbk9uPkZ1bGwgc2NyZWVuPC9mdWxsU2NyZWVuT24+DQoJCQk8ZnVsbFNjcmVlbk9mZj5FeGl0IGZ1bGwgc2NyZWVuPC9mdWxsU2NyZWVuT2ZmPg0KCQkJPGJhY2s+TWFpbiBtZW51PC9iYWNrPg0KCQkJPHRlc3RNb2RlPg0KCQkJCTxicm9uemU+QnJvbnplPC9icm9uemU+DQoJCQkJPHNpbHZlcj5TaWx2ZXI8L3NpbHZlcj4NCgkJCQk8Z29sZD5Hb2xkPC9nb2xkPg0KCQkJPC90ZXN0TW9kZT4NCgkJCTxhdmF0YXJzPg0KCQkJCTx1bml0QT5NZW48L3VuaXRBPg0KCQkJCTx1bml0Qj5Xb21lbjwvdW5pdEI+DQoJCQk8L2F2YXRhcnM+DQoJCQk8bGV2ZWxzPg0KCQkJCTxsZXZlbDE+QmVnaW5uZXI8L2xldmVsMT4NCgkJCQk8bGV2ZWwyPk5vcm1hbDwvbGV2ZWwyPg0KCQkJCTxsZXZlbDM+RXhwZXJ0PC9sZXZlbDM+DQoJCQk8L2xldmVscz4NCgkJPC9idXR0b25zPg0KCQk8dXBncmFkZXM+DQoJCQk8bW92ZW1lbnQ+RHJpYmJsaW5nPC9tb3ZlbWVudD4NCgkJCTxzaG9vdGluZz5TaG9vdGluZzwvc2hvb3Rpbmc+DQoJCQk8ZGVmZW5zZT5EZWZlbnNlPC9kZWZlbnNlPg0KCQkJPG1hZ25ldD5NYWduZXQ8L21hZ25ldD4NCgkJPC91cGdyYWRlcz4NCgkJPG1lZGFscz4NCgkJCTxub25lPlJlc3BlY3Q8L25vbmU+DQoJCQk8YnJvbnplPkJyb256ZTwvYnJvbnplPg0KCQkJPHNpbHZlcj5TaWx2ZXI8L3NpbHZlcj4NCgkJCTxnb2xkPkdvbGQ8L2dvbGQ+DQoJCTwvbWVkYWxzPg0KCQk8bGV2ZWxzPg0KCQkJPGxldmVsMT5MZXZlbCAxPC9sZXZlbDE+DQoJCQk8bGV2ZWwyPkxldmVsIDI8L2xldmVsMj4NCgkJCTxsZXZlbDM+TGV2ZWwgMzwvbGV2ZWwzPg0KCQk8L2xldmVscz4NCgkJPHVuaXRzPg0KCQkJPHVuaXRBIHRpdGxlPSJNZW4iIHN1YnRpdGxlPSJUZWFtIiAvPg0KCQkJPHVuaXRCIHRpdGxlPSJXb21lbiIgc3VidGl0bGU9IlRlYW0iIC8+DQoJCTwvdW5pdHM+DQoJCTx0ZWFtcz4NCgkJCTx0ZWFtMSB0aXRsZT0iU2VsZWN0IiBzaG9ydD0iWU9VIiBraXQ9IjAiIHNraW49IjAiLz4NCgkJCTx0ZWFtMiB0aXRsZT0iR2VybWFueSIgc2hvcnQ9IkdFUiIga2l0PSIyIiBza2luPSItMiIvPg0KCQkJPHRlYW0zIHRpdGxlPSJCcmF6aWwiIHNob3J0PSJCUkEiIGtpdD0iMyIgc2tpbj0iMCIvPg0KCQkJPHRlYW00IHRpdGxlPSJCZWxnaXVtIiBzaG9ydD0iQkVMIiBraXQ9IjQiIHNraW49IjAiLz4NCgkJCTx0ZWFtNSB0aXRsZT0iUG9ydHVnYWwiIHNob3J0PSJQT1IiIGtpdD0iMCIgc2tpbj0iMCIvPg0KCQkJPHRlYW02IHRpdGxlPSJBcmdlbnRpbmEiIHNob3J0PSJBUkciIGtpdD0iNiIgc2tpbj0iMCIvPg0KCQkJPHRlYW03IHRpdGxlPSJTd2l0emVybGFuZCIgc2hvcnQ9IlNVSSIga2l0PSIwIiBza2luPSItMSIvPg0KCQkJPHRlYW04IHRpdGxlPSJGcmFuY2UiIHNob3J0PSJGUkEiIGtpdD0iMSIgc2tpbj0iMCIvPg0KCQkJPHRlYW05IHRpdGxlPSJTcGFpbiIgc2hvcnQ9IkVTUCIga2l0PSIwIiBza2luPSIwIi8+DQoJCQk8dGVhbTEwIHRpdGxlPSJDaGlsZSIgc2hvcnQ9IkNISSIga2l0PSIwIiBza2luPSIwIi8+DQoJCQk8dGVhbTExIHRpdGxlPSJQb2xhbmQiIHNob3J0PSJQT0wiIGtpdD0iNCIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMTIgdGl0bGU9IlBlcnUiIHNob3J0PSJQRVIiIGtpdD0iMCIgc2tpbj0iMCIvPg0KCQkJPHRlYW0xMyB0aXRsZT0iRGVubWFyayIgc2hvcnQ9IkRFTiIga2l0PSIwIiBza2luPSItMSIvPg0KCQkJPHRlYW0xNCB0aXRsZT0iRW5nbGFuZCIgc2hvcnQ9IkVORyIga2l0PSI3IiBza2luPSIwIi8+DQoJCQk8dGVhbTE1IHRpdGxlPSJUdW5pc2lhIiBzaG9ydD0iVFVOIiBraXQ9IjAiIHNraW49IjAiLz4NCgkJCTx0ZWFtMTYgdGl0bGU9Ik1leGljbyIgc2hvcnQ9Ik1FWCIga2l0PSI1IiBza2luPSIxIi8+DQoJCQk8dGVhbTE3IHRpdGxlPSJDb2xvbWJpYSIgc2hvcnQ9IkNPTCIga2l0PSIzIiBza2luPSIxIi8+DQoJCQk8dGVhbTE4IHRpdGxlPSJVcnVndWF5IiBzaG9ydD0iVVJVIiBraXQ9IjYiIHNraW49IjEiLz4NCgkJCTx0ZWFtMTkgdGl0bGU9IkNyb2F0aWEiIHNob3J0PSJDUk8iIGtpdD0iNCIgc2tpbj0iLTIiLz4NCgkJCTx0ZWFtMjAgdGl0bGU9Ik5ldGhlcmxhbmRzIiBzaG9ydD0iTkVEIiBraXQ9IjQiIHNraW49IjAiLz4NCgkJCTx0ZWFtMjEgdGl0bGU9Ikl0YWx5IiBzaG9ydD0iSVRBIiBraXQ9IjEiIHNraW49IjAiLz4NCgkJCTx0ZWFtMjIgdGl0bGU9IldhbGVzIiBzaG9ydD0iV0FMIiBraXQ9IjAiIHNraW49IjAiLz4NCgkJCTx0ZWFtMjMgdGl0bGU9IkljZWxhbmQiIHNob3J0PSJJU0wiIGtpdD0iMSIgc2tpbj0iLTIiLz4NCgkJCTx0ZWFtMjQgdGl0bGU9IlN3ZWRlbiIgc2hvcnQ9IlNXRSIga2l0PSIzIiBza2luPSItMSIvPg0KCQkJPHRlYW0yNSB0aXRsZT0iVW5pdGVkIFN0YXRlcyIgc2hvcnQ9IlVTQSIga2l0PSIxIiBza2luPSIwIi8+DQoJCQk8dGVhbTI2IHRpdGxlPSJDb3N0YSBSaWNhIiBzaG9ydD0iQ1JDIiBraXQ9IjAiIHNraW49IjEiLz4NCgkJCTx0ZWFtMjcgdGl0bGU9IkF1c3RyaWEiIHNob3J0PSJBVVQiIGtpdD0iMCIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMjggdGl0bGU9Ik4uIElyZWxhbmQiIHNob3J0PSJOSVIiIGtpdD0iNSIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMjkgdGl0bGU9IlNlbmVnYWwiIHNob3J0PSJTRU4iIGtpdD0iNSIgc2tpbj0iMiIvPg0KCQkJPHRlYW0zMCB0aXRsZT0iU2xvdmFraWEiIHNob3J0PSJTVksiIGtpdD0iNyIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMzEgdGl0bGU9IlVrcmFpbmUiIHNob3J0PSJVS1IiIGtpdD0iMyIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMzIgdGl0bGU9IlIuIG9mIElyZWxhbmQiIHNob3J0PSJJUkwiIGtpdD0iNSIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMzMgdGl0bGU9IlJvbWFuaWEiIHNob3J0PSJST1UiIGtpdD0iMyIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMzQgdGl0bGU9IlBhcmFndWF5IiBzaG9ydD0iUEFSIiBraXQ9IjQiIHNraW49IjEiLz4NCgkJCTx0ZWFtMzUgdGl0bGU9IlNjb3RsYW5kIiBzaG9ydD0iU0NPIiBraXQ9IjEiIHNraW49Ii0xIi8+DQoJCQk8dGVhbTM2IHRpdGxlPSJTZXJiaWEiIHNob3J0PSJTUkIiIGtpdD0iMCIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtMzcgdGl0bGU9IklyYW4iIHNob3J0PSJJUk4iIGtpdD0iMCIgc2tpbj0iMSIvPg0KCQkJPHRlYW0zOCB0aXRsZT0iVHVya2V5IiBzaG9ydD0iVFVSIiBraXQ9IjYiIHNraW49IjAiLz4NCgkJCTx0ZWFtMzkgdGl0bGU9IkNvbmdvIERSIiBzaG9ydD0iQ09EIiBraXQ9IjYiIHNraW49IjIiLz4NCgkJCTx0ZWFtNDAgdGl0bGU9IlZlbmV6dWVsYSIgc2hvcnQ9IlZFTiIga2l0PSIzIiBza2luPSIxIi8+DQoJCQk8dGVhbTQxIHRpdGxlPSJBdXN0cmFsaWEiIHNob3J0PSJBVVMiIGtpdD0iMyIgc2tpbj0iMCIvPg0KCQkJPHRlYW00MiB0aXRsZT0iQm9zbmlhIEhlcnplZ292aW5hIiBzaG9ydD0iQklIIiBraXQ9IjEiIHNraW49Ii0xIi8+DQoJCQk8dGVhbTQzIHRpdGxlPSJNb3JvY2NvIiBzaG9ydD0iTUFSIiBraXQ9IjUiIHNraW49IjEiLz4NCgkJCTx0ZWFtNDQgdGl0bGU9Ik1vbnRlbmVncm8iIHNob3J0PSJNTkUiIGtpdD0iMSIgc2tpbj0iMCIvPg0KCQkJPHRlYW00NSB0aXRsZT0iR3JlZWNlIiBzaG9ydD0iR1JFIiBraXQ9IjEiIHNraW49IjAiLz4NCgkJCTx0ZWFtNDYgdGl0bGU9IkN6ZWNoIFJlcHVibGljIiBzaG9ydD0iQ1pFIiBraXQ9IjciIHNraW49Ii0xIi8+DQoJCQk8dGVhbTQ3IHRpdGxlPSJFZ3lwdCIgc2hvcnQ9IkVHWSIga2l0PSIwIiBza2luPSIxIi8+DQoJCQk8dGVhbTQ4IHRpdGxlPSJOaWdlcmlhIiBzaG9ydD0iTkdBIiBraXQ9IjUiIHNraW49IjIiLz4NCgkJCTx0ZWFtNDkgdGl0bGU9Ik5vcndheSIgc2hvcnQ9Ik5PUiIga2l0PSI3IiBza2luPSIwIi8+DQoJCQk8dGVhbTUwIHRpdGxlPSJIdW5nYXJ5IiBzaG9ydD0iSFVOIiBraXQ9IjAiIHNraW49IjAiLz4NCgkJCTx0ZWFtNTEgdGl0bGU9IkNhbWVyb29uIiBzaG9ydD0iQ01SIiBraXQ9IjUiIHNraW49IjIiLz4NCgkJCTx0ZWFtNTIgdGl0bGU9IkdoYW5hIiBzaG9ydD0iR0hBIiBraXQ9IjQiIHNraW49IjIiLz4NCgkJCTx0ZWFtNTMgdGl0bGU9IkphbWFpY2EiIHNob3J0PSJKQU0iIGtpdD0iMyIgc2tpbj0iMiIvPg0KCQkJPHRlYW01NCB0aXRsZT0iQnVsZ2FyaWEiIHNob3J0PSJCVUwiIGtpdD0iNSIgc2tpbj0iLTEiLz4NCgkJCTx0ZWFtNTUgdGl0bGU9IlBhbmFtYSIgc2hvcnQ9IlBBTiIga2l0PSI3IiBza2luPSIwIi8+DQoJCQk8dGVhbTU2IHRpdGxlPSJBbGJhbmlhIiBzaG9ydD0iQUxCIiBraXQ9IjAiIHNraW49IjAiLz4NCgkJCTx0ZWFtNTcgdGl0bGU9IkJvbGl2aWEiIHNob3J0PSJCT0wiIGtpdD0iNSIgc2tpbj0iMCIvPg0KCQkJPHRlYW01OCB0aXRsZT0iQ2FwZSBWZXJkw6kiIHNob3J0PSJDUFYiIGtpdD0iMSIgc2tpbj0iMSIvPg0KCQkJPHRlYW01OSB0aXRsZT0iSG9uZHVyYXMiIHNob3J0PSJIT04iIGtpdD0iNyIgc2tpbj0iMSIvPg0KCQkJPHRlYW02MCB0aXRsZT0iSmFwYW4iIHNob3J0PSJKUE4iIGtpdD0iMSIgc2tpbj0iLTIiLz4NCgkJCTx0ZWFtNjEgdGl0bGU9IlNvdXRoIEtvcmVhIiBzaG9ydD0iS09SIiBraXQ9IjAiIHNraW49Ii0yIi8+DQoJCQk8dGVhbTYyIHRpdGxlPSJGaW5sYW5kIiBzaG9ydD0iRklOIiBraXQ9IjciIHNraW49Ii0xIi8+DQoJCQk8dGVhbTYzIHRpdGxlPSJFY3VhZG9yIiBzaG9ydD0iRUNVIiBraXQ9IjMiIHNraW49IjEiLz4NCgkJCTx0ZWFtNjQgdGl0bGU9IkNoaW5hIFBSIiBzaG9ydD0iQ0hOIiBraXQ9IjAiIHNraW49Ii0yIi8+DQoJCQk8dGVhbTY1IHRpdGxlPSJTbG92ZW5pYSIgc2hvcnQ9IlNWTiIga2l0PSI2IiBza2luPSItMSIvPg0KCQkJPHRlYW02NiB0aXRsZT0iUnVzc2lhIiBzaG9ydD0iUlVTIiBraXQ9IjAiIHNraW49Ii0yIi8+DQoJCQk8dGVhbTY3IHRpdGxlPSJTb3V0aCBBZnJpY2EiIHNob3J0PSJSU0EiIGtpdD0iMyIgc2tpbj0iMSIvPg0KCQkJPHRlYW02OCB0aXRsZT0iU2F1ZGkgQXJhYmlhIiBzaG9ydD0iS1NBIiBraXQ9IjUiIHNraW49IjEiLz4NCgkJCTx0ZWFtNjkgdGl0bGU9Ikl2b3J5IENvYXN0IiBzaG9ydD0iQ0lWIiBraXQ9IjQiIHNraW49IjIiLz4NCgkJCTx0ZWFtNzAgdGl0bGU9IkNhbmFkYSIgc2hvcnQ9IkNBTiIga2l0PSIwIiBza2luPSIwIi8+DQoJCTwvdGVhbXM+DQoJCTxzY2VuZXM+DQoJCQk8bWVudT4NCgkJCQk8dGl0bGU+U29jY2VyIEhlcm88L3RpdGxlPg0KCQkJCTxzdWJ0aXRsZT5TdW1tZXIgU3BvcnRzPC9zdWJ0aXRsZT4NCgkJCTwvbWVudT4NCgkJCTxpbnN0cnVjdGlvbnM+DQoJCQkJPHRpdGxlPkhvdyB0byBwbGF5PC90aXRsZT4NCgkJCQk8bWVzc2FnZT48IVtDREFUQVtDaG9vc2UgeW91ciBoZXJvIGFuZCBjb21wZXRlIGFnYWluc3QgMyBmaWVyY2Ugb3Bwb25lbnRzIGluIHRoZSBXb3JsZCBTb2NjZXIgZXZlbnQuPGJyLz48YnIvPkF2b2lkIHRoZSBhdHRhY2tpbmcgcGxheWVycyB0byBhcHByb2FjaCB0aGUgZ29hbCBsaW5lLiAgT25jZSBpbiBmcm9udCBvZiB0aGUgZ29hbCB0aW1lIHlvdXIgc2hvdCB0byBzY29yZSE8YnIvPjxici8+V2lsbCB5b3Ugd2luIGEgR29sZCBNZWRhbCBieSBzY29yaW5nIGFsbCAzIGNoYW5jZXM/XV0+PC9tZXNzYWdlPg0KCQkJPC9pbnN0cnVjdGlvbnM+DQoJCQk8YXZhdGFyPg0KCQkJCTx0aXRsZT5TZWxlY3QgaGVybzwvdGl0bGU+DQoJCQk8L2F2YXRhcj4NCgkJCTxzZWxlY3RMZXZlbD4NCgkJCQk8dGl0bGU+U2VsZWN0IFNvY2NlciBldmVudDwvdGl0bGU+DQoJCQkJPG1lc3NhZ2VOZXc+UGxheSB0byB3aW4gYSBtZWRhbDwvbWVzc2FnZU5ldz4NCgkJCQk8bWVzc2FnZUxvY2tlZD5QbGF5IF9fUFJFVklPVVNfTEVWRUxfXyB0byB1bmxvY2s8L21lc3NhZ2VMb2NrZWQ+DQoJCQkJPG5ldz5OZXc8L25ldz4NCgkJCQk8bG9ja2VkPkxvY2tlZDwvbG9ja2VkPg0KCQkJPC9zZWxlY3RMZXZlbD4NCgkJCTxnYW1lPg0KCQkJCTxodWQ+DQoJCQkJCTxwZXJpb2RzPkNoYW5jZXM8L3BlcmlvZHM+DQoJCQkJCTxkaXN0YW5jZT5EaXN0YW5jZSB0byBnb2FsPC9kaXN0YW5jZT4NCgkJCQkJPHRpbWVyPlRpbWUgdG8gc2hvb3Q8L3RpbWVyPg0KCQkJCQk8Y29pbnM+Q29pbnM8L2NvaW5zPg0KCQkJCQk8cG93ZXI+U2hvdCBwb3dlcjwvcG93ZXI+DQoJCQkJCTxkZWZlYXRlZD5UYWNrbGVkITwvZGVmZWF0ZWQ+DQoJCQkJCTxzY29yZT5Hb2FsITwvc2NvcmU+DQoJCQkJCTxtaXNzPlNhdmVkITwvbWlzcz4NCgkJCQkJPHN0YXJ0UGVyaW9kMT5fX188L3N0YXJ0UGVyaW9kMT4NCgkJCQkJPHN0YXJ0UGVyaW9kMj5HbyBGb3IgR29hbDwvc3RhcnRQZXJpb2QyPg0KCQkJCQk8c3RhcnRQZXJpb2QzPkxhc3QgUGxheTwvc3RhcnRQZXJpb2QzPg0KCQkJCTwvaHVkPg0KCQkJPC9nYW1lPg0KCQkJPHJlc3VsdHM+DQoJCQkJPHRpdGxlPlJlc3VsdHM8L3RpdGxlPg0KCQkJCTxtZXNzYWdlPllvdSB3b248L21lc3NhZ2U+DQoJCQk8L3Jlc3VsdHM+DQoJCQk8c2hvcD4NCgkJCQk8dGl0bGU+VHJhaW4geW91ciBoZXJvPC90aXRsZT4NCgkJCQk8bWF4ZWQ+TWF4ZWQ8L21heGVkPg0KCQkJPC9zaG9wPg0KCQk8L3NjZW5lcz4NCgk8L2d1aT4NCjwvZGF0YT4NCg"
    }];
    var Ci = {},
        Ui = e.ArrayBuffer || ti;
    null == Ui.prototype.slice && (Ui.prototype.slice = ti.sliceImpl);
    var ki, Mi = e.Uint8Array || ei._new;
    N.Element = 0, N.PCData = 1, N.CData = 2, N.Comment = 3, N.DocType = 4, N.ProcessingInstruction = 5, N.Document = 6, me._WIDTH = 32, me._HEIGHT = 32, Oe._WIDTH = 160, Oe._HEIGHT = 110, Oe._HEAD_WIDTH = 32, Oe._HEAD_HEIGHT = 40, Ds.USE_CACHE = !1, Ds.USE_ENUM_INDEX = !1, Ds.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", Bs.DEFAULT_RESOLVER = new Ns, Bs.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", Ls.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ls.BYTES = Os.ofString(Ls.CHARS), Ws.count = 0, zs.escapes = (ki = new js, null != Ci.lt ? ki.setReserved("lt", "<") : ki.h.lt = "<", null != Ci.gt ? ki.setReserved("gt", ">") : ki.h.gt = ">", null != Ci.amp ? ki.setReserved("amp", "&") : ki.h.amp = "&", null != Ci.quot ? ki.setReserved("quot", '"') : ki.h.quot = '"', null != Ci.apos ? ki.setReserved("apos", "'") : ki.h.apos = "'", ki), Zs.__toStr = {}.toString, ei.BYTES_PER_ELEMENT = 1, de.main()
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);