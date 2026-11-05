/*
 TweenJS
 Visit http://createjs.com/ for documentation, updates and examples.

 Copyright (c) 2010 gskinner.com, inc.

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
this.createjs = this.createjs || {};
createjs.extend = function (a, c) {
    function b() {
        this.constructor = a;
    }
    b.prototype = c.prototype;
    return (a.prototype = new b());
};
this.createjs = this.createjs || {};
createjs.promote = function (a, c) {
    var b = a.prototype,
        d = (Object.getPrototypeOf && Object.getPrototypeOf(b)) || b.__proto__;
    if (d) {
        b[(c += "_") + "constructor"] = d.constructor;
        for (var e in d) b.hasOwnProperty(e) && "function" == typeof d[e] && (b[c + e] = d[e]);
    }
    return a;
};
this.createjs = this.createjs || {};
createjs.deprecate = function (a, c) {
    return function () {
        var b = "Deprecated property or method '" + c + "'. See docs for info.";
        console && (console.warn ? console.warn(b) : console.log(b));
        return a && a.apply(this, arguments);
    };
};
this.createjs = this.createjs || {};
(function () {
    function a(b, d, e) {
        this.type = b;
        this.currentTarget = this.target = null;
        this.eventPhase = 0;
        this.bubbles = !!d;
        this.cancelable = !!e;
        this.timeStamp = new Date().getTime();
        this.removed = this.immediatePropagationStopped = this.propagationStopped = this.defaultPrevented = !1;
    }
    var c = a.prototype;
    c.preventDefault = function () {
        this.defaultPrevented = this.cancelable && !0;
    };
    c.stopPropagation = function () {
        this.propagationStopped = !0;
    };
    c.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0;
    };
    c.remove = function () {
        this.removed = !0;
    };
    c.clone = function () {
        return new a(this.type, this.bubbles, this.cancelable);
    };
    c.set = function (b) {
        for (var d in b) this[d] = b[d];
        return this;
    };
    c.toString = function () {
        return "[Event (type=" + this.type + ")]";
    };
    createjs.Event = a;
})();
this.createjs = this.createjs || {};
(function () {
    function a() {
        this._captureListeners = this._listeners = null;
    }
    var c = a.prototype;
    a.initialize = function (b) {
        b.addEventListener = c.addEventListener;
        b.on = c.on;
        b.removeEventListener = b.off = c.removeEventListener;
        b.removeAllEventListeners = c.removeAllEventListeners;
        b.hasEventListener = c.hasEventListener;
        b.dispatchEvent = c.dispatchEvent;
        b._dispatchEvent = c._dispatchEvent;
        b.willTrigger = c.willTrigger;
    };
    c.addEventListener = function (b, d, e) {
        var f = e ? (this._captureListeners = this._captureListeners || {}) : (this._listeners = this._listeners || {});
        var g = f[b];
        g && this.removeEventListener(b, d, e);
        (g = f[b]) ? g.push(d) : (f[b] = [d]);
        return d;
    };
    c.on = function (b, d, e, f, g, m) {
        d.handleEvent && ((e = e || d), (d = d.handleEvent));
        e = e || this;
        return this.addEventListener(
            b,
            function (h) {
                d.call(e, h, g);
                f && h.remove();
            },
            m
        );
    };
    c.removeEventListener = function (b, d, e) {
        if ((e = e ? this._captureListeners : this._listeners)) {
            var f = e[b];
            if (f)
                for (var g = 0, m = f.length; g < m; g++)
                    if (f[g] == d) {
                        1 == m ? delete e[b] : f.splice(g, 1);
                        break;
                    }
        }
    };
    c.off = c.removeEventListener;
    c.removeAllEventListeners = function (b) {
        b ? (this._listeners && delete this._listeners[b], this._captureListeners && delete this._captureListeners[b]) : (this._listeners = this._captureListeners = null);
    };
    c.dispatchEvent = function (b, d, e) {
        if ("string" == typeof b) {
            var f = this._listeners;
            if (!(d || (f && f[b]))) return !0;
            b = new createjs.Event(b, d, e);
        } else b.target && b.clone && (b = b.clone());
        try {
            b.target = this;
        } catch (g) {}
        if (b.bubbles && this.parent) {
            e = this;
            for (d = [e]; e.parent; ) d.push((e = e.parent));
            f = d.length;
            for (e = f - 1; 0 <= e && !b.propagationStopped; e--) d[e]._dispatchEvent(b, 1 + (0 == e));
            for (e = 1; e < f && !b.propagationStopped; e++) d[e]._dispatchEvent(b, 3);
        } else this._dispatchEvent(b, 2);
        return !b.defaultPrevented;
    };
    c.hasEventListener = function (b) {
        var d = this._listeners,
            e = this._captureListeners;
        return !!((d && d[b]) || (e && e[b]));
    };
    c.willTrigger = function (b) {
        for (var d = this; d; ) {
            if (d.hasEventListener(b)) return !0;
            d = d.parent;
        }
        return !1;
    };
    c.toString = function () {
        return "[EventDispatcher]";
    };
    c._dispatchEvent = function (b, d) {
        var e,
            f,
            g = 2 >= d ? this._captureListeners : this._listeners;
        if (b && g && (f = g[b.type]) && (e = f.length)) {
            try {
                b.currentTarget = this;
            } catch (h) {}
            try {
                b.eventPhase = d | 0;
            } catch (h) {}
            b.removed = !1;
            f = f.slice();
            for (g = 0; g < e && !b.immediatePropagationStopped; g++) {
                var m = f[g];
                m.handleEvent ? m.handleEvent(b) : m(b);
                b.removed && (this.off(b.type, m, 1 == d), (b.removed = !1));
            }
        }
        2 === d && this._dispatchEvent(b, 2.1);
    };
    createjs.EventDispatcher = a;
})();
this.createjs = this.createjs || {};
(function () {
    function a() {
        throw "Ticker cannot be instantiated.";
    }
    a.RAF_SYNCHED = "synched";
    a.RAF = "raf";
    a.TIMEOUT = "timeout";
    a.timingMode = null;
    a.maxDelta = 0;
    a.paused = !1;
    a.removeEventListener = null;
    a.removeAllEventListeners = null;
    a.dispatchEvent = null;
    a.hasEventListener = null;
    a._listeners = null;
    createjs.EventDispatcher.initialize(a);
    a._addEventListener = a.addEventListener;
    a.addEventListener = function () {
        !a._inited && a.init();
        return a._addEventListener.apply(a, arguments);
    };
    a._inited = !1;
    a._startTime = 0;
    a._pausedTime = 0;
    a._ticks = 0;
    a._pausedTicks = 0;
    a._interval = 50;
    a._lastTime = 0;
    a._times = null;
    a._tickTimes = null;
    a._timerId = null;
    a._raf = !0;
    a._setInterval = function (d) {
        a._interval = d;
        a._inited && a._setupTick();
    };
    a.setInterval = createjs.deprecate(a._setInterval, "Ticker.setInterval");
    a._getInterval = function () {
        return a._interval;
    };
    a.getInterval = createjs.deprecate(a._getInterval, "Ticker.getInterval");
    a._setFPS = function (d) {
        a._setInterval(1e3 / d);
    };
    a.setFPS = createjs.deprecate(a._setFPS, "Ticker.setFPS");
    a._getFPS = function () {
        return 1e3 / a._interval;
    };
    a.getFPS = createjs.deprecate(a._getFPS, "Ticker.getFPS");
    try {
        Object.defineProperties(a, { interval: { get: a._getInterval, set: a._setInterval }, framerate: { get: a._getFPS, set: a._setFPS } });
    } catch (d) {
        console.log(d);
    }
    a.init = function () {
        a._inited || ((a._inited = !0), (a._times = []), (a._tickTimes = []), (a._startTime = a._getTime()), a._times.push((a._lastTime = 0)), (a.interval = a._interval));
    };
    a.reset = function () {
        if (a._raf) {
            var d = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
            d && d(a._timerId);
        } else clearTimeout(a._timerId);
        a.removeAllEventListeners("tick");
        a._timerId = a._times = a._tickTimes = null;
        a._startTime = a._lastTime = a._ticks = a._pausedTime = 0;
        a._inited = !1;
    };
    a.getMeasuredTickTime = function (d) {
        var e = 0,
            f = a._tickTimes;
        if (!f || 1 > f.length) return -1;
        d = Math.min(f.length, d || a._getFPS() | 0);
        for (var g = 0; g < d; g++) e += f[g];
        return e / d;
    };
    a.getMeasuredFPS = function (d) {
        var e = a._times;
        if (!e || 2 > e.length) return -1;
        d = Math.min(e.length - 1, d || a._getFPS() | 0);
        return 1e3 / ((e[0] - e[d]) / d);
    };
    a.getTime = function (d) {
        return a._startTime ? a._getTime() - (d ? a._pausedTime : 0) : -1;
    };
    a.getEventTime = function (d) {
        return a._startTime ? (a._lastTime || a._startTime) - (d ? a._pausedTime : 0) : -1;
    };
    a.getTicks = function (d) {
        return a._ticks - (d ? a._pausedTicks : 0);
    };
    a._handleSynch = function () {
        a._timerId = null;
        a._setupTick();
        a._getTime() - a._lastTime >= 0.97 * (a._interval - 1) && a._tick();
    };
    a._handleRAF = function () {
        a._timerId = null;
        a._setupTick();
        a._tick();
    };
    a._handleTimeout = function () {
        a._timerId = null;
        a._setupTick();
        a._tick();
    };
    a._setupTick = function () {
        if (null == a._timerId) {
            var d = a.timingMode;
            if (d == a.RAF_SYNCHED || d == a.RAF) {
                var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (e) {
                    a._timerId = e(d == a.RAF ? a._handleRAF : a._handleSynch);
                    a._raf = !0;
                    return;
                }
            }
            a._raf = !1;
            a._timerId = setTimeout(a._handleTimeout, a._interval);
        }
    };
    a._tick = function () {
        var d = a.paused,
            e = a._getTime(),
            f = e - a._lastTime;
        a._lastTime = e;
        a._ticks++;
        d && (a._pausedTicks++, (a._pausedTime += f));
        if (a.hasEventListener("tick")) {
            var g = new createjs.Event("tick"),
                m = a.maxDelta;
            g.delta = m && f > m ? m : f;
            g.paused = d;
            g.time = e;
            g.runTime = e - a._pausedTime;
            a.dispatchEvent(g);
        }
        for (a._tickTimes.unshift(a._getTime() - e); 100 < a._tickTimes.length; ) a._tickTimes.pop();
        for (a._times.unshift(e); 100 < a._times.length; ) a._times.pop();
    };
    var c = window,
        b = c.performance.now || c.performance.mozNow || c.performance.msNow || c.performance.oNow || c.performance.webkitNow;
    a._getTime = function () {
        return ((b && b.call(c.performance)) || new Date().getTime()) - a._startTime;
    };
    createjs.Ticker = a;
})();
this.createjs = this.createjs || {};
(function () {
    function a(b) {
        this.EventDispatcher_constructor();
        this.ignoreGlobalPause = !1;
        this.loop = 0;
        this.bounce = this.reversed = this.useTicks = !1;
        this.timeScale = 1;
        this.position = this.duration = 0;
        this.rawPosition = -1;
        this._paused = !0;
        this._labelList = this._labels = this._parent = this._prev = this._next = null;
        b &&
            ((this.useTicks = !!b.useTicks),
            (this.ignoreGlobalPause = !!b.ignoreGlobalPause),
            (this.loop = !0 === b.loop ? -1 : b.loop || 0),
            (this.reversed = !!b.reversed),
            (this.bounce = !!b.bounce),
            (this.timeScale = b.timeScale || 1),
            b.onChange && this.addEventListener("change", b.onChange),
            b.onComplete && this.addEventListener("complete", b.onComplete));
    }
    var c = createjs.extend(a, createjs.EventDispatcher);
    c._setPaused = function (b) {
        createjs.Tween._register(this, b);
        return this;
    };
    c.setPaused = createjs.deprecate(c._setPaused, "AbstractTween.setPaused");
    c._getPaused = function () {
        return this._paused;
    };
    c.getPaused = createjs.deprecate(c._getPaused, "AbstactTween.getPaused");
    c._getCurrentLabel = function (b) {
        var d = this.getLabels();
        null == b && (b = this.position);
        for (var e = 0, f = d.length; e < f && !(b < d[e].position); e++);
        return 0 === e ? null : d[e - 1].label;
    };
    c.getCurrentLabel = createjs.deprecate(c._getCurrentLabel, "AbstractTween.getCurrentLabel");
    try {
        Object.defineProperties(c, { paused: { set: c._setPaused, get: c._getPaused }, currentLabel: { get: c._getCurrentLabel } });
    } catch (b) {}
    c.advance = function (b, d) {
        this.setPosition(this.rawPosition + b * this.timeScale, d);
    };
    c.setPosition = function (b, d, e, f) {
        var g = this.duration,
            m = this.loop,
            h = this.rawPosition,
            l = 0;
        0 > b && (b = 0);
        if (0 === g) {
            var n = !0;
            if (-1 !== h) return n;
        } else {
            var r = (b / g) | 0;
            l = b - r * g;
            (n = -1 !== m && b >= m * g + g) && (b = (l = g) * (r = m) + g);
            if (b === h) return n;
            !this.reversed !== !(this.bounce && r % 2) && (l = g - l);
        }
        this.position = l;
        this.rawPosition = b;
        this._updatePosition(e, n);
        n && (this.paused = !0);
        f && f(this);
        d || this._runActions(h, b, e, !e && -1 === h);
        this.dispatchEvent("change");
        n && this.dispatchEvent("complete");
    };
    c.calculatePosition = function (b) {
        var d = this.duration,
            e = this.loop,
            f = 0;
        if (0 === d) return 0;
        -1 !== e && b >= e * d + d ? ((b = d), (f = e)) : 0 > b ? (b = 0) : ((f = (b / d) | 0), (b -= f * d));
        return !this.reversed !== !(this.bounce && f % 2) ? d - b : b;
    };
    c.getLabels = function () {
        var b = this._labelList;
        if (!b) {
            b = this._labelList = [];
            var d = this._labels,
                e;
            for (e in d) b.push({ label: e, position: d[e] });
            b.sort(function (f, g) {
                return f.position - g.position;
            });
        }
        return b;
    };
    c.setLabels = function (b) {
        this._labels = b;
        this._labelList = null;
    };
    c.addLabel = function (b, d) {
        this._labels || (this._labels = {});
        this._labels[b] = d;
        var e = this._labelList;
        if (e) {
            for (var f = 0, g = e.length; f < g && !(d < e[f].position); f++);
            e.splice(f, 0, { label: b, position: d });
        }
    };
    c.gotoAndPlay = function (b) {
        this.paused = !1;
        this._goto(b);
    };
    c.gotoAndStop = function (b) {
        this.paused = !0;
        this._goto(b);
    };
    c.resolve = function (b) {
        var d = Number(b);
        isNaN(d) && (d = this._labels && this._labels[b]);
        return d;
    };
    c.toString = function () {
        return "[AbstractTween]";
    };
    c.clone = function () {
        throw "AbstractTween can not be cloned.";
    };
    c._init = function (b) {
        (b && b.paused) || (this.paused = !1);
        b && null != b.position && this.setPosition(b.position);
    };
    c._updatePosition = function (b, d) {};
    c._goto = function (b) {
        b = this.resolve(b);
        null != b && this.setPosition(b, !1, !0);
    };
    c._runActions = function (b, d, e, f) {
        if (this._actionHead || this.tweens) {
            var g = this.duration,
                m = this.reversed,
                h = this.bounce,
                l = this.loop,
                n,
                r,
                p;
            if (0 === g) {
                var v = (n = r = p = 0);
                m = h = !1;
            } else (v = (b / g) | 0), (n = (d / g) | 0), (r = b - v * g), (p = d - n * g);
            -1 !== l && (n > l && ((p = g), (n = l)), v > l && ((r = g), (v = l)));
            if (e) return this._runActionsRange(p, p, e, f);
            if (v !== n || r !== p || e || f) {
                -1 === v && (v = r = 0);
                b = b <= d;
                d = v;
                do {
                    l = d === v ? r : b ? 0 : g;
                    var q = d === n ? p : b ? g : 0;
                    !m !== !(h && d % 2) && ((l = g - l), (q = g - q));
                    if ((!h || d === v || l !== q) && this._runActionsRange(l, q, e, f || (d !== v && !h))) return !0;
                    f = !1;
                } while ((b && ++d <= n) || (!b && --d >= n));
            }
        }
    };
    c._runActionsRange = function (b, d, e, f) {};
    createjs.AbstractTween = createjs.promote(a, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function () {
    function a(e, f) {
        this.AbstractTween_constructor(f);
        this.pluginData = null;
        this.target = e;
        this.passive = !1;
        this._stepTail = this._stepHead = new c(null, 0, 0, {}, null, !0);
        this._stepPosition = 0;
        this._injected = this._pluginIds = this._plugins = this._actionTail = this._actionHead = null;
        f && ((this.pluginData = f.pluginData), f.override && a.removeTweens(e));
        this.pluginData || (this.pluginData = {});
        this._init(f);
    }
    function c(e, f, g, m, h, l) {
        this.next = null;
        this.prev = e;
        this.t = f;
        this.d = g;
        this.props = m;
        this.ease = h;
        this.passive = l;
        this.index = e ? e.index + 1 : 0;
    }
    function b(e, f, g, m, h) {
        this.next = null;
        this.prev = e;
        this.t = f;
        this.d = 0;
        this.scope = g;
        this.funct = m;
        this.params = h;
    }
    var d = createjs.extend(a, createjs.AbstractTween);
    a.IGNORE = {};
    a._tweens = [];
    a._plugins = null;
    a._tweenHead = null;
    a._tweenTail = null;
    a.get = function (e, f) {
        return new a(e, f);
    };
    a.tick = function (e, f) {
        for (var g = a._tweenHead; g; ) {
            var m = g._next;
            (f && !g.ignoreGlobalPause) || g._paused || g.advance(g.useTicks ? 1 : e);
            g = m;
        }
    };
    a.handleEvent = function (e) {
        "tick" === e.type && this.tick(e.delta, e.paused);
    };
    a.removeTweens = function (e) {
        if (e.tweenjs_count) {
            for (var f = a._tweenHead; f; ) {
                var g = f._next;
                f.target === e && a._register(f, !0);
                f = g;
            }
            e.tweenjs_count = 0;
        }
    };
    a.removeAllTweens = function () {
        for (var e = a._tweenHead; e; ) {
            var f = e._next;
            e._paused = !0;
            e.target && (e.target.tweenjs_count = 0);
            e._next = e._prev = null;
            e = f;
        }
        a._tweenHead = a._tweenTail = null;
    };
    a.hasActiveTweens = function (e) {
        return e ? !!e.tweenjs_count : !!a._tweenHead;
    };
    a._installPlugin = function (e) {
        for (var f = (e.priority = e.priority || 0), g = (a._plugins = a._plugins || []), m = 0, h = g.length; m < h && !(f < g[m].priority); m++);
        g.splice(m, 0, e);
    };
    a._register = function (e, f) {
        var g = e.target;
        if (!f && e._paused)
            g && (g.tweenjs_count = g.tweenjs_count ? g.tweenjs_count + 1 : 1),
                (g = a._tweenTail) ? ((a._tweenTail = g._next = e), (e._prev = g)) : (a._tweenHead = a._tweenTail = e),
                !a._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", a), (a._inited = !0));
        else if (f && !e._paused) {
            g && g.tweenjs_count--;
            g = e._next;
            var m = e._prev;
            g ? (g._prev = m) : (a._tweenTail = m);
            m ? (m._next = g) : (a._tweenHead = g);
            e._next = e._prev = null;
        }
        e._paused = f;
    };
    d.wait = function (e, f) {
        0 < e && this._addStep(+e, this._stepTail.props, null, f);
        return this;
    };
    d.to = function (e, f, g) {
        if (null == f || 0 > f) f = 0;
        f = this._addStep(+f, null, g);
        this._appendProps(e, f);
        return this;
    };
    d.label = function (e) {
        this.addLabel(e, this.duration);
        return this;
    };
    d.call = function (e, f, g) {
        return this._addAction(g || this.target, e, f || [this]);
    };
    d.set = function (e, f) {
        return this._addAction(f || this.target, this._set, [e]);
    };
    d.play = function (e) {
        return this._addAction(e || this, this._set, [{ paused: !1 }]);
    };
    d.pause = function (e) {
        return this._addAction(e || this, this._set, [{ paused: !0 }]);
    };
    d.w = d.wait;
    d.t = d.to;
    d.c = d.call;
    d.s = d.set;
    d.toString = function () {
        return "[Tween]";
    };
    d.clone = function () {
        throw "Tween can not be cloned.";
    };
    d._addPlugin = function (e) {
        var f = this._pluginIds || (this._pluginIds = {}),
            g = e.ID;
        if (g && !f[g]) {
            f[g] = !0;
            f = this._plugins || (this._plugins = []);
            g = e.priority || 0;
            for (var m = 0, h = f.length; m < h; m++)
                if (g < f[m].priority) {
                    f.splice(m, 0, e);
                    return;
                }
            f.push(e);
        }
    };
    d._updatePosition = function (e, f) {
        var g = this._stepHead.next,
            m = this.position,
            h = this.duration;
        if (this.target && g) {
            for (var l = g.next; l && l.t <= m; ) (g = g.next), (l = g.next);
            this._updateTargetProps(g, f ? (0 === h ? 1 : m / h) : (m - g.t) / g.d, f);
        }
        this._stepPosition = g ? m - g.t : 0;
    };
    d._updateTargetProps = function (e, f, g) {
        if (!(this.passive = !!e.passive)) {
            var m,
                h = e.prev.props,
                l = e.props;
            if ((m = e.ease)) f = m(f, 0, 1, 1);
            m = this._plugins;
            var n;
            a: for (n in h) {
                var r = h[n];
                var p = l[n];
                r = r !== p && "number" === typeof r ? r + (p - r) * f : 1 <= f ? p : r;
                if (m) {
                    p = 0;
                    for (var v = m.length; p < v; p++) {
                        var q = m[p].change(this, e, n, r, f, g);
                        if (q === a.IGNORE) continue a;
                        void 0 !== q && (r = q);
                    }
                }
                this.target[n] = r;
            }
        }
    };
    d._runActionsRange = function (e, f, g, m) {
        var h = (g = e > f) ? this._actionTail : this._actionHead,
            l = f,
            n = e;
        g && ((l = e), (n = f));
        for (var r = this.position; h; ) {
            var p = h.t;
            if (p === f || (p > n && p < l) || (m && p === e)) if ((h.funct.apply(h.scope, h.params), r !== this.position)) return !0;
            h = g ? h.prev : h.next;
        }
    };
    d._appendProps = function (e, f, g) {
        var m = this._stepHead.props,
            h = this.target,
            l = a._plugins,
            n,
            r,
            p = f.prev,
            v = p.props,
            q = f.props || (f.props = this._cloneProps(v)),
            t = {};
        for (n in e)
            if (e.hasOwnProperty(n) && ((t[n] = q[n] = e[n]), void 0 === m[n])) {
                var w = void 0;
                if (l)
                    for (r = l.length - 1; 0 <= r; r--) {
                        var z = l[r].init(this, n, w);
                        void 0 !== z && (w = z);
                        if (w === a.IGNORE) {
                            delete q[n];
                            delete t[n];
                            break;
                        }
                    }
                w !== a.IGNORE && (void 0 === w && (w = h[n]), (v[n] = void 0 === w ? null : w));
            }
        for (n in t) {
            var u;
            for (e = p; (u = e) && (e = u.prev); )
                if (e.props !== u.props) {
                    if (void 0 !== e.props[n]) break;
                    e.props[n] = v[n];
                }
        }
        if (!1 !== g && (l = this._plugins)) for (r = l.length - 1; 0 <= r; r--) l[r].step(this, f, t);
        if ((g = this._injected)) (this._injected = null), this._appendProps(g, f, !1);
    };
    d._injectProp = function (e, f) {
        (this._injected || (this._injected = {}))[e] = f;
    };
    d._addStep = function (e, f, g, m) {
        f = new c(this._stepTail, this.duration, e, f, g, m || !1);
        this.duration += e;
        return (this._stepTail = this._stepTail.next = f);
    };
    d._addAction = function (e, f, g) {
        e = new b(this._actionTail, this.duration, e, f, g);
        this._actionTail ? (this._actionTail.next = e) : (this._actionHead = e);
        this._actionTail = e;
        return this;
    };
    d._set = function (e) {
        for (var f in e) this[f] = e[f];
    };
    d._cloneProps = function (e) {
        var f = {},
            g;
        for (g in e) f[g] = e[g];
        return f;
    };
    createjs.Tween = createjs.promote(a, "AbstractTween");
})();
this.createjs = this.createjs || {};
(function () {
    function a(b) {
        if (b instanceof Array || (null == b && 1 < arguments.length)) {
            var d = b;
            var e = arguments[1];
            b = arguments[2];
        } else b && ((d = b.tweens), (e = b.labels));
        this.AbstractTween_constructor(b);
        this.tweens = [];
        d && this.addTween.apply(this, d);
        this.setLabels(e);
        this._init(b);
    }
    var c = createjs.extend(a, createjs.AbstractTween);
    c.addTween = function (b) {
        b._parent && b._parent.removeTween(b);
        var d = arguments.length;
        if (1 < d) {
            for (var e = 0; e < d; e++) this.addTween(arguments[e]);
            return arguments[d - 1];
        }
        if (0 === d) return null;
        this.tweens.push(b);
        b._parent = this;
        b.paused = !0;
        d = b.duration;
        0 < b.loop && (d *= b.loop + 1);
        d > this.duration && (this.duration = d);
        0 <= this.rawPosition && b.setPosition(this.rawPosition);
        return b;
    };
    c.removeTween = function (b) {
        var d = arguments.length;
        if (1 < d) {
            for (var e = !0, f = 0; f < d; f++) e = e && this.removeTween(arguments[f]);
            return e;
        }
        if (0 === d) return !0;
        d = this.tweens;
        for (f = d.length; f--; ) if (d[f] === b) return d.splice(f, 1), (b._parent = null), b.duration >= this.duration && this.updateDuration(), !0;
        return !1;
    };
    c.updateDuration = function () {
        for (var b = (this.duration = 0), d = this.tweens.length; b < d; b++) {
            var e = this.tweens[b],
                f = e.duration;
            0 < e.loop && (f *= e.loop + 1);
            f > this.duration && (this.duration = f);
        }
    };
    c.toString = function () {
        return "[Timeline]";
    };
    c.clone = function () {
        throw "Timeline can not be cloned.";
    };
    c._updatePosition = function (b, d) {
        for (var e = this.position, f = 0, g = this.tweens.length; f < g; f++) this.tweens[f].setPosition(e, !0, b);
    };
    c._runActionsRange = function (b, d, e, f) {
        for (var g = this.position, m = 0, h = this.tweens.length; m < h; m++) if ((this.tweens[m]._runActions(b, d, e, f), g !== this.position)) return !0;
    };
    createjs.Timeline = createjs.promote(a, "AbstractTween");
})();
this.createjs = this.createjs || {};
(function () {
    function a() {
        throw "Ease cannot be instantiated.";
    }
    a.linear = function (c) {
        return c;
    };
    a.none = a.linear;
    a.get = function (c) {
        -1 > c ? (c = -1) : 1 < c && (c = 1);
        return function (b) {
            return 0 == c ? b : 0 > c ? b * (b * -c + 1 + c) : b * ((2 - b) * c + (1 - c));
        };
    };
    a.getPowIn = function (c) {
        return function (b) {
            return Math.pow(b, c);
        };
    };
    a.getPowOut = function (c) {
        return function (b) {
            return 1 - Math.pow(1 - b, c);
        };
    };
    a.getPowInOut = function (c) {
        return function (b) {
            return 1 > (b *= 2) ? 0.5 * Math.pow(b, c) : 1 - 0.5 * Math.abs(Math.pow(2 - b, c));
        };
    };
    a.quadIn = a.getPowIn(2);
    a.quadOut = a.getPowOut(2);
    a.quadInOut = a.getPowInOut(2);
    a.cubicIn = a.getPowIn(3);
    a.cubicOut = a.getPowOut(3);
    a.cubicInOut = a.getPowInOut(3);
    a.quartIn = a.getPowIn(4);
    a.quartOut = a.getPowOut(4);
    a.quartInOut = a.getPowInOut(4);
    a.quintIn = a.getPowIn(5);
    a.quintOut = a.getPowOut(5);
    a.quintInOut = a.getPowInOut(5);
    a.sineIn = function (c) {
        return 1 - Math.cos((c * Math.PI) / 2);
    };
    a.sineOut = function (c) {
        return Math.sin((c * Math.PI) / 2);
    };
    a.sineInOut = function (c) {
        return -0.5 * (Math.cos(Math.PI * c) - 1);
    };
    a.getBackIn = function (c) {
        return function (b) {
            return b * b * ((c + 1) * b - c);
        };
    };
    a.backIn = a.getBackIn(1.7);
    a.getBackOut = function (c) {
        return function (b) {
            return --b * b * ((c + 1) * b + c) + 1;
        };
    };
    a.backOut = a.getBackOut(1.7);
    a.getBackInOut = function (c) {
        c *= 1.525;
        return function (b) {
            return 1 > (b *= 2) ? 0.5 * b * b * ((c + 1) * b - c) : 0.5 * ((b -= 2) * b * ((c + 1) * b + c) + 2);
        };
    };
    a.backInOut = a.getBackInOut(1.7);
    a.circIn = function (c) {
        return -(Math.sqrt(1 - c * c) - 1);
    };
    a.circOut = function (c) {
        return Math.sqrt(1 - --c * c);
    };
    a.circInOut = function (c) {
        return 1 > (c *= 2) ? -0.5 * (Math.sqrt(1 - c * c) - 1) : 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1);
    };
    a.bounceIn = function (c) {
        return 1 - a.bounceOut(1 - c);
    };
    a.bounceOut = function (c) {
        return c < 1 / 2.75 ? 7.5625 * c * c : c < 2 / 2.75 ? 7.5625 * (c -= 1.5 / 2.75) * c + 0.75 : c < 2.5 / 2.75 ? 7.5625 * (c -= 2.25 / 2.75) * c + 0.9375 : 7.5625 * (c -= 2.625 / 2.75) * c + 0.984375;
    };
    a.bounceInOut = function (c) {
        return 0.5 > c ? 0.5 * a.bounceIn(2 * c) : 0.5 * a.bounceOut(2 * c - 1) + 0.5;
    };
    a.getElasticIn = function (c, b) {
        var d = 2 * Math.PI;
        return function (e) {
            if (0 == e || 1 == e) return e;
            var f = (b / d) * Math.asin(1 / c);
            return -(c * Math.pow(2, 10 * --e) * Math.sin(((e - f) * d) / b));
        };
    };
    a.elasticIn = a.getElasticIn(1, 0.3);
    a.getElasticOut = function (c, b) {
        var d = 2 * Math.PI;
        return function (e) {
            return 0 == e || 1 == e ? e : c * Math.pow(2, -10 * e) * Math.sin(((e - (b / d) * Math.asin(1 / c)) * d) / b) + 1;
        };
    };
    a.elasticOut = a.getElasticOut(1, 0.3);
    a.getElasticInOut = function (c, b) {
        var d = 2 * Math.PI;
        return function (e) {
            var f = (b / d) * Math.asin(1 / c);
            return 1 > (e *= 2) ? -0.5 * c * Math.pow(2, 10 * --e) * Math.sin(((e - f) * d) / b) : c * Math.pow(2, -10 * --e) * Math.sin(((e - f) * d) / b) * 0.5 + 1;
        };
    };
    a.elasticInOut = a.getElasticInOut(1, 0.3 * 1.5);
    createjs.Ease = a;
})();
this.createjs = this.createjs || {};
(function () {
    function a() {
        throw "MotionGuidePlugin cannot be instantiated.";
    }
    a.priority = 0;
    a.ID = "MotionGuide";
    a.install = function () {
        createjs.Tween._installPlugin(a);
        return createjs.Tween.IGNORE;
    };
    a.init = function (c, b, d) {
        "guide" == b && c._addPlugin(a);
    };
    a.step = function (c, b, d) {
        for (var e in d)
            if ("guide" === e) {
                var f = b.props.guide,
                    g = a._solveGuideData(d.guide, f);
                f.valid = !g;
                var m = f.endData;
                c._injectProp("x", m.x);
                c._injectProp("y", m.y);
                if (g || !f.orient) break;
                f.startOffsetRot = (void 0 === b.prev.props.rotation ? c.target.rotation || 0 : b.prev.props.rotation) - f.startData.rotation;
                if ("fixed" == f.orient) (f.endAbsRot = m.rotation + f.startOffsetRot), (f.deltaRotation = 0);
                else {
                    g = void 0 === d.rotation ? c.target.rotation || 0 : d.rotation;
                    m = g - f.endData.rotation - f.startOffsetRot;
                    var h = m % 360;
                    f.endAbsRot = g;
                    switch (f.orient) {
                        case "auto":
                            f.deltaRotation = m;
                            break;
                        case "cw":
                            f.deltaRotation = ((h + 360) % 360) + 360 * Math.abs((m / 360) | 0);
                            break;
                        case "ccw":
                            f.deltaRotation = ((h - 360) % 360) + -360 * Math.abs((m / 360) | 0);
                    }
                }
                c._injectProp("rotation", f.endAbsRot);
            }
    };
    a.change = function (c, b, d, e, f, g) {
        if ((e = b.props.guide) && b.props !== b.prev.props && e !== b.prev.props.guide) {
            if (("guide" === d && !e.valid) || "x" == d || "y" == d || ("rotation" === d && e.orient)) return createjs.Tween.IGNORE;
            a._ratioToPositionData(f, e, c.target);
        }
    };
    a.debug = function (c, b, d) {
        c = c.guide || c;
        var e = a._findPathProblems(c);
        e && console.error("MotionGuidePlugin Error found: \n" + e);
        if (!b) return e;
        var f,
            g = c.path,
            m = g.length;
        b.save();
        b.lineCap = "round";
        b.lineJoin = "miter";
        b.beginPath();
        b.moveTo(g[0], g[1]);
        for (f = 2; f < m; f += 4) b.quadraticCurveTo(g[f], g[f + 1], g[f + 2], g[f + 3]);
        b.strokeStyle = "black";
        b.lineWidth = 4.5;
        b.stroke();
        b.strokeStyle = "white";
        b.lineWidth = 3;
        b.stroke();
        b.closePath();
        g = d.length;
        if (d && g) {
            m = {};
            var h = {};
            a._solveGuideData(c, m);
            for (f = 0; f < g; f++)
                (m.orient = "fixed"),
                    a._ratioToPositionData(d[f], m, h),
                    b.beginPath(),
                    b.moveTo(h.x, h.y),
                    b.lineTo(h.x + 9 * Math.cos(0.0174533 * h.rotation), h.y + 9 * Math.sin(0.0174533 * h.rotation)),
                    (b.strokeStyle = "black"),
                    (b.lineWidth = 4.5),
                    b.stroke(),
                    (b.strokeStyle = "red"),
                    (b.lineWidth = 3),
                    b.stroke(),
                    b.closePath();
        }
        b.restore();
        return e;
    };
    a._solveGuideData = function (c, b) {
        var d;
        if ((d = a.debug(c))) return d;
        var e = (b.path = c.path);
        b.orient = c.orient;
        b.subLines = [];
        b.totalLength = 0;
        b.startOffsetRot = 0;
        b.deltaRotation = 0;
        b.startData = { ratio: 0 };
        b.endData = { ratio: 1 };
        b.animSpan = 1;
        var f = e.length,
            g,
            m = {};
        var h = e[0];
        var l = e[1];
        for (d = 2; d < f; d += 4) {
            var n = e[d];
            var r = e[d + 1];
            var p = e[d + 2];
            var v = e[d + 3];
            var q = { weightings: [], estLength: 0, portion: 0 },
                t = h;
            var w = l;
            for (g = 1; 10 >= g; g++) a._getParamsForCurve(h, l, n, r, p, v, g / 10, !1, m), (t = m.x - t), (w = m.y - w), (w = Math.sqrt(t * t + w * w)), q.weightings.push(w), (q.estLength += w), (t = m.x), (w = m.y);
            b.totalLength += q.estLength;
            for (g = 0; 10 > g; g++) (w = q.estLength), (q.weightings[g] /= w);
            b.subLines.push(q);
            h = p;
            l = v;
        }
        w = b.totalLength;
        e = b.subLines.length;
        for (d = 0; d < e; d++) b.subLines[d].portion = b.subLines[d].estLength / w;
        d = isNaN(c.start) ? 0 : c.start;
        e = isNaN(c.end) ? 1 : c.end;
        a._ratioToPositionData(d, b, b.startData);
        a._ratioToPositionData(e, b, b.endData);
        b.startData.ratio = d;
        b.endData.ratio = e;
        b.animSpan = b.endData.ratio - b.startData.ratio;
    };
    a._ratioToPositionData = function (c, b, d) {
        var e = b.subLines,
            f,
            g = 0,
            m = c * b.animSpan + b.startData.ratio;
        var h = e.length;
        for (f = 0; f < h; f++) {
            var l = e[f].portion;
            if (g + l >= m) {
                var n = f;
                break;
            }
            g += l;
        }
        void 0 === n && ((n = h - 1), (g -= l));
        e = e[n].weightings;
        var r = l;
        h = e.length;
        for (f = 0; f < h; f++) {
            l = e[f] * r;
            if (g + l >= m) break;
            g += l;
        }
        n = 4 * n + 2;
        h = b.path;
        a._getParamsForCurve(h[n - 2], h[n - 1], h[n], h[n + 1], h[n + 2], h[n + 3], f / 10 + ((m - g) / l) * 0.1, b.orient, d);
        b.orient && (d.rotation = 0.99999 <= c && 1.00001 >= c && void 0 !== b.endAbsRot ? b.endAbsRot : d.rotation + (b.startOffsetRot + c * b.deltaRotation));
        return d;
    };
    a._getParamsForCurve = function (c, b, d, e, f, g, m, h, l) {
        var n = 1 - m;
        l.x = n * n * c + 2 * n * m * d + m * m * f;
        l.y = n * n * b + 2 * n * m * e + m * m * g;
        h && (l.rotation = 57.2957795 * Math.atan2((e - b) * n + (g - e) * m, (d - c) * n + (f - d) * m));
    };
    a._findPathProblems = function (c) {
        var b = c.path,
            d = (b && b.length) || 0;
        if (6 > d || (d - 2) % 4)
            return (
                "\tCannot parse 'path' array due to invalid number of entries in path. There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\nOnly [ " +
                (d + " ] values found. Expected: " + Math.max(4 * Math.ceil((d - 2) / 4) + 2, 6))
            );
        for (var e = 0; e < d; e++) if (isNaN(b[e])) return "All data in path array must be numeric";
        b = c.start;
        if (isNaN(b) && void 0 !== b) return "'start' out of bounds. Expected 0 to 1, got: " + b;
        b = c.end;
        if (isNaN(b) && void 0 !== b) return "'end' out of bounds. Expected 0 to 1, got: " + b;
        if ((c = c.orient) && "fixed" != c && "auto" != c && "cw" != c && "ccw" != c) return 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + c;
    };
    createjs.MotionGuidePlugin = a;
})();
this.createjs = this.createjs || {};
(function () {
    var a = (createjs.TweenJS = createjs.TweenJS || {});
    a.version = "1.0.0";
    a.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT";
})();
(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = (function () {
            for (
                var f,
                    g = [
                        "requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),
                        "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                        "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                        "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),
                        "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" "),
                    ],
                    m = 0,
                    h = g.length,
                    l = {};
                m < h;
                m++
            )
                if ((f = g[m]) && f[1] in a) {
                    for (m = 0; m < f.length; m++) l[g[0][m]] = f[m];
                    return l;
                }
            return !1;
        })(),
        d = { change: b.fullscreenchange, error: b.fullscreenerror },
        e = {
            request: function (f) {
                return new Promise(
                    function (g, m) {
                        var h = function () {
                            this.off("change", h);
                            g();
                        }.bind(this);
                        this.on("change", h);
                        f = f || a.documentElement;
                        Promise.resolve(f[b.requestFullscreen]())["catch"](m);
                    }.bind(this)
                );
            },
            exit: function () {
                return new Promise(
                    function (f, g) {
                        if (this.isFullscreen) {
                            var m = function () {
                                this.off("change", m);
                                f();
                            }.bind(this);
                            this.on("change", m);
                            Promise.resolve(a[b.exitFullscreen]())["catch"](g);
                        } else f();
                    }.bind(this)
                );
            },
            toggle: function (f) {
                return this.isFullscreen ? this.exit() : this.request(f);
            },
            onchange: function (f) {
                this.on("change", f);
            },
            onerror: function (f) {
                this.on("error", f);
            },
            on: function (f, g) {
                var m = d[f];
                m && a.addEventListener(m, g, !1);
            },
            off: function (f, g) {
                var m = d[f];
                m && a.removeEventListener(m, g, !1);
            },
            raw: b,
        };
    b
        ? (Object.defineProperties(e, {
              isFullscreen: {
                  get: function () {
                      return !!a[b.fullscreenElement];
                  },
              },
              element: {
                  enumerable: !0,
                  get: function () {
                      return a[b.fullscreenElement];
                  },
              },
              isEnabled: {
                  enumerable: !0,
                  get: function () {
                      return !!a[b.fullscreenEnabled];
                  },
              },
          }),
          c ? (module.exports = e) : (window.screenfull = e))
        : c
        ? (module.exports = { isEnabled: !1 })
        : (window.screenfull = { isEnabled: !1 });
})();
(function () {
    function a(u) {
        u = String(u);
        return u.charAt(0).toUpperCase() + u.slice(1);
    }
    function c(u, C) {
        var D = -1,
            B = u ? u.length : 0;
        if ("number" == typeof B && -1 < B && B <= v) for (; ++D < B; ) C(u[D], D, u);
        else d(u, C);
    }
    function b(u) {
        u = String(u).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(u) ? u : a(u);
    }
    function d(u, C) {
        for (var D in u) t.call(u, D) && C(u[D], D, u);
    }
    function e(u) {
        return null == u ? a(u) : w.call(u).slice(8, -1);
    }
    function f(u, C) {
        var D = null != u ? typeof u[C] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(D) && ("object" == D ? !!u[C] : !0);
    }
    function g(u) {
        return String(u).replace(/([ -])(?!$)/g, "$1?");
    }
    function m(u, C) {
        var D = null;
        c(u, function (B, E) {
            D = C(D, B, E, u);
        });
        return D;
    }
    function h(u) {
        function C(U) {
            return m(U, function (J, y) {
                var G = y.pattern || g(y);
                !J &&
                    (J = RegExp("\\b" + G + " *\\d+[.\\w_]*", "i").exec(u) || RegExp("\\b" + G + " *\\w+-[\\w]*", "i").exec(u) || RegExp("\\b" + G + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(u)) &&
                    ((J = String(y.label && !RegExp(G, "i").test(y.label) ? y.label : J).split("/"))[1] && !/[\d.]+/.test(J[0]) && (J[0] += " " + J[1]),
                    (y = y.label || y),
                    (J = b(
                        J[0]
                            .replace(RegExp(G, "i"), y)
                            .replace(RegExp("; *(?:" + y + "[_-])?", "i"), " ")
                            .replace(RegExp("(" + y + ")[-_.]?(\\w)", "i"), "$1 $2")
                    )));
                return J;
            });
        }
        function D(U) {
            return m(U, function (J, y) {
                return J || (RegExp(y + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(u) || 0)[1] || null;
            });
        }
        var B = n,
            E = u && "object" == typeof u && "String" != e(u);
        E && ((B = u), (u = null));
        var M = B.navigator || {},
            A = M.userAgent || "";
        u || (u = A);
        var R = E ? !!M.likeChrome : /\bChrome\b/.test(u) && !/internal|\n/i.test(w.toString()),
            K = E ? "Object" : "ScriptBridgingProxyObject",
            F = E ? "Object" : "Environment",
            Q = E && B.java ? "JavaPackage" : e(B.java),
            T = E ? "Object" : "RuntimeObject";
        F = (Q = /\bJava/.test(Q) && B.java) && e(B.environment) == F;
        var P = Q ? "a" : "\u03b1",
            da = Q ? "b" : "\u03b2",
            W = B.document || {},
            V = B.operamini || B.opera,
            ea = q.test((ea = E && V ? V["[[Class]]"] : e(V))) ? ea : (V = null),
            x,
            fa = u;
        E = [];
        var X = null,
            aa = u == A;
        A = aa && V && "function" == typeof V.version && V.version();
        var N = (function (U) {
                return m(U, function (J, y) {
                    return J || (RegExp("\\b" + (y.pattern || g(y)) + "\\b", "i").exec(u) && (y.label || y));
                });
            })([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            H = (function (U) {
                return m(U, function (J, y) {
                    return J || (RegExp("\\b" + (y.pattern || g(y)) + "\\b", "i").exec(u) && (y.label || y));
                });
            })([
                "Adobe AIR",
                "Arora",
                "Avant Browser",
                "Breach",
                "Camino",
                "Electron",
                "Epiphany",
                "Fennec",
                "Flock",
                "Galeon",
                "GreenBrowser",
                "iCab",
                "Iceweasel",
                "K-Meleon",
                "Konqueror",
                "Lunascape",
                "Maxthon",
                { label: "Microsoft Edge", pattern: "Edge" },
                "Midori",
                "Nook Browser",
                "PaleMoon",
                "PhantomJS",
                "Raven",
                "Rekonq",
                "RockMelt",
                { label: "Samsung Internet", pattern: "SamsungBrowser" },
                "SeaMonkey",
                { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                "Sleipnir",
                "SlimBrowser",
                { label: "SRWare Iron", pattern: "Iron" },
                "Sunrise",
                "Swiftfox",
                "Waterfox",
                "WebPositive",
                "Opera Mini",
                { label: "Opera Mini", pattern: "OPiOS" },
                "Opera",
                { label: "Opera", pattern: "OPR" },
                "Chrome",
                { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                { label: "Firefox for iOS", pattern: "FxiOS" },
                { label: "IE", pattern: "IEMobile" },
                { label: "IE", pattern: "MSIE" },
                "Safari",
            ]),
            L = C([
                { label: "BlackBerry", pattern: "BB10" },
                "BlackBerry",
                { label: "Galaxy S", pattern: "GT-I9000" },
                { label: "Galaxy S2", pattern: "GT-I9100" },
                { label: "Galaxy S3", pattern: "GT-I9300" },
                { label: "Galaxy S4", pattern: "GT-I9500" },
                { label: "Galaxy S5", pattern: "SM-G900" },
                { label: "Galaxy S6", pattern: "SM-G920" },
                { label: "Galaxy S6 Edge", pattern: "SM-G925" },
                { label: "Galaxy S7", pattern: "SM-G930" },
                { label: "Galaxy S7 Edge", pattern: "SM-G935" },
                "Google TV",
                "Lumia",
                "iPad",
                "iPod",
                "iPhone",
                "Kindle",
                { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
                "Nexus",
                "Nook",
                "PlayBook",
                "PlayStation Vita",
                "PlayStation",
                "TouchPad",
                "Transformer",
                { label: "Wii U", pattern: "WiiU" },
                "Wii",
                "Xbox One",
                { label: "Xbox 360", pattern: "Xbox" },
                "Xoom",
            ]),
            Y = (function (U) {
                return m(U, function (J, y, G) {
                    return J || ((y[L] || y[/^[a-z]+(?: +[a-z]+\b)*/i.exec(L)] || RegExp("\\b" + g(G) + "(?:\\b|\\w*\\d)", "i").exec(u)) && G);
                });
            })({
                Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                Archos: {},
                Amazon: { Kindle: 1, "Kindle Fire": 1 },
                Asus: { Transformer: 1 },
                "Barnes & Noble": { Nook: 1 },
                BlackBerry: { PlayBook: 1 },
                Google: { "Google TV": 1, Nexus: 1 },
                HP: { TouchPad: 1 },
                HTC: {},
                LG: {},
                Microsoft: { Xbox: 1, "Xbox One": 1 },
                Motorola: { Xoom: 1 },
                Nintendo: { "Wii U": 1, Wii: 1 },
                Nokia: { Lumia: 1 },
                Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                Sony: { PlayStation: 1, "PlayStation Vita": 1 },
            }),
            I = (function (U) {
                return m(U, function (J, y) {
                    var G = y.pattern || g(y);
                    if (!J && (J = RegExp("\\b" + G + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(u))) {
                        var O = J,
                            Z = y.label || y,
                            S = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME",
                            };
                        G && Z && /^Win/i.test(O) && !/^Windows Phone /i.test(O) && (S = S[/[\d.]+$/.exec(O)]) && (O = "Windows " + S);
                        O = String(O);
                        G && Z && (O = O.replace(RegExp(G, "i"), Z));
                        J = O = b(
                            O.replace(/ ce$/i, " CE")
                                .replace(/\bhpw/i, "web")
                                .replace(/\bMacintosh\b/, "Mac OS")
                                .replace(/_PowerPC\b/i, " OS")
                                .replace(/\b(OS X) [^ \d]+/i, "$1")
                                .replace(/\bMac (OS X)\b/, "$1")
                                .replace(/\/(\d)/, " $1")
                                .replace(/_/g, ".")
                                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                                .replace(/\bx86\.64\b/gi, "x86_64")
                                .replace(/\b(Windows Phone) OS\b/, "$1")
                                .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                                .split(" on ")[0]
                        );
                    }
                    return J;
                });
            })([
                "Windows Phone",
                "Android",
                "CentOS",
                { label: "Chrome OS", pattern: "CrOS" },
                "Debian",
                "Fedora",
                "FreeBSD",
                "Gentoo",
                "Haiku",
                "Kubuntu",
                "Linux Mint",
                "OpenBSD",
                "Red Hat",
                "SuSE",
                "Ubuntu",
                "Xubuntu",
                "Cygwin",
                "Symbian OS",
                "hpwOS",
                "webOS ",
                "webOS",
                "Tablet OS",
                "Tizen",
                "Linux",
                "Mac OS X",
                "Macintosh",
                "Mac",
                "Windows 98;",
                "Windows ",
            ]);
        N && (N = [N]);
        Y && !L && (L = C([Y]));
        if ((x = /\bGoogle TV\b/.exec(L))) L = x[0];
        /\bSimulator\b/i.test(u) && (L = (L ? L + " " : "") + "Simulator");
        "Opera Mini" == H && /\bOPiOS\b/.test(u) && E.push("running in Turbo/Uncompressed mode");
        "IE" == H && /\blike iPhone OS\b/.test(u)
            ? ((x = h(u.replace(/like iPhone OS/, ""))), (Y = x.manufacturer), (L = x.product))
            : /^iP/.test(L)
            ? (H || (H = "Safari"), (I = "iOS" + ((x = / OS ([\d_]+)/i.exec(u)) ? " " + x[1].replace(/_/g, ".") : "")))
            : "Konqueror" != H || /buntu/i.test(I)
            ? (Y && "Google" != Y && ((/Chrome/.test(H) && !/\bMobile Safari\b/i.test(u)) || /\bVita\b/.test(L))) || (/\bAndroid\b/.test(I) && /^Chrome/.test(H) && /\bVersion\//i.test(u))
                ? ((H = "Android Browser"), (I = /\bAndroid\b/.test(I) ? I : "Android"))
                : "Silk" == H
                ? (/\bMobi/i.test(u) || ((I = "Android"), E.unshift("desktop mode")), /Accelerated *= *true/i.test(u) && E.unshift("accelerated"))
                : "PaleMoon" == H && (x = /\bFirefox\/([\d.]+)\b/.exec(u))
                ? E.push("identifying as Firefox " + x[1])
                : "Firefox" == H && (x = /\b(Mobile|Tablet|TV)\b/i.exec(u))
                ? (I || (I = "Firefox OS"), L || (L = x[1]))
                : !H || (x = !/\bMinefield\b/i.test(u) && /\b(?:Firefox|Safari)\b/.exec(H))
                ? (H && !L && /[\/,]|^[^(]+?\)/.test(u.slice(u.indexOf(x + "/") + 8)) && (H = null),
                  (x = L || Y || I) && (L || Y || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(I)) && (H = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(I) ? I : x) + " Browser"))
                : "Electron" == H && (x = (/\bChrome\/([\d.]+)\b/.exec(u) || 0)[1]) && E.push("Chromium " + x)
            : (I = "Kubuntu");
        A || (A = D(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(H), "(?:Firefox|Minefield|NetFront)"]));
        if (
            (x =
                ("iCab" == N && 3 < parseFloat(A) && "WebKit") ||
                (/\bOpera\b/.test(H) && (/\bOPR\b/.test(u) ? "Blink" : "Presto")) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(u) && !/^(?:Trident|EdgeHTML)$/.test(N) && "WebKit") ||
                (!N && /\bMSIE\b/i.test(u) && ("Mac OS" == I ? "Tasman" : "Trident")) ||
                ("WebKit" == N && /\bPlayStation\b(?! Vita\b)/i.test(H) && "NetFront"))
        )
            N = [x];
        "IE" == H && (x = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(u) || 0)[1])
            ? ((H += " Mobile"), (I = "Windows Phone " + (/\+$/.test(x) ? x : x + ".x")), E.unshift("desktop mode"))
            : /\bWPDesktop\b/i.test(u)
            ? ((H = "IE Mobile"), (I = "Windows Phone 8.x"), E.unshift("desktop mode"), A || (A = (/\brv:([\d.]+)/.exec(u) || 0)[1]))
            : "IE" != H && "Trident" == N && (x = /\brv:([\d.]+)/.exec(u)) && (H && E.push("identifying as " + H + (A ? " " + A : "")), (H = "IE"), (A = x[1]));
        if (aa) {
            if (f(B, "global"))
                if ((Q && ((x = Q.lang.System), (fa = x.getProperty("os.arch")), (I = I || x.getProperty("os.name") + " " + x.getProperty("os.version"))), F)) {
                    try {
                        (A = B.require("ringo/engine").version.join(".")), (H = "RingoJS");
                    } catch (U) {
                        (x = B.system) && x.global.system == B.system && ((H = "Narwhal"), I || (I = x[0].os || null));
                    }
                    H || (H = "Rhino");
                } else
                    "object" == typeof B.process &&
                        !B.process.browser &&
                        (x = B.process) &&
                        ("object" == typeof x.versions &&
                            ("string" == typeof x.versions.electron
                                ? (E.push("Node " + x.versions.node), (H = "Electron"), (A = x.versions.electron))
                                : "string" == typeof x.versions.nw && (E.push("Chromium " + A, "Node " + x.versions.node), (H = "NW.js"), (A = x.versions.nw))),
                        H || ((H = "Node.js"), (fa = x.arch), (I = x.platform), (A = (A = /[\d.]+/.exec(x.version)) ? A[0] : null)));
            else
                e((x = B.runtime)) == K
                    ? ((H = "Adobe AIR"), (I = x.flash.system.Capabilities.os))
                    : e((x = B.phantom)) == T
                    ? ((H = "PhantomJS"), (A = (x = x.version || null) && x.major + "." + x.minor + "." + x.patch))
                    : "number" == typeof W.documentMode && (x = /\bTrident\/(\d+)/i.exec(u))
                    ? ((A = [A, W.documentMode]), (x = +x[1] + 4) != A[1] && (E.push("IE " + A[1] + " mode"), N && (N[1] = ""), (A[1] = x)), (A = "IE" == H ? String(A[1].toFixed(1)) : A[0]))
                    : "number" == typeof W.documentMode && /^(?:Chrome|Firefox)\b/.test(H) && (E.push("masking as " + H + " " + A), (H = "IE"), (A = "11.0"), (N = ["Trident"]), (I = "Windows"));
            I = I && b(I);
        }
        A &&
            (x = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(A) || /(?:alpha|beta)(?: ?\d)?/i.exec(u + ";" + (aa && M.appMinorVersion)) || (/\bMinefield\b/i.test(u) && "a")) &&
            ((X = /b/i.test(x) ? "beta" : "alpha"), (A = A.replace(RegExp(x + "\\+?$"), "") + ("beta" == X ? da : P) + (/\d+\+?/.exec(x) || "")));
        if ("Fennec" == H || ("Firefox" == H && /\b(?:Android|Firefox OS)\b/.test(I))) H = "Firefox Mobile";
        else if ("Maxthon" == H && A) A = A.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(L)) "Xbox 360" == L && (I = null), "Xbox 360" == L && /\bIEMobile\b/.test(u) && E.unshift("mobile mode");
        else if ((!/^(?:Chrome|IE|Opera)$/.test(H) && (!H || L || /Browser|Mobi/.test(H))) || ("Windows CE" != I && !/Mobi/i.test(u)))
            if ("IE" == H && aa)
                try {
                    null === B.external && E.unshift("platform preview");
                } catch (U) {
                    E.unshift("embedded");
                }
            else
                (/\bBlackBerry\b/.test(L) || /\bBB10\b/.test(u)) && (x = (RegExp(L.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(u) || 0)[1] || A)
                    ? ((x = [x, /BB10/.test(u)]), (I = (x[1] ? ((L = null), (Y = "BlackBerry")) : "Device Software") + " " + x[0]), (A = null))
                    : this != d &&
                      "Wii" != L &&
                      ((aa && V) ||
                          (/Opera/.test(H) && /\b(?:MSIE|Firefox)\b/i.test(u)) ||
                          ("Firefox" == H && /\bOS X (?:\d+\.){2,}/.test(I)) ||
                          ("IE" == H && ((I && !/^Win/.test(I) && 5.5 < A) || (/\bWindows XP\b/.test(I) && 8 < A) || (8 == A && !/\bTrident\b/.test(u))))) &&
                      !q.test((x = h.call(d, u.replace(q, "") + ";"))) &&
                      x.name &&
                      ((x = "ing as " + x.name + ((x = x.version) ? " " + x : "")),
                      q.test(H)
                          ? (/\bIE\b/.test(x) && "Mac OS" == I && (I = null), (x = "identify" + x))
                          : ((x = "mask" + x), (H = ea ? b(ea.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"), /\bIE\b/.test(x) && (I = null), aa || (A = null)),
                      (N = ["Presto"]),
                      E.push(x));
        else H += " Mobile";
        if ((x = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(u) || 0)[1])) {
            x = [parseFloat(x.replace(/\.(\d)$/, ".0$1")), x];
            if ("Safari" == H && "+" == x[1].slice(-1)) (H = "WebKit Nightly"), (X = "alpha"), (A = x[1].slice(0, -1));
            else if (A == x[1] || A == (x[2] = (/\bSafari\/([\d.]+\+?)/i.exec(u) || 0)[1])) A = null;
            x[1] = (/\bChrome\/([\d.]+)/i.exec(u) || 0)[1];
            537.36 == x[0] && 537.36 == x[2] && 28 <= parseFloat(x[1]) && "WebKit" == N && (N = ["Blink"]);
            aa && (R || x[1])
                ? (N && (N[1] = "like Chrome"),
                  (x =
                      x[1] ||
                      ((x = x[0]),
                      530 > x
                          ? 1
                          : 532 > x
                          ? 2
                          : 532.05 > x
                          ? 3
                          : 533 > x
                          ? 4
                          : 534.03 > x
                          ? 5
                          : 534.07 > x
                          ? 6
                          : 534.1 > x
                          ? 7
                          : 534.13 > x
                          ? 8
                          : 534.16 > x
                          ? 9
                          : 534.24 > x
                          ? 10
                          : 534.3 > x
                          ? 11
                          : 535.01 > x
                          ? 12
                          : 535.02 > x
                          ? "13+"
                          : 535.07 > x
                          ? 15
                          : 535.11 > x
                          ? 16
                          : 535.19 > x
                          ? 17
                          : 536.05 > x
                          ? 18
                          : 536.1 > x
                          ? 19
                          : 537.01 > x
                          ? 20
                          : 537.11 > x
                          ? "21+"
                          : 537.13 > x
                          ? 23
                          : 537.18 > x
                          ? 24
                          : 537.24 > x
                          ? 25
                          : 537.36 > x
                          ? 26
                          : "Blink" != N
                          ? "27"
                          : "28")))
                : (N && (N[1] = "like Safari"), (x = ((x = x[0]), 400 > x ? 1 : 500 > x ? 2 : 526 > x ? 3 : 533 > x ? 4 : 534 > x ? "4+" : 535 > x ? 5 : 537 > x ? 6 : 538 > x ? 7 : 601 > x ? 8 : "8")));
            N && (N[1] += " " + (x += "number" == typeof x ? ".x" : /[.+]/.test(x) ? "" : "+"));
            "Safari" == H && (!A || 45 < parseInt(A)) && (A = x);
        }
        "Opera" == H && (x = /\bzbov|zvav$/.exec(I))
            ? ((H += " "), E.unshift("desktop mode"), "zvav" == x ? ((H += "Mini"), (A = null)) : (H += "Mobile"), (I = I.replace(RegExp(" *" + x + "$"), "")))
            : "Safari" == H && /\bChrome\b/.exec(N && N[1]) && (E.unshift("desktop mode"), (H = "Chrome Mobile"), (A = null), /\bOS X\b/.test(I) ? ((Y = "Apple"), (I = "iOS 4.3+")) : (I = null));
        A && 0 == A.indexOf((x = /[\d.]+$/.exec(I))) && -1 < u.indexOf("/" + x + "-") && (I = String(I.replace(x, "")).replace(/^ +| +$/g, ""));
        N &&
            !/\b(?:Avant|Nook)\b/.test(H) &&
            (/Browser|Lunascape|Maxthon/.test(H) || ("Safari" != H && /^iOS/.test(I) && /\bSafari\b/.test(N[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(H) && N[1])) &&
            (x = N[N.length - 1]) &&
            E.push(x);
        E.length && (E = ["(" + E.join("; ") + ")"]);
        Y && L && 0 > L.indexOf(Y) && E.push("on " + Y);
        L && E.push((/^on /.test(E[E.length - 1]) ? "" : "on ") + L);
        if (I) {
            var ca = (x = / ([\d.+]+)$/.exec(I)) && "/" == I.charAt(I.length - x[0].length - 1);
            I = {
                architecture: 32,
                family: x && !ca ? I.replace(x[0], "") : I,
                version: x ? x[1] : null,
                toString: function () {
                    var U = this.version;
                    return this.family + (U && !ca ? " " + U : "") + (64 == this.architecture ? " 64-bit" : "");
                },
            };
        }
        (x = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(fa)) && !/\bi686\b/i.test(fa)
            ? (I && ((I.architecture = 64), (I.family = I.family.replace(RegExp(" *" + x), ""))), H && (/\bWOW64\b/i.test(u) || (aa && /\w(?:86|32)$/.test(M.cpuClass || M.platform) && !/\bWin64; x64\b/i.test(u))) && E.unshift("32-bit"))
            : I && /^OS X/.test(I.family) && "Chrome" == H && 39 <= parseFloat(A) && (I.architecture = 64);
        u || (u = null);
        B = {};
        B.description = u;
        B.layout = N && N[0];
        B.manufacturer = Y;
        B.name = H;
        B.prerelease = X;
        B.product = L;
        B.ua = u;
        B.version = H && A;
        B.os = I || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
                return "null";
            },
        };
        B.parse = h;
        B.toString = function () {
            return this.description || "";
        };
        B.version && E.unshift(A);
        B.name && E.unshift(H);
        I && H && (I != String(I).split(" ")[0] || (I != H.split(" ")[0] && !L)) && E.push(L ? "(" + I + ")" : "on " + I);
        E.length && (B.description = E.join(" "));
        return B;
    }
    var l = { function: !0, object: !0 },
        n = (l[typeof window] && window) || this,
        r = l[typeof exports] && exports;
    l = l[typeof module] && module && !module.nodeType && module;
    var p = r && l && "object" == typeof global && global;
    !p || (p.global !== p && p.window !== p && p.self !== p) || (n = p);
    var v = Math.pow(2, 53) - 1,
        q = /\bOpera/;
    p = Object.prototype;
    var t = p.hasOwnProperty,
        w = p.toString,
        z = h();
    "function" == typeof define && "object" == typeof define.amd && define.amd
        ? ((n.platform = z),
          define(function () {
              return z;
          }))
        : r && l
        ? d(z, function (u, C) {
              r[C] = u;
          })
        : (n.platform = z);
}.call(this));
function buildIOSMeta() {
    for (
        var a = [
                { name: "viewport", content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" },
                { name: "apple-mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-status-bar-style", content: "black" },
            ],
            c = 0;
        c < a.length;
        c++
    ) {
        var b = document.createElement("meta");
        b.name = a[c].name;
        b.content = a[c].content;
        var d = window.document.head.querySelector('meta[name="' + b.name + '"]');
        d && d.parentNode.removeChild(d);
        window.document.head.appendChild(b);
    }
}
function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se");
}
function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>');
}
function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block");
}
function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product)
        switch (window.devicePixelRatio) {
            case 2:
                switch (window.innerWidth) {
                    case 568:
                        320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                        break;
                    case 667:
                        375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    case 808:
                        414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    default:
                        hideIOSFullscreenPanel();
                }
                break;
            case 3:
                switch (window.innerWidth) {
                    case 736:
                        414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    case 724:
                        375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    case 808:
                        414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    default:
                        hideIOSFullscreenPanel();
                }
                break;
            default:
                hideIOSFullscreenPanel();
        }
}
function iosResize() {
    __iosResize();
    setTimeout(function () {
        __iosResize();
    }, 500);
}
function iosInIframe() {
    try {
        return window.self !== window.top;
    } catch (a) {
        return !0;
    }
}
function isIOSLessThen13() {
    var a = platform.os,
        c = a.family.toLowerCase();
    a = parseFloat(a.version);
    return "ios" === c && 13 > a ? !0 : !1;
}
$(document).ready(function () {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta());
});
jQuery(window).resize(function () {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize();
});
var s_iOffsetX,
    s_iOffsetY,
    s_bIsIphone = !1,
    s_bFocus = !0,
    _bFadingSound = !1;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile =
        /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(
            a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
        );
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
    sizeHandler();
});
function trace(a) {
    console.log(a);
}
function getSize(a) {
    var c = a.toLowerCase(),
        b = window.document,
        d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var e = b.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var f = b.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        e.appendChild(f);
        d.insertBefore(e, b.head);
        a = 7 == f["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(e);
    } else a = window["inner" + a];
    return a;
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}
function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile;
}
function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a;
}
function isIOS() {
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length; ) if (navigator.platform === a.pop()) return (s_bIsIphone = !0);
    return (s_bIsIphone = !1);
}
function getIOSWindowHeight() {
    return (document.documentElement.clientWidth / window.innerWidth) * window.innerHeight;
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0;
}
function _checkOrientation(a, c) {
    s_bMobile &&
        ENABLE_CHECK_ORIENTATION &&
        (a > c
            ? "landscape" === $(".orientation-msg-container").attr("data-orientation")
                ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate())
                : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate())
            : "portrait" === $(".orientation-msg-container").attr("data-orientation")
            ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate())
            : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()));
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        s_bFocus && _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH);
        s_iScaleFactor = b;
        var d = Math.round(CANVAS_WIDTH * b);
        b = Math.round(CANVAS_HEIGHT * b);
        if (b < a) {
            var e = a - b;
            b += e;
            d += (CANVAS_WIDTH / CANVAS_HEIGHT) * e;
        } else d < c && ((e = c - d), (d += e), (b += (CANVAS_HEIGHT / CANVAS_WIDTH) * e));
        e = a / 2 - b / 2;
        var f = c / 2 - d / 2,
            g = CANVAS_WIDTH / d;
        if (f * g < -EDGEBOARD_X || e * g < -EDGEBOARD_Y)
            (b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X))), (d = CANVAS_WIDTH * b), (b *= CANVAS_HEIGHT), (e = (a - b) / 2), (f = (c - d) / 2), (g = CANVAS_WIDTH / d);
        s_iOffsetX = Math.floor(-1 * f * g);
        s_iOffsetY = Math.floor(-1 * e * g);
        0 <= e && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oTournamentPanel && s_oTournamentPanel.refreshButtonPos();
        null !== s_oEditorPanel && s_oEditorPanel.refreshButtonPos();
        s_bIsIphone && s_oStage
            ? ((canvas = document.getElementById("canvas")),
              (s_oStage.canvas.width = Math.floor(2 * d)),
              (s_oStage.canvas.height = Math.floor(2 * b)),
              (canvas.style.width = Math.floor(d) + "px"),
              (canvas.style.height = Math.floor(b) + "px"),
              (s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)))
            : s_bMobile
            ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px"))
            : s_oStage && ((s_oStage.canvas.width = Math.floor(d)), (s_oStage.canvas.height = Math.floor(b)), (s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)), (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
        0 > e || (e = (a - b) / 2);
        $("#canvas").css("top", e + "px");
        $("#canvas").css("left", f + "px");
        fullscreenHandler();
    }
}
function playSound(a, c, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b), s_aSounds[a]) : null;
}
function stopSound(a) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, c) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].volume(c);
}
function soundIsPlaying(a) {
    return s_aSounds[a].playing();
}
function setMute(a, c) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(c);
}
function tweenVolume(a, c, b) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds[a].once("fade", function () {}), s_aSounds[a].fade(s_aSounds[a].volume(), c, b);
}
function createBitmap(a, c, b) {
    var d = new createjs.Bitmap(a),
        e = new createjs.Shape();
    c && b ? e.graphics.beginFill("#fff").drawRect(0, 0, c, b) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = e;
    return d;
}
function createSprite(a, c, b, d, e, f) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape();
    c.graphics.beginFill("#000000").drawRect(-b, -d, e, f);
    a.hitArea = c;
    return a;
}
function pad(a, c, b) {
    a += "";
    return a.length >= c ? a : Array(c - a.length + 1).join(b || "0") + a;
}
function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b));
}
function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, d);
}
function tweenVectorsOnX(a, c, b) {
    return a + b * (c - a);
}
function shuffle(a) {
    for (var c = a.length, b, d; 0 !== c; ) (d = Math.floor(Math.random() * c)), --c, (b = a[c]), (a[c] = a[d]), (a[d] = b);
    return a;
}
function sortHigherYInFront(a, c, b) {
    return a.y > c.y ? 1 : a.y < c.y ? -1 : 0;
}
function bubbleSort(a) {
    do {
        var c = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && ((c = a[b]), (a[b] = a[b + 1]), (a[b + 1] = c), (c = !0));
    } while (c);
}
function compare(a, c) {
    return a.x > c.x ? -1 : a.x < c.x ? 1 : 0;
}
function easeLinear(a, c, b, d) {
    return (b * a) / d + c;
}
function easeInQuad(a, c, b, d) {
    return b * (a /= d) * a + c;
}
function easeInSine(a, c, b, d) {
    return -b * Math.cos((a / d) * (Math.PI / 2)) + b + c;
}
function easeInCubic(a, c, b, d) {
    return b * (a /= d) * a * a + c;
}
function getTrajectoryPoint(a, c) {
    var b = new createjs.Point(),
        d = (1 - a) * (1 - a),
        e = a * a;
    b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + e * c.end.x;
    b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + e * c.end.y;
    return b;
}
function formatTime(a) {
    a /= 1e3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var b = "";
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a;
}
function formatOlympionicTime(a) {
    a /= 1e3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(2);
    c += ":";
    return 10 > a ? c + ("0" + a) : c + a;
}
function olympionicTimeDifference(a) {
    a /= 1e3;
    var c = Math.floor(a / 60);
    szSecs = parseFloat(a - 60 * c).toFixed(2);
    a = "";
    0 < c && (a += c + ":");
    "0.00" === szSecs && (szSecs = "0.01");
    return (a += szSecs);
}
function degreesToRadians(a) {
    return (a * Math.PI) / 180;
}
function radiantsToDegrees(a) {
    return (180 * a) / Math.PI;
}
function checkRectCollision(a, c) {
    var b = getBounds(a, 0.9);
    var d = getBounds(c, 0.98);
    return calculateIntersection(b, d);
}
function calculateIntersection(a, c) {
    var b, d, e, f;
    var g = a.x + (b = a.width / 2);
    var m = a.y + (d = a.height / 2);
    var h = c.x + (e = c.width / 2);
    var l = c.y + (f = c.height / 2);
    g = Math.abs(g - h) - (b + e);
    m = Math.abs(m - l) - (d + f);
    return 0 > g && 0 > m ? ((g = Math.min(Math.min(a.width, c.width), -g)), (m = Math.min(Math.min(a.height, c.height), -m)), { x: Math.max(a.x, c.x), y: Math.max(a.y, c.y), width: g, height: m, rect1: a, rect2: c }) : null;
}
function transformRotationRectPoint(a, c, b) {
    var d = { x: 0, y: 0 };
    d.x = c.x + (a.width / 2) * Math.cos(b) - (a.height / 2) * Math.sin(b);
    d.y = c.y + (a.width / 2) * Math.sin(b) + (a.height / 2) * Math.cos(b);
    var e = { x: 0, y: 0 };
    e.x = c.x - (a.width / 2) * Math.cos(b) - (a.height / 2) * Math.sin(b);
    e.y = c.y - (a.width / 2) * Math.sin(b) + (a.height / 2) * Math.cos(b);
    var f = { x: 0, y: 0 };
    f.x = c.x - (a.width / 2) * Math.cos(b) + (a.height / 2) * Math.sin(b);
    f.y = c.y - (a.width / 2) * Math.sin(b) - (a.height / 2) * Math.cos(b);
    var g = { x: 0, y: 0 };
    g.x = c.x + (a.width / 2) * Math.cos(b) + (a.height / 2) * Math.sin(b);
    g.y = c.y + (a.width / 2) * Math.sin(b) - (a.height / 2) * Math.cos(b);
    return [d, e, f, g];
}
function getBounds(a, c) {
    var b = { x: Infinity, y: Infinity, width: 0, height: 0 };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children,
            e = d.length,
            f;
        for (f = 0; f < e; f++) {
            var g = getBounds(d[f], 1);
            g.x < b.x && (b.x = g.x);
            g.y < b.y && (b.y = g.y);
            g.x + g.width > b.x2 && (b.x2 = g.x + g.width);
            g.y + g.height > b.y2 && (b.y2 = g.y + g.height);
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2;
    } else {
        if (a instanceof createjs.Bitmap) {
            e = a.sourceRect || a.image;
            f = e.width * c;
            var m = e.height * c;
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                e = a.spriteSheet.getFrame(a.currentFrame);
                f = e.rect.width;
                m = e.rect.height;
                d = e.regX;
                var h = e.regY;
            } else (b.x = a.x || 0), (b.y = a.y || 0);
        else (b.x = a.x || 0), (b.y = a.y || 0);
        d = d || 0;
        f = f || 0;
        h = h || 0;
        m = m || 0;
        b.regX = d;
        b.regY = h;
        e = a.localToGlobal(0 - d, 0 - h);
        g = a.localToGlobal(f - d, m - h);
        f = a.localToGlobal(f - d, 0 - h);
        d = a.localToGlobal(0 - d, m - h);
        b.x = Math.min(Math.min(Math.min(e.x, g.x), f.x), d.x);
        b.y = Math.min(Math.min(Math.min(e.y, g.y), f.y), d.y);
        b.width = Math.max(Math.max(Math.max(e.x, g.x), f.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(e.y, g.y), f.y), d.y) - b.y;
    }
    return b;
}
function checkPointInPolygon(a, c, b, d, e) {
    var f,
        g = b.length - 1,
        m = !1,
        h = null;
    for (f = 0; f < b.length; f++) {
        if (((d[f] < c && d[g] >= c) || (d[g] < c && d[f] >= c)) && (b[f] <= a || b[g] <= a)) {
            m ^= b[f] + ((c - d[f]) * (b[g] - b[f])) / (d[g] - d[f]) < a;
            var l = b[f],
                n = b[g];
            e === WALL_ITEMS_ONLY && ((l = b[g]), (n = b[f]));
            l > a && n < a && (h = { edge: { A: { x: b[f], y: d[f] }, B: { x: b[g], y: d[g] } }, point: { x: a, y: c } });
        }
        g = f;
    }
    switch (m) {
        case 0:
            m = !1;
            break;
        case 1:
            m = !0;
    }
    return { collided: m, limited_point: h };
}
function calculatePerspectiveValue(a, c, b) {
    return linearFunction(a, b.anchor.y + b.height, b.anchor.y, c, 0);
}
function calculatePerspectivePositionX(a, c, b) {
    return linearFunction(a - b.anchor.x, -b.anchor.x, b.anchor.x, c, -c);
}
function clone(a) {
    if (null == a || "object" != typeof a) return a;
    var c = a.constructor(),
        b;
    for (b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
    return c;
}
function lineIntersect(a, c) {
    var b = (a[0].y - a[1].y) / (a[0].x - a[1].x),
        d = (c[0].y - c[1].y) / (c[0].x - c[1].x);
    return b - d < Number.EPSILON ? null : { x: (b * a[0].x - d * c[0].x + c[0].y - a[0].y) / (b - d), y: (b * d * (c[0].x - a[0].x) + d * a[0].y - b * c[0].y) / (d - b) };
}
function checkLineIntersection(a, c) {
    var b = { x: null, y: null, onLine1: !1, onLine2: !1 };
    var d = (c[1].y - c[0].y) * (a[1].x - a[0].x) - (c[1].x - c[0].x) * (a[1].y - a[0].y);
    if (0 == d) return b;
    var e = a[0].y - c[0].y;
    var f = a[0].x - c[0].x;
    var g = (c[1].x - c[0].x) * e - (c[1].y - c[0].y) * f;
    f = (a[1].x - a[0].x) * e - (a[1].y - a[0].y) * f;
    e = g / d;
    f /= d;
    b.x = a[0].x + e * (a[1].x - a[0].x);
    b.y = a[0].y + e * (a[1].y - a[0].y);
    0 < e && 1 > e && (b.onLine1 = !0);
    0 < f && 1 > f && (b.onLine2 = !0);
    return b;
}
function closestNumInArrayMaj(a, c) {
    for (var b = [], d = 0; d < c.length; d++) a < c[d] && b.push(c[d]);
    var e = b[0];
    for (d = 1; d < b.length; d++) e > b[d] && (e = b[d]);
    return a < e ? e : a;
}
function closestNumInArrayMin(a, c) {
    for (var b = [], d = 0; d < c.length; d++) a > c[d] && b.push(c[d]);
    var e = b[0];
    for (d = 1; d < b.length; d++) e < b[d] && (e = b[d]);
    return a > e ? e : a;
}
function createGraphicCircle(a, c, b, d) {
    var e = new createjs.Shape();
    e.graphics.beginFill(d).drawCircle(a.x, a.y, c);
    null !== b && createjs.Tween.get(e).to({ alpha: 0, visible: !1 }, b);
    return e;
}
function checkPointInRect(a, c, b, d, e) {
    return e.x > a && e.x < c && e.y > b && e.y < d ? !0 : !1;
}
function checkItemInLimitedArea(a, c, b, d, e) {
    b = getItemLimitedAreaOffset(c, b, d);
    return { result: checkPointInPolygon(c.x + b.x, c.y + b.y, a.x, a.y, e), offset: b };
}
function getItemLimitedAreaOffset(a, c, b) {
    var d = 0;
    a.x > b.x && (d += RIGHT_DIR);
    a.y > b.y && (d += DOWN_DIR);
    return c[d];
}
function getPolygonCenterPoint(a) {
    for (var c, b, d, e, f = 0; f < a.length; f++) (c = a[f].x < c || null == c ? a[f].x : c), (b = a[f].x > b || null == b ? a[f].x : b), (d = a[f].y < d || null == d ? a[f].y : d), (e = a[f].y > e || null == e ? a[f].y : e);
    return { x: (c + b) / 2, y: (d + e) / 2 };
}
function linearFunction(a, c, b, d, e) {
    return ((a - c) * (e - d)) / (b - c) + d;
}
function colorInterpolation(a, c, b) {
    var d = function (g) {
            g = g.toString(16);
            return 1 == g.length ? "0" + g : g;
        },
        e = Math.ceil(parseInt(a.substring(0, 2), 16) * ratio + parseInt(c.substring(0, 2), 16) * (1 - b)),
        f = Math.ceil(parseInt(a.substring(2, 4), 16) * ratio + parseInt(c.substring(2, 4), 16) * (1 - b));
    a = Math.ceil(parseInt(a.substring(4, 6), 16) * ratio + parseInt(c.substring(4, 6), 16) * (1 - b));
    d(e);
    d(f);
    d(a);
}
function getDistanceBetweenTwoItems(a, c) {
    var b = a.getPos(),
        d = a.getNormalizedDimension(),
        e = c.getPos(),
        f = c.getNormalizedDimension(),
        g = e.x - b.x;
    e = e.y - b.y;
    b = Math.abs(g + e);
    g = Math.atan2(e, g);
    return (b -= Math.abs(0.5 * (d.width + f.width) * Math.cos(g) + 0.5 * (d.height + f.height) * Math.sin(g)));
}
function createGenericText(a, c) {
    var b = null,
        d = a.width,
        e = a.height,
        f = 0;
    a.align === CENTER && (f = -d / 2);
    f = a.pos.x + f;
    var g = a.pos.y + -e / 2;
    a.outline && ((b = new CTLText(c, f, g, d, e, a.size, TEXT_ALIGN[a.align], FONT_STROKE, PRIMARY_FONT, a.line_height, 2, 2, a.text, !0, !0, a.multiline, !1)), b.setOutline(a.outline_size));
    return { text: new CTLText(c, f, g, d, e, a.size, TEXT_ALIGN[a.align], FONT_COLOR, PRIMARY_FONT, a.line_height, 2, 2, a.text, !0, !0, a.multiline, !1), outline: b };
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1);
}
function shuffle(a) {
    for (var c = a.length, b, d; 0 < c; ) (d = Math.floor(Math.random() * c)), c--, (b = a[c]), (a[c] = a[d]), (a[d] = b);
    return a;
}
NoClickDelay.prototype = {
    handleEvent: function (a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a);
        }
    },
    onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1);
    },
    onTouchMove: function (a) {
        this.moved = !0;
    },
    onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c);
        }
    },
};
(function () {
    function a(b) {
        var d = { focus: "visible", focusin: "visible", pageshow: "visible", blur: "hidden", focusout: "hidden", pagehide: "hidden" };
        b = b || window.event;
        b.type in d
            ? (document.body.className = d[b.type])
            : ((document.body.className = this[c] ? "hidden" : "visible"), "hidden" === document.body.className ? (s_oMain.stopUpdate(), (s_bFocus = !1)) : (s_oMain.startUpdate(), (s_bFocus = !0)));
    }
    var c = "hidden";
    c in document
        ? document.addEventListener("visibilitychange", a)
        : (c = "mozHidden") in document
        ? document.addEventListener("mozvisibilitychange", a)
        : (c = "webkitHidden") in document
        ? document.addEventListener("webkitvisibilitychange", a)
        : (c = "msHidden") in document
        ? document.addEventListener("msvisibilitychange", a)
        : "onfocusin" in document
        ? (document.onfocusin = document.onfocusout = a)
        : (window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a);
})();
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var d = c[b].split("=");
        if (d[0] == a) return d[1];
    }
}
this.clearLocalStorage = function () {
    s_bStorageAvailable && localStorage.clear();
};
function saveItem(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, c);
}
function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null;
}
function randomIntBetween(a, c) {
    return parseInt(Math.min(a + Math.random() * (c - a), c));
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN &&
        screenfull.isEnabled &&
        ((s_bFullscreen = screenfull.isFullscreen),
        null !== s_oInterface && s_oInterface.resetFullscreenBut(),
        null !== s_oMenu && s_oMenu.resetFullscreenBut(),
        null !== s_oTournamentPanel && s_oTournamentPanel.resetFullscreenBut(),
        null !== s_oEditorPanel && s_oEditorPanel.resetFullscreenBut());
}
if (screenfull.isEnabled)
    screenfull.on("change", function () {
        s_bFullscreen = screenfull.isFullscreen;
        null !== s_oInterface && s_oInterface.resetFullscreenBut();
        null !== s_oMenu && s_oMenu.resetFullscreenBut();
        null !== s_oTournamentPanel && s_oTournamentPanel.resetFullscreenBut();
        null !== s_oEditorPanel && s_oEditorPanel.resetFullscreenBut();
    });
