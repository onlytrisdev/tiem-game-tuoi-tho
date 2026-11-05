var YandexSdk = pc.createScript("yandexSdk");
YandexSdk.prototype.initialize = function() {
	console.info('111');
	/* YaGames.init().then((a => {
		this.app.ysdk = a, a.getFlags().then((a => {
			this.app.flags = a, this.app.fire("flagLoaded")
		})), this.app.canShowAd = !0, this.showFullScreen(), this.app.on("showFullscreen", this.showFullScreen, this), this.app.on("showRewarded", this.showRewarded, this), this.app.fire("ysdkLoaded", a)
	})) */
}, YandexSdk.prototype.showFullScreen = function() {
	console.info('444');
	this.app.ysdk && this.app.canShowAd && this.app.ysdk.adv.showFullscreenAdv({
		callbacks: {
			onClose: a => {
				a && (this.app.canShowAd = !1, setTimeout((() => {
					this.app.canShowAd = !0
				}), 12e4))
			}
		}
	})
}, YandexSdk.prototype.showRewarded = function() {
	console.info('333');
	this.app.ysdk && this.app.ysdk.adv.showRewardedVideo({
		callbacks: {
			onRewarded: () => {
				var a = this.app.root.findByName("CheckpointsPool").children;
				this.app.lastCheckpointID < a.length - 1 && (this.app.lastCheckpointID += 1), this.app.fire("respawn")
			}
		}
	})
	
	
};
! function(a) {
	var o, d, c, m, p, A, h, S, b, T, G, I, k = k || function(a) {
		function t() {}
		var o = {},
			d = o.lib = {},
			c = d.Base = {
				extend: function(a) {
					t.prototype = this;
					var o = new t;
					return a && o.mixIn(a), o.hasOwnProperty("init") || (o.init = function() {
						o.$super.init.apply(this, arguments)
					}), (o.init.prototype = o).$super = this, o
				},
				create: function() {
					var a = this.extend();
					return a.init.apply(a, arguments), a
				},
				init: function() {},
				mixIn: function(a) {
					for (var o in a) a.hasOwnProperty(o) && (this[o] = a[o]);
					a.hasOwnProperty("toString") && (this.toString = a.toString)
				},
				clone: function() {
					return this.init.prototype.extend(this)
				}
			},
			m = d.WordArray = c.extend({
				init: function(a, o) {
					a = this.words = a || [], this.sigBytes = null != o ? o : 4 * a.length
				},
				toString: function(a) {
					return (a || A).stringify(this)
				},
				concat: function(a) {
					var o = this.words,
						d = a.words,
						c = this.sigBytes;
					if (a = a.sigBytes, this.clamp(), c % 4)
						for (var m = 0; m < a; m++) o[c + m >>> 2] |= (d[m >>> 2] >>> 24 - m % 4 * 8 & 255) << 24 - (c + m) % 4 * 8;
					else if (65535 < d.length)
						for (m = 0; m < a; m += 4) o[c + m >>> 2] = d[m >>> 2];
					else o.push.apply(o, d);
					return this.sigBytes += a, this
				},
				clamp: function() {
					var o = this.words,
						d = this.sigBytes;
					o[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, o.length = a.ceil(d / 4)
				},
				clone: function() {
					var a = c.clone.call(this);
					return a.words = this.words.slice(0), a
				},
				random: function(o) {
					for (var d = [], c = 0; c < o; c += 4) d.push(4294967296 * a.random() | 0);
					return new m.init(d, o)
				}
			}),
			p = o.enc = {},
			A = p.Hex = {
				stringify: function(a) {
					var o = a.words;
					a = a.sigBytes;
					for (var d = [], c = 0; c < a; c++) {
						var m = o[c >>> 2] >>> 24 - c % 4 * 8 & 255;
						d.push((m >>> 4).toString(16)), d.push((15 & m).toString(16))
					}
					return d.join("")
				},
				parse: function(a) {
					for (var o = a.length, d = [], c = 0; c < o; c += 2) d[c >>> 3] |= parseInt(a.substr(c, 2), 16) << 24 - c % 8 * 4;
					return new m.init(d, o / 2)
				}
			},
			h = p.Latin1 = {
				stringify: function(a) {
					var o = a.words;
					a = a.sigBytes;
					for (var d = [], c = 0; c < a; c++) d.push(String.fromCharCode(o[c >>> 2] >>> 24 - c % 4 * 8 & 255));
					return d.join("")
				},
				parse: function(a) {
					for (var o = a.length, d = [], c = 0; c < o; c++) d[c >>> 2] |= (255 & a.charCodeAt(c)) << 24 - c % 4 * 8;
					return new m.init(d, o)
				}
			},
			S = p.Utf8 = {
				stringify: function(a) {
					try {
						return decodeURIComponent(escape(h.stringify(a)))
					} catch (a) {
						throw Error("Malformed UTF-8 data")
					}
				},
				parse: function(a) {
					return h.parse(unescape(encodeURIComponent(a)))
				}
			},
			b = d.BufferedBlockAlgorithm = c.extend({
				reset: function() {
					this._data = new m.init, this._nDataBytes = 0
				},
				_append: function(a) {
					"string" == typeof a && (a = S.parse(a)), this._data.concat(a), this._nDataBytes += a.sigBytes
				},
				_process: function(o) {
					var d = this._data,
						c = d.words,
						p = d.sigBytes,
						A = this.blockSize,
						h = p / (4 * A);
					if (o = (h = o ? a.ceil(h) : a.max((0 | h) - this._minBufferSize, 0)) * A, p = a.min(4 * o, p), o) {
						for (var S = 0; S < o; S += A) this._doProcessBlock(c, S);
						S = c.splice(0, o), d.sigBytes -= p
					}
					return new m.init(S, p)
				},
				clone: function() {
					var a = c.clone.call(this);
					return a._data = this._data.clone(), a
				},
				_minBufferSize: 0
			});
		d.Hasher = b.extend({
			cfg: c.extend(),
			init: function(a) {
				this.cfg = this.cfg.extend(a), this.reset()
			},
			reset: function() {
				b.reset.call(this), this._doReset()
			},
			update: function(a) {
				return this._append(a), this._process(), this
			},
			finalize: function(a) {
				return a && this._append(a), this._doFinalize()
			},
			blockSize: 16,
			_createHelper: function(a) {
				return function(o, d) {
					return new a.init(d).finalize(o)
				}
			},
			_createHmacHelper: function(a) {
				return function(o, d) {
					return new T.HMAC.init(a, d).finalize(o)
				}
			}
		});
		var T = o.algo = {};
		return o
	}(Math);
	! function(a) {
		function e(a) {
			return 4294967296 * (a - (0 | a)) | 0
		}
		for (var o = k, d = (m = o.lib).WordArray, c = m.Hasher, m = o.algo, p = [], A = [], h = 2, S = 0; S < 64;) {
			var b;
			e: {
				b = h;
				for (var T = a.sqrt(b), G = 2; G <= T; G++)
					if (!(b % G)) {
						b = !1;
						break e
					} b = !0
			}
			b && (S < 8 && (p[S] = e(a.pow(h, .5))), A[S] = e(a.pow(h, 1 / 3)), S++), h++
		}
		var I = [];
		m = m.SHA256 = c.extend({
			_doReset: function() {
				this._hash = new d.init(p.slice(0))
			},
			_doProcessBlock: function(a, o) {
				for (var d = this._hash.words, c = d[0], m = d[1], p = d[2], h = d[3], S = d[4], b = d[5], T = d[6], G = d[7], k = 0; k < 64; k++) {
					if (k < 16) I[k] = 0 | a[o + k];
					else {
						var _ = I[k - 15],
							w = I[k - 2];
						I[k] = ((_ << 25 | _ >>> 7) ^ (_ << 14 | _ >>> 18) ^ _ >>> 3) + I[k - 7] + ((w << 15 | w >>> 17) ^ (w << 13 | w >>> 19) ^ w >>> 10) + I[k - 16]
					}
					_ = G + ((S << 26 | S >>> 6) ^ (S << 21 | S >>> 11) ^ (S << 7 | S >>> 25)) + (S & b ^ ~S & T) + A[k] + I[k], w = ((c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22)) + (c & m ^ c & p ^ m & p), G = T, T = b, b = S, S = h + _ | 0, h = p, p = m, m = c, c = _ + w | 0
				}
				d[0] = d[0] + c | 0, d[1] = d[1] + m | 0, d[2] = d[2] + p | 0, d[3] = d[3] + h | 0, d[4] = d[4] + S | 0, d[5] = d[5] + b | 0, d[6] = d[6] + T | 0, d[7] = d[7] + G | 0
			},
			_doFinalize: function() {
				var o = this._data,
					d = o.words,
					c = 8 * this._nDataBytes,
					m = 8 * o.sigBytes;
				return d[m >>> 5] |= 128 << 24 - m % 32, d[14 + (64 + m >>> 9 << 4)] = a.floor(c / 4294967296), d[15 + (64 + m >>> 9 << 4)] = c, o.sigBytes = 4 * d.length, this._process(), this._hash
			},
			clone: function() {
				var a = c.clone.call(this);
				return a._hash = this._hash.clone(), a
			}
		}), o.SHA256 = c._createHelper(m), o.HmacSHA256 = c._createHmacHelper(m)
	}(Math), I = k.enc.Utf8, k.algo.HMAC = k.lib.Base.extend({
			init: function(a, o) {
				a = this._hasher = new a.init, "string" == typeof o && (o = I.parse(o));
				var d = a.blockSize,
					c = 4 * d;
				o.sigBytes > c && (o = a.finalize(o)), o.clamp();
				for (var m = this._oKey = o.clone(), p = this._iKey = o.clone(), A = m.words, h = p.words, S = 0; S < d; S++) A[S] ^= 1549556828, h[S] ^= 909522486;
				m.sigBytes = p.sigBytes = c, this.reset()
			},
			reset: function() {
				var a = this._hasher;
				a.reset(), a.update(this._iKey)
			},
			update: function(a) {
				return this._hasher.update(a), this
			},
			finalize: function(a) {
				var o = this._hasher;
				return a = o.finalize(a), o.reset(), o.finalize(this._oKey.clone().concat(a))
			}
		}), G = k.lib.WordArray, k.enc.Base64 = {
			stringify: function(a) {
				var o = a.words,
					d = a.sigBytes,
					c = this._map;
				a.clamp(), a = [];
				for (var m = 0; m < d; m += 3)
					for (var p = (o[m >>> 2] >>> 24 - m % 4 * 8 & 255) << 16 | (o[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255) << 8 | o[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, A = 0; A < 4 && m + .75 * A < d; A++) a.push(c.charAt(p >>> 6 * (3 - A) & 63));
				if (o = c.charAt(64))
					for (; a.length % 4;) a.push(o);
				return a.join("")
			},
			parse: function(a) {
				var o = a.length,
					d = this._map;
				!(c = d.charAt(64)) || -1 != (c = a.indexOf(c)) && (o = c);
				for (var c = [], m = 0, p = 0; p < o; p++)
					if (p % 4) {
						var A = d.indexOf(a.charAt(p - 1)) << p % 4 * 2,
							h = d.indexOf(a.charAt(p)) >>> 6 - p % 4 * 2;
						c[m >>> 2] |= (A | h) << 24 - m % 4 * 8, m++
					} return G.create(c, m)
			},
			_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
		},
		function(a) {
			var o, d, c, m, p, A, h, S, b, T, G, I, k;
			(o = a.EGAErrorSeverity || (a.EGAErrorSeverity = {}))[o.Undefined = 0] = "Undefined", o[o.Debug = 1] = "Debug", o[o.Info = 2] = "Info", o[o.Warning = 3] = "Warning", o[o.Error = 4] = "Error", o[o.Critical = 5] = "Critical", (d = a.EGAProgressionStatus || (a.EGAProgressionStatus = {}))[d.Undefined = 0] = "Undefined", d[d.Start = 1] = "Start", d[d.Complete = 2] = "Complete", d[d.Fail = 3] = "Fail", (c = a.EGAResourceFlowType || (a.EGAResourceFlowType = {}))[c.Undefined = 0] = "Undefined", c[c.Source = 1] = "Source", c[c.Sink = 2] = "Sink", (m = a.EGAAdAction || (a.EGAAdAction = {}))[m.Undefined = 0] = "Undefined", m[m.Clicked = 1] = "Clicked", m[m.Show = 2] = "Show", m[m.FailedShow = 3] = "FailedShow", m[m.RewardReceived = 4] = "RewardReceived", (p = a.EGAAdError || (a.EGAAdError = {}))[p.Undefined = 0] = "Undefined", p[p.Unknown = 1] = "Unknown", p[p.Offline = 2] = "Offline", p[p.NoFill = 3] = "NoFill", p[p.InternalError = 4] = "InternalError", p[p.InvalidRequest = 5] = "InvalidRequest", p[p.UnableToPrecache = 6] = "UnableToPrecache", (A = a.EGAAdType || (a.EGAAdType = {}))[A.Undefined = 0] = "Undefined", A[A.Video = 1] = "Video", A[A.RewardedVideo = 2] = "RewardedVideo", A[A.Playable = 3] = "Playable", A[A.Interstitial = 4] = "Interstitial", A[A.OfferWall = 5] = "OfferWall", A[A.Banner = 6] = "Banner", (S = (h = a.http || (a.http = {})).EGAHTTPApiResponse || (h.EGAHTTPApiResponse = {}))[S.NoResponse = 0] = "NoResponse", S[S.BadResponse = 1] = "BadResponse", S[S.RequestTimeout = 2] = "RequestTimeout", S[S.JsonEncodeFailed = 3] = "JsonEncodeFailed", S[S.JsonDecodeFailed = 4] = "JsonDecodeFailed", S[S.InternalServerError = 5] = "InternalServerError", S[S.BadRequest = 6] = "BadRequest", S[S.Unauthorized = 7] = "Unauthorized", S[S.UnknownResponseCode = 8] = "UnknownResponseCode", S[S.Ok = 9] = "Ok", S[S.Created = 10] = "Created", (T = (b = a.events || (a.events = {})).EGASdkErrorCategory || (b.EGASdkErrorCategory = {}))[T.Undefined = 0] = "Undefined", T[T.EventValidation = 1] = "EventValidation", T[T.Database = 2] = "Database", T[T.Init = 3] = "Init", T[T.Http = 4] = "Http", T[T.Json = 5] = "Json", (G = b.EGASdkErrorArea || (b.EGASdkErrorArea = {}))[G.Undefined = 0] = "Undefined", G[G.BusinessEvent = 1] = "BusinessEvent", G[G.ResourceEvent = 2] = "ResourceEvent", G[G.ProgressionEvent = 3] = "ProgressionEvent", G[G.DesignEvent = 4] = "DesignEvent", G[G.ErrorEvent = 5] = "ErrorEvent", G[G.InitHttp = 9] = "InitHttp", G[G.EventsHttp = 10] = "EventsHttp", G[G.ProcessEvents = 11] = "ProcessEvents", G[G.AddEventsToStore = 12] = "AddEventsToStore", G[G.AdEvent = 20] = "AdEvent", (I = b.EGASdkErrorAction || (b.EGASdkErrorAction = {}))[I.Undefined = 0] = "Undefined", I[I.InvalidCurrency = 1] = "InvalidCurrency", I[I.InvalidShortString = 2] = "InvalidShortString", I[I.InvalidEventPartLength = 3] = "InvalidEventPartLength", I[I.InvalidEventPartCharacters = 4] = "InvalidEventPartCharacters", I[I.InvalidStore = 5] = "InvalidStore", I[I.InvalidFlowType = 6] = "InvalidFlowType", I[I.StringEmptyOrNull = 7] = "StringEmptyOrNull", I[I.NotFoundInAvailableCurrencies = 8] = "NotFoundInAvailableCurrencies", I[I.InvalidAmount = 9] = "InvalidAmount", I[I.NotFoundInAvailableItemTypes = 10] = "NotFoundInAvailableItemTypes", I[I.WrongProgressionOrder = 11] = "WrongProgressionOrder", I[I.InvalidEventIdLength = 12] = "InvalidEventIdLength", I[I.InvalidEventIdCharacters = 13] = "InvalidEventIdCharacters", I[I.InvalidProgressionStatus = 15] = "InvalidProgressionStatus", I[I.InvalidSeverity = 16] = "InvalidSeverity", I[I.InvalidLongString = 17] = "InvalidLongString", I[I.DatabaseTooLarge = 18] = "DatabaseTooLarge", I[I.DatabaseOpenOrCreate = 19] = "DatabaseOpenOrCreate", I[I.JsonError = 25] = "JsonError", I[I.FailHttpJsonDecode = 29] = "FailHttpJsonDecode", I[I.FailHttpJsonEncode = 30] = "FailHttpJsonEncode", I[I.InvalidAdAction = 31] = "InvalidAdAction", I[I.InvalidAdType = 32] = "InvalidAdType", I[I.InvalidString = 33] = "InvalidString", (k = b.EGASdkErrorParameter || (b.EGASdkErrorParameter = {}))[k.Undefined = 0] = "Undefined", k[k.Currency = 1] = "Currency", k[k.CartType = 2] = "CartType", k[k.ItemType = 3] = "ItemType", k[k.ItemId = 4] = "ItemId", k[k.Store = 5] = "Store", k[k.FlowType = 6] = "FlowType", k[k.Amount = 7] = "Amount", k[k.Progression01 = 8] = "Progression01", k[k.Progression02 = 9] = "Progression02", k[k.Progression03 = 10] = "Progression03", k[k.EventId = 11] = "EventId", k[k.ProgressionStatus = 12] = "ProgressionStatus", k[k.Severity = 13] = "Severity", k[k.Message = 14] = "Message", k[k.AdAction = 15] = "AdAction", k[k.AdType = 16] = "AdType", k[k.AdSdkName = 17] = "AdSdkName", k[k.AdPlacement = 18] = "AdPlacement"
		}(d = d || {}), m = o = o || {}, (p = m.EGAErrorSeverity || (m.EGAErrorSeverity = {}))[p.Undefined = 0] = "Undefined", p[p.Debug = 1] = "Debug", p[p.Info = 2] = "Info", p[p.Warning = 3] = "Warning", p[p.Error = 4] = "Error", p[p.Critical = 5] = "Critical", (A = m.EGAProgressionStatus || (m.EGAProgressionStatus = {}))[A.Undefined = 0] = "Undefined", A[A.Start = 1] = "Start", A[A.Complete = 2] = "Complete", A[A.Fail = 3] = "Fail", (h = m.EGAResourceFlowType || (m.EGAResourceFlowType = {}))[h.Undefined = 0] = "Undefined", h[h.Source = 1] = "Source", h[h.Sink = 2] = "Sink", (S = m.EGAAdAction || (m.EGAAdAction = {}))[S.Undefined = 0] = "Undefined", S[S.Clicked = 1] = "Clicked", S[S.Show = 2] = "Show", S[S.FailedShow = 3] = "FailedShow", S[S.RewardReceived = 4] = "RewardReceived", (b = m.EGAAdError || (m.EGAAdError = {}))[b.Undefined = 0] = "Undefined", b[b.Unknown = 1] = "Unknown", b[b.Offline = 2] = "Offline", b[b.NoFill = 3] = "NoFill", b[b.InternalError = 4] = "InternalError", b[b.InvalidRequest = 5] = "InvalidRequest", b[b.UnableToPrecache = 6] = "UnableToPrecache", (T = m.EGAAdType || (m.EGAAdType = {}))[T.Undefined = 0] = "Undefined", T[T.Video = 1] = "Video", T[T.RewardedVideo = 2] = "RewardedVideo", T[T.Playable = 3] = "Playable", T[T.Interstitial = 4] = "Interstitial", T[T.OfferWall = 5] = "OfferWall", T[T.Banner = 6] = "Banner",
		function(a) {
			! function(a) {
				var o, d;
				(d = o = o || {})[d.Error = 0] = "Error", d[d.Warning = 1] = "Warning", d[d.Info = 2] = "Info", d[d.Debug = 3] = "Debug";
				var c = (r.setInfoLog = function(a) {
					r.instance.infoLogEnabled = a
				}, r.setVerboseLog = function(a) {
					r.instance.infoLogVerboseEnabled = a
				}, r.i = function(a) {
					if (r.instance.infoLogEnabled) {
						var d = "Info/" + r.Tag + ": " + a;
						r.instance.sendNotificationMessage(d, o.Info)
					}
				}, r.w = function(a) {
					var d = "Warning/" + r.Tag + ": " + a;
					r.instance.sendNotificationMessage(d, o.Warning)
				}, r.e = function(a) {
					var d = "Error/" + r.Tag + ": " + a;
					r.instance.sendNotificationMessage(d, o.Error)
				}, r.ii = function(a) {
					if (r.instance.infoLogVerboseEnabled) {
						var d = "Verbose/" + r.Tag + ": " + a;
						r.instance.sendNotificationMessage(d, o.Info)
					}
				}, r.d = function(a) {
					if (r.debugEnabled) {
						var d = "Debug/" + r.Tag + ": " + a;
						r.instance.sendNotificationMessage(d, o.Debug)
					}
				}, r.prototype.sendNotificationMessage = function(a, d) {
					switch (d) {
						case o.Error:
							console.error(a);
							break;
						case o.Warning:
							console.warn(a);
							break;
						case o.Debug:
							"function" == typeof console.debug ? console.debug(a) : console.log(a);
							break;
						case o.Info:
							console.log(a)
					}
				}, r.instance = new r, r.Tag = "GameAnalytics", r);

				function r() {
					r.debugEnabled = !1
				}
				a.GALogger = c
			}(a.logging || (a.logging = {}))
		}(d = d || {}),
		function(a) {
			var o, d, c;

			function u() {}
			o = a.utilities || (a.utilities = {}), d = a.logging.GALogger, u.getHmac = function(a, o) {
				var d = k.HmacSHA256(o, a);
				return k.enc.Base64.stringify(d)
			}, u.stringMatch = function(a, o) {
				return !(!a || !o) && o.test(a)
			}, u.joinStringArray = function(a, o) {
				for (var d = "", c = 0, m = a.length; c < m; c++) 0 < c && (d += o), d += a[c];
				return d
			}, u.stringArrayContainsString = function(a, o) {
				if (0 === a.length) return !1;
				for (var d in a)
					if (a[d] === o) return !0;
				return !1
			}, u.encode64 = function(a) {
				a = encodeURI(a);
				for (var o, d, c, m, p, A = "", h = 0, S = 0, b = 0; c = (o = a.charCodeAt(b++)) >> 2, m = (3 & o) << 4 | (d = a.charCodeAt(b++)) >> 4, p = (15 & d) << 2 | (h = a.charCodeAt(b++)) >> 6, S = 63 & h, isNaN(d) ? p = S = 64 : isNaN(h) && (S = 64), A = A + u.keyStr.charAt(c) + u.keyStr.charAt(m) + u.keyStr.charAt(p) + u.keyStr.charAt(S), o = d = h = 0, c = m = p = S = 0, b < a.length;);
				return A
			}, u.decode64 = function(a) {
				var o, c, m, p, A = "",
					h = 0,
					S = 0,
					b = 0;
				for (/[^A-Za-z0-9\+\/\=]/g.exec(a) && d.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding."), a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); o = u.keyStr.indexOf(a.charAt(b++)) << 2 | (m = u.keyStr.indexOf(a.charAt(b++))) >> 4, c = (15 & m) << 4 | (p = u.keyStr.indexOf(a.charAt(b++))) >> 2, h = (3 & p) << 6 | (S = u.keyStr.indexOf(a.charAt(b++))), A += String.fromCharCode(o), 64 != p && (A += String.fromCharCode(c)), 64 != S && (A += String.fromCharCode(h)), o = c = h = 0, m = p = S = 0, b < a.length;);
				return decodeURI(A)
			}, u.timeIntervalSince1970 = function() {
				var a = new Date;
				return Math.round(a.getTime() / 1e3)
			}, u.createGuid = function() {
				return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (function(a) {
					return (+a ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> a / 4).toString(16)
				}))
			}, u.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = u, o.GAUtilities = c
		}(d = d || {}),
		function(a) {
			var o = c.logging.GALogger,
				d = c.utilities.GAUtilities,
				m = c.events.EGASdkErrorCategory,
				p = c.events.EGASdkErrorArea,
				A = c.events.EGASdkErrorAction,
				h = c.events.EGASdkErrorParameter,
				g = function(a, o, d, c, m) {
					this.category = a, this.area = o, this.action = d, this.parameter = c, this.reason = m
				};
			a.ValidationResult = g;
			var S = (f.validateBusinessEvent = function(a, d, c, S, b) {
				return f.validateCurrency(a) ? d < 0 ? (o.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + d), new g(m.EventValidation, p.BusinessEvent, A.InvalidAmount, h.Amount, d + "")) : f.validateShortString(c, !0) ? f.validateEventPartLength(S, !1) ? f.validateEventPartCharacters(S) ? f.validateEventPartLength(b, !1) ? f.validateEventPartCharacters(b) ? null : (o.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + b), new g(m.EventValidation, p.BusinessEvent, A.InvalidEventPartCharacters, h.ItemId, b)) : (o.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + b), new g(m.EventValidation, p.BusinessEvent, A.InvalidEventPartLength, h.ItemId, b)) : (o.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + S), new g(m.EventValidation, p.BusinessEvent, A.InvalidEventPartCharacters, h.ItemType, S)) : (o.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + S), new g(m.EventValidation, p.BusinessEvent, A.InvalidEventPartLength, h.ItemType, S)) : (o.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + c), new g(m.EventValidation, p.BusinessEvent, A.InvalidShortString, h.CartType, c)) : (o.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + a), new g(m.EventValidation, p.BusinessEvent, A.InvalidCurrency, h.Currency, a))
			}, f.validateResourceEvent = function(a, S, b, T, G, I, k) {
				return a == c.EGAResourceFlowType.Undefined ? (o.w("Validation fail - resource event - flowType: Invalid flow type."), new g(m.EventValidation, p.ResourceEvent, A.InvalidFlowType, h.FlowType, "")) : S ? d.stringArrayContainsString(I, S) ? 0 < b ? T ? f.validateEventPartLength(T, !1) ? f.validateEventPartCharacters(T) ? d.stringArrayContainsString(k, T) ? f.validateEventPartLength(G, !1) ? f.validateEventPartCharacters(G) ? null : (o.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + G), new g(m.EventValidation, p.ResourceEvent, A.InvalidEventPartCharacters, h.ItemId, G)) : (o.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + G), new g(m.EventValidation, p.ResourceEvent, A.InvalidEventPartLength, h.ItemId, G)) : (o.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + T), new g(m.EventValidation, p.ResourceEvent, A.NotFoundInAvailableItemTypes, h.ItemType, T)) : (o.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + T), new g(m.EventValidation, p.ResourceEvent, A.InvalidEventPartCharacters, h.ItemType, T)) : (o.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + T), new g(m.EventValidation, p.ResourceEvent, A.InvalidEventPartLength, h.ItemType, T)) : (o.w("Validation fail - resource event - itemType: Cannot be (null)"), new g(m.EventValidation, p.ResourceEvent, A.StringEmptyOrNull, h.ItemType, "")) : (o.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + b), new g(m.EventValidation, p.ResourceEvent, A.InvalidAmount, h.Amount, b + "")) : (o.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + S), new g(m.EventValidation, p.ResourceEvent, A.NotFoundInAvailableCurrencies, h.Currency, S)) : (o.w("Validation fail - resource event - currency: Cannot be (null)"), new g(m.EventValidation, p.ResourceEvent, A.StringEmptyOrNull, h.Currency, ""))
			}, f.validateProgressionEvent = function(a, d, S, b) {
				if (a == c.EGAProgressionStatus.Undefined) return o.w("Validation fail - progression event: Invalid progression status."), new g(m.EventValidation, p.ProgressionEvent, A.InvalidProgressionStatus, h.ProgressionStatus, "");
				if (b && !S && d) return o.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03."), new g(m.EventValidation, p.ProgressionEvent, A.WrongProgressionOrder, h.Undefined, d + ":" + S + ":" + b);
				if (S && !d) return o.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03"), new g(m.EventValidation, p.ProgressionEvent, A.WrongProgressionOrder, h.Undefined, d + ":" + S + ":" + b);
				if (!d) return o.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03"), new g(m.EventValidation, p.ProgressionEvent, A.WrongProgressionOrder, h.Undefined, (d || "") + ":" + (S || "") + ":" + (b || ""));
				if (!f.validateEventPartLength(d, !1)) return o.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + d), new g(m.EventValidation, p.ProgressionEvent, A.InvalidEventPartLength, h.Progression01, d);
				if (!f.validateEventPartCharacters(d)) return o.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + d), new g(m.EventValidation, p.ProgressionEvent, A.InvalidEventPartCharacters, h.Progression01, d);
				if (S) {
					if (!f.validateEventPartLength(S, !0)) return o.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + S), new g(m.EventValidation, p.ProgressionEvent, A.InvalidEventPartLength, h.Progression02, S);
					if (!f.validateEventPartCharacters(S)) return o.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + S), new g(m.EventValidation, p.ProgressionEvent, A.InvalidEventPartCharacters, h.Progression02, S)
				}
				if (b) {
					if (!f.validateEventPartLength(b, !0)) return o.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + b), new g(m.EventValidation, p.ProgressionEvent, A.InvalidEventPartLength, h.Progression03, b);
					if (!f.validateEventPartCharacters(b)) return o.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + b), new g(m.EventValidation, p.ProgressionEvent, A.InvalidEventPartCharacters, h.Progression03, b)
				}
				return null
			}, f.validateDesignEvent = function(a) {
				return f.validateEventIdLength(a) ? f.validateEventIdCharacters(a) ? null : (o.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + a), new g(m.EventValidation, p.DesignEvent, A.InvalidEventIdCharacters, h.EventId, a)) : (o.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 64 characters or less. String: " + a), new g(m.EventValidation, p.DesignEvent, A.InvalidEventIdLength, h.EventId, a))
			}, f.validateErrorEvent = function(a, d) {
				return a == c.EGAErrorSeverity.Undefined ? (o.w("Validation fail - error event - severity: Severity was unsupported value."), new g(m.EventValidation, p.ErrorEvent, A.InvalidSeverity, h.Severity, "")) : f.validateLongString(d, !0) ? null : (o.w("Validation fail - error event - message: Message cannot be above 8192 characters."), new g(m.EventValidation, p.ErrorEvent, A.InvalidLongString, h.Message, d))
			}, f.validateAdEvent = function(a, d, S, b) {
				return a == c.EGAAdAction.Undefined ? (o.w("Validation fail - error event - severity: Severity was unsupported value."), new g(m.EventValidation, p.AdEvent, A.InvalidAdAction, h.AdAction, "")) : d == c.EGAAdType.Undefined ? (o.w("Validation fail - ad event - adType: Ad type was unsupported value."), new g(m.EventValidation, p.AdEvent, A.InvalidAdType, h.AdType, "")) : f.validateShortString(S, !1) ? f.validateString(b, !1) ? null : (o.w("Validation fail - ad event - message: Ad placement cannot be above 64 characters."), new g(m.EventValidation, p.AdEvent, A.InvalidString, h.AdPlacement, b)) : (o.w("Validation fail - ad event - message: Ad SDK name cannot be above 32 characters."), new g(m.EventValidation, p.AdEvent, A.InvalidShortString, h.AdSdkName, S))
			}, f.validateSdkErrorEvent = function(a, d, c, h, S) {
				return !(!f.validateKeys(a, d) || (c === m.Undefined ? (o.w("Validation fail - sdk error event - type: Category was unsupported value."), 1) : h === p.Undefined ? (o.w("Validation fail - sdk error event - type: Area was unsupported value."), 1) : S === A.Undefined && (o.w("Validation fail - sdk error event - type: Action was unsupported value."), 1)))
			}, f.validateKeys = function(a, o) {
				return !(!d.stringMatch(a, /^[A-z0-9]{32}$/) || !d.stringMatch(o, /^[A-z0-9]{40}$/))
			}, f.validateCurrency = function(a) {
				return !!a && !!d.stringMatch(a, /^[A-Z]{3}$/)
			}, f.validateEventPartLength = function(a, o) {
				return !(!o || a) || !!a && !(64 < a.length)
			}, f.validateEventPartCharacters = function(a) {
				return !!d.stringMatch(a, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)
			}, f.validateEventIdLength = function(a) {
				return !!a && !!d.stringMatch(a, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)
			}, f.validateEventIdCharacters = function(a) {
				return !!a && !!d.stringMatch(a, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)
			}, f.validateAndCleanInitRequestResponse = function(a, d) {
				if (null == a) return o.w("validateInitRequestResponse failed - no response dictionary."), null;
				var c = {};
				try {
					var m = a.server_ts;
					if (!(0 < m)) return o.w("validateInitRequestResponse failed - invalid value in 'server_ts' field."), null;
					c.server_ts = m
				} catch (d) {
					return o.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof a.server_ts + ", value=" + a.server_ts + ", " + d), null
				}
				if (d) {
					try {
						var p = a.configs;
						c.configs = p
					} catch (d) {
						return o.w("validateInitRequestResponse failed - invalid type in 'configs' field. type=" + typeof a.configs + ", value=" + a.configs + ", " + d), null
					}
					try {
						var A = a.configs_hash;
						c.configs_hash = A
					} catch (d) {
						return o.w("validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" + typeof a.configs_hash + ", value=" + a.configs_hash + ", " + d), null
					}
					try {
						var h = a.ab_id;
						c.ab_id = h
					} catch (d) {
						return o.w("validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" + typeof a.ab_id + ", value=" + a.ab_id + ", " + d), null
					}
					try {
						var S = a.ab_variant_id;
						c.ab_variant_id = S
					} catch (d) {
						return o.w("validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" + typeof a.ab_variant_id + ", value=" + a.ab_variant_id + ", " + d), null
					}
				}
				return c
			}, f.validateBuild = function(a) {
				return !!f.validateShortString(a, !1)
			}, f.validateSdkWrapperVersion = function(a) {
				return !!d.stringMatch(a, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot|flutter) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)
			}, f.validateEngineVersion = function(a) {
				return !(!a || !d.stringMatch(a, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/))
			}, f.validateUserId = function(a) {
				return !!f.validateString(a, !1) || (o.w("Validation fail - user id: id cannot be (null), empty or above 64 characters."), !1)
			}, f.validateShortString = function(a, o) {
				return !(!o || a) || !(!a || 32 < a.length)
			}, f.validateString = function(a, o) {
				return !(!o || a) || !(!a || 64 < a.length)
			}, f.validateLongString = function(a, o) {
				return !(!o || a) || !(!a || 8192 < a.length)
			}, f.validateConnectionType = function(a) {
				return d.stringMatch(a, /^(wwan|wifi|lan|offline)$/)
			}, f.validateCustomDimensions = function(a) {
				return f.validateArrayOfStrings(20, 32, !1, "custom dimensions", a)
			}, f.validateResourceCurrencies = function(a) {
				if (!f.validateArrayOfStrings(20, 64, !1, "resource currencies", a)) return !1;
				for (var c = 0; c < a.length; ++c)
					if (!d.stringMatch(a[c], /^[A-Za-z]+$/)) return o.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + a[c]), !1;
				return !0
			}, f.validateResourceItemTypes = function(a) {
				if (!f.validateArrayOfStrings(20, 32, !1, "resource item types", a)) return !1;
				for (var d = 0; d < a.length; ++d)
					if (!f.validateEventPartCharacters(a[d])) return o.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + a[d]), !1;
				return !0
			}, f.validateDimension01 = function(a, o) {
				return !a || !!d.stringArrayContainsString(o, a)
			}, f.validateDimension02 = function(a, o) {
				return !a || !!d.stringArrayContainsString(o, a)
			}, f.validateDimension03 = function(a, o) {
				return !a || !!d.stringArrayContainsString(o, a)
			}, f.validateArrayOfStrings = function(a, d, c, m, p) {
				var A = m;
				if (A = A || "Array", !p) return o.w(A + " validation failed: array cannot be null. "), !1;
				if (0 == c && 0 == p.length) return o.w(A + " validation failed: array cannot be empty. "), !1;
				if (0 < a && p.length > a) return o.w(A + " validation failed: array cannot exceed " + a + " values. It has " + p.length + " values."), !1;
				for (var h = 0; h < p.length; ++h) {
					var S = p[h] ? p[h].length : 0;
					if (0 === S) return o.w(A + " validation failed: contained an empty string. Array=" + JSON.stringify(p)), !1;
					if (0 < d && d < S) return o.w(A + " validation failed: a string exceeded max allowed length (which is: " + d + "). String was: " + p[h]), !1
				}
				return !0
			}, f.validateClientTs = function(a) {
				return !(a < 0 || 99999999999 < a)
			}, f);

			function f() {}
			a.GAValidator = S
		}((c = d = d || {}).validators || (c.validators = {})),
		function(a) {
			! function(a) {
				var n = function(a, o, d) {
					this.name = a, this.value = o, this.version = d
				};
				a.NameValueVersion = n;
				var u = function(a, o) {
					this.name = a, this.version = o
				};
				a.NameVersion = u;
				var o = (r.touch = function() {}, r.getRelevantSdkVersion = function() {
					return r.sdkGameEngineVersion ? r.sdkGameEngineVersion : r.sdkWrapperVersion
				}, r.getConnectionType = function() {
					return r.connectionType
				}, r.updateConnectionType = function() {
					navigator.onLine ? r.connectionType = "ios" === r.buildPlatform || "android" === r.buildPlatform ? "wwan" : "lan" : r.connectionType = "offline"
				}, r.getOSVersionString = function() {
					return r.buildPlatform + " " + r.osVersionPair.version
				}, r.runtimePlatformToString = function() {
					return r.osVersionPair.name
				}, r.getBrowserVersionString = function() {
					var a, o = navigator.userAgent,
						d = o.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
					if (0 == d.length && "ios" === r.buildPlatform) return "webkit_" + r.osVersion;
					if (/trident/i.test(d[1])) return "IE " + ((a = /\brv[ :]+(\d+)/g.exec(o) || [])[1] || "");
					if ("Chrome" === d[1] && null != (a = o.match(/\b(OPR|Edge|UBrowser)\/(\d+)/))) return a.slice(1).join(" ").replace("OPR", "Opera").replace("UBrowser", "UC").toLowerCase();
					if (d[1] && "fbav" === d[1].toLowerCase() && (d[1] = "facebook", d[2])) return "facebook " + d[2];
					var c = d[2] ? [d[1], d[2]] : [navigator.appName, navigator.appVersion, "-?"];
					return null != (a = o.match(/version\/(\d+)/i)) && c.splice(1, 1, a[1]), c.join(" ").toLowerCase()
				}, r.getDeviceModel = function() {
					return "unknown"
				}, r.getDeviceManufacturer = function() {
					return "unknown"
				}, r.matchItem = function(a, o) {
					var d, c, m, p, A = new u("unknown", "0.0.0"),
						h = 0,
						S = 0;
					for (h = 0; h < o.length; h += 1)
						if (new RegExp(o[h].value, "i").test(a)) {
							if (d = new RegExp(o[h].version + "[- /:;]([\\d._]+)", "i"), p = "", (c = a.match(d)) && c[1] && (m = c[1]), m) {
								var b = m.split(/[._]+/);
								for (S = 0; S < Math.min(b.length, 3); S += 1) p += b[S] + (S < Math.min(b.length, 3) - 1 ? "." : "")
							} else p = "0.0.0";
							return A.name = o[h].name, A.version = p, A
						} return A
				}, r.sdkWrapperVersion = "javascript 4.4.6", r.osVersionPair = r.matchItem([navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor].join(" "), [new n("windows_phone", "Windows Phone", "OS"), new n("windows", "Win", "NT"), new n("ios", "iPhone", "OS"), new n("ios", "iPad", "OS"), new n("ios", "iPod", "OS"), new n("android", "Android", "Android"), new n("blackBerry", "BlackBerry", "/"), new n("mac_osx", "Mac", "OS X"), new n("tizen", "Tizen", "Tizen"), new n("linux", "Linux", "rv"), new n("kai_os", "KAIOS", "KAIOS")]), r.buildPlatform = r.runtimePlatformToString(), r.deviceModel = r.getDeviceModel(), r.deviceManufacturer = r.getDeviceManufacturer(), r.osVersion = r.getOSVersionString(), r.browserVersion = r.getBrowserVersionString(), r);

				function r() {}
				a.GADevice = o
			}(a.device || (a.device = {}))
		}(d = d || {}),
		function(a) {
			var o, d;

			function i(a) {
				this.deadline = a, this.ignore = !1, this.async = !1, this.running = !1, this.id = ++i.idCounter
			}
			o = a.threading || (a.threading = {}), i.idCounter = 0, d = i, o.TimedBlock = d
		}(d = d || {}),
		function(a) {
			var o, d;

			function i(a) {
				this.comparer = a, this._subQueues = {}, this._sortedKeys = []
			}
			o = a.threading || (a.threading = {}), i.prototype.enqueue = function(a, o) {
				-1 === this._sortedKeys.indexOf(a) && this.addQueueOfPriority(a), this._subQueues[a].push(o)
			}, i.prototype.addQueueOfPriority = function(a) {
				var o = this;
				this._sortedKeys.push(a), this._sortedKeys.sort((function(a, d) {
					return o.comparer.compare(a, d)
				})), this._subQueues[a] = []
			}, i.prototype.peek = function() {
				if (this.hasItems()) return this._subQueues[this._sortedKeys[0]][0];
				throw new Error("The queue is empty")
			}, i.prototype.hasItems = function() {
				return 0 < this._sortedKeys.length
			}, i.prototype.dequeue = function() {
				if (this.hasItems()) return this.dequeueFromHighPriorityQueue();
				throw new Error("The queue is empty")
			}, i.prototype.dequeueFromHighPriorityQueue = function() {
				var a = this._sortedKeys[0],
					o = this._subQueues[a].shift();
				return 0 === this._subQueues[a].length && (this._sortedKeys.shift(), delete this._subQueues[a]), o
			}, d = i, o.PriorityQueue = d
		}(d = d || {}),
		function(a) {
			! function(o) {
				var d, c, m, p, A = a.logging.GALogger;
				(c = d = o.EGAStoreArgsOperator || (o.EGAStoreArgsOperator = {}))[c.Equal = 0] = "Equal", c[c.LessOrEqual = 1] = "LessOrEqual", c[c.NotEqual = 2] = "NotEqual", (p = m = o.EGAStore || (o.EGAStore = {}))[p.Events = 0] = "Events", p[p.Sessions = 1] = "Sessions", p[p.Progression = 2] = "Progression";
				var h = (v.isStorageAvailable = function() {
					return v.storageAvailable
				}, v.isStoreTooLargeForEvents = function() {
					return v.instance.eventsStore.length + v.instance.sessionsStore.length > v.MaxNumberOfEntries
				}, v.select = function(a, o, c, m) {
					void 0 === o && (o = []), void 0 === c && (c = !1), void 0 === m && (m = 0);
					var p = v.getStore(a);
					if (!p) return null;
					for (var A = [], h = 0; h < p.length; ++h) {
						for (var S = p[h], b = !0, T = 0; T < o.length; ++T) {
							var G = o[T];
							if (S[G[0]]) switch (G[1]) {
								case d.Equal:
									b = S[G[0]] == G[2];
									break;
								case d.LessOrEqual:
									b = S[G[0]] <= G[2];
									break;
								case d.NotEqual:
									b = S[G[0]] != G[2];
									break;
								default:
									b = !1
							} else b = !1;
							if (!b) break
						}
						b && A.push(S)
					}
					return c && A.sort((function(a, o) {
						return a.client_ts - o.client_ts
					})), 0 < m && A.length > m && (A = A.slice(0, m + 1)), A
				}, v.update = function(a, o, c) {
					void 0 === c && (c = []);
					var m = v.getStore(a);
					if (!m) return !1;
					for (var p = 0; p < m.length; ++p) {
						for (var A = m[p], h = !0, S = 0; S < c.length; ++S) {
							var b = c[S];
							if (A[b[0]]) switch (b[1]) {
								case d.Equal:
									h = A[b[0]] == b[2];
									break;
								case d.LessOrEqual:
									h = A[b[0]] <= b[2];
									break;
								case d.NotEqual:
									h = A[b[0]] != b[2];
									break;
								default:
									h = !1
							} else h = !1;
							if (!h) break
						}
						if (h)
							for (S = 0; S < o.length; ++S) {
								var T = o[S];
								A[T[0]] = T[1]
							}
					}
					return !0
				}, v.delete = function(a, o) {
					var c = v.getStore(a);
					if (c)
						for (var m = 0; m < c.length; ++m) {
							for (var p = c[m], A = !0, h = 0; h < o.length; ++h) {
								var S = o[h];
								if (p[S[0]]) switch (S[1]) {
									case d.Equal:
										A = p[S[0]] == S[2];
										break;
									case d.LessOrEqual:
										A = p[S[0]] <= S[2];
										break;
									case d.NotEqual:
										A = p[S[0]] != S[2];
										break;
									default:
										A = !1
								} else A = !1;
								if (!A) break
							}
							A && (c.splice(m, 1), --m)
						}
				}, v.insert = function(a, o, d, c) {
					void 0 === d && (d = !1), void 0 === c && (c = null);
					var m = v.getStore(a);
					if (m)
						if (d) {
							if (!c) return;
							for (var p = !1, A = 0; A < m.length; ++A) {
								var h = m[A];
								if (h[c] == o[c]) {
									for (var S in o) h[S] = o[S];
									p = !0;
									break
								}
							}
							p || m.push(o)
						} else m.push(o)
				}, v.save = function(a) {
					v.isStorageAvailable() ? (localStorage.setItem(v.StringFormat(v.KeyFormat, a, v.EventsStoreKey), JSON.stringify(v.instance.eventsStore)), localStorage.setItem(v.StringFormat(v.KeyFormat, a, v.SessionsStoreKey), JSON.stringify(v.instance.sessionsStore)), localStorage.setItem(v.StringFormat(v.KeyFormat, a, v.ProgressionStoreKey), JSON.stringify(v.instance.progressionStore)), localStorage.setItem(v.StringFormat(v.KeyFormat, a, v.ItemsStoreKey), JSON.stringify(v.instance.storeItems))) : A.w("Storage is not available, cannot save.")
				}, v.load = function(a) {
					if (v.isStorageAvailable()) {
						try {
							v.instance.eventsStore = JSON.parse(localStorage.getItem(v.StringFormat(v.KeyFormat, a, v.EventsStoreKey))), v.instance.eventsStore || (v.instance.eventsStore = [])
						} catch (a) {
							A.w("Load failed for 'events' store. Using empty store."), v.instance.eventsStore = []
						}
						try {
							v.instance.sessionsStore = JSON.parse(localStorage.getItem(v.StringFormat(v.KeyFormat, a, v.SessionsStoreKey))), v.instance.sessionsStore || (v.instance.sessionsStore = [])
						} catch (a) {
							A.w("Load failed for 'sessions' store. Using empty store."), v.instance.sessionsStore = []
						}
						try {
							v.instance.progressionStore = JSON.parse(localStorage.getItem(v.StringFormat(v.KeyFormat, a, v.ProgressionStoreKey))), v.instance.progressionStore || (v.instance.progressionStore = [])
						} catch (a) {
							A.w("Load failed for 'progression' store. Using empty store."), v.instance.progressionStore = []
						}
						try {
							v.instance.storeItems = JSON.parse(localStorage.getItem(v.StringFormat(v.KeyFormat, a, v.ItemsStoreKey))), v.instance.storeItems || (v.instance.storeItems = {})
						} catch (a) {
							A.w("Load failed for 'items' store. Using empty store."), v.instance.progressionStore = []
						}
					} else A.w("Storage is not available, cannot load.")
				}, v.setItem = function(a, o, d) {
					var c = v.StringFormat(v.KeyFormat, a, o);
					d ? v.instance.storeItems[c] = d : c in v.instance.storeItems && delete v.instance.storeItems[c]
				}, v.getItem = function(a, o) {
					var d = v.StringFormat(v.KeyFormat, a, o);
					return d in v.instance.storeItems ? v.instance.storeItems[d] : null
				}, v.getStore = function(a) {
					switch (a) {
						case m.Events:
							return v.instance.eventsStore;
						case m.Sessions:
							return v.instance.sessionsStore;
						case m.Progression:
							return v.instance.progressionStore;
						default:
							return A.w("GAStore.getStore(): Cannot find store: " + a), null
					}
				}, v.instance = new v, v.MaxNumberOfEntries = 2e3, v.StringFormat = function(a) {
					for (var o = [], d = 1; d < arguments.length; d++) o[d - 1] = arguments[d];
					return a.replace(/{(\d+)}/g, (function(a, d) {
						return o[d] || ""
					}))
				}, v.KeyFormat = "GA::{0}::{1}", v.EventsStoreKey = "ga_event", v.SessionsStoreKey = "ga_session", v.ProgressionStoreKey = "ga_progression", v.ItemsStoreKey = "ga_items", v);

				function v() {
					this.eventsStore = [], this.sessionsStore = [], this.progressionStore = [], this.storeItems = {};
					try {
						"object" == typeof localStorage ? (localStorage.setItem("testingLocalStorage", "yes"), localStorage.removeItem("testingLocalStorage"), v.storageAvailable = !0) : v.storageAvailable = !1
					} catch (a) {}
				}
				o.GAStore = h
			}(a.store || (a.store = {}))
		}(d = d || {}),
		function(a) {
			var o, d, c, m, p, A, h, S, b;

			function g() {
				this.availableCustomDimensions01 = [], this.availableCustomDimensions02 = [], this.availableCustomDimensions03 = [], this.currentGlobalCustomEventFields = {}, this.availableResourceCurrencies = [], this.availableResourceItemTypes = [], this.configurations = {}, this.remoteConfigsListeners = [], this.beforeUnloadListeners = [], this.sdkConfigDefault = {}, this.sdkConfig = {}, this.progressionTries = {}, this._isEventSubmissionEnabled = !0, this.isUnloading = !1
			}
			o = a.state || (a.state = {}), d = a.validators.GAValidator, c = a.utilities.GAUtilities, m = a.logging.GALogger, p = a.store.GAStore, A = a.device.GADevice, h = a.store.EGAStore, S = a.store.EGAStoreArgsOperator, g.setUserId = function(a) {
				g.instance.userId = a, g.cacheIdentifier()
			}, g.getIdentifier = function() {
				return g.instance.identifier
			}, g.isInitialized = function() {
				return g.instance.initialized
			}, g.setInitialized = function(a) {
				g.instance.initialized = a
			}, g.getSessionStart = function() {
				return g.instance.sessionStart
			}, g.getSessionNum = function() {
				return g.instance.sessionNum
			}, g.getTransactionNum = function() {
				return g.instance.transactionNum
			}, g.getSessionId = function() {
				return g.instance.sessionId
			}, g.getCurrentCustomDimension01 = function() {
				return g.instance.currentCustomDimension01
			}, g.getCurrentCustomDimension02 = function() {
				return g.instance.currentCustomDimension02
			}, g.getCurrentCustomDimension03 = function() {
				return g.instance.currentCustomDimension03
			}, g.getGameKey = function() {
				return g.instance.gameKey
			}, g.getGameSecret = function() {
				return g.instance.gameSecret
			}, g.getAvailableCustomDimensions01 = function() {
				return g.instance.availableCustomDimensions01
			}, g.setAvailableCustomDimensions01 = function(a) {
				d.validateCustomDimensions(a) && (g.instance.availableCustomDimensions01 = a, g.validateAndFixCurrentDimensions(), m.i("Set available custom01 dimension values: (" + c.joinStringArray(a, ", ") + ")"))
			}, g.getAvailableCustomDimensions02 = function() {
				return g.instance.availableCustomDimensions02
			}, g.setAvailableCustomDimensions02 = function(a) {
				d.validateCustomDimensions(a) && (g.instance.availableCustomDimensions02 = a, g.validateAndFixCurrentDimensions(), m.i("Set available custom02 dimension values: (" + c.joinStringArray(a, ", ") + ")"))
			}, g.getAvailableCustomDimensions03 = function() {
				return g.instance.availableCustomDimensions03
			}, g.setAvailableCustomDimensions03 = function(a) {
				d.validateCustomDimensions(a) && (g.instance.availableCustomDimensions03 = a, g.validateAndFixCurrentDimensions(), m.i("Set available custom03 dimension values: (" + c.joinStringArray(a, ", ") + ")"))
			}, g.getAvailableResourceCurrencies = function() {
				return g.instance.availableResourceCurrencies
			}, g.setAvailableResourceCurrencies = function(a) {
				d.validateResourceCurrencies(a) && (g.instance.availableResourceCurrencies = a, m.i("Set available resource currencies: (" + c.joinStringArray(a, ", ") + ")"))
			}, g.getAvailableResourceItemTypes = function() {
				return g.instance.availableResourceItemTypes
			}, g.setAvailableResourceItemTypes = function(a) {
				d.validateResourceItemTypes(a) && (g.instance.availableResourceItemTypes = a, m.i("Set available resource item types: (" + c.joinStringArray(a, ", ") + ")"))
			}, g.getBuild = function() {
				return g.instance.build
			}, g.setBuild = function(a) {
				g.instance.build = a, m.i("Set build version: " + a)
			}, g.getUseManualSessionHandling = function() {
				return g.instance.useManualSessionHandling
			}, g.isEventSubmissionEnabled = function() {
				return g.instance._isEventSubmissionEnabled
			}, g.getABTestingId = function() {
				return g.instance.abId
			}, g.getABTestingVariantId = function() {
				return g.instance.abVariantId
			}, g.prototype.setDefaultId = function(a) {
				this.defaultUserId = a || "", g.cacheIdentifier()
			}, g.getDefaultId = function() {
				return g.instance.defaultUserId
			}, g.getSdkConfig = function() {
				var a, o = 0;
				for (var d in g.instance.sdkConfig) 0 === o && (a = d), ++o;
				if (a && 0 < o) return g.instance.sdkConfig;
				for (var d in o = 0, g.instance.sdkConfigCached) 0 === o && (a = d), ++o;
				return a && 0 < o ? g.instance.sdkConfigCached : g.instance.sdkConfigDefault
			}, g.isEnabled = function() {
				return !!g.instance.initAuthorized
			}, g.setCustomDimension01 = function(a) {
				g.instance.currentCustomDimension01 = a, p.setItem(g.getGameKey(), g.Dimension01Key, a), m.i("Set custom01 dimension value: " + a)
			}, g.setCustomDimension02 = function(a) {
				g.instance.currentCustomDimension02 = a, p.setItem(g.getGameKey(), g.Dimension02Key, a), m.i("Set custom02 dimension value: " + a)
			}, g.setCustomDimension03 = function(a) {
				g.instance.currentCustomDimension03 = a, p.setItem(g.getGameKey(), g.Dimension03Key, a), m.i("Set custom03 dimension value: " + a)
			}, g.incrementSessionNum = function() {
				var a = g.getSessionNum() + 1;
				g.instance.sessionNum = a
			}, g.incrementTransactionNum = function() {
				var a = g.getTransactionNum() + 1;
				g.instance.transactionNum = a
			}, g.incrementProgressionTries = function(a) {
				var o = g.getProgressionTries(a) + 1;
				g.instance.progressionTries[a] = o;
				var d = {};
				d.progression = a, d.tries = o, p.insert(h.Progression, d, !0, "progression")
			}, g.getProgressionTries = function(a) {
				return a in g.instance.progressionTries ? g.instance.progressionTries[a] : 0
			}, g.clearProgressionTries = function(a) {
				a in g.instance.progressionTries && delete g.instance.progressionTries[a];
				var o = [];
				o.push(["progression", S.Equal, a]), p.delete(h.Progression, o)
			}, g.setKeys = function(a, o) {
				g.instance.gameKey = a, g.instance.gameSecret = o
			}, g.setManualSessionHandling = function(a) {
				g.instance.useManualSessionHandling = a, m.i("Use manual session handling: " + a)
			}, g.setEnabledEventSubmission = function(a) {
				g.instance._isEventSubmissionEnabled = a
			}, g.getEventAnnotations = function() {
				var a = {
					v: 2
				};
				a.event_uuid = c.createGuid(), a.user_id = g.instance.identifier, a.client_ts = g.getClientTsAdjusted(), a.sdk_version = A.getRelevantSdkVersion(), a.os_version = A.osVersion, a.manufacturer = A.deviceManufacturer, a.device = A.deviceModel, a.browser_version = A.browserVersion, a.platform = A.buildPlatform, a.session_id = g.instance.sessionId, a[g.SessionNumKey] = g.instance.sessionNum;
				var o = A.getConnectionType();
				if (d.validateConnectionType(o) && (a.connection_type = o), A.gameEngineVersion && (a.engine_version = A.gameEngineVersion), g.instance.configurations) {
					var m = 0;
					for (var p in g.instance.configurations) {
						m++;
						break
					}
					0 < m && (a.configurations = g.instance.configurations)
				}
				return g.instance.abId && (a.ab_id = g.instance.abId), g.instance.abVariantId && (a.ab_variant_id = g.instance.abVariantId), g.instance.build && (a.build = g.instance.build), a
			}, g.getSdkErrorEventAnnotations = function() {
				var a = {
					v: 2
				};
				a.event_uuid = c.createGuid(), a.category = g.CategorySdkError, a.sdk_version = A.getRelevantSdkVersion(), a.os_version = A.osVersion, a.manufacturer = A.deviceManufacturer, a.device = A.deviceModel, a.platform = A.buildPlatform;
				var o = A.getConnectionType();
				return d.validateConnectionType(o) && (a.connection_type = o), A.gameEngineVersion && (a.engine_version = A.gameEngineVersion), a
			}, g.getInitAnnotations = function() {
				var a = {};
				return g.getIdentifier() || g.cacheIdentifier(), p.setItem(g.getGameKey(), g.LastUsedIdentifierKey, g.getIdentifier()), a.user_id = g.getIdentifier(), a.sdk_version = A.getRelevantSdkVersion(), a.os_version = A.osVersion, a.platform = A.buildPlatform, g.getBuild() ? a.build = g.getBuild() : a.build = null, a.session_num = g.getSessionNum(), a.random_salt = g.getSessionNum(), a
			}, g.getClientTsAdjusted = function() {
				var a = c.timeIntervalSince1970(),
					o = a + g.instance.clientServerTimeOffset;
				return d.validateClientTs(o) ? o : a
			}, g.sessionIsStarted = function() {
				return 0 != g.instance.sessionStart
			}, g.cacheIdentifier = function() {
				g.instance.userId ? g.instance.identifier = g.instance.userId : g.instance.defaultUserId && (g.instance.identifier = g.instance.defaultUserId)
			}, g.ensurePersistedStates = function() {
				p.isStorageAvailable() && p.load(g.getGameKey());
				var a = g.instance;
				a.setDefaultId(null != p.getItem(g.getGameKey(), g.DefaultUserIdKey) ? p.getItem(g.getGameKey(), g.DefaultUserIdKey) : c.createGuid()), a.sessionNum = null != p.getItem(g.getGameKey(), g.SessionNumKey) ? Number(p.getItem(g.getGameKey(), g.SessionNumKey)) : 0, a.transactionNum = null != p.getItem(g.getGameKey(), g.TransactionNumKey) ? Number(p.getItem(g.getGameKey(), g.TransactionNumKey)) : 0, a.currentCustomDimension01 ? p.setItem(g.getGameKey(), g.Dimension01Key, a.currentCustomDimension01) : (a.currentCustomDimension01 = null != p.getItem(g.getGameKey(), g.Dimension01Key) ? p.getItem(g.getGameKey(), g.Dimension01Key) : "", a.currentCustomDimension01), a.currentCustomDimension02 ? p.setItem(g.getGameKey(), g.Dimension02Key, a.currentCustomDimension02) : (a.currentCustomDimension02 = null != p.getItem(g.getGameKey(), g.Dimension02Key) ? p.getItem(g.getGameKey(), g.Dimension02Key) : "", a.currentCustomDimension02), a.currentCustomDimension03 ? p.setItem(g.getGameKey(), g.Dimension03Key, a.currentCustomDimension03) : (a.currentCustomDimension03 = null != p.getItem(g.getGameKey(), g.Dimension03Key) ? p.getItem(g.getGameKey(), g.Dimension03Key) : "", a.currentCustomDimension03);
				var o = null != p.getItem(g.getGameKey(), g.SdkConfigCachedKey) ? p.getItem(g.getGameKey(), g.SdkConfigCachedKey) : "";
				if (o) {
					var d = JSON.parse(c.decode64(o));
					if (d) {
						var A = p.getItem(g.getGameKey(), g.LastUsedIdentifierKey);
						null != A && A != g.getIdentifier() && (m.w("New identifier spotted compared to last one used, clearing cached configs hash!!"), d.configs_hash && delete d.configs_hash), a.sdkConfigCached = d
					}
				}
				var S = g.getSdkConfig();
				a.configsHash = S.configs_hash ? S.configs_hash : "", a.abId = S.ab_id ? S.ab_id : "", a.abVariantId = S.ab_variant_id ? S.ab_variant_id : "";
				var b = p.select(h.Progression);
				if (b)
					for (var T = 0; T < b.length; ++T) {
						var G = b[T];
						G && (a.progressionTries[G.progression] = G.tries)
					}
			}, g.calculateServerTimeOffset = function(a) {
				return a - c.timeIntervalSince1970()
			}, g.formatString = function(a, o) {
				for (var d = a, c = 0; c < o.length; c++) {
					var m = new RegExp("\\{" + c + "\\}", "gi");
					d = d.replace(m, arguments[c])
				}
				return d
			}, g.validateAndCleanCustomFields = function(a, o) {
				void 0 === o && (o = null);
				var d = {};
				if (a) {
					var p = 0;
					for (var A in a) {
						var h = a[A];
						if (A && h)
							if (p < g.MAX_CUSTOM_FIELDS_COUNT) {
								var S = new RegExp("^[a-zA-Z0-9_]{1," + g.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
								if (c.stringMatch(A, S)) {
									var b = typeof h;
									if ("string" == b || h instanceof String) h.length <= g.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && 0 < h.length ? (d[A] = h, ++p) : (I = g.formatString(G = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its value is an empty string or exceeds the max number of characters (" + g.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")", [A, h]), m.w(I), o && o(G, I));
									else if ("number" == b || h instanceof Number) {
										var T = h;
										d[A] = T, ++p
									} else I = g.formatString(G = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its value is not a string or number", [A, h]), m.w(I), o && o(G, I)
								} else I = g.formatString(G = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + g.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")", [A, h]), m.w(I), o && o(G, I)
							} else I = g.formatString(G = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because it exceeds the max number of custom fields (" + g.MAX_CUSTOM_FIELDS_COUNT + ")", [A, h]), m.w(I), o && o(G, I);
						else {
							var G, I = g.formatString(G = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its key or value is null", [A, h]);
							m.w(I), o && o(G, I)
						}
					}
				}
				return d
			}, g.validateAndFixCurrentDimensions = function() {
				d.validateDimension01(g.getCurrentCustomDimension01(), g.getAvailableCustomDimensions01()) || g.setCustomDimension01(""), d.validateDimension02(g.getCurrentCustomDimension02(), g.getAvailableCustomDimensions02()) || g.setCustomDimension02(""), d.validateDimension03(g.getCurrentCustomDimension03(), g.getAvailableCustomDimensions03()) || g.setCustomDimension03("")
			}, g.getConfigurationStringValue = function(a, o) {
				return g.instance.configurations[a] ? g.instance.configurations[a].toString() : o
			}, g.isRemoteConfigsReady = function() {
				return g.instance.remoteConfigsIsReady
			}, g.addRemoteConfigsListener = function(a) {
				g.instance.remoteConfigsListeners.indexOf(a) < 0 && g.instance.remoteConfigsListeners.push(a)
			}, g.removeRemoteConfigsListener = function(a) {
				var o = g.instance.remoteConfigsListeners.indexOf(a); - 1 < o && g.instance.remoteConfigsListeners.splice(o, 1)
			}, g.getRemoteConfigsContentAsString = function() {
				return JSON.stringify(g.instance.configurations)
			}, g.populateConfigurations = function(a) {
				var o = a.configs;
				if (o) {
					g.instance.configurations = {};
					for (var d = 0; d < o.length; ++d) {
						var c = o[d];
						if (c) {
							var m = c.key,
								p = c.value,
								A = c.start_ts ? c.start_ts : Number.MIN_VALUE,
								h = c.end_ts ? c.end_ts : Number.MAX_VALUE,
								S = g.getClientTsAdjusted();
							m && p && A < S && S < h && (g.instance.configurations[m] = p)
						}
					}
				}
				g.instance.remoteConfigsIsReady = !0;
				var b = g.instance.remoteConfigsListeners;
				for (d = 0; d < b.length; ++d) b[d] && b[d].onRemoteConfigsUpdated()
			}, g.addOnBeforeUnloadListener = function(a) {
				g.instance.beforeUnloadListeners.indexOf(a) < 0 && g.instance.beforeUnloadListeners.push(a)
			}, g.removeOnBeforeUnloadListener = function(a) {
				var o = g.instance.beforeUnloadListeners.indexOf(a); - 1 < o && g.instance.beforeUnloadListeners.splice(o, 1)
			}, g.notifyBeforeUnloadListeners = function() {
				for (var a = g.instance.beforeUnloadListeners, o = 0; o < a.length; ++o) a[o] && a[o].onBeforeUnload()
			}, g.CategorySdkError = "sdk_error", g.MAX_CUSTOM_FIELDS_COUNT = 50, g.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64, g.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256, g.instance = new g, g.DefaultUserIdKey = "default_user_id", g.SessionNumKey = "session_num", g.TransactionNumKey = "transaction_num", g.Dimension01Key = "dimension01", g.Dimension02Key = "dimension02", g.Dimension03Key = "dimension03", g.SdkConfigCachedKey = "sdk_config_cached", g.LastUsedIdentifierKey = "last_used_identifier", b = g, o.GAState = b
		}(d = d || {}),
		function(a) {
			var o, d, c, m;

			function l() {}
			o = a.tasks || (a.tasks = {}), d = a.utilities.GAUtilities, c = a.logging.GALogger, l.execute = function(a, o, m, p) {
				var A = new Date;
				if (l.timestampMap[o] || (l.timestampMap[o] = A), l.countMap[o] || (l.countMap[o] = 0), 3600 <= (A.getTime() - l.timestampMap[o].getTime()) / 1e3 && (l.timestampMap[o] = A, l.countMap[o] = 0), !(l.countMap[o] >= l.MaxCount)) {
					var h = d.getHmac(p, m),
						S = new XMLHttpRequest;
					S.onreadystatechange = function() {
						if (4 === S.readyState) {
							if (!S.responseText) return;
							if (200 != S.status) return void c.w("sdk error failed. response code not 200. status code: " + S.status + ", description: " + S.statusText + ", body: " + S.responseText);
							l.countMap[o] = l.countMap[o] + 1
						}
					}, S.open("POST", a, !0), S.setRequestHeader("Content-Type", "application/json"), S.setRequestHeader("Authorization", h);
					try {
						S.send(m)
					} catch (a) {
						console.error(a)
					}
				}
			}, l.MaxCount = 10, l.countMap = {}, l.timestampMap = {}, m = l, o.SdkErrorTask = m
		}(d = d || {}),
		function(a) {
			var o, d, c, m, p, A, h, S, b, T, G;

			function y() {
				this.protocol = "https", this.hostName = "api.gameanalytics.com", this.version = "v2", this.remoteConfigsVersion = "v1", this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version, this.remoteConfigsBaseUrl = this.protocol + "://" + this.hostName + "/remote_configs/" + this.remoteConfigsVersion, this.initializeUrlPath = "init", this.eventsUrlPath = "events", this.useGzip = !1
			}
			o = a.http || (a.http = {}), d = a.state.GAState, c = a.logging.GALogger, m = a.utilities.GAUtilities, p = a.validators.GAValidator, A = a.tasks.SdkErrorTask, h = a.events.EGASdkErrorCategory, S = a.events.EGASdkErrorArea, b = a.events.EGASdkErrorAction, T = a.events.EGASdkErrorParameter, y.prototype.requestInit = function(a, c) {
				var m = d.getGameKey(),
					p = this.remoteConfigsBaseUrl + "/" + this.initializeUrlPath + "?game_key=" + m + "&interval_seconds=0&configs_hash=" + a,
					A = d.getInitAnnotations(),
					h = JSON.stringify(A);
				if (h) {
					var S = this.createPayloadData(h, this.useGzip),
						b = [];
					b.push(h), y.sendRequest(p, S, b, this.useGzip, y.initRequestCallback, c)
				} else c(o.EGAHTTPApiResponse.JsonEncodeFailed, null)
			}, y.prototype.sendEventsInArray = function(a, c, m) {
				if (0 != a.length) {
					var p = d.getGameKey(),
						A = this.baseUrl + "/" + p + "/" + this.eventsUrlPath,
						h = JSON.stringify(a);
					if (h) {
						var S = this.createPayloadData(h, this.useGzip),
							b = [];
						b.push(h), b.push(c), b.push(a.length.toString()), y.sendRequest(A, S, b, this.useGzip, y.sendEventInArrayRequestCallback, m)
					} else m(o.EGAHTTPApiResponse.JsonEncodeFailed, null, c, a.length)
				}
			}, y.prototype.sendSdkErrorEvent = function(a, o, m, h, S, b, T) {
				if (d.isEventSubmissionEnabled() && p.validateSdkErrorEvent(b, T, a, o, m)) {
					var G, I = this.baseUrl + "/" + b + "/" + this.eventsUrlPath,
						k = "",
						_ = d.getSdkErrorEventAnnotations(),
						w = y.sdkErrorCategoryString(a);
					k += _.error_category = w;
					var R = y.sdkErrorAreaString(o);
					k += ":" + (_.error_area = R);
					var P = y.sdkErrorActionString(m);
					_.error_action = P;
					var D = y.sdkErrorParameterString(h);
					if (0 < D.length && (_.error_parameter = D), 0 < S.length) {
						var O = S;
						S.length > y.MAX_ERROR_MESSAGE_LENGTH && (O = S.substring(0, y.MAX_ERROR_MESSAGE_LENGTH)), _.reason = O
					}
					var U = [];
					U.push(_), (G = JSON.stringify(U)) ? A.execute(I, k, G, T) : c.w("sendSdkErrorEvent: JSON encoding failed.")
				}
			}, y.sendEventInArrayRequestCallback = function(a, c, m, p) {
				void 0 === p && (p = null), p[0], p[1];
				var A, G, I = p[2],
					k = parseInt(p[3]);
				A = a.responseText, G = a.status;
				var _ = y.instance.processRequestResponse(G, a.statusText, A, "Events");
				if (_ == o.EGAHTTPApiResponse.Ok || _ == o.EGAHTTPApiResponse.Created || _ == o.EGAHTTPApiResponse.BadRequest) {
					var w = A ? JSON.parse(A) : {};
					if (null == w) return m(o.EGAHTTPApiResponse.JsonDecodeFailed, null, I, k), void y.instance.sendSdkErrorEvent(h.Http, S.EventsHttp, b.FailHttpJsonDecode, T.Undefined, A, d.getGameKey(), d.getGameSecret());
					o.EGAHTTPApiResponse.BadRequest, m(_, w, I, k)
				} else m(_, null, I, k)
			}, y.sendRequest = function(a, o, c, p, A, h) {
				var S = new XMLHttpRequest,
					b = d.getGameSecret(),
					T = m.getHmac(b, o),
					G = [];
				for (var I in G.push(T), c) G.push(c[I]);
				if (S.onreadystatechange = function() {
						4 === S.readyState && A(S, a, h, G)
					}, S.open("POST", a, !0), S.setRequestHeader("Content-Type", "application/json"), S.setRequestHeader("Authorization", T), p) throw new Error("gzip not supported");
				try {
					//S.send(o)
				} catch (a) {
					console.error(a.stack)
				}
			}, y.initRequestCallback = function(a, c, m, A) {
				var G, I;
				void 0 === A && (A = null), A[0], A[1], G = a.responseText, I = a.status;
				var k = G ? JSON.parse(G) : {},
					_ = y.instance.processRequestResponse(I, a.statusText, G, "Init");
				if (_ == o.EGAHTTPApiResponse.Ok || _ == o.EGAHTTPApiResponse.Created || _ == o.EGAHTTPApiResponse.BadRequest) {
					if (null == k) return m(o.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0), void y.instance.sendSdkErrorEvent(h.Http, S.InitHttp, b.FailHttpJsonDecode, T.Undefined, G, d.getGameKey(), d.getGameSecret());
					if (_ !== o.EGAHTTPApiResponse.BadRequest) {
						var w = p.validateAndCleanInitRequestResponse(k, _ === o.EGAHTTPApiResponse.Created);
						w ? m(_, w, "", 0) : m(o.EGAHTTPApiResponse.BadResponse, null, "", 0)
					} else m(_, null, "", 0)
				} else m(_, null, "", 0)
			}, y.prototype.createPayloadData = function(a, o) {
				if (o) throw new Error("gzip not supported");
				return a
			}, y.prototype.processRequestResponse = function(a, d, c, m) {
				return c ? 200 === a ? o.EGAHTTPApiResponse.Ok : 201 === a ? o.EGAHTTPApiResponse.Created : 0 === a || 401 === a ? o.EGAHTTPApiResponse.Unauthorized : 400 === a ? o.EGAHTTPApiResponse.BadRequest : 500 === a ? o.EGAHTTPApiResponse.InternalServerError : o.EGAHTTPApiResponse.UnknownResponseCode : o.EGAHTTPApiResponse.NoResponse
			}, y.sdkErrorCategoryString = function(a) {
				switch (a) {
					case h.EventValidation:
						return "event_validation";
					case h.Database:
						return "db";
					case h.Init:
						return "init";
					case h.Http:
						return "http";
					case h.Json:
						return "json"
				}
				return ""
			}, y.sdkErrorAreaString = function(a) {
				switch (a) {
					case S.BusinessEvent:
						return "business";
					case S.ResourceEvent:
						return "resource";
					case S.ProgressionEvent:
						return "progression";
					case S.DesignEvent:
						return "design";
					case S.ErrorEvent:
						return "error";
					case S.InitHttp:
						return "init_http";
					case S.EventsHttp:
						return "events_http";
					case S.ProcessEvents:
						return "process_events";
					case S.AddEventsToStore:
						return "add_events_to_store"
				}
				return ""
			}, y.sdkErrorActionString = function(a) {
				switch (a) {
					case b.InvalidCurrency:
						return "invalid_currency";
					case b.InvalidShortString:
						return "invalid_short_string";
					case b.InvalidEventPartLength:
						return "invalid_event_part_length";
					case b.InvalidEventPartCharacters:
						return "invalid_event_part_characters";
					case b.InvalidStore:
						return "invalid_store";
					case b.InvalidFlowType:
						return "invalid_flow_type";
					case b.StringEmptyOrNull:
						return "string_empty_or_null";
					case b.NotFoundInAvailableCurrencies:
						return "not_found_in_available_currencies";
					case b.InvalidAmount:
						return "invalid_amount";
					case b.NotFoundInAvailableItemTypes:
						return "not_found_in_available_item_types";
					case b.WrongProgressionOrder:
						return "wrong_progression_order";
					case b.InvalidEventIdLength:
						return "invalid_event_id_length";
					case b.InvalidEventIdCharacters:
						return "invalid_event_id_characters";
					case b.InvalidProgressionStatus:
						return "invalid_progression_status";
					case b.InvalidSeverity:
						return "invalid_severity";
					case b.InvalidLongString:
						return "invalid_long_string";
					case b.DatabaseTooLarge:
						return "db_too_large";
					case b.DatabaseOpenOrCreate:
						return "db_open_or_create";
					case b.JsonError:
						return "json_error";
					case b.FailHttpJsonDecode:
						return "fail_http_json_decode";
					case b.FailHttpJsonEncode:
						return "fail_http_json_encode"
				}
				return ""
			}, y.sdkErrorParameterString = function(a) {
				switch (a) {
					case T.Currency:
						return "currency";
					case T.CartType:
						return "cart_type";
					case T.ItemType:
						return "item_type";
					case T.ItemId:
						return "item_id";
					case T.Store:
						return "store";
					case T.FlowType:
						return "flow_type";
					case T.Amount:
						return "amount";
					case T.Progression01:
						return "progression01";
					case T.Progression02:
						return "progression02";
					case T.Progression03:
						return "progression03";
					case T.EventId:
						return "event_id";
					case T.ProgressionStatus:
						return "progression_status";
					case T.Severity:
						return "severity";
					case T.Message:
						return "message"
				}
				return ""
			}, y.instance = new y, y.MAX_ERROR_MESSAGE_LENGTH = 256, G = y, o.GAHTTPApi = G
		}(d = d || {}),
		function(a) {
			var o, d, c, m, p, A, h, S, b, T, G;

			function C() {}
			o = a.events || (a.events = {}), d = a.store.GAStore, c = a.store.EGAStore, m = a.store.EGAStoreArgsOperator, p = a.state.GAState, A = a.logging.GALogger, h = a.utilities.GAUtilities, S = a.http.EGAHTTPApiResponse, b = a.http.GAHTTPApi, T = a.validators.GAValidator, C.customEventFieldsErrorCallback = function(o, d) {
				if (p.isEventSubmissionEnabled()) {
					var c = new Date;
					C.timestampMap[o] || (C.timestampMap[o] = c), C.countMap[o] || (C.countMap[o] = 0), 3600 <= (c.getTime() - C.timestampMap[o].getTime()) / 1e3 && (C.timestampMap[o] = c, C.countMap[o] = 0), C.countMap[o] >= C.MAX_ERROR_COUNT || a.threading.GAThreading.performTaskOnGAThread((function() {
						C.addErrorEvent(a.EGAErrorSeverity.Warning, d, null, !0), C.countMap[o] = C.countMap[o] + 1
					}))
				}
			}, C.addSessionStartEvent = function() {
				if (p.isEventSubmissionEnabled()) {
					var a = {};
					a.category = C.CategorySessionStart, p.incrementSessionNum(), d.setItem(p.getGameKey(), p.SessionNumKey, p.getSessionNum().toString()), C.addDimensionsToEvent(a);
					var o = p.instance.currentGlobalCustomEventFields;
					C.addCustomFieldsToEvent(a, p.validateAndCleanCustomFields(o, C.customEventFieldsErrorCallback)), C.addEventToStore(a), A.i("Add SESSION START event"), C.processEvents(C.CategorySessionStart, !1)
				}
			}, C.addSessionEndEvent = function() {
				if (p.isEventSubmissionEnabled()) {
					var a = p.getSessionStart(),
						o = p.getClientTsAdjusted() - a;
					o < 0 && (A.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0."), o = 0);
					var d = {};
					d.category = C.CategorySessionEnd, d.length = o, C.addDimensionsToEvent(d);
					var c = p.instance.currentGlobalCustomEventFields;
					C.addCustomFieldsToEvent(d, p.validateAndCleanCustomFields(c, C.customEventFieldsErrorCallback)), C.addEventToStore(d), A.i("Add SESSION END event."), C.processEvents("", !1)
				}
			}, C.addBusinessEvent = function(a, o, c, m, h, S, G) {
				if (void 0 === h && (h = null), p.isEventSubmissionEnabled()) {
					var I = T.validateBusinessEvent(a, o, h, c, m);
					if (null == I) {
						var k = {};
						p.incrementTransactionNum(), d.setItem(p.getGameKey(), p.TransactionNumKey, p.getTransactionNum().toString()), k.event_id = c + ":" + m, k.category = C.CategoryBusiness, k.currency = a, k.amount = o, k[p.TransactionNumKey] = p.getTransactionNum(), h && (k.cart_type = h), C.addDimensionsToEvent(k);
						var _ = {};
						if (S && 0 < Object.keys(S).length)
							for (var w in S) _[w] = S[w];
						else
							for (var w in p.instance.currentGlobalCustomEventFields) _[w] = p.instance.currentGlobalCustomEventFields[w];
						if (G && S && 0 < Object.keys(S).length)
							for (var w in p.instance.currentGlobalCustomEventFields) _[w] || (_[w] = p.instance.currentGlobalCustomEventFields[w]);
						C.addCustomFieldsToEvent(k, p.validateAndCleanCustomFields(_, C.customEventFieldsErrorCallback)), A.i("Add BUSINESS event: {currency:" + a + ", amount:" + o + ", itemType:" + c + ", itemId:" + m + ", cartType:" + h + "}"), C.addEventToStore(k)
					} else b.instance.sendSdkErrorEvent(I.category, I.area, I.action, I.parameter, I.reason, p.getGameKey(), p.getGameSecret())
				}
			}, C.addResourceEvent = function(o, d, c, m, h, S, G) {
				if (p.isEventSubmissionEnabled()) {
					var I = T.validateResourceEvent(o, d, c, m, h, p.getAvailableResourceCurrencies(), p.getAvailableResourceItemTypes());
					if (null == I) {
						o === a.EGAResourceFlowType.Sink && (c *= -1);
						var k = {},
							_ = C.resourceFlowTypeToString(o);
						k.event_id = _ + ":" + d + ":" + m + ":" + h, k.category = C.CategoryResource, k.amount = c, C.addDimensionsToEvent(k);
						var w = {};
						if (S && 0 < Object.keys(S).length)
							for (var R in S) w[R] = S[R];
						else
							for (var R in p.instance.currentGlobalCustomEventFields) w[R] = p.instance.currentGlobalCustomEventFields[R];
						if (G && S && 0 < Object.keys(S).length)
							for (var R in p.instance.currentGlobalCustomEventFields) w[R] || (w[R] = p.instance.currentGlobalCustomEventFields[R]);
						C.addCustomFieldsToEvent(k, p.validateAndCleanCustomFields(w, C.customEventFieldsErrorCallback)), A.i("Add RESOURCE event: {currency:" + d + ", amount:" + c + ", itemType:" + m + ", itemId:" + h + "}"), C.addEventToStore(k)
					} else b.instance.sendSdkErrorEvent(I.category, I.area, I.action, I.parameter, I.reason, p.getGameKey(), p.getGameSecret())
				}
			}, C.addProgressionEvent = function(o, d, c, m, h, S, G, I) {
				if (p.isEventSubmissionEnabled()) {
					var k = C.progressionStatusToString(o),
						_ = T.validateProgressionEvent(o, d, c, m);
					if (null == _) {
						var w, R = {};
						w = c ? m ? d + ":" + c + ":" + m : d + ":" + c : d, R.category = C.CategoryProgression, R.event_id = k + ":" + w;
						var P = 0;
						S && o != a.EGAProgressionStatus.Start && (R.score = Math.round(h)), o === a.EGAProgressionStatus.Fail && p.incrementProgressionTries(w), o === a.EGAProgressionStatus.Complete && (p.incrementProgressionTries(w), P = p.getProgressionTries(w), R.attempt_num = P, p.clearProgressionTries(w)), C.addDimensionsToEvent(R);
						var D = {};
						if (G && 0 < Object.keys(G).length)
							for (var O in G) D[O] = G[O];
						else
							for (var O in p.instance.currentGlobalCustomEventFields) D[O] = p.instance.currentGlobalCustomEventFields[O];
						if (I && G && 0 < Object.keys(G).length)
							for (var O in p.instance.currentGlobalCustomEventFields) D[O] || (D[O] = p.instance.currentGlobalCustomEventFields[O]);
						C.addCustomFieldsToEvent(R, p.validateAndCleanCustomFields(D, C.customEventFieldsErrorCallback)), A.i("Add PROGRESSION event: {status:" + k + ", progression01:" + d + ", progression02:" + c + ", progression03:" + m + ", score:" + h + ", attempt:" + P + "}"), C.addEventToStore(R)
					} else b.instance.sendSdkErrorEvent(_.category, _.area, _.action, _.parameter, _.reason, p.getGameKey(), p.getGameSecret())
				}
			}, C.addDesignEvent = function(a, o, d, c, m) {
				if (p.isEventSubmissionEnabled()) {
					var h = T.validateDesignEvent(a);
					if (null == h) {
						var S = {};
						S.category = C.CategoryDesign, S.event_id = a, d && (S.value = o), C.addDimensionsToEvent(S);
						var G = {};
						if (c && 0 < Object.keys(c).length)
							for (var I in c) G[I] = c[I];
						else
							for (var I in p.instance.currentGlobalCustomEventFields) G[I] = p.instance.currentGlobalCustomEventFields[I];
						if (m && c && 0 < Object.keys(c).length)
							for (var I in p.instance.currentGlobalCustomEventFields) G[I] || (G[I] = p.instance.currentGlobalCustomEventFields[I]);
						C.addCustomFieldsToEvent(S, p.validateAndCleanCustomFields(G, C.customEventFieldsErrorCallback)), A.i("Add DESIGN event: {eventId:" + a + ", value:" + o + "}"), C.addEventToStore(S)
					} else b.instance.sendSdkErrorEvent(h.category, h.area, h.action, h.parameter, h.reason, p.getGameKey(), p.getGameSecret())
				}
			}, C.addErrorEvent = function(a, o, d, c, m) {
				if (void 0 === m && (m = !1), p.isEventSubmissionEnabled()) {
					var h = C.errorSeverityToString(a),
						S = T.validateErrorEvent(a, o);
					if (null == S) {
						var G = {};
						if (G.category = C.CategoryError, G.severity = h, G.message = o, C.addDimensionsToEvent(G), !m) {
							var I = {};
							if (d && 0 < Object.keys(d).length)
								for (var k in d) I[k] = d[k];
							else
								for (var k in p.instance.currentGlobalCustomEventFields) I[k] = p.instance.currentGlobalCustomEventFields[k];
							if (c && d && 0 < Object.keys(d).length)
								for (var k in p.instance.currentGlobalCustomEventFields) I[k] || (I[k] = p.instance.currentGlobalCustomEventFields[k]);
							C.addCustomFieldsToEvent(G, p.validateAndCleanCustomFields(I, C.customEventFieldsErrorCallback))
						}
						A.i("Add ERROR event: {severity:" + h + ", message:" + o + "}"), C.addEventToStore(G)
					} else b.instance.sendSdkErrorEvent(S.category, S.area, S.action, S.parameter, S.reason, p.getGameKey(), p.getGameSecret())
				}
			}, C.addAdEvent = function(o, d, c, m, h, S, G, I, k) {
				if (p.isEventSubmissionEnabled()) {
					var _ = C.adActionToString(o),
						w = C.adTypeToString(d),
						R = C.adErrorToString(h),
						P = T.validateAdEvent(o, d, c, m);
					if (null == P) {
						var D = {};
						D.category = C.CategoryAds, D.ad_sdk_name = c, D.ad_placement = m, D.ad_type = w, D.ad_action = _, o == a.EGAAdAction.FailedShow && 0 < R.length && (D.ad_fail_show_reason = R), !G || d != a.EGAAdType.RewardedVideo && d != a.EGAAdType.Video || (D.ad_duration = S), C.addDimensionsToEvent(D);
						var O = {};
						if (I && 0 < Object.keys(I).length)
							for (var U in I) O[U] = I[U];
						else
							for (var U in p.instance.currentGlobalCustomEventFields) O[U] = p.instance.currentGlobalCustomEventFields[U];
						if (k && I && 0 < Object.keys(I).length)
							for (var U in p.instance.currentGlobalCustomEventFields) O[U] || (O[U] = p.instance.currentGlobalCustomEventFields[U]);
						C.addCustomFieldsToEvent(D, p.validateAndCleanCustomFields(O, C.customEventFieldsErrorCallback)), A.i("Add AD event: {ad_sdk_name:" + c + ", ad_placement:" + m + ", ad_type:" + w + ", ad_action:" + _ + (o == a.EGAAdAction.FailedShow && 0 < R.length ? ", ad_fail_show_reason:" + R : "") + (!G || d != a.EGAAdType.RewardedVideo && d != a.EGAAdType.Video ? "" : ", ad_duration:" + S) + "}"), C.addEventToStore(D)
					} else b.instance.sendSdkErrorEvent(P.category, P.area, P.action, P.parameter, P.reason, p.getGameKey(), p.getGameSecret())
				}
			}, C.processEvents = function(a, S) {
				if (p.isEventSubmissionEnabled()) try {
					var G = h.createGuid();
					S && (C.cleanupEvents(), C.fixMissingSessionEndEvents());
					var I = [];
					I.push(["status", m.Equal, "new"]);
					var k = [];
					k.push(["status", m.Equal, "new"]), a && (I.push(["category", m.Equal, a]), k.push(["category", m.Equal, a]));
					var _ = [];
					_.push(["status", G]);
					var w = d.select(c.Events, I);
					if (!w || 0 == w.length) return A.i("Event queue: No events to send"), void C.updateSessionStore();
					if (w.length > C.MaxEventCount) {
						if (!(w = d.select(c.Events, I, !0, C.MaxEventCount))) return;
						var R = w[w.length - 1].client_ts;
						if (I.push(["client_ts", m.LessOrEqual, R]), !(w = d.select(c.Events, I))) return;
						k.push(["client_ts", m.LessOrEqual, R])
					}
					if (A.i("Event queue: Sending " + w.length + " events."), !d.update(c.Events, _, k)) return;
					for (var P = [], D = 0; D < w.length; ++D) {
						var O = w[D],
							U = JSON.parse(h.decode64(O.event));
						if (0 != U.length) {
							var F = U.client_ts;
							F && !T.validateClientTs(F) && delete U.client_ts, P.push(U)
						}
					}
					b.instance.sendEventsInArray(P, G, C.processEventsCallback)
				} catch (a) {
					A.e("Error during ProcessEvents(): " + a.stack), b.instance.sendSdkErrorEvent(o.EGASdkErrorCategory.Json, o.EGASdkErrorArea.ProcessEvents, o.EGASdkErrorAction.JsonError, o.EGASdkErrorParameter.Undefined, a.stack, p.getGameKey(), p.getGameSecret())
				}
			}, C.processEventsCallback = function(a, o, p, h) {
				var b = [];
				if (b.push(["status", m.Equal, p]), a === S.Ok) d.delete(c.Events, b), A.i("Event queue: " + h + " events sent.");
				else if (a === S.NoResponse) {
					var T = [];
					T.push(["status", "new"]), A.w("Event queue: Failed to send events to collector - Retrying next time"), d.update(c.Events, T, b)
				} else {
					if (o) {
						var G, I = 0;
						for (var k in o) 0 == I && (G = o[k]), ++I;
						a === S.BadRequest && G.constructor === Array ? A.w("Event queue: " + h + " events sent. " + I + " events failed GA server validation.") : A.w("Event queue: Failed to send events.")
					} else A.w("Event queue: Failed to send events.");
					d.delete(c.Events, b)
				}
			}, C.cleanupEvents = function() {
				d.update(c.Events, [
					["status", "new"]
				])
			}, C.fixMissingSessionEndEvents = function() {
				if (p.isEventSubmissionEnabled()) {
					var a = [];
					a.push(["session_id", m.NotEqual, p.getSessionId()]);
					var o = d.select(c.Sessions, a);
					if (o && 0 != o.length) {
						A.i(o.length + " session(s) located with missing session_end event.");
						for (var S = 0; S < o.length; ++S) {
							var b = JSON.parse(h.decode64(o[S].event)),
								T = b.client_ts - o[S].timestamp;
							T = Math.max(0, T), b.category = C.CategorySessionEnd, b.length = T, C.addEventToStore(b)
						}
					}
				}
			}, C.addEventToStore = function(a) {
				if (p.isEventSubmissionEnabled())
					if (p.isInitialized()) try {
						if (d.isStoreTooLargeForEvents() && !h.stringMatch(a.category, /^(user|session_end|business)$/)) return A.w("Database too large. Event has been blocked."), void b.instance.sendSdkErrorEvent(o.EGASdkErrorCategory.Database, o.EGASdkErrorArea.AddEventsToStore, o.EGASdkErrorAction.DatabaseTooLarge, o.EGASdkErrorParameter.Undefined, "", p.getGameKey(), p.getGameSecret());
						var S = p.getEventAnnotations();
						for (var T in a) S[T] = a[T];
						var G = JSON.stringify(S);
						A.ii("Event added to queue: " + G);
						var I = {
							status: "new"
						};
						I.category = S.category, I.session_id = S.session_id, I.client_ts = S.client_ts, I.event = h.encode64(JSON.stringify(S)), d.insert(c.Events, I), a.category == C.CategorySessionEnd ? d.delete(c.Sessions, [
							["session_id", m.Equal, S.session_id]
						]) : C.updateSessionStore(), d.isStorageAvailable() && d.save(p.getGameKey())
					} catch (T) {
						A.e("addEventToStore: error"), A.e(T.stack), b.instance.sendSdkErrorEvent(o.EGASdkErrorCategory.Database, o.EGASdkErrorArea.AddEventsToStore, o.EGASdkErrorAction.DatabaseTooLarge, o.EGASdkErrorParameter.Undefined, T.stack, p.getGameKey(), p.getGameSecret())
					} else A.w("Could not add event: SDK is not initialized")
			}, C.updateSessionStore = function() {
				if (p.sessionIsStarted()) {
					var a = {};
					a.session_id = p.instance.sessionId, a.timestamp = p.getSessionStart();
					var o = p.getEventAnnotations();
					C.addDimensionsToEvent(o);
					var m = p.instance.currentGlobalCustomEventFields;
					C.addCustomFieldsToEvent(o, p.validateAndCleanCustomFields(m, C.customEventFieldsErrorCallback)), a.event = h.encode64(JSON.stringify(o)), d.insert(c.Sessions, a, !0, "session_id"), d.isStorageAvailable() && d.save(p.getGameKey())
				}
			}, C.addDimensionsToEvent = function(a) {
				a && (p.getCurrentCustomDimension01() && (a.custom_01 = p.getCurrentCustomDimension01()), p.getCurrentCustomDimension02() && (a.custom_02 = p.getCurrentCustomDimension02()), p.getCurrentCustomDimension03() && (a.custom_03 = p.getCurrentCustomDimension03()))
			}, C.addCustomFieldsToEvent = function(a, o) {
				a && o && 0 < Object.keys(o).length && (a.custom_fields = o)
			}, C.resourceFlowTypeToString = function(o) {
				return o == a.EGAResourceFlowType.Source || o == a.EGAResourceFlowType[a.EGAResourceFlowType.Source] ? "Source" : o == a.EGAResourceFlowType.Sink || o == a.EGAResourceFlowType[a.EGAResourceFlowType.Sink] ? "Sink" : ""
			}, C.progressionStatusToString = function(o) {
				return o == a.EGAProgressionStatus.Start || o == a.EGAProgressionStatus[a.EGAProgressionStatus.Start] ? "Start" : o == a.EGAProgressionStatus.Complete || o == a.EGAProgressionStatus[a.EGAProgressionStatus.Complete] ? "Complete" : o == a.EGAProgressionStatus.Fail || o == a.EGAProgressionStatus[a.EGAProgressionStatus.Fail] ? "Fail" : ""
			}, C.errorSeverityToString = function(o) {
				return o == a.EGAErrorSeverity.Debug || o == a.EGAErrorSeverity[a.EGAErrorSeverity.Debug] ? "debug" : o == a.EGAErrorSeverity.Info || o == a.EGAErrorSeverity[a.EGAErrorSeverity.Info] ? "info" : o == a.EGAErrorSeverity.Warning || o == a.EGAErrorSeverity[a.EGAErrorSeverity.Warning] ? "warning" : o == a.EGAErrorSeverity.Error || o == a.EGAErrorSeverity[a.EGAErrorSeverity.Error] ? "error" : o == a.EGAErrorSeverity.Critical || o == a.EGAErrorSeverity[a.EGAErrorSeverity.Critical] ? "critical" : ""
			}, C.adActionToString = function(o) {
				return o == a.EGAAdAction.Clicked || o == a.EGAAdAction[a.EGAAdAction.Clicked] ? "clicked" : o == a.EGAAdAction.Show || o == a.EGAAdAction[a.EGAAdAction.Show] ? "show" : o == a.EGAAdAction.FailedShow || o == a.EGAAdAction[a.EGAAdAction.FailedShow] ? "failed_show" : o == a.EGAAdAction.RewardReceived || o == a.EGAAdAction[a.EGAAdAction.RewardReceived] ? "reward_received" : ""
			}, C.adErrorToString = function(o) {
				return o == a.EGAAdError.Unknown || o == a.EGAAdError[a.EGAAdError.Unknown] ? "unknown" : o == a.EGAAdError.Offline || o == a.EGAAdError[a.EGAAdError.Offline] ? "offline" : o == a.EGAAdError.NoFill || o == a.EGAAdError[a.EGAAdError.NoFill] ? "no_fill" : o == a.EGAAdError.InternalError || o == a.EGAAdError[a.EGAAdError.InternalError] ? "internal_error" : o == a.EGAAdError.InvalidRequest || o == a.EGAAdError[a.EGAAdError.InvalidRequest] ? "invalid_request" : o == a.EGAAdError.UnableToPrecache || o == a.EGAAdError[a.EGAAdError.UnableToPrecache] ? "unable_to_precache" : ""
			}, C.adTypeToString = function(o) {
				return o == a.EGAAdType.Video || o == a.EGAAdType[a.EGAAdType.Video] ? "video" : o == a.EGAAdType.RewardedVideo || o == a.EGAAdError[a.EGAAdType.RewardedVideo] ? "rewarded_video" : o == a.EGAAdType.Playable || o == a.EGAAdError[a.EGAAdType.Playable] ? "playable" : o == a.EGAAdType.Interstitial || o == a.EGAAdError[a.EGAAdType.Interstitial] ? "interstitial" : o == a.EGAAdType.OfferWall || o == a.EGAAdError[a.EGAAdType.OfferWall] ? "offer_wall" : o == a.EGAAdType.Banner || o == a.EGAAdError[a.EGAAdType.Banner] ? "banner" : ""
			}, C.CategorySessionStart = "user", C.CategorySessionEnd = "session_end", C.CategoryDesign = "design", C.CategoryBusiness = "business", C.CategoryProgression = "progression", C.CategoryResource = "resource", C.CategoryError = "error", C.CategoryAds = "ads", C.MaxEventCount = 500, C.MAX_ERROR_COUNT = 10, C.countMap = {}, C.timestampMap = {}, G = C, o.GAEvents = G
		}(d = d || {}),
		function(a) {
			var o, d, c, m, p;

			function s() {
				this.blocks = new o.PriorityQueue({
					compare: function(a, o) {
						return a - o
					}
				}), this.id2TimedBlockMap = {}, s.startThread()
			}
			o = a.threading || (a.threading = {}), d = a.logging.GALogger, c = a.state.GAState, m = a.events.GAEvents, s.createTimedBlock = function(a) {
				void 0 === a && (a = 0);
				var d = new Date;
				return d.setUTCSeconds(d.getUTCSeconds() + a), new o.TimedBlock(d)
			}, s.performTaskOnGAThread = function(a, d) {
				void 0 === d && (d = 0);
				var c = new Date;
				c.setUTCSeconds(c.getUTCSeconds() + d);
				var m = new o.TimedBlock(c);
				m.block = a, s.instance.id2TimedBlockMap[m.id] = m, s.instance.addTimedBlock(m)
			}, s.performTimedBlockOnGAThread = function(a) {
				s.instance.id2TimedBlockMap[a.id] = a, s.instance.addTimedBlock(a)
			}, s.scheduleTimer = function(a, d) {
				var c = new Date;
				c.setUTCSeconds(c.getUTCSeconds() + a);
				var m = new o.TimedBlock(c);
				return m.block = d, s.instance.id2TimedBlockMap[m.id] = m, s.instance.addTimedBlock(m), m.id
			}, s.getTimedBlockById = function(a) {
				return a in s.instance.id2TimedBlockMap ? s.instance.id2TimedBlockMap[a] : null
			}, s.ensureEventQueueIsRunning = function() {
				s.instance.keepRunning = !0, s.instance.isRunning || (s.instance.isRunning = !0, s.scheduleTimer(s.ProcessEventsIntervalInSeconds, s.processEventQueue))
			}, s.endSessionAndStopQueue = function() {
				c.isInitialized() && (d.i("Ending session."), s.stopEventQueue(), c.isEnabled() && c.sessionIsStarted() && (m.addSessionEndEvent(), c.instance.sessionStart = 0))
			}, s.stopEventQueue = function() {
				s.instance.keepRunning = !1
			}, s.ignoreTimer = function(a) {
				a in s.instance.id2TimedBlockMap && (s.instance.id2TimedBlockMap[a].ignore = !0)
			}, s.setEventProcessInterval = function(a) {
				0 < a && (s.ProcessEventsIntervalInSeconds = a)
			}, s.prototype.addTimedBlock = function(a) {
				this.blocks.enqueue(a.deadline.getTime(), a)
			}, s.run = function() {
				clearTimeout(s.runTimeoutId);
				try {
					for (var a; a = s.getNextBlock();)
						if (!a.ignore)
							if (a.async) {
								if (!a.running) {
									a.running = !0, a.block();
									break
								}
							} else a.block();
					return void(s.runTimeoutId = setTimeout(s.run, s.ThreadWaitTimeInMs))
				} catch (a) {
					d.e("Error on GA thread"), d.e(a.stack)
				}
			}, s.startThread = function() {
				s.runTimeoutId = setTimeout(s.run, 0)
			}, s.getNextBlock = function() {
				var a = new Date;
				return s.instance.blocks.hasItems() && s.instance.blocks.peek().deadline.getTime() <= a.getTime() ? s.instance.blocks.peek().async && s.instance.blocks.peek().running ? s.instance.blocks.peek() : s.instance.blocks.dequeue() : null
			}, s.processEventQueue = function() {
				m.processEvents("", !0), s.instance.keepRunning ? s.scheduleTimer(s.ProcessEventsIntervalInSeconds, s.processEventQueue) : s.instance.isRunning = !1
			}, s.instance = new s, s.ThreadWaitTimeInMs = 1e3, s.ProcessEventsIntervalInSeconds = 8, p = s, o.GAThreading = p
		}(d = d || {}),
		function(a) {
			var o = a.threading.GAThreading,
				d = a.logging.GALogger,
				c = a.store.GAStore,
				m = a.state.GAState,
				p = a.http.GAHTTPApi,
				A = a.device.GADevice,
				h = a.validators.GAValidator,
				S = a.http.EGAHTTPApiResponse,
				b = a.utilities.GAUtilities,
				T = a.events.GAEvents,
				G = (E.getGlobalObject = function() {
					return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0
				}, E.init = function() {
					if (A.touch(), E.methodMap.configureAvailableCustomDimensions01 = E.configureAvailableCustomDimensions01, E.methodMap.configureAvailableCustomDimensions02 = E.configureAvailableCustomDimensions02, E.methodMap.configureAvailableCustomDimensions03 = E.configureAvailableCustomDimensions03, E.methodMap.configureAvailableResourceCurrencies = E.configureAvailableResourceCurrencies, E.methodMap.configureAvailableResourceItemTypes = E.configureAvailableResourceItemTypes, E.methodMap.configureBuild = E.configureBuild, E.methodMap.configureSdkGameEngineVersion = E.configureSdkGameEngineVersion, E.methodMap.configureGameEngineVersion = E.configureGameEngineVersion, E.methodMap.configureUserId = E.configureUserId, E.methodMap.initialize = E.initialize, E.methodMap.addBusinessEvent = E.addBusinessEvent, E.methodMap.addResourceEvent = E.addResourceEvent, E.methodMap.addProgressionEvent = E.addProgressionEvent, E.methodMap.addDesignEvent = E.addDesignEvent, E.methodMap.addErrorEvent = E.addErrorEvent, E.methodMap.addAdEvent = E.addAdEvent, E.methodMap.setEnabledInfoLog = E.setEnabledInfoLog, E.methodMap.setEnabledVerboseLog = E.setEnabledVerboseLog, E.methodMap.setEnabledManualSessionHandling = E.setEnabledManualSessionHandling, E.methodMap.setEnabledEventSubmission = E.setEnabledEventSubmission, E.methodMap.setCustomDimension01 = E.setCustomDimension01, E.methodMap.setCustomDimension02 = E.setCustomDimension02, E.methodMap.setCustomDimension03 = E.setCustomDimension03, E.methodMap.setGlobalCustomEventFields = E.setGlobalCustomEventFields, E.methodMap.setEventProcessInterval = E.setEventProcessInterval, E.methodMap.startSession = E.startSession, E.methodMap.endSession = E.endSession, E.methodMap.onStop = E.onStop, E.methodMap.onResume = E.onResume, E.methodMap.addRemoteConfigsListener = E.addRemoteConfigsListener, E.methodMap.removeRemoteConfigsListener = E.removeRemoteConfigsListener, E.methodMap.getRemoteConfigsValueAsString = E.getRemoteConfigsValueAsString, E.methodMap.isRemoteConfigsReady = E.isRemoteConfigsReady, E.methodMap.getRemoteConfigsContentAsString = E.getRemoteConfigsContentAsString, E.methodMap.addOnBeforeUnloadListener = E.addOnBeforeUnloadListener, E.methodMap.removeOnBeforeUnloadListener = E.removeOnBeforeUnloadListener, void 0 !== E.getGlobalObject() && void 0 !== E.getGlobalObject().GameAnalytics && void 0 !== E.getGlobalObject().GameAnalytics.q) {
						var a = E.getGlobalObject().GameAnalytics.q;
						for (var d in a) E.gaCommand.apply(null, a[d])
					}
					window.addEventListener("beforeunload", (function(a) {
						console.log("addEventListener unload"), m.instance.isUnloading = !0, m.notifyBeforeUnloadListeners(), o.endSessionAndStopQueue(), m.instance.isUnloading = !1
					}))
				}, E.gaCommand = function() {
					for (var o = [], d = 0; d < arguments.length; d++) o[d] = arguments[d];
					0 < o.length && o[0] in a.GameAnalytics.methodMap && (1 < o.length ? a.GameAnalytics.methodMap[o[0]].apply(null, Array.prototype.slice.call(o, 1)) : a.GameAnalytics.methodMap[o[0]]())
				}, E.configureAvailableCustomDimensions01 = function(a) {
					void 0 === a && (a = []), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("Available custom dimensions must be set before SDK is initialized") : m.setAvailableCustomDimensions01(a)
					}))
				}, E.configureAvailableCustomDimensions02 = function(a) {
					void 0 === a && (a = []), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("Available custom dimensions must be set before SDK is initialized") : m.setAvailableCustomDimensions02(a)
					}))
				}, E.configureAvailableCustomDimensions03 = function(a) {
					void 0 === a && (a = []), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("Available custom dimensions must be set before SDK is initialized") : m.setAvailableCustomDimensions03(a)
					}))
				}, E.configureAvailableResourceCurrencies = function(a) {
					void 0 === a && (a = []), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("Available resource currencies must be set before SDK is initialized") : m.setAvailableResourceCurrencies(a)
					}))
				}, E.configureAvailableResourceItemTypes = function(a) {
					void 0 === a && (a = []), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("Available resource item types must be set before SDK is initialized") : m.setAvailableResourceItemTypes(a)
					}))
				}, E.configureBuild = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("Build version must be set before SDK is initialized.") : h.validateBuild(a) ? m.setBuild(a) : d.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + a)
					}))
				}, E.configureSdkGameEngineVersion = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) || (h.validateSdkWrapperVersion(a) ? A.sdkGameEngineVersion = a : d.i("Validation fail - configure sdk version: Sdk version not supported. String: " + a))
					}))
				}, E.configureGameEngineVersion = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) || (h.validateEngineVersion(a) ? A.gameEngineVersion = a : d.i("Validation fail - configure game engine version: Game engine version not supported. String: " + a))
					}))
				}, E.configureUserId = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !1) ? d.w("A custom user id must be set before SDK is initialized.") : h.validateUserId(a) ? m.setUserId(a) : d.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + a)
					}))
				}, E.initialize = function(a, c) {
					void 0 === a && (a = ""), void 0 === c && (c = ""), A.updateConnectionType();
					var p = o.createTimedBlock();
					p.async = !0, E.initTimedBlockId = p.id, p.block = function() {
						E.isSdkReady(!0, !1) ? d.w("SDK already initialized. Can only be called once.") : h.validateKeys(a, c) ? (m.setKeys(a, c), E.internalInitialize()) : d.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + a + ", secretKey: " + c)
					}, o.performTimedBlockOnGAThread(p)
				}, E.addBusinessEvent = function(a, d, c, p, h, S, b) {
					if (void 0 === a && (a = ""), void 0 === d && (d = 0), void 0 === c && (c = ""), void 0 === p && (p = ""), void 0 === h && (h = ""), void 0 === S && (S = {}), void 0 === b && (b = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add business event")) return;
						T.addBusinessEvent(a, d, c, p, h, S, b)
					} else o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !0, "Could not add business event") && T.addBusinessEvent(a, d, c, p, h, S, b)
					}))
				}, E.addResourceEvent = function(d, c, p, h, S, b, G) {
					if (void 0 === d && (d = a.EGAResourceFlowType.Undefined), void 0 === c && (c = ""), void 0 === p && (p = 0), void 0 === h && (h = ""), void 0 === S && (S = ""), void 0 === b && (b = {}), void 0 === G && (G = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add resource event")) return;
						T.addResourceEvent(d, c, p, h, S, b, G)
					} else o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !0, "Could not add resource event") && T.addResourceEvent(d, c, p, h, S, b, G)
					}))
				}, E.addProgressionEvent = function(d, c, p, h, S, b, G) {
					if (void 0 === d && (d = a.EGAProgressionStatus.Undefined), void 0 === c && (c = ""), void 0 === p && (p = ""), void 0 === h && (h = ""), void 0 === b && (b = {}), void 0 === G && (G = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add progression event")) return;
						var I = "number" == typeof S;
						T.addProgressionEvent(d, c, p, h, I ? S : 0, I, b, G)
					} else o.performTaskOnGAThread((function() {
						if (E.isSdkReady(!0, !0, "Could not add progression event")) {
							var a = "number" == typeof S;
							T.addProgressionEvent(d, c, p, h, a ? S : 0, a, b, G)
						}
					}))
				}, E.addDesignEvent = function(a, d, c, p) {
					if (void 0 === c && (c = {}), void 0 === p && (p = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add design event")) return;
						var h = "number" == typeof d;
						T.addDesignEvent(a, h ? d : 0, h, c, p)
					} else o.performTaskOnGAThread((function() {
						if (E.isSdkReady(!0, !0, "Could not add design event")) {
							var o = "number" == typeof d;
							T.addDesignEvent(a, o ? d : 0, o, c, p)
						}
					}))
				}, E.addErrorEvent = function(d, c, p, h) {
					if (void 0 === d && (d = a.EGAErrorSeverity.Undefined), void 0 === c && (c = ""), void 0 === p && (p = {}), void 0 === h && (h = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add error event")) return;
						T.addErrorEvent(d, c, p, h)
					} else o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !0, "Could not add error event") && T.addErrorEvent(d, c, p, h)
					}))
				}, E.addAdEventWithNoAdReason = function(d, c, p, h, S, b, G) {
					if (void 0 === d && (d = a.EGAAdAction.Undefined), void 0 === c && (c = a.EGAAdType.Undefined), void 0 === p && (p = ""), void 0 === h && (h = ""), void 0 === S && (S = a.EGAAdError.Undefined), void 0 === b && (b = {}), void 0 === G && (G = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add ad event")) return;
						T.addAdEvent(d, c, p, h, S, 0, !1, b, G)
					} else o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !0, "Could not add ad event") && T.addAdEvent(d, c, p, h, S, 0, !1, b, G)
					}))
				}, E.addAdEventWithDuration = function(d, c, p, h, S, b, G) {
					if (void 0 === d && (d = a.EGAAdAction.Undefined), void 0 === c && (c = a.EGAAdType.Undefined), void 0 === p && (p = ""), void 0 === h && (h = ""), void 0 === S && (S = 0), void 0 === b && (b = {}), void 0 === G && (G = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add ad event")) return;
						T.addAdEvent(d, c, p, h, a.EGAAdError.Undefined, S, !0, b, G)
					} else o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !0, "Could not add ad event") && T.addAdEvent(d, c, p, h, a.EGAAdError.Undefined, S, !0, b, G)
					}))
				}, E.addAdEvent = function(d, c, p, h, S, b) {
					if (void 0 === d && (d = a.EGAAdAction.Undefined), void 0 === c && (c = a.EGAAdType.Undefined), void 0 === p && (p = ""), void 0 === h && (h = ""), void 0 === S && (S = {}), void 0 === b && (b = !1), A.updateConnectionType(), m.instance.isUnloading) {
						if (!E.isSdkReady(!0, !0, "Could not add ad event")) return;
						T.addAdEvent(d, c, p, h, a.EGAAdError.Undefined, 0, !1, S, b)
					} else o.performTaskOnGAThread((function() {
						E.isSdkReady(!0, !0, "Could not add ad event") && T.addAdEvent(d, c, p, h, a.EGAAdError.Undefined, 0, !1, S, b)
					}))
				}, E.setEnabledInfoLog = function(a) {
					void 0 === a && (a = !1), o.performTaskOnGAThread((function() {
						a ? (d.setInfoLog(a), d.i("Info logging enabled")) : (d.i("Info logging disabled"), d.setInfoLog(a))
					}))
				}, E.setEnabledVerboseLog = function(a) {
					void 0 === a && (a = !1), o.performTaskOnGAThread((function() {
						a ? (d.setVerboseLog(a), d.i("Verbose logging enabled")) : (d.i("Verbose logging disabled"), d.setVerboseLog(a))
					}))
				}, E.setEnabledManualSessionHandling = function(a) {
					void 0 === a && (a = !1), o.performTaskOnGAThread((function() {
						m.setManualSessionHandling(a)
					}))
				}, E.setEnabledEventSubmission = function(a) {
					void 0 === a && (a = !1), o.performTaskOnGAThread((function() {
						a ? (m.setEnabledEventSubmission(a), d.i("Event submission enabled")) : (d.i("Event submission disabled"), m.setEnabledEventSubmission(a))
					}))
				}, E.setCustomDimension01 = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						h.validateDimension01(a, m.getAvailableCustomDimensions01()) ? m.setCustomDimension01(a) : d.w("Could not set custom01 dimension value to '" + a + "'. Value not found in available custom01 dimension values")
					}))
				}, E.setCustomDimension02 = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						h.validateDimension02(a, m.getAvailableCustomDimensions02()) ? m.setCustomDimension02(a) : d.w("Could not set custom02 dimension value to '" + a + "'. Value not found in available custom02 dimension values")
					}))
				}, E.setCustomDimension03 = function(a) {
					void 0 === a && (a = ""), o.performTaskOnGAThread((function() {
						h.validateDimension03(a, m.getAvailableCustomDimensions03()) ? m.setCustomDimension03(a) : d.w("Could not set custom03 dimension value to '" + a + "'. Value not found in available custom03 dimension values")
					}))
				}, E.setGlobalCustomEventFields = function(a) {
					void 0 === a && (a = {}), o.performTaskOnGAThread((function() {
						d.i("Set global custom event fields: " + JSON.stringify(a)), m.instance.currentGlobalCustomEventFields = a
					}))
				}, E.setEventProcessInterval = function(a) {
					o.performTaskOnGAThread((function() {
						o.setEventProcessInterval(a)
					}))
				}, E.startSession = function() {
					if (m.isInitialized()) {
						var a = o.createTimedBlock();
						a.async = !0, E.initTimedBlockId = a.id, a.block = function() {
							m.isEnabled() && m.sessionIsStarted() && o.endSessionAndStopQueue(), E.resumeSessionAndStartQueue()
						}, o.performTimedBlockOnGAThread(a)
					}
				}, E.endSession = function() {
					E.onStop()
				}, E.onStop = function() {
					o.performTaskOnGAThread((function() {
						try {
							o.endSessionAndStopQueue()
						} catch (a) {}
					}))
				}, E.onResume = function() {
					var a = o.createTimedBlock();
					a.async = !0, E.initTimedBlockId = a.id, a.block = function() {
						E.resumeSessionAndStartQueue()
					}, o.performTimedBlockOnGAThread(a)
				}, E.getRemoteConfigsValueAsString = function(a, o) {
					return void 0 === o && (o = null), m.getConfigurationStringValue(a, o)
				}, E.isRemoteConfigsReady = function() {
					return m.isRemoteConfigsReady()
				}, E.addRemoteConfigsListener = function(a) {
					m.addRemoteConfigsListener(a)
				}, E.removeRemoteConfigsListener = function(a) {
					m.removeRemoteConfigsListener(a)
				}, E.getRemoteConfigsContentAsString = function() {
					return m.getRemoteConfigsContentAsString()
				}, E.getABTestingId = function() {
					return m.getABTestingId()
				}, E.getABTestingVariantId = function() {
					return m.getABTestingVariantId()
				}, E.addOnBeforeUnloadListener = function(a) {
					m.addOnBeforeUnloadListener(a)
				}, E.removeOnBeforeUnloadListener = function(a) {
					m.removeOnBeforeUnloadListener(a)
				}, E.internalInitialize = function() {
					m.ensurePersistedStates(), c.setItem(m.getGameKey(), m.DefaultUserIdKey, m.getDefaultId()), m.setInitialized(!0), E.newSession(), m.isEnabled() && o.ensureEventQueueIsRunning()
				}, E.newSession = function() {
					d.i("Starting a new session."), m.validateAndFixCurrentDimensions(), p.instance.requestInit(m.instance.configsHash, E.startNewSessionCallback)
				}, E.startNewSessionCallback = function(a, p) {
					if (a !== S.Ok && a !== S.Created || !p) a == S.Unauthorized ? (d.w("Initialize SDK failed - Unauthorized"), m.instance.initAuthorized = !1) : (a === S.NoResponse || a === S.RequestTimeout ? d.i("Init call (session start) failed - no response. Could be offline or timeout.") : a === S.BadResponse || a === S.JsonEncodeFailed || a === S.JsonDecodeFailed ? d.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.") : a !== S.BadRequest && a !== S.UnknownResponseCode || d.i("Init call (session start) failed - bad request or unknown response."), null == m.instance.sdkConfig ? null != m.instance.sdkConfigCached ? (d.i("Init call (session start) failed - using cached init values."), m.instance.sdkConfig = m.instance.sdkConfigCached) : (d.i("Init call (session start) failed - using default init values."), m.instance.sdkConfig = m.instance.sdkConfigDefault) : d.i("Init call (session start) failed - using cached init values."), m.instance.initAuthorized = !0);
					else {
						var A = 0;
						if (p.server_ts) {
							var h = p.server_ts;
							A = m.calculateServerTimeOffset(h)
						}
						if (p.time_offset = A, a != S.Created) {
							var G = m.getSdkConfig();
							G.configs && (p.configs = G.configs), G.configs_hash && (p.configs_hash = G.configs_hash), G.ab_id && (p.ab_id = G.ab_id), G.ab_variant_id && (p.ab_variant_id = G.ab_variant_id)
						}
						m.instance.configsHash = p.configs_hash ? p.configs_hash : "", m.instance.abId = p.ab_id ? p.ab_id : "", m.instance.abVariantId = p.ab_variant_id ? p.ab_variant_id : "", c.setItem(m.getGameKey(), m.SdkConfigCachedKey, b.encode64(JSON.stringify(p))), m.instance.sdkConfigCached = p, m.instance.sdkConfig = p, m.instance.initAuthorized = !0
					}
					if (m.instance.clientServerTimeOffset = m.getSdkConfig().time_offset ? m.getSdkConfig().time_offset : 0, m.populateConfigurations(m.getSdkConfig()), !m.isEnabled()) return d.w("Could not start session: SDK is disabled."), void o.stopEventQueue();
					o.ensureEventQueueIsRunning();
					var I = b.createGuid();
					m.instance.sessionId = I, m.instance.sessionStart = m.getClientTsAdjusted(), T.addSessionStartEvent();
					var k = o.getTimedBlockById(E.initTimedBlockId);
					null != k && (k.running = !1), E.initTimedBlockId = -1
				}, E.resumeSessionAndStartQueue = function() {
					m.isInitialized() && (d.i("Resuming session."), m.sessionIsStarted() || E.newSession())
				}, E.isSdkReady = function(a, o, c) {
					return void 0 === o && (o = !0), void 0 === c && (c = ""), c && (c += ": "), a && !m.isInitialized() ? (o && d.w(c + "SDK is not initialized"), !1) : a && !m.isEnabled() ? (o && d.w(c + "SDK is disabled"), !1) : !(a && !m.sessionIsStarted() && (o && d.w(c + "Session has not started yet"), 1))
				}, E.initTimedBlockId = -1, E.methodMap = {}, E);

			function E() {}
			a.GameAnalytics = G
		}(d = d || {}), d.GameAnalytics.init();
	var _ = d.GameAnalytics.gaCommand;
	a.gameanalytics = d, a.GameAnalytics = _
}(this);
var GaSdk = pc.createScript("gaSdk");
GaSdk.attributes.add("buildid", {
	type: "string",
	title: "Build ID"
}), GaSdk.prototype.initialize = function() {
	var a, t, e, i, n, s;
	a = window, t = document, n = "script", a[s = "GameAnalytics"] = a[s] || function() {
		(a[s].q = a[s].q || []).push(arguments)
	}, e = t.createElement(n), i = t.getElementsByTagName(n)[0], e.async = 1, e.src = "http://download.gameanalytics.com/js/GameAnalytics-[VERSION].min.js", /* i.parentNode.insertBefore(e, i), */ GameAnalytics("setEnabledInfoLog", !0), gameanalytics.GameAnalytics.configureBuild(this.buildid), GameAnalytics("initialize", "82eb62f649816b9a46a74d2b2aa52756", "ffe02b54ff76113d1031602acf3c0c1beee35475"), 0 == this.app.lastCheckpointID && gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Start, "world_1", "checkpoint_0")
};
var GameController = pc.createScript("gameController");
GameController.attributes.add("variantA", {
	type: "entity",
	title: "Variant A"
}), GameController.attributes.add("variantB", {
	type: "entity",
	title: "Variant B"
}), GameController.prototype.initialize = function() {
	this.app.isPaused = !1, localStorage.getItem("lastCheckpointID") ? this.app.lastCheckpointID = Number(localStorage.getItem("lastCheckpointID")) : this.app.lastCheckpointID = 0, this.app.on("death", this.onDeath, this), this.app.on("respawn", this.onRespawn, this), this.app.on("rewardRespawn", this.onRespawn, this), this.app.on("ysdkLoaded", this.onYsdkLoaded, this), this.app.on("flagLoaded", this.onFlagLoaded, this), this.app.on("restart", this.onRestart, this), window.addEventListener("resize", this.onResize.bind(this)), window.addEventListener("blur", this.onBlur.bind(this)), window.addEventListener("focus", this.onFocus.bind(this)), "hidden" in document && document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this))
}, GameController.prototype.onFlagLoaded = function() {}, GameController.prototype.onRestart = function() {
	this.app.lastCheckpointID = 0
}, GameController.prototype.onVisibilityChange = function() {
	document.hidden ? this.onBlur() : this.onFocus()
}, GameController.prototype.onYsdkLoaded = function() {
	"ru" == this.app.ysdk.environment.i18n.lang || "kz" == this.app.ysdk.environment.i18n.lang || "ua" == this.app.ysdk.environment.i18n.lang || "by" == this.app.ysdk.environment.i18n.lang ? this.app.i18n.locale = "ru-RU" : this.app.i18n.locale = "en-US", this.app.ysdk.features.LoadingAPI.ready()
}, GameController.prototype.onFocus = function() {
	this.app.fire("focus"), this.isPaused = !1
}, GameController.prototype.onBlur = function() {
	this.app.fire("blur"), this.isPaused = !0
}, GameController.prototype.onDeath = function() {
	this.app.isPaused = !0
}, GameController.prototype.onRespawn = function() {
	this.app.isPaused = !1
}, GameController.prototype.onResize = function() {
	this.app.fire("resize")
};
var CameraControl = pc.createScript("cameraControl");
CameraControl.attributes.add("distance", {
	type: "number",
	default: 5
}), CameraControl.attributes.add("sensitivity", {
	type: "number",
	default: .2
}), CameraControl.attributes.add("targetEntity", {
	type: "entity"
}), CameraControl.attributes.add("offsetY", {
	type: "number",
	default: 1.7
}), CameraControl.attributes.add("minAngleX", {
	type: "number",
	default: -90
}), CameraControl.attributes.add("maxAngleX", {
	type: "number",
	default: 90
}), CameraControl.attributes.add("initialAngleX", {
	type: "number",
	default: 20
}), CameraControl.attributes.add("initialAngleY", {
	type: "number",
	default: 180
}), CameraControl.prototype.postInitialize = function() {
	this.eulers = new pc.Vec3(this.initialAngleX, this.initialAngleY, 0), this.pr = this.app.graphicsDevice.maxPixelRatio, this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this), this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this), this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this), this.app.touch && (this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this)), this.app.mouse.disableContextMenu(), this.params = {
		touchID: 999,
		isActive: !1,
		startX: 0,
		startY: 0,
		offsetX: 0,
		offsetY: 0
	}
}, CameraControl.prototype.update = function(t) {
	if (!this.app.isPaused) {
		if (!this.targetEntity) return;
		var s = this.targetEntity.getPosition().clone();
		s.y += this.offsetY;
		var i = pc.math.DEG_TO_RAD * this.eulers.x,
			a = pc.math.DEG_TO_RAD * this.eulers.y,
			e = new pc.Vec3(s.x + this.distance * Math.sin(a) * Math.cos(i), s.y + this.distance * Math.sin(i), s.z + this.distance * Math.cos(a) * Math.cos(i));
		this.entity.setPosition(e), this.entity.lookAt(s)
	}
}, CameraControl.prototype.onMouseMove = function(t) {
	this.app.mouse.isPressed(pc.MOUSEBUTTON_RIGHT) && (this.eulers.y -= t.dx * this.sensitivity, this.eulers.x = pc.math.clamp(this.eulers.x + t.dy * this.sensitivity, this.minAngleX, this.maxAngleX))
}, CameraControl.prototype.onMouseDown = function(t) {
	this.app.isPaused || t.button === pc.MOUSEBUTTON_RIGHT && this.app.mouse.enablePointerLock()
}, CameraControl.prototype.onMouseUp = function(t) {
	t.button === pc.MOUSEBUTTON_RIGHT && this.app.mouse.disablePointerLock()
}, CameraControl.prototype.onTouchStart = function(t) {
	t.touches && t.touches.forEach((t => {
		if (t.x > this.app.graphicsDevice.width / 2 && !this.params.isActive) {
			this.params.isActive = !0;
			var s = t.x,
				i = t.y;
			this.params.startX = s, this.params.startY = i, this.params.touchID = t.id
		}
	}))
}, CameraControl.prototype.onTouchMove = function(t) {
	t.touches && t.touches.forEach((t => {
		if (t.id == this.params.touchID) {
			var s = t.x,
				i = t.y;
			this.params.offsetX = this.params.startX - s, this.params.offsetY = this.params.startY - i, this.eulers.y += this.params.offsetX * this.sensitivity, this.eulers.x = pc.math.clamp(this.eulers.x - this.params.offsetY * this.sensitivity, this.minAngleX, this.maxAngleX), this.params.startX = s, this.params.startY = i
		}
	}))
}, CameraControl.prototype.onTouchEnd = function(t) {
	t.changedTouches && t.changedTouches.forEach((t => {
		t.id == this.params.touchID && (this.params.isActive = !1, this.params.touchID = 999)
	}))
};
var Character = pc.createScript("character");
Character.attributes.add("model", {
	type: "entity",
	title: "Model"
}), Character.attributes.add("rotationSpeed", {
	type: "number",
	title: "Rotation Speed",
	default: 15
}), Character.attributes.add("jumpForce", {
	type: "number",
	title: "Jump Force",
	default: 8
}), Character.attributes.add("checkpoints", {
	type: "entity",
	title: "Checkpoints Pool"
}), Character.attributes.add("root", {
	type: "entity",
	title: "Root"
}), Character.prototype.initialize = function() {
	this.angle = this.model.getRotation().y, this.rb = this.entity.rigidbody, this.setLastCheckpoint(), this.respawn(), this.entity.collision.on("collisionstart", this.onCollisionStart, this)
}, Character.prototype.onCollisionStart = function(t) {
	this.isJumping = !1, this.model.anim.setBoolean("isJumping", !1)
}, Character.prototype.setLastCheckpoint = function() {
	var t = this.checkpoints.children[this.app.lastCheckpointID].getPosition().clone();
	t.y += .1, this.lastCheckpoint = t
}, Character.prototype.death = function() {
	this.rb.linearVelocity = pc.Vec3.ZERO, this.model.anim.setBoolean("isDeath", !0), gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Fail, "world_1", "checkpoint_" + this.app.lastCheckpointID)
}, Character.prototype.jump = function() {
	!this.isGrounded || this.isJumping || this.app.isPaused || (this.model.anim.setBoolean("isJumping", !0), this.isJumping = !0, this.rb.linearVelocity = new pc.Vec3(0, this.jumpForce, 0))
}, Character.prototype.respawn = function() {
	this.setLastCheckpoint(), this.colorTag = "White", this.changeColor(new pc.Color(.7, .7, .7)), this.rb.teleport(this.lastCheckpoint), this.rb.linearVelocity = pc.Vec3.ZERO, this.isJumping = !1, this.isGrounded = !0, this.model.anim.setBoolean("isDeath", !1)
}, Character.prototype.update = function(t) {
	this.isGrounded = this.checkGroundBelow(), this.model.anim.setBoolean("isGrounded", this.isGrounded), this.rotateModel(this.targetRotation, t)
}, Character.prototype.rotateModel = function(t, e) {
	if (this.model.anim.getBoolean("isMoving") && !this.app.isPaused) {
		const i = 90 - Math.atan2(t.z, t.x) * pc.math.RAD_TO_DEG;
		this.angle = pc.math.lerpAngle(this.angle, i, this.rotationSpeed * e) % 360, this.model.setEulerAngles(0, this.angle, 0)
	}
}, Character.prototype.updateTargetRotation = function(t) {
	this.targetRotation = t
}, Character.prototype.translateModel = function(t, e) {
	if (!this.app.isPaused) {
		const i = t.clone().normalize();
		this.rb.linearVelocity = new pc.Vec3(i.x * e, this.rb.linearVelocity.y, i.z * e), this.model.anim.setBoolean("isMoving", i.lengthSq() > 0)
	}
}, Character.prototype.changeColor = function(t, e) {
	var i = this.root.render.meshInstances[0].material;
	i.emissive.set(t.r, t.g, t.b), i.update(), this.colorTag = e
}, Character.prototype.checkColor = function(t) {
	this.colorTag != t && this.app.fire("death")
}, Character.prototype.checkGroundBelow = function() {
	var t = this.entity.getPosition().clone();
	t.x += .3, t.z += .3, t.y += .3;
	var e = t.clone();
	e.y -= .4;
	var i = this.entity.getPosition().clone();
	i.x -= .3, i.z += .3, i.y += .3;
	var o = i.clone();
	o.y -= .4;
	var a = this.entity.getPosition().clone();
	a.x += .3, a.z -= .3, a.y += .3;
	var s = a.clone();
	s.y -= .4;
	var r = this.entity.getPosition().clone();
	r.x += .3, r.z += .3, r.y += .3;
	var n = r.clone();
	n.y -= .4;
	var h = this.entity.getPosition().clone();
	h.y += .3;
	var c = h.clone();
	c.y -= .4;
	var p = this.app.systems.rigidbody.raycastFirst(h, c);
	if (p && p.entity.tags.has("Ground")) return !0;
	var l = this.app.systems.rigidbody.raycastFirst(t, e);
	if (l && l.entity.tags.has("Ground")) return !0;
	var d = this.app.systems.rigidbody.raycastFirst(i, o);
	if (d && d.entity.tags.has("Ground")) return !0;
	var y = this.app.systems.rigidbody.raycastFirst(a, s);
	if (y && y.entity.tags.has("Ground")) return !0;
	var u = this.app.systems.rigidbody.raycastFirst(r, n);
	return !(!u || !u.entity.tags.has("Ground"))
};
var PlayerActor = pc.createScript("playerActor");
PlayerActor.attributes.add("movementSpeed", {
	type: "number",
	default: 6.5,
	title: "Movement speed"
}), PlayerActor.attributes.add("jumpButton", {
	type: "entity",
	title: "Jump Button"
}), PlayerActor.attributes.add("camera", {
	type: "entity",
	title: "Camera"
}), PlayerActor.prototype.initialize = function() {
	this.character = this.entity.script.get("character"), this.animationComponent = this.character.model.anim, this.keys = {
		KeyW: 1,
		KeyS: -1,
		KeyA: -1,
		KeyD: 1,
		ArrowUp: 1,
		ArrowDown: -1,
		ArrowLeft: -1,
		ArrowRight: 1
	}, this.pressedKeys = {}, this.app.touch && (this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this), this.jumpButton.button.on(pc.EVENT_TOUCHSTART, this.onJumpClicked, this)), this.joystickParams = {
		isActive: !1,
		touchID: 0,
		startX: 0,
		startY: 0,
		offsetX: 0,
		offsetY: 0
	}, this.joyDir = new pc.Vec3(0, 0, 0), this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this), this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this)
}, PlayerActor.prototype.stopChar = function() {
	this.pressedKeys = {}, this.joyDir = new pc.Vec3(0, 0, 0)
}, PlayerActor.prototype.onKeyDown = function(t) {
	const e = t.event.code;
	e in this.keys && (this.pressedKeys[e] = 1), "Space" == e && this.character.jump()
}, PlayerActor.prototype.onKeyUp = function(t) {
	const e = t.event.code;
	e in this.keys && delete this.pressedKeys[e]
}, PlayerActor.prototype.update = function(t) {
	const e = this.getAxis(),
		o = this.camera.forward.clone(),
		s = this.camera.right.clone();
	o.y = 0, s.y = 0, o.normalize(), s.normalize();
	const i = new pc.Vec3(s.x * e.r + o.x * e.f, 0, s.z * e.r + o.z * e.f);
	this.character.updateTargetRotation(i), this.character.translateModel(i, this.movementSpeed)
}, PlayerActor.prototype.onJumpClicked = function() {
	this.character.jump()
}, PlayerActor.prototype.onTouchStart = function(t) {
	t.touches && t.touches.forEach((t => {
		t.x < this.app.graphicsDevice.width / 2 && !this.joystickParams.isActive && (this.joystickParams.isActive = !0, this.joystickParams.touchID = t.id, this.joystickParams.startX = t.x, this.joystickParams.startY = t.y)
	}))
}, PlayerActor.prototype.onTouchMove = function(t) {
	t.touches && this.joystickParams.isActive && t.touches.forEach((t => {
		if (t.id == this.joystickParams.touchID) {
			var e = t.x,
				o = t.y;
			this.joystickParams.offsetX = this.joystickParams.startX - e, this.joystickParams.offsetY = this.joystickParams.startY - o, this.joyDir = new pc.Vec3(-this.joystickParams.offsetX, 0, this.joystickParams.offsetY)
		}
	}))
}, PlayerActor.prototype.onTouchEnd = function(t) {
	t.changedTouches && t.changedTouches.forEach((t => {
		t.id == this.joystickParams.touchID && (this.joystickParams.isActive = !1, this.joyDir = new pc.Vec3(0, 0, 0))
	}))
}, PlayerActor.prototype.getAxis = function() {
	let t = {
		r: 0,
		f: 0
	};
	return t.f = this.getKey("KeyW") + this.getKey("KeyS") + this.getKey("ArrowUp") + this.getKey("ArrowDown") + this.joyDir.z, t.r = this.getKey("KeyA") + this.getKey("KeyD") + this.getKey("ArrowLeft") + this.getKey("ArrowRight") + this.joyDir.x, t
}, PlayerActor.prototype.getKey = function(t) {
	return this.pressedKeys[t] ? this.keys[t] : 0
};
var Checkpoint = pc.createScript("checkpoint");
Checkpoint.attributes.add("id", {
	type: "number",
	default: 0,
	title: "ID"
}), Checkpoint.prototype.initialize = function() {
	this.app.lastCheckpointID >= this.id ? this.isActive = !0 : this.isActive = !1, this.entity.collision.on("triggerenter", this.onTriggerEnter, this), this.app.on("restart", (() => this.isActive = !1), this)
}, Checkpoint.prototype.onTriggerEnter = function() {
	this.isActive || (this.isActive = !0, this.app.lastCheckpointID = this.id, localStorage.setItem("lastCheckpointID", this.id), this.app.fire("goalCheckpoint"), gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Complete, "world_1", "checkpoint_" + (this.app.lastCheckpointID - 1)), gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Start, "world_1", "checkpoint_" + this.app.lastCheckpointID))
};
var DeathScreen = pc.createScript("deathScreen");
DeathScreen.attributes.add("dsEntity", {
	type: "entity",
	title: "Death Screen Entity"
}), DeathScreen.attributes.add("deathScreenBG", {
	type: "entity",
	title: "Death Screen BG"
}), DeathScreen.attributes.add("deathIcon", {
	type: "entity",
	title: "Death Icon"
}), DeathScreen.attributes.add("respawnButton", {
	type: "entity",
	title: "Respawn Button"
}), DeathScreen.attributes.add("skipButton", {
	type: "entity",
	title: "Skip Button"
}), DeathScreen.prototype.initialize = function() {
	this.respawnButton.element.on("click", this.onRespawnClick, this), this.skipButton.button.on("click", this.onSkipClick, this), this.app.on("death", this.show, this), this.app.on("respawn", this.hide, this), this.app.on("resize", this.setSize, this), this.setSize()
}, DeathScreen.prototype.show = function() {
	this.deathScreenBG.enabled = !0, this.dsEntity.enabled = !0, this.app.lastCheckpointID == this.app.root.findByName("CheckpointsPool").children.length - 1 && (this.skipButton.enabled = !1)
}, DeathScreen.prototype.hide = function() {
	this.deathScreenBG.enabled = !1, this.dsEntity.enabled = !1
}, DeathScreen.prototype.setSize = function() {
	this.deathScreenBG.element.width = this.app.graphicsDevice.width, this.deathScreenBG.element.height = this.app.graphicsDevice.height
}, DeathScreen.prototype.onRespawnClick = function() {
	this.app.fire("showFullscreen"), this.app.fire("respawn")
}, DeathScreen.prototype.onSkipClick = function() {
	console.info('222');
	this.app.fire("showRewarded")
};
var DeathTrigger = pc.createScript("deathTrigger");
DeathTrigger.prototype.initialize = function() {
	this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, DeathTrigger.prototype.onTriggerEnter = function(t) {
	t.tags.has("Player") && this.app.fire("death")
};
var Obstacle = pc.createScript("obstacle");
Obstacle.attributes.add("colorTag", {
	type: "string",
	title: "Color Tag"
}), Obstacle.prototype.initialize = function() {
	this.entity.collision.on("contact", this.onContact, this), this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, Obstacle.prototype.onContact = function(t) {
	t.other.tags.has("Player") && this.app.fire("obstacleContact", this.colorTag)
}, Obstacle.prototype.onTriggerEnter = function(t) {
	t.tags.has("Player") && this.app.fire("obstacleContact", this.colorTag)
};
var MobileUi = pc.createScript("mobileUi");
MobileUi.attributes.add("jumpButton", {
	type: "entity",
	title: "Jump Button"
}), MobileUi.attributes.add("mobileui", {
	type: "entity",
	title: "Mobile UI"
}), MobileUi.attributes.add("joystickBG", {
	type: "entity",
	title: "Joystick Background"
}), MobileUi.attributes.add("joystickEntity", {
	type: "entity",
	title: "Joystick"
}), MobileUi.attributes.add("radius", {
	type: "number",
	default: 60,
	title: "Radius"
}), MobileUi.prototype.initialize = function() {
	this.app.on("resize", this.onResize, this), this.app.on("blur", this.onBlur, this), this.onResize(), this.app.touch && (this.mobileui.enabled = !0, this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this)), this.joystickParams = {
		touchID: 0,
		isActive: !1,
		startX: 0,
		startY: 0,
		offsetX: 0,
		offsetY: 0
	}
}, MobileUi.prototype.onBlur = function() {
	this.joystickBG.enabled = !1, this.joystickParams.isActive = !1, this.joystickBG.setLocalPosition(0, 0, 0)
}, MobileUi.prototype.onTouchStart = function(t) {
	t.touches && t.touches.forEach((t => {
		t.x < this.app.graphicsDevice.width / 2 && !this.joystickParams.isActive && (this.joystickBG.enabled = !0, this.joystickParams.isActive = !0, this.joystickParams.touchID = t.id, this.joystickParams.startX = t.x, this.joystickParams.startY = t.y, this.joystickBG.setLocalPosition(t.x, -t.y, 0))
	}))
}, MobileUi.prototype.onTouchMove = function(t) {
	t.touches && this.joystickParams.isActive && t.touches.forEach((t => {
		if (t.id == this.joystickParams.touchID) {
			var i = t.x,
				s = t.y;
			if (this.joystickParams.offsetX = this.joystickParams.startX - i, this.joystickParams.offsetY = this.joystickParams.startY - s, Math.sqrt(this.joystickParams.offsetX * this.joystickParams.offsetX + this.joystickParams.offsetY * this.joystickParams.offsetY) > this.radius) {
				var o = Math.atan2(this.joystickParams.offsetY, this.joystickParams.offsetX);
				this.joystickParams.offsetX = Math.cos(o) * this.radius, this.joystickParams.offsetY = Math.sin(o) * this.radius
			}
			this.joystickEntity.setLocalPosition(-this.joystickParams.offsetX, this.joystickParams.offsetY, 0)
		}
	}))
}, MobileUi.prototype.onTouchEnd = function(t) {
	t.changedTouches && t.changedTouches.forEach((t => {
		t.id == this.joystickParams.touchID && (this.joystickBG.enabled = !1, this.joystickParams.isActive = !1, this.joystickEntity.setLocalPosition(0, 0, 0))
	}))
}, MobileUi.prototype.onResize = function() {
	var t;
	this.mobileui.element.width = this.app.graphicsDevice.width, this.mobileui.element.height = this.app.graphicsDevice.height, t = this.app.graphicsDevice.width < this.app.graphicsDevice.height ? this.app.graphicsDevice.width : this.app.graphicsDevice.height, this.jumpButton.element.height = t / 10 * 2.4, this.jumpButton.element.width = t / 10 * 2.4, this.joystickBG.element.height = t / 10 * 2.5, this.joystickBG.element.width = t / 10 * 2.5, this.joystickEntity.element.width = t / 10, this.joystickEntity.element.height = t / 10, this.jumpButton.setLocalPosition(-t / 10 * 1.3, t / 10 * 1.7, 0)
};
var ColorButton = pc.createScript("colorButton");
ColorButton.attributes.add("color", {
	type: "rgb",
	title: "Color"
}), ColorButton.attributes.add("colorTag", {
	type: "string",
	title: "Color Tag"
}), ColorButton.attributes.add("positionID", {
	type: "number",
	title: "Position ID"
}), ColorButton.prototype.initialize = function() {
	this.entity.element.on(pc.EVENT_MOUSEDOWN, this.onClick, this), this.entity.element.on(pc.EVENT_TOUCHSTART, this.onClick, this), this.setSize()
}, ColorButton.prototype.onClick = function() {
	this.app.fire("colorChanged", this.color, this.colorTag)
}, ColorButton.prototype.setSize = function() {
	this.entity.element.width = this.app.graphicsDevice.height / 7, this.entity.element.height = this.app.graphicsDevice.height / 7
};
var ColorButtons = pc.createScript("colorButtons");
ColorButtons.attributes.add("buttons", {
	type: "entity",
	title: "Buttons"
}), ColorButtons.prototype.initialize = function() {
	this.app.on("resize", this.setSize, this), this.app.on("death", this.hideButtons, this), this.app.on("respawn", this.showButtons, this), this.app.on("win", this.hideButtons, this), this.app.on("restart", this.onRestart, this), this.setSize()
}, ColorButtons.prototype.onRestart = function() {
	this.showButtons()
}, ColorButtons.prototype.setSize = function() {
	this.buttons.element.width = this.app.graphicsDevice.height / 7 * 6 + 50, this.buttons.element.height = this.app.graphicsDevice.height / 7, this.setPosition()
}, ColorButtons.prototype.setPosition = function() {
	var t = this.buttons.children;
	for (let o = 0; o < t.length; o++) t[o].setLocalPosition(o * (this.app.graphicsDevice.height / 7 + 10), 10, 0), t[o].script.get("colorButton").setSize()
}, ColorButtons.prototype.hideButtons = function() {
	this.buttons.enabled = !1
}, ColorButtons.prototype.showButtons = function() {
	this.buttons.enabled = !0
};
var PopIt = pc.createScript("popIt");
PopIt.prototype.initialize = function() {
	this.entity.collision.on("triggerenter", this.onTriggerEnter, this)
}, PopIt.prototype.onTriggerEnter = function(t) {
	t.tags.has("Player") && (this.entity.enabled = !1)
};
var Rotator = pc.createScript("rotator");
Rotator.attributes.add("rotationSpeed", {
	type: "vec3",
	default: [0, 0, 0],
	title: "Rotation Speed"
}), Rotator.prototype.initialize = function() {
	this.angle = this.entity.getLocalRotation().clone().y
}, Rotator.prototype.update = function(t) {
	this.angle += this.rotationSpeed.y * t, this.entity.setEulerAngles(0, this.angle, 0)
};
var Finish = pc.createScript("finish");
Finish.attributes.add("id", {
	type: "number",
	default: 0,
	title: "ID"
}), Finish.prototype.initialize = function() {
	this.isActive = !1, this.entity.collision.on("triggerenter", this.onTriggerEnter, this), this.app.on("restart", (() => this.isActive = !1), this)
}, Finish.prototype.onTriggerEnter = function() {
	this.isActive || (this.isActive = !0, this.app.lastCheckpointID = this.id, localStorage.setItem("lastCheckpointID", this.id), gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Complete, "world_1", "checkpoint_" + (this.app.lastCheckpointID - 1)), gameanalytics.GameAnalytics.addProgressionEvent(gameanalytics.EGAProgressionStatus.Start, "world_1", "checkpoint_" + this.app.lastCheckpointID), this.app.fire("goalCheckpoint"), this.app.fire("win"))
};
var WinScreen = pc.createScript("winScreen");
WinScreen.attributes.add("ws", {
	type: "entity",
	title: "Win Screen"
}), WinScreen.attributes.add("bg", {
	type: "entity",
	title: "Background"
}), WinScreen.attributes.add("restartButton", {
	type: "entity",
	title: "Restart Button"
}), WinScreen.prototype.initialize = function() {
	this.app.on("win", this.show, this), this.restartButton.button.on("click", this.onRestartClicked, this)
}, WinScreen.prototype.onRestartClicked = function() {
	this.hide(), localStorage.setItem("lastCheckpointID", 0), this.app.fire("restart")
}, WinScreen.prototype.show = function() {
	this.ws.enabled = !0, this.bg.enabled = !0
}, WinScreen.prototype.hide = function() {
	this.ws.enabled = !1, this.bg.enabled = !1
};
var PlayerEventHandler = pc.createScript("playerEventHandler");
PlayerEventHandler.prototype.initialize = function() {
	this.pa = this.entity.script.get("playerActor"), this.char = this.entity.script.get("character"), this.app.on("blur", this.onBlur, this), this.app.on("focus", this.onFocus, this), this.app.on("respawn", this.onRespawn, this), this.app.on("death", this.onDeath, this), this.app.on("obstacleContact", this.onContactObstacle, this), this.app.on("goalCheckpoint", this.onGoalCheckpoint, this), this.app.on("jump", this.onJump, this), this.app.on("colorChanged", this.onColorChanged, this), this.app.on("restart", this.onRestart, this)
}, PlayerEventHandler.prototype.onContactObstacle = function(t) {
	this.char.checkColor(t)
}, PlayerEventHandler.prototype.onColorChanged = function(t, n) {
	this.char.changeColor(t, n)
}, PlayerEventHandler.prototype.onBlur = function() {
	this.pa.stopChar()
}, PlayerEventHandler.prototype.onRestart = function() {
	this.char.respawn()
}, PlayerEventHandler.prototype.onFocus = function() {
	this.pa.stopChar()
}, PlayerEventHandler.prototype.onRespawn = function() {
	this.char.respawn()
}, PlayerEventHandler.prototype.onDeath = function() {
	this.char.death()
}, PlayerEventHandler.prototype.onGoalCheckpoint = function() {
	this.char.setLastCheckpoint()
}, PlayerEventHandler.prototype.onJump = function() {
	this.char.jump()
};
var UieventHandler = pc.createScript("uieventHandler");
UieventHandler.attributes.add("winScreen", {
	type: "entity",
	title: "Win Screen"
}), UieventHandler.attributes.add("deathScreen", {
	type: "entity",
	title: "Death Screen"
}), UieventHandler.prototype.initialize = function() {
	this.ws = this.winScreen.script.get("winScreen"), this.app.on("win", this.onWin, this), this.app.on("resize", this.onResize, this)
};
var MovingPlatform = pc.createScript("movingPlatform");
MovingPlatform.attributes.add("start", {
	type: "entity",
	title: "Start Point"
}), MovingPlatform.attributes.add("finish", {
	type: "entity",
	title: "Finish Point"
}), MovingPlatform.prototype.initialize = function() {}, MovingPlatform.prototype.update = function(t) {};
var Timer = pc.createScript("timer");
Timer.attributes.add("timerUI", {
	type: "entity",
	title: "Timer UI"
}), Timer.attributes.add("timeWinText", {
	type: "entity",
	title: "Time Win Text"
}), Timer.attributes.add("bestTimeText", {
	type: "entity",
	title: "Best Time Text"
}), Timer.prototype.initialize = function() {
	this.isActive = !1, window.addEventListener("beforeunload", this.saveTimer.bind(this)), this.app.on("restart", this.onRestart, this), 0 != this.app.lastCheckpointID ? (this.app.time = localStorage.getItem("timer"), console.log(this.app.time), this.timerUI.element.text = this.setText(this.app.time), this.continueTimer()) : this.app.time = 0, localStorage.getItem("bestTime") ? this.app.bestTime = localStorage.getItem("bestTime") : this.app.bestTime = 0, this.entity.collision.on("triggerenter", this.onTriggerEnter, this), this.app.on("win", this.onWin, this), this.app.on("restart", this.onRestart, this)
}, Timer.prototype.setText = function(t) {
	let e = Math.floor(t / 3600),
		i = Math.floor(t % 3600 / 60),
		s = Math.floor(t % 60);
	return `${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
}, Timer.prototype.onTriggerEnter = function() {
	this.continueTimer()
}, Timer.prototype.saveTimer = function() {
	localStorage.setItem("timer", this.app.time)
}, Timer.prototype.onRestart = function() {
	this.app.time = 0, this.timerUI.element.text = this.setText(this.app.time), this.isActive = !1
}, Timer.prototype.onWin = function() {
	clearInterval(this.app.timer), this.app.bestTime ? this.app.time < this.app.bestTime && (this.app.bestTime = this.app.time) : this.app.bestTime = this.app.time, localStorage.setItem("bestTime", this.app.bestTime), "ru" == this.app.ysdk.environment.i18n.lang || "kz" == this.app.ysdk.environment.i18n.lang || "ua" == this.app.ysdk.environment.i18n.lang || "by" == this.app.ysdk.environment.i18n.lang ? (this.timeWinText.element.text = "Время: " + this.setText(this.app.time), this.bestTimeText.element.text = "Лучшее: " + this.setText(this.app.bestTime)) : (this.timeWinText.element.text = "Time: " + this.setText(this.app.time), this.bestTimeText.element.text = "Best: " + this.setText(this.app.bestTime))
}, Timer.prototype.continueTimer = function() {
	this.isActive || (this.app.timer = setInterval((() => {
		this.app.time++, this.timerUI.element.text = this.setText(this.app.time)
	}), 1e3), this.isActive = !0)
};
var CheckpointText = pc.createScript("checkpointText");
CheckpointText.attributes.add("checkpoints", {
	type: "entity",
	title: "Checkpoints"
}), CheckpointText.attributes.add("cpText", {
	type: "entity",
	title: "Text"
}), CheckpointText.prototype.initialize = function() {
	this.cp = this.checkpoints.children, this.app.on("goalCheckpoint", this.setCheckpointText, this), this.app.on("restart", this.setCheckpointText, this), this.setCheckpointText()
}, CheckpointText.prototype.setCheckpointText = function() {
	this.cpText.element.text = this.app.lastCheckpointID + 1 + " / " + this.cp.length
};