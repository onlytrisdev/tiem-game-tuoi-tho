'use strict';
var ba, ea, fa, ga, ha, ia, ja, ka, ma, na, oa, pa, qa, ra, ta, ua, va, wa, xa, ya, za, Aa, Ca, A, Da, Ea, Fa, Ga, Ha, B, Ia, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ua, Va, Wa, Xa, Za, $a, ab, bb, cb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(h) {
    return h.__proto__
} : function(h) {
    return h.constructor.prototype
});
(function() {
    function h(a, c, b, d) {
        this.set(a, c, b, d)
    }

    function g() {
        this.nb = this.mb = this.pb = this.ob = this.Bb = this.Ab = this.Xa = this.Wa = 0
    }

    function e(a, c, b, d) {
        a < c ? b < d ? (w = a < b ? a : b, z = c > d ? c : d) : (w = a < d ? a : d, z = c > b ? c : b) : b < d ? (w = c < b ? c : b, z = a > d ? a : d) : (w = c < d ? c : d, z = a > b ? a : b)
    }

    function r() {
        this.items = this.ac = null;
        this.Oh = 0;
        P && (this.ac = new Set);
        this.Ug = [];
        this.ye = !0
    }

    function l(a) {
        F[G++] = a
    }

    function p() {
        this.X = this.Ng = this.y = this.fh = 0
    }

    function q(a) {
        this.Fg = [];
        this.xo = this.zo = this.Ao = this.yo = 0;
        this.pi(a)
    }

    function b(a, c) {
        this.ll = a;
        this.kl = c;
        this.cells = {}
    }

    function d(a, c) {
        this.ll = a;
        this.kl = c;
        this.cells = {}
    }

    function f(a, c, b) {
        var d;
        return v.length ? (d = v.pop(), d.Wl = a, d.x = c, d.y = b, d) : new ea(a, c, b)
    }

    function a(a, c, b) {
        this.Wl = a;
        this.x = c;
        this.y = b;
        this.jb = new fa
    }

    function c(a, c, b) {
        var d;
        return x.length ? (d = x.pop(), d.Wl = a, d.x = c, d.y = b, d) : new ga(a, c, b)
    }

    function k(a, c, b) {
        this.Wl = a;
        this.x = c;
        this.y = b;
        this.jb = [];
        this.jg = !0;
        this.Cd = new fa;
        this.ah = !1
    }

    function m(a, c) {
        return a.jd - c.jd
    }
    ha = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ia = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ba = function(a) {
        return a
    };
    ja = function(a) {
        return "undefined" === typeof a
    };
    ka = function(a) {
        return "number" === typeof a
    };
    ma = function(a) {
        return "string" === typeof a
    };
    na = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    oa = function(a) {
        --a;
        for (var c = 1; 32 > c; c <<= 1) a = a | a >> c;
        return a + 1
    };
    pa = function(a) {
        return 0 > a ? -a : a
    };
    qa = function(a, c) {
        return a > c ? a : c
    };
    ra = function(a, c) {
        return a < c ? a : c
    };
    ta = Math.PI;
    ua = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    va = function(a) {
        var c = a | 0;
        return c === a ? c : c + 1
    };
    wa = function(a, c, b, d, k, u, m, f) {
        var n, e, t, w;
        a < b ? (e = a, n = b) : (e = b, n = a);
        k < m ? (w = k, t = m) : (w = m, t = k);
        if (n < w || e > t) return !1;
        c < d ? (e = c, n = d) : (e = d, n = c);
        u < f ? (w = u, t = f) : (w = f, t = u);
        if (n < w || e > t) return !1;
        n = k - a + m - b;
        e = u - c + f - d;
        a = b - a;
        c = d - c;
        k = m - k;
        u = f - u;
        f = pa(c * k - u * a);
        return pa(k * e - u * n) > f ? !1 : pa(a * e - c * n) <= f
    };
    h.prototype.set = function(a, c, b, d) {
        this.left = a;
        this.top = c;
        this.right = b;
        this.bottom = d
    };
    h.prototype.kh = function(a) {
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
    h.prototype.offset = function(a, c) {
        this.left += a;
        this.top += c;
        this.right += a;
        this.bottom += c;
        return this
    };
    h.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    h.prototype.Ec = function(a, c) {
        return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
    };
    h.prototype.ph = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    xa = h;
    g.prototype.Ak = function(a) {
        this.Wa = a.left;
        this.Xa = a.top;
        this.Ab = a.right;
        this.Bb = a.top;
        this.ob = a.right;
        this.pb = a.bottom;
        this.mb = a.left;
        this.nb = a.bottom
    };
    g.prototype.er = function(a, c) {
        if (0 === c) this.Ak(a);
        else {
            var b = Math.sin(c),
                d = Math.cos(c),
                k = a.left * b,
                u = a.top * b,
                m = a.right * b,
                b = a.bottom * b,
                f = a.left * d,
                n = a.top * d,
                e = a.right * d,
                d = a.bottom * d;
            this.Wa = f - u;
            this.Xa = n + k;
            this.Ab = e - u;
            this.Bb = n + m;
            this.ob = e - b;
            this.pb = d + m;
            this.mb = f - b;
            this.nb = d +
                k
        }
    };
    g.prototype.offset = function(a, c) {
        this.Wa += a;
        this.Xa += c;
        this.Ab += a;
        this.Bb += c;
        this.ob += a;
        this.pb += c;
        this.mb += a;
        this.nb += c;
        return this
    };
    var w = 0,
        z = 0;
    g.prototype.Co = function(a) {
        e(this.Wa, this.Ab, this.ob, this.mb);
        a.left = w;
        a.right = z;
        e(this.Xa, this.Bb, this.pb, this.nb);
        a.top = w;
        a.bottom = z
    };
    g.prototype.Ec = function(a, c) {
        var b = this.Wa,
            d = this.Xa,
            k = this.Ab - b,
            u = this.Bb - d,
            m = this.ob - b,
            f = this.pb - d,
            n = a - b,
            e = c - d,
            t = k * k + u * u,
            w = k * m + u * f,
            u = k * n + u * e,
            g = m * m + f * f,
            h = m * n + f * e,
            z = 1 / (t * g - w * w),
            k = (g * u - w * h) * z,
            t = (t * h - w * u) * z;
        if (0 <= k && 0 < t && 1 > k + t) return !0;
        k = this.mb - b;
        u = this.nb - d;
        t = k * k + u * u;
        w = k * m + u * f;
        u = k * n + u * e;
        z = 1 / (t * g - w * w);
        k = (g * u - w * h) * z;
        t = (t * h - w * u) * z;
        return 0 <= k && 0 < t && 1 > k + t
    };
    g.prototype.eh = function(a, c) {
        if (c) switch (a) {
            case 0:
                return this.Wa;
            case 1:
                return this.Ab;
            case 2:
                return this.ob;
            case 3:
                return this.mb;
            case 4:
                return this.Wa;
            default:
                return this.Wa
        } else switch (a) {
            case 0:
                return this.Xa;
            case 1:
                return this.Bb;
            case 2:
                return this.pb;
            case 3:
                return this.nb;
            case 4:
                return this.Xa;
            default:
                return this.Xa
        }
    };
    ya = g;
    za = function(a, c) {
        for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b]);
        return a
    };
    Aa = function(a, c) {
        var b, d;
        c = ua(c);
        if (!(0 > c || c >= a.length)) {
            b = c;
            for (d = a.length - 1; b < d; b++) a[b] = a[b + 1];
            Ca(a, d)
        }
    };
    Ca = function(a, c) {
        a.length = c
    };
    A = function(a) {
        Ca(a, 0)
    };
    Da = function(a, c) {
        A(a);
        var b, d;
        b = 0;
        for (d = c.length; b < d; ++b) a[b] = c[b]
    };
    Ea = function(a, c) {
        a.push.apply(a, c)
    };
    Fa = function(a, c) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; ++b)
            if (a[b] === c) return b;
        return -1
    };
    Ga = function(a, c) {
        var b = Fa(a, c); - 1 !== b && Aa(a, b)
    };
    Ha = function(a, c, b) {
        return a < c ? c : a > b ? b : a
    };
    B = function(a) {
        return a / (180 / ta)
    };
    Ia = function(a) {
        return 180 / ta * a
    };
    La = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ma = function(a) {
        a %= 2 * ta;
        0 > a && (a += 2 * ta);
        return a
    };
    Na = function(a) {
        return La(Ia(a))
    };
    Oa = function(a) {
        return Ma(B(a))
    };
    Pa = function(a, c, b, d) {
        return Math.atan2(d - c, b - a)
    };
    Qa = function(a, c) {
        if (a === c) return 0;
        var b = Math.sin(a),
            d = Math.cos(a),
            k = Math.sin(c),
            u = Math.cos(c),
            b = b * k + d * u;
        return 1 <= b ? 0 : -1 >= b ? ta : Math.acos(b)
    };
    Ra = function(a, c, b) {
        var d = Math.sin(a),
            k = Math.cos(a),
            u = Math.sin(c),
            m = Math.cos(c);
        return Math.acos(d * u + k * m) > b ? 0 < k * u - d * m ? Ma(a + b) : Ma(a - b) : Ma(c)
    };
    Sa = function(a, c) {
        var b = Math.sin(a),
            d = Math.cos(a),
            k = Math.sin(c),
            u = Math.cos(c);
        return 0 >= d * k - b * u
    };
    Ua = function(a, c, b, d, k, u) {
        if (0 === b) return u ? a : c;
        var m = Math.sin(b);
        b = Math.cos(b);
        a -= d;
        c -= k;
        var f = a * m;
        a = a * b - c * m;
        c = c * b + f;
        return u ? a + d : c + k
    };
    Va = function(a, c, b, d) {
        a = b - a;
        c = d - c;
        return Math.sqrt(a * a + c * c)
    };
    Wa = function(a, c) {
        return !a !== !c
    };
    Xa = function(a) {
        for (var c in a)
            if (a.hasOwnProperty(c)) return !0;
        return !1
    };
    Za = function(a) {
        for (var c in a) a.hasOwnProperty(c) && delete a[c]
    };
    var O = +new Date;
    $a = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - O
    };
    var n = !1,
        t = n = !1,
        Y = !1;
    "undefined" !== typeof window && (n = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), n = !n && /safari/i.test(navigator.userAgent), t = /(iphone|ipod|ipad)/i.test(navigator.userAgent), Y = window.c2ejecta);
    var P = !n && !Y && !t && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    r.prototype.contains = function(a) {
        return this.Wd() ? !1 : P ? this.ac.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    r.prototype.add = function(a) {
        if (P) this.ac.has(a) || (this.ac.add(a), this.ye = !1);
        else {
            var c = a.toString(),
                b = this.items;
            b ? b.hasOwnProperty(c) || (b[c] = a, this.Oh++, this.ye = !1) : (this.items = {}, this.items[c] = a, this.Oh = 1, this.ye = !1)
        }
    };
    r.prototype.remove = function(a) {
        if (!this.Wd())
            if (P) this.ac.has(a) && (this.ac["delete"](a), this.ye = !1);
            else if (this.items) {
            a = a.toString();
            var c = this.items;
            c.hasOwnProperty(a) && (delete c[a], this.Oh--, this.ye = !1)
        }
    };
    r.prototype.clear = function() {
        this.Wd() || (P ? this.ac.clear() : (this.items = null, this.Oh = 0), A(this.Ug), this.ye = !0)
    };
    r.prototype.Wd = function() {
        return 0 === this.count()
    };
    r.prototype.count = function() {
        return P ? this.ac.size : this.Oh
    };
    var F = null,
        G = 0;
    r.prototype.Zx = function() {
        if (!this.ye) {
            if (P) A(this.Ug), F = this.Ug, G = 0, this.ac.forEach(l), F = null, G = 0;
            else {
                var a = this.Ug;
                A(a);
                var c, b = 0,
                    d = this.items;
                if (d)
                    for (c in d) d.hasOwnProperty(c) && (a[b++] = d[c])
            }
            this.ye = !0
        }
    };
    r.prototype.Ve = function() {
        this.Zx();
        return this.Ug
    };
    fa = r;
    new fa;
    ab = function(a, c) {
        P ? bb(a, c.ac) : cb(a, c.Ve())
    };
    bb = function(a, c) {
        var b, d, k, u;
        d = b = 0;
        for (k = a.length; b < k; ++b) u = a[b], c.has(u) || (a[d++] = u);
        Ca(a, d)
    };
    cb = function(a, c) {
        var b, d, k, u;
        d = b = 0;
        for (k = a.length; b < k; ++b) u = a[b], -1 === Fa(c, u) && (a[d++] = u);
        Ca(a, d)
    };
    p.prototype.add = function(a) {
        this.y = a - this.fh;
        this.Ng = this.X + this.y;
        this.fh = this.Ng - this.X - this.y;
        this.X = this.Ng
    };
    p.prototype.reset = function() {
        this.X = this.Ng = this.y = this.fh = 0
    };
    fb = p;
    gb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    q.prototype.pi = function(a) {
        this.Lq = a;
        this.pk = a.length / 2;
        this.Fg.length = a.length;
        this.gl = this.hl = -1;
        this.Fo = 0
    };
    q.prototype.Aw = function() {
        return !this.Lq.length
    };
    q.prototype.lb = function() {
        for (var a = this.Fg, c = a[0], b = c, d = a[1], k = d, u, m, f = 1, n = this.pk; f < n; ++f) m = 2 * f, u = a[m], m = a[m + 1], u < c && (c = u), u > b && (b = u), m < d && (d = m), m > k && (k = m);
        this.yo = c;
        this.zo = b;
        this.Ao = d;
        this.xo = k
    };
    q.prototype.Ak = function(a, c, b) {
        this.Fg.length = 8;
        this.pk = 4;
        var d = this.Fg;
        d[0] = a.left - c;
        d[1] = a.top - b;
        d[2] = a.right - c;
        d[3] = a.top - b;
        d[4] = a.right - c;
        d[5] = a.bottom - b;
        d[6] = a.left - c;
        d[7] = a.bottom - b;
        this.hl = a.right - a.left;
        this.gl = a.bottom - a.top;
        this.lb()
    };
    q.prototype.du = function(a, c, b) {
        if (this.hl !== a || this.gl !== c || this.Fo !== b) {
            this.hl = a;
            this.gl = c;
            this.Fo = b;
            var d, k, u, m, f, n = 0,
                e = 1,
                t = this.Lq,
                w = this.Fg;
            0 !== b && (n = Math.sin(b), e = Math.cos(b));
            b = 0;
            for (u = this.pk; b < u; b++) d = 2 * b, k = d + 1, m = t[d] * a, f = t[k] * c, w[d] = m * e - f * n, w[k] = f * e + m * n;
            this.lb()
        }
    };
    q.prototype.Ec = function(a, c) {
        var b = this.Fg;
        if (a === b[0] && c === b[1]) return !0;
        var d, k, u, m = this.pk,
            f = this.yo - 110,
            n = this.Ao - 101,
            e = this.zo + 131,
            t = this.xo + 120,
            w, g, h = 0,
            z = 0;
        for (d = 0; d < m; d++) k = 2 * d, u = (d + 1) % m * 2, w = b[k], k = b[k + 1], g = b[u], u = b[u + 1], wa(f, n, a, c, w, k, g, u) && h++, wa(e, t, a, c, w, k, g, u) && z++;
        return 1 === h % 2 || 1 === z % 2
    };
    hb = q;
    b.prototype.He = function(a, c, b) {
        var d;
        d = this.cells[a];
        return d ? (d = d[c]) ? d : b ? (d = f(this, a, c), this.cells[a][c] = d) : null : b ? (d = f(this, a, c), this.cells[a] = {}, this.cells[a][c] = d) : null
    };
    b.prototype.Tb = function(a) {
        return ua(a / this.ll)
    };
    b.prototype.Ub = function(a) {
        return ua(a / this.kl)
    };
    b.prototype.update = function(a, c, b) {
        var d, k, u, m, f;
        if (c)
            for (d = c.left, k = c.right; d <= k; ++d)
                for (u = c.top, m = c.bottom; u <= m; ++u)
                    if (!b || !b.Ec(d, u))
                        if (f = this.He(d, u, !1)) f.remove(a), f.Wd() && (f.jb.clear(), 1E3 > v.length && v.push(f), this.cells[d][u] = null);
        if (b)
            for (d = b.left, k = b.right; d <= k; ++d)
                for (u = b.top, m = b.bottom; u <= m; ++u) c && c.Ec(d, u) || this.He(d, u, !0).cm(a)
    };
    b.prototype.Nq = function(a, c) {
        var b, d, k, u, m, f;
        b = this.Tb(a.left);
        k = this.Ub(a.top);
        d = this.Tb(a.right);
        for (m = this.Ub(a.bottom); b <= d; ++b)
            for (u = k; u <= m; ++u)(f = this.He(b, u, !1)) && f.dump(c)
    };
    ib = b;
    d.prototype.He = function(a, b, d) {
        var k;
        k = this.cells[a];
        return k ? (k = k[b]) ? k : d ? (k = c(this, a, b), this.cells[a][b] = k) : null : d ? (k = c(this, a, b), this.cells[a] = {}, this.cells[a][b] = k) : null
    };
    d.prototype.Tb = function(a) {
        return ua(a / this.ll)
    };
    d.prototype.Ub = function(a) {
        return ua(a / this.kl)
    };
    d.prototype.update = function(a, c, b) {
        var d, k, u, m, f;
        if (c)
            for (d = c.left, k = c.right; d <= k; ++d)
                for (u = c.top, m = c.bottom; u <= m; ++u)
                    if (!b || !b.Ec(d, u))
                        if (f = this.He(d, u, !1)) f.remove(a), f.Wd() && (f.reset(), 1E3 > x.length && x.push(f), this.cells[d][u] = null);
        if (b)
            for (d = b.left, k = b.right; d <= k; ++d)
                for (u = b.top, m = b.bottom; u <= m; ++u) c && c.Ec(d, u) || this.He(d, u, !0).cm(a)
    };
    d.prototype.Nq = function(a, c, b, d, k) {
        var u, m;
        a = this.Tb(a);
        c = this.Ub(c);
        b = this.Tb(b);
        for (u = this.Ub(d); a <= b; ++a)
            for (d = c; d <= u; ++d)(m = this.He(a, d, !1)) && m.dump(k)
    };
    d.prototype.Jw = function(a) {
        var c, b, d, k, u;
        c = a.left;
        d = a.top;
        b = a.right;
        for (k = a.bottom; c <= b; ++c)
            for (a = d; a <= k; ++a)
                if (u = this.He(c, a, !1)) u.jg = !1
    };
    jb = d;
    var v = [];
    a.prototype.Wd = function() {
        return this.jb.Wd()
    };
    a.prototype.cm = function(a) {
        this.jb.add(a)
    };
    a.prototype.remove = function(a) {
        this.jb.remove(a)
    };
    a.prototype.dump = function(a) {
        Ea(a, this.jb.Ve())
    };
    ea = a;
    var x = [];
    k.prototype.Wd = function() {
        if (!this.jb.length) return !0;
        if (this.jb.length > this.Cd.count()) return !1;
        this.Hl();
        return !0
    };
    k.prototype.cm = function(a) {
        this.Cd.contains(a) ? (this.Cd.remove(a), this.Cd.Wd() && (this.ah = !1)) : this.jb.length ? (this.jb[this.jb.length - 1].vd() > a.vd() && (this.jg = !1), this.jb.push(a)) : (this.jb.push(a), this.jg = !0)
    };
    k.prototype.remove = function(a) {
        this.Cd.add(a);
        this.ah = !0;
        30 <= this.Cd.count() && this.Hl()
    };
    k.prototype.Hl = function() {
        this.ah && (this.Cd.count() === this.jb.length ? this.reset() : (ab(this.jb, this.Cd), this.Cd.clear(), this.ah = !1))
    };
    k.prototype.Tu = function() {
        this.jg || (this.jb.sort(m), this.jg = !0)
    };
    k.prototype.reset = function() {
        A(this.jb);
        this.jg = !0;
        this.Cd.clear();
        this.ah = !1
    };
    k.prototype.dump = function(a) {
        this.Hl();
        this.Tu();
        this.jb.length && a.push(this.jb)
    };
    ga = k;
    var D = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : D[a - 1]
    };
    lb = function(a, c, b) {
        if (b) switch (a.Kb = b.ONE, a.Gb = b.ONE_MINUS_SRC_ALPHA, c) {
            case 1:
                a.Kb = b.ONE;
                a.Gb = b.ONE;
                break;
            case 3:
                a.Kb = b.ONE;
                a.Gb = b.ZERO;
                break;
            case 4:
                a.Kb = b.ONE_MINUS_DST_ALPHA;
                a.Gb = b.ONE;
                break;
            case 5:
                a.Kb = b.DST_ALPHA;
                a.Gb = b.ZERO;
                break;
            case 6:
                a.Kb = b.ZERO;
                a.Gb = b.SRC_ALPHA;
                break;
            case 7:
                a.Kb = b.ONE_MINUS_DST_ALPHA;
                a.Gb = b.ZERO;
                break;
            case 8:
                a.Kb = b.ZERO;
                a.Gb = b.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.Kb = b.DST_ALPHA;
                a.Gb = b.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.Kb = b.ONE_MINUS_DST_ALPHA, a.Gb = b.SRC_ALPHA
        }
    };
    mb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    nb = function(a, c) {
        return "string" !== typeof a || "string" !== typeof c || a.length !== c.length ? !1 : a === c ? !0 : a.toLowerCase() === c.toLowerCase()
    };
    ob = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || nb(a.tagName, "canvas") ? !0 : !1
    }
})();
var lc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function mc(h) {
    var g = new lc(3);
    h && (g[0] = h[0], g[1] = h[1], g[2] = h[2]);
    return g
}

function nc(h) {
    var g = new lc(16);
    h && (g[0] = h[0], g[1] = h[1], g[2] = h[2], g[3] = h[3], g[4] = h[4], g[5] = h[5], g[6] = h[6], g[7] = h[7], g[8] = h[8], g[9] = h[9], g[10] = h[10], g[11] = h[11], g[12] = h[12], g[13] = h[13], g[14] = h[14], g[15] = h[15]);
    return g
}

function oc(h, g) {
    g[0] = h[0];
    g[1] = h[1];
    g[2] = h[2];
    g[3] = h[3];
    g[4] = h[4];
    g[5] = h[5];
    g[6] = h[6];
    g[7] = h[7];
    g[8] = h[8];
    g[9] = h[9];
    g[10] = h[10];
    g[11] = h[11];
    g[12] = h[12];
    g[13] = h[13];
    g[14] = h[14];
    g[15] = h[15]
}

function pc(h, g) {
    var e = g[0],
        r = g[1];
    g = g[2];
    h[0] *= e;
    h[1] *= e;
    h[2] *= e;
    h[3] *= e;
    h[4] *= r;
    h[5] *= r;
    h[6] *= r;
    h[7] *= r;
    h[8] *= g;
    h[9] *= g;
    h[10] *= g;
    h[11] *= g
}

function qc(h, g, e, r) {
    r || (r = nc());
    var l, p, q, b, d, f, a, c, k = h[0],
        m = h[1];
    h = h[2];
    p = e[0];
    q = e[1];
    l = e[2];
    e = g[1];
    f = g[2];
    k === g[0] && m === e && h === f ? (h = r, h[0] = 1, h[1] = 0, h[2] = 0, h[3] = 0, h[4] = 0, h[5] = 1, h[6] = 0, h[7] = 0, h[8] = 0, h[9] = 0, h[10] = 1, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0, h[15] = 1) : (e = k - g[0], f = m - g[1], a = h - g[2], c = 1 / Math.sqrt(e * e + f * f + a * a), e *= c, f *= c, a *= c, g = q * a - l * f, l = l * e - p * a, p = p * f - q * e, (c = Math.sqrt(g * g + l * l + p * p)) ? (c = 1 / c, g *= c, l *= c, p *= c) : p = l = g = 0, q = f * p - a * l, b = a * g - e * p, d = e * l - f * g, (c = Math.sqrt(q * q + b * b + d * d)) ? (c = 1 / c, q *= c, b *= c, d *= c) : d = b = q = 0, r[0] = g, r[1] = q, r[2] = e, r[3] = 0, r[4] = l, r[5] = b, r[6] = f, r[7] = 0, r[8] = p, r[9] = d, r[10] = a, r[11] = 0, r[12] = -(g * k + l * m + p * h), r[13] = -(q * k + b * m + d * h), r[14] = -(e * k + f * m + a * h), r[15] = 1)
}
(function() {
    function h(b, d, f) {
        this.Le = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.ua = !!f;
        this.Cj = this.Fh = !1;
        this.rl = 0;
        this.Vk = 1;
        this.Fn = 1E3;
        this.fy = (this.Fn - this.Vk) / 32768;
        this.il = mc([0, 0, 100]);
        this.Op = mc([0, 0, 0]);
        this.Ar = mc([0, 1, 0]);
        this.Ii = mc([1, 1, 1]);
        this.To = !0;
        this.Vj = nc();
        this.zc = nc();
        this.qm = nc();
        this.ql = nc();
        this.q = b;
        this.version = 0 === this.q.getParameter(this.q.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.sp()
    }

    function g(b, d, f) {
        this.q = b;
        this.qi = d;
        this.name = f;
        this.Nc = b.getAttribLocation(d, "aPos");
        this.Pe = b.getAttribLocation(d, "aTex");
        this.Mp = b.getUniformLocation(d, "matP");
        this.Rj = b.getUniformLocation(d, "matMV");
        this.sg = b.getUniformLocation(d, "opacity");
        this.wm = b.getUniformLocation(d, "colorFill");
        this.Np = b.getUniformLocation(d, "samplerFront");
        this.Vh = b.getUniformLocation(d, "samplerBack");
        this.Cf = b.getUniformLocation(d, "destStart");
        this.Bf = b.getUniformLocation(d, "destEnd");
        this.Xh = b.getUniformLocation(d, "seconds");
        this.ym = b.getUniformLocation(d, "pixelWidth");
        this.xm = b.getUniformLocation(d, "pixelHeight");
        this.Uh = b.getUniformLocation(d, "layerScale");
        this.Th = b.getUniformLocation(d, "layerAngle");
        this.Yh = b.getUniformLocation(d, "viewOrigin");
        this.Wh = b.getUniformLocation(d, "scrollPos");
        this.kw = !!(this.ym || this.xm || this.Xh || this.Vh || this.Cf || this.Bf || this.Uh || this.Th || this.Yh || this.Wh);
        this.Wp = this.Xp = -999;
        this.Uj = 1;
        this.Sp = this.Rp = 0;
        this.Up = this.Qp = this.Pp = 1;
        this.$p = this.Zp = this.Yp = this.bq = this.aq = this.Tp = 0;
        this.pm = [];
        this.Vp = nc();
        this.sg && b.uniform1f(this.sg, 1);
        this.wm && b.uniform4f(this.wm, 1, 1, 1, 1);
        this.Np && b.uniform1i(this.Np, 0);
        this.Vh && b.uniform1i(this.Vh, 1);
        this.Cf && b.uniform2f(this.Cf, 0, 0);
        this.Bf && b.uniform2f(this.Bf, 1, 1);
        this.Uh && b.uniform1f(this.Uh, 1);
        this.Th && b.uniform1f(this.Th, 0);
        this.Yh && b.uniform2f(this.Yh, 0, 0);
        this.Wh && b.uniform2f(this.Wh, 0, 0);
        this.Xh && b.uniform1f(this.Xh, 0);
        this.rf = !1
    }

    function e(b, d) {
        return b[0] === d[0] && b[1] === d[1] && b[2] === d[2] && b[3] === d[3] && b[4] === d[4] && b[5] === d[5] && b[6] === d[6] && b[7] === d[7] && b[8] === d[8] && b[9] === d[9] && b[10] === d[10] && b[11] === d[11] && b[12] === d[12] && b[13] === d[13] && b[14] === d[14] && b[15] === d[15]
    }

    function r(b, d) {
        this.type = b;
        this.m = d;
        this.q = d.q;
        this.wd = this.Rb = this.yq = 0;
        this.O = this.Tc = null;
        this.fr = []
    }
    var l = nc();
    h.prototype.sp = function() {
        var b = this.q,
            d;
        this.Gp = 1;
        this.wf = this.vf = null;
        this.cj = 1;
        b.clearColor(0, 0, 0, 0);
        b.clear(b.COLOR_BUFFER_BIT);
        b.enable(b.BLEND);
        b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
        b.disable(b.CULL_FACE);
        b.disable(b.STENCIL_TEST);
        b.disable(b.DITHER);
        this.ua ? (b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL)) : b.disable(b.DEPTH_TEST);
        this.Hp = b.ONE;
        this.Fp = b.ONE_MINUS_SRC_ALPHA;
        this.Tk = new Float32Array(8E3 * (this.ua ? 3 : 2));
        this.Hk = new Float32Array(16E3);
        this.Iq = new Float32Array(32E3);
        this.Qm = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, this.Qm);
        b.bufferData(b.ARRAY_BUFFER, this.Iq.byteLength, b.DYNAMIC_DRAW);
        this.Hi = Array(4);
        this.xi = Array(4);
        for (d = 0; 4 > d; d++) this.Hi[d] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Hi[d]), b.bufferData(b.ARRAY_BUFFER, this.Tk.byteLength, b.DYNAMIC_DRAW), this.xi[d] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.xi[d]), b.bufferData(b.ARRAY_BUFFER, this.Hk.byteLength, b.DYNAMIC_DRAW);
        this.Pd = 0;
        this.ow = b.createBuffer();
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.ow);
        for (var f = new Uint16Array(12E3), a = d = 0; 12E3 > d;) f[d++] = a, f[d++] = a + 1, f[d++] = a + 2, f[d++] = a, f[d++] = a + 2, f[d++] = a + 3, a += 4;
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
        this.Rm = this.Og = this.ne = 0;
        this.Ja = [];
        d = this.ua ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        f = this.mh({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, d, "<default>");
        this.Ja.push(f);
        f = this.mh({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Ja.push(f);
        f = this.mh({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, d, "<earlyz>");
        this.Ja.push(f);
        f = this.mh({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        }, d, "<fill>");
        this.Ja.push(f);
        for (var c in rc) rc.hasOwnProperty(c) && this.Ja.push(this.mh(rc[c], d, c));
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, null);
        this.xe = [];
        this.Od = 0;
        this.Ib = !1;
        this.No = this.Qh = -1;
        this.Vf = null;
        this.Fl = b.createFramebuffer();
        this.gj = this.rk = null;
        this.wo = !1;
        this.ua && (this.gj = b.createRenderbuffer());
        this.Ue = mc([0, 0, 0]);
        this.cq = b.getParameter(b.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.cq && (this.cq = 2048);
        this.cc(0)
    };
    g.prototype.zn = function(b) {
        e(this.Vp, b) || (oc(b, this.Vp), this.q.uniformMatrix4fv(this.Rj, !1, b))
    };
    h.prototype.mh = function(b, d, f) {
        var a = this.q,
            c = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(c, b.src);
        a.compileShader(c);
        if (!a.getShaderParameter(c, a.COMPILE_STATUS)) throw b = a.getShaderInfoLog(c), a.deleteShader(c), Error("error compiling fragment shader: " + b);
        var k = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(k, d);
        a.compileShader(k);
        if (!a.getShaderParameter(k, a.COMPILE_STATUS)) throw b = a.getShaderInfoLog(k), a.deleteShader(c), a.deleteShader(k), Error("error compiling vertex shader: " + b);
        d = a.createProgram();
        a.attachShader(d, c);
        a.attachShader(d, k);
        a.linkProgram(d);
        if (!a.getProgramParameter(d, a.LINK_STATUS)) throw b = a.getProgramInfoLog(d), a.deleteShader(c), a.deleteShader(k), a.deleteProgram(d), Error("error linking shader program: " + b);
        a.useProgram(d);
        a.deleteShader(c);
        a.deleteShader(k);
        c = new g(a, d, f);
        c.Dl = b.Dl || 0;
        c.El = b.El || 0;
        c.Mo = !!b.Mo;
        c.dd = !!b.dd;
        c.so = !!b.so;
        c.P = b.P || [];
        b = 0;
        for (k = c.P.length; b < k; b++) c.P[b][1] = a.getUniformLocation(d, c.P[b][0]), c.pm.push(0), a.uniform1f(c.P[b][1], 0);
        return c
    };
    h.prototype.Ul = function(b) {
        var d, f;
        d = 0;
        for (f = this.Ja.length; d < f; d++)
            if (this.Ja[d].name === b) return d;
        return -1
    };
    h.prototype.Kq = function(b, d, f) {
        var a = this.zc,
            c = this.Vj,
            k = [0, 0, 0, 0, 0, 0, 0, 0];
        k[0] = a[0] * b + a[4] * d + a[12];
        k[1] = a[1] * b + a[5] * d + a[13];
        k[2] = a[2] * b + a[6] * d + a[14];
        k[3] = a[3] * b + a[7] * d + a[15];
        k[4] = c[0] * k[0] + c[4] * k[1] + c[8] * k[2] + c[12] * k[3];
        k[5] = c[1] * k[0] + c[5] * k[1] + c[9] * k[2] + c[13] * k[3];
        k[6] = c[2] * k[0] + c[6] * k[1] + c[10] * k[2] + c[14] * k[3];
        k[7] = -k[2];
        0 !== k[7] && (k[7] = 1 / k[7], k[4] *= k[7], k[5] *= k[7], k[6] *= k[7], f[0] = (.5 * k[4] +
            .5) * this.width, f[1] = (.5 * k[5] + .5) * this.height)
    };
    h.prototype.ge = function(b, d, f) {
        if (this.width !== b || this.height !== d || f) {
            this.kf();
            f = this.q;
            this.width = b;
            this.height = d;
            f.viewport(0, 0, b, d);
            qc(this.il, this.Op, this.Ar, this.zc);
            if (this.ua) {
                var a = -b / 2;
                b = b / 2;
                var c = d / 2;
                d = -d / 2;
                var k = this.Vk,
                    m = this.Fn,
                    e = this.Vj;
                e || (e = nc());
                var g = b - a,
                    h = d - c,
                    n = m - k;
                e[0] = 2 / g;
                e[1] = 0;
                e[2] = 0;
                e[3] = 0;
                e[4] = 0;
                e[5] = 2 / h;
                e[6] = 0;
                e[7] = 0;
                e[8] = 0;
                e[9] = 0;
                e[10] = -2 / n;
                e[11] = 0;
                e[12] = -(a + b) / g;
                e[13] = -(d + c) / h;
                e[14] = -(m + k) / n;
                e[15] = 1;
                this.Ii[0] = 1;
                this.Ii[1] = 1
            } else d = b / d, a = this.Vk, b = this.Fn, e = this.Vj, m = a * Math.tan(45 * Math.PI / 360), d *= m, c = -d, k = -m, e || (e = nc()), g = d - c, h = m - k, n = b - a, e[0] = 2 * a / g, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a / h, e[6] = 0, e[7] = 0, e[8] = (d + c) / g, e[9] = (m + k) / h, e[10] = -(b + a) / n, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = -(b * a * 2) / n, e[15] = 0, a = [0, 0], b = [0, 0], this.Kq(0, 0, a), this.Kq(1, 1, b), this.Ii[0] = 1 / (b[0] - a[0]), this.Ii[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.Ja.length; a < b; a++) c = this.Ja[a], c.rf = !1, c.Mp && (f.useProgram(c.qi), f.uniformMatrix4fv(c.Mp, !1, this.Vj));
            f.useProgram(this.Ja[this.Qh].qi);
            f.bindTexture(f.TEXTURE_2D, null);
            f.activeTexture(f.TEXTURE1);
            f.bindTexture(f.TEXTURE_2D, null);
            f.activeTexture(f.TEXTURE0);
            this.wf = this.vf = null;
            this.gj && (f.bindFramebuffer(f.FRAMEBUFFER, this.Fl), f.bindRenderbuffer(f.RENDERBUFFER, this.gj), f.renderbufferStorage(f.RENDERBUFFER, f.DEPTH_COMPONENT16, this.width, this.height), this.wo || (f.framebufferRenderbuffer(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.RENDERBUFFER, this.gj), this.wo = !0), f.bindRenderbuffer(f.RENDERBUFFER, null), f.bindFramebuffer(f.FRAMEBUFFER, null), this.rk = null)
        }
    };
    h.prototype.Fd = function() {
        qc(this.il, this.Op, this.Ar, this.zc);
        pc(this.zc, this.Ii)
    };
    h.prototype.translate = function(b, d) {
        if (0 !== b || 0 !== d) {
            this.Ue[0] = b;
            this.Ue[1] = d;
            this.Ue[2] = 0;
            var f = this.zc,
                a = this.Ue,
                c = a[0],
                k = a[1],
                a = a[2];
            f[12] = f[0] * c + f[4] * k + f[8] * a + f[12];
            f[13] = f[1] * c + f[5] * k + f[9] * a + f[13];
            f[14] = f[2] * c + f[6] * k + f[10] * a + f[14];
            f[15] = f[3] * c + f[7] * k + f[11] * a + f[15]
        }
    };
    h.prototype.scale = function(b, d) {
        if (1 !== b || 1 !== d) this.Ue[0] = b, this.Ue[1] = d, this.Ue[2] = 1, pc(this.zc, this.Ue)
    };
    h.prototype.an = function(b) {
        if (0 !== b) {
            var d = this.zc,
                f, a = Math.sin(b);
            b = Math.cos(b);
            var c = d[0],
                k = d[1],
                m = d[2],
                e = d[3],
                g = d[4],
                h = d[5],
                n = d[6],
                t = d[7];
            f ? d !== f && (f[8] = d[8], f[9] = d[9], f[10] = d[10], f[11] = d[11], f[12] = d[12], f[13] = d[13], f[14] = d[14], f[15] = d[15]) : f = d;
            f[0] = c * b + g * a;
            f[1] = k * b + h * a;
            f[2] = m * b + n * a;
            f[3] = e * b + t * a;
            f[4] = c * -a + g * b;
            f[5] = k * -a + h * b;
            f[6] = m * -a + n * b;
            f[7] = e * -a + t * b
        }
    };
    h.prototype.hd = function() {
        if (!e(this.qm, this.zc)) {
            var b = this.pc();
            b.type = 5;
            b.O ? oc(this.zc, b.O) : b.O = nc(this.zc);
            oc(this.zc, this.qm);
            this.Ib = !1
        }
    };
    h.prototype.xk = function(b) {
        this.ua && (32760 < b && (b = 32760), this.rl = this.il[2] - this.Vk - b * this.fy)
    };
    r.prototype.Du = function() {
        var b = this.q,
            d = this.m;
        0 !== this.Rb ? (b.depthMask(!0), b.colorMask(!1, !1, !1, !1), b.disable(b.BLEND), b.bindFramebuffer(b.FRAMEBUFFER, d.Fl), b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.clear(b.DEPTH_BUFFER_BIT), b.bindFramebuffer(b.FRAMEBUFFER, null), d.Cj = !0) : (b.depthMask(!1), b.colorMask(!0, !0, !0, !0), b.enable(b.BLEND), d.Cj = !1)
    };
    r.prototype.Hu = function() {
        this.q.bindTexture(this.q.TEXTURE_2D, this.Tc)
    };
    r.prototype.Iu = function() {
        var b = this.q;
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, this.Tc);
        b.activeTexture(b.TEXTURE0)
    };
    r.prototype.Eu = function() {
        var b = this.yq,
            d = this.m;
        d.cj = b;
        d = d.Vf;
        d.sg && d.Uj !== b && (d.Uj = b, this.q.uniform1f(d.sg, b))
    };
    r.prototype.yu = function() {
        this.q.drawElements(this.q.TRIANGLES, this.wd, this.q.UNSIGNED_SHORT, this.Rb)
    };
    r.prototype.Au = function() {
        this.q.blendFunc(this.Rb, this.wd)
    };
    r.prototype.Ju = function() {
        var b, d, f, a = this.m.Ja,
            c = this.m.No;
        b = 0;
        for (d = a.length; b < d; b++) f = a[b], b === c && f.Rj ? (f.zn(this.O), f.rf = !0) : f.rf = !1;
        oc(this.O, this.m.ql)
    };
    r.prototype.zu = function() {
        var b = this.q,
            d = this.m;
        this.Tc ? (d.wf === this.Tc && (b.activeTexture(b.TEXTURE1), b.bindTexture(b.TEXTURE_2D, null), d.wf = null, b.activeTexture(b.TEXTURE0)), b.bindFramebuffer(b.FRAMEBUFFER, d.Fl), d.Cj || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.Tc, 0)) : (d.ua || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.bindFramebuffer(b.FRAMEBUFFER, null))
    };
    r.prototype.vu = function() {
        var b = this.q,
            d = this.Rb;
        0 === d ? (b.clearColor(this.O[0], this.O[1], this.O[2], this.O[3]), b.clear(b.COLOR_BUFFER_BIT)) : 1 === d ? (b.enable(b.SCISSOR_TEST), b.scissor(this.O[0], this.O[1], this.O[2], this.O[3]), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.disable(b.SCISSOR_TEST)) : b.clear(b.DEPTH_BUFFER_BIT)
    };
    r.prototype.Cu = function() {
        var b = this.q;
        0 !== this.Rb ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST)
    };
    r.prototype.xu = function() {
        var b = this.q,
            d = this.m;
        d.ua && b.disable(b.DEPTH_TEST);
        var f = d.Ja[1];
        b.useProgram(f.qi);
        !f.rf && f.Rj && (f.zn(d.ql), f.rf = !0);
        b.enableVertexAttribArray(f.Nc);
        b.bindBuffer(b.ARRAY_BUFFER, d.Qm);
        b.vertexAttribPointer(f.Nc, 4, b.FLOAT, !1, 0, 0);
        b.drawArrays(b.POINTS, this.Rb / 4, this.wd);
        f = d.Vf;
        b.useProgram(f.qi);
        0 <= f.Nc && (b.enableVertexAttribArray(f.Nc), b.bindBuffer(b.ARRAY_BUFFER, d.Hi[d.Pd]), b.vertexAttribPointer(f.Nc, d.ua ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= f.Pe && (b.enableVertexAttribArray(f.Pe), b.bindBuffer(b.ARRAY_BUFFER, d.xi[d.Pd]), b.vertexAttribPointer(f.Pe, 2, b.FLOAT, !1, 0, 0));
        d.ua && b.enable(b.DEPTH_TEST)
    };
    r.prototype.Fu = function() {
        var b = this.q,
            d = this.m,
            f = d.Ja[this.Rb];
        d.No = this.Rb;
        d.Vf = f;
        b.useProgram(f.qi);
        !f.rf && f.Rj && (f.zn(d.ql), f.rf = !0);
        f.sg && f.Uj !== d.cj && (f.Uj = d.cj, b.uniform1f(f.sg, d.cj));
        0 <= f.Nc && (b.enableVertexAttribArray(f.Nc), b.bindBuffer(b.ARRAY_BUFFER, d.Hi[d.Pd]), b.vertexAttribPointer(f.Nc, d.ua ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= f.Pe && (b.enableVertexAttribArray(f.Pe), b.bindBuffer(b.ARRAY_BUFFER, d.xi[d.Pd]), b.vertexAttribPointer(f.Pe, 2, b.FLOAT, !1, 0, 0))
    };
    r.prototype.Bu = function() {
        var b = this.O;
        this.q.uniform4f(this.m.Vf.wm, b[0], b[1], b[2], b[3])
    };
    r.prototype.Gu = function() {
        var b, d, f = this.m.Vf,
            a = this.q;
        b = this.O;
        f.Vh && this.m.wf !== this.Tc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.Tc), this.m.wf = this.Tc, a.activeTexture(a.TEXTURE0));
        var c = b[0];
        f.ym && c !== f.Xp && (f.Xp = c, a.uniform1f(f.ym, c));
        c = b[1];
        f.xm && c !== f.Wp && (f.Wp = c, a.uniform1f(f.xm, c));
        c = b[2];
        d = b[3];
        !f.Cf || c === f.Rp && d === f.Sp || (f.Rp = c, f.Sp = d, a.uniform2f(f.Cf, c, d));
        c = b[4];
        d = b[5];
        !f.Bf || c === f.Pp && d === f.Qp || (f.Pp = c, f.Qp = d, a.uniform2f(f.Bf, c, d));
        c = b[6];
        f.Uh && c !== f.Up && (f.Up = c, a.uniform1f(f.Uh, c));
        c = b[7];
        f.Th && c !== f.Tp && (f.Tp = c, a.uniform1f(f.Th, c));
        c = b[8];
        d = b[9];
        !f.Yh || c === f.aq && d === f.bq || (f.aq = c, f.bq = d, a.uniform2f(f.Yh, c, d));
        c = b[10];
        d = b[11];
        !f.Wh || c === f.Yp && d === f.Zp || (f.Yp = c, f.Zp = d, a.uniform2f(f.Wh, c, d));
        c = b[12];
        f.Xh && c !== f.$p && (f.$p = c, a.uniform1f(f.Xh, c));
        if (f.P.length)
            for (b = 0, d = f.P.length; b < d; b++) c = this.fr[b], c !== f.pm[b] && (f.pm[b] = c, a.uniform1f(f.P[b][1], c))
    };
    h.prototype.pc = function() {
        this.Od === this.xe.length && this.xe.push(new r(0, this));
        return this.xe[this.Od++]
    };
    h.prototype.kf = function() {
        if (0 !== this.Od && !this.q.isContextLost()) {
            var b = this.q;
            0 < this.Rm && (b.bindBuffer(b.ARRAY_BUFFER, this.Qm), b.bufferSubData(b.ARRAY_BUFFER, 0, this.Iq.subarray(0, this.Rm)), d && 0 <= d.Nc && "<point>" === d.name && b.vertexAttribPointer(d.Nc, 4, b.FLOAT, !1, 0, 0));
            if (0 < this.ne) {
                var d = this.Vf;
                b.bindBuffer(b.ARRAY_BUFFER, this.Hi[this.Pd]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.Tk.subarray(0, this.ne));
                d && 0 <= d.Nc && "<point>" !== d.name && b.vertexAttribPointer(d.Nc, this.ua ? 3 : 2, b.FLOAT, !1, 0, 0);
                b.bindBuffer(b.ARRAY_BUFFER, this.xi[this.Pd]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.Hk.subarray(0, this.Og));
                d && 0 <= d.Pe && "<point>" !== d.name && b.vertexAttribPointer(d.Pe, 2, b.FLOAT, !1, 0, 0)
            }
            for (var f, b = 0, d = this.Od; b < d; b++) switch (f = this.xe[b], f.type) {
                case 1:
                    f.yu();
                    break;
                case 2:
                    f.Hu();
                    break;
                case 3:
                    f.Eu();
                    break;
                case 4:
                    f.Au();
                    break;
                case 5:
                    f.Ju();
                    break;
                case 6:
                    f.zu();
                    break;
                case 7:
                    f.vu();
                    break;
                case 8:
                    f.xu();
                    break;
                case 9:
                    f.Fu();
                    break;
                case 10:
                    f.Gu();
                    break;
                case 11:
                    f.Iu();
                    break;
                case 12:
                    f.Bu();
                    break;
                case 13:
                    f.Cu();
                    break;
                case 14:
                    f.Du()
            }
            this.Rm = this.Og = this.ne = this.Od = 0;
            this.Cj = this.Ib = !1;
            this.Pd++;
            4 <= this.Pd && (this.Pd = 0)
        }
    };
    h.prototype.Hf = function(b) {
        if (b !== this.Gp && !this.Fh) {
            var d = this.pc();
            d.type = 3;
            this.Gp = d.yq = b;
            this.Ib = !1
        }
    };
    h.prototype.qc = function(b) {
        if (b !== this.vf) {
            var d = this.pc();
            d.type = 2;
            this.vf = d.Tc = b;
            this.Ib = !1
        }
    };
    h.prototype.Se = function(b, d) {
        if ((b !== this.Hp || d !== this.Fp) && !this.Fh) {
            var f = this.pc();
            f.type = 4;
            f.Rb = b;
            f.wd = d;
            this.Hp = b;
            this.Fp = d;
            this.Ib = !1
        }
    };
    h.prototype.Vq = function() {
        this.Se(this.q.ONE, this.q.ONE_MINUS_SRC_ALPHA)
    };
    h.prototype.ji = function(b, d, f, a, c, k, m, e) {
        15992 <= this.ne && this.kf();
        var g = this.ne,
            h = this.Og,
            n = this.Tk,
            t = this.Hk,
            l = this.rl;
        if (this.Ib) this.xe[this.Od - 1].wd += 6;
        else {
            var q = this.pc();
            q.type = 1;
            q.Rb = this.ua ? g : g / 2 * 3;
            q.wd = 6;
            this.Ib = !0
        }
        this.ua ? (n[g++] = b, n[g++] = d, n[g++] = l, n[g++] = f, n[g++] = a, n[g++] = l, n[g++] = c, n[g++] = k, n[g++] = l, n[g++] = m, n[g++] = e, n[g++] = l) : (n[g++] = b, n[g++] = d, n[g++] = f, n[g++] = a, n[g++] = c, n[g++] = k, n[g++] = m, n[g++] = e);
        t[h++] = 0;
        t[h++] = 0;
        t[h++] = 1;
        t[h++] = 0;
        t[h++] = 1;
        t[h++] = 1;
        t[h++] = 0;
        t[h++] = 1;
        this.ne = g;
        this.Og = h
    };
    h.prototype.Dd = function(b, d, f, a, c, k, m, e, g) {
        15992 <= this.ne && this.kf();
        var h = this.ne,
            n = this.Og,
            t = this.Tk,
            l = this.Hk,
            q = this.rl;
        if (this.Ib) this.xe[this.Od - 1].wd += 6;
        else {
            var r = this.pc();
            r.type = 1;
            r.Rb = this.ua ? h : h / 2 * 3;
            r.wd = 6;
            this.Ib = !0
        }
        var r = g.left,
            p = g.top,
            v = g.right;
        g = g.bottom;
        this.ua ? (t[h++] = b, t[h++] = d, t[h++] = q, t[h++] = f, t[h++] = a, t[h++] = q, t[h++] = c, t[h++] = k, t[h++] = q, t[h++] = m, t[h++] = e, t[h++] = q) : (t[h++] = b, t[h++] = d, t[h++] = f, t[h++] = a, t[h++] = c, t[h++] = k, t[h++] = m, t[h++] = e);
        l[n++] = r;
        l[n++] = p;
        l[n++] = v;
        l[n++] = p;
        l[n++] = v;
        l[n++] = g;
        l[n++] = r;
        l[n++] = g;
        this.ne = h;
        this.Og = n
    };
    h.prototype.cc = function(b) {
        if (this.Qh !== b) {
            if (!this.Ja[b]) {
                if (0 === this.Qh) return;
                b = 0
            }
            var d = this.pc();
            d.type = 9;
            this.Qh = d.Rb = b;
            this.Ib = !1
        }
    };
    h.prototype.hi = function(b) {
        b = this.Ja[b];
        return !(!b.Cf && !b.Bf)
    };
    h.prototype.Um = function(b) {
        b = this.Ja[b];
        return !!(b.Cf || b.Bf || b.Mo)
    };
    h.prototype.Tm = function(b) {
        return this.Ja[b].dd
    };
    h.prototype.nx = function(b) {
        b = this.Ja[b];
        return 0 !== b.Dl || 0 !== b.El
    };
    h.prototype.Sv = function(b) {
        return this.Ja[b].Dl
    };
    h.prototype.Tv = function(b) {
        return this.Ja[b].El
    };
    h.prototype.Uv = function(b, d) {
        return this.Ja[b].P[d][2]
    };
    h.prototype.ok = function(b) {
        return this.Ja[b].so
    };
    h.prototype.Kg = function(b, d, f, a, c, k, m, e, g, h, n, t, l, q, r) {
        var p = this.Ja[this.Qh],
            v, x;
        if (p.kw || r.length) {
            v = this.pc();
            v.type = 10;
            v.O ? oc(this.zc, v.O) : v.O = nc();
            x = v.O;
            x[0] = d;
            x[1] = f;
            x[2] = a;
            x[3] = c;
            x[4] = k;
            x[5] = m;
            x[6] = e;
            x[7] = g;
            x[8] = h;
            x[9] = n;
            x[10] = t;
            x[11] = l;
            x[12] = q;
            p.Vh ? v.Tc = b : v.Tc = null;
            if (r.length)
                for (f = v.fr, f.length = r.length, b = 0, d = r.length; b < d; b++) f[b] = r[b];
            this.Ib = !1
        }
    };
    h.prototype.clear = function(b, d, f, a) {
        var c = this.pc();
        c.type = 7;
        c.Rb = 0;
        c.O || (c.O = nc());
        c.O[0] = b;
        c.O[1] = d;
        c.O[2] = f;
        c.O[3] = a;
        this.Ib = !1
    };
    h.prototype.clearRect = function(b, d, f, a) {
        if (!(0 > f || 0 > a)) {
            var c = this.pc();
            c.type = 7;
            c.Rb = 1;
            c.O || (c.O = nc());
            c.O[0] = b;
            c.O[1] = d;
            c.O[2] = f;
            c.O[3] = a;
            this.Ib = !1
        }
    };
    h.prototype.Zq = function(b) {
        if (this.ua && (b = !!b, this.Fh !== b)) {
            var d = this.pc();
            d.type = 14;
            d.Rb = b ? 1 : 0;
            this.Ib = !1;
            this.Fh = b;
            this.rk = null;
            this.Fh ? this.cc(2) : this.cc(0)
        }
    };
    h.prototype.Xq = function(b) {
        if (this.ua) {
            var d = this.pc();
            d.type = 13;
            d.Rb = b ? 1 : 0;
            this.Ib = !1
        }
    };
    h.prototype.cp = function() {
        oc(this.qm, l);
        this.Fd();
        this.hd();
        var b = this.width / 2,
            d = this.height / 2;
        this.ji(-b, d, b, d, b, -d, -b, -d);
        oc(l, this.zc);
        this.hd()
    };
    h.prototype.Wq = function(b, d, f) {
        this.cc(3);
        var a = this.pc();
        a.type = 12;
        a.O || (a.O = nc());
        a.O[0] = b;
        a.O[1] = d;
        a.O[2] = f;
        a.O[3] = 1;
        this.Ib = !1
    };
    h.prototype.Nx = function() {
        this.cc(0)
    };
    h.prototype.xx = function() {
        this.cc(2)
    };
    h.prototype.mx = function() {
        this.kf();
        this.q.flush()
    };
    var p = [],
        q = {};
    h.prototype.nu = function() {
        A(p);
        q = {}
    };
    h.prototype.rg = function(b, d, f, a) {
        d = !!d;
        f = !!f;
        var c = b.src + "," + d + "," + f + (d ? ",undefined" : ""),
            k = null;
        if ("undefined" !== typeof b.src && q.hasOwnProperty(c)) return k = q[c], k.Ui++, k;
        this.kf();
        var m = this.q,
            e = na(b.width) && na(b.height),
            k = m.createTexture();
        m.bindTexture(m.TEXTURE_2D, k);
        m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var g = m.RGBA,
            h = m.RGBA,
            n = m.UNSIGNED_BYTE;
        if (a && !this.Le) switch (a) {
            case 1:
                h = g = m.RGB;
                break;
            case 2:
                n = m.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                n = m.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                h = g = m.RGB, n = m.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !e && d) {
            a = document.createElement("canvas");
            a.width = oa(b.width);
            a.height = oa(b.height);
            var t = a.getContext("2d");
            "undefined" !== typeof t.imageSmoothingEnabled ? t.imageSmoothingEnabled = f : (t.webkitImageSmoothingEnabled = f, t.mozImageSmoothingEnabled = f, t.msImageSmoothingEnabled = f);
            t.drawImage(b, 0, 0, b.width, b.height, 0, 0, a.width, a.height);
            m.texImage2D(m.TEXTURE_2D, 0, g, h, n, a)
        } else m.texImage2D(m.TEXTURE_2D, 0, g, h, n, b);
        d ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.REPEAT), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.REPEAT)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE));
        f ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.LINEAR), (e || 2 <= this.version) && this.To ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR_MIPMAP_LINEAR), m.generateMipmap(m.TEXTURE_2D)) : m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.LINEAR)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST));
        m.bindTexture(m.TEXTURE_2D, null);
        this.vf = null;
        k.bf = b.width;
        k.$e = b.height;
        k.Ui = 1;
        k.Eo = c;
        p.push(k);
        return q[c] = k
    };
    h.prototype.Fc = function(b, d, f) {
        var a;
        this.kf();
        var c = this.q;
        this.Le && (a = !1);
        var k = c.createTexture();
        c.bindTexture(c.TEXTURE_2D, k);
        c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, b, d, 0, c.RGBA, a ? c.UNSIGNED_SHORT_4_4_4_4 : c.UNSIGNED_BYTE, null);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, f ? c.LINEAR : c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, f ? c.LINEAR : c.NEAREST);
        c.bindTexture(c.TEXTURE_2D, null);
        this.vf = null;
        k.bf = b;
        k.$e = d;
        p.push(k);
        return k
    };
    h.prototype.deleteTexture = function(b) {
        b && ("undefined" !== typeof b.Ui && 1 < b.Ui ? b.Ui-- : (this.kf(), b === this.vf && (this.q.bindTexture(this.q.TEXTURE_2D, null), this.vf = null), b === this.wf && (this.q.activeTexture(this.q.TEXTURE1), this.q.bindTexture(this.q.TEXTURE_2D, null), this.q.activeTexture(this.q.TEXTURE0), this.wf = null), Ga(p, b), "undefined" !== typeof b.Eo && delete q[b.Eo], this.q.deleteTexture(b)))
    };
    h.prototype.Rc = function(b) {
        if (b !== this.rk) {
            var d = this.pc();
            d.type = 6;
            this.rk = d.Tc = b;
            this.Ib = !1
        }
    };
    pb = h
})();
(function() {
    function h(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var c = this;
            this.jc = (this.Dj = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Jb = !!a.dc;
            this.xp = "undefined" !== typeof window.AppMobi || this.Jb;
            this.ic = !!window.c2cocoonjs;
            this.Lc = !!window.c2ejecta;
            this.ic && (CocoonJS.App.onSuspended.addEventListener(function() {
                c.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                c.setSuspended(!1)
            }));
            this.Lc && (document.addEventListener("pagehide", function() {
                c.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                c.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                c.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Ha = this.Jb || this.ic || this.Lc;
            this.Hh = /edge\//i.test(navigator.userAgent);
            this.Le = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Hh;
            this.zp = /tizen/i.test(navigator.userAgent);
            this.Aj = /android/i.test(navigator.userAgent) && !this.zp && !this.Le && !this.Hh;
            this.Dp = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Le && !this.Hh;
            this.Bw = /ipad/i.test(navigator.userAgent);
            this.lg = this.Dp || this.Bw || this.Lc;
            this.fm = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Le && !this.Hh;
            this.wp = /amazonwebappplatform/i.test(navigator.userAgent);
            this.sw = /firefox/i.test(navigator.userAgent);
            this.ww = /safari/i.test(navigator.userAgent) && !this.fm && !this.Le && !this.Hh;
            this.xw = /windows/i.test(navigator.userAgent);
            this.Ej = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Ap = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.zw = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Lh = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.nm = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.mm = !!window.cr_windows10;
            this.lm = this.Ap || this.zw || this.nm || this.mm;
            this.rw = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Bj = this.Aj && !this.fm && !this.Dj && !this.sw && !this.wp && !this.Ha;
            this.devicePixelRatio = 1;
            this.eg = this.jc || this.Dj || this.xp || this.ic || this.Aj || this.lg || this.Lh || this.nm || this.rw || this.zp || this.Lc;
            this.eg || (this.eg = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Fj = !!(this.lg && this.jc && window.webkit);
            "undefined" === typeof cr_is_preview || this.Ej || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Ej = !0);
            this.canvas = a;
            this.Go = document.getElementById("c2canvasdiv");
            this.m = this.q = null;
            this.Vl = "(unavailable)";
            this.ua = !1;
            this.hf = 0;
            this.Aa = null;
            this.oj = !1;
            this.pq = this.qq = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.ontouchstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Jb && (window.c2runtime = this);
            this.Ej && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Bj && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.F = this.width;
            this.D = this.height;
            this.aj = this.width;
            this.oh = this.height;
            this.pg = window.innerWidth;
            this.ng = window.innerHeight;
            this.na = !0;
            this.Jh = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.k = [];
            this.Ea = [];
            this.um = {};
            this.ad = [];
            this.Cl = {};
            this.Td = [];
            this.Kf = [];
            this.Nk = [];
            this.Wt = [];
            this.Xt = [];
            this.ef = {};
            this.hm = this.Je = !1;
            this.xc = 0;
            this.gm = this.km = !1;
            this.nd = [];
            this.Gh = !1;
            this.Oj = this.en = "";
            this.cb = null;
            this.Xd = "";
            this.vi = this.ir = !1;
            this.nj = [];
            this.gf = this.Fe = 0;
            this.gq = 30;
            this.pl = this.Zh = 0;
            this.Rg = 1;
            this.hb = new fb;
            this.oe = new fb;
            this.Yj = this.rj = this.nf = this.Qg = this.yf = this.Il = this.Ij = 0;
            this.cf = null;
            this.wl = [];
            this.Bl = [];
            this.jj = -1;
            this.zm = [
                []
            ];
            this.vn = this.Sj = 0;
            this.qk(null);
            this.$h = [];
            this.tg = -1;
            this.kq = this.ci = 0;
            this.tm = !0;
            this.rh = 0;
            this.wi = [];
            this.sn = this.Wm = -1;
            this.mg = !0;
            this.Af = 0;
            this.Ih = !1;
            this.Px = 0;
            this.Rf = null;
            this.yc = this.mp = !1;
            this.oq = new fa;
            this.Gm = new fa;
            this.Hm = new fa;
            this.Qq = [];
            new hb([]);
            new hb([]);
            this.ve = [];
            this.Bh = {};
            this.Be = {};
            this.ue = {};
            this.Vg = {};
            this.Bo = {};
            this.Lp = this.Nj = this.Ra = this.bb = this.Kp = this.Mj = this.fa = null;
            this.Tg = this.om = !1;
            this.Jl = [null, null];
            this.pf = 0;
            this.Gl = "";
            this.$d = {};
            this.ri = this.Ne = null;
            this.kr = "";
            this.Xj = [];
            this.wx()
        }
    }

    function g(a, c) {
        return 128 >= c ? a[3] : 256 >= c ? a[2] : 512 >= c ? a[1] : a[0]
    }

    function e() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function r(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function l(a, c, b, d) {
        try {
            var k = indexedDB.open("_C2SaveStates");
            k.onupgradeneeded = r;
            k.onerror = d;
            k.onsuccess = function(k) {
                k = k.target.result;
                k.onerror = d;
                k.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: c
                }).onsuccess = b
            }
        } catch (m) {
            d(m)
        }
    }

    function p(a, c, b) {
        try {
            var d = indexedDB.open("_C2SaveStates");
            d.onupgradeneeded = r;
            d.onerror = b;
            d.onsuccess = function(d) {
                d = d.target.result;
                d.onerror = b;
                var k = d.transaction(["saves"]).objectStore("saves").get(a);
                k.onsuccess = function() {
                    k.result ? c(k.result.data) : c(null)
                }
            }
        } catch (k) {
            b(k)
        }
    }

    function q() {
        ha("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function b(a) {
        var c, b = {};
        for (c in a) !a.hasOwnProperty(c) || a[c] instanceof fa || a[c] && "undefined" !== typeof a[c].wz || "spriteCreatedDestroyCallback" !== c && (b[c] = a[c]);
        return b
    }
    var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    h.prototype.wx = function() {
        var a = this;
        if (this.Fj) this.zv(function(c) {
            a.Sh(JSON.parse(c))
        }, function() {
            alert("Error fetching data.js")
        });
        else {
            var c;
            this.Lh ? c = new ActiveXObject("Microsoft.XMLHTTP") : c = new XMLHttpRequest;
            var b = "data.js";
            if (this.Ap || this.Lh || this.nm || this.mm) b = "data.json";
            c.open("GET", b, !0);
            var d = !1;
            if (!this.Ha && "response" in c && "responseType" in c) try {
                c.responseType = "json", d = "json" === c.responseType
            } catch (k) {
                d = !1
            }
            if (!d && "responseType" in c) try {
                c.responseType = "text"
            } catch (m) {}
            if ("overrideMimeType" in c) try {
                c.overrideMimeType("application/json; charset=utf-8")
            } catch (f) {}
            this.Lh ? c.onreadystatechange = function() {
                4 === c.readyState && a.Sh(JSON.parse(c.responseText))
            } : (c.onload = function() {
                if (d) a.Sh(c.response);
                else if (a.Lc) {
                    var b = c.responseText,
                        b = b.substr(b.indexOf("{"));
                    a.Sh(JSON.parse(b))
                } else a.Sh(JSON.parse(c.responseText))
            }, c.onerror = function(a) {
                ia("Error requesting " + b + ":");
                ia(a)
            });
            c.send()
        }
    };
    h.prototype.pw = function() {
        var a = this,
            c, b, d, k, m, f, n, e, g;
        this.fg = (!this.Ha || this.Lc || this.jc) && this.ay && !this.Bj;
        0 === this.Yb && this.lg && (this.fg = !1);
        this.devicePixelRatio = this.fg ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Cb();
        0 < this.Yb && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(c) {
            c.preventDefault();
            a.Ow();
            ha("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.m.sp();
            a.m.ge(a.m.width, a.m.height, !0);
            a.bb = null;
            a.Ra = null;
            a.Jl[0] = null;
            a.Jl[1] = null;
            a.Pw();
            a.na = !0;
            ha("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.Ru && (this.ic || this.Lc || !this.Ha) && (c = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.q = this.canvas.getContext("webgl2", c) || this.canvas.getContext("webgl", c) || this.canvas.getContext("experimental-webgl", c))
        } catch (t) {}
        if (this.q) {
            if (c = this.q.getExtension("WEBGL_debug_renderer_info")) this.Vl = this.q.getParameter(c.UNMASKED_RENDERER_WEBGL) + " [" + this.q.getParameter(c.UNMASKED_VENDOR_WEBGL) + "]";
            this.ua && (this.Vl += " [front-to-back enabled]");
            this.Ha || (this.yb = document.createElement("canvas"), jQuery(this.yb).appendTo(this.canvas.parentNode), this.yb.oncontextmenu = function() {
                return !1
            }, this.yb.onselectstart = function() {
                return !1
            }, this.yb.width = Math.round(this.aj * this.devicePixelRatio), this.yb.height = Math.round(this.oh * this.devicePixelRatio), jQuery(this.yb).css({
                width: this.aj + "px",
                height: this.oh + "px"
            }), this.Jq(), this.Nm = this.yb.getContext("2d"));
            this.m = new pb(this.q, this.eg, this.ua);
            this.m.ge(this.canvas.width, this.canvas.height);
            this.m.To = 0 !== this.Ku;
            this.Aa = null;
            c = 0;
            for (b = this.k.length; c < b; c++)
                for (m = this.k[c], d = 0, k = m.J.length; d < k; d++) n = m.J[d], n.Va = this.m.Ul(n.id), n.dd = this.m.Tm(n.Va), this.Tg = this.Tg || this.m.hi(n.Va);
            c = 0;
            for (b = this.ad.length; c < b; c++) {
                e = this.ad[c];
                d = 0;
                for (k = e.J.length; d < k; d++) n = e.J[d], n.Va = this.m.Ul(n.id), n.dd = this.m.Tm(n.Va);
                e.gd();
                d = 0;
                for (k = e.M.length; d < k; d++) {
                    g = e.M[d];
                    m = 0;
                    for (f = g.J.length; m < f; m++) n = g.J[m], n.Va = this.m.Ul(n.id), n.dd = this.m.Tm(n.Va), this.Tg = this.Tg || this.m.hi(n.Va);
                    g.gd()
                }
            }
        } else {
            if (0 < this.Yb && this.Jb) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Aa = AppMobi.canvas.getContext("2d");
                try {
                    this.Aa.samplingMode = this.xa ? "smooth" : "sharp", this.Aa.globalScale = 1, this.Aa.HTML5CompatibilityMode = !0, this.Aa.imageSmoothingEnabled = this.xa
                } catch (h) {}
                0 !== this.width && 0 !== this.height && (this.Aa.width = this.width, this.Aa.height = this.height)
            }
            this.Aa || (this.ic ? (c = {
                antialias: !!this.xa,
                alpha: !0
            }, this.Aa = this.canvas.getContext("2d", c)) : (c = {
                alpha: !0
            }, this.Aa = this.canvas.getContext("2d", c)), this.wk(this.Aa, this.xa));
            this.Nm = this.yb = null
        }
        this.qr = function(c) {
            a.Sb(!1, c)
        };
        window == window.top || this.Ha || this.lm || this.Lh || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.ic && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ha("Reloading for continuous preview"), this.Oj = "__c2_continuouspreview", this.vi = !0), this.bx && !this.eg && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var c = window.parent;
            c && c.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.Ag()
        });
        this.Ha || (c = function(a) {
            if (ob(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (c) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", c) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", c) : document.addEventListener("touchstart", c), document.addEventListener("mousedown", c));
        0 === this.Yb && this.fg && 1 < this.devicePixelRatio && this.setSize(this.fb, this.eb, !0);
        this.wr();
        this.hw();
        this.go();
        this.N = {}
    };
    h.prototype.setSize = function(a, c, b) {
        var d = 0,
            k = 0,
            m = 0,
            f = 0,
            f = 0;
        if (this.pg !== a || this.ng !== c || b) {
            this.pg = a;
            this.ng = c;
            var n = this.Yb;
            if ((m = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Ih) && !this.jc) || 0 !== this.Yb || b) m && 0 < this.pf && (n = this.pf), b = this.devicePixelRatio, 4 <= n ? (m = this.fb / this.eb, a / c > m ? (m *= c, 5 === n ? (f = m * b / this.fb, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), m = this.fb * f / b, f = this.eb * f / b, d = (a - m) / 2, k = (c - f) / 2, a = m, c = f) : (d = (a - m) / 2, a = m)) : (f = a / m, 5 === n ? (f = f * b / this.eb, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), m = this.fb * f / b, f = this.eb * f / b, d = (a - m) / 2, k = (c - f) / 2, a = m) : k = (c - f) / 2, c = f)) : this.Ej && this.Ih && 0 === this.dp && (d = Math.floor((a - this.fb) / 2), k = Math.floor((c - this.eb) / 2), a = this.fb, c = this.eb), 2 > n && (this.dh = b), this.aj = Math.round(a), this.oh = Math.round(c), this.width = Math.round(a * b), this.height = Math.round(c * b), this.na = !0, this.Ir ? (this.F = this.width, this.D = this.height, this.tc = !0) : this.width < this.fb && this.height < this.eb || 1 === n ? (this.F = this.width, this.D = this.height, this.tc = !0) : (this.F = this.fb, this.D = this.eb, this.tc = !1, 2 === n ? (m = this.fb / this.eb, n = this.pg / this.ng, n < m ? this.F = this.D * n : n > m && (this.D = this.F / n)) : 3 === n && (m = this.fb / this.eb, n = this.pg / this.ng, n > m ? this.F = this.D * n : n < m && (this.D = this.F / n))), this.Go && !this.Ha && (jQuery(this.Go).css({
                width: Math.round(a) + "px",
                height: Math.round(c) + "px",
                "margin-left": Math.floor(d) + "px",
                "margin-top": Math.floor(k) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(c) +
                    "px"
            })), this.canvas && (this.canvas.width = Math.round(a * b), this.canvas.height = Math.round(c * b), this.Lc ? (this.canvas.style.left = Math.floor(d) + "px", this.canvas.style.top = Math.floor(k) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(c) + "px") : this.fg && !this.Ha && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(c) + "px")), this.yb && (this.yb.width = Math.round(a * b), this.yb.height = Math.round(c * b), this.yb.style.width = this.aj + "px", this.yb.style.height = this.oh + "px"), this.m && this.m.ge(Math.round(a * b), Math.round(c * b)), this.Jb && this.Aa && (this.Aa.width = Math.round(a), this.Aa.height = Math.round(c)), this.Aa && this.wk(this.Aa, this.xa), this.wr(), this.Dp && !this.jc && window.scrollTo(0, 0)
        }
    };
    h.prototype.wr = function() {
        if (this.$t && 0 !== this.Mm) {
            var a = "portrait";
            2 === this.Mm && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (c) {
                console && console.warn && console.warn("Failed to lock orientation: ", c)
            }
        }
    };
    h.prototype.Ow = function() {
        this.m.nu();
        this.om = !0;
        var a, c, b;
        a = 0;
        for (c = this.k.length; a < c; a++) b = this.k[a], b.$j && b.$j()
    };
    h.prototype.Pw = function() {
        this.om = !1;
        var a, c, b;
        a = 0;
        for (c = this.k.length; a < c; a++) b = this.k[a], b.bk && b.bk()
    };
    h.prototype.Jq = function() {
        if (!this.Ha) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Ih) && !this.jc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.yb).css(a)
        }
    };
    var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    h.prototype.setSuspended = function(a) {
        var c;
        if (a && !this.Jh)
            for (ha("[Construct 2] Suspending"), this.Jh = !0, -1 !== this.Wm && f && f(this.Wm), -1 !== this.sn && clearTimeout(this.sn), a = 0, c = this.wi.length; a < c; a++) this.wi[a](!0);
        else if (!a && this.Jh) {
            ha("[Construct 2] Resuming");
            this.Jh = !1;
            this.Ij = $a();
            this.yf = $a();
            a = this.Zh = this.rj = 0;
            for (c = this.wi.length; a < c; a++) this.wi[a](!1);
            this.Sb(!1)
        }
    };
    h.prototype.po = function(a) {
        this.wi.push(a)
    };
    h.prototype.re = function(a) {
        return this.Xj[a]
    };
    h.prototype.Sh = function(a) {
        a && a.project || ia("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.bp = a[1];
        this.Yb = a[12];
        this.dp = a[12];
        this.fb = a[10];
        this.eb = a[11];
        this.Fq = this.fb / 2;
        this.Gq = this.eb / 2;
        this.Ha && !this.Lc && (4 <= a[12] || 0 === a[12]) && (ha("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.dp = this.Yb = 3);
        this.Cn = a[18];
        this.Oe = a[19];
        if (0 === this.Oe) {
            var c = new Image;
            c.crossOrigin = "anonymous";
            this.br(c, "loading-logo.png");
            this.Ne = {
                Tj: c
            }
        } else if (4 === this.Oe) {
            c = new Image;
            c.src = "";
            var b = new Image;
            b.src = "";
            var d = new Image;
            d.src = "";
            var k = new Image;
            k.src = "";
            var m = new Image;
            m.src = "";
            var f = new Image;
            f.src = "";
            var n = new Image;
            n.src = "";
            var e = new Image;
            e.src = "";
            var g = new Image;
            g.src = "";
            var t = new Image;
            t.src = "";
            var h = new Image;
            h.src = "";
            var w = new Image;
            w.src = "";
            this.Ne = {
                Tj: [c, b, d, k],
                jx: [m, f, n, e],
                dy: [g, t, h, w]
            }
        }
        this.ci = a[21];
        this.Xj = sc();
        this.Gd = new E(this);
        c = 0;
        for (b = a[2].length; c < b; c++) n = a[2][c], d = this.re(n[0]), sb(n, d.prototype), e = new d(this), e.Bk = n[1], e.Me = n[2], e.Bz = n[5], e.hq = n[9], e.Y && e.Y(), this.plugins.push(e);
        this.Xj = sc();
        c = 0;
        for (b = a[3].length; c < b; c++) {
            n = a[3][c];
            m = this.re(n[1]);
            e = null;
            d = 0;
            for (k = this.plugins.length; d < k; d++)
                if (this.plugins[d] instanceof m) {
                    e = this.plugins[d];
                    break
                }
            g = new e.wa(e);
            g.name = n[0];
            g.C = n[2];
            g.dm = n[3].slice(0);
            g.cy = n[3].length;
            g.au = n[4];
            g.Dv = n[5];
            g.Z = n[11];
            g.C ? (g.Wj = [], g.Ud = this.rh++, g.Ba = null) : (g.Wj = null, g.Ud = -1, g.Ba = []);
            g.lj = null;
            g.Zf = null;
            g.Vo = null;
            g.ub = !1;
            g.gc = null;
            n[6] ? (g.Ik = n[6][0], g.qn = n[6][1], g.Ai = n[6][2]) : (g.Ik = null, g.qn = 0, g.Ai = 0);
            n[7] ? g.fc = n[7] : g.fc = null;
            g.index = c;
            g.c = [];
            g.ej = [];
            g.ke = [new tb(g)];
            g.od = 0;
            g.Hc = null;
            g.ru = 0;
            g.Mg = !0;
            g.Pk = ub;
            g.Jv = vb;
            g.Qv = wb;
            g.U = xb;
            g.ii = yb;
            g.Re = zb;
            g.cd = Ab;
            g.tj = Bb;
            g.Kl = Cb;
            g.Pl = Db;
            g.Md = Eb;
            g.Ql = Fb;
            g.Io = new ib(this.fb, this.eb);
            g.to = !0;
            g.uo = !1;
            g.N = {};
            g.toString = Gb;
            g.Ea = [];
            d = 0;
            for (k = n[8].length; d < k; d++) {
                t = n[8][d];
                h = this.re(t[1]);
                w = null;
                m = 0;
                for (f = this.Ea.length; m < f; m++)
                    if (this.Ea[m] instanceof h) {
                        w = this.Ea[m];
                        break
                    }
                w || (w = new h(this), w.iq = [], w.Em = new fa, w.Y && w.Y(), this.Ea.push(w)); - 1 === w.iq.indexOf(g) && w.iq.push(g);
                m = new w.wa(w, g);
                m.name = t[0];
                m.Z = t[2];
                m.Y();
                g.Ea.push(m)
            }
            g.global = n[9];
            g.jm = n[10];
            g.J = [];
            d = 0;
            for (k = n[12].length; d < k; d++) g.J.push({
                id: n[12][d][0],
                name: n[12][d][1],
                Va: -1,
                dd: !1,
                Db: !0,
                index: d
            });
            g.Sz = n[13];
            this.Cn && !g.C && !g.jm && e.Me || g.Y();
            g.name && (this.types[g.name] = g);
            this.k.push(g);
            e.Bk && (d = new e.pa(g), d.uid = this.ci++, d.Mq = this.kq++, d.tf = 0, d.zh = Hb, d.toString = Ib, d.B = n[14], d.Y(), g.c.push(d), this.$d[d.uid.toString()] = d)
        }
        c = 0;
        for (b = a[4].length; c < b; c++)
            for (m = a[4][c], f = this.k[m[0]], d = 1, k = m.length; d < k; d++) n = this.k[m[d]], n.Ba.push(f), f.Wj.push(n);
        c = 0;
        for (b = a[28].length; c < b; c++) {
            m = a[28][c];
            f = [];
            d = 0;
            for (k = m.length; d < k; d++) f.push(this.k[m[d]]);
            d = 0;
            for (k = f.length; d < k; d++) f[d].ub = !0, f[d].gc = f
        }
        if (0 < this.rh)
            for (c = 0, b = this.k.length; c < b; c++)
                if (n = this.k[c], !n.C && n.Ba.length) {
                    n.lj = Array(this.rh);
                    n.Zf = Array(this.rh);
                    n.Vo = Array(this.rh);
                    g = [];
                    d = w = h = t = 0;
                    for (k = n.Ba.length; d < k; d++)
                        for (e = n.Ba[d], n.lj[e.Ud] = t, t += e.cy, n.Zf[e.Ud] = h, h += e.au, n.Vo[e.Ud] = w, w += e.Dv, m = 0, f = e.J.length; m < f; m++) g.push(za({}, e.J[m]));
                    n.J = g.concat(n.J);
                    d = 0;
                    for (k = n.J.length; d < k; d++) n.J[d].index = d
                }
        c = 0;
        for (b = a[5].length; c < b; c++) n = a[5][c], d = new Jb(this, n), this.um[d.name] = d, this.ad.push(d);
        c = 0;
        for (b = a[6].length; c < b; c++) n = a[6][c], d = new Kb(this, n), this.Cl[d.name] = d, this.Td.push(d);
        c = 0;
        for (b = this.Td.length; c < b; c++) this.Td[c].Oa();
        c = 0;
        for (b = this.Td.length; c < b; c++) this.Td[c].yn();
        c = 0;
        for (b = this.Nk.length; c < b; c++) this.Nk[c].Oa();
        A(this.Nk);
        this.Zt = a[7];
        this.Gl = a[8];
        this.bd = a[9];
        this.dh = 1;
        this.Ru = a[13];
        this.xa = a[14];
        this.Ho = a[15];
        this.ay = a[17];
        this.Mm = a[20];
        this.$t = 0 < this.Mm;
        this.bx = a[22];
        this.tc = this.Ir = a[23];
        this.Ku = a[24];
        this.kx = a[25];
        this.ua = a[27] && !this.Le;
        this.Ck = Date.now();
        A(this.Xj);
        this.pw()
    };
    var a = !1,
        c = 0,
        k = [];
    h.prototype.rx = function(a, b) {
        function d() {
            c--;
            m.dq()
        }
        var m = this;
        a.addEventListener("load", d);
        a.addEventListener("error", d);
        k.push([a, b]);
        this.dq()
    };
    h.prototype.dq = function() {
        for (var a; k.length && 100 > c;) c++, a = k.shift(), this.br(a[0], a[1])
    };
    h.prototype.Hr = function(c, b) {
        c.cocoonLazyLoad = !0;
        c.onerror = function(b) {
            a = c.Do = !0;
            console && console.error && console.error("Error loading image '" + c.src + "': ", b)
        };
        this.Lc ? c.src = b : c.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b, function(a) {
            c.src = a
        }, function(d) {
            a = c.Do = !0;
            console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", d)
        }) : (c.crossOrigin = "anonymous", this.rx(c, b)));
        this.Kf.push(c)
    };
    h.prototype.Bv = function(a) {
        var c, b;
        c = 0;
        for (b = this.Kf.length; c < b; c++)
            if (this.Kf[c].ou === a) return this.Kf[c];
        return null
    };
    var m = 0,
        w = !1;
    h.prototype.hw = function() {
        this.Rf && (m = this.Rf.Kx(this.Zt))
    };
    h.prototype.vo = function() {
        var a = m,
            c = 0,
            b = 0,
            d = !0,
            k, f, b = 0;
        for (k = this.Kf.length; b < k; b++) {
            f = this.Kf[b];
            var n = f.Lo;
            if (!n || 0 >= n) n = 5E4;
            a += n;
            f.src && (f.complete || f.loaded) && !f.Do ? c += n : d = !1
        }
        d && this.kx && this.Rf && (w || (this.Rf.Qx(), w = !0), b = this.Rf.Rv(), c += b, b < m && (d = !1));
        this.R = 0 == a ? 1 : c / a;
        return d
    };
    var z = !1;
    h.prototype.go = function() {
        if (this.Aa || this.m) {
            var c = this.Aa || this.Nm;
            this.yb && this.Jq();
            var b = window.innerWidth,
                k = window.innerHeight;
            this.pg === b && this.ng === k || this.setSize(b, k);
            this.R = 0;
            this.Jp = -1;
            var m = this;
            if (this.vo() && (4 !== this.Oe || z)) this.iw();
            else {
                k = Date.now() - this.Ck;
                if (c) {
                    var f = this.width,
                        n = this.height,
                        b = this.devicePixelRatio;
                    if (3 > this.Oe && (this.ic || 500 <= k && this.Jp != this.R)) {
                        c.clearRect(0, 0, f, n);
                        var k = f / 2,
                            n = n / 2,
                            f = 0 === this.Oe && this.Ne.Tj.complete,
                            e = 40 * b,
                            g = 0,
                            t = 80 * b,
                            h;
                        if (f) {
                            var w = this.Ne.Tj,
                                t = w.width * b;
                            h = w.height * b;
                            e = t / 2;
                            g = h / 2;
                            c.drawImage(w, ua(k - e), ua(n - g), t, h)
                        }
                        1 >= this.Oe ? (k = ua(k - e) + .5, n = ua(n + (g + (f ? 12 * b : 0))) + .5, c.fillStyle = a ? "red" : "DodgerBlue", c.fillRect(k, n, Math.floor(t * this.R), 6 * b), c.strokeStyle = "black", c.strokeRect(k, n, t, 6 * b), c.strokeStyle = "white", c.strokeRect(k - 1 * b, n - 1 * b, t + 2 * b, 8 * b)) : 2 === this.Oe && (c.font = this.Lc ? "12pt ArialMT" : "12pt Arial", c.fillStyle = a ? "#f00" : "#999", c.Rz = "middle", b = Math.round(100 * this.R) + "%", f = c.measureText ? c.measureText(b) : null, c.fillText(b, k - (f ? f.width : 0) / 2, n));
                        this.Jp = this.R
                    } else if (4 === this.Oe) {
                        this.Pu(c);
                        d ? d(function() {
                            m.go()
                        }) : setTimeout(function() {
                            m.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    m.go()
                }, this.ic ? 10 : 100)
            }
        }
    };
    var O = -1,
        n = "undefined" === typeof cr_is_preview ? 200 : 0,
        t = !0,
        Y = !1,
        P = 0,
        F = 0,
        G = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        v = null,
        x = null,
        D = 0;
    h.prototype.Pu = function(c) {
        if (!z) {
            for (var b = Math.ceil(this.width), d = Math.ceil(this.height), k = this.Ne.Tj, m = this.Ne.jx, f = this.Ne.dy, e = 0; 4 > e; ++e)
                if (!k[e].complete || !m[e].complete || !f[e].complete) return;
            0 === D && (O = Date.now());
            var e = Date.now(),
                h = !1,
                w = c,
                l, q;
            t || Y ? (c.clearRect(0, 0, b, d), v && v.width === b && v.height === d || (v = document.createElement("canvas"), v.width = b, v.height = d, x = v.getContext("2d")), w = x, h = !0, t && 1 === D && (O = Date.now())) : c.globalAlpha = 1;
            w.fillStyle = "#333333";
            w.fillRect(0, 0, b, d);
            256 < this.oh ? (l = Ha(.22 * d, 105, .6 * b), q = .25 * l, w.drawImage(g(m, l), .5 * b - l / 2, .2 * d - q / 2, l, q), q = l = Math.min(.395 * d, .95 * b), w.drawImage(g(k, l), .5 * b - l / 2, .485 * d - q / 2, l, q), l = Ha(.22 * d, 105, .6 * b), q = .25 * l, w.drawImage(g(f, l), .5 * b - l / 2, .868 * d - q / 2, l, q), w.fillStyle = "#3C3C3C", l = b, q = Math.max(.005 * d, 2), w.fillRect(0, .8 * d - q / 2, l, q), w.fillStyle = a ? "red" : "#E0FF65", l = b * this.R, w.fillRect(.5 * b - l / 2, .8 * d - q / 2, l, q)) : (q = l = .55 * d, w.drawImage(g(k, l), .5 * b - l / 2, .45 * d - q / 2, l, q), w.fillStyle = "#3C3C3C", l = b, q = Math.max(.005 * d, 2), w.fillRect(0, .85 * d - q / 2, l, q), w.fillStyle = a ? "red" : "#E0FF65", l = b * this.R, w.fillRect(.5 * b - l / 2, .85 * d - q / 2, l, q));
            h && (t ? c.globalAlpha = 0 === D ? 0 : Math.min((e - O) / 300, 1) : Y && (c.globalAlpha = Math.max(1 - (e - F) / 300, 0)), c.drawImage(v, 0, 0, b, d));
            t && 300 <= e - O && 2 <= D && (t = !1, P = e);
            !t && e - P >= G && !Y && 1 <= this.R && (Y = !0, F = e);
            if (Y && e - F >= 300 + n || "undefined" !== typeof cr_is_preview && 1 <= this.R && 500 > Date.now() - O) z = !0, Y = t = !1, this.Ne = x = v = null;
            ++D
        }
    };
    h.prototype.iw = function() {
        this.yb && (this.canvas.parentNode.removeChild(this.yb), this.yb = this.Nm = null);
        this.Ck = Date.now();
        this.yf = $a();
        var a, c, b;
        if (this.Cn)
            for (a = 0, c = this.k.length; a < c; a++) b = this.k[a], b.C || b.jm || !b.ja.Me || b.Y();
        else this.mg = !1;
        a = 0;
        for (c = this.ad.length; a < c; a++) this.ad[a].pu();
        2 <= this.Yb && (a = this.fb / this.eb, c = this.width / this.height, this.dh = 2 !== this.Yb && c > a || 2 === this.Yb && c < a ? this.height / this.eb : this.width / this.fb);
        this.bp ? this.um[this.bp].nn() : this.ad[0].nn();
        this.Cn || (this.Af = 1, this.trigger(E.prototype.d.Wk, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (c = this.k.length; a < c; a++) b = this.k[a], b.rq && b.rq();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Sb(!1);
        this.Jb && AppMobi.webview.execute("onGameReady();")
    };
    h.prototype.Sb = function(a, c, b) {
        if (this.fa) {
            var k = $a();
            if (b || !this.Jh || a) {
                a || (d ? this.Wm = d(this.qr) : this.sn = setTimeout(this.qr, this.eg ? 1 : 16));
                c = c || k;
                var m = this.Yb;
                ((b = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.jc) || this.Ih) && 0 < this.pf && (m = this.pf);
                if (0 < m) {
                    var m = window.innerWidth,
                        f = window.innerHeight;
                    this.pg === m && this.ng === f || this.setSize(m, f)
                }
                this.Ha || (b ? this.oj || (this.oj = !0) : this.oj ? (this.oj = !1, 0 === this.Yb && this.setSize(Math.round(this.qq / this.devicePixelRatio), Math.round(this.pq / this.devicePixelRatio), !0)) : (this.qq = this.width, this.pq = this.height));
                this.mg && (b = this.vo(), this.Af = this.R, b && (this.mg = !1, this.R = 1, this.trigger(E.prototype.d.Wk, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.Hw(c);
                !this.na && !this.ic || this.om || this.vi || a || (this.na = !1, this.m ? this.Xb() : this.pd(), this.ri && (this.canvas && this.canvas.toDataURL && (this.kr = this.canvas.toDataURL(this.ri[0], this.ri[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.kr), this.trigger(E.prototype.d.Hs, null)), this.ri = null));
                this.zz || (this.Qg++, this.nf++, this.rj++);
                this.Zh += $a() - k
            }
        }
    };
    h.prototype.Hw = function(a) {
        var c, b, d, k, m, f, n, e;
        1E3 <= a - this.yf && (this.yf += 1E3, 1E3 <= a - this.yf && (this.yf = a), this.Il = this.rj, this.rj = 0, this.pl = this.Zh, this.Zh = 0);
        c = 0;
        0 !== this.Ij && (c = a - this.Ij, 0 > c && (c = 0), this.gf = c /= 1E3, .5 < this.gf ? this.gf = 0 : this.gf > 1 / this.gq && (this.gf = 1 / this.gq));
        this.Ij = a;
        this.Fe = this.gf * this.Rg;
        this.hb.add(this.Fe);
        this.oe.add(c);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Ih) && !this.jc;
        2 <= this.Yb || a && 0 < this.pf ? (c = this.fb / this.eb, b = this.width / this.height, d = this.Yb, a && 0 < this.pf && (d = this.pf), this.dh = 2 !== d && b > c || 2 === d && b < c ? this.height / this.eb : this.width / this.fb, this.fa && (this.fa.Uq(this.fa.scrollX), this.fa.gn(this.fa.scrollY))) : this.dh = this.fg ? this.devicePixelRatio : 1;
        this.Cb();
        this.xc++;
        this.Gd.Bx();
        this.xc--;
        this.Cb();
        this.xc++;
        b = this.oq.Ve();
        a = 0;
        for (c = b.length; a < c; a++) b[a].Lz();
        a = 0;
        for (c = this.k.length; a < c; a++)
            if (f = this.k[a], !f.C && (f.Ea.length || f.Ba.length))
                for (b = 0, d = f.c.length; b < d; b++)
                    for (n = f.c[b], k = 0, m = n.I.length; k < m; k++) n.I[k].Sb();
        a = 0;
        for (c = this.k.length; a < c; a++)
            if (f = this.k[a], !f.C && (f.Ea.length || f.Ba.length))
                for (b = 0, d = f.c.length; b < d; b++)
                    for (n = f.c[b], k = 0, m = n.I.length; k < m; k++) e = n.I[k], e.ix && e.ix();
        b = this.Gm.Ve();
        a = 0;
        for (c = b.length; a < c; a++) b[a].Sb();
        this.xc--;
        this.jw();
        for (a = 0; this.cf && 10 > a++;) this.Ro(this.cf);
        a = 0;
        for (c = this.Td.length; a < c; a++) this.Td[a].Yl = !1;
        this.fa.lf && this.fa.lf.Ta();
        A(this.Qq);
        this.tm = !1;
        this.xc++;
        a = 0;
        for (c = this.k.length; a < c; a++)
            if (f = this.k[a], !f.C && (f.Ea.length || f.Ba.length))
                for (b = 0, d = f.c.length; b < d; b++)
                    for (n = f.c[b], k = 0, m = n.I.length; k < m; k++) e = n.I[k], e.rn && e.rn();
        b = this.Hm.Ve();
        a = 0;
        for (c = b.length; a < c; a++) b[a].rn();
        this.xc--
    };
    h.prototype.Ag = function() {
        var a, c, b, d, k, m, f, n, e;
        a = 0;
        for (c = this.k.length; a < c; a++)
            if (f = this.k[a], !f.C)
                for (b = 0, d = f.c.length; b < d; b++)
                    if (n = f.c[b], n.Ag && n.Ag(), n.I)
                        for (k = 0, m = n.I.length; k < m; k++) e = n.I[k], e.Ag && e.Ag()
    };
    h.prototype.Ro = function(a) {
        var c = this.fa;
        this.fa.Rx();
        var b, d, k;
        if (this.m)
            for (b = 0, d = this.k.length; b < d; b++) k = this.k[b], k.C || !k.Ok || k.global && 0 !== k.c.length || -1 !== a.Eh.indexOf(k) || k.Ok();
        c == a && A(this.Gd.ec);
        A(this.Qq);
        this.Rq(!0);
        a.nn();
        this.Rq(!1);
        this.tm = this.na = !0;
        this.Cb()
    };
    h.prototype.Rq = function(a) {
        var c, b, d, k, m, f, n, e, g;
        c = 0;
        for (b = this.Ea.length; c < b; c++) d = this.Ea[c], a ? d.di && d.di() : d.ei && d.ei();
        c = 0;
        for (b = this.k.length; c < b; c++)
            if (d = this.k[c], d.global || d.ja.Bk)
                for (k = 0, m = d.c.length; k < m; k++)
                    if (f = d.c[k], a ? f.di && f.di() : f.ei && f.ei(), f.I)
                        for (n = 0, e = f.I.length; n < e; n++) g = f.I[n], a ? g.di && g.di() : g.ei && g.ei()
    };
    h.prototype.Kk = function(a) {
        this.Gm.add(a)
    };
    h.prototype.Ux = function(a) {
        this.Hm.add(a)
    };
    h.prototype.Nl = function(a) {
        return a && -1 !== a.bi ? this.gf * a.bi : this.Fe
    };
    h.prototype.pd = function() {
        this.fa.pd(this.Aa);
        this.Jb && this.Aa.present()
    };
    h.prototype.Xb = function() {
        this.ua && (this.hf = 1, this.fa.ff(this.m));
        this.fa.Xb(this.m);
        this.m.mx()
    };
    h.prototype.Ut = function(a) {
        a && this.wl.push(a)
    };
    h.prototype.vj = function(a) {
        a = a.toString();
        return this.$d.hasOwnProperty(a) ? this.$d[a] : null
    };
    var H = [];
    h.prototype.We = function(a) {
        var c, b;
        c = a.type.name;
        var d = null;
        if (this.ef.hasOwnProperty(c)) {
            if (d = this.ef[c], d.contains(a)) return
        } else d = H.length ? H.pop() : new fa, this.ef[c] = d;
        d.add(a);
        this.Je = !0;
        if (a.ub)
            for (c = 0, b = a.siblings.length; c < b; c++) this.We(a.siblings[c]);
        this.hm && d.Ug.push(a);
        this.gm || (this.xc++, this.trigger(Object.getPrototypeOf(a.type.ja).d.Ln, a), this.xc--)
    };
    h.prototype.Cb = function() {
        if (this.Je) {
            var a, c, b, d, k, f;
            this.hm = !0;
            b = 0;
            for (k = this.nd.length; b < k; ++b)
                for (a = this.nd[b], c = a.type, c.c.push(a), d = 0, f = c.Ba.length; d < f; ++d) c.Ba[d].c.push(a), c.Ba[d].Mg = !0;
            A(this.nd);
            this.xs();
            Za(this.ef);
            this.Je = this.hm = !1
        }
    };
    h.prototype.xs = function() {
        for (var a in this.ef) this.ef.hasOwnProperty(a) && this.Tr(this.ef[a])
    };
    h.prototype.Tr = function(a) {
        var c = a.Ve(),
            b = c[0].type,
            d, k, f, m, n, e;
        ab(b.c, a);
        b.Mg = !0;
        0 === b.c.length && (b.uo = !1);
        d = 0;
        for (k = b.Ba.length; d < k; ++d) e = b.Ba[d], ab(e.c, a), e.Mg = !0;
        d = 0;
        for (k = this.Gd.ec.length; d < k; ++d)
            if (n = this.Gd.ec[d], n.Qb.hasOwnProperty(b.index) && ab(n.Qb[b.index].Vd, a), !b.C)
                for (f = 0, m = b.Ba.length; f < m; ++f) e = b.Ba[f], n.Qb.hasOwnProperty(e.index) && ab(n.Qb[e.index].Vd, a);
        if (n = c[0].j) {
            if (n.Bc)
                for (f = n.c, d = 0, k = f.length; d < k; ++d) m = f[d], a.contains(m) && (m.lb(), n.zb.update(m, m.Zb, null), m.Zb.set(0, 0, -1, -1));
            ab(n.c, a);
            n.ni(0)
        }
        for (d = 0; d < c.length; ++d) this.Sr(c[d], b);
        a.clear();
        H.push(a);
        this.na = !0
    };
    h.prototype.Sr = function(a, c) {
        var b, d, k;
        b = 0;
        for (d = this.wl.length; b < d; ++b) this.wl[b](a);
        a.Ce && c.Io.update(a, a.Ce, null);
        (b = a.j) && b.Gg(a, !0);
        if (a.I)
            for (b = 0, d = a.I.length; b < d; ++b) k = a.I[b], k.Ff && k.Ff(), k.behavior.Em.remove(a);
        this.oq.remove(a);
        this.Gm.remove(a);
        this.Hm.remove(a);
        a.Ff && a.Ff();
        this.$d.hasOwnProperty(a.uid.toString()) && delete this.$d[a.uid.toString()];
        this.Yj--;
        100 > c.ej.length && c.ej.push(a)
    };
    h.prototype.$i = function(a, c, b, d) {
        if (a.C) {
            var k = ua(Math.random() * a.Wj.length);
            return this.$i(a.Wj[k], c, b, d)
        }
        return a.Hc ? this.De(a.Hc, c, !1, b, d, !1) : null
    };
    var N = [];
    h.prototype.De = function(a, c, b, d, k, f) {
        var m, n, e, g;
        if (!a) return null;
        var t = this.k[a[1]],
            h = t.ja.Me;
        if (this.mg && h && !t.jm || h && !this.m && 11 === a[0][11]) return null;
        var w = c;
        h || (c = null);
        var l;
        t.ej.length ? (l = t.ej.pop(), l.Qc = !0, t.ja.pa.call(l, t)) : (l = new t.ja.pa(t), l.Qc = !1);
        !b || f || this.$d.hasOwnProperty(a[2].toString()) ? l.uid = this.ci++ : l.uid = a[2];
        this.$d[l.uid.toString()] = l;
        l.Mq = this.kq++;
        l.tf = t.c.length;
        m = 0;
        for (n = this.nd.length; m < n; ++m) this.nd[m].type === t && l.tf++;
        l.zh = Hb;
        l.toString = Ib;
        e = a[3];
        if (l.Qc) Za(l.N);
        else {
            l.N = {};
            if ("undefined" !== typeof cr_is_preview)
                for (l.vp = [], l.vp.length = e.length, m = 0, n = e.length; m < n; m++) l.vp[m] = e[m][1];
            l.ab = [];
            l.ab.length = e.length
        }
        m = 0;
        for (n = e.length; m < n; m++) l.ab[m] = e[m][0];
        if (h) {
            var z = a[0];
            l.x = ja(d) ? z[0] : d;
            l.y = ja(k) ? z[1] : k;
            l.z = z[2];
            l.width = z[3];
            l.height = z[4];
            l.depth = z[5];
            l.i = z[6];
            l.opacity = z[7];
            l.Mb = z[8];
            l.Nb = z[9];
            l.Fb = z[10];
            m = z[11];
            !this.m && t.J.length && (l.Fb = m);
            l.jh = kb(l.Fb);
            this.q && lb(l, l.Fb, this.q);
            if (l.Qc) {
                m = 0;
                for (n = z[12].length; m < n; m++)
                    for (e = 0, g = z[12][m].length; e < g; e++) l.Ga[m][e] = z[12][m][e];
                l.Eb.set(0, 0, 0, 0);
                l.Ce.set(0, 0, -1, -1);
                l.Zb.set(0, 0, -1, -1);
                l.Sf.Ak(l.Eb);
                A(l.fl)
            } else {
                l.Ga = z[12].slice(0);
                m = 0;
                for (n = l.Ga.length; m < n; m++) l.Ga[m] = z[12][m].slice(0);
                l.ha = [];
                l.te = [];
                l.te.length = t.J.length;
                l.Eb = new xa(0, 0, 0, 0);
                l.Ce = new xa(0, 0, -1, -1);
                l.Zb = new xa(0, 0, -1, -1);
                l.Sf = new ya;
                l.fl = [];
                l.Ua = Lb;
                l.sz = Qb;
                l.Ec = Rb;
                l.lb = Sb;
                l.$x = Tb;
                l.Tz = Ub;
                l.vd = Vb
            }
            l.rr = !1;
            l.Xx = 0;
            l.Wx = 0;
            l.Vx = null;
            14 === z.length && (l.rr = !0, l.Xx = z[13][0], l.Wx = z[13][1], l.Vx = z[13][2]);
            m = 0;
            for (n = t.J.length; m < n; m++) l.te[m] = !0;
            l.ie = !0;
            l.gd = Wb;
            l.gd();
            l.Dr = !!l.ha.length;
            l.el = !0;
            l.jl = !0;
            t.to = !0;
            l.visible = !0;
            l.bi = -1;
            l.j = c;
            l.jd = c.c.length;
            l.hf = 0;
            "undefined" === typeof l.md && (l.md = null);
            this.na = l.ih = !0
        }
        var q;
        A(N);
        m = 0;
        for (n = t.Ba.length; m < n; m++) N.push.apply(N, t.Ba[m].Ea);
        N.push.apply(N, t.Ea);
        if (l.Qc)
            for (m = 0, n = N.length; m < n; m++) {
                var O = N[m];
                q = l.I[m];
                q.Qc = !0;
                O.behavior.pa.call(q, O, l);
                z = a[4][m];
                e = 0;
                for (g = z.length; e < g; e++) q.B[e] = z[e];
                q.Y();
                O.behavior.Em.add(l)
            } else
                for (l.I = [], m = 0, n = N.length; m < n; m++) O = N[m], q = new O.behavior.pa(O, l), q.Qc = !1, q.B = a[4][m].slice(0), q.Y(), l.I.push(q), O.behavior.Em.add(l);
        z = a[5];
        if (l.Qc)
            for (m = 0, n = z.length; m < n; m++) l.B[m] = z[m];
        else l.B = z.slice(0);
        this.nd.push(l);
        this.Je = !0;
        c && (c.bh(l, !0), 1 !== c.ae || 1 !== c.be) && (t.uo = !0);
        this.Yj++;
        if (t.ub) {
            if (l.ub = !0, l.Qc ? A(l.siblings) : l.siblings = [], !b && !f) {
                m = 0;
                for (n = t.gc.length; m < n; m++)
                    if (t.gc[m] !== t) {
                        if (!t.gc[m].Hc) return null;
                        l.siblings.push(this.De(t.gc[m].Hc, w, !1, h ? l.x : d, h ? l.y : k, !0))
                    }
                m = 0;
                for (n = l.siblings.length; m < n; m++)
                    for (l.siblings[m].siblings.push(l), e = 0; e < n; e++) m !== e && l.siblings[m].siblings.push(l.siblings[e])
            }
        } else l.ub = !1, l.siblings = null;
        l.Y();
        m = 0;
        for (n = l.I.length; m < n; m++) l.I[m].hx && l.I[m].hx();
        return l
    };
    h.prototype.Rl = function(a) {
        var c, b;
        c = 0;
        for (b = this.fa.M.length; c < b; c++) {
            var d = this.fa.M[c];
            if (nb(d.name, a)) return d
        }
        return null
    };
    h.prototype.xh = function(a) {
        a = ua(a);
        0 > a && (a = 0);
        a >= this.fa.M.length && (a = this.fa.M.length - 1);
        return this.fa.M[a]
    };
    h.prototype.nl = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].U().ga = !0
    };
    h.prototype.ii = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].ii()
    };
    h.prototype.Re = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].Re()
    };
    h.prototype.cd = function(a) {
        var c, b;
        c = 0;
        for (b = a.length; c < b; c++) a[c].cd()
    };
    h.prototype.Gk = function(a, c, b) {
        var d = a.U(),
            k, m, f, n, e = this.Ma().La.Oc,
            g, t, l;
        if (d.ga)
            for (d.ga = !1, A(d.c), k = 0, n = a.c.length; k < n; k++) f = a.c[k], f.lb(), g = f.j.Lb(c, b, !0), t = f.j.Lb(c, b, !1), f.Ec(g, t) ? d.c.push(f) : e && d.S.push(f);
        else {
            m = 0;
            l = e ? d.S : d.c;
            k = 0;
            for (n = l.length; k < n; k++) f = l[k], f.lb(), g = f.j.Lb(c, b, !0), t = f.j.Lb(c, b, !1), f.Ec(g, t) && (e ? d.c.push(f) : (d.c[m] = d.c[k], m++));
            l.length = m
        }
        a.Md();
        return d.Xl()
    };
    new ya;
    new xa(0, 0, 0, 0);
    h.prototype.xr = function(a, c) {
        if (!c) return !1;
        var b, d, k, m, f;
        b = 0;
        for (d = a.Ea.length; b < d; b++)
            if (a.Ea[b].behavior instanceof c) return !0;
        if (!a.C)
            for (b = 0, d = a.Ba.length; b < d; b++)
                for (f = a.Ba[b], k = 0, m = f.Ea.length; k < m; k++)
                    if (f.Ea[k].behavior instanceof c) return !0;
        return !1
    };
    h.prototype.wn = function(a) {
        return this.xr(a, kc.Hy)
    };
    h.prototype.xn = function(a) {
        return this.xr(a, kc.Jy)
    };
    var X = -1;
    h.prototype.trigger = function(a, c, b) {
        if (!this.fa) return !1;
        var d = this.fa.lf;
        if (!d) return !1;
        var k = !1,
            m, f, n;
        X++;
        var e = d.tl;
        f = 0;
        for (n = e.length; f < n; ++f) m = this.tr(a, c, e[f], b), k = k || m;
        m = this.tr(a, c, d, b);
        X--;
        return k || m
    };
    h.prototype.tr = function(a, c, b, d) {
        var k = !1,
            m, f, n, e;
        if (c)
            for (n = this.un(a, c, c.type.name, b, d), k = k || n, e = c.type.Ba, m = 0, f = e.length; m < f; ++m) n = this.un(a, c, e[m].name, b, d), k = k || n;
        else n = this.un(a, c, "system", b, d), k = k || n;
        return k
    };
    h.prototype.un = function(a, c, b, d, k) {
        var m, f = !1,
            n = !1,
            n = "undefined" !== typeof k,
            e = (n ? d.Xo : d.ur)[b];
        if (!e) return f;
        var g = null;
        d = 0;
        for (m = e.length; d < m; ++d)
            if (e[d].method == a) {
                g = e[d].qh;
                break
            }
        if (!g) return f;
        var t;
        n ? t = g[k] : t = g;
        if (!t) return null;
        d = 0;
        for (m = t.length; d < m; d++) a = t[d][0], k = t[d][1], n = this.yv(c, b, a, k), f = f || n;
        return f
    };
    h.prototype.yv = function(a, c, b, d) {
        var k, m, f = !1;
        this.vn++;
        var n = this.Ma().La;
        n && this.ii(n.Te);
        var e = 1 < this.vn;
        this.ii(b.Te);
        e && this.ox();
        var g = this.qk(b);
        g.La = b;
        a && (k = this.types[c].U(), k.ga = !1, A(k.c), k.c[0] = a, this.types[c].Md());
        a = !0;
        if (b.parent) {
            c = g.or;
            for (k = b.parent; k;) c.push(k), k = k.parent;
            c.reverse();
            k = 0;
            for (m = c.length; k < m; k++)
                if (!c[k].Dx()) {
                    a = !1;
                    break
                }
        }
        a && (this.nf++, b.Oc ? b.Cx(d) : b.Ta(), f = f || g.xf);
        this.kk();
        e && this.gx();
        this.cd(b.Te);
        n && this.cd(n.Te);
        this.Je && 0 === this.xc && 0 === X && !this.km && this.Cb();
        this.vn--;
        return f
    };
    h.prototype.Ll = function() {
        var a = this.Ma();
        return a.La.Za[a.Ya]
    };
    h.prototype.Iv = function() {
        var a = this.Ma();
        return a.La.Cc[a.Vb]
    };
    h.prototype.ox = function() {
        this.Sj++;
        this.Sj >= this.zm.length && this.zm.push([])
    };
    h.prototype.gx = function() {
        this.Sj--
    };
    h.prototype.gp = function() {
        return this.zm[this.Sj]
    };
    h.prototype.qk = function(a) {
        this.jj++;
        this.jj >= this.Bl.length && this.Bl.push(new Xb);
        var c = this.Ma();
        c.reset(a);
        return c
    };
    h.prototype.kk = function() {
        this.jj--
    };
    h.prototype.Ma = function() {
        return this.Bl[this.jj]
    };
    h.prototype.Vm = function(a) {
        this.tg++;
        this.tg >= this.$h.length && this.$h.push(ba({
            name: a,
            index: 0,
            va: !1
        }));
        var c = this.Ml();
        c.name = a;
        c.index = 0;
        c.va = !1;
        return c
    };
    h.prototype.Sm = function() {
        this.tg--
    };
    h.prototype.Ml = function() {
        return this.$h[this.tg]
    };
    h.prototype.ip = function(a, c) {
        for (var b, d, k, m, f, n; c;) {
            b = 0;
            for (d = c.Sc.length; b < d; b++)
                if (n = c.Sc[b], n instanceof Yb && nb(a, n.name)) return n;
            c = c.parent
        }
        b = 0;
        for (d = this.Td.length; b < d; b++)
            for (f = this.Td[b], k = 0, m = f.Ge.length; k < m; k++)
                if (n = f.Ge[k], n instanceof Yb && nb(a, n.name)) return n;
        return null
    };
    h.prototype.jp = function(a) {
        var c, b;
        c = 0;
        for (b = this.ad.length; c < b; c++)
            if (this.ad[c].Z === a) return this.ad[c];
        return null
    };
    h.prototype.wj = function(a) {
        var c, b;
        c = 0;
        for (b = this.k.length; c < b; c++)
            if (this.k[c].Z === a) return this.k[c];
        return null
    };
    h.prototype.Mv = function(a) {
        var c, b;
        c = 0;
        for (b = this.ve.length; c < b; c++)
            if (this.ve[c].Z === a) return this.ve[c];
        return null
    };
    h.prototype.tu = function(a, c) {
        this.ri = [a, c];
        this.na = !0
    };
    h.prototype.jw = function() {
        var a = this,
            c = this.en,
            b = this.Xd,
            d = this.Oj,
            k = !1;
        this.ir && (k = !0, c = "__c2_continuouspreview", this.ir = !1);
        if (c.length) {
            this.Cb();
            b = this.Hx();
            if (e() && !this.ic) l(c, b, function() {
                ha("Saved state to IndexedDB storage (" + b.length + " bytes)");
                a.Xd = b;
                a.trigger(E.prototype.d.Xk, null);
                a.Xd = "";
                k && q()
            }, function(d) {
                try {
                    localStorage.setItem("__c2save_" + c, b), ha("Saved state to WebStorage (" + b.length + " bytes)"), a.Xd = b, a.trigger(E.prototype.d.Xk, null), a.Xd = "", k && q()
                } catch (m) {
                    ha("Failed to save game state: " + d + "; " + m), a.trigger(E.prototype.d.Xn, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + c, b), ha("Saved state to WebStorage (" + b.length + " bytes)"), a.Xd = b, this.trigger(E.prototype.d.Xk, null), a.Xd = "", k && q()
            } catch (m) {
                ha("Error saving to WebStorage: " + m), a.trigger(E.prototype.d.Xn, null)
            }
            this.Oj = this.en = "";
            this.cb = null
        }
        if (d.length) {
            if (e() && !this.ic) p(d, function(c) {
                c ? (a.cb = c, ha("Loaded state from IndexedDB storage (" + a.cb.length + " bytes)")) : (a.cb = localStorage.getItem("__c2save_" + d) || "", ha("Loaded state from WebStorage (" + a.cb.length + " bytes)"));
                a.vi = !1;
                a.cb || (a.cb = null, a.trigger(E.prototype.d.Ni, null))
            }, function() {
                a.cb = localStorage.getItem("__c2save_" + d) || "";
                ha("Loaded state from WebStorage (" + a.cb.length + " bytes)");
                a.vi = !1;
                a.cb || (a.cb = null, a.trigger(E.prototype.d.Ni, null))
            });
            else {
                try {
                    this.cb = localStorage.getItem("__c2save_" + d) || "", ha("Loaded state from WebStorage (" + this.cb.length + " bytes)")
                } catch (f) {
                    this.cb = null
                }
                this.vi = !1;
                a.cb || (a.cb = null, a.trigger(E.prototype.d.Ni, null))
            }
            this.en = this.Oj = ""
        }
        null !== this.cb && (this.Cb(), this.Gw(this.cb) ? (this.Xd = this.cb, this.trigger(E.prototype.d.Ps, null), this.Xd = "") : a.trigger(E.prototype.d.Ni, null), this.cb = null)
    };
    h.prototype.Hx = function() {
        var a, c, d, k, m, f, n, e = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.hb.X,
                walltime: this.oe.X,
                timescale: this.Rg,
                tickcount: this.Qg,
                execcount: this.nf,
                next_uid: this.ci,
                running_layout: this.fa.Z,
                start_time_offset: Date.now() - this.Ck
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
        for (c = this.k.length; a < c; a++)
            if (m = this.k[a], !m.C && !this.wn(m)) {
                f = {
                    instances: []
                };
                Xa(m.N) && (f.ex = b(m.N));
                d = 0;
                for (k = m.c.length; d < k; d++) f.instances.push(this.dn(m.c[d]));
                e.types[m.Z.toString()] = f
            }
        a = 0;
        for (c = this.ad.length; a < c; a++) d = this.ad[a], e.layouts[d.Z.toString()] = d.Ob();
        k = e.events.groups;
        a = 0;
        for (c = this.ve.length; a < c; a++) d = this.ve[a], k[d.Z.toString()] = this.Bh[d.Ah].bg;
        c = e.events.cnds;
        for (n in this.Be) this.Be.hasOwnProperty(n) && (a = this.Be[n], Xa(a.N) && (c[n] = {
            ex: b(a.N)
        }));
        c = e.events.acts;
        for (n in this.ue) this.ue.hasOwnProperty(n) && (a = this.ue[n], Xa(a.N) && (c[n] = {
            ex: b(a.N)
        }));
        c = e.events.vars;
        for (n in this.Vg) this.Vg.hasOwnProperty(n) && (a = this.Vg[n], a.Gj || a.parent && !a.Nh || (c[n] = a.data));
        e.system = this.Gd.Ob();
        return JSON.stringify(e)
    };
    h.prototype.Pq = function() {
        var a, c, b, d, k, m;
        this.$d = {};
        a = 0;
        for (c = this.k.length; a < c; a++)
            if (b = this.k[a], !b.C)
                for (d = 0, k = b.c.length; d < k; d++) m = b.c[d], this.$d[m.uid.toString()] = m
    };
    h.prototype.Gw = function(a) {
        var c;
        try {
            c = JSON.parse(a)
        } catch (b) {
            return !1
        }
        if (!c.c2save || 1 < c.version) return !1;
        this.Gh = !0;
        a = c.rt;
        this.hb.reset();
        this.hb.X = a.time;
        this.oe.reset();
        this.oe.X = a.walltime || 0;
        this.Rg = a.timescale;
        this.Qg = a.tickcount;
        this.nf = a.execcount;
        this.Ck = Date.now() - a.start_time_offset;
        var d = a.running_layout;
        if (d !== this.fa.Z)
            if (d = this.jp(d)) this.Ro(d);
            else return;
        var k, m, f, n, e, g, t;
        g = c.types;
        for (m in g)
            if (g.hasOwnProperty(m) && (n = this.wj(parseInt(m, 10))) && !n.C && !this.wn(n)) {
                g[m].ex ? n.N = g[m].ex : Za(n.N);
                e = n.c;
                f = g[m].instances;
                d = 0;
                for (k = ra(e.length, f.length); d < k; d++) this.Pj(e[d], f[d]);
                d = f.length;
                for (k = e.length; d < k; d++) this.We(e[d]);
                d = e.length;
                for (k = f.length; d < k; d++) {
                    e = null;
                    if (n.ja.Me && (e = this.fa.uj(f[d].w.l), !e)) continue;
                    e = this.De(n.Hc, e, !1, 0, 0, !0);
                    this.Pj(e, f[d])
                }
                n.Mg = !0
            }
        this.Cb();
        this.Pq();
        k = c.layouts;
        for (m in k) k.hasOwnProperty(m) && (d = this.jp(parseInt(m, 10))) && d.mc(k[m]);
        k = c.events.groups;
        for (m in k) k.hasOwnProperty(m) && (d = this.Mv(parseInt(m, 10))) && this.Bh[d.Ah] && this.Bh[d.Ah].$q(k[m]);
        d = c.events.cnds;
        for (m in this.Be) this.Be.hasOwnProperty(m) && (d.hasOwnProperty(m) ? this.Be[m].N = d[m].ex : this.Be[m].N = {});
        d = c.events.acts;
        for (m in this.ue) this.ue.hasOwnProperty(m) && (d.hasOwnProperty(m) ? this.ue[m].N = d[m].ex : this.ue[m].N = {});
        d = c.events.vars;
        for (m in d) d.hasOwnProperty(m) && this.Vg.hasOwnProperty(m) && (this.Vg[m].data = d[m]);
        this.ci = a.next_uid;
        this.Gh = !1;
        d = 0;
        for (k = this.nj.length; d < k; ++d) e = this.nj[d], this.trigger(Object.getPrototypeOf(e.type.ja).d.Of, e);
        A(this.nj);
        this.Gd.mc(c.system);
        d = 0;
        for (k = this.k.length; d < k; d++)
            if (n = this.k[d], !n.C && !this.wn(n))
                for (c = 0, m = n.c.length; c < m; c++) {
                    e = n.c[c];
                    if (n.ub)
                        for (g = e.zh(), A(e.siblings), a = 0, f = n.gc.length; a < f; a++) t = n.gc[a], n !== t && e.siblings.push(t.c[g]);
                    e.Jd && e.Jd();
                    if (e.I)
                        for (a = 0, f = e.I.length; a < f; a++) g = e.I[a], g.Jd && g.Jd()
                }
        return this.na = !0
    };
    h.prototype.dn = function(a, c) {
        var d, k, m, f, n;
        f = a.type;
        m = f.ja;
        var e = {};
        c ? e.c2 = !0 : e.uid = a.uid;
        Xa(a.N) && (e.ex = b(a.N));
        if (a.ab && a.ab.length)
            for (e.ivs = {}, d = 0, k = a.ab.length; d < k; d++) e.ivs[a.type.dm[d].toString()] = a.ab[d];
        if (m.Me) {
            m = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.j.Z,
                zi: a.vd()
            };
            0 !== a.i && (m.a = a.i);
            1 !== a.opacity && (m.o = a.opacity);
            .5 !== a.Mb && (m.hX = a.Mb);
            .5 !== a.Nb && (m.hY = a.Nb);
            0 !== a.Fb && (m.bm = a.Fb);
            a.visible || (m.v = a.visible);
            a.ih || (m.ce = a.ih); - 1 !== a.bi && (m.mts = a.bi);
            if (f.J.length)
                for (m.fx = [], d = 0, k = f.J.length; d < k; d++) n = f.J[d], m.fx.push({
                    name: n.name,
                    active: a.te[n.index],
                    params: a.Ga[n.index]
                });
            e.w = m
        }
        if (a.I && a.I.length)
            for (e.behs = {}, d = 0, k = a.I.length; d < k; d++) f = a.I[d], f.Ob && (e.behs[f.type.Z.toString()] = f.Ob());
        a.Ob && (e.data = a.Ob());
        return e
    };
    h.prototype.Ov = function(a, c) {
        var b, d;
        b = 0;
        for (d = a.dm.length; b < d; b++)
            if (a.dm[b] === c) return b;
        return -1
    };
    h.prototype.Hv = function(a, c) {
        var b, d;
        b = 0;
        for (d = a.I.length; b < d; b++)
            if (a.I[b].type.Z === c) return b;
        return -1
    };
    h.prototype.Pj = function(a, c, b) {
        var d, k, m, f, n;
        n = a.type;
        var e = n.ja;
        if (b) {
            if (!c.c2) return
        } else a.uid = c.uid;
        c.ex ? a.N = c.ex : Za(a.N);
        if (k = c.ivs)
            for (d in k) k.hasOwnProperty(d) && (m = this.Ov(n, parseInt(d, 10)), 0 > m || m >= a.ab.length || (f = k[d], null === f && (f = NaN), a.ab[m] = f));
        if (e.Me) {
            m = c.w;
            a.j.Z !== m.l && (k = a.j, a.j = this.fa.uj(m.l), a.j ? (k.Gg(a, !0), a.j.bh(a, !0), a.Ua(), a.j.ni(0)) : (a.j = k, b || this.We(a)));
            a.x = m.x;
            a.y = m.y;
            a.width = m.w;
            a.height = m.h;
            a.jd = m.zi;
            a.i = m.hasOwnProperty("a") ? m.a : 0;
            a.opacity = m.hasOwnProperty("o") ? m.o : 1;
            a.Mb = m.hasOwnProperty("hX") ? m.hX : .5;
            a.Nb = m.hasOwnProperty("hY") ? m.hY : .5;
            a.visible = m.hasOwnProperty("v") ? m.v : !0;
            a.ih = m.hasOwnProperty("ce") ? m.ce : !0;
            a.bi = m.hasOwnProperty("mts") ? m.mts : -1;
            a.Fb = m.hasOwnProperty("bm") ? m.bm : 0;
            a.jh = kb(a.Fb);
            this.q && lb(a, a.Fb, this.q);
            a.Ua();
            if (m.hasOwnProperty("fx"))
                for (b = 0, k = m.fx.length; b < k; b++) f = n.Pl(m.fx[b].name), 0 > f || (a.te[f] = m.fx[b].active, a.Ga[f] = m.fx[b].params);
            a.gd()
        }
        if (n = c.behs)
            for (d in n) n.hasOwnProperty(d) && (b = this.Hv(a, parseInt(d, 10)), 0 > b || a.I[b].mc(n[d]));
        c.data && a.mc(c.data)
    };
    h.prototype.Yo = function(a, c, b) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(c, b)
        }, b)
    };
    h.prototype.zv = function(a, c) {
        this.Yo("data.js", function(b) {
            var d = new FileReader;
            d.onload = function(c) {
                a(c.target.result)
            };
            d.onerror = c;
            d.readAsText(b)
        }, c)
    };
    var U = [],
        Q = 0;
    h.prototype.Bm = function() {
        if (U.length && !(8 <= Q)) {
            Q++;
            var a = U.shift();
            this.wu(a.filename, a.Tx, a.Uu)
        }
    };
    h.prototype.Zo = function(a, c, b) {
        var d = this;
        U.push({
            filename: a,
            Tx: function(a) {
                Q--;
                d.Bm();
                c(a)
            },
            Uu: function(a) {
                Q--;
                d.Bm();
                b(a)
            }
        });
        this.Bm()
    };
    h.prototype.wu = function(a, c, b) {
        this.Yo(a, function(a) {
            var b = new FileReader;
            b.onload = function(a) {
                c(a.target.result)
            };
            b.readAsArrayBuffer(a)
        }, b)
    };
    h.prototype.Av = function(a, c, b) {
        var d = "",
            m = a.toLowerCase(),
            k = m.substr(m.length - 4),
            m = m.substr(m.length - 5);
        ".mp4" === k ? d = "video/mp4" : ".webm" === m ? d = "video/webm" : ".m4a" === k ? d = "audio/mp4" : ".mp3" === k && (d = "audio/mpeg");
        this.Zo(a, function(a) {
            a = URL.createObjectURL(new Blob([a], {
                type: d
            }));
            c(a)
        }, b)
    };
    h.prototype.qw = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    h.prototype.br = function(a, c) {
        this.Fj && !this.qw(c) ? this.Av(c, function(c) {
            a.src = c
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = c
    };
    h.prototype.wk = function(a, c) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = c : (a.webkitImageSmoothingEnabled = c, a.mozImageSmoothingEnabled = c, a.msImageSmoothingEnabled = c)
    };
    Zb = function(a) {
        return new h(document.getElementById(a))
    };
    $b = function(a, c) {
        return new h({
            dc: !0,
            width: a,
            height: c
        })
    };
    window.cr_createRuntime = Zb;
    window.cr_createDCRuntime = $b;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.we = !0;
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
window.cr_getSnapshot = function(h, g) {
    var e = window.cr_getC2Runtime();
    e && e.tu(h, g)
};
window.cr_sizeCanvas = function(h, g) {
    if (0 !== h && 0 !== g) {
        var e = window.cr_getC2Runtime();
        e && e.setSize(h, g)
    }
};
window.cr_setSuspended = function(h) {
    var g = window.cr_getC2Runtime();
    g && g.setSuspended(h)
};
(function() {
    function h(a, c) {
        this.b = a;
        this.lf = null;
        this.scrollX = this.b.fb / 2;
        this.scrollY = this.b.eb / 2;
        this.scale = 1;
        this.i = 0;
        this.$f = !0;
        this.name = c[0];
        this.ax = c[1];
        this.$w = c[2];
        this.width = c[1];
        this.height = c[2];
        this.yr = c[3];
        this.gr = c[4];
        this.Z = c[5];
        var b = c[6],
            d, f;
        this.M = [];
        this.Eh = [];
        d = 0;
        for (f = b.length; d < f; d++) {
            var e = new ac(this, b[d]);
            e.mq = d;
            this.M.push(e)
        }
        b = c[7];
        this.Ke = [];
        d = 0;
        for (f = b.length; d < f; d++) {
            var e = b[d],
                g = this.b.k[e[1]];
            g.Hc || (g.Hc = e);
            this.Ke.push(e); - 1 === this.Eh.indexOf(g) && this.Eh.push(g)
        }
        this.J = [];
        this.ha = [];
        this.ie = !0;
        this.Ga = [];
        d = 0;
        for (f = c[8].length; d < f; d++) this.J.push({
            id: c[8][d][0],
            name: c[8][d][1],
            Va: -1,
            dd: !1,
            Db: !0,
            index: d
        }), this.Ga.push(c[8][d][2].slice(0));
        this.gd();
        this.ki = new xa(0, 0, 1, 1);
        this.Xm = new xa(0, 0, 1, 1);
        this.Qe = {}
    }

    function g(a, c) {
        return a.jd - c.jd
    }

    function e(a, c) {
        this.ib = a;
        this.b = a.b;
        this.c = [];
        this.scale = 1;
        this.i = 0;
        this.Sd = !1;
        this.le = new xa(0, 0, 0, 0);
        this.sr = new ya;
        this.ya = this.ra = this.za = this.qa = 0;
        this.Lf = !1;
        this.pe = -1;
        this.ol = 0;
        this.name = c[0];
        this.index = c[1];
        this.Z = c[2];
        this.visible = c[3];
        this.Xc = c[4];
        this.fd = c[5];
        this.ae = c[6];
        this.be = c[7];
        this.opacity = c[8];
        this.qj = c[9];
        this.Bc = c[10];
        this.qe = c[11];
        this.Fb = c[12];
        this.Qu = c[13];
        this.jh = "source-over";
        this.Gb = this.Kb = 0;
        this.zb = null;
        this.Yd = r();
        this.ed = !0;
        this.qg = new xa(0, 0, -1, -1);
        this.qb = new xa(0, 0, -1, -1);
        this.Bc && (this.zb = new jb(this.b.fb, this.b.eb));
        this.Ed = !1;
        var b = c[14],
            d, f;
        this.mr = [];
        this.wc = [];
        this.nh = [];
        d = 0;
        for (f = b.length; d < f; d++) {
            var e = b[d],
                g = this.b.k[e[1]];
            g.Hc || (g.Hc = e, g.ru = this.index);
            this.wc.push(e); - 1 === this.ib.Eh.indexOf(g) && this.ib.Eh.push(g)
        }
        Da(this.mr, this.wc);
        this.J = [];
        this.ha = [];
        this.ie = !0;
        this.Ga = [];
        d = 0;
        for (f = c[15].length; d < f; d++) this.J.push({
            id: c[15][d][0],
            name: c[15][d][1],
            Va: -1,
            dd: !1,
            Db: !0,
            index: d
        }), this.Ga.push(c[15][d][2].slice(0));
        this.gd();
        this.ki = new xa(0, 0, 1, 1);
        this.Xm = new xa(0, 0, 1, 1)
    }

    function r() {
        return b.length ? b.pop() : []
    }

    function l(a) {
        A(a);
        b.push(a)
    }
    h.prototype.Gx = function(a) {
        var c = a.type.Z.toString();
        this.Qe.hasOwnProperty(c) || (this.Qe[c] = []);
        this.Qe[c].push(this.b.dn(a))
    };
    h.prototype.op = function() {
        var a = this.M[0];
        return !a.fd && 1 === a.opacity && !a.qj && a.visible
    };
    h.prototype.gd = function() {
        A(this.ha);
        this.ie = !0;
        var a, c, b;
        a = 0;
        for (c = this.J.length; a < c; a++) b = this.J[a], b.Db && (this.ha.push(b), b.dd || (this.ie = !1))
    };
    h.prototype.Ol = function(a) {
        var c, b, d;
        c = 0;
        for (b = this.J.length; c < b; c++)
            if (d = this.J[c], d.name === a) return d;
        return null
    };
    var p = [],
        q = !0;
    h.prototype.nn = function() {
        this.gr && (this.lf = this.b.Cl[this.gr], this.lf.yn());
        this.b.fa = this;
        this.width = this.ax;
        this.height = this.$w;
        this.scrollX = this.b.fb / 2;
        this.scrollY = this.b.eb / 2;
        var a, c, b, d, f, e, l;
        a = 0;
        for (b = this.b.k.length; a < b; a++)
            if (c = this.b.k[a], !c.C)
                for (f = c.c, c = 0, d = f.length; c < d; c++)
                    if (e = f[c], e.j) {
                        var n = e.j.mq;
                        n >= this.M.length && (n = this.M.length - 1);
                        e.j = this.M[n]; - 1 === e.j.c.indexOf(e) && e.j.c.push(e);
                        e.j.Lf = !0
                    }
        if (!q)
            for (a = 0, b = this.M.length; a < b; ++a) this.M[a].c.sort(g);
        A(p);
        this.bu();
        a = 0;
        for (b = this.M.length; a < b; a++) e = this.M[a], e.qu(), e.Rk();
        f = !1;
        if (!this.$f) {
            for (l in this.Qe)
                if (this.Qe.hasOwnProperty(l) && (c = this.b.wj(parseInt(l, 10))) && !c.C && this.b.xn(c)) {
                    d = this.Qe[l];
                    a = 0;
                    for (b = d.length; a < b; a++) {
                        e = null;
                        if (c.ja.Me && (e = this.uj(d[a].w.l), !e)) continue;
                        e = this.b.De(c.Hc, e, !1, 0, 0, !0);
                        this.b.Pj(e, d[a]);
                        f = !0;
                        p.push(e)
                    }
                    A(d)
                }
            a = 0;
            for (b = this.M.length; a < b; a++) this.M[a].c.sort(g), this.M[a].Lf = !0
        }
        f && (this.b.Cb(), this.b.Pq());
        for (a = 0; a < p.length; a++)
            if (e = p[a], e.type.ub)
                for (b = e.zh(), c = 0, d = e.type.gc.length; c < d; c++) l = e.type.gc[c], e.type !== l && (l.c.length > b ? e.siblings.push(l.c[b]) : l.Hc && (f = this.b.De(l.Hc, e.j, !0, e.x, e.y, !0), this.b.Cb(), l.Pk(), e.siblings.push(f), p.push(f)));
        a = 0;
        for (b = this.Ke.length; a < b; a++) e = this.Ke[a], c = this.b.k[e[1]], c.ub || this.b.De(this.Ke[a], null, !0);
        this.b.cf = null;
        this.b.Cb();
        if (this.b.Aa && !this.b.Ha)
            for (a = 0, b = this.b.k.length; a < b; a++) l = this.b.k[a], !l.C && l.c.length && l.nk && l.nk(this.b.Aa);
        if (this.b.Gh) Da(this.b.nj, p);
        else
            for (a = 0, b = p.length; a < b; a++) e = p[a], this.b.trigger(Object.getPrototypeOf(e.type.ja).d.Of, e);
        A(p);
        this.b.Gh || this.b.trigger(E.prototype.d.Tn, null);
        this.$f = !1
    };
    h.prototype.pu = function() {
        var a, c, b, d, f;
        c = a = 0;
        for (b = this.Ke.length; a < b; a++) d = this.Ke[a], f = this.b.k[d[1]], f.global ? f.ub || this.b.De(d, null, !0) : (this.Ke[c] = d, c++);
        Ca(this.Ke, c)
    };
    h.prototype.Rx = function() {
        this.b.Gh || this.b.trigger(E.prototype.d.Os, null);
        this.b.gm = !0;
        A(this.b.Gd.ec);
        var a, c, b, d, f, e;
        if (!this.$f)
            for (a = 0, c = this.M.length; a < c; a++)
                for (this.M[a].Bn(), f = this.M[a].c, b = 0, d = f.length; b < d; b++) e = f[b], e.type.global || this.b.xn(e.type) && this.Gx(e);
        a = 0;
        for (c = this.M.length; a < c; a++) {
            f = this.M[a].c;
            b = 0;
            for (d = f.length; b < d; b++) e = f[b], e.type.global || this.b.We(e);
            this.b.Cb();
            A(f);
            this.M[a].Lf = !0
        }
        a = 0;
        for (c = this.b.k.length; a < c; a++)
            if (f = this.b.k[a], !(f.global || f.ja.Me || f.ja.Bk || f.C)) {
                b = 0;
                for (d = f.c.length; b < d; b++) this.b.We(f.c[b]);
                this.b.Cb()
            }
        q = !1;
        this.b.gm = !1
    };
    new xa(0, 0, 0, 0);
    h.prototype.pd = function(a) {
        var c, b = a,
            d = !1,
            f = !this.b.tc;
        f && (this.b.Nj || (this.b.Nj = document.createElement("canvas"), c = this.b.Nj, c.width = this.b.F, c.height = this.b.D, this.b.Lp = c.getContext("2d"), d = !0), c = this.b.Nj, b = this.b.Lp, c.width !== this.b.F && (c.width = this.b.F, d = !0), c.height !== this.b.D && (c.height = this.b.D, d = !0), d && this.b.wk(b, this.b.xa));
        b.globalAlpha = 1;
        b.globalCompositeOperation = "source-over";
        this.b.Ho && !this.op() && b.clearRect(0, 0, this.b.F, this.b.D);
        var e, g, d = 0;
        for (e = this.M.length; d < e; d++) g = this.M[d], g.visible && 0 < g.opacity && 11 !== g.Fb && (g.c.length || !g.fd) ? g.pd(b) : g.Rk();
        f && a.drawImage(c, 0, 0, this.b.width, this.b.height)
    };
    h.prototype.ff = function(a) {
        a.Zq(!0);
        this.b.Ra || (this.b.Ra = a.Fc(this.b.F, this.b.D, this.b.xa));
        if (this.b.Ra.bf !== this.b.F || this.b.Ra.$e !== this.b.D) a.deleteTexture(this.b.Ra), this.b.Ra = a.Fc(this.b.F, this.b.D, this.b.xa);
        a.Rc(this.b.Ra);
        this.b.tc || a.ge(this.b.F, this.b.D);
        var c, b;
        for (c = this.M.length - 1; 0 <= c; --c) b = this.M[c], b.visible && 1 === b.opacity && b.ie && 0 === b.Fb && (b.c.length || !b.fd) ? b.ff(a) : b.Rk();
        a.Zq(!1)
    };
    h.prototype.Xb = function(a) {
        var c = 0 < this.ha.length || this.b.Tg || !this.b.tc || this.b.ua;
        if (c) {
            this.b.Ra || (this.b.Ra = a.Fc(this.b.F, this.b.D, this.b.xa));
            if (this.b.Ra.bf !== this.b.F || this.b.Ra.$e !== this.b.D) a.deleteTexture(this.b.Ra), this.b.Ra = a.Fc(this.b.F, this.b.D, this.b.xa);
            a.Rc(this.b.Ra);
            this.b.tc || a.ge(this.b.F, this.b.D)
        } else this.b.Ra && (a.Rc(null), a.deleteTexture(this.b.Ra), this.b.Ra = null);
        this.b.Ho && !this.op() && a.clear(0, 0, 0, 0);
        var b, d, f;
        b = 0;
        for (d = this.M.length; b < d; b++) f = this.M[b], f.visible && 0 < f.opacity && (f.c.length || !f.fd) ? f.Xb(a) : f.Rk();
        c && (0 === this.ha.length || 1 === this.ha.length && this.b.tc ? (1 === this.ha.length ? (c = this.ha[0].index, a.cc(this.ha[0].Va), a.Kg(null, 1 / this.b.F, 1 / this.b.D, 0, 0, 1, 1, this.scale, this.i, 0, 0, this.b.F / 2, this.b.D / 2, this.b.hb.X, this.Ga[c]), a.ok(this.ha[0].Va) && (this.b.na = !0)) : a.cc(0), this.b.tc || a.ge(this.b.width, this.b.height), a.Rc(null), a.Xq(!1), a.Hf(1), a.qc(this.b.Ra), a.Vq(), a.Fd(), a.hd(), c = this.b.width / 2, b = this.b.height / 2, a.ji(-c, b, c, b, c, -b, -c, -b), a.qc(null), a.Xq(!0)) : this.Ym(a, null, null, null))
    };
    h.prototype.yh = function() {
        return 0 < this.ha.length || this.b.Tg || !this.b.tc || this.b.ua ? this.b.Ra : null
    };
    h.prototype.kp = function() {
        var a = this.M[0].Kc(),
            c, b, d;
        c = 1;
        for (b = this.M.length; c < b; c++) d = this.M[c], (0 !== d.ae || 0 !== d.be) && d.Kc() < a && (a = d.Kc());
        return a
    };
    h.prototype.Uq = function(a) {
        if (!this.yr) {
            var c = 1 / this.kp() * this.b.F / 2;
            a > this.width - c && (a = this.width - c);
            a < c && (a = c)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.na = !0)
    };
    h.prototype.gn = function(a) {
        if (!this.yr) {
            var c = 1 / this.kp() * this.b.D / 2;
            a > this.height - c && (a = this.height - c);
            a < c && (a = c)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.na = !0)
    };
    h.prototype.bu = function() {
        this.Uq(this.scrollX);
        this.gn(this.scrollY)
    };
    h.prototype.Ym = function(a, c, b, d) {
        var f = b ? b.ha : c ? c.ha : this.ha,
            e = 1,
            g = 0,
            n = 0,
            t = 0,
            l = this.b.F,
            h = this.b.D;
        b ? (e = b.j.Kc(), g = b.j.tb(), n = b.j.qa, t = b.j.ra, l = b.j.za, h = b.j.ya) : c && (e = c.Kc(), g = c.tb(), n = c.qa, t = c.ra, l = c.za, h = c.ya);
        var q = this.b.Jl,
            r, p, x, D, H = 0,
            N = 1,
            X, U, Q = this.b.F,
            u = this.b.D,
            I = Q / 2,
            ca = u / 2,
            L = c ? c.ki : this.ki,
            J = c ? c.Xm : this.Xm,
            K = 0,
            y = 0,
            M = 0,
            C = 0,
            R = Q,
            sa = Q,
            S = u,
            la = u,
            aa = x = 0;
        D = b ? b.j.tb() : 0;
        if (b) {
            r = 0;
            for (p = f.length; r < p; r++) x += a.Sv(f[r].Va), aa += a.Tv(f[r].Va);
            C = b.Eb;
            K = c.Mc(C.left, C.top, !0);
            M = c.Mc(C.left, C.top, !1);
            R = c.Mc(C.right, C.bottom, !0);
            S = c.Mc(C.right, C.bottom, !1);
            0 !== D && (r = c.Mc(C.right, C.top, !0), p = c.Mc(C.right, C.top, !1), y = c.Mc(C.left, C.bottom, !0), C = c.Mc(C.left, C.bottom, !1), D = Math.min(K, R, r, y), R = Math.max(K, R, r, y), K = D, D = Math.min(M, S, p, C), S = Math.max(M, S, p, C), M = D);
            K -= x;
            M -= aa;
            R += x;
            S += aa;
            J.left = K / Q;
            J.top = 1 - M / u;
            J.right = R / Q;
            J.bottom = 1 - S / u;
            y = K = ua(K);
            C = M = ua(M);
            sa = R = va(R);
            la = S = va(S);
            y -= x;
            C -= aa;
            sa += x;
            la += aa;
            0 > K && (K = 0);
            0 > M && (M = 0);
            R > Q && (R = Q);
            S > u && (S = u);
            0 > y && (y = 0);
            0 > C && (C = 0);
            sa > Q && (sa = Q);
            la > u && (la = u);
            L.left = K / Q;
            L.top = 1 - M / u;
            L.right = R / Q;
            L.bottom = 1 - S / u
        } else L.left = J.left = 0, L.top = J.top = 0, L.right = J.right = 1, L.bottom = J.bottom = 1;
        aa = b && (a.hi(f[0].Va) || 0 !== x || 0 !== aa || 1 !== b.opacity || b.type.ja.hq) || c && !b && 1 !== c.opacity;
        a.Vq();
        if (aa) {
            q[H] || (q[H] = a.Fc(Q, u, this.b.xa));
            if (q[H].bf !== Q || q[H].$e !== u) a.deleteTexture(q[H]), q[H] = a.Fc(Q, u, this.b.xa);
            a.cc(0);
            a.Rc(q[H]);
            U = la - C;
            a.clearRect(y, u - C - U, sa - y, U);
            b ? b.Xb(a) : (a.qc(this.b.bb), a.Hf(c.opacity), a.Fd(), a.translate(-I, -ca), a.hd(), a.Dd(K, S, R, S, R, M, K, M, L));
            J.left = J.top = 0;
            J.right = J.bottom = 1;
            b && (D = L.top, L.top = L.bottom, L.bottom = D);
            H = 1;
            N = 0
        }
        a.Hf(1);
        x = f.length - 1;
        var Ja = a.Um(f[x].Va) || !c && !b && !this.b.tc;
        r = D = 0;
        for (p = f.length; r < p; r++) {
            q[H] || (q[H] = a.Fc(Q, u, this.b.xa));
            if (q[H].bf !== Q || q[H].$e !== u) a.deleteTexture(q[H]), q[H] = a.Fc(Q, u, this.b.xa);
            a.cc(f[r].Va);
            D = f[r].index;
            a.ok(f[r].Va) && (this.b.na = !0);
            0 != r || aa ? (a.Kg(d, 1 / Q, 1 / u, J.left, J.top, J.right, J.bottom, e, g, n, t, (n + l) / 2, (t + h) / 2, this.b.hb.X, b ? b.Ga[D] : c ? c.Ga[D] : this.Ga[D]), a.qc(null), r !== x || Ja ? (a.Rc(q[H]), U = la - C, X = u - C - U, a.clearRect(y, X, sa - y, U)) : (b ? a.Se(b.Kb, b.Gb) : c && a.Se(c.Kb, c.Gb), a.Rc(d)), a.qc(q[N]), a.Fd(), a.translate(-I, -ca), a.hd(), a.Dd(K, S, R, S, R, M, K, M, L), r !== x || Ja || a.qc(null)) : (a.Rc(q[H]), U = la - C, X = u - C - U, a.clearRect(y, X, sa - y, U), b ? (b.Fa && b.Fa.A ? (X = b.Fa.A, N = 1 / X.width, X = 1 / X.height) : (N = 1 / b.width, X = 1 / b.height), a.Kg(d, N, X, J.left, J.top, J.right, J.bottom, e, g, n, t, (n + l) / 2, (t + h) / 2, this.b.hb.X, b.Ga[D]), b.Xb(a)) : (a.Kg(d, 1 / Q, 1 / u, 0, 0, 1, 1, e, g, n, t, (n + l) / 2, (t + h) / 2, this.b.hb.X, c ? c.Ga[D] : this.Ga[D]), a.qc(c ? this.b.bb : this.b.Ra), a.Fd(), a.translate(-I, -ca), a.hd(), a.Dd(K, S, R, S, R, M, K, M, L)), J.left = J.top = 0, J.right = J.bottom = 1, b && !Ja && (D = S, S = M, M = D));
            H = 0 === H ? 1 : 0;
            N = 0 === H ? 1 : 0
        }
        Ja && (a.cc(0), b ? a.Se(b.Kb, b.Gb) : c ? a.Se(c.Kb, c.Gb) : this.b.tc || (a.ge(this.b.width, this.b.height), I = this.b.width / 2, ca = this.b.height / 2, M = K = 0, R = this.b.width, S = this.b.height), a.Rc(d), a.qc(q[N]), a.Fd(), a.translate(-I, -ca), a.hd(), b && 1 === f.length && !aa ? a.Dd(K, M, R, M, R, S, K, S, L) : a.Dd(K, S, R, S, R, M, K, M, L), a.qc(null))
    };
    h.prototype.uj = function(a) {
        var c, b;
        c = 0;
        for (b = this.M.length; c < b; c++)
            if (this.M[c].Z === a) return this.M[c];
        return null
    };
    h.prototype.Ob = function() {
        var a, c, b, d = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.i,
            w: this.width,
            h: this.height,
            fv: this.$f,
            persist: this.Qe,
            fx: [],
            layers: {}
        };
        a = 0;
        for (c = this.J.length; a < c; a++) b = this.J[a], d.fx.push({
            name: b.name,
            active: b.Db,
            params: this.Ga[b.index]
        });
        a = 0;
        for (c = this.M.length; a < c; a++) b = this.M[a], d.layers[b.Z.toString()] = b.Ob();
        return d
    };
    h.prototype.mc = function(a) {
        var c, b, d, f;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.i = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Qe = a.persist;
        "undefined" !== typeof a.fv && (this.$f = a.fv);
        var e = a.fx;
        c = 0;
        for (b = e.length; c < b; c++)
            if (d = this.Ol(e[c].name)) d.Db = e[c].active, this.Ga[d.index] = e[c].params;
        this.gd();
        c = a.layers;
        for (f in c) c.hasOwnProperty(f) && (a = this.uj(parseInt(f, 10))) && a.mc(c[f])
    };
    Jb = h;
    e.prototype.gd = function() {
        A(this.ha);
        this.ie = !0;
        var a, c, b;
        a = 0;
        for (c = this.J.length; a < c; a++) b = this.J[a], b.Db && (this.ha.push(b), b.dd || (this.ie = !1))
    };
    e.prototype.Ol = function(a) {
        var c, b, d;
        c = 0;
        for (b = this.J.length; c < b; c++)
            if (d = this.J[c], d.name === a) return d;
        return null
    };
    e.prototype.qu = function() {
        var a, c, b, d, f, e;
        c = a = 0;
        for (b = this.wc.length; a < b; a++) {
            d = this.wc[a];
            f = this.b.k[d[1]];
            e = this.b.xn(f);
            f = !0;
            if (!e || this.ib.$f) {
                d = this.b.De(d, this, !0);
                if (!d) continue;
                p.push(d);
                d.type.global && (f = !1, this.nh.push(d.uid))
            }
            f && (this.wc[c] = this.wc[a], c++)
        }
        this.wc.length = c;
        this.b.Cb();
        !this.b.m && this.J.length && (this.Fb = this.Qu);
        this.jh = kb(this.Fb);
        this.b.q && lb(this, this.Fb, this.b.q);
        this.ed = !0
    };
    e.prototype.Gg = function(a, c) {
        var b = Fa(this.c, a);
        0 > b || (c && this.Bc && a.Zb && a.Zb.right >= a.Zb.left && (a.lb(), this.zb.update(a, a.Zb, null), a.Zb.set(0, 0, -1, -1)), b === this.c.length - 1 ? this.c.pop() : (Aa(this.c, b), this.ni(b)), this.ed = !0)
    };
    e.prototype.bh = function(a, c) {
        a.jd = this.c.length;
        this.c.push(a);
        c && this.Bc && a.Zb && a.Ua();
        this.ed = !0
    };
    e.prototype.lx = function(a) {
        this.c.unshift(a);
        this.ni(0)
    };
    e.prototype.Mw = function(a, c, b) {
        var d = a.vd();
        c = c.vd();
        Aa(this.c, d);
        d < c && c--;
        b && c++;
        c === this.c.length ? this.c.push(a) : this.c.splice(c, 0, a);
        this.ni(d < c ? d : c)
    };
    e.prototype.ni = function(a) {
        -1 === this.pe ? this.pe = a : a < this.pe && (this.pe = a);
        this.ed = this.Lf = !0
    };
    e.prototype.Bn = function() {
        if (this.Lf) {
            -1 === this.pe && (this.pe = 0);
            var a, c, b;
            if (this.Bc)
                for (a = this.pe, c = this.c.length; a < c; ++a) b = this.c[a], b.jd = a, this.zb.Jw(b.Zb);
            else
                for (a = this.pe, c = this.c.length; a < c; ++a) this.c[a].jd = a;
            this.Lf = !1;
            this.pe = -1
        }
    };
    e.prototype.Kc = function(a) {
        return this.Pv() * (this.b.tc || a ? this.b.dh : 1)
    };
    e.prototype.Pv = function() {
        return (this.scale * this.ib.scale - 1) * this.qe + 1
    };
    e.prototype.tb = function() {
        return this.Sd ? 0 : Ma(this.ib.i + this.i)
    };
    var b = [],
        d = [],
        f = [];
    e.prototype.Tl = function() {
        this.Bn();
        this.zb.Nq(this.qa, this.ra, this.za, this.ya, f);
        if (!f.length) return r();
        if (1 === f.length) {
            var a = r();
            Da(a, f[0]);
            A(f);
            return a
        }
        for (var c = !0; 1 < f.length;) {
            for (var a = f, b = void 0, m = void 0, e = void 0, g = void 0, h = void 0, b = 0, m = a.length; b < m - 1; b += 2) {
                var e = a[b],
                    g = a[b + 1],
                    h = r(),
                    n = e,
                    t = g,
                    q = h,
                    p = 0,
                    F = 0,
                    G = 0,
                    v = n.length,
                    x = t.length,
                    D = void 0,
                    H = void 0;
                for (q.length = v + x; p < v && F < x; ++G) D = n[p], H = t[F], D.jd < H.jd ? (q[G] = D, ++p) : (q[G] = H, ++F);
                for (; p < v; ++p, ++G) q[G] = n[p];
                for (; F < x; ++F, ++G) q[G] = t[F];
                c || (l(e), l(g));
                d.push(h)
            }
            1 === m % 2 && (c ? (e = r(), Da(e, a[m - 1]), d.push(e)) : d.push(a[m - 1]));
            Da(a, d);
            A(d);
            c = !1
        }
        a = f[0];
        A(f);
        return a
    };
    e.prototype.pd = function(a) {
        this.Ed = this.qj || 1 !== this.opacity || 0 !== this.Fb;
        var c = this.b.canvas,
            b = a,
            d = !1;
        this.Ed && (this.b.Mj || (this.b.Mj = document.createElement("canvas"), c = this.b.Mj, c.width = this.b.F, c.height = this.b.D, this.b.Kp = c.getContext("2d"), d = !0), c = this.b.Mj, b = this.b.Kp, c.width !== this.b.F && (c.width = this.b.F, d = !0), c.height !== this.b.D && (c.height = this.b.D, d = !0), d && this.b.wk(b, this.b.xa), this.fd && b.clearRect(0, 0, this.b.F, this.b.D));
        b.globalAlpha = 1;
        b.globalCompositeOperation = "source-over";
        this.fd || (b.fillStyle = "rgb(" + this.Xc[0] + "," + this.Xc[1] + "," + this.Xc[2] + ")", b.fillRect(0, 0, this.b.F, this.b.D));
        b.save();
        this.Sd = !0;
        var d = this.Lb(0, 0, !0, !0),
            f = this.Lb(0, 0, !1, !0);
        this.Sd = !1;
        this.b.bd && (d = Math.round(d), f = Math.round(f));
        this.sk(d, f, b);
        var e = this.Kc();
        b.scale(e, e);
        b.translate(-d, -f);
        this.Bc ? (this.qb.left = this.zb.Tb(this.qa), this.qb.top = this.zb.Ub(this.ra), this.qb.right = this.zb.Tb(this.za), this.qb.bottom = this.zb.Ub(this.ya), this.ed || !this.qb.ph(this.qg) ? (l(this.Yd), d = this.Tl(), this.ed = !1, this.qg.kh(this.qb)) : d = this.Yd) : d = this.c;
        for (var g, n = null, f = 0, e = d.length; f < e; ++f) g = d[f], g !== n && (this.Lu(g, b), n = g);
        this.Bc && (this.Yd = d);
        b.restore();
        this.Ed && (a.globalCompositeOperation = this.jh, a.globalAlpha = this.opacity, a.drawImage(c, 0, 0))
    };
    e.prototype.Lu = function(a, c) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.lb();
            var b = a.Eb;
            b.right < this.qa || b.bottom < this.ra || b.left > this.za || b.top > this.ya || (c.globalCompositeOperation = a.jh, a.pd(c))
        }
    };
    e.prototype.Rk = function() {
        this.Sd = !0;
        var a = this.Lb(0, 0, !0, !0),
            c = this.Lb(0, 0, !1, !0);
        this.Sd = !1;
        this.b.bd && (a = Math.round(a), c = Math.round(c));
        this.sk(a, c, null)
    };
    e.prototype.sk = function(a, c, b) {
        var d = this.Kc();
        this.qa = a;
        this.ra = c;
        this.za = a + 1 / d * this.b.F;
        this.ya = c + 1 / d * this.b.D;
        this.qa > this.za && (a = this.qa, this.qa = this.za, this.za = a);
        this.ra > this.ya && (a = this.ra, this.ra = this.ya, this.ya = a);
        a = this.tb();
        0 !== a && (b && (b.translate(this.b.F / 2, this.b.D / 2), b.rotate(-a), b.translate(this.b.F / -2, this.b.D / -2)), this.le.set(this.qa, this.ra, this.za, this.ya), this.le.offset((this.qa + this.za) / -2, (this.ra + this.ya) / -2), this.sr.er(this.le, a), this.sr.Co(this.le), this.le.offset((this.qa +
            this.za) / 2, (this.ra + this.ya) / 2), this.qa = this.le.left, this.ra = this.le.top, this.za = this.le.right, this.ya = this.le.bottom)
    };
    e.prototype.ff = function(a) {
        if (this.Ed = this.qj) {
            this.b.bb || (this.b.bb = a.Fc(this.b.F, this.b.D, this.b.xa));
            if (this.b.bb.bf !== this.b.F || this.b.bb.$e !== this.b.D) a.deleteTexture(this.b.bb), this.b.bb = a.Fc(this.b.F, this.b.D, this.b.xa);
            a.Rc(this.b.bb)
        }
        this.Sd = !0;
        var c = this.Lb(0, 0, !0, !0),
            b = this.Lb(0, 0, !1, !0);
        this.Sd = !1;
        this.b.bd && (c = Math.round(c), b = Math.round(b));
        this.sk(c, b, null);
        c = this.Kc();
        a.Fd();
        a.scale(c, c);
        a.an(-this.tb());
        a.translate((this.qa + this.za) / -2, (this.ra + this.ya) / -2);
        a.hd();
        this.Bc ? (this.qb.left = this.zb.Tb(this.qa), this.qb.top = this.zb.Ub(this.ra), this.qb.right = this.zb.Tb(this.za), this.qb.bottom = this.zb.Ub(this.ya), this.ed || !this.qb.ph(this.qg) ? (l(this.Yd), c = this.Tl(), this.ed = !1, this.qg.kh(this.qb)) : c = this.Yd) : c = this.c;
        for (var d, f = null, b = c.length - 1; 0 <= b; --b) d = c[b], d !== f && (this.Nu(c[b], a), f = d);
        this.Bc && (this.Yd = c);
        this.fd || (this.ol = this.b.hf++, a.xk(this.ol), a.Wq(1, 1, 1), a.cp(), a.xx())
    };
    e.prototype.Xb = function(a) {
        var c = 0,
            b = 0;
        if (this.Ed = this.qj || 1 !== this.opacity || 0 < this.ha.length || 0 !== this.Fb) {
            this.b.bb || (this.b.bb = a.Fc(this.b.F, this.b.D, this.b.xa));
            if (this.b.bb.bf !== this.b.F || this.b.bb.$e !== this.b.D) a.deleteTexture(this.b.bb), this.b.bb = a.Fc(this.b.F, this.b.D, this.b.xa);
            a.Rc(this.b.bb);
            this.fd && a.clear(0, 0, 0, 0)
        }
        this.fd || (this.b.ua ? (a.xk(this.ol), a.Wq(this.Xc[0] / 255, this.Xc[1] / 255, this.Xc[2] / 255), a.cp(), a.Nx()) : a.clear(this.Xc[0] / 255, this.Xc[1] / 255, this.Xc[2] / 255, 1));
        this.Sd = !0;
        var d = this.Lb(0, 0, !0, !0),
            c = this.Lb(0, 0, !1, !0);
        this.Sd = !1;
        this.b.bd && (d = Math.round(d), c = Math.round(c));
        this.sk(d, c, null);
        d = this.Kc();
        a.Fd();
        a.scale(d, d);
        a.an(-this.tb());
        a.translate((this.qa + this.za) / -2, (this.ra + this.ya) / -2);
        a.hd();
        this.Bc ? (this.qb.left = this.zb.Tb(this.qa), this.qb.top = this.zb.Ub(this.ra), this.qb.right = this.zb.Tb(this.za), this.qb.bottom = this.zb.Ub(this.ya), this.ed || !this.qb.ph(this.qg) ? (l(this.Yd), c = this.Tl(), this.ed = !1, this.qg.kh(this.qb)) : c = this.Yd) : c = this.c;
        var f, e, g = null,
            b = 0;
        for (f = c.length; b < f; ++b) e = c[b], e !== g && (this.Mu(c[b], a), g = e);
        this.Bc && (this.Yd = c);
        this.Ed && (c = this.ha.length ? this.ha[0].Va : 0, b = this.ha.length ? this.ha[0].index : 0, 0 === this.ha.length || 1 === this.ha.length && !a.Um(c) && 1 === this.opacity ? (1 === this.ha.length ? (a.cc(c), a.Kg(this.ib.yh(), 1 / this.b.F, 1 / this.b.D, 0, 0, 1, 1, d, this.tb(), this.qa, this.ra, (this.qa + this.za) / 2, (this.ra + this.ya) / 2, this.b.hb.X, this.Ga[b]), a.ok(c) && (this.b.na = !0)) : a.cc(0), a.Rc(this.ib.yh()), a.Hf(this.opacity), a.qc(this.b.bb), a.Se(this.Kb, this.Gb), a.Fd(), a.hd(), d = this.b.F / 2, c = this.b.D / 2, a.ji(-d, c, d, c, d, -c, -d, -c), a.qc(null)) : this.ib.Ym(a, this, null, this.ib.yh()))
    };
    e.prototype.Mu = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.lb();
            var d = a.Eb;
            d.right < this.qa || d.bottom < this.ra || d.left > this.za || d.top > this.ya || (b.xk(a.hf), a.Dr ? this.Ou(a, b) : (b.cc(0), b.Se(a.Kb, a.Gb), a.Xb(b)))
        }
    };
    e.prototype.Nu = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.lb();
            var d = a.Eb;
            d.right < this.qa || d.bottom < this.ra || d.left > this.za || d.top > this.ya || (a.hf = this.b.hf++, 0 === a.Fb && 1 === a.opacity && a.ie && a.ff && (b.xk(a.hf), a.ff(b)))
        }
    };
    e.prototype.Ou = function(a, b) {
        var d = a.ha[0].Va,
            f = a.ha[0].index,
            e = this.Kc();
        if (1 !== a.ha.length || b.Um(d) || b.nx(d) || (a.i || a.j.tb()) && b.hi(d) || 1 !== a.opacity || a.type.ja.hq) this.ib.Ym(b, this, a, this.Ed ? this.b.bb : this.ib.yh()), b.Fd(), b.scale(e, e), b.an(-this.tb()), b.translate((this.qa + this.za) / -2, (this.ra + this.ya) / -2), b.hd();
        else {
            b.cc(d);
            b.Se(a.Kb, a.Gb);
            b.ok(d) && (this.b.na = !0);
            var g = 0,
                l = 0,
                n = 0,
                t = 0;
            b.hi(d) && (t = a.Eb, g = this.Mc(t.left, t.top, !0), l = this.Mc(t.left, t.top, !1), n = this.Mc(t.right, t.bottom, !0), t = this.Mc(t.right, t.bottom, !1), g = g / windowWidth, l = 1 - l / windowHeight, n = n / windowWidth, t = 1 - t / windowHeight);
            var h;
            a.Fa && a.Fa.A ? (h = a.Fa.A, d = 1 / h.width, h = 1 / h.height) : (d = 1 / a.width, h = 1 / a.height);
            b.Kg(this.Ed ? this.b.bb : this.ib.yh(), d, h, g, l, n, t, e, this.tb(), this.qa, this.ra, (this.qa + this.za) / 2, (this.ra + this.ya) / 2, this.b.hb.X, a.Ga[f]);
            a.Xb(b)
        }
    };
    e.prototype.Lb = function(a, b, d, f) {
        var e = this.b.devicePixelRatio;
        this.b.fg && (a *= e, b *= e);
        var e = this.b.Fq,
            g = this.b.Gq,
            e = (this.ib.scrollX -
                e) * this.ae + e,
            g = (this.ib.scrollY - g) * this.be + g,
            l = e,
            n = g,
            t = 1 / this.Kc(!f);
        f ? (l -= this.b.F * t / 2, n -= this.b.D * t / 2) : (l -= this.b.width * t / 2, n -= this.b.height * t / 2);
        l += a * t;
        n += b * t;
        b = this.tb();
        0 !== b && (l -= e, n -= g, a = Math.cos(b), b = Math.sin(b), f = l * a - n * b, n = n * a + l * b, l = f + e, n += g);
        return d ? l : n
    };
    e.prototype.Mc = function(a, b, d) {
        var f = this.b.Fq,
            e = this.b.Gq,
            f = (this.ib.scrollX - f) * this.ae + f,
            g = (this.ib.scrollY - e) * this.be + e,
            e = f,
            l = g,
            n = this.tb();
        if (0 !== n) {
            a -= f;
            b -= g;
            var t = Math.cos(-n),
                n = Math.sin(-n),
                h = a * t - b * n;
            b = b * t + a * n;
            a = h + f;
            b += g
        }
        f = 1 / this.Kc(!1);
        e -= this.b.F * f / 2;
        l -= this.b.D * f / 2;
        e = (a - e) / f;
        return d ? e : (b - l) / f
    };
    e.prototype.Ob = function() {
        var a, b, d, f = {
            s: this.scale,
            a: this.i,
            vl: this.qa,
            vt: this.ra,
            vr: this.za,
            vb: this.ya,
            v: this.visible,
            bc: this.Xc,
            t: this.fd,
            px: this.ae,
            py: this.be,
            o: this.opacity,
            zr: this.qe,
            fx: [],
            cg: this.nh,
            instances: []
        };
        a = 0;
        for (b = this.J.length; a < b; a++) d = this.J[a], f.fx.push({
            name: d.name,
            active: d.Db,
            params: this.Ga[d.index]
        });
        return f
    };
    e.prototype.mc = function(a) {
        var b, d, f;
        this.scale = a.s;
        this.i = a.a;
        this.qa = a.vl;
        this.ra = a.vt;
        this.za = a.vr;
        this.ya = a.vb;
        this.visible = a.v;
        this.Xc = a.bc;
        this.fd = a.t;
        this.ae = a.px;
        this.be = a.py;
        this.opacity = a.o;
        this.qe = a.zr;
        this.nh = a.cg || [];
        Da(this.wc, this.mr);
        var e = new fa;
        b = 0;
        for (f = this.nh.length; b < f; ++b) e.add(this.nh[b]);
        d = b = 0;
        for (f = this.wc.length; b < f; ++b) e.contains(this.wc[b][2]) || (this.wc[d] = this.wc[b], ++d);
        Ca(this.wc, d);
        d = a.fx;
        b = 0;
        for (f = d.length; b < f; b++)
            if (a = this.Ol(d[b].name)) a.Db = d[b].active, this.Ga[a.index] = d[b].params;
        this.gd();
        this.c.sort(g);
        this.Lf = !0
    };
    ac = e
})();
(function() {
    function h(a, b) {
        var d, c = a.length;
        switch (c) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (d = 0; d < c; d++)
                    if (a[d] !== b[d]) return !1;
                return !0
        }
    }

    function g(a, b) {
        return a.index - b.index
    }

    function e(a) {
        var b, d, c, f;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(g);
        a.length >= w.length && (w.length = a.length + 1);
        w[a.length] || (w[a.length] = []);
        f = w[a.length];
        b = 0;
        for (d = f.length; b < d; b++)
            if (c = f[b], h(a, c)) return c;
        f.push(a);
        return a
    }

    function r(a, b) {
        this.b = a;
        this.ur = {};
        this.Xo = {};
        this.Yl = !1;
        this.rp = new fa;
        this.tl = [];
        this.cl = [];
        this.name = b[0];
        var d = b[1];
        this.Ge = [];
        var c, f;
        c = 0;
        for (f = d.length; c < f; c++) this.tp(d[c], null, this.Ge)
    }

    function l(a) {
        this.type = a;
        this.c = [];
        this.S = [];
        this.ga = !0
    }

    function p(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.W = [];
        this.Te = [];
        this.pp = this.Lk = this.tn = this.zj = this.group = this.mn = !1;
        this.Za = [];
        this.Cc = [];
        this.Sc = [];
        this.Ah = "";
        this.bg = this.zj = this.group = !1;
        this.Yi = null;
        d[1] && (this.Ah = d[1][1].toLowerCase(), this.group = !0, this.zj = !!d[1][0], this.Yi = [], this.bg = this.zj, this.b.ve.push(this), this.b.Bh[this.Ah] = this);
        this.Oc = d[2];
        this.Z = d[4];
        this.group || (this.b.Bo[this.Z.toString()] = this);
        var c = d[5];
        a = 0;
        for (b = c.length; a < b; a++) {
            var f = new bc(this, c[a]);
            f.index = a;
            this.Za.push(f);
            this.oo(f.type)
        }
        c = d[6];
        a = 0;
        for (b = c.length; a < b; a++) f = new cc(this, c[a]), f.index = a, this.Cc.push(f);
        if (8 === d.length)
            for (d = d[7], a = 0, b = d.length; a < b; a++) this.sheet.tp(d[a], this, this.Sc);
        this.Hj = !1;
        this.Za.length && (this.Hj = null == this.Za[0].type && this.Za[0].sb == E.prototype.d.Jn)
    }

    function q(a, b) {
        var d, c, f;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.ub))
            for (d = 0, c = a.gc.length; d < c; d++) f = a.gc[d], a !== f && -1 === b.indexOf(f) && b.push(f)
    }

    function b(a, b) {
        this.rc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.P = [];
        this.Ia = [];
        this.N = {};
        this.index = -1;
        this.$g = !1;
        this.sb = this.b.re(b[1]);
        this.trigger = 0 < b[3];
        this.Wo = 2 === b[3];
        this.zd = b[4];
        this.em = b[5];
        this.Cw = b[6];
        this.Z = b[7];
        this.b.Be[this.Z.toString()] = this; - 1 === b[0] ? (this.type = null, this.Ta = this.cn, this.Ze = null, this.Yc = -1) : (this.type = this.b.k[b[0]], this.Ta = this.Cw ? this.Ex : this.bn, b[2] ? (this.Ze = this.type.tj(b[2]), this.Yc = this.type.Kl(b[2])) : (this.Ze = null, this.Yc = -1), this.rc.parent && this.rc.parent.yk());
        this.Wo && (this.Ta = this.Fx);
        if (10 === b.length) {
            var d, c, f = b[9];
            d = 0;
            for (c = f.length; d < c; d++) {
                var e = new dc(this, f[d]);
                this.P.push(e)
            }
            this.Ia.length = f.length
        }
    }

    function d(a, b) {
        this.rc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.P = [];
        this.Ia = [];
        this.N = {};
        this.index = -1;
        this.$g = !1;
        this.sb = this.b.re(b[1]); - 1 === b[0] ? (this.type = null, this.Ta = this.cn, this.Ze = null, this.Yc = -1) : (this.type = this.b.k[b[0]], this.Ta = this.bn, b[2] ? (this.Ze = this.type.tj(b[2]), this.Yc = this.type.Kl(b[2])) : (this.Ze = null, this.Yc = -1));
        this.Z = b[3];
        this.b.ue[this.Z.toString()] = this;
        if (6 === b.length) {
            var d, c, f = b[5];
            d = 0;
            for (c = f.length; d < c; d++) {
                var e = new dc(this, f[d]);
                this.P.push(e)
            }
            this.Ia.length = f.length
        }
    }

    function f() {
        O++;
        z.length === O && z.push(new ec);
        return z[O]
    }

    function a(a, b) {
        this.Pc = a;
        this.rc = a.rc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.rd = null;
        this.je = 0;
        this.get = null;
        this.Jo = 0;
        this.ib = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Ei = this.If = this.Ei = this.If = this.$o = this.mf = this.Fi = null;
        this.Uc = !1;
        var d, c, f;
        switch (b[0]) {
            case 0:
            case 7:
                this.rd = new fc(this, b[1]);
                this.je = 0;
                this.get = this.Yv;
                break;
            case 1:
                this.rd = new fc(this, b[1]);
                this.je = 0;
                this.get = this.Zv;
                break;
            case 5:
                this.rd = new fc(this, b[1]);
                this.je = 0;
                this.get = this.dw;
                break;
            case 3:
            case 8:
                this.Jo = b[1];
                this.get = this.Wv;
                break;
            case 6:
                this.ib = this.b.um[b[1]];
                this.get = this.ew;
                break;
            case 9:
                this.key = b[1];
                this.get = this.bw;
                break;
            case 4:
                this.object = this.b.k[b[1]];
                this.get = this.fw;
                this.rc.oo(this.object);
                this.Pc instanceof cc ? this.rc.yk() : this.rc.parent && this.rc.parent.yk();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.C ? (this.get = this.$v, this.Uc = !0) : this.get = this.aw;
                break;
            case 11:
                this.Fi = b[1];
                this.mf = null;
                this.get = this.Xv;
                break;
            case 2:
            case 12:
                this.$o = b[1];
                this.get = this.Vv;
                break;
            case 13:
                for (this.get = this.gw, this.If = [], this.Ei = [], d = 1, c = b.length; d < c; d++) f = new dc(this.Pc, b[d]), this.If.push(f), this.Ei.push(0)
        }
    }

    function c(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.W = [];
        this.name = d[1];
        this.Gi = d[2];
        this.am = d[3];
        this.Nh = !!d[4];
        this.Gj = !!d[5];
        this.Z = d[6];
        this.b.Vg[this.Z.toString()] = this;
        this.data = this.am;
        this.parent ? (this.Df = this.Nh || this.Gj ? -1 : this.b.Px++, this.b.Xt.push(this)) : (this.Df = -1, this.b.Wt.push(this))
    }

    function k(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.W = [];
        this.Dh = null;
        this.mw = d[1];
        this.Db = !0
    }

    function m() {
        this.or = [];
        this.reset(null)
    }
    var w = [];
    r.prototype.toString = function() {
        return this.name
    };
    r.prototype.tp = function(a, b, d) {
        switch (a[0]) {
            case 0:
                a = new gc(this, b, a);
                if (a.Oc)
                    for (d.push(a), d = 0, b = a.Za.length; d < b; d++) a.Za[d].trigger && this.up(a, d);
                else a.Cp() ? this.up(a, 0) : d.push(a);
                break;
            case 1:
                a = new Yb(this, b, a);
                d.push(a);
                break;
            case 2:
                a = new hc(this, b, a), d.push(a)
        }
    };
    r.prototype.Oa = function() {
        var a, b;
        a = 0;
        for (b = this.Ge.length; a < b; a++) this.Ge[a].Oa(a < b - 1 && this.Ge[a + 1].Hj)
    };
    r.prototype.yn = function() {
        A(this.tl);
        A(this.cl);
        this.no(this);
        A(this.cl)
    };
    r.prototype.no = function(a) {
        var b, d, c, f, e = a.tl,
            m = a.cl,
            k = this.rp.Ve();
        b = 0;
        for (d = k.length; b < d; ++b) c = k[b], f = c.Dh, !c.Db || a === f || -1 < m.indexOf(f) || (m.push(f), f.no(a), e.push(f))
    };
    r.prototype.Ta = function(a) {
        this.b.Oz || (this.Yl = !0, a || (this.b.km = !0));
        var b, d;
        b = 0;
        for (d = this.Ge.length; b < d; b++) {
            var c = this.Ge[b];
            c.Ta();
            this.b.nl(c.W);
            this.b.Je && this.b.Cb()
        }
        a || (this.b.km = !1)
    };
    r.prototype.up = function(a, b) {
        a.Oc || this.b.Nk.push(a);
        var d, c, f = a.Za[b],
            e;
        f.type ? e = f.type.name : e = "system";
        var m = (d = f.Wo) ? this.Xo : this.ur;
        m[e] || (m[e] = []);
        e = m[e];
        m = f.sb;
        if (d) {
            if (f.P.length && (f = f.P[0], 1 === f.type && 2 === f.rd.type)) {
                f = f.rd.value.toLowerCase();
                d = 0;
                for (c = e.length; d < c; d++)
                    if (e[d].method == m) {
                        d = e[d].qh;
                        d[f] ? d[f].push([a, b]) : d[f] = [
                            [a, b]
                        ];
                        return
                    }
                d = {};
                d[f] = [
                    [a, b]
                ];
                e.push({
                    method: m,
                    qh: d
                })
            }
        } else {
            d = 0;
            for (c = e.length; d < c; d++)
                if (e[d].method == m) {
                    e[d].qh.push([a, b]);
                    return
                }
            T && m === T.prototype.d.Pf ? e.unshift({
                method: m,
                qh: [
                    [a, b]
                ]
            }) : e.push({
                method: m,
                qh: [
                    [a, b]
                ]
            })
        }
    };
    Kb = r;
    l.prototype.Xl = function() {
        return this.ga ? this.type.c.length : this.c.length
    };
    l.prototype.vc = function() {
        return this.ga ? this.type.c : this.c
    };
    l.prototype.Dg = function(a) {
        a && (a.b.Ma().La.Oc ? (this.ga && (A(this.c), Da(this.S, a.type.c), this.ga = !1), a = this.S.indexOf(a), -1 !== a && (this.c.push(this.S[a]), this.S.splice(a, 1))) : (this.ga = !1, A(this.c), this.c[0] = a))
    };
    tb = l;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    p.prototype.Oa = function(a) {
        var b, d = this.parent;
        if (this.group)
            for (this.Lk = !0; d;) {
                if (!d.group) {
                    this.Lk = !1;
                    break
                }
                d = d.parent
            }
        this.tn = !this.Cp() && (!this.parent || this.parent.group && this.parent.Lk);
        this.pp = !!a;
        this.Te = this.W.slice(0);
        for (d = this.parent; d;) {
            a = 0;
            for (b = d.W.length; a < b; a++) this.Vt(d.W[a]);
            d = d.parent
        }
        this.W = e(this.W);
        this.Te = e(this.Te);
        a = 0;
        for (b = this.Za.length; a < b; a++) this.Za[a].Oa();
        a = 0;
        for (b = this.Cc.length; a < b; a++) this.Cc[a].Oa();
        a = 0;
        for (b = this.Sc.length; a < b; a++) this.Sc[a].Oa(a < b - 1 && this.Sc[a + 1].Hj)
    };
    p.prototype.$q = function(a) {
        if (this.bg !== !!a) {
            this.bg = !!a;
            var b;
            a = 0;
            for (b = this.Yi.length; a < b; ++a) this.Yi[a].Br();
            0 < b && this.b.fa.lf && this.b.fa.lf.yn()
        }
    };
    p.prototype.oo = function(a) {
        q(a, this.W)
    };
    p.prototype.Vt = function(a) {
        q(a, this.Te)
    };
    p.prototype.yk = function() {
        this.mn = !0;
        this.parent && this.parent.yk()
    };
    p.prototype.Cp = function() {
        return this.Za.length ? this.Za[0].trigger : !1
    };
    p.prototype.Ta = function() {
        var a, b, d = !1,
            c = this.b,
            f = this.b.Ma();
        f.La = this;
        var e = this.Za;
        this.Hj || (f.Al = !1);
        if (this.Oc) {
            0 === e.length && (d = !0);
            f.Ya = 0;
            for (a = e.length; f.Ya < a; f.Ya++) b = e[f.Ya], b.trigger || (b = b.Ta()) && (d = !0);
            (f.xf = d) && this.tk()
        } else {
            f.Ya = 0;
            for (a = e.length; f.Ya < a; f.Ya++)
                if (b = e[f.Ya].Ta(), !b) {
                    f.xf = !1;
                    this.tn && c.Je && c.Cb();
                    return
                }
            f.xf = !0;
            this.tk()
        }
        this.Su(f)
    };
    p.prototype.Su = function(a) {
        a.xf && this.pp && (a.Al = !0);
        this.tn && this.b.Je && this.b.Cb()
    };
    p.prototype.Cx = function(a) {
        this.b.Ma().La = this;
        this.Za[a].Ta() && (this.tk(), this.b.Ma().xf = !0)
    };
    p.prototype.tk = function() {
        var a = this.b.Ma(),
            b;
        a.Vb = 0;
        for (b = this.Cc.length; a.Vb < b; a.Vb++)
            if (this.Cc[a.Vb].Ta()) return;
        this.Sq()
    };
    p.prototype.zx = function() {
        var a = this.b.Ma(),
            b;
        for (b = this.Cc.length; a.Vb < b; a.Vb++)
            if (this.Cc[a.Vb].Ta()) return;
        this.Sq()
    };
    p.prototype.Sq = function() {
        if (this.Sc.length) {
            var a, b, d, c, f = this.Sc.length - 1;
            this.b.qk(this);
            if (this.mn)
                for (a = 0, b = this.Sc.length; a < b; a++) d = this.Sc[a], (c = !this.Lk || !this.group && a < f) && this.b.Re(d.W), d.Ta(), c ? this.b.cd(d.W) : this.b.nl(d.W);
            else
                for (a = 0, b = this.Sc.length; a < b; a++) this.Sc[a].Ta();
            this.b.kk()
        }
    };
    p.prototype.Dx = function() {
        var a = this.b.Ma();
        a.La = this;
        var b = !1,
            d;
        a.Ya = 0;
        for (d = this.Za.length; a.Ya < d; a.Ya++)
            if (this.Za[a.Ya].Ta()) b = !0;
            else if (!this.Oc) return !1;
        return this.Oc ? b : !0
    };
    p.prototype.ee = function() {
        this.b.nf++;
        var a = this.b.Ma().Ya,
            b = this.b.qk(this);
        if (!this.Oc)
            for (b.Ya = a + 1, a = this.Za.length; b.Ya < a; b.Ya++)
                if (!this.Za[b.Ya].Ta()) {
                    this.b.kk();
                    return
                }
        this.tk();
        this.b.kk()
    };
    p.prototype.uw = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Za[b].type === a.type) return !1;
        return !0
    };
    gc = p;
    b.prototype.Oa = function() {
        var a, b, d;
        a = 0;
        for (b = this.P.length; a < b; a++) d = this.P[a], d.Oa(), d.Uc && (this.$g = !0)
    };
    b.prototype.Fx = function() {
        return !0
    };
    b.prototype.cn = function() {
        var a, b;
        a = 0;
        for (b = this.P.length; a < b; a++) this.Ia[a] = this.P[a].get();
        return Wa(this.sb.apply(this.b.Gd, this.Ia), this.em)
    };
    b.prototype.Ex = function() {
        var a, b;
        a = 0;
        for (b = this.P.length; a < b; a++) this.Ia[a] = this.P[a].get();
        a = this.sb.apply(this.Ze ? this.Ze : this.type, this.Ia);
        this.type.Md();
        return a
    };
    b.prototype.bn = function() {
        var a, b, d, c, f, e, m, k, g = this.type,
            l = g.U(),
            h = this.rc.Oc && !this.trigger;
        b = 0;
        var q = g.ub,
            w = g.C,
            r = g.Ud,
            z = this.Yc,
            O = -1 < z,
            p = this.$g,
            L = this.P,
            J = this.Ia,
            K = this.em,
            y = this.sb,
            M;
        if (p)
            for (b = 0, f = L.length; b < f; ++b) e = L[b], e.Uc || (J[b] = e.get(0));
        else
            for (b = 0, f = L.length; b < f; ++b) J[b] = L[b].get(0);
        if (l.ga) {
            A(l.c);
            A(l.S);
            M = g.c;
            a = 0;
            for (c = M.length; a < c; ++a) {
                k = M[a];
                if (p)
                    for (b = 0, f = L.length; b < f; ++b) e = L[b], e.Uc && (J[b] = e.get(a));
                O ? (b = 0, w && (b = k.type.Zf[r]), b = y.apply(k.I[z + b], J)) : b = y.apply(k, J);
                (m = Wa(b, K)) ? l.c.push(k): h && l.S.push(k)
            }
            g.finish && g.finish(!0);
            l.ga = !1;
            g.Md();
            return l.Xl()
        }
        d = 0;
        M = (m = h && !this.rc.uw(this)) ? l.S : l.c;
        var C = !1;
        a = 0;
        for (c = M.length; a < c; ++a) {
            k = M[a];
            if (p)
                for (b = 0, f = L.length; b < f; ++b) e = L[b], e.Uc && (J[b] = e.get(a));
            O ? (b = 0, w && (b = k.type.Zf[r]), b = y.apply(k.I[z + b], J)) : b = y.apply(k, J);
            if (Wa(b, K))
                if (C = !0, m) {
                    if (l.c.push(k), q)
                        for (b = 0, f = k.siblings.length; b < f; b++) e = k.siblings[b], e.type.U().c.push(e)
                } else {
                    M[d] = k;
                    if (q)
                        for (b = 0, f = k.siblings.length; b < f; b++) e = k.siblings[b], e.type.U().c[d] = e;
                    d++
                }
            else if (m) {
                M[d] = k;
                if (q)
                    for (b = 0, f = k.siblings.length; b < f; b++) e = k.siblings[b], e.type.U().S[d] = e;
                d++
            } else if (h && (l.S.push(k), q))
                for (b = 0, f = k.siblings.length; b < f; b++) e = k.siblings[b], e.type.U().S.push(e)
        }
        Ca(M, d);
        if (q)
            for (w = g.gc, a = 0, c = w.length; a < c; a++) k = w[a].U(), m ? Ca(k.S, d) : Ca(k.c, d);
        d = C;
        if (m && !C)
            for (a = 0, c = l.c.length; a < c; a++) {
                k = l.c[a];
                if (p)
                    for (b = 0, f = L.length; b < f; b++) e = L[b], e.Uc && (J[b] = e.get(a));
                b = O ? y.apply(k.I[z], J) : y.apply(k, J);
                if (Wa(b, K)) {
                    C = !0;
                    break
                }
            }
        g.finish && g.finish(d || h);
        return h ? C : l.Xl()
    };
    bc = b;
    d.prototype.Oa = function() {
        var a, b, d;
        a = 0;
        for (b = this.P.length; a < b; a++) d = this.P[a], d.Oa(), d.Uc && (this.$g = !0)
    };
    d.prototype.cn = function() {
        var a = this.b,
            b, d, c = this.P,
            f = this.Ia;
        b = 0;
        for (d = c.length; b < d; ++b) f[b] = c[b].get();
        return this.sb.apply(a.Gd, f)
    };
    d.prototype.bn = function() {
        var a = this.type,
            b = this.Yc,
            d = a.Ud,
            c = this.$g,
            f = this.P,
            e = this.Ia,
            m = this.sb,
            k = a.U().vc(),
            a = a.C,
            g = -1 < b,
            l, h, q, w, r, z;
        if (c)
            for (h = 0, w = f.length; h < w; ++h) r = f[h], r.Uc || (e[h] = r.get(0));
        else
            for (h = 0, w = f.length; h < w; ++h) e[h] = f[h].get(0);
        l = 0;
        for (q = k.length; l < q; ++l) {
            z = k[l];
            if (c)
                for (h = 0, w = f.length; h < w; ++h) r = f[h], r.Uc && (e[h] = r.get(l));
            g ? (h = 0, a && (h = z.type.Zf[d]), m.apply(z.I[b + h], e)) : m.apply(z, e)
        }
        return !1
    };
    cc = d;
    var z = [],
        O = -1;
    a.prototype.Oa = function() {
        var a, b;
        if (11 === this.type) this.mf = this.b.ip(this.Fi, this.rc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.If.length; a < b; a++) this.If[a].Oa();
        this.rd && this.rd.Oa()
    };
    a.prototype.Lw = function(a) {
        this.Uc || !a || a.ja.Bk || (this.Uc = !0)
    };
    a.prototype.dr = function() {
        this.Uc = !0
    };
    a.prototype.Yv = function(a) {
        this.je = a || 0;
        a = f();
        this.rd.get(a);
        O--;
        return a.data
    };
    a.prototype.Zv = function(a) {
        this.je = a || 0;
        a = f();
        this.rd.get(a);
        O--;
        return ma(a.data) ? a.data : ""
    };
    a.prototype.fw = function() {
        return this.object
    };
    a.prototype.Wv = function() {
        return this.Jo
    };
    a.prototype.dw = function(a) {
        this.je = a || 0;
        a = f();
        this.rd.get(a);
        O--;
        return a.gb() ? this.b.xh(a.data) : this.b.Rl(a.data)
    };
    a.prototype.ew = function() {
        return this.ib
    };
    a.prototype.bw = function() {
        return this.key
    };
    a.prototype.aw = function() {
        return this.index
    };
    a.prototype.$v = function(a) {
        a = a || 0;
        var b = this.Pc.type,
            d = null,
            d = b.U(),
            c = d.vc();
        if (c.length) d = c[a % c.length].type;
        else if (d.S.length) d = d.S[a % d.S.length].type;
        else if (b.c.length) d = b.c[a % b.c.length].type;
        else return 0;
        return this.index + d.lj[b.Ud]
    };
    a.prototype.Xv = function() {
        return this.mf
    };
    a.prototype.Vv = function() {
        return this.$o
    };
    a.prototype.gw = function() {
        var a, b;
        a = 0;
        for (b = this.If.length; a < b; a++) this.Ei[a] = this.If[a].get();
        return this.Ei
    };
    dc = a;
    c.prototype.Oa = function() {
        this.W = e(this.W)
    };
    c.prototype.he = function(a) {
        var b = this.b.gp();
        this.parent && !this.Nh && b ? (this.Df >= b.length && (b.length = this.Df + 1), b[this.Df] = a) : this.data = a
    };
    c.prototype.qf = function() {
        var a = this.b.gp();
        return !this.parent || this.Nh || !a || this.Gj ? this.data : this.Df >= a.length || "undefined" === typeof a[this.Df] ? this.am : a[this.Df]
    };
    c.prototype.Ta = function() {
        !this.parent || this.Nh || this.Gj || this.he(this.am)
    };
    Yb = c;
    k.prototype.toString = function() {
        return "include:" + this.Dh.toString()
    };
    k.prototype.Oa = function() {
        this.Dh = this.b.Cl[this.mw];
        this.sheet.rp.add(this);
        this.W = e(this.W);
        for (var a = this.parent; a;) a.group && a.Yi.push(this), a = a.parent;
        this.Br()
    };
    k.prototype.Ta = function() {
        this.parent && this.b.ii(this.b.k);
        this.Dh.Yl || this.Dh.Ta(!0);
        this.parent && this.b.cd(this.b.k)
    };
    k.prototype.Br = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.bg) {
                this.Db = !1;
                return
            }
            a = a.parent
        }
        this.Db = !0
    };
    hc = k;
    m.prototype.reset = function(a) {
        this.La = a;
        this.Vb = this.Ya = 0;
        A(this.or);
        this.Al = this.xf = !1
    };
    m.prototype.im = function() {
        return this.La.mn ? !0 : this.Ya < this.La.Za.length - 1 ? !!this.La.W.length : !1
    };
    Xb = m
})();
(function() {
    function h(e, b) {
        this.Pc = e;
        this.b = e.b;
        this.type = b[0];
        this.get = [this.lv, this.hv, this.uv, this.xv, this.Vu, this.vv, this.pv, this.cv, this.ov, this.tv, this.Wu, this.sv, this.dv, this.qv, this.mv, this.nv, this.iv, this.jv, this.bv, this.wv, this.rv, this.kv, this.av, this.gv][this.type];
        var d = null;
        this.Zd = this.P = this.Ia = this.sb = this.Jk = this.second = this.first = this.value = null;
        this.Yc = -1;
        this.$c = null;
        this.Fr = -1;
        this.mf = this.Fi = null;
        this.Ig = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = b[1];
                break;
            case 3:
                this.first = new fc(e, b[1]);
                break;
            case 18:
                this.first = new fc(e, b[1]);
                this.second = new fc(e, b[2]);
                this.Jk = new fc(e, b[3]);
                break;
            case 19:
                this.sb = this.b.re(b[1]);
                this.sb !== E.prototype.T.random && this.sb !== E.prototype.T.hu || this.Pc.dr();
                this.Ia = [];
                this.P = [];
                3 === b.length ? (d = b[2], this.Ia.length = d.length + 1) : this.Ia.length = 1;
                break;
            case 20:
                this.Zd = this.b.k[b[1]];
                this.Yc = -1;
                this.sb = this.b.re(b[2]);
                this.Ig = b[3];
                tc && this.sb === tc.prototype.T.Hn && this.Pc.dr();
                b[4] ? this.$c = new fc(e, b[4]) : this.$c = null;
                this.Ia = [];
                this.P = [];
                6 === b.length ? (d = b[5], this.Ia.length = d.length + 1) : this.Ia.length = 1;
                break;
            case 21:
                this.Zd = this.b.k[b[1]];
                this.Ig = b[2];
                b[3] ? this.$c = new fc(e, b[3]) : this.$c = null;
                this.Fr = b[4];
                break;
            case 22:
                this.Zd = this.b.k[b[1]];
                this.Zd.tj(b[2]);
                this.Yc = this.Zd.Kl(b[2]);
                this.sb = this.b.re(b[3]);
                this.Ig = b[4];
                b[5] ? this.$c = new fc(e, b[5]) : this.$c = null;
                this.Ia = [];
                this.P = [];
                7 === b.length ? (d = b[6], this.Ia.length = d.length + 1) : this.Ia.length = 1;
                break;
            case 23:
                this.Fi = b[1], this.mf = null
        }
        this.Pc.Lw(this.Zd);
        4 <= this.type && 17 >= this.type && (this.first = new fc(e, b[1]), this.second = new fc(e, b[2]));
        if (d) {
            var f, a;
            f = 0;
            for (a = d.length; f < a; f++) this.P.push(new fc(e, d[f]))
        }
    }

    function g() {
        ++p;
        l.length === p && l.push(new ec);
        return l[p]
    }

    function e(e, b, d) {
        var f, a;
        f = 0;
        for (a = e.length; f < a; ++f) e[f].get(d), b[f + 1] = d.data
    }

    function r(e, b) {
        this.type = e || ic.Nf;
        this.data = b || 0;
        this.Ef = null;
        this.type == ic.Nf && (this.data = Math.floor(this.data))
    }
    h.prototype.Oa = function() {
        23 === this.type && (this.mf = this.Pc.b.ip(this.Fi, this.Pc.rc.parent));
        this.first && this.first.Oa();
        this.second && this.second.Oa();
        this.Jk && this.Jk.Oa();
        this.$c && this.$c.Oa();
        if (this.P) {
            var e, b;
            e = 0;
            for (b = this.P.length; e < b; e++) this.P[e].Oa()
        }
    };
    var l = [],
        p = -1;
    h.prototype.wv = function(l) {
        var b = this.P,
            d = this.Ia;
        d[0] = l;
        l = g();
        e(b, d, l);
        --p;
        this.sb.apply(this.b.Gd, d)
    };
    h.prototype.rv = function(l) {
        var b = this.Zd,
            d = this.Ia,
            f = this.P,
            a = this.$c,
            c = this.sb,
            k = this.Pc.je,
            m = b.U(),
            h = m.vc();
        if (!h.length)
            if (m.S.length) h = m.S;
            else {
                this.Ig ? l.Pb("") : l.K(0);
                return
            }
        d[0] = l;
        l.Ef = b;
        l = g();
        e(f, d, l);
        a && (a.get(l), l.gb() && (k = l.data, h = b.c));
        --p;
        b = h.length;
        if (k >= b || k <= -b) k %= b;
        0 > k && (k += b);
        c.apply(h[k], d)
    };
    h.prototype.av = function(l) {
        var b = this.Zd,
            d = this.Ia,
            f = this.P,
            a = this.$c,
            c = this.Yc,
            k = this.sb,
            m = this.Pc.je,
            h = b.U(),
            r = h.vc();
        if (!r.length)
            if (h.S.length) r = h.S;
            else {
                this.Ig ? l.Pb("") : l.K(0);
                return
            }
        d[0] = l;
        l.Ef = b;
        l = g();
        e(f, d, l);
        a && (a.get(l), l.gb() && (m = l.data, r = b.c));
        --p;
        f = r.length;
        if (m >= f || m <= -f) m %= f;
        0 > m && (m += f);
        m = r[m];
        r = 0;
        b.C && (r = m.type.Zf[b.Ud]);
        k.apply(m.I[c + r], d)
    };
    h.prototype.kv = function(e) {
        var b = this.$c,
            d = this.Zd,
            f = this.Fr,
            a = this.Pc.je,
            c = d.U(),
            k = c.vc();
        if (!k.length)
            if (c.S.length) k = c.S;
            else {
                this.Ig ? e.Pb("") : e.K(0);
                return
            }
        if (b) {
            c = g();
            b.get(c);
            if (c.gb()) {
                a = c.data;
                k = d.c;
                0 !== k.length && (a %= k.length, 0 > a && (a += k.length));
                a = d.Ql(a);
                d = a.ab[f];
                ma(d) ? e.Pb(d) : e.r(d);
                --p;
                return
            }--p
        }
        b = k.length;
        if (a >= b || a <= -b) a %= b;
        0 > a && (a += b);
        a = k[a];
        k = 0;
        d.C && (k = a.type.lj[d.Ud]);
        d = a.ab[f + k];
        ma(d) ? e.Pb(d) : e.r(d)
    };
    h.prototype.lv = function(e) {
        e.type = ic.Nf;
        e.data = this.value
    };
    h.prototype.hv = function(e) {
        e.type = ic.Mf;
        e.data = this.value
    };
    h.prototype.uv = function(e) {
        e.type = ic.String;
        e.data = this.value
    };
    h.prototype.xv = function(e) {
        this.first.get(e);
        e.gb() && (e.data = -e.data)
    };
    h.prototype.Vu = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data += b.data, b.hg() && e.ug());
        --p
    };
    h.prototype.vv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data -= b.data, b.hg() && e.ug());
        --p
    };
    h.prototype.pv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data *= b.data, b.hg() && e.ug());
        --p
    };
    h.prototype.cv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data /= b.data, e.ug());
        --p
    };
    h.prototype.ov = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data %= b.data, b.hg() && e.ug());
        --p
    };
    h.prototype.tv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data = Math.pow(e.data, b.data), b.hg() && e.ug());
        --p
    };
    h.prototype.Wu = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        b.kg() || e.kg() ? this.Yu(e, b) : this.Xu(e, b);
        --p
    };
    h.prototype.Yu = function(e, b) {
        e.kg() && b.kg() ? this.$u(e, b) : this.Zu(e, b)
    };
    h.prototype.$u = function(e, b) {
        e.data += b.data
    };
    h.prototype.Zu = function(e, b) {
        e.kg() ? e.data += (Math.round(1E10 * b.data) / 1E10).toString() : e.Pb(e.data.toString() + b.data)
    };
    h.prototype.Xu = function(e, b) {
        e.K(e.data && b.data ? 1 : 0)
    };
    h.prototype.sv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.gb() && b.gb() && (e.data || b.data ? e.K(1) : e.K(0));
        --p
    };
    h.prototype.bv = function(e) {
        this.first.get(e);
        e.data ? this.second.get(e) : this.Jk.get(e)
    };
    h.prototype.dv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.K(e.data === b.data ? 1 : 0);
        --p
    };
    h.prototype.qv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.K(e.data !== b.data ? 1 : 0);
        --p
    };
    h.prototype.mv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.K(e.data < b.data ? 1 : 0);
        --p
    };
    h.prototype.nv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.K(e.data <= b.data ? 1 : 0);
        --p
    };
    h.prototype.iv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.K(e.data > b.data ? 1 : 0);
        --p
    };
    h.prototype.jv = function(e) {
        this.first.get(e);
        var b = g();
        this.second.get(b);
        e.K(e.data >= b.data ? 1 : 0);
        --p
    };
    h.prototype.gv = function(e) {
        var b = this.mf.qf();
        ka(b) ? e.r(b) : e.Pb(b)
    };
    fc = h;
    r.prototype.hg = function() {
        return this.type === ic.Mf
    };
    r.prototype.gb = function() {
        return this.type === ic.Nf || this.type === ic.Mf
    };
    r.prototype.kg = function() {
        return this.type === ic.String
    };
    r.prototype.ug = function() {
        this.hg() || (this.kg() && (this.data = parseFloat(this.data)), this.type = ic.Mf)
    };
    r.prototype.K = function(e) {
        this.type = ic.Nf;
        this.data = Math.floor(e)
    };
    r.prototype.r = function(e) {
        this.type = ic.Mf;
        this.data = e
    };
    r.prototype.Pb = function(e) {
        this.type = ic.String;
        this.data = e
    };
    r.prototype.oi = function(e) {
        ka(e) ? (this.type = ic.Mf, this.data = e) : ma(e) ? (this.type = ic.String, this.data = e.toString()) : (this.type = ic.Nf, this.data = 0)
    };
    ec = r;
    ic = {
        Nf: 0,
        Mf: 1,
        String: 2
    }
})();

function E(h) {
    this.b = h;
    this.ec = []
}
E.prototype.Ob = function() {
    var h = {},
        g, e, r, l, p, q, b, d;
    h.waits = [];
    var f = h.waits,
        a;
    g = 0;
    for (e = this.ec.length; g < e; g++) {
        q = this.ec[g];
        a = {
            t: q.time,
            st: q.jr,
            s: q.ln,
            ev: q.Yf.Z,
            sm: [],
            sols: {}
        };
        q.Yf.Cc[q.Vb] && (a.act = q.Yf.Cc[q.Vb].Z);
        r = 0;
        for (l = q.W.length; r < l; r++) a.sm.push(q.W[r].Z);
        for (p in q.Qb)
            if (q.Qb.hasOwnProperty(p)) {
                b = this.b.k[parseInt(p, 10)];
                d = {
                    sa: q.Qb[p].uk,
                    insts: []
                };
                r = 0;
                for (l = q.Qb[p].Vd.length; r < l; r++) d.insts.push(q.Qb[p].Vd[r].uid);
                a.sols[b.Z.toString()] = d
            }
        f.push(a)
    }
    return h
};
E.prototype.mc = function(h) {
    h = h.waits;
    var g, e, r, l, p, q, b, d, f, a, c;
    A(this.ec);
    g = 0;
    for (e = h.length; g < e; g++)
        if (q = h[g], d = this.b.Bo[q.ev.toString()]) {
            f = -1;
            r = 0;
            for (l = d.Cc.length; r < l; r++)
                if (d.Cc[r].Z === q.act) {
                    f = r;
                    break
                }
            if (-1 !== f) {
                b = {
                    Qb: {},
                    W: [],
                    ul: !1
                };
                b.time = q.t;
                b.jr = q.st || "";
                b.ln = !!q.s;
                b.Yf = d;
                b.Vb = f;
                r = 0;
                for (l = q.sm.length; r < l; r++)(d = this.b.wj(q.sm[r])) && b.W.push(d);
                for (p in q.sols)
                    if (q.sols.hasOwnProperty(p) && (d = this.b.wj(parseInt(p, 10)))) {
                        f = q.sols[p];
                        a = {
                            uk: f.sa,
                            Vd: []
                        };
                        r = 0;
                        for (l = f.insts.length; r < l; r++)(c = this.b.vj(f.insts[r])) && a.Vd.push(c);
                        b.Qb[d.index.toString()] = a
                    }
                this.ec.push(b)
            }
        }
};
(function() {
    function h() {}

    function g() {}

    function e() {}
    var r = E.prototype;
    h.prototype.ks = function() {
        return !0
    };
    h.prototype.Tn = function() {
        return !0
    };
    h.prototype.Os = function() {
        return !0
    };
    h.prototype.Vr = function(b, f, a) {
        return jc(b, f, a)
    };
    h.prototype.et = function(b) {
        var f = this.b.Ma(),
            a = f.La,
            c = f.im(),
            f = this.b.Vm();
        if (c)
            for (c = 0; c < b && !f.va; c++) this.b.Re(a.W), f.index = c, a.ee(), this.b.cd(a.W);
        else
            for (c = 0; c < b && !f.va; c++) f.index = c, a.ee();
        this.b.Sm();
        return !1
    };
    h.prototype.ls = function(b, f, a) {
        var c = this.b.Ma(),
            e = c.La,
            c = c.im();
        b = this.b.Vm(b);
        if (a < f)
            if (c)
                for (; f >= a && !b.va; --f) this.b.Re(e.W), b.index = f, e.ee(), this.b.cd(e.W);
            else
                for (; f >= a && !b.va; --f) b.index = f, e.ee();
        else if (c)
            for (; f <= a && !b.va; ++f) this.b.Re(e.W), b.index = f, e.ee(), this.b.cd(e.W);
        else
            for (; f <= a && !b.va; ++f) b.index = f, e.ee();
        this.b.Sm();
        return !1
    };
    var l = [],
        p = -1;
    h.prototype.ms = function(b) {
        var f = b.U();
        p++;
        l.length === p && l.push([]);
        var a = l[p];
        Da(a, f.vc());
        var c = this.b.Ma(),
            e = c.La,
            m = c.im(),
            c = this.b.Vm(),
            g, h, r, n, t, q, P = b.ub;
        if (m)
            for (m = 0, g = a.length; m < g && !c.va; m++) {
                this.b.Re(e.W);
                n = a[m];
                f = b.U();
                f.ga = !1;
                A(f.c);
                f.c[0] = n;
                if (P)
                    for (h = 0, r = n.siblings.length; h < r; h++) t = n.siblings[h], q = t.type.U(), q.ga = !1, A(q.c), q.c[0] = t;
                c.index = m;
                e.ee();
                this.b.cd(e.W)
            } else
                for (f.ga = !1, A(f.c), m = 0, g = a.length; m < g && !c.va; m++) {
                    n = a[m];
                    f.c[0] = n;
                    if (P)
                        for (h = 0, r = n.siblings.length; h < r; h++) t = n.siblings[h], q = t.type.U(), q.ga = !1, A(q.c), q.c[0] = t;
                    c.index = m;
                    e.ee()
                }
        A(a);
        this.b.Sm();
        p--;
        return !1
    };
    h.prototype.Jt = function() {
        var b = this.b.Ll().N;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var f = b.TriggerOnce_lastTick,
            a = this.b.Qg;
        b.TriggerOnce_lastTick = a;
        return this.b.tm || f !== a - 1
    };
    h.prototype.js = function(b) {
        var f = this.b.Ll(),
            a = f.N.Every_lastTime || 0,
            c = this.b.hb.X;
        "undefined" === typeof f.N.Every_seconds && (f.N.Every_seconds = b);
        var e = f.N.Every_seconds;
        if (c >= a + e) return f.N.Every_lastTime = a + e, c >= f.N.Every_lastTime + .04 && (f.N.Every_lastTime = c), f.N.Every_seconds = b, !0;
        c < a - .1 && (f.N.Every_lastTime = c);
        return !1
    };
    h.prototype.dt = function(b) {
        if (!b) return !1;
        var f = b.U(),
            a = f.vc(),
            c = ua(Math.random() * a.length);
        if (c >= a.length) return !1;
        f.Dg(a[c]);
        b.Md();
        return !0
    };
    h.prototype.Zr = function(b, f, a) {
        return jc(b.qf(), f, a)
    };
    h.prototype.vs = function(b) {
        return (b = this.b.Bh[b.toLowerCase()]) && b.bg
    };
    h.prototype.Wr = function(b, f, a) {
        return b >= f && b <= a
    };
    h.prototype.Jn = function() {
        var b = this.b.Ma();
        return b.Al ? !1 : !b.xf
    };
    h.prototype.Wk = function() {
        return !0
    };
    h.prototype.Hs = function() {
        return !0
    };
    h.prototype.Xk = function() {
        return !0
    };
    h.prototype.Xn = function() {
        return !0
    };
    h.prototype.Ps = function() {
        return !0
    };
    h.prototype.Ni = function() {
        return !0
    };
    h.prototype.Mr = function(b, f, a) {
        return Qa(B(b), B(a)) <= B(f)
    };
    h.prototype.us = function(b, f) {
        return Sa(B(b), B(f))
    };
    h.prototype.ss = function(b, f, a) {
        b = Oa(b);
        f = Oa(f);
        a = Oa(a);
        return Sa(a, f) ? Sa(b, f) && !Sa(b, a) : !(!Sa(b, f) && Sa(b, a))
    };
    r.d = new h;
    g.prototype.os = function(b) {
        this.b.mg || this.b.cf || (this.b.cf = b)
    };
    g.prototype.cs = function(b, f, a, c) {
        if (f && b && (f = this.b.$i(b, f, a, c))) {
            this.b.xc++;
            var e;
            this.b.trigger(Object.getPrototypeOf(b.ja).d.Of, f);
            if (f.ub)
                for (a = 0, c = f.siblings.length; a < c; a++) e = f.siblings[a], this.b.trigger(Object.getPrototypeOf(e.type.ja).d.Of, e);
            this.b.xc--;
            b = b.U();
            b.ga = !1;
            A(b.c);
            b.c[0] = f;
            if (f.ub)
                for (a = 0, c = f.siblings.length; a < c; a++) e = f.siblings[a], b = e.type.U(), b.ga = !1, A(b.c), b.c[0] = e
        }
    };
    g.prototype.ht = function(b) {
        this.b.fa.gn(b)
    };
    g.prototype.tt = function(b, f) {
        0 === b.Gi ? ka(f) ? b.he(f) : b.he(parseFloat(f)) : 1 === b.Gi && b.he(f.toString())
    };
    g.prototype.Kr = function(b, f) {
        0 === b.Gi ? ka(f) ? b.he(b.qf() + f) : b.he(b.qf() + parseFloat(f)) : 1 === b.Gi && b.he(b.qf() + f.toString())
    };
    g.prototype.Ht = function(b, f) {
        0 === b.Gi && (ka(f) ? b.he(b.qf() - f) : b.he(b.qf() - parseFloat(f)))
    };
    var q = [],
        b = [];
    g.prototype.Lt = function(d) {
        if (!(0 > d)) {
            var f, a, c, e = this.b.Ma(),
                m;
            q.length ? m = q.pop() : m = {
                Qb: {},
                W: []
            };
            m.ul = !1;
            m.time = this.b.hb.X + d;
            m.jr = "";
            m.ln = !1;
            m.Yf = e.La;
            m.Vb = e.Vb + 1;
            d = 0;
            for (f = this.b.k.length; d < f; d++) c = this.b.k[d], a = c.U(), a.ga && -1 === e.La.W.indexOf(c) || (m.W.push(c), c = void 0, b.length ? c = b.pop() : c = {
                Vd: []
            }, c.uk = !1, c.uk = a.ga, Da(c.Vd, a.c), m.Qb[d.toString()] = c);
            this.ec.push(m);
            return !0
        }
    };
    g.prototype.Gt = function() {
        0 > this.b.tg || (this.b.Ml().va = !0)
    };
    g.prototype.ft = function() {
        if (!this.b.mg && !this.b.cf && this.b.fa) {
            this.b.cf = this.b.fa;
            var b, f, a;
            b = 0;
            for (f = this.b.ve.length; b < f; b++) a = this.b.ve[b], a.$q(a.zj)
        }
    };
    r.p = new g;
    e.prototype["int"] = function(b, f) {
        ma(f) ? (b.K(parseInt(f, 10)), isNaN(b.data) && (b.data = 0)) : b.K(f)
    };
    e.prototype["float"] = function(b, f) {
        ma(f) ? (b.r(parseFloat(f)), isNaN(b.data) && (b.data = 0)) : b.r(f)
    };
    e.prototype.random = function(b, f, a) {
        void 0 === a ? b.r(Math.random() * f) : b.r(Math.random() * (a - f) + f)
    };
    e.prototype.sqrt = function(b, f) {
        b.r(Math.sqrt(f))
    };
    e.prototype.abs = function(b, f) {
        b.r(Math.abs(f))
    };
    e.prototype.round = function(b, f) {
        b.K(Math.round(f))
    };
    e.prototype.floor = function(b, f) {
        b.K(Math.floor(f))
    };
    e.prototype.ceil = function(b, f) {
        b.K(Math.ceil(f))
    };
    e.prototype.sin = function(b, f) {
        b.r(Math.sin(B(f)))
    };
    e.prototype.cos = function(b, f) {
        b.r(Math.cos(B(f)))
    };
    e.prototype.tan = function(b, f) {
        b.r(Math.tan(B(f)))
    };
    e.prototype.asin = function(b, f) {
        b.r(Ia(Math.asin(f)))
    };
    e.prototype.acos = function(b, f) {
        b.r(Ia(Math.acos(f)))
    };
    e.prototype.atan = function(b, f) {
        b.r(Ia(Math.atan(f)))
    };
    e.prototype.exp = function(b, f) {
        b.r(Math.exp(f))
    };
    e.prototype.log10 = function(b, f) {
        b.r(Math.log(f) / Math.LN10)
    };
    e.prototype.max = function(b) {
        var f = arguments[1];
        "number" !== typeof f && (f = 0);
        var a, c, e;
        a = 2;
        for (c = arguments.length; a < c; a++) e = arguments[a], "number" === typeof e && f < e && (f = e);
        b.r(f)
    };
    e.prototype.min = function(b) {
        var f = arguments[1];
        "number" !== typeof f && (f = 0);
        var a, c, e;
        a = 2;
        for (c = arguments.length; a < c; a++) e = arguments[a], "number" === typeof e && f > e && (f = e);
        b.r(f)
    };
    e.prototype.Fe = function(b) {
        b.r(this.b.Fe)
    };
    e.prototype.Rg = function(b) {
        b.r(this.b.Rg)
    };
    e.prototype.time = function(b) {
        b.r(this.b.hb.X)
    };
    e.prototype.Qg = function(b) {
        b.K(this.b.Qg)
    };
    e.prototype.Yj = function(b) {
        b.K(this.b.Yj)
    };
    e.prototype.Il = function(b) {
        b.K(this.b.Il)
    };
    e.prototype.Iw = function(b, f) {
        var a, c;
        if (this.b.$h.length)
            if (f) {
                for (c = this.b.tg; 0 <= c; --c)
                    if (a = this.b.$h[c], a.name === f) {
                        b.K(a.index);
                        return
                    }
                b.K(0)
            } else a = this.b.Ml(), b.K(a ? a.index : -1);
        else b.K(0)
    };
    e.prototype.i = function(b, f, a, c, e) {
        b.r(Ia(Pa(f, a, c, e)))
    };
    e.prototype.Fw = function(b) {
        b.K(this.b.fa.width)
    };
    e.prototype.Ew = function(b) {
        b.K(this.b.fa.height)
    };
    e.prototype.left = function(b, f, a) {
        b.Pb(ma(f) ? f.substr(0, a) : "")
    };
    e.prototype.right = function(b, f, a) {
        b.Pb(ma(f) ? f.substr(f.length - a) : "")
    };
    e.prototype.replace = function(b, f, a, c) {
        ma(f) && ma(a) && ma(c) ? b.Pb(f.replace(new RegExp(gb(a), "gi"), c)) : b.Pb(ma(f) ? f : "")
    };
    e.prototype.trim = function(b, f) {
        b.Pb(ma(f) ? f.trim() : "")
    };
    e.prototype.hu = function(b) {
        var f = ua(Math.random() * (arguments.length - 1));
        b.oi(arguments[f + 1])
    };
    e.prototype.pl = function(b) {
        b.r(this.b.pl / 1E3)
    };
    e.prototype.Af = function(b) {
        b.r(this.b.Af)
    };
    r.T = new e;
    r.Bx = function() {
        var d, f, a, c, e, m, g = this.b.Ma();
        d = 0;
        for (a = this.ec.length; d < a; d++) {
            c = this.ec[d];
            if (-1 === c.time) {
                if (!c.ln) continue
            } else if (c.time > this.b.hb.X) continue;
            g.La = c.Yf;
            g.Vb = c.Vb;
            g.Ya = 0;
            for (f in c.Qb) c.Qb.hasOwnProperty(f) && (e = this.b.k[parseInt(f, 10)].U(), m = c.Qb[f], e.ga = m.uk, Da(e.c, m.Vd), e = m, A(e.Vd), b.push(e));
            c.Yf.zx();
            this.b.nl(c.W);
            c.ul = !0
        }
        f = d = 0;
        for (a = this.ec.length; d < a; d++) c = this.ec[d], this.ec[f] = c, c.ul ? (Za(c.Qb), A(c.W), q.push(c)) : f++;
        Ca(this.ec, f)
    }
})();
(function() {
    sb = function(g, e) {
        var h = g[1],
            l = g[3],
            p = g[4],
            q = g[5],
            b = g[6],
            d = g[7],
            f = g[8];
        e.d || (e.d = {});
        e.p || (e.p = {});
        e.T || (e.T = {});
        var a = e.d,
            c = e.p,
            k = e.T;
        l && (a.$r = function(a, b) {
            return jc(this.x, a, b)
        }, a.ry = function(a, b) {
            return jc(this.y, a, b)
        }, a.wy = function() {
            var a = this.j;
            this.lb();
            var b = this.Eb;
            return !(b.right < a.qa || b.bottom < a.ra || b.left > a.za || b.top > a.ya)
        }, a.xy = function() {
            this.lb();
            var a = this.Eb,
                b = this.b.fa;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.Ky = function(a, b, c) {
            var d = this.U(),
                e = d.vc();
            if (!e.length) return !1;
            var f = e[0],
                k = f,
                g = Va(f.x, f.y, b, c),
                l, h, r;
            l = 1;
            for (h = e.length; l < h; l++)
                if (f = e[l], r = Va(f.x, f.y, b, c), 0 === a && r < g || 1 === a && r > g) g = r, k = f;
            d.Dg(k);
            return !0
        }, c.co = function(a) {
            this.x !== a && (this.x = a, this.Ua())
        }, c.yt = function(a) {
            this.y !== a && (this.y = a, this.Ua())
        }, c.dz = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.Ua()
        }, c.ez = function(a, b) {
            var c = a.Qv(this);
            if (c) {
                var d;
                c.wh ? (d = c.wh(b, !0), c = c.wh(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.Ua()
            }
        }, c.Dy = function(a) {
            0 !== a && (this.x += Math.cos(this.i) * a, this.y += Math.sin(this.i) * a, this.Ua())
        }, c.Cy = function(a, b) {
            0 !== b && (this.x += Math.cos(B(a)) * b, this.y += Math.sin(B(a)) * b, this.Ua())
        }, k.eo = function(a) {
            a.r(this.x)
        }, k.fo = function(a) {
            a.r(this.y)
        }, k.Fe = function(a) {
            a.r(this.b.Nl(this))
        });
        p && (a.qy = function(a, b) {
            return jc(this.width, a, b)
        }, a.my = function(a, b) {
            return jc(this.height, a, b)
        }, c.ut = function(a) {
            this.width !== a && (this.width = a, this.Ua())
        }, c.$y = function(a) {
            this.height !== a && (this.height = a, this.Ua())
        }, c.bo = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.Ua()
        }, k.Mt = function(a) {
            a.r(this.width)
        }, k.qs = function(a) {
            a.r(this.height)
        }, k.jy = function(a) {
            this.lb();
            a.r(this.Eb.left)
        }, k.ly = function(a) {
            this.lb();
            a.r(this.Eb.top)
        }, k.ky = function(a) {
            this.lb();
            a.r(this.Eb.right)
        }, k.iy = function(a) {
            this.lb();
            a.r(this.Eb.bottom)
        });
        q && (a.Mr = function(a, b) {
            return Qa(this.i, B(b)) <= B(a)
        }, a.us = function(a) {
            return Sa(this.i, B(a))
        }, a.ss = function(a, b) {
            var c = Oa(a),
                d = Oa(b),
                f = Ma(this.i);
            return Sa(d, c) ? Sa(f, c) && !Sa(f, d) : !(!Sa(f, c) && Sa(f, d))
        }, c.Vy = function(a) {
            a = B(La(a));
            isNaN(a) || this.i === a || (this.i = a, this.Ua())
        }, c.Ry = function(a) {
            0 === a || isNaN(a) || (this.i += B(a), this.i = Ma(this.i), this.Ua())
        }, c.Sy = function(a) {
            0 === a || isNaN(a) || (this.i -= B(a), this.i = Ma(this.i), this.Ua())
        }, c.Ty = function(a, b) {
            var c = Ra(this.i, B(b), B(a));
            isNaN(c) || this.i === c || (this.i = c, this.Ua())
        }, c.Uy = function(a, b, c) {
            a = Ra(this.i, Math.atan2(c - this.y, b - this.x), B(a));
            isNaN(a) || this.i === a || (this.i = a, this.Ua())
        }, c.fz = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.i === c || (this.i = c, this.Ua())
        }, k.hy = function(a) {
            a.r(Na(this.i))
        });
        h || (a.In = function(a, b, c) {
            return jc(this.ab[a], b, c)
        }, a.ts = function(a) {
            return this.ab[a]
        }, a.Ly = function(a, b) {
            var c = this.U(),
                d = c.vc();
            if (!d.length) return !1;
            var f = d[0],
                e = f,
                k = f.ab[b],
                g, l, h;
            g = 1;
            for (l = d.length; g < l; g++)
                if (f = d[g], h = f.ab[b], 0 === a && h < k || 1 === a && h > k) k = h, e = f;
            c.Dg(e);
            return !0
        }, a.ct = function(a) {
            var b, c, d, f, e;
            if (this.b.Ll().em) {
                e = this.U();
                if (e.ga)
                    for (e.ga = !1, A(e.c), A(e.S), d = this.c, b = 0, c = d.length; b < c; b++) f = d[b], f.uid === a ? e.S.push(f) : e.c.push(f);
                else {
                    d = b = 0;
                    for (c = e.c.length; b < c; b++) f = e.c[b], e.c[d] = f, f.uid === a ? e.S.push(f) : d++;
                    Ca(e.c, d)
                }
                this.Md();
                return !!e.c.length
            }
            f = this.b.vj(a);
            if (!f) return !1;
            e = this.U();
            if (!e.ga && -1 === e.c.indexOf(f)) return !1;
            if (this.C)
                for (a = f.type.Ba, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return e.Dg(f), this.Md(), !0
                } else if (f.type === this) return e.Dg(f), this.Md(), !0;
            return !1
        }, a.Of = function() {
            return !0
        }, a.Ln = function() {
            return !0
        }, c.mt = function(a, b) {
            var c = this.ab;
            ka(c[a]) ? c[a] = ka(b) ? b : parseFloat(b) : ma(c[a]) && (c[a] = ma(b) ? b : b.toString())
        }, c.Jr = function(a, b) {
            var c = this.ab;
            ka(c[a]) ? c[a] = ka(b) ? c[a] + b : c[a] + parseFloat(b) : ma(c[a]) && (c[a] = ma(b) ? c[a] + b : c[a] + b.toString())
        }, c.kz = function(a, b) {
            var c = this.ab;
            ka(c[a]) && (c[a] = ka(b) ? c[a] - b : c[a] - parseFloat(b))
        }, c.jt = function(a, b) {
            this.ab[a] = b ? 1 : 0
        }, c.mz = function(a) {
            this.ab[a] = 1 - this.ab[a]
        }, c.gs = function() {
            this.b.We(this)
        }, c.zs || (c.zs = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.Pj(this, b, !0);
            this.Jd && this.Jd();
            if (this.I)
                for (a = 0, b = this.I.length; a < b; ++a) c = this.I[a], c.Jd && c.Jd()
        }), k.ty = function(a) {
            var b = a.Ef.c.length,
                c, d, f;
            c = 0;
            for (d = this.b.nd.length; c < d; c++) f = this.b.nd[c], a.Ef.C ? 0 <= f.type.Ba.indexOf(a.Ef) && b++ : f.type === a.Ef && b++;
            a.K(b)
        }, k.Ny = function(a) {
            a.K(a.Ef.U().vc().length)
        }, k.Kt = function(a) {
            a.K(this.uid)
        }, k.uy = function(a) {
            a.K(this.zh())
        }, k.Gn || (k.Gn = function(a) {
            a.Pb(JSON.stringify(this.b.dn(this, !0)))
        }));
        b && (a.zy = function() {
            return this.visible
        }, c.iz = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.na = !0)
        }, a.ny = function(a, b) {
            return jc(mb(100 * this.opacity), a, b)
        }, c.bz = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.na = !0)
        }, k.Opacity = function(a) {
            a.r(mb(100 * this.opacity))
        });
        d && (a.vy = function(a) {
            return a ? this.j === a : !1
        }, a.My = function(a) {
            var b = this.U(),
                c = b.vc();
            if (!c.length) return !1;
            var d = c[0],
                f = d,
                e, k;
            e = 1;
            for (k = c.length; e < k; e++)
                if (d = c[e], 0 === a) {
                    if (d.j.index > f.j.index || d.j.index === f.j.index && d.vd() > f.vd()) f = d
                } else if (d.j.index < f.j.index || d.j.index === f.j.index && d.vd() < f.vd()) f = d;
            b.Dg(f);
            return !0
        }, c.Gy = function() {
            var a = this.j,
                b = a.c;
            b.length && b[b.length - 1] === this || (a.Gg(this, !1), a.bh(this, !1), this.b.na = !0)
        }, c.Ey = function() {
            var a = this.j,
                b = a.c;
            b.length && b[0] === this || (a.Gg(this, !1), a.lx(this), this.b.na = !0)
        }, c.Fy = function(a) {
            a && a != this.j && (this.j.Gg(this, !0), this.j = a, a.bh(this, !0), this.b.na = !0)
        }, c.qz = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Jv(this);
                d && d.uid !== this.uid && (this.j.index !== d.j.index && (this.j.Gg(this, !0), this.j = d.j, d.j.bh(this, !0)), this.j.Mw(this, d, c), this.b.na = !0)
            }
        }, k.By = function(a) {
            a.K(this.j.mq)
        }, k.Ay = function(a) {
            a.Pb(this.j.name)
        }, k.pz = function(a) {
            a.K(this.vd())
        });
        f && (c.Xy = function(a, b) {
            if (this.b.m) {
                var c = this.type.Pl(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.te[c] !== d && (this.te[c] = d, this.gd(), this.b.na = !0)
                }
            }
        }, c.Yy = function(a, b, c) {
            if (this.b.m) {
                var d = this.type.Pl(a);
                0 > d || (a = this.type.J[d], d = this.Ga[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.m.Uv(a.Va, b) && (c /= 100), d[b] !== c && (d[b] = c, a.Db && (this.b.na = !0))))
            }
        })
    };
    Lb = function() {
        this.jl = this.el = !0;
        this.type.to = !0;
        this.b.na = !0;
        var g, e, h = this.fl;
        g = 0;
        for (e = h.length; g < e; ++g) h[g](this);
        this.j.Bc && this.lb()
    };
    Qb = function(g) {
        g && this.fl.push(g)
    };
    Sb = function() {
        if (this.el) {
            var g = this.Eb,
                e = this.Sf;
            g.set(this.x, this.y, this.x + this.width, this.y + this.height);
            g.offset(-this.Mb * this.width, -this.Nb * this.height);
            this.i ? (g.offset(-this.x, -this.y), e.er(g, this.i), e.offset(this.x, this.y), e.Co(g)) : e.Ak(g);
            g.normalize();
            this.el = !1;
            this.$x()
        }
    };
    var h = new xa(0, 0, 0, 0);
    Tb = function() {
        if (this.j.Bc) {
            var g = this.j.zb,
                e = this.Eb;
            h.set(g.Tb(e.left), g.Ub(e.top), g.Tb(e.right), g.Ub(e.bottom));
            this.Zb.ph(h) || (this.Zb.right < this.Zb.left ? g.update(this, null, h) : g.update(this, this.Zb, h), this.Zb.kh(h), this.j.ed = !0)
        }
    };
    Ub = function() {
        if (this.jl && this.ih) {
            this.lb();
            var g = this.type.Io,
                e = this.Eb;
            h.set(g.Tb(e.left), g.Ub(e.top), g.Tb(e.right), g.Ub(e.bottom));
            this.Ce.ph(h) || (this.Ce.right < this.Ce.left ? g.update(this, null, h) : g.update(this, this.Ce, h), this.Ce.kh(h), this.jl = !1)
        }
    };
    Rb = function(g, e) {
        return this.Eb.Ec(g, e) && this.Sf.Ec(g, e) ? this.rr ? this.Qz(g, e) : this.md && !this.md.Aw() ? (this.md.du(this.width, this.height, this.i), this.md.Ec(g - this.x, e - this.y)) : !0 : !1
    };
    Hb = function() {
        this.type.Pk();
        return this.tf
    };
    Vb = function() {
        this.j.Bn();
        return this.jd
    };
    Wb = function() {
        A(this.ha);
        var g, e, h, l = !0;
        g = 0;
        for (e = this.te.length; g < e; g++) this.te[g] && (h = this.type.J[g], this.ha.push(h), h.dd || (l = !1));
        this.Dr = !!this.ha.length;
        this.ie = l
    };
    Ib = function() {
        return "Inst" + this.Mq
    };
    vb = function(g) {
        if (g && g.ub && g.type != this) {
            var e, h, l;
            e = 0;
            for (h = g.siblings.length; e < h; e++)
                if (l = g.siblings[e], l.type == this) return l
        }
        g = this.U().vc();
        return g.length ? g[0] : null
    };
    wb = function(g) {
        var e = this.U().vc();
        return e.length ? e[g.zh() % e.length] : null
    };
    ub = function() {
        if (this.Mg && !this.C) {
            var g, e;
            g = 0;
            for (e = this.c.length; g < e; g++) this.c[g].tf = g;
            var h = g,
                l = this.b.nd;
            g = 0;
            for (e = l.length; g < e; ++g) l[g].type === this && (l[g].tf = h++);
            this.Mg = !1
        }
    };
    Fb = function(g) {
        if (g < this.c.length) return this.c[g];
        g -= this.c.length;
        var e = this.b.nd,
            h, l;
        h = 0;
        for (l = e.length; h < l; ++h)
            if (e[h].type === this) {
                if (0 === g) return e[h];
                --g
            }
        return null
    };
    xb = function() {
        return this.ke[this.od]
    };
    yb = function() {
        this.od++;
        this.od === this.ke.length ? this.ke.push(new tb(this)) : (this.ke[this.od].ga = !0, A(this.ke[this.od].S))
    };
    zb = function() {
        this.od++;
        this.od === this.ke.length && this.ke.push(new tb(this));
        var g = this.ke[this.od],
            e = this.ke[this.od - 1];
        e.ga ? (g.ga = !0, A(g.S)) : (g.ga = !1, Da(g.c, e.c), Da(g.S, e.S))
    };
    Ab = function() {
        this.od--
    };
    Bb = function(g) {
        var e, h, l, p, q, b = 0;
        if (!this.C)
            for (e = 0, h = this.Ba.length; e < h; e++)
                for (q = this.Ba[e], l = 0, p = q.Ea.length; l < p; l++) {
                    if (g === q.Ea[l].name) return this.N.lastBehIndex = b, q.Ea[l];
                    b++
                }
        e = 0;
        for (h = this.Ea.length; e < h; e++) {
            if (g === this.Ea[e].name) return this.N.lastBehIndex = b, this.Ea[e];
            b++
        }
        return null
    };
    Cb = function(g) {
        return this.tj(g) ? this.N.lastBehIndex : -1
    };
    Db = function(g) {
        var e, h;
        e = 0;
        for (h = this.J.length; e < h; e++)
            if (this.J[e].name === g) return e;
        return -1
    };
    Eb = function() {
        if (this.ub && !this.C) {
            var g, e, h, l, p, q, b;
            this.Pk();
            q = this.U();
            var d = q.ga,
                f = (g = this.b.Ma()) && g.La && g.La.Oc;
            g = 0;
            for (e = this.gc.length; g < e; g++)
                if (p = this.gc[g], p !== this && (p.Pk(), b = p.U(), b.ga = d, !d)) {
                    A(b.c);
                    h = 0;
                    for (l = q.c.length; h < l; ++h) b.c[h] = p.Ql(q.c[h].tf);
                    if (f)
                        for (A(b.S), h = 0, l = q.S.length; h < l; ++h) b.S[h] = p.Ql(q.S[h].tf)
                }
        }
    };
    Gb = function() {
        return "Type" + this.Z
    };
    jc = function(g, e, h) {
        if ("undefined" === typeof g || "undefined" === typeof h) return !1;
        switch (e) {
            case 0:
                return g === h;
            case 1:
                return g !== h;
            case 2:
                return g < h;
            case 3:
                return g <= h;
            case 4:
                return g > h;
            case 5:
                return g >= h;
            default:
                return !1
        }
    }
})();
var rc = {};

function uc(h) {
    this.b = h
}
(function() {
    function h() {
        return b.length ? b.pop() : []
    }

    function g(d) {
        var f, a;
        f = 0;
        for (a = d.length; f < a; f++) Array.isArray(d[f]) && g(d[f]);
        A(d);
        b.push(d)
    }

    function e() {}

    function r() {}

    function l() {}
    var p = uc.prototype;
    p.wa = function(b) {
        this.ja = b;
        this.b = b.b
    };
    p.wa.prototype.Y = function() {};
    p.pa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var q = p.pa.prototype,
        b = [];
    Array.isArray || (Array.isArray = function(b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    q.Y = function() {
        this.rb = this.B[0];
        this.Wb = this.B[1];
        this.Gc = this.B[2];
        this.Qc || (this.ld = h());
        var b = this.ld;
        b.length = this.rb;
        var f, a, c;
        for (f = 0; f < this.rb; f++)
            for (b[f] || (b[f] = h()), b[f].length = this.Wb, a = 0; a < this.Wb; a++)
                for (b[f][a] || (b[f][a] = h()), b[f][a].length = this.Gc, c = 0; c < this.Gc; c++) b[f][a][c] = 0;
        this.hc = [];
        this.sd = [];
        this.of = [];
        this.Jc = -1
    };
    q.Ff = function() {
        var b;
        for (b = 0; b < this.rb; b++) g(this.ld[b]);
        A(this.ld)
    };
    q.eh = function(b, f, a) {
        b = Math.floor(b);
        f = Math.floor(f);
        a = Math.floor(a);
        return isNaN(b) || 0 > b || b > this.rb - 1 || isNaN(f) || 0 > f || f > this.Wb - 1 || isNaN(a) || 0 > a || a > this.Gc -
            1 ? 0 : this.ld[b][f][a]
    };
    q.set = function(b, f, a, c) {
        b = Math.floor(b);
        f = Math.floor(f);
        a = Math.floor(a);
        isNaN(b) || 0 > b || b > this.rb - 1 || isNaN(f) || 0 > f || f > this.Wb - 1 || isNaN(a) || 0 > a || a > this.Gc - 1 || (this.ld[b][f][a] = c)
    };
    q.Gv = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.rb, this.Wb, this.Gc],
            data: this.ld
        })
    };
    q.Ob = function() {
        return {
            size: [this.rb, this.Wb, this.Gc],
            data: this.ld
        }
    };
    q.mc = function(b) {
        var f = b.size;
        this.rb = f[0];
        this.Wb = f[1];
        this.Gc = f[2];
        this.ld = b.data
    };
    q.ge = function(b, f, a) {
        0 > b && (b = 0);
        0 > f && (f = 0);
        0 > a && (a = 0);
        if (this.rb !== b || this.Wb !== f || this.Gc !== a) {
            this.rb = b;
            this.Wb = f;
            this.Gc = a;
            var c, e, g = this.ld;
            g.length = b;
            for (b = 0; b < this.rb; b++)
                for (ja(g[b]) && (g[b] = h()), g[b].length = f, c = 0; c < this.Wb; c++)
                    for (ja(g[b][c]) && (g[b][c] = h()), g[b][c].length = a, e = 0; e < this.Gc; e++) ja(g[b][c][e]) && (g[b][c][e] = 0)
        }
    };
    q.Kv = function() {
        return 0 <= this.Jc && this.Jc < this.hc.length ? this.hc[this.Jc] : 0
    };
    q.Lv = function() {
        return 0 <= this.Jc && this.Jc < this.sd.length ? this.sd[this.Jc] : 0
    };
    q.we = function() {
        return 0 <= this.Jc && this.Jc < this.of.length ? this.of[this.Jc] : 0
    };
    e.prototype.$r = function(b, f, a) {
        return jc(this.eh(b, 0, 0), f, a)
    };
    e.prototype.as = function(b, f, a, c) {
        return jc(this.eh(b, f, 0), a, c)
    };
    e.prototype.bs = function(b, f, a, c, e) {
        return jc(this.eh(b, f, a), c, e)
    };
    q.yl = function(b) {
        this.b.Re(b.W);
        b.ee();
        this.b.cd(b.W)
    };
    e.prototype.Pr = function(b) {
        var f = this.b.Ma().La;
        this.Jc++;
        var a = this.Jc;
        a === this.hc.length ? (this.hc.push(0), this.sd.push(0), this.of.push(0)) : (this.hc[a] = 0, this.sd[a] = 0, this.of[a] = 0);
        switch (b) {
            case 0:
                for (this.hc[a] = 0; this.hc[a] < this.rb; this.hc[a]++)
                    for (this.sd[a] = 0; this.sd[a] < this.Wb; this.sd[a]++)
                        for (this.of[a] = 0; this.of[a] < this.Gc; this.of[a]++) this.yl(f);
                break;
            case 1:
                for (this.hc[a] = 0; this.hc[a] < this.rb; this.hc[a]++)
                    for (this.sd[a] = 0; this.sd[a] < this.Wb; this.sd[a]++) this.yl(f);
                break;
            case 2:
                for (this.hc[a] = 0; this.hc[a] < this.rb; this.hc[a]++) this.yl(f)
        }
        this.Jc--;
        return !1
    };
    p.d = new e;
    r.prototype.bo = function(b, f, a) {
        this.ge(b, f, a)
    };
    r.prototype.co = function(b, f) {
        this.set(b, 0, 0, f)
    };
    r.prototype.wt = function(b, f, a) {
        this.set(b, f, 0, a)
    };
    r.prototype.xt = function(b, f, a, c) {
        this.set(b, f, a, c)
    };
    r.prototype.gt = function(b) {
        var f = 0,
            a = 0,
            c = this.ld;
        if (0 !== this.rb && 0 !== this.Wb && 0 !== this.Gc) switch (b) {
            case 0:
                c.reverse();
                break;
            case 1:
                for (; f < this.rb; f++) c[f].reverse();
                break;
            case 2:
                for (; f < this.rb; f++)
                    for (a = 0; a < this.Wb; a++) c[f][a].reverse()
        }
    };
    p.p = new r;
    l.prototype.Qr = function(b, f, a, c) {
        b.oi(this.eh(f, a || 0, c || 0))
    };
    l.prototype.Mt = function(b) {
        b.K(this.rb)
    };
    l.prototype.qs = function(b) {
        b.K(this.Wb)
    };
    l.prototype.ds = function(b) {
        b.K(this.Kv())
    };
    l.prototype.es = function(b) {
        b.K(this.Lv())
    };
    l.prototype.Gn = function(b) {
        b.Pb(this.Gv())
    };
    p.T = new l
})();

function vc(h) {
    this.b = h
}
(function() {
    function h(a) {
        -1 === qb.indexOf(a) && qb.push(a)
    }

    function g(a) {
        var b = a.g,
            c;
        try {
            c = b.play()
        } catch (d) {
            h(a);
            return
        }
        c ? c.catch(function() {
            h(a)
        }) : Oc && !I.yc && h(a)
    }

    function e() {
        var a, b, c, d;
        Pc || Mb || !y || (r(), "running" === y.state && (Pc = !0));
        var f = qb.slice(0);
        A(qb);
        if (!la)
            for (a = 0, b = f.length; a < b; ++a) c = f[a], c.va || c.kc || (d = c.g.play()) && d.catch(function() {
                h(c)
            })
    }

    function r() {
        "suspended" === y.state && y.resume && y.resume();
        if (y.createBuffer) {
            var a = y.createBuffer(1, 220, 22050),
                b = y.createBufferSource();
            b.buffer = a;
            b.connect(y.destination);
            d(b)
        }
    }

    function l(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function p(a) {
        a = a.toLowerCase();
        return da.hasOwnProperty(a) && da[a].length ? da[a][0].uc() : y.destination
    }

    function q() {
        return y.createGain ? y.createGain() : y.createGainNode()
    }

    function b(a) {
        return y.createDelay ? y.createDelay(a) : y.createDelayNode(a)
    }

    function d(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function f(a, b, c, d) {
        a.start ? a.start(d || 0, b) : a.noteGrainOn(d || 0, b, c - b)
    }

    function a(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function c(a, b, c, d, f, e) {
        this.type = "filter";
        this.Na = [a, b, c, d, f, e];
        this.aa = q();
        this.H = q();
        this.H.gain.value = e;
        this.G = q();
        this.G.gain.value = 1 - e;
        this.Pa = y.createBiquadFilter();
        this.Pa.type = "number" === typeof this.Pa.type ? a : bd[a];
        this.Pa.frequency.value = b;
        this.Pa.detune && (this.Pa.detune.value = c);
        this.Pa.Q.value = d;
        this.Pa.gain.value = f;
        this.aa.connect(this.Pa);
        this.aa.connect(this.G);
        this.Pa.connect(this.H)
    }

    function k(a, c, d) {
        this.type = "delay";
        this.Na = [a, c, d];
        this.aa = q();
        this.H = q();
        this.H.gain.value = d;
        this.G = q();
        this.G.gain.value = 1 - d;
        this.ai = q();
        this.Ic = b(a);
        this.Ic.delayTime.value = a;
        this.fj = q();
        this.fj.gain.value = c;
        this.aa.connect(this.ai);
        this.aa.connect(this.G);
        this.ai.connect(this.H);
        this.ai.connect(this.Ic);
        this.Ic.connect(this.fj);
        this.fj.connect(this.ai)
    }

    function m(a, b, c, d) {
        this.type = "convolve";
        this.Na = [b, c, d];
        this.aa = q();
        this.H = q();
        this.H.gain.value = c;
        this.G = q();
        this.G.gain.value = 1 - c;
        this.df = y.createConvolver();
        a && (this.df.normalize = b, this.df.buffer = a);
        this.aa.connect(this.df);
        this.aa.connect(this.G);
        this.df.connect(this.H)
    }

    function w(a, c, f, e, k) {
        this.type = "flanger";
        this.Na = [a, c, f, e, k];
        this.aa = q();
        this.G = q();
        this.G.gain.value = 1 - k / 2;
        this.H = q();
        this.H.gain.value = k / 2;
        this.mj = q();
        this.mj.gain.value = e;
        this.Ic = b(a + c);
        this.Ic.delayTime.value = a;
        this.kb = y.createOscillator();
        this.kb.frequency.value = f;
        this.oc = q();
        this.oc.gain.value = c;
        this.aa.connect(this.Ic);
        this.aa.connect(this.G);
        this.Ic.connect(this.H);
        this.Ic.connect(this.mj);
        this.mj.connect(this.Ic);
        this.kb.connect(this.oc);
        this.oc.connect(this.Ic.delayTime);
        d(this.kb)
    }

    function z(a, b, c, f, e, k) {
        this.type = "phaser";
        this.Na = [a, b, c, f, e, k];
        this.aa = q();
        this.G = q();
        this.G.gain.value = 1 - k / 2;
        this.H = q();
        this.H.gain.value = k / 2;
        this.Pa = y.createBiquadFilter();
        this.Pa.type = "number" === typeof this.Pa.type ? 7 : "allpass";
        this.Pa.frequency.value = a;
        this.Pa.detune && (this.Pa.detune.value = b);
        this.Pa.Q.value = c;
        this.kb = y.createOscillator();
        this.kb.frequency.value = e;
        this.oc = q();
        this.oc.gain.value = f;
        this.aa.connect(this.Pa);
        this.aa.connect(this.G);
        this.Pa.connect(this.H);
        this.kb.connect(this.oc);
        this.oc.connect(this.Pa.frequency);
        d(this.kb)
    }

    function O(a) {
        this.type = "gain";
        this.Na = [a];
        this.ea = q();
        this.ea.gain.value = a
    }

    function n(a, b) {
        this.type = "tremolo";
        this.Na = [a, b];
        this.ea = q();
        this.ea.gain.value = 1 - b / 2;
        this.kb = y.createOscillator();
        this.kb.frequency.value = a;
        this.oc = q();
        this.oc.gain.value = b / 2;
        this.kb.connect(this.oc);
        this.oc.connect(this.ea.gain);
        d(this.kb)
    }

    function t(a, b) {
        this.type = "ringmod";
        this.Na = [a, b];
        this.aa = q();
        this.H = q();
        this.H.gain.value = b;
        this.G = q();
        this.G.gain.value = 1 - b;
        this.li = q();
        this.li.gain.value = 0;
        this.kb = y.createOscillator();
        this.kb.frequency.value = a;
        this.kb.connect(this.li.gain);
        d(this.kb);
        this.aa.connect(this.li);
        this.aa.connect(this.G);
        this.li.connect(this.H)
    }

    function Y(a, b, c, d, f) {
        this.type = "distortion";
        this.Na = [a, b, c, d, f];
        this.aa = q();
        this.mk = q();
        this.lk = q();
        this.Ix(c, Math.pow(10, d / 20));
        this.H = q();
        this.H.gain.value = f;
        this.G = q();
        this.G.gain.value = 1 - f;
        this.Uk = y.createWaveShaper();
        this.dj = new Float32Array(65536);
        this.Ev(a, b);
        this.Uk.dj = this.dj;
        this.aa.connect(this.mk);
        this.aa.connect(this.G);
        this.mk.connect(this.Uk);
        this.Uk.connect(this.lk);
        this.lk.connect(this.H)
    }

    function P(a, b, c, d, f) {
        this.type = "compressor";
        this.Na = [a, b, c, d, f];
        this.ea = y.createDynamicsCompressor();
        try {
            this.ea.threshold.value = a, this.ea.knee.value = b, this.ea.ratio.value = c, this.ea.attack.value = d, this.ea.release.value = f
        } catch (e) {}
    }

    function F(a, b) {
        this.type = "analyser";
        this.Na = [a, b];
        this.ea = y.createAnalyser();
        this.ea.fftSize = a;
        this.ea.smoothingTimeConstant = b;
        this.Cv = new Float32Array(this.ea.frequencyBinCount);
        this.hr = new Uint8Array(a);
        this.gi = 0
    }

    function G() {
        this.la = null;
        this.Qj = 0
    }

    function v(a, b) {
        this.src = a;
        this.V = K;
        this.xd = b;
        this.Ti = !1;
        var c = this;
        this.vg = this.Bg = null;
        this.Cg = [];
        this.vk = 0;
        this.En = this.kj = this.nr = this.hk = !1;
        1 === K && b && !rb && (this.V = 0, this.Bg = q());
        this.Nd = this.ca = null;
        var d;
        switch (this.V) {
            case 0:
                this.ca = new Audio;
                this.ca.crossOrigin = "anonymous";
                this.ca.addEventListener("canplaythrough", function() {
                    c.En = !0
                });
                1 === K && y.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.nr = !0, this.ca.addEventListener("canplay", function() {
                    !c.vg && c.ca && (c.vg = y.createMediaElementSource(c.ca), c.vg.connect(c.Bg))
                }));
                this.ca.autoplay = !1;
                this.ca.Kz = "auto";
                this.ca.src = a;
                break;
            case 1:
                I.Fj ? I.Zo(a, function(a) {
                    c.Nd = a;
                    c.Po()
                }, function() {
                    c.kj = !0
                }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function() {
                    c.Nd = d.response;
                    c.Po()
                }, d.onerror = function() {
                    c.kj = !0
                }, d.send());
                break;
            case 2:
                this.ca = !0;
                break;
            case 3:
                this.ca = !0
        }
    }

    function x(a, b) {
        var c = this;
        this.tag = b;
        this.va = this.ud = !0;
        this.src = a.src;
        this.buffer = a;
        this.V = K;
        this.xd = a.xd;
        this.playbackRate = 1;
        this.dg = !0;
        this.kc = this.Ac = !1;
        this.$b = 0;
        this.Mh = this.ig = this.zd = !1;
        this.volume = 1;
        this.Lm = function(a) {
            if (!c.kc && !c.Ac) {
                var b = this;
                b || (b = a.target);
                b === c.Si && (c.dg = !0, c.va = !0, L = c.tag, I.trigger(vc.prototype.d.Ki, ca))
            }
        };
        this.Si = null;
        this.gg = 1 === S && !this.xd || 2 === S;
        this.wg = 1;
        this.startTime = this.gg ? I.hb.X : I.oe.X;
        this.Sa = this.$a = null;
        this.Ad = !1;
        this.xb = null;
        this.Cq = this.Bq = this.Aq = this.zq = this.Eq = this.Dq = 0;
        this.g = null;
        var d = !1;
        1 !== this.V || 0 !== this.buffer.V || this.buffer.nr || (this.V = 0);
        switch (this.V) {
            case 0:
                this.xd ? (this.g = a.ca, d = !a.Ti, a.Ti = !0) : (this.g = new Audio, this.g.crossOrigin = "anonymous", this.g.autoplay = !1, this.g.src = a.ca.src, d = !0);
                d && this.g.addEventListener("ended", function() {
                    L = c.tag;
                    c.va = !0;
                    I.trigger(vc.prototype.d.Ki, ca)
                });
                break;
            case 1:
                this.$a = q();
                this.$a.connect(p(b));
                1 === this.buffer.V ? a.ca && (this.g = y.createBufferSource(), this.g.buffer = a.ca, this.g.connect(this.$a)) : (this.g = this.buffer.ca, this.buffer.Bg.connect(this.$a), this.buffer.Ti || (this.buffer.Ti = !0, this.buffer.ca.addEventListener("ended", function() {
                    L = c.tag;
                    c.va = !0;
                    I.trigger(vc.prototype.d.Ki, ca)
                })));
                break;
            case 2:
                this.g = new window.Media(J + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (c.dg = !0, c.va = !0, L = c.tag, I.trigger(vc.prototype.d.Ki, ca))
                });
                break;
            case 3:
                this.g = !0
        }
    }

    function D(a, b) {
        var c = a.uf() ? 1 : 0,
            d = b.uf() ? 1 : 0;
        return c === d ? 0 : c < d ? 1 : -1
    }

    function H(a, b) {
        A(Ka);
        if (a.length) {
            var c, d, f;
            c = 0;
            for (d = C.length; c < d; c++) f = C[c], nb(a, f.tag) && Ka.push(f);
            b && Ka.sort(D)
        } else R && !R.sf() && (A(Ka), Ka[0] = R)
    }

    function N(a, b) {
        da.hasOwnProperty(a) ? da[a].push(b) : da[a] = [b];
        var c, d, f, e, k = y.destination;
        if (da.hasOwnProperty(a) && (f = da[a], f.length))
            for (k = f[0].uc(), c = 0, d = f.length; c < d; c++) e = f[c], c + 1 === d ? e.Dc(y.destination) : e.Dc(f[c + 1].uc());
        H(a);
        c = 0;
        for (d = Ka.length; c < d; c++) Ka[c].tx(k);
        Ta && Nb === a && (Ta.disconnect(), Ta.connect(k))
    }

    function X() {}

    function U() {}

    function Q() {}
    var u = vc.prototype;
    u.wa = function(a) {
        this.ja = a;
        this.b = a.b
    };
    u.wa.prototype.Y = function() {};
    var I = null,
        ca = null,
        L = "",
        J = "",
        K = 0,
        y = null,
        M = [],
        C = [],
        R = null,
        sa = !1,
        S = 0,
        la = !1,
        aa = 1,
        Ja = 0,
        Ya = 0,
        Mb = !1,
        Ob = 1,
        Pb = 1,
        Qc = 10,
        Rc = 1E4,
        Sc = 1,
        Ta = null,
        Nb = "",
        Oc = !1,
        qb = [],
        rb = !1,
        Pc = !1;
    document.addEventListener("touchend", e, !0);
    document.addEventListener("click", e, !0);
    document.addEventListener("keydown", e, !0);
    var da = {},
        bd = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    c.prototype.Dc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.G.disconnect();
        this.G.connect(a)
    };
    c.prototype.remove = function() {
        this.aa.disconnect();
        this.Pa.disconnect();
        this.H.disconnect();
        this.G.disconnect()
    };
    c.prototype.uc = function() {
        return this.aa
    };
    k.prototype.Dc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.G.disconnect();
        this.G.connect(a)
    };
    k.prototype.remove = function() {
        this.aa.disconnect();
        this.ai.disconnect();
        this.Ic.disconnect();
        this.fj.disconnect();
        this.H.disconnect();
        this.G.disconnect()
    };
    k.prototype.uc = function() {
        return this.aa
    };
    m.prototype.Dc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.G.disconnect();
        this.G.connect(a)
    };
    m.prototype.remove = function() {
        this.aa.disconnect();
        this.df.disconnect();
        this.H.disconnect();
        this.G.disconnect()
    };
    m.prototype.uc = function() {
        return this.aa
    };
    w.prototype.Dc = function(a) {
        this.G.disconnect();
        this.G.connect(a);
        this.H.disconnect();
        this.H.connect(a)
    };
    w.prototype.remove = function() {
        this.aa.disconnect();
        this.Ic.disconnect();
        this.kb.disconnect();
        this.oc.disconnect();
        this.G.disconnect();
        this.H.disconnect();
        this.mj.disconnect()
    };
    w.prototype.uc = function() {
        return this.aa
    };
    z.prototype.Dc = function(a) {
        this.G.disconnect();
        this.G.connect(a);
        this.H.disconnect();
        this.H.connect(a)
    };
    z.prototype.remove = function() {
        this.aa.disconnect();
        this.Pa.disconnect();
        this.kb.disconnect();
        this.oc.disconnect();
        this.G.disconnect();
        this.H.disconnect()
    };
    z.prototype.uc = function() {
        return this.aa
    };
    O.prototype.Dc = function(a) {
        this.ea.disconnect();
        this.ea.connect(a)
    };
    O.prototype.remove = function() {
        this.ea.disconnect()
    };
    O.prototype.uc = function() {
        return this.ea
    };
    n.prototype.Dc = function(a) {
        this.ea.disconnect();
        this.ea.connect(a)
    };
    n.prototype.remove = function() {
        this.kb.disconnect();
        this.oc.disconnect();
        this.ea.disconnect()
    };
    n.prototype.uc = function() {
        return this.ea
    };
    t.prototype.Dc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.G.disconnect();
        this.G.connect(a)
    };
    t.prototype.remove = function() {
        this.kb.disconnect();
        this.li.disconnect();
        this.aa.disconnect();
        this.H.disconnect();
        this.G.disconnect()
    };
    t.prototype.uc = function() {
        return this.aa
    };
    Y.prototype.Ix = function(a, b) {
        .01 > a && (a = .01);
        this.mk.gain.value = a;
        this.lk.gain.value = Math.pow(1 / a, .6) * b
    };
    Y.prototype.shape = function(a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    Y.prototype.Ev = function(a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), f = 0, e = 0; 32768 > e; ++e) f = e / 32768, f = this.shape(f, c, d), this.dj[32768 + e] = f, this.dj[32768 - e - 1] = -f
    };
    Y.prototype.Dc = function(a) {
        this.H.disconnect();
        this.H.connect(a);
        this.G.disconnect();
        this.G.connect(a)
    };
    Y.prototype.remove = function() {
        this.aa.disconnect();
        this.mk.disconnect();
        this.Uk.disconnect();
        this.lk.disconnect();
        this.H.disconnect();
        this.G.disconnect()
    };
    Y.prototype.uc = function() {
        return this.aa
    };
    P.prototype.Dc = function(a) {
        this.ea.disconnect();
        this.ea.connect(a)
    };
    P.prototype.remove = function() {
        this.ea.disconnect()
    };
    P.prototype.uc = function() {
        return this.ea
    };
    F.prototype.Sb = function() {
        this.ea.getFloatFrequencyData(this.Cv);
        this.ea.getByteTimeDomainData(this.hr);
        for (var a = this.ea.fftSize, b = 0, c = this.gi = 0, d = 0; b < a; b++) d = (this.hr[b] - 128) / 128, 0 > d && (d = -d), this.gi < d && (this.gi = d), c += d * d;
        this.gi = l(this.gi);
        l(Math.sqrt(c / a))
    };
    F.prototype.Dc = function(a) {
        this.ea.disconnect();
        this.ea.connect(a)
    };
    F.prototype.remove = function() {
        this.ea.disconnect()
    };
    F.prototype.uc = function() {
        return this.ea
    };
    G.prototype.mi = function(a) {
        this.la = a
    };
    G.prototype.xj = function() {
        return !!this.la
    };
    G.prototype.Sb = function() {};
    v.prototype.ux = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = C.length; a < b; ++a) d = C[a], C[c] = d, d.buffer === this ? d.stop() : ++c;
        C.length = c;
        this.vg && (this.vg.disconnect(), this.vg = null);
        this.Bg && (this.Bg.disconnect(), this.Bg = null);
        this.Nd = this.ca = null
    };
    v.prototype.Po = function() {
        if (!this.ca && this.Nd) {
            var a = this;
            if (y.decodeAudioData) y.decodeAudioData(this.Nd, function(b) {
                a.ca = b;
                a.Nd = null;
                var c, d, f;
                if (ja(a.ik) || la) ja(a.Zi) || (c = a.Zi.df, c.normalize = a.lq, c.buffer = b);
                else if (a.Cg.length) {
                    c = 0;
                    for (d = a.Cg.length; c < d; c++) {
                        b = a.Cg[c];
                        f = new x(a, b.pr);
                        f.jn(!0);
                        if ("undefined" !== typeof b.nq && (b.la = I.vj(b.nq), !b.la)) continue;
                        if (b.la) {
                            var e = Ua(b.la.x, b.la.y, -b.la.j.tb(), Ja, Ya, !0),
                                k = Ua(b.la.x, b.la.y, -b.la.j.tb(), Ja, Ya, !1);
                            f.hn(e, k, Ia(b.la.i - b.la.j.tb()), b.Zl, b.Fm, b.Im);
                            f.mi(b.la)
                        } else f.hn(b.x, b.y, b.Qf, b.Zl, b.Fm, b.Im);
                        f.play(a.Am, a.Dn, a.vk);
                        a.hk && f.pause();
                        C.push(f)
                    }
                    A(a.Cg)
                } else f = new x(a, a.ik || ""), f.play(a.Am, a.Dn, a.vk), a.hk && f.pause(), C.push(f)
            }, function() {
                a.kj = !0
            });
            else if (this.ca = y.createBuffer(this.Nd, !1), this.Nd = null, ja(this.ik) || la) ja(this.Zi) || (b = this.Zi.df, b.normalize = this.lq, b.buffer = this.ca);
            else {
                var b = new x(this, this.ik);
                b.play(this.Am, this.Dn, this.vk);
                this.hk && b.pause();
                C.push(b)
            }
        }
    };
    v.prototype.yp = function() {
        switch (this.V) {
            case 0:
                var a = 4 <= this.ca.readyState;
                a && (this.En = !0);
                return a || this.En;
            case 1:
                return !!this.Nd || !!this.ca;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    v.prototype.vw = function() {
        switch (this.V) {
            case 0:
                return this.yp();
            case 1:
                return !!this.ca;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    v.prototype.lw = function() {
        switch (this.V) {
            case 0:
                return !!this.ca.error;
            case 1:
                return this.kj
        }
        return !1
    };
    x.prototype.sf = function() {
        switch (this.V) {
            case 0:
                return this.g.ended;
            case 1:
                return 1 === this.buffer.V ? !this.ud && !this.va && this.g.loop || this.kc ? !1 : this.dg : this.g.ended;
            case 2:
                return this.dg;
            case 3:
                !0
        }
        return !0
    };
    x.prototype.fu = function() {
        return this.ud || this.va ? !0 : this.sf()
    };
    x.prototype.jn = function(a) {
        1 === K && (!this.Ad && a ? this.$a && (this.Sa || (this.Sa = y.createPanner(), this.Sa.panningModel = "number" === typeof this.Sa.panningModel ? Ob : ["equalpower", "HRTF", "soundfield"][Ob], this.Sa.distanceModel = "number" === typeof this.Sa.distanceModel ? Pb : ["linear", "inverse", "exponential"][Pb], this.Sa.refDistance = Qc, this.Sa.maxDistance = Rc, this.Sa.rolloffFactor = Sc), this.$a.disconnect(), this.$a.connect(this.Sa), this.Sa.connect(p(this.tag)), this.Ad = !0) : this.Ad && !a && this.$a && (this.Sa.disconnect(), this.$a.disconnect(), this.$a.connect(p(this.tag)), this.Ad = !1))
    };
    x.prototype.hn = function(a, b, c, d, f, e) {
        this.Ad && 1 === K && (this.Sa.setPosition(a, b, 0), this.Sa.setOrientation(Math.cos(B(c)), Math.sin(B(c)), 0), this.Sa.coneInnerAngle = d, this.Sa.coneOuterAngle = f, this.Sa.coneOuterGain = e, this.Dq = a, this.Eq = b, this.zq = c, this.Aq = d, this.Bq = f, this.Cq = e)
    };
    x.prototype.mi = function(a) {
        this.Ad && 1 === K && (this.xb || (this.xb = new G), this.xb.mi(a))
    };
    x.prototype.Sb = function(a) {
        if (this.Ad && 1 === K && this.xb && this.xb.xj() && this.uf()) {
            this.xb.Sb(a);
            a = this.xb.la;
            var b = Ua(a.x, a.y, -a.j.tb(), Ja, Ya, !0),
                c = Ua(a.x, a.y, -a.j.tb(), Ja, Ya, !1);
            this.Sa.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.xb.la.i && (b = a.i - a.j.tb(), this.Sa.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    x.prototype.play = function(a, b, c, e) {
        var k = this.g;
        this.zd = a;
        this.volume = b;
        c = c || 0;
        e = e || 0;
        switch (this.V) {
            case 0:
                1 !== k.playbackRate && (k.playbackRate = 1);
                k.volume !== b * aa && (k.volume = b * aa);
                k.loop !== a && (k.loop = a);
                k.muted && (k.muted = !1);
                if (k.currentTime !== c) try {
                    k.currentTime = c
                } catch (m) {}
                g(this);
                break;
            case 1:
                this.muted = !1;
                this.wg = 1;
                if (1 === this.buffer.V) this.$a.gain.value = b * aa, this.ud || (this.g = y.createBufferSource(), this.g.buffer = this.buffer.ca, this.g.connect(this.$a)), this.g.onended = this.Lm, this.Si = this.g, this.g.loop = a, this.dg = !1, 0 === c ? d(this.g, e) : f(this.g, c, this.Ie(), e);
                else {
                    1 !== k.playbackRate && (k.playbackRate = 1);
                    k.loop !== a && (k.loop = a);
                    k.volume = b * aa;
                    if (k.currentTime !== c) try {
                        k.currentTime = c
                    } catch (h) {}
                    g(this)
                }
                break;
            case 2:
                (!this.ud && this.va || 0 !== c) && k.seekTo(c);
                k.play();
                this.dg = !1;
                break;
            case 3:
                I.Jb ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.gg ? I.hb.X : I.oe.X) - c;
        this.kc = this.va = this.ud = !1
    };
    x.prototype.stop = function() {
        switch (this.V) {
            case 0:
                this.g.paused || this.g.pause();
                break;
            case 1:
                1 === this.buffer.V ? a(this.g) : this.g.paused || this.g.pause();
                break;
            case 2:
                this.g.stop();
                break;
            case 3:
                I.Jb && AppMobi.context.stopSound(this.src)
        }
        this.va = !0;
        this.kc = !1
    };
    x.prototype.pause = function() {
        if (!(this.ud || this.va || this.sf() || this.kc)) {
            switch (this.V) {
                case 0:
                    this.g.paused || this.g.pause();
                    break;
                case 1:
                    1 === this.buffer.V ? (this.$b = this.Sl(!0), this.zd && (this.$b = this.$b % this.Ie()), this.kc = !0, a(this.g)) : this.g.paused || this.g.pause();
                    break;
                case 2:
                    this.g.pause();
                    break;
                case 3:
                    I.Jb && AppMobi.context.stopSound(this.src)
            }
            this.kc = !0
        }
    };
    x.prototype.yx = function() {
        if (!(this.ud || this.va || this.sf()) && this.kc) {
            switch (this.V) {
                case 0:
                    g(this);
                    break;
                case 1:
                    1 === this.buffer.V ? (this.g = y.createBufferSource(), this.g.buffer = this.buffer.ca, this.g.connect(this.$a), this.g.onended = this.Lm, this.Si = this.g, this.g.loop = this.zd, this.$a.gain.value = aa * this.volume * this.wg, this.Qk(), this.startTime = (this.gg ? I.hb.X : I.oe.X) - this.$b / (this.playbackRate || .001), f(this.g, this.$b, this.Ie())) : g(this);
                    break;
                case 2:
                    this.g.play();
                    break;
                case 3:
                    I.Jb && AppMobi.context.resumeSound(this.src)
            }
            this.kc = !1
        }
    };
    x.prototype.seek = function(a) {
        if (!(this.ud || this.va || this.sf())) switch (this.V) {
            case 0:
                try {
                    this.g.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.V) this.kc ? this.$b = a : (this.pause(), this.$b = a, this.yx());
                else try {
                    this.g.currentTime = a
                } catch (c) {}
                break;
            case 3:
                I.Jb && AppMobi.context.seekSound(this.src, a)
        }
    };
    x.prototype.tx = function(a) {
        1 === this.V && (this.Ad ? (this.Sa.disconnect(), this.Sa.connect(a)) : (this.$a.disconnect(), this.$a.connect(a)))
    };
    x.prototype.Ie = function() {
        var a = 0;
        switch (this.V) {
            case 0:
                "undefined" !== typeof this.g.duration && (a = this.g.duration);
                break;
            case 1:
                a = this.buffer.ca.duration;
                break;
            case 2:
                a = this.g.getDuration();
                break;
            case 3:
                I.Jb && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    x.prototype.Sl = function(a) {
        var b = this.Ie(),
            c = 0;
        switch (this.V) {
            case 0:
                "undefined" !== typeof this.g.currentTime && (c = this.g.currentTime);
                break;
            case 1:
                if (1 === this.buffer.V) {
                    if (this.kc) return this.$b;
                    c = (this.gg ? I.hb.X : I.oe.X) - this.startTime
                } else "undefined" !== typeof this.g.currentTime && (c = this.g.currentTime);
                break;
            case 3:
                I.Jb && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.zd && c > b && (c = b);
        return c
    };
    x.prototype.uf = function() {
        return !this.kc && !this.ud && !this.va && !this.sf()
    };
    x.prototype.Ox = function() {
        return !this.ud && !this.va && !this.sf()
    };
    x.prototype.Yx = function() {
        var a = this.volume * aa;
        isFinite(a) || (a = 0);
        switch (this.V) {
            case 0:
                "undefined" !== typeof this.g.volume && this.g.volume !== a && (this.g.volume = a);
                break;
            case 1:
                1 === this.buffer.V ? this.$a.gain.value = a * this.wg : "undefined" !== typeof this.g.volume && this.g.volume !== a && (this.g.volume = a)
        }
    };
    x.prototype.ij = function(a) {
        switch (this.V) {
            case 0:
                this.g.muted !== !!a && (this.g.muted = !!a);
                break;
            case 1:
                1 === this.buffer.V ? (this.wg = a ? 0 : 1, this.$a.gain.value = aa * this.volume * this.wg) : this.g.muted !== !!a && (this.g.muted = !!a)
        }
    };
    x.prototype.Jx = function() {
        this.ig = !0;
        this.ij(this.ig || this.Mh)
    };
    x.prototype.cr = function(a) {
        this.Mh = !!a;
        this.ij(this.ig || this.Mh)
    };
    x.prototype.Qk = function() {
        var a = this.playbackRate;
        this.gg && (a *= I.Rg);
        switch (this.V) {
            case 0:
                this.g.playbackRate !== a && (this.g.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.V ? this.g.playbackRate.value !== a && (this.g.playbackRate.value = a) : this.g.playbackRate !== a && (this.g.playbackRate = a)
        }
    };
    x.prototype.Mx = function(b) {
        switch (this.V) {
            case 0:
                b ? this.uf() ? (this.Ac = !0, this.g.pause()) : this.Ac = !1 : this.Ac && (this.g.play(), this.Ac = !1);
                break;
            case 1:
                b ? this.uf() ? (this.Ac = !0, 1 === this.buffer.V ? (this.$b = this.Sl(!0), this.zd && (this.$b = this.$b % this.Ie()), a(this.g)) : this.g.pause()) : this.Ac = !1 : this.Ac && (1 === this.buffer.V ? (this.g = y.createBufferSource(), this.g.buffer = this.buffer.ca, this.g.connect(this.$a), this.g.onended = this.Lm, this.Si = this.g, this.g.loop = this.zd, this.$a.gain.value = aa * this.volume * this.wg, this.Qk(), this.startTime = (this.gg ? I.hb.X : I.oe.X) - this.$b / (this.playbackRate || .001), f(this.g, this.$b, this.Ie())) : this.g.play(), this.Ac = !1);
                break;
            case 2:
                b ? this.uf() ? (this.g.pause(), this.Ac = !0) : this.Ac = !1 : this.Ac && (this.Ac = !1, this.g.play())
        }
    };
    u.pa = function(a) {
        this.type = a;
        I = this.b = a.b;
        ca = this;
        this.lc = null;
        this.Rh = -600;
        this.b.Fj && (rb = !0);
        !(this.b.lg || this.b.Aj && (this.b.fm || this.b.Bj)) || this.b.Dj || this.b.Ha || this.b.wp || rb || (Oc = !0);
        y = null;
        "undefined" !== typeof AudioContext ? (K = 1, y = new AudioContext) : "undefined" !== typeof webkitAudioContext && (K = 1, y = new webkitAudioContext);
        this.b.lg && y && (y.close && y.close(), "undefined" !== typeof AudioContext ? y = new AudioContext : "undefined" !== typeof webkitAudioContext && (y = new webkitAudioContext));
        1 !== K && (this.b.jc && "undefined" !== typeof window.Media ? K = 2 : this.b.xp && (K = 3));
        2 === K && (J = location.href, a = J.lastIndexOf("/"), -1 < a && (J = J.substr(0, a + 1)), J = J.replace("file://", ""));
        if (this.b.ww && this.b.xw && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.We(this);
        else {
            if (this.b.Jb) sa = this.b.Aj;
            else try {
                sa = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (b) {
                sa = !1
            }
            this.b.Kk(this)
        }
    };
    var Ba = u.pa.prototype;
    Ba.Y = function() {
        this.b.Rf = this;
        S = this.B[0];
        this.fe = this.B[1];
        this.cx = 0 !== this.B[2];
        this.jq = 0;
        Ob = this.B[3];
        Pb = this.B[4];
        this.Rh = -this.B[5];
        Qc = this.B[6];
        Rc = this.B[7];
        Sc = this.B[8];
        this.lc = new G;
        var a = this.b.F || this.b.width,
            b = this.b.D || this.b.height;
        1 === K && (y.listener.setPosition(a / 2, b / 2, this.Rh), y.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Ta && Ta.disconnect();
            Nb = b.toLowerCase();
            Ta = y.createMediaStreamSource(a);
            Ta.connect(p(Nb))
        });
        this.b.po(function(a) {
            ca.Zw(a)
        });
        var c = this;
        this.b.Ut(function(a) {
            c.Rw(a)
        })
    };
    Ba.Rw = function(a) {
        var b, c, d;
        b = 0;
        for (c = C.length; b < c; b++) d = C[b], d.xb && d.xb.la === a && (d.xb.la = null, d.Ad && d.uf() && d.zd && d.stop());
        this.lc.la === a && (this.lc.la = null)
    };
    Ba.Ob = function() {
        var a = {
                silent: la,
                masterVolume: aa,
                listenerZ: this.Rh,
                listenerUid: this.lc.xj() ? this.lc.la.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            c, d, f, e, k, g;
        c = 0;
        for (d = C.length; c < d; c++) f = C[c], !f.Ox() || 3 === this.fe || f.xd && 1 === this.fe || !f.xd && 2 === this.fe || (e = f.Sl(), f.zd && (e = e % f.Ie()), e = {
            tag: f.tag,
            buffersrc: f.buffer.src,
            is_music: f.xd,
            playbackTime: e,
            volume: f.volume,
            looping: f.zd,
            muted: f.ig,
            playbackRate: f.playbackRate,
            paused: f.kc,
            resume_position: f.$b
        }, f.Ad && (e.pan = {}, g = e.pan, f.xb && f.xb.xj() ? g.objUid = f.xb.la.uid : (g.x = f.Dq, g.y = f.Eq, g.a = f.zq), g.ia = f.Aq, g.oa = f.Bq, g.og = f.Cq), b.push(e));
        b = a.effects;
        for (k in da)
            if (da.hasOwnProperty(k)) {
                f = [];
                c = 0;
                for (d = da[k].length; c < d; c++) f.push({
                    type: da[k][c].type,
                    params: da[k][c].Na
                });
                b[k] = f
            }
        return a
    };
    var db = [];
    Ba.mc = function(a) {
        var b = a.silent;
        aa = a.masterVolume;
        this.Rh = a.listenerZ;
        this.lc.mi(null);
        var d = a.listenerUid; - 1 !== d && (this.lc.Qj = d, db.push(this.lc));
        var d = a.playing,
            f, e, g, h, l, r, p, q, u, v, U;
        if (3 !== this.fe)
            for (f = 0, e = C.length; f < e; f++) u = C[f], u.xd && 1 === this.fe || (u.xd || 2 !== this.fe) && u.stop();
        for (l in da)
            if (da.hasOwnProperty(l))
                for (f = 0, e = da[l].length; f < e; f++) da[l][f].remove();
        Za(da);
        for (l in a.effects)
            if (a.effects.hasOwnProperty(l))
                for (r = a.effects[l], f = 0, e = r.length; f < e; f++) switch (g = r[f].type, v = r[f].params, g) {
                    case "filter":
                        N(l, new c(v[0], v[1], v[2], v[3], v[4], v[5]));
                        break;
                    case "delay":
                        N(l, new k(v[0], v[1], v[2]));
                        break;
                    case "convolve":
                        g = v[2];
                        u = this.sj(g, !1);
                        u.ca ? g = new m(u.ca, v[0], v[1], g) : (g = new m(null, v[0], v[1], g), u.lq = v[0], u.Zi = g);
                        N(l, g);
                        break;
                    case "flanger":
                        N(l, new w(v[0], v[1], v[2], v[3], v[4]));
                        break;
                    case "phaser":
                        N(l, new z(v[0], v[1], v[2], v[3], v[4], v[5]));
                        break;
                    case "gain":
                        N(l, new O(v[0]));
                        break;
                    case "tremolo":
                        N(l, new n(v[0], v[1]));
                        break;
                    case "ringmod":
                        N(l, new t(v[0], v[1]));
                        break;
                    case "distortion":
                        N(l, new Y(v[0], v[1], v[2], v[3], v[4]));
                        break;
                    case "compressor":
                        N(l, new P(v[0], v[1], v[2], v[3], v[4]));
                        break;
                    case "analyser":
                        N(l, new F(v[0], v[1]))
                }
        f = 0;
        for (e = d.length; f < e; f++) 3 === this.fe || (a = d[f], g = a.buffersrc, h = a.is_music, l = a.tag, r = a.playbackTime, p = a.looping, q = a.volume, U = (v = a.pan) && v.hasOwnProperty("objUid") ? v.objUid : -1, h && 1 === this.fe) || !h && 2 === this.fe || ((u = this.fp(g, l, h, p, q)) ? (u.$b = a.resume_position, u.jn(!!v), u.play(p, q, r), u.Qk(), u.Yx(), u.ij(u.ig || u.Mh), a.paused && u.pause(), a.muted && u.Jx(), u.ij(u.ig || u.Mh), v && (-1 !== U ? (u.xb = u.xb || new G, u.xb.Qj = U, db.push(u.xb)) : u.hn(v.x, v.y, v.a, v.ia, v.oa, v.og))) : (u = this.sj(g, h), u.vk = r, u.hk = a.paused, v && (-1 !== U ? u.Cg.push({
            nq: U,
            Zl: v.ia,
            Fm: v.oa,
            Im: v.og,
            pr: l
        }) : u.Cg.push({
            x: v.x,
            y: v.y,
            Qf: v.a,
            Zl: v.ia,
            Fm: v.oa,
            Im: v.og,
            pr: l
        }))));
        if (b && !la) {
            f = 0;
            for (e = C.length; f < e; f++) C[f].cr(!0);
            la = !0
        } else if (!b && la) {
            f = 0;
            for (e = C.length; f < e; f++) C[f].cr(!1);
            la = !1
        }
    };
    Ba.Jd = function() {
        var a, b, c, d;
        a = 0;
        for (b = db.length; a < b; a++) c = db[a], d = this.b.vj(c.Qj), c.mi(d), c.Qj = -1, d && (Ja = d.x, Ya = d.y);
        A(db)
    };
    Ba.Zw = function(a) {
        if (!this.cx) {
            !a && y && y.resume && (y.resume(), Mb = !1);
            var b, c;
            b = 0;
            for (c = C.length; b < c; b++) C[b].Mx(a);
            a && y && y.suspend && (y.suspend(), Mb = !0)
        }
    };
    Ba.Sb = function() {
        var a = this.b.Fe,
            b, c, d;
        b = 0;
        for (c = C.length; b < c; b++) d = C[b], d.Sb(a), 0 !== S && d.Qk();
        var f, e;
        for (f in da)
            if (da.hasOwnProperty(f))
                for (d = da[f], b = 0, c = d.length; b < c; b++) e = d[b], e.Sb && e.Sb();
        1 === K && this.lc.xj() && (this.lc.Sb(a), Ja = this.lc.la.x, Ya = this.lc.la.y, y.listener.setPosition(this.lc.la.x, this.lc.la.y, this.Rh))
    };
    var eb = [];
    Ba.Kx = function(a) {
        var b, c, d, f, e, k = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (d = a[b], f = d[0], d = 2 * d[1], (e = 4 < f.length && ".ogg" === f.substr(f.length - 4)) && sa || !e && !sa) eb.push({
                filename: f,
                size: d,
                la: null
            }), k += d;
        return k
    };
    Ba.Qx = function() {
        var a, b, c, d;
        a = 0;
        for (b = eb.length; a < b; ++a) c = eb[a], d = this.b.Gl + c.filename, c.la = this.sj(d, !1)
    };
    Ba.Rv = function() {
        var a = 0,
            b, c, d;
        b = 0;
        for (c = eb.length; b < c; ++b) d = eb[b], d.la.vw() || d.la.lw() || this.b.Ha || this.b.Bj ? a += d.size : d.la.yp() && (a += Math.floor(d.size / 2));
        return a
    };
    Ba.vx = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = M.length; a < b; ++a) d = M[a], M[c] = d, d.xd ? d.ux() : ++c;
        M.length = c
    };
    Ba.sj = function(a, b) {
        var c, d, f, e = null;
        c = 0;
        for (d = M.length; c < d; c++)
            if (f = M[c], f.src === a) {
                e = f;
                break
            }
        e || (rb && b && this.vx(), e = new v(a, b), M.push(e));
        return e
    };
    Ba.fp = function(a, b, c, d, f) {
        var e, k, g;
        e = 0;
        for (k = C.length; e < k; e++)
            if (g = C[e], g.src === a && (g.fu() || c)) return g.tag = b, g;
        a = this.sj(a, c);
        if (!a.ca) return "<preload>" !== b && (a.ik = b, a.Am = d, a.Dn = f), null;
        g = new x(a, b);
        C.push(g);
        return g
    };
    var Ka = [];
    X.prototype.Ki = function(a) {
        return nb(L, a)
    };
    u.d = new X;
    U.prototype.Play = function(a, b, c, d) {
        !la && (c = Math.pow(10, c / 20), isFinite(c) || (c = 0), 0 > c && (c = 0), 1 < c && (c = 1), R = this.fp(this.b.Gl + a[0] + (sa ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (R.jn(!1), R.play(0 !== b, c, 0, this.jq), this.jq = 0)
    };
    U.prototype.Dt = function(a) {
        H(a);
        var b;
        a = 0;
        for (b = Ka.length; a < b; a++) Ka[a].stop()
    };
    U.prototype.Et = function() {
        var a, b;
        a = 0;
        for (b = C.length; a < b; a++) C[a].stop()
    };
    u.p = new U;
    Q.prototype.hs = function(a, b) {
        H(b, !0);
        Ka.length ? a.r(Ka[0].Ie()) : a.r(0)
    };
    u.T = new Q
})();

function wc(h) {
    this.b = h
}
(function() {
    function h() {
        p && q && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(d) {
            b.Xw(d)
        })
    }

    function g() {}

    function e() {}
    var r = wc.prototype;
    r.wa = function(b) {
        this.ja = b;
        this.b = b.b
    };
    var l = r.wa.prototype;
    l.Y = function() {};
    var p = !1,
        q = !1;
    document.addEventListener("DOMContentLoaded", function() {
        if (window.C2_RegisterSW && navigator.we) {
            var b = document.createElement("script");
            b.onload = function() {
                p = !0;
                h()
            };
            b.src = "offlineClient.js";
            document.head.appendChild(b)
        }
    });
    var b = null;
    l.rq = function() {
        q = !0;
        h()
    };
    r.pa = function(b) {
        this.type = b;
        this.b = b.b
    };
    l = r.pa.prototype;
    l.Y = function() {
        var d = this;
        window.addEventListener("resize", function() {
            d.b.trigger(wc.prototype.d.Vs, d)
        });
        b = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            d.b.trigger(wc.prototype.d.Ss, d)
        }), window.addEventListener("offline", function() {
            d.b.trigger(wc.prototype.d.Qs, d)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            d.b.Af = 1;
            d.b.trigger(wc.prototype.d.Oi, d)
        }), window.applicationCache.addEventListener("progress", function(b) {
            d.b.Af = b.loaded / b.total || 0
        }));
        this.b.Jb || (document.addEventListener("appMobi.device.update.available", function() {
            d.b.trigger(wc.prototype.d.Oi, d)
        }), document.addEventListener("backbutton", function() {
            d.b.trigger(wc.prototype.d.Ji, d)
        }), document.addEventListener("menubutton", function() {
            d.b.trigger(wc.prototype.d.Un, d)
        }), document.addEventListener("searchbutton", function() {
            d.b.trigger(wc.prototype.d.Ys, d)
        }), document.addEventListener("tizenhwkey", function(b) {
            var a;
            switch (b.keyName) {
                case "back":
                    a = d.b.trigger(wc.prototype.d.Ji, d);
                    !a && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (a = d.b.trigger(wc.prototype.d.Un, d)) || b.preventDefault()
            }
        }));
        this.b.mm && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(b) {
            d.b.trigger(wc.prototype.d.Ji, d) && (b.handled = !0)
        }) : this.b.lm && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!d.b.trigger(wc.prototype.d.Ji, d)
        });
        this.b.po(function(b) {
            b ? d.b.trigger(wc.prototype.d.Ts, d) : d.b.trigger(wc.prototype.d.Us, d)
        });
        this.Bp = "undefined" !== typeof window.is_scirra_arcade
    };
    l.Xw = function(b) {
        b = b.data.type;
        "downloading-update" === b ? this.b.trigger(wc.prototype.d.$s, this) : "update-ready" === b || "update-pending" === b ? this.b.trigger(wc.prototype.d.Oi, this) : "offline-ready" === b && this.b.trigger(wc.prototype.d.Rs, this)
    };
    g.prototype.Ss = function() {
        return !0
    };
    g.prototype.Qs = function() {
        return !0
    };
    g.prototype.Oi = function() {
        return !0
    };
    g.prototype.Us = function() {
        return !0
    };
    g.prototype.Ts = function() {
        return !0
    };
    g.prototype.Vs = function() {
        return !0
    };
    g.prototype.Ji = function() {
        return !0
    };
    g.prototype.Un = function() {
        return !0
    };
    g.prototype.Ys = function() {
        return !0
    };
    g.prototype.$s = function() {
        return !0
    };
    g.prototype.Oi = function() {
        return !0
    };
    g.prototype.Rs = function() {
        return !0
    };
    r.d = new g;
    e.prototype.Ur = function() {
        this.b.ic ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.Bp || this.b.Ha || window.close()
    };
    e.prototype.ps = function(b, f) {
        this.b.ic ? CocoonJS.App.openURL(b) : this.b.Lc ? ejecta.openURL(b) : this.b.lm ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(b, {
            openExternal: !0
        }) : this.b.jc ? window.open(b, "_system") : this.Bp || this.b.Ha || window.open(b, f)
    };
    r.p = new e;
    r.T = new function() {}
})();

function tc(h) {
    this.b = h
}
(function() {
    function h() {
        this.name = "";
        this.Hg = 0;
        this.Na = []
    }

    function g() {
        d++;
        d === b.length && b.push(new h);
        return b[d]
    }

    function e() {
        return 0 > d ? null : b[d]
    }

    function r() {}

    function l() {}

    function p() {}
    var q = tc.prototype;
    q.wa = function(b) {
        this.ja = b;
        this.b = b.b
    };
    q.wa.prototype.Y = function() {};
    q.pa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var b = [],
        d = -1;
    q.pa.prototype.Y = function() {
        var b = this;
        window.c2_callFunction = function(a, c) {
            var e, m, l, h = g();
            h.name = a.toLowerCase();
            h.Hg = 0;
            if (c)
                for (h.Na.length = c.length, e = 0, m = c.length; e < m; ++e) l = c[e], h.Na[e] = "number" === typeof l || "string" === typeof l ? l : "boolean" === typeof l ? l ? 1 : 0 : 0;
            else A(h.Na);
            b.b.trigger(tc.prototype.d.Mi, b, h.name);
            d--;
            return h.Hg
        }
    };
    r.prototype.Mi = function(b) {
        var a = e();
        return a ? nb(b, a.name) : !1
    };
    r.prototype.Xr = function(b, a, c) {
        var d = e();
        if (!d) return !1;
        b = ua(b);
        return 0 > b || b >= d.Na.length ? !1 : jc(d.Na[b], a, c)
    };
    q.d = new r;
    l.prototype.CallFunction = function(b, a) {
        var c = g();
        c.name = b.toLowerCase();
        c.Hg = 0;
        Da(c.Na, a);
        this.b.trigger(tc.prototype.d.Mi, this, c.name);
        d--
    };
    l.prototype.ot = function(b) {
        var a = e();
        a && (a.Hg = b)
    };
    q.p = new l;
    p.prototype.bt = function(b, a) {
        a = ua(a);
        var c = e();
        c ? 0 <= a && a < c.Na.length ? b.oi(c.Na[a]) : b.K(0) : b.K(0)
    };
    p.prototype.Hn = function(b, a) {
        var c = g();
        c.name = a.toLowerCase();
        c.Hg = 0;
        A(c.Na);
        var e, m;
        e = 2;
        for (m = arguments.length; e < m; e++) c.Na.push(arguments[e]);
        this.b.trigger(tc.prototype.d.Mi, this, c.name);
        d--;
        b.oi(c.Hg)
    };
    q.T = new p
})();

function xc(h) {
    this.b = h
}
(function() {
    function h() {}
    var g = xc.prototype;
    g.wa = function(e) {
        this.ja = e;
        this.b = e.b
    };
    g.wa.prototype.Y = function() {};
    g.pa = function(e) {
        this.type = e;
        this.b = e.b;
        this.Ph = Array(256);
        this.Di = Array(256);
        this.me = 0
    };
    var e = g.pa.prototype;
    e.Y = function() {
        var e = this;
        this.b.Ha || (jQuery(document).keydown(function(g) {
            e.Sw(g)
        }), jQuery(document).keyup(function(g) {
            e.Tw(g)
        }))
    };
    var r = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    e.Sw = function(e) {
        var g = !1;
        window != window.top && -1 < r.indexOf(e.which) && (e.preventDefault(), g = !0, e.stopPropagation());
        if (this.Ph[e.which]) this.Di[e.which] && !g && e.preventDefault();
        else {
            this.Ph[e.which] = !0;
            this.me = e.which;
            this.b.yc = !0;
            this.b.trigger(xc.prototype.d.Gs, this);
            var h = this.b.trigger(xc.prototype.d.Qn, this),
                b = this.b.trigger(xc.prototype.d.Ns, this);
            this.b.yc = !1;
            if (h || b) this.Di[e.which] = !0, g || e.preventDefault()
        }
    };
    e.Tw = function(e) {
        this.Ph[e.which] = !1;
        this.me = e.which;
        this.b.yc = !0;
        this.b.trigger(xc.prototype.d.Kn, this);
        var g = this.b.trigger(xc.prototype.d.Sn, this),
            h = this.b.trigger(xc.prototype.d.Rn, this);
        this.b.yc = !1;
        if (g || h || this.Di[e.which]) this.Di[e.which] = !0, e.preventDefault()
    };
    e.Ag = function() {
        var e;
        for (e = 0; 256 > e; ++e)
            if (this.Ph[e]) {
                this.Ph[e] = !1;
                this.me = e;
                this.b.trigger(xc.prototype.d.Kn, this);
                var g = this.b.trigger(xc.prototype.d.Sn, this),
                    h = this.b.trigger(xc.prototype.d.Rn, this);
                if (g || h) this.Di[e] = !0
            }
    };
    e.Ob = function() {
        return {
            triggerKey: this.me
        }
    };
    e.mc = function(e) {
        this.me = e.triggerKey
    };
    h.prototype.Qn = function(e) {
        return e === this.me
    };
    h.prototype.Gs = function() {
        return !0
    };
    h.prototype.Kn = function() {
        return !0
    };
    h.prototype.Sn = function(e) {
        return e === this.me
    };
    h.prototype.Ns = function(e) {
        return e === this.me
    };
    h.prototype.Rn = function(e) {
        return e === this.me
    };
    g.d = new h;
    g.p = new function() {};
    g.T = new function() {}
})();

function yc(h) {
    this.b = h
}
(function() {
    function h() {}
    var g = yc.prototype;
    g.wa = function(e) {
        this.ja = e;
        this.b = e.b
    };
    var e = null,
        r = null;
    g.wa.prototype.Y = function() {};
    g.pa = function(e) {
        this.type = e;
        this.b = e.b;
        this.Tq = []
    };
    var l = g.pa.prototype;
    l.Y = function() {
        e = this.b;
        r = this;
        var g = "";
        if ("localhost" === location.hostname || "127.0.0.1" === location.hostname) g = "";
        (function(e, b, d, f, a, c, k) {
            e[a] = e[a] || function() {
                (e[a].qx = e[a].qx || []).push(arguments)
            };
            e[a].Cz = 1 * new Date;
            c = b.createElement(d);
            k = b.getElementsByTagName(d)[0];
            c.async = 1;
            c.src = f;
            k.parentNode.insertBefore(c, k)
        })(window, document, "script", g, "Lagged")
    };
    l.pd = function() {};
    l.Xb = function() {};
    h.prototype.vq = function() {
        return !0
    };
    h.prototype.sq = function() {
        return !0
    };
    h.prototype.Qw = function() {
        return !0
    };
    g.d = new h;
    g.p = {};
    l = g.p;
    l.lu = function(g, h) {
        ha("LaggedAPI: Ad has started");
        e.trigger(yc.prototype.d.sq, r);
        /* LaggedAPI.APIAds.show("interstitial", g, h, function(b) {
            b.success ? console.log("ad done") : console.log(b.Uo);
            ha("LaggedAPI: Ad is done");
            e.trigger(yc.prototype.d.vq, r)
        }) */
    };
    l.iu = function(e) {
        //LaggedAPI.init(e, "lagdevaF3001")
    };
    l.ku = function(g, h) {
        var b = {};
        b.score = g;
        b.board = h;
        /* LaggedAPI.Scores.save(b, function(b) {
            b.success ? console.log("high score saved") : console.log(b.Uo);
            ha("LaggedAPI: HS Saved");
            e.trigger(yc.prototype.d.Qw, r)
        }) */
		new GV().saveScore(g);
    };
    l.ju = function(e) {
        if (!(-1 < this.Tq.indexOf(e))) {
            var g = [];
            g.push(e);
            this.Tq.push(e);
            /* LaggedAPI.Achievements.save(g, function(b) {
                b.success ? console.log("achievement saved") : console.log(b.Uo)
            }) */
        }
    };
    g.T = {}
})();
var zc = !1;
try {
    ! function() {
        var h, g, e;
        ! function() {
            var r = {},
                l = {};
            h = function(e, g, b) {
                r[e] = {
                    su: g,
                    eu: b
                }
            };
            e = g = function(h) {
                function q(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = h.split("/").slice(0, -1), c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        ".." === e ? b.pop() : "." !== e && b.push(e)
                    }
                    return b.join("/")
                }
                if (e.rz = r, l[h]) return l[h];
                if (l[h] = {}, !r[h]) throw Error("Could not find module " + h);
                for (var b, d = r[h], f = d.su, d = d.eu, a = [], c = 0, k = f.length; k > c; c++) "exports" === f[c] ? a.push(b = {}) : a.push(g(q(f[c])));
                f = d.apply(this, a);
                return l[h] = b || f
            }
        }();
        h("promise/all", ["./utils", "exports"], function(e, g) {
            var h = e.isArray,
                q = e.isFunction;
            g.all = function(b) {
                if (!h(b)) throw new TypeError("You must pass an array to all.");
                return new this(function(d, e) {
                    function a(a) {
                        return function(b) {
                            g[a] = b;
                            0 === --h && d(g)
                        }
                    }
                    var c, g = [],
                        h = b.length;
                    0 === h && d([]);
                    for (var l = 0; l < b.length; l++)(c = b[l]) && q(c.then) ? c.then(a(l), e) : (g[l] = c, 0 === --h && d(g))
                })
            }
        });
        h("promise/asap", ["exports"], function(e) {
            function g() {
                return function() {
                    process.Jz(b)
                }
            }

            function h() {
                var c = 0,
                    d = new a(b),
                    e = document.createTextNode("");
                return d.observe(e, {
                        characterData: !0
                    }),
                    function() {
                        e.data = c = ++c % 2
                    }
            }

            function q() {
                return function() {
                    c.setTimeout(b, 1)
                }
            }

            function b() {
                for (var a = 0; a < k.length; a++) {
                    var b = k[a];
                    (0, b[0])(b[1])
                }
                k = []
            }
            var d, f = "undefined" != typeof window ? window : {},
                a = f.MutationObserver || f.WebKitMutationObserver,
                c = "undefined" != typeof global ? global : void 0 === this ? window : this,
                k = [];
            d = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? g() : a ? h() : q();
            e.Yt = function(a, b) {
                1 === k.push([a, b]) && d()
            }
        });
        h("promise/config", ["exports"], function(e) {
            var g = {
                Az: !1
            };
            e.Ko = g;
            e.mu = function(e, h) {
                return 2 !== arguments.length ? g[e] : void(g[e] = h)
            }
        });
        h("promise/polyfill", ["./promise", "./utils", "exports"], function(e, g, h) {
            var q = e.Promise,
                b = g.isFunction;
            h.dx = function() {
                var d;
                d = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in d && "resolve" in d.Promise && "reject" in d.Promise && "all" in d.Promise && "race" in d.Promise && function() {
                    var e;
                    return new d.Promise(function(a) {
                        e = a
                    }), b(e)
                }() || (d.Promise = q)
            }
        });
        h("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(e, g, h, q, b, d, f, a) {
            function c(a) {
                if (!x(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof c)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.Ri = [];
                k(a, this)
            }

            function k(a, b) {
                function c(a) {
                    n(b, a)
                }

                function d(a) {
                    Y(b, a)
                }
                try {
                    a(c, d)
                } catch (e) {
                    d(e)
                }
            }

            function m(a, b, c, d) {
                var e, f, g, k, h = x(c);
                if (h) try {
                    e = c(d), g = !0
                } catch (m) {
                    k = !0, f = m
                } else e = d, g = !0;
                O(b, e) || (h && g ? n(b, e) : k ? Y(b, f) : a === N ? n(b, e) : a === X && Y(b, e))
            }

            function w(a, b, c, d) {
                a = a.Ri;
                var e = a.length;
                a[e] = b;
                a[e + N] = c;
                a[e + X] = d
            }

            function z(a, b) {
                for (var c, d, e = a.Ri, f = a.Qi, g = 0; g < e.length; g += 3) c = e[g], d = e[g + b], m(b, c, d, f);
                a.Ri = null
            }

            function O(a, b) {
                var c, d = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (v(b) && (d = b.then, x(d))) return d.call(b, function(d) {
                        return c ? !0 : (c = !0, void(b !== d ? n(a, d) : t(a, d)))
                    }, function(b) {
                        return c ? !0 : (c = !0, void Y(a, b))
                    }), !0
                } catch (e) {
                    return c ? !0 : (Y(a, e), !0)
                }
                return !1
            }

            function n(a, b) {
                a === b ? t(a, b) : O(a, b) || t(a, b)
            }

            function t(a, b) {
                a.Id === D && (a.Id = H, a.Qi = b, G.async(P, a))
            }

            function Y(a, b) {
                a.Id === D && (a.Id = H, a.Qi = b, G.async(F, a))
            }

            function P(a) {
                z(a, a.Id = N)
            }

            function F(a) {
                z(a, a.Id = X)
            }
            var G = e.Ko,
                v = (e.mu, g.Nw),
                x = g.isFunction;
            e = (g.now, h.all);
            q = q.race;
            b = b.resolve;
            d = d.reject;
            G.async = f.Yt;
            var D = void 0,
                H = 0,
                N = 1,
                X = 2;
            c.prototype = {
                constructor: c,
                Id: void 0,
                Qi: void 0,
                Ri: void 0,
                then: function(a, b) {
                    var c = this,
                        d = new this.constructor(function() {});
                    if (this.Id) {
                        var e = arguments;
                        G.async(function() {
                            m(c.Id, d, e[c.Id - 1], c.Qi)
                        })
                    } else w(this, d, a, b);
                    return d
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            c.all = e;
            c.race = q;
            c.resolve = b;
            c.reject = d;
            a.Promise = c
        });
        h("promise/race", ["./utils", "exports"], function(e, g) {
            var h = e.isArray;
            g.race = function(e) {
                if (!h(e)) throw new TypeError("You must pass an array to race.");
                return new this(function(b, d) {
                    for (var f, a = 0; a < e.length; a++)(f = e[a]) && "function" == typeof f.then ? f.then(b, d) : b(f)
                })
            }
        });
        h("promise/reject", ["exports"], function(e) {
            e.reject = function(e) {
                return new this(function(g, h) {
                    h(e)
                })
            }
        });
        h("promise/resolve", ["exports"], function(e) {
            e.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === this ? e : new this(function(g) {
                    g(e)
                })
            }
        });
        h("promise/utils", ["exports"], function(e) {
            function g(e) {
                return "function" == typeof e
            }
            var h = Date.now || function() {
                return (new Date).getTime()
            };
            e.Nw = function(e) {
                return g(e) || "object" == typeof e && null !== e
            };
            e.isFunction = g;
            e.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            e.now = h
        });
        g("promise/polyfill").dx()
    }();
    var Ac = function() {
        return function(h) {
            function g(r) {
                if (e[r]) return e[r].qd;
                var l = e[r] = {
                    qd: {},
                    id: r,
                    loaded: !1
                };
                return h[r].call(l.qd, l, l.qd, g), l.loaded = !0, l.qd
            }
            var e = {};
            return g.we = h, g.fh = e, g.fi = "", g(0)
        }([function(h, g, e) {
            g.Pi = !0;
            var r = function(g) {
                function h(a, b) {
                    a[b] = function() {
                        var c = arguments;
                        return a.ready().then(function() {
                            return a[b].apply(a, c)
                        })
                    }
                }

                function r() {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        if (b)
                            for (var c in b) b.hasOwnProperty(c) && (m(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                    }
                    return arguments[0]
                }

                function b(a) {
                    for (var b in f)
                        if (f.hasOwnProperty(b) && f[b] === a) return !0;
                    return !1
                }
                var d = {},
                    f = {
                        Wg: "asyncStorage",
                        Xg: "localStorageWrapper",
                        Yg: "webSQLStorage"
                    },
                    a = "clear getItem iterate key keys length removeItem setItem".split(" "),
                    c = {
                        description: "",
                        Xf: [f.Wg, f.Yg, f.Xg].slice(),
                        name: "localforage",
                        size: 4980736,
                        ma: "keyvaluepairs",
                        version: 1
                    },
                    k = function(a) {
                        var b = {},
                            c;
                        try {
                            var d = d || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.So || a.msIndexedDB;
                            c = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : d && "function" == typeof d.open && "undefined" != typeof a.IDBKeyRange
                        } catch (e) {
                            c = !1
                        }
                        b[f.Wg] = !!c;
                        var g;
                        try {
                            g = a.openDatabase
                        } catch (k) {
                            g = !1
                        }
                        b[f.Yg] = !!g;
                        var h;
                        try {
                            h = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                        } catch (m) {
                            h = !1
                        }
                        return b[f.Xg] = !!h, b
                    }(g),
                    m = Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    };
                return new(function() {
                    function g(a) {
                        if (!(this instanceof g)) throw new TypeError("Cannot call a class as a function");
                        this.Wg = f.Wg;
                        this.Xg = f.Xg;
                        this.Yg = f.Yg;
                        this.$k = r({}, c);
                        this.Xe = r({}, this.$k, a);
                        this.io = this.kd = null;
                        this.se = !1;
                        this.ka = null;
                        this.jo();
                        this.Yq(this.Xe.Xf)
                    }
                    return g.prototype.Ko = function(a) {
                        if ("object" == typeof a) {
                            if (this.se) return Error("Can't call config() after localforage has been used.");
                            for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.Xe[b] = a[b];
                            return "driver" in a && a.Xf && this.Yq(this.Xe.Xf), !0
                        }
                        return "string" == typeof a ? this.Xe[a] : this.Xe
                    }, g.prototype.Xf = function() {
                        return this.Zg || null
                    }, g.prototype.hp = function(a, c, f) {
                        var g = this,
                            k = function() {
                                if (b(a)) switch (a) {
                                    case g.Wg:
                                        return new Promise(function(a) {
                                            a(e(1))
                                        });
                                    case g.Xg:
                                        return new Promise(function(a) {
                                            a(e(2))
                                        });
                                    case g.Yg:
                                        return new Promise(function(a) {
                                            a(e(4))
                                        })
                                } else if (d[a]) return Promise.resolve(d[a]);
                                return Promise.reject(Error("Driver not found."))
                            }();
                        return k.then(c, f), k
                    }, g.prototype.ready = function(a) {
                        var b = this,
                            c = b.kd.then(function() {
                                return null === b.se && (b.se = b.io()), b.se
                            });
                        return c.then(a, a), c
                    }, g.prototype.Yq = function(a, b, c) {
                        function d() {
                            f.Xe.Xf = f.Xf()
                        }

                        function e(a) {
                            return function() {
                                function b() {
                                    for (; c < a.length;) {
                                        var e = a[c];
                                        return c++, f.ka = null, f.se = null, f.hp(e).then(function(a) {
                                            return f.Pt(a), d(), f.se = f.bl(f.Xe), f.se
                                        })["catch"](b)
                                    }
                                    d();
                                    return f.kd = Promise.reject(Error("No available storage method found.")), f.kd
                                }
                                var c = 0;
                                return b()
                            }
                        }
                        var f = this;
                        m(a) || (a = [a]);
                        var g = this.Qt(a);
                        return this.kd = (null !== this.kd ? this.kd["catch"](function() {
                            return Promise.resolve()
                        }) : Promise.resolve()).then(function() {
                            var a = g[0];
                            return f.ka = null, f.se = null, f.hp(a).then(function(a) {
                                f.Zg = a.Zg;
                                d();
                                f.jo();
                                f.io = e(g)
                            })
                        })["catch"](function() {
                            d();
                            return f.kd = Promise.reject(Error("No available storage method found.")), f.kd
                        }), this.kd.then(b, c), this.kd
                    }, g.prototype.supports = function(a) {
                        return !!k[a]
                    }, g.prototype.Pt = function(a) {
                        r(this, a)
                    }, g.prototype.Qt = function(a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) {
                            var e = a[c];
                            this.supports(e) && b.push(e)
                        }
                        return b
                    }, g.prototype.jo = function() {
                        for (var b = 0; b < a.length; b++) h(this, a[b])
                    }, g.prototype.$i = function(a) {
                        return new g(a)
                    }, g
                }())
            }("undefined" != typeof window ? window : self);
            g["default"] = r;
            h.qd = g["default"]
        }, function(h, g) {
            g.Pi = !0;
            g["default"] = function(e) {
                function g(a, b) {
                    a = a || [];
                    b = b || {};
                    try {
                        return new Blob(a, b)
                    } catch (c) {
                        if ("TypeError" !== c.name) throw c;
                        for (var d = new(e.BlobBuilder || e.we || e.Oo || e.WebKitBlobBuilder), f = 0; f < a.length; f += 1) d.append(a[f]);
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

                function p(a) {
                    return (new Promise(function(b, c) {
                        var d = g([""], {
                                type: "image/png"
                            }),
                            e = a.transaction([D], "readwrite");
                        e.objectStore(D).put(d, "key");
                        e.oncomplete = function() {
                            var d = a.transaction([D], "readwrite").objectStore(D).get("key");
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
                        e.onerror = e.onabort = c
                    }))["catch"](function() {
                        return !1
                    })
                }

                function q(a) {
                    return "boolean" == typeof v ? Promise.resolve(v) : p(a).then(function(a) {
                        return v = a
                    })
                }

                function b(a) {
                    return new Promise(function(b, c) {
                        var d = new FileReader;
                        d.onerror = c;
                        d.onloadend = function(c) {
                            b({
                                ho: !0,
                                data: btoa(c.target.result || ""),
                                type: a.type
                            })
                        };
                        d.readAsBinaryString(a)
                    })
                }

                function d(a) {
                    for (var b = atob(a.data), c = b.length, d = new ArrayBuffer(c), e = new Uint8Array(d), f = 0; c > f; f++) e[f] = b.charCodeAt(f);
                    return g([d], {
                        type: a.type
                    })
                }

                function f(a) {
                    var b = this,
                        c = b.al().then(function() {
                            var a = x[b.ka.name];
                            return a && a.Wf ? a.Wf : void 0
                        });
                    return c.then(a, a), c
                }

                function a(a) {
                    a = x[a.name];
                    var b = {};
                    b.promise = new Promise(function(a) {
                        b.resolve = a
                    });
                    a.Qo.push(b);
                    a.Wf ? a.Wf = a.Wf.then(function() {
                        return b.promise
                    }) : a.Wf = b.promise
                }

                function c(a) {
                    function b() {
                        return Promise.resolve()
                    }
                    var c = this,
                        d = {
                            db: null
                        };
                    if (a)
                        for (var g in a) d[g] = a[g];
                    x || (x = {});
                    var h = x[d.name];
                    h || (h = {
                        pj: [],
                        db: null,
                        Wf: null,
                        Qo: []
                    }, x[d.name] = h);
                    h.pj.push(c);
                    c.al || (c.al = c.ready, c.ready = f);
                    a = [];
                    for (g = 0; g < h.pj.length; g++) {
                        var m = h.pj[g];
                        m !== c && a.push(m.al()["catch"](b))
                    }
                    var l = h.pj.slice(0);
                    return Promise.all(a).then(function() {
                        return d.db = h.db, k(d, !1)
                    }).then(function(a) {
                        d.db = a;
                        var b;
                        b = c.$k.version;
                        if (d.db) {
                            var f = !d.db.objectStoreNames.contains(d.ma),
                                g = d.version > d.db.version;
                            (d.version < d.db.version && (d.version !== b && e.console.warn('The database "' + d.name + "\" can't be downgraded from version " + d.db.version + " to version " + d.version + "."), d.version = d.db.version), g || f) ? (f && (b = d.db.version + 1, b > d.version && (d.version = b)), b = !0) : b = !1
                        } else b = !0;
                        return b ? k(d, !0) : a
                    }).then(function(a) {
                        d.db = h.db = a;
                        c.ka = d;
                        for (a = 0; a < l.length; a++) {
                            var b = l[a];
                            b !== c && (b.ka.db = d.db, b.ka.version = d.version)
                        }
                    })
                }

                function k(b, c) {
                    return new Promise(function(d, f) {
                        if (b.db) {
                            if (!c) return d(b.db);
                            a(b);
                            b.db.close()
                        }
                        var g = [b.name];
                        c && g.push(b.version);
                        var k = G.open.apply(G, g);
                        c && (k.onupgradeneeded = function(a) {
                            var c = k.result;
                            try {
                                c.createObjectStore(b.ma), 1 >= a.oldVersion && c.createObjectStore(D)
                            } catch (d) {
                                if ("ConstraintError" !== d.name) throw d;
                                e.console.warn('The database "' + b.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + b.ma + '" already exists.')
                            }
                        });
                        k.onerror = function() {
                            f(k.error)
                        };
                        k.onsuccess = function() {
                            d(k.result);
                            var a = x[b.name].Qo.pop();
                            a && a.resolve()
                        }
                    })
                }

                function m(a, b) {
                    var c = this;
                    "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var f = new Promise(function(b, e) {
                        c.ready().then(function() {
                            var f = c.ka,
                                g = f.db.transaction(f.ma, "readonly").objectStore(f.ma).get(a);
                            g.onsuccess = function() {
                                var a = g.result;
                                void 0 === a && (a = null);
                                a && a.ho && (a = d(a));
                                b(a)
                            };
                            g.onerror = function() {
                                e(g.error)
                            }
                        })["catch"](e)
                    });
                    return F(f, b), f
                }

                function w(a, b) {
                    var c = this,
                        e = new Promise(function(b, e) {
                            c.ready().then(function() {
                                var f = c.ka,
                                    g = f.db.transaction(f.ma, "readonly").objectStore(f.ma).openCursor(),
                                    k = 1;
                                g.onsuccess = function() {
                                    var c = g.result;
                                    if (c) {
                                        var e = c.value;
                                        e && e.ho && (e = d(e));
                                        e = a(e, c.key, k++);
                                        void 0 !== e ? b(e) : c["continue"]()
                                    } else b()
                                };
                                g.onerror = function() {
                                    e(g.error)
                                }
                            })["catch"](e)
                        });
                    return F(e, b), e
                }

                function z(a, c, d) {
                    var f = this;
                    "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var g = new Promise(function(d, e) {
                        var g;
                        f.ready().then(function() {
                            return g = f.ka, c instanceof Blob ? q(g.db).then(function(a) {
                                return a ? c : b(c)
                            }) : c
                        }).then(function(b) {
                            var c = g.db.transaction(g.ma, "readwrite"),
                                f = c.objectStore(g.ma);
                            null === b && (b = void 0);
                            c.oncomplete = function() {
                                void 0 === b && (b = null);
                                d(b)
                            };
                            c.onabort = c.onerror = function() {
                                e(k.error ? k.error : k.transaction.error)
                            };
                            var k = f.put(b, a)
                        })["catch"](e)
                    });
                    return F(g, d), g
                }

                function O(a, b) {
                    var c = this;
                    "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ka,
                                f = e.db.transaction(e.ma, "readwrite"),
                                g = f.objectStore(e.ma)["delete"](a);
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
                    return F(d, b), d
                }

                function n(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ka,
                                    e = d.db.transaction(d.ma, "readwrite"),
                                    f = e.objectStore(d.ma).clear();
                                e.oncomplete = function() {
                                    a()
                                };
                                e.onabort = e.onerror = function() {
                                    c(f.error ? f.error : f.transaction.error)
                                }
                            })["catch"](c)
                        });
                    return F(c, a), c
                }

                function t(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ka,
                                    e = d.db.transaction(d.ma, "readonly").objectStore(d.ma).count();
                                e.onsuccess = function() {
                                    a(e.result)
                                };
                                e.onerror = function() {
                                    c(e.error)
                                }
                            })["catch"](c)
                        });
                    return F(c, a), c
                }

                function Y(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            return 0 > a ? void b(null) : void c.ready().then(function() {
                                var e = c.ka,
                                    f = !1,
                                    g = e.db.transaction(e.ma, "readonly").objectStore(e.ma).openCursor();
                                g.onsuccess = function() {
                                    var c = g.result;
                                    return c ? void(0 === a ? b(c.key) : f ? b(c.key) : (f = !0, c.advance(a))) : void b(null)
                                };
                                g.onerror = function() {
                                    d(g.error)
                                }
                            })["catch"](d)
                        });
                    return F(d, b), d
                }

                function P(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ka,
                                    e = d.db.transaction(d.ma, "readonly").objectStore(d.ma).openCursor(),
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
                    return F(c, a), c
                }

                function F(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var G = G || e.indexedDB || e.webkitIndexedDB || e.mozIndexedDB || e.So || e.msIndexedDB;
                if (G) {
                    var v, x, D = "local-forage-detect-blob-support";
                    return {
                        Zg: "asyncStorage",
                        bl: c,
                        Ep: w,
                        getItem: m,
                        setItem: z,
                        removeItem: O,
                        clear: n,
                        length: t,
                        key: Y,
                        keys: P
                    }
                }
            }("undefined" != typeof window ? window : self);
            h.qd = g["default"]
        }, function(h, g, e) {
            g.Pi = !0;
            g["default"] = function(g) {
                function h(b, d) {
                    d && b.then(function(b) {
                        d(null, b)
                    }, function(b) {
                        d(b)
                    })
                }
                var p = null;
                try {
                    if (!(g.localStorage && "setItem" in g.localStorage)) return;
                    p = g.localStorage
                } catch (q) {
                    return
                }
                return {
                    Zg: "localStorageWrapper",
                    bl: function(b) {
                        var d = {};
                        if (b)
                            for (var f in b) d[f] = b[f];
                        return d.yd = d.name + "/", d.ma !== this.$k.ma && (d.yd += d.ma + "/"), this.ka = d, (new Promise(function(a) {
                            a(e(3))
                        })).then(function(a) {
                            return d.Gf = a, Promise.resolve()
                        })
                    },
                    Ep: function(b, d) {
                        var e = this,
                            a = e.ready().then(function() {
                                for (var a = e.ka, d = a.yd, g = d.length, h = p.length, l = 1, r = 0; h > r; r++) {
                                    var n = p.key(r);
                                    if (0 === n.indexOf(d)) {
                                        var t = p.getItem(n);
                                        if (t && (t = a.Gf.hj(t)), t = b(t, n.substring(g), l++), void 0 !== t) return t
                                    }
                                }
                            });
                        return h(a, d), a
                    },
                    getItem: function(b, d) {
                        var e = this;
                        "string" != typeof b && (g.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = e.ready().then(function() {
                            var a = e.ka,
                                d = p.getItem(a.yd + b);
                            return d && (d = a.Gf.hj(d)), d
                        });
                        return h(a, d), a
                    },
                    setItem: function(b, d, e) {
                        var a = this;
                        "string" != typeof b && (g.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var c = a.ready().then(function() {
                            void 0 === d && (d = null);
                            var c = d;
                            return new Promise(function(e, f) {
                                var g = a.ka;
                                g.Gf.serialize(d, function(a, d) {
                                    if (d) f(d);
                                    else try {
                                        p.setItem(g.yd +
                                            b, a), e(c)
                                    } catch (h) {
                                        "QuotaExceededError" !== h.name && "NS_ERROR_DOM_QUOTA_REACHED" !== h.name || f(h), f(h)
                                    }
                                })
                            })
                        });
                        return h(c, e), c
                    },
                    removeItem: function(b, d) {
                        var e = this;
                        "string" != typeof b && (g.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = e.ready().then(function() {
                            p.removeItem(e.ka.yd + b)
                        });
                        return h(a, d), a
                    },
                    clear: function(b) {
                        var d = this,
                            e = d.ready().then(function() {
                                for (var a = d.ka.yd, b = p.length - 1; 0 <= b; b--) {
                                    var e = p.key(b);
                                    0 === e.indexOf(a) && p.removeItem(e)
                                }
                            });
                        return h(e, b), e
                    },
                    length: function(b) {
                        var d = this.keys().then(function(b) {
                            return b.length
                        });
                        return h(d, b), d
                    },
                    key: function(b, d) {
                        var e = this,
                            a = e.ready().then(function() {
                                var a, d = e.ka;
                                try {
                                    a = p.key(b)
                                } catch (g) {
                                    a = null
                                }
                                return a && (a = a.substring(d.yd.length)), a
                            });
                        return h(a, d), a
                    },
                    keys: function(b) {
                        var d = this,
                            e = d.ready().then(function() {
                                for (var a = d.ka, b = p.length, e = [], f = 0; b > f; f++) 0 === p.key(f).indexOf(a.yd) && e.push(p.key(f).substring(a.yd.length));
                                return e
                            });
                        return h(e, b), e
                    }
                }
            }("undefined" != typeof window ? window : self);
            h.qd = g["default"]
        }, function(h, g) {
            g.Pi = !0;
            g["default"] = function(e) {
                function g(b) {
                    var d, e, a, c, k;
                    d = .75 * b.length;
                    var h = b.length,
                        l = 0;
                    "=" === b[b.length - 1] && (d--, "=" === b[b.length - 2] && d--);
                    var r = new ArrayBuffer(d),
                        q = new Uint8Array(r);
                    for (d = 0; h > d; d += 4) e = p.indexOf(b[d]), a = p.indexOf(b[d + 1]), c = p.indexOf(b[d + 2]), k = p.indexOf(b[d + 3]), q[l++] = e << 2 | a >> 4, q[l++] = (15 & a) << 4 | c >> 2, q[l++] = (3 & c) << 6 | 63 & k;
                    return r
                }

                function h(b) {
                    var d = new Uint8Array(b),
                        e = "";
                    for (b = 0; b < d.length; b += 3) e += p[d[b] >> 2], e += p[(3 & d[b]) << 4 | d[b + 1] >> 4], e += p[(15 & d[b + 1]) << 2 | d[b + 2] >> 6], e += p[63 & d[b + 2]];
                    return 2 === d.length % 3 ? e = e.substring(0, e.length - 1) + "=" : 1 === d.length % 3 && (e = e.substring(0, e.length - 2) + "=="), e
                }
                var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    q = /^~~local_forage_type~([^~]+)~/;
                return {
                    serialize: function(b, d) {
                        var e = "";
                        if (b && (e = b.toString()), b && ("[object ArrayBuffer]" === b.toString() || b.buffer && "[object ArrayBuffer]" === b.buffer.toString())) {
                            var a, c = "__lfsc__:";
                            b instanceof ArrayBuffer ? (a = b, c += "arbf") : (a = b.buffer, "[object Int8Array]" === e ? c += "si08" : "[object Uint8Array]" === e ? c += "ui08" : "[object Uint8ClampedArray]" === e ? c += "uic8" : "[object Int16Array]" === e ? c += "si16" : "[object Uint16Array]" === e ? c += "ur16" : "[object Int32Array]" === e ? c += "si32" : "[object Uint32Array]" === e ? c += "ui32" : "[object Float32Array]" === e ? c += "fl32" : "[object Float64Array]" === e ? c += "fl64" : d(Error("Failed to get type for BinaryArray")));
                            d(c + h(a))
                        } else if ("[object Blob]" === e) e = new FileReader, e.onload = function() {
                            var a = "~~local_forage_type~" + b.type + "~" + h(this.result);
                            d("__lfsc__:blob" + a)
                        }, e.readAsArrayBuffer(b);
                        else try {
                            d(JSON.stringify(b))
                        } catch (g) {
                            console.error("Couldn't convert value into a JSON string: ", b), d(null, g)
                        }
                    },
                    hj: function(b) {
                        if ("__lfsc__:" !== b.substring(0, 9)) return JSON.parse(b);
                        var d, f = b.substring(13);
                        b = b.substring(9, 13);
                        if ("blob" === b && q.test(f)) {
                            var a = f.match(q);
                            d = a[1];
                            f = f.substring(a[0].length)
                        }
                        f = g(f);
                        switch (b) {
                            case "arbf":
                                return f;
                            case "blob":
                                var c;
                                f = [f];
                                d = {
                                    type: d
                                };
                                f = f || [];
                                d = d || {};
                                try {
                                    c = new Blob(f, d)
                                } catch (k) {
                                    if ("TypeError" !== k.name) throw k;
                                    c = new(e.BlobBuilder || e.we || e.Oo || e.WebKitBlobBuilder);
                                    for (b = 0; b < f.length; b += 1) c.append(f[b]);
                                    c = c.getBlob(d.type)
                                }
                                return c;
                            case "si08":
                                return new Int8Array(f);
                            case "ui08":
                                return new Uint8Array(f);
                            case "uic8":
                                return new Uint8ClampedArray(f);
                            case "si16":
                                return new Int16Array(f);
                            case "ur16":
                                return new Uint16Array(f);
                            case "si32":
                                return new Int32Array(f);
                            case "ui32":
                                return new Uint32Array(f);
                            case "fl32":
                                return new Float32Array(f);
                            case "fl64":
                                return new Float64Array(f);
                            default:
                                throw Error("Unkown type: " + b);
                        }
                    },
                    Pz: g,
                    vz: h
                }
            }("undefined" != typeof window ? window : self);
            h.qd = g["default"]
        }, function(h, g, e) {
            g.Pi = !0;
            g["default"] = function(g) {
                function h(a) {
                    var b = this,
                        c = {
                            db: null
                        };
                    if (a)
                        for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                    var f = new Promise(function(a, d) {
                        try {
                            c.db = w(c.name, String(c.version), c.description, c.size)
                        } catch (e) {
                            return d(e)
                        }
                        c.db.transaction(function(e) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS " + c.ma + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                b.ka = c;
                                a()
                            }, function(a, b) {
                                d(b)
                            })
                        })
                    });
                    return (new Promise(function(a) {
                        a(e(3))
                    })).then(function(a) {
                        return c.Gf = a, f
                    })
                }

                function p(a, b) {
                    var c = this;
                    "string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ka;
                            e.db.transaction(function(c) {
                                c.executeSql("SELECT * FROM " + e.ma + " WHERE key = ? LIMIT 1", [a], function(a, c) {
                                    var d = c.rows.length ? c.rows.item(0).value : null;
                                    d && (d = e.Gf.hj(d));
                                    b(d)
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return m(d, b), d
                }

                function q(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.ka;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT * FROM " + e.ma, [], function(c, d) {
                                        for (var f = d.rows, g = f.length, k = 0; g > k; k++) {
                                            var h = f.item(k),
                                                m = h.value;
                                            if (m && (m = e.Gf.hj(m)), m = a(m, h.key, k + 1), void 0 !== m) return void b(m)
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
                    var d = this;
                    "string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(c, e) {
                        d.ready().then(function() {
                            void 0 === b && (b = null);
                            var f = b,
                                g = d.ka;
                            g.Gf.serialize(b, function(b, d) {
                                d ? e(d) : g.db.transaction(function(d) {
                                    d.executeSql("INSERT OR REPLACE INTO " + g.ma +
                                        " (key, value) VALUES (?, ?)", [a, b],
                                        function() {
                                            c(f)
                                        },
                                        function(a, b) {
                                            e(b)
                                        })
                                }, function(a) {
                                    a.code === a.QUOTA_ERR && e(a)
                                })
                            })
                        })["catch"](e)
                    });
                    return m(e, c), e
                }

                function d(a, b) {
                    var c = this;
                    "string" != typeof a && (g.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var d = new Promise(function(b, d) {
                        c.ready().then(function() {
                            var e = c.ka;
                            e.db.transaction(function(c) {
                                c.executeSql("DELETE FROM " + e.ma + " WHERE key = ?", [a], function() {
                                    b()
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        })["catch"](d)
                    });
                    return m(d, b), d
                }

                function f(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ka;
                                d.db.transaction(function(b) {
                                    b.executeSql("DELETE FROM " + d.ma, [], function() {
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
                                var d = b.ka;
                                d.db.transaction(function(b) {
                                    b.executeSql("SELECT COUNT(key) as c FROM " + d.ma, [], function(b, c) {
                                        var d = c.rows.item(0).fh;
                                        a(d)
                                    }, function(a, b) {
                                        c(b)
                                    })
                                })
                            })["catch"](c)
                        });
                    return m(c, a), c
                }

                function c(a, b) {
                    var c = this,
                        d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.ka;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT key FROM " + e.ma + " WHERE id = ? LIMIT 1", [a + 1], function(a, c) {
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

                function k(a) {
                    var b = this,
                        c = new Promise(function(a, c) {
                            b.ready().then(function() {
                                var d = b.ka;
                                d.db.transaction(function(b) {
                                    b.executeSql("SELECT key FROM " + d.ma, [], function(b, c) {
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
                var w = g.openDatabase;
                if (w) return {
                    Zg: "webSQLStorage",
                    bl: h,
                    Ep: q,
                    getItem: p,
                    setItem: b,
                    removeItem: d,
                    clear: f,
                    length: a,
                    key: c,
                    keys: k
                }
            }("undefined" != typeof window ? window : self);
            h.qd = g["default"]
        }])
    };
    "object" == typeof exports && "object" == typeof module ? module.qd = Ac() : "function" == typeof define && define.uz ? define([], Ac) : "object" == typeof exports ? exports.localforage = Ac() : this.localforage = Ac()
} catch (Bc) {
    zc = !0
}

function Cc(h) {
    this.b = h
}
(function() {
    function h(b) {
        b.b.trigger(Cc.prototype.d.Li, b)
    }

    function g() {}

    function e() {}

    function r() {}
    var l = "",
        p = "",
        q = "";
    "undefined" !== typeof window.is_scirra_arcade && (q = "sa" + window.scirra_arcade_id + "_");
    var b = Cc.prototype;
    b.wa = function(b) {
        this.ja = b;
        this.b = b.b
    };
    b.wa.prototype.Y = function() {};
    b.pa = function(b) {
        this.type = b;
        this.b = b.b
    };
    var d = b.pa.prototype;
    d.Y = function() {
        this.Om = this.Pm = 0
    };
    d.Ff = function() {};
    d.Ob = function() {
        return {}
    };
    d.mc = function() {};
    g.prototype.Ms = function(b) {
        return l === b
    };
    g.prototype.Fs = function() {
        return !0
    };
    g.prototype.On = function(b) {
        return l === b
    };
    g.prototype.Es = function() {
        return !0
    };
    g.prototype.Li = function() {
        return !0
    };
    g.prototype.Nn = function(b) {
        return l === b
    };
    g.prototype.Pn = function(b) {
        return l === b
    };
    g.prototype.Bs = function() {
        return !0
    };
    g.prototype.As = function() {
        return !0
    };
    b.d = new g;
    e.prototype.nt = function(b, a) {
        if (zc) h(this);
        else {
            var c = q + b;
            this.Pm++;
            var d = this;
            localforage.setItem(c, a, function(a, c) {
                d.Pm--;
                a ? d.b.trigger(Cc.prototype.d.Li, d) : (l = b, p = c, d.b.trigger(Cc.prototype.d.Fs, d), d.b.trigger(Cc.prototype.d.Ms, d), p = l = "");
                0 === d.Pm && d.b.trigger(Cc.prototype.d.Bs, d)
            })
        }
    };
    e.prototype.ns = function(b) {
        if (zc) h(this);
        else {
            var a = q + b;
            this.Om++;
            var c = this;
            localforage.getItem(a, function(a, d) {
                c.Om--;
                if (a) c.b.trigger(Cc.prototype.d.Li, c);
                else {
                    l = b;
                    p = d;
                    if ("undefined" === typeof p || null === p) p = "";
                    c.b.trigger(Cc.prototype.d.Es, c);
                    c.b.trigger(Cc.prototype.d.On, c);
                    p = l = ""
                }
                0 === c.Om && c.b.trigger(Cc.prototype.d.As, c)
            })
        }
    };
    e.prototype.Rr = function(b) {
        if (zc) h(this);
        else {
            var a = this;
            localforage.getItem(q + b, function(c, d) {
                c ? a.b.trigger(Cc.prototype.d.Li, a) : (l = b, null === d ? (p = "", a.b.trigger(Cc.prototype.d.Pn, a)) : (p = d, a.b.trigger(Cc.prototype.d.Nn, a)), p = l = "")
            })
        }
    };
    b.p = new e;
    r.prototype.ws = function(b) {
        b.oi(p)
    };
    b.T = new r
})();

function T(h) {
    this.b = h
}
(function() {
    function h() {
        if (0 === this.sl.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Lg ? b.drawImage(this.A, this.xg, this.yg, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.A, 0, 0, this.width, this.height);
            this.sl = a.toDataURL("image/png")
        }
        return this.sl
    }

    function g() {}

    function e() {}

    function r() {}
    var l = T.prototype;
    l.wa = function(a) {
        this.ja = a;
        this.b = a.b
    };
    var p = l.wa.prototype;
    p.Y = function() {
        if (!this.C) {
            var a, b, d, e, f, g, l, n, r;
            this.Vc = [];
            this.Ch = !1;
            a = 0;
            for (b = this.fc.length; a < b; a++) {
                f = this.fc[a];
                l = {};
                l.name = f[0];
                l.speed = f[1];
                l.loop = f[2];
                l.Zm = f[3];
                l.$m = f[4];
                l.de = f[5];
                l.Z = f[6];
                l.frames = [];
                d = 0;
                for (e = f[7].length; d < e; d++) g = f[7][d], n = {}, n.Ik = g[0], n.qn = g[1], n.xg = g[2], n.yg = g[3], n.width = g[4], n.height = g[5], n.duration = g[6], n.Mb = g[7], n.Nb = g[8], n.$l = g[9], n.jk = g[10], n.Hq = g[11], n.Lg = 0 !== n.width, n.sl = "", n.yz = h, r = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, n.kn = r, n.L = null, (r = this.b.Bv(g[0])) ? n.A = r : (n.A = new Image, n.A.ou = g[0], n.A.Lo = g[1], n.A.cu = null, this.b.Hr(n.A, g[0])), l.frames.push(n), this.Vc.push(n);
                this.fc[a] = l
            }
        }
    };
    p.Cr = function() {
        var a, b, d;
        a = 0;
        for (b = this.c.length; a < b; a++) d = this.c[a], d.bj = d.Fa.L
    };
    p.$j = function() {
        if (!this.C) {
            var a, b, d;
            a = 0;
            for (b = this.Vc.length; a < b; ++a) d = this.Vc[a], d.A.cu = null, d.L = null;
            this.Ch = !1;
            this.Cr()
        }
    };
    p.bk = function() {
        if (!this.C && this.c.length) {
            var a, b, d;
            a = 0;
            for (b = this.Vc.length; a < b; ++a) d = this.Vc[a], d.L = this.b.m.rg(d.A, !1, this.b.xa, d.Hq);
            this.Cr()
        }
    };
    p.vm = function() {
        if (!this.C && !this.Ch && this.b.m) {
            var a, b, d;
            a = 0;
            for (b = this.Vc.length; a < b; ++a) d = this.Vc[a], d.L = this.b.m.rg(d.A, !1, this.b.xa, d.Hq);
            this.Ch = !0
        }
    };
    p.Ok = function() {
        if (!this.C && !this.c.length && this.Ch) {
            var a, b, d;
            a = 0;
            for (b = this.Vc.length; a < b; ++a) d = this.Vc[a], this.b.m.deleteTexture(d.L), d.L = null;
            this.Ch = !1
        }
    };
    var q = [];
    p.nk = function(a) {
        var b, d, e;
        A(q);
        b = 0;
        for (d = this.Vc.length; b < d; ++b) e = this.Vc[b].A, -1 === q.indexOf(e) && (a.drawImage(e, 0, 0), q.push(e))
    };
    l.pa = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.fc[0].frames[0].jk;
        this.Qc ? this.md.pi(a) : this.md = new hb(a)
    };
    var b = l.pa.prototype;
    b.Y = function() {
        this.visible = 0 === this.B[0];
        this.yj = this.Kh = !1;
        this.ih = 0 !== this.B[3];
        this.ta = this.ep(this.B[1]) || this.type.fc[0];
        this.u = this.B[2];
        0 > this.u && (this.u = 0);
        this.u >= this.ta.frames.length && (this.u = this.ta.frames.length - 1);
        var a = this.ta.frames[this.u];
        this.md.pi(a.jk);
        this.Mb = a.Mb;
        this.Nb = a.Nb;
        this.Uf = this.ta.speed;
        this.Ee = this.ta.$m;
        1 === this.type.fc.length && 1 === this.type.fc[0].frames.length || 0 === this.Uf || (this.b.Kk(this), this.Kh = !0);
        this.Qc ? this.Wc.reset() : this.Wc = new fb;
        this.td = this.Wc.X;
        this.Kd = !0;
        this.Ld = 0;
        this.Ye = !0;
        this.ml = this.ro = "";
        this.gu = 0;
        this.gh = -1;
        this.type.vm();
        var b, d, e, f, g, h, l, a = 0;
        for (b = this.type.fc.length; a < b; a++)
            for (f = this.type.fc[a], d = 0, e = f.frames.length; d < e; d++) g = f.frames[d], 0 === g.width && (g.width = g.A.width, g.height = g.A.height), g.Lg && (l = g.A, h = g.kn, h.left = g.xg / l.width, h.top = g.yg / l.height, h.right = (g.xg + g.width) / l.width, h.bottom = (g.yg + g.height) / l.height, 0 === g.xg && 0 === g.yg && g.width === l.width && g.height === l.height && (g.Lg = !1));
        this.Fa = this.ta.frames[this.u];
        this.bj = this.Fa.L
    };
    b.Ob = function() {
        var a = {
            a: this.ta.Z,
            f: this.u,
            cas: this.Uf,
            fs: this.td,
            ar: this.Ld,
            at: this.Wc.X,
            rt: this.Ee
        };
        this.Kd || (a.ap = this.Kd);
        this.Ye || (a.af = this.Ye);
        return a
    };
    b.mc = function(a) {
        var b = this.Fv(a.a);
        b && (this.ta = b);
        this.u = a.f;
        0 > this.u && (this.u = 0);
        this.u >= this.ta.frames.length && (this.u = this.ta.frames.length - 1);
        this.Uf = a.cas;
        this.td = a.fs;
        this.Ld = a.ar;
        this.Wc.reset();
        this.Wc.X = a.at;
        this.Kd = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Ye = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Ee = a.rt : this.Ee = this.ta.$m;
        this.Fa = this.ta.frames[this.u];
        this.bj = this.Fa.L;
        this.md.pi(this.Fa.jk);
        this.Mb = this.Fa.Mb;
        this.Nb = this.Fa.Nb
    };
    b.dl = function(a) {
        this.u = a ? 0 : this.ta.frames.length - 1;
        this.Kd = !1;
        this.ro = this.ta.name;
        this.yj = !0;
        this.b.trigger(T.prototype.d.Ds, this);
        this.b.trigger(T.prototype.d.Cs, this);
        this.yj = !1;
        this.Ld = 0
    };
    b.we = function() {
        return this.Wc.X
    };
    b.Sb = function() {
        this.Wc.add(this.b.Nl(this));
        this.ml.length && this.uu();
        0 <= this.gh && this.xl();
        var a = this.Wc.X,
            b = this.ta,
            d = b.frames[this.u],
            e = d.duration / this.Uf;
        this.Kd && a >= this.td + e && (this.Ye ? this.u++ : this.u--, this.td += e, this.u >= b.frames.length && (b.de ? (this.Ye = !1, this.u = b.frames.length - 2) : b.loop ? this.u = this.Ee : (this.Ld++, this.Ld >= b.Zm ? this.dl(!1) : this.u = this.Ee)), 0 > this.u && (b.de ? (this.u = 1, this.Ye = !0, b.loop || (this.Ld++, this.Ld >= b.Zm && this.dl(!0))) : b.loop ? this.u = this.Ee : (this.Ld++, this.Ld >= b.Zm ? this.dl(!0) : this.u = this.Ee)), 0 > this.u ? this.u = 0 : this.u >= b.frames.length && (this.u = b.frames.length - 1), a > this.td + b.frames[this.u].duration / this.Uf && (this.td = a), a = b.frames[this.u], this.Pf(d, a), this.b.na = !0)
    };
    b.ep = function(a) {
        var b, d, e;
        b = 0;
        for (d = this.type.fc.length; b < d; b++)
            if (e = this.type.fc[b], nb(e.name, a)) return e;
        return null
    };
    b.Fv = function(a) {
        var b, d, e;
        b = 0;
        for (d = this.type.fc.length; b < d; b++)
            if (e = this.type.fc[b], e.Z === a) return e;
        return null
    };
    b.uu = function() {
        var a = this.ta.frames[this.u],
            b = this.ep(this.ml);
        this.ml = "";
        !b || nb(b.name, this.ta.name) && this.Kd || (this.ta = b, this.Uf = b.speed, this.Ee = b.$m, 0 > this.u && (this.u = 0), this.u >= this.ta.frames.length && (this.u = this.ta.frames.length -
            1), 1 === this.gu && (this.u = 0), this.Kd = !0, this.td = this.Wc.X, this.Ye = !0, this.Pf(a, this.ta.frames[this.u]), this.b.na = !0)
    };
    b.xl = function() {
        var a = this.ta.frames[this.u],
            b = this.u;
        this.u = ua(this.gh);
        0 > this.u && (this.u = 0);
        this.u >= this.ta.frames.length && (this.u = this.ta.frames.length - 1);
        b !== this.u && (this.Pf(a, this.ta.frames[this.u]), this.td = this.Wc.X, this.b.na = !0);
        this.gh = -1
    };
    b.Pf = function(a, b) {
        var d = a.width,
            e = a.height,
            f = b.width,
            g = b.height;
        d != f && (this.width *= f / d);
        e != g && (this.height *= g / e);
        this.Mb = b.Mb;
        this.Nb = b.Nb;
        this.md.pi(b.jk);
        this.Ua();
        this.Fa = b;
        this.bj = b.L;
        d = 0;
        for (e = this.I.length; d < e; d++) f = this.I[d], f.Yw && f.Yw(a, b);
        this.b.trigger(T.prototype.d.Pf, this)
    };
    b.pd = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Fa,
            d = b.Lg,
            e = b.A,
            f = this.x,
            g = this.y,
            h = this.width,
            l = this.height;
        if (0 === this.i && 0 <= h && 0 <= l) f -= this.Mb * h, g -= this.Nb * l, this.b.bd && (f = Math.round(f), g = Math.round(g)), d ? a.drawImage(e, b.xg, b.yg, b.width, b.height, f, g, h, l) : a.drawImage(e, f, g, h, l);
        else {
            this.b.bd && (f = Math.round(f), g = Math.round(g));
            a.save();
            var r = 0 < h ? 1 : -1,
                p = 0 < l ? 1 : -1;
            a.translate(f, g);
            1 === r && 1 === p || a.scale(r, p);
            a.rotate(this.i * r * p);
            f = 0 - this.Mb * pa(h);
            g = 0 - this.Nb * pa(l);
            d ? a.drawImage(e, b.xg, b.yg, b.width, b.height, f, g, pa(h), pa(l)) : a.drawImage(e, f, g, pa(h), pa(l));
            a.restore()
        }
    };
    b.ff = function(a) {
        this.Xb(a)
    };
    b.Xb = function(a) {
        a.qc(this.bj);
        a.Hf(this.opacity);
        var b = this.Fa,
            d = this.Sf;
        if (this.b.bd) {
            var e = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Lg ? a.Dd(d.Wa + e, d.Xa + f, d.Ab + e, d.Bb + f, d.ob + e, d.pb + f, d.mb + e, d.nb + f, b.kn) : a.ji(d.Wa + e, d.Xa + f, d.Ab + e, d.Bb + f, d.ob + e, d.pb + f, d.mb + e, d.nb + f)
        } else b.Lg ? a.Dd(d.Wa, d.Xa, d.Ab, d.Bb, d.ob, d.pb, d.mb, d.nb, b.kn) : a.ji(d.Wa, d.Xa, d.Ab, d.Bb, d.ob, d.pb, d.mb, d.nb)
    };
    b.Nv = function(a) {
        var b = this.Fa,
            d, e;
        d = 0;
        for (e = b.$l.length; d < e; d++)
            if (nb(a, b.$l[d][0])) return d;
        return -1
    };
    b.wh = function(a, b) {
        var d = this.Fa,
            e = d.$l,
            f;
        ma(a) ? f = this.Nv(a) : f = a - 1;
        f = ua(f);
        if (0 > f || f >= e.length) return b ? this.x : this.y;
        var g = (e[f][1] - d.Mb) * this.width,
            e = e[f][2],
            e = (e - d.Nb) * this.height,
            d = Math.cos(this.i);
        f = Math.sin(this.i);
        var h = g * d - e * f,
            e = e * d + g * f,
            g = h + this.x,
            e = e + this.y;
        return b ? g : e
    };
    var d = new fa,
        f = !1;
    new xa(0, 0, 0, 0);
    p.finish = function(a) {
        if (f) {
            if (a) {
                var b = this.b.Ma().La.Oc;
                a = null.U();
                var e = d.Ve(),
                    g, h;
                if (a.ga) {
                    a.ga = !1;
                    A(a.c);
                    g = 0;
                    for (h = e.length; g < h; ++g) a.c[g] = e[g];
                    if (b)
                        for (A(a.S), g = 0, h = null.c.length; g < h; ++g) e = null.c[g], d.contains(e) || a.S.push(e)
                } else if (b)
                    for (b = a.c.length, g = 0, h = e.length; g < h; ++g) a.c[b + g] = e[g], Ga(a.S, e[g]);
                else Da(a.c, e);
                null.Md()
            }
            d.clear();
            f = !1
        }
    };
    g.prototype.Cs = function(a) {
        return nb(this.ro, a)
    };
    g.prototype.Ds = function() {
        return !0
    };
    g.prototype.Pf = function() {
        return !0
    };
    l.d = new g;
    e.prototype.zt = function(a, b, d) {
        if (a && b && (b = this.b.$i(a, b, this.wh(d, !0), this.wh(d, !1)))) {
            "undefined" !== typeof b.i && (b.i = this.i, b.Ua());
            this.b.xc++;
            var e, f, g;
            this.b.trigger(Object.getPrototypeOf(a.ja).d.Of, b);
            if (b.ub)
                for (e = 0, f = b.siblings.length; e < f; e++) g = b.siblings[e], this.b.trigger(Object.getPrototypeOf(g.type.ja).d.Of, g);
            this.b.xc--;
            e = this.b.Iv();
            d = !1;
            if (ja(e.N.Spawn_LastExec) || e.N.Spawn_LastExec < this.b.nf) d = !0, e.N.Spawn_LastExec = this.b.nf;
            if (a != this.type && (a = a.U(), a.ga = !1, d ? (A(a.c), a.c[0] = b) : a.c.push(b), b.ub))
                for (e = 0, f = b.siblings.length; e < f; e++) g = b.siblings[e], a = g.type.U(), a.ga = !1, d ? (A(a.c), a.c[0] = g) : a.c.push(g)
        }
    };
    e.prototype.Ft = function() {
        this.Kd = !1
    };
    e.prototype.Ct = function(a) {
        this.Kd = !0;
        this.td = this.Wc.X;
        1 === a && 0 !== this.u && (this.gh = 0, this.yj || this.xl());
        this.Kh || (this.b.Kk(this), this.Kh = !0)
    };
    e.prototype.it = function(a) {
        this.gh = a;
        this.Kh || (this.b.Kk(this), this.Kh = !0);
        this.yj || this.xl()
    };
    l.p = new e;
    r.prototype.Nr = function(a) {
        a.K(this.u)
    };
    r.prototype.Or = function(a) {
        a.K(this.ta.frames.length)
    };
    l.T = new r
})();

function Dc(h) {
    this.b = h
}
(function() {
    function h(a, b) {
        return a.length ? a.pop() : new b
    }

    function g(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < q && a.push(b[c]);
            b.length = 0
        } else
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < q && a.push(b[d]), delete b[d])
    }

    function e(a, c, d) {
        var e = a.zf;
        d = d.replace(/\s\s*$/, "");
        c >= e.length && e.push(h(b, Object));
        c = e[c];
        c.text = d;
        c.width = a.Cm(d);
        a.Pg = qa(a.Pg, c.width)
    }

    function r() {}
    var l = Dc.prototype;
    l.Y = function() {};
    l.wa = function(a) {
        this.ja = a;
        this.b = a.b
    };
    var p = l.wa.prototype;
    p.Y = function() {
        this.C || (this.A = new Image, this.A.idtkLoadDisposed = !0, this.A.src = this.Ik, this.b.Kf.push(this.A), this.L = null)
    };
    p.$j = function() {
        this.C || (this.L = null)
    };
    p.bk = function() {
        if (!this.C && this.c.length) {
            this.L || (this.L = this.b.m.rg(this.A, !1, this.b.xa, this.Ai));
            var a, b;
            a = 0;
            for (b = this.c.length; a < b; a++) this.c[a].L = this.L
        }
    };
    p.Ok = function() {
        this.C || this.c.length || !this.L || (this.b.m.deleteTexture(this.L), this.L = null)
    };
    p.nk = function(a) {
        a.drawImage(this.A, 0, 0)
    };
    l.pa = function(a) {
        this.type = a;
        this.b = a.b
    };
    p = l.pa.prototype;
    p.Ff = function() {
        g(b, this.zf, !0);
        g(d, this.Wi, !1);
        g(f, this.Xi, !1);
        Za(this.Zc)
    };
    p.Y = function() {
        this.A = this.type.A;
        this.Vi = this.B[0];
        this.ze = this.B[1];
        this.characterSet = this.B[2];
        this.text = this.B[3];
        this.Ae = this.B[4];
        this.visible = 0 === this.B[5];
        this.np = this.B[6] / 2;
        this.Er = this.B[7] / 2;
        this.ey = 0 === this.B[9];
        this.Tf = this.B[10];
        this.lineHeight = this.B[11];
        this.Jf = this.Pg = 0;
        this.hh = this.B[12];
        this.lr = this.B[13];
        console.log(this.hh);
        this.Qc ? (this.zf.length = 0, Za(this.Wi), Za(this.Xi), Za(this.Zc)) : (this.zf = [], this.Wi = {}, this.Xi = {}, this.Zc = {});
        try {
            if (this.hh)
                if (-1 !== this.hh.indexOf('""c2array""'))
                    for (var a = jQuery.parseJSON(this.hh.replace(/""/g, '"')), b = a.size[1], c = 0; c < b; c++)
                        for (var d = a.data[1][c][0], e = a.data[0][c][0], f = 0; f < d.length; f++) this.Zc[d.charAt(f)] = e;
                else
                    for (a = jQuery.parseJSON(this.hh), b = a.length, c = 0; c < b; c++)
                        for (d = a[c][1], e = a[c][0], f = 0; f < d.length; f++) this.Zc[d.charAt(f)] = e; - 1 !== this.lr && (this.Zc[" "] = this.lr)
        } catch (g) {
            window.console && window.console.log && window.console.log("SpriteFont+ Failure: " + g)
        }
        this.yi = !0;
        this.rm = this.width;
        this.b.m && (this.type.L || (this.type.L = this.b.m.rg(this.type.A, !1, this.b.xa, this.type.Ai)), this.L = this.type.L);
        this.At()
    };
    p.Ob = function() {
        var a = {
                t: this.text,
                csc: this.Ae,
                csp: this.Tf,
                lh: this.lineHeight,
                tw: this.Pg,
                th: this.Jf,
                lrt: this.Dw,
                cw: {}
            },
            b;
        for (b in this.Zc) a.cw[b] = this.Zc[b];
        return a
    };
    p.mc = function(a) {
        this.text = a.t;
        this.Ae = a.csc;
        this.Tf = a.csp;
        this.lineHeight = a.lh;
        this.Pg = a.tw;
        this.Jf = a.th;
        this.Dw = a.lrt;
        for (var b in a.cw) this.Zc[b] = a.cw[b];
        this.yi = !0;
        this.rm = this.width
    };
    var q = 1E3,
        b = [],
        d = [],
        f = [];
    p.At = function() {
        for (var a = this.A, b = a.width, c = a.height, a = this.Vi, e = this.ze, g = a / b, l = e / c, r = this.characterSet, b = Math.floor(b / a), c = Math.floor(c / e), p = 0; p < r.length && !(p >= b * c); p++) {
            var q = p % b,
                F = Math.floor(p / b),
                G = r.charAt(p);
            if (this.b.m) {
                var v = this.Xi,
                    x = q * g,
                    D = F * l,
                    q = (q + 1) * g,
                    F = (F + 1) * l;
                void 0 === v[G] && (v[G] = h(f, xa));
                v[G].left = x;
                v[G].top = D;
                v[G].right = q;
                v[G].bottom = F
            } else v = this.Wi, q = q * a, F = F * e, x = a, D = e, void 0 === v[G] && (v[G] = h(d, Object)), v[G].x = q, v[G].y = F, v[G].Gr = x, v[G].lp = D
        }
    };
    var a = [];
    l.It = function(b) {
        a.length = 0;
        for (var c = "", d, e = 0; e < b.length;)
            if (d = b.charAt(e), "\n" === d) c.length && (a.push(c), c = ""), a.push("\n"), ++e;
            else if (" " === d || "\t" === d || "-" === d) {
            do c += b.charAt(e), e++; while (e < b.length && (" " === b.charAt(e) || "\t" === b.charAt(e)));
            a.push(c);
            c = ""
        } else e < b.length && (c += d, e++);
        c.length && a.push(c)
    };
    l.Nt = function(a) {
        var c = a.text,
            d = a.zf;
        if (c && c.length) {
            var e = a.width;
            if (2 >= e) g(b, d, !0);
            else {
                var f = a.Ae,
                    l = a.Tf;
                if (c.length * (a.Vi * f + l) - l <= e && -1 === c.indexOf("\n") && (l = a.Cm(c), l <= e)) {
                    g(b, d, !0);
                    d.push(h(b, Object));
                    d[0].text = c;
                    d[0].width = l;
                    a.Pg = l;
                    a.Jf = a.ze * f + a.lineHeight;
                    return
                }
                this.Ot(a);
                a.Jf = d.length * (a.ze * f + a.lineHeight)
            }
        } else g(b, d, !0)
    };
    l.Ot = function(c) {
        var d = c.ey,
            f = c.text,
            g = c.zf,
            h = c.width;
        d && (this.It(f), f = a);
        var l = "",
            r, p, P, F = 0,
            G = !1;
        for (P = 0; P < f.length; P++) "\n" === f[P] ? (!0 === G ? G = !1 : (e(c, F, l), F++), l = "") : (G = !1, r = l, l += f[P], p = c.Cm(l.replace(/\s\s*$/, "")), p > h && ("" === r ? (e(c, F, l), l = "", G = !0) : (e(c, F, r), l = f[P]), F++, d || " " !== l || (l = "")));
        l.replace(/\s\s*$/, "").length && (e(c, F, l), F++);
        for (P = F; P < g.length; P++) b.length < q && b.push(g[P]);
        g.length = F
    };
    p.Cm = function(a) {
        for (var b = this.Tf, c = a.length, d = 0, e = 0; e < c; e++) d += this.vh(a.charAt(e)) * this.Ae + b;
        return d - (0 < d ? b : 0)
    };
    p.vh = function(a) {
        var b = this.Zc;
        return void 0 !== b[a] ? b[a] : this.Vi
    };
    p.Oq = function() {
        if (this.yi || this.width !== this.rm) this.Jf = this.Pg = 0, this.type.ja.Nt(this), this.yi = !1, this.rm = this.width
    };
    p.pd = function(a) {
        var b = this.A;
        if ("" !== this.text && null != b && (this.Oq(), !(this.height < this.ze * this.Ae + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.bd && (b = b + .5 | 0, c = c + .5 | 0);
            a.save();
            a.translate(b, c);
            a.rotate(this.i);
            for (var b = this.np, c = this.Ae, d = this.ze * c, e = this.lineHeight, f = this.Tf, g = this.zf, h, l = -(this.Mb * this.width), r = -(this.Nb * this.height), r = r + this.Er * qa(0, this.height - this.Jf), p = 0; p < g.length; p++) {
                var q = g[p].text;
                h = b * qa(0, this.width - g[p].width);
                h = l + h;
                for (var r = r + e, x = 0; x < q.length; x++) {
                    var D = q.charAt(x),
                        H = this.Wi[D];
                    if (h + this.vh(D) * c > this.width + 1E-5) break;
                    void 0 !== H && a.drawImage(this.A, H.x, H.y, H.Gr, H.lp, Math.round(h), Math.round(r), H.Gr * c, H.lp * c);
                    h += this.vh(D) * c + f
                }
                r += d;
                if (r + d + e > this.height) break
            }
            a.restore()
        }
    };
    var c = new ya;
    p.Xb = function(a) {
        a.qc(this.L);
        a.Hf(this.opacity);
        if ("" !== this.text && (this.Oq(), !(this.height < this.ze * this.Ae + this.lineHeight))) {
            this.lb();
            var b = this.Sf,
                d = 0,
                e = 0;
            this.b.bd && (d = (this.x + .5 | 0) - this.x, e = (this.y + .5 | 0) - this.y);
            var f = this.i,
                g = this.np,
                h = this.Er,
                l = this.Ae,
                r = this.ze * l,
                p = this.lineHeight,
                q = this.Tf,
                v = this.zf,
                x = this.Jf,
                D, H;
            0 !== f && (D = Math.cos(f), H = Math.sin(f));
            for (var N, d = b.Wa + d, b = b.Xa + e, h = h * qa(0, this.height - x), x = 0; x < v.length; x++) {
                e = v[x].text;
                N = g * qa(0, this.width - v[x].width);
                for (var h = h + p, X = 0; X < e.length; X++) {
                    var U = e.charAt(X),
                        Q = this.Xi[U];
                    if (N + this.vh(U) * l > this.width + 1E-5) break;
                    if (void 0 !== Q) {
                        var u = this.Vi * l,
                            I = this.ze * l;
                        c.Wa = N;
                        c.Xa = h;
                        c.Ab = N + u;
                        c.Bb = h;
                        c.mb = N;
                        c.nb = h + I;
                        c.ob = N + u;
                        c.pb = h + I;
                        if (0 !== f) {
                            var u = c,
                                I = D,
                                ca = H,
                                L = void 0,
                                L = u.Wa * I - u.Xa * ca;
                            u.Xa = u.Xa * I + u.Wa * ca;
                            u.Wa = L;
                            L = u.Ab * I - u.Bb * ca;
                            u.Bb = u.Bb * I + u.Ab * ca;
                            u.Ab = L;
                            L = u.mb * I - u.nb * ca;
                            u.nb = u.nb * I + u.mb * ca;
                            u.mb = L;
                            L = u.ob * I - u.pb * ca;
                            u.pb = u.pb * I + u.ob * ca;
                            u.ob = L
                        }
                        c.offset(d, b);
                        a.Dd(c.Wa, c.Xa, c.Ab, c.Bb, c.ob, c.pb, c.mb, c.nb, Q)
                    }
                    N += this.vh(U) * l + q
                }
                h += r;
                if (h + r + p > this.height) break
            }
        }
    };
    l.d = new function() {};
    r.prototype.qt = function(a) {
        ka(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.yi = !0, this.b.na = !0)
    };
    p.we = function(a, b) {
        var c = parseInt(b, 10);
        this.Zc[a] !== c && (this.Zc[a] = c, this.yi = !0, this.b.na = !0)
    };
    l.p = new r;
    l.T = new function() {}
})();

function Ec(h) {
    this.b = h
}
(function() {
    var h = Ec.prototype;
    h.wa = function(e) {
        this.ja = e;
        this.b = e.b
    };
    var g = h.wa.prototype;
    g.Y = function() {
        this.C || (this.A = new Image, this.A.Lo = this.qn, this.b.Hr(this.A, this.Ik), this.L = this.pattern = null)
    };
    g.$j = function() {
        this.C || (this.L = null)
    };
    g.bk = function() {
        if (!this.C && this.c.length) {
            this.L || (this.L = this.b.m.rg(this.A, !0, this.b.xa, this.Ai));
            var e, g;
            e = 0;
            for (g = this.c.length; e < g; e++) this.c[e].L = this.L
        }
    };
    g.vm = function() {
        this.C || this.L || !this.b.m || (this.L = this.b.m.rg(this.A, !0, this.b.xa, this.Ai))
    };
    g.Ok = function() {
        this.C || this.c.length || !this.L || (this.b.m.deleteTexture(this.L), this.L = null)
    };
    g.nk = function(e) {
        e.drawImage(this.A, 0, 0)
    };
    h.pa = function(e) {
        this.type = e;
        this.b = e.b
    };
    g = h.pa.prototype;
    g.Y = function() {
        this.visible = 0 === this.B[0];
        this.ki = new xa(0, 0, 0, 0);
        this.qp = !1;
        this.A = this.type.A;
        this.b.m ? (this.type.vm(), this.L = this.type.L) : (this.type.pattern || (this.type.pattern = this.b.Aa.createPattern(this.type.A, "repeat")), this.pattern = this.type.pattern)
    };
    g.Jd = function() {
        this.qp = !1;
        this.A = this.type.A
    };
    g.Ff = function() {
        this.b.m && this.qp && this.L && (this.b.m.deleteTexture(this.L), this.L = null)
    };
    g.pd = function(e) {
        e.globalAlpha = this.opacity;
        e.save();
        e.fillStyle = this.pattern;
        var g = this.x,
            h = this.y;
        this.b.bd && (g = Math.round(g), h = Math.round(h));
        var p = -(this.Mb * this.width),
            q = -(this.Nb * this.height),
            b = p % this.A.width,
            d = q % this.A.height;
        0 > b && (b += this.A.width);
        0 > d && (d += this.A.height);
        e.translate(g, h);
        e.rotate(this.i);
        e.translate(b, d);
        e.fillRect(p - b, q - d, this.width, this.height);
        e.restore()
    };
    g.ff = function(e) {
        this.Xb(e)
    };
    g.Xb = function(e) {
        e.qc(this.L);
        e.Hf(this.opacity);
        var g = this.ki;
        g.right = this.width / this.A.width;
        g.bottom = this.height / this.A.height;
        var h = this.Sf;
        if (this.b.bd) {
            var p = Math.round(this.x) - this.x,
                q = Math.round(this.y) - this.y;
            e.Dd(h.Wa + p, h.Xa + q, h.Ab + p, h.Bb + q, h.ob + p, h.pb + q, h.mb + p, h.nb + q, g)
        } else e.Dd(h.Wa, h.Xa, h.Ab, h.Bb, h.ob, h.pb, h.mb, h.nb, g)
    };
    h.d = new function() {};
    h.p = new function() {};
    h.T = new function() {}
})();

function V(h) {
    this.b = h
}
(function() {
    function h(b) {
        f = b.x;
        a = b.y;
        c = b.z
    }

    function g(a, b, c, d) {
        var f;
        f = k.length ? k.pop() : new e;
        f.init(a, b, c, d);
        return f
    }

    function e() {
        this.ti = this.id = this.Lj = this.Kj = this.y = this.x = this.Ek = this.Dk = this.Jj = this.time = this.pn = 0;
        this.Ci = this.Mk = !1
    }

    function r(a) {
        return a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents || a.originalEvent && a.originalEvent.sourceCapabilities && a.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function l() {}

    function p() {}
    var q = V.prototype;
    q.wa = function(a) {
        this.ja = a;
        this.b = a.b
    };
    q.wa.prototype.Y = function() {};
    q.pa = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Dm = !1
    };
    var b = q.pa.prototype,
        d = {
            left: 0,
            top: 0
        };
    b.sh = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var f = 0,
        a = 0,
        c = 0,
        k = [];
    e.prototype.init = function(a, b, c, d) {
        var e = $a();
        this.pn = this.Jj = this.time = e;
        this.Dk = a;
        this.Ek = b;
        this.x = a;
        this.y = b;
        this.Kj = a;
        this.Lj = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.ti = d;
        this.Ci = this.Mk = !1
    };
    e.prototype.update = function(a, b, c, d, e, f) {
        this.Jj = this.time;
        this.time = a;
        this.Kj = this.x;
        this.Lj = this.y;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f;
        !this.Ci && 15 <= Va(this.Dk, this.Ek, this.x, this.y) && (this.Ci = !0)
    };
    e.prototype.Kw = function(a, b) {
        !this.Mk && 500 <= $a() - this.pn && !this.Ci && 15 > Va(this.Dk, this.Ek, this.x, this.y) && (this.Mk = !0, a.Hd = this.ti, a.Sg = this.id, a.ag = b, a.b.trigger(V.prototype.d.Ks, a), a.Qd = this.x, a.Rd = this.y, a.b.trigger(V.prototype.d.Ls, a), a.ag = 0)
    };
    var m = -1E3,
        w = -1E3,
        z = -1E4;
    e.prototype.fq = function(a, b) {
        if (!this.Mk) {
            var c = $a();
            333 >= c - this.pn && !this.Ci && 15 > Va(this.Dk, this.Ek, this.x, this.y) && (a.Hd = this.ti, a.Sg = this.id, a.ag = b, 666 >= c - z && 25 > Va(m, w, this.x, this.y) ? (a.b.trigger(V.prototype.d.Is, a), a.Qd = this.x, a.Rd = this.y, a.b.trigger(V.prototype.d.Js, a), w = m = -1E3, z = -1E4) : (a.b.trigger(V.prototype.d.Yn, a), a.Qd = this.x, a.Rd = this.y, a.b.trigger(V.prototype.d.Zn, a), m = this.x, w = this.y, z = c), a.ag = 0)
        }
    };
    b.Y = function() {
        this.yw = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.ag = this.Sg = this.Hd = this.Rd = this.Qd = this.mo = this.lo = this.ko = this.Tt = this.St = this.Rt = this.gk = this.fk = this.ek = 0;
        this.by = 0 !== this.B[0];
        var a = 0 < this.b.Yb ? document : this.b.canvas,
            b = document;
        this.b.Jb ? b = a = window.Canvas : this.b.ic && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.uq(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.tq(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.ak(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.ak(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.uq(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.tq(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.ak(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.ak(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.xq(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.wq(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Km(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Km(a, !0)
        }, !1));
        if (this.yw) {
            var d = function(a) {
                    a = a.reading;
                    c.ko = a.accelerationX;
                    c.lo = a.accelerationY;
                    c.mo = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.ek = a.yawDegrees;
                    c.fk = a.pitchDegrees;
                    c.gk = a.rollDegrees
                },
                f = Windows.Devices.Sensors.Accelerometer.getDefault();
            f && (f.reportInterval = Math.max(f.minimumReportInterval, 16), f.addEventListener("readingchanged", d));
            var g = Windows.Devices.Sensors.Inclinometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (f && f.removeEventListener("readingchanged", d), g && g.removeEventListener("readingchanged", e)) : (f && f.addEventListener("readingchanged", d), g && g.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.ek = a.alpha || 0;
            c.fk = a.beta || 0;
            c.gk = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.Rt = a.accelerationIncludingGravity.x || 0, c.St = a.accelerationIncludingGravity.y || 0, c.Tt = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.ko = a.acceleration.x || 0, c.lo = a.acceleration.y || 0, c.mo = a.acceleration.z || 0)
        }, !1);
        this.by && !this.b.Ha && (jQuery(document).mousemove(function(a) {
            c.Vw(a)
        }), jQuery(document).mousedown(function(a) {
            c.Uw(a)
        }), jQuery(document).mouseup(function(a) {
            c.Ww(a)
        }));
        !this.b.lg && this.b.jc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(h, null, {
            frequency: 40
        });
        this.b.Ux(this)
    };
    b.tq = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.sh(a.pointerId),
                c = $a();
            if (0 <= b) {
                var e = this.b.Ha ? d : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - e.left, a.pageY - e.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    b.uq = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var b = this.b.Ha ? d : jQuery(this.b.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top;
            $a();
            this.Hd = this.touches.length;
            this.Sg = a.pointerId;
            this.touches.push(g(c, b, a.pointerId, this.Hd));
            this.b.yc = !0;
            this.b.trigger(V.prototype.d.Wn, this);
            this.b.trigger(V.prototype.d.ao, this);
            this.Qd = c;
            this.Rd = b;
            this.b.trigger(V.prototype.d.Zk, this);
            this.b.yc = !1
        }
    };
    b.ak = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.sh(a.pointerId);
            this.Hd = 0 <= c ? this.touches[c].ti : -1;
            this.Sg = 0 <= c ? this.touches[c].id : -1;
            this.b.yc = !0;
            this.b.trigger(V.prototype.d.Vn, this);
            this.b.trigger(V.prototype.d.$n, this);
            0 <= c && (b || this.touches[c].fq(this, c), 100 > k.length && k.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.yc = !1
        }
    };
    b.wq = function(a) {
        a.preventDefault && a.preventDefault();
        var b = $a(),
            c, e, f, g;
        c = 0;
        for (e = a.changedTouches.length; c < e; c++)
            if (f = a.changedTouches[c], g = this.sh(f.identifier), 0 <= g) {
                var h = this.b.Ha ? d : jQuery(this.b.canvas).offset();
                g = this.touches[g];
                2 > b - g.time || g.update(b, f.pageX - h.left, f.pageY - h.top, 2 * (f.Mz || f.Vz || f.Ez || f.Hz || 0), 2 * (f.Nz || f.Wz || f.Fz || f.Iz || 0), f.xz || f.Uz || f.Dz || f.Gz || 0)
            }
    };
    b.xq = function(a) {
        a.preventDefault && ob(a) && a.preventDefault();
        var b = this.b.Ha ? d : jQuery(this.b.canvas).offset();
        $a();
        this.b.yc = !0;
        var c, e, f, h;
        c = 0;
        for (e = a.changedTouches.length; c < e; c++)
            if (f = a.changedTouches[c], h = this.sh(f.identifier), -1 === h) {
                h = f.pageX - b.left;
                var l = f.pageY - b.top;
                this.Hd = this.touches.length;
                this.Sg = f.identifier;
                this.touches.push(g(h, l, f.identifier, this.Hd));
                this.b.trigger(V.prototype.d.Wn, this);
                this.b.trigger(V.prototype.d.ao, this);
                this.Qd = h;
                this.Rd = l;
                this.b.trigger(V.prototype.d.Zk, this)
            }
        this.b.yc = !1
    };
    b.Km = function(a, b) {
        a.preventDefault && ob(a) && a.preventDefault();
        this.b.yc = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.sh(e.identifier), 0 <= e && (this.Hd = this.touches[e].ti, this.Sg = this.touches[e].id, this.b.trigger(V.prototype.d.Vn, this), this.b.trigger(V.prototype.d.$n, this), b || this.touches[e].fq(this, e), 100 > k.length && k.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.yc = !1
    };
    b.we = function() {
        return this.b.jc && 0 === this.ek && 0 !== c ? 90 * c : this.ek
    };
    b.Oo = function() {
        return this.b.jc && 0 === this.fk && 0 !== a ? 90 * a : this.fk
    };
    b.So = function() {
        return this.b.jc && 0 === this.gk && 0 !== f ? 90 * f : this.gk
    };
    b.Uw = function(a) {
        r(a) || (this.xq({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.Dm = !0)
    };
    b.Vw = function(a) {
        this.Dm && !r(a) && this.wq({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    b.Ww = function(a) {
        a.preventDefault && this.b.mp && !this.b.eg && a.preventDefault();
        this.b.mp = !0;
        r(a) || (this.Km({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.Dm = !1)
    };
    b.rn = function() {
        var a, b, c, d = $a();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Jj = d), c.Kw(this, a)
    };
    l.prototype.ao = function() {
        return !0
    };
    l.prototype.$n = function() {
        return !0
    };
    l.prototype.Zk = function(a) {
        return a ? this.b.Gk(a, this.Qd, this.Rd) : !1
    };
    l.prototype.Yr = function(a, b, c) {
        a = Math.floor(a);
        if (0 > a || a >= this.touches.length) return !1;
        var d = this.touches[a];
        a = Va(d.x, d.y, d.Kj, d.Lj);
        var d = (d.time - d.Jj) / 1E3,
            e = 0;
        0 < d && (e = a / d);
        return jc(e, b, c)
    };
    l.prototype.Wn = function(a) {
        a = Math.floor(a);
        return a === this.Hd
    };
    l.prototype.Vn = function(a) {
        a = Math.floor(a);
        return a === this.Hd
    };
    l.prototype.Ks = function() {
        return !0
    };
    l.prototype.Yn = function() {
        return !0
    };
    l.prototype.Is = function() {
        return !0
    };
    l.prototype.Ls = function(a) {
        return a ? this.b.Gk(a, this.Qd, this.Rd) : !1
    };
    l.prototype.Zn = function(a) {
        return a ? this.b.Gk(a, this.Qd, this.Rd) : !1
    };
    l.prototype.Js = function(a) {
        return a ? this.b.Gk(a, this.Qd, this.Rd) : !1
    };
    q.d = new l;
    p.prototype.eo = function(a, b) {
        var c = this.ag;
        if (0 > c || c >= this.touches.length) a.r(0);
        else {
            var d, e, f, g, h;
            ja(b) ? (d = this.b.xh(0), e = d.scale, f = d.qe, g = d.ae, h = d.i, d.scale = 1, d.qe = 1, d.ae = 1, d.i = 0, a.r(d.Lb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.qe = f, d.ae = g, d.i = h) : (d = ka(b) ? this.b.xh(b) : this.b.Rl(b)) ? a.r(d.Lb(this.touches[c].x, this.touches[c].y, !0)) : a.r(0)
        }
    };
    p.prototype.fo = function(a, b) {
        var c = this.ag;
        if (0 > c || c >= this.touches.length) a.r(0);
        else {
            var d, e, f, g, h;
            ja(b) ? (d = this.b.xh(0), e = d.scale, f = d.qe, g = d.be, h = d.i, d.scale = 1, d.qe = 1, d.be = 1, d.i = 0, a.r(d.Lb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.qe = f, d.be = g, d.i = h) : (d = ka(b) ? this.b.xh(b) : this.b.Rl(b)) ? a.r(d.Lb(this.touches[c].x, this.touches[c].y, !1)) : a.r(0)
        }
    };
    p.prototype.Lr = function(a, b) {
        b = Math.floor(b);
        if (0 > b || b >= this.touches.length) a.r(0);
        else {
            var c = this.touches[b];
            a.r(Ia(Pa(c.Kj, c.Lj, c.x, c.y)))
        }
    };
    q.T = new p
})();
var Fc = [],
    Gc = [],
    Hc = [],
    Ic = [],
    Jc = [],
    Kc = [],
    Lc = [],
    Mc = [],
    Nc = [],
    Tc = [];

function Uc(h) {
    return result = (h /= 1) < 1 / 2.75 ? 7.5625 * h * h + 0 : h < 2 / 2.75 ? 1 * (7.5625 * (h -= 1.5 / 2.75) * h + .75) + 0 : h < 2.5 / 2.75 ? 1 * (7.5625 * (h -= 2.25 / 2.75) * h + .9375) + 0 : 1 * (7.5625 * (h -= 2.625 / 2.75) * h + .984375) + 0
}

function Vc(h, g) {
    return Math.round(h / g * 1E4)
}

function Wc(h, g, e, r, l) {
    var p = 0;
    switch (h) {
        case 0:
            p = 1 * g / e + 0;
            break;
        case 1:
            p = 1 * (g /= e) * g + 0;
            break;
        case 2:
            p = -1 * (g /= e) * (g - 2) + 0;
            break;
        case 3:
            p = 1 > (g /= e / 2) ? .5 * g * g + 0 : -.5 * (--g * (g - 2) - 1) + 0;
            break;
        case 4:
            p = 1 * (g /= e) * g * g + 0;
            break;
        case 5:
            p = 1 * ((g = g / e - 1) * g * g + 1) + 0;
            break;
        case 6:
            p = 1 > (g /= e / 2) ? .5 * g * g * g + 0 : .5 * ((g -= 2) * g * g + 2) + 0;
            break;
        case 7:
            p = 1 * (g /= e) * g * g * g + 0;
            break;
        case 8:
            p = -1 * ((g = g / e - 1) * g * g * g - 1) + 0;
            break;
        case 9:
            p = 1 > (g /= e / 2) ? .5 * g * g * g * g + 0 : -.5 * ((g -= 2) * g * g * g - 2) + 0;
            break;
        case 10:
            p = 1 * (g /= e) * g * g * g * g + 0;
            break;
        case 11:
            p = 1 * ((g = g / e - 1) * g * g * g * g + 1) + 0;
            break;
        case 12:
            p = 1 > (g /= e / 2) ? .5 * g * g * g * g * g + 0 : .5 * ((g -= 2) * g * g * g * g + 2) + 0;
            break;
        case 13:
            l.nc ? p = Jc[Vc(g, e)] : p = -(Math.sqrt(1 - g * g) - 1);
            break;
        case 14:
            l.nc ? p = Kc[Vc(g, e)] : p = Math.sqrt(1 - (g - 1) * (g - 1));
            break;
        case 15:
            p = l.nc ? Lc[Vc(g, e)] : 1 > (g /= e / 2) ? -.5 * (Math.sqrt(1 - g * g) - 1) + 0 : .5 * (Math.sqrt(1 - (g -= 2) * g) + 1) + 0;
            break;
        case 16:
            l.nc ? p = Mc[Vc(g, e)] : (l = l.ac, p = 1 * (g /= e) * g * ((l + 1) * g - l) + 0);
            break;
        case 17:
            l.nc ? p = Nc[Vc(g, e)] : (l = l.ac, p = 1 * ((g = g / e - 1) * g * ((l + 1) * g + l) + 1) + 0);
            break;
        case 18:
            l.nc ? p = Tc[Vc(g, e)] : (l = l.ac, p = 1 > (g /= e / 2) ? .5 * g * g * (((l *= 1.525) + 1) * g - l) + 0 : .5 * ((g -= 2) * g * (((l *= 1.525) + 1) * g + l) + 2) + 0);
            break;
        case 19:
            l.nc ? p = Gc[Vc(g, e)] : (p = l.Qf, h = l.fi, g /= e, 0 == h && (h = .3 * e), 0 == p || p < Math.abs(1) ? (p = 1, l = h / 4) : l = h / (2 * Math.PI) * Math.asin(1 / p), p = -(p * Math.pow(2, 10 * --g) * Math.sin(2 * (g * e - l) * Math.PI / h)) + 0);
            break;
        case 20:
            l.nc ? p = Hc[Vc(g, e)] : (p = l.Qf, h = l.fi, g /= e, 0 == h && (h = .3 * e), 0 == p || p < Math.abs(1) ? (p = 1, l = h / 4) : l = h / (2 * Math.PI) * Math.asin(1 / p), p = p * Math.pow(2, -10 * g) * Math.sin(2 * (g * e - l) * Math.PI / h) + 1);
            break;
        case 21:
            l.nc ? p = Ic[Vc(g, e)] : (p = l.Qf, h = l.fi, g /= e / 2, 0 == h && (h = .3 * e * 1.5), 0 == p || p < Math.abs(1) ? (p = 1, l = h / 4) : l = h / (2 * Math.PI) * Math.asin(1 / p), p = 1 > g ? -.5 * p * Math.pow(2, 10 * --g) * Math.sin(2 * (g * e - l) * Math.PI / h) + 0 : p * Math.pow(2, -10 * --g) * Math.sin(2 * (g * e - l) * Math.PI / h) * .5 + 1);
            break;
        case 22:
            p = l.nc ? 1 - Fc[Vc(e - g, e)] + 0 : 1 - Uc(e - g / e) + 0;
            break;
        case 23:
            p = l.nc ? Fc[Vc(g, e)] : Uc(g / e);
            break;
        case 24:
            p = l.nc ? g < e / 2 ? .5 * (1 - Fc[Vc(e - 2 * g, e)] + 0) + 0 : .5 * Fc[Vc(2 * g - e, e)] + .5 : g < e / 2 ? .5 * (1 - Uc(e - 2 * g) + 0) + 0 : .5 * Uc((2 * g - e) / e) + .5;
            break;
        case 25:
            g = g / e / 2;
            p = 2 * g * g * (3 - 2 * g);
            break;
        case 26:
            g = (g / e + 1) / 2;
            p = 2 * g * g * (3 - 2 * g) - 1;
            break;
        case 27:
            g = g / e, p = g * g * (3 - 2 * g)
    }
    return r ? 1 - p : p
}
for (var Xc = 0, Yc = 0, Zc = 0, W = 0, Z = 0, $c = 0; 1E4 >= $c; $c++) W = $c / 1E4, Xc = (W /= 1) < 1 / 2.75 ? 7.5625 * W * W + 0 : W < 2 / 2.75 ? 1 * (7.5625 * (W -= 1.5 / 2.75) * W + .75) + 0 : W < 2.5 / 2.75 ? 1 * (7.5625 * (W -= 2.25 / 2.75) * W + .9375) + 0 : 1 * (7.5625 * (W -= 2.625 / 2.75) * W + .984375) + 0, Fc[$c] = Xc, W = $c / 1E4, Zc = Yc = 0, W /= 1, 0 == Zc && (Zc = .3), 0 == Yc || Yc < Math.abs(1) ? (Yc = 1, Z = Zc / 4) : Z = Zc / (2 * Math.PI) * Math.asin(1 / Yc), Xc = -(Yc * Math.pow(2, 10 * --W) * Math.sin(2 * (1 * W - Z) * Math.PI / Zc)) + 0, Gc[$c] = Xc, W = $c / 1E4, Zc = Yc = 0, W /= 1, 0 == Zc && (Zc = .3), 0 == Yc || Yc < Math.abs(1) ? (Yc = 1, Z = Zc / 4) : Z = Zc / (2 * Math.PI) * Math.asin(1 / Yc), Xc = Yc * Math.pow(2, -10 * W) * Math.sin(2 * (1 * W - Z) * Math.PI / Zc) + 1, Hc[$c] = Xc, W = $c / 1E4, Zc = Yc = 0, W /= .5, 0 == Zc && (Zc = .3 * 1.5), 0 == Yc || Yc < Math.abs(1) ? (Yc = 1, Z = Zc / 4) : Z = Zc / (2 * Math.PI) * Math.asin(1 / Yc), Xc = 1 > W ? -.5 * Yc * Math.pow(2, 10 * --W) * Math.sin(2 * (1 * W - Z) * Math.PI / Zc) + 0 : Yc * Math.pow(2, -10 * --W) * Math.sin(2 * (1 * W - Z) * Math.PI / Zc) * .5 + 1, Ic[$c] = Xc, W = $c / 1E4, Jc[$c] = -(Math.sqrt(1 - W * W) - 1), W = $c / 1E4, Kc[$c] = Math.sqrt(1 - (W - 1) * (W - 1)), W = $c / 1E4, Xc = 1 > (W /= .5) ? -.5 * (Math.sqrt(1 - W * W) - 1) + 0 : .5 * (Math.sqrt(1 - (W -= 2) * W) + 1) + 0, Lc[$c] = Xc, W = $c / 1E4, Z = 0, 0 == Z && (Z = 1.70158), Xc = 1 * (W /= 1) * W * ((Z + 1) * W - Z) + 0, Mc[$c] = Xc, W = $c / 1E4, Z = 0, 0 == Z && (Z = 1.70158), Xc = 1 * ((W = W / 1 - 1) * W * ((Z + 1) * W + Z) + 1) + 0, Nc[$c] = Xc, W = $c / 1E4, Z = 0, 0 == Z && (Z = 1.70158), Xc = 1 > (W /= .5) ? .5 * W * W * (((Z *= 1.525) + 1) * W - Z) + 0 : .5 * ((W -= 2) * W * (((Z *= 1.525) + 1) * W + Z) + 2) + 0, Tc[$c] = Xc;

function ad(h, g, e, r, l, p, q) {
    this.name = h;
    this.value = 0;
    this.Jg(r);
    this.zk(l);
    this.jf = e;
    this.Da = g;
    this.duration = p;
    this.state = this.R = 0;
    this.ck = this.dk = this.Zj = this.zg = !1;
    this.wb = this.Ca = 0;
    this.Hb = q;
    this.de = 1;
    this.uh = !1;
    this.sc = [];
    this.Ip = 1;
    for (h = 0; 28 > h; h++) this.sc[h] = {}, this.sc[h].Qf = 0, this.sc[h].fi = 0, this.sc[h].Ng = 0, this.sc[h].ac = 0, this.sc[h].nc = !0
}
ad.prototype = {};
ad.prototype.Jg = function(h) {
    this.da = parseFloat(h.split(",")[0]);
    this.Qa = parseFloat(h.split(",")[1]);
    this.wb = this.Ca = 0
};
ad.prototype.zk = function(h) {
    this.ba = parseFloat(h.split(",")[0]);
    this.Ka = parseFloat(h.split(",")[1]);
    isNaN(this.Ka) && (this.Ka = this.ba)
};
ad.prototype.Yk = function(h) {
    if (0 === this.state) return -1;
    1 === this.state && (this.R += h);
    2 === this.state && (this.R -= h);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.R += h * this.de;
    5 === this.state && (this.R += h * this.de);
    return 0 > this.R ? (this.R = 0, 4 === this.state ? this.de = 1 : 6 === this.state ? (this.de = 1, this.uh = !1) : this.state = 0, this.ck = !0, 0) : this.R > this.duration ? (this.R = this.duration, 4 === this.state ? this.de = -1 : 6 === this.state ? (this.de = -1, this.uh = !0) : 5 === this.state ? this.R = 0 : this.state = 0, this.Zj = !0, 1) : this.uh ? Wc(this.jf, this.duration - this.R, this.duration, this.uh, this.sc[this.jf]) : Wc(this.jf, this.R, this.duration, this.uh, this.sc[this.jf])
};

function cd(h) {
    this.b = h
}
(function() {
    var h = cd.prototype;
    h.wa = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    h.wa.prototype.Y = function() {};
    h.pa = function(e, g) {
        this.type = e;
        this.behavior = e.behavior;
        this.e = g;
        this.b = e.b
    };
    var g = h.pa.prototype;
    g.Y = function() {
        this.Eg = this.B[0];
        this.Db = 1 == this.Eg || 2 == this.Eg || 3 == this.Eg || 4 == this.Eg;
        this.Da = this.B[1];
        this.zl = this.B[2];
        this.target = this.B[3];
        this.Fk = this.B[4];
        this.Sk = !1;
        1 === this.Fk && (this.target = "relative(" + this.target + ")");
        this.duration = this.B[5];
        this.Hb = 1 === this.B[6];
        this.value = 0;
        this.n = {};
        this.qo(this.Da, this.zl, "current", this.target, this.duration, this.Hb);
        1 === this.B[0] && this.si(0);
        2 === this.B[0] && this.si(2);
        3 === this.B[0] && this.si(3);
        4 === this.B[0] && this.si(4)
    };
    g.Bd = function(e, g) {
        void 0 === g && (g = "current");
        var h = g.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        g = g.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var p = this.value;
        if ("current" === g) switch (e) {
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
                h = Ia(this.e.i) + "," + Ia(this.e.i);
                break;
            case 5:
                h = 100 * this.e.opacity + "," + 100 * this.e.opacity;
                break;
            case 6:
                h = p + "," + p;
                break;
            case 7:
                h = this.e.x + "," + this.e.y;
                break;
            case 8:
                h = this.e.x + "," + this.e.y;
                break;
            case 9:
                h = void 0 !== this.e.Fa ? this.e.width / this.e.Fa.width + "," + this.e.height / this.e.Fa.height : "1,1"
        }
        if ("relative" === g.substring(0, 8)) {
            var q = g.match(/\((.*?)\)/);
            if (q) var b = parseFloat(q[1].split(",")[0]),
                d = parseFloat(q[1].split(",")[1]);
            isNaN(b) && (b = 0);
            isNaN(d) && (d = 0);
            switch (e) {
                case 0:
                    h = this.e.x + b + "," + (this.e.y + d);
                    break;
                case 1:
                    h = this.e.width + b + "," + (this.e.height + d);
                    break;
                case 2:
                    h = this.e.width + b + "," + (this.e.height + d);
                    break;
                case 3:
                    h = this.e.width + b + "," + (this.e.height + d);
                    break;
                case 4:
                    h = Ia(this.e.i) + b + "," + (Ia(this.e.i) + d);
                    break;
                case 5:
                    h = 100 * this.e.opacity + b + "," + (100 * this.e.opacity + d);
                    break;
                case 6:
                    h = p + b + "," + p + b;
                    break;
                case 7:
                    h = this.e.x + b + "," + this.e.y;
                    break;
                case 8:
                    h = this.e.x + "," + (this.e.y + b);
                    break;
                case 9:
                    h = b + "," + d
            }
        }
        return h
    };
    g.qo = function(e, g, h, p, q, b) {
        h = this.Bd(e, h);
        p = this.Bd(e, p);
        void 0 !== this.n["default"] && delete this.n["default"];
        this.n["default"] = new ad("default", e, g, h, p, q, b);
        this.n["default"].Fe = 0
    };
    g.Ob = function() {
        JSON.stringify(this.n["default"]);
        return {
            playmode: this.Eg,
            active: this.Db,
            tweened: this.Da,
            easing: this.zl,
            target: this.target,
            targetmode: this.Fk,
            useCurrent: this.Sk,
            duration: this.duration,
            enforce: this.Hb,
            value: this.value,
            tweenlist: JSON.stringify(this.n["default"])
        }
    };
    ad.ys = function(e, g, h, p, q, b, d, f) {
        g = new ad(g, h, p, q, b, d, f);
        for (var a in e) g[a] = e[a];
        return g
    };
    g.mc = function(e) {
        var g = JSON.parse(e.tweenlist),
            g = ad.ys(g, g.name, g.Da, g.jf, g.da + "," + g.Qa, g.ba + "," + g.Ka, g.duration, g.Hb);
        this.n["default"] = g;
        this.Eg = e.playmode;
        this.Db = e.active;
        this.zl = e.easing;
        this.target = e.target;
        this.Fk = e.targetmode;
        this.Sk = e.useCurrent;
        this.duration = e.duration;
        this.Hb = e.enforce;
        this.value = e.value
    };
    g.Lx = function(e) {
        1 < e && (e = 1);
        0 > e && (e = 0);
        for (var g in this.n) {
            var h = this.n[g];
            h.Ca = 0;
            h.wb = 0;
            h.state = 3;
            h.R = e * h.duration;
            var p = h.Yk(0);
            this.An(h, p)
        }
    };
    g.si = function(e) {
        for (var g in this.n) {
            var h = this.n[g];
            if (this.Sk) {
                var p = this.Bd(h.Da, "current"),
                    q = this.Bd(h.Da, this.target);
                h.Jg(p);
                h.zk(q)
            }
            0 === e && (h.R = 1E-6, h.Ca = 0, h.wb = 0, h.zg = !0, h.state = 1);
            1 === e && (h.state = h.Ip);
            if (2 === e || 4 === e) h.R = 1E-6, h.Ca = 0, h.wb = 0, h.zg = !0, 2 == e && (h.state = 4), 4 == e && (h.state = 6);
            3 === e && (h.R = 1E-6, h.Ca = 0, h.wb = 0, h.zg = !0, h.state = 5)
        }
    };
    g.Sx = function(e) {
        for (var g in this.n) {
            var h = this.n[g];
            3 != h.state && 0 != h.state && (h.Ip = h.state);
            1 === e && (h.R = 0);
            2 === e && (h.R = h.duration);
            h.state = 3;
            var p = h.Yk(0);
            this.An(h, p)
        }
    };
    g.Ax = function(e) {
        for (var g in this.n) {
            var h = this.n[g];
            1 === e && (h.R = h.duration, h.Ca = 0, h.wb = 0, h.dk = !0);
            h.state = 2
        }
    };
    g.An = function(e, g) {
        if (0 === e.Da) e.Hb ? (this.e.x = e.da + (e.ba - e.da) * g, this.e.y = e.Qa + (e.Ka - e.Qa) * g) : (this.e.x += (e.ba - e.da) * g - e.Ca, this.e.y += (e.Ka - e.Qa) * g - e.wb, e.Ca = (e.ba - e.da) * g, e.wb = (e.Ka - e.Qa) * g);
        else if (1 === e.Da) e.Hb ? (this.e.width = e.da + (e.ba - e.da) * g, this.e.height = e.Qa + (e.Ka - e.Qa) * g) : (this.e.width += (e.ba - e.da) * g - e.Ca, this.e.height += (e.Ka - e.Qa) * g - e.wb, e.Ca = (e.ba - e.da) * g, e.wb = (e.Ka - e.Qa) * g);
        else if (2 === e.Da) e.Hb ? this.e.width = e.da + (e.ba - e.da) * g : (this.e.width += (e.ba - e.da) * g - e.Ca, e.Ca = (e.ba - e.da) * g);
        else if (3 === e.Da) e.Hb ? this.e.height = e.Qa + (e.Ka - e.Qa) * g : (this.e.height += (e.Ka - e.Qa) * g - e.wb, e.wb = (e.Ka - e.Qa) * g);
        else if (4 === e.Da)
            if (e.Hb) {
                var h = e.da + (e.ba - e.da) * g;
                this.e.i = Ma(B(h))
            } else h = (e.ba - e.da) * g - e.Ca, this.e.i = Ma(this.e.i + B(h)), e.Ca = (e.ba - e.da) * g;
        else if (5 === e.Da) e.Hb ? this.e.opacity = (e.da + (e.ba - e.da) * g) / 100 : (this.e.opacity += ((e.ba - e.da) * g - e.Ca) / 100, e.Ca = (e.ba - e.da) * g);
        else if (6 === e.Da) e.Hb ? this.value = e.da + (e.ba - e.da) * g : (this.value += (e.ba - e.da) * g - e.Ca, e.Ca = (e.ba - e.da) * g);
        else if (7 === e.Da) e.Hb ? this.e.x = e.da + (e.ba - e.da) * g : (this.e.x += (e.ba - e.da) * g - e.Ca, e.Ca = (e.ba - e.da) * g);
        else if (8 === e.Da) e.Hb ? this.e.y = e.Qa + (e.Ka - e.Qa) * g : (this.e.y += (e.Ka - e.Qa) * g - e.wb, e.wb = (e.Ka - e.Qa) * g);
        else if (9 === e.Da) {
            var h = e.da + (e.ba - e.da) * g,
                p = e.Qa + (e.Ka - e.Qa) * g;
            0 > this.e.width && (h = e.da + (e.ba + e.da) * -g);
            0 > this.e.height && (p = e.Qa + (e.Ka + e.Qa) * -g);
            e.Hb ? (this.e.width = this.e.Fa.width * h, this.e.height = this.e.Fa.height * p) : (0 > this.e.width ? (this.e.width = this.e.width / (-1 + e.Ca) * h, e.Ca = h + 1) : (this.e.width = this.e.width / (1 + e.Ca) * h, e.Ca = h - 1), 0 > this.e.height ? (this.e.height = this.e.height / (-1 + e.wb) * p, e.wb = p + 1) : (this.e.height = this.e.height / (1 + e.wb) * p, e.wb = p - 1))
        }
        this.e.Ua()
    };
    g.Sb = function() {
        var e = this.b.Nl(this.e),
            g = this.n["default"];
        0 !== g.state && (g.zg && (this.b.trigger(cd.prototype.d.Zs, this.e), g.zg = !1), g.dk && (this.b.trigger(cd.prototype.d.Xs, this.e), g.dk = !1), this.Db = 1 == g.state || 2 == g.state || 4 == g.state || 5 == g.state || 6 == g.state, e = g.Yk(e), this.An(g, e), g.Zj && (this.b.trigger(cd.prototype.d.Mn, this.e), g.Zj = !1), g.ck && (this.b.trigger(cd.prototype.d.Ws, this.e), g.ck = !1))
    };
    h.d = {};
    g = h.d;
    g.rs = function() {
        return 0 !== this.n["default"].state
    };
    g.yy = function() {
        return 2 == this.n["default"].state
    };
    g.oy = function(e, g) {
        var h = this.n["default"];
        return jc(h.R / h.duration, e, g)
    };
    g.Iy = function(e, g) {
        var h = this.n["default"];
        this.Bi = jc(h.R / h.duration, e, g);
        if (h = this.Jm != this.Bi && this.Bi) this.Jm = this.Bi;
        return h
    };
    g.Zs = function() {
        return void 0 === this.n["default"] ? !1 : this.n["default"].zg
    };
    g.Xs = function() {
        return void 0 === this.n["default"] ? !1 : this.n["default"].dk
    };
    g.Mn = function() {
        return void 0 === this.n["default"] ? !1 : this.n["default"].Zj
    };
    g.Ws = function() {
        return void 0 === this.n["default"] ? !1 : this.n["default"].ck
    };
    h.p = {};
    g = h.p;
    g.Bt = function(e, g) {
        this.Jm = this.Bi = !1;
        this.Sk = 1 == g;
        this.si(e)
    };
    g.Dt = function(e) {
        this.Sx(e)
    };
    g.gt = function(e) {
        this.Jm = this.Bi = !1;
        this.Ax(e)
    };
    g.Py = function(e) {
        this.Lx(e)
    };
    g.kt = function(e) {
        isNaN(e) || 0 > e || void 0 === this.n["default"] || (this.n["default"].duration = e)
    };
    g.Zy = function(e) {
        void 0 !== this.n["default"] && (this.n["default"].Hb = 1 === e)
    };
    g.az = function(e) {
        void 0 !== this.n["default"] && (e = this.Bd(this.n["default"].Da, e), this.n["default"].Jg(e))
    };
    g.pt = function(e, g, h) {
        if (void 0 !== this.n["default"] && !isNaN(h)) {
            var p = this.n["default"],
                q = h + "";
            this.Fk = g;
            var b = "",
                d = "";
            if (1 === g) {
                this.target = "relative(" + q + ")";
                switch (e) {
                    case 0:
                        b = this.e.x + h;
                        d = p.Ka;
                        break;
                    case 1:
                        b = p.ba;
                        d = this.e.y + h;
                        break;
                    case 2:
                        d = b = "" + Ia(this.e.i + B(h));
                        break;
                    case 3:
                        d = b = "" + 100 * this.e.opacity + h;
                        break;
                    case 4:
                        b = this.e.width + h;
                        d = p.Ka;
                        break;
                    case 5:
                        b = p.ba;
                        d = this.e.height + h;
                        break;
                    case 6:
                        d = b = h
                }
                q = b + "," + d
            } else {
                switch (e) {
                    case 0:
                        b = h;
                        d = p.Ka;
                        break;
                    case 1:
                        b = p.ba;
                        d = h;
                        break;
                    case 2:
                        d = b = h;
                        break;
                    case 3:
                        d = b = h;
                        break;
                    case 4:
                        b = h;
                        d = p.Ka;
                        break;
                    case 5:
                        b = p.ba;
                        d = h;
                        break;
                    case 6:
                        d = b = h
                }
                this.target = q = b + "," + d
            }
            e = this.Bd(this.n["default"].Da, "current");
            q = this.Bd(this.n["default"].Da, q);
            p.Jg(e);
            p.zk(q)
        }
    };
    g.gz = function(e) {
        void 0 !== this.n["default"] && (this.n["default"].Da = e)
    };
    g.lt = function(e) {
        void 0 !== this.n["default"] && (this.n["default"].jf = e)
    };
    g.Wy = function(e, g, h, p, q) {
        void 0 !== this.n["default"] && (this.n["default"].sc[e].nc = !1, this.n["default"].sc[e].Qf = g, this.n["default"].sc[e].fi = h, this.n["default"].sc[e].Ng = p, this.n["default"].sc[e].ac = q)
    };
    g.Qy = function() {
        void 0 !== this.n["default"] && (this.n["default"].nc = !0)
    };
    g.hz = function(e) {
        var g = this.n["default"];
        this.value = e;
        6 === g.Da && g.Jg(this.Bd(g.Da, "current"))
    };
    g.cz = function(e, g, h, p, q) {
        if (void 0 === this.n["default"]) this.qo(e, g, initial, h, p, q);
        else {
            var b = this.n["default"];
            b.Da = e;
            b.jf = g;
            b.Jg(this.Bd(e, "current"));
            b.zk(this.Bd(e, h));
            b.duration = p;
            b.Hb = 1 === q
        }
    };
    h.T = {};
    h = h.T;
    h.jz = function(e) {
        var g = "N/A";
        switch (this.n["default"].state) {
            case 0:
                g = "paused";
                break;
            case 1:
                g = "playing";
                break;
            case 2:
                g = "reversing";
                break;
            case 3:
                g = "seeking"
        }
        e.Pb(g)
    };
    h.Oy = function(e) {
        e.r(this.n["default"].R / this.n["default"].duration)
    };
    h.hs = function(e) {
        e.r(this.n["default"].duration)
    };
    h.lz = function(e) {
        var g = this.n["default"],
            h = "N/A";
        switch (g.Da) {
            case 0:
                h = g.ba;
                break;
            case 1:
                h = g.Ka;
                break;
            case 2:
                h = g.ba;
                break;
            case 3:
                h = g.ba;
                break;
            case 4:
                h = g.ba;
                break;
            case 5:
                h = g.Ka;
                break;
            case 6:
                h = g.ba
        }
        e.r(h)
    };
    h.oz = function(e) {
        e.r(this.value)
    };
    h.nz = function(e, g, h, p, q) {
        p = 1 < p ? 1 : p;
        q = Wc(q, 0 > p ? 0 : p, 1, !1, !1);
        e.r(g + q * (h - g))
    }
})();

function sc() {
    return [Dc, uc, vc, wc, yc, tc, xc, Cc, T, Ec, V, cd, E.prototype.d.Tn, T.prototype.p.gs, E.prototype.p.tt, T.prototype.T.Or, tc.prototype.p.CallFunction, T.prototype.p.mt, T.prototype.T.eo, T.prototype.T.fo, E.prototype.d.Zr, T.prototype.p.yt, T.prototype.p.co, E.prototype.d.Jt, E.prototype.p.ht, E.prototype.p.Lt, tc.prototype.d.Mi, tc.prototype.T.Hn, E.prototype.d.ls, E.prototype.p.Kr, E.prototype.p.cs, E.prototype.T.Iw, uc.prototype.d.Pr, uc.prototype.p.wt, uc.prototype.T.ds, uc.prototype.T.es, uc.prototype.d.as, tc.prototype.d.Xr, E.prototype.d.et, T.prototype.d.ts, E.prototype.d.dt, T.prototype.p.zt, T.prototype.p.jt, uc.prototype.p.xt, T.prototype.T.Kt, T.prototype.d.In, E.prototype.d.Vr, xc.prototype.d.Qn, uc.prototype.T.Qr, tc.prototype.T.bt, E.prototype.d.ms, cd.prototype.p.pt, cd.prototype.p.Bt, uc.prototype.d.bs, T.prototype.p.Jr, T.prototype.T.Nr, cd.prototype.d.Mn, T.prototype.p.it, T.prototype.d.Ln, tc.prototype.p.ot, E.prototype.p.Gt, E.prototype.T.Fw, E.prototype.T.Ew, Dc.prototype.d.In, Dc.prototype.p.qt, Cc.prototype.p.nt, E.prototype.d.Jn, T.prototype.d.ct, T.prototype.p.bo, V.prototype.d.Zk, E.prototype.p.ft, cd.prototype.d.rs, E.prototype.d.js, T.prototype.p.Ft, T.prototype.p.Ct, cd.prototype.p.lt, yc.prototype.p.iu, cd.prototype.p.kt, yc.prototype.p.ku, yc.prototype.p.ju, yc.prototype.p.lu, E.prototype.p.Ht, wc.prototype.p.Ur, E.prototype.d.vs, V.prototype.d.Yr, E.prototype.d.Wr, V.prototype.T.Lr, vc.prototype.p.Play, V.prototype.d.Zn, wc.prototype.p.ps, yc.prototype.d.sq, vc.prototype.p.Et, yc.prototype.d.vq, E.prototype.d.ks, Ec.prototype.p.ut, E.prototype.T.round, E.prototype.T.Af, E.prototype.d.Wk, Cc.prototype.p.Rr, Cc.prototype.d.Nn, Cc.prototype.p.ns, Cc.prototype.d.Pn, Cc.prototype.d.On, Cc.prototype.T.ws, E.prototype.p.os, V.prototype.d.Yn]
};