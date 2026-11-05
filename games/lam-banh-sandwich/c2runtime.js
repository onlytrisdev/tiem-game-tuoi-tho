'use strict';
var ba = {},
    ca, da, fa, ga, ha, ia, ja, ka, la, ma, na, oa, sa, ta, ua, va, wa, ya, za, Aa, Ba, C, Da, Ea, Fa, Ga, Ha, D, Ia, Ja, Ka, La, Na, Oa, Pa, Qa, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(g) {
    return g.__proto__
} : function(g) {
    return g.constructor.prototype
});
(function() {
    function g(a, d, k, c) {
        this.set(a, d, k, c)
    }

    function f() {
        this.bb = this.ab = this.eb = this.cb = this.rb = this.qb = this.Ga = this.Fa = 0
    }

    function b(a, d, k, c) {
        a < d ? k < c ? (h = a < k ? a : k, v = d > c ? d : c) : (h = a < c ? a : c, v = d > k ? d : k) : k < c ? (h = d < k ? d : k, v = a > c ? a : c) : (h = d < c ? d : c, v = a > k ? a : k)
    }

    function u() {
        this.items = this.gc = null;
        this.Fh = 0;
        E && (this.gc = new Set);
        this.Ig = [];
        this.se = !0
    }

    function r(a) {
        z[aa++] = a
    }

    function q() {
        this.K = this.Eg = this.y = this.Tg = 0
    }

    function t(a) {
        this.pb = [];
        this.Gi = this.Ii = this.Ji = this.Hi = 0;
        this.bi(a)
    }

    function m(a, d) {
        this.Xk = a;
        this.Wk = d;
        this.cells = {}
    }

    function p(a, d) {
        this.Xk = a;
        this.Wk = d;
        this.cells = {}
    }

    function e(a, d, k) {
        var c;
        return R.length ? (c = R.pop(), c.wl = a, c.x = d, c.y = k, c) : new da(a, d, k)
    }

    function a(a, d, k) {
        this.wl = a;
        this.x = d;
        this.y = k;
        this.wb = new fa
    }

    function c(a, d, k) {
        var c;
        return U.length ? (c = U.pop(), c.wl = a, c.x = d, c.y = k, c) : new ga(a, d, k)
    }

    function x(a, d, k) {
        this.wl = a;
        this.x = d;
        this.y = k;
        this.wb = [];
        this.ag = !0;
        this.yd = new fa;
        this.Qg = !1
    }

    function d(a, d) {
        return a.jd - d.jd
    }
    ha = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ia = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ca = function(a) {
        return a
    };
    ja = function(a) {
        return "undefined" === typeof a
    };
    ka = function(a) {
        return "number" === typeof a
    };
    la = function(a) {
        return "string" === typeof a
    };
    ma = function(a) {
        return 0 > a ? -a : a
    };
    na = function(a, d) {
        return a > d ? a : d
    };
    oa = function(a, d) {
        return a < d ? a : d
    };
    sa = Math.PI;
    ta = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ua = function(a) {
        var d = a | 0;
        return d === a ? d : d + 1
    };
    va = function(a, d, k, c, l, w, y, b) {
        var h, e, p, n;
        a < k ? (e = a, h = k) : (e = k, h = a);
        l < y ? (n = l, p = y) : (n = y, p = l);
        if (h < n || e > p) return !1;
        d < c ? (e = d, h = c) : (e = c, h = d);
        w < b ? (n = w, p = b) : (n = b, p = w);
        if (h < n || e > p) return !1;
        h = l - a + y - k;
        e = w - d + b - c;
        a = k - a;
        d = c - d;
        l = y - l;
        w = b - w;
        b = ma(d * l - w * a);
        return ma(l * e - w * h) > b ? !1 : ma(a * e - d * h) <= b
    };
    g.prototype.set = function(a, d, k, c) {
        this.left = a;
        this.top = d;
        this.right = k;
        this.bottom = c
    };
    g.prototype.Jf = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    g.prototype.width = function() {
        return this.right - this.left
    };
    g.prototype.height = function() {
        return this.bottom - this.top
    };
    g.prototype.offset = function(a, d) {
        this.left += a;
        this.top += d;
        this.right += a;
        this.bottom += d;
        return this
    };
    g.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    g.prototype.Gu = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    g.prototype.Hu = function(a, d, k) {
        return !(a.right + d < this.left || a.bottom + k < this.top || a.left + d > this.right || a.top +
            k > this.bottom)
    };
    g.prototype.Kb = function(a, d) {
        return a >= this.left && a <= this.right && d >= this.top && d <= this.bottom
    };
    g.prototype.$g = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    wa = g;
    f.prototype.ai = function(a) {
        this.Fa = a.left;
        this.Ga = a.top;
        this.qb = a.right;
        this.rb = a.top;
        this.cb = a.right;
        this.eb = a.bottom;
        this.ab = a.left;
        this.bb = a.bottom
    };
    f.prototype.Yp = function(a, d) {
        if (0 === d) this.ai(a);
        else {
            var k = Math.sin(d),
                c = Math.cos(d),
                l = a.left * k,
                w = a.top * k,
                y = a.right * k,
                k = a.bottom * k,
                b = a.left * c,
                h = a.top * c,
                e = a.right * c,
                c = a.bottom * c;
            this.Fa = b - w;
            this.Ga = h + l;
            this.qb = e - w;
            this.rb = h + y;
            this.cb = e - k;
            this.eb = c + y;
            this.ab = b - k;
            this.bb = c + l
        }
    };
    f.prototype.offset = function(a, d) {
        this.Fa += a;
        this.Ga += d;
        this.qb += a;
        this.rb += d;
        this.cb += a;
        this.eb += d;
        this.ab += a;
        this.bb += d;
        return this
    };
    var h = 0,
        v = 0;
    f.prototype.Un = function(a) {
        b(this.Fa, this.qb, this.cb, this.ab);
        a.left = h;
        a.right = v;
        b(this.Ga, this.rb, this.eb, this.bb);
        a.top = h;
        a.bottom = v
    };
    f.prototype.Kb = function(a, d) {
        var k = this.Fa,
            c = this.Ga,
            l = this.qb -
            k,
            w = this.rb - c,
            y = this.cb - k,
            b = this.eb - c,
            h = a - k,
            e = d - c,
            p = l * l + w * w,
            n = l * y + w * b,
            w = l * h + w * e,
            v = y * y + b * b,
            m = y * h + b * e,
            x = 1 / (p * v - n * n),
            l = (v * w - n * m) * x,
            p = (p * m - n * w) * x;
        if (0 <= l && 0 < p && 1 > l + p) return !0;
        l = this.ab - k;
        w = this.bb - c;
        p = l * l + w * w;
        n = l * y + w * b;
        w = l * h + w * e;
        x = 1 / (p * v - n * n);
        l = (v * w - n * m) * x;
        p = (p * m - n * w) * x;
        return 0 <= l && 0 < p && 1 > l + p
    };
    f.prototype.qe = function(a, d) {
        if (d) switch (a) {
            case 0:
                return this.Fa;
            case 1:
                return this.qb;
            case 2:
                return this.cb;
            case 3:
                return this.ab;
            case 4:
                return this.Fa;
            default:
                return this.Fa
        } else switch (a) {
            case 0:
                return this.Ga;
            case 1:
                return this.rb;
            case 2:
                return this.eb;
            case 3:
                return this.bb;
            case 4:
                return this.Ga;
            default:
                return this.Ga
        }
    };
    f.prototype.$o = function() {
        return (this.Fa + this.qb + this.cb + this.ab) / 4
    };
    f.prototype.bp = function() {
        return (this.Ga + this.rb + this.eb + this.bb) / 4
    };
    f.prototype.Lo = function(a) {
        var d = a.$o(),
            k = a.bp();
        if (this.Kb(d, k)) return !0;
        d = this.$o();
        k = this.bp();
        if (a.Kb(d, k)) return !0;
        var c, l, w, y, b, h, e, p;
        for (e = 0; 4 > e; e++)
            for (p = 0; 4 > p; p++)
                if (d = this.qe(e, !0), k = this.qe(e, !1), c = this.qe(e + 1, !0), l = this.qe(e + 1, !1), w = a.qe(p, !0), y = a.qe(p, !1), b = a.qe(p + 1, !0), h = a.qe(p + 1, !1), va(d, k, c, l, w, y, b, h)) return !0;
        return !1
    };
    ya = f;
    za = function(a, d) {
        for (var k in d) d.hasOwnProperty(k) && (a[k] = d[k]);
        return a
    };
    Aa = function(a, d) {
        var k, c;
        d = ta(d);
        if (!(0 > d || d >= a.length)) {
            k = d;
            for (c = a.length - 1; k < c; k++) a[k] = a[k + 1];
            Ba(a, c)
        }
    };
    Ba = function(a, d) {
        a.length = d
    };
    C = function(a) {
        Ba(a, 0)
    };
    Da = function(a, d) {
        C(a);
        var k, c;
        k = 0;
        for (c = d.length; k < c; ++k) a[k] = d[k]
    };
    Ea = function(a, d) {
        a.push.apply(a, d)
    };
    Fa = function(a, d) {
        var k, c;
        k = 0;
        for (c = a.length; k < c; ++k)
            if (a[k] === d) return k;
        return -1
    };
    Ga = function(a, d) {
        var k = Fa(a, d); - 1 !== k && Aa(a, k)
    };
    Ha = function(a, d, k) {
        return a < d ? d : a > k ? k : a
    };
    D = function(a) {
        return a / (180 / sa)
    };
    Ia = function(a) {
        return 180 / sa * a
    };
    Ja = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ka = function(a) {
        a %= 2 * sa;
        0 > a && (a += 2 * sa);
        return a
    };
    La = function(a) {
        return Ja(Ia(a))
    };
    Na = function(a) {
        return Ka(D(a))
    };
    Oa = function(a, d, k, c) {
        return Math.atan2(c - d, k - a)
    };
    Pa = function(a, d) {
        if (a === d) return 0;
        var k = Math.sin(a),
            c = Math.cos(a),
            l = Math.sin(d),
            w = Math.cos(d),
            k = k * l + c * w;
        return 1 <= k ? 0 : -1 >= k ? sa : Math.acos(k)
    };
    Qa = function(a, d, k) {
        var c = Math.sin(a),
            l = Math.cos(a),
            w = Math.sin(d),
            y = Math.cos(d);
        return Math.acos(c * w + l * y) > k ? 0 < l * w - c * y ? Ka(a + k) : Ka(a - k) : Ka(d)
    };
    Sa = function(a, d) {
        var k = Math.sin(a),
            c = Math.cos(a),
            l = Math.sin(d),
            w = Math.cos(d);
        return 0 >= c * l - k * w
    };
    Ta = function(a, d, k, c, l, w) {
        if (0 === k) return w ? a : d;
        var y = Math.sin(k);
        k = Math.cos(k);
        a -= c;
        d -= l;
        var b = a * y;
        a = a * k - d * y;
        d = d * k + b;
        return w ? a + c : d + l
    };
    Ua = function(a, d, k, c) {
        a = k - a;
        d = c - d;
        return Math.sqrt(a * a + d * d)
    };
    Va = function(a, d) {
        return !a !== !d
    };
    Wa = function(a) {
        for (var d in a)
            if (a.hasOwnProperty(d)) return !0;
        return !1
    };
    Xa = function(a) {
        for (var d in a) a.hasOwnProperty(d) && delete a[d]
    };
    var n = +new Date;
    Ya = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - n
    };
    var k = !1,
        l = k = !1,
        Y = !1;
    "undefined" !== typeof window && (k = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), k = !k && /safari/i.test(navigator.userAgent), l = /(iphone|ipod|ipad)/i.test(navigator.userAgent), Y = window.c2ejecta);
    var E = !k && !Y && !l && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    u.prototype.contains = function(a) {
        return this.Rd() ? !1 : E ? this.gc.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    u.prototype.add = function(a) {
        if (E) this.gc.has(a) || (this.gc.add(a), this.se = !1);
        else {
            var d = a.toString(),
                k = this.items;
            k ? k.hasOwnProperty(d) || (k[d] = a, this.Fh++, this.se = !1) : (this.items = {}, this.items[d] = a, this.Fh = 1, this.se = !1)
        }
    };
    u.prototype.remove = function(a) {
        if (!this.Rd())
            if (E) this.gc.has(a) && (this.gc["delete"](a), this.se = !1);
            else if (this.items) {
            a = a.toString();
            var d = this.items;
            d.hasOwnProperty(a) && (delete d[a], this.Fh--, this.se = !1)
        }
    };
    u.prototype.clear = function() {
        this.Rd() || (E ? this.gc.clear() : (this.items = null, this.Fh = 0), C(this.Ig), this.se = !0)
    };
    u.prototype.Rd = function() {
        return 0 === this.count()
    };
    u.prototype.count = function() {
        return E ? this.gc.size : this.Fh
    };
    var z = null,
        aa = 0;
    u.prototype.mw = function() {
        if (!this.se) {
            if (E) C(this.Ig), z = this.Ig, aa = 0, this.gc.forEach(r), z = null, aa = 0;
            else {
                var a = this.Ig;
                C(a);
                var d, k = 0,
                    c = this.items;
                if (c)
                    for (d in c) c.hasOwnProperty(d) && (a[k++] = c[d])
            }
            this.se = !0
        }
    };
    u.prototype.Oe = function() {
        this.mw();
        return this.Ig
    };
    fa = u;
    new fa;
    Za = function(a, d) {
        E ? $a(a, d.gc) : ab(a, d.Oe())
    };
    $a = function(a, d) {
        var k, c, l, w;
        c = k = 0;
        for (l = a.length; k < l; ++k) w = a[k], d.has(w) || (a[c++] = w);
        Ba(a, c)
    };
    ab = function(a, d) {
        var k, c, l, w;
        c = k = 0;
        for (l = a.length; k < l; ++k) w = a[k], -1 === Fa(d, w) && (a[c++] = w);
        Ba(a, c)
    };
    q.prototype.add = function(a) {
        this.y = a - this.Tg;
        this.Eg = this.K + this.y;
        this.Tg = this.Eg - this.K - this.y;
        this.K = this.Eg
    };
    q.prototype.reset = function() {
        this.K = this.Eg = this.y = this.Tg = 0
    };
    gb = q;
    hb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    t.prototype.bi = function(a) {
        this.Hp = a;
        this.cd = a.length / 2;
        this.pb.length = a.length;
        this.Ki = this.Li = -1;
        this.Wn = 0
    };
    t.prototype.Yf = function() {
        return !this.Hp.length
    };
    t.prototype.ra = function() {
        for (var a = this.pb, d = a[0], k = d, c = a[1], l = c, w, y, b = 1, h = this.cd; b < h; ++b) y = 2 * b, w = a[y], y = a[y + 1], w < d && (d = w), w > k && (k = w), y < c && (c = y), y > l && (l = y);
        this.Hi = d;
        this.Ii = k;
        this.Ji = c;
        this.Gi = l
    };
    t.prototype.ai = function(a, d, k) {
        this.pb.length = 8;
        this.cd = 4;
        var c = this.pb;
        c[0] = a.left - d;
        c[1] = a.top - k;
        c[2] = a.right - d;
        c[3] = a.top - k;
        c[4] = a.right - d;
        c[5] = a.bottom - k;
        c[6] = a.left - d;
        c[7] = a.bottom - k;
        this.Li = a.right - a.left;
        this.Ki = a.bottom - a.top;
        this.ra()
    };
    t.prototype.Bg = function(a, d, k, c, l) {
        this.pb.length = 8;
        this.cd = 4;
        var w = this.pb;
        w[0] = a.Fa - d;
        w[1] = a.Ga - k;
        w[2] = a.qb - d;
        w[3] = a.rb - k;
        w[4] = a.cb - d;
        w[5] = a.eb - k;
        w[6] = a.ab - d;
        w[7] = a.bb - k;
        this.Li = c;
        this.Ki = l;
        this.ra()
    };
    t.prototype.Xp = function(a) {
        this.cd = a.cd;
        Da(this.pb, a.pb);
        this.Hi = a.Hi;
        this.Ji - a.Ji;
        this.Ii = a.Ii;
        this.Gi = a.Gi
    };
    t.prototype.Gf = function(a, d, k) {
        if (this.Li !== a || this.Ki !== d || this.Wn !== k) {
            this.Li = a;
            this.Ki = d;
            this.Wn = k;
            var c, l, w, y, b, h = 0,
                e = 1,
                p = this.Hp,
                n = this.pb;
            0 !== k && (h = Math.sin(k), e = Math.cos(k));
            k = 0;
            for (w = this.cd; k < w; k++) c = 2 * k, l = c + 1, y = p[c] * a, b = p[l] * d, n[c] = y * e - b * h, n[l] = b * e + y * h;
            this.ra()
        }
    };
    t.prototype.Kb = function(a, d) {
        var k = this.pb;
        if (a === k[0] && d === k[1]) return !0;
        var c, l, w, y = this.cd,
            b = this.Hi - 110,
            h = this.Ji -
            101,
            e = this.Ii + 131,
            p = this.Gi + 120,
            n, v, x = 0,
            m = 0;
        for (c = 0; c < y; c++) l = 2 * c, w = (c + 1) % y * 2, n = k[l], l = k[l + 1], v = k[w], w = k[w + 1], va(b, h, a, d, n, l, v, w) && x++, va(e, p, a, d, n, l, v, w) && m++;
        return 1 === x % 2 || 1 === m % 2
    };
    t.prototype.sh = function(a, d, k) {
        var c = a.pb,
            l = this.pb;
        if (this.Kb(c[0] + d, c[1] + k) || a.Kb(l[0] - d, l[1] - k)) return !0;
        var w, y, b, h, e, p, n, v, x, m, f, g;
        w = 0;
        for (h = this.cd; w < h; w++)
            for (y = 2 * w, b = (w + 1) % h * 2, v = l[y], y = l[y + 1], x = l[b], m = l[b + 1], b = 0, n = a.cd; b < n; b++)
                if (e = 2 * b, p = (b + 1) % n * 2, f = c[e] + d, e = c[e + 1] + k, g = c[p] + d, p = c[p + 1] + k, va(v, y, x, m, f, e, g, p)) return !0;
        return !1
    };
    ib = t;
    m.prototype.Ae = function(a, d, k) {
        var c;
        c = this.cells[a];
        return c ? (c = c[d]) ? c : k ? (c = e(this, a, d), this.cells[a][d] = c) : null : k ? (c = e(this, a, d), this.cells[a] = {}, this.cells[a][d] = c) : null
    };
    m.prototype.Wb = function(a) {
        return ta(a / this.Xk)
    };
    m.prototype.Xb = function(a) {
        return ta(a / this.Wk)
    };
    m.prototype.update = function(a, d, k) {
        var c, l, w, y, b;
        if (d)
            for (c = d.left, l = d.right; c <= l; ++c)
                for (w = d.top, y = d.bottom; w <= y; ++w)
                    if (!k || !k.Kb(c, w))
                        if (b = this.Ae(c, w, !1)) b.remove(a), b.Rd() && (b.wb.clear(), 1E3 > R.length && R.push(b), this.cells[c][w] = null);
        if (k)
            for (c = k.left, l = k.right; c <= l; ++c)
                for (w = k.top, y = k.bottom; w <= y; ++w) d && d.Kb(c, w) || this.Ae(c, w, !0).Cl(a)
    };
    m.prototype.dk = function(a, d) {
        var k, c, l, w, y, b;
        k = this.Wb(a.left);
        l = this.Xb(a.top);
        c = this.Wb(a.right);
        for (y = this.Xb(a.bottom); k <= c; ++k)
            for (w = l; w <= y; ++w)(b = this.Ae(k, w, !1)) && b.dump(d)
    };
    jb = m;
    p.prototype.Ae = function(a, d, k) {
        var l;
        l = this.cells[a];
        return l ? (l = l[d]) ? l : k ? (l = c(this, a, d), this.cells[a][d] = l) : null : k ? (l = c(this, a, d), this.cells[a] = {}, this.cells[a][d] = l) : null
    };
    p.prototype.Wb = function(a) {
        return ta(a / this.Xk)
    };
    p.prototype.Xb = function(a) {
        return ta(a / this.Wk)
    };
    p.prototype.update = function(a, d, k) {
        var c, l, w, y, b;
        if (d)
            for (c = d.left, l = d.right; c <= l; ++c)
                for (w = d.top, y = d.bottom; w <= y; ++w)
                    if (!k || !k.Kb(c, w))
                        if (b = this.Ae(c, w, !1)) b.remove(a), b.Rd() && (b.reset(), 1E3 > U.length && U.push(b), this.cells[c][w] = null);
        if (k)
            for (c = k.left, l = k.right; c <= l; ++c)
                for (w = k.top, y = k.bottom; w <= y; ++w) d && d.Kb(c, w) || this.Ae(c, w, !0).Cl(a)
    };
    p.prototype.dk = function(a, d, k, c, l) {
        var w, y;
        a = this.Wb(a);
        d = this.Xb(d);
        k = this.Wb(k);
        for (w = this.Xb(c); a <= k; ++a)
            for (c = d; c <= w; ++c)(y = this.Ae(a, c, !1)) && y.dump(l)
    };
    p.prototype.Zu = function(a) {
        var d, k, c, l, w;
        d = a.left;
        c = a.top;
        k = a.right;
        for (l = a.bottom; d <= k; ++d)
            for (a = c; a <= l; ++a)
                if (w = this.Ae(d, a, !1)) w.ag = !1
    };
    kb = p;
    var R = [];
    a.prototype.Rd = function() {
        return this.wb.Rd()
    };
    a.prototype.Cl = function(a) {
        this.wb.add(a)
    };
    a.prototype.remove = function(a) {
        this.wb.remove(a)
    };
    a.prototype.dump = function(a) {
        Ea(a, this.wb.Oe())
    };
    da = a;
    var U = [];
    x.prototype.Rd = function() {
        if (!this.wb.length) return !0;
        if (this.wb.length > this.yd.count()) return !1;
        this.kl();
        return !0
    };
    x.prototype.Cl = function(a) {
        this.yd.contains(a) ? (this.yd.remove(a), this.yd.Rd() && (this.Qg = !1)) : this.wb.length ? (this.wb[this.wb.length - 1].sd() > a.sd() && (this.ag = !1), this.wb.push(a)) : (this.wb.push(a), this.ag = !0)
    };
    x.prototype.remove = function(a) {
        this.yd.add(a);
        this.Qg = !0;
        30 <= this.yd.count() && this.kl()
    };
    x.prototype.kl = function() {
        this.Qg && (this.yd.count() === this.wb.length ? this.reset() : (Za(this.wb, this.yd), this.yd.clear(), this.Qg = !1))
    };
    x.prototype.ot = function() {
        this.ag || (this.wb.sort(d), this.ag = !0)
    };
    x.prototype.reset = function() {
        C(this.wb);
        this.ag = !0;
        this.yd.clear();
        this.Qg = !1
    };
    x.prototype.dump = function(a) {
        this.kl();
        this.ot();
        this.wb.length && a.push(this.wb)
    };
    ga = x;
    var K = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    lb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : K[a - 1]
    };
    mb = function(a, d, k) {
        if (k) switch (a.Ob = k.ONE, a.Lb = k.ONE_MINUS_SRC_ALPHA, d) {
            case 1:
                a.Ob = k.ONE;
                a.Lb = k.ONE;
                break;
            case 3:
                a.Ob = k.ONE;
                a.Lb = k.ZERO;
                break;
            case 4:
                a.Ob = k.ONE_MINUS_DST_ALPHA;
                a.Lb = k.ONE;
                break;
            case 5:
                a.Ob = k.DST_ALPHA;
                a.Lb = k.ZERO;
                break;
            case 6:
                a.Ob = k.ZERO;
                a.Lb = k.SRC_ALPHA;
                break;
            case 7:
                a.Ob = k.ONE_MINUS_DST_ALPHA;
                a.Lb = k.ZERO;
                break;
            case 8:
                a.Ob = k.ZERO;
                a.Lb = k.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.Ob = k.DST_ALPHA;
                a.Lb = k.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.Ob = k.ONE_MINUS_DST_ALPHA, a.Lb = k.SRC_ALPHA
        }
    };
    nb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    ob = function(a, d) {
        return "string" !== typeof a || "string" !== typeof d || a.length !== d.length ? !1 : a === d ? !0 : a.toLowerCase() === d.toLowerCase()
    };
    pb = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || ob(a.tagName, "canvas") ? !0 : !1
    }
})();
(function() {
    function g(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var d = this;
            this.nc = (this.zj = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Nb = !!a.dc;
            this.No = "undefined" !== typeof window.AppMobi || this.Nb;
            this.Cc = !!window.c2cocoonjs;
            this.Mc = !!window.c2ejecta;
            this.Cc && (CocoonJS.App.onSuspended.addEventListener(function() {
                d.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                d.setSuspended(!1)
            }));
            this.Mc && (document.addEventListener("pagehide", function() {
                d.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                d.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                d.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Ba = this.Nb || this.Cc || this.Mc;
            this.xh = /edge\//i.test(navigator.userAgent);
            this.vh = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.xh;
            this.Qo = /tizen/i.test(navigator.userAgent);
            this.xj = /android/i.test(navigator.userAgent) && !this.Qo && !this.vh && !this.xh;
            this.To = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.vh && !this.xh;
            this.Tu = /ipad/i.test(navigator.userAgent);
            this.dg = this.To || this.Tu || this.Mc;
            this.uh = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.vh && !this.xh;
            this.Mo = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Lu = /firefox/i.test(navigator.userAgent);
            this.Ou = /safari/i.test(navigator.userAgent) && !this.uh && !this.vh && !this.xh;
            this.Pu = /windows/i.test(navigator.userAgent);
            this.kf = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Ro = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Ru = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Ch = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Kl = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Jl = !!window.cr_windows10;
            this.Il = this.Ro || this.Ru || this.Kl || this.Jl;
            this.Ju = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.yj = this.xj && !this.uh && !this.zj && !this.Lu && !this.Mo && !this.Ba;
            this.devicePixelRatio = 1;
            this.Sd = this.nc || this.zj || this.No || this.Cc || this.xj || this.dg || this.Ch || this.Kl || this.Ju || this.Qo || this.Mc;
            this.Sd || (this.Sd = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Bh = !!(this.dg && this.nc && window.webkit);
            this.zl = null;
            this.Du = "";
            this.Bh && (this.zl = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.kf || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.kf = !0);
            this.canvas = a;
            this.Xn = document.getElementById("c2canvasdiv");
            this.D = this.Lc = null;
            this.ul = "(unavailable)";
            this.$e = !1;
            this.Ye = 0;
            this.Ja = null;
            this.ml = "";
            this.fj = !1;
            this.np = this.op = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Nb && (window.c2runtime = this);
            this.kf && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.yj && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.B = this.width;
            this.A = this.height;
            this.Ti = this.width;
            this.Zg = this.height;
            this.gg = window.innerWidth;
            this.fg = window.innerHeight;
            this.M = !0;
            this.zh = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.p = [];
            this.Ia = [];
            this.Ol = {};
            this.ad = [];
            this.il = {};
            this.Nd = [];
            this.yf = [];
            this.xk = [];
            this.Qk = [];
            this.Is = [];
            this.We = {};
            this.Fl = this.Ce = !1;
            this.$c = 0;
            this.El = this.Hl = !1;
            this.Xc = [];
            this.wh = !1;
            this.Hj = this.Cm = "";
            this.lb = null;
            this.Td = "";
            this.fi = this.aq = !1;
            this.ej = [];
            this.Xe = this.ye = 0;
            this.cp = 30;
            this.$k = this.Ih = 0;
            this.vf = 1;
            this.tb = new gb;
            this.he = new gb;
            this.Nj = this.jj = this.bh = this.Dd = this.nf = this.ll = this.Cj = 0;
            this.Te = null;
            this.el = [];
            this.hl = [];
            this.$i = -1;
            this.Rl = [
                []
            ];
            this.Sm = this.Kj = 0;
            this.ck(null);
            this.Jh = [];
            this.Kh = -1;
            this.ip = this.Nh = 0;
            this.Nl = !0;
            this.eh = 0;
            this.gi = [];
            this.Pm = this.tm = -1;
            this.eg = !0;
            this.ig = 0;
            this.yh = !1;
            this.aw = 0;
            this.Ef = null;
            this.Ab = this.rj = !1;
            this.mp = new fa;
            this.Zl = new fa;
            this.$l = new fa;
            this.Mp = [];
            this.fd = new ib([]);
            this.Lm = new ib([]);
            this.pe = [];
            this.oh = {};
            this.ue = {};
            this.ne = {};
            this.Jg = {};
            this.Tn = {};
            this.Yo = this.Gj = this.Wa = this.kb = this.Xo = this.Fj = this.la = null;
            this.Hg = this.Ll = !1;
            this.nl = [null, null];
            this.df = 0;
            this.jl = "";
            this.Yd = {};
            this.ci = this.Fe = null;
            this.cq = "";
            this.Mj = [];
            this.Fv()
        }
    }

    function f(a, d) {
        return 128 >= d ? a[3] : 256 >= d ? a[2] : 512 >= d ? a[1] : a[0]
    }

    function b() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function u(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function r(a, d, k, c) {
        try {
            var l = indexedDB.open("_C2SaveStates");
            l.onupgradeneeded = u;
            l.onerror = c;
            l.onsuccess = function(l) {
                l = l.target.result;
                l.onerror = c;
                l.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: d
                }).onsuccess = k
            }
        } catch (b) {
            c(b)
        }
    }

    function q(a, d, k) {
        try {
            var c = indexedDB.open("_C2SaveStates");
            c.onupgradeneeded = u;
            c.onerror = k;
            c.onsuccess = function(c) {
                c = c.target.result;
                c.onerror = k;
                var l = c.transaction(["saves"]).objectStore("saves").get(a);
                l.onsuccess = function() {
                    l.result ? d(l.result.data) : d(null)
                }
            }
        } catch (l) {
            k(l)
        }
    }

    function t() {
        ha("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function m(a) {
        var d, k = {};
        for (d in a) !a.hasOwnProperty(d) || a[d] instanceof fa || a[d] && "undefined" !== typeof a[d].Ox || "spriteCreatedDestroyCallback" !== d && (k[d] = a[d]);
        return k
    }
    var p = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    g.prototype.Fv = function() {
        var a = this;
        if (this.Bh) {
            var d = function() {
                a.Xt(function(d) {
                    a.Hh(JSON.parse(d))
                }, function() {
                    alert("Error fetching data.js")
                })
            };
            this.zl ? this.zl.startServer({
                port: 0,
                localhost_only: !0
            }, function(k) {
                a.Du = k;
                d()
            }, function(a) {
                console.log("Error starting local server: " +
                    a + ". Video playback will not work.");
                d()
            }) : (console.log("Local server unavailable. Video playback will not work."), d())
        } else {
            var k;
            this.Ch ? k = new ActiveXObject("Microsoft.XMLHTTP") : k = new XMLHttpRequest;
            var c = "data.js";
            if (this.Ro || this.Ch || this.Kl || this.Jl) c = "data.json";
            k.open("GET", c, !0);
            var l = !1;
            if (!this.Ba && "response" in k && "responseType" in k) try {
                k.responseType = "json", l = "json" === k.responseType
            } catch (b) {
                l = !1
            }
            if (!l && "responseType" in k) try {
                k.responseType = "text"
            } catch (h) {}
            if ("overrideMimeType" in k) try {
                k.overrideMimeType("application/json; charset=utf-8")
            } catch (e) {}
            this.Ch ? k.onreadystatechange = function() {
                4 === k.readyState && a.Hh(JSON.parse(k.responseText))
            } : (k.onload = function() {
                if (l) a.Hh(k.response);
                else if (a.Mc) {
                    var d = k.responseText,
                        d = d.substr(d.indexOf("{"));
                    a.Hh(JSON.parse(d))
                } else a.Hh(JSON.parse(k.responseText))
            }, k.onerror = function(a) {
                ia("Error requesting " + c + ":");
                ia(a)
            });
            k.send()
        }
    };
    g.prototype.Fu = function() {
        var a = this,
            d, k, c, l, b, h, e, p, n;
        this.lf = (!this.Ba || this.Mc || this.nc) && this.pw && !this.yj;
        0 === this.Rb && this.dg && (this.lf = !1);
        this.devicePixelRatio = this.lf ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Hb();
        0 < this.Rb && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(d) {
            d.preventDefault();
            a.gv();
            ha("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.D.Zx();
            a.D.Ag(a.D.width, a.D.height, !0);
            a.kb = null;
            a.Wa = null;
            a.nl[0] = null;
            a.nl[1] = null;
            a.hv();
            a.M = !0;
            ha("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.mt && (this.Cc || this.Mc || !this.Ba) && (d = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.Lc = this.canvas.getContext("webgl2", d) || this.canvas.getContext("webgl", d) || this.canvas.getContext("experimental-webgl", d))
        } catch (v) {}
        if (this.Lc) {
            if (d = this.Lc.getExtension("WEBGL_debug_renderer_info")) this.ul = this.Lc.getParameter(d.UNMASKED_RENDERER_WEBGL) + " [" + this.Lc.getParameter(d.UNMASKED_VENDOR_WEBGL) + "]";
            this.$e && (this.ul += " [front-to-back enabled]");
            this.Ba || (this.Db = document.createElement("canvas"), jQuery(this.Db).appendTo(this.canvas.parentNode), this.Db.oncontextmenu = function() {
                return !1
            }, this.Db.onselectstart = function() {
                return !1
            }, this.Db.width = Math.round(this.Ti * this.devicePixelRatio), this.Db.height = Math.round(this.Zg * this.devicePixelRatio), jQuery(this.Db).css({
                width: this.Ti + "px",
                height: this.Zg + "px"
            }), this.Ep(), this.lm = this.Db.getContext("2d"));
            this.D = new ba.Ow(this.Lc, this.Sd, this.$e);
            this.D.Ag(this.canvas.width, this.canvas.height);
            this.D.Rx = 0 !== this.ft;
            this.Ja = null;
            d = 0;
            for (k = this.p.length; d < k; d++)
                for (b = this.p[d], c = 0, l = b.J.length; c < l; c++) e = b.J[c], e.Za = this.D.Do(e.id), e.Ke = this.D.Fp(e.Za), this.Hg = this.Hg || this.D.bk(e.Za);
            d = 0;
            for (k = this.ad.length; d < k; d++) {
                p = this.ad[d];
                c = 0;
                for (l = p.J.length; c < l; c++) e = p.J[c], e.Za = this.D.Do(e.id), e.Ke = this.D.Fp(e.Za);
                p.hd();
                c = 0;
                for (l = p.L.length; c < l; c++) {
                    n = p.L[c];
                    b = 0;
                    for (h = n.J.length; b < h; b++) e = n.J[b], e.Za = this.D.Do(e.id), e.Ke = this.D.Fp(e.Za), this.Hg = this.Hg || this.D.bk(e.Za);
                    n.hd()
                }
            }
        } else {
            if (0 < this.Rb && this.Nb) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Ja = AppMobi.canvas.getContext("2d");
                try {
                    this.Ja.samplingMode = this.Ea ? "smooth" : "sharp", this.Ja.globalScale = 1, this.Ja.HTML5CompatibilityMode = !0, this.Ja.imageSmoothingEnabled = this.Ea
                } catch (x) {}
                0 !== this.width && 0 !== this.height && (this.Ja.width = this.width, this.Ja.height = this.height)
            }
            this.Ja || (this.Cc ? (d = {
                antialias: !!this.Ea,
                alpha: !0
            }, this.Ja = this.canvas.getContext("2d", d)) : (d = {
                alpha: !0
            }, this.Ja = this.canvas.getContext("2d", d)), this.jk(this.Ja, this.Ea));
            this.lm = this.Db = null
        }
        this.lq = function(d) {
            a.Gb(!1, d)
        };
        window == window.top || this.Ba || this.Il || this.Ch || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.Cc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ha("Reloading for continuous preview"), this.Hj = "__c2_continuouspreview", this.fi = !0), this.rv && !this.Sd && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var d = window.parent;
            d && d.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.rg()
        });
        this.Ba || (d = function(a) {
            if (pb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (d) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", d) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", d) : document.addEventListener("touchstart", d), document.addEventListener("mousedown", d));
        0 === this.Rb && this.lf && 1 < this.devicePixelRatio && this.setSize(this.nb, this.mb, !0);
        this.qq();
        this.zu();
        this.go();
        this.U = {}
    };
    g.prototype.setSize = function(a, d, k) {
        var c = 0,
            l = 0,
            b = 0,
            e = 0,
            e = 0;
        if (this.gg !== a || this.fg !== d || k) {
            this.gg = a;
            this.fg = d;
            var h = this.Rb,
                p = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.yh) && !this.nc;
            if (p || 0 !== this.Rb || k) p && 0 < this.df && (h = this.df), k = this.devicePixelRatio, 4 <= h ? (b = this.nb / this.mb, a / d > b ? (b *= d, 5 === h ? (e = b * k / this.nb, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), b = this.nb * e / k, e = this.mb * e / k, c = (a - b) / 2, l = (d - e) / 2, a = b, d = e) : (c = (a - b) / 2, a = b)) : (e = a / b, 5 === h ? (e = e * k / this.mb, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), b = this.nb * e / k, e = this.mb * e / k, c = (a - b) / 2, l = (d - e) / 2, a = b) : l = (d - e) / 2, d = e), p && !this.kf && (l = c = 0)) : this.kf && this.yh && 0 === this.uo && (c = Math.floor((a - this.nb) / 2), l = Math.floor((d - this.mb) / 2), a = this.nb, d = this.mb), 2 > h && (this.Sg = k), this.Ti = Math.round(a), this.Zg = Math.round(d), this.width = Math.round(a * k), this.height = Math.round(d * k), this.M = !0, this.Aq ? (this.B = this.width, this.A = this.height, this.yc = !0) : this.width < this.nb && this.height < this.mb || 1 === h ? (this.B = this.width, this.A = this.height, this.yc = !0) : (this.B = this.nb, this.A = this.mb, this.yc = !1, 2 === h ? (b = this.nb / this.mb, h = this.gg / this.fg, h < b ? this.B = this.A * h : h > b && (this.A = this.B / h)) : 3 === h && (b = this.nb / this.mb, h = this.gg / this.fg, h > b ? this.B = this.A * h : h < b && (this.A = this.B / h))), this.Xn && !this.Ba && (jQuery(this.Xn).css({
                width: Math.round(a) + "px",
                height: Math.round(d) + "px",
                "margin-left": Math.floor(c) + "px",
                "margin-top": Math.floor(l) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(d) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * k), this.canvas.height = Math.round(d * k), this.Mc ? (this.canvas.style.left = Math.floor(c) + "px", this.canvas.style.top = Math.floor(l) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(d) + "px") : this.lf && !this.Ba && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(d) + "px")), this.Db && (this.Db.width = Math.round(a * k), this.Db.height = Math.round(d * k), this.Db.style.width = this.Ti + "px", this.Db.style.height = this.Zg + "px"), this.D && this.D.Ag(Math.round(a * k), Math.round(d * k)), this.Nb && this.Ja && (this.Ja.width = Math.round(a), this.Ja.height = Math.round(d)), this.Ja && this.jk(this.Ja, this.Ea), this.qq(), this.To && !this.nc && window.scrollTo(0, 0)
        }
    };
    g.prototype.qq = function() {
        if (this.Ls && 0 !== this.jm) {
            var a = "portrait";
            2 === this.jm && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (d) {
                console && console.warn && console.warn("Failed to lock orientation: ", d)
            }
        }
    };
    g.prototype.gv = function() {
        this.D.Qx();
        this.Ll = !0;
        var a, d, k;
        a = 0;
        for (d = this.p.length; a < d; a++) k = this.p[a], k.Pj && k.Pj()
    };
    g.prototype.hv = function() {
        this.Ll = !1;
        var a, d, k;
        a = 0;
        for (d = this.p.length; a < d; a++) k = this.p[a], k.gm && k.gm()
    };
    g.prototype.Ep = function() {
        if (!this.Ba) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.yh) && !this.nc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Db).css(a)
        }
    };
    var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    g.prototype.setSuspended = function(a) {
        var d;
        if (a && !this.zh)
            for (ha("[Construct 2] Suspending"), this.zh = !0, -1 !== this.tm && e && e(this.tm), -1 !== this.Pm && clearTimeout(this.Pm), a = 0, d = this.gi.length; a < d; a++) this.gi[a](!0);
        else if (!a && this.zh) {
            ha("[Construct 2] Resuming");
            this.zh = !1;
            this.Cj = Ya();
            this.nf = Ya();
            a = this.Ih = this.jj = 0;
            for (d = this.gi.length; a < d; a++) this.gi[a](!1);
            this.Gb(!1)
        }
    };
    g.prototype.Pn = function(a) {
        this.gi.push(a)
    };
    g.prototype.ke = function(a) {
        return this.Mj[a]
    };
    g.prototype.Hh = function(a) {
        a && a.project || ia("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.to = a[1];
        this.Rb = a[12];
        this.uo = a[12];
        this.nb = a[10];
        this.mb = a[11];
        this.Ap = this.nb / 2;
        this.Bp = this.mb / 2;
        this.Ba && !this.Mc && (4 <= a[12] || 0 === a[12]) && (ha("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.uo = this.Rb = 3);
        this.Zm = a[18];
        this.Ge = a[19];
        if (0 === this.Ge) {
            var d = new Image;
            d.crossOrigin = "anonymous";
            this.Up(d, "loading-logo.png");
            this.Fe = {
                Lj: d
            }
        } else if (4 === this.Ge) {
            d = new Image;
            d.src = "";
            var k = new Image;
            k.src = "";
            var c = new Image;
            c.src = "";
            var l = new Image;
            l.src = "";
            var b = new Image;
            b.src = "";
            var e = new Image;
            e.src = "";
            var h = new Image;
            h.src = "";
            var p = new Image;
            p.src = "";
            var n = new Image;
            n.src = "";
            var v = new Image;
            v.src = "";
            var x = new Image;
            x.src = "";
            var m = new Image;
            m.src = "";
            this.Fe = {
                Lj: [d, k, c, l],
                xv: [b, e, h, p],
                yw: [n, v, x, m]
            }
        }
        this.Nh = a[21];
        this.Mj = hc();
        this.Bd = new I(this);
        d = 0;
        for (k = a[2].length; d < k; d++) h = a[2][d], c = this.ke(h[0]), qb(h, c.prototype), p = new c(this), p.ok = h[1], p.Ee = h[2], p.ay = h[5], p.ep = h[9], p.R && p.R(), this.plugins.push(p);
        this.Mj = hc();
        d = 0;
        for (k = a[3].length; d < k; d++) {
            h = a[3][d];
            b = this.ke(h[1]);
            p = null;
            c = 0;
            for (l = this.plugins.length; c < l; c++)
                if (this.plugins[c] instanceof b) {
                    p = this.plugins[c];
                    break
                }
            n = new p.ya(p);
            n.name = h[0];
            n.G = h[2];
            n.Dl = h[3].slice(0);
            n.rw = h[3].length;
            n.Ms = h[4];
            n.bu = h[5];
            n.T = h[11];
            n.G ? (n.kg = [], n.Od = this.eh++, n.Aa = null) : (n.kg = null, n.Od = -1, n.Aa = []);
            n.cj = null;
            n.Qf = null;
            n.no = null;
            n.$b = !1;
            n.kc = null;
            h[6] ? (n.Mm = h[6][0], n.jq = h[6][1], n.Nm = h[6][2]) : (n.Mm = null, n.jq = 0, n.Nm = 0);
            h[7] ? n.jc = h[7] : n.jc = null;
            n.index = d;
            n.d = [];
            n.Wi = [];
            n.ee = [new rb(n)];
            n.nd = 0;
            n.Jc = null;
            n.Zs = 0;
            n.Dg = !0;
            n.yk = sb;
            n.gu = ub;
            n.lu = vb;
            n.S = wb;
            n.Uh = xb;
            n.Vh = yb;
            n.Je = zb;
            n.lj = Ab;
            n.ol = Bb;
            n.ql = Cb;
            n.Id = Db;
            n.rl = Eb;
            n.Qi = new jb(this.nb, this.mb);
            n.Ei = !0;
            n.Fi = !1;
            n.U = {};
            n.toString = Fb;
            n.Ia = [];
            c = 0;
            for (l = h[8].length; c < l; c++) {
                v = h[8][c];
                x = this.ke(v[1]);
                m = null;
                b = 0;
                for (e = this.Ia.length; b < e; b++)
                    if (this.Ia[b] instanceof x) {
                        m = this.Ia[b];
                        break
                    }
                m || (m = new x(this), m.fp = [], m.Xl = new fa, m.R && m.R(), this.Ia.push(m)); - 1 === m.fp.indexOf(n) && m.fp.push(n);
                b = new m.ya(m, n);
                b.name = v[0];
                b.T = v[2];
                b.R();
                n.Ia.push(b)
            }
            n.global = h[9];
            n.Gl = h[10];
            n.J = [];
            c = 0;
            for (l = h[12].length; c < l; c++) n.J.push({
                id: h[12][c][0],
                name: h[12][c][1],
                Za: -1,
                Ke: !1,
                Ib: !0,
                index: c
            });
            n.xy = h[13];
            this.Zm && !n.G && !n.Gl && p.Ee || n.R();
            n.name && (this.types[n.name] = n);
            this.p.push(n);
            p.ok && (c = new p.qa(n), c.uid = this.Nh++, c.Ip = this.ip++, c.hf = 0, c.mh = Hb, c.toString = Ib, c.r = h[14], c.R(), n.d.push(c), this.Yd[c.uid.toString()] = c)
        }
        d = 0;
        for (k = a[4].length; d < k; d++)
            for (b = a[4][d], e = this.p[b[0]], c = 1, l = b.length; c < l; c++) h = this.p[b[c]], h.Aa.push(e), e.kg.push(h);
        d = 0;
        for (k = a[28].length; d < k; d++) {
            b = a[28][d];
            e = [];
            c = 0;
            for (l = b.length; c < l; c++) e.push(this.p[b[c]]);
            c = 0;
            for (l = e.length; c < l; c++) e[c].$b = !0, e[c].kc = e
        }
        if (0 < this.eh)
            for (d = 0, k = this.p.length; d < k; d++)
                if (h = this.p[d], !h.G && h.Aa.length) {
                    h.cj = Array(this.eh);
                    h.Qf = Array(this.eh);
                    h.no = Array(this.eh);
                    n = [];
                    c = m = x = v = 0;
                    for (l = h.Aa.length; c < l; c++)
                        for (p = h.Aa[c], h.cj[p.Od] = v, v += p.rw, h.Qf[p.Od] = x, x += p.Ms, h.no[p.Od] = m, m += p.bu, b = 0, e = p.J.length; b < e; b++) n.push(za({}, p.J[b]));
                    h.J = n.concat(h.J);
                    c = 0;
                    for (l = h.J.length; c < l; c++) h.J[c].index = c
                }
        d = 0;
        for (k = a[5].length; d < k; d++) h = a[5][d], c = new Jb(this, h), this.Ol[c.name] = c, this.ad.push(c);
        d = 0;
        for (k = a[6].length; d < k; d++) h = a[6][d], c = new Kb(this, h), this.il[c.name] = c, this.Nd.push(c);
        d = 0;
        for (k = this.Nd.length; d < k; d++) this.Nd[d].Qa();
        d = 0;
        for (k = this.Nd.length; d < k; d++) this.Nd[d].Wm();
        d = 0;
        for (k = this.xk.length; d < k; d++) this.xk[d].Qa();
        C(this.xk);
        this.Ks = a[7];
        this.jl = a[8];
        this.bd = a[9];
        this.Sg = 1;
        this.mt = a[13];
        this.Ea = a[14];
        this.$n = a[15];
        this.pw = a[17];
        this.jm = a[20];
        this.Ls = 0 < this.jm;
        this.rv = a[22];
        this.yc = this.Aq = a[23];
        this.ft = a[24];
        this.yv = a[25];
        this.$e = a[27] && !this.vh;
        this.pk = Date.now();
        C(this.Mj);
        this.Fu()
    };
    var a = !1;
    g.prototype.xw = function(d, k) {
        d.cocoonLazyLoad = !0;
        d.onerror = function(k) {
            a = d.Vn = !0;
            console && console.error && console.error("Error loading image '" + d.src + "': ", k)
        };
        this.Mc ? d.src = k : d.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(k, function(a) {
            d.src = a
        }, function(c) {
            a = d.Vn = !0;
            console && console.error && console.error("Error extracting image '" + k + "' from expansion file: ", c)
        }) : (d.crossOrigin = "anonymous", this.Up(d, k)));
        this.yf.push(d)
    };
    g.prototype.Zt = function(a) {
        var d, k;
        d = 0;
        for (k = this.yf.length; d < k; d++)
            if (this.yf[d].Ws === a) return this.yf[d];
        return null
    };
    var c = 0,
        x = !1;
    g.prototype.zu = function() {
        this.Ef && (c = this.Ef.Xv(this.Ks))
    };
    g.prototype.Sn = function() {
        var a = c,
            d = 0,
            k = 0,
            l = !0,
            b, h, k = 0;
        for (b = this.yf.length; k < b; k++) {
            h = this.yf[k];
            var e = h.Vs;
            if (!e || 0 >= e) e = 5E4;
            a += e;
            h.src && (h.complete || h.loaded) && !h.Vn ? d += e : l = !1
        }
        l && this.yv && this.Ef && (x || (this.Ef.bw(), x = !0), k = this.Ef.mu(), d += k, k < c && (l = !1));
        this.O = 0 == a ? 1 : d / a;
        return l
    };
    var d = !1;
    g.prototype.go = function() {
        if (this.Ja || this.D) {
            var k = this.Ja || this.lm;
            this.Db && this.Ep();
            var c = window.innerWidth,
                l = window.innerHeight;
            this.gg === c && this.fg === l || this.setSize(c, l);
            this.O = 0;
            this.Wo = -1;
            var b = this;
            if (this.Sn() && (4 !== this.Ge || d)) this.Au();
            else {
                l = Date.now() - this.pk;
                if (k) {
                    var h = this.width,
                        e = this.height,
                        c = this.devicePixelRatio;
                    if (3 > this.Ge && (this.Cc || 500 <= l && this.Wo != this.O)) {
                        k.clearRect(0, 0, h, e);
                        var l = h / 2,
                            e = e / 2,
                            h = 0 === this.Ge && this.Fe.Lj.complete,
                            n = 40 * c,
                            v = 0,
                            m = 80 * c,
                            x;
                        if (h) {
                            var f = this.Fe.Lj,
                                m = f.width * c;
                            x = f.height * c;
                            n = m / 2;
                            v = x / 2;
                            k.drawImage(f, ta(l - n), ta(e - v), m, x)
                        }
                        1 >= this.Ge ? (l = ta(l - n) + .5, e = ta(e + (v + (h ? 12 * c : 0))) + .5, k.fillStyle = a ? "red" : "DodgerBlue", k.fillRect(l, e, Math.floor(m * this.O), 6 * c), k.strokeStyle = "black", k.strokeRect(l, e, m, 6 * c), k.strokeStyle = "white", k.strokeRect(l - 1 * c, e - 1 * c, m + 2 * c, 8 * c)) : 2 === this.Ge && (k.font = this.Mc ? "12pt ArialMT" : "12pt Arial", k.fillStyle = a ? "#f00" : "#999", k.wy = "middle", c = Math.round(100 * this.O) + "%", h = k.measureText ? k.measureText(c) : null, k.fillText(c, l - (h ? h.width : 0) / 2, e));
                        this.Wo = this.O
                    } else if (4 === this.Ge) {
                        this.kt(k);
                        p ? p(function() {
                            b.go()
                        }) : setTimeout(function() {
                            b.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    b.go()
                }, this.Cc ? 10 : 100)
            }
        }
    };
    var h = -1,
        v = "undefined" === typeof cr_is_preview ? 200 : 0,
        n = !0,
        k = !1,
        l = 0,
        Y = 0,
        E = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        z = null,
        aa = null,
        R = 0;
    g.prototype.kt = function(c) {
        if (!d) {
            for (var b = Math.ceil(this.width), e = Math.ceil(this.height), p = this.Fe.Lj, m = this.Fe.xv, x = this.Fe.yw, g = 0; 4 > g; ++g)
                if (!p[g].complete || !m[g].complete || !x[g].complete) return;
            0 === R && (h = Date.now());
            var g = Date.now(),
                t = !1,
                u = c,
                r, q;
            n || k ? (c.clearRect(0, 0, b, e), z && z.width === b && z.height === e || (z = document.createElement("canvas"), z.width = b, z.height = e, aa = z.getContext("2d")), u = aa, t = !0, n && 1 === R && (h = Date.now())) : c.globalAlpha = 1;
            u.fillStyle = "#333333";
            u.fillRect(0, 0, b, e);
            256 < this.Zg ? (r = Ha(.22 * e, 105, .6 * b), q = .25 * r, u.drawImage(f(m, r), .5 * b - r / 2, .2 * e - q / 2, r, q), q = r = Math.min(.395 * e, .95 * b), u.drawImage(f(p, r), .5 * b - r / 2, .485 * e - q / 2, r, q), r = Ha(.22 * e, 105, .6 * b), q = .25 * r, u.drawImage(f(x, r), .5 * b - r / 2, .868 * e - q / 2, r, q), u.fillStyle = "#3C3C3C", r = b, q = Math.max(.005 * e, 2), u.fillRect(0, .8 * e - q / 2, r, q), u.fillStyle = a ? "red" : "#E0FF65", r = b * this.O, u.fillRect(.5 * b - r / 2, .8 * e - q / 2, r, q)) : (q = r = .55 * e, u.drawImage(f(p, r), .5 * b - r / 2, .45 * e - q / 2, r, q), u.fillStyle = "#3C3C3C", r = b, q = Math.max(.005 * e, 2), u.fillRect(0, .85 * e - q / 2, r, q), u.fillStyle = a ? "red" : "#E0FF65", r = b * this.O, u.fillRect(.5 * b - r / 2, .85 * e - q / 2, r, q));
            t && (n ? c.globalAlpha = 0 === R ? 0 : Math.min((g - h) / 300, 1) : k && (c.globalAlpha = Math.max(1 - (g - Y) / 300, 0)), c.drawImage(z, 0, 0, b, e));
            n && 300 <= g - h && 2 <= R && (n = !1, l = g);
            !n && g - l >= E && !k && 1 <= this.O && (k = !0, Y = g);
            if (k && g - Y >= 300 + v || "undefined" !== typeof cr_is_preview && 1 <= this.O && 500 > Date.now() - h) d = !0, k = n = !1, this.Fe = aa = z = null;
            ++R
        }
    };
    g.prototype.Au = function() {
        this.Db && (this.canvas.parentNode.removeChild(this.Db), this.Db = this.lm = null);
        this.pk = Date.now();
        this.nf = Ya();
        var a, d, k;
        if (this.Zm)
            for (a = 0, d = this.p.length; a < d; a++) k = this.p[a], k.G || k.Gl || !k.ka.Ee || k.R();
        else this.eg = !1;
        a = 0;
        for (d = this.ad.length; a < d; a++) this.ad[a].Xs();
        2 <= this.Rb && (a = this.nb / this.mb, d = this.width / this.height, this.Sg = 2 !== this.Rb && d > a || 2 === this.Rb && d < a ? this.height / this.mb : this.width / this.nb);
        this.to ? this.Ol[this.to].Jm() : this.ad[0].Jm();
        this.Zm || (this.ig = 1, this.trigger(I.prototype.e.pn, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (d = this.p.length; a < d; a++) k = this.p[a], k.pp && k.pp();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Gb(!1);
        this.Nb && AppMobi.webview.execute("onGameReady();")
    };
    g.prototype.Gb = function(a, d, k) {
        if (this.la) {
            var c = Ya();
            if (k || !this.zh || a) {
                a || (p ? this.tm = p(this.lq) : this.Pm = setTimeout(this.lq, this.Sd ? 1 : 16));
                d = d || c;
                var l = this.Rb;
                ((k = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.nc) || this.yh) && 0 < this.df && (l = this.df);
                if (0 < l) {
                    var l = window.innerWidth,
                        b = window.innerHeight;
                    this.gg === l && this.fg === b || this.setSize(l, b)
                }
                this.Ba || (k ? (this.fj || (this.ml = jQuery(this.canvas).css("margin") || "0", this.fj = !0), this.uh || this.kf || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.fj ? (this.uh || this.kf || jQuery(this.canvas).css("margin", this.ml), this.ml = "", this.fj = !1, 0 === this.Rb && this.setSize(Math.round(this.op / this.devicePixelRatio), Math.round(this.np / this.devicePixelRatio), !0)) : (this.op = this.width, this.np = this.height));
                this.eg && (k = this.Sn(), this.ig = this.O, k && (this.eg = !1, this.O = 1, this.trigger(I.prototype.e.pn, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.Xu(d);
                !this.M && !this.Cc || this.Ll || this.fi || a || (this.M = !1, this.D ? this.lc() : this.Yc(), this.ci && (this.canvas && this.canvas.toDataURL && (this.cq = this.canvas.toDataURL(this.ci[0], this.ci[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.cq), this.trigger(I.prototype.e.sr, null)), this.ci = null));
                this.Yx || (this.Dd++, this.bh++, this.jj++);
                this.Ih += Ya() - c
            }
        }
    };
    g.prototype.Xu = function(a) {
        var d, k, c, l, b, h, e, n;
        1E3 <= a - this.nf && (this.nf += 1E3, 1E3 <= a - this.nf && (this.nf = a), this.ll = this.jj, this.jj = 0, this.$k = this.Ih, this.Ih = 0);
        d = 0;
        0 !== this.Cj && (d = a - this.Cj, 0 > d && (d = 0), this.Xe = d /= 1E3, .5 < this.Xe ? this.Xe = 0 : this.Xe > 1 / this.cp && (this.Xe = 1 / this.cp));
        this.Cj = a;
        this.ye = this.Xe * this.vf;
        this.tb.add(this.ye);
        this.he.add(d);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.yh) && !this.nc;
        2 <= this.Rb || a && 0 < this.df ? (d = this.nb / this.mb, k = this.width / this.height, c = this.Rb, a && 0 < this.df && (c = this.df), this.Sg = 2 !== c && k > d || 2 === c && k < d ? this.height / this.mb : this.width / this.nb, this.la && (this.la.Qp(this.la.scrollX), this.la.Rp(this.la.scrollY))) : this.Sg = this.lf ? this.devicePixelRatio : 1;
        this.Hb();
        this.$c++;
        this.Bd.Jv();
        this.$c--;
        this.Hb();
        this.$c++;
        k = this.mp.Oe();
        a = 0;
        for (d = k.length; a < d; a++) k[a].ly();
        a = 0;
        for (d = this.p.length; a < d; a++)
            if (h = this.p[a], !h.G && (h.Ia.length || h.Aa.length))
                for (k = 0, c = h.d.length; k < c; k++)
                    for (e = h.d[k], l = 0, b = e.I.length; l < b; l++) e.I[l].Gb();
        a = 0;
        for (d = this.p.length; a < d; a++)
            if (h = this.p[a], !h.G && (h.Ia.length || h.Aa.length))
                for (k = 0, c = h.d.length; k < c; k++)
                    for (e = h.d[k], l = 0, b = e.I.length; l < b; l++) n = e.I[l], n.wv && n.wv();
        k = this.Zl.Oe();
        a = 0;
        for (d = k.length; a < d; a++) k[a].Gb();
        this.$c--;
        this.Bu();
        for (a = 0; this.Te && 10 > a++;) this.jo(this.Te);
        a = 0;
        for (d = this.Nd.length; a < d; a++) this.Nd[a].yl = !1;
        this.la.bf && this.la.bf.Ya();
        C(this.Mp);
        this.Nl = !1;
        this.$c++;
        a = 0;
        for (d = this.p.length; a < d; a++)
            if (h = this.p[a], !h.G && (h.Ia.length || h.Aa.length))
                for (k = 0, c = h.d.length; k < c; k++)
                    for (e = h.d[k], l = 0, b = e.I.length; l < b; l++) n = e.I[l], n.Om && n.Om();
        k = this.$l.Oe();
        a = 0;
        for (d = k.length; a < d; a++) k[a].Om();
        this.$c--
    };
    g.prototype.rg = function() {
        var a, d, k, c, l, b, h, e, n;
        a = 0;
        for (d = this.p.length; a < d; a++)
            if (h = this.p[a], !h.G)
                for (k = 0, c = h.d.length; k < c; k++)
                    if (e = h.d[k], e.rg && e.rg(), e.I)
                        for (l = 0, b = e.I.length; l < b; l++) n = e.I[l], n.rg && n.rg()
    };
    g.prototype.jo = function(a) {
        var d = this.la;
        this.la.dw();
        var k, c, l;
        if (this.D)
            for (k = 0, c = this.p.length; k < c; k++) l = this.p[k], l.G || !l.Vm || l.global && 0 !== l.d.length || -1 !== a.rh.indexOf(l) || l.Vm();
        d == a && C(this.Bd.hc);
        C(this.Mp);
        this.Np(!0);
        a.Jm();
        this.Np(!1);
        this.Nl = this.M = !0;
        this.Hb()
    };
    g.prototype.Np = function(a) {
        var d, k, c, l, b, h, e, n, p;
        d = 0;
        for (k = this.Ia.length; d < k; d++) c = this.Ia[d], a ? c.Oh && c.Oh() : c.Ph && c.Ph();
        d = 0;
        for (k = this.p.length; d < k; d++)
            if (c = this.p[d], c.global || c.ka.ok)
                for (l = 0, b = c.d.length; l < b; l++)
                    if (h = c.d[l], a ? h.Oh && h.Oh() : h.Ph && h.Ph(), h.I)
                        for (e = 0, n = h.I.length; e < n; e++) p = h.I[e], a ? p.Oh && p.Oh() : p.Ph && p.Ph()
    };
    g.prototype.ii = function(a) {
        this.Zl.add(a)
    };
    g.prototype.hw = function(a) {
        this.$l.add(a)
    };
    g.prototype.mj = function(a) {
        return a && -1 !== a.Mh ? this.Xe * a.Mh : this.ye
    };
    g.prototype.Yc = function() {
        this.la.Yc(this.Ja);
        this.Nb && this.Ja.present()
    };
    g.prototype.lc = function() {
        this.$e && (this.Ye = 1, this.la.Mf(this.D));
        this.la.lc(this.D);
        this.D.ky()
    };
    g.prototype.Gs = function(a) {
        a && this.el.push(a)
    };
    g.prototype.pj = function(a) {
        a = a.toString();
        return this.Yd.hasOwnProperty(a) ? this.Yd[a] : null
    };
    var U = [];
    g.prototype.je = function(a) {
        var d, k;
        d = a.type.name;
        var c = null;
        if (this.We.hasOwnProperty(d)) {
            if (c = this.We[d], c.contains(a)) return
        } else c = U.length ? U.pop() : new fa, this.We[d] = c;
        c.add(a);
        this.Ce = !0;
        if (a.$b)
            for (d = 0, k = a.siblings.length; d < k; d++) this.je(a.siblings[d]);
        this.Fl && c.Ig.push(a);
        this.El || (this.$c++, this.trigger(Object.getPrototypeOf(a.type.ka).e.tr, a), this.$c--)
    };
    g.prototype.Hb = function() {
        if (this.Ce) {
            var a, d, k, c, l, b;
            this.Fl = !0;
            k = 0;
            for (l = this.Xc.length; k < l; ++k)
                for (a = this.Xc[k], d = a.type, d.d.push(a), c = 0, b = d.Aa.length; c < b; ++c) d.Aa[c].d.push(a), d.Aa[c].Dg = !0;
            C(this.Xc);
            this.jr();
            Xa(this.We);
            this.Ce = this.Fl = !1
        }
    };
    g.prototype.jr = function() {
        for (var a in this.We) this.We.hasOwnProperty(a) && this.Hq(this.We[a])
    };
    g.prototype.Hq = function(a) {
        var d = a.Oe(),
            k = d[0].type,
            c, l, b, h, e, n;
        Za(k.d, a);
        k.Dg = !0;
        0 === k.d.length && (k.Fi = !1);
        c = 0;
        for (l = k.Aa.length; c < l; ++c) n = k.Aa[c], Za(n.d, a), n.Dg = !0;
        c = 0;
        for (l = this.Bd.hc.length; c < l; ++c)
            if (e = this.Bd.hc[c], e.Ub.hasOwnProperty(k.index) && Za(e.Ub[k.index].Qd, a), !k.G)
                for (b = 0, h = k.Aa.length; b < h; ++b) n = k.Aa[b], e.Ub.hasOwnProperty(n.index) && Za(e.Ub[n.index].Qd, a);
        if (e = d[0].j) {
            if (e.Gc)
                for (b = e.d, c = 0, l = b.length; c < l; ++c) h = b[c], a.contains(h) && (h.ra(), e.Eb.update(h, h.ec, null), h.ec.set(0, 0, -1, -1));
            Za(e.d, a);
            e.$h(0)
        }
        for (c = 0; c < d.length; ++c) this.Gq(d[c], k);
        a.clear();
        U.push(a);
        this.M = !0
    };
    g.prototype.Gq = function(a, d) {
        var k, c, l;
        k = 0;
        for (c = this.el.length; k < c; ++k) this.el[k](a);
        a.ve && d.Qi.update(a, a.ve, null);
        (k = a.j) && k.vg(a, !0);
        if (a.I)
            for (k = 0, c = a.I.length; k < c; ++k) l = a.I[k], l.pg && l.pg(), l.behavior.Xl.remove(a);
        this.mp.remove(a);
        this.Zl.remove(a);
        this.$l.remove(a);
        a.pg && a.pg();
        this.Yd.hasOwnProperty(a.uid.toString()) && delete this.Yd[a.uid.toString()];
        this.Nj--;
        100 > d.Wi.length && d.Wi.push(a)
    };
    g.prototype.al = function(a, d, k, c) {
        if (a.G) {
            var l = ta(Math.random() * a.kg.length);
            return this.al(a.kg[l], d, k, c)
        }
        return a.Jc ? this.we(a.Jc, d, !1, k, c, !1) : null
    };
    var K = [];
    g.prototype.we = function(a, d, k, c, l, b) {
        var h, e, n, p;
        if (!a) return null;
        var v = this.p[a[1]],
            m = v.ka.Ee;
        if (this.eg && m && !v.Gl || m && !this.D && 11 === a[0][11]) return null;
        var x = d;
        m || (d = null);
        var f;
        v.Wi.length ? (f = v.Wi.pop(), f.uc = !0, v.ka.qa.call(f, v)) : (f = new v.ka.qa(v), f.uc = !1);
        !k || b || this.Yd.hasOwnProperty(a[2].toString()) ? f.uid = this.Nh++ : f.uid = a[2];
        this.Yd[f.uid.toString()] = f;
        f.Ip = this.ip++;
        f.hf = v.d.length;
        h = 0;
        for (e = this.Xc.length; h < e; ++h) this.Xc[h].type === v && f.hf++;
        f.mh = Hb;
        f.toString = Ib;
        n = a[3];
        if (f.uc) Xa(f.U);
        else {
            f.U = {};
            if ("undefined" !== typeof cr_is_preview)
                for (f.Ko = [], f.Ko.length = n.length, h = 0, e = n.length; h < e; h++) f.Ko[h] = n[h][1];
            f.jb = [];
            f.jb.length = n.length
        }
        h = 0;
        for (e = n.length; h < e; h++) f.jb[h] = n[h][0];
        if (m) {
            var g = a[0];
            f.x = ja(c) ? g[0] : c;
            f.y = ja(l) ? g[1] : l;
            f.z = g[2];
            f.width = g[3];
            f.height = g[4];
            f.depth = g[5];
            f.k = g[6];
            f.opacity = g[7];
            f.Yb = g[8];
            f.Zb = g[9];
            f.Jb = g[10];
            h = g[11];
            !this.D && v.J.length && (f.Jb = h);
            f.Xg = lb(f.Jb);
            this.Lc && mb(f, f.Jb, this.Lc);
            if (f.uc) {
                h = 0;
                for (e = g[12].length; h < e; h++)
                    for (n = 0, p = g[12][h].length; n < p; n++) f.Ka[h][n] = g[12][h][n];
                f.Oa.set(0, 0, 0, 0);
                f.ve.set(0, 0, -1, -1);
                f.ec.set(0, 0, -1, -1);
                f.Qb.ai(f.Oa);
                C(f.Uk)
            } else {
                f.Ka = g[12].slice(0);
                h = 0;
                for (e = f.Ka.length; h < e; h++) f.Ka[h] = g[12][h].slice(0);
                f.ba = [];
                f.me = [];
                f.me.length = v.J.length;
                f.Oa = new wa(0, 0, 0, 0);
                f.ve = new wa(0, 0, -1, -1);
                f.ec = new wa(0, 0, -1, -1);
                f.Qb = new ya;
                f.Uk = [];
                f.Ra = Lb;
                f.Lx = Mb;
                f.Kb = Nb;
                f.ra = Ob;
                f.ow = Pb;
                f.wq = Qb;
                f.sd = Rb
            }
            f.ji = !1;
            f.kw = 0;
            f.jw = 0;
            f.iw = null;
            14 === g.length && (f.ji = !0, f.kw = g[13][0], f.jw = g[13][1], f.iw = g[13][2]);
            h = 0;
            for (e = v.J.length; h < e; h++) f.me[h] = !0;
            f.be = !0;
            f.hd = Sb;
            f.hd();
            f.xq = !!f.ba.length;
            f.Tk = !0;
            f.Vk = !0;
            v.Ei = !0;
            f.visible = !0;
            f.Mh = -1;
            f.j = d;
            f.jd = d.d.length;
            f.Ye = 0;
            "undefined" === typeof f.ea && (f.ea = null);
            this.M = f.Ue = !0
        }
        var r;
        C(K);
        h = 0;
        for (e = v.Aa.length; h < e; h++) K.push.apply(K, v.Aa[h].Ia);
        K.push.apply(K, v.Ia);
        if (f.uc)
            for (h = 0, e = K.length; h < e; h++) {
                var u = K[h];
                r = f.I[h];
                r.uc = !0;
                u.behavior.qa.call(r, u, f);
                g = a[4][h];
                n = 0;
                for (p = g.length; n < p; n++) r.r[n] = g[n];
                r.R();
                u.behavior.Xl.add(f)
            } else
                for (f.I = [], h = 0, e = K.length; h < e; h++) u = K[h], r = new u.behavior.qa(u, f), r.uc = !1, r.r = a[4][h].slice(0), r.R(), f.I.push(r), u.behavior.Xl.add(f);
        g = a[5];
        if (f.uc)
            for (h = 0, e = g.length; h < e; h++) f.r[h] = g[h];
        else f.r = g.slice(0);
        this.Xc.push(f);
        this.Ce = !0;
        d && (d.Rg(f, !0), 1 !== d.ac || 1 !== d.cc) && (v.Fi = !0);
        this.Nj++;
        if (v.$b) {
            if (f.$b = !0, f.uc ? C(f.siblings) : f.siblings = [], !k && !b) {
                h = 0;
                for (e = v.kc.length; h < e; h++)
                    if (v.kc[h] !== v) {
                        if (!v.kc[h].Jc) return null;
                        f.siblings.push(this.we(v.kc[h].Jc, x, !1, m ? f.x : c, m ? f.y : l, !0))
                    }
                h = 0;
                for (e = f.siblings.length; h < e; h++)
                    for (f.siblings[h].siblings.push(f), n = 0; n < e; n++) h !== n && f.siblings[h].siblings.push(f.siblings[n])
            }
        } else f.$b = !1, f.siblings = null;
        f.R();
        h = 0;
        for (e = f.I.length; h < e; h++) f.I[h].vv && f.I[h].vv();
        return f
    };
    g.prototype.Sf = function(a) {
        var d, k;
        d = 0;
        for (k = this.la.L.length; d < k; d++) {
            var c = this.la.L[d];
            if (ob(c.name, a)) return c
        }
        return null
    };
    g.prototype.rd = function(a) {
        a = ta(a);
        0 > a && (a = 0);
        a >= this.la.L.length && (a = this.la.L.length - 1);
        return this.la.L[a]
    };
    g.prototype.nj = function(a) {
        return ka(a) ? this.rd(a) : this.Sf(a.toString())
    };
    g.prototype.Yk = function(a) {
        var d, k;
        d = 0;
        for (k = a.length; d < k; d++) a[d].S().aa = !0
    };
    g.prototype.Uh = function(a) {
        var d, k;
        d = 0;
        for (k = a.length; d < k; d++) a[d].Uh()
    };
    g.prototype.Vh = function(a) {
        var d, k;
        d = 0;
        for (k = a.length; d < k; d++) a[d].Vh()
    };
    g.prototype.Je = function(a) {
        var d, k;
        d = 0;
        for (k = a.length; d < k; d++) a[d].Je()
    };
    g.prototype.uq = function(a) {
        if (a.Ei) {
            var d, k, c = a.d;
            d = 0;
            for (k = c.length; d < k; ++d) c[d].wq();
            c = this.Xc;
            d = 0;
            for (k = c.length; d < k; ++d) c[d].type === a && c[d].wq();
            a.Ei = !1
        }
    };
    g.prototype.fu = function(a, d, k, c) {
        var l, h, e = a ? 1 !== a.ac || 1 !== a.cc : !1;
        if (d.G)
            for (a = 0, l = d.kg.length; a < l; ++a) h = d.kg[a], e || h.Fi ? Ea(c, h.d) : (this.uq(h), h.Qi.dk(k, c));
        else e || d.Fi ? Ea(c, d.d) : (this.uq(d), d.Qi.dk(k, c))
    };
    g.prototype.Fg = function(a, d, k, c) {
        var l = a.S(),
            h, e, b, n, p = this.Ua().gb.Dc,
            v, f, m;
        if (l.aa)
            for (c || (l.aa = !1, C(l.d)), h = 0, n = a.d.length; h < n; h++)
                if (b = a.d[h], b.ra(), v = b.j.Pa(d, k, !0), f = b.j.Pa(d, k, !1), b.Kb(v, f)) {
                    if (c) return !1;
                    l.d.push(b)
                } else p && l.N.push(b);
        else {
            e = 0;
            m = p ? l.N : l.d;
            h = 0;
            for (n = m.length; h < n; h++)
                if (b = m[h], b.ra(), v = b.j.Pa(d, k, !0), f = b.j.Pa(d, k, !1), b.Kb(v, f)) {
                    if (c) return !1;
                    p ? l.d.push(b) : (l.d[e] = l.d[h], e++)
                }
            c || (m.length = e)
        }
        a.Id();
        return c ? !0 : l.xl()
    };
    g.prototype.gw = function(a, d) {
        if (!(a && d && a !== d && a.Ue && d.Ue)) return !1;
        a.ra();
        d.ra();
        var k = a.j,
            c = d.j,
            l, h, b, e, n, p, v, f;
        if (k === c || k.ac === c.ac && c.cc === c.cc && k.scale === c.scale && k.k === c.k && k.Pb === c.Pb) {
            if (!a.Oa.Gu(d.Oa) || !a.Qb.Lo(d.Qb) || a.ji && d.ji) return !1;
            if (a.ji) return this.iq(a, d);
            if (d.ji) return this.iq(d, a);
            v = a.ea && !a.ea.Yf();
            l = d.ea && !d.ea.Yf();
            if (!v && !l) return !0;
            v ? (a.ea.Gf(a.width, a.height, a.k), v = a.ea) : (this.fd.Bg(a.Qb, a.x, a.y, a.width, a.height), v = this.fd);
            l ? (d.ea.Gf(d.width, d.height, d.k), f = d.ea) : (this.fd.Bg(d.Qb, d.x, d.y, d.width, d.height), f = this.fd);
            return v.sh(f, d.x - a.x, d.y -
                a.y)
        }
        v = a.ea && !a.ea.Yf();
        l = d.ea && !d.ea.Yf();
        v ? (a.ea.Gf(a.width, a.height, a.k), this.fd.Xp(a.ea)) : this.fd.Bg(a.Qb, a.x, a.y, a.width, a.height);
        v = this.fd;
        l ? (d.ea.Gf(d.width, d.height, d.k), this.Lm.Xp(d.ea)) : this.Lm.Bg(d.Qb, d.x, d.y, d.width, d.height);
        f = this.Lm;
        l = 0;
        for (h = v.cd; l < h; l++) b = 2 * l, e = b + 1, n = v.pb[b], p = v.pb[e], v.pb[b] = k.Da(n + a.x, p + a.y, !0), v.pb[e] = k.Da(n + a.x, p + a.y, !1);
        v.ra();
        l = 0;
        for (h = f.cd; l < h; l++) b = 2 * l, e = b + 1, n = f.pb[b], p = f.pb[e], f.pb[b] = c.Da(n + d.x, p + d.y, !0), f.pb[e] = c.Da(n + d.x, p + d.y, !1);
        f.ra();
        return v.sh(f, 0, 0)
    };
    var T = new ya;
    new wa(0, 0, 0, 0);
    var N = [];
    g.prototype.iq = function(a, d) {
        var k, c, l, h, b = d.Oa,
            e = a.x,
            n = a.y;
        a.Tx(b, N);
        var p = d.ea && !d.ea.Yf();
        k = 0;
        for (c = N.length; k < c; ++k)
            if (l = N[k], h = l.qy, b.Hu(h, e, n) && (T.ai(h), T.offset(e, n), T.Lo(d.Qb)))
                if (p)
                    if (d.ea.Gf(d.width, d.height, d.k), l.nm) {
                        if (l.nm.sh(d.ea, d.x - (e + h.left), d.y - (n + h.top))) return C(N), !0
                    } else {
                        if (this.fd.Bg(T, 0, 0, h.right - h.left, h.bottom - h.top), this.fd.sh(d.ea, d.x, d.y)) return C(N), !0
                    }
        else if (l.nm) {
            if (this.fd.Bg(d.Qb, 0, 0, d.width, d.height), l.nm.sh(this.fd, -(e + h.left), -(n + h.top))) return C(N), !0
        } else return C(N), !0;
        C(N);
        return !1
    };
    g.prototype.rq = function(a, d) {
        if (!d) return !1;
        var k, c, l, h, b;
        k = 0;
        for (c = a.Ia.length; k < c; k++)
            if (a.Ia[k].behavior instanceof d) return !0;
        if (!a.G)
            for (k = 0, c = a.Aa.length; k < c; k++)
                for (b = a.Aa[k], l = 0, h = b.Ia.length; l < h; l++)
                    if (b.Ia[l].behavior instanceof d) return !0;
        return !1
    };
    g.prototype.Tm = function(a) {
        return this.rq(a, gc.$w)
    };
    g.prototype.Um = function(a) {
        return this.rq(a, gc.bx)
    };
    var G = -1;
    g.prototype.trigger = function(a, d, k) {
        if (!this.la) return !1;
        var c = this.la.bf;
        if (!c) return !1;
        var l = !1,
            h, b, e;
        G++;
        var n = c.cl;
        b = 0;
        for (e = n.length; b < e; ++b) h = this.oq(a, d, n[b], k), l = l || h;
        h = this.oq(a, d, c, k);
        G--;
        return l || h
    };
    g.prototype.oq = function(a, d, k, c) {
        var l = !1,
            h, b, e, n;
        if (d)
            for (e = this.Rm(a, d, d.type.name, k, c), l = l || e, n = d.type.Aa, h = 0, b = n.length; h < b; ++h) e = this.Rm(a, d, n[h].name, k, c), l = l || e;
        else e = this.Rm(a, d, "system", k, c), l = l || e;
        return l
    };
    g.prototype.Rm = function(a, d, k, c, l) {
        var h, b = !1,
            e = !1,
            e = "undefined" !== typeof l,
            n = (e ? c.po : c.pq)[k];
        if (!n) return b;
        var p = null;
        c = 0;
        for (h = n.length; c < h; ++c)
            if (n[c].method == a) {
                p = n[c].ah;
                break
            }
        if (!p) return b;
        var v;
        e ? v = p[l] : v = p;
        if (!v) return null;
        c = 0;
        for (h = v.length; c < h; c++) a = v[c][0], l = v[c][1], e = this.Wt(d, k, a, l), b = b || e;
        return b
    };
    g.prototype.Wt = function(a, d, k, c) {
        var l, h, b = !1;
        this.Sm++;
        var e = this.Ua().gb;
        e && this.Uh(e.Me);
        var n = 1 < this.Sm;
        this.Uh(k.Me);
        n && this.Av();
        var p = this.ck(k);
        p.gb = k;
        a && (l = this.types[d].S(), l.aa = !1, C(l.d), l.d[0] = a, this.types[d].Id());
        a = !0;
        if (k.parent) {
            d = p.hq;
            for (l = k.parent; l;) d.push(l), l = l.parent;
            d.reverse();
            l = 0;
            for (h = d.length; l < h; l++)
                if (!d[l].Lv()) {
                    a = !1;
                    break
                }
        }
        a && (this.bh++, k.Dc ? k.Kv(c) : k.Ya(), b = b || p.mf);
        this.Zj();
        n && this.uv();
        this.Je(k.Me);
        e && this.Je(e.Me);
        this.Ce && 0 === this.$c && 0 === G && !this.Hl && this.Hb();
        this.Sm--;
        return b
    };
    g.prototype.ih = function() {
        var a = this.Ua();
        return a.gb.fb[a.Sa]
    };
    g.prototype.Ku = function() {
        return 0 === this.Ua().Sa
    };
    g.prototype.Av = function() {
        this.Kj++;
        this.Kj >= this.Rl.length && this.Rl.push([])
    };
    g.prototype.uv = function() {
        this.Kj--
    };
    g.prototype.xo = function() {
        return this.Rl[this.Kj]
    };
    g.prototype.ck = function(a) {
        this.$i++;
        this.$i >= this.hl.length && this.hl.push(new Tb);
        var d = this.Ua();
        d.reset(a);
        return d
    };
    g.prototype.Zj = function() {
        this.$i--
    };
    g.prototype.Ua = function() {
        return this.hl[this.$i]
    };
    g.prototype.Jp = function() {
        this.Kh++;
        this.Kh >= this.Jh.length && this.Jh.push(ca({
            name: void 0,
            index: 0,
            $a: !1
        }));
        var a = this.yo();
        a.name = void 0;
        a.index = 0;
        a.$a = !1;
        return a
    };
    g.prototype.Dp = function() {
        this.Kh--
    };
    g.prototype.yo = function() {
        return this.Jh[this.Kh]
    };
    g.prototype.Ao = function(a, d) {
        for (var k, c, l, h, b, e; d;) {
            k = 0;
            for (c = d.Qc.length; k < c; k++)
                if (e = d.Qc[k], e instanceof Ub && ob(a, e.name)) return e;
            d = d.parent
        }
        k = 0;
        for (c = this.Nd.length; k < c; k++)
            for (b = this.Nd[k], l = 0, h = b.ze.length; l < h; l++)
                if (e = b.ze[l], e instanceof Ub && ob(a, e.name)) return e;
        return null
    };
    g.prototype.Bo = function(a) {
        var d, k;
        d = 0;
        for (k = this.ad.length; d < k; d++)
            if (this.ad[d].T === a) return this.ad[d];
        return null
    };
    g.prototype.qj = function(a) {
        var d, k;
        d = 0;
        for (k = this.p.length; d < k; d++)
            if (this.p[d].T === a) return this.p[d];
        return null
    };
    g.prototype.hu = function(a) {
        var d, k;
        d = 0;
        for (k = this.pe.length; d < k; d++)
            if (this.pe[d].T === a) return this.pe[d];
        return null
    };
    g.prototype.ct = function(a, d) {
        this.ci = [a, d];
        this.M = !0
    };
    g.prototype.Bu = function() {
        var a = this,
            d = this.Cm,
            k = this.Td,
            c = this.Hj,
            l = !1;
        this.aq && (l = !0, d = "__c2_continuouspreview", this.aq = !1);
        if (d.length) {
            this.Hb();
            k = this.Pv();
            if (b() && !this.Cc) r(d, k, function() {
                ha("Saved state to IndexedDB storage (" + k.length + " bytes)");
                a.Td = k;
                a.trigger(I.prototype.e.Ck, null);
                a.Td = "";
                l && t()
            }, function(c) {
                try {
                    localStorage.setItem("__c2save_" + d, k), ha("Saved state to WebStorage (" +
                        k.length + " bytes)"), a.Td = k, a.trigger(I.prototype.e.Ck, null), a.Td = "", l && t()
                } catch (h) {
                    ha("Failed to save game state: " + c + "; " + h), a.trigger(I.prototype.e.wn, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + d, k), ha("Saved state to WebStorage (" + k.length + " bytes)"), a.Td = k, this.trigger(I.prototype.e.Ck, null), a.Td = "", l && t()
            } catch (h) {
                ha("Error saving to WebStorage: " + h), a.trigger(I.prototype.e.wn, null)
            }
            this.Hj = this.Cm = "";
            this.lb = null
        }
        if (c.length) {
            if (b() && !this.Cc) q(c, function(d) {
                d ? (a.lb = d, ha("Loaded state from IndexedDB storage (" +
                    a.lb.length + " bytes)")) : (a.lb = localStorage.getItem("__c2save_" + c) || "", ha("Loaded state from WebStorage (" + a.lb.length + " bytes)"));
                a.fi = !1;
                a.lb || (a.lb = null, a.trigger(I.prototype.e.wi, null))
            }, function() {
                a.lb = localStorage.getItem("__c2save_" + c) || "";
                ha("Loaded state from WebStorage (" + a.lb.length + " bytes)");
                a.fi = !1;
                a.lb || (a.lb = null, a.trigger(I.prototype.e.wi, null))
            });
            else {
                try {
                    this.lb = localStorage.getItem("__c2save_" + c) || "", ha("Loaded state from WebStorage (" + this.lb.length + " bytes)")
                } catch (e) {
                    this.lb = null
                }
                this.fi = !1;
                a.lb || (a.lb = null, a.trigger(I.prototype.e.wi, null))
            }
            this.Cm = this.Hj = ""
        }
        null !== this.lb && (this.Hb(), this.Vu(this.lb) ? (this.Td = this.lb, this.trigger(I.prototype.e.Hr, null), this.Td = "") : a.trigger(I.prototype.e.wi, null), this.lb = null)
    };
    g.prototype.Pv = function() {
        var a, d, k, c, l, h, e, b = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.tb.K,
                walltime: this.he.K,
                timescale: this.vf,
                tickcount: this.Dd,
                execcount: this.bh,
                next_uid: this.Nh,
                running_layout: this.la.T,
                start_time_offset: Date.now() - this.pk
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
        for (d = this.p.length; a < d; a++)
            if (l = this.p[a], !l.G && !this.Tm(l)) {
                h = {
                    instances: []
                };
                Wa(l.U) && (h.ex = m(l.U));
                k = 0;
                for (c = l.d.length; k < c; k++) h.instances.push(this.Bm(l.d[k]));
                b.types[l.T.toString()] = h
            }
        a = 0;
        for (d = this.ad.length; a < d; a++) k = this.ad[a], b.layouts[k.T.toString()] = k.Tb();
        c = b.events.groups;
        a = 0;
        for (d = this.pe.length; a < d; a++) k = this.pe[a], c[k.T.toString()] = this.oh[k.nh].Uf;
        d = b.events.cnds;
        for (e in this.ue) this.ue.hasOwnProperty(e) && (a = this.ue[e], Wa(a.U) && (d[e] = {
            ex: m(a.U)
        }));
        d = b.events.acts;
        for (e in this.ne) this.ne.hasOwnProperty(e) && (a = this.ne[e], Wa(a.U) && (d[e] = {
            ex: m(a.U)
        }));
        d = b.events.vars;
        for (e in this.Jg) this.Jg.hasOwnProperty(e) && (a = this.Jg[e], a.Aj || a.parent && !a.Eh || (d[e] = a.data));
        b.system = this.Bd.Tb();
        return JSON.stringify(b)
    };
    g.prototype.Lp = function() {
        var a, d, k, c, l, h;
        this.Yd = {};
        a = 0;
        for (d = this.p.length; a < d; a++)
            if (k = this.p[a], !k.G)
                for (c = 0, l = k.d.length; c < l; c++) h = k.d[c], this.Yd[h.uid.toString()] = h
    };
    g.prototype.Vu = function(a) {
        var d;
        try {
            d = JSON.parse(a)
        } catch (k) {
            return !1
        }
        if (!d.c2save || 1 < d.version) return !1;
        this.wh = !0;
        a = d.rt;
        this.tb.reset();
        this.tb.K = a.time;
        this.he.reset();
        this.he.K = a.walltime || 0;
        this.vf = a.timescale;
        this.Dd = a.tickcount;
        this.bh = a.execcount;
        this.pk = Date.now() - a.start_time_offset;
        var c = a.running_layout;
        if (c !== this.la.T)
            if (c = this.Bo(c)) this.jo(c);
            else return;
        var l, h, e, b, n, p, v;
        p = d.types;
        for (h in p)
            if (p.hasOwnProperty(h) && (b = this.qj(parseInt(h, 10))) && !b.G && !this.Tm(b)) {
                p[h].ex ? b.U = p[h].ex : Xa(b.U);
                n = b.d;
                e = p[h].instances;
                c = 0;
                for (l = oa(n.length, e.length); c < l; c++) this.Ij(n[c], e[c]);
                c = e.length;
                for (l = n.length; c < l; c++) this.je(n[c]);
                c = n.length;
                for (l = e.length; c < l; c++) {
                    n = null;
                    if (b.ka.Ee && (n = this.la.oj(e[c].w.l), !n)) continue;
                    n = this.we(b.Jc, n, !1, 0, 0, !0);
                    this.Ij(n, e[c])
                }
                b.Dg = !0
            }
        this.Hb();
        this.Lp();
        l = d.layouts;
        for (h in l) l.hasOwnProperty(h) && (c = this.Bo(parseInt(h, 10))) && c.qc(l[h]);
        l = d.events.groups;
        for (h in l) l.hasOwnProperty(h) && (c = this.hu(parseInt(h, 10))) && this.oh[c.nh] && this.oh[c.nh].Tp(l[h]);
        c = d.events.cnds;
        for (h in this.ue) this.ue.hasOwnProperty(h) && (c.hasOwnProperty(h) ? this.ue[h].U = c[h].ex : this.ue[h].U = {});
        c = d.events.acts;
        for (h in this.ne) this.ne.hasOwnProperty(h) && (c.hasOwnProperty(h) ? this.ne[h].U = c[h].ex : this.ne[h].U = {});
        c = d.events.vars;
        for (h in c) c.hasOwnProperty(h) && this.Jg.hasOwnProperty(h) && (this.Jg[h].data = c[h]);
        this.Nh = a.next_uid;
        this.wh = !1;
        c = 0;
        for (l = this.ej.length; c < l; ++c) n = this.ej[c], this.trigger(Object.getPrototypeOf(n.type.ka).e.Mg, n);
        C(this.ej);
        this.Bd.qc(d.system);
        c = 0;
        for (l = this.p.length; c < l; c++)
            if (b = this.p[c], !b.G && !this.Tm(b))
                for (d = 0, h = b.d.length; d < h; d++) {
                    n = b.d[d];
                    if (b.$b)
                        for (p = n.mh(), C(n.siblings), a = 0, e = b.kc.length; a < e; a++) v = b.kc[a], b !== v && n.siblings.push(v.d[p]);
                    n.oe && n.oe();
                    if (n.I)
                        for (a = 0, e = n.I.length; a < e; a++) p = n.I[a], p.oe && p.oe()
                }
        return this.M = !0
    };
    g.prototype.Bm = function(a, d) {
        var k, c, l, h, b;
        h = a.type;
        l = h.ka;
        var e = {};
        d ? e.c2 = !0 : e.uid = a.uid;
        Wa(a.U) && (e.ex = m(a.U));
        if (a.jb && a.jb.length)
            for (e.ivs = {}, k = 0, c = a.jb.length; k < c; k++) e.ivs[a.type.Dl[k].toString()] = a.jb[k];
        if (l.Ee) {
            l = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.j.T,
                zi: a.sd()
            };
            0 !== a.k && (l.a = a.k);
            1 !== a.opacity && (l.o = a.opacity);
            .5 !== a.Yb && (l.hX = a.Yb);
            .5 !== a.Zb && (l.hY = a.Zb);
            0 !== a.Jb && (l.bm = a.Jb);
            a.visible || (l.v = a.visible);
            a.Ue || (l.ce = a.Ue); - 1 !== a.Mh && (l.mts = a.Mh);
            if (h.J.length)
                for (l.fx = [], k = 0, c = h.J.length; k < c; k++) b = h.J[k], l.fx.push({
                    name: b.name,
                    active: a.me[b.index],
                    params: a.Ka[b.index]
                });
            e.w = l
        }
        if (a.I && a.I.length)
            for (e.behs = {}, k = 0, c = a.I.length; k < c; k++) h = a.I[k], h.Tb && (e.behs[h.type.T.toString()] = h.Tb());
        a.Tb && (e.data = a.Tb());
        return e
    };
    g.prototype.ju = function(a, d) {
        var k, c;
        k = 0;
        for (c = a.Dl.length; k < c; k++)
            if (a.Dl[k] === d) return k;
        return -1
    };
    g.prototype.eu = function(a, d) {
        var k, c;
        k = 0;
        for (c = a.I.length; k < c; k++)
            if (a.I[k].type.T === d) return k;
        return -1
    };
    g.prototype.Ij = function(a, d, k) {
        var c, l, h, e, b;
        b = a.type;
        e = b.ka;
        if (k) {
            if (!d.c2) return
        } else a.uid = d.uid;
        d.ex ? a.U = d.ex : Xa(a.U);
        if (l = d.ivs)
            for (c in l) l.hasOwnProperty(c) && (h = this.ju(b, parseInt(c, 10)), 0 > h || h >= a.jb.length || (a.jb[h] = l[c]));
        if (e.Ee) {
            h = d.w;
            a.j.T !== h.l && (l = a.j, a.j = this.la.oj(h.l), a.j ? (l.vg(a, !0), a.j.Rg(a, !0), a.Ra(), a.j.$h(0)) : (a.j = l, k || this.je(a)));
            a.x = h.x;
            a.y = h.y;
            a.width = h.w;
            a.height = h.h;
            a.jd = h.zi;
            a.k = h.hasOwnProperty("a") ? h.a : 0;
            a.opacity = h.hasOwnProperty("o") ? h.o : 1;
            a.Yb = h.hasOwnProperty("hX") ? h.hX : .5;
            a.Zb = h.hasOwnProperty("hY") ? h.hY : .5;
            a.visible = h.hasOwnProperty("v") ? h.v : !0;
            a.Ue = h.hasOwnProperty("ce") ? h.ce : !0;
            a.Mh = h.hasOwnProperty("mts") ? h.mts : -1;
            a.Jb = h.hasOwnProperty("bm") ? h.bm : 0;
            a.Xg = lb(a.Jb);
            this.Lc && mb(a, a.Jb, this.Lc);
            a.Ra();
            if (h.hasOwnProperty("fx"))
                for (k = 0, l = h.fx.length; k < l; k++) e = b.ql(h.fx[k].name), 0 > e || (a.me[e] = h.fx[k].active, a.Ka[e] = h.fx[k].params);
            a.hd()
        }
        if (b = d.behs)
            for (c in b) b.hasOwnProperty(c) && (k = this.eu(a, parseInt(c, 10)), 0 > k || a.I[k].qc(b[c]));
        d.data && a.qc(d.data)
    };
    g.prototype.qo = function(a, d, k) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(d, k)
        }, k)
    };
    g.prototype.Xt = function(a, d) {
        this.qo("data.js", function(k) {
            var c = new FileReader;
            c.onload = function(d) {
                a(d.target.result)
            };
            c.onerror = d;
            c.readAsText(k)
        }, d)
    };
    var F = [],
        O = 0;
    g.prototype.Tl = function() {
        if (F.length && !(8 <= O)) {
            O++;
            var a = F.shift();
            this.dt(a.filename, a.fw, a.pt)
        }
    };
    g.prototype.ro = function(a, d, k) {
        var c = this;
        F.push({
            filename: a,
            fw: function(a) {
                O--;
                c.Tl();
                d(a)
            },
            pt: function(a) {
                O--;
                c.Tl();
                k(a)
            }
        });
        this.Tl()
    };
    g.prototype.dt = function(a, d, k) {
        this.qo(a, function(a) {
            var k = new FileReader;
            k.onload = function(a) {
                d(a.target.result)
            };
            k.readAsArrayBuffer(a)
        }, k)
    };
    g.prototype.Yt = function(a, d, k) {
        this.ro(a, function(a) {
            a = URL.createObjectURL(new Blob([a]));
            d(a)
        }, k)
    };
    g.prototype.Iu = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    g.prototype.Up = function(a, d) {
        this.Bh && !this.Iu(d) ? this.Yt(d, function(d) {
            a.src = d
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = d
    };
    g.prototype.jk = function(a, d) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = d : (a.webkitImageSmoothingEnabled = d, a.mozImageSmoothingEnabled = d, a.msImageSmoothingEnabled = d)
    };
    Vb = function(a) {
        return new g(document.getElementById(a))
    };
    Wb = function(a, d) {
        return new g({
            dc: !0,
            width: a,
            height: d
        })
    };
    window.cr_createRuntime = Vb;
    window.cr_createDCRuntime = Wb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.re = !0;
        document.body.appendChild(a);
        a = new g(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new g(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var g = document.getElementById("c2canvas");
    return g ? g.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(g, f) {
    var b = window.cr_getC2Runtime();
    b && b.ct(g, f)
};
window.cr_sizeCanvas = function(g, f) {
    if (0 !== g && 0 !== f) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(g, f)
    }
};
window.cr_setSuspended = function(g) {
    var f = window.cr_getC2Runtime();
    f && f.setSuspended(g)
};
(function() {
    function g(a, c) {
        this.b = a;
        this.bf = null;
        this.scrollX = this.b.nb / 2;
        this.scrollY = this.b.mb / 2;
        this.scale = 1;
        this.k = 0;
        this.Rf = !0;
        this.name = c[0];
        this.pv = c[1];
        this.ov = c[2];
        this.width = c[1];
        this.height = c[2];
        this.sq = c[3];
        this.Zp = c[4];
        this.T = c[5];
        var e = c[6],
            d, h;
        this.L = [];
        this.rh = [];
        d = 0;
        for (h = e.length; d < h; d++) {
            var b = new Xb(this, e[d]);
            b.kp = d;
            this.L.push(b)
        }
        e = c[7];
        this.jf = [];
        d = 0;
        for (h = e.length; d < h; d++) {
            var b = e[d],
                n = this.b.p[b[1]];
            n.Jc || (n.Jc = b);
            this.jf.push(b); - 1 === this.rh.indexOf(n) && this.rh.push(n)
        }
        this.J = [];
        this.ba = [];
        this.be = !0;
        this.Ka = [];
        d = 0;
        for (h = c[8].length; d < h; d++) this.J.push({
            id: c[8][d][0],
            name: c[8][d][1],
            Za: -1,
            Ke: !1,
            Ib: !0,
            index: d
        }), this.Ka.push(c[8][d][2].slice(0));
        this.hd();
        this.ug = new wa(0, 0, 1, 1);
        this.um = new wa(0, 0, 1, 1);
        this.Ie = {}
    }

    function f(a, c) {
        return a.jd - c.jd
    }

    function b(a, c) {
        this.ub = a;
        this.b = a.b;
        this.d = [];
        this.scale = 1;
        this.k = 0;
        this.Md = !1;
        this.ge = new wa(0, 0, 0, 0);
        this.mq = new ya;
        this.ta = this.pa = this.ua = this.na = 0;
        this.zf = !1;
        this.ie = -1;
        this.Zk = 0;
        this.name = c[0];
        this.index = c[1];
        this.T = c[2];
        this.visible = c[3];
        this.Uc = c[4];
        this.gd = c[5];
        this.ac = c[6];
        this.cc = c[7];
        this.opacity = c[8];
        this.ij = c[9];
        this.Gc = c[10];
        this.Pb = c[11];
        this.Jb = c[12];
        this.lt = c[13];
        this.Xg = "source-over";
        this.Lb = this.Ob = 0;
        this.Eb = null;
        this.Ud = u();
        this.dd = !0;
        this.hg = new wa(0, 0, -1, -1);
        this.yb = new wa(0, 0, -1, -1);
        this.Gc && (this.Eb = new kb(this.b.nb, this.b.mb));
        this.zd = !1;
        var e = c[14],
            d, h;
        this.fq = [];
        this.Bc = [];
        this.Yg = [];
        d = 0;
        for (h = e.length; d < h; d++) {
            var b = e[d],
                n = this.b.p[b[1]];
            n.Jc || (n.Jc = b, n.Zs = this.index);
            this.Bc.push(b); - 1 === this.ub.rh.indexOf(n) && this.ub.rh.push(n)
        }
        Da(this.fq, this.Bc);
        this.J = [];
        this.ba = [];
        this.be = !0;
        this.Ka = [];
        d = 0;
        for (h = c[15].length; d < h; d++) this.J.push({
            id: c[15][d][0],
            name: c[15][d][1],
            Za: -1,
            Ke: !1,
            Ib: !0,
            index: d
        }), this.Ka.push(c[15][d][2].slice(0));
        this.hd();
        this.ug = new wa(0, 0, 1, 1);
        this.um = new wa(0, 0, 1, 1)
    }

    function u() {
        return m.length ? m.pop() : []
    }

    function r(a) {
        C(a);
        m.push(a)
    }
    g.prototype.Ov = function(a) {
        var c = a.type.T.toString();
        this.Ie.hasOwnProperty(c) || (this.Ie[c] = []);
        this.Ie[c].push(this.b.Bm(a))
    };
    g.prototype.Fo = function() {
        var a = this.L[0];
        return !a.gd && 1 === a.opacity && !a.ij && a.visible
    };
    g.prototype.hd = function() {
        C(this.ba);
        this.be = !0;
        var a, c, b;
        a = 0;
        for (c = this.J.length; a < c; a++) b = this.J[a], b.Ib && (this.ba.push(b), b.Ke || (this.be = !1))
    };
    g.prototype.pl = function(a) {
        var c, b, d;
        c = 0;
        for (b = this.J.length; c < b; c++)
            if (d = this.J[c], d.name === a) return d;
        return null
    };
    var q = [],
        t = !0;
    g.prototype.Jm = function() {
        this.Zp && (this.bf = this.b.il[this.Zp], this.bf.Wm());
        this.b.la = this;
        this.width = this.pv;
        this.height = this.ov;
        this.scrollX = this.b.nb / 2;
        this.scrollY = this.b.mb / 2;
        var a, c, b, d, h, e, n;
        a = 0;
        for (b = this.b.p.length; a < b; a++)
            if (c = this.b.p[a], !c.G)
                for (h = c.d, c = 0, d = h.length; c < d; c++)
                    if (e = h[c], e.j) {
                        var k = e.j.kp;
                        k >= this.L.length && (k = this.L.length - 1);
                        e.j = this.L[k]; - 1 === e.j.d.indexOf(e) && e.j.d.push(e);
                        e.j.zf = !0
                    }
        if (!t)
            for (a = 0, b = this.L.length; a < b; ++a) this.L[a].d.sort(f);
        C(q);
        this.Ns();
        a = 0;
        for (b = this.L.length; a < b; a++) e = this.L[a], e.Ys(), e.zk();
        h = !1;
        if (!this.Rf) {
            for (n in this.Ie)
                if (this.Ie.hasOwnProperty(n) && (c = this.b.qj(parseInt(n, 10))) && !c.G && this.b.Um(c)) {
                    d = this.Ie[n];
                    a = 0;
                    for (b = d.length; a < b; a++) {
                        e = null;
                        if (c.ka.Ee && (e = this.oj(d[a].w.l), !e)) continue;
                        e = this.b.we(c.Jc, e, !1, 0, 0, !0);
                        this.b.Ij(e, d[a]);
                        h = !0;
                        q.push(e)
                    }
                    C(d)
                }
            a = 0;
            for (b = this.L.length; a < b; a++) this.L[a].d.sort(f), this.L[a].zf = !0
        }
        h && (this.b.Hb(), this.b.Lp());
        for (a = 0; a < q.length; a++)
            if (e = q[a], e.type.$b)
                for (b = e.mh(), c = 0, d = e.type.kc.length; c < d; c++) n = e.type.kc[c], e.type !== n && (n.d.length > b ? e.siblings.push(n.d[b]) : n.Jc && (h = this.b.we(n.Jc, e.j, !0, e.x, e.y, !0), this.b.Hb(), n.yk(), e.siblings.push(h), q.push(h)));
        a = 0;
        for (b = this.jf.length; a < b; a++) this.b.we(this.jf[a], null, !0);
        this.b.Te = null;
        this.b.Hb();
        if (this.b.Ja && !this.b.Ba)
            for (a = 0, b = this.b.p.length; a < b; a++) n = this.b.p[a], !n.G && n.d.length && n.om && n.om(this.b.Ja);
        if (this.b.wh) Da(this.b.ej, q);
        else
            for (a = 0, b = q.length; a < b; a++) e = q[a], this.b.trigger(Object.getPrototypeOf(e.type.ka).e.Mg, e);
        C(q);
        this.b.wh || this.b.trigger(I.prototype.e.nn, null);
        this.Rf = !1
    };
    g.prototype.Xs = function() {
        var a, c, e, d, h;
        c = a = 0;
        for (e = this.jf.length; a < e; a++) d = this.jf[a], h = this.b.p[d[1]], h.global ? h.$b || this.b.we(d, null, !0) : (this.jf[c] = d, c++);
        Ba(this.jf, c)
    };
    g.prototype.dw = function() {
        this.b.wh || this.b.trigger(I.prototype.e.Gr, null);
        this.b.El = !0;
        C(this.b.Bd.hc);
        var a, c, e, d, h, b;
        if (!this.Rf)
            for (a = 0, c = this.L.length; a < c; a++)
                for (this.L[a].Ym(), h = this.L[a].d, e = 0, d = h.length; e < d; e++) b = h[e], b.type.global || this.b.Um(b.type) && this.Ov(b);
        a = 0;
        for (c = this.L.length; a < c; a++) {
            h = this.L[a].d;
            e = 0;
            for (d = h.length; e < d; e++) b = h[e], b.type.global || this.b.je(b);
            this.b.Hb();
            C(h);
            this.L[a].zf = !0
        }
        a = 0;
        for (c = this.b.p.length; a < c; a++)
            if (h = this.b.p[a], !(h.global || h.ka.Ee || h.ka.ok || h.G)) {
                e = 0;
                for (d = h.d.length; e < d; e++) this.b.je(h.d[e]);
                this.b.Hb()
            }
        t = !1;
        this.b.El = !1
    };
    new wa(0, 0, 0, 0);
    g.prototype.Yc = function(a) {
        var c, e = a,
            d = !1,
            h = !this.b.yc;
        h && (this.b.Gj || (this.b.Gj = document.createElement("canvas"), c = this.b.Gj, c.width = this.b.B, c.height = this.b.A, this.b.Yo = c.getContext("2d"), d = !0), c = this.b.Gj, e = this.b.Yo, c.width !== this.b.B && (c.width = this.b.B, d = !0), c.height !== this.b.A && (c.height = this.b.A, d = !0), d && this.b.jk(e, this.b.Ea));
        e.globalAlpha = 1;
        e.globalCompositeOperation = "source-over";
        this.b.$n && !this.Fo() && e.clearRect(0, 0, this.b.B, this.b.A);
        var b, n, d = 0;
        for (b = this.L.length; d < b; d++) n = this.L[d], n.visible && 0 < n.opacity && 11 !== n.Jb && (n.d.length || !n.gd) ? n.Yc(e) : n.zk();
        h && a.drawImage(c, 0, 0, this.b.width, this.b.height)
    };
    g.prototype.Mf = function(a) {
        a.Uv(!0);
        this.b.Wa || (this.b.Wa = a.Ic(this.b.B, this.b.A, this.b.Ea));
        if (this.b.Wa.Vg !== this.b.B || this.b.Wa.Ug !== this.b.A) a.deleteTexture(this.b.Wa), this.b.Wa = a.Ic(this.b.B, this.b.A, this.b.Ea);
        a.ed(this.b.Wa);
        this.b.yc || a.Ag(this.b.B, this.b.A);
        var c, e;
        for (c = this.L.length - 1; 0 <= c; --c) e = this.L[c], e.visible && 1 === e.opacity && e.be && 0 === e.Jb && (e.d.length || !e.gd) ? e.Mf(a) : e.zk();
        a.Uv(!1)
    };
    g.prototype.lc = function(a) {
        var c = 0 < this.ba.length || this.b.Hg || !this.b.yc || this.b.$e;
        if (c) {
            this.b.Wa || (this.b.Wa = a.Ic(this.b.B, this.b.A, this.b.Ea));
            if (this.b.Wa.Vg !== this.b.B || this.b.Wa.Ug !== this.b.A) a.deleteTexture(this.b.Wa), this.b.Wa = a.Ic(this.b.B, this.b.A, this.b.Ea);
            a.ed(this.b.Wa);
            this.b.yc || a.Ag(this.b.B, this.b.A)
        } else this.b.Wa && (a.ed(null), a.deleteTexture(this.b.Wa), this.b.Wa = null);
        this.b.$n && !this.Fo() && a.clear(0, 0, 0, 0);
        var e, d, h;
        e = 0;
        for (d = this.L.length; e < d; e++) h = this.L[e], h.visible && 0 < h.opacity && (h.d.length || !h.gd) ? h.lc(a) : h.zk();
        c && (0 === this.ba.length || 1 === this.ba.length && this.b.yc ? (1 === this.ba.length ? (c = this.ba[0].index, a.Ne(this.ba[0].Za), a.Zh(null, 1 / this.b.B, 1 / this.b.A, 0, 0, 1, 1, this.scale, this.k, 0, 0, this.b.B / 2, this.b.A / 2, this.b.tb.K, this.Ka[c]), a.pm(this.ba[0].Za) && (this.b.M = !0)) : a.Ne(0), this.b.yc || a.Ag(this.b.width, this.b.height), a.ed(null), a.Sv(!1), a.zg(1), a.Fc(this.b.Wa), a.Qv(), a.Ad(), a.Fd(), c = this.b.width / 2, e = this.b.height / 2, a.rm(-c, e, c, e, c, -e, -c, -e), a.Fc(null), a.Sv(!0)) : this.vm(a, null, null, null))
    };
    g.prototype.kh = function() {
        return 0 < this.ba.length || this.b.Hg || !this.b.yc || this.b.$e ? this.b.Wa : null
    };
    g.prototype.Co = function() {
        var a = this.L[0].mc(),
            c, e, d;
        c = 1;
        for (e = this.L.length; c < e; c++) d = this.L[c], (0 !== d.ac || 0 !== d.cc) && d.mc() < a && (a = d.mc());
        return a
    };
    g.prototype.Qp = function(a) {
        if (!this.sq) {
            var c = 1 / this.Co() * this.b.B / 2;
            a > this.width - c && (a = this.width - c);
            a < c && (a = c)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.M = !0)
    };
    g.prototype.Rp = function(a) {
        if (!this.sq) {
            var c = 1 / this.Co() * this.b.A / 2;
            a > this.height - c && (a = this.height - c);
            a < c && (a = c)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.M = !0)
    };
    g.prototype.Ns = function() {
        this.Qp(this.scrollX);
        this.Rp(this.scrollY)
    };
    g.prototype.vm = function(a, c, e, d) {
        var h = e ? e.ba : c ? c.ba : this.ba,
            b = 1,
            n = 0,
            k = 0,
            l = 0,
            p = this.b.B,
            f = this.b.A;
        e ? (b = e.j.mc(), n = e.j.ib(), k = e.j.na, l = e.j.pa, p = e.j.ua, f = e.j.ta) : c && (b = c.mc(), n = c.ib(), k = c.na, l = c.pa, p = c.ua, f = c.ta);
        var m = this.b.nl,
            g, r, u, t, q = 0,
            N = 1,
            G, F, O = this.b.B,
            w = this.b.A,
            y = O / 2,
            A = w / 2,
            J = c ? c.ug : this.ug,
            B = c ? c.um : this.um,
            P = 0,
            W = 0,
            M = 0,
            H = 0,
            Q = O,
            pa = O,
            S = w,
            Ca = w,
            qa = u = 0;
        t = e ? e.j.ib() : 0;
        if (e) {
            g = 0;
            for (r = h.length; g < r; g++) u += a.Vx(h[g].Za), qa += a.Wx(h[g].Za);
            H = e.Oa;
            P = c.Da(H.left, H.top, !0, !0);
            M = c.Da(H.left, H.top, !1, !0);
            Q = c.Da(H.right, H.bottom, !0, !0);
            S = c.Da(H.right, H.bottom, !1, !0);
            0 !== t && (g = c.Da(H.right, H.top, !0, !0), r = c.Da(H.right, H.top, !1, !0), W = c.Da(H.left, H.bottom, !0, !0), H = c.Da(H.left, H.bottom, !1, !0), t = Math.min(P, Q, g, W), Q = Math.max(P, Q, g, W), P = t, t = Math.min(M, S, r, H), S = Math.max(M, S, r, H), M = t);
            P -= u;
            M -= qa;
            Q += u;
            S += qa;
            B.left = P / O;
            B.top = 1 - M / w;
            B.right = Q / O;
            B.bottom = 1 - S / w;
            W = P = ta(P);
            H = M = ta(M);
            pa = Q = ua(Q);
            Ca = S = ua(S);
            W -= u;
            H -= qa;
            pa += u;
            Ca += qa;
            0 > P && (P = 0);
            0 > M && (M = 0);
            Q > O && (Q = O);
            S > w && (S = w);
            0 > W && (W = 0);
            0 > H && (H = 0);
            pa > O && (pa = O);
            Ca > w && (Ca = w);
            J.left = P / O;
            J.top = 1 - M / w;
            J.right = Q / O;
            J.bottom = 1 - S / w
        } else J.left = B.left = 0, J.top = B.top = 0, J.right = B.right = 1, J.bottom = B.bottom = 1;
        qa = e && (a.bk(h[0].Za) || 0 !== u || 0 !== qa || 1 !== e.opacity || e.type.ka.ep) || c && !e && 1 !== c.opacity;
        a.Qv();
        if (qa) {
            m[q] || (m[q] = a.Ic(O, w, this.b.Ea));
            if (m[q].Vg !== O || m[q].Ug !== w) a.deleteTexture(m[q]), m[q] = a.Ic(O, w, this.b.Ea);
            a.Ne(0);
            a.ed(m[q]);
            F = Ca - H;
            a.clearRect(W, w - H - F, pa - W, F);
            e ? e.lc(a) : (a.Fc(this.b.kb), a.zg(c.opacity), a.Ad(), a.translate(-y, -A), a.Fd(), a.Le(P, S, Q, S, Q, M, P, M, J));
            B.left = B.top = 0;
            B.right = B.bottom = 1;
            e && (t = J.top, J.top = J.bottom, J.bottom = t);
            q = 1;
            N = 0
        }
        a.zg(1);
        u = h.length - 1;
        var Ma = a.Gp(h[u].Za) || !c && !e && !this.b.yc;
        g = t = 0;
        for (r = h.length; g < r; g++) {
            m[q] || (m[q] = a.Ic(O, w, this.b.Ea));
            if (m[q].Vg !== O || m[q].Ug !== w) a.deleteTexture(m[q]), m[q] = a.Ic(O, w, this.b.Ea);
            a.Ne(h[g].Za);
            t = h[g].index;
            a.pm(h[g].Za) && (this.b.M = !0);
            0 != g || qa ? (a.Zh(d, 1 / O, 1 / w, B.left, B.top, B.right, B.bottom, b, n, k, l, (k + p) / 2, (l + f) / 2, this.b.tb.K, e ? e.Ka[t] : c ? c.Ka[t] : this.Ka[t]), a.Fc(null), g !== u || Ma ? (a.ed(m[q]), F = Ca - H, G = w - H - F, a.clearRect(W, G, pa - W, F)) : (e ? a.xg(e.Ob, e.Lb) : c && a.xg(c.Ob, c.Lb), a.ed(d)), a.Fc(m[N]), a.Ad(), a.translate(-y, -A), a.Fd(), a.Le(P, S, Q, S, Q, M, P, M, J), g !== u || Ma || a.Fc(null)) : (a.ed(m[q]), F = Ca - H, G = w - H - F, a.clearRect(W, G, pa - W, F), e ? (e.za && e.za.ja ? (G = e.za.ja, N = 1 / G.width, G = 1 / G.height) : (N = 1 / e.width, G = 1 / e.height), a.Zh(d, N, G, B.left, B.top, B.right, B.bottom, b, n, k, l, (k + p) / 2, (l + f) / 2, this.b.tb.K, e.Ka[t]), e.lc(a)) : (a.Zh(d, 1 / O, 1 / w, 0, 0, 1, 1, b, n, k, l, (k + p) / 2, (l + f) / 2, this.b.tb.K, c ? c.Ka[t] : this.Ka[t]), a.Fc(c ? this.b.kb : this.b.Wa), a.Ad(), a.translate(-y, -A), a.Fd(), a.Le(P, S, Q, S, Q, M, P, M, J)), B.left = B.top = 0, B.right = B.bottom = 1, e && !Ma && (t = S, S = M, M = t));
            q = 0 === q ? 1 : 0;
            N = 0 === q ? 1 : 0
        }
        Ma && (a.Ne(0), e ? a.xg(e.Ob, e.Lb) : c ? a.xg(c.Ob, c.Lb) : this.b.yc || (a.Ag(this.b.width, this.b.height), y = this.b.width / 2, A = this.b.height / 2, M = P = 0, Q = this.b.width, S = this.b.height), a.ed(d), a.Fc(m[N]), a.Ad(), a.translate(-y, -A), a.Fd(), e && 1 === h.length && !qa ? a.Le(P, M, Q, M, Q, S, P, S, J) : a.Le(P, S, Q, S, Q, M, P, M, J), a.Fc(null))
    };
    g.prototype.oj = function(a) {
        var c, e;
        c = 0;
        for (e = this.L.length; c < e; c++)
            if (this.L[c].T === a) return this.L[c];
        return null
    };
    g.prototype.Tb = function() {
        var a, c, e, d = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.k,
            w: this.width,
            h: this.height,
            fv: this.Rf,
            persist: this.Ie,
            fx: [],
            layers: {}
        };
        a = 0;
        for (c = this.J.length; a < c; a++) e = this.J[a], d.fx.push({
            name: e.name,
            active: e.Ib,
            params: this.Ka[e.index]
        });
        a = 0;
        for (c = this.L.length; a < c; a++) e = this.L[a], d.layers[e.T.toString()] = e.Tb();
        return d
    };
    g.prototype.qc = function(a) {
        var c, e, d, h;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.k = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Ie = a.persist;
        "undefined" !== typeof a.fv && (this.Rf = a.fv);
        var b = a.fx;
        c = 0;
        for (e = b.length; c < e; c++)
            if (d = this.pl(b[c].name)) d.Ib = b[c].active, this.Ka[d.index] = b[c].params;
        this.hd();
        c = a.layers;
        for (h in c) c.hasOwnProperty(h) && (a = this.oj(parseInt(h, 10))) && a.qc(c[h])
    };
    Jb = g;
    b.prototype.hd = function() {
        C(this.ba);
        this.be = !0;
        var a, c, e;
        a = 0;
        for (c = this.J.length; a < c; a++) e = this.J[a], e.Ib && (this.ba.push(e), e.Ke || (this.be = !1))
    };
    b.prototype.pl = function(a) {
        var c, e, d;
        c = 0;
        for (e = this.J.length; c < e; c++)
            if (d = this.J[c], d.name === a) return d;
        return null
    };
    b.prototype.Ys = function() {
        var a, c, e, d, h, b;
        c = a = 0;
        for (e = this.Bc.length; a < e; a++) {
            d = this.Bc[a];
            h = this.b.p[d[1]];
            b = this.b.Um(h);
            h = !0;
            if (!b || this.ub.Rf) {
                d = this.b.we(d, this, !0);
                if (!d) continue;
                q.push(d);
                d.type.global && (h = !1, this.Yg.push(d.uid))
            }
            h && (this.Bc[c] = this.Bc[a], c++)
        }
        this.Bc.length = c;
        this.b.Hb();
        !this.b.D && this.J.length && (this.Jb = this.lt);
        this.Xg = lb(this.Jb);
        this.b.Lc && mb(this, this.Jb, this.b.Lc);
        this.dd = !0
    };
    b.prototype.vg = function(a, c) {
        var e = Fa(this.d, a);
        0 > e || (c && this.Gc && a.ec && a.ec.right >= a.ec.left && (a.ra(), this.Eb.update(a, a.ec, null), a.ec.set(0, 0, -1, -1)), e === this.d.length - 1 ? this.d.pop() : (Aa(this.d, e), this.$h(e)), this.dd = !0)
    };
    b.prototype.Rg = function(a, c) {
        a.jd = this.d.length;
        this.d.push(a);
        c && this.Gc && a.ec && a.Ra();
        this.dd = !0
    };
    b.prototype.zv = function(a) {
        this.d.unshift(a);
        this.$h(0)
    };
    b.prototype.bv = function(a, c, e) {
        var d = a.sd();
        c = c.sd();
        Aa(this.d, d);
        d < c && c--;
        e && c++;
        c === this.d.length ? this.d.push(a) : this.d.splice(c, 0, a);
        this.$h(d < c ? d : c)
    };
    b.prototype.$h = function(a) {
        -1 === this.ie ? this.ie = a : a < this.ie && (this.ie = a);
        this.dd = this.zf = !0
    };
    b.prototype.Ym = function() {
        if (this.zf) {
            -1 === this.ie && (this.ie = 0);
            var a, c, e;
            if (this.Gc)
                for (a = this.ie, c = this.d.length; a < c; ++a) e = this.d[a], e.jd = a, this.Eb.Zu(e.ec);
            else
                for (a = this.ie, c = this.d.length; a < c; ++a) this.d[a].jd = a;
            this.zf = !1;
            this.ie = -1
        }
    };
    b.prototype.mc = function(a) {
        return this.ku() * (this.b.yc || a ? this.b.Sg : 1)
    };
    b.prototype.ku = function() {
        return (this.scale * this.ub.scale - 1) * this.Pb + 1
    };
    b.prototype.ib = function() {
        return this.Md ? 0 : Ka(this.ub.k + this.k)
    };
    var m = [],
        p = [],
        e = [];
    b.prototype.tl = function() {
        this.Ym();
        this.Eb.dk(this.na, this.pa, this.ua, this.ta, e);
        if (!e.length) return u();
        if (1 === e.length) {
            var a = u();
            Da(a, e[0]);
            C(e);
            return a
        }
        for (var c = !0; 1 < e.length;) {
            for (var a = e, b = void 0, d = void 0, h = void 0, f = void 0, n = void 0, b = 0, d = a.length; b < d - 1; b += 2) {
                var h = a[b],
                    f = a[b + 1],
                    n = u(),
                    k = h,
                    l = f,
                    m = n,
                    g = 0,
                    t = 0,
                    q = 0,
                    R = k.length,
                    U = l.length,
                    K = void 0,
                    T = void 0;
                for (m.length = R + U; g < R && t < U; ++q) K = k[g], T = l[t], K.jd < T.jd ? (m[q] = K, ++g) : (m[q] = T, ++t);
                for (; g < R; ++g, ++q) m[q] = k[g];
                for (; t < U; ++t, ++q) m[q] = l[t];
                c || (r(h), r(f));
                p.push(n)
            }
            1 === d % 2 && (c ? (h = u(), Da(h, a[d - 1]), p.push(h)) : p.push(a[d - 1]));
            Da(a, p);
            C(p);
            c = !1
        }
        a = e[0];
        C(e);
        return a
    };
    b.prototype.Yc = function(a) {
        this.zd = this.ij || 1 !== this.opacity || 0 !== this.Jb;
        var c = this.b.canvas,
            e = a,
            d = !1;
        this.zd && (this.b.Fj || (this.b.Fj = document.createElement("canvas"), c = this.b.Fj, c.width = this.b.B, c.height = this.b.A, this.b.Xo = c.getContext("2d"), d = !0), c = this.b.Fj, e = this.b.Xo, c.width !== this.b.B && (c.width = this.b.B, d = !0), c.height !== this.b.A && (c.height = this.b.A, d = !0), d && this.b.jk(e, this.b.Ea), this.gd && e.clearRect(0, 0, this.b.B, this.b.A));
        e.globalAlpha = 1;
        e.globalCompositeOperation = "source-over";
        this.gd || (e.fillStyle = "rgb(" + this.Uc[0] + "," + this.Uc[1] + "," + this.Uc[2] + ")", e.fillRect(0, 0, this.b.B, this.b.A));
        e.save();
        this.Md = !0;
        var d = this.Pa(0, 0, !0, !0),
            h = this.Pa(0, 0, !1, !0);
        this.Md = !1;
        this.b.bd && (d = Math.round(d), h = Math.round(h));
        this.fk(d, h, e);
        var b = this.mc();
        e.scale(b, b);
        e.translate(-d, -h);
        this.Gc ? (this.yb.left = this.Eb.Wb(this.na), this.yb.top = this.Eb.Xb(this.pa), this.yb.right = this.Eb.Wb(this.ua), this.yb.bottom = this.Eb.Xb(this.ta), this.dd || !this.yb.$g(this.hg) ? (r(this.Ud), d = this.tl(), this.dd = !1, this.hg.Jf(this.yb)) : d = this.Ud) : d = this.d;
        for (var n, k = null, h = 0, b = d.length; h < b; ++h) n = d[h], n !== k && (this.gt(n, e), k = n);
        this.Gc && (this.Ud = d);
        e.restore();
        this.zd && (a.globalCompositeOperation = this.Xg, a.globalAlpha = this.opacity, a.drawImage(c, 0, 0))
    };
    b.prototype.gt = function(a, c) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.ra();
            var e = a.Oa;
            e.right < this.na || e.bottom < this.pa || e.left > this.ua || e.top > this.ta || (c.globalCompositeOperation = a.Xg, a.Yc(c))
        }
    };
    b.prototype.zk = function() {
        this.Md = !0;
        var a = this.Pa(0, 0, !0, !0),
            c = this.Pa(0, 0, !1, !0);
        this.Md = !1;
        this.b.bd && (a = Math.round(a), c = Math.round(c));
        this.fk(a, c, null)
    };
    b.prototype.fk = function(a, c, e) {
        var d = this.mc();
        this.na = a;
        this.pa = c;
        this.ua = a + 1 / d * this.b.B;
        this.ta = c + 1 / d * this.b.A;
        this.na > this.ua && (a = this.na, this.na = this.ua, this.ua = a);
        this.pa > this.ta && (a = this.pa, this.pa = this.ta, this.ta = a);
        a = this.ib();
        0 !== a && (e && (e.translate(this.b.B / 2, this.b.A / 2), e.rotate(-a), e.translate(this.b.B / -2, this.b.A / -2)), this.ge.set(this.na, this.pa, this.ua, this.ta), this.ge.offset((this.na + this.ua) / -2, (this.pa + this.ta) / -2), this.mq.Yp(this.ge, a), this.mq.Un(this.ge), this.ge.offset((this.na + this.ua) / 2, (this.pa +
            this.ta) / 2), this.na = this.ge.left, this.pa = this.ge.top, this.ua = this.ge.right, this.ta = this.ge.bottom)
    };
    b.prototype.Mf = function(a) {
        if (this.zd = this.ij) {
            this.b.kb || (this.b.kb = a.Ic(this.b.B, this.b.A, this.b.Ea));
            if (this.b.kb.Vg !== this.b.B || this.b.kb.Ug !== this.b.A) a.deleteTexture(this.b.kb), this.b.kb = a.Ic(this.b.B, this.b.A, this.b.Ea);
            a.ed(this.b.kb)
        }
        this.Md = !0;
        var c = this.Pa(0, 0, !0, !0),
            e = this.Pa(0, 0, !1, !0);
        this.Md = !1;
        this.b.bd && (c = Math.round(c), e = Math.round(e));
        this.fk(c, e, null);
        c = this.mc();
        a.Ad();
        a.scale(c, c);
        a.ym(-this.ib());
        a.translate((this.na + this.ua) / -2, (this.pa + this.ta) / -2);
        a.Fd();
        this.Gc ? (this.yb.left = this.Eb.Wb(this.na), this.yb.top = this.Eb.Xb(this.pa), this.yb.right = this.Eb.Wb(this.ua), this.yb.bottom = this.Eb.Xb(this.ta), this.dd || !this.yb.$g(this.hg) ? (r(this.Ud), c = this.tl(), this.dd = !1, this.hg.Jf(this.yb)) : c = this.Ud) : c = this.d;
        for (var d, h = null, e = c.length - 1; 0 <= e; --e) d = c[e], d !== h && (this.it(c[e], a), h = d);
        this.Gc && (this.Ud = c);
        this.gd || (this.Zk = this.b.Ye++, a.Dm(this.Zk), a.Rv(1, 1, 1, 1), a.au(), a.ry())
    };
    b.prototype.lc = function(a) {
        var c = 0,
            e = 0;
        if (this.zd = this.ij || 1 !== this.opacity || 0 < this.ba.length || 0 !== this.Jb) {
            this.b.kb || (this.b.kb = a.Ic(this.b.B, this.b.A, this.b.Ea));
            if (this.b.kb.Vg !== this.b.B || this.b.kb.Ug !== this.b.A) a.deleteTexture(this.b.kb), this.b.kb = a.Ic(this.b.B, this.b.A, this.b.Ea);
            a.ed(this.b.kb);
            this.gd && a.clear(0, 0, 0, 0)
        }
        this.gd || (this.b.$e ? (a.Dm(this.Zk), a.Rv(this.Uc[0] / 255, this.Uc[1] / 255, this.Uc[2] / 255, 1), a.au(), a.uy()) : a.clear(this.Uc[0] / 255, this.Uc[1] / 255, this.Uc[2] / 255, 1));
        this.Md = !0;
        var d = this.Pa(0, 0, !0, !0),
            c = this.Pa(0, 0, !1, !0);
        this.Md = !1;
        this.b.bd && (d = Math.round(d), c = Math.round(c));
        this.fk(d, c, null);
        d = this.mc();
        a.Ad();
        a.scale(d, d);
        a.ym(-this.ib());
        a.translate((this.na + this.ua) / -2, (this.pa + this.ta) / -2);
        a.Fd();
        this.Gc ? (this.yb.left = this.Eb.Wb(this.na), this.yb.top = this.Eb.Xb(this.pa), this.yb.right = this.Eb.Wb(this.ua), this.yb.bottom = this.Eb.Xb(this.ta), this.dd || !this.yb.$g(this.hg) ? (r(this.Ud), c = this.tl(), this.dd = !1, this.hg.Jf(this.yb)) : c = this.Ud) : c = this.d;
        var h, b, n = null,
            e = 0;
        for (h = c.length; e < h; ++e) b = c[e], b !== n && (this.ht(c[e], a), n = b);
        this.Gc && (this.Ud = c);
        this.zd && (c = this.ba.length ? this.ba[0].Za : 0, e = this.ba.length ? this.ba[0].index : 0, 0 === this.ba.length || 1 === this.ba.length && !a.Gp(c) && 1 === this.opacity ? (1 === this.ba.length ? (a.Ne(c), a.Zh(this.ub.kh(), 1 / this.b.B, 1 / this.b.A, 0, 0, 1, 1, d, this.ib(), this.na, this.pa, (this.na + this.ua) / 2, (this.pa + this.ta) / 2, this.b.tb.K, this.Ka[e]), a.pm(c) && (this.b.M = !0)) : a.Ne(0), a.ed(this.ub.kh()), a.zg(this.opacity), a.Fc(this.b.kb), a.xg(this.Ob, this.Lb), a.Ad(), a.Fd(), d = this.b.B / 2, c = this.b.A / 2, a.rm(-d, c, d, c, d, -c, -d, -c), a.Fc(null)) : this.ub.vm(a, this, null, this.ub.kh()))
    };
    b.prototype.ht = function(a, c) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.ra();
            var e = a.Oa;
            e.right < this.na || e.bottom < this.pa || e.left > this.ua || e.top > this.ta || (c.Dm(a.Ye), a.xq ? this.jt(a, c) : (c.Ne(0), c.xg(a.Ob, a.Lb), a.lc(c)))
        }
    };
    b.prototype.it = function(a, c) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.ra();
            var e = a.Oa;
            e.right < this.na || e.bottom < this.pa || e.left > this.ua || e.top > this.ta || (a.Ye = this.b.Ye++, 0 === a.Jb && 1 === a.opacity && a.be && a.Mf && (c.Dm(a.Ye), a.Mf(c)))
        }
    };
    b.prototype.jt = function(a, c) {
        var e = a.ba[0].Za,
            d = a.ba[0].index,
            h = this.mc();
        if (1 !== a.ba.length || c.Gp(e) || c.my(e) || (a.k || a.j.ib()) && c.bk(e) || 1 !== a.opacity || a.type.ka.ep) this.ub.vm(c, this, a, this.zd ? this.b.kb : this.ub.kh()), c.Ad(), c.scale(h, h), c.ym(-this.ib()), c.translate((this.na + this.ua) / -2, (this.pa + this.ta) / -2), c.Fd();
        else {
            c.Ne(e);
            c.xg(a.Ob, a.Lb);
            c.pm(e) && (this.b.M = !0);
            var b = 0,
                n = 0,
                k = 0,
                l = 0;
            c.bk(e) && (l = a.Oa, b = this.Da(l.left, l.top, !0, !0), n = this.Da(l.left, l.top, !1, !0), k = this.Da(l.right, l.bottom, !0, !0), l = this.Da(l.right, l.bottom, !1, !0), b = b / windowWidth, n = 1 - n / windowHeight, k = k / windowWidth, l = 1 - l / windowHeight);
            var p;
            a.za && a.za.ja ? (p = a.za.ja, e = 1 / p.width, p = 1 / p.height) : (e = 1 / a.width, p = 1 / a.height);
            c.Zh(this.zd ? this.b.kb : this.ub.kh(), e, p, b, n, k, l, h, this.ib(), this.na, this.pa, (this.na + this.ua) / 2, (this.pa + this.ta) / 2, this.b.tb.K, a.Ka[d]);
            a.lc(c)
        }
    };
    b.prototype.Pa = function(a, c, e, d) {
        var h = this.b.devicePixelRatio;
        this.b.lf && (a *= h, c *= h);
        var h = this.b.Ap,
            b = this.b.Bp,
            h = (this.ub.scrollX -
                h) * this.ac + h,
            b = (this.ub.scrollY - b) * this.cc + b,
            n = h,
            k = b,
            l = 1 / this.mc(!d);
        d ? (n -= this.b.B * l / 2, k -= this.b.A * l / 2) : (n -= this.b.width * l / 2, k -= this.b.height * l / 2);
        n += a * l;
        k += c * l;
        c = this.ib();
        0 !== c && (n -= h, k -= b, a = Math.cos(c), c = Math.sin(c), d = n * a - k * c, k = k * a + n * c, n = d + h, k += b);
        return e ? n : k
    };
    b.prototype.Da = function(a, c, e, d) {
        var h = this.b.Ap,
            b = this.b.Bp,
            n = (this.ub.scrollX - h) * this.ac + h,
            k = (this.ub.scrollY - b) * this.cc + b,
            b = n,
            h = k,
            l = this.ib();
        if (0 !== l) {
            a -= n;
            c -= k;
            var p = Math.cos(-l),
                l = Math.sin(-l),
                f = a * p - c * l;
            c = c * p + a * l;
            a = f + n;
            c += k
        }
        n = 1 / this.mc(!d);
        d ? (b -= this.b.B * n / 2, h -= this.b.A * n / 2) : (b -= this.b.width * n / 2, h -= this.b.height * n / 2);
        b = (a - b) / n;
        h = (c - h) / n;
        a = this.b.devicePixelRatio;
        this.b.lf && !d && (b /= a, h /= a);
        return e ? b : h
    };
    b.prototype.Tb = function() {
        var a, c, e, d = {
            s: this.scale,
            a: this.k,
            vl: this.na,
            vt: this.pa,
            vr: this.ua,
            vb: this.ta,
            v: this.visible,
            bc: this.Uc,
            t: this.gd,
            px: this.ac,
            py: this.cc,
            o: this.opacity,
            zr: this.Pb,
            fx: [],
            cg: this.Yg,
            instances: []
        };
        a = 0;
        for (c = this.J.length; a < c; a++) e = this.J[a], d.fx.push({
            name: e.name,
            active: e.Ib,
            params: this.Ka[e.index]
        });
        return d
    };
    b.prototype.qc = function(a) {
        var c, e, d;
        this.scale = a.s;
        this.k = a.a;
        this.na = a.vl;
        this.pa = a.vt;
        this.ua = a.vr;
        this.ta = a.vb;
        this.visible = a.v;
        this.Uc = a.bc;
        this.gd = a.t;
        this.ac = a.px;
        this.cc = a.py;
        this.opacity = a.o;
        this.Pb = a.zr;
        this.Yg = a.cg || [];
        Da(this.Bc, this.fq);
        var h = new fa;
        c = 0;
        for (d = this.Yg.length; c < d; ++c) h.add(this.Yg[c]);
        e = c = 0;
        for (d = this.Bc.length; c < d; ++c) h.contains(this.Bc[c][2]) || (this.Bc[e] = this.Bc[c], ++e);
        Ba(this.Bc, e);
        e = a.fx;
        c = 0;
        for (d = e.length; c < d; c++)
            if (a = this.pl(e[c].name)) a.Ib = e[c].active, this.Ka[a.index] = e[c].params;
        this.hd();
        this.d.sort(f);
        this.zf = !0
    };
    Xb = b
})();
(function() {
    function g(a, d) {
        var c, e = a.length;
        switch (e) {
            case 0:
                return !0;
            case 1:
                return a[0] === d[0];
            case 2:
                return a[0] === d[0] && a[1] === d[1];
            default:
                for (c = 0; c < e; c++)
                    if (a[c] !== d[c]) return !1;
                return !0
        }
    }

    function f(a, d) {
        return a.index - d.index
    }

    function b(a) {
        var d, c, e, b;
        2 === a.length ? a[0].index > a[1].index && (d = a[0], a[0] = a[1], a[1] = d) : 2 < a.length && a.sort(f);
        a.length >= h.length && (h.length = a.length + 1);
        h[a.length] || (h[a.length] = []);
        b = h[a.length];
        d = 0;
        for (c = b.length; d < c; d++)
            if (e = b[d], g(a, e)) return e;
        b.push(a);
        return a
    }

    function u(a, d) {
        this.b = a;
        this.pq = {};
        this.po = {};
        this.yl = !1;
        this.Ho = new fa;
        this.cl = [];
        this.Rk = [];
        this.name = d[0];
        var c = d[1];
        this.ze = [];
        var e, h;
        e = 0;
        for (h = c.length; e < h; e++) this.Io(c[e], null, this.ze)
    }

    function r(a) {
        this.type = a;
        this.d = [];
        this.N = [];
        this.aa = !0
    }

    function q(a, d, c) {
        this.sheet = a;
        this.parent = d;
        this.b = a.b;
        this.ma = [];
        this.Me = [];
        this.Go = this.uk = this.Qm = this.wj = this.group = this.Im = !1;
        this.fb = [];
        this.Sc = [];
        this.Qc = [];
        this.nh = "";
        this.Uf = this.wj = this.group = !1;
        this.Ri = null;
        c[1] && (this.nh = c[1][1].toLowerCase(), this.group = !0, this.wj = !!c[1][0], this.Ri = [], this.Uf = this.wj, this.b.pe.push(this), this.b.oh[this.nh] = this);
        this.Dc = c[2];
        this.T = c[4];
        this.group || (this.b.Tn[this.T.toString()] = this);
        var e = c[5];
        a = 0;
        for (d = e.length; a < d; a++) {
            var h = new Yb(this, e[a]);
            h.index = a;
            this.fb.push(h);
            this.On(h.type)
        }
        e = c[6];
        a = 0;
        for (d = e.length; a < d; a++) h = new Zb(this, e[a]), h.index = a, this.Sc.push(h);
        if (8 === c.length)
            for (c = c[7], a = 0, d = c.length; a < d; a++) this.sheet.Io(c[a], this, this.Qc);
        this.Bj = !1;
        this.fb.length && (this.Bj = null == this.fb[0].type && this.fb[0].zb == I.prototype.e.en)
    }

    function t(a, d) {
        var c, e, h;
        if (a && (-1 === d.indexOf(a) && d.push(a), a.$b))
            for (c = 0, e = a.kc.length; c < e; c++) h = a.kc[c], a !== h && -1 === d.indexOf(h) && d.push(h)
    }

    function m(a, d) {
        this.wc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.wa = [];
        this.La = [];
        this.U = {};
        this.index = -1;
        this.Pg = !1;
        this.zb = this.b.ke(d[1]);
        this.trigger = 0 < d[3];
        this.oo = 2 === d[3];
        this.ud = d[4];
        this.Wf = d[5];
        this.Uu = d[6];
        this.T = d[7];
        this.b.ue[this.T.toString()] = this; - 1 === d[0] ? (this.type = null, this.Ya = this.Am, this.Se = null, this.Vc = -1) : (this.type = this.b.p[d[0]], this.Ya = this.Uu ? this.Mv : this.zm, d[2] ? (this.Se = this.type.lj(d[2]), this.Vc = this.type.ol(d[2])) : (this.Se = null, this.Vc = -1), this.wc.parent && this.wc.parent.lk());
        this.oo && (this.Ya = this.Nv);
        if (10 === d.length) {
            var c, e, h = d[9];
            c = 0;
            for (e = h.length; c < e; c++) {
                var b = new $b(this, h[c]);
                this.wa.push(b)
            }
            this.La.length = h.length
        }
    }

    function p(a, d) {
        this.wc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.wa = [];
        this.La = [];
        this.U = {};
        this.index = -1;
        this.Pg = !1;
        this.zb = this.b.ke(d[1]); - 1 === d[0] ? (this.type = null, this.Ya = this.Am, this.Se = null, this.Vc = -1) : (this.type = this.b.p[d[0]], this.Ya = this.zm, d[2] ? (this.Se = this.type.lj(d[2]), this.Vc = this.type.ol(d[2])) : (this.Se = null, this.Vc = -1));
        this.T = d[3];
        this.b.ne[this.T.toString()] = this;
        if (6 === d.length) {
            var c, e, h = d[5];
            c = 0;
            for (e = h.length; c < e; c++) {
                var b = new $b(this, h[c]);
                this.wa.push(b)
            }
            this.La.length = h.length
        }
    }

    function e() {
        n++;
        v.length === n && v.push(new ac);
        return v[n]
    }

    function a(a, d) {
        this.Oc = a;
        this.wc = a.wc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = d[0];
        this.pd = null;
        this.de = 0;
        this.get = null;
        this.ao = 0;
        this.ub = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.mi = this.uf = this.mi = this.uf = this.so = this.cf = this.ni = null;
        this.Rc = !1;
        var c, e, h;
        switch (d[0]) {
            case 0:
            case 7:
                this.pd = new bc(this, d[1]);
                this.de = 0;
                this.get = this.qu;
                break;
            case 1:
                this.pd = new bc(this, d[1]);
                this.de = 0;
                this.get = this.ru;
                break;
            case 5:
                this.pd = new bc(this, d[1]);
                this.de = 0;
                this.get = this.vu;
                break;
            case 3:
            case 8:
                this.ao = d[1];
                this.get = this.ou;
                break;
            case 6:
                this.ub = this.b.Ol[d[1]];
                this.get = this.wu;
                break;
            case 9:
                this.key = d[1];
                this.get = this.uu;
                break;
            case 4:
                this.object = this.b.p[d[1]];
                this.get = this.xu;
                this.wc.On(this.object);
                this.Oc instanceof Zb ? this.wc.lk() : this.wc.parent && this.wc.parent.lk();
                break;
            case 10:
                this.index = d[1];
                a.type && a.type.G ? (this.get = this.su, this.Rc = !0) : this.get = this.tu;
                break;
            case 11:
                this.ni = d[1];
                this.cf = null;
                this.get = this.pu;
                break;
            case 2:
            case 12:
                this.so = d[1];
                this.get = this.nu;
                break;
            case 13:
                for (this.get = this.yu, this.uf = [], this.mi = [], c = 1, e = d.length; c < e; c++) h = new $b(this.Oc, d[c]), this.uf.push(h), this.mi.push(0)
        }
    }

    function c(a, d, c) {
        this.sheet = a;
        this.parent = d;
        this.b = a.b;
        this.ma = [];
        this.name = c[1];
        this.oi = c[2];
        this.vj = c[3];
        this.Eh = !!c[4];
        this.Aj = !!c[5];
        this.T = c[6];
        this.b.Jg[this.T.toString()] = this;
        this.data = this.vj;
        this.parent ? (this.qf = this.Eh || this.Aj ? -1 : this.b.aw++, this.b.Is.push(this)) : (this.qf = -1, this.b.Qk.push(this))
    }

    function x(a, d, c) {
        this.sheet = a;
        this.parent = d;
        this.b = a.b;
        this.ma = [];
        this.qh = null;
        this.Eu = c[1];
        this.Ib = !0
    }

    function d() {
        this.hq = [];
        this.reset(null)
    }
    var h = [];
    u.prototype.toString = function() {
        return this.name
    };
    u.prototype.Io = function(a, d, c) {
        switch (a[0]) {
            case 0:
                a = new cc(this, d, a);
                if (a.Dc)
                    for (c.push(a), c = 0, d = a.fb.length; c < d; c++) a.fb[c].trigger && this.Jo(a, c);
                else a.So() ? this.Jo(a, 0) : c.push(a);
                break;
            case 1:
                a = new Ub(this, d, a);
                c.push(a);
                break;
            case 2:
                a = new dc(this, d, a), c.push(a)
        }
    };
    u.prototype.Qa = function() {
        var a, d;
        a = 0;
        for (d = this.ze.length; a < d; a++) this.ze[a].Qa(a < d - 1 && this.ze[a + 1].Bj)
    };
    u.prototype.Wm = function() {
        C(this.cl);
        C(this.Rk);
        this.Nn(this);
        C(this.Rk)
    };
    u.prototype.Nn = function(a) {
        var d, c, e, h, b = a.cl,
            n = a.Rk,
            p = this.Ho.Oe();
        d = 0;
        for (c = p.length; d < c; ++d) e = p[d], h = e.qh, !e.Ib || a === h || -1 < n.indexOf(h) || (n.push(h), h.Nn(a), b.push(h))
    };
    u.prototype.Ya = function(a) {
        this.b.ty || (this.yl = !0, a || (this.b.Hl = !0));
        var d, c;
        d = 0;
        for (c = this.ze.length; d < c; d++) {
            var e = this.ze[d];
            e.Ya();
            this.b.Yk(e.ma);
            this.b.Ce && this.b.Hb()
        }
        a || (this.b.Hl = !1)
    };
    u.prototype.Jo = function(a, d) {
        a.Dc || this.b.xk.push(a);
        var c, e, h = a.fb[d],
            b;
        h.type ? b = h.type.name : b = "system";
        var n = (c = h.oo) ? this.po : this.pq;
        n[b] || (n[b] = []);
        b = n[b];
        n = h.zb;
        if (c) {
            if (h.wa.length && (h = h.wa[0], 1 === h.type && 2 === h.pd.type)) {
                h = h.pd.value.toLowerCase();
                c = 0;
                for (e = b.length; c < e; c++)
                    if (b[c].method == n) {
                        c = b[c].ah;
                        c[h] ? c[h].push([a, d]) : c[h] = [
                            [a, d]
                        ];
                        return
                    }
                c = {};
                c[h] = [
                    [a, d]
                ];
                b.push({
                    method: n,
                    ah: c
                })
            }
        } else {
            c = 0;
            for (e = b.length; c < e; c++)
                if (b[c].method == n) {
                    b[c].ah.push([a, d]);
                    return
                }
            L && n === L.prototype.e.Cf ? b.unshift({
                method: n,
                ah: [
                    [a, d]
                ]
            }) : b.push({
                method: n,
                ah: [
                    [a, d]
                ]
            })
        }
    };
    Kb = u;
    r.prototype.xl = function() {
        return this.aa ? this.type.d.length : this.d.length
    };
    r.prototype.Ac = function() {
        return this.aa ? this.type.d : this.d
    };
    r.prototype.Sh = function(a) {
        a && (a.b.Ua().gb.Dc ? (this.aa && (C(this.d), Da(this.N, a.type.d), this.aa = !1), a = this.N.indexOf(a), -1 !== a && (this.d.push(this.N[a]), this.N.splice(a, 1))) : (this.aa = !1, C(this.d), this.d[0] = a))
    };
    rb = r;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    q.prototype.Qa = function(a) {
        var d, c = this.parent;
        if (this.group)
            for (this.uk = !0; c;) {
                if (!c.group) {
                    this.uk = !1;
                    break
                }
                c = c.parent
            }
        this.Qm = !this.So() && (!this.parent || this.parent.group && this.parent.uk);
        this.Go = !!a;
        this.Me = this.ma.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (d = c.ma.length; a < d; a++) this.Hs(c.ma[a]);
            c = c.parent
        }
        this.ma = b(this.ma);
        this.Me = b(this.Me);
        a = 0;
        for (d = this.fb.length; a < d; a++) this.fb[a].Qa();
        a = 0;
        for (d = this.Sc.length; a < d; a++) this.Sc[a].Qa();
        a = 0;
        for (d = this.Qc.length; a < d; a++) this.Qc[a].Qa(a < d - 1 && this.Qc[a + 1].Bj)
    };
    q.prototype.Tp = function(a) {
        if (this.Uf !== !!a) {
            this.Uf = !!a;
            var d;
            a = 0;
            for (d = this.Ri.length; a < d; ++a) this.Ri[a].tq();
            0 < d && this.b.la.bf && this.b.la.bf.Wm()
        }
    };
    q.prototype.On = function(a) {
        t(a, this.ma)
    };
    q.prototype.Hs = function(a) {
        t(a, this.Me)
    };
    q.prototype.lk = function() {
        this.Im = !0;
        this.parent && this.parent.lk()
    };
    q.prototype.So = function() {
        return this.fb.length ? this.fb[0].trigger : !1
    };
    q.prototype.Ya = function() {
        var a, d, c = !1,
            e = this.b,
            h = this.b.Ua();
        h.gb = this;
        var b = this.fb;
        this.Bj || (h.gl = !1);
        if (this.Dc) {
            0 === b.length && (c = !0);
            h.Sa = 0;
            for (a = b.length; h.Sa < a; h.Sa++) d = b[h.Sa], d.trigger || (d = d.Ya()) && (c = !0);
            (h.mf = c) && this.gk()
        } else {
            h.Sa = 0;
            for (a = b.length; h.Sa < a; h.Sa++)
                if (d = b[h.Sa].Ya(), !d) {
                    h.mf = !1;
                    this.Qm && e.Ce && e.Hb();
                    return
                }
            h.mf = !0;
            this.gk()
        }
        this.nt(h)
    };
    q.prototype.nt = function(a) {
        a.mf && this.Go && (a.gl = !0);
        this.Qm && this.b.Ce && this.b.Hb()
    };
    q.prototype.Kv = function(a) {
        this.b.Ua().gb = this;
        this.fb[a].Ya() && (this.gk(), this.b.Ua().mf = !0)
    };
    q.prototype.gk = function() {
        var a = this.b.Ua(),
            d;
        a.ic = 0;
        for (d = this.Sc.length; a.ic < d; a.ic++)
            if (this.Sc[a.ic].Ya()) return;
        this.Op()
    };
    q.prototype.Hv = function() {
        var a = this.b.Ua(),
            d;
        for (d = this.Sc.length; a.ic < d; a.ic++)
            if (this.Sc[a.ic].Ya()) return;
        this.Op()
    };
    q.prototype.Op = function() {
        if (this.Qc.length) {
            var a, d, c, e, h = this.Qc.length -
                1;
            this.b.ck(this);
            if (this.Im)
                for (a = 0, d = this.Qc.length; a < d; a++) c = this.Qc[a], (e = !this.uk || !this.group && a < h) && this.b.Vh(c.ma), c.Ya(), e ? this.b.Je(c.ma) : this.b.Yk(c.ma);
            else
                for (a = 0, d = this.Qc.length; a < d; a++) this.Qc[a].Ya();
            this.b.Zj()
        }
    };
    q.prototype.Lv = function() {
        var a = this.b.Ua();
        a.gb = this;
        var d = !1,
            c;
        a.Sa = 0;
        for (c = this.fb.length; a.Sa < c; a.Sa++)
            if (this.fb[a.Sa].Ya()) d = !0;
            else if (!this.Dc) return !1;
        return this.Dc ? d : !0
    };
    q.prototype.ek = function() {
        this.b.bh++;
        var a = this.b.Ua().Sa,
            d = this.b.ck(this);
        if (!this.Dc)
            for (d.Sa = a + 1, a = this.fb.length; d.Sa < a; d.Sa++)
                if (!this.fb[d.Sa].Ya()) {
                    this.b.Zj();
                    return
                }
        this.gk();
        this.b.Zj()
    };
    q.prototype.Mu = function(a) {
        var d = a.index;
        if (0 === d) return !0;
        for (--d; 0 <= d; --d)
            if (this.fb[d].type === a.type) return !1;
        return !0
    };
    cc = q;
    m.prototype.Qa = function() {
        var a, d, c;
        a = 0;
        for (d = this.wa.length; a < d; a++) c = this.wa[a], c.Qa(), c.Rc && (this.Pg = !0)
    };
    m.prototype.Nv = function() {
        return !0
    };
    m.prototype.Am = function() {
        var a, d;
        a = 0;
        for (d = this.wa.length; a < d; a++) this.La[a] = this.wa[a].get();
        return Va(this.zb.apply(this.b.Bd, this.La), this.Wf)
    };
    m.prototype.Mv = function() {
        var a, d;
        a = 0;
        for (d = this.wa.length; a < d; a++) this.La[a] = this.wa[a].get();
        a = this.zb.apply(this.Se ? this.Se : this.type, this.La);
        this.type.Id();
        return a
    };
    m.prototype.zm = function() {
        var a, d, c, e, h, b, n, p, f = this.type,
            m = f.S(),
            v = this.wc.Dc && !this.trigger;
        d = 0;
        var g = f.$b,
            r = f.G,
            u = f.Od,
            t = this.Vc,
            q = -1 < t,
            x = this.Pg,
            J = this.wa,
            B = this.La,
            P = this.Wf,
            W = this.zb,
            M;
        if (x)
            for (d = 0, h = J.length; d < h; ++d) b = J[d], b.Rc || (B[d] = b.get(0));
        else
            for (d = 0, h = J.length; d < h; ++d) B[d] = J[d].get(0);
        if (m.aa) {
            C(m.d);
            C(m.N);
            M = f.d;
            a = 0;
            for (e = M.length; a < e; ++a) {
                p = M[a];
                if (x)
                    for (d = 0, h = J.length; d < h; ++d) b = J[d], b.Rc && (B[d] = b.get(a));
                q ? (d = 0, r && (d = p.type.Qf[u]), d = W.apply(p.I[t + d], B)) : d = W.apply(p, B);
                (n = Va(d, P)) ? m.d.push(p): v && m.N.push(p)
            }
            f.finish && f.finish(!0);
            m.aa = !1;
            f.Id();
            return m.xl()
        }
        c = 0;
        M = (n = v && !this.wc.Mu(this)) ? m.N : m.d;
        var H = !1;
        a = 0;
        for (e = M.length; a < e; ++a) {
            p = M[a];
            if (x)
                for (d = 0, h = J.length; d < h; ++d) b = J[d], b.Rc && (B[d] = b.get(a));
            q ? (d = 0, r && (d = p.type.Qf[u]), d = W.apply(p.I[t + d], B)) : d = W.apply(p, B);
            if (Va(d, P))
                if (H = !0, n) {
                    if (m.d.push(p), g)
                        for (d = 0, h = p.siblings.length; d < h; d++) b = p.siblings[d], b.type.S().d.push(b)
                } else {
                    M[c] = p;
                    if (g)
                        for (d = 0, h = p.siblings.length; d < h; d++) b = p.siblings[d], b.type.S().d[c] = b;
                    c++
                }
            else if (n) {
                M[c] = p;
                if (g)
                    for (d = 0, h = p.siblings.length; d < h; d++) b = p.siblings[d], b.type.S().N[c] = b;
                c++
            } else if (v && (m.N.push(p), g))
                for (d = 0, h = p.siblings.length; d < h; d++) b = p.siblings[d], b.type.S().N.push(b)
        }
        Ba(M, c);
        if (g)
            for (r = f.kc, a = 0, e = r.length; a < e; a++) p = r[a].S(), n ? Ba(p.N, c) : Ba(p.d, c);
        c = H;
        if (n && !H)
            for (a = 0, e = m.d.length; a < e; a++) {
                p = m.d[a];
                if (x)
                    for (d = 0, h = J.length; d < h; d++) b = J[d], b.Rc && (B[d] = b.get(a));
                d = q ? W.apply(p.I[t], B) : W.apply(p, B);
                if (Va(d, P)) {
                    H = !0;
                    break
                }
            }
        f.finish && f.finish(c || v);
        return v ? H : m.xl()
    };
    Yb = m;
    p.prototype.Qa = function() {
        var a, d, c;
        a = 0;
        for (d = this.wa.length; a < d; a++) c = this.wa[a], c.Qa(), c.Rc && (this.Pg = !0)
    };
    p.prototype.Am = function() {
        var a = this.b,
            d, c, e = this.wa,
            h = this.La;
        d = 0;
        for (c = e.length; d < c; ++d) h[d] = e[d].get();
        return this.zb.apply(a.Bd, h)
    };
    p.prototype.zm = function() {
        var a = this.type,
            d = this.Vc,
            c = a.Od,
            e = this.Pg,
            h = this.wa,
            b = this.La,
            n = this.zb,
            p = a.S().Ac(),
            a = a.G,
            f = -1 < d,
            m, v, g, r, t, u;
        if (e)
            for (v = 0, r = h.length; v < r; ++v) t = h[v], t.Rc || (b[v] = t.get(0));
        else
            for (v = 0, r = h.length; v < r; ++v) b[v] = h[v].get(0);
        m = 0;
        for (g = p.length; m < g; ++m) {
            u = p[m];
            if (e)
                for (v = 0, r = h.length; v < r; ++v) t = h[v], t.Rc && (b[v] = t.get(m));
            f ? (v = 0, a && (v = u.type.Qf[c]), n.apply(u.I[d + v], b)) : n.apply(u, b)
        }
        return !1
    };
    Zb = p;
    var v = [],
        n = -1;
    a.prototype.Qa = function() {
        var a, d;
        if (11 === this.type) this.cf = this.b.Ao(this.ni, this.wc.parent);
        else if (13 === this.type)
            for (a = 0, d = this.uf.length; a < d; a++) this.uf[a].Qa();
        this.pd && this.pd.Qa()
    };
    a.prototype.av = function(a) {
        this.Rc || !a || a.ka.ok || (this.Rc = !0)
    };
    a.prototype.Wp = function() {
        this.Rc = !0
    };
    a.prototype.qu = function(a) {
        this.de = a || 0;
        a = e();
        this.pd.get(a);
        n--;
        return a.data
    };
    a.prototype.ru = function(a) {
        this.de = a || 0;
        a = e();
        this.pd.get(a);
        n--;
        return la(a.data) ? a.data : ""
    };
    a.prototype.xu = function() {
        return this.object
    };
    a.prototype.ou = function() {
        return this.ao
    };
    a.prototype.vu = function(a) {
        this.de = a || 0;
        a = e();
        this.pd.get(a);
        n--;
        return a.sb() ? this.b.rd(a.data) : this.b.Sf(a.data)
    };
    a.prototype.wu = function() {
        return this.ub
    };
    a.prototype.uu = function() {
        return this.key
    };
    a.prototype.tu = function() {
        return this.index
    };
    a.prototype.su = function(a) {
        a = a || 0;
        var d = this.Oc.type,
            c = null,
            c = d.S(),
            e = c.Ac();
        if (e.length) c = e[a % e.length].type;
        else if (c.N.length) c = c.N[a % c.N.length].type;
        else if (d.d.length) c = d.d[a % d.d.length].type;
        else return 0;
        return this.index + c.cj[d.Od]
    };
    a.prototype.pu = function() {
        return this.cf
    };
    a.prototype.nu = function() {
        return this.so
    };
    a.prototype.yu = function() {
        var a, d;
        a = 0;
        for (d = this.uf.length; a < d; a++) this.mi[a] = this.uf[a].get();
        return this.mi
    };
    $b = a;
    c.prototype.Qa = function() {
        this.ma = b(this.ma)
    };
    c.prototype.ae = function(a) {
        var d = this.b.xo();
        this.parent && !this.Eh && d ? (this.qf >= d.length && (d.length = this.qf + 1), d[this.qf] = a) : this.data = a
    };
    c.prototype.ef = function() {
        var a = this.b.xo();
        return !this.parent || this.Eh || !a || this.Aj ? this.data : this.qf >= a.length || "undefined" === typeof a[this.qf] ? this.vj : a[this.qf]
    };
    c.prototype.Ya = function() {
        !this.parent || this.Eh || this.Aj || this.ae(this.vj)
    };
    Ub = c;
    x.prototype.toString = function() {
        return "include:" + this.qh.toString()
    };
    x.prototype.Qa = function() {
        this.qh = this.b.il[this.Eu];
        this.sheet.Ho.add(this);
        this.ma = b(this.ma);
        for (var a = this.parent; a;) a.group && a.Ri.push(this), a = a.parent;
        this.tq()
    };
    x.prototype.Ya = function() {
        this.parent && this.b.Uh(this.b.p);
        this.qh.yl || this.qh.Ya(!0);
        this.parent && this.b.Je(this.b.p)
    };
    x.prototype.tq = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Uf) {
                this.Ib = !1;
                return
            }
            a = a.parent
        }
        this.Ib = !0
    };
    dc = x;
    d.prototype.reset = function(a) {
        this.gb = a;
        this.ic = this.Sa = 0;
        C(this.hq);
        this.gl = this.mf = !1
    };
    d.prototype.Po = function() {
        return this.gb.Im ? !0 : this.Sa < this.gb.fb.length - 1 ? !!this.gb.ma.length : !1
    };
    Tb = d
})();
(function() {
    function g(b, f) {
        this.Oc = b;
        this.b = b.b;
        this.type = f[0];
        this.get = [this.Jt, this.Ft, this.St, this.Vt, this.qt, this.Tt, this.Nt, this.Ct, this.Mt, this.Rt, this.tt, this.Qt, this.Dt, this.Ot, this.Kt, this.Lt, this.Gt, this.Ht, this.Bt, this.Ut, this.Pt, this.It, this.At, this.Et][this.type];
        var p = null;
        this.Xd = this.wa = this.La = this.zb = this.tk = this.second = this.first = this.value = null;
        this.Vc = -1;
        this.Zc = null;
        this.yq = -1;
        this.cf = this.ni = null;
        this.wg = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = f[1];
                break;
            case 3:
                this.first = new bc(b, f[1]);
                break;
            case 18:
                this.first = new bc(b, f[1]);
                this.second = new bc(b, f[2]);
                this.tk = new bc(b, f[3]);
                break;
            case 19:
                this.zb = this.b.ke(f[1]);
                this.zb !== I.prototype.C.random && this.zb !== I.prototype.C.Zn || this.Oc.Wp();
                this.La = [];
                this.wa = [];
                3 === f.length ? (p = f[2], this.La.length = p.length + 1) : this.La.length = 1;
                break;
            case 20:
                this.Xd = this.b.p[f[1]];
                this.Vc = -1;
                this.zb = this.b.ke(f[2]);
                this.wg = f[3];
                ic && this.zb === ic.prototype.C.Eq && this.Oc.Wp();
                f[4] ? this.Zc = new bc(b, f[4]) : this.Zc = null;
                this.La = [];
                this.wa = [];
                6 === f.length ? (p = f[5], this.La.length = p.length + 1) : this.La.length = 1;
                break;
            case 21:
                this.Xd = this.b.p[f[1]];
                this.wg = f[2];
                f[3] ? this.Zc = new bc(b, f[3]) : this.Zc = null;
                this.yq = f[4];
                break;
            case 22:
                this.Xd = this.b.p[f[1]];
                this.Xd.lj(f[2]);
                this.Vc = this.Xd.ol(f[2]);
                this.zb = this.b.ke(f[3]);
                this.wg = f[4];
                f[5] ? this.Zc = new bc(b, f[5]) : this.Zc = null;
                this.La = [];
                this.wa = [];
                7 === f.length ? (p = f[6], this.La.length = p.length + 1) : this.La.length = 1;
                break;
            case 23:
                this.ni = f[1], this.cf = null
        }
        this.Oc.av(this.Xd);
        4 <= this.type && 17 >= this.type && (this.first = new bc(b, f[1]), this.second = new bc(b, f[2]));
        if (p) {
            var e, a;
            e = 0;
            for (a = p.length; e < a; e++) this.wa.push(new bc(b, p[e]))
        }
    }

    function f() {
        ++q;
        r.length === q && r.push(new ac);
        return r[q]
    }

    function b(b, f, p) {
        var e, a;
        e = 0;
        for (a = b.length; e < a; ++e) b[e].get(p), f[e + 1] = p.data
    }

    function u(b, f) {
        this.type = b || ec.Bf;
        this.data = f || 0;
        this.sf = null;
        this.type == ec.Bf && (this.data = Math.floor(this.data))
    }
    g.prototype.Qa = function() {
        23 === this.type && (this.cf = this.Oc.b.Ao(this.ni, this.Oc.wc.parent));
        this.first && this.first.Qa();
        this.second && this.second.Qa();
        this.tk && this.tk.Qa();
        this.Zc && this.Zc.Qa();
        if (this.wa) {
            var b, f;
            b = 0;
            for (f = this.wa.length; b < f; b++) this.wa[b].Qa()
        }
    };
    var r = [],
        q = -1;
    g.prototype.Ut = function(g) {
        var m = this.wa,
            p = this.La;
        p[0] = g;
        g = f();
        b(m, p, g);
        --q;
        this.zb.apply(this.b.Bd, p)
    };
    g.prototype.Pt = function(g) {
        var m = this.Xd,
            p = this.La,
            e = this.wa,
            a = this.Zc,
            c = this.zb,
            r = this.Oc.de,
            d = m.S(),
            h = d.Ac();
        if (!h.length)
            if (d.N.length) h = d.N;
            else {
                this.wg ? g.Fb("") : g.W(0);
                return
            }
        p[0] = g;
        g.sf = m;
        g = f();
        b(e, p, g);
        a && (a.get(g), g.sb() && (r = g.data, h = m.d));
        --q;
        m = h.length;
        if (r >= m || r <= -m) r %= m;
        0 > r && (r += m);
        c.apply(h[r], p)
    };
    g.prototype.At = function(g) {
        var m = this.Xd,
            p = this.La,
            e = this.wa,
            a = this.Zc,
            c = this.Vc,
            r = this.zb,
            d = this.Oc.de,
            h = m.S(),
            v = h.Ac();
        if (!v.length)
            if (h.N.length) v = h.N;
            else {
                this.wg ? g.Fb("") : g.W(0);
                return
            }
        p[0] = g;
        g.sf = m;
        g = f();
        b(e, p, g);
        a && (a.get(g), g.sb() && (d = g.data, v = m.d));
        --q;
        e = v.length;
        if (d >= e || d <= -e) d %= e;
        0 > d && (d += e);
        d = v[d];
        v = 0;
        m.G && (v = d.type.Qf[m.Od]);
        r.apply(d.I[c + v], p)
    };
    g.prototype.It = function(b) {
        var m = this.Zc,
            p = this.Xd,
            e = this.yq,
            a = this.Oc.de,
            c = p.S(),
            g = c.Ac();
        if (!g.length)
            if (c.N.length) g = c.N;
            else {
                this.wg ? b.Fb("") : b.W(0);
                return
            }
        if (m) {
            c = f();
            m.get(c);
            if (c.sb()) {
                a = c.data;
                g = p.d;
                0 !== g.length && (a %= g.length, 0 > a && (a += g.length));
                a = p.rl(a);
                p = a.jb[e];
                la(p) ? b.Fb(p) : b.n(p);
                --q;
                return
            }--q
        }
        m = g.length;
        if (a >= m || a <= -m) a %= m;
        0 > a && (a += m);
        a = g[a];
        g = 0;
        p.G && (g = a.type.cj[p.Od]);
        p = a.jb[e + g];
        la(p) ? b.Fb(p) : b.n(p)
    };
    g.prototype.Jt = function(b) {
        b.type = ec.Bf;
        b.data = this.value
    };
    g.prototype.Ft = function(b) {
        b.type = ec.Af;
        b.data = this.value
    };
    g.prototype.St = function(b) {
        b.type = ec.String;
        b.data = this.value
    };
    g.prototype.Vt = function(b) {
        this.first.get(b);
        b.sb() && (b.data = -b.data)
    };
    g.prototype.qt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data += m.data, m.Zf() && b.jg());
        --q
    };
    g.prototype.Tt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data -= m.data, m.Zf() && b.jg());
        --q
    };
    g.prototype.Nt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data *= m.data, m.Zf() && b.jg());
        --q
    };
    g.prototype.Ct = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data /= m.data, b.jg());
        --q
    };
    g.prototype.Mt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data %= m.data, m.Zf() && b.jg());
        --q
    };
    g.prototype.Rt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data = Math.pow(b.data, m.data), m.Zf() && b.jg());
        --q
    };
    g.prototype.tt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        m.bg() || b.bg() ? this.xt(b, m) : this.ut(b, m);
        --q
    };
    g.prototype.xt = function(b, f) {
        b.bg() && f.bg() ? this.zt(b, f) : this.yt(b, f)
    };
    g.prototype.zt = function(b, f) {
        b.data += f.data
    };
    g.prototype.yt = function(b, f) {
        b.bg() ? b.data += (Math.round(1E10 * f.data) / 1E10).toString() : b.Fb(b.data.toString() + f.data)
    };
    g.prototype.ut = function(b, f) {
        b.W(b.data && f.data ? 1 : 0)
    };
    g.prototype.Qt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.sb() && m.sb() && (b.data || m.data ? b.W(1) : b.W(0));
        --q
    };
    g.prototype.Bt = function(b) {
        this.first.get(b);
        b.data ? this.second.get(b) : this.tk.get(b)
    };
    g.prototype.Dt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.W(b.data === m.data ? 1 : 0);
        --q
    };
    g.prototype.Ot = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.W(b.data !== m.data ? 1 : 0);
        --q
    };
    g.prototype.Kt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.W(b.data < m.data ? 1 : 0);
        --q
    };
    g.prototype.Lt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.W(b.data <= m.data ? 1 : 0);
        --q
    };
    g.prototype.Gt = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.W(b.data > m.data ? 1 : 0);
        --q
    };
    g.prototype.Ht = function(b) {
        this.first.get(b);
        var m = f();
        this.second.get(m);
        b.W(b.data >= m.data ? 1 : 0);
        --q
    };
    g.prototype.Et = function(b) {
        var f = this.cf.ef();
        ka(f) ? b.n(f) : b.Fb(f)
    };
    bc = g;
    u.prototype.Zf = function() {
        return this.type === ec.Af
    };
    u.prototype.sb = function() {
        return this.type === ec.Bf || this.type === ec.Af
    };
    u.prototype.bg = function() {
        return this.type === ec.String
    };
    u.prototype.jg = function() {
        this.Zf() || (this.bg() && (this.data = parseFloat(this.data)), this.type = ec.Af)
    };
    u.prototype.W = function(b) {
        this.type = ec.Bf;
        this.data = Math.floor(b)
    };
    u.prototype.n = function(b) {
        this.type = ec.Af;
        this.data = b
    };
    u.prototype.Fb = function(b) {
        this.type = ec.String;
        this.data = b
    };
    u.prototype.nk = function(b) {
        ka(b) ? (this.type = ec.Af, this.data = b) : la(b) ? (this.type = ec.String, this.data = b.toString()) : (this.type = ec.Bf, this.data = 0)
    };
    ac = u;
    ec = {
        Bf: 0,
        Af: 1,
        String: 2
    }
})();

function I(g) {
    this.b = g;
    this.hc = []
}
I.prototype.Tb = function() {
    var g = {},
        f, b, u, r, q, t, m, p;
    g.waits = [];
    var e = g.waits,
        a;
    f = 0;
    for (b = this.hc.length; f < b; f++) {
        t = this.hc[f];
        a = {
            t: t.time,
            st: t.bq,
            s: t.Hm,
            ev: t.Of.T,
            sm: [],
            sols: {}
        };
        t.Of.Sc[t.ic] && (a.act = t.Of.Sc[t.ic].T);
        u = 0;
        for (r = t.ma.length; u < r; u++) a.sm.push(t.ma[u].T);
        for (q in t.Ub)
            if (t.Ub.hasOwnProperty(q)) {
                m = this.b.p[parseInt(q, 10)];
                p = {
                    sa: t.Ub[q].hk,
                    insts: []
                };
                u = 0;
                for (r = t.Ub[q].Qd.length; u < r; u++) p.insts.push(t.Ub[q].Qd[u].uid);
                a.sols[m.T.toString()] = p
            }
        e.push(a)
    }
    return g
};
I.prototype.qc = function(g) {
    g = g.waits;
    var f, b, u, r, q, t, m, p, e, a, c;
    C(this.hc);
    f = 0;
    for (b = g.length; f < b; f++)
        if (t = g[f], p = this.b.Tn[t.ev.toString()]) {
            e = -1;
            u = 0;
            for (r = p.Sc.length; u < r; u++)
                if (p.Sc[u].T === t.act) {
                    e = u;
                    break
                }
            if (-1 !== e) {
                m = {
                    Ub: {},
                    ma: [],
                    dl: !1
                };
                m.time = t.t;
                m.bq = t.st || "";
                m.Hm = !!t.s;
                m.Of = p;
                m.ic = e;
                u = 0;
                for (r = t.sm.length; u < r; u++)(p = this.b.qj(t.sm[u])) && m.ma.push(p);
                for (q in t.sols)
                    if (t.sols.hasOwnProperty(q) && (p = this.b.qj(parseInt(q, 10)))) {
                        e = t.sols[q];
                        a = {
                            hk: e.sa,
                            Qd: []
                        };
                        u = 0;
                        for (r = e.insts.length; u < r; u++)(c = this.b.pj(e.insts[u])) && a.Qd.push(c);
                        m.Ub[p.index.toString()] = a
                    }
                this.hc.push(m)
            }
        }
};
(function() {
    function g() {}

    function f() {}

    function b() {}
    var u = I.prototype;
    g.prototype.Pq = function() {
        return !0
    };
    g.prototype.nn = function() {
        return !0
    };
    g.prototype.Gr = function() {
        return !0
    };
    g.prototype.Iq = function(b, e, a) {
        return fc(b, e, a)
    };
    g.prototype.kr = function(b) {
        return b ? b.visible : !1
    };
    g.prototype.Wr = function(b) {
        var e = this.b.Ua(),
            a = e.gb,
            c = e.Po(),
            e = this.b.Jp();
        if (c)
            for (c = 0; c < b && !e.$a; c++) this.b.Vh(a.ma), e.index = c, a.ek(), this.b.Je(a.ma);
        else
            for (c = 0; c < b && !e.$a; c++) e.index = c, a.ek();
        this.b.Dp();
        return !1
    };
    var r = [],
        q = -1;
    g.prototype.Qq = function(b) {
        var e = b.S();
        q++;
        r.length === q && r.push([]);
        var a = r[q];
        Da(a, e.Ac());
        var c = this.b.Ua(),
            f = c.gb,
            d = c.Po(),
            c = this.b.Jp(),
            h, v, n, k, l, m, g = b.$b;
        if (d)
            for (d = 0, h = a.length; d < h && !c.$a; d++) {
                this.b.Vh(f.ma);
                k = a[d];
                e = b.S();
                e.aa = !1;
                C(e.d);
                e.d[0] = k;
                if (g)
                    for (v = 0, n = k.siblings.length; v < n; v++) l = k.siblings[v], m = l.type.S(), m.aa = !1, C(m.d), m.d[0] = l;
                c.index = d;
                f.ek();
                this.b.Je(f.ma)
            } else
                for (e.aa = !1, C(e.d), d = 0, h = a.length; d < h && !c.$a; d++) {
                    k = a[d];
                    e.d[0] = k;
                    if (g)
                        for (v = 0, n = k.siblings.length; v < n; v++) l = k.siblings[v], m = l.type.S(), m.aa = !1, C(m.d), m.d[0] = l;
                    c.index = d;
                    f.ek()
                }
        C(a);
        this.b.Dp();
        q--;
        return !1
    };
    g.prototype.xs = function() {
        var b = this.b.ih().U;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var e = b.TriggerOnce_lastTick,
            a = this.b.Dd;
        b.TriggerOnce_lastTick = a;
        return this.b.Nl || e !== a - 1
    };
    g.prototype.Oq = function(b) {
        var e = this.b.ih(),
            a = e.U.Every_lastTime || 0,
            c = this.b.tb.K;
        "undefined" === typeof e.U.Every_seconds && (e.U.Every_seconds = b);
        var f = e.U.Every_seconds;
        if (c >= a + f) return e.U.Every_lastTime = a + f, c >= e.U.Every_lastTime + .04 && (e.U.Every_lastTime = c), e.U.Every_seconds = b, !0;
        c < a - .1 && (e.U.Every_lastTime = c);
        return !1
    };
    g.prototype.Kq = function(b, e, a) {
        return fc(b.ef(), e, a)
    };
    g.prototype.Zq = function(b) {
        return (b = this.b.oh[b.toLowerCase()]) && b.Uf
    };
    g.prototype.en = function() {
        var b = this.b.Ua();
        return b.gl ? !1 : !b.mf
    };
    g.prototype.pn = function() {
        return !0
    };
    g.prototype.sr = function() {
        return !0
    };
    g.prototype.Ck = function() {
        return !0
    };
    g.prototype.wn = function() {
        return !0
    };
    g.prototype.Hr = function() {
        return !0
    };
    g.prototype.wi = function() {
        return !0
    };
    g.prototype.Cq = function(b, e, a) {
        return Pa(D(b), D(a)) <= D(e)
    };
    g.prototype.Yq = function(b, e) {
        return Sa(D(b), D(e))
    };
    g.prototype.Wq = function(b, e, a) {
        b = Na(b);
        e = Na(e);
        a = Na(a);
        return Sa(a, e) ? Sa(b, e) && !Sa(b, a) : !(!Sa(b, e) && Sa(b, a))
    };
    u.e = new g;
    f.prototype.Rq = function(b) {
        this.b.eg || this.b.Te || (this.b.Te = b)
    };
    f.prototype.Nq = function(b, e, a, c) {
        if (e && b && (e = this.b.al(b, e, a, c))) {
            this.b.$c++;
            var f;
            this.b.trigger(Object.getPrototypeOf(b.ka).e.Mg, e);
            if (e.$b)
                for (a = 0, c = e.siblings.length; a < c; a++) f = e.siblings[a], this.b.trigger(Object.getPrototypeOf(f.type.ka).e.Mg, f);
            this.b.$c--;
            b = b.S();
            b.aa = !1;
            C(b.d);
            b.d[0] = e;
            if (e.$b)
                for (a = 0, c = e.siblings.length; a < c; a++) f = e.siblings[a], b = f.type.S(), b.aa = !1, C(b.d), b.d[0] = f
        }
    };
    f.prototype.js = function(b, e) {
        b && b.visible !== e && (b.visible = e, this.b.M = !0)
    };
    f.prototype.rs = function(b, e) {
        0 === b.oi ? ka(e) ? b.ae(e) : b.ae(parseFloat(e)) : 1 === b.oi && b.ae(e.toString())
    };
    f.prototype.Bq = function(b, e) {
        0 === b.oi ? ka(e) ? b.ae(b.ef() + e) : b.ae(b.ef() + parseFloat(e)) : 1 === b.oi && b.ae(b.ef() + e.toString())
    };
    f.prototype.ws = function(b, e) {
        0 === b.oi && (ka(e) ? b.ae(b.ef() - e) : b.ae(b.ef() - parseFloat(e)))
    };
    f.prototype.qs = function(b) {
        0 > b && (b = 0);
        this.b.vf = b
    };
    var t = [],
        m = [];
    f.prototype.zs = function(b) {
        if (!(0 > b)) {
            var e, a, c, f = this.b.Ua(),
                d;
            t.length ? d = t.pop() : d = {
                Ub: {},
                ma: []
            };
            d.dl = !1;
            d.time = this.b.tb.K + b;
            d.bq = "";
            d.Hm = !1;
            d.Of = f.gb;
            d.ic = f.ic + 1;
            b = 0;
            for (e = this.b.p.length; b < e; b++) c = this.b.p[b], a = c.S(), a.aa && -1 === f.gb.ma.indexOf(c) || (d.ma.push(c), c = void 0, m.length ? c = m.pop() : c = {
                Qd: []
            }, c.hk = !1, c.hk = a.aa, Da(c.Qd, a.d), d.Ub[b.toString()] = c);
            this.hc.push(d);
            return !0
        }
    };
    f.prototype.Xr = function() {
        var b, e, a;
        b = 0;
        for (e = this.b.Qk.length; b < e; b++) a = this.b.Qk[b], a.data = a.vj
    };
    f.prototype.Yr = function() {
        if (!this.b.eg && !this.b.Te && this.b.la) {
            this.b.Te = this.b.la;
            var b, e, a;
            b = 0;
            for (e = this.b.pe.length; b < e; b++) a = this.b.pe[b], a.Tp(a.wj)
        }
    };
    u.m = new f;
    b.prototype["int"] = function(b, e) {
        la(e) ? (b.W(parseInt(e, 10)), isNaN(b.data) && (b.data = 0)) : b.W(e)
    };
    b.prototype["float"] = function(b, e) {
        la(e) ? (b.n(parseFloat(e)), isNaN(b.data) && (b.data = 0)) : b.n(e)
    };
    b.prototype.random = function(b, e, a) {
        void 0 === a ? b.n(Math.random() * e) : b.n(Math.random() * (a - e) + e)
    };
    b.prototype.sqrt = function(b, e) {
        b.n(Math.sqrt(e))
    };
    b.prototype.abs = function(b, e) {
        b.n(Math.abs(e))
    };
    b.prototype.round = function(b, e) {
        b.W(Math.round(e))
    };
    b.prototype.floor = function(b, e) {
        b.W(Math.floor(e))
    };
    b.prototype.ceil = function(b, e) {
        b.W(Math.ceil(e))
    };
    b.prototype.sin = function(b, e) {
        b.n(Math.sin(D(e)))
    };
    b.prototype.cos = function(b, e) {
        b.n(Math.cos(D(e)))
    };
    b.prototype.tan = function(b, e) {
        b.n(Math.tan(D(e)))
    };
    b.prototype.asin = function(b, e) {
        b.n(Ia(Math.asin(e)))
    };
    b.prototype.acos = function(b, e) {
        b.n(Ia(Math.acos(e)))
    };
    b.prototype.atan = function(b, e) {
        b.n(Ia(Math.atan(e)))
    };
    b.prototype.exp = function(b, e) {
        b.n(Math.exp(e))
    };
    b.prototype.log10 = function(b, e) {
        b.n(Math.log(e) / Math.LN10)
    };
    b.prototype.max = function(b) {
        var e = arguments[1];
        "number" !== typeof e && (e = 0);
        var a, c, f;
        a = 2;
        for (c = arguments.length; a < c; a++) f = arguments[a], "number" === typeof f && e < f && (e = f);
        b.n(e)
    };
    b.prototype.min = function(b) {
        var e = arguments[1];
        "number" !== typeof e && (e = 0);
        var a, c, f;
        a = 2;
        for (c = arguments.length; a < c; a++) f = arguments[a], "number" === typeof f && e > f && (e = f);
        b.n(e)
    };
    b.prototype.ye = function(b) {
        b.n(this.b.ye)
    };
    b.prototype.vf = function(b) {
        b.n(this.b.vf)
    };
    b.prototype.time = function(b) {
        b.n(this.b.tb.K)
    };
    b.prototype.Dd = function(b) {
        b.W(this.b.Dd)
    };
    b.prototype.Nj = function(b) {
        b.W(this.b.Nj)
    };
    b.prototype.ll = function(b) {
        b.W(this.b.ll)
    };
    b.prototype.Yu = function(b, e) {
        var a, c;
        if (this.b.Jh.length)
            if (e) {
                for (c = this.b.Kh; 0 <= c; --c)
                    if (a = this.b.Jh[c], a.name === e) {
                        b.W(a.index);
                        return
                    }
                b.W(0)
            } else a = this.b.yo(), b.W(a ? a.index : -1);
        else b.W(0)
    };
    b.prototype.k = function(b, e, a, c, f) {
        b.n(Ia(Oa(e, a, c, f)))
    };
    b.prototype.cv = function(b) {
        b.Fb("\n")
    };
    b.prototype.Aw = function(b) {
        b.W(this.b.width)
    };
    b.prototype.zw = function(b) {
        b.W(this.b.height)
    };
    b.prototype.left = function(b, e, a) {
        b.Fb(la(e) ? e.substr(0, a) : "")
    };
    b.prototype.right = function(b, e, a) {
        b.Fb(la(e) ? e.substr(e.length - a) : "")
    };
    b.prototype.replace = function(b, e, a, c) {
        la(e) && la(a) && la(c) ? b.Fb(e.replace(new RegExp(hb(a), "gi"), c)) : b.Fb(la(e) ? e : "")
    };
    b.prototype.trim = function(b, e) {
        b.Fb(la(e) ? e.trim() : "")
    };
    b.prototype.Zn = function(b) {
        var e = ta(Math.random() * (arguments.length - 1));
        b.nk(arguments[e + 1])
    };
    b.prototype.$k = function(b) {
        b.n(this.b.$k / 1E3)
    };
    b.prototype.uw = function(b, e) {
        var a = this.b.nj(e);
        b.n(a ? a.na : 0)
    };
    b.prototype.ww = function(b, e) {
        var a = this.b.nj(e);
        b.n(a ? a.pa : 0)
    };
    b.prototype.vw = function(b, e) {
        var a = this.b.nj(e);
        b.n(a ? a.ua : 0)
    };
    b.prototype.sw = function(b, e) {
        var a = this.b.nj(e);
        b.n(a ? a.ta : 0)
    };
    b.prototype.ig = function(b) {
        b.n(this.b.ig)
    };
    u.C = new b;
    u.Jv = function() {
        var b, e, a, c, f, d, h = this.b.Ua();
        b = 0;
        for (a = this.hc.length; b < a; b++) {
            c = this.hc[b];
            if (-1 === c.time) {
                if (!c.Hm) continue
            } else if (c.time > this.b.tb.K) continue;
            h.gb = c.Of;
            h.ic = c.ic;
            h.Sa = 0;
            for (e in c.Ub) c.Ub.hasOwnProperty(e) && (f = this.b.p[parseInt(e, 10)].S(), d = c.Ub[e], f.aa = d.hk, Da(f.d, d.Qd), f = d, C(f.Qd), m.push(f));
            c.Of.Hv();
            this.b.Yk(c.ma);
            c.dl = !0
        }
        e = b = 0;
        for (a = this.hc.length; b < a; b++) c = this.hc[b], this.hc[e] = c, c.dl ? (Xa(c.Ub), C(c.ma), t.push(c)) : e++;
        Ba(this.hc, e)
    }
})();
(function() {
    qb = function(f, b) {
        var g = f[1],
            r = f[3],
            q = f[4],
            t = f[5],
            m = f[6],
            p = f[7],
            e = f[8];
        b.e || (b.e = {});
        b.m || (b.m = {});
        b.C || (b.C = {});
        var a = b.e,
            c = b.m,
            x = b.C;
        r && (a.Lq = function(a, b) {
            return fc(this.x, a, b)
        }, a.Nw = function(a, b) {
            return fc(this.y, a, b)
        }, a.Sw = function() {
            var a = this.j;
            this.ra();
            var b = this.Oa;
            return !(b.right < a.na || b.bottom < a.pa || b.left > a.ua || b.top > a.ta)
        }, a.br = function() {
            this.ra();
            var a = this.Oa,
                b = this.b.la;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.cx = function(a, b, c) {
            var e = this.S(),
                k = e.Ac();
            if (!k.length) return !1;
            var l = k[0],
                f = l,
                p = Ua(l.x, l.y, b, c),
                m, g, r;
            m = 1;
            for (g = k.length; m < g; m++)
                if (l = k[m], r = Ua(l.x, l.y, b, c), 0 === a && r < p || 1 === a && r > p) p = r, f = l;
            e.Sh(f);
            return !0
        }, c.ss = function(a) {
            this.x !== a && (this.x = a, this.Ra())
        }, c.Cx = function(a) {
            this.y !== a && (this.y = a, this.Ra())
        }, c.An = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.Ra()
        }, c.Bn = function(a, b) {
            var c = a.lu(this);
            if (c) {
                var e;
                c.jh ? (e = c.jh(b, !0), c = c.jh(b, !1)) : (e = c.x, c = c.y);
                if (this.x !== e || this.y !== c) this.x = e, this.y = c, this.Ra()
            }
        }, c.Ww = function(a) {
            0 !== a && (this.x += Math.cos(this.k) * a, this.y += Math.sin(this.k) * a, this.Ra())
        }, c.Vw = function(a, b) {
            0 !== b && (this.x += Math.cos(D(a)) * b, this.y += Math.sin(D(a)) * b, this.Ra())
        }, x.Kk = function(a) {
            a.n(this.x)
        }, x.Lk = function(a) {
            a.n(this.y)
        }, x.ye = function(a) {
            a.n(this.b.mj(this))
        });
        q && (a.Mw = function(a, b) {
            return fc(this.width, a, b)
        }, a.Iw = function(a, b) {
            return fc(this.height, a, b)
        }, c.En = function(a) {
            this.width !== a && (this.width = a, this.Ra())
        }, c.es = function(a) {
            this.height !== a && (this.height = a, this.Ra())
        }, c.ns = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.Ra()
        }, x.Gn = function(a) {
            a.n(this.width)
        }, x.gn = function(a) {
            a.n(this.height)
        }, x.Fw = function(a) {
            this.ra();
            a.n(this.Oa.left)
        }, x.Hw = function(a) {
            this.ra();
            a.n(this.Oa.top)
        }, x.Gw = function(a) {
            this.ra();
            a.n(this.Oa.right)
        }, x.Ew = function(a) {
            this.ra();
            a.n(this.Oa.bottom)
        });
        t && (a.Cq = function(a, b) {
            return Pa(this.k, D(b)) <= D(a)
        }, a.Yq = function(a) {
            return Sa(this.k, D(a))
        }, a.Wq = function(a, b) {
            var c = Na(a),
                e = Na(b),
                k = Ka(this.k);
            return Sa(e, c) ? Sa(k, c) && !Sa(k, e) : !(!Sa(k, c) && Sa(k, e))
        }, c.$r = function(a) {
            a = D(Ja(a));
            isNaN(a) || this.k === a || (this.k = a, this.Ra())
        }, c.Zr = function(a) {
            0 === a || isNaN(a) || (this.k += D(a), this.k = Ka(this.k), this.Ra())
        }, c.mx = function(a) {
            0 === a || isNaN(a) || (this.k -= D(a), this.k = Ka(this.k), this.Ra())
        }, c.nx = function(a, b) {
            var c = Qa(this.k, D(b), D(a));
            isNaN(c) || this.k === c || (this.k = c, this.Ra())
        }, c.ox = function(a, b, c) {
            a = Qa(this.k, Math.atan2(c - this.y, b - this.x), D(a));
            isNaN(a) || this.k === a || (this.k = a, this.Ra())
        }, c.zx = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.k === c || (this.k = c, this.Ra())
        }, x.Dw = function(a) {
            a.n(La(this.k))
        });
        g || (a.Jw = function(a, b, c) {
            return fc(this.jb[a], b, c)
        }, a.Xq = function(a) {
            return this.jb[a]
        }, a.dx = function(a, b) {
            var c = this.S(),
                e = c.Ac();
            if (!e.length) return !1;
            var k = e[0],
                l = k,
                f = k.jb[b],
                p, m, g;
            p = 1;
            for (m = e.length; p < m; p++)
                if (k = e[p], g = k.jb[b], 0 === a && g < f || 1 === a && g > f) f = g, l = k;
            c.Sh(l);
            return !0
        }, a.Vr = function(a) {
            var b, c, e, k, l;
            if (this.b.ih().Wf) {
                l = this.S();
                if (l.aa)
                    for (l.aa = !1, C(l.d), C(l.N), e = this.d, b = 0, c = e.length; b < c; b++) k = e[b], k.uid === a ? l.N.push(k) : l.d.push(k);
                else {
                    e = b = 0;
                    for (c = l.d.length; b < c; b++) k = l.d[b], l.d[e] = k, k.uid === a ? l.N.push(k) : e++;
                    Ba(l.d, e)
                }
                this.Id();
                return !!l.d.length
            }
            k = this.b.pj(a);
            if (!k) return !1;
            l = this.S();
            if (!l.aa && -1 === l.d.indexOf(k)) return !1;
            if (this.G)
                for (a = k.type.Aa, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return l.Sh(k), this.Id(), !0
                } else if (k.type === this) return l.Sh(k), this.Id(), !0;
            return !1
        }, a.Mg = function() {
            return !0
        }, a.tr = function() {
            return !0
        }, c.gs = function(a, b) {
            var c = this.jb;
            ka(c[a]) ? c[a] = ka(b) ? b : parseFloat(b) : la(c[a]) && (c[a] = la(b) ? b : b.toString())
        }, c.Cw = function(a, b) {
            var c = this.jb;
            ka(c[a]) ? c[a] = ka(b) ? c[a] + b : c[a] + parseFloat(b) : la(c[a]) && (c[a] = la(b) ? c[a] + b : c[a] + b.toString())
        }, c.Ex = function(a, b) {
            var c = this.jb;
            ka(c[a]) && (c[a] = ka(b) ? c[a] - b : c[a] - parseFloat(b))
        }, c.cs = function(a, b) {
            this.jb[a] = b ? 1 : 0
        }, c.Gx = function(a) {
            this.jb[a] = 1 - this.jb[a]
        }, c.cn = function() {
            this.b.je(this)
        }, c.mr || (c.mr = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (e) {
                return
            }
            this.b.Ij(this, b, !0);
            this.oe && this.oe();
            if (this.I)
                for (a = 0, b = this.I.length; a < b; ++a) c = this.I[a], c.oe && c.oe()
        }), x.Mq = function(a) {
            var b = a.sf.d.length,
                c, e, k;
            c = 0;
            for (e = this.b.Xc.length; c < e; c++) k = this.b.Xc[c], a.sf.G ? 0 <= k.type.Aa.indexOf(a.sf) && b++ : k.type === a.sf && b++;
            a.W(b)
        }, x.hx = function(a) {
            a.W(a.sf.S().Ac().length)
        }, x.ys = function(a) {
            a.W(this.uid)
        }, x.Pw = function(a) {
            a.W(this.mh())
        }, x.Dq || (x.Dq = function(a) {
            a.Fb(JSON.stringify(this.b.Bm(this, !0)))
        }));
        m && (a.hn = function() {
            return this.visible
        }, c.Dn = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.M = !0)
        }, a.Kw = function(a, b) {
            return fc(nb(100 * this.opacity), a, b)
        }, c.ks = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.M = !0)
        }, x.Opacity = function(a) {
            a.n(nb(100 * this.opacity))
        });
        p && (a.Rw = function(a) {
            return a ? this.j === a : !1
        }, a.gx = function(a) {
            var b = this.S(),
                c = b.Ac();
            if (!c.length) return !1;
            var e = c[0],
                k = e,
                l, f;
            l = 1;
            for (f = c.length; l < f; l++)
                if (e = c[l], 0 === a) {
                    if (e.j.index > k.j.index || e.j.index === k.j.index && e.sd() > k.sd()) k = e
                } else if (e.j.index < k.j.index || e.j.index === k.j.index && e.sd() < k.sd()) k = e;
            b.Sh(k);
            return !0
        }, c.Zw = function() {
            var a = this.j,
                b = a.d;
            b.length && b[b.length - 1] === this || (a.vg(this, !1), a.Rg(this, !1), this.b.M = !0)
        }, c.Xw = function() {
            var a = this.j,
                b = a.d;
            b.length && b[0] === this || (a.vg(this, !1), a.zv(this), this.b.M = !0)
        }, c.Yw = function(a) {
            a && a != this.j && (this.j.vg(this, !0), this.j = a, a.Rg(this, !0), this.b.M = !0)
        }, c.As = function(a, b) {
            var c = 0 === a;
            if (b) {
                var e = b.gu(this);
                e && e.uid !== this.uid && (this.j.index !== e.j.index && (this.j.vg(this, !0), this.j = e.j, e.j.Rg(this, !0)), this.j.bv(this, e, c), this.b.M = !0)
            }
        }, x.Uw = function(a) {
            a.W(this.j.kp)
        }, x.jn = function(a) {
            a.Fb(this.j.name)
        }, x.Jx = function(a) {
            a.W(this.sd())
        });
        e && (c.ux = function(a, b) {
            if (this.b.D) {
                var c = this.type.ql(b);
                if (!(0 > c)) {
                    var e = 1 === a;
                    this.me[c] !== e && (this.me[c] = e, this.hd(), this.b.M = !0)
                }
            }
        }, c.vx = function(a, b, c) {
            if (this.b.D) {
                var e = this.type.ql(a);
                0 > e || (a = this.type.J[e], e = this.Ka[e], b = Math.floor(b), 0 > b || b >= e.length || (1 === this.b.D.Xx(a.Za, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Ib && (this.b.M = !0))))
            }
        })
    };
    Lb = function() {
        this.Vk = this.Tk = !0;
        this.type.Ei = !0;
        this.b.M = !0;
        var f, b, g = this.Uk;
        f = 0;
        for (b = g.length; f < b; ++f) g[f](this);
        this.j.Gc && this.ra()
    };
    Mb = function(f) {
        f && this.Uk.push(f)
    };
    Ob = function() {
        if (this.Tk) {
            var f = this.Oa,
                b = this.Qb;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.Yb * this.width, -this.Zb * this.height);
            this.k ? (f.offset(-this.x, -this.y), b.Yp(f, this.k), b.offset(this.x, this.y), b.Un(f)) : b.ai(f);
            f.normalize();
            this.Tk = !1;
            this.ow()
        }
    };
    var g = new wa(0, 0, 0, 0);
    Pb = function() {
        if (this.j.Gc) {
            var f = this.j.Eb,
                b = this.Oa;
            g.set(f.Wb(b.left), f.Xb(b.top), f.Wb(b.right), f.Xb(b.bottom));
            this.ec.$g(g) || (this.ec.right < this.ec.left ? f.update(this, null, g) : f.update(this, this.ec, g), this.ec.Jf(g), this.j.dd = !0)
        }
    };
    Qb = function() {
        if (this.Vk && this.Ue) {
            this.ra();
            var f = this.type.Qi,
                b = this.Oa;
            g.set(f.Wb(b.left), f.Xb(b.top), f.Wb(b.right), f.Xb(b.bottom));
            this.ve.$g(g) || (this.ve.right < this.ve.left ? f.update(this, null, g) : f.update(this, this.ve, g), this.ve.Jf(g), this.Vk = !1)
        }
    };
    Nb = function(f, b) {
        return this.Oa.Kb(f, b) && this.Qb.Kb(f, b) ? this.ea && !this.ea.Yf() ? (this.ea.Gf(this.width, this.height, this.k), this.ea.Kb(f - this.x, b - this.y)) : !0 : !1
    };
    Hb = function() {
        this.type.yk();
        return this.hf
    };
    Rb = function() {
        this.j.Ym();
        return this.jd
    };
    Sb = function() {
        C(this.ba);
        var f, b, g, r = !0;
        f = 0;
        for (b = this.me.length; f < b; f++) this.me[f] && (g = this.type.J[f], this.ba.push(g), g.Ke || (r = !1));
        this.xq = !!this.ba.length;
        this.be = r
    };
    Ib = function() {
        return "Inst" + this.Ip
    };
    ub = function(f) {
        if (f && f.$b && f.type != this) {
            var b, g, r;
            b = 0;
            for (g = f.siblings.length; b < g; b++)
                if (r = f.siblings[b], r.type == this) return r
        }
        f = this.S().Ac();
        return f.length ? f[0] : null
    };
    vb = function(f) {
        var b = this.S().Ac();
        return b.length ? b[f.mh() % b.length] : null
    };
    sb = function() {
        if (this.Dg && !this.G) {
            var f, b;
            f = 0;
            for (b = this.d.length; f < b; f++) this.d[f].hf = f;
            var g = f,
                r = this.b.Xc;
            f = 0;
            for (b = r.length; f < b; ++f) r[f].type === this && (r[f].hf = g++);
            this.Dg = !1
        }
    };
    Eb = function(f) {
        if (f < this.d.length) return this.d[f];
        f -= this.d.length;
        var b = this.b.Xc,
            g, r;
        g = 0;
        for (r = b.length; g < r; ++g)
            if (b[g].type === this) {
                if (0 === f) return b[g];
                --f
            }
        return null
    };
    wb = function() {
        return this.ee[this.nd]
    };
    xb = function() {
        this.nd++;
        this.nd === this.ee.length ? this.ee.push(new rb(this)) : (this.ee[this.nd].aa = !0, C(this.ee[this.nd].N))
    };
    yb = function() {
        this.nd++;
        this.nd === this.ee.length && this.ee.push(new rb(this));
        var f = this.ee[this.nd],
            b = this.ee[this.nd - 1];
        b.aa ? (f.aa = !0, C(f.N)) : (f.aa = !1, Da(f.d, b.d), Da(f.N, b.N))
    };
    zb = function() {
        this.nd--
    };
    Ab = function(f) {
        var b, g, r, q, t, m = 0;
        if (!this.G)
            for (b = 0, g = this.Aa.length; b < g; b++)
                for (t = this.Aa[b], r = 0, q = t.Ia.length; r < q; r++) {
                    if (f === t.Ia[r].name) return this.U.lastBehIndex = m, t.Ia[r];
                    m++
                }
        b = 0;
        for (g = this.Ia.length; b < g; b++) {
            if (f === this.Ia[b].name) return this.U.lastBehIndex = m, this.Ia[b];
            m++
        }
        return null
    };
    Bb = function(f) {
        return this.lj(f) ? this.U.lastBehIndex : -1
    };
    Cb = function(f) {
        var b, g;
        b = 0;
        for (g = this.J.length; b < g; b++)
            if (this.J[b].name === f) return b;
        return -1
    };
    Db = function() {
        if (this.$b && !this.G) {
            var f, b, g, r, q, t, m;
            this.yk();
            t = this.S();
            var p = t.aa,
                e = (f = this.b.Ua()) && f.gb && f.gb.Dc;
            f = 0;
            for (b = this.kc.length; f < b; f++)
                if (q = this.kc[f], q !== this && (q.yk(), m = q.S(), m.aa = p, !p)) {
                    C(m.d);
                    g = 0;
                    for (r = t.d.length; g < r; ++g) m.d[g] = q.rl(t.d[g].hf);
                    if (e)
                        for (C(m.N), g = 0, r = t.N.length; g < r; ++g) m.N[g] = q.rl(t.N[g].hf)
                }
        }
    };
    Fb = function() {
        return "Type" + this.T
    };
    fc = function(f, b, g) {
        if ("undefined" === typeof f || "undefined" === typeof g) return !1;
        switch (b) {
            case 0:
                return f === g;
            case 1:
                return f !== g;
            case 2:
                return f < g;
            case 3:
                return f <= g;
            case 4:
                return f > g;
            case 5:
                return f >= g;
            default:
                return !1
        }
    }
})();

function jc(g) {
    this.b = g
}
(function() {
    function g(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function f(a) {
        a = a.toLowerCase();
        return ea.hasOwnProperty(a) && ea[a].length ? ea[a][0].zc() : A.destination
    }

    function b() {
        return A.createGain ? A.createGain() : A.createGainNode()
    }

    function u(a) {
        return A.createDelay ? A.createDelay(a) : A.createDelayNode(a)
    }

    function r(a, d) {
        a.start ? a.start(d || 0) : a.noteOn(d || 0)
    }

    function q(a, d, b, c) {
        a.start ? a.start(c || 0, d) : a.noteGrainOn(c || 0, d, b - d)
    }

    function t(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (d) {}
    }

    function m(a, d, c, e, h, k) {
        this.type = "filter";
        this.ob = [a, d, c, e, h, k];
        this.V = b();
        this.H = b();
        this.H.gain.value = k;
        this.F = b();
        this.F.gain.value = 1 - k;
        this.Ta = A.createBiquadFilter();
        this.Ta.type = "number" === typeof this.Ta.type ? a : Pc[a];
        this.Ta.frequency.value = d;
        this.Ta.detune && (this.Ta.detune.value = c);
        this.Ta.Q.value = e;
        this.Ta.gain.value = h;
        this.V.connect(this.Ta);
        this.V.connect(this.F);
        this.Ta.connect(this.H)
    }

    function p(a, d, c) {
        this.type = "delay";
        this.ob = [a, d, c];
        this.V = b();
        this.H = b();
        this.H.gain.value = c;
        this.F = b();
        this.F.gain.value = 1 - c;
        this.Lh = b();
        this.Kc = u(a);
        this.Kc.delayTime.value = a;
        this.Xi = b();
        this.Xi.gain.value = d;
        this.V.connect(this.Lh);
        this.V.connect(this.F);
        this.Lh.connect(this.H);
        this.Lh.connect(this.Kc);
        this.Kc.connect(this.Xi);
        this.Xi.connect(this.Lh)
    }

    function e(a, d, c, e) {
        this.type = "convolve";
        this.ob = [d, c, e];
        this.V = b();
        this.H = b();
        this.H.gain.value = c;
        this.F = b();
        this.F.gain.value = 1 - c;
        this.Ve = A.createConvolver();
        a && (this.Ve.normalize = d, this.Ve.buffer = a);
        this.V.connect(this.Ve);
        this.V.connect(this.F);
        this.Ve.connect(this.H)
    }

    function a(a, d, c, e, h) {
        this.type = "flanger";
        this.ob = [a, d, c, e, h];
        this.V = b();
        this.F = b();
        this.F.gain.value = 1 - h / 2;
        this.H = b();
        this.H.gain.value = h / 2;
        this.dj = b();
        this.dj.gain.value = e;
        this.Kc = u(a + d);
        this.Kc.delayTime.value = a;
        this.xb = A.createOscillator();
        this.xb.frequency.value = c;
        this.tc = b();
        this.tc.gain.value = d;
        this.V.connect(this.Kc);
        this.V.connect(this.F);
        this.Kc.connect(this.H);
        this.Kc.connect(this.dj);
        this.dj.connect(this.Kc);
        this.xb.connect(this.tc);
        this.tc.connect(this.Kc.delayTime);
        r(this.xb)
    }

    function c(a, d, c, e, h, k) {
        this.type = "phaser";
        this.ob = [a, d, c, e, h, k];
        this.V = b();
        this.F = b();
        this.F.gain.value = 1 - k / 2;
        this.H = b();
        this.H.gain.value = k / 2;
        this.Ta = A.createBiquadFilter();
        this.Ta.type = "number" === typeof this.Ta.type ? 7 : "allpass";
        this.Ta.frequency.value = a;
        this.Ta.detune && (this.Ta.detune.value = d);
        this.Ta.Q.value = c;
        this.xb = A.createOscillator();
        this.xb.frequency.value = h;
        this.tc = b();
        this.tc.gain.value = e;
        this.V.connect(this.Ta);
        this.V.connect(this.F);
        this.Ta.connect(this.H);
        this.xb.connect(this.tc);
        this.tc.connect(this.Ta.frequency);
        r(this.xb)
    }

    function x(a) {
        this.type = "gain";
        this.ob = [a];
        this.Z = b();
        this.Z.gain.value = a
    }

    function d(a, d) {
        this.type = "tremolo";
        this.ob = [a, d];
        this.Z = b();
        this.Z.gain.value = 1 - d / 2;
        this.xb = A.createOscillator();
        this.xb.frequency.value = a;
        this.tc = b();
        this.tc.gain.value = d / 2;
        this.xb.connect(this.tc);
        this.tc.connect(this.Z.gain);
        r(this.xb)
    }

    function h(a, d) {
        this.type = "ringmod";
        this.ob = [a, d];
        this.V = b();
        this.H = b();
        this.H.gain.value = d;
        this.F = b();
        this.F.gain.value = 1 - d;
        this.Xh = b();
        this.Xh.gain.value = 0;
        this.xb = A.createOscillator();
        this.xb.frequency.value = a;
        this.xb.connect(this.Xh.gain);
        r(this.xb);
        this.V.connect(this.Xh);
        this.V.connect(this.F);
        this.Xh.connect(this.H)
    }

    function v(a, d, c, e, h) {
        this.type = "distortion";
        this.ob = [a, d, c, e, h];
        this.V = b();
        this.ak = b();
        this.$j = b();
        this.Tv(c, Math.pow(10, e / 20));
        this.H = b();
        this.H.gain.value = h;
        this.F = b();
        this.F.gain.value = 1 - h;
        this.Bk = A.createWaveShaper();
        this.Vi = new Float32Array(65536);
        this.cu(a, d);
        this.Bk.Vi = this.Vi;
        this.V.connect(this.ak);
        this.V.connect(this.F);
        this.ak.connect(this.Bk);
        this.Bk.connect(this.$j);
        this.$j.connect(this.H)
    }

    function n(a, d, b, c, e) {
        this.type = "compressor";
        this.ob = [a, d, b, c, e];
        this.Z = A.createDynamicsCompressor();
        try {
            this.Z.threshold.value = a, this.Z.knee.value = d, this.Z.ratio.value = b, this.Z.attack.value = c, this.Z.release.value = e
        } catch (h) {}
    }

    function k(a, d) {
        this.type = "analyser";
        this.ob = [a, d];
        this.Z = A.createAnalyser();
        this.Z.fftSize = a;
        this.Z.smoothingTimeConstant = d;
        this.$t = new Float32Array(this.Z.frequencyBinCount);
        this.$p = new Uint8Array(a);
        this.Rh = 0
    }

    function l() {
        this.fa = null;
        this.Jj = 0
    }

    function Y(a, d) {
        this.src = a;
        this.P = y;
        this.Nc = d;
        this.Di = !1;
        var c = this;
        this.Vl = this.km = null;
        this.sg = [];
        this.ik = 0;
        this.an = this.bj = this.gq = this.Wj = !1;
        1 === y && d && !bb && (this.P = 0, this.km = b());
        this.Jd = this.ca = null;
        var e;
        switch (this.P) {
            case 0:
                this.ca = new Audio;
                this.ca.crossOrigin = "anonymous";
                this.ca.addEventListener("canplaythrough", function() {
                    c.an = !0
                });
                1 === y && A.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.gq = !0, this.ca.addEventListener("canplay", function() {
                    c.Vl || (c.Vl = A.createMediaElementSource(c.ca), c.Vl.connect(c.km))
                }));
                this.ca.autoplay = !1;
                this.ca.jy = "auto";
                this.ca.src = a;
                break;
            case 1:
                G.Bh ? G.ro(a, function(a) {
                    c.Jd = a;
                    c.eo()
                }, function() {
                    c.bj = !0
                }) : (e = new XMLHttpRequest, e.open("GET", a, !0), e.responseType = "arraybuffer", e.onload = function() {
                    c.Jd = e.response;
                    c.eo()
                }, e.onerror = function() {
                    c.bj = !0
                }, e.send());
                break;
            case 2:
                this.ca = !0;
                break;
            case 3:
                this.ca = !0
        }
    }

    function E(a, d) {
        var c = this;
        this.tag = d;
        this.$a = this.qd = !0;
        this.src = a.src;
        this.buffer = a;
        this.P = y;
        this.Nc = a.Nc;
        this.playbackRate = 1;
        this.Vf = !0;
        this.oc = this.Ec = !1;
        this.fc = 0;
        this.Dh = this.$f = this.ud = !1;
        this.volume = 1;
        this.im = function(a) {
            if (!c.oc && !c.Ec) {
                var d = this;
                d || (d = a.target);
                d === c.Ci && (c.Vf = !0, c.$a = !0, O = c.tag, G.trigger(jc.prototype.e.si, F))
            }
        };
        this.Ci = null;
        this.Xf = 1 === M && !this.Nc || 2 === M;
        this.lg = 1;
        this.startTime = this.Xf ? G.tb.K : G.he.K;
        this.Xa = this.hb = null;
        this.wd = !1;
        this.Cb = null;
        this.xp = this.wp = this.vp = this.up = this.zp = this.yp = 0;
        this.i = null;
        var e = !1;
        1 !== this.P || 0 !== this.buffer.P || this.buffer.gq || (this.P = 0);
        switch (this.P) {
            case 0:
                this.Nc ? (this.i = a.ca, e = !a.Di, a.Di = !0) : (this.i = new Audio, this.i.crossOrigin = "anonymous", this.i.autoplay = !1, this.i.src = a.ca.src, e = !0);
                e && this.i.addEventListener("ended", function() {
                    O = c.tag;
                    c.$a = !0;
                    G.trigger(jc.prototype.e.si, F)
                });
                break;
            case 1:
                this.hb = b();
                this.hb.connect(f(d));
                1 === this.buffer.P ? a.ca && (this.i = A.createBufferSource(), this.i.buffer = a.ca, this.i.connect(this.hb)) : (this.i = this.buffer.ca, this.buffer.km.connect(this.hb), this.buffer.Di || (this.buffer.Di = !0, this.buffer.ca.addEventListener("ended", function() {
                    O = c.tag;
                    c.$a = !0;
                    G.trigger(jc.prototype.e.si, F)
                })));
                break;
            case 2:
                this.i = new window.Media(w + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (c.Vf = !0, c.$a = !0, O = c.tag, G.trigger(jc.prototype.e.si, F))
                });
                break;
            case 3:
                this.i = !0
        }
    }

    function z(a, d) {
        var b = a.De() ? 1 : 0,
            c = d.De() ? 1 : 0;
        return b === c ? 0 : b < c ? 1 : -1
    }

    function aa(a, d) {
        C(ra);
        if (a.length) {
            var b, c, e;
            b = 0;
            for (c = B.length; b < c; b++) e = B[b], ob(a, e.tag) && ra.push(e);
            d && ra.sort(z)
        } else P && !P.gf() && (C(ra), ra[0] = P)
    }

    function R(a, d) {
        ea.hasOwnProperty(a) ? ea[a].push(d) : ea[a] = [d];
        var b, c, e, h, k = A.destination;
        if (ea.hasOwnProperty(a) && (e = ea[a], e.length))
            for (k = e[0].zc(), b = 0, c = e.length; b < c; b++) h = e[b], b + 1 === c ? h.Hc(A.destination) : h.Hc(e[b + 1].zc());
        aa(a);
        b = 0;
        for (c = ra.length; b < c; b++) ra[b].Cv(k);
        Ra && Gb === a && (Ra.disconnect(), Ra.connect(k))
    }

    function U() {}

    function K() {}

    function T() {}
    var N = jc.prototype;
    N.ya = function(a) {
        this.ka = a;
        this.b = a.b
    };
    N.ya.prototype.R = function() {};
    var G = null,
        F = null,
        O = "",
        w = "",
        y = 0,
        A = null,
        J = [],
        B = [],
        P = null,
        W = !1,
        M = 0,
        H = !1,
        Q = 1,
        pa = 0,
        S = 0,
        Ca = !1,
        qa = 1,
        Ma = 1,
        Cc = 10,
        Dc = 1E4,
        Ec = 1,
        Ra = null,
        Gb = "",
        cb = !1,
        db = [],
        bb = !1,
        ea = {},
        Pc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    m.prototype.Hc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.F.disconnect();
        this.F.connect(a)
    };
    m.prototype.remove = function() {
        this.V.disconnect();
        this.Ta.disconnect();
        this.H.disconnect();
        this.F.disconnect()
    };
    m.prototype.zc = function() {
        return this.V
    };
    p.prototype.Hc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.F.disconnect();
        this.F.connect(a)
    };
    p.prototype.remove = function() {
        this.V.disconnect();
        this.Lh.disconnect();
        this.Kc.disconnect();
        this.Xi.disconnect();
        this.H.disconnect();
        this.F.disconnect()
    };
    p.prototype.zc = function() {
        return this.V
    };
    e.prototype.Hc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.F.disconnect();
        this.F.connect(a)
    };
    e.prototype.remove = function() {
        this.V.disconnect();
        this.Ve.disconnect();
        this.H.disconnect();
        this.F.disconnect()
    };
    e.prototype.zc = function() {
        return this.V
    };
    a.prototype.Hc = function(a) {
        this.F.disconnect();
        this.F.connect(a);
        this.H.disconnect();
        this.H.connect(a)
    };
    a.prototype.remove = function() {
        this.V.disconnect();
        this.Kc.disconnect();
        this.xb.disconnect();
        this.tc.disconnect();
        this.F.disconnect();
        this.H.disconnect();
        this.dj.disconnect()
    };
    a.prototype.zc = function() {
        return this.V
    };
    c.prototype.Hc = function(a) {
        this.F.disconnect();
        this.F.connect(a);
        this.H.disconnect();
        this.H.connect(a)
    };
    c.prototype.remove = function() {
        this.V.disconnect();
        this.Ta.disconnect();
        this.xb.disconnect();
        this.tc.disconnect();
        this.F.disconnect();
        this.H.disconnect()
    };
    c.prototype.zc = function() {
        return this.V
    };
    x.prototype.Hc = function(a) {
        this.Z.disconnect();
        this.Z.connect(a)
    };
    x.prototype.remove = function() {
        this.Z.disconnect()
    };
    x.prototype.zc = function() {
        return this.Z
    };
    d.prototype.Hc = function(a) {
        this.Z.disconnect();
        this.Z.connect(a)
    };
    d.prototype.remove = function() {
        this.xb.disconnect();
        this.tc.disconnect();
        this.Z.disconnect()
    };
    d.prototype.zc = function() {
        return this.Z
    };
    h.prototype.Hc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.F.disconnect();
        this.F.connect(a)
    };
    h.prototype.remove = function() {
        this.xb.disconnect();
        this.Xh.disconnect();
        this.V.disconnect();
        this.H.disconnect();
        this.F.disconnect()
    };
    h.prototype.zc = function() {
        return this.V
    };
    v.prototype.Tv = function(a, d) {
        .01 > a && (a = .01);
        this.ak.gain.value = a;
        this.$j.gain.value = Math.pow(1 / a, .6) * d
    };
    v.prototype.shape = function(a, d, b) {
        var c = 1.05 * b * d - d;
        b = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        d = a < d ? a : d + c * (1 - Math.exp(-(1 / c) * (a - d)));
        return d * b
    };
    v.prototype.cu = function(a, d) {
        for (var b = Math.pow(10, a / 20), c = Math.pow(10, d / 20), e = 0, h = 0; 32768 > h; ++h) e = h / 32768, e = this.shape(e, b, c), this.Vi[32768 + h] = e, this.Vi[32768 - h - 1] = -e
    };
    v.prototype.Hc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.F.disconnect();
        this.F.connect(a)
    };
    v.prototype.remove = function() {
        this.V.disconnect();
        this.ak.disconnect();
        this.Bk.disconnect();
        this.$j.disconnect();
        this.H.disconnect();
        this.F.disconnect()
    };
    v.prototype.zc = function() {
        return this.V
    };
    n.prototype.Hc = function(a) {
        this.Z.disconnect();
        this.Z.connect(a)
    };
    n.prototype.remove = function() {
        this.Z.disconnect()
    };
    n.prototype.zc = function() {
        return this.Z
    };
    k.prototype.Gb = function() {
        this.Z.getFloatFrequencyData(this.$t);
        this.Z.getByteTimeDomainData(this.$p);
        for (var a = this.Z.fftSize, d = 0, b = this.Rh = 0, c = 0; d < a; d++) c = (this.$p[d] - 128) / 128, 0 > c && (c = -c), this.Rh < c && (this.Rh = c), b += c * c;
        this.Rh = g(this.Rh);
        g(Math.sqrt(b / a))
    };
    k.prototype.Hc = function(a) {
        this.Z.disconnect();
        this.Z.connect(a)
    };
    k.prototype.remove = function() {
        this.Z.disconnect()
    };
    k.prototype.zc = function() {
        return this.Z
    };
    l.prototype.Yh = function(a) {
        this.fa = a
    };
    l.prototype.tj = function() {
        return !!this.fa
    };
    l.prototype.Gb = function() {};
    var tb = !1;
    Y.prototype.Dv = function() {
        var a, d, b, c;
        b = a = 0;
        for (d = B.length; a < d; ++a) c = B[a], B[b] = c, c.buffer === this ? c.stop() : ++b;
        B.length = b;
        this.Jd = this.ca = null
    };
    Y.prototype.eo = function() {
        if (!this.ca && this.Jd) {
            var a = this;
            if (A.decodeAudioData) A.decodeAudioData(this.Jd, function(d) {
                a.ca = d;
                a.Jd = null;
                var b, c, e;
                if (ja(a.Xj) || H) ja(a.Si) || (b = a.Si.Ve, b.normalize = a.jp, b.buffer = d);
                else if (a.sg.length) {
                    b = 0;
                    for (c = a.sg.length; b < c; b++) {
                        d = a.sg[b];
                        e = new E(a, d.kq);
                        e.Fm(!0);
                        if ("undefined" !== typeof d.lp && (d.fa = G.pj(d.lp), !d.fa)) continue;
                        if (d.fa) {
                            var h = Ta(d.fa.x, d.fa.y, -d.fa.j.ib(), pa, S, !0),
                                k = Ta(d.fa.x, d.fa.y, -d.fa.j.ib(), pa, S, !1);
                            e.Em(h, k, Ia(d.fa.k - d.fa.j.ib()), d.Al, d.Yl, d.am);
                            e.Yh(d.fa)
                        } else e.Em(d.x, d.y, d.Df, d.Al, d.Yl, d.am);
                        e.play(a.Sl, a.$m, a.ik);
                        a.Wj && e.pause();
                        B.push(e)
                    }
                    C(a.sg)
                } else e = new E(a, a.Xj || ""), e.play(a.Sl, a.$m, a.ik), a.Wj && e.pause(), B.push(e)
            }, function() {
                a.bj = !0
            });
            else if (this.ca = A.createBuffer(this.Jd, !1), this.Jd = null, ja(this.Xj) || H) ja(this.Si) || (d = this.Si.Ve, d.normalize = this.jp, d.buffer = this.ca);
            else {
                var d = new E(this, this.Xj);
                d.play(this.Sl, this.$m, this.ik);
                this.Wj && d.pause();
                B.push(d)
            }
        }
    };
    Y.prototype.Oo = function() {
        switch (this.P) {
            case 0:
                var a = 4 <= this.ca.readyState;
                a && (this.an = !0);
                return a || this.an;
            case 1:
                return !!this.Jd || !!this.ca;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    Y.prototype.Nu = function() {
        switch (this.P) {
            case 0:
                return this.Oo();
            case 1:
                return !!this.ca;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    Y.prototype.Cu = function() {
        switch (this.P) {
            case 0:
                return !!this.ca.error;
            case 1:
                return this.bj
        }
        return !1
    };
    E.prototype.gf = function() {
        switch (this.P) {
            case 0:
                return this.i.ended;
            case 1:
                return 1 === this.buffer.P ? !this.qd && !this.$a && this.i.loop || this.oc ? !1 : this.Vf : this.i.ended;
            case 2:
                return this.Vf;
            case 3:
                !0
        }
        return !0
    };
    E.prototype.Qs = function() {
        return this.qd || this.$a ? !0 : this.gf()
    };
    E.prototype.Fm = function(a) {
        1 === y && (!this.wd && a ? this.hb && (this.Xa || (this.Xa = A.createPanner(), this.Xa.panningModel = "number" === typeof this.Xa.panningModel ? qa : ["equalpower", "HRTF", "soundfield"][qa], this.Xa.distanceModel = "number" === typeof this.Xa.distanceModel ? Ma : ["linear", "inverse", "exponential"][Ma], this.Xa.refDistance = Cc, this.Xa.maxDistance = Dc, this.Xa.rolloffFactor = Ec), this.hb.disconnect(), this.hb.connect(this.Xa), this.Xa.connect(f(this.tag)), this.wd = !0) : this.wd && !a && this.hb && (this.Xa.disconnect(), this.hb.disconnect(), this.hb.connect(f(this.tag)), this.wd = !1))
    };
    E.prototype.Em = function(a, d, b, c, e, h) {
        this.wd && 1 === y && (this.Xa.setPosition(a, d, 0), this.Xa.setOrientation(Math.cos(D(b)), Math.sin(D(b)), 0), this.Xa.coneInnerAngle = c, this.Xa.coneOuterAngle = e, this.Xa.coneOuterGain = h, this.yp = a, this.zp = d, this.up = b, this.vp = c, this.wp = e, this.xp = h)
    };
    E.prototype.Yh = function(a) {
        this.wd && 1 === y && (this.Cb || (this.Cb = new l), this.Cb.Yh(a))
    };
    E.prototype.Gb = function(a) {
        if (this.wd && 1 === y && this.Cb && this.Cb.tj() && this.De()) {
            this.Cb.Gb(a);
            a = this.Cb.fa;
            var d = Ta(a.x, a.y, -a.j.ib(), pa, S, !0),
                b = Ta(a.x, a.y, -a.j.ib(), pa, S, !1);
            this.Xa.setPosition(d, b, 0);
            d = 0;
            "undefined" !== typeof this.Cb.fa.k && (d = a.k - a.j.ib(), this.Xa.setOrientation(Math.cos(d), Math.sin(d), 0))
        }
    };
    E.prototype.play = function(a, d, b, c) {
        var e = this.i;
        this.ud = a;
        this.volume = d;
        b = b || 0;
        c = c || 0;
        switch (this.P) {
            case 0:
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.volume !== d * Q && (e.volume = d * Q);
                e.loop !== a && (e.loop = a);
                e.muted && (e.muted = !1);
                if (e.currentTime !== b) try {
                    e.currentTime = b
                } catch (h) {}
                if (this.Nc && cb && !G.Ab) db.push(this);
                else try {
                    this.i.play()
                } catch (k) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", k)
                }
                break;
            case 1:
                this.muted = !1;
                this.lg = 1;
                if (1 === this.buffer.P) this.hb.gain.value = d * Q, this.qd || (this.i = A.createBufferSource(), this.i.buffer = this.buffer.ca, this.i.connect(this.hb)), this.i.onended = this.im, this.Ci = this.i, this.i.loop = a, this.Vf = !1, 0 === b ? r(this.i, c) : q(this.i, b, this.Be(), c);
                else {
                    1 !== e.playbackRate && (e.playbackRate = 1);
                    e.loop !== a && (e.loop = a);
                    e.volume = d * Q;
                    if (e.currentTime !== b) try {
                        e.currentTime = b
                    } catch (l) {}
                    this.Nc && cb && !G.Ab ? db.push(this) : e.play()
                }
                break;
            case 2:
                (!this.qd && this.$a || 0 !== b) && e.seekTo(b);
                e.play();
                this.Vf = !1;
                break;
            case 3:
                G.Nb ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.Xf ? G.tb.K : G.he.K) - b;
        this.oc = this.$a = this.qd = !1
    };
    E.prototype.stop = function() {
        switch (this.P) {
            case 0:
                this.i.paused || this.i.pause();
                break;
            case 1:
                1 === this.buffer.P ? t(this.i) : this.i.paused || this.i.pause();
                break;
            case 2:
                this.i.stop();
                break;
            case 3:
                G.Nb && AppMobi.context.stopSound(this.src)
        }
        this.$a = !0;
        this.oc = !1
    };
    E.prototype.pause = function() {
        if (!(this.qd || this.$a || this.gf() || this.oc)) {
            switch (this.P) {
                case 0:
                    this.i.paused || this.i.pause();
                    break;
                case 1:
                    1 === this.buffer.P ? (this.fc = this.sl(!0), this.ud && (this.fc = this.fc % this.Be()), this.oc = !0, t(this.i)) : this.i.paused || this.i.pause();
                    break;
                case 2:
                    this.i.pause();
                    break;
                case 3:
                    G.Nb && AppMobi.context.stopSound(this.src)
            }
            this.oc = !0
        }
    };
    E.prototype.Gv = function() {
        if (!(this.qd || this.$a || this.gf()) && this.oc) {
            switch (this.P) {
                case 0:
                    this.i.play();
                    break;
                case 1:
                    1 === this.buffer.P ? (this.i = A.createBufferSource(), this.i.buffer = this.buffer.ca, this.i.connect(this.hb), this.i.onended = this.im, this.Ci = this.i, this.i.loop = this.ud, this.hb.gain.value = Q * this.volume * this.lg, this.li(), this.startTime = (this.Xf ? G.tb.K : G.he.K) - this.fc / (this.playbackRate || .001), q(this.i, this.fc, this.Be())) : this.i.play();
                    break;
                case 2:
                    this.i.play();
                    break;
                case 3:
                    G.Nb && AppMobi.context.resumeSound(this.src)
            }
            this.oc = !1
        }
    };
    E.prototype.seek = function(a) {
        if (!(this.qd || this.$a || this.gf())) switch (this.P) {
            case 0:
                try {
                    this.i.currentTime = a
                } catch (d) {}
                break;
            case 1:
                if (1 === this.buffer.P) this.oc ? this.fc = a : (this.pause(), this.fc = a, this.Gv());
                else try {
                    this.i.currentTime = a
                } catch (b) {}
                break;
            case 3:
                G.Nb && AppMobi.context.seekSound(this.src, a)
        }
    };
    E.prototype.Cv = function(a) {
        1 === this.P && (this.wd ? (this.Xa.disconnect(), this.Xa.connect(a)) : (this.hb.disconnect(), this.hb.connect(a)))
    };
    E.prototype.Be = function() {
        var a = 0;
        switch (this.P) {
            case 0:
                "undefined" !== typeof this.i.duration && (a = this.i.duration);
                break;
            case 1:
                a = this.buffer.ca.duration;
                break;
            case 2:
                a = this.i.getDuration();
                break;
            case 3:
                G.Nb && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    E.prototype.sl = function(a) {
        var d = this.Be(),
            b = 0;
        switch (this.P) {
            case 0:
                "undefined" !== typeof this.i.currentTime && (b = this.i.currentTime);
                break;
            case 1:
                if (1 === this.buffer.P) {
                    if (this.oc) return this.fc;
                    b = (this.Xf ? G.tb.K : G.he.K) - this.startTime
                } else "undefined" !== typeof this.i.currentTime && (b = this.i.currentTime);
                break;
            case 3:
                G.Nb && (b = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (b *= this.playbackRate);
        !this.ud && b > d && (b = d);
        return b
    };
    E.prototype.De = function() {
        return !this.oc && !this.qd && !this.$a && !this.gf()
    };
    E.prototype.$v = function() {
        return !this.qd && !this.$a && !this.gf()
    };
    E.prototype.lw = function() {
        var a = this.volume * Q;
        isFinite(a) || (a = 0);
        switch (this.P) {
            case 0:
                "undefined" !== typeof this.i.volume && this.i.volume !== a && (this.i.volume = a);
                break;
            case 1:
                1 === this.buffer.P ? this.hb.gain.value = a * this.lg : "undefined" !== typeof this.i.volume && this.i.volume !== a && (this.i.volume = a)
        }
    };
    E.prototype.Zi = function(a) {
        switch (this.P) {
            case 0:
                this.i.muted !== !!a && (this.i.muted = !!a);
                break;
            case 1:
                1 === this.buffer.P ? (this.lg = a ? 0 : 1, this.hb.gain.value = Q * this.volume * this.lg) : this.i.muted !== !!a && (this.i.muted = !!a)
        }
    };
    E.prototype.Vv = function() {
        this.$f = !0;
        this.Zi(this.$f || this.Dh)
    };
    E.prototype.kk = function(a) {
        this.Dh = !!a;
        this.Zi(this.$f || this.Dh)
    };
    E.prototype.Wv = function(a) {
        this.playbackRate = a;
        this.li()
    };
    E.prototype.li = function() {
        var a = this.playbackRate;
        this.Xf && (a *= G.vf);
        switch (this.P) {
            case 0:
                this.i.playbackRate !== a && (this.i.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.P ? this.i.playbackRate.value !== a && (this.i.playbackRate.value = a) : this.i.playbackRate !== a && (this.i.playbackRate = a)
        }
    };
    E.prototype.Zv = function(a) {
        switch (this.P) {
            case 0:
                a ? this.De() ? (this.Ec = !0, this.i.pause()) : this.Ec = !1 : this.Ec && (this.i.play(), this.Ec = !1);
                break;
            case 1:
                a ? this.De() ? (this.Ec = !0, 1 === this.buffer.P ? (this.fc = this.sl(!0), this.ud && (this.fc = this.fc % this.Be()), t(this.i)) : this.i.pause()) : this.Ec = !1 : this.Ec && (1 === this.buffer.P ? (this.i = A.createBufferSource(), this.i.buffer = this.buffer.ca, this.i.connect(this.hb), this.i.onended = this.im, this.Ci = this.i, this.i.loop = this.ud, this.hb.gain.value = Q * this.volume * this.lg, this.li(), this.startTime = (this.Xf ? G.tb.K : G.he.K) - this.fc / (this.playbackRate || .001), q(this.i, this.fc, this.Be())) : this.i.play(), this.Ec = !1);
                break;
            case 2:
                a ? this.De() ? (this.i.pause(), this.Ec = !0) : this.Ec = !1 : this.Ec && (this.Ec = !1, this.i.play())
        }
    };
    N.qa = function(a) {
        function d() {
            if (!Ca && A.createBuffer) {
                var a = A.createBuffer(1, 220, 22050),
                    b = A.createBufferSource();
                b.buffer = a;
                b.connect(A.destination);
                r(b)
            }
        }
        this.type = a;
        G = this.b = a.b;
        F = this;
        this.pc = null;
        this.Gh = -600;
        this.b.Bh && (bb = !0);
        !(this.b.dg || this.b.xj && (this.b.uh || this.b.yj)) || this.b.zj || this.b.Ba || this.b.Mo || bb || (cb = !0);
        A = null;
        "undefined" !== typeof AudioContext ? (y = 1, A = new AudioContext) : "undefined" !== typeof webkitAudioContext && (y = 1, A = new webkitAudioContext);
        this.b.dg && A && (A.close && A.close(), "undefined" !== typeof AudioContext ? A = new AudioContext : "undefined" !== typeof webkitAudioContext && (A = new webkitAudioContext));
        cb ? document.addEventListener("touchend", function() {
            !tb && A && (d(), tb = !0);
            var a, b, c;
            if (cb) {
                if (!H)
                    for (a = 0, b = db.length; a < b; ++a) c = db[a], c.$a || c.oc || c.i.play();
                C(db)
            }
        }, !0) : bb && document.addEventListener("touchend", function() {
            !tb && A && (d(), tb = !0)
        }, !0);
        1 !== y && (this.b.nc && "undefined" !== typeof window.Media ? y = 2 : this.b.No && (y = 3));
        2 === y && (w = location.href, a = w.lastIndexOf("/"), -1 < a && (w = w.substr(0, a + 1)), w = w.replace("file://", ""));
        if (this.b.Ou && this.b.Pu && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.je(this);
        else {
            if (this.b.Nb) W = this.b.xj;
            else try {
                W = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (b) {
                W = !1
            }
            this.b.ii(this)
        }
    };
    var xa = N.qa.prototype;
    xa.R = function() {
        this.b.Ef = this;
        M = this.r[0];
        this.$d = this.r[1];
        this.sv = 0 !== this.r[2];
        this.hp = 0;
        qa = this.r[3];
        Ma = this.r[4];
        this.Gh = -this.r[5];
        Cc = this.r[6];
        Dc = this.r[7];
        Ec = this.r[8];
        this.pc = new l;
        var a = this.b.B || this.b.width,
            d = this.b.A || this.b.height;
        1 === y && (A.listener.setPosition(a / 2, d / 2, this.Gh), A.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, d) {
            Ra && Ra.disconnect();
            Gb = d.toLowerCase();
            Ra = A.createMediaStreamSource(a);
            Ra.connect(f(Gb))
        });
        this.b.Pn(function(a) {
            F.mv(a)
        });
        var b = this;
        this.b.Gs(function(a) {
            b.jv(a)
        })
    };
    xa.jv = function(a) {
        var d, b, c;
        d = 0;
        for (b = B.length; d < b; d++) c = B[d], c.Cb && c.Cb.fa === a && (c.Cb.fa = null, c.wd && c.De() && c.ud && c.stop());
        this.pc.fa === a && (this.pc.fa = null)
    };
    xa.Tb = function() {
        var a = {
                silent: H,
                masterVolume: Q,
                listenerZ: this.Gh,
                listenerUid: this.pc.tj() ? this.pc.fa.uid : -1,
                playing: [],
                effects: {}
            },
            d = a.playing,
            b, c, e, h, k, l;
        b = 0;
        for (c = B.length; b < c; b++) e = B[b], !e.$v() || 3 === this.$d || e.Nc && 1 === this.$d || !e.Nc && 2 === this.$d || (h = e.sl(), e.ud && (h = h % e.Be()), h = {
            tag: e.tag,
            buffersrc: e.buffer.src,
            is_music: e.Nc,
            playbackTime: h,
            volume: e.volume,
            looping: e.ud,
            muted: e.$f,
            playbackRate: e.playbackRate,
            paused: e.oc,
            resume_position: e.fc
        }, e.wd && (h.pan = {}, l = h.pan, e.Cb && e.Cb.tj() ? l.objUid = e.Cb.fa.uid : (l.x = e.yp, l.y = e.zp, l.a = e.up), l.ia = e.vp, l.oa = e.wp, l.og = e.xp), d.push(h));
        d = a.effects;
        for (k in ea)
            if (ea.hasOwnProperty(k)) {
                e = [];
                b = 0;
                for (c = ea[k].length; b < c; b++) e.push({
                    type: ea[k][b].type,
                    params: ea[k][b].ob
                });
                d[k] = e
            }
        return a
    };
    var eb = [];
    xa.qc = function(b) {
        var f = b.silent;
        Q = b.masterVolume;
        this.Gh = b.listenerZ;
        this.pc.Yh(null);
        var g = b.listenerUid; - 1 !== g && (this.pc.Jj = g, eb.push(this.pc));
        var g = b.playing,
            r, u, q, t, E, w, Y, y, F, z, A;
        if (3 !== this.$d)
            for (r = 0, u = B.length; r < u; r++) F = B[r], F.Nc && 1 === this.$d || (F.Nc || 2 !== this.$d) && F.stop();
        for (E in ea)
            if (ea.hasOwnProperty(E))
                for (r = 0, u = ea[E].length; r < u; r++) ea[E][r].remove();
        Xa(ea);
        for (E in b.effects)
            if (b.effects.hasOwnProperty(E))
                for (w = b.effects[E], r = 0, u = w.length; r < u; r++) switch (q = w[r].type, z = w[r].params, q) {
                    case "filter":
                        R(E, new m(z[0], z[1], z[2], z[3], z[4], z[5]));
                        break;
                    case "delay":
                        R(E, new p(z[0], z[1], z[2]));
                        break;
                    case "convolve":
                        q = z[2];
                        F = this.kj(q, !1);
                        F.ca ? q = new e(F.ca, z[0], z[1], q) : (q = new e(null, z[0], z[1], q), F.jp = z[0], F.Si = q);
                        R(E, q);
                        break;
                    case "flanger":
                        R(E, new a(z[0], z[1], z[2], z[3], z[4]));
                        break;
                    case "phaser":
                        R(E, new c(z[0], z[1], z[2], z[3], z[4], z[5]));
                        break;
                    case "gain":
                        R(E, new x(z[0]));
                        break;
                    case "tremolo":
                        R(E, new d(z[0], z[1]));
                        break;
                    case "ringmod":
                        R(E, new h(z[0], z[1]));
                        break;
                    case "distortion":
                        R(E, new v(z[0], z[1], z[2], z[3], z[4]));
                        break;
                    case "compressor":
                        R(E, new n(z[0], z[1], z[2], z[3], z[4]));
                        break;
                    case "analyser":
                        R(E, new k(z[0], z[1]))
                }
        r = 0;
        for (u = g.length; r < u; r++) 3 === this.$d || (b = g[r], q = b.buffersrc, t = b.is_music, E = b.tag, w = b.playbackTime, Y = b.looping, y = b.volume, A = (z = b.pan) && z.hasOwnProperty("objUid") ? z.objUid : -1, t && 1 === this.$d) || !t && 2 === this.$d || ((F = this.wo(q, E, t, Y, y)) ? (F.fc = b.resume_position, F.Fm(!!z), F.play(Y, y, w), F.li(), F.lw(), F.Zi(F.$f || F.Dh), b.paused && F.pause(), b.muted && F.Vv(), F.Zi(F.$f || F.Dh), z && (-1 !== A ? (F.Cb = F.Cb || new l, F.Cb.Jj = A, eb.push(F.Cb)) : F.Em(z.x, z.y, z.a, z.ia, z.oa, z.og))) : (F = this.kj(q, t), F.ik = w, F.Wj = b.paused, z && (-1 !== A ? F.sg.push({
            lp: A,
            Al: z.ia,
            Yl: z.oa,
            am: z.og,
            kq: E
        }) : F.sg.push({
            x: z.x,
            y: z.y,
            Df: z.a,
            Al: z.ia,
            Yl: z.oa,
            am: z.og,
            kq: E
        }))));
        if (f && !H) {
            r = 0;
            for (u = B.length; r < u; r++) B[r].kk(!0);
            H = !0
        } else if (!f && H) {
            r = 0;
            for (u = B.length; r < u; r++) B[r].kk(!1);
            H = !1
        }
    };
    xa.oe = function() {
        var a, d, b, c;
        a = 0;
        for (d = eb.length; a < d; a++) b = eb[a], c = this.b.pj(b.Jj), b.Yh(c), b.Jj = -1, c && (pa = c.x, S = c.y);
        C(eb)
    };
    xa.mv = function(a) {
        if (!this.sv) {
            !a && A && A.resume && (A.resume(), Ca = !1);
            var d, b;
            d = 0;
            for (b = B.length; d < b; d++) B[d].Zv(a);
            a && A && A.suspend && (A.suspend(), Ca = !0)
        }
    };
    xa.Gb = function() {
        var a = this.b.ye,
            d, b, c;
        d = 0;
        for (b = B.length; d < b; d++) c = B[d], c.Gb(a), 0 !== M && c.li();
        var e, h;
        for (e in ea)
            if (ea.hasOwnProperty(e))
                for (c = ea[e], d = 0, b = c.length; d < b; d++) h = c[d], h.Gb && h.Gb();
        1 === y && this.pc.tj() && (this.pc.Gb(a), pa = this.pc.fa.x, S = this.pc.fa.y, A.listener.setPosition(this.pc.fa.x, this.pc.fa.y, this.Gh))
    };
    var fb = [];
    xa.Xv = function(a) {
        var d, b, c, e, h, k = 0;
        d = 0;
        for (b = a.length; d < b; ++d)
            if (c = a[d], e = c[0], c = 2 * c[1], (h = 4 < e.length && ".ogg" === e.substr(e.length -
                    4)) && W || !h && !W) fb.push({
                filename: e,
                size: c,
                fa: null
            }), k += c;
        return k
    };
    xa.bw = function() {
        var a, d, b, c;
        a = 0;
        for (d = fb.length; a < d; ++a) b = fb[a], c = this.b.jl + b.filename, b.fa = this.kj(c, !1)
    };
    xa.mu = function() {
        var a = 0,
            d, b, c;
        d = 0;
        for (b = fb.length; d < b; ++d) c = fb[d], c.fa.Nu() || c.fa.Cu() || this.b.Ba || this.b.yj ? a += c.size : c.fa.Oo() && (a += Math.floor(c.size / 2));
        return a
    };
    xa.Ev = function() {
        var a, d, b, c;
        b = a = 0;
        for (d = J.length; a < d; ++a) c = J[a], J[b] = c, c.Nc ? c.Dv() : ++b;
        J.length = b
    };
    xa.kj = function(a, d) {
        var b, c, e, h = null;
        b = 0;
        for (c = J.length; b < c; b++)
            if (e = J[b], e.src === a) {
                h = e;
                break
            }
        h || (bb && d && this.Ev(), h = new Y(a, d), J.push(h));
        return h
    };
    xa.wo = function(a, d, b, c, e) {
        var h, k, l;
        h = 0;
        for (k = B.length; h < k; h++)
            if (l = B[h], l.src === a && (l.Qs() || b)) return l.tag = d, l;
        a = this.kj(a, b);
        if (!a.ca) return "<preload>" !== d && (a.Xj = d, a.Sl = c, a.$m = e), null;
        l = new E(a, d);
        B.push(l);
        return l
    };
    var ra = [];
    U.prototype.si = function(a) {
        return ob(O, a)
    };
    U.prototype.fr = function() {
        return H
    };
    U.prototype.gr = function(a) {
        aa(a);
        var d;
        a = 0;
        for (d = ra.length; a < d; a++)
            if (ra[a].De()) return !0;
        return !1
    };
    N.e = new U;
    K.prototype.Play = function(a, d, b, c) {
        !H && (b = Math.pow(10, b / 20), isFinite(b) || (b = 0), 0 > b && (b = 0), 1 < b && (b = 1), P = this.wo(this.b.jl + a[0] + (W ? ".ogg" : ".m4a"), c, a[1], 0 !== d, b)) && (P.Fm(!1), P.play(0 !== d, b, 0, this.hp), this.hp = 0)
    };
    K.prototype.ls = function(a, d) {
        aa(a);
        0 > d && (d = 0);
        var b, c;
        b = 0;
        for (c = ra.length; b < c; b++) ra[b].Wv(d)
    };
    K.prototype.Fn = function(a) {
        aa(a);
        var d;
        a = 0;
        for (d = ra.length; a < d; a++) ra[a].stop()
    };
    K.prototype.ms = function(a) {
        var d;
        2 === a && (a = H ? 1 : 0);
        if (0 === a && !H) {
            a = 0;
            for (d = B.length; a < d; a++) B[a].kk(!0);
            H = !0
        } else if (1 === a && H) {
            a = 0;
            for (d = B.length; a < d; a++) B[a].kk(!1);
            H = !1
        }
    };
    N.m = new K;
    T.prototype.dn = function(a, d) {
        aa(d, !0);
        ra.length ? a.n(ra[0].Be()) : a.n(0)
    };
    N.C = new T
})();

function kc(g) {
    this.b = g
}
(function() {
    function g() {
        q && t && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(b) {
            m.kv(b)
        })
    }

    function f() {}

    function b() {}
    var u = kc.prototype;
    u.ya = function(b) {
        this.ka = b;
        this.b = b.b
    };
    var r = u.ya.prototype;
    r.R = function() {};
    var q = !1,
        t = !1;
    document.addEventListener("DOMContentLoaded", function() {
        if (window.C2_RegisterSW && navigator.re) {
            var b = document.createElement("script");
            b.onload = function() {
                q = !0;
                g()
            };
            b.src = "offlineClient.js";
            document.head.appendChild(b)
        }
    });
    var m = null;
    r.pp = function() {
        t = !0;
        g()
    };
    u.qa = function(b) {
        this.type = b;
        this.b = b.b
    };
    r = u.qa.prototype;
    r.R = function() {
        var b = this;
        window.addEventListener("resize", function() {
            b.b.trigger(kc.prototype.e.vn, b)
        });
        m = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            b.b.trigger(kc.prototype.e.Kr, b)
        }), window.addEventListener("offline", function() {
            b.b.trigger(kc.prototype.e.Ir, b)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            b.b.ig = 1;
            b.b.trigger(kc.prototype.e.xi, b)
        }), window.applicationCache.addEventListener("progress", function(e) {
            b.b.ig = e.loaded / e.total || 0
        }));
        this.b.Nb || (document.addEventListener("appMobi.device.update.available", function() {
            b.b.trigger(kc.prototype.e.xi, b)
        }), document.addEventListener("backbutton", function() {
            b.b.trigger(kc.prototype.e.ri, b)
        }), document.addEventListener("menubutton", function() {
            b.b.trigger(kc.prototype.e.qn, b)
        }), document.addEventListener("searchbutton", function() {
            b.b.trigger(kc.prototype.e.Pr, b)
        }), document.addEventListener("tizenhwkey", function(e) {
            var a;
            switch (e.keyName) {
                case "back":
                    a = b.b.trigger(kc.prototype.e.ri, b);
                    !a && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (a = b.b.trigger(kc.prototype.e.qn, b)) || e.preventDefault()
            }
        }));
        this.b.Jl && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(e) {
            b.b.trigger(kc.prototype.e.ri, b) && (e.sj = !0)
        }) : this.b.Il && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!b.b.trigger(kc.prototype.e.ri, b)
        });
        this.b.Pn(function(e) {
            e ? b.b.trigger(kc.prototype.e.Lr, b) : b.b.trigger(kc.prototype.e.Mr, b)
        });
        this.Su = "undefined" !== typeof window.is_scirra_arcade
    };
    r.kv = function(b) {
        b = b.data.type;
        "downloading-update" === b ? this.b.trigger(kc.prototype.e.Rr, this) : "update-ready" === b || "update-pending" === b ? this.b.trigger(kc.prototype.e.xi, this) : "offline-ready" === b && this.b.trigger(kc.prototype.e.Jr, this)
    };
    f.prototype.Kr = function() {
        return !0
    };
    f.prototype.Ir = function() {
        return !0
    };
    f.prototype.xi = function() {
        return !0
    };
    f.prototype.Mr = function() {
        return !0
    };
    f.prototype.Lr = function() {
        return !0
    };
    f.prototype.vn = function() {
        return !0
    };
    f.prototype.ri = function() {
        return !0
    };
    f.prototype.qn = function() {
        return !0
    };
    f.prototype.Pr = function() {
        return !0
    };
    f.prototype.er = function(b) {
        return (window.innerWidth <= window.innerHeight ? 0 : 1) === b
    };
    f.prototype.Rr = function() {
        return !0
    };
    f.prototype.xi = function() {
        return !0
    };
    f.prototype.Jr = function() {
        return !0
    };
    u.e = new f;
    b.prototype.Sq = function(b, e) {
        this.b.Cc ? CocoonJS.App.openURL(b) : this.b.Mc ? ejecta.openURL(b) : this.b.Il ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(b, {
            openExternal: !0
        }) : this.b.nc ? window.open(b, "_system") : this.Su || this.b.Ba || window.open(b, e)
    };
    u.m = new b;
    u.C = new function() {}
})();

function ic(g) {
    this.b = g
}
(function() {
    function g() {
        this.name = "";
        this.Wh = 0;
        this.ob = []
    }

    function f() {
        m++;
        m === t.length && t.push(new g);
        return t[m]
    }

    function b() {}

    function u() {}

    function r() {}
    var q = ic.prototype;
    q.ya = function(b) {
        this.ka = b;
        this.b = b.b
    };
    q.ya.prototype.R = function() {};
    q.qa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var t = [],
        m = -1;
    q.qa.prototype.R = function() {
        var b = this;
        window.c2_callFunction = function(e, a) {
            var c, g, d, h = f();
            h.name = e.toLowerCase();
            h.Wh = 0;
            if (a)
                for (h.ob.length = a.length, c = 0, g = a.length; c < g; ++c) d = a[c], h.ob[c] = "number" === typeof d || "string" === typeof d ? d : "boolean" === typeof d ? d ? 1 : 0 : 0;
            else C(h.ob);
            b.b.trigger(ic.prototype.e.vi, b, h.name);
            m--;
            return h.Wh
        }
    };
    b.prototype.vi = function(b) {
        var e = 0 > m ? null : t[m];
        return e ? ob(b, e.name) : !1
    };
    q.e = new b;
    u.prototype.CallFunction = function(b, e) {
        var a = f();
        a.name = b.toLowerCase();
        a.Wh = 0;
        Da(a.ob, e);
        this.b.trigger(ic.prototype.e.vi, this, a.name);
        m--
    };
    q.m = new u;
    r.prototype.Ur = function(b, e) {
        e = ta(e);
        var a = 0 > m ? null : t[m];
        a ? 0 <= e && e < a.ob.length ? b.nk(a.ob[e]) : b.W(0) : b.W(0)
    };
    r.prototype.Eq = function(b, e) {
        var a = f();
        a.name = e.toLowerCase();
        a.Wh = 0;
        C(a.ob);
        var c, g;
        c = 2;
        for (g = arguments.length; c < g; c++) a.ob.push(arguments[c]);
        this.b.trigger(ic.prototype.e.vi, this, a.name);
        m--;
        b.nk(a.Wh)
    };
    q.C = new r
})();

function lc(g) {
    this.b = g
}
(function() {
    var g = lc.prototype;
    g.ya = function(b) {
        this.ka = b;
        this.b = b.b
    };
    g.ya.prototype.R = function() {};
    g.qa = function(b) {
        this.type = b;
        this.b = b.b;
        this.Pp = []
    };
    var f = g.qa.prototype;
    f.R = function() {
        var b = "";
        if ("localhost" === location.hostname || "127.0.0.1" === location.hostname) b = "";
        (function(b, f, g, t, m, p, e) {
            b[m] = b[m] || function() {
                (b[m].Bv = b[m].Bv || []).push(arguments)
            };
            b[m].by = 1 * new Date;
            p = f.createElement(g);
            e = f.getElementsByTagName(g)[0];
            p.async = 1;
            p.src = t;
            e.parentNode.insertBefore(p, e)
        })(window, document, "script", b, "Lagged")
    };
    f.Yc = function() {};
    f.lc = function() {};
    g.e = {};
    g.m = {};
    f = g.m;
    f.Ts = function(b, f) {
        /* LaggedAPI.APIAds.show("interstitial", b, f, function(b) {
            b.success ? console.log("ad done") : console.log(b.lo)
        }) */
    };
    f.Rs = function(b) {
        //LaggedAPI.init(b, "lagdevaF3001")
    };
    f.Px = function(b, f) {
        var g = {};
        g.score = b;
        g.board = f;
        /* LaggedAPI.Scores.save(g, function(b) {
            b.success ? console.log("high score saved") : console.log(b.lo)
        }) */
    };
    f.Ss = function(b) {
        if (!(-1 < this.Pp.indexOf(b))) {
            var f = [];
            f.push(b);
            this.Pp.push(b);
            /* LaggedAPI.Achievements.save(f, function(b) {
                b.success ? console.log("achievement saved") : console.log(b.lo)
            }) */
        }
    };
    g.C = {}
})();
var mc = !1;
try {
    ! function() {
        var g, f, b;
        ! function() {
            var u = {},
                r = {};
            g = function(b, f, g) {
                u[b] = {
                    $s: f,
                    Ps: g
                }
            };
            b = f = function(g) {
                function t(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = g.split("/").slice(0, -1), c = 0, e = a.length; e > c; c++) {
                        var k = a[c];
                        ".." === k ? b.pop() : "." !== k && b.push(k)
                    }
                    return b.join("/")
                }
                if (b.Kx = u, r[g]) return r[g];
                if (r[g] = {}, !u[g]) throw Error("Could not find module " + g);
                for (var m, p = u[g], e = p.$s, p = p.Ps, a = [], c = 0, x = e.length; x > c; c++) "exports" === e[c] ? a.push(m = {}) : a.push(f(t(e[c])));
                e = p.apply(this, a);
                return r[g] = m || e
            }
        }();
        g("promise/all", ["./utils", "exports"], function(b, f) {
            var g = b.isArray,
                t = b.isFunction;
            f.all = function(b) {
                if (!g(b)) throw new TypeError("You must pass an array to all.");
                return new this(function(f, e) {
                    function a(a) {
                        return function(b) {
                            g[a] = b;
                            0 === --d && f(g)
                        }
                    }
                    var c, g = [],
                        d = b.length;
                    0 === d && f([]);
                    for (var h = 0; h < b.length; h++)(c = b[h]) && t(c.then) ? c.then(a(h), e) : (g[h] = c, 0 === --d && f(g))
                })
            }
        });
        g("promise/asap", ["exports"], function(b) {
            function f() {
                return function() {
                    process.iy(m)
                }
            }

            function g() {
                var b = 0,
                    c = new a(m),
                    e = document.createTextNode("");
                return c.observe(e, {
                        characterData: !0
                    }),
                    function() {
                        e.data = b = ++b % 2
                    }
            }

            function t() {
                return function() {
                    c.setTimeout(m, 1)
                }
            }

            function m() {
                for (var a = 0; a < x.length; a++) {
                    var b = x[a];
                    (0, b[0])(b[1])
                }
                x = []
            }
            var p, e = "undefined" != typeof window ? window : {},
                a = e.MutationObserver || e.WebKitMutationObserver,
                c = "undefined" != typeof global ? global : void 0 === this ? window : this,
                x = [];
            p = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? f() : a ? g() : t();
            b.Js = function(a, b) {
                1 === x.push([a, b]) && p()
            }
        });
        g("promise/config", ["exports"], function(b) {
            var f = {
                $x: !1
            };
            b.bo = f;
            b.Us = function(b, g) {
                return 2 !== arguments.length ? f[b] : void(f[b] = g)
            }
        });
        g("promise/polyfill", ["./promise", "./utils", "exports"], function(b, f, g) {
            var t = b.Promise,
                m = f.isFunction;
            g.tv = function() {
                var b;
                b = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in b && "resolve" in b.Promise && "reject" in b.Promise && "all" in b.Promise && "race" in b.Promise && function() {
                    var e;
                    return new b.Promise(function(a) {
                        e = a
                    }), m(e)
                }() || (b.Promise = t)
            }
        });
        g("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(b, f, g, t, m, p, e, a) {
            function c(a) {
                if (!U(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof c)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.Bi = [];
                x(a, this)
            }

            function x(a, b) {
                function d(a) {
                    k(b, a)
                }

                function c(a) {
                    Y(b, a)
                }
                try {
                    a(d, c)
                } catch (e) {
                    c(e)
                }
            }

            function d(a, b, d, c) {
                var e, h, f, l, g = U(d);
                if (g) try {
                    e = d(c), f = !0
                } catch (m) {
                    l = !0, h = m
                } else e = c, f = !0;
                n(b, e) || (g && f ? k(b, e) : l ? Y(b, h) : a === N ? k(b, e) : a === G && Y(b, e))
            }

            function h(a, b, d, c) {
                a = a.Bi;
                var e = a.length;
                a[e] = b;
                a[e + N] = d;
                a[e + G] = c
            }

            function v(a, b) {
                for (var c, e, h = a.Bi, k = a.Ai, f = 0; f < h.length; f += 3) c = h[f], e = h[f + b], d(b, c, e, k);
                a.Bi = null
            }

            function n(a, b) {
                var d, c = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (R(b) && (c = b.then, U(c))) return c.call(b, function(c) {
                        return d ? !0 : (d = !0, void(b !== c ? k(a, c) : l(a, c)))
                    }, function(b) {
                        return d ? !0 : (d = !0, void Y(a, b))
                    }), !0
                } catch (e) {
                    return d ? !0 : (Y(a, e), !0)
                }
                return !1
            }

            function k(a, b) {
                a === b ? l(a, b) : n(a, b) || l(a, b)
            }

            function l(a, b) {
                a.Gd === K && (a.Gd = T, a.Ai = b, aa.async(E, a))
            }

            function Y(a, b) {
                a.Gd === K && (a.Gd = T, a.Ai = b, aa.async(z, a))
            }

            function E(a) {
                v(a, a.Gd = N)
            }

            function z(a) {
                v(a, a.Gd = G)
            }
            var aa = b.bo,
                R = (b.Us, f.dv),
                U = f.isFunction;
            b = (f.now, g.all);
            t = t.race;
            m = m.resolve;
            p = p.reject;
            aa.async = e.Js;
            var K = void 0,
                T = 0,
                N = 1,
                G = 2;
            c.prototype = {
                constructor: c,
                Gd: void 0,
                Ai: void 0,
                Bi: void 0,
                then: function(a, b) {
                    var c = this,
                        e = new this.constructor(function() {});
                    if (this.Gd) {
                        var k = arguments;
                        aa.async(function() {
                            d(c.Gd, e, k[c.Gd - 1], c.Ai)
                        })
                    } else h(this, e, a, b);
                    return e
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            c.all = b;
            c.race = t;
            c.resolve = m;
            c.reject = p;
            a.Promise = c
        });
        g("promise/race", ["./utils", "exports"], function(b, f) {
            var g = b.isArray;
            f.race = function(b) {
                if (!g(b)) throw new TypeError("You must pass an array to race.");
                return new this(function(f, g) {
                    for (var e, a = 0; a < b.length; a++)(e = b[a]) && "function" == typeof e.then ? e.then(f, g) : f(e)
                })
            }
        });
        g("promise/reject", ["exports"], function(b) {
            b.reject = function(b) {
                return new this(function(f, g) {
                    g(b)
                })
            }
        });
        g("promise/resolve", ["exports"], function(b) {
            b.resolve = function(b) {
                return b && "object" == typeof b && b.constructor === this ? b : new this(function(f) {
                    f(b)
                })
            }
        });
        g("promise/utils", ["exports"], function(b) {
            function f(b) {
                return "function" == typeof b
            }
            var g = Date.now || function() {
                return (new Date).getTime()
            };
            b.dv = function(b) {
                return f(b) || "object" == typeof b && null !== b
            };
            b.isFunction = f;
            b.isArray = function(b) {
                return "[object Array]" === Object.prototype.toString.call(b)
            };
            b.now = g
        });
        f("promise/polyfill").tv()
    }();
    var nc = function() {
        return function(g) {
            function f(u) {
                if (b[u]) return b[u].od;
                var r = b[u] = {
                    od: {},
                    id: u,
                    loaded: !1
                };
                return g[u].call(r.od, r, r.od, f), r.loaded = !0, r.od
            }
            var b = {};
            return f.re = g, f.Tg = b, f.Qh = "", f(0)
        }([function(g, f, b) {
            f.yi = !0;
            var u = function(f) {
                function g(a, b) {
                    a[b] = function() {
                        var d = arguments;
                        return a.ready().then(function() {
                            return a[b].apply(a, d)
                        })
                    }
                }

                function u() {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        if (b)
                            for (var c in b) b.hasOwnProperty(c) && (d(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                    }
                    return arguments[0]
                }

                function m(a) {
                    for (var b in e)
                        if (e.hasOwnProperty(b) && e[b] === a) return !0;
                    return !1
                }
                var p = {},
                    e = {
                        Kg: "asyncStorage",
                        Lg: "localStorageWrapper",
                        Ng: "webSQLStorage"
                    },
                    a = "clear getItem iterate key keys length removeItem setItem".split(" "),
                    c = {
                        description: "",
                        Nf: [e.Kg, e.Ng, e.Lg].slice(),
                        name: "localforage",
                        size: 4980736,
                        ga: "keyvaluepairs",
                        version: 1
                    },
                    x = function(a) {
                        var b = {},
                            d;
                        try {
                            var c = c || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.ko || a.msIndexedDB;
                            d = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : c && "function" == typeof c.open && "undefined" != typeof a.IDBKeyRange
                        } catch (f) {
                            d = !1
                        }
                        b[e.Kg] = !!d;
                        var g;
                        try {
                            g = a.openDatabase
                        } catch (m) {
                            g = !1
                        }
                        b[e.Ng] = !!g;
                        var p;
                        try {
                            p = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                        } catch (r) {
                            p = !1
                        }
                        return b[e.Lg] = !!p, b
                    }(f),
                    d = Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    };
                return new(function() {
                    function h(a) {
                        if (!(this instanceof h)) throw new TypeError("Cannot call a class as a function");
                        this.Kg = e.Kg;
                        this.Lg = e.Lg;
                        this.Ng = e.Ng;
                        this.Mk = u({}, c);
                        this.Pe = u({}, this.Mk, a);
                        this.In = this.kd = null;
                        this.le = !1;
                        this.da = null;
                        this.Jn();
                        this.Sp(this.Pe.Nf)
                    }
                    return h.prototype.bo = function(a) {
                        if ("object" == typeof a) {
                            if (this.le) return Error("Can't call config() after localforage has been used.");
                            for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.Pe[b] = a[b];
                            return "driver" in a && a.Nf && this.Sp(this.Pe.Nf), !0
                        }
                        return "string" == typeof a ? this.Pe[a] : this.Pe
                    }, h.prototype.Nf = function() {
                        return this.Og || null
                    }, h.prototype.zo = function(a, d, c) {
                        var e = this,
                            h = function() {
                                if (m(a)) switch (a) {
                                    case e.Kg:
                                        return new Promise(function(a) {
                                            a(b(1))
                                        });
                                    case e.Lg:
                                        return new Promise(function(a) {
                                            a(b(2))
                                        });
                                    case e.Ng:
                                        return new Promise(function(a) {
                                            a(b(4))
                                        })
                                } else if (p[a]) return Promise.resolve(p[a]);
                                return Promise.reject(Error("Driver not found."))
                            }();
                        return h.then(d, c), h
                    }, h.prototype.ready = function(a) {
                        var b = this,
                            d = b.kd.then(function() {
                                return null === b.le && (b.le = b.In()), b.le
                            });
                        return d.then(a, a), d
                    }, h.prototype.Sp = function(a, b, c) {
                        function e() {
                            f.Pe.Nf = f.Nf()
                        }

                        function h(a) {
                            return function() {
                                function b() {
                                    for (; d < a.length;) {
                                        var c = a[d];
                                        return d++, f.da = null, f.le = null, f.zo(c).then(function(a) {
                                            return f.Bs(a), e(), f.le = f.Ok(f.Pe), f.le
                                        })["catch"](b)
                                    }
                                    e();
                                    return f.kd = Promise.reject(Error("No available storage method found.")), f.kd
                                }
                                var d = 0;
                                return b()
                            }
                        }
                        var f = this;
                        d(a) || (a = [a]);
                        var g = this.Cs(a);
                        return this.kd = (null !== this.kd ? this.kd["catch"](function() {
                            return Promise.resolve()
                        }) : Promise.resolve()).then(function() {
                            var a = g[0];
                            return f.da = null, f.le = null, f.zo(a).then(function(a) {
                                f.Og = a.Og;
                                e();
                                f.Jn();
                                f.In = h(g)
                            })
                        })["catch"](function() {
                            e();
                            return f.kd = Promise.reject(Error("No available storage method found.")), f.kd
                        }), this.kd.then(b, c), this.kd
                    }, h.prototype.supports = function(a) {
                        return !!x[a]
                    }, h.prototype.Bs = function(a) {
                        u(this, a)
                    }, h.prototype.Cs = function(a) {
                        for (var b = [], d = 0, c = a.length; c > d; d++) {
                            var e = a[d];
                            this.supports(e) && b.push(e)
                        }
                        return b
                    }, h.prototype.Jn = function() {
                        for (var b = 0; b < a.length; b++) g(this, a[b])
                    }, h.prototype.al = function(a) {
                        return new h(a)
                    }, h
                }())
            }("undefined" != typeof window ? window : self);
            f["default"] = u;
            g.od = f["default"]
        }, function(g, f) {
            f.yi = !0;
            f["default"] = function(b) {
                function f(a, d) {
                    a = a || [];
                    d = d || {};
                    try {
                        return new Blob(a, d)
                    } catch (c) {
                        if ("TypeError" !== c.name) throw c;
                        for (var e = new(b.BlobBuilder || b.re || b.co || b.WebKitBlobBuilder), h = 0; h < a.length; h += 1) e.append(a[h]);
                        return e.getBlob(d.type)
                    }
                }

                function g(a) {
                    return new Promise(function(b, d) {
                        var c = new XMLHttpRequest;
                        c.open("GET", a);
                        c.withCredentials = !0;
                        c.responseType = "arraybuffer";
                        c.onreadystatechange = function() {
                            return 4 === c.readyState ? 200 === c.status ? b({
                                response: c.response,
                                type: c.getResponseHeader("Content-Type")
                            }) : void d({
                                status: c.status,
                                response: c.response
                            }) : void 0
                        };
                        c.send()
                    })
                }

                function q(a) {
                    return (new Promise(function(b, d) {
                        var c = f([""], {
                                type: "image/png"
                            }),
                            e = a.transaction([K], "readwrite");
                        e.objectStore(K).put(c, "key");
                        e.oncomplete = function() {
                            var c = a.transaction([K], "readwrite").objectStore(K).get("key");
                            c.onerror = d;
                            c.onsuccess = function(a) {
                                var d = URL.createObjectURL(a.target.result);
                                g(d).then(function(a) {
                                    b(!(!a || "image/png" !== a.type))
                                }, function() {
                                    b(!1)
                                }).then(function() {
                                    URL.revokeObjectURL(d)
                                })
                            }
                        };
                        e.onerror = e.onabort = d
                    }))["catch"](function() {
                        return !1
                    })
                }

                function t(a) {
                    return "boolean" == typeof R ? Promise.resolve(R) : q(a).then(function(a) {
                        return R = a
                    })
                }

                function m(a) {
                    return new Promise(function(b, d) {
                        var c = new FileReader;
                        c.onerror = d;
                        c.onloadend = function(d) {
                            b({
                                Hn: !0,
                                data: btoa(d.target.result || ""),
                                type: a.type
                            })
                        };
                        c.readAsBinaryString(a)
                    })
                }

                function p(a) {
                    for (var b = atob(a.data), d = b.length, c = new ArrayBuffer(d), e = new Uint8Array(c), h = 0; d > h; h++) e[h] = b.charCodeAt(h);
                    return f([c], {
                        type: a.type
                    })
                }

                function e(a) {
                    var b = this,
                        d = b.Nk().then(function() {
                            var a = U[b.da.name];
                            return a && a.Lf ? a.Lf : void 0
                        });
                    return d.then(a, a), d
                }

                function a(a) {
                    a = U[a.name];
                    var b = {};
                    b.promise = new Promise(function(a) {
                        b.resolve = a
                    });
                    a.fo.push(b);
                    a.Lf ? a.Lf = a.Lf.then(function() {
                        return b.promise
                    }) : a.Lf = b.promise
                }

                function c(a) {
                    function d() {
                        return Promise.resolve()
                    }
                    var c = this,
                        h = {
                            db: null
                        };
                    if (a)
                        for (var k in a) h[k] = a[k];
                    U || (U = {});
                    var f = U[h.name];
                    f || (f = {
                        hj: [],
                        db: null,
                        Lf: null,
                        fo: []
                    }, U[h.name] = f);
                    f.hj.push(c);
                    c.Nk || (c.Nk = c.ready, c.ready = e);
                    a = [];
                    for (k = 0; k < f.hj.length; k++) {
                        var l = f.hj[k];
                        l !== c && a.push(l.Nk()["catch"](d))
                    }
                    var n = f.hj.slice(0);
                    return Promise.all(a).then(function() {
                        return h.db = f.db, x(h, !1)
                    }).then(function(a) {
                        h.db = a;
                        var d;
                        d = c.Mk.version;
                        if (h.db) {
                            var e = !h.db.objectStoreNames.contains(h.ga),
                                k = h.version > h.db.version;
                            (h.version < h.db.version && (h.version !== d && b.console.warn('The database "' + h.name + "\" can't be downgraded from version " + h.db.version + " to version " + h.version + "."), h.version = h.db.version), k || e) ? (e && (d = h.db.version + 1, d > h.version && (h.version = d)), d = !0) : d = !1
                        } else d = !0;
                        return d ? x(h, !0) : a
                    }).then(function(a) {
                        h.db = f.db = a;
                        c.da = h;
                        for (a = 0; a < n.length; a++) {
                            var b = n[a];
                            b !== c && (b.da.db = h.db, b.da.version = h.version)
                        }
                    })
                }

                function x(d, c) {
                    return new Promise(function(e, h) {
                        if (d.db) {
                            if (!c) return e(d.db);
                            a(d);
                            d.db.close()
                        }
                        var k = [d.name];
                        c && k.push(d.version);
                        var f = aa.open.apply(aa, k);
                        c && (f.onupgradeneeded = function(a) {
                            var c = f.result;
                            try {
                                c.createObjectStore(d.ga), 1 >= a.oldVersion && c.createObjectStore(K)
                            } catch (e) {
                                if ("ConstraintError" !== e.name) throw e;
                                b.console.warn('The database "' + d.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + d.ga + '" already exists.')
                            }
                        });
                        f.onerror = function() {
                            h(f.error)
                        };
                        f.onsuccess = function() {
                            e(f.result);
                            var a = U[d.name].fo.pop();
                            a && a.resolve()
                        }
                    })
                }

                function d(a, d) {
                    var c = this;
                    "string" != typeof a && (b.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.da,
                                h = e.db.transaction(e.ga, "readonly").objectStore(e.ga).get(a);
                            h.onsuccess = function() {
                                var a = h.result;
                                void 0 === a && (a = null);
                                a && a.Hn && (a = p(a));
                                b(a)
                            };
                            h.onerror = function() {
                                d(h.error)
                            }
                        })["catch"](d)
                    });
                    return z(e, d), e
                }

                function h(a, b) {
                    var d = this,
                        c = new Promise(function(b, c) {
                            d.ready().then(function() {
                                var e = d.da,
                                    h = e.db.transaction(e.ga, "readonly").objectStore(e.ga).openCursor(),
                                    k = 1;
                                h.onsuccess = function() {
                                    var d = h.result;
                                    if (d) {
                                        var c = d.value;
                                        c && c.Hn && (c = p(c));
                                        c = a(c, d.key, k++);
                                        void 0 !== c ? b(c) : d["continue"]()
                                    } else b()
                                };
                                h.onerror = function() {
                                    c(h.error)
                                }
                            })["catch"](c)
                        });
                    return z(c, b), c
                }

                function v(a, d, c) {
                    var e = this;
                    "string" != typeof a && (b.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var h = new Promise(function(b, c) {
                        var h;
                        e.ready().then(function() {
                            return h = e.da, d instanceof Blob ? t(h.db).then(function(a) {
                                return a ? d : m(d)
                            }) : d
                        }).then(function(d) {
                            var e = h.db.transaction(h.ga, "readwrite"),
                                k = e.objectStore(h.ga);
                            null === d && (d = void 0);
                            e.oncomplete = function() {
                                void 0 === d && (d = null);
                                b(d)
                            };
                            e.onabort = e.onerror = function() {
                                c(f.error ? f.error : f.transaction.error)
                            };
                            var f = k.put(d, a)
                        })["catch"](c)
                    });
                    return z(h, c), h
                }

                function n(a, d) {
                    var c = this;
                    "string" != typeof a && (b.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.da,
                                h = e.db.transaction(e.ga, "readwrite"),
                                k = h.objectStore(e.ga)["delete"](a);
                            h.oncomplete = function() {
                                b()
                            };
                            h.onerror = function() {
                                d(k.error)
                            };
                            h.onabort = function() {
                                d(k.error ? k.error : k.transaction.error)
                            }
                        })["catch"](d)
                    });
                    return z(e, d), e
                }

                function k(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.da,
                                    e = c.db.transaction(c.ga, "readwrite"),
                                    h = e.objectStore(c.ga).clear();
                                e.oncomplete = function() {
                                    a()
                                };
                                e.onabort = e.onerror = function() {
                                    d(h.error ? h.error : h.transaction.error)
                                }
                            })["catch"](d)
                        });
                    return z(d, a), d
                }

                function l(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.da,
                                    e = c.db.transaction(c.ga, "readonly").objectStore(c.ga).count();
                                e.onsuccess = function() {
                                    a(e.result)
                                };
                                e.onerror = function() {
                                    d(e.error)
                                }
                            })["catch"](d)
                        });
                    return z(d, a), d
                }

                function Y(a, b) {
                    var d = this,
                        c = new Promise(function(b, c) {
                            return 0 > a ? void b(null) : void d.ready().then(function() {
                                var e = d.da,
                                    h = !1,
                                    k = e.db.transaction(e.ga, "readonly").objectStore(e.ga).openCursor();
                                k.onsuccess = function() {
                                    var d = k.result;
                                    return d ? void(0 === a ? b(d.key) : h ? b(d.key) : (h = !0, d.advance(a))) : void b(null)
                                };
                                k.onerror = function() {
                                    c(k.error)
                                }
                            })["catch"](c)
                        });
                    return z(c, b), c
                }

                function E(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.da,
                                    e = c.db.transaction(c.ga, "readonly").objectStore(c.ga).openCursor(),
                                    h = [];
                                e.onsuccess = function() {
                                    var b = e.result;
                                    return b ? (h.push(b.key), void b["continue"]()) : void a(h)
                                };
                                e.onerror = function() {
                                    d(e.error)
                                }
                            })["catch"](d)
                        });
                    return z(d, a), d
                }

                function z(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var aa = aa || b.indexedDB || b.webkitIndexedDB || b.mozIndexedDB || b.ko || b.msIndexedDB;
                if (aa) {
                    var R, U, K = "local-forage-detect-blob-support";
                    return {
                        Og: "asyncStorage",
                        Ok: c,
                        Uo: h,
                        getItem: d,
                        setItem: v,
                        removeItem: n,
                        clear: k,
                        length: l,
                        key: Y,
                        keys: E
                    }
                }
            }("undefined" != typeof window ? window : self);
            g.od = f["default"]
        }, function(g, f, b) {
            f.yi = !0;
            f["default"] = function(f) {
                function g(b, f) {
                    f && b.then(function(b) {
                        f(null, b)
                    }, function(b) {
                        f(b)
                    })
                }
                var q = null;
                try {
                    if (!(f.localStorage && "setItem" in f.localStorage)) return;
                    q = f.localStorage
                } catch (t) {
                    return
                }
                return {
                    Og: "localStorageWrapper",
                    Ok: function(f) {
                        var g = {};
                        if (f)
                            for (var e in f) g[e] = f[e];
                        return g.td = g.name + "/", g.ga !== this.Mk.ga && (g.td += g.ga + "/"), this.da = g, (new Promise(function(a) {
                            a(b(3))
                        })).then(function(a) {
                            return g.tf = a, Promise.resolve()
                        })
                    },
                    Uo: function(b, f) {
                        var e = this,
                            a = e.ready().then(function() {
                                for (var a = e.da, f = a.td, d = f.length, h = q.length, g = 1, n = 0; h > n; n++) {
                                    var k = q.key(n);
                                    if (0 === k.indexOf(f)) {
                                        var l = q.getItem(k);
                                        if (l && (l = a.tf.Yi(l)), l = b(l, k.substring(d), g++), void 0 !== l) return l
                                    }
                                }
                            });
                        return g(a, f), a
                    },
                    getItem: function(b, p) {
                        var e = this;
                        "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = e.ready().then(function() {
                            var a = e.da,
                                f = q.getItem(a.td + b);
                            return f && (f = a.tf.Yi(f)), f
                        });
                        return g(a, p), a
                    },
                    setItem: function(b, p, e) {
                        var a = this;
                        "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var c = a.ready().then(function() {
                            void 0 === p && (p = null);
                            var c = p;
                            return new Promise(function(d, e) {
                                var f = a.da;
                                f.tf.serialize(p, function(a, k) {
                                    if (k) e(k);
                                    else try {
                                        q.setItem(f.td +
                                            b, a), d(c)
                                    } catch (l) {
                                        "QuotaExceededError" !== l.name && "NS_ERROR_DOM_QUOTA_REACHED" !== l.name || e(l), e(l)
                                    }
                                })
                            })
                        });
                        return g(c, e), c
                    },
                    removeItem: function(b, p) {
                        var e = this;
                        "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = e.ready().then(function() {
                            q.removeItem(e.da.td + b)
                        });
                        return g(a, p), a
                    },
                    clear: function(b) {
                        var f = this,
                            e = f.ready().then(function() {
                                for (var a = f.da.td, b = q.length - 1; 0 <= b; b--) {
                                    var e = q.key(b);
                                    0 === e.indexOf(a) && q.removeItem(e)
                                }
                            });
                        return g(e, b), e
                    },
                    length: function(b) {
                        var f = this.keys().then(function(b) {
                            return b.length
                        });
                        return g(f, b), f
                    },
                    key: function(b, f) {
                        var e = this,
                            a = e.ready().then(function() {
                                var a, f = e.da;
                                try {
                                    a = q.key(b)
                                } catch (d) {
                                    a = null
                                }
                                return a && (a = a.substring(f.td.length)), a
                            });
                        return g(a, f), a
                    },
                    keys: function(b) {
                        var f = this,
                            e = f.ready().then(function() {
                                for (var a = f.da, b = q.length, e = [], d = 0; b > d; d++) 0 === q.key(d).indexOf(a.td) && e.push(q.key(d).substring(a.td.length));
                                return e
                            });
                        return g(e, b), e
                    }
                }
            }("undefined" != typeof window ? window : self);
            g.od = f["default"]
        }, function(g, f) {
            f.yi = !0;
            f["default"] = function(b) {
                function f(b) {
                    var g, e, a, c, r;
                    g = .75 * b.length;
                    var d = b.length,
                        h = 0;
                    "=" === b[b.length - 1] && (g--, "=" === b[b.length - 2] && g--);
                    var v = new ArrayBuffer(g),
                        n = new Uint8Array(v);
                    for (g = 0; d > g; g += 4) e = q.indexOf(b[g]), a = q.indexOf(b[g + 1]), c = q.indexOf(b[g + 2]), r = q.indexOf(b[g + 3]), n[h++] = e << 2 | a >> 4, n[h++] = (15 & a) << 4 | c >> 2, n[h++] = (3 & c) << 6 | 63 & r;
                    return v
                }

                function g(b) {
                    var f = new Uint8Array(b),
                        e = "";
                    for (b = 0; b < f.length; b += 3) e += q[f[b] >> 2], e += q[(3 & f[b]) << 4 | f[b + 1] >> 4], e += q[(15 & f[b + 1]) << 2 | f[b + 2] >> 6], e += q[63 & f[b + 2]];
                    return 2 === f.length % 3 ? e = e.substring(0, e.length - 1) + "=" : 1 === f.length % 3 && (e = e.substring(0, e.length - 2) + "=="), e
                }
                var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    t = /^~~local_forage_type~([^~]+)~/;
                return {
                    serialize: function(b, f) {
                        var e = "";
                        if (b && (e = b.toString()), b && ("[object ArrayBuffer]" === b.toString() || b.buffer && "[object ArrayBuffer]" === b.buffer.toString())) {
                            var a, c = "__lfsc__:";
                            b instanceof ArrayBuffer ? (a = b, c += "arbf") : (a = b.buffer, "[object Int8Array]" === e ? c += "si08" : "[object Uint8Array]" === e ? c += "ui08" : "[object Uint8ClampedArray]" === e ? c += "uic8" : "[object Int16Array]" === e ? c += "si16" : "[object Uint16Array]" === e ? c += "ur16" : "[object Int32Array]" === e ? c += "si32" : "[object Uint32Array]" === e ? c += "ui32" : "[object Float32Array]" === e ? c += "fl32" : "[object Float64Array]" === e ? c += "fl64" : f(Error("Failed to get type for BinaryArray")));
                            f(c + g(a))
                        } else if ("[object Blob]" === e) e = new FileReader, e.onload = function() {
                            var a = "~~local_forage_type~" + b.type + "~" + g(this.result);
                            f("__lfsc__:blob" + a)
                        }, e.readAsArrayBuffer(b);
                        else try {
                            f(JSON.stringify(b))
                        } catch (q) {
                            console.error("Couldn't convert value into a JSON string: ", b), f(null, q)
                        }
                    },
                    Yi: function(g) {
                        if ("__lfsc__:" !== g.substring(0, 9)) return JSON.parse(g);
                        var r, e = g.substring(13);
                        g = g.substring(9, 13);
                        if ("blob" === g && t.test(e)) {
                            var a = e.match(t);
                            r = a[1];
                            e = e.substring(a[0].length)
                        }
                        e = f(e);
                        switch (g) {
                            case "arbf":
                                return e;
                            case "blob":
                                var c;
                                e = [e];
                                r = {
                                    type: r
                                };
                                e = e || [];
                                r = r || {};
                                try {
                                    c = new Blob(e, r)
                                } catch (q) {
                                    if ("TypeError" !== q.name) throw q;
                                    c = new(b.BlobBuilder || b.re || b.co || b.WebKitBlobBuilder);
                                    for (g = 0; g < e.length; g += 1) c.append(e[g]);
                                    c = c.getBlob(r.type)
                                }
                                return c;
                            case "si08":
                                return new Int8Array(e);
                            case "ui08":
                                return new Uint8Array(e);
                            case "uic8":
                                return new Uint8ClampedArray(e);
                            case "si16":
                                return new Int16Array(e);
                            case "ur16":
                                return new Uint16Array(e);
                            case "si32":
                                return new Int32Array(e);
                            case "ui32":
                                return new Uint32Array(e);
                            case "fl32":
                                return new Float32Array(e);
                            case "fl64":
                                return new Float64Array(e);
                            default:
                                throw Error("Unkown type: " + g);
                        }
                    },
                    vy: f,
                    Nx: g
                }
            }("undefined" != typeof window ? window : self);
            g.od = f["default"]
        }, function(g, f, b) {
            f.yi = !0;
            f["default"] = function(f) {
                function g(a) {
                    var d = this,
                        c = {
                            db: null
                        };
                    if (a)
                        for (var e in a) c[e] = "string" != typeof a[e] ? a[e].toString() : a[e];
                    var f = new Promise(function(a, b) {
                        try {
                            c.db = h(c.name, String(c.version), c.description, c.size)
                        } catch (e) {
                            return b(e)
                        }
                        c.db.transaction(function(e) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS " + c.ga + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                d.da = c;
                                a()
                            }, function(a, d) {
                                b(d)
                            })
                        })
                    });
                    return (new Promise(function(a) {
                        a(b(3))
                    })).then(function(a) {
                        return c.tf = a, f
                    })
                }

                function q(a, b) {
                    var c = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.da;
                            e.db.transaction(function(c) {
                                c.executeSql("SELECT * FROM " + e.ga + " WHERE key = ? LIMIT 1", [a], function(a, d) {
                                    var c = d.rows.length ? d.rows.item(0).value : null;
                                    c && (c = e.tf.Yi(c));
                                    b(c)
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return d(e, b), e
                }

                function t(a, b) {
                    var c = this,
                        e = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.da;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT * FROM " + e.ga, [], function(d, c) {
                                        for (var h = c.rows, k = h.length, f = 0; k > f; f++) {
                                            var l = h.item(f),
                                                n = l.value;
                                            if (n && (n = e.tf.Yi(n)), n = a(n, l.key, f + 1), void 0 !== n) return void b(n)
                                        }
                                        b()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return d(e, b), e
                }

                function m(a, b, c) {
                    var e = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var h = new Promise(function(d, c) {
                        e.ready().then(function() {
                            void 0 === b && (b = null);
                            var h = b,
                                k = e.da;
                            k.tf.serialize(b, function(b, e) {
                                e ? c(e) : k.db.transaction(function(e) {
                                    e.executeSql("INSERT OR REPLACE INTO " + k.ga +
                                        " (key, value) VALUES (?, ?)", [a, b],
                                        function() {
                                            d(h)
                                        },
                                        function(a, b) {
                                            c(b)
                                        })
                                }, function(a) {
                                    a.code === a.QUOTA_ERR && c(a)
                                })
                            })
                        })["catch"](c)
                    });
                    return d(h, c), h
                }

                function p(a, b) {
                    var c = this;
                    "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.da;
                            e.db.transaction(function(c) {
                                c.executeSql("DELETE FROM " + e.ga + " WHERE key = ?", [a], function() {
                                    b()
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return d(e, b), e
                }

                function e(a) {
                    var b = this,
                        c = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.da;
                                c.db.transaction(function(b) {
                                    b.executeSql("DELETE FROM " + c.ga, [], function() {
                                        a()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return d(c, a), c
                }

                function a(a) {
                    var b = this,
                        c = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.da;
                                c.db.transaction(function(b) {
                                    b.executeSql("SELECT COUNT(key) as c FROM " + c.ga, [], function(b, d) {
                                        var c = d.rows.item(0).Tg;
                                        a(c)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return d(c, a), c
                }

                function c(a, b) {
                    var c = this,
                        e = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.da;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT key FROM " + e.ga + " WHERE id = ? LIMIT 1", [a + 1], function(a, d) {
                                        var c = d.rows.length ? d.rows.item(0).key : null;
                                        b(c)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return d(e, b), e
                }

                function x(a) {
                    var b = this,
                        c = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.da;
                                c.db.transaction(function(b) {
                                    b.executeSql("SELECT key FROM " + c.ga, [], function(b, d) {
                                        for (var c = [], e = 0; e < d.rows.length; e++) c.push(d.rows.item(e).key);
                                        a(c)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return d(c, a), c
                }

                function d(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var h = f.openDatabase;
                if (h) return {
                    Og: "webSQLStorage",
                    Ok: g,
                    Uo: t,
                    getItem: q,
                    setItem: m,
                    removeItem: p,
                    clear: e,
                    length: a,
                    key: c,
                    keys: x
                }
            }("undefined" != typeof window ? window : self);
            g.od = f["default"]
        }])
    };
    "object" == typeof exports && "object" == typeof module ? module.od = nc() : "function" == typeof define && define.Mx ? define([], nc) : "object" == typeof exports ? exports.localforage = nc() : this.localforage = nc()
} catch (oc) {
    mc = !0
}

function pc(g) {
    this.b = g
}
(function() {
    function g() {}

    function f() {}

    function b() {}
    var u = "",
        r = "",
        q = "";
    "undefined" !== typeof window.is_scirra_arcade && (q = "sa" + window.scirra_arcade_id + "_");
    var t = pc.prototype;
    t.ya = function(b) {
        this.ka = b;
        this.b = b.b
    };
    t.ya.prototype.R = function() {};
    t.qa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var m = t.qa.prototype;
    m.R = function() {
        this.mm = 0
    };
    m.pg = function() {};
    m.Tb = function() {
        return {}
    };
    m.qc = function() {};
    g.prototype.Fr = function(b) {
        return u === b
    };
    g.prototype.rr = function() {
        return !0
    };
    g.prototype.Er = function(b) {
        return u === b
    };
    g.prototype.ti = function() {
        return !0
    };
    g.prototype.Dr = function(b) {
        return u === b
    };
    g.prototype.mn = function(b) {
        return u === b
    };
    g.prototype.nr = function() {
        return !0
    };
    t.e = new g;
    f.prototype.hs = function(b, e) {
        if (mc) this.b.trigger(pc.prototype.e.ti, this);
        else {
            var a = q + b;
            this.mm++;
            var c = this;
            localforage.setItem(a, e, function(a, d) {
                c.mm--;
                a ? c.b.trigger(pc.prototype.e.ti, c) : (u = b, r = d, c.b.trigger(pc.prototype.e.rr, c), c.b.trigger(pc.prototype.e.Fr, c), r = u = "");
                0 === c.mm && c.b.trigger(pc.prototype.e.nr, c)
            })
        }
    };
    f.prototype.Fq = function(b) {
        if (mc) this.b.trigger(pc.prototype.e.ti, this);
        else {
            var e = this;
            localforage.getItem(q + b, function(a, c) {
                a ? e.b.trigger(pc.prototype.e.ti, e) : (u = b, null === c ? (r = "", e.b.trigger(pc.prototype.e.mn, e)) : (r = c, e.b.trigger(pc.prototype.e.Dr, e)), r = u = "")
            })
        }
    };
    t.m = new f;
    b.prototype.ir = function(b) {
        b.nk(r)
    };
    t.C = new b
})();

function qc(g) {
    this.b = g
}
(function() {
    function g() {}

    function f() {}

    function b() {}
    var u = qc.prototype;
    u.ya = function(b) {
        this.ka = b;
        this.b = b.b
    };
    u.ya.prototype.R = function() {};
    u.qa = function(b) {
        this.type = b;
        this.b = b.b;
        this.Ff = Array(4);
        this.nq = this.vk = this.wf = this.Wd = this.Vd = 0;
        this.sj = !1
    };
    var r = u.qa.prototype;
    r.R = function() {
        var b = this;
        if (!this.b.Ba) {
            jQuery(document).mousemove(function(e) {
                b.em(e)
            });
            jQuery(document).mousedown(function(e) {
                b.dm(e)
            });
            jQuery(document).mouseup(function(e) {
                b.fm(e)
            });
            jQuery(document).dblclick(function(e) {
                b.iv(e)
            });
            var f = function(e) {
                b.nv(e)
            };
            document.addEventListener("mousewheel", f, !1);
            document.addEventListener("DOMMouseScroll", f, !1)
        }
    };
    var q = {
        left: 0,
        top: 0
    };
    r.em = function(b) {
        var f = this.b.Ba ? q : jQuery(this.b.canvas).offset();
        this.Vd = b.pageX - f.left;
        this.Wd = b.pageY - f.top
    };
    r.dp = function() {
        return 0 < this.b.Rb ? !0 : 0 <= this.Vd && 0 <= this.Wd && this.Vd < this.b.width && this.Wd < this.b.height
    };
    r.dm = function(b) {
        this.dp() && (this.Ff[b.which] = !0, this.b.Ab = !0, this.b.trigger(qc.prototype.e.qr, this), this.wf = b.which - 1, this.vk = 0, this.b.trigger(qc.prototype.e.kn, this), this.b.trigger(qc.prototype.e.tn, this), this.b.Ab = !1)
    };
    r.fm = function(b) {
        this.Ff[b.which] && (this.b.rj && !this.b.Sd && b.preventDefault(), this.b.rj = !0, this.Ff[b.which] = !1, this.b.Ab = !0, this.wf = b.which - 1, this.b.trigger(qc.prototype.e.un, this), this.b.Ab = !1)
    };
    r.iv = function(b) {
        this.dp() && (b.preventDefault(), this.b.Ab = !0, this.wf = b.which - 1, this.vk = 1, this.b.trigger(qc.prototype.e.kn, this), this.b.trigger(qc.prototype.e.tn, this), this.b.Ab = !1)
    };
    r.nv = function(b) {
        this.nq = 0 > (b.wheelDelta ? b.wheelDelta : b.detail ? -b.detail : 0) ? 0 : 1;
        this.sj = !1;
        this.b.Ab = !0;
        this.b.trigger(qc.prototype.e.Tr, this);
        this.b.Ab = !1;
        this.sj && pb(b) && b.preventDefault()
    };
    r.rg = function() {
        var b, f;
        b = 0;
        for (f = this.Ff.length; b < f; ++b) this.Ff[b] && (this.Ff[b] = !1, this.wf = b - 1, this.b.trigger(qc.prototype.e.un, this))
    };
    g.prototype.kn = function(b, f) {
        return b === this.wf && f === this.vk
    };
    g.prototype.qr = function() {
        return !0
    };
    g.prototype.un = function(b) {
        return b === this.wf
    };
    g.prototype.cr = function(b) {
        var f = this.b.ih();
        return Va(this.b.Fg(b, this.Vd, this.Wd, f.Wf), f.Wf)
    };
    g.prototype.tn = function(b, f, e) {
        return b !== this.wf || f !== this.vk ? !1 : this.b.Fg(e, this.Vd, this.Wd, !1)
    };
    g.prototype.Tr = function(b) {
        this.sj = !0;
        return b === this.nq
    };
    u.e = new g;
    var t = null;
    f.prototype.ds = function(b) {
        this.b.Ba || (b = "auto pointer text crosshair move help wait none".split(" ")[b], t !== b && (t = b, document.body.style.cursor = b))
    };
    u.m = new f;
    b.prototype.Kk = function(b, f) {
        var e, a, c, g, d;
        ja(f) ? (e = this.b.rd(0), a = e.scale, c = e.Pb, g = e.ac, d = e.k, e.scale = 1, e.Pb = 1, e.ac = 1, e.k = 0, b.n(e.Pa(this.Vd, this.Wd, !0)), e.scale = a, e.Pb = c, e.ac = g, e.k = d) : (e = ka(f) ? this.b.rd(f) : this.b.Sf(f)) ? b.n(e.Pa(this.Vd, this.Wd, !0)) : b.n(0)
    };
    b.prototype.Lk = function(b, f) {
        var e, a, c, g, d;
        ja(f) ? (e = this.b.rd(0), a = e.scale, c = e.Pb, g = e.cc, d = e.k, e.scale = 1, e.Pb = 1, e.cc = 1, e.k = 0, b.n(e.Pa(this.Vd, this.Wd, !1)), e.scale = a, e.Pb = c, e.cc = g, e.k = d) : (e = ka(f) ? this.b.rd(f) : this.b.Sf(f)) ? b.n(e.Pa(this.Vd, this.Wd, !1)) : b.n(0)
    };
    u.C = new b
})();

function L(g) {
    this.b = g
}
(function() {
    function g() {
        if (0 === this.bl.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Cg ? b.drawImage(this.ja, this.mg, this.ng, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.ja, 0, 0, this.width, this.height);
            this.bl = a.toDataURL("image/png")
        }
        return this.bl
    }

    function f() {}

    function b() {}

    function u() {}
    var r = L.prototype;
    r.ya = function(a) {
        this.ka = a;
        this.b = a.b
    };
    var q = r.ya.prototype;
    q.R = function() {
        if (!this.G) {
            var a, b, c, e, k, f, r, m, p;
            this.Tc = [];
            this.ph = !1;
            a = 0;
            for (b = this.jc.length; a < b; a++) {
                k = this.jc[a];
                r = {};
                r.name = k[0];
                r.speed = k[1];
                r.loop = k[2];
                r.wm = k[3];
                r.xm = k[4];
                r.Zd = k[5];
                r.T = k[6];
                r.frames = [];
                c = 0;
                for (e = k[7].length; c < e; c++) f = k[7][c], m = {}, m.Mm = f[0], m.jq = f[1], m.mg = f[2], m.ng = f[3], m.width = f[4], m.height = f[5], m.duration = f[6], m.Yb = f[7], m.Zb = f[8], m.Bl = f[9], m.Yj = f[10], m.Cp = f[11], m.Cg = 0 !== m.width, m.bl = "", m.Ux = g, p = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, m.Gm = p, m.Na = null, (p = this.b.Zt(f[0])) ? m.ja = p : (m.ja = new Image, m.ja.Ws = f[0], m.ja.Vs = f[1], m.ja.Os = null, this.b.xw(m.ja, f[0])), r.frames.push(m), this.Tc.push(m);
                this.jc[a] = r
            }
        }
    };
    q.vq = function() {
        var a, b, c;
        a = 0;
        for (b = this.d.length; a < b; a++) c = this.d[a], c.Ui = c.za.Na
    };
    q.Pj = function() {
        if (!this.G) {
            var a, b, c;
            a = 0;
            for (b = this.Tc.length; a < b; ++a) c = this.Tc[a], c.ja.Os = null, c.Na = null;
            this.ph = !1;
            this.vq()
        }
    };
    q.gm = function() {
        if (!this.G && this.d.length) {
            var a, b, c;
            a = 0;
            for (b = this.Tc.length; a < b; ++a) c = this.Tc[a], c.Na = this.b.D.Ql(c.ja, !1, this.b.Ea, c.Cp);
            this.vq()
        }
    };
    q.Wu = function() {
        if (!this.G && !this.ph && this.b.D) {
            var a, b, c;
            a = 0;
            for (b = this.Tc.length; a < b; ++a) c = this.Tc[a], c.Na = this.b.D.Ql(c.ja, !1, this.b.Ea, c.Cp);
            this.ph = !0
        }
    };
    q.Vm = function() {
        if (!this.G && !this.d.length && this.ph) {
            var a, b, c;
            a = 0;
            for (b = this.Tc.length; a < b; ++a) c = this.Tc[a], this.b.D.deleteTexture(c.Na), c.Na = null;
            this.ph = !1
        }
    };
    var t = [];
    q.om = function(a) {
        var b, c, e;
        C(t);
        b = 0;
        for (c = this.Tc.length; b < c; ++b) e = this.Tc[b].ja, -1 === t.indexOf(e) && (a.drawImage(e, 0, 0), t.push(e))
    };
    r.qa = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.jc[0].frames[0].Yj;
        this.uc ? this.ea.bi(a) : this.ea = new ib(a)
    };
    var m = r.qa.prototype;
    m.R = function() {
        this.visible = 0 === this.r[0];
        this.uj = this.Ah = !1;
        this.Ue = 0 !== this.r[3];
        this.xa = this.vo(this.r[1]) || this.type.jc[0];
        this.u = this.r[2];
        0 > this.u && (this.u = 0);
        this.u >= this.xa.frames.length && (this.u = this.xa.frames.length - 1);
        var a = this.xa.frames[this.u];
        this.ea.bi(a.Yj);
        this.Yb = a.Yb;
        this.Zb = a.Zb;
        this.Kf = this.xa.speed;
        this.xe = this.xa.xm;
        1 === this.type.jc.length && 1 === this.type.jc[0].frames.length || 0 === this.Kf || (this.b.ii(this), this.Ah = !0);
        this.uc ? this.ld.reset() : this.ld = new gb;
        this.Pd = this.ld.K;
        this.Re = !0;
        this.Hd = 0;
        this.Qe = !0;
        this.Hf = this.Rn = "";
        this.Yn = 0;
        this.Mi = -1;
        this.type.Wu();
        var b, c, e, k, f, g, r, a = 0;
        for (b = this.type.jc.length; a < b; a++)
            for (k = this.type.jc[a], c = 0, e = k.frames.length; c < e; c++) f = k.frames[c], 0 === f.width && (f.width = f.ja.width, f.height = f.ja.height), f.Cg && (r = f.ja, g = f.Gm, g.left = f.mg / r.width, g.top = f.ng / r.height, g.right = (f.mg + f.width) / r.width, g.bottom = (f.ng + f.height) / r.height, 0 === f.mg && 0 === f.ng && f.width === r.width && f.height === r.height && (f.Cg = !1));
        this.za = this.xa.frames[this.u];
        this.Ui = this.za.Na
    };
    m.Tb = function() {
        var a = {
            a: this.xa.T,
            f: this.u,
            cas: this.Kf,
            fs: this.Pd,
            ar: this.Hd,
            at: this.ld.K,
            rt: this.xe
        };
        this.Re || (a.ap = this.Re);
        this.Qe || (a.af = this.Qe);
        return a
    };
    m.qc = function(a) {
        var b = this.du(a.a);
        b && (this.xa = b);
        this.u = a.f;
        0 > this.u && (this.u = 0);
        this.u >= this.xa.frames.length && (this.u = this.xa.frames.length - 1);
        this.Kf = a.cas;
        this.Pd = a.fs;
        this.Hd = a.ar;
        this.ld.reset();
        this.ld.K = a.at;
        this.Re = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Qe = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.xe = a.rt : this.xe = this.xa.xm;
        this.za = this.xa.frames[this.u];
        this.Ui = this.za.Na;
        this.ea.bi(this.za.Yj);
        this.Yb = this.za.Yb;
        this.Zb = this.za.Zb
    };
    m.Sk = function(a) {
        this.u = a ? 0 : this.xa.frames.length - 1;
        this.Re = !1;
        this.Rn = this.xa.name;
        this.uj = !0;
        this.b.trigger(L.prototype.e.pr, this);
        this.b.trigger(L.prototype.e.or, this);
        this.uj = !1;
        this.Hd = 0
    };
    m.re = function() {
        return this.ld.K
    };
    m.Gb = function() {
        this.ld.add(this.b.mj(this));
        this.Hf.length && this.ho();
        0 <= this.Mi && this.io();
        var a = this.ld.K,
            b = this.xa,
            c = b.frames[this.u],
            e = c.duration / this.Kf;
        this.Re && a >= this.Pd + e && (this.Qe ? this.u++ : this.u--, this.Pd += e, this.u >= b.frames.length && (b.Zd ? (this.Qe = !1, this.u = b.frames.length - 2) : b.loop ? this.u = this.xe : (this.Hd++, this.Hd >= b.wm ? this.Sk(!1) : this.u = this.xe)), 0 > this.u && (b.Zd ? (this.u = 1, this.Qe = !0, b.loop || (this.Hd++, this.Hd >= b.wm && this.Sk(!0))) : b.loop ? this.u = this.xe : (this.Hd++, this.Hd >= b.wm ? this.Sk(!0) : this.u = this.xe)), 0 > this.u ? this.u = 0 : this.u >= b.frames.length && (this.u = b.frames.length - 1), a > this.Pd + b.frames[this.u].duration / this.Kf && (this.Pd = a), a = b.frames[this.u], this.Cf(c, a), this.b.M = !0)
    };
    m.vo = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.jc.length; b < c; b++)
            if (e = this.type.jc[b], ob(e.name, a)) return e;
        return null
    };
    m.du = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.jc.length; b < c; b++)
            if (e = this.type.jc[b], e.T === a) return e;
        return null
    };
    m.ho = function() {
        var a = this.xa.frames[this.u],
            b = this.vo(this.Hf);
        this.Hf = "";
        !b || ob(b.name, this.xa.name) && this.Re || (this.xa = b, this.Kf = b.speed, this.xe = b.xm, 0 > this.u && (this.u = 0), this.u >= this.xa.frames.length && (this.u = this.xa.frames.length - 1), 1 === this.Yn && (this.u = 0), this.Re = !0, this.Pd = this.ld.K, this.Qe = !0, this.Cf(a, this.xa.frames[this.u]), this.b.M = !0)
    };
    m.io = function() {
        var a = this.xa.frames[this.u],
            b = this.u;
        this.u = ta(this.Mi);
        0 > this.u && (this.u = 0);
        this.u >= this.xa.frames.length && (this.u = this.xa.frames.length - 1);
        b !== this.u && (this.Cf(a, this.xa.frames[this.u]), this.Pd = this.ld.K, this.b.M = !0);
        this.Mi = -1
    };
    m.Cf = function(a, b) {
        var c = a.width,
            e = a.height,
            f = b.width,
            g = b.height;
        c != f && (this.width *= f / c);
        e != g && (this.height *= g / e);
        this.Yb = b.Yb;
        this.Zb = b.Zb;
        this.ea.bi(b.Yj);
        this.Ra();
        this.za = b;
        this.Ui = b.Na;
        c = 0;
        for (e = this.I.length; c < e; c++) f = this.I[c], f.lv && f.lv(a, b);
        this.b.trigger(L.prototype.e.Cf, this)
    };
    m.Yc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.za,
            c = b.Cg,
            e = b.ja,
            f = this.x,
            g = this.y,
            r = this.width,
            m = this.height;
        if (0 === this.k && 0 <= r && 0 <= m) f -= this.Yb * r, g -= this.Zb * m, this.b.bd && (f = Math.round(f), g = Math.round(g)), c ? a.drawImage(e, b.mg, b.ng, b.width, b.height, f, g, r, m) : a.drawImage(e, f, g, r, m);
        else {
            this.b.bd && (f = Math.round(f), g = Math.round(g));
            a.save();
            var p = 0 < r ? 1 : -1,
                q = 0 < m ? 1 : -1;
            a.translate(f, g);
            1 === p && 1 === q || a.scale(p, q);
            a.rotate(this.k * p * q);
            f = 0 - this.Yb * ma(r);
            g = 0 - this.Zb * ma(m);
            c ? a.drawImage(e, b.mg, b.ng, b.width, b.height, f, g, ma(r), ma(m)) : a.drawImage(e, f, g, ma(r), ma(m));
            a.restore()
        }
    };
    m.Mf = function(a) {
        this.lc(a)
    };
    m.lc = function(a) {
        a.Fc(this.Ui);
        a.zg(this.opacity);
        var b = this.za,
            c = this.Qb;
        if (this.b.bd) {
            var e = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Cg ? a.Le(c.Fa + e, c.Ga + f, c.qb + e, c.rb + f, c.cb + e, c.eb + f, c.ab + e, c.bb + f, b.Gm) : a.rm(c.Fa + e, c.Ga + f, c.qb + e, c.rb + f, c.cb + e, c.eb + f, c.ab + e, c.bb + f)
        } else b.Cg ? a.Le(c.Fa, c.Ga, c.qb, c.rb, c.cb, c.eb, c.ab, c.bb, b.Gm) : a.rm(c.Fa, c.Ga, c.qb, c.rb, c.cb, c.eb, c.ab, c.bb)
    };
    m.iu = function(a) {
        var b = this.za,
            c, e;
        c = 0;
        for (e = b.Bl.length; c < e; c++)
            if (ob(a, b.Bl[c][0])) return c;
        return -1
    };
    m.jh = function(a, b) {
        var c = this.za,
            e = c.Bl,
            f;
        la(a) ? f = this.iu(a) : f = a - 1;
        f = ta(f);
        if (0 > f || f >= e.length) return b ? this.x : this.y;
        var g = (e[f][1] - c.Yb) * this.width,
            e = e[f][2],
            e = (e - c.Zb) * this.height,
            c = Math.cos(this.k);
        f = Math.sin(this.k);
        var r = g * c - e * f,
            e = e * c + g * f,
            g = r + this.x,
            e = e + this.y;
        return b ? g : e
    };
    var p = null,
        e = new fa,
        a = !1,
        c = [],
        x = new wa(0, 0, 0, 0);
    q.finish = function(b) {
        if (a) {
            if (b) {
                var c = this.b.Ua().gb.Dc;
                b = p.S();
                var f = e.Oe(),
                    g, k;
                if (b.aa) {
                    b.aa = !1;
                    C(b.d);
                    g = 0;
                    for (k = f.length; g < k; ++g) b.d[g] = f[g];
                    if (c)
                        for (C(b.N), g = 0, k = p.d.length; g < k; ++g) f = p.d[g], e.contains(f) || b.N.push(f)
                } else if (c)
                    for (c = b.d.length, g = 0, k = f.length; g < k; ++g) b.d[c + g] = f[g], Ga(b.N, f[g]);
                else Da(b.d, f);
                p.Id()
            }
            e.clear();
            a = !1
        }
    };
    f.prototype.dr = function(b) {
        if (b) {
            var f = !1,
                g, n, k, l = this.b.ih(),
                r = l.type,
                l = l.Wf;
            g = b.S();
            n = this.b.Ua().gb.Dc;
            var m;
            g.aa ? (this.ra(), x.Jf(this.Oa), x.offset(0, 0), this.b.fu(this.j, b, x, c), m = c) : m = n ? this.b.Ku() && !g.N.length && g.d.length ? g.d : g.N : g.d;
            p = b;
            a = r !== b && !l;
            g = 0;
            for (n = m.length; g < n; g++)
                if (k = m[g], this.b.gw(this, k)) {
                    f = !0;
                    if (l) break;
                    r !== b && e.add(k)
                }
            C(c);
            b = f
        } else b = !1;
        return b
    };
    f.prototype.Vq = function(a) {
        return this.Hf.length ? ob(this.Hf, a) : ob(this.xa.name, a)
    };
    f.prototype.Jq = function(a, b) {
        return fc(this.u, a, b)
    };
    f.prototype.or = function(a) {
        return ob(this.Rn, a)
    };
    f.prototype.pr = function() {
        return !0
    };
    f.prototype.Cf = function() {
        return !0
    };
    r.e = new f;
    b.prototype.as = function(a, b) {
        this.Hf = a;
        this.Yn = b;
        this.Ah || (this.b.ii(this), this.Ah = !0);
        this.uj || this.ho()
    };
    b.prototype.bs = function(a) {
        this.Mi = a;
        this.Ah || (this.b.ii(this), this.Ah = !0);
        this.uj || this.io()
    };
    b.prototype.Cn = function(a) {
        var b = this.za,
            c = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.Ra()
    };
    r.m = new b;
    u.prototype.Tq = function(a, b) {
        a.n(this.jh(b, !0))
    };
    u.prototype.Uq = function(a, b) {
        a.n(this.jh(b, !1))
    };
    r.C = new u
})();

function rc(g) {
    this.b = g
}
(function() {
    function g(a, b) {
        return a.length ? a.pop() : new b
    }

    function f(a, b, c) {
        if (c) {
            var e;
            c = 0;
            for (e = b.length; c < e; c++) a.length < m && a.push(b[c]);
            b.length = 0
        } else
            for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (a.length < m && a.push(b[e]), delete b[e])
    }

    function b(a, b, c) {
        var e = a.Sb;
        c = c.replace(/\s\s*$/, "");
        b >= e.length && e.push(g(p, Object));
        b = e[b];
        b.text = c;
        b.width = a.Ul(c);
        a.fe = na(a.fe, b.width)
    }

    function u() {}

    function r() {}
    var q = rc.prototype;
    q.R = function() {};
    q.ya = function(a) {
        this.ka = a;
        this.b = a.b
    };
    var t = q.ya.prototype;
    t.R = function() {
        this.G || (this.ja = new Image, this.ja.idtkLoadDisposed = !0, this.ja.src = this.Mm, this.b.yf.push(this.ja), this.Na = null)
    };
    t.Pj = function() {
        this.G || (this.Na = null)
    };
    t.gm = function() {
        if (!this.G && this.d.length) {
            this.Na || (this.Na = this.b.D.Ql(this.ja, !1, this.b.Ea, this.Nm));
            var a, b;
            a = 0;
            for (b = this.d.length; a < b; a++) this.d[a].Na = this.Na
        }
    };
    t.Vm = function() {
        this.G || this.d.length || !this.Na || (this.b.D.deleteTexture(this.Na), this.Na = null)
    };
    t.om = function(a) {
        a.drawImage(this.ja, 0, 0)
    };
    q.qa = function(a) {
        this.type = a;
        this.b = a.b
    };
    t = q.qa.prototype;
    t.pg = function() {
        f(p, this.Sb, !0);
        f(e, this.Oi, !1);
        f(a, this.Pi, !1);
        Xa(this.Wc)
    };
    t.R = function() {
        this.ja = this.type.ja;
        this.Ni = this.r[0];
        this.te = this.r[1];
        this.characterSet = this.r[2];
        this.text = this.r[3];
        this.md = this.r[4];
        this.visible = 0 === this.r[5];
        this.ff = this.r[6] / 2;
        this.xf = this.r[7] / 2;
        this.qi = 0 === this.r[9];
        this.If = this.r[10];
        this.lineHeight = this.r[11];
        this.Cd = this.fe = 0;
        this.Wg = this.r[12];
        this.dq = this.r[13];
        console.log(this.Wg);
        this.uc ? (this.Sb.length = 0, Xa(this.Oi), Xa(this.Pi), Xa(this.Wc)) : (this.Sb = [], this.Oi = {}, this.Pi = {}, this.Wc = {});
        try {
            if (this.Wg)
                if (-1 !== this.Wg.indexOf('""c2array""'))
                    for (var a = jQuery.parseJSON(this.Wg.replace(/""/g, '"')), b = a.size[1], c = 0; c < b; c++)
                        for (var e = a.data[1][c][0], f = a.data[0][c][0], g = 0; g < e.length; g++) this.Wc[e.charAt(g)] = f;
                else
                    for (a = jQuery.parseJSON(this.Wg), b = a.length, c = 0; c < b; c++)
                        for (e = a[c][1], f = a[c][0], g = 0; g < e.length; g++) this.Wc[e.charAt(g)] = f; - 1 !== this.dq && (this.Wc[" "] = this.dq)
        } catch (r) {
            window.console && window.console.log && window.console.log("SpriteFont+ Failure: " +
                r)
        }
        this.Vb = !0;
        this.pf = this.width;
        this.b.D && (this.type.Na || (this.type.Na = this.b.D.Ql(this.type.ja, !1, this.b.Ea, this.type.Nm)), this.Na = this.type.Na);
        this.ts()
    };
    t.Tb = function() {
        var a = {
                t: this.text,
                csc: this.md,
                csp: this.If,
                lh: this.lineHeight,
                tw: this.fe,
                th: this.Cd,
                lrt: this.of,
                cw: {}
            },
            b;
        for (b in this.Wc) a.cw[b] = this.Wc[b];
        return a
    };
    t.qc = function(a) {
        this.text = a.t;
        this.md = a.csc;
        this.If = a.csp;
        this.lineHeight = a.lh;
        this.fe = a.tw;
        this.Cd = a.th;
        this.of = a.lrt;
        for (var b in a.cw) this.Wc[b] = a.cw[b];
        this.Vb = !0;
        this.pf = this.width
    };
    var m = 1E3,
        p = [],
        e = [],
        a = [];
    t.ts = function() {
        for (var b = this.ja, c = b.width, f = b.height, b = this.Ni, n = this.te, k = b / c, l = n / f, r = this.characterSet, c = Math.floor(c / b), f = Math.floor(f / n), m = 0; m < r.length && !(m >= c * f); m++) {
            var p = m % c,
                q = Math.floor(m / c),
                u = r.charAt(m);
            if (this.b.D) {
                var t = this.Pi,
                    x = p * k,
                    T = q * l,
                    p = (p + 1) * k,
                    q = (q + 1) * l;
                void 0 === t[u] && (t[u] = g(a, wa));
                t[u].left = x;
                t[u].top = T;
                t[u].right = p;
                t[u].bottom = q
            } else t = this.Oi, p = p * b, q = q * n, x = b, T = n, void 0 === t[u] && (t[u] = g(e, Object)), t[u].x = p, t[u].y = q, t[u].zq = x, t[u].Eo = T
        }
    };
    var c = [];
    q.Hk = function(a) {
        c.length = 0;
        for (var b = "", e, f = 0; f < a.length;)
            if (e = a.charAt(f), "\n" === e) b.length && (c.push(b), b = ""), c.push("\n"), ++f;
            else if (" " === e || "\t" === e || "-" === e) {
            do b += a.charAt(f), f++; while (f < a.length && (" " === a.charAt(f) || "\t" === a.charAt(f)));
            c.push(b);
            b = ""
        } else f < a.length && (b += e, f++);
        b.length && c.push(b)
    };
    q.Ik = function(a) {
        var b = a.text,
            c = a.Sb;
        if (b && b.length) {
            var e = a.width;
            if (2 >= e) f(p, c, !0);
            else {
                var k = a.md,
                    l = a.If;
                if (b.length * (a.Ni * k + l) - l <= e && -1 === b.indexOf("\n") && (l = a.Ul(b), l <= e)) {
                    f(p, c, !0);
                    c.push(g(p, Object));
                    c[0].text = b;
                    c[0].width = l;
                    a.fe = l;
                    a.Cd = a.te * k + a.lineHeight;
                    return
                }
                this.Jk(a);
                a.Cd = c.length * (a.te * k + a.lineHeight)
            }
        } else f(p, c, !0)
    };
    q.Jk = function(a) {
        var e = a.qi,
            f = a.text,
            g = a.Sb,
            k = a.width;
        e && (this.Hk(f), f = c);
        var l = "",
            r, q, u, t = 0,
            x = !1;
        for (u = 0; u < f.length; u++) "\n" === f[u] ? (!0 === x ? x = !1 : (b(a, t, l), t++), l = "") : (x = !1, r = l, l += f[u], q = a.Ul(l.replace(/\s\s*$/, "")), q > k && ("" === r ? (b(a, t, l), l = "", x = !0) : (b(a, t, r), l = f[u]), t++, e || " " !== l || (l = "")));
        l.replace(/\s\s*$/, "").length && (b(a, t, l), t++);
        for (u = t; u < g.length; u++) p.length < m && p.push(g[u]);
        g.length = t
    };
    t.Ul = function(a) {
        for (var b = this.If, c = a.length, e = 0, f = 0; f < c; f++) e += this.hh(a.charAt(f)) * this.md + b;
        return e - (0 < e ? b : 0)
    };
    t.hh = function(a) {
        var b = this.Wc;
        return void 0 !== b[a] ? b[a] : this.Ni
    };
    t.Kp = function() {
        if (this.Vb || this.width !== this.pf) this.Cd = this.fe = 0, this.type.ka.Ik(this), this.Vb = !1, this.pf = this.width
    };
    t.Yc = function(a) {
        var b = this.ja;
        if ("" !== this.text && null != b && (this.Kp(), !(this.height < this.te * this.md + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.bd && (b = b + .5 | 0, c = c + .5 | 0);
            a.save();
            a.translate(b, c);
            a.rotate(this.k);
            for (var b = this.ff, c = this.md, e = this.te * c, f = this.lineHeight, g = this.If, r = this.Sb, m, p = -(this.Yb * this.width), q = -(this.Zb * this.height), q = q + this.xf * na(0, this.height - this.Cd), u = 0; u < r.length; u++) {
                var t = r[u].text;
                m = b * na(0, this.width - r[u].width);
                m = p + m;
                for (var q = q + f, x = 0; x < t.length; x++) {
                    var T = t.charAt(x),
                        N = this.Oi[T];
                    if (m + this.hh(T) * c > this.width + 1E-5) break;
                    void 0 !== N && a.drawImage(this.ja, N.x, N.y, N.zq, N.Eo, Math.round(m), Math.round(q), N.zq * c, N.Eo * c);
                    m += this.hh(T) * c + g
                }
                q += e;
                if (q + e + f > this.height) break
            }
            a.restore()
        }
    };
    var x = new ya;
    t.lc = function(a) {
        a.Fc(this.Na);
        a.zg(this.opacity);
        if ("" !== this.text && (this.Kp(), !(this.height < this.te * this.md + this.lineHeight))) {
            this.ra();
            var b = this.Qb,
                c = 0,
                e = 0;
            this.b.bd && (c = (this.x + .5 | 0) - this.x, e = (this.y + .5 | 0) - this.y);
            var f = this.k,
                g = this.ff,
                r = this.xf,
                m = this.md,
                q = this.te * m,
                p = this.lineHeight,
                u = this.If,
                t = this.Sb,
                K = this.Cd,
                T, N;
            0 !== f && (T = Math.cos(f), N = Math.sin(f));
            for (var G, c = b.Fa + c, b = b.Ga + e, r = r * na(0, this.height -
                    K), K = 0; K < t.length; K++) {
                e = t[K].text;
                G = g * na(0, this.width - t[K].width);
                for (var r = r + p, F = 0; F < e.length; F++) {
                    var O = e.charAt(F),
                        w = this.Pi[O];
                    if (G + this.hh(O) * m > this.width + 1E-5) break;
                    if (void 0 !== w) {
                        var y = this.Ni * m,
                            A = this.te * m;
                        x.Fa = G;
                        x.Ga = r;
                        x.qb = G + y;
                        x.rb = r;
                        x.ab = G;
                        x.bb = r + A;
                        x.cb = G + y;
                        x.eb = r + A;
                        if (0 !== f) {
                            var y = x,
                                A = T,
                                J = N,
                                B = void 0,
                                B = y.Fa * A - y.Ga * J;
                            y.Ga = y.Ga * A + y.Fa * J;
                            y.Fa = B;
                            B = y.qb * A - y.rb * J;
                            y.rb = y.rb * A + y.qb * J;
                            y.qb = B;
                            B = y.ab * A - y.bb * J;
                            y.bb = y.bb * A + y.ab * J;
                            y.ab = B;
                            B = y.cb * A - y.eb * J;
                            y.eb = y.eb * A + y.cb * J;
                            y.cb = B
                        }
                        x.offset(c, b);
                        a.Le(x.Fa, x.Ga, x.qb, x.rb, x.cb, x.eb, x.ab, x.bb, w)
                    }
                    G += this.hh(O) * m + u
                }
                r += q;
                if (r + q + p > this.height) break
            }
        }
    };
    q.e = new function() {};
    u.prototype.Gk = function(a) {
        ka(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Vb = !0, this.b.M = !0)
    };
    u.prototype.bn = function(a) {
        ka(a) && (a = Math.round(1E10 * a) / 1E10);
        if (a = a.toString()) this.text += a, this.Vb = !0, this.b.M = !0
    };
    u.prototype.Cn = function(a) {
        a !== this.md && (this.md = a, this.Vb = !0, this.b.M = !0)
    };
    t.re = function(a, b) {
        var c = parseInt(b, 10);
        this.Wc[a] !== c && (this.Wc[a] = c, this.Vb = !0, this.b.M = !0)
    };
    q.m = new u;
    r.prototype.Text = function(a) {
        a.Fb(this.text)
    };
    q.C = new r
})();

function sc(g) {
    this.b = g
}
(function() {
    function g() {
        return p.length ? p.pop() : {}
    }

    function f(b) {
        var a, c;
        a = 0;
        for (c = b.length; a < c; a++) p.push(b[a]);
        C(b)
    }

    function b(b) {
        return b.length && " " === b.charAt(b.length - 1) ? b.substring(0, b.length - 1) : b
    }

    function u() {}

    function r() {}
    var q = sc.prototype;
    q.R = function() {
        q.m.En = function(b) {
            this.width !== b && (this.width = b, this.Vb = !0, this.Ra())
        }
    };
    q.ya = function(b) {
        this.ka = b;
        this.b = b.b
    };
    var t = q.ya.prototype;
    t.R = function() {};
    t.Pj = function() {
        if (!this.G) {
            var b, a, c;
            b = 0;
            for (a = this.d.length; b < a; b++) c = this.d[b], c.vd = null, c.rf = null, c.rc = null
        }
    };
    q.qa = function(b) {
        this.type = b;
        this.b = b.b;
        this.uc ? C(this.Sb) : this.Sb = [];
        this.Vb = !0
    };
    t = q.qa.prototype;
    t.R = function() {
        this.text = this.r[0];
        this.visible = 0 === this.r[1];
        this.font = this.r[2];
        this.color = this.r[3];
        this.ff = this.r[4];
        this.xf = this.r[5];
        this.qi = 0 === this.r[7];
        this.pf = this.Ej = this.width;
        this.Dj = this.height;
        this.Pl = this.r[8];
        this.gj = this.Pf = "";
        this.Cd = this.fe = this.Th = 0;
        this.qv();
        this.rc = this.rf = this.vd = null;
        this.gp = !1;
        this.of = this.b.Dd;
        this.uc ? this.ug.set(0, 0, 1, 1) : this.ug = new wa(0, 0, 1, 1);
        this.b.D && this.b.ii(this)
    };
    t.qv = function() {
        var b = this.font.split(" "),
            a;
        for (a = 0; a < b.length; a++)
            if ("pt" === b[a].substr(b[a].length - 2, 2)) {
                this.Th = parseInt(b[a].substr(0, b[a].length - 2));
                this.qm = Math.ceil(this.Th / 72 * 96) + 4;
                0 < a && (this.gj = b[a - 1]);
                this.Pf = b[a + 1];
                for (a += 2; a < b.length; a++) this.Pf += " " + b[a];
                break
            }
    };
    t.Tb = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.ff,
            va: this.xf,
            wr: this.qi,
            lho: this.Pl,
            fn: this.Pf,
            fs: this.gj,
            ps: this.Th,
            pxh: this.qm,
            tw: this.fe,
            th: this.Cd,
            lrt: this.of
        }
    };
    t.qc = function(b) {
        this.text = b.t;
        this.font = b.f;
        this.color = b.c;
        this.ff = b.ha;
        this.xf = b.va;
        this.qi = b.wr;
        this.Pl = b.lho;
        this.Pf = b.fn;
        this.gj = b.fs;
        this.Th = b.ps;
        this.qm = b.pxh;
        this.fe = b.tw;
        this.Cd = b.th;
        this.of = b.lrt;
        this.Vb = !0;
        this.pf = this.Ej = this.width;
        this.Dj = this.height
    };
    t.Gb = function() {
        if (this.b.D && this.rc && 300 <= this.b.Dd - this.of) {
            var b = this.j;
            this.ra();
            var a = this.Oa;
            if (a.right < b.na || a.bottom < b.pa || a.left > b.ua || a.top > b.ta) this.b.D.deleteTexture(this.rc), this.vd = this.rf = this.rc = null
        }
    };
    t.pg = function() {
        this.vd = this.rf = null;
        this.b.D && this.rc && this.b.D.deleteTexture(this.rc);
        this.rc = null
    };
    t.re = function() {
        this.font = this.gj + " " + this.Th.toString() + "pt " + this.Pf;
        this.Vb = !0;
        this.b.M = !0
    };
    t.Yc = function(b, a) {
        b.font = this.font;
        b.textBaseline = "top";
        b.fillStyle = this.color;
        b.globalAlpha = a ? 1 : this.opacity;
        var c = 1;
        a && (c = Math.abs(this.j.mc()), b.save(), b.scale(c, c));
        if (this.Vb || this.width !== this.pf) this.type.ka.Ik(this.text, this.Sb, b, this.width, this.qi), this.Vb = !1, this.pf = this.width;
        this.ra();
        var c = a ? 0 : this.Qb.Fa,
            f = a ? 0 : this.Qb.Ga;
        this.b.bd && (c = c + .5 | 0, f = f + .5 | 0);
        0 === this.k || a || (b.save(), b.translate(c, f), b.rotate(this.k), f = c = 0);
        var d = f + this.height,
            h = this.qm,
            h = h + this.Pl,
            g, n;
        1 === this.xf ? f += Math.max(this.height / 2 - this.Sb.length * h / 2, 0) : 2 === this.xf && (f += Math.max(this.height - this.Sb.length * h - 2, 0));
        for (n = 0; n < this.Sb.length && !(g = c, 1 === this.ff ? g = c + (this.width - this.Sb[n].width) / 2 : 2 === this.ff && (g = c + (this.width - this.Sb[n].width)), b.fillText(this.Sb[n].text, g, f), f += h, f >= d - h); n++);
        (0 !== this.k || a) && b.restore();
        this.of = this.b.Dd
    };
    t.lc = function(b) {
        if (!(1 > this.width || 1 > this.height)) {
            var a = this.Vb || this.gp;
            this.gp = !1;
            var c = this.j.mc(),
                f = this.j.ib(),
                d = this.ug,
                h = c * this.width,
                g = c * this.height,
                n = Math.ceil(h),
                k = Math.ceil(g),
                l = Math.abs(n),
                r = Math.abs(k),
                m = this.b.B / 2,
                q = this.b.A / 2;
            this.rf || (this.vd = document.createElement("canvas"), this.vd.width = l, this.vd.height = r, this.Ej = l, this.Dj = r, a = !0, this.rf = this.vd.getContext("2d"));
            if (l !== this.Ej || r !== this.Dj) this.vd.width = l, this.vd.height = r, this.rc && (b.deleteTexture(this.rc), this.rc = null), a = !0;
            a && (this.rf.clearRect(0, 0, l, r), this.Yc(this.rf, !0), this.rc || (this.rc = b.Ic(l, r, this.b.Ea, this.b.Sd)), b.yy(this.vd, this.rc, this.b.Sd));
            this.Ej = l;
            this.Dj = r;
            b.Fc(this.rc);
            b.zg(this.opacity);
            b.Ad();
            b.translate(-m, -q);
            b.Fd();
            var p = this.Qb,
                a = this.j.Da(p.Fa, p.Ga, !0, !0),
                l = this.j.Da(p.Fa, p.Ga, !1, !0),
                r = this.j.Da(p.qb, p.rb, !0, !0),
                m = this.j.Da(p.qb, p.rb, !1, !0),
                q = this.j.Da(p.cb, p.eb, !0, !0),
                u = this.j.Da(p.cb, p.eb, !1, !0),
                t = this.j.Da(p.ab, p.bb, !0, !0),
                p = this.j.Da(p.ab, p.bb, !1, !0);
            if (this.b.bd || 0 === this.k && 0 === f) var K = (a + .5 | 0) - a,
                T = (l + .5 | 0) -
                l,
                a = a + K,
                l = l + T,
                r = r + K,
                m = m + T,
                q = q + K,
                u = u + T,
                t = t + K,
                p = p + T;
            0 === this.k && 0 === f ? (r = a + n, m = l, q = r, u = l + k, t = a, p = u, d.right = 1, d.bottom = 1) : (d.right = h / n, d.bottom = g / k);
            b.Le(a, l, r, m, q, u, t, p, d);
            b.Ad();
            b.scale(c, c);
            b.ym(-this.j.ib());
            b.translate((this.j.na + this.j.ua) / -2, (this.j.pa + this.j.ta) / -2);
            b.Fd();
            this.of = this.b.Dd
        }
    };
    var m = [];
    q.Hk = function(b) {
        C(m);
        for (var a = "", c, f = 0; f < b.length;)
            if (c = b.charAt(f), "\n" === c) a.length && (m.push(a), a = ""), m.push("\n"), ++f;
            else if (" " === c || "\t" === c || "-" === c) {
            do a += b.charAt(f), f++; while (f < b.length && (" " === b.charAt(f) || "\t" === b.charAt(f)));
            m.push(a);
            a = ""
        } else f < b.length && (a += c, f++);
        a.length && m.push(a)
    };
    var p = [];
    q.Ik = function(b, a, c, r, d) {
        if (b && b.length)
            if (2 >= r) f(a);
            else {
                if (100 >= b.length && -1 === b.indexOf("\n")) {
                    var h = c.measureText(b).width;
                    if (h <= r) {
                        f(a);
                        a.push(g());
                        a[0].text = b;
                        a[0].width = h;
                        return
                    }
                }
                this.Jk(b, a, c, r, d)
            }
        else f(a)
    };
    q.Jk = function(e, a, c, f, d) {
        d && (this.Hk(e), e = m);
        var h = "",
            r, n, k, l = 0;
        for (k = 0; k < e.length; k++) "\n" === e[k] ? (l >= a.length && a.push(g()), h = b(h), n = a[l], n.text = h, n.width = c.measureText(h).width, l++, h = "") : (r = h, h += e[k], n = c.measureText(h).width, n >= f && (l >= a.length && a.push(g()), r = b(r), n = a[l], n.text = r, n.width = c.measureText(r).width, l++, h = e[k], d || " " !== h || (h = "")));
        h.length && (l >= a.length && a.push(g()), h = b(h), n = a[l], n.text = h, n.width = c.measureText(h).width, l++);
        for (k = l; k < a.length; k++) p.push(a[k]);
        a.length = l
    };
    q.e = new function() {};
    u.prototype.Gk = function(b) {
        ka(b) && 1E9 > b && (b = Math.round(1E10 * b) / 1E10);
        b = b.toString();
        this.text !== b && (this.text = b, this.Vb = !0, this.b.M = !0)
    };
    u.prototype.bn = function(b) {
        ka(b) && (b = Math.round(1E10 * b) / 1E10);
        if (b = b.toString()) this.text += b, this.Vb = !0, this.b.M = !0
    };
    q.m = new u;
    r.prototype.Text = function(b) {
        b.Fb(this.text)
    };
    q.C = new r
})();

function V(g) {
    this.b = g
}
(function() {
    function g(b) {
        p = b.x;
        e = b.y;
        a = b.z
    }

    function f(a, d, e, f) {
        var h;
        h = c.length ? c.pop() : new b;
        h.init(a, d, e, f);
        return h
    }

    function b() {
        this.ei = this.id = this.y = this.x = this.rk = this.qk = this.Ml = this.time = this.Km = 0;
        this.ki = this.wk = !1
    }

    function u() {}

    function r() {}
    var q = V.prototype;
    q.ya = function(a) {
        this.ka = a;
        this.b = a.b
    };
    q.ya.prototype.R = function() {};
    q.qa = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Wl = !1
    };
    var t = q.qa.prototype,
        m = {
            left: 0,
            top: 0
        };
    t.fh = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var p = 0,
        e = 0,
        a = 0,
        c = [];
    b.prototype.init = function(a, b, c, d) {
        var e = Ya();
        this.Km = this.Ml = this.time = e;
        this.qk = a;
        this.rk = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.ei = d;
        this.ki = this.wk = !1
    };
    b.prototype.update = function(a, b, c, d, e, f) {
        this.Ml = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f;
        !this.ki && 15 <= Ua(this.qk, this.rk, this.x, this.y) && (this.ki = !0)
    };
    b.prototype.$u = function(a, b) {
        !this.wk && 500 <= Ya() - this.Km && !this.ki && 15 > Ua(this.qk, this.rk, this.x, this.y) && (this.wk = !0, a.Ed = this.ei, a.Gg = this.id, a.Tf = b, a.b.trigger(V.prototype.e.Br, a), a.Kd = this.x, a.Ld = this.y, a.b.trigger(V.prototype.e.Cr, a), a.Tf = 0)
    };
    var x = -1E3,
        d = -1E3,
        h = -1E4;
    b.prototype.Zo = function(a, b) {
        if (!this.wk) {
            var c = Ya();
            333 >= c - this.Km && !this.ki && 15 > Ua(this.qk, this.rk, this.x, this.y) && (a.Ed = this.ei, a.Gg = this.id, a.Tf = b, 666 >= c - h && 25 > Ua(x, d, this.x, this.y) ? (a.b.trigger(V.prototype.e.ur, a), a.Kd = this.x, a.Ld = this.y, a.b.trigger(V.prototype.e.xr, a), d = x = -1E3, h = -1E4) : (a.b.trigger(V.prototype.e.xn, a), a.Kd = this.x, a.Ld = this.y, a.b.trigger(V.prototype.e.yn, a), x = this.x, d = this.y, h = c), a.Tf = 0)
        }
    };
    t.R = function() {
        this.Qu = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.Tf = this.Gg = this.Ed = this.Ld = this.Kd = this.Mn = this.Ln = this.Kn = this.Fs = this.Es = this.Ds = this.Vj = this.Uj = this.Tj = 0;
        this.qw = 0 !== this.r[0];
        var a = 0 < this.b.Rb ? document : this.b.canvas,
            b = document;
        this.b.Nb ? b = a = window.Canvas : this.b.Cc && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.rp(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.qp(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.Qj(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.Qj(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.rp(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.qp(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.Qj(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.Qj(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.tp(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.sp(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.hm(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.hm(a, !0)
        }, !1));
        if (this.Qu) {
            var d = function(a) {
                    a = a.reading;
                    c.Kn = a.accelerationX;
                    c.Ln = a.accelerationY;
                    c.Mn = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.Tj = a.yawDegrees;
                    c.Uj = a.pitchDegrees;
                    c.Vj = a.rollDegrees
                },
                f = Windows.Devices.Sensors.Accelerometer.getDefault();
            f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (f && f.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (f && f.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Tj = a.alpha || 0;
            c.Uj = a.beta || 0;
            c.Vj = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.Ds = a.accelerationIncludingGravity.x || 0, c.Es = a.accelerationIncludingGravity.y || 0, c.Fs = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.Kn = a.acceleration.x || 0, c.Ln = a.acceleration.y || 0, c.Mn = a.acceleration.z || 0)
        }, !1);
        this.qw && !this.b.Ba && (jQuery(document).mousemove(function(a) {
            c.em(a)
        }), jQuery(document).mousedown(function(a) {
            c.dm(a)
        }), jQuery(document).mouseup(function(a) {
            c.fm(a)
        }));
        !this.b.dg && this.b.nc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(g, null, {
            frequency: 40
        });
        this.b.hw(this)
    };
    t.qp = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.fh(a.pointerId),
                c = Ya();
            if (0 <= b) {
                var d = this.b.Ba ? m : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    t.rp = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && pb(a) && a.preventDefault();
            var b = this.b.Ba ? m : jQuery(this.b.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top;
            Ya();
            this.Ed = this.touches.length;
            this.Gg = a.pointerId;
            this.touches.push(f(c, b, a.pointerId, this.Ed));
            this.b.Ab = !0;
            this.b.trigger(V.prototype.e.sn, this);
            this.b.trigger(V.prototype.e.Fk, this);
            this.Kd = c;
            this.Ld = b;
            this.b.trigger(V.prototype.e.Ek, this);
            this.b.Ab = !1
        }
    };
    t.Qj = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && pb(a) && a.preventDefault();
            var d = this.fh(a.pointerId);
            this.Ed = 0 <= d ? this.touches[d].ei : -1;
            this.Gg = 0 <= d ? this.touches[d].id : -1;
            this.b.Ab = !0;
            this.b.trigger(V.prototype.e.rn, this);
            this.b.trigger(V.prototype.e.zn, this);
            0 <= d && (b || this.touches[d].Zo(this, d), 100 > c.length && c.push(this.touches[d]), this.touches.splice(d, 1));
            this.b.Ab = !1
        }
    };
    t.sp = function(a) {
        a.preventDefault && a.preventDefault();
        var b = Ya(),
            c, d, e, f;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (e = a.changedTouches[c], f = this.fh(e.identifier), 0 <= f) {
                var h = this.b.Ba ? m : jQuery(this.b.canvas).offset();
                f = this.touches[f];
                2 > b - f.time || f.update(b, e.pageX - h.left, e.pageY - h.top, 2 * (e.ny || e.Ay || e.dy || e.gy || 0), 2 * (e.oy || e.By || e.ey || e.hy || 0), e.Sx || e.zy || e.cy || e.fy || 0)
            }
    };
    t.tp = function(a) {
        a.preventDefault && pb(a) && a.preventDefault();
        var b = this.b.Ba ? m : jQuery(this.b.canvas).offset();
        Ya();
        this.b.Ab = !0;
        var c, d, e, h;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (e = a.changedTouches[c], h = this.fh(e.identifier), -1 === h) {
                h = e.pageX - b.left;
                var g = e.pageY - b.top;
                this.Ed = this.touches.length;
                this.Gg = e.identifier;
                this.touches.push(f(h, g, e.identifier, this.Ed));
                this.b.trigger(V.prototype.e.sn, this);
                this.b.trigger(V.prototype.e.Fk, this);
                this.Kd = h;
                this.Ld = g;
                this.b.trigger(V.prototype.e.Ek, this)
            }
        this.b.Ab = !1
    };
    t.hm = function(a, b) {
        a.preventDefault && pb(a) && a.preventDefault();
        this.b.Ab = !0;
        var d, e, f;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++) f = a.changedTouches[d], f = this.fh(f.identifier), 0 <= f && (this.Ed = this.touches[f].ei, this.Gg = this.touches[f].id, this.b.trigger(V.prototype.e.rn, this), this.b.trigger(V.prototype.e.zn, this), b || this.touches[f].Zo(this, f), 100 > c.length && c.push(this.touches[f]), this.touches.splice(f, 1));
        this.b.Ab = !1
    };
    t.re = function() {
        return this.b.nc && 0 === this.Tj && 0 !== a ? 90 * a : this.Tj
    };
    t.co = function() {
        return this.b.nc && 0 === this.Uj && 0 !== e ? 90 * e : this.Uj
    };
    t.ko = function() {
        return this.b.nc && 0 === this.Vj && 0 !== p ? 90 * p : this.Vj
    };
    t.dm = function(a) {
        this.tp({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Wl = !0
    };
    t.em = function(a) {
        this.Wl && this.sp({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    t.fm = function(a) {
        a.preventDefault && this.b.rj && !this.b.Sd && a.preventDefault();
        this.b.rj = !0;
        this.hm({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Wl = !1
    };
    t.Om = function() {
        var a, b, c, d = Ya();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Ml = d), c.$u(this, a)
    };
    u.prototype.Fk = function() {
        return !0
    };
    u.prototype.zn = function() {
        return !0
    };
    u.prototype.$q = function() {
        return this.touches.length
    };
    u.prototype.Ek = function(a) {
        return a ? this.b.Fg(a, this.Kd, this.Ld, !1) : !1
    };
    var v = [];
    u.prototype.hr = function(a) {
        if (!a) return !1;
        var b = a.S(),
            c = b.Ac(),
            d, e, f, h, g, r;
        f = 0;
        for (h = c.length; f < h; f++) {
            var m = c[f];
            m.ra();
            g = 0;
            for (r = this.touches.length; g < r; g++)
                if (e = this.touches[g], d = m.j.Pa(e.x, e.y, !0), e = m.j.Pa(e.x, e.y, !1), m.Kb(d, e)) {
                    v.push(m);
                    break
                }
        }
        return v.length ? (b.aa = !1, Da(b.d, v), a.Id(), C(v), !0) : !1
    };
    u.prototype.sn = function(a) {
        a = Math.floor(a);
        return a === this.Ed
    };
    u.prototype.rn = function(a) {
        a = Math.floor(a);
        return a === this.Ed
    };
    u.prototype.Br = function() {
        return !0
    };
    u.prototype.xn = function() {
        return !0
    };
    u.prototype.ur = function() {
        return !0
    };
    u.prototype.Cr = function(a) {
        return a ? this.b.Fg(a, this.Kd, this.Ld, !1) : !1
    };
    u.prototype.yn = function(a) {
        return a ? this.b.Fg(a, this.Kd, this.Ld, !1) : !1
    };
    u.prototype.xr = function(a) {
        return a ? this.b.Fg(a, this.Kd, this.Ld, !1) : !1
    };
    q.e = new u;
    r.prototype.Kk = function(a, b) {
        var c = this.Tf;
        if (0 > c || c >= this.touches.length) a.n(0);
        else {
            var d, e, f, h, g;
            ja(b) ? (d = this.b.rd(0), e = d.scale, f = d.Pb, h = d.ac, g = d.k, d.scale = 1, d.Pb = 1, d.ac = 1, d.k = 0, a.n(d.Pa(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.Pb = f, d.ac = h, d.k = g) : (d = ka(b) ? this.b.rd(b) : this.b.Sf(b)) ? a.n(d.Pa(this.touches[c].x, this.touches[c].y, !0)) : a.n(0)
        }
    };
    r.prototype.Lk = function(a, b) {
        var c = this.Tf;
        if (0 > c || c >= this.touches.length) a.n(0);
        else {
            var d, e, f, h, g;
            ja(b) ? (d = this.b.rd(0), e = d.scale, f = d.Pb, h = d.cc, g = d.k, d.scale = 1, d.Pb = 1, d.cc = 1, d.k = 0, a.n(d.Pa(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.Pb = f, d.cc = h, d.k = g) : (d = ka(b) ? this.b.rd(b) : this.b.Sf(b)) ? a.n(d.Pa(this.touches[c].x, this.touches[c].y, !1)) : a.n(0)
        }
    };
    q.C = new r
})();

function tc(g) {
    this.b = g
}
(function() {
    function g() {}

    function f() {}
    var b = tc.prototype;
    b.ya = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    b.ya.prototype.R = function() {};
    b.qa = function(b, f) {
        this.type = b;
        this.behavior = b.behavior;
        this.g = f;
        this.b = b.b
    };
    var u = b.qa.prototype;
    u.R = function() {
        this.Pk = 1 === this.r[0];
        this.Vp = !1;
        this.dh = this.r[1];
        this.pi = this.r[2];
        this.aj = this.r[3];
        this.bt = this.r[4];
        this.vc = this.Pk ? 0 : 3;
        this.uc ? this.Pc.reset() : this.Pc = new gb;
        this.He = this.g.opacity ? this.g.opacity : 1;
        this.Pk && (0 === this.dh ? (this.vc = 1, 0 === this.pi && (this.vc = 2)) : (this.g.opacity = 0, this.b.M = !0))
    };
    u.Tb = function() {
        return {
            fit: this.dh,
            wt: this.pi,
            fot: this.aj,
            s: this.vc,
            st: this.Pc.K,
            mo: this.He
        }
    };
    u.qc = function(b) {
        this.dh = b.fit;
        this.pi = b.wt;
        this.aj = b.fot;
        this.vc = b.s;
        this.Pc.reset();
        this.Pc.K = b.st;
        this.He = b.mo
    };
    u.Gb = function() {
        this.Pc.add(this.b.mj(this.g));
        0 === this.vc && (this.g.opacity = this.Pc.K / this.dh * this.He, this.b.M = !0, this.g.opacity >= this.He && (this.g.opacity = this.He, this.vc = 1, this.Pc.reset(), this.b.trigger(tc.prototype.e.yr, this.g)));
        1 === this.vc && this.Pc.K >= this.pi && (this.vc = 2, this.Pc.reset(), this.b.trigger(tc.prototype.e.Sr, this.g));
        2 === this.vc && 0 !== this.aj && (this.g.opacity = this.He - this.Pc.K / this.aj * this.He, this.b.M = !0, 0 > this.g.opacity && (this.g.opacity = 0, this.vc = 3, this.Pc.reset(), this.b.trigger(tc.prototype.e.Ar, this.g), 1 === this.bt && this.b.je(this.g)))
    };
    u.et = function() {
        this.vc = 0;
        this.Pc.reset();
        0 === this.dh ? (this.vc = 1, 0 === this.pi && (this.vc = 2)) : (this.g.opacity = 0, this.b.M = !0)
    };
    g.prototype.Ar = function() {
        return !0
    };
    g.prototype.yr = function() {
        return !0
    };
    g.prototype.Sr = function() {
        return !0
    };
    b.e = new g;
    f.prototype.vs = function() {
        this.Pk || this.Vp || (this.He = this.g.opacity ? this.g.opacity : 1, this.Vp = !0);
        3 === this.vc && this.et()
    };
    b.m = new f;
    b.C = new function() {}
})();
var uc = [],
    vc = [],
    wc = [],
    xc = [],
    yc = [],
    zc = [],
    Ac = [],
    Bc = [],
    Fc = [],
    Gc = [];

function Hc(g) {
    return result = (g /= 1) < 1 / 2.75 ? 7.5625 * g * g + 0 : g < 2 / 2.75 ? 1 * (7.5625 * (g -= 1.5 / 2.75) * g + .75) + 0 : g < 2.5 / 2.75 ? 1 * (7.5625 * (g -= 2.25 / 2.75) * g + .9375) + 0 : 1 * (7.5625 * (g -= 2.625 / 2.75) * g + .984375) + 0
}

function Ic(g, f) {
    return Math.round(g / f * 1E4)
}

function Jc(g, f, b, u, r) {
    var q = 0;
    switch (g) {
        case 0:
            q = 1 * f / b + 0;
            break;
        case 1:
            q = 1 * (f /= b) * f + 0;
            break;
        case 2:
            q = -1 * (f /= b) * (f - 2) + 0;
            break;
        case 3:
            q = 1 > (f /= b / 2) ? .5 * f * f + 0 : -.5 * (--f * (f - 2) - 1) + 0;
            break;
        case 4:
            q = 1 * (f /= b) * f * f + 0;
            break;
        case 5:
            q = 1 * ((f = f / b - 1) * f * f + 1) + 0;
            break;
        case 6:
            q = 1 > (f /= b / 2) ? .5 * f * f * f + 0 : .5 * ((f -= 2) * f * f + 2) + 0;
            break;
        case 7:
            q = 1 * (f /= b) * f * f * f + 0;
            break;
        case 8:
            q = -1 * ((f = f / b - 1) * f * f * f - 1) + 0;
            break;
        case 9:
            q = 1 > (f /= b / 2) ? .5 * f * f * f * f + 0 : -.5 * ((f -= 2) * f * f * f - 2) + 0;
            break;
        case 10:
            q = 1 * (f /= b) * f * f * f * f + 0;
            break;
        case 11:
            q = 1 * ((f = f / b - 1) * f * f * f * f + 1) + 0;
            break;
        case 12:
            q = 1 > (f /= b / 2) ? .5 * f * f * f * f * f + 0 : .5 * ((f -= 2) * f * f * f * f + 2) + 0;
            break;
        case 13:
            r.sc ? q = yc[Ic(f, b)] : q = -(Math.sqrt(1 - f * f) - 1);
            break;
        case 14:
            r.sc ? q = zc[Ic(f, b)] : q = Math.sqrt(1 - (f - 1) * (f - 1));
            break;
        case 15:
            q = r.sc ? Ac[Ic(f, b)] : 1 > (f /= b / 2) ? -.5 * (Math.sqrt(1 - f * f) - 1) + 0 : .5 * (Math.sqrt(1 - (f -= 2) * f) + 1) + 0;
            break;
        case 16:
            r.sc ? q = Bc[Ic(f, b)] : (r = r.gc, q = 1 * (f /= b) * f * ((r + 1) * f - r) + 0);
            break;
        case 17:
            r.sc ? q = Fc[Ic(f, b)] : (r = r.gc, q = 1 * ((f = f / b - 1) * f * ((r + 1) * f + r) + 1) + 0);
            break;
        case 18:
            r.sc ? q = Gc[Ic(f, b)] : (r = r.gc, q = 1 > (f /= b / 2) ? .5 * f * f * (((r *= 1.525) + 1) * f - r) + 0 : .5 * ((f -= 2) * f * (((r *= 1.525) + 1) * f + r) + 2) + 0);
            break;
        case 19:
            r.sc ? q = vc[Ic(f, b)] : (q = r.Df, g = r.Qh, f /= b, 0 == g && (g = .3 * b), 0 == q || q < Math.abs(1) ? (q = 1, r = g / 4) : r = g / (2 * Math.PI) * Math.asin(1 / q), q = -(q * Math.pow(2, 10 * --f) * Math.sin(2 * (f * b - r) * Math.PI / g)) + 0);
            break;
        case 20:
            r.sc ? q = wc[Ic(f, b)] : (q = r.Df, g = r.Qh, f /= b, 0 == g && (g = .3 * b), 0 == q || q < Math.abs(1) ? (q = 1, r = g / 4) : r = g / (2 * Math.PI) * Math.asin(1 / q), q = q * Math.pow(2, -10 * f) * Math.sin(2 * (f * b - r) * Math.PI / g) + 1);
            break;
        case 21:
            r.sc ? q = xc[Ic(f, b)] : (q = r.Df, g = r.Qh, f /= b / 2, 0 == g && (g = .3 * b * 1.5), 0 == q || q < Math.abs(1) ? (q = 1, r = g / 4) : r = g / (2 * Math.PI) * Math.asin(1 / q), q = 1 > f ? -.5 * q * Math.pow(2, 10 * --f) * Math.sin(2 * (f * b - r) * Math.PI / g) + 0 : q * Math.pow(2, -10 * --f) * Math.sin(2 * (f * b - r) * Math.PI / g) * .5 + 1);
            break;
        case 22:
            q = r.sc ? 1 - uc[Ic(b - f, b)] + 0 : 1 - Hc(b - f / b) + 0;
            break;
        case 23:
            q = r.sc ? uc[Ic(f, b)] : Hc(f / b);
            break;
        case 24:
            q = r.sc ? f < b / 2 ? .5 * (1 - uc[Ic(b - 2 * f, b)] + 0) + 0 : .5 * uc[Ic(2 * f - b, b)] + .5 : f < b / 2 ? .5 * (1 - Hc(b - 2 * f) + 0) + 0 : .5 * Hc((2 * f - b) / b) + .5;
            break;
        case 25:
            f = f / b / 2;
            q = 2 * f * f * (3 - 2 * f);
            break;
        case 26:
            f = (f / b + 1) / 2;
            q = 2 * f * f * (3 - 2 * f) - 1;
            break;
        case 27:
            f = f / b, q = f * f * (3 - 2 * f)
    }
    return u ? 1 - q : q
}
for (var Kc = 0, Lc = 0, Mc = 0, X = 0, Z = 0, Nc = 0; 1E4 >= Nc; Nc++) X = Nc / 1E4, Kc = (X /= 1) < 1 / 2.75 ? 7.5625 * X * X + 0 : X < 2 / 2.75 ? 1 * (7.5625 * (X -= 1.5 / 2.75) * X + .75) + 0 : X < 2.5 / 2.75 ? 1 * (7.5625 * (X -= 2.25 / 2.75) * X + .9375) + 0 : 1 * (7.5625 * (X -= 2.625 / 2.75) * X + .984375) + 0, uc[Nc] = Kc, X = Nc / 1E4, Mc = Lc = 0, X /= 1, 0 == Mc && (Mc = .3), 0 == Lc || Lc < Math.abs(1) ? (Lc = 1, Z = Mc / 4) : Z = Mc / (2 * Math.PI) * Math.asin(1 / Lc), Kc = -(Lc * Math.pow(2, 10 * --X) * Math.sin(2 * (1 * X - Z) * Math.PI / Mc)) + 0, vc[Nc] = Kc, X = Nc / 1E4, Mc = Lc = 0, X /= 1, 0 == Mc && (Mc = .3), 0 == Lc || Lc < Math.abs(1) ? (Lc = 1, Z = Mc / 4) : Z = Mc / (2 * Math.PI) * Math.asin(1 / Lc), Kc = Lc * Math.pow(2, -10 * X) * Math.sin(2 * (1 * X - Z) * Math.PI / Mc) + 1, wc[Nc] = Kc, X = Nc / 1E4, Mc = Lc = 0, X /= .5, 0 == Mc && (Mc = .3 * 1.5), 0 == Lc || Lc < Math.abs(1) ? (Lc = 1, Z = Mc / 4) : Z = Mc / (2 * Math.PI) * Math.asin(1 / Lc), Kc = 1 > X ? -.5 * Lc * Math.pow(2, 10 * --X) * Math.sin(2 * (1 * X - Z) * Math.PI / Mc) + 0 : Lc * Math.pow(2, -10 * --X) * Math.sin(2 * (1 * X - Z) * Math.PI / Mc) * .5 + 1, xc[Nc] = Kc, X = Nc / 1E4, yc[Nc] = -(Math.sqrt(1 - X * X) - 1), X = Nc / 1E4, zc[Nc] = Math.sqrt(1 - (X - 1) * (X - 1)), X = Nc / 1E4, Kc = 1 > (X /= .5) ? -.5 * (Math.sqrt(1 - X * X) - 1) + 0 : .5 * (Math.sqrt(1 - (X -= 2) * X) + 1) + 0, Ac[Nc] = Kc, X = Nc / 1E4, Z = 0, 0 == Z && (Z = 1.70158), Kc = 1 * (X /= 1) * X * ((Z + 1) * X - Z) + 0, Bc[Nc] = Kc, X = Nc / 1E4, Z = 0, 0 == Z && (Z = 1.70158), Kc = 1 * ((X = X / 1 - 1) * X * ((Z + 1) * X + Z) + 1) + 0, Fc[Nc] = Kc, X = Nc / 1E4, Z = 0, 0 == Z && (Z = 1.70158), Kc = 1 > (X /= .5) ? .5 * X * X * (((Z *= 1.525) + 1) * X - Z) + 0 : .5 * ((X -= 2) * X * (((Z *= 1.525) + 1) * X + Z) + 2) + 0, Gc[Nc] = Kc;

function Oc(g, f, b, u, r, q, t) {
    this.name = g;
    this.value = 0;
    this.yg(u);
    this.mk(r);
    this.Ze = b;
    this.Ha = f;
    this.duration = q;
    this.state = this.O = 0;
    this.Rj = this.Sj = this.Oj = this.qg = !1;
    this.Bb = this.Ca = 0;
    this.Mb = t;
    this.Zd = 1;
    this.gh = !1;
    this.xc = [];
    this.Vo = 1;
    for (g = 0; 28 > g; g++) this.xc[g] = {}, this.xc[g].Df = 0, this.xc[g].Qh = 0, this.xc[g].Eg = 0, this.xc[g].gc = 0, this.xc[g].sc = !0
}
Oc.prototype = {};
Oc.prototype.yg = function(g) {
    this.Y = parseFloat(g.split(",")[0]);
    this.Va = parseFloat(g.split(",")[1]);
    this.Bb = this.Ca = 0
};
Oc.prototype.mk = function(g) {
    this.X = parseFloat(g.split(",")[0]);
    this.Ma = parseFloat(g.split(",")[1]);
    isNaN(this.Ma) && (this.Ma = this.X)
};
Oc.prototype.Dk = function(g) {
    if (0 === this.state) return -1;
    1 === this.state && (this.O += g);
    2 === this.state && (this.O -= g);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.O += g * this.Zd;
    5 === this.state && (this.O += g * this.Zd);
    return 0 > this.O ? (this.O = 0, 4 === this.state ? this.Zd = 1 : 6 === this.state ? (this.Zd = 1, this.gh = !1) : this.state = 0, this.Rj = !0, 0) : this.O > this.duration ? (this.O = this.duration, 4 === this.state ? this.Zd = -1 : 6 === this.state ? (this.Zd = -1, this.gh = !0) : 5 === this.state ? this.O = 0 : this.state = 0, this.Oj = !0, 1) : this.gh ? Jc(this.Ze, this.duration - this.O, this.duration, this.gh, this.xc[this.Ze]) : Jc(this.Ze, this.O, this.duration, this.gh, this.xc[this.Ze])
};

function Qc(g) {
    this.b = g
}
(function() {
    var g = Qc.prototype;
    g.ya = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    g.ya.prototype.R = function() {};
    g.qa = function(b, f) {
        this.type = b;
        this.behavior = b.behavior;
        this.g = f;
        this.b = b.b
    };
    var f = g.qa.prototype;
    f.R = function() {
        this.tg = this.r[0];
        this.Ib = 1 == this.tg || 2 == this.tg || 3 == this.tg || 4 == this.tg;
        this.Ha = this.r[1];
        this.fl = this.r[2];
        this.target = this.r[3];
        this.sk = this.r[4];
        this.Ak = !1;
        1 === this.sk && (this.target = "relative(" + this.target + ")");
        this.duration = this.r[5];
        this.Mb = 1 === this.r[6];
        this.value = 0;
        this.q = {};
        this.Qn(this.Ha, this.fl, "current", this.target, this.duration, this.Mb);
        1 === this.r[0] && this.di(0);
        2 === this.r[0] && this.di(2);
        3 === this.r[0] && this.di(3);
        4 === this.r[0] && this.di(4)
    };
    f.xd = function(b, f) {
        void 0 === f && (f = "current");
        var g = f.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        f = f.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var q = this.value;
        if ("current" === f) switch (b) {
            case 0:
                g = this.g.x + "," + this.g.y;
                break;
            case 1:
                g = this.g.width + "," + this.g.height;
                break;
            case 2:
                g = this.g.width + "," + this.g.height;
                break;
            case 3:
                g = this.g.width +
                    "," + this.g.height;
                break;
            case 4:
                g = Ia(this.g.k) + "," + Ia(this.g.k);
                break;
            case 5:
                g = 100 * this.g.opacity + "," + 100 * this.g.opacity;
                break;
            case 6:
                g = q + "," + q;
                break;
            case 7:
                g = this.g.x + "," + this.g.y;
                break;
            case 8:
                g = this.g.x + "," + this.g.y;
                break;
            case 9:
                g = void 0 !== this.g.za ? this.g.width / this.g.za.width + "," + this.g.height / this.g.za.height : "1,1"
        }
        if ("relative" === f.substring(0, 8)) {
            var t = f.match(/\((.*?)\)/);
            if (t) var m = parseFloat(t[1].split(",")[0]),
                p = parseFloat(t[1].split(",")[1]);
            isNaN(m) && (m = 0);
            isNaN(p) && (p = 0);
            switch (b) {
                case 0:
                    g = this.g.x + m + "," + (this.g.y + p);
                    break;
                case 1:
                    g = this.g.width + m + "," + (this.g.height + p);
                    break;
                case 2:
                    g = this.g.width + m + "," + (this.g.height + p);
                    break;
                case 3:
                    g = this.g.width + m + "," + (this.g.height + p);
                    break;
                case 4:
                    g = Ia(this.g.k) + m + "," + (Ia(this.g.k) + p);
                    break;
                case 5:
                    g = 100 * this.g.opacity + m + "," + (100 * this.g.opacity + p);
                    break;
                case 6:
                    g = q + m + "," + q + m;
                    break;
                case 7:
                    g = this.g.x + m + "," + this.g.y;
                    break;
                case 8:
                    g = this.g.x + "," + (this.g.y + m);
                    break;
                case 9:
                    g = m + "," + p
            }
        }
        return g
    };
    f.Qn = function(b, f, g, q, t, m) {
        g = this.xd(b, g);
        q = this.xd(b, q);
        void 0 !== this.q["default"] && delete this.q["default"];
        this.q["default"] = new Oc("default", b, f, g, q, t, m);
        this.q["default"].ye = 0
    };
    f.Tb = function() {
        JSON.stringify(this.q["default"]);
        return {
            playmode: this.tg,
            active: this.Ib,
            tweened: this.Ha,
            easing: this.fl,
            target: this.target,
            targetmode: this.sk,
            useCurrent: this.Ak,
            duration: this.duration,
            enforce: this.Mb,
            value: this.value,
            tweenlist: JSON.stringify(this.q["default"])
        }
    };
    Oc.lr = function(b, f, g, q, t, m, p, e) {
        f = new Oc(f, g, q, t, m, p, e);
        for (var a in b) f[a] = b[a];
        return f
    };
    f.qc = function(b) {
        var f = JSON.parse(b.tweenlist),
            f = Oc.lr(f, f.name, f.Ha, f.Ze, f.Y + "," + f.Va, f.X + "," + f.Ma, f.duration, f.Mb);
        this.q["default"] = f;
        this.tg = b.playmode;
        this.Ib = b.active;
        this.fl = b.easing;
        this.target = b.target;
        this.sk = b.targetmode;
        this.Ak = b.useCurrent;
        this.duration = b.duration;
        this.Mb = b.enforce;
        this.value = b.value
    };
    f.Yv = function(b) {
        1 < b && (b = 1);
        0 > b && (b = 0);
        for (var f in this.q) {
            var g = this.q[f];
            g.Ca = 0;
            g.Bb = 0;
            g.state = 3;
            g.O = b * g.duration;
            var q = g.Dk(0);
            this.Xm(g, q)
        }
    };
    f.di = function(b) {
        for (var f in this.q) {
            var g = this.q[f];
            if (this.Ak) {
                var q = this.xd(g.Ha, "current"),
                    t = this.xd(g.Ha, this.target);
                g.yg(q);
                g.mk(t)
            }
            0 === b && (g.O = 1E-6, g.Ca = 0, g.Bb = 0, g.qg = !0, g.state = 1);
            1 === b && (g.state = g.Vo);
            if (2 === b || 4 === b) g.O = 1E-6, g.Ca = 0, g.Bb = 0, g.qg = !0, 2 == b && (g.state = 4), 4 == b && (g.state = 6);
            3 === b && (g.O = 1E-6, g.Ca = 0, g.Bb = 0, g.qg = !0, g.state = 5)
        }
    };
    f.ew = function(b) {
        for (var f in this.q) {
            var g = this.q[f];
            3 != g.state && 0 != g.state && (g.Vo = g.state);
            1 === b && (g.O = 0);
            2 === b && (g.O = g.duration);
            g.state = 3;
            var q = g.Dk(0);
            this.Xm(g, q)
        }
    };
    f.Iv = function(b) {
        for (var f in this.q) {
            var g = this.q[f];
            1 === b && (g.O = g.duration, g.Ca = 0, g.Bb = 0, g.Sj = !0);
            g.state = 2
        }
    };
    f.Xm = function(b, f) {
        if (0 === b.Ha) b.Mb ? (this.g.x = b.Y + (b.X - b.Y) * f, this.g.y = b.Va + (b.Ma - b.Va) * f) : (this.g.x += (b.X - b.Y) * f - b.Ca, this.g.y += (b.Ma - b.Va) * f - b.Bb, b.Ca = (b.X - b.Y) * f, b.Bb = (b.Ma - b.Va) * f);
        else if (1 === b.Ha) b.Mb ? (this.g.width = b.Y + (b.X - b.Y) * f, this.g.height = b.Va + (b.Ma - b.Va) * f) : (this.g.width += (b.X - b.Y) * f - b.Ca, this.g.height += (b.Ma - b.Va) * f - b.Bb, b.Ca = (b.X - b.Y) * f, b.Bb = (b.Ma - b.Va) * f);
        else if (2 === b.Ha) b.Mb ? this.g.width = b.Y + (b.X - b.Y) * f : (this.g.width += (b.X - b.Y) * f - b.Ca, b.Ca = (b.X - b.Y) * f);
        else if (3 === b.Ha) b.Mb ? this.g.height = b.Va + (b.Ma - b.Va) * f : (this.g.height += (b.Ma - b.Va) * f - b.Bb, b.Bb = (b.Ma - b.Va) * f);
        else if (4 === b.Ha)
            if (b.Mb) {
                var g = b.Y + (b.X - b.Y) * f;
                this.g.k = Ka(D(g))
            } else g = (b.X - b.Y) * f - b.Ca, this.g.k = Ka(this.g.k + D(g)), b.Ca = (b.X - b.Y) * f;
        else if (5 === b.Ha) b.Mb ? this.g.opacity = (b.Y + (b.X - b.Y) * f) / 100 : (this.g.opacity += ((b.X - b.Y) * f - b.Ca) / 100, b.Ca = (b.X - b.Y) * f);
        else if (6 === b.Ha) b.Mb ? this.value = b.Y + (b.X - b.Y) * f : (this.value += (b.X - b.Y) * f - b.Ca, b.Ca = (b.X - b.Y) * f);
        else if (7 === b.Ha) b.Mb ? this.g.x = b.Y + (b.X - b.Y) * f : (this.g.x += (b.X - b.Y) * f - b.Ca, b.Ca = (b.X - b.Y) * f);
        else if (8 === b.Ha) b.Mb ? this.g.y = b.Va + (b.Ma - b.Va) * f : (this.g.y += (b.Ma - b.Va) * f - b.Bb, b.Bb = (b.Ma - b.Va) * f);
        else if (9 === b.Ha) {
            var g = b.Y + (b.X - b.Y) * f,
                q = b.Va + (b.Ma - b.Va) * f;
            0 > this.g.width && (g = b.Y + (b.X + b.Y) * -f);
            0 > this.g.height && (q = b.Va + (b.Ma + b.Va) * -f);
            b.Mb ? (this.g.width = this.g.za.width * g, this.g.height = this.g.za.height * q) : (0 > this.g.width ? (this.g.width = this.g.width / (-1 + b.Ca) * g, b.Ca = g + 1) : (this.g.width = this.g.width / (1 + b.Ca) * g, b.Ca = g - 1), 0 > this.g.height ? (this.g.height = this.g.height / (-1 + b.Bb) * q, b.Bb = q + 1) : (this.g.height = this.g.height / (1 + b.Bb) * q, b.Bb = q - 1))
        }
        this.g.Ra()
    };
    f.Gb = function() {
        var b = this.b.mj(this.g),
            f = this.q["default"];
        0 !== f.state && (f.qg && (this.b.trigger(Qc.prototype.e.Qr, this.g), f.qg = !1), f.Sj && (this.b.trigger(Qc.prototype.e.Or, this.g), f.Sj = !1), this.Ib = 1 == f.state || 2 == f.state || 4 == f.state || 5 == f.state || 6 == f.state, b = f.Dk(b), this.Xm(f, b), f.Oj && (this.b.trigger(Qc.prototype.e.ln, this.g), f.Oj = !1), f.Rj && (this.b.trigger(Qc.prototype.e.Nr, this.g), f.Rj = !1))
    };
    g.e = {};
    f = g.e;
    f.Qw = function() {
        return 0 !== this.q["default"].state
    };
    f.Tw = function() {
        return 2 == this.q["default"].state
    };
    f.Lw = function(b, f) {
        var g = this.q["default"];
        return fc(g.O / g.duration, b, f)
    };
    f.ax = function(b, f) {
        var g = this.q["default"];
        this.hi = fc(g.O / g.duration, b, f);
        if (g = this.cm != this.hi && this.hi) this.cm = this.hi;
        return g
    };
    f.Qr = function() {
        return void 0 === this.q["default"] ? !1 : this.q["default"].qg
    };
    f.Or = function() {
        return void 0 === this.q["default"] ? !1 : this.q["default"].Sj
    };
    f.ln = function() {
        return void 0 === this.q["default"] ? !1 : this.q["default"].Oj
    };
    f.Nr = function() {
        return void 0 === this.q["default"] ? !1 : this.q["default"].Rj
    };
    g.m = {};
    f = g.m;
    f.us = function(b, f) {
        this.cm = this.hi = !1;
        this.Ak = 1 == f;
        this.di(b)
    };
    f.Fn = function(b) {
        this.ew(b)
    };
    f.lx = function(b) {
        this.cm = this.hi = !1;
        this.Iv(b)
    };
    f.jx = function(b) {
        this.Yv(b)
    };
    f.qx = function(b) {
        isNaN(b) || 0 > b || void 0 === this.q["default"] || (this.q["default"].duration = b)
    };
    f.wx = function(b) {
        void 0 !== this.q["default"] && (this.q["default"].Mb = 1 === b)
    };
    f.xx = function(b) {
        void 0 !== this.q["default"] && (b = this.xd(this.q["default"].Ha, b), this.q["default"].yg(b))
    };
    f.os = function(b, f, g) {
        if (void 0 !== this.q["default"] && !isNaN(g)) {
            var q = this.q["default"],
                t = g + "";
            this.sk = f;
            var m = "",
                p = "";
            if (1 === f) {
                this.target = "relative(" + t + ")";
                switch (b) {
                    case 0:
                        m = this.g.x + g;
                        p = q.Ma;
                        break;
                    case 1:
                        m = q.X;
                        p = this.g.y + g;
                        break;
                    case 2:
                        p = m = "" + Ia(this.g.k + D(g));
                        break;
                    case 3:
                        p = m = "" + 100 * this.g.opacity + g;
                        break;
                    case 4:
                        m = this.g.width + g;
                        p = q.Ma;
                        break;
                    case 5:
                        m = q.X;
                        p = this.g.height + g;
                        break;
                    case 6:
                        p = m = g
                }
                t = m + "," + p
            } else {
                switch (b) {
                    case 0:
                        m = g;
                        p = q.Ma;
                        break;
                    case 1:
                        m = q.X;
                        p = g;
                        break;
                    case 2:
                        p = m = g;
                        break;
                    case 3:
                        p = m = g;
                        break;
                    case 4:
                        m = g;
                        p = q.Ma;
                        break;
                    case 5:
                        m = q.X;
                        p = g;
                        break;
                    case 6:
                        p = m = g
                }
                this.target = t = m + "," + p
            }
            b = this.xd(this.q["default"].Ha, "current");
            t = this.xd(this.q["default"].Ha, t);
            q.yg(b);
            q.mk(t)
        }
    };
    f.Ax = function(b) {
        void 0 !== this.q["default"] && (this.q["default"].Ha = b)
    };
    f.rx = function(b) {
        void 0 !== this.q["default"] && (this.q["default"].Ze = b)
    };
    f.tx = function(b, f, g, q, t) {
        void 0 !== this.q["default"] && (this.q["default"].xc[b].sc = !1, this.q["default"].xc[b].Df = f, this.q["default"].xc[b].Qh = g, this.q["default"].xc[b].Eg = q, this.q["default"].xc[b].gc = t)
    };
    f.kx = function() {
        void 0 !== this.q["default"] && (this.q["default"].sc = !0)
    };
    f.Bx = function(b) {
        var f = this.q["default"];
        this.value = b;
        6 === f.Ha && f.yg(this.xd(f.Ha, "current"))
    };
    f.yx = function(b, f, g, q, t) {
        if (void 0 === this.q["default"]) this.Qn(b, f, initial, g, q, t);
        else {
            var m = this.q["default"];
            m.Ha = b;
            m.Ze = f;
            m.yg(this.xd(b, "current"));
            m.mk(this.xd(b, g));
            m.duration = q;
            m.Mb = 1 === t
        }
    };
    g.C = {};
    g = g.C;
    g.Dx = function(b) {
        var f = "N/A";
        switch (this.q["default"].state) {
            case 0:
                f = "paused";
                break;
            case 1:
                f = "playing";
                break;
            case 2:
                f = "reversing";
                break;
            case 3:
                f = "seeking"
        }
        b.Fb(f)
    };
    g.ix = function(b) {
        b.n(this.q["default"].O / this.q["default"].duration)
    };
    g.dn = function(b) {
        b.n(this.q["default"].duration)
    };
    g.Fx = function(b) {
        var f = this.q["default"],
            g = "N/A";
        switch (f.Ha) {
            case 0:
                g = f.X;
                break;
            case 1:
                g = f.Ma;
                break;
            case 2:
                g = f.X;
                break;
            case 3:
                g = f.X;
                break;
            case 4:
                g = f.X;
                break;
            case 5:
                g = f.Ma;
                break;
            case 6:
                g = f.X
        }
        b.n(g)
    };
    g.Ix = function(b) {
        b.n(this.value)
    };
    g.Hx = function(b, f, g, q, t) {
        q = 1 < q ? 1 : q;
        t = Jc(t, 0 > q ? 0 : q, 1, !1, !1);
        b.n(f + t * (g - f))
    }
})();

function hc() {
    return [rc, V, jc, kc, lc, pc, qc, ic, sc, L, tc, Qc, I.prototype.e.Zq, I.prototype.e.nn, I.prototype.m.rs, L.prototype.C.Gn, L.prototype.m.cn, ic.prototype.m.CallFunction, rc.prototype.m.Gk, L.prototype.m.Dn, rc.prototype.m.Dn, lc.prototype.m.Rs, I.prototype.e.Qq, L.prototype.e.br, I.prototype.e.Kq, I.prototype.m.Nq, L.prototype.C.Tq, L.prototype.C.Uq, V.prototype.e.Fk, L.prototype.e.hn, tc.prototype.m.vs, I.prototype.e.Pq, L.prototype.m.Bn, V.prototype.e.$q, L.prototype.m.An, I.prototype.C.vw, L.prototype.C.jn, I.prototype.C.ww, L.prototype.C.gn, I.prototype.C.sw, kc.prototype.e.vn, ic.prototype.e.vi, I.prototype.C.uw, rc.prototype.m.An, L.prototype.C.Kk, L.prototype.C.Lk, rc.prototype.m.Bn, rc.prototype.m.ss, rc.prototype.C.jn, rc.prototype.C.Gn, rc.prototype.C.gn, L.prototype.m.cs, jc.prototype.m.Play, I.prototype.C.cv, L.prototype.m.as, lc.prototype.m.Ss, V.prototype.e.xn, I.prototype.m.Bq, lc.prototype.m.Ts, I.prototype.m.zs, L.prototype.e.dr, I.prototype.e.en, L.prototype.e.Mg, L.prototype.m.bs, L.prototype.m.As, L.prototype.e.Jq, L.prototype.e.Vq, L.prototype.e.Xq, I.prototype.e.Oq, I.prototype.e.kr, I.prototype.e.Iq, L.prototype.C.Mq, I.prototype.C.Zn, Qc.prototype.m.os, Qc.prototype.m.us, jc.prototype.e.gr, jc.prototype.m.Fn, I.prototype.m.ws, L.prototype.m.Zr, L.prototype.m.$r, I.prototype.e.Wr, ic.prototype.C.Ur, I.prototype.C.Yu, L.prototype.e.Lq, I.prototype.e.xs, V.prototype.e.yn, sc.prototype.m.bn, L.prototype.m.gs, L.prototype.C.ys, L.prototype.e.Vr, sc.prototype.C.Text, Qc.prototype.e.ln, rc.prototype.e.hn, rc.prototype.m.cn, sc.prototype.m.Gk, Qc.prototype.C.dn, pc.prototype.m.hs, I.prototype.m.js, L.prototype.m.ks, V.prototype.e.Ek, I.prototype.m.Rq, I.prototype.m.Xr, I.prototype.m.Yr, kc.prototype.m.Sq, pc.prototype.m.Fq, pc.prototype.e.mn, pc.prototype.e.Er, pc.prototype.C.ir, qc.prototype.m.ds, L.prototype.m.ns, I.prototype.C.Aw, I.prototype.C.zw, jc.prototype.m.ms, jc.prototype.e.fr, jc.prototype.m.ls, kc.prototype.e.er, L.prototype.m.En, L.prototype.m.es, I.prototype.m.qs, V.prototype.e.hr, L.prototype.m.Cn, qc.prototype.e.cr]
};