function CSpriteLibrary() {
    var a = {},
        c,
        b,
        d,
        e,
        f,
        g;
    this.init = function (m, h, l) {
        c = {};
        d = b = 0;
        e = m;
        f = h;
        g = l;
    };
    this.addSprite = function (m, h) {
        if (!a.hasOwnProperty(m)) {
            var l = new Image();
            a[m] = c[m] = { szPath: h, oSprite: l, bLoaded: !1 };
            b++;
        }
    };
    this.getSprite = function (m) {
        return a.hasOwnProperty(m) ? a[m].oSprite : null;
    };
    this._onSpritesLoaded = function () {
        b = 0;
        f.call(g);
    };
    this._onSpriteLoaded = function () {
        e.call(g);
        ++d === b && this._onSpritesLoaded();
    };
    this.loadSprites = function () {
        for (var m in c)
            (c[m].oSprite.oSpriteLibrary = this),
                (c[m].oSprite.szKey = m),
                (c[m].oSprite.onload = function () {
                    this.oSpriteLibrary.setLoaded(this.szKey);
                    this.oSpriteLibrary._onSpriteLoaded(this.szKey);
                }),
                (c[m].oSprite.onerror = function (h) {
                    var l = h.currentTarget;
                    setTimeout(function () {
                        c[l.szKey].oSprite.src = c[l.szKey].szPath;
                    }, 500);
                }),
                (c[m].oSprite.src = c[m].szPath);
    };
    this.setLoaded = function (m) {
        a[m].bLoaded = !0;
    };
    this.isLoaded = function (m) {
        return a[m].bLoaded;
    };
    this.getNumSprites = function () {
        return b;
    };
}
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 210,
    EDGEBOARD_Y = 70,
    PRIMARY_FONT = "montserratextrabold_italic",
    FONT_COLOR = "#fff",
    FONT_STROKE = "#06142F",
    FONT_OUTLINE = 5,
    FPS = 60,
    FPS_TIME = 1e3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    ENABLE_FULLSCREEN = !0,
    SOUNDTRACK_VOLUME_DEFAULT = 1,
    SOUNDTRACK_VOLUME_IN_GAME = 0.3,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_TOURNAMENT_SELECT = 2,
    STATE_EDITOR_PANEL = 3,
    STATE_GAME = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_PRESS_DOWN = 6,
    ON_PRESS_UP = 7,
    ON_PRESS_MOVE = 8,
    ON_PRESS_RESTART = 10,
    ON_PRESS_YES = 11,
    ON_PRESS_NO = 12,
    ON_PRESS_EXIT = 13,
    ON_END_CYCLIST_MOVE = 14,
    ON_FINISH_LINE = 15,
    ON_OPPONENT_HALF_WIDTH = 16,
    ON_OPPONENT_HIDE = 17,
    ON_CYCLIST_IN_CANVAS = 18,
    ON_END_ANIM_SCORE_TEXT = 19,
    ON_SHOW_ANIM_SCORE_TEXT = 20,
    ON_CONTROLLER_END = 21,
    ON_CONTROLLER_REMOVE = 22,
    ON_REMOVE_ITEM = 23,
    ON_SHOW_TUTORIAL_STAMINA = 24,
    ON_END_TUTORIAL = 25,
    ON_PRESS_SKIP_RACE = 26,
    LOCALSTORAGE_STRING = "cycle_",
    NUM_TOURNAMENTS = 3,
    CROWD_BOUNDS = [2, 3, 7],
    GAME_STATE_TUTORIAL = 0,
    GAME_STATE_START = 1,
    GAME_STATE_PLAY = 2,
    GAME_STATE_HELP = 3,
    GAME_STATE_PAUSE = 4,
    GAME_STATE_FINISH = 5,
    GAME_STATE_GAME_OVER = 6,
    GAME_STATE_SKIP_RACE = 7,
    TYPE_EASY = 0,
    TYPE_MEDIUM = 1,
    TYPE_HARD = 2,
    TYPE_VERY_HARD = 3,
    ENABLE_CHECK_ORIENTATION,
    NUM_TYPE_ROADS = 4,
    NUM_TYPE_BOUNDS = 8,
    NUM_TYPE_BG = 10,
    MAX_TILE_REPETITION = 4,
    NUM_FRAMES_CYCLIST = 53,
    CYCLIST_WIDTH = 501,
    CYCLIST_HEIGHT = 418,
    CYCLIST_COLL_WIDTH = Math.round(0.7 * CYCLIST_WIDTH),
    PART_CYCLIST = {
        cyclist_shadow: { x: 7, y: 308, num_types: 1 },
        chassis: { x: 137, y: 147, num_types: 5 },
        handlebar: { x: 368, y: 154, num_types: 2 },
        wheels: { x: 66, y: 236, num_types: 3 },
        skin: { x: 164, y: 16, num_types: 3 },
        helmet_glasses: { x: 327, y: 0, num_types: 5 },
        jersey: { x: 201, y: 40, num_types: 9 },
        shorts_shoes: { x: 157, y: 84, num_types: 6 },
    },
    CYCLIST_NORMAL_INFOS = { bg_speed: 22, cyclist_framerate: 50 },
    CYCLIST_RUSH_INFOS = { bg_speed: 28, cyclist_framerate: 35 },
    OPPONENT_SPEED = CYCLIST_NORMAL_INFOS.bg_speed - 5.5,
    ITEM_SPEED = CYCLIST_NORMAL_INFOS.bg_speed - 6,
    STAMINA_INCREASE = 22,
    STAMINA_DECREASE = 0.06,
    LEADER_JERSEY = [6, 7, 8],
    MAX_ANGLE = 5,
    MIN_TIME_FOR_HILL = 5e3,
    MAX_TIME_FOR_HILL = 1e4,
    STARTING_LANE = 2,
    FINISH_BOUND = 7,
    PLAYER_X = 400,
    LANE_INFOS = [
        { y: 404, scale: 0.6 },
        { y: 446, scale: 0.67 },
        { y: 497, scale: 0.77 },
        { y: 562, scale: 0.87 },
        { y: 647, scale: 1 },
    ],
    POINTS_ARRIVAL = [50, 35, 25, 18, 14, 12, 10, 8, 7, 6, 5, 4, 3, 2, 1],
    TIME_START = 4e3,
    LEADERBOARD_POINTS;
