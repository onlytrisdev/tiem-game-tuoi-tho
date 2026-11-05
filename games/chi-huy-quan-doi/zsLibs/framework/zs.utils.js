window.zs = window.zs || {},
function(t) {
    "use strict";
    class e {}
    function Coop(t, e, r) {
        let n = new Promise(t);
        if (e) if (r) {
            let t = !1;
            n.then(r =>{
                t || (t = !0, e(r))
            }).
            catch(e =>{
                console.error("coop error", e),
                t || (t = !0, r(e))
            })
        } else n.then(e).
        catch(t =>{
            console.error("promise rejected", t)
        });
        else r ? n.
        catch(t =>{
            console.error("coop error", t),
            r(t)
        }) : n.
        catch(t =>{
            console.error("promise rejected", t)
        });
        return n
    }
    e.linearNone = "linearNone",
    e.linearIn = "linearIn",
    e.linearInOut = "linearInOut",
    e.linearOut = "linearOut",
    e.bounceIn = "bounceIn",
    e.bounceInOut = "bounceInOut",
    e.bounceOut = "bounceOut",
    e.backIn = "backIn",
    e.backInOut = "backInOut",
    e.backOut = "backOut",
    e.elasticIn = "elasticIn",
    e.elasticInOut = "elasticInOut",
    e.elasticOut = "elasticOut",
    e.strongIn = "strongIn",
    e.strongInOut = "strongInOut",
    e.strongOut = "strongOut",
    e.sineInOut = "sineInOut",
    e.sineIn = "sineIn",
    e.sineOut = "sineOut",
    e.quintIn = "quintIn",
    e.quintInOut = "quintInOut",
    e.quintOut = "quintOut",
    e.quartIn = "quartIn",
    e.quartInOut = "quartInOut",
    e.quartOut = "quartOut",
    e.cubicIn = "cubicIn",
    e.cubicInOut = "cubicInOut",
    e.cubicOut = "cubicOut",
    e.quadIn = "quadIn",
    e.quadInOut = "quadInOut",
    e.quadOut = "quadOut",
    e.expoIn = "expoIn",
    e.expoInOut = "expoInOut",
    e.expoOut = "expoOut",
    e.circIn = "circIn",
    e.circInOut = "circInOut",
    e.circOut = "circOut";
    class r {
        constructor(t = null, e = null, r = null, n = !1) {
            this.once = !1,
            this._id = 0,
            this.setTo(t, e, r, n)
        }
        setTo(t, e, n, s = !1) {
            return this._id = r._gid++,
            this.caller = t,
            this.method = e,
            this.args = n,
            this.once = s,
            this
        }
        run() {
            if (null == this.method) return null;
            var t = this._id,
            e = this.method.apply(this.caller, this.args);
            return this._id === t && this.once && this.recover(),
            e
        }
        runWith(t) {
            if (null == this.method) return null;
            var e = this._id;
            if (null == t) var r = this.method.apply(this.caller, this.args);
            else r = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
            return this._id === e && this.once && this.recover(),
            r
        }
        clear() {
            return this.caller = null,
            this.method = null,
            this.args = null,
            this
        }
        recover() {
            this._id > 0 && (this._id = 0, r._pool.push(this.clear()))
        }
        static create(t, e, n = null, s = !0) {
            return r._pool.length ? r._pool.pop().setTo(t, e, n, s) : new r(t, e, n, s)
        }
    }
    r._pool = [],
    r._gid = 1;
    class n {
        static get inst() {
            return this._inst || (this._inst = new n),
            this._inst
        }
        static getGID() {
            let t = this._gid;
            return this._gid++,
            t
        }
        constructor(t = !0) {
            this.scale = 1,
            this.currTimer = Date.now(),
            this.currFrame = 0,
            this._delta = 0,
            this._lastTimer = Date.now(),
            this._map = [],
            this._handlers = [],
            this._temp = [],
            this._count = 0,
            t && n.gTimer && n.gTimer.frameLoop(1, this, this._update)
        }
        get delta() {
            return this._delta
        }
        _update() {
            if (this.scale <= 0) return this._lastTimer = Date.now(),
            void(this._delta = 0);
            var t = this.currFrame = this.currFrame + this.scale,
            e = Date.now(),
            r = e - this._lastTimer > 3e4;
            this._delta = (e - this._lastTimer) * this.scale;
            var n = this.currTimer = this.currTimer + this._delta;
            this._lastTimer = e;
            var s = this._handlers;
            this._count = 0;
            for (var l = 0,
            i = s.length; l < i; l++) {
                var a = s[l];
                if (null !== a.method) {
                    var u = a.userFrame ? t: n;
                    if (u >= a.exeTime) if (a.repeat) if (!a.jumpFrame || r) a.exeTime += a.delay,
                    a.run(!1),
                    u > a.exeTime && (a.exeTime += Math.ceil((u - a.exeTime) / a.delay) * a.delay);
                    else for (; u >= a.exeTime;) a.exeTime += a.delay,
                    a.run(!1);
                    else a.run(!0)
                } else this._count++
            } (this._count > 30 || t % 200 == 0) && this._clearHandlers()
        }
        _clearHandlers() {
            for (var t = this._handlers,
            e = 0,
            r = t.length; e < r; e++) {
                var n = t[e];
                null !== n.method ? this._temp.push(n) : this._recoverHandler(n)
            }
            this._handlers = this._temp,
            t.length = 0,
            this._temp = t
        }
        _recoverHandler(t) {
            this._map[t.key] == t && (this._map[t.key] = null),
            t.clear(),
            n._pool.push(t)
        }
        _create(t, e, r, l, i, a, u) {
            if (!r) return i.apply(l, a),
            null;
            if (u) {
                var h = this._getHandler(l, i);
                if (h) return h.repeat = e,
                h.userFrame = t,
                h.delay = r,
                h.caller = l,
                h.method = i,
                h.args = a,
                h.exeTime = r + (t ? this.currFrame: this.currTimer + Date.now() - this._lastTimer),
                h
            }
            return (h = n._pool.length > 0 ? n._pool.pop() : new s).repeat = e,
            h.userFrame = t,
            h.delay = r,
            h.caller = l,
            h.method = i,
            h.args = a,
            h.exeTime = r + (t ? this.currFrame: this.currTimer + Date.now() - this._lastTimer),
            this._indexHandler(h),
            this._handlers.push(h),
            h
        }
        _indexHandler(t) {
            var e = t.caller,
            r = t.method,
            s = e ? e.$_GID || (e.$_GID = n.getGID()) : 0,
            l = r.$_TID || (r.$_TID = 1e5 * n._mid++);
            t.key = s + l,
            this._map[t.key] = t
        }
        once(t, e, r, n = null, s = !0) {
            this._create(!1, !1, t, e, r, n, s)
        }
        loop(t, e, r, n = null, s = !0, l = !1) {
            var i = this._create(!1, !0, t, e, r, n, s);
            i && (i.jumpFrame = l)
        }
        frameOnce(t, e, r, n = null, s = !0) {
            this._create(!0, !1, t, e, r, n, s)
        }
        frameLoop(t, e, r, n = null, s = !0) {
            this._create(!0, !0, t, e, r, n, s)
        }
        toString() {
            return " handlers:" + this._handlers.length + " pool:" + n._pool.length
        }
        clear(t, e) {
            var r = this._getHandler(t, e);
            r && (this._map[r.key] = null, r.key = 0, r.clear())
        }
        clearAll(t) {
            if (t) for (var e = 0,
            r = this._handlers.length; e < r; e++) {
                var n = this._handlers[e];
                n.caller === t && (this._map[n.key] = null, n.key = 0, n.clear())
            }
        }
        _getHandler(t, e) {
            var r = t ? t.$_GID || (t.$_GID = n.getGID()) : 0,
            s = e.$_TID || (e.$_TID = 1e5 * n._mid++);
            return this._map[r + s]
        }
        callLater(t, e, r = null) {
            CallLater.I.callLater(t, e, r)
        }
        runCallLater(t, e) {
            CallLater.I.runCallLater(t, e)
        }
        runTimer(t, e) {
            var r = this._getHandler(t, e);
            r && null != r.method && (this._map[r.key] = null, r.run(!0))
        }
        pause() {
            this.scale = 0
        }
        resume() {
            this.scale = 1
        }
    }
    n.gTimer = null,
    n._pool = [],
    n._gid = 1,
    n._mid = 1;
    class s {
        clear() {
            this.caller = null,
            this.method = null,
            this.args = null
        }
        run(t) {
            var e = this.caller;
            if (e && e.destroyed) return this.clear();
            var r = this.method,
            n = this.args;
            t && this.clear(),
            null != r && (n ? r.apply(e, n) : r.call(e))
        }
    }
    class l {
        static getOrAddComponent(t, e) {
            if (null == t) return;
            let r = t.getComponent(e);
            return null == r && (r = t.addComponent(e)),
            r
        }
        static sleep(t) {
            return new Coop((e, r) =>{
                setTimeout(() =>{
                    e()
                },
                t)
            })
        }
        static isToday(t, e) {
            let r = Date.now();
            if (r - t > (e ? 86400 : 864e5)) return ! 1;
            let n = new Date(r),
            s = new Date(t);
            return n.getDate() == s.getDate()
        }
        static randInt(t, e) {
            return Math.random() * (e - t) + t << 0
        }
        static srandInt(t, e) {
            return this.seedRandom() * (e - t) + t << 0
        }
        static rand(t, e) {
            return Math.random() * (e - t) + t
        }
        static srand(t, e) {
            return this.seedRandom() * (e - t) + t
        }
        static seedRandom() {
            return this.randSeed = (9301 * this.randSeed + 49297) % 233280,
            this.randSeed / 233280
        }
        static setRandSeed(t) {
            this.randSeed = t,
            this.randSeed = (9301 * this.randSeed + 49297) % 233280
        }
        static pickNumbers(t, e, r) {
            if (r <= 0) return [];
            t > e && ([t, e] = [e, t]);
            let n = [],
            s = [];
            for (let r = t; r <= e; r++) s.push(r);
            r >= s.length && (r = s.length);
            for (let t = 0; t < r; t++) {
                let t = this.randInt(0, s.length);
                n.push(s[t]),
                s.splice(t, 1)
            }
            return n
        }
        static spickNumbers(t, e, r, n) {
            if (r <= 0) return [];
            t > e && ([t, e] = [e, t]);
            let s = [],
            l = [];
            for (let r = t; r <= e; r++) l.push(r);
            r >= l.length && (r = l.length),
            n && this.setRandSeed(n);
            for (let t = 0; t < r; t++) {
                let t = this.srandInt(0, l.length);
                s.push(l[t]),
                l.splice(t, 1)
            }
            return s
        }
        static pickArray(t, e) {
            if (null == t || t.length <= 0 || e <= 0) return [];
            let r = [],
            n = t.concat();
            e >= n.length && (e = n.length);
            for (let t = 0; t < e; t++) {
                let t = this.randInt(0, n.length);
                r.push(n[t]),
                n.splice(t, 1)
            }
            return r
        }
        static spickArray(t, e, r) {
            if (null == t || t.length <= 0 || e <= 0) return [];
            let n = [],
            s = t.concat();
            e >= s.length && (e = s.length),
            r && this.setRandSeed(r);
            for (let t = 0; t < e; t++) {
                let t = this.srandInt(0, s.length);
                n.push(s[t]),
                s.splice(t, 1)
            }
            return n
        }
        static isNumber(t) {
            return ! (!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t))
        }
        static startwith(t, e) {
            return ! (t.length < e.length) && t.slice(0, e.length) == e
        }
        static randByte() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        static flatKVJson(t, e) {
            let r = {};
            if (!Array.isArray(t) || t.length <= 0) return r;
            for (let n = 0, s = t.length; n < s; n++) {
                let s = t[n];
                if (s.key && s.value) {
                    let t = s.value;
                    if (e && "number" != typeof s.value) {
                        let e = parseFloat(s.value);
                        isNaN(e) || (t = s.value)
                    }
                    r[s.key] = t
                }
            }
            return r
        }
        static getItem(t) {
            return zs.proxy.LocalStorage.getItem(zs.core.appId + "." + t)
        }
        static setItem(t, e) {
            zs.proxy.LocalStorage.setItem(zs.core.appId + "." + t, e)
        }
        static arrayDeepCopy(t) {
            if (!Array.isArray(t) || t.length <= 0) return [];
            let e = [];
            for (let r = 0, n = t.length; r < n; r++) {
                let n = t[r];
                if ("object" == typeof n) {
                    let t = {};
                    for (let e in n) t[e] = n[e];
                    e.push(t)
                } else e.push(n)
            }
            return e
        }
        static getEventCode(t) {
            return null == zs.network.loginCode || null == zs.core.userId ? null: zs.configs.gameCfg.appId + "-" + zs.network.loginCode + "-" + zs.core.userId + "-" + t
        }
    }
    l.randSeed = 5,
    t.Ease = e,
    t.Coop = Coop,
    t.Handler = r,
    t.Timer = n,
    t.Tween = class {
        static to(t, e, r, n = null, s = null, l = 0) {
            return zs.proxy.Tween.to(t, e, r, n, s, l)
        }
        static clearAll(t) {
            zs.proxy.Tween.clearAll(t)
        }
    },
    t.utils = l
} (window.zs = window.zs || {});