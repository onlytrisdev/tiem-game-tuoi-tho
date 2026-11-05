'use strict';
var x, ca, da, ea, fa, ia, ka, la, ma, na, oa, pa, qa, sa, ta, ua, va, xa, ya, za, Aa, Fa, Ga, Ha, J, Ja, La, Ma, Na, Ra, L, Sa, Ta, Ua, Va, Wa, Xa, $a, ab, bb, gb, hb, ib, jb, kb, lb, mb, tb, ub, vb, zb, Ab, Db, Eb, Fb, Gb, Lb, Pb, Vb, Wb, Xb, Yb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Ec, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ?
function(a) {
    return a.__proto__
}: function(a) {
    return a.constructor.prototype
}); (function() {
    function a(a, g, b, c) {
        this.set(a, g, b, c)
    }
    function c() {
        this.rc = this.qc = this.tc = this.sc = this.Ic = this.Hc = this.Tb = this.Sb = 0
    }
    function b(a, g, b, c) {
        a < g ? b < c ? (t = a < b ? a: b, u = g > c ? g: c) : (t = a < c ? a: c, u = g > b ? g: b) : b < c ? (t = g < b ? g: b, u = a > c ? a: c) : (t = g < c ? g: c, u = a > b ? a: b)
    }
    function d() {
        this.items = this.Xf = null;
        this.Hk = 0;
        A && (this.Xf = new Set);
        this.Pj = [];
        this.$g = !0
    }
    function f(a) {
        E[F++] = a
    }
    function h() {
        this.Ga = this.Yn = this.y = this.D = 0
    }
    function e(a) {
        this.ec = [];
        this.Tl = this.Vl = this.Wl = this.Ul = 0;
        this.hm = null;
        this.ml(a)
    }
    function g(a, g) {
        this.Mo = a;
        this.Lo = g;
        this.cells = {}
    }
    function l(a, g) {
        this.Mo = a;
        this.Lo = g;
        this.cells = {}
    }
    function p(a, g, b) {
        var c;
        return B.length ? (c = B.pop(), c.qp = a, c.x = g, c.y = b, c) : new da(a, g, b)
    }
    function k(a, g, b) {
        this.qp = a;
        this.x = g;
        this.y = b;
        this.Pc = new ea
    }
    function m(a, g, b) {
        var c;
        return z.length ? (c = z.pop(), c.qp = a, c.x = g, c.y = b, c) : new fa(a, g, b)
    }
    function n(a, g, b) {
        this.qp = a;
        this.x = g;
        this.y = b;
        this.Pc = [];
        this.ij = !0;
        this.Rf = new ea;
        this.Zj = !1
    }
    function q(a, g) {
        return a.uf - g.uf
    }
    ia = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ka = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ca = function(a) {
        return a
    };
    la = function(a) {
        return "undefined" === typeof a
    };
    ma = function(a) {
        return "number" === typeof a
    };
    na = function(a) {
        return "string" === typeof a
    };
    oa = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    pa = function(a) {--a;
        for (var g = 1; 32 > g; g <<= 1) a = a | a >> g;
        return a + 1
    };
    qa = function(a) {
        return 0 > a ? -a: a
    };
    sa = function(a, g) {
        return a > g ? a: g
    };
    ta = function(a, g) {
        return a < g ? a: g
    };
    ua = Math.PI;
    va = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    xa = function(a) {
        var g = a | 0;
        return g === a ? g: g + 1
    };
    ya = function(a, g, b, c, e, k, l, d) {
        var m, p, f, n;
        a < b ? (p = a, m = b) : (p = b, m = a);
        e < l ? (n = e, f = l) : (n = l, f = e);
        if (m < n || p > f) return ! 1;
        g < c ? (p = g, m = c) : (p = c, m = g);
        k < d ? (n = k, f = d) : (n = d, f = k);
        if (m < n || p > f) return ! 1;
        m = e - a + l - b;
        p = k - g + d - c;
        a = b - a;
        g = c - g;
        e = l - e;
        k = d - k;
        d = qa(g * e - k * a);
        return qa(e * p - k * m) > d ? !1 : qa(a * p - g * m) <= d
    };
    a.prototype.set = function(a, g, b, c) {
        this.left = a;
        this.top = g;
        this.right = b;
        this.bottom = c
    };
    a.prototype.dk = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    a.prototype.width = function() {
        return this.right - this.left
    };
    a.prototype.height = function() {
        return this.bottom - this.top
    };
    a.prototype.offset = function(a, g) {
        this.left += a;
        this.top += g;
        this.right += a;
        this.bottom += g;
        return this
    };
    a.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    a.prototype.aA = function(a) {
        return ! (a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    a.prototype.bA = function(a, g, b) {
        return ! (a.right + g < this.left || a.bottom + b < this.top || a.left + g > this.right || a.top + b > this.bottom)
    };
    a.prototype.kd = function(a, g) {
        return a >= this.left && a <= this.right && g >= this.top && g <= this.bottom
    };
    a.prototype.hk = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    za = a;
    c.prototype.ll = function(a) {
        this.Sb = a.left;
        this.Tb = a.top;
        this.Hc = a.right;
        this.Ic = a.top;
        this.sc = a.right;
        this.tc = a.bottom;
        this.qc = a.left;
        this.rc = a.bottom
    };
    c.prototype.Hu = function(a, g) {
        if (0 === g) this.ll(a);
        else {
            var b = Math.sin(g),
            c = Math.cos(g),
            e = a.left * b,
            k = a.top * b,
            d = a.right * b,
            b = a.bottom * b,
            l = a.left * c,
            m = a.top * c,
            p = a.right * c,
            c = a.bottom * c;
            this.Sb = l - k;
            this.Tb = m + e;
            this.Hc = p - k;
            this.Ic = m + d;
            this.sc = p - b;
            this.tc = c + d;
            this.qc = l - b;
            this.rc = c + e
        }
    };
    c.prototype.offset = function(a, g) {
        this.Sb += a;
        this.Tb += g;
        this.Hc += a;
        this.Ic += g;
        this.sc += a;
        this.tc += g;
        this.qc += a;
        this.rc += g;
        return this
    };
    var t = 0,
    u = 0;
    c.prototype.Wr = function(a) {
        b(this.Sb, this.Hc, this.sc, this.qc);
        a.left = t;
        a.right = u;
        b(this.Tb, this.Ic, this.tc, this.rc);
        a.top = t;
        a.bottom = u
    };
    c.prototype.kd = function(a, g) {
        var b = this.Sb,
        c = this.Tb,
        e = this.Hc - b,
        k = this.Ic - c,
        d = this.sc - b,
        l = this.tc - c,
        m = a - b,
        p = g - c,
        f = e * e + k * k,
        n = e * d + k * l,
        k = e * m + k * p,
        r = d * d + l * l,
        q = d * m + l * p,
        h = 1 / (f * r - n * n),
        e = (r * k - n * q) * h,
        f = (f * q - n * k) * h;
        if (0 <= e && 0 < f && 1 > e + f) return ! 0;
        e = this.qc - b;
        k = this.rc - c;
        f = e * e + k * k;
        n = e * d + k * l;
        k = e * m + k * p;
        h = 1 / (f * r - n * n);
        e = (r * k - n * q) * h;
        f = (f * q - n * k) * h;
        return 0 <= e && 0 < f && 1 > e + f
    };
    c.prototype.ne = function(a, g) {
        if (g) switch (a) {
        case 0:
            return this.Sb;
        case 1:
            return this.Hc;
        case 2:
            return this.sc;
        case 3:
            return this.qc;
        case 4:
            return this.Sb;
        default:
            return this.Sb
        } else switch (a) {
        case 0:
            return this.Tb;
        case 1:
            return this.Ic;
        case 2:
            return this.tc;
        case 3:
            return this.rc;
        case 4:
            return this.Tb;
        default:
            return this.Tb
        }
    };
    c.prototype.vh = function() {
        return (this.Sb + this.Hc + this.sc + this.qc) / 4
    };
    c.prototype.wh = function() {
        return (this.Tb + this.Ic + this.tc + this.rc) / 4
    };
    c.prototype.Us = function(a) {
        var g = a.vh(),
        b = a.wh();
        if (this.kd(g, b)) return ! 0;
        g = this.vh();
        b = this.wh();
        if (a.kd(g, b)) return ! 0;
        var c, e, k, d, l, m, p, f;
        for (p = 0; 4 > p; p++) for (f = 0; 4 > f; f++) if (g = this.ne(p, !0), b = this.ne(p, !1), c = this.ne(p + 1, !0), e = this.ne(p + 1, !1), k = a.ne(f, !0), d = a.ne(f, !1), l = a.ne(f + 1, !0), m = a.ne(f + 1, !1), ya(g, b, c, e, k, d, l, m)) return ! 0;
        return ! 1
    };
    Aa = c;
    Fa = function(a, g) {
        for (var b in g) g.hasOwnProperty(b) && (a[b] = g[b]);
        return a
    };
    Ga = function(a, g) {
        var b, c;
        g = va(g);
        if (! (0 > g || g >= a.length)) {
            b = g;
            for (c = a.length - 1; b < c; b++) a[b] = a[b + 1];
            Ha(a, c)
        }
    };
    Ha = function(a, g) {
        a.length = g
    };
    J = function(a) {
        Ha(a, 0)
    };
    Ja = function(a, g) {
        J(a);
        var b, c;
        b = 0;
        for (c = g.length; b < c; ++b) a[b] = g[b]
    };
    La = function(a, g) {
        a.push.apply(a, g)
    };
    Ma = function(a, g) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b) if (a[b] === g) return b;
        return - 1
    };
    Na = function(a, g) {
        var b = Ma(a, g); - 1 !== b && Ga(a, b)
    };
    Ra = function(a, g, b) {
        return a < g ? g: a > b ? b: a
    };
    L = function(a) {
        return a / (180 / ua)
    };
    Sa = function(a) {
        return 180 / ua * a
    };
    Ta = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ua = function(a) {
        a %= 2 * ua;
        0 > a && (a += 2 * ua);
        return a
    };
    Va = function(a) {
        return Ta(Sa(a))
    };
    Wa = function(a) {
        return Ua(L(a))
    };
    Xa = function(a, g, b, c) {
        return Math.atan2(c - g, b - a)
    };
    $a = function(a, g) {
        if (a === g) return 0;
        var b = Math.sin(a),
        c = Math.cos(a),
        e = Math.sin(g),
        k = Math.cos(g),
        b = b * e + c * k;
        return 1 <= b ? 0 : -1 >= b ? ua: Math.acos(b)
    };
    ab = function(a, g, b) {
        var c = Math.sin(a),
        e = Math.cos(a),
        k = Math.sin(g),
        d = Math.cos(g);
        return Math.acos(c * k + e * d) > b ? 0 < e * k - c * d ? Ua(a + b) : Ua(a - b) : Ua(g)
    };
    bb = function(a, g) {
        var b = Math.sin(a),
        c = Math.cos(a),
        e = Math.sin(g),
        k = Math.cos(g);
        return 0 >= c * e - b * k
    };
    gb = function(a, g, b, c, e, k) {
        if (0 === b) return k ? a: g;
        var d = Math.sin(b);
        b = Math.cos(b);
        a -= c;
        g -= e;
        var l = a * d;
        a = a * b - g * d;
        g = g * b + l;
        return k ? a + c: g + e
    };
    hb = function(a, g, b, c) {
        a = b - a;
        g = c - g;
        return Math.sqrt(a * a + g * g)
    };
    ib = function(a, g) {
        return ! a !== !g
    };
    jb = function(a, g, b) {
        return a + (g - a) * b
    };
    kb = function(a) {
        for (var g in a) if (a.hasOwnProperty(g)) return ! 0;
        return ! 1
    };
    lb = function(a) {
        for (var g in a) a.hasOwnProperty(g) && delete a[g]
    };
    var v = +new Date;
    mb = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - v
    };
    var r = !1,
    y = r = !1,
    C = !1;
    "undefined" !== typeof window && (r = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), r = !r && /safari/i.test(navigator.userAgent), y = /(iphone|ipod|ipad)/i.test(navigator.userAgent), C = window.c2ejecta);
    var A = !r && !C && !y && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    d.prototype.contains = function(a) {
        return this.sg() ? !1 : A ? this.Xf.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    d.prototype.add = function(a) {
        if (A) this.Xf.has(a) || (this.Xf.add(a), this.$g = !1);
        else {
            var g = a.toString(),
            b = this.items;
            b ? b.hasOwnProperty(g) || (b[g] = a, this.Hk++, this.$g = !1) : (this.items = {},
            this.items[g] = a, this.Hk = 1, this.$g = !1)
        }
    };
    d.prototype.remove = function(a) {
        if (!this.sg()) if (A) this.Xf.has(a) && (this.Xf["delete"](a), this.$g = !1);
        else if (this.items) {
            a = a.toString();
            var g = this.items;
            g.hasOwnProperty(a) && (delete g[a], this.Hk--, this.$g = !1)
        }
    };
    d.prototype.clear = function() {
        this.sg() || (A ? this.Xf.clear() : (this.items = null, this.Hk = 0), J(this.Pj), this.$g = !0)
    };
    d.prototype.sg = function() {
        return 0 === this.count()
    };
    d.prototype.count = function() {
        return A ? this.Xf.size: this.Hk
    };
    var E = null,
    F = 0;
    d.prototype.NB = function() {
        if (!this.$g) {
            if (A) J(this.Pj),
            E = this.Pj,
            F = 0,
            this.Xf.forEach(f),
            E = null,
            F = 0;
            else {
                var a = this.Pj;
                J(a);
                var g, b = 0,
                c = this.items;
                if (c) for (g in c) c.hasOwnProperty(g) && (a[b++] = c[g])
            }
            this.$g = !0
        }
    };
    d.prototype.tf = function() {
        this.NB();
        return this.Pj
    };
    ea = d;
    new ea;
    tb = function(a, g) {
        A ? ub(a, g.Xf) : vb(a, g.tf())
    };
    ub = function(a, g) {
        var b, c, e, k;
        c = b = 0;
        for (e = a.length; b < e; ++b) k = a[b],
        g.has(k) || (a[c++] = k);
        Ha(a, c)
    };
    vb = function(a, g) {
        var b, c, e, k;
        c = b = 0;
        for (e = a.length; b < e; ++b) k = a[b],
        -1 === Ma(g, k) && (a[c++] = k);
        Ha(a, c)
    };
    h.prototype.add = function(a) {
        this.y = a - this.D;
        this.Yn = this.Ga + this.y;
        this.D = this.Yn - this.Ga - this.y;
        this.Ga = this.Yn
    };
    h.prototype.reset = function() {
        this.Ga = this.Yn = this.y = this.D = 0
    };
    zb = h;
    Ab = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    e.prototype.ml = function(a) {
        this.qu = a;
        this.xe = a.length / 2;
        this.ec.length = a.length;
        this.$l = this.am = -1;
        this.Zr = 0
    };
    e.prototype.ii = function() {
        return ! this.qu.length
    };
    e.prototype.mb = function() {
        for (var a = this.ec,
        g = a[0], b = g, c = a[1], e = c, k, d, l = 1, m = this.xe; l < m; ++l) d = 2 * l,
        k = a[d],
        d = a[d + 1],
        k < g && (g = k),
        k > b && (b = k),
        d < c && (c = d),
        d > e && (e = d);
        this.Ul = g;
        this.Vl = b;
        this.Wl = c;
        this.Tl = e
    };
    e.prototype.ll = function(a, g, b) {
        this.ec.length = 8;
        this.xe = 4;
        var c = this.ec;
        c[0] = a.left - g;
        c[1] = a.top - b;
        c[2] = a.right - g;
        c[3] = a.top - b;
        c[4] = a.right - g;
        c[5] = a.bottom - b;
        c[6] = a.left - g;
        c[7] = a.bottom - b;
        this.am = a.right - a.left;
        this.$l = a.bottom - a.top;
        this.mb()
    };
    e.prototype.Jj = function(a, g, b, c, e) {
        this.ec.length = 8;
        this.xe = 4;
        var k = this.ec;
        k[0] = a.Sb - g;
        k[1] = a.Tb - b;
        k[2] = a.Hc - g;
        k[3] = a.Ic - b;
        k[4] = a.sc - g;
        k[5] = a.tc - b;
        k[6] = a.qc - g;
        k[7] = a.rc - b;
        this.am = c;
        this.$l = e;
        this.mb()
    };
    e.prototype.Gu = function(a) {
        this.xe = a.xe;
        Ja(this.ec, a.ec);
        this.Ul = a.Ul;
        this.Wl - a.Wl;
        this.Vl = a.Vl;
        this.Tl = a.Tl
    };
    e.prototype.Ph = function(a, g, b) {
        if (this.am !== a || this.$l !== g || this.Zr !== b) {
            this.am = a;
            this.$l = g;
            this.Zr = b;
            var c, e, k, d, l, m = 0,
            p = 1,
            f = this.qu,
            n = this.ec;
            0 !== b && (m = Math.sin(b), p = Math.cos(b));
            b = 0;
            for (k = this.xe; b < k; b++) c = 2 * b,
            e = c + 1,
            d = f[c] * a,
            l = f[e] * g,
            n[c] = d * p - l * m,
            n[e] = l * p + d * m;
            this.mb()
        }
    };
    e.prototype.kd = function(a, g) {
        var b = this.ec;
        if (a === b[0] && g === b[1]) return ! 0;
        var c, e, k, d = this.xe,
        l = this.Ul - 110,
        m = this.Wl - 101,
        p = this.Vl + 131,
        f = this.Tl + 120,
        n, r, q = 0,
        h = 0;
        for (c = 0; c < d; c++) e = 2 * c,
        k = (c + 1) % d * 2,
        n = b[e],
        e = b[e + 1],
        r = b[k],
        k = b[k + 1],
        ya(l, m, a, g, n, e, r, k) && q++,
        ya(p, f, a, g, n, e, r, k) && h++;
        return 1 === q % 2 || 1 === h % 2
    };
    e.prototype.xk = function(a, g, b) {
        var c = a.ec,
        e = this.ec;
        if (this.kd(c[0] + g, c[1] + b) || a.kd(e[0] - g, e[1] - b)) return ! 0;
        var k, d, l, m, p, f, n, r, q, h, y, t;
        k = 0;
        for (m = this.xe; k < m; k++) for (d = 2 * k, l = (k + 1) % m * 2, r = e[d], d = e[d + 1], q = e[l], h = e[l + 1], l = 0, n = a.xe; l < n; l++) if (p = 2 * l, f = (l + 1) % n * 2, y = c[p] + g, p = c[p + 1] + b, t = c[f] + g, f = c[f + 1] + b, ya(r, d, q, h, y, p, t, f)) return ! 0;
        return ! 1
    };
    Db = e;
    g.prototype.jh = function(a, g, b) {
        var c;
        c = this.cells[a];
        return c ? (c = c[g]) ? c: b ? (c = p(this, a, g), this.cells[a][g] = c) : null: b ? (c = p(this, a, g), this.cells[a] = {},
        this.cells[a][g] = c) : null
    };
    g.prototype.Dd = function(a) {
        return va(a / this.Mo)
    };
    g.prototype.Ed = function(a) {
        return va(a / this.Lo)
    };
    g.prototype.update = function(a, g, b) {
        var c, e, k, d, l;
        if (g) for (c = g.left, e = g.right; c <= e; ++c) for (k = g.top, d = g.bottom; k <= d; ++k) if (!b || !b.kd(c, k)) if (l = this.jh(c, k, !1)) l.remove(a),
        l.sg() && (l.Pc.clear(), 1E3 > B.length && B.push(l), this.cells[c][k] = null);
        if (b) for (c = b.left, e = b.right; c <= e; ++c) for (k = b.top, d = b.bottom; k <= d; ++k) g && g.kd(c, k) || this.jh(c, k, !0).xp(a)
    };
    g.prototype.Hn = function(a, g) {
        var b, c, e, k, d, l;
        b = this.Dd(a.left);
        e = this.Ed(a.top);
        c = this.Dd(a.right);
        for (d = this.Ed(a.bottom); b <= c; ++b) for (k = e; k <= d; ++k)(l = this.jh(b, k, !1)) && l.dump(g)
    };
    Eb = g;
    l.prototype.jh = function(a, g, b) {
        var c;
        c = this.cells[a];
        return c ? (c = c[g]) ? c: b ? (c = m(this, a, g), this.cells[a][g] = c) : null: b ? (c = m(this, a, g), this.cells[a] = {},
        this.cells[a][g] = c) : null
    };
    l.prototype.Dd = function(a) {
        return va(a / this.Mo)
    };
    l.prototype.Ed = function(a) {
        return va(a / this.Lo)
    };
    l.prototype.update = function(a, g, b) {
        var c, e, k, d, l;
        if (g) for (c = g.left, e = g.right; c <= e; ++c) for (k = g.top, d = g.bottom; k <= d; ++k) if (!b || !b.kd(c, k)) if (l = this.jh(c, k, !1)) l.remove(a),
        l.sg() && (l.reset(), 1E3 > z.length && z.push(l), this.cells[c][k] = null);
        if (b) for (c = b.left, e = b.right; c <= e; ++c) for (k = b.top, d = b.bottom; k <= d; ++k) g && g.kd(c, k) || this.jh(c, k, !0).xp(a)
    };
    l.prototype.Hn = function(a, g, b, c, e) {
        var k, d;
        a = this.Dd(a);
        g = this.Ed(g);
        b = this.Dd(b);
        for (k = this.Ed(c); a <= b; ++a) for (c = g; c <= k; ++c)(d = this.jh(a, c, !1)) && d.dump(e)
    };
    l.prototype.vA = function(a) {
        var g, b, c, e, k;
        g = a.left;
        c = a.top;
        b = a.right;
        for (e = a.bottom; g <= b; ++g) for (a = c; a <= e; ++a) if (k = this.jh(g, a, !1)) k.ij = !1
    };
    Fb = l;
    var B = [];
    k.prototype.sg = function() {
        return this.Pc.sg()
    };
    k.prototype.xp = function(a) {
        this.Pc.add(a)
    };
    k.prototype.remove = function(a) {
        this.Pc.remove(a)
    };
    k.prototype.dump = function(a) {
        La(a, this.Pc.tf())
    };
    da = k;
    var z = [];
    n.prototype.sg = function() {
        if (!this.Pc.length) return ! 0;
        if (this.Pc.length > this.Rf.count()) return ! 1;
        this.ep();
        return ! 0
    };
    n.prototype.xp = function(a) {
        this.Rf.contains(a) ? (this.Rf.remove(a), this.Rf.sg() && (this.Zj = !1)) : this.Pc.length ? (this.Pc[this.Pc.length - 1].Nf() > a.Nf() && (this.ij = !1), this.Pc.push(a)) : (this.Pc.push(a), this.ij = !0)
    };
    n.prototype.remove = function(a) {
        this.Rf.add(a);
        this.Zj = !0;
        30 <= this.Rf.count() && this.ep()
    };
    n.prototype.ep = function() {
        this.Zj && (this.Rf.count() === this.Pc.length ? this.reset() : (tb(this.Pc, this.Rf), this.Rf.clear(), this.Zj = !1))
    };
    n.prototype.Fy = function() {
        this.ij || (this.Pc.sort(q), this.ij = !0)
    };
    n.prototype.reset = function() {
        J(this.Pc);
        this.ij = !0;
        this.Rf.clear();
        this.Zj = !1
    };
    n.prototype.dump = function(a) {
        this.ep();
        this.Fy();
        this.Pc.length && a.push(this.Pc)
    };
    fa = n;
    var w = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    Gb = function(a) {
        return 0 >= a || 11 <= a ? "source-over": w[a - 1]
    };
    Lb = function(a, g, b) {
        if (b) switch (a.qd = b.ONE, a.md = b.ONE_MINUS_SRC_ALPHA, g) {
        case 1:
            a.qd = b.ONE;
            a.md = b.ONE;
            break;
        case 3:
            a.qd = b.ONE;
            a.md = b.ZERO;
            break;
        case 4:
            a.qd = b.ONE_MINUS_DST_ALPHA;
            a.md = b.ONE;
            break;
        case 5:
            a.qd = b.DST_ALPHA;
            a.md = b.ZERO;
            break;
        case 6:
            a.qd = b.ZERO;
            a.md = b.SRC_ALPHA;
            break;
        case 7:
            a.qd = b.ONE_MINUS_DST_ALPHA;
            a.md = b.ZERO;
            break;
        case 8:
            a.qd = b.ZERO;
            a.md = b.ONE_MINUS_SRC_ALPHA;
            break;
        case 9:
            a.qd = b.DST_ALPHA;
            a.md = b.ONE_MINUS_SRC_ALPHA;
            break;
        case 10:
            a.qd = b.ONE_MINUS_DST_ALPHA,
            a.md = b.SRC_ALPHA
        }
    };
    Pb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    Vb = function(a, g) {
        return "string" !== typeof a || "string" !== typeof g || a.length !== g.length ? !1 : a === g ? !0 : a.toLowerCase() === g.toLowerCase()
    };
    Wb = function(a) {
        a = a.target;
        return ! a || a === document || a === window || document && document.body && a === document.body || Vb(a.tagName, "canvas") ? !0 : !1
    }
})();
var Xc = "undefined" !== typeof Float32Array ? Float32Array: Array;
function Zc(a) {
    var c = new Xc(3);
    a && (c[0] = a[0], c[1] = a[1], c[2] = a[2]);
    return c
}
function $c(a) {
    var c = new Xc(16);
    a && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]);
    return c
}
function ad(a, c) {
    c[0] = a[0];
    c[1] = a[1];
    c[2] = a[2];
    c[3] = a[3];
    c[4] = a[4];
    c[5] = a[5];
    c[6] = a[6];
    c[7] = a[7];
    c[8] = a[8];
    c[9] = a[9];
    c[10] = a[10];
    c[11] = a[11];
    c[12] = a[12];
    c[13] = a[13];
    c[14] = a[14];
    c[15] = a[15]
}
function bd(a, c) {
    var b = c[0],
    d = c[1];
    c = c[2];
    a[0] *= b;
    a[1] *= b;
    a[2] *= b;
    a[3] *= b;
    a[4] *= d;
    a[5] *= d;
    a[6] *= d;
    a[7] *= d;
    a[8] *= c;
    a[9] *= c;
    a[10] *= c;
    a[11] *= c
}
function cd(a, c, b, d) {
    d || (d = $c());
    var f, h, e, g, l, p, k, m, n = a[0],
    q = a[1];
    a = a[2];
    h = b[0];
    e = b[1];
    f = b[2];
    b = c[1];
    p = c[2];
    n === c[0] && q === b && a === p ? (a = d, a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1) : (b = n - c[0], p = q - c[1], k = a - c[2], m = 1 / Math.sqrt(b * b + p * p + k * k), b *= m, p *= m, k *= m, c = e * k - f * p, f = f * b - h * k, h = h * p - e * b, (m = Math.sqrt(c * c + f * f + h * h)) ? (m = 1 / m, c *= m, f *= m, h *= m) : h = f = c = 0, e = p * h - k * f, g = k * c - b * h, l = b * f - p * c, (m = Math.sqrt(e * e + g * g + l * l)) ? (m = 1 / m, e *= m, g *= m, l *= m) : l = g = e = 0, d[0] = c, d[1] = e, d[2] = b, d[3] = 0, d[4] = f, d[5] = g, d[6] = p, d[7] = 0, d[8] = h, d[9] = l, d[10] = k, d[11] = 0, d[12] = -(c * n + f * q + h * a), d[13] = -(e * n + g * q + l * a), d[14] = -(b * n + p * q + k * a), d[15] = 1)
} (function() {
    function a(a, b, c) {
        this.nh = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Db = !!c;
        this.Um = this.yk = !1;
        this.So = 0;
        this.so = 1;
        this.hr = 1E3;
        this.UB = (this.hr - this.so) / 32768;
        this.Jo = Zc([0, 0, 100]);
        this.kt = Zc([0, 0, 0]);
        this.cv = Zc([0, 1, 0]);
        this.El = Zc([1, 1, 1]);
        this.qs = !0;
        this.nn = $c();
        this.ve = $c();
        this.Op = $c();
        this.Ro = $c();
        this.ka = a;
        this.version = 0 === this.ka.getParameter(this.ka.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.Qs()
    }
    function c(a, b, c) {
        this.ka = a;
        this.nl = b;
        this.name = c;
        this.Qe = a.getAttribLocation(b, "aPos");
        this.rh = a.getAttribLocation(b, "aTex");
        this.it = a.getUniformLocation(b, "matP");
        this.jn = a.getUniformLocation(b, "matMV");
        this.tj = a.getUniformLocation(b, "opacity");
        this.Wp = a.getUniformLocation(b, "colorFill");
        this.jt = a.getUniformLocation(b, "samplerFront");
        this.Ok = a.getUniformLocation(b, "samplerBack");
        this.si = a.getUniformLocation(b, "destStart");
        this.ri = a.getUniformLocation(b, "destEnd");
        this.Qk = a.getUniformLocation(b, "seconds");
        this.Yp = a.getUniformLocation(b, "pixelWidth");
        this.Xp = a.getUniformLocation(b, "pixelHeight");
        this.Nk = a.getUniformLocation(b, "layerScale");
        this.Mk = a.getUniformLocation(b, "layerAngle");
        this.Rk = a.getUniformLocation(b, "viewOrigin");
        this.Pk = a.getUniformLocation(b, "scrollPos");
        this.Wz = !!(this.Yp || this.Xp || this.Qk || this.Ok || this.si || this.ri || this.Nk || this.Mk || this.Rk || this.Pk);
        this.ut = this.xt = -999;
        this.mn = 1;
        this.ot = this.nt = 0;
        this.qt = this.mt = this.lt = 1;
        this.At = this.zt = this.yt = this.Ct = this.Bt = this.pt = 0;
        this.Mp = [];
        this.tt = $c();
        this.tj && a.uniform1f(this.tj, 1);
        this.Wp && a.uniform4f(this.Wp, 1, 1, 1, 1);
        this.jt && a.uniform1i(this.jt, 0);
        this.Ok && a.uniform1i(this.Ok, 1);
        this.si && a.uniform2f(this.si, 0, 0);
        this.ri && a.uniform2f(this.ri, 1, 1);
        this.Nk && a.uniform1f(this.Nk, 1);
        this.Mk && a.uniform1f(this.Mk, 0);
        this.Rk && a.uniform2f(this.Rk, 0, 0);
        this.Pk && a.uniform2f(this.Pk, 0, 0);
        this.Qk && a.uniform1f(this.Qk, 0);
        this.di = !1
    }
    function b(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
    }
    function d(a, b) {
        this.type = a;
        this.ga = b;
        this.ka = b.ka;
        this.Of = this.Bd = this.$t = 0;
        this.Qa = this.Ye = null;
        this.Iu = []
    }
    var f = $c();
    a.prototype.Qs = function() {
        var a = this.ka,
        b;
        this.dt = 1;
        this.li = this.ki = null;
        this.nm = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.STENCIL_TEST);
        a.disable(a.DITHER);
        this.Db ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
        this.et = a.ONE;
        this.ct = a.ONE_MINUS_SRC_ALPHA;
        this.po = new Float32Array(8E3 * (this.Db ? 3 : 2));
        this.$n = new Float32Array(16E3);
        this.lu = new Float32Array(32E3);
        this.pq = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.pq);
        a.bufferData(a.ARRAY_BUFFER, this.lu.byteLength, a.DYNAMIC_DRAW);
        this.Cl = Array(4);
        this.sl = Array(4);
        for (b = 0; 4 > b; b++) this.Cl[b] = a.createBuffer(),
        a.bindBuffer(a.ARRAY_BUFFER, this.Cl[b]),
        a.bufferData(a.ARRAY_BUFFER, this.po.byteLength, a.DYNAMIC_DRAW),
        this.sl[b] = a.createBuffer(),
        a.bindBuffer(a.ARRAY_BUFFER, this.sl[b]),
        a.bufferData(a.ARRAY_BUFFER, this.$n.byteLength, a.DYNAMIC_DRAW);
        this.jg = 0;
        this.Zz = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Zz);
        for (var c = new Uint16Array(12E3), e = b = 0; 12E3 > b;) c[b++] = e,
        c[b++] = e + 1,
        c[b++] = e + 2,
        c[b++] = e,
        c[b++] = e + 2,
        c[b++] = e + 3,
        e += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
        this.qq = this.Mj = this.Mg = 0;
        this.Rb = [];
        b = this.Db ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}": "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        c = this.ek({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        },
        b, "<default>");
        this.Rb.push(c);
        c = this.ek({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        },
        "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Rb.push(c);
        c = this.ek({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        },
        b, "<earlyz>");
        this.Rb.push(c);
        c = this.ek({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        },
        b, "<fill>");
        this.Rb.push(c);
        for (var d in dd) dd.hasOwnProperty(d) && this.Rb.push(this.ek(dd[d], b, d));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.Zg = [];
        this.hg = 0;
        this.nd = !1;
        this.js = this.Jk = -1;
        this.Vi = null;
        this.cp = a.createFramebuffer();
        this.tm = this.In = null;
        this.Tr = !1;
        this.Db && (this.tm = a.createRenderbuffer());
        this.Bh = Zc([0, 0, 0]);
        this.Et = a.getParameter(a.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.Et && (this.Et = 2048);
        this.Pd(0)
    };
    c.prototype.Zq = function(a) {
        b(this.tt, a) || (ad(a, this.tt), this.ka.uniformMatrix4fv(this.jn, !1, a))
    };
    a.prototype.ek = function(a, b, e) {
        var k = this.ka,
        d = k.createShader(k.FRAGMENT_SHADER);
        k.shaderSource(d, a.src);
        k.compileShader(d);
        if (!k.getShaderParameter(d, k.COMPILE_STATUS)) throw a = k.getShaderInfoLog(d),
        k.deleteShader(d),
        Error("error compiling fragment shader: " + a);
        var f = k.createShader(k.VERTEX_SHADER);
        k.shaderSource(f, b);
        k.compileShader(f);
        if (!k.getShaderParameter(f, k.COMPILE_STATUS)) throw a = k.getShaderInfoLog(f),
        k.deleteShader(d),
        k.deleteShader(f),
        Error("error compiling vertex shader: " + a);
        b = k.createProgram();
        k.attachShader(b, d);
        k.attachShader(b, f);
        k.linkProgram(b);
        if (!k.getProgramParameter(b, k.LINK_STATUS)) throw a = k.getProgramInfoLog(b),
        k.deleteShader(d),
        k.deleteShader(f),
        k.deleteProgram(b),
        Error("error linking shader program: " + a);
        k.useProgram(b);
        k.deleteShader(d);
        k.deleteShader(f);
        d = new c(k, b, e);
        d.$o = a.$o || 0;
        d.bp = a.bp || 0;
        d.gs = !!a.gs;
        d.mf = !!a.mf;
        d.Rr = !!a.Rr;
        d.Sa = a.Sa || [];
        a = 0;
        for (f = d.Sa.length; a < f; a++) d.Sa[a][1] = k.getUniformLocation(b, d.Sa[a][0]),
        d.Mp.push(0),
        k.uniform1f(d.Sa[a][1], 0);
        return d
    };
    a.prototype.op = function(a) {
        var b, c;
        b = 0;
        for (c = this.Rb.length; b < c; b++) if (this.Rb[b].name === a) return b;
        return - 1
    };
    a.prototype.pu = function(a, b, c) {
        var e = this.ve,
        d = this.nn,
        f = [0, 0, 0, 0, 0, 0, 0, 0];
        f[0] = e[0] * a + e[4] * b + e[12];
        f[1] = e[1] * a + e[5] * b + e[13];
        f[2] = e[2] * a + e[6] * b + e[14];
        f[3] = e[3] * a + e[7] * b + e[15];
        f[4] = d[0] * f[0] + d[4] * f[1] + d[8] * f[2] + d[12] * f[3];
        f[5] = d[1] * f[0] + d[5] * f[1] + d[9] * f[2] + d[13] * f[3];
        f[6] = d[2] * f[0] + d[6] * f[1] + d[10] * f[2] + d[14] * f[3];
        f[7] = -f[2];
        0 !== f[7] && (f[7] = 1 / f[7], f[4] *= f[7], f[5] *= f[7], f[6] *= f[7], c[0] = (.5 * f[4] + .5) * this.width, c[1] = (.5 * f[5] + .5) * this.height)
    };
    a.prototype.Fg = function(a, b, c) {
        if (this.width !== a || this.height !== b || c) {
            this.Vh();
            c = this.ka;
            this.width = a;
            this.height = b;
            c.viewport(0, 0, a, b);
            cd(this.Jo, this.kt, this.cv, this.ve);
            if (this.Db) {
                var e = -a / 2;
                a = a / 2;
                var d = b / 2;
                b = -b / 2;
                var f = this.so,
                q = this.hr,
                h = this.nn;
                h || (h = $c());
                var u = a - e,
                v = b - d,
                r = q - f;
                h[0] = 2 / u;
                h[1] = 0;
                h[2] = 0;
                h[3] = 0;
                h[4] = 0;
                h[5] = 2 / v;
                h[6] = 0;
                h[7] = 0;
                h[8] = 0;
                h[9] = 0;
                h[10] = -2 / r;
                h[11] = 0;
                h[12] = -(e + a) / u;
                h[13] = -(b + d) / v;
                h[14] = -(q + f) / r;
                h[15] = 1;
                this.El[0] = 1;
                this.El[1] = 1
            } else b = a / b,
            e = this.so,
            a = this.hr,
            h = this.nn,
            q = e * Math.tan(45 * Math.PI / 360),
            b *= q,
            d = -b,
            f = -q,
            h || (h = $c()),
            u = b - d,
            v = q - f,
            r = a - e,
            h[0] = 2 * e / u,
            h[1] = 0,
            h[2] = 0,
            h[3] = 0,
            h[4] = 0,
            h[5] = 2 * e / v,
            h[6] = 0,
            h[7] = 0,
            h[8] = (b + d) / u,
            h[9] = (q + f) / v,
            h[10] = -(a + e) / r,
            h[11] = -1,
            h[12] = 0,
            h[13] = 0,
            h[14] = -(a * e * 2) / r,
            h[15] = 0,
            e = [0, 0],
            a = [0, 0],
            this.pu(0, 0, e),
            this.pu(1, 1, a),
            this.El[0] = 1 / (a[0] - e[0]),
            this.El[1] = -1 / (a[1] - e[1]);
            e = 0;
            for (a = this.Rb.length; e < a; e++) d = this.Rb[e],
            d.di = !1,
            d.it && (c.useProgram(d.nl), c.uniformMatrix4fv(d.it, !1, this.nn));
            c.useProgram(this.Rb[this.Jk].nl);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE1);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE0);
            this.li = this.ki = null;
            this.tm && (c.bindFramebuffer(c.FRAMEBUFFER, this.cp), c.bindRenderbuffer(c.RENDERBUFFER, this.tm), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, this.width, this.height), this.Tr || (c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, this.tm), this.Tr = !0), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.In = null)
        }
    };
    a.prototype.Wf = function() {
        cd(this.Jo, this.kt, this.cv, this.ve);
        bd(this.ve, this.El)
    };
    a.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.Bh[0] = a;
            this.Bh[1] = b;
            this.Bh[2] = 0;
            var c = this.ve,
            e = this.Bh,
            d = e[0],
            f = e[1],
            e = e[2];
            c[12] = c[0] * d + c[4] * f + c[8] * e + c[12];
            c[13] = c[1] * d + c[5] * f + c[9] * e + c[13];
            c[14] = c[2] * d + c[6] * f + c[10] * e + c[14];
            c[15] = c[3] * d + c[7] * f + c[11] * e + c[15]
        }
    };
    a.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.Bh[0] = a,
        this.Bh[1] = b,
        this.Bh[2] = 1,
        bd(this.ve, this.Bh)
    };
    a.prototype.Bq = function(a) {
        if (0 !== a) {
            var b = this.ve,
            c, e = Math.sin(a);
            a = Math.cos(a);
            var d = b[0],
            f = b[1],
            h = b[2],
            t = b[3],
            u = b[4],
            v = b[5],
            r = b[6],
            y = b[7];
            c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
            c[0] = d * a + u * e;
            c[1] = f * a + v * e;
            c[2] = h * a + r * e;
            c[3] = t * a + y * e;
            c[4] = d * -e + u * a;
            c[5] = f * -e + v * a;
            c[6] = h * -e + r * a;
            c[7] = t * -e + y * a
        }
    };
    a.prototype.sf = function() {
        if (!b(this.Op, this.ve)) {
            var a = this.ie();
            a.type = 5;
            a.Qa ? ad(this.ve, a.Qa) : a.Qa = $c(this.ve);
            ad(this.ve, this.Op);
            this.nd = !1
        }
    };
    a.prototype.Qn = function(a) {
        this.Db && (32760 < a && (a = 32760), this.So = this.Jo[2] - this.so - a * this.UB)
    };
    d.prototype.ky = function() {
        var a = this.ka,
        b = this.ga;
        0 !== this.Bd ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.cp), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.Um = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.Um = !1)
    };
    d.prototype.qy = function() {
        this.ka.bindTexture(this.ka.TEXTURE_2D, this.Ye)
    };
    d.prototype.ry = function() {
        var a = this.ka;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.Ye);
        a.activeTexture(a.TEXTURE0)
    };
    d.prototype.my = function() {
        var a = this.$t,
        b = this.ga;
        b.nm = a;
        b = b.Vi;
        b.tj && b.mn !== a && (b.mn = a, this.ka.uniform1f(b.tj, a))
    };
    d.prototype.fy = function() {
        this.ka.drawElements(this.ka.TRIANGLES, this.Of, this.ka.UNSIGNED_SHORT, this.Bd)
    };
    d.prototype.hy = function() {
        this.ka.blendFunc(this.Bd, this.Of)
    };
    d.prototype.uy = function() {
        var a, b, c, e = this.ga.Rb,
        d = this.ga.js;
        a = 0;
        for (b = e.length; a < b; a++) c = e[a],
        a === d && c.jn ? (c.Zq(this.Qa), c.di = !0) : c.di = !1;
        ad(this.Qa, this.ga.Ro)
    };
    d.prototype.gy = function() {
        var a = this.ka,
        b = this.ga;
        this.Ye ? (b.li === this.Ye && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.li = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.cp), b.Um || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Ye, 0)) : (b.Db || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    d.prototype.ay = function() {
        var a = this.ka,
        b = this.Bd;
        0 === b ? (a.clearColor(this.Qa[0], this.Qa[1], this.Qa[2], this.Qa[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.Qa[0], this.Qa[1], this.Qa[2], this.Qa[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
    };
    d.prototype.jy = function() {
        var a = this.ka;
        0 !== this.Bd ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
    };
    d.prototype.ey = function() {
        var a = this.ka,
        b = this.ga;
        b.Db && a.disable(a.DEPTH_TEST);
        var c = b.Rb[1];
        a.useProgram(c.nl); ! c.di && c.jn && (c.Zq(b.Ro), c.di = !0);
        a.enableVertexAttribArray(c.Qe);
        a.bindBuffer(a.ARRAY_BUFFER, b.pq);
        a.vertexAttribPointer(c.Qe, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.Bd / 4, this.Of);
        c = b.Vi;
        a.useProgram(c.nl);
        0 <= c.Qe && (a.enableVertexAttribArray(c.Qe), a.bindBuffer(a.ARRAY_BUFFER, b.Cl[b.jg]), a.vertexAttribPointer(c.Qe, b.Db ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.rh && (a.enableVertexAttribArray(c.rh), a.bindBuffer(a.ARRAY_BUFFER, b.sl[b.jg]), a.vertexAttribPointer(c.rh, 2, a.FLOAT, !1, 0, 0));
        b.Db && a.enable(a.DEPTH_TEST)
    };
    d.prototype.ny = function() {
        var a = this.ka,
        b = this.ga,
        c = b.Rb[this.Bd];
        b.js = this.Bd;
        b.Vi = c;
        a.useProgram(c.nl); ! c.di && c.jn && (c.Zq(b.Ro), c.di = !0);
        c.tj && c.mn !== b.nm && (c.mn = b.nm, a.uniform1f(c.tj, b.nm));
        0 <= c.Qe && (a.enableVertexAttribArray(c.Qe), a.bindBuffer(a.ARRAY_BUFFER, b.Cl[b.jg]), a.vertexAttribPointer(c.Qe, b.Db ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.rh && (a.enableVertexAttribArray(c.rh), a.bindBuffer(a.ARRAY_BUFFER, b.sl[b.jg]), a.vertexAttribPointer(c.rh, 2, a.FLOAT, !1, 0, 0))
    };
    d.prototype.iy = function() {
        var a = this.Qa;
        this.ka.uniform4f(this.ga.Vi.Wp, a[0], a[1], a[2], a[3])
    };
    d.prototype.oy = function() {
        var a, b, c = this.ga.Vi,
        e = this.ka;
        a = this.Qa;
        c.Ok && this.ga.li !== this.Ye && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, this.Ye), this.ga.li = this.Ye, e.activeTexture(e.TEXTURE0));
        var d = a[0];
        c.Yp && d !== c.xt && (c.xt = d, e.uniform1f(c.Yp, d));
        d = a[1];
        c.Xp && d !== c.ut && (c.ut = d, e.uniform1f(c.Xp, d));
        d = a[2];
        b = a[3]; ! c.si || d === c.nt && b === c.ot || (c.nt = d, c.ot = b, e.uniform2f(c.si, d, b));
        d = a[4];
        b = a[5]; ! c.ri || d === c.lt && b === c.mt || (c.lt = d, c.mt = b, e.uniform2f(c.ri, d, b));
        d = a[6];
        c.Nk && d !== c.qt && (c.qt = d, e.uniform1f(c.Nk, d));
        d = a[7];
        c.Mk && d !== c.pt && (c.pt = d, e.uniform1f(c.Mk, d));
        d = a[8];
        b = a[9]; ! c.Rk || d === c.Bt && b === c.Ct || (c.Bt = d, c.Ct = b, e.uniform2f(c.Rk, d, b));
        d = a[10];
        b = a[11]; ! c.Pk || d === c.yt && b === c.zt || (c.yt = d, c.zt = b, e.uniform2f(c.Pk, d, b));
        d = a[12];
        c.Qk && d !== c.At && (c.At = d, e.uniform1f(c.Qk, d));
        if (c.Sa.length) for (a = 0, b = c.Sa.length; a < b; a++) d = this.Iu[a],
        d !== c.Mp[a] && (c.Mp[a] = d, e.uniform1f(c.Sa[a][1], d))
    };
    a.prototype.ie = function() {
        this.hg === this.Zg.length && this.Zg.push(new d(0, this));
        return this.Zg[this.hg++]
    };
    a.prototype.Vh = function() {
        if (0 !== this.hg && !this.ka.isContextLost()) {
            var a = this.ka;
            0 < this.qq && (a.bindBuffer(a.ARRAY_BUFFER, this.pq), a.bufferSubData(a.ARRAY_BUFFER, 0, this.lu.subarray(0, this.qq)), b && 0 <= b.Qe && "<point>" === b.name && a.vertexAttribPointer(b.Qe, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.Mg) {
                var b = this.Vi;
                a.bindBuffer(a.ARRAY_BUFFER, this.Cl[this.jg]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.po.subarray(0, this.Mg));
                b && 0 <= b.Qe && "<point>" !== b.name && a.vertexAttribPointer(b.Qe, this.Db ? 3 : 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.sl[this.jg]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.$n.subarray(0, this.Mj));
                b && 0 <= b.rh && "<point>" !== b.name && a.vertexAttribPointer(b.rh, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0,
            b = this.hg; a < b; a++) switch (c = this.Zg[a], c.type) {
            case 1:
                c.fy();
                break;
            case 2:
                c.qy();
                break;
            case 3:
                c.my();
                break;
            case 4:
                c.hy();
                break;
            case 5:
                c.uy();
                break;
            case 6:
                c.gy();
                break;
            case 7:
                c.ay();
                break;
            case 8:
                c.ey();
                break;
            case 9:
                c.ny();
                break;
            case 10:
                c.oy();
                break;
            case 11:
                c.ry();
                break;
            case 12:
                c.iy();
                break;
            case 13:
                c.jy();
                break;
            case 14:
                c.ky()
            }
            this.qq = this.Mj = this.Mg = this.hg = 0;
            this.Um = this.nd = !1;
            this.jg++;
            4 <= this.jg && (this.jg = 0)
        }
    };
    a.prototype.Ci = function(a) {
        if (a !== this.dt && !this.yk) {
            var b = this.ie();
            b.type = 3;
            this.dt = b.$t = a;
            this.nd = !1
        }
    };
    a.prototype.ke = function(a) {
        if (a !== this.ki) {
            var b = this.ie();
            b.type = 2;
            this.ki = b.Ye = a;
            this.nd = !1
        }
    };
    a.prototype.zh = function(a, b) {
        if ((a !== this.et || b !== this.ct) && !this.yk) {
            var c = this.ie();
            c.type = 4;
            c.Bd = a;
            c.Of = b;
            this.et = a;
            this.ct = b;
            this.nd = !1
        }
    };
    a.prototype.zu = function() {
        this.zh(this.ka.ONE, this.ka.ONE_MINUS_SRC_ALPHA)
    };
    a.prototype.dl = function(a, b, c, e, d, f, h, t) {
        15992 <= this.Mg && this.Vh();
        var u = this.Mg,
        v = this.Mj,
        r = this.po,
        y = this.$n,
        C = this.So;
        if (this.nd) this.Zg[this.hg - 1].Of += 6;
        else {
            var A = this.ie();
            A.type = 1;
            A.Bd = this.Db ? u: u / 2 * 3;
            A.Of = 6;
            this.nd = !0
        }
        this.Db ? (r[u++] = a, r[u++] = b, r[u++] = C, r[u++] = c, r[u++] = e, r[u++] = C, r[u++] = d, r[u++] = f, r[u++] = C, r[u++] = h, r[u++] = t, r[u++] = C) : (r[u++] = a, r[u++] = b, r[u++] = c, r[u++] = e, r[u++] = d, r[u++] = f, r[u++] = h, r[u++] = t);
        y[v++] = 0;
        y[v++] = 0;
        y[v++] = 1;
        y[v++] = 0;
        y[v++] = 1;
        y[v++] = 1;
        y[v++] = 0;
        y[v++] = 1;
        this.Mg = u;
        this.Mj = v
    };
    a.prototype.Uf = function(a, b, c, e, d, f, h, t, u) {
        15992 <= this.Mg && this.Vh();
        var v = this.Mg,
        r = this.Mj,
        y = this.po,
        C = this.$n,
        A = this.So;
        if (this.nd) this.Zg[this.hg - 1].Of += 6;
        else {
            var E = this.ie();
            E.type = 1;
            E.Bd = this.Db ? v: v / 2 * 3;
            E.Of = 6;
            this.nd = !0
        }
        var E = u.left,
        F = u.top,
        B = u.right;
        u = u.bottom;
        this.Db ? (y[v++] = a, y[v++] = b, y[v++] = A, y[v++] = c, y[v++] = e, y[v++] = A, y[v++] = d, y[v++] = f, y[v++] = A, y[v++] = h, y[v++] = t, y[v++] = A) : (y[v++] = a, y[v++] = b, y[v++] = c, y[v++] = e, y[v++] = d, y[v++] = f, y[v++] = h, y[v++] = t);
        C[r++] = E;
        C[r++] = F;
        C[r++] = B;
        C[r++] = F;
        C[r++] = B;
        C[r++] = u;
        C[r++] = E;
        C[r++] = u;
        this.Mg = v;
        this.Mj = r
    };
    a.prototype.Pd = function(a) {
        if (this.Jk !== a) {
            if (!this.Rb[a]) {
                if (0 === this.Jk) return;
                a = 0
            }
            var b = this.ie();
            b.type = 9;
            this.Jk = b.Bd = a;
            this.nd = !1
        }
    };
    a.prototype.bl = function(a) {
        a = this.Rb[a];
        return ! (!a.si && !a.ri)
    };
    a.prototype.tq = function(a) {
        a = this.Rb[a];
        return !! (a.si || a.ri || a.gs)
    };
    a.prototype.sq = function(a) {
        return this.Rb[a].mf
    };
    a.prototype.UA = function(a) {
        a = this.Rb[a];
        return 0 !== a.$o || 0 !== a.bp
    };
    a.prototype.Cz = function(a) {
        return this.Rb[a].$o
    };
    a.prototype.Dz = function(a) {
        return this.Rb[a].bp
    };
    a.prototype.Ez = function(a, b) {
        return this.Rb[a].Sa[b][2]
    };
    a.prototype.Fn = function(a) {
        return this.Rb[a].Rr
    };
    a.prototype.Ij = function(a, b, c, e, d, f, h, t, u, v, r, y, C, A, E) {
        var F = this.Rb[this.Jk],
        B,
        z;
        if (F.Wz || E.length) {
            B = this.ie();
            B.type = 10;
            B.Qa ? ad(this.ve, B.Qa) : B.Qa = $c();
            z = B.Qa;
            z[0] = b;
            z[1] = c;
            z[2] = e;
            z[3] = d;
            z[4] = f;
            z[5] = h;
            z[6] = t;
            z[7] = u;
            z[8] = v;
            z[9] = r;
            z[10] = y;
            z[11] = C;
            z[12] = A;
            F.Ok ? B.Ye = a: B.Ye = null;
            if (E.length) for (c = B.Iu, c.length = E.length, a = 0, b = E.length; a < b; a++) c[a] = E[a];
            this.nd = !1
        }
    };
    a.prototype.clear = function(a, b, c, e) {
        var d = this.ie();
        d.type = 7;
        d.Bd = 0;
        d.Qa || (d.Qa = $c());
        d.Qa[0] = a;
        d.Qa[1] = b;
        d.Qa[2] = c;
        d.Qa[3] = e;
        this.nd = !1
    };
    a.prototype.clearRect = function(a, b, c, e) {
        if (! (0 > c || 0 > e)) {
            var d = this.ie();
            d.type = 7;
            d.Bd = 1;
            d.Qa || (d.Qa = $c());
            d.Qa[0] = a;
            d.Qa[1] = b;
            d.Qa[2] = c;
            d.Qa[3] = e;
            this.nd = !1
        }
    };
    a.prototype.Cu = function(a) {
        if (this.Db && (a = !!a, this.yk !== a)) {
            var b = this.ie();
            b.type = 14;
            b.Bd = a ? 1 : 0;
            this.nd = !1;
            this.yk = a;
            this.In = null;
            this.yk ? this.Pd(2) : this.Pd(0)
        }
    };
    a.prototype.Bu = function(a) {
        if (this.Db) {
            var b = this.ie();
            b.type = 13;
            b.Bd = a ? 1 : 0;
            this.nd = !1
        }
    };
    a.prototype.zs = function() {
        ad(this.Op, f);
        this.Wf();
        this.sf();
        var a = this.width / 2,
        b = this.height / 2;
        this.dl( - a, b, a, b, a, -b, -a, -b);
        ad(f, this.ve);
        this.sf()
    };
    a.prototype.Au = function(a, b, c) {
        this.Pd(3);
        var e = this.ie();
        e.type = 12;
        e.Qa || (e.Qa = $c());
        e.Qa[0] = a;
        e.Qa[1] = b;
        e.Qa[2] = c;
        e.Qa[3] = 1;
        this.nd = !1
    };
    a.prototype.wB = function() {
        this.Pd(0)
    };
    a.prototype.hB = function() {
        this.Pd(2)
    };
    a.prototype.TA = function() {
        this.Vh();
        this.ka.flush()
    };
    var h = [],
    e = {};
    a.prototype.Sx = function() {
        J(h);
        e = {}
    };
    a.prototype.rj = function(a, b, c, d) {
        b = !!b;
        c = !!c;
        var f = a.src + "," + b + "," + c + (b ? ",undefined": ""),
        n = null;
        if ("undefined" !== typeof a.src && e.hasOwnProperty(f)) return n = e[f],
        n.Zl++,
        n;
        this.Vh();
        var q = this.ka,
        t = oa(a.width) && oa(a.height),
        n = q.createTexture();
        q.bindTexture(q.TEXTURE_2D, n);
        q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var u = q.RGBA,
        v = q.RGBA,
        r = q.UNSIGNED_BYTE;
        if (d && !this.nh) switch (d) {
        case 1:
            v = u = q.RGB;
            break;
        case 2:
            r = q.UNSIGNED_SHORT_4_4_4_4;
            break;
        case 3:
            r = q.UNSIGNED_SHORT_5_5_5_1;
            break;
        case 4:
            v = u = q.RGB,
            r = q.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !t && b) {
            d = document.createElement("canvas");
            d.width = pa(a.width);
            d.height = pa(a.height);
            var y = d.getContext("2d");
            "undefined" !== typeof y.imageSmoothingEnabled ? y.imageSmoothingEnabled = c: (y.webkitImageSmoothingEnabled = c, y.mozImageSmoothingEnabled = c, y.msImageSmoothingEnabled = c);
            y.drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
            q.texImage2D(q.TEXTURE_2D, 0, u, v, r, d)
        } else q.texImage2D(q.TEXTURE_2D, 0, u, v, r, a);
        b ? (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_S, q.REPEAT), q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_T, q.REPEAT)) : (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_S, q.CLAMP_TO_EDGE), q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_T, q.CLAMP_TO_EDGE));
        c ? (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MAG_FILTER, q.LINEAR), (t || 2 <= this.version) && this.qs ? (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, q.LINEAR_MIPMAP_LINEAR), q.generateMipmap(q.TEXTURE_2D)) : q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, q.LINEAR)) : (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MAG_FILTER, q.NEAREST), q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, q.NEAREST));
        q.bindTexture(q.TEXTURE_2D, null);
        this.ki = null;
        n.Oh = a.width;
        n.Nh = a.height;
        n.Zl = 1;
        n.Yr = f;
        h.push(n);
        return e[f] = n
    };
    a.prototype.He = function(a, b, c) {
        var e;
        this.Vh();
        var d = this.ka;
        this.nh && (e = !1);
        var f = d.createTexture();
        d.bindTexture(d.TEXTURE_2D, f);
        d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, a, b, 0, d.RGBA, e ? d.UNSIGNED_SHORT_4_4_4_4: d.UNSIGNED_BYTE, null);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, c ? d.LINEAR: d.NEAREST);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, c ? d.LINEAR: d.NEAREST);
        d.bindTexture(d.TEXTURE_2D, null);
        this.ki = null;
        f.Oh = a;
        f.Nh = b;
        h.push(f);
        return f
    };
    a.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.Zl && 1 < a.Zl ? a.Zl--:(this.Vh(), a === this.ki && (this.ka.bindTexture(this.ka.TEXTURE_2D, null), this.ki = null), a === this.li && (this.ka.activeTexture(this.ka.TEXTURE1), this.ka.bindTexture(this.ka.TEXTURE_2D, null), this.ka.activeTexture(this.ka.TEXTURE0), this.li = null), Na(h, a), "undefined" !== typeof a.Yr && delete e[a.Yr], this.ka.deleteTexture(a)))
    };
    a.prototype.Ve = function(a) {
        if (a !== this.In) {
            var b = this.ie();
            b.type = 6;
            this.In = b.Ye = a;
            this.nd = !1
        }
    };
    Xb = a
})(); (function() {
    function a(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.Zd = (this.Vm = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.bd = !!a.dc;
            this.Ws = "undefined" !== typeof window.AppMobi || this.bd;
            this.te = !!window.c2cocoonjs;
            this.Oe = !!window.c2ejecta;
            this.te && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.Oe && (document.addEventListener("pagehide",
            function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow",
            function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize",
            function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Zb = this.bd || this.te || this.Oe;
            this.Ak = /edge\//i.test(navigator.userAgent);
            this.nh = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Ak;
            this.Ys = /tizen/i.test(navigator.userAgent);
            this.Sm = /android/i.test(navigator.userAgent) && !this.Ys && !this.nh && !this.Ak;
            this.bt = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.nh && !this.Ak;
            this.nA = /ipad/i.test(navigator.userAgent);
            this.kj = this.bt || this.nA || this.Oe;
            this.Ap = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.nh && !this.Ak;
            this.Vs = /amazonwebappplatform/i.test(navigator.userAgent);
            this.eA = /firefox/i.test(navigator.userAgent);
            this.iA = /safari/i.test(navigator.userAgent) && !this.Ap && !this.nh && !this.Ak;
            this.jA = /windows/i.test(navigator.userAgent);
            this.Wm = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Zs = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.lA = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Ek = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Ip = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Hp = !!window.cr_windows10;
            this.Gp = this.Zs || this.lA || this.Ip || this.Hp;
            this.dA = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Tm = this.Sm && !this.Ap && !this.Vm && !this.eA && !this.Vs && !this.Zb;
            this.devicePixelRatio = 1;
            this.ej = this.Zd || this.Vm || this.Ws || this.te || this.Sm || this.kj || this.Ek || this.Ip || this.dA || this.Ys || this.Oe;
            this.ej || (this.ej = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Xm = !!(this.kj && this.Zd && window.webkit);
            "undefined" === typeof cr_is_preview || this.Wm || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Wm = !0);
            this.canvas = a;
            this.$r = document.getElementById("c2canvasdiv");
            this.ga = this.ka = null;
            this.pp = "(unavailable)";
            this.Db = !1;
            this.Uh = 0;
            this.Ib = null;
            this.Dm = !1;
            this.Qt = this.Rt = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return ! 1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return ! 1
            };
            this.bd && (window.c2runtime = this);
            this.Wm && (window.ondragover = function(a) {
                a.preventDefault();
                return ! 1
            },
            window.ondrop = function(a) {
                a.preventDefault();
                return ! 1
            },
            window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Tm && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.xa = this.width;
            this.wa = this.height;
            this.lm = this.width;
            this.gk = this.height;
            this.nj = window.innerWidth;
            this.mj = window.innerHeight;
            this.kb = !0;
            this.Dk = !1;
            Date.now || (Date.now = function() {
                return + new Date
            });
            this.plugins = [];
            this.types = {};
            this.fa = [];
            this.Kb = [];
            this.pj = {};
            this.jf = [];
            this.Zo = {};
            this.ng = [];
            this.Rj = [];
            this.ho = [];
            this.Cx = [];
            this.Dx = [];
            this.Ou = null;
            this.Rh = {};
            this.Cp = this.kh = !1;
            this.hf = 0;
            this.Bp = this.Ep = !1;
            this.ff = [];
            this.zk = !1;
            this.en = this.Fq = "";
            this.Dc = null;
            this.vg = "";
            this.ql = this.Lu = !1;
            this.Cm = [];
            this.Th = this.Ja = 0;
            this.Ht = 30;
            this.Qo = this.Sk = 0;
            this.Jg = 1;
            this.Mc = new zb;
            this.Ng = new zb;
            this.rn = this.Fm = this.jk = this.$f = this.ni = this.fp = this.bn = 0;
            this.ig = null;
            this.vm = [];
            this.Yo = [];
            this.xm = -1;
            this.Zp = [[]];
            this.Vq = this.kn = 0;
            this.Gn(null);
            this.Tk = [];
            this.Uk = -1;
            this.Lt = this.Wk = 0;
            this.Up = !0;
            this.lk = 0;
            this.rl = [];
            this.Sq = this.uq = -1;
            this.ji = !0;
            this.sj = 0;
            this.Bk = !1;
            this.zB = 0;
            this.Ri = null;
            this.$d = this.Ls = !1;
            this.Pt = new ea;
            this.hq = new ea;
            this.iq = new ea;
            this.fl = [];
            this.pf = new Db([]);
            this.Oq = new Db([]);
            this.Yg = [];
            this.tk = {};
            this.eh = {};
            this.Xg = {};
            this.Qj = {};
            this.Vr = {};
            this.ht = this.dn = this.jc = this.Cc = this.gt = this.cn = this.Xa = null;
            this.Oj = this.Jp = !1;
            this.gp = [null, null];
            this.Zh = 0;
            this.dp = "";
            this.zg = {};
            this.ol = this.ph = null;
            this.Nu = "";
            this.qn = [];
            this.gB()
        }
    }
    function c(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }
    function b() {
        try {
            return !! window.indexedDB
        } catch(a) {
            return ! 1
        }
    }
    function d(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }
    function f(a, b, c, e) {
        try {
            var g = indexedDB.open("_C2SaveStates");
            g.onupgradeneeded = d;
            g.onerror = e;
            g.onsuccess = function(d) {
                d = d.target.result;
                d.onerror = e;
                d.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = c
            }
        } catch(k) {
            e(k)
        }
    }
    function h(a, b, c) {
        try {
            var e = indexedDB.open("_C2SaveStates");
            e.onupgradeneeded = d;
            e.onerror = c;
            e.onsuccess = function(e) {
                e = e.target.result;
                e.onerror = c;
                var d = e.transaction(["saves"]).objectStore("saves").get(a);
                d.onsuccess = function() {
                    d.result ? b(d.result.data) : b(null)
                }
            }
        } catch(g) {
            c(g)
        }
    }
    function e() {
        ia("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }
    function g(a) {
        var b, c = {};
        for (b in a) ! a.hasOwnProperty(b) || a[b] instanceof ea || a[b] && "undefined" !== typeof a[b].Ef || "spriteCreatedDestroyCallback" !== b && (c[b] = a[b]);
        return c
    }
    var l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    a.prototype.gB = function() {
        var a = this;
        if (this.Xm) this.kz(function(b) {
            a.Lk(JSON.parse(b))
        },
        function() {
            alert("Error fetching data.js")
        });
        else {
            var b;
            this.Ek ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var c = "data.js";
            if (this.Zs || this.Ek || this.Ip || this.Hp) c = "data.json";
            b.open("GET", c, !0);
            var e = !1;
            if (!this.Zb && "response" in b && "responseType" in b) try {
                b.responseType = "json",
                e = "json" === b.responseType
            } catch(d) {
                e = !1
            }
            if (!e && "responseType" in b) try {
                b.responseType = "text"
            } catch(g) {}
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch(k) {}
            this.Ek ? b.onreadystatechange = function() {
                4 === b.readyState && a.Lk(JSON.parse(b.responseText))
            }: (b.onload = function() {
                if (e) a.Lk(b.response);
                else if (a.Oe) {
                    var c = b.responseText,
                    c = c.substr(c.indexOf("{"));
                    a.Lk(JSON.parse(c))
                } else a.Lk(JSON.parse(b.responseText))
            },
            b.onerror = function(a) {
                ka("Error requesting " + c + ":");
                ka(a)
            });
            b.send()
        }
    };
    a.prototype.$z = function() {
        var a = this,
        b, c, e, d, g, k, f, l, m;
        this.hi = (!this.Zb || this.Oe || this.Zd) && this.PB && !this.Tm;
        0 === this.Hd && this.kj && (this.hi = !1);
        this.devicePixelRatio = this.hi ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.gd();
        0 < this.Hd && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost",
        function(b) {
            b.preventDefault();
            a.zA();
            ia("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        },
        !1);
        this.canvas.addEventListener("webglcontextrestored",
        function() {
            a.ga.Qs();
            a.ga.Fg(a.ga.width, a.ga.height, !0);
            a.Cc = null;
            a.jc = null;
            a.gp[0] = null;
            a.gp[1] = null;
            a.AA();
            a.kb = !0;
            ia("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        },
        !1);
        try {
            this.Dy && (this.te || this.Oe || !this.Zb) && (b = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            },
            this.ka = this.canvas.getContext("webgl2", b) || this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch(h) {}
        if (this.ka) {
            if (b = this.ka.getExtension("WEBGL_debug_renderer_info")) this.pp = this.ka.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.ka.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.Db && (this.pp += " [front-to-back enabled]");
            this.Zb || (this.dd = document.createElement("canvas"), jQuery(this.dd).appendTo(this.canvas.parentNode), this.dd.oncontextmenu = function() {
                return ! 1
            },
            this.dd.onselectstart = function() {
                return ! 1
            },
            this.dd.width = Math.round(this.lm * this.devicePixelRatio), this.dd.height = Math.round(this.gk * this.devicePixelRatio), jQuery(this.dd).css({
                width: this.lm + "px",
                height: this.gk + "px"
            }), this.mu(), this.oq = this.dd.getContext("2d"));
            this.ga = new Xb(this.ka, this.ej, this.Db);
            this.ga.Fg(this.canvas.width, this.canvas.height);
            this.ga.qs = 0 !== this.wy;
            this.Ib = null;
            b = 0;
            for (c = this.fa.length; b < c; b++) for (g = this.fa[b], e = 0, d = g.Fa.length; e < d; e++) f = g.Fa[e],
            f.mc = this.ga.op(f.id),
            f.mf = this.ga.sq(f.mc),
            this.Oj = this.Oj || this.ga.bl(f.mc);
            b = 0;
            for (c = this.jf.length; b < c; b++) {
                l = this.jf[b];
                e = 0;
                for (d = l.Fa.length; e < d; e++) f = l.Fa[e],
                f.mc = this.ga.op(f.id),
                f.mf = this.ga.sq(f.mc);
                l.rf();
                e = 0;
                for (d = l.Ka.length; e < d; e++) {
                    m = l.Ka[e];
                    g = 0;
                    for (k = m.Fa.length; g < k; g++) f = m.Fa[g],
                    f.mc = this.ga.op(f.id),
                    f.mf = this.ga.sq(f.mc),
                    this.Oj = this.Oj || this.ga.bl(f.mc);
                    m.rf()
                }
            }
        } else {
            if (0 < this.Hd && this.bd) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return ! 1
                };
                document.onselectstart = function() {
                    return ! 1
                };
                this.Ib = AppMobi.canvas.getContext("2d");
                try {
                    this.Ib.samplingMode = this.Eb ? "smooth": "sharp",
                    this.Ib.globalScale = 1,
                    this.Ib.HTML5CompatibilityMode = !0,
                    this.Ib.imageSmoothingEnabled = this.Eb
                } catch(r) {}
                0 !== this.width && 0 !== this.height && (this.Ib.width = this.width, this.Ib.height = this.height)
            }
            this.Ib || (this.te ? (b = {
                antialias: !!this.Eb,
                alpha: !0
            },
            this.Ib = this.canvas.getContext("2d", b)) : (b = {
                alpha: !0
            },
            this.Ib = this.canvas.getContext("2d", b)), this.Pn(this.Ib, this.Eb));
            this.oq = this.dd = null
        }
        this.Wu = function(b) {
            a.Gc(!1, b)
        };
        window == window.top || this.Zb || this.Gp || this.Ek || (document.addEventListener("mousedown",
        function() {
            window.focus()
        },
        !0), document.addEventListener("touchstart",
        function() {
            window.focus()
        },
        !0));
        "undefined" !== typeof cr_is_preview && (this.te && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ia("Reloading for continuous preview"), this.en = "__c2_continuouspreview", this.ql = !0), this.LA && !this.ej && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur",
        function() {
            a.Cj()
        });
        this.Zb || (b = function(a) {
            if (Wb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch(b) {}
        },
        "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.Hd && this.hi && 1 < this.devicePixelRatio && this.setSize(this.Fc, this.Ec, !0);
        this.$u();
        this.Tz();
        this.go();
        this.ca = {}
    };
    a.prototype.setSize = function(a, b, c) {
        var e = 0,
        d = 0,
        g = 0,
        k = 0,
        k = 0;
        if (this.nj !== a || this.mj !== b || c) {
            this.nj = a;
            this.mj = b;
            var f = this.Hd;
            if ((g = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Bk) && !this.Zd) || 0 !== this.Hd || c) g && 0 < this.Zh && (f = this.Zh),
            c = this.devicePixelRatio,
            4 <= f ? (g = this.Fc / this.Ec, a / b > g ? (g *= b, 5 === f ? (k = g * c / this.Fc, 1 < k ? k = Math.floor(k) : 1 > k && (k = 1 / Math.ceil(1 / k)), g = this.Fc * k / c, k = this.Ec * k / c, e = (a - g) / 2, d = (b - k) / 2, a = g, b = k) : (e = (a - g) / 2, a = g)) : (k = a / g, 5 === f ? (k = k * c / this.Ec, 1 < k ? k = Math.floor(k) : 1 > k && (k = 1 / Math.ceil(1 / k)), g = this.Fc * k / c, k = this.Ec * k / c, e = (a - g) / 2, d = (b - k) / 2, a = g) : d = (b - k) / 2, b = k)) : this.Wm && this.Bk && 0 === this.As && (e = Math.floor((a - this.Fc) / 2), d = Math.floor((b - this.Ec) / 2), a = this.Fc, b = this.Ec),
            2 > f && (this.ak = c),
            this.lm = Math.round(a),
            this.gk = Math.round(b),
            this.width = Math.round(a * c),
            this.height = Math.round(b * c),
            this.kb = !0,
            this.nv ? (this.xa = this.width, this.wa = this.height, this.pe = !0) : this.width < this.Fc && this.height < this.Ec || 1 === f ? (this.xa = this.width, this.wa = this.height, this.pe = !0) : (this.xa = this.Fc, this.wa = this.Ec, this.pe = !1, 2 === f ? (g = this.Fc / this.Ec, f = this.nj / this.mj, f < g ? this.xa = this.wa * f: f > g && (this.wa = this.xa / f)) : 3 === f && (g = this.Fc / this.Ec, f = this.nj / this.mj, f > g ? this.xa = this.wa * f: f < g && (this.wa = this.xa / f))),
            this.$r && !this.Zb && (jQuery(this.$r).css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px",
                "margin-left": Math.floor(e) + "px",
                "margin-top": Math.floor(d) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px"
            })),
            this.canvas && (this.canvas.width = Math.round(a * c), this.canvas.height = Math.round(b * c), this.Oe ? (this.canvas.style.left = Math.floor(e) + "px", this.canvas.style.top = Math.floor(d) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.hi && !this.Zb && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")),
            this.dd && (this.dd.width = Math.round(a * c), this.dd.height = Math.round(b * c), this.dd.style.width = this.lm + "px", this.dd.style.height = this.gk + "px"),
            this.ga && this.ga.Fg(Math.round(a * c), Math.round(b * c)),
            this.bd && this.Ib && (this.Ib.width = Math.round(a), this.Ib.height = Math.round(b)),
            this.Ib && this.Pn(this.Ib, this.Eb),
            this.$u(),
            this.bt && !this.Zd && window.scrollTo(0, 0)
        }
    };
    a.prototype.$u = function() {
        if (this.Fx && 0 !== this.nq) {
            var a = "portrait";
            2 === this.nq && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).
                catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch(b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    a.prototype.zA = function() {
        this.ga.Sx();
        this.Jp = !0;
        var a, b, c;
        a = 0;
        for (b = this.fa.length; a < b; a++) c = this.fa[a],
        c.sn && c.sn()
    };
    a.prototype.AA = function() {
        this.Jp = !1;
        var a, b, c;
        a = 0;
        for (b = this.fa.length; a < b; a++) c = this.fa[a],
        c.un && c.un()
    };
    a.prototype.mu = function() {
        if (!this.Zb) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Bk) && !this.Zd ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.dd).css(a)
        }
    };
    var p = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    a.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Dk) for (ia("[Construct 2] Suspending"), this.Dk = !0, -1 !== this.uq && p && p(this.uq), -1 !== this.Sq && clearTimeout(this.Sq), a = 0, b = this.rl.length; a < b; a++) this.rl[a](!0);
        else if (!a && this.Dk) {
            ia("[Construct 2] Resuming");
            this.Dk = !1;
            this.bn = mb();
            this.ni = mb();
            a = this.Sk = this.Fm = 0;
            for (b = this.rl.length; a < b; a++) this.rl[a](!1);
            this.Gc(!1)
        }
    };
    a.prototype.Or = function(a) {
        this.rl.push(a)
    };
    a.prototype.Ug = function(a) {
        return this.qn[a]
    };
    a.prototype.Lk = function(a) {
        a && a.project || ka("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.ys = a[1];
        this.Hd = a[12];
        this.As = a[12];
        this.Fc = a[10];
        this.Ec = a[11];
        this.gu = this.Fc / 2;
        this.hu = this.Ec / 2;
        this.Zb && !this.Oe && (4 <= a[12] || 0 === a[12]) && (ia("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.As = this.Hd = 3);
        this.br = a[18];
        this.qh = a[19];
        if (0 === this.qh) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.Eu(b, "loading-logo.png");
            this.ph = {
                ln: b
            }
        } else if (4 === this.qh) {
            b = new Image;
            b.src = "";
            var c = new Image;
            c.src = "";
            var e = new Image;
            e.src = "";
            var d = new Image;
            d.src = "";
            var g = new Image;
            g.src = "";
            var k = new Image;
            k.src = "";
            var f = new Image;
            f.src = "";
            var l = new Image;
            l.src = "";
            var m = new Image;
            m.src = "";
            var h = new Image;
            h.src = "";
            var r = new Image;
            r.src = "";
            var q = new Image;
            q.src = "";
            this.ph = {
                ln: [b, c, e, d],
                QA: [g, k, f, l],
                SB: [m, h, r, q]
            }
        }
        this.Wk = a[21];
        this.qn = ed();
        this.Yf = new R(this);
        b = 0;
        for (c = a[2].length; b < c; b++) f = a[2][b],
        e = this.Ug(f[0]),
        Yb(f, e.prototype),
        l = new e(this),
        l.Un = f[1],
        l.oh = f[2],
        l.RC = f[5],
        l.It = f[9],
        l.ya && l.ya(),
        this.plugins.push(l);
        this.qn = ed();
        b = 0;
        for (c = a[3].length; b < c; b++) {
            f = a[3][b];
            g = this.Ug(f[1]);
            l = null;
            e = 0;
            for (d = this.plugins.length; e < d; e++) if (this.plugins[e] instanceof g) {
                l = this.plugins[e];
                break
            }
            m = new l.gb(l);
            m.name = f[0];
            m.qa = f[2];
            m.yp = f[3].slice(0);
            m.RB = f[3].length;
            m.Gx = f[4];
            m.oz = f[5];
            m.Za = f[11];
            m.qa ? (m.uh = [], m.pg = this.lk++, m.Jb = null) : (m.uh = null, m.pg = -1, m.Jb = []);
            m.Am = null;
            m.Xi = null;
            m.ss = null;
            m.Jd = !1;
            m.Vd = null;
            f[6] ? (m.ao = f[6][0], m.Pq = f[6][1], m.ul = f[6][2]) : (m.ao = null, m.Pq = 0, m.ul = 0);
            f[7] ? m.Ud = f[7] : m.Ud = null;
            m.index = b;
            m.F = [];
            m.qm = [];
            m.Ig = [new $b(m)];
            m.Gf = 0;
            m.Je = null;
            m.Xx = 0;
            m.Lj = !0;
            m.jo = ac;
            m.Jm = bc;
            m.Az = cc;
            m.Ya = dc;
            m.cl = ec;
            m.Bi = fc;
            m.Tf = gc;
            m.Hm = hc;
            m.hp = ic;
            m.kp = jc;
            m.De = kc;
            m.lp = lc;
            m.bk = new Eb(this.Fc, this.Ec);
            m.Rl = !0;
            m.Sl = !1;
            m.ca = {};
            m.toString = mc;
            m.Kb = [];
            e = 0;
            for (d = f[8].length; e < d; e++) {
                h = f[8][e];
                r = this.Ug(h[1]);
                q = null;
                g = 0;
                for (k = this.Kb.length; g < k; g++) if (this.Kb[g] instanceof r) {
                    q = this.Kb[g];
                    break
                }
                q || (q = new r(this), q.fq = [], q.pn = new ea, q.ya && q.ya(), this.Kb.push(q), Wc.yB && q instanceof Wc.yB && (this.Ou = q)); - 1 === q.fq.indexOf(m) && q.fq.push(m);
                g = new q.gb(q, m);
                g.name = h[0];
                g.Za = h[2];
                g.ya();
                m.Kb.push(g)
            }
            m.global = f[9];
            m.Dp = f[10];
            m.Fa = [];
            e = 0;
            for (d = f[12].length; e < d; e++) m.Fa.push({
                id: f[12][e][0],
                name: f[12][e][1],
                mc: -1,
                mf: !1,
                gc: !0,
                index: e
            });
            m.fD = f[13];
            this.br && !m.qa && !m.Dp && l.oh || m.ya();
            m.name && (this.types[m.name] = m);
            this.fa.push(m);
            l.Un && (e = new l.Ta(m), e.uid = this.Wk++, e.ru = this.Lt++, e.fi = 0, e.rk = nc, e.toString = oc, e.da = f[14], e.ya(), m.F.push(e), this.zg[e.uid.toString()] = e)
        }
        b = 0;
        for (c = a[4].length; b < c; b++) for (g = a[4][b], k = this.fa[g[0]], e = 1, d = g.length; e < d; e++) f = this.fa[g[e]],
        f.Jb.push(k),
        k.uh.push(f);
        b = 0;
        for (c = a[28].length; b < c; b++) {
            g = a[28][b];
            k = [];
            e = 0;
            for (d = g.length; e < d; e++) k.push(this.fa[g[e]]);
            e = 0;
            for (d = k.length; e < d; e++) k[e].Jd = !0,
            k[e].Vd = k
        }
        if (0 < this.lk) for (b = 0, c = this.fa.length; b < c; b++) if (f = this.fa[b], !f.qa && f.Jb.length) {
            f.Am = Array(this.lk);
            f.Xi = Array(this.lk);
            f.ss = Array(this.lk);
            m = [];
            e = q = r = h = 0;
            for (d = f.Jb.length; e < d; e++) for (l = f.Jb[e], f.Am[l.pg] = h, h += l.RB, f.Xi[l.pg] = r, r += l.Gx, f.ss[l.pg] = q, q += l.oz, g = 0, k = l.Fa.length; g < k; g++) m.push(Fa({},
            l.Fa[g]));
            f.Fa = m.concat(f.Fa);
            e = 0;
            for (d = f.Fa.length; e < d; e++) f.Fa[e].index = e
        }
        b = 0;
        for (c = a[5].length; b < c; b++) f = a[5][b],
        e = new pc(this, f),
        this.pj[e.name] = e,
        this.jf.push(e);
        b = 0;
        for (c = a[6].length; b < c; b++) f = a[6][b],
        e = new qc(this, f),
        this.Zo[e.name] = e,
        this.ng.push(e);
        b = 0;
        for (c = this.ng.length; b < c; b++) this.ng[b].cc();
        b = 0;
        for (c = this.ng.length; b < c; b++) this.ng[b].Yq();
        b = 0;
        for (c = this.ho.length; b < c; b++) this.ho[b].cc();
        J(this.ho);
        this.Ex = a[7];
        this.dp = a[8];
        this.lf = a[9];
        this.ak = 1;
        this.Dy = a[13];
        this.Eb = a[14];
        this.as = a[15];
        this.PB = a[17];
        this.nq = a[20];
        this.Fx = 0 < this.nq;
        this.LA = a[22];
        this.pe = this.nv = a[23];
        this.wy = a[24];
        this.RA = a[25];
        this.Db = a[27] && !this.nh;
        this.Vn = Date.now();
        J(this.qn);
        this.$z()
    };
    var k = !1,
    m = 0,
    n = [];
    a.prototype.aB = function(a, b) {
        function c() {
            m--;
            e.Ft()
        }
        var e = this;
        a.addEventListener("load", c);
        a.addEventListener("error", c);
        n.push([a, b]);
        this.Ft()
    };
    a.prototype.Ft = function() {
        for (var a; n.length && 100 > m;) m++,
        a = n.shift(),
        this.Eu(a[0], a[1])
    };
    a.prototype.dr = function(a, b) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(b) {
            k = a.Xr = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", b)
        };
        this.Oe ? a.src = b: a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b,
        function(b) {
            a.src = b
        },
        function(c) {
            k = a.Xr = !0;
            console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", c)
        }) : (a.crossOrigin = "anonymous", this.aB(a, b)));
        this.Rj.push(a)
    };
    a.prototype.mz = function(a) {
        var b, c;
        b = 0;
        for (c = this.Rj.length; b < c; b++) if (this.Rj[b].Ux === a) return this.Rj[b];
        return null
    };
    var q = 0,
    t = !1;
    a.prototype.Tz = function() {
        this.Ri && (q = this.Ri.uB(this.Ex))
    };
    a.prototype.Sr = function() {
        var a = q,
        b = 0,
        c = 0,
        e = !0,
        d, g, c = 0;
        for (d = this.Rj.length; c < d; c++) {
            g = this.Rj[c];
            var k = g.ds;
            if (!k || 0 >= k) k = 5E4;
            a += k;
            g.src && (g.complete || g.loaded) && !g.Xr ? b += k: e = !1
        }
        e && this.RA && this.Ri && (t || (this.Ri.AB(), t = !0), c = this.Ri.Bz(), b += c, c < q && (e = !1));
        this.nf = 0 == a ? 1 : b / a;
        return e
    };
    var u = !1;
    a.prototype.go = function() {
        if (this.Ib || this.ga) {
            var a = this.Ib || this.oq;
            this.dd && this.mu();
            var b = window.innerWidth,
            c = window.innerHeight;
            this.nj === b && this.mj === c || this.setSize(b, c);
            this.nf = 0;
            this.ft = -1;
            var e = this;
            if (this.Sr() && (4 !== this.qh || u)) this.Uz();
            else {
                c = Date.now() - this.Vn;
                if (a) {
                    var d = this.width,
                    g = this.height,
                    b = this.devicePixelRatio;
                    if (3 > this.qh && (this.te || 500 <= c && this.ft != this.nf)) {
                        a.clearRect(0, 0, d, g);
                        var c = d / 2,
                        g = g / 2,
                        d = 0 === this.qh && this.ph.ln.complete,
                        f = 40 * b,
                        m = 0,
                        h = 80 * b,
                        r;
                        if (d) {
                            var q = this.ph.ln,
                            h = q.width * b;
                            r = q.height * b;
                            f = h / 2;
                            m = r / 2;
                            a.drawImage(q, va(c - f), va(g - m), h, r)
                        }
                        1 >= this.qh ? (c = va(c - f) + .5, g = va(g + (m + (d ? 12 * b: 0))) + .5, a.fillStyle = k ? "red": "DodgerBlue", a.fillRect(c, g, Math.floor(h * this.nf), 6 * b), a.strokeStyle = "black", a.strokeRect(c, g, h, 6 * b), a.strokeStyle = "white", a.strokeRect(c - 1 * b, g - 1 * b, h + 2 * b, 8 * b)) : 2 === this.qh && (a.font = this.Oe ? "12pt ArialMT": "12pt Arial", a.fillStyle = k ? "#f00": "#999", a.eD = "middle", b = Math.round(100 * this.nf) + "%", d = a.measureText ? a.measureText(b) : null, a.fillText(b, c - (d ? d.width: 0) / 2, g));
                        this.ft = this.nf
                    } else if (4 === this.qh) {
                        this.By(a);
                        l ? l(function() {
                            e.go()
                        }) : setTimeout(function() {
                            e.go()
                        },
                        16);
                        return
                    }
                }
                setTimeout(function() {
                    e.go()
                },
                this.te ? 10 : 100)
            }
        }
    };
    var v = -1,
    r = "undefined" === typeof cr_is_preview ? 200 : 0,
    y = !0,
    C = !1,
    A = 0,
    E = 0,
    F = "undefined" === typeof cr_is_preview ? 3E3: 0,
    B = null,
    z = null,
    w = 0;
    a.prototype.By = function(a) {
        if (!u) {
            for (var b = Math.ceil(this.width), e = Math.ceil(this.height), d = this.ph.ln, g = this.ph.QA, f = this.ph.SB, l = 0; 4 > l; ++l) if (!d[l].complete || !g[l].complete || !f[l].complete) return;
            0 === w && (v = Date.now());
            var l = Date.now(),
            m = !1,
            h = a,
            q,
            n;
            y || C ? (a.clearRect(0, 0, b, e), B && B.width === b && B.height === e || (B = document.createElement("canvas"), B.width = b, B.height = e, z = B.getContext("2d")), h = z, m = !0, y && 1 === w && (v = Date.now())) : a.globalAlpha = 1;
            h.fillStyle = "#333333";
            h.fillRect(0, 0, b, e);
            256 < this.gk ? (q = Ra(.22 * e, 105, .6 * b), n = .25 * q, h.drawImage(c(g, q), .5 * b - q / 2, .2 * e - n / 2, q, n), n = q = Math.min(.395 * e, .95 * b), h.drawImage(c(d, q), .5 * b - q / 2, .485 * e - n / 2, q, n), q = Ra(.22 * e, 105, .6 * b), n = .25 * q, h.drawImage(c(f, q), .5 * b - q / 2, .868 * e - n / 2, q, n), h.fillStyle = "#3C3C3C", q = b, n = Math.max(.005 * e, 2), h.fillRect(0, .8 * e - n / 2, q, n), h.fillStyle = k ? "red": "#E0FF65", q = b * this.nf, h.fillRect(.5 * b - q / 2, .8 * e - n / 2, q, n)) : (n = q = .55 * e, h.drawImage(c(d, q), .5 * b - q / 2, .45 * e - n / 2, q, n), h.fillStyle = "#3C3C3C", q = b, n = Math.max(.005 * e, 2), h.fillRect(0, .85 * e - n / 2, q, n), h.fillStyle = k ? "red": "#E0FF65", q = b * this.nf, h.fillRect(.5 * b - q / 2, .85 * e - n / 2, q, n));
            m && (y ? a.globalAlpha = 0 === w ? 0 : Math.min((l - v) / 300, 1) : C && (a.globalAlpha = Math.max(1 - (l - E) / 300, 0)), a.drawImage(B, 0, 0, b, e));
            y && 300 <= l - v && 2 <= w && (y = !1, A = l); ! y && l - A >= F && !C && 1 <= this.nf && (C = !0, E = l);
            if (C && l - E >= 300 + r || "undefined" !== typeof cr_is_preview && 1 <= this.nf && 500 > Date.now() - v) u = !0,
            C = y = !1,
            this.ph = z = B = null; ++w
        }
    };
    a.prototype.Uz = function() {
        this.dd && (this.canvas.parentNode.removeChild(this.dd), this.dd = this.oq = null);
        this.Vn = Date.now();
        this.ni = mb();
        var a, b, c;
        if (this.br) for (a = 0, b = this.fa.length; a < b; a++) c = this.fa[a],
        c.qa || c.Dp || !c.sb.oh || c.ya();
        else this.ji = !1;
        a = 0;
        for (b = this.jf.length; a < b; a++) this.jf[a].Vx();
        2 <= this.Hd && (a = this.Fc / this.Ec, b = this.width / this.height, this.ak = 2 !== this.Hd && b > a || 2 === this.Hd && b < a ? this.height / this.Ec: this.width / this.Fc);
        this.ys ? this.pj[this.ys].Mq() : this.jf[0].Mq();
        this.br || (this.sj = 1, this.trigger(R.prototype.K.tr, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.fa.length; a < b; a++) c = this.fa[a],
        c.St && c.St();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Gc(!1);
        this.bd && AppMobi.webview.execute("onGameReady();")
    };
    a.prototype.Gc = function(a, b, c) {
        if (this.Xa) {
            var e = mb();
            if (c || !this.Dk || a) {
                a || (l ? this.uq = l(this.Wu) : this.Sq = setTimeout(this.Wu, this.ej ? 1 : 16));
                b = b || e;
                var d = this.Hd; ((c = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Zd) || this.Bk) && 0 < this.Zh && (d = this.Zh);
                if (0 < d) {
                    var d = window.innerWidth,
                    g = window.innerHeight;
                    this.nj === d && this.mj === g || this.setSize(d, g)
                }
                this.Zb || (c ? this.Dm || (this.Dm = !0) : this.Dm ? (this.Dm = !1, 0 === this.Hd && this.setSize(Math.round(this.Rt / this.devicePixelRatio), Math.round(this.Qt / this.devicePixelRatio), !0)) : (this.Rt = this.width, this.Qt = this.height));
                this.ji && (c = this.Sr(), this.sj = this.nf, c && (this.ji = !1, this.nf = 1, this.trigger(R.prototype.K.tr, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.sA(b); ! this.kb && !this.te || this.Jp || this.ql || a || (this.kb = !1, this.ga ? this.Gd() : this.If(), this.ol && (this.canvas && this.canvas.toDataURL && (this.Nu = this.canvas.toDataURL(this.ol[0], this.ol[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Nu), this.trigger(R.prototype.K.ew, null)), this.ol = null));
                this.QC || (this.$f++, this.jk++, this.Fm++);
                this.Sk += mb() - e
            }
        }
    };
    a.prototype.sA = function(a) {
        var b, c, e, d, g, k, f, l;
        1E3 <= a - this.ni && (this.ni += 1E3, 1E3 <= a - this.ni && (this.ni = a), this.fp = this.Fm, this.Fm = 0, this.Qo = this.Sk, this.Sk = 0);
        b = 0;
        0 !== this.bn && (b = a - this.bn, 0 > b && (b = 0), this.Th = b /= 1E3, .5 < this.Th ? this.Th = 0 : this.Th > 1 / this.Ht && (this.Th = 1 / this.Ht));
        this.bn = a;
        this.Ja = this.Th * this.Jg;
        this.Mc.add(this.Ja);
        this.Ng.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Bk) && !this.Zd;
        2 <= this.Hd || a && 0 < this.Zh ? (b = this.Fc / this.Ec, c = this.width / this.height, e = this.Hd, a && 0 < this.Zh && (e = this.Zh), this.ak = 2 !== e && c > b || 2 === e && c < b ? this.height / this.Ec: this.width / this.Fc, this.Xa && (this.Xa.il(this.Xa.scrollX), this.Xa.Mn(this.Xa.scrollY))) : this.ak = this.hi ? this.devicePixelRatio: 1;
        this.gd();
        this.hf++;
        this.Yf.jB();
        this.hf--;
        this.gd();
        this.hf++;
        c = this.Pt.tf();
        a = 0;
        for (b = c.length; a < b; a++) c[a].$C();
        a = 0;
        for (b = this.fa.length; a < b; a++) if (k = this.fa[a], !k.qa && (k.Kb.length || k.Jb.length)) for (c = 0, e = k.F.length; c < e; c++) for (f = k.F[c], d = 0, g = f.Ea.length; d < g; d++) f.Ea[d].Gc();
        a = 0;
        for (b = this.fa.length; a < b; a++) if (k = this.fa[a], !k.qa && (k.Kb.length || k.Jb.length)) for (c = 0, e = k.F.length; c < e; c++) for (f = k.F[c], d = 0, g = f.Ea.length; d < g; d++) l = f.Ea[d],
        l.PA && l.PA();
        c = this.hq.tf();
        a = 0;
        for (b = c.length; a < b; a++) c[a].Gc();
        this.hf--;
        this.Vz();
        for (a = 0; this.ig && 10 > a++;) this.ns(this.ig);
        a = 0;
        for (b = this.ng.length; a < b; a++) this.ng[a].sp = !1;
        this.Xa.Wh && this.Xa.Wh.lc();
        J(this.fl);
        this.Up = !1;
        this.hf++;
        a = 0;
        for (b = this.fa.length; a < b; a++) if (k = this.fa[a], !k.qa && (k.Kb.length || k.Jb.length)) for (c = 0, e = k.F.length; c < e; c++) for (f = k.F[c], d = 0, g = f.Ea.length; d < g; d++) l = f.Ea[d],
        l.Qq && l.Qq();
        c = this.iq.tf();
        a = 0;
        for (b = c.length; a < b; a++) c[a].Qq();
        this.hf--
    };
    a.prototype.Cj = function() {
        var a, b, c, e, d, g, k, f, l;
        a = 0;
        for (b = this.fa.length; a < b; a++) if (k = this.fa[a], !k.qa) for (c = 0, e = k.F.length; c < e; c++) if (f = k.F[c], f.Cj && f.Cj(), f.Ea) for (d = 0, g = f.Ea.length; d < g; d++) l = f.Ea[d],
        l.Cj && l.Cj()
    };
    a.prototype.ns = function(a) {
        var b = this.Xa;
        this.Xa.CB();
        var c, e, d;
        if (this.ga) for (c = 0, e = this.fa.length; c < e; c++) d = this.fa[c],
        d.qa || !d.io || d.global && 0 !== d.F.length || -1 !== a.wk.indexOf(d) || d.io();
        b == a && J(this.Yf.Qd);
        J(this.fl);
        this.wu(!0);
        a.Mq();
        this.wu(!1);
        this.Up = this.kb = !0;
        this.gd()
    };
    a.prototype.wu = function(a) {
        var b, c, e, d, g, k, f, l, m;
        b = 0;
        for (c = this.Kb.length; b < c; b++) e = this.Kb[b],
        a ? e.Xk && e.Xk() : e.Yk && e.Yk();
        b = 0;
        for (c = this.fa.length; b < c; b++) if (e = this.fa[b], e.global || e.sb.Un) for (d = 0, g = e.F.length; d < g; d++) if (k = e.F[d], a ? k.Xk && k.Xk() : k.Yk && k.Yk(), k.Ea) for (f = 0, l = k.Ea.length; f < l; f++) m = k.Ea[f],
        a ? m.Xk && m.Xk() : m.Yk && m.Yk()
    };
    a.prototype.Rq = function(a) {
        this.hq.add(a)
    };
    a.prototype.GB = function(a) {
        this.iq.add(a)
    };
    a.prototype.$h = function(a) {
        return a && -1 !== a.zj ? this.Th * a.zj: this.Ja
    };
    a.prototype.If = function() {
        this.Xa.If(this.Ib);
        this.bd && this.Ib.present()
    };
    a.prototype.Gd = function() {
        this.Db && (this.Uh = 1, this.Xa.Sh(this.ga));
        this.Xa.Gd(this.ga);
        this.ga.TA()
    };
    a.prototype.Eo = function(a) {
        a && this.vm.push(a)
    };
    a.prototype.fB = function(a) {
        Na(this.vm, a)
    };
    a.prototype.ci = function(a) {
        a = a.toString();
        return this.zg.hasOwnProperty(a) ? this.zg[a] : null
    };
    var G = [];
    a.prototype.Sg = function(a) {
        var b, c;
        b = a.type.name;
        var e = null;
        if (this.Rh.hasOwnProperty(b)) {
            if (e = this.Rh[b], e.contains(a)) return
        } else e = G.length ? G.pop() : new ea,
        this.Rh[b] = e;
        e.add(a);
        this.kh = !0;
        if (a.Jd) for (b = 0, c = a.siblings.length; b < c; b++) this.Sg(a.siblings[b]);
        this.Cp && e.Pj.push(a);
        this.Bp || (this.hf++, this.trigger(Object.getPrototypeOf(a.type.sb).K.gw, a), this.hf--)
    };
    a.prototype.gd = function() {
        if (this.kh) {
            var a, b, c, e, d, g;
            this.Cp = !0;
            c = 0;
            for (d = this.ff.length; c < d; ++c) for (a = this.ff[c], b = a.type, b.F.push(a), e = 0, g = b.Jb.length; e < g; ++e) b.Jb[e].F.push(a),
            b.Jb[e].Lj = !0;
            J(this.ff);
            this.Xv();
            lb(this.Rh);
            this.kh = this.Cp = !1
        }
    };
    a.prototype.Xv = function() {
        for (var a in this.Rh) this.Rh.hasOwnProperty(a) && this.xv(this.Rh[a])
    };
    a.prototype.xv = function(a) {
        var b = a.tf(),
        c = b[0].type,
        e,
        d,
        g,
        k,
        f,
        l;
        tb(c.F, a);
        c.Lj = !0;
        0 === c.F.length && (c.Sl = !1);
        e = 0;
        for (d = c.Jb.length; e < d; ++e) l = c.Jb[e],
        tb(l.F, a),
        l.Lj = !0;
        e = 0;
        for (d = this.Yf.Qd.length; e < d; ++e) if (f = this.Yf.Qd[e], f.Ad.hasOwnProperty(c.index) && tb(f.Ad[c.index].rg, a), !c.qa) for (g = 0, k = c.Jb.length; g < k; ++g) l = c.Jb[g],
        f.Ad.hasOwnProperty(l.index) && tb(f.Ad[l.index].rg, a);
        if (f = b[0].W) {
            if (f.Ae) for (g = f.F, e = 0, d = g.length; e < d; ++e) k = g[e],
            a.contains(k) && (k.mb(), f.ed.update(k, k.Nd, null), k.Nd.set(0, 0, -1, -1));
            tb(f.F, a);
            f.kl(0)
        }
        for (e = 0; e < b.length; ++e) this.wv(b[e], c);
        a.clear();
        G.push(a);
        this.kb = !0
    };
    a.prototype.wv = function(a, b) {
        var c, e, d;
        c = 0;
        for (e = this.vm.length; c < e; ++c) this.vm[c](a);
        a.Ee && b.bk.update(a, a.Ee, null); (c = a.W) && c.Fj(a, !0);
        if (a.Ea) for (c = 0, e = a.Ea.length; c < e; ++c) d = a.Ea[c],
        d.Ai && d.Ai(),
        d.behavior.pn.remove(a);
        this.Pt.remove(a);
        this.hq.remove(a);
        this.iq.remove(a);
        a.Ai && a.Ai();
        this.zg.hasOwnProperty(a.uid.toString()) && delete this.zg[a.uid.toString()];
        this.rn--;
        100 > b.qm.length && b.qm.push(a)
    };
    a.prototype.es = function(a, b, c, e) {
        if (a.qa) {
            var d = va(Math.random() * a.uh.length);
            return this.es(a.uh[d], b, c, e)
        }
        return a.Je ? this.fh(a.Je, b, !1, c, e, !1) : null
    };
    var S = [];
    a.prototype.fh = function(a, b, c, e, d, g) {
        var k, f, l, m;
        if (!a) return null;
        var h = this.fa[a[1]],
        q = h.sb.oh;
        if (this.ji && q && !h.Dp || q && !this.ga && 11 === a[0][11]) return null;
        var r = b;
        q || (b = null);
        var n;
        h.qm.length ? (n = h.qm.pop(), n.je = !0, h.sb.Ta.call(n, h)) : (n = new h.sb.Ta(h), n.je = !1); ! c || g || this.zg.hasOwnProperty(a[2].toString()) ? n.uid = this.Wk++:n.uid = a[2];
        this.zg[n.uid.toString()] = n;
        n.ru = this.Lt++;
        n.fi = h.F.length;
        k = 0;
        for (f = this.ff.length; k < f; ++k) this.ff[k].type === h && n.fi++;
        n.rk = nc;
        n.toString = oc;
        l = a[3];
        if (n.je) lb(n.ca);
        else {
            n.ca = {};
            if ("undefined" !== typeof cr_is_preview) for (n.Ts = [], n.Ts.length = l.length, k = 0, f = l.length; k < f; k++) n.Ts[k] = l[k][1];
            n.Bc = [];
            n.Bc.length = l.length
        }
        k = 0;
        for (f = l.length; k < f; k++) n.Bc[k] = l[k][0];
        if (q) {
            var y = a[0];
            n.x = la(e) ? y[0] : e;
            n.y = la(d) ? y[1] : d;
            n.z = y[2];
            n.width = y[3];
            n.height = y[4];
            n.depth = y[5];
            n.O = y[6];
            n.opacity = y[7];
            n.vd = y[8];
            n.wd = y[9];
            n.hd = y[10];
            k = y[11]; ! this.ga && h.Fa.length && (n.hd = k);
            n.ck = Gb(n.hd);
            this.ka && Lb(n, n.hd, this.ka);
            if (n.je) {
                k = 0;
                for (f = y[12].length; k < f; k++) for (l = 0, m = y[12][k].length; l < m; l++) n.Lb[k][l] = y[12][k][l];
                n.Vb.set(0, 0, 0, 0);
                n.Ee.set(0, 0, -1, -1);
                n.Nd.set(0, 0, -1, -1);
                n.Cb.ll(n.Vb);
                J(n.Io)
            } else {
                n.Lb = y[12].slice(0);
                k = 0;
                for (f = n.Lb.length; k < f; k++) n.Lb[k] = y[12][k].slice(0);
                n.nb = [];
                n.Wg = [];
                n.Wg.length = h.Fa.length;
                n.Vb = new za(0, 0, 0, 0);
                n.Ee = new za(0, 0, -1, -1);
                n.Nd = new za(0, 0, -1, -1);
                n.Cb = new Aa;
                n.Io = [];
                n.La = rc;
                n.KC = sc;
                n.kd = tc;
                n.mb = uc;
                n.OB = vc;
                n.jv = wc;
                n.Nf = xc
            }
            n.ag = !1;
            n.JB = 0;
            n.IB = 0;
            n.HB = null;
            14 === y.length && (n.ag = !0, n.JB = y[13][0], n.IB = y[13][1], n.HB = y[13][2]);
            k = 0;
            for (f = h.Fa.length; k < f; k++) n.Wg[k] = !0;
            n.Gg = !0;
            n.rf = yc;
            n.rf();
            n.kv = !!n.nb.length;
            n.Ho = !0;
            n.Ko = !0;
            h.Rl = !0;
            n.visible = !0;
            n.zj = -1;
            n.W = b;
            n.uf = b.F.length;
            n.Uh = 0;
            "undefined" === typeof n.Va && (n.Va = null);
            this.kb = n.Fe = !0
        }
        var p;
        J(S);
        k = 0;
        for (f = h.Jb.length; k < f; k++) S.push.apply(S, h.Jb[k].Kb);
        S.push.apply(S, h.Kb);
        if (n.je) for (k = 0, f = S.length; k < f; k++) {
            var C = S[k];
            p = n.Ea[k];
            p.je = !0;
            C.behavior.Ta.call(p, C, n);
            y = a[4][k];
            l = 0;
            for (m = y.length; l < m; l++) p.da[l] = y[l];
            p.ya();
            C.behavior.pn.add(n)
        } else for (n.Ea = [], k = 0, f = S.length; k < f; k++) C = S[k],
        p = new C.behavior.Ta(C, n),
        p.je = !1,
        p.da = a[4][k].slice(0),
        p.ya(),
        n.Ea.push(p),
        C.behavior.pn.add(n);
        y = a[5];
        if (n.je) for (k = 0, f = y.length; k < f; k++) n.da[k] = y[k];
        else n.da = y.slice(0);
        this.ff.push(n);
        this.kh = !0;
        b && (b.$j(n, !0), 1 !== b.Md || 1 !== b.Ue) && (h.Sl = !0);
        this.rn++;
        if (h.Jd) {
            if (n.Jd = !0, n.je ? J(n.siblings) : n.siblings = [], !c && !g) {
                k = 0;
                for (f = h.Vd.length; k < f; k++) if (h.Vd[k] !== h) {
                    if (!h.Vd[k].Je) return null;
                    n.siblings.push(this.fh(h.Vd[k].Je, r, !1, q ? n.x: e, q ? n.y: d, !0))
                }
                k = 0;
                for (f = n.siblings.length; k < f; k++) for (n.siblings[k].siblings.push(n), l = 0; l < f; l++) k !== l && n.siblings[k].siblings.push(n.siblings[l])
            }
        } else n.Jd = !1,
        n.siblings = null;
        n.ya();
        k = 0;
        for (f = n.Ea.length; k < f; k++) n.Ea[k].nu && n.Ea[k].nu();
        return n
    };
    a.prototype.Mm = function(a) {
        var b, c;
        b = 0;
        for (c = this.Xa.Ka.length; b < c; b++) {
            var e = this.Xa.Ka[b];
            if (Vb(e.name, a)) return e
        }
        return null
    };
    a.prototype.bi = function(a) {
        a = va(a);
        0 > a && (a = 0);
        a >= this.Xa.Ka.length && (a = this.Xa.Ka.length - 1);
        return this.Xa.Ka[a]
    };
    a.prototype.Oo = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].Ya().rb = !0
    };
    a.prototype.cl = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].cl()
    };
    a.prototype.Bi = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].Bi()
    };
    a.prototype.Tf = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) a[b].Tf()
    };
    a.prototype.gv = function(a) {
        if (a.Rl) {
            var b, c, e = a.F;
            b = 0;
            for (c = e.length; b < c; ++b) e[b].jv();
            e = this.ff;
            b = 0;
            for (c = e.length; b < c; ++b) e[b].type === a && e[b].jv();
            a.Rl = !1
        }
    };
    a.prototype.Ds = function(a, b, c, e) {
        var d, k, g = a ? 1 !== a.Md || 1 !== a.Ue: !1;
        if (b.qa) for (a = 0, d = b.uh.length; a < d; ++a) k = b.uh[a],
        g || k.Sl ? La(e, k.F) : (this.gv(k), k.bk.Hn(c, e));
        else g || b.Sl ? La(e, b.F) : (this.gv(b), b.bk.Hn(c, e))
    };
    a.prototype.Gz = function(a, b, c, e) {
        var d, k;
        d = 0;
        for (k = b.length; d < k; ++d) this.Ds(a, b[d], c, e)
    };
    a.prototype.Fz = function(a, b, c) {
        var e = this.Ou;
        e && this.Gz(a, e.fq, b, c)
    };
    a.prototype.Zn = function(a, b, c) {
        var e = a.Ya(),
        d,
        k,
        g,
        f,
        l = this.zc().xc.Se,
        m,
        n,
        h;
        if (e.rb) for (e.rb = !1, J(e.F), d = 0, f = a.F.length; d < f; d++) g = a.F[d],
        g.mb(),
        m = g.W.uc(b, c, !0),
        n = g.W.uc(b, c, !1),
        g.kd(m, n) ? e.F.push(g) : l && e.Wa.push(g);
        else {
            k = 0;
            h = l ? e.Wa: e.F;
            d = 0;
            for (f = h.length; d < f; d++) g = h[d],
            g.mb(),
            m = g.W.uc(b, c, !0),
            n = g.W.uc(b, c, !1),
            g.kd(m, n) && (l ? e.F.push(g) : (e.F[k] = e.F[d], k++));
            h.length = k
        }
        a.De();
        return e.rp()
    };
    a.prototype.Fi = function(a, b) {
        if (! (a && b && a !== b && a.Fe && b.Fe)) return ! 1;
        a.mb();
        b.mb();
        var c = a.W,
        e = b.W,
        d, g, k, f, l, m, n, h;
        if (c === e || c.Md === e.Md && e.Ue === e.Ue && c.scale === e.scale && c.O === e.O && c.le === e.le) {
            if (!a.Vb.aA(b.Vb) || !a.Cb.Us(b.Cb) || a.ag && b.ag) return ! 1;
            if (a.ag) return this.Uu(a, b);
            if (b.ag) return this.Uu(b, a);
            n = a.Va && !a.Va.ii();
            d = b.Va && !b.Va.ii();
            if (!n && !d) return ! 0;
            n ? (a.Va.Ph(a.width, a.height, a.O), n = a.Va) : (this.pf.Jj(a.Cb, a.x, a.y, a.width, a.height), n = this.pf);
            d ? (b.Va.Ph(b.width, b.height, b.O), h = b.Va) : (this.pf.Jj(b.Cb, b.x, b.y, b.width, b.height), h = this.pf);
            return n.xk(h, b.x - a.x, b.y - a.y)
        }
        n = a.Va && !a.Va.ii();
        d = b.Va && !b.Va.ii();
        n ? (a.Va.Ph(a.width, a.height, a.O), this.pf.Gu(a.Va)) : this.pf.Jj(a.Cb, a.x, a.y, a.width, a.height);
        n = this.pf;
        d ? (b.Va.Ph(b.width, b.height, b.O), this.Oq.Gu(b.Va)) : this.Oq.Jj(b.Cb, b.x, b.y, b.width, b.height);
        h = this.Oq;
        d = 0;
        for (g = n.xe; d < g; d++) k = 2 * d,
        f = k + 1,
        l = n.ec[k],
        m = n.ec[f],
        n.ec[k] = c.xd(l + a.x, m + a.y, !0),
        n.ec[f] = c.xd(l + a.x, m + a.y, !1);
        n.mb();
        d = 0;
        for (g = h.xe; d < g; d++) k = 2 * d,
        f = k + 1,
        l = h.ec[k],
        m = h.ec[f],
        h.ec[k] = e.xd(l + b.x, m + b.y, !0),
        h.ec[f] = e.xd(l + b.x, m + b.y, !1);
        h.mb();
        return n.xk(h, 0, 0)
    };
    var P = new Aa;
    new za(0, 0, 0, 0);
    var Q = [];
    a.prototype.Uu = function(a, b) {
        var c, e, d, k, g = b.Vb,
        f = a.x,
        l = a.y;
        a.OC(g, Q);
        var m = b.Va && !b.Va.ii();
        c = 0;
        for (e = Q.length; c < e; ++c) if (d = Q[c], k = d.bB, g.bA(k, f, l) && (P.ll(k), P.offset(f, l), P.Us(b.Cb))) if (m) if (b.Va.Ph(b.width, b.height, b.O), d.Sf) {
            if (d.Sf.xk(b.Va, b.x - (f + k.left), b.y - (l + k.top))) return J(Q),
            !0
        } else {
            if (this.pf.Jj(P, 0, 0, k.right - k.left, k.bottom - k.top), this.pf.xk(b.Va, b.x, b.y)) return J(Q),
            !0
        } else if (d.Sf) {
            if (this.pf.Jj(b.Cb, 0, 0, b.width, b.height), d.Sf.xk(this.pf, -(f + k.left), -(l + k.top))) return J(Q),
            !0
        } else return J(Q),
        !0;
        J(Q);
        return ! 1
    };
    a.prototype.av = function(a, b) {
        if (!b) return ! 1;
        var c, e, d, k, g;
        c = 0;
        for (e = a.Kb.length; c < e; c++) if (a.Kb[c].behavior instanceof b) return ! 0;
        if (!a.qa) for (c = 0, e = a.Jb.length; c < e; c++) for (g = a.Jb[c], d = 0, k = g.Kb.length; d < k; d++) if (g.Kb[d].behavior instanceof b) return ! 0;
        return ! 1
    };
    a.prototype.Wq = function(a) {
        return this.av(a, Wc.qC)
    };
    a.prototype.Xq = function(a) {
        return this.av(a, Wc.rC)
    };
    var I = [];
    a.prototype.Gi = function(a) {
        var b, c, e;
        a.mb();
        this.Fz(a.W, a.Vb, I);
        b = 0;
        for (c = I.length; b < c; ++b) if (e = I[b], e.ca.solidEnabled && this.Fi(a, e)) return J(I),
        e;
        J(I);
        return null
    };
    a.prototype.YA = function(a, b, c, e) {
        e = e || 50;
        var d = a.x,
        k = a.y,
        g, f = null,
        l = null;
        for (g = 0; g < e; g++) if (a.x = d + b * g, a.y = k + c * g, a.La(), !this.Fi(a, f) && ((f = this.Gi(a)) && (l = f), !f && !f)) return l && this.VA(a, b, c, l),
        !0;
        a.x = d;
        a.y = k;
        a.La();
        return ! 1
    };
    a.prototype.VA = function(a, b, c, e) {
        var d = 2,
        k, g = !1;
        k = !1;
        for (var f = a.x,
        l = a.y; 16 >= d;) k = 1 / d,
        d *= 2,
        a.x += b * k * (g ? 1 : -1),
        a.y += c * k * (g ? 1 : -1),
        a.La(),
        this.Fi(a, e) ? k = g = !0 : (k = g = !1, f = a.x, l = a.y);
        k && (a.x = f, a.y = l, a.La())
    };
    a.prototype.ZA = function(a) {
        var b = 0,
        c = a.x,
        e = a.y,
        d = 0,
        k = 0,
        g = 0,
        f = this.Gi(a);
        if (f) {
            for (; 100 >= b;) {
                switch (d) {
                case 0:
                    k = 0;
                    g = -1;
                    b++;
                    break;
                case 1:
                    k = 1;
                    g = -1;
                    break;
                case 2:
                    k = 1;
                    g = 0;
                    break;
                case 3:
                    g = k = 1;
                    break;
                case 4:
                    k = 0;
                    g = 1;
                    break;
                case 5:
                    k = -1;
                    g = 1;
                    break;
                case 6:
                    k = -1;
                    g = 0;
                    break;
                case 7:
                    g = k = -1
                }
                d = (d + 1) % 8;
                a.x = va(c + k * b);
                a.y = va(e + g * b);
                a.La();
                if (!this.Fi(a, f) && (f = this.Gi(a), !f)) return
            }
            a.x = c;
            a.y = e;
            a.La()
        }
    };
    a.prototype.uu = function(a, b) {
        a.Fe && b.Fe && this.fl.push([a, b])
    };
    a.prototype.Nx = function(a, b) {
        var c, e, d;
        c = 0;
        for (e = this.fl.length; c < e; c++) if (d = this.fl[c], d[0] == a && d[1] == b || d[0] == b && d[1] == a) return ! 0;
        return ! 1
    };
    a.prototype.Kx = function(a, b, c) {
        var e = a.x,
        d = a.y,
        k = sa(10, hb(b, c, e, d)),
        g = Xa(b, c, e, d),
        f = this.Gi(a);
        if (!f) return Ua(g + ua);
        var l = f,
        m, n, h, q, r = L(5);
        for (m = 1; 36 > m; m++) if (n = g - m * r, a.x = b + Math.cos(n) * k, a.y = c + Math.sin(n) * k, a.La(), !this.Fi(a, l) && (l = this.Gi(a), !l)) {
            h = n;
            break
        }
        36 === m && (h = Ua(g + ua));
        l = f;
        for (m = 1; 36 > m; m++) if (n = g + m * r, a.x = b + Math.cos(n) * k, a.y = c + Math.sin(n) * k, a.La(), !this.Fi(a, l) && (l = this.Gi(a), !l)) {
            q = n;
            break
        }
        36 === m && (q = Ua(g + ua));
        a.x = e;
        a.y = d;
        a.La();
        if (q === h) return q;
        a = $a(q, h) / 2;
        a = bb(q, h) ? Ua(h + a + ua) : Ua(q + a);
        h = Math.cos(g);
        g = Math.sin(g);
        q = Math.cos(a);
        a = Math.sin(a);
        b = h * q + g * a;
        return Xa(0, 0, h - 2 * b * q, g - 2 * b * a)
    };
    var D = -1;
    a.prototype.trigger = function(a, b, c) {
        if (!this.Xa) return ! 1;
        var e = this.Xa.Wh;
        if (!e) return ! 1;
        var d = !1,
        k, g, f;
        D++;
        var l = e.Uo;
        g = 0;
        for (f = l.length; g < f; ++g) k = this.Yu(a, b, l[g], c),
        d = d || k;
        k = this.Yu(a, b, e, c);
        D--;
        return d || k
    };
    a.prototype.Yu = function(a, b, c, e) {
        var d = !1,
        k, g, f, l;
        if (b) for (f = this.Uq(a, b, b.type.name, c, e), d = d || f, l = b.type.Jb, k = 0, g = l.length; k < g; ++k) f = this.Uq(a, b, l[k].name, c, e),
        d = d || f;
        else f = this.Uq(a, b, "system", c, e),
        d = d || f;
        return d
    };
    a.prototype.Uq = function(a, b, c, e, d) {
        var k, g = !1,
        f = !1,
        f = "undefined" !== typeof d,
        l = (f ? e.us: e.Zu)[c];
        if (!l) return g;
        var m = null;
        e = 0;
        for (k = l.length; e < k; ++e) if (l[e].method == a) {
            m = l[e].ik;
            break
        }
        if (!m) return g;
        var n;
        f ? n = m[d] : n = m;
        if (!n) return null;
        e = 0;
        for (k = n.length; e < k; e++) a = n[e][0],
        d = n[e][1],
        f = this.jz(b, c, a, d),
        g = g || f;
        return g
    };
    a.prototype.jz = function(a, b, c, e) {
        var d, k, g = !1;
        this.Vq++;
        var f = this.zc().xc;
        f && this.cl(f.Ah);
        var l = 1 < this.Vq;
        this.cl(c.Ah);
        l && this.WA();
        var m = this.Gn(c);
        m.xc = c;
        a && (d = this.types[b].Ya(), d.rb = !1, J(d.F), d.F[0] = a, this.types[b].De());
        a = !0;
        if (c.parent) {
            b = m.Tu;
            for (d = c.parent; d;) b.push(d),
            d = d.parent;
            b.reverse();
            d = 0;
            for (k = b.length; d < k; d++) if (!b[d].lB()) {
                a = !1;
                break
            }
        }
        a && (this.jk++, c.Se ? c.kB(e) : c.lc(), g = g || m.mi);
        this.Bn();
        l && this.NA();
        this.Tf(c.Ah);
        f && this.Tf(f.Ah);
        this.kh && 0 === this.hf && 0 === D && !this.Ep && this.gd();
        this.Vq--;
        return g
    };
    a.prototype.Im = function() {
        var a = this.zc();
        return a.xc.wc[a.vc]
    };
    a.prototype.WA = function() {
        this.kn++;
        this.kn >= this.Zp.length && this.Zp.push([])
    };
    a.prototype.NA = function() {
        this.kn--
    };
    a.prototype.Es = function() {
        return this.Zp[this.kn]
    };
    a.prototype.Gn = function(a) {
        this.xm++;
        this.xm >= this.Yo.length && this.Yo.push(new zc);
        var b = this.zc();
        b.reset(a);
        return b
    };
    a.prototype.Bn = function() {
        this.xm--
    };
    a.prototype.zc = function() {
        return this.Yo[this.xm]
    };
    a.prototype.XA = function(a) {
        this.Uk++;
        this.Uk >= this.Tk.length && this.Tk.push(ca({
            name: a,
            index: 0,
            nc: !1
        }));
        var b = this.Fs();
        b.name = a;
        b.index = 0;
        b.nc = !1;
        return b
    };
    a.prototype.OA = function() {
        this.Uk--
    };
    a.prototype.Fs = function() {
        return this.Tk[this.Uk]
    };
    a.prototype.Gs = function(a, b) {
        for (var c, e, d, k, g, f; b;) {
            c = 0;
            for (e = b.Xe.length; c < e; c++) if (f = b.Xe[c], f instanceof Ac && Vb(a, f.name)) return f;
            b = b.parent
        }
        c = 0;
        for (e = this.ng.length; c < e; c++) for (g = this.ng[c], d = 0, k = g.ih.length; d < k; d++) if (f = g.ih[d], f instanceof Ac && Vb(a, f.name)) return f;
        return null
    };
    a.prototype.Is = function(a) {
        var b, c;
        b = 0;
        for (c = this.jf.length; b < c; b++) if (this.jf[b].Za === a) return this.jf[b];
        return null
    };
    a.prototype.Om = function(a) {
        var b, c;
        b = 0;
        for (c = this.fa.length; b < c; b++) if (this.fa[b].Za === a) return this.fa[b];
        return null
    };
    a.prototype.wz = function(a) {
        var b, c;
        b = 0;
        for (c = this.Yg.length; b < c; b++) if (this.Yg[b].Za === a) return this.Yg[b];
        return null
    };
    a.prototype.Zx = function(a, b) {
        this.ol = [a, b];
        this.kb = !0
    };
    a.prototype.Vz = function() {
        var a = this,
        c = this.Fq,
        d = this.vg,
        k = this.en,
        g = !1;
        this.Lu && (g = !0, c = "__c2_continuouspreview", this.Lu = !1);
        if (c.length) {
            this.gd();
            d = this.pB();
            if (b() && !this.te) f(c, d,
            function() {
                ia("Saved state to IndexedDB storage (" + d.length + " bytes)");
                a.vg = d;
                a.trigger(R.prototype.K.to, null);
                a.vg = "";
                g && e()
            },
            function(b) {
                try {
                    localStorage.setItem("__c2save_" + c, d),
                    ia("Saved state to WebStorage (" + d.length + " bytes)"),
                    a.vg = d,
                    a.trigger(R.prototype.K.to, null),
                    a.vg = "",
                    g && e()
                } catch(k) {
                    ia("Failed to save game state: " + b + "; " + k),
                    a.trigger(R.prototype.K.Ar, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + c, d),
                ia("Saved state to WebStorage (" + d.length + " bytes)"),
                a.vg = d,
                this.trigger(R.prototype.K.to, null),
                a.vg = "",
                g && e()
            } catch(l) {
                ia("Error saving to WebStorage: " + l),
                a.trigger(R.prototype.K.Ar, null)
            }
            this.en = this.Fq = "";
            this.Dc = null
        }
        if (k.length) {
            if (b() && !this.te) h(k,
            function(b) {
                b ? (a.Dc = b, ia("Loaded state from IndexedDB storage (" + a.Dc.length + " bytes)")) : (a.Dc = localStorage.getItem("__c2save_" + k) || "", ia("Loaded state from WebStorage (" + a.Dc.length + " bytes)"));
                a.ql = !1;
                a.Dc || (a.Dc = null, a.trigger(R.prototype.K.Ll, null))
            },
            function() {
                a.Dc = localStorage.getItem("__c2save_" + k) || "";
                ia("Loaded state from WebStorage (" + a.Dc.length + " bytes)");
                a.ql = !1;
                a.Dc || (a.Dc = null, a.trigger(R.prototype.K.Ll, null))
            });
            else {
                try {
                    this.Dc = localStorage.getItem("__c2save_" + k) || "",
                    ia("Loaded state from WebStorage (" + this.Dc.length + " bytes)")
                } catch(m) {
                    this.Dc = null
                }
                this.ql = !1;
                a.Dc || (a.Dc = null, a.trigger(R.prototype.K.Ll, null))
            }
            this.Fq = this.en = ""
        }
        null !== this.Dc && (this.gd(), this.rA(this.Dc) ? (this.vg = this.Dc, this.trigger(R.prototype.K.rw, null), this.vg = "") : a.trigger(R.prototype.K.Ll, null), this.Dc = null)
    };
    a.prototype.pB = function() {
        var a, b, c, e, d, k, f, l = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.Mc.Ga,
                walltime: this.Ng.Ga,
                timescale: this.Jg,
                tickcount: this.$f,
                execcount: this.jk,
                next_uid: this.Wk,
                running_layout: this.Xa.Za,
                start_time_offset: Date.now() - this.Vn
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
        for (b = this.fa.length; a < b; a++) if (d = this.fa[a], !d.qa && !this.Wq(d)) {
            k = {
                instances: []
            };
            kb(d.ca) && (k.ex = g(d.ca));
            c = 0;
            for (e = d.F.length; c < e; c++) k.instances.push(this.Eq(d.F[c]));
            l.types[d.Za.toString()] = k
        }
        a = 0;
        for (b = this.jf.length; a < b; a++) c = this.jf[a],
        l.layouts[c.Za.toString()] = c.Rc();
        e = l.events.groups;
        a = 0;
        for (b = this.Yg.length; a < b; a++) c = this.Yg[a],
        e[c.Za.toString()] = this.tk[c.sk].bj;
        b = l.events.cnds;
        for (f in this.eh) this.eh.hasOwnProperty(f) && (a = this.eh[f], kb(a.ca) && (b[f] = {
            ex: g(a.ca)
        }));
        b = l.events.acts;
        for (f in this.Xg) this.Xg.hasOwnProperty(f) && (a = this.Xg[f], kb(a.ca) && (b[f] = {
            ex: g(a.ca)
        }));
        b = l.events.vars;
        for (f in this.Qj) this.Qj.hasOwnProperty(f) && (a = this.Qj[f], a.Ym || a.parent && !a.Gk || (b[f] = a.data));
        l.system = this.Yf.Rc();
        return JSON.stringify(l)
    };
    a.prototype.tu = function() {
        var a, b, c, e, d, k;
        this.zg = {};
        a = 0;
        for (b = this.fa.length; a < b; a++) if (c = this.fa[a], !c.qa) for (e = 0, d = c.F.length; e < d; e++) k = c.F[e],
        this.zg[k.uid.toString()] = k
    };
    a.prototype.rA = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch(c) {
            return ! 1
        }
        if (!b.c2save || 1 < b.version) return ! 1;
        this.zk = !0;
        a = b.rt;
        this.Mc.reset();
        this.Mc.Ga = a.time;
        this.Ng.reset();
        this.Ng.Ga = a.walltime || 0;
        this.Jg = a.timescale;
        this.$f = a.tickcount;
        this.jk = a.execcount;
        this.Vn = Date.now() - a.start_time_offset;
        var e = a.running_layout;
        if (e !== this.Xa.Za) if (e = this.Is(e)) this.ns(e);
        else return;
        var d, k, g, f, l, m, n;
        m = b.types;
        for (k in m) if (m.hasOwnProperty(k) && (f = this.Om(parseInt(k, 10))) && !f.qa && !this.Wq(f)) {
            m[k].ex ? f.ca = m[k].ex: lb(f.ca);
            l = f.F;
            g = m[k].instances;
            e = 0;
            for (d = ta(l.length, g.length); e < d; e++) this.gn(l[e], g[e]);
            e = g.length;
            for (d = l.length; e < d; e++) this.Sg(l[e]);
            e = l.length;
            for (d = g.length; e < d; e++) {
                l = null;
                if (f.sb.oh && (l = this.Xa.Nm(g[e].w.l), !l)) continue;
                l = this.fh(f.Je, l, !1, 0, 0, !0);
                this.gn(l, g[e])
            }
            f.Lj = !0
        }
        this.gd();
        this.tu();
        d = b.layouts;
        for (k in d) d.hasOwnProperty(k) && (e = this.Is(parseInt(k, 10))) && e.od(d[k]);
        d = b.events.groups;
        for (k in d) d.hasOwnProperty(k) && (e = this.wz(parseInt(k, 10))) && this.tk[e.sk] && this.tk[e.sk].Du(d[k]);
        e = b.events.cnds;
        for (k in this.eh) this.eh.hasOwnProperty(k) && (e.hasOwnProperty(k) ? this.eh[k].ca = e[k].ex: this.eh[k].ca = {});
        e = b.events.acts;
        for (k in this.Xg) this.Xg.hasOwnProperty(k) && (e.hasOwnProperty(k) ? this.Xg[k].ca = e[k].ex: this.Xg[k].ca = {});
        e = b.events.vars;
        for (k in e) e.hasOwnProperty(k) && this.Qj.hasOwnProperty(k) && (this.Qj[k].data = e[k]);
        this.Wk = a.next_uid;
        this.zk = !1;
        e = 0;
        for (d = this.Cm.length; e < d; ++e) l = this.Cm[e],
        this.trigger(Object.getPrototypeOf(l.type.sb).K.Vj, l);
        J(this.Cm);
        this.Yf.od(b.system);
        e = 0;
        for (d = this.fa.length; e < d; e++) if (f = this.fa[e], !f.qa && !this.Wq(f)) for (b = 0, k = f.F.length; b < k; b++) {
            l = f.F[b];
            if (f.Jd) for (m = l.rk(), J(l.siblings), a = 0, g = f.Vd.length; a < g; a++) n = f.Vd[a],
            f !== n && l.siblings.push(n.F[m]);
            l.Bf && l.Bf();
            if (l.Ea) for (a = 0, g = l.Ea.length; a < g; a++) m = l.Ea[a],
            m.Bf && m.Bf()
        }
        return this.kb = !0
    };
    a.prototype.Eq = function(a, b) {
        var c, e, d, k, f;
        k = a.type;
        d = k.sb;
        var l = {};
        b ? l.c2 = !0 : l.uid = a.uid;
        kb(a.ca) && (l.ex = g(a.ca));
        if (a.Bc && a.Bc.length) for (l.ivs = {},
        c = 0, e = a.Bc.length; c < e; c++) l.ivs[a.type.yp[c].toString()] = a.Bc[c];
        if (d.oh) {
            d = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.W.Za,
                zi: a.Nf()
            };
            0 !== a.O && (d.a = a.O);
            1 !== a.opacity && (d.o = a.opacity);.5 !== a.vd && (d.hX = a.vd);.5 !== a.wd && (d.hY = a.wd);
            0 !== a.hd && (d.bm = a.hd);
            a.visible || (d.v = a.visible);
            a.Fe || (d.ce = a.Fe); - 1 !== a.zj && (d.mts = a.zj);
            if (k.Fa.length) for (d.fx = [], c = 0, e = k.Fa.length; c < e; c++) f = k.Fa[c],
            d.fx.push({
                name: f.name,
                active: a.Wg[f.index],
                params: a.Lb[f.index]
            });
            l.w = d
        }
        if (a.Ea && a.Ea.length) for (l.behs = {},
        c = 0, e = a.Ea.length; c < e; c++) k = a.Ea[c],
        k.Rc && (l.behs[k.type.Za.toString()] = k.Rc());
        a.Rc && (l.data = a.Rc());
        return l
    };
    a.prototype.yz = function(a, b) {
        var c, e;
        c = 0;
        for (e = a.yp.length; c < e; c++) if (a.yp[c] === b) return c;
        return - 1
    };
    a.prototype.sz = function(a, b) {
        var c, e;
        c = 0;
        for (e = a.Ea.length; c < e; c++) if (a.Ea[c].type.Za === b) return c;
        return - 1
    };
    a.prototype.gn = function(a, b, c) {
        var e, d, k, g, f;
        f = a.type;
        var l = f.sb;
        if (c) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.ca = b.ex: lb(a.ca);
        if (d = b.ivs) for (e in d) d.hasOwnProperty(e) && (k = this.yz(f, parseInt(e, 10)), 0 > k || k >= a.Bc.length || (g = d[e], null === g && (g = NaN), a.Bc[k] = g));
        if (l.oh) {
            k = b.w;
            a.W.Za !== k.l && (d = a.W, a.W = this.Xa.Nm(k.l), a.W ? (d.Fj(a, !0), a.W.$j(a, !0), a.La(), a.W.kl(0)) : (a.W = d, c || this.Sg(a)));
            a.x = k.x;
            a.y = k.y;
            a.width = k.w;
            a.height = k.h;
            a.uf = k.zi;
            a.O = k.hasOwnProperty("a") ? k.a: 0;
            a.opacity = k.hasOwnProperty("o") ? k.o: 1;
            a.vd = k.hasOwnProperty("hX") ? k.hX: .5;
            a.wd = k.hasOwnProperty("hY") ? k.hY: .5;
            a.visible = k.hasOwnProperty("v") ? k.v: !0;
            a.Fe = k.hasOwnProperty("ce") ? k.ce: !0;
            a.zj = k.hasOwnProperty("mts") ? k.mts: -1;
            a.hd = k.hasOwnProperty("bm") ? k.bm: 0;
            a.ck = Gb(a.hd);
            this.ka && Lb(a, a.hd, this.ka);
            a.La();
            if (k.hasOwnProperty("fx")) for (c = 0, d = k.fx.length; c < d; c++) g = f.kp(k.fx[c].name),
            0 > g || (a.Wg[g] = k.fx[c].active, a.Lb[g] = k.fx[c].params);
            a.rf()
        }
        if (f = b.behs) for (e in f) f.hasOwnProperty(e) && (c = this.sz(a, parseInt(e, 10)), 0 > c || a.Ea[c].od(f[e]));
        b.data && a.od(b.data)
    };
    a.prototype.vs = function(a, b, c) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a,
        function(a) {
            a.file(b, c)
        },
        c)
    };
    a.prototype.kz = function(a, b) {
        this.vs("data.js",
        function(c) {
            var e = new FileReader;
            e.onload = function(b) {
                a(b.target.result)
            };
            e.onerror = b;
            e.readAsText(c)
        },
        b)
    };
    var V = [],
    H = 0;
    a.prototype.bq = function() {
        if (V.length && !(8 <= H)) {
            H++;
            var a = V.shift();
            this.cy(a.filename, a.DB, a.Hy)
        }
    };
    a.prototype.ws = function(a, b, c) {
        var e = this;
        V.push({
            filename: a,
            DB: function(a) {
                H--;
                e.bq();
                b(a)
            },
            Hy: function(a) {
                H--;
                e.bq();
                c(a)
            }
        });
        this.bq()
    };
    a.prototype.cy = function(a, b, c) {
        this.vs(a,
        function(a) {
            var c = new FileReader;
            c.onload = function(a) {
                b(a.target.result)
            };
            c.readAsArrayBuffer(a)
        },
        c)
    };
    a.prototype.lz = function(a, b, c) {
        var e = "",
        d = a.toLowerCase(),
        k = d.substr(d.length - 4),
        d = d.substr(d.length - 5);
        ".mp4" === k ? e = "video/mp4": ".webm" === d ? e = "video/webm": ".m4a" === k ? e = "audio/mp4": ".mp3" === k && (e = "audio/mpeg");
        this.ws(a,
        function(a) {
            a = URL.createObjectURL(new Blob([a], {
                type: e
            }));
            b(a)
        },
        c)
    };
    a.prototype.cA = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    a.prototype.Eu = function(a, b) {
        this.Xm && !this.cA(b) ? this.lz(b,
        function(b) {
            a.src = b
        },
        function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = b
    };
    a.prototype.Pn = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b: (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    Bc = function(b) {
        return new a(document.getElementById(b))
    };
    Ec = function(b, c) {
        return new a({
            dc: !0,
            width: b,
            height: c
        })
    };
    window.cr_createRuntime = Bc;
    window.cr_createDCRuntime = Ec;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var b = document.createElement("screencanvas") || document.createElement("canvas");
        b.j = !0;
        document.body.appendChild(b);
        b = new a(b);
        window.c2runtime = b;
        window.addEventListener("orientationchange",
        function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return b
    };
    window.createEjectaRuntime = function() {
        var b = new a(document.getElementById("canvas"));
        window.c2runtime = b;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return b
    }
})();
window.cr_getC2Runtime = function() {
    var a = document.getElementById("c2canvas");
    return a ? a.c2runtime: window.c2runtime ? window.c2runtime: null
};
window.cr_getSnapshot = function(a, c) {
    var b = window.cr_getC2Runtime();
    b && b.Zx(a, c)
};
window.cr_sizeCanvas = function(a, c) {
    if (0 !== a && 0 !== c) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(a, c)
    }
};
window.cr_setSuspended = function(a) {
    var c = window.cr_getC2Runtime();
    c && c.setSuspended(a)
}; (function() {
    function a(a, b) {
        this.c = a;
        this.Wh = null;
        this.scrollX = this.c.Fc / 2;
        this.scrollY = this.c.Ec / 2;
        this.scale = 1;
        this.O = 0;
        this.$i = !0;
        this.name = b[0];
        this.KA = b[1];
        this.JA = b[2];
        this.width = b[1];
        this.height = b[2];
        this.bv = b[3];
        this.Ju = b[4];
        this.Za = b[5];
        var c = b[6],
        e,
        d;
        this.Ka = [];
        this.wk = [];
        e = 0;
        for (d = c.length; e < d; e++) {
            var g = new Mc(this, c[e]);
            g.Nt = e;
            this.Ka.push(g)
        }
        c = b[7];
        this.mh = [];
        e = 0;
        for (d = c.length; e < d; e++) {
            var g = c[e],
            f = this.c.fa[g[1]];
            f.Je || (f.Je = g);
            this.mh.push(g); - 1 === this.wk.indexOf(f) && this.wk.push(f)
        }
        this.Fa = [];
        this.nb = [];
        this.Gg = !0;
        this.Lb = [];
        e = 0;
        for (d = b[8].length; e < d; e++) this.Fa.push({
            id: b[8][e][0],
            name: b[8][e][1],
            mc: -1,
            mf: !1,
            gc: !0,
            index: e
        }),
        this.Lb.push(b[8][e][2].slice(0));
        this.rf();
        this.el = new za(0, 0, 1, 1);
        this.vq = new za(0, 0, 1, 1);
        this.xh = {}
    }
    function c(a, b) {
        return a.uf - b.uf
    }
    function b(a, b) {
        this.Nc = a;
        this.c = a.c;
        this.F = [];
        this.scale = 1;
        this.O = 0;
        this.mg = !1;
        this.Kg = new za(0, 0, 0, 0);
        this.Xu = new Aa;
        this.Ab = this.xb = this.Bb = this.wb = 0;
        this.Ki = !1;
        this.Qg = -1;
        this.Po = 0;
        this.name = b[0];
        this.index = b[1];
        this.Za = b[2];
        this.visible = b[3];
        this.df = b[4];
        this.qf = b[5];
        this.Md = b[6];
        this.Ue = b[7];
        this.opacity = b[8];
        this.Em = b[9];
        this.Ae = b[10];
        this.le = b[11];
        this.hd = b[12];
        this.Cy = b[13];
        this.ck = "source-over";
        this.md = this.qd = 0;
        this.ed = null;
        this.wg = d();
        this.of = !0;
        this.oj = new za(0, 0, -1, -1);
        this.Xc = new za(0, 0, -1, -1);
        this.Ae && (this.ed = new Fb(this.c.Fc, this.c.Ec));
        this.Vf = !1;
        var c = b[14],
        e,
        g;
        this.Pu = [];
        this.se = [];
        this.fk = [];
        e = 0;
        for (g = c.length; e < g; e++) {
            var f = c[e],
            l = this.c.fa[f[1]];
            l.Je || (l.Je = f, l.Xx = this.index);
            this.se.push(f); - 1 === this.Nc.wk.indexOf(l) && this.Nc.wk.push(l)
        }
        Ja(this.Pu, this.se);
        this.Fa = [];
        this.nb = [];
        this.Gg = !0;
        this.Lb = [];
        e = 0;
        for (g = b[15].length; e < g; e++) this.Fa.push({
            id: b[15][e][0],
            name: b[15][e][1],
            mc: -1,
            mf: !1,
            gc: !0,
            index: e
        }),
        this.Lb.push(b[15][e][2].slice(0));
        this.rf();
        this.el = new za(0, 0, 1, 1);
        this.vq = new za(0, 0, 1, 1)
    }
    function d() {
        return g.length ? g.pop() : []
    }
    function f(a) {
        J(a);
        g.push(a)
    }
    a.prototype.oB = function(a) {
        var b = a.type.Za.toString();
        this.xh.hasOwnProperty(b) || (this.xh[b] = []);
        this.xh[b].push(this.c.Eq(a))
    };
    a.prototype.Ms = function() {
        var a = this.Ka[0];
        return ! a.qf && 1 === a.opacity && !a.Em && a.visible
    };
    a.prototype.rf = function() {
        J(this.nb);
        this.Gg = !0;
        var a, b, c;
        a = 0;
        for (b = this.Fa.length; a < b; a++) c = this.Fa[a],
        c.gc && (this.nb.push(c), c.mf || (this.Gg = !1))
    };
    a.prototype.jp = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.Fa.length; b < c; b++) if (e = this.Fa[b], e.name === a) return e;
        return null
    };
    var h = [],
    e = !0;
    a.prototype.Mq = function() {
        this.Ju && (this.Wh = this.c.Zo[this.Ju], this.Wh.Yq());
        this.c.Xa = this;
        this.width = this.KA;
        this.height = this.JA;
        this.scrollX = this.c.Fc / 2;
        this.scrollY = this.c.Ec / 2;
        var a, b, d, g, f, l, p;
        a = 0;
        for (d = this.c.fa.length; a < d; a++) if (b = this.c.fa[a], !b.qa) for (f = b.F, b = 0, g = f.length; b < g; b++) if (l = f[b], l.W) {
            var r = l.W.Nt;
            r >= this.Ka.length && (r = this.Ka.length - 1);
            l.W = this.Ka[r]; - 1 === l.W.F.indexOf(l) && l.W.F.push(l);
            l.W.Ki = !0
        }
        if (!e) for (a = 0, d = this.Ka.length; a < d; ++a) this.Ka[a].F.sort(c);
        J(h);
        this.Ix();
        a = 0;
        for (d = this.Ka.length; a < d; a++) l = this.Ka[a],
        l.Wx(),
        l.lo();
        f = !1;
        if (!this.$i) {
            for (p in this.xh) if (this.xh.hasOwnProperty(p) && (b = this.c.Om(parseInt(p, 10))) && !b.qa && this.c.Xq(b)) {
                g = this.xh[p];
                a = 0;
                for (d = g.length; a < d; a++) {
                    l = null;
                    if (b.sb.oh && (l = this.Nm(g[a].w.l), !l)) continue;
                    l = this.c.fh(b.Je, l, !1, 0, 0, !0);
                    this.c.gn(l, g[a]);
                    f = !0;
                    h.push(l)
                }
                J(g)
            }
            a = 0;
            for (d = this.Ka.length; a < d; a++) this.Ka[a].F.sort(c),
            this.Ka[a].Ki = !0
        }
        f && (this.c.gd(), this.c.tu());
        for (a = 0; a < h.length; a++) if (l = h[a], l.type.Jd) for (d = l.rk(), b = 0, g = l.type.Vd.length; b < g; b++) p = l.type.Vd[b],
        l.type !== p && (p.F.length > d ? l.siblings.push(p.F[d]) : p.Je && (f = this.c.fh(p.Je, l.W, !0, l.x, l.y, !0), this.c.gd(), p.jo(), l.siblings.push(f), h.push(f)));
        a = 0;
        for (d = this.mh.length; a < d; a++) l = this.mh[a],
        b = this.c.fa[l[1]],
        b.Jd || this.c.fh(this.mh[a], null, !0);
        this.c.ig = null;
        this.c.gd();
        if (this.c.Ib && !this.c.Zb) for (a = 0, d = this.c.fa.length; a < d; a++) p = this.c.fa[a],
        !p.qa && p.F.length && p.En && p.En(this.c.Ib);
        if (this.c.zk) Ja(this.c.Cm, h);
        else for (a = 0, d = h.length; a < d; a++) l = h[a],
        this.c.trigger(Object.getPrototypeOf(l.type.sb).K.Vj, l);
        J(h);
        this.c.zk || this.c.trigger(R.prototype.K.sr, null);
        this.$i = !1
    };
    a.prototype.Vx = function() {
        var a, b, c, e, d;
        b = a = 0;
        for (c = this.mh.length; a < c; a++) e = this.mh[a],
        d = this.c.fa[e[1]],
        d.global ? d.Jd || this.c.fh(e, null, !0) : (this.mh[b] = e, b++);
        Ha(this.mh, b)
    };
    a.prototype.CB = function() {
        this.c.zk || this.c.trigger(R.prototype.K.qw, null);
        this.c.Bp = !0;
        J(this.c.Yf.Qd);
        var a, b, c, d, g, f;
        if (!this.$i) for (a = 0, b = this.Ka.length; a < b; a++) for (this.Ka[a].$q(), g = this.Ka[a].F, c = 0, d = g.length; c < d; c++) f = g[c],
        f.type.global || this.c.Xq(f.type) && this.oB(f);
        a = 0;
        for (b = this.Ka.length; a < b; a++) {
            g = this.Ka[a].F;
            c = 0;
            for (d = g.length; c < d; c++) f = g[c],
            f.type.global || this.c.Sg(f);
            this.c.gd();
            J(g);
            this.Ka[a].Ki = !0
        }
        a = 0;
        for (b = this.c.fa.length; a < b; a++) if (g = this.c.fa[a], !(g.global || g.sb.oh || g.sb.Un || g.qa)) {
            c = 0;
            for (d = g.F.length; c < d; c++) this.c.Sg(g.F[c]);
            this.c.gd()
        }
        e = !1;
        this.c.Bp = !1
    };
    new za(0, 0, 0, 0);
    a.prototype.If = function(a) {
        var b, c = a,
        e = !1,
        d = !this.c.pe;
        d && (this.c.dn || (this.c.dn = document.createElement("canvas"), b = this.c.dn, b.width = this.c.xa, b.height = this.c.wa, this.c.ht = b.getContext("2d"), e = !0), b = this.c.dn, c = this.c.ht, b.width !== this.c.xa && (b.width = this.c.xa, e = !0), b.height !== this.c.wa && (b.height = this.c.wa, e = !0), e && this.c.Pn(c, this.c.Eb));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.c.as && !this.Ms() && c.clearRect(0, 0, this.c.xa, this.c.wa);
        var g, f, e = 0;
        for (g = this.Ka.length; e < g; e++) f = this.Ka[e],
        f.visible && 0 < f.opacity && 11 !== f.hd && (f.F.length || !f.qf) ? f.If(c) : f.lo();
        d && a.drawImage(b, 0, 0, this.c.width, this.c.height)
    };
    a.prototype.Sh = function(a) {
        a.Cu(!0);
        this.c.jc || (this.c.jc = a.He(this.c.xa, this.c.wa, this.c.Eb));
        if (this.c.jc.Oh !== this.c.xa || this.c.jc.Nh !== this.c.wa) a.deleteTexture(this.c.jc),
        this.c.jc = a.He(this.c.xa, this.c.wa, this.c.Eb);
        a.Ve(this.c.jc);
        this.c.pe || a.Fg(this.c.xa, this.c.wa);
        var b, c;
        for (b = this.Ka.length - 1; 0 <= b; --b) c = this.Ka[b],
        c.visible && 1 === c.opacity && c.Gg && 0 === c.hd && (c.F.length || !c.qf) ? c.Sh(a) : c.lo();
        a.Cu(!1)
    };
    a.prototype.Gd = function(a) {
        var b = 0 < this.nb.length || this.c.Oj || !this.c.pe || this.c.Db;
        if (b) {
            this.c.jc || (this.c.jc = a.He(this.c.xa, this.c.wa, this.c.Eb));
            if (this.c.jc.Oh !== this.c.xa || this.c.jc.Nh !== this.c.wa) a.deleteTexture(this.c.jc),
            this.c.jc = a.He(this.c.xa, this.c.wa, this.c.Eb);
            a.Ve(this.c.jc);
            this.c.pe || a.Fg(this.c.xa, this.c.wa)
        } else this.c.jc && (a.Ve(null), a.deleteTexture(this.c.jc), this.c.jc = null);
        this.c.as && !this.Ms() && a.clear(0, 0, 0, 0);
        var c, e, d;
        c = 0;
        for (e = this.Ka.length; c < e; c++) d = this.Ka[c],
        d.visible && 0 < d.opacity && (d.F.length || !d.qf) ? d.Gd(a) : d.lo();
        b && (0 === this.nb.length || 1 === this.nb.length && this.c.pe ? (1 === this.nb.length ? (b = this.nb[0].index, a.Pd(this.nb[0].mc), a.Ij(null, 1 / this.c.xa, 1 / this.c.wa, 0, 0, 1, 1, this.scale, this.O, 0, 0, this.c.xa / 2, this.c.wa / 2, this.c.Mc.Ga, this.Lb[b]), a.Fn(this.nb[0].mc) && (this.c.kb = !0)) : a.Pd(0), this.c.pe || a.Fg(this.c.width, this.c.height), a.Ve(null), a.Bu(!1), a.Ci(1), a.ke(this.c.jc), a.zu(), a.Wf(), a.sf(), b = this.c.width / 2, c = this.c.height / 2, a.dl( - b, c, b, c, b, -c, -b, -c), a.ke(null), a.Bu(!0)) : this.yq(a, null, null, null))
    };
    a.prototype.pk = function() {
        return 0 < this.nb.length || this.c.Oj || !this.c.pe || this.c.Db ? this.c.jc: null
    };
    a.prototype.Js = function() {
        var a = this.Ka[0].Ne(),
        b,
        c,
        e;
        b = 1;
        for (c = this.Ka.length; b < c; b++) e = this.Ka[b],
        (0 !== e.Md || 0 !== e.Ue) && e.Ne() < a && (a = e.Ne());
        return a
    };
    a.prototype.il = function(a) {
        if (!this.bv) {
            var b = 1 / this.Js() * this.c.xa / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.c.kb = !0)
    };
    a.prototype.Mn = function(a) {
        if (!this.bv) {
            var b = 1 / this.Js() * this.c.wa / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.c.kb = !0)
    };
    a.prototype.Ix = function() {
        this.il(this.scrollX);
        this.Mn(this.scrollY)
    };
    a.prototype.yq = function(a, b, c, e) {
        var d = c ? c.nb: b ? b.nb: this.nb,
        g = 1,
        f = 0,
        l = 0,
        h = 0,
        p = this.c.xa,
        A = this.c.wa;
        c ? (g = c.W.Ne(), f = c.W.$c(), l = c.W.wb, h = c.W.xb, p = c.W.Bb, A = c.W.Ab) : b && (g = b.Ne(), f = b.$c(), l = b.wb, h = b.xb, p = b.Bb, A = b.Ab);
        var E = this.c.gp,
        F, B, z, w, G = 0,
        S = 1,
        P, Q, I = this.c.xa,
        D = this.c.wa,
        V = I / 2,
        H = D / 2,
        M = b ? b.el: this.el,
        N = b ? b.vq: this.vq,
        T = 0,
        O = 0,
        K = 0,
        U = 0,
        aa = I,
        Oa = I,
        ba = D,
        Pa = D,
        Ba = z = 0;
        w = c ? c.W.$c() : 0;
        if (c) {
            F = 0;
            for (B = d.length; F < B; F++) z += a.Cz(d[F].mc),
            Ba += a.Dz(d[F].mc);
            U = c.Vb;
            T = b.xd(U.left, U.top, !0, !0);
            K = b.xd(U.left, U.top, !1, !0);
            aa = b.xd(U.right, U.bottom, !0, !0);
            ba = b.xd(U.right, U.bottom, !1, !0);
            0 !== w && (F = b.xd(U.right, U.top, !0, !0), B = b.xd(U.right, U.top, !1, !0), O = b.xd(U.left, U.bottom, !0, !0), U = b.xd(U.left, U.bottom, !1, !0), w = Math.min(T, aa, F, O), aa = Math.max(T, aa, F, O), T = w, w = Math.min(K, ba, B, U), ba = Math.max(K, ba, B, U), K = w);
            T -= z;
            K -= Ba;
            aa += z;
            ba += Ba;
            N.left = T / I;
            N.top = 1 - K / D;
            N.right = aa / I;
            N.bottom = 1 - ba / D;
            O = T = va(T);
            U = K = va(K);
            Oa = aa = xa(aa);
            Pa = ba = xa(ba);
            O -= z;
            U -= Ba;
            Oa += z;
            Pa += Ba;
            0 > T && (T = 0);
            0 > K && (K = 0);
            aa > I && (aa = I);
            ba > D && (ba = D);
            0 > O && (O = 0);
            0 > U && (U = 0);
            Oa > I && (Oa = I);
            Pa > D && (Pa = D);
            M.left = T / I;
            M.top = 1 - K / D;
            M.right = aa / I;
            M.bottom = 1 - ba / D
        } else M.left = N.left = 0,
        M.top = N.top = 0,
        M.right = N.right = 1,
        M.bottom = N.bottom = 1;
        Ba = c && (a.bl(d[0].mc) || 0 !== z || 0 !== Ba || 1 !== c.opacity || c.type.sb.It) || b && !c && 1 !== b.opacity;
        a.zu();
        if (Ba) {
            E[G] || (E[G] = a.He(I, D, this.c.Eb));
            if (E[G].Oh !== I || E[G].Nh !== D) a.deleteTexture(E[G]),
            E[G] = a.He(I, D, this.c.Eb);
            a.Pd(0);
            a.Ve(E[G]);
            Q = Pa - U;
            a.clearRect(O, D - U - Q, Oa - O, Q);
            c ? c.Gd(a) : (a.ke(this.c.Cc), a.Ci(b.opacity), a.Wf(), a.translate( - V, -H), a.sf(), a.Uf(T, ba, aa, ba, aa, K, T, K, M));
            N.left = N.top = 0;
            N.right = N.bottom = 1;
            c && (w = M.top, M.top = M.bottom, M.bottom = w);
            G = 1;
            S = 0
        }
        a.Ci(1);
        z = d.length - 1;
        var Cb = a.tq(d[z].mc) || !b && !c && !this.c.pe;
        F = w = 0;
        for (B = d.length; F < B; F++) {
            E[G] || (E[G] = a.He(I, D, this.c.Eb));
            if (E[G].Oh !== I || E[G].Nh !== D) a.deleteTexture(E[G]),
            E[G] = a.He(I, D, this.c.Eb);
            a.Pd(d[F].mc);
            w = d[F].index;
            a.Fn(d[F].mc) && (this.c.kb = !0);
            0 != F || Ba ? (a.Ij(e, 1 / I, 1 / D, N.left, N.top, N.right, N.bottom, g, f, l, h, (l + p) / 2, (h + A) / 2, this.c.Mc.Ga, c ? c.Lb[w] : b ? b.Lb[w] : this.Lb[w]), a.ke(null), F !== z || Cb ? (a.Ve(E[G]), Q = Pa - U, P = D - U - Q, a.clearRect(O, P, Oa - O, Q)) : (c ? a.zh(c.qd, c.md) : b && a.zh(b.qd, b.md), a.Ve(e)), a.ke(E[S]), a.Wf(), a.translate( - V, -H), a.sf(), a.Uf(T, ba, aa, ba, aa, K, T, K, M), F !== z || Cb || a.ke(null)) : (a.Ve(E[G]), Q = Pa - U, P = D - U - Q, a.clearRect(O, P, Oa - O, Q), c ? (c.Wc && c.Wc.ra ? (P = c.Wc.ra, S = 1 / P.width, P = 1 / P.height) : (S = 1 / c.width, P = 1 / c.height), a.Ij(e, S, P, N.left, N.top, N.right, N.bottom, g, f, l, h, (l + p) / 2, (h + A) / 2, this.c.Mc.Ga, c.Lb[w]), c.Gd(a)) : (a.Ij(e, 1 / I, 1 / D, 0, 0, 1, 1, g, f, l, h, (l + p) / 2, (h + A) / 2, this.c.Mc.Ga, b ? b.Lb[w] : this.Lb[w]), a.ke(b ? this.c.Cc: this.c.jc), a.Wf(), a.translate( - V, -H), a.sf(), a.Uf(T, ba, aa, ba, aa, K, T, K, M)), N.left = N.top = 0, N.right = N.bottom = 1, c && !Cb && (w = ba, ba = K, K = w));
            G = 0 === G ? 1 : 0;
            S = 0 === G ? 1 : 0
        }
        Cb && (a.Pd(0), c ? a.zh(c.qd, c.md) : b ? a.zh(b.qd, b.md) : this.c.pe || (a.Fg(this.c.width, this.c.height), V = this.c.width / 2, H = this.c.height / 2, K = T = 0, aa = this.c.width, ba = this.c.height), a.Ve(e), a.ke(E[S]), a.Wf(), a.translate( - V, -H), a.sf(), c && 1 === d.length && !Ba ? a.Uf(T, K, aa, K, aa, ba, T, ba, M) : a.Uf(T, ba, aa, ba, aa, K, T, K, M), a.ke(null))
    };
    a.prototype.Nm = function(a) {
        var b, c;
        b = 0;
        for (c = this.Ka.length; b < c; b++) if (this.Ka[b].Za === a) return this.Ka[b];
        return null
    };
    a.prototype.Rc = function() {
        var a, b, c, e = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.O,
            w: this.width,
            h: this.height,
            fv: this.$i,
            persist: this.xh,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.Fa.length; a < b; a++) c = this.Fa[a],
        e.fx.push({
            name: c.name,
            active: c.gc,
            params: this.Lb[c.index]
        });
        a = 0;
        for (b = this.Ka.length; a < b; a++) c = this.Ka[a],
        e.layers[c.Za.toString()] = c.Rc();
        return e
    };
    a.prototype.od = function(a) {
        var b, c, e, d;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.O = a.a;
        this.width = a.w;
        this.height = a.h;
        this.xh = a.persist;
        "undefined" !== typeof a.fv && (this.$i = a.fv);
        var g = a.fx;
        b = 0;
        for (c = g.length; b < c; b++) if (e = this.jp(g[b].name)) e.gc = g[b].active,
        this.Lb[e.index] = g[b].params;
        this.rf();
        b = a.layers;
        for (d in b) b.hasOwnProperty(d) && (a = this.Nm(parseInt(d, 10))) && a.od(b[d])
    };
    pc = a;
    b.prototype.rf = function() {
        J(this.nb);
        this.Gg = !0;
        var a, b, c;
        a = 0;
        for (b = this.Fa.length; a < b; a++) c = this.Fa[a],
        c.gc && (this.nb.push(c), c.mf || (this.Gg = !1))
    };
    b.prototype.jp = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.Fa.length; b < c; b++) if (e = this.Fa[b], e.name === a) return e;
        return null
    };
    b.prototype.Wx = function() {
        var a, b, c, e, d, g;
        b = a = 0;
        for (c = this.se.length; a < c; a++) {
            e = this.se[a];
            d = this.c.fa[e[1]];
            g = this.c.Xq(d);
            d = !0;
            if (!g || this.Nc.$i) {
                e = this.c.fh(e, this, !0);
                if (!e) continue;
                h.push(e);
                e.type.global && (d = !1, this.fk.push(e.uid))
            }
            d && (this.se[b] = this.se[a], b++)
        }
        this.se.length = b;
        this.c.gd(); ! this.c.ga && this.Fa.length && (this.hd = this.Cy);
        this.ck = Gb(this.hd);
        this.c.ka && Lb(this, this.hd, this.c.ka);
        this.of = !0
    };
    b.prototype.Fj = function(a, b) {
        var c = Ma(this.F, a);
        0 > c || (b && this.Ae && a.Nd && a.Nd.right >= a.Nd.left && (a.mb(), this.ed.update(a, a.Nd, null), a.Nd.set(0, 0, -1, -1)), c === this.F.length - 1 ? this.F.pop() : (Ga(this.F, c), this.kl(c)), this.of = !0)
    };
    b.prototype.$j = function(a, b) {
        a.uf = this.F.length;
        this.F.push(a);
        b && this.Ae && a.Nd && a.La();
        this.of = !0
    };
    b.prototype.SA = function(a) {
        this.F.unshift(a);
        this.kl(0)
    };
    b.prototype.yA = function(a, b, c) {
        var e = a.Nf();
        b = b.Nf();
        Ga(this.F, e);
        e < b && b--;
        c && b++;
        b === this.F.length ? this.F.push(a) : this.F.splice(b, 0, a);
        this.kl(e < b ? e: b)
    };
    b.prototype.kl = function(a) { - 1 === this.Qg ? this.Qg = a: a < this.Qg && (this.Qg = a);
        this.of = this.Ki = !0
    };
    b.prototype.$q = function() {
        if (this.Ki) { - 1 === this.Qg && (this.Qg = 0);
            var a, b, c;
            if (this.Ae) for (a = this.Qg, b = this.F.length; a < b; ++a) c = this.F[a],
            c.uf = a,
            this.ed.vA(c.Nd);
            else for (a = this.Qg, b = this.F.length; a < b; ++a) this.F[a].uf = a;
            this.Ki = !1;
            this.Qg = -1
        }
    };
    b.prototype.Ne = function(a) {
        return this.zz() * (this.c.pe || a ? this.c.ak: 1)
    };
    b.prototype.zz = function() {
        return (this.scale * this.Nc.scale - 1) * this.le + 1
    };
    b.prototype.$c = function() {
        return this.mg ? 0 : Ua(this.Nc.O + this.O)
    };
    var g = [],
    l = [],
    p = [];
    b.prototype.np = function() {
        this.$q();
        this.ed.Hn(this.wb, this.xb, this.Bb, this.Ab, p);
        if (!p.length) return d();
        if (1 === p.length) {
            var a = d();
            Ja(a, p[0]);
            J(p);
            return a
        }
        for (var b = !0; 1 < p.length;) {
            for (var a = p,
            c = void 0,
            e = void 0,
            g = void 0,
            h = void 0,
            v = void 0,
            c = 0,
            e = a.length; c < e - 1; c += 2) {
                var g = a[c],
                h = a[c + 1],
                v = d(),
                r = g,
                y = h,
                C = v,
                A = 0,
                E = 0,
                F = 0,
                B = r.length,
                z = y.length,
                w = void 0,
                G = void 0;
                for (C.length = B + z; A < B && E < z; ++F) w = r[A],
                G = y[E],
                w.uf < G.uf ? (C[F] = w, ++A) : (C[F] = G, ++E);
                for (; A < B; ++A, ++F) C[F] = r[A];
                for (; E < z; ++E, ++F) C[F] = y[E];
                b || (f(g), f(h));
                l.push(v)
            }
            1 === e % 2 && (b ? (g = d(), Ja(g, a[e - 1]), l.push(g)) : l.push(a[e - 1]));
            Ja(a, l);
            J(l);
            b = !1
        }
        a = p[0];
        J(p);
        return a
    };
    b.prototype.If = function(a) {
        this.Vf = this.Em || 1 !== this.opacity || 0 !== this.hd;
        var b = this.c.canvas,
        c = a,
        e = !1;
        this.Vf && (this.c.cn || (this.c.cn = document.createElement("canvas"), b = this.c.cn, b.width = this.c.xa, b.height = this.c.wa, this.c.gt = b.getContext("2d"), e = !0), b = this.c.cn, c = this.c.gt, b.width !== this.c.xa && (b.width = this.c.xa, e = !0), b.height !== this.c.wa && (b.height = this.c.wa, e = !0), e && this.c.Pn(c, this.c.Eb), this.qf && c.clearRect(0, 0, this.c.xa, this.c.wa));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.qf || (c.fillStyle = "rgb(" + this.df[0] + "," + this.df[1] + "," + this.df[2] + ")", c.fillRect(0, 0, this.c.xa, this.c.wa));
        c.save();
        this.mg = !0;
        var e = this.uc(0, 0, !0, !0),
        d = this.uc(0, 0, !1, !0);
        this.mg = !1;
        this.c.lf && (e = Math.round(e), d = Math.round(d));
        this.Jn(e, d, c);
        var g = this.Ne();
        c.scale(g, g);
        c.translate( - e, -d);
        this.Ae ? (this.Xc.left = this.ed.Dd(this.wb), this.Xc.top = this.ed.Ed(this.xb), this.Xc.right = this.ed.Dd(this.Bb), this.Xc.bottom = this.ed.Ed(this.Ab), this.of || !this.Xc.hk(this.oj) ? (f(this.wg), e = this.np(), this.of = !1, this.oj.dk(this.Xc)) : e = this.wg) : e = this.F;
        for (var l, h = null,
        d = 0,
        g = e.length; d < g; ++d) l = e[d],
        l !== h && (this.xy(l, c), h = l);
        this.Ae && (this.wg = e);
        c.restore();
        this.Vf && (a.globalCompositeOperation = this.ck, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    b.prototype.xy = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.mb();
            var c = a.Vb;
            c.right < this.wb || c.bottom < this.xb || c.left > this.Bb || c.top > this.Ab || (b.globalCompositeOperation = a.ck, a.If(b))
        }
    };
    b.prototype.lo = function() {
        this.mg = !0;
        var a = this.uc(0, 0, !0, !0),
        b = this.uc(0, 0, !1, !0);
        this.mg = !1;
        this.c.lf && (a = Math.round(a), b = Math.round(b));
        this.Jn(a, b, null)
    };
    b.prototype.Jn = function(a, b, c) {
        var e = this.Ne();
        this.wb = a;
        this.xb = b;
        this.Bb = a + 1 / e * this.c.xa;
        this.Ab = b + 1 / e * this.c.wa;
        this.wb > this.Bb && (a = this.wb, this.wb = this.Bb, this.Bb = a);
        this.xb > this.Ab && (a = this.xb, this.xb = this.Ab, this.Ab = a);
        a = this.$c();
        0 !== a && (c && (c.translate(this.c.xa / 2, this.c.wa / 2), c.rotate( - a), c.translate(this.c.xa / -2, this.c.wa / -2)), this.Kg.set(this.wb, this.xb, this.Bb, this.Ab), this.Kg.offset((this.wb + this.Bb) / -2, (this.xb + this.Ab) / -2), this.Xu.Hu(this.Kg, a), this.Xu.Wr(this.Kg), this.Kg.offset((this.wb + this.Bb) / 2, (this.xb + this.Ab) / 2), this.wb = this.Kg.left, this.xb = this.Kg.top, this.Bb = this.Kg.right, this.Ab = this.Kg.bottom)
    };
    b.prototype.Sh = function(a) {
        if (this.Vf = this.Em) {
            this.c.Cc || (this.c.Cc = a.He(this.c.xa, this.c.wa, this.c.Eb));
            if (this.c.Cc.Oh !== this.c.xa || this.c.Cc.Nh !== this.c.wa) a.deleteTexture(this.c.Cc),
            this.c.Cc = a.He(this.c.xa, this.c.wa, this.c.Eb);
            a.Ve(this.c.Cc)
        }
        this.mg = !0;
        var b = this.uc(0, 0, !0, !0),
        c = this.uc(0, 0, !1, !0);
        this.mg = !1;
        this.c.lf && (b = Math.round(b), c = Math.round(c));
        this.Jn(b, c, null);
        b = this.Ne();
        a.Wf();
        a.scale(b, b);
        a.Bq( - this.$c());
        a.translate((this.wb + this.Bb) / -2, (this.xb + this.Ab) / -2);
        a.sf();
        this.Ae ? (this.Xc.left = this.ed.Dd(this.wb), this.Xc.top = this.ed.Ed(this.xb), this.Xc.right = this.ed.Dd(this.Bb), this.Xc.bottom = this.ed.Ed(this.Ab), this.of || !this.Xc.hk(this.oj) ? (f(this.wg), b = this.np(), this.of = !1, this.oj.dk(this.Xc)) : b = this.wg) : b = this.F;
        for (var e, d = null,
        c = b.length - 1; 0 <= c; --c) e = b[c],
        e !== d && (this.zy(b[c], a), d = e);
        this.Ae && (this.wg = b);
        this.qf || (this.Po = this.c.Uh++, a.Qn(this.Po), a.Au(1, 1, 1), a.zs(), a.hB())
    };
    b.prototype.Gd = function(a) {
        var b = 0,
        c = 0;
        if (this.Vf = this.Em || 1 !== this.opacity || 0 < this.nb.length || 0 !== this.hd) {
            this.c.Cc || (this.c.Cc = a.He(this.c.xa, this.c.wa, this.c.Eb));
            if (this.c.Cc.Oh !== this.c.xa || this.c.Cc.Nh !== this.c.wa) a.deleteTexture(this.c.Cc),
            this.c.Cc = a.He(this.c.xa, this.c.wa, this.c.Eb);
            a.Ve(this.c.Cc);
            this.qf && a.clear(0, 0, 0, 0)
        }
        this.qf || (this.c.Db ? (a.Qn(this.Po), a.Au(this.df[0] / 255, this.df[1] / 255, this.df[2] / 255), a.zs(), a.wB()) : a.clear(this.df[0] / 255, this.df[1] / 255, this.df[2] / 255, 1));
        this.mg = !0;
        var e = this.uc(0, 0, !0, !0),
        b = this.uc(0, 0, !1, !0);
        this.mg = !1;
        this.c.lf && (e = Math.round(e), b = Math.round(b));
        this.Jn(e, b, null);
        e = this.Ne();
        a.Wf();
        a.scale(e, e);
        a.Bq( - this.$c());
        a.translate((this.wb + this.Bb) / -2, (this.xb + this.Ab) / -2);
        a.sf();
        this.Ae ? (this.Xc.left = this.ed.Dd(this.wb), this.Xc.top = this.ed.Ed(this.xb), this.Xc.right = this.ed.Dd(this.Bb), this.Xc.bottom = this.ed.Ed(this.Ab), this.of || !this.Xc.hk(this.oj) ? (f(this.wg), b = this.np(), this.of = !1, this.oj.dk(this.Xc)) : b = this.wg) : b = this.F;
        var d, g, l = null,
        c = 0;
        for (d = b.length; c < d; ++c) g = b[c],
        g !== l && (this.yy(b[c], a), l = g);
        this.Ae && (this.wg = b);
        this.Vf && (b = this.nb.length ? this.nb[0].mc: 0, c = this.nb.length ? this.nb[0].index: 0, 0 === this.nb.length || 1 === this.nb.length && !a.tq(b) && 1 === this.opacity ? (1 === this.nb.length ? (a.Pd(b), a.Ij(this.Nc.pk(), 1 / this.c.xa, 1 / this.c.wa, 0, 0, 1, 1, e, this.$c(), this.wb, this.xb, (this.wb + this.Bb) / 2, (this.xb + this.Ab) / 2, this.c.Mc.Ga, this.Lb[c]), a.Fn(b) && (this.c.kb = !0)) : a.Pd(0), a.Ve(this.Nc.pk()), a.Ci(this.opacity), a.ke(this.c.Cc), a.zh(this.qd, this.md), a.Wf(), a.sf(), e = this.c.xa / 2, b = this.c.wa / 2, a.dl( - e, b, e, b, e, -b, -e, -b), a.ke(null)) : this.Nc.yq(a, this, null, this.Nc.pk()))
    };
    b.prototype.yy = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.mb();
            var c = a.Vb;
            c.right < this.wb || c.bottom < this.xb || c.left > this.Bb || c.top > this.Ab || (b.Qn(a.Uh), a.kv ? this.Ay(a, b) : (b.Pd(0), b.zh(a.qd, a.md), a.Gd(b)))
        }
    };
    b.prototype.zy = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.mb();
            var c = a.Vb;
            c.right < this.wb || c.bottom < this.xb || c.left > this.Bb || c.top > this.Ab || (a.Uh = this.c.Uh++, 0 === a.hd && 1 === a.opacity && a.Gg && a.Sh && (b.Qn(a.Uh), a.Sh(b)))
        }
    };
    b.prototype.Ay = function(a, b) {
        var c = a.nb[0].mc,
        e = a.nb[0].index,
        d = this.Ne();
        if (1 !== a.nb.length || b.tq(c) || b.UA(c) || (a.O || a.W.$c()) && b.bl(c) || 1 !== a.opacity || a.type.sb.It) this.Nc.yq(b, this, a, this.Vf ? this.c.Cc: this.Nc.pk()),
        b.Wf(),
        b.scale(d, d),
        b.Bq( - this.$c()),
        b.translate((this.wb + this.Bb) / -2, (this.xb + this.Ab) / -2),
        b.sf();
        else {
            b.Pd(c);
            b.zh(a.qd, a.md);
            b.Fn(c) && (this.c.kb = !0);
            var g = 0,
            f = 0,
            l = 0,
            h = 0;
            b.bl(c) && (h = a.Vb, g = this.xd(h.left, h.top, !0, !0), f = this.xd(h.left, h.top, !1, !0), l = this.xd(h.right, h.bottom, !0, !0), h = this.xd(h.right, h.bottom, !1, !0), g = g / windowWidth, f = 1 - f / windowHeight, l = l / windowWidth, h = 1 - h / windowHeight);
            var p;
            a.Wc && a.Wc.ra ? (p = a.Wc.ra, c = 1 / p.width, p = 1 / p.height) : (c = 1 / a.width, p = 1 / a.height);
            b.Ij(this.Vf ? this.c.Cc: this.Nc.pk(), c, p, g, f, l, h, d, this.$c(), this.wb, this.xb, (this.wb + this.Bb) / 2, (this.xb + this.Ab) / 2, this.c.Mc.Ga, a.Lb[e]);
            a.Gd(b)
        }
    };
    b.prototype.uc = function(a, b, c, e) {
        var d = this.c.devicePixelRatio;
        this.c.hi && (a *= d, b *= d);
        var d = this.c.gu,
        g = this.c.hu,
        d = (this.Nc.scrollX - d) * this.Md + d,
        g = (this.Nc.scrollY - g) * this.Ue + g,
        f = d,
        l = g,
        h = 1 / this.Ne(!e);
        e ? (f -= this.c.xa * h / 2, l -= this.c.wa * h / 2) : (f -= this.c.width * h / 2, l -= this.c.height * h / 2);
        f += a * h;
        l += b * h;
        b = this.$c();
        0 !== b && (f -= d, l -= g, a = Math.cos(b), b = Math.sin(b), e = f * a - l * b, l = l * a + f * b, f = e + d, l += g);
        return c ? f: l
    };
    b.prototype.xd = function(a, b, c, e) {
        var d = this.c.gu,
        g = this.c.hu,
        f = (this.Nc.scrollX - d) * this.Md + d,
        l = (this.Nc.scrollY - g) * this.Ue + g,
        g = f,
        d = l,
        h = this.$c();
        if (0 !== h) {
            a -= f;
            b -= l;
            var p = Math.cos( - h),
            h = Math.sin( - h),
            A = a * p - b * h;
            b = b * p + a * h;
            a = A + f;
            b += l
        }
        f = 1 / this.Ne(!e);
        e ? (g -= this.c.xa * f / 2, d -= this.c.wa * f / 2) : (g -= this.c.width * f / 2, d -= this.c.height * f / 2);
        g = (a - g) / f;
        d = (b - d) / f;
        a = this.c.devicePixelRatio;
        this.c.hi && !e && (g /= a, d /= a);
        return c ? g: d
    };
    b.prototype.Rc = function() {
        var a, b, c, e = {
            s: this.scale,
            a: this.O,
            vl: this.wb,
            vt: this.xb,
            vr: this.Bb,
            vb: this.Ab,
            v: this.visible,
            bc: this.df,
            t: this.qf,
            px: this.Md,
            py: this.Ue,
            o: this.opacity,
            zr: this.le,
            fx: [],
            cg: this.fk,
            instances: []
        };
        a = 0;
        for (b = this.Fa.length; a < b; a++) c = this.Fa[a],
        e.fx.push({
            name: c.name,
            active: c.gc,
            params: this.Lb[c.index]
        });
        return e
    };
    b.prototype.od = function(a) {
        var b, e, d;
        this.scale = a.s;
        this.O = a.a;
        this.wb = a.vl;
        this.xb = a.vt;
        this.Bb = a.vr;
        this.Ab = a.vb;
        this.visible = a.v;
        this.df = a.bc;
        this.qf = a.t;
        this.Md = a.px;
        this.Ue = a.py;
        this.opacity = a.o;
        this.le = a.zr;
        this.fk = a.cg || [];
        Ja(this.se, this.Pu);
        var g = new ea;
        b = 0;
        for (d = this.fk.length; b < d; ++b) g.add(this.fk[b]);
        e = b = 0;
        for (d = this.se.length; b < d; ++b) g.contains(this.se[b][2]) || (this.se[e] = this.se[b], ++e);
        Ha(this.se, e);
        e = a.fx;
        b = 0;
        for (d = e.length; b < d; b++) if (a = this.jp(e[b].name)) a.gc = e[b].active,
        this.Lb[a.index] = e[b].params;
        this.rf();
        this.F.sort(c);
        this.Ki = !0
    };
    Mc = b
})(); (function() {
    function a(a, b) {
        var c, e = a.length;
        switch (e) {
        case 0:
            return ! 0;
        case 1:
            return a[0] === b[0];
        case 2:
            return a[0] === b[0] && a[1] === b[1];
        default:
            for (c = 0; c < e; c++) if (a[c] !== b[c]) return ! 1;
            return ! 0
        }
    }
    function c(a, b) {
        return a.index - b.index
    }
    function b(b) {
        var e, d, g, f;
        2 === b.length ? b[0].index > b[1].index && (e = b[0], b[0] = b[1], b[1] = e) : 2 < b.length && b.sort(c);
        b.length >= t.length && (t.length = b.length + 1);
        t[b.length] || (t[b.length] = []);
        f = t[b.length];
        e = 0;
        for (d = f.length; e < d; e++) if (g = f[e], a(b, g)) return g;
        f.push(b);
        return b
    }
    function d(a, b) {
        this.c = a;
        this.Zu = {};
        this.us = {};
        this.sp = !1;
        this.Ps = new ea;
        this.Uo = [];
        this.Fo = [];
        this.name = b[0];
        var c = b[1];
        this.ih = [];
        var e, d;
        e = 0;
        for (d = c.length; e < d; e++) this.Rs(c[e], null, this.ih)
    }
    function f(a) {
        this.type = a;
        this.F = [];
        this.Wa = [];
        this.rb = !0
    }
    function h(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.c = a.c;
        this.cb = [];
        this.Ah = [];
        this.Ns = this.co = this.Tq = this.Rm = this.group = this.Lq = !1;
        this.wc = [];
        this.bf = [];
        this.Xe = [];
        this.sk = "";
        this.bj = this.Rm = this.group = !1;
        this.gm = null;
        c[1] && (this.sk = c[1][1].toLowerCase(), this.group = !0, this.Rm = !!c[1][0], this.gm = [], this.bj = this.Rm, this.c.Yg.push(this), this.c.tk[this.sk] = this);
        this.Se = c[2];
        this.Za = c[4];
        this.group || (this.c.Vr[this.Za.toString()] = this);
        var e = c[5];
        a = 0;
        for (b = e.length; a < b; a++) {
            var d = new Nc(this, e[a]);
            d.index = a;
            this.wc.push(d);
            this.Nr(d.type)
        }
        e = c[6];
        a = 0;
        for (b = e.length; a < b; a++) d = new Oc(this, e[a]),
        d.index = a,
        this.bf.push(d);
        if (8 === c.length) for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.Rs(c[a], this, this.Xe);
        this.Zm = !1;
        this.wc.length && (this.Zm = null == this.wc[0].type && this.wc[0].Zc == R.prototype.K.kr)
    }
    function e(a, b) {
        var c, e, d;
        if (a && ( - 1 === b.indexOf(a) && b.push(a), a.Jd)) for (c = 0, e = a.Vd.length; c < e; c++) d = a.Vd[c],
        a !== d && -1 === b.indexOf(d) && b.push(d)
    }
    function g(a, b) {
        this.oe = a;
        this.sheet = a.sheet;
        this.c = a.c;
        this.Sa = [];
        this.Qb = [];
        this.ca = {};
        this.index = -1;
        this.Yj = !1;
        this.Zc = this.c.Ug(b[1]);
        this.trigger = 0 < b[3];
        this.ts = 2 === b[3];
        this.kf = b[4];
        this.zp = b[5];
        this.oA = b[6];
        this.Za = b[7];
        this.c.eh[this.Za.toString()] = this; - 1 === b[0] ? (this.type = null, this.lc = this.Dq, this.Mh = null, this.ef = -1) : (this.type = this.c.fa[b[0]], this.lc = this.oA ? this.mB: this.Cq, b[2] ? (this.Mh = this.type.Hm(b[2]), this.ef = this.type.hp(b[2])) : (this.Mh = null, this.ef = -1), this.oe.parent && this.oe.parent.Sn());
        this.ts && (this.lc = this.nB);
        if (10 === b.length) {
            var c, e, d = b[9];
            c = 0;
            for (e = d.length; c < e; c++) {
                var g = new Pc(this, d[c]);
                this.Sa.push(g)
            }
            this.Qb.length = d.length
        }
    }
    function l(a, b) {
        this.oe = a;
        this.sheet = a.sheet;
        this.c = a.c;
        this.Sa = [];
        this.Qb = [];
        this.ca = {};
        this.index = -1;
        this.Yj = !1;
        this.Zc = this.c.Ug(b[1]); - 1 === b[0] ? (this.type = null, this.lc = this.Dq, this.Mh = null, this.ef = -1) : (this.type = this.c.fa[b[0]], this.lc = this.Cq, b[2] ? (this.Mh = this.type.Hm(b[2]), this.ef = this.type.hp(b[2])) : (this.Mh = null, this.ef = -1));
        this.Za = b[3];
        this.c.Xg[this.Za.toString()] = this;
        if (6 === b.length) {
            var c, e, d = b[5];
            c = 0;
            for (e = d.length; c < e; c++) {
                var g = new Pc(this, d[c]);
                this.Sa.push(g)
            }
            this.Qb.length = d.length
        }
    }
    function p() {
        v++;
        u.length === v && u.push(new Qc);
        return u[v]
    }
    function k(a, b) {
        this.Te = a;
        this.oe = a.oe;
        this.sheet = a.sheet;
        this.c = a.c;
        this.type = b[0];
        this.Jf = null;
        this.Hg = 0;
        this.get = null;
        this.cs = 0;
        this.Nc = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.yl = this.Ei = this.yl = this.Ei = this.xs = this.Xh = this.zl = null;
        this.Ze = !1;
        var c, e, d;
        switch (b[0]) {
        case 0:
        case 7:
            this.Jf = new Rc(this, b[1]);
            this.Hg = 0;
            this.get = this.Kz;
            break;
        case 1:
            this.Jf = new Rc(this, b[1]);
            this.Hg = 0;
            this.get = this.Lz;
            break;
        case 5:
            this.Jf = new Rc(this, b[1]);
            this.Hg = 0;
            this.get = this.Pz;
            break;
        case 3:
        case 8:
            this.cs = b[1];
            this.get = this.Iz;
            break;
        case 6:
            this.Nc = this.c.pj[b[1]];
            this.get = this.Qz;
            break;
        case 9:
            this.key = b[1];
            this.get = this.Oz;
            break;
        case 4:
            this.object = this.c.fa[b[1]];
            this.get = this.Rz;
            this.oe.Nr(this.object);
            this.Te instanceof Oc ? this.oe.Sn() : this.oe.parent && this.oe.parent.Sn();
            break;
        case 10:
            this.index = b[1];
            a.type && a.type.qa ? (this.get = this.Mz, this.Ze = !0) : this.get = this.Nz;
            break;
        case 11:
            this.zl = b[1];
            this.Xh = null;
            this.get = this.Jz;
            break;
        case 2:
        case 12:
            this.xs = b[1];
            this.get = this.Hz;
            break;
        case 13:
            for (this.get = this.Sz, this.Ei = [], this.yl = [], c = 1, e = b.length; c < e; c++) d = new Pc(this.Te, b[c]),
            this.Ei.push(d),
            this.yl.push(0)
        }
    }
    function m(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.c = a.c;
        this.cb = [];
        this.name = c[1];
        this.oo = c[2];
        this.wp = c[3];
        this.Gk = !!c[4];
        this.Ym = !!c[5];
        this.Za = c[6];
        this.c.Qj[this.Za.toString()] = this;
        this.data = this.wp;
        this.parent ? (this.ti = this.Gk || this.Ym ? -1 : this.c.zB++, this.c.Dx.push(this)) : (this.ti = -1, this.c.Cx.push(this))
    }
    function n(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.c = a.c;
        this.cb = [];
        this.vk = null;
        this.Yz = c[1];
        this.gc = !0
    }
    function q() {
        this.Tu = [];
        this.reset(null)
    }
    var t = [];
    d.prototype.toString = function() {
        return this.name
    };
    d.prototype.Rs = function(a, b, c) {
        switch (a[0]) {
        case 0:
            a = new Sc(this, b, a);
            if (a.Se) for (c.push(a), c = 0, b = a.wc.length; c < b; c++) a.wc[c].trigger && this.Ss(a, c);
            else a.$s() ? this.Ss(a, 0) : c.push(a);
            break;
        case 1:
            a = new Ac(this, b, a);
            c.push(a);
            break;
        case 2:
            a = new Tc(this, b, a),
            c.push(a)
        }
    };
    d.prototype.cc = function() {
        var a, b;
        a = 0;
        for (b = this.ih.length; a < b; a++) this.ih[a].cc(a < b - 1 && this.ih[a + 1].Zm)
    };
    d.prototype.Yq = function() {
        J(this.Uo);
        J(this.Fo);
        this.Mr(this);
        J(this.Fo)
    };
    d.prototype.Mr = function(a) {
        var b, c, e, d, g = a.Uo,
        f = a.Fo,
        l = this.Ps.tf();
        b = 0;
        for (c = l.length; b < c; ++b) e = l[b],
        d = e.vk,
        !e.gc || a === d || -1 < f.indexOf(d) || (f.push(d), d.Mr(a), g.push(d))
    };
    d.prototype.lc = function(a) {
        this.c.cD || (this.sp = !0, a || (this.c.Ep = !0));
        var b, c;
        b = 0;
        for (c = this.ih.length; b < c; b++) {
            var e = this.ih[b];
            e.lc();
            this.c.Oo(e.cb);
            this.c.kh && this.c.gd()
        }
        a || (this.c.Ep = !1)
    };
    d.prototype.Ss = function(a, b) {
        a.Se || this.c.ho.push(a);
        var c, e, d = a.wc[b],
        g;
        d.type ? g = d.type.name: g = "system";
        var f = (c = d.ts) ? this.us: this.Zu;
        f[g] || (f[g] = []);
        g = f[g];
        f = d.Zc;
        if (c) {
            if (d.Sa.length && (d = d.Sa[0], 1 === d.type && 2 === d.Jf.type)) {
                d = d.Jf.value.toLowerCase();
                c = 0;
                for (e = g.length; c < e; c++) if (g[c].method == f) {
                    c = g[c].ik;
                    c[d] ? c[d].push([a, b]) : c[d] = [[a, b]];
                    return
                }
                c = {};
                c[d] = [[a, b]];
                g.push({
                    method: f,
                    ik: c
                })
            }
        } else {
            c = 0;
            for (e = g.length; c < e; c++) if (g[c].method == f) {
                g[c].ik.push([a, b]);
                return
            }
            fd && f === fd.prototype.K.Pi ? g.unshift({
                method: f,
                ik: [[a, b]]
            }) : g.push({
                method: f,
                ik: [[a, b]]
            })
        }
    };
    qc = d;
    f.prototype.rp = function() {
        return this.rb ? this.type.F.length: this.F.length
    };
    f.prototype.Id = function() {
        return this.rb ? this.type.F: this.F
    };
    f.prototype.$k = function(a) {
        a && (a.c.zc().xc.Se ? (this.rb && (J(this.F), Ja(this.Wa, a.type.F), this.rb = !1), a = this.Wa.indexOf(a), -1 !== a && (this.F.push(this.Wa[a]), this.Wa.splice(a, 1))) : (this.rb = !1, J(this.F), this.F[0] = a))
    };
    $b = f;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    h.prototype.cc = function(a) {
        var c, e = this.parent;
        if (this.group) for (this.co = !0; e;) {
            if (!e.group) {
                this.co = !1;
                break
            }
            e = e.parent
        }
        this.Tq = !this.$s() && (!this.parent || this.parent.group && this.parent.co);
        this.Ns = !!a;
        this.Ah = this.cb.slice(0);
        for (e = this.parent; e;) {
            a = 0;
            for (c = e.cb.length; a < c; a++) this.Bx(e.cb[a]);
            e = e.parent
        }
        this.cb = b(this.cb);
        this.Ah = b(this.Ah);
        a = 0;
        for (c = this.wc.length; a < c; a++) this.wc[a].cc();
        a = 0;
        for (c = this.bf.length; a < c; a++) this.bf[a].cc();
        a = 0;
        for (c = this.Xe.length; a < c; a++) this.Xe[a].cc(a < c - 1 && this.Xe[a + 1].Zm)
    };
    h.prototype.Du = function(a) {
        if (this.bj !== !!a) {
            this.bj = !!a;
            var b;
            a = 0;
            for (b = this.gm.length; a < b; ++a) this.gm[a].dv();
            0 < b && this.c.Xa.Wh && this.c.Xa.Wh.Yq()
        }
    };
    h.prototype.Nr = function(a) {
        e(a, this.cb)
    };
    h.prototype.Bx = function(a) {
        e(a, this.Ah)
    };
    h.prototype.Sn = function() {
        this.Lq = !0;
        this.parent && this.parent.Sn()
    };
    h.prototype.$s = function() {
        return this.wc.length ? this.wc[0].trigger: !1
    };
    h.prototype.lc = function() {
        var a, b, c = !1,
        e = this.c,
        d = this.c.zc();
        d.xc = this;
        var g = this.wc;
        this.Zm || (d.Xo = !1);
        if (this.Se) {
            0 === g.length && (c = !0);
            d.vc = 0;
            for (a = g.length; d.vc < a; d.vc++) b = g[d.vc],
            b.trigger || (b = b.lc()) && (c = !0); (d.mi = c) && this.Kn()
        } else {
            d.vc = 0;
            for (a = g.length; d.vc < a; d.vc++) if (b = g[d.vc].lc(), !b) {
                d.mi = !1;
                this.Tq && e.kh && e.gd();
                return
            }
            d.mi = !0;
            this.Kn()
        }
        this.Ey(d)
    };
    h.prototype.Ey = function(a) {
        a.mi && this.Ns && (a.Xo = !0);
        this.Tq && this.c.kh && this.c.gd()
    };
    h.prototype.kB = function(a) {
        this.c.zc().xc = this;
        this.wc[a].lc() && (this.Kn(), this.c.zc().mi = !0)
    };
    h.prototype.Kn = function() {
        var a = this.c.zc(),
        b;
        a.Td = 0;
        for (b = this.bf.length; a.Td < b; a.Td++) if (this.bf[a.Td].lc()) return;
        this.xu()
    };
    h.prototype.iB = function() {
        var a = this.c.zc(),
        b;
        for (b = this.bf.length; a.Td < b; a.Td++) if (this.bf[a.Td].lc()) return;
        this.xu()
    };
    h.prototype.xu = function() {
        if (this.Xe.length) {
            var a, b, c, e, d = this.Xe.length - 1;
            this.c.Gn(this);
            if (this.Lq) for (a = 0, b = this.Xe.length; a < b; a++) c = this.Xe[a],
            (e = !this.co || !this.group && a < d) && this.c.Bi(c.cb),
            c.lc(),
            e ? this.c.Tf(c.cb) : this.c.Oo(c.cb);
            else for (a = 0, b = this.Xe.length; a < b; a++) this.Xe[a].lc();
            this.c.Bn()
        }
    };
    h.prototype.lB = function() {
        var a = this.c.zc();
        a.xc = this;
        var b = !1,
        c;
        a.vc = 0;
        for (c = this.wc.length; a.vc < c; a.vc++) if (this.wc[a.vc].lc()) b = !0;
        else if (!this.Se) return ! 1;
        return this.Se ? b: !0
    };
    h.prototype.Gj = function() {
        this.c.jk++;
        var a = this.c.zc().vc,
        b = this.c.Gn(this);
        if (!this.Se) for (b.vc = a + 1, a = this.wc.length; b.vc < a; b.vc++) if (!this.wc[b.vc].lc()) {
            this.c.Bn();
            return
        }
        this.Kn();
        this.c.Bn()
    };
    h.prototype.fA = function(a) {
        var b = a.index;
        if (0 === b) return ! 0;
        for (--b; 0 <= b; --b) if (this.wc[b].type === a.type) return ! 1;
        return ! 0
    };
    Sc = h;
    g.prototype.cc = function() {
        var a, b, c;
        a = 0;
        for (b = this.Sa.length; a < b; a++) c = this.Sa[a],
        c.cc(),
        c.Ze && (this.Yj = !0)
    };
    g.prototype.nB = function() {
        return ! 0
    };
    g.prototype.Dq = function() {
        var a, b;
        a = 0;
        for (b = this.Sa.length; a < b; a++) this.Qb[a] = this.Sa[a].get();
        return ib(this.Zc.apply(this.c.Yf, this.Qb), this.zp)
    };
    g.prototype.mB = function() {
        var a, b;
        a = 0;
        for (b = this.Sa.length; a < b; a++) this.Qb[a] = this.Sa[a].get();
        a = this.Zc.apply(this.Mh ? this.Mh: this.type, this.Qb);
        this.type.De();
        return a
    };
    g.prototype.Cq = function() {
        var a, b, c, e, d, g, f, l, k = this.type,
        h = k.Ya(),
        p = this.oe.Se && !this.trigger;
        b = 0;
        var n = k.Jd,
        q = k.qa,
        m = k.pg,
        t = this.ef,
        u = -1 < t,
        v = this.Yj,
        M = this.Sa,
        N = this.Qb,
        T = this.zp,
        O = this.Zc,
        K;
        if (v) for (b = 0, d = M.length; b < d; ++b) g = M[b],
        g.Ze || (N[b] = g.get(0));
        else for (b = 0, d = M.length; b < d; ++b) N[b] = M[b].get(0);
        if (h.rb) {
            J(h.F);
            J(h.Wa);
            K = k.F;
            a = 0;
            for (e = K.length; a < e; ++a) {
                l = K[a];
                if (v) for (b = 0, d = M.length; b < d; ++b) g = M[b],
                g.Ze && (N[b] = g.get(a));
                u ? (b = 0, q && (b = l.type.Xi[m]), b = O.apply(l.Ea[t + b], N)) : b = O.apply(l, N); (f = ib(b, T)) ? h.F.push(l) : p && h.Wa.push(l)
            }
            k.finish && k.finish(!0);
            h.rb = !1;
            k.De();
            return h.rp()
        }
        c = 0;
        K = (f = p && !this.oe.fA(this)) ? h.Wa: h.F;
        var U = !1;
        a = 0;
        for (e = K.length; a < e; ++a) {
            l = K[a];
            if (v) for (b = 0, d = M.length; b < d; ++b) g = M[b],
            g.Ze && (N[b] = g.get(a));
            u ? (b = 0, q && (b = l.type.Xi[m]), b = O.apply(l.Ea[t + b], N)) : b = O.apply(l, N);
            if (ib(b, T)) if (U = !0, f) {
                if (h.F.push(l), n) for (b = 0, d = l.siblings.length; b < d; b++) g = l.siblings[b],
                g.type.Ya().F.push(g)
            } else {
                K[c] = l;
                if (n) for (b = 0, d = l.siblings.length; b < d; b++) g = l.siblings[b],
                g.type.Ya().F[c] = g;
                c++
            } else if (f) {
                K[c] = l;
                if (n) for (b = 0, d = l.siblings.length; b < d; b++) g = l.siblings[b],
                g.type.Ya().Wa[c] = g;
                c++
            } else if (p && (h.Wa.push(l), n)) for (b = 0, d = l.siblings.length; b < d; b++) g = l.siblings[b],
            g.type.Ya().Wa.push(g)
        }
        Ha(K, c);
        if (n) for (q = k.Vd, a = 0, e = q.length; a < e; a++) l = q[a].Ya(),
        f ? Ha(l.Wa, c) : Ha(l.F, c);
        c = U;
        if (f && !U) for (a = 0, e = h.F.length; a < e; a++) {
            l = h.F[a];
            if (v) for (b = 0, d = M.length; b < d; b++) g = M[b],
            g.Ze && (N[b] = g.get(a));
            b = u ? O.apply(l.Ea[t], N) : O.apply(l, N);
            if (ib(b, T)) {
                U = !0;
                break
            }
        }
        k.finish && k.finish(c || p);
        return p ? U: h.rp()
    };
    Nc = g;
    l.prototype.cc = function() {
        var a, b, c;
        a = 0;
        for (b = this.Sa.length; a < b; a++) c = this.Sa[a],
        c.cc(),
        c.Ze && (this.Yj = !0)
    };
    l.prototype.Dq = function() {
        var a = this.c,
        b, c, e = this.Sa,
        d = this.Qb;
        b = 0;
        for (c = e.length; b < c; ++b) d[b] = e[b].get();
        return this.Zc.apply(a.Yf, d)
    };
    l.prototype.Cq = function() {
        var a = this.type,
        b = this.ef,
        c = a.pg,
        e = this.Yj,
        d = this.Sa,
        g = this.Qb,
        f = this.Zc,
        l = a.Ya().Id(),
        a = a.qa,
        k = -1 < b,
        h,
        p,
        n,
        q,
        m,
        t;
        if (e) for (p = 0, q = d.length; p < q; ++p) m = d[p],
        m.Ze || (g[p] = m.get(0));
        else for (p = 0, q = d.length; p < q; ++p) g[p] = d[p].get(0);
        h = 0;
        for (n = l.length; h < n; ++h) {
            t = l[h];
            if (e) for (p = 0, q = d.length; p < q; ++p) m = d[p],
            m.Ze && (g[p] = m.get(h));
            k ? (p = 0, a && (p = t.type.Xi[c]), f.apply(t.Ea[b + p], g)) : f.apply(t, g)
        }
        return ! 1
    };
    Oc = l;
    var u = [],
    v = -1;
    k.prototype.cc = function() {
        var a, b;
        if (11 === this.type) this.Xh = this.c.Gs(this.zl, this.oe.parent);
        else if (13 === this.type) for (a = 0, b = this.Ei.length; a < b; a++) this.Ei[a].cc();
        this.Jf && this.Jf.cc()
    };
    k.prototype.xA = function(a) {
        this.Ze || !a || a.sb.Un || (this.Ze = !0)
    };
    k.prototype.Fu = function() {
        this.Ze = !0
    };
    k.prototype.Kz = function(a) {
        this.Hg = a || 0;
        a = p();
        this.Jf.get(a);
        v--;
        return a.data
    };
    k.prototype.Lz = function(a) {
        this.Hg = a || 0;
        a = p();
        this.Jf.get(a);
        v--;
        return na(a.data) ? a.data: ""
    };
    k.prototype.Rz = function() {
        return this.object
    };
    k.prototype.Iz = function() {
        return this.cs
    };
    k.prototype.Pz = function(a) {
        this.Hg = a || 0;
        a = p();
        this.Jf.get(a);
        v--;
        return a.Lc() ? this.c.bi(a.data) : this.c.Mm(a.data)
    };
    k.prototype.Qz = function() {
        return this.Nc
    };
    k.prototype.Oz = function() {
        return this.key
    };
    k.prototype.Nz = function() {
        return this.index
    };
    k.prototype.Mz = function(a) {
        a = a || 0;
        var b = this.Te.type,
        c = null,
        c = b.Ya(),
        e = c.Id();
        if (e.length) c = e[a % e.length].type;
        else if (c.Wa.length) c = c.Wa[a % c.Wa.length].type;
        else if (b.F.length) c = b.F[a % b.F.length].type;
        else return 0;
        return this.index + c.Am[b.pg]
    };
    k.prototype.Jz = function() {
        return this.Xh
    };
    k.prototype.Hz = function() {
        return this.xs
    };
    k.prototype.Sz = function() {
        var a, b;
        a = 0;
        for (b = this.Ei.length; a < b; a++) this.yl[a] = this.Ei[a].get();
        return this.yl
    };
    Pc = k;
    m.prototype.cc = function() {
        this.cb = b(this.cb)
    };
    m.prototype.Di = function(a) {
        var b = this.c.Es();
        this.parent && !this.Gk && b ? (this.ti >= b.length && (b.length = this.ti + 1), b[this.ti] = a) : this.data = a
    };
    m.prototype.qk = function() {
        var a = this.c.Es();
        return ! this.parent || this.Gk || !a || this.Ym ? this.data: this.ti >= a.length || "undefined" === typeof a[this.ti] ? this.wp: a[this.ti]
    };
    m.prototype.lc = function() { ! this.parent || this.Gk || this.Ym || this.Di(this.wp)
    };
    Ac = m;
    n.prototype.toString = function() {
        return "include:" + this.vk.toString()
    };
    n.prototype.cc = function() {
        this.vk = this.c.Zo[this.Yz];
        this.sheet.Ps.add(this);
        this.cb = b(this.cb);
        for (var a = this.parent; a;) a.group && a.gm.push(this),
        a = a.parent;
        this.dv()
    };
    n.prototype.lc = function() {
        this.parent && this.c.cl(this.c.fa);
        this.vk.sp || this.vk.lc(!0);
        this.parent && this.c.Tf(this.c.fa)
    };
    n.prototype.dv = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.bj) {
                this.gc = !1;
                return
            }
            a = a.parent
        }
        this.gc = !0
    };
    Tc = n;
    q.prototype.reset = function(a) {
        this.xc = a;
        this.Td = this.vc = 0;
        J(this.Tu);
        this.Xo = this.mi = !1
    };
    q.prototype.hA = function() {
        return this.xc.Lq ? !0 : this.vc < this.xc.wc.length - 1 ? !!this.xc.cb.length: !1
    };
    zc = q
})(); (function() {
    function a(a, b) {
        this.Te = a;
        this.c = a.c;
        this.type = b[0];
        this.get = [this.Xy, this.Ty, this.fz, this.iz, this.Iy, this.gz, this.az, this.Qy, this.$y, this.ez, this.Jy, this.dz, this.Ry, this.bz, this.Yy, this.Zy, this.Uy, this.Vy, this.Py, this.hz, this.cz, this.Wy, this.Oy, this.Sy][this.type];
        var c = null;
        this.yg = this.Sa = this.Qb = this.Zc = this.bo = this.second = this.first = this.value = null;
        this.ef = -1;
        this.gf = null;
        this.lv = -1;
        this.Xh = this.zl = null;
        this.Hj = !1;
        switch (this.type) {
        case 0:
        case 1:
        case 2:
            this.value = b[1];
            break;
        case 3:
            this.first = new Rc(a, b[1]);
            break;
        case 18:
            this.first = new Rc(a, b[1]);
            this.second = new Rc(a, b[2]);
            this.bo = new Rc(a, b[3]);
            break;
        case 19:
            this.Zc = this.c.Ug(b[1]);
            this.Zc !== R.prototype.Aa.random && this.Zc !== R.prototype.Aa.Ox || this.Te.Fu();
            this.Qb = [];
            this.Sa = [];
            3 === b.length ? (c = b[2], this.Qb.length = c.length + 1) : this.Qb.length = 1;
            break;
        case 20:
            this.yg = this.c.fa[b[1]];
            this.ef = -1;
            this.Zc = this.c.Ug(b[2]);
            this.Hj = b[3];
            qd && this.Zc === qd.prototype.Aa.vv && this.Te.Fu();
            b[4] ? this.gf = new Rc(a, b[4]) : this.gf = null;
            this.Qb = [];
            this.Sa = [];
            6 === b.length ? (c = b[5], this.Qb.length = c.length + 1) : this.Qb.length = 1;
            break;
        case 21:
            this.yg = this.c.fa[b[1]];
            this.Hj = b[2];
            b[3] ? this.gf = new Rc(a, b[3]) : this.gf = null;
            this.lv = b[4];
            break;
        case 22:
            this.yg = this.c.fa[b[1]];
            this.yg.Hm(b[2]);
            this.ef = this.yg.hp(b[2]);
            this.Zc = this.c.Ug(b[3]);
            this.Hj = b[4];
            b[5] ? this.gf = new Rc(a, b[5]) : this.gf = null;
            this.Qb = [];
            this.Sa = [];
            7 === b.length ? (c = b[6], this.Qb.length = c.length + 1) : this.Qb.length = 1;
            break;
        case 23:
            this.zl = b[1],
            this.Xh = null
        }
        this.Te.xA(this.yg);
        4 <= this.type && 17 >= this.type && (this.first = new Rc(a, b[1]), this.second = new Rc(a, b[2]));
        if (c) {
            var d, f;
            d = 0;
            for (f = c.length; d < f; d++) this.Sa.push(new Rc(a, c[d]))
        }
    }
    function c() {++h;
        f.length === h && f.push(new Qc);
        return f[h]
    }
    function b(a, b, c) {
        var d, f;
        d = 0;
        for (f = a.length; d < f; ++d) a[d].get(c),
        b[d + 1] = c.data
    }
    function d(a, b) {
        this.type = a || Uc.Oi;
        this.data = b || 0;
        this.yi = null;
        this.type == Uc.Oi && (this.data = Math.floor(this.data))
    }
    a.prototype.cc = function() {
        23 === this.type && (this.Xh = this.Te.c.Gs(this.zl, this.Te.oe.parent));
        this.first && this.first.cc();
        this.second && this.second.cc();
        this.bo && this.bo.cc();
        this.gf && this.gf.cc();
        if (this.Sa) {
            var a, b;
            a = 0;
            for (b = this.Sa.length; a < b; a++) this.Sa[a].cc()
        }
    };
    var f = [],
    h = -1;
    a.prototype.hz = function(a) {
        var d = this.Sa,
        f = this.Qb;
        f[0] = a;
        a = c();
        b(d, f, a); --h;
        this.Zc.apply(this.c.Yf, f)
    };
    a.prototype.cz = function(a) {
        var d = this.yg,
        f = this.Qb,
        p = this.Sa,
        k = this.gf,
        m = this.Zc,
        n = this.Te.Hg,
        q = d.Ya(),
        t = q.Id();
        if (!t.length) if (q.Wa.length) t = q.Wa;
        else {
            this.Hj ? a.Sc("") : a.lb(0);
            return
        }
        f[0] = a;
        a.yi = d;
        a = c();
        b(p, f, a);
        k && (k.get(a), a.Lc() && (n = a.data, t = d.F)); --h;
        d = t.length;
        if (n >= d || n <= -d) n %= d;
        0 > n && (n += d);
        m.apply(t[n], f)
    };
    a.prototype.Oy = function(a) {
        var d = this.yg,
        f = this.Qb,
        p = this.Sa,
        k = this.gf,
        m = this.ef,
        n = this.Zc,
        q = this.Te.Hg,
        t = d.Ya(),
        u = t.Id();
        if (!u.length) if (t.Wa.length) u = t.Wa;
        else {
            this.Hj ? a.Sc("") : a.lb(0);
            return
        }
        f[0] = a;
        a.yi = d;
        a = c();
        b(p, f, a);
        k && (k.get(a), a.Lc() && (q = a.data, u = d.F)); --h;
        p = u.length;
        if (q >= p || q <= -p) q %= p;
        0 > q && (q += p);
        q = u[q];
        u = 0;
        d.qa && (u = q.type.Xi[d.pg]);
        n.apply(q.Ea[m + u], f)
    };
    a.prototype.Wy = function(a) {
        var b = this.gf,
        d = this.yg,
        f = this.lv,
        k = this.Te.Hg,
        m = d.Ya(),
        n = m.Id();
        if (!n.length) if (m.Wa.length) n = m.Wa;
        else {
            this.Hj ? a.Sc("") : a.lb(0);
            return
        }
        if (b) {
            m = c();
            b.get(m);
            if (m.Lc()) {
                k = m.data;
                n = d.F;
                0 !== n.length && (k %= n.length, 0 > k && (k += n.length));
                k = d.lp(k);
                d = k.Bc[f];
                na(d) ? a.Sc(d) : a.la(d); --h;
                return
            }--h
        }
        b = n.length;
        if (k >= b || k <= -b) k %= b;
        0 > k && (k += b);
        k = n[k];
        n = 0;
        d.qa && (n = k.type.Am[d.pg]);
        d = k.Bc[f + n];
        na(d) ? a.Sc(d) : a.la(d)
    };
    a.prototype.Xy = function(a) {
        a.type = Uc.Oi;
        a.data = this.value
    };
    a.prototype.Ty = function(a) {
        a.type = Uc.Ni;
        a.data = this.value
    };
    a.prototype.fz = function(a) {
        a.type = Uc.String;
        a.data = this.value
    };
    a.prototype.iz = function(a) {
        this.first.get(a);
        a.Lc() && (a.data = -a.data)
    };
    a.prototype.Iy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data += b.data, b.gj() && a.vj()); --h
    };
    a.prototype.gz = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data -= b.data, b.gj() && a.vj()); --h
    };
    a.prototype.az = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data *= b.data, b.gj() && a.vj()); --h
    };
    a.prototype.Qy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data /= b.data, a.vj()); --h
    };
    a.prototype.$y = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data %= b.data, b.gj() && a.vj()); --h
    };
    a.prototype.ez = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data = Math.pow(a.data, b.data), b.gj() && a.vj()); --h
    };
    a.prototype.Jy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        b.jj() || a.jj() ? this.Ly(a, b) : this.Ky(a, b); --h
    };
    a.prototype.Ly = function(a, b) {
        a.jj() && b.jj() ? this.Ny(a, b) : this.My(a, b)
    };
    a.prototype.Ny = function(a, b) {
        a.data += b.data
    };
    a.prototype.My = function(a, b) {
        a.jj() ? a.data += (Math.round(1E10 * b.data) / 1E10).toString() : a.Sc(a.data.toString() + b.data)
    };
    a.prototype.Ky = function(a, b) {
        a.lb(a.data && b.data ? 1 : 0)
    };
    a.prototype.dz = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.Lc() && b.Lc() && (a.data || b.data ? a.lb(1) : a.lb(0)); --h
    };
    a.prototype.Py = function(a) {
        this.first.get(a);
        a.data ? this.second.get(a) : this.bo.get(a)
    };
    a.prototype.Ry = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.lb(a.data === b.data ? 1 : 0); --h
    };
    a.prototype.bz = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.lb(a.data !== b.data ? 1 : 0); --h
    };
    a.prototype.Yy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.lb(a.data < b.data ? 1 : 0); --h
    };
    a.prototype.Zy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.lb(a.data <= b.data ? 1 : 0); --h
    };
    a.prototype.Uy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.lb(a.data > b.data ? 1 : 0); --h
    };
    a.prototype.Vy = function(a) {
        this.first.get(a);
        var b = c();
        this.second.get(b);
        a.lb(a.data >= b.data ? 1 : 0); --h
    };
    a.prototype.Sy = function(a) {
        var b = this.Xh.qk();
        ma(b) ? a.la(b) : a.Sc(b)
    };
    Rc = a;
    d.prototype.gj = function() {
        return this.type === Uc.Ni
    };
    d.prototype.Lc = function() {
        return this.type === Uc.Oi || this.type === Uc.Ni
    };
    d.prototype.jj = function() {
        return this.type === Uc.String
    };
    d.prototype.vj = function() {
        this.gj() || (this.jj() && (this.data = parseFloat(this.data)), this.type = Uc.Ni)
    };
    d.prototype.lb = function(a) {
        this.type = Uc.Oi;
        this.data = Math.floor(a)
    };
    d.prototype.la = function(a) {
        this.type = Uc.Ni;
        this.data = a
    };
    d.prototype.Sc = function(a) {
        this.type = Uc.String;
        this.data = a
    };
    d.prototype.Tn = function(a) {
        ma(a) ? (this.type = Uc.Ni, this.data = a) : na(a) ? (this.type = Uc.String, this.data = a.toString()) : (this.type = Uc.Oi, this.data = 0)
    };
    Qc = d;
    Uc = {
        Oi: 0,
        Ni: 1,
        String: 2
    }
})();
function R(a) {
    this.c = a;
    this.Qd = []
}
R.prototype.Rc = function() {
    var a = {},
    c, b, d, f, h, e, g, l;
    a.waits = [];
    var p = a.waits,
    k;
    c = 0;
    for (b = this.Qd.length; c < b; c++) {
        e = this.Qd[c];
        k = {
            t: e.time,
            st: e.Mu,
            s: e.Kq,
            ev: e.Wi.Za,
            sm: [],
            sols: {}
        };
        e.Wi.bf[e.Td] && (k.act = e.Wi.bf[e.Td].Za);
        d = 0;
        for (f = e.cb.length; d < f; d++) k.sm.push(e.cb[d].Za);
        for (h in e.Ad) if (e.Ad.hasOwnProperty(h)) {
            g = this.c.fa[parseInt(h, 10)];
            l = {
                sa: e.Ad[h].Ln,
                insts: []
            };
            d = 0;
            for (f = e.Ad[h].rg.length; d < f; d++) l.insts.push(e.Ad[h].rg[d].uid);
            k.sols[g.Za.toString()] = l
        }
        p.push(k)
    }
    return a
};
R.prototype.od = function(a) {
    a = a.waits;
    var c, b, d, f, h, e, g, l, p, k, m;
    J(this.Qd);
    c = 0;
    for (b = a.length; c < b; c++) if (e = a[c], l = this.c.Vr[e.ev.toString()]) {
        p = -1;
        d = 0;
        for (f = l.bf.length; d < f; d++) if (l.bf[d].Za === e.act) {
            p = d;
            break
        }
        if ( - 1 !== p) {
            g = {
                Ad: {},
                cb: [],
                Vo: !1
            };
            g.time = e.t;
            g.Mu = e.st || "";
            g.Kq = !!e.s;
            g.Wi = l;
            g.Td = p;
            d = 0;
            for (f = e.sm.length; d < f; d++)(l = this.c.Om(e.sm[d])) && g.cb.push(l);
            for (h in e.sols) if (e.sols.hasOwnProperty(h) && (l = this.c.Om(parseInt(h, 10)))) {
                p = e.sols[h];
                k = {
                    Ln: p.sa,
                    rg: []
                };
                d = 0;
                for (f = p.insts.length; d < f; d++)(m = this.c.ci(p.insts[d])) && k.rg.push(m);
                g.Ad[l.index.toString()] = k
            }
            this.Qd.push(g)
        }
    }
}; (function() {
    function a() {}
    function c() {}
    function b() {}
    var d = R.prototype;
    a.prototype.Lv = function() {
        return ! 0
    };
    a.prototype.sr = function() {
        return ! 0
    };
    a.prototype.qw = function() {
        return ! 0
    };
    a.prototype.yv = function(a, b, c) {
        return Vc(a, b, c)
    };
    a.prototype.Mv = function(a, b, c) {
        var d = this.c.zc(),
        f = d.xc,
        d = d.hA();
        a = this.c.XA(a);
        if (c < b) if (d) for (; b >= c && !a.nc; --b) this.c.Bi(f.cb),
        a.index = b,
        f.Gj(),
        this.c.Tf(f.cb);
        else for (; b >= c && !a.nc; --b) a.index = b,
        f.Gj();
        else if (d) for (; b <= c && !a.nc; ++b) this.c.Bi(f.cb),
        a.index = b,
        f.Gj(),
        this.c.Tf(f.cb);
        else for (; b <= c && !a.nc; ++b) a.index = b,
        f.Gj();
        this.c.OA();
        return ! 1
    };
    a.prototype.nx = function() {
        var a = this.c.Im().ca;
        "undefined" === typeof a.TriggerOnce_lastTick && (a.TriggerOnce_lastTick = -1);
        var b = a.TriggerOnce_lastTick,
        c = this.c.$f;
        a.TriggerOnce_lastTick = c;
        return this.c.Up || b !== c - 1
    };
    a.prototype.Kv = function(a) {
        var b = this.c.Im(),
        c = b.ca.Every_lastTime || 0,
        d = this.c.Mc.Ga;
        "undefined" === typeof b.ca.Every_seconds && (b.ca.Every_seconds = a);
        var f = b.ca.Every_seconds;
        if (d >= c + f) return b.ca.Every_lastTime = c + f,
        d >= b.ca.Every_lastTime + .04 && (b.ca.Every_lastTime = d),
        b.ca.Every_seconds = a,
        !0;
        d < c - .1 && (b.ca.Every_lastTime = d);
        return ! 1
    };
    a.prototype.Av = function(a, b, c) {
        return Vc(a.qk(), b, c)
    };
    a.prototype.Uv = function(a) {
        return (a = this.c.tk[a.toLowerCase()]) && a.bj
    };
    a.prototype.kr = function() {
        var a = this.c.zc();
        return a.Xo ? !1 : !a.mi
    };
    a.prototype.tr = function() {
        return ! 0
    };
    a.prototype.ew = function() {
        return ! 0
    };
    a.prototype.to = function() {
        return ! 0
    };
    a.prototype.Ar = function() {
        return ! 0
    };
    a.prototype.rw = function() {
        return ! 0
    };
    a.prototype.Ll = function() {
        return ! 0
    };
    a.prototype.rv = function(a, b, c) {
        return $a(L(a), L(c)) <= L(b)
    };
    a.prototype.Tv = function(a, b) {
        return bb(L(a), L(b))
    };
    a.prototype.Sv = function(a, b, c) {
        a = Wa(a);
        b = Wa(b);
        c = Wa(c);
        return bb(c, b) ? bb(a, b) && !bb(a, c) : !(!bb(a, b) && bb(a, c))
    };
    d.K = new a;
    c.prototype.Nv = function(a) {
        this.c.ji || this.c.ig || (this.c.ig = a)
    };
    c.prototype.Fv = function(a, b, c, d) {
        if (b && a && (b = this.c.es(a, b, c, d))) {
            this.c.hf++;
            var f;
            this.c.trigger(Object.getPrototypeOf(a.sb).K.Vj, b);
            if (b.Jd) for (c = 0, d = b.siblings.length; c < d; c++) f = b.siblings[c],
            this.c.trigger(Object.getPrototypeOf(f.type.sb).K.Vj, f);
            this.c.hf--;
            a = a.Ya();
            a.rb = !1;
            J(a.F);
            a.F[0] = b;
            if (b.Jd) for (c = 0, d = b.siblings.length; c < d; c++) f = b.siblings[c],
            a = f.type.Ya(),
            a.rb = !1,
            J(a.F),
            a.F[0] = f
        }
    };
    c.prototype.Jw = function(a) {
        this.c.Xa.il(a)
    };
    c.prototype.Hw = function(a, b) {
        this.c.Xa.il(a);
        this.c.Xa.Mn(b)
    };
    c.prototype.Iw = function(a) {
        if (a = a.Jm()) this.c.Xa.il(a.x),
        this.c.Xa.Mn(a.y)
    };
    c.prototype.Zw = function(a, b) {
        0 === a.oo ? ma(b) ? a.Di(b) : a.Di(parseFloat(b)) : 1 === a.oo && a.Di(b.toString())
    };
    c.prototype.qv = function(a, b) {
        0 === a.oo ? ma(b) ? a.Di(a.qk() + b) : a.Di(a.qk() + parseFloat(b)) : 1 === a.oo && a.Di(a.qk() + b.toString())
    };
    c.prototype.Yw = function(a) {
        0 > a && (a = 0);
        this.c.Jg = a
    };
    c.prototype.Rw = function(a, b) {
        var c = b;
        0 > c && (c = 0);
        if (a) {
            var d = a.Ya().Id(),
            f,
            h;
            f = 0;
            for (h = d.length; f < h; f++) d[f].zj = c
        }
    };
    var f = [],
    h = [];
    c.prototype.qx = function(a) {
        if (! (0 > a)) {
            var b, c, d, k = this.c.zc(),
            m;
            f.length ? m = f.pop() : m = {
                Ad: {},
                cb: []
            };
            m.Vo = !1;
            m.time = this.c.Mc.Ga + a;
            m.Mu = "";
            m.Kq = !1;
            m.Wi = k.xc;
            m.Td = k.Td + 1;
            a = 0;
            for (b = this.c.fa.length; a < b; a++) d = this.c.fa[a],
            c = d.Ya(),
            c.rb && -1 === k.xc.cb.indexOf(d) || (m.cb.push(d), d = void 0, h.length ? d = h.pop() : d = {
                rg: []
            },
            d.Ln = !1, d.Ln = c.rb, Ja(d.rg, c.F), m.Ad[a.toString()] = d);
            this.Qd.push(m);
            return ! 0
        }
    };
    c.prototype.Ov = function(a) {
        if (!this.c.ji && !this.c.ig) for (var b in this.c.pj) if (this.c.pj.hasOwnProperty(b) && Vb(b, a)) {
            this.c.ig = this.c.pj[b];
            break
        }
    };
    c.prototype.Gw = function() {
        if (!this.c.ji && !this.c.ig && this.c.Xa) {
            this.c.ig = this.c.Xa;
            var a, b, c;
            a = 0;
            for (b = this.c.Yg.length; a < b; a++) c = this.c.Yg[a],
            c.Du(c.Rm)
        }
    };
    d.V = new c;
    b.prototype["int"] = function(a, b) {
        na(b) ? (a.lb(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.lb(b)
    };
    b.prototype["float"] = function(a, b) {
        na(b) ? (a.la(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.la(b)
    };
    b.prototype.random = function(a, b, c) {
        void 0 === c ? a.la(Math.random() * b) : a.la(Math.random() * (c - b) + b)
    };
    b.prototype.sqrt = function(a, b) {
        a.la(Math.sqrt(b))
    };
    b.prototype.abs = function(a, b) {
        a.la(Math.abs(b))
    };
    b.prototype.round = function(a, b) {
        a.lb(Math.round(b))
    };
    b.prototype.floor = function(a, b) {
        a.lb(Math.floor(b))
    };
    b.prototype.ceil = function(a, b) {
        a.lb(Math.ceil(b))
    };
    b.prototype.sin = function(a, b) {
        a.la(Math.sin(L(b)))
    };
    b.prototype.cos = function(a, b) {
        a.la(Math.cos(L(b)))
    };
    b.prototype.tan = function(a, b) {
        a.la(Math.tan(L(b)))
    };
    b.prototype.asin = function(a, b) {
        a.la(Sa(Math.asin(b)))
    };
    b.prototype.acos = function(a, b) {
        a.la(Sa(Math.acos(b)))
    };
    b.prototype.atan = function(a, b) {
        a.la(Sa(Math.atan(b)))
    };
    b.prototype.exp = function(a, b) {
        a.la(Math.exp(b))
    };
    b.prototype.log10 = function(a, b) {
        a.la(Math.log(b) / Math.LN10)
    };
    b.prototype.max = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var c, d, f;
        c = 2;
        for (d = arguments.length; c < d; c++) f = arguments[c],
        "number" === typeof f && b < f && (b = f);
        a.la(b)
    };
    b.prototype.min = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var c, d, f;
        c = 2;
        for (d = arguments.length; c < d; c++) f = arguments[c],
        "number" === typeof f && b > f && (b = f);
        a.la(b)
    };
    b.prototype.Ja = function(a) {
        a.la(this.c.Ja)
    };
    b.prototype.Jg = function(a) {
        a.la(this.c.Jg)
    };
    b.prototype.time = function(a) {
        a.la(this.c.Mc.Ga)
    };
    b.prototype.$f = function(a) {
        a.lb(this.c.$f)
    };
    b.prototype.rn = function(a) {
        a.lb(this.c.rn)
    };
    b.prototype.fp = function(a) {
        a.lb(this.c.fp)
    };
    b.prototype.tA = function(a, b) {
        var c, d;
        if (this.c.Tk.length) if (b) {
            for (d = this.c.Uk; 0 <= d; --d) if (c = this.c.Tk[d], c.name === b) {
                a.lb(c.index);
                return
            }
            a.lb(0)
        } else c = this.c.Fs(),
        a.lb(c ? c.index: -1);
        else a.lb(0)
    };
    b.prototype.Hf = function(a, b, c, d, f) {
        a.la(hb(b, c, d, f))
    };
    b.prototype.O = function(a, b, c, d, f) {
        a.la(Sa(Xa(b, c, d, f)))
    };
    b.prototype.qB = function(a) {
        a.la(this.c.Xa.scrollX)
    };
    b.prototype.qA = function(a, b, c, d) {
        a.la(jb(b, c, d))
    };
    b.prototype.left = function(a, b, c) {
        a.Sc(na(b) ? b.substr(0, c) : "")
    };
    b.prototype.right = function(a, b, c) {
        a.Sc(na(b) ? b.substr(b.length - c) : "")
    };
    b.prototype.replace = function(a, b, c, d) {
        na(b) && na(c) && na(d) ? a.Sc(b.replace(new RegExp(Ab(c), "gi"), d)) : a.Sc(na(b) ? b: "")
    };
    b.prototype.trim = function(a, b) {
        a.Sc(na(b) ? b.trim() : "")
    };
    b.prototype.Ox = function(a) {
        var b = va(Math.random() * (arguments.length - 1));
        a.Tn(arguments[b + 1])
    };
    b.prototype.Qo = function(a) {
        a.la(this.c.Qo / 1E3)
    };
    b.prototype.sj = function(a) {
        a.la(this.c.sj)
    };
    d.Aa = new b;
    d.jB = function() {
        var a, b, c, d, k, m, n = this.c.zc();
        a = 0;
        for (c = this.Qd.length; a < c; a++) {
            d = this.Qd[a];
            if ( - 1 === d.time) {
                if (!d.Kq) continue
            } else if (d.time > this.c.Mc.Ga) continue;
            n.xc = d.Wi;
            n.Td = d.Td;
            n.vc = 0;
            for (b in d.Ad) d.Ad.hasOwnProperty(b) && (k = this.c.fa[parseInt(b, 10)].Ya(), m = d.Ad[b], k.rb = m.Ln, Ja(k.F, m.rg), k = m, J(k.rg), h.push(k));
            d.Wi.iB();
            this.c.Oo(d.cb);
            d.Vo = !0
        }
        b = a = 0;
        for (c = this.Qd.length; a < c; a++) d = this.Qd[a],
        this.Qd[b] = d,
        d.Vo ? (lb(d.Ad), J(d.cb), f.push(d)) : b++;
        Ha(this.Qd, b)
    }
})(); (function() {
    Yb = function(a, b) {
        var d = a[1],
        f = a[3],
        h = a[4],
        e = a[5],
        g = a[6],
        l = a[7],
        p = a[8];
        b.K || (b.K = {});
        b.V || (b.V = {});
        b.Aa || (b.Aa = {});
        var k = b.K,
        m = b.V,
        n = b.Aa;
        f && (k.Cv = function(a, b) {
            return Vc(this.x, a, b)
        },
        k.dC = function(a, b) {
            return Vc(this.y, a, b)
        },
        k.iC = function() {
            var a = this.W;
            this.mb();
            var b = this.Vb;
            return ! (b.right < a.wb || b.bottom < a.xb || b.left > a.Bb || b.top > a.Ab)
        },
        k.jC = function() {
            this.mb();
            var a = this.Vb,
            b = this.c.Xa;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        },
        k.sC = function(a, b, c) {
            var d = this.Ya(),
            e = d.Id();
            if (!e.length) return ! 1;
            var f = e[0],
            g = f,
            l = hb(f.x, f.y, b, c),
            k,
            h,
            n;
            k = 1;
            for (h = e.length; k < h; k++) if (f = e[k], n = hb(f.x, f.y, b, c), 0 === a && n < l || 1 === a && n > l) l = n,
            g = f;
            d.$k(g);
            return ! 0
        },
        m.bx = function(a) {
            this.x !== a && (this.x = a, this.La())
        },
        m.FC = function(a) {
            this.y !== a && (this.y = a, this.La())
        },
        m.Uw = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a,
            this.y = b,
            this.La()
        },
        m.Vw = function(a, b) {
            var c = a.Az(this);
            if (c) {
                var d;
                c.Me ? (d = c.Me(b, !0), c = c.Me(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d,
                this.y = c,
                this.La()
            }
        },
        m.oC = function(a) {
            0 !== a && (this.x += Math.cos(this.O) * a, this.y += Math.sin(this.O) * a, this.La())
        },
        m.nC = function(a, b) {
            0 !== b && (this.x += Math.cos(L(a)) * b, this.y += Math.sin(L(a)) * b, this.La())
        },
        n.Do = function(a) {
            a.la(this.x)
        },
        n.Hr = function(a) {
            a.la(this.y)
        },
        n.Ja = function(a) {
            a.la(this.c.$h(this))
        });
        h && (k.cC = function(a, b) {
            return Vc(this.width, a, b)
        },
        k.aC = function(a, b) {
            return Vc(this.height, a, b)
        },
        m.$w = function(a) {
            this.width !== a && (this.width = a, this.La())
        },
        m.DC = function(a) {
            this.height !== a && (this.height = a, this.La())
        },
        m.zo = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a,
            this.height = b,
            this.La()
        },
        n.rx = function(a) {
            a.la(this.width)
        },
        n.lr = function(a) {
            a.la(this.height)
        },
        n.YB = function(a) {
            this.mb();
            a.la(this.Vb.left)
        },
        n.$B = function(a) {
            this.mb();
            a.la(this.Vb.top)
        },
        n.ZB = function(a) {
            this.mb();
            a.la(this.Vb.right)
        },
        n.XB = function(a) {
            this.mb();
            a.la(this.Vb.bottom)
        });
        e && (k.rv = function(a, b) {
            return $a(this.O, L(b)) <= L(a)
        },
        k.Tv = function(a) {
            return bb(this.O, L(a))
        },
        k.Sv = function(a, b) {
            var c = Wa(a),
            d = Wa(b),
            e = Ua(this.O);
            return bb(d, c) ? bb(e, c) && !bb(e, d) : !(!bb(e, c) && bb(e, d))
        },
        m.wo = function(a) {
            a = L(Ta(a));
            isNaN(a) || this.O === a || (this.O = a, this.La())
        },
        m.wC = function(a) {
            0 === a || isNaN(a) || (this.O += L(a), this.O = Ua(this.O), this.La())
        },
        m.xC = function(a) {
            0 === a || isNaN(a) || (this.O -= L(a), this.O = Ua(this.O), this.La())
        },
        m.yC = function(a, b) {
            var c = ab(this.O, L(b), L(a));
            isNaN(c) || this.O === c || (this.O = c, this.La())
        },
        m.zC = function(a, b, c) {
            a = ab(this.O, Math.atan2(c - this.y, b - this.x), L(a));
            isNaN(a) || this.O === a || (this.O = a, this.La())
        },
        m.EC = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.O === c || (this.O = c, this.La())
        },
        n.WB = function(a) {
            a.la(Va(this.O))
        });
        d || (k.jr = function(a, b, c) {
            return Vc(this.Bc[a], b, c)
        },
        k.gC = function(a) {
            return this.Bc[a]
        },
        k.tC = function(a, b) {
            var c = this.Ya(),
            d = c.Id();
            if (!d.length) return ! 1;
            var e = d[0],
            f = e,
            g = e.Bc[b],
            l,
            k,
            h;
            l = 1;
            for (k = d.length; l < k; l++) if (e = d[l], h = e.Bc[b], 0 === a && h < g || 1 === a && h > g) g = h,
            f = e;
            c.$k(f);
            return ! 0
        },
        k.Dw = function(a) {
            var b, c, d, e, f;
            if (this.c.Im().zp) {
                f = this.Ya();
                if (f.rb) for (f.rb = !1, J(f.F), J(f.Wa), d = this.F, b = 0, c = d.length; b < c; b++) e = d[b],
                e.uid === a ? f.Wa.push(e) : f.F.push(e);
                else {
                    d = b = 0;
                    for (c = f.F.length; b < c; b++) e = f.F[b],
                    f.F[d] = e,
                    e.uid === a ? f.Wa.push(e) : d++;
                    Ha(f.F, d)
                }
                this.De();
                return !! f.F.length
            }
            e = this.c.ci(a);
            if (!e) return ! 1;
            f = this.Ya();
            if (!f.rb && -1 === f.F.indexOf(e)) return ! 1;
            if (this.qa) for (a = e.type.Jb, b = 0, c = a.length; b < c; b++) {
                if (a[b] === this) return f.$k(e),
                this.De(),
                !0
            } else if (e.type === this) return f.$k(e),
            this.De(),
            !0;
            return ! 1
        },
        k.Vj = function() {
            return ! 0
        },
        k.gw = function() {
            return ! 0
        },
        m.Pw = function(a, b) {
            var c = this.Bc;
            ma(c[a]) ? c[a] = ma(b) ? b: parseFloat(b) : na(c[a]) && (c[a] = na(b) ? b: b.toString())
        },
        m.pv = function(a, b) {
            var c = this.Bc;
            ma(c[a]) ? c[a] = ma(b) ? c[a] + b: c[a] + parseFloat(b) : na(c[a]) && (c[a] = na(b) ? c[a] + b: c[a] + b.toString())
        },
        m.GC = function(a, b) {
            var c = this.Bc;
            ma(c[a]) && (c[a] = ma(b) ? c[a] - b: c[a] - parseFloat(b))
        },
        m.AC = function(a, b) {
            this.Bc[a] = b ? 1 : 0
        },
        m.HC = function(a) {
            this.Bc[a] = 1 - this.Bc[a]
        },
        m.Tc = function() {
            this.c.Sg(this)
        },
        m.Yv || (m.Yv = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch(d) {
                return
            }
            this.c.gn(this, b, !0);
            this.Bf && this.Bf();
            if (this.Ea) for (a = 0, b = this.Ea.length; a < b; ++a) c = this.Ea[a],
            c.Bf && c.Bf()
        }), n.eC = function(a) {
            var b = a.yi.F.length,
            c, d, e;
            c = 0;
            for (d = this.c.ff.length; c < d; c++) e = this.c.ff[c],
            a.yi.qa ? 0 <= e.type.Jb.indexOf(a.yi) && b++:e.type === a.yi && b++;
            a.lb(b)
        },
        n.vC = function(a) {
            a.lb(a.yi.Ya().Id().length)
        },
        n.IC = function(a) {
            a.lb(this.uid)
        },
        n.fC = function(a) {
            a.lb(this.rk())
        },
        n.Fl || (n.Fl = function(a) {
            a.Sc(JSON.stringify(this.c.Eq(this, !0)))
        }));
        g && (k.kC = function() {
            return this.visible
        },
        m.Ao = function(a) { ! a !== !this.visible && (this.visible = !!a, this.c.kb = !0)
        },
        k.bC = function(a, b) {
            return Vc(Pb(100 * this.opacity), a, b)
        },
        m.Sw = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.c.kb = !0)
        },
        n.Opacity = function(a) {
            a.la(Pb(100 * this.opacity))
        });
        l && (k.hC = function(a) {
            return a ? this.W === a: !1
        },
        k.uC = function(a) {
            var b = this.Ya(),
            c = b.Id();
            if (!c.length) return ! 1;
            var d = c[0],
            e = d,
            f,
            g;
            f = 1;
            for (g = c.length; f < g; f++) if (d = c[f], 0 === a) {
                if (d.W.index > e.W.index || d.W.index === e.W.index && d.Nf() > e.Nf()) e = d
            } else if (d.W.index < e.W.index || d.W.index === e.W.index && d.Nf() < e.Nf()) e = d;
            b.$k(e);
            return ! 0
        },
        m.pC = function() {
            var a = this.W,
            b = a.F;
            b.length && b[b.length - 1] === this || (a.Fj(this, !1), a.$j(this, !1), this.c.kb = !0)
        },
        m.nr = function() {
            var a = this.W,
            b = a.F;
            b.length && b[0] === this || (a.Fj(this, !1), a.SA(this), this.c.kb = !0)
        },
        m.$v = function(a) {
            a && a != this.W && (this.W.Fj(this, !0), this.W = a, a.$j(this, !0), this.c.kb = !0)
        },
        m.xx = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Jm(this);
                d && d.uid !== this.uid && (this.W.index !== d.W.index && (this.W.Fj(this, !0), this.W = d.W, d.W.$j(this, !0)), this.W.yA(this, d, c), this.c.kb = !0)
            }
        },
        n.mC = function(a) {
            a.lb(this.W.Nt)
        },
        n.lC = function(a) {
            a.Sc(this.W.name)
        },
        n.JC = function(a) {
            a.lb(this.Nf())
        });
        p && (m.BC = function(a, b) {
            if (this.c.ga) {
                var c = this.type.kp(b);
                if (! (0 > c)) {
                    var d = 1 === a;
                    this.Wg[c] !== d && (this.Wg[c] = d, this.rf(), this.c.kb = !0)
                }
            }
        },
        m.CC = function(a, b, c) {
            if (this.c.ga) {
                var d = this.type.kp(a);
                0 > d || (a = this.type.Fa[d], d = this.Lb[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.c.ga.Ez(a.mc, b) && (c /= 100), d[b] !== c && (d[b] = c, a.gc && (this.c.kb = !0))))
            }
        })
    };
    rc = function() {
        this.Ko = this.Ho = !0;
        this.type.Rl = !0;
        this.c.kb = !0;
        var a, b, d = this.Io;
        a = 0;
        for (b = d.length; a < b; ++a) d[a](this);
        this.W.Ae && this.mb()
    };
    sc = function(a) {
        a && this.Io.push(a)
    };
    uc = function() {
        if (this.Ho) {
            var a = this.Vb,
            b = this.Cb;
            a.set(this.x, this.y, this.x + this.width, this.y + this.height);
            a.offset( - this.vd * this.width, -this.wd * this.height);
            this.O ? (a.offset( - this.x, -this.y), b.Hu(a, this.O), b.offset(this.x, this.y), b.Wr(a)) : b.ll(a);
            a.normalize();
            this.Ho = !1;
            this.OB()
        }
    };
    var a = new za(0, 0, 0, 0);
    vc = function() {
        if (this.W.Ae) {
            var c = this.W.ed,
            b = this.Vb;
            a.set(c.Dd(b.left), c.Ed(b.top), c.Dd(b.right), c.Ed(b.bottom));
            this.Nd.hk(a) || (this.Nd.right < this.Nd.left ? c.update(this, null, a) : c.update(this, this.Nd, a), this.Nd.dk(a), this.W.of = !0)
        }
    };
    wc = function() {
        if (this.Ko && this.Fe) {
            this.mb();
            var c = this.type.bk,
            b = this.Vb;
            a.set(c.Dd(b.left), c.Ed(b.top), c.Dd(b.right), c.Ed(b.bottom));
            this.Ee.hk(a) || (this.Ee.right < this.Ee.left ? c.update(this, null, a) : c.update(this, this.Ee, a), this.Ee.dk(a), this.Ko = !1)
        }
    };
    tc = function(a, b) {
        return this.Vb.kd(a, b) && this.Cb.kd(a, b) ? this.ag ? this.dD(a, b) : this.Va && !this.Va.ii() ? (this.Va.Ph(this.width, this.height, this.O), this.Va.kd(a - this.x, b - this.y)) : !0 : !1
    };
    nc = function() {
        this.type.jo();
        return this.fi
    };
    xc = function() {
        this.W.$q();
        return this.uf
    };
    yc = function() {
        J(this.nb);
        var a, b, d, f = !0;
        a = 0;
        for (b = this.Wg.length; a < b; a++) this.Wg[a] && (d = this.type.Fa[a], this.nb.push(d), d.mf || (f = !1));
        this.kv = !!this.nb.length;
        this.Gg = f
    };
    oc = function() {
        return "Inst" + this.ru
    };
    bc = function(a) {
        if (a && a.Jd && a.type != this) {
            var b, d, f;
            b = 0;
            for (d = a.siblings.length; b < d; b++) if (f = a.siblings[b], f.type == this) return f
        }
        a = this.Ya().Id();
        return a.length ? a[0] : null
    };
    cc = function(a) {
        var b = this.Ya().Id();
        return b.length ? b[a.rk() % b.length] : null
    };
    ac = function() {
        if (this.Lj && !this.qa) {
            var a, b;
            a = 0;
            for (b = this.F.length; a < b; a++) this.F[a].fi = a;
            var d = a,
            f = this.c.ff;
            a = 0;
            for (b = f.length; a < b; ++a) f[a].type === this && (f[a].fi = d++);
            this.Lj = !1
        }
    };
    lc = function(a) {
        if (a < this.F.length) return this.F[a];
        a -= this.F.length;
        var b = this.c.ff,
        d, f;
        d = 0;
        for (f = b.length; d < f; ++d) if (b[d].type === this) {
            if (0 === a) return b[d]; --a
        }
        return null
    };
    dc = function() {
        return this.Ig[this.Gf]
    };
    ec = function() {
        this.Gf++;
        this.Gf === this.Ig.length ? this.Ig.push(new $b(this)) : (this.Ig[this.Gf].rb = !0, J(this.Ig[this.Gf].Wa))
    };
    fc = function() {
        this.Gf++;
        this.Gf === this.Ig.length && this.Ig.push(new $b(this));
        var a = this.Ig[this.Gf],
        b = this.Ig[this.Gf - 1];
        b.rb ? (a.rb = !0, J(a.Wa)) : (a.rb = !1, Ja(a.F, b.F), Ja(a.Wa, b.Wa))
    };
    gc = function() {
        this.Gf--
    };
    hc = function(a) {
        var b, d, f, h, e, g = 0;
        if (!this.qa) for (b = 0, d = this.Jb.length; b < d; b++) for (e = this.Jb[b], f = 0, h = e.Kb.length; f < h; f++) {
            if (a === e.Kb[f].name) return this.ca.lastBehIndex = g,
            e.Kb[f];
            g++
        }
        b = 0;
        for (d = this.Kb.length; b < d; b++) {
            if (a === this.Kb[b].name) return this.ca.lastBehIndex = g,
            this.Kb[b];
            g++
        }
        return null
    };
    ic = function(a) {
        return this.Hm(a) ? this.ca.lastBehIndex: -1
    };
    jc = function(a) {
        var b, d;
        b = 0;
        for (d = this.Fa.length; b < d; b++) if (this.Fa[b].name === a) return b;
        return - 1
    };
    kc = function() {
        if (this.Jd && !this.qa) {
            var a, b, d, f, h, e, g;
            this.jo();
            e = this.Ya();
            var l = e.rb,
            p = (a = this.c.zc()) && a.xc && a.xc.Se;
            a = 0;
            for (b = this.Vd.length; a < b; a++) if (h = this.Vd[a], h !== this && (h.jo(), g = h.Ya(), g.rb = l, !l)) {
                J(g.F);
                d = 0;
                for (f = e.F.length; d < f; ++d) g.F[d] = h.lp(e.F[d].fi);
                if (p) for (J(g.Wa), d = 0, f = e.Wa.length; d < f; ++d) g.Wa[d] = h.lp(e.Wa[d].fi)
            }
        }
    };
    mc = function() {
        return "Type" + this.Za
    };
    Vc = function(a, b, d) {
        if ("undefined" === typeof a || "undefined" === typeof d) return ! 1;
        switch (b) {
        case 0:
            return a === d;
        case 1:
            return a !== d;
        case 2:
            return a < d;
        case 3:
            return a <= d;
        case 4:
            return a > d;
        case 5:
            return a >= d;
        default:
            return ! 1
        }
    }
})();
var dd = {};
function rd(a) {
    this.c = a
} (function() {
    function a() {
        return g.length ? g.pop() : []
    }
    function c(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) Array.isArray(a[b]) && c(a[b]);
        J(a);
        g.push(a)
    }
    function b() {}
    function d() {}
    function f() {}
    var h = rd.prototype;
    h.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    h.gb.prototype.ya = function() {};
    h.Ta = function(a) {
        this.type = a;
        this.c = a.c
    };
    var e = h.Ta.prototype,
    g = [];
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    });
    e.ya = function() {
        this.td = this.da[0];
        this.Wd = this.da[1];
        this.Ie = this.da[2];
        this.je || (this.Df = a());
        var b = this.Df;
        b.length = this.td;
        var c, d, e;
        for (c = 0; c < this.td; c++) for (b[c] || (b[c] = a()), b[c].length = this.Wd, d = 0; d < this.Wd; d++) for (b[c][d] || (b[c][d] = a()), b[c][d].length = this.Ie, e = 0; e < this.Ie; e++) b[c][d][e] = 0;
        this.Yd = [];
        this.Kf = [];
        this.Yh = [];
        this.Le = -1
    };
    e.Ai = function() {
        var a;
        for (a = 0; a < this.td; a++) c(this.Df[a]);
        J(this.Df)
    };
    e.ne = function(a, b, c) {
        a = Math.floor(a);
        b = Math.floor(b);
        c = Math.floor(c);
        return isNaN(a) || 0 > a || a > this.td - 1 || isNaN(b) || 0 > b || b > this.Wd - 1 || isNaN(c) || 0 > c || c > this.Ie - 1 ? 0 : this.Df[a][b][c]
    };
    e.set = function(a, b, c, d) {
        a = Math.floor(a);
        b = Math.floor(b);
        c = Math.floor(c);
        isNaN(a) || 0 > a || a > this.td - 1 || isNaN(b) || 0 > b || b > this.Wd - 1 || isNaN(c) || 0 > c || c > this.Ie - 1 || (this.Df[a][b][c] = d)
    };
    e.rz = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.td, this.Wd, this.Ie],
            data: this.Df
        })
    };
    e.Rc = function() {
        return {
            size: [this.td, this.Wd, this.Ie],
            data: this.Df
        }
    };
    e.od = function(a) {
        var b = a.size;
        this.td = b[0];
        this.Wd = b[1];
        this.Ie = b[2];
        this.Df = a.data
    };
    e.Fg = function(b, c, d) {
        0 > b && (b = 0);
        0 > c && (c = 0);
        0 > d && (d = 0);
        if (this.td !== b || this.Wd !== c || this.Ie !== d) {
            this.td = b;
            this.Wd = c;
            this.Ie = d;
            var e, f, g = this.Df;
            g.length = b;
            for (b = 0; b < this.td; b++) for (la(g[b]) && (g[b] = a()), g[b].length = c, e = 0; e < this.Wd; e++) for (la(g[b][e]) && (g[b][e] = a()), g[b][e].length = d, f = 0; f < this.Ie; f++) la(g[b][e][f]) && (g[b][e][f] = 0)
        }
    };
    e.Hs = function() {
        return 0 <= this.Le && this.Le < this.Yd.length ? this.Yd[this.Le] : 0
    };
    e.uz = function() {
        return 0 <= this.Le && this.Le < this.Kf.length ? this.Kf[this.Le] : 0
    };
    e.vz = function() {
        return 0 <= this.Le && this.Le < this.Yh.length ? this.Yh[this.Le] : 0
    };
    b.prototype.Cv = function(a, b, c) {
        return Vc(this.ne(a, 0, 0), b, c)
    };
    b.prototype.Dv = function(a, b, c, d) {
        return Vc(this.ne(a, b, 0), c, d)
    };
    e.Wo = function(a) {
        this.c.Bi(a.cb);
        a.Gj();
        this.c.Tf(a.cb)
    };
    b.prototype.tv = function(a) {
        var b = this.c.zc().xc;
        this.Le++;
        var c = this.Le;
        c === this.Yd.length ? (this.Yd.push(0), this.Kf.push(0), this.Yh.push(0)) : (this.Yd[c] = 0, this.Kf[c] = 0, this.Yh[c] = 0);
        switch (a) {
        case 0:
            for (this.Yd[c] = 0; this.Yd[c] < this.td; this.Yd[c]++) for (this.Kf[c] = 0; this.Kf[c] < this.Wd; this.Kf[c]++) for (this.Yh[c] = 0; this.Yh[c] < this.Ie; this.Yh[c]++) this.Wo(b);
            break;
        case 1:
            for (this.Yd[c] = 0; this.Yd[c] < this.td; this.Yd[c]++) for (this.Kf[c] = 0; this.Kf[c] < this.Wd; this.Kf[c]++) this.Wo(b);
            break;
        case 2:
            for (this.Yd[c] = 0; this.Yd[c] < this.td; this.Yd[c]++) this.Wo(b)
        }
        this.Le--;
        return ! 1
    };
    h.K = new b;
    d.prototype.zo = function(a, b, c) {
        this.Fg(a, b, c)
    };
    d.prototype.bx = function(a, b) {
        this.set(a, 0, 0, b)
    };
    d.prototype.cx = function(a, b, c) {
        this.set(a, b, 0, c)
    };
    d.prototype.mr = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch(c) {
            return
        }
        b.c2array && (a = b.size, this.td = a[0], this.Wd = a[1], this.Ie = a[2], this.Df = b.data)
    };
    h.V = new d;
    f.prototype.uv = function(a, b, c, d) {
        a.Tn(this.ne(b, c || 0, d || 0))
    };
    f.prototype.rx = function(a) {
        a.lb(this.td)
    };
    f.prototype.lr = function(a) {
        a.lb(this.Wd)
    };
    f.prototype.Iv = function(a) {
        a.lb(this.Hs())
    };
    f.prototype.Hv = function(a) {
        a.Tn(this.ne(this.Hs(), this.uz(), this.vz()))
    };
    f.prototype.Fl = function(a) {
        a.Sc(this.rz())
    };
    h.Aa = new f
})();
function sd(a) {
    this.c = a
} (function() {
    function a(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }
    function c(a) {
        a = a.toLowerCase();
        return ga.hasOwnProperty(a) && ga[a].length ? ga[a][0].qe() : D.destination
    }
    function b() {
        return D.createGain ? D.createGain() : D.createGainNode()
    }
    function d(a) {
        return D.createDelay ? D.createDelay(a) : D.createDelayNode(a)
    }
    function f(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }
    function h(a, b, c, d) {
        a.start ? a.start(d || 0, b) : a.noteGrainOn(d || 0, b, c - b)
    }
    function e(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch(b) {}
    }
    function g(a, c, d, e, f, g) {
        this.type = "filter";
        this.ob = [a, c, d, e, f, g];
        this.ab = b();
        this.Ca = b();
        this.Ca.gain.value = g;
        this.za = b();
        this.za.gain.value = 1 - g;
        this.ic = D.createBiquadFilter();
        this.ic.type = "number" === typeof this.ic.type ? a: Yc[a];
        this.ic.frequency.value = c;
        this.ic.detune && (this.ic.detune.value = d);
        this.ic.Q.value = e;
        this.ic.gain.value = f;
        this.ab.connect(this.ic);
        this.ab.connect(this.za);
        this.ic.connect(this.Ca)
    }
    function l(a, c, e) {
        this.type = "delay";
        this.ob = [a, c, e];
        this.ab = b();
        this.Ca = b();
        this.Ca.gain.value = e;
        this.za = b();
        this.za.gain.value = 1 - e;
        this.Vk = b();
        this.Ke = d(a);
        this.Ke.delayTime.value = a;
        this.rm = b();
        this.rm.gain.value = c;
        this.ab.connect(this.Vk);
        this.ab.connect(this.za);
        this.Vk.connect(this.Ca);
        this.Vk.connect(this.Ke);
        this.Ke.connect(this.rm);
        this.rm.connect(this.Vk)
    }
    function p(a, c, d, e) {
        this.type = "convolve";
        this.ob = [c, d, e];
        this.ab = b();
        this.Ca = b();
        this.Ca.gain.value = d;
        this.za = b();
        this.za.gain.value = 1 - d;
        this.Qh = D.createConvolver();
        a && (this.Qh.normalize = c, this.Qh.buffer = a);
        this.ab.connect(this.Qh);
        this.ab.connect(this.za);
        this.Qh.connect(this.Ca)
    }
    function k(a, c, e, g, k) {
        this.type = "flanger";
        this.ob = [a, c, e, g, k];
        this.ab = b();
        this.za = b();
        this.za.gain.value = 1 - k / 2;
        this.Ca = b();
        this.Ca.gain.value = k / 2;
        this.Bm = b();
        this.Bm.gain.value = g;
        this.Ke = d(a + c);
        this.Ke.delayTime.value = a;
        this.Qc = D.createOscillator();
        this.Qc.frequency.value = e;
        this.he = b();
        this.he.gain.value = c;
        this.ab.connect(this.Ke);
        this.ab.connect(this.za);
        this.Ke.connect(this.Ca);
        this.Ke.connect(this.Bm);
        this.Bm.connect(this.Ke);
        this.Qc.connect(this.he);
        this.he.connect(this.Ke.delayTime);
        f(this.Qc)
    }
    function m(a, c, d, e, g, k) {
        this.type = "phaser";
        this.ob = [a, c, d, e, g, k];
        this.ab = b();
        this.za = b();
        this.za.gain.value = 1 - k / 2;
        this.Ca = b();
        this.Ca.gain.value = k / 2;
        this.ic = D.createBiquadFilter();
        this.ic.type = "number" === typeof this.ic.type ? 7 : "allpass";
        this.ic.frequency.value = a;
        this.ic.detune && (this.ic.detune.value = c);
        this.ic.Q.value = d;
        this.Qc = D.createOscillator();
        this.Qc.frequency.value = g;
        this.he = b();
        this.he.gain.value = e;
        this.ab.connect(this.ic);
        this.ab.connect(this.za);
        this.ic.connect(this.Ca);
        this.Qc.connect(this.he);
        this.he.connect(this.ic.frequency);
        f(this.Qc)
    }
    function n(a) {
        this.type = "gain";
        this.ob = [a];
        this.jb = b();
        this.jb.gain.value = a
    }
    function q(a, c) {
        this.type = "tremolo";
        this.ob = [a, c];
        this.jb = b();
        this.jb.gain.value = 1 - c / 2;
        this.Qc = D.createOscillator();
        this.Qc.frequency.value = a;
        this.he = b();
        this.he.gain.value = c / 2;
        this.Qc.connect(this.he);
        this.he.connect(this.jb.gain);
        f(this.Qc)
    }
    function t(a, c) {
        this.type = "ringmod";
        this.ob = [a, c];
        this.ab = b();
        this.Ca = b();
        this.Ca.gain.value = c;
        this.za = b();
        this.za.gain.value = 1 - c;
        this.hl = b();
        this.hl.gain.value = 0;
        this.Qc = D.createOscillator();
        this.Qc.frequency.value = a;
        this.Qc.connect(this.hl.gain);
        f(this.Qc);
        this.ab.connect(this.hl);
        this.ab.connect(this.za);
        this.hl.connect(this.Ca)
    }
    function u(a, c, d, e, f) {
        this.type = "distortion";
        this.ob = [a, c, d, e, f];
        this.ab = b();
        this.Dn = b();
        this.Cn = b();
        this.rB(d, Math.pow(10, e / 20));
        this.Ca = b();
        this.Ca.gain.value = f;
        this.za = b();
        this.za.gain.value = 1 - f;
        this.qo = D.createWaveShaper();
        this.pm = new Float32Array(65536);
        this.pz(a, c);
        this.qo.pm = this.pm;
        this.ab.connect(this.Dn);
        this.ab.connect(this.za);
        this.Dn.connect(this.qo);
        this.qo.connect(this.Cn);
        this.Cn.connect(this.Ca)
    }
    function v(a, b, c, d, e) {
        this.type = "compressor";
        this.ob = [a, b, c, d, e];
        this.jb = D.createDynamicsCompressor();
        try {
            this.jb.threshold.value = a,
            this.jb.knee.value = b,
            this.jb.ratio.value = c,
            this.jb.attack.value = d,
            this.jb.release.value = e
        } catch(f) {}
    }
    function r(a, b) {
        this.type = "analyser";
        this.ob = [a, b];
        this.jb = D.createAnalyser();
        this.jb.fftSize = a;
        this.jb.smoothingTimeConstant = b;
        this.nz = new Float32Array(this.jb.frequencyBinCount);
        this.Ku = new Uint8Array(a);
        this.Zk = 0
    }
    function y() {
        this.qb = null;
        this.hn = 0
    }
    function C(a, c) {
        this.src = a;
        this.Ra = I;
        this.Pe = c;
        this.Ql = !1;
        var d = this;
        this.wj = this.Dj = null;
        this.Ej = [];
        this.Nn = 0;
        this.er = this.zm = this.Qu = this.yn = !1;
        1 === I && c && !xb && (this.Ra = 0, this.Dj = b());
        this.gg = this.hb = null;
        var e;
        switch (this.Ra) {
        case 0:
            this.hb = new Audio;
            this.hb.crossOrigin = "anonymous";
            this.hb.addEventListener("canplaythrough",
            function() {
                d.er = !0
            });
            1 === I && D.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Qu = !0, this.hb.addEventListener("canplay",
            function() { ! d.wj && d.hb && (d.wj = D.createMediaElementSource(d.hb), d.wj.connect(d.Dj))
            }));
            this.hb.autoplay = !1;
            this.hb.ZC = "auto";
            this.hb.src = a;
            break;
        case 1:
            G.Xm ? G.ws(a,
            function(a) {
                d.gg = a;
                d.ks()
            },
            function() {
                d.zm = !0
            }) : (e = new XMLHttpRequest, e.open("GET", a, !0), e.responseType = "arraybuffer", e.onload = function() {
                d.gg = e.response;
                d.ks()
            },
            e.onerror = function() {
                d.zm = !0
            },
            e.send());
            break;
        case 2:
            this.hb = !0;
            break;
        case 3:
            this.hb = !0
        }
    }
    function A(a, d) {
        var e = this;
        this.tag = d;
        this.nc = this.Lf = !0;
        this.src = a.src;
        this.buffer = a;
        this.Ra = I;
        this.Pe = a.Pe;
        this.playbackRate = 1;
        this.cj = !0;
        this.ae = this.ye = !1;
        this.Od = 0;
        this.Fk = this.hj = this.kf = !1;
        this.volume = 1;
        this.mq = function(a) {
            if (!e.ae && !e.ye) {
                var b = this;
                b || (b = a.target);
                b === e.Pl && (e.cj = !0, e.nc = !0, P = e.tag, G.trigger(sd.prototype.K.Jl, S))
            }
        };
        this.Pl = null;
        this.fj = 1 === T && !this.Pe || 2 === T;
        this.yj = 1;
        this.startTime = this.fj ? G.Mc.Ga: G.Ng.Ga;
        this.kc = this.yc = null;
        this.Qf = !1;
        this.cd = null;
        this.du = this.cu = this.bu = this.au = this.fu = this.eu = 0;
        this.U = null;
        var f = !1;
        1 !== this.Ra || 0 !== this.buffer.Ra || this.buffer.Qu || (this.Ra = 0);
        switch (this.Ra) {
        case 0:
            this.Pe ? (this.U = a.hb, f = !a.Ql, a.Ql = !0) : (this.U = new Audio, this.U.crossOrigin = "anonymous", this.U.autoplay = !1, this.U.src = a.hb.src, f = !0);
            f && this.U.addEventListener("ended",
            function() {
                P = e.tag;
                e.nc = !0;
                G.trigger(sd.prototype.K.Jl, S)
            });
            break;
        case 1:
            this.yc = b();
            this.yc.connect(c(d));
            1 === this.buffer.Ra ? a.hb && (this.U = D.createBufferSource(), this.U.buffer = a.hb, this.U.connect(this.yc)) : (this.U = this.buffer.hb, this.buffer.Dj.connect(this.yc), this.buffer.Ql || (this.buffer.Ql = !0, this.buffer.hb.addEventListener("ended",
            function() {
                P = e.tag;
                e.nc = !0;
                G.trigger(sd.prototype.K.Jl, S)
            })));
            break;
        case 2:
            this.U = new window.Media(Q + this.src, null, null,
            function(a) {
                a === window.Media.MEDIA_STOPPED && (e.cj = !0, e.nc = !0, P = e.tag, G.trigger(sd.prototype.K.Jl, S))
            });
            break;
        case 3:
            this.U = !0
        }
    }
    function E(a) {
        J(Ca);
        if (a.length) {
            var b, c, d;
            b = 0;
            for (c = H.length; b < c; b++) d = H[b],
            Vb(a, d.tag) && Ca.push(d)
        } else M && !M.ei() && (J(Ca), Ca[0] = M)
    }
    function F(a, b) {
        ga.hasOwnProperty(a) ? ga[a].push(b) : ga[a] = [b];
        var c, d, e, f, g = D.destination;
        if (ga.hasOwnProperty(a) && (e = ga[a], e.length)) for (g = e[0].qe(), c = 0, d = e.length; c < d; c++) f = e[c],
        c + 1 === d ? f.Ge(D.destination) : f.Ge(e[c + 1].qe());
        E(a);
        c = 0;
        for (d = Ca.length; c < d; c++) Ca[c].cB(g);
        Ia && Mb === a && (Ia.disconnect(), Ia.connect(g))
    }
    function B() {}
    function z() {}
    var w = sd.prototype;
    w.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    w.gb.prototype.ya = function() {};
    var G = null,
    S = null,
    P = "",
    Q = "",
    I = 0,
    D = null,
    V = [],
    H = [],
    M = null,
    N = !1,
    T = 0,
    O = !1,
    K = 1,
    U = 0,
    aa = 0,
    Oa = !1,
    ba = 1,
    Pa = 1,
    Ba = 10,
    Cb = 1E4,
    Jd = 1,
    Ia = null,
    Mb = "",
    ra = !1,
    wb = [],
    xb = !1,
    ga = {},
    Yc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    g.prototype.Ge = function(a) {
        this.Ca.disconnect();
        this.Ca.connect(a);
        this.za.disconnect();
        this.za.connect(a)
    };
    g.prototype.remove = function() {
        this.ab.disconnect();
        this.ic.disconnect();
        this.Ca.disconnect();
        this.za.disconnect()
    };
    g.prototype.qe = function() {
        return this.ab
    };
    l.prototype.Ge = function(a) {
        this.Ca.disconnect();
        this.Ca.connect(a);
        this.za.disconnect();
        this.za.connect(a)
    };
    l.prototype.remove = function() {
        this.ab.disconnect();
        this.Vk.disconnect();
        this.Ke.disconnect();
        this.rm.disconnect();
        this.Ca.disconnect();
        this.za.disconnect()
    };
    l.prototype.qe = function() {
        return this.ab
    };
    p.prototype.Ge = function(a) {
        this.Ca.disconnect();
        this.Ca.connect(a);
        this.za.disconnect();
        this.za.connect(a)
    };
    p.prototype.remove = function() {
        this.ab.disconnect();
        this.Qh.disconnect();
        this.Ca.disconnect();
        this.za.disconnect()
    };
    p.prototype.qe = function() {
        return this.ab
    };
    k.prototype.Ge = function(a) {
        this.za.disconnect();
        this.za.connect(a);
        this.Ca.disconnect();
        this.Ca.connect(a)
    };
    k.prototype.remove = function() {
        this.ab.disconnect();
        this.Ke.disconnect();
        this.Qc.disconnect();
        this.he.disconnect();
        this.za.disconnect();
        this.Ca.disconnect();
        this.Bm.disconnect()
    };
    k.prototype.qe = function() {
        return this.ab
    };
    m.prototype.Ge = function(a) {
        this.za.disconnect();
        this.za.connect(a);
        this.Ca.disconnect();
        this.Ca.connect(a)
    };
    m.prototype.remove = function() {
        this.ab.disconnect();
        this.ic.disconnect();
        this.Qc.disconnect();
        this.he.disconnect();
        this.za.disconnect();
        this.Ca.disconnect()
    };
    m.prototype.qe = function() {
        return this.ab
    };
    n.prototype.Ge = function(a) {
        this.jb.disconnect();
        this.jb.connect(a)
    };
    n.prototype.remove = function() {
        this.jb.disconnect()
    };
    n.prototype.qe = function() {
        return this.jb
    };
    q.prototype.Ge = function(a) {
        this.jb.disconnect();
        this.jb.connect(a)
    };
    q.prototype.remove = function() {
        this.Qc.disconnect();
        this.he.disconnect();
        this.jb.disconnect()
    };
    q.prototype.qe = function() {
        return this.jb
    };
    t.prototype.Ge = function(a) {
        this.Ca.disconnect();
        this.Ca.connect(a);
        this.za.disconnect();
        this.za.connect(a)
    };
    t.prototype.remove = function() {
        this.Qc.disconnect();
        this.hl.disconnect();
        this.ab.disconnect();
        this.Ca.disconnect();
        this.za.disconnect()
    };
    t.prototype.qe = function() {
        return this.ab
    };
    u.prototype.rB = function(a, b) {.01 > a && (a = .01);
        this.Dn.gain.value = a;
        this.Cn.gain.value = Math.pow(1 / a, .6) * b
    };
    u.prototype.shape = function(a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a: a;
        b = a < b ? a: b + d * (1 - Math.exp( - (1 / d) * (a - b)));
        return b * c
    };
    u.prototype.pz = function(a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, f = 0; 32768 > f; ++f) e = f / 32768,
        e = this.shape(e, c, d),
        this.pm[32768 + f] = e,
        this.pm[32768 - f - 1] = -e
    };
    u.prototype.Ge = function(a) {
        this.Ca.disconnect();
        this.Ca.connect(a);
        this.za.disconnect();
        this.za.connect(a)
    };
    u.prototype.remove = function() {
        this.ab.disconnect();
        this.Dn.disconnect();
        this.qo.disconnect();
        this.Cn.disconnect();
        this.Ca.disconnect();
        this.za.disconnect()
    };
    u.prototype.qe = function() {
        return this.ab
    };
    v.prototype.Ge = function(a) {
        this.jb.disconnect();
        this.jb.connect(a)
    };
    v.prototype.remove = function() {
        this.jb.disconnect()
    };
    v.prototype.qe = function() {
        return this.jb
    };
    r.prototype.Gc = function() {
        this.jb.getFloatFrequencyData(this.nz);
        this.jb.getByteTimeDomainData(this.Ku);
        for (var b = this.jb.fftSize,
        c = 0,
        d = this.Zk = 0,
        e = 0; c < b; c++) e = (this.Ku[c] - 128) / 128,
        0 > e && (e = -e),
        this.Zk < e && (this.Zk = e),
        d += e * e;
        this.Zk = a(this.Zk);
        a(Math.sqrt(d / b))
    };
    r.prototype.Ge = function(a) {
        this.jb.disconnect();
        this.jb.connect(a)
    };
    r.prototype.remove = function() {
        this.jb.disconnect()
    };
    r.prototype.qe = function() {
        return this.jb
    };
    y.prototype.jl = function(a) {
        this.qb = a
    };
    y.prototype.Qm = function() {
        return !! this.qb
    };
    y.prototype.Gc = function() {};
    var Zb = !1;
    C.prototype.dB = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = H.length; a < b; ++a) d = H[a],
        H[c] = d,
        d.buffer === this ? d.stop() : ++c;
        H.length = c;
        this.wj && (this.wj.disconnect(), this.wj = null);
        this.Dj && (this.Dj.disconnect(), this.Dj = null);
        this.gg = this.hb = null
    };
    C.prototype.ks = function() {
        if (!this.hb && this.gg) {
            var a = this;
            if (D.decodeAudioData) D.decodeAudioData(this.gg,
            function(b) {
                a.hb = b;
                a.gg = null;
                var c, d, e;
                if (la(a.zn) || O) la(a.jm) || (c = a.jm.Qh, c.normalize = a.Mt, c.buffer = b);
                else if (a.Ej.length) {
                    c = 0;
                    for (d = a.Ej.length; c < d; c++) {
                        b = a.Ej[c];
                        e = new A(a, b.Vu);
                        e.Iq(!0);
                        if ("undefined" !== typeof b.Ot && (b.qb = G.ci(b.Ot), !b.qb)) continue;
                        if (b.qb) {
                            var f = gb(b.qb.x, b.qb.y, -b.qb.W.$c(), U, aa, !0),
                            g = gb(b.qb.x, b.qb.y, -b.qb.W.$c(), U, aa, !1);
                            e.Hq(f, g, Sa(b.qb.O - b.qb.W.$c()), b.tp, b.gq, b.jq);
                            e.jl(b.qb)
                        } else e.Hq(b.x, b.y, b.R, b.tp, b.gq, b.jq);
                        e.play(a.$p, a.cr, a.Nn);
                        a.yn && e.pause();
                        H.push(e)
                    }
                    J(a.Ej)
                } else e = new A(a, a.zn || ""),
                e.play(a.$p, a.cr, a.Nn),
                a.yn && e.pause(),
                H.push(e)
            },
            function() {
                a.zm = !0
            });
            else if (this.hb = D.createBuffer(this.gg, !1), this.gg = null, la(this.zn) || O) la(this.jm) || (b = this.jm.Qh, b.normalize = this.Mt, b.buffer = this.hb);
            else {
                var b = new A(this, this.zn);
                b.play(this.$p, this.cr, this.Nn);
                this.yn && b.pause();
                H.push(b)
            }
        }
    };
    C.prototype.Xs = function() {
        switch (this.Ra) {
        case 0:
            var a = 4 <= this.hb.readyState;
            a && (this.er = !0);
            return a || this.er;
        case 1:
            return !! this.gg || !!this.hb;
        case 2:
            return ! 0;
        case 3:
            return ! 0
        }
        return ! 1
    };
    C.prototype.gA = function() {
        switch (this.Ra) {
        case 0:
            return this.Xs();
        case 1:
            return !! this.hb;
        case 2:
            return ! 0;
        case 3:
            return ! 0
        }
        return ! 1
    };
    C.prototype.Xz = function() {
        switch (this.Ra) {
        case 0:
            return !! this.hb.error;
        case 1:
            return this.zm
        }
        return ! 1
    };
    A.prototype.ei = function() {
        switch (this.Ra) {
        case 0:
            return this.U.ended;
        case 1:
            return 1 === this.buffer.Ra ? !this.Lf && !this.nc && this.U.loop || this.ae ? !1 : this.cj: this.U.ended;
        case 2:
            return this.cj;
        case 3:
            !0
        }
        return ! 0
    };
    A.prototype.Lx = function() {
        return this.Lf || this.nc ? !0 : this.ei()
    };
    A.prototype.Iq = function(a) {
        1 === I && (!this.Qf && a ? this.yc && (this.kc || (this.kc = D.createPanner(), this.kc.panningModel = "number" === typeof this.kc.panningModel ? ba: ["equalpower", "HRTF", "soundfield"][ba], this.kc.distanceModel = "number" === typeof this.kc.distanceModel ? Pa: ["linear", "inverse", "exponential"][Pa], this.kc.refDistance = Ba, this.kc.maxDistance = Cb, this.kc.rolloffFactor = Jd), this.yc.disconnect(), this.yc.connect(this.kc), this.kc.connect(c(this.tag)), this.Qf = !0) : this.Qf && !a && this.yc && (this.kc.disconnect(), this.yc.disconnect(), this.yc.connect(c(this.tag)), this.Qf = !1))
    };
    A.prototype.Hq = function(a, b, c, d, e, f) {
        this.Qf && 1 === I && (this.kc.setPosition(a, b, 0), this.kc.setOrientation(Math.cos(L(c)), Math.sin(L(c)), 0), this.kc.coneInnerAngle = d, this.kc.coneOuterAngle = e, this.kc.coneOuterGain = f, this.eu = a, this.fu = b, this.au = c, this.bu = d, this.cu = e, this.du = f)
    };
    A.prototype.jl = function(a) {
        this.Qf && 1 === I && (this.cd || (this.cd = new y), this.cd.jl(a))
    };
    A.prototype.Gc = function(a) {
        if (this.Qf && 1 === I && this.cd && this.cd.Qm() && this.Ck()) {
            this.cd.Gc(a);
            a = this.cd.qb;
            var b = gb(a.x, a.y, -a.W.$c(), U, aa, !0),
            c = gb(a.x, a.y, -a.W.$c(), U, aa, !1);
            this.kc.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.cd.qb.O && (b = a.O - a.W.$c(), this.kc.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    A.prototype.play = function(a, b, c, d) {
        var e = this.U;
        this.kf = a;
        this.volume = b;
        c = c || 0;
        d = d || 0;
        switch (this.Ra) {
        case 0:
            1 !== e.playbackRate && (e.playbackRate = 1);
            e.volume !== b * K && (e.volume = b * K);
            e.loop !== a && (e.loop = a);
            e.muted && (e.muted = !1);
            if (e.currentTime !== c) try {
                e.currentTime = c
            } catch(g) {}
            if (this.Pe && ra && !G.$d) wb.push(this);
            else try {
                this.U.play()
            } catch(k) {
                console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", k)
            }
            break;
        case 1:
            this.muted = !1;
            this.yj = 1;
            if (1 === this.buffer.Ra) this.yc.gain.value = b * K,
            this.Lf || (this.U = D.createBufferSource(), this.U.buffer = this.buffer.hb, this.U.connect(this.yc)),
            this.U.onended = this.mq,
            this.Pl = this.U,
            this.U.loop = a,
            this.cj = !1,
            0 === c ? f(this.U, d) : h(this.U, c, this.ai(), d);
            else {
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.loop !== a && (e.loop = a);
                e.volume = b * K;
                if (e.currentTime !== c) try {
                    e.currentTime = c
                } catch(l) {}
                this.Pe && ra && !G.$d ? wb.push(this) : e.play()
            }
            break;
        case 2:
            (!this.Lf && this.nc || 0 !== c) && e.seekTo(c);
            e.play();
            this.cj = !1;
            break;
        case 3:
            G.bd ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.fj ? G.Mc.Ga: G.Ng.Ga) - c;
        this.ae = this.nc = this.Lf = !1
    };
    A.prototype.stop = function() {
        switch (this.Ra) {
        case 0:
            this.U.paused || this.U.pause();
            break;
        case 1:
            1 === this.buffer.Ra ? e(this.U) : this.U.paused || this.U.pause();
            break;
        case 2:
            this.U.stop();
            break;
        case 3:
            G.bd && AppMobi.context.stopSound(this.src)
        }
        this.nc = !0;
        this.ae = !1
    };
    A.prototype.pause = function() {
        if (! (this.Lf || this.nc || this.ei() || this.ae)) {
            switch (this.Ra) {
            case 0:
                this.U.paused || this.U.pause();
                break;
            case 1:
                1 === this.buffer.Ra ? (this.Od = this.mp(!0), this.kf && (this.Od = this.Od % this.ai()), this.ae = !0, e(this.U)) : this.U.paused || this.U.pause();
                break;
            case 2:
                this.U.pause();
                break;
            case 3:
                G.bd && AppMobi.context.stopSound(this.src)
            }
            this.ae = !0
        }
    };
    A.prototype.vu = function() {
        if (! (this.Lf || this.nc || this.ei()) && this.ae) {
            switch (this.Ra) {
            case 0:
                this.U.play();
                break;
            case 1:
                1 === this.buffer.Ra ? (this.U = D.createBufferSource(), this.U.buffer = this.buffer.hb, this.U.connect(this.yc), this.U.onended = this.mq, this.Pl = this.U, this.U.loop = this.kf, this.yc.gain.value = K * this.volume * this.yj, this.ko(), this.startTime = (this.fj ? G.Mc.Ga: G.Ng.Ga) - this.Od / (this.playbackRate || .001), h(this.U, this.Od, this.ai())) : this.U.play();
                break;
            case 2:
                this.U.play();
                break;
            case 3:
                G.bd && AppMobi.context.resumeSound(this.src)
            }
            this.ae = !1
        }
    };
    A.prototype.seek = function(a) {
        if (! (this.Lf || this.nc || this.ei())) switch (this.Ra) {
        case 0:
            try {
                this.U.currentTime = a
            } catch(b) {}
            break;
        case 1:
            if (1 === this.buffer.Ra) this.ae ? this.Od = a: (this.pause(), this.Od = a, this.vu());
            else try {
                this.U.currentTime = a
            } catch(c) {}
            break;
        case 3:
            G.bd && AppMobi.context.seekSound(this.src, a)
        }
    };
    A.prototype.cB = function(a) {
        1 === this.Ra && (this.Qf ? (this.kc.disconnect(), this.kc.connect(a)) : (this.yc.disconnect(), this.yc.connect(a)))
    };
    A.prototype.ai = function() {
        var a = 0;
        switch (this.Ra) {
        case 0:
            "undefined" !== typeof this.U.duration && (a = this.U.duration);
            break;
        case 1:
            a = this.buffer.hb.duration;
            break;
        case 2:
            a = this.U.getDuration();
            break;
        case 3:
            G.bd && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    A.prototype.mp = function(a) {
        var b = this.ai(),
        c = 0;
        switch (this.Ra) {
        case 0:
            "undefined" !== typeof this.U.currentTime && (c = this.U.currentTime);
            break;
        case 1:
            if (1 === this.buffer.Ra) {
                if (this.ae) return this.Od;
                c = (this.fj ? G.Mc.Ga: G.Ng.Ga) - this.startTime
            } else "undefined" !== typeof this.U.currentTime && (c = this.U.currentTime);
            break;
        case 3:
            G.bd && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate); ! this.kf && c > b && (c = b);
        return c
    };
    A.prototype.Ck = function() {
        return ! this.ae && !this.Lf && !this.nc && !this.ei()
    };
    A.prototype.xB = function() {
        return ! this.Lf && !this.nc && !this.ei()
    };
    A.prototype.MB = function() {
        var a = this.volume * K;
        isFinite(a) || (a = 0);
        switch (this.Ra) {
        case 0:
            "undefined" !== typeof this.U.volume && this.U.volume !== a && (this.U.volume = a);
            break;
        case 1:
            1 === this.buffer.Ra ? this.yc.gain.value = a * this.yj: "undefined" !== typeof this.U.volume && this.U.volume !== a && (this.U.volume = a)
        }
    };
    A.prototype.wm = function(a) {
        switch (this.Ra) {
        case 0:
            this.U.muted !== !!a && (this.U.muted = !!a);
            break;
        case 1:
            1 === this.buffer.Ra ? (this.yj = a ? 0 : 1, this.yc.gain.value = K * this.volume * this.yj) : this.U.muted !== !!a && (this.U.muted = !!a)
        }
    };
    A.prototype.tB = function() {
        this.hj = !0;
        this.wm(this.hj || this.Fk)
    };
    A.prototype.Rn = function(a) {
        this.Fk = !!a;
        this.wm(this.hj || this.Fk)
    };
    A.prototype.sB = function(a) {
        this.kf = a;
        switch (this.Ra) {
        case 0:
            this.U.loop !== !!a && (this.U.loop = !!a);
            break;
        case 1:
            this.U.loop !== !!a && (this.U.loop = !!a);
            break;
        case 3:
            G.bd && AppMobi.context.setLoopingSound(this.src, a)
        }
    };
    A.prototype.ko = function() {
        var a = this.playbackRate;
        this.fj && (a *= G.Jg);
        switch (this.Ra) {
        case 0:
            this.U.playbackRate !== a && (this.U.playbackRate = a);
            break;
        case 1:
            1 === this.buffer.Ra ? this.U.playbackRate.value !== a && (this.U.playbackRate.value = a) : this.U.playbackRate !== a && (this.U.playbackRate = a)
        }
    };
    A.prototype.vB = function(a) {
        switch (this.Ra) {
        case 0:
            a ? this.Ck() ? (this.ye = !0, this.U.pause()) : this.ye = !1 : this.ye && (this.U.play(), this.ye = !1);
            break;
        case 1:
            a ? this.Ck() ? (this.ye = !0, 1 === this.buffer.Ra ? (this.Od = this.mp(!0), this.kf && (this.Od = this.Od % this.ai()), e(this.U)) : this.U.pause()) : this.ye = !1 : this.ye && (1 === this.buffer.Ra ? (this.U = D.createBufferSource(), this.U.buffer = this.buffer.hb, this.U.connect(this.yc), this.U.onended = this.mq, this.Pl = this.U, this.U.loop = this.kf, this.yc.gain.value = K * this.volume * this.yj, this.ko(), this.startTime = (this.fj ? G.Mc.Ga: G.Ng.Ga) - this.Od / (this.playbackRate || .001), h(this.U, this.Od, this.ai())) : this.U.play(), this.ye = !1);
            break;
        case 2:
            a ? this.Ck() ? (this.U.pause(), this.ye = !0) : this.ye = !1 : this.ye && (this.ye = !1, this.U.play())
        }
    };
    w.Ta = function(a) {
        function b() {
            "suspended" === D.state && D.resume && D.resume();
            if (!Oa && D.createBuffer) {
                var a = D.createBuffer(1, 220, 22050),
                c = D.createBufferSource();
                c.buffer = a;
                c.connect(D.destination);
                f(c)
            }
        }
        this.type = a;
        G = this.c = a.c;
        S = this;
        this.de = null;
        this.Kk = -600;
        this.c.Xm && (xb = !0); ! (this.c.kj || this.c.Sm && (this.c.Ap || this.c.Tm)) || this.c.Vm || this.c.Zb || this.c.Vs || xb || (ra = !0);
        D = null;
        "undefined" !== typeof AudioContext ? (I = 1, D = new AudioContext) : "undefined" !== typeof webkitAudioContext && (I = 1, D = new webkitAudioContext);
        this.c.kj && D && (D.close && D.close(), "undefined" !== typeof AudioContext ? D = new AudioContext: "undefined" !== typeof webkitAudioContext && (D = new webkitAudioContext));
        ra ? document.addEventListener("touchend",
        function() { ! Zb && D && (b(), Zb = !0);
            var a, c, d;
            if (ra) {
                if (!O) for (a = 0, c = wb.length; a < c; ++a) d = wb[a],
                d.nc || d.ae || d.U.play();
                J(wb)
            }
        },
        !0) : xb && document.addEventListener("touchend",
        function() { ! Zb && D && (b(), Zb = !0)
        },
        !0);
        1 !== I && (this.c.Zd && "undefined" !== typeof window.Media ? I = 2 : this.c.Ws && (I = 3));
        2 === I && (Q = location.href, a = Q.lastIndexOf("/"), -1 < a && (Q = Q.substr(0, a + 1)), Q = Q.replace("file://", ""));
        if (this.c.iA && this.c.jA && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."),
        this.c.Sg(this);
        else {
            if (this.c.bd) N = this.c.Sm;
            else try {
                N = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch(c) {
                N = !1
            }
            this.c.Rq(this)
        }
    };
    var Da = w.Ta.prototype;
    Da.ya = function() {
        this.c.Ri = this;
        T = this.da[0];
        this.Eg = this.da[1];
        this.MA = 0 !== this.da[2];
        this.Kt = 0;
        ba = this.da[3];
        Pa = this.da[4];
        this.Kk = -this.da[5];
        Ba = this.da[6];
        Cb = this.da[7];
        Jd = this.da[8];
        this.de = new y;
        var a = this.c.xa || this.c.width,
        b = this.c.wa || this.c.height;
        1 === I && (D.listener.setPosition(a / 2, b / 2, this.Kk), D.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Ia && Ia.disconnect();
            Mb = b.toLowerCase();
            Ia = D.createMediaStreamSource(a);
            Ia.connect(c(Mb))
        });
        this.c.Or(function(a) {
            S.IA(a)
        });
        var d = this;
        this.c.Eo(function(a) {
            d.kq(a)
        })
    };
    Da.kq = function(a) {
        var b, c, d;
        b = 0;
        for (c = H.length; b < c; b++) d = H[b],
        d.cd && d.cd.qb === a && (d.cd.qb = null, d.Qf && d.Ck() && d.kf && d.stop());
        this.de.qb === a && (this.de.qb = null)
    };
    Da.Rc = function() {
        var a = {
            silent: O,
            masterVolume: K,
            listenerZ: this.Kk,
            listenerUid: this.de.Qm() ? this.de.qb.uid: -1,
            playing: [],
            effects: {}
        },
        b = a.playing,
        c,
        d,
        e,
        f,
        g,
        k;
        c = 0;
        for (d = H.length; c < d; c++) e = H[c],
        !e.xB() || 3 === this.Eg || e.Pe && 1 === this.Eg || !e.Pe && 2 === this.Eg || (f = e.mp(), e.kf && (f = f % e.ai()), f = {
            tag: e.tag,
            buffersrc: e.buffer.src,
            is_music: e.Pe,
            playbackTime: f,
            volume: e.volume,
            looping: e.kf,
            muted: e.hj,
            playbackRate: e.playbackRate,
            paused: e.ae,
            resume_position: e.Od
        },
        e.Qf && (f.pan = {},
        k = f.pan, e.cd && e.cd.Qm() ? k.objUid = e.cd.qb.uid: (k.x = e.eu, k.y = e.fu, k.a = e.au), k.ia = e.bu, k.oa = e.cu, k.og = e.du), b.push(f));
        b = a.effects;
        for (g in ga) if (ga.hasOwnProperty(g)) {
            e = [];
            c = 0;
            for (d = ga[g].length; c < d; c++) e.push({
                type: ga[g][c].type,
                params: ga[g][c].ob
            });
            b[g] = e
        }
        return a
    };
    var Nb = [];
    Da.od = function(a) {
        var b = a.silent;
        K = a.masterVolume;
        this.Kk = a.listenerZ;
        this.de.jl(null);
        var c = a.listenerUid; - 1 !== c && (this.de.hn = c, Nb.push(this.de));
        var c = a.playing,
        d, e, f, h, C, A, E, z, B, w, G;
        if (3 !== this.Eg) for (d = 0, e = H.length; d < e; d++) B = H[d],
        B.Pe && 1 === this.Eg || (B.Pe || 2 !== this.Eg) && B.stop();
        for (C in ga) if (ga.hasOwnProperty(C)) for (d = 0, e = ga[C].length; d < e; d++) ga[C][d].remove();
        lb(ga);
        for (C in a.effects) if (a.effects.hasOwnProperty(C)) for (A = a.effects[C], d = 0, e = A.length; d < e; d++) switch (f = A[d].type, w = A[d].params, f) {
        case "filter":
            F(C, new g(w[0], w[1], w[2], w[3], w[4], w[5]));
            break;
        case "delay":
            F(C, new l(w[0], w[1], w[2]));
            break;
        case "convolve":
            f = w[2];
            B = this.Gm(f, !1);
            B.hb ? f = new p(B.hb, w[0], w[1], f) : (f = new p(null, w[0], w[1], f), B.Mt = w[0], B.jm = f);
            F(C, f);
            break;
        case "flanger":
            F(C, new k(w[0], w[1], w[2], w[3], w[4]));
            break;
        case "phaser":
            F(C, new m(w[0], w[1], w[2], w[3], w[4], w[5]));
            break;
        case "gain":
            F(C, new n(w[0]));
            break;
        case "tremolo":
            F(C, new q(w[0], w[1]));
            break;
        case "ringmod":
            F(C, new t(w[0], w[1]));
            break;
        case "distortion":
            F(C, new u(w[0], w[1], w[2], w[3], w[4]));
            break;
        case "compressor":
            F(C, new v(w[0], w[1], w[2], w[3], w[4]));
            break;
        case "analyser":
            F(C, new r(w[0], w[1]))
        }
        d = 0;
        for (e = c.length; d < e; d++) 3 === this.Eg || (a = c[d], f = a.buffersrc, h = a.is_music, C = a.tag, A = a.playbackTime, E = a.looping, z = a.volume, G = (w = a.pan) && w.hasOwnProperty("objUid") ? w.objUid: -1, h && 1 === this.Eg) || !h && 2 === this.Eg || ((B = this.Cs(f, C, h, E, z)) ? (B.Od = a.resume_position, B.Iq( !! w), B.play(E, z, A), B.ko(), B.MB(), B.wm(B.hj || B.Fk), a.paused && B.pause(), a.muted && B.tB(), B.wm(B.hj || B.Fk), w && ( - 1 !== G ? (B.cd = B.cd || new y, B.cd.hn = G, Nb.push(B.cd)) : B.Hq(w.x, w.y, w.a, w.ia, w.oa, w.og))) : (B = this.Gm(f, h), B.Nn = A, B.yn = a.paused, w && ( - 1 !== G ? B.Ej.push({
            Ot: G,
            tp: w.ia,
            gq: w.oa,
            jq: w.og,
            Vu: C
        }) : B.Ej.push({
            x: w.x,
            y: w.y,
            R: w.a,
            tp: w.ia,
            gq: w.oa,
            jq: w.og,
            Vu: C
        }))));
        if (b && !O) {
            d = 0;
            for (e = H.length; d < e; d++) H[d].Rn(!0);
            O = !0
        } else if (!b && O) {
            d = 0;
            for (e = H.length; d < e; d++) H[d].Rn(!1);
            O = !1
        }
    };
    Da.Bf = function() {
        var a, b, c, d;
        a = 0;
        for (b = Nb.length; a < b; a++) c = Nb[a],
        d = this.c.ci(c.hn),
        c.jl(d),
        c.hn = -1,
        d && (U = d.x, aa = d.y);
        J(Nb)
    };
    Da.IA = function(a) {
        if (!this.MA) { ! a && D && D.resume && (D.resume(), Oa = !1);
            var b, c;
            b = 0;
            for (c = H.length; b < c; b++) H[b].vB(a);
            a && D && D.suspend && (D.suspend(), Oa = !0)
        }
    };
    Da.Gc = function() {
        var a = this.c.Ja,
        b, c, d;
        b = 0;
        for (c = H.length; b < c; b++) d = H[b],
        d.Gc(a),
        0 !== T && d.ko();
        var e, f;
        for (e in ga) if (ga.hasOwnProperty(e)) for (d = ga[e], b = 0, c = d.length; b < c; b++) f = d[b],
        f.Gc && f.Gc();
        1 === I && this.de.Qm() && (this.de.Gc(a), U = this.de.qb.x, aa = this.de.qb.y, D.listener.setPosition(this.de.qb.x, this.de.qb.y, this.Kk))
    };
    var Ob = [];
    Da.uB = function(a) {
        var b, c, d, e, f, g = 0;
        b = 0;
        for (c = a.length; b < c; ++b) if (d = a[b], e = d[0], d = 2 * d[1], (f = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && N || !f && !N) Ob.push({
            filename: e,
            size: d,
            qb: null
        }),
        g += d;
        return g
    };
    Da.AB = function() {
        var a, b, c, d;
        a = 0;
        for (b = Ob.length; a < b; ++a) c = Ob[a],
        d = this.c.dp + c.filename,
        c.qb = this.Gm(d, !1)
    };
    Da.Bz = function() {
        var a = 0,
        b, c, d;
        b = 0;
        for (c = Ob.length; b < c; ++b) d = Ob[b],
        d.qb.gA() || d.qb.Xz() || this.c.Zb || this.c.Tm ? a += d.size: d.qb.Xs() && (a += Math.floor(d.size / 2));
        return a
    };
    Da.eB = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = V.length; a < b; ++a) d = V[a],
        V[c] = d,
        d.Pe ? d.dB() : ++c;
        V.length = c
    };
    Da.Gm = function(a, b) {
        var c, d, e, f = null;
        c = 0;
        for (d = V.length; c < d; c++) if (e = V[c], e.src === a) {
            f = e;
            break
        }
        f || (xb && b && this.eB(), f = new C(a, b), V.push(f));
        return f
    };
    Da.Cs = function(a, b, c, d, e) {
        var f, g, k;
        f = 0;
        for (g = H.length; f < g; f++) if (k = H[f], k.src === a && (k.Lx() || c)) return k.tag = b,
        k;
        a = this.Gm(a, c);
        if (!a.hb) return "<preload>" !== b && (a.zn = b, a.$p = d, a.cr = e),
        null;
        k = new A(a, b);
        H.push(k);
        return k
    };
    var Ca = [];
    B.prototype.Jl = function(a) {
        return Vb(P, a)
    };
    w.K = new B;
    z.prototype.Ew = function(a, b, c, d, e) { ! O && (d = Math.pow(10, d / 20), isFinite(d) || (d = 0), 0 > d && (d = 0), 1 < d && (d = 1), M = this.Cs(this.c.dp + b.toLowerCase() + (N ? ".ogg": ".m4a"), e, 1 === a, 0 !== c, d)) && (M.Iq(!1), M.play(0 !== c, d, 0, this.Kt), this.Kt = 0)
    };
    z.prototype.Qw = function(a, b) {
        E(a);
        var c, d;
        c = 0;
        for (d = Ca.length; c < d; c++) Ca[c].sB(0 === b)
    };
    z.prototype.hx = function(a) {
        E(a);
        var b;
        a = 0;
        for (b = Ca.length; a < b; a++) Ca[a].stop()
    };
    z.prototype.ix = function() {
        var a, b;
        a = 0;
        for (b = H.length; a < b; a++) H[a].stop()
    };
    z.prototype.Tw = function(a, b) {
        E(a);
        var c, d;
        c = 0;
        for (d = Ca.length; c < d; c++) 0 === b ? Ca[c].pause() : Ca[c].vu()
    };
    z.prototype.Ww = function(a) {
        var b;
        2 === a && (a = O ? 1 : 0);
        if (0 === a && !O) {
            a = 0;
            for (b = H.length; a < b; a++) H[a].Rn(!0);
            O = !0
        } else if (1 === a && O) {
            a = 0;
            for (b = H.length; a < b; a++) H[a].Rn(!1);
            O = !1
        }
    };
    w.V = new z;
    w.Aa = new
    function() {}
})();
function td(a) {
    this.c = a
} (function() {
    function a() {
        h && e && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(a) {
            g.HA(a)
        })
    }
    function c() {}
    function b() {}
    var d = td.prototype;
    d.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    var f = d.gb.prototype;
    f.ya = function() {};
    var h = !1,
    e = !1;
    document.addEventListener("DOMContentLoaded",
    function() {
        if (window.C2_RegisterSW && navigator.j) {
            var b = document.createElement("script");
            b.onload = function() {
                h = !0;
                a()
            };
            b.src = "offlineClient.js";
            document.head.appendChild(b)
        }
    });
    var g = null;
    f.St = function() {
        e = !0;
        a()
    };
    d.Ta = function(a) {
        this.type = a;
        this.c = a.c
    };
    f = d.Ta.prototype;
    f.ya = function() {
        var a = this;
        window.addEventListener("resize",
        function() {
            a.c.trigger(td.prototype.K.yw, a)
        });
        g = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online",
        function() {
            a.c.trigger(td.prototype.K.vw, a)
        }), window.addEventListener("offline",
        function() {
            a.c.trigger(td.prototype.K.sw, a)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready",
        function() {
            a.c.sj = 1;
            a.c.trigger(td.prototype.K.Ml, a)
        }), window.applicationCache.addEventListener("progress",
        function(b) {
            a.c.sj = b.loaded / b.total || 0
        }));
        this.c.bd || (document.addEventListener("appMobi.device.update.available",
        function() {
            a.c.trigger(td.prototype.K.Ml, a)
        }), document.addEventListener("backbutton",
        function() {
            a.c.trigger(td.prototype.K.Il, a)
        }), document.addEventListener("menubutton",
        function() {
            a.c.trigger(td.prototype.K.ur, a)
        }), document.addEventListener("searchbutton",
        function() {
            a.c.trigger(td.prototype.K.zw, a)
        }), document.addEventListener("tizenhwkey",
        function(b) {
            var c;
            switch (b.keyName) {
            case "back":
                c = a.c.trigger(td.prototype.K.Il, a); ! c && window.tizen && window.tizen.application.getCurrentApplication().exit();
                break;
            case "menu":
                (c = a.c.trigger(td.prototype.K.ur, a)) || b.preventDefault()
            }
        }));
        this.c.Hp && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",
        function(b) {
            a.c.trigger(td.prototype.K.Il, a) && (b.handled = !0)
        }) : this.c.Gp && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !! a.c.trigger(td.prototype.K.Il, a)
        });
        this.c.Or(function(b) {
            b ? a.c.trigger(td.prototype.K.ww, a) : a.c.trigger(td.prototype.K.xw, a)
        });
        this.mA = "undefined" !== typeof window.is_scirra_arcade
    };
    f.HA = function(a) {
        a = a.data.type;
        "downloading-update" === a ? this.c.trigger(td.prototype.K.Bw, this) : "update-ready" === a || "update-pending" === a ? this.c.trigger(td.prototype.K.Ml, this) : "offline-ready" === a && this.c.trigger(td.prototype.K.uw, this)
    };
    c.prototype.vw = function() {
        return ! 0
    };
    c.prototype.sw = function() {
        return ! 0
    };
    c.prototype.Ml = function() {
        return ! 0
    };
    c.prototype.xw = function() {
        return ! 0
    };
    c.prototype.ww = function() {
        return ! 0
    };
    c.prototype.yw = function() {
        return ! 0
    };
    c.prototype.Il = function() {
        return ! 0
    };
    c.prototype.ur = function() {
        return ! 0
    };
    c.prototype.zw = function() {
        return ! 0
    };
    c.prototype.Bw = function() {
        return ! 0
    };
    c.prototype.Ml = function() {
        return ! 0
    };
    c.prototype.uw = function() {
        return ! 0
    };
    d.K = new c;
    b.prototype.Pv = function(a, b) {
         
    };
    d.V = new b;
    d.Aa = new
    function() {}
})();
function qd(a) {
    this.c = a
} (function() {
    function a() {
        this.name = "";
        this.gl = 0;
        this.ob = []
    }
    function c() {
        g++;
        g === e.length && e.push(new a);
        return e[g]
    }
    function b() {}
    function d() {}
    function f() {}
    var h = qd.prototype;
    h.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    h.gb.prototype.ya = function() {};
    h.Ta = function(a) {
        this.type = a;
        this.c = a.c
    };
    var e = [],
    g = -1;
    h.Ta.prototype.ya = function() {
        var a = this;
        window.c2_callFunction = function(b, d) {
            var e, f, h, t = c();
            t.name = b.toLowerCase();
            t.gl = 0;
            if (d) for (t.ob.length = d.length, e = 0, f = d.length; e < f; ++e) h = d[e],
            t.ob[e] = "number" === typeof h || "string" === typeof h ? h: "boolean" === typeof h ? h ? 1 : 0 : 0;
            else J(t.ob);
            a.c.trigger(qd.prototype.K.Kl, a, t.name);
            g--;
            return t.gl
        }
    };
    b.prototype.Kl = function(a) {
        var b = 0 > g ? null: e[g];
        return b ? Vb(a, b.name) : !1
    };
    h.K = new b;
    d.prototype.CallFunction = function(a, b) {
        var d = c();
        d.name = a.toLowerCase();
        d.gl = 0;
        Ja(d.ob, b);
        this.c.trigger(qd.prototype.K.Kl, this, d.name);
        g--
    };
    h.V = new d;
    f.prototype.vv = function(a, b) {
        var d = c();
        d.name = b.toLowerCase();
        d.gl = 0;
        J(d.ob);
        var e, f;
        e = 2;
        for (f = arguments.length; e < f; e++) d.ob.push(arguments[e]);
        this.c.trigger(qd.prototype.K.Kl, this, d.name);
        g--;
        a.Tn(d.gl)
    };
    h.Aa = new f
})();
function ud(a) {
    this.c = a
} (function() {
    function a() {}
    var c = ud.prototype;
    c.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    c.gb.prototype.ya = function() {};
    c.Ta = function(a) {
        this.type = a;
        this.c = a.c;
        this.lj = Array(256);
        this.xl = Array(256);
        this.Lg = 0
    };
    var b = c.Ta.prototype;
    b.ya = function() {
        var a = this;
        this.c.Zb || (jQuery(document).keydown(function(b) {
            a.CA(b)
        }), jQuery(document).keyup(function(b) {
            a.DA(b)
        }))
    };
    var d = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    b.CA = function(a) {
        var b = !1;
        window != window.top && -1 < d.indexOf(a.which) && (a.preventDefault(), b = !0, a.stopPropagation());
        if (this.lj[a.which]) this.xl[a.which] && !b && a.preventDefault();
        else {
            this.lj[a.which] = !0;
            this.Lg = a.which;
            this.c.$d = !0;
            this.c.trigger(ud.prototype.K.dw, this);
            var c = this.c.trigger(ud.prototype.K.ow, this),
            g = this.c.trigger(ud.prototype.K.pw, this);
            this.c.$d = !1;
            if (c || g) this.xl[a.which] = !0,
            b || a.preventDefault()
        }
    };
    b.DA = function(a) {
        this.lj[a.which] = !1;
        this.Lg = a.which;
        this.c.$d = !0;
        this.c.trigger(ud.prototype.K.or, this);
        var b = this.c.trigger(ud.prototype.K.rr, this),
        c = this.c.trigger(ud.prototype.K.qr, this);
        this.c.$d = !1;
        if (b || c || this.xl[a.which]) this.xl[a.which] = !0,
        a.preventDefault()
    };
    b.Cj = function() {
        var a;
        for (a = 0; 256 > a; ++a) if (this.lj[a]) {
            this.lj[a] = !1;
            this.Lg = a;
            this.c.trigger(ud.prototype.K.or, this);
            var b = this.c.trigger(ud.prototype.K.rr, this),
            c = this.c.trigger(ud.prototype.K.qr, this);
            if (b || c) this.xl[a] = !0
        }
    };
    b.Rc = function() {
        return {
            triggerKey: this.Lg
        }
    };
    b.od = function(a) {
        this.Lg = a.triggerKey
    };
    a.prototype.Vv = function(a) {
        return this.lj[a]
    };
    a.prototype.ow = function(a) {
        return a === this.Lg
    };
    a.prototype.dw = function() {
        return ! 0
    };
    a.prototype.or = function() {
        return ! 0
    };
    a.prototype.rr = function(a) {
        return a === this.Lg
    };
    a.prototype.pw = function(a) {
        return a === this.Lg
    };
    a.prototype.qr = function(a) {
        return a === this.Lg
    };
    c.K = new a;
    c.V = new
    function() {};
    c.Aa = new
    function() {}
})();
function vd(a) {
    this.c = a
} (function() {
    function a() {}
    var c = vd.prototype;
    c.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    var b = null,
    d = null;
    c.gb.prototype.ya = function() {};
    c.Ta = function(a) {
        this.type = a;
        this.c = a.c;
        this.yu = []
    };
    var f = c.Ta.prototype;
    f.ya = function() {
        b = this.c;
        d = this;
       
    };
    f.If = function() {};
    f.Gd = function() {};
    a.prototype.Wt = function() {
        return ! 0
    };
    a.prototype.Tt = function() {
        return ! 0
    };
    a.prototype.BA = function() {
        return ! 0
    };
    c.K = new a;
    c.V = {};
    f = c.V;
    f.Rx = function(a, c) {
        
    };
    f.Px = function(a) {
        
    };
    f.LC = function(a, c) {
        var f = {};
        f.score = a;
        f.board = c;
        
    };
    f.Qx = function(a) {
        if (! ( - 1 < this.yu.indexOf(a))) {
            var b = [];
            b.push(a);
            this.yu.push(a);
            
        }
    };
    c.Aa = {}
})();
function fd(a) {
    this.c = a
} (function() {
    function a() {
        if (0 === this.To.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Kj ? b.drawImage(this.ra, this.Aj, this.Bj, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.ra, 0, 0, this.width, this.height);
            this.To = a.toDataURL("image/png")
        }
        return this.To
    }
    function c() {}
    function b(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        q.push(a)
    }
    function d(a, b) {
        return a < b ? "" + a + "," + b: "" + b + "," + a
    }
    function f(a, b, c, e) {
        b = b.uid;
        c = c.uid;
        var f = d(b, c);
        if (a.hasOwnProperty(f)) a[f][2] = e;
        else {
            var g = q.length ? q.pop() : [0, 0, 0];
            g[0] = b;
            g[1] = c;
            g[2] = e;
            a[f] = g
        }
    }
    function h(a, c, e) {
        c = d(c.uid, e.uid);
        a.hasOwnProperty(c) && (b(a[c]), delete a[c])
    }
    function e(a, b, c) {
        b = d(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return t = a[b][2],
        !0;
        t = -2;
        return ! 1
    }
    function g() {}
    function l() {}
    var p = fd.prototype;
    p.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    var k = p.gb.prototype;
    k.ya = function() {
        if (!this.qa) {
            var b, c, d, e, f, g, k, h, l;
            this.cf = [];
            this.uk = !1;
            b = 0;
            for (c = this.Ud.length; b < c; b++) {
                f = this.Ud[b];
                k = {};
                k.name = f[0];
                k.speed = f[1];
                k.loop = f[2];
                k.zq = f[3];
                k.Aq = f[4];
                k.ju = f[5];
                k.Za = f[6];
                k.frames = [];
                d = 0;
                for (e = f[7].length; d < e; d++) g = f[7][d],
                h = {},
                h.ao = g[0],
                h.Pq = g[1],
                h.Aj = g[2],
                h.Bj = g[3],
                h.width = g[4],
                h.height = g[5],
                h.duration = g[6],
                h.vd = g[7],
                h.wd = g[8],
                h.up = g[9],
                h.An = g[10],
                h.ku = g[11],
                h.Kj = 0 !== h.width,
                h.To = "",
                h.PC = a,
                l = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                },
                h.Jq = l,
                h.Ha = null,
                (l = this.c.mz(g[0])) ? h.ra = l: (h.ra = new Image, h.ra.Ux = g[0], h.ra.ds = g[1], h.ra.Jx = null, this.c.dr(h.ra, g[0])),
                k.frames.push(h),
                this.cf.push(h);
                this.Ud[b] = k
            }
        }
    };
    k.hv = function() {
        var a, b, c;
        a = 0;
        for (b = this.F.length; a < b; a++) c = this.F[a],
        c.mm = c.Wc.Ha
    };
    k.sn = function() {
        if (!this.qa) {
            var a, b, c;
            a = 0;
            for (b = this.cf.length; a < b; ++a) c = this.cf[a],
            c.ra.Jx = null,
            c.Ha = null;
            this.uk = !1;
            this.hv()
        }
    };
    k.un = function() {
        if (!this.qa && this.F.length) {
            var a, b, c;
            a = 0;
            for (b = this.cf.length; a < b; ++a) c = this.cf[a],
            c.Ha = this.c.ga.rj(c.ra, !1, this.c.Eb, c.ku);
            this.hv()
        }
    };
    k.Vp = function() {
        if (!this.qa && !this.uk && this.c.ga) {
            var a, b, c;
            a = 0;
            for (b = this.cf.length; a < b; ++a) c = this.cf[a],
            c.Ha = this.c.ga.rj(c.ra, !1, this.c.Eb, c.ku);
            this.uk = !0
        }
    };
    k.io = function() {
        if (!this.qa && !this.F.length && this.uk) {
            var a, b, c;
            a = 0;
            for (b = this.cf.length; a < b; ++a) c = this.cf[a],
            this.c.ga.deleteTexture(c.Ha),
            c.Ha = null;
            this.uk = !1
        }
    };
    var m = [];
    k.En = function(a) {
        var b, c, d;
        J(m);
        b = 0;
        for (c = this.cf.length; b < c; ++b) d = this.cf[b].ra,
        -1 === m.indexOf(d) && (a.drawImage(d, 0, 0), m.push(d))
    };
    p.Ta = function(a) {
        this.type = a;
        this.c = a.c;
        a = this.type.Ud[0].frames[0].An;
        this.je ? this.Va.ml(a) : this.Va = new Db(a)
    };
    var n = p.Ta.prototype;
    n.ya = function() {
        this.visible = 0 === this.da[0];
        this.vp = this.Fp = !1;
        this.Fe = 0 !== this.da[3];
        this.yb = this.Bs(this.da[1]) || this.type.Ud[0];
        this.ma = this.da[2];
        0 > this.ma && (this.ma = 0);
        this.ma >= this.yb.frames.length && (this.ma = this.yb.frames.length - 1);
        var a = this.yb.frames[this.ma];
        this.Va.ml(a.An);
        this.vd = a.vd;
        this.wd = a.wd;
        this.Ui = this.yb.speed;
        this.gh = this.yb.Aq;
        1 === this.type.Ud.length && 1 === this.type.Ud[0].frames.length || 0 === this.Ui || (this.c.Rq(this), this.Fp = !0);
        this.je ? this.Cf.reset() : this.Cf = new zb;
        this.qg = this.Cf.Ga;
        this.Lh = !0;
        this.fg = 0;
        this.Kh = !0;
        this.No = this.Qr = "";
        this.Mx = 0;
        this.cm = -1;
        this.type.Vp();
        var b, c, d, e, f, g, k, a = 0;
        for (b = this.type.Ud.length; a < b; a++) for (e = this.type.Ud[a], c = 0, d = e.frames.length; c < d; c++) f = e.frames[c],
        0 === f.width && (f.width = f.ra.width, f.height = f.ra.height),
        f.Kj && (k = f.ra, g = f.Jq, g.left = f.Aj / k.width, g.top = f.Bj / k.height, g.right = (f.Aj + f.width) / k.width, g.bottom = (f.Bj + f.height) / k.height, 0 === f.Aj && 0 === f.Bj && f.width === k.width && f.height === k.height && (f.Kj = !1));
        this.Wc = this.yb.frames[this.ma];
        this.mm = this.Wc.Ha
    };
    n.Rc = function() {
        var a = {
            a: this.yb.Za,
            f: this.ma,
            cas: this.Ui,
            fs: this.qg,
            ar: this.fg,
            at: this.Cf.Ga,
            rt: this.gh
        };
        this.Lh || (a.ap = this.Lh);
        this.Kh || (a.af = this.Kh);
        return a
    };
    n.od = function(a) {
        var b = this.qz(a.a);
        b && (this.yb = b);
        this.ma = a.f;
        0 > this.ma && (this.ma = 0);
        this.ma >= this.yb.frames.length && (this.ma = this.yb.frames.length - 1);
        this.Ui = a.cas;
        this.qg = a.fs;
        this.fg = a.ar;
        this.Cf.reset();
        this.Cf.Ga = a.at;
        this.Lh = a.hasOwnProperty("ap") ? a.ap: !0;
        this.Kh = a.hasOwnProperty("af") ? a.af: !0;
        a.hasOwnProperty("rt") ? this.gh = a.rt: this.gh = this.yb.Aq;
        this.Wc = this.yb.frames[this.ma];
        this.mm = this.Wc.Ha;
        this.Va.ml(this.Wc.An);
        this.vd = this.Wc.vd;
        this.wd = this.Wc.wd
    };
    n.Go = function(a) {
        this.ma = a ? 0 : this.yb.frames.length - 1;
        this.Lh = !1;
        this.Qr = this.yb.name;
        this.vp = !0;
        this.c.trigger(fd.prototype.K.bw, this);
        this.c.trigger(fd.prototype.K.aw, this);
        this.vp = !1;
        this.fg = 0
    };
    n.j = function() {
        return this.Cf.Ga
    };
    n.Gc = function() {
        this.Cf.add(this.c.$h(this));
        this.No.length && this.$x();
        0 <= this.cm && this.ms();
        var a = this.Cf.Ga,
        b = this.yb,
        c = b.frames[this.ma],
        d = c.duration / this.Ui;
        this.Lh && a >= this.qg + d && (this.Kh ? this.ma++:this.ma--, this.qg += d, this.ma >= b.frames.length && (b.ju ? (this.Kh = !1, this.ma = b.frames.length - 2) : b.loop ? this.ma = this.gh: (this.fg++, this.fg >= b.zq ? this.Go(!1) : this.ma = this.gh)), 0 > this.ma && (b.ju ? (this.ma = 1, this.Kh = !0, b.loop || (this.fg++, this.fg >= b.zq && this.Go(!0))) : b.loop ? this.ma = this.gh: (this.fg++, this.fg >= b.zq ? this.Go(!0) : this.ma = this.gh)), 0 > this.ma ? this.ma = 0 : this.ma >= b.frames.length && (this.ma = b.frames.length - 1), a > this.qg + b.frames[this.ma].duration / this.Ui && (this.qg = a), a = b.frames[this.ma], this.Pi(c, a), this.c.kb = !0)
    };
    n.Bs = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Ud.length; b < c; b++) if (d = this.type.Ud[b], Vb(d.name, a)) return d;
        return null
    };
    n.qz = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Ud.length; b < c; b++) if (d = this.type.Ud[b], d.Za === a) return d;
        return null
    };
    n.$x = function() {
        var a = this.yb.frames[this.ma],
        b = this.Bs(this.No);
        this.No = ""; ! b || Vb(b.name, this.yb.name) && this.Lh || (this.yb = b, this.Ui = b.speed, this.gh = b.Aq, 0 > this.ma && (this.ma = 0), this.ma >= this.yb.frames.length && (this.ma = this.yb.frames.length - 1), 1 === this.Mx && (this.ma = 0), this.Lh = !0, this.qg = this.Cf.Ga, this.Kh = !0, this.Pi(a, this.yb.frames[this.ma]), this.c.kb = !0)
    };
    n.ms = function() {
        var a = this.yb.frames[this.ma],
        b = this.ma;
        this.ma = va(this.cm);
        0 > this.ma && (this.ma = 0);
        this.ma >= this.yb.frames.length && (this.ma = this.yb.frames.length - 1);
        b !== this.ma && (this.Pi(a, this.yb.frames[this.ma]), this.qg = this.Cf.Ga, this.c.kb = !0);
        this.cm = -1
    };
    n.Pi = function(a, b) {
        var c = a.width,
        d = a.height,
        e = b.width,
        f = b.height;
        c != e && (this.width *= e / c);
        d != f && (this.height *= f / d);
        this.vd = b.vd;
        this.wd = b.wd;
        this.Va.ml(b.An);
        this.La();
        this.Wc = b;
        this.mm = b.Ha;
        c = 0;
        for (d = this.Ea.length; c < d; c++) e = this.Ea[c],
        e.Xt && e.Xt(a, b);
        this.c.trigger(fd.prototype.K.Pi, this)
    };
    n.If = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Wc,
        c = b.Kj,
        d = b.ra,
        e = this.x,
        f = this.y,
        g = this.width,
        k = this.height;
        if (0 === this.O && 0 <= g && 0 <= k) e -= this.vd * g,
        f -= this.wd * k,
        this.c.lf && (e = Math.round(e), f = Math.round(f)),
        c ? a.drawImage(d, b.Aj, b.Bj, b.width, b.height, e, f, g, k) : a.drawImage(d, e, f, g, k);
        else {
            this.c.lf && (e = Math.round(e), f = Math.round(f));
            a.save();
            var h = 0 < g ? 1 : -1,
            l = 0 < k ? 1 : -1;
            a.translate(e, f);
            1 === h && 1 === l || a.scale(h, l);
            a.rotate(this.O * h * l);
            e = 0 - this.vd * qa(g);
            f = 0 - this.wd * qa(k);
            c ? a.drawImage(d, b.Aj, b.Bj, b.width, b.height, e, f, qa(g), qa(k)) : a.drawImage(d, e, f, qa(g), qa(k));
            a.restore()
        }
    };
    n.Sh = function(a) {
        this.Gd(a)
    };
    n.Gd = function(a) {
        a.ke(this.mm);
        a.Ci(this.opacity);
        var b = this.Wc,
        c = this.Cb;
        if (this.c.lf) {
            var d = Math.round(this.x) - this.x,
            e = Math.round(this.y) - this.y;
            b.Kj ? a.Uf(c.Sb + d, c.Tb + e, c.Hc + d, c.Ic + e, c.sc + d, c.tc + e, c.qc + d, c.rc + e, b.Jq) : a.dl(c.Sb + d, c.Tb + e, c.Hc + d, c.Ic + e, c.sc + d, c.tc + e, c.qc + d, c.rc + e)
        } else b.Kj ? a.Uf(c.Sb, c.Tb, c.Hc, c.Ic, c.sc, c.tc, c.qc, c.rc, b.Jq) : a.dl(c.Sb, c.Tb, c.Hc, c.Ic, c.sc, c.tc, c.qc, c.rc)
    };
    n.xz = function(a) {
        var b = this.Wc,
        c, d;
        c = 0;
        for (d = b.up.length; c < d; c++) if (Vb(a, b.up[c][0])) return c;
        return - 1
    };
    n.Me = function(a, b) {
        var c = this.Wc,
        d = c.up,
        e;
        na(a) ? e = this.xz(a) : e = a - 1;
        e = va(e);
        if (0 > e || e >= d.length) return b ? this.x: this.y;
        var f = (d[e][1] - c.vd) * this.width,
        d = d[e][2],
        d = (d - c.wd) * this.height,
        c = Math.cos(this.O);
        e = Math.sin(this.O);
        var g = f * c - d * e,
        d = d * c + f * e,
        f = g + this.x,
        d = d + this.y;
        return b ? f: d
    };
    var q = [],
    t = -2,
    u = [];
    c.prototype.fw = function(a) {
        if (!a) return ! 1;
        var c = this.c,
        d = c.Im(),
        g = d.type,
        k = null;
        d.ca.collmemory ? k = d.ca.collmemory: (k = {},
        d.ca.collmemory = k);
        d.ca.spriteCreatedDestroyCallback || (d.ca.spriteCreatedDestroyCallback = !0, c.Eo(function(a) {
            var c = d.ca.collmemory;
            a = a.uid;
            var e, f;
            for (e in c) c.hasOwnProperty(e) && (f = c[e], f[0] === a || f[1] === a) && (b(c[e]), delete c[e])
        }));
        var l = g.Ya(),
        n = a.Ya(),
        l = l.Id(),
        m,
        p,
        q,
        r,
        v,
        I,
        D,
        V = this.c.$f,
        H = V - 1,
        M = c.zc().xc;
        for (p = 0; p < l.length; p++) {
            q = l[p];
            n.rb ? (q.mb(), this.c.Ds(q.W, a, q.Vb, u), m = u) : m = n.Id();
            for (r = 0; r < m.length; r++) v = m[r],
            c.Fi(q, v) || c.Nx(q, v) ? (I = e(k, q, v), I = !I || t < H, f(k, q, v, V), I && (c.Bi(M.cb), I = g.Ya(), D = a.Ya(), I.rb = !1, D.rb = !1, g === a ? (I.F.length = 2, I.F[0] = q, I.F[1] = v, g.De()) : (I.F.length = 1, D.F.length = 1, I.F[0] = q, D.F[0] = v, g.De(), a.De()), M.Gj(), c.Tf(M.cb))) : h(k, q, v);
            J(u)
        }
        return ! 1
    };
    var v = new ea,
    r = !1;
    new za(0, 0, 0, 0);
    k.finish = function(a) {
        if (r) {
            if (a) {
                var b = this.c.zc().xc.Se;
                a = null.Ya();
                var c = v.tf(),
                d,
                e;
                if (a.rb) {
                    a.rb = !1;
                    J(a.F);
                    d = 0;
                    for (e = c.length; d < e; ++d) a.F[d] = c[d];
                    if (b) for (J(a.Wa), d = 0, e = null.F.length; d < e; ++d) c = null.F[d],
                    v.contains(c) || a.Wa.push(c)
                } else if (b) for (b = a.F.length, d = 0, e = c.length; d < e; ++d) a.F[b + d] = c[d],
                Na(a.Wa, c[d]);
                else Ja(a.F, c);
                null.De()
            }
            v.clear();
            r = !1
        }
    };
    c.prototype.aw = function(a) {
        return Vb(this.Qr, a)
    };
    c.prototype.bw = function() {
        return ! 0
    };
    c.prototype.Pi = function() {
        return ! 0
    };
    p.K = new c;
    g.prototype.Kw = function(a) {
        this.cm = a;
        this.Fp || (this.c.Rq(this), this.Fp = !0);
        this.vp || this.ms()
    };
    g.prototype.Nw = function(a) {
        this.Fe !== (0 !== a) && ((this.Fe = 0 !== a) ? this.La() : (this.Ee.right >= this.Ee.left && this.type.bk.update(this, this.Ee, null), this.Ee.set(0, 0, -1, -1)))
    };
    p.V = new g;
    l.prototype.Qv = function(a, b) {
        a.la(this.Me(b, !0))
    };
    l.prototype.Rv = function(a, b) {
        a.la(this.Me(b, !1))
    };
    p.Aa = new l
})();
function wd(a) {
    this.c = a
} (function() {
    function a(a, b) {
        return a.length ? a.pop() : new b
    }
    function c(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < e && a.push(b[c]);
            J(b)
        } else for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < e && a.push(b[d]), delete b[d])
    }
    function b(b, c, d) {
        var e = b.qi;
        d = d.replace(/\s\s*$/, "");
        c >= e.length && e.push(a(g, Object));
        c = e[c];
        c.text = d;
        c.width = b.cq(d);
        b.Nj = sa(b.Nj, c.width)
    }
    function d() {}
    var f = wd.prototype;
    f.ya = function() {};
    f.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    var h = f.gb.prototype;
    h.ya = function() {
        this.qa || (this.ra = new Image, this.c.dr(this.ra, this.ao), this.Ha = null)
    };
    h.sn = function() {
        this.qa || (this.Ha = null)
    };
    h.un = function() {
        if (!this.qa && this.F.length) {
            this.Ha || (this.Ha = this.c.ga.rj(this.ra, !1, this.c.Eb, this.ul));
            var a, b;
            a = 0;
            for (b = this.F.length; a < b; a++) this.F[a].Ha = this.Ha
        }
    };
    h.io = function() {
        this.qa || this.F.length || !this.Ha || (this.c.ga.deleteTexture(this.Ha), this.Ha = null)
    };
    h.En = function(a) {
        a.drawImage(this.ra, 0, 0)
    };
    f.Ta = function(a) {
        this.type = a;
        this.c = a.c
    };
    h = f.Ta.prototype;
    h.Ai = function() {
        c(g, this.qi, !0);
        c(l, this.em, !1);
        c(p, this.fm, !1);
        lb(this.dh)
    };
    h.ya = function() {
        this.ra = this.type.ra;
        this.dm = this.da[0];
        this.ah = this.da[1];
        this.characterSet = this.da[2];
        this.text = this.da[3];
        this.bh = this.da[4];
        this.visible = 0 === this.da[5];
        this.Pm = this.da[6] / 2;
        this.no = this.da[7] / 2;
        this.TB = 0 === this.da[9];
        this.Ti = this.da[10];
        this.lineHeight = this.da[11];
        this.Hi = this.Nj = 0;
        this.je ? (J(this.qi), lb(this.em), lb(this.fm), lb(this.dh)) : (this.qi = [], this.em = {},
        this.fm = {},
        this.dh = {});
        this.tl = !0;
        this.Tp = this.width;
        this.c.ga && (this.type.Ha || (this.type.Ha = this.c.ga.rj(this.type.ra, !1, this.c.Eb, this.type.ul)), this.Ha = this.type.Ha);
        this.gx()
    };
    h.Rc = function() {
        var a = {
            t: this.text,
            csc: this.bh,
            csp: this.Ti,
            lh: this.lineHeight,
            tw: this.Nj,
            th: this.Hi,
            lrt: this.pA,
            ha: this.Pm,
            va: this.no,
            cw: {}
        },
        b;
        for (b in this.dh) a.cw[b] = this.dh[b];
        return a
    };
    h.od = function(a) {
        this.text = a.t;
        this.bh = a.csc;
        this.Ti = a.csp;
        this.lineHeight = a.lh;
        this.Nj = a.tw;
        this.Hi = a.th;
        this.pA = a.lrt;
        a.hasOwnProperty("ha") && (this.Pm = a.ha);
        a.hasOwnProperty("va") && (this.no = a.va);
        for (var b in a.cw) this.dh[b] = a.cw[b];
        this.tl = !0;
        this.Tp = this.width
    };
    var e = 1E3,
    g = [],
    l = [],
    p = [];
    h.gx = function() {
        for (var b = this.ra,
        c = b.width,
        d = b.height,
        b = this.dm,
        e = this.ah,
        f = b / c,
        g = e / d,
        k = this.characterSet,
        c = Math.floor(c / b), d = Math.floor(d / e), h = 0; h < k.length && !(h >= c * d); h++) {
            var m = h % c,
            E = Math.floor(h / c),
            F = k.charAt(h);
            if (this.c.ga) {
                var B = this.fm,
                z = m * f,
                w = E * g,
                m = (m + 1) * f,
                E = (E + 1) * g;
                void 0 === B[F] && (B[F] = a(p, za));
                B[F].left = z;
                B[F].top = w;
                B[F].right = m;
                B[F].bottom = E
            } else B = this.em,
            m = m * b,
            E = E * e,
            z = b,
            w = e,
            void 0 === B[F] && (B[F] = a(l, Object)),
            B[F].x = m,
            B[F].y = E,
            B[F].fc = z,
            B[F].Ks = w
        }
    };
    var k = [];
    f.kx = function(a) {
        J(k);
        for (var b = "",
        c, d = 0; d < a.length;) if (c = a.charAt(d), "\n" === c) b.length && (k.push(b), b = ""),
        k.push("\n"),
        ++d;
        else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(d),
            d++;
            while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
            k.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && k.push(b)
    };
    f.tx = function(b) {
        var d = b.text,
        e = b.qi;
        if (d && d.length) {
            var f = b.width;
            if (2 >= f) c(g, e, !0);
            else {
                var k = b.bh,
                h = b.Ti;
                if (d.length * (b.dm * k + h) - h <= f && -1 === d.indexOf("\n") && (h = b.cq(d), h <= f)) {
                    c(g, e, !0);
                    e.push(a(g, Object));
                    e[0].text = d;
                    e[0].width = h;
                    b.Nj = h;
                    b.Hi = b.ah * k + b.lineHeight;
                    return
                }
                this.ux(b);
                b.Hi = e.length * (b.ah * k + b.lineHeight)
            }
        } else c(g, e, !0)
    };
    f.ux = function(a) {
        var c = a.TB,
        d = a.text,
        f = a.qi,
        h = a.width;
        c && (this.kx(d), d = k);
        var l = "",
        m, p, A, E = 0,
        F = !1;
        for (A = 0; A < d.length; A++)"\n" === d[A] ? (!0 === F ? F = !1 : (b(a, E, l), E++), l = "") : (F = !1, m = l, l += d[A], p = a.cq(l.replace(/\s\s*$/, "")), p > h && ("" === m ? (b(a, E, l), l = "", F = !0) : (b(a, E, m), l = d[A]), E++, c || " " !== l || (l = "")));
        l.replace(/\s\s*$/, "").length && (b(a, E, l), E++);
        for (A = E; A < f.length; A++) g.length < e && g.push(f[A]);
        f.length = E
    };
    h.cq = function(a) {
        for (var b = this.Ti,
        c = a.length,
        d = 0,
        e = 0; e < c; e++) d += this.ip(a.charAt(e)) * this.bh + b;
        return d - (0 < d ? b: 0)
    };
    h.ip = function(a) {
        var b = this.dh;
        return void 0 !== b[a] ? b[a] : this.dm
    };
    h.su = function() {
        if (this.tl || this.width !== this.Tp) this.Hi = this.Nj = 0,
        this.type.sb.tx(this),
        this.tl = !1,
        this.Tp = this.width
    };
    h.If = function(a) {
        var b = this.ra;
        if ("" !== this.text && null != b && (this.su(), !(this.height < this.ah * this.bh + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
            c = this.y;
            this.c.lf && (b = Math.round(b), c = Math.round(c));
            var d = this.W.wb,
            e = this.W.xb,
            f = this.W.Bb,
            g = this.W.Ab;
            a.save();
            a.translate(b, c);
            a.rotate(this.O);
            for (var k = this.O,
            h = this.Pm,
            l = this.bh,
            m = this.ah * l,
            p = this.lineHeight,
            z = this.Ti,
            w = this.qi,
            G, S = -(this.vd * this.width), P = -(this.wd * this.height), P = P + this.no * sa(0, this.height - this.Hi), Q, I, D, V = 0; V < w.length; V++) {
                var H = w[V].text;
                G = h * sa(0, this.width - w[V].width);
                Q = S + G;
                P += p;
                if (0 === k && c + P + m < e) P += m;
                else {
                    for (var M = 0; M < H.length; M++) {
                        I = H.charAt(M);
                        G = this.ip(I);
                        var N = this.em[I];
                        if (0 === k && b + Q + G * l + z < d) Q += G * l + z;
                        else {
                            if (Q + G * l > this.width + 1E-5) break;
                            void 0 !== N && (I = Q, D = P, 0 === k && 1 === l && (I = Math.round(I), D = Math.round(D)), a.drawImage(this.ra, N.x, N.y, N.fc, N.Ks, I, D, N.fc * l, N.Ks * l));
                            Q += G * l + z;
                            if (0 === k && b + Q > f) break
                        }
                    }
                    P += m;
                    if (0 === k && (P + m + p > this.height || c + P > g)) break
                }
            }
            a.restore()
        }
    };
    var m = new Aa;
    h.Gd = function(a) {
        a.ke(this.Ha);
        a.Ci(this.opacity);
        if (this.text && (this.su(), !(this.height < this.ah * this.bh + this.lineHeight))) {
            this.mb();
            var b = this.Cb,
            c = 0,
            d = 0;
            this.c.lf && (c = Math.round(this.x) - this.x, d = Math.round(this.y) - this.y);
            var e = this.W.wb,
            f = this.W.xb,
            g = this.W.Bb,
            k = this.W.Ab,
            h = this.O,
            l = this.Pm,
            p = this.no,
            B = this.bh,
            z = this.ah * B,
            w = this.lineHeight,
            G = this.Ti,
            S = this.qi,
            P = this.Hi,
            Q, I, D;
            0 !== h && (I = Math.cos(h), D = Math.sin(h));
            for (var c = b.Sb + c,
            b = b.Tb + d,
            V, p = p * sa(0, this.height - P), H, M, P = 0; P < S.length; P++) if (d = S[P].text, V = Q = l * sa(0, this.width - S[P].width), p += w, 0 === h && b + p + z < f) p += z;
            else {
                for (var N = 0; N < d.length; N++) {
                    var T = d.charAt(N);
                    Q = this.ip(T);
                    T = this.fm[T];
                    if (0 === h && c + V + Q * B + G < e) V += Q * B + G;
                    else {
                        if (V + Q * B > this.width + 1E-5) break;
                        if (void 0 !== T) {
                            var O = this.dm * B,
                            K = this.ah * B;
                            H = V;
                            M = p;
                            0 === h && 1 === B && (H = Math.round(H), M = Math.round(M));
                            m.Sb = H;
                            m.Tb = M;
                            m.Hc = H + O;
                            m.Ic = M;
                            m.qc = H;
                            m.rc = M + K;
                            m.sc = H + O;
                            m.tc = M + K;
                            0 !== h && (H = m, M = I, O = D, K = void 0, K = H.Sb * M - H.Tb * O, H.Tb = H.Tb * M + H.Sb * O, H.Sb = K, K = H.Hc * M - H.Ic * O, H.Ic = H.Ic * M + H.Hc * O, H.Hc = K, K = H.qc * M - H.rc * O, H.rc = H.rc * M + H.qc * O, H.qc = K, K = H.sc * M - H.tc * O, H.tc = H.tc * M + H.sc * O, H.sc = K);
                            m.offset(c, b);
                            a.Uf(m.Sb, m.Tb, m.Hc, m.Ic, m.sc, m.tc, m.qc, m.rc, T)
                        }
                        V += Q * B + G;
                        if (0 === h && c + V > g) break
                    }
                }
                p += z;
                if (0 === h && (p + z + w > this.height || b + p > k)) break
            }
        }
    };
    f.K = new
    function() {};
    d.prototype.Xw = function(a) {
        ma(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.tl = !0, this.c.kb = !0)
    };
    h.Lw = function(a, b) {
        var c = parseInt(b, 10);
        this.dh[a] !== c && (this.dh[a] = c, this.tl = !0, this.c.kb = !0)
    };
    d.prototype.Mw = function(a, b) {
        if ("" !== a) for (var c = 0; c < a.length; c++) this.Lw(a.charAt(c), b)
    };
    f.V = new d;
    f.Aa = new
    function() {}
})();
function xd(a) {
    this.c = a
} (function() {
    var a = xd.prototype;
    a.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    var c = a.gb.prototype;
    c.ya = function() {
        this.qa || (this.ra = new Image, this.ra.ds = this.Pq, this.c.dr(this.ra, this.ao), this.Ha = this.pattern = null)
    };
    c.sn = function() {
        this.qa || (this.Ha = null)
    };
    c.un = function() {
        if (!this.qa && this.F.length) {
            this.Ha || (this.Ha = this.c.ga.rj(this.ra, !0, this.c.Eb, this.ul));
            var a, c;
            a = 0;
            for (c = this.F.length; a < c; a++) this.F[a].Ha = this.Ha
        }
    };
    c.Vp = function() {
        this.qa || this.Ha || !this.c.ga || (this.Ha = this.c.ga.rj(this.ra, !0, this.c.Eb, this.ul))
    };
    c.io = function() {
        this.qa || this.F.length || !this.Ha || (this.c.ga.deleteTexture(this.Ha), this.Ha = null)
    };
    c.En = function(a) {
        a.drawImage(this.ra, 0, 0)
    };
    a.Ta = function(a) {
        this.type = a;
        this.c = a.c
    };
    c = a.Ta.prototype;
    c.ya = function() {
        this.visible = 0 === this.da[0];
        this.el = new za(0, 0, 0, 0);
        this.Os = !1;
        this.ra = this.type.ra;
        this.c.ga ? (this.type.Vp(), this.Ha = this.type.Ha) : (this.type.pattern || (this.type.pattern = this.c.Ib.createPattern(this.type.ra, "repeat")), this.pattern = this.type.pattern)
    };
    c.Bf = function() {
        this.Os = !1;
        this.ra = this.type.ra
    };
    c.Ai = function() {
        this.c.ga && this.Os && this.Ha && (this.c.ga.deleteTexture(this.Ha), this.Ha = null)
    };
    c.If = function(a) {
        a.globalAlpha = this.opacity;
        a.save();
        a.fillStyle = this.pattern;
        var c = this.x,
        f = this.y;
        this.c.lf && (c = Math.round(c), f = Math.round(f));
        var h = -(this.vd * this.width),
        e = -(this.wd * this.height),
        g = h % this.ra.width,
        l = e % this.ra.height;
        0 > g && (g += this.ra.width);
        0 > l && (l += this.ra.height);
        a.translate(c, f);
        a.rotate(this.O);
        a.translate(g, l);
        a.fillRect(h - g, e - l, this.width, this.height);
        a.restore()
    };
    c.Sh = function(a) {
        this.Gd(a)
    };
    c.Gd = function(a) {
        a.ke(this.Ha);
        a.Ci(this.opacity);
        var c = this.el;
        c.right = this.width / this.ra.width;
        c.bottom = this.height / this.ra.height;
        var f = this.Cb;
        if (this.c.lf) {
            var h = Math.round(this.x) - this.x,
            e = Math.round(this.y) - this.y;
            a.Uf(f.Sb + h, f.Tb + e, f.Hc + h, f.Ic + e, f.sc + h, f.tc + e, f.qc + h, f.rc + e, c)
        } else a.Uf(f.Sb, f.Tb, f.Hc, f.Ic, f.sc, f.tc, f.qc, f.rc, c)
    };
    a.K = new
    function() {};
    a.V = new
    function() {};
    a.Aa = new
    function() {}
})();
function yd(a) {
    this.c = a
} (function() {
    function a(a) {
        p = a.x;
        k = a.y;
        m = a.z
    }
    function c(a, c, d, e) {
        var f;
        f = n.length ? n.pop() : new b;
        f.init(a, c, d, e);
        return f
    }
    function b() {
        this.pl = this.id = this.pi = this.oi = this.y = this.x = this.Xn = this.Wn = this.Sp = this.time = this.Nq = 0;
        this.wl = this.fo = !1
    }
    function d(a) {
        return a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents || a.originalEvent && a.originalEvent.sourceCapabilities && a.originalEvent.sourceCapabilities.firesTouchEvents
    }
    function f() {}
    function h() {}
    var e = yd.prototype;
    e.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    e.gb.prototype.ya = function() {};
    e.Ta = function(a) {
        this.type = a;
        this.c = a.c;
        this.touches = [];
        this.dq = !1
    };
    var g = e.Ta.prototype,
    l = {
        left: 0,
        top: 0
    };
    g.Zi = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++) if (this.touches[b].id === a) return b;
        return - 1
    };
    var p = 0,
    k = 0,
    m = 0,
    n = [];
    b.prototype.init = function(a, b, c, d) {
        var e = mb();
        this.Nq = this.Sp = this.time = e;
        this.Wn = a;
        this.Xn = b;
        this.x = a;
        this.y = b;
        this.oi = a;
        this.pi = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.pl = d;
        this.wl = this.fo = !1
    };
    b.prototype.update = function(a, b, c, d, e, f) {
        this.Sp = this.time;
        this.time = a;
        this.oi = this.x;
        this.pi = this.y;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = f; ! this.wl && 15 <= hb(this.Wn, this.Xn, this.x, this.y) && (this.wl = !0)
    };
    b.prototype.wA = function(a, b) { ! this.fo && 500 <= mb() - this.Nq && !this.wl && 15 > hb(this.Wn, this.Xn, this.x, this.y) && (this.fo = !0, a.bg = this.pl, a.Ji = this.id, a.aj = b, a.c.trigger(yd.prototype.K.lw, a), a.kg = this.x, a.lg = this.y, a.c.trigger(yd.prototype.K.mw, a), a.aj = 0)
    };
    var q = -1E3,
    t = -1E3,
    u = -1E4;
    b.prototype.Gt = function(a, b) {
        if (!this.fo) {
            var c = mb();
            333 >= c - this.Nq && !this.wl && 15 > hb(this.Wn, this.Xn, this.x, this.y) && (a.bg = this.pl, a.Ji = this.id, a.aj = b, 666 >= c - u && 25 > hb(q, t, this.x, this.y) ? (a.c.trigger(yd.prototype.K.hw, a), a.kg = this.x, a.lg = this.y, a.c.trigger(yd.prototype.K.iw, a), t = q = -1E3, u = -1E4) : (a.c.trigger(yd.prototype.K.Aw, a), a.kg = this.x, a.lg = this.y, a.c.trigger(yd.prototype.K.Br, a), q = this.x, t = this.y, u = c), a.aj = 0)
        }
    };
    g.ya = function() {
        this.kA = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.aj = this.Ji = this.bg = this.lg = this.kg = this.Kr = this.Jr = this.Ir = this.Ax = this.zx = this.yx = this.xn = this.wn = this.vn = 0;
        this.QB = 0 !== this.da[0];
        var b = 0 < this.c.Hd ? document: this.c.canvas,
        c = document;
        this.c.bd ? c = b = window.Canvas: this.c.te && (c = b = window);
        var d = this;
        "undefined" !== typeof PointerEvent ? (b.addEventListener("pointerdown",
        function(a) {
            d.Vt(a)
        },
        !1), b.addEventListener("pointermove",
        function(a) {
            d.Ut(a)
        },
        !1), c.addEventListener("pointerup",
        function(a) {
            d.tn(a, !1)
        },
        !1), c.addEventListener("pointercancel",
        function(a) {
            d.tn(a, !0)
        },
        !1), this.c.canvas && (this.c.canvas.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1), document.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1), this.c.canvas.addEventListener("gesturehold",
        function(a) {
            a.preventDefault()
        },
        !1), document.addEventListener("gesturehold",
        function(a) {
            a.preventDefault()
        },
        !1))) : window.navigator.msPointerEnabled ? (b.addEventListener("MSPointerDown",
        function(a) {
            d.Vt(a)
        },
        !1), b.addEventListener("MSPointerMove",
        function(a) {
            d.Ut(a)
        },
        !1), c.addEventListener("MSPointerUp",
        function(a) {
            d.tn(a, !1)
        },
        !1), c.addEventListener("MSPointerCancel",
        function(a) {
            d.tn(a, !0)
        },
        !1), this.c.canvas && (this.c.canvas.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1), document.addEventListener("MSGestureHold",
        function(a) {
            a.preventDefault()
        },
        !1))) : (b.addEventListener("touchstart",
        function(a) {
            d.Zt(a)
        },
        !1), b.addEventListener("touchmove",
        function(a) {
            d.Yt(a)
        },
        !1), c.addEventListener("touchend",
        function(a) {
            d.lq(a, !1)
        },
        !1), c.addEventListener("touchcancel",
        function(a) {
            d.lq(a, !0)
        },
        !1));
        if (this.kA) {
            var e = function(a) {
                a = a.reading;
                d.Ir = a.accelerationX;
                d.Jr = a.accelerationY;
                d.Kr = a.accelerationZ
            },
            f = function(a) {
                a = a.reading;
                d.vn = a.yawDegrees;
                d.wn = a.pitchDegrees;
                d.xn = a.rollDegrees
            },
            g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
            var k = Windows.Devices.Sensors.Inclinometer.getDefault();
            k && (k.reportInterval = Math.max(k.minimumReportInterval, 16), k.addEventListener("readingchanged", f));
            document.addEventListener("visibilitychange",
            function() {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", e), k && k.removeEventListener("readingchanged", f)) : (g && g.addEventListener("readingchanged", e), k && k.addEventListener("readingchanged", f))
            },
            !1)
        } else window.addEventListener("deviceorientation",
        function(a) {
            d.vn = a.alpha || 0;
            d.wn = a.beta || 0;
            d.xn = a.gamma || 0
        },
        !1),
        window.addEventListener("devicemotion",
        function(a) {
            a.accelerationIncludingGravity && (d.yx = a.accelerationIncludingGravity.x || 0, d.zx = a.accelerationIncludingGravity.y || 0, d.Ax = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (d.Ir = a.acceleration.x || 0, d.Jr = a.acceleration.y || 0, d.Kr = a.acceleration.z || 0)
        },
        !1);
        this.QB && !this.c.Zb && (jQuery(document).mousemove(function(a) {
            d.FA(a)
        }), jQuery(document).mousedown(function(a) {
            d.EA(a)
        }), jQuery(document).mouseup(function(a) {
            d.GA(a)
        })); ! this.c.kj && this.c.Zd && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(a, null, {
            frequency: 40
        });
        this.c.GB(this)
    };
    g.Ut = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.Zi(a.pointerId),
            c = mb();
            if (0 <= b) {
                var d = this.c.Zb ? l: jQuery(this.c.canvas).offset(),
                b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    g.Vt = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && Wb(a) && a.preventDefault();
            var b = this.c.Zb ? l: jQuery(this.c.canvas).offset(),
            d = a.pageX - b.left,
            b = a.pageY - b.top;
            mb();
            this.bg = this.touches.length;
            this.Ji = a.pointerId;
            this.touches.push(c(d, b, a.pointerId, this.bg));
            this.c.$d = !0;
            this.c.trigger(yd.prototype.K.xr, this);
            this.c.trigger(yd.prototype.K.vo, this);
            this.kg = d;
            this.lg = b;
            this.c.trigger(yd.prototype.K.Cr, this);
            this.c.$d = !1
        }
    };
    g.tn = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && Wb(a) && a.preventDefault();
            var c = this.Zi(a.pointerId);
            this.bg = 0 <= c ? this.touches[c].pl: -1;
            this.Ji = 0 <= c ? this.touches[c].id: -1;
            this.c.$d = !0;
            this.c.trigger(yd.prototype.K.wr, this);
            this.c.trigger(yd.prototype.K.uo, this);
            0 <= c && (b || this.touches[c].Gt(this, c), 100 > n.length && n.push(this.touches[c]), this.touches.splice(c, 1));
            this.c.$d = !1
        }
    };
    g.Yt = function(a) {
        a.preventDefault && a.preventDefault();
        var b = mb(),
        c,
        d,
        e,
        f;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) if (e = a.changedTouches[c], f = this.Zi(e.identifier), 0 <= f) {
            var g = this.c.Zb ? l: jQuery(this.c.canvas).offset();
            f = this.touches[f];
            2 > b - f.time || f.update(b, e.pageX - g.left, e.pageY - g.top, 2 * (e.aD || e.hD || e.UC || e.XC || 0), 2 * (e.bD || e.iD || e.VC || e.YC || 0), e.MC || e.gD || e.TC || e.WC || 0)
        }
    };
    g.Zt = function(a) {
        a.preventDefault && Wb(a) && a.preventDefault();
        var b = this.c.Zb ? l: jQuery(this.c.canvas).offset();
        mb();
        this.c.$d = !0;
        var d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++) if (f = a.changedTouches[d], g = this.Zi(f.identifier), -1 === g) {
            g = f.pageX - b.left;
            var k = f.pageY - b.top;
            this.bg = this.touches.length;
            this.Ji = f.identifier;
            this.touches.push(c(g, k, f.identifier, this.bg));
            this.c.trigger(yd.prototype.K.xr, this);
            this.c.trigger(yd.prototype.K.vo, this);
            this.kg = g;
            this.lg = k;
            this.c.trigger(yd.prototype.K.Cr, this)
        }
        this.c.$d = !1
    };
    g.lq = function(a, b) {
        a.preventDefault && Wb(a) && a.preventDefault();
        this.c.$d = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c],
        e = this.Zi(e.identifier),
        0 <= e && (this.bg = this.touches[e].pl, this.Ji = this.touches[e].id, this.c.trigger(yd.prototype.K.wr, this), this.c.trigger(yd.prototype.K.uo, this), b || this.touches[e].Gt(this, e), 100 > n.length && n.push(this.touches[e]), this.touches.splice(e, 1));
        this.c.$d = !1
    };
    g.j = function() {
        return this.c.Zd && 0 === this.vn && 0 !== m ? 90 * m: this.vn
    };
    g.k = function() {
        return this.c.Zd && 0 === this.wn && 0 !== k ? 90 * k: this.wn
    };
    g.u = function() {
        return this.c.Zd && 0 === this.xn && 0 !== p ? 90 * p: this.xn
    };
    g.EA = function(a) {
        d(a) || (this.Zt({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.dq = !0)
    };
    g.FA = function(a) {
        this.dq && !d(a) && this.Yt({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    g.GA = function(a) {
        a.preventDefault && this.c.Ls && !this.c.ej && a.preventDefault();
        this.c.Ls = !0;
        d(a) || (this.lq({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.dq = !1)
    };
    g.Qq = function() {
        var a, b, c, d = mb();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a],
        c.time <= d - 50 && (c.Sp = d),
        c.wA(this, a)
    };
    f.prototype.vo = function() {
        return ! 0
    };
    f.prototype.uo = function() {
        return ! 0
    };
    f.prototype.Cr = function(a) {
        return a ? this.c.Zn(a, this.kg, this.lg) : !1
    };
    var v = [];
    f.prototype.Wv = function(a) {
        if (!a) return ! 1;
        var b = a.Ya(),
        c = b.Id(),
        d,
        e,
        f,
        g,
        k,
        h;
        f = 0;
        for (g = c.length; f < g; f++) {
            var l = c[f];
            l.mb();
            k = 0;
            for (h = this.touches.length; k < h; k++) if (e = this.touches[k], d = l.W.uc(e.x, e.y, !0), e = l.W.uc(e.x, e.y, !1), l.kd(d, e)) {
                v.push(l);
                break
            }
        }
        return v.length ? (b.rb = !1, Ja(b.F, v), a.De(), J(v), !0) : !1
    };
    f.prototype.xr = function(a) {
        a = Math.floor(a);
        return a === this.bg
    };
    f.prototype.wr = function(a) {
        a = Math.floor(a);
        return a === this.bg
    };
    f.prototype.lw = function() {
        return ! 0
    };
    f.prototype.Aw = function() {
        return ! 0
    };
    f.prototype.hw = function() {
        return ! 0
    };
    f.prototype.mw = function(a) {
        return a ? this.c.Zn(a, this.kg, this.lg) : !1
    };
    f.prototype.Br = function(a) {
        return a ? this.c.Zn(a, this.kg, this.lg) : !1
    };
    f.prototype.iw = function(a) {
        return a ? this.c.Zn(a, this.kg, this.lg) : !1
    };
    e.K = new f;
    h.prototype.Do = function(a, b) {
        var c = this.aj;
        if (0 > c || c >= this.touches.length) a.la(0);
        else {
            var d, e, f, g, k;
            la(b) ? (d = this.c.bi(0), e = d.scale, f = d.le, g = d.Md, k = d.O, d.scale = 1, d.le = 1, d.Md = 1, d.O = 0, a.la(d.uc(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.le = f, d.Md = g, d.O = k) : (d = ma(b) ? this.c.bi(b) : this.c.Mm(b)) ? a.la(d.uc(this.touches[c].x, this.touches[c].y, !0)) : a.la(0)
        }
    };
    h.prototype.wx = function(a, b, c) {
        b = this.Zi(b);
        if (0 > b) a.la(0);
        else {
            b = this.touches[b];
            var d, e, f, g;
            la(c) ? (c = this.c.bi(0), d = c.scale, e = c.le, f = c.Md, g = c.O, c.scale = 1, c.le = 1, c.Md = 1, c.O = 0, a.la(c.uc(b.x, b.y, !0)), c.scale = d, c.le = e, c.Md = f, c.O = g) : (c = ma(c) ? this.c.bi(c) : this.c.Mm(c)) ? a.la(c.uc(b.x, b.y, !0)) : a.la(0)
        }
    };
    h.prototype.Hr = function(a, b) {
        var c = this.aj;
        if (0 > c || c >= this.touches.length) a.la(0);
        else {
            var d, e, f, g, k;
            la(b) ? (d = this.c.bi(0), e = d.scale, f = d.le, g = d.Ue, k = d.O, d.scale = 1, d.le = 1, d.Ue = 1, d.O = 0, a.la(d.uc(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.le = f, d.Ue = g, d.O = k) : (d = ma(b) ? this.c.bi(b) : this.c.Mm(b)) ? a.la(d.uc(this.touches[c].x, this.touches[c].y, !1)) : a.la(0)
        }
    };
    h.prototype.mx = function(a) {
        a.la(this.Ji)
    };
    e.Aa = new h
})();
function zd(a) {
    this.c = a
} (function() {
    function a() {}
    function c() {}
    function b() {}
    var d = zd.prototype;
    d.gb = function(a) {
        this.sb = a;
        this.c = a.c
    };
    d.gb.prototype.ya = function() {};
    d.Ta = function(a) {
        this.type = a;
        this.c = a.c
    };
    var f = d.Ta.prototype,
    h = "",
    e = "undefined" !== typeof window.is_scirra_arcade;
    e && (h = "arcade" + window.scirra_arcade_id);
    var g = !1;
    try {
        localStorage.getItem("test"),
        g = !0
    } catch(l) {
        g = !1
    }
    f.ya = function() {
        g || ia("[Construct 2] Webstorage plugin: local storage is not supported on this platform.")
    };
    a.prototype.yr = function() {
        return ! 0
    };
    d.K = new a;
    c.prototype.jx = function(a, b) {
        if (g) try {
            localStorage.setItem(h + a, b)
        } catch(c) {
            this.c.trigger(zd.prototype.K.yr, this)
        }
    };
    c.prototype.mr = function(a, b) {
        if (g) {
            var c;
            try {
                c = JSON.parse(a)
            } catch(d) {
                return
            }
            if (c.c2dictionary) {
                c = c.data;
                0 !== b || e || localStorage.clear();
                for (var f in c) if (c.hasOwnProperty(f)) try {
                    localStorage.setItem(h + f, c[f])
                } catch(l) {
                    this.c.trigger(zd.prototype.K.yr, this);
                    break
                }
            }
        }
    };
    d.V = new c;
    b.prototype.Zv = function(a, b) {
        g ? a.Sc(localStorage.getItem(h + b) || "") : a.Sc("")
    };
    b.prototype.Fl = function(a) {
        if (g) {
            var b = {},
            c, d, f;
            c = 0;
            for (d = localStorage.length; c < d; c++) f = localStorage.key(c),
            e ? f.substr(0, h.length) === h && (b[f.substr(h.length)] = localStorage.getItem(f)) : b[f] = localStorage.getItem(f);
            a.Sc(JSON.stringify({
                c2dictionary: !0,
                data: b
            }))
        } else a.Sc("")
    };
    d.Aa = new b
})();
function Ad(a) {
    this.c = a
} (function() {
    function a() {}
    var c = Ad.prototype;
    c.gb = function(a) {
        this.behavior = a;
        this.c = a.c
    };
    c.gb.prototype.ya = function() {};
    c.Ta = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.I = b;
        this.c = a.c
    };
    var b = c.Ta.prototype;
    b.ya = function() {
        var a = this.da[0];
        this.eg = this.da[1];
        this.ok = this.da[2];
        this.Hx = 0 !== this.da[3];
        this.Gq = 0 !== this.da[4];
        this.ud = Math.cos(this.I.O) * a;
        this.Yc = Math.sin(this.I.O) * a;
        this.oi = this.I.x;
        this.pi = this.I.y;
        this.Pf = this.I.O;
        this.eo = 0;
        this.enabled = 0 !== this.da[5]
    };
    b.Rc = function() {
        return {
            acc: this.eg,
            g: this.ok,
            dx: this.ud,
            dy: this.Yc,
            lx: this.oi,
            ly: this.pi,
            lka: this.Pf,
            t: this.eo,
            e: this.enabled
        }
    };
    b.od = function(a) {
        this.eg = a.acc;
        this.ok = a.g;
        this.ud = a.dx;
        this.Yc = a.dy;
        this.oi = a.lx;
        this.pi = a.ly;
        this.Pf = a.lka;
        this.eo = a.t;
        this.enabled = a.e
    };
    b.Gc = function() {
        if (this.enabled) {
            var a = this.c.$h(this.I),
            b,
            c;
            this.I.O !== this.Pf && (this.Gq && (b = hb(0, 0, this.ud, this.Yc), this.ud = Math.cos(this.I.O) * b, this.Yc = Math.sin(this.I.O) * b), this.Pf = this.I.O);
            0 !== this.eg && (b = hb(0, 0, this.ud, this.Yc), c = 0 === this.ud && 0 === this.Yc ? this.I.O: Xa(0, 0, this.ud, this.Yc), b += this.eg * a, 0 > b && (b = 0), this.ud = Math.cos(c) * b, this.Yc = Math.sin(c) * b);
            0 !== this.ok && (this.Yc += this.ok * a);
            this.oi = this.I.x;
            this.pi = this.I.y;
            if (0 !== this.ud || 0 !== this.Yc) if (this.I.x += this.ud * a, this.I.y += this.Yc * a, this.eo += hb(0, 0, this.ud * a, this.Yc * a), this.Gq && (this.I.O = Xa(0, 0, this.ud, this.Yc), this.I.La(), this.Pf = this.I.O), this.I.La(), this.Hx && (b = this.c.Gi(this.I))) this.c.uu(this.I, b),
            b = hb(0, 0, this.ud, this.Yc),
            c = this.c.Kx(this.I, this.oi, this.pi),
            this.ud = Math.cos(c) * b,
            this.Yc = Math.sin(c) * b,
            this.I.x += this.ud * a,
            this.I.y += this.Yc * a,
            this.I.La(),
            this.Gq && (this.Pf = this.I.O = c, this.I.La()),
            this.c.YA(this.I, this.ud / b, this.Yc / b, Math.max(2.5 * b * a, 30)) || this.c.ZA(this.I)
        }
    };
    c.K = new
    function() {};
    a.prototype.Fr = function(a) {
        this.ok = a
    };
    a.prototype.yo = function(a) {
        this.enabled = 1 === a
    };
    c.V = new a;
    c.Aa = new
    function() {}
})();
function Bd(a) {
    this.c = a
} (function() {
    function a() {}
    function c() {}
    var b = Bd.prototype;
    b.gb = function(a) {
        this.behavior = a;
        this.c = a.c
    };
    b.gb.prototype.ya = function() {};
    b.Ta = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.I = b;
        this.c = a.c
    };
    var d = b.Ta.prototype;
    d.ya = function() {
        this.Lr = 1 === this.da[0];
        this.kk = this.da[1];
        this.Dl = this.da[2];
        this.ym = this.da[3];
        this.Yx = this.da[4];
        this.ze = this.Lr ? 0 : 3;
        this.je ? this.We.reset() : this.We = new zb;
        this.xi = this.I.opacity ? this.I.opacity: 1;
        this.Lr && (0 === this.kk ? (this.ze = 1, 0 === this.Dl && (this.ze = 2)) : (this.I.opacity = 0, this.c.kb = !0))
    };
    d.Rc = function() {
        return {
            fit: this.kk,
            wt: this.Dl,
            fot: this.ym,
            s: this.ze,
            st: this.We.Ga,
            mo: this.xi
        }
    };
    d.od = function(a) {
        this.kk = a.fit;
        this.Dl = a.wt;
        this.ym = a.fot;
        this.ze = a.s;
        this.We.reset();
        this.We.Ga = a.st;
        this.xi = a.mo
    };
    d.Gc = function() {
        this.We.add(this.c.$h(this.I));
        0 === this.ze && (this.I.opacity = this.We.Ga / this.kk * this.xi, this.c.kb = !0, this.I.opacity >= this.xi && (this.I.opacity = this.xi, this.ze = 1, this.We.reset(), this.c.trigger(Bd.prototype.K.jw, this.I)));
        1 === this.ze && this.We.Ga >= this.Dl && (this.ze = 2, this.We.reset(), this.c.trigger(Bd.prototype.K.Cw, this.I));
        2 === this.ze && 0 !== this.ym && (this.I.opacity = this.xi - this.We.Ga / this.ym * this.xi, this.c.kb = !0, 0 > this.I.opacity && (this.I.opacity = 0, this.ze = 3, this.We.reset(), this.c.trigger(Bd.prototype.K.kw, this.I), 1 === this.Yx && this.c.Sg(this.I)))
    };
    d.ty = function() {
        this.ze = 0;
        this.We.reset();
        0 === this.kk ? (this.ze = 1, 0 === this.Dl && (this.ze = 2)) : (this.I.opacity = 0, this.c.kb = !0)
    };
    a.prototype.kw = function() {
        return ! 0
    };
    a.prototype.jw = function() {
        return ! 0
    };
    a.prototype.Cw = function() {
        return ! 0
    };
    b.K = new a;
    c.prototype.Fw = function() {
        this.ty()
    };
    b.V = new c;
    b.Aa = new
    function() {}
})();
function Cd(a, c) {
    for (var b in c.prototype) c.prototype.hasOwnProperty(b) && (a.prototype[b] = c.prototype[b])
}
var Dd = 2 / 180 * Math.PI,
Ed = 8 / 180 * Math.PI,
Fd = .5 * Math.PI,
Gd = Fd * Fd,
Hd = 2 / 180 * Math.PI,
Id = Number.MIN_VALUE * Number.MIN_VALUE;
function Ld(a, c) {
    return a.x * c.x + a.y * c.y
}
function Md(a, c) {
    return a.x * c.y - a.y * c.x
}
function Nd(a) {
    return Z(1 * a.y, -1 * a.x)
}
function Od(a, c) {
    return Z(a.n.x * c.x + a.q.x * c.y, a.n.y * c.x + a.q.y * c.y)
}
function Pd(a, c) {
    return Z(Ld(c, a.n), Ld(c, a.q))
}
function Qd(a, c) {
    var b = Od(a.B, c);
    b.x += a.position.x;
    b.y += a.position.y;
    return b
}
function Rd(a, c) {
    var b = Sd(c, a.position),
    d = b.x * a.B.n.x + b.y * a.B.n.y;
    b.y = b.x * a.B.q.x + b.y * a.B.q.y;
    b.x = d;
    return b
}
function Sd(a, c) {
    return Z(a.x - c.x, a.y - c.y)
}
function Td(a, c, b) {
    return a < c ? c: a > b ? b: a
}
function Ud() {
    this.n = Z(0, 0);
    this.q = Z(0, 0);
    this.n.Set(1, 0);
    this.q.Set(0, 1)
}
function Vd(a) {
    var c = new Ud;
    c.Set(a);
    return c
}
Ud.prototype.Set = function(a) {
    var c = Math.cos(a);
    a = Math.sin(a);
    this.n.Set(c, a);
    this.q.Set( - a, c)
};
Ud.prototype.oc = function() {
    var a = new Ud;
    Wd(a, this);
    return a
};
function Wd(a, c) {
    a.n.P(c.n);
    a.q.P(c.q)
}
Ud.prototype.ta = function() {
    this.n.Set(0, 0);
    this.q.Set(0, 0)
};
Ud.prototype.Fh = function() {
    return Math.atan2(this.n.y, this.n.x)
};
function Xd(a, c) {
    var b = a.n.x * a.q.y - a.q.x * a.n.y;
    0 !== b && (b = 1 / b);
    c.n.x = b * a.q.y;
    c.q.x = -b * a.q.x;
    c.n.y = -b * a.n.y;
    c.q.y = b * a.n.x
}
function Yd(a, c, b, d) {
    var f = a.n.x * a.q.y - a.q.x * a.n.y;
    0 !== f && (f = 1 / f);
    c.x = f * (a.q.y * b - a.q.x * d);
    c.y = f * (a.n.x * d - a.n.y * b);
    return c
}
function Zd(a, c, b) {
    this.n = new $d(0, 0, 0);
    this.q = new $d(0, 0, 0);
    this.j = new $d(0, 0, 0);
    a && this.n.P(a);
    c && this.q.P(c);
    b && this.j.P(b)
}
Zd.prototype.oc = function() {
    return new Zd(this.n, this.q, this.j)
};
Zd.prototype.ta = function() {
    this.n.Set(0, 0, 0);
    this.q.Set(0, 0, 0);
    this.j.Set(0, 0, 0)
};
function ae(a, c, b, d) {
    var f = a.n.x,
    h = a.q.x,
    e = a.n.y;
    a = a.q.y;
    var g = f * a - h * e;
    0 != g && (g = 1 / g);
    c.x = g * (a * b - h * d);
    c.y = g * (f * d - e * b);
    return c
}
function be(a, c, b, d, f) {
    var h = a.n.x,
    e = a.n.y,
    g = a.n.z,
    l = a.q.x,
    p = a.q.y,
    k = a.q.z,
    m = a.j.x,
    n = a.j.y;
    a = a.j.z;
    var q = h * (p * a - k * n) + e * (k * m - l * a) + g * (l * n - p * m);
    0 != q && (q = 1 / q);
    c.x = q * (b * (p * a - k * n) + d * (k * m - l * a) + f * (l * n - p * m));
    c.y = q * (h * (d * a - f * n) + e * (f * m - b * a) + g * (b * n - d * m));
    c.z = q * (h * (p * f - k * d) + e * (k * b - l * f) + g * (l * d - p * b));
    return c
}
function ce() {
    this.S = Z(0, 0);
    this.Kc = Z(0, 0);
    this.D = Z(0, 0)
}
ce.prototype.Set = function(a) {
    this.S.P(a.S);
    this.Kc.P(a.Kc);
    this.D.P(a.D);
    this.Ce = a.Ce;
    this.R = a.R;
    this.rd = a.rd
};
ce.prototype.oc = function() {
    var a = new ce;
    a.S.P(this.S);
    a.Kc.P(this.Kc);
    a.D.P(this.D);
    a.Ce = this.Ce;
    a.R = this.R;
    a.rd = this.rd;
    return a
};
ce.prototype.Rd = function(a, c) {
    void 0 === c && (c = 0);
    a.position.x = (1 - c) * this.Kc.x + c * this.D.x;
    a.position.y = (1 - c) * this.Kc.y + c * this.D.y;
    a.B.Set((1 - c) * this.Ce + c * this.R);
    var b = a.B;
    a.position.x -= b.n.x * this.S.x + b.q.x * this.S.y;
    a.position.y -= b.n.y * this.S.x + b.q.y * this.S.y
};
ce.prototype.Rg = function(a) {
    void 0 === a && (a = 0);
    if (this.rd < a && 1 - this.rd > Number.MIN_VALUE) {
        var c = (a - this.rd) / (1 - this.rd);
        this.Kc.x = (1 - c) * this.Kc.x + c * this.D.x;
        this.Kc.y = (1 - c) * this.Kc.y + c * this.D.y;
        this.Ce = (1 - c) * this.Ce + c * this.R;
        this.rd = a
    }
};
function te(a, c) {
    this.position = Z(0, 0);
    this.B = new Ud;
    a && this.position.P(a);
    c && Wd(this.B, c)
}
te.prototype.Set = function(a) {
    this.position.P(a.position);
    Wd(this.B, a.B)
};
te.prototype.Fh = function() {
    return Math.atan2(this.B.n.y, this.B.n.x)
};
function ue(a, c) {
    this.x = a;
    this.y = c
}
var ve = [];
function Z(a, c) {
    if (0 < ve.length) {
        var b = ve.pop();
        b.Set(a, c);
        return b
    }
    return new ue(a, c)
}
function we(a) {
    ve.push(a)
}
x = ue.prototype;
x.ta = function() {
    this.y = this.x = 0
};
x.Set = function(a, c) {
    this.x = a;
    this.y = c
};
x.P = function(a) {
    this.x = a.x;
    this.y = a.y
};
x.Tg = function() {
    return Z( - this.x, -this.y)
};
x.oc = function() {
    return Z(this.x, this.y)
};
x.vf = function(a) {
    this.x += a.x;
    this.y += a.y
};
x.Gr = function(a) {
    this.x -= a.x;
    this.y -= a.y
};
x.me = function(a) {
    this.x *= a;
    this.y *= a
};
function xe(a) {
    return Math.sqrt(ye(a))
}
function ye(a) {
    return a.x * a.x + a.y * a.y
}
function ze(a) {
    var c = xe(a);
    c < Number.MIN_VALUE || (c = 1 / c, a.x *= c, a.y *= c)
}
function $d(a, c, b) {
    this.x = a;
    this.y = c;
    this.z = b
}
x = $d.prototype;
x.ta = function() {
    this.z = this.y = this.x = 0
};
x.Set = function(a, c, b) {
    this.x = a;
    this.y = c;
    this.z = b
};
x.P = function(a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z
};
x.Tg = function() {
    return new $d( - this.x, -this.y, -this.z)
};
x.oc = function() {
    return new $d(this.x, this.y, this.z)
};
x.vf = function(a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z
};
x.Gr = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z
};
x.me = function(a) {
    this.x *= a;
    this.y *= a;
    this.z *= a
};
function Ae() {
    this.bb = .005
}
x = Ae.prototype;
x.Hh = function() {};
x.oc = function() {};
x.Set = function(a) {
    this.bb = a.bb
};
x.Eh = function() {};
x.Sj = function() {};
x.Gl = function() {};
x.xo = function() {};
function Be(a) {
    this.bb = .005;
    this.bb = a;
    this.j = a * a;
    this.pb = Z(0, 0)
}
Cd(Be, Ae);
x = Be.prototype;
x.Hh = function() {
    return "b2CircleShape"
};
x.oc = function() {
    var a = new Be(this.bb);
    a.Set(this);
    return a
};
x.Set = function(a) {
    Ae.prototype.Set.call(this, a);
    a instanceof Be && this.pb.P(a.pb)
};
x.Eh = function(a, c) {
    var b = c.B,
    d = c.position.x + (b.n.x * this.pb.x + b.q.x * this.pb.y),
    b = c.position.y + (b.n.y * this.pb.x + b.q.y * this.pb.y);
    a.j.Set(d - this.bb, b - this.bb);
    a.k.Set(d + this.bb, b + this.bb)
};
x.Sj = function(a, c) {
    a.j = c * Math.PI * this.j;
    a.k.P(this.pb);
    a.u = a.j * (.5 * this.j + (this.pb.x * this.pb.x + this.pb.y * this.pb.y))
};
x.Gl = function(a, c, b, d) {
    b = Qd(b, this.pb);
    var f = -(Ld(a, b) - c);
    if (f < -this.bb + Number.MIN_VALUE) return 0;
    if (f > this.bb) return d.P(b),
    Math.PI * this.j;
    c = f * f;
    f = this.j * (Math.asin(f / this.bb) + Math.PI / 2) + f * Math.sqrt(this.j - c);
    c = -2 / 3 * Math.pow(this.j - c, 1.5) / f;
    d.x = b.x + a.x * c;
    d.y = b.y + a.y * c;
    return f
};
x.xo = function(a) {
    a.T = [this.pb];
    a.j = 1;
    a.bb = this.bb
};
function Ce(a, c) {
    this.bb = .005;
    this.j = a;
    this.k = c;
    this.u = Z(this.k.x - this.j.x, this.k.y - this.j.y);
    ze(this.u);
    this.C = Z(this.u.y, -this.u.x);
    Z( - .04 * (this.C.x - this.u.x) + this.j.x, -.04 * (this.C.y - this.u.y) + this.j.y);
    Z( - .04 * (this.C.x + this.u.x) + this.k.x, -.04 * (this.C.y + this.u.y) + this.k.y);
    Z( - this.C.x, -this.C.y)
}
Cd(Ce, Ae);
Ce.prototype.Hh = function() {
    return "b2EdgeShape"
};
Ce.prototype.Eh = function(a, c) {
    var b = c.B,
    d = c.position.x + (b.n.x * this.j.x + b.q.x * this.j.y),
    f = c.position.y + (b.n.y * this.j.x + b.q.y * this.j.y),
    h = c.position.x + (b.n.x * this.k.x + b.q.x * this.k.y),
    b = c.position.y + (b.n.y * this.k.x + b.q.y * this.k.y);
    d < h ? (a.j.x = d, a.k.x = h) : (a.j.x = h, a.k.x = d);
    f < b ? (a.j.y = f, a.k.y = b) : (a.j.y = b, a.k.y = f)
};
Ce.prototype.Sj = function(a) {
    a.j = 0;
    a.k.P(this.j);
    a.u = 0
};
Ce.prototype.Gl = function(a, c, b, d) {
    void 0 === c && (c = 0);
    var f = Z(a.x * c, a.y * c),
    h = Qd(b, this.j);
    b = Qd(b, this.k);
    var e = Ld(a, h) - c;
    a = Ld(a, b) - c;
    if (0 < e) {
        if (0 < a) return 0;
        h.x = -a / (e - a) * h.x + e / (e - a) * b.x;
        h.y = -a / (e - a) * h.y + e / (e - a) * b.y
    } else 0 < a && (b.x = -a / (e - a) * h.x + e / (e - a) * b.x, b.y = -a / (e - a) * h.y + e / (e - a) * b.y);
    d.x = (f.x + h.x + b.x) / 3;
    d.y = (f.y + h.y + b.y) / 3;
    return.5 * ((h.x - f.x) * (b.y - f.y) - (h.y - f.y) * (b.x - f.x))
};
function De() {
    this.j = 0;
    this.k = Z(0, 0);
    this.u = 0
}
function Ee() {
    this.bb = .005;
    this.j = Z(0, 0);
    this.T = [];
    this.ub = []
}
Cd(Ee, Ae);
x = Ee.prototype;
x.Hh = function() {
    return "b2PolygonShape"
};
x.oc = function() {
    var a = new Ee;
    a.Set(this);
    return a
};
x.Set = function(a) {
    Ae.prototype.Set.call(this, a);
    if (a instanceof Ee) {
        this.j.P(a.j);
        this.ib = a.ib;
        Fe(this, this.ib);
        for (var c = 0; c < this.ib; c++) this.T[c].P(a.T[c]),
        this.ub[c].P(a.ub[c])
    }
};
function Ge(a, c) {
    var b = c.length;
    a.ib = b;
    Fe(a, b);
    for (b = b = 0; b < a.ib; b++) a.T[b].P(c[b]);
    for (b = 0; b < a.ib; ++b) {
        var d = Sd(a.T[b + 1 < a.ib ? b + 1 : 0], a.T[b]);
        a.ub[b].P(Nd(d));
        ze(a.ub[b])
    }
    for (var b = a.T,
    d = a.ib,
    f = Z(0, 0), h = 0, e = 1 / 3, g = 0; g < d; ++g) {
        var l = b[g],
        p = g + 1 < d ? b[g + 1] : b[0],
        k = .5 * ((l.x - 0) * (p.y - 0) - (l.y - 0) * (p.x - 0)),
        h = h + k;
        f.x += k * e * (0 + l.x + p.x);
        f.y += k * e * (0 + l.y + p.y)
    }
    f.x *= 1 / h;
    f.y *= 1 / h;
    a.j = f
}
function He(a, c, b) {
    a.ib = 4;
    Fe(a, 4);
    a.T[0].Set( - c, -b);
    a.T[1].Set(c, -b);
    a.T[2].Set(c, b);
    a.T[3].Set( - c, b);
    a.ub[0].Set(0, -1);
    a.ub[1].Set(1, 0);
    a.ub[2].Set(0, 1);
    a.ub[3].Set( - 1, 0);
    a.j.ta()
}
x.Eh = function(a, c) {
    for (var b = c.B,
    d = this.T[0], f = c.position.x + (b.n.x * d.x + b.q.x * d.y), h = c.position.y + (b.n.y * d.x + b.q.y * d.y), e = f, g = h, l = 1; l < this.ib; ++l) var d = this.T[l],
    p = c.position.x + (b.n.x * d.x + b.q.x * d.y),
    d = c.position.y + (b.n.y * d.x + b.q.y * d.y),
    f = f < p ? f: p,
    h = h < d ? h: d,
    e = e > p ? e: p,
    g = g > d ? g: d;
    a.j.x = f - this.bb;
    a.j.y = h - this.bb;
    a.k.x = e + this.bb;
    a.k.y = g + this.bb
};
x.Sj = function(a, c) {
    if (2 == this.ib) a.k.x = .5 * (this.T[0].x + this.T[1].x),
    a.k.y = .5 * (this.T[0].y + this.T[1].y),
    a.j = 0,
    a.u = 0;
    else {
        for (var b = 0,
        d = 0,
        f = 0,
        h = 0,
        e = 1 / 3,
        g = 0; g < this.ib; ++g) var l = this.T[g],
        p = g + 1 < this.ib ? this.T[g + 1] : this.T[0],
        k = l.x - 0,
        m = l.y - 0,
        n = p.x - 0,
        q = p.y - 0,
        t = k * q - m * n,
        u = .5 * t,
        f = f + u,
        b = b + u * e * (0 + l.x + p.x),
        d = d + u * e * (0 + l.y + p.y),
        l = k,
        h = h + t * (e * (.25 * (l * l + n * l + n * n) + (0 * l + 0 * n)) + 0 + (e * (.25 * (m * m + q * m + q * q) + (0 * m + 0 * q)) + 0));
        a.j = c * f;
        a.k.Set(1 / f * b, 1 / f * d);
        a.u = c * h
    }
};
x.Gl = function(a, c, b, d) {
    var f = Pd(b.B, a),
    h = c - Ld(a, b.position),
    e = [],
    g = 0,
    l = -1;
    c = -1;
    var p = !1;
    for (a = a = 0; a < this.ib; ++a) {
        e[a] = Ld(f, this.T[a]) - h;
        var k = e[a] < -Number.MIN_VALUE;
        0 < a && (k ? p || (l = a - 1, g++) : p && (c = a - 1, g++));
        p = k
    }
    switch (g) {
    case 0:
        return p ? (a = new De, this.Sj(a, 1), d.P(Qd(b, a.k)), a.j) : 0;
    case 1:
        -1 == l ? l = this.ib - 1 : c = this.ib - 1
    }
    a = (l + 1) % this.ib;
    f = (c + 1) % this.ib;
    h = (0 - e[l]) / (e[a] - e[l]);
    e = (0 - e[c]) / (e[f] - e[c]);
    l = Z(this.T[l].x * (1 - h) + this.T[a].x * h, this.T[l].y * (1 - h) + this.T[a].y * h);
    c = Z(this.T[c].x * (1 - e) + this.T[f].x * e, this.T[c].y * (1 - e) + this.T[f].y * e);
    e = 0;
    h = Z(0, 0);
    for (g = this.T[a]; a != f;) a = (a + 1) % this.ib,
    p = a == f ? c: this.T[a],
    k = .5 * ((g.x - l.x) * (p.y - l.y) - (g.y - l.y) * (p.x - l.x)),
    e += k,
    h.x += k * (l.x + g.x + p.x) / 3,
    h.y += k * (l.y + g.y + p.y) / 3,
    g = p;
    h.me(1 / e);
    d.P(Qd(b, h));
    return e
};
x.xo = function(a) {
    a.T = this.T;
    a.j = this.ib;
    a.bb = this.bb
};
x.Hl = function(a) {
    for (var c = 0,
    b = this.T[0].x * a.x + this.T[0].y * a.y, d = 1; d < this.ib; ++d) {
        var f = this.T[d].x * a.x + this.T[d].y * a.y;
        f > b && (c = d, b = f)
    }
    return c
};
x.Uj = function(a) {
    for (var c = 0,
    b = this.T[0].x * a.x + this.T[0].y * a.y, d = 1; d < this.ib; ++d) {
        var f = this.T[d].x * a.x + this.T[d].y * a.y;
        f > b && (c = d, b = f)
    }
    return this.T[c]
};
function Fe(a, c) {
    a.T = [];
    a.ub = [];
    for (var b = a.T.length; b < c; b++) a.T[b] = Z(0, 0),
    a.ub[b] = Z(0, 0)
}
new Ud;
function Ie() {
    this.k = this.j = this.u = this.Ub = 0
}
function Je(a, c) {
    a.Ub = c;
    a.u = a.Ub & 255;
    a.j = (a.Ub & 65280) >> 8 & 255;
    a.k = (a.Ub & 16711680) >> 16 & 255;
    a.C = (a.Ub & 4278190080) >> 24 & 255
}
Ie.prototype.Set = function(a) {
    Je(this, a.Ub)
};
Ie.prototype.oc = function() {
    var a = new Ie;
    a.Set(this);
    return a
};
function Ke() {
    this.Be = Z(0, 0);
    this.id = new Ie
}
Ke.prototype.Set = function(a) {
    this.Be.P(a.Be);
    this.id.Set(a.id)
};
function Le() {
    this.j = Z(0, 0);
    this.k = Z(0, 0)
}
var Me = [];
function Ne() {
    if (0 < Me.length) {
        var a = Me.pop();
        a.ta();
        return a
    }
    return new Le
}
Le.prototype.ta = function() {
    this.j.Set(0, 0);
    this.k.Set(0, 0)
};
function Oe(a, c) {
    var b;
    return b = (b = (b = (b = a.j.x <= c.j.x) && a.j.y <= c.j.y) && c.k.x <= a.k.x) && c.k.y <= a.k.y
}
Le.prototype.Xj = function(a) {
    return 0 < a.j.x - this.k.x || 0 < a.j.y - this.k.y || 0 < this.j.x - a.k.x || 0 < this.j.y - a.k.y ? !1 : !0
};
function Pe(a, c, b) {
    a.j.x = Math.min(c.j.x, b.j.x);
    a.j.y = Math.min(c.j.y, b.j.y);
    a.k.x = Math.max(c.k.x, b.k.x);
    a.k.y = Math.max(c.k.y, b.k.y)
}
function Te(a, c, b, d) {
    var f = 0,
    h = c[0].Be,
    e = c[1].Be,
    g = b.x * h.x + b.y * h.y - d;
    b = b.x * e.x + b.y * e.y - d;
    0 >= g && a[f++].Set(c[0]);
    0 >= b && a[f++].Set(c[1]);
    0 > g * b && (b = g / (g - b), d = a[f].Be, d.x = h.x + b * (e.x - h.x), d.y = h.y + b * (e.y - h.y), a[f].id = 0 < g ? c[0].id: c[1].id, f++);
    return f
}
function Ue(a, c, b, d, f) {
    for (var h = c.B.n.x * a.ub[b].x + c.B.q.x * a.ub[b].y, e = c.B.n.y * a.ub[b].x + c.B.q.y * a.ub[b].y, g = f.B.n.x * h + f.B.n.y * e, l = f.B.q.x * h + f.B.q.y * e, p = 0, k = Number.MAX_VALUE, m = 0; m < d.ib; m++) {
        var n = d.T[m].x * g + d.T[m].y * l;
        n < k && (k = n, p = m)
    }
    return (f.position.x + (f.B.n.x * d.T[p].x + f.B.q.x * d.T[p].y) - (c.position.x + (c.B.n.x * a.T[b].x + c.B.q.x * a.T[b].y))) * h + (f.position.y + (f.B.n.y * d.T[p].x + f.B.q.y * d.T[p].y) - (c.position.y + (c.B.n.y * a.T[b].x + c.B.q.y * a.T[b].y))) * e
}
function Ve(a, c, b, d) {
    for (var f = d.position.x + (d.B.n.x * b.j.x + d.B.q.x * b.j.y), h = d.position.y + (d.B.n.y * b.j.x + d.B.q.y * b.j.y), f = f - (c.position.x + (c.B.n.x * a.j.x + c.B.q.x * a.j.y)), h = h - (c.position.y + (c.B.n.y * a.j.x + c.B.q.y * a.j.y)), e = f * c.B.n.x + h * c.B.n.y, h = f * c.B.q.x + h * c.B.q.y, f = 0, g = -Number.MAX_VALUE, l = 0; l < a.ib; ++l) {
        var p = a.ub[l].x * e + a.ub[l].y * h;
        p > g && (g = p, f = l)
    }
    e = Ue(a, c, f, b, d);
    h = f - 1;
    0 > h && (h = a.ib - 1);
    g = Ue(a, c, h, b, d);
    l = f + 1;
    l >= a.ib && (l = 0);
    var p = Ue(a, c, l, b, d),
    k = 0,
    m = 0;
    if (g > e && g > p) for (k = h, m = g;;) if (f = k - 1, 0 > f && (f = a.ib - 1), e = Ue(a, c, f, b, d), e > m) k = f,
    m = e;
    else break;
    else if (p > e) for (k = l, m = p;;) if (f = k + 1, f >= a.ib && (f = 0), e = Ue(a, c, f, b, d), e > m) k = f,
    m = e;
    else break;
    else k = f,
    m = e;
    return {
        Ur: k,
        On: m
    }
}
function We(a, c, b) {
    var d = new Xe,
    f = b.Bg,
    h = b.j,
    e = b.Cg,
    g = b.k,
    l, p;
    d.j = c.count;
    for (var k = d.T,
    m = 0; m < d.j; m++) {
        var n = k[m];
        n.Xb = c.Xb[m];
        n.Yb = c.Yb[m];
        l = Ye(f, n.Xb);
        p = Ye(e, n.Yb);
        n.fd = Qd(h, l);
        n.$e = Qd(g, p);
        n.fc = Sd(n.$e, n.fd);
        n.R = 0
    }
    1 < d.j && (l = c.j, p = Ze(d), p < .5 * l || 2 * l < p || p < Number.MIN_VALUE) && (d.j = 0);
    0 == d.j && (n = k[0], n.Xb = 0, n.Yb = 0, l = Ye(f, 0), p = Ye(e, 0), n.fd = Qd(h, l), n.$e = Qd(g, p), n.fc = Sd(n.$e, n.fd), d.j = 1);
    for (f = 0; 20 > f;) {
        h = [];
        for (e = 0; e < d.j; e++) h[e] = {},
        h[e].Xb = d.T[e].Xb,
        h[e].Yb = d.T[e].Yb;
        if (2 == d.j) e = d,
        g = e.k.fc,
        k = e.u.fc,
        l = Sd(k, g),
        g = -(g.x * l.x + g.y * l.y),
        0 >= g ? (e.k.R = 1, e.j = 1) : (k = k.x * l.x + k.y * l.y, 0 >= k ? (e.u.R = 1, e.j = 1, e.k.Set(e.u)) : (l = 1 / (k + g), e.k.R = k * l, e.u.R = g * l, e.j = 2));
        else if (3 == d.j) {
            var e = d,
            q = e.k.fc,
            t = e.u.fc,
            u = e.C.fc,
            v = Sd(t, q),
            g = Ld(t, v),
            k = -Ld(q, v),
            r = Sd(u, q);
            l = Ld(u, r);
            p = -Ld(q, r);
            n = Sd(u, t);
            m = Ld(u, n);
            n = -Ld(t, n);
            r = Md(v, r);
            v = r * Md(t, u);
            u = r * Md(u, q);
            q = r * Md(q, t);
            0 >= k && 0 >= p ? (e.k.R = 1, e.j = 1) : 0 < g && 0 < k && 0 >= q ? (l = 1 / (g + k), e.k.R = g * l, e.u.R = k * l, e.j = 2) : 0 < l && 0 < p && 0 >= u ? (g = 1 / (l + p), e.k.R = l * g, e.C.R = p * g, e.j = 2, e.u.Set(e.C)) : 0 >= g && 0 >= n ? (e.u.R = 1, e.j = 1, e.k.Set(e.u)) : 0 >= l && 0 >= m ? (e.C.R = 1, e.j = 1, e.k.Set(e.C)) : 0 < m && 0 < n && 0 >= v ? (g = 1 / (m + n), e.u.R = m * g, e.C.R = n * g, e.j = 2, e.k.Set(e.C)) : (g = 1 / (v + u + q), e.k.R = v * g, e.u.R = u * g, e.C.R = q * g, e.j = 3)
        }
        if (3 == d.j) break;
        e = d;
        1 == e.j ? e = e.k.fc.Tg() : 2 == e.j ? (g = Sd(e.u.fc, e.k.fc), e = 0 < Md(g, e.k.fc.Tg()) ? Z( - 1 * g.y, 1 * g.x) : Nd(g)) : e = Z(0, 0);
        if (ye(e) < Id) break;
        g = e.Tg();
        d.T[d.j].Xb = b.Bg.Hl(Pd(b.j.B, g));
        d.T[d.j].fd = Qd(b.j, Ye(b.Bg, d.T[d.j].Xb));
        d.T[d.j].Yb = b.Cg.Hl(Pd(b.k.B, e));
        d.T[d.j].$e = Qd(b.k, Ye(b.Cg, d.T[d.j].Yb));
        d.T[d.j].fc = Sd(d.T[d.j].$e, d.T[d.j].fd);
        we(e);
        we(g);
        f++;
        g = !1;
        for (e = 0; e < h.length; e++) if (d.T[d.j].Xb == h[e].Xb && d.T[d.j].Yb == h[e].Yb) {
            g = !0;
            break
        }
        if (g) break;
        d.j++
    }
    f = a.j;
    h = a.k;
    1 == d.j ? (f.P(d.k.fd), h.P(d.k.$e)) : 2 == d.j ? (f.x = d.k.R * d.k.fd.x + d.u.R * d.u.fd.x, f.y = d.k.R * d.k.fd.y + d.u.R * d.u.fd.y, h.x = d.k.R * d.k.$e.x + d.u.R * d.u.$e.x, h.y = d.k.R * d.k.$e.y + d.u.R * d.u.$e.y) : 3 == d.j && (h.x = f.x = d.k.R * d.k.fd.x + d.u.R * d.u.fd.x + d.C.R * d.C.fd.x, h.y = f.y = d.k.R * d.k.fd.y + d.u.R * d.u.fd.y + d.C.R * d.C.fd.y);
    a.Hf = xe(Sd(a.j, a.k));
    c.j = Ze(d);
    c.count = d.j;
    f = d.T;
    for (h = 0; h < d.j; h++) c.Xb[h] = f[h].Xb,
    c.Yb[h] = f[h].Yb;
    b.u && (c = b.Bg.bb, b = b.Cg.bb, a.Hf > c + b && a.Hf > Number.MIN_VALUE ? (a.Hf -= c + b, d = Sd(a.k, a.j), ze(d), a.j.x += c * d.x, a.j.y += c * d.y, a.k.x -= b * d.x, a.k.y -= b * d.y, we(d)) : (b = Z(0, 0), b.x = .5 * (a.j.x + a.k.x), b.y = .5 * (a.j.y + a.k.y), a.j.x = a.k.x = b.x, a.j.y = a.k.y = b.y, a.Hf = 0, we(b)))
}
function $e() {}
function af() {
    this.j = Z(0, 0);
    this.k = Z(0, 0);
    this.Hf = 0
}
function bf() {}
bf.prototype.Set = function(a) {
    a.xo(this)
};
bf.prototype.Hl = function(a) {
    for (var c = 0,
    b = this.T[0].x * a.x + this.T[0].y * a.y, d = 1; d < this.j; d++) {
        var f = this.T[d].x * a.x + this.T[d].y * a.y;
        f > b && (c = d, b = f)
    }
    return c
};
bf.prototype.Uj = function(a) {
    return this.T[this.Hl(a)]
};
function Ye(a, c) {
    void 0 === c && (c = 0);
    return a.T[c]
}
function cf() {
    this.j = null
}
cf.prototype.Mi = function(a) {
    df(this, a);
    a.Tc()
};
function ef(a, c, b) {
    if (null !== a.j) {
        var d = [];
        for (d.push(a.j); 0 < d.length;) if (a = d.pop(), a.Ua.Xj(b)) if (null === a.Fd) {
            if (!c(a.Xd)) break
        } else d.push(a.Fd),
        d.push(a.Ff)
    }
}
function ff(a, c) {
    if (null === a.j) a.j = c,
    a.j.parent = null;
    else {
        var b;
        b = c.Ua;
        b = Z((b.j.x + b.k.x) / 2, (b.j.y + b.k.y) / 2);
        for (var d = a.j; null !== d.Fd;) var f = d.Fd,
        d = d.Ff,
        h = Math.abs((f.Ua.j.x + f.Ua.k.x) / 2 - b.x) + Math.abs((f.Ua.j.y + f.Ua.k.y) / 2 - b.y),
        e = Math.abs((d.Ua.j.x + d.Ua.k.x) / 2 - b.x) + Math.abs((d.Ua.j.y + d.Ua.k.y) / 2 - b.y),
        d = h < e ? f: d;
        we(b);
        b = d;
        f = b.parent;
        d = gf();
        d.parent = f;
        Pe(d.Ua, c.Ua, b.Ua);
        if (f) for (b.parent.Fd == b ? f.Fd = d: f.Ff = d, d.Fd = b, d.Ff = c, b.parent = d, c.parent = d; f && !Oe(f.Ua, d.Ua);) Pe(f.Ua, f.Fd.Ua, f.Ff.Ua),
        d = f,
        f = f.parent;
        else d.Fd = b,
        d.Ff = c,
        b.parent = d,
        c.parent = d,
        a.j = d
    }
}
function df(a, c) {
    if (c == a.j) a.j = null;
    else {
        var b = c.parent,
        d = b.parent,
        f;
        f = b.Fd == c ? b.Ff: b.Fd;
        if (d) for (d.Fd == b ? d.Fd = f: d.Ff = f, f.parent = d; d;) {
            f = d.Ua;
            Pe(d.Ua, d.Fd.Ua, d.Ff.Ua);
            if (Oe(f, d.Ua)) break;
            d = d.parent
        } else a.j = f,
        f.parent = null;
        b.Tc()
    }
}
function hf() {
    this.k = new cf;
    this.j = []
}
function jf(a, c, b) {
    var d = a.k;
    b = gf(b);
    b.Ua.j.x = c.j.x - .1;
    b.Ua.j.y = c.j.y - .1;
    b.Ua.k.x = c.k.x + .1;
    b.Ua.k.y = c.k.y + .1;
    ff(d, b);
    a.j.push(b);
    return b
}
hf.prototype.Mi = function(a) {
    Na(this.j, a);
    this.k.Mi(a)
};
hf.prototype.Xj = function(a, c) {
    return a.Ua.Xj(c.Ua)
};
function kf(a, c) {
    for (var b = []; 0 < a.j.length;) {
        var d = a.j.pop();
        ef(a.k,
        function(a) {
            a != d.Xd && b.push(new lf(d.Xd, a));
            return ! 0
        },
        d.Ua)
    }
    for (var f = 0; f < b.length;) {
        var h = b[f];
        c(h.mk, h.nk);
        for (f++; f < b.length;) {
            var e = b[f];
            if (! (e.mk == h.mk && e.nk == h.nk || e.mk == h.nk && e.nk == h.mk)) break;
            f++
        }
    }
}
function mf(a) {
    this.Ua = Ne();
    this.Xd = this.parent = this.Ff = this.Fd = null;
    "undefined" != typeof a && (this.Xd = a)
}
var nf = [];
function gf(a) {
    if (0 < nf.length) {
        var c = nf.pop();
        "undefined" != typeof a && (c.Xd = a);
        c.Ua.ta();
        return c
    }
    return new mf(a)
}
mf.prototype.Tc = function() {
    this.Xd = this.parent = this.Ff = this.Fd = null;
    nf.push(this)
};
function lf(a, c) {
    this.mk = a;
    this.nk = c
}
function of() {
    this.Pa = this.Ob = 0;
    this.ua = [];
    for (var a = 0; 2 > a; a++) this.ua[a] = new pf;
    this.Oc = Z(0, 0);
    this.Ba = Z(0, 0)
}
of.prototype.Jc = function() {
    for (var a = 0; 2 > a; a++) this.ua[a].Jc();
    this.Oc.ta();
    this.Ba.ta();
    this.Ob = this.Pa = 0
};
of.prototype.Set = function(a) {
    this.Ob = a.Ob;
    for (var c = 0; 2 > c; c++) this.ua[c].Set(a.ua[c]);
    this.Oc.P(a.Oc);
    this.Ba.P(a.Ba);
    this.Pa = a.Pa
};
of.prototype.oc = function() {
    var a = new of;
    a.Set(this);
    return a
};
function pf() {
    this.Ba = Z(0, 0);
    this.Re = new Ie;
    this.Jc()
}
pf.prototype.Jc = function() {
    this.Ba.ta();
    this.wi = this.vi = 0;
    Je(this.Re, 0)
};
pf.prototype.Set = function(a) {
    this.Ba.P(a.Ba);
    this.vi = a.vi;
    this.wi = a.wi;
    this.Re.Set(a.Re)
};
function qf() {
    var a = rf,
    c = sf,
    b = tf,
    d, f, h = 0;
    switch (a.Pa) {
    case uf:
        d = Pd(c.B, a.j);
        f = Pd(b.B, a.j.Tg());
        d = a.k.Uj(d);
        f = a.u.Uj(f);
        c = Qd(c, d);
        b = Qd(b, f);
        h = (b.x - c.x) * a.j.x + (b.y - c.y) * a.j.y;
        break;
    case Af:
        h = Od(c.B, a.j);
        c = Qd(c, a.Ba);
        f = Pd(b.B, h.Tg());
        f = a.u.Uj(f);
        b = Qd(b, f);
        h = (b.x - c.x) * h.x + (b.y - c.y) * h.y;
        break;
    case Ff:
        h = Od(b.B, a.j),
        b = Qd(b, a.Ba),
        d = Pd(c.B, h.Tg()),
        d = a.k.Uj(d),
        c = Qd(c, d),
        h = (c.x - b.x) * h.x + (c.y - b.y) * h.y
    }
    return h
}
var uf = 1,
Af = 2,
Ff = 4;
function Xe() {
    this.k = new Mf;
    this.u = new Mf;
    this.C = new Mf;
    this.T = [this.k, this.u, this.C]
}
function Ze(a) {
    return 1 == a.j ? 0 : 2 == a.j ? xe(Sd(a.k.fc, a.u.fc)) : 3 == a.j ? Md(Sd(a.u.fc, a.k.fc), Sd(a.C.fc, a.k.fc)) : 0
}
function Nf() {
    this.Xb = [0, 0, 0];
    this.Yb = [0, 0, 0]
}
function Mf() {}
Mf.prototype.Set = function(a) {
    this.fd.P(a.fd);
    this.$e.P(a.$e);
    this.fc.P(a.fc);
    this.R = a.R;
    this.Xb = a.Xb;
    this.Yb = a.Yb
};
function Of() {
    this.Bg = new bf;
    this.Cg = new bf;
    this.Ru = new ce;
    this.Su = new ce
}
function Pf(a, c) {
    this.ja = "Body" + Qf++;
    this.G = new te;
    this.G.position.P(a.position);
    this.G.B.Set(a.O);
    this.m = new ce;
    this.m.S.ta();
    this.m.rd = 1;
    this.m.Ce = this.m.R = a.O;
    this.m.D.x = this.G.B.n.x * this.m.S.x + this.G.B.q.x * this.m.S.y;
    this.m.D.y = this.G.B.n.y * this.m.S.x + this.G.B.q.y * this.m.S.y;
    this.m.D.x += this.G.position.x;
    this.m.D.y += this.G.position.y;
    this.m.Kc.P(this.m.D);
    this.A = a.M.oc();
    this.k = Z(0, 0);
    this.L = a.Si;
    this.tb = a.j;
    this.Ia = a.k;
    this.ee = a.C;
    this.M = a.gc;
    this.pd = c;
    this.Fb = null;
    this.jd = new Rf;
    this.ea = new Sf;
    this.J = a.u;
    this.fb = a.qj;
    this.Na = a.Qi;
    this.Y = this.H = 0;
    this.Pa = a.type;
    this.Z = 2 == this.Pa ? 1 : 0;
    this.N = 2 == this.Pa ? 1 : 0;
    this.X = this.j = 0;
    this.Oa = a.H;
    this.u = new Tf;
    this.C = []
}
function Uf(a, c) {
    var b = new Vf(a, 0, c);
    if (a.M) {
        var d = a.pd.j.j;
        b.ac.Eh(b.j, a.G);
        b.k = jf(d, b.j, b)
    }
    var d = a.u,
    f = b.ir;
    if (null == d.j[f]) {
        var h = new Wf(b),
        e = d.u;
        null != e ? e.next = h: d.k = h;
        h.dg(e);
        d.u = h;
        d.j[f] = h
    }
    b.aq = a;
    0 < b.C && Xf(a);
    a.pd.u = !0
}
x = Pf.prototype;
x.Tc = function() {
    we(this.A);
    we(this.k)
};
function Yf(a, c, b) {
    a.G.B.Set(b);
    a.G.position.P(c);
    c = a.G.B;
    var d = a.m.S;
    a.m.D.x = c.n.x * d.x + c.q.x * d.y;
    a.m.D.y = c.n.y * d.x + c.q.y * d.y;
    a.m.D.x += a.G.position.x;
    a.m.D.y += a.G.position.y;
    a.m.Kc.P(a.m.D);
    a.m.Ce = a.m.R = b;
    b = a.pd.j.j;
    for (c = a.u.Ma(); c; c = c.Da()) Zf(c.Xd, b, a.G, a.G);
    $f(a.pd.j)
}
x.Rd = function() {
    return this.G
};
x.Fh = function() {
    return this.m.R
};
x.wo = function(a) {
    Yf(this, this.G.position, a)
};
function ag(a, c) {
    0 != a.Pa && a.A.P(c)
}
x.Ol = function(a) {
    void 0 === a && (a = 0);
    0 != this.Pa && (this.J = a)
};
x.Ch = function(a, c) {
    2 == this.Pa && (bg(this, !0), this.k.x += a.x, this.k.y += a.y, this.H += (c.x - this.m.D.x) * a.y - (c.y - this.m.D.y) * a.x)
};
x.Li = function(a) {
    void 0 === a && (a = 0);
    2 == this.Pa && (bg(this, !0), this.H += a)
};
function Xf(a) {
    a.Z = 0;
    a.N = 0;
    a.j = 0;
    a.X = 0;
    a.m.S.ta();
    if (0 != a.Pa && 1 != a.Pa) {
        for (var c = Z(0, 0), b = a.u.Ma(); b; b = b.Da()) {
            var d = b.Xd;
            if (0 != d.C) {
                var f = void 0,
                f = new De;
                d.ac.Sj(f, d.C);
                d = f;
                a.Z += d.j;
                c.x += d.k.x * d.j;
                c.y += d.k.y * d.j;
                a.j += d.u
            }
        }
        0 < a.Z ? (a.N = 1 / a.Z, c.x *= a.N, c.y *= a.N) : (a.Z = 1, a.N = 1);
        0 < a.j && !a.tb ? (a.j -= a.Z * (c.x * c.x + c.y * c.y), a.j *= a.Oa, a.X = 1 / a.j) : (a.j = 0, a.X = 0);
        b = a.m.D.oc();
        a.m.S.P(c);
        a.m.Kc.P(Qd(a.G, a.m.S));
        a.m.D.P(a.m.Kc);
        a.A.x += a.J * -(a.m.D.y - b.y);
        a.A.y += a.J * +(a.m.D.x - b.x);
        we(c);
        we(b)
    }
}
function cg(a, c) {
    var b = a.G.B,
    b = Z(b.n.x * c.x + b.q.x * c.y, b.n.y * c.x + b.q.y * c.y);
    b.x += a.G.position.x;
    b.y += a.G.position.y;
    return b
}
x.Uc = function() {
    return this.Pa
};
function bg(a, c) {
    if (a.ee != c) {
        a.ee = c;
        a.Y = 0;
        c || (a.A.ta(), a.J = 0, a.k.ta(), a.H = 0);
        for (var b = 0; b < a.C.length; b++) dg(a.C[b], a)
    }
}
x.Dr = function(a) {
    if (a != this.M) {
        if (a) {
            this.M = !0;
            a = this.pd.j.j;
            for (var c = this.u.Ma(); c; c = c.Da()) {
                var b = c.Xd,
                d = a;
                b.ac.Eh(b.j, this.G);
                b.k = jf(d, b.j, b)
            }
        } else {
            this.M = !1;
            a = this.pd.j.j;
            for (c = this.u.Ma(); c; c = c.Da()) c.Xd.Mi(a);
            for (a = this.jd.Ma(eg); a; a = a.Da()) this.pd.j.Tc(a.Wb)
        }
        for (a = 0; a < this.C.length; a++) dg(this.C[a], this)
    }
};
x.Ih = function() {
    return this.M
};
x.Gh = function() {
    return this.jd
};
function fg(a) {
    gg.B.Set(a.m.Ce);
    var c = gg.B,
    b = a.m.S;
    gg.position.x = a.m.Kc.x - (c.n.x * b.x + c.q.x * b.y);
    gg.position.y = a.m.Kc.y - (c.n.y * b.x + c.q.y * b.y);
    c = a.pd.j.j;
    for (b = a.u.Ma(); b; b = b.Da()) Zf(b.Xd, c, gg, a.G)
}
function hg(a) {
    a.G.B.Set(a.m.R);
    var c = a.G.B,
    b = a.m.S;
    a.G.position.x = a.m.D.x - (c.n.x * b.x + c.q.x * b.y);
    a.G.position.y = a.m.D.y - (c.n.y * b.x + c.q.y * b.y)
}
function ig(a, c) {
    if (2 != a.Pa && 2 != c.Pa) return ! 1;
    for (var b = a.Fb; b; b = b.next) if (b.we == c && 0 == b.ug.Dt) return ! 1;
    return ! 0
}
x.Rg = function(a) {
    this.m.Rg(a);
    this.m.D.P(this.m.Kc);
    this.m.R = this.m.Ce;
    hg(this)
};
var Qf = 0;
function jg() {
    this.position = Z(0, 0);
    this.M = Z(0, 0);
    this.Qi = this.qj = this.u = this.O = 0;
    this.C = this.k = !0;
    this.Si = this.j = !1;
    this.type = 0;
    this.gc = !0;
    this.H = 1
}
function kg() {
    this.k = [];
    for (var a = 0; a <= lg; a++) this.k[a] = null;
    this.u = [];
    for (a = 0; a <= lg; a++) this.u[a] = null;
    this.j = {}
}
kg.prototype.Ma = function(a) {
    return this.k[a]
};
function dg(a, c) {
    var b = c.Uc(),
    d = c.ja,
    f = c.ee,
    h = c.Ih();
    2 == b ? mg(a, c, d, ng) : og(a, d, ng);
    0 != b ? mg(a, c, d, pg) : og(a, d, pg);
    0 != b && h && f ? mg(a, c, d, qg) : og(a, d, qg);
    f ? mg(a, c, d, rg) : og(a, d, rg);
    h ? mg(a, c, d, sg) : og(a, d, sg)
}
kg.prototype.Nl = function(a) {
    var c = a.ja;
    if (null != this.j[c]) {
        Na(a.C, this);
        for (a = 0; a <= lg; a++) og(this, c, a);
        delete this.j[c]
    }
};
function og(a, c, b) {
    var d = a.j[c];
    null != d && (c = d[b], null != c && (d[b] = null, d = c.j, c = c.Da(), null == d ? a.k[b] = c: d.next = c, null == c ? a.u[b] = d: c.dg(d)))
}
function mg(a, c, b, d) {
    var f = a.j[b];
    if (null == f) {
        for (var f = [], h = 0; h <= lg; h++) f[h] = null;
        a.j[b] = f
    }
    null == f[d] && (f[d] = new tg(c), c = a.u[d], null != c ? c.next = f[d] : a.k[d] = f[d], f[d].dg(c), a.u[d] = f[d])
}
var ng = 0,
pg = 1,
sg = 2,
qg = 3,
rg = 4,
lg = 5;
function tg(a) {
    this.body = a;
    this.j = this.next = null
}
tg.prototype.dg = function(a) {
    this.j = a
};
tg.prototype.eb = function() {
    return this.body
};
tg.prototype.Da = function() {
    return this.next
};
function ug() {}
ug.prototype.j = function(a, c) {
    var b = a.M.oc(),
    d = c.M.oc();
    return b.j == d.j && 0 != b.j ? 0 < b.j: 0 != (b.u & d.k) && 0 != (b.k & d.u)
};
var vg = new ug;
function wg() {
    this.j = [];
    this.k = []
}
function xg() {}
xg.prototype.BeginContact = function() {};
xg.prototype.EndContact = function() {};
function yg(a) {
    this.pd = a;
    this.u = vg;
    this.k = zg;
    this.C = new Ag;
    this.j = new hf
}
function $f(a) {
    kf(a.j,
    function(c, b) {
        a: {
            var d = c.eb(),
            f = b.eb();
            if (d != f && ig(f, d) && a.u.j(c, b)) {
                for (d = f.jd.Ma(eg); d; d = d.Da()) if (f = d.Wb.$b, f == c) {
                    if (f = d.Wb.Nb, f == b) break a
                } else if (f == b && (f = d.Wb.Nb, f == c)) break a;
                a.C.u(c, b)
            }
        }
    })
}
yg.prototype.Tc = function(a) {
    a.Ii && this.k.EndContact(a);
    0 < a.ue.Ob && (bg(a.$b.eb(), !0), bg(a.Nb.eb(), !0));
    Bg(a.Xl, a);
    Bg(a.Yl, a);
    Bg(a.ro, a);
    this.C.Tc(a)
};
function Cg() {
    this.k = 1;
    this.u = 65535;
    this.j = 0
}
Cg.prototype.oc = function() {
    var a = new Cg;
    a.k = this.k;
    a.u = this.u;
    a.j = this.j;
    return a
};
function Vf(a, c, b) {
    this.ir = "Fixture" + Dg++;
    this.M = b.j.oc();
    this.j = Ne();
    this.aq = a;
    this.ac = b.shape.oc();
    this.C = b.hh;
    this.H = b.Mf;
    this.L = b.yh;
    this.u = b.k
}
Vf.prototype.eb = function() {
    return this.aq
};
Vf.prototype.Er = function(a) {
    this.H = a
};
Vf.prototype.Tc = function() {
    Me.push(this.j)
};
Vf.prototype.Mi = function(a) {
    null != this.k && (a.Mi(this.k), this.k = null)
};
function Zf(a, c, b, d) {
    if (a.k) {
        var f = Ne(),
        h = Ne();
        a.ac.Eh(f, b);
        a.ac.Eh(h, d);
        Pe(a.j, f, h);
        Me.push(f);
        Me.push(h);
        b = Sd(d.position, b.position);
        d = a.k;
        f = c.k;
        a = a.j;
        if (Oe(d.Ua, a)) a = !1;
        else {
            df(f, d);
            var h = .1 + 2 * Math.abs(b.x),
            e = .1 + 2 * Math.abs(b.y);
            d.Ua.j.x = a.j.x - h;
            d.Ua.j.y = a.j.y - e;
            d.Ua.k.x = a.k.x + h;
            d.Ua.k.y = a.k.y + e;
            ff(f, d);
            a = !0
        }
        a && c.j.push(d);
        we(b)
    }
}
var Dg = 0;
function Eg() {
    this.j = new Cg;
    this.j.k = 1;
    this.j.u = 65535;
    this.j.j = 0;
    this.shape = null;
    this.Mf = .2;
    this.hh = this.yh = 0;
    this.k = !1
}
function Tf() {
    this.u = this.k = null;
    this.j = {}
}
Tf.prototype.Ma = function() {
    return this.k
};
function Wf(a) {
    this.Xd = a;
    this.j = this.next = null
}
Wf.prototype.dg = function(a) {
    this.j = a
};
Wf.prototype.Da = function() {
    return this.next
};
function Fg(a, c) {
    this.ja = a;
    this.C = c;
    this.k = [];
    this.M = [];
    this.H = [];
    this.u = [];
    this.j = []
}
function Gg(a) {
    a.k = [];
    a.M = [];
    a.H = [];
    a.u = [];
    a.j = []
}
function Hg(a, c) {
    if (null != a.ja) for (var b = 0; b < a.u.length; ++b) for (var d = c[b], f = new wg, h = 0; h < d.H; ++h) f.j[h] = d.u[h].Pb,
    f.k[h] = d.u[h].Zf
}
function Ig(a, c) {
    a.k.push(c);
    0 != c.Uc() && (a.H.push(c), 2 == c.Uc() && a.M.push(c))
}
function Jg(a, c, b, d, f) {
    this.Ja = a;
    var h = 0;
    0 < a && (h = 1 / a);
    this.j = h;
    this.hc = c;
    this.al = b;
    this.Bl = d;
    this.Og = f
}
function Kg(a, c) {
    this.j = new yg(this);
    this.C = new Lg;
    this.u = !1;
    this.Dh = new kg;
    this.jd = new Rf;
    this.Fb = null;
    this.M = new Sf;
    this.L = 0;
    this.Y = c;
    this.k = a;
    this.H = 0;
    this.uA = Mg(this, new jg)
}
var Ng = 1 - 100 * Number.MIN_VALUE;
function Mg(a, c) {
    var b = new Pf(c, a),
    d = a.Dh,
    f = b.ja;
    null == d.j[f] && (mg(d, b, f, lg), dg(d, b), b.C.push(d));
    return b
}
function Og(a, c) {
    for (var b = c.Fb; b;) {
        var d = b,
        b = b.next;
        Pg(a, d.ug)
    }
    for (b = c.ea.Ma(); b; b = b.Da()) b.Tx.Nl(c);
    for (b = c.jd.Ma(eg); b; b = b.Da()) a.j.Tc(b.Wb);
    for (b = c.u.Ma(); b; b = b.Da()) {
        var d = c,
        f = b.Xd,
        h = d.u,
        e = f.ir,
        g = h.j[e];
        if (null != g) {
            var l = g.j,
            g = g.Da();
            null == l ? h.k = g: l.next = g;
            null == g ? h.u = l: g.dg(l);
            delete h.j[e]
        }
        for (h = d.jd.Ma(eg); h; h = h.Da()) f != h.Wb.$b && f != h.Wb.Nb || d.pd.j.Tc(h.Wb);
        d.M && f.Mi(d.pd.j.j);
        f.Tc();
        f.aq = null;
        Xf(d)
    }
    c.Tc();
    a.Dh.Nl(c)
}
function Qg(a, c) {
    var b = c.u();
    b.uj = null;
    if (b.sh = a.Fb) a.Fb.uj = b;
    a.Fb = b;
    a.L++;
    b.yd.ug = b;
    b.yd.we = b.ba;
    b.yd.prev = null;
    if (b.yd.next = b.aa.Fb) b.aa.Fb.prev = b.yd;
    b.aa.Fb = b.yd;
    b.zd.ug = b;
    b.zd.we = b.aa;
    b.zd.prev = null;
    if (b.zd.next = b.ba.Fb) b.ba.Fb.prev = b.zd;
    b.ba.Fb = b.zd;
    var d = c.j,
    f = c.k;
    if (!c.M) for (var h = f.jd.Ma(eg); h; h = h.Da()) Rg(h.Wb, f) == d && (h.Wb.Yi = !0);
    return b
}
function Pg(a, c) {
    var b = c.Dt;
    c.uj && (c.uj.sh = c.sh);
    c.sh && (c.sh.uj = c.uj);
    c == a.Fb && (a.Fb = c.sh);
    var d = c.aa,
    f = c.ba;
    bg(d, !0);
    bg(f, !0);
    c.yd.prev && (c.yd.prev.next = c.yd.next);
    c.yd.next && (c.yd.next.prev = c.yd.prev);
    c.yd == d.Fb && (d.Fb = c.yd.next);
    c.yd.prev = null;
    c.yd.next = null;
    c.zd.prev && (c.zd.prev.next = c.zd.next);
    c.zd.next && (c.zd.next.prev = c.zd.prev);
    c.zd == f.Fb && (f.Fb = c.zd.next);
    c.zd.prev = null;
    c.zd.next = null;
    a.L--;
    if (!b) for (b = f.jd.Ma(eg); b; b = b.Da()) Rg(b.Wb, f) == d && (b.Wb.Yi = !0)
}
Kg.prototype.Fr = function(a) {
    this.k = a
};
Kg.prototype.Vg = function(a, c, b) {
    var d, f;
    this.u && ($f(this.j), this.u = !1);
    for (var h = new Jg(a, this.H * a, c, b, !0), e = this.j, g = e.pd.jd.Ma(eg); g; g = g.Da()) {
        var l = g.Wb,
        p = l.$b,
        k = l.Nb,
        m = p.eb(),
        n = k.eb();
        if (0 != m.ee || 0 != n.ee) {
            if (l.Yi) {
                if (0 == ig(n, m)) {
                    e.Tc(l);
                    continue
                }
                if (0 == e.u.j(p, k)) {
                    e.Tc(l);
                    continue
                }
                l.Yi = !1
            }
            0 == e.j.Xj(p.k, k.k) ? e.Tc(l) : Sg(l, e.k)
        }
    }
    if (0 < h.Ja) {
        for (var q = this.M.Ma(); q; q = q.Da()) q.Tx.Vg(h);
        for (var t = new Fg(this.j.k, this.C), u = this.Dh.Ma(lg); u; u = u.Da()) u.body.zb = !1;
        for (var v = this.jd.Ma(eg); v; v = v.Da()) v.Wb.zb = !1;
        for (var r = this.Fb; r; r = r.sh) r.zb = !1;
        for (u = this.Dh.Ma(qg); u; u = u.Da()) {
            var y = u.body;
            if (!y.zb) {
                Gg(t);
                Tg.length = 0;
                var C = Tg;
                C.push(y);
                for (y.zb = !0; 0 < C.length;) {
                    var A = C.pop();
                    Ig(t, A);
                    A.ee || bg(A, !0);
                    if (0 != A.Uc()) {
                        for (v = A.jd.Ma($g); v; v = v.Da()) {
                            var E = v.Wb;
                            if (!E.zb) {
                                t.u.push(E);
                                E.zb = !0;
                                var F = Rg(E, A);
                                F.zb || (C.push(F), F.zb = !0)
                            }
                        }
                        for (var B = A.Fb; B; B = B.next) ! B.ug.zb && B.we.Ih() && (t.j.push(B.ug), B.ug.zb = !0, B.we.zb || (C.push(B.we), B.we.zb = !0))
                    }
                }
                for (var z = t,
                w = h,
                G = this.Y,
                S = z,
                P = w,
                Q = this.k,
                I = 0; I < S.M.length; I++) {
                    var D = S.M[I];
                    D.A.x += P.Ja * (Q.x + D.N * D.k.x);
                    D.A.y += P.Ja * (Q.y + D.N * D.k.y);
                    D.J += P.Ja * D.X * D.H;
                    D.A.me(Td(1 - P.Ja * D.fb, 0, 1));
                    D.J *= Td(1 - P.Ja * D.Na, 0, 1)
                }
                ah(z.C, z.u, z.u.length);
                for (var V = z,
                H = w,
                M = V.C,
                N = 0; N < M.k; ++N) {
                    var T = M.j[N],
                    O = T.j,
                    K = T.k,
                    U = O.N,
                    aa = O.X,
                    Oa = K.N,
                    ba = K.X,
                    Pa = T.C.x,
                    Ba = T.C.y,
                    Cb = Ba,
                    Jd = -Pa,
                    Ia = 0,
                    Mb = 0;
                    if (H.Og) for (Mb = T.H, Ia = 0; Ia < Mb; ++Ia) {
                        var ra = T.u[Ia];
                        ra.Pb *= H.hc;
                        ra.Zf *= H.hc;
                        var wb = ra.Pb * Pa + ra.Zf * Cb,
                        xb = ra.Pb * Ba + ra.Zf * Jd;
                        O.J -= aa * (ra.Gb.x * xb - ra.Gb.y * wb);
                        O.A.x -= U * wb;
                        O.A.y -= U * xb;
                        K.J += ba * (ra.Hb.x * xb - ra.Hb.y * wb);
                        K.A.x += Oa * wb;
                        K.A.y += Oa * xb
                    } else for (Mb = T.H, Ia = 0; Ia < Mb; ++Ia) {
                        var ga = T.u[Ia];
                        ga.Pb = 0;
                        ga.Zf = 0
                    }
                }
                for (var Yc = 0; Yc < V.j.length; Yc++) V.j[Yc].wf(H);
                for (var Zb = 0; Zb < H.Bl; Zb++) {
                    for (var Da = 0; Da < V.j.length; Da++) V.j[Da].yf(H);
                    bh(V.C)
                }
                for (var Nb = 0; Nb < V.j.length; Nb++);
                for (var Ob = V.C,
                Ca = 0; Ca < Ob.k; ++Ca) for (var Qe = Ob.j[Ca], yi = Qe.ja, Kd = 0; Kd < Qe.H; ++Kd) {
                    var Ug = yi.ua[Kd],
                    Vg = Qe.u[Kd];
                    Ug.vi = Vg.Pb;
                    Ug.wi = Vg.Zf
                }
                for (var Wg = z,
                yb = w,
                Re = 0; Re < Wg.H.length; ++Re) {
                    var ha = Wg.H[Re],
                    Xg = yb.Ja * ha.A.x,
                    Yg = yb.Ja * ha.A.y;
                    4 < Xg * Xg + Yg * Yg && (ze(ha.A), ha.A.x = 2 * ha.A.x * yb.j, ha.A.y = 2 * ha.A.y * yb.j);
                    var Zg = yb.Ja * ha.J;
                    Zg * Zg > Gd && (ha.J = 0 > ha.J ? -Fd * yb.j: Fd * yb.j);
                    ha.m.Kc.P(ha.m.D);
                    ha.m.Ce = ha.m.R;
                    ha.m.D.x += yb.Ja * ha.A.x;
                    ha.m.D.y += yb.Ja * ha.A.y;
                    ha.m.R += yb.Ja * ha.J;
                    hg(ha)
                }
                for (var Se = z,
                zi = w,
                Lh = 0; Lh < zi.al; Lh++) {
                    for (var Ni = ch(Se.C, .2), vf = !0, wf = 0; wf < Se.j.length; wf++) var Oi = Se.j[wf].xf(.2),
                    vf = vf && Oi;
                    if (Ni && vf) break
                }
                Hg(z, z.C.j);
                if (G) {
                    for (var de = z,
                    Pi = w,
                    ee = Number.MAX_VALUE,
                    xf = 0; xf < de.H.length; xf++) {
                        var Qb = de.H[xf]; ! Qb.Ia || Math.abs(Qb.J) > Hd || 1E-4 < Ld(Qb.A, Qb.A) ? ee = Qb.Y = 0 : (Qb.Y += Pi.Ja, ee = Math.min(ee, Qb.Y))
                    }
                    if (.5 <= ee) for (var yf = 0; yf < de.k.length; yf++) bg(de.k[yf], !1)
                }
            }
        }
        for (u = this.Dh.Ma(qg); u; u = u.Da()) fg(u.body);
        $f(this.j);
        for (var wa = new Fg(this.j.k, this.C), fe = this.Dh.Ma(lg); fe; fe = fe.Da()) {
            var Bb = fe.body;
            Bb.zb = !1;
            Bb.m.rd = 0
        }
        for (var Qa = this.jd.Ma(eg); Qa; Qa = Qa.Da()) Qa.Wb.zb = !1,
        Qa.Wb.j = null;
        for (var ge = this.Fb; ge; ge = ge.sh) ge.zb = !1;
        for (;;) {
            for (var Nh = null,
            zf = 1,
            he = this.jd.Ma(dh); he; he = he.Da()) {
                var nb = he.Wb,
                Oh = nb.$b.eb(),
                Ph = nb.Nb.eb();
                if (2 == Oh.Uc() && Oh.ee || 2 == Ph.Uc() && Ph.ee) {
                    var cb = 1;
                    if (null != nb.j) cb = nb.j;
                    else if (nb.Ii) cb = 1,
                    nb.j = cb;
                    else {
                        var Cc = nb.$b.eb(),
                        gd = nb.Nb.eb(),
                        hd = Cc.m.rd;
                        Cc.m.rd < gd.m.rd ? (hd = gd.m.rd, Cc.m.Rg(hd)) : gd.m.rd < Cc.m.rd && (hd = Cc.m.rd, gd.m.Rg(hd));
                        var Qh = nb,
                        Qi = Cc.m,
                        Ri = gd.m;
                        eh.Bg.Set(Qh.$b.ac);
                        eh.Cg.Set(Qh.Nb.ac);
                        eh.Ru = Qi;
                        eh.Su = Ri;
                        eh.KB = .005;
                        var id = eh;
                        fh++;
                        var Bf = id.Bg,
                        Cf = id.Cg,
                        Df = id.Ru,
                        Ef = id.Su,
                        ie = Bf.bb + Cf.bb,
                        je = id.KB,
                        ob = 0,
                        jd = 0,
                        Dc = 0;
                        gh.count = 0;
                        for (hh.u = !1;;) {
                            Df.Rd(sf, ob);
                            Ef.Rd(tf, ob);
                            hh.Bg = Bf;
                            hh.Cg = Cf;
                            hh.j = sf;
                            hh.k = tf;
                            We(ih, gh, hh);
                            if (0 >= ih.Hf) {
                                ob = 1;
                                break
                            }
                            var Ti = Cf,
                            W = rf,
                            Ea = gh,
                            pb = sf,
                            qb = tf;
                            W.k = Bf;
                            W.u = Ti;
                            var Rb = void 0,
                            rb = void 0,
                            Hb = void 0,
                            Sb = void 0,
                            sb = void 0,
                            Ib = void 0,
                            Fc = 0,
                            Gc = 0,
                            Hc = 0,
                            Ic = 0,
                            ke = 0,
                            le = 0,
                            X = void 0,
                            Y = void 0,
                            db = 0;
                            if (1 == Ea.count) W.Pa = uf,
                            Rb = Ye(W.k, Ea.Xb[0]),
                            Sb = Ye(W.u, Ea.Yb[0]),
                            Y = Rb,
                            X = pb.B,
                            Fc = pb.position.x + (X.n.x * Y.x + X.q.x * Y.y),
                            Gc = pb.position.y + (X.n.y * Y.x + X.q.y * Y.y),
                            Y = Sb,
                            X = qb.B,
                            Hc = qb.position.x + (X.n.x * Y.x + X.q.x * Y.y),
                            Ic = qb.position.y + (X.n.y * Y.x + X.q.y * Y.y),
                            W.j.x = Hc - Fc,
                            W.j.y = Ic - Gc,
                            ze(W.j);
                            else {
                                if (Ea.Yb[0] == Ea.Yb[1]) W.Pa = Af,
                                rb = Ye(W.k, Ea.Xb[0]),
                                Hb = Ye(W.k, Ea.Xb[1]),
                                Sb = Ye(W.u, Ea.Yb[0]),
                                W.Ba.x = .5 * (rb.x + Hb.x),
                                W.Ba.y = .5 * (rb.y + Hb.y),
                                W.j = Nd(Sd(Hb, rb)),
                                ze(W.j),
                                Y = W.j,
                                X = pb.B,
                                ke = X.n.x * Y.x + X.q.x * Y.y,
                                le = X.n.y * Y.x + X.q.y * Y.y,
                                Y = W.Ba,
                                X = pb.B,
                                Fc = pb.position.x + (X.n.x * Y.x + X.q.x * Y.y),
                                Gc = pb.position.y + (X.n.y * Y.x + X.q.y * Y.y),
                                Y = Sb,
                                X = qb.B,
                                Hc = qb.position.x + (X.n.x * Y.x + X.q.x * Y.y),
                                Ic = qb.position.y + (X.n.y * Y.x + X.q.y * Y.y),
                                db = (Hc - Fc) * ke + (Ic - Gc) * le;
                                else if (Ea.Xb[0] == Ea.Xb[0]) W.Pa = Ff,
                                sb = Ye(W.u, Ea.Yb[0]),
                                Ib = Ye(W.u, Ea.Yb[1]),
                                Rb = Ye(W.k, Ea.Xb[0]),
                                W.Ba.x = .5 * (sb.x + Ib.x),
                                W.Ba.y = .5 * (sb.y + Ib.y),
                                W.j = Nd(Sd(Ib, sb)),
                                ze(W.j),
                                Y = W.j,
                                X = qb.B,
                                ke = X.n.x * Y.x + X.q.x * Y.y,
                                le = X.n.y * Y.x + X.q.y * Y.y,
                                Y = W.Ba,
                                X = qb.B,
                                Hc = qb.position.x + (X.n.x * Y.x + X.q.x * Y.y),
                                Ic = qb.position.y + (X.n.y * Y.x + X.q.y * Y.y),
                                Y = Rb,
                                X = pb.B,
                                Fc = pb.position.x + (X.n.x * Y.x + X.q.x * Y.y),
                                Gc = pb.position.y + (X.n.y * Y.x + X.q.y * Y.y),
                                db = (Fc - Hc) * ke + (Gc - Ic) * le;
                                else {
                                    var rb = Ye(W.k, Ea.Xb[0]),
                                    Hb = Ye(W.k, Ea.Xb[1]),
                                    sb = Ye(W.u, Ea.Yb[0]),
                                    Ib = Ye(W.u, Ea.Yb[1]),
                                    Jb = Od(pb.B, Sd(Hb, rb)),
                                    Kb = Od(qb.B, Sd(Ib, sb)),
                                    Sh = Jb.x * Jb.x + Jb.y * Jb.y,
                                    Gf = Kb.x * Kb.x + Kb.y * Kb.y,
                                    me = Sd(Kb, Jb),
                                    Th = Jb.x * me.x + Jb.y * me.y,
                                    Uh = Kb.x * me.x + Kb.y * me.y,
                                    kd = Jb.x * Kb.x + Jb.y * Kb.y,
                                    Vh = Sh * Gf - kd * kd,
                                    db = 0;
                                    0 != Vh && (db = Td((kd * Uh - Th * Gf) / Vh, 0, 1));
                                    0 > (kd * db + Uh) / Gf && (db = Td((kd - Th) / Sh, 0, 1));
                                    Rb = Z(0, 0);
                                    Rb.x = rb.x + db * (Hb.x - rb.x);
                                    Rb.y = rb.y + db * (Hb.y - rb.y);
                                    Sb = Z(0, 0);
                                    Sb.x = sb.x + db * (Ib.x - sb.x);
                                    Sb.y = sb.y + db * (Ib.y - sb.y);
                                    0 == db || 1 == db ? (W.Pa = Ff, W.j = Nd(Sd(Ib, sb)), ze(W.j), W.Ba = Sb) : (W.Pa = Af, W.j = Nd(Sd(Hb, rb)), W.Ba = Rb)
                                }
                                if (0 > db) {
                                    var ne = W.j;
                                    ne.x = -ne.x;
                                    ne.y = -ne.y
                                }
                            }
                            var ld = qf();
                            if (0 >= ld) {
                                ob = 1;
                                break
                            }
                            0 == jd && (Dc = ld > ie ? Math.max(ie - je, .75 * ie) : Math.max(ld - je, .02 * ie));
                            if (ld - Dc < .5 * je) {
                                if (0 == jd) {
                                    ob = 1;
                                    break
                                }
                                break
                            }
                            var Hf = ob,
                            oe = ob,
                            md = 1,
                            If = ld;
                            Df.Rd(sf, md);
                            Ef.Rd(tf, md);
                            var Jf = qf();
                            if (Jf >= Dc) {
                                ob = 1;
                                break
                            }
                            for (var pe = 0;;) {
                                var Jc = 0,
                                Jc = pe & 1 ? oe + (Dc - If) * (md - oe) / (Jf - If) : .5 * (oe + md);
                                Df.Rd(sf, Jc);
                                Ef.Rd(tf, Jc);
                                var qe = qf();
                                if (Math.abs(qe - Dc) < .025 * je) {
                                    Hf = Jc;
                                    break
                                }
                                qe > Dc ? (oe = Jc, If = qe) : (md = Jc, Jf = qe);
                                pe++;
                                jh++;
                                if (50 == pe) break
                            }
                            kh = Math.max(kh, pe);
                            if (Hf < (1 + 100 * Number.MIN_VALUE) * ob) break;
                            ob = Hf;
                            jd++;
                            lh++;
                            if (1E3 == jd) break
                        }
                        mh = Math.max(mh, jd);
                        cb = ob;
                        0 < cb && 1 > cb && (cb = (1 - cb) * hd + cb);
                        nb.j = cb
                    }
                    Number.MIN_VALUE < cb && cb < zf && (Nh = nb, zf = cb)
                }
            }
            d = Nh;
            f = zf;
            var Tb = d,
            Kc = f;
            if (null === Tb || Ng < Kc) break;
            var nd = Tb.$b.eb(),
            od = Tb.Nb.eb();
            nh.Set(nd.m);
            oh.Set(od.m);
            nd.Rg(Kc);
            od.Rg(Kc);
            Sg(Tb, this.j.k);
            Tb.j = null;
            if (Tb.H || !Tb.enabled) nd.m.Set(nh),
            od.m.Set(oh),
            hg(nd),
            hg(od);
            else if (Tb.Ii) {
                var re = nd;
                2 != re.Uc() && (re = od);
                Gg(wa);
                Tg.length = 0;
                var pd = Tg;
                pd.push(re);
                for (re.zb = !0; 0 < pd.length;) if (Bb = pd.pop(), Ig(wa, Bb), Bb.ee || bg(Bb, !0), 2 == Bb.Uc()) {
                    for (Qa = Bb.jd.Ma($g); Qa && 32 != wa.Y; Qa = Qa.Da()) {
                        var se = Qa.Wb;
                        if (!se.zb) {
                            wa.u.push(se);
                            se.zb = !0;
                            var Lc = Rg(se, Bb);
                            Lc.zb || (0 != Lc.Uc() && (Lc.Rg(Kc), bg(Lc, !0), pd.push(Lc)), Lc.zb = !0)
                        }
                    }
                    for (var eb = Bb.Fb; eb; eb = eb.next) 32 != wa.L && !eb.ug.zb && eb.we.Ih() && (wa.j.push(eb.ug), eb.ug.zb = !0, eb.we.zb || (0 != eb.we.Uc() && (eb.we.Rg(Kc), bg(eb.we, !0), pd.push(eb.we)), eb.we.zb = !0))
                }
                var fb = wa,
                Ya = new Jg((1 - Kc) * h.Ja, 0, h.Bl, h.al, !1),
                Za = 0,
                Ub = 0;
                ah(fb.C, fb.u, fb.u.length);
                for (var Kf = fb.C,
                Za = 0; Za < fb.j.length; ++Za) fb.j[Za].wf(Ya);
                for (Za = 0; Za < Ya.Bl; ++Za) for (bh(Kf), Ub = 0; Ub < fb.j.length; ++Ub) fb.j[Ub].yf(Ya);
                for (Za = 0; Za < fb.H.length; ++Za) {
                    var ja = fb.H[Za],
                    $h = Ya.Ja * ja.A.x,
                    ai = Ya.Ja * ja.A.y;
                    4 < $h * $h + ai * ai && (ze(ja.A), ja.A.x = 2 * ja.A.x * Ya.j, ja.A.y = 2 * ja.A.y * Ya.j);
                    var bi = Ya.Ja * ja.J;
                    bi * bi > Gd && (ja.J = 0 > ja.J ? -Fd * Ya.j: Fd * Ya.j);
                    ja.m.Kc.P(ja.m.D);
                    ja.m.Ce = ja.m.R;
                    ja.m.D.x += Ya.Ja * ja.A.x;
                    ja.m.D.y += Ya.Ja * ja.A.y;
                    ja.m.R += Ya.Ja * ja.J;
                    hg(ja)
                }
                for (Za = 0; Za < Ya.al; ++Za) {
                    for (var Wi = ch(Kf, .75), Lf = !0, Ub = 0; Ub < fb.j.length; ++Ub) var Xi = fb.j[Ub].xf(.2),
                    Lf = Lf && Xi;
                    if (Wi && Lf) break
                }
                Hg(fb, Kf.j);
                for (var Ka = 0; Ka < wa.k.length; Ka++) if (wa.k[Ka].zb = !1, wa.k[Ka].ee && 2 == wa.k[Ka].Uc()) for (fg(wa.k[Ka]), Qa = wa.k[Ka].jd.Ma(eg); Qa; Qa = Qa.Da()) Qa.Wb.j = null;
                for (Ka = 0; Ka < wa.Y; Ka++) wa.u[Ka].zb = !1,
                wa.u[Ka].j = null;
                for (Ka = 0; Ka < wa.L; Ka++) wa.j[Ka].zb = !1;
                $f(this.j)
            }
        }
        this.H = h.j
    }
};
Kg.prototype.Gh = function() {
    return this.jd
};
var Tg = [];
function ph(a, c) {
    this.k = "Contact" + qh++;
    this.ue = new of;
    this.C = new of;
    this.Ii = !1;
    var b = a.eb(),
    d = c.eb();
    this.M = 2 != b.Uc() || b.L || 2 != d.Uc() || d.L;
    this.H = a.u || c.u;
    this.Yi = !1;
    this.$b = a;
    this.Nb = c;
    this.enabled = !0;
    this.Xl = b.Gh();
    this.Yl = d.Gh();
    this.ro = d.pd.Gh();
    rh(this)
}
ph.prototype.Jc = function(a, c) {
    this.ue.Jc();
    this.C.Jc();
    this.Ii = !1;
    var b = a.eb(),
    d = c.eb();
    this.M = 2 != b.Uc() || b.L || 2 != d.Uc() || d.L;
    this.H = a.u || c.u;
    this.Yi = !1;
    this.$b = a;
    this.Nb = c;
    this.enabled = !0;
    this.Xl = b.Gh();
    this.Yl = d.Gh();
    this.ro = d.pd.Gh();
    rh(this)
};
function rh(a) {
    sh(a.Xl, a);
    sh(a.Yl, a);
    sh(a.ro, a);
    th(a)
}
function th(a) {
    var c = !1,
    b = !1; ! a.H && a.enabled && (a.Ii && (c = !0), a.M && (b = !0));
    uh(a.Xl, a, c, b);
    uh(a.Yl, a, c, b);
    uh(a.ro, a, c, b)
}
ph.prototype.yo = function(a) {
    this.enabled = a;
    th(this)
};
function Rg(a, c) {
    var b = a.$b.eb();
    return b != c ? b: a.Nb.eb()
}
function Sg(a, c) {
    var b = a.C;
    a.C = a.ue;
    a.ue = b;
    a.enabled = !0;
    var d = !1,
    b = a.Ii,
    f = a.$b.eb(),
    h = a.Nb.eb(),
    e = a.$b.j.Xj(a.Nb.j);
    if (a.H) {
        if (e) {
            var d = a.$b.ac,
            f = f.Rd(),
            e = a.Nb.ac,
            g = h.Rd(),
            h = new $e;
            h.Bg = new bf;
            h.Bg.Set(d);
            h.Cg = new bf;
            h.Cg.Set(e);
            h.j = f;
            h.k = g;
            h.u = !0;
            f = new Nf;
            f.count = 0;
            d = new af;
            We(d, f, h);
            d = d.Hf < 10 * Number.MIN_VALUE
        }
        a.ue.Ob = 0
    } else {
        a.M = 2 != f.Uc() || f.L || 2 != h.Uc() || h.L ? !0 : !1;
        if (e) for (a.u(), d = 0 < a.ue.Ob, e = 0; e < a.ue.Ob; e++) {
            g = a.ue.ua[e];
            g.vi = 0;
            for (var l = g.wi = 0; l < a.C.Ob; l++) {
                var p = a.C.ua[l];
                if (p.Re.Ub == g.Re.Ub) {
                    g.vi = p.vi;
                    g.wi = p.wi;
                    break
                }
            }
        } else a.ue.Ob = 0;
        d != b && (bg(f, !0), bg(h, !0))
    }
    a.Ii = d;
    d != b && th(a); ! b && d && c.BeginContact(a);
    b && !d && c.EndContact(a)
}
ph.prototype.u = function() {};
var eh = new Of,
qh = 0;
function vh(a, c) {
    ph.call(this, a, c)
}
Cd(vh, ph);
vh.prototype.Jc = function(a, c) {
    ph.prototype.Jc.call(this, a, c)
};
vh.prototype.u = function() {
    var a = this.ue,
    c = this.$b.ac,
    b = this.$b.eb().G,
    d = this.Nb.ac,
    f = this.Nb.eb().G;
    a.Ob = 0;
    var h = f.position.x + (f.B.n.x * d.pb.x + f.B.q.x * d.pb.y) - (b.position.x + (b.B.n.x * c.pb.x + b.B.q.x * c.pb.y)),
    b = f.position.y + (f.B.n.y * d.pb.x + f.B.q.y * d.pb.y) - (b.position.y + (b.B.n.y * c.pb.x + b.B.q.y * c.pb.y)),
    f = c.bb + d.bb;
    h * h + b * b > f * f || (a.Pa = 1, a.Ba.P(c.pb), a.Oc.ta(), a.Ob = 1, a.ua[0].Ba.P(d.pb), Je(a.ua[0].Re, 0))
};
function wh() {
    this.M = Z(0, 0);
    this.Mb = Z(0, 0);
    this.C = Z(0, 0);
    this.xg = new Ud;
    this.L = new Ud;
    this.u = [];
    for (var a = 0; 2 > a; a++) this.u[a] = new xh
}
function xh() {
    this.Mb = Z(0, 0);
    this.Gb = Z(0, 0);
    this.Hb = Z(0, 0)
}
xh.prototype.Jc = function() {
    this.Mb.Set(0, 0);
    this.Gb.Set(0, 0);
    this.Hb.Set(0, 0)
};
function Ag() {
    this.j = {};
    this.k = {};
    yh(this, vh, "b2CircleShape", "b2CircleShape");
    yh(this, zh, "b2PolygonShape", "b2CircleShape");
    yh(this, Ah, "b2PolygonShape", "b2PolygonShape");
    yh(this, Bh, "b2EdgeShape", "b2CircleShape");
    yh(this, Ch, "b2PolygonShape", "b2EdgeShape")
}
function yh(a, c, b, d) {
    a.k[b] = a.k[b] || {};
    a.k[b][d] = a.k[b][d] || [];
    a.j[b] = a.j[b] || {};
    a.j[b][d] = new Dh;
    a.j[b][d].hs = c;
    a.j[b][d].ou = !0;
    b != d && (a.j[d] = a.j[d] || {},
    a.j[d][b] = new Dh, a.j[d][b].hs = c, a.j[d][b].ou = !1)
}
Ag.prototype.u = function(a, c) {
    var b = a.ac.Hh(),
    d = c.ac.Hh(),
    f = this.j[b][d],
    h = f.hs;
    return null != h ? f.ou ? 0 < this.k[b][d].length ? (b = this.k[b][d].pop(), b.Jc(a, c), b) : new h(a, c) : 0 < this.k[d][b].length ? (b = this.k[d][b].pop(), b.Jc(c, a), b) : new h(c, a) : null
};
Ag.prototype.Tc = function(a) {
    this.k[a.$b.ac.Hh()][a.Nb.ac.Hh()].push(a)
};
function Rf() {
    this.k = [];
    for (var a = 0; a <= eg; a++) this.k[a] = null;
    this.u = [];
    for (a = 0; a <= eg; a++) this.u[a] = null;
    this.j = {}
}
Rf.prototype.Ma = function(a) {
    return this.k[a]
};
function sh(a, c) {
    var b = c.k;
    if (null == a.j[b]) {
        a.j[b] = [];
        for (var d = 0; d <= eg; d++) a.j[b][d] = null;
        Eh(a, c, b, eg)
    }
}
function uh(a, c, b, d) {
    b ? Eh(a, c, c.k, $g) : Fh(a, c.k, $g);
    d ? Eh(a, c, c.k, dh) : Fh(a, c.k, dh)
}
function Bg(a, c) {
    var b = c.k;
    if (null != a.j[b]) {
        for (var d = 0; d <= eg; d++) Fh(a, b, d);
        delete a.j[b]
    }
}
function Fh(a, c, b) {
    var d = a.j[c];
    if (null != d && (c = d[b], null != c)) {
        d[b] = null;
        var d = c.j,
        f = c.Da();
        null == d ? a.k[b] = f: d.next = f;
        null == f ? a.u[b] = d: f.dg(d);
        Gh.push(c)
    }
}
function Eh(a, c, b, d) {
    b = a.j[b];
    if (null == b[d]) {
        if (0 < Gh.length) {
            var f = Gh.pop();
            f.next = null;
            f.j = null;
            f.Wb = c;
            c = f
        } else c = new Hh(c);
        b[d] = c;
        c = a.u[d];
        null != c ? (c.next = b[d], b[d].dg(c)) : a.k[d] = b[d];
        a.u[d] = b[d]
    }
}
var $g = 0,
dh = 1,
eg = 2;
function Hh(a) {
    this.Wb = a;
    this.j = this.next = null
}
var Gh = [];
Hh.prototype.dg = function(a) {
    this.j = a
};
Hh.prototype.Da = function() {
    return this.next
};
function Dh() {}
function Lg() {
    this.j = []
}
function ah(a, c, b) {
    for (a.k = b; a.j.length < a.k;) a.j[a.j.length] = new wh;
    for (var d = 0; d < b; d++) {
        var f = c[d],
        h = f.$b,
        e = f.Nb,
        g = h.ac.bb,
        l = e.ac.bb,
        p = h.eb(),
        k = e.eb(),
        f = f.ue,
        m = Math.sqrt(h.H * e.H),
        n,
        h = h.L,
        e = e.L;
        n = h > e ? h: e;
        var e = p.A.x,
        h = p.A.y,
        q = k.A.x,
        t = k.A.y,
        u = p.J,
        v = k.J,
        r = f,
        y = p.G,
        C = g,
        A = k.G,
        E = l,
        F = Ih;
        if (0 != r.Ob) {
            var B = 0,
            z = void 0,
            w = void 0,
            G = 0,
            S = 0,
            P = 0,
            Q = 0,
            I = 0,
            z = 0;
            switch (r.Pa) {
            case 1:
                w = y.B;
                z = r.Ba;
                B = y.position.x + w.n.x * z.x + w.q.x * z.y;
                y = y.position.y + w.n.y * z.x + w.q.y * z.y;
                w = A.B;
                z = r.ua[0].Ba;
                r = A.position.x + w.n.x * z.x + w.q.x * z.y;
                A = A.position.y + w.n.y * z.x + w.q.y * z.y;
                z = r - B;
                w = A - y;
                G = z * z + w * w;
                G > Id ? (G = Math.sqrt(G), F.j.x = z / G, F.j.y = w / G) : (F.j.x = 1, F.j.y = 0);
                z = y + C * F.j.y;
                A = A - E * F.j.y;
                F.ua[0].x = .5 * (B + C * F.j.x + (r - E * F.j.x));
                F.ua[0].y = .5 * (z + A);
                break;
            case 2:
                w = y.B;
                z = r.Oc;
                G = w.n.x * z.x + w.q.x * z.y;
                S = w.n.y * z.x + w.q.y * z.y;
                w = y.B;
                z = r.Ba;
                P = y.position.x + w.n.x * z.x + w.q.x * z.y;
                Q = y.position.y + w.n.y * z.x + w.q.y * z.y;
                F.j.x = G;
                F.j.y = S;
                for (B = 0; B < r.Ob; B++) w = A.B,
                z = r.ua[B].Ba,
                I = A.position.x + w.n.x * z.x + w.q.x * z.y,
                z = A.position.y + w.n.y * z.x + w.q.y * z.y,
                F.ua[B].x = I + .5 * (C - (I - P) * G - (z - Q) * S - E) * G,
                F.ua[B].y = z + .5 * (C - (I - P) * G - (z - Q) * S - E) * S;
                break;
            case 4:
                for (w = A.B, z = r.Oc, G = w.n.x * z.x + w.q.x * z.y, S = w.n.y * z.x + w.q.y * z.y, w = A.B, z = r.Ba, P = A.position.x + w.n.x * z.x + w.q.x * z.y, Q = A.position.y + w.n.y * z.x + w.q.y * z.y, F.j.x = -G, F.j.y = -S, B = 0; B < r.Ob; B++) w = y.B,
                z = r.ua[B].Ba,
                I = y.position.x + w.n.x * z.x + w.q.x * z.y,
                z = y.position.y + w.n.y * z.x + w.q.y * z.y,
                F.ua[B].x = I + .5 * (E - (I - P) * G - (z - Q) * S - C) * G,
                F.ua[B].y = z + .5 * (E - (I - P) * G - (z - Q) * S - C) * S
            }
        }
        E = Ih.j.x;
        F = Ih.j.y;
        C = a.j[d];
        C.j = p;
        C.k = k;
        C.ja = f;
        C.C.x = E;
        C.C.y = F;
        C.H = f.Ob;
        C.Mf = m;
        C.yh = n;
        C.M.x = f.Oc.x;
        C.M.y = f.Oc.y;
        C.Mb.x = f.Ba.x;
        C.Mb.y = f.Ba.y;
        C.Y = g + l;
        C.type = f.Pa;
        for (g = 0; g < C.H; ++g) m = f.ua[g],
        l = C.u[g],
        l.Pb = m.vi,
        l.Zf = m.wi,
        l.Mb.P(m.Ba),
        m = l.Gb.x = Ih.ua[g].x - p.m.D.x,
        n = l.Gb.y = Ih.ua[g].y - p.m.D.y,
        A = l.Hb.x = Ih.ua[g].x - k.m.D.x,
        B = l.Hb.y = Ih.ua[g].y - k.m.D.y,
        r = m * F - n * E,
        z = A * F - B * E,
        r *= r,
        z *= z,
        l.xg = 1 / (p.N + k.N + p.X * r + k.X * z),
        w = p.Z * p.N + k.Z * k.N,
        w += p.Z * p.X * r + k.Z * k.X * z,
        l.Gy = 1 / w,
        z = F,
        w = -E,
        r = m * w - n * z,
        z = A * w - B * z,
        r *= r,
        z *= z,
        l.EB = 1 / (p.N + k.N + p.X * r + k.X * z),
        l.Al = 0,
        m = C.C.x * (q + -v * B - e - -u * n) + C.C.y * (t + v * A - h - u * m),
        -1 > m && (l.Al += -C.yh * m);
        2 == C.H && (t = C.u[0], q = C.u[1], f = p.N, p = p.X, e = k.N, k = k.X, h = t.Gb.x * F - t.Gb.y * E, t = t.Hb.x * F - t.Hb.y * E, u = q.Gb.x * F - q.Gb.y * E, g = q.Hb.x * F - q.Hb.y * E, q = f + e + p * h * h + k * t * t, v = f + e + p * u * u + k * g * g, k = f + e + p * h * u + k * t * g, q * q < 100 * (q * v - k * k) ? (C.L.n.Set(q, k), C.L.q.Set(k, v), Xd(C.L, C.xg)) : C.H = 1)
    }
}
function bh(a) {
    for (var c = 0; c < a.k; c++) {
        for (var b = a.j[c], d = b.C.x, f = b.C.y, h = 0; h < b.H; h++) {
            var e = b,
            g = b.u[h],
            l = e.C.y,
            p = -e.C.x,
            k = e.Mf * g.Pb,
            k = Td(g.Zf - g.EB * ((e.k.A.x - e.k.J * g.Hb.y - e.j.A.x + e.j.J * g.Gb.y) * l + (e.k.A.y + e.k.J * g.Hb.x - e.j.A.y - e.j.J * g.Gb.x) * p), -k, k),
            m = k - g.Zf,
            l = m * l,
            p = m * p;
            e.j.A.x -= e.j.N * l;
            e.j.A.y -= e.j.N * p;
            e.j.J -= e.j.X * (g.Gb.x * p - g.Gb.y * l);
            e.k.A.x += e.k.N * l;
            e.k.A.y += e.k.N * p;
            e.k.J += e.k.X * (g.Hb.x * p - g.Hb.y * l);
            g.Zf = k
        }
        if (1 == b.H) h = b.u[0],
        e = h.Pb - h.xg * ((b.k.A.x - b.k.J * h.Hb.y - b.j.A.x + b.j.J * h.Gb.y) * d + (b.k.A.y + b.k.J * h.Hb.x - b.j.A.y - b.j.J * h.Gb.x) * f - h.Al),
        e = 0 < e ? e: 0,
        g = e - h.Pb,
        d = g * d,
        f = g * f,
        b.j.A.x -= b.j.N * d,
        b.j.A.y -= b.j.N * f,
        b.j.J -= b.j.X * (h.Gb.x * f - h.Gb.y * d),
        b.k.A.x += b.k.N * d,
        b.k.A.y += b.k.N * f,
        b.k.J += b.k.X * (h.Hb.x * f - h.Hb.y * d),
        h.Pb = e;
        else for (h = b.u[0], e = b.u[1], g = h.Pb, p = e.Pb, k = (b.k.A.x - b.k.J * h.Hb.y - b.j.A.x + b.j.J * h.Gb.y) * d + (b.k.A.y + b.k.J * h.Hb.x - b.j.A.y - b.j.J * h.Gb.x) * f - h.Al, f = (b.k.A.x - b.k.J * e.Hb.y - b.j.A.x + b.j.J * e.Gb.y) * d + (b.k.A.y + b.k.J * e.Hb.x - b.j.A.y - b.j.J * e.Gb.x) * f - e.Al, k -= b.L.n.x * g + b.L.q.x * p, f -= b.L.n.y * g + b.L.q.y * p;;) {
            d = -(b.xg.n.x * k + b.xg.q.x * f);
            if (0 <= d && (l = -(b.xg.n.y * k + b.xg.q.y * f), 0 <= l)) {
                Jh(b, h, e, d - g, l - p);
                h.Pb = d;
                e.Pb = l;
                break
            }
            d = -h.xg * k;
            if (0 <= d && 0 <= b.L.n.y * d + f) {
                Jh(b, h, e, d - g, -p);
                h.Pb = d;
                e.Pb = 0;
                break
            }
            d = -e.xg * f;
            if (0 <= d && 0 <= b.L.q.x * d + k) {
                Jh(b, h, e, -g, d - p);
                h.Pb = 0;
                e.Pb = d;
                break
            }
            if (0 <= k && 0 <= f) {
                Jh(b, h, e, -g, -p);
                h.Pb = 0;
                e.Pb = 0;
                break
            }
            break
        }
    }
}
function Jh(a, c, b, d, f) {
    var h = d * a.C.x;
    d *= a.C.y;
    var e = f * a.C.x;
    f *= a.C.y;
    a.j.A.x -= a.j.N * (h + e);
    a.j.A.y -= a.j.N * (d + f);
    a.j.J -= a.j.X * (c.Gb.x * d - c.Gb.y * h + b.Gb.x * f - b.Gb.y * e);
    a.k.A.x += a.k.N * (h + e);
    a.k.A.y += a.k.N * (d + f);
    a.k.J += a.k.X * (c.Hb.x * d - c.Hb.y * h + b.Hb.x * f - b.Hb.y * e);
    c.Pb = 0;
    b.Pb = 0
}
function ch(a, c) {
    void 0 === c && (c = 0);
    for (var b = 0,
    d = 0; d < a.k; d++) {
        var f = a.j[d],
        h = f.j,
        e = f.k,
        g = h.Z * h.N,
        l = h.Z * h.X,
        p = e.Z * e.N,
        k = e.Z * e.X,
        m = f,
        n = Kh;
        switch (m.type) {
        case 1:
            var q = m.j.G.B,
            t = m.Mb,
            u = m.j.G.position.x + (q.n.x * t.x + q.q.x * t.y),
            v = m.j.G.position.y + (q.n.y * t.x + q.q.y * t.y),
            q = m.k.G.B,
            t = m.u[0].Mb,
            r = m.k.G.position.x + (q.n.x * t.x + q.q.x * t.y),
            q = m.k.G.position.y + (q.n.y * t.x + q.q.y * t.y),
            t = r - u,
            y = q - v,
            C = t * t + y * y;
            C > Id ? (C = Math.sqrt(C), n.j.x = t / C, n.j.y = y / C) : (n.j.x = 1, n.j.y = 0);
            n.ua[0].x = .5 * (u + r);
            n.ua[0].y = .5 * (v + q);
            n.k[0] = t * n.j.x + y * n.j.y - m.Y;
            break;
        case 2:
            n.j.x = m.j.G.B.n.x * m.M.x + m.j.G.B.q.x * m.M.y;
            n.j.y = m.j.G.B.n.y * m.M.x + m.j.G.B.q.y * m.M.y;
            u = m.j.G.position.x + (m.j.G.B.n.x * m.Mb.x + m.j.G.B.q.x * m.Mb.y);
            v = m.j.G.position.y + (m.j.G.B.n.y * m.Mb.x + m.j.G.B.q.y * m.Mb.y);
            for (r = 0; r < m.H; r++) q = m.k.G.position.x + (m.k.G.B.n.x * m.u[r].Mb.x + m.k.G.B.q.x * m.u[r].Mb.y),
            t = m.k.G.position.y + (m.k.G.B.n.y * m.u[r].Mb.x + m.k.G.B.q.y * m.u[r].Mb.y),
            n.k[r] = (q - u) * n.j.x + (t - v) * n.j.y - m.Y,
            n.ua[r].x = q,
            n.ua[r].y = t;
            break;
        case 4:
            n.j.x = m.k.G.B.n.x * m.M.x + m.k.G.B.q.x * m.M.y;
            n.j.y = m.k.G.B.n.y * m.M.x + m.k.G.B.q.y * m.M.y;
            u = m.k.G.position.x + (m.k.G.B.n.x * m.Mb.x + m.k.G.B.q.x * m.Mb.y);
            v = m.k.G.position.y + (m.k.G.B.n.y * m.Mb.x + m.k.G.B.q.y * m.Mb.y);
            for (r = 0; r < m.H; r++) q = m.j.G.position.x + (m.j.G.B.n.x * m.u[r].Mb.x + m.j.G.B.q.x * m.u[r].Mb.y),
            t = m.j.G.position.y + (m.j.G.B.n.y * m.u[r].Mb.x + m.j.G.B.q.y * m.u[r].Mb.y),
            n.k[r] = (q - u) * n.j.x + (t - v) * n.j.y - m.Y,
            n.ua[r].Set(q, t);
            n.j.x *= -1;
            n.j.y *= -1
        }
        n = Kh.j;
        for (m = 0; m < f.H; m++) t = f.u[m],
        q = Kh.ua[m],
        y = Kh.k[m],
        u = q.x - h.m.D.x,
        v = q.y - h.m.D.y,
        r = q.x - e.m.D.x,
        q = q.y - e.m.D.y,
        b = b < y ? b: y,
        y = -t.Gy * Td(c * (y + .005), -.2, 0),
        t = y * n.x,
        y *= n.y,
        h.m.D.x -= g * t,
        h.m.D.y -= g * y,
        h.m.R -= l * (u * y - v * t),
        hg(h),
        e.m.D.x += p * t,
        e.m.D.y += p * y,
        e.m.R += k * (r * y - q * t),
        hg(e)
    }
    return - .0075 < b
}
function Bh(a, c) {
    ph.call(this, a, c)
}
Cd(Bh, ph);
Bh.prototype.Jc = function(a, c) {
    ph.prototype.Jc.call(this, a, c)
};
Bh.prototype.u = function() {};
function zh(a, c) {
    ph.call(this, a, c)
}
Cd(zh, ph);
zh.prototype.Jc = function(a, c) {
    ph.prototype.Jc.call(this, a, c)
};
zh.prototype.u = function() {
    a: {
        var a = this.ue,
        c = this.$b.ac,
        b = this.$b.eb().G,
        d = this.Nb.ac,
        f = this.Nb.eb().G;
        a.Ob = 0;
        for (var h = f.position.x + (f.B.n.x * d.pb.x + f.B.q.x * d.pb.y) - b.position.x, e = f.position.y + (f.B.n.y * d.pb.x + f.B.q.y * d.pb.y) - b.position.y, f = h * b.B.n.x + e * b.B.n.y, b = h * b.B.q.x + e * b.B.q.y, h = 0, e = -Number.MAX_VALUE, g = c.bb + d.bb, l = 0; l < c.ib; ++l) {
            var p = c.ub[l].x * (f - c.T[l].x) + c.ub[l].y * (b - c.T[l].y);
            if (p > g) break a;
            p > e && (e = p, h = l)
        }
        p = h + 1;
        p >= c.ib && (p = 0);
        var l = c.T[h],
        k = c.T[p];
        e < Number.MIN_VALUE ? (a.Ob = 1, a.Pa = 2, a.Oc.P(c.ub[h]), a.Ba.x = .5 * (l.x + k.x), a.Ba.y = .5 * (l.y + k.y), a.ua[0].Ba.P(d.pb), Je(a.ua[0].Re, 0)) : 0 >= (f - l.x) * (k.x - l.x) + (b - l.y) * (k.y - l.y) ? (f - l.x) * (f - l.x) + (b - l.y) * (b - l.y) > g * g || (a.Ob = 1, a.Pa = 2, a.Oc.x = f - l.x, a.Oc.y = b - l.y, ze(a.Oc), a.Ba.P(l), a.ua[0].Ba.P(d.pb), Je(a.ua[0].Re, 0)) : 0 >= (f - k.x) * (l.x - k.x) + (b - k.y) * (l.y - k.y) ? (f - k.x) * (f - k.x) + (b - k.y) * (b - k.y) > g * g || (a.Ob = 1, a.Pa = 2, a.Oc.x = f - k.x, a.Oc.y = b - k.y, ze(a.Oc), a.Ba.P(k), a.ua[0].Ba.P(d.pb), Je(a.ua[0].Re, 0)) : (p = .5 * (l.x + k.x), l = .5 * (l.y + k.y), e = (f - p) * c.ub[h].x + (b - l) * c.ub[h].y, e > g || (a.Ob = 1, a.Pa = 2, a.Oc.x = c.ub[h].x, a.Oc.y = c.ub[h].y, ze(a.Oc), a.Ba.Set(p, l), a.ua[0].Ba.P(d.pb), Je(a.ua[0].Re, 0)))
    }
};
function Ch(a, c) {
    ph.call(this, a, c)
}
Cd(Ch, ph);
Ch.prototype.Jc = function(a, c) {
    ph.prototype.Jc.call(this, a, c)
};
Ch.prototype.u = function() {};
function Ah(a, c) {
    ph.call(this, a, c)
}
Cd(Ah, ph);
Ah.prototype.Jc = function(a, c) {
    ph.prototype.Jc.call(this, a, c)
};
Ah.prototype.u = function() {
    var a = this.ue,
    c = this.$b.ac,
    b = this.$b.eb().G,
    d = this.Nb.ac,
    f = this.Nb.eb().G;
    a.Ob = 0;
    var h = c.bb + d.bb,
    e = Ve(c, b, d, f),
    g = e.Ur;
    if (! (e.On > h)) {
        var l = Ve(d, f, c, b);
        if (! (l.On > h)) {
            var p = c,
            k = d,
            m = b,
            n = f,
            q = 0;
            a.Pa = 2;
            l.On > .98 * e.On + .001 && (p = d, k = c, m = f, n = b, g = l.Ur, a.Pa = 4, q = 1);
            c = g;
            b = k;
            d = n;
            k = Mh;
            void 0 === c && (c = 0);
            for (var e = m.B.n.x * p.ub[c].x + m.B.q.x * p.ub[c].y, l = m.B.n.y * p.ub[c].x + m.B.q.y * p.ub[c].y, f = d.B.n.x * e + d.B.n.y * l, l = d.B.q.x * e + d.B.q.y * l, e = f, f = 0, t = Number.MAX_VALUE, u = 0; u < b.ib; u++) {
                var v = e * b.ub[u].x + l * b.ub[u].y;
                v < t && (t = v, f = u)
            }
            e = f + 1;
            e >= b.ib && (e = 0);
            k[0].Be.x = d.position.x + (d.B.n.x * b.T[f].x + d.B.q.x * b.T[f].y);
            k[0].Be.y = d.position.y + (d.B.n.y * b.T[f].x + d.B.q.y * b.T[f].y);
            l = k[0].id;
            l.u = c;
            l.Ub = l.Ub & 4294967040 | l.u & 255;
            l = k[0].id;
            l.j = f;
            l.Ub = l.Ub & 4294902015 | l.j << 8 & 65280;
            f = k[0].id;
            f.k = 0;
            f.Ub = f.Ub & 4278255615 | f.k << 16 & 16711680;
            k[1].Be.x = d.position.x + (d.B.n.x * b.T[e].x + d.B.q.x * b.T[e].y);
            k[1].Be.y = d.position.y + (d.B.n.y * b.T[e].x + d.B.q.y * b.T[e].y);
            b = k[1].id;
            b.u = c;
            b.Ub = b.Ub & 4294967040 | b.u & 255;
            c = k[1].id;
            c.j = e;
            c.Ub = c.Ub & 4294902015 | c.j << 8 & 65280;
            c = k[1].id;
            c.k = 1;
            c.Ub = c.Ub & 4278255615 | c.k << 16 & 16711680;
            c = p.T[g];
            g = g + 1 < p.ib ? p.T[g + 1] : p.T[0];
            Rh.Set(g.x - c.x, g.y - c.y);
            ze(Rh);
            Wh.x = Rh.y;
            Wh.y = -Rh.x;
            Xh.Set(.5 * (c.x + g.x), .5 * (c.y + g.y));
            Yh.x = m.B.n.x * Rh.x + m.B.q.x * Rh.y;
            Yh.y = m.B.n.y * Rh.x + m.B.q.y * Rh.y;
            Zh.x = -Yh.x;
            Zh.y = -Yh.y;
            ci.x = Yh.y;
            ci.y = -Yh.x;
            di.x = m.position.x + (m.B.n.x * c.x + m.B.q.x * c.y);
            di.y = m.position.y + (m.B.n.y * c.x + m.B.q.y * c.y);
            ei.x = m.position.x + (m.B.n.x * g.x + m.B.q.x * g.y);
            ei.y = m.position.y + (m.B.n.y * g.x + m.B.q.y * g.y);
            if (! (2 > Te(fi, Mh, Zh, -Yh.x * di.x - Yh.y * di.y + h) || 2 > Te(gi, fi, Yh, Yh.x * ei.x + Yh.y * ei.y + h))) {
                a.Oc.P(Wh);
                a.Ba.P(Xh);
                m = ci.x * di.x + ci.y * di.y;
                for (p = g = 0; 2 > p; ++p) ci.x * gi[p].Be.x + ci.y * gi[p].Be.y - m <= h && (c = gi[p].Be.x - n.position.x, k = gi[p].Be.y - n.position.y, a.ua[g].Ba.x = c * n.B.n.x + k * n.B.n.y, a.ua[g].Ba.y = c * n.B.q.x + k * n.B.q.y, a.ua[g].Re.Set(gi[p].id), c = a.ua[g].Re, c.C = q, c.Ub = c.Ub & 16777215 | c.C << 24 & 4278190080, g++);
                a.Ob = g
            }
        }
    }
};
function hi() {
    this.H = "Controller" + ii++;
    this.pd = null;
    this.j = new kg
}
hi.prototype.Vg = function() {};
hi.prototype.Nl = function(a) {
    this.j.Nl(a);
    a = a.ea;
    var c = this.H,
    b = a.k[c];
    if (null != b) {
        var d = b.j(),
        b = b.Da();
        null == d ? a.j = b: d.k(b);
        null == b || b.dg(d);
        delete a.k[c]
    }
};
var ii = 0;
function ji() {
    hi.call(this);
    this.u = Z(0, -1);
    this.hh = this.offset = 0;
    this.C = Z(0, 0);
    this.k = null
}
Cd(ji, hi);
ji.prototype.Vg = function() {
    this.k = this.pd.k.oc();
    for (var a = this.j.Ma(rg); a; a = a.Da()) {
        for (var c = a.body,
        b = Z(0, 0), d = Z(0, 0), f = 0, h = 0, e = c.u.Ma(); e; e = e.Da()) {
            var g = Z(0, 0),
            l = e.Xd.ac.Gl(this.u, this.offset, c.Rd(), g),
            f = f + l;
            b.x += l * g.x;
            b.y += l * g.y;
            var p = 0,
            p = 1,
            h = h + l * p;
            d.x += l * g.x * p;
            d.y += l * g.y * p
        }
        f < Number.MIN_VALUE || (b.x /= f, b.y /= f, d.x /= h, d.y /= h, h = this.k.Tg(), h.me(this.hh * f), c.Ch(h, d), h = Z(c.A.x - c.J * (b.y - c.m.D.y), c.A.y + c.J * (b.x - c.m.D.x)), h.Gr(this.C), h.me( - 2 * f), c.Ch(h, b), c.Li( - c.j / c.Z * f * c.J * 1), we(b), we(d))
    }
};
function ki() {
    hi.call(this);
    this.k = Z(0, 0)
}
Cd(ki, hi);
ki.prototype.Vg = function(a) {
    a = Z(this.k.x * a.Ja, this.k.y * a.Ja);
    for (var c = this.j.Ma(rg); c; c = c.Da()) {
        var b = c.body,
        d = b.A;
        ag(b, Z(d.x + a.x, d.y + a.y))
    }
    we(a)
};
function li() {
    hi.call(this);
    this.k = Z(0, 0)
}
Cd(li, hi);
li.prototype.Vg = function() {
    for (var a = this.j.Ma(rg); a; a = a.Da()) {
        var c = a.body;
        c.Ch(this.k, c.m.D)
    }
};
function Sf() {
    this.j = null;
    this.k = {}
}
Sf.prototype.Ma = function() {
    return this.j
};
function mi() {
    hi.call(this)
}
Cd(mi, hi);
mi.prototype.Vg = function() {
    for (var a = null,
    c = null,
    b = 0,
    d = null,
    f = null,
    h = 0,
    e = 0,
    g = 0,
    h = null,
    l = this.j.Ma(lg); l; l = l.Da()) for (var a = l.body,
    c = a.m.D,
    b = a.Z,
    p = this.j.Ma(lg); p; p = p.Da()) if (d = p.body, a.ee || d.ee) f = d.m.D,
    h = f.x - c.x,
    e = f.y - c.y,
    g = h * h + e * e,
    g < Number.MIN_VALUE || (h = Z(h, e), h.me(1 / g / Math.sqrt(g) * b * d.Z), a.ee && a.Ch(h, c), h.me( - 1), d.ee && d.Ch(h, f), we(h))
};
function ni() {
    hi.call(this);
    this.u = new Ud;
    this.k = 0
}
Cd(ni, hi);
ni.prototype.Vg = function(a) {
    a = a.Ja;
    if (! (a <= Number.MIN_VALUE)) {
        a > this.k && 0 < this.k && (a = this.k);
        for (var c = this.j.Ma(rg); c; c = c.Da()) {
            var b = c.body,
            d;
            d = Od(this.u, Pd(b.G.B, b.A));
            d = Od(b.G.B, d);
            ag(b, Z(b.A.x + d.x * a, b.A.y + d.y * a))
        }
    }
};
function oi(a) {
    this.yd = new pi;
    this.zd = new pi;
    this.zf = Z(0, 0);
    this.Af = Z(0, 0);
    this.Pa = a.type;
    this.sh = this.uj = null;
    this.aa = a.j;
    this.ba = a.k;
    this.Dt = a.M
}
x = oi.prototype;
x.Uc = function() {
    return this.Pa
};
x.Ih = function() {
    return this.aa.Ih() && this.ba.Ih()
};
x.wf = function() {};
x.yf = function() {};
x.xf = function() {
    return ! 1
};
function qi() {
    this.type = 0;
    this.k = this.j = null;
    this.M = !1
}
function pi() {}
function ri(a) {
    oi.call(this, a);
    this.na = Z(0, 0);
    this.pa = Z(0, 0);
    this.j = Z(0, 0);
    this.na.P(a.L);
    this.pa.P(a.Y);
    this.H = a.length;
    this.C = a.H;
    this.L = a.C;
    this.M = this.u = this.k = 0
}
Cd(ri, oi);
ri.prototype.wf = function(a) {
    var c, b = 0,
    d = this.aa,
    f = this.ba;
    c = d.G.B;
    var h = this.na.x - d.m.S.x,
    e = this.na.y - d.m.S.y,
    b = c.n.x * h + c.q.x * e,
    e = c.n.y * h + c.q.y * e,
    h = b;
    c = f.G.B;
    var g = this.pa.x - f.m.S.x,
    l = this.pa.y - f.m.S.y,
    b = c.n.x * g + c.q.x * l,
    l = c.n.y * g + c.q.y * l,
    g = b;
    this.j.x = f.m.D.x + g - d.m.D.x - h;
    this.j.y = f.m.D.y + l - d.m.D.y - e;
    b = Math.sqrt(this.j.x * this.j.x + this.j.y * this.j.y);.005 < b ? this.j.me(1 / b) : this.j.ta();
    c = h * this.j.y - e * this.j.x;
    var p = g * this.j.y - l * this.j.x;
    c = d.N + d.X * c * c + f.N + f.X * p * p;
    this.Z = 0 != c ? 1 / c: 0;
    if (0 < this.C) {
        var b = b - this.H,
        p = 2 * Math.PI * this.C,
        k = this.Z * p * p;
        this.u = a.Ja * (2 * this.Z * this.L * p + a.Ja * k);
        this.u = 0 != this.u ? 1 / this.u: 0;
        this.M = b * a.Ja * k * this.u;
        this.Z = c + this.u;
        this.Z = 0 != this.Z ? 1 / this.Z: 0
    }
    a.Og ? (this.k *= a.hc, a = this.k * this.j.x, c = this.k * this.j.y, d.A.x -= d.N * a, d.A.y -= d.N * c, d.J -= d.X * (h * c - e * a), f.A.x += f.N * a, f.A.y += f.N * c, f.J += f.X * (g * c - l * a)) : this.k = 0
};
ri.prototype.yf = function() {
    var a = this.na.x - this.aa.m.S.x,
    c = this.na.y - this.aa.m.S.y,
    b = this.aa.G.B.n.x * a + this.aa.G.B.q.x * c,
    c = this.aa.G.B.n.y * a + this.aa.G.B.q.y * c,
    a = b,
    d = this.pa.x - this.ba.m.S.x,
    f = this.pa.y - this.ba.m.S.y,
    b = this.ba.G.B.n.x * d + this.ba.G.B.q.x * f,
    f = this.ba.G.B.n.y * d + this.ba.G.B.q.y * f,
    d = b,
    h = -this.Z * (this.j.x * (this.ba.A.x - this.ba.J * f - (this.aa.A.x - this.aa.J * c)) + this.j.y * (this.ba.A.y + this.ba.J * d - (this.aa.A.y + this.aa.J * a)) + this.M + this.u * this.k);
    this.k += h;
    b = h * this.j.x;
    h *= this.j.y;
    this.aa.A.x -= this.aa.N * b;
    this.aa.A.y -= this.aa.N * h;
    this.aa.J -= this.aa.X * (a * h - c * b);
    this.ba.A.x += this.ba.N * b;
    this.ba.A.y += this.ba.N * h;
    this.ba.J += this.ba.X * (d * h - f * b)
};
ri.prototype.xf = function() {
    if (0 < this.C) return ! 0;
    var a = this.na.x - this.aa.m.S.x,
    c = this.na.y - this.aa.m.S.y,
    b = this.aa.G.B.n.x * a + this.aa.G.B.q.x * c,
    c = this.aa.G.B.n.y * a + this.aa.G.B.q.y * c,
    a = b,
    d = this.pa.x - this.ba.m.S.x,
    f = this.pa.y - this.ba.m.S.y,
    b = this.ba.G.B.n.x * d + this.ba.G.B.q.x * f,
    f = this.ba.G.B.n.y * d + this.ba.G.B.q.y * f,
    d = b,
    h = this.ba.m.D.x + d - this.aa.m.D.x - a,
    e = this.ba.m.D.y + f - this.aa.m.D.y - c,
    g = Math.sqrt(h * h + e * e),
    b = Td(g - this.H, -.2, .2),
    l = -this.Z * b;
    this.j.Set(h / g, e / g);
    h = l * this.j.x;
    l *= this.j.y;
    this.aa.m.D.x -= this.aa.N * h;
    this.aa.m.D.y -= this.aa.N * l;
    this.aa.m.R -= this.aa.X * (a * l - c * h);
    this.ba.m.D.x += this.ba.N * h;
    this.ba.m.D.y += this.ba.N * l;
    this.ba.m.R += this.ba.X * (d * l - f * h);
    hg(this.aa);
    hg(this.ba);
    return.005 > Math.abs(b)
};
function si() {
    qi.call(this);
    this.L = Z(0, 0);
    this.Y = Z(0, 0);
    this.type = 3;
    this.length = 1;
    this.C = this.H = 0
}
Cd(si, qi);
si.prototype.u = function() {
    return new ri(this)
};
function ti(a) {
    oi.call(this, a);
    this.u = Z(0, 0);
    this.C = Z(0, 0);
    this.M = new Ud;
    this.j = Z(0, 0);
    this.u.P(a.C);
    this.C.P(a.H);
    this.M.ta();
    this.H = 0;
    this.j.ta();
    this.k = 0;
    this.L = a.L;
    this.Y = a.Y
}
Cd(ti, oi);
ti.prototype.wf = function(a) {
    var c, b = 0,
    d = this.aa,
    f = this.ba;
    c = d.G.B;
    var h = this.u.x - d.m.S.x,
    e = this.u.y - d.m.S.y,
    b = c.n.x * h + c.q.x * e,
    e = c.n.y * h + c.q.y * e,
    h = b;
    c = f.G.B;
    var g = this.C.x - f.m.S.x,
    l = this.C.y - f.m.S.y,
    b = c.n.x * g + c.q.x * l,
    l = c.n.y * g + c.q.y * l,
    g = b;
    c = d.N;
    var b = f.N,
    p = d.X,
    k = f.X,
    m = new Ud;
    m.n.x = c + b;
    m.q.x = 0;
    m.n.y = 0;
    m.q.y = c + b;
    m.n.x += p * e * e;
    m.q.x += -p * h * e;
    m.n.y += -p * h * e;
    m.q.y += p * h * h;
    m.n.x += k * l * l;
    m.q.x += -k * g * l;
    m.n.y += -k * g * l;
    m.q.y += k * g * g;
    Xd(m, this.M);
    this.H = p + k;
    0 < this.H && (this.H = 1 / this.H);
    a.Og ? (this.j.x *= a.hc, this.j.y *= a.hc, this.k *= a.hc, a = this.j, d.A.x -= c * a.x, d.A.y -= c * a.y, d.J -= p * (h * a.y - e * a.x + this.k), f.A.x += b * a.x, f.A.y += b * a.y, f.J += k * (g * a.y - l * a.x + this.k)) : (this.j.ta(), this.k = 0)
};
ti.prototype.yf = function(a) {
    var c, b = 0,
    d = this.aa,
    f = this.ba,
    h = d.A,
    e = d.J,
    g = f.A,
    l = f.J,
    p = d.N,
    k = f.N,
    m = d.X,
    n = f.X;
    c = d.G.B;
    var q = this.u.x - d.m.S.x,
    t = this.u.y - d.m.S.y,
    b = c.n.x * q + c.q.x * t,
    t = c.n.y * q + c.q.y * t,
    q = b;
    c = f.G.B;
    var u = this.C.x - f.m.S.x,
    v = this.C.y - f.m.S.y,
    b = c.n.x * u + c.q.x * v,
    v = c.n.y * u + c.q.y * v,
    u = b;
    c = 0;
    var b = -this.H * (l - e),
    r = this.k;
    c = a.Ja * this.Y;
    this.k = Td(this.k + b, -c, c);
    b = this.k - r;
    e -= m * b;
    l += n * b;
    c = Od(this.M, Z( - (g.x - l * v - h.x + e * t), -(g.y + l * u - h.y - e * q)));
    b = this.j.oc();
    this.j.vf(c);
    c = a.Ja * this.L;
    ye(this.j) > c * c && (ze(this.j), this.j.me(c));
    c = Sd(this.j, b);
    h.x -= p * c.x;
    h.y -= p * c.y;
    e -= m * (q * c.y - t * c.x);
    g.x += k * c.x;
    g.y += k * c.y;
    l += n * (u * c.y - v * c.x);
    d.J = e;
    f.J = l
};
ti.prototype.xf = function() {
    return ! 0
};
function ui() {
    qi.call(this);
    this.C = Z(0, 0);
    this.H = Z(0, 0);
    this.type = 9;
    this.Y = this.L = 0
}
Cd(ui, qi);
ui.prototype.u = function() {
    return new ti(this)
};
function vi(a) {
    oi.call(this, a);
    this.Y = Z(0, 0);
    this.ja = Z(0, 0);
    this.na = Z(0, 0);
    this.pa = Z(0, 0);
    this.j = new wi;
    var c = a.C.Pa,
    b = a.H.Pa;
    this.L = this.H = this.M = this.C = null;
    var d = 0,
    f = 0;
    this.Ia = a.C.aa;
    this.aa = a.C.ba;
    1 == c ? (this.C = a.C, this.Y.P(this.C.na), this.na.P(this.C.pa), d = xi(this.C)) : (this.M = a.C, this.Y.P(this.M.na), this.na.P(this.M.pa), d = this.M.Tj());
    this.Na = a.H.aa;
    this.ba = a.H.ba;
    1 == b ? (this.H = a.H, this.ja.P(this.H.na), this.pa.P(this.H.pa), f = xi(this.H)) : (this.L = a.H, this.ja.P(this.L.na), this.pa.P(this.L.pa), f = this.L.Tj());
    this.k = a.Dg;
    this.ea = d + this.k * f;
    this.u = 0
}
Cd(vi, oi);
vi.prototype.wf = function(a) {
    var c = this.Ia,
    b = this.Na,
    d = this.aa,
    f = this.ba,
    h = 0,
    e = 0,
    g = 0,
    l = 0,
    p = g = 0,
    k = 0;
    this.j.ta();
    this.C ? (this.j.u = -1, k += d.X) : (c = c.G.B, e = this.M.Kd, h = c.n.x * e.x + c.q.x * e.y, e = c.n.y * e.x + c.q.y * e.y, c = d.G.B, g = this.na.x - d.m.S.x, l = this.na.y - d.m.S.y, p = c.n.x * g + c.q.x * l, l = c.n.y * g + c.q.y * l, g = p * e - l * h, this.j.j.Set( - h, -e), this.j.u = -g, k += d.N + d.X * g * g);
    this.H ? (this.j.C = -this.k, k += this.k * this.k * f.X) : (c = b.G.B, e = this.L.Kd, h = c.n.x * e.x + c.q.x * e.y, e = c.n.y * e.x + c.q.y * e.y, c = f.G.B, g = this.pa.x - f.m.S.x, l = this.pa.y - f.m.S.y, p = c.n.x * g + c.q.x * l, l = c.n.y * g + c.q.y * l, g = p * e - l * h, this.j.k.Set( - this.k * h, -this.k * e), this.j.C = -this.k * g, k += this.k * this.k * (f.N + f.X * g * g));
    this.Z = 0 < k ? 1 / k: 0;
    a.Og ? (d.A.x += d.N * this.u * this.j.j.x, d.A.y += d.N * this.u * this.j.j.y, d.J += d.X * this.u * this.j.u, f.A.x += f.N * this.u * this.j.k.x, f.A.y += f.N * this.u * this.j.k.y, f.J += f.X * this.u * this.j.C) : this.u = 0
};
vi.prototype.yf = function() {
    var a = this.aa,
    c = this.ba,
    b = this.j,
    d = a.A,
    f = a.J,
    h = c.A,
    e = c.J;
    void 0 === f && (f = 0);
    void 0 === e && (e = 0);
    b = -this.Z * (b.j.x * d.x + b.j.y * d.y + b.u * f + (b.k.x * h.x + b.k.y * h.y) + b.C * e);
    this.u += b;
    a.A.x += a.N * b * this.j.j.x;
    a.A.y += a.N * b * this.j.j.y;
    a.J += a.X * b * this.j.u;
    c.A.x += c.N * b * this.j.k.x;
    c.A.y += c.N * b * this.j.k.y;
    c.J += c.X * b * this.j.C
};
vi.prototype.xf = function() {
    var a = this.aa,
    c = this.ba,
    b = 0,
    d = 0;
    this.C ? b = xi(this.C) : b = this.M.Tj();
    this.H ? d = xi(this.H) : d = this.L.Tj();
    b = -this.Z * (this.ea - (b + this.k * d));
    a.m.D.x += a.N * b * this.j.j.x;
    a.m.D.y += a.N * b * this.j.j.y;
    a.m.R += a.X * b * this.j.u;
    c.m.D.x += c.N * b * this.j.k.x;
    c.m.D.y += c.N * b * this.j.k.y;
    c.m.R += c.X * b * this.j.C;
    hg(a);
    hg(c);
    return ! 0
};
function Ai() {
    qi.call(this);
    this.type = 6;
    this.H = this.C = null;
    this.Dg = 1
}
Cd(Ai, qi);
Ai.prototype.u = function() {
    return new vi(this)
};
function wi() {
    this.j = Z(0, 0);
    this.k = Z(0, 0)
}
wi.prototype.ta = function() {
    this.j.ta();
    this.u = 0;
    this.k.ta();
    this.C = 0
};
wi.prototype.Set = function(a, c, b, d) {
    void 0 === c && (c = 0);
    void 0 === d && (d = 0);
    this.j.P(a);
    this.u = c;
    this.k.P(b);
    this.C = d
};
function Bi(a) {
    oi.call(this, a);
    this.na = Z(0, 0);
    this.pa = Z(0, 0);
    this.Kd = Z(0, 0);
    this.Sd = Z(0, 0);
    this.k = Z(0, 0);
    this.L = Z(0, 0);
    this.ea = new Ud;
    this.j = Z(0, 0);
    this.na.P(a.Y);
    this.pa.P(a.ja);
    this.Kd.P(a.C);
    this.Sd.x = -this.Kd.y;
    this.Sd.y = this.Kd.x;
    this.j.ta();
    this.Oa = this.tb = 0;
    this.pc = a.ea;
    this.Vc = a.tb;
    this.Bo = a.Ia;
    this.Co = a.Na;
    this.Jh = a.H;
    this.Wj = a.L;
    this.fb = 0;
    this.k.ta();
    this.L.ta()
}
Cd(Bi, oi);
Bi.prototype.Tj = function() {
    var a = this.aa,
    c = this.ba,
    b = cg(a, this.na),
    d = cg(c, this.pa),
    c = d.x - b.x,
    b = d.y - b.y,
    a = Od(a.G.B, this.Kd);
    return a.x * c + a.y * b
};
Bi.prototype.wf = function(a) {
    var c = this.aa,
    b = this.ba,
    d, f = 0;
    this.zf.P(c.m.S);
    this.Af.P(b.m.S);
    var h = c.Rd();
    b.Rd();
    d = c.G.B;
    var e = this.na.x - this.zf.x,
    g = this.na.y - this.zf.y,
    f = d.n.x * e + d.q.x * g,
    g = d.n.y * e + d.q.y * g,
    e = f;
    d = b.G.B;
    var l = this.pa.x - this.Af.x,
    p = this.pa.y - this.Af.y,
    f = d.n.x * l + d.q.x * p,
    p = d.n.y * l + d.q.y * p,
    l = f;
    d = b.m.D.x + l - c.m.D.x - e;
    f = b.m.D.y + p - c.m.D.y - g;
    this.Y = c.N;
    this.ja = b.N;
    this.Ia = c.X;
    this.Na = b.X;
    this.k.P(Od(h.B, this.Kd));
    this.u = (d + e) * this.k.y - (f + g) * this.k.x;
    this.C = l * this.k.y - p * this.k.x;
    this.tb = this.Y + this.ja + this.Ia * this.u * this.u + this.Na * this.C * this.C;
    this.tb = this.tb > Number.MIN_VALUE ? 1 / this.tb: 0;
    this.L.P(Od(h.B, this.Sd));
    this.H = (d + e) * this.L.y - (f + g) * this.L.x;
    this.M = l * this.L.y - p * this.L.x;
    h = this.Y;
    e = this.ja;
    g = this.Ia;
    l = this.Na;
    this.ea.n.x = h + e + g * this.H * this.H + l * this.M * this.M;
    this.ea.n.y = g * this.H * this.u + l * this.M * this.C;
    this.ea.q.x = this.ea.n.y;
    this.ea.q.y = h + e + g * this.u * this.u + l * this.C * this.C;
    this.Jh ? (d = this.k.x * d + this.k.y * f, .01 > Math.abs(this.Vc - this.pc) ? this.fb = 3 : d <= this.pc ? 1 != this.fb && (this.fb = 1, this.j.y = 0) : d >= this.Vc ? 2 != this.fb && (this.fb = 2, this.j.y = 0) : (this.fb = 0, this.j.y = 0)) : this.fb = 0;
    0 == this.Wj && (this.Oa = 0);
    a.Og ? (this.j.x *= a.hc, this.j.y *= a.hc, this.Oa *= a.hc, a = this.j.x * this.L.x + (this.Oa + this.j.y) * this.k.x, d = this.j.x * this.L.y + (this.Oa + this.j.y) * this.k.y, f = this.j.x * this.H + (this.Oa + this.j.y) * this.u, h = this.j.x * this.M + (this.Oa + this.j.y) * this.C, c.A.x -= this.Y * a, c.A.y -= this.Y * d, c.J -= this.Ia * f, b.A.x += this.ja * a, b.A.y += this.ja * d, b.J += this.Na * h) : (this.j.ta(), this.Oa = 0)
};
Bi.prototype.yf = function(a) {
    var c = this.aa,
    b = this.ba,
    d = c.A,
    f = c.J,
    h = b.A,
    e = b.J,
    g = 0,
    l = 0,
    p = 0,
    k = 0;
    this.Wj && 3 != this.fb && (k = this.tb * (this.Co - (this.k.x * (h.x - d.x) + this.k.y * (h.y - d.y) + this.C * e - this.u * f)), g = this.Oa, l = a.Ja * this.Bo, this.Oa = Td(this.Oa + k, -l, l), k = this.Oa - g, g = k * this.k.x, l = k * this.k.y, p = k * this.u, k *= this.C, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ia * p, h.x += this.ja * g, h.y += this.ja * l, e += this.Na * k);
    l = this.L.x * (h.x - d.x) + this.L.y * (h.y - d.y) + this.M * e - this.H * f;
    this.Jh && 0 != this.fb ? (p = this.k.x * (h.x - d.x) + this.k.y * (h.y - d.y) + this.C * e - this.u * f, g = this.j.oc(), a = Yd(this.ea, Z(0, 0), -l, -p), this.j.vf(a), 1 == this.fb ? this.j.y = Math.max(this.j.y, 0) : 2 == this.fb && (this.j.y = Math.min(this.j.y, 0)), l = -l - (this.j.y - g.y) * this.ea.q.x, p = 0, p = 0 != this.ea.n.x ? l / this.ea.n.x + g.x: g.x, this.j.x = p, a.x = this.j.x - g.x, a.y = this.j.y - g.y, g = a.x * this.L.x + a.y * this.k.x, l = a.x * this.L.y + a.y * this.k.y, p = a.x * this.H + a.y * this.u, k = a.x * this.M + a.y * this.C) : (a = 0, a = 0 != this.ea.n.x ? -l / this.ea.n.x: 0, this.j.x += a, g = a * this.L.x, l = a * this.L.y, p = a * this.H, k = a * this.M);
    d.x -= this.Y * g;
    d.y -= this.Y * l;
    f -= this.Ia * p;
    h.x += this.ja * g;
    h.y += this.ja * l;
    e += this.Na * k;
    c.A.P(d);
    c.J = f;
    b.A.P(h);
    b.J = e
};
Bi.prototype.xf = function() {
    var a = this.aa,
    c = this.ba,
    b = a.m.D,
    d = a.m.R,
    f = c.m.D,
    h = c.m.R,
    e, g = 0,
    l = 0,
    p = 0,
    k = 0,
    m = e = 0,
    n = 0,
    l = !1,
    q = 0,
    t = Vd(d),
    p = Vd(h);
    e = t;
    var n = this.na.x - this.zf.x,
    u = this.na.y - this.zf.y,
    g = e.n.x * n + e.q.x * u,
    u = e.n.y * n + e.q.y * u,
    n = g;
    e = p;
    p = this.pa.x - this.Af.x;
    k = this.pa.y - this.Af.y;
    g = e.n.x * p + e.q.x * k;
    k = e.n.y * p + e.q.y * k;
    p = g;
    e = f.x + p - b.x - n;
    g = f.y + k - b.y - u;
    if (this.Jh) {
        this.k = Od(t, this.Kd);
        this.u = (e + n) * this.k.y - (g + u) * this.k.x;
        this.C = p * this.k.y - k * this.k.x;
        var v = this.k.x * e + this.k.y * g;.01 > Math.abs(this.Vc - this.pc) ? (q = Td(v, -.2, .2), m = Math.abs(v), l = !0) : v <= this.pc ? (q = Td(v - this.pc + .005, -.2, 0), m = this.pc - v, l = !0) : v >= this.Vc && (q = Td(v - this.Vc + .005, 0, .2), m = v - this.Vc, l = !0)
    }
    this.L = Od(t, this.Sd);
    this.H = (e + n) * this.L.y - (g + u) * this.L.x;
    this.M = p * this.L.y - k * this.L.x;
    t = Z(0, 0);
    u = this.L.x * e + this.L.y * g;
    m = Math.max(m, Math.abs(u));
    n = 0;
    l ? (l = this.Y, p = this.ja, k = this.Ia, e = this.Na, this.ea.n.x = l + p + k * this.H * this.H + e * this.M * this.M, this.ea.n.y = k * this.H * this.u + e * this.M * this.C, this.ea.q.x = this.ea.n.y, this.ea.q.y = l + p + k * this.u * this.u + e * this.C * this.C, Yd(this.ea, t, -u, -q)) : (l = this.Y, p = this.ja, k = this.Ia, e = this.Na, q = l + p + k * this.H * this.H + e * this.M * this.M, t.x = 0 != q ? -u / q: 0, t.y = 0);
    q = t.x * this.L.x + t.y * this.k.x;
    l = t.x * this.L.y + t.y * this.k.y;
    u = t.x * this.H + t.y * this.u;
    t = t.x * this.M + t.y * this.C;
    b.x -= this.Y * q;
    b.y -= this.Y * l;
    d -= this.Ia * u;
    f.x += this.ja * q;
    f.y += this.ja * l;
    h += this.Na * t;
    a.m.R = d;
    c.m.R = h;
    hg(a);
    hg(c);
    return.005 >= m && n <= Dd
};
function Ci() {
    qi.call(this);
    this.Y = Z(0, 0);
    this.ja = Z(0, 0);
    this.C = Z(0, 0);
    this.type = 7;
    this.C.Set(1, 0);
    this.H = !1;
    this.tb = this.ea = 0;
    this.L = !1;
    this.Na = this.Ia = 0
}
Cd(Ci, qi);
Ci.prototype.u = function() {
    return new Bi(this)
};
function Di(a) {
    oi.call(this, a);
    this.na = Z(0, 0);
    this.pa = Z(0, 0);
    this.Kd = Z(0, 0);
    this.Sd = Z(0, 0);
    this.L = Z(0, 0);
    this.ea = Z(0, 0);
    this.k = new Zd;
    this.j = new $d(0, 0, 0);
    this.na.P(a.Y);
    this.pa.P(a.ja);
    this.Kd.P(a.C);
    this.Sd.x = -this.Kd.y;
    this.Sd.y = this.Kd.x;
    this.ox = a.tb;
    this.j.ta();
    this.Oa = this.tb = 0;
    this.pc = a.ea;
    this.Vc = a.Oa;
    this.Bo = a.Ia;
    this.Co = a.Na;
    this.Jh = a.H;
    this.Wj = a.L;
    this.fb = 0;
    this.L.ta();
    this.ea.ta()
}
Cd(Di, oi);
Di.prototype.Tj = function() {
    var a = this.aa,
    c = this.ba,
    b = cg(a, this.na),
    d = cg(c, this.pa),
    c = d.x - b.x,
    b = d.y - b.y,
    a = Od(a.G.B, this.Kd);
    return a.x * c + a.y * b
};
Di.prototype.wf = function(a) {
    var c = this.aa,
    b = this.ba,
    d, f = 0;
    this.zf.P(c.m.S);
    this.Af.P(b.m.S);
    var h = c.Rd();
    b.Rd();
    d = c.G.B;
    var e = this.na.x - this.zf.x,
    g = this.na.y - this.zf.y,
    f = d.n.x * e + d.q.x * g,
    g = d.n.y * e + d.q.y * g,
    e = f;
    d = b.G.B;
    var l = this.pa.x - this.Af.x,
    p = this.pa.y - this.Af.y,
    f = d.n.x * l + d.q.x * p,
    p = d.n.y * l + d.q.y * p,
    l = f;
    d = b.m.D.x + l - c.m.D.x - e;
    f = b.m.D.y + p - c.m.D.y - g;
    this.Y = c.N;
    this.ja = b.N;
    this.Ia = c.X;
    this.Na = b.X;
    this.L.P(Od(h.B, this.Kd));
    this.u = (d + e) * this.L.y - (f + g) * this.L.x;
    this.C = l * this.L.y - p * this.L.x;
    this.tb = this.Y + this.ja + this.Ia * this.u * this.u + this.Na * this.C * this.C;
    this.tb > Number.MIN_VALUE && (this.tb = 1 / this.tb);
    this.ea.P(Od(h.B, this.Sd));
    this.H = (d + e) * this.ea.y - (f + g) * this.ea.x;
    this.M = l * this.ea.y - p * this.ea.x;
    h = this.Y;
    e = this.ja;
    g = this.Ia;
    l = this.Na;
    this.k.n.x = h + e + g * this.H * this.H + l * this.M * this.M;
    this.k.n.y = g * this.H + l * this.M;
    this.k.n.z = g * this.H * this.u + l * this.M * this.C;
    this.k.q.x = this.k.n.y;
    this.k.q.y = g + l;
    this.k.q.z = g * this.u + l * this.C;
    this.k.j.x = this.k.n.z;
    this.k.j.y = this.k.q.z;
    this.k.j.z = h + e + g * this.u * this.u + l * this.C * this.C;
    this.Jh ? (d = this.L.x * d + this.L.y * f, .01 > Math.abs(this.Vc - this.pc) ? this.fb = 3 : d <= this.pc ? 1 != this.fb && (this.fb = 1, this.j.z = 0) : d >= this.Vc ? 2 != this.fb && (this.fb = 2, this.j.z = 0) : (this.fb = 0, this.j.z = 0)) : this.fb = 0;
    0 == this.Wj && (this.Oa = 0);
    a.Og ? (this.j.x *= a.hc, this.j.y *= a.hc, this.Oa *= a.hc, a = this.j.x * this.ea.x + (this.Oa + this.j.z) * this.L.x, d = this.j.x * this.ea.y + (this.Oa + this.j.z) * this.L.y, f = this.j.x * this.H + this.j.y + (this.Oa + this.j.z) * this.u, h = this.j.x * this.M + this.j.y + (this.Oa + this.j.z) * this.C, c.A.x -= this.Y * a, c.A.y -= this.Y * d, c.J -= this.Ia * f, b.A.x += this.ja * a, b.A.y += this.ja * d, b.J += this.Na * h) : (this.j.ta(), this.Oa = 0)
};
Di.prototype.yf = function(a) {
    var c = this.aa,
    b = this.ba,
    d = c.A,
    f = c.J,
    h = b.A,
    e = b.J,
    g = 0,
    l = 0,
    p = 0,
    k = 0;
    this.Wj && 3 != this.fb && (k = this.tb * (this.Co - (this.L.x * (h.x - d.x) + this.L.y * (h.y - d.y) + this.C * e - this.u * f)), g = this.Oa, a = a.Ja * this.Bo, this.Oa = Td(this.Oa + k, -a, a), k = this.Oa - g, g = k * this.L.x, l = k * this.L.y, p = k * this.u, k *= this.C, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ia * p, h.x += this.ja * g, h.y += this.ja * l, e += this.Na * k);
    p = this.ea.x * (h.x - d.x) + this.ea.y * (h.y - d.y) + this.M * e - this.H * f;
    l = e - f;
    this.Jh && 0 != this.fb ? (a = this.L.x * (h.x - d.x) + this.L.y * (h.y - d.y) + this.C * e - this.u * f, g = this.j.oc(), a = be(this.k, new $d(0, 0, 0), -p, -l, -a), this.j.vf(a), 1 == this.fb ? this.j.z = Math.max(this.j.z, 0) : 2 == this.fb && (this.j.z = Math.min(this.j.z, 0)), p = -p - (this.j.z - g.z) * this.k.j.x, l = -l - (this.j.z - g.z) * this.k.j.y, l = ae(this.k, Z(0, 0), p, l), l.x += g.x, l.y += g.y, this.j.x = l.x, this.j.y = l.y, a.x = this.j.x - g.x, a.y = this.j.y - g.y, a.z = this.j.z - g.z, g = a.x * this.ea.x + a.z * this.L.x, l = a.x * this.ea.y + a.z * this.L.y, p = a.x * this.H + a.y + a.z * this.u, k = a.x * this.M + a.y + a.z * this.C, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ia * p, h.x += this.ja * g, h.y += this.ja * l, e += this.Na * k) : (a = ae(this.k, Z(0, 0), -p, -l), this.j.x += a.x, this.j.y += a.y, g = a.x * this.ea.x, l = a.x * this.ea.y, p = a.x * this.H + a.y, k = a.x * this.M + a.y, d.x -= this.Y * g, d.y -= this.Y * l, f -= this.Ia * p, h.x += this.ja * g, h.y += this.ja * l, e += this.Na * k);
    c.A.P(d);
    c.J = f;
    b.A.P(h);
    b.J = e
};
Di.prototype.xf = function() {
    var a = this.aa,
    c = this.ba,
    b = a.m.D,
    d = a.m.R,
    f = c.m.D,
    h = c.m.R,
    e, g = 0,
    l = 0,
    p = 0,
    k = g = e = 0,
    m = 0,
    l = !1,
    n = 0,
    q = Vd(d),
    t = Vd(h);
    e = q;
    var m = this.na.x - this.zf.x,
    u = this.na.y - this.zf.y,
    g = e.n.x * m + e.q.x * u,
    u = e.n.y * m + e.q.y * u,
    m = g;
    e = t;
    t = this.pa.x - this.Af.x;
    p = this.pa.y - this.Af.y;
    g = e.n.x * t + e.q.x * p;
    p = e.n.y * t + e.q.y * p;
    t = g;
    e = f.x + t - b.x - m;
    g = f.y + p - b.y - u;
    if (this.Jh) {
        this.L = Od(q, this.Kd);
        this.u = (e + m) * this.L.y - (g + u) * this.L.x;
        this.C = t * this.L.y - p * this.L.x;
        var v = this.L.x * e + this.L.y * g;.01 > Math.abs(this.Vc - this.pc) ? (n = Td(v, -.2, .2), k = Math.abs(v), l = !0) : v <= this.pc ? (n = Td(v - this.pc + .005, -.2, 0), k = this.pc - v, l = !0) : v >= this.Vc && (n = Td(v - this.Vc + .005, 0, .2), k = v - this.Vc, l = !0)
    }
    this.ea = Od(q, this.Sd);
    this.H = (e + m) * this.ea.y - (g + u) * this.ea.x;
    this.M = t * this.ea.y - p * this.ea.x;
    q = new $d(0, 0, 0);
    u = this.ea.x * e + this.ea.y * g;
    t = h - d - this.ox;
    k = Math.max(k, Math.abs(u));
    m = Math.abs(t);
    l ? (l = this.Y, p = this.ja, e = this.Ia, g = this.Na, this.k.n.x = l + p + e * this.H * this.H + g * this.M * this.M, this.k.n.y = e * this.H + g * this.M, this.k.n.z = e * this.H * this.u + g * this.M * this.C, this.k.q.x = this.k.n.y, this.k.q.y = e + g, this.k.q.z = e * this.u + g * this.C, this.k.j.x = this.k.n.z, this.k.j.y = this.k.q.z, this.k.j.z = l + p + e * this.u * this.u + g * this.C * this.C, be(this.k, q, -u, -t, -n)) : (l = this.Y, p = this.ja, e = this.Ia, g = this.Na, n = e * this.H + g * this.M, v = e + g, this.k.n.Set(l + p + e * this.H * this.H + g * this.M * this.M, n, 0), this.k.q.Set(n, v, 0), n = ae(this.k, Z(0, 0), -u, -t), q.x = n.x, q.y = n.y, q.z = 0);
    n = q.x * this.ea.x + q.z * this.L.x;
    l = q.x * this.ea.y + q.z * this.L.y;
    u = q.x * this.H + q.y + q.z * this.u;
    q = q.x * this.M + q.y + q.z * this.C;
    b.x -= this.Y * n;
    b.y -= this.Y * l;
    d -= this.Ia * u;
    f.x += this.ja * n;
    f.y += this.ja * l;
    h += this.Na * q;
    a.m.R = d;
    c.m.R = h;
    hg(a);
    hg(c);
    return.005 >= k && m <= Dd
};
function Ei() {
    qi.call(this);
    this.Y = Z(0, 0);
    this.ja = Z(0, 0);
    this.C = Z(0, 0);
    this.type = 2;
    this.C.Set(1, 0);
    this.tb = 0;
    this.H = !1;
    this.Oa = this.ea = 0;
    this.L = !1;
    this.Na = this.Ia = 0
}
Cd(Ei, qi);
Ei.prototype.u = function() {
    return new Di(this)
};
function Fi(a) {
    oi.call(this, a);
    this.Y = Z(0, 0);
    this.ja = Z(0, 0);
    this.na = Z(0, 0);
    this.pa = Z(0, 0);
    this.j = Z(0, 0);
    this.k = Z(0, 0);
    this.H = this.aa.pd.uA;
    this.Y.x = a.C.x - this.H.G.position.x;
    this.Y.y = a.C.y - this.H.G.position.y;
    this.ja.x = a.H.x - this.H.G.position.x;
    this.ja.y = a.H.y - this.H.G.position.y;
    this.na.P(a.L);
    this.pa.P(a.Y);
    this.u = a.Dg;
    this.Na = 0 + 0 * this.u;
    this.Vc = Math.min(0, this.Na - this.u * Gi);
    this.Sd = Math.min(0, (this.Na - Gi) / this.u);
    this.L = this.M = this.C = 0
}
Cd(Fi, oi);
Fi.prototype.wf = function(a) {
    var c = this.aa,
    b = this.ba,
    d;
    d = c.G.B;
    var f = this.na.x - c.m.S.x,
    h = this.na.y - c.m.S.y,
    e = d.n.x * f + d.q.x * h,
    h = d.n.y * f + d.q.y * h,
    f = e;
    d = b.G.B;
    var g = this.pa.x - b.m.S.x,
    l = this.pa.y - b.m.S.y,
    e = d.n.x * g + d.q.x * l,
    l = d.n.y * g + d.q.y * l,
    g = e;
    d = b.m.D.x + g;
    var e = b.m.D.y + l,
    p = this.H.G.position.x + this.ja.x,
    k = this.H.G.position.y + this.ja.y;
    this.j.Set(c.m.D.x + f - (this.H.G.position.x + this.Y.x), c.m.D.y + h - (this.H.G.position.y + this.Y.y));
    this.k.Set(d - p, e - k);
    d = xe(this.j);
    e = xe(this.k);.005 < d ? this.j.me(1 / d) : this.j.ta();.005 < e ? this.k.me(1 / e) : this.k.ta();
    0 < this.Na - d - this.u * e ? this.C = this.pc = 0 : this.pc = 2;
    d < this.Vc ? this.M = this.Oa = 0 : this.Oa = 2;
    e < this.Sd ? this.L = this.fb = 0 : this.fb = 2;
    d = f * this.j.y - h * this.j.x;
    e = g * this.k.y - l * this.k.x;
    this.ea = c.N + c.X * d * d;
    this.Ia = b.N + b.X * e * e;
    this.tb = this.ea + this.u * this.u * this.Ia;
    this.ea = 1 / this.ea;
    this.Ia = 1 / this.Ia;
    this.tb = 1 / this.tb;
    a.Og ? (this.C *= a.hc, this.M *= a.hc, this.L *= a.hc, a = ( - this.C - this.M) * this.j.x, d = ( - this.C - this.M) * this.j.y, e = ( - this.u * this.C - this.L) * this.k.x, p = ( - this.u * this.C - this.L) * this.k.y, c.A.x += c.N * a, c.A.y += c.N * d, c.J += c.X * (f * d - h * a), b.A.x += b.N * e, b.A.y += b.N * p, b.J += b.X * (g * p - l * e)) : this.L = this.M = this.C = 0
};
Fi.prototype.yf = function() {
    var a = this.aa,
    c = this.ba,
    b;
    b = a.G.B;
    var d = this.na.x - a.m.S.x,
    f = this.na.y - a.m.S.y,
    h = b.n.x * d + b.q.x * f,
    f = b.n.y * d + b.q.y * f,
    d = h;
    b = c.G.B;
    var e = this.pa.x - c.m.S.x,
    g = this.pa.y - c.m.S.y,
    h = b.n.x * e + b.q.x * g,
    g = b.n.y * e + b.q.y * g,
    e = h,
    l = h = b = 0,
    p = 0;
    b = p = b = p = l = h = b = 0;
    2 == this.pc && (b = a.A.x + -a.J * f, h = a.A.y + a.J * d, l = c.A.x + -c.J * g, p = c.A.y + c.J * e, b = -(this.j.x * b + this.j.y * h) - this.u * (this.k.x * l + this.k.y * p), p = this.tb * -b, b = this.C, this.C = Math.max(0, this.C + p), p = this.C - b, b = -p * this.j.x, h = -p * this.j.y, l = -this.u * p * this.k.x, p = -this.u * p * this.k.y, a.A.x += a.N * b, a.A.y += a.N * h, a.J += a.X * (d * h - f * b), c.A.x += c.N * l, c.A.y += c.N * p, c.J += c.X * (e * p - g * l));
    2 == this.Oa && (b = a.A.x + -a.J * f, h = a.A.y + a.J * d, b = -(this.j.x * b + this.j.y * h), p = -this.ea * b, b = this.M, this.M = Math.max(0, this.M + p), p = this.M - b, b = -p * this.j.x, h = -p * this.j.y, a.A.x += a.N * b, a.A.y += a.N * h, a.J += a.X * (d * h - f * b));
    2 == this.fb && (l = c.A.x + -c.J * g, p = c.A.y + c.J * e, b = -(this.k.x * l + this.k.y * p), p = -this.Ia * b, b = this.L, this.L = Math.max(0, this.L + p), p = this.L - b, l = -p * this.k.x, p = -p * this.k.y, c.A.x += c.N * l, c.A.y += c.N * p, c.J += c.X * (e * p - g * l))
};
Fi.prototype.xf = function() {
    var a = this.aa,
    c = this.ba,
    b, d = this.H.G.position.x + this.Y.x,
    f = this.H.G.position.y + this.Y.y,
    h = this.H.G.position.x + this.ja.x,
    e = this.H.G.position.y + this.ja.y,
    g = 0,
    l = 0,
    p = 0,
    k = 0,
    m = b = 0,
    n = 0,
    q = 0,
    t = m = q = b = m = b = 0;
    2 == this.pc && (b = a.G.B, g = this.na.x - a.m.S.x, l = this.na.y - a.m.S.y, m = b.n.x * g + b.q.x * l, l = b.n.y * g + b.q.y * l, g = m, b = c.G.B, p = this.pa.x - c.m.S.x, k = this.pa.y - c.m.S.y, m = b.n.x * p + b.q.x * k, k = b.n.y * p + b.q.y * k, p = m, b = a.m.D.x + g, m = a.m.D.y + l, n = c.m.D.x + p, q = c.m.D.y + k, this.j.Set(b - d, m - f), this.k.Set(n - h, q - e), b = xe(this.j), m = xe(this.k), .005 < b ? this.j.me(1 / b) : this.j.ta(), .005 < m ? this.k.me(1 / m) : this.k.ta(), b = this.Na - b - this.u * m, t = Math.max(t, -b), b = Td(b + .005, -.2, 0), q = -this.tb * b, b = -q * this.j.x, m = -q * this.j.y, n = -this.u * q * this.k.x, q = -this.u * q * this.k.y, a.m.D.x += a.N * b, a.m.D.y += a.N * m, a.m.R += a.X * (g * m - l * b), c.m.D.x += c.N * n, c.m.D.y += c.N * q, c.m.R += c.X * (p * q - k * n), hg(a), hg(c));
    2 == this.Oa && (b = a.G.B, g = this.na.x - a.m.S.x, l = this.na.y - a.m.S.y, m = b.n.x * g + b.q.x * l, l = b.n.y * g + b.q.y * l, g = m, b = a.m.D.x + g, m = a.m.D.y + l, this.j.Set(b - d, m - f), b = xe(this.j), .005 < b ? (this.j.x *= 1 / b, this.j.y *= 1 / b) : this.j.ta(), b = this.Vc - b, t = Math.max(t, -b), b = Td(b + .005, -.2, 0), q = -this.ea * b, b = -q * this.j.x, m = -q * this.j.y, a.m.D.x += a.N * b, a.m.D.y += a.N * m, a.m.R += a.X * (g * m - l * b), hg(a));
    2 == this.fb && (b = c.G.B, p = this.pa.x - c.m.S.x, k = this.pa.y - c.m.S.y, m = b.n.x * p + b.q.x * k, k = b.n.y * p + b.q.y * k, p = m, n = c.m.D.x + p, q = c.m.D.y + k, this.k.Set(n - h, q - e), m = xe(this.k), .005 < m ? (this.k.x *= 1 / m, this.k.y *= 1 / m) : this.k.ta(), b = this.Sd - m, t = Math.max(t, -b), b = Td(b + .005, -.2, 0), q = -this.Ia * b, n = -q * this.k.x, q = -q * this.k.y, c.m.D.x += c.N * n, c.m.D.y += c.N * q, c.m.R += c.X * (p * q - k * n), hg(c));
    return.005 > t
};
var Gi = 1;
function Hi() {
    qi.call(this);
    this.C = Z(0, 0);
    this.H = Z(0, 0);
    this.L = Z(0, 0);
    this.Y = Z(0, 0);
    this.type = 4;
    this.C.Set( - 1, 1);
    this.H.Set(1, 1);
    this.L.Set( - 1, 0);
    this.Y.Set(1, 0);
    this.Dg = 1;
    this.M = !0
}
Cd(Hi, qi);
Hi.prototype.u = function() {
    return new Fi(this)
};
function Ii(a) {
    oi.call(this, a);
    this.ea = new Ud;
    this.L = new Ud;
    this.Y = new Ud;
    this.ja = new Ud;
    this.k = new $d(0, 0, 0);
    this.C = Z(0, 0);
    this.M = Z(0, 0);
    this.na = Z(0, 0);
    this.pa = Z(0, 0);
    this.j = new $d(0, 0, 0);
    this.Z = new Zd;
    this.na.P(a.C);
    this.pa.P(a.H);
    this.Oa = a.Y;
    this.j.ta();
    this.H = 0;
    this.Ia = a.ja;
    this.fb = a.ea;
    this.Sd = a.tb;
    this.Vc = a.Na;
    this.Na = a.L;
    this.pc = a.Ia;
    this.u = 0
}
Cd(Ii, oi);
function xi(a) {
    return a.ba.m.R - a.aa.m.R - a.Oa
}
Ii.prototype.wf = function(a) {
    var c = this.aa,
    b = this.ba,
    d, f = 0;
    d = c.G.B;
    var h = this.na.x - c.m.S.x,
    e = this.na.y - c.m.S.y,
    f = d.n.x * h + d.q.x * e,
    e = d.n.y * h + d.q.y * e,
    h = f;
    d = b.G.B;
    var g = this.pa.x - b.m.S.x,
    l = this.pa.y - b.m.S.y,
    f = d.n.x * g + d.q.x * l,
    l = d.n.y * g + d.q.y * l,
    g = f;
    d = c.N;
    var f = b.N,
    p = c.X,
    k = b.X;
    this.Z.n.x = d + f + e * e * p + l * l * k;
    this.Z.q.x = -e * h * p - l * g * k;
    this.Z.j.x = -e * p - l * k;
    this.Z.n.y = this.Z.q.x;
    this.Z.q.y = d + f + h * h * p + g * g * k;
    this.Z.j.y = h * p + g * k;
    this.Z.n.z = this.Z.j.x;
    this.Z.q.z = this.Z.j.y;
    this.Z.j.z = p + k;
    this.tb = 1 / (p + k);
    this.pc || (this.H = 0);
    if (this.Na) {
        var m = b.m.R - c.m.R - this.Oa;
        Math.abs(this.fb - this.Ia) < 2 * Dd ? this.u = 3 : m <= this.Ia ? (1 != this.u && (this.j.z = 0), this.u = 1) : m >= this.fb ? (2 != this.u && (this.j.z = 0), this.u = 2) : (this.u = 0, this.j.z = 0)
    } else this.u = 0;
    a.Og ? (this.j.x *= a.hc, this.j.y *= a.hc, this.H *= a.hc, a = this.j.x, m = this.j.y, c.A.x -= d * a, c.A.y -= d * m, c.J -= p * (h * m - e * a + this.H + this.j.z), b.A.x += f * a, b.A.y += f * m, b.J += k * (g * m - l * a + this.H + this.j.z)) : (this.j.ta(), this.H = 0)
};
Ii.prototype.yf = function(a) {
    var c = this.aa,
    b = this.ba,
    d = 0,
    f = d = 0,
    h = 0,
    e = 0,
    g = 0,
    l = c.A,
    p = c.J,
    k = b.A,
    m = b.J,
    n = c.N,
    q = b.N,
    t = c.X,
    u = b.X;
    this.pc && 3 != this.u && (f = this.tb * -(m - p - this.Vc), h = this.H, e = a.Ja * this.Sd, this.H = Td(this.H + f, -e, e), f = this.H - h, p -= t * f, m += u * f);
    if (this.Na && 0 != this.u) {
        a = c.G.B;
        f = this.na.x - c.m.S.x;
        h = this.na.y - c.m.S.y;
        d = a.n.x * f + a.q.x * h;
        h = a.n.y * f + a.q.y * h;
        f = d;
        a = b.G.B;
        e = this.pa.x - b.m.S.x;
        g = this.pa.y - b.m.S.y;
        d = a.n.x * e + a.q.x * g;
        g = a.n.y * e + a.q.y * g;
        e = d;
        a = k.x + -m * g - l.x - -p * h;
        var v = k.y + m * e - l.y - p * f;
        be(this.Z, this.k, -a, -v, -(m - p));
        3 == this.u ? this.j.vf(this.k) : 1 == this.u ? (d = this.j.z + this.k.z, 0 > d && (ae(this.Z, this.M, -a, -v), this.k.x = this.M.x, this.k.y = this.M.y, this.k.z = -this.j.z, this.j.x += this.M.x, this.j.y += this.M.y, this.j.z = 0)) : 2 == this.u && (d = this.j.z + this.k.z, 0 < d && (ae(this.Z, this.M, -a, -v), this.k.x = this.M.x, this.k.y = this.M.y, this.k.z = -this.j.z, this.j.x += this.M.x, this.j.y += this.M.y, this.j.z = 0));
        l.x -= n * this.k.x;
        l.y -= n * this.k.y;
        p -= t * (f * this.k.y - h * this.k.x + this.k.z);
        k.x += q * this.k.x;
        k.y += q * this.k.y;
        m += u * (e * this.k.y - g * this.k.x + this.k.z)
    } else a = c.G.B,
    f = this.na.x - c.m.S.x,
    h = this.na.y - c.m.S.y,
    d = a.n.x * f + a.q.x * h,
    h = a.n.y * f + a.q.y * h,
    f = d,
    a = b.G.B,
    e = this.pa.x - b.m.S.x,
    g = this.pa.y - b.m.S.y,
    d = a.n.x * e + a.q.x * g,
    g = a.n.y * e + a.q.y * g,
    e = d,
    ae(this.Z, this.C, -(k.x + -m * g - l.x - -p * h), -(k.y + m * e - l.y - p * f)),
    this.j.x += this.C.x,
    this.j.y += this.C.y,
    l.x -= n * this.C.x,
    l.y -= n * this.C.y,
    p -= t * (f * this.C.y - h * this.C.x),
    k.x += q * this.C.x,
    k.y += q * this.C.y,
    m += u * (e * this.C.y - g * this.C.x);
    c.A.P(l);
    c.J = p;
    b.A.P(k);
    b.J = m
};
Ii.prototype.xf = function() {
    var a = 0,
    c, b = this.aa,
    d = this.ba,
    f = 0,
    h = c = 0,
    e = 0,
    h = 0;
    if (this.Na && 0 != this.u) {
        var a = d.m.R - b.m.R - this.Oa,
        g = 0;
        3 == this.u ? (a = Td(a - this.Ia, -Ed, Ed), g = -this.tb * a, f = Math.abs(a)) : 1 == this.u ? (a -= this.Ia, f = -a, a = Td(a + Dd, -Ed, 0), g = -this.tb * a) : 2 == this.u && (f = a -= this.fb, a = Td(a - Dd, 0, Ed), g = -this.tb * a);
        b.m.R -= b.X * g;
        d.m.R += d.X * g;
        hg(b);
        hg(d)
    }
    c = b.G.B;
    g = this.na.x - b.m.S.x;
    a = this.na.y - b.m.S.y;
    h = c.n.x * g + c.q.x * a;
    a = c.n.y * g + c.q.y * a;
    g = h;
    c = d.G.B;
    var l = this.pa.x - d.m.S.x,
    p = this.pa.y - d.m.S.y,
    h = c.n.x * l + c.q.x * p,
    p = c.n.y * l + c.q.y * p,
    l = h,
    e = d.m.D.x + l - b.m.D.x - g,
    h = d.m.D.y + p - b.m.D.y - a,
    k = e * e + h * h;
    c = Math.sqrt(k);
    var m = b.N,
    n = d.N,
    q = b.X,
    t = d.X;
    k > .05 * .05 && (k = 1 / (m + n), e = k * -e, h = k * -h, b.m.D.x -= .5 * m * e, b.m.D.y -= .5 * m * h, d.m.D.x += .5 * n * e, d.m.D.y += .5 * n * h, e = d.m.D.x + l - b.m.D.x - g, h = d.m.D.y + p - b.m.D.y - a);
    this.L.n.x = m + n;
    this.L.q.x = 0;
    this.L.n.y = 0;
    this.L.q.y = m + n;
    this.Y.n.x = q * a * a;
    this.Y.q.x = -q * g * a;
    this.Y.n.y = -q * g * a;
    this.Y.q.y = q * g * g;
    this.ja.n.x = t * p * p;
    this.ja.q.x = -t * l * p;
    this.ja.n.y = -t * l * p;
    this.ja.q.y = t * l * l;
    Wd(this.ea, this.L);
    m = this.ea;
    n = this.Y;
    m.n.vf(n.n);
    m.q.vf(n.q);
    m = this.ea;
    n = this.ja;
    m.n.vf(n.n);
    m.q.vf(n.q);
    Yd(this.ea, Ji, -e, -h);
    e = Ji.x;
    h = Ji.y;
    b.m.D.x -= b.N * e;
    b.m.D.y -= b.N * h;
    b.m.R -= b.X * (g * h - a * e);
    d.m.D.x += d.N * e;
    d.m.D.y += d.N * h;
    d.m.R += d.X * (l * h - p * e);
    hg(b);
    hg(d);
    return.005 >= c && f <= Dd
};
var Ji = Z(0, 0);
function Ki() {
    qi.call(this);
    this.C = Z(0, 0);
    this.H = Z(0, 0);
    this.type = 1;
    this.C.ta();
    this.H.ta();
    this.Na = this.tb = this.ea = this.ja = this.Y = 0;
    this.Ia = this.L = !1
}
Cd(Ki, qi);
function Li(a, c, b, d) {
    a.j = c;
    a.k = b;
    a.C = Rd(a.j.G, d);
    a.H = Rd(a.k.G, d);
    a.Y = a.k.Fh() - a.j.Fh()
}
Ki.prototype.u = function() {
    return new Ii(this)
};
function Mi(a) {
    oi.call(this, a);
    this.k = Z(0, 0);
    this.u = Z(0, 0);
    this.j = new $d(0, 0, 0);
    this.Z = new Zd;
    this.k.P(a.C);
    this.u.P(a.H);
    this.C = a.L
}
Cd(Mi, oi);
Mi.prototype.wf = function(a) {
    var c, b = 0,
    d = this.aa,
    f = this.ba;
    c = d.G.B;
    var h = this.k.x - d.m.S.x,
    e = this.k.y - d.m.S.y,
    b = c.n.x * h + c.q.x * e,
    e = c.n.y * h + c.q.y * e,
    h = b;
    c = f.G.B;
    var g = this.u.x - f.m.S.x,
    l = this.u.y - f.m.S.y,
    b = c.n.x * g + c.q.x * l,
    l = c.n.y * g + c.q.y * l,
    g = b;
    c = d.N;
    var b = f.N,
    p = d.X,
    k = f.X;
    this.Z.n.x = c + b + e * e * p + l * l * k;
    this.Z.q.x = -e * h * p - l * g * k;
    this.Z.j.x = -e * p - l * k;
    this.Z.n.y = this.Z.q.x;
    this.Z.q.y = c + b + h * h * p + g * g * k;
    this.Z.j.y = h * p + g * k;
    this.Z.n.z = this.Z.j.x;
    this.Z.q.z = this.Z.j.y;
    this.Z.j.z = p + k;
    a.Og ? (this.j.x *= a.hc, this.j.y *= a.hc, this.j.z *= a.hc, d.A.x -= c * this.j.x, d.A.y -= c * this.j.y, d.J -= p * (h * this.j.y - e * this.j.x + this.j.z), f.A.x += b * this.j.x, f.A.y += b * this.j.y, f.J += k * (g * this.j.y - l * this.j.x + this.j.z)) : this.j.ta()
};
Mi.prototype.yf = function() {
    var a, c = 0,
    b = this.aa,
    d = this.ba,
    f = b.A,
    h = b.J,
    e = d.A,
    g = d.J,
    l = b.N,
    p = d.N,
    k = b.X,
    m = d.X;
    a = b.G.B;
    var n = this.k.x - b.m.S.x,
    q = this.k.y - b.m.S.y,
    c = a.n.x * n + a.q.x * q,
    q = a.n.y * n + a.q.y * q,
    n = c;
    a = d.G.B;
    var t = this.u.x - d.m.S.x,
    u = this.u.y - d.m.S.y,
    c = a.n.x * t + a.q.x * u,
    u = a.n.y * t + a.q.y * u,
    t = c;
    a = new $d(0, 0, 0);
    be(this.Z, a, -(e.x - g * u - f.x + h * q), -(e.y + g * t - f.y - h * n), -(g - h));
    this.j.vf(a);
    f.x -= l * a.x;
    f.y -= l * a.y;
    h -= k * (n * a.y - q * a.x + a.z);
    e.x += p * a.x;
    e.y += p * a.y;
    g += m * (t * a.y - u * a.x + a.z);
    b.J = h;
    d.J = g
};
Mi.prototype.xf = function() {
    var a, c = 0,
    b = this.aa,
    d = this.ba;
    a = b.G.B;
    var f = this.k.x - b.m.S.x,
    h = this.k.y - b.m.S.y,
    c = a.n.x * f + a.q.x * h,
    h = a.n.y * f + a.q.y * h,
    f = c;
    a = d.G.B;
    var e = this.u.x - d.m.S.x,
    g = this.u.y - d.m.S.y,
    c = a.n.x * e + a.q.x * g,
    g = a.n.y * e + a.q.y * g,
    e = c;
    a = b.N;
    var c = d.N,
    l = b.X,
    p = d.X,
    k = d.m.D.x + e - b.m.D.x - f,
    m = d.m.D.y + g - b.m.D.y - h,
    n = d.m.R - b.m.R - this.C,
    q = Math.sqrt(k * k + m * m),
    t = Math.abs(n);.05 < q && (l *= 1, p *= 1);
    this.Z.n.x = a + c + h * h * l + g * g * p;
    this.Z.q.x = -h * f * l - g * e * p;
    this.Z.j.x = -h * l - g * p;
    this.Z.n.y = this.Z.q.x;
    this.Z.q.y = a + c + f * f * l + e * e * p;
    this.Z.j.y = f * l + e * p;
    this.Z.n.z = this.Z.j.x;
    this.Z.q.z = this.Z.j.y;
    this.Z.j.z = l + p;
    var u = new $d(0, 0, 0);
    be(this.Z, u, -k, -m, -n);
    b.m.D.x -= a * u.x;
    b.m.D.y -= a * u.y;
    b.m.R -= l * (f * u.y - h * u.x + u.z);
    d.m.D.x += c * u.x;
    d.m.D.y += c * u.y;
    d.m.R += p * (e * u.y - g * u.x + u.z);
    hg(b);
    hg(d);
    return.005 >= q && t <= Dd
};
function Si() {
    qi.call(this);
    this.C = Z(0, 0);
    this.H = Z(0, 0);
    this.type = 8;
    this.L = 0
}
Cd(Si, qi);
Si.prototype.u = function() {
    return new Mi(this)
};
var Mh = [new Ke, new Ke],
fi = [new Ke, new Ke],
gi = [new Ke, new Ke],
Rh = Z(0, 0),
Wh = Z(0, 0),
Xh = Z(0, 0),
ci = Z(0, 0),
Yh = Z(0, 0),
Zh = Z(0, 0),
di = Z(0, 0),
ei = Z(0, 0),
fh = 0,
lh = 0,
mh = 0,
jh = 0,
kh = 0,
gh = new Nf,
hh = new $e,
sf = new te,
tf = new te,
rf = new
function() {
    this.Ba = Z(0, 0);
    this.j = Z(0, 0)
},
ih = new af,
gg = new te,
zg = new xg;
new
function() {
    this.position = Z(0, 0);
    Z(0, 0);
    Z(0, 0);
    this.id = new Ie
};
new te;
var nh = new ce,
oh = new ce,
eh = new Of,
Ih = new
function() {
    this.j = Z(0, 0);
    this.ua = [];
    for (var a = this.Ob = 0; 2 > a; a++) this.ua[a] = Z(0, 0)
},
Kh = new
function() {
    this.j = Z(0, 0);
    this.k = [];
    this.ua = [];
    for (var a = 0; 2 > a; a++) this.ua[a] = Z(0, 0)
};
function Ui(a, c, b, d, f, h) {
    var e;
    if (e = (b + .1 >= a && a >= f - .1 || b - .1 <= a && a <= f + .1) && (d + .1 >= c && c >= h - .1 || d - .1 <= c && c <= h + .1)) e = .1 < Math.abs(f - b) ? .1 > Math.abs((h - d) / (f - b) * (a - b) + d - c) : .1 > Math.abs(a - b);
    return e
}
function Vi(a, c) {
    var b = Yi(a),
    d = [],
    f,
    h,
    e,
    g,
    l,
    p,
    k,
    m,
    n;
    l = 0;
    for (p = b.length; l < p; l++) {
        h = b[l];
        f = [];
        f.length = h.length;
        k = n = 0;
        for (m = h.length; k < m; k++) e = h[k],
        g = h[(k + 1) % m],
        n += e.x * g.y - e.y * g.x,
        f[k] = Z(e.x, e.y);
        n = Math.abs(n / 2);
        n >= .001 * c && d.push(f)
    }
    return d
}
function Yi(a) {
    var c = [],
    b = 0,
    d = 0,
    f = 0,
    h = 0,
    e = 0,
    g = e = 0,
    l = 0,
    p = 0,
    k = 0,
    h = 0,
    m,
    n,
    q,
    t,
    u,
    v = h = b = 0,
    r = 0,
    f = [],
    l = [],
    y = !1,
    C = [],
    A = [];
    for (A.push(a); A.length;) {
        c = A[0];
        d = c.length;
        y = !0;
        for (b = 0; b < d; b++) if (p = b, k = b < d - 1 ? b + 1 : b + 1 - d, h = b < d - 2 ? b + 2 : b + 2 - d, a = c[p], m = c[k], n = c[h], h = a.x, f = a.y, l = m.x, e = m.y, g = n.x, n = n.y, h = h * e + l * n + g * f - f * l - e * g - n * h, 0 > h) {
            y = !1;
            l = 1E9;
            for (f = 0; f < d; f++) if (f !== p && f !== k) {
                b = f;
                h = f < d - 1 ? f + 1 : 0;
                q = c[b];
                t = c[h];
                g = a.x;
                n = a.y;
                var E = m.x,
                F = m.y,
                e = q.x;
                q = q.y;
                var B = t.x;
                t = t.y;
                var z = E - g,
                w = F - n,
                G = B - e,
                S = t - q,
                G = (G * (q - n) - S * (e - g)) / (w * G - z * S),
                z = g + G * z,
                w = n + G * w,
                g = Ui(E, F, g, n, z, w),
                e = Ui(z, w, e, q, B, t);
                if (n = g && e ? Z(z, w) : null) e = m.x - n.x,
                g = m.y - n.y,
                e = e * e + g * g,
                e < l && (r = b, v = h, u = n, l = e)
            }
            if (1E9 === l) return [];
            f = [];
            l = [];
            b = r;
            h = v;
            q = c[b];
            t = c[h];
            v = u.y;
            r = t.y;.1 > Math.abs(t.x - u.x) && .1 > Math.abs(r - v) || f.push(u);
            v = u.y;
            r = q.y;.1 > Math.abs(q.x - u.x) && .1 > Math.abs(r - v) || l.push(u);
            r = -1;
            for (v = p;;) {
                if (v !== h) f.push(c[v]);
                else {
                    if (0 > r || r >= d) return [];
                    Ui(t.x, t.y, c[r].x, c[r].y, a.x, a.y) || f.push(c[v]);
                    break
                }
                r = v;
                0 > v - 1 ? v = d - 1 : v--
            }
            f.reverse();
            r = -1;
            for (v = k;;) {
                if (v !== b) l.push(c[v]);
                else {
                    if (0 > r || r >= d) return [];
                    v !== b || Ui(q.x, q.y, c[r].x, c[r].y, m.x, m.y) || l.push(c[v]);
                    break
                }
                r = v;
                v + 1 > d - 1 ? v = 0 : v++
            }
            A.push(f, l);
            A.shift();
            break
        }
        y && C.push(A.shift())
    }
    return C
}
function Zi(a) {
    for (var c = 0; 4E3 > c; c++) ve.push(new ue(0, 0));
    this.c = a;
    this.Cd = new Kg(Z(0, 10), !0);
    this.ov = 10;
    this.Qp = -1;
    a = new xg;
    a.behavior = this;
    a.BeginContact = function(a) {
        this.behavior.c.uu(a.$b.eb().Ef.I, a.Nb.eb().Ef.I)
    };
    this.Cd.j.k = a;
    a = new ug;
    a.behavior = this;
    a.j = function(a, c) {
        if (this.behavior.Pr) return ! 0;
        var f = a.eb().Ef.I.type,
        h = c.eb().Ef.I.type,
        e = f.ca.Physics_DisabledCollisions;
        return e && e.contains(h) ? !1 : (e = h.ca.Physics_DisabledCollisions) && e.contains(f) ? !1 : !0
    };
    this.Cd.j.u = a;
    this.BB = 0;
    this.Bl = 8;
    this.al = 3;
    this.Pr = !0
} (function() {
    function a() {}
    function c() {}
    function b(a, b, c) {
        c ? ((c = a.ca.Physics_DisabledCollisions) && c.remove(b), (c = b.ca.Physics_DisabledCollisions) && c.remove(a)) : (a.ca.Physics_DisabledCollisions || (a.ca.Physics_DisabledCollisions = new ea), a.ca.Physics_DisabledCollisions.add(b), b.ca.Physics_DisabledCollisions || (b.ca.Physics_DisabledCollisions = new ea), b.ca.Physics_DisabledCollisions.add(a))
    }
    var d = Zi.prototype;
    d.gb = function(a) {
        this.behavior = a;
        this.c = a.c
    };
    d.gb.prototype.ya = function() {};
    d.Ta = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.I = b;
        this.c = a.c;
        this.Cd = this.behavior.Cd
    };
    var f = d.Ta.prototype;
    f.ya = function() {
        this.dj = 0 !== this.da[0];
        this.bs = this.da[1];
        this.rq = 0 !== this.da[2];
        this.hh = this.da[3];
        this.Mf = this.da[4];
        this.yh = this.da[5];
        this.qj = this.da[6];
        this.Qi = this.da[7];
        this.Si = 0 !== this.da[8];
        this.enabled = 0 !== this.da[9];
        this.body = null;
        this.I.mb();
        this.$m = this.I.x;
        this.an = this.I.y;
        this.Pf = this.I.O;
        this.Np = this.Rp = 0;
        this.wq = this.Pp = !1;
        this.Kp = null;
        this.Lp = -1;
        this.ge ? (this.ge.length = 0, this.fe.length = 0, this.tg.clear()) : (this.ge = [], this.fe = [], this.tg = new ea);
        var a = this;
        this.je || (this.Jt = function(b) {
            a.kq(b)
        });
        this.c.Eo(this.Jt)
    };
    f.nu = function() {
        this.I.mb();
        this.km();
        this.Kp = this.I.yb;
        this.Lp = this.I.ma
    };
    f.Ai = function() {
        this.um();
        this.fe.length = 0;
        this.tg.clear();
        this.body && (Og(this.Cd, this.body), this.body = null);
        this.c.fB(this.Jt)
    };
    f.Rc = function() {
        var a = {
            e: this.enabled,
            im: this.dj,
            pr: this.rq,
            d: this.hh,
            fr: this.Mf,
            re: this.yh,
            ld: this.qj,
            ad: this.Qi,
            b: this.Si,
            mcj: this.fe
        };
        if (this.enabled) {
            var b = Z(0, 0);
            b.P(this.body.A);
            a.vx = b.x;
            a.vy = b.y;
            a.om = this.body.J
        }
        return a
    };
    f.od = function(a) {
        this.um();
        this.fe.length = 0;
        this.tg.clear();
        this.body && (Og(this.Cd, this.body), this.body = null);
        this.enabled = a.e;
        this.dj = a.im;
        this.rq = a.pr;
        this.hh = a.d;
        this.Mf = a.fr;
        this.yh = a.re;
        this.qj = a.ld;
        this.Qi = a.ad;
        this.Si = a.b;
        this.$m = this.I.x;
        this.an = this.I.y;
        this.Pf = this.I.O;
        this.Rp = this.I.width;
        this.Np = this.I.height;
        this.enabled && (this.km(), ag(this.body, Z(a.vx, a.vy)), this.body.Ol(a.om), 0 === a.vx && 0 === a.vy && 0 === a.om || bg(this.body, !0), this.fe = a.mcj)
    };
    f.Bf = function() {
        this.enabled && this.xq();
        this.behavior.Qp = this.c.$f - 1
    };
    f.kq = function(a) {
        var b, c, d, f = a.uid;
        d = b = 0;
        for (c = this.fe.length; b < c; b++) this.fe[d] = this.fe[b],
        d < this.ge.length && (this.ge[d] = this.ge[b]),
        this.fe[b].ob[1] == f ? Pg(this.Cd, this.ge[b]) : d++;
        this.fe.length = d;
        d < this.ge.length && (this.ge.length = d);
        this.tg.remove(a)
    };
    f.um = function() {
        var a, b;
        a = 0;
        for (b = this.ge.length; a < b; a++) Pg(this.Cd, this.ge[a]);
        this.ge.length = 0
    };
    f.xq = function() {
        var a, b, c;
        a = 0;
        for (b = this.fe.length; a < b; a++) switch (c = this.fe[a], c.type) {
        case 0:
            this.os(c.ob[0], c.ob[1], c.ob[2], c.ob[3], c.ob[4]);
            break;
        case 1:
            this.ps(c.ob[0], c.ob[1]);
            break;
        case 2:
            this.by(c.ob[0], c.ob[1], c.ob[2], c.ob[3])
        }
    };
    f.ls = function() {
        this.body && (this.um(), Og(this.Cd, this.body), this.body = null, this.I.ca.sd = null)
    };
    var h = [];
    f.km = function() {
        if (this.enabled) {
            var a = this.I,
            b = !1,
            c = null,
            d = null,
            f, m, n, q, t, u, v, r, y, C, A, E, F;
            if (this.body) {
                b = !0;
                c = Z(0, 0);
                c.P(this.body.A);
                d = this.body.J;
                r = this.tg.tf();
                f = 0;
                for (m = r.length; f < m; f++) y = r[f].ca.sd.Ef,
                y.um();
                this.ls()
            }
            y = new Eg;
            y.hh = this.hh;
            y.Mf = this.Mf;
            y.yh = this.yh;
            f = new jg;
            f.type = this.dj ? 0 : 2;
            a.mb();
            f.position.x = .02 * a.Cb.vh();
            f.position.y = .02 * a.Cb.wh();
            f.O = a.O;
            f.j = this.rq;
            f.qj = this.qj;
            f.Qi = this.Qi;
            f.Si = this.Si;
            r = this.I.Va && !this.I.Va.ii();
            this.body = Mg(this.Cd, f);
            this.body.Ef = this;
            f = this.bs;
            r || this.I.ag || 0 !== this.bs || (f = 1);
            m = Math.max(Math.abs(a.width), 1);
            n = Math.max(Math.abs(a.height), 1);
            C = 0 > a.width;
            A = 0 > a.height;
            if (0 === f) if (a.ag) for (E = a.Cb.vh() - a.x, v = a.Cb.wh() - a.y, a.NC(h), r = [], f = 0, m = h.length; f < m; ++f) {
                C = h[f];
                A = C.bB;
                if (C.Sf) {
                    if (!C.Sf.hm) {
                        t = C.Sf.ec;
                        q = C.Sf.xe;
                        for (n = 0; n < q; ++n) r.push(Z(t[2 * n], t[2 * n + 1]));
                        n = C.id & 3758096384; ( - 2147483648 === n || 1073741824 === n || 536870912 === n || n & -2147483648 && n & 1073741824 && n & 536870912) && r.reverse();
                        C.Sf.hm = Vi(r, (A.right - A.left) * (A.bottom - A.top));
                        n = 0;
                        for (q = r.length; n < q; ++n) we(r[n]);
                        r.length = 0
                    }
                    n = 0;
                    for (q = C.Sf.hm.length; n < q; ++n) {
                        F = C.Sf.hm[n];
                        t = 0;
                        for (u = F.length; t < u; ++t) r.push(Z(.02 * (A.left + F[t].x - E), .02 * (A.top + F[t].y - v)));
                        y.shape = new Ee;
                        Ge(y.shape, r);
                        Uf(this.body, y);
                        t = 0;
                        for (u = r.length; t < u; ++t) we(r[t]);
                        r.length = 0
                    }
                } else r.push(Z(.02 * (A.left - E), .02 * (A.top - v))),
                r.push(Z(.02 * (A.right - E), .02 * (A.top - v))),
                r.push(Z(.02 * (A.right - E), .02 * (A.bottom - v))),
                r.push(Z(.02 * (A.left - E), .02 * (A.bottom - v))),
                y.shape = new Ee,
                Ge(y.shape, r),
                Uf(this.body, y);
                n = 0;
                for (q = r.length; n < q; ++n) we(r[n]);
                r.length = 0
            } else {
                f = a.O;
                a.O = 0;
                a.La();
                a.mb();
                E = a.Cb.vh() - a.x;
                v = a.Cb.wh() - a.y;
                a.O = f;
                a.La();
                a.Va.Ph(C ? -m: m, A ? -n: n, 0);
                t = a.Va.ec;
                q = a.Va.xe;
                r = [];
                r.length = q;
                for (f = 0; f < q; f++) r[f] = Z(t[2 * f] - E, t[2 * f + 1] - v);
                C !== A && r.reverse();
                E = Vi(r, m * n);
                for (f = 0; f < q; f++) we(r[f]);
                if (E.length) for (f = 0, m = E.length; f < m; f++) {
                    r = E[f];
                    n = 0;
                    for (q = r.length; n < q; n++) v = r[n],
                    v.x *= .02,
                    v.y *= .02;
                    y.shape = new Ee;
                    Ge(y.shape, r);
                    Uf(this.body, y);
                    n = 0;
                    for (q = r.length; n < q; n++) we(r[n])
                } else y.shape = new Ee,
                He(y.shape, .01 * m, .01 * n),
                Uf(this.body, y)
            } else 1 === f ? (y.shape = new Ee, He(y.shape, .01 * m, .01 * n)) : y.shape = new Be(.01 * Math.min(m, n)),
            Uf(this.body, y);
            a.ca.sd = this.body;
            this.Rp = a.width;
            this.Np = a.height;
            if (b) for (ag(this.body, c), this.body.Ol(d), we(c), this.xq(), r = this.tg.tf(), f = 0, m = r.length; f < m; f++) y = r[f].ca.sd.Ef,
            y.xq();
            h.length = 0
        }
    };
    f.Gc = function() {
        if (this.enabled) {
            var a = this.I,
            b;
            0 === this.behavior.BB ? b = this.c.Jg / 60 : (b = this.c.$h(this.I), b > 1 / 30 && (b = 1 / 30));
            if (this.c.$f > this.behavior.Qp && 0 < this.c.Jg) {
                this.Cd.Vg(b, this.behavior.Bl, this.behavior.al);
                for (b = this.Cd.Dh.Ma(ng); b; b = b.Da()) b.body.k.ta(),
                b.body.H = 0;
                this.behavior.Qp = this.c.$f
            }
            if (this.wq || a.width !== this.Rp || a.height !== this.Np || a.yb !== this.Kp || a.ma !== this.Lp || a.ag && a.iu) this.km(),
            this.wq = !1,
            this.Kp = a.yb,
            this.Lp = a.ma,
            a.ag && a.iu && (a.iu = !1);
            b = a.O !== this.Pf;
            if (a.x !== this.$m || a.y !== this.an) {
                a.mb();
                var c = a.Cb.vh(),
                d = a.Cb.wh(),
                f = c - this.$m,
                h = d - this.an,
                n = this.body,
                c = Z(.02 * c, .02 * d);
                Yf(n, c, n.Fh());
                ag(this.body, Z(f, h));
                this.Pp = !0;
                bg(this.body, !0)
            } else this.Pp && (this.Pp = !1, ag(this.body, Z(0, 0)), f = this.body, h = Z(.02 * a.Cb.vh(), .02 * a.Cb.wh()), Yf(f, h, f.Fh()));
            b && (this.body.wo(a.O), bg(this.body, !0));
            f = this.body.G.position;
            b = f.x / .02;
            f = f.y / .02;
            h = this.body.Fh();
            if (b !== a.x || f !== a.y || h !== a.O) if (a.x = b, a.y = f, a.O = h, a.La(), a.mb(), b = a.Cb.vh() - a.x, f = a.Cb.wh() - a.y, 0 !== b || 0 !== f) a.x -= b,
            a.y -= f,
            a.La();
            this.$m = a.x;
            this.an = a.y;
            this.Pf = a.O
        }
    };
    f.Km = function(a) {
        return - 1 !== a && this.I.Me ? 0 === a && this.body ? (this.body.G.position.x + this.body.m.S.x) / .02 : this.I.Me(a, !0) : this.I.x
    };
    f.Lm = function(a) {
        return - 1 !== a && this.I.Me ? 0 === a && this.body ? (this.body.G.position.y + this.body.m.S.y) / .02 : this.I.Me(a, !1) : this.I.y
    };
    a.prototype.Bv = function(a, b, c) {
        if (!this.enabled) return ! 1;
        var d = this.body.A;
        0 === a ? d = d.x / .02 : 1 === a ? d = d.y / .02 : (a = d.x / .02, d = d.y / .02, d = hb(0, 0, a, d));
        return Vc(d, b, c)
    };
    a.prototype.zv = function(a, b) {
        return this.enabled ? Vc(Sa(this.body.J), a, b) : !1
    };
    d.K = new a;
    c.prototype.Ch = function(a, b, c) {
        if (this.enabled) {
            var d = this.Km(c);
            c = this.Lm(c);
            this.body.Ch(Z(a, b), Z(.02 * d, .02 * c))
        }
    };
    c.prototype.Li = function(a) {
        this.enabled && this.body.Li(L(a))
    };
    c.prototype.sv = function(a, b) {
        this.enabled && (a = L(a), b = L(b), bb(this.I.O, b) ? this.body.Li( - a) : this.body.Li(a))
    };
    c.prototype.Ol = function(a) {
        this.enabled && (this.body.Ol(L(a)), bg(this.body, !0))
    };
    c.prototype.Ev = function(a, b, c, d, f) {
        b && this.enabled && (b = b.Jm(this.I)) && b != this.I && b.ca.sd && (this.fe.push({
            type: 0,
            ob: [a, b.uid, c, d, f]
        }), this.os(a, b.uid, c, d, f))
    };
    f.os = function(a, b, c, d, f) {
        if (this.enabled) {
            var h = this.c.ci(b);
            if (h && h != this.I && h.ca.sd) {
                h.ca.sd.Ef.tg.add(this.I);
                var n = this.Km(a),
                q = this.Lm(a),
                t,
                u;
                h.Me ? (t = h.Me(c, !0), u = h.Me(c, !1)) : (t = h.x, u = h.y);
                c = n - t;
                a = q - u;
                b = new si;
                h = h.ca.sd;
                n = Z(.02 * n, .02 * q);
                t = Z(.02 * t, .02 * u);
                b.j = this.body;
                b.k = h;
                b.L.P(Rd(b.j.G, n));
                b.Y.P(Rd(b.k.G, t));
                h = t.x - n.x;
                n = t.y - n.y;
                b.length = Math.sqrt(h * h + n * n);
                b.H = 0;
                b.C = 0;
                b.length = .02 * Math.sqrt(c * c + a * a);
                b.C = d;
                b.H = f;
                this.ge.push(Qg(this.Cd, b))
            }
        }
    };
    c.prototype.Gv = function(a, b) {
        if (b && this.enabled) {
            var c = b.Jm(this.I);
            c && c != this.I && c.ca.sd && (this.fe.push({
                type: 1,
                ob: [a, c.uid]
            }), this.ps(a, c.uid))
        }
    };
    f.ps = function(a, b) {
        if (this.enabled) {
            var c = this.c.ci(b);
            if (c && c != this.I && c.ca.sd) {
                c.ca.sd.Ef.tg.add(this.I);
                var d = this.Km(a),
                f = this.Lm(a),
                h = new Ki;
                Li(h, this.body, c.ca.sd, Z(.02 * d, .02 * f));
                this.ge.push(Qg(this.Cd, h))
            }
        }
    };
    f.by = function(a, b, c, d) {
        if (this.enabled && (b = this.c.ci(b)) && b != this.I && b.ca.sd) {
            b.ca.sd.Ef.tg.add(this.I);
            var f = this.Km(a);
            a = this.Lm(a);
            var h = new Ki;
            Li(h, this.body, b.ca.sd, Z(.02 * f, .02 * a));
            h.L = !0;
            h.ja = L(c);
            h.ea = L(d);
            this.ge.push(Qg(this.Cd, h))
        }
    };
    c.prototype.ax = function(a) {
        if (a !== this.behavior.ov) {
            this.Cd.Fr(Z(0, a));
            this.behavior.ov = a;
            var b, c = this.behavior.pn.tf();
            a = 0;
            for (b = c.length; a < b; a++) c[a].ca.sd && bg(c[a].ca.sd, !0)
        }
    };
    c.prototype.Er = function(a) {
        this.enabled && this.Mf !== a && (this.Mf = a, this.wq = !0)
    };
    c.prototype.Ow = function(a) {
        if (this.enabled && this.dj !== (0 !== a)) {
            this.dj = 0 !== a;
            a = this.body;
            var b = this.dj ? 0 : 2;
            if (a.Pa != b) {
                a.Pa = b;
                Xf(a);
                0 == a.Pa && (a.A.ta(), a.J = 0);
                bg(a, !0);
                a.k.ta();
                a.H = 0;
                for (b = a.jd.Ma(eg); b; b = b.Da()) b.Wb.Yi = !0;
                for (b = 0; b < a.C.length; b++) dg(a.C[b], a)
            }
            bg(this.body, !0)
        }
    };
    c.prototype.Jv = function(a, c) {
        if (a && this.enabled) {
            var d, f;
            if (a.qa) for (d = 0, f = a.uh.length; d < f; d++) b(this.I.type, a.uh[d], 0 !== c);
            else b(this.I.type, a, 0 !== c);
            this.behavior.Pr = !1
        }
    };
    c.prototype.yo = function(a) {
        this.enabled && 0 === a ? (this.ls(), this.enabled = !1) : this.enabled || 1 !== a || (this.enabled = !0, this.km())
    };
    d.V = new c;
    d.Aa = new
    function() {}
})();
function $i(a) {
    this.c = a
} (function() {
    var a = $i.prototype;
    a.gb = function(a) {
        this.behavior = a;
        this.c = a.c
    };
    a.gb.prototype.ya = function() {};
    a.Ta = function(a, c) {
        this.type = a;
        this.behavior = a.behavior;
        this.I = c;
        this.c = a.c
    };
    var c = a.Ta.prototype;
    c.ya = function() {
        this.speed = L(this.da[0]);
        this.eg = L(this.da[1])
    };
    c.Rc = function() {
        return {
            speed: this.speed,
            acc: this.eg
        }
    };
    c.od = function(a) {
        this.speed = a.speed;
        this.eg = a.acc
    };
    c.Gc = function() {
        var a = this.c.$h(this.I);
        0 !== a && (0 !== this.eg && (this.speed += this.eg * a), 0 !== this.speed && (this.I.O = Ua(this.I.O + this.speed * a), this.I.La()))
    };
    a.K = new
    function() {};
    a.V = new
    function() {};
    a.Aa = new
    function() {}
})();
function aj(a) {
    this.c = a
} (function() {
    function a() {}
    function c() {}
    var b = aj.prototype;
    b.gb = function(a) {
        this.behavior = a;
        this.c = a.c
    };
    b.gb.prototype.ya = function() {};
    b.Ta = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.I = b;
        this.c = a.c;
        this.Ac = 0
    };
    var d = b.Ta.prototype,
    f = 2 * Math.PI,
    h = Math.PI / 2,
    e = 3 * Math.PI / 2;
    d.ya = function() {
        this.gc = 1 === this.da[0];
        this.xj = this.da[1];
        this.gr = this.da[2];
        this.Ag = this.da[3];
        this.Ag += Math.random() * this.da[4];
        0 === this.Ag ? this.Ac = 0 : (this.Ac = this.da[5] / this.Ag * f, this.Ac += Math.random() * this.da[6] / this.Ag * f);
        this.Ld = this.da[7];
        this.Ld += Math.random() * this.da[8];
        this.Dg = this.gi = this.$a = 0;
        5 === this.xj && (this.Ld = L(this.Ld));
        this.init()
    };
    d.Rc = function() {
        return {
            i: this.Ac,
            a: this.gc,
            mv: this.xj,
            w: this.gr,
            p: this.Ag,
            mag: this.Ld,
            iv: this.$a,
            iv2: this.gi,
            r: this.Dg,
            lkv: this.be,
            lkv2: this.Ik
        }
    };
    d.od = function(a) {
        this.Ac = a.i;
        this.gc = a.a;
        this.xj = a.mv;
        this.gr = a.w;
        this.Ag = a.p;
        this.Ld = a.mag;
        this.$a = a.iv;
        this.gi = a.iv2 || 0;
        this.Dg = a.r;
        this.be = a.lkv;
        this.Ik = a.lkv2 || 0
    };
    d.init = function() {
        switch (this.xj) {
        case 0:
            this.$a = this.I.x;
            break;
        case 1:
            this.$a = this.I.y;
            break;
        case 2:
            this.$a = this.I.width;
            this.Dg = this.I.height / this.I.width;
            break;
        case 3:
            this.$a = this.I.width;
            break;
        case 4:
            this.$a = this.I.height;
            break;
        case 5:
            this.$a = this.I.O;
            break;
        case 6:
            this.$a = this.I.opacity;
            break;
        case 7:
            this.$a = 0;
            break;
        case 8:
            this.$a = this.I.x,
            this.gi = this.I.y
        }
        this.be = this.$a;
        this.Ik = this.gi
    };
    d.Pg = function(a) {
        a = a % f;
        switch (this.gr) {
        case 0:
            return Math.sin(a);
        case 1:
            return a <= h ? a / h: a <= e ? 1 - 2 * (a - h) / Math.PI: (a - e) / h - 1;
        case 2:
            return 2 * a / f - 1;
        case 3:
            return - 2 * a / f + 1;
        case 4:
            return a < Math.PI ? -1 : 1
        }
        return 0
    };
    d.Gc = function() {
        var a = this.c.$h(this.I);
        this.gc && 0 !== a && (0 === this.Ag ? this.Ac = 0 : (this.Ac += a / this.Ag * f, this.Ac = this.Ac % f), this.LB())
    };
    d.LB = function() {
        switch (this.xj) {
        case 0:
            this.I.x !== this.be && (this.$a += this.I.x - this.be);
            this.I.x = this.$a + this.Pg(this.Ac) * this.Ld;
            this.be = this.I.x;
            break;
        case 1:
            this.I.y !== this.be && (this.$a += this.I.y - this.be);
            this.I.y = this.$a + this.Pg(this.Ac) * this.Ld;
            this.be = this.I.y;
            break;
        case 2:
            this.I.width = this.$a + this.Pg(this.Ac) * this.Ld;
            this.I.height = this.I.width * this.Dg;
            break;
        case 3:
            this.I.width = this.$a + this.Pg(this.Ac) * this.Ld;
            break;
        case 4:
            this.I.height = this.$a + this.Pg(this.Ac) * this.Ld;
            break;
        case 5:
            this.I.O !== this.be && (this.$a = Ua(this.$a + (this.I.O - this.be)));
            this.I.O = Ua(this.$a + this.Pg(this.Ac) * this.Ld);
            this.be = this.I.O;
            break;
        case 6:
            this.I.opacity = this.$a + this.Pg(this.Ac) * this.Ld / 100;
            0 > this.I.opacity ? this.I.opacity = 0 : 1 < this.I.opacity && (this.I.opacity = 1);
            break;
        case 8:
            this.I.x !== this.be && (this.$a += this.I.x - this.be),
            this.I.y !== this.Ik && (this.gi += this.I.y - this.Ik),
            this.I.x = this.$a + Math.cos(this.I.O) * this.Pg(this.Ac) * this.Ld,
            this.I.y = this.gi + Math.sin(this.I.O) * this.Pg(this.Ac) * this.Ld,
            this.be = this.I.x,
            this.Ik = this.I.y
        }
        this.I.La()
    };
    d.Xt = function(a, b) {
        switch (this.xj) {
        case 2:
            this.$a *= b.width / a.width;
            this.Dg = b.height / b.width;
            break;
        case 3:
            this.$a *= b.width / a.width;
            break;
        case 4:
            this.$a *= b.height / a.height
        }
    };
    a.prototype.Ih = function() {
        return this.gc
    };
    b.K = new a;
    c.prototype.Dr = function(a) {
        this.gc = 1 === a
    };
    b.V = new c;
    b.Aa = new
    function() {}
})();
function ed() {
    return [td, ud, vd, qd, yd, fd, xd, wd, zd, rd, sd, aj, Zi, Bd, Ad, $i, rd.prototype.K.Dv, R.prototype.K.nx, rd.prototype.V.cx, rd.prototype.V.mr, zd.prototype.Aa.Zv, R.prototype.V.Zw, rd.prototype.Aa.uv, fd.prototype.V.Pw, qd.prototype.V.CallFunction, vd.prototype.V.Px, rd.prototype.K.tv, fd.prototype.V.pv, rd.prototype.Aa.Hv, R.prototype.K.yv, rd.prototype.Aa.Iv, wd.prototype.K.jr, wd.prototype.V.Xw, R.prototype.K.Uv, yd.prototype.K.Br, R.prototype.V.Nv, qd.prototype.K.Kl, fd.prototype.K.jr, R.prototype.K.Av, R.prototype.V.qv, zd.prototype.V.jx, rd.prototype.Aa.Fl, vd.prototype.V.Qx, fd.prototype.V.Kw, R.prototype.K.kr, fd.prototype.V.Ao, wd.prototype.V.Ao, fd.prototype.K.Dw, yd.prototype.K.vo, yd.prototype.Aa.mx, yd.prototype.Aa.wx, yd.prototype.K.uo, R.prototype.Aa.abs, fd.prototype.V.Tc, fd.prototype.V.Uw, R.prototype.V.Iw, R.prototype.K.Lv, R.prototype.V.Hw, R.prototype.Aa.qA, R.prototype.Aa.qB, fd.prototype.Aa.Do, aj.prototype.V.Dr, td.prototype.V.Pv, wd.prototype.K.Vj, wd.prototype.V.Mw, R.prototype.K.Mv, rd.prototype.Aa.lr, R.prototype.Aa.tA, yd.prototype.Aa.Do, R.prototype.V.Jw, R.prototype.V.Ov, fd.prototype.V.wo, Zi.prototype.V.Er, R.prototype.V.Fv, fd.prototype.V.$v, R.prototype.V.Rw, sd.prototype.V.Ew, fd.prototype.V.nr, fd.prototype.Aa.Hr, fd.prototype.V.Vw, R.prototype.K.sr, Zi.prototype.V.ax, fd.prototype.V.zo, fd.prototype.Aa.Qv, fd.prototype.Aa.Rv, Zi.prototype.V.Jv, Zi.prototype.V.Gv, Zi.prototype.V.Ev, Zi.prototype.V.Ow, R.prototype.V.Gw, fd.prototype.V.xx, xd.prototype.V.Ao, R.prototype.V.qx, vd.prototype.V.Rx, fd.prototype.K.fw, yd.prototype.K.Wv, Zi.prototype.V.Li, Zi.prototype.K.Bv, fd.prototype.V.Sw, ud.prototype.K.Vv, sd.prototype.V.hx, R.prototype.V.Yw, R.prototype.K.Kv, fd.prototype.V.$w, R.prototype.Aa.round, R.prototype.Aa.Hf, xd.prototype.V.Tc, xd.prototype.V.zo, xd.prototype.V.nr, fd.prototype.V.Nw, Bd.prototype.V.Fw, Ad.prototype.V.yo, vd.prototype.K.Tt, sd.prototype.V.ix, vd.prototype.K.Wt, sd.prototype.V.Tw, sd.prototype.V.Qw, sd.prototype.V.Ww, Zi.prototype.K.zv, Zi.prototype.V.sv]
};