function CMenu() {
    var a,
        c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n,
        r,
        p,
        v,
        q,
        t,
        w,
        z,
        u,
        C,
        D,
        B,
        E = null,
        M = null;
    this._init = function () {
        n = 0;
        v = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(v);
        var A = s_oSpriteLibrary.getSprite("logo_menu");
        B = createBitmap(A);
        B.regX = A.width / 2;
        B.regY = A.height / 2;
        B.x = -A.width / 2;
        B.y = CANVAS_HEIGHT / 2 - 130;
        s_oStage.addChild(B);
        p = [];
        r = Math.floor(3e3 * Math.random());
        D = new createjs.Container();
        s_oStage.addChild(D);
        b = CANVAS_WIDTH / 2;
        d = CANVAS_HEIGHT / 2 + 250;
        A = s_oSpriteLibrary.getSprite("but_play");
        q = new CGfxButton(b, d, A, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        A = s_oSpriteLibrary.getSprite("but_credits");
        g = A.height / 2 + 10;
        m = A.height / 2 + 10;
        z = new CGfxButton(g, m, A, s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        var R = s_oSpriteLibrary.getSprite("but_editor");
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
            ? ((A = s_oSpriteLibrary.getSprite("audio_icon")),
              (a = CANVAS_WIDTH - A.height / 2 - 10),
              (c = A.height / 2 + 10),
              (w = new CToggle(a, c, A, s_bAudioActive, s_oStage)),
              w.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
              (h = a - A.width / 2 - 10),
              (l = c))
            : ((h = CANVAS_WIDTH - R.height / 2 - 10), (l = R.height / 2 + 10));
        C = new CGfxButton(h, l, R, s_oStage);
        C.addEventListener(ON_MOUSE_UP, this._onEditor, this);
        A = window.document;
        R = A.documentElement;
        E = R.requestFullscreen || R.mozRequestFullScreen || R.webkitRequestFullScreen || R.msRequestFullscreen;
        M = A.exitFullscreen || A.mozCancelFullScreen || A.webkitExitFullscreen || A.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (E = !1);
        E &&
            screenfull.isEnabled &&
            ((A = s_oSpriteLibrary.getSprite("but_fullscreen")), (e = g + A.width / 2 + 10), (f = A.height / 2 + 10), (u = new CToggle(e, f, A, s_bFullscreen, s_oStage)), u.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        s_bStorageAvailable || new CAlertSavingBox(TEXT_ERR_LS, s_oStage);
        getFirstTime() && C.setVisible(!1);
        t = new createjs.Shape();
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.alpha = 1;
        s_oStage.addChild(t);
        tweenVolume("soundtrack", SOUNDTRACK_VOLUME_DEFAULT, 1500);
        createjs.Tween.get(t)
            .to({ alpha: 0 }, 500, createjs.Ease.cubicOut)
            .call(function () {
                createjs.Tween.get(B).to({ x: CANVAS_WIDTH / 2 }, 800, createjs.Ease.backOut);
            });
        this.refreshButtonPos();
    };
    this.unload = function () {
        q.unload();
        q = null;
        C.unload();
        z.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) w.unload(), (w = null);
        E && screenfull.isEnabled && u.unload();
        s_oStage.removeChild(v, t, B);
        s_oMenu = v = t = null;
    };
    this.refreshButtonPos = function () {
        z.setPosition(g + s_iOffsetX, s_iOffsetY + m);
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || w.setPosition(a - s_iOffsetX, s_iOffsetY + c);
        E && screenfull.isEnabled && u.setPosition(e + s_iOffsetX, f + s_iOffsetY);
        C.setPosition(h - s_iOffsetX, l + s_iOffsetY);
    };
    this._spawnCyclist = function () {
        var A = Math.floor(Math.random() * LANE_INFOS.length),
            R = {},
            K;
        for (K in s_aPartTypes) R[K] = 0;
        for (K in PART_CYCLIST) "cyclist_shadow" !== K && (R[K] = Math.floor(Math.random() * PART_CYCLIST[K].num_types));
        A = new CCyclist(-1, -CYCLIST_WIDTH, LANE_INFOS[A].y, LANE_INFOS[A].scale, A, 0, " ", R, D);
        A.changeAnim("normal", CYCLIST_NORMAL_INFOS.cyclist_framerate, 0);
        p.push(A);
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    this._onCreditsBut = function () {
        new CCreditsPanel();
    };
    this._onButPlayRelease = function () {
        $(s_oMain).trigger("start_session");
        q.block(!0);
        createjs.Tween.get(t)
            .to({ alpha: 1 }, 500, createjs.Ease.cubicOut)
            .call(
                function () {
                    this.unload();
                    getFirstTime() ? s_oMain.gotoEditor() : s_oMain.gotoTournamentPanel();
                },
                null,
                this
            );
    };
    this.resetFullscreenBut = function () {
        E && screenfull.isEnabled && u.setActive(s_bFullscreen);
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? M.call(window.document) : E.call(window.document.documentElement);
        sizeHandler();
    };
    this._onEditor = function () {
        s_oMenu.unload();
        s_oMain.gotoEditor();
    };
    this.update = function () {
        n += s_iTimeElaps;
        n > r && ((n = 0), (r = Math.floor(3e3 * Math.random())), this._spawnCyclist());
        for (var A = 0; A < p.length; A++) p[A].moveOnX(CYCLIST_RUSH_INFOS.bg_speed);
    };
    s_oMenu = this;
    this._init();
}
var s_oMenu = null;
function CPreloader() {
    var a, c, b, d, e, f, g, m, h;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.loadSprites();
        h = new createjs.Container();
        s_oStage.addChild(h);
    };
    this.unload = function () {
        h.removeAllChildren();
    };
    this._onImagesLoaded = function () {};
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady();
    };
    this.attachSprites = function () {
        var l = new createjs.Shape();
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.addChild(l);
        l = s_oSpriteLibrary.getSprite("200x200");
        g = createBitmap(l);
        g.regX = 0.5 * l.width;
        g.regY = 0.5 * l.height;
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 - 180;
        h.addChild(g);
        m = new createjs.Shape();
        m.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
        h.addChild(m);
        g.mask = m;
        l = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(l);
        d.x = CANVAS_WIDTH / 2 - l.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 50;
        h.addChild(d);
        a = l.width;
        c = l.height;
        e = new createjs.Shape();
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
        h.addChild(e);
        d.mask = e;
        b = new createjs.Text("", "40px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 110;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        h.addChild(b);
        f = new createjs.Shape();
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.addChild(f);
        createjs.Tween.get(f)
            .to({ alpha: 0 }, 500)
            .call(function () {
                createjs.Tween.removeTweens(f);
                h.removeChild(f);
            });
    };
    this.refreshLoader = function (l) {
        b.text = l + "%";
        100 === l && (s_oMain.onAllResourcesLoaded(), (b.visible = !1), (d.visible = !1));
        e.graphics.clear();
        l = Math.floor((l * a) / 100);
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, l, c);
    };
    this._init();
}
function CMain(a) {
    var c,
        b = 0,
        d = 0,
        e = STATE_LOADING,
        f,
        g,
        m;
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = isMobile();
        !1 === s_bMobile && s_oStage.enableMouseOver(FPS);
        s_iPrevTime = new Date().getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary();
        f = new CPreloader();
        s_oTweenController = new CTweenController();
    };
    this.preloaderReady = function () {
        c = !0;
        s_oMain._loadImages();
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_oMain._initSounds();
    };
    this.soundLoaded = function () {
        b++;
        f.refreshLoader(Math.floor((b / d) * 100));
    };
    this._initSounds = function () {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({ path: "./sounds/", filename: "press_but", loop: !1, volume: 1, ingamename: "press_but" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "soundtrack", loop: !1, volume: 1, ingamename: "soundtrack" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "energy", loop: !1, volume: 1, ingamename: "energy" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "game_over", loop: !1, volume: 1, ingamename: "game_over" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "level_win", loop: !1, volume: 1, ingamename: "level_win" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "crowd_idle", loop: !1, volume: 1, ingamename: "crowd_idle" });
        d += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var h = 0; h < s_aSoundsInfo.length; h++) this.tryToLoadSound(s_aSoundsInfo[h], !1);
    };
    this.tryToLoadSound = function (h, l) {
        setTimeout(
            function () {
                s_aSounds[h.ingamename] = new Howl({
                    src: [h.path + h.filename + ".mp3"],
                    autoplay: !1,
                    preload: !0,
                    loop: h.loop,
                    volume: h.volume,
                    onload: s_oMain.soundLoaded,
                    onloaderror: function (n, r) {
                        for (var p = 0; p < s_aSoundsInfo.length; p++)
                            if (n === s_aSounds[s_aSoundsInfo[p].ingamename]._sounds[0]._id) {
                                s_oMain.tryToLoadSound(s_aSoundsInfo[p], !0);
                                break;
                            }
                    },
                    onplayerror: function (n) {
                        for (var r = 0; r < s_aSoundsInfo.length; r++)
                            if (n === s_aSounds[s_aSoundsInfo[r].ingamename]._sounds[0]._id) {
                                s_aSounds[s_aSoundsInfo[r].ingamename].once("unlock", function () {
                                    s_aSounds[s_aSoundsInfo[r].ingamename].play();
                                    "soundtrack" === s_aSoundsInfo[r].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
                                });
                                break;
                            }
                    },
                });
            },
            l ? 200 : 0
        );
    };
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("small_msg_box", "./sprites/small_msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_restart_small", "./sprites/but_restart_small.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_delete_save", "./sprites/but_delete_save.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("msg_box_big", "./sprites/msg_box_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_editor", "./sprites/bg_editor.jpg");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_leaderboard", "./sprites/but_leaderboard.png");
        s_oSpriteLibrary.addSprite("bg_tournament", "./sprites/bg_tournament.jpg");
        s_oSpriteLibrary.addSprite("but_arrow_down", "./sprites/but_arrow_down.png");
        s_oSpriteLibrary.addSprite("but_arrow_up", "./sprites/but_arrow_up.png");
        s_oSpriteLibrary.addSprite("bg_map", "./sprites/bg_map.png");
        s_oSpriteLibrary.addSprite("player_map", "./sprites/player_map.png");
        s_oSpriteLibrary.addSprite("but_select_part", "./sprites/but_select_part.png");
        s_oSpriteLibrary.addSprite("but_editor", "./sprites/but_editor.png");
        s_oSpriteLibrary.addSprite("but_shuffle", "./sprites/but_shuffle.png");
        s_oSpriteLibrary.addSprite("leaderboard_row", "./sprites/leaderboard_row.png");
        s_oSpriteLibrary.addSprite("fill_stamina", "./sprites/fill_stamina.png");
        s_oSpriteLibrary.addSprite("frame_stamina", "./sprites/frame_stamina.png");
        s_oSpriteLibrary.addSprite("but_boost", "./sprites/but_boost.png");
        s_oSpriteLibrary.addSprite("stamina_icon_off", "./sprites/stamina_icon_off.png");
        s_oSpriteLibrary.addSprite("stamina_icon_on", "./sprites/stamina_icon_on.png");
        s_oSpriteLibrary.addSprite("lane_highlight", "./sprites/lane_highlight.png");
        s_oSpriteLibrary.addSprite("key_boost", "./sprites/key_boost.png");
        s_oSpriteLibrary.addSprite("key_down", "./sprites/key_down.png");
        s_oSpriteLibrary.addSprite("key_up", "./sprites/key_up.png");
        s_oSpriteLibrary.addSprite("lane_dot_off", "./sprites/lane_dot_off.png");
        s_oSpriteLibrary.addSprite("lane_dot_on", "./sprites/lane_dot_on.png");
        s_oSpriteLibrary.addSprite("fade_tutorial", "./sprites/fade_tutorial.png");
        s_oSpriteLibrary.addSprite("but_help", "./sprites/but_help.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        for (var h = 0; 51 > h; h++) s_oSpriteLibrary.addSprite("stamina_item_" + h, "./sprites/stamina_item/stamina_item_" + h + ".png");
        for (h = 0; h < NUM_TOURNAMENTS; h++)
            s_oSpriteLibrary.addSprite("but_tournament_" + h, "./sprites/but_tournament_" + h + ".png"),
                s_oSpriteLibrary.addSprite("leader_badge_" + h, "./sprites/leader_badge_" + h + ".png"),
                s_oSpriteLibrary.addSprite("leader_map_" + h, "./sprites/leader_map_" + h + ".png");
        for (var l = 0; l < NUM_TYPE_ROADS; l++) s_oSpriteLibrary.addSprite("road_" + l, "./sprites/road_tiles/road/road_" + l + ".jpg");
        for (l = 0; l < NUM_TYPE_BOUNDS; l++) s_oSpriteLibrary.addSprite("bound_" + l, "./sprites/road_tiles/bound/bound_" + l + ".png");
        for (l = 0; l < NUM_TYPE_BG; l++) s_oSpriteLibrary.addSprite("bg_game_" + l, "./sprites/road_tiles/bg_game/bg_game_" + l + ".jpg");
        for (var n in PART_CYCLIST)
            for (h = 0; h < PART_CYCLIST[n].num_types; h++) {
                for (l = 0; l < NUM_FRAMES_CYCLIST; l++) s_oSpriteLibrary.addSprite(n + "_" + h + "_" + l, "./sprites/cyclist/" + n + "/type_" + h + "/" + n + "_" + h + "_" + l + ".png");
                "cyclist_shadow" !== n && s_oSpriteLibrary.addSprite("icon_" + n, "./sprites/cyclist/icon_" + n + ".png");
            }
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    this.onAllResourcesLoaded = function () {
        f.unload();
        try {
            saveItem("ls_available", "ok");
            var h = getPlayerParts();
            if (null !== h) for (var l in h) s_aPartTypes[l] = h[l];
            s_aLastLevels = getLastLevels();
            console.log(s_aLastLevels);
        } catch (n) {
            s_bStorageAvailable = !1;
        }
        s_oSoundTrack = playSound("soundtrack", 0, !0);
        this.gotoMenu();
    };
    this._onImagesLoaded = function () {
        b++;
        f.refreshLoader(Math.floor((b / d) * 100));
    };
    this._onAllImagesLoaded = function () {};
    this.gotoMenu = function () {
        g = new CMenu();
        e = STATE_MENU;
    };
    this.gotoTournamentPanel = function () {
        new CTournamentSelection();
        e = STATE_TOURNAMENT_SELECT;
    };
    this.gotoEditor = function () {
        new CEditorPanel();
        e = STATE_EDITOR_PANEL;
    };
    this.gotoGame = function () {
        m = new CGame();
        e = STATE_GAME;
    };
    this.stopUpdate = function () {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
    };
    this.startUpdate = function () {
        s_iPrevTime = new Date().getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1);
    };
    this._update = function (h) {
        if (!1 !== c) {
            var l = new Date().getTime();
            s_iTimeElaps = l - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = l;
            1e3 <= s_iCntTime && ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
            e === STATE_GAME ? m.update() : e === STATE_MENU && g.update();
            s_oStage.update(h);
        }
    };
    s_oMain = this;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    LEADERBOARD_POINTS = a.leaderboard_points;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer();
}
var s_bMobile,
    s_bAudioActive = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_bFullscreen = !1,
    s_oDrawLayer,
    s_oStage,
    s_oMain,
    s_oSpriteLibrary,
    s_oSoundTrack = null,
    s_oCanvas,
    s_bStorageAvailable = !0,
    s_aSounds,
    s_aSoundsInfo,
    s_oTweenController,
    s_iTournament = 0;
