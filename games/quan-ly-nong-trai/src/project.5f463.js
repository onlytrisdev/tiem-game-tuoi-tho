window.__require = function e(t, i, o) {
	function n(r, s) {
		if (!i[r]) {
			if (!t[r]) {
				var d = r.split("/");
				if (d = d[d.length - 1], !t[d]) {
					var c = "function" == typeof __require && __require;
					if (!s && c) return c(d, !0);
					if (a) return a(d, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
			}
			var l = i[r] = {
				exports: {}
			};
			t[r][0].call(l.exports, function(e) {
				return n(t[r][1][e] || e)
			}, l, l.exports, e, t, i, o)
		}
		return i[r].exports
	}
	for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) n(o[r]);
	return n
}({
	1: [function(e, t, i) {
		"use strict";
		i.byteLength = function(e) {
			var t = c(e),
				i = t[0],
				o = t[1];
			return 3 * (i + o) / 4 - o
		}, i.toByteArray = function(e) {
			for (var t, i = c(e), o = i[0], r = i[1], s = new a(function(e, t, i) {
					return 3 * (t + i) / 4 - i
				}(0, o, r)), d = 0, l = r > 0 ? o - 4 : o, p = 0; p < l; p += 4) t = n[e.charCodeAt(p)] << 18 | n[e.charCodeAt(p + 1)] << 12 | n[e.charCodeAt(p + 2)] << 6 | n[e.charCodeAt(p + 3)], s[d++] = t >> 16 & 255, s[d++] = t >> 8 & 255, s[d++] = 255 & t;
			2 === r && (t = n[e.charCodeAt(p)] << 2 | n[e.charCodeAt(p + 1)] >> 4, s[d++] = 255 & t);
			1 === r && (t = n[e.charCodeAt(p)] << 10 | n[e.charCodeAt(p + 1)] << 4 | n[e.charCodeAt(p + 2)] >> 2, s[d++] = t >> 8 & 255, s[d++] = 255 & t);
			return s
		}, i.fromByteArray = function(e) {
			for (var t, i = e.length, n = i % 3, a = [], r = 0, s = i - n; r < s; r += 16383) a.push(p(e, r, r + 16383 > s ? s : r + 16383));
			1 === n ? (t = e[i - 1], a.push(o[t >> 2] + o[t << 4 & 63] + "==")) : 2 === n && (t = (e[i - 2] << 8) + e[i - 1], a.push(o[t >> 10] + o[t >> 4 & 63] + o[t << 2 & 63] + "="));
			return a.join("")
		};
		for (var o = [], n = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, d = r.length; s < d; ++s) o[s] = r[s], n[r.charCodeAt(s)] = s;

		function c(e) {
			var t = e.length;
			if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var i = e.indexOf("=");
			return -1 === i && (i = t), [i, i === t ? 0 : 4 - i % 4]
		}

		function l(e) {
			return o[e >> 18 & 63] + o[e >> 12 & 63] + o[e >> 6 & 63] + o[63 & e]
		}

		function p(e, t, i) {
			for (var o, n = [], a = t; a < i; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), n.push(l(o));
			return n.join("")
		}
		n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
	}, {}],
	2: [function(e, t, i) {
		(function(t) {
			"use strict";
			var o = e("base64-js"),
				n = e("ieee754"),
				a = e("isarray");

			function r() {
				return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function s(e, t) {
				if (r() < t) throw new RangeError("Invalid typed array length");
				return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = d.prototype : (null === e && (e = new d(t)), e.length = t), e
			}

			function d(e, t, i) {
				if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(e, t, i);
				if ("number" == typeof e) {
					if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
					return p(this, e)
				}
				return c(this, e, t, i)
			}

			function c(e, t, i, o) {
				if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, i, o) {
					if (t.byteLength, i < 0 || t.byteLength < i) throw new RangeError("'offset' is out of bounds");
					if (t.byteLength < i + (o || 0)) throw new RangeError("'length' is out of bounds");
					t = void 0 === i && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, i) : new Uint8Array(t, i, o);
					d.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = d.prototype : e = u(e, t);
					return e
				}(e, t, i, o) : "string" == typeof t ? function(e, t, i) {
					"string" == typeof i && "" !== i || (i = "utf8");
					if (!d.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
					var o = 0 | w(t, i),
						n = (e = s(e, o)).write(t, i);
					n !== o && (e = e.slice(0, n));
					return e
				}(e, t, i) : function(e, t) {
					if (d.isBuffer(t)) {
						var i = 0 | h(t.length);
						return 0 === (e = s(e, i)).length ? e : (t.copy(e, 0, 0, i), e)
					}
					if (t) {
						if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
							return e != e
						}(t.length) ? s(e, 0) : u(e, t);
						if ("Buffer" === t.type && a(t.data)) return u(e, t.data)
					}
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(e, t)
			}

			function l(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
				if (e < 0) throw new RangeError('"size" argument must not be negative')
			}

			function p(e, t) {
				if (l(t), e = s(e, t < 0 ? 0 : 0 | h(t)), !d.TYPED_ARRAY_SUPPORT)
					for (var i = 0; i < t; ++i) e[i] = 0;
				return e
			}

			function u(e, t) {
				var i = t.length < 0 ? 0 : 0 | h(t.length);
				e = s(e, i);
				for (var o = 0; o < i; o += 1) e[o] = 255 & t[o];
				return e
			}

			function h(e) {
				if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
				return 0 | e
			}

			function w(e, t) {
				if (d.isBuffer(e)) return e.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
				"string" != typeof e && (e = "" + e);
				var i = e.length;
				if (0 === i) return 0;
				for (var o = !1;;) switch (t) {
					case "ascii":
					case "latin1":
					case "binary":
						return i;
					case "utf8":
					case "utf-8":
					case void 0:
						return U(e).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * i;
					case "hex":
						return i >>> 1;
					case "base64":
						return W(e).length;
					default:
						if (o) return U(e).length;
						t = ("" + t).toLowerCase(), o = !0
				}
			}

			function m(e, t, i) {
				var o = e[t];
				e[t] = e[i], e[i] = o
			}

			function g(e, t, i, o, n) {
				if (0 === e.length) return -1;
				if ("string" == typeof i ? (o = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = n ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
					if (n) return -1;
					i = e.length - 1
				} else if (i < 0) {
					if (!n) return -1;
					i = 0
				}
				if ("string" == typeof t && (t = d.from(t, o)), d.isBuffer(t)) return 0 === t.length ? -1 : f(e, t, i, o, n);
				if ("number" == typeof t) return t &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : f(e, [t], i, o, n);
				throw new TypeError("val must be string, number or Buffer")
			}

			function f(e, t, i, o, n) {
				var a, r = 1,
					s = e.length,
					d = t.length;
				if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
					if (e.length < 2 || t.length < 2) return -1;
					r = 2, s /= 2, d /= 2, i /= 2
				}

				function c(e, t) {
					return 1 === r ? e[t] : e.readUInt16BE(t * r)
				}
				if (n) {
					var l = -1;
					for (a = i; a < s; a++)
						if (c(e, a) === c(t, -1 === l ? 0 : a - l)) {
							if (-1 === l && (l = a), a - l + 1 === d) return l * r
						} else - 1 !== l && (a -= a - l), l = -1
				} else
					for (i + d > s && (i = s - d), a = i; a >= 0; a--) {
						for (var p = !0, u = 0; u < d; u++)
							if (c(e, a + u) !== c(t, u)) {
								p = !1;
								break
							} if (p) return a
					}
				return -1
			}

			function y(e, t, i, o) {
				i = Number(i) || 0;
				var n = e.length - i;
				o ? (o = Number(o)) > n && (o = n) : o = n;
				var a = t.length;
				if (a % 2 != 0) throw new TypeError("Invalid hex string");
				o > a / 2 && (o = a / 2);
				for (var r = 0; r < o; ++r) {
					var s = parseInt(t.substr(2 * r, 2), 16);
					if (isNaN(s)) return r;
					e[i + r] = s
				}
				return r
			}

			function v(e, t, i, o) {
				return H(U(t, e.length - i), e, i, o)
			}

			function C(e, t, i, o) {
				return H(function(e) {
					for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
					return t
				}(t), e, i, o)
			}

			function _(e, t, i, o) {
				return C(e, t, i, o)
			}

			function S(e, t, i, o) {
				return H(W(t), e, i, o)
			}

			function b(e, t, i, o) {
				return H(function(e, t) {
					for (var i, o, n, a = [], r = 0; r < e.length && !((t -= 2) < 0); ++r) i = e.charCodeAt(r), o = i >> 8, n = i % 256, a.push(n), a.push(o);
					return a
				}(t, e.length - i), e, i, o)
			}

			function F(e, t, i) {
				return 0 === t && i === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, i))
			}

			function N(e, t, i) {
				i = Math.min(e.length, i);
				for (var o = [], n = t; n < i;) {
					var a, r, s, d, c = e[n],
						l = null,
						p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
					if (n + p <= i) switch (p) {
						case 1:
							c < 128 && (l = c);
							break;
						case 2:
							128 == (192 & (a = e[n + 1])) && (d = (31 & c) << 6 | 63 & a) > 127 && (l = d);
							break;
						case 3:
							a = e[n + 1], r = e[n + 2], 128 == (192 & a) && 128 == (192 & r) && (d = (15 & c) << 12 | (63 & a) << 6 | 63 & r) > 2047 && (d < 55296 || d > 57343) && (l = d);
							break;
						case 4:
							a = e[n + 1], r = e[n + 2], s = e[n + 3], 128 == (192 & a) && 128 == (192 & r) && 128 == (192 & s) && (d = (15 & c) << 18 | (63 & a) << 12 | (63 & r) << 6 | 63 & s) > 65535 && d < 1114112 && (l = d)
					}
					null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, o.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), o.push(l), n += p
				}
				return function(e) {
					var t = e.length;
					if (t <= B) return String.fromCharCode.apply(String, e);
					var i = "",
						o = 0;
					for (; o < t;) i += String.fromCharCode.apply(String, e.slice(o, o += B));
					return i
				}(o)
			}
			i.Buffer = d, i.SlowBuffer = function(e) {
				+e != e && (e = 0);
				return d.alloc(+e)
			}, i.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
				} catch (e) {
					return !1
				}
			}(), i.kMaxLength = r(), d.poolSize = 8192, d._augment = function(e) {
				return e.__proto__ = d.prototype, e
			}, d.from = function(e, t, i) {
				return c(null, e, t, i)
			}, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
				value: null,
				configurable: !0
			})), d.alloc = function(e, t, i) {
				return function(e, t, i, o) {
					return l(t), t <= 0 ? s(e, t) : void 0 !== i ? "string" == typeof o ? s(e, t).fill(i, o) : s(e, t).fill(i) : s(e, t)
				}(null, e, t, i)
			}, d.allocUnsafe = function(e) {
				return p(null, e)
			}, d.allocUnsafeSlow = function(e) {
				return p(null, e)
			}, d.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, d.compare = function(e, t) {
				if (!d.isBuffer(e) || !d.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
				if (e === t) return 0;
				for (var i = e.length, o = t.length, n = 0, a = Math.min(i, o); n < a; ++n)
					if (e[n] !== t[n]) {
						i = e[n], o = t[n];
						break
					} return i < o ? -1 : o < i ? 1 : 0
			}, d.isEncoding = function(e) {
				switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, d.concat = function(e, t) {
				if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return d.alloc(0);
				var i;
				if (void 0 === t)
					for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
				var o = d.allocUnsafe(t),
					n = 0;
				for (i = 0; i < e.length; ++i) {
					var r = e[i];
					if (!d.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
					r.copy(o, n), n += r.length
				}
				return o
			}, d.byteLength = w, d.prototype._isBuffer = !0, d.prototype.swap16 = function() {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) m(this, t, t + 1);
				return this
			}, d.prototype.swap32 = function() {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
				return this
			}, d.prototype.swap64 = function() {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
				return this
			}, d.prototype.toString = function() {
				var e = 0 | this.length;
				return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : function(e, t, i) {
					var o = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
					if ((i >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
						case "hex":
							return T(this, t, i);
						case "utf8":
						case "utf-8":
							return N(this, t, i);
						case "ascii":
							return L(this, t, i);
						case "latin1":
						case "binary":
							return D(this, t, i);
						case "base64":
							return F(this, t, i);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return x(this, t, i);
						default:
							if (o) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), o = !0
					}
				}.apply(this, arguments)
			}, d.prototype.equals = function(e) {
				if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === d.compare(this, e)
			}, d.prototype.inspect = function() {
				var e = "",
					t = i.INSPECT_MAX_BYTES;
				return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
			}, d.prototype.compare = function(e, t, i, o, n) {
				if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === t && (t = 0), void 0 === i && (i = e ? e.length : 0), void 0 === o && (o = 0), void 0 === n && (n = this.length), t < 0 || i > e.length || o < 0 || n > this.length) throw new RangeError("out of range index");
				if (o >= n && t >= i) return 0;
				if (o >= n) return -1;
				if (t >= i) return 1;
				if (t >>>= 0, i >>>= 0, o >>>= 0, n >>>= 0, this === e) return 0;
				for (var a = n - o, r = i - t, s = Math.min(a, r), c = this.slice(o, n), l = e.slice(t, i), p = 0; p < s; ++p)
					if (c[p] !== l[p]) {
						a = c[p], r = l[p];
						break
					} return a < r ? -1 : r < a ? 1 : 0
			}, d.prototype.includes = function(e, t, i) {
				return -1 !== this.indexOf(e, t, i)
			}, d.prototype.indexOf = function(e, t, i) {
				return g(this, e, t, i, !0)
			}, d.prototype.lastIndexOf = function(e, t, i) {
				return g(this, e, t, i, !1)
			}, d.prototype.write = function(e, t, i, o) {
				if (void 0 === t) o = "utf8", i = this.length, t = 0;
				else if (void 0 === i && "string" == typeof t) o = t, i = this.length, t = 0;
				else {
					if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					t |= 0, isFinite(i) ? (i |= 0, void 0 === o && (o = "utf8")) : (o = i, i = void 0)
				}
				var n = this.length - t;
				if ((void 0 === i || i > n) && (i = n), e.length > 0 && (i < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				o || (o = "utf8");
				for (var a = !1;;) switch (o) {
					case "hex":
						return y(this, e, t, i);
					case "utf8":
					case "utf-8":
						return v(this, e, t, i);
					case "ascii":
						return C(this, e, t, i);
					case "latin1":
					case "binary":
						return _(this, e, t, i);
					case "base64":
						return S(this, e, t, i);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return b(this, e, t, i);
					default:
						if (a) throw new TypeError("Unknown encoding: " + o);
						o = ("" + o).toLowerCase(), a = !0
				}
			}, d.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var B = 4096;

			function L(e, t, i) {
				var o = "";
				i = Math.min(e.length, i);
				for (var n = t; n < i; ++n) o += String.fromCharCode(127 & e[n]);
				return o
			}

			function D(e, t, i) {
				var o = "";
				i = Math.min(e.length, i);
				for (var n = t; n < i; ++n) o += String.fromCharCode(e[n]);
				return o
			}

			function T(e, t, i) {
				var o = e.length;
				(!t || t < 0) && (t = 0), (!i || i < 0 || i > o) && (i = o);
				for (var n = "", a = t; a < i; ++a) n += E(e[a]);
				return n
			}

			function x(e, t, i) {
				for (var o = e.slice(t, i), n = "", a = 0; a < o.length; a += 2) n += String.fromCharCode(o[a] + 256 * o[a + 1]);
				return n
			}

			function I(e, t, i) {
				if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
				if (e + t > i) throw new RangeError("Trying to access beyond buffer length")
			}

			function P(e, t, i, o, n, a) {
				if (!d.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (t > n || t < a) throw new RangeError('"value" argument is out of bounds');
				if (i + o > e.length) throw new RangeError("Index out of range")
			}

			function M(e, t, i, o) {
				t < 0 && (t = 65535 + t + 1);
				for (var n = 0, a = Math.min(e.length - i, 2); n < a; ++n) e[i + n] = (t & 255 << 8 * (o ? n : 1 - n)) >>> 8 * (o ? n : 1 - n)
			}

			function A(e, t, i, o) {
				t < 0 && (t = 4294967295 + t + 1);
				for (var n = 0, a = Math.min(e.length - i, 4); n < a; ++n) e[i + n] = t >>> 8 * (o ? n : 3 - n) & 255
			}

			function k(e, t, i, o, n, a) {
				if (i + o > e.length) throw new RangeError("Index out of range");
				if (i < 0) throw new RangeError("Index out of range")
			}

			function G(e, t, i, o, a) {
				return a || k(e, 0, i, 4), n.write(e, t, i, o, 23, 4), i + 4
			}

			function O(e, t, i, o, a) {
				return a || k(e, 0, i, 8), n.write(e, t, i, o, 52, 8), i + 8
			}
			d.prototype.slice = function(e, t) {
				var i, o = this.length;
				if (e = ~~e, t = void 0 === t ? o : ~~t, e < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e), d.TYPED_ARRAY_SUPPORT)(i = this.subarray(e, t)).__proto__ = d.prototype;
				else {
					var n = t - e;
					i = new d(n, void 0);
					for (var a = 0; a < n; ++a) i[a] = this[a + e]
				}
				return i
			}, d.prototype.readUIntLE = function(e, t, i) {
				e |= 0, t |= 0, i || I(e, t, this.length);
				for (var o = this[e], n = 1, a = 0; ++a < t && (n *= 256);) o += this[e + a] * n;
				return o
			}, d.prototype.readUIntBE = function(e, t, i) {
				e |= 0, t |= 0, i || I(e, t, this.length);
				for (var o = this[e + --t], n = 1; t > 0 && (n *= 256);) o += this[e + --t] * n;
				return o
			}, d.prototype.readUInt8 = function(e, t) {
				return t || I(e, 1, this.length), this[e]
			}, d.prototype.readUInt16LE = function(e, t) {
				return t || I(e, 2, this.length), this[e] | this[e + 1] << 8
			}, d.prototype.readUInt16BE = function(e, t) {
				return t || I(e, 2, this.length), this[e] << 8 | this[e + 1]
			}, d.prototype.readUInt32LE = function(e, t) {
				return t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			}, d.prototype.readUInt32BE = function(e, t) {
				return t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			}, d.prototype.readIntLE = function(e, t, i) {
				e |= 0, t |= 0, i || I(e, t, this.length);
				for (var o = this[e], n = 1, a = 0; ++a < t && (n *= 256);) o += this[e + a] * n;
				return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)), o
			}, d.prototype.readIntBE = function(e, t, i) {
				e |= 0, t |= 0, i || I(e, t, this.length);
				for (var o = t, n = 1, a = this[e + --o]; o > 0 && (n *= 256);) a += this[e + --o] * n;
				return a >= (n *= 128) && (a -= Math.pow(2, 8 * t)), a
			}, d.prototype.readInt8 = function(e, t) {
				return t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			}, d.prototype.readInt16LE = function(e, t) {
				t || I(e, 2, this.length);
				var i = this[e] | this[e + 1] << 8;
				return 32768 & i ? 4294901760 | i : i
			}, d.prototype.readInt16BE = function(e, t) {
				t || I(e, 2, this.length);
				var i = this[e + 1] | this[e] << 8;
				return 32768 & i ? 4294901760 | i : i
			}, d.prototype.readInt32LE = function(e, t) {
				return t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			}, d.prototype.readInt32BE = function(e, t) {
				return t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			}, d.prototype.readFloatLE = function(e, t) {
				return t || I(e, 4, this.length), n.read(this, e, !0, 23, 4)
			}, d.prototype.readFloatBE = function(e, t) {
				return t || I(e, 4, this.length), n.read(this, e, !1, 23, 4)
			}, d.prototype.readDoubleLE = function(e, t) {
				return t || I(e, 8, this.length), n.read(this, e, !0, 52, 8)
			}, d.prototype.readDoubleBE = function(e, t) {
				return t || I(e, 8, this.length), n.read(this, e, !1, 52, 8)
			}, d.prototype.writeUIntLE = function(e, t, i, o) {
				(e = +e, t |= 0, i |= 0, o) || P(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
				var n = 1,
					a = 0;
				for (this[t] = 255 & e; ++a < i && (n *= 256);) this[t + a] = e / n & 255;
				return t + i
			}, d.prototype.writeUIntBE = function(e, t, i, o) {
				(e = +e, t |= 0, i |= 0, o) || P(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
				var n = i - 1,
					a = 1;
				for (this[t + n] = 255 & e; --n >= 0 && (a *= 256);) this[t + n] = e / a & 255;
				return t + i
			}, d.prototype.writeUInt8 = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
			}, d.prototype.writeUInt16LE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : M(this, e, t, !0), t + 2
			}, d.prototype.writeUInt16BE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : M(this, e, t, !1), t + 2
			}, d.prototype.writeUInt32LE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : A(this, e, t, !0), t + 4
			}, d.prototype.writeUInt32BE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : A(this, e, t, !1), t + 4
			}, d.prototype.writeIntLE = function(e, t, i, o) {
				if (e = +e, t |= 0, !o) {
					var n = Math.pow(2, 8 * i - 1);
					P(this, e, t, i, n - 1, -n)
				}
				var a = 0,
					r = 1,
					s = 0;
				for (this[t] = 255 & e; ++a < i && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / r >> 0) - s & 255;
				return t + i
			}, d.prototype.writeIntBE = function(e, t, i, o) {
				if (e = +e, t |= 0, !o) {
					var n = Math.pow(2, 8 * i - 1);
					P(this, e, t, i, n - 1, -n)
				}
				var a = i - 1,
					r = 1,
					s = 0;
				for (this[t + a] = 255 & e; --a >= 0 && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / r >> 0) - s & 255;
				return t + i
			}, d.prototype.writeInt8 = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
			}, d.prototype.writeInt16LE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : M(this, e, t, !0), t + 2
			}, d.prototype.writeInt16BE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : M(this, e, t, !1), t + 2
			}, d.prototype.writeInt32LE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : A(this, e, t, !0), t + 4
			}, d.prototype.writeInt32BE = function(e, t, i) {
				return e = +e, t |= 0, i || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : A(this, e, t, !1), t + 4
			}, d.prototype.writeFloatLE = function(e, t, i) {
				return G(this, e, t, !0, i)
			}, d.prototype.writeFloatBE = function(e, t, i) {
				return G(this, e, t, !1, i)
			}, d.prototype.writeDoubleLE = function(e, t, i) {
				return O(this, e, t, !0, i)
			}, d.prototype.writeDoubleBE = function(e, t, i) {
				return O(this, e, t, !1, i)
			}, d.prototype.copy = function(e, t, i, o) {
				if (i || (i = 0), o || 0 === o || (o = this.length), t >= e.length && (t = e.length), t || (t = 0), o > 0 && o < i && (o = i), o === i) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
				if (o < 0) throw new RangeError("sourceEnd out of bounds");
				o > this.length && (o = this.length), e.length - t < o - i && (o = e.length - t + i);
				var n, a = o - i;
				if (this === e && i < t && t < o)
					for (n = a - 1; n >= 0; --n) e[n + t] = this[n + i];
				else if (a < 1e3 || !d.TYPED_ARRAY_SUPPORT)
					for (n = 0; n < a; ++n) e[n + t] = this[n + i];
				else Uint8Array.prototype.set.call(e, this.subarray(i, i + a), t);
				return a
			}, d.prototype.fill = function(e, t, i, o) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (o = t, t = 0, i = this.length) : "string" == typeof i && (o = i, i = this.length), 1 === e.length) {
						var n = e.charCodeAt(0);
						n < 256 && (e = n)
					}
					if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
					if ("string" == typeof o && !d.isEncoding(o)) throw new TypeError("Unknown encoding: " + o)
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
				if (i <= t) return this;
				var a;
				if (t >>>= 0, i = void 0 === i ? this.length : i >>> 0, e || (e = 0), "number" == typeof e)
					for (a = t; a < i; ++a) this[a] = e;
				else {
					var r = d.isBuffer(e) ? e : U(new d(e, o).toString()),
						s = r.length;
					for (a = 0; a < i - t; ++a) this[a + t] = r[a % s]
				}
				return this
			};
			var R = /[^+\/0-9A-Za-z-_]/g;

			function E(e) {
				return e < 16 ? "0" + e.toString(16) : e.toString(16)
			}

			function U(e, t) {
				var i;
				t = t || 1 / 0;
				for (var o = e.length, n = null, a = [], r = 0; r < o; ++r) {
					if ((i = e.charCodeAt(r)) > 55295 && i < 57344) {
						if (!n) {
							if (i > 56319) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							if (r + 1 === o) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							n = i;
							continue
						}
						if (i < 56320) {
							(t -= 3) > -1 && a.push(239, 191, 189), n = i;
							continue
						}
						i = 65536 + (n - 55296 << 10 | i - 56320)
					} else n && (t -= 3) > -1 && a.push(239, 191, 189);
					if (n = null, i < 128) {
						if ((t -= 1) < 0) break;
						a.push(i)
					} else if (i < 2048) {
						if ((t -= 2) < 0) break;
						a.push(i >> 6 | 192, 63 & i | 128)
					} else if (i < 65536) {
						if ((t -= 3) < 0) break;
						a.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
					} else {
						if (!(i < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						a.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
					}
				}
				return a
			}

			function W(e) {
				return o.toByteArray(function(e) {
					if ((e = function(e) {
							return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
						}(e).replace(R, "")).length < 2) return "";
					for (; e.length % 4 != 0;) e += "=";
					return e
				}(e))
			}

			function H(e, t, i, o) {
				for (var n = 0; n < o && !(n + i >= t.length || n >= e.length); ++n) t[n + i] = e[n];
				return n
			}
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		"base64-js": 1,
		ieee754: 4,
		isarray: 3
	}],
	3: [function(e, t, i) {
		var o = {}.toString;
		t.exports = Array.isArray || function(e) {
			return "[object Array]" == o.call(e)
		}
	}, {}],
	4: [function(e, t, i) {
		i.read = function(e, t, i, o, n) {
			var a, r, s = 8 * n - o - 1,
				d = (1 << s) - 1,
				c = d >> 1,
				l = -7,
				p = i ? n - 1 : 0,
				u = i ? -1 : 1,
				h = e[t + p];
			for (p += u, a = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; a = 256 * a + e[t + p], p += u, l -= 8);
			for (r = a & (1 << -l) - 1, a >>= -l, l += o; l > 0; r = 256 * r + e[t + p], p += u, l -= 8);
			if (0 === a) a = 1 - c;
			else {
				if (a === d) return r ? NaN : 1 / 0 * (h ? -1 : 1);
				r += Math.pow(2, o), a -= c
			}
			return (h ? -1 : 1) * r * Math.pow(2, a - o)
		}, i.write = function(e, t, i, o, n, a) {
			var r, s, d, c = 8 * a - n - 1,
				l = (1 << c) - 1,
				p = l >> 1,
				u = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				h = o ? 0 : a - 1,
				w = o ? 1 : -1,
				m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, r = l) : (r = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -r)) < 1 && (r--, d *= 2), (t += r + p >= 1 ? u / d : u * Math.pow(2, 1 - p)) * d >= 2 && (r++, d /= 2), r + p >= l ? (s = 0, r = l) : r + p >= 1 ? (s = (t * d - 1) * Math.pow(2, n), r += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, n), r = 0)); n >= 8; e[i + h] = 255 & s, h += w, s /= 256, n -= 8);
			for (r = r << n | s, c += n; c > 0; e[i + h] = 255 & r, h += w, r /= 256, c -= 8);
			e[i + h - w] |= 128 * m
		}
	}, {}],
	5: [function(e, t, i) {
		"use strict";
		t.exports = function(e, t) {
			var i = new Array(arguments.length - 1),
				o = 0,
				n = 2,
				a = !0;
			for (; n < arguments.length;) i[o++] = arguments[n++];
			return new Promise(function(n, r) {
				i[o] = function(e) {
					if (a)
						if (a = !1, e) r(e);
						else {
							for (var t = new Array(arguments.length - 1), i = 0; i < t.length;) t[i++] = arguments[i];
							n.apply(null, t)
						}
				};
				try {
					e.apply(t || null, i)
				} catch (e) {
					a && (a = !1, r(e))
				}
			})
		}
	}, {}],
	6: [function(e, t, i) {
		"use strict";
		var o = i;
		o.length = function(e) {
			var t = e.length;
			if (!t) return 0;
			for (var i = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++i;
			return Math.ceil(3 * e.length) / 4 - i
		};
		for (var n = new Array(64), a = new Array(123), r = 0; r < 64;) a[n[r] = r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r - 59 | 43] = r++;
		o.encode = function(e, t, i) {
			for (var o, a = null, r = [], s = 0, d = 0; t < i;) {
				var c = e[t++];
				switch (d) {
					case 0:
						r[s++] = n[c >> 2], o = (3 & c) << 4, d = 1;
						break;
					case 1:
						r[s++] = n[o | c >> 4], o = (15 & c) << 2, d = 2;
						break;
					case 2:
						r[s++] = n[o | c >> 6], r[s++] = n[63 & c], d = 0
				}
				s > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, r)), s = 0)
			}
			return d && (r[s++] = n[o], r[s++] = 61, 1 === d && (r[s++] = 61)), a ? (s && a.push(String.fromCharCode.apply(String, r.slice(0, s))), a.join("")) : String.fromCharCode.apply(String, r.slice(0, s))
		};
		o.decode = function(e, t, i) {
			for (var o, n = i, r = 0, s = 0; s < e.length;) {
				var d = e.charCodeAt(s++);
				if (61 === d && r > 1) break;
				if (void 0 === (d = a[d])) throw Error("invalid encoding");
				switch (r) {
					case 0:
						o = d, r = 1;
						break;
					case 1:
						t[i++] = o << 2 | (48 & d) >> 4, o = d, r = 2;
						break;
					case 2:
						t[i++] = (15 & o) << 4 | (60 & d) >> 2, o = d, r = 3;
						break;
					case 3:
						t[i++] = (3 & o) << 6 | d, r = 0
				}
			}
			if (1 === r) throw Error("invalid encoding");
			return i - n
		}, o.test = function(e) {
			return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
		}
	}, {}],
	7: [function(e, t, i) {
		"use strict";

		function o() {
			this._listeners = {}
		}
		t.exports = o, o.prototype.on = function(e, t, i) {
			return (this._listeners[e] || (this._listeners[e] = [])).push({
				fn: t,
				ctx: i || this
			}), this
		}, o.prototype.off = function(e, t) {
			if (void 0 === e) this._listeners = {};
			else if (void 0 === t) this._listeners[e] = [];
			else
				for (var i = this._listeners[e], o = 0; o < i.length;) i[o].fn === t ? i.splice(o, 1) : ++o;
			return this
		}, o.prototype.emit = function(e) {
			var t = this._listeners[e];
			if (t) {
				for (var i = [], o = 1; o < arguments.length;) i.push(arguments[o++]);
				for (o = 0; o < t.length;) t[o].fn.apply(t[o++].ctx, i)
			}
			return this
		}
	}, {}],
	8: [function(e, t, i) {
		"use strict";

		function o(e) {
			return "undefined" != typeof Float32Array ? function() {
				var t = new Float32Array([-0]),
					i = new Uint8Array(t.buffer),
					o = 128 === i[3];

				function n(e, o, n) {
					t[0] = e, o[n] = i[0], o[n + 1] = i[1], o[n + 2] = i[2], o[n + 3] = i[3]
				}

				function a(e, o, n) {
					t[0] = e, o[n] = i[3], o[n + 1] = i[2], o[n + 2] = i[1], o[n + 3] = i[0]
				}

				function r(e, o) {
					return i[0] = e[o], i[1] = e[o + 1], i[2] = e[o + 2], i[3] = e[o + 3], t[0]
				}

				function s(e, o) {
					return i[3] = e[o], i[2] = e[o + 1], i[1] = e[o + 2], i[0] = e[o + 3], t[0]
				}
				e.writeFloatLE = o ? n : a, e.writeFloatBE = o ? a : n, e.readFloatLE = o ? r : s, e.readFloatBE = o ? s : r
			}() : function() {
				function t(e, t, i, o) {
					var n = t < 0 ? 1 : 0;
					if (n && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, i, o);
					else if (isNaN(t)) e(2143289344, i, o);
					else if (t > 3.4028234663852886e38) e((n << 31 | 2139095040) >>> 0, i, o);
					else if (t < 1.1754943508222875e-38) e((n << 31 | Math.round(t / 1.401298464324817e-45)) >>> 0, i, o);
					else {
						var a = Math.floor(Math.log(t) / Math.LN2);
						e((n << 31 | a + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -a) * 8388608)) >>> 0, i, o)
					}
				}

				function i(e, t, i) {
					var o = e(t, i),
						n = 2 * (o >> 31) + 1,
						a = o >>> 23 & 255,
						r = 8388607 & o;
					return 255 === a ? r ? NaN : n * (1 / 0) : 0 === a ? 1.401298464324817e-45 * n * r : n * Math.pow(2, a - 150) * (r + 8388608)
				}
				e.writeFloatLE = t.bind(null, n), e.writeFloatBE = t.bind(null, a), e.readFloatLE = i.bind(null, r), e.readFloatBE = i.bind(null, s)
			}(), "undefined" != typeof Float64Array ? function() {
				var t = new Float64Array([-0]),
					i = new Uint8Array(t.buffer),
					o = 128 === i[7];

				function n(e, o, n) {
					t[0] = e, o[n] = i[0], o[n + 1] = i[1], o[n + 2] = i[2], o[n + 3] = i[3], o[n + 4] = i[4], o[n + 5] = i[5], o[n + 6] = i[6], o[n + 7] = i[7]
				}

				function a(e, o, n) {
					t[0] = e, o[n] = i[7], o[n + 1] = i[6], o[n + 2] = i[5], o[n + 3] = i[4], o[n + 4] = i[3], o[n + 5] = i[2], o[n + 6] = i[1], o[n + 7] = i[0]
				}

				function r(e, o) {
					return i[0] = e[o], i[1] = e[o + 1], i[2] = e[o + 2], i[3] = e[o + 3], i[4] = e[o + 4], i[5] = e[o + 5], i[6] = e[o + 6], i[7] = e[o + 7], t[0]
				}

				function s(e, o) {
					return i[7] = e[o], i[6] = e[o + 1], i[5] = e[o + 2], i[4] = e[o + 3], i[3] = e[o + 4], i[2] = e[o + 5], i[1] = e[o + 6], i[0] = e[o + 7], t[0]
				}
				e.writeDoubleLE = o ? n : a, e.writeDoubleBE = o ? a : n, e.readDoubleLE = o ? r : s, e.readDoubleBE = o ? s : r
			}() : function() {
				function t(e, t, i, o, n, a) {
					var r = o < 0 ? 1 : 0;
					if (r && (o = -o), 0 === o) e(0, n, a + t), e(1 / o > 0 ? 0 : 2147483648, n, a + i);
					else if (isNaN(o)) e(0, n, a + t), e(2146959360, n, a + i);
					else if (o > 1.7976931348623157e308) e(0, n, a + t), e((r << 31 | 2146435072) >>> 0, n, a + i);
					else {
						var s;
						if (o < 2.2250738585072014e-308) e((s = o / 5e-324) >>> 0, n, a + t), e((r << 31 | s / 4294967296) >>> 0, n, a + i);
						else {
							var d = Math.floor(Math.log(o) / Math.LN2);
							1024 === d && (d = 1023), e(4503599627370496 * (s = o * Math.pow(2, -d)) >>> 0, n, a + t), e((r << 31 | d + 1023 << 20 | 1048576 * s & 1048575) >>> 0, n, a + i)
						}
					}
				}

				function i(e, t, i, o, n) {
					var a = e(o, n + t),
						r = e(o, n + i),
						s = 2 * (r >> 31) + 1,
						d = r >>> 20 & 2047,
						c = 4294967296 * (1048575 & r) + a;
					return 2047 === d ? c ? NaN : s * (1 / 0) : 0 === d ? 5e-324 * s * c : s * Math.pow(2, d - 1075) * (c + 4503599627370496)
				}
				e.writeDoubleLE = t.bind(null, n, 0, 4), e.writeDoubleBE = t.bind(null, a, 4, 0), e.readDoubleLE = i.bind(null, r, 0, 4), e.readDoubleBE = i.bind(null, s, 4, 0)
			}(), e
		}

		function n(e, t, i) {
			t[i] = 255 & e, t[i + 1] = e >>> 8 & 255, t[i + 2] = e >>> 16 & 255, t[i + 3] = e >>> 24
		}

		function a(e, t, i) {
			t[i] = e >>> 24, t[i + 1] = e >>> 16 & 255, t[i + 2] = e >>> 8 & 255, t[i + 3] = 255 & e
		}

		function r(e, t) {
			return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
		}

		function s(e, t) {
			return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
		}
		t.exports = o(o)
	}, {}],
	9: [function(require, module, exports) {
		"use strict";

		function inquire(moduleName) {
			try {
				var mod = eval("quire".replace(/^/, "re"))(moduleName);
				if (mod && (mod.length || Object.keys(mod).length)) return mod
			} catch (e) {}
			return null
		}
		module.exports = inquire
	}, {}],
	10: [function(e, t, i) {
		"use strict";
		t.exports = function(e, t, i) {
			var o = i || 8192,
				n = o >>> 1,
				a = null,
				r = o;
			return function(i) {
				if (i < 1 || i > n) return e(i);
				r + i > o && (a = e(o), r = 0);
				var s = t.call(a, r, r += i);
				return 7 & r && (r = 1 + (7 | r)), s
			}
		}
	}, {}],
	11: [function(e, t, i) {
		"use strict";
		var o = i;
		o.length = function(e) {
			for (var t = 0, i = 0, o = 0; o < e.length; ++o)(i = e.charCodeAt(o)) < 128 ? t += 1 : i < 2048 ? t += 2 : 55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(o + 1)) ? (++o, t += 4) : t += 3;
			return t
		}, o.read = function(e, t, i) {
			if (i - t < 1) return "";
			for (var o, n = null, a = [], r = 0; t < i;)(o = e[t++]) < 128 ? a[r++] = o : o > 191 && o < 224 ? a[r++] = (31 & o) << 6 | 63 & e[t++] : o > 239 && o < 365 ? (o = ((7 & o) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, a[r++] = 55296 + (o >> 10), a[r++] = 56320 + (1023 & o)) : a[r++] = (15 & o) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], r > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, a)), r = 0);
			return n ? (r && n.push(String.fromCharCode.apply(String, a.slice(0, r))), n.join("")) : String.fromCharCode.apply(String, a.slice(0, r))
		}, o.write = function(e, t, i) {
			for (var o, n, a = i, r = 0; r < e.length; ++r)(o = e.charCodeAt(r)) < 128 ? t[i++] = o : o < 2048 ? (t[i++] = o >> 6 | 192, t[i++] = 63 & o | 128) : 55296 == (64512 & o) && 56320 == (64512 & (n = e.charCodeAt(r + 1))) ? (o = 65536 + ((1023 & o) << 10) + (1023 & n), ++r, t[i++] = o >> 18 | 240, t[i++] = o >> 12 & 63 | 128, t[i++] = o >> 6 & 63 | 128, t[i++] = 63 & o | 128) : (t[i++] = o >> 12 | 224, t[i++] = o >> 6 & 63 | 128, t[i++] = 63 & o | 128);
			return i - a
		}
	}, {}],
	12: [function(e, t, i) {
		(function(e, o) {
			"object" == typeof i && void 0 !== t ? o(i) : "function" == typeof define && define.amd ? define("crypto-ts", ["exports"], o) : o(e.CryptoTS = {})
		})(this, function(e) {
			"use strict";
			var t = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
			};

			function i(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
			for (var o = function() {
					function e() {}
					return e.stringify = function(e) {
						for (var t = [], i = 0; i < e.sigBytes; i++) {
							var o = e.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							t.push((o >>> 4).toString(16)), t.push((15 & o).toString(16))
						}
						return t.join("")
					}, e.parse = function(e) {
						for (var t = e.length, i = [], o = 0; o < t; o += 2) i[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
						return new n(i, t / 2)
					}, e
				}(), n = function() {
					function e(e, t) {
						this.words = e || [], this.sigBytes = void 0 !== t ? t : 4 * this.words.length
					}
					return e.random = function(t) {
						for (var i = [], o = function(e) {
								var t = 987654321,
									i = 4294967295;
								return function() {
									var o = ((t = 36969 * (65535 & t) + (t >> 16) & i) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & i) & i;
									return o /= 4294967296, (o += .5) * (Math.random() > .5 ? 1 : -1)
								}
							}, n = 0, a = void 0; n < t; n += 4) {
							var r = o(4294967296 * (a || Math.random()));
							a = 987654071 * r(), i.push(4294967296 * r() | 0)
						}
						return new e(i, t)
					}, e.prototype.toString = function(e) {
						return (e || o).stringify(this)
					}, e.prototype.concat = function(e) {
						if (this.clamp(), this.sigBytes % 4)
							for (var t = 0; t < e.sigBytes; t++) {
								var i = e.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
								this.words[this.sigBytes + t >>> 2] |= i << 24 - (this.sigBytes + t) % 4 * 8
							} else
								for (t = 0; t < e.sigBytes; t += 4) this.words[this.sigBytes + t >>> 2] = e.words[t >>> 2];
						return this.sigBytes += e.sigBytes, this
					}, e.prototype.clamp = function() {
						this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4)
					}, e.prototype.clone = function() {
						return new e(this.words.slice(0), this.sigBytes)
					}, e
				}(), a = function() {
					function e() {}
					return e.stringify = function(e) {
						for (var t = [], i = 0; i < e.sigBytes; i++) {
							var o = e.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							t.push(String.fromCharCode(o))
						}
						return t.join("")
					}, e.parse = function(e) {
						for (var t = e.length, i = [], o = 0; o < t; o++) i[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
						return new n(i, t)
					}, e
				}(), r = function() {
					function e() {}
					return e.stringify = function(e) {
						try {
							return decodeURIComponent(escape(a.stringify(e)))
						} catch (e) {
							throw new Error("Malformed UTF-8 data")
						}
					}, e.parse = function(e) {
						return a.parse(unescape(encodeURIComponent(e)))
					}, e
				}(), s = function() {
					function e(e) {
						this._minBufferSize = 0, this.cfg = Object.assign({
							blockSize: 1
						}, e), this._data = new n, this._nDataBytes = 0
					}
					return e.prototype.reset = function() {
						this._data = new n, this._nDataBytes = 0
					}, e.prototype._append = function(e) {
						"string" == typeof e && (e = r.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
					}, e.prototype._process = function(e) {
						if (!this.cfg.blockSize) throw new Error("missing blockSize in config");
						var t, i = 4 * this.cfg.blockSize,
							o = this._data.sigBytes / i,
							a = (o = e ? Math.ceil(o) : Math.max((0 | o) - this._minBufferSize, 0)) * this.cfg.blockSize,
							r = Math.min(4 * a, this._data.sigBytes);
						if (a) {
							for (var s = 0; s < a; s += this.cfg.blockSize) this._doProcessBlock(this._data.words, s);
							t = this._data.words.splice(0, a), this._data.sigBytes -= r
						}
						return new n(t, r)
					}, e.prototype.clone = function() {
						var e = this.constructor();
						for (var t in this) this.hasOwnProperty(t) && (e[t] = this[t]);
						return e._data = this._data.clone(), e
					}, e
				}(), d = function() {
					return function() {}
				}(), c = function(e) {
					function t(t) {
						var i = e.call(this) || this;
						return i.ciphertext = t.ciphertext, i.key = t.key, i.iv = t.iv, i.salt = t.salt, i.algorithm = t.algorithm, i.mode = t.mode, i.padding = t.padding, i.blockSize = t.blockSize, i.formatter = t.formatter, i
					}
					return i(t, e), t.prototype.extend = function(e) {
						return void 0 !== e.ciphertext && (this.ciphertext = e.ciphertext), void 0 !== e.key && (this.key = e.key), void 0 !== e.iv && (this.iv = e.iv), void 0 !== e.salt && (this.salt = e.salt), void 0 !== e.algorithm && (this.algorithm = e.algorithm), void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.padding && (this.padding = e.padding), void 0 !== e.blockSize && (this.blockSize = e.blockSize), void 0 !== e.formatter && (this.formatter = e.formatter), this
					}, t.prototype.toString = function(e) {
						if (e) return e.stringify(this);
						if (this.formatter) return this.formatter.stringify(this);
						throw new Error("cipher needs a formatter to be able to convert the result into a string")
					}, t
				}(d), l = function() {
					function e() {}
					return e.stringify = function(e) {
						e.clamp();
						for (var t = [], i = 0; i < e.sigBytes; i += 3)
							for (var o = (e.words[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, n = 0; n < 4 && i + .75 * n < e.sigBytes; n++) t.push(this._map.charAt(o >>> 6 * (3 - n) & 63));
						var a = this._map.charAt(64);
						if (a)
							for (; t.length % 4;) t.push(a);
						return t.join("")
					}, e.parse = function(e) {
						var t = e.length;
						if (void 0 === this._reverseMap) {
							this._reverseMap = [];
							for (var i = 0; i < this._map.length; i++) this._reverseMap[this._map.charCodeAt(i)] = i
						}
						var o = this._map.charAt(64);
						if (o) {
							var n = e.indexOf(o); - 1 !== n && (t = n)
						}
						return this.parseLoop(e, t, this._reverseMap)
					}, e.parseLoop = function(e, t, i) {
						for (var o = [], a = 0, r = 0; r < t; r++)
							if (r % 4) {
								var s = i[e.charCodeAt(r - 1)] << r % 4 * 2,
									d = i[e.charCodeAt(r)] >>> 6 - r % 4 * 2;
								o[a >>> 2] |= (s | d) << 24 - a % 4 * 8, a++
							} return new n(o, a)
					}, e._map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e._reverseMap = void 0, e
				}(), p = function() {
					function e() {}
					return e.stringify = function(e) {
						if (!e.ciphertext) throw new Error("missing ciphertext in params");
						var t, i = e.ciphertext,
							o = e.salt;
						if (o) {
							if ("string" == typeof o) throw new Error("salt is expected to be a WordArray");
							t = new n([1398893684, 1701076831]).concat(o).concat(i)
						} else t = i;
						return t.toString(l)
					}, e.parse = function(e) {
						var t, i = l.parse(e);
						return 1398893684 === i.words[0] && 1701076831 === i.words[1] && (t = new n(i.words.slice(2, 4)), i.words.splice(0, 4), i.sigBytes -= 16), new c({
							ciphertext: i,
							salt: t
						})
					}, e
				}(), u = function() {
					function e() {}
					return e.encrypt = function(e, t, i, o) {
						var n = Object.assign({}, this.cfg, o),
							a = e.createEncryptor(i, n),
							r = a.finalize(t);
						return new c({
							ciphertext: r,
							key: i,
							iv: a.cfg.iv,
							algorithm: e,
							mode: a.cfg.mode,
							padding: a.cfg.padding,
							blockSize: a.cfg.blockSize,
							formatter: n.format
						})
					}, e.decrypt = function(e, t, i, o) {
						var n = Object.assign({}, this.cfg, o);
						if (!n.format) throw new Error("could not determine format");
						if (!(t = this._parse(t, n.format)).ciphertext) throw new Error("could not determine ciphertext");
						return e.createDecryptor(i, n).finalize(t.ciphertext)
					}, e._parse = function(e, t) {
						return "string" == typeof e ? t.parse(e) : e
					}, e.cfg = {
						blockSize: 4,
						iv: new n([]),
						format: p
					}, e
				}(), h = function(e) {
					function t(t) {
						var i = e.call(this, Object.assign({
							blockSize: 16
						}, t)) || this;
						return i.reset(), i
					}
					return i(t, e), t._createHelper = function(e) {
						return function(t, i) {
							return new e(i).finalize(t)
						}
					}, t.prototype.update = function(e) {
						return this._append(e), this._process(), this
					}, t.prototype.finalize = function(e) {
						return e && this._append(e), this._doFinalize()
					}, t
				}(s), w = [], m = 0; m < 64; m++) w[m] = 4294967296 * Math.abs(Math.sin(m + 1)) | 0;
			var g = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.FF = function(e, t, i, o, n, a, r) {
						var s = e + (t & i | ~t & o) + n + r;
						return (s << a | s >>> 32 - a) + t
					}, t.GG = function(e, t, i, o, n, a, r) {
						var s = e + (t & o | i & ~o) + n + r;
						return (s << a | s >>> 32 - a) + t
					}, t.HH = function(e, t, i, o, n, a, r) {
						var s = e + (t ^ i ^ o) + n + r;
						return (s << a | s >>> 32 - a) + t
					}, t.II = function(e, t, i, o, n, a, r) {
						var s = e + (i ^ (t | ~o)) + n + r;
						return (s << a | s >>> 32 - a) + t
					}, t.prototype.reset = function() {
						e.prototype.reset.call(this), this._hash = new n([1732584193, 4023233417, 2562383102, 271733878])
					}, t.prototype._doProcessBlock = function(e, i) {
						for (var o = 0; o < 16; o++) {
							var n = i + o,
								a = e[n];
							e[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
						}
						var r = this._hash.words,
							s = e[i + 0],
							d = e[i + 1],
							c = e[i + 2],
							l = e[i + 3],
							p = e[i + 4],
							u = e[i + 5],
							h = e[i + 6],
							m = e[i + 7],
							g = e[i + 8],
							f = e[i + 9],
							y = e[i + 10],
							v = e[i + 11],
							C = e[i + 12],
							_ = e[i + 13],
							S = e[i + 14],
							b = e[i + 15],
							F = r[0],
							N = r[1],
							B = r[2],
							L = r[3];
						F = t.FF(F, N, B, L, s, 7, w[0]), L = t.FF(L, F, N, B, d, 12, w[1]), B = t.FF(B, L, F, N, c, 17, w[2]), N = t.FF(N, B, L, F, l, 22, w[3]), F = t.FF(F, N, B, L, p, 7, w[4]), L = t.FF(L, F, N, B, u, 12, w[5]), B = t.FF(B, L, F, N, h, 17, w[6]), N = t.FF(N, B, L, F, m, 22, w[7]), F = t.FF(F, N, B, L, g, 7, w[8]), L = t.FF(L, F, N, B, f, 12, w[9]), B = t.FF(B, L, F, N, y, 17, w[10]), N = t.FF(N, B, L, F, v, 22, w[11]), F = t.FF(F, N, B, L, C, 7, w[12]), L = t.FF(L, F, N, B, _, 12, w[13]), B = t.FF(B, L, F, N, S, 17, w[14]), N = t.FF(N, B, L, F, b, 22, w[15]), F = t.GG(F, N, B, L, d, 5, w[16]), L = t.GG(L, F, N, B, h, 9, w[17]), B = t.GG(B, L, F, N, v, 14, w[18]), N = t.GG(N, B, L, F, s, 20, w[19]), F = t.GG(F, N, B, L, u, 5, w[20]), L = t.GG(L, F, N, B, y, 9, w[21]), B = t.GG(B, L, F, N, b, 14, w[22]), N = t.GG(N, B, L, F, p, 20, w[23]), F = t.GG(F, N, B, L, f, 5, w[24]), L = t.GG(L, F, N, B, S, 9, w[25]), B = t.GG(B, L, F, N, l, 14, w[26]), N = t.GG(N, B, L, F, g, 20, w[27]), F = t.GG(F, N, B, L, _, 5, w[28]), L = t.GG(L, F, N, B, c, 9, w[29]), B = t.GG(B, L, F, N, m, 14, w[30]), N = t.GG(N, B, L, F, C, 20, w[31]), F = t.HH(F, N, B, L, u, 4, w[32]), L = t.HH(L, F, N, B, g, 11, w[33]), B = t.HH(B, L, F, N, v, 16, w[34]), N = t.HH(N, B, L, F, S, 23, w[35]), F = t.HH(F, N, B, L, d, 4, w[36]), L = t.HH(L, F, N, B, p, 11, w[37]), B = t.HH(B, L, F, N, m, 16, w[38]), N = t.HH(N, B, L, F, y, 23, w[39]), F = t.HH(F, N, B, L, _, 4, w[40]), L = t.HH(L, F, N, B, s, 11, w[41]), B = t.HH(B, L, F, N, l, 16, w[42]), N = t.HH(N, B, L, F, h, 23, w[43]), F = t.HH(F, N, B, L, f, 4, w[44]), L = t.HH(L, F, N, B, C, 11, w[45]), B = t.HH(B, L, F, N, b, 16, w[46]), N = t.HH(N, B, L, F, c, 23, w[47]), F = t.II(F, N, B, L, s, 6, w[48]), L = t.II(L, F, N, B, m, 10, w[49]), B = t.II(B, L, F, N, S, 15, w[50]), N = t.II(N, B, L, F, u, 21, w[51]), F = t.II(F, N, B, L, C, 6, w[52]), L = t.II(L, F, N, B, l, 10, w[53]), B = t.II(B, L, F, N, y, 15, w[54]), N = t.II(N, B, L, F, d, 21, w[55]), F = t.II(F, N, B, L, g, 6, w[56]), L = t.II(L, F, N, B, b, 10, w[57]), B = t.II(B, L, F, N, h, 15, w[58]), N = t.II(N, B, L, F, _, 21, w[59]), F = t.II(F, N, B, L, p, 6, w[60]), L = t.II(L, F, N, B, v, 10, w[61]), B = t.II(B, L, F, N, c, 15, w[62]), N = t.II(N, B, L, F, f, 21, w[63]), r[0] = r[0] + F | 0, r[1] = r[1] + N | 0, r[2] = r[2] + B | 0, r[3] = r[3] + L | 0
					}, t.prototype._doFinalize = function() {
						var e = this._data,
							t = e.words,
							i = 8 * this._nDataBytes,
							o = 8 * e.sigBytes;
						t[o >>> 5] |= 128 << 24 - o % 32;
						var n = Math.floor(i / 4294967296),
							a = i;
						t[15 + (o + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
						for (var r = this._hash, s = r.words, d = 0; d < 4; d++) {
							var c = s[d];
							s[d] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
						}
						return r
					}, t
				}(h),
				f = function() {
					function e(e) {
						this.cfg = Object.assign({
							keySize: 4,
							hasher: g,
							iterations: 1
						}, e)
					}
					return e.prototype.compute = function(e, t) {
						for (var i, o = new this.cfg.hasher, a = new n; a.words.length < this.cfg.keySize;) {
							i && o.update(i), i = o.update(e).finalize(t), o.reset();
							for (var r = 1; r < this.cfg.iterations; r++) i = o.finalize(i), o.reset();
							a.concat(i)
						}
						return a.sigBytes = 4 * this.cfg.keySize, a
					}, e
				}(),
				y = function() {
					function e() {}
					return e.execute = function(e, t, i, o) {
						o || (o = n.random(8));
						var a = new f({
								keySize: t + i
							}).compute(e, o),
							r = new n(a.words.slice(t), 4 * i);
						return a.sigBytes = 4 * t, new c({
							key: a,
							iv: r,
							salt: o
						})
					}, e
				}(),
				v = function() {
					function e() {}
					return e.encrypt = function(e, t, i, o) {
						var n = Object.assign({}, this.cfg, o);
						if (void 0 === n.kdf) throw new Error("missing kdf in config");
						var a = n.kdf.execute(i, e.keySize, e.ivSize);
						return void 0 !== a.iv && (n.iv = a.iv), u.encrypt.call(this, e, t, a.key, n).extend(a)
					}, e.decrypt = function(e, t, i, o) {
						var n = Object.assign({}, this.cfg, o);
						if (void 0 === n.format) throw new Error("missing format in config");
						if (t = this._parse(t, n.format), void 0 === n.kdf) throw new Error("the key derivation function must be set");
						var a = n.kdf.execute(i, e.keySize, e.ivSize, t.salt);
						return void 0 !== a.iv && (n.iv = a.iv), u.decrypt.call(this, e, t, a.key, n)
					}, e._parse = function(e, t) {
						return "string" == typeof e ? t.parse(e) : e
					}, e.cfg = {
						blockSize: 4,
						iv: new n([]),
						format: p,
						kdf: y
					}, e
				}(),
				C = function(e) {
					function t(t, i, o) {
						var n = e.call(this, Object.assign({
							blockSize: 1
						}, o)) || this;
						return n._xformMode = t, n._key = i, n.reset(), n
					}
					return i(t, e), t.createEncryptor = function(e, t) {
						return new this(this._ENC_XFORM_MODE, e, t)
					}, t.createDecryptor = function(e, t) {
						return new this(this._DEC_XFORM_MODE, e, t)
					}, t._createHelper = function(e) {
						return {
							encrypt: function(t, i, o) {
								return "string" == typeof i ? v.encrypt(e, t, i, o) : u.encrypt(e, t, i, o)
							},
							decrypt: function(t, i, o) {
								return "string" == typeof i ? v.decrypt(e, t, i, o) : u.decrypt(e, t, i, o)
							}
						}
					}, t.prototype.process = function(e) {
						return this._append(e), this._process()
					}, t.prototype.finalize = function(e) {
						return e && this._append(e), this._doFinalize()
					}, t._ENC_XFORM_MODE = 1, t._DEC_XFORM_MODE = 2, t.keySize = 4, t.ivSize = 4, t
				}(s),
				_ = function() {
					function e(e, t) {
						this.init(e, t)
					}
					return e.prototype.init = function(e, t) {
						this._cipher = e, this._iv = t
					}, e
				}(),
				S = function() {
					function e() {}
					return e.createEncryptor = function(e, t) {
						return new(0, this.Encryptor)(e, t)
					}, e.createDecryptor = function(e, t) {
						return new(0, this.Decryptor)(e, t)
					}, e.Encryptor = _, e.Decryptor = _, e
				}(),
				b = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.prototype.processBlock = function(e, t) {
						if (void 0 === this._cipher.cfg.blockSize) throw new Error("missing blockSize in cipher config");
						this.xorBlock(e, t, this._cipher.cfg.blockSize), this._cipher.encryptBlock(e, t), this._prevBlock = e.slice(t, t + this._cipher.cfg.blockSize)
					}, t.prototype.xorBlock = function(e, t, i) {
						var o;
						if (this._iv ? (o = this._iv, this._iv = void 0) : o = this._prevBlock, void 0 !== o)
							for (var n = 0; n < i; n++) e[t + n] ^= o[n]
					}, t
				}(_),
				F = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.prototype.processBlock = function(e, t) {
						if (void 0 === this._cipher.cfg.blockSize) throw new Error("missing blockSize in cipher config");
						var i = e.slice(t, t + this._cipher.cfg.blockSize);
						this._cipher.decryptBlock(e, t), this.xorBlock(e, t, this._cipher.cfg.blockSize), this._prevBlock = i
					}, t.prototype.xorBlock = function(e, t, i) {
						var o;
						if (this._iv ? (o = this._iv, this._iv = void 0) : o = this._prevBlock, void 0 !== o)
							for (var n = 0; n < i; n++) e[t + n] ^= o[n]
					}, t
				}(_),
				N = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.Encryptor = b, t.Decryptor = F, t
				}(S),
				B = function() {
					function e() {}
					return e.pad = function(e, t) {
						for (var i = 4 * t, o = i - e.sigBytes % i, a = o << 24 | o << 16 | o << 8 | o, r = [], s = 0; s < o; s += 4) r.push(a);
						var d = new n(r, o);
						e.concat(d)
					}, e.unpad = function(e) {
						var t = 255 & e.words[e.sigBytes - 1 >>> 2];
						e.sigBytes -= t
					}, e
				}(),
				L = function(e) {
					function t(t, i, o) {
						return e.call(this, t, i, Object.assign({
							blockSize: 4,
							mode: N,
							padding: B
						}, o)) || this
					}
					return i(t, e), t.prototype.reset = function() {
						if (e.prototype.reset.call(this), void 0 === this.cfg.mode) throw new Error("missing mode in config");
						var t;
						this._xformMode === this.constructor._ENC_XFORM_MODE ? t = this.cfg.mode.createEncryptor : (t = this.cfg.mode.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator === t ? this._mode.init(this, this.cfg.iv && this.cfg.iv.words) : (this._mode = t.call(this.cfg.mode, this, this.cfg.iv && this.cfg.iv.words), this._mode.__creator = t)
					}, t.prototype._doProcessBlock = function(e, t) {
						this._mode.processBlock(e, t)
					}, t.prototype._doFinalize = function() {
						if (void 0 === this.cfg.padding) throw new Error("missing padding in config");
						var e;
						if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
							if (void 0 === this.cfg.blockSize) throw new Error("missing blockSize in config");
							this.cfg.padding.pad(this._data, this.cfg.blockSize), e = this._process(!0)
						} else e = this._process(!0), this.cfg.padding.unpad(e);
						return e
					}, t
				}(C),
				D = [],
				T = [],
				x = [],
				I = [],
				P = [],
				M = [],
				A = [],
				k = [],
				G = [],
				O = [];
			(function() {
				for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
				var i = 0,
					o = 0;
				for (t = 0; t < 256; t++) {
					var n = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
					n = n >>> 8 ^ 255 & n ^ 99, D[i] = n, T[n] = i;
					var a = e[i],
						r = e[a],
						s = e[r],
						d = 257 * e[n] ^ 16843008 * n;
					x[i] = d << 24 | d >>> 8, I[i] = d << 16 | d >>> 16, P[i] = d << 8 | d >>> 24, M[i] = d, d = 16843009 * s ^ 65537 * r ^ 257 * a ^ 16843008 * i, A[n] = d << 24 | d >>> 8, k[n] = d << 16 | d >>> 16, G[n] = d << 8 | d >>> 24, O[n] = d, i ? (i = a ^ e[e[e[s ^ a]]], o ^= e[e[o]]) : i = o = 1
				}
			})();
			var R = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
				E = function(e) {
					function t(t, i, o) {
						return e.call(this, t, i, o) || this
					}
					return i(t, e), t.prototype.reset = function() {
						if (e.prototype.reset.call(this), !this._nRounds || this._keyPriorReset !== this._key) {
							for (var t = this._keyPriorReset = this._key, i = t.words, o = t.sigBytes / 4, n = 4 * ((this._nRounds = o + 6) + 1), a = this._keySchedule = [], r = 0; r < n; r++)
								if (r < o) a[r] = i[r];
								else {
									var s = a[r - 1];
									r % o ? o > 6 && r % o == 4 && (s = D[s >>> 24] << 24 | D[s >>> 16 & 255] << 16 | D[s >>> 8 & 255] << 8 | D[255 & s]) : (s = D[(s = s << 8 | s >>> 24) >>> 24] << 24 | D[s >>> 16 & 255] << 16 | D[s >>> 8 & 255] << 8 | D[255 & s], s ^= R[r / o | 0] << 24), a[r] = a[r - o] ^ s
								} for (var d = this._invKeySchedule = [], c = 0; c < n; c++) {
								r = n - c, s = void 0;
								s = c % 4 ? a[r] : a[r - 4], d[c] = c < 4 || r <= 4 ? s : A[D[s >>> 24]] ^ k[D[s >>> 16 & 255]] ^ G[D[s >>> 8 & 255]] ^ O[D[255 & s]]
							}
						}
					}, t.prototype.encryptBlock = function(e, t) {
						this._doCryptBlock(e, t, this._keySchedule, x, I, P, M, D)
					}, t.prototype.decryptBlock = function(e, t) {
						var i = e[t + 1];
						e[t + 1] = e[t + 3], e[t + 3] = i, this._doCryptBlock(e, t, this._invKeySchedule, A, k, G, O, T), i = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = i
					}, t.prototype._doCryptBlock = function(e, t, i, o, n, a, r, s) {
						for (var d = e[t] ^ i[0], c = e[t + 1] ^ i[1], l = e[t + 2] ^ i[2], p = e[t + 3] ^ i[3], u = 4, h = 1; h < this._nRounds; h++) {
							var w = o[d >>> 24] ^ n[c >>> 16 & 255] ^ a[l >>> 8 & 255] ^ r[255 & p] ^ i[u++],
								m = o[c >>> 24] ^ n[l >>> 16 & 255] ^ a[p >>> 8 & 255] ^ r[255 & d] ^ i[u++],
								g = o[l >>> 24] ^ n[p >>> 16 & 255] ^ a[d >>> 8 & 255] ^ r[255 & c] ^ i[u++],
								f = o[p >>> 24] ^ n[d >>> 16 & 255] ^ a[c >>> 8 & 255] ^ r[255 & l] ^ i[u++];
							d = w, c = m, l = g, p = f
						}
						var y = (s[d >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ i[u++],
							v = (s[c >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & d]) ^ i[u++],
							C = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & c]) ^ i[u++],
							_ = (s[p >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & l]) ^ i[u++];
						e[t] = y, e[t + 1] = v, e[t + 2] = C, e[t + 3] = _
					}, t.keySize = 8, t
				}(L),
				U = [],
				W = [],
				H = [],
				j = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.prototype.reset = function() {
						e.prototype.reset.call(this), this._hash = new n(U.slice(0))
					}, t.prototype._doProcessBlock = function(e, t) {
						for (var i = this._hash.words, o = i[0], n = i[1], a = i[2], r = i[3], s = i[4], d = i[5], c = i[6], l = i[7], p = 0; p < 64; p++) {
							if (p < 16) H[p] = 0 | e[t + p];
							else {
								var u = H[p - 15],
									h = (u << 25 | u >>> 7) ^ (u << 14 | u >>> 18) ^ u >>> 3,
									w = H[p - 2],
									m = (w << 15 | w >>> 17) ^ (w << 13 | w >>> 19) ^ w >>> 10;
								H[p] = h + H[p - 7] + m + H[p - 16]
							}
							var g = o & n ^ o & a ^ n & a,
								f = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
								y = l + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & d ^ ~s & c) + W[p] + H[p];
							l = c, c = d, d = s, s = r + y | 0, r = a, a = n, n = o, o = y + (f + g) | 0
						}
						i[0] = i[0] + o | 0, i[1] = i[1] + n | 0, i[2] = i[2] + a | 0, i[3] = i[3] + r | 0, i[4] = i[4] + s | 0, i[5] = i[5] + d | 0, i[6] = i[6] + c | 0, i[7] = i[7] + l | 0
					}, t.prototype._doFinalize = function() {
						var e = 8 * this._nDataBytes,
							t = 8 * this._data.sigBytes;
						return this._data.words[t >>> 5] |= 128 << 24 - t % 32, this._data.words[14 + (t + 64 >>> 9 << 4)] = Math.floor(e / 4294967296), this._data.words[15 + (t + 64 >>> 9 << 4)] = e, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash
					}, t
				}(h),
				V = function() {
					function e() {}
					return e.pad = function(e, t) {}, e.unpad = function(e) {}, e
				}(),
				q = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.prototype.processBlock = function(e, t) {
						this._cipher.encryptBlock(e, t)
					}, t
				}(_),
				J = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.prototype.processBlock = function(e, t) {
						this._cipher.decryptBlock(e, t)
					}, t
				}(_),
				z = function(e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i(t, e), t.Encryptor = q, t.Decryptor = J, t
				}(S),
				K = {
					BlockCipher: L,
					WordArray: n,
					CipherParams: c,
					Hasher: h,
					SerializableCipher: u,
					PasswordBasedCipher: v
				},
				Y = {
					AES: E,
					SHA256: j
				},
				X = {
					Utf8: r,
					Hex: o
				},
				Z = {
					NoPadding: V,
					PKCS7: B
				},
				Q = {
					CBC: N,
					ECB: z
				},
				$ = K.BlockCipher._createHelper(Y.AES),
				ee = K.Hasher._createHelper(Y.SHA256);
			e.lib = K, e.algo = Y, e.enc = X, e.pad = Z, e.mode = Q, e.AES = $, e.SHA256 = ee, e.\u0275l = E, e.\u0275m = j, e.\u0275p = o, e.\u0275o = a, e.\u0275n = r, e.\u0275g = d, e.\u0275a = L, e.\u0275c = s, e.\u0275b = C, e.\u0275f = c, e.\u0275i = h, e.\u0275k = v, e.\u0275j = u, e.\u0275e = n, e.\u0275t = S, e.\u0275s = N, e.\u0275u = z, e.\u0275q = V, e.\u0275r = B, Object.defineProperty(e, "__esModule", {
				value: !0
			})
		})
	}, {}],
	13: [function(e, t, i) {
		"use strict";
		t.exports = e("./src/index-minimal")
	}, {
		"./src/index-minimal": 14
	}],
	14: [function(e, t, i) {
		"use strict";
		var o = i;

		function n() {
			o.Reader._configure(o.BufferReader), o.util._configure()
		}
		o.build = "minimal", o.Writer = e("./writer"), o.BufferWriter = e("./writer_buffer"), o.Reader = e("./reader"), o.BufferReader = e("./reader_buffer"), o.util = e("./util/minimal"), o.rpc = e("./rpc"), o.roots = e("./roots"), o.configure = n, o.Writer._configure(o.BufferWriter), n()
	}, {
		"./reader": 15,
		"./reader_buffer": 16,
		"./roots": 17,
		"./rpc": 18,
		"./util/minimal": 21,
		"./writer": 22,
		"./writer_buffer": 23
	}],
	15: [function(e, t, i) {
		"use strict";
		t.exports = d;
		var o, n = e("./util/minimal"),
			a = n.LongBits,
			r = n.utf8;

		function s(e, t) {
			return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
		}

		function d(e) {
			this.buf = e, this.pos = 0, this.len = e.length
		}
		var c = "undefined" != typeof Uint8Array ? function(e) {
			if (e instanceof Uint8Array || Array.isArray(e)) return new d(e);
			throw Error("illegal buffer")
		} : function(e) {
			if (Array.isArray(e)) return new d(e);
			throw Error("illegal buffer")
		};

		function l() {
			var e = new a(0, 0),
				t = 0;
			if (!(this.len - this.pos > 4)) {
				for (; t < 3; ++t) {
					if (this.pos >= this.len) throw s(this);
					if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e
				}
				return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
			}
			for (; t < 4; ++t)
				if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
			if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
			if (t = 0, this.len - this.pos > 4) {
				for (; t < 5; ++t)
					if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
			} else
				for (; t < 5; ++t) {
					if (this.pos >= this.len) throw s(this);
					if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
				}
			throw Error("invalid varint encoding")
		}

		function p(e, t) {
			return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
		}

		function u() {
			if (this.pos + 8 > this.len) throw s(this, 8);
			return new a(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4))
		}
		d.create = n.Buffer ? function(e) {
			return (d.create = function(e) {
				return n.Buffer.isBuffer(e) ? new o(e) : c(e)
			})(e)
		} : c, d.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, d.prototype.uint32 = function() {
			var e = 4294967295;
			return function() {
				if (e = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return e;
				if (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return e;
				if (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return e;
				if (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return e;
				if (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return e;
				if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
				return e
			}
		}(), d.prototype.int32 = function() {
			return 0 | this.uint32()
		}, d.prototype.sint32 = function() {
			var e = this.uint32();
			return e >>> 1 ^ -(1 & e) | 0
		}, d.prototype.bool = function() {
			return 0 !== this.uint32()
		}, d.prototype.fixed32 = function() {
			if (this.pos + 4 > this.len) throw s(this, 4);
			return p(this.buf, this.pos += 4)
		}, d.prototype.sfixed32 = function() {
			if (this.pos + 4 > this.len) throw s(this, 4);
			return 0 | p(this.buf, this.pos += 4)
		}, d.prototype.float = function() {
			if (this.pos + 4 > this.len) throw s(this, 4);
			var e = n.float.readFloatLE(this.buf, this.pos);
			return this.pos += 4, e
		}, d.prototype.double = function() {
			if (this.pos + 8 > this.len) throw s(this, 4);
			var e = n.float.readDoubleLE(this.buf, this.pos);
			return this.pos += 8, e
		}, d.prototype.bytes = function() {
			var e = this.uint32(),
				t = this.pos,
				i = this.pos + e;
			if (i > this.len) throw s(this, e);
			return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, i) : t === i ? new this.buf.constructor(0) : this._slice.call(this.buf, t, i)
		}, d.prototype.string = function() {
			var e = this.bytes();
			return r.read(e, 0, e.length)
		}, d.prototype.skip = function(e) {
			if ("number" == typeof e) {
				if (this.pos + e > this.len) throw s(this, e);
				this.pos += e
			} else
				do {
					if (this.pos >= this.len) throw s(this)
				} while (128 & this.buf[this.pos++]);
			return this
		}, d.prototype.skipType = function(e) {
			switch (e) {
				case 0:
					this.skip();
					break;
				case 1:
					this.skip(8);
					break;
				case 2:
					this.skip(this.uint32());
					break;
				case 3:
					for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
					break;
				case 5:
					this.skip(4);
					break;
				default:
					throw Error("invalid wire type " + e + " at offset " + this.pos)
			}
			return this
		}, d._configure = function(e) {
			o = e;
			var t = n.Long ? "toLong" : "toNumber";
			n.merge(d.prototype, {
				int64: function() {
					return l.call(this)[t](!1)
				},
				uint64: function() {
					return l.call(this)[t](!0)
				},
				sint64: function() {
					return l.call(this).zzDecode()[t](!1)
				},
				fixed64: function() {
					return u.call(this)[t](!0)
				},
				sfixed64: function() {
					return u.call(this)[t](!1)
				}
			})
		}
	}, {
		"./util/minimal": 21
	}],
	16: [function(e, t, i) {
		"use strict";
		t.exports = a;
		var o = e("./reader");
		(a.prototype = Object.create(o.prototype)).constructor = a;
		var n = e("./util/minimal");

		function a(e) {
			o.call(this, e)
		}
		n.Buffer && (a.prototype._slice = n.Buffer.prototype.slice), a.prototype.string = function() {
			var e = this.uint32();
			return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len))
		}
	}, {
		"./reader": 15,
		"./util/minimal": 21
	}],
	17: [function(e, t, i) {
		"use strict";
		t.exports = {}
	}, {}],
	18: [function(e, t, i) {
		"use strict";
		i.Service = e("./rpc/service")
	}, {
		"./rpc/service": 19
	}],
	19: [function(e, t, i) {
		"use strict";
		t.exports = n;
		var o = e("../util/minimal");

		function n(e, t, i) {
			if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
			o.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(i)
		}(n.prototype = Object.create(o.EventEmitter.prototype)).constructor = n, n.prototype.rpcCall = function e(t, i, n, a, r) {
			if (!a) throw TypeError("request must be specified");
			var s = this;
			if (!r) return o.asPromise(e, s, t, i, n, a);
			if (s.rpcImpl) try {
				return s.rpcImpl(t, i[s.requestDelimited ? "encodeDelimited" : "encode"](a).finish(), function(e, i) {
					if (e) return s.emit("error", e, t), r(e);
					if (null !== i) {
						if (!(i instanceof n)) try {
							i = n[s.responseDelimited ? "decodeDelimited" : "decode"](i)
						} catch (e) {
							return s.emit("error", e, t), r(e)
						}
						return s.emit("data", i, t), r(null, i)
					}
					s.end(!0)
				})
			} catch (e) {
				return s.emit("error", e, t), void setTimeout(function() {
					r(e)
				}, 0)
			} else setTimeout(function() {
				r(Error("already ended"))
			}, 0)
		}, n.prototype.end = function(e) {
			return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
		}
	}, {
		"../util/minimal": 21
	}],
	20: [function(e, t, i) {
		"use strict";
		t.exports = n;
		var o = e("../util/minimal");

		function n(e, t) {
			this.lo = e >>> 0, this.hi = t >>> 0
		}
		var a = n.zero = new n(0, 0);
		a.toNumber = function() {
			return 0
		}, a.zzEncode = a.zzDecode = function() {
			return this
		}, a.length = function() {
			return 1
		};
		var r = n.zeroHash = "\0\0\0\0\0\0\0\0";
		n.fromNumber = function(e) {
			if (0 === e) return a;
			var t = e < 0;
			t && (e = -e);
			var i = e >>> 0,
				o = (e - i) / 4294967296 >>> 0;
			return t && (o = ~o >>> 0, i = ~i >>> 0, ++i > 4294967295 && (i = 0, ++o > 4294967295 && (o = 0))), new n(i, o)
		}, n.from = function(e) {
			if ("number" == typeof e) return n.fromNumber(e);
			if (o.isString(e)) {
				if (!o.Long) return n.fromNumber(parseInt(e, 10));
				e = o.Long.fromString(e)
			}
			return e.low || e.high ? new n(e.low >>> 0, e.high >>> 0) : a
		}, n.prototype.toNumber = function(e) {
			if (!e && this.hi >>> 31) {
				var t = 1 + ~this.lo >>> 0,
					i = ~this.hi >>> 0;
				return t || (i = i + 1 >>> 0), -(t + 4294967296 * i)
			}
			return this.lo + 4294967296 * this.hi
		}, n.prototype.toLong = function(e) {
			return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
				low: 0 | this.lo,
				high: 0 | this.hi,
				unsigned: Boolean(e)
			}
		};
		var s = String.prototype.charCodeAt;
		n.fromHash = function(e) {
			return e === r ? a : new n((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0)
		}, n.prototype.toHash = function() {
			return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
		}, n.prototype.zzEncode = function() {
			var e = this.hi >> 31;
			return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
		}, n.prototype.zzDecode = function() {
			var e = -(1 & this.lo);
			return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
		}, n.prototype.length = function() {
			var e = this.lo,
				t = (this.lo >>> 28 | this.hi << 4) >>> 0,
				i = this.hi >>> 24;
			return 0 === i ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : i < 128 ? 9 : 10
		}
	}, {
		"../util/minimal": 21
	}],
	21: [function(e, t, i) {
		(function(t) {
			"use strict";
			var o = i;

			function n(e, t, i) {
				for (var o = Object.keys(t), n = 0; n < o.length; ++n) void 0 !== e[o[n]] && i || (e[o[n]] = t[o[n]]);
				return e
			}

			function a(e) {
				function t(e, i) {
					if (!(this instanceof t)) return new t(e, i);
					Object.defineProperty(this, "message", {
						get: function() {
							return e
						}
					}), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
						value: (new Error).stack || ""
					}), i && n(this, i)
				}
				return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
					get: function() {
						return e
					}
				}), t.prototype.toString = function() {
					return this.name + ": " + this.message
				}, t
			}
			o.asPromise = e("@protobufjs/aspromise"), o.base64 = e("@protobufjs/base64"), o.EventEmitter = e("@protobufjs/eventemitter"), o.float = e("@protobufjs/float"), o.inquire = e("@protobufjs/inquire"), o.utf8 = e("@protobufjs/utf8"), o.pool = e("@protobufjs/pool"), o.LongBits = e("./longbits"), o.global = "undefined" != typeof window && window || void 0 !== t && t || "undefined" != typeof self && self || this, o.emptyArray = Object.freeze ? Object.freeze([]) : [], o.emptyObject = Object.freeze ? Object.freeze({}) : {}, o.isNode = Boolean(o.global.process && o.global.process.versions && o.global.process.versions.node), o.isInteger = Number.isInteger || function(e) {
				return "number" == typeof e && isFinite(e) && Math.floor(e) === e
			}, o.isString = function(e) {
				return "string" == typeof e || e instanceof String
			}, o.isObject = function(e) {
				return e && "object" == typeof e
			}, o.isset = o.isSet = function(e, t) {
				var i = e[t];
				return !(null == i || !e.hasOwnProperty(t)) && ("object" != typeof i || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
			}, o.Buffer = function() {
				try {
					var e = o.inquire("buffer").Buffer;
					return e.prototype.utf8Write ? e : null
				} catch (e) {
					return null
				}
			}(), o._Buffer_from = null, o._Buffer_allocUnsafe = null, o.newBuffer = function(e) {
				return "number" == typeof e ? o.Buffer ? o._Buffer_allocUnsafe(e) : new o.Array(e) : o.Buffer ? o._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
			}, o.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, o.Long = o.global.dcodeIO && o.global.dcodeIO.Long || o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function(e) {
				return e ? o.LongBits.from(e).toHash() : o.LongBits.zeroHash
			}, o.longFromHash = function(e, t) {
				var i = o.LongBits.fromHash(e);
				return o.Long ? o.Long.fromBits(i.lo, i.hi, t) : i.toNumber(Boolean(t))
			}, o.merge = n, o.lcFirst = function(e) {
				return e.charAt(0).toLowerCase() + e.substring(1)
			}, o.newError = a, o.ProtocolError = a("ProtocolError"), o.oneOfGetter = function(e) {
				for (var t = {}, i = 0; i < e.length; ++i) t[e[i]] = 1;
				return function() {
					for (var e = Object.keys(this), i = e.length - 1; i > -1; --i)
						if (1 === t[e[i]] && void 0 !== this[e[i]] && null !== this[e[i]]) return e[i]
				}
			}, o.oneOfSetter = function(e) {
				return function(t) {
					for (var i = 0; i < e.length; ++i) e[i] !== t && delete this[e[i]]
				}
			}, o.toJSONOptions = {
				longs: String,
				enums: String,
				bytes: String,
				json: !0
			}, o._configure = function() {
				var e = o.Buffer;
				e ? (o._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, i) {
					return new e(t, i)
				}, o._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
					return new e(t)
				}) : o._Buffer_from = o._Buffer_allocUnsafe = null
			}
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		"./longbits": 20,
		"@protobufjs/aspromise": 5,
		"@protobufjs/base64": 6,
		"@protobufjs/eventemitter": 7,
		"@protobufjs/float": 8,
		"@protobufjs/inquire": 9,
		"@protobufjs/pool": 10,
		"@protobufjs/utf8": 11
	}],
	22: [function(e, t, i) {
		"use strict";
		t.exports = l;
		var o, n = e("./util/minimal"),
			a = n.LongBits,
			r = n.base64,
			s = n.utf8;

		function d(e, t, i) {
			this.fn = e, this.len = t, this.next = void 0, this.val = i
		}

		function c() {}

		function l() {
			this.len = 0, this.head = new d(c, 0, 0), this.tail = this.head, this.states = null
		}

		function p(e, t, i) {
			t[i] = 255 & e
		}

		function u(e, t) {
			this.len = e, this.next = void 0, this.val = t
		}

		function h(e, t, i) {
			for (; e.hi;) t[i++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
			for (; e.lo > 127;) t[i++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
			t[i++] = e.lo
		}

		function w(e, t, i) {
			t[i] = 255 & e, t[i + 1] = e >>> 8 & 255, t[i + 2] = e >>> 16 & 255, t[i + 3] = e >>> 24
		}
		l.create = n.Buffer ? function() {
			return (l.create = function() {
				return new o
			})()
		} : function() {
			return new l
		}, l.alloc = function(e) {
			return new n.Array(e)
		}, n.Array !== Array && (l.alloc = n.pool(l.alloc, n.Array.prototype.subarray)), l.prototype._push = function(e, t, i) {
			return this.tail = this.tail.next = new d(e, t, i), this.len += t, this
		}, u.prototype = Object.create(d.prototype), u.prototype.fn = function(e, t, i) {
			for (; e > 127;) t[i++] = 127 & e | 128, e >>>= 7;
			t[i] = e
		}, l.prototype.uint32 = function(e) {
			return this.len += (this.tail = this.tail.next = new u((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
		}, l.prototype.int32 = function(e) {
			return e < 0 ? this._push(h, 10, a.fromNumber(e)) : this.uint32(e)
		}, l.prototype.sint32 = function(e) {
			return this.uint32((e << 1 ^ e >> 31) >>> 0)
		}, l.prototype.uint64 = function(e) {
			var t = a.from(e);
			return this._push(h, t.length(), t)
		}, l.prototype.int64 = l.prototype.uint64, l.prototype.sint64 = function(e) {
			var t = a.from(e).zzEncode();
			return this._push(h, t.length(), t)
		}, l.prototype.bool = function(e) {
			return this._push(p, 1, e ? 1 : 0)
		}, l.prototype.fixed32 = function(e) {
			return this._push(w, 4, e >>> 0)
		}, l.prototype.sfixed32 = l.prototype.fixed32, l.prototype.fixed64 = function(e) {
			var t = a.from(e);
			return this._push(w, 4, t.lo)._push(w, 4, t.hi)
		}, l.prototype.sfixed64 = l.prototype.fixed64, l.prototype.float = function(e) {
			return this._push(n.float.writeFloatLE, 4, e)
		}, l.prototype.double = function(e) {
			return this._push(n.float.writeDoubleLE, 8, e)
		};
		var m = n.Array.prototype.set ? function(e, t, i) {
			t.set(e, i)
		} : function(e, t, i) {
			for (var o = 0; o < e.length; ++o) t[i + o] = e[o]
		};
		l.prototype.bytes = function(e) {
			var t = e.length >>> 0;
			if (!t) return this._push(p, 1, 0);
			if (n.isString(e)) {
				var i = l.alloc(t = r.length(e));
				r.decode(e, i, 0), e = i
			}
			return this.uint32(t)._push(m, t, e)
		}, l.prototype.string = function(e) {
			var t = s.length(e);
			return t ? this.uint32(t)._push(s.write, t, e) : this._push(p, 1, 0)
		}, l.prototype.fork = function() {
			return this.states = new function(e) {
				this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
			}(this), this.head = this.tail = new d(c, 0, 0), this.len = 0, this
		}, l.prototype.reset = function() {
			return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new d(c, 0, 0), this.len = 0), this
		}, l.prototype.ldelim = function() {
			var e = this.head,
				t = this.tail,
				i = this.len;
			return this.reset().uint32(i), i && (this.tail.next = e.next, this.tail = t, this.len += i), this
		}, l.prototype.finish = function() {
			for (var e = this.head.next, t = this.constructor.alloc(this.len), i = 0; e;) e.fn(e.val, t, i), i += e.len, e = e.next;
			return t
		}, l._configure = function(e) {
			o = e
		}
	}, {
		"./util/minimal": 21
	}],
	23: [function(e, t, i) {
		"use strict";
		t.exports = r;
		var o = e("./writer");
		(r.prototype = Object.create(o.prototype)).constructor = r;
		var n = e("./util/minimal"),
			a = n.Buffer;

		function r() {
			o.call(this)
		}
		r.alloc = function(e) {
			return (r.alloc = n._Buffer_allocUnsafe)(e)
		};
		var s = a && a.prototype instanceof Uint8Array && "set" === a.prototype.set.name ? function(e, t, i) {
			t.set(e, i)
		} : function(e, t, i) {
			if (e.copy) e.copy(t, i, 0, e.length);
			else
				for (var o = 0; o < e.length;) t[i++] = e[o++]
		};

		function d(e, t, i) {
			e.length < 40 ? n.utf8.write(e, t, i) : t.utf8Write(e, i)
		}
		r.prototype.bytes = function(e) {
			n.isString(e) && (e = n._Buffer_from(e, "base64"));
			var t = e.length >>> 0;
			return this.uint32(t), t && this._push(s, t, e), this
		}, r.prototype.string = function(e) {
			var t = a.byteLength(e);
			return this.uint32(t), t && this._push(d, t, e), this
		}
	}, {
		"./util/minimal": 21,
		"./writer": 22
	}],
	ActivityWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "54308WAcRBF1pPugstiDD6d", "ActivityWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_data = [], t.Sprite_panelList = [], t.GetButton = null, t.Model = 1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					this.updateUi()
				}, t.prototype.updateUi = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1);
					var e = window.Data.nowServerLoginTime,
						t = window.FileData.getDataByKey("serverSevenDayTime");
					void 0 == t && (window.FileData.setFileData("serverSevenDayTime", e), t = e);
					var i = !1,
						o = window.FileData.getFileData("SevenDaysGetTime");
					void 0 != o && window.Func.timestampToTime5(o) == window.Func.timestampToTime5(e) && (window.Game.BtChangeEnabled(this.GetButton), i = !0);
					var n = 1,
						a = window.FileData.getDataByKey("SevenDaysGetTimes");
					void 0 != a && (n = i ? a : a + 1), n > 7 && (n = 1, window.FileData.setFileData("serverSevenDayTime", e)), this.m_nowDay = n;
					for (var r = window.JsonManager.getTable("SevenDays"), s = 0; s < 7; s++) {
						var d = r[s];
						d = window.Data.getGoodAwardNum(d);
						var c = s + 1 < n || i && s + 1 == n;
						this.Sprite_panelList[s].getChildByName("wcSprite").active = !!c, s < 6 && (window.Func._addSpritePic2(this.Sprite_panelList[s].getChildByName("goodSprite").getComponent(cc.Sprite), "texture/tps/common", "sm_" + d.Type, !1), window.Func._addSpritePic2(this.Sprite_panelList[s].getComponent(cc.Sprite), "texture/tps/window1_1", "bg3" + (c ? "_2" : ""), !1), c ? (this.Sprite_panelList[s].getChildByName("Label2").color = cc.color(159, 47, 0, 255), this.Sprite_panelList[s].getChildByName("Label2").getComponent(cc.LabelOutline).active = !0) : (this.Sprite_panelList[s].getChildByName("Label2").color = cc.color(243, 155, 0, 255), this.Sprite_panelList[s].getChildByName("Label2").getComponent(cc.LabelOutline).active = !1));
						var l = d.Num;
						if (11 == d.Type) {
							c || window.FileData.setFileData("SevenDaysGetType11", 0);
							var p = window.FileData.getFileData("SevenDaysGetType11");
							"number" == typeof p && p > 0 ? l = p : window.FileData.setFileData("SevenDaysGetType11", l)
						}
						this.Sprite_panelList[s].getChildByName("Label2").getComponent(cc.Label).string = "+" + window.Func.moneyChange(l)
					}
					var u = window.FileData.getFileData("activity_addScene");
					(i && 1 != u && 2 != this.Model && (this.Model = 2), window.Func.isHideWxUi() && (this.Model = 1, window.FileData.setFileData("activity_addScene", 2), this.node.getChildByName("bgSprite").getChildByName("Button2").active = !1), this.reloadPanel(), 2 == this.Model) && (0 == window.FileData.getFileData("activity_addScene") && window.FileData.setFileData("activity_addScene", 2))
				}, t.prototype.reloadPanel = function() {
					for (var e = 1; e < 3; e++) {
						var t = this.node.getChildByName("bgSprite").getChildByName("Button" + e);
						if (t && (window.Func._addSpritePic2(t.getComponent(cc.Sprite), "texture/tps/common", "bt_8_" + (e == this.Model ? 2 : 1), !1), 2 == e)) {
							var i = window.FileData.getFileData("activity_addScene");
							(window.Func.isQuarrySceenToMy() && 1 != i || 0 == i) && this.Model != e ? t.getChildByName("Sprite").active = !0 : t.getChildByName("Sprite").active = !1
						}
						var o = this.node.getChildByName("bgSprite").getChildByName("panel" + e);
						if (o && (o.active = e == this.Model), 2 == e) {
							var n = window.FileData.getFileData("activity_addScene");
							window.Game.BtChangeEnabled(o.getChildByName("getButton"), 1 != n)
						}
					}
				}, t.prototype.BtOk = function(e, t) {
					if (1 == t) {
						var i = window.JsonManager.getData("SevenDays", this.m_nowDay),
							o = [{
								type: i.Type,
								num: i.Num,
								step: 2
							}];
						11 == i.Type && window.FileData.setFileData("SevenDaysGetType11", i.Num), window.FileData.setFileData("SevenDaysGetTimes", this.m_nowDay), window.FileData.setFileData("SevenDaysGetTime", window.Data.nowServerLoginTime), window.Data.setGoodAward(o), window.Game.openAwardLayer3(o), this.m_nowDay < 7 && (this.Sprite_panelList[this.m_nowDay - 1].getChildByName("wcSprite").active = !0, window.Func._addSpritePic2(this.Sprite_panelList[this.m_nowDay - 1].getComponent(cc.Sprite), "texture/tps/window1_1", "bg3_2", !1)), window.Game.BtChangeEnabled(e.target)
					} else if (2 == t) {
						if (!window.Func.isQuarrySceenToMy()) return void window.Game.showAlertBar("C\u1ea7n m\u1edf t\u1eeb c\u1ed5ng gameNh\u1eadn\uff01");
						if (1 == window.FileData.getFileData("activity_addScene")) return;
						var n = [{
							type: 5,
							num: 3
						}, {
							type: 2,
							num: 100
						}];
						window.Data.setGoodAward(n), window.Game.openAwardLayer3(n), window.FileData.setFileData("activity_addScene", 1), this.reloadPanel()
					}
					window.FileData.saveFileData(!0)
				}, t.prototype.BtChange = function(e, t) {
					(t = parseInt(t)) != this.Model && (this.Model = t, this.reloadPanel())
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "Sprite_panelList", void 0), __decorate([a(cc.Node)], t.prototype, "GetButton", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.ActivityWindow = r, cc._RF.pop()
	}, {}],
	AdWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "429fdhtl+ROXZBzgrkyTfiJ", "AdWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.start = function() {
					this.node.getChildByName("Sprite").setPosition(-1e3, 193), this.node.getChildByName("Sprite").runAction(cc.moveTo(.2, -275, 193)), window.WxFunc.openBannerAd()
				}, t.prototype.updateUi = function(e) {
					window.Data.AdGameList = window.Data.AdGameList.sort(function(e, t) {
						return e.sort < t.sort ? -1 : e.sort > t.sort ? 1 : 0
					});
					for (var t = 1; t < 4; t++)
						for (var i = this.node.getChildByName("Sprite").getChildByName("panel" + t), o = 1; o < 5; o++) {
							var n = 4 * (t - 1) + o,
								a = window.Data.AdGameList[n - 1],
								r = i.getChildByName("panel" + o);
							if (r.active = !!a, a) {
								var s = r.getChildByName("iSprite").getComponent(cc.Sprite),
									d = window.Config.ShareServerIp + "ad_image/" + a.appKey + "-" + a.uTime + ".png";
								window.Func._addProtoPic(d, s, 80, 80, function() {}), r.getChildByName("Label").getComponent(cc.Label).string = a.name, r.getComponent(cc.Button) || r.addComponent(cc.Button);
								var c = r.getComponent(cc.Button);
								if (0 == c.clickEvents.length) {
									var l = new cc.Component.EventHandler;
									l.target = this.node, l.component = "AdWindow", l.handler = "BtClick", l.customEventData = "" + n, c.clickEvents.push(l)
								} else c.clickEvents[0].customEventData = "" + n
							}
						}
					window.Data.AdGameList && console.log("window['Data'].AdGameList", JSON.stringify(window.Data.AdGameList))
				}, t.prototype.BtClick = function(e, t) {
					t = parseInt(t), console.log("BtClick", t);
					var i = window.Data.AdGameList[t - 1];
					window.WxFunc.openApp(i.appKey)
				}, t.prototype.BtClose = function() {
					this.scheduleOnce(function() {
						this.node.removeFromParent(!0)
					}, .2), this.node.getChildByName("Sprite").runAction(cc.moveTo(.2, -1e3, 193)), window.WxFunc.hideBannerAd()
				}, t = __decorate([n], t)
			}(cc.Component));
		i.AdWindow = a, cc._RF.pop()
	}, {}],
	AlertBar: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e641860fgZFfLNyjqVizqPS", "AlertBar"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.tLabel = null, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.setTip = function(e) {
					this.tLabel.string = e
				}, __decorate([a(cc.Label)], t.prototype, "tLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.default = r, cc._RF.pop()
	}, {}],
	BaseScrollView: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "8bbf7WFORpKXKYU/KIboFXB", "BaseScrollView"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.cellItemPrefab = null, t.cellItemPanel = null, t.scrollView = null, t._horizontal = !1, t._vertical = !0, t.startSie = 20, t.spacing = 10, t.cellItemList = [], t.cellItemTempSize = null, t.lastContentPosition = cc.v2(0, 0), t.cellDatalist = [], t.isUpdateFrame = !0, t.m_isDelay = !0, t.m_isUpdate = !1, t
				}
				return __extends(t, e), Object.defineProperty(t.prototype, "horizontal", {
					get: function() {
						return this._horizontal
					},
					set: function(e) {
						this._horizontal = e, this._vertical = !e
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "vertical", {
					get: function() {
						return this._vertical
					},
					set: function(e) {
						this._horizontal = !e, this._vertical = e
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.start = function() {
					this.scrollView.content.on("position-changed", this._updateContentView.bind(this))
				}, t.prototype.openTouch = function() {
					this.scrollView.content.on("position-changed", this._updateContentView.bind(this))
				}, t.prototype.initCellDataList = function(e, t, i) {
					void 0 === t && (t = !0), void 0 === i && (i = !1), this.m_isDelay = t, this.cellDatalist = e, this.m_isUpdate = i, null != this.cellItemTempSize && this.reloadContentHeight()
				}, t.prototype.reloadContentHeight = function() {
					var e = this.cellDatalist.length * (this.cellItemTempSize.height + this.spacing) + 2 * this.startSie;
					this.scrollView.content.setContentSize(cc.size(this.scrollView.content.width, e))
				}, t.prototype.createCellList = function(e, t) {
					void 0 === e && (e = null), void 0 === t && (t = 6), this._vertical ? this._createVerticalCellList(e, t) : this._createHorizontalCellList()
				}, t.prototype._createVerticalCellList = function(e, t) {
					if (this.m_isUpdate)
						for (var i = this.cellDatalist.length; i < this.cellItemList.length; i++) this.cellItemList[i] && (this.cellItemList[i].active = !1);
					else this.node.stopAllActions(), this.scrollView.scrollToTop(.1), this.scrollView.content.removeAllChildren(), this.cellItemList = [], this.lastContentPosition = cc.v2(0, 0);
					for (var o = t, n = (i = -1, this), a = function() {
							var t, a;
							i++, n.cellItemList[i] && n.m_isUpdate ? t = n.cellItemList[i] : (t = null != n.cellItemPanel ? cc.instantiate(n.cellItemPanel) : cc.instantiate(n.cellItemPrefab), n.scrollView.content.addChild(t), n.cellItemList.push(t)), t.active = !0, null != e && t.setContentSize(t.getContentSize().width, e), 0 == i && (n.cellItemTempSize = t.getContentSize(), o = 2 * Math.ceil(n.node.height / t.height), n.reloadContentHeight()), t.cellID = i, null != n.cellItemPanel ? n.updateView(i, n.cellDatalist[i], t) : (a = t.getComponent(n.cellItemPrefab.name)) && a.updateView && a.updateView(i, n.cellDatalist[i], t), t.x = 0, t.y = -i * (n.cellItemTempSize.height + n.spacing) - t.height / 2
						}, r = 0; r < this.cellDatalist.length; r++) {
						if (r > o - 1) return;
						this.m_isDelay ? this.scrollView.scheduleOnce(function() {
							a()
						}, .1 + .01 * r) : a()
					}
				}, t.prototype._createHorizontalCellList = function() {
					this.scrollView.content.removeAllChildren();
					for (var e = 10, t = 0; t < this.cellDatalist.length; t++) {
						if (t > e - 1) return;
						var i = cc.instantiate(this.cellItemPrefab);
						if (0 == t) {
							this.cellItemTempSize = i.getContentSize(), e = 2 * Math.ceil(this.node.width / i.width);
							var o = this.cellDatalist.length * (this.cellItemTempSize.width + this.spacing);
							this.scrollView.content.setContentSize(cc.size(o, this.scrollView.content.height))
						}
						i.cellID = t, this.scrollView.content.addChild(i), this.cellItemList.push(i);
						var n = this.cellItemList[t].getComponent(this.cellItemPrefab.name);
						n && n.updateView && n.updateView(t, this.cellDatalist[t]), i.x = (this.cellItemTempSize.width + this.spacing) * t
					}
				}, t.prototype._getPositionInView = function(e) {
					if (!e.parent || !e.parent.convertToWorldSpaceAR) return cc.v2(0, 0);
					var t = e.parent.convertToWorldSpaceAR(e.position);
					return this.node.convertToNodeSpaceAR(t)
				}, t.prototype._updateContentView = function() {
					this._vertical ? this.isUpdateFrame && (this.isUpdateFrame = !1, this.scheduleOnce(this._updateVerticalContentView.bind(this), 0)) : this.isUpdateFrame && (this.isUpdateFrame = !1, this.scheduleOnce(this._updateHorizontalContentView.bind(this), 0))
				}, t.prototype._updateVerticalContentView = function() {
					if (void 0 != this.cellItemTempSize) {
						for (var e = this.scrollView.content.y - 20 < this.lastContentPosition.y, t = (this.cellItemTempSize.height + this.spacing) * this.cellItemList.length, i = t / 4, o = 0, n = 0; n < this.cellItemList.length; n++) {
							var a = this._getPositionInView(this.cellItemList[n]);
							if (e) {
								if (o = this.cellItemList[n].y + t, a.y < -3 * i && o <= 0) {
									this.cellItemList[n].y = o;
									var r = this.cellItemList[n].cellID - this.cellItemList.length;
									if (null != this.cellItemPanel) this.updateView(r, this.cellDatalist[r], this.cellItemList[n]);
									else(s = this.cellItemList[n].getComponent(this.cellItemPrefab.name)) && s.updateView && s.updateView(r, this.cellDatalist[r], this.cellItemList[n]);
									this.cellItemList[n].cellID = r
								}
							} else if (o = this.cellItemList[n].y - t, a.y > i && o > -this.scrollView.content.height) {
								this.cellItemList[n].y = o;
								var s;
								r = this.cellItemList[n].cellID + this.cellItemList.length;
								if (null != this.cellItemPanel) this.updateView(r, this.cellDatalist[r], this.cellItemList[n]);
								else(s = this.cellItemList[n].getComponent(this.cellItemPrefab.name)) && s.updateView && s.updateView(r, this.cellDatalist[r], this.cellItemList[n]), s && s.addSyncData && r == this.cellDatalist.length - 1 && this.cellDatalist.length >= 50 && s.addSyncData(this.cellDatalist.length + 1, this.cellDatalist.length + 50, this.cellDatalist[r].type, this.cellDatalist[r].step);
								this.cellItemList[n].cellID = r
							}
						}
						this.lastContentPosition = this.scrollView.content.position, this.isUpdateFrame = !0
					}
				}, t.prototype._updateHorizontalContentView = function() {
					for (var e = this.scrollView.content.x < this.lastContentPosition.x, t = (this.cellItemTempSize.width + this.spacing) * this.cellItemList.length, i = t / 4, o = 0, n = 0; n < this.cellItemList.length; n++) {
						var a = this._getPositionInView(this.cellItemList[n]);
						if (e) {
							if (o = this.cellItemList[n].x + t, a.x < -i && o < this.scrollView.content.width) {
								this.cellItemList[n].x = o;
								var r = this.cellItemList[n].cellID + this.cellItemList.length;
								(s = this.cellItemList[n].getComponent(this.cellItemPrefab.name)) && s.updateView && s.updateView(r, this.cellDatalist[r]), this.cellItemList[n].cellID = r
							}
						} else if (o = this.cellItemList[n].x - t, a.x > 3 * i && o >= 0) {
							this.cellItemList[n].x = o;
							var s;
							r = this.cellItemList[n].cellID - this.cellItemList.length;
							(s = this.cellItemList[n].getComponent(this.cellItemPrefab.name)) && s.updateView && s.updateView(r, this.cellDatalist[r]), this.cellItemList[n].cellID = r
						}
					}
					this.lastContentPosition = this.scrollView.content.position, this.isUpdateFrame = !0
				}, __decorate([a(cc.Prefab)], t.prototype, "cellItemPrefab", void 0), __decorate([a(cc.Node)], t.prototype, "cellItemPanel", void 0), __decorate([a(cc.ScrollView)], t.prototype, "scrollView", void 0), __decorate([a({
					tooltip: "Cu\u1ed9n d\u1ecdc?"
				} || cc.Boolean)], t.prototype, "_horizontal", void 0), __decorate([a({
					tooltip: "Cu\u1ed9n d\u1ecdc?"
				})], t.prototype, "horizontal", null), __decorate([a({
					tooltip: "Cu\u1ed9n ngang?"
				} || cc.Boolean)], t.prototype, "_vertical", void 0), __decorate([a({
					tooltip: "Cu\u1ed9n ngang?"
				})], t.prototype, "vertical", null), __decorate([a(cc.Float)], t.prototype, "startSie", void 0), __decorate([a(cc.Float)], t.prototype, "spacing", void 0), t = __decorate([n], t)
			}(cc.ScrollView);
		i.BaseScrollView = r, cc._RF.pop()
	}, {}],
	CbtLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e7f5deM/w9HiL/hnh4c8w+m", "CbtLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.boxPanelList = [], t.timeOutLabel = null, t.btNode = null, t.m_max_timeout = 60, t.m_timeout = 0, t
				}
				return __extends(t, e), t.prototype.start = function() {
					this.reloadUi()
				}, t.prototype.reloadUi = function() {
					this.m_max_timeout = window.Constant.CBT_CD_TIME;
					for (var e = 0; e < window.Constant.CBT_BOX_NUM; e++) {
						this.boxPanelList[e] = this.node.getChildByName("Sprite" + (e + 1));
						var t = new cc.Component.EventHandler;
						t.target = this.node, t.component = "CbtLayer", t.handler = "BtOk", t.customEventData = "" + e, this.boxPanelList[e].getComponent(cc.Button).clickEvents.push(t)
					}
					var i = this.getCBTFileData("shareTime");
					i > 0 && window.Func.getTimeUnix() - i < this.m_max_timeout && window.Func.getTimeUnix() - i > 0 && (this.m_timeout = this.m_max_timeout - (window.Func.getTimeUnix() - i), window.Game.BtChangeEnabled(this.btNode, !1)), this.updateUi()
				}, t.prototype.update = function(e) {
					this.m_timeout > 0 ? (this.m_timeout = Math.max(0, this.m_timeout - e), 0 == this.m_timeout && window.Game.BtChangeEnabled(this.btNode, !0), this.timeOutLabel.string = "00:00:" + (this.m_timeout < 10 ? "0" : "") + Math.floor(this.m_timeout), this.timeOutLabel.node.active = !0) : this.timeOutLabel.node.active = !1
				}, t.prototype.updateUi = function() {
					for (var e = 0; e < this.boxPanelList.length; e++) {
						var t = this.boxPanelList[e],
							i = this.getCBTFileData(e),
							o = "icon_cbt_1";
						1 == i ? o = e == this.boxPanelList.length - 1 ? "icon_cbt_3_1" : "icon_cbt_2_1" : 2 == i && (o = e == this.boxPanelList.length - 1 ? "icon_cbt_3_2" : "icon_cbt_2_2"), window.Func._addSpritePic2(t.getComponent(cc.Sprite), "texture/tps/common", o), 1 == i ? t.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, 25), cc.rotateTo(.1, -25), cc.rotateTo(.1, 0), cc.delayTime(.5)))) : (t.stopAllActions(), t.rotation = 0)
					}
				}, t.prototype.BtOk = function(e, t) {
					t = parseInt(t), 1 == this.getCBTFileData(t) && (this.setCBTFileData(t, 2), this.updateUi(), window.Data.addGoodsList(window.JsonManager.getData("TreasureMap", t + 1)))
				}, t.prototype.BtShare = function() {
					var e = this;
					window.WxFunc.createShare(window.Constant.shareIdList.CBT, function() {
						var t = e.getNextCBTId();
						t >= 0 && (e.setCBTFileData(t, 1), e.updateUi(), e.m_timeout = e.m_max_timeout, window.Game.BtChangeEnabled(e.btNode, !1), e.timeOutLabel.string = "00:01:00", e.timeOutLabel.node.active = !0, e.setCBTFileData("shareTime", window.Func.getTimeUnix()))
					})
				}, t.prototype.BtClose = function() {
					window.FileData.saveFileData(), this.node.removeFromParent(!0)
				}, t.prototype.getNextCBTId = function() {
					for (var e = 0; e < this.boxPanelList.length; e++) {
						if (0 == this.getCBTFileData(e)) return e;
						if (e == this.boxPanelList.length - 1) return -1
					}
					return 0
				}, t.prototype.getCBTFileData = function(e) {
					var t = window.FileData.getFileData(),
						i = 0;
					return void 0 != t.cbt && void 0 != t.cbt[e] && (i = t.cbt[e]), i
				}, t.prototype.setCBTFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.cbt && "" != i.cbt || (i.cbt = {}), i.cbt[e] = t, window.FileData.setFileData("cbt", i.cbt)
				}, __decorate([a(cc.Node)], t.prototype, "boxPanelList", void 0), __decorate([a(cc.Label)], t.prototype, "timeOutLabel", void 0), __decorate([a(cc.Node)], t.prototype, "btNode", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.CbtLayer = r, cc._RF.pop()
	}, {}],
	ChangeLoginWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "15dc1elAdtP9Y6jxkbf4dFa", "ChangeLoginWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.BtLogin1 = function(e, t) {
					1 == (t = parseInt(t)) ? (window.Data.loginModel = 2, 1 == window.Data.Status && window.GEventDispatch.emit(window.GBaseEvent.HttpLogin)) : (window.Data.loginModel = 1, window.YxhLogin.login(!0)), this.BtClose()
				}, t.prototype.BtClose = function() {
					this.node.removeFromParent(!0)
				}, t = __decorate([n], t)
			}(cc.Component));
		i.ChangeLoginWindow = a, cc._RF.pop()
	}, {}],
	ChangeScene: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "5668aJkVeFPE6KoFGjiw6qJ", "ChangeScene"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("./../BaseScrollView"),
			n = cc._decorator,
			a = n.ccclass,
			r = (n.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.dataList = null, t.nowUseScene = 1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					this.nowUseScene = parseInt(window.FileData.getFileData("nowChangeScene")), ("number" != typeof this.nowUseScene || isNaN(this.nowUseScene)) && (this.nowUseScene = 1), this.initUI(), window.Game.windowMoveAction(this.node.getParent())
				}, t.prototype.initUI = function() {
					cc.log("ChangeScene - initUI");
					var e = window.FarmManager.getMyBuyScene();
					this.dataList = e, this.initCellDataList(e), this.createCellList()
				}, t.prototype.updateView = function(e, t, i) {
					cc.log("updateView" + e + " data" + JSON.stringify(t)), i.getChildByName("tLabel1").getComponent(cc.Label).string = t.Name, i.getChildByName("tSprite").getChildByName("tLabel2").getComponent(cc.Label).string = 999 != t.Time ? t.Time + "ng\u00e0y" : "V\u0129nh vi\u1ec5n", i.getChildByName("bSprite").getChildByName("syLabel").getComponent(cc.Label).string = t.Des, this.nowUseScene == e + 1 && (this.reloadNode1(i, !0), this.useNode = i);
					var o = new cc.Component.EventHandler;
					o.target = this.node, o.component = "ChangeScene", o.handler = "BtUseScene", o.customEventData = e + 1, i.getChildByName("bt").getComponent(cc.Button).clickEvents.push(o)
				}, t.prototype.reloadNode1 = function(e, t) {
					t ? (e.getChildByName("bt").getComponent(cc.Button).enabled = !1, e.getChildByName("bt").getComponent(cc.Button).interactable = !1, e.getChildByName("bt").getChildByName("Label").getComponent(cc.Label).string = "D\u00f9ngGiữa", e.getChildByName("bt").getChildByName("Label").getComponent(cc.LabelOutline).color = cc.color(94, 94, 94)) : (e.getChildByName("bt").getComponent(cc.Button).enabled = !0, e.getChildByName("bt").getComponent(cc.Button).interactable = !0, e.getChildByName("bt").getChildByName("Label").getComponent(cc.Label).string = "D\u00f9ng", e.getChildByName("bt").getChildByName("Label").getComponent(cc.LabelOutline).color = cc.color(48, 139, 1))
				}, t.prototype.BtUseScene = function(e, t) {
					cc.log("BtUseSceneBtUseScene" + t), null != this.useNode && this.reloadNode1(this.useNode, !1), this.useNode = this.cellItemList[t - 1], this.reloadNode1(this.cellItemList[t - 1], !0), window.FileData.setFileData("nowChangeScene", t)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getParent(), 2, function() {
						e.node.getParent().getParent().removeFromParent(!0)
					})
				}, t = __decorate([a], t)
			}(o.BaseScrollView));
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	ClientSocket: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "c37227aGcpGqaiPjmeR99FB", "ClientSocket"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function() {
				function e() {}
				return e.prototype.setManager = function(e) {
					this.netManager = e
				}, e.prototype.connect = function(e, t) {
					var i = this;
					console.log("ws://" + e + ":" + t + "/ws"), this.ws = new WebSocket("ws://" + e + ":" + t + "/ws"), this.ws.onopen = function(e) {
						console.log("websocket  connect"), null !== i.netManager && i.netManager.onConnectSuccess()
					}, this.ws.onmessage = function(e) {
						console.log("response text msg: " + e.data), null !== i.netManager && i.netManager.onReceiveMsg(e.data)
					}, this.ws.onerror = function(e) {
						console.log("websocket  error"), null !== i.netManager && i.netManager.onError()
					}, this.ws.onclose = function(e) {
						console.log("WebSocket closed."), null !== i.netManager && i.netManager.onConnectFail()
					}
				}, e.prototype.close = function() {
					null != this.ws && this.ws.close()
				}, e.prototype.send = function(e) {
					null != this.ws && this.ws.send(e)
				}, e.prototype.isConnect = function() {
					return this.ws.readyState == WebSocket.OPEN
				}, e = __decorate([n], e)
			}());
		i.ClientSocket = a, cc._RF.pop()
	}, {}],
	Config: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9ae5dmodYlN8q7uxkP1+u3h", "Config"), window.Config = {
			FileSecretkey: "SDFESA23DF",
			Model: 1,
			Step: 2,
			isLooking: !1,
			GameServerIp: "",
			GameServerIp_test: "",
			GameServerIp_nw: "",
			ShareServerIp: "",
			GameServerPort: "",
			Version: "1.1.1.5",
			ServerVersion: ""
		}, window.Step ? window.Config.Step = window.Step : cc.sys.platform === cc.sys.MOBILE_BROWSER || cc.sys.platform === cc.sys.DESKTOP_BROWSER ? window.Config.Step = 3 : window.Config.Step = 1, cc._RF.pop()
	}, {}],
	Constant: [function(e, t, i) {
		"use strict";
		var o, n, a;
		cc._RF.push(t, "a1cd6y511hMrqIRm49eov+D", "Constant"), window.Constant = {
			NewYearTimeOut: 1550073600,
			bannerClose: !1,
			PlayAdOrShare: 1,
			BannerAdRelayHeight: 107,
			GameFrame: 40,
			AllBaseCrop: 9,
			getCropSeedTime: 20,
			getCropFriendSubTime: 3,
			getSunFriendAddTime: 4,
			SG_MIN_VALUE: 10,
			SG_FIRST_VALUE: 1e3,
			CBT_BOX_NUM: 7,
			CBT_CD_TIME: 60,
			DCR_DOUBLE: 100,
			PLANE_USE_TIME: 10,
			PLANE_USE_DOUBLE: 2,
			Turnning_Max_Times: 10,
			DaLiFriendCount: 15,
			adKeyList: {
				0: "adunit-d4c93d3518267882",
				1: "adunit-d20cc14aac60ec68",
				2: "adunit-2d7f71cedf581f57",
				3: "adunit-0e45f2a3ee87c0cf",
				4: "adunit-b5002bd87f0f4af3",
				5: "adunit-f5c13fbff624b027",
				6: "adunit-a8451a30b6f0db94",
				7: "adunit-070d10a90febb255",
				9: "adunit-744d3a0e08efe027",
				10: "adunit-7485e6cd94f3d321",
				15: "adunit-d4c93d3518267882"
			},
			adKeyTTList: {
				0: "75adh5h1eh702q10o5"
			},
			bannerKeyList: {
				0: "adunit-99faa79b96a40098"
			},
			bannerKeyTTList: {
				0: "kqhmiaflq24g4ebe3b"
			},
			NOTICE_KEY: {
				NONE_: 0,
				MAIL: 1,
				FRIEND: 2,
				HEART_LOG: 3
			},
			shareIdList: {
				NONE_: 0,
				FAIR: 1,
				SUNNY_DAY: 2,
				NEW_USER: 3,
				JUNIOR_GIFT: 4,
				MEDIUM_GIFT: 5,
				SENIOR_GIFT: 6,
				FREE_GET_DIAM: 7,
				OPEN_UP: 8,
				OFFLINE_REVENUE: 9,
				FREE_GET_GOLD: 10,
				GOLD_NO_ENOUGH: 11,
				CBT: 12,
				DCR: 13,
				TURNNING: 14,
				MainTask: 15,
				PLANECD: 16,
				MOUSEAWARD: 17,
				GETFRIEND: 18,
				GETNEWCROP: 19,
				WEALCROP: 20,
				NEWYEAR: 21
			},
			saveShareNewUserList: {
				3: 1,
				4: 1,
				5: 1,
				6: 1,
				21: 1
			},
			PackageToIdList: ["", "JUNIOR_GIFT", "MEDIUM_GIFT", "SENIOR_GIFT"],
			CoinUnit: ["", "K", "M", "B", "T", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz", "Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz", "AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ", "AAa", "BBb", "CCc", "DDd", "EEe", "FFf", "GGg", "HHh", "IIi", "JJj", "KKk", "LLl", "MMm", "NNn", "OOo", "PPp", "QQq", "RRr", "SSs", "TTt", "UUu", "VVv", "WWw", "XXx", "YYy", "ZZz"],
			CoinUnitKey: [],
			GoodAwardNameList: {
				1: "V\u00e0ng",
				2: "Kim c\u01b0\u01a1ng",
				3: "H\u1ea1t gi\u1ed1ng",
				4: "C\u00e2y tr\u1ed3ng",
				5: "Qu\u00e0 th\u01b0\u1eddng",
				6: "Qu\u00e0 cao c\u1ea5p",
				11: "V\u00e0ng",
				12: "H\u1ea1t gi\u1ed1ng",
				13: "M\u1ea3nh c\u00e2y",
				14: "H\u00e1i tr\u1ed9m"
			},
			TyWindowKeyList: {
				freeGetGold: 1,
				cbtLayer: 2,
				scarecrow_window: 3,
				mail_window: 4,
				goldHelper_window: 5,
				planeCollect: 6,
				marketNotice_window: 7,
				marketNotice2_window: 8,
				turnning_window: 9,
				task_window: 10,
				task_index: 11,
				seedbuynotice_window: 12,
				map_window: 13,
				gameset_window: 14,
				userScene: 15,
				setqun_window: 16,
				reapFinishPanel: 17,
				title_window: 18,
				friendlist_window: 19,
				friendtuijian_window: 20,
				friendlook_window: 21,
				rule_window: 22,
				friendnotice_window: 23,
				friendchangemb_window: 24,
				ad_window: 25,
				turnninghelper_window: 26,
				getnewcrop_window: 27,
				weal_window: 28,
				newyear_window: 29
			},
			cropSpritePosList: [{
				x: 19,
				y: -200
			}, {
				x: -142,
				y: -118
			}, {
				x: 15,
				y: -50
			}, {
				x: -142,
				y: 32
			}, {
				x: 165,
				y: 26
			}, {
				x: 2,
				y: 105
			}, {
				x: -140,
				y: 180
			}, {
				x: 159,
				y: 183
			}, {
				x: 14,
				y: 257
			}],
			getToolKey: function(e, t, i) {
				return 1e6 * e + 1e4 * t + i
			},
			cropSpriteNum: (o = {}, o[1] = [{
				x: 0,
				y: -50,
				s: 1
			}, {
				x: 55,
				y: -15,
				s: 1
			}, {
				x: -55,
				y: -15,
				s: 1
			}, {
				x: 0,
				y: 10,
				s: 1
			}], o[2] = [{
				x: -35,
				y: -15,
				s: -1
			}, {
				x: 35,
				y: -20,
				s: 1
			}], o[3] = [{
				x: 0,
				y: -40,
				s: 1
			}], o[4] = [{
				x: 6,
				y: -12,
				s: 1
			}], o[5] = [{
				x: 0,
				y: -15,
				s: .8
			}], o[6] = [{
				x: 0,
				y: -40,
				s: 1
			}, {
				x: 30,
				y: 0,
				s: 1
			}, {
				x: -50,
				y: -10,
				s: -1
			}], o[7] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[8] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[9] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[10] = [{
				x: 0,
				y: -40,
				s: 1
			}, {
				x: 55,
				y: -10,
				s: 1
			}, {
				x: -55,
				y: -10,
				s: 1
			}, {
				x: 0,
				y: 15,
				s: 1
			}], o[11] = [{
				x: 0,
				y: -30,
				s: 1.2
			}], o[12] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[13] = [{
				x: 0,
				y: -40,
				s: 1
			}, {
				x: 55,
				y: -10,
				s: 1
			}, {
				x: -55,
				y: -10,
				s: 1
			}, {
				x: 0,
				y: 15,
				s: 1
			}], o[14] = [{
				x: 0,
				y: -30,
				s: .9
			}], o[15] = [{
				x: -2,
				y: -30,
				s: 1
			}, {
				x: 35,
				y: -5,
				s: 1
			}, {
				x: -45,
				y: -5,
				s: 1
			}, {
				x: -5,
				y: 15,
				s: 1
			}], o[16] = [{
				x: -2,
				y: -40,
				s: 1
			}, {
				x: 35,
				y: -15,
				s: 1
			}, {
				x: -45,
				y: -15,
				s: 1
			}, {
				x: -5,
				y: 5,
				s: 1
			}], o[17] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[18] = [{
				x: -5,
				y: -30,
				s: .8
			}], o[19] = [{
				x: -10,
				y: -20,
				s: 1
			}], o[20] = [{
				x: 0,
				y: -30,
				s: 1
			}], o[21] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[22] = [{
				x: 0,
				y: -30,
				s: 1
			}], o[23] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[24] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[25] = [{
				x: 0,
				y: -40,
				s: 1
			}, {
				x: 55,
				y: -10,
				s: 1
			}, {
				x: -55,
				y: -10,
				s: 1
			}, {
				x: 0,
				y: 15,
				s: 1
			}], o[26] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[27] = [{
				x: 0,
				y: -40,
				s: 1
			}, {
				x: 55,
				y: -10,
				s: 1
			}, {
				x: -55,
				y: -10,
				s: 1
			}, {
				x: 0,
				y: 15,
				s: 1
			}], o[28] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[29] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[30] = [{
				x: 0,
				y: -10,
				s: -1
			}], o[31] = [{
				x: 0,
				y: -40,
				s: 1
			}, {
				x: 55,
				y: -10,
				s: 1
			}, {
				x: -55,
				y: -10,
				s: 1
			}, {
				x: 0,
				y: 15,
				s: 1
			}], o[32] = [{
				x: 0,
				y: -20,
				s: .9
			}], o[33] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[34] = [{
				x: 0,
				y: -20,
				s: .9
			}], o[35] = [{
				x: 20,
				y: -25,
				s: -1
			}, {
				x: -30,
				y: -15,
				s: 1
			}], o[36] = [{
				x: 0,
				y: -30,
				s: 1
			}], o[37] = [{
				x: -2,
				y: -20,
				s: 1
			}, {
				x: 35,
				y: 5,
				s: 1
			}, {
				x: -45,
				y: 5,
				s: 1
			}, {
				x: -5,
				y: 25,
				s: 1
			}], o[38] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[39] = [{
				x: 0,
				y: -20,
				s: .9
			}], o[40] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[41] = [{
				x: 0,
				y: -10,
				s: 1
			}], o[42] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[43] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[44] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[45] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[46] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[47] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[48] = [{
				x: 0,
				y: -20,
				s: 1
			}], o[49] = [{
				x: 0,
				y: -20,
				s: 1.05
			}], o[50] = [{
				x: 0,
				y: -20,
				s: 1
			}], o),
			cropByBase: (n = {}, n[1] = 1, n[2] = 4, n[3] = 6, n[4] = 2, n[5] = 5, n[6] = 2, n[7] = 5, n[8] = 4, n[9] = 5, n[10] = 1, n[11] = 5, n[12] = 5, n[13] = 2, n[14] = 4, n[15] = 2, n[16] = 2, n[17] = 6, n[18] = 3, n[19] = 2, n[20] = 3, n[21] = 5, n[22] = 1, n[23] = 1, n[24] = 1, n[25] = 2, n[26] = 6, n[27] = 5, n[28] = 2, n[29] = 6, n[30] = 2, n[31] = 1, n[32] = 4, n[33] = 5, n[34] = 4, n[35] = 5, n[36] = 6, n[37] = 2, n[38] = 2, n[39] = 1, n[40] = 6, n[41] = 2, n[42] = 6, n[43] = 5, n[44] = 6, n[45] = 4, n[46] = 4, n[47] = 6, n[48] = 1, n[49] = 4, n[50] = 5, n),
			cropByBaseOflow: (a = {}, a[3] = !0, a[17] = !0, a[26] = !0, a[29] = !0, a[36] = !0, a[40] = !0, a[42] = !0, a[44] = !0, a[47] = !0, a)
		}, cc._RF.pop()
	}, {}],
	CreateCropAwardLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "cc62doDWu9MqrZ8oakcSeU7", "CreateCropAwardLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.nLabel1 = null, t.nLabel2 = null, t.baseNode = null, t.btNode1 = null, t.btNode2 = null, t.adId = 10, t.m_upLevel = 20, t.m_baseid = 0, t.m_farmid = 0, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.updateUi = function(e, t) {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0), console.log("CreateCropAwardLayer - updateUi", e, t), this.m_baseid = e, this.m_farmid = t;
					var i = window.JsonManager.getData("Crops", t);
					this.nLabel1.string = i.Name + "\nBay th\u1eb3ng 20 cấp", this.nLabel2.node.active = !1;
					var o = window.FarmManager.getFarmById(e),
						n = o.getSpritePathKey(),
						a = o.getSpritePathXX(),
						r = o._FarmHelper.getBasePath();
					window.Func._addSpritePic2(this.baseNode.getComponent(cc.Sprite), "texture/tps/base", r), this.baseNode.scale = 1.2;
					var s = this;
					cc.loader.loadRes("prefabs/crop_spine", function(e, i) {
						if (!e)
							for (var o = 0; o < a; o++) {
								var r = cc.instantiate(i);
								if (void 0 != window.Constant.cropSpriteNum[n]) {
									var d = window.Constant.cropSpriteNum[n][o];
									r.x = d.x, r.y = d.y, "number" != typeof d.s && (d.s = 1), r.zIndex = a - o
								}
								window.Func._addSpritePic4(r.getComponent("sp.Skeleton"), "spine/crop/c" + t + "/skeleton"), s.baseNode.addChild(r)
							}
					}), window.WxFunc.getShareFileData(window.Constant.shareIdList.OPEN_UP) > 100 ? window.Game2.hideAdBtIcon2(this.btNode2, this.btNode1) : window.Game2.hideAdBtIcon2(this.btNode1, this.btNode2)
				}, t.prototype.openUpLevel = function() {
					var e = window.FarmManager.getFarmById(this.m_baseid);
					e._SecretClass.getCurLevel() < this.m_upLevel && e._SecretClass.addCurLevel(this.m_upLevel - 1), window.Game.showAlertBar("N\u00e2ng c\u1ea5pTh\u00e0nh c\u00f4ng"), this.BtClose()
				}, t.prototype.BtOk = function(e, t) {
					var i = this;
					2 == t ? window.WxFunc.OpenAd(this.adId, function() {
						i.openUpLevel()
					}) : window.WxFunc.createShare(window.Constant.shareIdList.OPEN_UP, function() {
						i.openUpLevel()
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						window.FileData.saveFileData(), e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "nLabel1", void 0), __decorate([a(cc.Label)], t.prototype, "nLabel2", void 0), __decorate([a(cc.Node)], t.prototype, "baseNode", void 0), __decorate([a(cc.Node)], t.prototype, "btNode1", void 0), __decorate([a(cc.Node)], t.prototype, "btNode2", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.CreateCropAwardLayer = r, cc._RF.pop()
	}, {}],
	CropBookDesLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9ab66sZUpFPrajgYf7ARmxs", "CropBookDesLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.iconSprite = null, t.bgSprite = [], t.nameLabel = null, t.contentLabel = null, t.czLabelList = [], t.numLabelList = [], t
				}
				return __extends(t, e), t.prototype.initUI = function(e) {
					var t = window.JsonManager.getData("Crops", e);
					window.Func._addSpritePic2(this.iconSprite, "texture/tps/crop_icon2", "c_" + e, !1), this.nameLabel.string = t.Name, this.contentLabel.string = t.Get;
					for (var i = 0; i < 4; i++) {
						var o = "icon441_1",
							n = cc.color(223, 136, 55);
						Math.max(0, window.Game.getCropMaxLevel(e)) == i && (n = cc.color(186, 109, 0), o = "icon441_2"), this.czLabelList[i].node.color = n, this.numLabelList[i].node.color = n, this.numLabelList[i].string = window.Func.moneyChange(window.Game.CROP_LEVEL_DOUBLE[i] * window.JsonManager.getData("Crops", e).Prod), window.Func._addSpritePic2(this.bgSprite[i], "texture/tps/box1", o, !1)
					}
				}, t.prototype.setBookHide = function(e) {
					window.Game.cropBoxobj.getChildByName("book_panel").active = e
				}, t.prototype.BtClose = function() {
					this.node.removeFromParent(!0)
				}, __decorate([a(cc.Sprite)], t.prototype, "iconSprite", void 0), __decorate([a(cc.Sprite)], t.prototype, "bgSprite", void 0), __decorate([a(cc.Label)], t.prototype, "nameLabel", void 0), __decorate([a(cc.Label)], t.prototype, "contentLabel", void 0), __decorate([a(cc.Label)], t.prototype, "czLabelList", void 0), __decorate([a(cc.Label)], t.prototype, "numLabelList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.CropBookDesLayer = r, cc._RF.pop()
	}, {}],
	CropBookLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "466cdOD2iBAMK5qvSI0P/2z", "CropBookLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mbPanel = [], t.mbSprite = [], t.mbSprite3 = [], t.progressList = [], t.progressSpriteList = [], t.dataList = [], t.nowCreateViewId = 0, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e, t) {
					this.dataList = e;
					for (var i = 0; i < 4; i++) {
						var o = e[i];
						void 0 == o ? this.mbPanel[i].active = !1 : (this.mbPanel[i].active = !0, o.layer = "list", this.node.getChildByName("middle_panel" + (i + 1)).getComponent("PieceUiLayer").reloadUi(o))
					}
				}, t.prototype.clickBt = function(e, t) {
					window.Game.createCropBookDes(this.dataList[t - 1].farmId)
				}, t.prototype.BtClose = function() {
					window.Game.closeSelectCrop()
				}, __decorate([a(cc.Node)], t.prototype, "mbPanel", void 0), __decorate([a(cc.Node)], t.prototype, "mbSprite", void 0), __decorate([a(cc.Node)], t.prototype, "mbSprite3", void 0), __decorate([a(cc.ProgressBar)], t.prototype, "progressList", void 0), __decorate([a(cc.Node)], t.prototype, "progressSpriteList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.CropBookLayer = r, cc._RF.pop()
	}, {}],
	CropBookScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "2eda4lg1nxErp3T9QW6mqeM", "CropBookScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 0, t.dataList = null, t.cropIdKeyList = [], t
				}
				return __extends(t, e), t.prototype.initUI = function(e) {
					this.Model = e;
					var t = window.Game.getCropBoxList(e);
					this.dataList = t, this.cropIdKeyList = [];
					for (var i = 0; i < t.length; i++)
						for (var o = 0; o < t[i].length; o++) this.cropIdKeyList[t[i][o].farmId] = i;
					if (this.initCellDataList(t), this.createCellList(), window.Game2.countNewCrop() > 0) {
						var n = window.Game2.getRandNewCropRed();
						if (n) {
							var a = this.cropIdKeyList[n];
							a > 2 && this.scheduleOnce(function() {
								this.node.getComponent(cc.ScrollView).scrollToOffset(cc.v2(0, 85 + 180 * (a - 1) - 50), .5)
							}, .5)
						}
					}
				}, t.prototype.updateView = function(e, t, i) {
					i.getComponent("CropBookLayer").init(t, this.Model)
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	CropBoxLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "a41eaSHsrZG1pChD+Bgqg2t", "CropBoxLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.clickLabelList = [], t.PanelList = [], t.topBtSpriteList = [], t.timeLabelList = [], t.Model = 1, t.Page = 0, t.downCropLevelNumLabelList = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					this.init()
				}, t.prototype.init = function() {
					this.reloadUi(), this.reloadBtUi(), this.Model = 0, this.BtChangeType(null, 1), this.node.getChildByName("bg").scale = window.Game.getBgScale()
				}, t.prototype.update = function() {
					1 == this.Model && window.IndexScene.curFrame % window.Constant.GameFrame == 0 && (this.reloadUi(), this.reloadRed())
				}, t.prototype.reloadUi = function() {
					if (1 == this.Model) {
						for (var e = 0; e < 3; e++) {
							var t = window.Game2.getMoney(e + 1),
								i = t[0],
								o = window.Data.getBox(e + 1);
							o > 0 ? (this.PanelList[e].getChildByName("iSprite").active = !0, this.PanelList[e].getChildByName("iSprite").getChildByName("Label").getComponent(cc.Label).string = "" + o) : this.PanelList[e].getChildByName("iSprite").active = !1;
							var n = 0 == i || o > 0;
							this.clickLabelList[e].string = n ? "Free" : window.Func.moneyChange(i), e > 0 && (t[2] > 0 && !n ? (this.timeLabelList[e - 1].node.active = !0, this.timeLabelList[e - 1].string = window.Func.timestampToTime4(t[2])) : this.timeLabelList[e - 1].node.active = !1)
						}
						this.reloadRed()
					}
				}, t.prototype.reloadRed = function() {
					this.topBtSpriteList[1].node.getChildByName("Sprite2").active = window.Game2.countNewCrop() > 0
				}, t.prototype.reloadBtUi = function() {
					if (1 == this.Model)
						for (var e = 0; e < 3; e++) {
							var t = window.Game2.getMoney(e + 1)[0],
								i = window.Data.getBox(e + 1),
								o = (window.Game.getCropBoxData(3).length, !0);
							0 == e ? o = i > 0 || t <= window.Data.getGold() : 1 != e && 2 != e || (o = i > 0 || t <= window.Data.getDiam()), o ? (this.PanelList[e].getChildByName("cButton").getComponent(cc.Button).enabled = !0, window.Func._addSpritePic2(this.PanelList[e].getChildByName("cButton").getComponent(cc.Sprite), "texture/tps/common", 0 == e ? "bt_4" : "bt_7", !1), window.Func._addSpritePic2(this.PanelList[e].getChildByName("cButton").getChildByName("iSprite").getComponent(cc.Sprite), "texture/tps/common", 0 == e ? "s_1" : "s_2", !1), this.PanelList[e].getChildByName("cButton").getChildByName("Label").getComponent(cc.LabelOutline).color = 0 == e ? cc.color(206, 127, 44, 255) : cc.color(0, 122, 192, 255)) : (window.Func._addSpritePic2(this.PanelList[e].getChildByName("cButton").getComponent(cc.Sprite), "texture/tps/common", "bt_5", !1), window.Func._addSpritePic2(this.PanelList[e].getChildByName("cButton").getChildByName("iSprite").getComponent(cc.Sprite), "texture/tps/common", 0 == e ? "s_1_2" : "s_2_2", !1), this.PanelList[e].getChildByName("cButton").getChildByName("Label").getComponent(cc.LabelOutline).color = cc.color(94, 94, 94, 255), this.PanelList[e].getChildByName("cButton").getComponent(cc.Button).enabled = !0)
						}
				}, t.prototype.BtOepnBox = function(e, t) {
					var i = window.Game2.getMoney(t),
						o = i[0],
						n = i[1];
					if (3 == t && 0 == window.Game.getCropBoxData(3).length) return void window.Game.showAlertBar("N\u00f4ng s\u1ea3n \u0111\u00e3 \u0111\u1ea1t ph\u1ea9m ch\u1ea5t max");
					var a = 1,
						r = window.Data.getBox(t);
					if (0 == r) {
						if (1 == t) {
							if (o > window.Data.getGold()) return void window.Game.showAlertBar("Thi\u1ebfu v\u00e0ng");
							window.Data.subGoldNum(o), window.FileData.setFileData("openBox" + t, n)
						} else if (2 == t || 3 == t) {
							if (n > 0) {
								if (o > window.Data.getDiam()) return void window.Game.showAlertBar("Thi\u1ebfu kim c\u01b0\u01a1ng");
								window.Data.subDiamNum(o)
							}
							window.FileData.setFileData("openBox" + t, (new Date).getTime())
						}
					} else r >= 10 && (a = 10);
					for (var s = 2 == t ? 1 : t, d = window.Game.randCropBoxData(s, a), c = [], l = 0; l < d.length; l++) {
						var p = d[l],
							u = p;
						0 != p.ifHave ? (window.Data.addDiamNum(3), u.type = 2, u.num = 3, u.node = 1) : (u.type = 13, u.num = 1, u.typeid = p.farmId, u.pos1 = p.key, u.pos2 = p.pos, u.node = 3, u.layer = "get2", u.noshowaction = !0), window.Data.subBox(t, 1), c.push(u)
					}
					1 == d.length ? window.Game.openAwardLayer(d[0]) : window.Game.openAwardLayer3(c), window.FileData.saveFileData(), this.init();
					var h = window.FileHelper.getTaskFinishFileData(3, 9);
					window.FileHelper.setTaskFinishFileData(3, 9, h + 1)
				}, t.prototype.BtCloseBox = function() {
					this.node.active = !1, window.WxFunc.hideBannerAd(), 2 == this.Model && window.Game2.cleanNewCropList()
				}, t.prototype.BtChangeType = function(e, t) {
					t != this.Model && (1 == t ? (this.node.getChildByName("ScrollView1").active = !0, this.node.getChildByName("book_panel").active = !1, this.node.getChildByName("bg").getChildByName("Sprite").active = !0, window.Func._addSpritePic2(this.topBtSpriteList[0], "texture/tps/common", "bt_t5_2_1", !1), this.topBtSpriteList[1].spriteFrame = null, 2 == this.Model && window.Game2.cleanNewCropList()) : (this.node.getChildByName("ScrollView1").active = !1, this.node.getChildByName("book_panel").active = !0, this.node.getChildByName("bg").getChildByName("Sprite").active = !1, this.reloadCropBook(), this.topBtSpriteList[0].spriteFrame = null, window.Func._addSpritePic2(this.topBtSpriteList[1], "texture/tps/common", "bt_t5_2_4", !1), this.topBtSpriteList[1].node.getChildByName("Sprite2").active = !1), this.Model = t)
				}, t.prototype.reloadCropBook = function() {
					this.node.getChildByName("book_panel").getChildByName("ScrollView2").getComponent("CropBookScrollLayer").initUI(this.Page);
					for (var e = 0; e < 4; e++) this.downCropLevelNumLabelList[e].string = window.Game.getCropLevelNum(this.Page, e) + "/" + window.Game.getAllCropNum(this.Page)
				}, t.prototype.BtChangePage = function(e, t) {
					if (2 == this.Model && this.Page != t) {
						var i = this.node.getChildByName("book_panel").getChildByName("topNode").getChildByName("Button" + this.Page),
							o = this.node.getChildByName("book_panel").getChildByName("topNode").getChildByName("Button" + t);
						window.Func._addSpritePic2(i.getComponent(cc.Sprite), "texture/tps/box1", "icon331_1", !1), window.Func._addSpritePic2(o.getComponent(cc.Sprite), "texture/tps/box1", "icon331_2", !1), i.getChildByName("Label").color = cc.color(255, 255, 255, 255), o.getChildByName("Label").color = cc.color(170, 64, 0, 255), this.Page = t, this.reloadCropBook()
					}
				}, __decorate([a(cc.Label)], t.prototype, "clickLabelList", void 0), __decorate([a(cc.Node)], t.prototype, "PanelList", void 0), __decorate([a(cc.Sprite)], t.prototype, "topBtSpriteList", void 0), __decorate([a(cc.Label)], t.prototype, "timeLabelList", void 0), __decorate([a(Number)], t.prototype, "Model", void 0), __decorate([a(Number)], t.prototype, "Page", void 0), __decorate([a(cc.Label)], t.prototype, "downCropLevelNumLabelList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.default = r, cc._RF.pop()
	}, {}],
	Data: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "7f3b4NEiBhBMaZKAIDnYoI5", "Data");
		window.Data = {
			loginModel: 1,
			startName: "\u00d4ng tr\u00f9m n\u00f4ng tr\u1ea1i",
			AdGameList: [],
			shareContent: [],
			isNewAccount: !1,
			QuarryScene: 0,
			width: 640,
			height: 1136,
			iconPath: "texture/icon/",
			TodayTimes: 0,
			TodayLoginTimes: 0,
			UId: -1,
			PTid: 1,
			Token: "",
			ServerId: 0,
			Status: 0,
			GoldStr: "",
			Gold: 0,
			SeedDelayStr: "",
			DiamStr: "",
			SeedStr: "",
			getTotalGoldStr: "",
			BoxStr1: "",
			BoxStr3: "",
			nowServerLoginTime: 0,
			online_getGold: 0,
			MaxNumber: Number.MAX_VALUE,
			init: function() {
				this.MaxNumber = window.Func.moneyChange2("999.99SSs"), this.resetOnline_getGold()
			},
			isLogin: function() {
				return "" != window.Data.Token
			},
			getMaxNumber: function() {
				return this.MaxNumber
			},
			getTotalGold: function() {
				var e = Math.floor(window.Func.unSecretNumber(this.getTotalGoldStr));
				return (void 0 == e || isNaN(e) || "number" != typeof e) && (e = 0, this.setTotalGold(e)), e
			},
			setTotalGold: function(e) {
				this.getTotalGoldStr = window.Func.SecretNumber(e), window.FileData.setFileData("getTotalGoldStr", this.getTotalGoldStr)
			},
			getGold: function() {
				return this.Gold = Math.floor(window.Func.unSecretNumber(this.GoldStr)), (void 0 == this.Gold || isNaN(this.Gold) || "number" != typeof this.Gold) && (this.Gold = 0, this.GoldStr = window.Func.SecretNumber(0)), this.Gold
			},
			setGold: function(e) {
				isFinite(e) ? (this.Gold = e, this.GoldStr = window.Func.SecretNumber(e), window.FileData.setFileData("goldStr", this.GoldStr), window.FileData.setHistoryMaxCoin(1), window.Game.reloadGoldLabel()) : console.log("setGold Tr\u00e0n")
			},
			addGoldNum: function(e, t, i, o) {
				void 0 === t && (t = !1), void 0 === i && (i = !0), void 0 === o && (o = !0), e = parseFloat(e), isNaN(e) && (e = 0);
				var n = this.getGold() + e;
				if (!isFinite(n) || n > window.Data.getMaxNumber()) return console.log("addGoldNum Tr\u00e0n"), void this.setGold(window.Data.getMaxNumber());
				if (this.setGold(n), window.FileData.setFileData("goldStr", this.GoldStr), e > 0 && i) {
					this.getSeed();
					var a = window.FileData.getRankFileData("history_max_crop_pro"),
						r = window.Game2.getTitleByJsonToId(),
						s = e / a * (r ? r.Value : 1) * Math.max(window.Constant.SG_FIRST_VALUE, window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_seed"))),
						d = window.JsonManager.getTable("SeedAddition"),
						c = 1;
					if (window.IndexScene.SnowTimeNum > 0) {
						var l = window.FileData.getFileData("snowDouble");
						"number" != typeof l && (l = 2);
						var p = d[0];
						c += Math.max(0, Math.min(p.InitialValue + (l - 2) * p.GrowValue, p.Limit))
					}
					var u = window.FarmManager.getToolFileData(window.Constant.getToolKey(3, 1, 1), !1);
					if (u > 0) {
						p = d[1];
						c += Math.max(0, Math.min(p.InitialValue + (u - 1) * p.GrowValue, p.Limit))
					}
					var h = window.FileData.getFileData("nowSceneId");
					if ("number" != typeof h && (h = 1), h > 1) {
						p = d[2];
						c += Math.max(0, Math.min(p.InitialValue + (h - 2) * p.GrowValue, p.Limit))
					}
					var w = window.Game2.getShareResultFileData(window.Constant.shareIdList.DCR);
					if ("number" != typeof w && (w = 0), 0 != w) {
						p = d[3];
						w > 0 ? c += Math.max(0, Math.min(p.InitialValue + (w - 1) * p.GrowValue, p.Limit)) : c -= Math.max(0, Math.min(p.InitialValue + (w - 1) * p.GrowValue, p.Limit))
					}
					c = Math.max(1, c), s = o ? Math.floor(s * c) : Math.floor(s), s += Math.abs(this.getSeedDelay()), this.setSeedDelay(s)
				}
				i && e > 0 && this.setTotalGold(this.getTotalGold() + e), e > 0 && this.addOnLine_getGold(e), window.FarmManager.reloadAllCrop()
			},
			addOnLine_getGold: function(e) {
				this.online_getGold += e
			},
			resetOnline_getGold: function() {
				this.online_getGold = 0
			},
			getOnline_getGold: function() {
				return this.online_getGold
			},
			subGoldNum: function(e) {
				this.addGoldNum(-e)
			},
			getDiam: function() {
				var e = Math.floor(window.Func.unSecretNumber(this.DiamStr));
				return (void 0 == e || isNaN(e) || "number" != typeof e) && (e = 0, this.setDiam(e)), e
			},
			setDiam: function(e) {
				if (!isFinite(e) || e > window.Data.getMaxNumber()) return console.log("setDiam Tr\u00e0n"), void(e = window.Data.getMaxNumber());
				this.DiamStr = window.Func.SecretNumber(e), window.FileData.setFileData("diamStr", this.DiamStr), window.FileData.setHistoryMaxCoin(2), window.Game.reloadGoldLabel()
			},
			addDiamNum: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setDiam(this.getDiam() + parseFloat(e))
			},
			subDiamNum: function(e) {
				return this.getDiam() < e ? (window.Game.showAlertBar("Thi\u1ebfu kim c\u01b0\u01a1ng"), !1) : (this.addDiamNum(-e), !0)
			},
			getSeedDelay: function() {
				var e = Math.floor(window.Func.unSecretNumber(this.SeedDelayStr));
				return (void 0 == e || isNaN(e) || "number" != typeof e) && (e = 0, this.setSeedDelay(e)), e
			},
			setSeedDelay: function(e) {
				this.SeedDelayStr = window.Func.SecretNumber(e), window.FileData.setFileData("seedDelayStr", this.SeedDelayStr)
			},
			getSeed: function() {
				var e = Math.floor(window.Func.unSecretNumber(this.SeedStr));
				return (void 0 == e || isNaN(e) || "number" != typeof e) && (e = 0, this.setSeed(e)), e
			},
			setSeed: function(e) {
				(!isFinite(e) || e > window.Data.getMaxNumber()) && (console.log("setSeed Tr\u00e0n"), e = window.Data.getMaxNumber()), this.SeedStr = window.Func.SecretNumber(e), window.FileData.setFileData("seedStr", this.SeedStr), window.FileData.setHistoryMaxCoin(3), window.Game.reloadGoldLabel()
			},
			addSeedNum: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setSeed(this.getSeed() + parseFloat(e))
			},
			subSeedNum: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setSeed(Math.max(0, this.getSeed() - parseFloat(e)))
			},
			getBox: function(e) {
				return 1 == e ? this.getBox1() : 3 == e ? this.getBox3() : 0
			},
			subBox: function(e, t) {
				1 == e ? this.subBoxNum1(t) : 3 == e && this.subBoxNum3(t)
			},
			getBox1: function() {
				var e = Math.floor(window.Func.unSecretNumber(this.BoxStr1));
				return (void 0 == e || isNaN(e) || "number" != typeof e) && (e = 0, this.setBox1(e)), e
			},
			setBox1: function(e) {
				this.BoxStr1 = window.Func.SecretNumber(e), window.FileData.setFileData("boxStr1", this.BoxStr1)
			},
			addBoxNum1: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setBox1(this.getBox1() + Math.floor(e))
			},
			subBoxNum1: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setBox1(Math.max(0, this.getBox1() - Math.floor(e)))
			},
			getBox3: function() {
				var e = Math.floor(window.Func.unSecretNumber(this.BoxStr3));
				return (void 0 == e || isNaN(e) || "number" != typeof e) && (e = 0, this.setBox3(e)), e
			},
			setBox3: function(e) {
				this.BoxStr3 = window.Func.SecretNumber(e), window.FileData.setFileData("boxStr3", this.BoxStr3)
			},
			addBoxNum3: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setBox3(this.getBox3() + Math.floor(e))
			},
			subBoxNum3: function(e) {
				e = parseFloat(e), isNaN(e) && (e = 0), this.setBox3(Math.max(0, this.getBox3() - Math.floor(e)))
			},
			getNHourCropNum: function(e) {
				var t = window.FileData.getFileData("hourCropNum");
				return "number" != typeof t && (t = window.FarmManager.getTimeGetCrop(1), window.FileData.setFileData("hourCropNum", t)), Math.floor(t * e)
			},
			setGoodAward: function(e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					if (void 0 != i.num && (i.num = parseFloat(i.num)), 1 == i.type) this.addGoldNum(i.num);
					else if (2 == i.type) this.addDiamNum(i.num);
					else if (3 == i.type) this.addSeedNum(i.num);
					else if (4 == i.type) {
						var o = window.JsonManager.getData("Handbook", i.typeid);
						this.addCropBoxToQuality(o.CropsId, o.Quality), window.Game2.addNewCropList(o.CropsId)
					} else 5 == i.type ? this.addBoxNum1(i.num) : 6 == i.type ? this.addBoxNum3(i.num) : 11 == i.type ? this.addGoldNum(i.num) : 12 == i.type && this.addSeedNum(i.num)
				}
			},
			getGoodAwardNum: function(e) {
				return 11 == e.Type || 11 == e.type ? e.Num = Math.max(10, this.getNHourCropNum(3600 * e.TypeId)) : 12 == e.Type && (e.Num = Math.max(10, e.TypeId / 100 * this.getSeed())), e
			},
			addCropBoxToQuality: function(e, t) {
				for (var i = window.Game.CROP_STATE, o = {}, n = 0; n < i.length; n++) {
					for (var a = !1, r = 0; r < i[n]; r++) {
						var s = 0;
						t > n && (s = 1), void 0 == o[n] && (o[n] = {}), o[n][r] = s, 0 == s && (a = !0)
					}
					if (a) break
				}
				this.setCropBoxFileDataById(e, o)
			},
			setCropBoxFileDataById: function(e, t) {
				var i = window.FileData.getFileData("cropBox");
				"object" != typeof i && (i = {}), i[e] = t, window.Game.CropLevelNumList = [], window.FileData.setFileData("cropBox", i)
			},
			addGoodsList: function(e) {
				for (var t = [], i = e.Num.split(";"), o = e.Type.split(";"), n = void 0 != e.TypeId ? e.TypeId.split(";") : [], a = 0; a < o.length; a++) {
					var r = parseFloat(i[a]),
						s = Math.floor(o[a]);
					11 == s && (r = this.getNHourCropNum(3600 * r)), t.push({
						type: s,
						num: r,
						typeid: void 0 != n[a] ? Math.floor(n[a]) : 0
					})
				}
				window.Data.setGoodAward(t), window.Game.openAwardLayer3(t)
			},
			getGoodsListToHttp: function(e, t) {
				void 0 === t && (t = !1);
				for (var i = [], o = 0; o < e.length; o++) {
					var n = e[o];
					i[o] = {
						type: n.ItemType,
						num: n.ItemNum,
						typeid: n.ItemId,
						isread: t
					}
				}
				return i
			}
		}, cc._RF.pop()
	}, {}],
	FarmAction: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "94d26YhCmtJ34fq/LJOpVHS", "FarmAction"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.actionFrame1 = 0, t.isCoinAction = !1, t.isCoinAction2 = !1, t.LastPlayAudioFrameList = [], t.LastPlayActionFrame1 = 0, t.LastPlayActionFrame2 = 0, t.marketIng = !1, t.xuehuaSpriteList = [], t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					this.owner = e, this.marketIng = !1, this.owner.isOtherUser || this.createCoinAction0()
				}, t.prototype.createCoinAction0 = function() {
					this.owner.isCreate() && !this.isCoinAction && (this.isCoinAction = !0, this.owner.ProgressBar.node.getChildByName("Sprite").stopAllActions(), this.owner.ProgressBar.node.getChildByName("Sprite").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, 0, 15), cc.moveBy(.2, 0, -17), cc.moveBy(.05, 0, 4), cc.moveBy(.05, 0, -2), cc.delayTime(.3)))))
				}, t.prototype.createAction0 = function(e) {
					void 0 === e && (e = !1);
					for (var t = this.owner.getSpritePathXX(), i = 0; i < t; i++)
						if (void 0 != this.owner.cropSpriteList[i]) {
							this.owner.cropSpriteList[i].stopAllActions();
							var o = window.Constant.cropSpriteNum[this.owner.getSpritePathKey()][i];
							this.owner.setCropScale(i, o.s), this.owner.cropSpriteList[i].x = o.x, this.owner.cropSpriteList[i].y = o.y;
							var n = this.owner.cropSpriteList[i].scaleX,
								a = this.owner.cropSpriteList[i].scaleY;
							this.owner.cropSpriteList[i].runAction(cc.sequence(cc.spawn(cc.moveBy(.1, cc.v2(0, 30)), cc.scaleTo(.1, n > 0 ? n + .5 : n - .5, a + .5)), cc.spawn(cc.moveBy(.1, cc.v2(0, -30)), cc.scaleTo(.1, n, a)))), e && this.owner.cropSpriteList[i].runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.moveBy(.1, cc.v2(0, -30)), cc.scaleTo(.1, 0, 0))))
						}
				}, t.prototype.createAction1 = function() {
					this.createAction0();
					var e = this,
						t = new cc.Node,
						i = t.addComponent(cc.Sprite);
					window.Func._addSpritePic2(i, "texture/tps/common", "s_1"), t.zIndex = 102, t.scale = .5;
					var o = window.Game.TopCoinObj;
					o.addChild(t);
					var n = window.PointConvertUtil.convetOtherNodeSpaceAR(this.owner.ProgressBar.node.getChildByName("Sprite"), o);
					t.setPosition(n);
					var a = o.getChildByName("bg3").getPosition().x,
						r = o.getChildByName("bg3").getPosition().y;
					if (a += o.getChildByName("bg3").getChildByName("bgSprite1").getPosition().x, t.runAction(cc.sequence(cc.moveTo(.3, cc.v2(a, r)), cc.removeSelf(!0), cc.callFunc(function() {
							e.createAudio(2)
						}))), !(0 != this.LastPlayActionFrame1 && window.IndexScene.curFrame - this.LastPlayActionFrame1 < 20)) {
						this.LastPlayActionFrame1 = window.IndexScene.curFrame;
						for (var s = 0; s < 3; s++) this.createCropAcion()
					}
				}, t.prototype.createAction2 = function() {
					if (this.owner.isCreate()) {
						var e = this,
							t = new cc.Node,
							i = t.addComponent(cc.Sprite);
						window.Func._addSpritePic2(i, "texture/tps/common", "s_1"), t.zIndex = 102, t.scale = .5;
						var o = this.owner.node.getParent();
						o.addChild(t);
						var n = window.PointConvertUtil.convetOtherNodeSpaceAR(this.owner.ProgressBar.node.getChildByName("Sprite"), o);
						n.y += 30, t.setPosition(n);
						var a = window.PointConvertUtil.convetOtherNodeSpaceAR(o.getChildByName("Sprite1").getChildByName("Button"), o);
						a.y -= 20, t.runAction(cc.sequence(cc.moveTo(.6, a), cc.removeSelf(!0), cc.callFunc(function() {
							e.createAudio(2)
						})))
					}
				}, t.prototype.createCropAcion = function() {
					var e = new cc.Node,
						t = e.addComponent(cc.Sprite);
					window.Func._addSpritePic2(t, "texture/tps/crop_icon1", "c_" + this.owner.FarmId), e.scale = 1, e.zIndex = 10, this.owner.node.addChild(e), 1 == this.owner.Model ? e.setPosition(window.Func.randomNum(-5, 5), window.Func.randomNum(0, 50)) : e.setPosition(window.Func.randomNum(-30, 30), 70);
					var i, o = window.Func.randomNum(-200, 200),
						n = e.getPosition().x < 0 ? 1 : -1;
					if (1 == this.owner.Model) {
						var a = window.Func.randomNum(50, 100);
						i = [cc.v2(10 * n, 50), cc.v2(a / 2 * n, window.Func.randomNum(200, 300)), cc.v2(a * n, window.Func.randomNum(-20, -50))]
					} else i = [cc.v2(10 * n, 50), cc.v2(20 * n, 150), cc.v2(50 * n, -20)];
					var r = cc.sequence(cc.spawn(cc.sequence(cc.delayTime(.1), cc.rotateBy(.25, o, o)), cc.bezierBy(.5, i)), cc.removeSelf(!0));
					e.runAction(r)
				}, t.prototype.createXueHuaAction = function() {
					if (this.owner.isCreate() && 11 == this.owner.FarmId && !this.xuehuaSpriteList[0]) {
						var e = [{
							x: -40,
							y: 30
						}, {
							x: 20,
							y: 20
						}, {
							x: 30,
							y: 60
						}];
						this.schedule(function() {
							for (var t = 0; t < 3; t++) {
								var i;
								if (this.xuehuaSpriteList[t]) i = this.xuehuaSpriteList[t];
								else {
									var o = (i = new cc.Node).addComponent(cc.Sprite);
									window.Func._addSpritePic2(o, "texture/tps/index", "icon49"), i.scale = 1, i.zIndex = 10, this.owner.node.addChild(i), this.xuehuaSpriteList[t] = i
								}
								i.setPosition(e[t].x, e[t].y), i.stopAllActions(), i.runAction(cc.sequence(cc.fadeIn(.1), cc.moveBy((Math.abs(e[t].y) + 50) / 20, 0, -50), cc.fadeOut(.1)))
							}
						}, 7)
					}
				}, t.prototype.runChangeAction = function(e) {
					if (void 0 === e && (e = 1), 1 == this.owner.Model) this.createAction0();
					else if (3 != e ? (this.owner.node.getChildByName("panel2").stopAllActions(), this.owner.node.getChildByName("panel2").runAction(cc.sequence(cc.scaleTo(0, .9, .9), cc.scaleTo(.1, 1.2, 1.2), cc.scaleTo(.1, 1, 1)))) : (0 == this.actionFrame1 || this.actionFrame1 + 3 < window.IndexScene.curFrame) && (this.owner.node.getChildByName("panel2").stopAllActions(), this.owner.node.getChildByName("panel2").runAction(cc.sequence(cc.scaleTo(.05, 1.2, 1.2), cc.scaleTo(.05, 1, 1))), this.actionFrame1 = window.IndexScene.curFrame), 1 != e) {
						if (0 != this.LastPlayActionFrame2 && window.IndexScene.curFrame - this.LastPlayActionFrame2 < 20) return;
						this.LastPlayActionFrame2 = window.IndexScene.curFrame, this.createCropAcion()
					}
				}, t.prototype.playSGAction = function() {
					this.marketIng = !0;
					var e = this;
					this.owner.ProgressBar.node.active = !1, this.scheduleOnce(function() {
						this.createAction0(!0), this.scheduleOnce(function() {
							var t = new cc.Node,
								i = t.addComponent(cc.Sprite);
							window.Func._addSpritePic2(i, "texture/tps/crop_icon1", "c_" + this.owner.FarmId), t.scale = 1, t.zIndex = 100;
							var o = window.PointConvertUtil.convetOtherNodeSpaceAR(this.owner.ProgressBar.node.getChildByName("Sprite"), window.IndexScene.carSpineObj);
							t.setPosition(o), window.IndexScene.carSpineObj.addChild(t), t.runAction(cc.sequence(cc.moveTo(.3, cc.v2(20, -30)), cc.callFunc(function() {
								e.owner.getSeed(), window.Game2.createMarketEffect2()
							}), cc.removeSelf(!0)))
						}, .3)
					}, .2 * this.owner.Id)
				}, t.prototype.createAudio = function(e) {
					void 0 === e && (e = 1), void 0 != this.LastPlayAudioFrameList[e] && window.IndexScene.curFrame - this.LastPlayAudioFrameList[e] < 20 || 2 == window.Config.Step && 2 == e || (this.LastPlayAudioFrameList[e] = window.IndexScene.curFrame, window.Func._addAudioPic("sound/" + (1 == e ? "harvest" : "gold")))
				}, t = __decorate([n], t)
			}(cc.Component));
		i.FarmAction = a, cc._RF.pop()
	}, {}],
	FarmCollectLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "a83caePRpdOeq5IfcRBsCoi", "FarmCollectLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hsLabel = null, t.timeLabel = null, t.btNode = null, t.btNode2 = null, t.btNode3 = null, t.mbCoin = 0, t.nowCoin = 0, t.addCoin = 0, t.adId = 7, t.enoughCoin = 0, t.offline_allcoin = [], t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.updateUi = function(e) {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0), this.hsLabel.string = window.Func.moneyChange(e), this.offline_allcoin = [];
					var t = window.FarmManager.getOffline_Coin();
					for (var i in t) void 0 != t[i] && (this.offline_allcoin[i] = t[i]);
					this.enoughCoin = e, this.btNode3.active = !1, this.btNode2.active = !1, this.btNode.active = !1, this.btNode.getChildByName("Label").getComponent(cc.Label).string = window.JsonManager.getData("Advertisement", this.adId).ButtonDes, this.nowCoin = e, this.timeLabel.string = "Th\u1eddi gian offline" + window.Func.timestampToTime2(window.IndexScene.getOffTime()), window.Game2.ifEnoughPlayAd(this.adId) ? this.btNode.active = !0 : window.Game2.ifEnoughPlayShare(this.adId, window.Constant.shareIdList.OFFLINE_REVENUE) ? this.btNode3.active = !0 : this.btNode2.active = !0
				}, t.prototype.update = function() {
					window.IndexScene.curFrame % 2 == 0 && this.mbCoin > 0 && this.nowCoin != this.mbCoin && this.addCoin > 0 && (this.nowCoin = Math.min(this.nowCoin + this.addCoin, this.mbCoin), this.hsLabel.string = window.Func.moneyChange(this.nowCoin))
				}, t.prototype.setCollectTimeGetCropDouble = function() {
					for (var e = 0, t = 1; t < window.FarmManager.farms.length; t++) {
						var i = window.FarmManager.farms[t];
						if (void 0 != i && i.isCreate()) {
							var o = this.offline_allcoin[i.Id];
							o && (e += o, i._SecretClass.addCurCoin(o))
						}
					}
					return 2 * e
				}, t.prototype.BtShare = function() {
					var e = this;
					window.WxFunc.createShare(window.Constant.shareIdList.OFFLINE_REVENUE, function() {
						e.mbCoin = e.setCollectTimeGetCropDouble(), e.addCoin = Math.max(0, Math.floor((e.mbCoin - e.nowCoin) / 15)), e.btNode2.active = !0, e.btNode3.active = !1, e.btNode.active = !1
					})
				}, t.prototype.BtOk = function() {
					var e = this;
					window.WxFunc.OpenAd(this.adId, function() {
						e.mbCoin = e.setCollectTimeGetCropDouble(), e.addCoin = Math.floor((e.mbCoin - e.nowCoin) / 15), e.btNode2.active = !0, e.btNode.active = !1, e.btNode.active = !1
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "hsLabel", void 0), __decorate([a(cc.Label)], t.prototype, "timeLabel", void 0), __decorate([a(cc.Node)], t.prototype, "btNode", void 0), __decorate([a(cc.Node)], t.prototype, "btNode2", void 0), __decorate([a(cc.Node)], t.prototype, "btNode3", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FarmCollectLayer = r, cc._RF.pop()
	}, {}],
	FarmController: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "043d5VpBdNHyYdKBdXWkREM", "FarmController"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("SecretDataController"),
			n = e("FarmHelper"),
			a = e("FarmData"),
			r = e("FarmAction"),
			s = cc._decorator,
			d = s.ccclass,
			c = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.HClick = !1, t.Model = 1, t.Id = 0, t.FarmId = 0, t.m_panel1 = null, t.m_panel2 = null, t.progressVal = 0, t.ProgressBar = null, t.progress_Label_coin_label = null, t.panel1_Label_coin_node = null, t.tLabel = null, t.cropSprite = null, t.cropSpriteList = [], t.up_level_Node = null, t.up_coin_Node = null, t.up_crop_Node = null, t.up_progress_Node = null, t.AniNum = 0, t.AniNum2 = 1, t.showSecondTimes = 0, t.showSecondTimes2 = 0, t.data = null, t._SecretClass = null, t._FarmHelper = null, t._FarmData = null, t._FarmAction = null, t.isOtherUser = !1, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e) {
					this.Id = e, this.FarmId = this.getFileData("FarmId"), window.FarmManager.isUpFarmOpen(this.Id) || (this.FarmId = 0), this.loadData(), this.checklook(), this.node.zIndex = 100 - e, this.reloadNode();
					var t, i = 0;
					this.node.on("touchstart", function(e) {
						var o = e.getLocation();
						t = o.x, i = o.y, this.onclickRecover(), window.FarmManager.startTouchFunc(e)
					}, this), this.node.on("touchmove", function(e) {
						window.FarmManager.moveTouchFunc(e)
					}, this), this.node.on("touchend", function(e) {
						var o = e.getLocation(),
							n = o.x - t,
							a = o.y - i;
						n < 20 && a < 20 && !this.isCreate() && this.onclickCreate()
					}, this), this._SecretClass = new o.SecretDataController, this._SecretClass.init(this), this._FarmHelper = new n.FarmHelper, this._FarmHelper.init(this), this._FarmData = new a.FarmData, this._FarmData.init(this), this._FarmAction = new r.FarmAction, this._FarmAction.init(this);
					var s = window.FileData.getFileData("nowGameTime");
					if ("" != s && "number" == typeof s) {
						var d = Math.floor(((new Date).getTime() - s) / 1e3);
						d = Math.min(d, window.IndexScene.maxOffLineTime), window.IndexScene.setOffTime(d);
						var c = d / this._FarmData.getEnoughTime() * this._FarmData.getGetDoneCoin();
						window.FarmManager.isAutoProduce(this.Id) || (c = this._SecretClass.getCurCoin() > 0 ? 0 : Math.min(c, this._FarmData.getGetDoneCoin())), window.FarmManager.addOffline_getCoin(this.Id, c), this._SecretClass.addCurCoin(c)
					}
					this.panel1_Label_coin_node.getComponent(cc.Label).string = "" + window.Func.moneyChange(this._FarmData.getOpenBaseCoin()), this.reloadTyUi(), this.reloadUpCrop(), this.createCrop(), this.reloadSZSprite(!1)
				}, t.prototype.checklook = function() {
					window.Config.isLooking && this.data && 0 == this.data.Check && (this.FarmId = window.JsonManager.farmTable[this.Id][0].Id, this.loadData())
				}, t.prototype.reloadNode = function() {
					this.panel1_Label_coin_node = this.m_panel1.getChildByName("Label_coin");
					var e = this.m_panel1.getChildByName("progressbar1"),
						t = window.PointConvertUtil.convetOtherNodeSpaceAR(e, this.node.getParent()),
						i = cc.instantiate(e);
					e.removeFromParent(!0), this.node.getParent().addChild(i), i.setPosition(t), i.zIndex = 200, this.ProgressBar = i.getComponent(cc.ProgressBar), this.progress_Label_coin_label = i.getChildByName("Label_coin").getComponent(cc.Label), this.up_level_Node = this.m_panel2.getChildByName("lvLabel"), this.up_coin_Node = this.m_panel2.getChildByName("coinLabel"), this.up_crop_Node = this.m_panel2.getChildByName("crop"), this.up_progress_Node = this.m_panel2.getChildByName("progressbar"), this.node.getChildByName("noticeSprite").active = !1
				}, t.prototype.initOther = function(e, t) {
					this.isOtherUser = !0, this.Id = e, this.FarmId = t.FarmId || 0, this.node.zIndex = 100 - e, this.checklook(), this.loadData(), this.reloadNode(), this._FarmHelper = new n.FarmHelper, this._FarmHelper.init(this), this._FarmData = new a.FarmData, this._FarmData.init(this), this._FarmAction = new r.FarmAction, this._FarmAction.init(this), this.reloadUpShow(), this.reloadCrop(), this.createCrop(), this.reloadCropCoinShow(), this.ProgressBar.node.active = !1, this.panel1_Label_coin_node.active = !1
				}, t.prototype.reloadSZSprite = function(e, t) {
					void 0 === t && (t = !0), this.node.getChildByName("szSprite").active = e, this.node.getChildByName("szSprite").stopAllActions(), e && (this.node.getChildByName("szSprite").rotation = 20, this.node.getChildByName("szSprite").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25, 0), cc.rotateBy(.5, 25, 0)))), t && this.scheduleOnce(function() {
						this.reloadSZSprite(!1)
					}, 3))
				}, t.prototype.updateSz = function() {
					var e = window.FileData.getFileData("createfarm9"),
						t = window.FileData.getFileData("getNowSeedTimes");
					this.isCreate() || 1 != this.Model || 1 != window.IndexScene.mType || !(this.Id > 2 || t > 0) || "number" == typeof e || this.node.getChildByName("szSprite").active || this._FarmHelper.ifBaseType() || !window.IndexScene._IndexHelper.getSzShowState() || this.reloadSZSprite(!0, !1)
				}, t.prototype.getSpritePathKey = function() {
					var e = this.data.Id;
					return "number" == typeof window.Constant.cropSpriteNum[e] ? e = window.Constant.cropSpriteNum[e] : void 0 == window.Constant.cropSpriteNum[e] && (e = this.Id, "number" == typeof window.Constant.cropSpriteNum[e] && (e = window.Constant.cropSpriteNum[e])), e
				}, t.prototype.getSpritePathXX = function() {
					return void 0 == window.Constant.cropSpriteNum[this.getSpritePathKey()] ? 1 : window.Constant.cropSpriteNum[this.getSpritePathKey()].length
				}, t.prototype.clearSpine = function() {
					for (var e = this.getSpritePathXX(), t = 0; t < e; t++) void 0 != this.cropSpriteList[t] && null != this.cropSpriteList[t] && (this.cropSpriteList[t].removeFromParent(!0), this.cropSpriteList[t] = null);
					void 0 != window.FarmManager.sunLightEffectArr[this.Id - 1] && (window.FarmManager.sunLightEffectArr[this.Id - 1].active = !1, window.FarmManager.sunLightEffectArr[this.Id - 1].getComponent(cc.Animation).stop())
				}, t.prototype.createCrop = function() {
					var e = this.getSpritePathXX();
					if (this.isCreate()) {
						var t = this;
						cc.loader.loadRes("prefabs/crop_spine", function(i, o) {
							if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/crop_spine", i), void t.scheduleOnce(function() {
								t.createCrop()
							}, 2);
							for (var n = 0; n < e; n++) {
								if (t.cropSpriteList[n] = cc.instantiate(o), void 0 != window.Constant.cropSpriteNum[t.getSpritePathKey()]) {
									var a = window.Constant.cropSpriteNum[t.getSpritePathKey()][n];
									t.cropSpriteList[n].x = a.x, t.cropSpriteList[n].y = a.y, "number" != typeof a.s && (a.s = 1), t.setCropScale(n, a.s), t.cropSpriteList[n].zIndex = e - n
								}
								window.Func._addSpritePic4(t.cropSpriteList[n].getComponent("sp.Skeleton"), "spine/crop/c" + t.FarmId + "/skeleton"), t.m_panel1.addChild(t.cropSpriteList[n])
							}
						}), this._FarmAction && this._FarmAction.createXueHuaAction(), this.node.getChildByName("noticeSprite") && (this.node.getChildByName("noticeSprite").active = !1)
					} else this.clearSpine()
				}, t.prototype.setCropScale = function(e, t) {
					var i = Math.abs(t);
					this.cropSpriteList[e].scaleX = 1 * t, this.cropSpriteList[e].scaleY = 1 * Math.abs(i)
				}, t.prototype.isCreate = function() {
					return this.FarmId > 0
				}, t.prototype.loadData = function() {
					this.isCreate() ? this.data = window.JsonManager.getData("Crops", this.FarmId) : this.data = {}, void 0 != this._FarmData && (this._FarmData.data = this.data)
				}, t.prototype.mUpdate = function(e) {
					if (this._FarmHelper.mUpdate(e), this.isCreate() && !this._FarmAction.marketIng) {
						this.progressVal += e;
						var t = e + .1,
							i = this._FarmData.getEnoughTime();
						!(this.progressVal >= i) || this._SecretClass.Coin > 0 && !window.FarmManager.isAutoProduce(this.Id) || (this._SecretClass.addCurCoin(this._FarmData.getGetDoneCoin()), this.reloadCoin(), window.FarmManager.isAutoProduce(this.Id) && (this.progressVal = 0), this.setFileData("progressCoin", this._SecretClass.getCurCoin()), this.setFileData("progressCoinTime", (new Date).getTime()), this.showSecondTimes++), this.ProgressBar.progress = i <= t ? 1 : Math.min(this.progressVal / i, 1), window.IndexScene.curFrame % 120 == 0 && (this._SecretClass.getCurCoin(), this._SecretClass.getCurLevel()), window.IndexScene.curFrame % 3 == 0 && i <= t && window.FarmManager.isAutoProduce(this.Id) && (this.AniNum2 = this.AniNum2 + 1 > 2 ? 1 : this.AniNum2 + 1, window.Func._addSpritePic2(this.ProgressBar.node.getChildByName("bar").getComponent(cc.Sprite), "texture/tps/index", "icon14_" + this.AniNum2, !1)), window.FarmManager.isAutoProduce(this.Id) && (this.showSecondTimes >= Math.ceil(1 / i) || this.showSecondTimes >= 40 || i > 1 && this._SecretClass.getCurCoin() > 0) && (this.showSecondTimes2 = this.showSecondTimes, this.showSecondTimes = 0), this._FarmData.getSecondGetCoin()
					}
					window.IndexScene.curFrame % 60 && this.updateSz()
				}, t.prototype.changeModel = function() {
					if (this.Model = window.IndexScene.Model, this.reloadMap(), 1 == this.Model && window.IndexScene.SnowTimeNum > 0 && this.isCreate() ? void 0 != window.FarmManager.sunLightEffectArr[this.Id - 1] && (window.FarmManager.sunLightEffectArr[this.Id - 1].active = !0, window.FarmManager.sunLightEffectArr[this.Id - 1].getComponent(cc.Animation).play()) : void 0 != window.FarmManager.sunLightEffectArr[this.Id - 1] && (window.FarmManager.sunLightEffectArr[this.Id - 1].active = !1, window.FarmManager.sunLightEffectArr[this.Id - 1].getComponent(cc.Animation).stop()), this.reloadSZSprite(!1), window.IndexScene._IndexHelper.resetSZFrame2(), window.IndexScene._IndexHelper.isUpGuide = !1, 2 == this.Model) {
						var e = this.node.getChildByName("panel2").getChildByName("szSprite");
						e && (e.active = !1), window.IndexScene.getTaskValue() == this.Id && this.reloadSZSprite(!0)
					}
				}, t.prototype.reloadMap = function() {
					var e = this.node.getChildByName("panel2"),
						t = this.node.getChildByName("panel1"),
						i = this.ProgressBar.node,
						o = this.panel1_Label_coin_node;
					1 == this.Model ? (this.isCreate() ? (i.active = !0, o.active = !1) : (i.active = !1, o.active = !0), t.active = !0, e.active = !1) : 2 == this.Model && (this.isCreate() ? (t.active = !1, e.active = !0) : (t.active = !0, e.active = !1), i.active = !1, this.reloadUpUi()), this._FarmAction.runChangeAction(1)
				}, t.prototype.reloadUpUi = function() {
					var e = this._FarmData.getUpCoin();
					this.up_level_Node.getComponent(cc.Label).string = "" + this._SecretClass.getCurLevel(), this.up_coin_Node.getComponent(cc.Label).string = "" + window.Func.moneyChange(e), this.up_progress_Node.getComponent(cc.ProgressBar).progress = this._FarmData.getNextLvBar(), this.reloadUpShow()
				}, t.prototype.reloadUpShow = function() {
					2 == this.Model && this.isCreate() && (this._FarmData.getUpCoin() > window.Data.getGold() ? this.node.getChildByName("panel2").getChildByName("mSprite").active = !0 : this.node.getChildByName("panel2").getChildByName("mSprite").active = !1)
				}, t.prototype.reloadUpCrop = function() {
					window.Func._addSpritePic2(this.up_crop_Node.getComponent(cc.Sprite), "texture/tps/crop_icon1", "c_" + this.FarmId), this.up_crop_Node.scale = 1.2
				}, t.prototype.reloadCrop = function() {
					var e = this._FarmHelper.getBasePath();
					e != this.oldBasePath && (this.oldBasePath = e, null != this.cropSprite && (this.cropSprite.active = this.isCreate()), window.Func._addSpritePic2(this.m_panel1.getChildByName("Sprite0").getComponent(cc.Sprite), "texture/tps/base", e), 6 != window.Constant.cropByBase[this.data.Id] || window.Constant.cropByBaseOflow[this.data.Id] ? this.m_panel1.getChildByName("Sprite1").active = !1 : (this.m_panel1.getChildByName("Sprite1").zIndex = 10, this.m_panel1.getChildByName("Sprite1").active = !0), this.reloadTLabel())
				}, t.prototype.reloadCoin2 = function() {
					if (!window.FarmManager.isAutoProduce(this.Id)) {
						var e = this.ProgressBar.node.getChildByName("Sprite"),
							t = this._SecretClass.getCurCoin() > 0 || 1 == this.ProgressBar.progress;
						if (t == e.active) return;
						e.active = t, e.setPosition(e.getPosition().x, 25), e.opacity = 255;
						var i = this._SecretClass.getCurCoin(!1, !0),
							o = e.getChildByName("Label_coin");
						o.getComponent(cc.Label).string = "+" + (0 == i ? "" : i), this.scheduleOnce(function() {
							this.ProgressBar.node.getChildByName("Sprite").getChildByName("Sprite").setPosition(-o.width / 2, 0)
						}, .01)
					}
				}, t.prototype.reloadCoin = function() {
					if (this.isCreate()) {
						var e = this._SecretClass.getCurCoin(!1, !0);
						this.progress_Label_coin_label.string = "" + (0 == e ? "" : e);
						var t = this.ProgressBar.node.getChildByName("Sprite");
						0 == e ? t.active = !1 : (t.active = !0, this._FarmAction.createCoinAction0())
					} else this.progress_Label_coin_label.string = "" + window.Func.moneyChange(window.JsonManager.getData("OpenFarm", this.Id).Money)
				}, t.prototype.reloadSecondSY = function() {}, t.prototype.reloadTLabel = function() {
					var e = "s_1";
					this._FarmHelper.ifBaseType() ? (this.panel1_Label_coin_node.color = new cc.color(72, 53, 34, 255), e = "s_1_2") : this.panel1_Label_coin_node.color = new cc.color(255, 255, 255, 255), window.Func._addSpritePic2(this.panel1_Label_coin_node.getChildByName("Sprite").getComponent(cc.Sprite), "texture/tps/common", e)
				}, t.prototype.reloadTyUi = function() {
					(this.reloadCrop(), this.changeModel(), this.reloadCoin(), this.reloadCropCoinShow(), 6 == this.Id || 7 == this.Id) && ("number" != typeof window.FileData.getFileData("createfarm" + this.Id) && (this.node.getChildByName("noticeSprite").active = !0, this.node.getChildByName("noticeSprite").getChildByName("Label").getComponent(cc.Label).string = 6 == this.Id ? "M\u1edf kh\u00f3aCh\u1ee9c n\u0103ng ch\u1ee3" : "M\u1edf kh\u00f3aCh\u1ee9c n\u0103ng chuy\u1ec3n \u0111\u1ea5t"))
				}, t.prototype.reloadCropCoinShow = function() {
					this.isCreate() ? (1 == window.IndexScene.mType && (this.ProgressBar.node.active = !0), this.node.getComponent(cc.Button).enabled = !1) : (this.ProgressBar.node.active = !1, this.node.getComponent(cc.Button).enabled = !0)
				}, t.prototype.createFarmId = function(e) {
					if (2 != window.IndexScene.mType && window.FarmManager.isUpFarmOpen(this.Id) && window.Data.getGold() >= this._FarmData.getOpenBaseCoin()) {
						if (this.subGold(this._FarmData.getOpenBaseCoin()), this.FarmId = e, this.loadData(), this.checklook(), this.reloadUpCrop(), this.reloadTyUi(), this.setFileData("FarmId", e), this.createCrop(), window.FarmManager.reloadAllCrop(this.Id + 1), "number" != typeof window.FileData.getFileData("createfarm" + this.Id)) window.FileData.getFileData("newAccount") > 0 && window.Func.sendALDCount("2Th\u1ed1ng k\u00ea-Tr\u1ed3ng\u00d4 \u0111\u1ea5t" + this.Id), window.FileData.setFileData("createfarm" + this.Id, 1);
						window.FileData.saveFileData(), window.Config.isLooking || window.Game.createCropAwardWindow(this.Id, e)
					}
				}, t.prototype.onclickCreate = function() {
					if (console.log("T\u1ea1oRu\u1ed9ng"), 1 == this.Model)
						if (this.isCreate()) this.onclickRecover(!0);
						else {
							if (2 == window.IndexScene.mType) return;
							if (!window.FarmManager.isUpFarmOpen(this.Id)) return window.Game.showAlertBar("H\u00e3yM\u1edf kh\u00f3a\u00f4 \u0111\u1ea5t tr\u01b0\u1edbc"), !1;
							if (window.Data.getGold() >= this._FarmData.getOpenBaseCoin()) {
								var e = window.FileData.getFileData("guideStep");
								if (1 != e && 8 != e || window.Game.setNewHelperShow(!1), !window.Config.isLooking)
									if ("number" != typeof window.FileData.getFileData("createfarm" + this.Id))
										if (window.FileData.getFileData("newAccount") > 5)
											if (0 == this.getFileData("get1") && window.FarmManager.createGetNewCropWindow(this.Id)) return;
								window.Game.createSelectCrop(this.Id), this.reloadSZSprite(!1)
							} else window.Game.showAlertBar("Thi\u1ebfu v\u00e0ng")
						}
				}, t.prototype.addGold = function() {
					var e = this.getFileData("CoinSaveSeed"),
						t = this._SecretClass.getCurCoin(),
						i = 3 == window.IndexScene.mType ? 2 : 1;
					e > 0 && (t >= e && (t -= e, window.Data.addGoldNum(e * i, !0, !0, !1)), this.setFileData("CoinSaveSeed", 0)), window.Data.addGoldNum(t * i, !0), window.FarmManager.addPlane_getAllCoin(this._SecretClass.getCurCoin() * i), this.reloadMap()
				}, t.prototype.subGold = function(e) {
					window.Data.subGoldNum(e), window.FarmManager.reloadAllUpShow()
				}, t.prototype.autoAddGold = function() {}, t.prototype.onclickRecover = function(e) {
					if (void 0 === e && (e = !1), this.isCreate())
						if (1 == this.Model) {
							if (this._SecretClass.getCurCoin() > 0) {
								this.addGold(), this._SecretClass.resetCurCoin(), this.progressVal >= this._FarmData.getEnoughTime() && (this.progressVal = 0), this.reloadCoin(), this._FarmAction.createAction1(), this._FarmAction.createAudio(1), window.IndexScene._IndexHelper.resetSZFrame(), window.FileData.saveFileData(!0, !0, !0);
								var t = window.FileData.getFileData("guideStep");
								3 == window.Data.getGold() || 7 == t && window.Data.getGold() >= 5 || 10 == t && window.Data.getGold()
							}
						} else e && this._FarmHelper.clickUpLevel()
				}, t.prototype.getSeed = function() {
					2 != window.IndexScene.mType && 4 != window.IndexScene.mType || (this.FarmId = 0, this.resetFileData(), this.ProgressBar.node.active = !1, this.clearSpine(), window.FarmManager.isCreateCrop() || window.IndexScene.clearAllCrop())
				}, t.prototype.getFileData = function(e) {
					var t = window.FileData.getFileData();
					return "object" != typeof t.farm ? 0 : void 0 == t.farm[this.Id] ? 0 : void 0 == t.farm[this.Id][e] ? 0 : t.farm[this.Id][e]
				}, t.prototype.setFileData = function(e, t) {
					var i = window.FileData.getFileData();
					"object" != typeof i.farm && (i.farm = {}), "object" != typeof i.farm[this.Id] && (i.farm[this.Id] = {}), i.farm[this.Id][e] = t, window.FileData.setFileData("farm", i.farm)
				}, t.prototype.resetFileData = function() {
					var e = window.FileData.getFileData();
					"object" != typeof e.farm && (e.farm = {}), void 0 == e.farm[this.Id] && (e.farm[this.Id] = {}), e.farm[this.Id] = {}, window.FileData.setFileData("farm", e.farm)
				}, __decorate([c(Boolean)], t.prototype, "HClick", void 0), __decorate([c(Number)], t.prototype, "Model", void 0), __decorate([c(Number)], t.prototype, "Id", void 0), __decorate([c(Number)], t.prototype, "FarmId", void 0), __decorate([c(cc.Node)], t.prototype, "m_panel1", void 0), __decorate([c(cc.Node)], t.prototype, "m_panel2", void 0), __decorate([c(Number)], t.prototype, "progressVal", void 0), __decorate([c(cc.ProgressBar)], t.prototype, "ProgressBar", void 0), __decorate([c(cc.Label)], t.prototype, "progress_Label_coin_label", void 0), __decorate([c(cc.Node)], t.prototype, "panel1_Label_coin_node", void 0), __decorate([c(cc.Label)], t.prototype, "tLabel", void 0), __decorate([c(cc.Node)], t.prototype, "cropSprite", void 0), __decorate([c(cc.Node)], t.prototype, "cropSpriteList", void 0), __decorate([c(cc.Node)], t.prototype, "up_level_Node", void 0), __decorate([c(cc.Node)], t.prototype, "up_coin_Node", void 0), __decorate([c(cc.Node)], t.prototype, "up_crop_Node", void 0), __decorate([c(cc.Node)], t.prototype, "up_progress_Node", void 0), __decorate([c(Number)], t.prototype, "AniNum", void 0), __decorate([c(Number)], t.prototype, "AniNum2", void 0), __decorate([c(Number)], t.prototype, "showSecondTimes", void 0), __decorate([c(Number)], t.prototype, "showSecondTimes2", void 0), t = __decorate([d], t)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {
		FarmAction: "FarmAction",
		FarmData: "FarmData",
		FarmHelper: "FarmHelper",
		SecretDataController: "SecretDataController"
	}],
	FarmData: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "abbd00jKeVFt7mwSy8CfIMh", "FarmData"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.owner = null, t._SecretClass = null, t.data = null, t.secondGetCoin = 0, t.Json_OpenFarm_data = null, t.upLevelType = 1, t.oldUpCoin = 0, t.oldUpCoinType = 0, t.oldUpCoinGold = 0, t.oldUpCoinLv = 0, t.oldUpCoinDone = 0, t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					this.owner = e, this._SecretClass = this.owner._SecretClass, this.data = this.owner.data, this.secondGetCoin = 0, this.Json_OpenFarm_data = window.JsonManager.getData("OpenFarm", this.owner.Id)
				}, t.prototype.getUpCoin = function() {
					var e = window.Data.getGold();
					if (0 != this.oldUpCoin && e < this.oldUpCoinDone + this.oldUpCoin && e > this.oldUpCoin && this.oldUpCoinType == window.IndexScene.upLevelType && this.oldUpCoinGold <= e && this.oldUpCoinLv == this._SecretClass.getCurLevel() || this.oldUpCoin >= window.Data.getMaxNumber()) return this.oldUpCoin;
					this.oldUpCoinDone = 0;
					var t = 0,
						i = window.Func.moneyChange2(this.Json_OpenFarm_data.LandGold);
					this.upLevelType = window.IndexScene.upLevelType;
					for (var o = 0; o < (100 == window.IndexScene.upLevelType ? 1e4 : window.IndexScene.upLevelType); o++) {
						var n = i * Math.pow(this.Json_OpenFarm_data.LandMultiple, this._SecretClass.getCurLevel() + o - 1);
						if (this.oldUpCoinDone = n, 100 == window.IndexScene.upLevelType && e < this.getSeedUpLvPriceDown(Math.floor(t + n))) {
							this.upLevelType = o, 0 == o && (this.upLevelType = 1, t += n);
							break
						}
						t += n
					}
					var a = this.getSeedUpLvPriceDown(Math.floor(t));
					return (!isFinite(a) || isNaN(a) || "number" != typeof a || a > window.Data.getMaxNumber()) && (console.log("getUpCoin Tr\u00e0n", this.owner.Id), a = window.Data.getMaxNumber()), this.oldUpCoinType = window.IndexScene.upLevelType, this.oldUpCoin = a, this.oldUpCoinGold = e, this.oldUpCoinLv = this._SecretClass.getCurLevel(), a
				}, t.prototype.getUpCoinLevel = function(e) {
					for (var t = 0, i = window.Func.moneyChange2(this.Json_OpenFarm_data.LandGold), o = 0; o < e - this.owner._SecretClass.getCurLevel(); o++) {
						t += i * Math.pow(this.Json_OpenFarm_data.LandMultiple, this._SecretClass.getCurLevel() + o - 1)
					}
					var n = this.getSeedUpLvPriceDown(Math.floor(t));
					return (!isFinite(n) || isNaN(n) || "number" != typeof n || n > window.Data.getMaxNumber()) && (console.log("getUpCoin Tr\u00e0n", this.owner.Id), n = window.Data.getMaxNumber()), n
				}, t.prototype.getOpenBaseCoin = function() {
					var e = Math.floor(window.Func.moneyChange2(this.Json_OpenFarm_data.Money));
					if (e > 0) {
						var t = window.FileData.getFileData("nowSceneId");
						"number" != typeof t && (t = 1);
						var i = window.JsonManager.getData("MoveLand", t);
						if (void 0 != typeof i) {
							var o = parseFloat(window.Func.moneyChange2(i.MovePrice));
							void 0 != typeof o && (e = Math.floor(e * o))
						}
					}
					return e
				}, t.prototype.getCropLv = function() {
					var e = window.FarmManager.getToolFileData(window.Constant.getToolKey(1, 3, this.owner.Id), !1);
					return window.JsonManager.getCropLNData2(this.owner.Id, e)
				}, t.prototype.getAllCropLv = function() {
					for (var e = window.FarmManager.getToolFileData(window.Constant.getToolKey(1, 1, 1), !1), t = window.JsonManager.getTable("GoldShopProfit"), i = 1, o = 0; o < e; o++) i *= t[o].Multiple;
					return i
				}, t.prototype.getProduceTimeTool = function() {
					return Math.max(1, 2 * window.FarmManager.getToolFileData(window.Constant.getToolKey(1, 4, 1), !1))
				}, t.prototype.getSeedDouble = function() {
					var e = window.FarmManager.getToolFileData(window.Constant.getToolKey(1, 5, 1), !1);
					if (void 0 != window.JsonManager.getData("GoldShopSeed", e)) {
						for (var t = 0, i = window.JsonManager.getTable("GoldShopSeed"), o = 0; o < e; o++) t += i[o].SeedAdd;
						return Math.max(0, t / 100)
					}
					return 0
				}, t.prototype.getSeedUpLv = function() {
					var e = window.FarmManager.getToolFileData(window.Constant.getToolKey(2, 2, 1), !1);
					if (void 0 != window.JsonManager.getData("SeedShopSeed", e)) {
						for (var t = 0, i = window.JsonManager.getTable("SeedShopSeed"), o = 0; o < e; o++) t += i[o].SeedAdd;
						return Math.max(0, t / 100)
					}
					return 0
				}, t.prototype.getSeedUpLvPriceDown = function(e) {
					return window.FarmManager.getToolFileData(window.Constant.getToolKey(2, 3, this.owner.Id), !1) > 0 ? e - .2 * e : e
				}, t.prototype.getSeedAllProfit = function() {
					var e = window.FarmManager.getToolFileData(window.Constant.getToolKey(2, 4, 1), !1);
					if (void 0 != window.JsonManager.getData("SeedShopProfit", e)) {
						for (var t = 1, i = window.JsonManager.getTable("SeedShopProfit"), o = 0; o < e; o++) t *= i[o].Multiple;
						return t
					}
					return 0
				}, t.prototype.getDiamDouble = function() {
					return 3 * window.FarmManager.getToolFileData(window.Constant.getToolKey(3, 1, 1), !1)
				}, t.prototype.getSeedDouble1 = function() {
					return .01 + this.getSeedUpLv() + this.getSeedDouble()
				}, t.prototype.getSeedDouble2 = function() {
					return this.getSeedDouble1() * window.Data.getSeed()
				}, t.prototype.getSeedDouble3 = function() {
					return .01 * window.Data.getSeed()
				}, t.prototype.getGetDoneCoin = function(e) {
					if (void 0 != this.data.Prod) {
						var t = window.FileData.getFileData("nowChangeScene");
						("number" != typeof t || isNaN(t)) && (t = 1);
						var i = this.getCropProd() * this._SecretClass.getCurLevel() * window.IndexScene.ifSnowingCrop(e) * this.getCropAllCoin();
						return Math.max(1, i)
					}
					return 0
				}, t.prototype.getCropAllCoin = function() {
					var e = window.FileData.getFileData("nowSceneId");
					"number" != typeof e && (e = 1);
					var t = window.JsonManager.getData("MoveLand", e).Add;
					"number" != typeof t && (t = 1);
					var i = window.Game2.getShareResultFileData(window.Constant.shareIdList.DCR);
					"number" != typeof i && (i = 0);
					var o = Math.max(1, this.getSeedDouble2()) * Math.max(1, this.getCropLv()) * Math.max(1, this.getAllCropLv()) * Math.max(1, this.getSeedAllProfit()) * Math.max(1, this.getDiamDouble()) * t;
					return i >= 0 ? o *= 1 + i : o /= 1 + Math.abs(i), o
				}, t.prototype.getCropProd = function() {
					var e = window.Game.getCropMaxLevel(this.owner.FarmId),
						t = this.data.Prod * window.Game.CROP_LEVEL_DOUBLE[Math.max(0, e)];
					return "number" != typeof t && (t = this.data.Prod), t
				}, t.prototype.getGetDoneCoinToShow = function() {
					return this.getCropAllCoin()
				}, t.prototype.getEnoughTime = function() {
					if (void 0 != this.data.Time) {
						var e = this.data.Time,
							t = this._SecretClass.Level,
							i = Math.floor(t / this.Json_OpenFarm_data.DoubleLevel);
						return i > 0 && (e /= 2 * i), e / this.getProduceTimeTool()
					}
					return 1e3
				}, t.prototype.getNextLvBar = function() {
					return this._SecretClass.getCurLevel() % this.Json_OpenFarm_data.DoubleLevel / this.Json_OpenFarm_data.DoubleLevel
				}, t.prototype.getSecondGetCoin = function(e) {
					void 0 === e && (e = !0);
					var t = this.secondGetCoin;
					if (!e && this.secondGetCoin > 0) return this.secondGetCoin;
					var i = this.getEnoughTime(),
						o = this.getGetDoneCoin(),
						n = o / i;
					return i < 1 && this.owner.showSecondTimes2 > 0 && (n = this.owner.showSecondTimes2 * o), this.secondGetCoin = n, t != n && window.Game.reloadGoldLabel(), n
				}, t = __decorate([n], t)
			}(cc.Component));
		i.FarmData = a, cc._RF.pop()
	}, {}],
	FarmHelper: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f5661acNK5BrZAa7RtfLXPK", "FarmHelper"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.holdTimeEclipse = 0, t.holdClick = !1, t.holdCCCClick = !1, t.lastShowAlertFrame = 0, t.owner = null, t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					this.owner = e, this.owner.node.getChildByName("panel2").on("touchstart", function(e) {
						this.holdTimeEclipse = 0, this.holdClick = !0
					}, this), this.owner.node.getChildByName("panel2").on("touchend", function(e) {
						this.holdClick = !1, this.holdCCCClick || this.clickUpLevel(2)
					}, this), this.owner.node.getChildByName("panel2").on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
						this.holdClick = !1, this.holdCCCClick || this.clickUpLevel(2)
					}, this)
				}, t.prototype.mUpdate = function(e) {
					if (this.owner.isCreate())
						if (2 == this.owner.Model && this.holdClick && this.owner.node.getChildByName("panel2").active && !window.IndexScene.isNotShowLayer2()) {
							if (this.holdTimeEclipse++, this.holdTimeEclipse > 10 && this.holdTimeEclipse >= 12) {
								var t = window.FileData.getFileData("guideStep");
								"number" == typeof t && t >= 15 && this.clickUpLevel(3), this.holdTimeEclipse = 10, this.holdCCCClick = !0
							}
						} else this.holdCCCClick = !1, this.holdClick = !1, this.holdTimeEclipse = 0
				}, t.prototype.clickUpLevel = function(e) {
					if (2 == this.owner.Model) {
						var t = this.owner._FarmData.getUpCoin();
						if (window.Data.getGold() >= t && t < window.Data.getMaxNumber()) {
							var i = this.owner.up_progress_Node.getComponent(cc.ProgressBar).progress,
								o = this.owner._FarmData.upLevelType;
							this.owner._SecretClass.addCurLevel(o), this.owner.setFileData("FarmLevel", this.owner._SecretClass.getCurLevel(!0)), this.owner.reloadUpUi(), this.owner.subGold(t), this.owner._FarmAction.runChangeAction(e);
							var n = this.owner.up_progress_Node.getComponent(cc.ProgressBar).progress;
							(i >= n || 0 == n) && window.IndexScene.showNoticeSprite(this.owner.FarmId), 5 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(6), window.Game.updateNewHelper());
							var a = window.FileHelper.getTaskFinishFileData(3, 6);
							window.FileHelper.setTaskFinishFileData(3, 6, a + o);
							var r = this.owner.node.getChildByName("panel2").getChildByName("szSprite");
							r && (r.active = !1), window.IndexScene._IndexHelper.isUpGuide = !1, window.IndexScene._IndexHelper.resetSZFrame2(), window.FarmManager.reloadAllUpUi()
						} else(0 == this.lastShowAlertFrame || this.lastShowAlertFrame + 40 < window.IndexScene.curFrame) && (window.Game.showAlertBar("Thi\u1ebfu v\u00e0ng"), this.lastShowAlertFrame = window.IndexScene.curFrame)
					}
				}, t.prototype.ifBaseType = function() {
					return !!this.owner.isOtherUser || (!window.FarmManager.isUpFarmOpen(this.owner.Id) || window.Data.getGold() < this.owner._FarmData.getOpenBaseCoin())
				}, t.prototype.getBasePath = function() {
					var e = "1_1";
					return this.owner.isCreate() ? void 0 != window.Constant.cropByBase[this.owner.FarmId] && (e = window.Constant.cropByBase[this.owner.FarmId] + "_1") : e = this.ifBaseType() ? "0_2" : "0_1", "m_" + e
				}, __decorate([a(Number)], t.prototype, "holdTimeEclipse", void 0), __decorate([a(Boolean)], t.prototype, "holdClick", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FarmHelper = r, cc._RF.pop()
	}, {}],
	FarmManager: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "53969LdSzVCMLkCwgPAGOHU", "FarmManager"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc.MotionStreak,
			n = cc._decorator,
			a = n.ccclass,
			r = n.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.farms = new Array, t.sunLightEffectArr = new Array, t._mouseDown = !1, t.plane_getAllCoin = 0, t.offline_getCoin = [], t.GetNewCropId = 0, t
				}
				return __extends(t, e), t.prototype.createFarm = function() {
					cc.log("createFarm"), this.offline_getCoin = [], this.offline_getCoin[0] = 0, this.plane_getAllCoin = 0, this.createFarmData();
					var e = this;
					cc.find("Canvas/panel/bg").on("touchstart", function(t) {
						e.startTouchFunc(t)
					}), cc.find("Canvas/panel/bg").on("touchmove", function(t) {
						e.moveTouchFunc(t)
					})
				}, t.prototype.createFarmData = function() {
					cc.log("createFarmData");
					for (var e = this, t = 1; t <= window.Constant.AllBaseCrop; t++) {
						e.offline_getCoin[t] = 0;
						var i = window.Constant.cropSpritePosList[t - 1];
						e.createSunLightEffect(i, t - 1)
					}
					for (t = 1; t <= window.Constant.AllBaseCrop; t++) void 0 != this.farms[t] && this.farms[t].node.removeFromParent(!0);
					this.farms = [], cc.loader.loadRes("prefabs/index/farm", function(t, i) {
						if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/farm", t), void e.createFarmData();
						for (var o = 1; o <= window.Constant.AllBaseCrop; o++) {
							var n = window.Constant.cropSpritePosList[o - 1];
							void 0 != e.farms[o] && e.farms[o].node.removeFromParent(!0);
							var a = cc.instantiate(i);
							a.name = "farm" + o, cc.find("Canvas/panel/farm_panel").addChild(a), a.setPosition(n), e.farms[o] = a.getComponent("FarmController"), e.farms[o].init(o)
						}
						window.IndexScene.ifOpenFreeGetDiam(), window.IndexScene.node.getChildByName("panel").active && e.scheduleOnce(function() {
							window.Game.createFarmCollectWindow()
						}, .2)
					})
				}, t.prototype.addPlane_getAllCoin = function(e) {
					this.plane_getAllCoin += parseFloat(e)
				}, t.prototype.resetPlane_getAllCoin = function(e) {
					this.plane_getAllCoin = 0
				}, t.prototype.getPlane_getAllCoin = function() {
					return this.plane_getAllCoin
				}, t.prototype.addOffline_getCoin = function(e, t) {
					this.offline_getCoin[e] += t
				}, t.prototype.resetOffline_getAllCoin = function() {
					for (var e = 1; e <= window.Constant.AllBaseCrop; e++) this.offline_getCoin[e] = 0
				}, t.prototype.getOffline_getCoin = function(e) {
					return this.offline_getCoin[e]
				}, t.prototype.getOffline_getAllCoin = function() {
					for (var e = 0, t = 1; t <= window.Constant.AllBaseCrop; t++) void 0 != this.offline_getCoin[t] && (e += this.offline_getCoin[t]);
					return e
				}, t.prototype.getOffline_Coin = function() {
					return this.offline_getCoin
				}, t.prototype.createSunLightEffect = function(e, t) {
					var i = this;
					cc.loader.loadRes("prefabs/effect/SunLightEffect", function(o, n) {
						if (o) return console.log("prefabs/effect/SunLightEffect", o), void this.createSunLightEffect(e, t);
						var a = cc.instantiate(n);
						cc.find("Canvas/panel/farm_panel").addChild(a), a.setPosition(e), a.zIndex = 101, i.sunLightEffectArr[t] = a, a.active = !1, void 0 != i.farms[t + 1] && i.farms[t + 1].isCreate() && (a.active = !0, a.getComponent(cc.Animation).play())
					})
				}, t.prototype.startTouchFunc = function(e, t) {
					void 0 === t && (t = !1);
					var i = this,
						n = cc.find("Canvas/panel2/streakSprite"),
						a = e.getLocation(),
						r = window.PointConvertUtil.worldConvertLocalPointAR(cc.find("Canvas/panel"), a);
					if (n.setPosition(r), n.getComponent(o).enabled = !1, t) {
						i = this;
						for (var s = 1; s < i.farms.length; s++) {
							var d = i.farms[s];
							void 0 != d && i.recoverCrop(e, d)
						}
					}
				}, t.prototype.moveTouchFunc = function(e) {
					for (var t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && this.recoverCrop(e, i)
					}
					var n = cc.find("Canvas/panel2/streakSprite"),
						a = e.getLocation(),
						r = window.PointConvertUtil.worldConvertLocalPointAR(cc.find("Canvas/panel"), a);
					n.setPosition(r), n.getComponent(o).enabled = !0
				}, t.prototype.endTouchFunc = function(e) {
					for (var t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && (i.HClick = !1)
					}
				}, t.prototype.createGetNewCropWindow = function(e) {
					if ("number" == typeof window.JsonManager.getData("OpenFarm", e).AdvertisementCrop) return this.GetNewCropId = e, window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.getnewcrop_window), !0
				}, t.prototype.recoverCrop = function(e, t) {
					t.node.getBoundingBoxToWorld().contains(e.getLocation()) ? (t.HClick || t.onclickRecover(), t.HClick = !0) : t.HClick = !1
				}, t.prototype.RecoverAllCrop = function(e) {
					void 0 === e && (e = 1);
					for (var t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && i.isCreate() && i._FarmAction.playSGAction()
					}
				}, t.prototype.getFarmById = function(e) {
					if (void 0 !== this.farms[e]) return this.farms[e]
				}, t.prototype.getCropToName = function(e) {
					this.getFarmById(e)
				}, t.prototype.getIsMouseDown = function() {
					return this._mouseDown
				}, t.prototype.createFarmChildren = function(e, t) {
					var i = this.getFarmById(e);
					void 0 != i && i.createFarmId(t)
				}, t.prototype.getFarmNextBaseUpCoin = function() {
					for (var e = 0, t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						if (void 0 != i && !i.isCreate()) {
							e = i._FarmData.getOpenBaseCoin();
							break
						}
					}
					return e
				}, t.prototype.getFarmToLevelCoin = function(e, t) {
					var i = this.getFarmById(e);
					return void 0 != i ? i._FarmData.getUpCoinLevel(t) : 0
				}, t.prototype.getBaseFarmId = function(e) {
					var t = 0,
						i = this.getFarmById(e);
					return void 0 != i && i.isCreate() && (t = i.FarmId), t
				}, t.prototype.getFarmMaxCreateBase = function() {
					for (var e = 0, t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && i.isCreate() && (e = i.Id)
					}
					return e
				}, t.prototype.getFarmSZActionShow = function() {
					for (var e = !1, t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						if (void 0 != i && (e = i.node.getChildByName("szSprite").active)) return e
					}
					return !1
				}, t.prototype.changeFarmModel = function() {
					for (var e = 1; e < this.farms.length; e++) {
						var t = this.farms[e];
						void 0 != t && t.changeModel()
					}
				}, t.prototype.AutoSGAction = function() {
					for (var e = 1; e < this.farms.length; e++) {
						var t = this.farms[e];
						void 0 != t && t.isCreate() && t._FarmAction.playSGAction()
					}
				}, t.prototype.reloadAllUpUi = function() {
					for (var e = 1; e < this.farms.length; e++) {
						var t = this.farms[e];
						void 0 != t && t.isCreate() && t.reloadUpUi()
					}
				}, t.prototype.reloadAllUpShow = function() {
					for (var e = 1; e < this.farms.length; e++) {
						var t = this.farms[e];
						void 0 != t && t.isCreate() && t.reloadUpShow()
					}
				}, t.prototype.isUpFarmOpen = function(e) {
					return void 0 == this.farms[e - 1] || this.farms[e - 1].isCreate()
				}, t.prototype.reloadAllCrop = function(e) {
					void 0 === e && (e = 0);
					for (var t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && (0 != e && e != i.Id || (i.reloadCrop(), i.reloadUpShow()))
					}
				}, t.prototype.mUpdate = function(e) {
					for (var t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && i.mUpdate(e)
					}
				}, t.prototype.isAutoProduce = function(e) {
					return 0 != this.getToolFileData(window.Constant.getToolKey(1, 2, e), !1)
				}, t.prototype.getCropLevel = function(e) {
					var t = this.getFarmById(e);
					return void 0 != t && t.isCreate() ? t._SecretClass.getCurLevel() : 0
				}, t.prototype.getToolList = function(e, t, i, o) {
					void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === o && (o = 1);
					var n = [];
					if (1 == e ? n = this.getToolList1(t, i) : 2 == e ? n = this.getToolList2(t, i, o) : 3 == e ? n = this.getToolList3(t, i) : 4 == e && (n = this.getToolList4(t, i)), 3 != e) {
						n = n.sort(function(e, t) {
							return e.coin < t.coin ? -1 : e.coin > t.coin ? 1 : 0
						})
					}
					if (2 == e)
						for (var a = 0; a < n.length; a++) {
							var r = n[a];
							if (4 == r.type && window.Data.getSeed() / 100 >= r.coin) {
								n.splice(a, 1), n.unshift(r);
								break
							}
						}
					return n
				}, t.prototype.showNewSZGuide = function(e) {
					if (!window.IndexScene._IndexHelper.isUpGuide) {
						var t = window.Game.getNewHelperFileData2(5, 1);
						if (!(t >= 5) && 2 == window.IndexScene.Model)
							for (var i = 1; i < this.farms.length; i++) {
								var o = this.farms[i];
								if (void 0 != o && o.isCreate()) {
									var n = o._FarmData.getUpCoin(),
										a = o.node.getChildByName("panel2").getChildByName("szSprite");
									if (window.Data.getGold() >= n) {
										a.active = !0, a.stopAllActions(), a.rotation = 20, a.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25, 0), cc.rotateBy(.5, 25, 0)))), window.IndexScene._IndexHelper.isUpGuide = !0, window.Game.setNewHelperFileData2(5, 1, t + 1);
										break
									}
									a.active = !1
								}
							}
					}
				}, t.prototype.getLNDoubleCoin = function(e, t) {
					var i = window.JsonManager.getData("GoldShopCrops", e),
						o = window.Func.moneyChange2(i.Initial);
					return t > 1 && (o *= Math.pow(i.Extent1, 1)), t > 2 && (o *= Math.pow(i.Extent2, t - 2)), t >= 20 && (o *= Math.pow(i.Extent3, t - 19)), o
				}, t.prototype.getToolList1 = function(e, t) {
					var i = [];
					if (0 == e || 1 == e) {
						var o = 1,
							n = 1,
							a = 1,
							r = this.getToolFileData(window.Constant.getToolKey(o, n, a), !1) + 1,
							s = window.JsonManager.getData("GoldShopProfit", r);
						if (void 0 != s) {
							var d = {
								model: o,
								type: n,
								id: a,
								name1: "",
								name2: "LN t\u1ea5t c\u1ea3 x" + s.Multiple,
								lv: r,
								coin: window.Func.moneyChange2(s.Price),
								path1: "s_1_1",
								path2: "texture/tps/new_shop1"
							};
							i.push(d)
						}
					}
					for (var c = 1; c < this.farms.length; c++) {
						var l = this.farms[c];
						if (void 0 != l && l.isCreate() && (0 == e || (2 == e || 3 == e) && t == l.Id)) {
							var p = {},
								u = window.JsonManager.getData("Crops", l.FarmId),
								h = (o = 1, n = 2, a = l.Id, this.getToolFileData(window.Constant.getToolKey(o, n, a), !1));
							if (0 == h) p = {
								model: o,
								type: n,
								id: a,
								path1: "c_" + l.FarmId,
								name1: u.Name,
								name2: "M\u1edf t\u1ef1 s\u1ea3n xu\u1ea5t",
								updateid: 1e3 * o + a,
								showsz: window.IndexScene.getTaskValue() == c,
								lv: 1,
								coin: window.Func.moneyChange2(window.JsonManager.getData("OpenFarm", l.Id).AutoUnlock)
							};
							else {
								o = 1, n = 3, a = l.Id;
								h = this.getToolFileData(window.Constant.getToolKey(o, n, a), !1) + 1, p = {
									model: o,
									type: n,
									id: a,
									path1: "c_" + l.FarmId,
									name1: u.Name,
									name2: "L\u1ee3i nhu\u1eadn" + window.JsonManager.getCropLNData1(l.Id, h) + " lần",
									updateid: 1e3 * o + a,
									lv: h,
									coin: this.getLNDoubleCoin(l.Id, h)
								}
							}
							i.push(p)
						}
					}
					if (0 == e || 4 == e) {
						o = 1, n = 4, a = 1;
						var w = this.getToolFileData(window.Constant.getToolKey(o, n, a), !1) + 1,
							m = window.JsonManager.getData("GoldShopTime", w);
						if (void 0 != m) {
							var g = {
								model: o,
								type: n,
								id: a,
								name1: "",
								name2: "Th\u1eddi gian s\u1ea3n xu\u1ea5t-50%",
								lv: w,
								coin: window.Func.moneyChange2(m.Price),
								path1: "s_1_1",
								path2: "texture/tps/new_shop1"
							};
							i.push(g)
						}
					}
					if (0 == e || 5 == e) {
						o = 1, n = 5, a = 1;
						var f = this.getToolFileData(window.Constant.getToolKey(o, n, a), !1) + 1,
							y = window.JsonManager.getData("GoldShopSeed", f);
						if (void 0 != y) {
							var v = {
								model: o,
								type: n,
								id: a,
								name1: "",
								name2: "LN h\u1ea1t +" + y.SeedAdd + "%",
								lv: f,
								coin: window.Func.moneyChange2(y.Price),
								path1: "s_1_1",
								path2: "texture/tps/new_shop1"
							};
							i.push(v)
						}
					}
					return i
				}, t.prototype.getToolList2 = function(e, t, i) {
					for (var o = [], n = 1; n < this.farms.length; n++) {
						var a = this.farms[n];
						if (void 0 != a && a.isCreate())
							if (2 == i) {
								if (0 == e || 1 == e && t == a.Id) {
									var r = 2,
										s = 1,
										d = a.Id,
										c = this.getToolFileData(window.Constant.getToolKey(r, s, d), !1) + 1,
										l = window.JsonManager.SeedShopUpgradeList[a.Id];
									if (void 0 != l && void 0 != l[c]) {
										var p = {
											model: r,
											type: s,
											id: d,
											path1: "c_" + a.FarmId,
											name1: window.JsonManager.getData("Crops", a.FarmId).Name,
											name2: "+50 c\u1ea5p ngay",
											updateid: 1e3 * r + d,
											lv: c,
											coin: window.Func.moneyChange2(l[c].Price)
										};
										o.push(p)
									}
								}
							} else if (0 == e || 3 == e && t == a.Id) {
							r = 2, s = 3, d = a.Id;
							if (0 == this.getToolFileData(window.Constant.getToolKey(r, s, d), !1)) {
								var u = window.JsonManager.getData("SeedShopReduce", a.Id),
									h = {
										model: r,
										type: s,
										id: d,
										path1: "c_" + a.FarmId,
										name1: window.JsonManager.getData("Crops", a.FarmId).Name,
										name2: "Gi\u1ea3m gi\u00e1 20%",
										updateid: 1e3 * r + d,
										lv: 1,
										coin: window.Func.moneyChange2(u.Price)
									};
								o.push(h)
							}
						}
					}
					if (1 == i) {
						if (0 == e || 2 == e) {
							r = 2, s = 2, d = 1;
							var w = this.getToolFileData(window.Constant.getToolKey(r, s, d), !1) + 1,
								m = window.JsonManager.getData("SeedShopSeed", w);
							if (void 0 != m) {
								var g = {
									model: r,
									type: s,
									id: d,
									name1: "Buff h\u1ea1t",
									name2: "LN h\u1ea1t +" + m.SeedAdd + "%",
									lv: w,
									coin: window.Func.moneyChange2(m.Price),
									path1: "s_1_1",
									path2: "texture/tps/new_shop1"
								};
								o.push(g)
							}
						}
						if (0 == e || 4 == e) {
							r = 2, s = 4, d = 1;
							var f = this.getToolFileData(window.Constant.getToolKey(r, s, d), !1) + 1,
								y = window.JsonManager.getData("SeedShopProfit", f);
							if (void 0 != y) {
								var v = {
									model: r,
									type: s,
									id: d,
									name1: "",
									name2: "Thu v\u00e0ng x" + y.Multiple,
									lv: f,
									coin: window.Func.moneyChange2(y.Price),
									path1: "s_1_1",
									path2: "texture/tps/new_shop1"
								};
								o.push(v)
							}
						}
					}
					return o
				}, t.prototype.getToolList3 = function(e, t) {
					for (var i = [], o = window.JsonManager.getTable("DiamondShop"), n = 0; n < o.length; n++) {
						var a = o[n],
							r = a.Type,
							s = a.Id;
						if (0 == e || e == r && t == s) {
							var d = this.getToolFileData(window.Constant.getToolKey(3, r, s), !1) + 1,
								c = {
									model: 3,
									type: r,
									id: s,
									lv: d,
									typenum: a.TypeNum,
									coin: Math.floor(a.MoneyNum),
									path1: 1 == r ? "s_1_1" : "s_2_" + (s - 1),
									path2: "texture/tps/new_shop1"
								};
							1 == a.Type ? (c.name1 = "H\u1ec7 s\u1ed1 LN x" + a.TypeNum, c.name2 = "H\u1ec7 s\u1ed1 hi\u1ec7n: " + (d - 1) * a.TypeNum) : 2 == a.Type && (c.name1 = "+" + a.TypeNum + " gi\u1edd thu nh\u1eadp", c.name2 = "(ch\u1ec9 c\u00e2y t\u1ef1 SX)", c.name3 = "" + window.Func.moneyChange(window.FarmManager.getAddTimeCrop(3600 * c.typenum, (new Date).getTime(), !1, !0)), c.des = ""), i.push(c)
						}
					}
					return i
				}, t.prototype.getToolList4 = function(e, t) {
					if (0 == e || 1 == e)
						for (var i = [], o = window.JsonManager.getTable("Skin"), n = 0; n < o.length; n++) {
							var a = o[n],
								r = a.Id,
								s = this.getToolFileData(window.Constant.getToolKey(4, 1, r), !1);
							if (cc.log("get tool4  " + s), a.Id > 1 && 0 == s) {
								var d = {
									model: 4,
									type: 1,
									id: r,
									name1: a.Name,
									name2: 999 == parseInt(a.Time) ? "V\u0129nh vi\u1ec5n" : a.Time + "ng\u00e0y",
									lv: 1,
									des: a.Des,
									coin: Math.floor(a.MoneyNum)
								};
								i.push(d)
							}
						}
					return i
				}, t.prototype.getMyBuyScene = function() {
					for (var e = [], t = window.JsonManager.getTable("Skin"), i = 0; i < t.length; i++) {
						var o = t[i];
						0 == this.getToolFileData(window.Constant.getToolKey(4, 1, o.Id), !1) && 0 != i || e.push(o)
					}
					return e
				}, t.prototype.upLevelCrop = function(e) {
					this.getFarmById(e)._SecretClass.addCurLevel(50)
				}, t.prototype.getNowCropValue = function() {
					for (var e = 0, t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && i.isCreate() && (e += i._FarmData.getGetDoneCoin())
					}
					return e
				}, t.prototype.getSecondGetCoin = function() {
					for (var e = 0, t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						void 0 != i && i.isCreate() && (e += i._FarmData.getSecondGetCoin(!1))
					}
					return e
				}, t.prototype.getTimeAutoGetCrop = function(e) {
					for (var t = 0, i = 1; i < this.farms.length; i++) {
						var o = this.farms[i];
						void 0 != o && o.isCreate() && (t += e / o._FarmData.getEnoughTime() * o._FarmData.getGetDoneCoin())
					}
					return t
				}, t.prototype.getTimeGetCrop = function(e) {
					for (var t = 0, i = 1; i < this.farms.length; i++) {
						var o = this.farms[i];
						void 0 != o && o.isCreate() && (this.isAutoProduce(o.Id) ? t += e / o._FarmData.getEnoughTime() * o._FarmData.getGetDoneCoin() : o._FarmData.getEnoughTime() <= e && (t += o._FarmData.getGetDoneCoin()))
					}
					return t
				}, t.prototype.getAddTimeCrop = function(e, t, i, o, n) {
					void 0 === i && (i = !1), void 0 === o && (o = !1), void 0 === n && (n = !1);
					var a = 0;
					return window.IndexScene.SnowTimeNum > 0 && (window.IndexScene.reloadXiayuData(), a = window.IndexScene.SnowTimeNum > 0 ? e : Math.floor((t - window.FileData.getFileData("snowTime")) / 1e3)), e > 1 ? window.FarmManager.addTimeGetCrop(e, a, i, o, n) : 0
				}, t.prototype.addTimeGetCrop = function(e, t, i, o, n) {
					for (var a = 0, r = 1; r < this.farms.length; r++) {
						var s = this.farms[r];
						if (void 0 != s && s.isCreate() && s._FarmData.getEnoughTime() < e) {
							var d = 1;
							e == t ? d = e / s._FarmData.getEnoughTime() * s._FarmData.getGetDoneCoin(!0) : 0 == t ? d = e / s._FarmData.getEnoughTime() * s._FarmData.getGetDoneCoin(!1) : (d = t / s._FarmData.getEnoughTime() * s._FarmData.getGetDoneCoin(!0), d += (e - t) / s._FarmData.getEnoughTime() * s._FarmData.getGetDoneCoin(!1)), this.isAutoProduce(s.Id) || (d = s._SecretClass.getCurCoin() > 0 ? 0 : Math.min(d, s._FarmData.getGetDoneCoin())), o || (s._SecretClass.addCurCoin(d, n), s.reloadCoin(), i && this.addOffline_getCoin(s.Id, d)), a += d
						}
					}
					return a
				}, t.prototype.isCreateCrop = function(e) {
					void 0 === e && (e = 0);
					for (var t = 1; t < this.farms.length; t++) {
						var i = this.farms[t];
						if (void 0 != i && i.isCreate() && (0 == e || e == i.Id)) return !0
					}
					return !1
				}, t.prototype.getToolFileData = function(e, t) {
					void 0 === t && (t = !0);
					var i = window.FileData.getFileData(),
						o = 0;
					return void 0 != i.tool && void 0 != i.tool[e] && (o = i.tool[e]), t ? Math.max(o, 1) : o
				}, t.prototype.setToolFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.tool && "" != i.tool || (i.tool = {}), i.tool[e] = t, window.FileData.setFileData("tool", i.tool)
				}, t.prototype.clearToolFileData = function() {
					var e = window.FileData.getFileData();
					if (void 0 != e.tool && "" != e.tool) {
						var t = window.Constant.getToolKey(3, 0, 0),
							i = window.Constant.getToolKey(4, 0, 0);
						for (var o in e.tool) o >= t && o < i || (e.tool[o] = 0);
						window.FileData.setFileData("tool", e.tool)
					}
				}, __decorate([r(Array)], t.prototype, "farms", void 0), __decorate([r(Array)], t.prototype, "sunLightEffectArr", void 0), __decorate([r(Boolean)], t.prototype, "_mouseDown", void 0), t = __decorate([a], t)
			}(cc.Component);
		i.FarmManager = s, cc._RF.pop()
	}, {}],
	FileData: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "21d05B8PwdH9qYbTyTsU2tY", "FileData"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, {
				package_count: 1,
				freeGetGold2: 0,
				getNowSeedTimes: 0,
				online_getGold: 0,
				planeTodayTimes: 0,
				newAccount: 0,
				nowShowSceneId: 0,
				musicSet: 1,
				audioSet: 1,
				today_add_seed: 0,
				max_his_second: 0,
				max_his_title: 1,
				address_city: "",
				title_award: 0,
				isSendTitle: 0,
				TopNoticeId: 0,
				activity_addScene: 0,
				flookNotice: 0,
				dlFriendtimes1: 0,
				dlFriendtimes2: 0,
				nncropBox: 0,
				turnnum: 0,
				linetime: 0
			}),
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.cropBox = [], t
				}
				return __extends(t, e), t.prototype.parseStoredSave = function(e) {
					// JSON mới hoặc AES cũ; lỗi giải mã không xóa bản lưu gốc.
					if ("string" != typeof e || !e) throw new Error("Empty save");
					var t = /^\s*\{/.test(e) ? e : window.Func.unSecretString(e),
						i = JSON.parse(t);
					if (!i || "object" != typeof i || Array.isArray(i)) throw new Error("Invalid save format");
					return i
				}, t.prototype.migratePlainNumbers = function(e) {
					var t = !1;
					function i(e, o) {
						if (!e || "object" != typeof e || o > 15) return;
						Object.keys(e).forEach(function(n) {
							var a = e[n];
							if ("string" == typeof a && a.length >= 24 && /^[A-Za-z0-9+/]+={0,2}$/.test(a) && (/(?:Str|String)$/.test(n) || /^(?:Coin|FarmLevel|history_max_.*)$/.test(n))) {
								try {
									var r = window.Func.unSecretString(a);
									if (/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(r)) e[n] = r, t = !0
								} catch (e) {}
							} else "object" == typeof a && i(a, o + 1)
						})
					}
					return i(e, 0), t
				}, t.prototype.init = function() {
					this.LastUpdateTime = 0;
					var e = cc.sys.localStorage.getItem("data");
					if ("string" == typeof e && "" != e) try {
						this.allData = this.parseStoredSave(e);
						var t = this.migratePlainNumbers(this.allData),
							i = JSON.stringify(this.allData),
							o = window.ArcadeSave;
						if (o && o.isLegacyMigrationPending && o.isLegacyMigrationPending()) {
							if (!o.completeLegacyMigration(i)) throw new Error("Legacy save migration rejected");
						} else if (!/^\s*\{/.test(e) || t) cc.sys.localStorage.setItem("data", i)
					} catch (t) {
						window.ArcadeSave && window.ArcadeSave.failLegacyMigration && window.ArcadeSave.failLegacyMigration(t);
						cc.log("Save lỗi định dạng " + t), cc.sys.localStorage.setItem("copydata", e), this.allData = {}, this.userData = {}
					} else this.allData = {}, this.userData = {}
				}, t.prototype.clear = function() {
					if (1 != window.Config.Model) {
						window.Data.isNewAccount = !0, this.cropBox = [], window.Game.CropLevelNumList = [], window.FileData.setRankFileData("history_max_gold", 0), window.FileData.setRankFileData("history_max_seed", 0), window.FileData.setRankFileData("history_max_diam", 0), window.FileData.setRankFileData("history_max_crop", 0), window.FileData.setRankFileData("history_max_crop_pro", 0), cc.sys.localStorage.setItem("copydata", cc.sys.localStorage.getItem("data")), cc.sys.localStorage.removeItem("data"), cc.sys.localStorage.removeItem("lastdata1"), cc.sys.localStorage.removeItem("lastdata2"), this.allData = {}, this.userData = {}, this.allData.updatetime = (new Date).getTime();
						var e = JSON.stringify(this.allData);
						cc.sys.localStorage.setItem("data", e)
					}
				}, t.prototype.getDataByKey = function(e) {
					if (void 0 != this.allData && void 0 != this.allData[e]) return this.allData[e]
				}, t.prototype.getFileData = function(e, t) {
					return void 0 === t && (t = !0), "cropBox" == e && t ? this.getCropBox() : null == this.allData ? {} : void 0 != e ? void 0 != this.allData[e] ? window.Func.toNumber(this.allData[e]) : void 0 != a[e] ? a[e] : {} : this.allData
				}, t.prototype.getFileSecretData = function() {
					return JSON.stringify(this.allData)
				}, t.prototype.setNHourCropNum = function() {
					var e = Math.max(window.FarmManager.getTimeGetCrop(1), 1);
					window.FileData.setFileData("hourCropNum", e)
				}, t.prototype.resetFileData = function(e) {
					this.allData = e
				}, t.prototype.setFileData = function(e, t) {
					void 0 != t && ("cropBox" != e ? (null == this.allData && (this.allData = {}), this.allData[e] = t, this.isSaveData1 = !0) : this.setCropBox(t))
				}, t.prototype.setCropBox = function(e) {
					e && (this.cropBox = e)
				}, t.prototype.getCropBox = function() {
					return this.cropBox
				}, t.prototype.getTURNFileData = function(e) {
					var t = window.FileData.getFileData(),
						i = 0;
					return "times" == e && (i = window.Constant.Turnning_Max_Times), void 0 != t.turnning && void 0 != t.turnning[e] && (i = t.turnning[e]), i
				}, t.prototype.setTURNFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.turnning && "" != i.turnning || (i.turnning = {}), i.turnning[e] = t, window.FileData.setFileData("turnning", i.turnning)
				}, t.prototype.setRankFileData = function(e, t) {
					null == this.allData && (this.allData = {}), null == this.allData.rank && (this.allData.rank = {}), this.allData.rank[e] = t
				}, t.prototype.getRankFileData = function(e) {
					return null == this.allData ? 0 : void 0 != e && void 0 != this.allData.rank && void 0 != this.allData.rank[e] ? window.Func.toNumber(this.allData.rank[e]) : 0
				}, t.prototype.setHistoryMaxCoin = function(e) {
					if (void 0 === e && (e = 0), 0 == e || 1 == e) {
						var t = window.FileData.getRankFileData("history_max_gold");
						void 0 != t && (t = window.Func.unSecretNumber(t));
						var i = window.Data.getGold();
						(void 0 == t || 0 == t || i > t) && window.FileData.setRankFileData("history_max_gold", window.Func.SecretNumber(i));
						var o = window.FileData.getRankFileData("history_max_crop_pro"),
							n = window.FarmManager.getTimeAutoGetCrop(86400);
						(void 0 == o || o < n) && window.FileData.setRankFileData("history_max_crop_pro", n)
					}
					if (0 == e || 2 == e) {
						var a = window.FileData.getRankFileData("history_max_diam");
						void 0 != a && (a = window.Func.unSecretNumber(a));
						var r = window.Data.getDiam();
						(void 0 == a || 0 == a || r > a) && window.FileData.setRankFileData("history_max_diam", window.Func.SecretNumber(r))
					}
					if (0 == e || 3 == e) {
						var s = window.FileData.getRankFileData("history_max_seed");
						void 0 != s && (s = window.Func.unSecretNumber(s));
						var d = window.Data.getSeed();
						(void 0 == s || 0 == s || d > s) && window.FileData.setRankFileData("history_max_seed", window.Func.SecretNumber(d))
					}
					var c = window.FileData.getRankFileData("history_max_crop");
					void 0 != c && (c = window.Func.unSecretNumber(c));
					var l = window.Game.getCropLevelNum(0, 0);
					(void 0 == c || 0 == c || l > c) && window.FileData.setRankFileData("history_max_crop", window.Func.SecretNumber(l));
					var p = window.FileData.getRankFileData("history_max_goldsecond");
					void 0 != p && (p = window.Func.unSecretNumber(p));
					var u = window.FarmManager.getSecondGetCoin();
					(void 0 == p || 0 == p || u > p) && window.FileData.setRankFileData("history_max_goldsecond", window.Func.SecretNumber(u))
				}, t.prototype.saveFileData = function(e, t, i) {
					if (void 0 === e && (e = !1), void 0 === t && (t = !0), void 0 === i && (i = !1), this.isSaveData1 && !(!i && this.LastUpdateTime > 0 && window.Func.getTimeUnix() - this.LastUpdateTime < 5)) {
						"" == window.Data.Token && window.NetHelper.sendClientErrorRequest("saveFileData Token làtrống\uff0cchưa đăng nhập"), console.log("saveFileData", e, t, i), this.LastUpdateTime = window.Func.getTimeUnix(), this.setNHourCropNum(), this.setHistoryMaxCoin(), void 0 != this.allData.addtime && null != this.allData.addtime && "number" == typeof this.allData.addtime || (this.allData.addtime = (new Date).getTime()), this.allData.updatetime = (new Date).getTime(), this.allData.uid = window.Data.UId || 0;
						var o = window.FileData.getRankFileData("history_max_crop");
						if (void 0 != o && (o = window.Func.unSecretNumber(o)), void 0 != o && o > 0) {
							var n = window.Game.getCropLevelNum(0, 0, !0);
							if (o > n && n > 0)
								if (console.log("\u6709L\u1ed7i\uff0cTh\u1ef1c hi\u1ec7nResetC\u00e2y tr\u1ed3ng", "hCoin4:" + o, "nowCoin4:" + n), "string" == typeof(a = cc.sys.localStorage.getItem("data")) && "" != a) try {
									void 0 != (r = this.parseStoredSave(a)).nncropBox && (this.allData.nncropBox = r.nncropBox, window.FileData.setFileData("cropBox", r.nncropBox), window.Game.initCropBoxData(3)), window.NetHelper.sendClientErrorRequest("hCoin4:" + o + ",nowCoin4:" + n + ", oldCropBox:" + (r.cropBox ? JSON.stringify(r.cropBox) : "") + " . newCropBox:" + JSON.stringify(this.allData.cropBox))
								} catch (e) {
									cc.log("Save l\u1ed7i \u0111\u1ecbnh d\u1ea1ng2 " + e)
								}
						}
						if (!this.allData.nncropBox) try {
							var a = cc.sys.localStorage.getItem("data"),
								r = this.parseStoredSave(a),
								s = cc.sys.localStorage.getItem("lastdata1"),
								d = this.parseStoredSave(s);
							window.NetHelper.sendClientErrorRequest("C\u00e2y tr\u1ed3ngL\u1ed7i1" + (r.nncropBox ? JSON.stringify(r.nncropBox) : "") + " lastdata1:" + (d.nncropBox ? JSON.stringify(d.nncropBox) : ""))
						} catch (e) {}
						var c = this.getCropBox();
						if (c) {
							var l = {};
							for (var p in c)
								if (c[p]) {
									var u = window.Game.getMaxCropKey(c[p]);
									for (var h in c[p])
										if ("object" == typeof c[p][h])
											for (var w in c[p][h]) parseInt(h) >= u && (l[p] || (l[p] = {}), l[p][h] || (l[p][h] = {}), l[p][h][w] = c[p][h][w])
								} window.FileData.setFileData("nncropBox", l)
						}
						cc.sys.localStorage.setItem("bdCropBox", JSON.stringify(this.getCropBox())), window.Config.isLooking || (this.allData.cropBox = {});
						this.migratePlainNumbers(this.allData);
						var m = JSON.stringify(this.allData);
						cc.sys.localStorage.setItem("data", m), this.isSaveData1 = !1, window.WxFunc.sendDataToWx()
					}
				}, t.prototype.getAddressFileData = function() {
					var e = cc.sys.localStorage.getItem("address_component");
					if (e && "" != e) return JSON.parse(e)
				}, t.prototype.setAddressFileData = function(e) {
					cc.sys.localStorage.setItem("address_component", e)
				}, t = __decorate([n], t)
			}(cc.Component);
		i.FileData = r, cc._RF.pop()
	}, {}],
	FileHelper: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "b065517Du9IGZtmmXmZDZx2", "FileHelper"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.otherData = {}, t
				}
				return __extends(t, e), t.prototype.getTaskFileData = function(e, t) {
					var i = window.FileData.getFileData(),
						o = 1;
					return void 0 != i.task && void 0 != i.task[e] && void 0 != i.task[e][t] && (o = i.task[e][t]), o
				}, t.prototype.setTaskFileData = function(e, t, i) {
					var o = window.FileData.getFileData();
					void 0 != o.task && "" != o.task || (o.task = {}), void 0 != o.task[e] && "" != o.task[e] || (o.task[e] = {}), o.task[e][t] = i, window.FileData.setFileData("task", o.task)
				}, t.prototype.getTaskFinishFileData = function(e, t) {
					var i = window.FileData.getFileData(),
						o = 0;
					return void 0 != i.taskfinish && void 0 != i.taskfinish[e] && void 0 != i.taskfinish[e][t] && (o = i.taskfinish[e][t]), o
				}, t.prototype.setTaskFinishFileData = function(e, t, i) {
					var o = window.FileData.getFileData();
					void 0 != o.taskfinish && "" != o.taskfinish || (o.taskfinish = {}), void 0 != o.taskfinish[e] && "" != o.taskfinish[e] || (o.taskfinish[e] = {}), o.taskfinish[e][t] = i, window.FileData.setFileData("taskfinish", o.taskfinish)
				}, t.prototype.resetTaskFinishFileData = function() {
					var e = window.FileData.getFileData();
					void 0 != e.taskfinish && "" != e.taskfinish || (e.taskfinish = {}), e.taskfinish[3] = {}, window.FileData.setFileData("taskfinish", e.taskfinish), void 0 != e.task && "" != e.task || (e.task = {}), e.task[3] = {}, window.FileData.setFileData("task", e.task)
				}, t.prototype.getData = function(e) {
					return null == this.otherData ? {} : void 0 != e ? void 0 != this.otherData[e] ? window.Func.toNumber(this.otherData[e]) : null : this.otherData
				}, t.prototype.setData = function(e, t) {
					void 0 != t && (null == this.otherData && (this.otherData = {}), this.otherData[e] = t)
				}, t = __decorate([n], t)
			}(cc.Component));
		i.FileHelper = a, cc._RF.pop()
	}, {}],
	FreeGetGold2: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "6b9b76hJNBBiathBoKGnnyu", "FreeGetGold2"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.coinLabel = null, t.btPanel = [], t.m_jsonData = null, t.getCoin = 0, t.adId1 = 11, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0), window.FileData.getFileData("freeGetGold2") >= window.JsonManager.getData("Advertisement", 11).ShareTimes ? (this.btPanel[0].active = !1, this.btPanel[1].active = !0) : (this.btPanel[0].active = !0, this.btPanel[1].active = !1), this.getCoin = Math.floor(window.FarmManager.getTimeGetCrop(3600 * window.JsonManager.getData("Variable", 18).Value)), this.coinLabel.string = "" + window.Func.moneyChange(this.getCoin), window.Game2.ifEnoughPlayShare(this.adId1, window.Constant.shareIdList.GOLD_NO_ENOUGH) ? window.Game2.hideAdBtIcon3(this.btPanel[0], this.btPanel[1]) : window.Game2.hideAdBtIcon3(this.btPanel[1], this.btPanel[0])
				}, t.prototype.BtAd = function() {
					var e = this;
					window.Game2.ifEnoughPlayAd(this.adId1) ? window.WxFunc.OpenAd(this.adId1, function() {
						e.getCoinData()
					}) : this.BtClose()
				}, t.prototype.getCoinData = function() {
					var e = [{
						type: 1,
						num: this.getCoin
					}];
					console.log("slistslistslist", JSON.stringify(e));
					var t = window.FileData.getFileData("freeGetGold2");
					window.FileData.setFileData("freeGetGold2", t + 1), window.Data.setGoodAward(e), window.Game.openAwardLayer3(e), this.BtClose()
				}, t.prototype.BtShare = function() {
					var e = this;
					window.WxFunc.createShare(window.Constant.shareIdList.GOLD_NO_ENOUGH, function() {
						var t = window.FileData.getFileData("freeGetGold2");
						console.log("BtShareBtShareBtShareBtShare", t), t >= window.JsonManager.getData("Advertisement", 11).ShareTimes ? e.BtClose() : e.getCoinData()
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "coinLabel", void 0), __decorate([a(cc.Node)], t.prototype, "btPanel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FreeGetGold2 = r, cc._RF.pop()
	}, {}],
	FreeGetGold: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "2d21d7WoY9DC5RLzxoyH8Ej", "FreeGetGold"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.coinLabel = null, t.btPanel = [], t.m_jsonData = null, t.adId1 = 1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0);
					var e = window.FileData.getFileData("FreeGetGoldId");
					"number" != typeof e && (e = 0);
					var t = window.JsonManager.getTable("FreeGold");
					if (t[t.length - 1].Id < e) return window.IndexScene._RedPointMgr.setShowFreeGetGold(!1), void this.BtClose();
					for (var i = [], o = 0; o < t.length; o++) {
						var n = t[o];
						if (e < n.Id) {
							i = n;
							break
						}
					}
					this.m_jsonData = i, this.coinLabel.string = this.m_jsonData.FreeGold, window.Game2.ifEnoughPlayShare(this.adId1, window.Constant.shareIdList.FREE_GET_GOLD) ? window.Game2.hideAdBtIcon3(this.btPanel[1], this.btPanel[0]) : window.Game2.hideAdBtIcon3(this.btPanel[0], this.btPanel[1])
				}, t.prototype.saveData = function() {
					var e = window.FileData.getFileData("FreeGetGoldId");
					"number" != typeof e && (e = 0);
					var t = window.JsonManager.getTable("FreeGold");
					if (t[t.length - 1].Id < e) return window.IndexScene._RedPointMgr.setShowFreeGetGold(!1), void this.BtClose();
					var i = [{
						type: 1,
						num: window.Func.moneyChange2(this.m_jsonData.FreeGold)
					}];
					window.FileData.setFileData("FreeGetGoldId", this.m_jsonData.Id), window.Data.setGoodAward(i), window.Game.openAwardLayer3(i), window.IndexScene._RedPointMgr.ifShowFreeGetGold(!0), this.BtClose()
				}, t.prototype.BtShare = function() {
					var e = this;
					window.WxFunc.createShare(window.Constant.shareIdList.FREE_GET_GOLD, function() {
						e.saveData()
					})
				}, t.prototype.BtAd = function() {
					var e = this;
					window.WxFunc.OpenAd(this.adId1, function() {
						e.saveData()
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "coinLabel", void 0), __decorate([a(cc.Node)], t.prototype, "btPanel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FreeGetGold = r, cc._RF.pop()
	}, {}],
	FriendChangeMBScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "597b52TCQxMe6x/2F582SHC", "FriendChangeMBScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t.owner = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t) {
					this.owner = t, this.dataList = e, this.initCellDataList(e), this.createCellList(null, 8)
				}, t.prototype.updateView = function(e, t, i) {
					var o = i,
						n = t,
						a = n.behavior ? n.behavior.split(":") : [];
					(t = t.userInfo).node = i, void 0 == t.name && (t.name = window.Data.startName);
					var r = o.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite),
						s = o.getChildByName("wSprite1").getChildByName("Sprite").width;
					void 0 != t.avatar && "" != t.avatar ? window.Func._addProtoPic(t.avatar, r, s, s) : window.Func._addSpritePic2(r, "texture/tps/window1_1", "icon3_2", !1), o.getChildByName("nLabel").getComponent(cc.Label).string = t.name, isNaN(parseInt(a[1])) ? o.getChildByName("timeLabel").getComponent(cc.Label).string = "Chưa từng lấy đồ nông trại bạn~" : o.getChildByName("timeLabel").getComponent(cc.Label).string = (a[0] ? window.Func.timestampToTime6(parseInt(a[0])) : "10ng\u00e0ytrước") + (1 == a[1] ? "Gi\u00fap b\u1ea1nch\u0103m s\u00f3cn\u00f4ng tr\u1ea1i~" : "H\u00e1i tr\u1ed9m\u4e86N\u00f4ng tr\u1ea1i c\u1ee7a b\u1ea1n~"), window.Func._addSpritePic2(o.getChildByName("axSprite").getComponent(cc.Sprite), "texture/tps/window1_1", "icon13_" + (t.heartNum >= 0 ? 2 : 3), !1), o.getChildByName("axSprite").getChildByName("numLabel").getComponent(cc.Label).string = Math.abs(t.heartNum) || 0;
					var d = o.getChildByName("wSprite1").getChildByName("sexSprite");
					d && (t.gender && t.gender > 0 ? (d.active = !0, window.Func._addSpritePic2(d.getComponent(cc.Sprite), "texture/tps/friend", "icon7_" + t.gender, !1)) : d.active = !1);
					var c = i.getChildByName("Button1").getComponent(cc.Button);
					if (0 == c.clickEvents.length) {
						var l = new cc.Component.EventHandler;
						l.target = this.node, l.component = "FriendChangeMBScrollLayer", l.handler = "BtLook", l.customEventData = "" + e, c.clickEvents.push(l)
					} else c.clickEvents[0].customEventData = "" + e;
					t.button = i.getChildByName("Button1")
				}, t.prototype.BtLookDes = function(e, t) {
					t = Math.floor(t), window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendlook_window, this.dataList[t])
				}, t.prototype.BtLook = function(e, t) {
					t = Math.floor(t);
					this.dataList[t] = window.Game2.changeFriendData(this.dataList[t]), this.dataList[t].userInfo.step = 2, window.Game2.LookFriendScene(this.dataList[t].userInfo, function() {}), this.owner.BtClose()
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	FriendChangeMBWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "2d368urXrJEcrQ07pd3njFz", "FriendChangeMBWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ScrollViewObj = null, t.emptyObj = null, t.Model = 1, t.TopBtObjList = [], t.collectTimes = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.updateUi = function(e) {
					void 0 === e && (e = []);
					var t = this;
					2 == this.Model ? window.NetHelper.sendFriendListRequest(function(e) {
						if (void 0 == e.list && (e.list = []), 2 == t.Model) {
							for (var i = 0; i < e.list.length; i++) e.list[i].userInfo.isfriend = !0, e.list[i].userInfo.heartNum = e.list[i].heartNum;
							t.reloadCount(e.list)
						}
					}) : window.NetHelper.sendEnemyListRequest(function(e) {
						if (void 0 == e.list && (e.list = []), 1 == t.Model) {
							for (var i = 0; i < e.list.length; i++) e.list[i].userInfo.heartNum = e.list[i].heartNum;
							t.reloadCount(e.list)
						}
					});
					for (var i = 0; i < 2; i++) window.Func._addSpritePic2(this.TopBtObjList[i].getComponent(cc.Sprite), "texture/tps/common", "bt1_" + (0 == i ? 1 : 2) + "_" + (this.Model == i + 1 ? 2 : 1), !1)
				}, t.prototype.reloadCount = function(e) {
					void 0 === e && (e = []), this.collectTimes.getComponent(cc.Label).string = "l\u01b0\u1ee3t\uff1a" + e.length + "/10", this.emptyObj.active = 0 == e.length, this.ScrollViewObj.getComponent("FriendChangeMBScrollLayer").initUI(e, this)
				}, t.prototype.BtChange = function(e, t) {
					t = parseInt(t), this.Model != t && (this.Model = t, this.updateUi())
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "ScrollViewObj", void 0), __decorate([a(cc.Node)], t.prototype, "emptyObj", void 0), __decorate([a(cc.Node)], t.prototype, "TopBtObjList", void 0), __decorate([a(cc.Label)], t.prototype, "collectTimes", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FriendChangeMBWindow = r, cc._RF.pop()
	}, {}],
	FriendListScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "0d372PWk11KVbBc+NINeaKq", "FriendListScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t.owner = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t) {
					this.owner = t, this.dataList = e, this.initCellDataList(e), this.createCellList(null, 8)
				}, t.prototype.updateView = function(e, t, i) {
					var o = i;
					(t = t.userInfo).node = i, "number" != typeof t.heartNum && (t.heartNum = 0), void 0 == t.name && (t.name = window.Data.startName);
					var n = o.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite),
						a = o.getChildByName("wSprite1").getChildByName("Sprite").width;
					void 0 != t.avatar && "" != t.avatar ? window.Func._addProtoPic(t.avatar, n, a, a) : window.Func._addSpritePic2(n, "texture/tps/window1_1", "icon3_2", !1), o.getChildByName("nLabel").getComponent(cc.Label).string = t.name, 1 == this.owner.Model ? window.Func._addSpritePic2(o.getChildByName("axSprite").getComponent(cc.Sprite), "texture/tps/window1_1", "icon13_" + (t.heartNum >= 0 ? 2 : 3), !1) : window.Func._addSpritePic2(o.getChildByName("axSprite").getComponent(cc.Sprite), "texture/tps/friend", "icon8", !1), o.getChildByName("axSprite").getChildByName("numLabel").getComponent(cc.Label).string = 1 == this.owner.Model ? "" + (Math.abs(t.heartNum) || 0) : t.position || "G\u00f3c Tr\u00e1i \u0110\u1ea5t", o.getChildByName("timeLabel").getComponent(cc.Label).string = "L\u1ea7n \u0111\u0103ng nh\u1eadp tr\u01b0\u1edbc\uff1a" + (t.lastLoginUnix ? window.Func.timestampToTime6(t.lastLoginUnix) : "10ng\u00e0ytrước");
					var r = o.getChildByName("wSprite1").getChildByName("sexSprite");
					(r && (t.gender && t.gender > 0 ? (r.active = !0, window.Func._addSpritePic2(r.getComponent(cc.Sprite), "texture/tps/friend", "icon7_" + t.gender, !1)) : r.active = !1), 0 == (s = i.getComponent(cc.Button)).clickEvents.length) ? ((l = new cc.Component.EventHandler).target = this.node, l.component = "FriendListScrollLayer", l.handler = "BtLookDes", l.customEventData = "" + e, s.clickEvents.push(l)) : s.clickEvents[0].customEventData = "" + e;
					if (i.getChildByName("Button4").active = !1, i.getChildByName("Button2").active = !1, i.getChildByName("Button3").active = !1, 1 == this.owner.Model) {
						var s = i.getChildByName("Button1").getComponent(cc.Button);
						if (i.getChildByName("Button1").active = !0, 0 == s.clickEvents.length)(l = new cc.Component.EventHandler).target = this.node, l.component = "FriendListScrollLayer", l.handler = "BtLook", l.customEventData = "" + e, s.clickEvents.push(l);
						else s.clickEvents[0].customEventData = "" + e;
						var d = window.FileData.getFileData("dlFriend"),
							c = window.FileData.getFileData("dlFriendtimes1");
						d[t.uid] || c >= 15 ? (s.node.getChildByName("Label").getComponent(cc.Label).string = "Th\u0103m", window.Func._addSpritePic2(s.node.getComponent(cc.Sprite), "texture/tps/common", "bt_4", !1), s.node.getChildByName("Label").getComponent(cc.LabelOutline).color = cc.color(179, 103, 0, 255)) : (s.node.getChildByName("Label").getComponent(cc.Label).string = "ch\u0103m s\u00f3c", window.Func._addSpritePic2(s.node.getComponent(cc.Sprite), "texture/tps/common", "bt_7", !1), s.node.getChildByName("Label").getComponent(cc.LabelOutline).color = cc.color(85, 187, 34, 255))
					} else if (2 == this.owner.Model) {
						var l;
						if (i.getChildByName("Button1").active = !1, t.isSearch ? i.getChildByName("Button4").active = !0 : (i.getChildByName("Button2").active = !0, i.getChildByName("Button3").active = !0), 0 == (s = i.getChildByName("Button2").getComponent(cc.Button)).clickEvents.length)(l = new cc.Component.EventHandler).target = this.node, l.component = "FriendListScrollLayer", l.handler = "BtOk", l.customEventData = "" + e, s.clickEvents.push(l);
						else s.clickEvents[0].customEventData = "" + e;
						if (0 == (s = i.getChildByName("Button3").getComponent(cc.Button)).clickEvents.length)(l = new cc.Component.EventHandler).target = this.node, l.component = "FriendListScrollLayer", l.handler = "BtDel", l.customEventData = "" + e, s.clickEvents.push(l);
						else s.clickEvents[0].customEventData = "" + e;
						if (0 == (s = i.getChildByName("Button4").getComponent(cc.Button)).clickEvents.length)(l = new cc.Component.EventHandler).target = this.node, l.component = "FriendListScrollLayer", l.handler = "BtAdd", l.customEventData = "" + e, s.clickEvents.push(l);
						else s.clickEvents[0].customEventData = "" + e;
						window.Game.BtChangeEnabled(i.getChildByName("Button2"), !t.accept), window.Game.BtChangeEnabled(i.getChildByName("Button3"), !t.accept, 3), t.button2 = i.getChildByName("Button2"), t.button3 = i.getChildByName("Button3"), t.button4 = i.getChildByName("Button4")
					}
				}, t.prototype.BtLook = function(e, t) {
					t = Math.floor(t);
					var i = this,
						o = i.dataList[t];
					i.dataList[t] = window.Game2.changeFriendData(i.dataList[t]), window.Game2.LookFriendScene(o.userInfo, function(e) {
						i.owner.reloadShowLabel(), o.userInfo.heartNum = e.heartNum, i.updateView(t, o, o.userInfo.node)
					})
				}, t.prototype.BtOk = function(e, t) {
					t = Math.floor(t);
					var i = this;
					window.NetHelper.sendFriendAcceptRequest(i.dataList[t].userInfo.uid, function() {
						window.Game.BtChangeEnabled(i.dataList[t].userInfo.button2, !1), window.Game.BtChangeEnabled(i.dataList[t].userInfo.button3, !1), i.dataList[t].userInfo.accept = !0
					})
				}, t.prototype.BtLookDes = function(e, t) {
					console.log("BtLookDes", t), t = Math.floor(t);
					var i = this,
						o = i.dataList[t];
					i.dataList[t] = window.Game2.changeFriendData(i.dataList[t]), window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendlook_window, cc.instantiate(this.dataList[t]), function(e) {
						i.owner.reloadShowLabel(), i.dataList[t].userInfo.heartNum = e.heartNum, i.updateView(t, i.dataList[t], o.userInfo.node)
					})
				}, t.prototype.BtDel = function(e, t) {
					t = Math.floor(t);
					var i = this;
					window.NetHelper.sendFriendIgnoreRequest(i.dataList[t].userInfo.uid, function() {
						window.Game.BtChangeEnabled(i.dataList[t].userInfo.button2, !1), window.Game.BtChangeEnabled(i.dataList[t].userInfo.button3, !1), i.dataList[t].userInfo.accept = !0
					})
				}, t.prototype.BtAdd = function(e, t) {
					t = Math.floor(t);
					var i = this;
					window.NetHelper.sendFriendApplyRequest(i.dataList[t].userInfo.uid, function() {
						window.Game.showAlertBar("B\u1ea1n b\u00e8XinTh\u00e0nh c\u00f4ng"), window.Game.BtChangeEnabled(i.dataList[t].userInfo.button4, !1)
					})
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	FriendListWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "a0a0bgU/kNFio9KBWba7pJI", "FriendListWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ScrollViewObj = [], t.PanelObj = null, t.SpriteList = [], t.TopBtObjList = [], t.collectTimes = [], t.numLabel = null, t.Model = 1, t.emptyObj = null, t.editObj = null, t.myUidLabel = null, t.m_List = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.updateUi = function(e) {
					void 0 === e && (e = []);
					var t = this;
					1 == this.Model ? window.NetHelper.sendFriendListRequest(function(e) {
						if (void 0 == e.list && (e.list = []), 1 == t.Model) {
							for (var i = 0; i < e.list.length; i++) e.list[i].userInfo.isfriend = !0, e.list[i].userInfo.heartNum = e.list[i].heartNum;
							t.reloadCount(e.list)
						}
					}) : window.NetHelper.sendFriendApplyListRequest(function(e) {
						if (void 0 == e.applyList && (e.applyList = []), 2 == t.Model) {
							for (var i = [], o = 0; o < e.applyList.length; o++) i.push({
								userInfo: e.applyList[o]
							});
							t.reloadCount(i)
						}
					});
					for (var i = 0; i < 2; i++) this.SpriteList[i].active = this.Model == i + 1, window.Func._addSpritePic2(this.TopBtObjList[i].getComponent(cc.Sprite), "texture/tps/common", "bt1_" + (i + 1) + "_" + (this.Model == i + 1 ? 2 : 1), !1), 1 == i && (this.TopBtObjList[i].getChildByName("Sprite").active = !(!window.IndexScene._RedPointMgr.redHttpList[window.Constant.NOTICE_KEY.FRIEND] || i + 1 == this.Model));
					this.myUidLabel.string = "C\u1ee7a b\u1ea1nUID\uff1a" + window.Data.UId
				}, t.prototype.reloadShowLabel = function(e) {
					if (void 0 === e && (e = []), e = this.m_List, 1 == this.Model) {
						var t = window.FileData.getFileData("dlFriendtimes1");
						this.collectTimes[0].getComponent(cc.Label).string = "H\u00f4m nay c\u00f2nch\u0103m s\u00f3cl\u01b0\u1ee3t\uff1a" + Math.max(0, window.Constant.DaLiFriendCount - t), this.numLabel.string = "B\u1ea1n b\u00e8\uff1a" + e.length + "/50"
					} else this.collectTimes[1].getComponent(cc.Label).string = "Hi\u1ec7n t\u1ea1iS\u1ed1 l\u01b0\u1ee3ng\uff1a" + e.length
				}, t.prototype.reloadCount = function(e) {
					void 0 === e && (e = []), this.m_List = e, this.reloadShowLabel(e), this.emptyObj.active = 0 == e.length, this.ScrollViewObj[this.Model - 1].getComponent("FriendListScrollLayer").initUI(e, this)
				}, t.prototype.BtChange = function(e, t) {
					t = parseInt(t), this.Model != t && (this.Model = t, 2 == this.Model && (window.IndexScene._RedPointMgr.redHttpList[window.Constant.NOTICE_KEY.FRIEND] = !1), this.updateUi())
				}, t.prototype.BtOpenRank = function() {
					this.node.active = !1, window.Game.createRankWindow()
				}, t.prototype.BtTuiJian = function() {
					this.node.active = !1, window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendtuijian_window)
				}, t.prototype.BtYaoqing = function() {
					window.WxFunc.createShare(window.Constant.shareIdList.GETFRIEND)
				}, t.prototype.BtSearchFriend = function() {
					var e = this.editObj.getComponent(cc.EditBox).string;
					if (e && "" != e && !isNaN(parseInt(e))) {
						var t = this;
						window.NetHelper.sendLookupUserInfoRequest(parseInt(e), function(e) {
							e.userInfo.userInfo.isSearch = !0, t.reloadCount([{
								userInfo: e.userInfo.userInfo
							}])
						})
					} else window.Game.showAlertBar("Không hợp lệB\u1ea1n b\u00e8ID")
				}, t.prototype.BtCopy = function() {
					window.WxFunc.setClipData(window.Data.UId)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "ScrollViewObj", void 0), __decorate([a(cc.Node)], t.prototype, "PanelObj", void 0), __decorate([a(cc.Node)], t.prototype, "SpriteList", void 0), __decorate([a(cc.Node)], t.prototype, "TopBtObjList", void 0), __decorate([a(cc.Label)], t.prototype, "collectTimes", void 0), __decorate([a(cc.Label)], t.prototype, "numLabel", void 0), __decorate([a(cc.Node)], t.prototype, "emptyObj", void 0), __decorate([a(cc.Node)], t.prototype, "editObj", void 0), __decorate([a(cc.Label)], t.prototype, "myUidLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FriendListWindow = r, cc._RF.pop()
	}, {}],
	FriendLookWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "ff6e45lZNdP+4JmalRbtup2", "FriendLookWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_data = null, t.m_func = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.updateUi = function(e, t) {
					void 0 === t && (t = null), e.userInfo && 4 == e.userInfo.step && (e.userInfo.isfriend = e.isFriend), this.m_func = t;
					var i = e.behavior ? e.behavior.split(":") : [];
					(e = window.Game2.changeFriendData(e)).userInfo && (e = e.userInfo), "number" != typeof e.heartNum && (e.heartNum = 0), this.m_data = e;
					var o = this.node.getChildByName("bgSprite"),
						n = o.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite),
						a = o.getChildByName("wSprite1").getChildByName("Sprite").width;
					void 0 != e.avatar && "" != e.avatar ? window.Func._addProtoPic(e.avatar, n, a, a) : window.Func._addSpritePic2(n, "texture/tps/window1_1", "icon3_2", !1), o.getChildByName("nLabel").getComponent(cc.Label).string = e.name || window.Data.startName, o.getChildByName("axSprite").getChildByName("numLabel").getComponent(cc.Label).string = "" + (e.position || "G\u00f3c Tr\u00e1i \u0110\u1ea5t");
					var r = o.getChildByName("wSprite1").getChildByName("sexSprite");
					if (r && (e.gender && e.gender > 0 ? (r.active = !0, window.Func._addSpritePic2(r.getComponent(cc.Sprite), "texture/tps/friend", "icon7_" + e.gender, !1)) : r.active = !1), o.getChildByName("Button4").active = !1, window.Game.BtChangeEnabled(o.getChildByName("Button1"), !0), e.isfriend || e.isNotice) {
						var s = window.FileData.getFileData("dlFriend"),
							d = window.FileData.getFileData("dlFriend2");
						4 == e.step && 1 != parseInt(i[1]) ? (o.getChildByName("Button1").getChildByName("Label").getComponent(cc.Label).string = "Trả thù(" + (d[e.uid] ? 0 : 1) + "/1)", e.mtype = 2) : (e.mtype = 1, o.getChildByName("Button1").getChildByName("Label").getComponent(cc.Label).string = "ch\u0103m s\u00f3c(" + (s[e.uid] ? 0 : 1) + "/1)"), o.getChildByName("Button2").active = !0, o.getChildByName("Button3").setPosition(-50, -100), e.isfriend || (o.getChildByName("Button4").active = !0, o.getChildByName("Button2").active = !1)
					} else o.getChildByName("Button2").active = !1, o.getChildByName("Button3").setPosition(-168, -100), o.getChildByName("Button1").getChildByName("Label").getComponent(cc.Label).string = "Th\u00eam b\u1ea1n", e.mtype = 3
				}, t.prototype.BtDali = function(e) {
					if (3 != this.m_data.mtype) {
						var t = this;
						t.m_data.step = 4;
						var i = window.FileData.getFileData("dlFriend"),
							o = window.FileData.getFileData("dlFriend2");
						window.FileData.getFileData("dlFriendtimes2") >= 10 ? window.Game.showAlertBar("\u4ecang\u00e0yTh\u0103m l\u1ea1il\u01b0\u1ee3t\u0110\u00e3 \u0111\u1ea1t max") : 1 == t.m_data.mtype && i[t.m_data.uid] ? window.Game.showAlertBar("Hôm nay\u0110\u00e3ch\u0103m s\u00f3c\uff01") : 2 == t.m_data.mtype && o[t.m_data.uid] ? window.Game.showAlertBar("Hôm nay\u0110\u00e3Trả thù\uff01") : window.Game2.LookFriendScene(t.m_data, function() {
							t.BtClose()
						})
					} else this.BtAddFriend()
				}, t.prototype.BtDel = function(e) {
					var t = this;
					window.NetHelper.sendFriendDeleteRequest(t.m_data.uid, function() {
						window.Game.showAlertBar("XóaTh\u00e0nh c\u00f4ng"), window.Game2.TyNodeList["friend/friendlist_window"] && window.Game2.TyNodeList["friend/friendlist_window"].getComponent("FriendListWindow").updateUi(), t.BtClose()
					})
				}, t.prototype.BtLook = function() {
					var e = this;
					window.Game2.LookFriendScene(e.m_data, function(t) {
						e.m_data.heartNum = t.heartNum, e.BtClose()
					})
				}, t.prototype.BtAddFriend = function() {
					window.NetHelper.sendFriendApplyRequest(this.m_data.uid, function() {
						window.Game.showAlertBar("B\u1ea1n b\u00e8XinTh\u00e0nh c\u00f4ng")
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					}), this.m_func && this.m_func(e.m_data)
				}, t = __decorate([n], t)
			}(cc.Component));
		i.FriendLookWindow = a, cc._RF.pop()
	}, {}],
	FriendNoticeScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "39aa8v4CMFD2Ysh3eac9k3S", "FriendNoticeScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t.owner = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t) {
					this.owner = t, this.dataList = e, this.initCellDataList(e), this.createCellList(null, 8)
				}, t.prototype.updateView = function(e, t, i) {
					var o = i,
						n = t;
					(t = t.userInfo).node = i;
					var a = n.behavior ? n.behavior.split(":") : [];
					void 0 == t.name && (t.name = window.Data.startName);
					var r = o.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite),
						s = o.getChildByName("wSprite1").getChildByName("Sprite").width;
					void 0 != t.avatar && "" != t.avatar ? window.Func._addProtoPic(t.avatar, r, s, s) : window.Func._addSpritePic2(r, "texture/tps/window1_1", "icon3_2", !1), o.getChildByName("nLabel").getComponent(cc.Label).string = t.name, o.getChildByName("timeLabel").getComponent(cc.Label).string = (a[0] ? window.Func.timestampToTime6(parseInt(a[0])) : "10ng\u00e0ytrước") + (1 == a[1] ? "Gi\u00fap b\u1ea1nch\u0103m s\u00f3cn\u00f4ng tr\u1ea1i~" : "H\u00e1i tr\u1ed9m\u4e86N\u00f4ng tr\u1ea1i c\u1ee7a b\u1ea1n~");
					var d = window.FileData.getFileData("flookNotice");
					o.getChildByName("xinSprite").getChildByName("Sprite1").active = 1 == a[1], o.getChildByName("xinSprite").getChildByName("Sprite2").active = d < a[0];
					var c = o.getChildByName("wSprite1").getChildByName("sexSprite");
					c && (t.gender && t.gender > 0 ? (c.active = !0, window.Func._addSpritePic2(c.getComponent(cc.Sprite), "texture/tps/friend", "icon7_" + t.gender, !1)) : c.active = !1);
					var l = i.getComponent(cc.Button);
					if (0 == l.clickEvents.length) {
						var p = new cc.Component.EventHandler;
						p.target = this.node, p.component = "FriendNoticeScrollLayer", p.handler = "BtLookDes", p.customEventData = "" + e, l.clickEvents.push(p)
					} else l.clickEvents[0].customEventData = "" + e
				}, t.prototype.BtLookDes = function(e, t) {
					t = Math.floor(t), this.dataList[t].userInfo.isNotice = !0, this.dataList[t].userInfo.step = 4;
					var i = this;
					window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendlook_window, this.dataList[t], function(e) {
						i.owner.reloadCount()
					})
				}, t.prototype.BtLook = function(e, t) {
					t = Math.floor(t);
					var i = this.dataList[t];
					window.NetHelper.sendFriendApplyRequest(i.uid, function() {
						window.Game.showAlertBar("B\u1ea1n b\u00e8XinTh\u00e0nh c\u00f4ng"), window.Game.BtChangeEnabled(i.button, !1), this.dataList[t].apply = !0
					})
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	FriendNoticeWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "dd680wtINhM2LNZ2Cc+7z93", "FriendNoticeWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ScrollViewObj = null, t.emptyObj = null, t.timesLabel = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.updateUi = function(e) {
					this.emptyObj.active = 0 == e.length, this.ScrollViewObj.getComponent("FriendNoticeScrollLayer").initUI(e, this), this.reloadCount()
				}, t.prototype.reloadCount = function() {
					var e = window.FileData.getFileData("dlFriendtimes2");
					this.timesLabel.string = "Th\u0103m l\u1ea1il\u01b0\u1ee3t\uff1a" + e + "/10"
				}, t.prototype.BtClose = function() {
					window.Func.ifEmptyNode(window.Game2.TyNodeList["window/scarecrow_window"]) && (window.Game2.TyNodeList["window/scarecrow_window"].active = !0);
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					}), window.FileData.setFileData("flookNotice", window.Func.getTimeUnix())
				}, __decorate([a(cc.Node)], t.prototype, "ScrollViewObj", void 0), __decorate([a(cc.Node)], t.prototype, "emptyObj", void 0), __decorate([a(cc.Label)], t.prototype, "timesLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FriendNoticeWindow = r, cc._RF.pop()
	}, {}],
	FriendTuiJianScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "5669cBbW5FGep3/MMGqdQ+E", "FriendTuiJianScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t.owner = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t) {
					this.owner = t, this.dataList = e, this.initCellDataList(e), this.createCellList(null, 8)
				}, t.prototype.updateView = function(e, t, i) {
					var o = i;
					t.node = i, void 0 == t.name && (t.name = window.Data.startName);
					var n = o.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite),
						a = o.getChildByName("wSprite1").getChildByName("Sprite").width;
					void 0 != t.avatar && "" != t.avatar ? window.Func._addProtoPic(t.avatar, n, a, a) : window.Func._addSpritePic2(n, "texture/tps/window1_1", "icon3_2", !1), o.getChildByName("nLabel").getComponent(cc.Label).string = t.name, o.getChildByName("axSprite").getChildByName("numLabel").getComponent(cc.Label).string = "" + (t.position || "G\u00f3c Tr\u00e1i \u0110\u1ea5t"), o.getChildByName("timeLabel").getComponent(cc.Label).string = "L\u1ea7n \u0111\u0103ng nh\u1eadp tr\u01b0\u1edbc\uff1a" + (t.lastLoginUnix ? window.Func.timestampToTime6(t.lastLoginUnix) : "10ng\u00e0ytrước");
					var r, s, d = o.getChildByName("wSprite1").getChildByName("sexSprite");
					(d && (t.gender && t.gender > 0 ? (d.active = !0, window.Func._addSpritePic2(d.getComponent(cc.Sprite), "texture/tps/friend", "icon7_" + t.gender, !1)) : d.active = !1), 0 == (r = i.getChildByName("Button1").getComponent(cc.Button)).clickEvents.length) ? ((s = new cc.Component.EventHandler).target = this.node, s.component = "FriendTuiJianScrollLayer", s.handler = "BtLook", s.customEventData = "" + e, r.clickEvents.push(s)) : r.clickEvents[0].customEventData = "" + e;
					(t.button = i.getChildByName("Button1"), t.apply && window.Game.BtChangeEnabled(t.button, !1), 0 == (r = i.getComponent(cc.Button)).clickEvents.length) ? ((s = new cc.Component.EventHandler).target = this.node, s.component = "FriendTuiJianScrollLayer", s.handler = "BtLookDes", s.customEventData = "" + e, r.clickEvents.push(s)) : r.clickEvents[0].customEventData = "" + e
				}, t.prototype.BtLookDes = function(e, t) {
					t = Math.floor(t), window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendlook_window, this.dataList[t])
				}, t.prototype.BtLook = function(e, t) {
					t = Math.floor(t);
					var i = this.dataList[t];
					window.NetHelper.sendFriendApplyRequest(i.uid, function() {
						window.Game.showAlertBar("B\u1ea1n b\u00e8XinTh\u00e0nh c\u00f4ng"), window.Game.BtChangeEnabled(i.button, !1), this.dataList[t].apply = !0
					})
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	FriendTuiJianWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f79e2sTV2dDxoWef34WVjyn", "FriendTuiJianWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ScrollViewObj = null, t.emptyObj = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.updateUi = function(e) {
					this.ScrollViewObj.getComponent("FriendTuiJianScrollLayer").initUI(e, this)
				}, t.prototype.BtChange = function(e, t) {
					window.Game2.TyClickChange(e, window.Constant.TyWindowKeyList.friendtuijian_window)
				}, t.prototype.BtClose = function() {
					window.Func.ifEmptyNode(window.Game2.TyNodeList["friend/friendlist_window"]) && (window.Game2.TyNodeList["friend/friendlist_window"].active = !0);
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					}), window.Game2.lastFriendTuiJianId = 0
				}, __decorate([a(cc.Node)], t.prototype, "ScrollViewObj", void 0), __decorate([a(cc.Node)], t.prototype, "emptyObj", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.FriendTuiJianWindow = r, cc._RF.pop()
	}, {}],
	Func: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "1c48cZtBRFNtL6rO+ABoNrZ", "Func"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("crypto-ts"),
			n = e("md5"),
			a = cc._decorator,
			r = a.ccclass,
			s = (a.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.audioTime = [], t.audioClip = [], t
				}
				return __extends(t, e), t.prototype.init = function() {
					this.enSecretKey = this.PaddingLeft("WERWE12SAduobao@", 16), this.enSecretKey = o.enc.Utf8.parse(this.enSecretKey), window.TestData.init(), 2 == window.Config.Model && (window.Config.GameServerIp = window.Config.GameServerIp_test);
					var e = cc.sys.localStorage.getItem("vesion");
					null != e && "" != e && e == window.Config.Version || cc.sys.localStorage.setItem("vesion", window.Config.Version), window.FileData.init();
					var t = window.FileData.getDataByKey("ptid");
					if ("number" != typeof t) {
						var i = this.randomNum(1, 1e8);
						t = window.Data.PTid = i, window.FileData.setFileData("ptid", t)
					}
					console.log("reload uid " + t + "  " + typeof t), window.Data.PTid = t, window.WxLogin.login()
				}, t.prototype.setGameData = function() {
					var e = (new Date).toLocaleDateString(),
						t = window.FileData.getDataByKey("todayTimes"),
						i = window.FileData.getDataByKey("todayDate");
					"number" != typeof t && (t = 0), i != e && (t = 0, window.FileData.setFileData("todayDate", e)), t += 1, window.Data.TodayLoginTimes = t, window.FileData.setFileData("todayTimes", t);
					var o = window.FileData.getDataByKey("loginTimes");
					"number" != typeof o ? (o = 0, window.Data.isNewAccount = !0) : window.Data.isNewAccount = !1, window.FileData.setFileData("loginTimes", o + 1), this.setNewAccoutData(), this.reloadMoneyData();
					var n = window.FileData.getFileData("nowShowSceneId");
					if (console.log("nowShowSceneIdnowShowSceneId", n), 0 == n) {
						var a = window.FileData.getFileData("nowSceneId");
						"number" != typeof a && (a = 1), window.FileData.setFileData("nowShowSceneId", a)
					}
					this.setGameStartTime()
				}, t.prototype.setNewAccoutData = function() {
					if (console.log("setNewAccoutData  window['Data'].isNewAccount", window.Data.isNewAccount, window.Data.getSeed()), window.Data.isNewAccount) {
						if (1 != window.Config.Model && void 0 != window.JsonManager.getData("Variable", 12)) {
							var e = Math.floor(window.JsonManager.getData("Variable", 12).Value);
							e > 0 && (window.FileData.setFileData("diamStr", window.Func.SecretNumber(e)), window.Data.setDiam(e))
						}
						window.FileData.setFileData("newAccount", 7), window.Func.sendALDCount("0Th\u1ed1ng k\u00ea-User mới"), window.FileData.setFileData("linetime", 0)
					}
				}, t.prototype.setGameStartTime = function() {
					window.FileHelper.setData("gamestarttime", window.Func.getTimeUnix())
				}, t.prototype.setServerTime = function() {
					var e = window.Data.nowServerLoginTime,
						t = window.FileData.getDataByKey("serverSevenDayTime");
					void 0 == t && (window.FileData.setFileData("serverSevenDayTime", e), t = e), this.timestampToTime5(e) != this.timestampToTime5(t) && window.Game.createActivityWindow()
				}, t.prototype.reloadMoneyData = function() {
					var e = window.FileData.getDataByKey("goldStr");
					if ("string" == typeof e && "" != e) window.Data.GoldStr = e;
					else {
						var t = window.FileData.getDataByKey("gold");
						window.Data.GoldStr = "number" == typeof t ? window.Func.SecretNumber(t) : window.Func.SecretNumber(0)
					}
					var i = window.FileData.getDataByKey("diamStr");
					window.Data.DiamStr = "string" == typeof i ? i : "";
					var o = window.FileData.getDataByKey("seedStr");
					window.Data.SeedStr = "string" == typeof o ? o : "";
					var n = window.FileData.getDataByKey("seedDelayStr");
					window.Data.SeedDelayStr = "string" == typeof n ? n : "";
					var a = window.FileData.getDataByKey("getTotalGoldStr");
					window.Data.getTotalGoldStr = "string" == typeof a ? a : "";
					var r = window.FileData.getDataByKey("boxStr1");
					window.Data.BoxStr1 = "string" == typeof r ? r : "";
					var s = window.FileData.getDataByKey("boxStr3");
					window.Data.BoxStr3 = "string" == typeof s ? s : ""
				}, t.prototype.isLiuHaiScreen = function() {
					return cc.winSize.width / cc.winSize.height < .5
				}, t.prototype.getLiuHaiScaleKey = function() {
					return this.isLiuHaiScreen() ? 2.9 : 2.45
				}, t.prototype.md5_encode = function(e) {
					return n.Md5.hashStr(e.toString())
				}, t.prototype.randomNum = function(e, t) {
					e = Math.floor(e);
					var i = (t = Math.floor(t)) - e,
						o = Math.random();
					return e + Math.round(o * i)
				}, t.prototype.PaddingLeft = function(e, t) {
					var i = e.toString(),
						o = i.length;
					return o < t ? i = new Array(t - o + 1).join("0") + i : o > t && (i = i.slice(t)), i
				}, t.prototype.SecretString = function(e) {
					return "string" == typeof e ? o.AES.encrypt(e, this.enSecretKey, {
						iv: this.enSecretKey,
						mode: o.mode.CBC,
						padding: o.pad.PKCS7
					}).toString() : ""
				}, t.prototype.unSecretString = function(e) {
					if ("string" != typeof e || "" == e) return "";
					try {
						var t = o.AES.decrypt(e, this.enSecretKey, {
							iv: this.enSecretKey,
							mode: o.mode.CBC,
							padding: o.pad.PKCS7
						});
						return t ? t.toString(o.enc.Utf8) : ""
					} catch (t) {
						return cc.log("unSecretString error " + t, " dataString:" + e), ""
					}
				}, t.prototype.SecretNumber = function(e) {
					// Ghi số rõ ràng, vẫn hỗ trợ số AES của các bản lưu cũ.
					return "number" == typeof e && isFinite(e) ? e.toString() : ""
				}, t.prototype.unSecretNumber = function(e) {
					if ("number" == typeof e) return Math.floor(e);
					if ("string" != typeof e || "" === e) return 0;
					if (isFinite(Number(e))) return Math.floor(Number(e));
					return Math.floor(this.unSecretString(e))
				}, t.prototype.isNumber = function(e) {
					return !(!/^\d+(\.\d+)?$/.test(e) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(e))
				}, t.prototype.toNumber = function(e) {
					return window.Func.isNumber(e) && (isNaN(parseFloat(e)) ? isNaN(parseInt(e)) || (e = parseInt(e)) : e = parseFloat(e)), e
				}, t.prototype.isInteger = function(e) {
					return Math.round(e) === e
				}, t.prototype.replaceLingByStr = function(e) {
					return ".00" != e && ".0" != e || (e = ""), e.indexOf(".") > -1 && (0 == e.substr(e.length - 1) && 0 == e.substr(e.length - 2) ? e = "" : 0 == e.substr(e.length - 1) && (e = e.substr(0, e.length - 1))), e
				}, t.prototype.moneyChange = function(e, t) {
					void 0 === t && (t = 0);
					var i = e,
						o = "",
						n = "",
						a = 0;
					if (isNaN(e)) return "0";
					if (e < 1e3) {
						if (0 == e) return "0";
						o = "" + Math.floor(100 * e) / 100;
						return o = this.replaceLingByStr(o)
					}
					for (;;) {
						if (e < 1e3) {
							n = this.replaceLingByStr(n), o = Math.floor(e) + n, 0 != t && o.length > t + 1 && "." == (o = o.substr(0, t + 1)).substr(o.length - 1, o.length) && (o = o.substr(0, o.length - 1)), o += window.Constant.CoinUnit[a];
							break
						}
						n = Math.floor(e % 1e3) + "";
						if (e >= 1e3) {
							var r = Math.floor(e % 1e3);
							n = "." + (n = r > 100 ? n.substr(0, 2) : r > 10 ? "0" + n.substr(0, 1) : "00")
						}
						if (e = Math.floor(e / 1e3), ++a > 1e3) {
							cc.log("moneyChange Tr\u00e0n" + e + " oldCoin" + i);
							break
						}
					}
					return o
				}, t.prototype.moneyChange2 = function(e) {
					if ("string" != typeof e) return e;
					var t = e.replace(/[^a-z]+/gi, "");
					return "k" == t && (t = "K"), "" != t && void 0 != window.Constant.CoinUnitKey[t] ? parseFloat(e.replace(t, "")) * Math.pow(1e3, window.Constant.CoinUnitKey[t]) : Math.floor(e)
				}, t.prototype._addSpritePic = function(e, t) {
					var i = this;
					cc.loader.loadRes(t, cc.SpriteFrame, function(o, n) {
						if (0 != window.Data.Status) {
							if (o) return console.log("res-_addSpritePicT\u1ea3iTh\u1ea5t b\u1ea1i:" + t, o), void i.scheduleOnce(function() {
								i._addSpritePic(e, t)
							}, 1);
							e.sizeMode = cc.Sprite.SizeMode.RAW, e.spriteFrame = n
						}
					})
				}, t.prototype._addSpritePic2 = function(e, t, i, o) {
					void 0 === o && (o = !0);
					var n = this;
					cc.loader.loadRes(t, cc.SpriteAtlas, function(a, r) {
						if (0 != window.Data.Status) {
							if (null != a) return console.log("res-_addSpritePic2T\u1ea3iTh\u1ea5t b\u1ea1i:" + t, a), void n.scheduleOnce(function() {
								n._addSpritePic2(e, t, i, o)
							}, 1);
							var s = r.getSpriteFrame(i);
							void 0 != s && void 0 != e && (o && (e.sizeMode = cc.Sprite.SizeMode.RAW), e.spriteFrame = s)
						}
					})
				}, t.prototype._addSpritePic4 = function(e, t) {
					var i = this;
					cc.loader.loadRes(t, sp.SkeletonData, function(o, n) {
						if (0 != window.Data.Status) return null != o ? (console.log("res-_addSpritePic4T\u1ea3iTh\u1ea5t b\u1ea1i:" + t, o), void i.scheduleOnce(function() {
							i._addSpritePic4(e, t)
						}, 1)) : void(void 0 != e && (e.skeletonData = n, e.setAnimation(0, "idle", !0)))
					})
				}, t.prototype._addAudioPic = function(e) {
					if (2 != window.FileData.getFileData("audioSet") && !(window.IndexScene && this.audioTime[e] && window.IndexScene.curFrame - this.audioTime[e] < 30))
						if (window.IndexScene && (this.audioTime[e] = window.IndexScene.curFrame), this.audioClip[e]) cc.audioEngine.playEffect(this.audioClip[e], !1);
						else {
							var t = this;
							cc.loader.loadRes(e, cc.AudioClip, function(i, o) {
								i ? console.log("_addAudioPic error ", i) : (t.audioClip[e] = o, cc.audioEngine.playEffect(o, !1))
							})
						}
				}, t.prototype._addProtoPic = function(e, t, i, o, n) {
					void 0 === i && (i = 65), void 0 === o && (o = 65), void 0 === n && (n = null), cc.loader.load({
						url: e,
						type: "png"
					}, function(e, a) {
						e && console.error(e), t.spriteFrame = new cc.SpriteFrame(a), t.node.width = i, t.node.height = o, n && n()
					})
				}, t.prototype.PrefixInteger = function(e, t) {
					return (Array(t).join("0") + e).slice(-t)
				}, t.prototype.timestampToTime = function(e, t) {
					void 0 === t && (t = !0);
					var i = new Date(1e3 * e),
						o = i.getFullYear() + "-",
						n = (i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1) + "-",
						a = i.getDate() + " ",
						r = i.getHours() + ":",
						s = i.getMinutes() < 10 ? "0" + i.getMinutes() : i.getMinutes(),
						d = ":" + (i.getSeconds() < 10 ? "0" + i.getSeconds() : i.getSeconds());
					return o + n + a + r + s + (t ? d : "")
				}, t.prototype.timestampToTime2 = function(e, t) {
					void 0 === t && (t = !0);
					var i = Math.floor(e / 3600),
						o = Math.floor((e - 3600 * i) / 60),
						n = e - 3600 * i - 60 * o,
						a = this.PrefixInteger(i, 2) + ":",
						r = this.PrefixInteger(o, 2) + ":",
						s = this.PrefixInteger(n, 2);
					return (t ? a : "") + r + s
				}, t.prototype.timestampToTime3 = function(e) {
					var t = Math.floor(e / 3600),
						i = Math.floor((e - 3600 * t) / 60),
						o = e - 3600 * t - 60 * i;
					return this.PrefixInteger(t, 2) + ":" + (this.PrefixInteger(i, 2) + ":") + this.PrefixInteger(o, 2)
				}, t.prototype.timestampToTime4 = function(e) {
					var t = Math.floor(e / 3600),
						i = t > 24 ? Math.floor(t / 24) : 0,
						o = Math.floor((e - 3600 * t) / 60),
						n = e - 3600 * t - 60 * o;
					return t -= 24 * i, (i > 0 ? i + "ng\u00e0y" : "") + (t > 0 || 0 != i ? this.PrefixInteger(t, 2) + ":" : "") + (o > 0 || 0 != t || 0 != i ? this.PrefixInteger(o, 2) + ":" : "") + (n > 0 || 0 != o || 0 != t || 0 != i ? this.PrefixInteger(n, 2) : "")
				}, t.prototype.timestampToTime5 = function(e) {
					var t = new Date(1e3 * e);
					return t.getFullYear() + "" + t.getMonth() + t.getDate()
				}, t.prototype.timestampToTime6 = function(e) {
					var t = this.getTimeUnix() - e;
					return t < 60 ? "1ph\u00fattrước" : t < 3600 ? Math.floor(t / 60) + "ph\u00fattrước" : t < 86400 ? Math.floor(t / 3600) + "gi\u1eddtrước" : Math.floor(t / 86400) + "ng\u00e0ytrước"
				}, t.prototype.getTimeUnix = function() {
					return Math.floor((new Date).getTime() / 1e3)
				}, t.prototype.datedifference = function(e, t) {
					var i, o, n = this.timestampToTime5(e),
						a = this.timestampToTime5(t);
					return n = Date.parse(n), i = (a = Date.parse(a)) - n, i = Math.abs(i), o = Math.floor(i / 864e5), cc.log("datedifference ", o), o
				}, t.prototype.format = function(e) {
					for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
					var o = e;
					if (t.length > 0) {
						var n = void 0;
						for (var a in t)
							if (null != (n = t[a]) && 0 != n.length) {
								var r = new RegExp("\\{" + a + "\\}", "g");
								o = o.replace(r, n)
							}
					}
					return o
				}, t.prototype.releaseCollect = function() {
					console.log("releaseCollect start"), cc.sys.garbageCollect(), console.log("releaseCollect end")
				}, t.prototype.compareVersion = function(e, t) {
					e = e.split("."), t = t.split(".");
					for (var i = Math.max(e.length, t.length); e.length < i;) e.push("0");
					for (; t.length < i;) t.push("0");
					for (var o = 0; o < i; o++) {
						var n = parseInt(e[o]),
							a = parseInt(t[o]);
						if (n > a) return 1;
						if (n < a) return -1
					}
					return 0
				}, t.prototype.sendALDCount = function(e, t) {
					void 0 === t && (t = ""), console.log("sendALDCount", e, t)
				}, t.prototype.isIpadWidth = function() {
					return cc.winSize.width / cc.winSize.height <= 1 && cc.winSize.width / cc.winSize.height > .7
				}, t.prototype.shuffle = function(e) {
					e.sort(function(e, t) {
						return Math.random() > .5 ? -1 : 1
					})
				}, t.prototype.getTableCount = function(e) {
					var t = 0;
					if (e)
						for (var i in e) e[i] && t++;
					return t
				}, t.prototype.ifEmptyNode = function(e) {
					return !(!e || !e.parent)
				}, t.prototype.isQuarrySceenToMy = function() {
					return 1104 == window.Data.QuarryScene || 1103 == window.Data.QuarryScene
				}, t.prototype.isHideWxUi = function() {
					return window.Config.Step > 1
				}, t.prototype.isMobile = function() {
					return cc.sys.platform === cc.sys.MOBILE_BROWSER
				}, t = __decorate([r], t)
			}(cc.Component));
		i.Func = s, cc._RF.pop()
	}, {
		"crypto-ts": 12,
		md5: "md5"
	}],
	GEventDispatch: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "665d0SDqGtCJ6skaeKFU6u3", "GEventDispatch");
		window.GBaseEvent = {
			JsonLoded: 0,
			DownProto: 1,
			HttpLogin: 2
		};
		var o = {
			regists: {},
			on: function(e, t, i) {
				void 0 === this.regists[e] && (this.regists[e] = []), this.regists[e].push([t, i])
			},
			emit: function(e, t) {
				void 0 !== this.regists[e] && this.regists[e].forEach(function(e) {
					e[0].call(e[1], t)
				})
			},
			off: function(e, t) {
				if (void 0 !== this.regists[e])
					if (void 0 === t) this.regists[e].splice(0, this.regists[e].length);
					else {
						var i = this.regists[e];
						i.forEach(function(o, n) {
							if (o[1] == t) return i.splice(n, 1), void console.log("off " + e)
						})
					}
			},
			clear: function() {
				this.regists = {}
			}
		};
		window.GEventDispatch = o, cc._RF.pop()
	}, {}],
	Game2: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e4255fbvNJIJ7wXnIHikFpp", "Game2"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.newCropList = [], t.TyNodeList = [], t.lastFriendTuiJianId = 0, t.tyRedPointState = [], t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.reloadIndexShareReFunc = function(e, t) {
					if (e == window.Constant.shareIdList.DCR && void 0 != t && void 0 != t.inviteeOpenIdList) {
						var i = Math.min(10, t.inviteeOpenIdList.length);
						this.setShareResultFileData(e, i), window.IndexScene._IndexHelper.reloadDCRUi()
					}
				}, t.prototype.getShareResultFileData = function(e) {
					var t = window.FileData.getFileData(),
						i = 0;
					return void 0 != t.shareResult && void 0 != t.shareResult[e] && (i = t.shareResult[e]), i
				}, t.prototype.setShareResultFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.shareResult && "" != i.shareResult || (i.shareResult = {}), i.shareResult[e] = t, window.FileData.setFileData("shareResult", i.shareResult)
				}, t.prototype.TyClickChange = function(e, t, i, o) {
					void 0 === i && (i = []), void 0 === o && (o = null);
					var n = this;
					t == window.Constant.TyWindowKeyList.freeGetGold ? this.createTyWindow("index/freeGetGold") : t == window.Constant.TyWindowKeyList.cbtLayer ? this.createTyLayer("cbt/cbtLayer") : t == window.Constant.TyWindowKeyList.scarecrow_window ? this.createTyWindow("window/scarecrow_window", "ScarecrowWindow", function(e) {
						window.NetHelper.sendScareCrowHeartListRequest(function(t) {
							e(t)
						})
					}) : t == window.Constant.TyWindowKeyList.mail_window ? this.createTyWindow("window/mail_window", "MailWindow", function(e) {
						window.NetHelper.sendMailListRequest(0, function(t) {
							void 0 == t.list && (t.list = []), e(t.list), window.IndexScene._RedPointMgr.setRedPointHttp(window.Constant.NOTICE_KEY.MAIL, !1)
						})
					}) : t == window.Constant.TyWindowKeyList.goldHelper_window ? this.createTyWindow("window/goldHelper_window", "GoldHelperWindow", function(e) {
						e([])
					}) : t == window.Constant.TyWindowKeyList.planeCollect ? this.createTyWindow("window/planeCollect", "PlaneCollect", function(e) {
						e()
					}) : t == window.Constant.TyWindowKeyList.marketNotice_window ? this.createTyWindow("window/marketNotice_window", "TyWindow", function(e) {
						e([], t)
					}) : t == window.Constant.TyWindowKeyList.marketNotice2_window ? this.createTyWindow("window/marketNotice2_window", "TyWindow", function(e) {
						e([], t)
					}) : t == window.Constant.TyWindowKeyList.turnning_window ? (window.IndexScene._RedPointMgr.clickTurnning = !0, this.createTyWindow("window/turnning_window", "TurnningWindow", function(e) {
						e([])
					})) : t == window.Constant.TyWindowKeyList.task_window ? this.createTyWindow("window/task_window", "TaskWindow", function(e) {
						e([])
					}) : t == window.Constant.TyWindowKeyList.task_index ? window.IndexScene._RedPointMgr.getTaskIndexAward() : t == window.Constant.TyWindowKeyList.seedbuynotice_window ? this.createTyWindow("window/seedbuynotice_window", "SeedbuynoticeWindow", function(e) {
						e(i, 0, o)
					}) : t == window.Constant.TyWindowKeyList.map_window ? this.createTyWindow("map/map_window", "MapWindow", function(e) {
						e(i)
					}) : t == window.Constant.TyWindowKeyList.gameset_window ? this.createTyWindow("window/gameset_window", "GameSetWindow", function(e) {
						e([])
					}) : t == window.Constant.TyWindowKeyList.userScene ? (window.Func.ifEmptyNode(n.TyNodeList["lookuser/userScene"]) && n.TyNodeList["lookuser/userScene"].removeFromParent(!0), this.createTyWindow("lookuser/userScene", "UserScene", function(e) {
						e(i, o)
					}, !0)) : t == window.Constant.TyWindowKeyList.setqun_window ? this.createTyWindow("window/setqun_window", "TyWindow", function(e) {
						e([], t)
					}) : t == window.Constant.TyWindowKeyList.reapFinishPanel ? this.createTyWindow("title/reapFinishPanel", "ReapFinishLayer", function(e) {
						e([], t)
					}) : t == window.Constant.TyWindowKeyList.title_window ? window.WxLogin.getAddress(function() {
						n.createTyWindow("title/title_window", "TitleWindow", function(e) {
							e([], t)
						})
					}) : t == window.Constant.TyWindowKeyList.friendlist_window ? n.createTyWindow("friend/friendlist_window", "FriendListWindow", function(e) {
						e([])
					}) : t == window.Constant.TyWindowKeyList.friendtuijian_window ? window.Func.ifEmptyNode(n.TyNodeList["friend/friendtuijian_window"]) ? window.NetHelper.sendGetRecommendFriendListRequest(n.lastFriendTuiJianId, function(e) {
						void 0 == e.recommendFriendList && (e.recommendFriendList = []), n.lastFriendTuiJianId = e.endIndex, n.TyNodeList["friend/friendtuijian_window"].getComponent("FriendTuiJianWindow").updateUi(e.recommendFriendList)
					}) : n.createTyWindow("friend/friendtuijian_window", "FriendTuiJianWindow", function(e) {
						window.NetHelper.sendGetRecommendFriendListRequest(n.lastFriendTuiJianId, function(t) {
							void 0 == t.recommendFriendList && (t.recommendFriendList = []), n.lastFriendTuiJianId = t.endIndex, e(t.recommendFriendList)
						})
					}) : t == window.Constant.TyWindowKeyList.friendlook_window ? n.createTyWindow("friend/friendlook_window", "FriendLookWindow", function(e) {
						e(i, o)
					}, !0) : t == window.Constant.TyWindowKeyList.rule_window ? n.createTyWindow("window/rule_window", "RuleWindow", function(e) {
						e(i)
					}, !0) : t == window.Constant.TyWindowKeyList.friendnotice_window ? n.createTyWindow("friend/friendnotice_window", "FriendNoticeWindow", function(e) {
						window.NetHelper.sendHeartLogRequest(function(t) {
							void 0 == t.list && (t.list = []), e(t.list)
						})
					}, !0) : t == window.Constant.TyWindowKeyList.friendchangemb_window ? n.createTyWindow("friend/friendchangemb_window", "FriendChangeMBWindow", function(e) {
						e(i)
					}, !0) : t == window.Constant.TyWindowKeyList.ad_window ? n.createTyWindow("window/ad_window", "AdWindow", function(e) {
						e(i)
					}, !0) : t == window.Constant.TyWindowKeyList.getnewcrop_window ? n.createTyWindow("window/getnewcrop_window", "TyWindow", function(e) {
						e(i, t)
					}) : t == window.Constant.TyWindowKeyList.weal_window ? n.createTyWindow("window/weal_window", "TyWindow", function(e) {
						e(i, t)
					}) : t == window.Constant.TyWindowKeyList.newyear_window && n.createTyWindow("window/newyear_window", "NewyearWindow", function(e) {
						window.NetHelper.sendGetInviteInfoRequest(window.Constant.shareIdList.NEWYEAR, function(t) {
							e(t.inviteeOpenIdList || [])
						})
					})
				}, t.prototype.createTyWindow = function(e, t, i, o) {
					if (void 0 === t && (t = ""), void 0 === i && (i = null), void 0 === o && (o = !1), console.log("createTyWindow", e, window.Game.getPanel()), o || !(window.Game.getPanel() || window.IndexScene && window.IndexScene.isNotShowLayer2())) {
						var n = this,
							a = function(i, a, r) {
								void 0 === i && (i = null), void 0 === a && (a = 0), void 0 === r && (r = null), window.Game.setPanel(!0), cc.loader.loadRes("prefabs/" + e, function(s, d) {
									if (window.Game.setPanel(!1), o || !window.IndexScene || !window.IndexScene.isNotShowLayer2()) {
										if (s) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/" + e, s), void n.createTyWindow(e);
										var c = cc.instantiate(d);
										window.IndexScene.node.getChildByName("panel2").addChild(c), null != i && "" != t && (r ? c.getComponent(t).updateUi(i, a, r) : c.getComponent(t).updateUi(i, a)), n.TyNodeList[e] = c
									}
								})
							};
						null != i ? i(a) : a()
					}
				}, t.prototype.createTyLayer = function(e) {
					if (!window.Game.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var t = this;
						window.Game.setPanel(!0), cc.loader.loadRes("prefabs/" + e, function(i, o) {
							if (window.Game.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
								if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/" + e, i), void t.createTyWindow(e);
								var n = cc.instantiate(o);
								window.Game.ScaleBgToScreen(n), window.Game2.setCloseBtPos(n), window.IndexScene.node.addChild(n)
							}
						})
					}
				}, t.prototype.reGetDiam = function() {
					var e = [{
						type: 2,
						num: window.JsonManager.getData("Variable", 13).Value
					}];
					window.Data.setGoodAward(e), window.Game.openAwardLayer3(e)
				}, t.prototype.FreeGetDiam = function() {
					var e = this;
					if (window.Game2.ifEnoughPlayAd(9)) {
						e = this;
						window.WxFunc.OpenAd(9, function() {
							e.reGetDiam()
						})
					} else {
						var t = window.FileData.getFileData("freeGetdiamTimes");
						"number" != typeof t ? t = 1 : t++, t < window.JsonManager.getData("Variable", 14).Value && window.WxFunc.createShare(window.Constant.shareIdList.FREE_GET_DIAM, function() {
							e.reGetDiam(), window.FileData.setFileData("freeGetdiamTimes", t), t + 1 >= window.JsonManager.getData("Variable", 14).Value && window.IndexScene.hideFreeDiamBt()
						})
					}
				}, t.prototype.hideAdBtIcon = function(e) {
					void 0 != e.getChildByName("Sprite") && (e.getChildByName("Sprite").active = !1), void 0 != e.getChildByName("Label") && e.getChildByName("Label").setPosition(0, 2)
				}, t.prototype.hideAdBtIcon2 = function(e, t) {
					e.active = !0, e.setPosition(0, e.getPosition().y), t.active = !1
				}, t.prototype.hideAdBtIcon3 = function(e, t) {
					e.active = !0, t.active = !1
				}, t.prototype.ifEnoughPlayAd = function(e) {
					var t = window.WxFunc.getAdFileData(e),
						i = window.JsonManager.getData("Advertisement", e).LimitTimes,
						o = window.WxFunc.getAdFileData(0),
						n = window.WxFunc.getAdFileData(-1);
					return !(t >= i && t > 0 || 0 == i || o >= 7 || n > 0)
				}, t.prototype.ifEnoughPlayAd2 = function(e) {
					void 0 === e && (e = 1);
					var t = window.WxFunc.getAdFileData(0),
						i = window.WxFunc.getAdFileData(-1);
					return !(t >= 7 || i > 0)
				}, t.prototype.ifEnoughPlayShare = function(e, t) {
					void 0 === t && (t = 0);
					var i = window.WxFunc.getShareFileData(0 != t ? t : e),
						o = window.JsonManager.getData("Advertisement", e).ShareTimes;
					return !(i >= o && i > 0 || 0 == o)
				}, t.prototype.getMoney = function(e) {
					var t = parseInt(window.FileData.getFileData("openBox" + e)),
						i = 0;
					("number" != typeof t || isNaN(t)) && (t = 0);
					var o = 0;
					return 1 == e ? (o = Math.floor(window.Func.moneyChange2(window.JsonManager.getData("Variable", 5).Value)) * Math.pow(Math.floor(window.JsonManager.getData("Variable", 6).Value), t), t += 1) : 2 != e && 3 != e || (t > 0 && (i = Math.floor(((new Date).getTime() - t) / 1e3), 2 == e && i > 43200 || 3 == e && i > 129600 ? t = 0 : 2 == e ? i = 43200 - i : 3 == e && (i = 129600 - i)), t > 0 && (o = 2 == e ? 20 : 80)), [Math.floor(o), t, i]
				}, t.prototype.ifShowBoxRedPoint = function() {
					for (var e = !1, t = 0; t < 3; t++) {
						var i = this.getMoney(t + 1)[0],
							o = window.Data.getBox(t + 1);
						(0 == i || o > 0) && (e = !0)
					}
					return e
				}, t.prototype.getCarSGTime = function(e) {
					var t = window.FileData.getFileData("getSeedTime");
					if ("number" == typeof t) {
						var i = ((new Date).getTime() - t) / 1e3,
							o = 20,
							n = window.FileData.getFileData("getNowSeedTimes");
						"number" != typeof n && (n = 0);
						var a = window.JsonManager.getData("Variable", 16).Value.split(";");
						if (i < 3600 * (o = void 0 != a[n] ? a[n] : a[a.length - 1])) {
							if (void 0 != e && e.length > 0) {
								for (var r = 0, s = 0; s < e.length; s++) void 0 != e[s].uid && s < 5 && r++;
								i += r * window.Constant.getCropFriendSubTime * 3600
							}
							if (i < 3600 * o) return [!0, i, o]
						}
					}
					return [!1, 0, 0]
				}, t.prototype.getPacketRedPoint = function(e) {
					var t = window.FileData.getFileData("package_count");
					if (void 0 == e || 0 == e.length) return [];
					for (var i = [], o = [], n = 0; n < e.length; n++) {
						if (void 0 != (c = e[n]) && (void 0 == i[c.inviteType] && (i[c.inviteType] = {}), void 0 != c.inviteeOpenIdList))
							for (var a = 0; a < c.inviteeOpenIdList.length; a++) i[c.inviteType][c.inviteeOpenIdList[a].uid] = c.inviteeOpenIdList[a]
					}
					var r = [];
					for (var s in window.Constant.shareIdList) {
						var d = !1;
						for (n = 0; n < window.Constant.PackageToIdList.length; n++)
							if (s == window.Constant.PackageToIdList[n]) {
								d = !0;
								break
							} d && (r[window.Constant.shareIdList[s]] = 1)
					}
					for (n = 0; n < e.length; n++) {
						var c;
						if (void 0 != (c = e[n]).inviteeOpenIdList && void 0 != c.inviteType && 1 == r[c.inviteType])
							for (a = 0; a < c.inviteeOpenIdList.length; a++)
								if (1 == t && window.Constant.shareIdList[window.Constant.PackageToIdList[t]] == c.inviteType) o.push(c.inviteeOpenIdList[a]);
								else if (t > 1) {
							d = !0;
							for (var l = 0; l < t - 1; l++) {
								var p = window.Constant.shareIdList[window.Constant.PackageToIdList[l + 1]];
								void 0 != p && void 0 != i[p][c.inviteeOpenIdList[a].uid] && (d = !1)
							}
							d && o.push(c.inviteeOpenIdList[a])
						}
					}
					return o
				}, t.prototype.setCloseBtPos = function(e) {
					void 0 != e.getChildByName("closeBt") && e.getChildByName("closeBt").setPosition(-cc.winSize.width / 2 + e.getChildByName("closeBt").width / 2, cc.winSize.height / window.Func.getLiuHaiScaleKey() - 100)
				}, t.prototype.setCloseBtPosToBanner = function(e) {
					if (void 0 != e) {
						var t = -cc.winSize.height / 2 + 107 + 1.5 * e.height;
						e.setPosition(e.x, t), !window.Func.isMobile() || 3 != window.Config.Step && 4 != window.Config.Step || e.setPosition(e.x, -cc.winSize.height / 2 + 100)
					}
				}, t.prototype.setGoodPanelUi = function(e, t, i, o) {
					void 0 === o && (o = 11), e.removeAllChildren();
					for (var n = this, a = Math.min(i.length, 4), r = function(r) {
							n.scheduleOnce(function() {
								var n = i[r],
									s = cc.instantiate(t[n.node ? n.node : 4 == n.type ? 2 : 0]);
								if (void 0 != s) {
									e.addChild(s);
									var d = Math.floor((e.width - 20 - (a * s.width + (a - 1) * o)) / 2),
										c = -e.width / 2 + 10 + d + s.width / 2 + s.width * r + o * r;
									if (s.setPosition(c, 0), n.handbookid) {
										var l = window.JsonManager.getData("Handbook", n.handbookid);
										l && (n.typeid = l.CropsId)
									}
									var p = window.JsonManager.getData("Crops", n.typeid);
									4 == n.type || 13 == n.type ? 4 == n.type ? (window.Func._addSpritePic2(s.getChildByName("Sprite").getComponent(cc.Sprite), "texture/tps/crop_icon2", "c_" + n.typeid, !1), window.Func._addSpritePic2(s.getChildByName("Sprite0").getComponent(cc.Sprite), "texture/tps/box1", "icon223_" + (n.pos1 + 1), !1)) : s.getComponent("PieceUiLayer").reloadUi(n) : (p = void 0, window.Func._addSpritePic2(s.getChildByName("Sprite").getComponent(cc.Sprite), "texture/tps/common", "sm_" + n.type, !1));
									var u = (void 0 == p ? window.Constant.GoodAwardNameList[n.type] || "" : p.Name) + (13 == n.type ? "\u788e\u7247" : "") + (void 0 == s.getChildByName("numLabel") ? "+" + window.Func.moneyChange(n.num) : "");
									s.getChildByName("Label").getComponent(cc.Label).string = u, void 0 != s.getChildByName("numLabel") && n.num > 0 && (s.getChildByName("numLabel").getComponent(cc.Label).string = window.Func.moneyChange(n.num)), void 0 != s.getChildByName("ySprite") && (n.isTake ? s.getChildByName("ySprite").active = !0 : s.getChildByName("ySprite").active = !1)
								}
							}, .2 * r)
						}, s = 0; s < a; s++) r(s)
				}, t.prototype.createMarketEffect = function(e) {
					var t = this;
					cc.loader.loadRes("prefabs/effect/market_action", function(i, o) {
						if (i) return console.log("prefabs/effect/market_action", i), void this.createMarketEffect();
						var n = cc.instantiate(o);
						window.IndexScene.node.getChildByName("panel3").addChild(n), n.zIndex = 101, n.active = !0, n.getChildByName("action1").getComponent(cc.Animation).play(), n.getChildByName("action1").active = !0, n.getChildByName("action2").active = !1, n.getChildByName("action1").scale = cc.winSize.height / 1136 * 3, n.getChildByName("action2").scale = cc.winSize.height / 1136 * 3, t.scheduleOnce(function() {
							n.getChildByName("action1").getComponent(cc.Animation).stop(), n.getChildByName("action2").getComponent(cc.Animation).play(), n.getChildByName("action2").active = !0, n.getChildByName("action1").active = !1, t.scheduleOnce(function() {
								n.removeFromParent(), window.IndexScene.SeedGetCrop(e)
							}, .5)
						}, 1.5)
					})
				}, t.prototype.createMarketEffect2 = function() {
					var e = this;
					cc.loader.loadRes("prefabs/effect/market_action2", function(t, i) {
						if (t) return console.log("prefabs/effect/market_action2", t), void this.createMarketEffect2();
						var o = cc.instantiate(i);
						o.setPosition(20, -30), window.IndexScene.carSpineObj.addChild(o), o.active = !0, o.getChildByName("action1").getComponent(cc.Animation).play(), e.scheduleOnce(function() {
							o.removeFromParent()
						}, .5)
					})
				}, t.prototype.addNewCropList = function(e) {
					e && (this.newCropList[e] = !0)
				}, t.prototype.getNewCropRed = function(e) {
					return this.newCropList[e]
				}, t.prototype.getRandNewCropRed = function() {
					for (var e in this.newCropList)
						if (this.newCropList[e]) return e;
					return null
				}, t.prototype.cleanNewCropList = function() {
					this.newCropList = []
				}, t.prototype.countNewCrop = function() {
					var e = 0;
					for (var t in this.newCropList)
						if (this.newCropList[t]) {
							e++;
							break
						} return e
				}, t.prototype.OpenFunction = function(e) {
					return window.FarmManager.isCreateCrop(window.JsonManager.getData("Function", e).Value)
				}, t.prototype.getTitleByJsonToId = function() {
					for (var e = window.FileData.getFileData("max_his_second"), t = window.JsonManager.getTable("Title"), i = t[0], o = 0; o < t.length; o++) {
						var n = t[o];
						if (e >= window.Func.moneyChange2(n.Speed) && (!t[o + 1] || t[o + 1] && e < window.Func.moneyChange2(t[o + 1].Speed))) {
							i = n;
							break
						}
					}
					return i
				}, t.prototype.getTitleName = function(e) {
					return void 0 === e && (e = null), e || (e = window.Game2.getTitleByJsonToId()), ("Th\u00e0nh ph\u1ed1" == e.Area && "" != window.WxLogin.city ? window.WxLogin.city : e.Area) + e.Name
				}, t.prototype.LookFriendScene = function(e, t, i) {
					void 0 === t && (t = null), void 0 === i && (i = null);
					var o = function(i) {
						if (i.userInfo) {
							if (i.userInfo.userInfo)
								for (var o in i.userInfo.userInfo) e[o] || (e[o] = i.userInfo.userInfo[o]);
							!e.heartNum && i.userInfo.heartNum && (e.heartNum = i.userInfo.heartNum)
						}(i = JSON.parse(i.profile)).mydata = e, window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.userScene, i, t)
					};
					i ? o(i) : window.NetHelper.sendLookupProfileRequest(e.rank || 1, e.uid, function(e) {
						o(e)
					})
				}, t.prototype.changeFriendData = function(e) {
					return e.userInfo && (e.userInfo.makeTrouble = e.makeTrouble, e.userInfo.behavior = e.behavior, "number" != typeof e.userInfo.heartNum && (e.userInfo.heartNum = e.heartNum)), e
				}, t.prototype.randCropData = function() {
					for (var e = [], t = window.JsonManager.farmTable, i = 1; i < t.length; i++) {
						var o = window.Func.randomNum(0, t[i].length - 1);
						e[i] = t[i][o].Id
					}
					return window.FileData.setFileData("marketCrop", e), e
				}, t.prototype.playSzAction = function(e) {
					var t = e.getChildByName("szSprite").scale.x > 0 ? 1 : -1;
					e.getChildByName("szSprite").active = !0, e.getChildByName("szSprite").rotation = 20 * t, e.getChildByName("szSprite").stopAllActions(), e.getChildByName("szSprite").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25 * t, 0), cc.rotateBy(.5, 25 * t, 0))))
				}, t.prototype.setTyRedPointState = function(e, t) {
					this.tyRedPointState[e] = t
				}, t.prototype.getTyRedPointState = function(e) {
					return this.tyRedPointState[e]
				}, t.prototype.getAllTyRedPointstate = function(e) {
					for (var t in this.tyRedPointState)
						if (this.tyRedPointState[t] && e != t) return !0;
					return !1
				}, t = __decorate([n], t)
			}(cc.Component));
		i.Game2 = a, cc._RF.pop()
	}, {}],
	GameSetWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "61532QfgmxIHLDKaySngSRq", "GameSetWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.btPanel = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					void 0 === e && (e = null);
					for (var t = 0; t < 2; t++) {
						var i = 1 == (0 == t ? window.FileData.getFileData("musicSet") : window.FileData.getFileData("audioSet")),
							o = this.btPanel[t].getChildByName("Sprite");
						window.Func._addSpritePic2(o.getComponent(cc.Sprite), "texture/tps/index", "icon_set_10_" + (i ? 1 : 2)), o.getChildByName("Label1").active = i, o.getChildByName("Label2").active = !i, o.getChildByName("icon").setPosition(40 * (i ? 1 : -1), 0)
					}
				}, t.prototype.BtClick = function(e, t) {
					if (1 == (t = parseInt(t))) {
						var i = window.FileData.getFileData("musicSet");
						window.FileData.setFileData("musicSet", 1 == i ? 2 : 1), 1 == i ? cc.audioEngine.pause(window.IndexScene.bgMusicId) : (cc.audioEngine.setVolume(window.IndexScene.bgMusicId, .3), cc.audioEngine.resume(window.IndexScene.bgMusicId))
					} else {
						var o = window.FileData.getFileData("audioSet");
						window.FileData.setFileData("audioSet", 1 == o ? 2 : 1)
					}
					this.updateUi()
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "btPanel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.GameSetWindow = r, cc._RF.pop()
	}, {}],
	Game: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f59ee1OcWpMMrjrkbdCRoNw", "Game"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o, n = cc._decorator,
			a = n.ccclass,
			r = n.property;
		(function(e) {
			e[e.NONE = 4] = "NONE", e[e.DEDAL = 4] = "DEDAL", e[e.SILVER = 9] = "SILVER", e[e.GOLD = 9] = "GOLD"
		})(o = i.CROP_STATE_KEY || (i.CROP_STATE_KEY = {}));
		var s = [o.NONE, o.DEDAL, o.SILVER, o.GOLD],
			d = ["ThườngC\u00e2y tr\u1ed3ng", "Huy ch\u01b0\u01a1ng \u0111\u1ed3ngC\u00e2y tr\u1ed3ng", "Bạc\u724cC\u00e2y tr\u1ed3ng", "Vàng\u724cC\u00e2y tr\u1ed3ng"],
			c = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.waitObj = null, t.SelectCropObj = null, t.ToolScrollObj = null, t.cropBoxobj = null, t._AlertBarObj = null, t.m_rank_windowObj = null, t.goldLabelList = [], t.TopCoinObj = null, t.goldLabelList2 = [], t.TopCoinObj2 = null, t.NewHelper = null, t.CROP_STATE = s, t.CROP_LEVEL_DOUBLE = [1, 2, 4, 7], t.CROP_STATE_NAME = d, t.SelectCropId = 0, t.playGoldAction = !1, t.CropLevelNumList = [], t
				}
				return __extends(t, e), t.prototype.reGame = function() {
					this.ToolScrollObj && this.ToolScrollObj.parent && this.ToolScrollObj.removeFromParent(!0), this.ToolScrollObj = null, window.IndexScene && window.IndexScene.clear(), window.WxFunc && window.WxFunc.hideBannerAd(), window.Data.Status = 0, window.Data.Token = "", window.Data.isNewAccount = !1, window.FileData.saveFileData(!1, !1), cc.game.restart()
				}, t.prototype.init = function() {
					window.WxLogin.init(), this.initCropBoxData(1), this.createWaitPanel(), this.createTopCoinUi(), this.createTopCoinUi2(), this.createAlertBar(), this.createNewHelper(), this.schedule(function() {
						this.setSecTitle()
					}, 1), window.TestData.init2()
				}, t.prototype.createAlertBar = function() {
					var e = this;
					cc.loader.loadRes("prefabs/AlertBar", function(t, i) {
						t ? console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/AlertBar", t) : (e._AlertBarObj = cc.instantiate(i), e._AlertBarObj.active = !1, e._AlertBarObj.zIndex = 200, cc.find("Canvas/panel3").addChild(e._AlertBarObj))
					})
				}, t.prototype.showAlertBar = function(e, t) {
					if (void 0 === t && (t = 1500), cc.sys.platform !== cc.sys.WECHAT_GAME) {
						if (null == this._AlertBarObj) return;
						this._AlertBarObj.active = !0, this._AlertBarObj.getComponent("AlertBar").setTip(e), this.scheduleOnce(function() {
							this.hideAlertBar()
						}, 1.5)
					} else setTimeout(function() {
						wx.showToast({
							title: e,
							icon: "none"
						}), setTimeout(function() {
							wx.hideToast()
						}, 2e3)
					}, 0);
					e.indexOf("Thi\u1ebfu v\u00e0ng") > -1 && !window.Config.isLooking && ((window.FileData.getFileData("freeGetGold2") < window.JsonManager.getData("Advertisement", 11).ShareTimes || window.Game2.ifEnoughPlayAd(11) && 3 == window.Constant.PlayAdOrShare) && window.Game2.createTyWindow("index/freeGetGold2"))
				}, t.prototype.hideAlertBar = function() {
					this._AlertBarObj.active = !1
				}, t.prototype.createWaitPanel = function() {
					var e = this;
					cc.loader.loadRes("prefabs/wait_panel", function(t, i) {
						if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/wait_panel", t), void e.scheduleOnce(function() {
							e.createWaitPanel()
						}, 2);
						e.waitObj = cc.instantiate(i), e.waitObj.zIndex = 201, e.waitObj.active = !1, cc.find("Canvas/panel3").addChild(e.waitObj)
					})
				}, t.prototype.setPanel = function(e) {
					void 0 != cc.find("Canvas/bg_panel") && (cc.find("Canvas/bg_panel").active = e), e ? window.WxFunc.showLoading() : window.WxFunc.hideLoading()
				}, t.prototype.getPanel = function() {
					return void 0 == cc.find("Canvas/bg_panel") || cc.find("Canvas/bg_panel").active
				}, t.prototype.setSecTitle = function() {
					var e = window.FarmManager.getSecondGetCoin(),
						t = window.FileData.getFileData("max_his_second");
					t < e && (window.FileData.setFileData("max_his_second", e), t = e);
					var i = window.Game2.getTitleByJsonToId();
					window.FileData.getFileData("max_his_title") < i.Id && (window.FileData.setFileData("max_his_title", i.Id), window.IndexScene._IndexHelper.isShowTitle = !0, window.NetHelper.sendUpdateTitleRequest(window.Game2.getTitleName(i)), i.Id >= 4 && this.setNoticeContent(1, "" == window.WxLogin.nickName ? window.Data.startName : window.WxLogin.nickName, window.Game2.getTitleName(i)))
				}, t.prototype.reloadGoldLabel = function() {
					if (null != this.goldLabelList[2]) {
						var e = window.Func.moneyChange(window.Data.getSeed()),
							t = window.Func.moneyChange(window.Data.getDiam()),
							i = window.Func.moneyChange(window.Data.getGold());
						this.goldLabelList[2].string = i, this.goldLabelList[1].string = t, this.goldLabelList[0].string = e;
						var o = window.FarmManager.getSecondGetCoin();
						if (this.goldLabelList[3].string = window.Func.moneyChange(o), null != this.goldLabelList2[2])
							if (this.goldLabelList2[2].string = i, this.goldLabelList2[1].string = t, this.goldLabelList2[0].string = e, 0 == window.FileData.getFileData("isSendTitle")) {
								this.setSecTitle();
								var n = window.Game2.getTitleByJsonToId();
								window.FileData.setFileData("isSendTitle", 1), window.NetHelper.sendUpdateTitleRequest(window.Game2.getTitleName(n))
							}
					}
				}, t.prototype.setNoticeContent = function(e, t, i) {
					window.NetHelper.sendSendTopNoticeRequest(e + ";" + t + ";" + i)
				}, t.prototype.changeShowTopCoinUi = function(e) {
					void 0 === e && (e = !1), null != this.TopCoinObj && null != this.TopCoinObj2 && (!e && window.IndexScene.isNotShowLayer3() ? (this.TopCoinObj.active = !1, this.TopCoinObj2.active = !0) : (this.TopCoinObj.active = !0, this.TopCoinObj2.active = !1))
				}, t.prototype.createTopCoinUi = function() {
					var e = this;
					cc.loader.loadRes("prefabs/topCoin_panel", function(t, i) {
						if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/topCoin_panel", t), void e.scheduleOnce(function() {
							e.createTopCoinUi()
						}, 2);
						if (e.TopCoinObj = cc.instantiate(i), e.TopCoinObj.zIndex = 199, e.TopCoinObj.active = !0, window.Func.isLiuHaiScreen())
							for (var o = 1; o < 5; o++) {
								var n = e.TopCoinObj.getChildByName("bg" + o).getPosition();
								e.TopCoinObj.getChildByName("bg" + o).setPosition(n.x, n.y - 56)
							}
						cc.find("Canvas/topCoin_panel").addChild(e.TopCoinObj);
						for (o = 1; o < 5; o++) e.goldLabelList[o - 1] = e.TopCoinObj.getChildByName("bg" + o).getComponentInChildren(cc.Label);
						var a;
						(a = new cc.Component.EventHandler).target = cc.find("Canvas"), a.component = "IndexScene", a.handler = "BtclickTopCoin", a.customEventData = "1", e.TopCoinObj.getChildByName("bg1").getChildByName("Button").getComponent(cc.Button).clickEvents.push(a), (a = new cc.Component.EventHandler).target = cc.find("Canvas"), a.component = "IndexScene", a.handler = "BtclickTopCoin", a.customEventData = "4", e.TopCoinObj.getChildByName("bg4").getChildByName("Button").getComponent(cc.Button).clickEvents.push(a), e.reloadGoldLabel()
					})
				}, t.prototype.playTopGoldAction = function() {
					if (!this.playGoldAction) {
						var e = this;
						this.playGoldAction = !0;
						var t = this.TopCoinObj.getChildByName("bg3").getChildByName("bgSprite1");
						t.stopAllActions(), t.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
							e.playGoldAction = !1
						})))
					}
				}, t.prototype.createTopCoinUi2 = function() {
					var e = this;
					cc.loader.loadRes("prefabs/topCoin_panel2", function(t, i) {
						if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/topCoin_panel2", t), void e.scheduleOnce(function() {
							e.createTopCoinUi2()
						}, 2);
						if (e.TopCoinObj2 = cc.instantiate(i), e.TopCoinObj2.zIndex = 199, e.TopCoinObj2.active = !1, window.Func.isLiuHaiScreen())
							for (var o = 1; o < 4; o++) {
								var n = e.TopCoinObj2.getChildByName("bg" + o).getPosition();
								e.TopCoinObj2.getChildByName("bg" + o).setPosition(n.x, n.y - 56)
							}
						cc.find("Canvas/topCoin_panel").addChild(e.TopCoinObj2);
						for (o = 1; o < 4; o++) e.goldLabelList2[o - 1] = e.TopCoinObj2.getChildByName("bg" + o).getComponentInChildren(cc.Label);
						var a = new cc.Component.EventHandler;
						a.target = cc.find("Canvas"), a.component = "IndexScene", a.handler = "BtclickTopCoin", a.customEventData = "1", e.TopCoinObj2.getChildByName("bg1").getChildByName("Button").getComponent(cc.Button).clickEvents.push(a), e.reloadGoldLabel()
					})
				}, t.prototype.createNewHelper = function(e) {
					void 0 === e && (e = null);
					cc.find("Canvas/newhelper_panel4").zIndex = 1e3, this.NewHelper = cc.find("Canvas/newhelper_panel4/newHelper"), console.log("window['Data'].isNewAccount", window.Data.isNewAccount, window.FileData.getDataByKey("loginTimes"));
					var t = window.FileData.getFileData("guideStep");
					(!window.Data.isNewAccount || "number" == typeof t && t <= 16 || window.Data.getGold() > 1e4) && (this.setNewHelperSaveData(17), t = 17), window.Data.isNewAccount && "number" != typeof t ? (this.updateNewHelper(), this.NewHelper.active = !0) : this.NewHelper.active = !1
				}, t.prototype.getIsShowNewHelper = function() {
					return null != this.NewHelper && this.NewHelper.active
				}, t.prototype.setNewHelperSaveData = function(e) {
					window.FileData.setFileData("guideStep", e), this.setNewHelperFileData(e, 1)
				}, t.prototype.getNewHelperFileData = function(e) {
					var t = window.FileData.getFileData(),
						i = 0;
					return void 0 != t.newHelper && void 0 != t.newHelper[e] && (i = t.newHelper[e]), i
				}, t.prototype.setNewHelperFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.newHelper && "" != i.newHelper || (i.newHelper = {}), i.newHelper[e] = t, window.FileData.setFileData("newHelper", i.newHelper)
				}, t.prototype.getNewHelperFileData2 = function(e, t) {
					var i = window.FileData.getFileData(),
						o = 0;
					return void 0 != i.newHelper2 && void 0 != i.newHelper2[e] && void 0 != i.newHelper2[e][t] && (o = i.newHelper2[e][t]), o
				}, t.prototype.setNewHelperFileData2 = function(e, t, i) {
					void 0 === i && (i = 1);
					var o = window.FileData.getFileData();
					void 0 != o.newHelper2 && "" != o.newHelper2 || (o.newHelper2 = {}), void 0 != o.newHelper2[e] && "" != o.newHelper2[e] || (o.newHelper2[e] = {}), o.newHelper2[e][t] = i, window.FileData.setFileData("newHelper2", o.newHelper2)
				}, t.prototype.setNewHelperShow = function(e) {
					null == this.NewHelper ? e && this.createNewHelper() : this.NewHelper.getComponent("NewHelperLayer").setShow(e)
				}, t.prototype.getNewHelperShow = function() {
					return !!this.NewHelper && this.NewHelper.getComponent("NewHelperLayer").getShow()
				}, t.prototype.updateNewHelper = function(e, t) {
					void 0 === e && (e = 0), void 0 === t && (t = 0), null == this.NewHelper && 0 == e ? this.createNewHelper() : this.NewHelper.getComponent("NewHelperLayer").updateUi(e, t)
				}, t.prototype.createSeedNoticeWindow = function() {
					if (!this.getPanel()) {
						var e = this;
						this.setPanel(!0), cc.loader.loadRes("prefabs/index/seedNotice", function(t, i) {
							if (e.setPanel(!1), t) console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/seedNotice", t);
							else {
								var o = cc.instantiate(i);
								window.IndexScene.node.getChildByName("panel2").addChild(o)
							}
						})
					}
				}, t.prototype.createSelectCrop = function(e) {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer())
						if (this.SelectCropId = e, null == this.SelectCropObj) {
							this.setPanel(!0);
							var t = this;
							cc.loader.loadRes("prefabs/index/selectCrop_panel", function(i, o) {
								if (t.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/selectCrop_panel", i), void t.createSelectCrop(e);
									t.SelectCropObj = cc.instantiate(o), t.SelectCropObj.active = !0, t.SelectCropObj.getChildByName("ScrollView").getComponent("SelectCropScrollLayer").initUI(e), cc.find("Canvas/panel3").addChild(t.SelectCropObj);
									var n = window.FileData.getFileData("guideStep");
									"number" != typeof n || 1 == n ? (window.Game.setNewHelperSaveData(2), window.Game.updateNewHelper()) : 8 == n && (window.Game.setNewHelperSaveData(9), window.Game.updateNewHelper())
								}
							})
						} else this.SelectCropObj.active = !0, this.SelectCropObj.getChildByName("ScrollView").getComponent("SelectCropScrollLayer").initUI(e)
				}, t.prototype.createTool = function(e, t) {
					if (void 0 === e && (e = 1), void 0 === t && (t = !0), 11 == window.FileData.getFileData("guideStep") && window.Game.setNewHelperShow(!1), !this.getPanel() && !window.IndexScene.isNotShowLayer())
						if (null == this.ToolScrollObj) {
							this.setPanel(!0);
							var i = this;
							cc.loader.loadRes("prefabs/shop/createTool", function(o, n) {
								if (i.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (o) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/shop/createTool", o), void i.createTool(e, t);
									i.ToolScrollObj = cc.instantiate(n), i.ToolScrollObj.active = !0;
									var a = i.ToolScrollObj.getChildByName("ScrollView");
									window.IndexScene.node.addChild(i.ToolScrollObj), a.getComponent("ToolLayer").initUI(e, t, !0), window.Game.ScaleBgToScreen(i.ToolScrollObj), window.IndexScene._IndexHelper.isClickTool = !0, 11 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(12), window.Game.updateNewHelper())
								}
							})
						} else this.ToolScrollObj.active = !0, this.ToolScrollObj.getChildByName("ScrollView").getComponent("ToolLayer").initUI(e, t, !1)
				}, t.prototype.closeSelectCrop = function() {
					null != this.SelectCropObj && (this.SelectCropObj.removeFromParent(!0), this.SelectCropObj = null)
				}, t.prototype.createCropBookDes = function(e) {
					if (!this.getPanel()) {
						this.setPanel(!0);
						var t = this;
						cc.loader.loadRes("prefabs/box/des_panel", function(i, o) {
							if (t.setPanel(!1), i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/box/des_panel", i), void t.createCropBookDes(e);
							var n = cc.instantiate(o);
							n.getComponent("CropBookDesLayer").initUI(e), n.zIndex = 10, t.cropBoxobj.addChild(n)
						})
					}
				}, t.prototype.createFarmCollectWindow = function() {
					if (void 0 != window.IndexScene.node.getChildByName("panel2").getChildByName("farmCollect") && window.IndexScene.node.getChildByName("panel2").getChildByName("farmCollect").removeFromParent(!0), console.log("window['IndexScene'].getOffTime()", window.IndexScene.getOffTime()), !(window.IndexScene.getOffTime() < 600)) {
						var e = window.FarmManager.getOffline_getAllCoin();
						console.log("createFarmCollectWindow - coin", e);
						e > 1e3 && cc.loader.loadRes("prefabs/index/farmCollect", function(t, i) {
							if (t) console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/farmCollect", t);
							else {
								var o = cc.instantiate(i);
								o.zIndex = 10, window.IndexScene.node.getChildByName("panel2").addChild(o), o.getComponent("FarmCollectLayer").updateUi(e)
							}
						})
					}
				}, t.prototype.createCropBox = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer())
						if (null == this.cropBoxobj) {
							this.setPanel(!0);
							var e = this;
							cc.loader.loadRes("prefabs/box/cropBox", function(t, i) {
								if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/box/cropBox", t), void e.createCropBox();
									var o = cc.instantiate(i);
									window.IndexScene.node.addChild(o), o.getComponent("CropBoxLayer").init(), window.Game.ScaleBgToScreen(o.getChildByName("bg")), o.getChildByName("closeBt").setPosition(-cc.winSize.width / 2 + o.getChildByName("closeBt").width / 2, cc.winSize.height / window.Func.getLiuHaiScaleKey()), e.cropBoxobj = o
								}
							})
						} else this.cropBoxobj.active = !0, this.cropBoxobj.getComponent("CropBoxLayer").init()
				}, t.prototype.createGetGoodLayer = function(e) {
					if (!window.Game.getNewHelperShow()) {
						var t = this;
						cc.loader.loadRes("prefabs/index/getGoodUi", function(i, o) {
							if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/getGoodUi", i), void t.createGetGoodLayer(e);
							var n = cc.instantiate(o);
							n.getComponent("GetGoodLayer").init(e), n.zIndex = 10, window.IndexScene.node.getChildByName("panel2").addChild(n)
						})
					}
				}, t.prototype.createGetSeedCar = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var e = this;
						window.NetHelper.sendGetInviteInfoRequest(window.Constant.shareIdList.FAIR, function(t) {
							e.setPanel(!0), cc.loader.loadRes("prefabs/index/market", function(i, o) {
								if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/market", i), void e.createGetSeedCar();
									window.IndexScene.addHttpData(window.Constant.shareIdList.FAIR, t.inviteeOpenIdList);
									var n = cc.instantiate(o);
									window.IndexScene.node.getChildByName("panel2").addChild(n), n.getComponent("MarketLayer").updateUi(t)
								}
							})
						})
					}
				}, t.prototype.createPlane = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var e = this;
						this.setPanel(!0), cc.loader.loadRes("prefabs/index/plane", function(t, i) {
							if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
								if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/plane", t), void e.createPlane();
								var o = cc.instantiate(i);
								window.IndexScene.node.getChildByName("panel2").addChild(o)
							}
						})
					}
				}, t.prototype.CreateSceneMove = function(e, t) {
					if (void 0 === e && (e = 0), void 0 === t && (t = null), !this.getPanel()) {
						var i = this;
						this.setPanel(!0), cc.loader.loadRes("prefabs/index/sceneMoveWindow", function(o, n) {
							if (i.setPanel(!1), o) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/sceneMoveWindow", o), void i.CreateSceneMove(e);
							var a = cc.instantiate(n);
							window.IndexScene.node.getChildByName("panel2").addChild(a), a.getComponent("SceneMoveLayer").updateUi(e, t)
						})
					}
				}, t.prototype.createSunWindow = function() {
					if (14 == window.FileData.getFileData("guideStep") && window.Game.setNewHelperShow(!1), !this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var e = this;
						window.NetHelper.sendGetInviteInfoRequest(window.Constant.shareIdList.SUNNY_DAY, function(t) {
							e.setPanel(!0), cc.loader.loadRes("prefabs/index/sunWindow", function(i, o) {
								if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/sunWindow", i), void e.createSunWindow();
									window.IndexScene.addHttpData(window.Constant.shareIdList.SUNNY_DAY, t.inviteeOpenIdList);
									var n = cc.instantiate(o);
									window.IndexScene.node.getChildByName("panel2").addChild(n), n.getComponent("SunWindow").updateUi(t), window.IndexScene._IndexHelper.isClickSun = !0, 14 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(15), window.Game.updateNewHelper())
								}
							})
						})
					}
				}, t.prototype.createYqylWindow = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var e = this;
						window.NetHelper.sendGetInviteInfoRequest(window.Constant.shareIdList.NEW_USER, function(t) {
							e.setPanel(!0), cc.loader.loadRes("prefabs/index/yqyl_window", function(i, o) {
								if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/yqyl_window", i), void e.createYqylWindow();
									var n = cc.instantiate(o);
									window.IndexScene.node.getChildByName("panel2").addChild(n), n.getChildByName("bgSprite").getChildByName("ScrollView").getComponent("YqylScrollLayer").initUI(t.inviteeOpenIdList)
								}
							})
						})
					}
				}, t.prototype.createActivityWindow = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var e = this;
						e.setPanel(!0), cc.loader.loadRes("prefabs/index/activity_window", function(t, i) {
							if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
								if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/activity_window", t), void e.createActivityWindow();
								var o = cc.instantiate(i);
								window.IndexScene.node.getChildByName("panel2").addChild(o)
							}
						})
					}
				}, t.prototype.createCropAwardWindow = function(e, t) {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer() && !("number" == typeof window.FileData.getFileData("cropAwardFirst" + e) || e < 3)) {
						window.FileData.setFileData("cropAwardFirst" + e, 1);
						var i = this;
						i.setPanel(!0), cc.loader.loadRes("prefabs/index/createCropAward", function(o, n) {
							if (i.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
								if (o) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/createCropAward", o), void i.createCropAwardWindow(e, t);
								var a = cc.instantiate(n);
								window.IndexScene.node.getChildByName("panel2").addChild(a), a.getComponent("CreateCropAwardLayer").updateUi(e, t)
							}
						})
					}
				}, t.prototype.createPackageWindow = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						for (var e = window.FileData.getFileData("package_count"), t = this, i = [], o = 0; o < e; o++) i.push(window.Constant.shareIdList[window.Constant.PackageToIdList[o + 1]]);
						window.NetHelper.sendGetInviteInfoListRequest(i, function(e) {
							t.setPanel(!0), cc.loader.loadRes("prefabs/index/packageWindow", function(i, o) {
								if (t.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/packageWindow", i), void t.createPackageWindow();
									var n = cc.instantiate(o);
									window.IndexScene.node.getChildByName("panel2").addChild(n), n.getComponent("PackageWindow").updateUi(e.list)
								}
							})
						})
					}
				}, t.prototype.createHelperWindow = function() {
					if (!this.getPanel() && !window.IndexScene.isNotShowLayer()) {
						var e = this;
						e.setPanel(!0), cc.loader.loadRes("prefabs/helperWindow", function(t, i) {
							if (e.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
								if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/helperWindow", t), void e.createHelperWindow();
								var o = cc.instantiate(i);
								window.IndexScene.node.getChildByName("panel2").addChild(o)
							}
						})
					}
				}, t.prototype.createRankWindow = function(e, t, i, o) {
					if (void 0 === e && (e = 1), void 0 === t && (t = 50), void 0 === i && (i = -1), void 0 === o && (o = 2), !this.getPanel() && !window.IndexScene.isNotShowLayer() || void 0 != this.m_rank_windowObj) {
						-1 == i && (i = window.Func.isHideWxUi() ? 1 : 2);
						var n = this;
						window.NetHelper.sendRankGetRequest(i, function(a) {
							if (void 0 != a.myRankInfo && (a.myRankInfo.type = i, a.myRankInfo.step = o), void 0 != a.rankList)
								for (var r = 0; r < a.rankList.length; r++) a.rankList[r].type = i, a.rankList[r].step = o;
							null != n.m_rank_windowObj ? 1 == e ? n.m_rank_windowObj.getComponent("RankLayer").createRank(a, i) : n.m_rank_windowObj.getComponent("RankLayer").addRank(a, e, t, i) : (n.setPanel(!0), cc.loader.loadRes("prefabs/friend/rank_window", function(r, s) {
								if (n.setPanel(!1), !window.IndexScene.isNotShowLayer()) {
									if (r) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/friend/rank_window", r), void n.createRankWindow(e, t, i, o);
									var d = cc.instantiate(s);
									window.IndexScene.node.getChildByName("panel2").addChild(d), d.getComponent("RankLayer").createRank(a), n.m_rank_windowObj = d
								}
							}))
						}, e, t, 3 == o ? 0 == window.WxLogin.city_code ? -1 : window.WxLogin.city_code : 0)
					}
				}, t.prototype.openAwardLayer = function(e) {
					var t = this,
						i = 0 == e.ifHave ? "getAward" : "getAward2";
					cc.loader.loadRes("prefabs/box/" + i, function(o, n) {
						if (o) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/box/" + i, o), void t.openAwardLayer(e);
						var a = cc.instantiate(n);
						window.IndexScene.node.getChildByName("panel2").addChild(a), a.getComponent("GetAwardLayer").init(e)
					})
				}, t.prototype.openAwardLayer3 = function(e) {
					if (void 0 != e && 0 != e.length)
						if (console.log("datadata", 1 == e.length && 4 != e[0].type), 1 != e.length || 4 == e[0].type) {
							var t = this;
							cc.loader.loadRes("prefabs/box/getAward3", function(i, o) {
								if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/box/getAward3", i), void t.openAwardLayer3(e);
								var n = cc.instantiate(o);
								window.IndexScene.node.getChildByName("panel2").addChild(n), n.getComponent("GetAwardLayer3").init(e)
							})
						} else window.Game.createGetGoodLayer(e[0])
				}, t.prototype.reloadRankData = function(e, t) {
					void 0 == e.name && (e.name = window.Data.startName), e.rank > 3 ? (t.getChildByName("rSprite").active = !1, t.getChildByName("rLabel").active = !0, t.getChildByName("rLabel").getComponent(cc.Label).string = "" + e.rank) : (window.Func._addSpritePic2(t.getChildByName("rSprite").getComponent(cc.Sprite), "texture/tps/rank", "icon1_" + e.rank, !1), t.getChildByName("rSprite").active = !0, t.getChildByName("rLabel").active = !1);
					var i = t.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite),
						o = t.getChildByName("wSprite1").getChildByName("Sprite").width;
					void 0 != e.avatar && "" != e.avatar ? window.Func._addProtoPic(e.avatar, i, o, o) : window.Func._addSpritePic2(i, "texture/tps/rank", "icon3_2", !1), t.getChildByName("nLabel").getComponent(cc.Label).string = e.name, t.getChildByName("bSprite1").getChildByName("Label").getComponent(cc.Label).string = "" + window.Func.moneyChange(e.score, 4), window.Func._addSpritePic2(t.getChildByName("bSprite1").getChildByName("zSprite").getComponent(cc.Sprite), "texture/tps/rank", "icon2_" + e.type, !1);
					var n = t.getChildByName("wSprite1").getChildByName("sexSprite");
					n && (e.gender && e.gender > 0 ? (n.active = !0, window.Func._addSpritePic2(n.getComponent(cc.Sprite), "texture/tps/rank", "icon4_" + e.gender, !1)) : n.active = !1);
					var a = t.getChildByName("ttLabel");
					a && (a.getComponent(cc.Label).string = e.title && "" != e.title ? e.title : "\u672aNh\u1eadn")
				}, t.prototype.windowMoveAction = function(e, t, i, o) {
					void 0 === t && (t = 1), void 0 === i && (i = null), void 0 === o && (o = !1);
					var n = e.getPosition(),
						a = cc.callFunc(function() {
							null != i && i()
						});
					1 == t ? (e.setPosition(cc.v2(n.x, cc.winSize.height + 100)), e.runAction(cc.sequence(cc.moveTo(.1, n.x, n.y), a)), void 0 != e.getParent().getChildByName("closeButton") ? (this.scheduleOnce(function() {
						window.WxFunc.openBannerAd()
					}, .1), window.Game2.setCloseBtPosToBanner(e.getParent().getChildByName("closeButton"))) : window.WxFunc.hideBannerAd(), window.IndexScene.setActivePanel2(!1)) : (e.runAction(cc.sequence(cc.moveTo(.1, n.x, n.y + cc.winSize.height), a)), window.IndexScene.isNotShowLayer2() || window.IndexScene.setActivePanel2(!0), window.WxFunc.hideBannerAd())
				}, t.prototype.getBgScale = function() {
					return cc.winSize.width / window.Data.width > cc.winSize.height / window.Data.height ? cc.winSize.width / window.Data.width : cc.winSize.height / window.Data.height
				}, t.prototype.showWaitingLayer = function() {
					if (null != this.waitObj && !this.waitObj.active) {
						this.waitObj.active = !0;
						for (var e = 0; e < this.waitObj.children.length; e++) this.waitObj.children[e].active = !1;
						this.scheduleOnce(function() {
							this.waitObj.active && window.WxFunc.showLoading()
						}, 2)
					}
				}, t.prototype.hideWaitingLayer = function() {
					null != this.waitObj && this.waitObj.active && (this.waitObj.active = !1, window.WxFunc.hideLoading())
				}, t.prototype.initCropBoxData = function(e) {
					void 0 === e && (e = 2);
					var t = window.FileData.getFileData("cropBox");
					this.CropLevelNumList = [];
					for (var i = window.JsonManager.farmTable, o = {}, n = 1; n < i.length; n++)
						for (var a in i[n])
							for (var r = parseInt(a), d = i[n][r].Id, c = this.getMaxCropKey(t[d]), l = 0; l < s.length; l++) {
								for (var p = !1, u = 0; u < s[l]; u++) {
									var h = 0 == l && window.Data.isNewAccount && 1 == window.JsonManager.newSendCropList[d] ? 1 : this.getCropBoxFileData(d, l, u);
									c > 0 && l < c && (h = 1), window.Config.isLooking && (0 == l && 0 == r && (h = 1), window.Data.isNewAccount && 0 == i[n][r].Check && (h = 0)), void 0 == o[d] && (o[d] = {}), void 0 == o[d][l] && (o[d][l] = {}), o[d][l][u] = h, 0 == h && (p = !0)
								}
								if (p) break
							}
					if (!(window.Func.getTableCount(o) > 0)) return window.NetHelper.sendClientErrorRequest("crop json L\u1ed7i" + e + "json:" + JSON.stringify(i) + "croplist:" + JSON.stringify(t)), this.scheduleOnce(function() {
						this.reGame()
					}, 1), void window.Game.showAlertBar("GameL\u1ed7i\uff0cĐang khởi động lại");
					window.FileData.setFileData("cropBox", o), this.resetCropBox(e), cc.log("Game2 - initCropBoxData" + JSON.stringify(o))
				}, t.prototype.getMaxCropKey = function(e) {
					var t = 0;
					if (e)
						for (var i in e)
							if (parseInt(i) > 0 && "object" == typeof e[i])
								for (var o in e[i]) 1 == e[i][o] && t < parseInt(i) && (t = parseInt(i));
					return t
				}, t.prototype.resetCropBox = function(e) {
					if ((void 0 === e && (e = 0), !window.Data.isNewAccount) && window.Game.getCropLevelNum(0, 0, !0) < 9) {
						var t = window.FileData.getFileData("cropBox"),
							i = cc.instantiate(window.FileData.getFileData("cropBox"));
						for (var o in t) {
							var n = this.getMaxCropKey(t[o]);
							for (var a in t[o])
								if ("object" == typeof t[o][a])
									for (var r in t[o][a]) t[o][a][r] = n > 0 && parseInt(a) < n ? 1 : t[o][a][r], 0 == t[o][a][r] && 0 == parseInt(a) && 1 == window.JsonManager.newSendCropList[parseInt(o)] && (t[o][a][r] = 1)
						}
						window.FileData.setFileData("cropBox", t), 3 == e && window.FileData.setRankFileData("history_max_crop", window.Game.getCropLevelNum(0, 0)), window.NetHelper.sendClientErrorRequest("L\u1ed7iSửa" + e + "oldcroplist:" + JSON.stringify(i) + "newcroplist:" + JSON.stringify(t)), console.log("L\u1ed7iSửa" + e + "oldcroplist:" + JSON.stringify(i) + "newcroplist:" + JSON.stringify(window.FileData.getFileData("cropBox")))
					}
				}, t.prototype.setCropBoxFileData = function(e, t, i, o) {
					var n = window.FileData.getFileData("cropBox");
					cc.log("setcropbidsvfsd " + e + " key:" + t + " key2:" + i + " val:" + o), "object" != typeof n && (n = {}), "object" != typeof n[e] && (n[e] = {}), "object" != typeof n[e][t] && (n[e][t] = {}), n[e][t][i] = o, window.Game.CropLevelNumList = [], window.FileData.setFileData("cropBox", n)
				}, t.prototype.getCropBoxFileData = function(e, t, i) {
					t = t.toString(), i = i.toString();
					var o = window.FileData.getFileData("cropBox"),
						n = 0;
					return "object" != typeof o ? n = 0 : "object" != typeof o[e] ? n = 0 : "object" != typeof o[e][t] ? n = 0 : "number" == typeof o[e][t][i] && (n = o[e][t][i]), n
				}, t.prototype.isCropOpen = function(e) {
					var t = window.FileData.getFileData("cropBox");
					if (0 == this.getMaxCropKey(t[e]))
						for (var i = 0; i < s[0]; i++)
							if (0 == this.getCropBoxFileData(e, 0, i)) return !1;
					return !0
				}, t.prototype.getCropScale = function(e) {
					for (var t = 0, i = 0; i < s.length; i++)
						for (var o = 0; o < s[i]; o++) 1 == this.getCropBoxFileData(e, i, o) && t < i && (t = i);
					var n = 0;
					for (o = 0; o < s[t]; o++) 1 == this.getCropBoxFileData(e, t, o) && n++;
					return n / s[t]
				}, t.prototype.getCropMaxLevel = function(e, t) {
					void 0 === t && (t = 1);
					for (var i = -1, o = 0; o < s.length; o++) {
						for (var n = 0, a = 0; a < s[o]; a++) 1 == this.getCropBoxFileData(e, o, a) && n++;
						n != s[o] && 2 != t || (i = o)
					}
					return i
				}, t.prototype.getCropSuiMaxLevel = function(e, t) {
					for (var i = this.getCropMaxLevel(e), o = -1, n = 0; n < s.length; n++) 1 == this.getCropBoxFileData(e, n, t) && (o = n), n == s.length - 1 && -1 == o && i >= 0 && (o = i);
					return o
				}, t.prototype.ifCropSameLevel = function(e) {
					for (var t = this.getCropMaxLevel(e), i = !0, o = [], n = 0; n < s.length; n++)
						for (var a = 0; a < s[n]; a++) void 0 == o[a] && (o[a] = n > 0 ? t : -1), 1 == this.getCropBoxFileData(e, n, a) && (o[a] = n);
					if (-1 == o[0]) i = !1;
					else
						for (a = 0; a < o.length; a++) o[a] != o[0] && (i = !1);
					return i
				}, t.prototype.getAllCropNum = function(e) {
					for (var t = 0, i = 1; i < window.JsonManager.farmTable.length; i++) 0 != e && i != e || (t += window.JsonManager.farmTable[i].length);
					return t
				}, t.prototype.getCropLevelNum = function(e, t, i) {
					if (void 0 === i && (i = !1), !i && this.CropLevelNumList[e] && this.CropLevelNumList[e][t]) return this.CropLevelNumList[e][t];
					var o = 0,
						n = window.FileData.getFileData("cropBox");
					void 0 == n && (this.initCropBoxData(), n = window.FileData.getFileData("cropBox"));
					for (var a = window.JsonManager.farmTable, r = 1; r < a.length; r++)
						for (var d = 0; d < a[r].length; d++) {
							var c = r.toString(),
								l = d.toString(),
								p = this.getMaxCropKey(n[a[c][l].Id]);
							if (0 == e || e == parseInt(c))
								for (var u = 0; u < s.length; u++)
									if (t == u) {
										for (var h = 0, w = 0; w < s[u]; w++) 1 == this.getCropBoxFileData(a[c][l].Id, u, w) && h++;
										(p > t || h == s[u]) && o++
									}
						}
					return this.CropLevelNumList[e] || (this.CropLevelNumList[e] = []), this.CropLevelNumList[e][t] = o, o
				}, t.prototype.ifCropBoxSameByLevel = function(e, t) {
					var i = !1,
						o = window.FileData.getFileData("cropBox");
					if (o[e]) {
						for (var n = 0, a = 0; a < s[t]; a++) o[e][t] && 1 == o[e][t][a] && n++;
						n == s[t] && (i = !0)
					}
					return i
				}, t.prototype.getCropBoxData = function(e) {
					void 0 === e && (e = 1);
					var t = [],
						i = window.FileData.getFileData("cropBox");
					for (var o in i)
						if (1 == window.JsonManager.getData("Crops", o).IsDraw)
							for (var n = 0; n < s.length; n++) {
								var a = this.getMaxCropKey(i[o]);
								if (n <= a || this.ifCropBoxSameByLevel(o, a) && n <= a + 1) {
									for (var r = !1, d = 0; d < s[n]; d++) {
										var c = 0;
										if (void 0 != i[o] && void 0 != i[o][n] && void 0 != i[o][n][d] && (c = i[o][n][d]), 1 == e || 3 == e && 0 == c || 2 == e && 1 == c) {
											var l = {
												farmId: parseInt(o),
												model: parseInt(n),
												pos: parseInt(d),
												ifHave: parseInt(c),
												key: parseInt(n),
												path: "c_" + o
											};
											t.push(l)
										}
										0 == c && (r = !0)
									}
									if (r) break
								}
							}
					return t
				}, t.prototype.randCropBoxData = function(e, t) {
					void 0 === e && (e = 1), void 0 === t && (t = 1);
					var i = this.getCropBoxData(e);
					3 == e && 0 == i.length && (i = this.getCropBoxData(2)), window.Func.shuffle(i);
					for (var o = [], n = 0; n < i.length && !(n >= t); n++) {
						var a = i[n];
						void 0 != a && 0 == a.ifHave && window.Game.setCropBoxFileData(a.farmId, a.model, a.pos, 1), o.push(a)
					}
					return cc.log("randCropBoxData  relist" + JSON.stringify(o)), o
				}, t.prototype.getShowCropByLayer = function(e) {
					for (var t = [], i = window.JsonManager.farmTable[e], o = 0; o < i.length; o++) {
						e = i[o].Id;
						var n = window.Game.getCropMaxLevel(e),
							a = window.FileData.getFileData("cropBox")[e],
							r = {
								farmId: e,
								path: "c_" + e,
								key: 0,
								nohave: this.isCropOpen(e) ? 0 : 1,
								coin: this.isCropOpen(e) ? window.Game.CROP_LEVEL_DOUBLE[n] * window.JsonManager.getData("Crops", e).Prod : 0,
								data: []
							};
						for (var s in a) {
							var d = parseInt(s);
							for (var c in r.key = d, a[d]) void 0 == r.data[c] && (r.data[c] = d > 0 ? d - 1 : -1), 1 == a[d][c] && (r.data[c] = d)
						}
						t.push(r)
					}
					var l = function(e, t) {
						return e.coin - t.coin
					};
					t = t.sort(l);
					l = function(e, t) {
						return e.nohave - t.nohave
					};
					t = t.sort(l);
					var p = [],
						u = [];
					for (o = 0; o < t.length; o++) u.push(t[o]), (o + 1) % 2 == 0 ? (p.push(u), u = []) : o === i.length - 1 && p.push(u);
					return p
				}, t.prototype.ShopBuy = function(e, t) {
					if (void 0 === t && (t = !0), 1 == e.model && window.Data.getGold() < e.coin) return t && window.Game.showAlertBar("Thi\u1ebfu v\u00e0ng"), !1;
					if (2 == e.model && window.Data.getSeed() < e.coin) return t && window.Game.showAlertBar("Thi\u1ebfu h\u1ea1t gi\u1ed1ng"), !1;
					if ((3 == e.model || 4 == e.model) && window.Data.getDiam() < e.coin) return t && window.Game.showAlertBar("Thi\u1ebfu kim c\u01b0\u01a1ng"), !1;
					1 == e.model ? window.Data.subGoldNum(e.coin) : 2 == e.model ? window.Data.subSeedNum(e.coin) : 3 != e.model && 4 != e.model || window.Data.subDiamNum(e.coin), window.Game.reloadGoldLabel();
					var i = window.Constant.getToolKey(e.model, e.type, e.id);
					return window.FarmManager.setToolFileData(i, e.lv), 2 == e.model && 1 == e.type ? window.FarmManager.upLevelCrop(e.id) : 3 == e.model ? 2 == e.type && window.FarmManager.getAddTimeCrop(3600 * e.typenum, (new Date).getTime(), !1, !1, !0) : e.model, t && window.Game.showAlertBar("Đã mua!"), !0
				}, t.prototype.getCropBoxList = function(e) {
					var t = [],
						i = [];
					if (0 == e)
						for (var o = 1; o < window.JsonManager.farmTable.length; o++)
							for (var n = 0; n < window.JsonManager.farmTable[o].length; n++) i.push(window.JsonManager.farmTable[o][n]);
					else i = window.JsonManager.farmTable[e];
					if (window.Config.isLooking) {
						var a = [];
						for (o = 0; o < i.length; o++)(!window.Config.isLooking || window.Config.isLooking && 1 == i[o].Check) && a.push(i[o]);
						i = a
					}
					for (o = 0; o < i.length; o++) {
						var r = i[o].Id,
							s = (window.FileData.getFileData("cropBox")[r], {
								farmId: r,
								path: "c_" + r
							});
						t.push(s)
					}
					var d = [],
						c = [];
					for (o = 0; o < t.length; o++) c.push(t[o]), (o + 1) % 4 == 0 ? (d.push(c), c = []) : o === i.length - 1 && d.push(c);
					return d
				}, t.prototype.ScaleBgToScreen = function(e) {
					null != e.getChildByName("bg") && (e.getChildByName("bg").scale = window.Game.getBgScale())
				}, t.prototype.BtChangeEnabled = function(e, t, i, o) {
					void 0 === t && (t = !1), void 0 === i && (i = 1), void 0 === o && (o = !0);
					var n = "bt_5";
					t && (n = 3 == i ? "bt_3" : 2 == i ? "bt_4" : "bt_7"), window.Func._addSpritePic2(e.getComponent(cc.Sprite), "texture/tps/common", n, !1);
					var a = cc.color(85, 187, 34, 255);
					t ? 2 == i ? a = cc.color(179, 103, 0, 255) : 3 == i && (a = cc.color(153, 0, 0, 255)) : a = cc.color(94, 94, 94, 255), e.getChildByName("Label").getComponent(cc.LabelOutline).color = a, o && (e.getComponent(cc.Button).enabled = t)
				}, __decorate([r(cc.Label)], t.prototype, "goldLabelList", void 0), __decorate([r(cc.Label)], t.prototype, "goldLabelList2", void 0), t = __decorate([a], t)
			}(cc.Component);
		i.Game = c, cc._RF.pop()
	}, {}],
	GetAwardLayer3: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "11328ri83FDhZvJSo6XlQcJ", "GetAwardLayer3"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.getPanelList = [], t.getPanelMiddle = null, t.dataList = [], t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e) {
					this.dataList = e, this.reloadLayer3(), this.node.getChildByName("actionSprite").scale = .1, this.node.getChildByName("actionSprite").runAction(cc.scaleTo(.1, 2, 2)), this.scheduleOnce(function() {
						this.node.getChildByName("actionSprite").runAction(cc.repeatForever(cc.rotateBy(7, 360)))
					}, .1), this.node.getChildByName("middle_panel").scale = .1, this.node.getChildByName("middle_panel").runAction(cc.scaleTo(.1, 1, 1));
					this.node.getChildByName("Button").active = !1, this.node.getChildByName("tSprite").runAction(cc.sequence(cc.scaleTo(0, .3, 1), cc.scaleTo(.1, 1.2, 1), cc.scaleTo(.1, 1, 1), cc.callFunc(function() {}))), this.scheduleOnce(function() {
						window.WxFunc.openBannerAd()
					}, .2), window.Game2.setCloseBtPosToBanner(this.node.getChildByName("closeButton"))
				}, t.prototype.reloadLayer3 = function() {
					if (this.dataList.length > 4) {
						for (var e = [], t = 0; t < this.dataList.length; t++) t >= 4 && e.push(this.dataList[t]);
						this.scheduleOnce(function() {
							this.dataList = e, this.reloadLayer3()
						}, 1)
					}
					window.Game2.setGoodPanelUi(this.getPanelMiddle, this.getPanelList, this.dataList)
				}, t.prototype.BtClose = function() {
					void 0 != this.node.getChildByName("Button") && this.node.getChildByName("Button").runAction(cc.fadeOut(.1)), void 0 != this.node.getChildByName("cLabel") && this.node.getChildByName("cLabel").runAction(cc.fadeOut(.1)), void 0 != this.node.getChildByName("tSprite") && this.node.getChildByName("tSprite").runAction(cc.fadeOut(.2)), this.node.getChildByName("middle_panel").runAction(cc.sequence(cc.scaleTo(.1, 1.5, 1.5), cc.scaleTo(.1, 0, 0))), window.WxFunc.hideBannerAd(), this.scheduleOnce(function() {
						this.node.removeFromParent(!0)
					}, .3)
				}, __decorate([a(cc.Node)], t.prototype, "getPanelList", void 0), __decorate([a(cc.Node)], t.prototype, "getPanelMiddle", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.GetAwardLayer3 = r, cc._RF.pop()
	}, {}],
	GetAwardLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "57a81T4xM5DU4j52khvuYN3", "GetAwardLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mbSprite = null, t.mbSprite3 = null, t.dataList = [], t.samekeyNum = 0, t.lastSamekey = -2, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e) {
					this.dataList = e, this.dataList = [];
					for (var t = 0; t < 3; t++) this.dataList.push([]);
					e.layer = 0 == e.ifHave ? "get" : "get2", this.node.getChildByName("middle_panel").getComponent("PieceUiLayer").reloadUi(e), this.scheduleOnce(function() {
						window.WxFunc.openBannerAd()
					}, .2), window.Game2.setCloseBtPosToBanner(this.node.getChildByName("closeButton"))
				}, t.prototype.BtClose = function() {
					void 0 != this.node.getChildByName("cLabel") && this.node.getChildByName("cLabel").runAction(cc.fadeOut(.1)), void 0 != this.node.getChildByName("tSprite") && this.node.getChildByName("tSprite").runAction(cc.fadeOut(.2)), "get" != this.dataList.layer && "get2" != this.dataList.layer || this.node.getChildByName("middle_panel").runAction(cc.sequence(cc.scaleTo(.1, 1.5, 1.5), cc.scaleTo(.1, 0, 0))), window.WxFunc.hideBannerAd(), this.scheduleOnce(function() {
						this.node.removeFromParent(!0)
					}, .3)
				}, __decorate([a(cc.Node)], t.prototype, "mbSprite", void 0), __decorate([a(cc.Node)], t.prototype, "mbSprite3", void 0), __decorate([a(Number)], t.prototype, "samekeyNum", void 0), __decorate([a(Number)], t.prototype, "lastSamekey", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.GetAwardLayer = r, cc._RF.pop()
	}, {}],
	GetGoodLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "7f3da+yWFtGlqWDCSA/BcUj", "GetGoodLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mbSprite = null, t.contentLabel = null, t.adId = 5, t.m_list = [], t.mbCoin = 0, t.nowCoin = 0, t.addCoin = 0, t.double = 10, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e) {
					this.m_list = e, console.log("datadata ", JSON.stringify(e)), window.Func._addSpritePic2(this.mbSprite, "texture/tps/common", "sm_" + e.type, !1);
					var t = window.JsonManager.getData("Handbook", e.typeid),
						i = (void 0 != t && 4 == e.type ? t.Name : window.Constant.GoodAwardNameList[e.type] || "") + "+" + window.Func.moneyChange(e.num);
					this.contentLabel.string = i, 1 == this.m_list.step ? this.node.getChildByName("getButton2").getChildByName("Label").getComponent(cc.Label).string = window.JsonManager.getData("Advertisement", this.adId).ButtonDes : 2 == this.m_list.step && (this.node.getChildByName("getButton").getChildByName("Label").getComponent(cc.Label).string = "Th\u01b0\u1edfngX2", this.node.getChildByName("getButton2").getChildByName("Label").getComponent(cc.Label).string = "Th\u01b0\u1edfngX2"), this.double = 1 == this.m_list.step ? 10 : 2 == this.m_list.step ? 2 : 1, 1 != this.m_list.step && 2 != this.m_list.step || 1 == this.m_list.step && !window.Game2.ifEnoughPlayAd(this.adId) && !window.Game2.ifEnoughPlayShare(this.adId, window.Constant.shareIdList.MOUSEAWARD) ? (this.node.getChildByName("getButton2").active = !1, this.node.getChildByName("getButton").active = !1) : 1 == this.m_list.step && window.Game2.ifEnoughPlayAd(this.adId) || 2 == this.m_list.step && window.Game2.ifEnoughPlayAd2(this.adId) ? (this.node.getChildByName("getButton").active = !1, this.node.getChildByName("getButton2").active = !0) : (this.node.getChildByName("getButton").active = !0, this.node.getChildByName("getButton2").active = !1), this.runAction(), this.scheduleOnce(function() {
						window.WxFunc.openBannerAd()
					}, .2), window.Game2.setCloseBtPosToBanner(this.node.getChildByName("closeButton"))
				}, t.prototype.update = function() {
					window.IndexScene.curFrame % 2 == 0 && this.mbCoin > 0 && this.nowCoin != this.mbCoin && (this.nowCoin = Math.min(this.nowCoin + this.addCoin, this.mbCoin), this.contentLabel.string = (window.Constant.GoodAwardNameList[this.m_list.type] || "") + "+" + window.Func.moneyChange(this.nowCoin))
				}, t.prototype.runAction = function() {
					this.node.getChildByName("panel").scale = 0, this.node.getChildByName("actionSprite").scale = 0, this.node.getChildByName("tSprite").scale = .6, this.node.getChildByName("tSprite").opacity = 100, this.node.getChildByName("tSprite").runAction(cc.sequence(cc.spawn(cc.scaleTo(.1, 1.5, 1.5), cc.fadeTo(.1, 180), cc.moveBy(.05, 0, 30)), cc.spawn(cc.scaleTo(.1, 1, 1), cc.fadeTo(.1, 255), cc.moveBy(.05, 0, -30)))), this.node.getChildByName("panel").runAction(cc.sequence(cc.scaleTo(.15, 1.3, 1.3), cc.scaleTo(.1, 1, 1))), this.node.getChildByName("actionSprite").runAction(cc.sequence(cc.scaleTo(.15, 2.3, 2.3), cc.scaleTo(.1, 2, 2))), this.scheduleOnce(function() {
						this.node.getChildByName("actionSprite").runAction(cc.repeatForever(cc.rotateBy(6, 360)))
					}, .25)
				}, t.prototype.BtDouble = function() {
					if (1 == this.m_list.step || 2 == this.m_list.step) {
						var e = this,
							t = function() {
								e.nowCoin = e.m_list.num, e.mbCoin = e.m_list.num * e.double, e.addCoin = Math.floor((e.mbCoin - e.nowCoin) / 15), 0 == e.addCoin && (e.addCoin = Math.floor(e.mbCoin / 2)), console.log("self.mbCoinself.mbCoin", e.mbCoin, e.addCoin, window.Constant.GoodAwardNameList[e.m_list.type]);
								var t = [];
								e.m_list.num = e.m_list.num * (e.double - 1), t.push(e.m_list), window.Data.setGoodAward(t), window.Game.reloadGoldLabel(), window.FarmManager.reloadAllUpUi(), e.node.getChildByName("getButton").active = !1, e.node.getChildByName("getButton2").active = !1
							};
						window.Game2.ifEnoughPlayAd(this.adId) ? window.WxFunc.OpenAd(this.adId, function() {
							t()
						}) : window.Game2.ifEnoughPlayShare(this.adId, window.Constant.shareIdList.MOUSEAWARD) && window.WxFunc.createShare(window.Constant.shareIdList.MOUSEAWARD, function() {
							t()
						})
					}
				}, t.prototype.BtClose = function() {
					window.WxFunc.hideBannerAd(), this.node.removeFromParent(!0)
				}, __decorate([a(cc.Sprite)], t.prototype, "mbSprite", void 0), __decorate([a(cc.Label)], t.prototype, "contentLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.GetGoodLayer = r, cc._RF.pop()
	}, {}],
	Global: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9776cTtbxtOaK0DXkVaPe/c", "Global"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("./../common/Game"),
			n = e("./../common/Game2"),
			a = e("./../common/Func"),
			r = e("./../common/TestData"),
			s = e("./../common/JsonManager"),
			d = e("./../common/PointConvertUtil"),
			c = e("./../battle/FarmManager"),
			l = e("./../base/FileData"),
			p = e("./../base/FileHelper"),
			u = e("./../net/NetHelper"),
			h = e("./../net/NetManager"),
			w = e("./../wx/WxFunc"),
			m = e("./../wx/WxLogin"),
			g = e("./../zhuoqu/ZqLogin"),
			f = e("./../yxh/YxhLogin");
		var y = function() {
			function e() {}
			return e.prototype.reload1 = function() {
				window.JsonManager = new s.JsonManager, window.JsonManager.start(), window.Func = new a.Func, this.reload2(), window.TestData = new r.TestData, window.FileData || (window.FileData = new l.FileData), window.FileHelper || (window.FileHelper = new p.FileHelper), window.PointConvertUtil || (window.PointConvertUtil = new d.PointConvertUtil), window.NetHelper = new u.NetHelper, window.NetManager = new h.NetManager, window.NetManager.init(), window.WxFunc = new w.WxFunc, window.WxFunc.init(), window.WxLogin = new m.WxLogin, window.ZqLogin = new g.ZqLogin, window.ZqLogin.init(), window.YxhLogin = new f.YxhLogin, window.YxhLogin.init()
			}, e.prototype.reload2 = function() {
				window.Game = new o.Game, window.Game2 = new n.Game2, window.FarmManager = new c.FarmManager
			}, e
		}();
		i.Global = y, window.Global = new y, cc._RF.pop()
	}, {
		"./../base/FileData": "FileData",
		"./../base/FileHelper": "FileHelper",
		"./../battle/FarmManager": "FarmManager",
		"./../common/Func": "Func",
		"./../common/Game": "Game",
		"./../common/Game2": "Game2",
		"./../common/JsonManager": "JsonManager",
		"./../common/PointConvertUtil": "PointConvertUtil",
		"./../common/TestData": "TestData",
		"./../net/NetHelper": "NetHelper",
		"./../net/NetManager": "NetManager",
		"./../sdk/ald/ald-game.js": void 0,
		"./../wx/WxFunc": "WxFunc",
		"./../wx/WxLogin": "WxLogin",
		"./../yxh/YxhLogin": "YxhLogin",
		"./../zhuoqu/ZqLogin": "ZqLogin"
	}],
	GoldHelperScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "fe8f0Z1IPVHHqQPH1U+omvf", "GoldHelperScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t.owner = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t) {
					this.owner = t, this.dataList = e, this.initCellDataList(e), this.createCellList(null, 15)
				}, t.prototype.updateView = function(e, t, i) {
					i.active = void 0 != t, void 0 != t && (i.getChildByName("rLabel").getComponent(cc.Label).string = t.key, i.getChildByName("nLabel").getComponent(cc.Label).string = t.num + "s\u1ed1 0")
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	GoldHelperWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9d136dV1q1CXZL74O+9SXGZ", "GoldHelperWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ScrollViewNode = null, t.m_list = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					e = [];
					for (var t = 0; t < window.Constant.CoinUnit.length; t++) "" != window.Constant.CoinUnit[t] && e.push({
						key: window.Constant.CoinUnit[t],
						num: 3 * t
					});
					this.m_list = e, this.ScrollViewNode.getComponent("GoldHelperScrollLayer").initUI(e, this)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "ScrollViewNode", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.GoldHelperWindow = r, cc._RF.pop()
	}, {}],
	HelperWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "902d0m5KStIKaPp3ryltFK6", "HelperWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0);
					var e = window.FileData.getFileData("openHelperTimes");
					"number" != typeof e && (e = 0), window.FileData.setFileData("openHelperTimes", e + 1)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, t = __decorate([n], t)
			}(cc.Component));
		i.HelperWindow = a, cc._RF.pop()
	}, {}],
	IndexHelper: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "71d08rDwFZOfqkuyuEskoSd", "IndexHelper"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.owner = null, t.isClickUpLevel = !1, t.isClickTool = !1, t.isClickSun = !1, t.isShowTitle = !1, t.isUpGuide = !1, t.LastCollectFrame = 0, t.LastCollectFrame2 = 0, t.szSpriteList = [], t.TopNoticeList = [], t.NowTopNoticeId = 0, t.TopNoticeMoving = !1, t.MaxTopNoticeId = 0, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.clear = function() {
					this.unscheduleAllCallbacks()
				}, t.prototype.init = function(e) {
					(this.owner = e, this.TopNoticeList = [], this.reloadSceneUi(), this.reloadSetWindow(), this.reloadNotice(), this.reloadDCRUi(), this.owner.node.getChildByName("set_panel").active = !1, this.szSpriteList[0] = this.owner.node.getChildByName("panel").getChildByName("farm_panel").getChildByName("szSprite"), this.szSpriteList[1] = this.owner.AwardBtObj.getChildByName("szSprite"), this.szSpriteList[0].active = !1, this.szSpriteList[1].active = !1, window.Func.isLiuHaiScreen()) && (this.owner.node.getChildByName("panel_notice").getComponent(cc.Widget).top += 60);
					(!window.Data.AdGameList || 0 == window.Data.AdGameList.length || window.Config.isLooking || window.Func.isHideWxUi()) && (this.owner.node.getChildByName("bt_panel1").getChildByName("Button7").active = !1), this.owner.node.getChildByName("bt_panel3").getChildByName("Button12") && (this.owner.node.getChildByName("bt_panel3").getChildByName("Button12").active = 2 == window.Config.Step), this.schedule(function() {
						this.sendScareHeartList()
					}, 70), this.scheduleOnce(function() {
						this.sendScareHeartList()
					}, 2), window.WxLogin.isAuthor || window.WxFunc.setUserButton(3, !0);
					var t = window.FileData.getFileData("marketCrop");
					if (t && "number" == typeof t[1] || (t = window.Game2.randCropData()), this.owner.node.getChildByName("panel").getChildByName("Button3").active = !1, window.Func.isHideWxUi() && (this.owner.node.getChildByName("set_panel").getChildByName("Sprite").getChildByName("Button1").active = !1, this.owner.node.getChildByName("set_panel").getChildByName("Sprite").getChildByName("Button3").active = !1, this.owner.node.getChildByName("set_panel").getChildByName("Sprite").getChildByName("Button4").active = !1, window.Config.isLooking && (this.owner.node.getChildByName("bt_panel2").getChildByName("changeModel").getChildByName("Button1").active = !1, this.owner.node.getChildByName("bt_panel3").getChildByName("Button10").active = !1)), window.Func.isMobile() && (3 == window.Config.Step || 4 == window.Config.Step)) {
						if (this.owner.node.getChildByName("bt_panel3").getChildByName("Button10").active) {
							var i = this.owner.node.getChildByName("bt_panel3").getChildByName("Button10").getPosition();
							this.owner.node.getChildByName("bt_panel3").getChildByName("Button10").setPosition(i.x, i.y + 60)
						}
						this.owner.node.getChildByName("panel").getChildByName("openSnow").getComponent(cc.Widget).top = -530
					}
					this.owner.node.getChildByName("panel_helper1").active = !1
				}, t.prototype.getSzShowState = function(e) {
					if (void 0 === e && (e = ""), this.szSpriteList)
						for (var t = 0; t < 10; t++)
							if (this.szSpriteList[t] && this.szSpriteList[t].active) return !1;
					return !window.Game2.getAllTyRedPointstate(e)
				}, t.prototype.sendScareHeartList = function() {
					window.NetHelper.sendScareCrowHeartListRequest(function(e) {
						"number" == typeof e.heartNum && window.Game2.setShareResultFileData(window.Constant.shareIdList.DCR, e.heartNum)
					})
				}, t.prototype.mUpdate = function(e) {
					if (this.owner.curFrame > 0) {
						if (this.owner.curFrame % 20 == 0 && this.owner.curLayerCount >= this.owner.getNowChildrenCount() && this.owner.node.getChildByName("panel").active && !this.owner.isNotShowLayer2() && 1 == this.owner.mType && 1 == this.owner.Model && !this.owner.node.getChildByName("set_panel").active && (!window.Game.SelectCropObj || !window.Game.SelectCropObj.active)) {
							var t = window.FileData.getFileData("newAccount");
							if (13 == (i = window.FileData.getFileData("guideStep")) && window.FarmManager.isCreateCrop(4) && (window.IndexScene._IndexHelper.isClickSun ? (window.Game.setNewHelperSaveData(17), window.Game.setNewHelperShow(!1)) : (window.Game.setNewHelperSaveData(14), window.Game.updateNewHelper())), window.Game.getIsShowNewHelper() || t > 2 && !this.isClickUpLevel && i <= 3 && window.Data.getGold() >= 3 && (window.Game.setNewHelperSaveData(4), window.Game.updateNewHelper()), window.Game.getIsShowNewHelper() || t > 2 && i <= 7 && window.Data.getGold() >= 5 && !window.FarmManager.isCreateCrop(2) && (window.Game.setNewHelperSaveData(8), window.Game.updateNewHelper()), window.Game.getIsShowNewHelper() || t > 2 && !this.isClickTool && i <= 10 && window.Data.getGold() >= 20 && (window.Game.setNewHelperSaveData(11), window.Game.updateNewHelper()), !window.Game.getIsShowNewHelper()) {
								var i, o = window.FileData.getFileData("getNowSeedTimes");
								if (t > 1 && 0 == o && this.owner.carStoping && this.owner.carSpineObj.active) 0 == (i = window.Game.getNewHelperFileData2(2, 1)) && (window.Game.setNewHelperFileData2(2, 1, 1), window.Game.updateNewHelper(2, 1))
							}
							this.isShowTitle && (this.isShowTitle = !1, window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.reapFinishPanel))
						}
						if (!window.FarmManager.getFarmSZActionShow() && !window.Game2.getAllTyRedPointstate() && !window.Game.getNewHelperShow()) {
							if (window.Data.isNewAccount) {
								var n = this.szSpriteList[0];
								n && (this.owner.isNotShowLayer() || 1 != this.owner.mType || 1 != this.owner.Model ? this.resetSZFrame() : n.active || (this.LastCollectFrame += e, this.LastCollectFrame > 1 && (this.playSZAction(), this.LastCollectFrame = 0)))
							}
							this.playSZAction2(), this.szSpriteList[0].active || this.szSpriteList[1].active || 0 != window.IndexScene.getTaskValue() || (this.LastCollectFrame2 += e, this.LastCollectFrame2 > 1 && window.FarmManager.showNewSZGuide(e))
						}
						if (this.owner.curFrame % 30 == 0)
							if (2 == this.owner.Model && this.owner.getTaskValue() > 0) this.showHelperUi();
							else if (this.showHelperUi(!1), 1 == this.owner.Model) "number" != typeof window.FileData.getFileData("createfarm5") && this.showHelperUi(!0, 2)
					}
				}, t.prototype.resetSZFrame = function() {
					this.LastCollectFrame = 0, this.szSpriteList[0] && (this.szSpriteList[0].active = !1)
				}, t.prototype.resetSZFrame2 = function() {
					this.LastCollectFrame2 = 0
				}, t.prototype.playSZAction = function() {
					var e = this.szSpriteList[0];
					if (e && !e.active && !this.szSpriteList[1].active && !this.isUpGuide) {
						var t = window.Game.getNewHelperFileData2(3, 1);
						t < 10 && (window.Game.setNewHelperFileData2(3, 1, t + 1), e.active = !0, e.zIndex = 201, e.setPosition(-70, -200), e.stopAllActions(), e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, 200, 0), cc.delayTime(.1), cc.moveBy(0, -200, 0)))))
					}
				}, t.prototype.playSZAction2 = function() {
					var e = this.szSpriteList[1];
					if (!this.owner.AwardBtObj.active && e && (e.active = !1), e && this.owner.AwardBtObj.active && !e.active && !this.szSpriteList[0].active && !this.isUpGuide)
						if ("number" != typeof window.FileData.getFileData("createfarm9")) {
							var t = window.Game.getNewHelperFileData2(4, 1);
							window.Game.setNewHelperFileData2(4, 1, t + 1), e.rotation = 20, e.active = !0, e.stopAllActions(), e.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25, 0), cc.rotateBy(.5, 25, 0))))
						} else e.active = !1
				}, t.prototype.reloadDCRUi = function() {
					try {
						var e = window.Game2.getShareResultFileData(window.Constant.shareIdList.DCR),
							t = window.FileData.getFileData("nowSceneId");
						"number" != typeof t && (t = 1);
						var i = window.JsonManager.getData("MoveLand", t);
						void 0 != i && (e = e >= 0 ? i.Add * (1 + e) : i.Add / (1 + Math.abs(e))), e = Math.floor(100 * e), this.owner.node.getChildByName("panel").getChildByName("Button1").getChildByName("Label").getComponent(cc.Label).string = "Buff hi\u1ec7n t\u1ea1i\nx" + (0 == e ? "0%" : e + "%")
					} catch (e) {
						cc.log("reloadDCRUi " + e)
					}
				}, t.prototype.reloadSceneUi = function() {
					var e = window.FileData.getFileData("nowShowSceneId");
					window.Func._addSpritePic4(this.owner.node.getChildByName("panel").getChildByName("car").getChildByName("spine").getComponent("sp.Skeleton"), "spine/scene/chuan/" + e + "/skeleton"), window.Func._addSpritePic2(this.owner.node.getChildByName("panel").getChildByName("Button2").getChildByName("Sprite2").getComponent(cc.Sprite), "texture/tps/index", "icon35_" + e), window.Func._addSpritePic(this.owner.node.getChildByName("panel").getChildByName("bg").getComponent(cc.Sprite), "texture/bg/scene/scene" + e + "_1")
				}, t.prototype.reloadSetWindow = function() {
					var e = this.owner.node.getChildByName("set_panel").getChildByName("Sprite");
					e.getChildByName("Label1").getComponent(cc.Label).string = "" != window.WxLogin.nickName ? window.WxLogin.nickName : "C\u1ee7a b\u1ea1nBi\u1ec7t danh", e.getChildByName("Label2").getComponent(cc.Label).string = "ID:" + window.Data.UId, "" != window.WxLogin.avatarUrl ? (e.getChildByName("wSprite1").getChildByName("Sprite").active = !0, window.Func._addProtoPic(window.WxLogin.avatarUrl, e.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite), 105, 105)) : e.getChildByName("wSprite1").getChildByName("Sprite").active = !1, e.setContentSize(e.width, cc.winSize.height), e.getChildByName("icon_set_9").setPosition(100, -cc.winSize.height / 2 + 52)
				}, t.prototype.openSetWindow = function(e) {
					console.log("openSetWindow", e, 1 == e);
					var t = this.owner.node.getChildByName("set_panel");
					t.getChildByName("Sprite").stopAllActions(), 1 == e ? (t.active = !0, window.WxLogin.isAuthor || window.WxFunc.setUserButton(2, !0), t.getChildByName("Sprite").setPosition(-300, 0), t.getChildByName("Sprite").runAction(cc.moveTo(.2, 0, 0))) : 2 == e ? (window.WxFunc.setUserButton(2, !1), t.getChildByName("Sprite").runAction(cc.sequence(cc.moveTo(.2, -300, 0), cc.callFunc(function() {
						t.active = !1
					})))) : 3 == e || (4 == e ? window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.gameset_window) : 5 == e ? window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.setqun_window) : 6 == e && window.Game.createHelperWindow())
				}, t.prototype.showHelperUi = function(e, t) {
					void 0 === e && (e = !0), void 0 === t && (t = 1);
					var i = this.owner.node.getChildByName("panel_helper1");
					if (i.active = e, e) {
						var o = "",
							n = 0,
							a = this.owner.getTaskValue(2);
						2 == t && (a.TaskType = 1e3, n = window.Data.getGold(), a.TaskValue2 = window.FarmManager.getFarmNextBaseUpCoin(), o = "B\u1ea5m v\u00e0o c\u00e2y tr\u1ed3ng \u0111\u1ec3 thu v\u00e0ng"), 3 == a.TaskType && (n = window.FarmManager.getCropLevel(a.TaskValue1), o = "B\u1ea5m ho\u1eb7c gi\u1eef \u00f4 \u0111\u1ea5t \u0111\u1ec3 n\u00e2ng c\u1ea5p"), i.getChildByName("Label1").getComponent(cc.Label).string = o, i.getChildByName("Label2").getComponent(cc.Label).string = window.Func.moneyChange(n) + "/" + window.Func.moneyChange(a.TaskValue2), i.getChildByName("Label2").color = n >= a.TaskValue2 ? cc.color(109, 255, 52) : cc.color(255, 52, 52), i.getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = Math.min(1, n / a.TaskValue2)
					}
				}, t.prototype.setNoticeData = function(e) {
					if (e && 0 != e.length) {
						for (var t = 0; t < e.length; t++) this.TopNoticeList.push(e[t]), t == e.length - 1 && (this.MaxTopNoticeId = e[t].id);
						this.reloadNotice()
					}
				}, t.prototype.reloadNotice = function() {
					if (!this.TopNoticeMoving) {
						var e = this.owner.node.getChildByName("panel_notice"),
							t = this.TopNoticeList[this.NowTopNoticeId];
						if (t) {
							e.active = !0;
							var i = t.text.split(";"),
								o = "<color=#ff4848>\u3010H\u1ec7 th\u1ed1ng\u3011</c>";
							1 == i[0] && (o += "Chúc mừng<color=#2bff3f>" + i[1] + "</c>Nh\u1eadn<color=#fcff00>" + i[2] + "</c>\u7684Danh hi\u1ec7u");
							var n = e.getChildByName("mask").getChildByName("RichText");
							n.getComponent(cc.RichText).string = o;
							var a = e.getChildByName("Sprite").width,
								r = n.width;
							n.setPosition(a / 2 + r / 2, 0), this.NowTopNoticeId += 1, this.TopNoticeMoving = !0;
							var s = this;
							n.stopAllActions(), n.runAction(cc.sequence(cc.moveTo(15, -(a / 2 + r / 2 + 50), 0), cc.callFunc(function() {
								s.TopNoticeMoving = !1, s.reloadNotice()
							}))), window.FileData.setFileData("TopNoticeId", t.id)
						} else e.active = !1
					}
				}, __decorate([a(cc.Node)], t.prototype, "szSpriteList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.IndexHelper = r, cc._RF.pop()
	}, {}],
	IndexScene: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "fb4ed//iPJLLbTbK1M5hKBt", "IndexScene"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("./../layer/index/RedPointMgr"),
			n = e("./../layer/index/IndexHelper"),
			a = cc._decorator,
			r = a.ccclass,
			s = a.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._RedPointMgr = null, t._IndexHelper = null, t.curFrame = 0, t.upLevelType = 1, t.Model = 1, t.mType = 1, t.bgObj = null, t.AwardBtObj = null, t.AwardSkeleton = null, t.nowTime = 0, t.getGoodSprite = null, t.getGoodNumLabel = null, t.SnowObj = null, t.SnowLabel = null, t.SnowMaxTime = 14400, t.SnowTimeNum = 0, t.carSpineObj = null, t.headBtObj = null, t.isClickCd = !1, t.videoAd = null, t.AwardList = {}, t.m_http_old_data = [], t.m_http_data = [], t.TimeFrame = .025, t.curTime = 0, t.curLayerCount = 0, t.gameStart = !1, t.countPanelChildren = 0, t.getSeedNumValue1 = 0, t.getSeedNumValue2 = 0, t.offLineTime = 0, t.maxOffLineTime = 43200, t.isStartPlane = !1, t.isMarketing = !1, t.isReStarting = !1, t.carStoping = !1, t.nowMarketSeed = 0, t.taskValue = 0, t.taskValue2 = [], t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					var e = this;
					cc.log("IndexScene - onload"), cc.game.on(cc.game.EVENT_HIDE, function() {
						console.log("GameVào nền"), window.FileData.setFileData("outGameTime", (new Date).getTime()), window.FileData.saveFileData(!0, !0, !0), e.node.active = !1, window.Func.releaseCollect()
					}, this), cc.game.on(cc.game.EVENT_SHOW, function() {
						console.log("làm lạiQuay l\u1ea1iGame"), window.Func.setGameStartTime(), e.node.active = !0, window.FarmManager.resetOffline_getAllCoin();
						var t = window.FileData.getFileData("outGameTime"),
							i = Math.floor(((new Date).getTime() - t) / 1e3);
						if ((i = Math.min(i, e.maxOffLineTime)) > 1800) return this.isReStarting = !0, void e.scheduleOnce(function() {
							window.Game.reGame()
						}, 1);
						if (e.setOffTime(i), e.nowTime = (new Date).getTime(), window.Data.resetOnline_getGold(), e.scheduleOnce(function() {
								window.FarmManager.getAddTimeCrop(i, t, !0), i > 600 && window.Game.createFarmCollectWindow()
							}, .5), null != window.WxFunc.isShareFunc) {
							var o = window.FileData.getFileData("lastShareTime");
							console.log("Xem QCThời gian quay lại", window.Func.getTimeUnix(), "lastsharetime:" + o), window.Func.getTimeUnix() - o > 2 ? window.WxFunc.isShareFunc() : window.Game.showAlertBar(1 == window.Config.Step ? "Xem QCTh\u1ea5t b\u1ea1i\uff0c Xem QC \u0111\u1ec3 nh\u1eadn th\u01b0\u1edfng!" : "Xem QCTh\u1ea5t b\u1ea1i"), window.WxFunc.isShareFunc = null
						}
						window.WxLogin.SetWxData()
					}, this)
				}, t.prototype.setOffTime = function(e) {
					this.offLineTime = e
				}, t.prototype.getOffTime = function() {
					return this.offLineTime
				}, t.prototype.clear = function() {
					this.unscheduleAllCallbacks(), this._RedPointMgr.clear(), this._IndexHelper.clear()
				}, t.prototype.start = function() {
					console.log("IndexScene start"), this.curTime = 0, this.TimeFrame = 1 / window.Constant.GameFrame, window.IndexScene = this, this.SetMType(1), window.Data.Status = 3, window.Func.setGameData(), window.WxLogin._onLoad(), window.Data.init(), this._RedPointMgr = new o.RedPointMgr, this._RedPointMgr.init(this), this._IndexHelper = new n.IndexHelper, this._IndexHelper.init(this), this.curLayerCount = this.node.children.length, this.isReStarting = !1, window.Func.isMobile() || 3 != window.Config.Step && 4 != window.Config.Step || (this.node.getComponent(cc.Canvas).fitWidth = !0, this.node.getComponent(cc.Canvas).fitHeight = !0), this.startLoad(), this.updateUi(), this.countPanelChildren = this.node.getChildByName("panel2").children.length, this.scheduleOnce(function() {
						window.Func.releaseCollect()
					}, 1);
					var e = this;
					this.scheduleOnce(function() {
						cc.loader.loadRes("sound/bg", cc.AudioClip, function(t, i) {
							if (!t) {
								var o = cc.audioEngine.playMusic(i, !0);
								cc.audioEngine.setVolume(o, 0), e.bgMusicId = o;
								var n = window.FileData.getFileData("musicSet");
								window.WxFunc.adClass.only1 && 2 != n ? cc.audioEngine.setVolume(o, .3) : cc.audioEngine.pause(e.bgMusicId)
							}
						})
					}, 1)
				}, t.prototype.updateUi = function() {
					this.node.getChildByName("panel3").getChildByName("noticeSprite").active = !1, this.node.getChildByName("bt_panel3").getChildByName("Button7").getChildByName("Label").getComponent(cc.Label).string = "Free\u9886" + window.JsonManager.getData("Variable", 13).Value + "Kim c\u01b0\u01a1ng", this.ifOpenFreeGetDiam(), this.reloadSceneMoveBt(), 1 == window.Config.Model && (this.node.getChildByName("panel4").active = !1)
				}, t.prototype.reloadSceneMoveBt = function() {
					this.node.getChildByName("bt_panel1").getChildByName("Button2").active = !0
				}, t.prototype.ifOpenFreeGetDiam = function() {
					var e = window.FileData.getFileData("freeGetdiamTimes");
					"number" != typeof e ? e = 1 : e++, !window.FarmManager.isCreateCrop(window.JsonManager.getData("Function", 3).Value) || e >= window.JsonManager.getData("Variable", 14).Value && !window.Game2.ifEnoughPlayAd(9) ? this.hideFreeDiamBt() : this.hideFreeDiamBt(!0)
				}, t.prototype.hideFreeDiamBt = function(e) {
					void 0 === e && (e = !1), e = !1, this.node.getChildByName("bt_panel3").getChildByName("Button7").active = e
				}, t.prototype.startLoad = function() {
					cc.log("reloadUi"), this.gameStart = !0, window.TestData.isCreateFarm && window.FarmManager.createFarm(), this.reloadData(), this.closeCreateFarmView(), 1 == window.Config.Model && (this.node.getChildByName("bt_panel1").getChildByName("Button1").active = !1), this.schedule(function() {
						window.FileData.saveFileData(), this.node.getChildByName("panel").active && window.Func.releaseCollect(), this._RedPointMgr.sendRedPointHttp()
					}, 60), this._RedPointMgr.sendRedPointHttp(), this.delayGetHttpData(), this.schedule(function() {
						this.delayGetHttpData()
					}, 120), this.reloadUi(), window.Game.init(), this.hideLookingLayer()
				}, t.prototype.hideLookingLayer = function() {
					window.Config.isLooking && (this.node.getChildByName("bt_panel3").getChildByName("Button4").active = !1, this.hideFreeDiamBt(), this.node.getChildByName("bt_panel3").getChildByName("Button9").active = !1, this.node.getChildByName("bt_panel3").getChildByName("Button11").active = !1)
				}, t.prototype.delayGetHttpData = function() {
					for (var e = this, t = window.FileData.getFileData("package_count"), i = [window.Constant.shareIdList.FAIR, window.Constant.shareIdList.SUNNY_DAY, window.Constant.shareIdList.DCR, window.Constant.shareIdList.NEWYEAR], o = 0; o < t; o++) i.push(window.Constant.shareIdList[window.Constant.PackageToIdList[o + 1]]);
					window.NetHelper.sendGetInviteInfoListRequest(i, function(t) {
						t = t.list, e.m_http_old_data = t;
						for (var i = 0; i < t.length; i++) {
							var o = t[i];
							e.addHttpData(o.inviteType, o.inviteeOpenIdList)
						}
					})
				}, t.prototype.addHttpData = function(e, t) {
					this.m_http_data[e] = t, e == window.Constant.shareIdList.SUNNY_DAY && this.reloadXiayuData(), window.Game2.reloadIndexShareReFunc(e, t)
				}, t.prototype.SetMType = function(e) {
					this.mType = e, 3 == e ? (this.isStartPlane = !0, this.playPlaneAction()) : 2 == e && window.FarmManager.AutoSGAction()
				}, t.prototype.playPlaneAction = function() {
					var e = this.node.getChildByName("panel").getChildByName("plane");
					e.active = !0, e.getChildByName("Sprite").getComponent(cc.Animation).play(), this.node.getChildByName("panel").getChildByName("Button6").active = !1, e.stopAllActions(), e.getChildByName("Label1").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.1, 1.2, 1.2), cc.scaleTo(.1, .9, .9)))), e.getChildByName("Label2").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.1, 1.2, 1.2), cc.scaleTo(.1, .9, .9)))), e.getChildByName("Label2").getComponent(cc.Label).string = window.Constant.PLANE_USE_TIME + "gi\u00e2y"
				}, t.prototype.closePlaneAction = function() {
					this.isStartPlane = !1, this.node.getChildByName("panel").getChildByName("plane").active = !1, this.node.getChildByName("panel").getChildByName("plane").stopAllActions(), this.node.getChildByName("panel").getChildByName("Button6").active = !0, 3 == this.mType && this.SetMType(1), window.FileData.setFileData("runPlaneTime", (new Date).getTime()), window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.planeCollect)
				}, t.prototype.onDestroy = function() {}, t.prototype.isNotShowLayer = function() {
					return 0 == this.curLayerCount && (this.curLayerCount = this.getNowChildrenCount()), !!(this.countPanelChildren < this.getPanelChildrenCount2() || this.curLayerCount < this.getNowChildrenCount() || window.Game.getNewHelperShow())
				}, t.prototype.getPanelChildrenCount2 = function() {
					for (var e = 0, t = 0; t < this.node.getChildByName("panel2").children.length; t++) this.node.getChildByName("panel2").children[t] && !0 === this.node.getChildByName("panel2").children[t].active && e++;
					return e
				}, t.prototype.isNotShowLayer2 = function() {
					return !!(this.countPanelChildren < this.getPanelChildrenCount2() || window.Game.getNewHelperShow())
				}, t.prototype.isNotShowLayer3 = function() {
					return this.curLayerCount < this.getNowChildrenCount()
				}, t.prototype.getNowChildrenCount = function() {
					var e = this.node.children.length;
					return null == window.Game.ToolScrollObj || window.Game.ToolScrollObj.active || (e -= 1), null == window.Game.cropBoxobj || window.Game.cropBoxobj.active || (e -= 1), e
				}, t.prototype.update = function(e) {
					if (!this.isReStarting) {
						if (this.curTime += e, this.curTime >= this.TimeFrame) {
							if (this.curFrame++, window.FarmManager.mUpdate(this.TimeFrame), this.curTime -= this.TimeFrame, this.curFrame > 2 * window.Constant.GameFrame && (this.curLayerCount > this.getNowChildrenCount() && (this.curLayerCount = this.getNowChildrenCount()), this.curLayerCount < this.getNowChildrenCount() ? this.setActivePanel(!1) : this.setActivePanel(!0), this.curFrame % 120 && window.FileData.setFileData("nowGameTime", (new Date).getTime())), 1 == this.Model && this.curFrame % 120 && !this.carSpineObj.active && window.Game2.OpenFunction(1)) {
								this.carSpineObj.active = !0, this.carStoping = !1;
								var t = window.Func.isLiuHaiScreen() ? -100 : 0;
								this.carSpineObj.position = cc.v2(-440, -176 + t), this.carSpineObj.stopAllActions(), this.carSpineObj.runAction(cc.moveTo(4, cc.v2(-146, -371 + t))), this.scheduleOnce(function() {
									this.carSpineObj.getChildByName("spine").getComponent("sp.Skeleton").setAnimation(0, "idle", !0), this.carStoping = !0
								}, 4)
							}
							if (window.Game.changeShowTopCoinUi(), this._RedPointMgr.mUpdate(), this._IndexHelper.mUpdate(this.TimeFrame), this.isStartPlane) {
								var i = window.FileData.getFileData("runPlaneTime"),
									o = window.Func.getTimeUnix() - Math.floor(i / 1e3);
								o >= window.Constant.PLANE_USE_TIME && this.closePlaneAction(), this.node.getChildByName("panel").getChildByName("plane").getChildByName("Label2").getComponent(cc.Label).string = Math.max(0, window.Constant.PLANE_USE_TIME - o) + "gi\u00e2y"
							}
							if (this.curFrame % window.Constant.GameFrame == 0) {
								var n = window.FileHelper.getData("gamestarttime"),
									a = window.FileData.getFileData("linetime");
								window.FileData.setFileData("linetime", a + (window.Func.getTimeUnix() - n)), window.Func.setGameStartTime()
							}
						}
						if (this.isNotShowLayer2() || this.setActivePanel2(!0), window.Game2.OpenFunction(2))
							if (this.curFrame % 60 == 0 && !this.AwardBtObj.active)((new Date).getTime() - this.nowTime) / 1e3 >= window.JsonManager.getData("Variable", 1).Value && this.changeAwardNode(!0);
						this.SnowTimeNum > 0 && this.curFrame % 60 && (this.SnowTimeNum = Math.max(0, this.SnowTimeNum - e), this.reloadSnowDownTime(), 0 == this.SnowTimeNum && this.reloadXiayuUi()), this.curFrame % 10 && window.Func._addSpritePic2(cc.find("Canvas/panel/openSnow").getChildByName("Sprite0").getComponent(cc.Sprite), "texture/tps/index", "icon22_" + (Math.floor(this.SnowTimeNum) % 2 == 0 ? 1 : 2))
					}
				}, t.prototype.setActivePanel = function(e) {
					if (e != this.node.getChildByName("panel").active) {
						this.node.getChildByName("panel").active = e, this.changeShowLevelUi(e);
						for (var t = 1; t < 5; t++) this.node.getChildByName("bt_panel" + t).active = e
					}
				}, t.prototype.setActivePanel2 = function(e) {
					this.node.getChildByName("panel").getChildByName("farm_panel").active = e
				}, t.prototype.resetAwardList = function() {}, t.prototype.reloadData = function() {
					this.resetAwardList()
				}, t.prototype.reloadXiayuData = function() {
					var e = window.FileData.getFileData("snowTime");
					if ("number" == typeof e) {
						var t = Math.floor(((new Date).getTime() - e) / 1e3),
							i = 0;
						void 0 != this.m_http_data[window.Constant.shareIdList.SUNNY_DAY] && this.m_http_data[window.Constant.shareIdList.SUNNY_DAY].length > 0 && (i = 3600 * window.Constant.getSunFriendAddTime * Math.min(5, this.m_http_data[window.Constant.shareIdList.SUNNY_DAY].length)), isNaN(t) || t > this.SnowMaxTime + i ? this.SnowTimeNum = 0 : this.SnowTimeNum = this.SnowMaxTime - t + i
					} else this.SnowTimeNum = 0;
					this.reloadXiayuUi()
				}, t.prototype.reloadXiayuUi = function() {
					if (this.SnowTimeNum > 0) {
						cc.find("Canvas/panel/openSnow/model2").active = !0, this.SnowObj.active = !1;
						for (var e = 1; e < window.FarmManager.farms.length; e++) {
							var t = window.FarmManager.farms[e];
							void 0 != t && t.isCreate() && 1 == this.Model && void 0 != window.FarmManager.sunLightEffectArr[e - 1] && (window.FarmManager.sunLightEffectArr[e - 1].active = !0, window.FarmManager.sunLightEffectArr[e - 1].getComponent(cc.Animation).play())
						}
					} else {
						cc.find("Canvas/panel/openSnow/model2").active = !1, this.SnowObj.active = !0;
						for (e = 1; e < window.FarmManager.sunLightEffectArr.length; e++) void 0 != window.FarmManager.sunLightEffectArr[e] && (window.FarmManager.sunLightEffectArr[e].active = !1, window.FarmManager.sunLightEffectArr[e].getComponent(cc.Animation).stop())
					}
				}, t.prototype.reloadUi = function() {
					var e = this.node.getComponent(cc.Canvas);
					window.Func.isIpadWidth() && (e.fitHeight = !0, e.fitWidth = !0), this.bgObj.scale = window.Game.getBgScale(), this.nowTime = (new Date).getTime(), this.changeAwardNode(!1), this.node.getChildByName("panel2").zIndex = 200, this.node.getChildByName("panel3").zIndex = 201, this.node.getChildByName("bg_panel").zIndex = 202, this.node.getChildByName("topCoin_panel").zIndex = 198, this.node.getChildByName("set_panel").zIndex = 199, window.Config.Step > 2 && (this.node.getChildByName("set_panel").getChildByName("Sprite").setContentSize(cc.size(297, cc.winSize.height)), this.node.getChildByName("set_panel").getChildByName("Sprite").getChildByName("icon_set_9").active = !1), this.createHeadBt(), this.reloadChangeModel(), this.BtReloadSelectLevel(), this.carSpineObj.active = !1, this.node.getChildByName("panel").getChildByName("plane").active = !1
				}, t.prototype.reloadChangeModel = function() {
					1 == this.Model ? (cc.find("Canvas/bt_panel2/changeModel").active = !0, cc.find("Canvas/bt_panel2/changeModel2").active = !1, this.setBtPanelShow(!0), 6 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(7), window.Game.updateNewHelper())) : (this._IndexHelper.resetSZFrame(), this.setBtPanelShow(!1), cc.find("Canvas/bt_panel2/changeModel").active = !1, cc.find("Canvas/bt_panel2/changeModel2").active = !0, this.node.getChildByName("bt_panel2").active = !0, this.changeShowLevelUi(!1), 4 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(5), window.Game.updateNewHelper()))
				}, t.prototype.setBtPanelShow = function(e) {
					for (var t = 1; t < 4; t++) this.node.getChildByName("bt_panel" + t).active = e;
					(e && window.Game2.OpenFunction(1) || !e) && (this.carSpineObj.active = e)
				}, t.prototype.changeShowLevelUi = function(e) {
					for (var t = 1; t < 5; t++) cc.find("Canvas/bt_panel2/changeModel2/Button2_" + t).active = e
				}, t.prototype.BtClickSelectLevel = function(e, t) {
					this.changeShowLevelUi(!1), window.FileData.setFileData("upleveltype", t), this.BtReloadSelectLevel()
				}, t.prototype.BtReloadSelectLevel = function() {
					var e = window.FileData.getFileData("upleveltype");
					"number" == typeof e || isNaN(e) || (e = 1), this.upLevelType = 2 == e ? 10 : 3 == e ? 25 : 4 == e ? 100 : 1, cc.find("Canvas/bt_panel2/changeModel2/Button1/Label").getComponent(cc.Label).string = "+" + (4 == e ? "Max" : this.upLevelType), window.FarmManager.reloadAllUpUi()
				}, t.prototype.BtShowChangeLevel = function() {
					var e = !0;
					cc.find("Canvas/bt_panel2/changeModel2/Button2_1").active && (e = !1), this.changeShowLevelUi(e)
				}, t.prototype.BtChangeModel = function(e, t, i) {
					void 0 === i && (i = []), window.FarmManager.isCreateCrop() ? (console.log("BtChangeModel", t, i), "number" == typeof t && t > 0 ? window.IndexScene.setTaskValue(t, i) : window.IndexScene.setTaskValue(0), this.Model = 2 == this.Model ? 1 : 2, window.FarmManager.changeFarmModel(), this.reloadChangeModel(), 2 == this.Model && (this._IndexHelper.isClickUpLevel = !0)) : window.Game.showAlertBar("H\u00e3yT\u1ea1omột ôRu\u1ed9ng")
				}, t.prototype.setTaskValue = function(e, t) {
					void 0 === t && (t = []), console.log("setTaskValue", e, t), this.taskValue = e, this.taskValue2 = 0 == e ? [] : t
				}, t.prototype.getTaskValue = function(e) {
					return void 0 === e && (e = 1), 1 == e ? this.taskValue : this.taskValue2
				}, t.prototype.BtCreateTool = function(e, t, i) {
					void 0 === i && (i = []), window.FarmManager.isCreateCrop() ? ("number" == typeof t && t > 0 ? window.IndexScene.setTaskValue(t, i) : window.IndexScene.setTaskValue(0), window.Game.createTool()) : window.Game.showAlertBar("H\u00e3yT\u1ea1omột ôRu\u1ed9ng")
				}, t.prototype.BtClickAward = function() {
					this.changeAwardNode(!1), this.nowTime = (new Date).getTime();
					var e = 1,
						t = 0,
						i = window.Func.randomNum(1, 1e3),
						o = window.JsonManager.getData("Variable", 2).Value.split(";");
					if (i > 100 * Math.floor(o[0])) {
						var n = window.JsonManager.getData("Variable", 4).Value.split(";");
						t = window.Func.randomNum(n[0], n[1]), e = 2
					} else t = Math.floor(window.Data.getNHourCropNum(window.JsonManager.getData("Variable", 3).Value));
					var a = [{
						type: e,
						num: t,
						step: 1
					}];
					window.Data.setGoodAward(a), window.Game.reloadGoldLabel(), window.FarmManager.reloadAllUpUi(), window.Game.createGetGoodLayer(a[0]);
					var r = window.FileHelper.getTaskFinishFileData(3, 7);
					window.FileHelper.setTaskFinishFileData(3, 7, r + 1)
				}, t.prototype.closeCreateFarmView = function() {}, t.prototype.changeAwardNode = function(e) {
					this.AwardBtObj.active != e && (e ? (this.AwardSkeleton.getComponent(sp.Skeleton).setAnimation(0, "in", !1), this.AwardSkeleton.getComponent(sp.Skeleton).addAnimation(0, "idle", !0), this.AwardBtObj.active = e) : (this.AwardSkeleton.getComponent(sp.Skeleton).setAnimation(0, "out", !1), this.scheduleOnce(function() {
						this.AwardBtObj.active = e
					}, .5)))
				}, t.prototype.BtCreatePlane = function() {
					window.Game.createPlane()
				}, t.prototype.BtCreateSceneMove = function() {
					window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.map_window)
				}, t.prototype.BtGetSeedByCar = function() {
					if (1 == window.Game.getNewHelperFileData2(2, 1) && (window.Game.setNewHelperFileData2(2, 1, 2), window.Game.setNewHelperShow(!1)), window.Game2.OpenFunction(1)) {
						this.getSeedNumValue1 = window.Data.getSeed();
						var e = window.FarmManager.farms[1]._FarmData;
						this.getSeedNumValue2 = e.getSeedDouble3(), window.Game.createGetSeedCar(), window.Game.setNewHelperFileData2(2, 1, 2), this.setNowMarketSeed()
					} else window.Game.showAlertBar("thứ " + window.JsonManager.getData("Function", 1).Value + "\u5757Ru\u1ed9ngTr\u1ed3ng\u5b8cM\u1edf")
				}, t.prototype.setNowMarketSeed = function() {
					this.nowMarketSeed = this.getCropHuiShouNum()
				}, t.prototype.getCropHuiShouNum = function() {
					var e = window.FileData.getFileData("getNowSeedTimes"),
						t = 10;
					t = "number" != typeof e || 0 == e ? window.Constant.SG_FIRST_VALUE : Math.max(window.Data.getSeedDelay(), window.Constant.SG_MIN_VALUE);
					var i = window.FileData.getFileData("marketCrop");
					i && "number" == typeof i[1] || (i = window.Game2.randCropData());
					for (var o = 0, n = 1; n < 10; n++) window.FarmManager.getBaseFarmId(n) == i[n] && 0 != i[n] && o++;
					return o > 0 && (t = Math.floor(t * (1 + o / 10))), t
				}, t.prototype.clearAllCrop = function(e) {
					if (void 0 === e && (e = !0), !this.isMarketing) {
						this.carStoping = !1, this.isMarketing = !0;
						var t = window.Func.isLiuHaiScreen() ? -100 : 0;
						this.carSpineObj.stopAllActions(), this.carSpineObj.getChildByName("spine").getComponent("sp.Skeleton").setAnimation(0, "move", !0), this.carSpineObj.runAction(cc.moveTo(2, cc.v2(405, -690 + t))), this.scheduleOnce(function() {
							this.carSpineObj.active = !1, window.Game2.createMarketEffect(e)
						}, 2), e && (window.FileData.setFileData("farm", "{}"), window.Data.setGold(0), window.FarmManager.clearToolFileData());
						var i = 0 != this.nowMarketSeed ? this.nowMarketSeed : this.getCropHuiShouNum();
						if (window.Data.addSeedNum(i), 2 == this.mType || 5 == this.mType) {
							window.FileData.setFileData("getSeedTime", (new Date).getTime());
							var o = window.FileData.getFileData("getNowSeedTimes"),
								n = window.FileData.getFileData("getSeedNum");
							"number" != typeof n && (n = 0), window.FileData.setFileData("getNowSeedTimes", o + 1), window.NetHelper.sendClearInviteRequest(1);
							var a = window.FileHelper.getTaskFinishFileData(2, 8);
							window.FileHelper.setTaskFinishFileData(2, 8, a + 1)
						}
						window.FileData.setFileData("getSeedNum", i), window.Data.setSeedDelay(0), window.Data.setTotalGold(0), 0 == o ? window.FileData.setFileData("FreeGetGoldId", 0) : (window.FileData.setFileData("FreeGetGoldId", 10), this._RedPointMgr.setShowFreeGetGold(!1)), this.nowMarketSeed = 0, window.Game2.randCropData(), window.FileData.saveFileData(!0, !0, !0), window.ArcadeSave && window.ArcadeSave.uploadNow && window.ArcadeSave.uploadNow(), this.changeAwardNode(!1)
					}
				}, t.prototype.SeedGetCrop = function(e) {
					void 0 === e && (e = !0), this.SetMType(1), e && window.FarmManager.createFarmData(), window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.marketNotice2_window), this.isMarketing = !1
				}, t.prototype.BtClearFileData = function() {
					cc.sys.platform === cc.sys.WECHAT_GAME ? wx.showModal({
						title: "Th\u00f4ng b\u00e1o",
						content: "Xóa chứ?Gamelưu",
						success: function(e) {
							e.confirm ? (console.log("UserCh\u1ea1mOK"), window.FileData.clear(), window.FarmManager.createFarmData(), window.Game.reGame()) : e.cancel && console.log("UserCh\u1ea1mH\u1ee7y")
						}
					}) : (window.FileData.clear(), window.Game.reGame())
				}, t.prototype.BtOpenXiayu = function() {
					window.Game.createSunWindow()
				}, t.prototype.reloadSnowDownTime = function() {
					if (this.SnowTimeNum > 0) {
						this.SnowLabel.string = window.Func.timestampToTime2(Math.floor(this.SnowTimeNum));
						var e = window.FileData.getFileData("snowDouble");
						"number" != typeof e && (e = 2), this.SnowLabel.node.getParent().getChildByName("Sprite2").getChildByName("Label").getComponent(cc.Label).string = "x" + e
					} else this.SnowObj.active && this.reloadXiayuData()
				}, t.prototype.ifSnowingCrop = function(e) {
					void 0 === e && (e = !1);
					var t = window.FileData.getFileData("snowDouble");
					return "number" != typeof t && (t = 2), e || this.SnowTimeNum > 0 ? t : 1
				}, t.prototype.BtClickCropBox = function() {
					window.Game.createCropBox()
				}, t.prototype.BtclickTopCoin = function(e, t) {
					cc.log("clickTopCoinBt " + t), 1 == (t = parseInt(t)) ? window.Game.createSeedNoticeWindow() : 4 == t && window.Game2.TyClickChange(e, window.Constant.TyWindowKeyList.goldHelper_window)
				}, t.prototype.BtClickFriend = function() {
					window.Game.createRankWindow()
				}, t.prototype.BtClickYqyl = function() {
					window.Game.createYqylWindow()
				}, t.prototype.BtClickActivity = function() {
					window.Game.createActivityWindow()
				}, t.prototype.BtClickGetDiam = function() {
					window.Game2.FreeGetDiam()
				}, t.prototype.BtClickPackage = function() {
					window.Game.createPackageWindow()
				}, t.prototype.BtClickRecorder = function() {
					2 == window.Config.Step && (window.WxFunc.playRecorder(), window.Func._addSpritePic2(this.node.getChildByName("bt_panel3").getChildByName("Button12").getChildByName("Sprite2").getComponent(cc.Sprite), "texture/tps/index", "icon50_" + (0 == window.WxFunc.recorderPlayState ? 1 : 2)))
				}, t.prototype.BtClickSet = function(e, t) {
					t = parseInt(t), this._IndexHelper.openSetWindow(t)
				}, t.prototype.showNoticeSprite = function(e) {
					var t = this.node.getChildByName("panel3").getChildByName("noticeSprite");
					if (!t.active) {
						var i = cc.v2(0, 200);
						t.stopAllActions(), window.Func._addSpritePic2(t.getChildByName("iSprite").getComponent(cc.Sprite), "texture/tps/crop_icon1", "c_" + e), t.active = !0, t.setPosition(cc.v2(i.x, 100)), t.runAction(cc.sequence(cc.moveTo(.3, i.x, i.y), cc.delayTime(1), cc.moveTo(1, i.x, i.y + 20), cc.moveTo(.2, i.x, i.y + cc.winSize.height / 2), cc.callFunc(function() {
							t.active = !1
						})))
					}
				}, t.prototype.BtAddCoin = function(e, t) {
					1 == t ? window.Data.addGoldNum(window.Func.moneyChange2("1mm"), !1, !1) : 2 == t ? window.Data.addDiamNum(1e5) : 3 == t && window.Data.addSeedNum(window.Func.moneyChange2("1ff"))
				}, t.prototype.createHeadBt = function() {
					cc.sys.platform, cc.sys.WECHAT_GAME
				}, t.prototype.changeUserConfig = function(e) {}, t.prototype.BtTyClick = function(e, t) {
					t = parseInt(t), window.Game2.TyClickChange(e, t), 2 != window.Data.loginModel || t != window.Constant.TyWindowKeyList.friendlist_window && t != window.Constant.TyWindowKeyList.scarecrow_window && t != window.Constant.TyWindowKeyList.mail_window ? t == window.Constant.TyWindowKeyList.friendlist_window && window.Data.isNewAccount && window.FileData.saveFileData() : window.YxhLogin.login(!0)
				}, t.prototype.BtClickHead = function() {
					cc.log("click BtClickHead"), cc.sys.platform, cc.sys.WECHAT_GAME
				}, __decorate([s(Number)], t.prototype, "curFrame", void 0), __decorate([s(Number)], t.prototype, "upLevelType", void 0), __decorate([s(Number)], t.prototype, "Model", void 0), __decorate([s(Number)], t.prototype, "mType", void 0), __decorate([s(cc.Node)], t.prototype, "bgObj", void 0), __decorate([s(cc.Node)], t.prototype, "AwardBtObj", void 0), __decorate([s(cc.Node)], t.prototype, "AwardSkeleton", void 0), __decorate([s(Number)], t.prototype, "nowTime", void 0), __decorate([s(cc.Node)], t.prototype, "getGoodSprite", void 0), __decorate([s(cc.Label)], t.prototype, "getGoodNumLabel", void 0), __decorate([s(cc.Node)], t.prototype, "SnowObj", void 0), __decorate([s(cc.Label)], t.prototype, "SnowLabel", void 0), __decorate([s(Number)], t.prototype, "SnowMaxTime", void 0), __decorate([s(cc.Node)], t.prototype, "carSpineObj", void 0), __decorate([s(cc.Node)], t.prototype, "headBtObj", void 0), t = __decorate([r], t)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"./../layer/index/IndexHelper": "IndexHelper",
		"./../layer/index/RedPointMgr": "RedPointMgr"
	}],
	JsonManager: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9b477hcGMFI76kG2/sYwyDa", "JsonManager"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.basePath = "/json/", t.farmTable = null, t.newSendCropList = null, t.GuideList = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					cc.log("JsonManager - start"), this.loadTable = ["Advertisement", "Crops", "DiamondShop", "DailyTask", "DailyTask", "FreeGold", "Function", "GoldShopCrops", "GoldShopProfit", "GoldShopTime", "GoldShopSeed", "Guide", "Handbook", "MoveLand", "MainTask", "NewYearGift", "OpenFarm", "SeedShopSeed", "SeedShopUpgrade", "SeedShopReduce", "SeedShopProfit", "Skin", "SevenDays", "SeedAddition", "SubTask", "SeedAcquire", "TreasureMap", "Turnplate", "Title", "Variable", "InviteFriend", "InviteContent", "InviteGift", "Error", "Rule"], this.datas = [], this.farmTable = []
				}, t.prototype.loadAllJson = function() {
					this.loadSuccessNum = 0;
					for (var e = 0; e < this.loadTable.length; e++) this.loadJson(this.loadTable[e], e);
					this.loadJson2()
				}, t.prototype.loadJson = function(e, t) {
					var i = this;
					cc.loader.loadRes(this.basePath + e, function(o, n) {
						if (null !== o) return console.log("T\u1ea3ijsonTh\u1ea5t b\u1ea1i" + e, JSON.stringify(o)), void i.loadJson(e, t);
						i.datas[e] = i.resetInt(n.json), i.datas[e] = i.moneyChange(e, i.datas[e]), i.otherLoadJson(e, n.json), console.log("T\u1ea3ijsonTh\u00e0nh c\u00f4ng" + e), i.loadSuccessNum++, i.loadSuccessNum == i.loadTable.length && window.GEventDispatch.emit(window.GBaseEvent.JsonLoded)
					})
				}, t.prototype.loadJson2 = function() {
					var e = this;
					cc.loader.loadRes("texture/tps/crop_icon2_json", function(t, i) {
						null === t ? (e.cropIconJson = i.json.frames, console.log("T\u1ea3ijsonTh\u00e0nh c\u00f4ngcrop_icon2")) : (console.log("T\u1ea3ijsonTh\u1ea5t b\u1ea1icrop_icon2"), e.loadJson2())
					})
				}, t.prototype.getCropIconData = function(e) {
					for (var t = 0; t < this.cropIconJson.length; t++)
						if (this.cropIconJson[t].filename == e + ".png") return this.cropIconJson[t];
					return []
				}, t.prototype.moneyChange = function(e, t) {
					if ("Crops" == e)
						for (var i in t)
							if ("object" == typeof t[i])
								for (var o in t[i]) "Prod" == o && (t[i][o] = window.Func.moneyChange2(t[i][o]));
					return t
				}, t.prototype.resetInt = function(e) {
					for (var t in e)
						if (window.Func.isNumber(e[t]) && (e[t] = window.Func.toNumber(e[t])), "object" == typeof e[t])
							for (var i in e[t]) e[t][i] = window.Func.toNumber(e[t][i]);
					return e
				}, t.prototype.otherLoadJson = function(e, t) {
					if ("Crops" == e) {
						this.farmTable = [];
						for (var i = 0; i < t.length; i++) {
							var o = t[i];
							o = this.resetInt(o);
							var n = parseInt(o.Belong);
							void 0 == this.farmTable[n] && (this.farmTable[n] = []), this.farmTable[n].push(o)
						}
					} else if ("GoldShopCrops" == e) {
						this.ProfitMultipleList = [];
						for (i = 0; i < t.length; i++) {
							o = t[i], n = parseInt(o.Id);
							void 0 == this.ProfitMultipleList[n] && (this.ProfitMultipleList[n] = []);
							for (var a = o.ProfitMultiple.split(";"), r = 0; r < a.length; r++)
								for (var s = 0; s < a[r].length; s++) this.ProfitMultipleList[n][r] = parseInt(a[r][s])
						}
					} else if ("SeedShopUpgrade" == e) {
						this.SeedShopUpgradeList = [];
						for (i = 0; i < t.length; i++) {
							o = t[i], n = parseInt(o.Land);
							var d = parseInt(o.LandLevel);
							void 0 == this.SeedShopUpgradeList[n] && (this.SeedShopUpgradeList[n] = []), this.SeedShopUpgradeList[n][d] = o
						}
					} else if ("Error" == e) {
						this.ErrorList = [];
						for (i = 0; i < t.length; i++) {
							o = t[i], n = parseInt(o.Id);
							this.ErrorList[n] = o
						}
					} else if ("InviteContent" == e) {
						this.ShareContentList = [];
						for (i = 0; i < t.length; i++) {
							o = t[i], n = parseInt(o.Id);
							this.ShareContentList[n] = o
						}
					} else if ("Guide" == e) {
						this.GuideList = [];
						for (i = 0; i < t.length; i++) {
							o = t[i];
							void 0 == this.GuideList[o.MainId] && (this.GuideList[o.MainId] = []), this.GuideList[o.MainId][o.SubId] = o
						}
					} else if ("OpenFarm" == e) {
						this.newSendCropList = [];
						for (i = 0; i < t.length; i++) {
							o = t[i];
							this.newSendCropList[o.InitialCrop] = 1
						}
					}
				}, t.prototype.getCropLNData1 = function(e, t) {
					this.ProfitMultipleList[e][t];
					var i = this.ProfitMultipleList[e].length;
					return t > i ? this.ProfitMultipleList[e][i - 1] : this.ProfitMultipleList[e][t - 1]
				}, t.prototype.getCropLNData2 = function(e, t) {
					for (var i = 1, o = 0; o < t; o++) i *= void 0 == this.ProfitMultipleList[e][o] ? this.ProfitMultipleList[e][this.ProfitMultipleList[e].length - 1] : this.ProfitMultipleList[e][o];
					return i
				}, t.prototype.getTable = function(e) {
					if (void 0 !== this.datas[e]) return this.datas[e]
				}, t.prototype.getData = function(e, t) {
					if (void 0 !== this.datas[e] && void 0 !== this.datas[e][t - 1]) return this.datas[e][t - 1]
				}, t.prototype.getData2 = function(e, t) {
					if (void 0 !== this.datas[e] && void 0 !== this.datas[e][t]) return this.datas[e][t]
				}, t.prototype.getGuideList = function(e, t) {
					return void 0 != this.GuideList[e] && void 0 != this.GuideList[e][t] ? this.GuideList[e][t] : null
				}, __decorate([a(String)], t.prototype, "basePath", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.JsonManager = r, cc._RF.pop()
	}, {}],
	LoadScene: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "cbda4YyiGhLL6ygmKczGbwd", "LoadScene"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ProgressBar = null, t.progress = 0, t.allLoadNum = 0, t.curLoadNum = 0, t.isNextScene = !1, t.yLoadPrefabsList = ["prefabs/shop/createTool", "prefabs/shop/ToolPrefabs", "prefabs/index/selectCrop_panel", "texture/tps/base"], t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					console.log("LoadScene onLoad")
				}, t.prototype.start = function() {
					console.log("LoadScene start"), window.Data.Status = 1, window.LoadScene = this, window.Global.reload1();
					for (var e = 1; e < window.Constant.CoinUnit.length; e++) "" != window.Constant.CoinUnit[e] && (window.Constant.CoinUnitKey[window.Constant.CoinUnit[e]] = e);
					if (cc.sys.platform === cc.sys.WECHAT_GAME && !window.Func.isHideWxUi() && cc.sys.localStorage.getItem("vesion2") !== window.Config.Version) {
						cc.sys.localStorage.setItem("vesion2", window.Config.Version);
						var t = cc.sys.localStorage.getItem("vesionTimes");
						"number" != typeof t && (t = 0), t > 5 && (window.wxDownloader.cleanAllAssets(), t = 0), cc.sys.localStorage.setItem("vesionTimes", t + 1)
					}
					this.loadUi(), this.ProgressBar.progress = 0, this.node.getChildByName("bgSprite").scale = window.Game.getBgScale(), this.node.getChildByName("bgSprite2").scale = window.Game.getBgScale(), window.Func._addSpritePic(this.node.getChildByName("bgSprite2").getComponent(cc.Sprite), "texture/bg/bg0"), this.node.getChildByName("bgSprite2").active = !0, window.Func.isHideWxUi() ? this.node.getChildByName("bgSprite").active = !1 : this.node.getChildByName("bgSprite").active = !0, window.Func.isMobile() || 3 != window.Config.Step && 4 != window.Config.Step || (this.node.getComponent(cc.Canvas).fitWidth = !0, this.node.getComponent(cc.Canvas).fitHeight = !0), window.WxFunc.sendPost(-1, !0)
				}, t.prototype.loadUi = function() {
					cc.Button.prototype._onTouchEnded = function(e) {
						window.Func._addAudioPic("sound/click"), this.interactable && this.enabledInHierarchy && (this._pressed && (cc.Component.EventHandler.emitEvents(this.clickEvents, e), this.node.emit("click", this)), this._pressed = !1, this._updateState(), e.stopPropagation())
					};
					var e = this;
					if (window.Func.init(), this.allLoadNum = 0, this.allLoadNum++, window.GEventDispatch.on(window.GBaseEvent.JsonLoded, function(e) {
							this.curLoadNum += 1
						}, this), window.JsonManager.loadAllJson(), this.allLoadNum++, window.GEventDispatch.on(window.GBaseEvent.HttpLogin, function(e) {
							this.curLoadNum += 1
						}, this), this.yLoadPrefabsList.length > 0)
						for (var t = 0; t < this.yLoadPrefabsList.length; t++) this.allLoadNum++, this.createLoadRes(this.yLoadPrefabsList[t]);
					this.allLoadNum++, cc.director.preloadScene("IndexScene", function() {
						e.curLoadNum++
					})
				}, t.prototype.createLoadRes = function(e) {
					var t = this;
					this.scheduleOnce(function() {
						cc.loader.loadRes(e, function(i, o) {
							if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:" + e, i), void t.createLoadRes(e);
							console.log("prefabT\u1ea3iTh\u00e0nh c\u00f4ng:" + e, t.curLoadNum), t.curLoadNum += 1
						})
					}, .01 * this.allLoadNum)
				}, t.prototype.update = function(e) {
					this.ProgressBar.progress = this.curLoadNum / this.allLoadNum, this.allLoadNum <= this.curLoadNum && this.nextScene()
				}, t.prototype.nextScene = function() {
					if (!(this.isNextScene || 1 == window.Data.loginModel && "" == window.Data.Token)) {
						if (this.isNextScene = !0, window.WxFunc.sendPost(0, !0), console.log("IndexScene scene preloaded"), 2 == window.Data.loginModel) try {
							window.NetHelper.ycxiufu(), window.NetHelper.resetCropBox()
						} catch (e) {
							console.log("ycxiufu BtLogin1 error 1")
						}
						cc.director.loadScene("IndexScene", function() {
							console.log("loadscene index success")
						})
					}
				}, __decorate([a(cc.ProgressBar)], t.prototype, "ProgressBar", void 0), __decorate([a(Number)], t.prototype, "allLoadNum", void 0), __decorate([a(Number)], t.prototype, "curLoadNum", void 0), __decorate([a(Boolean)], t.prototype, "isNextScene", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.LoadScene = r, cc._RF.pop()
	}, {}],
	LookScene: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f88e8/Dl69BoYN3k76pz4Rw", "LookScene"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.nLabel = null, t.cLabel = null, t.bgSprite = null, t.btClose = null, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e) {
					this.node.opacity = 0, this.node.runAction(cc.fadeIn(.5)), cc.log("LookSceneLookSceneLookSceneLookScene " + JSON.stringify(e)), this.nLabel.string = e.Name, this.cLabel.string = e.Content, this.bgSprite.scale = window.Game.getBgScale(), this.btClose.setPosition(-cc.winSize.width / 2 + this.btClose.width / 2, -500), window.Func._addSpritePic(this.bgSprite.getComponent(cc.Sprite), "texture/bg/scene/scene" + e.Id + "_1")
				}, t.prototype.BtClose = function() {
					this.node.runAction(cc.fadeOut(.5)), this.scheduleOnce(function() {
						this.node.removeFromParent(!0)
					}, 1)
				}, __decorate([a(cc.Label)], t.prototype, "nLabel", void 0), __decorate([a(cc.Label)], t.prototype, "cLabel", void 0), __decorate([a(cc.Node)], t.prototype, "bgSprite", void 0), __decorate([a(cc.Node)], t.prototype, "btClose", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.default = r, cc._RF.pop()
	}, {}],
	MailScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "786e41PtrBDAI5q7g9CJZZW", "MailScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t.owner = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t) {
					this.owner = t, this.dataList = e, this.initCellDataList(e), this.createCellList(null, 8)
				}, t.prototype.updateView = function(e, t, i) {
					i.getChildByName("nLabel").getComponent(cc.Label).string = t.title, i.getChildByName("rLabel").getComponent(cc.Label).string = window.Func.timestampToTime(t.cTime, !1);
					var o = cc.color(216, 128, 42),
						n = cc.color(216, 128, 42),
						a = "đã Xem",
						r = !1,
						s = 1;
					t.isRead || (a = "Xem", r = !0, s = 2, o = cc.color(15, 117, 222), n = cc.color(255, 255, 255)), i.getChildByName("nSprite").active = r, i.getChildByName("nLabel").getComponent(cc.LabelOutline).color = o, i.getChildByName("rLabel").color = n, i.getChildByName("lookButton").getChildByName("Label").getComponent(cc.Label).string = a, window.Func._addSpritePic2(i.getChildByName("bSprite").getComponent(cc.Sprite), "texture/tps/mail", "bg2_" + s, !1), window.Func._addSpritePic2(i.getChildByName("rSprite").getComponent(cc.Sprite), "texture/tps/mail", "icon2_" + s, !1);
					var d = i.getChildByName("lookButton").getComponent(cc.Button);
					if (0 == d.clickEvents.length) {
						var c = new cc.Component.EventHandler;
						c.target = this.node, c.component = "MailScrollLayer", c.handler = "BtLook", c.customEventData = "" + e, d.clickEvents.push(c)
					} else d.clickEvents[0].customEventData = "" + e
				}, t.prototype.BtLook = function(e, t) {
					this.owner.openLook(Math.floor(t), e.target.getParent())
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	MailWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "0a3dd+x8SdEoJ9YYQ5q8wPP", "MailWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_panel2 = null, t.ScrollViewNode = null, t.closeBtNode2 = null, t.emptyNode = null, t.getPanelList = [], t.peopleNum = 10, t.m_list = null, t.m_Id = -1, t.m_showDel = !1, t.m_lookNode = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					this.m_panel2.active = !1, this.m_list = e, this.ScrollViewNode.getComponent("MailScrollLayer").initUI(e, this), window.Game2.setCloseBtPosToBanner(this.closeBtNode2), this.emptyNode.active = 0 == e.length
				}, t.prototype.openLook = function(e, t) {
					this.m_Id = e, this.m_panel2.active = !0, this.m_lookNode = t;
					var i = this.m_list[e],
						o = this.m_panel2.getChildByName("Sprite");
					o.getChildByName("tLabel").getComponent(cc.Label).string = i.title, o.getChildByName("timeLabel").getComponent(cc.Label).string = window.Func.timestampToTime(i.cTime, !1), o.getChildByName("Label").getComponent(cc.Label).string = "T\u1eeb\uff1a" + i.from;
					var n = o.getChildByName("ScrollView").getChildByName("view").getChildByName("content"),
						a = n.getChildByName("RichText");
					a.getComponent(cc.RichText).string = "<color=#e08212>" + i.content + "</color>";
					var r = Math.ceil(a.height / 28);
					if (a.setPosition(a.getPosition().x, -14 * r), n.height = Math.max(a.height, 210), n.setPosition(n.getPosition().x, n.height / 2), o.getChildByName("ScrollView").getComponent(cc.ScrollView).scrollToTop(), window.Func._addSpritePic2(o.getChildByName("ySprite").getComponent(cc.Sprite), "texture/tps/mail", "icon2_" + (i.isRead ? 1 : 2), !1), i.Rewards.length > 0)
						for (var s = 0; s < i.Rewards.length; s++) console.log("data.Rewards[i].ItemNum", i.Rewards[s].ItemNum), i.Rewards[s].ItemNum = window.Func.moneyChange2(i.Rewards[s].ItemNum);
					var d = o.getChildByName("goodpanel"),
						c = window.Data.getGoodsListToHttp(i.Rewards, i.isTake);
					window.Game2.setGoodPanelUi(d, this.getPanelList, c, 0);
					var l = cc.color(34, 157, 3),
						p = 7,
						u = "Nh\u1eadn";
					i.isTake || 0 == i.Rewards.length ? (p = 3, l = cc.color(154, 32, 0), this.m_showDel = !0, u = "Xóa") : this.m_showDel = !1, window.Func._addSpritePic2(o.getChildByName("Button").getComponent(cc.Sprite), "texture/tps/common", "bt_" + p, !1), o.getChildByName("Button").getChildByName("Label").getComponent(cc.LabelOutline).color = l, o.getChildByName("Button").getChildByName("Label").getComponent(cc.Label).string = u, i.isRead || (window.NetHelper.sendMailReadRequest(i.id), this.m_list[this.m_Id].isRead = !0)
				}, t.prototype.BtOk = function() {
					var e = this.m_list[this.m_Id],
						t = this;
					this.m_showDel ? window.NetHelper.sendMailDelRequest(e.id, function() {
						t.m_list.splice(t.m_Id, 1), t.updateUi(t.m_list)
					}) : window.NetHelper.sendMailRewardRequest(e.id, function() {
						var i = window.Data.getGoodsListToHttp(e.Rewards, !0);
						window.Data.setGoodAward(i), window.Game.openAwardLayer3(i), t.m_list[t.m_Id].isTake = !0, t.m_showDel = !0, t.openLook(t.m_Id, t.m_lookNode), window.FileData.saveFileData()
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, t.prototype.BtClose2 = function() {
					this.m_panel2.active = !1, this.m_Id >= 0 && null != this.m_lookNode && (this.m_list[this.m_Id].isRead = !0, this.ScrollViewNode.getComponent("MailScrollLayer").updateView(this.m_Id, this.m_list[this.m_Id], this.m_lookNode))
				}, __decorate([a(cc.Node)], t.prototype, "m_panel2", void 0), __decorate([a(cc.Node)], t.prototype, "ScrollViewNode", void 0), __decorate([a(cc.Node)], t.prototype, "closeBtNode2", void 0), __decorate([a(cc.Node)], t.prototype, "emptyNode", void 0), __decorate([a(cc.Node)], t.prototype, "getPanelList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.MailWindow = r, cc._RF.pop()
	}, {}],
	MapWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "5cad34ExjZCDKbemTT7jZMB", "MapWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.contentObj = null, t.panelList = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					var t = window.FileData.getFileData("nowSceneId");
					"number" != typeof t && (t = 1);
					for (var i = window.FileData.getFileData("nowShowSceneId"), o = window.JsonManager.getTable("MoveLand"), n = 0; n < 7; n++) {
						this.panelList[n] = this.contentObj.getChildByName("panel").getChildByName("Node" + (n + 1));
						var a = o[n],
							r = a ? "ss_" + a.Id + "_" + (t >= a.Id ? 1 : 2) : "icon2";
						window.Func._addSpritePic2(this.panelList[n].getChildByName("Sprite1").getComponent(cc.Sprite), "texture/tps/map", r), this.panelList[n].getChildByName("icon1").getChildByName("Label").getComponent(cc.Label).string = a ? a.Name : "???", this.panelList[n].getChildByName("Sprite2").active = !!a && i == a.Id, this.panelList[n].getChildByName("Sprite3").active = !(!a || !window.IndexScene._RedPointMgr.getMoveSceneRed() || t != n);
						var s = this.panelList[n].addComponent(cc.Button);
						if (0 == s.clickEvents.length) {
							var d = new cc.Component.EventHandler;
							d.target = this.node, d.component = "MapWindow", d.handler = "BtOk1", d.customEventData = "" + n, s.clickEvents.push(d)
						} else s.clickEvents[0].customEventData = "" + n
					}
				}, t.prototype.reloadNowScene = function() {
					for (var e = window.FileData.getFileData("nowShowSceneId"), t = window.JsonManager.getTable("MoveLand"), i = 0; i < 7; i++) {
						var o = t[i];
						this.panelList[i].getChildByName("Sprite2").active = !!o && e == o.Id, this.panelList[i].getChildByName("Sprite3").active = !1
					}
				}, t.prototype.BtOk1 = function(e, t) {
					var i = parseInt(t);
					if (window.FileData.getFileData("nowShowSceneId") != i + 1 && window.JsonManager.getData("MoveLand", i + 1)) {
						var o = this;
						window.Game.CreateSceneMove(i, function(e) {
							void 0 === e && (e = !1), o.reloadNowScene(), e && o.BtClose()
						})
					}
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "contentObj", void 0), __decorate([a(cc.Node)], t.prototype, "panelList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.MapWindow = r, cc._RF.pop()
	}, {}],
	MarketLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "81ee3OHbrVO8LBJUAyDe4+x", "MarketLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hsLabel = null, t.djsLabel = null, t.coinLabel = null, t.baiLabel = null, t.friendNodeList = [], t.delaytime = 0, t.PanelList = [], t.panelCropObj = null, t.openHaveDiam = 0, t.Model = 1, t.m_data = [], t.adId = 6, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.update = function(e) {
					this.delaytime += e, this.delaytime >= 1 && (this.reloadDownTime(), this.delaytime = 0)
				}, t.prototype.reloadDownTime = function() {
					var e = 1,
						t = window.FileData.getFileData("getSeedTime");
					if ("number" == typeof t && t > 0) {
						var i = window.Game2.getCarSGTime(this.m_data),
							o = i[0],
							n = i[1],
							a = i[2];
						if (o) {
							var r = Math.ceil(3600 * a - n);
							this.djsLabel.string = window.Func.timestampToTime3(r), this.openHaveDiam = Math.ceil(r / 3600) * window.JsonManager.getData("Variable", 15).Value, this.coinLabel.string = "" + this.openHaveDiam, e = 2
						}
					}
					this.Model = e, 1 == e ? (this.PanelList[0].active = !0, this.PanelList[1].active = !1) : (this.PanelList[0].active = !1, this.PanelList[1].active = !0)
				}, t.prototype.updateUi = function(e) {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0);
					if (this.reloadDownTime(), 2 == this.Model) {
						for (var t = 0; t < this.friendNodeList.length; t++) this.friendNodeList[t].active = !1;
						if (void 0 != e && void 0 != e.inviteeOpenIdList) {
							this.m_data = e.inviteeOpenIdList;
							for (t = 0; t < this.friendNodeList.length; t++) {
								var i = e.inviteeOpenIdList[t];
								if (void 0 != i && (this.friendNodeList[t].active = !0, void 0 != i.avatar && "string" == typeof i.avatar && "" != i.avatar)) {
									var o = this.PanelList[1].getChildByName("wSprite" + (t + 1)).getChildByName("Sprite").getComponent(cc.Sprite);
									window.Func._addProtoPic(i.avatar, o)
								}
							}
						}
						this.PanelList[1].getChildByName("cButton").getChildByName("Label").getComponent(cc.Label).string = window.JsonManager.getData("Advertisement", this.adId).ButtonDes, window.Game2.ifEnoughPlayAd(this.adId) ? this.PanelList[1].getChildByName("iSprite").active = !1 : window.Game2.hideAdBtIcon(this.PanelList[1].getChildByName("cButton"))
					}
					this.reloadCropUi()
				}, t.prototype.reloadCoin = function() {
					var e = window.IndexScene.getCropHuiShouNum();
					this.hsLabel.string = "+" + window.Func.moneyChange(e)
				}, t.prototype.reloadCropUi = function() {
					var e = window.FileData.getFileData("marketCrop");
					e && "number" == typeof e[1] || (e = window.Game2.randCropData());
					for (var t = 0, i = 1; i < 10; i++) {
						var o = this.panelCropObj.getChildByName("Sprite" + i).getChildByName("Sprite").getComponent(cc.Sprite);
						o.node.scale = 1;
						var n = window.FarmManager.getBaseFarmId(i);
						window.Func._addSpritePic2(o, "texture/tps/crop_icon1", "c_" + e[i]), o.setState(n != e[i] ? 1 : 0), n == e[i] && t++
					}
					this.reloadCoin(), this.baiLabel.string = "+" + (0 == t ? "" : t) + "0%"
				}, t.prototype.BtReloadCrop = function() {
					window.Data.subDiamNum(10) && (window.Game2.randCropData(), this.reloadCropUi())
				}, t.prototype.BtFindFrieng = function() {
					window.WxFunc.createShare(window.Constant.shareIdList.FAIR)
				}, t.prototype.BtOk = function(e, t) {
					if (2 == parseInt(t)) {
						var i = this;
						if (window.Game2.ifEnoughPlayAd(this.adId)) {
							i = this;
							return void window.WxFunc.OpenAd(this.adId, function() {
								window.FileData.setFileData("getSeedTime", 0), i.reloadDownTime()
							})
						}
						return this.openHaveDiam > window.Data.getDiam() ? void window.Game.showAlertBar("Thi\u1ebfu kim c\u01b0\u01a1ng") : (window.Data.subDiamNum(this.openHaveDiam), window.FileData.setFileData("getSeedTime", 0), void i.reloadDownTime())
					}
					this.openCollect()
				}, t.prototype.BtHelper = function() {
					for (var e = window.JsonManager.getTable("Rule"), t = [], i = 0; i < e.length; i++) e[i].Id > 300 && e[i].Id < 400 && t.push(e[i]);
					window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.rule_window, t)
				}, t.prototype.openCollect = function() {
					window.IndexScene.scheduleOnce(function() {
						window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.marketNotice_window)
					}, .3), this.BtClose()
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					}), window.IndexScene.setNowMarketSeed()
				}, __decorate([a(cc.Label)], t.prototype, "hsLabel", void 0), __decorate([a(cc.Label)], t.prototype, "djsLabel", void 0), __decorate([a(cc.Label)], t.prototype, "coinLabel", void 0), __decorate([a(cc.Label)], t.prototype, "baiLabel", void 0), __decorate([a(cc.Node)], t.prototype, "friendNodeList", void 0), __decorate([a(Number)], t.prototype, "delaytime", void 0), __decorate([a(cc.Node)], t.prototype, "PanelList", void 0), __decorate([a(cc.Node)], t.prototype, "panelCropObj", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.MarketLayer = r, cc._RF.pop()
	}, {}],
	NetHelper: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "36687+tz2ROtJsS3FrH1XcP", "NetHelper"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lastSaveDataTime = 0, t.sendList = [], t
				}
				return __extends(t, e), t.prototype.init = function(e, t, i) {
					if (void 0 === i && (i = null), "" != t.err_code) return void 0 != window.JsonManager.ErrorList[parseInt(t.err_code)] ? window.Game.showAlertBar(window.JsonManager.ErrorList[parseInt(t.err_code)].Tips) : window.Game.showAlertBar("Quay l\u1ea1iL\u1ed7i\uff1a" + t.err_code), void("103" != t.err_code && "201" != t.err_code && "Login" != e || this.scheduleOnce(function() {
						window.Data.Token = "", window.Game.reGame()
					}, 1.5));
					cc.log("NetHelper -init" + e + " tab" + JSON.stringify(t));
					var o = t.data;
					if ("Login" == e) {
						window.Data.loginModel = 1, window.Data.UId = o.uid, window.Data.Token = o.token, window.Data.ServerId = o.dbId, window.Data.nowServerLoginTime = o.serverUnix, window.Data.AdGameList = o.gameList || [], window.Data.shareContent = o.commonShareTextList, window.Constant.bannerClose = o.bannerClose || !1, void 0 == o.version && (o.version = window.Config.Version), window.Config.ServerVersion = o.version, 4 != window.Config.Step && window.Func.compareVersion(window.Config.Version, o.version) > 0 && (window.Config.isLooking = !0), window.Func.setServerTime();
						var n = "";
						if (void 0 != o.profile) {
							var a = window.Func.unSecretString(o.profile);
							if (void 0 != a) try {
								n = JSON.parse(a)
							} catch (e) {
								cc.log("Giải mã save serverTh\u1ea5t b\u1ea1i")
							}
						}
						var r = window.FileData.getFileData("updatetime");
						console.log("b-flieUpdateTime " + r + " type:" + typeof r + " f-flieUpdateTime:" + n.updatetime + " type:" + typeof n.updatetime), "" != n && "number" == typeof n.updatetime && (n.updatetime >= r || "number" != typeof r) && (console.log("Đồng bộ dữ liệu server"), window.FileData.resetFileData(n), (n.updatetime > r || "number" != typeof r) && (console.log("Bản local thấp hơn server\uff0cTh\u1ef1c hi\u1ec7nĐồng bộ local"), window.Func.reloadMoneyData())), window.TestData.addData, window.Game.reloadGoldLabel(), window.NetHelper.sendUpdateInfoRequest(), this.sendList.length > 0 && (console.log("login - sendlist " + this.sendList.length), this.sendRequest(this.sendList[0].code, this.sendList[0].p, this.sendList[0].f), this.sendList.splice(0, 1));
						var s = window.FileData.getFileData("updatetime"),
							d = window.FileData.getFileData("lastlogintime");
						"number" != typeof d && (d = Math.floor(s / 1e3)), void 0 == cc.sys.localStorage.getItem("lastdata1") && cc.sys.localStorage.setItem("lastdata1", cc.sys.localStorage.getItem("data")), "number" == typeof d && window.Func.timestampToTime5(d) != window.Func.timestampToTime5(o.serverUnix) && window.WxFunc.clearAdFileData(), 12 != window.FileData.getFileData("bc_task") && (cc.sys.localStorage.setItem("olddata", cc.sys.localStorage.getItem("data")), window.FileData.setFileData("bc_task", 12)), window.FileData.setFileData("lastlogintime", o.serverUnix), window.Constant.PlayAdOrShare = o.adSwitch, 2 == window.Constant.PlayAdOrShare || 3 == window.Config.Step ? (window.WxFunc.setAdFileData(-1, 1), window.WxFunc.setShareFileData(window.Constant.shareIdList.NONE_, 0)) : 3 == window.Constant.PlayAdOrShare ? (window.WxFunc.setAdFileData(-1, 0), window.WxFunc.setShareFileData(window.Constant.shareIdList.NONE_, 1)) : (window.WxFunc.setAdFileData(-1, 0), window.WxFunc.setShareFileData(window.Constant.shareIdList.NONE_, 0));
						try {
							this.ycxiufu()
						} catch (e) {
							console.log("ycxiufu ss error 1")
						}
						this.resetCropBox(), window.GEventDispatch.emit(window.GBaseEvent.HttpLogin);
						var c = window.FileData.getFileData("share_newAdd_account");
						if (c && "string" == typeof c && "" != c) {
							c = JSON.parse(c);
							var l = window.Func.getTimeUnix(),
								p = c.updatetime || c.addtime,
								u = parseInt(window.Func.timestampToTime5(c.addtime)),
								h = parseInt(window.Func.timestampToTime5(p)),
								w = parseInt(window.Func.timestampToTime5(l));
							if (c.proto > 0 && h != w) {
								var m = "";
								w - u == 1 ? m = "Xem QCGiữ chân ngày 2" : w - u == 3 ? m = "Xem QCGiữ chân 3 ngày" : w - u == 5 ? m = "Xem QCGiữ chân 5 ngày" : w - u == 7 && (m = "Xem QCGiữ chân 7 ngày"), "" != m && window.Func.sendALDCount(m, {
									proto: c.proto
								}), c.updatetime = l, window.FileData.setFileData("share_newAdd_account", JSON.stringify(c));
								var g = window.FileData.getFileData("linetime"),
									f = "30ph\u00fattrong";
								g < 1800 ? f = "30ph\u00fattrong" : g < 3600 ? f = "1gi\u1eddtrong" : g < 7200 ? f = "2gi\u1eddtrong" : g < 18e3 ? f = "5gi\u1eddtrong" : g < 36e3 && (f = "10gi\u1eddtrong"), window.Func.sendALDCount("Xem QCThời gian user mới" + c.proto, {
									time: f
								})
							}
						}
					}
					null != i && i(o), i = null
				}, t.prototype.ycxiufu = function() {
					var e = cc.sys.localStorage.getItem("lastdata1"),
						t = cc.sys.localStorage.getItem("lastdata2"),
						i = "";
					if (void 0 != e) try {
						i = window.FileData.parseStoredSave(e)
					} catch (e) {
						console.log("ycxiufu error 1")
					}
					var o = [],
						n = 0;
					if ("" != i) {
						for (var a in o = 0 == i.nncropBox || "object" != typeof i.nncropBox ? i.cropBox : i.nncropBox)
							if (o[a])
								for (var r in o[a]) {
									var s = 0;
									for (var d in o[a][r])
										if (1 == o[a][r][d]) {
											if (parseInt(r) > 0) {
												n++, s = 1e3;
												break
											}
											s++
										} if (1e3 == s) break;
									s > 0 && s == window.Game.CROP_STATE[parseInt(r)] && n++
								}
						console.log("allnum1allnum1 ", n)
					}
					var c, l = "";
					if (void 0 != t) try {
						l = window.FileData.parseStoredSave(t)
					} catch (e) {
						console.log("ycxiufu error 1")
					}
					var p = [],
						u = 0;
					if ("" != l) {
						for (var a in p = 0 == l.nncropBox || "object" != typeof l.nncropBox ? l.cropBox : l.nncropBox)
							if (p[a])
								for (var r in p[a]) {
									s = 0;
									for (var d in p[a][r])
										if (1 == p[a][r][d]) {
											if (parseInt(r) > 0) {
												u++, s = 1e3;
												break
											}
											s++
										} if (1e3 == s) break;
									s > 0 && s == window.Game.CROP_STATE[parseInt(r)] && u++
								}
						console.log("allnum1allnum2 ", u)
					}
					var h = 0,
						w = window.FileData.getFileData("nncropBox"),
						m = window.FileData.getFileData("cropBox"),
						g = 0 == w || "object" != typeof w ? m : w;
					for (var a in g)
						if (g[a])
							for (var r in g[a]) {
								s = 0;
								for (var d in g[a][r])
									if (1 == g[a][r][d]) {
										if (parseInt(r) > 0) {
											h++, s = 1e3;
											break
										}
										s++
									} if (1e3 == s) break;
								s > 0 && s == window.Game.CROP_STATE[parseInt(r)] && h++
							}
					return console.log("allnum1allnum3 ", h), n > 9 && h < n ? (window.FileData.setFileData("nncropBox", o), window.NetHelper.sendClientErrorRequest("crop L\u1ed7i1 json:" + JSON.stringify(o) + "croplist:" + JSON.stringify(g)), cc.sys.localStorage.setItem("lastcrop1_1", JSON.stringify(g)), void cc.sys.localStorage.setItem("lastcrop1_3", JSON.stringify(o))) : u > 9 && h < u ? (window.FileData.setFileData("nncropBox", p), window.NetHelper.sendClientErrorRequest("crop L\u1ed7i2 json:" + JSON.stringify(p) + "croplist:" + JSON.stringify(g)), cc.sys.localStorage.setItem("lastcrop1_2", JSON.stringify(p)), void cc.sys.localStorage.setItem("lastcrop1_3", JSON.stringify(o))) : void 0
				}, t.prototype.resetCropBox = function() {
					var e = window.FileData.getFileData("nncropBox");
					0 != e && "object" == typeof e || (e = window.FileData.getFileData("cropBox", !1), window.FileData.setFileData("nncropBox", e)), window.FileData.setFileData("cropBox", e)
				}, t.prototype.sendLoginRequest = function() {
					var e = 1 == window.Config.Step ? 0 : window.Config.Step;
					this.sendRequest("Login", {
						openId: window.Data.PTid.toString(),
						channel: e,
						anonymousCode: window.WxLogin.anonymousCode || ""
					})
				}, t.prototype.sendSaveProfileRequest = function(e) {
					void 0 === e && (e = !1);
					var t = window.Func.SecretString(JSON.stringify(window.FileData.getFileData())),
						i = window.FileData.getFileData("updatetime"),
						o = (new Date).getTime();
					if ("" != t && (e || 0 == this.lastSaveDataTime || this.lastSaveDataTime + 5e3 < o)) {
						var n = [];
						n[0] = {
							rankType: 1,
							score: window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_seed"))
						}, n[1] = {
							rankType: 2,
							score: window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_gold"))
						}, n[2] = {
							rankType: 3,
							score: window.Game.getCropLevelNum(0, 0)
						}, n[3] = {
							rankType: 5,
							score: window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_goldsecond"))
						}, this.sendRequest("SaveProfile", {
							profile: t,
							updateUnix: i,
							commonRankAdd: n,
							cityCode: 0 == window.WxLogin.city_code ? -1 : window.WxLogin.city_code
						}, null, {
							notShowWait: !0
						}), this.lastSaveDataTime = o
					}
				}, t.prototype.sendDelayLogin = function(e) {
					void 0 === e && (e = 2);
					var t = this;
					window.IndexScene.scheduleOnce(function() {
						t.sendLoginRequest()
					}, e)
				}, t.prototype.sendInviteRequest = function(e, t, i) {
					this.sendRequest("Invite", {
						inviteType: e,
						inviterUid: t
					}, i, {
						notShowWait: !0
					})
				}, t.prototype.sendUpdateInfoRequest = function() {
					window.WxLogin.isAuthor && this.sendRequest("UpdateInfo", {
						name: window.WxLogin.nickName,
						avatar: window.WxLogin.avatarUrl,
						gender: window.WxLogin.gender,
						position: window.WxLogin.city
					}, null, {
						notShowWait: !0
					})
				}, t.prototype.sendGetInviteInfoRequest = function(e, t) {
					this.sendRequest("GetInviteInfo", {
						inviteType: e
					}, function(e) {
						var i = [];
						if (void 0 != e.targetList) {
							for (var o = 0; o < e.targetList.length; o++) i[e.targetList[o]] = 1;
							for (o = 0; o < e.inviteeOpenIdList.length; o++) e.inviteeOpenIdList[o].state = 1 == i[e.inviteeOpenIdList[o].uid] ? 1 : 0
						}
						t(e)
					})
				}, t.prototype.sendClearInviteRequest = function(e, t) {
					void 0 === t && (t = !0), this.sendRequest("ClearInvite", {
						inviteType: e
					}, null, {
						notShowWait: t
					})
				}, t.prototype.sendRankGetRequest = function(e, t, i, o, n) {
					void 0 === i && (i = 1), void 0 === o && (o = 50), void 0 === n && (n = 0), this.sendRequest("RankGet", {
						rankType: 2 == e ? 5 : e,
						startRank: i,
						endRank: o,
						cityCode: n
					}, t)
				}, t.prototype.sendTakeInviteAwardRequest = function(e, t, i) {
					this.sendRequest("TakeInviteAward", {
						inviteType: e,
						target: t
					}, i)
				}, t.prototype.sendGetRandShareTextRequest = function(e, t) {
					"number" != typeof e && (e = 1), this.sendRequest("GetRandShareText", {
						shareType: e
					}, t)
				}, t.prototype.sendGetInviteInfoListRequest = function(e, t) {
					void 0 === e && (e = []), this.sendRequest("GetInviteInfoList", {
						inviteTypeList: e
					}, t, {
						notShowWait: !0
					})
				}, t.prototype.sendMailListRequest = function(e, t) {
					void 0 === e && (e = 0), this.sendRequest("MailList", {
						mailId: e
					}, t)
				}, t.prototype.sendMailDelRequest = function(e, t) {
					this.sendRequest("MailDel", {
						mailIdList: [e]
					}, t)
				}, t.prototype.sendMailReadRequest = function(e, t) {
					this.sendRequest("MailRead", {
						mailIdList: [e]
					}, t, {
						notShowWait: !0
					})
				}, t.prototype.sendMailRewardRequest = function(e, t) {
					this.sendRequest("MailReward", {
						mailIdList: [e]
					}, t)
				}, t.prototype.sendNoticeGetResponse = function(e) {
					var t = 0 != window.IndexScene._IndexHelper.MaxTopNoticeId ? window.IndexScene._IndexHelper.MaxTopNoticeId : window.FileData.getFileData("TopNoticeId");
					this.sendRequest("NoticeGet", {
						lastTopNoticeId: t
					}, e)
				}, t.prototype.sendClientErrorRequest = function(e) {
					e = "Version:" + window.Config.Version + " ,msg:" + e + " token:" + window.Data.Token, this.sendRequest("ClientError", {
						msg: e
					}, null, {
						notShowWait: !0
					})
				}, t.prototype.sendLookupProfileRequest = function(e, t, i) {
					this.sendRequest("LookupProfile", {
						rank: e,
						uid: t
					}, i)
				}, t.prototype.sendUpdateTitleRequest = function(e) {
					this.sendRequest("UpdateTitle", {
						title: e
					}, null, {
						notShowWait: !0
					})
				}, t.prototype.sendSendTopNoticeRequest = function(e) {
					this.sendRequest("SendTopNotice", {
						text: e
					}, null, {
						notShowWait: !0
					})
				}, t.prototype.sendFriendListRequest = function(e) {
					this.sendRequest("FriendList", {}, e)
				}, t.prototype.sendGetRecommendFriendListRequest = function(e, t) {
					void 0 === e && (e = 0), this.sendRequest("GetRecommendFriendList", {
						startIndex: e
					}, t)
				}, t.prototype.sendFriendByInviteRequest = function(e) {
					this.sendRequest("FriendByInvite", {
						uid: e
					}, null, {
						notShowWait: !0
					})
				}, t.prototype.sendFriendTakeCareRequest = function(e, t) {
					this.sendRequest("FriendTakeCare", {
						uid: e
					}, t)
				}, t.prototype.sendFriendApplyRequest = function(e, t) {
					this.sendRequest("FriendApply", {
						uid: e
					}, t)
				}, t.prototype.sendFriendApplyListRequest = function(e) {
					this.sendRequest("FriendApplyList", {}, e)
				}, t.prototype.sendFriendAcceptRequest = function(e, t) {
					this.sendRequest("FriendAccept", {
						uid: e
					}, t)
				}, t.prototype.sendFriendIgnoreRequest = function(e, t) {
					this.sendRequest("FriendIgnore", {
						uid: e
					}, t)
				}, t.prototype.sendFriendDeleteRequest = function(e, t) {
					this.sendRequest("FriendDelete", {
						uid: e
					}, t)
				}, t.prototype.sendRandUserRequest = function(e, t) {
					void 0 === e && (e = 1), 2 == window.Data.loginModel && window.YxhLogin.login(!0), this.sendRequest("RandUser", {
						randUserType: e
					}, t)
				}, t.prototype.sendEnemyListRequest = function(e) {
					this.sendRequest("EnemyList", {}, e)
				}, t.prototype.sendHeartLogRequest = function(e) {
					this.sendRequest("HeartLog", {}, e)
				}, t.prototype.sendFriendMakeTroubleRequest = function(e, t) {
					this.sendRequest("FriendMakeTrouble", {
						uid: e
					}, t)
				}, t.prototype.sendScareCrowHeartListRequest = function(e) {
					this.sendRequest("ScareCrowHeartList", {}, e)
				}, t.prototype.sendLookupUserInfoRequest = function(e, t) {
					this.sendRequest("LookupUserInfo", {
						uid: e
					}, t)
				}, t.prototype.sendRequest = function(e, t, i, o) {
					var n;
					if (void 0 === i && (i = null), void 0 === o && (o = {}), 2 != window.Data.loginModel || "Login" == e) return "Login" != e && !window.Data.isLogin() || "Login" == e && window.Data.isLogin() ? (console.log("sendRequestsendRequest " + e + " tab" + t), "Login" != e && "" == window.Data.Token && this.sendList.push(((n = {}).code = e, n.p = t, n.f = i, n)), void(cc.sys.platform !== cc.sys.WECHAT_GAME && i && i())) : void window.NetManager.send(e, t, i, o)
				}, t = __decorate([n], t)
			}(cc.Component));
		i.NetHelper = a, cc._RF.pop()
	}, {}],
	NetManager: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "28a21zTEK9AjbGCYCIxJKCq", "NetManager"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("ClientSocket"),
			n = cc._decorator,
			a = n.ccclass,
			r = n.property;
		window.ConnectType = cc.Enum({
			Game: 0,
			Battle: 1
		});
		var s = cc._decorator,
			d = (a = s.ccclass, r = s.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.HttpSecretKey = "ID#Mi*eO", t.wFilePath = "arcade-farm/", t.nowSendCode = "", t.sendHttptimer = null, t.sendHttptimer2 = null, t.sendList = [], t
				}
				return __extends(t, e), t.prototype.init = function() {
					this.gameSocket = new o.ClientSocket, this.gameSocket.setManager(this), this.sendList = []
				}, t.prototype.connect = function(e, t, i) {
					this.gameSocket.connect(e, t)
				}, t.prototype.getHttpPostHead = function() {
					var e;
					return (e = {}).p = [], e.u = window.Data.UId, e.t = (new Date).getTime(), e.s = window.Data.ServerId, e.n = "", e.tk = window.Data.Token, e.v = window.Config.Version.toString(), e
				}, t.prototype.send = function(e, t, i, o) {
					var n;
					if (void 0 === e && (e = "Login"), void 0 === i && (i = null), !window.TestData.closeNet && 1 == this.Model) {
						if ("" != this.nowSendCode) return console.log("rerererererererere " + e + " stab:" + t), void this.sendList.push((n = {}, n.code = e, n.p = t, n.f = i, n.d = o, n));
						var a = cc.loader.getXMLHttpRequest(),
							r = window.Config.GameServerIp + "/action/?api=" + e;
						a.open("POST", r, !0), this.nowSendCode = e;
						var s = this.getHttpPostHead();
						s.p = t;
						var d = s.u + "|" + JSON.stringify(s.p) + "|" + s.t + "|" + this.HttpSecretKey;
						s.n = window.Func.md5_encode(d), s = JSON.stringify(s), console.log("sendhttp-url-" + e + ":" + r + " list:" + s), a.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), void 0 != o.notShowWait && o.notShowWait || window.Game.showWaitingLayer();
						var c = this;
						null != this.sendHttptimer && clearTimeout(c.sendHttptimer);
						var l = function() {
							null != c.sendHttptimer && clearTimeout(c.sendHttptimer), c.sendHttptimer = null, c.nowSendCode = ""
						};
						this.sendHttptimer = setTimeout(function() {
							console.log("Timeout mạng"), a.abort(), l(), "Login" != e ? c.send(e, t, i, o) : window.WxLogin.login()
						}, 3e3), a.onreadystatechange = function() {
							if (a.status >= 200 && a.status < 300) {
								if (4 === a.readyState) {
									l();
									try {
										var n = JSON.parse(a.responseText);
										console.log("receive-http-" + e + ":" + a.responseText), window.NetHelper.init(e, n, i)
									} catch (e) {
										console.log("err:" + e)
									}
									c.sendList.length > 0 ? (c.send(c.sendList[0].code, c.sendList[0].p, c.sendList[0].f, c.sendList[0].d), c.sendList.splice(0, 1), console.log("self.sendList " + c.sendList.length)) : window.Game.hideWaitingLayer()
								}
							} else l(), console.log("xhr.onreadystatechange2 error" + e + " " + a.readyState), window.IndexScene && c.scheduleOnce(function() {
								c.send(e, t, i, o)
							}, 2)
						}, a.send(s)
					}
				}, t.prototype.resetSprite = function(e, t) {
					cc.loader.load(this.wFilePath + e, function(e, i) {
						if (e) cc.error(e);
						else {
							var o = new cc.SpriteFrame(i);
							o && t(o)
						}
					})
				}, t.prototype.getNetPhoto = function(e, t) {
					if (cc.sys.platform === cc.sys.WECHAT_GAME) {
						wx.getFileSystemManager().getFileInfo(e, function(t) {
							console.log("fileManager.getFileInfo success " + JSON.stringify(t) + " filename" + e)
						}, function(t) {
							console.log("fileManager.getFileInfo fail " + JSON.stringify(t) + " filename" + e)
						}, function(t) {
							console.log("fileManager.getFileInfo fail2 " + JSON.stringify(t) + " filename" + e)
						});
						var i = wx.env.USER_DATA_PATH + "/tps/" + e + ".png";
						cc.loader.load(i, function(e, i) {
							var o = new cc.SpriteFrame(i);
							t(o)
						})
					}
				}, t.prototype.downloadPhoto = function() {}, t.prototype.close = function(e) {
					this.gameSocket.close()
				}, t.prototype.onConnectSuccess = function(e) {
					console.log("onConnectSuccess")
				}, t.prototype.onConnectFail = function(e) {
					console.log("onConnectFail")
				}, t.prototype.onReceiveMsg = function(e, t) {
					console.log(e)
				}, t.prototype.onSendMsg = function(e) {
					console.log("onSendMsg")
				}, t.prototype.onError = function(e) {
					console.log("onError")
				}, __decorate([r(Number)], t.prototype, "Model", void 0), __decorate([r(String)], t.prototype, "HttpSecretKey", void 0), __decorate([r(String)], t.prototype, "wFilePath", void 0), __decorate([r(String)], t.prototype, "nowSendCode", void 0), t = __decorate([a], t)
			}(cc.Component));
		i.NetManager = d, cc._RF.pop()
	}, {
		ClientSocket: "ClientSocket"
	}],
	NewHelperLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "8dd30qq54hCho0iS+LX9+L0", "NewHelperLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.circleNode = null, t.maskNode = null, t.szSprite = null, t.roleSprite = null, t.btNode = null, t.contentLabel = null, t.width = 180, t.height = 180, t.m_data = null, t.m_guideStep = 1, t.isScale = !0, t.guidePosList = {
						1: {
							x: 30,
							y: -195
						},
						2: {
							x: -110,
							y: 280
						},
						3: {
							x: 30,
							y: -185,
							sz_action: !1
						},
						4: {
							x: -55,
							y: -500,
							width: 130
						},
						5: {
							x: 20,
							y: -195
						},
						6: {
							x: 115,
							y: -500
						},
						7: {
							x: 30,
							y: -185
						},
						8: {
							x: -141,
							y: -110
						},
						9: {
							x: -110,
							y: 280
						},
						10: {
							x: -141,
							y: -110,
							sz_action: !1
						},
						11: {
							x: 50,
							y: -500,
							width: 130
						},
						12: {
							x: -130,
							y: 140,
							width: 220,
							role_pos_y: -400
						},
						13: {
							x: -240,
							y: -480
						},
						14: {
							x: -255,
							y: 490
						},
						15: {
							x: 0,
							y: -170
						},
						16: {
							x: 0,
							y: 0,
							sz_noshow: !0,
							showBt: !0
						},
						201: {
							x: -170,
							y: -380,
							width: 150
						}
					}, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					console.log("newhelper - onLoad"), this.node.width = this.node.height = 1e4, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBg, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.active = !1
				}, t.prototype.updateUi = function(e, t) {
					if (void 0 === e && (e = 0), void 0 === t && (t = 0), console.log("newhelper - updateUi", window.FileData.getFileData("guideStep")), 1 == (i = window.Game.getNewHelperFileData2(e, t))) {
						if (window.IndexScene.isNotShowLayer2()) return window.Game.NewHelper.active = !1, void this.setShow(!1);
						window.Game.NewHelper.active = !0
					} else {
						var i;
						if ("number" == typeof(i = window.FileData.getFileData("guideStep"))) {
							var o = window.JsonManager.getData("Guide", i);
							if (console.log("datadatadata", JSON.stringify(o)), i > 16 || 3 == o.GuideType) return void(this.node.active = !1)
						}
					}
					this.node.active = !0, this.reloadUi(e, t)
				}, t.prototype.reloadUi = function(e, t) {
					var i = window.FileData.getFileData("guideStep");
					if ("number" != typeof i && (window.FileData.setFileData("guideStep", 1), i = 1), 1 == window.Game.getNewHelperFileData2(e, t) && (i = 100 * e + t), this.maskNode.width = this.maskNode.height = 2e3, console.log("newhelper - reloadUi", i), this.m_guideStep = i, this.m_data = e > 0 && t > 0 ? window.JsonManager.getGuideList(e, t) : window.JsonManager.getData("Guide", i), void 0 != this.m_data)
						if (console.log("this.m_data ", JSON.stringify(this.m_data)), void 0 != this.m_data) {
							if (window.Func.sendALDCount("1Th\u1ed1ng k\u00ea-Hướng dẫn" + i), this.isScale = !0, void 0 == this.m_data.ShowContent || "" == this.m_data.ShowContent ? this.node.getChildByName("roleNode").active = !1 : (this.node.getChildByName("roleNode").active = !0, this.contentLabel.string = this.m_data.ShowContent), -500 == (o = this.guidePosList[this.m_guideStep]).y && (o.y = -cc.winSize.height / 2 + 68), o.sz_noshow ? (this.circleNode.active = !1, this.szSprite.active = !1, this.maskNode.width = this.maskNode.height = 0) : (this.circleNode.setPosition(o), this.maskNode.setPosition(o), this.szSprite.setPosition(o.x + 60, o.y - 60)), this.szSprite.stopAllActions(), this.szSprite.rotation = 20, o.sz_action) {
								var o = this.szSprite.getPosition();
								this.szSprite.setPosition(o.x - 70, o.y), this.szSprite.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.8, 150, 0), cc.moveBy(0, -150, 0))))
							} else this.szSprite.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25, 0), cc.rotateBy(.5, 25, 0))));
							o.role_pos_y ? this.roleSprite.setPosition(this.roleSprite.getPosition().x, o.role_pos_y) : this.roleSprite.setPosition(this.roleSprite.getPosition().x, -80), this.btNode.active = o.showBt, void 0 != o.width ? (this.width = o.width, this.height = o.width) : (this.width = 180, this.height = 180), this.circleNode.width = this.width, this.circleNode.height = this.height, 16 == i && window.Game.setNewHelperSaveData(17)
						} else this.setShow(!1);
					else this.setShow(!1)
				}, t.prototype.setShow = function(e) {
					this.node.active = e
				}, t.prototype.getShow = function() {
					return this.node.active
				}, t.prototype.BtClose = function(e, t) {
					if (t = parseInt(t), this.setShow(!1), 2 == t || 3 == t) window.Func.sendALDCount("1Th\u1ed1ng k\u00ea-Hướng dẫn17");
					else if (1 == t) {
						var i = window.FileData.getFileData("guideStep");
						"number" != typeof i && (window.FileData.setFileData("guideStep", 1), i = 1), window.Func.sendALDCount("1Th\u1ed1ng k\u00ea-Thoát hướng dẫn" + i)
					}
					window.Game.setNewHelperSaveData(17)
				}, t.prototype.update = function() {
					if (this.node.active && this.isScale && window.IndexScene.curFrame % 5) {
						var e = 0;
						this.maskNode.width > this.width && (e++, this.maskNode.width = Math.max(this.maskNode.width - 120, this.width)), this.maskNode.height > this.height && (e++, this.maskNode.height = Math.max(this.maskNode.height - 120, this.height)), 0 == e && (this.isScale = !1)
					}
				}, t.prototype.onTouchBg = function(e) {
					if (this.guidePosList[this.m_guideStep].sz_noshow) this.node._touchListener.setSwallowTouches(!0);
					else {
						var t = e.getLocation(),
							i = this.circleNode.getBoundingBoxToWorld();
						i.width = this.width - 40, i.height = this.height - 40, i.contains(t) ? this.node._touchListener.setSwallowTouches(!1) : this.node._touchListener.setSwallowTouches(!0)
					}
				}, t.prototype.onTouchMove = function(e) {}, t.prototype.onTouchEnd = function(e) {
					this.guidePosList[this.m_guideStep].sz_noshow && this.BtClose(null, 3)
				}, __decorate([a(cc.Node)], t.prototype, "circleNode", void 0), __decorate([a(cc.Node)], t.prototype, "maskNode", void 0), __decorate([a(cc.Node)], t.prototype, "szSprite", void 0), __decorate([a(cc.Node)], t.prototype, "roleSprite", void 0), __decorate([a(cc.Node)], t.prototype, "btNode", void 0), __decorate([a(cc.Label)], t.prototype, "contentLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.NewHelperLayer = r, cc._RF.pop()
	}, {}],
	NewyearWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "ee2968Ue3lANbSuRFkNMuZR", "NewyearWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.goodNodeList = [], t.ScrollViewContent = null, t.m_panel = null, t.timeoutLabel = null, t.m_data = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.update = function() {
					window.IndexScene.curFrame % window.Constant.GameFrame == 0 && this.reloadTimeout()
				}, t.prototype.updateUi = function(e) {
					this.ScrollViewContent.removeAllChildren();
					var t = window.JsonManager.getTable("NewYearGift"),
						i = window.JsonManager.getData("NewYearGift", t.length);
					this.m_data = e, this.reloadGoodUi();
					var o = i.InviteNum,
						n = o * (this.m_panel.getContentSize().width + 5);
					this.ScrollViewContent.setContentSize(cc.size(n, this.ScrollViewContent.height)), this.ScrollViewContent.setPosition((n - 480) / 2, this.ScrollViewContent.y);
					for (var a = this, r = -1, s = function() {
							r++;
							var e = cc.instantiate(a.m_panel);
							if (e.setPosition(-n / 2 + e.width / 2 + r * (e.width + 5), -35), a.ScrollViewContent.addChild(e), r > i.InviteNum - 1) e.getChildByName("Sprite2").active = !1;
							else {
								var t = a.m_data[r];
								if (void 0 != t && void 0 != t.uid) {
									if (e.getChildByName("Sprite2").active = !0, void 0 != t.avatar) {
										var o = e.getChildByName("Sprite2").getComponent(cc.Sprite);
										window.Func._addProtoPic(t.avatar, o, 68, 68)
									}
								} else e.getChildByName("Sprite2").active = !1
							}
						}, d = 0; d < o; d++) this.scheduleOnce(function() {
						s()
					}, .2 + .01 * d);
					this.reloadTimeout()
				}, t.prototype.reloadTimeout = function() {
					this.timeoutLabel.string = "S\u1ef1 ki\u1ec7nH\u1ebft \u0111\u1ebfm ng\u01b0\u1ee3c\uff1a" + window.Func.timestampToTime4(window.Constant.NewYearTimeOut - window.Func.getTimeUnix())
				}, t.prototype.reloadGoodUi = function() {
					for (var e = 0; e < 3; e++) {
						var t = this.goodNodeList[e],
							i = window.JsonManager.getData("NewYearGift", e + 1);
						t.getChildByName("bg").getChildByName("Label2").getComponent(cc.Label).string = this.m_data.length + "/" + i.InviteNum, t.getChildByName("bg").getChildByName("Label2").color = this.m_data.length >= i.InviteNum ? cc.color(0, 172, 93) : cc.color(221, 130, 41), console.log("datadata", JSON.stringify(i));
						for (var o = i.Num.split(";"), n = i.TypeId.split(";"), a = 0; a < 2; a++) {
							var r = parseInt(n[a]),
								s = window.JsonManager.getData("Handbook", r),
								d = t.getChildByName("bg2").getChildByName("Sprite" + (a + 1));
							d.getChildByName("Label").getComponent(cc.Label).string = "x" + o[a], 0 == a && void 0 != s && (window.Func._addSpritePic2(d.getChildByName("bSprite").getComponent(cc.Sprite), "texture/tps/box1", "icon223_" + s.Quality, !1), window.Func._addSpritePic2(d.getChildByName("iSprite").getChildByName("Sprite1").getComponent(cc.Sprite), "texture/tps/crop_icon2", "c_" + s.CropsId, !1), d.getChildByName("iSprite").getChildByName("iconSprite").getChildByName("Label").getComponent(cc.Label).string = "x" + window.Game.CROP_LEVEL_DOUBLE[s.Quality - 1] + "00%")
						}
						var c = window.FileData.getFileData("newyearget");
						c && 1 == c[e] && window.Game.BtChangeEnabled(t.getChildByName("Button"), !1)
					}
				}, t.prototype.BtOk = function(e, t) {
					t = parseInt(t);
					var i = window.FileData.getFileData("newyearget");
					if (!i || 1 != i[t - 1]) {
						var o = window.JsonManager.getData("NewYearGift", t);
						if (o.InviteNum <= this.m_data.length) {
							console.log("Nh\u1eadn th\u01b0\u1edfng");
							for (var n = [], a = o.Num.split(";"), r = o.Type.split(";"), s = o.TypeId.split(";"), d = 0; d < r.length; d++) n.push({
								type: r[d],
								num: a[d],
								typeid: s[d],
								handbookid: s[d]
							});
							window.Data.setGoodAward(n), window.Game.openAwardLayer3(n), i[t - 1] = 1, window.FileData.setFileData("newyearget", i), window.Game.BtChangeEnabled(e.target), window.FileData.saveFileData()
						} else window.Game.showAlertBar("M\u1eddiKhông đủ người\uff01")
					}
				}, t.prototype.BtYaoqing = function() {
					window.WxFunc.createShare(window.Constant.shareIdList.NEWYEAR)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "goodNodeList", void 0), __decorate([a(cc.Node)], t.prototype, "ScrollViewContent", void 0), __decorate([a(cc.Node)], t.prototype, "m_panel", void 0), __decorate([a(cc.Label)], t.prototype, "timeoutLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.NewyearWindow = r, cc._RF.pop()
	}, {}],
	PackageWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "97a9dvpHtlKhaIyrgQVYrQ+", "PackageWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.userNumLabel = null, t.goodNodeList = [], t.ScrollViewContent = null, t.delaytime = 0, t.m_panel = null, t.btNode = null, t.TopNode = null, t.user_panel_list = null, t.m_data = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1)
				}, t.prototype.updateUi = function(e) {
					this.ScrollViewContent.removeAllChildren();
					var t = window.FileData.getFileData("package_count"),
						i = window.JsonManager.getTable("InviteGift"),
						o = window.JsonManager.getData("InviteGift", t);
					cc.log("datadata ", JSON.stringify(o), JSON.stringify(i)), this.m_data = window.Game2.getPacketRedPoint(e), console.log("saveListsaveListsaveList", JSON.stringify(this.m_data)), this.userNumLabel.string = "M\u1eddi ng\u01b0\u1eddi m\u1edbiFreeNh\u1eadn!(" + Math.min(o.InviteNum, this.m_data.length) + "/" + o.InviteNum + ")", o.InviteNum <= this.m_data.length ? this.btNode.getChildByName("Label").getComponent(cc.Label).string = "Nh\u1eadn" : this.btNode.getChildByName("Label").getComponent(cc.Label).string = "M\u1eddi", this.reloadGoodUi(), this.user_panel_list = [];
					var n = o.InviteNum,
						a = n * (this.m_panel.getContentSize().width + 5);
					this.ScrollViewContent.setContentSize(cc.size(a, this.ScrollViewContent.height)), this.ScrollViewContent.setPosition((a - 400) / 2, this.ScrollViewContent.y);
					for (var r = this, s = -1, d = function() {
							s++;
							var e = cc.instantiate(r.m_panel);
							if (e.setPosition(-a / 2 + e.width / 2 + s * (e.width + 5), -35), r.ScrollViewContent.addChild(e), r.user_panel_list[s] = e, s > o.InviteNum - 1) e.getChildByName("Sprite1").active = !1, e.getChildByName("Sprite2").active = !1;
							else {
								e.getChildByName("Sprite1").active = !0;
								var t = r.m_data[s];
								if (void 0 != t && void 0 != t.uid) {
									if (e.getChildByName("Sprite2").active = !0, void 0 != t.avatar) {
										var i = e.getChildByName("Sprite2").getComponent(cc.Sprite);
										window.Func._addProtoPic(t.avatar, i, 55, 55)
									}
								} else e.getChildByName("Sprite2").active = !1
							}
						}, c = 0; c < n; c++) c < o.InviteNum && this.scheduleOnce(function() {
						d()
					}, .2 + .01 * c)
				}, t.prototype.reloadGoodUi = function() {
					var e = window.FileData.getFileData("package_count"),
						t = window.JsonManager.getData("InviteGift", e);
					window.Func._addSpritePic2(this.goodNodeList[3].getComponent(cc.Sprite), "texture/tps/window2_1", "icon10_" + e, !1);
					for (var i = t.Num.split(";"), o = t.TypeId.split(";"), n = 0; n < 3; n++) {
						var a = parseInt(o[n]),
							r = window.JsonManager.getData("Handbook", a);
						this.goodNodeList[n].getChildByName("Label").getComponent(cc.Label).string = (void 0 != r ? r.Name : "") + "+" + window.Func.moneyChange(i[n]), void 0 != r && (window.Func._addSpritePic2(this.goodNodeList[n].getChildByName("bSprite").getComponent(cc.Sprite), "texture/tps/box1", "icon223_" + r.Quality, !1), window.Func._addSpritePic2(this.goodNodeList[n].getChildByName("iSprite").getChildByName("Sprite1").getComponent(cc.Sprite), "texture/tps/crop_icon2", "c_" + r.CropsId, !1), this.goodNodeList[n].getChildByName("iSprite").getChildByName("iconSprite").getChildByName("Label").getComponent(cc.Label).string = "x" + window.Game.CROP_LEVEL_DOUBLE[r.Quality - 1] + "00%")
					}
					window.Func._addSpritePic2(this.TopNode.getComponent(cc.Sprite), "texture/tps/window2_1", "icon9_" + e, !1);
					var s = cc.color(202, 145, 58);
					2 == e ? s = cc.color(229, 92, 50) : 3 == e && (s = cc.color(182, 43, 0)), this.TopNode.getChildByName("Label").getComponent(cc.Label).string = t.Name, this.TopNode.getChildByName("Label").getComponent(cc.LabelOutline).color = s
				}, t.prototype.BtOk = function(e) {
					var t = window.FileData.getFileData("package_count"),
						i = window.JsonManager.getData("InviteGift", t);
					if (i.InviteNum <= this.m_data.length) {
						console.log("Nh\u1eadn th\u01b0\u1edfng");
						for (var o = [], n = i.Num.split(";"), a = i.Type.split(";"), r = i.TypeId.split(";"), s = 0; s < a.length; s++) o.push({
							type: a[s],
							num: n[s],
							typeid: r[s],
							handbookid: r[s]
						});
						window.Data.setGoodAward(o), window.Game.openAwardLayer3(o), window.FileData.setFileData("package_count", t + 1), t + 1 <= window.JsonManager.getTable("InviteGift").length ? this.updateUi([]) : window.Game.BtChangeEnabled(e.target), window.IndexScene._RedPointMgr.reloadPackageBt(), window.FileData.saveFileData()
					} else window.WxFunc.createShare(window.Constant.shareIdList[window.Constant.PackageToIdList[t]])
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "userNumLabel", void 0), __decorate([a(cc.Node)], t.prototype, "goodNodeList", void 0), __decorate([a(cc.Node)], t.prototype, "ScrollViewContent", void 0), __decorate([a(Number)], t.prototype, "delaytime", void 0), __decorate([a(cc.Node)], t.prototype, "m_panel", void 0), __decorate([a(cc.Node)], t.prototype, "btNode", void 0), __decorate([a(cc.Node)], t.prototype, "TopNode", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.PackageWindow = r, cc._RF.pop()
	}, {}],
	PieceLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "1d832VQAk5EeZmr3+h+QX0i", "PieceLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.piecePrefab = null, t.colNum = 5, t.colSpace = 0, t.pieceMap = null, t.colWidth = 0, t.colHeight = 0, t
				}
				return __extends(t, e), t.prototype.create = function(e, t, i, o, n) {
					void 0 === e && (e = 3), void 0 === n && (n = -1), this.colNum = e, this.colWidth = (t.width - this.colSpace * (this.colNum + 1)) / this.colNum, this.pieceMap = [];
					var a = this;
					cc.loader.loadRes("prefabs/box/piece", function(r, s) {
						if (r) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/box/piece", r), void a.create(e, t, i, o, n);
						for (var d = 0; d < a.colNum; d++)
							for (var c = 0; c < a.colNum; c++) {
								var l = cc.instantiate(s);
								t.addChild(l), "get2" == i.layer ? (l.x = -58, l.y = -58, l.scale = 1.95) : (l.x = d * (a.colWidth + a.colSpace) + a.colSpace - t.width / 2, l.y = c * (a.colWidth + a.colSpace) + a.colSpace - t.height / 2), void 0 == a.pieceMap[d] && (a.pieceMap[d] = []), a.pieceMap[d][c] = l.getComponent("PiecePrefabs"), a.pieceMap[d][c].init(d, c, a.colNum, a.colWidth, o, i), l.zIndex = 101
							}
					})
				}, t.prototype.reloadUi = function() {}, __decorate([a(cc.Prefab)], t.prototype, "piecePrefab", void 0), __decorate([a(cc.Integer)], t.prototype, "colNum", void 0), __decorate([a(cc.Integer)], t.prototype, "colSpace", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.PieceLayer = r, cc._RF.pop()
	}, {}],
	PiecePrefabs: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "34749Zw/99CQ6KHdLOGrJs1", "PiecePrefabs"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.init = function(e, t, i, o, n, a) {
					this.oriCol = e, this.oriRow = t, this.curCol = e, this.curRow = t;
					var r = this;
					cc.loader.loadRes("texture/tps/crop_icon2", cc.Texture2D, function(s, d) {
						if (s) return console.log("resT\u1ea3iTh\u1ea5t b\u1ea1i:texture/tps/crop_icon2", s), void r.init(e, t, i, o, n, a);
						var c = d,
							l = r.node.addComponent(cc.Sprite),
							p = window.JsonManager.getCropIconData(a.path).frame,
							u = cc.rect(0, 0, p.w, p.h),
							h = u.width / i,
							w = u.height / i,
							m = e * h + p.x,
							g = (i - t - 1) * w + p.y,
							f = cc.rect(m, g, h, w);
						l.spriteFrame = new cc.SpriteFrame(c, f), r.node.width = o, r.node.height = o;
						var y = e * i + t + 1;
						n.setShowNodeLock(y, r.node, a)
					})
				}, __decorate([a({
					type: cc.Texture2D
				})], t.prototype, "oriCol", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.PiecePrefabs = r, cc._RF.pop()
	}, {}],
	PieceUiLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e0ec0akyDVOWZmoPXAOf1yX", "PieceUiLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = e("PieceLayer"),
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mbSprite = null, t.mbSprite0 = [], t.mbSprite1 = null, t.mbSprite2 = null, t.progress = null, t.progressSprite = null, t.iconSprite = null, t.iconLabel = null, t.seedSprite = null, t.bool_sameLevel_open = null, t.m_nowLevelKey = -1, t.dataList = [], t.showLabelContent = null, t.m_showNode = null, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.reloadUi = function(e) {
					this.dataList = e;
					var t = e.farmId,
						i = window.Game.getCropMaxLevel(t);
					this.m_nowLevelKey = i;
					var o = window.Game.ifCropSameLevel(t);
					this.bool_sameLevel_open = o;
					window.Func._addSpritePic2(this.mbSprite, "texture/tps/box1", "icon223_" + (i + 1), !1);
					var n = window.Game.CROP_STATE[i + (o ? 0 : 1)],
						a = this.mbSprite0[0];
					this.mbSprite0[0].active = !1, this.mbSprite0[1].active = !1, (!o && i > 0 || o && i > 1) && (n = 9, a = this.mbSprite0[1]), a.active = !0, "get" != e.layer ? this.mbSprite2.node.active = !o : this.mbSprite2.node.active = !0, this.m_showNode = a, window.Func._addSpritePic2(this.mbSprite2, "texture/tps/box1", "icon221_" + (i + 2 - (o ? 1 : 0)), !1);
					for (var s = 1; s <= n; s++)
						if (void 0 != a.getChildByName("Sprite" + s)) {
							a.getChildByName("Sprite" + s).active = !0;
							var d = window.Game.getCropSuiMaxLevel(t, s - 1) + 1;
							"get2" == e.layer ? d = Math.max(d, 1) : "get" == e.layer && e.key > 0 && e.pos + 1 == s && (d -= 1), window.Func._addSpritePic2(a.getChildByName("Sprite" + s).getComponent(cc.Sprite), "texture/tps/box1", "icon223_" + d, !1)
						} if (o) {
						var c = function() {
							for (var e = 1; e <= n; e++) void 0 != a.getChildByName("Sprite" + e) && (a.getChildByName("Sprite" + e).active = !1)
						};
						"get" == e.layer ? this.scheduleOnce(function() {
							c()
						}, 1) : "get2" != e.layer && c()
					}
					if (null != this.progress && (this.progress.node.active = !0, this.progress.progress = o ? 0 : window.Game.getCropScale(t)), null != this.iconSprite)
						if ("select" == e.layer)
							if (i >= 0) {
								this.iconSprite.active = !0;
								var l = window.Game.CROP_LEVEL_DOUBLE[i] * window.JsonManager.getData("Crops", e.farmId).Prod;
								this.iconLabel.string = "+" + window.Func.moneyChange(l)
							} else this.iconSprite.active = !1;
					else i > 0 ? (this.iconSprite.active = !0, this.iconLabel.string = "x" + window.Game.CROP_LEVEL_DOUBLE[i] + "00%") : this.iconSprite.active = !1;
					var p = Math.sqrt(n),
						u = new r.PieceLayer;
					if (this.mbSprite1.removeAllChildren(), u.create(p, this.mbSprite1, e, this), "get" != e.layer && "get2" != e.layer || (o && "get" == e.layer && i > 0 ? (this.node.getParent().getChildByName("cLabel") && (this.node.getParent().getChildByName("cLabel").active = !1), this.node.getParent().getChildByName("cLabel2") && (this.node.getParent().getChildByName("cLabel2").active = !0), this.showLabelContent = this.node.getParent().getChildByName("cLabel2"), this.showLabelContent && (this.showLabelContent.getChildByName("aLabel1").getComponent(cc.Label).string = window.Game.CROP_STATE_NAME[i], this.showLabelContent.getChildByName("aLabel2").getChildByName("aLabel").getComponent(cc.Label).string = window.Game.CROP_LEVEL_DOUBLE[i] + "00%")) : (this.node.getParent().getChildByName("cLabel") && (this.node.getParent().getChildByName("cLabel").active = !0), void 0 != this.node.getParent().getChildByName("cLabel2") && (this.node.getParent().getChildByName("cLabel2").active = !1), this.showLabelContent = this.node.getParent().getChildByName("cLabel"), "get" == e.layer && o && (this.showLabelContent.getComponent(cc.Label).string = "Nh\u1eadn" + window.Game.CROP_STATE_NAME[i])), this.node.getParent().getChildByName("tSprite") && (this.node.getParent().getChildByName("tSprite").scale = 0), this.node.getParent().getChildByName("Button") && (this.node.getParent().getChildByName("Button").active = !1), this.node.getParent().getChildByName("actionSprite") && (this.node.getParent().getChildByName("actionSprite").active = !1), this.showLabelContent && (this.showLabelContent.active = !1)), "get" == e.layer && (this.node.active = !1, this.node.getParent().getChildByName("action_panel").active = !1), this.node.getChildByName("newSprite") && (this.node.getChildByName("newSprite").active = !1, "list" == e.layer && window.Game2.getNewCropRed(t) && (this.node.getChildByName("newSprite").active = !0)), "get" == e.layer && o && 0 == i && window.Game2.addNewCropList(t), "select" == e.layer) {
						if (this.seedSprite) window.FileData.getFileData("marketCrop")[window.Game.SelectCropId] == t ? this.seedSprite.active = !0 : this.seedSprite.active = !1;
						this.node.getChildByName("szSprite") && 0 != window.IndexScene.getTaskValue() && window.IndexScene.getTaskValue() == t && (this.node.getChildByName("szSprite").active = !0, this.node.getChildByName("szSprite").rotation = 20, this.node.getChildByName("szSprite").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25, 0), cc.rotateBy(.5, 25, 0)))))
					}
				}, t.prototype.setShowNodeLock = function(e, t, i) {
					var o = this;
					if ("list" == i.layer || "select" == i.layer) window.Game.getCropSuiMaxLevel(i.farmId, e - 1) >= 0 ? t.active = !0 : t.active = !1;
					else if ("get" == i.layer)
						if (i.pos + 1 == e) {
							this.node.getParent().getChildByName("action_panel").active = !0, this.node.getParent().getChildByName("action_panel").scale = .5;
							var n = this.node.getParent().getChildByName("action_panel").getChildByName("sSprite2"),
								a = cc.instantiate(t);
							a.width = n.width - 10, a.height = n.height - 10, a.setPosition(-n.width / 2, -n.height / 2), n.addChild(a), this.node.getParent().getChildByName("action_panel").setPosition(0, 0), this.node.getParent().getChildByName("action_panel").runAction(cc.sequence(cc.spawn(cc.sequence(cc.scaleTo(.1, .6, .6), cc.scaleTo(.05, -.15, .6), cc.scaleTo(.05, .4, .6), cc.scaleTo(.05, -.4, .4), cc.scaleTo(.05, .5, .5)), cc.moveTo(.2, 0, 230)), cc.spawn(cc.scaleTo(.1, 1, 1), cc.moveBy(.2, 100, 0)), cc.scaleTo(.05, 1.3, 1.3), cc.spawn(cc.scaleTo(.05, 1, 1), cc.moveBy(.05, 20, -20)), cc.spawn(cc.scaleTo(.05, .6, .6), cc.moveBy(.05, 0, -30)), cc.spawn(cc.scaleTo(.05, .3, .3), cc.moveTo(.05, 0, 50), cc.fadeTo(.05, 150)), cc.spawn(cc.scaleTo(.05, .8, .8), cc.fadeTo(.1, 0)))), this.node.active = !0, this.node.opacity = 1, this.node.setPosition(-300, this.node.getPosition().y), this.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.moveTo(.15, 0, 30), cc.fadeTo(.15, 255)))), 0 == i.key && (t.active = !1), this.scheduleOnce(function() {
								t.active = !0, i.key > 0 && window.Func._addSpritePic2(this.m_showNode.getChildByName("Sprite" + (i.pos + 1)).getComponent(cc.Sprite), "texture/tps/box1", "icon223_" + (i.key + 1), !1), this.bool_sameLevel_open && (this.mbSprite2.node.active = !1), o.node.getParent().getChildByName("actionSprite").active = !0, o.node.getParent().getChildByName("actionSprite").runAction(cc.repeatForever(cc.rotateBy(7, 360))), o.node.getParent().getChildByName("tSprite").runAction(cc.sequence(cc.scaleTo(0, .3, 1), cc.scaleTo(.1, 1.2, 1), cc.scaleTo(.1, 1, 1), cc.callFunc(function() {
									o.showLabelContent.active = !0, o.showLabelContent.opacity = 0, o.showLabelContent.runAction(cc.fadeIn(.1))
								})))
							}, 1)
						} else - 1 == this.m_nowLevelKey && 0 == window.Game.getCropBoxFileData(i.farmId, 0, e - 1) ? t.active = !1 : t.active = !0;
					else if ("get2" == i.layer)
						if (i.pos + 1 == e) {
							if (t.active = !0, i.noshowaction) return;
							this.node.scaleX = -.07, this.node.scaleY = .8, this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.05, -.25, 1), cc.moveBy(.05, 0, 30)), cc.spawn(cc.scaleTo(.05, -.05, 1.2), cc.moveBy(.05, 0, 50)), cc.spawn(cc.scaleTo(.05, .3, 1.2), cc.moveBy(.05, 0, 20)), cc.scaleTo(.05, .5, 1.3), cc.spawn(cc.scaleTo(.05, -.03, 1.2), cc.moveBy(.05, 0, -30)), cc.spawn(cc.scaleTo(.05, .5, 1.1), cc.moveBy(.05, 0, -30)), cc.spawn(cc.scaleTo(.05, 1, 1), cc.moveBy(.05, 0, -20)), cc.moveBy(.1, 0, -10), cc.moveBy(.1, 0, -10), cc.callFunc(function() {
								o.node.getParent().getChildByName("actionSprite").active = !0, o.node.getParent().getChildByName("actionSprite").runAction(cc.repeatForever(cc.rotateBy(7, 360))), o.node.getParent().getChildByName("tSprite").runAction(cc.sequence(cc.scaleTo(0, .3, 1), cc.scaleTo(.1, 1.2, 1), cc.scaleTo(.1, 1, 1), cc.callFunc(function() {
									o.node.getParent().getChildByName("Button").active = !1, o.node.getParent().getChildByName("cLabel").active = !0, o.node.getParent().getChildByName("cLabel").opacity = 0, o.node.getParent().getChildByName("cLabel").runAction(cc.fadeIn(.1))
								})))
							})))
						} else t.active = !1
				}, __decorate([a(cc.Sprite)], t.prototype, "mbSprite", void 0), __decorate([a(cc.Node)], t.prototype, "mbSprite0", void 0), __decorate([a(cc.Node)], t.prototype, "mbSprite1", void 0), __decorate([a(cc.Sprite)], t.prototype, "mbSprite2", void 0), __decorate([a(cc.ProgressBar)], t.prototype, "progress", void 0), __decorate([a(cc.Node)], t.prototype, "progressSprite", void 0), __decorate([a(cc.Node)], t.prototype, "iconSprite", void 0), __decorate([a(cc.Label)], t.prototype, "iconLabel", void 0), __decorate([a(cc.Node)], t.prototype, "seedSprite", void 0), __decorate([a(Boolean)], t.prototype, "bool_sameLevel_open", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.PieceUiLayer = s, cc._RF.pop()
	}, {
		PieceLayer: "PieceLayer"
	}],
	PlaneCollect: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "451a6LfT8hJ/odmKoT4Osiw", "PlaneCollect"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hsLabel = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0), this.hsLabel.string = window.Func.moneyChange(window.FarmManager.getPlane_getAllCoin())
				}, t.prototype.updateUi = function() {}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "hsLabel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.PlaneCollect = r, cc._RF.pop()
	}, {}],
	PlaneLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "90c9d4q0v9EmZlgnQTgSiYw", "PlaneLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.PlaneObj = null, t.timeOutLabel = null, t.cLabel = null, t.m1_cLabel = null, t.m1_btObj = null, t.m2_btObj = null, t.m_dtime = 10, t.adId1 = 3, t.adId2 = 4, t.m_hxtime = 0, t
				}
				return __extends(t, e), t.prototype.start = function() {
					this.reloadUi(), window.Game.windowMoveAction(this.node.getChildByName("panel1").getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.reloadUi = function() {
					var e = window.FileData.getFileData("runPlaneTime"),
						t = Math.floor(((new Date).getTime() - e) / 1e3),
						i = 0;
					"number" == typeof e && e > 0 && t < 14400 && (i = 14400 - t), this.m_hxtime = i, this.m2_btObj.active = !1, this.m1_btObj.active = !1, i > 0 ? (this.m1_cLabel.node.active = !0, this.m1_cLabel.string = "\u0110\u1ebfm ng\u01b0\u1ee3c\uff1a" + window.Func.timestampToTime3(14400 - t)) : this.m1_cLabel.node.active = !1, 0 == i ? (this.m2_btObj.active = !0, window.Game2.hideAdBtIcon(this.m2_btObj)) : window.Game2.ifEnoughPlayAd(this.adId2) ? (this.m1_btObj.active = !1, this.m2_btObj.active = !0) : window.Game2.ifEnoughPlayShare(this.adId2, window.Constant.shareIdList.PLANECD) && (this.m1_btObj.active = !0, this.m2_btObj.active = !1)
				}, t.prototype.update = function() {
					window.IndexScene.curFrame % window.Constant.GameFrame == 0 && this.reloadUi()
				}, t.prototype.BtClick = function() {
					var e = this;
					0 == this.m_hxtime ? this.BtOpen() : window.Game2.ifEnoughPlayAd(this.adId2) ? window.WxFunc.OpenAd(0 == this.m_hxtime ? this.adId1 : this.adId2, function() {
						window.FileData.setFileData("runPlaneTime", 0), e.reloadUi()
					}) : window.Game2.ifEnoughPlayShare(this.adId2, window.Constant.shareIdList.PLANECD) && window.WxFunc.createShare(window.Constant.shareIdList.PLANECD, function() {
						window.FileData.setFileData("runPlaneTime", 0), e.reloadUi()
					})
				}, t.prototype.BtOpen = function() {
					window.FileData.setFileData("runPlaneTime", (new Date).getTime()), window.IndexScene.SetMType(3), window.FarmManager.resetPlane_getAllCoin();
					var e = window.FileHelper.getTaskFinishFileData(3, 5);
					window.FileHelper.setTaskFinishFileData(3, 5, e + 1), this.BtClose()
				}, t.prototype.clearData = function() {
					window.FileData.setFileData("runPlaneTime", (new Date).getTime()), window.IndexScene.SetMType(1), window.IndexScene.setBtPanelShow(!0)
				}, t.prototype.BtClose = function(e, t) {
					if (void 0 === e && (e = null), void 0 === t && (t = 0), 1 != t) {
						var i = this;
						window.Game.windowMoveAction(this.node.getChildByName("panel1").getChildByName("bgSprite"), 2, function() {
							i.node.removeFromParent(!0)
						})
					} else this.node.removeFromParent(!0)
				}, __decorate([a(cc.Node)], t.prototype, "PlaneObj", void 0), __decorate([a(cc.Label)], t.prototype, "timeOutLabel", void 0), __decorate([a(cc.Label)], t.prototype, "cLabel", void 0), __decorate([a(cc.Label)], t.prototype, "m1_cLabel", void 0), __decorate([a(cc.Node)], t.prototype, "m1_btObj", void 0), __decorate([a(cc.Node)], t.prototype, "m2_btObj", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.PlaneLayer = r, cc._RF.pop()
	}, {}],
	PlayAd: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "6b8bfe5DlRBGZw/At5KtE4x", "PlayAd"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.start = function() {
					this.videoAd = null, this.only1 = !0, this.only2 = !0, this.bannerPlayTimes = 0, this.initBannerAd()
				}, t.prototype.initBannerAd = function(e) {
					void 0 === e && (e = !1)
				}, t.prototype.crateAd = function(e, t) {
					this.only1 && cc.sys.platform === cc.sys.WECHAT_GAME && (this.m_id = e, this.m_func = t, this.only1 = !1, this.createVideo(this), this.loadVideo())
				}, t.prototype.createBannerAd = function() {
					null == this.bannerAd || window.Constant.bannerClose || (this.bannerPlayTimes++, this.bannerAd.show().catch(function(e) {
						return console.log("bannerAd show err", e)
					}))
				}, t.prototype.hideBannerAd = function() {
					null != this.bannerAd && this.bannerAd.hide(), null == this.bannerAd && this.initBannerAd(!0)
				}, t.prototype.onDestory = function() {
					this.releaseVideo()
				}, t.prototype.isCanShowVideo = function() {
					var e = !1;
					if (cc.sys.platform === cc.sys.WECHAT_GAME) {
						var t = wx.getSystemInfoSync().SDKVersion;
						1 == window.Config.Step && -1 === window.Func.compareVersion(t, "2.0.4") ? (console.log("=====Version chưa đủ2.0.4\uff0cQC video không dùng được"), window.Game.showAlertBar("Version chưa đủ2.0.4\uff0cQC video không dùng được")) : e = !0
					}
					return e
				}, t.prototype.createVideo = function(e) {
					if (this.isCanShowVideo()) {
						if (!this.videoAd) {
							var t = window.Constant.adKeyList[this.m_id];
							void 0 == t && (t = window.Constant.adKeyList[1]), 2 == window.Config.Step && (t = window.Constant.adKeyTTList[0]), console.log("createVideo2 ", t), this.videoAd = wx.createRewardedVideoAd({
								adUnitId: t
							})
						}
						this.videoAd.bind_this = e, this.videoAd.onClose(this.adSuccessPlay), this.videoAd.onError(function(e) {
							console.log("videoAd.onError", e, JSON.stringify(e)), "no advertisement" == e.errMsg && window.WxFunc.setAdFileData(0, 8), window.WxFunc.adClass.afterLookVideo(0), window.Game.showAlertBar("H\u1ebft l\u01b0\u1ee3t QC trong khung gi\u1edd n\u00e0y\uff0cĐợi QCl\u01b0\u1ee3tL\u00e0m m\u1edbisau \u0111\u00f3Xem!")
						})
					}
				}, t.prototype.releaseVideo = function() {
					this.isCanShowVideo() && this.videoAd && this.videoAd.bind_this && (this.videoAd.offClose(this.adSuccessPlay), this.videoAd.bind_this = null)
				}, t.prototype.loadVideo = function() {
					var e = this;
					this.isCanShowVideo() && (window.IndexScene.bgMusicId > 0 && cc.audioEngine.pause(window.IndexScene.bgMusicId), this.videoAd.load().then(function() {
						return e.videoAd.show().catch(function(e) {
							return console.log("ad error : ", e)
						})
					}))
				}, t.prototype.adSuccessPlay = function(e) {
					var t = wx.getSystemInfoSync().SDKVersion;
					(1 == window.Config.Step && -1 === window.Func.compareVersion(t, "2.1.0") ? (console.log("Xem h\u1ebft QC1"), window.WxFunc.adClass.afterLookVideo(-1)) : (console.log("Xem h\u1ebft QC2:", e), e && e.isEnded || void 0 === e ? (console.log("Xem h\u1ebft QC3"), window.WxFunc.adClass.afterLookVideo(1)) : (console.log("Xem h\u1ebft QC4"), window.WxFunc.adClass.afterLookVideo(0))), window.IndexScene.bgMusicId > 0) && (2 == cc.audioEngine.getState(window.IndexScene.bgMusicId) && cc.audioEngine.resume(window.IndexScene.bgMusicId));
					window.WxFunc.adClass.videoAd.offClose(window.WxFunc.adClass.adSuccessPlay)
				}, t.prototype.afterLookVideo = function(e) {
					void 0 === e && (e = 0), this.only2 && (this.only2 = !1, console.log("\u5173-Xem hết QC"), 1 == e && null != this.m_func && this.m_func(), this.scheduleOnce(function() {
						this.only1 = !0, this.only2 = !0, console.log("Tắt QC-reset")
					}, .5))
				}, t = __decorate([n], t)
			}(cc.Component));
		i.PlayAd = a, cc._RF.pop()
	}, {}],
	PointConvertUtil: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "30d950MHytLFJncOYUDDA2J", "PointConvertUtil"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function() {
				function e() {}
				return e.prototype.localConvertWorldPointAR = function(e) {
					return e ? e.convertToWorldSpaceAR(cc.v2(0, 0)) : null
				}, e.prototype.localConvertWorldPoint = function(e) {
					return e ? e.convertToWorldSpace(cc.v2(0, 0)) : null
				}, e.prototype.worldConvertLocalPointAR = function(e, t) {
					return e ? e.convertToNodeSpaceAR(t) : null
				}, e.prototype.worldConvertLocalPoint = function(e, t) {
					return e ? e.convertToNodeSpace(t) : null
				}, e.prototype.convetOtherNodeSpace = function(e, t) {
					if (!e || !t) return null;
					var i = this.localConvertWorldPoint(e);
					return this.worldConvertLocalPoint(t, i)
				}, e.prototype.convetOtherNodeSpaceAR = function(e, t) {
					if (!e || !t) return null;
					var i = this.localConvertWorldPointAR(e);
					return this.worldConvertLocalPointAR(t, i)
				}, e = __decorate([n], e)
			}());
		i.PointConvertUtil = a, cc._RF.pop()
	}, {}],
	RankLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "da834vobtVJ0oAz4M5cXrSE", "RankLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ScrollViewObj = null, t.PanelObj = null, t.TopBtObjList = [], t.DownBtObjList = [], t.DownBtObjList2 = [], t.mType = 2, t.mStep = 1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !1), this.ScrollViewObj.getParent().getChildByName("wxcontent").active = !1, window.Func.isHideWxUi() ? (this.node.getChildByName("bgSprite").getChildByName("downBt_panel").active = !1, this.node.getChildByName("bgSprite").getChildByName("downBt_panel2").active = !0) : (this.node.getChildByName("bgSprite").getChildByName("downBt_panel").active = !0, this.node.getChildByName("bgSprite").getChildByName("downBt_panel2").active = !1)
				}, t.prototype.updateUi = function() {
					for (var e = 0; e < 3; e++) {
						this.TopBtObjList[e].getPosition();
						window.Func._addSpritePic2(this.TopBtObjList[e].getComponent(cc.Sprite), "texture/tps/common", "bt1_" + (e + 1) + (this.mType == e + 1 ? "_2" : "_1"), !1)
					}
					if (window.Func.isHideWxUi()) {
						this.DownBtObjList2[0].active = !1;
						for (e = 0; e < 3; e++) this.mStep != e + 1 ? this.DownBtObjList2[e].getComponent(cc.Sprite).spriteFrame = null : window.Func._addSpritePic2(this.DownBtObjList2[e].getComponent(cc.Sprite), "texture/tps/common", "bt_t5_2_" + (1 == e ? 4 : 1), !1)
					} else
						for (e = 0; e < 3; e++) this.mStep != e + 1 ? this.DownBtObjList[e].getComponent(cc.Sprite).spriteFrame = null : window.Func._addSpritePic2(this.DownBtObjList[e].getComponent(cc.Sprite), "texture/tps/common", "bt_t5_2_" + (1 == e ? 4 : 0 == e ? 1 : 2), !1);
					this.node.getChildByName("bgSprite").getChildByName("tSprite").getChildByName("Label").getComponent(cc.Label).string = 1 == this.mStep ? "BXH b\u1ea1n b\u00e8" : 2 == this.mStep ? "BXH th\u1ebf gi\u1edbi\u699c" : "Th\u00e0nh ph\u1ed1BXH"
				}, t.prototype.createRank = function(e, t) {
					void 0 === t && (t = 2), this.mType = t, window.Func.isHideWxUi() && 1 == this.mStep && (this.mStep = 3), window.WxFunc.sendPost(0), 1 == this.mStep ? (this.ScrollViewObj.active = !1, this.ScrollViewObj.getParent().getChildByName("wxcontent").active = !1, this.PanelObj.active = !1, this.scheduleOnce(function() {
						this.mStep = 0, this.BtChangeDown(null, 1)
					}, .3)) : 2 != this.mStep && 3 != this.mStep || (this.ScrollViewObj.getComponent("RankScrollLayer").create(e.rankList), void 0 != e.myRankInfo && void 0 != e.myRankInfo.uid ? (this.PanelObj.active = !0, window.Game.reloadRankData(e.myRankInfo, this.PanelObj)) : (window.FileData.saveFileData(!0), this.PanelObj.active = !1)), this.updateUi()
				}, t.prototype.addRank = function(e, t, i, o) {
					o == this.mType && this.ScrollViewObj.getComponent("RankScrollLayer").addRecvData(e.rankList)
				}, t.prototype.BtChange = function(e, t) {
					t = parseInt(t), cc.log("BtChangeBtChange " + t + " " + this.mType), t != this.mType && (this.mType = t, 1 == this.mStep ? this.reloadWxRank() : window.Game.createRankWindow(1, 50, t, this.mStep))
				}, t.prototype.reloadWxRank = function() {
					window.WxFunc.sendPost(this.mType), this.updateUi()
				}, t.prototype.BtChangeDown = function(e, t) {
					if ((t = parseInt(t)) != this.mStep)
						if (this.mType = 2, 1 == t) this.mStep = 1, this.reloadWxRank(), this.ScrollViewObj.active = !1, this.ScrollViewObj.getParent().getChildByName("wxcontent").active = !0, this.PanelObj.active = !1;
						else {
							var i = this,
								o = function() {
									i.mStep = t, i.ScrollViewObj.getParent().getChildByName("wxcontent").active = !1, i.PanelObj.active = !0, i.ScrollViewObj.active = !0, window.Game.createRankWindow(1, 50, i.mType, i.mStep)
								};
							if (2 == t) {
								var n = window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_gold"));
								if (0 == n || n < window.Func.moneyChange2(window.JsonManager.getData("OpenFarm", 9).Money)) return void window.Game.showAlertBar("H\u00e3yM\u1edf kh\u00f3aô thứ 9\u00d4 \u0111\u1ea5t\uff01");
								o()
							} else 3 == t && (window.WxLogin.getAddress(function() {}), o())
						}
				}, t.prototype.BtClose = function() {
					window.Game2.TyNodeList["friend/friendlist_window"] && (window.Game2.TyNodeList["friend/friendlist_window"].active = !0);
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						window.Game.m_rank_windowObj = null, e.node.removeFromParent(!0)
					}), window.WxFunc.sendPost(0)
				}, __decorate([a(cc.Node)], t.prototype, "ScrollViewObj", void 0), __decorate([a(cc.Node)], t.prototype, "PanelObj", void 0), __decorate([a(cc.Node)], t.prototype, "TopBtObjList", void 0), __decorate([a(cc.Node)], t.prototype, "DownBtObjList", void 0), __decorate([a(cc.Node)], t.prototype, "DownBtObjList2", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.RankLayer = r, cc._RF.pop()
	}, {}],
	RankPrefab: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "cfd99X83OdIR5lCxu1KCgr/", "RankPrefab"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_data = null, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.updateView = function(e, t, i) {
					if (void 0 != t)
						if (this.m_data = t, window.Game.reloadRankData(t, this.node), t.uid != window.Data.UId) {
							this.node.getChildByName("Button").active = !0;
							var o = this.node.getComponent(cc.Button);
							if (0 == o.clickEvents.length) {
								var n = new cc.Component.EventHandler;
								n.target = this.node, n.component = "RankPrefab", n.handler = "BtLook", n.customEventData = "" + e, o.clickEvents.push(n)
							} else o.clickEvents[0].customEventData = "" + e
						} else this.node.getChildByName("Button").active = !1
				}, t.prototype.addSyncData = function(e, t, i, o) {
					window.Game.createRankWindow(e, t, i, o)
				}, t.prototype.BtLook = function(e, t) {
					this.m_data.step = 3, window.Game2.LookFriendScene(this.m_data)
				}, t = __decorate([n], t)
			}(cc.Component));
		i.default = a, cc._RF.pop()
	}, {}],
	RankScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "17688TJ/F1GX7kYBlsZAyQ9", "RankScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_data = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					this.openTouch()
				}, t.prototype.create = function(e) {
					this.m_data = e, this.initCellDataList(this.m_data), this.createCellList()
				}, t.prototype.addRecvData = function(e) {
					for (var t = 0; t < e.length; t++) this.m_data.push(e[t]);
					this.initCellDataList(this.m_data)
				}, t = __decorate([n], t)
			}(e("../BaseScrollView").BaseScrollView));
		i.default = a, cc._RF.pop()
	}, {
		"../BaseScrollView": "BaseScrollView"
	}],
	ReapFinishLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "760be/PEa1EuJ4RY/grUVM+", "ReapFinishLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.effectSpr = null, t.getNum = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.init = function() {}, t.prototype.updateUi = function() {
					this.effectSpr.stopAllActions(), this.effectSpr.runAction(cc.repeatForever(cc.rotateBy(7, 360))), this.getNum.string = window.Game2.getTitleName()
				}, t.prototype.onBtnCloseReapFinishLayer = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "effectSpr", void 0), __decorate([a(cc.Label)], t.prototype, "getNum", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.default = r, cc._RF.pop()
	}, {}],
	RedPointMgr: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f0834fcYj5H7ZSK4S/pH+U0", "RedPointMgr"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = e("./../task/TaskWindow"),
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isUpdateSevenDay = !0, t.owner = null, t.redHttpList = [], t.TaskWindowLayer = null, t.TaskIndexData = null, t.TaskProgress = 0, t.clickTurnning = !1, t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					this.TaskWindowLayer = new r.TaskWindow, this.redHttpList = [], this.owner = e, this.reloadPackageBt(), this.ifShowFreeGetGold(), this.setShowTurnning(!1), this.scheduleOnce(function() {
						this.reloadTask()
					}, 70)
				}, t.prototype.clear = function() {
					this.unscheduleAllCallbacks()
				}, t.prototype.createCropOut = function() {
					this.owner.ifOpenFreeGetDiam(), this.ifShowFreeGetGold()
				}, t.prototype.mUpdate = function() {
					if (this.owner.curFrame > 0 && this.owner.curFrame % 120 && this.owner.node.getChildByName("panel").active) {
						this.owner.node.getChildByName("panel").getChildByName("Button6").active = window.Game2.OpenFunction(8);
						var e = window.FileData.getFileData("createfarm5"),
							t = this.owner.node.getChildByName("bt_panel2").getChildByName("changeModel").getChildByName("btKeji").getChildByName("Sprite"),
							i = window.FarmManager.getToolList(1);
						void 0 != i && i.length > 0 && i[0].coin <= window.Data.getGold() ? t.active = !0 : t.active = !1;
						var o = this.owner.node.getChildByName("bt_panel3").getChildByName("Button2").getChildByName("Sprite");
						if (this.isUpdateSevenDay && "number" == typeof e) {
							var n = window.FileData.getFileData("SevenDaysGetTime"),
								a = window.FileData.getFileData("activity_addScene");
							"number" != typeof n || window.Func.timestampToTime5(n) != window.Func.timestampToTime5(window.Data.nowServerLoginTime) || 0 == a || 1 != a && window.Func.isQuarrySceenToMy() ? o.active = !0 : (this.isUpdateSevenDay = !1, o.active = !1)
						} else o.active = !1;
						var r = this.owner.node.getChildByName("bt_panel2").getChildByName("changeModel").getChildByName("Button0").getChildByName("Sprite");
						this.getCropLevelData() ? r.active = !0 : r.active = !1;
						t = this.owner.node.getChildByName("bt_panel2").getChildByName("changeModel").getChildByName("cropBt").getChildByName("Sprite");
						window.Game2.ifShowBoxRedPoint() || window.Game2.countNewCrop() > 0 ? t.active = !0 : t.active = !1;
						var s = this.owner.node.getChildByName("panel").getChildByName("Button6").getChildByName("Sprite"),
							d = window.FileData.getFileData("runPlaneTime"),
							c = Math.floor(((new Date).getTime() - d) / 1e3);
						"number" == typeof d && d > 0 && c < 14400 && !window.Game2.ifEnoughPlayAd(4) ? s.active = !1 : s.active = !0;
						var l = this.owner.node.getChildByName("bt_panel1").getChildByName("Button2");
						if (l.active = window.Game2.OpenFunction(10), l.active) {
							var p = window.FileData.getFileData("nowSceneId");
							"number" != typeof p && (p = 1), p += 1;
							var u = window.JsonManager.getData("MoveLand", p),
								h = window.FileData.getFileData("getNowSeedTimes");
							"number" != typeof h && (h = 0);
							var w = window.FileData.getFileData("LastSceneMoveSeedNum");
							"number" == typeof w && (h = Math.max(0, h - w)), void 0 != u && h >= u.HarvestTimes && window.Data.getSeed() >= window.Func.moneyChange2(u.SeedNum) && window.Data.getGold() >= window.Func.moneyChange2(u.GoldNum) ? l.getChildByName("Sprite").active = !0 : l.getChildByName("Sprite").active = !1
						}
						var m = this.owner.node.getChildByName("panel").getChildByName("car");
						if (m.active) {
							var g = !window.Game2.getCarSGTime(this.owner.m_http_data[window.Constant.shareIdList.FAIR])[0];
							m.getChildByName("Sprite").active = g
						}
						var f = this.owner.node.getChildByName("bt_panel1").getChildByName("Button4");
						if (f.active) {
							var y = window.FileData.getFileData("openHelperTimes");
							f.getChildByName("Sprite").active = "number" != typeof y
						}
						var v = this.owner.node.getChildByName("bt_panel1").getChildByName("Button5");
						if (v.active && "number" == typeof e) {
							y = window.FileData.getFileData("title_award");
							v.getChildByName("Sprite").active = 0 == y
						}
						var C = this.owner.node.getChildByName("bt_panel1").getChildByName("Button3");
						if (C.active = window.Game2.OpenFunction(6), C.active) {
							var _ = window.FileData.getFileData("package_count"),
								S = window.JsonManager.getData("InviteGift", _);
							if (void 0 == S) this.reloadPackageBt();
							else {
								var b = window.Game2.getPacketRedPoint(this.owner.m_http_old_data);
								void 0 != b && S.InviteNum <= b.length ? C.getChildByName("Sprite").active = !0 : C.getChildByName("Sprite").active = !1
							}
						}
						if (!window.Config.isLooking) {
							var F = this.ifCBTRed(),
								N = this.owner.node.getChildByName("bt_panel3").getChildByName("Button9");
							N.active = window.Game2.OpenFunction(4), N.active && (N.active ? 1 == F ? N.getChildByName("Sprite").active = !0 : 2 == F ? N.active = !1 : N.getChildByName("Sprite").active = !1 : 2 != F && (N.active = !0)), this.owner.node.getChildByName("bt_panel3").getChildByName("Button4").active = !(window.Config.Step > 2) && window.Game2.OpenFunction(7), this.owner.node.getChildByName("bt_panel3").getChildByName("Button11").active = window.Game2.OpenFunction(9)
						}
						var B = this.owner.node.getChildByName("panel").getChildByName("Button2");
						B.active && (this.redHttpList[window.Constant.NOTICE_KEY.MAIL] ? B.getChildByName("Sprite").active = !0 : B.getChildByName("Sprite").active = !1), this.getShowTurnning() && !window.Game2.OpenFunction(5) ? this.setShowTurnning(!1) : !this.getShowTurnning() && window.Game2.OpenFunction(5) && this.setShowTurnning(!0);
						var L = this.owner.node.getChildByName("bt_panel3").getChildByName("Button1");
						if (L.active) {
							var D = window.FileData.getTURNFileData("downtime"),
								T = window.FileData.getTURNFileData("times"),
								x = window.Func.getTimeUnix();
							T > 0 || x - D > 3600 * window.JsonManager.getData("Variable", 20).Value ? L.getChildByName("Sprite").active = !0 : L.getChildByName("Sprite").active = !1, window.Data.isNewAccount && !this.clickTurnning && window.IndexScene._IndexHelper.getSzShowState("turnning") && !window.FarmManager.getFarmSZActionShow() ? (window.Game2.setTyRedPointState("turnning", !0), L.getChildByName("szSprite").active || window.Game2.playSzAction(L), L.getChildByName("szSprite").active = !0) : (window.Game2.setTyRedPointState("turnning", !1), L.getChildByName("szSprite").active = !1)
						}
						var I = this.owner.node.getChildByName("bt_panel1").getChildByName("Button6");
						I.active && (this.redHttpList[window.Constant.NOTICE_KEY.FRIEND] ? I.getChildByName("Sprite").active = !0 : I.getChildByName("Sprite").active = !1);
						var P = this.owner.node.getChildByName("panel").getChildByName("Button1");
						P.active && (this.redHttpList[window.Constant.NOTICE_KEY.HEART_LOG] ? P.getChildByName("Sprite").active = !0 : P.getChildByName("Sprite").active = !1);
						var M = this.owner.node.getChildByName("bt_panel1").getChildByName("Button7");
						M.active && (M.getChildByName("Sprite").active = "number" == typeof e), window.Func.isHideWxUi() && window.Config.isLooking || (this.reloadTaskRed(), this.reloadTaskSz())
					}
				}, t.prototype.reloadPackageBt = function() {
					if (window.Config.Step > 2) this.owner.node.getChildByName("bt_panel1").getChildByName("Button3").active = !1;
					else {
						var e = window.FileData.getFileData("package_count"),
							t = window.JsonManager.getData("InviteGift", e);
						if (e > window.JsonManager.getTable("InviteGift").length && (this.owner.node.getChildByName("bt_panel1").getChildByName("Button3").active = !1), void 0 != t && void 0 != t.Name) {
							var i = this.owner.node.getChildByName("bt_panel1").getChildByName("Button3").getChildByName("Sprite2").getComponent(cc.Sprite);
							window.Func._addSpritePic2(i, "texture/tps/index", "icon31_" + e)
						}
					}
				}, t.prototype.getCropLevelData = function() {
					for (var e = 1; e < window.FarmManager.farms.length; e++) {
						if (void 0 != (t = window.FarmManager.farms[e]) && t.isCreate() && t._SecretClass.getCurLevel() > 100) return !1
					}
					for (e = 1; e < window.FarmManager.farms.length; e++) {
						var t;
						if (void 0 != (t = window.FarmManager.farms[e]) && t.isCreate() && window.Data.getGold() >= t._FarmData.getUpCoin()) return !0
					}
					return !1
				}, t.prototype.ifShowFreeGetGold = function(e) {
					void 0 === e && (e = !1);
					var t = window.FileData.getFileData("FreeGetGoldId");
					"number" != typeof t && (t = 0);
					for (var i = !0, o = window.JsonManager.getTable("FreeGold"), n = 0; n < o.length; n++) {
						var a = o[n];
						if (t < a.Id && window.FarmManager.isCreateCrop(a.Id)) {
							this.scheduleOnce(function() {
								"number" != typeof(t = window.FileData.getFileData("FreeGetGoldId")) && (t = 0), t < a.Id && this.setShowFreeGetGold(!0)
							}, 10), i = !1;
							break
						}
					}(i || e) && this.setShowFreeGetGold(!1)
				}, t.prototype.setShowFreeGetGold = function(e) {
					this.owner.node.getChildByName("bt_panel3").getChildByName("Button8").active = !1
				}, t.prototype.setShowTurnning = function(e) {
					this.owner.node.getChildByName("bt_panel3") && this.owner.node.getChildByName("bt_panel3").getChildByName("Button1") && (this.owner.node.getChildByName("bt_panel3").getChildByName("Button1").active = e)
				}, t.prototype.getShowTurnning = function() {
					return this.owner.node.getChildByName("bt_panel3").getChildByName("Button1").active
				}, t.prototype.getShowFreeGetGold = function() {
					return this.owner.node.getChildByName("bt_panel3").getChildByName("Button8").active
				}, t.prototype.getMoveSceneRed = function() {
					return this.owner.node.getChildByName("bt_panel1").getChildByName("Button2").getChildByName("Sprite").active
				}, t.prototype.ifCBTRed = function() {
					for (var e = 0, t = 0, i = window.FileData.getFileData(), o = 0; o < window.Constant.CBT_BOX_NUM; o++) {
						var n = 0;
						if (void 0 != i.cbt && void 0 != i.cbt[o] && (n = i.cbt[o]), 1 == n) {
							e = 1;
							break
						}
						2 == n && t++
					}
					if (t == window.Constant.CBT_BOX_NUM && (e = 2), 0 == e) {
						var a = 0;
						void 0 != (i = window.FileData.getFileData()).cbt && void 0 != i.cbt.shareTime && (a = i.cbt.shareTime), a > 0 && window.Func.getTimeUnix() - a < window.Constant.CBT_CD_TIME && window.Func.getTimeUnix() - a > 0 || (e = 1)
					}
					return e
				}, t.prototype.sendRedPointHttp = function() {
					var e = this;
					window.NetHelper.sendNoticeGetResponse(function(t) {
						if (void 0 != t.commonNoticeList && t.commonNoticeList.length > 0)
							for (var i = 0; i < t.commonNoticeList.length; i++) {
								var o = t.commonNoticeList[i];
								e.setRedPointHttp(o.noticeKey, o.state)
							}
						t.commonTopNoticeList && t.commonTopNoticeList.length > 0 && window.IndexScene._IndexHelper.setNoticeData(t.commonTopNoticeList)
					})
				}, t.prototype.setRedPointHttp = function(e, t) {
					this.redHttpList[e] = t
				}, t.prototype.reloadTaskRed = function(e) {
					void 0 === e && (e = !1);
					var t = this.owner.node.getChildByName("bt_panel2").getChildByName("changeModel").getChildByName("Button1");
					if (t.active) {
						var i = this.TaskWindowLayer.getIndexShowTask();
						i[0] ? t.getChildByName("Sprite").active = !0 : t.getChildByName("Sprite").active = !1, (1 != this.TaskProgress || e) && this.reloadTask(i[1])
					}
				}, t.prototype.reloadTask = function(e) {
					if (void 0 === e && (e = null), !window.Func.isHideWxUi() || !window.Config.isLooking) {
						if (null == e) e = this.TaskWindowLayer.getIndexShowTask()[1];
						this.TaskIndexData = [], this.TaskProgress = 0;
						var t = this.owner.node.getChildByName("bt_panel3").getChildByName("Button10"),
							i = t.getChildByName("Sprite1");
						null == e ? t.active = !1 : (t.active = !0, i.getChildByName("ProgressBar").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(e.taskVal) + "/" + window.Func.moneyChange(e.TaskValue2), i.getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = e.finish2, i.getChildByName("nLabel").getComponent(cc.Label).string = e.Name, i.getChildByName("rLabel").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(e.Num), window.Func._addSpritePic2(i.getComponent(cc.Sprite), "texture/tps/index", "icon40_" + (1 == e.finish2 ? 2 : 1), !1), window.Func._addSpritePic2(i.getChildByName("rLabel").getChildByName("cSprite").getComponent(cc.Sprite), "texture/tps/common", "sm_" + e.Type, !1), this.TaskProgress = e.finish2, this.TaskIndexData = e, this.reloadTaskSz())
					}
				}, t.prototype.reloadTaskSz = function() {
					var e = this.owner.node.getChildByName("bt_panel3").getChildByName("Button10");
					if (e.active) {
						var t = this.TaskIndexData,
							i = window.FileData.getFileData("guideStep"),
							o = "number" != typeof window.FileData.getFileData("createfarm5") && window.IndexScene._IndexHelper.getSzShowState("task") && !window.FarmManager.getFarmSZActionShow() && i > 10 && !this.owner.isNotShowLayer2(),
							n = 1 == t.finish2;
						if (o && !n)
							if (2 == t.TaskType) {
								var a = window.JsonManager.getData("OpenFarm", t.TaskValue1);
								a && window.FarmManager.isCreateCrop(t.TaskValue1) && window.Data.getGold() >= window.Func.moneyChange2(a.AutoUnlock) && (n = !0)
							} else if (3 == t.TaskType) {
							var r = window.FarmManager.getFarmToLevelCoin(t.TaskValue1, t.TaskValue2);
							window.Data.getGold() >= r && (n = !0)
						}
						o && n ? (e.getChildByName("szSprite").active || window.Game2.playSzAction(e), e.getChildByName("szSprite").active = !0, window.Game2.setTyRedPointState("task", !0)) : (window.Game2.setTyRedPointState("task", !1), e.getChildByName("szSprite").active = !1)
					}
				}, t.prototype.getTaskIndexAward = function() {
					if (1 == this.TaskProgress && null != this.TaskIndexData) this.TaskWindowLayer.getTaskAward(this.TaskIndexData), this.reloadTaskRed(!0);
					else {
						var e = this;
						this.TaskWindowLayer.goTask(this.TaskIndexData, function() {
							e.reloadTaskRed(!0)
						})
					}
				}, __decorate([a(Boolean)], t.prototype, "isUpdateSevenDay", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.RedPointMgr = s, cc._RF.pop()
	}, {
		"./../task/TaskWindow": "TaskWindow"
	}],
	RuleWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "21349nj9qtDw5cdIsVXxVLg", "RuleWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.panelList = [], t.contentObj = null, t.scrollView = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					void 0 === e && (e = []);
					for (var t = e, i = -this.panelList[0].height / 2, o = 0; o < t.length; o++) {
						var n = t[o];
						console.log("listlistlistlist", JSON.stringify(n));
						var a = cc.instantiate(this.panelList[0]);
						a.setPosition(0, i), this.contentObj.addChild(a), a.getChildByName("tLabel").getComponent(cc.Label).string = n.Tilte, i += -(a.height / 2 + 15);
						var r = cc.instantiate(this.panelList[1]);
						r.getComponent(cc.RichText).string = "<color=#BF6C0C>" + (n.Content || "") + "</c>", this.contentObj.addChild(r), i += -r.height / 2 + 10, r.setPosition(0, i), i += -(r.height / 2 + 15), i += -10
					}
					i = Math.abs(i) + 20, this.contentObj.setContentSize(this.contentObj.width, i), this.contentObj.setPosition(this.contentObj.x, i / 2), this.node.stopAllActions(), this.scrollView.scrollToTop(.1)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "panelList", void 0), __decorate([a(cc.Node)], t.prototype, "contentObj", void 0), __decorate([a(cc.ScrollView)], t.prototype, "scrollView", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.RuleWindow = r, cc._RF.pop()
	}, {}],
	ScarecrowWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "2b943p9oAZP14n7qip3QO5n", "ScarecrowWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.panelList = [], t.scoreLabelList = [], t.maxXinSprite = null, t.peopleNum = 10, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					e.heartNum = "number" != typeof e.heartNum ? 0 : e.heartNum, e.list = e.list || [], console.log("_data.list", JSON.stringify(e.list));
					for (var t = 0; t < this.peopleNum; t++) {
						this.panelList[t] = this.node.getChildByName("bgSprite").getChildByName("bSprite1").getChildByName("Sprite" + (t + 1)), this.panelList[t].getChildByName("wSprite1").getChildByName("Sprite").active = !1;
						var i = !1;
						if (void 0 != e.list && e.list[t]) {
							var o = e.list[t];
							if (void 0 != o && void 0 != o.uid) {
								if (this.panelList[t].getChildByName("wSprite1").getChildByName("Sprite").active = !0, void 0 != o.avatar) {
									var n = this.panelList[t].getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite);
									window.Func._addProtoPic(o.avatar, n, 67, 68)
								}
								i = !0, 0
							}
						}
						window.Func._addSpritePic2(this.panelList[t].getComponent(cc.Sprite), "texture/tps/window1_1", "icon13_" + (i ? e.heartNum >= 0 ? 2 : 3 : 1), !1)
					}
					window.Func._addSpritePic2(this.maxXinSprite, "texture/tps/window1_1", "icon13_" + (e.heartNum >= 0 ? 2 : 3), !1), this.scoreLabelList[0].string = "X" + Math.abs(e.heartNum), this.scoreLabelList[1].string = window.Constant.DCR_DOUBLE * e.heartNum + "%";
					var a = window.FileData.getFileData("nowSceneId");
					"number" != typeof a && (a = 1);
					var r = window.JsonManager.getData("MoveLand", a);
					void 0 != r && (this.scoreLabelList[2].string = r.Add + "00%"), window.Game2.setShareResultFileData(window.Constant.shareIdList.DCR, e.heartNum), this.reloadRedPoint(), window.IndexScene._IndexHelper.reloadDCRUi()
				}, t.prototype.reloadRedPoint = function() {
					this.node.getChildByName("bgSprite").getChildByName("Button2").getChildByName("Sprite").active = window.IndexScene._RedPointMgr.redHttpList[window.Constant.NOTICE_KEY.HEART_LOG]
				}, t.prototype.BtShare = function() {
					window.WxFunc.createShare(window.Constant.shareIdList.DCR)
				}, t.prototype.BtNotice = function() {
					this.node.active = !1, window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendnotice_window), window.IndexScene._RedPointMgr.redHttpList[window.Constant.NOTICE_KEY.HEART_LOG] = !1, this.reloadRedPoint()
				}, t.prototype.BtHelper = function() {
					for (var e = window.JsonManager.getTable("Rule"), t = [], i = 0; i < e.length; i++) e[i].Id > 100 && e[i].Id < 200 && t.push(e[i]);
					window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.rule_window, t)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "panelList", void 0), __decorate([a(cc.Label)], t.prototype, "scoreLabelList", void 0), __decorate([a(cc.Sprite)], t.prototype, "maxXinSprite", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.ScarecrowWindow = r, cc._RF.pop()
	}, {}],
	SceneMoveLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "7acc7jNCaNIYINdVA5p/mcj", "SceneMoveLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.titleLabel = null, t.syLabel = null, t.contentLabel = null, t.sgNumLabel = null, t.seedNumLabel = null, t.goldNumLabel = null, t.iconSpriteList = [], t.bgSprite = null, t.BtNode = null, t.windwPanelList = [], t.closeBtNode = null, t.m_data = null, t.isEnoughData = !1, t.m_Func = null, t.isNewMove = !1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e, t) {
					this.windwPanelList[0].active = !0, this.windwPanelList[1].active = !1, this.m_Func = t;
					var i = window.FileData.getFileData("nowSceneId");
					"number" != typeof i && (i = 1);
					var o = i >= e + 1,
						n = window.JsonManager.getData("MoveLand", e + 1);
					void 0 == n && (n = window.JsonManager.getData("MoveLand", 2));
					var a = window.JsonManager.getData("MoveLand", i),
						r = n.Id > i ? n.Add : a.Add;
					console.log("SceneMoveLayer ", JSON.stringify(n)), this.m_data = n, this.titleLabel.string = n.Name, this.syLabel.string = "Thu nh\u1eadpX" + r + "00%", this.contentLabel.string = n.Content;
					var s = window.FileData.getFileData("getNowSeedTimes");
					"number" != typeof s && (s = 0);
					var d = window.FileData.getFileData("LastSceneMoveSeedNum");
					"number" == typeof d && (s = Math.max(0, s - d)), o && (s = n.HarvestTimes), e > i && (this.isEnoughData = !1, s = 0), this.sgNumLabel.string = s + "/" + n.HarvestTimes, this.seedNumLabel.string = n.SeedNum, this.goldNumLabel.string = n.GoldNum, this.isEnoughData = !0;
					var c = "icon6_1";
					s >= n.HarvestTimes ? (c = "icon6_1", this.sgNumLabel.node.color = cc.color(0, 255, 66, 255)) : (c = "icon6_2", this.sgNumLabel.node.color = cc.color(255, 78, 78, 255), this.isEnoughData = !1), window.Func._addSpritePic2(this.iconSpriteList[0], "texture/tps/window1_1", c), o || window.Data.getSeed() >= window.Func.moneyChange2(n.SeedNum) ? (c = "icon6_1", this.seedNumLabel.node.color = cc.color(0, 255, 66, 255)) : (c = "icon6_2", this.seedNumLabel.node.color = cc.color(255, 78, 78, 255), this.isEnoughData = !1), window.Func._addSpritePic2(this.iconSpriteList[1], "texture/tps/window1_1", c), o || window.Data.getGold() >= window.Func.moneyChange2(n.GoldNum) ? (c = "icon6_1", this.goldNumLabel.node.color = cc.color(0, 255, 66, 255)) : (c = "icon6_2", this.goldNumLabel.node.color = cc.color(255, 78, 78, 255), this.isEnoughData = !1), window.Func._addSpritePic2(this.iconSpriteList[2], "texture/tps/window1_1", c), window.Func._addSpritePic2(this.bgSprite, "texture/bg/scene/scene_small1", "scene_s" + n.Id + "_1", !1), window.Game.BtChangeEnabled(this.BtNode, this.isEnoughData, 1, !1)
				}, t.prototype.BtChangeNotice = function() {
					if (this.isEnoughData) {
						var e = window.FileData.getFileData("nowSceneId");
						"number" != typeof e && (e = 1), this.isNewMove = !1, e < this.m_data.Id ? this.windwPanelList[1].active = !0 : this.reloadMove()
					} else window.Game.showAlertBar("Chuy\u1ec3n \u0111\u1ea5tChưa đủ điều kiện")
				}, t.prototype.BtCancel = function() {
					this.windwPanelList[1].active = !1
				}, t.prototype.BtLook = function() {
					window.WxFunc.hideBannerAd();
					var e = this.m_data,
						t = this;
					cc.loader.loadRes("prefabs/shop/lookScene", function(i, o) {
						if (i) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/shop/lookScene", i), void t.BtLook();
						var n = cc.instantiate(o);
						n.getComponent("LookScene").init(e), window.IndexScene.node.getChildByName("panel2").addChild(n)
					})
				}, t.prototype.reloadMove = function() {
					window.FileData.setFileData("nowShowSceneId", this.m_data.Id), window.IndexScene.reloadSceneMoveBt(), window.IndexScene._IndexHelper.reloadSceneUi(), window.FileData.saveFileData(!0, !0, !0), this.BtClose()
				}, t.prototype.BtOk = function() {
					if (this.isEnoughData) {
						var e = window.FileData.getFileData("getNowSeedTimes");
						window.FileData.setFileData("LastSceneMoveSeedNum", e);
						var t = window.FileData.getFileData("nowSceneId");
						"number" != typeof t && (t = 1), t <= this.m_data.Id && window.FileData.setFileData("nowSceneId", this.m_data.Id), window.IndexScene.SetMType(4), window.FarmManager.RecoverAllCrop(2), this.isNewMove = !0, this.reloadMove()
					}
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					}), this.m_Func && this.m_Func(this.isNewMove)
				}, __decorate([a(cc.Label)], t.prototype, "titleLabel", void 0), __decorate([a(cc.Label)], t.prototype, "syLabel", void 0), __decorate([a(cc.Label)], t.prototype, "contentLabel", void 0), __decorate([a(cc.Label)], t.prototype, "sgNumLabel", void 0), __decorate([a(cc.Label)], t.prototype, "seedNumLabel", void 0), __decorate([a(cc.Label)], t.prototype, "goldNumLabel", void 0), __decorate([a(cc.Sprite)], t.prototype, "iconSpriteList", void 0), __decorate([a(cc.Sprite)], t.prototype, "bgSprite", void 0), __decorate([a(cc.Node)], t.prototype, "BtNode", void 0), __decorate([a(cc.Node)], t.prototype, "windwPanelList", void 0), __decorate([a(cc.Node)], t.prototype, "closeBtNode", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.SunWindow = r, cc._RF.pop()
	}, {}],
	SecretDataController: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "b95d8kYcm1FpprVnKq7Y6DF", "SecretDataController"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Level = 0, t.LevelStr = "", t.Coin = 0, t.CoinStr = "", t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					this.owner = e, this.LevelStr = this.owner.getFileData("FarmLevel"), this.CoinStr = this.owner.getFileData("Coin"), this.getCurCoin(), this.getCurLevel()
				}, t.prototype.getCurLevel = function(e) {
					return void 0 === e && (e = !1), e ? this.LevelStr : (void 0 != this.LevelStr && "" != this.LevelStr ? this.Level = void 0 == this.LevelStr || "" == this.LevelStr ? 1 : Math.max(window.Func.unSecretNumber(this.LevelStr), 1) : this.Level = 1, this.Level)
				}, t.prototype.addCurLevel = function(e) {
					void 0 === e && (e = 1);
					var t = this.getCurLevel() + e;
					this.LevelStr = window.Func.SecretNumber(t), this.owner.setFileData("FarmLevel", this.LevelStr)
				}, t.prototype.getCurCoin = function(e, t) {
					if (void 0 === e && (e = !1), void 0 === t && (t = !1), e) return this.CoinStr;
					var i = Math.floor(Math.max(window.Func.unSecretNumber(this.CoinStr), 0));
					return isNaN(i) && (i = 0), this.Coin = i, t ? window.Func.moneyChange(i) : i
				}, t.prototype.addCurCoin = function(e, t) {
					if (void 0 === t && (t = !1), e = parseFloat(e), isNaN(e) && (e = 0), 0 != e) {
						e = e;
						var i = this.getCurCoin() + e;
						i > window.Data.getMaxNumber() && (i = window.Data.getMaxNumber()), this.CoinStr = window.Func.SecretNumber(i), this.owner.setFileData("Coin", this.CoinStr), this.Coin = i, t && this.owner.setFileData("CoinSaveSeed", e)
					}
				}, t.prototype.resetCurCoin = function() {
					this.CoinStr = window.Func.SecretNumber(0), this.owner.setFileData("Coin", this.CoinStr)
				}, __decorate([a(Number)], t.prototype, "Level", void 0), __decorate([a(String)], t.prototype, "LevelStr", void 0), __decorate([a(Number)], t.prototype, "Coin", void 0), __decorate([a(String)], t.prototype, "CoinStr", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.SecretDataController = r, cc._RF.pop()
	}, {}],
	SeedNoticeWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "da3d8QaAk1FdJT26LyMVjyO", "SeedNoticeWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Label1 = null, t.Label2 = null, t.Label3 = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					var e = window.FarmManager.farms[1]._FarmData;
					this.Label2.string = Math.floor(100 * e.getSeedDouble1()) + "%", this.Label3.string = "" + window.Func.moneyChange(window.Data.getSeed()), this.Label1.string = "" + window.Func.moneyChange(e.getSeedDouble2()), window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Label)], t.prototype, "Label1", void 0), __decorate([a(cc.Label)], t.prototype, "Label2", void 0), __decorate([a(cc.Label)], t.prototype, "Label3", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.SeedNoticeWindow = r, cc._RF.pop()
	}, {}],
	SeedbuynoticeWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "0109aps2edHtJ/tcRJT/OYv", "SeedbuynoticeWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.panelList = [], t.m_Func = null, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e, t, i) {
					this.m_Func = i;
					for (var o = 0; o < 2; o++) {
						var n = e[o];
						this.panelList[o].getChildByName("Label2").getComponent(cc.Label).string = "T\u1ed5ng buffX" + window.Func.moneyChange(n.all), this.panelList[o].getChildByName("Label3").getComponent(cc.Label).string = "Global khácbuffX" + window.Func.moneyChange(0 == n.seed ? n.all : n.other), this.panelList[o].getChildByName("Label4").getComponent(cc.Label).string = "H\u1ea1t gi\u1ed1ngbuffX" + window.Func.moneyChange(n.seed)
					}
				}, t.prototype.BtOk = function() {
					this.m_Func && this.m_Func(), this.BtClose()
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.Node)], t.prototype, "panelList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.SeedbuynoticeWindow = r, cc._RF.pop()
	}, {}],
	SelectCropLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "fa81abWJ4hNFJlFe9DlDswo", "SelectCropLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mbPanel = [], t.dataList = [], t.nowCreateViewId = 0, t
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function(e, t) {
					this.nowCreateViewId = t, this.dataList = e;
					for (var i = 0; i < 2; i++) {
						var o = e[i];
						void 0 == o ? this.mbPanel[i].active = !1 : (o.layer = "select", this.node.getChildByName("middle_panel" + (i + 1)).getComponent("PieceUiLayer").reloadUi(o))
					}
					this.scheduleOnce(function() {
						window.WxFunc.openBannerAd()
					}, .2)
				}, t.prototype.clickBt = function(e, t) {
					window.Game.isCropOpen(this.dataList[t - 1].farmId) ? (window.FarmManager.createFarmChildren(this.nowCreateViewId, parseInt(this.dataList[t - 1].farmId)), window.IndexScene._RedPointMgr.createCropOut(), this.BtClose()) : window.Game.showAlertBar("C\u00e2y tr\u1ed3ng\u672aNh\u1eadn")
				}, t.prototype.BtClose = function() {
					window.WxFunc.hideBannerAd();
					var e = window.FileData.getFileData("guideStep");
					2 == e ? (window.Game.setNewHelperSaveData(3), window.Game.updateNewHelper()) : 9 == e ? (window.Game.setNewHelperSaveData(10), window.Game.updateNewHelper()) : window.Game.getIsShowNewHelper && window.Game.setNewHelperShow(!1), window.Game.closeSelectCrop()
				}, __decorate([a(cc.Node)], t.prototype, "mbPanel", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.SelectCropLayer = r, cc._RF.pop()
	}, {}],
	SelectCropScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "db0fehxE3RAf5QXiv+rJ5S0", "SelectCropScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e) {
					this.Model = e;
					var t = window.Game.getShowCropByLayer(e);
					if (this.dataList = t, console.log("listlistlistlist", JSON.stringify(t)), window.Data.isNewAccount && e > 2) {
						window.IndexScene.setTaskValue(0);
						for (var i = 0; i < t.length; i++)
							if (t[i])
								for (var o = 0; o < t[i].length; o++) {
									var n = t[i][o];
									0 == n.nohave && window.IndexScene.setTaskValue(n.farmId)
								}
					}
					this.initCellDataList(t, !1), this.createCellList(), window.Game2.setCloseBtPosToBanner(this.node.getParent().getChildByName("closeButton"))
				}, t.prototype.updateView = function(e, t, i) {
					i.getComponent("SelectCropLayer").init(t, this.Model)
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	SunWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "0c0d0fxD+9OrIZhJh4tUruo", "SunWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hsLabel = null, t.djsLabel = null, t.friendNodeList = [], t.panelList = [], t.iconNode = null, t.m_data = [], t.adId1 = 1, t.adId2 = 2, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.IndexScene.SnowTimeNum > 0 ? (this.panelList[0].active = !1, this.panelList[1].active = !0) : (this.panelList[0].active = !0, this.panelList[1].active = !1)
				}, t.prototype.update = function(e) {
					window.IndexScene.SnowTimeNum > 0 && (window.IndexScene.curFrame % window.Constant.GameFrame && (this.djsLabel.string = window.Func.timestampToTime2(Math.floor(window.IndexScene.SnowTimeNum))), window.IndexScene.curFrame % 10 && window.Func._addSpritePic2(this.iconNode.getComponent(cc.Sprite), "texture/tps/index", "icon22_" + (Math.floor(window.IndexScene.SnowTimeNum) % 2 == 0 ? 1 : 2)))
				}, t.prototype.updateUi = function(e) {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0);
					if (window.IndexScene.SnowTimeNum > 0) {
						for (var t = 0; t < this.friendNodeList.length; t++) this.friendNodeList[t].active = !1;
						if (void 0 != e && void 0 != e.inviteeOpenIdList) {
							this.m_data = e.inviteeOpenIdList, this.m_data.length > 0 && (this.hsLabel.string = "đã M\u1eddi b\u1ea1n" + Math.min(this.m_data.length, this.friendNodeList.length) + " ");
							for (t = 0; t < this.friendNodeList.length; t++) {
								var i = e.inviteeOpenIdList[t];
								if (void 0 != i && (this.friendNodeList[t].active = !0, void 0 != i.avatar && "string" == typeof i.avatar && "" != i.avatar)) {
									var o = this.panelList[1].getChildByName("wSprite" + (t + 1)).getChildByName("Sprite").getComponent(cc.Sprite);
									window.Func._addProtoPic(i.avatar, o)
								}
							}
						}
						window.Game2.ifEnoughPlayAd(this.adId2) || window.Game2.hideAdBtIcon2(this.panelList[1].getChildByName("getButton"), this.panelList[1].getChildByName("getButton2"));
						var n = window.FileData.getFileData("snowDouble");
						console.log("doubledoubledouble ", n), "number" != typeof n && (n = 2), this.panelList[1].getChildByName("dSprite").getChildByName("Label").getComponent(cc.Label).string = "x" + n, this.panelList[1].getChildByName("getButton2").getChildByName("Label").getComponent(cc.Label).string = window.JsonManager.getData("Advertisement", this.adId2).ButtonDes
					} else window.Game2.ifEnoughPlayAd(this.adId1) || window.Game2.hideAdBtIcon(this.panelList[0].getChildByName("getButton")), this.panelList[1].getChildByName("getButton").getChildByName("Label").getComponent(cc.Label).string = window.JsonManager.getData("Advertisement", this.adId1).ButtonDes
				}, t.prototype.BtFindFrieng = function() {
					window.WxFunc.createShare(window.Constant.shareIdList.SUNNY_DAY)
				}, t.prototype.openSun = function() {
					window.FileData.setFileData("snowTime", (new Date).getTime()), window.FileData.setFileData("snowDouble", 2), window.IndexScene.SnowTimeNum = window.IndexScene.SnowMaxTime, window.IndexScene.reloadXiayuUi(), window.NetHelper.sendClearInviteRequest(window.Constant.shareIdList.SUNNY_DAY), this.BtClose()
				}, t.prototype.BtOk = function(e, t) {
					var i = this;
					"1" == t ? (window.Game2.ifEnoughPlayAd(this.adId1) ? window.WxFunc.OpenAd(this.adId1, function() {
						i.openSun()
					}) : i.openSun(), 15 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(16), window.Game.setNewHelperShow(!1))) : "2" == t && window.Game2.ifEnoughPlayAd(this.adId2) && window.WxFunc.OpenAd(this.adId2, function() {
						var e = window.FileData.getFileData("snowDouble");
						"number" != typeof e && (e = 2), window.FileData.setFileData("snowDouble", e + 1), window.Game2.ifEnoughPlayAd(i.adId2) || window.Game2.hideAdBtIcon2(i.panelList[1].getChildByName("getButton"), i.panelList[1].getChildByName("getButton2")), i.panelList[1].getChildByName("dSprite").getChildByName("Label").getComponent(cc.Label).string = "x" + (e + 1), window.Game.showAlertBar("T\u0103ng thu nh\u1eadptới" + (e + 1) + " lần")
					})
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0), 16 == window.FileData.getFileData("guideStep") && window.Game.updateNewHelper()
					})
				}, __decorate([a(cc.Label)], t.prototype, "hsLabel", void 0), __decorate([a(cc.Label)], t.prototype, "djsLabel", void 0), __decorate([a(cc.Node)], t.prototype, "friendNodeList", void 0), __decorate([a(cc.Node)], t.prototype, "panelList", void 0), __decorate([a(cc.Node)], t.prototype, "iconNode", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.SunWindow = r, cc._RF.pop()
	}, {}],
	TaskScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "11ae1PgBr1NfqlLBMk1lYS0", "TaskScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.nowModel = 1, t.dataList = null, t.owner = null, t.m_list = [], t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t, i) {
					this.m_list = [], this.owner = t, this.dataList = e, this.Model = i, console.log("this.nowModelthis.nowModel", this.nowModel, this.Model), this.initCellDataList(e, !1, !0), this.createCellList(null, 10), this.nowModel = this.Model
				}, t.prototype.updateView = function(e, t, i) {
					t.node = i, this.m_list[e] = t, i.getChildByName("nSprite").getChildByName("Label").getComponent(cc.Label).string = t.modelName || "Ph\u1ee5 tuy\u1ebfn";
					var o = "icon4_1";
					2 != t._type && 3 != t._type || (o = "icon4_2"), i.getChildByName("nSprite").active = 3 != t._type, window.Func._addSpritePic2(i.getChildByName("bSprite").getComponent(cc.Sprite), "texture/tps/task", o, !1), i.getChildByName("nLabel").getComponent(cc.Label).string = t.Name, i.getChildByName("rLabel").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(t.Num), window.Func._addSpritePic2(i.getChildByName("rSprite").getComponent(cc.Sprite), "texture/tps/common", "sm_" + t.Type, !1), window.Func._addSpritePic2(i.getChildByName("rLabel").getChildByName("cSprite").getComponent(cc.Sprite), "texture/tps/common", "sm_" + t.Type, !1);
					var n = t.finish2;
					i.getChildByName("ProgressBar").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(t.taskVal) + "/" + window.Func.moneyChange(t.TaskValue2), i.getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = n, i.getChildByName("lookButton").active = !0;
					var a = "Đi làm",
						r = "bt_6",
						s = cc.color(0, 118, 197);
					1 == n ? (a = "Nh\u1eadn", r = "bt_7", s = cc.color(26, 151, 0)) : 1 != t.IsGo && (i.getChildByName("lookButton").active = !1), i.getChildByName("lookButton").getChildByName("Label").getComponent(cc.Label).string = a, i.getChildByName("lookButton").getChildByName("Label").getComponent(cc.Label).string = a, i.getChildByName("lookButton").getChildByName("Label").getComponent(cc.LabelOutline).color = s, window.Func._addSpritePic2(i.getChildByName("lookButton").getComponent(cc.Sprite), "texture/tps/common", r, !1);
					var d = i.getChildByName("lookButton").getComponent(cc.Button);
					if (0 == d.clickEvents.length) {
						var c = new cc.Component.EventHandler;
						c.target = this.node, c.component = "TaskScrollLayer", c.handler = "BtGo", c.customEventData = "" + e, d.clickEvents.push(c)
					} else d.clickEvents[0].customEventData = "" + e;
					3 == t._type && (window.FileHelper.getTaskFileData(t._type, t.Id) > 1 && (window.Game.BtChangeEnabled(d.node), d.node.getChildByName("Label").getComponent(cc.Label).string = "\u0110\u00e3 nh\u1eadn"))
				}, t.prototype.reloadTask = function() {}, t.prototype.BtGo = function(e, t) {
					t = parseInt(t);
					var i = this.m_list[t],
						o = this;
					if (console.log("task go ", t), "Nh\u1eadn" == e.target.getChildByName("Label").getComponent(cc.Label).string) this.owner.getTaskAward(i), this.scheduleOnce(function() {
						this.owner.updateUi()
					}, .1);
					else {
						var n = !0;
						4 == i.TaskType && (n = !1), n ? (window.IndexScene.scheduleOnce(function() {
							o.owner.goTask(i, function() {
								o.owner.updateUi()
							})
						}, .3), this.owner.BtClose()) : o.owner.goTask(i, function() {
							o.owner.updateUi()
						})
					}
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	TaskWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "41f5bZ6aNFHe740tvojW+kB", "TaskWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_panel2 = null, t.ScrollViewNode = null, t.emptyNode = null, t.btNodeList = [], t.m_list = null, t.m_model = 1, t.redPointList = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					if (void 0 === e && (e = []), window.FileData.setNHourCropNum(), 1 == this.m_model) {
						e = [];
						var t = this.getNextTask(1);
						null != t && e.push(t);
						for (var i = window.JsonManager.getTable("SubTask"), o = 0; o < i.length; o++) {
							null != (a = this.getTask2(o)) && e.push(a)
						}
					} else {
						var n = window.JsonManager.getTable("DailyTask");
						for (o = 0; o < n.length; o++) {
							var a;
							(a = cc.instantiate(n[o])).modelName = "Ph\u1ee5 tuy\u1ebfn", a._type = 3, a = this.getTaskValue2(a), 1 == window.FileHelper.getTaskFileData(a._type, a.Id) && e.push(a)
						}
					}
					e = e.sort(function(e, t) {
						return e.finish < t.finish ? 1 : e.finish > t.finish ? -1 : 0
					}), this.m_list = e, this.ScrollViewNode.getComponent("TaskScrollLayer").initUI(e, this, this.m_model), this.getIndexShowTask(), this.btNodeList[0].getChildByName("redSprite").active = this.redPointList[1], this.btNodeList[1].getChildByName("redSprite").active = this.redPointList[2]
				}, t.prototype.getTask2 = function(e) {
					var t = window.JsonManager.getData("SubTask", e + 1);
					return void 0 != t && (t = cc.instantiate(t)), 3 != t.TaskType || 3 == t.TaskType && window.FarmManager.isCreateCrop(t.TaskValue1) ? (t.modelName = "Ph\u1ee5 tuy\u1ebfn", t._type = 2, t = this.getTaskValue2(t)) : t = null, t
				}, t.prototype.getNextTask = function(e) {
					void 0 === e && (e = 1);
					var t = null;
					if (1 == e) {
						var i = window.FileHelper.getTaskFileData(1, 1),
							o = window.JsonManager.getData("MainTask", i);
						void 0 != o && ((o = cc.instantiate(o)).modelName = "Chính tuyến", o._type = 1, t = o = this.getTaskValue2(o))
					}
					return t
				}, t.prototype.getTaskValue2 = function(e) {
					if (2 == e._type) {
						var t = window.Func.moneyChange2(e.TaskValue2),
							i = window.FileHelper.getTaskFileData(e._type, e.Id) - 1;
						if (12 == e.TaskType) i > 0 && (t *= Math.pow(e.AddValue, i));
						else {
							var o = e.AddValue.toString().split(";");
							if (i > 0)
								for (var n = 0; n < i; n++) t += "number" == typeof e.AddValue ? Math.floor(e.AddValue) : Math.floor(void 0 == o[n] ? o[o.length - 1] : o[n])
						}
						e.TaskValue2 = t
					}
					if (3 == (e = window.Data.getGoodAwardNum(e)).TaskType && 1 != e._type) {
						var a = window.FarmManager.getFarmById(e.TaskValue1).FarmId;
						if (void 0 != a) {
							var r = window.JsonManager.getData("Crops", a);
							void 0 != r && void 0 != r.Name && (e.Name = (e.Name || "").split("{N}").join(r.Name))
						}
					} else e.Name = (e.Name || "").split("{N}").join(String(e.TaskValue1));
					return e.Name = (e.Name || "").split("{M}").join(String(window.Func.moneyChange(e.TaskValue2))), e.taskVal = this.getTaskFinishVal(e), e.finish = Math.min(1, e.taskVal / e.TaskValue2), 1 == e._type && (e.finish = 1 != e.finish ? .99 : 1.1), e.finish2 = Math.min(1, .99 == e.finish ? 0 : e.finish), e
				}, t.prototype.getTaskFinishVal = function(e) {
					var t = 0;
					if (1 == e.TaskType) {
						var i = window.JsonManager.getData("OpenFarm", e.TaskValue1);
						if (void 0 != i) {
							var o = parseFloat(window.Func.moneyChange2(i.Money));
							window.Data.getGold() >= o && (t = e.TaskValue2)
						}
					} else if (2 == e.TaskType) window.FarmManager.isAutoProduce(e.TaskValue1) && (t = e.TaskValue2);
					else if (3 == e.TaskType) t = window.FarmManager.getCropLevel(e.TaskValue1);
					else if (4 == e.TaskType) t = window.FileHelper.getTaskFinishFileData(e._type, e.Id);
					else if (5 == e.TaskType || 6 == e.TaskType || 7 == e.TaskType || 8 == e.TaskType || 9 == e.TaskType) t = window.FileHelper.getTaskFinishFileData(e._type, e.TaskType);
					else if (10 == e.TaskType) {
						var n = window.FileData.getFileData("nowSceneId");
						"number" != typeof n ? n = 0 : n -= 1, t = n
					} else 12 == e.TaskType ? t = window.Data.getOnline_getGold() : 13 == e.TaskType && (t = window.Game.getCropLevelNum(0, 0));
					return t
				}, t.prototype.getTaskAllList = function() {
					var e = [],
						t = this.getNextTask(1);
					null != t && e.push(t);
					for (var i = window.JsonManager.getTable("SubTask"), o = 0; o < i.length; o++) {
						null != (a = this.getTask2(o)) && e.push(a)
					}
					var n = window.JsonManager.getTable("DailyTask");
					for (o = 0; o < n.length; o++) {
						var a;
						(a = cc.instantiate(n[o])).modelName = "Ph\u1ee5 tuy\u1ebfn", a._type = 3, a = this.getTaskValue2(a), 1 == window.FileHelper.getTaskFileData(a._type, a.Id) && e.push(a)
					}
					return e
				}, t.prototype.getIndexShowTask = function() {
					var e = this.getTaskAllList();
					this.redPointList[1] = !1, this.redPointList[2] = !1;
					e = this.getTaskAllList();
					for (var t = null, i = !1, o = 0; o < e.length; o++) {
						var n = e[o];
						1 != n._type || null != t && 1 == t.finish2 || (t = n), n.finish2 >= 1 && (this.redPointList[3 == n._type ? 2 : 1] = !0, i = !0, null != t && 1 == t.finish2 || (t = n))
					}
					return [i, t]
				}, t.prototype.getTaskAward = function(e) {
					var t = [{
						type: e.Type,
						num: e.Num,
						typeid: e.TypeId
					}];
					window.Game.openAwardLayer3(t), window.Data.setGoodAward(t);
					var i = 1 == e._type ? 1 : e.Id,
						o = window.FileHelper.getTaskFileData(e._type, i);
					window.FileHelper.setTaskFileData(e._type, i, o + 1), window.FileData.saveFileData();
					var n = window.FileData.getFileData("newAccount");
					1 == e._type && n > 3 && window.Func.sendALDCount("3Th\u1ed1ng k\u00ea-Nhi\u1ec7m v\u1ee5 ch\u00ednh" + e.Id)
				}, t.prototype.goTask = function(e, t) {
					void 0 === t && (t = null), console.log("taskFunc", e.TaskType);
					var i = [];
					i.TaskType = e.TaskType, i.TaskValue1 = e.TaskValue1, i.TaskValue2 = e.TaskValue2, 1 == e.TaskType ? window.FarmManager.getFarmById(e.TaskValue1).reloadSZSprite(!0) : 2 == e.TaskType ? window.IndexScene.BtCreateTool(null, e.TaskValue1, i) : 3 == e.TaskType || 6 == e.TaskType ? window.IndexScene.BtChangeModel(null, e.TaskValue1, i) : 4 == e.TaskType ? window.WxFunc.createShare(window.Constant.shareIdList.MainTask, function() {
						window.FileHelper.setTaskFinishFileData(e._type, e.Id, 1), t && t()
					}) : 5 == e.TaskType ? window.IndexScene.BtCreatePlane() : 8 == e.TaskType ? window.IndexScene.BtGetSeedByCar() : 9 == e.TaskType ? window.IndexScene.BtClickCropBox() : 10 == e.TaskType ? window.IndexScene.BtCreateSceneMove() : 13 == e.TaskType && window.IndexScene.BtClickCropBox()
				}, t.prototype.BtChange = function(e, t) {
					t = parseInt(t), this.m_model != t && (this.m_model = t, window.Func._addSpritePic2(this.node.getChildByName("bgSprite").getChildByName("icon1_1").getComponent(cc.Sprite), "texture/tps/task", 1 == t ? "icon1_2" : "icon1_1", !1), window.Func._addSpritePic2(this.node.getChildByName("bgSprite").getChildByName("icon1_2").getComponent(cc.Sprite), "texture/tps/task", 2 == t ? "icon1_2" : "icon1_1", !1), this.updateUi())
				}, t.prototype.BtOk = function() {}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0), window.IndexScene._RedPointMgr.reloadTask()
					})
				}, __decorate([a(cc.Node)], t.prototype, "m_panel2", void 0), __decorate([a(cc.Node)], t.prototype, "ScrollViewNode", void 0), __decorate([a(cc.Node)], t.prototype, "emptyNode", void 0), __decorate([a(cc.Node)], t.prototype, "btNodeList", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.TaskWindow = r, cc._RF.pop()
	}, {}],
	TestData: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "98415qt6jxI5q83INkzm4wi", "TestData"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isCreateFarm = !0, t.closeNet = !1, t.addData = !0, t.clearData = !1, t.openNewHelper = !0, t.savedata = null, t
				}
				return __extends(t, e), t.prototype.init = function() {
					this.clearData = !1, this.addData = !1, this.closeNet = !1, this.isCreateFarm = !0, this.openNewHelper = !1, this.savedata = null
				}, t.prototype.init2 = function() {}, __decorate([a(Boolean)], t.prototype, "isCreateFarm", void 0), __decorate([a(Boolean)], t.prototype, "closeNet", void 0), __decorate([a(Boolean)], t.prototype, "addData", void 0), __decorate([a(Boolean)], t.prototype, "clearData", void 0), __decorate([a(Boolean)], t.prototype, "openNewHelper", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.TestData = r, cc._RF.pop()
	}, {}],
	TitleWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "f28ffj99RBL9pJsHcqTTW2p", "TitleWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.progressBar = null, t.bgPanelList = [], t.awardPanelList = [], t.getAwardBt = null, t.m_data = [], t.m_awarList = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e, t) {
					var i = window.Game2.getTitleByJsonToId(),
						o = window.JsonManager.getData("Title", i.Id + 1),
						n = !1;
					o || (n = !0, o = i), i.Speed2 = window.Func.moneyChange2(i.Speed), o.Speed2 = window.Func.moneyChange2(o.Speed), this.m_data = i;
					var a = window.FileData.getFileData("max_his_second");
					this.progressBar.progress = n ? 1 : Math.min(1, a / o.Speed2), this.progressBar.node.getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(a) + "/" + o.Speed;
					for (var r = 0; r < 2; r++) {
						var s = this.bgPanelList[r].getChildByName("panel");
						n && 1 == r ? (s.active = !1, this.bgPanelList[r].getChildByName("Label_empty").active = !0) : (s.active = !0, this.bgPanelList[r].getChildByName("Label_empty").active = !1);
						for (var d = [], c = 0 == r ? i : o, l = c.RewardType.split(";"), p = c.RewardNum.split(";"), u = 0; u < l.length; u++) {
							var h = {
								type: l[u],
								num: p[u]
							};
							d.push(h)
						}
						console.log("awardListawardListawardList", JSON.stringify(d)), 0 == r && (this.m_awarList = d), s.getChildByName("icon").getChildByName("Label").getComponent(cc.Label).string = window.Game2.getTitleName(c), s.getChildByName("Label1").getChildByName("Label").getComponent(cc.Label).string = c.Speed, s.getChildByName("Label2").getComponent(cc.Label).string = "2.M\u1ed7i ng\u00e0yNh\u1eadn" + (window.Constant.GoodAwardNameList[d[0].type] || "") + ":", s.getChildByName("Label2").getChildByName("Label").getComponent(cc.Label).string = d[0].num, s.getChildByName("Label3").getComponent(cc.Label).string = "3.M\u1ed7i ng\u00e0yNh\u1eadn" + (window.Constant.GoodAwardNameList[d[1].type] || "") + ":", s.getChildByName("Label3").getChildByName("Label").getComponent(cc.Label).string = d[1].num
					}
					for (r = 0; r < 2; r++) window.Func._addSpritePic2(this.awardPanelList[r].getComponent(cc.Sprite), "texture/tps/common", "s_" + this.m_awarList[r].type, !1), this.awardPanelList[r].getChildByName("Label").getComponent(cc.Label).string = "X" + this.m_awarList[r].num;
					1 == window.FileData.getFileData("title_award") && window.Game.BtChangeEnabled(this.getAwardBt, !1)
				}, t.prototype.BtOk1 = function() {
					window.IndexScene.BtChangeModel(), this.BtClose()
				}, t.prototype.BtOk2 = function() {
					1 != window.FileData.getFileData("title_award") && (window.Data.setGoodAward(this.m_awarList), window.Game.openAwardLayer3(this.m_awarList), window.FileData.setFileData("title_award", 1), window.Game.BtChangeEnabled(this.getAwardBt, !1))
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						e.node.removeFromParent(!0)
					})
				}, __decorate([a(cc.ProgressBar)], t.prototype, "progressBar", void 0), __decorate([a(cc.Node)], t.prototype, "bgPanelList", void 0), __decorate([a(cc.Node)], t.prototype, "awardPanelList", void 0), __decorate([a(cc.Node)], t.prototype, "getAwardBt", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.TitleWindow = r, cc._RF.pop()
	}, {}],
	ToolLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "3cc4bJI8mxLE6PBsh9HKQAc", "ToolLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.mType = 1, t.topBtList = [], t.topBtList2 = [], t.dataList = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e, t, i, o) {
					void 0 === i && (i = !1), void 0 === o && (o = !1);
					for (var n = window.FarmManager.getToolList(e, 0, 0, this.mType), a = [], r = [], s = 0; s < n.length; s++) r.push(n[s]), (s + 1) % 2 == 0 || 4 == e && (s + 1) % 2 != 0 ? (a.push(r), r = []) : s === n.length - 1 && a.push(r);
					this.dataList = a, 2 == e ? (this.node.setContentSize(640, 750), this.node.getChildByName("view").setContentSize(640, 750), this.node.getChildByName("view").getChildByName("content").setContentSize(640, 750), this.node.getChildByName("view").getChildByName("content").setPosition(0, -375), this.node.setPosition(0, -45)) : (this.node.setContentSize(640, 820), this.node.getChildByName("view").setContentSize(640, 820), this.node.getChildByName("view").getChildByName("content").setContentSize(640, 820), this.node.getChildByName("view").getChildByName("content").setPosition(0, -410), this.node.setPosition(0, -10));
					var d = this.Model == e && !i;
					this.initCellDataList(a, e != this.Model || t, d), this.createCellList(4 == e ? 246 : null, 4), o ? this.node.getComponent(cc.ScrollView).scrollToOffset(this.lastContentPosition, 0) : this.scrollView.scrollToTop(.1), this.Model = e, this.reloadTopUi()
				}, t.prototype.reloadData = function(e, t) {
					for (var i = 0; i < this.dataList.length; i++)
						for (var o = 0; o < this.dataList[i].length; o++) {
							var n = this.dataList[i][o];
							if (n.updateid && n.updateid == t.updateid || n.model == t.model && n.type == t.type && n.id == t.id) {
								this.dataList[i][o] = t;
								break
							}
						}
				}, t.prototype.reloadTopUi = function() {
					for (var e = 1; e < 4; e++) window.Func._addSpritePic2(this.topBtList[e - 1].getComponent(cc.Sprite), "texture/tps/common", "bt1_" + e + "_" + (this.Model == e ? 2 : 1), !1);
					this.node.getParent().getChildByName("rdown_panel").getChildByName("buyButton").active = this.Model < 3 && 1 == this.mType, this.node.getParent().getChildByName("rdown_panel").getChildByName("csButton").active = 4 == this.Model;
					for (e = 1; e < 3; e++) 2 == this.Model ? (window.Func._addSpritePic2(this.topBtList2[e - 1].getComponent(cc.Sprite), "texture/tps/common", "bt_9_" + (this.mType == e ? 1 : 2), !1), this.topBtList2[e - 1].getChildByName("Label").color = this.mType == e ? cc.color(185, 83, 0) : cc.color(62, 88, 1), this.topBtList2[e - 1].active = !0) : this.topBtList2[e - 1].active = !1
				}, t.prototype.BtChangeModel = function(e, t) {
					t != this.Model && (this.mType = 1, this.initUI(t, !1), this.Model = t, this.reloadTopUi())
				}, t.prototype.BtChangeType = function(e, t) {
					t != this.mType && (this.mType = t, this.initUI(this.Model, !1), this.reloadTopUi())
				}, t.prototype.BtClose = function() {
					this.mType = 1, this.node.getParent().active = !1, window.FarmManager.reloadAllCrop(), 13 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperShow(!1), window.IndexScene._RedPointMgr.reloadTask()), window.FileData.saveFileData(), window.IndexScene.setTaskValue(0)
				}, t.prototype.BtYJBuy = function(e, t, i) {
					void 0 === i && (i = !1);
					for (var o = !1, n = 0, a = this;;) {
						for (var r = !1, s = !1, d = window.FarmManager.getToolList(this.Model), c = 0; c < d.length; c++) {
							var l = d[c],
								p = !0;
							if (2 == this.Model && !i && l.coin <= window.Data.getSeed()) {
								var u = window.Constant.getToolKey(l.model, l.type, l.id),
									h = window.FarmManager.getToolFileData(u),
									w = window.FarmManager.farms[1]._FarmData,
									m = w.getGetDoneCoinToShow(),
									g = w.getSeedDouble2(),
									f = m / g;
								window.FarmManager.setToolFileData(u, l.lv), window.Data.subSeedNum(l.coin);
								var y = w.getGetDoneCoinToShow(),
									v = w.getSeedDouble2(),
									C = y / v;
								window.FarmManager.setToolFileData(u, h), window.Data.addSeedNum(l.coin);
								var _ = [];
								_[0] = {
									all: m,
									seed: g,
									other: f
								}, _[1] = {
									all: y,
									seed: v,
									other: C
								}, y < m && parseInt(window.Func.moneyChange(y)) < parseInt(window.Func.moneyChange(m)) ? (p = !1, r = !0) : s = !0
							}
							if (p && !window.Game.ShopBuy(l, !1)) {
								if (0 == c && (o = !0), 0 == n && 0 == c) return void window.Game.showAlertBar(2 == this.Model ? "Thi\u1ebfu h\u1ea1t gi\u1ed1ng" : "Thi\u1ebfu v\u00e0ng");
								break
							}
						}
						if (2 == this.Model && !i && 0 == n && !s && !r) return window.Game.showAlertBar("Thi\u1ebfu h\u1ea1t gi\u1ed1ng"), void this.initUI(this.Model, !0);
						if (o) break;
						if (!i && 2 == this.Model && !s && r) {
							if (0 == n) return window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.seedbuynotice_window, _, function() {
								a.BtYJBuy(e, t, !0)
							}), void this.initUI(this.Model, !0);
							break
						}
						if (n > 200) break;
						n++
					}
					window.Game.showAlertBar("Đã mua!"), this.initUI(this.Model, !0)
				}, t.prototype.BtChangeScene = function() {
					var e = this;
					cc.loader.loadRes("prefabs/shop/ChangeScene", function(t, i) {
						if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/shop/ChangeScene", t), void e.BtChangeScene();
						var o = cc.instantiate(i);
						window.Game.ToolScrollObj.addChild(o)
					})
				}, __decorate([a(Number)], t.prototype, "Model", void 0), __decorate([a(Number)], t.prototype, "mType", void 0), __decorate([a(cc.Node)], t.prototype, "topBtList", void 0), __decorate([a(cc.Node)], t.prototype, "topBtList2", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	ToolPrefabs: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e49e9yVFBdKoZuLJvwqxUa6", "ToolPrefabs"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lable = null, t.panelList = [], t.lvLabel = [], t.tLabel1 = [], t.tLabel2 = [], t.tLabel3 = [], t.iconLabel = [], t.iconSprite = [], t.cionSprite = [], t
				}
				return __extends(t, e), t.prototype.updateView = function(e, t) {
					this.mData = t, this.node.zIndex = 1e3 - e, 4 == t[0].model ? (this.panelList[0].active = !1, this.panelList[1].active = !1, this.panelList[2].active = !0) : (this.panelList[0].active = !0, this.panelList[2].active = !1, 1 == t.length ? this.panelList[1].active = !1 : this.panelList[1].active = !0);
					for (var i = 0; i < t.length; i++) {
						var o = t[i];
						if (4 == o.model && (i = 2), this.lvLabel[i].string = void 0 == o.des ? "LV." + o.lv : o.des, this.tLabel1[i].string = void 0 != o.name1 ? o.name1 : "", this.tLabel2[i].string = o.name2, this.iconLabel[i].string = window.Func.moneyChange(o.coin, 3), this.panelList[i].getChildByName("szSprite").active = o.showsz, o.showsz && (this.panelList[i].getChildByName("szSprite").rotation = 20, this.panelList[i].getChildByName("szSprite").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -25, 0), cc.rotateBy(.5, 25, 0)))), this.scheduleOnce(function() {
								this.node.getParent().getParent().getParent().getComponent(cc.ScrollView).scrollToOffset(cc.v2(0, e * this.node.width - this.node.width), 0)
							}, .1)), void 0 == o.name3 ? this.tLabel3[i].node.active = !1 : (this.tLabel3[i].node.active = !0, this.tLabel3[i].node.getChildByName("Label").getComponent(cc.Label).string = o.name3), "" == o.name2) {
							var n = this.tLabel1[i].node.getPosition();
							this.tLabel1[i].node.setPosition(n.x, n.y - 20)
						}
						var a = "s_1";
						if (4 != o.model) {
							var r = cc.color(189, 62, 0),
								s = "icon4";
							2 == o.model ? (r = cc.color(85, 122, 0), a = "s_3", s = "icon6") : 3 == o.model && (r = cc.color(32, 102, 194), a = "s_2", s = "icon5"), window.Func._addSpritePic2(this.iconSprite[i], o.path2 ? o.path2 : "texture/tps/crop_icon2", o.path1 ? o.path1 : "c_" + o.id, !1), window.Func._addSpritePic2(this.cionSprite[i], "texture/tps/common", a, !1), window.Func._addSpritePic2(this.panelList[i].getComponent(cc.Sprite), "texture/tps/shop2", s, !1), this.lvLabel[i].node.color = r, this.tLabel1[i].node.color = r, this.tLabel2[i].node.color = r
						}
						var d = !1;
						1 == o.model && window.Data.getGold() >= o.coin ? d = !0 : 2 == o.model && window.Data.getSeed() >= o.coin ? d = !0 : 3 == o.model && window.Data.getDiam() >= o.coin && (d = !0), window.Game.BtChangeEnabled(this.panelList[i].getChildByName("bt"), d), window.Func._addSpritePic2(this.panelList[i].getChildByName("bt").getChildByName("bgSprite").getComponent(cc.Sprite), "texture/tps/common", a + (d ? "" : "_2"), !1)
					}
				}, t.prototype.BtClickBuy = function(e, t) {
					cc.log("BtClickBuy " + t);
					var i = this.mData[t],
						o = this,
						n = function() {
							if (window.Game.ShopBuy(i)) {
								var e = window.Game.ToolScrollObj.getChildByName("ScrollView").getComponent("ToolLayer"),
									n = window.FarmManager.getToolList(i.model, i.type, i.id, e.mType);
								void 0 != n && n.length > 0 ? (e.reloadData(t, n[0]), o.updateView(t, o.mData)) : e.initUI(e.Model, !1, !1, !0)
							}
							12 == window.FileData.getFileData("guideStep") && (window.Game.setNewHelperSaveData(13), window.Game.updateNewHelper())
						},
						a = !0;
					if (2 == i.model && i.coin <= window.Data.getSeed()) {
						var r = window.Constant.getToolKey(i.model, i.type, i.id),
							s = window.FarmManager.getToolFileData(r),
							d = window.FarmManager.farms[1]._FarmData,
							c = d.getGetDoneCoinToShow(),
							l = d.getSeedDouble2(),
							p = c / l;
						window.FarmManager.setToolFileData(r, i.lv), window.Data.subSeedNum(i.coin);
						var u = d.getGetDoneCoinToShow(),
							h = d.getSeedDouble2(),
							w = u / h;
						window.FarmManager.setToolFileData(r, s), window.Data.addSeedNum(i.coin);
						var m = [];
						m[0] = {
							all: c,
							seed: l,
							other: p
						}, m[1] = {
							all: u,
							seed: h,
							other: w
						}, u < c && parseInt(window.Func.moneyChange(u)) < parseInt(window.Func.moneyChange(c)) && (window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.seedbuynotice_window, m, n), a = !1)
					}
					a && n()
				}, t.prototype.BtClickLook = function() {}, __decorate([a(cc.Label)], t.prototype, "lable", void 0), __decorate([a(cc.Node)], t.prototype, "panelList", void 0), __decorate([a(cc.Label)], t.prototype, "lvLabel", void 0), __decorate([a(cc.Label)], t.prototype, "tLabel1", void 0), __decorate([a(cc.Label)], t.prototype, "tLabel2", void 0), __decorate([a(cc.Label)], t.prototype, "tLabel3", void 0), __decorate([a(cc.Label)], t.prototype, "iconLabel", void 0), __decorate([a(cc.Sprite)], t.prototype, "iconSprite", void 0), __decorate([a(cc.Sprite)], t.prototype, "cionSprite", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.default = r, cc._RF.pop()
	}, {}],
	TurnningWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "a7ed8HKmChFn69jz4M65rcb", "TurnningWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.panelList = [], t.progressBar = null, t.timeOutLabel = null, t.btNode = null, t.addbtNode = null, t.m_times = 10, t.m_max_timeout = 3600, t.m_timeout = 0, t.adId1 = 13, t.playAction = !1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0)
				}, t.prototype.updateUi = function(e) {
					void 0 === e && (e = null), this.node.getChildByName("helper_window").active = !1;
					var t = window.FileData.getTURNFileData("times");
					this.m_times = window.Constant.Turnning_Max_Times, this.m_max_timeout = 3600 * window.JsonManager.getData("Variable", 20).Value;
					for (var i = window.JsonManager.getTable("Turnplate"), o = 0; o < 8; o++) {
						var n = i[o];
						this.panelList[o] = this.node.getChildByName("bgSprite").getChildByName("bSprite1").getChildByName("panel" + (o + 1)), this.panelList[o].getChildByName("Label").getComponent(cc.Label).string = n.Name;
						var a = this.panelList[o].getChildByName("Sprite").getChildByName("Sprite");
						window.Func._addSpritePic2(a.getComponent(cc.Sprite), "texture/tps/common", "sm_" + n.Type, !1)
					}
					var r = window.FileData.getTURNFileData("downtime"),
						s = window.Func.getTimeUnix();
					if (t < this.m_times)
						for (; s - r > this.m_max_timeout && (t = this.addTimes(), r += this.m_max_timeout, window.FileData.setTURNFileData("downtime", r), !(t >= this.m_times)););
					this.progressBar.getChildByName("Label2").active = !1, t < this.m_times && (this.m_timeout = this.m_max_timeout - (s - r)), this.reloadProgress()
				}, t.prototype.reloadProgress = function() {
					var e = window.FileData.getTURNFileData("times");
					this.node.getChildByName("bgSprite").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = Math.min(e, this.m_times) / this.m_times, this.progressBar.getChildByName("Label1").getComponent(cc.Label).string = "L\u01b0\u1ee3t c\u00f2n\uff1a" + e + "/" + this.m_times, window.Game2.ifEnoughPlayShare(this.adId1, window.Constant.shareIdList.TURNNING) || window.Game2.ifEnoughPlayAd(this.adId1) || (this.addbtNode.active = !1)
				}, t.prototype.addTimes = function(e, t) {
					void 0 === e && (e = !0), void 0 === t && (t = 1);
					var i = window.FileData.getTURNFileData("times");
					return i = e ? Math.min(i + t, this.m_times) : i + t, window.FileData.setTURNFileData("times", i), this.reloadProgress(), window.FileData.setTURNFileData("downtime", window.Func.getTimeUnix()), e || window.Game.showAlertBar("V\u00f2ng quayl\u01b0\u1ee3tT\u0103ng" + t + " lần"), window.FileData.saveFileData(), i
				}, t.prototype.subTimes = function() {
					var e = window.FileData.getTURNFileData("times");
					e = Math.max(e - 1, 0), window.FileData.setTURNFileData("times", e), e < this.m_times && 0 == this.m_timeout ? (window.FileData.setTURNFileData("downtime", window.Func.getTimeUnix()), this.updateUi()) : this.reloadProgress()
				}, t.prototype.update = function(e) {
					if (this.m_timeout > 0) {
						this.m_timeout = Math.max(0, this.m_timeout - e);
						var t = window.JsonManager.getData("Variable", 20).Value;
						0 == this.m_timeout && (this.addTimes(!0, t), this.updateUi()), this.timeOutLabel.string = window.Func.timestampToTime2(Math.floor(this.m_timeout), !1) + "sau s\u1ebd h\u1ed3i" + t + " lầnQuay th\u01b0\u1edfngl\u01b0\u1ee3t", this.timeOutLabel.node.active = !0
					} else this.timeOutLabel.node.active = !1;
					var i = window.FileData.getTURNFileData("times");
					window.Game.BtChangeEnabled(this.btNode, !!(i > 0 || this.addbtNode.active), 1, !1)
				}, t.prototype.BtOk1 = function() {
					if (!this.playAction) {
						if (window.FileData.getTURNFileData("times") <= 0) this.addbtNode.active ? this.BtOk2() : window.Game.showAlertBar("Quay th\u01b0\u1edfngH\u1ebft l\u01b0\u1ee3t");
						else {
							this.playAction = !0;
							for (var e = 0, t = window.JsonManager.getTable("Turnplate"), i = 0; i < 8; i++) {
								e += (s = t[i]).Weight
							}
							var o = 0,
								n = window.Func.randomNum(0, e),
								a = 0;
							for (i = 0; i < 8; i++) {
								if (n <= (a += (s = t[i]).Weight)) {
									o = i;
									break
								}
							}
							console.log("changeIdchangeIdchangeId", o, n);
							var r = this.node.getChildByName("bgSprite");
							r.getChildByName("bSprite1").stopAllActions(), r.getChildByName("bSprite1").rotation = 0, r.getChildByName("bSprite1").runAction(cc.sequence(cc.rotateBy(1.3, 1080), cc.rotateBy(.4, 360), cc.rotateBy(.4, 360 - 45 * o))), r.getChildByName("bSprite2").stopAllActions(), r.getChildByName("bSprite2").rotation = 0, r.getChildByName("bSprite2").runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, -15), cc.rotateTo(.1, 15))));
							var s = t[o],
								d = [{
									type: (s = window.Data.getGoodAwardNum(s)).Type,
									num: s.Num,
									typeid: s.TypeId
								}];
							this.scheduleOnce(function() {
								if (r.getChildByName("bSprite2").stopAllActions(), r.getChildByName("bSprite2").runAction(cc.rotateTo(.1, 0)), 14 == s.Type || 15 == s.Type) {
									var e = this;
									window.NetHelper.sendRandUserRequest(14 == s.Type ? 2 : 1, function(t) {
										e.scheduleOnce(function() {
											window.Game2.changeFriendData(t), t.userInfo.userInfo.step = 14 == s.Type ? 2 : 5, t.userInfo.userInfo.showsz = !0, window.Game2.LookFriendScene(t.userInfo.userInfo, function() {}, t)
										}, .5)
									})
								} else this.scheduleOnce(function() {
									window.Game.openAwardLayer3(d)
								}, .5), window.Data.setGoodAward(d)
							}, 2), this.scheduleOnce(function() {
								this.playAction = !1, window.FileData.saveFileData()
							}, 3), this.subTimes()
						}
					}
				}, t.prototype.BtOk2 = function() {
					this.node.getChildByName("helper_window").active = !0, this.node.getChildByName("helper_window").getChildByName("bgSprite").setPosition(0, 70), window.Game.windowMoveAction(this.node.getChildByName("helper_window").getChildByName("bgSprite"), 1, null, !0);
					var e = window.JsonManager.getData("Advertisement", this.adId1),
						t = this.node.getChildByName("helper_window").getChildByName("bgSprite").getChildByName("model1_panel");
					1 == e.Priority && window.Game2.ifEnoughPlayAd(this.adId1) ? (t.getChildByName("getButton").active = !0, t.getChildByName("getButton2").active = !1) : (t.getChildByName("getButton").active = !1, t.getChildByName("getButton2").active = !0)
				}, t.prototype.BtOk3 = function() {
					if (this.BtClose2(), 1 == window.JsonManager.getData("Advertisement", this.adId1).Priority) {
						if (this.playAd()) return;
						this.playShare()
					} else {
						if (this.playShare()) return;
						this.playAd()
					}
				}, t.prototype.playAd = function() {
					if (window.Game2.ifEnoughPlayAd(this.adId1)) {
						var e = this;
						return window.WxFunc.OpenAd(this.adId1, function() {
							e.addTimes(!1, window.JsonManager.getData("Variable", 21).Value)
						}), !0
					}
					return !1
				}, t.prototype.playShare = function() {
					if (window.Game2.ifEnoughPlayShare(this.adId1, window.Constant.shareIdList.TURNNING)) {
						var e = this;
						return window.WxFunc.createShare(window.Constant.shareIdList.TURNNING, function() {
							e.addTimes(!1, window.JsonManager.getData("Variable", 21).Value)
						}), !0
					}
					return !1
				}, t.prototype.BtClose = function() {
					if (!this.playAction) {
						var e = this;
						window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
							e.node.removeFromParent(!0)
						})
					}
				}, t.prototype.BtClose2 = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getChildByName("helper_window").getChildByName("bgSprite"), 2, function() {
						e.node.getChildByName("helper_window").active = !1
					})
				}, __decorate([a(cc.Node)], t.prototype, "panelList", void 0), __decorate([a(cc.Node)], t.prototype, "progressBar", void 0), __decorate([a(cc.Label)], t.prototype, "timeOutLabel", void 0), __decorate([a(cc.Node)], t.prototype, "btNode", void 0), __decorate([a(cc.Node)], t.prototype, "addbtNode", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.TurnningWindow = r, cc._RF.pop()
	}, {}],
	TyWindow: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "77af7jaVBRAAp4o0lVycJQ8", "TyWindow"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_Model = 0, t.adId1 = 1, t.openUpdate = !1, t.wealCoid = 0, t.shareWealKey = ["", "FREE_GET_GOLD", "FREE_GET_DIAM", "WEALCROP"], t.adWealKey = [0, 11, 9, 17], t.wealCoinHours = 2, t.wealDiamNum = 50, t.contentListObj = [], t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 1, null, !0), this.schedule(function() {
						this.openUpdate && this.m_Model == window.Constant.TyWindowKeyList.getnewcrop_window && (window.Game2.ifEnoughPlayAd2() ? (this.node.getChildByName("bgSprite").getChildByName("getButton").active = !1, this.node.getChildByName("bgSprite").getChildByName("getButton2").active = !0) : (this.node.getChildByName("bgSprite").getChildByName("getButton").active = !0, this.node.getChildByName("bgSprite").getChildByName("getButton2").active = !1, this.openUpdate = !1))
					}, 2), this.schedule(function() {
						this.reloadTime()
					}, 1)
				}, t.prototype.updateUi = function(e, t) {
					this.m_Model = t, this.m_Model == window.Constant.TyWindowKeyList.marketNotice_window ? this.reloadUi7() : this.m_Model == window.Constant.TyWindowKeyList.marketNotice2_window ? this.reloadUi8() : this.m_Model == window.Constant.TyWindowKeyList.getnewcrop_window ? this.reloadUi27() : this.m_Model == window.Constant.TyWindowKeyList.weal_window && this.reloadUi28()
				}, t.prototype.reloadUi7 = function() {
					0 == window.FileData.getFileData("getNowSeedTimes") ? (this.node.getChildByName("bgSprite").getChildByName("getButton2").getChildByName("szSprite").active = !0, window.Game2.playSzAction(this.node.getChildByName("bgSprite").getChildByName("getButton2"))) : this.node.getChildByName("bgSprite").getChildByName("getButton2").getChildByName("szSprite").active = !1
				}, t.prototype.reloadUi8 = function() {
					var e = this.node.getChildByName("bgSprite").getChildByName("bSprite1").getChildByName("Sprite1"),
						t = this.node.getChildByName("bgSprite").getChildByName("bSprite1").getChildByName("Sprite2");
					e.getChildByName("Sprite1").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(window.IndexScene.getSeedNumValue1), e.getChildByName("Sprite2").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(window.Data.getSeed()), t.getChildByName("Sprite1").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(100 * window.IndexScene.getSeedNumValue2) + "%";
					var i = window.FarmManager.farms[1]._FarmData;
					t.getChildByName("Sprite2").getChildByName("Label").getComponent(cc.Label).string = window.Func.moneyChange(100 * i.getSeedDouble3()) + "%"
				}, t.prototype.reloadUi27 = function() {
					var e = window.FarmManager.GetNewCropId,
						t = window.JsonManager.getData("OpenFarm", e);
					if (console.log("_id_id_id", e, t.AdvertisementCrop, typeof t.AdvertisementCrop), 0 != e && "number" == typeof t.AdvertisementCrop) {
						this.adId1 = 15;
						var i = window.JsonManager.getData("Crops", t.AdvertisementCrop),
							o = this.node.getChildByName("bgSprite").getChildByName("panel");
						o.getChildByName("Label1").getChildByName("Label1").getComponent(cc.Label).string = i.Name;
						window.FarmManager.getFarmById(i.Belong);
						var n = t.AdvertisementCrop,
							a = window.Constant.cropSpriteNum[n].length;
						cc.loader.loadRes("prefabs/crop_spine", function(e, i) {
							if (!e)
								for (var r = 0; r < a; r++) {
									var s = cc.instantiate(i);
									if (void 0 != window.Constant.cropSpriteNum[n]) {
										var d = window.Constant.cropSpriteNum[n][r];
										s.x = d.x, s.y = d.y, "number" != typeof t.s && (d.s = 1), s.zIndex = a - r
									}
									window.Func._addSpritePic4(s.getComponent("sp.Skeleton"), "spine/crop/c" + t.AdvertisementCrop + "/skeleton"), o.getChildByName("Sprite").addChild(s)
								}
						}), this.scheduleOnce(function() {
							var e = Math.floor(o.getChildByName("Label1").getChildByName("Label1").width / 33),
								t = "Nh\u1eadn ";
							if (e > 0)
								for (var i = 0; i < 4 * e; i++) t += " ";
							t += "\uff0cC\u01a1 h\u1ed9i c\u00f2n    lần", o.getChildByName("Label1").getComponent(cc.Label).string = t, this.scheduleOnce(function() {
								o.getChildByName("Label1").getChildByName("Label2").setPosition(o.getChildByName("Label1").width / 2 - 40, 1)
							}, .01)
						}, .01), window.Game2.ifEnoughPlayAd2() ? (this.openUpdate = !0, this.node.getChildByName("bgSprite").getChildByName("getButton").active = !1, this.node.getChildByName("bgSprite").getChildByName("getButton2").active = !0) : (this.node.getChildByName("bgSprite").getChildByName("getButton").active = !0, this.node.getChildByName("bgSprite").getChildByName("getButton2").active = !1)
					} else this.BtClose()
				}, t.prototype.reloadUi28 = function() {
					this.wealCoid = Math.max(1, window.Data.getNHourCropNum(3600 * this.wealCoinHours)), this.contentListObj[0].getChildByName("Label2").getComponent(cc.Label).string = "NgayNh\u1eadn" + window.Func.moneyChange(this.wealCoid) + "V\u00e0ng", this.contentListObj[1].getChildByName("Label2").getComponent(cc.Label).string = "NgayNh\u1eadn" + this.wealDiamNum + "Kim c\u01b0\u01a1ng", this.reloadTime()
				}, t.prototype.reloadTime = function() {
					if (this.m_Model == window.Constant.TyWindowKeyList.weal_window)
						for (var e = window.FileHelper.getData("wealTimeList"), t = 0; t < 3; t++) {
							var i = !0;
							e && e[t] && window.Func.getTimeUnix() - e[t] < 60 ? (i = !1, this.contentListObj[t].getChildByName("Button").active = !1, this.contentListObj[t].getChildByName("tSprite").active = !0, this.contentListObj[t].getChildByName("tSprite").getChildByName("Label").getComponent(cc.Label).string = window.Func.timestampToTime2(60 - (window.Func.getTimeUnix() - e[t]), !1)) : (this.contentListObj[t].getChildByName("Button").active = !0, this.contentListObj[t].getChildByName("tSprite").active = !1);
							var o = window.Game2.ifEnoughPlayAd(this.adWealKey[t + 1]),
								n = window.Game2.ifEnoughPlayShare(this.adWealKey[t + 1], window.Constant.shareIdList[this.shareWealKey[t + 1]]);
							!o && n ? i && (window.Game2.hideAdBtIcon(this.contentListObj[t].getChildByName("Button")), this.contentListObj[t].getChildByName("Button").active = !0, this.contentListObj[t].getChildByName("tSprite").active = !1) : n || (this.contentListObj[t].getChildByName("Button").active = !1, this.contentListObj[t].getChildByName("tSprite").active = !1)
						}
				}, t.prototype.BtOk1 = function() {
					if (this.m_Model == window.Constant.TyWindowKeyList.marketNotice_window) {
						if (!window.Data.subDiamNum(100)) return;
						window.IndexScene.SetMType(5), window.IndexScene.clearAllCrop(!1), this.BtClose()
					}
				}, t.prototype.BtOk2 = function() {
					this.m_Model == window.Constant.TyWindowKeyList.marketNotice_window && this.openCollect()
				}, t.prototype.BtSaveProto = function() {
					window.WxFunc.SaveProto()
				}, t.prototype.openCollect = function() {
					window.Game.showAlertBar("Tự độngThu ho\u1ea1chGiữa...."), window.IndexScene.SetMType(2), this.BtClose()
				}, t.prototype.getNewCropFunc = function() {
					var e = window.FarmManager.GetNewCropId,
						t = window.JsonManager.getData("OpenFarm", e);
					window.Data.addCropBoxToQuality(t.AdvertisementCrop, 1);
					this.BtClose(null, 0, function() {
						window.Game.createSelectCrop(window.FarmManager.GetNewCropId)
					}), window.Func.sendALDCount("4Th\u1ed1ng k\u00ea-User mớiC\u00e2y tr\u1ed3ng\uff0c\u00d4 \u0111\u1ea5t\uff1a" + e + "\uff0cC\u00e2y tr\u1ed3ngid:" + t.AdvertisementCrop)
				}, t.prototype.BtNewCropShare = function() {
					var e = this;
					window.WxFunc.createShare(window.Constant.shareIdList.GETNEWCROP, function() {
						e.getNewCropFunc()
					})
				}, t.prototype.BtNewCropAd = function() {
					var e = this;
					window.WxFunc.OpenAd(this.adId1, function() {
						e.getNewCropFunc()
					})
				}, t.prototype.getWealAward = function(e) {
					var t = window.FileHelper.getData("wealTimeList");
					t || (t = {}), t[e - 1] = window.Func.getTimeUnix(), window.FileHelper.setData("wealTimeList", t);
					var i = [];
					if (1 == e) i.push({
						type: 11,
						num: this.wealCoid
					});
					else if (2 == e) i.push({
						type: 2,
						num: this.wealDiamNum
					});
					else if (3 == e) {
						for (var o = window.Game.randCropBoxData(1, 4), n = [], a = 0; a < o.length; a++) {
							var r = o[a],
								s = r;
							0 != r.ifHave ? (window.Data.addDiamNum(3), s.type = 2, s.num = 3, s.node = 1) : (s.type = 13, s.num = 1, s.typeid = r.farmId, s.pos1 = r.key, s.pos2 = r.pos, s.node = 3, s.layer = "get2", s.noshowaction = !0), n.push(s)
						}
						window.Game.openAwardLayer3(n)
					}
					i.length > 0 && (window.Data.setGoodAward(i), window.Game.openAwardLayer3(i)), this.reloadTime(), window.FileData.saveFileData()
				}, t.prototype.BtWeal = function(e, t) {
					t = parseInt(t);
					var i = this;
					window.Game2.ifEnoughPlayAd(this.adWealKey[t]) ? window.WxFunc.OpenAd(this.adWealKey[t], function() {
						i.getWealAward(t)
					}) : window.Game2.ifEnoughPlayShare(this.adWealKey[t], window.Constant.shareIdList[this.shareWealKey[t]]) && window.WxFunc.createShare(window.Constant.shareIdList[i.shareWealKey[t]], function() {
						i.getWealAward(t)
					})
				}, t.prototype.BtLogin1 = function(e, t) {
					1 == (t = parseInt(t)) ? (window.Data.loginModel = 2, 1 == window.Data.Status && window.GEventDispatch.emit(window.GBaseEvent.HttpLogin)) : (window.Data.loginModel = 1, window.YxhLogin.login(!0)), this.BtClose()
				}, t.prototype.BtClose = function(e, t, i) {
					void 0 === e && (e = null), void 0 === t && (t = ""), void 0 === i && (i = null);
					var o = this;
					window.Game.windowMoveAction(this.node.getChildByName("bgSprite"), 2, function() {
						o.node.removeFromParent(!0), i ? i() : o.m_Model == window.Constant.TyWindowKeyList.getnewcrop_window && window.Game.createSelectCrop(window.FarmManager.GetNewCropId)
					}), this.m_Model == window.Constant.TyWindowKeyList.getnewcrop_window && window.FarmManager.getFarmById(window.FarmManager.GetNewCropId).setFileData("get1", 1)
				}, __decorate([a(cc.Node)], t.prototype, "contentListObj", void 0), t = __decorate([n], t)
			}(cc.Component);
		i.TyWindow = r, cc._RF.pop()
	}, {}],
	UserScene: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9eb008Nfm1HkIudVdvwy+sf", "UserScene"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_data = null, t.m_Func = null, t.stopClose = !1, t.farmList = [], t.syNum = .3, t
				}
				return __extends(t, e), t.prototype.start = function() {
					window.WxFunc.hideBannerAd()
				}, t.prototype.updateUi = function(e, t) {
					var i = e.nowShowSceneId;
					i || (i = 1), window.Func._addSpritePic(this.node.getChildByName("bg").getComponent(cc.Sprite), "texture/bg/scene/scene" + i + "_1"), this.m_Func = t;
					var o = e.mydata;
					if (o.step = o.step || 1, "number" != typeof o.heartNum && (o.heartNum = 0), this.m_data = o, void 0 != o.avatar) {
						var n = this.node.getChildByName("tSprite").getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite);
						window.Func._addProtoPic(o.avatar, n, 68, 68)
					}
					this.node.getChildByName("tSprite").getChildByName("Label1").getComponent(cc.Label).string = o.name || window.Data.startName, this.node.getChildByName("tSprite").getChildByName("Label3").getComponent(cc.Label).string = o.position ? o.position : "G\u00f3c Tr\u00e1i \u0110\u1ea5t", this.node.getChildByName("tSprite").getChildByName("Label2").getComponent(cc.Label).string = o.title || "\u672aNh\u1eadn", o.isfriend && (this.node.getChildByName("tSprite").getChildByName("Button").active = !1), this.node.getChildByName("bg").scale = window.Game.getBgScale();
					var a = this;
					cc.loader.loadRes("prefabs/index/farm", function(t, i) {
						if (t) console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/index/farm", t);
						else
							for (var o = 1; o <= window.Constant.AllBaseCrop; o++) {
								var n = window.Constant.cropSpritePosList[o - 1],
									r = cc.instantiate(i);
								r.name = "farm" + o, a.node.addChild(r), r.setPosition(n);
								var s = r.getComponent("FarmController");
								s.initOther(o, e.farm && e.farm[o] ? e.farm[o] : []), a.farmList[o] = s
							}
					}), window.Game.m_rank_windowObj && (window.Game.m_rank_windowObj.active = !1), this.reloadXinNum(o);
					var r = window.FileData.getFileData("dlFriend"),
						s = window.FileData.getFileData("dlFriend2");
					if (this.node.getChildByName("Sprite1").active = this.m_data.isfriend || 5 == o.step || 4 == o.step, this.node.getChildByName("Sprite1").getChildByName("panel2").active = !1, this.node.getChildByName("Sprite1").getChildByName("Label1").getComponent(cc.Label).string = "H\u00f4m nay \u0111\u00e3 gi\u00fapTAch\u0103m s\u00f3c\uff1a" + (r[this.m_data.uid] ? 0 : 1) + "/1", 2 == o.step || 4 == o.step && 2 == o.mtype && !s[o.uid]) {
						this.node.getChildByName("Sprite1").active = !0, this.node.getChildByName("Sprite1").getChildByName("Button").active = !1, this.node.getChildByName("Sprite1").getChildByName("panel2").active = !0, window.Func._addSpritePic2(this.node.getChildByName("Sprite1").getChildByName("Button").getChildByName("icon9").getComponent(cc.Sprite), "texture/tps/friend", "icon10", !1);
						var d = o.behavior ? o.behavior.split(":") : [];
						this.node.getChildByName("Sprite1").getChildByName("Label1").getComponent(cc.Label).string = 2 == d[1] ? "Người này từng lấy cây của bạn" : "Người này chưa từng lấy cây của bạn"
					} else r[this.m_data.uid] && 5 != o.step && (this.node.getChildByName("Sprite1").getChildByName("Button").active = !1, this.node.getChildByName("action").active = !1);
					if ((this.node.getChildByName("action").zIndex = 102, window.Game2.TyNodeList["friend/friendlist_window"] && (window.Game2.TyNodeList["friend/friendlist_window"].active = !1), o.showsz) && window.FileData.getFileData("newAccount") > 6) {
						var c = window.FileData.getFileData("turnnum");
						c < 2 && (this.node.getChildByName("Sprite1").getChildByName("szSprite").active = !0, window.Game2.playSzAction(this.node.getChildByName("Sprite1"))), window.FileData.setFileData("turnnum", c + 1)
					}
				}, t.prototype.reloadXinNum = function(e) {
					for (var t = e.heartNum || 0, i = this.node.getChildByName("Sprite1"), o = 0; o < 10; o++) i.getChildByName("Sprite" + (o + 1)).active = Math.abs(t) > o, window.Func._addSpritePic2(i.getChildByName("Sprite" + (o + 1)).getComponent(cc.Sprite), "texture/tps/window1_1", "icon13_" + (t > 0 ? 2 : 3), !1)
				}, t.prototype.addHourseGold = function(e) {
					var t = [{
						type: 11,
						num: Math.max(10, window.Data.getNHourCropNum(3600 * e))
					}];
					window.Data.setGoodAward(t), window.Game.openAwardLayer3(t)
				}, t.prototype.BtOk1 = function() {
					var e = window.FileData.getFileData("dlFriend"),
						t = window.FileData.getFileData("dlFriend2"),
						i = window.FileData.getFileData("dlFriendtimes1"),
						o = window.FileData.getFileData("dlFriendtimes2");
					if (4 == this.m_data.step) {
						if (1 == this.m_data.mtype && e[this.m_data.uid]) return void window.Game.showAlertBar("\u4ecang\u00e0yđã ch\u0103m s\u00f3cuser này");
						if (2 == this.m_data.mtype && t[this.m_data.uid]) return void window.Game.showAlertBar("\u4ecang\u00e0yĐã trả thù user này")
					} else if (5 != this.m_data.step && e[this.m_data.uid]) return void window.Game.showAlertBar("\u4ecang\u00e0yđã ch\u0103m s\u00f3cuser này");
					if (5 != this.m_data.step)
						if (4 == this.m_data.step) {
							if (o >= 10) return void window.Game.showAlertBar("\u4ecang\u00e0yTh\u0103m l\u1ea1il\u01b0\u1ee3t\u0110\u00e3 \u0111\u1ea1t max")
						} else if (i >= 15) return void window.Game.showAlertBar("\u4ecang\u00e0ych\u0103m s\u00f3cl\u01b0\u1ee3t\u0110\u00e3 \u0111\u1ea1t max");
					var n = this;
					this.m_data.uid && window.NetHelper.sendFriendTakeCareRequest(this.m_data.uid, function() {
						e[n.m_data.uid] = 1, 4 == n.m_data.step && 2 == n.m_data.mtype ? (t[n.m_data.uid] = 1, window.FileData.setFileData("dlFriend2", t)) : 1 == n.m_data.step && (e[n.m_data.uid] = 1, window.FileData.setFileData("dlFriend", e)), 4 == n.m_data.step ? window.FileData.setFileData("dlFriendtimes2", o + 1) : 1 == n.m_data.step && window.FileData.setFileData("dlFriendtimes1", i + 1), n.stopClose = !0, n.node.getChildByName("Sprite1").getChildByName("Label1").getComponent(cc.Label).string = "H\u00f4m nay \u0111\u00e3 gi\u00fapTAch\u0103m s\u00f3c\uff1a0/1", n.node.getChildByName("action").active = !0, n.scheduleOnce(function() {
							n.node.getChildByName("action").active = !1, n.stopClose = !1, n.m_data.heartNum = "number" != typeof n.m_data.heartNum ? 1 : Math.min(10, n.m_data.heartNum + 1), n.reloadXinNum(n.m_data), this.addHourseGold(n.syNum), n.node.getChildByName("Sprite1").getChildByName("Button").active = !1
						}, 1)
					}), n.stopClose = !0, this.scheduleOnce(function() {
						this.stopClose = !1
					}, 3), n.m_data.showsz && (this.node.getChildByName("Sprite1").getChildByName("szSprite").active = !1)
				}, t.prototype.BtOk2 = function() {
					if (!this.stopClose) {
						var e = window.FileData.getFileData("dlFriend2"),
							t = window.FileData.getFileData("dlFriendtimes2");
						if (4 == this.m_data.step) {
							if (2 == this.m_data.mtype && e[this.m_data.uid]) return void window.Game.showAlertBar("\u4ecang\u00e0yĐã trả thù user này");
							if (2 != this.m_data.mtype) return void window.Game.showAlertBar("H\u00e1i tr\u1ed9mTrạng tháiL\u1ed7i")
						}
						this.stopClose = !0;
						var i = this;
						window.NetHelper.sendFriendMakeTroubleRequest(i.m_data.uid, function() {
							for (var o = 1; o <= window.Constant.AllBaseCrop; o++) i.farmList[o]._FarmAction.createAction2();
							i.scheduleOnce(function() {
								for (var e = 1; e <= window.Constant.AllBaseCrop; e++) i.farmList[e]._FarmAction.createAction2()
							}, .6), i.scheduleOnce(function() {
								i.addHourseGold(i.syNum), i.node.getChildByName("Sprite1").getChildByName("panel2").active = !1, i.m_data.heartNum = "number" != typeof i.m_data.heartNum ? -1 : Math.max(-10, i.m_data.heartNum - 1), i.reloadXinNum(i.m_data), 4 == i.m_data.step && 2 == this.m_data.mtype && (e[i.m_data.uid] = 1, window.FileData.setFileData("dlFriend2", e)), 4 == i.m_data.step && window.FileData.setFileData("dlFriendtimes2", t + 1), i.stopClose = !1
							}, 1.2)
						}), this.scheduleOnce(function() {
							this.stopClose = !1
						}, 3), i.m_data.showsz && (this.node.getChildByName("Sprite1").getChildByName("szSprite").active = !1)
					}
				}, t.prototype.BtOk3 = function() {
					window.Game2.TyClickChange(null, window.Constant.TyWindowKeyList.friendchangemb_window)
				}, t.prototype.BtOk4 = function() {
					window.NetHelper.sendFriendApplyRequest(this.m_data.uid, function() {
						window.Game.showAlertBar("B\u1ea1n b\u00e8XinTh\u00e0nh c\u00f4ng")
					})
				}, t.prototype.BtClose = function() {
					this.stopClose || (window.Game.m_rank_windowObj && (window.Game.m_rank_windowObj.active = !0), this.m_Func && this.m_Func(this.m_data), window.Game2.TyNodeList["friend/friendlist_window"] && (window.Game2.TyNodeList["friend/friendlist_window"].active = !0), this.node.removeFromParent(!0), window.WxFunc.openBannerAd())
				}, t = __decorate([n], t)
			}(cc.Component));
		i.UserScene = a, cc._RF.pop()
	}, {}],
	WxFunc: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "3bb6eBijLBNIoKSsT0LLmtU", "WxFunc"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = e("PlayAd"),
			n = function() {
				function e() {
					this.adClass = null, this.isShareFunc = null, this.getUserButton = [], this.recorderPlayState = 0
				}
				return e.prototype.init = function() {
					this.adClass = new o.PlayAd, this.adClass.start()
				}, e.prototype.sendDataToWx = function() {
					if (cc.sys.platform === cc.sys.WECHAT_GAME && 2 != window.Config.Step) {
						var e = new Array;
						e.push({
							key: "duobao_wxnc_gold",
							value: "" + window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_gold"))
						}), e.push({
							key: "duobao_wxnc_seed",
							value: "" + window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_seed"))
						}), e.push({
							key: "duobao_wxnc_suipian",
							value: "" + window.Game.getCropLevelNum(0, 0)
						}), e.push({
							key: "duobao_wxnc_rank_updatetime",
							value: "" + window.Func.getTimeUnix()
						}), e.push({
							key: "sex",
							value: "" + window.WxLogin.gender
						}), e.push({
							key: "title",
							value: window.Game2.getTitleName()
						}), e.push({
							key: "duobao_wxnc_goldsecond",
							value: "" + window.Func.unSecretNumber(window.FileData.getRankFileData("history_max_goldsecond"))
						}), wx.setUserCloudStorage({
							KVDataList: e
						})
					}
				}, e.prototype.showModal = function(e, t) {
					void 0 === e && (e = "Th\u00f4ng b\u00e1o"), void 0 === t && (t = "Hi\u1ec7n t\u1ea1iBản WeChat quá cũ\uff0c\u65e0\u6cd5D\u00f9ng\u8be5\u529fcó thể\uff0cHãy N\u00e2ng c\u1ea5pCập nhật WeChat rồi thử lại\u3002"), cc.sys.platform === cc.sys.WECHAT_GAME && 2 != window.Config.Step && wx.showModal({
						title: e,
						content: t
					})
				}, e.prototype.createAuthor = function() {
					return 2 != window.Config.Step && (!window.WxLogin.isAuthor && (window.WxLogin.getScope(), !0))
				}, e.prototype.createAuthorButton = function() {}, e.prototype.createShare = function(e, t) {
					void 0 === t && (t = null), console.log("createShare");
					var i = this.getShareFileData(e);
					return 4 == window.Config.Step ? (window.h5api.share(), this.setShareFileData(e, i + 1), void(null != t && t())) : 4 == window.Config.Step ? (window.h5api.share(), this.setShareFileData(e, i + 1), void(null != t && t())) : (this.setShareFileData(e, i + 1), void(null != t && t()))
				}, e.prototype.setClipData = function(e) {}, e.prototype.createClickAuthor = function(e) {
					void 0 === e && (e = 1)
				}, e.prototype.closeUserButton = function() {
					if (this.getUserButton)
						for (var e in this.getUserButton) this.getUserButton[e] && this.getUserButton[e].hide()
				}, e.prototype.setUserButton = function(e, t) {
					this.getUserButton[e] ? t ? this.getUserButton[e].show() : this.getUserButton[e].hide() : t && this.createClickAuthor(e)
				}, e.prototype.sendPost = function(e, t) {
					void 0 === t && (t = !1)
				}, e.prototype.SaveProto = function() {}, e.prototype.openApp = function(e) {}, e.prototype.OpenAd = function(e, t) {
					console.log("OpenAd");
					var i = this.getAdFileData(e);
					if (!window.Game2.ifEnoughPlayAd(e) && i > 0) window.Game.showAlertBar("H\u1ebft l\u01b0\u1ee3t QC h\u00f4m nay");
					else {
						var o = this,
							n = function() {
								o.setAdFileData(e, i + 1), void 0 != t && t()
							};
						if (4 != window.Config.Step) return this.setAdFileData(e, i + 1), void(t && t());
						window.h5api.canPlayAd(function(e) {
							e.canPlayAd ? window.h5api.playAd(function(e) {
								if (console.log("\u4ee3\u7801:" + e.code + ",\u6d88\u606f:" + e.message), 1e4 === e.code) console.log("B\u1eaft \u0111\u1ea7u\u64ad\u653e"), window.IndexScene.bgMusicId > 0 && cc.audioEngine.pause(window.IndexScene.bgMusicId);
								else if (10001 === e.code) {
									console.log("Phát xong"), 2 == cc.audioEngine.getState(window.IndexScene.bgMusicId) && cc.audioEngine.resume(window.IndexScene.bgMusicId), n()
								} else console.log("QC l\u1ed7i")
							}) : window.WxFunc.setAdFileData(0, 8)
						})
					}
				}, e.prototype.openBannerAd = function() {}, e.prototype.hideBannerAd = function() {}, e.prototype.showLoading = function(e) {
					void 0 === e && (e = "\u0110ang t\u1ea3i......"), cc.sys.platform === cc.sys.WECHAT_GAME && 2 != window.Config.Step && wx.showLoading({
						title: e
					})
				}, e.prototype.hideLoading = function() {
					cc.sys.platform === cc.sys.WECHAT_GAME && 2 != window.Config.Step && wx.hideLoading()
				}, e.prototype.getShareFileData = function(e) {
					var t = window.FileData.getFileData(),
						i = 0;
					void 0 != t.share && void 0 != t.share[e] && (i = t.share[e]);
					return void 0 != t.share && void 0 != t.share[window.Constant.shareIdList.NONE_] && t.share[window.Constant.shareIdList.NONE_] > 0 && (i = 1e3), i
				}, e.prototype.setShareFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.share && "" != i.share || (i.share = {}), i.share[e] = t, window.FileData.setFileData("share", i.share)
				}, e.prototype.getAdFileData = function(e) {
					var t = window.FileData.getFileData(),
						i = 0;
					return void 0 != t.ad && void 0 != t.ad[e] && (i = t.ad[e]), i
				}, e.prototype.setAdFileData = function(e, t) {
					var i = window.FileData.getFileData();
					void 0 != i.ad && "" != i.ad || (i.ad = {}), i.ad[e] = t, window.FileData.setFileData("ad", i.ad)
				}, e.prototype.clearAdFileData = function() {
					console.log("clearAdFileData"), window.FileData.setFileData("freeGetdiamTimes", 0), window.FileData.setFileData("snowDouble", 2), window.FileData.setFileData("ad", {}), window.FileData.setFileData("marketShareData", {}), window.FileData.setFileData("share", {}), window.FileData.setFileData("freeGetGold2", 0), window.FileData.setFileData("cbt", {}), window.FileData.setFileData("shareResult", {}), window.FileData.setFileData("today_add_seed", 0), window.FileData.setFileData("title_award", 0), window.FileData.setFileData("activity_addScene", 0), window.FileData.setFileData("dlFriend", {}), window.FileData.setFileData("dlFriend2", {}), window.FileData.setFileData("dlFriendtimes1", 0), window.FileData.setFileData("dlFriendtimes2", 0), window.FileHelper.resetTaskFinishFileData(), window.NetHelper.sendClearInviteRequest(window.Constant.shareIdList.DCR), cc.sys.localStorage.setItem("lastdata2", cc.sys.localStorage.getItem("lastdata1")), cc.sys.localStorage.setItem("lastdata1", cc.sys.localStorage.getItem("data"))
				}, e.prototype.playRecorder = function() {}, e.prototype.stopRecorder = function() {}, e
			}();
		i.WxFunc = n, cc._RF.pop()
	}, {
		PlayAd: "PlayAd"
	}],
	WxLogin: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "56158ZqLgpC+IvLFK5K5Ghh", "WxLogin"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.tempCode = "", t.appid = "wxb3835a959526f19a", t.secret = "42b0b0d104f2764416c2a54250c6b3d3", t.grant_type = "authorization_code", t.openId = "", t.session_key = "", t.anonymousCode = "", t.nickName = "", t.avatarUrl = "", t.gender = 0, t.city = "", t.province = "", t.city_code = 0, t.isAuthor = !1, t.address_component = null, t
				}
				return __extends(t, e), t.prototype.init = function() {
					cc.sys.platform === cc.sys.WECHAT_GAME && (wx.setKeepScreenOn({
						keepScreenOn: !0
					}), this.address_component = window.FileData.getAddressFileData(), this.setAddress())
				}, t.prototype.getAddress = function(e) {
					void 0 === e && (e = null), e && e()
				}, t.prototype.setAddress = function() {
					this.address_component && (this.city = this.address_component.address_component.city, this.city && (this.city = this.city.replace(/\u5e02/, ""), this.province = this.address_component.address_component.province, window.FileData.setFileData("address_city", this.city), window.FileData.setFileData("address_province", this.province), this.address_component.ad_info && this.address_component.ad_info.city_code && (this.city_code = isNaN(parseInt(this.address_component.ad_info.city_code)) ? 0 : parseInt(this.address_component.ad_info.city_code)), console.log("setAddress", this.city, this.province)))
				}, t.prototype._onLoad = function() {
					console.log("WxLogin - _onLoad")
				}, t.prototype.SetWxData = function() {}, t.prototype.setDataQuery = function(e) {
					var t = window.Func.unSecretString(e);
					if (console.log("M\u1eddiTham số callback " + t), void 0 != t) {
						var i = JSON.parse(t);
						if (i.uid != window.Data.UId && (window.Func.sendALDCount("re-share", {
								title: i.content,
								proto: i.proto_id,
								id: i.id
							}), console.log("window['Data'].isNewAccount", window.Data.isNewAccount, window.Constant.saveShareNewUserList[i.id]), (1 != window.Constant.saveShareNewUserList[i.id] || 1 == window.Constant.saveShareNewUserList[i.id] && window.Data.isNewAccount) && (i.id == window.Constant.shareIdList.GETFRIEND ? window.NetHelper.sendFriendByInviteRequest(i.uid) : window.NetHelper.sendInviteRequest(i.id, i.uid, function() {
								var e = 0;
								i.id == window.Constant.shareIdList.FAIR ? e = 1001 : i.id == window.Constant.shareIdList.SUNNY_DAY ? e = 1002 : i.id == window.Constant.shareIdList.DCR && (e = 1003);
								var t = "";
								if (e > 0)
									for (var o = window.JsonManager.getTable("Error"), n = 0; n < o.length; n++) o[n].Id == e && (t = o[n].Tips);
								"" != t && window.Game.showAlertBar(t)
							})), window.Data.isNewAccount)) {
							window.Func.sendALDCount("Xem QCSố user mới", {
								proto: i.proto_id
							});
							var o = {};
							o.proto = i.proto_id, o.addtime = window.Func.getTimeUnix(), window.FileData.setFileData("share_newAdd_account", JSON.stringify(o))
						}
					}
				}, t.prototype.compareVersion = function(e, t) {
					e = e.split("."), t = t.split(".");
					for (var i = Math.max(e.length, t.length); e.length < i;) e.push("0");
					for (; t.length < i;) t.push("0");
					for (var o = 0; o < i; o++) {
						var n = parseInt(e[o]),
							a = parseInt(t[o]);
						if (n > a) return 1;
						if (n < a) return -1
					}
					return 0
				}, t.prototype.getScope = function(e, t, i) {
					if (void 0 === e && (e = "scope.userInfo"), void 0 === t && (t = null), void 0 === i && (i = null), cc.sys.platform === cc.sys.WECHAT_GAME) {
						var o = this,
							n = wx.getSystemInfoSync().SDKVersion;
						this.compareVersion(n, "1.2.0") >= 0 ? wx.getSetting({
							success: function(n) {
								n.authSetting[e] ? t && t() : wx.authorize({
									scope: e,
									success: function() {
										"scope.userInfo" == e && o.getUserInfo(!0), t && t()
									},
									fail: function() {
										i && i()
									}
								})
							}
						}) : window.WxFunc.showModal()
					}
				}, t.prototype.login = function() {
					window.YxhLogin.login(), cc.sys.platform === cc.sys.WECHAT_GAME && this.checkSession()
				}, t.prototype.loginWx = function() {
					var e = this;
					cc.log("loginWx");
					var t = {
						success: function(t) {
							e.tempCode = t.code, e.anonymousCode = t.anonymousCode, e.getAccessToken(), e.getUserInfo(!0)
						},
						fail: function() {
							e.scheduleOnce(function() {
								this.loginWx()
							}, 1), console.error(">>>>>Đăng nhậpTh\u1ea5t b\u1ea1i")
						}
					};
					wx.login(t)
				}, t.prototype.checkSession = function() {
					console.log("checkSession"), this.loginWx()
				}, t.prototype.getAccessToken = function() {
					if (console.log("getAccessToken"), "" != this.tempCode) window.FileData.setFileData("ptid", this.tempCode), window.Data.PTid = this.tempCode;
					else {
						var e = window.FileData.getFileData("ptid");
						"string" == typeof e && "" != e && (window.Data.PTid = e)
					}
					window.NetHelper.sendLoginRequest()
				}, t.prototype.request = function(e, t, i) {
					var o = {
						url: e,
						method: "GET",
						dataType: "json",
						success: function(e) {
							null != t && t(e)
						},
						fail: function() {
							null != i && i(), console.error(">>>>>>Hãy \u6c42urlTh\u1ea5t b\u1ea1i\uff1a" + o.url)
						}
					};
					wx.request(o)
				}, t.prototype.getUserInfo = function(e) {
					var t = this;
					if (void 0 === e && (e = !1), console.log("getUserInfo"), "" == this.nickName) {
						var i = this,
							o = {
								withCredentials: !1,
								lang: "zh_CN",
								success: function(e) {
									i.setUserData(e)
								},
								fail: function() {
									i.isAuthor = !1, console.log(">>>>Lấy thông tin userTh\u1ea5t b\u1ea1i:" + t.tempCode), window.WxFunc.createClickAuthor()
								}
							};
						wx.getUserInfo(o)
					}
				}, t.prototype.setUserData = function(e) {
					var t = e.userInfo;
					if (this.nickName = t.nickName, this.avatarUrl = t.avatarUrl, this.gender = t.gender, !this.address_component) {
						this.province = t.province, this.city = t.city;
						t.country
					}
					this.isAuthor = !0, console.log(">>>>Lấy thông tin userTh\u00e0nh c\u00f4ng:" + JSON.stringify(t)), window.Data.isLogin() && window.NetHelper.sendUpdateInfoRequest(), window.WxFunc.closeUserButton()
				}, t = __decorate([n], t)
			}(cc.Component));
		i.WxLogin = a, cc._RF.pop()
	}, {
		"../qqmap/qqmap-wx-jssdk.js": "qqmap-wx-jssdk"
	}],
	YqylScrollLayer: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "0fa690jRVtGfqtduTYAzs6l", "YqylScrollLayer"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = o.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Model = 1, t.dataList = null, t
				}
				return __extends(t, e), t.prototype.initUI = function(e) {
					void 0 === e && (e = []);
					var t = window.JsonManager.getTable("InviteFriend");
					this.dataList = [];
					for (var i = 0; i < t.length; i++) {
						if (void 0 != e[i] && void 0 != e[i].uid && "" != e[i].uid)
							for (var o in e[i]) t[i][o] = e[i][o];
						this.dataList.push(t[i])
					}
					this.initCellDataList(this.dataList, !1), this.createCellList(), window.Game.windowMoveAction(this.node.getParent(), 1, null, !1), this.node.getParent().getChildByName("Label").getComponent(cc.Label).string = "đã M\u1eddi\uff1a" + Math.min(e.length, this.dataList.length) + "/" + this.dataList.length
				}, t.prototype.updateView = function(e, t, i) {
					i.getChildByName("wSprite1").getChildByName("Sprite").active = !1, i.getChildByName("Label1").getComponent(cc.Label).string = void 0 != t.name ? t.name : "thứ " + (e + 1) + "\u4f4dB\u1ea1n b\u00e8", window.Func._addSpritePic2(i.getChildByName("Sprite1").getComponent(cc.Sprite), "texture/tps/common", "s_" + t.Type1, !1), i.getChildByName("Sprite1").getChildByName("Label1").getComponent(cc.Label).string = "+" + t.Num1, window.Func._addSpritePic2(i.getChildByName("Sprite2").getComponent(cc.Sprite), "texture/tps/common", "s_" + t.Type2, !1), i.getChildByName("Sprite2").getChildByName("Label1").getComponent(cc.Label).string = "+" + t.Num2;
					var o = "Nh\u1eadn";
					if (void 0 == t.uid) o = "M\u1eddi", i.getChildByName("wSprite1").getChildByName("Sprite").active = !1, window.Game.BtChangeEnabled(i.getChildByName("Button"), !0, 1);
					else {
						if (i.getChildByName("wSprite1").getChildByName("Sprite").active = !0, void 0 != t.avatar) {
							var n = i.getChildByName("wSprite1").getChildByName("Sprite").getComponent(cc.Sprite);
							window.Func._addProtoPic(t.avatar, n, 75, 75)
						}
						1 == t.state ? (o = "\u0110\u00e3 nh\u1eadn", window.Game.BtChangeEnabled(i.getChildByName("Button"), !1)) : window.Game.BtChangeEnabled(i.getChildByName("Button"), !0, 2)
					}
					var a = i.getChildByName("Button").getComponent(cc.Button);
					if (0 == a.clickEvents.length) {
						var r = new cc.Component.EventHandler;
						r.target = this.node, r.component = "YqylScrollLayer", r.handler = "BtGetAward", r.customEventData = "" + e, a.clickEvents.push(r)
					} else a.clickEvents[0].customEventData = "" + e;
					i.getChildByName("Button").getChildByName("Label").getComponent(cc.Label).string = o
				}, t.prototype.BtGetAward = function(e, t) {
					var i = this.dataList[t];
					cc.log("BtGetAward  " + t + " " + JSON.stringify(i)), 1 != i.state && (void 0 != i.uid ? (this.dataList[t].state = 1, window.NetHelper.sendTakeInviteAwardRequest(window.Constant.shareIdList.NEW_USER, i.uid, function() {
						var t = [{
							type: i.Type1,
							num: i.Num1
						}, {
							type: i.Type2,
							num: i.Num2
						}];
						window.Data.setGoodAward(t), window.Game.openAwardLayer3(t), window.Game.BtChangeEnabled(e.target)
					})) : this.BtYaoQingFrieng())
				}, t.prototype.BtYaoQingFrieng = function() {
					cc.log("BtYaoQingFrieng"), window.WxFunc.createShare(window.Constant.shareIdList.NEW_USER), window.Game.openAwardLayer3(), window.FileData.saveFileData(!0)
				}, t.prototype.BtClose = function() {
					var e = this;
					window.Game.windowMoveAction(this.node.getParent(), 2, function() {
						e.node.getParent().getParent().removeFromParent(!0)
					})
				}, __decorate([a(Number)], t.prototype, "Model", void 0), t = __decorate([n], t)
			}(e("./../BaseScrollView").BaseScrollView);
		i.default = r, cc._RF.pop()
	}, {
		"./../BaseScrollView": "BaseScrollView"
	}],
	YxhLogin: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "9808cQ+cfFIdoED7J8cVgWa", "YxhLogin"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.init = function() {
					if (4 == window.Config.Step) {
						try {
							window.h5api.canPlayAd(function(e) {
								e.canPlayAd || window.WxFunc.setAdFileData(0, 8)
							})
						} catch (e) {}
						console.log("YxhLogin init")
					}
				}, t.prototype.createChangeLogin = function() {
					if (4 == window.Config.Step) {
						var e = this;
						cc.loader.loadRes("prefabs/change_login", function(t, i) {
							if (t) return console.log("prefabT\u1ea3iTh\u1ea5t b\u1ea1i:prefabs/change_login", t), void e.createChangeLogin();
							var o = cc.instantiate(i);
							o.setPosition(cc.winSize.width / 2, cc.winSize.height / 2), o.zIndex = 100, cc.director.getScene().addChild(o)
						})
					}
				}, t.prototype.login = function(e) {
					if (void 0 === e && (e = !1), 4 == window.Config.Step) {
						console.log("YxhLogin login");
						try {
							if (1 == window.Data.Status && !e && !window.h5api.isLogin()) return void this.createChangeLogin();
							window.h5api.login(function(e) {
								console.log("login scuess ", JSON.stringify(e)), window.Data.PTid = e.uId, window.WxLogin.nickName = e.userName, window.WxLogin.avatarUrl = window.h5api.getUserAvatar(e.uId), window.NetHelper.sendLoginRequest()
							}, function(e) {
								console.log("login error", e)
							})
						} catch (e) {
							console.log("YxhLogin Th\u1ea5t b\u1ea1i"), window.NetHelper.sendLoginRequest()
						}
					}
				}, t.prototype.onADInited = function() {}, t = __decorate([n], t)
			}(cc.Component));
		i.YxhLogin = a, cc._RF.pop()
	}, {}],
	ZqLogin: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "31d7eAFVPJMUpevBo0A1eR2", "ZqLogin"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			a = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.init = function() {
					if (3 == window.Config.Step) {
						console.log("ZqLogin init");
						var e = this;
						window.Uni.init("arcade", 3, 100056737, function() {
							e.login(), e.onADInited()
						})
					}
				}, t.prototype.login = function() {
					3 == window.Config.Step && (console.log("ZqLogin login"), window.Uni.login({
						success: function(e) {
							console.log("đã Đăng nhập\uff0cnickName:" + e.userInfo.nickName + " gameName:" + window.Uni.gameName)
						},
						fail: function(e) {
							console.log("fail", e.code + "\n" + e.message)
						},
						complete: function() {
							console.log("complete")
						},
						timeout: 1e3,
						debug_scookie: "1470631|b232eae86bdb78a5f20b818936d98a8ae4c85f67|1|3ac9faeab00540d65a28cc59bfce6fce",
						debug_uid: "1470631"
					}))
				}, t.prototype.onADInited = function() {}, t = __decorate([n], t)
			}(cc.Component));
		i.ZqLogin = a, cc._RF.pop()
	}, {}],
	algo: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "ca67aR9c4JDz5zVBRy2+MQi", "algo");
		var o = {
			cipher: function(e, t) {
				for (var i = t.length / 4 - 1, n = [
						[],
						[],
						[],
						[]
					], a = 0; a < 16; a++) n[a % 4][Math.floor(a / 4)] = e[a];
				n = o.addRoundKey(n, t, 0, 4);
				for (var r = 1; r < i; r++) n = o.subBytes(n, 4), n = o.shiftRows(n, 4), n = o.mixColumns(n, 4), n = o.addRoundKey(n, t, r, 4);
				n = o.subBytes(n, 4), n = o.shiftRows(n, 4), n = o.addRoundKey(n, t, i, 4);
				var s = new Array(16);
				for (a = 0; a < 16; a++) s[a] = n[a % 4][Math.floor(a / 4)];
				return s
			},
			keyExpansion: function(e) {
				for (var t = e.length / 4, i = t + 6, n = new Array(4 * (i + 1)), a = new Array(4), r = 0; r < t; r++) {
					var s = [e[4 * r], e[4 * r + 1], e[4 * r + 2], e[4 * r + 3]];
					n[r] = s
				}
				for (r = t; r < 4 * (i + 1); r++) {
					n[r] = new Array(4);
					for (var d = 0; d < 4; d++) a[d] = n[r - 1][d];
					if (r % t == 0) {
						a = o.subWord(o.rotWord(a));
						for (d = 0; d < 4; d++) a[d] ^= o.rCon[r / t][d]
					} else t > 6 && r % t == 4 && (a = o.subWord(a));
					for (d = 0; d < 4; d++) n[r][d] = n[r - t][d] ^ a[d]
				}
				return n
			},
			subBytes: function(e, t) {
				for (var i = 0; i < 4; i++)
					for (var n = 0; n < t; n++) e[i][n] = o.sBox[e[i][n]];
				return e
			},
			shiftRows: function(e, t) {
				for (var i = new Array(4), o = 1; o < 4; o++) {
					for (var n = 0; n < 4; n++) i[n] = e[o][(n + o) % t];
					for (n = 0; n < 4; n++) e[o][n] = i[n]
				}
				return e
			},
			mixColumns: function(e, t) {
				for (var i = 0; i < 4; i++) {
					for (var o = new Array(4), n = new Array(4), a = 0; a < 4; a++) o[a] = e[a][i], n[a] = 128 & e[a][i] ? e[a][i] << 1 ^ 283 : e[a][i] << 1;
					e[0][i] = n[0] ^ o[1] ^ n[1] ^ o[2] ^ o[3], e[1][i] = o[0] ^ n[1] ^ o[2] ^ n[2] ^ o[3], e[2][i] = o[0] ^ o[1] ^ n[2] ^ o[3] ^ n[3], e[3][i] = o[0] ^ n[0] ^ o[1] ^ o[2] ^ n[3]
				}
				return e
			},
			addRoundKey: function(e, t, i, o) {
				for (var n = 0; n < 4; n++)
					for (var a = 0; a < o; a++) e[n][a] ^= t[4 * i + a][n];
				return e
			},
			subWord: function(e) {
				for (var t = 0; t < 4; t++) e[t] = o.sBox[e[t]];
				return e
			},
			rotWord: function(e) {
				for (var t = e[0], i = 0; i < 3; i++) e[i] = e[i + 1];
				return e[3] = t, e
			},
			sBox: [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
			rCon: [
				[0, 0, 0, 0],
				[1, 0, 0, 0],
				[2, 0, 0, 0],
				[4, 0, 0, 0],
				[8, 0, 0, 0],
				[16, 0, 0, 0],
				[32, 0, 0, 0],
				[64, 0, 0, 0],
				[128, 0, 0, 0],
				[27, 0, 0, 0],
				[54, 0, 0, 0]
			]
		};
		void 0 !== t && t.exports && (t.exports = o), "function" == typeof define && define.amd && define([], function() {
			return o
		}), cc._RF.pop()
	}, {}],
	base64: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "72629VKgChKH4vvG+NU1Xp1", "base64");
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		(function() {
			var e = {},
				i = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="],
				n = {
					A: 0,
					B: 1,
					C: 2,
					D: 3,
					E: 4,
					F: 5,
					G: 6,
					H: 7,
					I: 8,
					J: 9,
					K: 10,
					L: 11,
					M: 12,
					N: 13,
					O: 14,
					P: 15,
					Q: 16,
					R: 17,
					S: 18,
					T: 19,
					U: 20,
					V: 21,
					W: 22,
					X: 23,
					Y: 24,
					Z: 25,
					a: 26,
					b: 27,
					c: 28,
					d: 29,
					e: 30,
					f: 31,
					g: 32,
					h: 33,
					i: 34,
					j: 35,
					k: 36,
					l: 37,
					m: 38,
					n: 39,
					o: 40,
					p: 41,
					q: 42,
					r: 43,
					s: 44,
					t: 45,
					u: 46,
					v: 47,
					w: 48,
					x: 49,
					y: 50,
					z: 51,
					0: 52,
					1: 53,
					2: 54,
					3: 55,
					4: 56,
					5: 57,
					6: 58,
					7: 59,
					8: 60,
					9: 61,
					"+": 62,
					"/": 63
				};
			e.encode = window.btoa ? function(e) {
				return window.btoa(unescape(encodeURIComponent(e)))
			} : function(e) {
				var t, o, n, a, r, s, d, c, l = 0,
					p = 0,
					u = [];
				for (t = (e = unescape(encodeURIComponent(e))).length; l < t;) r = (o = e.charCodeAt(l++) || 0) >> 2 & 63, s = (3 & o) << 4 | (n = e.charCodeAt(l++) || 0) >> 4 & 15, d = (15 & n) << 2 | (a = e.charCodeAt(l++) || 0) >> 6 & 3, c = 63 & a, a || (c = 64, n || (d = 64)), u[p++] = i[r], u[p++] = i[s], u[p++] = i[d], u[p++] = i[c];
				return u.join("")
			}, e.decode = window.atob ? function(e) {
				return decodeURIComponent(escape(window.atob(e)))
			} : function(e) {
				var t, i, o, a, r, s, d = 0,
					c = 0,
					l = [];
				for (t = (e = e.replace(/\=+$/, "").split("")).length; d < t;) a = (63 & (n[e[d++]] || "")) << 2 | (i = n[e[d++]] || "") >> 4 & 3, r = (15 & i) << 4 | (o = n[e[d++]] || "") >> 2 & 15, s = (3 & o) << 6 | 63 & (n[e[d++]] || ""), l[c++] = String.fromCharCode(a), r && (l[c++] = String.fromCharCode(r), s && (l[c++] = String.fromCharCode(s)));
				return decodeURIComponent(escape(l.join("")))
			}, e.encodeSafe = function(t) {
				return e.encode(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ".")
			}, e.decodeSafe = function(t) {
				return e.decode(t.replace(/-/g, "+").replace(/_/g, "/").replace(/\./g, "="))
			}, "object" === ("undefined" == typeof lego ? "undefined" : o(lego)) && lego.define ? lego.define("base64", [], function(t, i, o) {
				o.exports = e
			}) : "object" === (void 0 === t ? "undefined" : o(t)) && t.exports ? t.exports = e : window.base64 = e
		})(), cc._RF.pop()
	}, {}],
	encryptjs: [function(e, t, i) {
		(function(o) {
			"use strict";
			cc._RF.push(t, "76985pwX2VDiJzRRgjl+2NP", "encryptjs");
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			(function(e, o) {
				void 0 !== i && void 0 !== t ? t.exports = o() : "function" == typeof define && "object" === n(define.amd) ? define(o) : "function" == typeof define && "object" === n(define.petal) ? define("encryptjs", [], o) : this.encryptjs = o()
			})(0, function(i) {
				if (null, (i = {
						version: "1.0.0"
					}).init = function() {
						console.log("--------------------Applying Encryption Algorithm------------------ ")
					}, void 0 !== t && t.exports) var a = e("./algo");
				return i.encrypt = function(e, t, i) {
					if (128 != i && 192 != i && 256 != i) return "";
					e = String(e).utf8Encode(), t = String(t).utf8Encode();
					for (var o = i / 8, n = new Array(o), r = 0; r < o; r++) n[r] = isNaN(t.charCodeAt(r)) ? 0 : t.charCodeAt(r);
					var s = a.cipher(n, a.keyExpansion(n));
					s = s.concat(s.slice(0, o - 16));
					var d = new Array(16),
						c = (new Date).getTime(),
						l = c % 1e3,
						p = Math.floor(c / 1e3),
						u = Math.floor(65535 * Math.random());
					for (r = 0; r < 2; r++) d[r] = l >>> 8 * r & 255;
					for (r = 0; r < 2; r++) d[r + 2] = u >>> 8 * r & 255;
					for (r = 0; r < 4; r++) d[r + 4] = p >>> 8 * r & 255;
					var h = "";
					for (r = 0; r < 8; r++) h += String.fromCharCode(d[r]);
					for (var w = a.keyExpansion(s), m = Math.ceil(e.length / 16), g = new Array(m), f = 0; f < m; f++) {
						for (var y = 0; y < 4; y++) d[15 - y] = f >>> 8 * y & 255;
						for (y = 0; y < 4; y++) d[15 - y - 4] = f / 4294967296 >>> 8 * y;
						var v = a.cipher(d, w),
							C = f < m - 1 ? 16 : (e.length - 1) % 16 + 1,
							_ = new Array(C);
						for (r = 0; r < C; r++) _[r] = v[r] ^ e.charCodeAt(16 * f + r), _[r] = String.fromCharCode(_[r]);
						g[f] = _.join("")
					}
					var S = h + g.join("");
					return S = S.base64Encode()
				}, i.decrypt = function(e, t, i) {
					if (128 != i && 192 != i && 256 != i) return "";
					e = String(e).base64Decode(), t = String(t).utf8Encode();
					for (var o = i / 8, n = new Array(o), r = 0; r < o; r++) n[r] = isNaN(t.charCodeAt(r)) ? 0 : t.charCodeAt(r);
					var s = a.cipher(n, a.keyExpansion(n));
					s = s.concat(s.slice(0, o - 16));
					var d = new Array(8),
						c = e.slice(0, 8);
					for (r = 0; r < 8; r++) d[r] = c.charCodeAt(r);
					for (var l = a.keyExpansion(s), p = Math.ceil((e.length - 8) / 16), u = new Array(p), h = 0; h < p; h++) u[h] = e.slice(8 + 16 * h, 8 + 16 * h + 16);
					e = u;
					var w = new Array(e.length);
					for (h = 0; h < p; h++) {
						for (var m = 0; m < 4; m++) d[15 - m] = h >>> 8 * m & 255;
						for (m = 0; m < 4; m++) d[15 - m - 4] = (h + 1) / 4294967296 - 1 >>> 8 * m & 255;
						var g = a.cipher(d, l),
							f = new Array(e[h].length);
						for (r = 0; r < e[h].length; r++) f[r] = g[r] ^ e[h].charCodeAt(r), f[r] = String.fromCharCode(f[r]);
						w[h] = f.join("")
					}
					var y = w.join("");
					return y = y.utf8Decode()
				}, i.getTextEncryptAndSaveToTextFile = function(e, t, i) {
					throw Error("Command line not supported on this platform")
				}, i.getTextEncryptAndSaveToJSONFile = function(e, t, i) {
					throw Error("Command line not supported on this platform")
				}, i.writeCipherTextToJSON = function(e, t, i, o) {
					null == o && (o = i, i = {});
					var a = "object" === (void 0 === i ? "undefined" : n(i)) && null !== i && "spaces" in i ? i.spaces : this.spaces,
						r = "";
					try {
						r = JSON.stringify(t, i ? i.replacer : null, a) + "\n"
					} catch (e) {
						if (o) return o(e, null)
					}
					fs.writeFile(e, r, i, o)
				}, void 0 === String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
					return unescape(encodeURIComponent(this))
				}), void 0 === String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
					try {
						return decodeURIComponent(escape(this))
					} catch (e) {
						return this
					}
				}), void 0 === String.prototype.base64Encode && (String.prototype.base64Encode = function() {
					if (window.btoa && void 0 !== window.btoa) return window.btoa(this);
					if (void 0 !== o) return new o(this, "utf8").toString("base64");
					throw new Error("No Base64 Encode")
				}), void 0 === String.prototype.base64Decode && (String.prototype.base64Decode = function() {
					if (window.atob && void 0 !== window.atob) return window.atob(this);
					if (void 0 !== o) return new o(this, "base64").toString("utf8");
					throw new Error("No Base64 Decode")
				}), i.init(), i
			}), cc._RF.pop()
		}).call(this, e("buffer").Buffer)
	}, {
		"./algo": "algo",
		buffer: 2
	}],
	md5: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "4aaacLRdNtFWZomVIiCo5dW", "md5"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {
				this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start()
			}
			return e.hashStr = function(e, t) {
				return void 0 === t && (t = !1), this.onePassHasher.start().appendStr(e).end(t)
			}, e.hashAsciiStr = function(e, t) {
				return void 0 === t && (t = !1), this.onePassHasher.start().appendAsciiStr(e).end(t)
			}, e._hex = function(t) {
				var i, o, n, a, r = e.hexChars,
					s = e.hexOut;
				for (a = 0; a < 4; a += 1)
					for (o = 8 * a, i = t[a], n = 0; n < 8; n += 2) s[o + 1 + n] = r.charAt(15 & i), i >>>= 4, s[o + 0 + n] = r.charAt(15 & i), i >>>= 4;
				return s.join("")
			}, e._md5cycle = function(e, t) {
				var i = e[0],
					o = e[1],
					n = e[2],
					a = e[3];
				o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & n | ~o & a) + t[0] - 680876936 | 0) << 7 | i >>> 25) + o | 0) & o | ~i & n) + t[1] - 389564586 | 0) << 12 | a >>> 20) + i | 0) & i | ~a & o) + t[2] + 606105819 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & i) + t[3] - 1044525330 | 0) << 22 | o >>> 10) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & n | ~o & a) + t[4] - 176418897 | 0) << 7 | i >>> 25) + o | 0) & o | ~i & n) + t[5] + 1200080426 | 0) << 12 | a >>> 20) + i | 0) & i | ~a & o) + t[6] - 1473231341 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & i) + t[7] - 45705983 | 0) << 22 | o >>> 10) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & n | ~o & a) + t[8] + 1770035416 | 0) << 7 | i >>> 25) + o | 0) & o | ~i & n) + t[9] - 1958414417 | 0) << 12 | a >>> 20) + i | 0) & i | ~a & o) + t[10] - 42063 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & i) + t[11] - 1990404162 | 0) << 22 | o >>> 10) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & n | ~o & a) + t[12] + 1804603682 | 0) << 7 | i >>> 25) + o | 0) & o | ~i & n) + t[13] - 40341101 | 0) << 12 | a >>> 20) + i | 0) & i | ~a & o) + t[14] - 1502002290 | 0) << 17 | n >>> 15) + a | 0) & a | ~n & i) + t[15] + 1236535329 | 0) << 22 | o >>> 10) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & a | n & ~a) + t[1] - 165796510 | 0) << 5 | i >>> 27) + o | 0) & n | o & ~n) + t[6] - 1069501632 | 0) << 9 | a >>> 23) + i | 0) & o | i & ~o) + t[11] + 643717713 | 0) << 14 | n >>> 18) + a | 0) & i | a & ~i) + t[0] - 373897302 | 0) << 20 | o >>> 12) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & a | n & ~a) + t[5] - 701558691 | 0) << 5 | i >>> 27) + o | 0) & n | o & ~n) + t[10] + 38016083 | 0) << 9 | a >>> 23) + i | 0) & o | i & ~o) + t[15] - 660478335 | 0) << 14 | n >>> 18) + a | 0) & i | a & ~i) + t[4] - 405537848 | 0) << 20 | o >>> 12) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & a | n & ~a) + t[9] + 568446438 | 0) << 5 | i >>> 27) + o | 0) & n | o & ~n) + t[14] - 1019803690 | 0) << 9 | a >>> 23) + i | 0) & o | i & ~o) + t[3] - 187363961 | 0) << 14 | n >>> 18) + a | 0) & i | a & ~i) + t[8] + 1163531501 | 0) << 20 | o >>> 12) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o & a | n & ~a) + t[13] - 1444681467 | 0) << 5 | i >>> 27) + o | 0) & n | o & ~n) + t[2] - 51403784 | 0) << 9 | a >>> 23) + i | 0) & o | i & ~o) + t[7] + 1735328473 | 0) << 14 | n >>> 18) + a | 0) & i | a & ~i) + t[12] - 1926607734 | 0) << 20 | o >>> 12) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o ^ n ^ a) + t[5] - 378558 | 0) << 4 | i >>> 28) + o | 0) ^ o ^ n) + t[8] - 2022574463 | 0) << 11 | a >>> 21) + i | 0) ^ i ^ o) + t[11] + 1839030562 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ i) + t[14] - 35309556 | 0) << 23 | o >>> 9) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o ^ n ^ a) + t[1] - 1530992060 | 0) << 4 | i >>> 28) + o | 0) ^ o ^ n) + t[4] + 1272893353 | 0) << 11 | a >>> 21) + i | 0) ^ i ^ o) + t[7] - 155497632 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ i) + t[10] - 1094730640 | 0) << 23 | o >>> 9) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o ^ n ^ a) + t[13] + 681279174 | 0) << 4 | i >>> 28) + o | 0) ^ o ^ n) + t[0] - 358537222 | 0) << 11 | a >>> 21) + i | 0) ^ i ^ o) + t[3] - 722521979 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ i) + t[6] + 76029189 | 0) << 23 | o >>> 9) + n | 0, o = ((o += ((n = ((n += ((a = ((a += ((i = ((i += (o ^ n ^ a) + t[9] - 640364487 | 0) << 4 | i >>> 28) + o | 0) ^ o ^ n) + t[12] - 421815835 | 0) << 11 | a >>> 21) + i | 0) ^ i ^ o) + t[15] + 530742520 | 0) << 16 | n >>> 16) + a | 0) ^ a ^ i) + t[2] - 995338651 | 0) << 23 | o >>> 9) + n | 0, o = ((o += ((a = ((a += (o ^ ((i = ((i += (n ^ (o | ~a)) + t[0] - 198630844 | 0) << 6 | i >>> 26) + o | 0) | ~n)) + t[7] + 1126891415 | 0) << 10 | a >>> 22) + i | 0) ^ ((n = ((n += (i ^ (a | ~o)) + t[14] - 1416354905 | 0) << 15 | n >>> 17) + a | 0) | ~i)) + t[5] - 57434055 | 0) << 21 | o >>> 11) + n | 0, o = ((o += ((a = ((a += (o ^ ((i = ((i += (n ^ (o | ~a)) + t[12] + 1700485571 | 0) << 6 | i >>> 26) + o | 0) | ~n)) + t[3] - 1894986606 | 0) << 10 | a >>> 22) + i | 0) ^ ((n = ((n += (i ^ (a | ~o)) + t[10] - 1051523 | 0) << 15 | n >>> 17) + a | 0) | ~i)) + t[1] - 2054922799 | 0) << 21 | o >>> 11) + n | 0, o = ((o += ((a = ((a += (o ^ ((i = ((i += (n ^ (o | ~a)) + t[8] + 1873313359 | 0) << 6 | i >>> 26) + o | 0) | ~n)) + t[15] - 30611744 | 0) << 10 | a >>> 22) + i | 0) ^ ((n = ((n += (i ^ (a | ~o)) + t[6] - 1560198380 | 0) << 15 | n >>> 17) + a | 0) | ~i)) + t[13] + 1309151649 | 0) << 21 | o >>> 11) + n | 0, o = ((o += ((a = ((a += (o ^ ((i = ((i += (n ^ (o | ~a)) + t[4] - 145523070 | 0) << 6 | i >>> 26) + o | 0) | ~n)) + t[11] - 1120210379 | 0) << 10 | a >>> 22) + i | 0) ^ ((n = ((n += (i ^ (a | ~o)) + t[2] + 718787259 | 0) << 15 | n >>> 17) + a | 0) | ~i)) + t[9] - 343485551 | 0) << 21 | o >>> 11) + n | 0, e[0] = i + e[0] | 0, e[1] = o + e[1] | 0, e[2] = n + e[2] | 0, e[3] = a + e[3] | 0
			}, e.prototype.start = function() {
				return this._dataLength = 0, this._bufferLength = 0, this._state.set(e.stateIdentity), this
			}, e.prototype.appendStr = function(t) {
				var i, o, n = this._buffer8,
					a = this._buffer32,
					r = this._bufferLength;
				for (o = 0; o < t.length; o += 1) {
					if ((i = t.charCodeAt(o)) < 128) n[r++] = i;
					else if (i < 2048) n[r++] = 192 + (i >>> 6), n[r++] = 63 & i | 128;
					else if (i < 55296 || i > 56319) n[r++] = 224 + (i >>> 12), n[r++] = i >>> 6 & 63 | 128, n[r++] = 63 & i | 128;
					else {
						if ((i = 1024 * (i - 55296) + (t.charCodeAt(++o) - 56320) + 65536) > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
						n[r++] = 240 + (i >>> 18), n[r++] = i >>> 12 & 63 | 128, n[r++] = i >>> 6 & 63 | 128, n[r++] = 63 & i | 128
					}
					r >= 64 && (this._dataLength += 64, e._md5cycle(this._state, a), r -= 64, a[0] = a[16])
				}
				return this._bufferLength = r, this
			}, e.prototype.appendAsciiStr = function(t) {
				for (var i, o = this._buffer8, n = this._buffer32, a = this._bufferLength, r = 0;;) {
					for (i = Math.min(t.length - r, 64 - a); i--;) o[a++] = t.charCodeAt(r++);
					if (a < 64) break;
					this._dataLength += 64, e._md5cycle(this._state, n), a = 0
				}
				return this._bufferLength = a, this
			}, e.prototype.appendByteArray = function(t) {
				for (var i, o = this._buffer8, n = this._buffer32, a = this._bufferLength, r = 0;;) {
					for (i = Math.min(t.length - r, 64 - a); i--;) o[a++] = t[r++];
					if (a < 64) break;
					this._dataLength += 64, e._md5cycle(this._state, n), a = 0
				}
				return this._bufferLength = a, this
			}, e.prototype.getState = function() {
				var e = this._state;
				return {
					buffer: String.fromCharCode.apply(null, this._buffer8),
					buflen: this._bufferLength,
					length: this._dataLength,
					state: [e[0], e[1], e[2], e[3]]
				}
			}, e.prototype.setState = function(e) {
				var t, i = e.buffer,
					o = e.state,
					n = this._state;
				for (this._dataLength = e.length, this._bufferLength = e.buflen, n[0] = o[0], n[1] = o[1], n[2] = o[2], n[3] = o[3], t = 0; t < i.length; t += 1) this._buffer8[t] = i.charCodeAt(t)
			}, e.prototype.end = function(t) {
				void 0 === t && (t = !1);
				var i, o = this._bufferLength,
					n = this._buffer8,
					a = this._buffer32,
					r = 1 + (o >> 2);
				if (this._dataLength += o, n[o] = 128, n[o + 1] = n[o + 2] = n[o + 3] = 0, a.set(e.buffer32Identity.subarray(r), r), o > 55 && (e._md5cycle(this._state, a), a.set(e.buffer32Identity)), (i = 8 * this._dataLength) <= 4294967295) a[14] = i;
				else {
					var s = i.toString(16).match(/(.*?)(.{0,8})$/);
					if (null === s) return;
					var d = parseInt(s[2], 16),
						c = parseInt(s[1], 16) || 0;
					a[14] = d, a[15] = c
				}
				return e._md5cycle(this._state, a), t ? this._state : e._hex(this._state)
			}, e.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]), e.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.hexChars = "0123456789abcdef", e.hexOut = [], e.onePassHasher = new e, e
		}();
		i.Md5 = o, "5d41402abc4b2a76b9719d911017c592" !== o.hashStr("hello") && console.error("Md5 self test failed."), cc._RF.pop()
	}, {}],
	p_index: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "451f1+dBFNDZqOwJFgD8NpR", "p_index");
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			n = e("protobufjs/minimal"),
			a = n.Reader,
			r = n.Writer,
			s = n.util,
			d = n.roots.default || (n.roots.default = {});
		d.p_index = function() {
			var e = {};
			return e.P_index = function() {
				function e(e) {
					if (e)
						for (var t = Object.keys(e), i = 0; i < t.length; ++i) null != e[t[i]] && (this[t[i]] = e[t[i]])
				}
				return e.prototype.awesomeField = "", e.create = function(t) {
					return new e(t)
				}, e.encode = function(e, t) {
					return t || (t = r.create()), null != e.awesomeField && e.hasOwnProperty("awesomeField") && t.uint32(10).string(e.awesomeField), t
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim()
				}, e.decode = function(e, t) {
					e instanceof a || (e = a.create(e));
					for (var i = void 0 === t ? e.len : e.pos + t, o = new d.p_index.P_index; e.pos < i;) {
						var n = e.uint32();
						switch (n >>> 3) {
							case 1:
								o.awesomeField = e.string();
								break;
							default:
								e.skipType(7 & n)
						}
					}
					return o
				}, e.decodeDelimited = function(e) {
					return e instanceof a || (e = new a(e)), this.decode(e, e.uint32())
				}, e.verify = function(e) {
					return "object" !== (void 0 === e ? "undefined" : o(e)) || null === e ? "object expected" : null != e.awesomeField && e.hasOwnProperty("awesomeField") && !s.isString(e.awesomeField) ? "awesomeField: string expected" : null
				}, e.fromObject = function(e) {
					if (e instanceof d.p_index.P_index) return e;
					var t = new d.p_index.P_index;
					return null != e.awesomeField && (t.awesomeField = String(e.awesomeField)), t
				}, e.toObject = function(e, t) {
					t || (t = {});
					var i = {};
					return t.defaults && (i.awesomeField = ""), null != e.awesomeField && e.hasOwnProperty("awesomeField") && (i.awesomeField = e.awesomeField), i
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions)
				}, e
			}(), e
		}(), t.exports = d, cc._RF.pop()
	}, {
		"protobufjs/minimal": 13
	}],
	"qqmap-wx-jssdk.min": [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "6faed1zLDlKXLE8NVBiHg31", "qqmap-wx-jssdk.min");
		var o = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var o = t[i];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, i, o) {
				return i && e(t.prototype, i), o && e(t, o), t
			}
		}();
		var n = 310,
			a = "Tham số request sai",
			r = 600,
			s = "H\u1ec7 th\u1ed1ngL\u1ed7i",
			d = 1e3,
			c = 200,
			l = {
				location2query: function(e) {
					if ("string" == typeof e) return e;
					for (var t = "", i = 0; i < e.length; i++) {
						var o = e[i];
						t && (t += ";"), o.location && (t = t + o.location.lat + "," + o.location.lng), o.latitude && o.longitude && (t = t + o.latitude + "," + o.longitude)
					}
					return t
				},
				getWXLocation: function(e, t, i) {
					wx.getLocation({
						type: "gcj02",
						success: e,
						fail: t,
						complete: i
					})
				},
				getLocationParam: function(e) {
					"string" == typeof e && (e = 2 === e.split(",").length ? {
						latitude: e.split(",")[0],
						longitude: e.split(",")[1]
					} : {});
					return e
				},
				polyfillParam: function(e) {
					e.success = e.success || function() {}, e.fail = e.fail || function() {}, e.complete = e.complete || function() {}
				},
				checkParamKeyEmpty: function(e, t) {
					if (!e[t]) {
						var i = this.buildErrorConfig(n, a + t + "Tham s\u1ed1 sai");
						return e.fail(i), e.complete(i), !0
					}
					return !1
				},
				checkKeyword: function(e) {
					return !this.checkParamKeyEmpty(e, "keyword")
				},
				checkLocation: function(e) {
					var t = this.getLocationParam(e.location);
					if (!t || !t.latitude || !t.longitude) {
						var i = this.buildErrorConfig(n, a + " locationTham s\u1ed1 sai");
						return e.fail(i), e.complete(i), !1
					}
					return !0
				},
				buildErrorConfig: function(e, t) {
					return {
						status: e,
						message: t
					}
				},
				buildWxRequestConfig: function(e, t) {
					var i = this;
					return t.header = {
						"content-type": "application/json"
					}, t.method = "GET", t.success = function(t) {
						var i = t.data;
						0 === i.status ? e.success(i) : e.fail(i)
					}, t.fail = function(t) {
						t.statusCode = d, e.fail(i.buildErrorConfig(d, result.errMsg))
					}, t.complete = function(t) {
						switch (+t.statusCode) {
							case d:
								e.complete(i.buildErrorConfig(d, t.errMsg));
								break;
							case c:
								var o = t.data;
								0 === o.status ? e.complete(o) : e.complete(i.buildErrorConfig(o.status, o.message));
								break;
							default:
								e.complete(i.buildErrorConfig(r, s))
						}
					}, t
				},
				locationProcess: function(e, t, i, o) {
					var n = this;
					(i = i || function(t) {
						t.statusCode = d, e.fail(n.buildErrorConfig(d, t.errMsg))
					}, o = o || function(t) {
						t.statusCode == d && e.complete(n.buildErrorConfig(d, t.errMsg))
					}, e.location) ? n.checkLocation(e) && t(l.getLocationParam(e.location)): n.getWXLocation(t, i, o)
				}
			},
			p = function() {
				function e(t) {
					if (function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), !t.key) throw Error("keyGiá trị không được trống");
					this.key = t.key
				}
				return o(e, [{
					key: "search",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), l.checkKeyword(e)) {
							var t = {
								keyword: e.keyword,
								orderby: e.orderby || "_distance",
								page_size: e.page_size || 10,
								page_index: e.page_index || 1,
								output: "json",
								key: this.key
							};
							e.address_format && (t.address_format = e.address_format), e.filter && (t.filter = e.filter);
							var i = e.distance || "1000",
								o = e.auto_extend || 1;
							l.locationProcess(e, function(n) {
								t.boundary = "nearby(" + n.latitude + "," + n.longitude + "," + i + "," + o + ")", wx.request(l.buildWxRequestConfig(e, {
									url: "https://apis.map.qq.com/ws/place/v1/search",
									data: t
								}))
							})
						}
					}
				}, {
					key: "getSuggestion",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), l.checkKeyword(e)) {
							var t = {
								keyword: e.keyword,
								region: e.region || "Toàn quốc",
								region_fix: e.region_fix || 0,
								policy: e.policy || 0,
								output: "json",
								key: this.key
							};
							wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/place/v1/suggestion",
								data: t
							}))
						}
					}
				}, {
					key: "reverseGeocoder",
					value: function(e) {
						e = e || {}, l.polyfillParam(e);
						var t = {
							coord_type: e.coord_type || 5,
							get_poi: e.get_poi || 0,
							output: "json",
							key: this.key
						};
						e.poi_options && (t.poi_options = e.poi_options);
						l.locationProcess(e, function(i) {
							t.location = i.latitude + "," + i.longitude, wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/geocoder/v1/",
								data: t
							}))
						})
					}
				}, {
					key: "geocoder",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "address")) {
							var t = {
								address: e.address,
								output: "json",
								key: this.key
							};
							wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/geocoder/v1/",
								data: t
							}))
						}
					}
				}, {
					key: "getCityList",
					value: function(e) {
						e = e || {}, l.polyfillParam(e);
						var t = {
							output: "json",
							key: this.key
						};
						wx.request(l.buildWxRequestConfig(e, {
							url: "https://apis.map.qq.com/ws/district/v1/list",
							data: t
						}))
					}
				}, {
					key: "getDistrictByCityId",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "id")) {
							var t = {
								id: e.id || "",
								output: "json",
								key: this.key
							};
							wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/district/v1/getchildren",
								data: t
							}))
						}
					}
				}, {
					key: "calculateDistance",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "to")) {
							var t = {
								mode: e.mode || "walking",
								to: l.location2query(e.to),
								output: "json",
								key: this.key
							};
							e.from && (e.location = e.from), l.locationProcess(e, function(i) {
								t.from = i.latitude + "," + i.longitude, wx.request(l.buildWxRequestConfig(e, {
									url: "https://apis.map.qq.com/ws/distance/v1/",
									data: t
								}))
							})
						}
					}
				}]), e
			}();
		t.exports = p, cc._RF.pop()
	}, {}],
	"qqmap-wx-jssdk": [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "b8699ekzzNBsLtp4BYcrSA+", "qqmap-wx-jssdk");
		var o = function() {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var o = t[i];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, i, o) {
				return i && e(t.prototype, i), o && e(t, o), t
			}
		}();
		var n = 310,
			a = "Tham số request sai",
			r = 600,
			s = "H\u1ec7 th\u1ed1ngL\u1ed7i",
			d = 1e3,
			c = 200,
			l = {
				location2query: function(e) {
					if ("string" == typeof e) return e;
					for (var t = "", i = 0; i < e.length; i++) {
						var o = e[i];
						t && (t += ";"), o.location && (t = t + o.location.lat + "," + o.location.lng), o.latitude && o.longitude && (t = t + o.latitude + "," + o.longitude)
					}
					return t
				},
				getWXLocation: function(e, t, i) {
					wx.getLocation({
						type: "gcj02",
						success: e,
						fail: t,
						complete: i
					})
				},
				getLocationParam: function(e) {
					"string" == typeof e && (e = 2 === e.split(",").length ? {
						latitude: e.split(",")[0],
						longitude: e.split(",")[1]
					} : {});
					return e
				},
				polyfillParam: function(e) {
					e.success = e.success || function() {}, e.fail = e.fail || function() {}, e.complete = e.complete || function() {}
				},
				checkParamKeyEmpty: function(e, t) {
					if (!e[t]) {
						var i = this.buildErrorConfig(n, a + t + "Tham s\u1ed1 sai");
						return e.fail(i), e.complete(i), !0
					}
					return !1
				},
				checkKeyword: function(e) {
					return !this.checkParamKeyEmpty(e, "keyword")
				},
				checkLocation: function(e) {
					var t = this.getLocationParam(e.location);
					if (!t || !t.latitude || !t.longitude) {
						var i = this.buildErrorConfig(n, a + " locationTham s\u1ed1 sai");
						return e.fail(i), e.complete(i), !1
					}
					return !0
				},
				buildErrorConfig: function(e, t) {
					return {
						status: e,
						message: t
					}
				},
				buildWxRequestConfig: function(e, t) {
					var i = this;
					return t.header = {
						"content-type": "application/json"
					}, t.method = "GET", t.success = function(t) {
						var i = t.data;
						0 === i.status ? e.success(i) : e.fail(i)
					}, t.fail = function(t) {
						t.statusCode = d, e.fail(i.buildErrorConfig(d, result.errMsg))
					}, t.complete = function(t) {
						switch (+t.statusCode) {
							case d:
								e.complete(i.buildErrorConfig(d, t.errMsg));
								break;
							case c:
								var o = t.data;
								0 === o.status ? e.complete(o) : e.complete(i.buildErrorConfig(o.status, o.message));
								break;
							default:
								e.complete(i.buildErrorConfig(r, s))
						}
					}, t
				},
				locationProcess: function(e, t, i, o) {
					var n = this;
					if (i = i || function(t) {
							t.statusCode = d, e.fail(n.buildErrorConfig(d, t.errMsg))
						}, o = o || function(t) {
							t.statusCode == d && e.complete(n.buildErrorConfig(d, t.errMsg))
						}, e.location) {
						if (n.checkLocation(e)) {
							t(l.getLocationParam(e.location))
						}
					} else n.getWXLocation(t, i, o)
				}
			},
			p = function() {
				function e(t) {
					if (function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), !t.key) throw Error("keyGiá trị không được trống");
					this.key = t.key
				}
				return o(e, [{
					key: "search",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), l.checkKeyword(e)) {
							var t = {
								keyword: e.keyword,
								orderby: e.orderby || "_distance",
								page_size: e.page_size || 10,
								page_index: e.page_index || 1,
								output: "json",
								key: this.key
							};
							e.address_format && (t.address_format = e.address_format), e.filter && (t.filter = e.filter);
							var i = e.distance || "1000",
								o = e.auto_extend || 1;
							l.locationProcess(e, function(n) {
								t.boundary = "nearby(" + n.latitude + "," + n.longitude + "," + i + "," + o + ")", wx.request(l.buildWxRequestConfig(e, {
									url: "https://apis.map.qq.com/ws/place/v1/search",
									data: t
								}))
							})
						}
					}
				}, {
					key: "getSuggestion",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), l.checkKeyword(e)) {
							var t = {
								keyword: e.keyword,
								region: e.region || "Toàn quốc",
								region_fix: e.region_fix || 0,
								policy: e.policy || 0,
								output: "json",
								key: this.key
							};
							wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/place/v1/suggestion",
								data: t
							}))
						}
					}
				}, {
					key: "reverseGeocoder",
					value: function(e) {
						e = e || {}, l.polyfillParam(e);
						var t = {
							coord_type: e.coord_type || 5,
							get_poi: e.get_poi || 0,
							output: "json",
							key: this.key
						};
						e.poi_options && (t.poi_options = e.poi_options);
						l.locationProcess(e, function(i) {
							t.location = i.latitude + "," + i.longitude, wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/geocoder/v1/",
								data: t
							}))
						})
					}
				}, {
					key: "geocoder",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "address")) {
							var t = {
								address: e.address,
								output: "json",
								key: this.key
							};
							wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/geocoder/v1/",
								data: t
							}))
						}
					}
				}, {
					key: "getCityList",
					value: function(e) {
						e = e || {}, l.polyfillParam(e);
						var t = {
							output: "json",
							key: this.key
						};
						wx.request(l.buildWxRequestConfig(e, {
							url: "https://apis.map.qq.com/ws/district/v1/list",
							data: t
						}))
					}
				}, {
					key: "getDistrictByCityId",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "id")) {
							var t = {
								id: e.id || "",
								output: "json",
								key: this.key
							};
							wx.request(l.buildWxRequestConfig(e, {
								url: "https://apis.map.qq.com/ws/district/v1/getchildren",
								data: t
							}))
						}
					}
				}, {
					key: "calculateDistance",
					value: function(e) {
						if (e = e || {}, l.polyfillParam(e), !l.checkParamKeyEmpty(e, "to")) {
							var t = {
								mode: e.mode || "walking",
								to: l.location2query(e.to),
								output: "json",
								key: this.key
							};
							e.from && (e.location = e.from), l.locationProcess(e, function(i) {
								t.from = i.latitude + "," + i.longitude, wx.request(l.buildWxRequestConfig(e, {
									url: "https://apis.map.qq.com/ws/distance/v1/",
									data: t
								}))
							})
						}
					}
				}]), e
			}();
		t.exports = p, cc._RF.pop()
	}, {}],
	"tslib.es6": [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "925dbzXxDVKmJor7UMzhEJ9", "tslib.es6"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		i.__extends = function(e, t) {
			function i() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
		}, i.__rest = function(e, t) {
			var i = {};
			for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols)
				for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (i[o[n]] = e[o[n]]);
			return i
		}, i.__decorate = function(e, t, i, n) {
			var a, r = arguments.length,
				s = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
			if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
			else
				for (var d = e.length - 1; d >= 0; d--)(a = e[d]) && (s = (r < 3 ? a(s) : r > 3 ? a(t, i, s) : a(t, i)) || s);
			return r > 3 && s && Object.defineProperty(t, i, s), s
		}, i.__param = function(e, t) {
			return function(i, o) {
				t(i, o, e)
			}
		}, i.__metadata = function(e, t) {
			if ("object" === ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
		}, i.__awaiter = function(e, t, i, o) {
			return new(i || (i = Promise))(function(n, a) {
				function r(e) {
					try {
						d(o.next(e))
					} catch (e) {
						a(e)
					}
				}

				function s(e) {
					try {
						d(o.throw(e))
					} catch (e) {
						a(e)
					}
				}

				function d(e) {
					e.done ? n(e.value) : new i(function(t) {
						t(e.value)
					}).then(r, s)
				}
				d((o = o.apply(e, t || [])).next())
			})
		}, i.__generator = function(e, t) {
			var i, o, n, a, r = {
				label: 0,
				sent: function() {
					if (1 & n[0]) throw n[1];
					return n[1]
				},
				trys: [],
				ops: []
			};
			return a = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function s(a) {
				return function(s) {
					return function(a) {
						if (i) throw new TypeError("Generator is already executing.");
						for (; r;) try {
							if (i = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
							switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
								case 0:
								case 1:
									n = a;
									break;
								case 4:
									return r.label++, {
										value: a[1],
										done: !1
									};
								case 5:
									r.label++, o = a[1], a = [0];
									continue;
								case 7:
									a = r.ops.pop(), r.trys.pop();
									continue;
								default:
									if (!(n = (n = r.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
										r = 0;
										continue
									}
									if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
										r.label = a[1];
										break
									}
									if (6 === a[0] && r.label < n[1]) {
										r.label = n[1], n = a;
										break
									}
									if (n && r.label < n[2]) {
										r.label = n[2], r.ops.push(a);
										break
									}
									n[2] && r.ops.pop(), r.trys.pop();
									continue
							}
							a = t.call(e, r)
						} catch (e) {
							a = [6, e], o = 0
						} finally {
							i = n = 0
						}
						if (5 & a[0]) throw a[1];
						return {
							value: a[0] ? a[1] : void 0,
							done: !0
						}
					}([a, s])
				}
			}
		}, i.__exportStar = function(e, t) {
			for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
		}, i.__values = r, i.__read = s, i.__spread = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
			return e
		}, i.__await = d, i.__asyncGenerator = function(e, t, i) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var o, n = i.apply(e, t || []),
				a = [];
			return o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
				return this
			}, o;

			function r(e) {
				n[e] && (o[e] = function(t) {
					return new Promise(function(i, o) {
						a.push([e, t, i, o]) > 1 || s(e, t)
					})
				})
			}

			function s(e, t) {
				try {
					(function(e) {
						e.value instanceof d ? Promise.resolve(e.value.v).then(c, l) : p(a[0][2], e)
					})(n[e](t))
				} catch (e) {
					p(a[0][3], e)
				}
			}

			function c(e) {
				s("next", e)
			}

			function l(e) {
				s("throw", e)
			}

			function p(e, t) {
				e(t), a.shift(), a.length && s(a[0][0], a[0][1])
			}
		}, i.__asyncDelegator = function(e) {
			var t, i;
			return t = {}, o("next"), o("throw", function(e) {
				throw e
			}), o("return"), t[Symbol.iterator] = function() {
				return this
			}, t;

			function o(o, n) {
				t[o] = e[o] ? function(t) {
					return (i = !i) ? {
						value: d(e[o](t)),
						done: "return" === o
					} : n ? n(t) : t
				} : n
			}
		}, i.__asyncValues = function(e) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var t, i = e[Symbol.asyncIterator];
			return i ? i.call(e) : (e = r(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
				return this
			}, t);

			function o(i) {
				t[i] = e[i] && function(t) {
					return new Promise(function(o, n) {
						t = e[i](t),
							function(e, t, i, o) {
								Promise.resolve(o).then(function(t) {
									e({
										value: t,
										done: i
									})
								}, t)
							}(o, n, t.done, t.value)
					})
				}
			}
		}, i.__makeTemplateObject = function(e, t) {
			Object.defineProperty ? Object.defineProperty(e, "raw", {
				value: t
			}) : e.raw = t;
			return e
		}, i.__importStar = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t.default = e, t
		}, i.__importDefault = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		var n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
				})(e, t)
		};
		var a = function() {
			return i.__assign = a = Object.assign || function(e) {
				for (var t, i = 1, o = arguments.length; i < o; i++)
					for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				return e
			}, a.apply(this, arguments)
		};

		function r(e) {
			var t = "function" == typeof Symbol && e[Symbol.iterator],
				i = 0;
			return t ? t.call(e) : {
				next: function() {
					return e && i >= e.length && (e = void 0), {
						value: e && e[i++],
						done: !e
					}
				}
			}
		}

		function s(e, t) {
			var i = "function" == typeof Symbol && e[Symbol.iterator];
			if (!i) return e;
			var o, n, a = i.call(e),
				r = [];
			try {
				for (;
					(void 0 === t || t-- > 0) && !(o = a.next()).done;) r.push(o.value)
			} catch (e) {
				n = {
					error: e
				}
			} finally {
				try {
					o && !o.done && (i = a.return) && i.call(a)
				} finally {
					if (n) throw n.error
				}
			}
			return r
		}

		function d(e) {
			return this instanceof d ? (this.v = e, this) : new d(e)
		}
		i.__assign = a, cc._RF.pop()
	}, {}],
	tslib: [function(e, t, i) {
		(function(e) {
			"use strict";
			cc._RF.push(t, "bec51U01ZBP4KhF/ecY+edo", "tslib");
			var i, o, n, a, r, s, d, c, l, p, u, h, w, m, g, f, y, v, C, _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			(function(i) {
				var o = "object" === (void 0 === e ? "undefined" : _(e)) ? e : "object" === ("undefined" == typeof self ? "undefined" : _(self)) ? self : "object" === _(this) ? this : {};

				function n(e, t) {
					return e !== o && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
							value: !0
						}) : e.__esModule = !0),
						function(i, o) {
							return e[i] = t ? t(i, o) : o
						}
				}
				"function" == typeof define && define.amd ? define("tslib", ["exports"], function(e) {
					i(n(o, n(e)))
				}) : "object" === (void 0 === t ? "undefined" : _(t)) && "object" === _(t.exports) ? i(n(o, n(t.exports))) : i(n(o))
			})(function(e) {
				var t = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
				};
				i = function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}, o = Object.assign || function(e) {
					for (var t, i = 1, o = arguments.length; i < o; i++)
						for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e
				}, n = function(e, t) {
					var i = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && (i[o[n]] = e[o[n]])
					}
					return i
				}, a = function(e, t, i, o) {
					var n, a = arguments.length,
						r = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
					if ("object" === ("undefined" == typeof Reflect ? "undefined" : _(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
					else
						for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, i, r) : n(t, i)) || r);
					return a > 3 && r && Object.defineProperty(t, i, r), r
				}, r = function(e, t) {
					return function(i, o) {
						t(i, o, e)
					}
				}, s = function(e, t) {
					if ("object" === ("undefined" == typeof Reflect ? "undefined" : _(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
				}, d = function(e, t, i, o) {
					return new(i || (i = Promise))(function(n, a) {
						function r(e) {
							try {
								d(o.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								d(o.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function d(e) {
							e.done ? n(e.value) : new i(function(t) {
								t(e.value)
							}).then(r, s)
						}
						d((o = o.apply(e, t || [])).next())
					})
				}, c = function(e, t) {
					var i, o, n, a, r = {
						label: 0,
						sent: function() {
							if (1 & n[0]) throw n[1];
							return n[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(a) {
						return function(s) {
							return function(a) {
								if (i) throw new TypeError("Generator is already executing.");
								for (; r;) try {
									if (i = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
									switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
										case 0:
										case 1:
											n = a;
											break;
										case 4:
											return r.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											r.label++, o = a[1], a = [0];
											continue;
										case 7:
											a = r.ops.pop(), r.trys.pop();
											continue;
										default:
											if (!(n = (n = r.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
												r = 0;
												continue
											}
											if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
												r.label = a[1];
												break
											}
											if (6 === a[0] && r.label < n[1]) {
												r.label = n[1], n = a;
												break
											}
											if (n && r.label < n[2]) {
												r.label = n[2], r.ops.push(a);
												break
											}
											n[2] && r.ops.pop(), r.trys.pop();
											continue
									}
									a = t.call(e, r)
								} catch (e) {
									a = [6, e], o = 0
								} finally {
									i = n = 0
								}
								if (5 & a[0]) throw a[1];
								return {
									value: a[0] ? a[1] : void 0,
									done: !0
								}
							}([a, s])
						}
					}
				}, l = function(e, t) {
					for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
				}, p = function(e) {
					var t = "function" == typeof Symbol && e[Symbol.iterator],
						i = 0;
					return t ? t.call(e) : {
						next: function() {
							return e && i >= e.length && (e = void 0), {
								value: e && e[i++],
								done: !e
							}
						}
					}
				}, u = function(e, t) {
					var i = "function" == typeof Symbol && e[Symbol.iterator];
					if (!i) return e;
					var o, n, a = i.call(e),
						r = [];
					try {
						for (;
							(void 0 === t || t-- > 0) && !(o = a.next()).done;) r.push(o.value)
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							o && !o.done && (i = a.return) && i.call(a)
						} finally {
							if (n) throw n.error
						}
					}
					return r
				}, h = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
					return e
				}, w = function(e) {
					return this instanceof w ? (this.v = e, this) : new w(e)
				}, m = function(e, t, i) {
					if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
					var o, n = i.apply(e, t || []),
						a = [];
					return o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
						return this
					}, o;

					function r(e) {
						n[e] && (o[e] = function(t) {
							return new Promise(function(i, o) {
								a.push([e, t, i, o]) > 1 || s(e, t)
							})
						})
					}

					function s(e, t) {
						try {
							(function(e) {
								e.value instanceof w ? Promise.resolve(e.value.v).then(d, c) : l(a[0][2], e)
							})(n[e](t))
						} catch (e) {
							l(a[0][3], e)
						}
					}

					function d(e) {
						s("next", e)
					}

					function c(e) {
						s("throw", e)
					}

					function l(e, t) {
						e(t), a.shift(), a.length && s(a[0][0], a[0][1])
					}
				}, g = function(e) {
					var t, i;
					return t = {}, o("next"), o("throw", function(e) {
						throw e
					}), o("return"), t[Symbol.iterator] = function() {
						return this
					}, t;

					function o(o, n) {
						t[o] = e[o] ? function(t) {
							return (i = !i) ? {
								value: w(e[o](t)),
								done: "return" === o
							} : n ? n(t) : t
						} : n
					}
				}, f = function(e) {
					if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
					var t, i = e[Symbol.asyncIterator];
					return i ? i.call(e) : (e = "function" == typeof p ? p(e) : e[Symbol.iterator](), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
						return this
					}, t);

					function o(i) {
						t[i] = e[i] && function(t) {
							return new Promise(function(o, n) {
								(function(e, t, i, o) {
									Promise.resolve(o).then(function(t) {
										e({
											value: t,
											done: i
										})
									}, t)
								})(o, n, (t = e[i](t)).done, t.value)
							})
						}
					}
				}, y = function(e, t) {
					return Object.defineProperty ? Object.defineProperty(e, "raw", {
						value: t
					}) : e.raw = t, e
				}, v = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					return t.default = e, t
				}, C = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}, e("__extends", i), e("__assign", o), e("__rest", n), e("__decorate", a), e("__param", r), e("__metadata", s), e("__awaiter", d), e("__generator", c), e("__exportStar", l), e("__values", p), e("__read", u), e("__spread", h), e("__await", w), e("__asyncGenerator", m), e("__asyncDelegator", g), e("__asyncValues", f), e("__makeTemplateObject", y), e("__importStar", v), e("__importDefault", C)
			}), cc._RF.pop()
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {}]
}, {}, ["FileData", "FileHelper", "GEventDispatch", "tslib.es6", "tslib", "base64", "algo", "encryptjs", "md5", "FarmAction", "FarmController", "FarmData", "FarmHelper", "FarmManager", "SecretDataController", "AlertBar", "Constant", "Data", "Func", "Game", "Game2", "Global", "JsonManager", "PointConvertUtil", "TestData", "Config", "BaseScrollView", "GetGoodLayer", "HelperWindow", "NewHelperLayer", "CropBookDesLayer", "CropBookLayer", "CropBookScrollLayer", "CropBoxLayer", "GetAwardLayer", "GetAwardLayer3", "PieceLayer", "PiecePrefabs", "PieceUiLayer", "CbtLayer", "FriendChangeMBScrollLayer", "FriendChangeMBWindow", "FriendListScrollLayer", "FriendListWindow", "FriendLookWindow", "FriendNoticeScrollLayer", "FriendNoticeWindow", "FriendTuiJianScrollLayer", "FriendTuiJianWindow", "RankLayer", "RankPrefab", "RankScrollLayer", "ActivityWindow", "CreateCropAwardLayer", "FarmCollectLayer", "IndexHelper", "MarketLayer", "PackageWindow", "PlaneLayer", "RedPointMgr", "SceneMoveLayer", "SeedNoticeWindow", "SelectCropLayer", "SelectCropScrollLayer", "SunWindow", "YqylScrollLayer", "UserScene", "MapWindow", "ChangeScene", "LookScene", "ToolLayer", "ToolPrefabs", "TaskScrollLayer", "TaskWindow", "ReapFinishLayer", "TitleWindow", "AdWindow", "ChangeLoginWindow", "FreeGetGold", "FreeGetGold2", "GameSetWindow", "GoldHelperScrollLayer", "GoldHelperWindow", "MailScrollLayer", "MailWindow", "NewyearWindow", "PlaneCollect", "RuleWindow", "ScarecrowWindow", "SeedbuynoticeWindow", "TurnningWindow", "TyWindow", "ClientSocket", "NetHelper", "NetManager", "p_index", "qqmap-wx-jssdk", "qqmap-wx-jssdk.min", "IndexScene", "LoadScene", "PlayAd", "WxFunc", "WxLogin", "YxhLogin", "ZqLogin"]);