'use strict';
var aa, ba, ca, da, z, ea, fa, ia, ja, ka, la, ma, oa, pa, qa, ra, sa, ta, ua, va, wa, ya, E, Aa, Ba, Ca, Da, Ea, K, Fa, Ja, Ka, La, Ma, Na, Oa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Ya, Za, $a, ab, bb, cb, db, eb, fb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(h) {
    return h.__proto__
} : function(h) {
    return h.constructor.prototype
});
(function() {
    function h(a, b, e, t) {
        this.set(a, b, e, t)
    }

    function k() {
        this.Fb = this.Eb = this.Hb = this.Gb = this.Vb = this.Ub = this.cb = this.bb = 0
    }

    function g(a, b, e, t) {
        a < b ? e < t ? (y = a < e ? a : e, u = b > t ? b : t) : (y = a < t ? a : t, u = b > e ? b : e) : e < t ? (y = b < e ? b : e, u = a > t ? a : t) : (y = b < t ? b : t, u = a > e ? a : e)
    }

    function d() {
        this.items = this.Qd = null;
        this.Xh = 0;
        x && (this.Qd = new Set);
        this.ah = [];
        this.Ne = !0
    }

    function p(a) {
        A[F++] = a
    }

    function r() {
        this.da = this.bl = this.y = this.nh = 0
    }

    function q(a) {
        this.ub = [];
        this.gj = this.ij = this.jj = this.hj = 0;
        this.Gi(a)
    }

    function b(a, b) {
        this.Ql = a;
        this.Pl = b;
        this.cells = {}
    }

    function f(a, b) {
        this.Ql = a;
        this.Pl = b;
        this.cells = {}
    }

    function c(a, b, e) {
        var t;
        return G.length ? (t = G.pop(), t.Am = a, t.x = b, t.y = e, t) : new ba(a, b, e)
    }

    function a(a, b, e) {
        this.Am = a;
        this.x = b;
        this.y = e;
        this.Bb = new ca
    }

    function e(a, b, e) {
        var t;
        return B.length ? (t = B.pop(), t.Am = a, t.x = b, t.y = e, t) : new da(a, b, e)
    }

    function n(a, b, e) {
        this.Am = a;
        this.x = b;
        this.y = e;
        this.Bb = [];
        this.yg = !0;
        this.Nd = new ca;
        this.kh = !1
    }

    function m(a, b) {
        return a.ud - b.ud
    }
    z = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ea = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    aa = function(a) {
        return a
    };
    fa = function(a) {
        return "undefined" === typeof a
    };
    ia = function(a) {
        return "number" === typeof a
    };
    ja = function(a) {
        return "string" === typeof a
    };
    ka = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    la = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
        return a + 1
    };
    ma = function(a) {
        return 0 > a ? -a : a
    };
    oa = function(a, b) {
        return a < b ? a : b
    };
    pa = Math.PI;
    qa = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ra = function(a) {
        var b = a | 0;
        return b === a ? b : b + 1
    };
    sa = function(a, b, e, t, c, f, n, l) {
        var m, u, g, d;
        a < e ? (u = a, m = e) : (u = e, m = a);
        c < n ? (d = c, g = n) : (d = n, g = c);
        if (m < d || u > g) return !1;
        b < t ? (u = b, m = t) : (u = t, m = b);
        f < l ? (d = f, g = l) : (d = l, g = f);
        if (m < d || u > g) return !1;
        m = c - a + n - e;
        u = f - b + l - t;
        a = e - a;
        b = t - b;
        c = n - c;
        f = l - f;
        l = ma(b * c - f * a);
        return ma(c * u - f * m) > l ? !1 : ma(a * u - b * m) <= l
    };
    h.prototype.set = function(a, b, e, t) {
        this.left = a;
        this.top = b;
        this.right = e;
        this.bottom = t
    };
    h.prototype.ph = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    h.prototype.width = function() {
        return this.right - this.left
    };
    h.prototype.height = function() {
        return this.bottom - this.top
    };
    h.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    h.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    h.prototype.pq = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    h.prototype.Vw = function(a, b, e) {
        return !(a.right + b < this.left || a.bottom + e < this.top || a.left + b > this.right || a.top + e > this.bottom)
    };
    h.prototype.Yb = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    h.prototype.wh = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    ta = h;
    k.prototype.Fi = function(a) {
        this.bb = a.left;
        this.cb = a.top;
        this.Ub = a.right;
        this.Vb = a.top;
        this.Gb = a.right;
        this.Hb = a.bottom;
        this.Eb = a.left;
        this.Fb = a.bottom
    };
    k.prototype.bs = function(a, b) {
        if (0 === b) this.Fi(a);
        else {
            var e = Math.sin(b),
                t = Math.cos(b),
                c = a.left * e,
                f = a.top * e,
                l = a.right * e,
                e = a.bottom * e,
                n = a.left * t,
                m = a.top * t,
                u = a.right * t,
                t = a.bottom * t;
            this.bb = n - f;
            this.cb = m + c;
            this.Ub = u - f;
            this.Vb = m + l;
            this.Gb = u - e;
            this.Hb = t + l;
            this.Eb = n - e;
            this.Fb = t + c
        }
    };
    k.prototype.offset = function(a, b) {
        this.bb += a;
        this.cb += b;
        this.Ub += a;
        this.Vb += b;
        this.Gb += a;
        this.Hb += b;
        this.Eb += a;
        this.Fb += b;
        return this
    };
    var y = 0,
        u = 0;
    k.prototype.rp = function(a) {
        g(this.bb, this.Ub, this.Gb, this.Eb);
        a.left = y;
        a.right = u;
        g(this.cb, this.Vb, this.Hb, this.Fb);
        a.top = y;
        a.bottom = u
    };
    k.prototype.Yb = function(a, b) {
        var e = this.bb,
            t = this.cb,
            c = this.Ub - e,
            f = this.Vb - t,
            l = this.Gb - e,
            n = this.Hb - t,
            m = a - e,
            u = b - t,
            g = c * c + f * f,
            d = c * l + f * n,
            f = c * m + f * u,
            y = l * l + n * n,
            C = l * m + n * u,
            q = 1 / (g * y - d * d),
            c = (y * f - d * C) * q,
            g = (g * C - d * f) * q;
        if (0 <= c && 0 < g && 1 > c + g) return !0;
        c = this.Eb - e;
        f = this.Fb - t;
        g = c * c + f * f;
        d = c * l + f * n;
        f = c * m + f * u;
        q = 1 / (g * y - d * d);
        c = (y * f - d * C) * q;
        g = (g * C - d * f) * q;
        return 0 <= c && 0 < g && 1 > c + g
    };
    k.prototype.Je = function(a, b) {
        if (b) switch (a) {
            case 0:
                return this.bb;
            case 1:
                return this.Ub;
            case 2:
                return this.Gb;
            case 3:
                return this.Eb;
            case 4:
                return this.bb;
            default:
                return this.bb
        } else switch (a) {
            case 0:
                return this.cb;
            case 1:
                return this.Vb;
            case 2:
                return this.Hb;
            case 3:
                return this.Fb;
            case 4:
                return this.cb;
            default:
                return this.cb
        }
    };
    k.prototype.er = function() {
        return (this.bb + this.Ub + this.Gb + this.Eb) / 4
    };
    k.prototype.fr = function() {
        return (this.cb + this.Vb + this.Hb + this.Fb) / 4
    };
    k.prototype.oq = function(a) {
        var b = a.er(),
            e = a.fr();
        if (this.Yb(b, e)) return !0;
        b = this.er();
        e = this.fr();
        if (a.Yb(b, e)) return !0;
        var t, c, f, l, n, m, u, g;
        for (u = 0; 4 > u; u++)
            for (g = 0; 4 > g; g++)
                if (b = this.Je(u, !0), e = this.Je(u, !1), t = this.Je(u + 1, !0), c = this.Je(u + 1, !1), f = a.Je(g, !0), l = a.Je(g, !1), n = a.Je(g + 1, !0), m = a.Je(g + 1, !1), sa(b, e, t, c, f, l, n, m)) return !0;
        return !1
    };
    ua = k;
    va = function(a, b) {
        for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
        return a
    };
    wa = function(a, b) {
        var e, t;
        b = qa(b);
        if (!(0 > b || b >= a.length)) {
            e = b;
            for (t = a.length - 1; e < t; e++) a[e] = a[e + 1];
            ya(a, t)
        }
    };
    ya = function(a, b) {
        a.length = b
    };
    E = function(a) {
        ya(a, 0)
    };
    Aa = function(a, b) {
        E(a);
        var e, t;
        e = 0;
        for (t = b.length; e < t; ++e) a[e] = b[e]
    };
    Ba = function(a, b) {
        a.push.apply(a, b)
    };
    Ca = function(a, b) {
        var e, t;
        e = 0;
        for (t = a.length; e < t; ++e)
            if (a[e] === b) return e;
        return -1
    };
    Da = function(a, b) {
        var e = Ca(a, b); - 1 !== e && wa(a, e)
    };
    Ea = function(a, b, e) {
        return a < b ? b : a > e ? e : a
    };
    K = function(a) {
        return a / (180 / pa)
    };
    Fa = function(a) {
        return 180 / pa * a
    };
    Ja = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ka = function(a) {
        a %= 2 * pa;
        0 > a && (a += 2 * pa);
        return a
    };
    La = function(a) {
        return Ja(Fa(a))
    };
    Ma = function(a) {
        return Ka(K(a))
    };
    Na = function(a, b, e, t) {
        return Math.atan2(t - b, e - a)
    };
    Oa = function(a, b) {
        if (a === b) return 0;
        var e = Math.sin(a),
            t = Math.cos(a),
            c = Math.sin(b),
            f = Math.cos(b),
            e = e * c + t * f;
        return 1 <= e ? 0 : -1 >= e ? pa : Math.acos(e)
    };
    Qa = function(a, b, e) {
        var t = Math.sin(a),
            c = Math.cos(a),
            f = Math.sin(b),
            l = Math.cos(b);
        return Math.acos(t * f + c * l) > e ? 0 < c * f - t * l ? Ka(a + e) : Ka(a - e) : Ka(b)
    };
    Ra = function(a, b) {
        var e = Math.sin(a),
            t = Math.cos(a),
            c = Math.sin(b),
            f = Math.cos(b);
        return 0 >= t * c - e * f
    };
    Sa = function(a, b, e, t, c, f) {
        if (0 === e) return f ? a : b;
        var l = Math.sin(e);
        e = Math.cos(e);
        a -= t;
        b -= c;
        var n = a * l;
        a = a * e - b * l;
        b = b * e + n;
        return f ? a + t : b + c
    };
    Ta = function(a, b, e, t) {
        a = e - a;
        b = t - b;
        return Math.sqrt(a * a + b * b)
    };
    Ua = function(a, b) {
        return !a !== !b
    };
    Va = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    Wa = function(a) {
        for (var b in a) a.hasOwnProperty(b) && delete a[b]
    };
    var D = +new Date;
    Ya = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - D
    };
    var l = !1,
        C = l = !1,
        R = !1;
    "undefined" !== typeof window && (l = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), l = !l && /safari/i.test(navigator.userAgent), C = /(iphone|ipod|ipad)/i.test(navigator.userAgent), R = window.c2ejecta);
    var x = !l && !R && !C && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    d.prototype.contains = function(a) {
        return this.je() ? !1 : x ? this.Qd.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    d.prototype.add = function(a) {
        if (x) this.Qd.has(a) || (this.Qd.add(a), this.Ne = !1);
        else {
            var b = a.toString(),
                e = this.items;
            e ? e.hasOwnProperty(b) || (e[b] = a, this.Xh++, this.Ne = !1) : (this.items = {}, this.items[b] = a, this.Xh = 1, this.Ne = !1)
        }
    };
    d.prototype.remove = function(a) {
        if (!this.je())
            if (x) this.Qd.has(a) && (this.Qd["delete"](a), this.Ne = !1);
            else if (this.items) {
            a = a.toString();
            var b = this.items;
            b.hasOwnProperty(a) && (delete b[a], this.Xh--, this.Ne = !1)
        }
    };
    d.prototype.clear = function() {
        this.je() || (x ? this.Qd.clear() : (this.items = null, this.Xh = 0), E(this.ah), this.Ne = !0)
    };
    d.prototype.je = function() {
        return 0 === this.count()
    };
    d.prototype.count = function() {
        return x ? this.Qd.size : this.Xh
    };
    var A = null,
        F = 0;
    d.prototype.wy = function() {
        if (!this.Ne) {
            if (x) E(this.ah), A = this.ah, F = 0, this.Qd.forEach(p), A = null, F = 0;
            else {
                var a = this.ah;
                E(a);
                var b, e = 0,
                    t = this.items;
                if (t)
                    for (b in t) t.hasOwnProperty(b) && (a[e++] = t[b])
            }
            this.Ne = !0
        }
    };
    d.prototype.td = function() {
        this.wy();
        return this.ah
    };
    ca = d;
    new ca;
    Za = function(a, b) {
        x ? $a(a, b.Qd) : ab(a, b.td())
    };
    $a = function(a, b) {
        var e, t, c, f;
        t = e = 0;
        for (c = a.length; e < c; ++e) f = a[e], b.has(f) || (a[t++] = f);
        ya(a, t)
    };
    ab = function(a, b) {
        var e, t, c, f;
        t = e = 0;
        for (c = a.length; e < c; ++e) f = a[e], -1 === Ca(b, f) && (a[t++] = f);
        ya(a, t)
    };
    r.prototype.add = function(a) {
        this.y = a - this.nh;
        this.bl = this.da + this.y;
        this.nh = this.bl - this.da - this.y;
        this.da = this.bl
    };
    r.prototype.reset = function() {
        this.da = this.bl = this.y = this.nh = 0
    };
    bb = r;
    cb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    q.prototype.Gi = function(a) {
        this.Jr = a;
        this.nd = a.length / 2;
        this.ub.length = a.length;
        this.mj = this.nj = -1;
        this.up = 0
    };
    q.prototype.vg = function() {
        return !this.Jr.length
    };
    q.prototype.X = function() {
        for (var a = this.ub, b = a[0], e = b, t = a[1], c = t, f, l, n = 1, m = this.nd; n < m; ++n) l = 2 * n, f = a[l], l = a[l + 1], f < b && (b = f), f > e && (e = f), l < t && (t = l), l > c && (c = l);
        this.hj = b;
        this.ij = e;
        this.jj = t;
        this.gj = c
    };
    q.prototype.Fi = function(a, b, e) {
        this.ub.length = 8;
        this.nd = 4;
        var t = this.ub;
        t[0] = a.left - b;
        t[1] = a.top - e;
        t[2] = a.right - b;
        t[3] = a.top - e;
        t[4] = a.right - b;
        t[5] = a.bottom - e;
        t[6] = a.left - b;
        t[7] = a.bottom - e;
        this.nj = a.right - a.left;
        this.mj = a.bottom - a.top;
        this.X()
    };
    q.prototype.Ug = function(a, b, e, t, c) {
        this.ub.length = 8;
        this.nd = 4;
        var f = this.ub;
        f[0] = a.bb - b;
        f[1] = a.cb - e;
        f[2] = a.Ub - b;
        f[3] = a.Vb - e;
        f[4] = a.Gb - b;
        f[5] = a.Hb - e;
        f[6] = a.Eb - b;
        f[7] = a.Fb - e;
        this.nj = t;
        this.mj = c;
        this.X()
    };
    q.prototype.as = function(a) {
        this.nd = a.nd;
        Aa(this.ub, a.ub);
        this.hj = a.hj;
        this.jj - a.jj;
        this.ij = a.ij;
        this.gj = a.gj
    };
    q.prototype.hg = function(a, b, e) {
        if (this.nj !== a || this.mj !== b || this.up !== e) {
            this.nj = a;
            this.mj = b;
            this.up = e;
            var t, c, f, l, n, m = 0,
                u = 1,
                g = this.Jr,
                d = this.ub;
            0 !== e && (m = Math.sin(e), u = Math.cos(e));
            e = 0;
            for (f = this.nd; e < f; e++) t = 2 * e, c = t + 1, l = g[t] * a, n = g[c] * b, d[t] = l * u - n * m, d[c] = n * u + l * m;
            this.X()
        }
    };
    q.prototype.Yb = function(a, b) {
        var e = this.ub;
        if (a === e[0] && b === e[1]) return !0;
        var t, c, f, l = this.nd,
            n = this.hj - 110,
            m = this.jj -
            101,
            u = this.ij + 131,
            g = this.gj + 120,
            d, y, C = 0,
            q = 0;
        for (t = 0; t < l; t++) c = 2 * t, f = (t + 1) % l * 2, d = e[c], c = e[c + 1], y = e[f], f = e[f + 1], sa(n, m, a, b, d, c, y, f) && C++, sa(u, g, a, b, d, c, y, f) && q++;
        return 1 === C % 2 || 1 === q % 2
    };
    q.prototype.Kh = function(a, b, e) {
        var t = a.ub,
            c = this.ub;
        if (this.Yb(t[0] + b, t[1] + e) || a.Yb(c[0] - b, c[1] - e)) return !0;
        var f, l, n, m, u, g, d, y, C, q, k, h;
        f = 0;
        for (m = this.nd; f < m; f++)
            for (l = 2 * f, n = (f + 1) % m * 2, y = c[l], l = c[l + 1], C = c[n], q = c[n + 1], n = 0, d = a.nd; n < d; n++)
                if (u = 2 * n, g = (n + 1) % d * 2, k = t[u] + b, u = t[u + 1] + e, h = t[g] + b, g = t[g + 1] + e, sa(y, l, C, q, k, u, h, g)) return !0;
        return !1
    };
    db = q;
    b.prototype.We = function(a, b, e) {
        var t;
        t = this.cells[a];
        return t ? (t = t[b]) ? t : e ? (t = c(this, a, b), this.cells[a][b] = t) : null : e ? (t = c(this, a, b), this.cells[a] = {}, this.cells[a][b] = t) : null
    };
    b.prototype.nc = function(a) {
        return qa(a / this.Ql)
    };
    b.prototype.oc = function(a) {
        return qa(a / this.Pl)
    };
    b.prototype.update = function(a, b, e) {
        var t, c, f, l, n;
        if (b)
            for (t = b.left, c = b.right; t <= c; ++t)
                for (f = b.top, l = b.bottom; f <= l; ++f)
                    if (!e || !e.Yb(t, f))
                        if (n = this.We(t, f, !1)) n.remove(a), n.je() && (n.Bb.clear(), 1E3 > G.length && G.push(n), this.cells[t][f] = null);
        if (e)
            for (t = e.left, c = e.right; t <= c; ++t)
                for (f = e.top, l = e.bottom; f <= l; ++f) b && b.Yb(t, f) || this.We(t, f, !0).Hm(a)
    };
    b.prototype.Nr = function(a, b) {
        var e, t, c, f, l, n;
        e = this.nc(a.left);
        c = this.oc(a.top);
        t = this.nc(a.right);
        for (l = this.oc(a.bottom); e <= t; ++e)
            for (f = c; f <= l; ++f)(n = this.We(e, f, !1)) && n.dump(b)
    };
    eb = b;
    f.prototype.We = function(a, b, c) {
        var t;
        t = this.cells[a];
        return t ? (t = t[b]) ? t : c ? (t = e(this, a, b), this.cells[a][b] = t) : null : c ? (t = e(this, a, b), this.cells[a] = {}, this.cells[a][b] = t) : null
    };
    f.prototype.nc = function(a) {
        return qa(a / this.Ql)
    };
    f.prototype.oc = function(a) {
        return qa(a / this.Pl)
    };
    f.prototype.update = function(a, b, e) {
        var t, c, f, l, n;
        if (b)
            for (t = b.left, c = b.right; t <= c; ++t)
                for (f = b.top, l = b.bottom; f <= l; ++f)
                    if (!e || !e.Yb(t, f))
                        if (n = this.We(t, f, !1)) n.remove(a), n.je() && (n.reset(), 1E3 > B.length && B.push(n), this.cells[t][f] = null);
        if (e)
            for (t = e.left, c = e.right; t <= c; ++t)
                for (f = e.top, l = e.bottom; f <= l; ++f) b && b.Yb(t, f) || this.We(t, f, !0).Hm(a)
    };
    f.prototype.Nr = function(a, b, e, t, c) {
        var f, l;
        a = this.nc(a);
        b = this.oc(b);
        e = this.nc(e);
        for (f = this.oc(t); a <= e; ++a)
            for (t = b; t <= f; ++t)(l = this.We(a, t, !1)) && l.dump(c)
    };
    f.prototype.mx = function(a) {
        var b, e, t, c, f;
        b = a.left;
        t = a.top;
        e = a.right;
        for (c = a.bottom; b <= e; ++b)
            for (a = t; a <= c; ++a)
                if (f = this.We(b, a, !1)) f.yg = !1
    };
    fb = f;
    var G = [];
    a.prototype.je = function() {
        return this.Bb.je()
    };
    a.prototype.Hm = function(a) {
        this.Bb.add(a)
    };
    a.prototype.remove = function(a) {
        this.Bb.remove(a)
    };
    a.prototype.dump = function(a) {
        Ba(a, this.Bb.td())
    };
    ba = a;
    var B = [];
    n.prototype.je = function() {
        if (!this.Bb.length) return !0;
        if (this.Bb.length > this.Nd.count()) return !1;
        this.jm();
        return !0
    };
    n.prototype.Hm = function(a) {
        this.Nd.contains(a) ? (this.Nd.remove(a), this.Nd.je() && (this.kh = !1)) : this.Bb.length ? (this.Bb[this.Bb.length - 1].Tc() > a.Tc() && (this.yg = !1), this.Bb.push(a)) : (this.Bb.push(a), this.yg = !0)
    };
    n.prototype.remove = function(a) {
        this.Nd.add(a);
        this.kh = !0;
        30 <= this.Nd.count() && this.jm()
    };
    n.prototype.jm = function() {
        this.kh && (this.Nd.count() === this.Bb.length ? this.reset() : (Za(this.Bb, this.Nd), this.Nd.clear(), this.kh = !1))
    };
    n.prototype.Dv = function() {
        this.yg || (this.Bb.sort(m), this.yg = !0)
    };
    n.prototype.reset = function() {
        E(this.Bb);
        this.yg = !0;
        this.Nd.clear();
        this.kh = !1
    };
    n.prototype.dump = function(a) {
        this.jm();
        this.Dv();
        this.Bb.length && a.push(this.Bb)
    };
    da = n;
    var J = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : J[a - 1]
    };
    lb = function(a, b, e) {
        if (e) switch (a.xb = e.ONE, a.nb = e.ONE_MINUS_SRC_ALPHA, b) {
            case 1:
                a.xb = e.ONE;
                a.nb = e.ONE;
                break;
            case 3:
                a.xb = e.ONE;
                a.nb = e.ZERO;
                break;
            case 4:
                a.xb = e.ONE_MINUS_DST_ALPHA;
                a.nb = e.ONE;
                break;
            case 5:
                a.xb = e.DST_ALPHA;
                a.nb = e.ZERO;
                break;
            case 6:
                a.xb = e.ZERO;
                a.nb = e.SRC_ALPHA;
                break;
            case 7:
                a.xb = e.ONE_MINUS_DST_ALPHA;
                a.nb = e.ZERO;
                break;
            case 8:
                a.xb = e.ZERO;
                a.nb = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.xb = e.DST_ALPHA;
                a.nb = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.xb = e.ONE_MINUS_DST_ALPHA, a.nb = e.SRC_ALPHA
        }
    };
    mb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    nb = function(a, b) {
        return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    };
    ob = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || nb(a.tagName, "canvas") ? !0 : !1
    }
})();
var ic = "undefined" !== typeof Float32Array ? Float32Array : Array;

function jc(h) {
    var k = new ic(3);
    h && (k[0] = h[0], k[1] = h[1], k[2] = h[2]);
    return k
}

function kc(h) {
    var k = new ic(16);
    h && (k[0] = h[0], k[1] = h[1], k[2] = h[2], k[3] = h[3], k[4] = h[4], k[5] = h[5], k[6] = h[6], k[7] = h[7], k[8] = h[8], k[9] = h[9], k[10] = h[10], k[11] = h[11], k[12] = h[12], k[13] = h[13], k[14] = h[14], k[15] = h[15]);
    return k
}

function lc(h, k) {
    k[0] = h[0];
    k[1] = h[1];
    k[2] = h[2];
    k[3] = h[3];
    k[4] = h[4];
    k[5] = h[5];
    k[6] = h[6];
    k[7] = h[7];
    k[8] = h[8];
    k[9] = h[9];
    k[10] = h[10];
    k[11] = h[11];
    k[12] = h[12];
    k[13] = h[13];
    k[14] = h[14];
    k[15] = h[15]
}

function mc(h, k) {
    var g = k[0],
        d = k[1];
    k = k[2];
    h[0] *= g;
    h[1] *= g;
    h[2] *= g;
    h[3] *= g;
    h[4] *= d;
    h[5] *= d;
    h[6] *= d;
    h[7] *= d;
    h[8] *= k;
    h[9] *= k;
    h[10] *= k;
    h[11] *= k
}

function nc(h, k, g, d) {
    d || (d = kc());
    var p, r, q, b, f, c, a, e, n = h[0],
        m = h[1];
    h = h[2];
    r = g[0];
    q = g[1];
    p = g[2];
    g = k[1];
    c = k[2];
    n === k[0] && m === g && h === c ? (h = d, h[0] = 1, h[1] = 0, h[2] = 0, h[3] = 0, h[4] = 0, h[5] = 1, h[6] = 0, h[7] = 0, h[8] = 0, h[9] = 0, h[10] = 1, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0, h[15] = 1) : (g = n - k[0], c = m - k[1], a = h - k[2], e = 1 / Math.sqrt(g * g + c * c + a * a), g *= e, c *= e, a *= e, k = q * a - p * c, p = p * g - r * a, r = r * c - q * g, (e = Math.sqrt(k * k + p * p + r * r)) ? (e = 1 / e, k *= e, p *= e, r *= e) : r = p = k = 0, q = c * r - a * p, b = a * k - g * r, f = g * p - c * k, (e = Math.sqrt(q * q + b * b + f * f)) ? (e = 1 / e, q *= e, b *= e, f *= e) : f = b = q = 0, d[0] = k, d[1] = q, d[2] = g, d[3] = 0, d[4] = p, d[5] = b, d[6] = c, d[7] = 0, d[8] = r, d[9] = f, d[10] = a, d[11] = 0, d[12] = -(k * n + p * m + r * h), d[13] = -(q * n + b * m + f * h), d[14] = -(g * n + c * m + a * h), d[15] = 1)
}
(function() {
    function h(b, f, c) {
        this.ke = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Ja = !!c;
        this.ak = this.Nh = !1;
        this.Wl = 0;
        this.xl = 1;
        this.wo = 1E3;
        this.Gy = (this.wo - this.xl) / 32768;
        this.Nl = jc([0, 0, 100]);
        this.Nq = jc([0, 0, 0]);
        this.zs = jc([0, 1, 0]);
        this.Vi = jc([1, 1, 1]);
        this.Lp = !0;
        this.tk = kc();
        this.Mc = kc();
        this.Sm = kc();
        this.Vl = kc();
        this.q = b;
        this.kq()
    }

    function k(b, f, c) {
        this.q = b;
        this.Hi = f;
        this.name = c;
        this.Wc = b.getAttribLocation(f, "aPos");
        this.ff = b.getAttribLocation(f, "aTex");
        this.Lq = b.getUniformLocation(f, "matP");
        this.pk = b.getUniformLocation(f, "matMV");
        this.Fg = b.getUniformLocation(f, "opacity");
        this.Zm = b.getUniformLocation(f, "colorFill");
        this.Mq = b.getUniformLocation(f, "samplerFront");
        this.fi = b.getUniformLocation(f, "samplerBack");
        this.Mf = b.getUniformLocation(f, "destStart");
        this.Lf = b.getUniformLocation(f, "destEnd");
        this.hi = b.getUniformLocation(f, "seconds");
        this.an = b.getUniformLocation(f, "pixelWidth");
        this.$m = b.getUniformLocation(f, "pixelHeight");
        this.ei = b.getUniformLocation(f, "layerScale");
        this.di = b.getUniformLocation(f, "layerAngle");
        this.ii = b.getUniformLocation(f, "viewOrigin");
        this.gi = b.getUniformLocation(f, "scrollPos");
        this.Pw = !!(this.an || this.$m || this.hi || this.fi || this.Mf || this.Lf || this.ei || this.di || this.ii || this.gi);
        this.Vq = this.Wq = -999;
        this.sk = 1;
        this.Rq = this.Qq = 0;
        this.Tq = this.Pq = this.Oq = 1;
        this.Zq = this.Yq = this.Xq = this.br = this.$q = this.Sq = 0;
        this.Rm = [];
        this.Uq = kc();
        this.Fg && b.uniform1f(this.Fg, 1);
        this.Zm && b.uniform4f(this.Zm, 1, 1, 1, 1);
        this.Mq && b.uniform1i(this.Mq, 0);
        this.fi && b.uniform1i(this.fi, 1);
        this.Mf && b.uniform2f(this.Mf, 0, 0);
        this.Lf && b.uniform2f(this.Lf, 1, 1);
        this.ei && b.uniform1f(this.ei, 1);
        this.di && b.uniform1f(this.di, 0);
        this.ii && b.uniform2f(this.ii, 0, 0);
        this.gi && b.uniform2f(this.gi, 0, 0);
        this.hi && b.uniform1f(this.hi, 0);
        this.Cf = !1
    }

    function g(b, f) {
        return b[0] === f[0] && b[1] === f[1] && b[2] === f[2] && b[3] === f[3] && b[4] === f[4] && b[5] === f[5] && b[6] === f[6] && b[7] === f[7] && b[8] === f[8] && b[9] === f[9] && b[10] === f[10] && b[11] === f[11] && b[12] === f[12] && b[13] === f[13] && b[14] === f[14] && b[15] === f[15]
    }

    function d(b, f) {
        this.type = b;
        this.n = f;
        this.q = f.q;
        this.Gd = this.lc = this.tr = 0;
        this.V = this.Zc = null;
        this.cs = []
    }
    var p = kc();
    h.prototype.kq = function() {
        var b = this.q,
            f;
        this.Cq = 1;
        this.If = this.bf = null;
        this.uj = 1;
        b.clearColor(0, 0, 0, 0);
        b.clear(b.COLOR_BUFFER_BIT);
        b.enable(b.BLEND);
        b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
        b.disable(b.CULL_FACE);
        b.disable(b.STENCIL_TEST);
        b.disable(b.DITHER);
        this.Ja ? (b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL)) : b.disable(b.DEPTH_TEST);
        this.Eq = b.ONE;
        this.Aq = b.ONE_MINUS_SRC_ALPHA;
        this.ql = new Float32Array(8E3 * (this.Ja ? 3 : 2));
        this.el = new Float32Array(16E3);
        this.Fr = new Float32Array(32E3);
        this.Bn = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, this.Bn);
        b.bufferData(b.ARRAY_BUFFER, this.Fr.byteLength, b.DYNAMIC_DRAW);
        this.Ui = Array(4);
        this.Oi = Array(4);
        for (f = 0; 4 > f; f++) this.Ui[f] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Ui[f]), b.bufferData(b.ARRAY_BUFFER, this.ql.byteLength, b.DYNAMIC_DRAW), this.Oi[f] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Oi[f]), b.bufferData(b.ARRAY_BUFFER, this.el.byteLength, b.DYNAMIC_DRAW);
        this.Zd = 0;
        this.Tw = b.createBuffer();
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.Tw);
        for (var c = new Uint16Array(12E3), a = f = 0; 12E3 > f;) c[f++] = a, c[f++] = a + 1, c[f++] = a + 2, c[f++] = a, c[f++] = a + 2, c[f++] = a + 3, a += 4;
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, c, b.STATIC_DRAW);
        this.Cn = this.Wg = this.Ce = 0;
        this.Ua = [];
        f = this.Ja ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        c = this.qh({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, f, "<default>");
        this.Ua.push(c);
        c = this.qh({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Ua.push(c);
        c = this.qh({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, f, "<earlyz>");
        this.Ua.push(c);
        c = this.qh({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        }, f, "<fill>");
        this.Ua.push(c);
        for (var e in oc) oc.hasOwnProperty(e) && this.Ua.push(this.qh(oc[e], f, e));
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, null);
        this.Ke = [];
        this.Yd = 0;
        this.cc = !1;
        this.Cp = this.Yh = -1;
        this.jg = null;
        this.hm = b.createFramebuffer();
        this.zj = this.Qk = null;
        this.pp = !1;
        this.Ja && (this.zj = b.createRenderbuffer());
        this.mf = jc([0, 0, 0]);
        this.cr = b.getParameter(b.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.cr && (this.cr = 2048);
        this.Tb(0)
    };
    k.prototype.oo = function(b) {
        g(this.Uq, b) || (lc(b, this.Uq), this.q.uniformMatrix4fv(this.pk, !1, b))
    };
    h.prototype.qh = function(b, f, c) {
        var a = this.q,
            e = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(e, b.src);
        a.compileShader(e);
        if (!a.getShaderParameter(e, a.COMPILE_STATUS)) return a.deleteShader(e), null;
        var n = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(n, f);
        a.compileShader(n);
        if (!a.getShaderParameter(n, a.COMPILE_STATUS)) return a.deleteShader(e), a.deleteShader(n), null;
        f = a.createProgram();
        a.attachShader(f, e);
        a.attachShader(f, n);
        a.linkProgram(f);
        if (!a.getProgramParameter(f, a.LINK_STATUS)) return a.deleteShader(e), a.deleteShader(n), a.deleteProgram(f), null;
        a.useProgram(f);
        a.deleteShader(e);
        a.deleteShader(n);
        c = new k(a, f, c);
        c.fm = b.fm || 0;
        c.gm = b.gm || 0;
        c.Bp = !!b.Bp;
        c.md = !!b.md;
        c.lp = !!b.lp;
        c.T = b.T || [];
        b = 0;
        for (e = c.T.length; b < e; b++) c.T[b][1] = a.getUniformLocation(f, c.T[b][0]), c.Rm.push(0), a.uniform1f(c.T[b][1], 0);
        return c
    };
    h.prototype.wm = function(b) {
        var f, c;
        f = 0;
        for (c = this.Ua.length; f < c; f++)
            if (this.Ua[f].name === b) return f;
        return -1
    };
    h.prototype.Ir = function(b, f, c) {
        var a = this.Mc,
            e = this.tk,
            n = [0, 0, 0, 0, 0, 0, 0, 0];
        n[0] = a[0] * b +
            a[4] * f + a[12];
        n[1] = a[1] * b + a[5] * f + a[13];
        n[2] = a[2] * b + a[6] * f + a[14];
        n[3] = a[3] * b + a[7] * f + a[15];
        n[4] = e[0] * n[0] + e[4] * n[1] + e[8] * n[2] + e[12] * n[3];
        n[5] = e[1] * n[0] + e[5] * n[1] + e[9] * n[2] + e[13] * n[3];
        n[6] = e[2] * n[0] + e[6] * n[1] + e[10] * n[2] + e[14] * n[3];
        n[7] = -n[2];
        0 !== n[7] && (n[7] = 1 / n[7], n[4] *= n[7], n[5] *= n[7], n[6] *= n[7], c[0] = (.5 * n[4] + .5) * this.width, c[1] = (.5 * n[5] + .5) * this.height)
    };
    h.prototype.we = function(b, f, c) {
        if (this.width !== b || this.height !== f || c) {
            this.Ue();
            c = this.q;
            this.width = b;
            this.height = f;
            c.viewport(0, 0, b, f);
            nc(this.Nl, this.Nq, this.zs, this.Mc);
            if (this.Ja) {
                var a = -b / 2;
                b = b / 2;
                var e = f / 2;
                f = -f / 2;
                var n = this.xl,
                    m = this.wo,
                    g = this.tk;
                g || (g = kc());
                var u = b - a,
                    d = f - e,
                    l = m - n;
                g[0] = 2 / u;
                g[1] = 0;
                g[2] = 0;
                g[3] = 0;
                g[4] = 0;
                g[5] = 2 / d;
                g[6] = 0;
                g[7] = 0;
                g[8] = 0;
                g[9] = 0;
                g[10] = -2 / l;
                g[11] = 0;
                g[12] = -(a + b) / u;
                g[13] = -(f + e) / d;
                g[14] = -(m + n) / l;
                g[15] = 1;
                this.Vi[0] = 1;
                this.Vi[1] = 1
            } else f = b / f, a = this.xl, b = this.wo, g = this.tk, m = a * Math.tan(45 * Math.PI / 360), f *= m, e = -f, n = -m, g || (g = kc()), u = f - e, d = m - n, l = b - a, g[0] = 2 * a / u, g[1] = 0, g[2] = 0, g[3] = 0, g[4] = 0, g[5] = 2 * a / d, g[6] = 0, g[7] = 0, g[8] = (f + e) / u, g[9] = (m + n) / d, g[10] = -(b + a) / l, g[11] = -1, g[12] = 0, g[13] = 0, g[14] = -(b * a * 2) / l, g[15] = 0, a = [0, 0], b = [0, 0], this.Ir(0, 0, a), this.Ir(1, 1, b), this.Vi[0] = 1 / (b[0] - a[0]), this.Vi[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.Ua.length; a < b; a++) e = this.Ua[a], e.Cf = !1, e.Lq && (c.useProgram(e.Hi), c.uniformMatrix4fv(e.Lq, !1, this.tk));
            c.useProgram(this.Ua[this.Yh].Hi);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE1);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE0);
            this.If = this.bf = null;
            this.zj && (c.bindFramebuffer(c.FRAMEBUFFER, this.hm), c.bindRenderbuffer(c.RENDERBUFFER, this.zj), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, this.width, this.height), this.pp || (c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, this.zj), this.pp = !0), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.Qk = null)
        }
    };
    h.prototype.uc = function() {
        nc(this.Nl, this.Nq, this.zs, this.Mc);
        mc(this.Mc, this.Vi)
    };
    h.prototype.translate = function(b, f) {
        if (0 !== b || 0 !== f) {
            this.mf[0] = b;
            this.mf[1] = f;
            this.mf[2] = 0;
            var c = this.Mc,
                a = this.mf,
                e = a[0],
                n = a[1],
                a = a[2];
            c[12] = c[0] * e + c[4] * n + c[8] * a + c[12];
            c[13] = c[1] * e + c[5] * n + c[9] * a + c[13];
            c[14] = c[2] * e + c[6] * n + c[10] * a + c[14];
            c[15] = c[3] * e + c[7] * n + c[11] * a + c[15]
        }
    };
    h.prototype.scale = function(b, f) {
        if (1 !== b || 1 !== f) this.mf[0] = b, this.mf[1] = f, this.mf[2] = 1, mc(this.Mc, this.mf)
    };
    h.prototype.Sg = function(b) {
        if (0 !== b) {
            var f = this.Mc,
                c, a = Math.sin(b);
            b = Math.cos(b);
            var e = f[0],
                n = f[1],
                m = f[2],
                g = f[3],
                u = f[4],
                d = f[5],
                l = f[6],
                C = f[7];
            c ? f !== c && (c[8] = f[8], c[9] = f[9], c[10] = f[10], c[11] = f[11], c[12] = f[12], c[13] = f[13], c[14] = f[14], c[15] = f[15]) : c = f;
            c[0] = e * b + u * a;
            c[1] = n * b + d * a;
            c[2] = m * b + l * a;
            c[3] = g * b + C * a;
            c[4] = e * -a + u * b;
            c[5] = n * -a + d * b;
            c[6] = m * -a + l * b;
            c[7] = g * -a + C * b
        }
    };
    h.prototype.mc = function() {
        if (!g(this.Sm, this.Mc)) {
            var b = this.Ec();
            b.type = 5;
            b.V ? lc(this.Mc, b.V) : b.V = kc(this.Mc);
            lc(this.Mc, this.Sm);
            this.cc = !1
        }
    };
    h.prototype.Vk = function(b) {
        this.Ja && (32760 < b && (b = 32760), this.Wl = this.Nl[2] - this.xl - b * this.Gy)
    };
    d.prototype.nv = function() {
        var b = this.q,
            f = this.n;
        0 !== this.lc ? (b.depthMask(!0), b.colorMask(!1, !1, !1, !1), b.disable(b.BLEND), b.bindFramebuffer(b.FRAMEBUFFER, f.hm), b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.clear(b.DEPTH_BUFFER_BIT), b.bindFramebuffer(b.FRAMEBUFFER, null), f.ak = !0) : (b.depthMask(!1), b.colorMask(!0, !0, !0, !0), b.enable(b.BLEND), f.ak = !1)
    };
    d.prototype.rv = function() {
        this.q.bindTexture(this.q.TEXTURE_2D, this.Zc)
    };
    d.prototype.sv = function() {
        var b = this.q;
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, this.Zc);
        b.activeTexture(b.TEXTURE0)
    };
    d.prototype.ov = function() {
        var b = this.tr,
            f = this.n;
        f.uj = b;
        f = f.jg;
        f.Fg && f.sk !== b && (f.sk = b, this.q.uniform1f(f.Fg, b))
    };
    d.prototype.iv = function() {
        this.q.drawElements(this.q.TRIANGLES, this.Gd, this.q.UNSIGNED_SHORT, this.lc)
    };
    d.prototype.kv = function() {
        this.q.blendFunc(this.lc, this.Gd)
    };
    d.prototype.tv = function() {
        var b, f, c, a = this.n.Ua,
            e = this.n.Cp;
        b = 0;
        for (f = a.length; b < f; b++) c = a[b], b === e && c.pk ? (c.oo(this.V), c.Cf = !0) : c.Cf = !1;
        lc(this.V, this.n.Vl)
    };
    d.prototype.jv = function() {
        var b = this.q,
            f = this.n;
        this.Zc ? (f.If === this.Zc && (b.activeTexture(b.TEXTURE1), b.bindTexture(b.TEXTURE_2D, null), f.If = null, b.activeTexture(b.TEXTURE0)), b.bindFramebuffer(b.FRAMEBUFFER, f.hm), f.ak || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.Zc, 0)) : (f.Ja || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.bindFramebuffer(b.FRAMEBUFFER, null))
    };
    d.prototype.gv = function() {
        var b = this.q,
            f = this.lc;
        0 === f ? (b.clearColor(this.V[0], this.V[1], this.V[2], this.V[3]), b.clear(b.COLOR_BUFFER_BIT)) : 1 === f ? (b.enable(b.SCISSOR_TEST), b.scissor(this.V[0], this.V[1], this.V[2], this.V[3]), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.disable(b.SCISSOR_TEST)) : b.clear(b.DEPTH_BUFFER_BIT)
    };
    d.prototype.mv = function() {
        var b = this.q;
        0 !== this.lc ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST)
    };
    d.prototype.hv = function() {
        var b = this.q,
            f = this.n;
        f.Ja && b.disable(b.DEPTH_TEST);
        var c = f.Ua[1];
        b.useProgram(c.Hi);
        !c.Cf && c.pk && (c.oo(f.Vl), c.Cf = !0);
        b.enableVertexAttribArray(c.Wc);
        b.bindBuffer(b.ARRAY_BUFFER, f.Bn);
        b.vertexAttribPointer(c.Wc, 4, b.FLOAT, !1, 0, 0);
        b.drawArrays(b.POINTS, this.lc / 4, this.Gd);
        c = f.jg;
        b.useProgram(c.Hi);
        0 <= c.Wc && (b.enableVertexAttribArray(c.Wc), b.bindBuffer(b.ARRAY_BUFFER, f.Ui[f.Zd]), b.vertexAttribPointer(c.Wc, f.Ja ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= c.ff && (b.enableVertexAttribArray(c.ff), b.bindBuffer(b.ARRAY_BUFFER, f.Oi[f.Zd]), b.vertexAttribPointer(c.ff, 2, b.FLOAT, !1, 0, 0));
        f.Ja && b.enable(b.DEPTH_TEST)
    };
    d.prototype.pv = function() {
        var b = this.q,
            f = this.n,
            c = f.Ua[this.lc];
        f.Cp = this.lc;
        f.jg = c;
        b.useProgram(c.Hi);
        !c.Cf && c.pk && (c.oo(f.Vl), c.Cf = !0);
        c.Fg && c.sk !== f.uj && (c.sk = f.uj, b.uniform1f(c.Fg, f.uj));
        0 <= c.Wc && (b.enableVertexAttribArray(c.Wc), b.bindBuffer(b.ARRAY_BUFFER, f.Ui[f.Zd]), b.vertexAttribPointer(c.Wc, f.Ja ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= c.ff && (b.enableVertexAttribArray(c.ff), b.bindBuffer(b.ARRAY_BUFFER, f.Oi[f.Zd]), b.vertexAttribPointer(c.ff, 2, b.FLOAT, !1, 0, 0))
    };
    d.prototype.lv = function() {
        var b = this.V;
        this.q.uniform4f(this.n.jg.Zm, b[0], b[1], b[2], b[3])
    };
    d.prototype.qv = function() {
        var b, f, c = this.n.jg,
            a = this.q;
        b = this.V;
        c.fi && this.n.If !== this.Zc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.Zc), this.n.If = this.Zc, a.activeTexture(a.TEXTURE0));
        var e = b[0];
        c.an && e !== c.Wq && (c.Wq = e, a.uniform1f(c.an, e));
        e = b[1];
        c.$m && e !== c.Vq && (c.Vq = e, a.uniform1f(c.$m, e));
        e = b[2];
        f = b[3];
        !c.Mf || e === c.Qq && f === c.Rq || (c.Qq = e, c.Rq = f, a.uniform2f(c.Mf, e, f));
        e = b[4];
        f = b[5];
        !c.Lf || e === c.Oq && f === c.Pq || (c.Oq = e, c.Pq = f, a.uniform2f(c.Lf, e, f));
        e = b[6];
        c.ei && e !== c.Tq && (c.Tq = e, a.uniform1f(c.ei, e));
        e = b[7];
        c.di && e !== c.Sq && (c.Sq = e, a.uniform1f(c.di, e));
        e = b[8];
        f = b[9];
        !c.ii || e === c.$q && f === c.br || (c.$q = e, c.br = f, a.uniform2f(c.ii, e, f));
        e = b[10];
        f = b[11];
        !c.gi || e === c.Xq && f === c.Yq || (c.Xq = e, c.Yq = f, a.uniform2f(c.gi, e, f));
        e = b[12];
        c.hi && e !== c.Zq && (c.Zq = e, a.uniform1f(c.hi, e));
        if (c.T.length)
            for (b = 0, f = c.T.length; b < f; b++) e = this.cs[b], e !== c.Rm[b] && (c.Rm[b] = e, a.uniform1f(c.T[b][1], e))
    };
    h.prototype.Ec = function() {
        this.Yd === this.Ke.length && this.Ke.push(new d(0, this));
        return this.Ke[this.Yd++]
    };
    h.prototype.Ue = function() {
        if (0 !== this.Yd && !this.q.isContextLost()) {
            var b = this.q;
            0 < this.Cn && (b.bindBuffer(b.ARRAY_BUFFER, this.Bn), b.bufferSubData(b.ARRAY_BUFFER, 0, this.Fr.subarray(0, this.Cn)), f && 0 <= f.Wc && "<point>" === f.name && b.vertexAttribPointer(f.Wc, 4, b.FLOAT, !1, 0, 0));
            if (0 < this.Ce) {
                var f = this.jg;
                b.bindBuffer(b.ARRAY_BUFFER, this.Ui[this.Zd]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.ql.subarray(0, this.Ce));
                f && 0 <= f.Wc && "<point>" !== f.name && b.vertexAttribPointer(f.Wc, this.Ja ? 3 : 2, b.FLOAT, !1, 0, 0);
                b.bindBuffer(b.ARRAY_BUFFER, this.Oi[this.Zd]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.el.subarray(0, this.Wg));
                f && 0 <= f.ff && "<point>" !== f.name && b.vertexAttribPointer(f.ff, 2, b.FLOAT, !1, 0, 0)
            }
            for (var c, b = 0, f = this.Yd; b < f; b++) switch (c = this.Ke[b], c.type) {
                case 1:
                    c.iv();
                    break;
                case 2:
                    c.rv();
                    break;
                case 3:
                    c.ov();
                    break;
                case 4:
                    c.kv();
                    break;
                case 5:
                    c.tv();
                    break;
                case 6:
                    c.jv();
                    break;
                case 7:
                    c.gv();
                    break;
                case 8:
                    c.hv();
                    break;
                case 9:
                    c.pv();
                    break;
                case 10:
                    c.qv();
                    break;
                case 11:
                    c.sv();
                    break;
                case 12:
                    c.lv();
                    break;
                case 13:
                    c.mv();
                    break;
                case 14:
                    c.nv()
            }
            this.Cn = this.Wg = this.Ce = this.Yd = 0;
            this.ak = this.cc = !1;
            this.Zd++;
            4 <= this.Zd && (this.Zd = 0)
        }
    };
    h.prototype.ve = function(b) {
        if (b !== this.Cq && !this.Nh) {
            var f = this.Ec();
            f.type = 3;
            this.Cq = f.tr = b;
            this.cc = !1
        }
    };
    h.prototype.wb = function(b) {
        if (b !== this.bf) {
            var f = this.Ec();
            f.type = 2;
            this.bf = f.Zc = b;
            this.cc = !1
        }
    };
    h.prototype.Rd = function(b, f) {
        if ((b !== this.Eq || f !== this.Aq) && !this.Nh) {
            var c = this.Ec();
            c.type = 4;
            c.lc = b;
            c.Gd = f;
            this.Eq = b;
            this.Aq = f;
            this.cc = !1
        }
    };
    h.prototype.Sn = function() {
        this.Rd(this.q.ONE, this.q.ONE_MINUS_SRC_ALPHA)
    };
    h.prototype.Sf = function(b, f, c, a, e, n, m, g) {
        15992 <= this.Ce && this.Ue();
        var u = this.Ce,
            d = this.Wg,
            l = this.ql,
            C = this.el,
            q = this.Wl;
        if (this.cc) this.Ke[this.Yd -
            1].Gd += 6;
        else {
            var k = this.Ec();
            k.type = 1;
            k.lc = this.Ja ? u : u / 2 * 3;
            k.Gd = 6;
            this.cc = !0
        }
        this.Ja ? (l[u++] = b, l[u++] = f, l[u++] = q, l[u++] = c, l[u++] = a, l[u++] = q, l[u++] = e, l[u++] = n, l[u++] = q, l[u++] = m, l[u++] = g, l[u++] = q) : (l[u++] = b, l[u++] = f, l[u++] = c, l[u++] = a, l[u++] = e, l[u++] = n, l[u++] = m, l[u++] = g);
        C[d++] = 0;
        C[d++] = 0;
        C[d++] = 1;
        C[d++] = 0;
        C[d++] = 1;
        C[d++] = 1;
        C[d++] = 0;
        C[d++] = 1;
        this.Ce = u;
        this.Wg = d
    };
    h.prototype.Od = function(b, f, c, a, e, n, m, g, u) {
        15992 <= this.Ce && this.Ue();
        var d = this.Ce,
            l = this.Wg,
            q = this.ql,
            k = this.el,
            h = this.Wl;
        if (this.cc) this.Ke[this.Yd -
            1].Gd += 6;
        else {
            var p = this.Ec();
            p.type = 1;
            p.lc = this.Ja ? d : d / 2 * 3;
            p.Gd = 6;
            this.cc = !0
        }
        var p = u.left,
            r = u.top,
            G = u.right;
        u = u.bottom;
        this.Ja ? (q[d++] = b, q[d++] = f, q[d++] = h, q[d++] = c, q[d++] = a, q[d++] = h, q[d++] = e, q[d++] = n, q[d++] = h, q[d++] = m, q[d++] = g, q[d++] = h) : (q[d++] = b, q[d++] = f, q[d++] = c, q[d++] = a, q[d++] = e, q[d++] = n, q[d++] = m, q[d++] = g);
        k[l++] = p;
        k[l++] = r;
        k[l++] = G;
        k[l++] = r;
        k[l++] = G;
        k[l++] = u;
        k[l++] = p;
        k[l++] = u;
        this.Ce = d;
        this.Wg = l
    };
    h.prototype.Tb = function(b) {
        if (this.Yh !== b) {
            if (!this.Ua[b]) {
                if (0 === this.Yh) return;
                b = 0
            }
            var f = this.Ec();
            f.type = 9;
            this.Yh = f.lc = b;
            this.cc = !1
        }
    };
    h.prototype.xi = function(b) {
        b = this.Ua[b];
        return !(!b.Mf && !b.Lf)
    };
    h.prototype.Gn = function(b) {
        b = this.Ua[b];
        return !!(b.Mf || b.Lf || b.Bp)
    };
    h.prototype.Fn = function(b) {
        return this.Ua[b].md
    };
    h.prototype.Mx = function(b) {
        b = this.Ua[b];
        return 0 !== b.fm || 0 !== b.gm
    };
    h.prototype.xw = function(b) {
        return this.Ua[b].fm
    };
    h.prototype.yw = function(b) {
        return this.Ua[b].gm
    };
    h.prototype.zw = function(b, f) {
        return this.Ua[b].T[f][2]
    };
    h.prototype.Nk = function(b) {
        return this.Ua[b].lp
    };
    h.prototype.Xf = function(b, f, c, a, e, n, m, g, d, q, l, k, h, p, r) {
        var F = this.Ua[this.Yh],
            G, B;
        if (F.Pw || r.length) {
            G = this.Ec();
            G.type = 10;
            G.V ? lc(this.Mc, G.V) : G.V = kc();
            B = G.V;
            B[0] = f;
            B[1] = c;
            B[2] = a;
            B[3] = e;
            B[4] = n;
            B[5] = m;
            B[6] = g;
            B[7] = d;
            B[8] = q;
            B[9] = l;
            B[10] = k;
            B[11] = h;
            B[12] = p;
            F.fi ? G.Zc = b : G.Zc = null;
            if (r.length)
                for (c = G.cs, c.length = r.length, b = 0, f = r.length; b < f; b++) c[b] = r[b];
            this.cc = !1
        }
    };
    h.prototype.clear = function(b, f, c, a) {
        var e = this.Ec();
        e.type = 7;
        e.lc = 0;
        e.V || (e.V = kc());
        e.V[0] = b;
        e.V[1] = f;
        e.V[2] = c;
        e.V[3] = a;
        this.cc = !1
    };
    h.prototype.clearRect = function(b, f, c, a) {
        if (!(0 > c || 0 > a)) {
            var e = this.Ec();
            e.type = 7;
            e.lc = 1;
            e.V || (e.V = kc());
            e.V[0] = b;
            e.V[1] = f;
            e.V[2] = c;
            e.V[3] = a;
            this.cc = !1
        }
    };
    h.prototype.Xr = function(b) {
        if (this.Ja && (b = !!b, this.Nh !== b)) {
            var f = this.Ec();
            f.type = 14;
            f.lc = b ? 1 : 0;
            this.cc = !1;
            this.Nh = b;
            this.Qk = null;
            this.Nh ? this.Tb(2) : this.Tb(0)
        }
    };
    h.prototype.Vr = function(b) {
        if (this.Ja) {
            var f = this.Ec();
            f.type = 13;
            f.lc = b ? 1 : 0;
            this.cc = !1
        }
    };
    h.prototype.Tp = function() {
        lc(this.Sm, p);
        this.uc();
        this.mc();
        var b = this.width / 2,
            f = this.height / 2;
        this.Sf(-b, f, b, f, b, -f, -b, -f);
        lc(p, this.Mc);
        this.mc()
    };
    h.prototype.Ur = function(b, f, c) {
        this.Tb(3);
        var a = this.Ec();
        a.type = 12;
        a.V || (a.V = kc());
        a.V[0] = b;
        a.V[1] = f;
        a.V[2] = c;
        a.V[3] = 1;
        this.cc = !1
    };
    h.prototype.jy = function() {
        this.Tb(0)
    };
    h.prototype.Tx = function() {
        this.Tb(2)
    };
    h.prototype.Lx = function() {
        this.Ue();
        this.q.flush()
    };
    var r = [],
        q = {};
    h.prototype.Xu = function() {
        E(r);
        q = {}
    };
    h.prototype.Dg = function(b, f, c, a) {
        f = !!f;
        c = !!c;
        var e = b.src + "," + f + "," + c + (f ? ",undefined" : ""),
            n = null;
        if ("undefined" !== typeof b.src && q.hasOwnProperty(e)) return n = q[e], n.lj++, n;
        this.Ue();
        var m = this.q,
            g = ka(b.width) && ka(b.height),
            n = m.createTexture();
        m.bindTexture(m.TEXTURE_2D, n);
        m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var d = m.RGBA,
            k = m.RGBA,
            l = m.UNSIGNED_BYTE;
        if (a && !this.ke) switch (a) {
            case 1:
                k = d = m.RGB;
                break;
            case 2:
                l = m.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                l = m.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                k = d = m.RGB, l = m.UNSIGNED_SHORT_5_6_5
        }
        if (!g && f) {
            a = document.createElement("canvas");
            a.width = la(b.width);
            a.height = la(b.height);
            var h = a.getContext("2d");
            h.webkitImageSmoothingEnabled = c;
            h.mozImageSmoothingEnabled = c;
            h.msImageSmoothingEnabled = c;
            h.imageSmoothingEnabled = c;
            h.drawImage(b, 0, 0, b.width, b.height, 0, 0, a.width, a.height);
            m.texImage2D(m.TEXTURE_2D, 0, d, k, l, a)
        } else m.texImage2D(m.TEXTURE_2D, 0, d, k, l, b);
        f ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.REPEAT), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.REPEAT)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE));
        c ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.LINEAR), g && this.Lp ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR_MIPMAP_LINEAR), m.generateMipmap(m.TEXTURE_2D)) : m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST));
        m.bindTexture(m.TEXTURE_2D, null);
        this.bf = null;
        n.Me = b.width;
        n.Le = b.height;
        n.lj = 1;
        n.tp = e;
        r.push(n);
        return q[e] = n
    };
    h.prototype.Zb = function(b, f, c, a) {
        this.Ue();
        var e = this.q;
        this.ke && (a = !1);
        var n = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, n);
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, b, f, 0, e.RGBA, a ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, null);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, c ? e.LINEAR : e.NEAREST);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, c ? e.LINEAR : e.NEAREST);
        e.bindTexture(e.TEXTURE_2D, null);
        this.bf = null;
        n.Me = b;
        n.Le = f;
        r.push(n);
        return n
    };
    h.prototype.Fs = function(b, f, c) {
        this.Ue();
        var a = this.q;
        this.ke && (c = !1);
        a.bindTexture(a.TEXTURE_2D, f);
        a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        try {
            a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, c ? a.UNSIGNED_SHORT_4_4_4_4 : a.UNSIGNED_BYTE, b)
        } catch (e) {
            console && console.error && console.error("Error updating WebGL texture: ", e)
        }
        a.bindTexture(a.TEXTURE_2D, null);
        this.bf = null
    };
    h.prototype.deleteTexture = function(b) {
        b && ("undefined" !== typeof b.lj && 1 < b.lj ? b.lj-- : (this.Ue(), b === this.bf && (this.q.bindTexture(this.q.TEXTURE_2D, null), this.bf = null), b === this.If && (this.q.activeTexture(this.q.TEXTURE1), this.q.bindTexture(this.q.TEXTURE_2D, null), this.q.activeTexture(this.q.TEXTURE0), this.If = null), Da(r, b), "undefined" !== typeof b.tp && delete q[b.tp], this.q.deleteTexture(b)))
    };
    h.prototype.Sb = function(b) {
        if (b !== this.Qk) {
            var f = this.Ec();
            f.type = 6;
            this.Qk = f.Zc = b;
            this.cc = !1
        }
    };
    pb = h
})();
(function() {
    function h(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.rc = (this.Mh = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Nb = !!a.dc;
            this.qq = "undefined" !== typeof window.AppMobi || this.Nb;
            this.qc = !!window.c2cocoonjs;
            this.Uc = !!window.c2ejecta;
            this.qc && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.Uc && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Aa = this.Nb || this.qc || this.Uc;
            this.Ph = /edge\//i.test(navigator.userAgent);
            this.ke = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Ph;
            this.tq = /tizen/i.test(navigator.userAgent);
            this.Zj = /android/i.test(navigator.userAgent) && !this.tq && !this.ke && !this.Ph;
            this.xq = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.ke && !this.Ph;
            this.dx = /ipad/i.test(navigator.userAgent);
            this.Ag = this.xq || this.dx || this.Uc;
            this.Lh = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.ke && !this.Ph;
            this.Km = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Xw = /firefox/i.test(navigator.userAgent);
            this.$w = /safari/i.test(navigator.userAgent) && !this.Lh && !this.ke && !this.Ph;
            this.ax = /windows/i.test(navigator.userAgent);
            this.Ze = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.vq = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.cx = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.ug = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Pm = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.uq = !!window.cr_windows10;
            this.bk = this.vq || this.cx || this.Pm || this.uq;
            this.Ww = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.$j = this.Zj && !this.Lh && !this.Mh && !this.Xw && !this.Km && !this.Aa;
            this.devicePixelRatio = 1;
            this.Hd = this.rc || this.Mh || this.qq || this.qc || this.Zj || this.Ag || this.ug || this.Pm || this.Ww || this.tq || this.Uc;
            this.Hd || (this.Hd = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Th = !!(this.Ag && this.rc && window.indexedDB);
            this.iq = null;
            this.Rw = "";
            this.Th && (this.iq = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.Ze || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Ze = !0);
            this.canvas = a;
            this.oj = document.getElementById("c2canvasdiv");
            this.n = this.q = null;
            this.zm = "(unavailable)";
            this.Ja = !1;
            this.wf = 0;
            this.P = null;
            this.lm = "";
            this.Ij = !1;
            this.rr = this.sr = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Nb && (window.c2runtime = this);
            this.Ze && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.$j && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.H = this.width;
            this.G = this.height;
            this.tj = this.width;
            this.sh = this.height;
            this.$h = window.innerWidth;
            this.Zh = window.innerHeight;
            this.jw = !1;
            this.U = !0;
            this.Rh = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.u = [];
            this.Ra = [];
            this.Wm = {};
            this.gd = [];
            this.em = {};
            this.ee = [];
            this.dh = [];
            this.kl = [];
            this.Ju = [];
            this.Ku = [];
            this.uf = {};
            this.Mm = this.Ye = !1;
            this.fd = 0;
            this.Lm = this.Om = !1;
            this.Bd = [];
            this.Oh = !1;
            this.le = this.ec = this.mk = this.Rn = "";
            this.Li = this.gs = !1;
            this.Hj = [];
            this.Te = this.Se = 0;
            this.gr = 30;
            this.Tl = this.ji = 0;
            this.Yg = 1;
            this.qb = new bb;
            this.De = new bb;
            this.wk = this.Mj = this.yh = this.Td = this.Kf = this.km = this.hk = 0;
            this.oh = null;
            this.Bj = [];
            this.dm = [];
            this.Dj = -1;
            this.bn = [
                []
            ];
            this.io = this.qk = 0;
            this.Ok(null);
            this.ki = [];
            this.li = -1;
            this.mr = this.oi = 0;
            this.Vm = !0;
            this.zh = 0;
            this.Mi = [];
            this.eo = this.Jn = -1;
            this.Wh = !0;
            this.Eg = 0;
            this.Qh = !1;
            this.ly = 0;
            this.fg = null;
            this.Ac = this.fq = !1;
            this.qr = new ca;
            this.jn = new ca;
            this.kn = new ca;
            this.Pr = [];
            this.qd = new db([]);
            this.$n = new db([]);
            this.eg = [];
            this.Uj = {};
            this.Oe = {};
            this.Ie = {};
            this.bh = {};
            this.qp = {};
            this.Kq = this.lk = this.gb = this.rb = this.Jq = this.kk = this.Ca = null;
            this.$g = this.Qm = !1;
            this.mm = [null, null];
            this.Af = 0;
            this.im = "";
            this.oe = {};
            this.Ii = this.df = null;
            this.js = "";
            this.vk = [];
            this.Sx()
        }
    }

    function k(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function g() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function d(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function p(a, b, e, c) {
        try {
            var f = indexedDB.open("_C2SaveStates");
            f.onupgradeneeded = d;
            f.onerror = c;
            f.onsuccess = function(f) {
                f = f.target.result;
                f.onerror = c;
                f.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = e
            }
        } catch (l) {
            c(l)
        }
    }

    function r(a, b, e) {
        try {
            var c = indexedDB.open("_C2SaveStates");
            c.onupgradeneeded = d;
            c.onerror = e;
            c.onsuccess = function(c) {
                c = c.target.result;
                c.onerror = e;
                var f = c.transaction(["saves"]).objectStore("saves").get(a);
                f.onsuccess = function() {
                    f.result ? b(f.result.data) : b(null)
                }
            }
        } catch (f) {
            e(f)
        }
    }

    function q() {
        z("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function b(a) {
        var b, e = {};
        for (b in a) !a.hasOwnProperty(b) || a[b] instanceof ca || a[b] && "undefined" !== typeof a[b].Nz || "spriteCreatedDestroyCallback" !== b && (e[b] = a[b]);
        return e
    }
    var f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    h.prototype.Sx = function() {
        var a = this;
        if (this.Th) this.iq.startServer({
            port: 0,
            localhost_only: !0
        }, function(b) {
            a.Rw = b;
            a.gw(function(b) {
                a.ci(JSON.parse(b))
            }, function() {
                alert("Error fetching data.js")
            })
        }, function(a) {
            alert("error starting local server: " + a)
        });
        else {
            var b;
            this.ug ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var e = "data.js";
            if (this.vq || this.ug || this.Pm || this.uq) e = "data.json";
            b.open("GET", e, !0);
            var c = !1;
            if (!this.Aa && "response" in b && "responseType" in b) try {
                b.responseType = "json", c = "json" === b.responseType
            } catch (f) {
                c = !1
            }
            if (!c && "responseType" in b) try {
                b.responseType = "text"
            } catch (l) {}
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch (n) {}
            this.ug ? b.onreadystatechange = function() {
                4 === b.readyState && a.ci(JSON.parse(b.responseText))
            } : (b.onload = function() {
                if (c) a.ci(b.response);
                else if (a.Uc) {
                    var e = b.responseText,
                        e = e.substr(e.indexOf("{"));
                    a.ci(JSON.parse(e))
                } else a.ci(JSON.parse(b.responseText))
            }, b.onerror = function(a) {
                ea("Error requesting " + e + ":");
                ea(a)
            });
            b.send()
        }
    };
    h.prototype.Uw = function() {
        var a = this,
            b, e, c, f, l, n, m, g, d;
        this.Hf = (!this.Aa || this.Uc || this.rc) && this.yy && !this.$j;
        0 === this.fc && this.Ag && (this.Hf = !1);
        this.devicePixelRatio = this.Hf ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Wb();
        e = !(!this.jw && (!this.Hl || this.Ze || this.bk || this.ug || this.Mh || this.rc || this.Km));
        0 < this.fc && this.setSize(window.innerWidth, window.innerHeight, !0);
        try {
            this.Bv && (this.qc || this.Uc || !this.Aa) && (b = {
                alpha: e,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            }, this.q = this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (u) {}
        if (this.q) {
            if (b = this.q.getExtension("WEBGL_debug_renderer_info")) this.zm = this.q.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.q.getParameter(b.UNMASKED_VENDOR_WEBGL) +
                "]";
            this.Ja && (this.zm += " [front-to-back enabled]");
            this.Aa || (this.Pb = document.createElement("canvas"), jQuery(this.Pb).appendTo(this.canvas.parentNode), this.Pb.oncontextmenu = function() {
                return !1
            }, this.Pb.onselectstart = function() {
                return !1
            }, this.Pb.width = Math.round(this.tj * this.devicePixelRatio), this.Pb.height = Math.round(this.sh * this.devicePixelRatio), jQuery(this.Pb).css({
                width: this.tj + "px",
                height: this.sh + "px"
            }), this.Hr(), this.yn = this.Pb.getContext("2d"));
            this.n = new pb(this.q, this.Hd, this.Ja);
            this.n.we(this.canvas.width, this.canvas.height);
            this.n.Lp = 0 !== this.uv;
            this.P = null;
            this.canvas.addEventListener("webglcontextlost", function(b) {
                b.preventDefault();
                a.ux();
                z("[Construct 2] WebGL context lost");
                window.cr_setSuspended(!0)
            }, !1);
            this.canvas.addEventListener("webglcontextrestored", function() {
                a.n.kq();
                a.n.we(a.n.width, a.n.height, !0);
                a.rb = null;
                a.gb = null;
                a.mm[0] = null;
                a.mm[1] = null;
                a.vx();
                a.U = !0;
                z("[Construct 2] WebGL context restored");
                window.cr_setSuspended(!1)
            }, !1);
            b = 0;
            for (e = this.u.length; b < e; b++)
                for (l = this.u[b], c = 0, f = l.N.length; c < f; c++) m = l.N[c], m.ab = this.n.wm(m.id), m.md = this.n.Fn(m.ab), this.$g = this.$g || this.n.xi(m.ab);
            b = 0;
            for (e = this.gd.length; b < e; b++) {
                g = this.gd[b];
                c = 0;
                for (f = g.N.length; c < f; c++) m = g.N[c], m.ab = this.n.wm(m.id), m.md = this.n.Fn(m.ab);
                g.sd();
                c = 0;
                for (f = g.R.length; c < f; c++) {
                    d = g.R[c];
                    l = 0;
                    for (n = d.N.length; l < n; l++) m = d.N[l], m.ab = this.n.wm(m.id), m.md = this.n.Fn(m.ab), this.$g = this.$g || this.n.xi(m.ab);
                    d.sd()
                }
            }
        } else {
            if (0 < this.fc && this.Nb) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.P = AppMobi.canvas.getContext("2d");
                try {
                    this.P.samplingMode = this.I ? "smooth" : "sharp", this.P.globalScale = 1, this.P.HTML5CompatibilityMode = !0, this.P.imageSmoothingEnabled = this.I
                } catch (q) {}
                0 !== this.width && 0 !== this.height && (this.P.width = this.width, this.P.height = this.height)
            }
            this.P || (this.qc ? (b = {
                antialias: !!this.I,
                alpha: e
            }, this.P = this.canvas.getContext("2d", b)) : (b = {
                alpha: e
            }, this.P = this.canvas.getContext("2d", b)), this.P.webkitImageSmoothingEnabled = this.I, this.P.mozImageSmoothingEnabled = this.I, this.P.msImageSmoothingEnabled = this.I, this.P.imageSmoothingEnabled = this.I);
            this.yn = this.Pb = null
        }
        this.ss = function(b) {
            a.ib(!1, b)
        };
        window == window.top || this.Aa || this.bk || this.ug || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.qc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (z("Reloading for continuous preview"), this.mk = "__c2_continuouspreview", this.Li = !0), this.Cx && !this.Hd && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {});
        this.Aa || (b = function(a) {
            if (ob(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (b) {}
        }, window.navigator.pointerEnabled ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.fc && this.Hf && 1 < this.devicePixelRatio && this.setSize(this.Pa, this.Oa, !0);
        this.ws();
        this.Mw();
        this.go();
        this.ja = {}
    };
    h.prototype.setSize = function(a, b, e) {
        var c = 0,
            f = 0,
            l = 0,
            n = 0,
            n = 0;
        if (this.$h !== a || this.Zh !== b || e) {
            this.$h = a;
            this.Zh = b;
            var m = this.fc,
                g = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Qh) && !this.rc;
            if (g || 0 !== this.fc || e) g && 0 < this.Af && (m = this.Af), e = this.devicePixelRatio, 4 <= m ? (l = this.Pa / this.Oa, a / b > l ? (l *= b, 5 === m ? (n = l * e / this.Pa, 1 < n ? n = Math.floor(n) : 1 > n && (n = 1 / Math.ceil(1 / n)), l = this.Pa * n / e, n = this.Oa * n / e, c = (a - l) / 2, f = (b - n) / 2, a = l, b = n) : (c = (a - l) / 2, a = l)) : (n = a / l, 5 === m ? (n = n * e / this.Oa, 1 < n ? n = Math.floor(n) : 1 > n && (n = 1 / Math.ceil(1 / n)), l = this.Pa * n / e, n = this.Oa * n / e, c = (a - l) / 2, f = (b - n) / 2, a = l) : f = (b - n) / 2, b = n), g && !this.Ze && (f = c = 0)) : this.Ze && this.Qh && 0 === this.Up && (c = Math.floor((a - this.Pa) / 2), f = Math.floor((b - this.Oa) / 2), a = this.Pa, b = this.Oa), 2 > m && (this.mh = e), this.tj = Math.round(a), this.sh = Math.round(b), this.width = Math.round(a * e), this.height = Math.round(b * e), this.U = !0, this.Hs ? (this.H = this.width, this.G = this.height, this.Ic = !0) : this.width < this.Pa && this.height < this.Oa || 1 === m ? (this.H = this.width, this.G = this.height, this.Ic = !0) : (this.H = this.Pa, this.G = this.Oa, this.Ic = !1, 2 === m ? (l = this.Pa / this.Oa, m = this.$h / this.Zh, m < l ? this.H = this.G * m : m > l && (this.G = this.H / m)) : 3 === m && (l = this.Pa / this.Oa, m = this.$h / this.Zh, m > l ? this.H = this.G * m : m < l && (this.G = this.H / m))), this.oj && !this.Aa && (jQuery(this.oj).css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px",
                "margin-left": Math.floor(c) + "px",
                "margin-top": Math.floor(f) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * e), this.canvas.height = Math.round(b * e), this.Uc ? (this.canvas.style.left = Math.floor(c) + "px", this.canvas.style.top = Math.floor(f) + "px", this.canvas.style.width = Math.round(a) +
                "px", this.canvas.style.height = Math.round(b) + "px") : this.Hf && !this.Aa && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.Pb && (this.Pb.width = Math.round(a * e), this.Pb.height = Math.round(b * e), this.Pb.style.width = this.tj + "px", this.Pb.style.height = this.sh + "px"), this.n && this.n.we(Math.round(a * e), Math.round(b * e)), this.Nb && this.P && (this.P.width = Math.round(a), this.P.height = Math.round(b)), this.P && (this.P.webkitImageSmoothingEnabled = this.I, this.P.mozImageSmoothingEnabled = this.I, this.P.msImageSmoothingEnabled = this.I, this.P.imageSmoothingEnabled = this.I), this.ws(), this.xq && !this.rc && window.scrollTo(0, 0)
        }
    };
    h.prototype.ws = function() {
        if (this.Pu && 0 !== this.wn) {
            var a = "portrait";
            2 === this.wn && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    h.prototype.ux = function() {
        this.n.Xu();
        this.Qm = !0;
        var a, b, e;
        a = 0;
        for (b = this.u.length; a < b; a++) e = this.u[a], e.yk && e.yk()
    };
    h.prototype.vx = function() {
        this.Qm = !1;
        var a, b, e;
        a = 0;
        for (b = this.u.length; a < b; a++) e = this.u[a], e.un && e.un()
    };
    h.prototype.Hr = function() {
        if (!this.Aa) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Qh) && !this.rc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Pb).css(a)
        }
    };
    var c = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    h.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Rh)
            for (z("[Construct 2] Suspending"), this.Rh = !0, -1 !== this.Jn && c && c(this.Jn), -1 !== this.eo && clearTimeout(this.eo), a = 0, b = this.Mi.length; a < b; a++) this.Mi[a](!0);
        else if (!a && this.Rh) {
            z("[Construct 2] Resuming");
            this.Rh = !1;
            this.hk = Ya();
            this.Kf = Ya();
            a = this.ji = this.Mj = 0;
            for (b = this.Mi.length; a < b; a++) this.Mi[a](!1);
            this.ib(!1)
        }
    };
    h.prototype.gp = function(a) {
        this.Mi.push(a)
    };
    h.prototype.Fe = function(a) {
        return this.vk[a]
    };
    h.prototype.ci = function(a) {
        a && a.project || ea("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.Sp = a[1];
        this.fc = a[12];
        this.Up = a[12];
        this.Pa = a[10];
        this.Oa = a[11];
        this.Dr = this.Pa / 2;
        this.Er = this.Oa / 2;
        this.Aa && !this.Uc && (4 <= a[12] || 0 === a[12]) && (z("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Up = this.fc = 3);
        this.ro = a[18];
        this.ef = a[19];
        if (0 === this.ef) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.Yr(b, "loading-logo.png");
            this.df = {
                rk: b
            }
        } else if (4 === this.ef) {
            b = new Image;
            b.src = "";
            var e = new Image;
            e.src = "";
            var c = new Image;
            c.src = "";
            var f = new Image;
            f.src = "";
            var l = new Image;
            l.src = "";
            var n = new Image;
            n.src = "";
            var m = new Image;
            m.src = "";
            var g = new Image;
            g.src = "";
            var d = new Image;
            d.src = "";
            var u = new Image;
            u.src = "";
            var q = new Image;
            q.src = "";
            var k = new Image;
            k.src = "";
            this.df = {
                rk: [b, e, c, f],
                Ix: [l, n, m, g],
                Fy: [d, u, q, k]
            }
        }
        this.oi = a[21];
        this.vk = pc();
        this.Sd = new N(this);
        b = 0;
        for (e = a[2].length; b < e; b++) m = a[2][b], c = this.Fe(m[0]), qb(m, c.prototype), g = new c(this), g.Yk = m[1], g.$e = m[2], g.hr = m[9], g.S && g.S(), this.plugins.push(g);
        this.vk = pc();
        b = 0;
        for (e = a[3].length; b < e; b++) {
            m = a[3][b];
            l = this.Fe(m[1]);
            g = null;
            c = 0;
            for (f = this.plugins.length; c < f; c++)
                if (this.plugins[c] instanceof l) {
                    g = this.plugins[c];
                    break
                }
            d = new g.Da(g);
            d.name = m[0];
            d.O = m[2];
            d.Im = m[3].slice(0);
            d.Ay = m[3].length;
            d.Qu = m[4];
            d.lw = m[5];
            d.ga = m[11];
            d.O ? (d.uk = [], d.ge = this.zh++, d.Ma = null) : (d.uk = null, d.ge = -1, d.Ma = []);
            d.Fj = null;
            d.ng = null;
            d.Mp = null;
            d.sc = !1;
            d.yc = null;
            m[6] ? (d.ao = m[6][0], d.bo = m[6][1], d.co = m[6][2]) : (d.ao = null, d.bo = 0, d.co = 0);
            m[7] ? d.pc = m[7] : d.pc = null;
            d.index = b;
            d.d = [];
            d.xj = [];
            d.Ae = [new rb(d)];
            d.Cd = 0;
            d.Rc = null;
            d.av = 0;
            d.Vg = !0;
            d.ll = sb;
            d.aq = tb;
            d.vw = ub;
            d.Z = vb;
            d.Ai = xb;
            d.Og = yb;
            d.te = zb;
            d.Oj = Ab;
            d.nm = Bb;
            d.qm = Cb;
            d.zd = Db;
            d.tm = Eb;
            d.xp = new eb(this.Pa, this.Oa);
            d.mp = !0;
            d.np = !1;
            d.ja = {};
            d.toString = Fb;
            d.Ra = [];
            c = 0;
            for (f = m[8].length; c < f; c++) {
                u = m[8][c];
                q = this.Fe(u[1]);
                k = null;
                l = 0;
                for (n = this.Ra.length; l < n; l++)
                    if (this.Ra[l] instanceof q) {
                        k = this.Ra[l];
                        break
                    }
                k || (k = new q(this), k.jr = [], k.Jg = new ca, k.S && k.S(), this.Ra.push(k)); - 1 === k.jr.indexOf(d) && k.jr.push(d);
                l = new k.Da(k, d);
                l.name = u[0];
                l.ga = u[2];
                l.S();
                d.Ra.push(l)
            }
            d.global = m[9];
            d.Nm = m[10];
            d.N = [];
            c = 0;
            for (f = m[12].length; c < f; c++) d.N.push({
                id: m[12][c][0],
                name: m[12][c][1],
                ab: -1,
                md: !1,
                Xb: !0,
                index: c
            });
            d.kA = m[13];
            this.ro && !d.O && !d.Nm && g.$e || d.S();
            d.name && (this.types[d.name] = d);
            this.u.push(d);
            g.Yk && (c = new g.qa(d), c.uid = this.oi++, c.Kr = this.mr++, c.Ef = 0, c.Eh = Gb, c.toString = Hb, c.A = m[14], c.S(), d.d.push(c), this.oe[c.uid.toString()] = c)
        }
        b = 0;
        for (e = a[4].length; b < e; b++)
            for (l = a[4][b], n = this.u[l[0]], c = 1, f = l.length; c < f; c++) m = this.u[l[c]], m.Ma.push(n), n.uk.push(m);
        b = 0;
        for (e = a[28].length; b < e; b++) {
            l = a[28][b];
            n = [];
            c = 0;
            for (f = l.length; c < f; c++) n.push(this.u[l[c]]);
            c = 0;
            for (f = n.length; c < f; c++) n[c].sc = !0, n[c].yc = n
        }
        if (0 < this.zh)
            for (b = 0, e = this.u.length; b < e; b++)
                if (m = this.u[b], !m.O && m.Ma.length) {
                    m.Fj = Array(this.zh);
                    m.ng = Array(this.zh);
                    m.Mp = Array(this.zh);
                    d = [];
                    c = k = q = u = 0;
                    for (f = m.Ma.length; c < f; c++)
                        for (g = m.Ma[c], m.Fj[g.ge] = u, u += g.Ay, m.ng[g.ge] = q, q += g.Qu, m.Mp[g.ge] = k, k += g.lw, l = 0, n = g.N.length; l < n; l++) d.push(va({}, g.N[l]));
                    m.N = d.concat(m.N);
                    c = 0;
                    for (f = m.N.length; c < f; c++) m.N[c].index = c
                }
        b = 0;
        for (e = a[5].length; b < e; b++) m = a[5][b], c = new Ib(this, m), this.Wm[c.name] = c, this.gd.push(c);
        b = 0;
        for (e = a[6].length; b < e; b++) m = a[6][b], c = new Jb(this, m), this.em[c.name] = c, this.ee.push(c);
        b = 0;
        for (e = this.ee.length; b < e; b++) this.ee[b].$a();
        b = 0;
        for (e = this.ee.length; b < e; b++) this.ee[b].no();
        b = 0;
        for (e = this.kl.length; b < e; b++) this.kl[b].$a();
        E(this.kl);
        this.Ou = a[7];
        this.im = a[8];
        this.ld = a[9];
        this.mh = 1;
        this.Bv = a[13];
        this.I = a[14];
        this.Hl = a[15];
        this.yy = a[17];
        this.wn = a[20];
        this.Pu = 0 < this.wn;
        this.Cx = a[22];
        this.Ic = this.Hs = a[23];
        this.uv = a[24];
        this.Jx = a[25];
        this.Ja = a[27] && !this.ke;
        this.Zk = Date.now();
        E(this.vk);
        this.Uw()
    };
    var a = !1;
    h.prototype.Gs = function(b, e) {
        b.cocoonLazyLoad = !0;
        b.onerror = function(e) {
            a = b.sp = !0;
            console && console.error && console.error("Error loading image '" + b.src + "': ", e)
        };
        this.Uc ? b.src = e : b.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(e, function(a) {
            b.src = a
        }, function(c) {
            a = b.sp = !0;
            console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", c)
        }) : (b.crossOrigin = "anonymous", this.Yr(b, e)));
        this.dh.push(b)
    };
    h.prototype.iw = function(a) {
        var b, e;
        b = 0;
        for (e = this.dh.length; b < e; b++)
            if (this.dh[b].Yu === a) return this.dh[b];
        return null
    };
    var e = 0,
        n = !1;
    h.prototype.Mw = function() {
        this.fg && (e = this.fg.gy(this.Ou))
    };
    h.prototype.op = function() {
        var a = e,
            b = 0,
            c = 0,
            f = !0,
            l, m, c = 0;
        for (l = this.dh.length; c < l; c++) {
            m = this.dh[c];
            var d = m.Ap;
            if (!d || 0 >= d) d = 5E4;
            a += d;
            m.src && (m.complete || m.loaded) && !m.sp ? b += d : f = !1
        }
        f && this.Jx && this.fg && (n || (this.fg.my(), n = !0), c = this.fg.ww(), b += c, c < e && (f = !1));
        this.ba = 0 == a ? 1 : b / a;
        return f
    };
    var m = !1;
    h.prototype.go = function() {
        if (this.P || this.n) {
            var b = this.P || this.yn;
            this.Pb && this.Hr();
            this.ba = 0;
            this.Iq = -1;
            var e = this;
            if (this.op() && (4 !== this.ef || m)) this.Nw();
            else {
                var c = Date.now() - this.Zk;
                if (b) {
                    var l = this.width,
                        n = this.height,
                        d = this.devicePixelRatio;
                    if (3 > this.ef && (this.qc || 500 <= c && this.Iq != this.ba)) {
                        b.clearRect(0, 0, l, n);
                        var c = l / 2,
                            n = n / 2,
                            l = 0 === this.ef && this.df.rk.complete,
                            g = 40 * d,
                            u = 0,
                            q = 80 * d,
                            k;
                        if (l) {
                            var h = this.df.rk,
                                q = h.width * d;
                            k = h.height * d;
                            g = q / 2;
                            u = k / 2;
                            b.drawImage(h, qa(c - g), qa(n - u), q, k)
                        }
                        1 >= this.ef ? (c = qa(c - g) + .5, n = qa(n + (u + (l ? 12 * d : 0))) + .5, b.fillStyle = a ? "red" : "DodgerBlue", b.fillRect(c, n, Math.floor(q * this.ba), 6 * d), b.strokeStyle = "black", b.strokeRect(c, n, q, 6 * d), b.strokeStyle = "white", b.strokeRect(c - 1 * d, n - 1 * d, q + 2 * d, 8 * d)) : 2 === this.ef && (b.font = this.Uc ? "12pt ArialMT" : "12pt Arial", b.fillStyle = a ? "#f00" : "#999", b.jA = "middle", d = Math.round(100 * this.ba) + "%", l = b.measureText ? b.measureText(d) : null, b.fillText(d, c - (l ? l.width : 0) / 2, n));
                        this.Iq = this.ba
                    } else if (4 === this.ef) {
                        this.zv(b);
                        f ? f(function() {
                            e.go()
                        }) : setTimeout(function() {
                            e.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    e.go()
                }, this.qc ? 10 : 100)
            }
        }
    };
    var y = -1,
        u = "undefined" === typeof cr_is_preview ? 200 : 0,
        D = !0,
        l = !1,
        C = 0,
        R = 0,
        x = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        A = null,
        F = null,
        G = 0;
    h.prototype.zv = function(b) {
        if (!m) {
            for (var e = Math.ceil(this.width), c = Math.ceil(this.height), f = this.df.rk, n = this.df.Ix, d = this.df.Fy, g = 0; 4 > g; ++g)
                if (!f[g].complete || !n[g].complete || !d[g].complete) return;
            0 === G && (y = Date.now());
            var g = Date.now(),
                q = !1,
                h = b,
                p, r;
            D || l ? (b.clearRect(0, 0, e, c), A && A.width === e && A.height === c || (A = document.createElement("canvas"), A.width = e, A.height = c, F = A.getContext("2d")), h = F, q = !0, D && 1 === G && (y = Date.now())) : b.globalAlpha = 1;
            h.fillStyle = "#333333";
            h.fillRect(0, 0, e, c);
            256 < this.sh ? (p = Ea(.22 * c, 105, .6 * e), r = .25 * p, h.drawImage(k(n, p), .5 * e - p / 2, .2 * c - r / 2, p, r), r = p = Math.min(.395 * c, .95 * e), h.drawImage(k(f, p), .5 * e - p / 2, .485 * c - r / 2, p, r), p = Ea(.22 * c, 105, .6 * e), r = .25 * p, h.drawImage(k(d, p), .5 * e - p / 2, .868 * c - r / 2, p, r), h.fillStyle = "#3C3C3C", p = e, r = Math.max(.005 * c, 2), h.fillRect(0, .8 * c - r / 2, p, r), h.fillStyle = a ? "red" : "#E0FF65", p = e * this.ba, h.fillRect(.5 * e - p / 2, .8 * c - r / 2, p, r)) : (r = p = .55 * c, h.drawImage(k(f, p), .5 * e - p / 2, .45 * c - r / 2, p, r), h.fillStyle = "#3C3C3C", p = e, r = Math.max(.005 * c, 2), h.fillRect(0, .85 * c - r / 2, p, r), h.fillStyle = a ? "red" : "#E0FF65", p = e * this.ba, h.fillRect(.5 * e - p / 2, .85 * c - r / 2, p, r));
            q && (D ? b.globalAlpha = 0 === G ? 0 : Math.min((g - y) / 300, 1) : l && (b.globalAlpha = Math.max(1 - (g - R) / 300, 0)), b.drawImage(A, 0, 0, e, c));
            D && 300 <= g - y && 2 <= G && (D = !1, C = g);
            !D && g - C >= x && !l && 1 <= this.ba && (l = !0, R = g);
            if (l && g - R >= 300 + u || "undefined" !== typeof cr_is_preview && 1 <= this.ba && 500 > Date.now() - y) m = !0, l = D = !1, this.df = F = A = null;
            ++G
        }
    };
    h.prototype.Nw = function() {
        this.Pb && (this.canvas.parentNode.removeChild(this.Pb), this.Pb = this.yn = null);
        this.Zk = Date.now();
        this.Kf = Ya();
        var a, b, e;
        if (this.ro)
            for (a = 0, b = this.u.length; a < b; a++) e = this.u[a], e.O || e.Nm || !e.wa.$e || e.S();
        else this.Wh = !1;
        a = 0;
        for (b = this.gd.length; a < b; a++) this.gd[a].Zu();
        2 <= this.fc && (a = this.Pa / this.Oa, b = this.width / this.height, this.mh = 2 !== this.fc && b > a || 2 === this.fc && b < a ? this.height / this.Oa : this.width / this.Pa);
        this.Sp ? this.Wm[this.Sp].Yn() : this.gd[0].Yn();
        this.ro || (this.Eg = 1, this.trigger(N.prototype.g.Jo, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.u.length; a < b; a++) e = this.u[a], e.tx && e.tx();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.ib(!1);
        this.Nb && AppMobi.webview.execute("onGameReady();")
    };
    h.prototype.ib = function(a, b, e) {
        if (this.Ca) {
            var c = Ya();
            if (e || !this.Rh || a) {
                a || (f ? this.Jn = f(this.ss) : this.eo = setTimeout(this.ss, this.Hd ? 1 : 16));
                b = b || c;
                var l = this.fc;
                ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.rc) || this.Qh) && 0 < this.Af && (l = this.Af);
                if (0 < l) {
                    var l = window.innerWidth,
                        m = window.innerHeight;
                    this.$h === l && this.Zh === m || this.setSize(l, m)
                }
                this.Aa || (e ? (this.Ij || (this.lm = jQuery(this.canvas).css("margin") || "0", this.Ij = !0), this.Lh || this.Ze || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Ij ? (this.Lh || this.Ze || jQuery(this.canvas).css("margin", this.lm), this.lm = "", this.Ij = !1, 0 === this.fc && this.setSize(Math.round(this.sr / this.devicePixelRatio), Math.round(this.rr / this.devicePixelRatio), !0)) : (this.sr = this.width, this.rr = this.height));
                this.Wh && (e = this.op(), this.Eg = this.ba, e && (this.Wh = !1, this.ba = 1, this.trigger(N.prototype.g.Jo, null)));
                this.kx(b);
                !this.U && !this.qc || this.Qm || this.Li || a || (this.U = !1, this.n ? this.Kb() : this.Hc(), this.Ii && (this.canvas && this.canvas.toDataURL && (this.js = this.canvas.toDataURL(this.Ii[0], this.Ii[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.js), this.trigger(N.prototype.g.yt, null)), this.Ii = null));
                this.Rz || (this.Td++, this.yh++, this.Mj++);
                this.ji += Ya() - c
            }
        }
    };
    h.prototype.kx = function(a) {
        var b, e, c, f, l, m, n, d;
        1E3 <= a - this.Kf && (this.Kf += 1E3, 1E3 <= a - this.Kf && (this.Kf = a), this.km = this.Mj, this.Mj = 0, this.Tl = this.ji, this.ji = 0);
        0 !== this.hk && (b = a - this.hk, 0 > b && (b = 0), this.Te = b / 1E3, .5 < this.Te ? this.Te = 0 : this.Te > 1 / this.gr && (this.Te = 1 / this.gr));
        this.hk = a;
        this.Se = this.Te * this.Yg;
        this.qb.add(this.Se);
        this.De.add(this.Te);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Qh) && !this.rc;
        2 <= this.fc || a && 0 < this.Af ? (b = this.Pa / this.Oa, e = this.width / this.height, c = this.fc, a && 0 < this.Af && (c = this.Af), this.mh = 2 !== c && e > b || 2 === c && e < b ? this.height / this.Oa : this.width / this.Pa, this.Ca && (this.Ca.Sr(this.Ca.scrollX), this.Ca.Tr(this.Ca.scrollY))) : this.mh = this.Hf ? this.devicePixelRatio : 1;
        this.Wb();
        this.fd++;
        this.Sd.Xx();
        this.fd--;
        this.Wb();
        this.fd++;
        e = this.qr.td();
        a = 0;
        for (b = e.length; a < b; a++) e[a].dA();
        a = 0;
        for (b = this.u.length; a < b; a++)
            if (m = this.u[a], !m.O && (m.Ra.length || m.Ma.length))
                for (e = 0, c = m.d.length; e < c; e++)
                    for (n = m.d[e], f = 0, l = n.M.length; f < l; f++) n.M[f].ib();
        a = 0;
        for (b = this.u.length; a < b; a++)
            if (m = this.u[a], !m.O && (m.Ra.length || m.Ma.length))
                for (e = 0, c = m.d.length; e < c; e++)
                    for (n = m.d[e], f = 0, l = n.M.length; f < l; f++) d = n.M[f], d.Hx && d.Hx();
        e = this.jn.td();
        a = 0;
        for (b = e.length; a < b; a++) e[a].ib();
        this.fd--;
        this.Ow();
        for (a = 0; this.oh && 10 > a++;) this.Hp(this.oh);
        a = 0;
        for (b = this.ee.length; a < b; a++) this.ee[a].Cm = !1;
        this.Ca.yf && this.Ca.yf.hb();
        E(this.Pr);
        this.Vm = !1;
        this.fd++;
        a = 0;
        for (b = this.u.length; a < b; a++)
            if (m = this.u[a], !m.O && (m.Ra.length || m.Ma.length))
                for (e = 0, c = m.d.length; e < c; e++)
                    for (n = m.d[e], f = 0, l = n.M.length; f < l; f++) d = n.M[f], d.hl && d.hl();
        e = this.kn.td();
        a = 0;
        for (b = e.length; a < b; a++) e[a].hl();
        this.fd--
    };
    h.prototype.Hp = function(a) {
        var b = this.Ca;
        this.Ca.ny();
        var e, c, f;
        if (this.n)
            for (e = 0, c = this.u.length; e < c; e++) f = this.u[e], f.O || !f.lo || f.global && 0 !== f.d.length || -1 !== a.Jh.indexOf(f) || f.lo();
        b == a && E(this.Sd.wc);
        E(this.Pr);
        this.Qr(!0);
        a.Yn();
        this.Qr(!1);
        this.Vm = this.U = !0;
        this.Wb()
    };
    h.prototype.Qr = function(a) {
        var b, e, c, f, l, m, n, d, g;
        b = 0;
        for (e = this.Ra.length; b < e; b++) c = this.Ra[b], a ? c.pi && c.pi() : c.qi && c.qi();
        b = 0;
        for (e = this.u.length; b < e; b++)
            if (c = this.u[b], c.global || c.wa.Yk)
                for (f = 0, l = c.d.length; f < l; f++)
                    if (m = c.d[f], a ? m.pi && m.pi() : m.qi && m.qi(), m.M)
                        for (n = 0, d = m.M.length; n < d; n++) g = m.M[n], a ? g.pi && g.pi() : g.qi && g.qi()
    };
    h.prototype.Xg = function(a) {
        this.jn.add(a)
    };
    h.prototype.ry = function(a) {
        this.kn.add(a)
    };
    h.prototype.om = function(a) {
        return a && -1 !== a.ni ? this.Te * a.ni : this.Se
    };
    h.prototype.Hc = function() {
        this.Ca.Hc(this.P);
        this.Nb && this.P.present()
    };
    h.prototype.Kb = function() {
        this.Ja && (this.wf = 1, this.Ca.vf(this.n));
        this.Ca.Kb(this.n);
        this.n.Lx()
    };
    h.prototype.ep = function(a) {
        a && this.Bj.push(a)
    };
    h.prototype.Rx = function(a) {
        Da(this.Bj, a)
    };
    h.prototype.Ch = function(a) {
        a = a.toString();
        return this.oe.hasOwnProperty(a) ? this.oe[a] : null
    };
    var B = [];
    h.prototype.nf = function(a) {
        var b, e;
        b = a.type.name;
        var c = null;
        if (this.uf.hasOwnProperty(b)) {
            if (c = this.uf[b], c.contains(a)) return
        } else c = B.length ? B.pop() : new ca, this.uf[b] = c;
        c.add(a);
        this.Ye = !0;
        if (a.sc)
            for (b = 0, e = a.siblings.length; b < e; b++) this.nf(a.siblings[b]);
        this.Mm && c.ah.push(a);
        this.Lm || (this.fd++, this.trigger(Object.getPrototypeOf(a.type.wa).g.zt, a), this.fd--)
    };
    h.prototype.Wb = function() {
        if (this.Ye) {
            var a, b, e, c, f, m;
            this.Mm = !0;
            e = 0;
            for (f = this.Bd.length; e < f; ++e)
                for (a = this.Bd[e], b = a.type, b.d.push(a), c = 0, m = b.Ma.length; c < m; ++c) b.Ma[c].d.push(a), b.Ma[c].Vg = !0;
            E(this.Bd);
            this.mt();
            Wa(this.uf);
            this.Ye = this.Mm = !1
        }
    };
    h.prototype.mt = function() {
        for (var a in this.uf) this.uf.hasOwnProperty(a) && this.Os(this.uf[a])
    };
    h.prototype.Os = function(a) {
        var b = a.td(),
            e = b[0].type,
            c, f, m, l, n, d;
        Za(e.d, a);
        e.Vg = !0;
        0 === e.d.length && (e.np = !1);
        c = 0;
        for (f = e.Ma.length; c < f; ++c) d = e.Ma[c], Za(d.d, a), d.Vg = !0;
        c = 0;
        for (f = this.Sd.wc.length; c < f; ++c)
            if (n = this.Sd.wc[c], n.kc.hasOwnProperty(e.index) && Za(n.kc[e.index].ie, a), !e.O)
                for (m = 0, l = e.Ma.length; m < l; ++m) d = e.Ma[m], n.kc.hasOwnProperty(d.index) && Za(n.kc[d.index].ie, a);
        if (n = b[0].i) {
            if (n.Pc)
                for (m = n.d, c = 0, f = m.length; c < f; ++c) l = m[c], a.contains(l) && (l.X(), n.Qb.update(l, l.tc, null), l.tc.set(0, 0, -1, -1));
            Za(n.d, a);
            n.Di(0)
        }
        for (c = 0; c < b.length; ++c) this.Ns(b[c], e);
        a.clear();
        B.push(a);
        this.U = !0
    };
    h.prototype.Ns = function(a, b) {
        var e, c, f;
        e = 0;
        for (c = this.Bj.length; e < c; ++e) this.Bj[e](a);
        a.Pe && b.xp.update(a, a.Pe, null);
        (e = a.i) && e.Pg(a, !0);
        if (a.M)
            for (e = 0, c = a.M.length; e < c; ++e) f = a.M[e], f.pe && f.pe(), f.behavior.Jg.remove(a);
        this.qr.remove(a);
        this.jn.remove(a);
        this.kn.remove(a);
        a.pe && a.pe();
        this.oe.hasOwnProperty(a.uid.toString()) && delete this.oe[a.uid.toString()];
        this.wk--;
        100 > b.xj.length && b.xj.push(a)
    };
    h.prototype.Ul = function(a, b, e, c) {
        if (a.O) {
            var f = qa(Math.random() * a.uk.length);
            return this.Ul(a.uk[f], b, e, c)
        }
        return a.Rc ? this.Qe(a.Rc, b, !1, e, c, !1) : null
    };
    var J = [];
    h.prototype.Qe = function(a, b, e, c, f, m) {
        var l, n, d, g;
        if (!a) return null;
        var u = this.u[a[1]],
            q = u.wa.$e;
        if (this.Wh && q && !u.Nm || q && !this.n && 11 === a[0][11]) return null;
        var k = b;
        q || (b = null);
        var h;
        u.xj.length ? (h = u.xj.pop(), h.Nc = !0, u.wa.qa.call(h, u)) : (h = new u.wa.qa(u), h.Nc = !1);
        !e || m || this.oe.hasOwnProperty(a[2].toString()) ? h.uid = this.oi++ : h.uid = a[2];
        this.oe[h.uid.toString()] = h;
        h.Kr = this.mr++;
        h.Ef = u.d.length;
        l = 0;
        for (n = this.Bd.length; l < n; ++l) this.Bd[l].type === u && h.Ef++;
        h.Eh = Gb;
        h.toString = Hb;
        d = a[3];
        if (h.Nc) Wa(h.ja);
        else {
            h.ja = {};
            if ("undefined" !== typeof cr_is_preview)
                for (h.nq = [], h.nq.length = d.length, l = 0, n = d.length; l < n; l++) h.nq[l] = d[l][1];
            h.pb = [];
            h.pb.length = d.length
        }
        l = 0;
        for (n = d.length; l < n; l++) h.pb[l] = d[l][0];
        if (q) {
            var y = a[0];
            h.x = fa(c) ? y[0] : c;
            h.y = fa(f) ? y[1] : f;
            h.z = y[2];
            h.width = y[3];
            h.height = y[4];
            h.depth = y[5];
            h.j = y[6];
            h.opacity = y[7];
            h.gc = y[8];
            h.hc = y[9];
            h.jb = y[10];
            l = y[11];
            !this.n && u.N.length && (h.jb = l);
            h.Ad = kb(h.jb);
            this.q && lb(h, h.jb, this.q);
            if (h.Nc) {
                l = 0;
                for (n = y[12].length; l < n; l++)
                    for (d = 0, g = y[12][l].length; d < g; d++) h.La[l][d] = y[12][l][d];
                h.F.set(0, 0, 0, 0);
                h.Pe.set(0, 0, -1, -1);
                h.tc.set(0, 0, -1, -1);
                h.yb.Fi(h.F);
                E(h.Ml)
            } else {
                h.La = y[12].slice(0);
                l = 0;
                for (n = h.La.length; l < n; l++) h.La[l] = y[12][l].slice(0);
                h.ea = [];
                h.He = [];
                h.He.length = u.N.length;
                h.F = new ta(0, 0, 0, 0);
                h.Pe = new ta(0, 0, -1, -1);
                h.tc = new ta(0, 0, -1, -1);
                h.yb = new ua;
                h.Ml = [];
                h.la = Kb;
                h.Kz = Lb;
                h.Yb = Ob;
                h.X = Pb;
                h.xy = Qb;
                h.lA = Rb;
                h.Tc = Sb
            }
            h.Pi = !1;
            h.vy = 0;
            h.uy = 0;
            h.ty = null;
            14 === y.length && (h.Pi = !0, h.vy = y[13][0], h.uy = y[13][1], h.ty = y[13][2]);
            l = 0;
            for (n = u.N.length; l < n; l++) h.He[l] = !0;
            h.ye = !0;
            h.sd = Tb;
            h.sd();
            h.so = !!h.ea.length;
            h.Ll = !0;
            h.Ol = !0;
            u.mp = !0;
            h.visible = !0;
            h.ni = -1;
            h.i = b;
            h.ud = b.d.length;
            h.wf = 0;
            "undefined" === typeof h.za && (h.za = null);
            this.U = h.sf = !0
        }
        var C;
        E(J);
        l = 0;
        for (n = u.Ma.length; l < n; l++) J.push.apply(J, u.Ma[l].Ra);
        J.push.apply(J, u.Ra);
        if (h.Nc)
            for (l = 0, n = J.length; l < n; l++) {
                var p = J[l];
                C = h.M[l];
                C.Nc = !0;
                p.behavior.qa.call(C, p, h);
                y = a[4][l];
                d = 0;
                for (g = y.length; d < g; d++) C.A[d] = y[d];
                C.S();
                p.behavior.Jg.add(h)
            } else
                for (h.M = [], l = 0, n = J.length; l < n; l++) p = J[l], C = new p.behavior.qa(p, h), C.Nc = !1, C.A = a[4][l].slice(0), C.S(), h.M.push(C), p.behavior.Jg.add(h);
        y = a[5];
        if (h.Nc)
            for (l = 0, n = y.length; l < n; l++) h.A[l] = y[l];
        else h.A = y.slice(0);
        this.Bd.push(h);
        this.Ye = !0;
        b && (b.lh(h, !0), 1 !== b.jd || 1 !== b.kd) && (u.np = !0);
        this.wk++;
        if (u.sc) {
            if (h.sc = !0, h.Nc ? E(h.siblings) : h.siblings = [], !e && !m) {
                l = 0;
                for (n = u.yc.length; l < n; l++)
                    if (u.yc[l] !== u) {
                        if (!u.yc[l].Rc) return null;
                        h.siblings.push(this.Qe(u.yc[l].Rc, k, !1, q ? h.x : c, q ? h.y : f, !0))
                    }
                l = 0;
                for (n = h.siblings.length; l < n; l++)
                    for (h.siblings[l].siblings.push(h), d = 0; d < n; d++) l !== d && h.siblings[l].siblings.push(h.siblings[d])
            }
        } else h.sc = !1, h.siblings = null;
        h.S();
        l = 0;
        for (n = h.M.length; l < n; l++) h.M[l].Gx && h.M[l].Gx();
        return h
    };
    h.prototype.Rj = function(a) {
        var b, e;
        b = 0;
        for (e = this.Ca.R.length; b < e; b++) {
            var c = this.Ca.R[b];
            if (nb(c.name, a)) return c
        }
        return null
    };
    h.prototype.qg = function(a) {
        a = qa(a);
        0 > a && (a = 0);
        a >= this.Ca.R.length && (a = this.Ca.R.length - 1);
        return this.Ca.R[a]
    };
    h.prototype.Qj = function(a) {
        return ia(a) ? this.qg(a) : this.Rj(a.toString())
    };
    h.prototype.Rl = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Z().fa = !0
    };
    h.prototype.Ai = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Ai()
    };
    h.prototype.Og = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Og()
    };
    h.prototype.te = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].te()
    };
    h.prototype.dl = function(a, b, e) {
        var c = a.Z(),
            f, l, n, m, d, g;
        if (c.fa)
            for (c.fa = !1, E(c.d), f = 0, m = a.d.length; f < m; f++) n = a.d[f], n.X(), d = n.i.kb(b, e, !0), g = n.i.kb(b, e, !1), n.Yb(d, g) && c.d.push(n);
        else {
            f = l = 0;
            for (m = c.d.length; f < m; f++) n = c.d[f], n.X(), d = n.i.kb(b, e, !0), g = n.i.kb(b, e, !1), n.Yb(d, g) && (c.d[l] = c.d[f], l++);
            c.d.length = l
        }
        a.zd();
        return c.Bm()
    };
    h.prototype.qy = function(a, b) {
        if (!(a && b && a !== b && a.sf && b.sf)) return !1;
        a.X();
        b.X();
        var e = a.i,
            c = b.i,
            f, l, n, m, d, g, u, h;
        if (e === c || e.jd === c.jd && c.kd === c.kd && e.scale === c.scale && e.j === c.j && e.vd === c.vd) {
            if (!a.F.pq(b.F) || !a.yb.oq(b.yb) || a.Pi && b.Pi) return !1;
            if (a.Pi) return this.ns(a, b);
            if (b.Pi) return this.ns(b, a);
            u = a.za && !a.za.vg();
            f = b.za && !b.za.vg();
            if (!u && !f) return !0;
            u ? (a.za.hg(a.width, a.height, a.j), u = a.za) : (this.qd.Ug(a.yb, a.x, a.y, a.width, a.height), u = this.qd);
            f ? (b.za.hg(b.width, b.height, b.j), h = b.za) : (this.qd.Ug(b.yb, b.x, b.y, b.width, b.height), h = this.qd);
            return u.Kh(h, b.x - a.x, b.y - a.y)
        }
        u = a.za && !a.za.vg();
        f = b.za && !b.za.vg();
        u ? (a.za.hg(a.width, a.height, a.j), this.qd.as(a.za)) : this.qd.Ug(a.yb, a.x, a.y, a.width, a.height);
        u = this.qd;
        f ? (b.za.hg(b.width, b.height, b.j), this.$n.as(b.za)) : this.$n.Ug(b.yb, b.x, b.y, b.width, b.height);
        h = this.$n;
        f = 0;
        for (l = u.nd; f < l; f++) n = 2 * f, m = n + 1, d = u.ub[n], g = u.ub[m], u.ub[n] = e.Ea(d +
            a.x, g + a.y, !0), u.ub[m] = e.Ea(d + a.x, g + a.y, !1);
        u.X();
        f = 0;
        for (l = h.nd; f < l; f++) n = 2 * f, m = n + 1, d = h.ub[n], g = h.ub[m], h.ub[n] = c.Ea(d + b.x, g + b.y, !0), h.ub[m] = c.Ea(d + b.x, g + b.y, !1);
        h.X();
        return u.Kh(h, 0, 0)
    };
    var v = new ua;
    new ta(0, 0, 0, 0);
    var Y = [];
    h.prototype.ns = function(a, b) {
        var e, c, f, l, n = b.F,
            m = a.x,
            d = a.y;
        a.Pz(n, Y);
        var g = b.za && !b.za.vg();
        e = 0;
        for (c = Y.length; e < c; ++e)
            if (f = Y[e], l = f.gA, n.Vw(l, m, d) && (v.Fi(l), v.offset(m, d), v.oq(b.yb)))
                if (g)
                    if (b.za.hg(b.width, b.height, b.j), f.Dn) {
                        if (f.Dn.Kh(b.za, b.x - (m + l.left), b.y - (d + l.top))) return E(Y), !0
                    } else {
                        if (this.qd.Ug(v, 0, 0, l.right - l.left, l.bottom - l.top), this.qd.Kh(b.za, b.x, b.y)) return E(Y), !0
                    }
        else if (f.Dn) {
            if (this.qd.Ug(b.yb, 0, 0, b.width, b.height), f.Dn.Kh(this.qd, -(m + l.left), -(d + l.top))) return E(Y), !0
        } else return E(Y), !0;
        E(Y);
        return !1
    };
    h.prototype.xs = function(a, b) {
        if (!b) return !1;
        var e, c, f, l, n;
        e = 0;
        for (c = a.Ra.length; e < c; e++)
            if (a.Ra[e].behavior instanceof b) return !0;
        if (!a.O)
            for (e = 0, c = a.Ma.length; e < c; e++)
                for (n = a.Ma[e], f = 0, l = n.Ra.length; f < l; f++)
                    if (n.Ra[f].behavior instanceof b) return !0;
        return !1
    };
    h.prototype.jo = function(a) {
        return this.xs(a, hc.cz)
    };
    h.prototype.ko = function(a) {
        return this.xs(a, hc.dz)
    };
    var U = -1;
    h.prototype.trigger = function(a, b, e) {
        if (!this.Ca) return !1;
        var c = this.Ca.yf;
        if (!c) return !1;
        var f = !1,
            l, n, m;
        U++;
        var d = c.Yl;
        n = 0;
        for (m = d.length; n < m; ++n) l = this.us(a, b, d[n], e), f = f || l;
        l = this.us(a, b, c, e);
        U--;
        return f || l
    };
    h.prototype.us = function(a, b, e, c) {
        var f = !1,
            l, n, m, d;
        if (b)
            for (m = this.ho(a, b, b.type.name, e, c), f = f || m, d = b.type.Ma, l = 0, n = d.length; l < n; ++l) m = this.ho(a, b, d[l].name, e, c), f = f || m;
        else m = this.ho(a, b, "system", e, c), f = f || m;
        return f
    };
    h.prototype.ho = function(a, b, e, c, f) {
        var l, n = !1,
            m = !1,
            m = "undefined" !== typeof f,
            d = (m ? c.Op : c.vs)[e];
        if (!d) return n;
        var g = null;
        c = 0;
        for (l = d.length; c < l; ++c)
            if (d[c].method == a) {
                g = d[c].xh;
                break
            }
        if (!g) return n;
        var u;
        m ? u = g[f] : u = g;
        if (!u) return null;
        c = 0;
        for (l = u.length; c < l; c++) a = u[c][0], f = u[c][1], m = this.fw(b, e, a, f), n = n || m;
        return n
    };
    h.prototype.fw = function(a, b, e, c) {
        var f, l, n = !1;
        this.io++;
        var m = this.Mb().Jb;
        m && this.Ai(m.jf);
        var d = 1 < this.io;
        this.Ai(e.jf);
        d && this.Nx();
        var g = this.Ok(e);
        g.Jb = e;
        a && (f = this.types[b].Z(), f.fa = !1, E(f.d), f.d[0] = a, this.types[b].zd());
        a = !0;
        if (e.parent) {
            b = g.ms;
            for (f = e.parent; f;) b.push(f), f = f.parent;
            b.reverse();
            f = 0;
            for (l = b.length; f < l; f++)
                if (!b[f].Zx()) {
                    a = !1;
                    break
                }
        }
        a && (this.yh++, e.hd ? e.Yx(c) : e.hb(), n = n || g.Jf);
        this.Kk();
        d && this.Fx();
        this.te(e.jf);
        m && this.te(m.jf);
        this.Ye && 0 === this.fd && 0 === U && !this.Om && this.Wb();
        this.io--;
        return n
    };
    h.prototype.Pj = function() {
        var a = this.Mb();
        return a.Jb.mb[a.lb]
    };
    h.prototype.Nx = function() {
        this.qk++;
        this.qk >= this.bn.length && this.bn.push([])
    };
    h.prototype.Fx = function() {
        this.qk--
    };
    h.prototype.Xp = function() {
        return this.bn[this.qk]
    };
    h.prototype.Ok = function(a) {
        this.Dj++;
        this.Dj >= this.dm.length && this.dm.push(new Ub);
        var b = this.Mb();
        b.reset(a);
        return b
    };
    h.prototype.Kk = function() {
        this.Dj--
    };
    h.prototype.Mb = function() {
        return this.dm[this.Dj]
    };
    h.prototype.Lr = function(a) {
        this.li++;
        this.li >= this.ki.length && this.ki.push(aa({
            name: a,
            index: 0,
            Va: !1
        }));
        var b = this.Yp();
        b.name = a;
        b.index = 0;
        b.Va = !1;
        return b
    };
    h.prototype.Gr = function() {
        this.li--
    };
    h.prototype.Yp = function() {
        return this.ki[this.li]
    };
    h.prototype.$p = function(a, b) {
        for (var e, c, f, l, n, m; b;) {
            e = 0;
            for (c = b.Yc.length; e < c; e++)
                if (m = b.Yc[e], m instanceof Vb && nb(a, m.name)) return m;
            b = b.parent
        }
        e = 0;
        for (c = this.ee.length; e < c; e++)
            for (n = this.ee[e], f = 0, l = n.Ve.length; f < l; f++)
                if (m = n.Ve[f], m instanceof Vb && nb(a, m.name)) return m;
        return null
    };
    h.prototype.bq = function(a) {
        var b, e;
        b = 0;
        for (e = this.gd.length; b < e; b++)
            if (this.gd[b].ga === a) return this.gd[b];
        return null
    };
    h.prototype.Tj = function(a) {
        var b, e;
        b = 0;
        for (e = this.u.length; b < e; b++)
            if (this.u[b].ga === a) return this.u[b];
        return null
    };
    h.prototype.qw = function(a) {
        var b, e;
        b = 0;
        for (e = this.eg.length; b < e; b++)
            if (this.eg[b].ga === a) return this.eg[b];
        return null
    };
    h.prototype.dv = function(a, b) {
        this.Ii = [a, b];
        this.U = !0
    };
    h.prototype.Ow = function() {
        var a = this,
            b = this.Rn,
            e = this.le,
            c = this.mk,
            f = !1;
        this.gs && (f = !0, b = "__c2_continuouspreview", this.gs = !1);
        if (b.length) {
            this.Wb();
            e = this.cy();
            if (g() && !this.qc) p(b, e, function() {
                z("Saved state to IndexedDB storage (" + e.length + " bytes)");
                a.le = e;
                a.trigger(N.prototype.g.Al, null);
                a.le = "";
                f && q()
            }, function(c) {
                try {
                    localStorage.setItem("__c2save_" + b, e), z("Saved state to WebStorage (" + e.length + " bytes)"), a.le = e, a.trigger(N.prototype.g.Al, null), a.le = "", f && q()
                } catch (l) {
                    z("Failed to save game state: " + c + "; " + l)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + b, e), z("Saved state to WebStorage (" + e.length + " bytes)"), a.le = e, this.trigger(N.prototype.g.Al, null), a.le = "", f && q()
            } catch (l) {
                z("Error saving to WebStorage: " + l)
            }
            this.ec = this.mk = this.Rn = ""
        }
        if (c.length) {
            if (g() && !this.qc) r(c, function(b) {
                b ? (a.ec = b, z("Loaded state from IndexedDB storage (" + a.ec.length + " bytes)")) : (a.ec = localStorage.getItem("__c2save_" + c) || "", z("Loaded state from WebStorage (" + a.ec.length + " bytes)"));
                a.Li = !1;
                a.ec.length || a.trigger(N.prototype.g.zl, null)
            }, function() {
                a.ec = localStorage.getItem("__c2save_" + c) || "";
                z("Loaded state from WebStorage (" + a.ec.length + " bytes)");
                a.Li = !1;
                a.ec.length || a.trigger(N.prototype.g.zl, null)
            });
            else {
                try {
                    this.ec = localStorage.getItem("__c2save_" + c) || "", z("Loaded state from WebStorage (" + this.ec.length +
                        " bytes)")
                } catch (n) {
                    this.ec = ""
                }
                this.Li = !1;
                a.ec.length || a.trigger(N.prototype.g.zl, null)
            }
            this.Rn = this.mk = ""
        }
        this.ec.length && (this.Wb(), this.jx(this.ec), this.le = this.ec, this.trigger(N.prototype.g.It, null), this.ec = this.le = "")
    };
    h.prototype.cy = function() {
        var a, e, c, f, l, n, m, d = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.qb.da,
                walltime: this.De.da,
                timescale: this.Yg,
                tickcount: this.Td,
                execcount: this.yh,
                next_uid: this.oi,
                running_layout: this.Ca.ga,
                start_time_offset: Date.now() - this.Zk
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (e = this.u.length; a < e; a++)
            if (l = this.u[a], !l.O && !this.jo(l)) {
                n = {
                    instances: []
                };
                Va(l.ja) && (n.ex = b(l.ja));
                c = 0;
                for (f = l.d.length; c < f; c++) n.instances.push(this.Qn(l.d[c]));
                d.types[l.ga.toString()] = n
            }
        a = 0;
        for (e = this.gd.length; a < e; a++) c = this.gd[a], d.layouts[c.ga.toString()] = c.Rb();
        f = d.events.groups;
        a = 0;
        for (e = this.eg.length; a < e; a++) c = this.eg[a], f[c.ga.toString()] = this.Uj[c.Gh].Fh;
        e = d.events.cnds;
        for (m in this.Oe) this.Oe.hasOwnProperty(m) && (a = this.Oe[m], Va(a.ja) && (e[m] = {
            ex: b(a.ja)
        }));
        e = d.events.acts;
        for (m in this.Ie) this.Ie.hasOwnProperty(m) && (a = this.Ie[m], Va(a.ja) && (e[m] = {
            ex: b(a.ja)
        }));
        e = d.events.vars;
        for (m in this.bh) this.bh.hasOwnProperty(m) && (a = this.bh[m], a.dk || a.parent && !a.Vh || (e[m] = a.data));
        d.system = this.Sd.Rb();
        return JSON.stringify(d)
    };
    h.prototype.Or = function() {
        var a, b, e, c, f, l;
        this.oe = {};
        a = 0;
        for (b = this.u.length; a < b; a++)
            if (e = this.u[a], !e.O)
                for (c = 0, f = e.d.length; c < f; c++) l = e.d[c], this.oe[l.uid.toString()] = l
    };
    h.prototype.jx = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            this.Oh = !0;
            var b = a.rt;
            this.qb.reset();
            this.qb.da = b.time;
            this.De.reset();
            this.De.da = b.walltime || 0;
            this.Yg = b.timescale;
            this.Td = b.tickcount;
            this.yh = b.execcount;
            this.Zk = Date.now() - b.start_time_offset;
            var e = b.running_layout;
            if (e !== this.Ca.ga)
                if (e = this.bq(e)) this.Hp(e);
                else return;
            var c, f, l, n, m, d, g;
            d = a.types;
            for (f in d)
                if (d.hasOwnProperty(f) && (n = this.Tj(parseInt(f, 10))) && !n.O && !this.jo(n)) {
                    d[f].ex ? n.ja = d[f].ex : Wa(n.ja);
                    m = n.d;
                    l = d[f].instances;
                    e = 0;
                    for (c = oa(m.length, l.length); e < c; e++) this.nk(m[e], l[e]);
                    e = l.length;
                    for (c = m.length; e < c; e++) this.nf(m[e]);
                    e = m.length;
                    for (c = l.length; e < c; e++) {
                        m = null;
                        if (n.wa.$e && (m = this.Ca.Sj(l[e].w.l), !m)) continue;
                        m = this.Qe(n.Rc, m, !1, 0, 0, !0);
                        this.nk(m, l[e])
                    }
                    n.Vg = !0
                }
            this.Wb();
            this.Or();
            c = a.layouts;
            for (f in c) c.hasOwnProperty(f) && (e = this.bq(parseInt(f, 10))) && e.jc(c[f]);
            c = a.events.groups;
            for (f in c) c.hasOwnProperty(f) && (e = this.qw(parseInt(f, 10))) && this.Uj[e.Gh] && this.Uj[e.Gh].ey(c[f]);
            e = a.events.cnds;
            for (f in this.Oe) this.Oe.hasOwnProperty(f) && (e.hasOwnProperty(f) ? this.Oe[f].ja = e[f].ex : this.Oe[f].ja = {});
            e = a.events.acts;
            for (f in this.Ie) this.Ie.hasOwnProperty(f) && (e.hasOwnProperty(f) ? this.Ie[f].ja = e[f].ex : this.Ie[f].ja = {});
            e = a.events.vars;
            for (f in e) e.hasOwnProperty(f) && this.bh.hasOwnProperty(f) && (this.bh[f].data = e[f]);
            this.oi = b.next_uid;
            this.Oh = !1;
            e = 0;
            for (c = this.Hj.length; e < c; ++e) m = this.Hj[e], this.trigger(Object.getPrototypeOf(m.type.wa).g.Xi, m);
            E(this.Hj);
            this.Sd.jc(a.system);
            e = 0;
            for (c = this.u.length; e < c; e++)
                if (n = this.u[e], !n.O && !this.jo(n))
                    for (f = 0, a = n.d.length; f < a; f++) {
                        m = n.d[f];
                        if (n.sc)
                            for (d = m.Eh(), E(m.siblings), b = 0, l = n.yc.length; b < l; b++) g = n.yc[b], n !== g && m.siblings.push(g.d[d]);
                        m.xd && m.xd();
                        if (m.M)
                            for (b = 0, l = m.M.length; b < l; b++) d = m.M[b], d.xd && d.xd()
                    }
            this.U = !0
        }
    };
    h.prototype.Qn = function(a, e) {
        var c, f, l, m, n;
        m = a.type;
        l = m.wa;
        var d = {};
        e ? d.c2 = !0 : d.uid = a.uid;
        Va(a.ja) && (d.ex = b(a.ja));
        if (a.pb && a.pb.length)
            for (d.ivs = {}, c = 0, f = a.pb.length; c < f; c++) d.ivs[a.type.Im[c].toString()] = a.pb[c];
        if (l.$e) {
            l = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.i.ga,
                zi: a.Tc()
            };
            0 !== a.j && (l.a = a.j);
            1 !== a.opacity && (l.o = a.opacity);
            .5 !== a.gc && (l.hX = a.gc);
            .5 !== a.hc && (l.hY = a.hc);
            0 !== a.jb && (l.bm = a.jb);
            a.visible || (l.v = a.visible);
            a.sf || (l.ce = a.sf); - 1 !== a.ni && (l.mts = a.ni);
            if (m.N.length)
                for (l.fx = [], c = 0, f = m.N.length; c < f; c++) n = m.N[c], l.fx.push({
                    name: n.name,
                    active: a.He[n.index],
                    params: a.La[n.index]
                });
            d.w = l
        }
        if (a.M && a.M.length)
            for (d.behs = {}, c = 0, f = a.M.length; c < f; c++) m = a.M[c], m.Rb && (d.behs[m.type.ga.toString()] = m.Rb());
        a.Rb && (d.data = a.Rb());
        return d
    };
    h.prototype.sw = function(a, b) {
        var e, c;
        e = 0;
        for (c = a.Im.length; e < c; e++)
            if (a.Im[e] === b) return e;
        return -1
    };
    h.prototype.pw = function(a, b) {
        var e, c;
        e = 0;
        for (c = a.M.length; e < c; e++)
            if (a.M[e].type.ga === b) return e;
        return -1
    };
    h.prototype.nk = function(a, b, e) {
        var c, f, l, m, n;
        n = a.type;
        m = n.wa;
        if (e) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.ja = b.ex : Wa(a.ja);
        if (f = b.ivs)
            for (c in f) f.hasOwnProperty(c) && (l = this.sw(n, parseInt(c, 10)), 0 > l || l >= a.pb.length || (a.pb[l] = f[c]));
        if (m.$e) {
            l = b.w;
            a.i.ga !== l.l && (f = a.i, a.i = this.Ca.Sj(l.l), a.i ? (f.Pg(a, !0), a.i.lh(a, !0), a.la(), a.i.Di(0)) : (a.i = f, e || this.nf(a)));
            a.x = l.x;
            a.y = l.y;
            a.width = l.w;
            a.height = l.h;
            a.ud = l.zi;
            a.j = l.hasOwnProperty("a") ? l.a : 0;
            a.opacity = l.hasOwnProperty("o") ? l.o : 1;
            a.gc = l.hasOwnProperty("hX") ? l.hX : .5;
            a.hc = l.hasOwnProperty("hY") ? l.hY : .5;
            a.visible = l.hasOwnProperty("v") ? l.v : !0;
            a.sf = l.hasOwnProperty("ce") ? l.ce : !0;
            a.ni = l.hasOwnProperty("mts") ? l.mts : -1;
            a.jb = l.hasOwnProperty("bm") ? l.bm : 0;
            a.Ad = kb(a.jb);
            this.q && lb(a, a.jb, this.q);
            a.la();
            if (l.hasOwnProperty("fx"))
                for (e = 0, f = l.fx.length; e < f; e++) m = n.qm(l.fx[e].name), 0 > m || (a.He[m] = l.fx[e].active, a.La[m] = l.fx[e].params);
            a.sd()
        }
        if (n = b.behs)
            for (c in n) n.hasOwnProperty(c) && (e = this.pw(a, parseInt(c, 10)), 0 > e || a.M[e].jc(n[c]));
        b.data && a.jc(b.data)
    };
    h.prototype.Pp = function(a, b, e) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, e)
        }, e)
    };
    h.prototype.gw = function(a, b) {
        this.Pp("data.js", function(e) {
            var c = new FileReader;
            c.onload = function(b) {
                a(b.target.result)
            };
            c.onerror = b;
            c.readAsText(e)
        }, b)
    };
    h.prototype.Qp = function(a, b, e) {
        this.Pp(a, function(a) {
            var e = new FileReader;
            e.onload = function(a) {
                b(a.target.result)
            };
            e.readAsArrayBuffer(a)
        }, e)
    };
    h.prototype.hw = function(a, b, e) {
        this.Qp(a, function(a) {
            a = URL.createObjectURL(new Blob([a]));
            b(a)
        }, e)
    };
    h.prototype.Yr = function(a, b) {
        this.Th ? this.hw(b, function(b) {
            a.src = b
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = b
    };
    Wb = function(a) {
        return new h(document.getElementById(a))
    };
    Xb = function(a, b) {
        return new h({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Wb;
    window.cr_createDCRuntime = Xb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.gg = !0;
        document.body.appendChild(a);
        a = new h(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new h(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var h = document.getElementById("c2canvas");
    return h ? h.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(h, k) {
    var g = window.cr_getC2Runtime();
    g && g.dv(h, k)
};
window.cr_sizeCanvas = function(h, k) {
    if (0 !== h && 0 !== k) {
        var g = window.cr_getC2Runtime();
        g && g.setSize(h, k)
    }
};
window.cr_setSuspended = function(h) {
    var k = window.cr_getC2Runtime();
    k && k.setSuspended(h)
};
(function() {
    function h(a, b) {
        this.b = a;
        this.yf = null;
        this.scrollX = this.b.Pa / 2;
        this.scrollY = this.b.Oa / 2;
        this.scale = 1;
        this.j = 0;
        this.pg = !0;
        this.name = b[0];
        this.width = b[1];
        this.height = b[2];
        this.ys = b[3];
        this.ds = b[4];
        this.ga = b[5];
        var c = b[6],
            f, d;
        this.R = [];
        this.Jh = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var g = new Yb(this, c[f]);
            g.or = f;
            this.R.push(g)
        }
        c = b[7];
        this.Ff = [];
        f = 0;
        for (d = c.length; f < d; f++) {
            var g = c[f],
                h = this.b.u[g[1]];
            h.Rc || (h.Rc = g);
            this.Ff.push(g); - 1 === this.Jh.indexOf(h) && this.Jh.push(h)
        }
        this.N = [];
        this.ea = [];
        this.ye = !0;
        this.La = [];
        f = 0;
        for (d = b[8].length; f < d; f++) this.N.push({
            id: b[8][f][0],
            name: b[8][f][1],
            ab: -1,
            md: !1,
            Xb: !0,
            index: f
        }), this.La.push(b[8][f][2].slice(0));
        this.sd();
        this.hf = new ta(0, 0, 1, 1);
        this.Kn = new ta(0, 0, 1, 1);
        this.gf = {}
    }

    function k(a, b) {
        return a.ud - b.ud
    }

    function g(a, b) {
        this.Ab = a;
        this.b = a.b;
        this.d = [];
        this.scale = 1;
        this.j = 0;
        this.be = !1;
        this.Be = new ta(0, 0, 0, 0);
        this.ts = new ua;
        this.Ha = this.Ga = this.Ia = this.Fa = 0;
        this.$f = !1;
        this.Ee = -1;
        this.Sl = 0;
        this.name = b[0];
        this.index = b[1];
        this.ga = b[2];
        this.visible = b[3];
        this.cd = b[4];
        this.rd = b[5];
        this.jd = b[6];
        this.kd = b[7];
        this.opacity = b[8];
        this.Lj = b[9];
        this.Pc = b[10];
        this.vd = b[11];
        this.jb = b[12];
        this.Av = b[13];
        this.Ad = "source-over";
        this.nb = this.xb = 0;
        this.Qb = null;
        this.me = d();
        this.od = !0;
        this.Cg = new ta(0, 0, -1, -1);
        this.Ib = new ta(0, 0, -1, -1);
        this.Pc && (this.Qb = new fb(this.b.Pa, this.b.Oa));
        this.Pd = !1;
        var c = b[14],
            f, g;
        this.ks = [];
        this.Lc = [];
        this.rh = [];
        f = 0;
        for (g = c.length; f < g; f++) {
            var u = c[f],
                h = this.b.u[u[1]];
            h.Rc || (h.Rc = u, h.av = this.index);
            this.Lc.push(u); - 1 === this.Ab.Jh.indexOf(h) && this.Ab.Jh.push(h)
        }
        Aa(this.ks, this.Lc);
        this.N = [];
        this.ea = [];
        this.ye = !0;
        this.La = [];
        f = 0;
        for (g = b[15].length; f < g; f++) this.N.push({
            id: b[15][f][0],
            name: b[15][f][1],
            ab: -1,
            md: !1,
            Xb: !0,
            index: f
        }), this.La.push(b[15][f][2].slice(0));
        this.sd();
        this.hf = new ta(0, 0, 1, 1);
        this.Kn = new ta(0, 0, 1, 1)
    }

    function d() {
        return b.length ? b.pop() : []
    }

    function p(a) {
        E(a);
        b.push(a)
    }
    h.prototype.by = function(a) {
        var b = a.type.ga.toString();
        this.gf.hasOwnProperty(b) || (this.gf[b] = []);
        this.gf[b].push(this.b.Qn(a))
    };
    h.prototype.gq = function() {
        var a = this.R[0];
        return !a.rd && 1 === a.opacity && !a.Lj && a.visible
    };
    h.prototype.sd = function() {
        E(this.ea);
        this.ye = !0;
        var a, b, c;
        a = 0;
        for (b = this.N.length; a < b; a++) c = this.N[a], c.Xb && (this.ea.push(c), c.md || (this.ye = !1))
    };
    h.prototype.pm = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.N.length; b < c; b++)
            if (f = this.N[b], f.name === a) return f;
        return null
    };
    var r = [],
        q = !0;
    h.prototype.Yn = function() {
        this.ds && (this.yf = this.b.em[this.ds], this.yf.no());
        this.b.Ca = this;
        this.scrollX = this.b.Pa / 2;
        this.scrollY = this.b.Oa / 2;
        var a, b, c, f, d, g, h;
        a = 0;
        for (c = this.b.u.length; a < c; a++)
            if (b = this.b.u[a], !b.O)
                for (d = b.d, b = 0, f = d.length; b < f; b++)
                    if (g = d[b], g.i) {
                        var l = g.i.or;
                        l >= this.R.length && (l = this.R.length - 1);
                        g.i = this.R[l]; - 1 === g.i.d.indexOf(g) && g.i.d.push(g);
                        g.i.$f = !0
                    }
        if (!q)
            for (a = 0, c = this.R.length; a < c; ++a) this.R[a].d.sort(k);
        E(r);
        this.Ru();
        a = 0;
        for (c = this.R.length; a < c; a++) g = this.R[a], g.$u(), g.nl();
        d = !1;
        if (!this.pg) {
            for (h in this.gf)
                if (this.gf.hasOwnProperty(h) && (b = this.b.Tj(parseInt(h, 10))) && !b.O && this.b.ko(b)) {
                    f = this.gf[h];
                    a = 0;
                    for (c = f.length; a < c; a++) {
                        g = null;
                        if (b.wa.$e && (g = this.Sj(f[a].w.l), !g)) continue;
                        g = this.b.Qe(b.Rc, g, !1, 0, 0, !0);
                        this.b.nk(g, f[a]);
                        d = !0;
                        r.push(g)
                    }
                    E(f)
                }
            a = 0;
            for (c = this.R.length; a < c; a++) this.R[a].d.sort(k), this.R[a].$f = !0
        }
        d && (this.b.Wb(), this.b.Or());
        for (a = 0; a < r.length; a++)
            if (g = r[a], g.type.sc)
                for (c = g.Eh(), b = 0, f = g.type.yc.length; b < f; b++) h = g.type.yc[b], g.type !== h && (h.d.length > c ? g.siblings.push(h.d[c]) : h.Rc && (d = this.b.Qe(h.Rc, g.i, !0, g.x, g.y, !0), this.b.Wb(), h.ll(), g.siblings.push(d), r.push(d)));
        a = 0;
        for (c = this.Ff.length; a < c; a++) this.b.Qe(this.Ff[a], null, !0);
        this.b.oh = null;
        this.b.Wb();
        if (this.b.P && !this.b.Aa)
            for (a = 0, c = this.b.u.length; a < c; a++) h = this.b.u[a], !h.O && h.d.length && h.En && h.En(this.b.P);
        if (this.b.Oh) Aa(this.b.Hj, r);
        else
            for (a = 0, c = r.length; a < c; a++) g = r[a], this.b.trigger(Object.getPrototypeOf(g.type.wa).g.Xi, g);
        E(r);
        this.b.Oh || this.b.trigger(N.prototype.g.Io, null);
        this.pg = !1
    };
    h.prototype.Zu = function() {
        var a, b, c, f, d;
        b = a = 0;
        for (c = this.Ff.length; a < c; a++) f = this.Ff[a], d = this.b.u[f[1]], d.global ? d.sc || this.b.Qe(f, null, !0) : (this.Ff[b] = f, b++);
        ya(this.Ff, b)
    };
    h.prototype.ny = function() {
        this.b.Oh || this.b.trigger(N.prototype.g.Ht, null);
        this.b.Lm = !0;
        E(this.b.Sd.wc);
        var a, b, c, f, d, g;
        if (!this.pg)
            for (a = 0, b = this.R.length; a < b; a++)
                for (this.R[a].qo(), d = this.R[a].d, c = 0, f = d.length; c < f; c++) g = d[c], g.type.global || this.b.ko(g.type) && this.by(g);
        a = 0;
        for (b = this.R.length; a < b; a++) {
            d = this.R[a].d;
            c = 0;
            for (f = d.length; c < f; c++) g = d[c], g.type.global || this.b.nf(g);
            this.b.Wb();
            E(d);
            this.R[a].$f = !0
        }
        a = 0;
        for (b = this.b.u.length; a < b; a++)
            if (d = this.b.u[a], !(d.global || d.wa.$e || d.wa.Yk || d.O)) {
                c = 0;
                for (f = d.d.length; c < f; c++) this.b.nf(d.d[c]);
                this.b.Wb()
            }
        q = !1;
        this.b.Lm = !1
    };
    new ta(0, 0, 0, 0);
    h.prototype.Hc = function(a) {
        var b, c = a,
            f = !1,
            d = !this.b.Ic;
        d && (this.b.lk || (this.b.lk = document.createElement("canvas"), b = this.b.lk, b.width = this.b.H, b.height = this.b.G, this.b.Kq = b.getContext("2d"), f = !0), b = this.b.lk, c = this.b.Kq, b.width !== this.b.H && (b.width = this.b.H, f = !0), b.height !== this.b.G && (b.height = this.b.G, f = !0), f && (c.webkitImageSmoothingEnabled = this.b.I, c.mozImageSmoothingEnabled = this.b.I, c.msImageSmoothingEnabled = this.b.I, c.imageSmoothingEnabled = this.b.I));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.b.Hl && !this.gq() && c.clearRect(0, 0, this.b.H, this.b.G);
        var g, h, f = 0;
        for (g = this.R.length; f < g; f++) h = this.R[f], h.visible && 0 < h.opacity && 11 !== h.jb && (h.d.length || !h.rd) ? h.Hc(c) : h.nl();
        d && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    h.prototype.vf = function(a) {
        a.Xr(!0);
        this.b.gb || (this.b.gb = a.Zb(this.b.H, this.b.G, this.b.I));
        if (this.b.gb.Me !== this.b.H || this.b.gb.Le !== this.b.G) a.deleteTexture(this.b.gb), this.b.gb = a.Zb(this.b.H, this.b.G, this.b.I);
        a.Sb(this.b.gb);
        this.b.Ic || a.we(this.b.H, this.b.G);
        var b, c;
        for (b = this.R.length - 1; 0 <= b; --b) c = this.R[b], c.visible && 1 === c.opacity && c.ye && 0 === c.jb && (c.d.length || !c.rd) ? c.vf(a) : c.nl();
        a.Xr(!1)
    };
    h.prototype.Kb = function(a) {
        var b = 0 < this.ea.length || this.b.$g || !this.b.Ic || this.b.Ja;
        if (b) {
            this.b.gb || (this.b.gb = a.Zb(this.b.H, this.b.G, this.b.I));
            if (this.b.gb.Me !== this.b.H || this.b.gb.Le !== this.b.G) a.deleteTexture(this.b.gb), this.b.gb = a.Zb(this.b.H, this.b.G, this.b.I);
            a.Sb(this.b.gb);
            this.b.Ic || a.we(this.b.H, this.b.G)
        } else this.b.gb && (a.Sb(null), a.deleteTexture(this.b.gb), this.b.gb = null);
        this.b.Hl && !this.gq() && a.clear(0, 0, 0, 0);
        var c, f, d;
        c = 0;
        for (f = this.R.length; c < f; c++) d = this.R[c], d.visible && 0 < d.opacity && (d.d.length || !d.rd) ? d.Kb(a) : d.nl();
        b && (0 === this.ea.length || 1 === this.ea.length && this.b.Ic ? (1 === this.ea.length ? (b = this.ea[0].index, a.Tb(this.ea[0].ab), a.Xf(null, 1 / this.b.H, 1 / this.b.G, 0, 0, 1, 1, this.scale, this.j, 0, 0, this.b.H / 2, this.b.G / 2, this.b.qb.da, this.La[b]), a.Nk(this.ea[0].ab) && (this.b.U = !0)) : a.Tb(0), this.b.Ic || a.we(this.b.width, this.b.height), a.Sb(null), a.Vr(!1), a.ve(1), a.wb(this.b.gb), a.Sn(), a.uc(), a.mc(), b = this.b.width / 2, c = this.b.height / 2, a.Sf(-b, c, b, c, b, -c, -b, -c), a.wb(null), a.Vr(!0)) : this.Ln(a, null, null, null))
    };
    h.prototype.Dh = function() {
        return 0 < this.ea.length || this.b.$g || !this.b.Ic || this.b.Ja ? this.b.gb : null
    };
    h.prototype.cq = function() {
        var a = this.R[0].zc(),
            b, c, f;
        b = 1;
        for (c = this.R.length; b < c; b++) f = this.R[b], (0 !== f.jd || 0 !== f.kd) && f.zc() < a && (a = f.zc());
        return a
    };
    h.prototype.Sr = function(a) {
        if (!this.ys) {
            var b = 1 / this.cq() * this.b.H / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.U = !0)
    };
    h.prototype.Tr = function(a) {
        if (!this.ys) {
            var b = 1 / this.cq() * this.b.G / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.U = !0)
    };
    h.prototype.Ru = function() {
        this.Sr(this.scrollX);
        this.Tr(this.scrollY)
    };
    h.prototype.Ln = function(a, b, c, f) {
        var d = c ? c.ea : b ? b.ea : this.ea,
            g = 1,
            h = 0,
            l = 0,
            q = 0,
            k = this.b.H,
            p = this.b.G;
        c ? (g = c.i.zc(), h = c.i.Xa(), l = c.i.Fa, q = c.i.Ga, k = c.i.Ia, p = c.i.Ha) : b && (g = b.zc(), h = b.Xa(), l = b.Fa, q = b.Ga, k = b.Ia, p = b.Ha);
        var r = this.b.mm,
            F, G, B, J, v = 0,
            Y = 1,
            U, t = this.b.H,
            S = this.b.G,
            Ga = t / 2,
            xa = S / 2,
            P = b ? b.hf : this.hf,
            w = b ? b.Kn : this.Kn,
            L = 0,
            I = 0,
            M = 0,
            H = 0,
            Q = t,
            ga = t,
            O = S,
            na = S,
            ha = B = 0;
        J = c ? c.i.Xa() : 0;
        if (c) {
            F = 0;
            for (G = d.length; F < G; F++) B += a.xw(d[F].ab), ha += a.yw(d[F].ab);
            H = c.F;
            L = b.Ea(H.left, H.top, !0, !0);
            M = b.Ea(H.left, H.top, !1, !0);
            Q = b.Ea(H.right, H.bottom, !0, !0);
            O = b.Ea(H.right, H.bottom, !1, !0);
            0 !== J && (F = b.Ea(H.right, H.top, !0, !0), G = b.Ea(H.right, H.top, !1, !0), I = b.Ea(H.left, H.bottom, !0, !0), H = b.Ea(H.left, H.bottom, !1, !0), J = Math.min(L, Q, F, I), Q = Math.max(L, Q, F, I), L = J, J = Math.min(M, O, G, H), O = Math.max(M, O, G, H), M = J);
            L -= B;
            M -= ha;
            Q += B;
            O += ha;
            w.left = L / t;
            w.top = 1 - M / S;
            w.right = Q / t;
            w.bottom = 1 - O / S;
            I = L = qa(L);
            H = M = qa(M);
            ga = Q = ra(Q);
            na = O = ra(O);
            I -= B;
            H -= ha;
            ga += B;
            na += ha;
            0 > L && (L = 0);
            0 > M && (M = 0);
            Q > t && (Q = t);
            O > S && (O = S);
            0 > I && (I = 0);
            0 > H && (H = 0);
            ga > t && (ga = t);
            na > S && (na = S);
            P.left = L / t;
            P.top = 1 - M / S;
            P.right = Q / t;
            P.bottom = 1 - O / S
        } else P.left = w.left = 0, P.top = w.top = 0, P.right = w.right = 1, P.bottom = w.bottom = 1;
        ha = c && (a.xi(d[0].ab) || 0 !== B || 0 !== ha || 1 !== c.opacity || c.type.wa.hr) || b && !c && 1 !== b.opacity;
        a.Sn();
        if (ha) {
            r[v] || (r[v] = a.Zb(t, S, this.b.I));
            if (r[v].Me !== t || r[v].Le !== S) a.deleteTexture(r[v]), r[v] = a.Zb(t, S, this.b.I);
            a.Tb(0);
            a.Sb(r[v]);
            U = na - H;
            a.clearRect(I, S - H - U, ga - I, U);
            c ? c.Kb(a) : (a.wb(this.b.rb), a.ve(b.opacity), a.uc(), a.translate(-Ga, -xa), a.mc(), a.Od(L, O, Q, O, Q, M, L, M, P));
            w.left = w.top = 0;
            w.right = w.bottom = 1;
            c && (J = P.top, P.top = P.bottom, P.bottom = J);
            v = 1;
            Y = 0
        }
        a.ve(1);
        B = d.length - 1;
        var Pa = a.Gn(d[B].ab) || !b && !c && !this.b.Ic,
            Ha = 0;
        F = 0;
        for (G = d.length; F < G; F++) {
            r[v] || (r[v] = a.Zb(t, S, this.b.I));
            if (r[v].Me !== t || r[v].Le !== S) a.deleteTexture(r[v]), r[v] = a.Zb(t, S, this.b.I);
            a.Tb(d[F].ab);
            Ha = d[F].index;
            a.Nk(d[F].ab) && (this.b.U = !0);
            0 != F || ha ? (a.Xf(f, 1 / t, 1 / S, w.left, w.top, w.right, w.bottom, g, h, l, q, (l + k) / 2, (q + p) / 2, this.b.qb.da, c ? c.La[Ha] : b ? b.La[Ha] : this.La[Ha]), a.wb(null), F !== B || Pa ? (a.Sb(r[v]), U = na - H, J = S - H - U, a.clearRect(I, J, ga - I, U)) : (c ? a.Rd(c.xb, c.nb) : b && a.Rd(b.xb, b.nb), a.Sb(f)), a.wb(r[Y]), a.uc(), a.translate(-Ga, -xa), a.mc(), a.Od(L, O, Q, O, Q, M, L, M, P), F !== B || Pa || a.wb(null)) : (a.Sb(r[v]), U = na - H, J = S - H - U, a.clearRect(I, J, ga - I, U), c ? (a.Xf(f, 1 / c.width, 1 / c.height, w.left, w.top, w.right, w.bottom, g, h, l, q, (l + k) / 2, (q + p) / 2, this.b.qb.da, c.La[Ha]), c.Kb(a)) : (a.Xf(f, 1 / t, 1 / S, 0, 0, 1, 1, g, h, l, q, (l + k) / 2, (q + p) / 2, this.b.qb.da, b ? b.La[Ha] : this.La[Ha]), a.wb(b ? this.b.rb : this.b.gb), a.uc(), a.translate(-Ga, -xa), a.mc(), a.Od(L, O, Q, O, Q, M, L, M, P)), w.left = w.top = 0, w.right = w.bottom = 1, c && !Pa && (J = O, O = M, M = J));
            v = 0 === v ? 1 : 0;
            Y = 0 === v ? 1 : 0
        }
        Pa && (a.Tb(0), c ? a.Rd(c.xb, c.nb) : b ? a.Rd(b.xb, b.nb) : this.b.Ic || (a.we(this.b.width, this.b.height), Ga = this.b.width / 2, xa = this.b.height / 2, M = L = 0, Q = this.b.width, O = this.b.height), a.Sb(f), a.wb(r[Y]), a.uc(), a.translate(-Ga, -xa), a.mc(), c && 1 === d.length && !ha ? a.Od(L, M, Q, M, Q, O, L, O, P) : a.Od(L, O, Q, O, Q, M, L, M, P), a.wb(null))
    };
    h.prototype.Sj = function(a) {
        var b, c;
        b = 0;
        for (c = this.R.length; b < c; b++)
            if (this.R[b].ga === a) return this.R[b];
        return null
    };
    h.prototype.Rb = function() {
        var a, b, c, f = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.j,
            w: this.width,
            h: this.height,
            fv: this.pg,
            persist: this.gf,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.N.length; a < b; a++) c = this.N[a], f.fx.push({
            name: c.name,
            active: c.Xb,
            params: this.La[c.index]
        });
        a = 0;
        for (b = this.R.length; a < b; a++) c = this.R[a], f.layers[c.ga.toString()] = c.Rb();
        return f
    };
    h.prototype.jc = function(a) {
        var b, c, f, d;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.j = a.a;
        this.width = a.w;
        this.height = a.h;
        this.gf = a.persist;
        "undefined" !== typeof a.fv && (this.pg = a.fv);
        var g = a.fx;
        b = 0;
        for (c = g.length; b < c; b++)
            if (f = this.pm(g[b].name)) f.Xb = g[b].active, this.La[f.index] = g[b].params;
        this.sd();
        b = a.layers;
        for (d in b) b.hasOwnProperty(d) && (a = this.Sj(parseInt(d, 10))) && a.jc(b[d])
    };
    Ib = h;
    g.prototype.sd = function() {
        E(this.ea);
        this.ye = !0;
        var a, b, c;
        a = 0;
        for (b = this.N.length; a < b; a++) c = this.N[a], c.Xb && (this.ea.push(c), c.md || (this.ye = !1))
    };
    g.prototype.pm = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.N.length; b < c; b++)
            if (f = this.N[b], f.name === a) return f;
        return null
    };
    g.prototype.$u = function() {
        var a, b, c, f, d, g;
        b = a = 0;
        for (c = this.Lc.length; a < c; a++) {
            f = this.Lc[a];
            d = this.b.u[f[1]];
            g = this.b.ko(d);
            d = !0;
            if (!g || this.Ab.pg) {
                f = this.b.Qe(f, this, !0);
                if (!f) continue;
                r.push(f);
                f.type.global && (d = !1, this.rh.push(f.uid))
            }
            d && (this.Lc[b] = this.Lc[a], b++)
        }
        this.Lc.length = b;
        this.b.Wb();
        !this.b.n && this.N.length && (this.jb = this.Av);
        this.Ad = kb(this.jb);
        this.b.q && lb(this, this.jb, this.b.q);
        this.od = !0
    };
    g.prototype.Pg = function(a, b) {
        var c = Ca(this.d, a);
        0 > c || (b && this.Pc && a.tc && a.tc.right >= a.tc.left && (a.X(), this.Qb.update(a, a.tc, null), a.tc.set(0, 0, -1, -1)), c === this.d.length - 1 ? this.d.pop() : (wa(this.d, c), this.Di(c)), this.od = !0)
    };
    g.prototype.lh = function(a, b) {
        a.ud = this.d.length;
        this.d.push(a);
        b && this.Pc && a.tc && a.la();
        this.od = !0
    };
    g.prototype.Kx = function(a) {
        this.d.unshift(a);
        this.Di(0)
    };
    g.prototype.qx = function(a, b, c) {
        var f = a.Tc();
        b = b.Tc();
        wa(this.d, f);
        f < b && b--;
        c && b++;
        b === this.d.length ? this.d.push(a) : this.d.splice(b, 0, a);
        this.Di(f < b ? f : b)
    };
    g.prototype.Di = function(a) {
        -1 === this.Ee ? this.Ee = a : a < this.Ee && (this.Ee = a);
        this.od = this.$f = !0
    };
    g.prototype.qo = function() {
        if (this.$f) {
            -1 === this.Ee && (this.Ee = 0);
            var a, b, c;
            if (this.Pc)
                for (a = this.Ee, b = this.d.length; a < b; ++a) c = this.d[a], c.ud = a, this.Qb.mx(c.tc);
            else
                for (a = this.Ee, b = this.d.length; a < b; ++a) this.d[a].ud = a;
            this.$f = !1;
            this.Ee = -1
        }
    };
    g.prototype.zc = function(a) {
        return this.uw() * (this.b.Ic || a ? this.b.mh : 1)
    };
    g.prototype.uw = function() {
        return (this.scale * this.Ab.scale - 1) * this.vd + 1
    };
    g.prototype.Xa = function() {
        return this.be ? 0 : Ka(this.Ab.j + this.j)
    };
    var b = [],
        f = [],
        c = [];
    g.prototype.vm = function() {
        this.qo();
        this.Qb.Nr(this.Fa, this.Ga, this.Ia, this.Ha, c);
        if (!c.length) return d();
        if (1 === c.length) {
            var a = d();
            Aa(a, c[0]);
            E(c);
            return a
        }
        for (var b = !0; 1 < c.length;) {
            for (var a = c, g = void 0, m = void 0, h = void 0, u = void 0, q = void 0, g = 0, m = a.length; g < m - 1; g += 2) {
                var h = a[g],
                    u = a[g + 1],
                    q = d(),
                    l = h,
                    k = u,
                    r = q,
                    x = 0,
                    A = 0,
                    F = 0,
                    G = l.length,
                    B = k.length,
                    J = void 0,
                    v = void 0;
                for (r.length = G + B; x < G && A < B; ++F) J = l[x], v = k[A], J.ud < v.ud ? (r[F] = J, ++x) : (r[F] = v, ++A);
                for (; x < G; ++x, ++F) r[F] = l[x];
                for (; A < B; ++A, ++F) r[F] = k[A];
                b || (p(h), p(u));
                f.push(q)
            }
            1 === m % 2 && (b ? (h = d(), Aa(h, a[m - 1]), f.push(h)) : f.push(a[m - 1]));
            Aa(a, f);
            E(f);
            b = !1
        }
        a = c[0];
        E(c);
        return a
    };
    g.prototype.Hc = function(a) {
        this.Pd = this.Lj || 1 !== this.opacity || 0 !== this.jb;
        var b = this.b.canvas,
            c = a,
            f = !1;
        this.Pd && (this.b.kk || (this.b.kk = document.createElement("canvas"), b = this.b.kk, b.width = this.b.H, b.height = this.b.G, this.b.Jq = b.getContext("2d"), f = !0), b = this.b.kk, c = this.b.Jq, b.width !== this.b.H && (b.width = this.b.H, f = !0), b.height !== this.b.G && (b.height = this.b.G, f = !0), f && (c.webkitImageSmoothingEnabled = this.b.I, c.mozImageSmoothingEnabled = this.b.I, c.msImageSmoothingEnabled = this.b.I, c.imageSmoothingEnabled = this.b.I), this.rd && c.clearRect(0, 0, this.b.H, this.b.G));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.rd || (c.fillStyle = "rgb(" + this.cd[0] + "," + this.cd[1] + "," + this.cd[2] + ")", c.fillRect(0, 0, this.b.H, this.b.G));
        c.save();
        this.be = !0;
        var f = this.kb(0, 0, !0, !0),
            d = this.kb(0, 0, !1, !0);
        this.be = !1;
        this.b.ld && (f = Math.round(f), d = Math.round(d));
        this.Rk(f, d, c);
        var g = this.zc();
        c.scale(g, g);
        c.translate(-f, -d);
        this.Pc ? (this.Ib.left = this.Qb.nc(this.Fa), this.Ib.top = this.Qb.oc(this.Ga), this.Ib.right = this.Qb.nc(this.Ia), this.Ib.bottom = this.Qb.oc(this.Ha), this.od || !this.Ib.wh(this.Cg) ? (p(this.me), f = this.vm(), this.od = !1, this.Cg.ph(this.Ib)) : f = this.me) : f = this.d;
        for (var h, l = null, d = 0, g = f.length; d < g; ++d) h = f[d], h !== l && (this.vv(h, c), l = h);
        this.Pc && (this.me = f);
        c.restore();
        this.Pd && (a.globalCompositeOperation = this.Ad, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    g.prototype.vv = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.X();
            var c = a.F;
            c.right < this.Fa || c.bottom < this.Ga || c.left > this.Ia || c.top > this.Ha || (b.globalCompositeOperation = a.Ad, a.Hc(b))
        }
    };
    g.prototype.nl = function() {
        this.be = !0;
        var a = this.kb(0, 0, !0, !0),
            b = this.kb(0, 0, !1, !0);
        this.be = !1;
        this.b.ld && (a = Math.round(a), b = Math.round(b));
        this.Rk(a, b, null)
    };
    g.prototype.Rk = function(a, b, c) {
        var f = this.zc();
        this.Fa = a;
        this.Ga = b;
        this.Ia = a + 1 / f * this.b.H;
        this.Ha = b + 1 / f * this.b.G;
        a = this.Xa();
        0 !== a && (c && (c.translate(this.b.H / 2, this.b.G / 2), c.rotate(-a), c.translate(this.b.H / -2, this.b.G / -2)), this.Be.set(this.Fa, this.Ga, this.Ia, this.Ha), this.Be.offset((this.Fa + this.Ia) / -2, (this.Ga + this.Ha) / -2), this.ts.bs(this.Be, a), this.ts.rp(this.Be), this.Be.offset((this.Fa +
            this.Ia) / 2, (this.Ga + this.Ha) / 2), this.Fa = this.Be.left, this.Ga = this.Be.top, this.Ia = this.Be.right, this.Ha = this.Be.bottom)
    };
    g.prototype.vf = function(a) {
        if (this.Pd = this.Lj) {
            this.b.rb || (this.b.rb = a.Zb(this.b.H, this.b.G, this.b.I));
            if (this.b.rb.Me !== this.b.H || this.b.rb.Le !== this.b.G) a.deleteTexture(this.b.rb), this.b.rb = a.Zb(this.b.H, this.b.G, this.b.I);
            a.Sb(this.b.rb)
        }
        this.be = !0;
        var b = this.kb(0, 0, !0, !0),
            c = this.kb(0, 0, !1, !0);
        this.be = !1;
        this.b.ld && (b = Math.round(b), c = Math.round(c));
        this.Rk(b, c, null);
        b = this.zc();
        a.uc();
        a.scale(b, b);
        a.Sg(-this.Xa());
        a.translate((this.Fa + this.Ia) / -2, (this.Ga + this.Ha) / -2);
        a.mc();
        this.Pc ? (this.Ib.left = this.Qb.nc(this.Fa), this.Ib.top = this.Qb.oc(this.Ga), this.Ib.right = this.Qb.nc(this.Ia), this.Ib.bottom = this.Qb.oc(this.Ha), this.od || !this.Ib.wh(this.Cg) ? (p(this.me), b = this.vm(), this.od = !1, this.Cg.ph(this.Ib)) : b = this.me) : b = this.d;
        for (var f, d = null, c = b.length - 1; 0 <= c; --c) f = b[c], f !== d && (this.xv(b[c], a), d = f);
        this.Pc && (this.me = b);
        this.rd || (this.Sl = this.b.wf++, a.Vk(this.Sl), a.Ur(1, 1, 1), a.Tp(), a.Tx())
    };
    g.prototype.Kb = function(a) {
        var b = 0,
            c = 0;
        if (this.Pd = this.Lj || 1 !== this.opacity || 0 < this.ea.length || 0 !== this.jb) {
            this.b.rb || (this.b.rb = a.Zb(this.b.H, this.b.G, this.b.I));
            if (this.b.rb.Me !== this.b.H || this.b.rb.Le !== this.b.G) a.deleteTexture(this.b.rb), this.b.rb = a.Zb(this.b.H, this.b.G, this.b.I);
            a.Sb(this.b.rb);
            this.rd && a.clear(0, 0, 0, 0)
        }
        this.rd || (this.b.Ja ? (a.Vk(this.Sl), a.Ur(this.cd[0] / 255, this.cd[1] / 255, this.cd[2] / 255), a.Tp(), a.jy()) : a.clear(this.cd[0] / 255, this.cd[1] / 255, this.cd[2] / 255, 1));
        this.be = !0;
        var f = this.kb(0, 0, !0, !0),
            b = this.kb(0, 0, !1, !0);
        this.be = !1;
        this.b.ld && (f = Math.round(f), b = Math.round(b));
        this.Rk(f, b, null);
        f = this.zc();
        a.uc();
        a.scale(f, f);
        a.Sg(-this.Xa());
        a.translate((this.Fa + this.Ia) / -2, (this.Ga + this.Ha) / -2);
        a.mc();
        this.Pc ? (this.Ib.left = this.Qb.nc(this.Fa), this.Ib.top = this.Qb.oc(this.Ga), this.Ib.right = this.Qb.nc(this.Ia), this.Ib.bottom = this.Qb.oc(this.Ha), this.od || !this.Ib.wh(this.Cg) ? (p(this.me), b = this.vm(), this.od = !1, this.Cg.ph(this.Ib)) : b = this.me) : b = this.d;
        var d, g, h = null,
            c = 0;
        for (d = b.length; c < d; ++c) g = b[c], g !== h && (this.wv(b[c], a), h = g);
        this.Pc && (this.me = b);
        this.Pd && (b = this.ea.length ? this.ea[0].ab : 0, c = this.ea.length ? this.ea[0].index : 0, 0 === this.ea.length || 1 === this.ea.length && !a.Gn(b) && 1 === this.opacity ? (1 === this.ea.length ? (a.Tb(b), a.Xf(this.Ab.Dh(), 1 / this.b.H, 1 / this.b.G, 0, 0, 1, 1, f, this.Xa(), this.Fa, this.Ga, (this.Fa + this.Ia) / 2, (this.Ga + this.Ha) / 2, this.b.qb.da, this.La[c]), a.Nk(b) && (this.b.U = !0)) : a.Tb(0), a.Sb(this.Ab.Dh()), a.ve(this.opacity), a.wb(this.b.rb), a.Rd(this.xb, this.nb), a.uc(), a.mc(), f = this.b.H / 2, b = this.b.G / 2, a.Sf(-f, b, f, b, f, -b, -f, -b), a.wb(null)) : this.Ab.Ln(a, this, null, this.Ab.Dh()))
    };
    g.prototype.wv = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.X();
            var c = a.F;
            c.right < this.Fa || c.bottom < this.Ga || c.left > this.Ia || c.top > this.Ha || (b.Vk(a.wf), a.so ? this.yv(a, b) : (b.Tb(0), b.Rd(a.xb, a.nb), a.Kb(b)))
        }
    };
    g.prototype.xv = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.X();
            var c = a.F;
            c.right < this.Fa || c.bottom < this.Ga || c.left > this.Ia || c.top > this.Ha || (a.wf = this.b.wf++, 0 === a.jb && 1 === a.opacity && a.ye && a.vf && (b.Vk(a.wf), a.vf(b)))
        }
    };
    g.prototype.yv = function(a, b) {
        var c = a.ea[0].ab,
            f = a.ea[0].index,
            d = this.zc();
        if (1 !== a.ea.length || b.Gn(c) || b.Mx(c) || (a.j || a.i.Xa()) && b.xi(c) || 1 !== a.opacity || a.type.wa.hr) this.Ab.Ln(b, this, a, this.Pd ? this.b.rb : this.Ab.Dh()), b.uc(), b.scale(d, d), b.Sg(-this.Xa()), b.translate((this.Fa + this.Ia) / -2, (this.Ga + this.Ha) / -2), b.mc();
        else {
            b.Tb(c);
            b.Rd(a.xb, a.nb);
            b.Nk(c) && (this.b.U = !0);
            var g = 0,
                h = 0,
                l = 0,
                q = 0;
            b.xi(c) && (c = a.F, g = this.Ea(c.left, c.top, !0, !0), h = this.Ea(c.left, c.top, !1, !0), l = this.Ea(c.right, c.bottom, !0, !0), c = this.Ea(c.right, c.bottom, !1, !0), g = g / windowWidth, h = 1 - h / windowHeight, l = l / windowWidth, q = 1 - c / windowHeight);
            b.Xf(this.Pd ? this.b.rb : this.Ab.Dh(), 1 / a.width, 1 / a.height, g, h, l, q, d, this.Xa(), this.Fa, this.Ga, (this.Fa + this.Ia) / 2, (this.Ga + this.Ha) / 2, this.b.qb.da, a.La[f]);
            a.Kb(b)
        }
    };
    g.prototype.kb = function(a, b, c, f) {
        var d = this.b.devicePixelRatio;
        this.b.Hf && (a *= d, b *= d);
        var d = this.b.Dr,
            g = this.b.Er,
            d = (this.Ab.scrollX - d) * this.jd + d,
            g = (this.Ab.scrollY - g) * this.kd + g,
            h = d,
            l = g,
            q = 1 / this.zc(!f);
        f ? (h -= this.b.H * q / 2, l -= this.b.G * q / 2) : (h -= this.b.width * q / 2, l -= this.b.height * q / 2);
        h += a * q;
        l += b * q;
        b = this.Xa();
        0 !== b && (h -= d, l -= g, a = Math.cos(b), b = Math.sin(b), f = h * a - l * b, l = l * a + h * b, h = f + d, l += g);
        return c ? h : l
    };
    g.prototype.Ea = function(a, b, c, f) {
        var d = this.b.Dr,
            g = this.b.Er,
            h = (this.Ab.scrollX - d) * this.jd + d,
            l = (this.Ab.scrollY - g) * this.kd + g,
            g = h,
            d = l,
            q = this.Xa();
        if (0 !== q) {
            a -= h;
            b -= l;
            var k = Math.cos(-q),
                q = Math.sin(-q),
                p = a * k - b * q;
            b = b * k + a * q;
            a = p + h;
            b += l
        }
        h = 1 / this.zc(!f);
        f ? (g -= this.b.H * h / 2, d -= this.b.G * h / 2) : (g -= this.b.width * h / 2, d -= this.b.height * h / 2);
        g = (a - g) / h;
        d = (b - d) / h;
        a = this.b.devicePixelRatio;
        this.b.Hf && !f && (g /= a, d /= a);
        return c ? g : d
    };
    g.prototype.Rb = function() {
        var a, b, c, f = {
            s: this.scale,
            a: this.j,
            vl: this.Fa,
            vt: this.Ga,
            vr: this.Ia,
            vb: this.Ha,
            v: this.visible,
            bc: this.cd,
            t: this.rd,
            px: this.jd,
            py: this.kd,
            o: this.opacity,
            zr: this.vd,
            fx: [],
            cg: this.rh,
            instances: []
        };
        a = 0;
        for (b = this.N.length; a < b; a++) c = this.N[a], f.fx.push({
            name: c.name,
            active: c.Xb,
            params: this.La[c.index]
        });
        return f
    };
    g.prototype.jc = function(a) {
        var b, c, f;
        this.scale = a.s;
        this.j = a.a;
        this.Fa = a.vl;
        this.Ga = a.vt;
        this.Ia = a.vr;
        this.Ha = a.vb;
        this.visible = a.v;
        this.cd = a.bc;
        this.rd = a.t;
        this.jd = a.px;
        this.kd = a.py;
        this.opacity = a.o;
        this.vd = a.zr;
        this.rh = a.cg || [];
        Aa(this.Lc, this.ks);
        var d = new ca;
        b = 0;
        for (f = this.rh.length; b < f; ++b) d.add(this.rh[b]);
        c = b = 0;
        for (f = this.Lc.length; b < f; ++b) d.contains(this.Lc[b][2]) || (this.Lc[c] = this.Lc[b], ++c);
        ya(this.Lc, c);
        c = a.fx;
        b = 0;
        for (f = c.length; b < f; b++)
            if (a = this.pm(c[b].name)) a.Xb = c[b].active, this.La[a.index] = c[b].params;
        this.sd();
        this.d.sort(k);
        this.$f = !0
    };
    Yb = g
})();
(function() {
    function h(a, b) {
        var c, f = a.length;
        switch (f) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < f; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function k(a, b) {
        return a.index - b.index
    }

    function g(a) {
        var b, c, f, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(k);
        a.length >= y.length && (y.length = a.length + 1);
        y[a.length] || (y[a.length] = []);
        e = y[a.length];
        b = 0;
        for (c = e.length; b < c; b++)
            if (f = e[b], h(a, f)) return f;
        e.push(a);
        return a
    }

    function d(a, b) {
        this.b = a;
        this.vs = {};
        this.Op = {};
        this.Cm = !1;
        this.jq = new ca;
        this.Yl = [];
        this.Il = [];
        this.name = b[0];
        var c = b[1];
        this.Ve = [];
        var f, e;
        f = 0;
        for (e = c.length; f < e; f++) this.lq(c[f], null, this.Ve)
    }

    function p(a) {
        this.type = a;
        this.d = [];
        this.Y = [];
        this.fa = !0
    }

    function r(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.xa = [];
        this.jf = [];
        this.hq = this.il = this.fo = this.Gm = this.group = this.Xn = !1;
        this.mb = [];
        this.ad = [];
        this.Yc = [];
        this.Gh = "";
        this.Fh = this.Gm = this.group = !1;
        this.rj = null;
        c[1] && (this.Gh = c[1][1].toLowerCase(), this.group = !0, this.Gm = !!c[1][0], this.rj = [], this.Fh = this.Gm, this.b.eg.push(this), this.b.Uj[this.Gh] = this);
        this.hd = c[2];
        this.ga = c[4];
        this.group || (this.b.qp[this.ga.toString()] = this);
        var f = c[5];
        a = 0;
        for (b = f.length; a < b; a++) {
            var e = new Zb(this, f[a]);
            e.index = a;
            this.mb.push(e);
            this.fp(e.type)
        }
        f = c[6];
        a = 0;
        for (b = f.length; a < b; a++) e = new $b(this, f[a]), e.index = a, this.ad.push(e);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.lq(c[a], this, this.Yc);
        this.ek = !1;
        this.mb.length && (this.ek = null == this.mb[0].type && this.mb[0].Lb == N.prototype.g.zo)
    }

    function q(a, b) {
        var c, f, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.sc))
            for (c = 0, f = a.yc.length; c < f; c++) e = a.yc[c], a !== e && -1 === b.indexOf(e) && b.push(e)
    }

    function b(a, b) {
        this.Gc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.T = [];
        this.Ta = [];
        this.ja = {};
        this.index = -1;
        this.jh = !1;
        this.Lb = this.b.Fe(b[1]);
        this.trigger = 0 < b[3];
        this.Np = 2 === b[3];
        this.Jd = b[4];
        this.Jm = b[5];
        this.gx = b[6];
        this.ga = b[7];
        this.b.Oe[this.ga.toString()] = this; - 1 === b[0] ? (this.type = null, this.hb = this.Pn, this.rf = null, this.dd = -1) : (this.type = this.b.u[b[0]], this.hb = this.gx ? this.$x : this.On, b[2] ? (this.rf = this.type.Oj(b[2]), this.dd = this.type.nm(b[2])) : (this.rf = null, this.dd = -1), this.Gc.parent && this.Gc.parent.Wk());
        this.Np && (this.hb = this.ay);
        if (10 === b.length) {
            var c, f, e = b[9];
            c = 0;
            for (f = e.length; c < f; c++) {
                var d = new ac(this, e[c]);
                this.T.push(d)
            }
            this.Ta.length = e.length
        }
    }

    function f(a, b) {
        this.Gc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.T = [];
        this.Ta = [];
        this.ja = {};
        this.index = -1;
        this.jh = !1;
        this.Lb = this.b.Fe(b[1]); - 1 === b[0] ? (this.type = null, this.hb = this.Pn, this.rf = null, this.dd = -1) : (this.type = this.b.u[b[0]], this.hb = this.On, b[2] ? (this.rf = this.type.Oj(b[2]), this.dd = this.type.nm(b[2])) : (this.rf = null, this.dd = -1));
        this.ga = b[3];
        this.b.Ie[this.ga.toString()] = this;
        if (6 === b.length) {
            var c, f, e = b[5];
            c = 0;
            for (f = e.length; c < f; c++) {
                var d = new ac(this, e[c]);
                this.T.push(d)
            }
            this.Ta.length = e.length
        }
    }

    function c() {
        D++;
        u.length === D && u.push(new bc);
        return u[D]
    }

    function a(a, b) {
        this.Xc = a;
        this.Gc = a.Gc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.Ed = null;
        this.ze = 0;
        this.get = null;
        this.yp = 0;
        this.Ab = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Ri = this.Zf = this.Ri = this.Zf = this.Rp = this.zf = this.Si = null;
        this.$c = !1;
        var c, f, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.Ed = new cc(this, b[1]);
                this.ze = 0;
                this.get = this.Dw;
                break;
            case 1:
                this.Ed = new cc(this, b[1]);
                this.ze = 0;
                this.get = this.Ew;
                break;
            case 5:
                this.Ed = new cc(this, b[1]);
                this.ze = 0;
                this.get = this.Iw;
                break;
            case 3:
            case 8:
                this.yp = b[1];
                this.get = this.Bw;
                break;
            case 6:
                this.Ab = this.b.Wm[b[1]];
                this.get = this.Jw;
                break;
            case 9:
                this.key = b[1];
                this.get = this.Hw;
                break;
            case 4:
                this.object = this.b.u[b[1]];
                this.get = this.Kw;
                this.Gc.fp(this.object);
                this.Xc instanceof $b ? this.Gc.Wk() : this.Gc.parent && this.Gc.parent.Wk();
                break;
            case 10:
                this.index = b[1];
                a.type.O ? (this.get = this.Fw, this.$c = !0) : this.get = this.Gw;
                break;
            case 11:
                this.Si = b[1];
                this.zf = null;
                this.get = this.Cw;
                break;
            case 2:
            case 12:
                this.Rp = b[1];
                this.get = this.Aw;
                break;
            case 13:
                for (this.get = this.Lw, this.Zf = [], this.Ri = [], c = 1, f = b.length; c < f; c++) e = new ac(this.Xc, b[c]), this.Zf.push(e), this.Ri.push(0)
        }
    }

    function e(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.xa = [];
        this.name = c[1];
        this.Ti = c[2];
        this.Fm = c[3];
        this.Vh = !!c[4];
        this.dk = !!c[5];
        this.ga = c[6];
        this.b.bh[this.ga.toString()] = this;
        this.data = this.Fm;
        this.parent ? (this.Nf = this.Vh || this.dk ? -1 : this.b.ly++, this.b.Ku.push(this)) : (this.Nf = -1, this.b.Ju.push(this))
    }

    function n(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.xa = [];
        this.Ih = null;
        this.Sw = c[1];
        this.Xb = !0
    }

    function m() {
        this.ms = [];
        this.reset(null)
    }
    var y = [];
    d.prototype.toString = function() {
        return this.name
    };
    d.prototype.lq = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new dc(this, b, a);
                if (a.hd)
                    for (c.push(a), c = 0, b = a.mb.length; c < b; c++) a.mb[c].trigger && this.mq(a, c);
                else a.wq() ? this.mq(a, 0) : c.push(a);
                break;
            case 1:
                a = new Vb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new ec(this, b, a), c.push(a)
        }
    };
    d.prototype.$a = function() {
        var a, b;
        a = 0;
        for (b = this.Ve.length; a < b; a++) this.Ve[a].$a(a < b - 1 && this.Ve[a + 1].ek)
    };
    d.prototype.no = function() {
        E(this.Yl);
        E(this.Il);
        this.dp(this);
        E(this.Il)
    };
    d.prototype.dp = function(a) {
        var b, c, f, e, d = a.Yl,
            g = a.Il,
            m = this.jq.td();
        b = 0;
        for (c = m.length; b < c; ++b) f = m[b], e = f.Ih, !f.Xb || a === e || -1 < g.indexOf(e) || (g.push(e), e.dp(a), d.push(e))
    };
    d.prototype.hb = function(a) {
        this.b.hA || (this.Cm = !0, a || (this.b.Om = !0));
        var b, c;
        b = 0;
        for (c = this.Ve.length; b < c; b++) {
            var f = this.Ve[b];
            f.hb();
            this.b.Rl(f.xa);
            this.b.Ye && this.b.Wb()
        }
        a || (this.b.Om = !1)
    };
    d.prototype.mq = function(a, b) {
        a.hd || this.b.kl.push(a);
        var c, f, e = a.mb[b],
            d;
        e.type ? d = e.type.name : d = "system";
        var g = (c = e.Np) ? this.Op : this.vs;
        g[d] || (g[d] = []);
        d = g[d];
        g = e.Lb;
        if (c) {
            if (e.T.length && (e = e.T[0], 1 === e.type && 2 === e.Ed.type)) {
                e = e.Ed.value.toLowerCase();
                c = 0;
                for (f = d.length; c < f; c++)
                    if (d[c].method == g) {
                        c = d[c].xh;
                        c[e] ? c[e].push([a, b]) : c[e] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[e] = [
                    [a, b]
                ];
                d.push({
                    method: g,
                    xh: c
                })
            }
        } else {
            c = 0;
            for (f = d.length; c < f; c++)
                if (d[c].method == g) {
                    d[c].xh.push([a, b]);
                    return
                }
            T && g === T.prototype.g.dg ? d.unshift({
                method: g,
                xh: [
                    [a, b]
                ]
            }) : d.push({
                method: g,
                xh: [
                    [a, b]
                ]
            })
        }
    };
    Jb = d;
    p.prototype.Bm = function() {
        return this.fa ? this.type.d.length : this.d.length
    };
    p.prototype.Kc = function() {
        return this.fa ? this.type.d : this.d
    };
    p.prototype.vi = function(a) {
        a && (a.b.Mb().Jb.hd ? (this.fa && (E(this.d), Aa(this.Y, a.type.d), this.fa = !1), a = this.Y.indexOf(a), -1 !== a && (this.d.push(this.Y[a]), this.Y.splice(a, 1))) : (this.fa = !1, E(this.d), this.d[0] = a))
    };
    rb = p;
    window._c2hh_ = "643BA44C4D0F6DF5C3301EA18D1A4A5858FB6476";
    r.prototype.$a = function(a) {
        var b, c = this.parent;
        if (this.group)
            for (this.il = !0; c;) {
                if (!c.group) {
                    this.il = !1;
                    break
                }
                c = c.parent
            }
        this.fo = !this.wq() && (!this.parent || this.parent.group && this.parent.il);
        this.hq = !!a;
        this.jf = this.xa.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (b = c.xa.length; a < b; a++) this.Iu(c.xa[a]);
            c = c.parent
        }
        this.xa = g(this.xa);
        this.jf = g(this.jf);
        a = 0;
        for (b = this.mb.length; a < b; a++) this.mb[a].$a();
        a = 0;
        for (b = this.ad.length; a < b; a++) this.ad[a].$a();
        a = 0;
        for (b = this.Yc.length; a < b; a++) this.Yc[a].$a(a < b - 1 && this.Yc[a + 1].ek)
    };
    r.prototype.ey = function(a) {
        if (this.Fh !== !!a) {
            this.Fh = !!a;
            var b;
            a = 0;
            for (b = this.rj.length; a < b; ++a) this.rj[a].As();
            0 < b && this.b.Ca.yf && this.b.Ca.yf.no()
        }
    };
    r.prototype.fp = function(a) {
        q(a, this.xa)
    };
    r.prototype.Iu = function(a) {
        q(a, this.jf)
    };
    r.prototype.Wk = function() {
        this.Xn = !0;
        this.parent && this.parent.Wk()
    };
    r.prototype.wq = function() {
        return this.mb.length ? this.mb[0].trigger : !1
    };
    r.prototype.hb = function() {
        var a, b, c = !1,
            f = this.b,
            e = this.b.Mb();
        e.Jb = this;
        var d = this.mb;
        this.ek || (e.cm = !1);
        if (this.hd) {
            0 === d.length && (c = !0);
            e.lb = 0;
            for (a = d.length; e.lb < a; e.lb++) b = d[e.lb], b.trigger || (b = b.hb()) && (c = !0);
            (e.Jf = c) && this.Sk()
        } else {
            e.lb = 0;
            for (a = d.length; e.lb < a; e.lb++)
                if (b = d[e.lb].hb(), !b) {
                    e.Jf = !1;
                    this.fo && f.Ye && f.Wb();
                    return
                }
            e.Jf = !0;
            this.Sk()
        }
        this.Cv(e)
    };
    r.prototype.Cv = function(a) {
        a.Jf && this.hq && (a.cm = !0);
        this.fo && this.b.Ye && this.b.Wb()
    };
    r.prototype.Yx = function(a) {
        this.b.Mb().Jb = this;
        this.mb[a].hb() && (this.Sk(), this.b.Mb().Jf = !0)
    };
    r.prototype.Sk = function() {
        var a = this.b.Mb(),
            b;
        a.xc = 0;
        for (b = this.ad.length; a.xc < b; a.xc++)
            if (this.ad[a.xc].hb()) return;
        this.Rr()
    };
    r.prototype.Vx = function() {
        var a = this.b.Mb(),
            b;
        for (b = this.ad.length; a.xc < b; a.xc++)
            if (this.ad[a.xc].hb()) return;
        this.Rr()
    };
    r.prototype.Rr = function() {
        if (this.Yc.length) {
            var a, b, c, f, e = this.Yc.length -
                1;
            this.b.Ok(this);
            if (this.Xn)
                for (a = 0, b = this.Yc.length; a < b; a++) c = this.Yc[a], (f = !this.il || !this.group && a < e) && this.b.Og(c.xa), c.hb(), f ? this.b.te(c.xa) : this.b.Rl(c.xa);
            else
                for (a = 0, b = this.Yc.length; a < b; a++) this.Yc[a].hb();
            this.b.Kk()
        }
    };
    r.prototype.Zx = function() {
        var a = this.b.Mb();
        a.Jb = this;
        var b = !1,
            c;
        a.lb = 0;
        for (c = this.mb.length; a.lb < c; a.lb++)
            if (this.mb[a.lb].hb()) b = !0;
            else if (!this.hd) return !1;
        return this.hd ? b : !0
    };
    r.prototype.Qg = function() {
        this.b.yh++;
        var a = this.b.Mb().lb,
            b = this.b.Ok(this);
        if (!this.hd)
            for (b.lb = a + 1, a = this.mb.length; b.lb < a; b.lb++)
                if (!this.mb[b.lb].hb()) {
                    this.b.Kk();
                    return
                }
        this.Sk();
        this.b.Kk()
    };
    r.prototype.Yw = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.mb[b].type === a.type) return !1;
        return !0
    };
    dc = r;
    b.prototype.$a = function() {
        var a, b, c;
        a = 0;
        for (b = this.T.length; a < b; a++) c = this.T[a], c.$a(), c.$c && (this.jh = !0)
    };
    b.prototype.ay = function() {
        return !0
    };
    b.prototype.Pn = function() {
        var a, b;
        a = 0;
        for (b = this.T.length; a < b; a++) this.Ta[a] = this.T[a].get();
        return Ua(this.Lb.apply(this.b.Sd, this.Ta), this.Jm)
    };
    b.prototype.$x = function() {
        var a, b;
        a = 0;
        for (b = this.T.length; a < b; a++) this.Ta[a] = this.T[a].get();
        a = this.Lb.apply(this.rf ? this.rf : this.type, this.Ta);
        this.type.zd();
        return a
    };
    b.prototype.On = function() {
        var a, b, c, f, e, d, g, m, h = this.type,
            n = h.Z(),
            u = this.Gc.hd && !this.trigger;
        b = 0;
        var q = h.sc,
            k = h.O,
            p = h.ge,
            r = this.dd,
            y = -1 < r,
            D = this.jh,
            w = this.T,
            L = this.Ta,
            I = this.Jm,
            M = this.Lb,
            H;
        if (D)
            for (b = 0, e = w.length; b < e; ++b) d = w[b], d.$c || (L[b] = d.get(0));
        else
            for (b = 0, e = w.length; b < e; ++b) L[b] = w[b].get(0);
        if (n.fa) {
            E(n.d);
            E(n.Y);
            H = h.d;
            a = 0;
            for (f = H.length; a < f; ++a) {
                m = H[a];
                if (D)
                    for (b = 0, e = w.length; b < e; ++b) d = w[b], d.$c && (L[b] = d.get(a));
                y ? (b = 0, k && (b = m.type.ng[p]), b = M.apply(m.M[r + b], L)) : b = M.apply(m, L);
                (g = Ua(b, I)) ? n.d.push(m): u && n.Y.push(m)
            }
            h.finish && h.finish(!0);
            n.fa = !1;
            h.zd();
            return n.Bm()
        }
        c = 0;
        H = (g = u && !this.Gc.Yw(this)) ? n.Y : n.d;
        var Q = !1;
        a = 0;
        for (f = H.length; a < f; ++a) {
            m = H[a];
            if (D)
                for (b = 0, e = w.length; b < e; ++b) d = w[b], d.$c && (L[b] = d.get(a));
            y ? (b = 0, k && (b = m.type.ng[p]), b = M.apply(m.M[r + b], L)) : b = M.apply(m, L);
            if (Ua(b, I))
                if (Q = !0, g) {
                    if (n.d.push(m), q)
                        for (b = 0, e = m.siblings.length; b < e; b++) d = m.siblings[b], d.type.Z().d.push(d)
                } else {
                    H[c] = m;
                    if (q)
                        for (b = 0, e = m.siblings.length; b < e; b++) d = m.siblings[b], d.type.Z().d[c] = d;
                    c++
                }
            else if (g) {
                H[c] = m;
                if (q)
                    for (b = 0, e = m.siblings.length; b < e; b++) d = m.siblings[b], d.type.Z().Y[c] = d;
                c++
            } else if (u && (n.Y.push(m), q))
                for (b = 0, e = m.siblings.length; b < e; b++) d = m.siblings[b], d.type.Z().Y.push(d)
        }
        ya(H, c);
        if (q)
            for (k = h.yc, a = 0, f = k.length; a < f; a++) m = k[a].Z(), g ? ya(m.Y, c) : ya(m.d, c);
        c = Q;
        if (g && !Q)
            for (a = 0, f = n.d.length; a < f; a++) {
                m = n.d[a];
                if (D)
                    for (b = 0, e = w.length; b < e; b++) d = w[b], d.$c && (L[b] = d.get(a));
                b = y ? M.apply(m.M[r], L) : M.apply(m, L);
                if (Ua(b, I)) {
                    Q = !0;
                    break
                }
            }
        h.finish && h.finish(c || u);
        return u ? Q : n.Bm()
    };
    Zb = b;
    f.prototype.$a = function() {
        var a, b, c;
        a = 0;
        for (b = this.T.length; a < b; a++) c = this.T[a], c.$a(), c.$c && (this.jh = !0)
    };
    f.prototype.Pn = function() {
        var a = this.b,
            b, c, f = this.T,
            e = this.Ta;
        b = 0;
        for (c = f.length; b < c; ++b) e[b] = f[b].get();
        return this.Lb.apply(a.Sd, e)
    };
    f.prototype.On = function() {
        var a = this.type,
            b = this.dd,
            c = a.ge,
            f = this.jh,
            e = this.T,
            d = this.Ta,
            g = this.Lb,
            m = a.Z().Kc(),
            a = a.O,
            h = -1 < b,
            n, u, q, k, p, r;
        if (f)
            for (u = 0, k = e.length; u < k; ++u) p = e[u], p.$c || (d[u] = p.get(0));
        else
            for (u = 0, k = e.length; u < k; ++u) d[u] = e[u].get(0);
        n = 0;
        for (q = m.length; n < q; ++n) {
            r = m[n];
            if (f)
                for (u = 0, k = e.length; u < k; ++u) p = e[u], p.$c && (d[u] = p.get(n));
            h ? (u = 0, a && (u = r.type.ng[c]), g.apply(r.M[b + u], d)) : g.apply(r, d)
        }
        return !1
    };
    $b = f;
    var u = [],
        D = -1;
    a.prototype.$a = function() {
        var a, b;
        if (11 === this.type) this.zf = this.b.$p(this.Si, this.Gc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Zf.length; a < b; a++) this.Zf[a].$a();
        this.Ed && this.Ed.$a()
    };
    a.prototype.ox = function(a) {
        this.$c || !a || a.wa.Yk || (this.$c = !0)
    };
    a.prototype.$r = function() {
        this.$c = !0
    };
    a.prototype.Dw = function(a) {
        this.ze = a || 0;
        a = c();
        this.Ed.get(a);
        D--;
        return a.data
    };
    a.prototype.Ew = function(a) {
        this.ze = a || 0;
        a = c();
        this.Ed.get(a);
        D--;
        return ja(a.data) ? a.data : ""
    };
    a.prototype.Kw = function() {
        return this.object
    };
    a.prototype.Bw = function() {
        return this.yp
    };
    a.prototype.Iw = function(a) {
        this.ze = a || 0;
        a = c();
        this.Ed.get(a);
        D--;
        return a.zb() ? this.b.qg(a.data) : this.b.Rj(a.data)
    };
    a.prototype.Jw = function() {
        return this.Ab
    };
    a.prototype.Hw = function() {
        return this.key
    };
    a.prototype.Gw = function() {
        return this.index
    };
    a.prototype.Fw = function(a) {
        a = a || 0;
        var b = this.Xc.type,
            c = null,
            c = b.Z(),
            f = c.Kc();
        if (f.length) c = f[a % f.length].type;
        else if (c.Y.length) c = c.Y[a % c.Y.length].type;
        else if (b.d.length) c = b.d[a % b.d.length].type;
        else return 0;
        return this.index + c.Fj[b.ge]
    };
    a.prototype.Cw = function() {
        return this.zf
    };
    a.prototype.Aw = function() {
        return this.Rp
    };
    a.prototype.Lw = function() {
        var a, b;
        a = 0;
        for (b = this.Zf.length; a < b; a++) this.Ri[a] = this.Zf[a].get();
        return this.Ri
    };
    ac = a;
    e.prototype.$a = function() {
        this.xa = g(this.xa)
    };
    e.prototype.xe = function(a) {
        var b = this.b.Xp();
        this.parent && !this.Vh && b ? (this.Nf >= b.length && (b.length = this.Nf + 1), b[this.Nf] = a) : this.data = a
    };
    e.prototype.Bf = function() {
        var a = this.b.Xp();
        return !this.parent || this.Vh || !a || this.dk ? this.data : this.Nf >= a.length || "undefined" === typeof a[this.Nf] ? this.Fm : a[this.Nf]
    };
    e.prototype.hb = function() {
        !this.parent || this.Vh || this.dk || this.xe(this.Fm)
    };
    Vb = e;
    n.prototype.toString = function() {
        return "include:" +
            this.Ih.toString()
    };
    n.prototype.$a = function() {
        this.Ih = this.b.em[this.Sw];
        this.sheet.jq.add(this);
        this.xa = g(this.xa);
        for (var a = this.parent; a;) a.group && a.rj.push(this), a = a.parent;
        this.As()
    };
    n.prototype.hb = function() {
        this.parent && this.b.Ai(this.b.u);
        this.Ih.Cm || this.Ih.hb(!0);
        this.parent && this.b.te(this.b.u)
    };
    n.prototype.As = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Fh) {
                this.Xb = !1;
                return
            }
            a = a.parent
        }
        this.Xb = !0
    };
    ec = n;
    m.prototype.reset = function(a) {
        this.Jb = a;
        this.xc = this.lb = 0;
        E(this.ms);
        this.cm = this.Jf = !1
    };
    m.prototype.sq = function() {
        return this.Jb.Xn ? !0 : this.lb < this.Jb.mb.length - 1 ? !!this.Jb.xa.length : !1
    };
    Ub = m
})();
(function() {
    function h(d, b) {
        this.Xc = d;
        this.b = d.b;
        this.type = b[0];
        this.get = [this.Tv, this.Pv, this.bw, this.ew, this.Ev, this.cw, this.Xv, this.Mv, this.Wv, this.aw, this.Fv, this.$v, this.Nv, this.Yv, this.Uv, this.Vv, this.Qv, this.Rv, this.Lv, this.dw, this.Zv, this.Sv, this.Kv, this.Ov][this.type];
        var f = null;
        this.ne = this.T = this.Ta = this.Lb = this.gl = this.second = this.first = this.value = null;
        this.dd = -1;
        this.ed = null;
        this.Es = -1;
        this.zf = this.Si = null;
        this.Rg = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = b[1];
                break;
            case 3:
                this.first = new cc(d, b[1]);
                break;
            case 18:
                this.first = new cc(d, b[1]);
                this.second = new cc(d, b[2]);
                this.gl = new cc(d, b[3]);
                break;
            case 19:
                this.Lb = this.b.Fe(b[1]);
                this.Lb !== N.prototype.D.random && this.Lb !== N.prototype.D.Vu || this.Xc.$r();
                this.Ta = [];
                this.T = [];
                3 === b.length ? (f = b[2], this.Ta.length = f.length + 1) : this.Ta.length = 1;
                break;
            case 20:
                this.ne = this.b.u[b[1]];
                this.dd = -1;
                this.Lb = this.b.Fe(b[2]);
                this.Rg = b[3];
                qc && this.Lb === qc.prototype.D.xo && this.Xc.$r();
                b[4] ? this.ed = new cc(d, b[4]) : this.ed = null;
                this.Ta = [];
                this.T = [];
                6 === b.length ? (f = b[5], this.Ta.length = f.length + 1) : this.Ta.length = 1;
                break;
            case 21:
                this.ne = this.b.u[b[1]];
                this.Rg = b[2];
                b[3] ? this.ed = new cc(d, b[3]) : this.ed = null;
                this.Es = b[4];
                break;
            case 22:
                this.ne = this.b.u[b[1]];
                this.ne.Oj(b[2]);
                this.dd = this.ne.nm(b[2]);
                this.Lb = this.b.Fe(b[3]);
                this.Rg = b[4];
                b[5] ? this.ed = new cc(d, b[5]) : this.ed = null;
                this.Ta = [];
                this.T = [];
                7 === b.length ? (f = b[6], this.Ta.length = f.length + 1) : this.Ta.length = 1;
                break;
            case 23:
                this.Si = b[1], this.zf = null
        }
        this.Xc.ox(this.ne);
        4 <= this.type && 17 >= this.type && (this.first = new cc(d, b[1]), this.second = new cc(d, b[2]));
        if (f) {
            var c, a;
            c = 0;
            for (a = f.length; c < a; c++) this.T.push(new cc(d, f[c]))
        }
    }

    function k() {
        ++r;
        p.length === r && p.push(new bc);
        return p[r]
    }

    function g(d, b, f) {
        var c, a;
        c = 0;
        for (a = d.length; c < a; ++c) d[c].get(f), b[c + 1] = f.data
    }

    function d(d, b) {
        this.type = d || fc.bg;
        this.data = b || 0;
        this.Pf = null;
        this.type == fc.bg && (this.data = Math.floor(this.data))
    }
    h.prototype.$a = function() {
        23 === this.type && (this.zf = this.Xc.b.$p(this.Si, this.Xc.Gc.parent));
        this.first && this.first.$a();
        this.second && this.second.$a();
        this.gl && this.gl.$a();
        this.ed && this.ed.$a();
        if (this.T) {
            var d, b;
            d = 0;
            for (b = this.T.length; d < b; d++) this.T[d].$a()
        }
    };
    var p = [],
        r = -1;
    h.prototype.dw = function(d) {
        var b = this.T,
            f = this.Ta;
        f[0] = d;
        d = k();
        g(b, f, d);
        --r;
        this.Lb.apply(this.b.Sd, f)
    };
    h.prototype.Zv = function(d) {
        var b = this.ne,
            f = this.Ta,
            c = this.T,
            a = this.ed,
            e = this.Lb,
            h = this.Xc.ze,
            m = b.Z(),
            p = m.Kc();
        if (!p.length)
            if (m.Y.length) p = m.Y;
            else {
                this.Rg ? d.Db("") : d.ca(0);
                return
            }
        f[0] = d;
        d.Pf = b;
        d = k();
        g(c, f, d);
        a && (a.get(d), d.zb() && (h = d.data, p = b.d));
        --r;
        b = p.length;
        if (h >= b || h <= -b) h %= b;
        0 > h && (h += b);
        e.apply(p[h], f)
    };
    h.prototype.Kv = function(d) {
        var b = this.ne,
            f = this.Ta,
            c = this.T,
            a = this.ed,
            e = this.dd,
            h = this.Lb,
            m = this.Xc.ze,
            p = b.Z(),
            u = p.Kc();
        if (!u.length)
            if (p.Y.length) u = p.Y;
            else {
                this.Rg ? d.Db("") : d.ca(0);
                return
            }
        f[0] = d;
        d.Pf = b;
        d = k();
        g(c, f, d);
        a && (a.get(d), d.zb() && (m = d.data, u = b.d));
        --r;
        c = u.length;
        if (m >= c || m <= -c) m %= c;
        0 > m && (m += c);
        m = u[m];
        u = 0;
        b.O && (u = m.type.ng[b.ge]);
        h.apply(m.M[e + u], f)
    };
    h.prototype.Sv = function(d) {
        var b = this.ed,
            f = this.ne,
            c = this.Es,
            a = this.Xc.ze,
            e = f.Z(),
            g = e.Kc();
        if (!g.length)
            if (e.Y.length) g = e.Y;
            else {
                this.Rg ? d.Db("") : d.ca(0);
                return
            }
        if (b) {
            e = k();
            b.get(e);
            if (e.zb()) {
                a = e.data;
                g = f.d;
                0 !== g.length && (a %= g.length, 0 > a && (a += g.length));
                a = f.tm(a);
                f = a.pb[c];
                ja(f) ? d.Db(f) : d.r(f);
                --r;
                return
            }--r
        }
        b = g.length;
        if (a >= b || a <= -b) a %= b;
        0 > a && (a += b);
        a = g[a];
        g = 0;
        f.O && (g = a.type.Fj[f.ge]);
        f = a.pb[c + g];
        ja(f) ? d.Db(f) : d.r(f)
    };
    h.prototype.Tv = function(d) {
        d.type = fc.bg;
        d.data = this.value
    };
    h.prototype.Pv = function(d) {
        d.type = fc.ag;
        d.data = this.value
    };
    h.prototype.bw = function(d) {
        d.type = fc.String;
        d.data = this.value
    };
    h.prototype.ew = function(d) {
        this.first.get(d);
        d.zb() && (d.data = -d.data)
    };
    h.prototype.Ev = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data += b.data, b.wg() && d.Gg());
        --r
    };
    h.prototype.cw = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data -= b.data, b.wg() && d.Gg());
        --r
    };
    h.prototype.Xv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data *= b.data, b.wg() && d.Gg());
        --r
    };
    h.prototype.Mv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data /= b.data, d.Gg());
        --r
    };
    h.prototype.Wv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data %= b.data, b.wg() && d.Gg());
        --r
    };
    h.prototype.aw = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data = Math.pow(d.data, b.data), b.wg() && d.Gg());
        --r
    };
    h.prototype.Fv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        b.zg() || d.zg() ? this.Hv(d, b) : this.Gv(d, b);
        --r
    };
    h.prototype.Hv = function(d, b) {
        d.zg() && b.zg() ? this.Jv(d, b) : this.Iv(d, b)
    };
    h.prototype.Jv = function(d, b) {
        d.data += b.data
    };
    h.prototype.Iv = function(d, b) {
        d.zg() ? d.data += (Math.round(1E10 * b.data) / 1E10).toString() : d.Db(d.data.toString() + b.data)
    };
    h.prototype.Gv = function(d, b) {
        d.ca(d.data && b.data ? 1 : 0)
    };
    h.prototype.$v = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.zb() && b.zb() && (d.data || b.data ? d.ca(1) : d.ca(0));
        --r
    };
    h.prototype.Lv = function(d) {
        this.first.get(d);
        d.data ? this.second.get(d) : this.gl.get(d)
    };
    h.prototype.Nv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.ca(d.data === b.data ? 1 : 0);
        --r
    };
    h.prototype.Yv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.ca(d.data !== b.data ? 1 : 0);
        --r
    };
    h.prototype.Uv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.ca(d.data < b.data ? 1 : 0);
        --r
    };
    h.prototype.Vv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.ca(d.data <= b.data ? 1 : 0);
        --r
    };
    h.prototype.Qv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.ca(d.data > b.data ? 1 : 0);
        --r
    };
    h.prototype.Rv = function(d) {
        this.first.get(d);
        var b = k();
        this.second.get(b);
        d.ca(d.data >= b.data ? 1 : 0);
        --r
    };
    h.prototype.Ov = function(d) {
        var b = this.zf.Bf();
        ia(b) ? d.r(b) : d.Db(b)
    };
    cc = h;
    d.prototype.wg = function() {
        return this.type === fc.ag
    };
    d.prototype.zb = function() {
        return this.type === fc.bg || this.type === fc.ag
    };
    d.prototype.zg = function() {
        return this.type === fc.String
    };
    d.prototype.Gg = function() {
        this.wg() || (this.zg() && (this.data = parseFloat(this.data)), this.type = fc.ag)
    };
    d.prototype.ca = function(d) {
        this.type = fc.bg;
        this.data = Math.floor(d)
    };
    d.prototype.r = function(d) {
        this.type = fc.ag;
        this.data = d
    };
    d.prototype.Db = function(d) {
        this.type = fc.String;
        this.data = d
    };
    d.prototype.Ei = function(d) {
        ia(d) ? (this.type = fc.ag, this.data = d) : ja(d) ? (this.type = fc.String, this.data = d.toString()) : (this.type = fc.bg, this.data = 0)
    };
    bc = d;
    fc = {
        bg: 0,
        ag: 1,
        String: 2
    }
})();

function N(h) {
    this.b = h;
    this.wc = []
}
N.prototype.Rb = function() {
    var h = {},
        k, g, d, p, r, q, b, f;
    h.waits = [];
    var c = h.waits,
        a;
    k = 0;
    for (g = this.wc.length; k < g; k++) {
        q = this.wc[k];
        a = {
            t: q.time,
            st: q.hs,
            s: q.Wn,
            ev: q.mg.ga,
            sm: [],
            sols: {}
        };
        q.mg.ad[q.xc] && (a.act = q.mg.ad[q.xc].ga);
        d = 0;
        for (p = q.xa.length; d < p; d++) a.sm.push(q.xa[d].ga);
        for (r in q.kc)
            if (q.kc.hasOwnProperty(r)) {
                b = this.b.u[parseInt(r, 10)];
                f = {
                    sa: q.kc[r].Tk,
                    insts: []
                };
                d = 0;
                for (p = q.kc[r].ie.length; d < p; d++) f.insts.push(q.kc[r].ie[d].uid);
                a.sols[b.ga.toString()] = f
            }
        c.push(a)
    }
    return h
};
N.prototype.jc = function(h) {
    h = h.waits;
    var k, g, d, p, r, q, b, f, c, a, e;
    E(this.wc);
    k = 0;
    for (g = h.length; k < g; k++)
        if (q = h[k], f = this.b.qp[q.ev.toString()]) {
            c = -1;
            d = 0;
            for (p = f.ad.length; d < p; d++)
                if (f.ad[d].ga === q.act) {
                    c = d;
                    break
                }
            if (-1 !== c) {
                b = {
                    kc: {},
                    xa: [],
                    Zl: !1
                };
                b.time = q.t;
                b.hs = q.st || "";
                b.Wn = !!q.s;
                b.mg = f;
                b.xc = c;
                d = 0;
                for (p = q.sm.length; d < p; d++)(f = this.b.Tj(q.sm[d])) && b.xa.push(f);
                for (r in q.sols)
                    if (q.sols.hasOwnProperty(r) && (f = this.b.Tj(parseInt(r, 10)))) {
                        c = q.sols[r];
                        a = {
                            Tk: c.sa,
                            ie: []
                        };
                        d = 0;
                        for (p = c.insts.length; d < p; d++)(e = this.b.Ch(c.insts[d])) && a.ie.push(e);
                        b.kc[f.index.toString()] = a
                    }
                this.wc.push(b)
            }
        }
};
(function() {
    function h() {}

    function k() {}

    function g() {}
    var d = N.prototype;
    h.prototype.$s = function() {
        return !0
    };
    h.prototype.Io = function() {
        return !0
    };
    h.prototype.Ht = function() {
        return !0
    };
    h.prototype.Qs = function(b, c, a) {
        return gc(b, c, a)
    };
    h.prototype.ct = function(b, c, a) {
        var e = this.b.Mb(),
            d = e.Jb,
            e = e.sq();
        b = this.b.Lr(b);
        if (a < c)
            if (e)
                for (; c >= a && !b.Va; --c) this.b.Og(d.xa), b.index = c, d.Qg(), this.b.te(d.xa);
            else
                for (; c >= a && !b.Va; --c) b.index = c, d.Qg();
        else if (e)
            for (; c <= a && !b.Va; ++c) this.b.Og(d.xa), b.index = c, d.Qg(), this.b.te(d.xa);
        else
            for (; c <= a && !b.Va; ++c) b.index = c, d.Qg();
        this.b.Gr();
        return !1
    };
    var p = [],
        r = -1;
    h.prototype.dt = function(b) {
        var c = b.Z();
        r++;
        p.length === r && p.push([]);
        var a = p[r];
        Aa(a, c.Kc());
        var e = this.b.Mb(),
            d = e.Jb,
            g = e.sq(),
            e = this.b.Lr(),
            h, u, k, l, q, R, x = b.sc;
        if (g)
            for (g = 0, h = a.length; g < h && !e.Va; g++) {
                this.b.Og(d.xa);
                l = a[g];
                c = b.Z();
                c.fa = !1;
                E(c.d);
                c.d[0] = l;
                if (x)
                    for (u = 0, k = l.siblings.length; u < k; u++) q = l.siblings[u], R = q.type.Z(), R.fa = !1, E(R.d), R.d[0] = q;
                e.index = g;
                d.Qg();
                this.b.te(d.xa)
            } else
                for (c.fa = !1, E(c.d), g = 0, h = a.length; g < h && !e.Va; g++) {
                    l = a[g];
                    c.d[0] = l;
                    if (x)
                        for (u = 0, k = l.siblings.length; u < k; u++) q = l.siblings[u], R = q.type.Z(), R.fa = !1, E(R.d), R.d[0] = q;
                    e.index = g;
                    d.Qg()
                }
        E(a);
        this.b.Gr();
        r--;
        return !1
    };
    h.prototype.Xt = function(b, c, a, e) {
        var d, g, h, u;
        if (b) {
            r++;
            p.length === r && p.push([]);
            var k = p[r],
                l = b.Z();
            Aa(k, l.Kc());
            l.fa && E(l.Y);
            var q = this.b.Pj();
            h = d = 0;
            for (g = k.length; d < g; d++) u = k[d], k[h] = u, c = q.T[1].get(d), e = q.T[3].get(d), gc(c, a, e) ? h++ : l.Y.push(u);
            ya(k, h);
            l.fa = !1;
            Aa(l.d, k);
            E(k);
            r--;
            b.zd();
            return !!l.d.length
        }
    };
    h.prototype.xu = function() {
        var b = this.b.Pj().ja;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var c = b.TriggerOnce_lastTick,
            a = this.b.Td;
        b.TriggerOnce_lastTick = a;
        return this.b.Vm || c !== a - 1
    };
    h.prototype.Zs = function(b) {
        var c = this.b.Pj(),
            a = c.ja.Every_lastTime || 0,
            e = this.b.qb.da;
        "undefined" === typeof c.ja.Every_seconds && (c.ja.Every_seconds = b);
        var d = c.ja.Every_seconds;
        if (e >= a + d) return c.ja.Every_lastTime = a + d, e >= c.ja.Every_lastTime + .04 && (c.ja.Every_lastTime = e), c.ja.Every_seconds = b, !0;
        e < a - .1 && (c.ja.Every_lastTime = e);
        return !1
    };
    h.prototype.Ts = function(b, c, a) {
        return gc(b.Bf(), c, a)
    };
    h.prototype.Wt = function(b) {
        if (!b || !b.d.length) return !1;
        b.Z().fa = !0;
        b.zd();
        return !0
    };
    h.prototype.zo = function() {
        var b = this.b.Mb();
        return b.cm ? !1 : !b.Jf
    };
    h.prototype.Jo = function() {
        return !0
    };
    h.prototype.yt = function() {
        return !0
    };
    h.prototype.Al = function() {
        return !0
    };
    h.prototype.It = function() {
        return !0
    };
    h.prototype.zl = function() {
        return !0
    };
    h.prototype.Js = function(b, c, a) {
        return Oa(K(b), K(a)) <= K(c)
    };
    h.prototype.it = function(b, c) {
        return Ra(K(b), K(c))
    };
    h.prototype.ht = function(b, c, a) {
        b = Ma(b);
        c = Ma(c);
        a = Ma(a);
        return Ra(a, c) ? Ra(b, c) && !Ra(b, a) : !(!Ra(b, c) && Ra(b, a))
    };
    d.g = new h;
    k.prototype.et = function(b) {
        this.b.Wh || this.b.oh || (this.b.oh = b)
    };
    k.prototype.Xs = function(b, c, a, e) {
        if (c && b && (c = this.b.Ul(b, c, a, e))) {
            this.b.fd++;
            var d;
            this.b.trigger(Object.getPrototypeOf(b.wa).g.Xi, c);
            if (c.sc)
                for (a = 0, e = c.siblings.length; a < e; a++) d = c.siblings[a], this.b.trigger(Object.getPrototypeOf(d.type.wa).g.Xi, d);
            this.b.fd--;
            b = b.Z();
            b.fa = !1;
            E(b.d);
            b.d[0] = c;
            if (c.sc)
                for (a = 0, e = c.siblings.length; a < e; a++) d = c.siblings[a], b = d.type.Z(), b.fa = !1, E(b.d), b.d[0] = d
        }
    };
    k.prototype.gu = function(b, c) {
        b && b.visible !== c && (b.visible = c, this.b.U = !0)
    };
    k.prototype.ou = function(b, c) {
        0 === b.Ti ? ia(c) ? b.xe(c) : b.xe(parseFloat(c)) : 1 === b.Ti && b.xe(c.toString())
    };
    k.prototype.Is = function(b, c) {
        0 === b.Ti ? ia(c) ? b.xe(b.Bf() + c) : b.xe(b.Bf() + parseFloat(c)) : 1 === b.Ti && b.xe(b.Bf() + c.toString())
    };
    k.prototype.vu = function(b, c) {
        0 === b.Ti && (ia(c) ? b.xe(b.Bf() - c) : b.xe(b.Bf() - parseFloat(c)))
    };
    var q = [],
        b = [];
    k.prototype.yu = function(f) {
        if (!(0 > f)) {
            var c, a, e, d = this.b.Mb(),
                g;
            q.length ? g = q.pop() : g = {
                kc: {},
                xa: []
            };
            g.Zl = !1;
            g.time = this.b.qb.da + f;
            g.hs = "";
            g.Wn = !1;
            g.mg = d.Jb;
            g.xc = d.xc + 1;
            f = 0;
            for (c = this.b.u.length; f < c; f++) e = this.b.u[f], a = e.Z(), a.fa && -1 === d.Jb.xa.indexOf(e) || (g.xa.push(e), e = void 0, b.length ? e = b.pop() : e = {
                ie: []
            }, e.Tk = !1, e.Tk = a.fa, Aa(e.ie, a.d), g.kc[f.toString()] = e);
            this.wc.push(g);
            return !0
        }
    };
    d.p = new k;
    g.prototype["int"] = function(b, c) {
        ja(c) ? (b.ca(parseInt(c, 10)), isNaN(b.data) && (b.data = 0)) : b.ca(c)
    };
    g.prototype["float"] = function(b, c) {
        ja(c) ? (b.r(parseFloat(c)), isNaN(b.data) && (b.data = 0)) : b.r(c)
    };
    g.prototype.random = function(b, c, a) {
        void 0 === a ? b.r(Math.random() * c) : b.r(Math.random() * (a - c) + c)
    };
    g.prototype.sqrt = function(b, c) {
        b.r(Math.sqrt(c))
    };
    g.prototype.abs = function(b, c) {
        b.r(Math.abs(c))
    };
    g.prototype.round = function(b, c) {
        b.ca(Math.round(c))
    };
    g.prototype.floor = function(b, c) {
        b.ca(Math.floor(c))
    };
    g.prototype.ceil = function(b, c) {
        b.ca(Math.ceil(c))
    };
    g.prototype.sin = function(b, c) {
        b.r(Math.sin(K(c)))
    };
    g.prototype.cos = function(b, c) {
        b.r(Math.cos(K(c)))
    };
    g.prototype.tan = function(b, c) {
        b.r(Math.tan(K(c)))
    };
    g.prototype.asin = function(b, c) {
        b.r(Fa(Math.asin(c)))
    };
    g.prototype.acos = function(b, c) {
        b.r(Fa(Math.acos(c)))
    };
    g.prototype.atan = function(b, c) {
        b.r(Fa(Math.atan(c)))
    };
    g.prototype.exp = function(b, c) {
        b.r(Math.exp(c))
    };
    g.prototype.log10 = function(b, c) {
        b.r(Math.log(c) / Math.LN10)
    };
    g.prototype.max = function(b) {
        var c = arguments[1];
        "number" !== typeof c && (c = 0);
        var a, e, d;
        a = 2;
        for (e = arguments.length; a < e; a++) d = arguments[a], "number" === typeof d && c < d && (c = d);
        b.r(c)
    };
    g.prototype.min = function(b) {
        var c = arguments[1];
        "number" !== typeof c && (c = 0);
        var a, e, d;
        a = 2;
        for (e = arguments.length; a < e; a++) d = arguments[a], "number" === typeof d && c > d && (c = d);
        b.r(c)
    };
    g.prototype.Se = function(b) {
        b.r(this.b.Se)
    };
    g.prototype.Yg = function(b) {
        b.r(this.b.Yg)
    };
    g.prototype.time = function(b) {
        b.r(this.b.qb.da)
    };
    g.prototype.Td = function(b) {
        b.ca(this.b.Td)
    };
    g.prototype.wk = function(b) {
        b.ca(this.b.wk)
    };
    g.prototype.km = function(b) {
        b.ca(this.b.km)
    };
    g.prototype.lx = function(b, c) {
        var a, e;
        if (this.b.ki.length)
            if (c) {
                for (e = this.b.li; 0 <= e; --e)
                    if (a = this.b.ki[e], a.name === c) {
                        b.ca(a.index);
                        return
                    }
                b.ca(0)
            } else a = this.b.Yp(), b.ca(a ? a.index : -1);
        else b.ca(0)
    };
    g.prototype.cv = function(b, c, a, e, d) {
        b.r(Ta(c, a, e, d))
    };
    g.prototype.j = function(b, c, a, e, d) {
        b.r(Fa(Na(c, a, e, d)))
    };
    g.prototype.ix = function(b) {
        b.ca(this.b.Ca.width)
    };
    g.prototype.hx = function(b) {
        b.ca(this.b.Ca.height)
    };
    g.prototype.left = function(b, c, a) {
        b.Db(ja(c) ? c.substr(0, a) : "")
    };
    g.prototype.right = function(b, c, a) {
        b.Db(ja(c) ? c.substr(c.length - a) : "")
    };
    g.prototype.replace = function(b, c, a, e) {
        ja(c) && ja(a) && ja(e) ? b.Db(c.replace(new RegExp(cb(a), "gi"), e)) : b.Db(ja(c) ? c : "")
    };
    g.prototype.trim = function(b, c) {
        b.Db(ja(c) ? c.trim() : "")
    };
    g.prototype.Vu = function(b) {
        var c = qa(Math.random() * (arguments.length - 1));
        b.Ei(arguments[c + 1])
    };
    g.prototype.Tl = function(b) {
        b.r(this.b.Tl / 1E3)
    };
    g.prototype.Cy = function(b, c) {
        var a = this.b.Qj(c);
        b.r(a ? a.Fa : 0)
    };
    g.prototype.Ey = function(b, c) {
        var a = this.b.Qj(c);
        b.r(a ? a.Ga : 0)
    };
    g.prototype.Dy = function(b, c) {
        var a = this.b.Qj(c);
        b.r(a ? a.Ia : 0)
    };
    g.prototype.By = function(b, c) {
        var a = this.b.Qj(c);
        b.r(a ? a.Ha : 0)
    };
    g.prototype.Eg = function(b) {
        b.r(this.b.Eg)
    };
    d.D = new g;
    d.Xx = function() {
        var d, c, a, e, g, m, h = this.b.Mb();
        d = 0;
        for (a = this.wc.length; d < a; d++) {
            e = this.wc[d];
            if (-1 === e.time) {
                if (!e.Wn) continue
            } else if (e.time > this.b.qb.da) continue;
            h.Jb = e.mg;
            h.xc = e.xc;
            h.lb = 0;
            for (c in e.kc) e.kc.hasOwnProperty(c) && (g = this.b.u[parseInt(c, 10)].Z(), m = e.kc[c], g.fa = m.Tk, Aa(g.d, m.ie), g = m, E(g.ie), b.push(g));
            e.mg.Vx();
            this.b.Rl(e.xa);
            e.Zl = !0
        }
        c = d = 0;
        for (a = this.wc.length; d < a; d++) e = this.wc[d], this.wc[c] = e, e.Zl ? (Wa(e.kc), E(e.xa), q.push(e)) : c++;
        ya(this.wc, c)
    }
})();
(function() {
    qb = function(h, g) {
        var d = h[1],
            p = h[3],
            r = h[4],
            q = h[5],
            b = h[6],
            f = h[7],
            c = h[8];
        g.g || (g.g = {});
        g.p || (g.p = {});
        g.D || (g.D = {});
        var a = g.g,
            e = g.p,
            n = g.D;
        p && (a.Us = function(a, b) {
            return gc(this.x, a, b)
        }, a.Vs = function(a, b) {
            return gc(this.y, a, b)
        }, a.Vy = function() {
            var a = this.i;
            this.X();
            var b = this.F;
            return !(b.right < a.Fa || b.bottom < a.Ga || b.left > a.Ia || b.top > a.Ha)
        }, a.Wy = function() {
            this.X();
            var a = this.F,
                b = this.b.Ca;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.ez = function(a, b, c) {
            var d = this.Z(),
                e = d.Kc();
            if (!e.length) return !1;
            var f = e[0],
                g = f,
                h = Ta(f.x, f.y, b, c),
                n, k, p;
            n = 1;
            for (k = e.length; n < k; n++)
                if (f = e[n], p = Ta(f.x, f.y, b, c), 0 === a && p < h || 1 === a && p > h) h = p, g = f;
            d.vi(g);
            return !0
        }, e.ru = function(a) {
            this.x !== a && (this.x = a, this.la())
        }, e.su = function(a) {
            this.y !== a && (this.y = a, this.la())
        }, e.ju = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.la()
        }, e.yz = function(a, b) {
            var c = a.vw(this);
            if (c) {
                var d;
                c.rm ? (d = c.rm(b, !0), c = c.rm(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.la()
            }
        }, e.$y = function(a) {
            0 !== a && (this.x += Math.cos(this.j) * a, this.y += Math.sin(this.j) * a, this.la())
        }, e.Zy = function(a, b) {
            0 !== b && (this.x += Math.cos(K(a)) * b, this.y += Math.sin(K(a)) * b, this.la())
        }, n.Vo = function(a) {
            a.r(this.x)
        }, n.Wo = function(a) {
            a.r(this.y)
        }, n.Se = function(a) {
            a.r(this.b.om(this))
        });
        r && (a.Qy = function(a, b) {
            return gc(this.width, a, b)
        }, a.Ny = function(a, b) {
            return gc(this.height, a, b)
        }, e.qu = function(a) {
            this.width !== a && (this.width = a, this.la())
        }, e.vz = function(a) {
            this.height !== a && (this.height = a, this.la())
        }, e.So = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.la()
        }, n.zu = function(a) {
            a.r(this.width)
        }, n.gt = function(a) {
            a.r(this.height)
        }, n.Ky = function(a) {
            this.X();
            a.r(this.F.left)
        }, n.My = function(a) {
            this.X();
            a.r(this.F.top)
        }, n.Ly = function(a) {
            this.X();
            a.r(this.F.right)
        }, n.Jy = function(a) {
            this.X();
            a.r(this.F.bottom)
        });
        q && (a.Js = function(a, b) {
            return Oa(this.j, K(b)) <= K(a)
        }, a.it = function(a) {
            return Ra(this.j, K(a))
        }, a.ht = function(a, b) {
            var c = Ma(a),
                d = Ma(b),
                e = Ka(this.j);
            return Ra(d, c) ? Ra(e, c) && !Ra(e, d) : !(!Ra(e, c) && Ra(e, d))
        }, e.oz = function(a) {
            a = K(Ja(a));
            isNaN(a) || this.j === a || (this.j = a, this.la())
        }, e.kz = function(a) {
            0 === a || isNaN(a) || (this.j += K(a), this.j = Ka(this.j), this.la())
        }, e.lz = function(a) {
            0 === a || isNaN(a) || (this.j -= K(a), this.j = Ka(this.j), this.la())
        }, e.mz = function(a, b) {
            var c = Qa(this.j, K(b), K(a));
            isNaN(c) || this.j === c || (this.j = c, this.la())
        }, e.nz = function(a, b, c) {
            a = Qa(this.j, Math.atan2(c - this.y, b - this.x), K(a));
            isNaN(a) || this.j === a || (this.j = a, this.la())
        }, e.zz = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.j === c || (this.j = c, this.la())
        }, n.Iy = function(a) {
            a.r(La(this.j))
        });
        d || (a.Ss = function(a, b, c) {
            return gc(this.pb[a], b, c)
        }, a.Ty = function(a) {
            return this.pb[a]
        }, a.fz = function(a, b) {
            var c = this.Z(),
                d = c.Kc();
            if (!d.length) return !1;
            var e = d[0],
                f = e,
                g = e.pb[b],
                h, n, k;
            h = 1;
            for (n = d.length; h < n; h++)
                if (e = d[h], k = e.pb[b], 0 === a && k < g || 1 === a && k > g) g = k, f = e;
            c.vi(f);
            return !0
        }, a.Qo = function(a) {
            var b, c, d, e, f;
            if (this.b.Pj().Jm) {
                f = this.Z();
                if (f.fa)
                    for (f.fa = !1, E(f.d), E(f.Y), d = this.d, b = 0, c = d.length; b < c; b++) e = d[b], e.uid === a ? f.Y.push(e) : f.d.push(e);
                else {
                    d = b = 0;
                    for (c = f.d.length; b < c; b++) e = f.d[b], f.d[d] = e, e.uid === a ? f.Y.push(e) : d++;
                    ya(f.d, d)
                }
                this.zd();
                return !!f.d.length
            }
            e = this.b.Ch(a);
            if (!e) return !1;
            f = this.Z();
            if (!f.fa && -1 === f.d.indexOf(e)) return !1;
            if (this.O)
                for (a = e.type.Ma, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return f.vi(e), this.zd(), !0
                } else if (e.type === this) return f.vi(e), this.zd(), !0;
            return !1
        }, a.Xi = function() {
            return !0
        }, a.zt = function() {
            return !0
        }, e.eu = function(a, b) {
            var c = this.pb;
            ia(c[a]) ? c[a] = ia(b) ? b : parseFloat(b) : ja(c[a]) && (c[a] = ja(b) ? b : b.toString())
        }, e.Hy = function(a, b) {
            var c = this.pb;
            ia(c[a]) ? c[a] = ia(b) ? c[a] + b : c[a] + parseFloat(b) : ja(c[a]) && (c[a] = ja(b) ? c[a] + b : c[a] + b.toString())
        }, e.uu = function(a, b) {
            var c = this.pb;
            ia(c[a]) && (c[a] = ia(b) ? c[a] - b : c[a] - parseFloat(b))
        }, e.pz = function(a, b) {
            this.pb[a] = b ? 1 : 0
        }, e.Ez = function(a) {
            this.pb[a] = 1 - this.pb[a]
        }, e.yo = function() {
            this.b.nf(this)
        }, e.pt || (e.pt = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (e) {
                return
            }
            this.b.nk(this, b, !0);
            this.xd && this.xd();
            if (this.M)
                for (a = 0, b = this.M.length; a < b; ++a) c = this.M[a], c.xd && c.xd()
        }), n.Ws = function(a) {
            var b = a.Pf.d.length,
                c, e, d;
            c = 0;
            for (e = this.b.Bd.length; c < e; c++) d = this.b.Bd[c], a.Pf.O ? 0 <= d.type.Ma.indexOf(a.Pf) && b++ : d.type === a.Pf && b++;
            a.ca(b)
        }, n.Yt = function(a) {
            a.ca(a.Pf.Z().Kc().length)
        }, n.Uo = function(a) {
            a.ca(this.uid)
        }, n.Ry = function(a) {
            a.ca(this.Eh())
        }, n.Ls || (n.Ls = function(a) {
            a.Db(JSON.stringify(this.b.Qn(this, !0)))
        }));
        b && (a.kt = function() {
            return this.visible
        }, e.gh = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.U = !0)
        }, a.Oy = function(a, b) {
            return gc(mb(100 * this.opacity), a, b)
        }, e.iu = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.U = !0)
        }, n.Opacity = function(a) {
            a.r(mb(100 * this.opacity))
        });
        f && (a.Uy = function(a) {
            return a ? this.i === a : !1
        }, a.gz = function(a) {
            var b = this.Z(),
                c = b.Kc();
            if (!c.length) return !1;
            var e = c[0],
                d = e,
                f, g;
            f = 1;
            for (g = c.length; f < g; f++)
                if (e = c[f], 0 === a) {
                    if (e.i.index > d.i.index || e.i.index === d.i.index && e.Tc() > d.Tc()) d = e
                } else if (e.i.index < d.i.index || e.i.index === d.i.index && e.Tc() < d.Tc()) d = e;
            b.vi(d);
            return !0
        }, e.Wi = function() {
            var a = this.i,
                b = a.d;
            b.length && b[b.length - 1] === this || (a.Pg(this, !1), a.lh(this, !1), this.b.U = !0)
        }, e.az = function() {
            var a = this.i,
                b = a.d;
            b.length && b[0] === this || (a.Pg(this, !1), a.Kx(this), this.b.U = !0)
        }, e.bz = function(a) {
            a && a != this.i && (this.i.Pg(this, !0), this.i = a, a.lh(this, !0), this.b.U = !0)
        }, e.Iz = function(a, b) {
            var c = 0 === a;
            if (b) {
                var e = b.aq(this);
                e && e.uid !== this.uid && (this.i.index !== e.i.index && (this.i.Pg(this, !0), this.i = e.i, e.i.lh(this, !0)), this.i.qx(this, e, c), this.b.U = !0)
            }
        }, n.Yy = function(a) {
            a.ca(this.i.or)
        }, n.nt = function(a) {
            a.Db(this.i.name)
        }, n.Hz = function(a) {
            a.ca(this.Tc())
        });
        c && (e.rz = function(a, b) {
            if (this.b.n) {
                var c = this.type.qm(b);
                if (!(0 > c)) {
                    var e = 1 === a;
                    this.He[c] !== e && (this.He[c] = e, this.sd(), this.b.U = !0)
                }
            }
        }, e.sz = function(a, b, c) {
            if (this.b.n) {
                var e = this.type.qm(a);
                0 > e || (a = this.type.N[e], e = this.La[e], b = Math.floor(b), 0 > b || b >= e.length || (1 === this.b.n.zw(a.ab, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Xb && (this.b.U = !0))))
            }
        })
    };
    Kb = function() {
        this.Ol = this.Ll = !0;
        this.type.mp = !0;
        this.b.U = !0;
        var h, g, d = this.Ml;
        h = 0;
        for (g = d.length; h < g; ++h) d[h](this);
        this.i.Pc && this.X()
    };
    Lb = function(h) {
        h && this.Ml.push(h)
    };
    Pb = function() {
        if (this.Ll) {
            var h = this.F,
                g = this.yb;
            h.set(this.x, this.y, this.x + this.width, this.y + this.height);
            h.offset(-this.gc * this.width, -this.hc * this.height);
            this.j ? (h.offset(-this.x, -this.y), g.bs(h, this.j), g.offset(this.x, this.y), g.rp(h)) : g.Fi(h);
            h.normalize();
            this.Ll = !1;
            this.xy()
        }
    };
    var h = new ta(0, 0, 0, 0);
    Qb = function() {
        if (this.i.Pc) {
            var k = this.i.Qb,
                g = this.F;
            h.set(k.nc(g.left), k.oc(g.top), k.nc(g.right), k.oc(g.bottom));
            this.tc.wh(h) || (this.tc.right < this.tc.left ? k.update(this, null, h) : k.update(this, this.tc, h), this.tc.ph(h), this.i.od = !0)
        }
    };
    Rb = function() {
        if (this.Ol && this.sf) {
            this.X();
            var k = this.type.xp,
                g = this.F;
            h.set(k.nc(g.left), k.oc(g.top), k.nc(g.right), k.oc(g.bottom));
            this.Pe.wh(h) || (this.Pe.right < this.Pe.left ? k.update(this, null, h) : k.update(this, this.Pe, h), this.Pe.ph(h), this.Ol = !1)
        }
    };
    Ob = function(h, g) {
        return this.F.Yb(h, g) && this.yb.Yb(h, g) ? this.za && !this.za.vg() ? (this.za.hg(this.width, this.height, this.j), this.za.Yb(h - this.x, g - this.y)) : !0 : !1
    };
    Gb = function() {
        this.type.ll();
        return this.Ef
    };
    Sb = function() {
        this.i.qo();
        return this.ud
    };
    Tb = function() {
        E(this.ea);
        var h, g, d, p = !0;
        h = 0;
        for (g = this.He.length; h < g; h++) this.He[h] && (d = this.type.N[h], this.ea.push(d), d.md || (p = !1));
        this.so = !!this.ea.length;
        this.ye = p
    };
    Hb = function() {
        return "Inst" + this.Kr
    };
    tb = function(h) {
        if (h && h.sc && h.type != this) {
            var g, d, p;
            g = 0;
            for (d = h.siblings.length; g < d; g++)
                if (p = h.siblings[g], p.type == this) return p
        }
        h = this.Z().Kc();
        return h.length ? h[0] : null
    };
    ub = function(h) {
        var g = this.Z().Kc();
        return g.length ? g[h.Eh() % g.length] : null
    };
    sb = function() {
        if (this.Vg && !this.O) {
            var h, g;
            h = 0;
            for (g = this.d.length; h < g; h++) this.d[h].Ef = h;
            var d = h,
                p = this.b.Bd;
            h = 0;
            for (g = p.length; h < g; ++h) p[h].type === this && (p[h].Ef = d++);
            this.Vg = !1
        }
    };
    Eb = function(h) {
        if (h < this.d.length) return this.d[h];
        h -= this.d.length;
        var g = this.b.Bd,
            d, p;
        d = 0;
        for (p = g.length; d < p; ++d)
            if (g[d].type === this) {
                if (0 === h) return g[d];
                --h
            }
        return null
    };
    vb = function() {
        return this.Ae[this.Cd]
    };
    xb = function() {
        this.Cd++;
        this.Cd === this.Ae.length ? this.Ae.push(new rb(this)) : (this.Ae[this.Cd].fa = !0, E(this.Ae[this.Cd].Y))
    };
    yb = function() {
        this.Cd++;
        this.Cd === this.Ae.length && this.Ae.push(new rb(this));
        var h = this.Ae[this.Cd],
            g = this.Ae[this.Cd - 1];
        g.fa ? (h.fa = !0, E(h.Y)) : (h.fa = !1, Aa(h.d, g.d), Aa(h.Y, g.Y))
    };
    zb = function() {
        this.Cd--
    };
    Ab = function(h) {
        var g, d, p, r, q, b = 0;
        if (!this.O)
            for (g = 0, d = this.Ma.length; g < d; g++)
                for (q = this.Ma[g], p = 0, r = q.Ra.length; p < r; p++) {
                    if (h === q.Ra[p].name) return this.ja.lastBehIndex = b, q.Ra[p];
                    b++
                }
        g = 0;
        for (d = this.Ra.length; g < d; g++) {
            if (h === this.Ra[g].name) return this.ja.lastBehIndex = b, this.Ra[g];
            b++
        }
        return null
    };
    Bb = function(h) {
        return this.Oj(h) ? this.ja.lastBehIndex : -1
    };
    Cb = function(h) {
        var g, d;
        g = 0;
        for (d = this.N.length; g < d; g++)
            if (this.N[g].name === h) return g;
        return -1
    };
    Db = function() {
        if (this.sc && !this.O) {
            var h, g, d, p, r, q, b;
            this.ll();
            q = this.Z();
            var f = q.fa,
                c = (h = this.b.Mb()) && h.Jb && h.Jb.hd;
            h = 0;
            for (g = this.yc.length; h < g; h++)
                if (r = this.yc[h], r !== this && (r.ll(), b = r.Z(), b.fa = f, !f)) {
                    E(b.d);
                    d = 0;
                    for (p = q.d.length; d < p; ++d) b.d[d] = r.tm(q.d[d].Ef);
                    if (c)
                        for (E(b.Y), d = 0, p = q.Y.length; d < p; ++d) b.Y[d] = r.tm(q.Y[d].Ef)
                }
        }
    };
    Fb = function() {
        return "Type" + this.ga
    };
    gc = function(h, g, d) {
        if ("undefined" === typeof h || "undefined" === typeof d) return !1;
        switch (g) {
            case 0:
                return h === d;
            case 1:
                return h !== d;
            case 2:
                return h < d;
            case 3:
                return h <= d;
            case 4:
                return h > d;
            case 5:
                return h >= d;
            default:
                return !1
        }
    }
})();
var oc = {};

function rc(h) {
    this.b = h
}
(function() {
    function h(a) {
        a = Math.pow(10, a / 20);
        isFinite(a) || (a = 0);
        0 > a && (a = 0);
        1 < a && (a = 1);
        return a
    }

    function k(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function g(a) {
        a = a.toLowerCase();
        return W.hasOwnProperty(a) && W[a].length ? W[a][0].Jc() : w.destination
    }

    function d() {
        return w.createGain ? w.createGain() : w.createGainNode()
    }

    function p(a) {
        return w.createDelay ? w.createDelay(a) : w.createDelayNode(a)
    }

    function r(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function q(a, b, c, e) {
        a.start ? a.start(e || 0, b) : a.noteGrainOn(e || 0, b, c - b)
    }

    function b(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function f(a, b, c, e, f, g) {
        this.type = "filter";
        this.sb = [a, b, c, e, f, g];
        this.ka = d();
        this.L = d();
        this.L.gain.value = g;
        this.J = d();
        this.J.gain.value = 1 - g;
        this.eb = w.createBiquadFilter();
        this.eb.type = "number" === typeof this.eb.type ? a : $c[a];
        this.eb.frequency.value = b;
        this.eb.detune && (this.eb.detune.value = c);
        this.eb.Q.value = e;
        this.eb.gain.value = f;
        this.ka.connect(this.eb);
        this.ka.connect(this.J);
        this.eb.connect(this.L)
    }

    function c(a, b, c) {
        this.type = "delay";
        this.sb = [a, b, c];
        this.ka = d();
        this.L = d();
        this.L.gain.value = c;
        this.J = d();
        this.J.gain.value = 1 - c;
        this.mi = d();
        this.Sc = p(a);
        this.Sc.delayTime.value = a;
        this.yj = d();
        this.yj.gain.value = b;
        this.ka.connect(this.mi);
        this.ka.connect(this.J);
        this.mi.connect(this.L);
        this.mi.connect(this.Sc);
        this.Sc.connect(this.yj);
        this.yj.connect(this.mi)
    }

    function a(a, b, c, e) {
        this.type = "convolve";
        this.sb = [b, c, e];
        this.ka = d();
        this.L = d();
        this.L.gain.value = c;
        this.J = d();
        this.J.gain.value = 1 - c;
        this.tf = w.createConvolver();
        a && (this.tf.normalize = b, this.tf.buffer = a);
        this.ka.connect(this.tf);
        this.ka.connect(this.J);
        this.tf.connect(this.L)
    }

    function e(a, b, c, e, f) {
        this.type = "flanger";
        this.sb = [a, b, c, e, f];
        this.ka = d();
        this.J = d();
        this.J.gain.value = 1 - f / 2;
        this.L = d();
        this.L.gain.value = f / 2;
        this.Gj = d();
        this.Gj.gain.value = e;
        this.Sc = p(a + b);
        this.Sc.delayTime.value = a;
        this.Cb = w.createOscillator();
        this.Cb.frequency.value = c;
        this.Dc = d();
        this.Dc.gain.value = b;
        this.ka.connect(this.Sc);
        this.ka.connect(this.J);
        this.Sc.connect(this.L);
        this.Sc.connect(this.Gj);
        this.Gj.connect(this.Sc);
        this.Cb.connect(this.Dc);
        this.Dc.connect(this.Sc.delayTime);
        r(this.Cb)
    }

    function n(a, b, c, e, f, g) {
        this.type = "phaser";
        this.sb = [a, b, c, e, f, g];
        this.ka = d();
        this.J = d();
        this.J.gain.value = 1 - g / 2;
        this.L = d();
        this.L.gain.value = g / 2;
        this.eb = w.createBiquadFilter();
        this.eb.type = "number" === typeof this.eb.type ? 7 : "allpass";
        this.eb.frequency.value = a;
        this.eb.detune && (this.eb.detune.value = b);
        this.eb.Q.value = c;
        this.Cb = w.createOscillator();
        this.Cb.frequency.value = f;
        this.Dc = d();
        this.Dc.gain.value = e;
        this.ka.connect(this.eb);
        this.ka.connect(this.J);
        this.eb.connect(this.L);
        this.Cb.connect(this.Dc);
        this.Dc.connect(this.eb.frequency);
        r(this.Cb)
    }

    function m(a) {
        this.type = "gain";
        this.sb = [a];
        this.ta = d();
        this.ta.gain.value = a
    }

    function y(a, b) {
        this.type = "tremolo";
        this.sb = [a, b];
        this.ta = d();
        this.ta.gain.value = 1 - b / 2;
        this.Cb = w.createOscillator();
        this.Cb.frequency.value = a;
        this.Dc = d();
        this.Dc.gain.value = b / 2;
        this.Cb.connect(this.Dc);
        this.Dc.connect(this.ta.gain);
        r(this.Cb)
    }

    function u(a, b) {
        this.type = "ringmod";
        this.sb = [a, b];
        this.ka = d();
        this.L = d();
        this.L.gain.value = b;
        this.J = d();
        this.J.gain.value = 1 - b;
        this.Bi = d();
        this.Bi.gain.value = 0;
        this.Cb = w.createOscillator();
        this.Cb.frequency.value = a;
        this.Cb.connect(this.Bi.gain);
        r(this.Cb);
        this.ka.connect(this.Bi);
        this.ka.connect(this.J);
        this.Bi.connect(this.L)
    }

    function D(a, b, c, e, f) {
        this.type = "distortion";
        this.sb = [a, b, c, e, f];
        this.ka = d();
        this.Mk = d();
        this.Lk = d();
        this.dy(c, Math.pow(10, e / 20));
        this.L = d();
        this.L.gain.value = f;
        this.J = d();
        this.J.gain.value = 1 - f;
        this.rl = w.createWaveShaper();
        this.vj = new Float32Array(65536);
        this.mw(a, b);
        this.rl.vj = this.vj;
        this.ka.connect(this.Mk);
        this.ka.connect(this.J);
        this.Mk.connect(this.rl);
        this.rl.connect(this.Lk);
        this.Lk.connect(this.L)
    }

    function l(a, b, c, e, d) {
        this.type = "compressor";
        this.sb = [a, b, c, e, d];
        this.ta = w.createDynamicsCompressor();
        try {
            this.ta.threshold.value = a, this.ta.knee.value = b, this.ta.ratio.value = c, this.ta.attack.value = e, this.ta.release.value = d
        } catch (f) {}
    }

    function C(a, b) {
        this.type = "analyser";
        this.sb = [a, b];
        this.ta = w.createAnalyser();
        this.ta.fftSize = a;
        this.ta.smoothingTimeConstant = b;
        this.kw = new Float32Array(this.ta.frequencyBinCount);
        this.es = new Uint8Array(a);
        this.ti = 0
    }

    function R() {
        this.K = null;
        this.ok = 0;
        this.kf = [];
        this.gn = this.gk = this.fk = 0
    }

    function x(a, b) {
        this.src = a;
        this.aa = P;
        this.Vc = b;
        this.fj = !1;
        var c = this;
        this.dn = this.xn = null;
        this.Mg = [];
        this.Uk = 0;
        this.uo = this.Ej = this.ls = this.Gk = !1;
        1 === P && b && !wb && (this.aa = 0, this.xn = d());
        this.Xd = this.ua = null;
        var e;
        switch (this.aa) {
            case 0:
                this.ua = new Audio;
                this.ua.crossOrigin = "anonymous";
                this.ua.addEventListener("canplaythrough", function() {
                    c.uo = !0
                });
                1 === P && w.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.ls = !0, this.ua.addEventListener("canplay", function() {
                    c.dn || (c.dn = w.createMediaElementSource(c.ua), c.dn.connect(c.xn))
                }));
                this.ua.autoplay = !1;
                this.ua.cA = "auto";
                this.ua.src = a;
                break;
            case 1:
                t.Th ? t.Qp(a, function(a) {
                    c.Xd = a;
                    c.Dp()
                }, function() {
                    c.Ej = !0
                }) : (e = new XMLHttpRequest, e.open("GET", a, !0), e.responseType = "arraybuffer", e.onload = function() {
                    c.Xd = e.response;
                    c.Dp()
                }, e.onerror = function() {
                    c.Ej = !0
                }, e.send());
                break;
            case 2:
                this.ua = !0;
                break;
            case 3:
                this.ua = !0
        }
    }

    function A(a, b) {
        var c = this;
        this.tag = b;
        this.Va = this.Fd = !0;
        this.src = a.src;
        this.buffer = a;
        this.aa = P;
        this.Vc = a.Vc;
        this.playbackRate = 1;
        this.sg = !0;
        this.Bc = this.Oc = !1;
        this.vc = 0;
        this.Uh = this.xg = this.Jd = !1;
        this.volume = 1;
        this.vn = function(a) {
            if (!c.Bc && !c.Oc) {
                var b = this;
                b || (b = a.target);
                b === c.ej && (c.sg = !0, c.Va = !0, Ga = c.tag, t.trigger(rc.prototype.g.Yi, S))
            }
        };
        this.ej = null;
        this.tg = 1 === Q && !this.Vc || 2 === Q;
        this.Hg = 1;
        this.startTime = this.tg ? t.qb.da : t.De.da;
        this.Za = this.ob = null;
        this.Ld = !1;
        this.Ya = null;
        this.Ar = this.yr = this.xr = this.ur = this.Cr = this.Br = 0;
        this.k = null;
        var e = !1;
        1 !== this.aa || 0 !== this.buffer.aa || this.buffer.ls || (this.aa = 0);
        switch (this.aa) {
            case 0:
                this.Vc ? (this.k = a.ua, e = !a.fj, a.fj = !0) : (this.k = new Audio, this.k.crossOrigin = "anonymous", this.k.autoplay = !1, this.k.src = a.ua.src, e = !0);
                e && this.k.addEventListener("ended", function() {
                    Ga = c.tag;
                    c.Va = !0;
                    t.trigger(rc.prototype.g.Yi, S)
                });
                break;
            case 1:
                this.ob = d();
                this.ob.connect(g(b));
                1 === this.buffer.aa ? a.ua && (this.k = w.createBufferSource(), this.k.buffer = a.ua, this.k.connect(this.ob)) : (this.k = this.buffer.ua, this.buffer.xn.connect(this.ob), this.buffer.fj || (this.buffer.fj = !0, this.buffer.ua.addEventListener("ended", function() {
                    Ga = c.tag;
                    c.Va = !0;
                    t.trigger(rc.prototype.g.Yi, S)
                })));
                break;
            case 2:
                this.k = new window.Media(xa + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (c.sg = !0, c.Va = !0, Ga = c.tag, t.trigger(rc.prototype.g.Yi, S))
                });
                break;
            case 3:
                this.k = !0
        }
    }

    function F(a, b) {
        var c = a.Gf() ? 1 : 0,
            e = b.Gf() ? 1 : 0;
        return c === e ? 0 : c < e ? 1 : -1
    }

    function G(a, b) {
        E(Ia);
        if (a.length) {
            var c, e, d;
            c = 0;
            for (e = I.length; c < e; c++) d = I[c], nb(a, d.tag) && Ia.push(d);
            b && Ia.sort(F)
        } else M && !M.Df() && (E(Ia), Ia[0] = M)
    }

    function B(a, b) {
        W.hasOwnProperty(a) ? W[a].push(b) : W[a] = [b];
        var c, e, d, f, g = w.destination;
        if (W.hasOwnProperty(a) && (d = W[a], d.length))
            for (g = d[0].Jc(), c = 0, e = d.length; c < e; c++) f = d[c], c + 1 === e ? f.Qc(w.destination) : f.Qc(d[c + 1].Jc());
        G(a);
        c = 0;
        for (e = Ia.length; c < e; c++) Ia[c].Ox(g);
        Xa && Mb === a && (Xa.disconnect(), Xa.connect(g))
    }

    function J() {}

    function v() {}

    function Y() {}
    var U = rc.prototype;
    U.Da = function(a) {
        this.wa = a;
        this.b = a.b
    };
    U.Da.prototype.S = function() {};
    var t = null,
        S = null,
        Ga = "",
        xa = "",
        P = 0,
        w = null,
        L = [],
        I = [],
        M = null,
        H = !1,
        Q = 0,
        ga = !1,
        O = 1,
        na = 0,
        ha = 0,
        Pa = !1,
        Ha = 1,
        Nb = 1,
        Mc = 10,
        Nc = 1E4,
        Oc = 1,
        Xa = null,
        Mb = "",
        gb = !1,
        hb = [],
        wb = !1,
        W = {},
        $c = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    f.prototype.Qc = function(a) {
        this.L.disconnect();
        this.L.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    f.prototype.remove = function() {
        this.ka.disconnect();
        this.eb.disconnect();
        this.L.disconnect();
        this.J.disconnect()
    };
    f.prototype.Jc = function() {
        return this.ka
    };
    c.prototype.Qc = function(a) {
        this.L.disconnect();
        this.L.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    c.prototype.remove = function() {
        this.ka.disconnect();
        this.mi.disconnect();
        this.Sc.disconnect();
        this.yj.disconnect();
        this.L.disconnect();
        this.J.disconnect()
    };
    c.prototype.Jc = function() {
        return this.ka
    };
    a.prototype.Qc = function(a) {
        this.L.disconnect();
        this.L.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    a.prototype.remove = function() {
        this.ka.disconnect();
        this.tf.disconnect();
        this.L.disconnect();
        this.J.disconnect()
    };
    a.prototype.Jc = function() {
        return this.ka
    };
    e.prototype.Qc = function(a) {
        this.J.disconnect();
        this.J.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    e.prototype.remove = function() {
        this.ka.disconnect();
        this.Sc.disconnect();
        this.Cb.disconnect();
        this.Dc.disconnect();
        this.J.disconnect();
        this.L.disconnect();
        this.Gj.disconnect()
    };
    e.prototype.Jc = function() {
        return this.ka
    };
    n.prototype.Qc = function(a) {
        this.J.disconnect();
        this.J.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    n.prototype.remove = function() {
        this.ka.disconnect();
        this.eb.disconnect();
        this.Cb.disconnect();
        this.Dc.disconnect();
        this.J.disconnect();
        this.L.disconnect()
    };
    n.prototype.Jc = function() {
        return this.ka
    };
    m.prototype.Qc = function(a) {
        this.ta.disconnect();
        this.ta.connect(a)
    };
    m.prototype.remove = function() {
        this.ta.disconnect()
    };
    m.prototype.Jc = function() {
        return this.ta
    };
    y.prototype.Qc = function(a) {
        this.ta.disconnect();
        this.ta.connect(a)
    };
    y.prototype.remove = function() {
        this.Cb.disconnect();
        this.Dc.disconnect();
        this.ta.disconnect()
    };
    y.prototype.Jc = function() {
        return this.ta
    };
    u.prototype.Qc = function(a) {
        this.L.disconnect();
        this.L.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    u.prototype.remove = function() {
        this.Cb.disconnect();
        this.Bi.disconnect();
        this.ka.disconnect();
        this.L.disconnect();
        this.J.disconnect()
    };
    u.prototype.Jc = function() {
        return this.ka
    };
    D.prototype.dy = function(a, b) {
        .01 > a && (a = .01);
        this.Mk.gain.value = a;
        this.Lk.gain.value = Math.pow(1 / a, .6) * b
    };
    D.prototype.shape = function(a, b, c) {
        var e = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + e * (1 - Math.exp(-(1 / e) * (a - b)));
        return b * c
    };
    D.prototype.mw = function(a, b) {
        for (var c = Math.pow(10, a / 20), e = Math.pow(10, b / 20), d = 0, f = 0; 32768 > f; ++f) d = f / 32768, d = this.shape(d, c, e), this.vj[32768 + f] = d, this.vj[32768 - f - 1] = -d
    };
    D.prototype.Qc = function(a) {
        this.L.disconnect();
        this.L.connect(a);
        this.J.disconnect();
        this.J.connect(a)
    };
    D.prototype.remove = function() {
        this.ka.disconnect();
        this.Mk.disconnect();
        this.rl.disconnect();
        this.Lk.disconnect();
        this.L.disconnect();
        this.J.disconnect()
    };
    D.prototype.Jc = function() {
        return this.ka
    };
    l.prototype.Qc = function(a) {
        this.ta.disconnect();
        this.ta.connect(a)
    };
    l.prototype.remove = function() {
        this.ta.disconnect()
    };
    l.prototype.Jc = function() {
        return this.ta
    };
    C.prototype.ib = function() {
        this.ta.getFloatFrequencyData(this.kw);
        this.ta.getByteTimeDomainData(this.es);
        for (var a = this.ta.fftSize, b = 0, c = this.ti = 0, e = 0; b < a; b++) e = (this.es[b] - 128) / 128, 0 > e && (e = -e), this.ti < e && (this.ti = e), c += e * e;
        this.ti = k(this.ti);
        k(Math.sqrt(c / a))
    };
    C.prototype.Qc = function(a) {
        this.ta.disconnect();
        this.ta.connect(a)
    };
    C.prototype.remove = function() {
        this.ta.disconnect()
    };
    C.prototype.Jc = function() {
        return this.ta
    };
    R.prototype.Ci = function(a) {
        if (this.K = a) this.fk = this.K.x, this.gk = this.K.y;
        E(this.kf)
    };
    R.prototype.Wj = function() {
        return !!this.K
    };
    R.prototype.ib = function(a) {
        this.K && 0 !== a && (this.gn = Na(this.fk, this.gk, this.K.x, this.K.y), a = Ta(this.fk, this.gk, this.K.x, this.K.y) / a, 4 > this.kf.length || this.kf.shift(), this.kf.push(a), this.fk = this.K.x, this.gk = this.K.y)
    };
    R.prototype.dq = function() {
        if (!this.kf.length) return 0;
        var a, b, c = 0;
        a = 0;
        for (b = this.kf.length; a < b; a++) c += this.kf[a];
        return c / this.kf.length
    };
    R.prototype.xm = function() {
        return Math.cos(this.gn) * this.dq()
    };
    R.prototype.ym = function() {
        return Math.sin(this.gn) * this.dq()
    };
    var Pc = !1;
    x.prototype.Px = function() {
        var a, b, c, e;
        c = a = 0;
        for (b = I.length; a < b; ++a) e = I[a], I[c] = e, e.buffer === this ? e.stop() : ++c;
        I.length = c;
        this.Xd = this.ua = null
    };
    x.prototype.Dp = function() {
        if (!this.ua && this.Xd) {
            var a = this;
            if (w.decodeAudioData) w.decodeAudioData(this.Xd, function(b) {
                a.ua = b;
                a.Xd = null;
                var c, e, d;
                if (fa(a.Ik) || ga) fa(a.sj) || (c = a.sj.tf, c.normalize = a.nr, c.buffer = b);
                else if (a.Mg.length) {
                    c = 0;
                    for (e = a.Mg.length; c < e; c++) {
                        b = a.Mg[c];
                        d = new A(a, b.rs);
                        d.Un(!0);
                        if ("undefined" !== typeof b.pr && (b.K = t.Ch(b.pr), !b.K)) continue;
                        if (b.K) {
                            var f = Sa(b.K.x, b.K.y, -b.K.i.Xa(), na, ha, !0),
                                g = Sa(b.K.x, b.K.y, -b.K.i.Xa(), na, ha, !1);
                            d.Tn(f, g, Fa(b.K.j - b.K.i.Xa()), b.Dm, b.hn, b.ln);
                            d.Ci(b.K)
                        } else d.Tn(b.x, b.y, b.Eu, b.Dm, b.hn, b.ln);
                        d.play(a.cn, a.to, a.Uk);
                        a.Gk && d.pause();
                        I.push(d)
                    }
                    E(a.Mg)
                } else d = new A(a, a.Ik || ""), d.play(a.cn, a.to, a.Uk), a.Gk && d.pause(), I.push(d)
            }, function() {
                a.Ej = !0
            });
            else if (this.ua = w.createBuffer(this.Xd, !1), this.Xd = null, fa(this.Ik) || ga) fa(this.sj) || (b = this.sj.tf, b.normalize = this.nr, b.buffer = this.ua);
            else {
                var b = new A(this, this.Ik);
                b.play(this.cn, this.to, this.Uk);
                this.Gk && b.pause();
                I.push(b)
            }
        }
    };
    x.prototype.rq = function() {
        switch (this.aa) {
            case 0:
                var a = 4 <= this.ua.readyState;
                a && (this.uo = !0);
                return a || this.uo;
            case 1:
                return !!this.Xd || !!this.ua;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    x.prototype.Zw = function() {
        switch (this.aa) {
            case 0:
                return this.rq();
            case 1:
                return !!this.ua;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    x.prototype.Qw = function() {
        switch (this.aa) {
            case 0:
                return !!this.ua.error;
            case 1:
                return this.Ej
        }
        return !1
    };
    A.prototype.Df = function() {
        switch (this.aa) {
            case 0:
                return this.k.ended;
            case 1:
                return 1 === this.buffer.aa ? !this.Fd && !this.Va && this.k.loop || this.Bc ? !1 : this.sg : this.k.ended;
            case 2:
                return this.sg;
            case 3:
                !0
        }
        return !0
    };
    A.prototype.Uu = function() {
        return this.Fd || this.Va ? !0 : this.Df()
    };
    A.prototype.Un = function(a) {
        1 === P && (!this.Ld && a ? this.ob && (this.Za || (this.Za = w.createPanner(), this.Za.panningModel = "number" === typeof this.Za.panningModel ? Ha : ["equalpower", "HRTF", "soundfield"][Ha], this.Za.distanceModel = "number" === typeof this.Za.distanceModel ? Nb : ["linear", "inverse", "exponential"][Nb], this.Za.refDistance = Mc, this.Za.maxDistance = Nc, this.Za.rolloffFactor = Oc), this.ob.disconnect(), this.ob.connect(this.Za), this.Za.connect(g(this.tag)), this.Ld = !0) : this.Ld && !a && this.ob && (this.Za.disconnect(), this.ob.disconnect(), this.ob.connect(g(this.tag)), this.Ld = !1))
    };
    A.prototype.Tn = function(a, b, c, e, d, f) {
        this.Ld && 1 === P && (this.Za.setPosition(a, b, 0), this.Za.setOrientation(Math.cos(K(c)), Math.sin(K(c)), 0), this.Za.coneInnerAngle = e, this.Za.coneOuterAngle = d, this.Za.coneOuterGain = f, this.Br = a, this.Cr = b, this.ur = c, this.xr = e, this.yr = d, this.Ar = f)
    };
    A.prototype.Ci = function(a) {
        this.Ld && 1 === P && (this.Ya || (this.Ya = new R), this.Ya.Ci(a))
    };
    A.prototype.ib = function(a) {
        if (this.Ld && 1 === P && this.Ya && this.Ya.Wj() && this.Gf()) {
            this.Ya.ib(a);
            a = this.Ya.K;
            var b = Sa(a.x, a.y, -a.i.Xa(), na, ha, !0),
                c = Sa(a.x, a.y, -a.i.Xa(), na, ha, !1);
            this.Za.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Ya.K.j && (b = a.j - a.i.Xa(), this.Za.setOrientation(Math.cos(b), Math.sin(b), 0));
            b = Sa(this.Ya.xm(), this.Ya.ym(), -a.i.Xa(), 0, 0, !0);
            c = Sa(this.Ya.xm(), this.Ya.ym(), -a.i.Xa(), 0, 0, !1);
            this.Za.setVelocity(b, c, 0)
        }
    };
    A.prototype.play = function(a, b, c, e) {
        var d = this.k;
        this.Jd = a;
        this.volume = b;
        c = c || 0;
        e = e || 0;
        switch (this.aa) {
            case 0:
                1 !== d.playbackRate && (d.playbackRate = 1);
                d.volume !== b * O && (d.volume = b * O);
                d.loop !== a && (d.loop = a);
                d.muted && (d.muted = !1);
                if (d.currentTime !== c) try {
                    d.currentTime = c
                } catch (f) {}
                if (this.Vc && gb && !t.Ac) hb.push(this);
                else try {
                    this.k.play()
                } catch (g) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", g)
                }
                break;
            case 1:
                this.muted = !1;
                this.Hg = 1;
                if (1 === this.buffer.aa) this.ob.gain.value = b * O, this.Fd || (this.k = w.createBufferSource(), this.k.buffer = this.buffer.ua, this.k.connect(this.ob)), this.k.onended = this.vn, this.ej = this.k, this.k.loop = a, this.sg = !1, 0 === c ? r(this.k, e) : q(this.k, c, this.Xe(), e);
                else {
                    1 !== d.playbackRate && (d.playbackRate = 1);
                    d.loop !== a && (d.loop = a);
                    d.volume = b * O;
                    if (d.currentTime !== c) try {
                        d.currentTime = c
                    } catch (h) {}
                    this.Vc && gb && !t.Ac ? hb.push(this) : d.play()
                }
                break;
            case 2:
                (!this.Fd && this.Va || 0 !== c) && d.seekTo(c);
                d.play();
                this.sg = !1;
                break;
            case 3:
                t.Nb ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.tg ? t.qb.da : t.De.da) - c;
        this.Bc = this.Va = this.Fd = !1
    };
    A.prototype.stop = function() {
        switch (this.aa) {
            case 0:
                this.k.paused || this.k.pause();
                break;
            case 1:
                1 === this.buffer.aa ? b(this.k) : this.k.paused || this.k.pause();
                break;
            case 2:
                this.k.stop();
                break;
            case 3:
                t.Nb && AppMobi.context.stopSound(this.src)
        }
        this.Va = !0;
        this.Bc = !1
    };
    A.prototype.pause = function() {
        if (!(this.Fd || this.Va || this.Df() || this.Bc)) {
            switch (this.aa) {
                case 0:
                    this.k.paused || this.k.pause();
                    break;
                case 1:
                    1 === this.buffer.aa ? (this.vc = this.um(!0), this.Jd && (this.vc = this.vc % this.Xe()), this.Bc = !0, b(this.k)) : this.k.paused || this.k.pause();
                    break;
                case 2:
                    this.k.pause();
                    break;
                case 3:
                    t.Nb && AppMobi.context.stopSound(this.src)
            }
            this.Bc = !0
        }
    };
    A.prototype.Ux = function() {
        if (!(this.Fd || this.Va || this.Df()) && this.Bc) {
            switch (this.aa) {
                case 0:
                    this.k.play();
                    break;
                case 1:
                    1 === this.buffer.aa ? (this.k = w.createBufferSource(), this.k.buffer = this.buffer.ua, this.k.connect(this.ob), this.k.onended = this.vn, this.ej = this.k, this.k.loop = this.Jd, this.ob.gain.value = O * this.volume * this.Hg, this.ml(), this.startTime = (this.tg ? t.qb.da : t.De.da) - this.vc / (this.playbackRate || .001), q(this.k, this.vc, this.Xe())) : this.k.play();
                    break;
                case 2:
                    this.k.play();
                    break;
                case 3:
                    t.Nb && AppMobi.context.resumeSound(this.src)
            }
            this.Bc = !1
        }
    };
    A.prototype.seek = function(a) {
        if (!(this.Fd || this.Va || this.Df())) switch (this.aa) {
            case 0:
                try {
                    this.k.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.aa) this.Bc ? this.vc = a : (this.pause(), this.vc = a, this.Ux());
                else try {
                    this.k.currentTime = a
                } catch (c) {}
                break;
            case 3:
                t.Nb && AppMobi.context.seekSound(this.src, a)
        }
    };
    A.prototype.Ox = function(a) {
        1 === this.aa && (this.Ld ? (this.Za.disconnect(), this.Za.connect(a)) : (this.ob.disconnect(), this.ob.connect(a)))
    };
    A.prototype.Xe = function() {
        var a = 0;
        switch (this.aa) {
            case 0:
                "undefined" !== typeof this.k.duration && (a = this.k.duration);
                break;
            case 1:
                a = this.buffer.ua.duration;
                break;
            case 2:
                a = this.k.getDuration();
                break;
            case 3:
                t.Nb && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    A.prototype.um = function(a) {
        var b = this.Xe(),
            c = 0;
        switch (this.aa) {
            case 0:
                "undefined" !== typeof this.k.currentTime && (c = this.k.currentTime);
                break;
            case 1:
                if (1 === this.buffer.aa) {
                    if (this.Bc) return this.vc;
                    c = (this.tg ? t.qb.da : t.De.da) - this.startTime
                } else "undefined" !== typeof this.k.currentTime && (c = this.k.currentTime);
                break;
            case 3:
                t.Nb && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.Jd && c > b && (c = b);
        return c
    };
    A.prototype.Gf = function() {
        return !this.Bc && !this.Fd && !this.Va && !this.Df()
    };
    A.prototype.ky = function() {
        return !this.Fd && !this.Va && !this.Df()
    };
    A.prototype.Ds = function() {
        var a = this.volume * O;
        isFinite(a) || (a = 0);
        switch (this.aa) {
            case 0:
                "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a);
                break;
            case 1:
                1 === this.buffer.aa ? this.ob.gain.value = a * this.Hg : "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a)
        }
    };
    A.prototype.Cj = function(a) {
        switch (this.aa) {
            case 0:
                this.k.muted !== !!a && (this.k.muted = !!a);
                break;
            case 1:
                1 === this.buffer.aa ? (this.Hg = a ? 0 : 1, this.ob.gain.value = O * this.volume * this.Hg) : this.k.muted !== !!a && (this.k.muted = !!a)
        }
    };
    A.prototype.fy = function() {
        this.xg = !0;
        this.Cj(this.xg || this.Uh)
    };
    A.prototype.Zr = function(a) {
        this.Uh = !!a;
        this.Cj(this.xg || this.Uh)
    };
    A.prototype.ml = function() {
        var a = this.playbackRate;
        this.tg && (a *= t.Yg);
        switch (this.aa) {
            case 0:
                this.k.playbackRate !== a && (this.k.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.aa ? this.k.playbackRate.value !== a && (this.k.playbackRate.value = a) : this.k.playbackRate !== a && (this.k.playbackRate = a)
        }
    };
    A.prototype.iy = function(a) {
        switch (this.aa) {
            case 0:
                a ? this.Gf() ? (this.Oc = !0, this.k.pause()) : this.Oc = !1 : this.Oc && (this.k.play(), this.Oc = !1);
                break;
            case 1:
                a ? this.Gf() ? (this.Oc = !0, 1 === this.buffer.aa ? (this.vc = this.um(!0), this.Jd && (this.vc = this.vc % this.Xe()), b(this.k)) : this.k.pause()) : this.Oc = !1 : this.Oc && (1 === this.buffer.aa ? (this.k = w.createBufferSource(), this.k.buffer = this.buffer.ua, this.k.connect(this.ob), this.k.onended = this.vn, this.ej = this.k, this.k.loop = this.Jd, this.ob.gain.value = O * this.volume * this.Hg, this.ml(), this.startTime = (this.tg ? t.qb.da : t.De.da) - this.vc / (this.playbackRate || .001), q(this.k, this.vc, this.Xe())) : this.k.play(), this.Oc = !1);
                break;
            case 2:
                a ? this.Gf() ? (this.k.pause(), this.Oc = !0) : this.Oc = !1 : this.Oc && (this.Oc = !1, this.k.play())
        }
    };
    U.qa = function(a) {
        this.type = a;
        t = this.b = a.b;
        S = this;
        this.ic = null;
        this.bi = -600;
        this.b.Th && (wb = !0);
        !(this.b.Ag || this.b.Zj && (this.b.Lh || this.b.$j)) || this.b.Mh || this.b.Aa || this.b.Km || wb || (gb = !0);
        w = null;
        "undefined" !== typeof AudioContext ? (P = 1, w = new AudioContext) : "undefined" !== typeof webkitAudioContext && (P = 1, w = new webkitAudioContext);
        this.b.Ag && w && (w.close && w.close(), "undefined" !== typeof AudioContext ? w = new AudioContext : "undefined" !== typeof webkitAudioContext && (w = new webkitAudioContext));
        gb && document.addEventListener("touchend", function() {
            if (!Pc && w) {
                if (!Pa && w.createBuffer) {
                    var a = w.createBuffer(1, 220, 22050),
                        b = w.createBufferSource();
                    b.buffer = a;
                    b.connect(w.destination);
                    r(b)
                }
                Pc = !0
            }
            var c;
            if (gb) {
                if (!ga)
                    for (a = 0, b = hb.length; a < b; ++a) c = hb[a], c.Va || c.Bc || c.k.play();
                E(hb)
            }
        }, !0);
        1 !== P && (this.b.rc && "undefined" !== typeof window.Media ? P = 2 : this.b.qq && (P = 3));
        2 === P && (xa = location.href, a = xa.lastIndexOf("/"), -1 < a && (xa = xa.substr(0, a + 1)), xa = xa.replace("file://", ""));
        if (this.b.$w && this.b.ax && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.nf(this);
        else {
            if (this.b.Nb) H = this.b.Zj;
            else try {
                H = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (b) {
                H = !1
            }
            this.b.Xg(this)
        }
    };
    var za = U.qa.prototype;
    za.S = function() {
        this.b.fg = this;
        Q = this.A[0];
        this.ue = this.A[1];
        this.Dx = 0 !== this.A[2];
        this.lr = 0;
        Ha = this.A[3];
        Nb = this.A[4];
        this.bi = -this.A[5];
        Mc = this.A[6];
        Nc = this.A[7];
        Oc = this.A[8];
        this.ic = new R;
        var a = this.b.H || this.b.width,
            b = this.b.G || this.b.height;
        1 === P && ("undefined" !== typeof w.listener.dopplerFactor && (w.listener.dopplerFactor = 0), w.listener.setPosition(a / 2, b / 2, this.bi), w.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Xa && Xa.disconnect();
            Mb = b.toLowerCase();
            Xa = w.createMediaStreamSource(a);
            Xa.connect(g(Mb))
        });
        this.b.gp(function(a) {
            S.zx(a)
        });
        var c = this;
        this.b.ep(function(a) {
            c.qn(a)
        })
    };
    za.qn = function(a) {
        var b, c, e;
        b = 0;
        for (c = I.length; b < c; b++) e = I[b], e.Ya && e.Ya.K === a && (e.Ya.K = null, e.Ld && e.Gf() && e.Jd && e.stop());
        this.ic.K === a && (this.ic.K = null)
    };
    za.Rb = function() {
        var a = {
                silent: ga,
                masterVolume: O,
                listenerZ: this.bi,
                listenerUid: this.ic.Wj() ? this.ic.K.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            c, e, d, f, g, h;
        c = 0;
        for (e = I.length; c < e; c++) d = I[c], !d.ky() || 3 === this.ue || d.Vc && 1 === this.ue || !d.Vc && 2 === this.ue || (f = d.um(), d.Jd && (f = f % d.Xe()), f = {
            tag: d.tag,
            buffersrc: d.buffer.src,
            is_music: d.Vc,
            playbackTime: f,
            volume: d.volume,
            looping: d.Jd,
            muted: d.xg,
            playbackRate: d.playbackRate,
            paused: d.Bc,
            resume_position: d.vc
        }, d.Ld && (f.pan = {}, h = f.pan, d.Ya && d.Ya.Wj() ? h.objUid = d.Ya.K.uid : (h.x = d.Br, h.y = d.Cr, h.a = d.ur), h.ia = d.xr, h.oa = d.yr, h.og = d.Ar), b.push(f));
        b = a.effects;
        for (g in W)
            if (W.hasOwnProperty(g)) {
                d = [];
                c = 0;
                for (e = W[g].length; c < e; c++) d.push({
                    type: W[g][c].type,
                    params: W[g][c].sb
                });
                b[g] = d
            }
        return a
    };
    var ib = [];
    za.jc = function(b) {
        var d = b.silent;
        O = b.masterVolume;
        this.bi = b.listenerZ;
        this.ic.Ci(null);
        var g = b.listenerUid; - 1 !== g && (this.ic.ok = g, ib.push(this.ic));
        var g = b.playing,
            h, p, r, k, q, t, w, F, x, v, A;
        if (3 !== this.ue)
            for (h = 0, p = I.length; h < p; h++) x = I[h], x.Vc && 1 === this.ue || (x.Vc || 2 !== this.ue) && x.stop();
        for (q in W)
            if (W.hasOwnProperty(q))
                for (h = 0, p = W[q].length; h < p; h++) W[q][h].remove();
        Wa(W);
        for (q in b.effects)
            if (b.effects.hasOwnProperty(q))
                for (t = b.effects[q], h = 0, p = t.length; h < p; h++) switch (r = t[h].type, v = t[h].params, r) {
                    case "filter":
                        B(q, new f(v[0], v[1], v[2], v[3], v[4], v[5]));
                        break;
                    case "delay":
                        B(q, new c(v[0], v[1], v[2]));
                        break;
                    case "convolve":
                        r = v[2];
                        x = this.Nj(r, !1);
                        x.ua ? r = new a(x.ua, v[0], v[1], r) : (r = new a(null, v[0], v[1], r), x.nr = v[0], x.sj = r);
                        B(q, r);
                        break;
                    case "flanger":
                        B(q, new e(v[0], v[1], v[2], v[3], v[4]));
                        break;
                    case "phaser":
                        B(q, new n(v[0], v[1], v[2], v[3], v[4], v[5]));
                        break;
                    case "gain":
                        B(q, new m(v[0]));
                        break;
                    case "tremolo":
                        B(q, new y(v[0], v[1]));
                        break;
                    case "ringmod":
                        B(q, new u(v[0], v[1]));
                        break;
                    case "distortion":
                        B(q, new D(v[0], v[1], v[2], v[3], v[4]));
                        break;
                    case "compressor":
                        B(q, new l(v[0], v[1], v[2], v[3], v[4]));
                        break;
                    case "analyser":
                        B(q, new C(v[0], v[1]))
                }
        h = 0;
        for (p = g.length; h < p; h++) 3 === this.ue || (b = g[h], r = b.buffersrc, k = b.is_music, q = b.tag, t = b.playbackTime, w = b.looping, F = b.volume, A = (v = b.pan) && v.hasOwnProperty("objUid") ? v.objUid : -1, k && 1 === this.ue) || !k && 2 === this.ue || ((x = this.Wp(r, q, k, w, F)) ? (x.vc = b.resume_position, x.Un(!!v), x.play(w, F, t), x.ml(), x.Ds(), x.Cj(x.xg || x.Uh), b.paused && x.pause(), b.muted && x.fy(), x.Cj(x.xg || x.Uh), v && (-1 !== A ? (x.Ya = x.Ya || new R, x.Ya.ok = A, ib.push(x.Ya)) : x.Tn(v.x, v.y, v.a, v.ia, v.oa, v.og))) : (x = this.Nj(r, k), x.Uk = t, x.Gk = b.paused, v && (-1 !== A ? x.Mg.push({
            pr: A,
            Dm: v.ia,
            hn: v.oa,
            ln: v.og,
            rs: q
        }) : x.Mg.push({
            x: v.x,
            y: v.y,
            Eu: v.a,
            Dm: v.ia,
            hn: v.oa,
            ln: v.og,
            rs: q
        }))));
        if (d && !ga) {
            h = 0;
            for (p = I.length; h < p; h++) I[h].Zr(!0);
            ga = !0
        } else if (!d && ga) {
            h = 0;
            for (p = I.length; h < p; h++) I[h].Zr(!1);
            ga = !1
        }
    };
    za.xd = function() {
        var a, b, c, e;
        a = 0;
        for (b = ib.length; a < b; a++) c = ib[a], e = this.b.Ch(c.ok), c.Ci(e), c.ok = -1, e && (na = e.x, ha = e.y);
        E(ib)
    };
    za.zx = function(a) {
        if (!this.Dx) {
            !a && w && w.resume && (w.resume(), Pa = !1);
            var b, c;
            b = 0;
            for (c = I.length; b < c; b++) I[b].iy(a);
            a && w && w.suspend && (w.suspend(), Pa = !0)
        }
    };
    za.ib = function() {
        var a = this.b.Se,
            b, c, e;
        b = 0;
        for (c = I.length; b < c; b++) e = I[b], e.ib(a), 0 !== Q && e.ml();
        var d, f;
        for (d in W)
            if (W.hasOwnProperty(d))
                for (e = W[d], b = 0, c = e.length; b < c; b++) f = e[b], f.ib && f.ib();
        1 === P && this.ic.Wj() && (this.ic.ib(a), na = this.ic.K.x, ha = this.ic.K.y, w.listener.setPosition(this.ic.K.x, this.ic.K.y, this.bi), w.listener.setVelocity(this.ic.xm(), this.ic.ym(), 0))
    };
    var jb = [];
    za.gy = function(a) {
        var b, c, e, d, f, g = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (e = a[b], d = e[0], e = 2 * e[1], (f = 4 < d.length && ".ogg" === d.substr(d.length - 4)) && H || !f && !H) jb.push({
                filename: d,
                size: e,
                K: null
            }), g += e;
        return g
    };
    za.my = function() {
        var a, b, c, e;
        a = 0;
        for (b = jb.length; a < b; ++a) c = jb[a], e = this.b.im + c.filename, c.K = this.Nj(e, !1)
    };
    za.ww = function() {
        var a = 0,
            b, c, e;
        b = 0;
        for (c = jb.length; b < c; ++b) e = jb[b], e.K.Zw() || e.K.Qw() || this.b.Aa || this.b.$j ? a += e.size : e.K.rq() && (a += Math.floor(e.size / 2));
        return a
    };
    za.Qx = function() {
        var a, b, c, e;
        c = a = 0;
        for (b = L.length; a < b; ++a) e = L[a], L[c] = e, e.Vc ? e.Px() : ++c;
        L.length = c
    };
    za.Nj = function(a, b) {
        var c, e, d, f = null;
        c = 0;
        for (e = L.length; c < e; c++)
            if (d = L[c], d.src === a) {
                f = d;
                break
            }
        f || (wb && b && this.Qx(), f = new x(a, b), L.push(f));
        return f
    };
    za.Wp = function(a, b, c, e, d) {
        var f, g, h;
        f = 0;
        for (g = I.length; f < g; f++)
            if (h = I[f], h.src === a && (h.Uu() || c)) return h.tag = b, h;
        a = this.Nj(a, c);
        if (!a.ua) return "<preload>" !== b && (a.Ik = b, a.cn = e, a.to = d), null;
        h = new A(a, b);
        I.push(h);
        return h
    };
    var Ia = [];
    J.prototype.Yi = function(a) {
        return nb(Ga, a)
    };
    U.g = new J;
    v.prototype.Play = function(a, b, c, e) {
        !ga && (c = h(c), M = this.Wp(this.b.im + a[0] + (H ? ".ogg" : ".m4a"), e, a[1], 0 !== b, c)) && (M.Un(!1), M.play(0 !== b, c, 0, this.lr), this.lr = 0)
    };
    v.prototype.To = function(a) {
        G(a);
        var b;
        a = 0;
        for (b = Ia.length; a < b; a++) Ia[a].stop()
    };
    v.prototype.hu = function(a) {
        O = h(a);
        var b;
        a = 0;
        for (b = I.length; a < b; a++) I[a].Ds()
    };
    U.p = new v;
    Y.prototype.Ys = function(a, b) {
        G(b, !0);
        Ia.length ? a.r(Ia[0].Xe()) : a.r(0)
    };
    U.D = new Y
})();

function sc(h) {
    this.b = h
}
(function() {
    function h() {}

    function k() {}
    var g = sc.prototype;
    g.Da = function(d) {
        this.wa = d;
        this.b = d.b
    };
    g.Da.prototype.S = function() {};
    g.qa = function(d) {
        this.type = d;
        this.b = d.b
    };
    g.qa.prototype.S = function() {
        var d = this;
        window.addEventListener("resize", function() {
            d.b.trigger(sc.prototype.g.Nt, d)
        });
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            d.b.trigger(sc.prototype.g.Kt, d)
        }), window.addEventListener("offline", function() {
            d.b.trigger(sc.prototype.g.Jt, d)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            d.b.Eg = 1;
            d.b.trigger(sc.prototype.g.Po, d)
        }), window.applicationCache.addEventListener("progress", function(g) {
            d.b.Eg = g.loaded / g.total || 0
        }));
        this.b.Nb || (document.addEventListener("appMobi.device.update.available", function() {
            d.b.trigger(sc.prototype.g.Po, d)
        }), document.addEventListener("backbutton", function() {
            d.b.trigger(sc.prototype.g.yl, d)
        }), document.addEventListener("menubutton", function() {
            d.b.trigger(sc.prototype.g.Ko, d)
        }), document.addEventListener("searchbutton", function() {
            d.b.trigger(sc.prototype.g.Qt, d)
        }), document.addEventListener("tizenhwkey", function(g) {
            var h;
            switch (g.keyName) {
                case "back":
                    h = d.b.trigger(sc.prototype.g.yl, d);
                    !h && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (h = d.b.trigger(sc.prototype.g.Ko, d)) || g.preventDefault()
            }
        }));
        this.b.bk && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!d.b.trigger(sc.prototype.g.yl, d)
        });
        this.b.gp(function(g) {
            g ? d.b.trigger(sc.prototype.g.Lt, d) : d.b.trigger(sc.prototype.g.Mt, d)
        });
        this.ck = "undefined" !== typeof window.is_scirra_arcade
    };
    h.prototype.Kt = function() {
        return !0
    };
    h.prototype.Jt = function() {
        return !0
    };
    h.prototype.Po = function() {
        return !0
    };
    h.prototype.Mt = function() {
        return !0
    };
    h.prototype.Lt = function() {
        return !0
    };
    h.prototype.Nt = function() {
        return !0
    };
    h.prototype.yl = function() {
        return !0
    };
    h.prototype.Ko = function() {
        return !0
    };
    h.prototype.Qt = function() {
        return !0
    };
    g.g = new h;
    k.prototype.Ps = function() {
        this.b.qc ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.ck || this.b.Aa || window.close()
    };
    k.prototype.ft = function(d, g) {
       /*  this.b.qc ? CocoonJS.App.openURL(d) : this.b.Uc ? ejecta.openURL(d) : this.b.bk ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(d)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(d, {
            openExternal: !0
        }) : this.b.rc ? window.open(d, "_system") : this.ck || this.b.Aa || (2 !== g || this.ck ? 1 !== g || this.ck ? window.location = d : window.parent.location = d : window.top.location = d) */
    };
    g.p = new k;
    g.D = new function() {}
})();

function qc(h) {
    this.b = h
}
(function() {
    function h() {
        this.name = "";
        this.Vf = 0;
        this.sb = []
    }

    function k() {
        b++;
        b === q.length && q.push(new h);
        return q[b]
    }

    function g() {}

    function d() {}

    function p() {}
    var r = qc.prototype;
    r.Da = function(b) {
        this.wa = b;
        this.b = b.b
    };
    r.Da.prototype.S = function() {};
    r.qa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var q = [],
        b = -1;
    r.qa.prototype.S = function() {
        var d = this;
        window.c2_callFunction = function(c, a) {
            var e, g, h, p = k();
            p.name = c.toLowerCase();
            p.Vf = 0;
            if (a)
                for (p.sb.length = a.length, e = 0, g = a.length; e < g; ++e) h = a[e], p.sb[e] = "number" === typeof h || "string" === typeof h ? h : "boolean" === typeof h ? h ? 1 : 0 : 0;
            else E(p.sb);
            d.b.trigger(qc.prototype.g.$i, d, p.name);
            b--;
            return p.Vf
        }
    };
    g.prototype.$i = function(d) {
        var c = 0 > b ? null : q[b];
        return c ? nb(d, c.name) : !1
    };
    r.g = new g;
    d.prototype.CallFunction = function(d, c) {
        var a = k();
        a.name = d.toLowerCase();
        a.Vf = 0;
        Aa(a.sb, c);
        this.b.trigger(qc.prototype.g.$i, this, a.name);
        b--
    };
    d.prototype.ku = function(d) {
        var c = 0 > b ? null : q[b];
        c && (c.Vf = d)
    };
    r.p = new d;
    p.prototype.au = function(d) {
        var c;
        q.length ? (c = b + 1, c >= q.length && (c = q.length - 1), c = q[c]) : c = null;
        c ? d.Ei(c.Vf) : d.ca(0)
    };
    p.prototype.Ut = function(d, c) {
        c = qa(c);
        var a = 0 > b ? null : q[b];
        a ? 0 <= c && c < a.sb.length ? d.Ei(a.sb[c]) : d.ca(0) : d.ca(0)
    };
    p.prototype.xo = function(d, c) {
        var a = k();
        a.name = c.toLowerCase();
        a.Vf = 0;
        E(a.sb);
        var e, g;
        e = 2;
        for (g = arguments.length; e < g; e++) a.sb.push(arguments[e]);
        this.b.trigger(qc.prototype.g.$i, this, a.name);
        b--;
        d.Ei(a.Vf)
    };
    r.D = new p
})();
var tc = !1;
try {
    ! function() {
        var h, k, g;
        ! function() {
            var d = {},
                p = {};
            h = function(g, h, b) {
                d[g] = {
                    bv: h,
                    Tu: b
                }
            };
            g = k = function(h) {
                function q(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = h.split("/").slice(0, -1), c = 0, e = a.length; e > c; c++) {
                        var d = a[c];
                        ".." === d ? b.pop() : "." !== d && b.push(d)
                    }
                    return b.join("/")
                }
                if (g.Jz = d, p[h]) return p[h];
                if (p[h] = {}, !d[h]) throw Error("Could not find module " + h);
                for (var b, f = d[h], c = f.bv, f = f.Tu, a = [], e = 0, n = c.length; n > e; e++) "exports" === c[e] ? a.push(b = {}) : a.push(k(q(c[e])));
                c = f.apply(this, a);
                return p[h] = b || c
            }
        }();
        h("promise/all", ["./utils", "exports"], function(d, g) {
            var h = d.isArray,
                k = d.isFunction;
            g.all = function(b) {
                if (!h(b)) throw new TypeError("You must pass an array to all.");
                return new this(function(d, c) {
                    function a(a) {
                        return function(b) {
                            g[a] = b;
                            0 === --h && d(g)
                        }
                    }
                    var e, g = [],
                        h = b.length;
                    0 === h && d([]);
                    for (var p = 0; p < b.length; p++)(e = b[p]) && k(e.then) ? e.then(a(p), c) : (g[p] = e, 0 === --h && d(g))
                })
            }
        });
        h("promise/asap", ["exports"], function(d) {
            function g() {
                return function() {
                    process.bA(b)
                }
            }

            function h() {
                var c = 0,
                    e = new a(b),
                    d = document.createTextNode("");
                return e.observe(d, {
                        characterData: !0
                    }),
                    function() {
                        d.data = c = ++c % 2
                    }
            }

            function k() {
                return function() {
                    e.setTimeout(b, 1)
                }
            }

            function b() {
                for (var a = 0; a < n.length; a++) {
                    var b = n[a];
                    (0, b[0])(b[1])
                }
                n = []
            }
            var f, c = "undefined" != typeof window ? window : {},
                a = c.MutationObserver || c.WebKitMutationObserver,
                e = "undefined" != typeof global ? global : void 0 === this ? window : this,
                n = [];
            f = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? g() : a ? h() : k();
            d.Nu = function(a, b) {
                1 === n.push([a, b]) && f()
            }
        });
        h("promise/config", ["exports"], function(d) {
            var g = {
                Tz: !1
            };
            d.zp = g;
            d.Wu = function(d, h) {
                return 2 !== arguments.length ? g[d] : void(g[d] = h)
            }
        });
        h("promise/polyfill", ["./promise", "./utils", "exports"], function(d, g, h) {
            var k = d.Promise,
                b = g.isFunction;
            h.Ex = function() {
                var d;
                d = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in d && "resolve" in d.Promise && "reject" in d.Promise && "all" in d.Promise && "race" in d.Promise && function() {
                    var c;
                    return new d.Promise(function(a) {
                        c = a
                    }), b(c)
                }() || (d.Promise = k)
            }
        });
        h("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(d, g, h, k, b, f, c, a) {
            function e(a) {
                if (!B(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof e)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.dj = [];
                n(a, this)
            }

            function n(a, b) {
                function c(a) {
                    l(b, a)
                }

                function e(a) {
                    R(b, a)
                }
                try {
                    a(c, e)
                } catch (d) {
                    e(d)
                }
            }

            function m(a, b, c, e) {
                var d, f, g, h, n = B(c);
                if (n) try {
                    d = c(e), g = !0
                } catch (m) {
                    h = !0, f = m
                } else d = e, g = !0;
                D(b, d) || (n && g ? l(b, d) : h ? R(b, f) : a === Y ? l(b, d) : a === U && R(b, d))
            }

            function y(a, b, c, e) {
                a = a.dj;
                var d = a.length;
                a[d] = b;
                a[d + Y] = c;
                a[d + U] = e
            }

            function u(a, b) {
                for (var c, e, d = a.dj, f = a.cj, g = 0; g < d.length; g += 3) c = d[g], e = d[g + b], m(b, c, e, f);
                a.dj = null
            }

            function D(a, b) {
                var c, e = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (G(b) && (e = b.then, B(e))) return e.call(b, function(e) {
                        return c ? !0 : (c = !0, void(b !== e ? l(a, e) : C(a, e)))
                    }, function(b) {
                        return c ? !0 : (c = !0, void R(a, b))
                    }), !0
                } catch (d) {
                    return c ? !0 : (R(a, d), !0)
                }
                return !1
            }

            function l(a, b) {
                a === b ? C(a, b) : D(a, b) || C(a, b)
            }

            function C(a, b) {
                a.Vd === J && (a.Vd = v, a.cj = b, F.async(x, a))
            }

            function R(a, b) {
                a.Vd === J && (a.Vd = v, a.cj = b, F.async(A, a))
            }

            function x(a) {
                u(a, a.Vd = Y)
            }

            function A(a) {
                u(a, a.Vd = U)
            }
            var F = d.zp,
                G = (d.Wu, g.rx),
                B = g.isFunction;
            d = (g.now, h.all);
            k = k.race;
            b = b.resolve;
            f = f.reject;
            F.async = c.Nu;
            var J = void 0,
                v = 0,
                Y = 1,
                U = 2;
            e.prototype = {
                constructor: e,
                Vd: void 0,
                cj: void 0,
                dj: void 0,
                then: function(a, b) {
                    var c = this,
                        e = new this.constructor(function() {});
                    if (this.Vd) {
                        var d = arguments;
                        F.async(function() {
                            m(c.Vd, e, d[c.Vd - 1], c.cj)
                        })
                    } else y(this, e, a, b);
                    return e
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            e.all = d;
            e.race = k;
            e.resolve = b;
            e.reject = f;
            a.Promise = e
        });
        h("promise/race", ["./utils", "exports"], function(d, g) {
            var h = d.isArray;
            g.race = function(d) {
                if (!h(d)) throw new TypeError("You must pass an array to race.");
                return new this(function(b, f) {
                    for (var c, a = 0; a < d.length; a++)(c = d[a]) && "function" == typeof c.then ? c.then(b, f) : b(c)
                })
            }
        });
        h("promise/reject", ["exports"], function(d) {
            d.reject = function(d) {
                return new this(function(g, h) {
                    h(d)
                })
            }
        });
        h("promise/resolve", ["exports"], function(d) {
            d.resolve = function(d) {
                return d && "object" == typeof d && d.constructor === this ? d : new this(function(g) {
                    g(d)
                })
            }
        });
        h("promise/utils", ["exports"], function(d) {
            function g(d) {
                return "function" == typeof d
            }
            var h = Date.now || function() {
                return (new Date).getTime()
            };
            d.rx = function(d) {
                return g(d) || "object" == typeof d && null !== d
            };
            d.isFunction = g;
            d.isArray = function(d) {
                return "[object Array]" === Object.prototype.toString.call(d)
            };
            d.now = h
        });
        k("promise/polyfill").Ex()
    }();
    var uc = function() {
        return function(h) {
            function k(d) {
                if (g[d]) return g[d].Dd;
                var p = g[d] = {
                    Dd: {},
                    id: d,
                    loaded: !1
                };
                return h[d].call(p.Dd, p, p.Dd, k), p.loaded = !0, p.Dd
            }
            var g = {};
            return k.gg = h, k.nh = g, k.Xl = "", k(0)
        }([function(h, k, g) {
            k.bj = !0;
            var d = function(d) {
                function h(a, b) {
                    a[b] = function() {
                        var c = arguments;
                        return a.ready().then(function() {
                            return a[b].apply(a, c)
                        })
                    }
                }

                function k() {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        if (b)
                            for (var c in b) b.hasOwnProperty(c) && (m(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                    }
                    return arguments[0]
                }

                function b(a) {
                    for (var b in c)
                        if (c.hasOwnProperty(b) && c[b] === a) return !0;
                    return !1
                }
                var f = {},
                    c = {
                        eh: "asyncStorage",
                        fh: "localStorageWrapper",
                        hh: "webSQLStorage"
                    },
                    a = "clear getItem iterate key keys length removeItem setItem".split(" "),
                    e = {
                        description: "",
                        lg: [c.eh, c.hh, c.fh].slice(),
                        name: "localforage",
                        size: 4980736,
                        Ba: "keyvaluepairs",
                        version: 1
                    },
                    n = function(a) {
                        var b = {},
                            d;
                        try {
                            var e = e || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.Kp || a.msIndexedDB;
                            d = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : e && "function" == typeof e.open && "undefined" != typeof a.IDBKeyRange
                        } catch (f) {
                            d = !1
                        }
                        b[c.eh] = !!d;
                        var g;
                        try {
                            g = a.openDatabase
                        } catch (h) {
                            g = !1
                        }
                        b[c.hh] = !!g;
                        var n;
                        try {
                            n = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                        } catch (m) {
                            n = !1
                        }
                        return b[c.fh] = !!n, b
                    }(d),
                    m = Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    };
                return new(function() {
                    function d(a) {
                        if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                        this.eh = c.eh;
                        this.fh = c.fh;
                        this.hh = c.hh;
                        this.El = k({}, e);
                        this.of = k({}, this.El, a);
                        this.Yo = this.wd = null;
                        this.Ge = !1;
                        this.ya = null;
                        this.Zo();
                        this.Wr(this.of.lg)
                    }
                    return d.prototype.zp = function(a) {
                        if ("object" == typeof a) {
                            if (this.Ge) return Error("Can't call config() after localforage has been used.");
                            for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.of[b] = a[b];
                            return "driver" in a && a.lg && this.Wr(this.of.lg), !0
                        }
                        return "string" == typeof a ? this.of[a] : this.of
                    }, d.prototype.lg = function() {
                        return this.ih || null
                    }, d.prototype.Zp = function(a, c, d) {
                        var e = this,
                            h = function() {
                                if (b(a)) switch (a) {
                                    case e.eh:
                                        return new Promise(function(a) {
                                            a(g(1))
                                        });
                                    case e.fh:
                                        return new Promise(function(a) {
                                            a(g(2))
                                        });
                                    case e.hh:
                                        return new Promise(function(a) {
                                            a(g(4))
                                        })
                                } else if (f[a]) return Promise.resolve(f[a]);
                                return Promise.reject(Error("Driver not found."))
                            }();
                        return h.then(c, d), h
                    }, d.prototype.ready = function(a) {
                        var b = this,
                            c = b.wd.then(function() {
                                return null === b.Ge && (b.Ge = b.Yo()), b.Ge
                            });
                        return c.then(a, a), c
                    }, d.prototype.Wr = function(a, b, c) {
                        function d() {
                            f.of.lg = f.lg()
                        }

                        function e(a) {
                            return function() {
                                function b() {
                                    for (; c < a.length;) {
                                        var e = a[c];
                                        return c++, f.ya = null, f.Ge = null, f.Zp(e).then(function(a) {
                                            return f.Cu(a), d(), f.Ge = f.Gl(f.of), f.Ge
                                        })["catch"](b)
                                    }
                                    d();
                                    return f.wd = Promise.reject(Error("No available storage method found.")), f.wd
                                }
                                var c = 0;
                                return b()
                            }
                        }
                        var f = this;
                        m(a) || (a = [a]);
                        var g = this.Du(a);
                        return this.wd = (null !== this.wd ? this.wd["catch"](function() {
                            return Promise.resolve()
                        }) : Promise.resolve()).then(function() {
                            var a = g[0];
                            return f.ya = null, f.Ge = null, f.Zp(a).then(function(a) {
                                f.ih = a.ih;
                                d();
                                f.Zo();
                                f.Yo = e(g)
                            })
                        })["catch"](function() {
                            d();
                            return f.wd = Promise.reject(Error("No available storage method found.")), f.wd
                        }), this.wd.then(b, c), this.wd
                    }, d.prototype.supports = function(a) {
                        return !!n[a]
                    }, d.prototype.Cu = function(a) {
                        k(this, a)
                    }, d.prototype.Du = function(a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) {
                            var e = a[c];
                            this.supports(e) && b.push(e)
                        }
                        return b
                    }, d.prototype.Zo = function() {
                        for (var b = 0; b < a.length; b++) h(this, a[b])
                    }, d.prototype.Ul = function(a) {
                        return new d(a)
                    }, d
                }())
            }("undefined" != typeof window ? window : self);
            k["default"] = d;
            h.Dd = k["default"]
        }, function(h, k) {
            k.bj = !0;
            k["default"] = function(g) {
                function d(a, b) {
                    a = a || [];
                    b = b || {};
                    try {
                        return new Blob(a, b)
                    } catch (c) {
                        if ("TypeError" !== c.name) throw c;
                        for (var d = new(g.BlobBuilder || g.gg || g.Xl || g.WebKitBlobBuilder), e = 0; e < a.length; e += 1) d.append(a[e]);
                        return d.getBlob(b.type)
                    }
                }

                function h(a) {
                    return new Promise(function(b, c) {
                        var d = new XMLHttpRequest;
                        d.open("GET", a);
                        d.withCredentials = !0;
                        d.responseType = "arraybuffer";
                        d.onreadystatechange = function() {
                            return 4 === d.readyState ? 200 === d.status ? b({
                                response: d.response,
                                type: d.getResponseHeader("Content-Type")
                            }) : void c({
                                status: d.status,
                                response: d.response
                            }) : void 0
                        };
                        d.send()
                    })
                }

                function k(a) {
                    return (new Promise(function(b, c) {
                        var e = d([""], {
                                type: "image/png"
                            }),
                            f = a.transaction([J], "readwrite");
                        f.objectStore(J).put(e, "key");
                        f.oncomplete = function() {
                            var d = a.transaction([J], "readwrite").objectStore(J).get("key");
                            d.onerror = c;
                            d.onsuccess = function(a) {
                                var c = URL.createObjectURL(a.target.result);
                                h(c).then(function(a) {
                                    b(!(!a || "image/png" !== a.type))
                                }, function() {
                                    b(!1)
                                }).then(function() {
                                    URL.revokeObjectURL(c)
                                })
                            }
                        };
                        f.onerror = f.onabort = c
                    }))["catch"](function() {
                        return !1
                    })
                }

                function q(a) {
                    return "boolean" == typeof G ? Promise.resolve(G) : k(a).then(function(a) {
                        return G = a
                    })
                }

                function b(a) {
                    return new Promise(function(b, c) {
                        var d = new FileReader;
                        d.onerror = c;
                        d.onloadend = function(c) {
                            b({
                                Xo: !0,
                                data: btoa(c.target.result || ""),
                                type: a.type
                            })
                        };
                        d.readAsBinaryString(a)
                    })
                }

                function f(a) {
                    for (var b = atob(a.data), c = b.length, e = new ArrayBuffer(c), f = new Uint8Array(e), g = 0; c > g; g++) f[g] = b.charCodeAt(g);
                    return d([e], {
                        type: a.type
                    })
                }

                function c(a) {
                    var b = this,
                        c = b.Fl().then(function() {
                            var a = B[b.ya.name];
                            return a && a.kg ? a.kg : void 0
                        });
                    return c.then(a, a), c
                }

                function a(a) {
                    a = B[a.name];
                    var b = {};
                    b.promise = new Promise(function(a) {
                        b.resolve = a
                    });
                    a.Ep.push(b);
                    a.kg ? a.kg = a.kg.then(function() {
                        return b.promise
                    }) : a.kg = b.promise
                }

                function e(a) {
                    function b() {
                        return Promise.resolve()
                    }
                    var d = this,
                        e = {
                            db: null
                        };
                    if (a)
                        for (var f in a) e[f] = a[f];
                    B || (B = {});
                    var h = B[e.name];
                    h || (h = {
                        Kj: [],
                        db: null,
                        kg: null,
                        Ep: []
                    }, B[e.name] = h);
                    h.Kj.push(d);
                    d.Fl || (d.Fl = d.ready, d.ready = c);
                    a = [];
                    for (f = 0; f < h.Kj.length; f++) {
                        var l = h.Kj[f];
                        l !== d && a.push(l.Fl()["catch"](b))
                    }
                    var m = h.Kj.slice(0);
                    return Promise.all(a).then(function() {
                        return e.db = h.db, n(e, !1)
                    }).then(function(a) {
                        e.db = a;
                        var b;
                        b = d.El.version;
                        if (e.db) {
                            var c = !e.db.objectStoreNames.contains(e.Ba),
                                f = e.version > e.db.version;
                            (e.version < e.db.version && (e.version !== b && g.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), f || c) ? (c && (b = e.db.version + 1, b > e.version && (e.version = b)), b = !0) : b = !1
                        } else b = !0;
                        return b ? n(e, !0) : a
                    }).then(function(a) {
                        e.db = h.db = a;
                        d.ya = e;
                        for (a = 0; a < m.length; a++) {
                            var b = m[a];
                            b !== d && (b.ya.db = e.db, b.ya.version = e.version)
                        }
                    })
                }

                function n(b, c) {
                    return new Promise(function(d, e) {
                        if (b.db) {
                            if (!c) return d(b.db);
                            a(b);
                            b.db.close()
                        }
                        var f = [b.name];
                        c && f.push(b.version);
                        var h = F.open.apply(F, f);
                        c && (h.onupgradeneeded = function(a) {
                            var c = h.result;
                            try {
                                c.createObjectStore(b.Ba), 1 >= a.oldVersion && c.createObjectStore(J)
                            } catch (d) {
                                if ("ConstraintError" !== d.name) throw d;
                                g.console.warn('The database "' + b.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + b.Ba + '" already exists.')
                            }
                        });
                        h.onerror = function() {
                            e(h.error)
                        };
                        h.onsuccess = function() {
                            d(h.result);
                            var a = B[b.name].Ep.pop();
                            a && a.resolve()
                        }
                    })
                }

                function m(a, b) {
                    var c = this;
                    "string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ya,
                                g = e.db.transaction(e.Ba, "readonly").objectStore(e.Ba).get(a);
                            g.onsuccess = function() {
                                var a = g.result;
                                void 0 === a && (a = null);
                                a && a.Xo && (a = f(a));
                                b(a)
                            };
                            g.onerror = function() {
                                d(g.error)
                            }
                        })["catch"](d)
                    });
                    return A(d, b), d
                }

                function y(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.ya,
                                    g = e.db.transaction(e.Ba, "readonly").objectStore(e.Ba).openCursor(),
                                    h = 1;
                                g.onsuccess = function() {
                                    var c = g.result;
                                    if (c) {
                                        var d = c.value;
                                        d && d.Xo && (d = f(d));
                                        d = a(d, c.key, h++);
                                        void 0 !== d ? b(d) : c["continue"]()
                                    } else b()
                                };
                                g.onerror = function() {
                                    d(g.error)
                                }
                            })["catch"](d)
                        });
                    return A(d, b), d
                }

                function u(a, c, d) {
                    var e = this;
                    "string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var f = new Promise(function(d, f) {
                        var g;
                        e.ready().then(function() {
                            return g = e.ya, c instanceof Blob ? q(g.db).then(function(a) {
                                return a ? c : b(c)
                            }) : c
                        }).then(function(b) {
                            var c = g.db.transaction(g.Ba, "readwrite"),
                                e = c.objectStore(g.Ba);
                            null === b && (b = void 0);
                            c.oncomplete = function() {
                                void 0 === b && (b = null);
                                d(b)
                            };
                            c.onabort = c.onerror = function() {
                                f(h.error ? h.error : h.transaction.error)
                            };
                            var h = e.put(b, a)
                        })["catch"](f)
                    });
                    return A(f, d), f
                }

                function D(a, b) {
                    var c = this;
                    "string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ya,
                                f = e.db.transaction(e.Ba, "readwrite"),
                                g = f.objectStore(e.Ba)["delete"](a);
                            f.oncomplete = function() {
                                b()
                            };
                            f.onerror = function() {
                                d(g.error)
                            };
                            f.onabort = function() {
                                d(g.error ? g.error : g.transaction.error)
                            }
                        })["catch"](d)
                    });
                    return A(d, b), d
                }

                function l(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ya,
                                    e = d.db.transaction(d.Ba, "readwrite"),
                                    f = e.objectStore(d.Ba).clear();
                                e.oncomplete = function() {
                                    a()
                                };
                                e.onabort = e.onerror = function() {
                                    c(f.error ? f.error : f.transaction.error)
                                }
                            })["catch"](c)
                        });
                    return A(c, a), c
                }

                function C(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ya,
                                    e = d.db.transaction(d.Ba, "readonly").objectStore(d.Ba).count();
                                e.onsuccess = function() {
                                    a(e.result)
                                };
                                e.onerror = function() {
                                    c(e.error)
                                }
                            })["catch"](c)
                        });
                    return A(c, a), c
                }

                function R(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            return 0 > a ? void b(null) : void c.ready().then(function() {
                                var e = c.ya,
                                    f = !1,
                                    g = e.db.transaction(e.Ba, "readonly").objectStore(e.Ba).openCursor();
                                g.onsuccess = function() {
                                    var c = g.result;
                                    return c ? void(0 === a ? b(c.key) : f ? b(c.key) : (f = !0, c.advance(a))) : void b(null)
                                };
                                g.onerror = function() {
                                    d(g.error)
                                }
                            })["catch"](d)
                        });
                    return A(d, b), d
                }

                function x(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ya,
                                    e = d.db.transaction(d.Ba, "readonly").objectStore(d.Ba).openCursor(),
                                    f = [];
                                e.onsuccess = function() {
                                    var b = e.result;
                                    return b ? (f.push(b.key), void b["continue"]()) : void a(f)
                                };
                                e.onerror = function() {
                                    c(e.error)
                                }
                            })["catch"](c)
                        });
                    return A(c, a), c
                }

                function A(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var F = F || g.indexedDB || g.webkitIndexedDB || g.mozIndexedDB || g.Kp || g.msIndexedDB;
                if (F) {
                    var G, B, J = "local-forage-detect-blob-support";
                    return {
                        ih: "asyncStorage",
                        Gl: e,
                        yq: y,
                        getItem: m,
                        setItem: u,
                        removeItem: D,
                        clear: l,
                        length: C,
                        key: R,
                        keys: x
                    }
                }
            }("undefined" != typeof window ? window : self);
            h.Dd = k["default"]
        }, function(h, k, g) {
            k.bj = !0;
            k["default"] = function(d) {
                function h(b, d) {
                    d && b.then(function(b) {
                        d(null, b)
                    }, function(b) {
                        d(b)
                    })
                }
                var k = null;
                try {
                    if (!(d.localStorage && "setItem" in d.localStorage)) return;
                    k = d.localStorage
                } catch (q) {
                    return
                }
                return {
                    ih: "localStorageWrapper",
                    Gl: function(b) {
                        var d = {};
                        if (b)
                            for (var c in b) d[c] = b[c];
                        return d.Id = d.name + "/", d.Ba !== this.El.Ba && (d.Id += d.Ba + "/"), this.ya = d, (new Promise(function(a) {
                            a(g(3))
                        })).then(function(a) {
                            return d.Wf = a, Promise.resolve()
                        })
                    },
                    yq: function(b, d) {
                        var c = this,
                            a = c.ready().then(function() {
                                for (var a = c.ya, d = a.Id, f = d.length, g = k.length, h = 1, p = 0; g > p; p++) {
                                    var l = k.key(p);
                                    if (0 === l.indexOf(d)) {
                                        var q = k.getItem(l);
                                        if (q && (q = a.Wf.Aj(q)), q = b(q, l.substring(f), h++), void 0 !== q) return q
                                    }
                                }
                            });
                        return h(a, d), a
                    },
                    getItem: function(b, f) {
                        var c = this;
                        "string" != typeof b && (d.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = c.ready().then(function() {
                            var a = c.ya,
                                d = k.getItem(a.Id + b);
                            return d && (d = a.Wf.Aj(d)), d
                        });
                        return h(a, f), a
                    },
                    setItem: function(b, f, c) {
                        var a = this;
                        "string" != typeof b && (d.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var e = a.ready().then(function() {
                            void 0 === f && (f = null);
                            var c = f;
                            return new Promise(function(d, e) {
                                var g = a.ya;
                                g.Wf.serialize(f, function(a, f) {
                                    if (f) e(f);
                                    else try {
                                        k.setItem(g.Id +
                                            b, a), d(c)
                                    } catch (h) {
                                        "QuotaExceededError" !== h.name && "NS_ERROR_DOM_QUOTA_REACHED" !== h.name || e(h), e(h)
                                    }
                                })
                            })
                        });
                        return h(e, c), e
                    },
                    removeItem: function(b, f) {
                        var c = this;
                        "string" != typeof b && (d.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = c.ready().then(function() {
                            k.removeItem(c.ya.Id + b)
                        });
                        return h(a, f), a
                    },
                    clear: function(b) {
                        var d = this,
                            c = d.ready().then(function() {
                                for (var a = d.ya.Id, b = k.length - 1; 0 <= b; b--) {
                                    var c = k.key(b);
                                    0 === c.indexOf(a) && k.removeItem(c)
                                }
                            });
                        return h(c, b), c
                    },
                    length: function(b) {
                        var d = this.keys().then(function(b) {
                            return b.length
                        });
                        return h(d, b), d
                    },
                    key: function(b, d) {
                        var c = this,
                            a = c.ready().then(function() {
                                var a, d = c.ya;
                                try {
                                    a = k.key(b)
                                } catch (f) {
                                    a = null
                                }
                                return a && (a = a.substring(d.Id.length)), a
                            });
                        return h(a, d), a
                    },
                    keys: function(b) {
                        var d = this,
                            c = d.ready().then(function() {
                                for (var a = d.ya, b = k.length, c = [], g = 0; b > g; g++) 0 === k.key(g).indexOf(a.Id) && c.push(k.key(g).substring(a.Id.length));
                                return c
                            });
                        return h(c, b), c
                    }
                }
            }("undefined" != typeof window ? window : self);
            h.Dd = k["default"]
        }, function(h, k) {
            k.bj = !0;
            k["default"] = function(g) {
                function d(b) {
                    var d, c, a, e, g;
                    d = .75 * b.length;
                    var h = b.length,
                        p = 0;
                    "=" === b[b.length - 1] && (d--, "=" === b[b.length - 2] && d--);
                    var u = new ArrayBuffer(d),
                        q = new Uint8Array(u);
                    for (d = 0; h > d; d += 4) c = k.indexOf(b[d]), a = k.indexOf(b[d + 1]), e = k.indexOf(b[d + 2]), g = k.indexOf(b[d + 3]), q[p++] = c << 2 | a >> 4, q[p++] = (15 & a) << 4 | e >> 2, q[p++] = (3 & e) << 6 | 63 & g;
                    return u
                }

                function h(b) {
                    var d = new Uint8Array(b),
                        c = "";
                    for (b = 0; b < d.length; b += 3) c += k[d[b] >> 2], c += k[(3 & d[b]) << 4 | d[b + 1] >> 4], c += k[(15 & d[b + 1]) << 2 | d[b + 2] >> 6], c += k[63 & d[b + 2]];
                    return 2 === d.length % 3 ? c = c.substring(0, c.length - 1) + "=" : 1 === d.length % 3 && (c = c.substring(0, c.length - 2) + "=="), c
                }
                var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    q = /^~~local_forage_type~([^~]+)~/;
                return {
                    serialize: function(b, d) {
                        var c = "";
                        if (b && (c = b.toString()), b && ("[object ArrayBuffer]" === b.toString() || b.buffer && "[object ArrayBuffer]" === b.buffer.toString())) {
                            var a, e = "__lfsc__:";
                            b instanceof ArrayBuffer ? (a = b, e += "arbf") : (a = b.buffer, "[object Int8Array]" === c ? e += "si08" : "[object Uint8Array]" === c ? e += "ui08" : "[object Uint8ClampedArray]" === c ? e += "uic8" : "[object Int16Array]" === c ? e += "si16" : "[object Uint16Array]" === c ? e += "ur16" : "[object Int32Array]" === c ? e += "si32" : "[object Uint32Array]" === c ? e += "ui32" : "[object Float32Array]" === c ? e += "fl32" : "[object Float64Array]" === c ? e += "fl64" : d(Error("Failed to get type for BinaryArray")));
                            d(e + h(a))
                        } else if ("[object Blob]" === c) c = new FileReader, c.onload = function() {
                            var a = "~~local_forage_type~" + b.type + "~" + h(this.result);
                            d("__lfsc__:blob" + a)
                        }, c.readAsArrayBuffer(b);
                        else try {
                            d(JSON.stringify(b))
                        } catch (g) {
                            console.error("Couldn't convert value into a JSON string: ", b), d(null, g)
                        }
                    },
                    Aj: function(b) {
                        if ("__lfsc__:" !== b.substring(0, 9)) return JSON.parse(b);
                        var f, c = b.substring(13);
                        b = b.substring(9, 13);
                        if ("blob" === b && q.test(c)) {
                            var a = c.match(q);
                            f = a[1];
                            c = c.substring(a[0].length)
                        }
                        c = d(c);
                        switch (b) {
                            case "arbf":
                                return c;
                            case "blob":
                                var e;
                                c = [c];
                                f = {
                                    type: f
                                };
                                c = c || [];
                                f = f || {};
                                try {
                                    e = new Blob(c, f)
                                } catch (h) {
                                    if ("TypeError" !== h.name) throw h;
                                    e = new(g.BlobBuilder || g.gg || g.Xl || g.WebKitBlobBuilder);
                                    for (b = 0; b < c.length; b += 1) e.append(c[b]);
                                    e = e.getBlob(f.type)
                                }
                                return e;
                            case "si08":
                                return new Int8Array(c);
                            case "ui08":
                                return new Uint8Array(c);
                            case "uic8":
                                return new Uint8ClampedArray(c);
                            case "si16":
                                return new Int16Array(c);
                            case "ur16":
                                return new Uint16Array(c);
                            case "si32":
                                return new Int32Array(c);
                            case "ui32":
                                return new Uint32Array(c);
                            case "fl32":
                                return new Float32Array(c);
                            case "fl64":
                                return new Float64Array(c);
                            default:
                                throw Error("Unkown type: " + b);
                        }
                    },
                    iA: d,
                    Mz: h
                }
            }("undefined" != typeof window ? window : self);
            h.Dd = k["default"]
        }, function(h, k, g) {
            k.bj = !0;
            k["default"] = function(d) {
                function h(a) {
                    var b = this,
                        c = {
                            db: null
                        };
                    if (a)
                        for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                    var e = new Promise(function(a, d) {
                        try {
                            c.db = y(c.name, String(c.version), c.description, c.size)
                        } catch (e) {
                            return d(e)
                        }
                        c.db.transaction(function(e) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS " + c.Ba + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                b.ya = c;
                                a()
                            }, function(a, b) {
                                d(b)
                            })
                        })
                    });
                    return (new Promise(function(a) {
                        a(g(3))
                    })).then(function(a) {
                        return c.Wf = a, e
                    })
                }

                function k(a, b) {
                    var c = this;
                    "string" != typeof a && (d.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ya;
                            e.db.transaction(function(c) {
                                c.executeSql("SELECT * FROM " + e.Ba + " WHERE key = ? LIMIT 1", [a], function(a, c) {
                                    var d = c.rows.length ? c.rows.item(0).value : null;
                                    d && (d = e.Wf.Aj(d));
                                    b(d)
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return m(e, b), e
                }

                function q(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.ya;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT * FROM " + e.Ba, [], function(c, d) {
                                        for (var f = d.rows, g = f.length, h = 0; g > h; h++) {
                                            var l = f.item(h),
                                                n = l.value;
                                            if (n && (n = e.Wf.Aj(n)), n = a(n, l.key, h + 1), void 0 !== n) return void b(n)
                                        }
                                        b()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return m(d, b), d
                }

                function b(a, b, c) {
                    var e = this;
                    "string" != typeof a && (d.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var f = new Promise(function(c, d) {
                        e.ready().then(function() {
                            void 0 === b && (b = null);
                            var f = b,
                                g = e.ya;
                            g.Wf.serialize(b, function(b, e) {
                                e ? d(e) : g.db.transaction(function(e) {
                                    e.executeSql("INSERT OR REPLACE INTO " + g.Ba +
                                        " (key, value) VALUES (?, ?)", [a, b],
                                        function() {
                                            c(f)
                                        },
                                        function(a, b) {
                                            d(b)
                                        })
                                }, function(a) {
                                    a.code === a.QUOTA_ERR && d(a)
                                })
                            })
                        })["catch"](d)
                    });
                    return m(f, c), f
                }

                function f(a, b) {
                    var c = this;
                    "string" != typeof a && (d.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ya;
                            e.db.transaction(function(c) {
                                c.executeSql("DELETE FROM " + e.Ba + " WHERE key = ?", [a], function() {
                                    b()
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return m(e, b), e
                }

                function c(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ya;
                                d.db.transaction(function(b) {
                                    b.executeSql("DELETE FROM " + d.Ba, [], function() {
                                        a()
                                    }, function(a, b) {
                                        c(b)
                                    })
                                })
                            })["catch"](c)
                        });
                    return m(c, a), c
                }

                function a(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ya;
                                d.db.transaction(function(b) {
                                    b.executeSql("SELECT COUNT(key) as c FROM " + d.Ba, [], function(b, c) {
                                        var d = c.rows.item(0).nh;
                                        a(d)
                                    }, function(a, b) {
                                        c(b)
                                    })
                                })
                            })["catch"](c)
                        });
                    return m(c, a), c
                }

                function e(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.ya;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT key FROM " + e.Ba + " WHERE id = ? LIMIT 1", [a + 1], function(a, c) {
                                        var d = c.rows.length ? c.rows.item(0).key : null;
                                        b(d)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return m(d, b), d
                }

                function n(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ya;
                                d.db.transaction(function(b) {
                                    b.executeSql("SELECT key FROM " + d.Ba, [], function(b, c) {
                                        for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);
                                        a(d)
                                    }, function(a, b) {
                                        c(b)
                                    })
                                })
                            })["catch"](c)
                        });
                    return m(c, a), c
                }

                function m(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var y = d.openDatabase;
                if (y) return {
                    ih: "webSQLStorage",
                    Gl: h,
                    yq: q,
                    getItem: k,
                    setItem: b,
                    removeItem: f,
                    clear: c,
                    length: a,
                    key: e,
                    keys: n
                }
            }("undefined" != typeof window ? window : self);
            h.Dd = k["default"]
        }])
    };
    "object" == typeof exports && "object" == typeof module ? module.Dd = uc() : "function" == typeof define && define.Lz ? define([], uc) : "object" == typeof exports ? exports.localforage = uc() : this.localforage = uc()
} catch (vc) {
    tc = !0
}

function wc(h) {
    this.b = h
}
(function() {
    function h(b) {
        b.b.trigger(wc.prototype.g.Zi, b)
    }

    function k() {}

    function g() {}

    function d() {}
    var p = "",
        r = "",
        q = "";
    "undefined" !== typeof window.is_scirra_arcade && (q = "sa" + window.scirra_arcade_id + "_");
    var b = wc.prototype;
    b.Da = function(b) {
        this.wa = b;
        this.b = b.b
    };
    b.Da.prototype.S = function() {};
    b.qa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var f = b.qa.prototype;
    f.S = function() {
        this.zn = 0
    };
    f.pe = function() {};
    f.Rb = function() {
        return {}
    };
    f.jc = function() {};
    k.prototype.Gt = function(b) {
        return p === b
    };
    k.prototype.xt = function() {
        return !0
    };
    k.prototype.Ft = function(b) {
        return p === b
    };
    k.prototype.wt = function() {
        return !0
    };
    k.prototype.Zi = function() {
        return !0
    };
    k.prototype.Ho = function(b) {
        return p === b
    };
    k.prototype.Et = function(b) {
        return p === b
    };
    k.prototype.qt = function() {
        return !0
    };
    b.g = new k;
    g.prototype.fu = function(b, a) {
        if (tc) h(this);
        else {
            var d = q + b;
            this.zn++;
            var f = this;
            localforage.setItem(d, a, function(a, d) {
                f.zn--;
                a ? f.b.trigger(wc.prototype.g.Zi, f) : (p = b, r = d, f.b.trigger(wc.prototype.g.xt, f), f.b.trigger(wc.prototype.g.Gt, f), r = p = "");
                0 === f.zn && f.b.trigger(wc.prototype.g.qt, f)
            })
        }
    };
    g.prototype.Ms = function(b) {
        if (tc) h(this);
        else {
            var a = this;
            localforage.getItem(q + b, function(d, f) {
                d ? a.b.trigger(wc.prototype.g.Zi, a) : (p = b, null === f ? (r = "", a.b.trigger(wc.prototype.g.Et, a)) : (r = f, a.b.trigger(wc.prototype.g.Ho, a)), r = p = "")
            })
        }
    };
    g.prototype.$t = function(b) {
        if (tc) h(this);
        else {
            var a = this;
            localforage.removeItem(q + b, function(d) {
                d ? a.b.trigger(wc.prototype.g.Zi, a) : (p = b, r = "", a.b.trigger(wc.prototype.g.wt, a), a.b.trigger(wc.prototype.g.Ft, a), p = "")
            })
        }
    };
    b.p = new g;
    d.prototype.lt = function(b) {
        b.Ei(r)
    };
    b.D = new d
})();

function T(h) {
    this.b = h
}
(function() {
    function h() {
        if (0 === this.wj.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Yf ? b.drawImage(this.W, this.Qf, this.Rf, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.W, 0, 0, this.width, this.height);
            this.wj = a.toDataURL("image/png")
        }
        return this.wj
    }

    function k() {}

    function g() {}

    function d() {}
    var p = T.prototype;
    p.Da = function(a) {
        this.wa = a;
        this.b = a.b
    };
    var r = p.Da.prototype;
    r.S = function() {
        if (!this.O) {
            var a, b, c, d, f, g, k, l, p;
            this.bd = [];
            this.Hh = !1;
            a = 0;
            for (b = this.pc.length; a < b; a++) {
                f = this.pc[a];
                k = {};
                k.name = f[0];
                k.speed = f[1];
                k.loop = f[2];
                k.Mn = f[3];
                k.Nn = f[4];
                k.se = f[5];
                k.ga = f[6];
                k.frames = [];
                c = 0;
                for (d = f[7].length; c < d; c++) g = f[7][c], l = {}, l.ao = g[0], l.bo = g[1], l.Qf = g[2], l.Rf = g[3], l.width = g[4], l.height = g[5], l.duration = g[6], l.gc = g[7], l.hc = g[8], l.Em = g[9], l.Jk = g[10], l.An = g[11], l.Yf = 0 !== l.width, l.wj = "", l.Qz = h, p = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, l.Vn = p, l.na = null, (p = this.b.iw(g[0])) ? l.W = p : (l.W = new Image, l.W.Yu = g[0], l.W.Ap = g[1], l.W.Su = null, this.b.Gs(l.W, g[0])), k.frames.push(l), this.bd.push(l);
                this.pc[a] = k
            }
        }
    };
    r.mo = function() {
        var a, b, c;
        a = 0;
        for (b = this.d.length; a < b; a++) c = this.d[a], c.ig = c.Sa.na
    };
    r.yk = function() {
        if (!this.O) {
            var a, b, c;
            a = 0;
            for (b = this.bd.length; a < b; ++a) c = this.bd[a], c.W.Su = null, c.na = null;
            this.Hh = !1;
            this.mo()
        }
    };
    r.un = function() {
        if (!this.O && this.d.length) {
            var a, b, c;
            a = 0;
            for (b = this.bd.length; a < b; ++a) c = this.bd[a], c.na = this.b.n.Dg(c.W, !1, this.b.I, c.An);
            this.mo()
        }
    };
    r.Ym = function() {
        if (!this.O && !this.Hh && this.b.n) {
            var a, b, c;
            a = 0;
            for (b = this.bd.length; a < b; ++a) c = this.bd[a], c.na = this.b.n.Dg(c.W, !1, this.b.I, c.An);
            this.Hh = !0
        }
    };
    r.lo = function() {
        if (!this.O && !this.d.length && this.Hh) {
            var a, b, c;
            a = 0;
            for (b = this.bd.length; a < b; ++a) c = this.bd[a], this.b.n.deleteTexture(c.na), c.na = null;
            this.Hh = !1
        }
    };
    var q = [];
    r.En = function(a) {
        var b, c, d;
        E(q);
        b = 0;
        for (c = this.bd.length; b < c; ++b) d = this.bd[b].W, -1 === q.indexOf(d) && (a.drawImage(d, 0, 0), q.push(d))
    };
    p.qa = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.pc[0].frames[0].Jk;
        this.Nc ? this.za.Gi(a) : this.za = new db(a)
    };
    var b = p.qa.prototype;
    b.S = function() {
        this.visible = 0 === this.A[0];
        this.Yj = this.Sh = !1;
        this.sf = 0 !== this.A[3];
        1 === this.type.pc.length && 1 === this.type.pc[0].frames.length || 0 === this.type.pc[0].speed || (this.b.Xg(this), this.Sh = !0);
        this.Ka = this.Vp(this.A[1]) || this.type.pc[0];
        this.C = this.A[2];
        0 > this.C && (this.C = 0);
        this.C >= this.Ka.frames.length && (this.C = this.Ka.frames.length - 1);
        var a = this.Ka.frames[this.C];
        this.za.Gi(a.Jk);
        this.gc = a.gc;
        this.hc = a.hc;
        this.uh = this.Ka.speed;
        this.Re = this.Ka.Nn;
        this.Nc ? this.yd.reset() : this.yd = new bb;
        this.he = this.yd.da;
        this.qf = !0;
        this.Wd = 0;
        this.pf = !0;
        this.qj = this.kp = "";
        this.wp = 0;
        this.pj = -1;
        this.type.Ym();
        var b, c, d, f, g, h, l, a = 0;
        for (b = this.type.pc.length; a < b; a++)
            for (f = this.type.pc[a], c = 0, d = f.frames.length; c < d; c++) g = f.frames[c], 0 === g.width && (g.width = g.W.width, g.height = g.W.height), g.Yf && (l = g.W, h = g.Vn, h.left = g.Qf / l.width, h.top = g.Rf / l.height, h.right = (g.Qf + g.width) / l.width, h.bottom = (g.Rf + g.height) / l.height, 0 === g.Qf && 0 === g.Rf && g.width === l.width && g.height === l.height && (g.Yf = !1));
        this.Sa = this.Ka.frames[this.C];
        this.ig = this.Sa.na
    };
    b.Rb = function() {
        var a = {
            a: this.Ka.ga,
            f: this.C,
            cas: this.uh,
            fs: this.he,
            ar: this.Wd,
            at: this.yd.da,
            rt: this.Re
        };
        this.qf || (a.ap = this.qf);
        this.pf || (a.af = this.pf);
        return a
    };
    b.jc = function(a) {
        var b = this.ow(a.a);
        b && (this.Ka = b);
        this.C = a.f;
        0 > this.C && (this.C = 0);
        this.C >= this.Ka.frames.length && (this.C = this.Ka.frames.length - 1);
        this.uh = a.cas;
        this.he = a.fs;
        this.Wd = a.ar;
        this.yd.reset();
        this.yd.da = a.at;
        this.qf = a.hasOwnProperty("ap") ? a.ap : !0;
        this.pf = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Re = a.rt : this.Re = this.Ka.Nn;
        this.Sa = this.Ka.frames[this.C];
        this.ig = this.Sa.na;
        this.za.Gi(this.Sa.Jk);
        this.gc = this.Sa.gc;
        this.hc = this.Sa.hc
    };
    b.Jl = function(a) {
        this.C = a ? 0 : this.Ka.frames.length - 1;
        this.qf = !1;
        this.kp = this.Ka.name;
        this.Yj = !0;
        this.b.trigger(T.prototype.g.ut, this);
        this.b.trigger(T.prototype.g.tt, this);
        this.Yj = !1;
        this.Wd = 0
    };
    b.gg = function() {
        return this.yd.da
    };
    b.ib = function() {
        this.yd.add(this.b.om(this));
        this.qj.length && this.Fp();
        0 <= this.pj && this.Gp();
        var a = this.yd.da,
            b = this.Ka,
            c = b.frames[this.C],
            d = c.duration / this.uh;
        this.qf && a >= this.he + d && (this.pf ? this.C++ : this.C--, this.he += d, this.C >= b.frames.length && (b.se ? (this.pf = !1, this.C = b.frames.length - 2) : b.loop ? this.C = this.Re : (this.Wd++, this.Wd >= b.Mn ? this.Jl(!1) : this.C = this.Re)), 0 > this.C && (b.se ? (this.C = 1, this.pf = !0, b.loop || (this.Wd++, this.Wd >= b.Mn && this.Jl(!0))) : b.loop ? this.C = this.Re : (this.Wd++, this.Wd >= b.Mn ? this.Jl(!0) : this.C = this.Re)), 0 > this.C ? this.C = 0 : this.C >= b.frames.length && (this.C = b.frames.length - 1), a > this.he + b.frames[this.C].duration / this.uh && (this.he = a), a = b.frames[this.C], this.dg(c, a), this.b.U = !0)
    };
    b.Vp = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.pc.length; b < c; b++)
            if (d = this.type.pc[b], nb(d.name, a)) return d;
        return null
    };
    b.ow = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.pc.length; b < c; b++)
            if (d = this.type.pc[b], d.ga === a) return d;
        return null
    };
    b.Fp = function() {
        var a = this.Ka.frames[this.C],
            b = this.Vp(this.qj);
        this.qj = "";
        !b || nb(b.name, this.Ka.name) && this.qf || (this.Ka = b, this.uh = b.speed, this.Re = b.Nn, 0 > this.C && (this.C = 0), this.C >= this.Ka.frames.length && (this.C = this.Ka.frames.length - 1), 1 === this.wp && (this.C = 0), this.qf = !0, this.he = this.yd.da, this.pf = !0, this.dg(a, this.Ka.frames[this.C]), this.b.U = !0)
    };
    b.Gp = function() {
        var a = this.Ka.frames[this.C],
            b = this.C;
        this.C = qa(this.pj);
        0 > this.C && (this.C = 0);
        this.C >= this.Ka.frames.length && (this.C = this.Ka.frames.length - 1);
        b !== this.C && (this.dg(a, this.Ka.frames[this.C]), this.he = this.yd.da, this.b.U = !0);
        this.pj = -1
    };
    b.dg = function(a, b) {
        var c = a.width,
            d = a.height,
            f = b.width,
            g = b.height;
        c != f && (this.width *= f / c);
        d != g && (this.height *= g / d);
        this.gc = b.gc;
        this.hc = b.hc;
        this.za.Gi(b.Jk);
        this.la();
        this.Sa = b;
        this.ig = b.na;
        c = 0;
        for (d = this.M.length; c < d; c++) f = this.M[c], f.yx && f.yx(a, b);
        this.b.trigger(T.prototype.g.dg, this)
    };
    b.Hc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Sa,
            c = b.Yf,
            d = b.W,
            f = this.x,
            g = this.y,
            h = this.width,
            l = this.height;
        if (0 === this.j && 0 <= h && 0 <= l) f -= this.gc * h, g -= this.hc * l, this.b.ld && (f = Math.round(f), g = Math.round(g)), c ? a.drawImage(d, b.Qf, b.Rf, b.width, b.height, f, g, h, l) : a.drawImage(d, f, g, h, l);
        else {
            this.b.ld && (f = Math.round(f), g = Math.round(g));
            a.save();
            var k = 0 < h ? 1 : -1,
                p = 0 < l ? 1 : -1;
            a.translate(f, g);
            1 === k && 1 === p || a.scale(k, p);
            a.rotate(this.j * k * p);
            f = 0 - this.gc * ma(h);
            g = 0 - this.hc * ma(l);
            c ? a.drawImage(d, b.Qf, b.Rf, b.width, b.height, f, g, ma(h), ma(l)) : a.drawImage(d, f, g, ma(h), ma(l));
            a.restore()
        }
    };
    b.vf = function(a) {
        this.Kb(a)
    };
    b.Kb = function(a) {
        a.wb(this.ig);
        a.ve(this.opacity);
        var b = this.Sa,
            c = this.yb;
        if (this.b.ld) {
            var d = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Yf ? a.Od(c.bb + d, c.cb + f, c.Ub + d, c.Vb + f, c.Gb + d, c.Hb + f, c.Eb + d, c.Fb + f, b.Vn) : a.Sf(c.bb + d, c.cb + f, c.Ub + d, c.Vb + f, c.Gb + d, c.Hb + f, c.Eb + d, c.Fb + f)
        } else b.Yf ? a.Od(c.bb, c.cb, c.Ub, c.Vb, c.Gb, c.Hb, c.Eb, c.Fb, b.Vn) : a.Sf(c.bb, c.cb, c.Ub, c.Vb, c.Gb, c.Hb, c.Eb, c.Fb)
    };
    b.rw = function(a) {
        var b = this.Sa,
            c, d;
        c = 0;
        for (d = b.Em.length; c < d; c++)
            if (nb(a, b.Em[c][0])) return c;
        return -1
    };
    b.rm = function(a, b) {
        var c = this.Sa,
            d = c.Em,
            f;
        ja(a) ? f = this.rw(a) : f = a - 1;
        f = qa(f);
        if (0 > f || f >= d.length) return b ? this.x : this.y;
        var g = (d[f][1] - c.gc) * this.width,
            d = d[f][2],
            d = (d - c.hc) * this.height,
            c = Math.cos(this.j);
        f = Math.sin(this.j);
        var h = g * c - d * f,
            d = d * c + g * f,
            g = h + this.x,
            d = d + this.y;
        return b ? g : d
    };
    var f = new ca,
        c = !1;
    new ta(0, 0, 0, 0);
    r.finish = function(a) {
        if (c) {
            if (a) {
                var b = this.b.Mb().Jb.hd;
                a = null.Z();
                var d = f.td(),
                    g, h;
                if (a.fa) {
                    a.fa = !1;
                    E(a.d);
                    g = 0;
                    for (h = d.length; g < h; ++g) a.d[g] = d[g];
                    if (b)
                        for (E(a.Y), g = 0, h = null.d.length; g < h; ++g) d = null.d[g], f.contains(d) || a.Y.push(d)
                } else if (b)
                    for (b = a.d.length, g = 0, h = d.length; g < h; ++g) a.d[b + g] = d[g], Da(a.Y, d[g]);
                else Aa(a.d, d);
                null.zd()
            }
            f.clear();
            c = !1
        }
    };
    k.prototype.Rs = function(a, b) {
        return gc(this.C, a, b)
    };
    k.prototype.tt = function(a) {
        return nb(this.kp, a)
    };
    k.prototype.ut = function() {
        return !0
    };
    k.prototype.dg = function() {
        return !0
    };
    k.prototype.Dl = function() {
        return !0
    };
    p.g = new k;
    g.prototype.aj = function(a) {
        this.jb = a;
        this.Ad = kb(a);
        lb(this, a, this.b.q);
        this.b.U = !0
    };
    g.prototype.bu = function(a, b) {
        this.qj = a;
        this.wp = b;
        this.Sh || (this.b.Xg(this), this.Sh = !0);
        this.Yj || this.Fp()
    };
    g.prototype.cu = function(a) {
        this.pj = a;
        this.Sh || (this.b.Xg(this), this.Sh = !0);
        this.Yj || this.Gp()
    };
    g.prototype.lu = function(a) {
        var b = this.Sa,
            c = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.la()
    };
    g.prototype.Co = function(a, b) {
        var c = new Image,
            d = this,
            f = this.Sa;
        c.onload = function() {
            f.W.src === c.src ? d.b.n && d.Sa === f && (d.ig = f.na) : (f.W = c, f.Qf = 0, f.Rf = 0, f.width = c.width, f.height = c.height, f.Yf = !1, f.wj = "", f.An = 0, d.b.n && (f.na && d.b.n.deleteTexture(f.na), f.na = d.b.n.Dg(c, !1, d.b.I), d.Sa === f && (d.ig = f.na), d.type.mo()));
            0 === b && (d.width = c.width, d.height = c.height, d.la());
            d.b.U = !0;
            d.b.trigger(T.prototype.g.Dl, d)
        };
        "data:" !== a.substr(0, 5) && (c.crossOrigin = "anonymous");
        c.src = a
    };
    p.p = new g;
    d.prototype.Ks = function(a) {
        a.ca(this.C)
    };
    d.prototype.Bo = function(a) {
        a.r(this.Sa.width)
    };
    d.prototype.Ao = function(a) {
        a.r(this.Sa.height)
    };
    p.D = new d
})();

function xc(h) {
    this.b = h
}
(function() {
    function h() {
        return f.length ? f.pop() : {}
    }

    function k(b) {
        var a, d;
        a = 0;
        for (d = b.length; a < d; a++) f.push(b[a]);
        E(b)
    }

    function g(b) {
        return b.length && " " === b.charAt(b.length - 1) ? b.substring(0, b.length - 1) : b
    }

    function d() {}
    var p = xc.prototype;
    p.S = function() {
        p.p.qu = function(b) {
            this.width !== b && (this.width = b, this.lf = !0, this.la())
        }
    };
    p.Da = function(b) {
        this.wa = b;
        this.b = b.b
    };
    var r = p.Da.prototype;
    r.S = function() {};
    r.yk = function() {
        if (!this.O) {
            var b, a, d;
            b = 0;
            for (a = this.d.length; b < a; b++) d = this.d[b], d.Kd = null, d.Of = null, d.Cc = null
        }
    };
    p.qa = function(b) {
        this.type = b;
        this.b = b.b;
        this.Nc ? E(this.cf) : this.cf = [];
        this.lf = !0
    };
    var r = p.qa.prototype,
        q = {};
    r.S = function() {
        this.text = this.A[0];
        this.visible = 0 === this.A[1];
        this.font = this.A[2];
        this.color = this.A[3];
        this.Vj = this.A[4];
        this.pl = this.A[5];
        this.vo = 0 === this.A[7];
        this.Um = this.jk = this.width;
        this.ik = this.height;
        this.Xm = this.A[8];
        this.Jj = this.fe = "";
        this.os = this.qs = this.yi = 0;
        this.Bx();
        this.Cc = this.Of = this.Kd = null;
        this.kr = !1;
        this.ai = this.b.Td;
        this.Nc ? this.hf.set(0, 0, 1, 1) : this.hf = new ta(0, 0, 1, 1);
        this.b.n && this.b.Xg(this)
    };
    r.Bx = function() {
        var b = this.font.split(" "),
            a;
        for (a = 0; a < b.length; a++)
            if ("pt" === b[a].substr(b[a].length - 2, 2)) {
                this.yi = parseInt(b[a].substr(0, b[a].length - 2));
                this.Hn = Math.ceil(this.yi / 72 * 96) + 4;
                0 < a && (this.Jj = b[a - 1]);
                this.fe = b[a + 1];
                for (a += 2; a < b.length; a++) this.fe += " " + b[a];
                break
            }
    };
    r.Rb = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.Vj,
            va: this.pl,
            wr: this.vo,
            lho: this.Xm,
            fn: this.fe,
            fs: this.Jj,
            ps: this.yi,
            pxh: this.Hn,
            tw: this.qs,
            th: this.os,
            lrt: this.ai
        }
    };
    r.jc = function(b) {
        this.text = b.t;
        this.font = b.f;
        this.color = b.c;
        this.Vj = b.ha;
        this.pl = b.va;
        this.vo = b.wr;
        this.Xm = b.lho;
        this.fe = b.fn;
        this.Jj = b.fs;
        this.yi = b.ps;
        this.Hn = b.pxh;
        this.qs = b.tw;
        this.os = b.th;
        this.ai = b.lrt;
        this.lf = !0;
        this.Um = this.jk = this.width;
        this.ik = this.height
    };
    r.ib = function() {
        if (this.b.n && this.Cc && 300 <= this.b.Td - this.ai) {
            var b = this.i;
            this.X();
            var a = this.F;
            if (a.right < b.Fa || a.bottom < b.Ga || a.left > b.Ia || a.top > b.Ha) this.b.n.deleteTexture(this.Cc), this.Kd = this.Of = this.Cc = null
        }
    };
    r.pe = function() {
        this.Kd = this.Of = null;
        this.b.n && this.Cc && this.b.n.deleteTexture(this.Cc);
        this.Cc = null
    };
    r.Bs = function() {
        this.font = this.Jj + " " + this.yi.toString() + "pt " + this.fe;
        this.lf = !0;
        this.b.U = !0
    };
    r.Hc = function(b, a) {
        b.font = this.font;
        b.textBaseline = "top";
        b.fillStyle = this.color;
        b.globalAlpha = a ? 1 : this.opacity;
        var d = 1;
        a && (d = this.i.zc(), b.save(), b.scale(d, d));
        if (this.lf || this.width !== this.Um) this.type.wa.Au(this.text, this.cf, b, this.width, this.vo), this.lf = !1, this.Um = this.width;
        this.X();
        var d = a ? 0 : this.yb.bb,
            f = a ? 0 : this.yb.cb;
        this.b.ld && (d = d + .5 | 0, f = f + .5 | 0);
        0 === this.j || a || (b.save(), b.translate(d, f), b.rotate(this.j), f = d = 0);
        var g = f + this.height,
            h = this.Hn,
            h = h + this.Xm,
            k, p;
        1 === this.pl ? f += Math.max(this.height / 2 - this.cf.length * h / 2, 0) : 2 === this.pl && (f += Math.max(this.height - this.cf.length * h - 2, 0));
        for (p = 0; p < this.cf.length && !(k = d, 1 === this.Vj ? k = d + (this.width - this.cf[p].width) / 2 : 2 === this.Vj && (k = d + (this.width - this.cf[p].width)), b.fillText(this.cf[p].text, k, f), f += h, f >= g - h); p++);
        (0 !== this.j || a) && b.restore();
        this.ai = this.b.Td
    };
    r.Kb = function(b) {
        if (!(1 > this.width || 1 > this.height)) {
            var a = this.lf || this.kr;
            this.kr = !1;
            var d = this.i.zc(),
                f = this.i.Xa(),
                g = this.hf,
                h = d * this.width,
                k = d * this.height,
                p = Math.ceil(h),
                l = Math.ceil(k),
                r = this.b.H / 2,
                q = this.b.G / 2;
            this.Of || (this.Kd = document.createElement("canvas"), this.Kd.width = p, this.Kd.height = l, this.jk = p, this.ik = l, a = !0, this.Of = this.Kd.getContext("2d"));
            if (p !== this.jk || l !== this.ik) this.Kd.width = p, this.Kd.height = l, this.Cc && (b.deleteTexture(this.Cc), this.Cc = null), a = !0;
            a && (this.Of.clearRect(0, 0, p, l), this.Hc(this.Of, !0), this.Cc || (this.Cc = b.Zb(p, l, this.b.I, this.b.Hd)), b.Fs(this.Kd, this.Cc, this.b.Hd));
            this.jk = p;
            this.ik = l;
            b.wb(this.Cc);
            b.ve(this.opacity);
            b.uc();
            b.translate(-r, -q);
            b.mc();
            var x = this.yb,
                a = this.i.Ea(x.bb, x.cb, !0, !0),
                r = this.i.Ea(x.bb, x.cb, !1, !0),
                q = this.i.Ea(x.Ub, x.Vb, !0, !0),
                A = this.i.Ea(x.Ub, x.Vb, !1, !0),
                F = this.i.Ea(x.Gb, x.Hb, !0, !0),
                G = this.i.Ea(x.Gb, x.Hb, !1, !0),
                B = this.i.Ea(x.Eb, x.Fb, !0, !0),
                x = this.i.Ea(x.Eb, x.Fb, !1, !0);
            if (this.b.ld || 0 === this.j && 0 === f) var J = (a + .5 | 0) - a,
                v = (r + .5 | 0) - r,
                a = a + J,
                r = r + v,
                q = q + J,
                A = A + v,
                F = F + J,
                G = G + v,
                B = B + J,
                x = x + v;
            0 === this.j && 0 === f ? (q = a + p, A = r, F = q, G = r + l, B = a, x = G, g.right = 1, g.bottom = 1) : (g.right = h / p, g.bottom = k / l);
            b.Od(a, r, q, A, F, G, B, x, g);
            b.uc();
            b.scale(d, d);
            b.Sg(-this.i.Xa());
            b.translate((this.i.Fa + this.i.Ia) / -2, (this.i.Ga + this.i.Ha) / -2);
            b.mc();
            this.ai = this.b.Td
        }
    };
    var b = [];
    p.wu = function(c) {
        E(b);
        for (var a = "", d, f = 0; f < c.length;)
            if (d = c.charAt(f), "\n" === d) a.length && (b.push(a), a = ""), b.push("\n"), ++f;
            else if (" " === d || "\t" === d || "-" === d) {
            do a += c.charAt(f), f++; while (f < c.length && (" " === c.charAt(f) || "\t" === c.charAt(f)));
            b.push(a);
            a = ""
        } else f < c.length && (a += d, f++);
        a.length && b.push(a)
    };
    var f = [];
    p.Au = function(b, a, d, f, g) {
        if (b && b.length)
            if (2 >= f) k(a);
            else {
                if (100 >= b.length && -1 === b.indexOf("\n")) {
                    var p = d.measureText(b).width;
                    if (p <= f) {
                        k(a);
                        a.push(h());
                        a[0].text = b;
                        a[0].width = p;
                        return
                    }
                }
                this.Bu(b, a, d, f, g)
            }
        else k(a)
    };
    p.Bu = function(c, a, d, k, p) {
        p && (this.wu(c), c = b);
        var r = "",
            q, D, l, C = 0;
        for (l = 0; l < c.length; l++) "\n" === c[l] ? (C >= a.length && a.push(h()), r = g(r), D = a[C], D.text = r, D.width = d.measureText(r).width, C++, r = "") : (q = r, r += c[l], D = d.measureText(r).width, D >= k && (C >= a.length && a.push(h()), q = g(q), D = a[C], D.text = q, D.width = d.measureText(q).width, C++, r = c[l], p || " " !== r || (r = "")));
        r.length && (C >= a.length && a.push(h()), r = g(r), D = a[C], D.text = r, D.width = d.measureText(r).width, C++);
        for (l = C; l < a.length; l++) f.push(a[l]);
        a.length = C
    };
    p.g = new function() {};
    d.prototype.nu = function(b) {
        ia(b) && 1E9 > b && (b = Math.round(1E10 * b) / 1E10);
        b = b.toString();
        this.text !== b && (this.text = b, this.lf = !0, this.b.U = !0)
    };
    d.prototype.pu = function(b, a) {
        if (this.b.Aa) z("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored");
        else {
            var d = this,
                f = function() {
                    d.b.U = !0;
                    d.lf = !0
                };
            if (q.hasOwnProperty(a)) {
                var g = "'" + b + "'";
                if (this.fe !== g)
                    for (this.fe = g, this.Bs(), g = 1; 10 > g; g++) setTimeout(f, 100 * g), setTimeout(f, 1E3 * g)
            } else
                for (g = document.createElement("link"), g.href = a, g.rel = "stylesheet", g.type = "text/css", g.onload = f, document.getElementsByTagName("head")[0].appendChild(g), q[a] = !0, this.fe = "'" + b + "'", this.Bs(), g = 1; 10 > g; g++) setTimeout(f, 100 * g), setTimeout(f, 1E3 * g)
        }
    };
    d.prototype.aj = function(b) {
        this.jb = b;
        this.Ad = kb(b);
        lb(this, b, this.b.q);
        this.b.U = !0
    };
    p.p = new d;
    p.D = new function() {}
})();

function yc(h) {
    this.b = h
}
(function() {
    function h() {}

    function k() {}

    function g() {}
    var d = yc.prototype;
    d.Da = function(d) {
        this.wa = d;
        this.b = d.b
    };
    var p = d.Da.prototype;
    p.S = function() {
        this.O || (this.W = new Image, this.W.Ap = this.bo, this.b.Gs(this.W, this.ao), this.na = this.pattern = null)
    };
    p.yk = function() {
        this.O || (this.na = null)
    };
    p.un = function() {
        if (!this.O && this.d.length) {
            this.na || (this.na = this.b.n.Dg(this.W, !0, this.b.I, this.co));
            var d, g;
            d = 0;
            for (g = this.d.length; d < g; d++) this.d[d].na = this.na
        }
    };
    p.Ym = function() {
        this.O || this.na || !this.b.n || (this.na = this.b.n.Dg(this.W, !0, this.b.I, this.co))
    };
    p.lo = function() {
        this.O || this.d.length || !this.na || (this.b.n.deleteTexture(this.na), this.na = null)
    };
    p.En = function(d) {
        d.drawImage(this.W, 0, 0)
    };
    d.qa = function(d) {
        this.type = d;
        this.b = d.b
    };
    p = d.qa.prototype;
    p.S = function() {
        this.visible = 0 === this.A[0];
        this.hf = new ta(0, 0, 0, 0);
        this.Xj = !1;
        this.W = this.type.W;
        this.b.n ? (this.type.Ym(), this.na = this.type.na) : (this.type.pattern || (this.type.pattern = this.b.P.createPattern(this.type.W, "repeat")), this.pattern = this.type.pattern)
    };
    p.xd = function() {
        this.Xj = !1;
        this.W = this.type.W
    };
    p.pe = function() {
        this.b.n && this.Xj && this.na && (this.b.n.deleteTexture(this.na), this.na = null)
    };
    p.Hc = function(d) {
        d.globalAlpha = this.opacity;
        d.save();
        d.fillStyle = this.pattern;
        var g = this.x,
            b = this.y;
        this.b.ld && (g = Math.round(g), b = Math.round(b));
        var f = -(this.gc * this.width),
            c = -(this.hc * this.height),
            a = f % this.W.width,
            e = c % this.W.height;
        0 > a && (a += this.W.width);
        0 > e && (e += this.W.height);
        d.translate(g, b);
        d.rotate(this.j);
        d.translate(a, e);
        d.fillRect(f - a, c - e, this.width, this.height);
        d.restore()
    };
    p.vf = function(d) {
        this.Kb(d)
    };
    p.Kb = function(d) {
        d.wb(this.na);
        d.ve(this.opacity);
        var g = this.hf;
        g.right = this.width / this.W.width;
        g.bottom = this.height / this.W.height;
        var b = this.yb;
        if (this.b.ld) {
            var f = Math.round(this.x) - this.x,
                c = Math.round(this.y) - this.y;
            d.Od(b.bb + f, b.cb + c, b.Ub + f, b.Vb + c, b.Gb + f, b.Hb + c, b.Eb + f, b.Fb + c, g)
        } else d.Od(b.bb, b.cb, b.Ub, b.Vb, b.Gb, b.Hb, b.Eb, b.Fb, g)
    };
    h.prototype.Dl = function() {
        return !0
    };
    d.g = new h;
    k.prototype.aj = function(d) {
        this.jb = d;
        this.Ad = kb(d);
        lb(this, d, this.b.q);
        this.b.U = !0
    };
    k.prototype.Co = function(d) {
        var g = new Image,
            b = this;
        g.onload = function() {
            b.W = g;
            b.b.n ? (b.Xj && b.na && b.b.n.deleteTexture(b.na), b.na = b.b.n.Dg(g, !0, b.b.I)) : b.pattern = b.b.P.createPattern(g, "repeat");
            b.Xj = !0;
            b.b.U = !0;
            b.b.trigger(yc.prototype.g.Dl, b)
        };
        "data:" !== d.substr(0, 5) && (g.crossOrigin = "anonymous");
        g.src = d
    };
    d.p = new k;
    g.prototype.Bo = function(d) {
        d.r(this.W.width)
    };
    g.prototype.Ao = function(d) {
        d.r(this.W.height)
    };
    d.D = new g
})();

function zc(h) {
    this.b = h
}
(function() {
    function h(b) {
        f = b.x;
        c = b.y;
        a = b.z
    }

    function k(a, b, c, d) {
        var f;
        f = e.length ? e.pop() : new g;
        f.init(a, b, c, d);
        return f
    }

    function g() {
        this.Ki = this.id = this.y = this.x = this.al = this.$k = this.Tm = this.time = this.Zn = 0;
        this.Qi = this.jl = !1
    }

    function d() {}

    function p() {}
    var r = zc.prototype;
    r.Da = function(a) {
        this.wa = a;
        this.b = a.b
    };
    r.Da.prototype.S = function() {};
    r.qa = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.en = !1
    };
    var q = r.qa.prototype,
        b = {
            left: 0,
            top: 0
        };
    q.Ah = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var f = 0,
        c = 0,
        a = 0,
        e = [];
    g.prototype.init = function(a, b, c, d) {
        var e = Ya();
        this.Zn = this.Tm = this.time = e;
        this.$k = a;
        this.al = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Ki = d;
        this.Qi = this.jl = !1
    };
    g.prototype.update = function(a, b, c, d, e, f) {
        this.Tm = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f;
        !this.Qi && 15 <= Ta(this.$k, this.al, this.x, this.y) && (this.Qi = !0)
    };
    g.prototype.nx = function(a, b) {
        !this.jl && 500 <= Ya() - this.Zn && !this.Qi && 15 > Ta(this.$k, this.al, this.x, this.y) && (this.jl = !0, a.Ud = this.Ki, a.Zg = this.id, a.rg = b, a.b.trigger(zc.prototype.g.Ct, a), a.$d = this.x, a.ae = this.y, a.b.trigger(zc.prototype.g.Dt, a), a.rg = 0)
    };
    var n = -1E3,
        m = -1E3,
        y = -1E4;
    g.prototype.dr = function(a, b) {
        if (!this.jl) {
            var c = Ya();
            333 >= c - this.Zn && !this.Qi && 15 > Ta(this.$k, this.al, this.x, this.y) && (a.Ud = this.Ki, a.Zg = this.id, a.rg = b, 666 >= c - y && 25 > Ta(n, m, this.x, this.y) ? (a.b.trigger(zc.prototype.g.At, a), a.$d = this.x, a.ae = this.y, a.b.trigger(zc.prototype.g.Bt, a), m = n = -1E3, y = -1E4) : (a.b.trigger(zc.prototype.g.St, a), a.$d = this.x, a.ae = this.y, a.b.trigger(zc.prototype.g.Tt, a), n = this.x, m = this.y, y = c), a.rg = 0)
        }
    };
    q.S = function() {
        this.bx = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.rg = this.Zg = this.Ud = this.ae = this.$d = this.cp = this.bp = this.$o = this.Hu = this.Gu = this.Fu = this.Fk = this.Ek = this.Dk = 0;
        this.zy = 0 !== this.A[0];
        var a = 0 < this.b.fc ? document : this.b.canvas,
            b = document;
        this.b.Nb ? b = a = window.Canvas : this.b.qc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
            c.si(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.ri(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.qe(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.qe(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.si(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.ri(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.qe(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.qe(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Ck(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Bk(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Lg(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Lg(a, !0)
        }, !1));
        if (this.bx) {
            var d = function(a) {
                    a = a.reading;
                    c.$o = a.accelerationX;
                    c.bp = a.accelerationY;
                    c.cp = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.Dk = a.yawDegrees;
                    c.Ek = a.pitchDegrees;
                    c.Fk = a.rollDegrees
                },
                f = Windows.Devices.Sensors.Accelerometer.getDefault();
            f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", d));
            var g = Windows.Devices.Sensors.Inclinometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (f && f.removeEventListener("readingchanged", d), g && g.removeEventListener("readingchanged", e)) : (f && f.addEventListener("readingchanged", d), g && g.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Dk = a.alpha || 0;
            c.Ek = a.beta || 0;
            c.Fk = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.Fu = a.accelerationIncludingGravity.x || 0, c.Gu = a.accelerationIncludingGravity.y || 0, c.Hu = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.$o = a.acceleration.x || 0, c.bp = a.acceleration.y || 0, c.cp = a.acceleration.z || 0)
        }, !1);
        this.zy && !this.b.Aa && (jQuery(document).mousemove(function(a) {
            c.sn(a)
        }), jQuery(document).mousedown(function(a) {
            c.rn(a)
        }), jQuery(document).mouseup(function(a) {
            c.tn(a)
        }));
        !this.b.Ag && this.b.rc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(h, null, {
            frequency: 40
        });
        this.b.ry(this)
    };
    q.ri = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var c = this.Ah(a.pointerId),
                d = Ya();
            if (0 <= c) {
                var e = this.b.Aa ? b : jQuery(this.b.canvas).offset(),
                    c = this.touches[c];
                2 > d - c.time || c.update(d, a.pageX - e.left, a.pageY - e.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    q.si = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.b.Aa ? b : jQuery(this.b.canvas).offset(),
                d = a.pageX - c.left,
                c = a.pageY - c.top;
            Ya();
            this.Ud = this.touches.length;
            this.Zg = a.pointerId;
            this.touches.push(k(d, c, a.pointerId, this.Ud));
            this.b.Ac = !0;
            this.b.trigger(zc.prototype.g.Mo, this);
            this.b.trigger(zc.prototype.g.Oo, this);
            this.$d = d;
            this.ae = c;
            this.b.trigger(zc.prototype.g.Cl, this);
            this.b.Ac = !1
        }
    };
    q.qe = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.Ah(a.pointerId);
            this.Ud = 0 <= c ? this.touches[c].Ki : -1;
            this.Zg = 0 <= c ? this.touches[c].id : -1;
            this.b.Ac = !0;
            this.b.trigger(zc.prototype.g.Lo, this);
            this.b.trigger(zc.prototype.g.No, this);
            0 <= c && (b || this.touches[c].dr(this, c), 100 > e.length && e.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.Ac = !1
        }
    };
    q.Bk = function(a) {
        a.preventDefault && a.preventDefault();
        var c = Ya(),
            d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (f = a.changedTouches[d], g = this.Ah(f.identifier), 0 <= g) {
                var h = this.b.Aa ? b : jQuery(this.b.canvas).offset();
                g = this.touches[g];
                2 > c - g.time || g.update(c, f.pageX - h.left, f.pageY - h.top, 2 * (f.eA || f.oA || f.Wz || f.$z || 0), 2 * (f.fA || f.pA || f.Xz || f.aA || 0), f.Oz || f.mA || f.Uz || f.Yz || 0)
            }
    };
    q.Ck = function(a) {
        a.preventDefault && ob(a) && a.preventDefault();
        var c = this.b.Aa ? b : jQuery(this.b.canvas).offset();
        Ya();
        this.b.Ac = !0;
        var d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (f = a.changedTouches[d], g = this.Ah(f.identifier), -1 === g) {
                g = f.pageX - c.left;
                var h = f.pageY - c.top;
                this.Ud = this.touches.length;
                this.Zg = f.identifier;
                this.touches.push(k(g, h, f.identifier, this.Ud));
                this.b.trigger(zc.prototype.g.Mo, this);
                this.b.trigger(zc.prototype.g.Oo, this);
                this.$d = g;
                this.ae = h;
                this.b.trigger(zc.prototype.g.Cl, this)
            }
        this.b.Ac = !1
    };
    q.Lg = function(a, b) {
        a.preventDefault && ob(a) && a.preventDefault();
        this.b.Ac = !0;
        var c, d, f;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) f = a.changedTouches[c], f = this.Ah(f.identifier), 0 <= f && (this.Ud = this.touches[f].Ki, this.Zg = this.touches[f].id, this.b.trigger(zc.prototype.g.Lo, this), this.b.trigger(zc.prototype.g.No, this), b || this.touches[f].dr(this, f), 100 > e.length && e.push(this.touches[f]), this.touches.splice(f, 1));
        this.b.Ac = !1
    };
    q.gg = function() {
        return this.b.rc && 0 === this.Dk && 0 !== a ? 90 * a : this.Dk
    };
    q.Xl = function() {
        return this.b.rc && 0 === this.Ek && 0 !== c ? 90 * c : this.Ek
    };
    q.Kp = function() {
        return this.b.rc && 0 === this.Fk && 0 !== f ? 90 * f : this.Fk
    };
    q.rn = function(a) {
        this.Ck({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.en = !0
    };
    q.sn = function(a) {
        this.en && this.Bk({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    q.tn = function(a) {
        a.preventDefault && this.b.fq && !this.b.Hd && a.preventDefault();
        this.b.fq = !0;
        this.Lg({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.en = !1
    };
    q.hl = function() {
        var a, b, c, d = Ya();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Tm = d), c.nx(this, a)
    };
    d.prototype.Oo = function() {
        return !0
    };
    d.prototype.No = function() {
        return !0
    };
    d.prototype.Cl = function(a) {
        return a ? this.b.dl(a, this.$d, this.ae) : !1
    };
    d.prototype.Mo = function(a) {
        a = Math.floor(a);
        return a === this.Ud
    };
    d.prototype.Lo = function(a) {
        a = Math.floor(a);
        return a === this.Ud
    };
    d.prototype.Ct = function() {
        return !0
    };
    d.prototype.St = function() {
        return !0
    };
    d.prototype.At = function() {
        return !0
    };
    d.prototype.Dt = function(a) {
        return a ? this.b.dl(a, this.$d, this.ae) : !1
    };
    d.prototype.Tt = function(a) {
        return a ? this.b.dl(a, this.$d, this.ae) : !1
    };
    d.prototype.Bt = function(a) {
        return a ? this.b.dl(a, this.$d, this.ae) : !1
    };
    r.g = new d;
    p.prototype.Vo = function(a, b) {
        var c = this.rg;
        if (0 > c || c >= this.touches.length) a.r(0);
        else {
            var d, e, f, g, h;
            fa(b) ? (d = this.b.qg(0), e = d.scale, f = d.vd, g = d.jd, h = d.j, d.scale = 1, d.vd = 1, d.jd = 1, d.j = 0, a.r(d.kb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.vd = f, d.jd = g, d.j = h) : (d = ia(b) ? this.b.qg(b) : this.b.Rj(b)) ? a.r(d.kb(this.touches[c].x, this.touches[c].y, !0)) : a.r(0)
        }
    };
    p.prototype.Wo = function(a, b) {
        var c = this.rg;
        if (0 > c || c >= this.touches.length) a.r(0);
        else {
            var d, e, f, g, h;
            fa(b) ? (d = this.b.qg(0), e = d.scale, f = d.vd, g = d.kd, h = d.j, d.scale = 1, d.vd = 1, d.kd = 1, d.j = 0, a.r(d.kb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.vd = f, d.kd = g, d.j = h) : (d = ia(b) ? this.b.qg(b) : this.b.Rj(b)) ? a.r(d.kb(this.touches[c].x, this.touches[c].y, !1)) : a.r(0)
        }
    };
    r.D = new p
})();

function Ac(h) {
    this.b = h
}
(function() {
    function h() {}

    function k() {}

    function g() {}
    var d = Ac.prototype;
    d.Da = function(d) {
        this.wa = d;
        this.b = d.b
    };
    d.Da.prototype.S = function() {};
    d.qa = function(d) {
        this.type = d;
        this.b = d.b
    };
    var p = d.qa.prototype,
        r = window.URL || window.webkitURL || window.mozURL || window.msURL;
    p.S = function() {
        if (this.b.Aa) z("[Construct 2] File Chooser plugin not supported on this platform - the object will not be created");
        else {
            this.$b = document.createElement("input");
            this.$b.type = "file";
            this.$b.setAttribute("accept", this.A[0]);
            0 !== this.A[1] && this.$b.setAttribute("multiple", "");
            this.$b.id = this.A[3];
            jQuery(this.$b).appendTo(this.b.oj ? this.b.oj : "body");
            this.xf = !1;
            0 === this.A[2] && (jQuery(this.$b).hide(), this.visible = !1, this.xf = !0);
            var d = this;
            this.$b.onchange = function() {
                d.b.trigger(Ac.prototype.g.Do, d)
            };
            this.Gq = this.Hq = this.zq = this.Dq = this.Fq = this.Bq = 0;
            this.Cs(!0);
            this.b.Xg(this)
        }
    };
    p.pe = function() {
        this.b.Aa || (jQuery(this.$b).remove(), this.$b = null)
    };
    p.ib = function() {
        this.Cs()
    };
    p.Cs = function(d) {
        if (!this.b.Aa) {
            var b = this.i.Ea(this.x, this.y, !0),
                f = this.i.Ea(this.x, this.y, !1),
                c = this.i.Ea(this.x + this.width, this.y + this.height, !0),
                a = this.i.Ea(this.x + this.width, this.y + this.height, !1),
                e = this.b.width / this.b.devicePixelRatio,
                g = this.b.height / this.b.devicePixelRatio;
            !this.visible || !this.i.visible || 0 >= c || 0 >= a || b >= e || f >= g ? (this.xf || jQuery(this.$b).hide(), this.xf = !0) : (1 > b && (b = 1), 1 > f && (f = 1), c >= e && (c = e - 1), a >= g && (a = g - 1), e = window.innerWidth, g = window.innerHeight, d || this.Bq !== b || this.Fq !== f || this.Dq !== c || this.zq !== a || this.Hq !== e || this.Gq !== g ? (this.Bq = b, this.Fq = f, this.Dq = c, this.zq = a, this.Hq = e, this.Gq = g, this.xf && (jQuery(this.$b).show(), this.xf = !1), d = Math.round(b) + jQuery(this.b.canvas).offset().left, e = Math.round(f) + jQuery(this.b.canvas).offset().top, jQuery(this.$b).css("position", "absolute"), jQuery(this.$b).offset({
                left: d,
                top: e
            }), jQuery(this.$b).width(Math.round(c - b)), jQuery(this.$b).height(Math.round(a - f))) : this.xf && (jQuery(this.$b).show(), this.xf = !1))
        }
    };
    p.Hc = function() {};
    p.Kb = function() {};
    h.prototype.Do = function() {
        return !0
    };
    d.g = new h;
    k.prototype.gh = function(d) {
        this.b.Aa || (this.visible = 0 !== d)
    };
    d.p = new k;
    g.prototype.bt = function(d, b) {
        var f;
        if (this.b.Aa) f = null;
        else {
            f = this.$b.files;
            var c = b;
            f ? (c = Math.floor(c), f = 0 > c || c >= f.length ? null : f[c]) : f = null
        }
        f ? f.c2url ? d.Db(f.c2url) : r && r.createObjectURL ? (f.c2url = r.createObjectURL(f), d.Db(f.c2url)) : d.Db("") : d.Db("")
    };
    d.D = new g
})();

function Bc(h) {
    this.b = h
}
(function() {
    function h() {}
    var k = Bc.prototype;
    k.Da = function(d) {
        this.wa = d;
        this.b = d.b
    };
    k.Da.prototype.S = function() {};
    k.qa = function(d) {
        this.type = d;
        this.b = d.b
    };
    var g = k.qa.prototype;
    g.S = function() {
        this.visible = 0 === this.A[0];
        this.Tf = this.width;
        this.Uf = this.height;
        var d = this.b.n;
        d ? (this.Fc = d.Zb(this.Tf, this.Uf, this.b.I, !1), this.Ni = d.Zb(this.Tf, this.Uf, this.b.I, !1), this.In = d.Zb(1, 1, this.b.I, !1), d.wb(null), d.Sb(this.In), d.clear(0, 0, 0, 1), d.Sb(null), this.Mr = {}, this.Mr.xb = d.q.ONE, this.Mr.nb = d.q.ONE_MINUS_SRC_ALPHA) : (this.canvas = document.createElement("canvas"), this.canvas.width = this.Tf, this.canvas.height = this.Uf, this.P = this.canvas.getContext("2d"), this.b.I || (this.P.Vz = !1, this.P.nA = !1, this.P.Zz = !1, this.P.Sz = !1), this.fill = "black")
    };
    g.pe = function() {
        this.Fc && (this.b.n.deleteTexture(this.Fc), this.b.n.deleteTexture(this.In), this.b.n.deleteTexture(this.Ni));
        this.P = this.canvas = this.Ni = this.In = this.Fc = null
    };
    g.Rb = function() {
        return {}
    };
    g.jc = function() {};
    g.gg = function() {
        var d = this.b.n,
            g = this.b.canvas;
        if (d) {
            if (null == this.type.wa.vp) {
                var h = document.createElement("canvas");
                h.width = 1;
                h.height = 2;
                h = h.getContext("experimental-webgl");
                h.clearColor(1, 1, 1, 1);
                h.clear(h.COLOR_BUFFER_BIT);
                var k = h.createProgram(),
                    b = h.createShader(h.VERTEX_SHADER);
                h.shaderSource(b, "attribute vec3 pos;void main() {gl_Position = vec4(pos, 1.0);}");
                h.compileShader(b);
                h.attachShader(k, b);
                b = h.createShader(h.FRAGMENT_SHADER);
                h.shaderSource(b, "void main() {gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);}");
                h.compileShader(b);
                h.attachShader(k, b);
                h.linkProgram(k);
                h.useProgram(k);
                h.bindBuffer(h.ARRAY_BUFFER, h.createBuffer());
                h.bufferData(h.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1, -1, 0, -1, 0, 0, 1, 0, 0]), h.STATIC_DRAW);
                k = h.getAttribLocation(k, "pos");
                h.enableVertexAttribArray(k);
                h.vertexAttribPointer(k, 3, h.FLOAT, !1, 0, 0);
                h.drawArrays(h.TRIANGLE_STRIP, 0, 4);
                k = h.createTexture();
                h.bindTexture(h.TEXTURE_2D, k);
                h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, h.canvas);
                h.bindTexture(h.TEXTURE_2D, null);
                h.bindFramebuffer(h.FRAMEBUFFER, h.createFramebuffer());
                h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, k, 0);
                b = new Uint8Array(8);
                h.readPixels(0, 0, 1, 2, h.RGBA, h.UNSIGNED_BYTE, b);
                h.bindFramebuffer(h.FRAMEBUFFER, null);
                this.type.wa.vp = 0 == b[0];
                h.deleteTexture(k)
            }
            if (this.Fc.Me != g.width || this.Fc.Le != g.height) d.deleteTexture(this.Fc), this.Fc = null;
            null == this.Fc && (this.Fc = d.Zb(g.width, g.height, this.b.I, this.b.Hd));
            this.type.wa.vp && d.q.pixelStorei(d.q.UNPACK_FLIP_Y_WEBGL, !0);
            d.Fs(g, this.Fc, this.b.Hd);
            d.q.pixelStorei(d.q.UNPACK_FLIP_Y_WEBGL, !1)
        } else this.canvas.width = g.width, this.canvas.height = g.height, this.P.drawImage(g, 0, 0, g.width, g.height)
    };
    g.Hc = function(d) {
        d.globalAlpha = this.opacity;
        d.save();
        d.translate(this.x, this.y);
        var g = 0 < this.width ? 1 : -1,
            h = 0 < this.height ? 1 : -1;
        1 === g && 1 === h || d.scale(g, h);
        d.rotate(this.j * g * h);
        d.drawImage(this.canvas, 0 - this.gc * ma(this.width), 0 - this.hc * ma(this.height), ma(this.width), ma(this.height));
        d.restore()
    };
    g.Kb = function(d) {
        d.wb(this.Fc);
        d.ve(this.opacity);
        var g = this.yb;
        d.Sf(g.bb, g.cb, g.Ub, g.Vb, g.Gb, g.Hb, g.Eb, g.Fb)
    };
    k.g = new function() {};
    h.prototype.aj = function(d) {
        this.Ad = kb(d);
        lb(this, d, this.b.q);
        this.b.U = !0
    };
    h.prototype.Vt = function(d) {
        d = d.Z();
        d = d.fa ? d.type.d : d.d;
        this.X();
        var g, h, k, b = this.b.n;
        if (b) {
            if (!this.Fc) return;
            var f = b.width,
                c = b.height;
            b.we(this.Tf, this.Uf);
            b.wb(null);
            b.Sb(this.Fc);
            b.uc();
            b.scale(this.Tf / this.width, -this.Uf / this.height);
            b.Sg(-this.j);
            b.translate((this.F.left + this.F.right) / -2, (this.F.top + this.F.bottom) / -2);
            b.mc();
            var a = 0,
                e = 0,
                n, m;
            h = 0;
            for (k = d.length; h < k; h++)
                if (g = d[h], this != g && g.visible && 0 !== g.width && 0 !== g.height && (g.X(), this.F.pq(g.F)))
                    if (g.so)
                        for (n = 0, m = g.ea.length; n < m; ++n) b.wb(null), b.Sb(this.Ni), b.clear(0, 0, 0, 0), a = g.ea[n].ab, e = g.ea[n].index, b.Tb(a), b.Rd(g.xb, g.nb), b.Xf(this.Ni, 1 / g.width, 1 / g.height, 0, 1, 1, 0, 1, 0, 0, 0, .5, .5, this.b.qb.da, g.La[e]), g.Kb(b), b.Tb(0), b.wb(null), b.Sb(this.Fc), b.wb(this.Ni), b.uc(), b.scale(this.Tf, -this.Uf), b.translate(-.5, -.5), b.mc(), b.ve(g.opacity), b.Sn(), b.Sf(0, 0, 1, 0, 1, 1, 0, 1), b.uc(), b.scale(this.Tf / this.width, -this.Uf / this.height), b.Sg(-this.j), b.translate((this.F.left + this.F.right) / -2, (this.F.top + this.F.bottom) / -2), b.mc();
                    else b.Tb(0), b.Rd(g.xb, g.nb), g.Kb(b);
            b.Sb(null);
            b.we(f, c)
        } else
            for (b = this.P, h = 0, k = d.length; h < k; h++)
                if (g = d[h], g.X(), 0 != g.visible || 0 != this.b.qy(this, g)) b.save(), b.scale(this.canvas.width / this.width, this.canvas.height / this.height), b.rotate(-this.j), b.translate(-this.yb.bb, -this.yb.cb), b.globalCompositeOperation = g.Ad, g.Hc(b), b.restore();
        this.b.U = !0
    };
    k.p = new h;
    k.D = new function() {}
})();

function Cc(h) {
    this.b = h
}
(function() {
    function h() {}
    var k = Cc.prototype;
    k.Da = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    k.Da.prototype.S = function() {};
    k.qa = function(d, g) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = g;
        this.b = d.b
    };
    var g = k.qa.prototype;
    g.S = function() {
        this.ip = this.A[0];
        this.jp = this.A[1];
        this.Mu = this.A[2];
        this.Lu = this.A[3];
        this.e.X();
        this.sl = this.e.F.left;
        this.wl = this.e.F.top;
        this.tl = this.b.Pa - this.e.F.left;
        this.ul = this.b.Oa - this.e.F.top;
        this.Pk = this.b.Pa - this.e.F.right;
        this.kj = this.b.Oa - this.e.F.bottom;
        this.enabled = 0 !== this.A[4]
    };
    g.Rb = function() {
        return {
            xleft: this.sl,
            ytop: this.wl,
            xright: this.tl,
            ybottom: this.ul,
            rdiff: this.Pk,
            bdiff: this.kj,
            enabled: this.enabled
        }
    };
    g.jc = function(d) {
        this.sl = d.xleft;
        this.wl = d.ytop;
        this.tl = d.xright;
        this.ul = d.ybottom;
        this.Pk = d.rdiff;
        this.kj = d.bdiff;
        this.enabled = d.enabled
    };
    g.ib = function() {
        if (this.enabled) {
            var d, g = this.e.i,
                h = this.e,
                k = this.e.F;
            0 === this.ip ? (h.X(), d = g.Fa + this.sl - k.left, 0 !== d && (h.x += d, h.la())) : 1 === this.ip && (h.X(), d = g.Ia - this.tl - k.left, 0 !== d && (h.x += d, h.la()));
            0 === this.jp ? (h.X(), d = g.Ga + this.wl - k.top, 0 !== d && (h.y += d, h.la())) : 1 === this.jp && (h.X(), d = g.Ha - this.ul - k.top, 0 !== d && (h.y += d, h.la()));
            1 === this.Mu && (h.X(), d = g.Ia - this.Pk - k.right, 0 !== d && (h.width += d, 0 > h.width && (h.width = 0), h.la()));
            1 === this.Lu && (h.X(), d = g.Ha - this.kj - k.bottom, 0 !== d && (h.height += d, 0 > h.height && (h.height = 0), h.la()))
        }
    };
    k.g = new function() {};
    h.prototype.Ro = function(d) {
        this.enabled && 0 === d ? this.enabled = !1 : this.enabled || 0 === d || (this.e.X(), this.sl = this.e.F.left, this.wl = this.e.F.top, this.tl = this.b.Pa - this.e.F.left, this.ul = this.b.Oa - this.e.F.top, this.Pk = this.b.Pa - this.e.F.right, this.kj = this.b.Oa - this.e.F.bottom, this.enabled = !0)
    };
    k.p = new h;
    k.D = new function() {}
})();

function Dc(h) {
    this.b = h;
    var k = this;
    this.b.Aa || (jQuery(document).mousemove(function(g) {
        k.sn(g)
    }), jQuery(document).mousedown(function(g) {
        k.rn(g)
    }), jQuery(document).mouseup(function(g) {
        k.tn(g)
    }));
    h = 0 < this.b.fc ? document : this.b.canvas;
    this.b.Nb ? h = window.Canvas : this.b.qc && (h = window);
    window.navigator.pointerEnabled ? (h.addEventListener("pointerdown", function(g) {
        k.si(g)
    }, !1), h.addEventListener("pointermove", function(g) {
        k.ri(g)
    }, !1), h.addEventListener("pointerup", function(g) {
        k.qe(g)
    }, !1), h.addEventListener("pointercancel", function(g) {
        k.qe(g)
    }, !1)) : window.navigator.msPointerEnabled ? (h.addEventListener("MSPointerDown", function(g) {
        k.si(g)
    }, !1), h.addEventListener("MSPointerMove", function(g) {
        k.ri(g)
    }, !1), h.addEventListener("MSPointerUp", function(g) {
        k.qe(g)
    }, !1), h.addEventListener("MSPointerCancel", function(g) {
        k.qe(g)
    }, !1)) : (h.addEventListener("touchstart", function(g) {
        k.Ck(g)
    }, !1), h.addEventListener("touchmove", function(g) {
        k.Bk(g)
    }, !1), h.addEventListener("touchend", function(g) {
        k.Lg(g)
    }, !1), h.addEventListener("touchcancel", function(g) {
        k.Lg(g)
    }, !1))
}
(function() {
    function h(g) {
        var b, f;
        b = 0;
        for (f = g.M.length; b < f; b++)
            if (g.M[b] instanceof d.qa) return g.M[b];
        return null
    }

    function k() {}

    function g() {}
    var d = Dc.prototype,
        p = {
            left: 0,
            top: 0
        };
    d.rn = function(d) {
        1 === d.which && this.mn("leftmouse", d.pageX, d.pageY)
    };
    d.sn = function(d) {
        1 === d.which && this.nn("leftmouse", d.pageX, d.pageY)
    };
    d.tn = function(d) {
        1 === d.which && this.pn("leftmouse")
    };
    d.Ck = function(d) {
        d.preventDefault && ob(d) && d.preventDefault();
        var b, f, c, a;
        b = 0;
        for (f = d.changedTouches.length; b < f; b++) c = d.changedTouches[b], a = c.identifier, this.mn(a ? a.toString() : "<none>", c.pageX, c.pageY)
    };
    d.Bk = function(d) {
        d.preventDefault && d.preventDefault();
        var b, f, c, a;
        b = 0;
        for (f = d.changedTouches.length; b < f; b++) c = d.changedTouches[b], a = c.identifier, this.nn(a ? a.toString() : "<none>", c.pageX, c.pageY)
    };
    d.Lg = function(d) {
        d.preventDefault && ob(d) && d.preventDefault();
        var b, f, c;
        b = 0;
        for (f = d.changedTouches.length; b < f; b++) c = d.changedTouches[b], c = c.identifier, this.pn(c ? c.toString() : "<none>")
    };
    d.si = function(d) {
        d.pointerType !== d.MSPOINTER_TYPE_MOUSE && "mouse" !== d.pointerType && (d.preventDefault && ob(d) && d.preventDefault(), this.mn(d.pointerId.toString(), d.pageX, d.pageY))
    };
    d.ri = function(d) {
        d.pointerType !== d.MSPOINTER_TYPE_MOUSE && "mouse" !== d.pointerType && (d.preventDefault && d.preventDefault(), this.nn(d.pointerId.toString(), d.pageX, d.pageY))
    };
    d.qe = function(d) {
        d.pointerType !== d.MSPOINTER_TYPE_MOUSE && "mouse" !== d.pointerType && (d.preventDefault && ob(d) && d.preventDefault(), this.pn(d.pointerId.toString()))
    };
    d.mn = function(d, b, f) {
        var c = this.b.Aa ? p : jQuery(this.b.canvas).offset();
        b = b - c.left;
        f = f - c.top;
        var a, e, g, k, c = this.Jg.td(),
            r, u, D, l = null;
        r = 0;
        for (u = c.length; r < u; r++)
            if (D = c[r], a = h(D), a.enabled && !a.de && (a = D.i.kb(b, f, !0), e = D.i.kb(b, f, !1), D.X(), D.Yb(a, e))) l ? D.i.index > l.i.index ? (l = D, g = a, k = e) : D.i.index === l.i.index && D.Tc() > l.Tc() && (l = D, g = a, k = e) : (l = D, g = a, k = e);
        l && h(l).wx(d, g, k)
    };
    d.nn = function(d, b, f) {
        var c = this.b.Aa ? p : jQuery(this.b.canvas).offset();
        b = b - c.left;
        f = f - c.top;
        var a, e = this.Jg.td(),
            g, k, r;
        g = 0;
        for (k = e.length; g < k; g++) a = e[g], r = h(a), !r.enabled || !r.de || r.de && r.$l !== d || (c = a.i.kb(b, f, !0), a = a.i.kb(b, f, !1), r.xx(c, a))
    };
    d.pn = function(d) {
        var b = this.Jg.td(),
            f, c, a;
        f = 0;
        for (c = b.length; f < c; f++) a = b[f], a = h(a), a.de && a.$l === d && a.Ax()
    };
    d.Da = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    d.Da.prototype.S = function() {};
    d.qa = function(d, b) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = b;
        this.b = d.b
    };
    var r = d.qa.prototype;
    r.S = function() {
        this.de = !1;
        this.Jp = this.Ip = 0;
        this.$l = "<none>";
        this.Kl = this.A[0];
        this.enabled = 0 !== this.A[1]
    };
    r.Rb = function() {
        return {
            enabled: this.enabled
        }
    };
    r.jc = function(d) {
        this.enabled = d.enabled;
        this.de = !1
    };
    r.wx = function(d, b, f) {
        this.Ip = b - this.e.x;
        this.Jp = f - this.e.y;
        this.de = !0;
        this.$l = d;
        this.b.Ac = !0;
        this.b.trigger(Dc.prototype.g.Eo, this.e);
        this.b.Ac = !1
    };
    r.xx = function(d, b) {
        var f = d - this.Ip,
            c = b - this.Jp;
        if (0 === this.Kl) {
            if (this.e.x !== f || this.e.y !== c) this.e.x = f, this.e.y = c, this.e.la()
        } else 1 === this.Kl ? this.e.x !== f && (this.e.x = f, this.e.la()) : 2 === this.Kl && this.e.y !== c && (this.e.y = c, this.e.la())
    };
    r.Ax = function() {
        this.de = !1;
        this.b.Ac = !0;
        this.b.trigger(Dc.prototype.g.Fo, this.e);
        this.b.Ac = !1
    };
    r.ib = function() {};
    k.prototype.jt = function() {
        return this.de
    };
    k.prototype.Eo = function() {
        return !0
    };
    k.prototype.Fo = function() {
        return !0
    };
    d.g = new k;
    g.prototype.Ro = function(d) {
        this.enabled = 0 !== d;
        this.enabled || (this.de = !1)
    };
    d.p = new g;
    d.D = new function() {}
})();

function Ec(h) {
    this.b = h
}
(function() {
    function h() {}
    var k = Ec.prototype;
    k.Da = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    k.Da.prototype.S = function() {};
    k.qa = function(d, g) {
        this.type = d;
        this.behavior = d.behavior;
        this.e = g;
        this.b = d.b
    };
    var g = k.qa.prototype;
    g.S = function() {
        this.tb = null;
        this.Hk = -1;
        this.mode = this.Bg = this.fl = this.Ig = this.re = this.wi = 0;
        var d = this;
        this.Nc || (this.ir = function(g) {
            d.qn(g)
        });
        this.b.ep(this.ir)
    };
    g.Rb = function() {
        return {
            uid: this.tb ? this.tb.uid : -1,
            pa: this.wi,
            pd: this.re,
            msa: this.Ig,
            tsa: this.fl,
            lka: this.Bg,
            m: this.mode
        }
    };
    g.jc = function(d) {
        this.Hk = d.uid;
        this.wi = d.pa;
        this.re = d.pd;
        this.Ig = d.msa;
        this.fl = d.tsa;
        this.Bg = d.lka;
        this.mode = d.m
    };
    g.xd = function() {
        -1 === this.Hk ? this.tb = null : this.tb = this.b.Ch(this.Hk);
        this.Hk = -1
    };
    g.qn = function(d) {
        this.tb == d && (this.tb = null)
    };
    g.pe = function() {
        this.tb = null;
        this.b.Rx(this.ir)
    };
    g.ib = function() {};
    g.hl = function() {
        if (this.tb) {
            this.Bg !== this.e.j && (this.Ig = Ka(this.Ig + (this.e.j - this.Bg)));
            var d = this.e.x,
                g = this.e.y;
            if (3 === this.mode || 4 === this.mode) {
                var h = Ta(this.e.x, this.e.y, this.tb.x, this.tb.y);
                if (h > this.re || 4 === this.mode && h < this.re) g = Na(this.tb.x, this.tb.y, this.e.x, this.e.y), d = this.tb.x + Math.cos(g) * this.re, g = this.tb.y + Math.sin(g) * this.re
            } else d = this.tb.x + Math.cos(this.tb.j + this.wi) * this.re, g = this.tb.y + Math.sin(this.tb.j + this.wi) * this.re;
            this.Bg = h = Ka(this.Ig + (this.tb.j - this.fl));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.e.x === d && this.e.y === g || (this.e.x = d, this.e.y = g, this.e.la());
            0 !== this.mode && 2 !== this.mode || this.e.j === h || (this.e.j = h, this.e.la())
        }
    };
    k.g = new function() {};
    h.prototype.Zt = function(d, g) {
        if (d) {
            var h = d.aq(this.e);
            h && (this.tb = h, this.wi = Na(h.x, h.y, this.e.x, this.e.y) - h.j, this.re = Ta(h.x, h.y, this.e.x, this.e.y), this.Bg = this.Ig = this.e.j, this.fl = h.j, this.mode = g)
        }
    };
    k.p = new h;
    k.D = new function() {}
})();
var Fc = [],
    Gc = [],
    Hc = [],
    Ic = [],
    Jc = [],
    Kc = [],
    Lc = [],
    Qc = [],
    Rc = [];

function Sc(h, k) {
    return Math.round(h / k * 1E4)
}

function Tc(h, k, g, d) {
    var p = 0;
    switch (h) {
        case 0:
            p = 1 * k / g + 0;
            break;
        case 1:
            p = 1 * (k /= g) * k + 0;
            break;
        case 2:
            p = -1 * (k /= g) * (k - 2) + 0;
            break;
        case 3:
            p = 1 > (k /= g / 2) ? .5 * k * k + 0 : -.5 * (--k * (k - 2) - 1) + 0;
            break;
        case 4:
            p = 1 * (k /= g) * k * k + 0;
            break;
        case 5:
            p = 1 * ((k = k / g - 1) * k * k + 1) + 0;
            break;
        case 6:
            p = 1 > (k /= g / 2) ? .5 * k * k * k + 0 : .5 * ((k -= 2) * k * k + 2) + 0;
            break;
        case 7:
            p = 1 * (k /= g) * k * k * k + 0;
            break;
        case 8:
            p = -1 * ((k = k / g - 1) * k * k * k - 1) + 0;
            break;
        case 9:
            p = 1 > (k /= g / 2) ? .5 * k * k * k * k + 0 : -.5 * ((k -= 2) * k * k * k - 2) + 0;
            break;
        case 10:
            p = 1 * (k /= g) * k * k * k * k + 0;
            break;
        case 11:
            p = 1 * ((k = k / g - 1) * k * k * k * k +
                1) + 0;
            break;
        case 12:
            p = 1 > (k /= g / 2) ? .5 * k * k * k * k * k + 0 : .5 * ((k -= 2) * k * k * k * k + 2) + 0;
            break;
        case 13:
            p = Jc[Sc(k, g)];
            break;
        case 14:
            p = Kc[Sc(k, g)];
            break;
        case 15:
            p = Lc[Sc(k, g)];
            break;
        case 16:
            h = 0;
            0 == h && (h = 1.70158);
            p = 1 * (k /= g) * k * ((h + 1) * k - h) + 0;
            break;
        case 17:
            p = Qc[Sc(k, g)];
            break;
        case 18:
            p = Rc[Sc(k, g)];
            break;
        case 19:
            p = Gc[Sc(k, g)];
            break;
        case 20:
            p = Hc[Sc(k, g)];
            break;
        case 21:
            p = Ic[Sc(k, g)];
            break;
        case 22:
            p = 1 - Fc[Sc(g - k, g)] + 0;
            break;
        case 23:
            p = Fc[Sc(k, g)];
            break;
        case 24:
            p = k < g / 2 ? .5 * (1 - Fc[Sc(g - 2 * k, g)] + 0) + 0 : .5 * Fc[Sc(2 * k - g, g)] + .5;
            break;
        case 25:
            k = k / g / 2;
            p = 2 * k * k * (3 - 2 * k);
            break;
        case 26:
            k = (k / g + 1) / 2;
            p = 2 * k * k * (3 - 2 * k) - 1;
            break;
        case 27:
            k = k / g, p = k * k * (3 - 2 * k)
    }
    return d ? 1 - p : p
}
for (var Uc = 0, Vc = 0, Wc = 0, V = 0, X = 0, Z = 0; 1E4 >= Z; Z++) {
    V = Z / 1E4;
    (V /= 1) < 1 / 2.75 || (V < 2 / 2.75 ? V -= 1.5 / 2.75 : V < 2.5 / 2.75 ? V -= 2.25 / 2.75 : V -= 2.625 / 2.75);
    var Xc, Yc = Z / 1E4;
    Xc = (Yc /= 1) < 1 / 2.75 ? 7.5625 * Yc * Yc + 0 : Yc < 2 / 2.75 ? 1 * (7.5625 * (Yc -= 1.5 / 2.75) * Yc + .75) + 0 : Yc < 2.5 / 2.75 ? 1 * (7.5625 * (Yc -= 2.25 / 2.75) * Yc + .9375) + 0 : 1 * (7.5625 * (Yc -= 2.625 / 2.75) * Yc + .984375) + 0;
    Fc[Z] = Xc;
    V = Z / 1E4;
    Wc = Vc = 0;
    V /= 1;
    0 == Wc && (Wc = .3);
    0 == Vc || Vc < Math.abs(1) ? (Vc = 1, X = Wc / 4) : X = Wc / (2 * Math.PI) * Math.asin(1 / Vc);
    Uc = -(Vc * Math.pow(2, 10 * --V) * Math.sin(2 * (1 * V - X) * Math.PI / Wc)) + 0;
    Gc[Z] = Uc;
    V = Z / 1E4;
    Wc = Vc = 0;
    V /= 1;
    0 == Wc && (Wc = .3);
    0 == Vc || Vc < Math.abs(1) ? (Vc = 1, X = Wc / 4) : X = Wc / (2 * Math.PI) * Math.asin(1 / Vc);
    Uc = Vc * Math.pow(2, -10 * V) * Math.sin(2 * (1 * V - X) * Math.PI / Wc) + 1;
    Hc[Z] = Uc;
    V = Z / 1E4;
    Wc = Vc = 0;
    V /= .5;
    0 == Wc && (Wc = .3 * 1.5);
    0 == Vc || Vc < Math.abs(1) ? (Vc = 1, X = Wc / 4) : X = Wc / (2 * Math.PI) * Math.asin(1 / Vc);
    Uc = 1 > V ? -.5 * Vc * Math.pow(2, 10 * --V) * Math.sin(2 * (1 * V - X) * Math.PI / Wc) + 0 : Vc * Math.pow(2, -10 * --V) * Math.sin(2 * (1 * V - X) * Math.PI / Wc) * .5 + 1;
    Ic[Z] = Uc;
    V = Z / 1E4;
    Jc[Z] = -(Math.sqrt(1 - V * V) - 1);
    V = Z / 1E4;
    Kc[Z] = Math.sqrt(1 - (V - 1) * (V - 1));
    V = Z / 1E4;
    Uc = 1 > (V /= .5) ? -.5 * (Math.sqrt(1 - V * V) - 1) + 0 : .5 * (Math.sqrt(1 - (V -= 2) * V) + 1) + 0;
    Lc[Z] = Uc;
    V = Z / 1E4;
    X = 0;
    0 == X && (X = 1.70158);
    Uc = 1 * ((V = V / 1 - 1) * V * ((X + 1) * V + X) + 1) + 0;
    Qc[Z] = Uc;
    V = Z / 1E4;
    X = 0;
    0 == X && (X = 1.70158);
    Uc = 1 > (V /= .5) ? .5 * V * V * (((X *= 1.525) + 1) * V - X) + 0 : .5 * ((V -= 2) * V * (((X *= 1.525) + 1) * V + X) + 2) + 0;
    Rc[Z] = Uc
}

function Zc(h, k, g, d, p, r, q) {
    this.name = h;
    this.value = 0;
    this.Tg(d);
    this.Xk(p);
    this.vh = g;
    this.Qa = k;
    this.duration = r;
    this.state = this.ba = 0;
    this.zk = this.Ak = this.xk = this.Kg = !1;
    this.Ob = this.Na = 0;
    this.ac = q;
    this.se = 1;
    this.Bh = !1
}
Zc.prototype = {};
Zc.prototype.Tg = function(h) {
    this.ra = parseFloat(h.split(",")[0]);
    this.fb = parseFloat(h.split(",")[1]);
    this.Ob = this.Na = 0
};
Zc.prototype.Xk = function(h) {
    this.ma = parseFloat(h.split(",")[0]);
    this.Wa = parseFloat(h.split(",")[1]);
    isNaN(this.Wa) && (this.Wa = this.ma)
};
Zc.prototype.Bl = function(h) {
    if (0 === this.state) return -1;
    1 === this.state && (this.ba += h);
    2 === this.state && (this.ba -= h);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.ba += h * this.se;
    5 === this.state && (this.ba += h * this.se);
    return 0 > this.ba ? (this.ba = 0, 4 === this.state ? this.se = 1 : 6 === this.state ? (this.se = 1, this.Bh = !1) : this.state = 0, this.zk = !0, 0) : this.ba > this.duration ? (this.ba = this.duration, 4 === this.state ? this.se = -1 : 6 === this.state ? (this.se = -1, this.Bh = !0) : 5 === this.state ? this.ba = 0 : this.state = 0, this.xk = !0, 1) : this.Bh ? Tc(this.vh, this.duration - this.ba, this.duration, this.Bh) : Tc(this.vh, this.ba, this.duration, this.Bh)
};

function ad(h) {
    this.b = h
}
(function() {
    var h = ad.prototype;
    h.Da = function(g) {
        this.behavior = g;
        this.b = g.b
    };
    h.Da.prototype.S = function() {};
    h.qa = function(g, d) {
        this.type = g;
        this.behavior = g.behavior;
        this.e = d;
        this.b = g.b
    };
    var k = h.qa.prototype;
    k.S = function() {
        this.Ng = this.A[0];
        this.Xb = 1 == this.Ng || 2 == this.Ng || 3 == this.Ng || 4 == this.Ng;
        this.Qa = this.A[1];
        this.am = this.A[2];
        this.target = this.A[3];
        this.cl = this.A[4];
        this.ol = !1;
        1 === this.cl && (this.target = "relative(" + this.target + ")");
        this.duration = this.A[5];
        this.ac = 1 === this.A[6];
        this.value = 0;
        this.B = {};
        this.hp(this.Qa, this.am, "current", this.target, this.duration, this.ac);
        1 === this.A[0] && this.Ji(0);
        2 === this.A[0] && this.Ji(2);
        3 === this.A[0] && this.Ji(3);
        4 === this.A[0] && this.Ji(4)
    };
    k.Md = function(g, d) {
        void 0 === d && (d = "current");
        var h = d.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        d = d.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var k = this.value;
        if ("current" === d) switch (g) {
            case 0:
                h = this.e.x + "," + this.e.y;
                break;
            case 1:
                h = this.e.width + "," + this.e.height;
                break;
            case 2:
                h = this.e.width + "," + this.e.height;
                break;
            case 3:
                h = this.e.width +
                    "," + this.e.height;
                break;
            case 4:
                h = Fa(this.e.j) + "," + Fa(this.e.j);
                break;
            case 5:
                h = 100 * this.e.opacity + "," + 100 * this.e.opacity;
                break;
            case 6:
                h = k + "," + k;
                break;
            case 7:
                h = this.e.x + "," + this.e.y;
                break;
            case 8:
                h = this.e.x + "," + this.e.y;
                break;
            case 9:
                h = void 0 !== this.e.Sa ? this.e.width / this.e.Sa.width + "," + this.e.height / this.e.Sa.height : "1,1"
        }
        if ("relative" === d.substring(0, 8)) {
            var q = d.match(/\((.*?)\)/);
            if (q) var b = parseFloat(q[1].split(",")[0]),
                f = parseFloat(q[1].split(",")[1]);
            isNaN(b) && (b = 0);
            isNaN(f) && (f = 0);
            switch (g) {
                case 0:
                    h = this.e.x + b + "," + (this.e.y + f);
                    break;
                case 1:
                    h = this.e.width + b + "," + (this.e.height + f);
                    break;
                case 2:
                    h = this.e.width + b + "," + (this.e.height + f);
                    break;
                case 3:
                    h = this.e.width + b + "," + (this.e.height + f);
                    break;
                case 4:
                    h = Fa(this.e.j) + b + "," + (Fa(this.e.j) + f);
                    break;
                case 5:
                    h = 100 * this.e.opacity + b + "," + (100 * this.e.opacity + f);
                    break;
                case 6:
                    h = k + b + "," + k + b;
                    break;
                case 7:
                    h = this.e.x + b + "," + this.e.y;
                    break;
                case 8:
                    h = this.e.x + "," + (this.e.y + b);
                    break;
                case 9:
                    h = b + "," + f
            }
        }
        return h
    };
    k.hp = function(g, d, h, k, q, b) {
        h = this.Md(g, h);
        k = this.Md(g, k);
        void 0 !== this.B["default"] && delete this.B["default"];
        this.B["default"] = new Zc("default", g, d, h, k, q, b);
        this.B["default"].Se = 0
    };
    k.Rb = function() {
        JSON.stringify(this.B["default"]);
        return {
            playmode: this.Ng,
            active: this.Xb,
            tweened: this.Qa,
            easing: this.am,
            target: this.target,
            targetmode: this.cl,
            useCurrent: this.ol,
            duration: this.duration,
            enforce: this.ac,
            value: this.value,
            tweenlist: JSON.stringify(this.B["default"])
        }
    };
    Zc.ot = function(g, d, h, k, q, b, f, c) {
        d = new Zc(d, h, k, q, b, f, c);
        for (var a in g) d[a] = g[a];
        return d
    };
    k.jc = function(g) {
        var d = JSON.parse(g.tweenlist),
            d = Zc.ot(d, d.name, d.Qa, d.vh, d.ra + "," + d.fb, d.ma + "," + d.Wa, d.duration, d.ac);
        this.B["default"] = d;
        this.Ng = g.playmode;
        this.Xb = g.active;
        this.am = g.easing;
        this.target = g.target;
        this.cl = g.targetmode;
        this.ol = g.useCurrent;
        this.duration = g.duration;
        this.ac = g.enforce;
        this.value = g.value
    };
    k.hy = function(g) {
        1 < g && (g = 1);
        0 > g && (g = 0);
        for (var d in this.B) {
            var h = this.B[d];
            h.Na = 0;
            h.Ob = 0;
            h.state = 3;
            h.ba = g * h.duration;
            var k = h.Bl(0);
            this.po(h, k)
        }
    };
    k.Ji = function(g) {
        for (var d in this.B) {
            var h = this.B[d];
            if (this.ol) {
                var k = this.Md(h.Qa, "current"),
                    q = this.Md(h.Qa, this.target);
                h.Tg(k);
                h.Xk(q)
            }
            0 === g && (h.ba = 1E-6, h.Na = 0, h.Ob = 0, h.Kg = !0, h.state = 1);
            1 === g && (h.state = 1);
            if (2 === g || 4 === g) h.ba = 1E-6, h.Na = 0, h.Ob = 0, h.Kg = !0, 2 == g && (h.state = 4), 4 == g && (h.state = 6);
            3 === g && (h.ba = 1E-6, h.Na = 0, h.Ob = 0, h.Kg = !0, h.state = 5)
        }
    };
    k.oy = function(g) {
        for (var d in this.B) {
            var h = this.B[d];
            1 === g && (h.ba = 0);
            2 === g && (h.ba = h.duration);
            h.state = 3;
            var k = h.Bl(0);
            this.po(h, k)
        }
    };
    k.Wx = function(g) {
        for (var d in this.B) {
            var h = this.B[d];
            1 === g && (h.ba = h.duration, h.Na = 0, h.Ob = 0, h.Ak = !0);
            h.state = 2
        }
    };
    k.po = function(g, d) {
        var h = 1,
            k = 1;
        0 > this.e.width && (h = -1);
        0 > this.e.height && (k = -1);
        0 === g.Qa ? g.ac ? (this.e.x = g.ra + (g.ma - g.ra) * d, this.e.y = g.fb + (g.Wa - g.fb) * d) : (this.e.x += (g.ma - g.ra) * d - g.Na, this.e.y += (g.Wa - g.fb) * d - g.Ob, g.Na = (g.ma - g.ra) * d, g.Ob = (g.Wa - g.fb) * d) : 1 === g.Qa ? g.ac ? (this.e.width = h * g.ra + (g.ma - g.ra) * d * h, this.e.height = k * g.fb + (g.Wa - g.fb) * d * k) : (this.e.width += h * (g.ma - g.ra) * d - g.Na, this.e.height += k * (g.Wa - g.fb) * d - g.Ob, g.Na = h * (g.ma - g.ra) * d, g.Ob = k * (g.Wa - g.fb) * d) : 2 === g.Qa ? g.ac ? this.e.width = h * g.ra + (g.ma - g.ra) * d * h : (this.e.width += h * (g.ma - g.ra) * d - g.Na, g.Na = h * (g.ma - g.ra) * d) : 3 === g.Qa ? g.ac ? this.e.height = k * g.fb + (g.Wa - g.fb) * d * k : (this.e.height += k * (g.Wa - g.fb) * d - g.Ob, g.Ob = k * (g.Wa - g.fb) * d) : 4 === g.Qa ? g.ac ? (h = g.ra + (g.ma - g.ra) * d, this.e.j = Ka(K(h))) : (h = (g.ma - g.ra) * d - g.Na, this.e.j = Ka(this.e.j + K(h)), g.Na = (g.ma - g.ra) * d) : 5 === g.Qa ? g.ac ? this.e.opacity = (g.ra + (g.ma - g.ra) * d) / 100 : (this.e.opacity += ((g.ma - g.ra) * d - g.Na) / 100, g.Na = (g.ma - g.ra) * d) : 6 === g.Qa ? g.ac ? this.value = g.ra + (g.ma - g.ra) * d : (this.value += (g.ma - g.ra) * d - g.Na, g.Na = (g.ma - g.ra) * d) : 7 === g.Qa ? g.ac ? this.e.x = g.ra + (g.ma - g.ra) * d : (this.e.x += (g.ma - g.ra) * d - g.Na, g.Na = (g.ma - g.ra) * d) : 8 === g.Qa ? g.ac ? this.e.y = g.fb + (g.Wa - g.fb) * d : (this.e.y += (g.Wa - g.fb) * d - g.Ob, g.Ob = (g.Wa - g.fb) * d) : 9 === g.Qa && (h = g.ra + (g.ma - g.ra) * d, k = g.fb + (g.Wa - g.fb) * d, 0 > this.e.width && (h = g.ra + (g.ma + g.ra) * -d), 0 > this.e.height && (k = g.fb + (g.Wa + g.fb) * -d), g.ac ? (this.e.width = this.e.Sa.width * h, this.e.height = this.e.Sa.height * k) : (0 > this.e.width ? (this.e.width = this.e.width / (-1 + g.Na) * h, g.Na = h + 1) : (this.e.width = this.e.width / (1 + g.Na) * h, g.Na = h - 1), 0 > this.e.height ? (this.e.height = this.e.height / (-1 + g.Ob) * k, g.Ob = k + 1) : (this.e.height = this.e.height / (1 + g.Ob) * k, g.Ob = k - 1)));
        this.e.la()
    };
    k.ib = function() {
        var g = this.b.om(this.e),
            d = this.B["default"];
        0 !== d.state && (d.Kg && (this.b.trigger(ad.prototype.g.Rt, this.e), d.Kg = !1), d.Ak && (this.b.trigger(ad.prototype.g.Pt, this.e), d.Ak = !1), this.Xb = 1 == d.state || 2 == d.state || 4 == d.state || 5 == d.state || 6 == d.state, g = d.Bl(g), this.po(d, g), d.xk && (this.b.trigger(ad.prototype.g.Go, this.e), d.xk = !1), d.zk && (this.b.trigger(ad.prototype.g.Ot, this.e), d.zk = !1))
    };
    h.g = {};
    k = h.g;
    k.Sy = function() {
        return 0 !== this.B["default"].state
    };
    k.Xy = function() {
        return 2 == this.B["default"].state
    };
    k.Py = function(g, d) {
        var h = this.B["default"];
        return gc(h.ba / h.duration, g, d)
    };
    k.Rt = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].Kg
    };
    k.Pt = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].Ak
    };
    k.Go = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].xk
    };
    k.Ot = function() {
        return void 0 === this.B["default"] ? !1 : this.B["default"].zk
    };
    h.p = {};
    k = h.p;
    k.tu = function(g, d) {
        this.ol = 1 == d;
        this.Ji(g)
    };
    k.To = function(g) {
        this.oy(g)
    };
    k.jz = function(g) {
        this.Wx(g)
    };
    k.iz = function(g) {
        this.hy(g)
    };
    k.du = function(g) {
        isNaN(g) || 0 > g || void 0 === this.B["default"] || (this.B["default"].duration = g)
    };
    k.uz = function(g) {
        void 0 !== this.B["default"] && (this.B["default"].ac = 1 === g)
    };
    k.wz = function(g) {
        void 0 !== this.B["default"] && (g = this.Md(this.B["default"].Qa, g), this.B["default"].Tg(g))
    };
    k.mu = function(g, d, h) {
        if (void 0 !== this.B["default"] && !isNaN(h)) {
            var k = this.B["default"],
                q = h + "";
            this.cl = d;
            var b = "",
                f = "";
            if (1 === d) {
                this.target = "relative(" + q + ")";
                switch (g) {
                    case 0:
                        b = this.e.x + h;
                        f = k.Wa;
                        break;
                    case 1:
                        b = k.ma;
                        f = this.e.y + h;
                        break;
                    case 2:
                        f = b = "" + Fa(this.e.j + K(h));
                        break;
                    case 3:
                        f = b = "" + 100 * this.e.opacity + h;
                        break;
                    case 4:
                        b = this.e.width + h;
                        f = k.Wa;
                        break;
                    case 5:
                        b = k.ma;
                        f = this.e.height + h;
                        break;
                    case 6:
                        f = b = h
                }
                q = b + "," + f
            } else {
                switch (g) {
                    case 0:
                        b = h;
                        f = k.Wa;
                        break;
                    case 1:
                        b = k.ma;
                        f = h;
                        break;
                    case 2:
                        f = b = h;
                        break;
                    case 3:
                        f = b = h;
                        break;
                    case 4:
                        b = h;
                        f = k.Wa;
                        break;
                    case 5:
                        b = k.ma;
                        f = h;
                        break;
                    case 6:
                        f = b = h
                }
                this.target = q = b +
                    "," + f
            }
            g = this.Md(this.B["default"].Qa, "current");
            q = this.Md(this.B["default"].Qa, q);
            k.Tg(g);
            k.Xk(q)
        }
    };
    k.Az = function(g) {
        void 0 !== this.B["default"] && (this.B["default"].Qa = g)
    };
    k.qz = function(g) {
        void 0 !== this.B["default"] && (this.B["default"].vh = g)
    };
    k.Bz = function(g) {
        var d = this.B["default"];
        this.value = g;
        6 === d.Qa && d.Tg(this.Md(d.Qa, "current"))
    };
    k.xz = function(g, d, h, k, q) {
        if (void 0 === this.B["default"]) this.hp(g, d, initial, h, k, q);
        else {
            var b = this.B["default"];
            b.Qa = g;
            b.vh = d;
            b.Tg(this.Md(g, "current"));
            b.Xk(this.Md(g, h));
            b.duration = k;
            b.ac = 1 === q
        }
    };
    h.D = {};
    h = h.D;
    h.Cz = function(g) {
        var d = "N/A";
        switch (this.B["default"].state) {
            case 0:
                d = "paused";
                break;
            case 1:
                d = "playing";
                break;
            case 2:
                d = "reversing";
                break;
            case 3:
                d = "seeking"
        }
        g.Db(d)
    };
    h.hz = function(g) {
        g.r(this.B["default"].ba / this.B["default"].duration)
    };
    h.Ys = function(g) {
        g.r(this.B["default"].duration)
    };
    h.Dz = function(g) {
        var d = this.B["default"],
            h = "N/A";
        switch (d.Qa) {
            case 0:
                h = d.ma;
                break;
            case 1:
                h = d.Wa;
                break;
            case 2:
                h = d.ma;
                break;
            case 3:
                h = d.ma;
                break;
            case 4:
                h = d.ma;
                break;
            case 5:
                h = d.Wa;
                break;
            case 6:
                h = d.ma
        }
        g.r(h)
    };
    h.Gz = function(g) {
        g.r(this.value)
    };
    h.Fz = function(g, d, h, k, q) {
        k = 1 < k ? 1 : k;
        q = Tc(q, 0 > k ? 0 : k, 1, !1);
        g.r(d + q * (h - d))
    }
})();

function pc() {
    return [rc, sc, Ac, qc, wc, Bc, T, xc, yc, zc, Dc, Ec, ad, Cc, N.prototype.g.Io, T.prototype.p.yo, Bc.prototype.p.yo, qc.prototype.p.CallFunction, N.prototype.p.gu, xc.prototype.p.pu, T.prototype.p.ju, N.prototype.D.Cy, T.prototype.D.nt, N.prototype.D.Ey, N.prototype.D.Dy, N.prototype.D.By, N.prototype.p.Xs, N.prototype.D.ix, N.prototype.D.hx, T.prototype.p.cu, T.prototype.p.So, T.prototype.p.lu, qc.prototype.D.xo, T.prototype.D.zu, T.prototype.D.gt, T.prototype.D.Bo, T.prototype.D.Ao, N.prototype.g.ct, N.prototype.D.lx, qc.prototype.D.au, N.prototype.p.ou, N.prototype.p.yu, T.prototype.p.gh, zc.prototype.g.Cl, T.prototype.g.kt, ad.prototype.p.To, T.prototype.p.eu, rc.prototype.p.Play, N.prototype.p.et, Dc.prototype.g.Eo, T.prototype.D.Uo, T.prototype.p.Wi, Bc.prototype.p.iu, N.prototype.g.Xt, T.prototype.D.Vo, T.prototype.D.Wo, N.prototype.g.dt, Bc.prototype.g.Qo, Bc.prototype.p.Wi, Dc.prototype.g.jt, Dc.prototype.g.Fo, T.prototype.g.Us, T.prototype.p.ru, T.prototype.g.Vs, T.prototype.p.su, T.prototype.D.Yt, N.prototype.g.Wt, N.prototype.g.Qs, N.prototype.D.cv, qc.prototype.g.$i, qc.prototype.D.Ut, Dc.prototype.p.Ro, T.prototype.p.aj, Bc.prototype.p.So, Bc.prototype.p.Vt, Ec.prototype.p.Zt, Bc.prototype.D.Uo, T.prototype.p.bu, T.prototype.g.Qo, N.prototype.D["int"], qc.prototype.p.ku, ad.prototype.g.Go, T.prototype.g.Ss, T.prototype.p.uu, N.prototype.g.zo, N.prototype.p.Is, N.prototype.g.Ts, ad.prototype.p.mu, ad.prototype.p.tu, ad.prototype.p.du, N.prototype.g.xu, yc.prototype.p.gh, xc.prototype.p.gh, yc.prototype.p.Wi, xc.prototype.p.Wi, wc.prototype.p.fu, T.prototype.g.Rs, N.prototype.g.Zs, T.prototype.D.Ks, xc.prototype.p.nu, N.prototype.D.random, T.prototype.p.Co, wc.prototype.p.Ms, N.prototype.g.$s, wc.prototype.g.Ho, wc.prototype.D.lt, rc.prototype.p.hu, T.prototype.D.Ws, Ac.prototype.p.gh, N.prototype.p.vu, Ac.prototype.g.Do, Ac.prototype.D.bt, sc.prototype.p.ft, wc.prototype.p.$t, sc.prototype.p.Ps]
};