function CTextButton(a, c, b, d, e, f, g, m) {
    var h, l, n, r, p, v, q, t, w, z;
    this._init = function (u, C, D, B, E, M, A) {
        h = !1;
        l = 1;
        n = [];
        r = [];
        z = createBitmap(D);
        t = new createjs.Container();
        t.x = u;
        t.y = C;
        t.regX = D.width / 2;
        t.regY = D.height / 2;
        s_bMobile || (t.cursor = "pointer");
        t.addChild(z, w);
        m.addChild(t);
        w = new CTLText(t, 20, 0, D.width - 40, D.height + 2, A, "center", M, E, 1, 2, 2, B, !0, !0, !1, !1);
        this._initListener();
    };
    this.unload = function () {
        t.off("mousedown", p);
        t.off("pressup", v);
        m.removeChild(t);
    };
    this.setVisible = function (u) {
        t.visible = u;
    };
    this.setAlign = function (u) {
        w.textAlign = u;
    };
    this.setTextX = function (u) {
        w.x = u;
    };
    this.setScale = function (u) {
        l = t.scaleX = t.scaleY = u;
    };
    this.enable = function () {
        h = !1;
    };
    this.disable = function () {
        h = !0;
    };
    this._initListener = function () {
        p = t.on("mousedown", this.buttonDown);
        v = t.on("pressup", this.buttonRelease);
    };
    this.addEventListener = function (u, C, D) {
        n[u] = C;
        r[u] = D;
    };
    this.addEventListenerWithParams = function (u, C, D, B) {
        n[u] = C;
        r[u] = D;
        q = B;
    };
    this.buttonRelease = function () {
        h || (playSound("press_but", 1, !1), (t.scaleX = l), (t.scaleY = l), n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(r[ON_MOUSE_UP], q));
    };
    this.buttonDown = function () {
        h || ((t.scaleX = 0.9 * l), (t.scaleY = 0.9 * l), n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN]));
    };
    this.setPosition = function (u, C) {
        t.x = u;
        t.y = C;
    };
    this.tweenPosition = function (u, C, D, B, E, M, A) {
        createjs.Tween.get(t)
            .wait(B)
            .to({ x: u, y: C }, D, E)
            .call(function () {
                void 0 !== M && M.call(A);
            });
    };
    this.changeText = function (u) {
        w.refreshText(u);
    };
    this.setX = function (u) {
        t.x = u;
    };
    this.setY = function (u) {
        t.y = u;
    };
    this.getButtonImage = function () {
        return t;
    };
    this.getX = function () {
        return t.x;
    };
    this.getY = function () {
        return t.y;
    };
    this.getSprite = function () {
        return t;
    };
    this.getScale = function () {
        return t.scaleX;
    };
    this._init(a, c, b, d, e, f, g);
}
function CToggle(a, c, b, d, e) {
    var f, g, m, h, l, n, r;
    this._init = function (p, v, q, t, w) {
        r = void 0 !== w ? w : s_oStage;
        g = [];
        m = [];
        w = new createjs.SpriteSheet({ images: [q], frames: { width: q.width / 2, height: q.height, regX: q.width / 2 / 2, regY: q.height / 2 }, animations: { state_true: [0], state_false: [1] } });
        f = t;
        h = createSprite(w, "state_" + f, q.width / 2 / 2, q.height / 2, q.width / 2, q.height);
        h.x = p;
        h.y = v;
        h.stop();
        s_bMobile || (h.cursor = "pointer");
        r.addChild(h);
        this._initListener();
    };
    this.unload = function () {
        h.off("mousedown", l);
        h.off("pressup", n);
        r.removeChild(h);
    };
    this._initListener = function () {
        l = h.on("mousedown", this.buttonDown);
        n = h.on("pressup", this.buttonRelease);
    };
    this.addEventListener = function (p, v, q) {
        g[p] = v;
        m[p] = q;
    };
    this.setCursorType = function (p) {
        h.cursor = p;
    };
    this.setActive = function (p) {
        f = p;
        h.gotoAndStop("state_" + f);
    };
    this.getActive = function () {
        return f;
    };
    this.setVisible = function (p) {
        h.visible = p;
    };
    this.getVisible = function () {
        return h.visible;
    };
    this.getButtonImage = function () {
        return h;
    };
    this.buttonRelease = function () {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("press_but", 1, !1);
        f = !f;
        h.gotoAndStop("state_" + f);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(m[ON_MOUSE_UP], f);
    };
    this.buttonDown = function () {
        h.scaleX = 0.9;
        h.scaleY = 0.9;
        g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]);
    };
    this.setPosition = function (p, v) {
        h.x = p;
        h.y = v;
    };
    this._init(a, c, b, d, e);
}
var s_aLeaderBoards = [],
    s_aPartTypes = {},
    s_aGameData,
    szKey;
