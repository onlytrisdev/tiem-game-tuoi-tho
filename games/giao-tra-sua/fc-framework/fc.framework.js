window.fc = window.fc || {}, window.fc.framework = window.fc.framework || {},
	function(t, e) {
		"use strict";
		var s = fc.define.Event,
			i = fc.define.SceneId,
			n = fc.define.LoadingStep;
		class a {
			static hex_md5(t) {
				return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz))
			}
			static b64_md5(t) {
				return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz))
			}
			static str_md5(t) {
				return this.binl2str(this.core_md5(this.str2binl(t), t.length * this.chrsz))
			}
			static hex_hmac_md5(t, e) {
				return this.binl2hex(this.core_hmac_md5(t, e))
			}
			static b64_hmac_md5(t, e) {
				return this.binl2b64(this.core_hmac_md5(t, e))
			}
			static str_hmac_md5(t, e) {
				return this.binl2str(this.core_hmac_md5(t, e))
			}
			static hex_md5(t) {
				return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz))
			}
			static b64_md5(t) {
				return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz))
			}
			static str_md5(t) {
				return this.binl2str(this.core_md5(this.str2binl(t), t.length * this.chrsz))
			}
			static hex_hmac_md5(t, e) {
				return this.binl2hex(this.core_hmac_md5(t, e))
			}
			static b64_hmac_md5(t, e) {
				return this.binl2b64(this.core_hmac_md5(t, e))
			}
			static str_hmac_md5(t, e) {
				return this.binl2str(this.core_hmac_md5(t, e))
			}
			static core_md5(t, e) {
				t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
				for (var s = 1732584193, i = -271733879, n = -1732584194, a = 271733878, r = 0; r < t.length; r += 16) {
					var l = s,
						c = i,
						o = n,
						h = a;
					s = this.md5_ff(s, i, n, a, t[r + 0], 7, -680876936), a = this.md5_ff(a, s, i, n, t[r + 1], 12, -389564586), n = this.md5_ff(n, a, s, i, t[r + 2], 17, 606105819), i = this.md5_ff(i, n, a, s, t[r + 3], 22, -1044525330), s = this.md5_ff(s, i, n, a, t[r + 4], 7, -176418897), a = this.md5_ff(a, s, i, n, t[r + 5], 12, 1200080426), n = this.md5_ff(n, a, s, i, t[r + 6], 17, -1473231341), i = this.md5_ff(i, n, a, s, t[r + 7], 22, -45705983), s = this.md5_ff(s, i, n, a, t[r + 8], 7, 1770035416), a = this.md5_ff(a, s, i, n, t[r + 9], 12, -1958414417), n = this.md5_ff(n, a, s, i, t[r + 10], 17, -42063), i = this.md5_ff(i, n, a, s, t[r + 11], 22, -1990404162), s = this.md5_ff(s, i, n, a, t[r + 12], 7, 1804603682), a = this.md5_ff(a, s, i, n, t[r + 13], 12, -40341101), n = this.md5_ff(n, a, s, i, t[r + 14], 17, -1502002290), i = this.md5_ff(i, n, a, s, t[r + 15], 22, 1236535329), s = this.md5_gg(s, i, n, a, t[r + 1], 5, -165796510), a = this.md5_gg(a, s, i, n, t[r + 6], 9, -1069501632), n = this.md5_gg(n, a, s, i, t[r + 11], 14, 643717713), i = this.md5_gg(i, n, a, s, t[r + 0], 20, -373897302), s = this.md5_gg(s, i, n, a, t[r + 5], 5, -701558691), a = this.md5_gg(a, s, i, n, t[r + 10], 9, 38016083), n = this.md5_gg(n, a, s, i, t[r + 15], 14, -660478335), i = this.md5_gg(i, n, a, s, t[r + 4], 20, -405537848), s = this.md5_gg(s, i, n, a, t[r + 9], 5, 568446438), a = this.md5_gg(a, s, i, n, t[r + 14], 9, -1019803690), n = this.md5_gg(n, a, s, i, t[r + 3], 14, -187363961), i = this.md5_gg(i, n, a, s, t[r + 8], 20, 1163531501), s = this.md5_gg(s, i, n, a, t[r + 13], 5, -1444681467), a = this.md5_gg(a, s, i, n, t[r + 2], 9, -51403784), n = this.md5_gg(n, a, s, i, t[r + 7], 14, 1735328473), i = this.md5_gg(i, n, a, s, t[r + 12], 20, -1926607734), s = this.md5_hh(s, i, n, a, t[r + 5], 4, -378558), a = this.md5_hh(a, s, i, n, t[r + 8], 11, -2022574463), n = this.md5_hh(n, a, s, i, t[r + 11], 16, 1839030562), i = this.md5_hh(i, n, a, s, t[r + 14], 23, -35309556), s = this.md5_hh(s, i, n, a, t[r + 1], 4, -1530992060), a = this.md5_hh(a, s, i, n, t[r + 4], 11, 1272893353), n = this.md5_hh(n, a, s, i, t[r + 7], 16, -155497632), i = this.md5_hh(i, n, a, s, t[r + 10], 23, -1094730640), s = this.md5_hh(s, i, n, a, t[r + 13], 4, 681279174), a = this.md5_hh(a, s, i, n, t[r + 0], 11, -358537222), n = this.md5_hh(n, a, s, i, t[r + 3], 16, -722521979), i = this.md5_hh(i, n, a, s, t[r + 6], 23, 76029189), s = this.md5_hh(s, i, n, a, t[r + 9], 4, -640364487), a = this.md5_hh(a, s, i, n, t[r + 12], 11, -421815835), n = this.md5_hh(n, a, s, i, t[r + 15], 16, 530742520), i = this.md5_hh(i, n, a, s, t[r + 2], 23, -995338651), s = this.md5_ii(s, i, n, a, t[r + 0], 6, -198630844), a = this.md5_ii(a, s, i, n, t[r + 7], 10, 1126891415), n = this.md5_ii(n, a, s, i, t[r + 14], 15, -1416354905), i = this.md5_ii(i, n, a, s, t[r + 5], 21, -57434055), s = this.md5_ii(s, i, n, a, t[r + 12], 6, 1700485571), a = this.md5_ii(a, s, i, n, t[r + 3], 10, -1894986606), n = this.md5_ii(n, a, s, i, t[r + 10], 15, -1051523), i = this.md5_ii(i, n, a, s, t[r + 1], 21, -2054922799), s = this.md5_ii(s, i, n, a, t[r + 8], 6, 1873313359), a = this.md5_ii(a, s, i, n, t[r + 15], 10, -30611744), n = this.md5_ii(n, a, s, i, t[r + 6], 15, -1560198380), i = this.md5_ii(i, n, a, s, t[r + 13], 21, 1309151649), s = this.md5_ii(s, i, n, a, t[r + 4], 6, -145523070), a = this.md5_ii(a, s, i, n, t[r + 11], 10, -1120210379), n = this.md5_ii(n, a, s, i, t[r + 2], 15, 718787259), i = this.md5_ii(i, n, a, s, t[r + 9], 21, -343485551), s = this.safe_add(s, l), i = this.safe_add(i, c), n = this.safe_add(n, o), a = this.safe_add(a, h)
				}
				return Array(s, i, n, a)
			}
			static md5_cmn(t, e, s, i, n, a) {
				return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(i, a)), n), s)
			}
			static md5_ff(t, e, s, i, n, a, r) {
				return this.md5_cmn(e & s | ~e & i, t, e, n, a, r)
			}
			static md5_gg(t, e, s, i, n, a, r) {
				return this.md5_cmn(e & i | s & ~i, t, e, n, a, r)
			}
			static md5_hh(t, e, s, i, n, a, r) {
				return this.md5_cmn(e ^ s ^ i, t, e, n, a, r)
			}
			static md5_ii(t, e, s, i, n, a, r) {
				return this.md5_cmn(s ^ (e | ~i), t, e, n, a, r)
			}
			static core_hmac_md5(t, e) {
				var s = this.str2binl(t);
				s.length > 16 && (s = this.core_md5(s, t.length * this.chrsz));
				for (var i = Array(16), n = Array(16), a = 0; a < 16; a++) i[a] = 909522486 ^ s[a], n[a] = 1549556828 ^ s[a];
				var r = this.core_md5(i.concat(this.str2binl(e)), 512 + e.length * this.chrsz);
				return this.core_md5(n.concat(r), 640)
			}
			static safe_add(t, e) {
				var s = (65535 & t) + (65535 & e);
				return (t >> 16) + (e >> 16) + (s >> 16) << 16 | 65535 & s
			}
			static bit_rol(t, e) {
				return t << e | t >>> 32 - e
			}
			static str2binl(t) {
				for (var e = Array(), s = (1 << this.chrsz) - 1, i = 0; i < t.length * this.chrsz; i += this.chrsz) e[i >> 5] |= (t.charCodeAt(i / this.chrsz) & s) << i % 32;
				return e
			}
			static binl2str(t) {
				for (var e = "", s = (1 << this.chrsz) - 1, i = 0; i < 32 * t.length; i += this.chrsz) e += String.fromCharCode(t[i >> 5] >>> i % 32 & s);
				return e
			}
			static binl2hex(t) {
				for (var e = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", i = 0; i < 4 * t.length; i++) s += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
				return s
			}
			static binl2b64(t) {
				for (var e = "", s = 0; s < 4 * t.length; s += 3)
					for (var i = (t[s >> 2] >> s % 4 * 8 & 255) << 16 | (t[s + 1 >> 2] >> (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >> 2] >> (s + 2) % 4 * 8 & 255, n = 0; n < 4; n++) 8 * s + 6 * n > 32 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - n) & 63);
				return e
			}
		}
		a.hexcase = 0, a.b64pad = "", a.chrsz = 8, e.ILaya.regClass(a), e.ClassUtils.regClass("fc.framework.Md5Utils", a);
		class r {
			static compareVersion(t, e) {
				t = t.split("."), e = e.split(".");
				for (var s = Math.max(t.length, e.length); t.length < s;) t.push("0");
				for (; e.length < s;) e.push("0");
				for (var i = 0; i < s; i++) {
					var n = parseInt(t[i]),
						a = parseInt(e[i]);
					if (n > a) return 1;
					if (n < a) return -1
				}
				return 0
			}
			static isToday(t) {
				var e = new Date(Date.now()),
					s = new Date(t);
				return e.getFullYear() == s.getFullYear() && e.getMonth() == s.getMonth() && e.getDate() == s.getDate()
			}
			static random(t, e) {
				return Math.random() * (e - t) + t << 0
			}
			static isNumber(t) {
				return !(!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t))
			}
			static number2String(t, e) {
				var s = t.toString();
				if (s.length != e) {
					if (s.length > e) return s.substring(s.length - e);
					var i = "";
					for (let t = e - s.length; t > 0; t--) i = i.concat("0");
					return s = i.concat(s)
				}
			}
			static array2UrlStrArgs(t) {
				if (!t || 0 == t.length) return "";
				if (1 == t.length) return t[0];
				for (var e = t[0] + "=" + t[1], s = 2; s + 1 < t.length; s += 2) e += "&" + t[s] + "=" + t[s + 1];
				return e
			}
			static object2UrlStrArgs(t) {
				if (t) {
					var e = "";
					for (var s in t) t.hasOwnProperty(s) && (e += s + "=" + t[s] + "&");
					return e.substr(0, e.length - 1)
				}
				return ""
			}
			static isEmptyString(t) {
				return !t || 0 == t.length
			}
		}
		e.ILaya.regClass(r), e.ClassUtils.regClass("fc.framework.MiscUtils", r);
		class l {
			static get Instance() {
				return 0 == this.sInitialized && (this.sInitialized = !0, this.sInstance = fc.adapter.Channel), this.sInstance
			}
			static get bannerHeight() {
				return this.sInstance && this.sInstance.bannerHeight ? this.sInstance.bannerHeight : this.sBannerHeight
			}
			static init() {
				return this.callFunc("init")
			}
			static initAdService(t) {
				return this.sShareDesc = t.shareDesc ? t.shareDesc : "", this.sShareTitle = t.shareTitle ? t.shareTitle : "", this.sShareImgUrl = t.shareImgUrl ? t.shareImgUrl : "", this.callFunc("initAdService", null, [t])
			}
			static pushGameData(t) {
				return this.callFunc("pushGameData", null, [t])
			}
			static login(t, e, ...s) {
				return this.callFunc("login", e, [t, e, ...s])
			}
			static loadSubpackage(t, e, s, i) {
				return this.callFunc("loadSubpackage", s, [t, e, s, i])
			}
			static navigate2Mini(t, e, s, i, n, a) {
				return this.callFunc("navigate2Mini", n, [t, e, s, i, n, a])
			}
			static showModal(t, e, s, i, n, a, r) {
				return this.callFunc("showModal", a, [t, e, s, i, n, a, r])
			}
			static shareAppMessage(t, e, s) {
				var i = t || {};
				return i.title = i.title || this.sShareTitle, i.imageUrl = i.imageUrl || this.sShareImgUrl, i.desc = i.desc || this.sShareDesc, this.callFunc("shareAppMessage", s, [i, e, s])
			}
			static isShareEnable() {
				return this.Instance && this.Instance.shareAppMessage
			}
			static createGameBanner(t, e) {
				return this.callFunc("createGameBanner", t, [t, e])
			}
			static showGameBanner() {
				return this.callFunc("showGameBanner")
			}
			static hideGameBanner() {
				return this.callFunc("hideGameBanner")
			}
			static destroyGameBanner() {
				return this.callFunc("destroyGameBanner")
			}
			static createBannerAd(t) {
				return this.callFunc("createBannerAd", null, [t])
			}
			static showBannerAd() {
				return this.callFunc("showBannerAd")
			}
			static hideBannerAd() {
				return this.callFunc("hideBannerAd")
			}
			static destroyBannerAd() {
				return this.callFunc("destroyBannerAd")
			}
			static isBannerAdValid() {
				return this.callFunc("isBannerAdValid")
			}
			static createNativeAd(t) {
				return !!p.isGMMode || this.callFunc("createNativeAd", null, [t])
			}
			static loadNativeAd(t, e) {
				if (p.isGMMode) {
					return t.runWith({
						adList: [{
							adId: "8b92d67f-fee3-450a-96fe-81648ae42ecb",
							clickBtnTxt: "点击查看",
							creativeType: 6,
							desc: "渠道请勿使用",
							iconUrlList: [],
							icon: "",
							interactionType: 1,
							logoUrl: "",
							title: "拼多多",
							imgUrlList: [""]
						}],
						code: 0,
						msg: "ok"
					}), !0
				}
				return this.callFunc("loadNativeAd", e, [t, e])
			}
			static destroyNativeAd() {
				return this.callFunc("destroyNativeAd")
			}
			static createCustomAd(t, e, s, i, n) {
				return !!p.isGMMode || this.callFunc("createCustomAd", null, [t, e, s, i, n])
			}
			static loadCustomAd(t, e) {
				return !!p.isGMMode || this.callFunc("loadCustomAd", e, [t, e])
			}
			static destroyCustomAd() {
				return this.callFunc("destroyCustomAd")
			}
			static reportNativeAdShow(t) {
				return this.callFunc("reportNativeAdShow", null, [t])
			}
			static reportNativeAdClick(t) {
				return this.callFunc("reportNativeAdClick", null, [t])
			}
			static playVideo(t, s, i) {
				console.info('333',t, s, i);
				GVAdBreak(function(){
					t.run();
				})
			}
			static isVideoEnable() {
				return !!p.isGMMode || this.callFunc("isVideoEnable")
			}
			static loadInsertAd(t, e) {
				return this.callFunc("loadInsertAd", e, [t, e])
			}
			static showInsertAd(t, e) {
				return this.callFunc("showInsertAd", e, [t, e])
			}
			static isInsertAdEnable() {
				return this.callFunc("isInsertAdEnable")
			}
			static loadFullScreenAd(t, e) {
				return this.callFunc("loadFullScreenAd", t, [t, e])
			}
			static showFullScreenAd(t, e) {
				return this.callFunc("showFullScreenAd", e, [t, e])
			}
			static isFullScreenAdEnable() {
				return this.callFunc("isFullScreenAdEnable")
			}
			static isRecorderEnable() {
				return this.Instance && this.Instance.startRecorder
			}
			static startRecorder(t) {
				return this.callFunc("startRecorder", null, [t])
			}
			static stopRecorder(t) {
				return this.callFunc("stopRecorder", null, [t])
			}
			static pauseRecorder() {
				return this.callFunc("pauseRecorder")
			}
			static resumeRecorder() {
				return this.callFunc("resumeRecorder")
			}
			static canShareRecorder() {
				return this.callFunc("canShareRecorder")
			}
			static isGameBoxValid() {
				return this.callFunc("isGameBoxValid")
			}
			static showGameBox(t, e, s, i, n) {
				return this.callFunc("showGameBox", e, [t, e, s, i, n])
			}
			static hideGameBox() {
				return this.callFunc("hideGameBox")
			}
			static hasDesktopIcon(t) {
				return this.callFunc("hasDesktopIcon", null, [t])
			}
			static createDesktopIcon(t) {
				return this.callFunc("createDesktopIcon", null, [t])
			}
			static reportMonitor(t, e) {
				return this.callFunc("reportMonitor", null, [t, e])
			}
			static loadAd(t) {
				return this.callFunc("loadAd", null, [t])
			}
			static loadCfg(t) {
				return this.callFunc("loadCfg", null, [t])
			}
			static pay(t) {
				return this.callFunc("pay", null, [t])
			}
			static isRankListValid() {
				return this.callFunc("isRankListValid")
			}
			static showRankList(t) {
				return this.callFunc("showRankList", null, [t])
			}
			static updateMyRankData(t) {
				return this.callFunc("updateMyRankData", null, [t])
			}
			static exitApplication() {
				0 == this.callFunc("exitApplication") && (console.warn("framework.Channel window.conch.exit()"), window.conch && window.conch.exit())
			}
			static callFunc(t, s = null, i = null) {
				if (this.Instance && this.Instance[t]) {
					var n = this.Instance[t].apply(this.Instance, i);
					return !n && s && e.stage.frameOnce(1, this, function(t) {
						t.run()
					}, [s]), n
				}
				return s && e.stage.frameOnce(1, this, function(t) {
					t.run()
				}, [s]), console.warn("Channel", t, " is not exist"), !1
			}
		}
		l.sInstance = null, l.sInitialized = !1, l.sShareImgUrl = null, l.sShareTitle = "", l.sShareDesc = "", l.sBannerHeight = 228, l.EVENT_AD_VIDEO_PLAY = s.AD_VIDEO_PLAY, l.EVENT_AD_VIDEO_CLOSED = s.AD_VIDEO_CLOSED, e.ILaya.regClass(l), e.ClassUtils.regClass("fc.framework.Channel", l);
		class c {
			static get Instance() {
				return 0 == this.sInitialized && (this.sInitialized = !0, this.sInstance = fc.adapter.Joystick), this.sInstance
			}
			static init() {
				var t = e.Handler.create(this, function(t) {
						e.stage.event(s.JOYSTICK_KEY_PRESS, t)
					}, null, !1),
					i = e.Handler.create(this, function(t) {
						e.stage.event(s.JOYSTICK_KEY_DOWN, t)
					}, null, !1),
					n = e.Handler.create(this, function(t, i) {
						e.stage.event(s.JOYSTICK_KEY_UP, [t, i])
					}, null, !1);
				return this.callFunc("init", [t, i, n])
			}
			static callFunc(t, e = null) {
				return this.Instance && this.Instance[t] ? this.Instance[t].apply(this.Instance, e) : (console.warn("Joystick", t, " is not exist"), !1)
			}
		}
		c.sInstance = null, c.sInitialized = !1;
		class o {
			static get Instance() {
				return 0 == this.sInitialized && (this.sInitialized = !0, this.sInstance = fc.adapter.Device), this.sInstance
			}
			static init(t, e) {
				this.Instance && this.Instance.init && this.Instance.init(t, e)
			}
			static get deviceUid() {
				return this.Instance && null != this.Instance.deviceUid ? this.Instance.deviceUid : ""
			}
			static get statusBarHeight() {
				return this.Instance && null != this.Instance.statusBarHeight ? this.Instance.statusBarHeight : 0
			}
			static get screenWidth() {
				return this.Instance && null != this.Instance.screenWidth ? this.Instance.screenWidth : e.stage.width
			}
			static get screenHeight() {
				return this.Instance && null != this.Instance.screenHeight ? this.Instance.screenHeight : e.stage.height
			}
			static get soundVolume() {
				return this.Instance && null != this.Instance.soundVolume ? this.Instance.soundVolume : e.SoundManager.soundVolume
			}
			static set soundVolume(t) {
				this.Instance && null != this.Instance.soundVolume ? this.Instance.soundVolume = t : e.SoundManager.soundVolume = t
			}
			static get soundMuted() {
				return this.Instance && null != this.Instance.soundMuted ? this.Instance.soundMuted : e.SoundManager.soundMuted
			}
			static set soundMuted(t) {
				this.Instance && null != this.Instance.soundMuted ? this.Instance.soundMuted = t : e.SoundManager.soundMuted = t
			}
			static get musicVolume() {
				return this.Instance && null != this.Instance.musicVolume ? this.Instance.musicVolume : e.SoundManager.musicVolume
			}
			static set musicVolume(t) {
				this.Instance && null != this.Instance.musicVolume ? this.Instance.musicVolume = t : e.SoundManager.musicVolume = t
			}
			static get musicMuted() {
				return this.Instance && null != this.Instance.musicMuted ? this.Instance.musicMuted : e.SoundManager.musicMuted
			}
			static set musicMuted(t) {
				this.Instance && null != this.Instance.musicMuted ? this.Instance.musicMuted = t : e.SoundManager.musicMuted = t
			}
			static playSound(t, s, i) {
				this.Instance && this.Instance.playSound ? this.Instance.playSound(t, s, i) : e.SoundManager.playSound(t, s ? 0 : 1, i)
			}
			static stopSound(t) {
				this.Instance && this.Instance.stopSound ? this.Instance.stopSound(t) : e.SoundManager.stopSound(t)
			}
			static playMusic(t) {
				this.Instance && this.Instance.playMusic ? this.Instance.playMusic(t) : e.SoundManager.playMusic(t, 0)
			}
			static stopMusic(t) {
				null != t && (this.Instance && this.Instance.stopMusic ? this.Instance.stopMusic(t) : e.SoundManager.stopMusic(t))
			}
			static stopAll() {
				this.stopMusic(), this.stopAllSound()
			}
			static stopAllSound() {
				this.Instance && this.Instance.stopAllSound ? this.Instance.stopAllSound() : e.SoundManager.stopAllSound()
			}
			static vibrateShort() {
				0 != fc.framework.GameFrame.playerInfo.vibrate && (Date.now() - this.sShortVibrateTime < 100 || (this.sShortVibrateTime = Date.now(), this.Instance && this.Instance.vibrateShort ? this.Instance.vibrateShort() : "undefined" != typeof navigator && "vibrate" in navigator ? navigator.vibrate(500) : (console.log("vibrateShort"), console.warn("Device", "vibrateShort is not exist"))))
			}
			static vibrateLong() {
				0 != fc.framework.GameFrame.playerInfo.vibrate && (this.Instance && this.Instance.vibrateLong ? this.Instance.vibrateLong() : "undefined" != typeof navigator && "vibrate" in navigator ? navigator.vibrate(1e3) : (console.log("vibrateLong"), console.warn("Device", "vibrateLong is not exist")))
			}
			static isNetValid() {
				return this.Instance && this.Instance.isNetValid ? this.Instance.isNetValid() : navigator.onLine
			}
		}
		o.sShortVibrateTime = 0, o.sInstance = null, o.sInitialized = !1, e.ILaya.regClass(o), e.ClassUtils.regClass("fc.framework.Device", o);
		class h {
			static get curMusicUrl() {
				return this.sCurMusicUrl
			}
			static get IsBgmPlaying() {
				return this.sIsBgmPlaying
			}
			static get soundVolume() {
				return o.soundVolume
			}
			static set soundVolume(t) {
				o.soundVolume = t
			}
			static get soundMuted() {
				return o.soundMuted
			}
			static set soundMuted(t) {
				o.soundMuted = t
			}
			static get musicVolume() {
				return o.musicVolume
			}
			static set musicVolume(t) {
				o.musicVolume = t
			}
			static get musicMuted() {
				return o.musicMuted
			}
			static set musicMuted(t) {
				o.musicMuted = t
			}
			static playMusic(t) {
				null != t && 0 != fc.framework.GameFrame.playerInfo.music && (this.sCurMusicUrl == t && 0 != this.sIsBgmPlaying || (this.sCurMusicUrl != t && null != this.sCurMusicUrl && o.stopMusic(this.sCurMusicUrl), this.sCurMusicUrl = t, this.sIsBgmPlaying = !0, o.playMusic(this.sCurMusicUrl)))
			}
			static stopMusic() {
				o.stopMusic(this.sCurMusicUrl), this.sIsBgmPlaying = !1
			}
			static playSound(t, s) {
				0 != fc.framework.GameFrame.playerInfo.sound && (s && -1 != this.sLoopSounds.indexOf(t) || (s ? (this.sLoopSounds.push(t), o.playSound(t, !1, e.Handler.create(this, this.onSoundCompleted, [t]))) : o.playSound(t, !1, null)))
			}
			static stopSound(t) {
				var e = this.sLoopSounds.indexOf(t); - 1 != e && this.sLoopSounds.splice(e, 1), o.stopSound(t)
			}
			static onSoundCompleted(t) {
				-1 != this.sLoopSounds.indexOf(t) && o.playSound(t, 1, e.Handler.create(this, this.onSoundCompleted, [t]))
			}
			static stopAll() {
				this.stopMusic(), this.stopAllSound()
			}
			static stopAllSound() {
				o.stopAllSound(), this.sLoopSounds.splice(0)
			}
		}
		h.sCurMusicUrl = null, h.sIsBgmPlaying = !1, h.sLoopSounds = [], e.ILaya.regClass(h), e.ClassUtils.regClass("fc.framework.Audio", h);
		var d = class {
			static loadSubpackageAsyn(t, e, s, i) {
				l.loadSubpackage(t, e, s, i)
			}
			static loadFontAsyn(t, e, s) {
				t && t.loadFont(e, s)
			}
			static loadResAsyn(t, s, i) {
				e.loader.load(t, s, i)
			}
			static createResAsyn(t, s, i) {
				e.loader.create(t, s, i)
			}
		};
		class g {
			static registerSubPkg(t, e) {
				this.subPkgMap[t] = e
			}
			static get3dResUrl(t, e) {
				return e && this.subPkgMap[e] ? this.subPkgMap[e] + t : this.threeDResRootPath + t
			}
			static get3dPrefabUrl(t, e) {
				return e && this.subPkgMap[e] ? this.subPkgMap[e] + t + ".lh" : this.threeDResRootPath + t + ".lh"
			}
			static get3dSceneUrl(t, e) {
				return e && this.subPkgMap[e] ? this.subPkgMap[e] + t + ".ls" : this.threeDResRootPath + t + ".ls"
			}
			static get curScene3dUrl() {
				return this.curScene3d ? this.curScene3d.fc_res_url : null
			}
			static loadSubpackage(t, s, i) {
				d.loadSubpackageAsyn(t, i, s, e.Handler.create(this, function() {
					console.error("subPkgError:", t), s && s.run()
				}))
			}
			static loadFont(t, s, i) {
				var n = new e.BitmapFont;
				t instanceof Array ? d.loadFontAsyn(n, `font/${t[0]}.fnt`, e.Handler.create(this, this.onFontReady, [n, t[0], t, s, i])) : d.loadFontAsyn(n, `font/${t}.fnt`, e.Handler.create(this, this.onFontReady, [n, t, [], s, i]))
			}
			static onFontReady(t, s, i, n, a) {
				if (e.Text.registerBitmapFont(s, t), 0 == i.length) n && n.run(), a && a.runWith(1);
				else {
					var r = i.indexOf(s) + 1;
					r == i.length ? (n && n.run(), a && a.runWith(1)) : (d.loadFontAsyn(t, `font/${s[r]}.fnt`, e.Handler.create(this, this.onFontReady, [t, s[r], s, n, a])), a && a.runWith(r / i.length))
				}
			}
			static loadRes(t) {
				return e.loader.getRes(t)
			}
			static loadResAsyn(t, s, i, n) {
				if (n && !(this.loadedPkg.indexOf(n) >= 0)) return null == this.loadingPkg[n] ? (this.loadingPkg[n] = [{
					cb: s,
					step: i,
					res: t,
					type: "load"
				}], void d.loadSubpackageAsyn(n, null, e.Handler.create(this, this.onSubPkgReady, [n]), e.Handler.create(this, this.onSubPkgError, [n]))) : void this.loadingPkg[n].push({
					cb: s,
					step: i,
					res: t
				});
				d.loadResAsyn(t, s, i)
			}
			static load3dRes(t) {
				return e.loader.getRes(t)
			}
			static load3dResAsyn(t, s, i, n) {
				if (n && !(this.loadedPkg.indexOf(n) >= 0)) return null == this.loadingPkg[n] ? (this.loadingPkg[n] = [{
					cb: s,
					step: i,
					res: t,
					type: "create"
				}], void d.loadSubpackageAsyn(n, null, e.Handler.create(this, this.onSubPkgReady, [n]), e.Handler.create(this, this.onSubPkgError, [n]))) : void this.loadingPkg[n].push({
					cb: s,
					step: i,
					res: t
				});
				d.createResAsyn(t, s, i)
			}
			static loadSprite3d(t, e) {
				return this.load3dRes(this.get3dPrefabUrl(t, e))
			}
			static loadSprite3dAsyn(t, e, s, i) {
				if (t instanceof Array) {
					var n = [];
					for (let e = 0; e < t.length; e++) n.push(this.get3dPrefabUrl(t[e], i));
					this.load3dResAsyn(n, e, s, i)
				} else {
					var a = this.get3dPrefabUrl(t, i);
					this.load3dResAsyn(a, e, s, i)
				}
			}
			static loadScene3d(t, s) {
				var i = this.curScene3d;
				this.curScene3d = null;
				var n = null != i ? i.fc_scene_url : null;
				return i && (i.removeSelf(), i.destroy(), i = null), this.curScene3d = e.loader.getRes(this.get3dSceneUrl(t, s)), this.curScene3d && (this.curScene3d.fc_scene_url = t), n && this.unloadSceneRes(n), this.curScene3d
			}
			static loadScene3dAsyn(t, s, i, n) {
				if (n && !(this.loadedPkg.indexOf(n) >= 0)) return d.loadSubpackageAsyn(n, null, e.Handler.create(this, function() {
					this.initScene3d(t, s, i, n)
				}), e.Handler.create(this, function() {
					console.error("subPkgError:", n), console.error("loadSceneError:", t), this.initScene3d(t, s, i, n)
				})), null;
				this.initScene3d(t, s, i, n)
			}
			static initScene3d(t, s, i, n) {
				this.curDownloadSceneUrl != t && e.loader.cancelLoadByUrl(this.curDownloadSceneUrl), this.curDownloadSceneUrl = null;
				var a = this.curScene3d;
				this.curScene3d = null;
				var r = null != a ? a.fc_scene_url : null;
				a && (a.removeSelf(), a.destroy(), a = null, e.loader.clearRes(r));
				var l = this.get3dSceneUrl(t, n);
				if (this.curScene3d = e.loader.getRes(l), this.curScene3d) return this.curScene3d.fc_scene_url = t, r && this.unloadSceneRes(r), i && i.runWith(1), s && s.runWith(this.curScene3d), this.curScene3d;
				console.log("sceneUrl:" + l), this.curDownloadSceneUrl = l, d.createResAsyn(l, e.Handler.create(null, function(e) {
					g.curDownloadSceneUrl = null, g.curScene3d = e, g.curScene3d && (g.curScene3d.fc_scene_url = t), r && g.unloadSceneRes(r), s && s.runWith(g.curScene3d)
				}), i)
			}
			static unloadSceneRes(t, s) {
				e.loader.load(this.get3dResUrl(t + ".json", s), e.Handler.create(this, this.destroyScene3dRes, [t + ".json", s]))
			}
			static printSceneDependences(t, s) {
				e.loader.load(this.get3dResUrl(t + ".json", s), e.Handler.create(this, this.printScene3dRes, [t + ".json", s]))
			}
			static printScene3dRes(t, s) {
				var i = e.loader.getRes(this.get3dResUrl(t, s));
				if (null != i)
					for (var n = {}, a = i.length - 1; a > -1; a--) {
						var r = this.get3dResUrl(i[a], s),
							l = e.loader.getRes(r);
						null == l || (n[r] = l.referenceCount)
					}
			}
			static destroyScene3dRes(t, s) {
				var i = e.loader.getRes(this.get3dResUrl(t, s));
				if (null != i)
					for (var n = i.length - 1; n > -1; n--) {
						var a = this.get3dResUrl(i[n], s),
							r = e.loader.getRes(a);
						null == r || r.referenceCount > 0 || (r.destroy(), e.loader.clearRes(a))
					}
			}
			static onSubPkgReady(t) {
				console.log("onSubPkgReady:", t), this.loadedPkg.push(t);
				var e = this.loadingPkg[t];
				if (this.loadingPkg[t] = null, null != e)
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						"load" == s.type ? d.loadResAsyn(s.res, s.cb, s.step) : d.createResAsyn(s.res, s.cb, s.step)
					}
			}
			static onSubPkgError(t) {
				console.error("subPkgError:", t), this.loadedPkg.push(t);
				var e = this.loadingPkg[t];
				if (this.loadingPkg[t] = null, null != e)
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						"load" == s.type ? d.loadResAsyn(s.res, s.cb, s.step) : d.createResAsyn(s.res, s.cb, s.step)
					}
			}
		}
		g.curScene3d = null, g.curDownloadSceneUrl = null, g.threeDResRootPath = "3dres/Conventional/", g.loadedPkg = [], g.loadingPkg = {}, g.subPkgMap = {}, e.ILaya.regClass(g), e.ClassUtils.regClass("fc.framework.Resource", g);
		class u {
			static init(t, s) {
				this.viewCfg = t, this.sceneCfg = s, e.timer.loop(1e3, this, this.onTostMsgLoop)
			}
			static registerView(t, e) {
				this.viewCfg || (this.viewCfg = {}), this.viewCfg[t] = e
			}
			static registerScene(t, e, s) {
				this.sceneCfg || (this.sceneCfg = {}), this.sceneCfg[t] = {
					type: s,
					array: e
				}
			}
			static isSceneEmpty() {
				return 0 == this.sequence.length && 0 == this.openedList.length
			}
			static unloadScene() {
				this.sequence.splice(0), this.syncList.splice(0), this.taskList.splice(0);
				for (var t = Object.keys(this.viewCfg), s = 0; s < t.length; s++) this.closeView(t[s]);
				null != this.sceneId && e.timer.callLater(this, this.broadcastUnloadScene, [this.sceneId, null]), this.sceneId = null
			}
			static loadScene(t, s, i) {
				console.log("loadScene:" + t), this.sceneId = null, this.sequence.splice(0), this.syncList.splice(0), this.taskList.splice(0);
				for (var n = Object.keys(this.viewCfg), a = 0; a < n.length; a++) this.closeView(n[a]);
				if (this.sceneId = t, this.sceneData = s, this.sceneCb = i, null != this.sceneCfg) {
					var r = this.sceneCfg[t];
					if (null == r) return console.warn("[ViewManager]loadScene:", "sceneId is undefine,", t), void e.timer.callLater(this, this.broadcastUnloadScene, [t, i]);
					if (!r.array || 0 == r.array.length) return console.warn("[ViewManager]loadScene:", "array is invalid"), void e.timer.callLater(this, this.broadcastUnloadScene, [t, i]);
					if ("sequence" == r.type) {
						for (let t = 0; t < r.array.length; t++) {
							const e = r.array[t];
							e.checkCode && this.checkFun && !this.checkFun(e.checkCode) || this.sequence.push(e)
						}
						if (0 == this.sequence.length) return console.warn("[ViewManager]loadScene:", "no valid view"), void e.timer.callLater(this, this.broadcastUnloadScene, [t, i]);
						this.openView(this.sequence[0].viewId, this.sceneData, null)
					} else {
						for (let t = 0; t < r.array.length; t++) {
							const e = r.array[t];
							e.checkCode && this.checkFun && !this.checkFun(e.checkCode) || this.syncList.push(e)
						}
						if (0 == this.syncList.length) return console.warn("[ViewManager]loadScene:", "no valid view"), void e.timer.callLater(this, this.broadcastUnloadScene, [t, i]);
						this.openView(this.syncList[0].viewId, this.sceneData, null)
					}
					console.log("loadScene over")
				} else console.warn("[ViewManager]loadScene:", "sceneCfg is undefine")
			}
			static openView(t, s, i) {
				if (null != this.viewCfg) {
					var n = this.viewCfg[t];
					if (null == n) return console.warn("[ViewManager]openView:", "invalid param, ", t), void(i && i.runWith([null, t]));
					if (s = s || {}, n.status) return console.warn("[ViewManager]openView:", "view has opened", t), void(i && i.runWith([null, t]));
					var a = !1;
					if (0 != this.sequence.length)
						for (let e = 0; e < this.sequence.length; e++) {
							if (this.sequence[e].viewId == t && 0 != e) return console.warn("[ViewManager]openView:", "view has in sequence", t), void(i && i.runWith([null, t]));
							a = !0
						}
					if (0 != this.syncList.length)
						for (let e = 0; e < this.syncList.length; e++) {
							if (this.syncList[e].viewId == t && 0 != e) return console.warn("[ViewManager]openView:", "view has in sync list", t), void(i && i.runWith([null, t]));
							a = !0
						}
					if (a || 0 == this.taskList.length) n.status = 1, e.Scene.open(n.url, !1, s, e.Handler.create(this, this.onViewLoaded, [t, s, i]));
					else {
						for (let e = 0; e < this.taskList.length; e++) {
							if (this.taskList[e].viewId == t) return console.warn("[ViewManager]openView:", "view has in task list", t), void(i && i.runWith([null, t]))
						}
						this.taskList.push({
							viewId: t,
							data: s,
							callback: i
						})
					}
				} else console.warn("[ViewManager]openView:", "viewCfg is undefine")
			}
			static onViewLoaded(t, i, n, a) {
				if (a && (a.viewId = t), 1 != this.viewCfg[t].status) return a.visible = !1, this.viewCfg[t].status = 0, e.Scene.close(this.viewCfg[t].url), void(n && n.runWith([null, t]));
				if (this.viewCfg[t].script) {
					var r = e.ClassUtils.getClass(this.viewCfg[t].script);
					if (null == r) console.warn("invalid scriptType:" + this.viewCfg[t].script);
					else {
						var l = a.getComponent(r);
						null == l && (l = a.addComponent(r))
					}
				}
				for (var c = a.getComponents(e.Script), o = 0; c && o < c.length; o++) c[o].initView && c[o].initView(i), c[o].viewId = t;
				this.viewCfg[t].view = a, this.viewCfg[t].status = 2, this.openedList.push(t), n && n.runWith([a, t]);
				var h = this.viewCfg[t].url;
				if (h = h.substring(h.lastIndexOf("/") + 1, h.lastIndexOf(".")), e.stage.frameOnce(1, this, function(t, i, n) {
						e.stage.event(s.UI_VIEW_OPENED, [t, i, n])
					}, [h, t, a], !1), 1 == this.sequence.length && this.sequence[0].viewId == t && (this.sceneCb && this.sceneCb.run(), e.stage.event(s.UI_SCENE_LOADED, this.sceneId)), null != i.zOrder ? a.zOrder = i.zOrder : a.zOrder = this.openedList.length, this.syncList.length > 0) {
					var d = this.syncList.shift();
					null != d.zOrder && (a.zOrder = d.zOrder), this.syncList.length > 0 ? this.syncList[0].delay ? e.stage.timerOnce(this.syncList[0].delay, this, this.openView, [this.syncList[0].viewId, this.sceneData, null], !1) : this.openView(this.syncList[0].viewId, this.sceneData, null) : (this.sceneCb && this.sceneCb.run(), e.stage.event(s.UI_SCENE_LOADED, this.sceneId))
				} else if (this.taskList.length > 0) {
					var g = this.taskList.shift();
					this.openView(g.viewId, g.data, g.callback)
				}
			}
			static closeView(t) {
				var i = "";
				if ("string" == typeof t) {
					if (i = t, null == this.viewCfg[i]) return;
					if (!this.viewCfg[i].status) return;
					if (1 == this.viewCfg[i].status) return void(this.viewCfg[i].status = 0)
				} else {
					if (!(t instanceof e.View)) return void console.warn("[ViewManager]closeView:", "Invalid param");
					for (var n = Object.keys(this.viewCfg), a = 0; a < n.length; a++) {
						const e = n[a];
						if (this.viewCfg[e] && this.viewCfg[e].view == t) {
							i = e;
							break
						}
					}
					if ("" == i) {
						var r = t.url,
							l = r.substring(r.lastIndexOf("/") + 1, r.lastIndexOf("."));
						return void console.warn("[ViewManager]closeView:", "view has closed, ", l)
					}
				}
				this.viewCfg[i].view = null, this.viewCfg[i].status = 0, e.Scene.close(this.viewCfg[i].url);
				var c = this.openedList.indexOf(i);
				c >= 0 && this.openedList.splice(c, 1);
				var o = this.viewCfg[i].url;
				o = o.substring(o.lastIndexOf("/") + 1, o.lastIndexOf(".")), e.stage.frameOnce(1, this, function(t, i) {
					e.stage.event(s.UI_VIEW_CLOSED, [t, i])
				}, [o, i], !1), this.sequence.length > 0 && this.sequence[0].viewId == i && (this.sequence.shift(), this.sequence.length > 0 && this.openView(this.sequence[0].viewId, this.sceneData, null)), 0 == this.sequence.length && 0 == this.syncList.length && 0 == this.openedList.length && null != this.sceneId && (e.timer.callLater(this, this.broadcastUnloadScene, [this.sceneId, null]), this.sceneId = null)
			}
			static broadcastUnloadScene(t, i) {
				console.log(t), e.stage.frameOnce(1, this, function(t, i) {
					i && i.run(), e.stage.event(s.UI_SCENE_UNLOADED, t)
				}, [t, i])
			}
			static hideViews() {}
			static showViews() {}
			static showToastMsg(t) {
				this.toastList.push(t), this.toastList.length > 10 && this.toastList.shift(), null == this.toastMsg && (this.toastMsg = 1, e.loader.create("fc-layout/prefab/toastMsg.prefab", e.Handler.create(this, this.onToastPrefabReady), null, e.Loader.PREFAB))
			}
			static onToastPrefabReady(t) {
				this.toastMsg = t, this.toastCompleted = !0
			}
			static onTostMsgLoop() {
				if (this.toastCompleted)
					for (let e = 0; e < 10 && this.toastList.length > 0; e++) {
						var t = this.toastList.shift();
						this.popToast(t, 1e3 * e)
					}
			}
			static popToast(t, s) {
				var i = e.Pool.getItemByCreateFun("frameTip", this.toastMsg.create, this.toastMsg);
				e.stage.addChild(i);
				var n = i.getChildByName("msg");
				n.text = t, i.getChildByName("bg").height = n.height, i.visible = !0, i.bottom = 0, i.centerX = 0, e.Tween.to(i, {
					bottom: .35 * e.stage.height
				}, 500, e.Ease.elasticOut, e.Handler.create(this, this.onTipTweenCompleted, [i]), s, !1, !0)
			}
			static onTipTweenCompleted(t) {
				e.stage.timerOnce(1e3, this, t => {
					t.visible = !1, t.removeSelf(), e.Pool.recover("frameTip", t)
				}, [t])
			}
			static showMessageBox(t, s) {
				this.messageList.push({
					message: t,
					confirm: s
				}), null == this.messageBox ? (this.messageBox = 1, e.loader.create("fc-layout/prefab/msgBox.json", e.Handler.create(this, this.onMessagePrefabReady), null, e.Loader.PREFAB)) : 1 == this.messageList.length && this.messageCompleted && this.popMessageBox()
			}
			static onMessagePrefabReady(t) {
				this.messageBox = e.stage.addChild(t.create()), this.messageBox.getChildByName("msgDialog").getChildByName("confirmBtn").clickHandler = e.Handler.create(this, this.onMsgBoxConfirm, null, !1), this.popMessageBox()
			}
			static popMessageBox() {
				if (0 != this.messageList.length) {
					this.messageCompleted = !1, this.messageData = this.messageList.shift();
					var t = this.messageBox.getChildByName("msgDialog");
					this.messageBox.visible = !0, this.messageBox.centerY = 0, this.messageBox.centerX = 0, t.getChildByName("content").text = this.messageData.message, this.messageBox.zOrder = 100, t.scaleX = .1, t.scaleY = .1;
					var s = this.messageBox.getChildByName("bg");
					s.width = e.stage.width, s.height = e.stage.height, e.Tween.to(t, {
						scaleX: 1,
						scaleY: 1
					}, 500, null)
				} else this.messageBox.visible = !1
			}
			static onMsgBoxConfirm() {
				this.messageData.confirm && this.messageData.confirm.run(), this.messageData = null;
				var t = this.messageBox.getChildByName("msgDialog");
				e.Tween.to(t, {
					scaleX: .1,
					scaleY: .1
				}, 500, null, e.Handler.create(this, function() {
					this.messageCompleted = !0, this.messageBox.visible = !1, e.timer.once(500, this, this.popMessageBox)
				}))
			}
		}
		u.viewCfg = {}, u.sceneCfg = {}, u.syncList = [], u.sequence = [], u.taskList = [], u.openedList = [], u.sceneId = null, u.sceneData = null, u.sceneCb = null, u.checkFun = null, u.toastList = [], u.toastMsg = null, u.toastCompleted = !1, u.messageList = [], u.messageBox = null, u.messageCompleted = !1, u.messageData = null;
		class f {
			static get appCfgUrl() {
				return this.sAppCfgUrl
			}
			static set appCfgUrl(t) {
				t && (this.sAppCfgUrl = t)
			}
			static loadAppCfg(t) {
				console.log("loadAppCfg:" + this.appCfgUrl), g.loadResAsyn(this.sAppCfgUrl, e.Handler.create(this, this.onAppCfgLoaded, [t]))
			}
			static onAppCfgLoaded(t, e) {
				console.log("onAppCfgLoaded", e), this.startUpCfg = e.startUpCfg, this.startUpCfg.bgm = e.appInfo.bgm, this.startUpCfg.default3dScene = e.appInfo.default3dScene, this.startUpCfg.subPkgCfg = e.subPkgCfg, t && t.runWith(e)
			}
			static loadAppRes(t) {
				if (console.log("loadAppRes"), this.onAppResReady = t, null != this.startUpCfg.subPkgCfg)
					for (let t = 0; t < this.startUpCfg.subPkgCfg.length; t++) {
						const e = this.startUpCfg.subPkgCfg[t];
						g.registerSubPkg(e.pkgName, e.pkgPath)
					}
				e.stage.event(s.LOADING_PROGRESS, (n.LOAD_SUBPACKAGE + 1) / n.TOTAL_STEPS);
				for (var i = [], a = 0; a < this.startUpCfg.subpackage.length; a++) i.push(this.startUpCfg.subpackage[a]);
				console.log("loadSubpackage"), this.loadSubpackage(i)
			}
			static loadSubpackage(t) {
				if (t && t.length > 0) {
					var s = t.pop();
					g.loadSubpackage(s, e.Handler.create(this, this.loadSubpackage, [t]))
				} else this.loadBaseConfig()
			}
			static loadBaseConfig() {
				console.log("loadBaseConfig"), e.stage.event(s.LOADING_PROGRESS, (n.LOAD_CONFIG + 1) / n.TOTAL_STEPS), this.startUpCfg.configList = this.startUpCfg.configList ? this.startUpCfg.configList : [], this.startUpCfg.pluginCfg && this.startUpCfg.configList.push(this.startUpCfg.pluginCfg), this.startUpCfg.pluginLocalCfg && this.startUpCfg.configList.push(this.startUpCfg.pluginLocalCfg), this.startUpCfg.languageCfg && this.startUpCfg.configList.push(this.startUpCfg.languageCfg), 0 == this.startUpCfg.configList.length ? this.loadBaseRes() : g.loadResAsyn(this.startUpCfg.configList, e.Handler.create(this, this.loadBaseRes))
			}
			static loadBaseRes() {
				if (console.log("loadBaseRes"), e.stage.event(s.LOADING_PROGRESS, (n.LOAD_3DRES + 1) / n.TOTAL_STEPS), this.startUpCfg.bgm && (console.log("loadMusic", this.startUpCfg.bgm), h.playMusic(this.startUpCfg.bgm)), this.startUpCfg.fontList && this.startUpCfg.fontList.length > 0 && (console.log("loadFont"), g.loadFont(this.startUpCfg.fontList)), null == this.startUpCfg.baseResList || 0 == this.startUpCfg.baseResList.length) this.loadScene3d();
				else {
					for (var t = [], i = 0; i < this.startUpCfg.baseResList.length; i++) {
						2 == (a = this.startUpCfg.baseResList[i].split(",")).length ? t.push(g.get3dResUrl(a[1], a[0])) : t.push(g.get3dResUrl(a[0]))
					}
					var a;
					2 == (a = this.startUpCfg.baseResList.shift().split(",")).length ? g.load3dResAsyn(g.get3dResUrl(a[1], a[0]), e.Handler.create(this, this.onBaseResReady), null, a[0]) : g.load3dResAsyn(g.get3dResUrl(a[0]), e.Handler.create(this, this.onBaseResReady))
				}
			}
			static onBaseResReady() {
				if (console.log("onBaseResReady"), 0 == this.startUpCfg.baseResList.length) this.loadScene3d();
				else {
					var t = this.startUpCfg.baseResList.shift().split(",");
					2 == t.length ? g.load3dResAsyn(g.get3dResUrl(t[1], t[0]), e.Handler.create(this, this.onBaseResReady), null, t[0]) : g.load3dResAsyn(g.get3dResUrl(t[0]), e.Handler.create(this, this.onBaseResReady))
				}
			}
			static loadScene3d() {
				if (console.log("loadScene3d"), e.stage.event(s.LOADING_PROGRESS, (n.LOAD_3DSCENE + 1) / n.TOTAL_STEPS), null != this.startUpCfg.default3dScene && 0 != this.startUpCfg.default3dScene.length) {
					var t = this.startUpCfg.default3dScene.split(",");
					1 == t.length ? g.loadScene3dAsyn(this.startUpCfg.default3dScene, e.Handler.create(this, this.onLaunchResReady)) : g.loadScene3dAsyn(t[1], e.Handler.create(this, this.onLaunchResReady), null, t[0])
				} else this.onLaunchResReady(null)
			}
			static onLaunchResReady(t) {
				console.log("onLaunchResReady"), h.stopMusic(), this.onAppResReady && this.onAppResReady.runWith(t)
			}
		}
		f.sAppCfgUrl = "config/appConfig.json", f.onAppCfgReady = null, f.onAppResReady = null;
		class p {
			static startUp(t, i, n, a, r) {
				this.channelTag = i, (e.Browser.onIOS || e.Browser.onIPad || e.Browser.onIPhone) && e.Browser.onWeiXin, e.stage.on(s.APP_SHOW, this, this.onGameShow), e.stage.on(s.APP_HIDE, this, this.onGameHide), e.stage.on(s.AD_VIDEO_CLOSED, this, this.onVideoClose), e.stage.on(s.AD_VIDEO_PLAY, this, this.onVideoPlay), e.stage.on(s.UI_SCENE_UNLOADED, this, this.onSceneUnloaded), this.viewCfg = n, this.sceneCfg = a, this.playerInfo = r || {}, o.init(e.Handler.create(this, this.onGameShow, null, !1), e.Handler.create(this, this.onGameHide, null, !1)), l.init(), f.appCfgUrl = t, f.loadAppCfg(e.Handler.create(this, this.onAppCfgReady))
			}
			static onGameShow(t) {
				e.stage.renderingEnabled = !0, this.appInfo && this.appInfo.bgm && !h.IsBgmPlaying && h.playMusic(this.appInfo.bgm), this.resume(), console.log("onGameShow"), e.stage.event(s.DEVICE_SHOW, t)
			}
			static onGameHide() {
				this.pause(), e.stage.renderingEnabled = !1, h.stopAll(), console.log("onGameHide"), e.stage.event(s.DEVICE_HIDE)
			}
			static onVideoClose() {
				this.appInfo && this.appInfo.bgm && !h.IsBgmPlaying && h.playMusic(this.appInfo.bgm)
			}
			static onVideoPlay() {
				h.stopAll()
			}
			static onSceneUnloaded(t) {
				t == this.curSceneId && this.curSceneId != this.nextSceneId && (this.curSceneId = this.nextSceneId, u.loadScene(this.nextSceneId, this.sceneData), this.sceneEvent && e.stage.event(this.sceneEvent, this.sceneData), this.curSceneId == i.ShowFailed ? this.reportFailed(this.sceneData) : this.curSceneId == i.ShowSuccess ? this.reportSuccess(this.sceneData) : this.curSceneId == i.Over ? this.go2Home() : this.curSceneId == i.Home && this.resume())
			}
			static onAppCfgReady(t) {
				if (console.log("onAppCfgReady"), this.appInfo = t.appInfo, this.startUpCfg = t.startUpCfg, this.gameCfg = t.gameCfg, this.goodsCfg = t.goodsCfg, this.startUpCfg.logoPage && (this.viewCfg.Logo = this.startUpCfg.logoPage), t.playerCfg)
					for (var n = Object.keys(t.playerCfg), a = 0; a < n.length; a++) this.playerInfo[n[a]] = t.playerCfg[n[a]];
				if (this.loadPlayerInfo(), t.viewCfg)
					for (n = Object.keys(t.viewCfg), a = 0; a < n.length; a++) this.viewCfg[n[a]] = t.viewCfg[n[a]], p.registerView(n[a], t.viewCfg[n[a]]);
				if (t.sceneCfg)
					for (n = Object.keys(t.sceneCfg), a = 0; a < n.length; a++) {
						const e = t.sceneCfg[n[a]];
						this.sceneCfg[n[a]] = e, p.registerScene(n[a], e.array, e.type)
					}
				console.log("openLoading"), u.init(this.viewCfg, this.sceneCfg), e.stage.once(s.UI_VIEW_OPENED, this, this.onLoadingOpened), u.loadScene(i.Loading, null, null)
			}
			static onLoadingOpened() {
				e.stage.off(s.UI_VIEW_OPENED, this, this.onLoadingOpened), f.loadAppRes(e.Handler.create(this, this.onAppResReady))
			}
			static onAppResReady(t) {
				if (t && (this.scene3d = e.stage.addChildAt(t, 0)), this.startUpCfg.languageCfg && (this.langCfg = e.loader.getRes(this.startUpCfg.languageCfg)), this.startUpCfg.pluginCfg) {
					if (this.pluginCfg = e.loader.getRes(this.startUpCfg.pluginCfg), this.pluginCfg || (this.pluginCfg = e.loader.getRes(this.startUpCfg.pluginLocalCfg)), this.pluginCfg.viewCfg)
						for (var i = Object.keys(this.pluginCfg.viewCfg), n = 0; n < i.length; n++) this.viewCfg[i[n]] = this.pluginCfg.viewCfg[i[n]], p.registerView(i[n], this.pluginCfg.viewCfg[i[n]]);
					if (this.pluginCfg.sceneCfg)
						for (i = Object.keys(this.pluginCfg.sceneCfg), n = 0; n < i.length; n++) {
							const t = this.pluginCfg.sceneCfg[i[n]];
							this.sceneCfg[i[n]] = t, p.registerScene(i[n], t.array, t.type)
						}
					if (this.pluginCfg.gameCfg)
						for (i = Object.keys(this.pluginCfg.gameCfg), n = 0; n < i.length; n++) this.gameCfg[i[n]] = this.pluginCfg.gameCfg[i[n]];
					if (this.pluginCfg.goodsCfg && (this.goodsCfg = this.pluginCfg.goodsCfg), this.pluginCfg.playerCfg) {
						for (i = Object.keys(this.pluginCfg.playerCfg), n = 0; n < i.length; n++) null == this.playerInfo[i[n]] && (this.playerInfo[i[n]] = this.pluginCfg.playerCfg[i[n]]);
						if (this.pluginCfg.playerCfg.goodsInUse)
							for (n = this.playerInfo.goodsInUse.length; n < this.pluginCfg.playerCfg.goodsInUse.length; n++) this.playerInfo.goodsInUse.push(config.playerCfg.goodsInUse[n]);
						if (this.pluginCfg.playerCfg.goodsInBag)
							for (n = this.playerInfo.goodsInBag.length; n < this.pluginCfg.playerCfg.goodsInBag.length; n++) this.playerInfo.goodsInBag.push(config.playerCfg.goodsInBag[n])
					}
				}
				this.resLoaded = !0, "hw" != fc.platform.PlatformConfig.platformTag && e.stage.event(s.LAUNCH_COMPLETED)
			}
			static get gameSceneId() {
				return this.curSceneId
			}
			static get isGamePaused() {
				return !this.isRunning
			}
			static pause() {
				this.isRunning = !1, e.stage.event(s.GAME_SLEEP)
			}
			static resume() {
				this.isRunning = !0, e.stage.event(s.GAME_WAKEUP)
			}
			static go2Scene(t) {
				this.isRelive = !!t.isRelive, this.isRestart = !!t.isRestart, this.sceneData = t.sceneData, this.sceneEvent = t.sceneEvent, this.nextSceneId = t.nextSceneId, null != t.relivedTime && (this.relivedTime = t.relivedTime)
			}
			static finishLoading() {
				this.go2Home(), e.stage.event(s.UI_LOADING_COMPLETED)
			}
			static go2Home(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_HOME,
					nextSceneId: i.Home,
					relivedTime: 0
				})
			}
			static go2Game(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_PREPARE,
					nextSceneId: i.Prepare
				})
			}
			static startGame(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_START,
					nextSceneId: i.Game
				})
			}
			static relive2Game(t) {
				this.go2Scene({
					isRelive: !0,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_RELIVE_START,
					nextSceneId: i.Game
				})
			}
			static resetGame(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !0,
					sceneData: t,
					sceneEvent: s.GAME_RESET,
					nextSceneId: i.Prepare
				})
			}
			static go2Relive(t) {
				this.go2Scene({
					isRelive: !0,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_RELIVE,
					nextSceneId: i.Prepare,
					relivedTime: this.relivedTime + 1
				})
			}
			static showSuccessed(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_SHOW_WIN,
					nextSceneId: i.ShowSuccess
				})
			}
			static showFailed(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_SHOW_FAIL,
					nextSceneId: i.ShowFailed
				})
			}
			static reportSuccess(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_WIN,
					nextSceneId: i.Success
				})
			}
			static reportFailed(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_FAILED,
					nextSceneId: i.Failed
				})
			}
			static overGame(t) {
				this.savePlayerInfo(t), this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_OVER,
					nextSceneId: i.Over
				})
			}
			static back2Home(t) {
				this.go2Scene({
					isRelive: !1,
					isRestart: !1,
					sceneData: t,
					sceneEvent: s.GAME_BACK_HOME,
					nextSceneId: i.Home
				})
			}
			static exitApplication() {
				l.exitApplication()
			}
			static savePlayerInfo(t) {
				if (null != t) {
					if (t != this.playerInfo)
						for (var s = Object.keys(t), i = 0; i < s.length; i++) this.playerInfo[s[i]] = t[s[i]];
					"" != this.accountId ? e.Browser.onAlipayMiniGame ? window.my && window.my.setStorageSync({
						key: `${this.appInfo.appName}:${this.channelTag}:${this.accountId}`,
						data: JSON.stringify(this.playerInfo)
					}) : e.LocalStorage.setItem(`${this.appInfo.appName}:${this.channelTag}:${this.accountId}`, JSON.stringify(this.playerInfo)) : e.Browser.onAlipayMiniGame ? window.my && window.my.setStorageSync({
						key: `${this.appInfo.appName}:${this.channelTag}`,
						data: JSON.stringify(this.playerInfo)
					}) : e.LocalStorage.setItem(`${this.appInfo.appName}:${this.channelTag}`, JSON.stringify(this.playerInfo))
				}
			}
			static loadPlayerInfo() {
				var t;
				if (null != (t = e.Browser.onAlipayMiniGame ? null == (t = "" != this.accountId ? window.my.getStorageSync({
						key: `${this.appInfo.appName}:${this.channelTag}:${this.accountId}`
					}) : window.my.getStorageSync({
						key: `${this.appInfo.appName}:${this.channelTag}`
					})).data || void 0 === t.data ? null : t.data : "" != this.accountId ? e.LocalStorage.getItem(`${this.appInfo.appName}:${this.channelTag}:${this.accountId}`, JSON.stringify(this.playerInfo)) : e.LocalStorage.getItem(`${this.appInfo.appName}:${this.channelTag}`, JSON.stringify(this.playerInfo))) && 0 != t.length)
					for (var s = JSON.parse(t), i = Object.keys(s), n = 0; n < i.length; n++) this.playerInfo[i[n]] = s[i[n]]
			}
			static playClickSound() {
				h.playSound(this.appInfo.soundClick, !1)
			}
			static showToastMsg(t) {
				u.showToastMsg(t)
			}
			static showMessageBox(t, e) {
				u.showMessageBox(t, e)
			}
			static showModal(t, e, s, i, n, a, r) {
				return l.showModal(t, e, s, i, n, a, r)
			}
			static openView(t, e, s) {
				u.openView(t, e, s)
			}
			static closeView(t) {
				u.closeView(t)
			}
			static closeAllViews() {
				u.unloadScene()
			}
			static setViewValidCheckFun(t) {
				u.checkFun = t
			}
			static registerView(t, e) {
				u.registerView(t, e)
			}
			static registerScene(t, e, s) {
				u.registerScene(t, e, s)
			}
			static getLocalStorage(t) {
				if ("" != this.accountId) {
					if (e.Browser.onAlipayMiniGame) {
						let e = window.my.getStorageSync({
							key: `${this.appInfo.appName}:${this.channelTag}:${this.accountId}:${t}`
						});
						return null == e.data || void 0 === e.data ? null : e.data
					}
					return e.LocalStorage.getItem(`${this.appInfo.appName}:${this.channelTag}:${this.accountId}:${t}`)
				}
				if (e.Browser.onAlipayMiniGame) {
					let e = window.my.getStorageSync({
						key: `${this.appInfo.appName}:${this.channelTag}:${t}`
					});
					return null == e.data || void 0 === e.data ? null : e.data
				}
				return e.LocalStorage.getItem(`${this.appInfo.appName}:${this.channelTag}:${t}`)
			}
			static setLocalStorage(t, s) {
				var i;
				null != s && (i = "" != this.accountId ? `${this.appInfo.appName}:${this.channelTag}:${this.accountId}:${t}` : `${this.appInfo.appName}:${this.channelTag}:${t}`, s instanceof Object ? e.Browser.onAlipayMiniGame ? window.my && window.my.setStorageSync({
					key: i,
					data: JSON.stringify(s)
				}) : e.LocalStorage.setItem(i, JSON.stringify(s)) : s instanceof Array ? e.Browser.onAlipayMiniGame ? window.my && window.my.setStorageSync({
					key: i,
					data: JSON.stringify(s)
				}) : e.LocalStorage.setItem(i, JSON.stringify(s)) : e.Browser.onAlipayMiniGame ? window.my && window.my.setStorageSync({
					key: i,
					data: s.toString()
				}) : e.LocalStorage.setItem(i, s.toString()))
			}
		}
		p.appInfo = {}, p.startUpCfg = {}, p.langCfg = {
			gettxt: "恭喜获得",
			getcointxt: "恭喜获得金币",
			novideotxt: "暂无可看视频，请稍后再试",
			novideotxt2: "现在没有视频看了",
			nocointxt: "金币不足!",
			nokeytxt: "钥匙用完了，请看视频兑换!",
			sharetimeshort: "录屏失败：录屏时长低于 3 秒!",
			sharefailtxt: "分享失败!",
			ok: "确定",
			cancel: "取消",
			videocanceltitle: "未观看完视频",
			videocanceldesc: "观看完视频才能获得奖励哦",
			unlock: "未解锁",
			level: "关卡"
		}, p.nicknameList = {}, p.gameCfg = {}, p.goodsCfg = {}, p.pluginCfg = {}, p.playerInfo = {}, p.viewCfg = {}, p.sceneCfg = {}, p.scene3d = null, p.channelTag = "unknown", p.isGMMode = !1, p.isRunning = !0, p.isRestart = !1, p.resLoaded = !1, p.isRelive = !1, p.relivedTime = 0, p.curSceneId = i.Loading, p.nextSceneId = i.Loading, p.sceneData = null, p.sceneEvent = null, p.accountId = "", e.ILaya.regClass(p), e.ClassUtils.regClass("fc.framework.GameFrame", p), t.Audio = h, t.Device = o, t.Channel = l, t.Joystick = c, t.Resource = g, t.Md5Utils = a, t.MiscUtils = r, t.GameFrame = p
	}(window.fc.framework, Laya);