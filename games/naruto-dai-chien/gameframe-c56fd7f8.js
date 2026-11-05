! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
	"use strict";

	function g(e) {
		return null != e && e === e.window
	}
	var t = [],
		r = Object.getPrototypeOf,
		s = t.slice,
		m = t.flat ? function(e) {
			return t.flat.call(e)
		} : function(e) {
			return t.concat.apply([], e)
		},
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		b = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		C = E.document,
		c = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function x(e, t, n) {
		var r, i, o = (n = n || C).createElement("script");
		if (o.text = e, t)
			for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var d = "3.5.1",
		A = function(e, t) {
			return new A.fn.init(e, t)
		};

	function f(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	A.fn = A.prototype = {
		jquery: d,
		constructor: A,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = A.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return A.each(this, e)
		},
		map: function(n) {
			return this.pushStack(A.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(A.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(A.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: t.sort,
		splice: t.splice
	}, A.extend = A.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (A.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || A.isPlainObject(n) ? n : {}, i = !1, a[t] = A.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, A.extend({
		expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			x(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, r = 0;
			if (f(e))
				for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (f(Object(e)) ? A.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (f(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return m(a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (A.fn[Symbol.iterator] = t[Symbol.iterator]), A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var p = function(n) {
		function d(e, t) {
			var n = "0x" + e.slice(1) - 65536;
			return t || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
		}

		function i() {
			T()
		}
		var e, p, x, o, a, h, f, g, w, u, l, T, E, s, C, m, c, v, y, A = "sizzle" + +new Date,
			b = n.document,
			S = 0,
			r = 0,
			L = ue(),
			D = ue(),
			k = ue(),
			j = ue(),
			N = function(e, t) {
				return e === t && (l = !0), 0
			},
			O = {}.hasOwnProperty,
			t = [],
			P = t.pop,
			q = t.push,
			R = t.push,
			H = t.slice,
			M = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			_ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			I = "[\\x20\\t\\r\\n\\f]",
			F = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			$ = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + I + "*\\]",
			W = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
			U = new RegExp(I + "+", "g"),
			B = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
			z = new RegExp("^" + I + "*," + I + "*"),
			G = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
			X = new RegExp(I + "|>"),
			V = new RegExp(W),
			J = new RegExp("^" + F + "$"),
			Q = {
				ID: new RegExp("^#(" + F + ")"),
				CLASS: new RegExp("^\\.(" + F + ")"),
				TAG: new RegExp("^(" + F + "|[*])"),
				ATTR: new RegExp("^" + $),
				PSEUDO: new RegExp("^" + W),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + _ + ")$", "i"),
				needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			K = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			ee = /^[^{]+\{\s*\[native \w/,
			te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ne = /[+~]/,
			re = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
			ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			oe = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			ae = ye(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			R.apply(t = H.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
		} catch (e) {
			R = {
				apply: t.length ? function(e, t) {
					q.apply(e, H.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, d = e && e.ownerDocument,
				f = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
			if (!r && (T(e), e = e || E, C)) {
				if (11 !== f && (u = te.exec(t)))
					if (i = u[1]) {
						if (9 === f) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (d && (a = d.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
					} else {
						if (u[2]) return R.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return R.apply(n, e.getElementsByClassName(i)), n
					} if (p.qsa && !j[t + " "] && (!m || !m.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, d = e, 1 === f && (X.test(t) || G.test(t))) {
						for ((d = ne.test(t) && ge(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(ie, oe) : e.setAttribute("id", s = A)), o = (l = h(t)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + ve(l[o]);
						c = l.join(",")
					}
					try {
						return R.apply(n, d.querySelectorAll(c)), n
					} catch (e) {
						j(t, !0)
					} finally {
						s === A && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(B, "$1"), e, n, r)
		}

		function ue() {
			var n = [];

			function r(e, t) {
				return n.push(e + " ") > x.cacheLength && delete r[n.shift()], r[e + " "] = t
			}
			return r
		}

		function le(e) {
			return e[A] = !0, e
		}

		function ce(e) {
			var t = E.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function de(e, t) {
			for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
		}

		function fe(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function pe(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function he(a) {
			return le(function(o) {
				return o = +o, le(function(e, t) {
					for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ge(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in p = se.support = {}, a = se.isXML = function(e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, T = se.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : b;
				return r != E && 9 === r.nodeType && r.documentElement && (s = (E = r).documentElement, C = !a(E), b != E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), p.scope = ce(function(e) {
					return s.appendChild(e).appendChild(E.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				}), p.attributes = ce(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), p.getElementsByTagName = ce(function(e) {
					return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
				}), p.getElementsByClassName = ee.test(E.getElementsByClassName), p.getById = ce(function(e) {
					return s.appendChild(e).id = A, !E.getElementsByName || !E.getElementsByName(A).length
				}), p.getById ? (x.filter.ID = function(e) {
					var t = e.replace(re, d);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, x.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && C) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (x.filter.ID = function(e) {
					var n = e.replace(re, d);
					return function(e) {
						var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, x.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && C) {
						var n, r, i, o = t.getElementById(e);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
							for (i = t.getElementsByName(e), r = 0; o = i[r++];)
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
						}
						return []
					}
				}), x.find.TAG = p.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" !== e) return o;
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}, x.find.CLASS = p.getElementsByClassName && function(e, t) {
					if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
				}, c = [], m = [], (p.qsa = ee.test(E.querySelectorAll)) && (ce(function(e) {
					var t;
					s.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + _ + ")"), e.querySelectorAll("[id~=" + A + "-]").length || m.push("~="), (t = E.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
				}), ce(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = E.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
				})), (p.matchesSelector = ee.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
					p.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", W)
				}), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(s.compareDocumentPosition), y = t || ee.test(s.contains) ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, N = t ? function(e, t) {
					if (e === t) return l = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == E || e.ownerDocument == b && y(b, e) ? -1 : t == E || t.ownerDocument == b && y(b, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return l = !0, 0;
					var n, r = 0,
						i = e.parentNode,
						o = t.parentNode,
						a = [e],
						s = [t];
					if (!i || !o) return e == E ? -1 : t == E ? 1 : i ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
					if (i === o) return fe(e, t);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (n = t; n = n.parentNode;) s.unshift(n);
					for (; a[r] === s[r];) r++;
					return r ? fe(a[r], s[r]) : a[r] == b ? -1 : s[r] == b ? 1 : 0
				}), E
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if (T(e), p.matchesSelector && C && !j[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
					var n = v.call(e, t);
					if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					j(t, !0)
				}
				return 0 < se(t, E, null, [e]).length
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) != E && T(e), y(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) != E && T(e);
				var n = x.attrHandle[t.toLowerCase()],
					r = n && O.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
				return void 0 !== r ? r : p.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, se.escape = function(e) {
				return (e + "").replace(ie, oe)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(N), l) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return u = null, e
			}, o = se.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r++];) n += o(t);
				return n
			}, (x = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: Q,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(re, d), e[3] = (e[3] || e[4] || e[5] || "").replace(re, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(re, d).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = L[e + " "];
						return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && L(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = se.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(U, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(h, e, t, g, m) {
						var v = "nth" !== h.slice(0, 3),
							y = "last" !== h.slice(-4),
							b = "of-type" === e;
						return 1 === g && 0 === m ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, a, s, u, l = v != y ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								d = b && e.nodeName.toLowerCase(),
								f = !n && !b,
								p = !1;
							if (c) {
								if (v) {
									for (; l;) {
										for (a = e; a = a[l];)
											if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
										u = l = "only" === h && !u && "nextSibling"
									}
									return !0
								}
								if (u = [y ? c.firstChild : c.lastChild], y && f) {
									for (p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
										if (1 === a.nodeType && ++p && a === e) {
											i[h] = [S, s, p];
											break
										}
								} else if (f && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === p)
									for (;
										(a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, p]), a !== e)););
								return (p -= m) === g || p % g == 0 && 0 <= p / g
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
							for (var n, r = a(e, o), i = r.length; i--;) e[n = M(e, r[i])] = !(t[n] = r[i])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: le(function(e) {
						var r = [],
							i = [],
							s = f(e.replace(B, "$1"));
						return s[A] ? le(function(e, t, n, r) {
							for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function(e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: le(function(t) {
						return function(e) {
							return 0 < se(t, e).length
						}
					}),
					contains: le(function(t) {
						return t = t.replace(re, d),
							function(e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
					}),
					lang: le(function(n) {
						return J.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, d).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === s
					},
					focus: function(e) {
						return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: pe(!1),
					disabled: pe(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !x.pseudos.empty(e)
					},
					header: function(e) {
						return Z.test(e.nodeName)
					},
					input: function(e) {
						return K.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: he(function() {
						return [0]
					}),
					last: he(function(e, t) {
						return [t - 1]
					}),
					eq: he(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: he(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: he(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: he(function(e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: he(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = x.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) x.pseudos[e] = function(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}(e);
		for (e in {
				submit: !0,
				reset: !0
			}) x.pseudos[e] = function(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}(e);

		function me() {}

		function ve(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function ye(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				d = t && "parentNode" === c,
				f = r++;
			return e.first ? function(e, t, n) {
				for (; e = e[u];)
					if (1 === e.nodeType || d) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var r, i, o, a = [S, f];
				if (n) {
					for (; e = e[u];)
						if ((1 === e.nodeType || d) && s(e, t, n)) return !0
				} else
					for (; e = e[u];)
						if (1 === e.nodeType || d)
							if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
							else {
								if ((r = i[c]) && r[0] === S && r[1] === f) return a[2] = r[2];
								if ((i[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function be(i) {
			return 1 < i.length ? function(e, t, n) {
				for (var r = i.length; r--;)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function xe(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function we(p, h, g, m, v, e) {
			return m && !m[A] && (m = we(m)), v && !v[A] && (v = we(v, e)), le(function(e, t, n, r) {
				var i, o, a, s = [],
					u = [],
					l = t.length,
					c = e || function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					d = !p || !e && h ? c : xe(c, s, p, n, r),
					f = g ? v || (e ? p : l || m) ? [] : t : d;
				if (g && g(d, f, n, r), m)
					for (i = xe(f, u), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (f[u[o]] = !(d[u[o]] = a));
				if (e) {
					if (v || p) {
						if (v) {
							for (i = [], o = f.length; o--;)(a = f[o]) && i.push(d[o] = a);
							v(null, f = [], i, r)
						}
						for (o = f.length; o--;)(a = f[o]) && -1 < (i = v ? M(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else f = xe(f === t ? f.splice(l, f.length) : f), v ? v(null, t, f, r) : R.apply(t, f)
			})
		}

		function Te(m, v) {
			function e(e, t, n, r, i) {
				var o, a, s, u = 0,
					l = "0",
					c = e && [],
					d = [],
					f = w,
					p = e || b && x.find.TAG("*", i),
					h = S += null == f ? 1 : Math.random() || .1,
					g = p.length;
				for (i && (w = t == E || t || i); l !== g && null != (o = p[l]); l++) {
					if (b && o) {
						for (a = 0, t || o.ownerDocument == E || (T(o), n = !C); s = m[a++];)
							if (s(o, t || E, n)) {
								r.push(o);
								break
							} i && (S = h)
					}
					y && ((o = !s && o) && u--, e && c.push(o))
				}
				if (u += l, y && l !== u) {
					for (a = 0; s = v[a++];) s(c, d, t, n);
					if (e) {
						if (0 < u)
							for (; l--;) c[l] || d[l] || (d[l] = P.call(r));
						d = xe(d)
					}
					R.apply(r, d), i && !e && 0 < d.length && 1 < u + v.length && se.uniqueSort(r)
				}
				return i && (S = h, w = f), c
			}
			var y = 0 < v.length,
				b = 0 < m.length;
			return y ? le(e) : e
		}
		return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = se.tokenize = function(e, t) {
			var n, r, i, o, a, s, u, l = D[e + " "];
			if (l) return t ? 0 : l.slice(0);
			for (a = e, s = [], u = x.preFilter; a;) {
				for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = G.exec(a)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(B, " ")
					}), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? se.error(e) : D(e, s).slice(0)
		}, f = se.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = k[e + " "];
			if (!o) {
				for (n = (t = t || h(e)).length; n--;)(o = function e(t) {
					for (var i, n, r, o = t.length, a = x.relative[t[0].type], s = a || x.relative[" "], u = a ? 1 : 0, l = ye(function(e) {
							return e === i
						}, s, !0), c = ye(function(e) {
							return -1 < M(i, e)
						}, s, !0), d = [function(e, t, n) {
							var r = !a && (n || t !== w) || ((i = t).nodeType ? l : c)(e, t, n);
							return i = null, r
						}]; u < o; u++)
						if (n = x.relative[t[u].type]) d = [ye(be(d), n)];
						else {
							if ((n = x.filter[t[u].type].apply(null, t[u].matches))[A]) {
								for (r = ++u; r < o && !x.relative[t[r].type]; r++);
								return we(1 < u && be(d), 1 < u && ve(t.slice(0, u - 1).concat({
									value: " " === t[u - 2].type ? "*" : ""
								})).replace(B, "$1"), n, u < r && e(t.slice(u, r)), r < o && e(t = t.slice(r)), r < o && ve(t))
							}
							d.push(n)
						} return be(d)
				}(t[n]))[A] ? r.push(o) : i.push(o);
				(o = k(e, Te(i, r))).selector = e
			}
			return o
		}, g = se.select = function(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && x.relative[o[1].type]) {
					if (!(t = (x.find.ID(a.matches[0].replace(re, d), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
					if ((u = x.find[s]) && (r = u(a.matches[0].replace(re, d), ne.test(o[0].type) && ge(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && ve(o))) return R.apply(n, r), n;
						break
					}
			}
			return (l || f(e, c))(r, t, !C, n, !t || ne.test(e) && ge(t.parentNode) || t), n
		}, p.sortStable = A.split("").sort(N).join("") === A, p.detectDuplicates = !!l, T(), p.sortDetached = ce(function(e) {
			return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
		}), ce(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || de("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), p.attributes && ce(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || de("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ce(function(e) {
			return null == e.getAttribute("disabled")
		}) || de(_, function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), se
	}(E);
	A.find = p, A.expr = p.selectors, A.expr[":"] = A.expr.pseudos, A.uniqueSort = A.unique = p.uniqueSort, A.text = p.getText, A.isXMLDoc = p.isXML, A.contains = p.contains, A.escapeSelector = p.escape;

	function h(e, t, n) {
		for (var r = [], i = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;)
			if (1 === e.nodeType) {
				if (i && A(e).is(n)) break;
				r.push(e)
			} return r
	}

	function T(e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}
	var S = A.expr.match.needsContext;

	function L(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function k(e, n, r) {
		return b(n) ? A.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? A.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? A.grep(e, function(e) {
			return -1 < i.call(n, e) !== r
		}) : A.filter(n, e, r)
	}
	A.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? A.find.matchesSelector(r, e) ? [r] : [] : A.find.matches(e, A.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, A.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(A(e).filter(function() {
				for (t = 0; t < r; t++)
					if (A.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) A.find(e, i[t], n);
			return 1 < r ? A.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(k(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(k(this, e || [], !0))
		},
		is: function(e) {
			return !!k(this, "string" == typeof e && S.test(e) ? A(e) : e || [], !1).length
		}
	});
	var j, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(A.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(A) : A.makeArray(e, this);
		if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
		if (r[1]) {
			if (t = t instanceof A ? t[0] : t, A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), D.test(r[1]) && A.isPlainObject(t))
				for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
			return this
		}
		return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
	}).prototype = A.fn, j = A(C);
	var O = /^(?:parents|prev(?:Until|All))/,
		P = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function q(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	A.fn.extend({
		has: function(e) {
			var t = A(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (A.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && A(e);
			if (!S.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && A.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? A.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? i.call(A(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), A.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return h(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function(e) {
			return q(e, "nextSibling")
		},
		prev: function(e) {
			return q(e, "previousSibling")
		},
		nextAll: function(e) {
			return h(e, "nextSibling")
		},
		prevAll: function(e) {
			return h(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function(e) {
			return T((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return T(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e), A.merge([], e.childNodes))
		}
	}, function(r, i) {
		A.fn[r] = function(e, t) {
			var n = A.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = A.filter(t, n)), 1 < this.length && (P[r] || A.uniqueSort(n), O.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var R = /[^\x20\t\r\n\f]+/g;

	function H(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function _(e, t, n, r) {
		var i;
		try {
			e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	A.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, A.each(e.match(R) || [], function(e, t) {
			n[t] = !0
		}), n) : A.extend({}, r);

		function i() {
			for (s = s || r.once, a = o = !0; l.length; c = -1)
				for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
			r.memory || (t = !1), o = !1, s && (u = t ? [] : "")
		}
		var o, t, a, s, u = [],
			l = [],
			c = -1,
			d = {
				add: function() {
					return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
						A.each(e, function(e, t) {
							b(t) ? r.unique && d.has(t) || u.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !o && i()), this
				},
				remove: function() {
					return A.each(arguments, function(e, t) {
						for (var n; - 1 < (n = A.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
					}), this
				},
				has: function(e) {
					return e ? -1 < A.inArray(e, u) : 0 < u.length
				},
				empty: function() {
					return u = u && [], this
				},
				disable: function() {
					return s = l = [], u = t = "", this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return s = l = [], t || o || (u = t = ""), this
				},
				locked: function() {
					return !!s
				},
				fireWith: function(e, t) {
					return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!a
				}
			};
		return d
	}, A.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2],
					["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function() {
						return i
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return a.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return A.Deferred(function(r) {
							A.each(o, function(e, t) {
								var n = b(i[t[4]]) && i[t[4]];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function(t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function() {
								function e() {
									var e, t;
									if (!(i < u)) {
										if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
										t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, H, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, H, s), l(u, o, M, s), l(u, o, H, o.notifyWith))) : (a !== H && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
									}
								}
								var n = this,
									r = arguments,
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											A.Deferred.exceptionHook && A.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (A.Deferred.getStackHook && (t.stackTrace = A.Deferred.getStackHook()), E.setTimeout(t))
							}
						}
						return A.Deferred(function(e) {
							o[0][3].add(l(0, e, b(r) ? r : H, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : H)), o[2][3].add(l(0, e, b(n) ? n : M))
						}).promise()
					},
					promise: function(e) {
						return null != e ? A.extend(e, a) : a
					}
				},
				s = {};
			return A.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			function t(t) {
				return function(e) {
					i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o)
				}
			}
			var n = arguments.length,
				r = n,
				i = Array(r),
				o = s.call(arguments),
				a = A.Deferred();
			if (n <= 1 && (_(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || b(o[r] && o[r].then))) return a.then();
			for (; r--;) _(o[r], t(r), a.reject);
			return a.promise()
		}
	});
	var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	A.Deferred.exceptionHook = function(e, t) {
		E.console && E.console.warn && e && I.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, A.readyException = function(e) {
		E.setTimeout(function() {
			throw e
		})
	};
	var F = A.Deferred();

	function $() {
		C.removeEventListener("DOMContentLoaded", $), E.removeEventListener("load", $), A.ready()
	}
	A.fn.ready = function(e) {
		return F.then(e).catch(function(e) {
			A.readyException(e)
		}), this
	}, A.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --A.readyWait : A.isReady) || (A.isReady = !0) !== e && 0 < --A.readyWait || F.resolveWith(C, [A])
		}
	}), A.ready.then = F.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? E.setTimeout(A.ready) : (C.addEventListener("DOMContentLoaded", $), E.addEventListener("load", $));
	var W = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === w(n))
				for (s in i = !0, n) W(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
					return l.call(A(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		U = /^-ms-/,
		B = /-([a-z])/g;

	function z(e, t) {
		return t.toUpperCase()
	}

	function G(e) {
		return e.replace(U, "ms-").replace(B, z)
	}

	function X(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}

	function V() {
		this.expando = A.expando + V.uid++
	}
	V.uid = 1, V.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[G(t)] = n;
			else
				for (r in t) i[G(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(R) || []).length;
					for (; n--;) delete r[t[n]]
				}
				void 0 !== t && !A.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !A.isEmptyObject(t)
		}
	};
	var J = new V,
		Q = new V,
		Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Y.test(i) ? JSON.parse(i) : i)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	A.extend({
		hasData: function(e) {
			return Q.hasData(e) || J.hasData(e)
		},
		data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function(e, t) {
			Q.remove(e, t)
		},
		_data: function(e, t, n) {
			return J.access(e, t, n)
		},
		_removeData: function(e, t) {
			J.remove(e, t)
		}
	}), A.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function() {
				Q.set(this, n)
			}) : W(this, function(e) {
				var t;
				return o && void 0 === e ? void 0 !== (t = Q.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0 : void this.each(function() {
					Q.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (i = Q.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
				for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = G(r.slice(5)), Z(o, r, i[r]));
				J.set(o, "hasDataAttrs", !0)
			}
			return i
		},
		removeData: function(e) {
			return this.each(function() {
				Q.remove(this, e)
			})
		}
	}), A.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, A.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = A.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = A._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
				A.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return J.get(e, n) || J.access(e, n, {
				empty: A.Callbacks("once memory").add(function() {
					J.remove(e, [t + "queue", n])
				})
			})
		}
	}), A.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? A.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = A.queue(this, t, n);
				A._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && A.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				A.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			function n() {
				--i || o.resolveWith(a, [a])
			}
			var r, i = 1,
				o = A.Deferred(),
				a = this,
				s = this.length;
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = J.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
			return n(), o.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		re = C.documentElement,
		ie = function(e) {
			return A.contains(e.ownerDocument, e)
		},
		oe = {
			composed: !0
		};
	re.getRootNode && (ie = function(e) {
		return A.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
	});
	var ae = function(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === A.css(e, "display")
	};

	function se(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return A.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (A.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (A.cssNumber[t] || "px" !== l && +u) && te.exec(A.css(e, t));
		if (c && c[3] !== l) {
			for (u /= 2, l = l || c[3], c = +u || 1; a--;) A.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, A.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var ue = {};

	function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, d = e.length; c < d; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = J.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = A.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", J.set(r, "display", n)));
		for (c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	A.fn.extend({
		show: function() {
			return le(this, !0)
		},
		hide: function() {
			return le(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ae(this) ? A(this).show() : A(this).hide()
			})
		}
	});
	var ce, de, fe = /^(?:checkbox|radio)$/i,
		pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ce = C.createDocumentFragment().appendChild(C.createElement("div")), (de = C.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ce.appendChild(de), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function me(e, t) {
		var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && L(e, t) ? A.merge([e], n) : n
	}

	function ve(e, t) {
		for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var ye = /<|&#?\w+;/;

	function be(e, t, n, r, i) {
		for (var o, a, s, u, l, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
			if ((o = e[p]) || 0 === o)
				if ("object" === w(o)) A.merge(f, o.nodeType ? [o] : o);
				else if (ye.test(o)) {
			for (a = a || d.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + A.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
			A.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
		} else f.push(t.createTextNode(o));
		for (d.textContent = "", p = 0; o = f[p++];)
			if (r && -1 < A.inArray(o, r)) i && i.push(o);
			else if (l = ie(o), a = me(d.appendChild(o), "script"), l && ve(a), n)
			for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
		return d
	}
	var xe = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Te = /^([^.]*)(?:\.(.+)|)/;

	function Ee() {
		return !0
	}

	function Ce() {
		return !1
	}

	function Ae(e, t) {
		return e === function() {
			try {
				return C.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function Se(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return A().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = A.guid++)), e.each(function() {
			A.event.add(this, t, i, r, n)
		})
	}

	function Le(e, i, o) {
		o ? (J.set(e, i, !1), A.event.add(e, i, {
			namespace: !1,
			handler: function(e) {
				var t, n, r = J.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length)(A.event.special[i] || {}).delegateType && e.stopPropagation();
					else if (r = s.call(arguments), J.set(this, i, r), t = o(this, i), this[i](), r !== (n = J.get(this, i)) || t ? J.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
				} else r.length && (J.set(this, i, {
					value: A.event.trigger(A.extend(r[0], A.Event.prototype), r.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === J.get(e, i) && A.event.add(e, i, Ee)
	}
	A.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, d, f, p, h, g, m = J.get(t);
			if (X(t))
				for (n.handler && (n = (o = n).handler, i = o.selector), i && A.find.matchesSelector(re, i), n.guid || (n.guid = A.guid++), (u = m.events) || (u = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(e) {
						return void 0 !== A && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : void 0
					}), l = (e = (e || "").match(R) || [""]).length; l--;) p = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = A.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = A.event.special[p] || {}, c = A.extend({
					type: p,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && A.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (f = u[p]) || ((f = u[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), A.event.global[p] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, d, f, p, h, g, m = J.hasData(e) && J.get(e);
			if (m && (u = m.events)) {
				for (l = (t = (t || "").match(R) || [""]).length; l--;)
					if (p = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
						for (d = A.event.special[p] || {}, f = u[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
						a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || A.removeEvent(e, p, m.handle), delete u[p])
					} else
						for (p in u) A.event.remove(e, p + t[l], n, r, !0);
				A.isEmptyObject(u) && J.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = A.event.fix(e),
				l = (J.get(this, "events") || Object.create(null))[u.type] || [],
				c = A.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				for (a = A.event.handlers.call(this, u, l), t = 0;
					(i = a[t++]) && !u.isPropagationStopped();)
					for (u.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((A.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < A(i, this).index(l) : A.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(t, e) {
			Object.defineProperty(A.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: b(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[A.expando] ? e : new A.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return fe.test(t.type) && t.click && L(t, "input") && Le(t, "click", Ee), !1
				},
				trigger: function(e) {
					var t = this || e;
					return fe.test(t.type) && t.click && L(t, "input") && Le(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return fe.test(t.type) && t.click && L(t, "input") && J.get(t, "click") || L(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, A.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, A.Event = function(e, t) {
		if (!(this instanceof A.Event)) return new A.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && A.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[A.expando] = !0
	}, A.Event.prototype = {
		constructor: A.Event,
		isDefaultPrevented: Ce,
		isPropagationStopped: Ce,
		isImmediatePropagationStopped: Ce,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, A.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, A.event.addProp), A.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		A.event.special[e] = {
			setup: function() {
				return Le(this, e, Ae), !1
			},
			trigger: function() {
				return Le(this, e), !0
			},
			delegateType: t
		}
	}), A.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		A.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || A.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), A.fn.extend({
		on: function(e, t, n, r) {
			return Se(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Se(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
				A.event.remove(this, e, n, t)
			});
			for (i in e) this.off(i, t, e[i]);
			return this
		}
	});
	var De = /<script|<style|<link/i,
		ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
		je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ne(e, t) {
		return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
	}

	function Oe(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Pe(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function qe(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (J.hasData(e) && (s = J.get(e).events))
				for (i in J.remove(t, "handle events"), s)
					for (n = 0, r = s[i].length; n < r; n++) A.event.add(t, i, s[i][n]);
			Q.hasData(e) && (o = Q.access(e), a = A.extend({}, o), Q.set(t, a))
		}
	}

	function Re(n, r, i, o) {
		r = m(r);
		var e, t, a, s, u, l, c = 0,
			d = n.length,
			f = d - 1,
			p = r[0],
			h = b(p);
		if (h || 1 < d && "string" == typeof p && !y.checkClone && ke.test(p)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = p.call(this, e, t.html())), Re(t, r, i, o)
		});
		if (d && (t = (e = be(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = A.map(me(e, "script"), Oe)).length; c < d; c++) u = e, c !== f && (u = A.clone(u, !0, !0), s && A.merge(a, me(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, A.map(a, Pe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !J.access(u, "globalEval") && A.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? A._evalUrl && !u.noModule && A._evalUrl(u.src, {
					nonce: u.nonce || u.getAttribute("nonce")
				}, l) : x(u.textContent.replace(je, ""), u, l))
		}
		return n
	}

	function He(e, t, n) {
		for (var r, i = t ? A.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || A.cleanData(me(r)), r.parentNode && (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	A.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				d = ie(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || A.isXMLDoc(e)))
				for (a = me(c), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || me(e), a = a || me(c), r = 0, i = o.length; r < i; r++) qe(o[r], a[r]);
				else qe(e, c);
			return 0 < (a = me(c, "script")).length && ve(a, !d && me(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, i = A.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (X(n)) {
					if (t = n[J.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
						n[J.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), A.fn.extend({
		detach: function(e) {
			return He(this, e, !0)
		},
		remove: function(e) {
			return He(this, e)
		},
		text: function(e) {
			return W(this, function(e) {
				return void 0 === e ? A.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Re(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Re(this, arguments, function(e) {
				var t;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ne(this, e)).insertBefore(e, t.firstChild)
			})
		},
		before: function() {
			return Re(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Re(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (A.cleanData(me(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return A.clone(this, e, t)
			})
		},
		html: function(e) {
			return W(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !De.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = A.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (A.cleanData(me(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Re(this, arguments, function(e) {
				var t = this.parentNode;
				A.inArray(this, n) < 0 && (A.cleanData(me(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), A.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		A.fn[e] = function(e) {
			for (var t, n = [], r = A(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), A(r[o])[a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});

	function Me(e, t, n) {
		var r, i, o = {};
		for (i in t) o[i] = e.style[i], e.style[i] = t[i];
		for (i in r = n.call(e), t) e.style[i] = o[i];
		return r
	}
	var _e, Ie, Fe, $e, We, Ue, Be, ze, Ge = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		Xe = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = E), t.getComputedStyle(e)
		},
		Ve = new RegExp(ne.join("|"), "i");

	function Je() {
		var e;
		ze && (Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ze.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(Be).appendChild(ze), e = E.getComputedStyle(ze), _e = "1%" !== e.top, Ue = 12 === Qe(e.marginLeft), ze.style.right = "60%", $e = 36 === Qe(e.right), Ie = 36 === Qe(e.width), ze.style.position = "absolute", Fe = 12 === Qe(ze.offsetWidth / 3), re.removeChild(Be), ze = null)
	}

	function Qe(e) {
		return Math.round(parseFloat(e))
	}

	function Ye(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Xe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = A.style(e, t)), !y.pixelBoxStyles() && Ge.test(a) && Ve.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function Ke(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	Be = C.createElement("div"), (ze = C.createElement("div")).style && (ze.style.backgroundClip = "content-box", ze.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === ze.style.backgroundClip, A.extend(y, {
		boxSizingReliable: function() {
			return Je(), Ie
		},
		pixelBoxStyles: function() {
			return Je(), $e
		},
		pixelPosition: function() {
			return Je(), _e
		},
		reliableMarginLeft: function() {
			return Je(), Ue
		},
		scrollboxSize: function() {
			return Je(), Fe
		},
		reliableTrDimensions: function() {
			var e, t, n, r;
			return null == We && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = E.getComputedStyle(t), We = 3 < parseInt(r.height), re.removeChild(e)), We
		}
	}));
	var Ze = ["Webkit", "Moz", "ms"],
		et = C.createElement("div").style,
		tt = {};

	function nt(e) {
		var t = A.cssProps[e] || tt[e];
		return t || (e in et ? e : tt[e] = function(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--;)
				if ((e = Ze[n] + t) in et) return e
		}(e) || e)
	}
	var rt = /^(none|table(?!-c[ea]).+)/,
		it = /^--/,
		ot = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		at = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function st(e, t, n) {
		var r = te.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function ut(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += A.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= A.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= A.css(e, "border" + ne[a] + "Width", !0, i))) : (u += A.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += A.css(e, "border" + ne[a] + "Width", !0, i) : s += A.css(e, "border" + ne[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function lt(e, t, n) {
		var r = Xe(e),
			i = (!y.boxSizingReliable() || n) && "border-box" === A.css(e, "boxSizing", !1, r),
			o = i,
			a = Ye(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Ge.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && L(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === A.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === A.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ut(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function ct(e, t, n, r, i) {
		return new ct.prototype.init(e, t, n, r, i)
	}
	A.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Ye(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = G(t),
					u = it.test(t),
					l = e.style;
				if (u || (t = nt(s)), a = A.cssHooks[t] || A.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (A.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = G(t);
			return it.test(t) || (t = nt(s)), (a = A.cssHooks[t] || A.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ye(e, t, r)), "normal" === i && t in at && (i = at[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), A.each(["height", "width"], function(e, u) {
		A.cssHooks[u] = {
			get: function(e, t, n) {
				if (t) return !rt.test(A.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? lt(e, u, n) : Me(e, ot, function() {
					return lt(e, u, n)
				})
			},
			set: function(e, t, n) {
				var r, i = Xe(e),
					o = !y.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === A.css(e, "boxSizing", !1, i),
					s = n ? ut(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - ut(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = A.css(e, u)), st(0, t, s)
			}
		}
	}), A.cssHooks.marginLeft = Ke(y.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), A.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		A.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (A.cssHooks[i + o].set = st)
	}), A.fn.extend({
		css: function(e, t) {
			return W(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = A.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? A.style(e, t, n) : A.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), (A.Tween = ct).prototype = {
		constructor: ct,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || A.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (A.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = ct.propHooks[this.prop];
			return e && e.get ? e.get(this) : ct.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = ct.propHooks[this.prop];
			return this.options.duration ? this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ct.propHooks._default.set(this), this
		}
	}, ct.prototype.init.prototype = ct.prototype, ct.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = A.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				A.fx.step[e.prop] ? A.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !A.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)] ? e.elem[e.prop] = e.now : A.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, ct.propHooks.scrollTop = ct.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, A.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, A.fx = ct.prototype.init, A.fx.step = {};
	var dt, ft, pt, ht, gt = /^(?:toggle|show|hide)$/,
		mt = /queueHooks$/;

	function vt() {
		ft && (!1 === C.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(vt) : E.setTimeout(vt, A.fx.interval), A.fx.tick())
	}

	function yt() {
		return E.setTimeout(function() {
			dt = void 0
		}), dt = Date.now()
	}

	function bt(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function xt(e, t, n) {
		for (var r, i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function wt(o, e, t) {
		var n, a, r = 0,
			i = wt.prefilters.length,
			s = A.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (a) return !1;
				for (var e = dt || yt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: A.extend({}, e),
				opts: A.extend(!0, {
					specialEasing: {},
					easing: A.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: dt || yt(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = A.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function(e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = A.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, l.opts.specialEasing); r < i; r++)
			if (n = wt.prefilters[r].call(l, o, c, l.opts)) return b(n.stop) && (A._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
		return A.map(c, xt, l), b(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), A.fx.timer(A.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	A.Animation = A.extend(wt, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			for (var n, r = 0, i = (e = b(e) ? (t = e, ["*"]) : e.match(R)).length; r < i; r++) n = e[r], wt.tweeners[n] = wt.tweeners[n] || [], wt.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var r, i, o, a, s, u, l, c, d = "width" in t || "height" in t,
				f = this,
				p = {},
				h = e.style,
				g = e.nodeType && ae(e),
				m = J.get(e, "fxshow");
			for (r in n.queue || (null == (a = A._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, f.always(function() {
					f.always(function() {
						a.unqueued--, A.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (i = t[r], gt.test(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
						if ("show" !== i || !m || void 0 === m[r]) continue;
						g = !0
					}
					p[r] = m && m[r] || A.style(e, r)
				} if ((u = !A.isEmptyObject(t)) || !A.isEmptyObject(p))
				for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = J.get(e, "display")), "none" === (c = A.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = A.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === A.css(e, "float") && (u || (f.done(function() {
						h.display = l
					}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), u = !1, p) u || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
					display: l
				}), o && (m.hidden = !g), g && le([e], !0), f.done(function() {
					for (r in g || le([e]), J.remove(e, "fxshow"), p) A.style(e, r, p[r])
				})), u = xt(g ? m[r] : 0, r, f), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
		}],
		prefilter: function(e, t) {
			t ? wt.prefilters.unshift(e) : wt.prefilters.push(e)
		}
	}), A.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? A.extend({}, e) : {
			complete: n || !n && t || b(e) && e,
			duration: e,
			easing: n && t || t && !b(t) && t
		};
		return A.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in A.fx.speeds ? r.duration = A.fx.speeds[r.duration] : r.duration = A.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			b(r.old) && r.old.call(this), r.queue && A.dequeue(this, r.queue)
		}, r
	}, A.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(t, e, n, r) {
			function i() {
				var e = wt(this, A.extend({}, t), a);
				(o || J.get(this, "finish")) && e.stop(!0)
			}
			var o = A.isEmptyObject(t),
				a = A.speed(e, n, r);
			return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
		},
		stop: function(i, e, o) {
			function a(e) {
				var t = e.stop;
				delete e.stop, t(o)
			}
			return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
				var e = !0,
					t = null != i && i + "queueHooks",
					n = A.timers,
					r = J.get(this);
				if (t) r[t] && r[t].stop && a(r[t]);
				else
					for (t in r) r[t] && r[t].stop && mt.test(t) && a(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || A.dequeue(this, i)
			})
		},
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var e, t = J.get(this),
					n = t[a + "queue"],
					r = t[a + "queueHooks"],
					i = A.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, A.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), A.each(["toggle", "show", "hide"], function(e, r) {
		var i = A.fn[r];
		A.fn[r] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(bt(r, !0), e, t, n)
		}
	}), A.each({
		slideDown: bt("show"),
		slideUp: bt("hide"),
		slideToggle: bt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, r) {
		A.fn[e] = function(e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), A.timers = [], A.fx.tick = function() {
		var e, t = 0,
			n = A.timers;
		for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || A.fx.stop(), dt = void 0
	}, A.fx.timer = function(e) {
		A.timers.push(e), A.fx.start()
	}, A.fx.interval = 13, A.fx.start = function() {
		ft || (ft = !0, vt())
	}, A.fx.stop = function() {
		ft = null
	}, A.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, A.fn.delay = function(r, e) {
		return r = A.fx && A.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
			var n = E.setTimeout(e, r);
			t.stop = function() {
				E.clearTimeout(n)
			}
		})
	}, pt = C.createElement("input"), ht = C.createElement("select").appendChild(C.createElement("option")), pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = ht.selected, (pt = C.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
	var Tt, Et = A.expr.attrHandle;
	A.fn.extend({
		attr: function(e, t) {
			return W(this, A.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				A.removeAttr(this, e)
			})
		}
	}), A.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? A.prop(e, t, n) : (1 === o && A.isXMLDoc(e) || (i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void A.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = A.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!y.radioValue && "radio" === t && L(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(R);
			if (i && 1 === e.nodeType)
				for (; n = i[r++];) e.removeAttribute(n)
		}
	}), Tt = {
		set: function(e, t, n) {
			return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, A.each(A.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = Et[t] || A.find.attr;
		Et[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = Et[o], Et[o] = r, r = null != a(e, t, n) ? o : null, Et[o] = i), r
		}
	});
	var Ct = /^(?:input|select|textarea|button)$/i,
		At = /^(?:a|area)$/i;

	function St(e) {
		return (e.match(R) || []).join(" ")
	}

	function Lt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function Dt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
	}
	A.fn.extend({
		prop: function(e, t) {
			return W(this, A.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[A.propFix[e] || e]
			})
		}
	}), A.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && A.isXMLDoc(e) || (t = A.propFix[t] || t, i = A.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = A.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Ct.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), y.optSelected || (A.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		A.propFix[this.toLowerCase()] = this
	}), A.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (b(t)) return this.each(function(e) {
				A(this).addClass(t.call(this, e, Lt(this)))
			});
			if ((e = Dt(t)).length)
				for (; n = this[u++];)
					if (i = Lt(n), r = 1 === n.nodeType && " " + St(i) + " ") {
						for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = St(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (b(t)) return this.each(function(e) {
				A(this).removeClass(t.call(this, e, Lt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = Dt(t)).length)
				for (; n = this[u++];)
					if (i = Lt(n), r = 1 === n.nodeType && " " + St(i) + " ") {
						for (a = 0; o = e[a++];)
							for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
						i !== (s = St(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i,
				a = "string" == o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
				A(this).toggleClass(i.call(this, e, Lt(this), t), t)
			}) : this.each(function() {
				var e, t, n, r;
				if (a)
					for (t = 0, n = A(this), r = Dt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== i && "boolean" != o || ((e = Lt(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== i && J.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			for (var t, n = 0, r = " " + e + " "; t = this[n++];)
				if (1 === t.nodeType && -1 < (" " + St(Lt(t)) + " ").indexOf(r)) return !0;
			return !1
		}
	});
	var kt = /\r/g;
	A.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = b(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, A(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = A.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (r = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = A.valHooks[t.type] || A.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
		}
	}), A.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = A.find.attr(e, "value");
					return null != t ? t : St(A.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
						if (((n = r[u]).selected || u === i) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
							if (t = A(n).val(), o) return t;
							a.push(t)
						} return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = A.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < A.inArray(A.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), A.each(["radio", "checkbox"], function() {
		A.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < A.inArray(A(e).val(), t)
			}
		}, y.checkOn || (A.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in E;

	function jt(e) {
		e.stopPropagation()
	}
	var Nt = /^(?:focusinfocus|focusoutblur)$/;
	A.extend(A.event, {
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c, d = [n || C],
				f = v.call(e, "type") ? e.type : e,
				p = v.call(e, "namespace") ? e.namespace.split(".") : [],
				h = c = o = n = n || C;
			if (3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(f + A.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, (e = e[A.expando] ? e : new A.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : A.makeArray(t, [e]), l = A.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
				if (!r && !l.noBubble && !g(n)) {
					for (a = l.delegateType || f, Nt.test(a + f) || (h = h.parentNode); h; h = h.parentNode) d.push(h), o = h;
					o === (n.ownerDocument || C) && d.push(o.defaultView || o.parentWindow || E)
				}
				for (i = 0;
					(h = d[i++]) && !e.isPropagationStopped();) c = h, e.type = 1 < i ? a : l.bindType || f, (u = (J.get(h, "events") || Object.create(null))[e.type] && J.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && X(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
				return e.type = f, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(d.pop(), t) || !X(n) || s && b(n[f]) && !g(n) && ((o = n[s]) && (n[s] = null), A.event.triggered = f, e.isPropagationStopped() && c.addEventListener(f, jt), n[f](), e.isPropagationStopped() && c.removeEventListener(f, jt), A.event.triggered = void 0, o && (n[s] = o)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = A.extend(new A.Event, n, {
				type: e,
				isSimulated: !0
			});
			A.event.trigger(r, null, t)
		}
	}), A.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				A.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return A.event.trigger(e, t, n, !0)
		}
	}), y.focusin || A.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		function i(e) {
			A.event.simulate(r, e.target, A.event.fix(e))
		}
		A.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = J.access(e, r);
				t || e.addEventListener(n, i, !0), J.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = J.access(e, r) - 1;
				t ? J.access(e, r, t) : (e.removeEventListener(n, i, !0), J.remove(e, r))
			}
		}
	});
	var Ot = E.location,
		Pt = {
			guid: Date.now()
		},
		qt = /\?/;
	A.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new E.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || A.error("Invalid XML: " + e), t
	};
	var Rt = /\[\]$/,
		Ht = /\r?\n/g,
		Mt = /^(?:submit|button|image|reset|file)$/i,
		_t = /^(?:input|select|textarea|keygen)/i;
	A.param = function(e, t) {
		function n(e, t) {
			var n = b(t) ? t() : t;
			i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
		}
		var r, i = [];
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !A.isPlainObject(e)) A.each(e, function() {
			n(this.name, this.value)
		});
		else
			for (r in e) ! function n(r, e, i, o) {
				var t;
				if (Array.isArray(e)) A.each(e, function(e, t) {
					i || Rt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
				});
				else if (i || "object" !== w(e)) o(r, e);
				else
					for (t in e) n(r + "[" + t + "]", e[t], i, o)
			}(r, e[r], t, n);
		return i.join("&")
	}, A.fn.extend({
		serialize: function() {
			return A.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = A.prop(this, "elements");
				return e ? A.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !A(this).is(":disabled") && _t.test(this.nodeName) && !Mt.test(e) && (this.checked || !fe.test(e))
			}).map(function(e, t) {
				var n = A(this).val();
				return null == n ? null : Array.isArray(n) ? A.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Ht, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Ht, "\r\n")
				}
			}).get()
		}
	});
	var It = /%20/g,
		Ft = /#.*$/,
		$t = /([?&])_=[^&]*/,
		Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ut = /^(?:GET|HEAD)$/,
		Bt = /^\/\//,
		zt = {},
		Gt = {},
		Xt = "*/".concat("*"),
		Vt = C.createElement("a");

	function Jt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(R) || [];
			if (b(t))
				for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Qt(t, i, o, a) {
		var s = {},
			u = t === Gt;

		function l(e) {
			var r;
			return s[e] = !0, A.each(t[e] || [], function(e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function Yt(e, t) {
		var n, r, i = A.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
		return r && A.extend(!0, e, r), e
	}
	Vt.href = Ot.href, A.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ot.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ot.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Xt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": A.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Yt(Yt(e, A.ajaxSettings), t) : Yt(A.ajaxSettings, e)
		},
		ajaxPrefilter: Jt(zt),
		ajaxTransport: Jt(Gt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, d, f, n, p, r, h, g, i, o, m = A.ajaxSetup({}, t),
				v = m.context || m,
				y = m.context && (v.nodeType || v.jquery) ? A(v) : A.event,
				b = A.Deferred(),
				x = A.Callbacks("once memory"),
				w = m.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n)
								for (n = {}; t = Wt.exec(f);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? f : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (m.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (b.promise(T), m.url = ((e || m.url || Ot.href) + "").replace(Bt, Ot.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(R) || [""], null == m.crossDomain) {
				r = C.createElement("a");
				try {
					r.href = m.url, r.href = r.href, m.crossDomain = Vt.protocol + "//" + Vt.host != r.protocol + "//" + r.host
				} catch (e) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = A.param(m.data, m.traditional)), Qt(zt, m, t, T), h) return T;
			for (i in (g = A.event && m.global) && 0 == A.active++ && A.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ut.test(m.type), d = m.url.replace(Ft, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(It, "+")) : (o = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (qt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace($t, "$1"), o = (qt.test(d) ? "&" : "?") + "_=" + Pt.guid++ + o), m.url = d + o), m.ifModified && (A.lastModified[d] && T.setRequestHeader("If-Modified-Since", A.lastModified[d]), A.etag[d] && T.setRequestHeader("If-None-Match", A.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(i, m.headers[i]);
			if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
			if (u = "abort", x.add(m.complete), T.done(m.success), T.fail(m.error), c = Qt(Gt, m, t, T)) {
				if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), h) return T;
				m.async && 0 < m.timeout && (p = E.setTimeout(function() {
					T.abort("timeout")
				}, m.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, p && E.clearTimeout(p), c = void 0, f = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					for (var r, i, o, a, s = e.contents, u = e.dataTypes;
						"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in s)
							if (s[i] && s[i].test(r)) {
								u.unshift(i);
								break
							} if (u[0] in n) o = u[0];
					else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a = a || i
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(m, T, n)), !i && -1 < A.inArray("script", m.dataTypes) && (m.converters["text script"] = function() {}), s = function(e, t, n, r) {
					var i, o, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					for (o = c.shift(); o;)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
							if ("*" === o) o = u;
							else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o]))
							for (i in l)
								if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e.throws) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(m, s, T, i), i ? (m.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (A.lastModified[d] = u), (u = T.getResponseHeader("etag")) && (A.etag[d] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? b.resolveWith(v, [o, l, T]) : b.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]), x.fireWith(v, [T, l]), g && (y.trigger("ajaxComplete", [T, m]), --A.active || A.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function(e, t, n) {
			return A.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return A.get(e, void 0, t, "script")
		}
	}), A.each(["get", "post"], function(e, i) {
		A[i] = function(e, t, n, r) {
			return b(t) && (r = r || n, n = t, t = void 0), A.ajax(A.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, A.isPlainObject(e) && e))
		}
	}), A.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), A._evalUrl = function(e, t, n) {
		return A.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				A.globalEval(e, t, n)
			}
		})
	}, A.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (b(e) && (e = e.call(this[0])), t = A(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return b(n) ? this.each(function(e) {
				A(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = A(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = b(t);
			return this.each(function(e) {
				A(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				A(this).replaceWith(this.childNodes)
			}), this
		}
	}), A.expr.pseudos.hidden = function(e) {
		return !A.expr.pseudos.visible(e)
	}, A.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, A.ajaxSettings.xhr = function() {
		try {
			return new E.XMLHttpRequest
		} catch (e) {}
	};
	var Kt = {
			0: 200,
			1223: 204
		},
		Zt = A.ajaxSettings.xhr();
	y.cors = !!Zt && "withCredentials" in Zt, y.ajax = Zt = !!Zt, A.ajaxTransport(function(i) {
		var o, a;
		if (y.cors || Zt && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Kt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
					4 === r.readyState && E.setTimeout(function() {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), A.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), A.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return A.globalEval(e), e
			}
		}
	}), A.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), A.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				r = A("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), C.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var en, tn = [],
		nn = /(=)\?(?=&|$)|\?\?/;
	A.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = tn.pop() || A.expando + "_" + Pt.guid++;
			return this[e] = !0, e
		}
	}), A.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, a = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(nn, "$1" + r) : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return o || A.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = E[r], E[r] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === i ? A(E).removeProp(r) : E[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, tn.push(r)), o && b(i) && i(o[0]), o = i = void 0
		}), "script"
	}), y.createHTMLDocument = ((en = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === en.childNodes.length), A.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && A(o).remove(), A.merge([], i.childNodes)));
		var r, i, o
	}, A.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = St(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && A.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, A.expr.pseudos.animated = function(t) {
		return A.grep(A.timers, function(e) {
			return t === e.elem
		}).length
	}, A.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l = A.css(e, "position"),
				c = A(e),
				d = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = A.css(e, "top"), u = A.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), b(t) && (t = t.call(e, n, A.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), c.css(d))
		}
	}, A.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				A.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === A.css(r, "position")) t = r.getBoundingClientRect();
				else {
					for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === A.css(e, "position");) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = A(e).offset()).top += A.css(e, "borderTopWidth", !0), i.left += A.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - A.css(r, "marginTop", !0),
					left: t.left - i.left - A.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === A.css(e, "position");) e = e.offsetParent;
				return e || re
			})
		}
	}), A.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		A.fn[t] = function(e) {
			return W(this, function(e, t, n) {
				var r;
				return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
			}, t, e, arguments.length)
		}
	}), A.each(["top", "left"], function(e, n) {
		A.cssHooks[n] = Ke(y.pixelPosition, function(e, t) {
			if (t) return t = Ye(e, n), Ge.test(t) ? A(e).position()[n] + "px" : t
		})
	}), A.each({
		Height: "height",
		Width: "width"
	}, function(a, s) {
		A.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function(r, o) {
			A.fn[o] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return W(this, function(e, t, n) {
					var r;
					return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? A.css(e, t, i) : A.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		A.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), A.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		A.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	A.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function() {
			return e.apply(t || this, r.concat(s.call(arguments)))
		}).guid = e.guid = e.guid || A.guid++, i
	}, A.holdReady = function(e) {
		e ? A.readyWait++ : A.ready(!0)
	}, A.isArray = Array.isArray, A.parseJSON = JSON.parse, A.nodeName = L, A.isFunction = b, A.isWindow = g, A.camelCase = G, A.type = w, A.now = Date.now, A.isNumeric = function(e) {
		var t = A.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, A.trim = function(e) {
		return null == e ? "" : (e + "").replace(rn, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return A
	});
	var on = E.jQuery,
		an = E.$;
	return A.noConflict = function(e) {
		return E.$ === A && (E.$ = an), e && E.jQuery === A && (E.jQuery = on), A
	}, void 0 === e && (E.jQuery = E.$ = A), A
});
var runtime = function(a) {
	"use strict";
	var d, e = Object.prototype,
		c = e.hasOwnProperty,
		t = "function" == typeof Symbol ? Symbol : {},
		i = t.iterator || "@@iterator",
		n = t.asyncIterator || "@@asyncIterator",
		r = t.toStringTag || "@@toStringTag";

	function s(e, t, n, r) {
		var o, a, s, u, i = t && t.prototype instanceof y ? t : y,
			l = Object.create(i.prototype),
			c = new S(r || []);
		return l._invoke = (o = e, a = n, s = c, u = p, function(e, t) {
			if (u === g) throw new Error("Generator is already running");
			if (u === m) {
				if ("throw" === e) throw t;
				return D()
			}
			for (s.method = e, s.arg = t;;) {
				var n = s.delegate;
				if (n) {
					var r = function e(t, n) {
						var r = t.iterator[n.method];
						if (r === d) {
							if (n.delegate = null, "throw" === n.method) {
								if (t.iterator.return && (n.method = "return", n.arg = d, e(t, n), "throw" === n.method)) return v;
								n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
							}
							return v
						}
						var i = f(r, t.iterator, n.arg);
						if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
						var o = i.arg;
						return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = d), n.delegate = null, v) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
					}(n, s);
					if (r) {
						if (r === v) continue;
						return r
					}
				}
				if ("next" === s.method) s.sent = s._sent = s.arg;
				else if ("throw" === s.method) {
					if (u === p) throw u = m, s.arg;
					s.dispatchException(s.arg)
				} else "return" === s.method && s.abrupt("return", s.arg);
				u = g;
				var i = f(o, a, s);
				if ("normal" === i.type) {
					if (u = s.done ? m : h, i.arg === v) continue;
					return {
						value: i.arg,
						done: s.done
					}
				}
				"throw" === i.type && (u = m, s.method = "throw", s.arg = i.arg)
			}
		}), l
	}

	function f(e, t, n) {
		try {
			return {
				type: "normal",
				arg: e.call(t, n)
			}
		} catch (e) {
			return {
				type: "throw",
				arg: e
			}
		}
	}
	a.wrap = s;
	var p = "suspendedStart",
		h = "suspendedYield",
		g = "executing",
		m = "completed",
		v = {};

	function y() {}

	function o() {}

	function u() {}
	var l = {};
	l[i] = function() {
		return this
	};
	var b = Object.getPrototypeOf,
		x = b && b(b(L([])));
	x && x !== e && c.call(x, i) && (l = x);
	var w = u.prototype = y.prototype = Object.create(l);

	function T(e) {
		["next", "throw", "return"].forEach(function(t) {
			e[t] = function(e) {
				return this._invoke(t, e)
			}
		})
	}

	function E(u, l) {
		var t;
		this._invoke = function(n, r) {
			function e() {
				return new l(function(e, t) {
					! function t(e, n, r, i) {
						var o = f(u[e], u, n);
						if ("throw" !== o.type) {
							var a = o.arg,
								s = a.value;
							return s && "object" == typeof s && c.call(s, "__await") ? l.resolve(s.__await).then(function(e) {
								t("next", e, r, i)
							}, function(e) {
								t("throw", e, r, i)
							}) : l.resolve(s).then(function(e) {
								a.value = e, r(a)
							}, function(e) {
								return t("throw", e, r, i)
							})
						}
						i(o.arg)
					}(n, r, e, t)
				})
			}
			return t = t ? t.then(e, e) : e()
		}
	}

	function C(e) {
		var t = {
			tryLoc: e[0]
		};
		1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
	}

	function A(e) {
		var t = e.completion || {};
		t.type = "normal", delete t.arg, e.completion = t
	}

	function S(e) {
		this.tryEntries = [{
			tryLoc: "root"
		}], e.forEach(C, this), this.reset(!0)
	}

	function L(t) {
		if (t) {
			var e = t[i];
			if (e) return e.call(t);
			if ("function" == typeof t.next) return t;
			if (!isNaN(t.length)) {
				var n = -1,
					r = function e() {
						for (; ++n < t.length;)
							if (c.call(t, n)) return e.value = t[n], e.done = !1, e;
						return e.value = d, e.done = !0, e
					};
				return r.next = r
			}
		}
		return {
			next: D
		}
	}

	function D() {
		return {
			value: d,
			done: !0
		}
	}
	return o.prototype = w.constructor = u, u.constructor = o, u[r] = o.displayName = "GeneratorFunction", a.isGeneratorFunction = function(e) {
		var t = "function" == typeof e && e.constructor;
		return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
	}, a.mark = function(e) {
		return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, r in e || (e[r] = "GeneratorFunction")), e.prototype = Object.create(w), e
	}, a.awrap = function(e) {
		return {
			__await: e
		}
	}, T(E.prototype), E.prototype[n] = function() {
		return this
	}, a.AsyncIterator = E, a.async = function(e, t, n, r, i) {
		void 0 === i && (i = Promise);
		var o = new E(s(e, t, n, r), i);
		return a.isGeneratorFunction(t) ? o : o.next().then(function(e) {
			return e.done ? e.value : o.next()
		})
	}, T(w), w[r] = "Generator", w[i] = function() {
		return this
	}, w.toString = function() {
		return "[object Generator]"
	}, a.keys = function(n) {
		var r = [];
		for (var e in n) r.push(e);
		return r.reverse(),
			function e() {
				for (; r.length;) {
					var t = r.pop();
					if (t in n) return e.value = t, e.done = !1, e
				}
				return e.done = !0, e
			}
	}, a.values = L, S.prototype = {
		constructor: S,
		reset: function(e) {
			if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(A), !e)
				for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = d)
		},
		stop: function() {
			this.done = !0;
			var e = this.tryEntries[0].completion;
			if ("throw" === e.type) throw e.arg;
			return this.rval
		},
		dispatchException: function(n) {
			if (this.done) throw n;
			var r = this;

			function e(e, t) {
				return o.type = "throw", o.arg = n, r.next = e, t && (r.method = "next", r.arg = d), !!t
			}
			for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
				var i = this.tryEntries[t],
					o = i.completion;
				if ("root" === i.tryLoc) return e("end");
				if (i.tryLoc <= this.prev) {
					var a = c.call(i, "catchLoc"),
						s = c.call(i, "finallyLoc");
					if (a && s) {
						if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
						if (this.prev < i.finallyLoc) return e(i.finallyLoc)
					} else if (a) {
						if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
					} else {
						if (!s) throw new Error("try statement without catch or finally");
						if (this.prev < i.finallyLoc) return e(i.finallyLoc)
					}
				}
			}
		},
		abrupt: function(e, t) {
			for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
				var r = this.tryEntries[n];
				if (r.tryLoc <= this.prev && c.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
					var i = r;
					break
				}
			}
			i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
			var o = i ? i.completion : {};
			return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
		},
		complete: function(e, t) {
			if ("throw" === e.type) throw e.arg;
			return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
		},
		finish: function(e) {
			for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
				var n = this.tryEntries[t];
				if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), v
			}
		},
		catch: function(e) {
			for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
				var n = this.tryEntries[t];
				if (n.tryLoc === e) {
					var r, i = n.completion;
					return "throw" === i.type && (r = i.arg, A(n)), r
				}
			}
			throw new Error("illegal catch attempt")
		},
		delegateYield: function(e, t, n) {
			return this.delegate = {
				iterator: L(e),
				resultName: t,
				nextLoc: n
			}, "next" === this.method && (this.arg = d), v
		}
	}, a
}("object" == typeof module ? module.exports : {});
try {
	regeneratorRuntime = runtime
} catch (e) {
	Function("r", "regeneratorRuntime = r")(runtime)
}

function _slicedToArray(e, t) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
	if (e) {
		if ("string" == typeof e) return _arrayLikeToArray(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
	}
}

function _arrayLikeToArray(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
	return r
}

function _iterableToArrayLimit(e, t) {
	if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
		var n = [],
			r = !0,
			i = !1,
			o = void 0;
		try {
			for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
		} catch (e) {
			i = !0, o = e
		} finally {
			try {
				r || null == s.return || s.return()
			} finally {
				if (i) throw o
			}
		}
		return n
	}
}

function _arrayWithHoles(e) {
	if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, t, n, r, i, o, a) {
	try {
		var s = e[o](a),
			u = s.value
	} catch (e) {
		return void n(e)
	}
	s.done ? t(u) : Promise.resolve(u).then(r, i)
}

function _asyncToGenerator(s) {
	return function() {
		var e = this,
			a = arguments;
		return new Promise(function(t, n) {
			var r = s.apply(e, a);

			function i(e) {
				asyncGeneratorStep(r, t, n, i, o, "next", e)
			}

			function o(e) {
				asyncGeneratorStep(r, t, n, i, o, "throw", e)
			}
			i(void 0)
		})
	}
}! function() {
	function e() {
		this.defaults = {
			domain: null,
			origin: {
				desktop: null,
				mobile: null,
				files: null,
				images: null,
				assets: null
			},
			gamesDir: null
		}, this.opts = $.extend({}, this.defaults, window.siteConfig), this.init()
	}
	e.prototype = {
		getDomain: function() {
			return this.opts.domain
		},
		getOrigin: function(e) {
			return this.opts.origin[e] || null
		},
		getPath: function(e, t) {
			return "/" + [e, t].filter(function(e) {
				return e
			}).join("/")
		},
		getUrl: function(e, t) {
			return [this.getOrigin(e), this.opts.gamesDir, t].filter(function(e) {
				return e
			}).join("/")
		},
		games: {
			getOrigin: function() {
				return this.parent.getOrigin("files")
			},
			getPath: function(e) {
				return this.parent.getPath(this.parent.opts.gamesDir, e)
			},
			getUrl: function(e) {
				return this.parent.getUrl("files", e)
			}
		},
		images: {
			getOrigin: function() {
				return this.parent.getOrigin("images")
			},
			getPath: function(e) {
				return this.parent.getPath(this.parent.opts.gamesDir, e)
			},
			getUrl: function(e) {
				return this.parent.getUrl("images", e)
			}
		},
		init: function() {
			(this.games.parent = this).images.parent = this
		}
	}, window.siteConfig = new e
}(),
function() {
	function e() {
		this.defaults = {
			id: null,
			slug: null,
			title: null,
			imageFile: null,
			videoFile: null,
			frame: null,
			embed: null,
			embedType: null,
			url: null,
			isExternal: null,
			preAd: null,
			isLoaded: !1,
			isExpanded: !1,
			inGameBox: null
		}, this.opts = $.extend({}, this.defaults, window.gameData), this.init()
	}
	e.prototype = {
		init: function() {
			for (var n = this, e = 0, r = Object.entries(n.opts); e < r.length; e++) ! function() {
				var t = _slicedToArray(r[e], 1)[0];
				Object.defineProperty(n, t, {
					get: function() {
						return n.opts[t]
					},
					set: function(e) {
						n.opts[t] = e
					}
				})
			}()
		}
	}, window.gameData = new e
}(),
function(r) {
	function t(e, t) {
		this.defaults = {
			enabled: !1,
			nonLinearDuration: 10,
			adVendorName: "Skippable Linear Sample",
			adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator="
		}, this.opts = r.extend({}, this.defaults, t, window.preAd), this.$el = r(e), this.adContainer = r(e).children("#ad-container"), this.nonLinearContainer = r(e).children("#non-linear-text"), this.timeCounter = this.opts.nonLinearDuration, this.timeoutTimer = null, this.adsManager = null, this.adsLoader = null
	}
	t.prototype = {
		init: function() {
			return this.opts.enabled ? "undefined" == typeof google || void 0 === google.ima ? (this.hideContainer(), void this.triggerAll("loaded alert", {
				message: "No Google IMA, maybe an ad-blocker? 🤔"
			})) : void this.setupTCFApi() : (this.hideContainer(), void this.triggerAll("loaded alert", {
				message: "Pre ad is not enabled on this content."
			}))
		},
		setupTCFApi: function() {
			var n, r = this,
				t = 0,
				i = setInterval(function() {
					__tcfapi("ping", 2, function(e) {
						!1 === e.cmpLoaded && 7 == ++t && (console.log("CMP load timeout"), r.start(!0), clearInterval(i))
					})
				}, 500);
			__tcfapi("addEventListener", 2, function(e, t) {
				if (clearInterval(i), t && !1 === e.gdprApplies) return console.log("__tcfapi: GDPR does not apply."), r.start(), void __tcfapi("removeEventListener", 2, function(e) {}, e.listenerId);
				if (console.log("__tcfapi: " + e.eventStatus), t && "tcloaded" === e.eventStatus) __tcfapi("removeEventListener", 2, function(e) {
					r.start()
				}, e.listenerId);
				else switch (e.eventStatus) {
					case "cmpuishown":
						n = setInterval(function() {
							__tcfapi("ping", 2, function(e) {
								"loaded" === e.cmpStatus && "hidden" === e.displayStatus && (clearInterval(n), r.start())
							})
						}, 500);
						break;
					case "useractioncomplete":
						n && clearInterval(n), r.start();
						break;
					case "cmpNotFound":
						r.start(!0)
				}
			})
		},
		start: function(e) {
			0 < arguments.length && void 0 !== e && e && (this.opts.adVendorName += " (NO GDPR CONSENT)", this.opts.adTagUrl += "&gdpr=0"), this.adSlotWidth = this.adContainer.width(), this.adSlotHeight = this.adContainer.height(), this.setUpIMA()
		},
		setUpIMA: function() {
			this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer.get(0)), this.adDisplayContainer.initialize(), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), !1);
			var e = new google.ima.AdsRequest;
			e.adTagUrl = this.opts.adTagUrl, e.linearAdSlotWidth = this.adSlotWidth, e.linearAdSlotHeight = this.adSlotHeight, e.nonLinearAdSlotWidth = this.adSlotWidth, e.nonLinearAdSlotHeight = this.adSlotHeight, console.log("Ad vendor: " + this.opts.adVendorName), this.adsLoader.requestAds(e)
		},
		onAdsManagerLoaded: function(e) {
			var t = new google.ima.AdsRenderingSettings;
			this.adsManager = e.getAdsManager(this.adContainer.get(0), t), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this)), this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAdEvent.bind(this)), this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, this.onAdEvent.bind(this)), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.onAdEvent.bind(this)), this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.onAdEvent.bind(this)), this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, this.onAdEvent.bind(this)), this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, this.onAdEvent.bind(this)), this.trigger("loaded")
		},
		onAdError: function(e) {
			this.hideContainer(), this.triggerAll("loaded error", [e])
		},
		onContentPause: function() {},
		onContentResume: function() {},
		onAdEvent: function(e) {
			switch (this.adObject = e.getAd(), console.log("Ad event: " + e.type), e.type) {
				case google.ima.AdEvent.Type.LOADED:
					this.correctSize(!0), this.adObject.isLinear() || (console.log("Ad is non-linear"), this.showNonLinearAdContainer(), this.correctPositions(!0), this.tickTimer());
					break;
				case google.ima.AdEvent.Type.STARTED:
					this.adObject.isLinear();
					break;
				case google.ima.AdEvent.Type.COMPLETE:
				case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
				case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
				case google.ima.AdEvent.Type.SKIPPED:
				case google.ima.AdEvent.Type.USER_CLOSE:
					this.adObject.isLinear(), this.showContent()
			}
		},
		playAds: function() {
			this.showContainer();
			try {
				this.adsManager.init(this.adSlotWidth, this.adSlotHeight, google.ima.ViewMode.NORMAL), this.adsManager.start()
			} catch (e) {
				this.trigger("alert", {
					message: "Ads not initialized ☹️"
				}), this.showContent()
			}
		},
		showContent: function() {
			clearTimeout(this.timeoutTimer), this.adsLoader && (this.adsLoader.destroy(), this.adsLoader = null), this.adsManager && (this.adsManager.destroy(), this.adsManager = null), r(window).off(".preAd"), this.hideContainer(), this.trigger("complete")
		},
		hideContainer: function() {
			this.$el.hide()
		},
		showContainer: function() {
			this.$el.show()
		},
		showNonLinearAdContainer: function() {
			this.$el.removeClass("loading").addClass("black-opacity").show()
		},
		correctPositions: function(e) {
			var t = this.adContainer.width(),
				n = this.adContainer.height() / 2 + this.adObject.getHeight() / 2;
			this.resize(t, n), e && r(window).on("resize.preAd orientationchange.preAd", this.correctPositions.bind(this, !1))
		},
		correctSize: function(e) {
			this.resize(this.adContainer.width(), this.adContainer.height()), e && r(window).on("resize.preAd orientationchange.preAd", this.correctSize.bind(this, !1))
		},
		tickTimer: function() {
			var e = this;
			e.nonLinearContainer.show().html("Ad will close in " + e.timeCounter + " second" + (1 < e.timeCounter ? "s" : "")), e.timeoutTimer = setTimeout(function() {
				0 == --e.timeCounter ? e.showContent() : (clearTimeout(e.timeoutTimer), e.tickTimer())
			}, 1e3)
		},
		resize: function(e, t) {
			this.adsManager.resize(e, t, google.ima.ViewMode.NORMAL)
		},
		on: function() {
			var e;
			return (e = r(this)).on.apply(e, arguments), this
		},
		trigger: function() {
			var e;
			(e = r(this)).trigger.apply(e, arguments)
		},
		triggerAll: function() {
			var e;
			(e = r(this)).triggerAll.apply(e, arguments)
		}
	}, r.fn.preAd = function(e) {
		if (this.length) return new t(this, e)
	}, r.fn.extend({
		triggerAll: function(e, t) {
			for (var n = e.split(" "), r = 0; r < n.length; r += 1) this.trigger(n[r], t);
			return this
		}
	})
}(jQuery),
function(u) {
	function t(e, t) {
		this.defaults = {
			embedType: null,
			embedUrl: null,
			embedIsExternal: !1,
			playBtn: "#button-play",
			loadingLayer: "#loading",
			playLayer: "#play",
			errorLayer: "#error",
			ruffleJs: null,
			translateEmbedUrlCallback: this.translateEmbedUrl
		}, this.opts = u.extend({}, this.defaults, t, window.gameEmbed), this.$el = u(e), this.embedUrl = null
	}
	t.prototype = {
		init: function() {
			var e, t = this;
			u(this.opts.playBtn).on("click", function(e) {
				e.preventDefault(), t.trigger("play-click")
			}), this.embedUrl = this.opts.translateEmbedUrlCallback(this.opts.embedUrl), this.opts.embedIsExternal ? this.trigger("ready") : this.checkFile(this.embedUrl), "flash" === this.opts.embedType && (null === this.opts.ruffleJs ? this.trigger("error", {
				message: "ruffleJs path option must be defined."
			}) : ((e = document.createElement("script")).setAttribute("src", this.opts.ruffleJs), document.body.appendChild(e)))
		},
		checkFile: function(t) {
			var n = this,
				e = new XMLHttpRequest;
			e.open("HEAD", t, !0), e.onload = function() {
				200 <= this.status && this.status < 400 ? n.trigger("ready", {
					requestEvent: this
				}) : n.trigger("load-error", {
					requestEvent: this
				})
			}, e.onerror = function(e) {
				n.trigger("connection-error", {
					requestEvent: this,
					progressEvent: e,
					url: t
				})
			}, e.send()
		},
		hideLoading: function() {
			u(this.opts.loadingLayer).hide()
		},
		hidePlay: function() {
			u(this.opts.playLayer).hide()
		},
		showError: function(e, t, n) {
			var r = u(this.opts.errorLayer).show();
			r.children(".error-code").text(e), r.children(".error-message").html(n), r.children(".error-raw").text(t)
		},
		doEmbed: function() {
			"function" == typeof this.embedType[this.opts.embedType] ? this.embedType[this.opts.embedType].bind(this)() : this.trigger("error", {
				message: "Unknown embed type: " + this.opts.embedType
			})
		},
		embedType: {
			html5: function() {
				var e = u("<iframe>").attr("id", "game").attr("tabindex", 0).attr("scrolling", "no").attr("frameborder", 0).attr("allowfullscreen", !0).attr("width", "100%").attr("height", "100%").attr("src", this.embedUrl).css({
					border: "none",
					overflow: "hidden"
				});
				this.$el.append(e).show(), this.trigger("complete")
			},
			flash: function() {
				var r = this,
					i = this,
					o = window.RufflePlayer.newest(),
					a = i.splashScreen();
				i.hidePlay(), i.$el.show().html(a), a.setStatus("Loading..."), i.stream(this.embedUrl, {
					onProgress: function(e) {
						var t = e.loaded,
							n = e.total;
						a.setProgress(t, n)
					}
				}).then(function() {
					var t = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									a.setProgress(1, 1), a.setStatus("Please wait..."), setTimeout(function() {
										var e = o.createPlayer();
										e.style.display = "block", e.style.width = "100vw", e.style.height = "100vh";
										var t = u(e.preloader).css({
											background: "rgba(0,0,0,.075)",
											color: "#555"
										});
										t.children(".logo,.loadingAnimation").remove(), t.children(".loadbar").css({
											width: "200px",
											borderRadius: "1rem",
											overflow: "hidden",
											height: "1.5rem",
											maxHeight: "1.5rem",
											background: "rgba(0, 0, 0, .1)",
											marginBottom: "15px"
										}).children(".loadbarInner").css({
											backgroundColor: "#e64944"
										}), t.append(u("<div>").text("Đang tải dữ liệu...")), r.$el.html(e), e.dynamicStyles.sheet.insertRule(":host {font-family: inherit}"), e.load({
											autoplay: !0,
											data: n
										}).then(function() {
											i.trigger("complete")
										}).catch(function(e) {
											i.trigger("error", {
												message: "Ruffle failed to load the file: " + e
											})
										})
									}, 10);
								case 3:
								case "end":
									return e.stop()
							}
						}, e)
					}));
					return function(e) {
						return t.apply(this, arguments)
					}
				}()).catch(function(e) {
					a.setStatus("Error loading the game file :(")
				})
			}
		},
		stream: function(e, t) {
			var n = 1 < arguments.length && void 0 !== t ? t : {},
				r = n.onProgress,
				i = void 0 === r ? function(e) {} : r,
				o = n.responseType,
				a = void 0 === o ? "arraybuffer" : o,
				s = n.method,
				u = void 0 === s ? "GET" : s;
			return new Promise(function(t, n) {
				var r = new XMLHttpRequest;
				r.responseType = a, r.onerror = function(e) {
					n(new TypeError("Failed to fetch"))
				}, r.onload = function(e) {
					200 !== r.status ? n(new TypeError("Failed to fetch")) : t(r.response)
				}, r.onprogress = function(e) {
					var t = e.loaded,
						n = e.total,
						r = e.timestamp;
					i({
						loaded: t,
						total: n,
						timestamp: r
					})
				}, r.open(u, e), r.send()
			})
		},
		splashScreen: function() {
			function i(e, t) {
				return t ? "".concat((e / t * 100).toFixed(0), "%") : ""
			}
			var o = u("<div>").attr("class", "progress-bar").css({
					width: 0
				}),
				a = u("<div>").attr("class", "progress").append(o),
				s = u("<div>").attr("class", "splash-loading"),
				e = u("<div>").attr("class", "splash-screen").append(a).append(s);
			return Object.assign(e, {
				setStatus: function(e) {
					s.text(e)
				},
				setProgress: function(e, t, n) {
					var r = 2 < arguments.length && void 0 !== n ? n : i;
					isNaN(e + t) ? a.css({
						width: 0
					}) : o.stop().animate({
						width: (e / t * 100).toFixed(1) + "%"
					}), s.text(r(e, t))
				}
			})
		},
		translateEmbedUrl: function(e) {
			return e
		},
		on: function() {
			var e;
			return (e = u(this)).on.apply(e, arguments), this
		},
		trigger: function() {
			var e;
			(e = u(this)).trigger.apply(e, arguments)
		}
	}, u.fn.GameEmbed = function(e) {
		if (this.length) return new t(this, e)
	}
}(jQuery),
function(r) {
	function n(e, t) {
		this.defaults = {
			videoFiles: null,
			basePath: "",
			mimeTypes: {
				".mp4": "video/mp4",
				".webm": "video/webm",
				".ogv": "video/ogg"
			},
			startDelay: 2500,
			interval: 4e3,
			fadeInSpeed: 500,
			fadeOutSpeed: 1e3
		}, this.opts = r.extend({}, this.defaults, t), this.$el = r(e), this.playTimeout = null, this.hideTimeout = null, this.videoContainer = null, this.videoObj = null, this.videoDuration = null
	}
	n.prototype = {
		init: function() {
			var e = this;
			null !== this.opts.videoFiles && setTimeout(function() {
				e.start()
			}, this.opts.startDelay)
		},
		start: function() {
			null === this.videoContainer ? this.createVideo() : this.delayPlay()
		},
		createVideo: function() {
			var n = this;
			n.videoContainer = r("<div>").addClass("video-thumb").hide(), this.$el.prepend(n.videoContainer), n.videoObj = r("<video playsinline muted>"), r.each(this.opts.videoFiles, function(e, t) {
				n.videoObj.append('<source src="' + n.opts.basePath + "/" + t + '" type="' + n.opts.mimeTypes[t.slice(t.lastIndexOf("."))] + '">')
			}), n.videoContainer.append(n.videoObj), n.videoObj.on("canplay", function() {
				null === n.playTimeout && (n.videoDuration = this.duration, n.play())
			}).on("playing", function() {
				clearTimeout(n.hideTimeout), n.hideTimeout = setTimeout(function() {
					n.hide(), n.start()
				}, 1e3 * (n.videoDuration - this.currentTime) - n.opts.fadeOutSpeed)
			}).children("source:last-child").on("error", function(e) {})
		},
		show: function() {
			this.videoContainer.stop().fadeIn(this.opts.fadeInSpeed)
		},
		hide: function() {
			this.videoContainer.stop().fadeOut(this.opts.fadeOutSpeed)
		},
		play: function() {
			null !== this.videoObj && (this.show(), this.videoObj[0].play())
		},
		delayPlay: function() {
			var e = this;
			clearTimeout(this.playTimeout), this.playTimeout = setTimeout(function() {
				e.play()
			}, this.opts.interval)
		},
		destroy: function() {
			null !== this.videoObj && (this.videoObj.remove(), this.videoObj = null, this.videoContainer.remove(), this.videoContainer = null, clearTimeout(this.playTimeout), clearTimeout(this.hideTimeout))
		}
	}, r.fn.VideoThumb = function(e) {
		if (this.length) {
			var t = new n(this, e);
			return t.init(), r(this).data("video-thumb", t), t
		}
	}
}(jQuery);
var pigeon = function(e, t) {
		t.postMessage("rhm://" + JSON.stringify(e), "*")
	},
	gdpr = {
		targeting: null,
		tracking: null,
		thirdParty: null
	};
$(function() {
	var t, e = $("#ima-container").preAd({
		enabled: gameData.preAd
	});
	e.on("alert", function(e, t) {
		console.log(t.message)
	}), e.on("error", function(e, t) {
		var n = t.getError();
		console.error(n.getType(), n.getErrorCode(), n.getMessage())
	}), e.on("loaded", function() {
		i.hideLoading(), t = $(".game-item").VideoThumb({
			basePath: siteConfig.games.getUrl(),
			videoFiles: gameData.videoFile
		})
	}), e.on("complete", function() {
		console.log("Show the content 👾"), i.doEmbed()
	});
	var i = $("#game-container").GameEmbed({
		embedType: gameData.embedType,
		embedUrl: gameData.embed,
		embedIsExternal: gameData.isExternal,
		/* translateEmbedUrlCallback: function(e) {
			var t = new URL(e);
			return "html5.gamedistribution.com" === t.hostname ? (t.searchParams.append("gd_sdk_referrer_url", gameData.url), t.href) : e
			console.log("66666",hostname);
		} */
	});
	i.on("ready", function() {
		e.init()
	}), i.on("play-click", function() {
		e.playAds()
	}), i.on("complete", function() {
		t.destroy(), this.hidePlay(), gameData.isLoaded = !0;
		var e = {
			action: "gaPushEvent",
			data: {
				event: "gaTriggerEvent",
				gaEventCategory: "Games",
				gaEventAction: "Play",
				gaEventLabel: gameData.id + "||" + gameData.title
			}
		};
		pigeon(e, window.top), setInterval(function() {
			e.data.gaEventAction = "Play (5 Mins)", pigeon(e, window.top)
		}, 3e5), setTimeout(function() {
			console.log("Request for " + gameData.title + " to be added to the game play history."), pigeon({
				action: "gameHistoryPush",
				data: {
					id: gameData.id,
					title: gameData.title,
					url: gameData.url,
					imageFile: gameData.imageFile
				}
			}, window.top)
		}, 1e4)
	}), i.on("connection-error", function(e, t) {
		console.log("Server connection error"), console.log("URL: " + t.url), this.hideLoading(), this.trigger("ready"), pigeon({
			action: "gaPushEvent",
			data: {
				event: "gaTriggerEvent",
				gaEventCategory: "Error",
				gaEventAction: "Game-file connection error",
				gaEventLabel: JSON.stringify({
					href: document.location.href,
					referer: document.referrer,
					game: {
						id: gameData.id,
						title: gameData.title,
						url: gameData.url,
						embed: gameData.embed
					}
				})
			}
		}, window.top)
	}), i.on("load-error", function(e, t) {
		var n = t.requestEvent;
		console.error("Game file load error: " + n.status + " - " + n.statusText), console.error("File: " + n.responseURL), this.showError(n.status, n.statusText, "Error loading the game file.<br>Please try again later."), this.hideLoading(), pigeon({
			action: "gaPushEvent",
			data: {
				event: "gaTriggerEvent",
				gaEventCategory: "Error",
				gaEventAction: "Game-file load error",
				gaEventLabel: n.status + ": " + n.responseURL
			}
		}, window.top)
	}), i.on("error", function(e, t) {
		console.error(t.message)
	}), i.init(), __tcfapi("addEventListener", 2, function(e, t) {
		var n, r;
		t && "tcloaded" === e.eventStatus && (gdpr.targeting = e.purpose.consents[3] && e.purpose.consents[4] ? 1 : 0, gdpr.tracking = e.purpose.consents[7] && e.purpose.consents[8] ? 1 : 0, gdpr.thirdParty = e.purpose.consents[9] ? 1 : 0, "html5.gamedistribution.com" === (n = new URL(i.embedUrl)).hostname && ((r = n.searchParams).append("gdpr-targeting", gdpr.targeting), r.append("gdpr-tracking", gdpr.tracking), r.append("gdpr-third-party", gdpr.thirdParty), i.embedUrl = n.href))
	})
});