for (szKey in PART_CYCLIST) s_aPartTypes[szKey] = 0;
function clearLocalStorage() {
    s_iLastLevel = 1;
    if (s_bStorageAvailable)
        for (var a = 0; null !== localStorage.key(a); ) {
            var c = localStorage.key(a);
            -1 !== c.indexOf(LOCALSTORAGE_STRING) ? localStorage.removeItem(c) : a++;
        }
}
function saveFirstTime() {
    s_bStorageAvailable && saveItem(LOCALSTORAGE_STRING + "first_time", !1);
}
function getFirstTime() {
    return s_bStorageAvailable && null !== getItem(LOCALSTORAGE_STRING + "first_time") ? !1 : !0;
}
function savePlayerCustom(a) {
    s_bStorageAvailable && saveItem(LOCALSTORAGE_STRING + "player_parts", JSON.stringify(a));
}
function getPlayerParts() {
    if (!s_bStorageAvailable) return null;
    var a = getItem(LOCALSTORAGE_STRING + "player_parts");
    return a ? JSON.parse(a) : null;
}
function setLastLevels(a, c) {
    s_bStorageAvailable && ((s_aLastLevels[a] = c), saveItem(LOCALSTORAGE_STRING + "last_levels", JSON.stringify(s_aLastLevels)));
}
function getLastLevels() {
    if (!s_bStorageAvailable) return [0, 0, 0];
    var a = getItem(LOCALSTORAGE_STRING + "last_levels");
    return null === a ? [0, 0, 0] : JSON.parse(a);
}
function saveLeaderboard(a, c) {
    s_bStorageAvailable && (saveItem(LOCALSTORAGE_STRING + "leaderboard_" + a, JSON.stringify(c)), (s_aLeaderBoards[a] = c));
}
function getLeaderboard(a) {
    if (!s_bStorageAvailable) return resetLeaderboards();
    a = getItem(LOCALSTORAGE_STRING + "leaderboard_" + a);
    return null === a ? resetLeaderboards() : JSON.parse(a);
}
function resetLeaderboards() {
    for (var a = [], c = 0; c < OPPONENT_INFOS.length; c++) a[c] = { cyclist: c, points: 0 };
    return a;
}
function clearTournament(a) {
    s_bStorageAvailable && (localStorage.removeItem(LOCALSTORAGE_STRING + "leaderboard_" + a), (s_aLeaderBoards[a] = resetLeaderboards()), setLastLevels(a, 0), saveScoreTournament(a, 0));
}
function saveScoreTournament(a, c) {
    s_bStorageAvailable && (console.log("save iScore " + c), saveItem(LOCALSTORAGE_STRING + "score_" + a, c));
}
function getScoreTournament(a) {
    if (!s_bStorageAvailable) return 0;
    a = getItem(LOCALSTORAGE_STRING + "score_" + a);
    return null === a ? 0 : a;
}
function getTotalScore() {
    if (!s_bStorageAvailable) return 0;
    for (var a = 0, c = 0; c < NUM_TOURNAMENTS; c++) a += parseInt(getScoreTournament(c));
    return a;
}
function CGfxButton(a, c, b, d) {
    var e, f, g, m, h, l, n, r, p;
    this._init = function (q, t, w) {
        e = [];
        f = [];
        m = [];
        g = createBitmap(w);
        g.x = q;
        g.y = t;
        g.regX = w.width / 2;
        g.regY = w.height / 2;
        l = h = 1;
        p = !1;
        s_bMobile || (g.cursor = "pointer");
        v.addChild(g);
        this._initListener();
    };
    this.unload = function () {
        g.off("mousedown", n);
        g.off("pressup", r);
        v.removeChild(g);
    };
    this.setVisible = function (q) {
        g.visible = q;
    };
    this.setCursorType = function (q) {
        g.cursor = q;
    };
    this._initListener = function () {
        n = g.on("mousedown", this.buttonDown);
        r = g.on("pressup", this.buttonRelease);
    };
    this.addEventListener = function (q, t, w) {
        e[q] = t;
        f[q] = w;
    };
    this.addEventListenerWithParams = function (q, t, w, z) {
        e[q] = t;
        f[q] = w;
        m[q] = z;
    };
    this.buttonRelease = function () {
        p || ((g.scaleX = 0 < h ? h : -h), (g.scaleY = l), playSound("press_but", 1, !1), e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP], m[ON_MOUSE_UP]));
    };
    this.buttonDown = function () {
        p || ((g.scaleX = 0 < h ? 0.9 * h : 0.9 * -h), (g.scaleY = 0.9 * l), e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], m[ON_MOUSE_DOWN]));
    };
    this.rotation = function (q) {
        g.rotation = q;
    };
    this.getButton = function () {
        return g;
    };
    this.setPosition = function (q, t) {
        g.x = q;
        g.y = t;
    };
    this.setX = function (q) {
        g.x = q;
    };
    this.setY = function (q) {
        g.y = q;
    };
    this.getButtonImage = function () {
        return g;
    };
    this.getX = function () {
        return g.x;
    };
    this.getY = function () {
        return g.y;
    };
    this.block = function (q) {
        p = q;
        g.scaleX = h;
        g.scaleY = l;
    };
    this.setScaleX = function (q) {
        h = g.scaleX = q;
    };
    this.setScale = function (q) {
        l = h = q;
        g.scaleX = g.scaleY = q;
    };
    this.setRotation = function (q) {
        g.rotation = q;
    };
    this.getX = function () {
        return g.x;
    };
    this.getY = function () {
        return g.y;
    };
    this.setRegPoints = function (q) {
        g.regX = q.regX;
        g.regY = q.regY;
    };
    this.pulseAnimation = function () {
        createjs.Tween.get(g, { loop: -1, override: !0 })
            .to({ scaleX: 0.9 * h, scaleY: 0.9 * l }, 850, createjs.Ease.quadOut)
            .to({ scaleX: h, scaleY: l }, 650, createjs.Ease.quadIn);
    };
    this.trebleAnimation = function () {
        createjs.Tween.get(g, { loop: -1 }).to({ rotation: 5 }, 75, createjs.Ease.quadOut).to({ rotation: -5 }, 140, createjs.Ease.quadIn).to({ rotation: 0 }, 75, createjs.Ease.quadIn).wait(750);
    };
    this.getGraphic = function () {
        return g;
    };
    this.removeAllTweens = function () {
        createjs.Tween.removeTweens(g);
    };
    var v = void 0 !== d ? d : s_oStage;
    this._init(a, c, b);
    return this;
}
function CGame() {
    var a,
        c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n,
        r,
        p,
        v,
        q,
        t,
        w,
        z,
        u,
        C,
        D,
        B = -1,
        E,
        M,
        A,
        R,
        K,
        F,
        Q,
        T,
        P,
        da,
        W,
        V,
        ea,
        x,
        fa,
        X,
        aa,
        N,
        H,
        L,
        Y,
        I,
        ca,
        U,
        J;
    this._init = function () {
        e = s_aLastLevels[s_iTournament];
        Q = 0;
        T = LEVEL_INFOS[s_iTournament][e].spawn_stamina_time;
        F = [];
        w = s_oSpriteLibrary.getSprite("bg_game_" + LEVEL_INFOS[s_iTournament][e].bg_index);
        I = createBitmap(w);
        s_oStage.addChild(I);
        c = new createjs.Container();
        c.scale = 1.15;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.regY = CANVAS_HEIGHT / 2;
        c.regX = CANVAS_WIDTH / 2;
        s_oStage.addChild(c);
        X = new CBackgroundController(LEVEL_INFOS[s_iTournament][e].bg_index, c);
        X.addEventListener(ON_FINISH_LINE, this._onFinishLine, this);
        b = new createjs.Container();
        s_oStage.addChild(b);
        m = Math.floor(e / Math.floor(LEVEL_INFOS[s_iTournament].length / 4));
        m >= OPPONENT_PATTERN.length && (m = OPPONENT_PATTERN.length - 1);
        console.log("_iCurDiffPattern " + m);
        this.resetValues();
        Y = [];
        for (var y = 0; y < PART_CYCLIST.jersey.num_types; y++) y !== s_aPartTypes.jersey && -1 === LEADER_JERSEY.indexOf(y) && Y.push(y);
        U = new createjs.Container();
        c.addChild(U);
        J = new CCyclist(0, PLAYER_X, LANE_INFOS[STARTING_LANE].y, LANE_INFOS[STARTING_LANE].scale, STARTING_LANE, 0, TEXT_NAME_PLAYER, s_aPartTypes, U);
        J.changeAnim("normal", CYCLIST_NORMAL_INFOS.cyclist_framerate, 0);
        J.addEventListener(ON_END_CYCLIST_MOVE, this._onEndPlayerMove, this);
        this._prepareOpponents();
        ca = new CRadarController(CANVAS_WIDTH / 2, 10, s_oStage);
        ca.refreshPlayerPos(0, f + 1);
        g = 0;
        0 < e ? ((g = s_aLeaderBoards[s_iTournament][0].cyclist), 0 === g ? (J.changePart("jersey", LEADER_JERSEY[s_iTournament]), ca.hideLeader()) : A[g - 1].changePart("jersey", LEADER_JERSEY[s_iTournament])) : ca.hideLeader();
        this.createInterface(sprintf(TEXT_RACE, e + 1));
        aa = new CTutorialPanel();
        aa.addEventListener(ON_SHOW_TUTORIAL_STAMINA, this.showTutorialStamina, this);
        aa.addEventListener(ON_END_TUTORIAL, this._onEndTutorial, this);
        V = new CAreYouSurePanel(TEXT_ARE_SURE_RESTART);
        ea = new CEndPanel(s_oStage);
        x = new CGameOver(s_oStage);
        fa = new CWinPanel(s_oStage);
        d = new CController(s_oStage);
        d.addEventListener(ON_KEY_PRESS, this._onUserActionInput, this);
        d.addEventListener(ON_KEY_RELEASE, this._onUserActionRelease, this);
        W = new createjs.Shape();
        W.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(W);
        W.on("click", function () {});
        tweenVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME, 1e3);
        0 === e ? (aa.show(), (E = B = GAME_STATE_TUTORIAL)) : this.changeState(GAME_STATE_START);
        this.startRace();
        createjs.Tween.get(W).to({ alpha: 0, visible: !1 }, 500);
        $(s_oMain).trigger("start_level", e);
        this.refreshButtonPos();
    };
    this.unload = function () {
        a.unload();
        V.unload();
        d.unload();
        W.removeAllEventListeners();
        c.removeAllEventListeners();
        ea.unload();
        x.unload();
        fa.unload();
        aa.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oStage.removeAllEventListeners();
        s_oGame = null;
    };
    this.changeState = function (y) {
        E = B = y;
        B === GAME_STATE_START && ((y = new CEffectText(sprintf(TEXT_RACE, e + 1), s_oStage)), y.startAnimation(y.unload, y), J.restoreStamina(), s_bMobile && d.showMobileButtons());
    };
    this._onUserActionInput = function (y) {
        switch (y) {
            case PRESS_DOWN_KEY:
                if (L === LANE_INFOS.length - 1) break;
                s_oGame._checkLaneDistance(L + 1, LANE_INFOS[L].scale) === H && (L++, (N = CYCLIST_NORMAL_INFOS.bg_speed), J.changePosition(LANE_INFOS[L].y, LANE_INFOS[L].scale));
                break;
            case PRESS_UP_KEY:
                if (0 === L) break;
                s_oGame._checkLaneDistance(L - 1, LANE_INFOS[L].scale) === H && (L--, (N = CYCLIST_NORMAL_INFOS.bg_speed), J.changePosition(LANE_INFOS[L].y, LANE_INFOS[L].scale));
                break;
            case PRESS_NITRO_KEY:
                D || ((P = 1.5 * STAMINA_DECREASE), (C = !0), -1 === J.getCurAnim().indexOf("rush") ? J.changeFramerate(60) : J.changeFramerate(40));
        }
    };
    this._onUserActionRelease = function (y) {
        switch (y) {
            case PRESS_NITRO_KEY:
                s_oGame.resetNitro();
        }
    };
    this.resetNitro = function () {
        -1 === J.getCurAnim().indexOf("rush") ? J.changeFramerate(50) : J.changeFramerate(40);
        P = STAMINA_DECREASE;
        C = !1;
    };
    this.resetValues = function () {
        N = H = CYCLIST_NORMAL_INFOS.bg_speed;
        L = STARTING_LANE;
        P = STAMINA_DECREASE;
        C = n = !1;
        r = LEVEL_INFOS[s_iTournament][e].hill;
        p = !1;
        q = 0;
        t = Math.floor(Math.random() * (MAX_TIME_FOR_HILL - MIN_TIME_FOR_HILL + 1)) + MIN_TIME_FOR_HILL;
        l = 0;
        da = -1;
        D = !1;
        z = null;
        X.showAllHighlights(0);
    };
    this.restart = function () {
        for (var y = [], G = 0; G < K.length; G++) {
            var O = 0 !== K[G] ? A[K[G] - 1].getPrevPoints() : J.getPrevPoints();
            y.push({ cyclist: K[G], points: O });
        }
        saveLeaderboard(s_iTournament, y);
        setLastLevels(s_iTournament, e);
        this.restartGame();
    };
    this.nextLevel = function () {
        this.restartGame();
    };
    this._onEndPlayerMove = function () {
        s_oGame.sortCyclist();
    };
    this._prepareOpponents = function () {
        M = [];
        for (var y = LEVEL_INFOS[s_iTournament][e].max_dist_opponent, G = CANVAS_WIDTH + 2 * CYCLIST_WIDTH; G < y; ) {
            for (var O = OPPONENT_PATTERN[m][Math.floor(Math.random() * OPPONENT_PATTERN[m].length)], Z = CYCLIST_WIDTH, S = 0; S < O.length; S++) {
                var ba = {};
                for (ha in PART_CYCLIST) {
                    var ia = OPPONENT_SPEED;
                    if ("jersey" === ha) {
                        var ja = Math.floor(Math.random() * Y.length);
                        ba[ha] = Y[ja];
                    } else (ja = Math.floor(Math.random() * PART_CYCLIST[ha].num_types)), (ba[ha] = ja);
                }
                ba = new CCyclist(-1, G + O[S].x_offset, LANE_INFOS[O[S].lane].y, LANE_INFOS[O[S].lane].scale, O[S].lane, ia, "", ba, U);
                ba.addEventListener(ON_CYCLIST_IN_CANVAS, this._onOpponentVisible, this);
                ba.setUpdate(!0);
                M.push(ba);
                Z < O[S].x_offset && (Z = O[S].x_offset);
            }
            G += Z + CYCLIST_WIDTH / 2;
        }
        y = [];
        for (S = 0; S < OPPONENT_INFOS.length; S++) (G += Math.floor(Math.random() * CYCLIST_WIDTH) + CYCLIST_WIDTH / 2), y.push(G);
        y = shuffle(y);
        A = [];
        O = [0, 1, 2, 3, 4];
        O = shuffle(O);
        for (S = 1; S < OPPONENT_INFOS.length; S++) {
            ia = OPPONENT_INFOS[S].speed;
            Z = OPPONENT_INFOS[S].name;
            var ha = O.pop();
            0 === O.length && ((O = [0, 1, 2, 3, 4]), (O = shuffle(O)));
            ba = new CCyclist(S, y.pop(), LANE_INFOS[ha].y, LANE_INFOS[ha].scale, ha, ia, Z, OPPONENT_INFOS[S].part_types, U);
            ba.addEventListener(ON_CYCLIST_IN_CANVAS, this._onOpponentVisible, this);
            ba.setUpdate(!0);
            ba.setID(S);
            A.push(ba);
        }
        S = CYCLIST_NORMAL_INFOS.bg_speed - OPPONENT_INFOS[1].speed;
        u = Math.round((G - PLAYER_X) / (S * FPS));
        v = (((w.width - CANVAS_WIDTH) * S) / (u * CANVAS_WIDTH - CANVAS_WIDTH)) * 5;
        v = parseFloat(v.toFixed(2));
        X.setNumTiles(u, S);
        h = Math.round(0.9 * u);
        console.log("_iNumRaceTiles " + u);
        M = M.concat(A);
        R = [];
        for (G = 0; G < LANE_INFOS.length; G++) R[G] = [];
        f = M.length + 1;
        for (S = 0; S < s_aLeaderBoards[s_iTournament].length; S++) (G = s_aLeaderBoards[s_iTournament][S]), 0 === G.cyclist ? J.setPoints(G.points) : A[G.cyclist - 1].setPoints(G.points);
    };
    this.createInterface = function (y) {
        a = new CInterface(y, b);
        a.addEventListener(ON_PRESS_EXIT, this._onPressUpButtonExit, this);
        a.addEventListener(ON_PRESS_RESTART, this._onPressUpRestartButton, this, !0);
        a.addEventListener(ON_PRESS_SKIP_RACE, this._onSkipRace, this);
    };
    this._exitGame = function () {
        W.alpha = 0;
        W.visible = !0;
        var y = createjs.Tween.get(W);
        y.to({ alpha: 1 }, 500, createjs.Ease.cubicIn);
        y.call(
            function () {
                this.unload();
                $(s_oMain).trigger("end_level", e);
                $(s_oMain).trigger("end_session");
                s_oMain.gotoMenu();
                $(s_oMain).trigger("show_interlevel_ad");
            },
            this,
            this
        );
    };
    this.restartGame = function () {
        W.alpha = 0;
        W.visible = !0;
        $(s_oMain).trigger("restart_level", e);
        createjs.Tween.get(W)
            .to({ alpha: 1 }, 500, createjs.Ease.quadOut)
            .call(
                function () {
                    this.unload();
                    s_oMain.gotoGame();
                },
                null,
                s_oGame
            );
    };
    this.refreshButtonPos = function () {
        a.refreshButtonPos();
        ca.refreshButtonPos();
        aa.refreshButtonPos();
        d.refreshButtonPos();
    };
    this._onPressUpButtonExit = function () {
        V.setText(TEXT_ARE_SURE_EXIT);
        V.show();
        V.addEventListener(ON_PRESS_YES, this._onPressUpButYesExit, this);
        V.addEventListener(ON_PRESS_NO, this._onPressUpButNoExit, this);
        this.pauseGame();
    };
    this._onOpponentVisible = function (y, G, O) {
        if (y) s_oGame.sortCyclist(), R[G].push(O);
        else
            for (y = 0; y < R[G].length; y++)
                if (O === R[G][y]) {
                    R[G].splice(y, 1);
                    break;
                }
    };
    this.sortCyclist = function () {
        U.sortChildren(function (y, G, O) {
            return y.y > G.y ? 1 : y.y < G.y ? -1 : 0;
        });
    };
    this.pauseGame = function () {
        E = B;
        B = GAME_STATE_PAUSE;
        d.setInput(!1);
        null !== z && (z.paused = !0);
        c.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };
    this.unpauseGame = function () {
        B = E;
        d.setInput(!0);
        null !== z && (z.paused = !1);
        c.uncache();
    };
    this._onPressUpRestartButton = function () {
        V.setText(TEXT_ARE_SURE_RESTART);
        V.show();
        V.addEventListener(ON_PRESS_YES, this._onPressUpButYesRestart, this);
        V.addEventListener(ON_PRESS_NO, this._onPressUpButNoRestart, this);
        this.pauseGame();
    };
    this._onSkipRace = function () {
        for (B = GAME_STATE_SKIP_RACE; B !== GAME_STATE_GAME_OVER; ) s_oGame.updateOpponentArrival();
    };
    this._onPressUpButNoExit = function () {
        V.hide();
        this.unpauseGame();
    };
    this._onPressUpButYesExit = function () {
        V.hide();
        this._exitGame();
    };
    this._onPressUpButNoRestart = function () {
        V.hide();
        this.unpauseGame();
    };
    this._onPressUpButYesRestart = function () {
        V.hide();
        W.visible = !0;
        this.restartGame();
    };
    this.startRace = function () {
        X.startUpdate();
    };
    this._onFinishLine = function () {
        d.setInput(!1);
        for (var y = [], G = 0; G < A.length; G++) A[G].getX() > PLAYER_X && (y.push({ index: A[G].getID(), x: A[G].getX() }), A[G].setArrived(!0));
        y.sort(compare);
        K = [];
        for (G = 0; G < y.length; G++) K[G] = y[G].index;
        K.push(0);
        for (y = N = 0; y < F.length; y++) F[y].unload();
        F = [];
        X.hideAllHighlights();
        null !== z && (z.paused = !0);
        s_bMobile ? d.hideMobileButtons() : d.setInput(!1);
        a.showSkipBut();
        B = GAME_STATE_FINISH;
    };
    this._checkLaneDistance = function (y, G) {
        if (B === GAME_STATE_FINISH) return 0;
        D = !1;
        for (var O = 0; O < R[y].length; O++) {
            var Z = R[y][O];
            if (PLAYER_X < Z.getX() && Z.getX() - PLAYER_X < CYCLIST_WIDTH * G) return (D = !0), J.changeFramerate(40), s_oGame.resetNitro(), Z.getSpeed() + 1;
        }
        return H;
    };
    this.gameOver = function () {
        $(s_oMain).trigger("end_level", e);
        a.hideSkipBut();
        tweenVolume("crowd_idle", 0, 1e3);
        if (14 < f) x.show(f);
        else {
            for (var y = 0; y < K.length; y++) 0 !== K[y] ? A[K[y] - 1].increasePoints(LEADERBOARD_POINTS[y]) : f <= OPPONENT_INFOS.length && J.increasePoints(LEADERBOARD_POINTS[y]);
            y = this.sortLeaderboard();
            console.log(y);
            saveScoreTournament(s_iTournament, J.getPoints());
            var G = getTotalScore();
            e + 1 === LEVEL_INFOS[s_iTournament].length ? fa.show(y, J.getPoints(), G) : (ea.show(K, y), setLastLevels(s_iTournament, e + 1));
            saveLeaderboard(s_iTournament, y);
            $(s_oMain).trigger("save_score", G);
            $(s_oMain).trigger("share_event", G);
        }
    };
    this.sortLeaderboard = function () {
        for (var y = [{ cyclist: 0, points: J.getPoints() }], G = 0; G < A.length; G++) {
            for (var O = A[G].getPoints(), Z = !1, S = 0; S < y.length; S++)
                if (y[S].points < O) {
                    Z = !0;
                    0 === S ? y.unshift({ cyclist: G + 1, points: O }) : y.splice(S, 0, { cyclist: G + 1, points: O });
                    break;
                }
            Z || y.push({ cyclist: G + 1, points: O });
        }
        return y;
    };
    this.refreshOpponent = function () {
        -1 === J.getCurAnim().indexOf("rush") && h === X.getCurTile() && ((n = !0), J.changeAnim("prepare_rush", CYCLIST_RUSH_INFOS.cyclist_framerate, 0));
        for (var y = 0, G = 0; G < M.length; G++) M[G].update(N, n) < PLAYER_X && y++;
        f = M.length - y;
        y = X.getCurTile() / u;
        ca.refreshPlayerPos(y, f + 1);
        0 < g && ((y = A[g - 1].getX() - J.getX()), (y = X.getCurTile() + Math.floor(y / CANVAS_WIDTH)), ca.refreshLeader(y / u));
    };
    this._spawnStamina = function () {
        do var y = Math.floor(Math.random() * LANE_INFOS.length);
        while (y === da);
        da = y;
        var G = new CStaminaItem(2 * CANVAS_WIDTH, LANE_INFOS[y].y, LANE_INFOS[y].scale, y, U);
        G.addEventListener(ON_REMOVE_ITEM, this._onRemoveItem, this);
        F.push(G);
        X.highlightLane(y);
        this.sortCyclist();
    };
    this.showTutorialStamina = function () {
        X.hideAllHighlights();
        this._spawnStamina();
    };
    this._onEndTutorial = function () {
        X.hideAllHighlights();
        for (var y = 0; y < F.length; y++) F[y].unload();
        F = [];
        this.changeState(GAME_STATE_START);
    };
    this._onRemoveItem = function (y, G) {
        X.unlightLane(G);
        for (var O = 0; O < F.length; O++)
            if (F[O] === y) {
                F.splice(O, 1);
                break;
            }
    };
    this.getCurPlayerRank = function () {
        return f;
    };
    this.updateBg = function (y) {
        X.update(N, y);
        y || ((I.x -= v), I.x < -(w.width - CANVAS_WIDTH) && (I.x = -(w.width - CANVAS_WIDTH)));
    };
    this.updateStaminaItems = function () {
        for (var y = 0; y < F.length; y++) {
            var G = F[y].update(N);
            G < CANVAS_WIDTH &&
                F[y] &&
                L === F[y].getLane() &&
                !J.isTweening() &&
                G > PLAYER_X - (CYCLIST_WIDTH * LANE_INFOS[L].scale) / 2 &&
                G < PLAYER_X + (CYCLIST_WIDTH * LANE_INFOS[L].scale) / 2 &&
                (F[y].animCollect(PLAYER_X, LANE_INFOS[L].y - CYCLIST_HEIGHT * LANE_INFOS[L].scale), this._onRemoveItem(F[y], L), J.increaseStamina(STAMINA_INCREASE), playSound("energy", 1, !1));
        }
    };
    this.updateOpponentArrival = function () {
        for (var y = 0; y < M.length; y++) M[y].update(N, n);
        if (K.length <= A.length) for (y = 0; y < A.length; y++) !1 === A[y].isArrived() && A[y].getX() > CANVAS_WIDTH / 2 && (A[y].setArrived(!0), K.push(A[y].getID()));
        else (B = GAME_STATE_GAME_OVER), this.gameOver();
    };
    this.update = function () {
        switch (B) {
            case GAME_STATE_PLAY:
                this.updateBg(!1);
                Q += s_iTimeElaps;
                Q > T && ((Q = 0), this._spawnStamina());
                this.updateStaminaItems();
                0 < J.decreaseStamina(P) ? ((N = this._checkLaneDistance(L, LANE_INFOS[L].scale)), C && (N = CYCLIST_RUSH_INFOS.bg_speed)) : ((N = OPPONENT_SPEED), J.changeFramerate(40));
                if (r)
                    if (p) {
                        if (0 === c.rotation) {
                            MAX_ANGLE = 0.5 < Math.random() ? MAX_ANGLE : -MAX_ANGLE;
                            var y = Math.floor(1e4 * Math.random());
                            z = createjs.Tween.get(c)
                                .to({ rotation: MAX_ANGLE }, 6e3, createjs.Ease.cubicOut)
                                .wait(y)
                                .to({ rotation: 0 }, 6e3, createjs.Ease.cubicOut)
                                .call(function () {
                                    p = !1;
                                    z = null;
                                });
                        }
                    } else (q += s_iTimeElaps), q > t && ((q = 0), (t = Math.floor(Math.random() * (MAX_TIME_FOR_HILL - MIN_TIME_FOR_HILL + 1)) + MIN_TIME_FOR_HILL), (p = !0));
                this.refreshOpponent();
                break;
            case GAME_STATE_TUTORIAL:
                this.updateBg(!0);
                C && 0 < J.getStamina() ? ((N = CYCLIST_RUSH_INFOS.bg_speed), J.decreaseStamina(P)) : (N = CYCLIST_NORMAL_INFOS.bg_speed);
                this.updateStaminaItems();
                break;
            case GAME_STATE_START:
                this.updateBg(!1);
                l += s_iTimeElaps;
                l > TIME_START && ((l = 0), (B = GAME_STATE_PLAY), X.hideAllHighlights());
                this.refreshOpponent();
                N = this._checkLaneDistance(L, LANE_INFOS[L].scale);
                break;
            case GAME_STATE_FINISH:
                N = 0;
                J.getX() < CANVAS_WIDTH + CYCLIST_WIDTH && J.moveOnX(CYCLIST_NORMAL_INFOS.bg_speed);
                this.updateOpponentArrival();
                break;
            case GAME_STATE_GAME_OVER:
                for (J.getX() < CANVAS_WIDTH + CYCLIST_WIDTH && J.moveOnX(CYCLIST_NORMAL_INFOS.bg_speed), y = 0; y < M.length; y++) M[y].update(N, n);
        }
    };
    s_oGame = this;
    this._init();
}
var s_oGame = null;
function CInterface(a, c) {
    var b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n,
        r,
        p,
        v,
        q,
        t,
        w = null,
        z = null,
        u,
        C,
        D,
        B,
        E;
    this._init = function (M, A) {
        g = A;
        m = new createjs.Container();
        g.addChild(m);
        h = new createjs.Container();
        m.addChild(h);
        f = e = 10;
        q = new createjs.Container();
        q.x = e;
        q.y = f;
        m.addChild(q);
        new CTLText(q, 0, 0, 300, 36, 36, "left", FONT_STROKE, PRIMARY_FONT, 1, 0, 0, M, !0, !0, !1, !1).setOutline(FONT_OUTLINE);
        new CTLText(q, 0, 0, 300, 36, 36, "left", FONT_COLOR, PRIMARY_FONT, 1, 0, 0, M, !0, !0, !1, !1);
        var R = s_oSpriteLibrary.getSprite("but_exit");
        var K = CANVAS_WIDTH - R.height / 2 - 10;
        var F = R.height / 2 + 10;
        var Q = s_oSpriteLibrary.getSprite("but_settings");
        u = new CGUIExpandible(K, F, Q, h);
        n = new CGfxButton(K, F, R, h);
        n.addEventListenerWithParams(ON_MOUSE_UP, this.triggerEvent, this, ON_PRESS_EXIT);
        u.addButton(n);
        t = null;
        var T = K - (R.width + 10);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var P = s_oSpriteLibrary.getSprite("audio_icon");
            t = new CToggle(T, F, P, s_bAudioActive, h);
            t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            var da = T - (P.width / 2 + 10);
            Q = F;
            u.addButton(t);
        } else (da = K - (P.width + 10)), (Q = F);
        P = window.document;
        var W = P.documentElement;
        w = W.requestFullscreen || W.mozRequestFullScreen || W.webkitRequestFullScreen || W.msRequestFullscreen;
        z = P.exitFullscreen || P.mozCancelFullScreen || P.webkitExitFullscreen || P.msExitFullscreen;
        r = null;
        P = s_oSpriteLibrary.getSprite("but_fullscreen");
        w && screenfull.isEnabled
            ? ((r = new CToggle(da, Q, P, s_bFullscreen, h)), r.addEventListener(ON_MOUSE_UP, this._onFullscreen, this), (R = da - (P.width / 2 + 10)), (F = Q), u.addButton(r))
            : (R = !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? K - (R.width + 10) : T - (R.width / 2 + 10));
        P = s_oSpriteLibrary.getSprite("but_restart_small");
        l = new CGfxButton(R, F, P, h);
        l.addEventListenerWithParams(ON_MOUSE_UP, this.triggerEvent, this, ON_PRESS_RESTART);
        u.addButton(l);
        p = new CGfxButton(R, F, s_oSpriteLibrary.getSprite("but_help"), h);
        p.addEventListener(ON_MOUSE_UP, this._onHelp, this);
        u.addButton(p);
        F = s_oSpriteLibrary.getSprite("but_next");
        b = CANVAS_WIDTH - F.width / 2 - 10;
        d = CANVAS_HEIGHT - F.height / 2 - 10;
        v = new CGfxButton(b, d, F, s_oStage);
        v.setVisible(!1);
        v.addEventListenerWithParams(ON_MOUSE_UP, this.triggerEvent, this, ON_PRESS_SKIP_RACE);
        C = new CHelpPanel();
        D = [];
        B = [];
        E = [];
    };
    this.unload = function () {
        l.unload();
        p.unload();
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || t.unload();
        w && screenfull.isEnabled && r.unload();
    };
    this.refreshButtonPos = function () {
        h.x = -s_iOffsetX;
        h.y = s_iOffsetY;
        q.x = e + s_iOffsetX;
        q.y = f + s_iOffsetY;
        v.setPosition(b - s_iOffsetX, d - s_iOffsetY);
    };
    this.resetFullscreenBut = function () {
        r.setActive(s_bFullscreen);
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    this._onFullscreen = function () {
        s_bFullscreen ? z.call(window.document) : w.call(window.document.documentElement);
        sizeHandler();
    };
    this.setVisible = function (M) {
        m.visible = M;
    };
    this.triggerEvent = function (M) {
        D[M] && D[M].call(B[M], E[M]);
    };
    this.addEventListener = function (M, A, R, K) {
        D[M] = A;
        B[M] = R;
        E[M] = K;
    };
    this.showSkipBut = function () {
        v.setVisible(!0);
    };
    this.hideSkipBut = function () {
        v.setVisible(!1);
    };
    this._onHelp = function () {
        C.show();
    };
    this._init(a, c);
    s_oInterface = this;
}
s_oInterface = null;
function CGUIExpandible(a, c, b, d) {
    var e, f, g, m, h, l, n, r;
    this._init = function (v, q, t, w) {
        m = [];
        l = new createjs.Container();
        l.x = v;
        l.y = q;
        w.addChild(l);
        n = new createjs.Container();
        l.addChild(n);
        r = new createjs.Container();
        l.addChild(r);
        g = !1;
        h = new CGfxButton(0, 0, t, r);
        h.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        f = e = 65;
    };
    this.unload = function () {
        h.unload();
        d.removeChild(l);
    };
    this.refreshPos = function () {
        l.x = a - s_iOffsetX;
        l.y = c + s_iOffsetY;
    };
    this.addButton = function (v) {
        v = v.getButtonImage();
        v.x = 0;
        v.y = 0;
        v.visible = 0;
        n.addChildAt(v, 0);
        m.push(v);
    };
    this._onMenu = function () {
        (g = !g) ? p._expand() : p._collapse();
    };
    this._expand = function () {
        for (var v = 0; v < m.length; v++)
            (m[v].visible = !0),
                createjs.Tween.get(m[v], { override: !0 })
                    .wait((300 * v) / 2)
                    .to({ y: e + v * f }, 300, createjs.Ease.cubicOut);
    };
    this._collapse = function () {
        for (var v = 0; v < m.length; v++) {
            var q = m[m.length - 1 - v];
            createjs.Tween.get(q, { override: !0 })
                .wait((300 * v) / 2)
                .to({ x: 0 }, 300, createjs.Ease.cubicOut)
                .call(
                    function (t) {
                        t.visible = !1;
                    },
                    [q]
                );
        }
    };
    var p = this;
    this._init(a, c, b, d);
}
function CAreYouSurePanel(a) {
    var c, b, d, e, f, g, m, h, l, n, r;
    this._init = function (p) {
        f = new createjs.Shape();
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.on("click", function () {});
        f.visible = !1;
        g = new createjs.Container();
        s_oStage.addChild(f, g);
        var v = s_oSpriteLibrary.getSprite("small_msg_box"),
            q = createBitmap(v);
        q.regX = v.width / 2;
        q.regY = v.height / 2;
        q.x = 0;
        g.addChild(q);
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT + v.height / 2;
        c = g.x;
        b = g.y;
        var t = v.width - 100;
        q = 0;
        var w = -50;
        h = new CTLText(g, q - t / 2, w - 60, t, 120, 48, "center", FONT_STROKE, PRIMARY_FONT, 1, 2, 2, p, !0, !0, !0, !1);
        h.setOutline(FONT_OUTLINE);
        m = new CTLText(g, q - t / 2, w - 60, t, 120, 48, "center", FONT_COLOR, PRIMARY_FONT, 1, 2, 2, p, !0, !0, !0, !1);
        w = 90;
        q = v.width / 2;
        p = s_oSpriteLibrary.getSprite("but_yes");
        v = p.width / 2 + 20;
        d = new CGfxButton(q - v, w, p, g);
        d.addEventListenerWithParams(ON_MOUSE_UP, this.triggerEvent, this, ON_PRESS_YES);
        e = new CGfxButton(-q + v, w, s_oSpriteLibrary.getSprite("but_no"), g);
        e.addEventListenerWithParams(ON_MOUSE_UP, this.triggerEvent, this, ON_PRESS_NO);
        e.pulseAnimation();
        this.hide();
        l = [];
        n = [];
        r = [];
    };
    this.show = function () {
        f.alpha = 0;
        g.x = c;
        g.y = b;
        g.visible = !0;
        f.visible = !0;
        createjs.Tween.get(g).to({ y: CANVAS_HEIGHT / 2 - 40 }, 500, createjs.Ease.quartIn);
        createjs.Tween.get(f).to({ alpha: 0.7 }, 500);
        this.blockButtons(!1);
    };
    this.hide = function () {
        f.visible = !1;
        g.visible = !1;
        this.blockButtons(!0);
    };
    this.setText = function (p) {
        h.refreshText(p);
        m.refreshText(p);
    };
    this.blockButtons = function (p) {
        e.block(p);
        d.block(p);
    };
    this.triggerEvent = function (p) {
        l[p] && l[p].call(n[p], r[p]);
    };
    this.addEventListener = function (p, v, q, t) {
        l[p] = v;
        n[p] = q;
        r[p] = t;
    };
    this.unload = function () {
        e.unload();
        d.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(g);
        f.removeAllEventListeners();
    };
    this._init(a);
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function () {
        if (this._bFitText) {
            for (
                var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) &&
                !(a--, (this._oText.font = a + "px " + this._szFont), (this._oText.lineHeight = Math.round(a * this._fLineHeightFactor)), this.__updateY(), this.__verticalAlign(), 8 > a);

            );
            this._iFontSize = a;
        }
    },
    __verticalAlign: function () {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -= (a - this._iHeight) / 2 + this._iPaddingV;
        }
    },
    __updateY: function () {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize);
        }
    },
    __createText: function (a) {
        this._bDebug && ((this._oDebugShape = new createjs.Shape()), this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a, this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH;
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a);
    },
    setVerticalAlign: function (a) {
        this._bVerticalAlign = a;
    },
    setVisible: function (a) {
        this._oText.visible = a;
    },
    setOutline: function (a) {
        null !== this._oText && (this._oText.outline = a);
    },
    setShadow: function (a, c, b, d) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, c, b, d));
    },
    setColor: function (a) {
        this._oText.color = a;
    },
    setAlpha: function (a) {
        this._oText.alpha = a;
    },
    setY: function (a) {
        this._y = this._oText.y = a;
        this.updateDebug();
    },
    setX: function (a) {
        this._x = this._oText.x = a;
        this.updateDebug();
    },
    updateDebug: function () {
        this._bDebug && ((this._oDebugShape.graphics.command.x = this._x), (this._oDebugShape.graphics.command.y = this._y));
    },
    removeTweens: function () {
        createjs.Tween.removeTweens(this._oText);
    },
    getText: function () {
        return this._oText;
    },
    getString: function () {
        return this._oText.text;
    },
    getX: function () {
        return this._x;
    },
    getY: function () {
        return this._y;
    },
    getFontSize: function () {
        return this._iFontSize;
    },
    getBounds: function () {
        return this._oText.getBounds();
    },
    refreshText: function (a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign();
    },
};
function CTLText(a, c, b, d, e, f, g, m, h, l, n, r, p, v, q, t, w) {
    this._oContainer = a;
    this._x = c;
    this._y = b;
    this._iWidth = d;
    this._iHeight = e;
    this._bMultiline = t;
    this._iFontSize = f;
    this._szAlign = g;
    this._szColor = m;
    this._szFont = h;
    this._iPaddingH = n;
    this._iPaddingV = r;
    this._bVerticalAlign = q;
    this._bFitText = v;
    this._bDebug = w;
    this._oDebugShape = null;
    this._fLineHeightFactor = l;
    this._oText = null;
    p && this.__createText(p);
}
!(function () {
    function a(e) {
        var f = e;
        if (d[f]) f = d[f];
        else {
            for (var g = f, m, h = [], l = 0; g; ) {
                if (null !== (m = b.text.exec(g))) h.push(m[0]);
                else if (null !== (m = b.modulo.exec(g))) h.push("%");
                else if (null !== (m = b.placeholder.exec(g))) {
                    if (m[2]) {
                        l |= 1;
                        var n = [],
                            r = m[2],
                            p;
                        if (null !== (p = b.key.exec(r)))
                            for (n.push(p[1]); "" !== (r = r.substring(p[0].length)); )
                                if (null !== (p = b.key_access.exec(r))) n.push(p[1]);
                                else if (null !== (p = b.index_access.exec(r))) n.push(p[1]);
                                else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        m[2] = n;
                    } else l |= 2;
                    if (3 === l) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    h.push({ placeholder: m[0], param_no: m[1], keys: m[2], sign: m[3], pad_char: m[4], align: m[5], width: m[6], precision: m[7], type: m[8] });
                } else throw new SyntaxError("[sprintf] unexpected placeholder");
                g = g.substring(m[0].length);
            }
            f = d[f] = h;
        }
        g = arguments;
        m = 1;
        h = f.length;
        n = "";
        var v, q;
        for (r = 0; r < h; r++)
            if ("string" === typeof f[r]) n += f[r];
            else if ("object" === typeof f[r]) {
                p = f[r];
                if (p.keys)
                    for (l = g[m], v = 0; v < p.keys.length; v++) {
                        if (void 0 == l) throw Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', p.keys[v], p.keys[v - 1]));
                        l = l[p.keys[v]];
                    }
                else l = p.param_no ? g[p.param_no] : g[m++];
                b.not_type.test(p.type) && b.not_primitive.test(p.type) && l instanceof Function && (l = l());
                if (b.numeric_arg.test(p.type) && "number" !== typeof l && isNaN(l)) throw new TypeError(a("[sprintf] expecting number but found %T", l));
                b.number.test(p.type) && (q = 0 <= l);
                switch (p.type) {
                    case "b":
                        l = parseInt(l, 10).toString(2);
                        break;
                    case "c":
                        l = String.fromCharCode(parseInt(l, 10));
                        break;
                    case "d":
                    case "i":
                        l = parseInt(l, 10);
                        break;
                    case "j":
                        l = JSON.stringify(l, null, p.width ? parseInt(p.width) : 0);
                        break;
                    case "e":
                        l = p.precision ? parseFloat(l).toExponential(p.precision) : parseFloat(l).toExponential();
                        break;
                    case "f":
                        l = p.precision ? parseFloat(l).toFixed(p.precision) : parseFloat(l);
                        break;
                    case "g":
                        l = p.precision ? String(Number(l.toPrecision(p.precision))) : parseFloat(l);
                        break;
                    case "o":
                        l = (parseInt(l, 10) >>> 0).toString(8);
                        break;
                    case "s":
                        l = String(l);
                        l = p.precision ? l.substring(0, p.precision) : l;
                        break;
                    case "t":
                        l = String(!!l);
                        l = p.precision ? l.substring(0, p.precision) : l;
                        break;
                    case "T":
                        l = Object.prototype.toString.call(l).slice(8, -1).toLowerCase();
                        l = p.precision ? l.substring(0, p.precision) : l;
                        break;
                    case "u":
                        l = parseInt(l, 10) >>> 0;
                        break;
                    case "v":
                        l = l.valueOf();
                        l = p.precision ? l.substring(0, p.precision) : l;
                        break;
                    case "x":
                        l = (parseInt(l, 10) >>> 0).toString(16);
                        break;
                    case "X":
                        l = (parseInt(l, 10) >>> 0).toString(16).toUpperCase();
                }
                if (b.json.test(p.type)) n += l;
                else {
                    if (!b.number.test(p.type) || (q && !p.sign)) var t = "";
                    else (t = q ? "+" : "-"), (l = l.toString().replace(b.sign, ""));
                    v = p.pad_char ? ("0" === p.pad_char ? "0" : p.pad_char.charAt(1)) : " ";
                    var w = p.width - (t + l).length;
                    w = p.width ? (0 < w ? v.repeat(w) : "") : "";
                    n += p.align ? t + l + w : "0" === v ? t + w + l : w + t + l;
                }
            }
        return n;
    }
    function c(e, f) {
        return a.apply(null, [e].concat(f || []));
    }
    var b = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/,
        },
        d = Object.create(null);
    "undefined" !== typeof exports && ((exports.sprintf = a), (exports.vsprintf = c));
    "undefined" !== typeof window &&
        ((window.sprintf = a),
        (window.vsprintf = c),
        "function" === typeof define &&
            define.amd &&
            define(function () {
                return { sprintf: a, vsprintf: c };
            }));
})();
function CCreditsPanel() {
    var a, c, b, d, e, f;
    this._init = function () {
        b = new createjs.Shape();
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.alpha = 0;
        b.on("mousedown", function () {});
        s_oStage.addChild(b);
        d = new createjs.Container();
        s_oStage.addChild(d);
        var g = s_oSpriteLibrary.getSprite("small_msg_box"),
            m = createBitmap(g);
        m.x = 0;
        m.y = 0;
        m.regX = g.width / 2;
        m.regY = g.height / 2;
        d.addChild(m);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        var h = g.width;
        new CTLText(d, -(h / 2), 99, h, 42, 32, "center", FONT_STROKE, PRIMARY_FONT, 1, 2, 2, "www.codethislab.com", !0, !0, !1, !1).setOutline(FONT_OUTLINE);
        new CTLText(d, -(h / 2), 99, h, 42, 32, "center", FONT_COLOR, PRIMARY_FONT, 1, 2, 2, "www.codethislab.com", !0, !0, !1, !1);
        h = s_oSpriteLibrary.getSprite("ctl_logo");
        f = createBitmap(h);
        f.regX = h.width / 2;
        f.regY = h.height / 2;
        f.y = -30;
        d.addChild(f);
        c = new createjs.Shape();
        c.graphics.beginFill("#0f0f0f").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0.01;
        a = c.on("click", this._onLogoButRelease);
        d.addChild(c);
        h = s_oSpriteLibrary.getSprite("but_exit");
        e = new CGfxButton(m.x + m.regX - h.width / 2 - 10, m.y - m.regY + h.height / 2 + 10, h, d);
        e.addEventListener(ON_MOUSE_UP, this.unload, this);
        b.alpha = 0;
        createjs.Tween.get(b).to({ alpha: 0.7 }, 400, createjs.Ease.cubicOut);
        d.x = -g.width;
        createjs.Tween.get(d)
            .wait(400)
            .to({ x: CANVAS_WIDTH / 2 }, 1e3, createjs.Ease.backOut);
    };
    this.unload = function () {
        c.off("click", a);
        e.block();
        new createjs.Tween.get(b).to({ alpha: 0 }, 500);
        new createjs.Tween.get(d).to({ y: CANVAS_HEIGHT + 400 }, 800, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(b);
            s_oStage.removeChild(d);
            e.unload();
        });
        b.removeAllEventListeners();
    };
    this._onLogoButRelease = function () {
        window.open("http://www.codethislab.com/index.php?&l=en");
    };
    this._init();
}
var PRESS_DOWN_KEY = 0,
    PRESS_UP_KEY = 1,
    PRESS_NITRO_KEY = 2,
    ON_KEY_PRESS = 0,
    ON_KEY_RELEASE = 1;
function CController(a) {
    var c, b, d, e, f, g;
    function m(z) {
        z || (z = window.event);
        if (v) {
            var u = null;
            switch (z.keyCode) {
                case 38:
                    u = PRESS_UP_KEY;
                    z.preventDefault();
                    break;
                case 40:
                    u = PRESS_DOWN_KEY;
                    z.preventDefault();
                    break;
                case 32:
                    (u = PRESS_NITRO_KEY), z.preventDefault();
            }
            w.triggerEvent(z, ON_KEY_PRESS, u);
        }
    }
    function h(z) {
        if (v) {
            z || (z = window.event);
            var u = null;
            switch (z.keyCode) {
                case 32:
                    (u = PRESS_NITRO_KEY), z.preventDefault();
            }
            w.triggerEvent(z, ON_KEY_RELEASE, u);
        }
    }
    var l, n, r, p, v, q, t;
    this._init = function (z) {
        v = !0;
        q = [];
        t = [];
        l = z;
        s_bMobile
            ? ((z = s_oSpriteLibrary.getSprite("but_arrow_down")),
              (c = z.width / 2 + 10),
              (b = CANVAS_HEIGHT - z.height / 2 - 10),
              (r = new CGfxButton(c, b, z, l)),
              r.addEventListener(ON_MOUSE_DOWN, this._onPressDownBut, this),
              (z = s_oSpriteLibrary.getSprite("but_arrow_up")),
              (f = z.width / 2 + 10),
              (g = b - z.height - 10),
              (n = new CGfxButton(f, g, z, l)),
              n.addEventListener(ON_MOUSE_DOWN, this._onPressUpBut, this),
              (z = s_oSpriteLibrary.getSprite("but_boost")),
              (d = CANVAS_WIDTH - z.width / 2 - 10),
              (e = CANVAS_HEIGHT - z.height / 2 - 10),
              (p = new CGfxButton(d, e, z, l)),
              p.setVisible(!1),
              p.addEventListener(ON_MOUSE_DOWN, this._onBoostPress, this),
              p.addEventListener(ON_MOUSE_UP, this._onBoostRelease, this),
              this.refreshButtonPos())
            : ((document.onkeydown = m), (document.onkeyup = h));
    };
    this.unload = function () {
        s_bMobile ? (n.unload(), r.unload(), p.unload()) : ((document.onkeydown = null), (document.onkeyup = null));
    };
    this.refreshButtonPos = function () {
        s_bMobile && (r.setPosition(c + s_iOffsetX, b - s_iOffsetY), n.setPosition(f + s_iOffsetX, g - s_iOffsetY), p.setPosition(d - s_iOffsetX, e - s_iOffsetY));
    };
    this.setInput = function (z) {
        v = z;
        s_bMobile && (r.setVisible(z), n.setVisible(z), p.setVisible(z));
    };
    this.showMobileButtons = function () {
        p.setVisible(!0);
        r.setVisible(!0);
        n.setVisible(!0);
    };
    this.hideMobileButtons = function () {
        p.setVisible(!1);
        r.setVisible(!1);
        n.setVisible(!1);
    };
    this._onPressDownBut = function () {
        v && w.triggerEvent(null, ON_KEY_PRESS, PRESS_DOWN_KEY);
    };
    this._onPressUpBut = function () {
        v && w.triggerEvent(null, ON_KEY_PRESS, PRESS_UP_KEY);
    };
    this._onBoostPress = function () {
        v && w.triggerEvent(null, ON_KEY_PRESS, PRESS_NITRO_KEY);
    };
    this._onBoostRelease = function () {
        v && w.triggerEvent(null, ON_KEY_RELEASE, PRESS_NITRO_KEY);
    };
    this.triggerEvent = function (z, u, C) {
        q[u] && q[u].call(t[u], C);
    };
    this.addEventListener = function (z, u, C, D) {
        q[z] = u;
        t[z] = C;
    };
    var w = this;
    this._init(a);
}
function CEffectText(a, c) {
    var b, d, e, f, g, m, h;
    this._init = function (l, n) {
        e = void 0 !== n ? n : s_oStage;
        f = new createjs.Container();
        f.visible = !1;
        e.addChild(f);
        m = new CTLText(f, -200, -30, 400, 60, 50, "center", FONT_STROKE, PRIMARY_FONT, 1, 2, 2, l, !0, !0, !1, !1);
        m.setOutline(5);
        g = new CTLText(f, -200, -30, 400, 60, 50, "center", FONT_COLOR, PRIMARY_FONT, 1, 2, 2, l, !0, !0, !1, !1);
        b = CANVAS_WIDTH + m.getBounds().width - s_iOffsetX;
        d = CANVAS_HEIGHT / 2;
        f.x = b;
        f.y = d;
        h = null;
    };
    this.setText = function (l) {
        g.refreshText(l);
        m.refreshText(l);
    };
    this.startAnimation = function (l, n) {
        null === h &&
            ((f.x = b),
            (f.y = d),
            (f.visible = !0),
            createjs.Tween.get(f).to({ alpha: 1 }, 500, createjs.Ease.quadIn),
            (h = createjs.Tween.get(f)
                .to({ x: CANVAS_WIDTH / 2 }, 1e3, createjs.Ease.backOut)
                .call(function () {
                    createjs.Tween.get(f, { override: !0 })
                        .wait(500)
                        .to({ x: 0 - m.getBounds().x + s_iOffsetX, alpha: 0 }, 1e3)
                        .call(function () {
                            h = null;
                            l.call(n);
                        });
                })));
    };
    this.unload = function () {
        e.removeChild(f);
    };
    this._init(a, c);
}
function CEndPanel(a) {
    var c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n = this;
    this._init = function () {
        h = new createjs.Container();
        h.visible = !1;
        a.addChild(h);
        m = new createjs.Shape();
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c = m.on("click", function () {});
        h.addChild(m);
        l = new createjs.Container();
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2;
        h.addChild(l);
        b = s_oSpriteLibrary.getSprite("msg_box_big");
        var r = createBitmap(b);
        l.addChild(r);
        d = new CLeaderboardController(b.width / 2, 50, s_iTournament, l);
        f = new CGfxButton(b.width / 2 - 240, b.height - 70, s_oSpriteLibrary.getSprite("but_home"), l);
        f.addEventListener(ON_MOUSE_UP, this._onHome, this);
        e = new CGfxButton(b.width / 2, b.height - 70, s_oSpriteLibrary.getSprite("but_restart"), l);
        e.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        g = new CGfxButton(b.width / 2 + 240, b.height - 70, s_oSpriteLibrary.getSprite("but_next"), l);
        g.addEventListener(ON_MOUSE_UP, this._onNext, this);
        l.regX = b.width / 2;
        l.regY = b.height / 2;
    };
    this.unload = function () {
        m.on("click", c);
        f.unload();
        e.unload();
        g.unload();
    };
    this.show = function (r, p) {
        d.refreshRows(s_aLeaderBoards[s_iTournament], !1);
        d.setVisible(!1);
        h.visible = !0;
        m.alpha = 0;
        createjs.Tween.get(m).to({ alpha: 0.7 }, 400, createjs.Ease.cubicOut);
        l.x = -b.width;
        setVolume("soundtrack", 0);
        var v = playSound("level_win", 1, !1);
        g.setVisible(!0);
        e.setX(b.width / 2);
        d.setVisible(!0);
        d.showPointsInRow(r, p);
        v.on("end", function () {
            setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        });
        createjs.Tween.get(l)
            .to({ x: CANVAS_WIDTH / 2 }, 1e3, createjs.Ease.backOut)
            .call(function () {});
    };
    this.hide = function () {
        createjs.Tween.get(m).to({ alpha: 0 }, 400, createjs.Ease.cubicOut);
        createjs.Tween.get(l)
            .to({ x: -b.width }, 400, createjs.Ease.backIn)
            .call(function () {
                h.visible = !1;
            });
    };
    this._onHome = function () {
        s_oGame._exitGame();
    };
    this._onRestart = function () {
        s_oGame.restart();
        n.hide();
    };
    this._onNext = function () {
        s_oGame.nextLevel();
        n.hide();
    };
    this._init();
}
function CScoreTextAnim(a, c, b, d, e, f, g) {
    var m, h, l, n;
    this._init = function (r, p, v, q, t, w) {
        m = [];
        h = [];
        n = new createjs.Container();
        n.x = p;
        n.y = v;
        n.alpha = 0;
        g.addChild(n);
        r = new createjs.Text(r, t + "px " + PRIMARY_FONT, q);
        r.textAlign = w;
        n.addChild(r);
        w = n.getBounds();
        n.cache(w.x, w.y, w.width, w.height);
        var z = this;
        createjs.Tween.get(n)
            .to({ alpha: 1 }, 200, createjs.Ease.quadIn)
            .call(function () {
                m[ON_SHOW_ANIM_SCORE_TEXT] && m[ON_SHOW_ANIM_SCORE_TEXT].call(h[ON_SHOW_ANIM_SCORE_TEXT], z);
            });
    };
    this.addEventListener = function (r, p, v) {
        m[r] = p;
        h[r] = v;
    };
    this.addEventListenerWithParams = function (r, p, v, q) {
        m[r] = p;
        h[r] = v;
        l = q;
    };
    this.moveLeft = function (r, p, v, q) {
        r = n.x - r;
        var t = this;
        createjs.Tween.get(n).wait(p).to({ alpha: 0 }, v, createjs.Ease.quintIn);
        createjs.Tween.get(n)
            .wait(p)
            .to({ x: r }, v, createjs.Ease.sineIn)
            .call(function () {
                t.unload();
                m[ON_END_ANIM_SCORE_TEXT] && m[ON_END_ANIM_SCORE_TEXT].call(h[ON_END_ANIM_SCORE_TEXT], l);
            });
    };
    this.moveUp = function () {
        var r = n.y - 400,
            p = this;
        createjs.Tween.get(n)
            .to({ y: r }, 1500, createjs.Ease.sineIn)
            .call(function () {
                p.unload();
            });
        createjs.Tween.get(n).wait(800).to({ alpha: 0 }, 500);
    };
    this.unload = function () {
        g.removeChild(n);
    };
    this._init(a, c, b, d, e, f);
}
function CAlertSavingBox(a, c) {
    var b, d, e, f, g;
    this._init = function (l) {
        g = new createjs.Container();
        h.addChild(g);
        d = new createjs.Shape();
        d.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        b = d.on("click", function () {});
        g.addChild(d);
        f = new createjs.Container();
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        g.addChild(f);
        var n = s_oSpriteLibrary.getSprite("small_msg_box"),
            r = createBitmap(n);
        f.addChild(r);
        new CTLText(f, 20, 10, n.width - 40, 190, 28, "center", "#fff", PRIMARY_FONT, 1, 14, 7, l, !0, !0, !0, !1);
        e = new CGfxButton(n.width / 2, n.height / 2 + 100, s_oSpriteLibrary.getSprite("but_yes"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButOk, this);
        f.regX = f.getBounds().width / 2;
        f.regY = f.getBounds().height / 2;
        f.scale = 0.01;
        g.visible = !0;
        createjs.Tween.get(d).to({ alpha: 0.8 }, 500, createjs.Ease.cubicOut);
        createjs.Tween.get(f).wait(250).to({ scale: 0.95 }, 500, createjs.Ease.backOut);
    };
    this._onButOk = function () {
        m.unload();
    };
    this.unload = function () {
        d.off("click", b);
        e.unload();
        h.removeChild(g);
    };
    var m = this;
    var h = c;
    this._init(a);
}
function CBackgroundController(a, c) {
    var b, d, e, f, g, m, h, l, n, r, p, v, q;
    this._init = function (t) {
        n = [];
        r = [];
        q = new createjs.Container();
        c.addChild(q);
        this.reset();
        this._initHighlights();
        playSound("crowd_idle", 0, !0);
    };
    this.addEventListener = function (t, w, z) {
        n[t] = w;
        r[t] = z;
    };
    this.unload = function () {};
    this.reset = function () {
        if (v) for (var t = 0; t < v.length; t++) v[t].unload();
        m = g = l = 0;
        h = 1;
        b = !1;
        d = -1;
        e = 1;
        v = [];
        var w = 0;
        for (t = 0; 2 > t; t++) (v[t] = new CRoadTile(w, CANVAS_HEIGHT, 0, 0, q)), (w += CANVAS_WIDTH);
    };
    this._initHighlights = function () {
        p = [];
        for (var t = 0; t < LANE_INFOS.length; t++) {
            var w = new CLaneHighlight(t, LANE_INFOS[t].y, q);
            p[t] = w;
        }
    };
    this.showAllHighlights = function () {
        for (var t = 0; t < p.length; t++) p[t].show(!1);
    };
    this.hideAllHighlights = function () {
        for (var t = 0; t < p.length; t++) p[t].hide(!0);
    };
    this.highlightLane = function (t) {
        p[t].show(!0);
    };
    this.unlightLane = function (t) {
        p[t].hide();
    };
    this.setNumTiles = function (t, w) {
        f = t;
    };
    this.startUpdate = function () {
        b = !0;
    };
    this.showFinishLine = function () {};
    this.getCurTile = function () {
        return g;
    };
    this.update = function (t, w) {
        if (b) {
            -1 < d && ((e -= 0.002), (t *= e));
            for (var z = 0; z < v.length; z++)
                if ((v[z].decreaseX(t), -1 < d && 0 >= v[d].getX())) {
                    v[d].setX(0);
                    b = !1;
                    n[ON_FINISH_LINE] && n[ON_FINISH_LINE].call(r[ON_FINISH_LINE]);
                    tweenVolume("crowd_idle", 1, 1e3);
                    break;
                } else
                    -1 === d &&
                        v[z].getX() <= -CANVAS_WIDTH &&
                        (v[z].setX(v[0 === z ? 1 : 0].getX() + CANVAS_WIDTH - t),
                        v[z].changeTiles(Math.floor(2 * Math.random()), l),
                        w || g++,
                        m++,
                        m === h && ((m = 0), (h = Math.floor(Math.random() * MAX_TILE_REPETITION) + 1), (l = Math.floor(6 * Math.random())), CROWD_BOUNDS.includes(l) ? tweenVolume("crowd_idle", 1, 2e3) : tweenVolume("crowd_idle", 0, 2e3)),
                        g > f && ((d = z), v[z].changeTiles(3, FINISH_BOUND)));
        }
    };
    this._init(a);
}
function CRoadTile(a, c, b, d, e) {
    var f, g, m, h, l;
    this._init = function (n, r, p, v) {
        f = p;
        g = v;
        l = new createjs.Container();
        l.x = n;
        l.y = r;
        e.addChild(l);
        m = createBitmap(s_oSpriteLibrary.getSprite("road_" + p));
        m.y = 365;
        l.addChild(m);
        n = s_oSpriteLibrary.getSprite("bound_" + v);
        h = createBitmap(n);
        h.y = 384;
        h.regY = n.height;
        l.addChild(h);
        l.regY = CANVAS_HEIGHT;
    };
    this.unload = function () {
        e.removeChild(l);
    };
    this.changeTiles = function (n, r) {
        m.image = s_oSpriteLibrary.getSprite("road_" + n);
        var p = s_oSpriteLibrary.getSprite("bound_" + r);
        h.image = p;
        h.regY = p.height;
    };
    this.setX = function (n) {
        l.x = n;
    };
    this.decreaseX = function (n) {
        l.x -= n;
    };
    this.getX = function () {
        return l.x;
    };
    this.getRoad = function () {
        return f;
    };
    this.getBound = function () {
        return g;
    };
    this._init(a, c, b, d);
}
function CCyclist(a, c, b, d, e, f, g, m, h) {
    var l,
        n,
        r,
        p = d,
        v = f,
        q,
        t,
        w,
        z,
        u = a,
        C,
        D,
        B,
        E,
        M,
        A,
        R,
        K;
    this._init = function (F, Q, T) {
        w = t = 0;
        B = [];
        E = [];
        K = new createjs.Container();
        K.visible = !1;
        K.x = F;
        K.y = Q;
        h.addChild(K);
        this.reset();
        C = "start";
        D = {};
        for (var P in PART_CYCLIST) {
            F = [];
            for (Q = 0; Q < NUM_FRAMES_CYCLIST; Q++) F.push(s_oSpriteLibrary.getSprite(P + "_" + T[P] + "_" + Q));
            Q = new createjs.SpriteSheet({
                images: F,
                framerate: 50,
                frames: { width: F[0].width, height: F[0].height },
                animations: { start: 0, normal: [0, 25], normal_0: [5, 25, "normal"], normal_1: [10, 25, "normal"], normal_2: [15, 25, "normal"], prepare_rush: [26, 32, "rush"], rush: [33, NUM_FRAMES_CYCLIST - 1] },
            });
            D[P] = createSprite(Q, C, 0, 0, F[0].width, F[0].height);
            D[P].x = PART_CYCLIST[P].x;
            D[P].y = PART_CYCLIST[P].y;
            K.addChild(D[P]);
        }
        0 === u && ((z = 100), (M = new CStaminaController(150, -30, K)));
        R = new CTLText(K, CYCLIST_WIDTH / 2 - 100, 0, 200, 40, 20, "center", "#06142F", PRIMARY_FONT, 1, 2, 2, g, !0, !0, !0, !1);
        R.setOutline(4);
        A = new CTLText(K, CYCLIST_WIDTH / 2 - 100, 0, 200, 40, 20, "center", FONT_COLOR, PRIMARY_FONT, 1, 2, 2, g, !0, !0, !0, !1);
        K.regX = CYCLIST_WIDTH / 2;
        K.regY = CYCLIST_HEIGHT - Math.round(30 * p);
        K.scale = p;
    };
    this.addEventListener = function (F, Q, T) {
        B[F] = Q;
        E[F] = T;
    };
    this.unload = function () {
        h.removeChild(K);
    };
    this.reset = function () {
        r = n = l = !1;
        q = c;
        v += Math.random() - 0.5;
        K.x = c;
        K.visible = !0;
    };
    this.changeAnim = function (F, Q, T) {
        K.visible = !0;
        C = F;
        setTimeout(function () {
            "normal" === F && (F = "normal_" + Math.floor(2 * Math.random()));
            for (var P in D) (D[P].framerate = Q), D[P].gotoAndPlay(F);
        }, T);
    };
    this.changeFramerate = function (F) {
        for (var Q in D) D[Q].framerate = F;
    };
    this.changePart = function (F, Q) {
        for (var T = [], P = 0; P < NUM_FRAMES_CYCLIST; P++) T.push(s_oSpriteLibrary.getSprite(F + "_" + Q + "_" + P));
        T = new createjs.SpriteSheet({
            images: T,
            framerate: 50,
            frames: { width: T[0].width, height: T[0].height },
            animations: { start: 0, normal: [0, 25], normal_0: [5, 25, "normal"], normal_1: [10, 25, "normal"], normal_2: [15, 25, "normal"], prepare_rush: [26, 32, "rush"], rush: [33, NUM_FRAMES_CYCLIST - 1] },
        });
        D[F].spriteSheet = T;
    };
    this.setUpdate = function (F) {
        l = F;
    };
    this.stopAllAnims = function () {
        for (var F in D) D[F].gotoAndPlay("start");
    };
    this.changePosition = function (F, Q) {
        K.y = K.y > F ? K.y - 1 : K.y + 1;
        s_oGame.sortCyclist();
        r = !0;
        createjs.Tween.get(K, { override: !0 })
            .to({ y: F, scale: Q }, 800, createjs.Ease.sineInOut)
            .call(function () {
                r = !1;
                B[ON_END_CYCLIST_MOVE] && B[ON_END_CYCLIST_MOVE].call(E[ON_END_CYCLIST_MOVE]);
            })
            .addEventListener("change", function () {
                s_oGame.sortCyclist();
            });
        p = Q;
    };
    this.setPart = function (F, Q) {
        for (var T = [], P = 0; P < NUM_FRAMES_CYCLIST; P++) T.push(s_oSpriteLibrary.getSprite(F + "_" + Q + "_" + P));
        D[F].spriteSheet = new createjs.SpriteSheet({
            images: T,
            framerate: 50,
            frames: { width: T[0].width, height: T[0].height },
            animations: { start: 0, normal: [0, 25], normal_0: [5, 25, "normal"], normal_1: [10, 25, "normal"], normal_2: [15, 25, "normal"], prepare_rush: [26, 32, "rush"], rush: [33, NUM_FRAMES_CYCLIST - 1] },
        });
    };
    this.restoreStamina = function () {
        z = 100;
        M.refreshStamina(z);
    };
    this.increaseStamina = function (F) {
        z += F;
        100 < z && (z = 100);
        M.refreshStamina(z);
    };
    this.decreaseStamina = function (F) {
        z -= F;
        0 < z ? M.refreshStamina(z / 100) : ((z = 0), !1 === M.isTweening() && M.highlight());
        return z;
    };
    this.increasePoints = function (F) {
        t = w;
        w += F;
    };
    this.moveOnX = function (F) {
        K.x += F;
    };
    this.setPoints = function (F) {
        w = t = F;
        0 < w && (A.refreshText(g + ": " + w + TEXT_PT), R.refreshText(g + ": " + w + TEXT_PT));
    };
    this.setArrived = function (F) {
        n = F;
    };
    this.setID = function (F) {
        u = F;
    };
    this.getX = function () {
        return q;
    };
    this.getSpeed = function () {
        return v;
    };
    this.isUpdating = function () {
        return l;
    };
    this.getLane = function () {
        return e;
    };
    this.getName = function () {
        return g;
    };
    this.getCurAnim = function () {
        return C;
    };
    this.getID = function () {
        return u;
    };
    this.isArrived = function () {
        return n;
    };
    this.getPoints = function () {
        return w;
    };
    this.getPrevPoints = function () {
        return t;
    };
    this.isTweening = function () {
        return r;
    };
    this.getStamina = function () {
        return z;
    };
    this.update = function (F, Q) {
        if (l)
            return (
                (q -= F - v),
                q < CANVAS_WIDTH + CYCLIST_WIDTH &&
                    q > -CYCLIST_WIDTH &&
                    (!1 === K.visible
                        ? (Q ? this.changeAnim("prepare_rush", CYCLIST_RUSH_INFOS.cyclist_framerate, Math.floor(500 * Math.random())) : this.changeAnim("normal", CYCLIST_NORMAL_INFOS.cyclist_framerate, Math.floor(500 * Math.random())),
                          B[ON_CYCLIST_IN_CANVAS] && B[ON_CYCLIST_IN_CANVAS].call(E[ON_CYCLIST_IN_CANVAS], !0, e, this))
                        : Q && -1 === C.indexOf("rush") && this.changeAnim("prepare_rush", CYCLIST_RUSH_INFOS.cyclist_framerate, Math.floor(500 * Math.random())),
                    (K.visible = !0),
                    (K.x = q)),
                K.visible && (q < -CYCLIST_WIDTH || q > CANVAS_WIDTH + CYCLIST_WIDTH) && ((K.visible = !1), this.stopAllAnims(), B[ON_CYCLIST_IN_CANVAS] && B[ON_CYCLIST_IN_CANVAS].call(E[ON_CYCLIST_IN_CANVAS], !1, e, this)),
                q
            );
    };
    this._init(c, b, m);
}
function CTournamentSelection() {
    var a,
        c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l = null,
        n = null,
        r,
        p,
        v,
        q,
        t;
    this._init = function () {
        var w = createBitmap(s_oSpriteLibrary.getSprite("bg_tournament"));
        s_oStage.addChild(w);
        m = [];
        h = [];
        w = [CANVAS_WIDTH / 2 - 300, CANVAS_WIDTH / 2, CANVAS_WIDTH / 2 + 300];
        for (var z = 0; z < NUM_TOURNAMENTS; z++) {
            var u = s_oSpriteLibrary.getSprite("but_tournament_" + z),
                C = new CButTournament(w[z], CANVAS_HEIGHT / 2, z, u, " ", "#fff", s_oStage);
            C.addEventListenerWithParams(ON_MOUSE_UP, this._onTournamentSelected, this, z);
            m.push(C);
            C = w[z] + 40;
            if (s_bStorageAvailable) {
                var D = new CGfxButton(w[z] - 40, CANVAS_HEIGHT / 2 + u.height / 2 + 50, s_oSpriteLibrary.getSprite("but_delete_save"), s_oStage);
                D.addEventListenerWithParams(ON_MOUSE_UP, this.onDeleteTournamentSavings, this, z);
                h.push(D);
            } else C = w[z];
            D = new CGfxButton(C, CANVAS_HEIGHT / 2 + u.height / 2 + 50, s_oSpriteLibrary.getSprite("but_leaderboard"), s_oStage);
            D.addEventListenerWithParams(ON_MOUSE_UP, this.onInfoTournament, this, z);
            h.push(D);
        }
        w = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - w.width / 2 - 10;
        f = w.height / 2 + 10;
        v = new CGfxButton(e, f, w, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            (u = s_oSpriteLibrary.getSprite("audio_icon")), (b = e - u.width / 2 - 10), (d = f), (q = new CToggle(b, d, u, s_bAudioActive, s_oStage)), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        w = window.document;
        z = w.documentElement;
        l = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullScreen || z.msRequestFullscreen;
        n = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (l = !1);
        l &&
            screenfull.isEnabled &&
            ((u = s_oSpriteLibrary.getSprite("but_fullscreen")), (a = u.width / 4 + 10), (c = u.height / 2 + 10), (p = new CToggle(a, c, u, s_bFullscreen, s_oStage)), p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        r = new CAreYouSurePanel(TEXT_CONFIRM_DELETE);
        r.addEventListener(ON_PRESS_YES, this._onPressUpButYesExit, this);
        r.addEventListener(ON_PRESS_NO, this._onPressUpButNoExit, this);
        t = new createjs.Shape();
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.alpha = 1;
        s_oStage.addChild(t);
        createjs.Tween.get(t)
            .to({ alpha: 0 }, 500, createjs.Ease.cubicOut)
            .call(function () {});
        this.refreshButtonPos();
        for (z = 0; z < NUM_TOURNAMENTS; z++) s_aLeaderBoards[z] = getLeaderboard(z);
    };
    this.refreshButtonPos = function () {
        v.setPosition(e - s_iOffsetX, f + s_iOffsetY);
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || q.setPosition(b - s_iOffsetX, s_iOffsetY + d);
        l && screenfull.isEnabled && p.setPosition(a + s_iOffsetX, c + s_iOffsetY);
    };
    this.unload = function () {
        v.unload();
        l && screenfull.isEnabled && p.unload();
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || q.unload();
        for (var w = 0; w < m.length; w++) m[w].unload();
        for (w = 0; w < h.length; w++) h[w].unload();
        r.unload();
        s_oStage.removeAllChildren();
        s_oTournamentPanel = null;
    };
    this._onExit = function () {
        s_oTournamentPanel.unload();
        s_oMain.gotoMenu();
    };
    this.resetFullscreenBut = function () {
        l && screenfull.isEnabled && p.setActive(s_bFullscreen);
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? n.call(window.document) : l.call(window.document.documentElement);
        sizeHandler();
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    this._onTournamentSelected = function (w) {
        s_iTournament = w;
        s_oTournamentPanel.unload();
        s_oMain.gotoGame(w);
    };
    this.onInfoTournament = function (w) {
        new CLeaderBoardPanel(w, s_oStage);
    };
    this.onDeleteTournamentSavings = function (w) {
        r.show();
        g = w;
    };
    this._onPressUpButNoExit = function () {
        r.hide();
    };
    this._onPressUpButYesExit = function () {
        r.hide();
        clearTournament(g);
        m[g].refreshTextTrack();
    };
    this._init();
    s_oTournamentPanel = this;
}
var s_oTournamentPanel = null;
function CButTournament(a, c, b, d, e, f, g) {
    var m, h, l, n, r, p, v, q, t, w, z;
    this._init = function (u, C, D, B, E, M) {
        m = !1;
        h = 1;
        n = [];
        r = [];
        z = createBitmap(B);
        l = B.height;
        t = new createjs.Container();
        t.x = u;
        t.y = C;
        t.regX = B.width / 2;
        t.regY = B.height / 2;
        s_bMobile || (t.cursor = "pointer");
        t.addChild(z);
        g.addChild(t);
        w = new CTLText(t, 65, l - 79, 60, 26, 25, "center", M, PRIMARY_FONT, 1, 0, 0, s_aLastLevels[D] + 1 + "/" + LEVEL_INFOS[D].length, !0, !0, !1, !1);
        this._initListener();
    };
    this.unload = function () {
        t.off("mousedown", p);
        t.off("pressup", v);
        g.removeChild(t);
    };
    this.setVisible = function (u) {
        t.visible = u;
    };
    this.setScale = function (u) {
        h = t.scaleX = t.scaleY = u;
    };
    this.enable = function () {
        m = !1;
    };
    this.disable = function () {
        m = !0;
    };
    this._initListener = function () {
        p = t.on("mousedown", this.buttonDown);
        v = t.on("pressup", this.buttonRelease);
    };
    this.addEventListener = function (u, C, D) {
        n[u] = C;
        r[u] = D;
    };
    this.addEventListenerWithParams = function (u, C, D, B) {
        n[u] = C;
        r[u] = D;
        q = B;
    };
    this.buttonRelease = function () {
        m || (playSound("press_but", 1, !1), (t.scaleX = h), (t.scaleY = h), n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(r[ON_MOUSE_UP], q));
    };
    this.buttonDown = function () {
        m || ((t.scaleX = 0.9 * h), (t.scaleY = 0.9 * h), n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN]));
    };
    this.setPosition = function (u, C) {
        t.x = u;
        t.y = C;
    };
    this.tweenPosition = function (u, C, D, B, E, M, A) {
        createjs.Tween.get(t)
            .wait(B)
            .to({ x: u, y: C }, D, E)
            .call(function () {
                void 0 !== M && M.call(A);
            });
    };
    this.setX = function (u) {
        t.x = u;
    };
    this.setY = function (u) {
        t.y = u;
    };
    this.refreshTextTrack = function () {
        w.refreshText(s_aLastLevels[b] + 1 + "/" + LEVEL_INFOS[b].length);
    };
    this.getButtonImage = function () {
        return t;
    };
    this.getX = function () {
        return t.x;
    };
    this.getY = function () {
        return t.y;
    };
    this.getSprite = function () {
        return t;
    };
    this.getScale = function () {
        return t.scaleX;
    };
    this._init(a, c, b, d, e, f);
}
for (var LEVEL_INFOS = [], k = 0; k < NUM_TOURNAMENTS; k++) LEVEL_INFOS[k] = [];
LEVEL_INFOS[0][0] = { max_dist_opponent: 1e4, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !1 };
LEVEL_INFOS[0][1] = { max_dist_opponent: 15e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
LEVEL_INFOS[0][2] = { max_dist_opponent: 15e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7500, hill: !0 };
LEVEL_INFOS[0][3] = { max_dist_opponent: 15e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 8e3, hill: !0 };
LEVEL_INFOS[0][4] = { max_dist_opponent: 16e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 8500, hill: !0 };
LEVEL_INFOS[0][5] = { max_dist_opponent: 16e3, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 5e3, hill: !0 };
LEVEL_INFOS[0][6] = { max_dist_opponent: 17e3, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 5500, hill: !0 };
LEVEL_INFOS[0][7] = { max_dist_opponent: 17e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[0][8] = { max_dist_opponent: 18e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[0][9] = { max_dist_opponent: 18e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[0][10] = { max_dist_opponent: 18e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[0][11] = { max_dist_opponent: 18e3, bg_index: 3, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !1 };
LEVEL_INFOS[0][12] = { max_dist_opponent: 18e3, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[0][13] = { max_dist_opponent: 19e3, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[0][14] = { max_dist_opponent: 19e3, bg_index: 4, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !1 };
LEVEL_INFOS[0][15] = { max_dist_opponent: 19e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[0][16] = { max_dist_opponent: 2e4, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[0][17] = { max_dist_opponent: 2e4, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[0][18] = { max_dist_opponent: 2e4, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[0][19] = { max_dist_opponent: 21e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[0][20] = { max_dist_opponent: 22e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
LEVEL_INFOS[1][0] = { max_dist_opponent: 1e4, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !1 };
LEVEL_INFOS[1][1] = { max_dist_opponent: 15e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
LEVEL_INFOS[1][2] = { max_dist_opponent: 15e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7500, hill: !0 };
LEVEL_INFOS[1][3] = { max_dist_opponent: 15e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 8e3, hill: !0 };
LEVEL_INFOS[1][4] = { max_dist_opponent: 16e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 8500, hill: !0 };
LEVEL_INFOS[1][5] = { max_dist_opponent: 16e3, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 5e3, hill: !0 };
LEVEL_INFOS[1][6] = { max_dist_opponent: 17e3, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 5500, hill: !0 };
LEVEL_INFOS[1][7] = { max_dist_opponent: 17e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[1][8] = { max_dist_opponent: 18e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[1][9] = { max_dist_opponent: 18e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[1][10] = { max_dist_opponent: 18e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[1][11] = { max_dist_opponent: 18e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[1][12] = { max_dist_opponent: 18e3, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[1][13] = { max_dist_opponent: 19e3, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[1][14] = { max_dist_opponent: 19e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
LEVEL_INFOS[1][15] = { max_dist_opponent: 19e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[1][16] = { max_dist_opponent: 2e4, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[1][17] = { max_dist_opponent: 2e4, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[1][18] = { max_dist_opponent: 2e4, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[1][19] = { max_dist_opponent: 21e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[1][20] = { max_dist_opponent: 22e3, bg_index: 5, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !1 };
LEVEL_INFOS[2][0] = { max_dist_opponent: 1e4, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !1 };
LEVEL_INFOS[2][1] = { max_dist_opponent: 15e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
LEVEL_INFOS[2][2] = { max_dist_opponent: 15e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7500, hill: !0 };
LEVEL_INFOS[2][3] = { max_dist_opponent: 15e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 8e3, hill: !0 };
LEVEL_INFOS[2][4] = { max_dist_opponent: 16e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 8500, hill: !0 };
LEVEL_INFOS[2][5] = { max_dist_opponent: 16e3, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 5e3, hill: !0 };
LEVEL_INFOS[2][6] = { max_dist_opponent: 17e3, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 5500, hill: !0 };
LEVEL_INFOS[2][7] = { max_dist_opponent: 17e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[2][8] = { max_dist_opponent: 18e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[2][9] = { max_dist_opponent: 18e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[2][10] = { max_dist_opponent: 18e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[2][11] = { max_dist_opponent: 18e3, bg_index: 2, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !1 };
LEVEL_INFOS[2][12] = { max_dist_opponent: 18e3, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[2][13] = { max_dist_opponent: 19e3, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[2][14] = { max_dist_opponent: 19e3, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
LEVEL_INFOS[2][15] = { max_dist_opponent: 19e3, bg_index: 7, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[2][16] = { max_dist_opponent: 2e4, bg_index: 8, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[2][17] = { max_dist_opponent: 2e4, bg_index: 9, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6e3, hill: !0 };
LEVEL_INFOS[2][18] = { max_dist_opponent: 2e4, bg_index: 6, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !1 };
LEVEL_INFOS[2][19] = { max_dist_opponent: 21e3, bg_index: 0, road_tiles: [], bound_tiles: [], spawn_stamina_time: 6500, hill: !0 };
LEVEL_INFOS[2][20] = { max_dist_opponent: 22e3, bg_index: 1, road_tiles: [], bound_tiles: [], spawn_stamina_time: 7e3, hill: !0 };
var OPPONENT_INFOS = [];
OPPONENT_INFOS[0] = { name: OPPONENT_NAMES[0] };
OPPONENT_INFOS[1] = { name: OPPONENT_NAMES[1], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 0, handlebar: 1, helmet_glasses: 3, jersey: 3, cyclist_shadow: 0, shorts_shoes: 1, skin: 0, wheels: 1 } };
OPPONENT_INFOS[2] = { name: OPPONENT_NAMES[2], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 0, handlebar: 1, helmet_glasses: 4, jersey: 2, cyclist_shadow: 0, shorts_shoes: 3, skin: 2, wheels: 1 } };
OPPONENT_INFOS[3] = { name: OPPONENT_NAMES[3], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 3, handlebar: 0, helmet_glasses: 1, jersey: 0, cyclist_shadow: 0, shorts_shoes: 4, skin: 2, wheels: 1 } };
OPPONENT_INFOS[4] = { name: OPPONENT_NAMES[4], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 4, handlebar: 0, helmet_glasses: 1, jersey: 3, cyclist_shadow: 0, shorts_shoes: 4, skin: 1, wheels: 0 } };
OPPONENT_INFOS[5] = { name: OPPONENT_NAMES[5], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 2, handlebar: 0, helmet_glasses: 1, jersey: 2, cyclist_shadow: 0, shorts_shoes: 2, skin: 1, wheels: 2 } };
OPPONENT_INFOS[6] = { name: OPPONENT_NAMES[6], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 2, handlebar: 0, helmet_glasses: 2, jersey: 5, cyclist_shadow: 0, shorts_shoes: 4, skin: 1, wheels: 1 } };
OPPONENT_INFOS[7] = { name: OPPONENT_NAMES[7], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 3, handlebar: 0, helmet_glasses: 4, jersey: 2, cyclist_shadow: 0, shorts_shoes: 2, skin: 1, wheels: 0 } };
OPPONENT_INFOS[8] = { name: OPPONENT_NAMES[8], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 4, handlebar: 0, helmet_glasses: 3, jersey: 4, cyclist_shadow: 0, shorts_shoes: 3, skin: 0, wheels: 0 } };
OPPONENT_INFOS[9] = { name: OPPONENT_NAMES[9], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 0, handlebar: 0, helmet_glasses: 3, jersey: 1, cyclist_shadow: 0, shorts_shoes: 1, skin: 2, wheels: 1 } };
OPPONENT_INFOS[10] = { name: OPPONENT_NAMES[10], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 3, handlebar: 0, helmet_glasses: 1, jersey: 0, cyclist_shadow: 0, shorts_shoes: 5, skin: 2, wheels: 2 } };
OPPONENT_INFOS[11] = { name: OPPONENT_NAMES[11], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 1, handlebar: 0, helmet_glasses: 3, jersey: 5, cyclist_shadow: 0, shorts_shoes: 0, skin: 2, wheels: 2 } };
OPPONENT_INFOS[12] = { name: OPPONENT_NAMES[12], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 3, handlebar: 0, helmet_glasses: 4, jersey: 1, cyclist_shadow: 0, shorts_shoes: 1, skin: 0, wheels: 1 } };
OPPONENT_INFOS[13] = { name: OPPONENT_NAMES[13], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 2, handlebar: 0, helmet_glasses: 2, jersey: 4, cyclist_shadow: 0, shorts_shoes: 4, skin: 2, wheels: 2 } };
OPPONENT_INFOS[14] = { name: OPPONENT_NAMES[14], speed: CYCLIST_NORMAL_INFOS.bg_speed - 5, part_types: { chassis: 0, handlebar: 1, helmet_glasses: 3, jersey: 1, cyclist_shadow: 0, shorts_shoes: 2, skin: 0, wheels: 2 } };
var OPPONENT_PATTERN = [];
OPPONENT_PATTERN[TYPE_EASY] = [
    [{ lane: 0, x_offset: 0 }],
    [{ lane: 1, x_offset: 0 }],
    [{ lane: 2, x_offset: 0 }],
    [{ lane: 3, x_offset: 0 }],
    [{ lane: 4, x_offset: 0 }],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 1 },
        { lane: 2, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 2 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 3 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 2, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 2, x_offset: 0 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 2, x_offset: 0 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 3, x_offset: 0 },
        { lane: 4, x_offset: 1e3 },
    ],
];
OPPONENT_PATTERN[TYPE_MEDIUM] = [
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 1 },
        { lane: 2, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 2 },
        { lane: 3, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 3 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 2, x_offset: 500 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 3, x_offset: 500 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 2, x_offset: 0 },
        { lane: 3, x_offset: 500 },
    ],
    [
        { lane: 2, x_offset: 0 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 3, x_offset: 0 },
        { lane: 4, x_offset: 500 },
    ],
];
OPPONENT_PATTERN[TYPE_HARD] = [
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
        { lane: 2, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 2, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 2, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 3, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 2, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 3, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 2, x_offset: 0 },
        { lane: 3, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
        { lane: 2, x_offset: 1e3 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
        { lane: 2, x_offset: 1e3 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 2, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 500 },
        { lane: 2, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
        { lane: 4, x_offset: 1e3 },
    ],
];
OPPONENT_PATTERN[TYPE_VERY_HARD] = [
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 250 },
        { lane: 2, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 250 },
        { lane: 3, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 250 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 2, x_offset: 250 },
        { lane: 3, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 2, x_offset: 250 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 3, x_offset: 250 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 2, x_offset: 250 },
        { lane: 3, x_offset: 500 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 3, x_offset: 250 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 2, x_offset: 0 },
        { lane: 3, x_offset: 250 },
        { lane: 4, x_offset: 500 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 1500 },
        { lane: 2, x_offset: 500 },
        { lane: 3, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 1500 },
        { lane: 2, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 1, x_offset: 1500 },
        { lane: 3, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 0, x_offset: 0 },
        { lane: 2, x_offset: 1500 },
        { lane: 3, x_offset: 500 },
        { lane: 4, x_offset: 1e3 },
    ],
    [
        { lane: 1, x_offset: 0 },
        { lane: 2, x_offset: 1500 },
        { lane: 3, x_offset: 1e3 },
        { lane: 4, x_offset: 1e3 },
    ],
];
function CRadarController(a, c, b) {
    var d, e, f, g, m, h, l, n;
    this._init = function (r, p) {
        d = r;
        e = p;
        n = new createjs.Container();
        n.x = d;
        n.y = e;
        b.addChild(n);
        g = s_oSpriteLibrary.getSprite("bg_map");
        var v = createBitmap(g);
        n.addChild(v);
        v = s_oSpriteLibrary.getSprite("player_map");
        h = createBitmap(v);
        h.regY = v.height / 2;
        h.x = 20;
        h.y = 16;
        n.addChild(h);
        var q = s_oSpriteLibrary.getSprite("leader_map_" + s_iTournament);
        l = createBitmap(q);
        l.regY = v.height / 2;
        l.x = 20;
        l.y = 16;
        n.addChild(l);
        m = new CTLText(n, 15, 38, g.width - 20, 28, 28, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_POS, !0, !0, !1, !1);
        n.regX = n.getBounds().width / 2;
        f = g.width - v.width;
    };
    this.refreshButtonPos = function () {
        n.y = e + s_iOffsetY;
    };
    this.reset = function () {
        h.x = 20;
        h.y = 16;
        m.refreshText(" ");
    };
    this.refreshPlayerPos = function (r, p) {
        m.refreshText(TEXT_POS + ": " + p);
        h.x = Math.round(f * r);
    };
    this.hideLeader = function () {
        l.visible = !1;
    };
    this.refreshLeader = function (r) {
        l.x = Math.round(f * r);
    };
    this._init(a, c);
}
function toRadian(a) {
    return (Math.PI / 180) * a;
}
function toDegree(a) {
    return (180 / Math.PI) * a;
}
function randRange(a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
}
function angleBetweenVectors(a, c) {
    var b = Math.acos(dotProductV2(a, c) / (a.length() * c.length()));
    return !0 === isNaN(b) ? 0 : b;
}
function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, d);
    return { x: b, y: d };
}
function reflectVectorV2(a, c) {
    var b = new CVector2(),
        d = dotProductV2(a, c);
    b.set(a.getX() - 2 * d * c.getX(), a.getY() - 2 * d * c.getY());
    return b;
}
function dotProductV2(a, c) {
    return a.getX() * c.getX() + a.getY() * c.getY();
}
function pointInRect(a, c) {
    return a.getX() > c.x && a.getX() < c.x + c.width && a.getY() > c.y && a.getY() < c.y + c.height;
}
function distance2(a, c) {
    return (c.x - a.x) * (c.x - a.x) + (c.y - a.y) * (c.y - a.y);
}
function distance(a, c) {
    return Math.sqrt((c.x - a.x) * (c.x - a.x)) + (c.y - a.y) * (c.y - a.y);
}
function getAngle(a, c, b, d) {
    a = b - a;
    c = d - c;
    d = (Math.atan(c / a) / Math.PI) * 180;
    if (0 > a || 0 > c) d += 180;
    0 < a && 0 > c && (d -= 180);
    0 > d && (d += 360);
    return d % 360;
}
function CEditorPanel() {
    var a,
        c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n,
        r,
        p,
        v,
        q,
        t,
        w = null,
        z = null,
        u,
        C = this;
    this._init = function () {
        u = new createjs.Container();
        s_oStage.addChild(u);
        var D = createBitmap(s_oSpriteLibrary.getSprite("bg_editor"));
        u.addChild(D);
        D = CANVAS_WIDTH / 2 - 380;
        g = {};
        for (var B in PART_CYCLIST) "cyclist_shadow" !== B && ((g[B] = new CButCyclePart(D, CANVAS_HEIGHT / 2 + 200, B, u)), g[B].addEventListener(ON_MOUSE_UP, this._onSelectPart, this), (D += 125));
        m = [];
        for (B = 0; B < PART_CYCLIST.jersey.num_types; B++) -1 === LEADER_JERSEY.indexOf(B) && m.push(B);
        h = {};
        for (var E in s_aPartTypes) h[E] = s_aPartTypes[E];
        v = new CCyclist(-1, CANVAS_WIDTH / 2 - 150, CANVAS_HEIGHT / 2 + 100, 1, 0, 0, "", h, u);
        v.changeAnim("normal", CYCLIST_NORMAL_INFOS.cyclist_framerate, 0);
        n = new CGfxButton(CANVAS_WIDTH / 2 + 250, CANVAS_HEIGHT / 2 + 50, s_oSpriteLibrary.getSprite("but_play"), u);
        n.addEventListener(ON_MOUSE_UP, this._onPlay, this);
        r = new CGfxButton(CANVAS_WIDTH / 2 + 250, CANVAS_HEIGHT / 2 - 100, s_oSpriteLibrary.getSprite("but_shuffle"), u);
        r.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        E = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH - E.width / 2 - 10;
        c = E.height / 2 + 10;
        l = new CGfxButton(a, c, E, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            (E = s_oSpriteLibrary.getSprite("audio_icon")), (e = a - E.width / 2 - 10), (f = E.height / 2 + 10), (q = new CToggle(e, f, E, s_bAudioActive, s_oStage)), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        E = window.document;
        B = E.documentElement;
        w = B.requestFullscreen || B.mozRequestFullScreen || B.webkitRequestFullScreen || B.msRequestFullscreen;
        z = E.exitFullscreen || E.mozCancelFullScreen || E.webkitExitFullscreen || E.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (w = !1);
        w &&
            screenfull.isEnabled &&
            ((E = s_oSpriteLibrary.getSprite("but_fullscreen")), (b = E.width / 4 + 10), (d = E.height / 2 + 10), (t = new CToggle(b, d, E, s_bFullscreen, s_oStage)), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        p = new createjs.Shape();
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.alpha = 1;
        u.addChild(p);
        createjs.Tween.get(p).to({ alpha: 0 }, 500, createjs.Ease.cubicOut);
        this.refreshButtonPos();
    };
    this.unload = function () {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), (q = null);
        l.unload();
        w && screenfull.isEnabled && t.unload();
        for (var D in g) g[D].unload();
        n.unload();
        l.unload();
        r.unload();
        s_oEditorPanel = null;
    };
    this.refreshButtonPos = function () {
        l.setPosition(a - s_iOffsetX, c + s_iOffsetY);
        (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || q.setPosition(e - s_iOffsetX, s_iOffsetY + f);
        w && screenfull.isEnabled && t.setPosition(b + s_iOffsetX, d + s_iOffsetY);
    };
    this._onSelectPart = function (D) {
        h[D]++;
        "jersey" === D ? h[D] === m.length && (h[D] = m[0]) : h[D] === PART_CYCLIST[D].num_types && (h[D] = 0);
        v.setPart(D, h[D]);
    };
    this._onPlay = function () {
        C.unload();
        s_aPartTypes = h;
        saveFirstTime();
        savePlayerCustom(s_aPartTypes);
        s_oMain.gotoTournamentPanel();
    };
    this._onShuffle = function () {
        for (var D in PART_CYCLIST) "jersey" === D ? (h[D] = Math.floor(Math.random() * m.length)) : "cyclist_shadow" !== D && (h[D] = Math.floor(Math.random() * PART_CYCLIST[D].num_types)), v.setPart(D, h[D]);
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    this._onExit = function () {
        C.unload();
        s_oMain.gotoMenu();
    };
    this.resetFullscreenBut = function () {
        w && screenfull.isEnabled && t.setActive(s_bFullscreen);
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? z.call(window.document) : w.call(window.document.documentElement);
        sizeHandler();
    };
    s_oEditorPanel = this;
    this._init();
}
var s_oEditorPanel = null;
function CButCyclePart(a, c, b, d) {
    var e, f, g, m, h, l, n, r, p;
    this._init = function (v, q, t) {
        e = [];
        f = [];
        var w = s_oSpriteLibrary.getSprite("but_select_part");
        p = new createjs.Container();
        p.x = v;
        p.y = q;
        p.regX = w.width / 2;
        p.regY = w.height / 2;
        p.cursor = "pointer";
        d.addChild(p);
        g = createBitmap(w);
        p.addChild(g);
        v = s_oSpriteLibrary.getSprite("icon_" + t);
        q = createBitmap(v);
        q.regX = v.width / 2;
        q.regY = v.height / 2;
        q.x = w.width / 2;
        q.y = w.height / 2;
        p.addChild(q);
        h = m = 1;
        r = !1;
        this._initListener();
    };
    this.unload = function () {
        p.off("mousedown", l);
        p.off("pressup", n);
        d.removeChild(p);
    };
    this.setVisible = function (v) {
        p.visible = v;
    };
    this.setCursorType = function (v) {
        p.cursor = v;
    };
    this._initListener = function () {
        l = p.on("mousedown", this.buttonDown);
        n = p.on("pressup", this.buttonRelease);
    };
    this.addEventListener = function (v, q, t) {
        e[v] = q;
        f[v] = t;
    };
    this.addEventListenerWithParams = function (v, q, t, w) {
        e[v] = q;
        f[v] = t;
    };
    this.buttonRelease = function () {
        r || ((p.scaleX = 0 < m ? m : -m), (p.scaleY = h), playSound("press_but", 1, !1), e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP], b));
    };
    this.buttonDown = function () {
        r || ((p.scaleX = 0 < m ? 0.9 * m : 0.9 * -m), (p.scaleY = 0.9 * h), e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], b));
    };
    this.setPosition = function (v, q) {
        p.x = v;
        p.y = q;
    };
    this._init(a, c, b);
}
function CLeaderboardController(a, c, b, d) {
    var e, f, g, m;
    this._init = function (h, l) {
        m = new createjs.Container();
        m.x = h;
        m.y = l;
        d.addChild(m);
        var n = s_oSpriteLibrary.getSprite("leaderboard_row");
        new CTLText(m, 30, 0, n.width - 60, 30, 30, "right", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_CYCLIST, !0, !0, !1, !1);
        new CTLText(m, n.width - 20, 0, 50, 30, 30, "right", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_PT, !0, !0, !1, !1);
        var r = 30;
        g = [r];
        e = [];
        f = [];
        for (var p = 0; p < OPPONENT_INFOS.length; p++) {
            new CTLText(m, 0, r, 26, n.height, 24, "right", "#fff", PRIMARY_FONT, 1, 0, 0, "" + (p + 1), !0, !0, !1, !1);
            var v = new CLeaderboardRow(p, b, 30, r, OPPONENT_INFOS[p].name, "0", m);
            r += n.height + 2;
            g.push(r);
            e.push(v);
            f.push(v);
        }
        m.regX = m.getBounds().width / 2;
    };
    this.unload = function () {
        d.removeChild(m);
    };
    this.setVisible = function (h) {
        m.visible = h;
    };
    this.setScale = function (h) {
        m.scale = h;
    };
    this.showPointsInRow = function (h, l) {
        for (var n = 0; n < e.length; n++) {
            for (var r = 0, p = 0; p < h.length; p++)
                if (n === h[p]) {
                    r = LEADERBOARD_POINTS[p];
                    break;
                }
            for (var v = (p = 0); v < l.length; v++)
                if (n === l[v].cyclist) {
                    p = l[v].points;
                    break;
                }
            e[n].showPointsInRow(r, p, g[v], 0 === v ? !0 : !1);
        }
    };
    this.refreshRows = function (h, l) {
        for (var n = 0; n < h.length; n++) {
            var r = !1;
            l && 0 === n && (r = !0);
            e[h[n].cyclist].refreshPoints(h[n].points, r);
            e[h[n].cyclist].setY(g[n]);
        }
    };
    this._init(a, c);
}
function CLeaderboardRow(a, c, b, d, e, f, g) {
    var m,
        h,
        l,
        n,
        r,
        p,
        v = this;
    this._init = function (q, t, w, z) {
        m = q;
        p = new createjs.Container();
        p.x = q;
        p.y = t;
        g.addChild(p);
        l = s_oSpriteLibrary.getSprite("leaderboard_row");
        q = createBitmap(l);
        p.addChild(q);
        n = new CTLText(p, 5, 0, l.width - 60, l.height, 24, "right", 0 === a ? "#ffb200" : "#fff", PRIMARY_FONT, 1, 0, 0, w, !0, !0, !1, !1);
        r = new CTLText(p, l.width - 50, 0, 50, l.height, 20, "center", "#fff", PRIMARY_FONT, 1, 0, 0, "" + z, !0, !0, !1, !1);
        w = { images: [s_oSpriteLibrary.getSprite("leader_badge_" + c)], frames: { width: 64, height: 64, regX: 32, regY: 32 }, animations: { start: 0, anim: [0, 50] } };
        w = new createjs.SpriteSheet(w);
        h = createSprite(w, "start", 32, 32, 64, 64);
        h.x = l.width + 40;
        h.y = 14;
        p.addChild(h);
    };
    this.refreshPoints = function (q, t) {
        r.refreshText("" + q);
        this.refreshBadge(t);
    };
    this.refreshContent = function (q, t) {
        n.refreshText(q);
        r.refreshText("" + t);
    };
    this.showPointsInRow = function (q, t, w, z) {
        q = new CScoreTextAnim("+" + q, l.width + 10, 0, "#fff", 26, "left", p);
        q.addEventListener(ON_SHOW_ANIM_SCORE_TEXT, this._onShowText, this);
        q.addEventListenerWithParams(ON_END_ANIM_SCORE_TEXT, this._onEndTextAnim, this, [t, w, z]);
    };
    this.refreshBadge = function (q) {
        q && 0 < parseInt(r.getString()) ? (h.gotoAndPlay("anim"), (h.visible = !0)) : (h.gotoAndStop("start"), (h.visible = !1));
    };
    this.setY = function (q) {
        p.y = q;
    };
    this._onShowText = function (q) {
        q.moveLeft(50, 500, 1500);
    };
    this._onEndTextAnim = function (q) {
        var t = q[0],
            w = q[1],
            z = q[2];
        new CRollingTextController(r, null, r.getString(), t, 1e3, EASE_CUBIC_OUT);
        setTimeout(function () {
            createjs.Tween.get(p)
                .to({ x: m + 500, alpha: 0 }, 500, createjs.Ease.cubicOut)
                .call(function () {
                    p.y = w;
                    createjs.Tween.get(p).to({ x: m, alpha: 1 }, 1e3, createjs.Ease.quintOut);
                    v.refreshBadge(z);
                });
        }, 500 + 100 * a);
    };
    this._init(b, d, e, f);
}
function CLeaderBoardPanel(a, c) {
    var b,
        d,
        e,
        f,
        g,
        m = this;
    this._init = function (h) {
        g = new createjs.Container();
        g.visible = !1;
        c.addChild(g);
        d = new createjs.Shape();
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.on("click", function () {});
        g.addChild(d);
        f = new createjs.Container();
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        g.addChild(f);
        var l = s_oSpriteLibrary.getSprite("msg_box_big"),
            n = createBitmap(l);
        f.addChild(n);
        b = new CLeaderboardController(l.width / 2, 50, h, f);
        b.refreshRows(s_aLeaderBoards[h], !0);
        e = new CGfxButton(l.width / 2, l.height - 70, s_oSpriteLibrary.getSprite("but_yes"), f);
        e.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f.regX = l.width / 2;
        f.regY = l.height / 2;
        this.show();
    };
    this.unload = function () {
        e.unload();
        c.removeChild(g);
    };
    this.show = function () {
        g.visible = !0;
        d.alpha = 0;
        createjs.Tween.get(d)
            .to({ alpha: 0.7 }, 400, createjs.Ease.cubicOut)
            .call(function () {});
        f.scaleX = f.scaleY = 0.01;
        f.alpha = 0;
        createjs.Tween.get(f).wait(400).to({ scale: 1, alpha: 1 }, 1e3, createjs.Ease.elasticOut);
    };
    this.hide = function () {
        createjs.Tween.get(d).to({ alpha: 0 }, 400, createjs.Ease.cubicOut);
        createjs.Tween.get(f)
            .to({ scaleX: 0.1, scaleY: 0.1, alpha: 0.5 }, 400, createjs.Ease.backIn)
            .call(function () {
                g.visible = !1;
            });
    };
    this._onExit = function () {
        m.unload();
    };
    this._init(a);
}
var EASE_LINEAR = 0,
    EASE_CUBIC_IN = 1,
    EASE_QUART_BACKIN = 2,
    EASE_BACKIN = 3,
    EASE_SIN_IN = 4,
    EASE_QUAD_IN = 5,
    EASE_CUBIC_OUT = 6,
    EASE_ELASTIC_OUT = 7,
    EASE_BACKOUT = 8,
    EASE_QUINT_OUT = 9,
    EASE_CUBIC_INOUT = 10;
function CRollingTextController(a, c, b, d, e, f) {
    var g,
        m,
        h,
        l,
        n,
        r,
        p,
        v,
        q,
        t,
        w = [],
        z,
        u;
    this._init = function (C, D, B, E, M, A) {
        q = [];
        t = [];
        n = M;
        this.setUpdateInfo(B, E);
        v = A;
        z = C;
        u = D;
    };
    this.unload = function () {
        clearInterval(p);
    };
    this.setUpdateInfo = function (C, D) {
        h = parseFloat(C);
        l = D;
        g = 0;
        m = Math.round(n / FPS);
        r = 0;
        var B = this;
        p = setInterval(function () {
            B.update();
        }, FPS_TIME);
    };
    this.addEventListener = function (C, D, B) {
        q[C] = D;
        t[C] = B;
    };
    this.addRollingListener = function (C, D, B) {
        q[ON_CONTROLLER_ROLL] = C;
        t[ON_CONTROLLER_ROLL] = D;
        w = [];
        for (C = 0; C < B.length; C++) w[C] = { step: B[C], flag: !1 };
    };
    this.increaseValue = function (C) {
        r = C;
    };
    this.getTarget = function () {
        return z;
    };
    this.update = function () {
        g++;
        if (g > m)
            (g = 0),
                z.refreshText(Math.round(l)),
                null !== u && u.refreshText(Math.round(l)),
                clearInterval(p),
                null !== q[ON_CONTROLLER_END] && void 0 !== q[ON_CONTROLLER_END] && q[ON_CONTROLLER_END].call(t[ON_CONTROLLER_END], this),
                0 < r ? this.setUpdateInfo(r) : null !== q[ON_CONTROLLER_REMOVE] && void 0 !== q[ON_CONTROLLER_REMOVE] && q[ON_CONTROLLER_REMOVE].call(t[ON_CONTROLLER_REMOVE], this);
        else {
            switch (v) {
                case EASE_BACKIN:
                    var C = s_oTweenController.easeInBack(g, 0, 1, m);
                    break;
                case EASE_BACKOUT:
                    C = s_oTweenController.easeOutBack(g, 0, 1, m);
                    break;
                case EASE_CUBIC_IN:
                    C = s_oTweenController.easeInCubic(g, 0, 1, m);
                    break;
                case EASE_CUBIC_OUT:
                    C = s_oTweenController.easeOutCubic(g, 0, 1, m);
                    break;
                case EASE_ELASTIC_OUT:
                    C = s_oTweenController.easeOutElastic(g, 0, 1, m);
                    break;
                case EASE_LINEAR:
                    C = s_oTweenController.easeLinear(g, 0, 1, m);
                    break;
                case EASE_QUART_BACKIN:
                    C = s_oTweenController.easeBackInQuart(g, 0, 1, m);
                    break;
                default:
                    C = s_oTweenController.easeLinear(g, 0, 1, m);
            }
            C = s_oTweenController.tweenValue(h, l, C);
            for (var D = 0; D < w.length; D++) C > w[D].step && !w[D].flag && ((w[D].flag = !0), null !== q[ON_CONTROLLER_ROLL] && q[ON_CONTROLLER_ROLL].call(t[ON_CONTROLLER_ROLL], D));
            z.refreshText(Math.round(C));
            null !== u && u.refreshText(Math.round(C));
        }
    };
    this._init(a, c, b, d, e, f);
}
function CTweenController() {
    this.tweenValue = function (a, c, b) {
        return a + b * (c - a);
    };
    this.easeLinear = function (a, c, b, d) {
        return (b * a) / d + c;
    };
    this.easeInCubic = function (a, c, b, d) {
        d = (a /= d) * a * a;
        return c + b * d;
    };
    this.easeBackInQuart = function (a, c, b, d) {
        d = (a /= d) * a;
        return c + b * (2 * d * d + 2 * d * a + -3 * d);
    };
    this.easeInBack = function (a, c, b, d) {
        return b * (a /= d) * a * (2.70158 * a - 1.70158) + c;
    };
    this.easeOutCubic = function (a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c;
    };
    this.getTrajectoryPoint = function (a, c) {
        var b = new createjs.Point(),
            d = (1 - a) * (1 - a),
            e = a * a;
        b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + e * c.end.x;
        b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + e * c.end.y;
        return b;
    };
}
function CWinPanel(a) {
    var c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n,
        r = this;
    this._init = function () {
        n = new createjs.Container();
        n.visible = !1;
        a.addChild(n);
        h = new createjs.Shape();
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c = h.on("click", function () {});
        n.addChild(h);
        l = new createjs.Container();
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2;
        n.addChild(l);
        b = s_oSpriteLibrary.getSprite("msg_box_big");
        var p = createBitmap(b);
        l.addChild(p);
        new CTLText(l, 70, 10, b.width - 140, 100, 50, "center", FONT_COLOR, PRIMARY_FONT, 1, 0, 0, TEXT_FINAL_PANEL, !0, !0, !0, !1);
        m = new CLeaderboardController(b.width / 2, 124, s_iTournament, l);
        m.setScale(0.7);
        f = new CTLText(l, 10, 450, b.width - 20, 30, 30, "center", FONT_COLOR, PRIMARY_FONT, 1, 0, 0, TEXT_TOUR_SCORE, !0, !0, !1, !1);
        g = new CTLText(l, 10, 480, b.width - 20, 30, 30, "center", FONT_COLOR, PRIMARY_FONT, 1, 0, 0, TEXT_TOT_SCORE, !0, !0, !1, !1);
        d = new CGfxButton(b.width / 2 - 200, b.height - 60, s_oSpriteLibrary.getSprite("but_home"), l);
        d.addEventListener(ON_MOUSE_UP, this._onHome, this);
        e = new CGfxButton(b.width / 2 + 200, b.height - 60, s_oSpriteLibrary.getSprite("but_restart"), l);
        e.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        l.regX = b.width / 2;
        l.regY = b.height / 2;
    };
    this.unload = function () {
        h.on("click", c);
        d.unload();
        e.unload();
    };
    this.show = function (p, v, q) {
        m.refreshRows(p, !1);
        f.refreshText(TEXT_TOUR_SCORE + ": " + v);
        g.refreshText(TEXT_TOT_SCORE + ": " + q);
        n.visible = !0;
        h.alpha = 0;
        createjs.Tween.get(h).to({ alpha: 0.7 }, 400, createjs.Ease.cubicOut);
        l.x = -b.width;
        createjs.Tween.get(l)
            .wait(400)
            .to({ x: CANVAS_WIDTH / 2 }, 1e3, createjs.Ease.backOut)
            .call(function () {});
        setVolume("soundtrack", 0);
        playSound("level_win", 1, !1).on("end", function () {
            setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        });
    };
    this.hide = function () {
        createjs.Tween.get(h).to({ alpha: 0 }, 400, createjs.Ease.cubicOut);
        createjs.Tween.get(l)
            .to({ x: -b.width }, 400, createjs.Ease.backIn)
            .call(function () {
                n.visible = !1;
            });
    };
    this._onHome = function () {
        s_oGame._exitGame();
    };
    this._onRestart = function () {
        s_oGame.restart();
        r.hide();
    };
    this._init();
}
function CLaneHighlight(a, c, b) {
    var d, e, f, g, m, h, l, n;
    this._init = function (r, p) {
        d = 0;
        l = new createjs.Container();
        l.y = p;
        b.addChild(l);
        h = new createjs.Container();
        l.addChild(h);
        var v = 0,
            q = s_oSpriteLibrary.getSprite("lane_dot_on"),
            t = s_oSpriteLibrary.getSprite("lane_dot_off");
        for (g = []; v < CANVAS_WIDTH; ) {
            var w = createBitmap(t);
            w.x = v;
            w.alpha = 0.3;
            w.regX = t.width / 2;
            w.regY = t.height / 2;
            h.addChild(w);
            w = createBitmap(q);
            w.x = v;
            w.alpha = 0;
            w.regX = q.width / 2;
            w.regY = q.height / 2;
            h.addChild(w);
            g.push(w);
            v += 22;
        }
        n = new createjs.Container();
        l.addChild(n);
        w = 200 * LANE_INFOS[r].scale;
        var z = Math.floor(CANVAS_WIDTH / w);
        v = 0;
        t = s_oSpriteLibrary.getSprite("stamina_icon_off");
        q = s_oSpriteLibrary.getSprite("stamina_icon_on");
        m = [];
        for (var u = 0; u < z; u++) {
            var C = createBitmap(t);
            C.x = v;
            C.alpha = 0.3;
            C.regY = t.height / 2;
            C.scale = LANE_INFOS[r].scale;
            n.addChild(C);
            C = createBitmap(q);
            C.x = v;
            C.alpha = 0;
            C.regY = q.height / 2;
            C.scale = LANE_INFOS[r].scale;
            n.addChild(C);
            v += w;
            m.push(C);
        }
        n.regX = n.getBounds().width / 2;
        n.x = CANVAS_WIDTH / 2;
    };
    this.show = function (r) {
        d++;
        createjs.Tween.removeTweens(l);
        n.visible = r;
        f = 0;
        if (r) {
            l.alpha = 0;
            l.visible = !0;
            createjs.Tween.get(l, { override: !0 }).to({ alpha: 1 }, 500, createjs.Ease.quadOut);
            for (r = 0; r < g.length; r++) g[r].visible = !1;
            h.visible = !0;
            m[f].alpha = 1;
            e = setInterval(function () {
                createjs.Tween.get(m[f]).to({ alpha: 0 }, 300, createjs.Ease.cubicOut);
                f++;
                f === m.length && (f = 0);
                createjs.Tween.get(m[f]).to({ alpha: 1 }, 300, createjs.Ease.cubicOut);
            }, 100);
        } else
            e = setInterval(function () {
                createjs.Tween.get(g[f]).to({ alpha: 1 }, 100, createjs.Ease.quadOut).to({ alpha: 0 }, 10);
                f++;
                f === g.length && (f = 0);
            }, 20);
    };
    this.hide = function (r) {
        clearInterval(e);
        createjs.Tween.removeTweens(l);
        d--;
        0 > d && (d = 0);
        (r || 0 === d) &&
            createjs.Tween.get(l)
                .to({ alpha: 0 }, 500, createjs.Ease.cubicOut)
                .call(function () {
                    n.visible = !1;
                    l.visible = !1;
                });
    };
    this._init(a, c);
}
function CStaminaController(a, c, b) {
    var d, e, f;
    this._init = function (g, m) {
        f = new createjs.Container();
        f.x = g;
        f.y = m;
        b.addChild(f);
        var h = s_oSpriteLibrary.getSprite("frame_stamina");
        h = createBitmap(h);
        f.addChild(h);
        d = s_oSpriteLibrary.getSprite("fill_stamina");
        h = createBitmap(d);
        f.addChild(h);
        e = new createjs.Shape();
        e.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0, 0, d.width, d.height);
        f.addChild(e);
        h.mask = e;
    };
    this.refreshStamina = function (g) {
        e.graphics.clear();
        e.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0, 0, d.width * g, d.height);
        createjs.Tween.removeTweens(f);
        f.alpha = 1;
    };
    this.highlight = function () {
        f.visible = !0;
        createjs.Tween.get(f, { loop: -1 }).to({ alpha: 0.1 }, 500, createjs.Ease.quadOut).to({ alpha: 1 }, 500, createjs.Ease.quadIn);
    };
    this.isTweening = function () {
        return createjs.Tween.hasActiveTweens(f);
    };
    this._init(a, c);
}
function CStaminaItem(a, c, b, d, e) {
    var f,
        g,
        m,
        h,
        l = this;
    this._init = function (n, r, p) {
        f = n;
        g = [];
        m = [];
        for (var v = [], q = 0; 51 > q; q++) v.push(s_oSpriteLibrary.getSprite("stamina_item_" + q));
        q = new createjs.SpriteSheet({ images: v, framerate: 50, frames: { width: v[0].width, height: v[0].height, regY: v[0].height }, animations: { start: 0, anim: [0, 50] } });
        h = createSprite(q, "start", 0, v[0].height, v[0].width, v[0].height);
        h.visible = !1;
        h.x = n;
        h.y = r;
        h.scale = p;
        e.addChild(h);
    };
    this.unload = function () {
        e.removeChild(h);
    };
    this.addEventListener = function (n, r, p) {
        g[n] = r;
        m[n] = p;
    };
    this.animCollect = function (n, r) {
        createjs.Tween.get(h)
            .to({ x: n, y: r, scale: 0 }, 1e3, createjs.Ease.backIn)
            .call(function () {
                l.unload();
            });
    };
    this.getLane = function () {
        return d;
    };
    this.update = function (n) {
        f -= 0.6 * n;
        f < CANVAS_WIDTH && (0 < f ? ((h.visible = !0), (h.x = f), "start" === h.currentAnimation && h.gotoAndPlay("anim")) : (this.unload(), g[ON_REMOVE_ITEM] && g[ON_REMOVE_ITEM].call(m[ON_REMOVE_ITEM], l, d)));
        return f;
    };
    this._init(a, c, b);
}
function CTutorialPanel() {
    var a,
        c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n,
        r,
        p,
        v = this;
    this._init = function () {
        b = 0;
        f = [];
        g = [];
        p = new createjs.Container();
        m = p.on("click", function () {});
        p.visible = !1;
        s_oStage.addChild(p);
        e = [];
        var q = new createjs.Container();
        q.x = CANVAS_WIDTH;
        p.addChild(q);
        var t = s_oSpriteLibrary.getSprite("fade_tutorial");
        d = t.width;
        var w = createBitmap(t);
        q.addChild(w);
        new CTLText(q, 40, 250, d - 80, 105, 35, "center", "#fff", PRIMARY_FONT, 1, 0, 0, s_bMobile ? TEXT_TUTORIAL_MOBILE_1 : TEXT_TUTORIAL_1, !0, !0, !0, !1);
        var z = s_oSpriteLibrary.getSprite("key_up");
        w = s_oSpriteLibrary.getSprite("key_down");
        var u = s_oSpriteLibrary.getSprite("key_boost"),
            C = 1;
        s_bMobile && ((C = 0.5), (z = s_oSpriteLibrary.getSprite("but_arrow_up")), (w = s_oSpriteLibrary.getSprite("but_arrow_down")), (u = s_oSpriteLibrary.getSprite("but_boost")));
        z = createBitmap(z);
        z.x = 170;
        z.y = CANVAS_HEIGHT / 2;
        z.scale = C;
        q.addChild(z);
        w = createBitmap(w);
        w.x = 280;
        w.y = CANVAS_HEIGHT / 2;
        w.scale = C;
        q.addChild(w);
        e[0] = q;
        q = new createjs.Container();
        q.x = CANVAS_WIDTH;
        p.addChild(q);
        w = createBitmap(t);
        q.addChild(w);
        new CTLText(q, 20, 210, d - 40, 105, 35, "center", "#fff", PRIMARY_FONT, 1, 0, 0, s_bMobile ? TEXT_TUTORIAL_MOBILE_2 : TEXT_TUTORIAL_2, !0, !0, !0, !1);
        r = createBitmap(u);
        r.x = 100 + u.width / 2;
        r.y = CANVAS_HEIGHT / 2 - 20;
        r.regX = u.width / 2;
        r.regY = u.height / 2;
        r.scale = C;
        q.addChild(r);
        s_bMobile && ((r.x = 250), (r.y = CANVAS_HEIGHT / 2), (h = r.on("mousedown", this._onBoost, this)), (l = r.on("click", this._onBoostRelease, this)));
        new CTLText(q, 20, 450, d - 40, 105, 35, "center", "#fff", PRIMARY_FONT, 1, 0, 0, s_bMobile ? TEXT_TUTORIAL_MOBILE_3 : TEXT_TUTORIAL_3, !0, !0, !0, !1);
        e[1] = q;
        u = new createjs.Container();
        u.x = CANVAS_WIDTH;
        p.addChild(u);
        w = createBitmap(t);
        u.addChild(w);
        new CTLText(u, 20, 250, d - 40, 105, 35, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL_4, !0, !0, !0, !1);
        t = createBitmap(s_oSpriteLibrary.getSprite("stamina_item_0"));
        t.x = 180;
        t.y = 370;
        u.addChild(t);
        e[2] = u;
        t = s_oSpriteLibrary.getSprite("but_next");
        a = CANVAS_WIDTH - t.width / 2 - 10;
        c = CANVAS_HEIGHT - t.height / 2 - 10;
        n = new CGfxButton(a, c, t, p);
        n.addEventListener(ON_MOUSE_UP, this._onNext, this);
    };
    this.unload = function () {
        n.unload();
        p.off("click", m);
        s_bMobile && (r.off("mousedown", h), r.off("click", l));
    };
    this.addEventListener = function (q, t, w) {
        f[q] = t;
        g[q] = w;
    };
    this.refreshButtonPos = function () {
        n.setPosition(a - s_iOffsetX, c - s_iOffsetY);
    };
    this.show = function () {
        p.visible = !0;
        createjs.Tween.get(e[b])
            .to({ x: CANVAS_WIDTH - s_iOffsetX - d }, 500, createjs.Ease.cubicOut)
            .call(function () {
                n.block(!1);
            });
    };
    this._onNext = function () {
        n.block(!0);
        createjs.Tween.get(e[b])
            .to({ x: CANVAS_WIDTH }, 500, createjs.Ease.cubicOut)
            .call(function () {
                b++;
                3 === b ? ((p.visible = !1), f[ON_END_TUTORIAL] && f[ON_END_TUTORIAL].call(g[ON_END_TUTORIAL])) : (v.show(), 2 === b && f[ON_SHOW_TUTORIAL_STAMINA] && f[ON_SHOW_TUTORIAL_STAMINA].call(g[ON_SHOW_TUTORIAL_STAMINA]));
            });
    };
    this._onBoost = function () {
        r.scale = 0.44;
        s_oGame._onUserActionInput(PRESS_NITRO_KEY);
    };
    this._onBoostRelease = function () {
        r.scale = 0.5;
        s_oGame._onUserActionRelease(PRESS_NITRO_KEY);
    };
    this._init();
}
function CHelpPanel() {
    var a,
        c,
        b,
        d,
        e,
        f,
        g = this;
    this._init = function () {
        d = new createjs.Container();
        d.visible = !1;
        s_oStage.addChild(d);
        e = new createjs.Shape();
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a = e.on("click", function () {});
        d.addChild(e);
        f = new createjs.Container();
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        d.addChild(f);
        c = s_oSpriteLibrary.getSprite("msg_box");
        var m = createBitmap(c);
        f.addChild(m);
        new CTLText(f, 70, 10, c.width - 140, 66, 22, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TUTORIAL_1, !0, !0, !0, !1);
        if (s_bMobile) {
            var h = s_oSpriteLibrary.getSprite("but_arrow_up");
            var l = s_oSpriteLibrary.getSprite("but_arrow_down");
            m = s_oSpriteLibrary.getSprite("but_boost");
        } else (h = s_oSpriteLibrary.getSprite("key_up")), (l = s_oSpriteLibrary.getSprite("key_down")), (m = s_oSpriteLibrary.getSprite("key_boost"));
        var n = createBitmap(h);
        n.x = c.width / 2 - 60;
        n.y = 140;
        n.regX = h.width / 2;
        n.regY = h.height / 2;
        f.addChild(n);
        h = createBitmap(l);
        h.x = c.width / 2 + 60;
        h.y = 140;
        h.regX = l.width / 2;
        h.regY = l.height / 2;
        f.addChild(h);
        new CTLText(f, 20, 200, c.width - 40, 66, 22, "center", "#fff", PRIMARY_FONT, 1, 0, 0, s_bMobile ? TEXT_TUTORIAL_MOBILE_2 : TEXT_TUTORIAL_2, !0, !0, !0, !1);
        l = createBitmap(m);
        l.x = c.width / 2;
        l.y = 270;
        l.regX = m.width / 2;
        f.addChild(l);
        b = new CGfxButton(c.width / 2, 450, s_oSpriteLibrary.getSprite("but_yes"), f);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f.regX = c.width / 2;
        f.regY = c.height / 2;
        s_bMobile && ((n.scale = 0.5), (h.scale = 0.5), (l.scale = 0.5));
    };
    this.unload = function () {
        e.off("click", a);
        b.unload();
    };
    this.show = function () {
        s_oGame.pauseGame();
        d.visible = !0;
        e.alpha = 0;
        createjs.Tween.get(e).to({ alpha: 0.7 }, 400, createjs.Ease.cubicOut);
        f.x = -c.width;
        createjs.Tween.get(f)
            .wait(400)
            .to({ x: CANVAS_WIDTH / 2 }, 1e3, createjs.Ease.backOut);
    };
    this.hide = function () {
        createjs.Tween.get(e).to({ alpha: 0 }, 400, createjs.Ease.cubicOut);
        createjs.Tween.get(f)
            .to({ x: -c.width }, 400, createjs.Ease.backIn)
            .call(function () {
                d.visible = !1;
                s_oGame.unpauseGame();
            });
    };
    this._onExit = function () {
        g.hide();
    };
    this._init();
}
function CGameOver(a) {
    var c,
        b,
        d,
        e,
        f,
        g,
        m,
        h,
        l,
        n = this;
    this._init = function () {
        l = new createjs.Container();
        l.visible = !1;
        a.addChild(l);
        m = new createjs.Shape();
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c = m.on("click", function () {});
        l.addChild(m);
        h = new createjs.Container();
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2;
        l.addChild(h);
        g = s_oSpriteLibrary.getSprite("msg_box");
        var r = createBitmap(g);
        h.addChild(r);
        e = new CTLText(h, 20, 50, g.width - 40, 100, 50, "center", FONT_COLOR, PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
        f = new CTLText(h, 20, 190, g.width - 40, 160, 40, "center", FONT_COLOR, PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
        b = new CGfxButton(g.width / 2 - 190, g.height - 70, s_oSpriteLibrary.getSprite("but_home"), h);
        b.addEventListener(ON_MOUSE_UP, this._onHome, this);
        d = new CGfxButton(g.width / 2 + 190, g.height - 70, s_oSpriteLibrary.getSprite("but_restart"), h);
        d.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        h.regX = g.width / 2;
        h.regY = g.height / 2;
    };
    this.unload = function () {
        m.on("click", c);
        b.unload();
        d.unload();
    };
    this.show = function (r) {
        l.visible = !0;
        m.alpha = 0;
        createjs.Tween.get(m).to({ alpha: 0.7 }, 400, createjs.Ease.cubicOut);
        h.x = -g.width;
        setVolume("soundtrack", 0);
        var p = playSound("game_over", 1, !1);
        e.refreshText(TEXT_GAME_OVER);
        f.refreshText(sprintf(TEXT_LOSE_HELP, r + 1));
        p.on("end", function () {
            setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        });
        createjs.Tween.get(h)
            .to({ x: CANVAS_WIDTH / 2 }, 1e3, createjs.Ease.backOut)
            .call(function () {});
    };
    this.hide = function () {
        createjs.Tween.get(m).to({ alpha: 0 }, 400, createjs.Ease.cubicOut);
        createjs.Tween.get(h)
            .to({ x: -g.width }, 400, createjs.Ease.backIn)
            .call(function () {
                l.visible = !1;
            });
    };
    this._onHome = function () {
        s_oGame._exitGame();
    };
    this._onRestart = function () {
        s_oGame.restart();
        n.hide();
    };
    this._init();
}
function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
    a = extractHostname(a);
    var c = a.split("."),
        b = c.length;
    2 < b && (a = c[b - 2] + "." + c[b - 1]);
    return a;
}
var getClosestTop = function () {
        var a = window,
            c = !1;
        try {
            for (; a.parent.document !== a.document; )
                if (a.parent.document) a = a.parent;
                else {
                    c = !0;
                    break;
                }
        } catch (b) {
            c = !0;
        }
        return { topFrame: a, err: c };
    },
    getBestPageUrl = function (a) {
        var c = a.topFrame,
            b = "";
        if (a.err)
            try {
                try {
                    b = window.top.location.href;
                } catch (e) {
                    var d = window.location.ancestorOrigins;
                    b = d[d.length - 1];
                }
            } catch (e) {
                b = c.document.referrer;
            }
        else b = c.location.href;
        return b;
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
    for (
        var a = extractRootDomain(PAGE_URL),
            c = [
                String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109),
                String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109),
                String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109),
                String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
            ],
            b = 0;
        b < c.length;
        b++
    )
        if (c[b] === a) return !0;
    return !1;
}
