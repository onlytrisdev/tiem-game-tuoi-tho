window.__require = function t(e, i, o) {
	function a(r, s) {
		if (!i[r]) {
			if (!e[r]) {
				var l = r.split("/");
				if (l = l[l.length - 1], !e[l]) {
					var c = "function" == typeof __require && __require;
					if (!s && c) return c(l, !0);
					if (n) return n(l, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
				r = l
			}
			var u = i[r] = {
				exports: {}
			};
			e[r][0].call(u.exports, function(t) {
				return a(e[r][1][t] || t)
			}, u, u.exports, t, e, i, o)
		}
		return i[r].exports
	}
	for (var n = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
	return a
}({
	ADSDK: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c74ae+E0P9Jj4GWLM+Xt5p2", "ADSDK");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			},
			n = this && this.__awaiter || function(t, e, i, o) {
				function a(t) {
					return t instanceof i ? t : new i(function(e) {
						e(t)
					})
				}
				return new(i || (i = Promise))(function(i, n) {
					function r(t) {
						try {
							l(o.next(t))
						} catch (t) {
							n(t)
						}
					}

					function s(t) {
						try {
							l(o.throw(t))
						} catch (t) {
							n(t)
						}
					}

					function l(t) {
						t.done ? i(t.value) : a(t.value).then(r, s)
					}
					l((o = o.apply(t, e || [])).next())
				})
			},
			r = this && this.__generator || function(t, e) {
				var i, o, a, n, r = {
					label: 0,
					sent: function() {
						if (1 & a[0]) throw a[1];
						return a[1]
					},
					trys: [],
					ops: []
				};
				return n = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
					return this
				}), n;

				function s(t) {
					return function(e) {
						return l([t, e])
					}
				}

				function l(n) {
					if (i) throw new TypeError("Generator is already executing.");
					for (; r;) try {
						if (i = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
						switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
							case 0:
							case 1:
								a = n;
								break;
							case 4:
								return r.label++, {
									value: n[1],
									done: !1
								};
							case 5:
								r.label++, o = n[1], n = [0];
								continue;
							case 7:
								n = r.ops.pop(), r.trys.pop();
								continue;
							default:
								if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
									r = 0;
									continue
								}
								if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
									r.label = n[1];
									break
								}
								if (6 === n[0] && r.label < a[1]) {
									r.label = a[1], a = n;
									break
								}
								if (a && r.label < a[2]) {
									r.label = a[2], r.ops.push(n);
									break
								}
								a[2] && r.ops.pop(), r.trys.pop();
								continue
						}
						n = e.call(t, r)
					} catch (t) {
						n = [6, t], o = 0
					} finally {
						i = a = 0
					}
					if (5 & n[0]) throw n[1];
					return {
						value: n[0] ? n[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var s = t("./cocosAndNative"),
			l = t("./config"),
			c = t("./Game/Common/GAudio"),
			u = cc._decorator,
			d = u.ccclass,
			h = (u.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var i;
				return o(e, t), i = e, e.delay = function(t) {
					return n(this, void 0, void 0, function() {
						return r(this, function(e) {
							return [2, new Promise(function(e) {
								return setTimeout(e, t)
							})]
						})
					})
				}, e.initAD = function() {
					switch (l.default.Channel) {
						case "wx":
							break;
						case "oppo":
							if (window.qg) {
								var t = window.qg;
								i.login(), i.screenHeight = t.getSystemInfoSync().screenHeight, i.screenWidth = t.getSystemInfoSync().screenWidth, l.default.oppoVersion = t.getSystemInfoSync().platformVersionCode, i.RewardedVideoAd = t.createRewardedVideoAd({
									adUnitId: "277079"
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), i.RewardedVideoAd.show()
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function(t) {
									t && t.isEnded && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								}), i.refresh_banner()
							}
							break;
						case "vivo":
							if (window.qg) {
								t = window.qg;
								i.login(), i.screenHeight = t.getSystemInfoSync().screenHeight, i.screenWidth = t.getSystemInfoSync().screenWidth, l.default.oppoVersion = t.getSystemInfoSync().platformVersionCode, i.RewardedVideoAd = t.createRewardedVideoAd({
									posId: "d973cc623a4f4c15aa135e6f292636a6"
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function(t) {
									t && t.isEnded && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3), i.RewardedVideoShow = !1, c.default.ResumeBGM()
								}), i.refresh_banner()
							}
							break;
						case "huawei":
							if (window.hbs) {
								var e = window.hbs;
								i.login(), e.getSystemInfo({
									success: function(t) {
										i.screenHeight = t.screenHeight, i.screenWidth = t.screenWidth
									},
									fail: function() {
										console.log("getSystemInfo fail")
									}
								}), i.RewardedVideoAd = e.createRewardedVideoAd({
									adUnitId: "e7hm5vx799",
									success: function(t) {
										console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd: success")
									},
									fail: function(t, e) {
										console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd fail: " + t + "," + e)
									}
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), i.RewardedVideoAd.show()
								}), i.RewardedVideoAd.onError(function(t) {
									console.error("load ad error:" + JSON.stringify(t));
									t.errCode, t.errMsg
								}), i.RewardedVideoAd.onClose(function(t) {
									t && t.isEnded && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								}), i.refresh_banner()
							}
							break;
						case "zijie":
							if (window.tt) {
								var o = window.tt;
								i.screenHeight = o.getSystemInfoSync().screenHeight, i.screenWidth = o.getSystemInfoSync().screenWidth, i.RewardedVideoAd = o.createRewardedVideoAd({
									adUnitId: "3b4ifm9e4j5771b1jg"
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f")
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function(t) {
									i.callFun && (void 0 == t || t && t.isEnded) && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								}), i.RewardedVideoAd.load()
							}
							break;
						case "qq":
							if (window.qq) {
								var a = window.qq;
								i.login(), i.screenHeight = a.getSystemInfoSync().screenHeight, i.screenWidth = a.getSystemInfoSync().screenWidth, a.showShareMenu({
									showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
								}), i.RewardedVideoAd = a.createRewardedVideoAd({
									adUnitId: "9bc8f7cec3676d2e590316bd39a3bb34"
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f")
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function(t) {
									i.callFun && (void 0 == t || t && t.isEnded) && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								}), i.RewardedVideoAd.load(), i.InsertAd = a.createInterstitialAd({
									adUnitId: "a797c515eacb81d7f2035066a932214a"
								}), i.InsertAd.onLoad(function() {}), i.InsertAd.onError(function(t) {
									console.log(t), i.AppBoxAd = a.createAppBox({
										adUnitId: "603022040ede4f60b2b8bd0898cb26e5"
									}), i.AppBoxAd.onClose(function(t) {
										i.AppBoxAd.destroy(), i.AppBoxAdCan = !1
									}), i.AppBoxAd.load(), i.AppBoxAdCan = !0
								}), i.InsertAd.onClose(function(t) {})
							}
							break;
						case "baidu":
							if (window.swan) {
								var n = window.swan;
								n.getSystemInfo({
									success: function(t) {
										i.screenHeight = t.screenHeight, i.screenWidth = t.screenWidth
									}
								}), i.RewardedVideoAd = n.createRewardedVideoAd({
									adUnitId: "7398061",
									appSid: "a24ede63"
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f")
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function(t) {
									i.callFun && (void 0 == t || t && t.isEnded) && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								})
							}
							break;
						case "meizu":
							if (window.qg) {
								t = window.qg;
								i.screenHeight = t.getSystemInfoSync().screenHeight, i.screenWidth = t.getSystemInfoSync().screenWidth, i.RewardedVideoAd = t.createRewardedVideoAd({
									adUnitId: "O6KjsiA2"
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f")
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function() {
									i.callFun && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								}), i.RewardedVideoAd.load(), i.InsertAd = t.createInsertAd({
									adUnitId: "t2BWY23K"
								}), i.InsertAd.onLoad(function() {}), i.InsertAd.onError(function(t) {
									console.log(t)
								}), i.InsertAd.load()
							}
							break;
						case "xiaomi":
							if (window.qg) {
								t = window.qg;
								i.screenHeight = t.getSystemInfoSync().screenHeight, i.screenWidth = t.getSystemInfoSync().screenWidth, i.RewardedVideoAd = t.createRewardedVideoAd({
									adUnitId: "80efd24a0d67d4ad6ed3ca5ff30002e6"
								}), i.RewardedVideoAd.onLoad(function() {
									console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f")
								}), i.RewardedVideoAd.onError(function(t) {
									console.log(t)
								}), i.RewardedVideoAd.onClose(function(t) {
									i.callFun && (void 0 == t || t && t.isEnded) && setTimeout(function() {
										i.callFun.call(i.callObj)
									}, 1e3)
								})
							}
					}
				}, e.onShowCallBack = function() {
					switch (l.default.Channel) {
						case "wx":
							if (i.successCallBack && window.wx) {
								var t = i.objCallBack,
									e = i.successCallBack;
								i.objCallBack = null, i.successCallBack = null, (new Date).getTime() >= i.shareTime + 4e3 && e.call(t)
							}
					}
				}, e.shareAppMessage = function(t, e) {
					l.default.Channel
				}, e.showVideoAD = function(t, e) {
					if (l.default.IsDeBug) e.call(t);
					else switch (l.default.Channel) {
						case "wx":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, i.RewardedVideoAd.show().catch(function(t) {
								i.RewardedVideoAd.load().then(function() {
									c.default.PauseBGM(), i.RewardedVideoAd.show(), i.RewardedVideoShow = !0
								})
							}), i.RewardedVideoAdTimes += 1);
							break;
						case "oppo":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, i.RewardedVideoAd.load());
							break;
						case "vivo":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, 0 == i.RewardedVideoAdTime ? (i.RewardedVideoAd.onLoad(function(t) {
								console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210-onload\u89e6\u53d1"), i.RewardedVideoAd.show().then(function() {
									c.default.PauseBGM(), i.RewardedVideoShow = !0, console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
								})
							}), i.RewardedVideoAd.show().then(function() {
								c.default.PauseBGM(), i.RewardedVideoShow = !0, console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
							}), i.RewardedVideoAdTime = (new Date).getTime()) : i.RewardedVideoAd.load());
							break;
						case "huawei":
							i.RewardedVideoAd ? (i.callFun = e, i.callObj = t, i.RewardedVideoAd.load()) : console.log("\u6682\u65e0\u89c6\u9891\u5e7f\u544a\u793a\u4f8b,\u6216\u5df2\u88ab\u9500\u6bc1");
							break;
						case "zijie":
							console.log("\u8bf7\u6c42\u64ad\u653e\u89c6\u9891\u5e7f\u544a"), i.callFun = e, i.callObj = t, i.RewardedVideoAd.show().then(function() {
								console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
							}).catch(function(t) {
								console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", t), i.RewardedVideoAd.load().then(function() {
									console.log("\u624b\u52a8\u52a0\u8f7d\u6210\u529f"), i.RewardedVideoAd.show()
								})
							});
							break;
						case "qq":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, i.RewardedVideoAd.show().catch(function(t) {
								i.RewardedVideoAd.load().then(function() {
									i.RewardedVideoAd.show()
								})
							}));
							break;
						case "baidu":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, i.RewardedVideoAd.show().catch(function(t) {
								i.RewardedVideoAd.load().then(function() {
									i.RewardedVideoAd.show()
								})
							}), i.RewardedVideoAdTimes += 1);
							break;
						case "meizu":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, 0 == i.RewardedVideoAdTimes ? i.RewardedVideoAd.show() : (i.RewardedVideoAd.onLoad(function() {
								i.RewardedVideoAd.show()
							}), i.RewardedVideoAd.load()), i.RewardedVideoAdTimes += 1);
							break;
						case "xiaomi":
							i.RewardedVideoAd && (i.callFun = e, i.callObj = t, i.RewardedVideoAd.show().catch(function(t) {
								i.RewardedVideoAd.load().then(function() {
									i.RewardedVideoAd.show()
								})
							}));
							break;
						case "4399":
							if (window.h5api) {
								var o = function(t) {
									console.log("mã số:" + t.code + ",thông tin:" + t.message), 1e4 === t.code ? console.log("Bắt đầu cuộc chơi") : 10001 === t.code ? setTimeout(function() {
										e.call(t)
									}, 1e3) : console.log("Ngoại lệ về quảng cáo")
								};
								window.h5api.canPlayAd(function(t) {
									console.log("Có thể phát quảng cáo", t.canPlayAd, "thời gian còn lại", t.remain), window.h5api.playAd(o)
								})
								console.log("1111",o,t);
							}
							break;
						case "iOS":
							window.cocosAndNative = s.default.getInstance(), window.cocosAndNative.cocosToSDK("1", "", this, function(o) {
								i.callFun = e, i.callObj = t, 0 != o.state && "0" != o.state || setTimeout(function() {
									i.callFun.call(i.callObj)
								}, 1e3)
							}, null)
					}
				}, e.showCustomAd = function(t, e, o, a) {
					if (void 0 === o && (o = 1), void 0 === a && (a = 0), !l.default.IsDeBug) switch (l.default.Channel) {
						case "wx":
							var n = window.wx;
							i.CustomAd = n.createCustomAd({
								adUnitId: "adunit-030341760ec8ee27",
								style: {
									left: t,
									top: e
								}
							}), i.CustomAd.onLoad(function() {}), i.CustomAd.onError(function(t) {
								console.log(t)
							}), i.CustomAd.onClose(function(t) {}), i.CustomAd.show();
						case "qq":
							var r = window.qq,
								s = "";
							s = 0 == a ? "landscape" : "vertical", i.CustomAd = r.createBlockAd({
								adUnitId: "3391f4de705f79209db8449a13e95cd4",
								size: o,
								orientation: s,
								style: {
									left: t,
									top: e
								}
							}), i.CustomAd.onLoad(function() {}), i.CustomAd.onError(function(t) {
								console.log(t)
							}), i.CustomAd.onClose(function(t) {}), i.CustomAd.show()
					}
				}, e.destroyCustomAd = function() {
					i.CustomAd && i.CustomAd.destroy()
				}, e.refresh_banner = function() {
					console.log("refresh"), i.destroyBannerAd();
					var t = cc.find("Canvas"),
						e = t.getChildByName("Main Camera");
					switch (l.default.Channel) {
						case "oppo":
							i.BannerAd = window.qg.createNativeAd({
								adUnitId: "277076"
							});
							break;
						case "vivo":
							i.BannerAd = window.qg.createNativeAd({
								posId: "0b82f462a5504c68b0f27c703923fa32"
							});
							break;
						case "huawei":
							i.BannerAd = window.hbs.createNativeAd({
								adUnitId: "u7m3hc4gvm",
								success: function(t) {
									console.log("loadNativeAd loadNativeAd : success")
								},
								fail: function(t, e) {
									console.log("loadNativeAd loadNativeAd fail: " + t + "," + e)
								}
							})
					}
					i.BannerAd.onLoad(function(o) {
						var a = o.adList.pop();
						i.BannerAdAdList = a, i.BannerAd.reportAdShow({
							adId: a.adId
						}), console.log("ADSDK.BannerAdAdList refresh ", i.BannerAdAdList), e.getChildByName("GNativeBanner") ? (e.getChildByName("GNativeBanner").active = !1, e.getChildByName("GNativeBanner").destroy(), i.showBannerAd()) : t.getChildByName("GNativeBanner") && (t.getChildByName("GNativeBanner").active = !1, t.getChildByName("GNativeBanner").destroy(), i.showBannerAd());
						var n = 0;
						n = l.default.OriginBannerADrefreshtime <= 0 ? 4e4 : l.default.OriginBannerADrefreshtime, setTimeout(function() {
							i.refresh_banner()
						}, n)
					}), i.BannerAd.onError(function(o) {
						console.log(o), e.getChildByName("GNativeBanner") ? (e.getChildByName("GNativeBanner").active = !1, e.getChildByName("GNativeBanner").destroy()) : t.getChildByName("GNativeBanner") && (t.getChildByName("GNativeBanner").active = !1, t.getChildByName("GNativeBanner").destroy());
						var a = 0;
						a = l.default.OriginBannerADrefreshtime <= 0 ? 4e4 : l.default.OriginBannerADrefreshtime, setTimeout(function() {
							i.refresh_banner()
						}, a)
					}), i.BannerAd.load()
				}, e.showBannerAd = function(t) {
					if (void 0 === t && (t = !1), !l.default.IsDeBug) switch (l.default.Channel) {
						case "wx":
							var e = window.wx;
							i.BannerAd = e.createBannerAd({
								adUnitId: "adunit-523b84e414d3e8cf",
								adIntervals: 30,
								style: {
									width: 300,
									left: 0,
									top: 0
								}
							}), i.BannerAd.onResize(function() {
								i.BannerAd.style.top = i.screenHeight - i.BannerAd.style.realHeight + .1, i.BannerAd.style.left = (i.screenWidth - i.BannerAd.style.realWidth) / 2 + .1, i.BannerAd.style.width = 300, i.BannerAdHeight = i.BannerAd.style.realHeight + .2
							}), i.BannerAd.onLoad(function(t) {}), i.BannerAd.onError(function(t) {
								console.log(t)
							}), i.BannerAd.onClose(function() {}), t || i.BannerAd.show();
							break;
						case "oppo":
						case "vivo":
						case "huawei":
							console.log("OriginBannerAD: ", l.default.OriginBannerAD), 1 == l.default.OriginBannerAD && i.BannerAd && cc.resources.load("UI/GNativeBanner", cc.Prefab, function(t, e) {
								var i = cc.find("Canvas"),
									o = i.getChildByName("Main Camera");
								if (!o.getChildByName("GNativeBanner") && !i.getChildByName("GNativeBanner")) {
									var a = cc.instantiate(e);
									a.getComponent("GNativeBanner").Setup(), o ? o.addChild(a) : i.addChild(a)
								}
							});
							break;
						case "zijie":
							var o = window.tt;
							i.BannerAd = o.createBannerAd({
								adUnitId: "199je8873k45yykbgr",
								adIntervals: 30,
								style: {
									width: 128,
									top: i.screenHeight - 72,
									left: (i.screenWidth - 128) / 2
								}
							}), console.log("ADSDK.BannerAd.style", i.BannerAd.style), i.BannerAd.onLoad(function(t) {
								console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), i.BannerAd.show()
							});
							break;
						case "qq":
							var a = window.qq;
							i.BannerAd = a.createBannerAd({
								adUnitId: "799248fdaf0c60d5e69861faf608f4c6",
								adIntervals: 30,
								style: {
									width: 300,
									height: 180,
									top: i.screenHeight - 180 + .1,
									left: (i.screenWidth - 300) / 2 + .1
								}
							}), i.BannerAd.onError(function(t) {
								console.log(t)
							}), i.BannerAd.onLoad(function(e) {
								console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t || i.BannerAd.show()
							});
							break;
						case "baidu":
							var n = window.swan;
							i.BannerAd = n.createBannerAd({
								adUnitId: "7398060",
								appSid: "a24ede63",
								style: {
									width: 300,
									top: i.screenHeight - 168.75,
									left: (i.screenWidth - 300) / 2 + .1
								}
							}), i.BannerAd.onResize(function(t) {
								i.BannerAd.style.top = i.screenHeight - t.height + .1, i.BannerAd.style.left = (i.screenWidth - t.width) / 2 + .1, i.BannerAd.style.width = 300
							}), i.BannerAd.onError(function(t) {
								console.log(t)
							}), i.BannerAd.onLoad(function(e) {
								console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t || i.BannerAd.show()
							});
							break;
						case "meizu":
							var r = window.qg;
							i.BannerAd = r.createBannerAd({
								adUnitId: "sL7uH8gW",
								style: {
									left: (i.screenWidth - 800) / 2,
									top: 0,
									width: 800,
									height: i.screenWidth / 6.7
								}
							}), i.BannerAd.onResize(function(t) {
								i.BannerAd.style.top = i.screenHeight - t.height, i.BannerAd.style.left = (i.screenWidth - 800) / 2, i.BannerAd.style.height = i.screenWidth / 6.7, i.BannerAd.style.width = 800
							}), i.BannerAd.onError(function(t) {
								console.log(t)
							}), i.BannerAd.onLoad(function(e) {
								console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t || i.BannerAd.show()
							});
							break;
						case "4399":
						case "iOS":
							window.cocosAndNative = s.default.getInstance(), window.cocosAndNative.cocosToSDK("3", "", this, function(t) {
								console.log(t)
							}, null)
					}
				}, e.HideBannerAd = function() {
					switch (l.default.Channel) {
						case "wx":
						case "oppo":
						case "vivo":
						case "huawei":
						case "zijie":
						case "qq":
						case "baidu":
						case "meizu":
						case "4399":
							i.BannerAd && i.BannerAd.hide();
							break;
						case "iOS":
							window.cocosAndNative = s.default.getInstance(), window.cocosAndNative.cocosToSDK("4", "", this, function(t) {
								console.log(t)
							}, null)
					}
				}, e.destroyBannerAd = function() {
					switch (l.default.Channel) {
						case "wx":
						case "oppo":
						case "vivo":
						case "huawei":
						case "zijie":
						case "qq":
						case "baidu":
						case "4399":
							i.BannerAd && i.BannerAd.destroy(), i.BannerAd = null, i.BannerAdAdList = null;
							break;
						case "iOS":
							window.cocosAndNative = s.default.getInstance(), window.cocosAndNative.cocosToSDK("4", "", this, function(t) {
								console.log(t)
							}, null)
					}
				}, e.CreateNativeAd = function() {
					switch (console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d"), l.default.Channel) {
						case "oppo":
							i.NativeAd = window.qg.createNativeAd({
								adUnitId: "277077"
							}), i.NativeAd.onLoad(function(t) {
								console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
								var e = t.adList.pop();
								i.NativeAdAdList = e, i.NativeAd.reportAdShow({
									adId: e.adId
								}), console.log(i.NativeAdAdList)
							}), i.NativeAd.onError(function(t) {
								console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(t)
							}), i.NativeAd.load();
							break;
						case "vivo":
							i.NativeAd = window.qg.createNativeAd({
								posId: "bb38374fd7364001aea02bf35b233653"
							}), i.NativeAd.onLoad(function(t) {
								console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
								var e = t.adList.pop();
								i.NativeAdAdList = e, i.NativeAd.reportAdShow({
									adId: e.adId
								}), console.log(i.NativeAdAdList)
							}), i.NativeAd.onError(function(t) {
								console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(t)
							}), i.NativeAd.load();
							break;
						case "huawei":
							i.NativeAd = window.hbs.createNativeAd({
								adUnitId: "testw6vs28auh3"
							}), i.NativeAd.onLoad(function(t) {
								console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
								var e = t.adList.pop();
								i.NativeAdAdList = e, i.NativeAd.reportAdShow({
									adId: e.adId
								}), console.log(i.NativeAdAdList)
							}), i.NativeAd.onError(function(t) {
								console.log("NativeAd \u5e7f\u544a\u52a0\u8f7d\u5931\u8d25"), console.log(t)
							}), i.NativeAd.load()
					}
				}, e.destroyNativeAd = function() {
					switch (l.default.Channel) {
						case "oppo":
						case "vivo":
						case "huawei":
							i.NativeAd && i.NativeAd.destroy(), i.NativeAd = null, i.NativeAdAdList = null
					}
				}, e.showGridAd = function() {
					if (!l.default.IsDeBug) switch (l.default.Channel) {
						case "wx":
							i.GridAd ? i.GridAd.show() : (i.GridAd = window.wx.createGridAd({
								adUnitId: "adunit-08238fd1f4384c9a",
								adIntervals: 30,
								style: {
									width: 300,
									left: 0,
									top: 0
								}
							}), i.GridAd.onResize(function() {
								console.log("Grid \u5c3a\u5bf8\u6539\u53d8"), i.GridAd.style.top = i.screenHeight - i.GridAd.style.realHeight + .1, i.GridAd.style.left = (i.screenWidth - i.GridAd.style.realWidth) / 2 + .1, i.GridAd.style.width = 300
							}), i.GridAd.show())
					}
				}, e.HideGridAd = function() {
					i.GridAd && i.GridAd.hide()
				}, e.showInsertAd = function() {
					if (!l.default.IsDeBug) switch (l.default.Channel) {
						case "wx":
							i.InsertAd && i.InsertAd.show().catch(function(t) {
								i.InsertAd.load().then(function() {
									return i.InsertAd.show()
								})
							});
							break;
						case "zijie":
							window.tt && (i.InsertAd = window.tt.createInterstitialAd({
								adUnitId: "1158d1313059h7245j"
							}), i.InsertAd.onError(function(t) {}), i.InsertAd.onClose(function() {
								i.InsertAd.destroy()
							}), i.InsertAd.load().then(function() {
								i.InsertAd.show().then(function(t) {})
							}).catch(function(t) {}));
							break;
						case "qq":
							i.AppBoxAdCan && i.AppBoxAd ? i.AppBoxAd.show() : i.InsertAd && i.InsertAd.show().catch(function(t) {
								i.InsertAd.load().then(function() {
									return i.showInsertAd()
								})
							});
							break;
						case "meizu":
							i.InsertAd && (0 == i.InsertAdTimes ? i.InsertAd.show() : (i.InsertAd.onLoad(function() {
								i.InsertAd.show()
							}), i.InsertAd.load()), i.InsertAdTimes += 1);
							break;
						case "xiaomi":
							i.InsertAd = window.qg.createInsertAd({
								adUnitId: "a30831f8fa91466f14dd3550667c046e"
							}), i.InsertAd.onLoad(function() {
								i.InsertAd.show()
							}), i.InsertAd.onError(function(t) {
								console.log(t)
							});
							break;
						case "4399":
							break;
						case "iOS":
							window.cocosAndNative = s.default.getInstance(), window.cocosAndNative.cocosToSDK("2", "", this, function(t) {
								console.log(t)
							}, null)
					}
				}, e.showToast = function(t) {
					switch (l.default.Channel) {
						case "wx":
							if (window.wx) window.wx.showToast({
								title: t
							})
					}
				}, e.AddDeskIcon = function() {
					switch (l.default.Channel) {
						case "oppo":
						case "vivo":
							if (window.qg) {
								var t = window.qg;
								t.hasShortcutInstalled({
									success: function(e) {
										0 == e && t.installShortcut({
											success: function() {},
											fail: function(t) {},
											complete: function() {}
										})
									},
									fail: function(t) {},
									complete: function() {}
								})
							}
					}
				}, e.login = function() {
					switch (l.default.Channel) {
						case "wx":
							if (window.wx) window.wx.login({
								success: function(t) {
									t.code ? i.token = t.code : console.log("\u767b\u5f55\u5931\u8d25\uff01" + t.errMsg)
								}
							});
							break;
						case "oppo":
							if (window.qg) window.qg.login({
								success: function(t) {
									i.token = t.data.token
								},
								fail: function(t) {
									console.log(JSON.stringify(t))
								}
							});
							break;
						case "vivo":
							if (window.qg) window.qg.login().then(function(t) {
								t.data.token && (i.token = t.data.token)
							}, function(t) {
								console.log("\u767b\u5f55\u5931\u8d25" + JSON.stringify(t))
							});
							break;
						case "huawei":
							if (window.hbs) window.hbs.gameLogin({
								forceLogin: 0,
								appid: "103440751",
								success: function(t) {
									console.log("DUWENJUN game login success:" + t), i.playerId = t.playerId, i.token = t.ts + "[@*L_Y_N*@]" + t.playerLevel.toString() + "[@*L_Y_N*@]" + t.gameAuthSign
								},
								fail: function(t, e) {
									console.log("DUWENJUN game login fail:" + t + ", code:" + e)
								}
							});
							break;
						case "zijie":
							if (window.tt) window.tt.login({
								success: function(t) {
									i.token = t.code
								},
								fail: function(t) {
									console.log("login \u8c03\u7528\u5931\u8d25")
								}
							});
							break;
						case "qq":
							if (window.qq) window.qq.login({
								success: function(t) {
									t.code ? i.token = t.code : console.log("\u767b\u5f55\u5931\u8d25\uff01" + t.errMsg)
								}
							})
					}
				}, e.channel = "wx", e.playerId = "", e.token = "", e.CustomAdActivate = !1, e.BannerAdActivate = !1, e.BannerAdHeight = 0, e.RewardedVideoAdTime = 0, e.RewardedVideoAdTimes = 0, e.RewardedVideoShow = !1, e.InsertAdTimes = 0, e.AppBoxAdCan = !1, e.AppBoxAdTimes = 0, e.videoAD = null, e.GridAd = null, e.shareId = "GperV5kYRvSpxOqu/gMRfQ==", e.shareTime = 0, e = i = a([d], e)
			}(cc.Component));
		i.default = h, cc._RF.pop()
	}, {
		"./Game/Common/GAudio": "GAudio",
		"./cocosAndNative": "cocosAndNative",
		"./config": "config"
	}],
	AIData: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c9403TwNGFNdb/VAXbp8TGD", "AIData"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.AIData = i.AIState = void 0;
		var o = t("../Data/GEnums");
		(function(t) {
			t[t.Thinking = 1] = "Thinking", t[t.Stand = 2] = "Stand", t[t.Atk = 3] = "Atk", t[t.Move = 4] = "Move", t[t.Skl = 5] = "Skl", t[t.Die = 6] = "Die", t[t.DrawBow = 7] = "DrawBow", t[t.DrawBowHold = 8] = "DrawBowHold", t[t.Reload = 9] = "Reload", t[t.HitFly = 10] = "HitFly", t[t.StandUp = 11] = "StandUp", t[t.StandUpUnderFloor = 12] = "StandUpUnderFloor"
		})(i.AIState || (i.AIState = {}));
		var a = function() {
			function t() {
				this.isCloser = !0, this.isZombie = !1, this.canBlock = !1, this.canDrawing = !1, this.needBlockAction = !1, this.needDrawAction = !1, this.fallBack = !1, this.aiMode = o.AIMode.\u9632\u5b88, this._atkTarget = null, this.moveCD = 0, this.sklCD = 0, this.atkCD = 0, this.isBlocking = !1, this.isDrawing = !1
			}
			return Object.defineProperty(t.prototype, "atkTarget", {
				get: function() {
					return this._atkTarget && !this._atkTarget.node && (this._atkTarget = null), this._atkTarget
				},
				set: function(t) {
					this._atkTarget = t
				},
				enumerable: !1,
				configurable: !0
			}), t
		}();
		i.AIData = a, cc._RF.pop()
	}, {
		"../Data/GEnums": "GEnums"
	}],
	GAchievement: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "bbbe6pYJoBDJri4GoVRPFZJ", "GAchievement"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.EnumAchie = void 0;
		var o, a = t("./Game/Data/GEnums"),
			n = t("./Game/MainData"),
			r = t("./Game/GBattle/UIAchievemetnPop");
		(function(t) {
			t[t.easypass = 0] = "easypass", t[t.normalpass = 1] = "normalpass", t[t.hardpass = 2] = "hardpass", t[t.fullpeople = 3] = "fullpeople", t[t.fullmoney = 4] = "fullmoney", t[t.box = 5] = "box", t[t.archerbox = 6] = "archerbox", t[t.fullminer = 7] = "fullminer", t[t.fullarcher = 8] = "fullarcher", t[t.fullswordman = 9] = "fullswordman", t[t.fullsparda = 10] = "fullsparda", t[t.fullmage = 11] = "fullmage", t[t.fulltower = 12] = "fulltower", t[t.fullgaint = 13] = "fullgaint", t[t.noup = 14] = "noup", t[t.matcheasy = 15] = "matcheasy", t[t.matchnormal = 16] = "matchnormal", t[t.matchhard = 17] = "matchhard", t[t.unlockallhead = 18] = "unlockallhead", t[t.unlockarcher = 19] = "unlockarcher", t[t.unlocksparda = 20] = "unlocksparda", t[t.unlockmage = 21] = "unlockmage", t[t.unloadgaint = 22] = "unloadgaint", t[t.endless1 = 23] = "endless1", t[t.endless5 = 24] = "endless5", t[t.endless10 = 25] = "endless10", t[t.endless20 = 26] = "endless20", t[t.endless100 = 27] = "endless100", t[t.endless1000 = 28] = "endless1000", t[t.heroalive10 = 29] = "heroalive10"
		})(o = i.EnumAchie || (i.EnumAchie = {}));
		var s = function() {
			function t() {}
			return t.FireAchievement = function(t) {
				if (null != n.default.role && null != n.default.role.achievements) {
					var e = n.default.role.achievements[t];
					console.log(e), 0 != e && null != e || (r.default.Show(t), n.default.role.achievements[t] = 1, n.default.SaveGame())
				}
			}, t.UpdateUpgrade = function(e) {
				t.IsJobUpFull(e, a.EnumJob.swordman) && this.FireAchievement(o.fullswordman), t.IsJobUpFull(e, a.EnumJob.miner) && this.FireAchievement(o.fullminer), t.IsJobUpFull(e, a.EnumJob.tower) && this.FireAchievement(o.fulltower), t.IsJobUpFull(e, a.EnumJob.archer) && this.FireAchievement(o.fullarcher), t.IsJobUpFull(e, a.EnumJob.sparda) && this.FireAchievement(o.fullsparda), t.IsJobUpFull(e, a.EnumJob.mage) && this.FireAchievement(o.fullmage), t.IsJobUpFull(e, a.EnumJob.gaint) && this.FireAchievement(o.fullgaint)
			}, t.IsJobUpFull = function(t, e) {
				for (var i = e, o = 0; o < n.default.allSeeds.joblvups.length; o++) {
					var a = n.default.allSeeds.joblvups[o];
					if (a.jobId == i) {
						var r = !1;
						for (var s in t) {
							if (Number(s) == o + 1) {
								r = !0;
								break
							}
						}
						if (!r) return !1;
						if (t[o + 1] != a.maxLv) return !1
					}
				}
				return !0
			}, t
		}();
		i.default = s, cc._RF.pop()
	}, {
		"./Game/Data/GEnums": "GEnums",
		"./Game/GBattle/UIAchievemetnPop": "UIAchievemetnPop",
		"./Game/MainData": "MainData"
	}],
	GActor: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "5860eimiP5O074mLiQSQSD7", "GActor"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("../Common/GameUtil"),
			a = t("../MainData"),
			n = function() {
				function t(t, e) {
					void 0 === e && (e = null), this.size = new o.Vector2(100, 150), this.enableScaleTime = !0, this.destroyed = !1, this.prevAnimName = null, this.prevAnimName2 = null, t ? (this.poolObj = t, this.node = t.node, this.anim = t.anim) : (this.poolObj = null, this.node = e, this.anim = null)
				}
				return Object.defineProperty(t.prototype, "x", {
					get: function() {
						return this.node.x
					},
					set: function(t) {
						this.node.x = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "y", {
					get: function() {
						return this.node.y
					},
					set: function(t) {
						this.node.y = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "parent", {
					get: function() {
						return this.node.parent
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "scaleX", {
					get: function() {
						return this.node.scaleX
					},
					set: function(t) {
						this.node.scaleX = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "scaleY", {
					get: function() {
						return this.node.scaleY
					},
					set: function(t) {
						this.node.scaleY = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "visible", {
					get: function() {
						return this.node.active
					},
					set: function(t) {
						this.node.active = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "rotation", {
					get: function() {
						return this.node.rotation
					},
					set: function(t) {
						this.node.rotation = t
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.Update = function() {}, t.prototype.OnDestroy = function() {
					this.poolObj && this.poolObj.Release2Pool(), this.node && (this.node.active = !1, this.node.destroy()), this.poolObj = null, this.node = null, this.anim = null
				}, t.prototype.SetPos = function(t, e) {
					this.x = t, this.y = e
				}, t.prototype.SetVec2Pos = function(t) {
					this.x = t.x, this.y = t.y
				}, t.prototype.PlayAnim = function(t, e, i) {
					if (this.prevAnimName2 = null, this.anim.clearTrack(1), t != this.prevAnimName) {
						this.anim.timeScale = e * a.default.spdScale;
						var o = this.anim.setAnimation(0, t, i);
						return this.prevAnimName = t, o
					}
					return null
				}, t.prototype.PlayAnim2 = function(t, e, i, o) {
					var n = null;
					return t != this.prevAnimName && (this.anim.timeScale = i * a.default.spdScale, n = this.anim.setAnimation(0, t, o), this.prevAnimName = t), e != this.prevAnimName2 && (this.anim.setAnimation(1, e, o), this.prevAnimName2 = e), n
				}, t.show_uuid = null, t
			}();
		i.default = n, cc._RF.pop()
	}, {
		"../Common/GameUtil": "GameUtil",
		"../MainData": "MainData"
	}],
	GArcher: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "dbfe7TmC6dCy7ECK6ykSHgH", "GArcher");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Data/GEnums"),
			s = t("../AIData"),
			l = t("../../MainData"),
			c = t("../Items/GArrow"),
			u = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(r.EnumJob.archer)) || this;
					return i.hasArrow = !1, i.hasDrawn = !1, i.userShoot = !1, i._arc = 0, i._dx = 0, i._dy = 0, i._power = 0, i._srcArc = 0, i._shootCD = 0, i.job = r.EnumJob.archer, e ? i.anim.setSkin("Archidon_Red") : i.anim.setSkin("Archidon"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.atkRange = i.gd.GetScanRange() - 300, i.aiData.animStand = "Archidon-Stand1", i.aiData.animRun = "Archidon-Run", i.aiData.animWalk = "Archidon-Walk", i.aiData.animCurDrawing = "Archidon-Draw-For-Intro", i.aiData.canBlock = !1, i.aiData.isCloser = !1, i.aiData.canDrawing = !0, i.shootRangeY = 100, a.default.SetupAnim(this.anim, r.EnumJob.archer, e), i.EquipSkill()
				}, e.prototype.ANIM_Move = function(t, e) {
					this.PlayAnimLoop2(t, "Archidon-Hold", e)
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this.GetUnitLv(r.EnumSkill.Archer_bow) * a.default.SkillPower;
					this.gd.atkPlus = Math.floor(this.gd.GetSD().atk * e * .2)
				}, e.prototype.AI_Enter_Stand = function() {
					this.aiData.isDrawing ? this.PlayAnimLoop2(this.aiData.animCurDrawing, this.aiData.animStand) : this.PlayAnimLoop2(this.aiData.animStand, "Archidon-Hold"), this.aiData.fallBack = !1
				}, e.prototype.AI_Enter_DrawBow = function() {
					this.hasArrow = !0, this.hasDrawn = !1, null != this.aiData.atkTarget && this.LookUnit(this.aiData.atkTarget)
				}, e.prototype.AI_Enter_DrawBow_Hold = function() {
					var t = this;
					t.hasArrow = !0, t.hasDrawn = !0, null != t.aiData.atkTarget && t.LookUnit(t.aiData.atkTarget)
				}, e.prototype.AI_Update_DrawBow_Hold = function() {
					t.prototype.AI_Update_DrawBow_Hold.call(this);
					var e = this;
					null != e.aiData.atkTarget && e.LookUnit(e.aiData.atkTarget), e.aiData.disY < e.shootRangeY && e.aiData.disX <= e.atkRange && (null == e.aiData.atkTarget || e.aiData.atkTarget.IsDead() || e.Shoot()), e.ChangeState(s.AIState.Thinking)
				}, e.prototype.CanAttack = function(e, i, o) {
					void 0 === e && (e = null), void 0 === i && (i = 1), void 0 === o && (o = !1), i *= .5;
					var a = this.aiData.aiMode != r.AIMode.\u9632\u5b88;
					return t.prototype.CanAttack.call(this, e, i, o) && a && this.aiData.disY < 100 && this._shootCD < 0
				}, e.prototype.AI_CalcFarAttackPos = function(e, i) {
					return t.prototype.AI_CalcFarAttackPos.call(this, e, i)
				}, e.prototype.AI_Enter_Atk = function() {
					this._shootCD < 0 ? (this.PlayAnim(this.aiData.animCurDrawing), null != this.aiData.atkTarget && this.LookUnit(this.aiData.atkTarget)) : this.ChangeState(s.AIState.Stand)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							o.userShoot ? (o._shootCD = 1, o.UserShoot2(), o.lockUserControl = !1, o.userShoot = !1, o.ChangeState(s.AIState.Stand)) : o._shootCD < 0 && o.Shoot(), o.hasArrow = !1, o.hasDrawn = !1, o.aiData.isDrawing = !1, o.aiData.atkTarget = null, o.PlayAnimLoop2(o.aiData.animStand, "Archidon-Hold");
							break;
						case "Drawn":
							o.hasArrow = !0, o.hasDrawn = !0, o.aiData.atkTarget && o.aiData.atkTarget.node && o.aiData.aiMode != r.AIMode.\u9632\u5b88 || o.ChangeState(s.AIState.DrawBowHold)
					}
				}, e.prototype.Shoot = function() {
					null != this.aiData.atkTarget && (c.default.GetArrow().Setup(this, this.aiData.atkTarget), this._shootCD = 1)
				}, e.prototype.UserControlMove = function(t, e, i) {
					var o = this;
					if (o.StateEnableUserControl()) {
						var a = 1.5 * o.gd.SPD();
						switch (o.sm.curState) {
							case s.AIState.Thinking:
							case s.AIState.Move:
							case s.AIState.Stand:
							case s.AIState.Atk:
							case s.AIState.Reload:
							case s.AIState.DrawBow:
							case s.AIState.DrawBowHold:
								i ? o.ChangeState(s.AIState.Stand) : (o.moveDest.x = o.x + t * a, o.moveDest.y = o.y + e * a, o.IsDrawing() ? o.MoveTo2(o.moveDest, a, o.aiData.animCurDrawing, o.aiData.animWalk, !1) : o.MoveTo(o.moveDest, a, o.aiData.animRun), o.sm.curState != s.AIState.Move && o.ChangeState(s.AIState.Move))
						}
					}
				}, e.prototype.GetAttackPos = function() {
					return t.prototype.GetAttackPos.call(this)
				}, e.prototype.Update = function() {
					t.prototype.Update.call(this), this._shootCD -= l.default.GetGameFPS()
				}, e.prototype.User_Shoot = function() {
					var t = this;
					t.StateEnableUserControl() && (t._shootCD > 0 || (t.userShoot = !0, t.lockUserControl = !0, t.aiData.isBlocking = !1, t.aiData.atkCD = t.gd.GetAtkCD(), this.PlayAnim(this.aiData.animCurDrawing)))
				}, e.prototype.UserShoot2 = function() {
					var t = this,
						e = c.default.GetArrow(),
						i = t.IsFlipX() ? t.x - 300 : t.x + 300;
					e.SetupNoTarget(t, i, t.y + 90, t.y), this._shootCD = 1
				}, e.prototype.UpdateShoot = function() {
					this.lockUserControl || (this.lockUserControl = !0)
				}, e
			}(a.default);
		i.default = u, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Data/GEnums": "GEnums",
		"../../MainData": "MainData",
		"../AIData": "AIData",
		"../Items/GArrow": "GArrow"
	}],
	GArrow: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "72b33vdanpLv4Psxmi+568O", "GArrow");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GActor"),
			n = t("../GBattle"),
			r = t("../../../CCScripts/GPrefabManager"),
			s = t("../../Common/GameUtil"),
			l = t("../../MainData"),
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.PI = 3.1415926, e.R2D = 57.29578, e.D2R = .01745329, e.startX = 0, e.startY = 0, e.destX = 0, e.destY = 0, e.oX = 0, e.oY = 0, e.startArc = 0, e.endArc = 0, e.spdArc = 0, e.type = 0, e.hfRange = 0, e.hasPoison = !1, e.isEnd = !1, e.isUserControl = !1, e.updateMode = 0, e._darc = 0, e._prevX = 0, e._prevY = 0, e
				}
				return o(e, t), e.GetArrow = function() {
					var t = new e(r.default.manager.GetGArrow(n.default.gb.gbRoot.gActors));
					return t.type = 0, t
				}, e.GetArrowTail = function() {
					var t = new e(r.default.manager.GetGArrowTail(n.default.gb.gbRoot.gActors));
					return t.type = 0, t
				}, e.GetGSpear = function() {
					var t = new e(r.default.manager.GetGSpear(n.default.gb.gbRoot.gActors));
					return t.type = 1, t
				}, e.GetGGut = function() {
					var t = new e(r.default.manager.GetGGut(n.default.gb.gbRoot.gActors));
					return t.type = 2, t
				}, e.prototype.SetupNoTarget = function(t, e, i, o) {
					this.updateMode = 0, this.atker = t, this.team = t.gd.team, this.dmg = t.gd.GetATK(), this.destX = e, this.destY = i + 90, this.launchY = o, this._Setup(t, 2 * Math.abs(e - t.x))
				}, e.prototype.Setup = function(t, e) {
					if (e && e.node) {
						this.updateMode = 0, this.atker = t, this.team = t.gd.team, this.dmg = t.gd.GetATK();
						var i = Math.abs(t.x - e.x) / (1e3 + Math.abs(e.curMoveSpd)),
							o = e.curMoveSpd * i;
						this.destX = e.x + o, this.destY = e.y + 90, this.launchY = e.y, this._Setup(t, .8 * t.atkRange)
					}
				}, e.prototype._Setup = function(t, e) {
					this.startX = t.x + (t.IsFlipX() ? -60 : 60), this.startY = t.y + 90, this.hfRange = e;
					var i = Math.atan2(this.destY - this.startY, this.destX - this.startX) * this.R2D,
						o = .5 * s.Vector2.Distance(this.startX, this.startY, this.destX, this.destY);
					e < o && (e = 1.1 * o);
					var a = -Math.acos(o / e) * this.R2D,
						r = this.startX < this.destX ? i + a : i - a;
					this.oX = Math.cos(r * this.D2R) * e + this.startX, this.oY = Math.sin(r * this.D2R) * e + this.startY, this.startArc = Math.atan2(this.startY - this.oY, this.startX - this.oX) * this.R2D, this.endArc = Math.atan2(this.destY - this.oY, this.destX - this.oX) * this.R2D, this._darc = this.startArc;
					var c = 2 * this.PI * e,
						u = 1e3 * l.default.spdScale,
						d = this.endArc - this.startArc,
						h = c * Math.abs(d) / 360 / u;
					this.spdArc = (this.endArc - this.startArc) / h, n.default.gb.arrows.push(this), this.isEnd = !1, this._prevX = this.x, this._prevY = this.y, this.Update()
				}, e.prototype.SetupArrowRain = function(t, e) {
					this.updateMode = 1, this.startX = t, this.startY = e + 1500, this.destX = t, this.destY = e, this.spdArc = 1e3, this.isEnd = !1, this.team = 0, this.node.angle = -90, this.x = this.startX, this.y = this.startY, this._prevX = this.x, this._prevY = this.y, this.dmg = 15, n.default.gb.arrows.push(this), this.Update()
				}, e.prototype.Update = function() {
					switch (this.updateMode) {
						case 0:
							this.UpdateMode0();
							break;
						case 1:
							this.UpdateMode1()
					}
				}, e.prototype.UpdateMode0 = function() {
					if (!this.isEnd) {
						this._darc += l.default.GetGameFPS() * this.spdArc;
						var t = Math.cos(this._darc * this.D2R) * this.hfRange + this.oX,
							e = Math.sin(this._darc * this.D2R) * this.hfRange + this.oY;
						this.x = t, this.y = e;
						t = this.x - this._prevX, e = this.y - this._prevY;
						var i = Math.atan2(e, t) * this.R2D;
						this.node.angle = i, this._prevX = this.x, this._prevY = this.y, this.CheckHit(), (this.spdArc > 0 && this._darc > this.endArc || this.spdArc < 0 && this._darc < this.endArc) && this.y <= this.launchY && this.RemoveMe(1)
					}
				}, e.prototype.UpdateMode1 = function() {
					this.isEnd || (this.y -= l.default.GetGameFPS() * this.spdArc, this.y < this.destY && (this.y = this.destY), this.CheckHit(), this.y == this.destY && this.RemoveMe(1))
				}, e.prototype.IsFlipX = function() {
					return this.startX > this.destX
				}, e.prototype.CheckHit = function() {
					if (null != n.default.gb && null != n.default.gb.units) {
						for (var t = this, e = null, i = 0; i < n.default.gb.units.length; i++) {
							var o = n.default.gb.units[i];
							if (this.team != o.gd.team && o.IsArrowHurtMe(this)) {
								var a = s.Vector2.DistanceSQRT(o.x, o.y, this.x, this.y);
								(null == e || a < 999999) && (e = o)
							}
						}
						null != e && (e.Behurt(t.atker, t.dmg, t.x, t.y, t.IsFlipX(), 0 == t.type, 1), t.hasPoison && e.SetOnPosion(!0), e.IsDead(), t.RemoveMe(0))
					}
				}, e.prototype.RemoveMe = function(t) {
					if (!this.isEnd) {
						var e = this;
						e.isEnd = !0;
						for (var i = 0; i < n.default.gb.arrows.length; i++) {
							var o = n.default.gb.arrows;
							if (1 == o.length && o[0] == e) {
								o.pop();
								break
							}
							if (o[i] == e) {
								o = n.default.gb.arrows.splice(i, 1);
								break
							}
						}
						t > 0 ? setTimeout(function() {
							e.poolObj.Release2Pool(), e.poolObj.node.removeFromParent(), e.atker = null, e.poolObj = null
						}, 1e3 * t) : (e.poolObj.Release2Pool(), e.poolObj.node.removeFromParent(), e.atker = null, e.poolObj = null)
					}
				}, e
			}(a.default);
		i.default = c, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GActor": "GActor",
		"../../Common/GameUtil": "GameUtil",
		"../../MainData": "MainData",
		"../GBattle": "GBattle"
	}],
	GAudio: [function(t, e, i) {
		"use strict";
		var o;
		cc._RF.push(e, "91cf0Dg0BNFX7u4wGHz0sYm", "GAudio"), Object.defineProperty(i, "__esModule", {
				value: !0
			}),
			function(t) {
				t[t["\u767b\u5f55\u754c\u9762"] = 0] = "\u767b\u5f55\u754c\u9762", t[t["\u73a9\u6cd5\u9009\u62e9\u754c\u9762"] = 0] = "\u73a9\u6cd5\u9009\u62e9\u754c\u9762", t[t["\u5173\u5361\u4e2d"] = 1] = "\u5173\u5361\u4e2d", t[t["\u5546\u5e97"] = 2] = "\u5546\u5e97", t[t["\u519b\u68b0\u5e93"] = 2] = "\u519b\u68b0\u5e93", t[t["\u80dc\u5229"] = 3] = "\u80dc\u5229", t[t["\u5931\u8d25"] = 4] = "\u5931\u8d25", t[t["\u9526\u6807\u8d5b"] = 5] = "\u9526\u6807\u8d5b", t[t["\u5b8c\u5168\u901a\u5173"] = 6] = "\u5b8c\u5168\u901a\u5173"
			}(o || (o = {}));
		var a = function() {
			function t() {}
			return t.PlayBGM = function(e) {
				void 0 === e && (e = .2), t.bgmOn && this.soundsPack.load("bgm", cc.AudioClip, function(t, i) {
					t && console.error(t), cc.audioEngine.stopMusic();
					var o = cc.audioEngine.playMusic(i, !0);
					cc.audioEngine.setVolume(o, e)
				})
			}, t.StopBGM = function() {
				cc.audioEngine.stopAll()
			}, t.PauseBGM = function() {
				cc.audioEngine.pauseAll()
			}, t.ResumeBGM = function() {
				t.bgmOn && cc.audioEngine.resumeAll()
			}, t.PlaySoundByName = function(e, i) {
				void 0 === i && (i = 1), t.soundOn && this.soundsPack.load(e, cc.AudioClip, function(t, o) {
					t && console.log("\u6ca1\u6709\u8fd9\u4e2a\u58f0\u97f3" + e);
					var a = cc.audioEngine.playEffect(o, !1);
					cc.audioEngine.setVolume(a, i)
				})
			}, t.PlaySoundBySoundString = function(t, e) {
				var i = .75 * e,
					o = t.replace("\n", "");
				"" == o ? console.log("\u58f0\u97f3\u4e3a\u7a7a") : this.PlaySoundByName(o, i)
			}, t.PlaySoundByAction = function(t, e) {
				var i = .75 * e;
				switch (t) {
					case "Giant-Walk":
						this.PlaySoundByName("FootstepGrass_1", i);
						break;
					case "Swordwrath-Jump":
						break;
					case "Swordwrath-Attack1":
						this.PlaySoundByName("Swoosh_3", i);
						break;
					case "Swordwrath-Attack2":
						this.PlaySoundByName("Swoosh_5", i);
						break;
					case "Archidon-Draw-For-Intro":
						this.PlaySoundByName("ShootBow_1", i);
						break;
					case "Spearton-Attack1":
						this.PlaySoundByName("ImpactFlesh_10", i);
						break;
					case "Spearton-Block-Attack3":
						this.PlaySoundByName("ShootBow_2", i);
						break;
					case "Spearton-Run":
						this.PlaySoundByName("FootstepGiant_1", i);
						break;
					case "Spearton-Throw":
						this.PlaySoundByName("2089_arrowHitMetal", i);
						break;
					case "Magikill-Spell1":
						this.PlaySoundByName("VSImpact_1", i);
						break;
					case "Giant-Attack":
						this.PlaySoundByName("Giant-Swoosh-Tree", i);
						break;
					case "Giant-Attack2":
						this.PlaySoundByName("Giant-Tree-Hit_1", i);
						break;
					case "Heal1":
						this.PlaySoundByName("HealSpellStart", i);
						break;
					case "Death1":
						this.PlaySoundByName("Death_1", i);
						break;
					case "Miner-Mine":
						this.PlaySoundByName("PickAxe_Miner-Mine-2", i);
						break;
					default:
						console.log("SoundEvent: ", t)
				}
			}, t.soundOn = !0, t.bgmOn = !0, t.curBGM = o.\u767b\u5f55\u754c\u9762, t
		}();
		i.default = a, cc._RF.pop()
	}, {}],
	GAuth: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "a3463KHZEJOmLsuG1EM7Wxz", "GAuth");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../config"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.BtnGuide = null, e.BtnDelete = null, e
				}
				return o(e, t), e.prototype.Setup = function() {}, e.prototype.initPage = function() {}, e.prototype.showAuthGuide = function() {
					if (0 == n.default.role.Auth) switch (r.default.Channel) {
						case "wx":
							if (window.wx) {
								var t = window.wx;
								console.log("\u8c03\u8d77\u5ba2\u6237\u7aef\u5c0f\u6e38\u620f\u7b7e\u5230\u8ba2\u9605\u6d88\u606f\u754c\u9762");
								var e = this;
								t.requestSubscribeMessage({
									tmplIds: ["KoZtaNWSdMzJfV6cdhvTccARz73NgdnoMoe4RzGllxs"],
									success: function(t) {
										"accept" == t.KoZtaNWSdMzJfV6cdhvTccARz73NgdnoMoe4RzGllxs && (e.node.active = !1)
									}
								})
							}
					}
				}, e.prototype.BTN_Del = function() {
					this.node.active = !1
				}, a([c(cc.Button)], e.prototype, "BtnGuide", void 0), a([c(cc.Button)], e.prototype, "BtnDelete", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../Game/MainData": "MainData",
		"../config": "config"
	}],
	GAutoRotation: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c927asbKnhAvpPhHk03KElZ", "GAutoRotation");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.arcSpd = 360, e
				}
				return o(e, t), e.prototype.update = function(t) {
					this.node.angle += this.arcSpd * t
				}, a([s], e.prototype, "arcSpd", void 0), e = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	GBattleAI: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "1eaf6PuXK5IBYVxozNzqmZU", "GBattleAI"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./GBattle"),
			a = t("./Units/GMiner"),
			n = t("../Data/GEnums"),
			r = t("../MainData"),
			s = t("../Common/GameUtil"),
			l = function() {
				function t() {
					this.buildId = -1, this.gb = null
				}
				return t.prototype.UpdateEnemyTeamAI = function() {
					var t = this;
					if (o.default.enableAI) {
						for (var e = t.gb.gd.teamDict[1], i = .01, l = .01, c = 0, u = (t.gb.gd.enemyMine, t.gb.gd.centerMine, !1), d = 0; d < t.gb.units.length; d++) {
							var h = t.gb.units[d];
							h.IsDead() || (h instanceof a.default ? 1 == h.gd.team && c++ : 0 == h.gd.team ? (i += h.sd.people, Math.abs(h.x - t.gb.TowerR.x) < 2100 && (u = !0)) : 1 == h.gd.team && (l += h.sd.people))
						}
						if (o.default.aiMode[1] == n.AIMode.\u9632\u5b88) u || t.SetAIMode(n.AIMode.\u5f85\u547d, 1), null != t.gb.TowerR.gd && 0 != t.gb.TowerR.gd.sdId && t.gb.TowerR.gd.hp < .2 * t.gb.TowerR.gd.GetHPMax() && t.SetAIMode(n.AIMode.\u5f85\u547d, 1);
						else if (o.default.aiMode[1] == n.AIMode.\u5f85\u547d) {
							if (o.default.aiMode[1] = n.AIMode.\u5f85\u547d, l > o.default.atkBP && (o.default.AIAtk == n.EnumAtkLogic.moreThanEnemyAtk ? (l > i || l >= e.maxPeople) && t.SetAIMode(n.AIMode.\u8fdb\u653b, 1) : o.default.AIAtk == n.EnumAtkLogic.fullPeopleAtk ? l >= e.maxPeople && t.SetAIMode(n.AIMode.\u8fdb\u653b, 1) : o.default.AIAtk == n.EnumAtkLogic.alwaysAtk && t.SetAIMode(n.AIMode.\u8fdb\u653b, 1)), o.default.aiMode[1] == n.AIMode.\u5f85\u547d) {
								if (u) {
									var p = l / i;
									o.default.AIFbk == n.EnumFallbackLogic.fallback5 ? p < .5 && t.SetAIMode(n.AIMode.\u9632\u5b88, 1) : o.default.AIFbk == n.EnumFallbackLogic.fallback8 && p < .8 && t.SetAIMode(n.AIMode.\u9632\u5b88, 1)
								}
								o.default.aiMode[1] == n.AIMode.\u9632\u5b88 && null != t.gb.TowerR.gd && 0 != t.gb.TowerR.gd.sdId && t.gb.TowerR.gd.hp < .2 * t.gb.TowerR.gd.GetHPMax() && t.SetAIMode(n.AIMode.\u5f85\u547d, 1)
							}
						} else {
							p = l / i;
							o.default.AIFbk == n.EnumFallbackLogic.fallback5 ? p < .5 && t.SetAIMode(n.AIMode.\u5f85\u547d, 1) : o.default.AIFbk == n.EnumFallbackLogic.fallback8 && p < .8 && t.SetAIMode(n.AIMode.\u5f85\u547d, 1)
						}
						if (0 == e.buildList.length && 1 == o.default.gb.TowerR.visible) {
							if (-1 == t.buildId || void 0 == t.buildId || null == t.buildId) {
								if (s.GameUtil.Contains(t.gb.gd.rUnits, n.EnumUnit.miner1) && c < t.gb.gd.enemyMine) t.buildId = n.EnumUnit.miner1;
								else {
									var f = Math.floor(s.GameUtil.RandomRange(0, t.gb.gd.rUnits.length));
									t.buildId = t.gb.gd.rUnits[f]
								}
								t.buildId == n.EnumUnit.miner1 && c >= 5 && (t.buildId = -1)
							}
							if (t.buildId >= 0) {
								var m = r.default.allSeeds.units[t.buildId];
								e.gold >= m.cost && l + m.people <= e.maxPeople + .2 && (t.gb.BuildUnit(t.buildId, 1), t.buildId = -1)
							}
						}
						r.default.curMode == n.\u6a21\u5f0f.\u50f5\u5c38 && (o.default.aiMode[1] = n.AIMode.\u8fdb\u653b)
					}
				}, t.prototype.SetAIMode = function(t, e) {
					o.default.aiMode[e] != t && (o.default.aiMode[e] = t)
				}, t
			}();
		i.default = l, cc._RF.pop()
	}, {
		"../Common/GameUtil": "GameUtil",
		"../Data/GEnums": "GEnums",
		"../MainData": "MainData",
		"./GBattle": "GBattle",
		"./Units/GMiner": "GMiner"
	}],
	GBattleMapLoader: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "42614f2DYFBrZFCe40bcXNj", "GBattleMapLoader");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./GBattle_CameraController"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.cc = null, e.bg_b = null, e.bg_c = null, e.bg_f = null, e
				}
				return o(e, t), e.prototype.LoadMap = function(t, e, i) {
					var o = this,
						a = [0, 300, 300, 300, 300, 300],
						n = [0, 0, 50, 50, 50, 150];
					cc.resources.load("BattleBG/bg" + t + "-b", cc.SpriteFrame, function(r, s) {
						o.bg_b.spriteFrame = s, o.bg_b.node.height = s.getTexture().height, o.bg_b.node.y = a[t], cc.resources.load("BattleBG/bg" + t + "-c", cc.SpriteFrame, function(a, r) {
							o.bg_c.spriteFrame = r, o.bg_c.node.height = r.getTexture().height, o.bg_c.node.y = n[t], cc.resources.load("BattleBG/bg" + t + "-f", cc.SpriteFrame, function(t, a) {
								o.bg_f.spriteFrame = a, o.bg_f.node.height = a.getTexture().height, e.call(i)
							})
						})
					})
				}, e.mapPack = null, a([l(n.default)], e.prototype, "cc", void 0), a([l(cc.Sprite)], e.prototype, "bg_b", void 0), a([l(cc.Sprite)], e.prototype, "bg_c", void 0), a([l(cc.Sprite)], e.prototype, "bg_f", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"./GBattle_CameraController": "GBattle_CameraController"
	}],
	GBattle_CameraController: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "d454728TKBBAbMe4W6udRxu", "GBattle_CameraController");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/GBattle/GBattle"),
			r = t("./GBattleMapLoader"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.targetCamera = null, e.maproot = null, e.towerL = null, e.towerR = null, e.enablePlayerTouch = !0, e.isMouseDown = !1, e.lookAtTarget = null, e._safeLock = !1, e._prevSpd = 0, e._lockTouch = !0, e._followUnit = null, e
				}
				return o(e, t), e.prototype.start = function() {
					this.node.on(cc.Node.EventType.TOUCH_START, this.OnMouseDown, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnMouseMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.OnMouseUp, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnMouseUp, this)
				}, e.prototype.LookAtObject = function(t, e, i, o) {
					void 0 === o && (o = !1);
					var a = this;
					a.lookAtTarget = t;
					var n = a.targetCamera.width / 2,
						r = a.safeDx(a.lookAtTarget.x - n);
					o ? (a._safeLock = !1, i && i.call(e)) : cc.tween(a.targetCamera).to(.5 * Math.abs(r / n), {
						x: r
					}, {
						easing: "quartOut"
					}).call(function() {
						a._safeLock = !1, i && i.call(e)
					}).start()
				}, e.prototype.safeDx = function(t) {
					var e = this.targetCamera.width / 2,
						i = e - 400,
						o = this.towerL.x + i - e,
						a = this.towerR.x - i - e;
					return t < o ? t = o : t > a && (t = a), t
				}, e.prototype.OnMouseDown = function(t) {
					this.IsEnableTouch(t) && (this.isMouseDown = !0, this._prevSpd = 0, n.default.gb.ui.SetSpellsTable(!1))
				}, e.prototype.OnMouseMove = function(t) {
					var e, i;
					this.IsEnableTouch(t) && (this.isMouseDown && (t.touch ? (e = t.touch._prevPoint.x, i = t.touch._point.x) : (e = t._prevX, i = t._x), this._prevSpd = e - i, this.SetupCamPos(this._prevSpd)))
				}, e.prototype.SetupCamPos = function(t) {
					var e = this.safeDx(this.targetCamera.x + t);
					t = e - this.targetCamera.x, this.targetCamera.x = e, this.maproot.bg_c.node.x += .4 * t, this.maproot.bg_b.node.x += .8 * t
				}, e.prototype.OnMouseUp = function(t) {
					this.IsEnableTouch(t) && (this.isMouseDown = !1)
				}, e.prototype.update = function(t) {
					if (this._followUnit) {
						var e = this.targetCamera.width / 2,
							i = this.safeDx(this._followUnit.node.x - e);
						i = .1 * (i - this.targetCamera.x), this.SetupCamPos(i)
					} else this.isMouseDown || 0 == this._prevSpd || (this._prevSpd = .9 * this._prevSpd, this.SetupCamPos(this._prevSpd))
				}, e.prototype.lateUpdate = function() {
					this._lockTouch = !1
				}, e.prototype.SetFollowUnit = function(t) {
					this.enablePlayerTouch = !t, this._followUnit = t, this.OnMouseUp(null)
				}, e.prototype.IsEnableTouch = function(t) {
					return !this._safeLock && (!this._lockTouch && (!!this.enablePlayerTouch && (!!t && (t.type != cc.Node.EventType.MOUSE_DOWN && t.type != cc.Node.EventType.TOUCH_START || !(t.eventPhase > 2) || (this._lockTouch = !0, !1)))))
				}, a([c(cc.Node)], e.prototype, "targetCamera", void 0), a([c(r.default)], e.prototype, "maproot", void 0), a([c(cc.Node)], e.prototype, "towerL", void 0), a([c(cc.Node)], e.prototype, "towerR", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../Game/GBattle/GBattle": "GBattle",
		"./GBattleMapLoader": "GBattleMapLoader"
	}],
	GBattle_CreateBattle: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "10463h1lWFEoruYZBBVi61g", "GBattle_CreateBattle"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./GBattle"),
			a = t("../Data/GD_Battle"),
			n = t("../MainData"),
			r = t("../Data/GD_Team"),
			s = t("../Data/SD_SceneTimeLine"),
			l = t("../Data/GEnums"),
			c = function() {
				function t() {}
				return t.InitWithStory = function(t) {
					var e = new a.default;
					e.sceneWidth = t.sceneWidth, e.timeline = [];
					for (var i = 0; i < t.timeLine.length; i++) e.timeline.push(t.timeLine[i]);
					e.buildRate = 1, e.atkRate = 1, e.hpRate = 1, e.ourMine = t.ourMines, e.enemyMine = t.enemyMines, e.centerMine = t.centerMines, e.winType = t.sceneType, e.lUnits = t.ourUnits, e.rUnits = t.enemyUnits, e.teamDict = {};
					var s = new r.default;
					s.team = 0, s.JobLvUp = n.default.role.story.JobLvUp, s.gold = t.startGold, s.maxPeople = n.default.MyMaxPeople, s.curPeople = 0, s.buildTimeRate = 1 / t.ourBuildCostTime;
					var l = new r.default;
					return l.team = 0, l.JobLvUp = {}, l.gold = t.enemyGold, l.maxPeople = t.enemyMaxPeople, l.curPeople = 0, l.buildTimeRate = 1 / t.enemyBuildCostTime, e.teamDict[0] = s, e.teamDict[1] = l, o.default.diff = n.default.role.story.diff, o.default.AIAtk = t.AIAttack, o.default.AIFbk = t.AIFallback, o.default.atkBP = t.atkBP, e
				}, t.InitWithMatch = function(t) {
					var e = new a.default;
					e.sceneWidth = t.sceneWidth, e.timeline = [];
					for (var i = 0; i < t.timeLine.length; i++) e.timeline.push(t.timeLine[i]);
					console.log(t.timeLine), e.buildRate = 1, e.atkRate = 1, e.hpRate = 1, e.ourMine = t.ourMines, e.enemyMine = t.enemyMines, e.centerMine = t.centerMines, e.winType = t.sceneType, e.lUnits = t.ourUnits, e.rUnits = t.enemyUnits, e.teamDict = {};
					var o = new r.default;
					o.team = 0, o.JobLvUp = n.default.role.match.JobLvUp, o.gold = t.startGold, o.maxPeople = n.default.MyMaxPeople, o.curPeople = 0, o.buildTimeRate = 1 / t.ourBuildCostTime;
					var s = new r.default;
					return s.team = 0, s.JobLvUp = {}, s.gold = t.enemyGold, s.maxPeople = n.default.MyMaxPeople, s.curPeople = 0, s.buildTimeRate = 1 / t.enemyBuildCostTime, e.teamDict[0] = o, e.teamDict[1] = s, e
				}, t.InitWithEndless = function(e) {
					var i = n.default.role.endless.curSceneId,
						o = new a.default;
					if (i > 10) {
						var s = ((i = i % 10 + 11) - 10) / 10 * .05;
						s, s
					}
					o.sceneWidth = e.sceneWidth, o.startGold = 30, o.timeline = [];
					for (var c = 0; c < e.timeLine.length; c++) o.timeline.push(e.timeLine[c]);
					o.buildRate = 1, o.ourMine = e.ourMines, o.enemyMine = e.enemyMines, o.centerMine = 0, o.winType = 1, o.lUnits = [l.EnumUnit.miner1, l.EnumUnit.swordman2], 1 == n.default.role.dataGather["unlock_\u5f13\u7bad\u624b"] && o.lUnits.push(l.EnumUnit.archer3), 1 == n.default.role.dataGather["unlock_\u77db\u58eb"] && o.lUnits.push(l.EnumUnit.sparda4), 1 == n.default.role.dataGather["unlock_\u6cd5\u5e08"] && o.lUnits.push(l.EnumUnit.mage5), 1 == n.default.role.dataGather["unlock_\u5de8\u4eba"] && o.lUnits.push(l.EnumUnit.gaint6), o.rUnits = [l.EnumUnit.miner1, l.EnumUnit.swordman2, l.EnumUnit.archer3, l.EnumUnit.sparda4, l.EnumUnit.mage5, l.EnumUnit.gaint6];
					if (1 == n.default.role.endless.curSceneId) t.AddUnitToTimeLine(o.timeline, l.EnumUnit.playerTower8, 0, 1, 0);
					else
						for (c = 0; c < n.default.role.endless.units.length; c++);
					1 == n.default.GetSkillLv(0, l.\u6a21\u5f0f.\u50f5\u5c38) && t.AddUnitToTimeLine(o.timeline, l.EnumUnit.roadblock, -1, 1, 0), o.teamDict = {};
					var u = new r.default;
					u.team = 0, u.JobLvUp = n.default.role.endless.JobLvUp, u.gold = o.startGold, u.maxPeople = n.default.MyMaxPeople, u.curPeople = 0, u.buildTimeRate = 1;
					var d = new r.default;
					return d.team = 0, d.JobLvUp = {}, d.gold = o.startGold, d.maxPeople = 400, d.curPeople = 0, d.buildTimeRate = 1, o.teamDict[0] = u, o.teamDict[1] = d, o
				}, t.AddUnitToTimeLine = function(t, e, i, o, a) {
					var n = new s.default;
					return n.uid = e, n.num = o, n.team = i, n.timeAt = a, n.atkRate = 1, n.hpRate = 1, n.towerFireHpRate = 1, t.push(n), n
				}, t
			}();
		i.default = c, cc._RF.pop()
	}, {
		"../Data/GD_Battle": "GD_Battle",
		"../Data/GD_Team": "GD_Team",
		"../Data/GEnums": "GEnums",
		"../Data/SD_SceneTimeLine": "SD_SceneTimeLine",
		"../MainData": "MainData",
		"./GBattle": "GBattle"
	}],
	GBattle_Root: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "001cbnnGWlNU4mRGC0XFQBy", "GBattle_Root");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./GBattle_CameraController"),
			r = t("./UIBattle"),
			s = t("../Game/GBattle/GBattle"),
			l = t("../Game/GBattle/GBattle_CreateBattle"),
			c = t("../Game/MainData"),
			u = t("../Game/Data/GD_Story"),
			d = t("../Game/Data/GEnums"),
			h = t("./GBattleMapLoader"),
			p = t("../ADSDK"),
			f = cc._decorator,
			m = f.ccclass,
			v = f.property,
			y = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.whiteMask = null, e.cameraController = null, e.ui = null, e.gActors = null, e.gShadows = null, e.TowerL = null, e.TowerR = null, e.RoadBlock = null, e.gMapView = null, e.mapLoader = null, e._startDt = 0, e.allseed = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					this._startDt = 0, this.whiteMask.active = !0, this.whiteMask.opacity = 255, this.RoadBlock.active = !1
				}, e.prototype.onLoad = function() {
					cc.game.on(cc.game.EVENT_HIDE, this.onPause), cc.game.on(cc.game.EVENT_SHOW, this.onResume)
				}, e.prototype.onPause = function() {
					console.log("Tạm dừng trò chơi"), s.default.gb.PauseGame(!0)
				}, e.prototype.onResume = function() {
					console.log("Cut Backstage is Back"), p.default.RewardedVideoShow || s.default.gb.PauseGame(!1)
				}, e.prototype.onDestroy = function() {
					cc.game.off(cc.game.EVENT_HIDE), cc.game.off(cc.game.EVENT_SHOW)
				}, e.prototype.update = function(t) {
					if (this._startDt < 10) this._startDt++;
					else if (this.gbCore) this.gbCore && this.gbCore.Update();
					else {
						var e = this;
						c.default.allSeeds || this._DebugGame();
						var o = 1;
						switch (c.default.curMode) {
							case d.\u6a21\u5f0f.\u6545\u4e8b:
								var a = c.default.allSeeds.scenes[i.curSelSceneId],
									n = l.default.InitWithStory(a);
								o = a.sceneBG, e.gbCore = new s.default(n, a, e);
								break;
							case d.\u6a21\u5f0f.\u6bd4\u8d5b:
								a = c.default.allSeeds.matchScenes[c.default.role.match.matchMode], n = l.default.InitWithMatch(a);
								o = a.sceneBG, e.gbCore = new s.default(n, a, e);
								break;
							case d.\u6a21\u5f0f.\u50f5\u5c38:
								5 == c.default.role.endless.curSceneId && (c.default.role.endless.curSceneId = 1);
								a = c.default.allSeeds.endlessScenes[c.default.role.endless.curSceneId], n = l.default.InitWithEndless(a);
								o = a.sceneBG, e.gbCore = new s.default(n, a, e)
						}
						this.mapLoader.LoadMap(o, function() {
							cc.tween(e.whiteMask).to(3, {
								opacity: 0
							}).call(function() {
								e.whiteMask.active = !1
							}).start()
						}, this)
					}
				}, e.prototype._DebugGame = function() {
					c.default.LoadAllSeeds(this.allseed), c.default.InitRole(), c.default.role.story = new u.default, c.default.role.story.curSceneId = 1
				}, e.prototype.BTN_DEBUG_WIN = function() {
					this.gbCore.BattleEnd(0)
				}, e.prototype.BTN_DEBUG_LOST = function() {
					this.gbCore.BattleEnd(1)
				}, e.prototype.BTN_DEBUG_ADDITEMS = function() {
					for (var t = 0; t <= 15; t++) c.default.role.items[t] || (c.default.role.items[t] = 0), c.default.role.items[t] = c.default.role.items[t] + 1;
					this.gbCore.ui.UpdateItemBtns()
				}, e.curSelSceneId = 0, a([v(cc.Node)], e.prototype, "whiteMask", void 0), a([v(n.default)], e.prototype, "cameraController", void 0), a([v(r.default)], e.prototype, "ui", void 0), a([v(cc.Node)], e.prototype, "gActors", void 0), a([v(cc.Node)], e.prototype, "gShadows", void 0), a([v(cc.Node)], e.prototype, "TowerL", void 0), a([v(cc.Node)], e.prototype, "TowerR", void 0), a([v(cc.Node)], e.prototype, "RoadBlock", void 0), a([v(cc.Node)], e.prototype, "gMapView", void 0), a([v(h.default)], e.prototype, "mapLoader", void 0), a([v(cc.JsonAsset)], e.prototype, "allseed", void 0), e = i = a([m], e)
			}(cc.Component);
		i.default = y, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/Data/GD_Story": "GD_Story",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/GBattle/GBattle_CreateBattle": "GBattle_CreateBattle",
		"../Game/MainData": "MainData",
		"./GBattleMapLoader": "GBattleMapLoader",
		"./GBattle_CameraController": "GBattle_CameraController",
		"./UIBattle": "UIBattle"
	}],
	GBattle: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "8fda4FZXMpLWLkSE11pzbx1", "GBattle"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("../Actor/GUnit"),
			a = t("./Items/GArrow"),
			n = t("./Units/GTower"),
			r = t("./Units/GRoadblock"),
			s = t("./Units/GMine"),
			l = t("./Units/GTowerArcher"),
			c = t("./Units/GMiner"),
			u = t("./Units/GArcher"),
			d = t("./Units/GSparta"),
			h = t("./Units/GWizard"),
			p = t("./Units/GPastor"),
			f = t("./GFormation"),
			m = t("../MainData"),
			v = t("../Data/GD_Unit"),
			y = t("../Data/GEnums"),
			g = t("./GBattleAI"),
			b = t("../Common/GameUtil"),
			_ = t("./Units/GSwordman"),
			S = t("./Units/GGaint"),
			w = t("./Units/GSummon_man"),
			D = t("./Zombies/GZombie"),
			G = t("./Zombies/GZombie_Poison"),
			k = t("./Zombies/GZombie_Underland"),
			A = t("./Zombies/GZombie_Dog"),
			I = t("./Zombies/GZombie_Sparda"),
			B = t("./Zombies/GZombie_Wizard"),
			C = t("./Zombies/GZombie_Gaint"),
			P = t("./Zombies/GZombie_Gaint2"),
			U = t("./GUnitOnBuilding"),
			M = t("../../GAchievement"),
			T = t("../Common/GAudio"),
			R = t("../../UI/Match/UIMatch"),
			N = t("../../CCScripts/GPrefabManager"),
			x = t("../../aldSDK"),
			O = function() {
				function t(t, e, i) {
					this.sumSummon = 0, this._pauseGame = !1, this.enemyDiffRate = .6, this.gd = null, this.sd = null, this.ai = null, this.prevTime = 0, this.currTime = 0, this.passTime = 0, this.units = null, this.mineList = null, this.arrows = null, this.TowerL = null, this.TowerR = null, this.roadblock = null, this.larchers = null, this.rarchers = null, this.fTeam0 = null, this.fTeam1 = null, this.onBattleEnd = null, this.onResetBattle = null, this.onExitBattle = null, this.killCount = 0, this.unitOnBuilding = {}, this.unitOnBuildingQueue = [], this._prevX = 0, this.isTimelineEnd = !1, this._prevIsPause = !1, this._arrowRainDt = 0, this.useItemTick = {}, this._isBattleEnd = !1, this.gbRoot = i, this.gd = t, this.sd = e, this.InitBattle()
				}
				return t.prototype.PauseGame = function(t) {
					this._pauseGame = t, t ? (T.default.PauseBGM(), console.log("Pause Game.")) : (T.default.ResumeBGM(), this.ui.uiPause.node.active && (this.ui.uiPause.node.active = !1), console.log("Resume Game."))
				}, t.prototype.InitBattle = function() {
					t.gb = this, m.default.tmpItems = {}, this.unitOnBuilding = {}, this.unitOnBuildingQueue = [];
					var e = this;
					switch (e.gbRoot.TowerL.x = 100 * -this.sd.sceneWidth, e.gbRoot.TowerR.x = 100 * this.sd.sceneWidth, console.log("Chiều rộng chiến trường", 100 * this.sd.sceneWidth), e.killCount = 0, e.fTeam0 = new f.default, e.fTeam1 = new f.default, e.units = [], e.mineList = [], e.arrows = [], e.larchers = [], e.rarchers = [], e.ai = new g.default, e.ai.gb = this, t.aiMode = [y.AIMode.\u5f85\u547d, y.AIMode.\u5f85\u547d], e.gd.teamDict[0].buildList = [], e.gd.teamDict[1].buildList = [], e.currTime = 0, e.TowerL = new n.default(e.gbRoot.TowerL), e.TowerL.visible = !0, e.TowerR = new n.default(e.gbRoot.TowerR), e.TowerR.visible = !1, o.default.LeftX = e.TowerL.x - 150, o.default.RightX = e.TowerR.x + 150, t.diff) {
						case 1:
							e.enemyDiffRate = .8;
							break;
						case 2:
							e.enemyDiffRate = 1;
							break;
						case 3:
							e.enemyDiffRate = 1.25
					}
					m.default.diff = t.diff;
					for (var i = 0; i < e.gd.ourMine; i++) {
						var a = b.GameUtil.RandomRange(200, 400) + 100 * i;
						a += this.TowerL.x, e.CreateMine(a)
					}
					for (i = 0; i < e.gd.enemyMine; i++) {
						a = b.GameUtil.RandomRange(200, 400) + 100 * i;
						a = this.TowerR.x - a, e.CreateMine(a)
					}
					for (i = 0; i < e.gd.centerMine; i++) {
						a = b.GameUtil.RandomRange(-800, 800);
						e.CreateMine(a)
					}
					if (m.default.curMode == y.\u6a21\u5f0f.\u50f5\u5c38)
						for (i = 0; i < m.default.role.endless.units.length; i++) {
							var r = m.default.role.endless.units[i],
								s = r.GetSD();
							e.CreateUnit(s, 0, r)
						}
					var l = e.gbRoot.ui;
					l.SetData(e.gd.teamDict[0], e.gd.lUnits), e.ui = l, e.SyncActors(), e.Update(), e.gbRoot.cameraController.LookAtObject(e.TowerL.node, null, null), e.ShowStartDesc()
				}, t.prototype.GetEffVolume = function(t) {
					var e = Math.abs(t - (this.gbRoot.cameraController.targetCamera.x + 700)),
						i = this.gbRoot.cameraController.targetCamera.width;
					if (e < .2 * i) return 1;
					var o = .2 * i,
						a = .3 * i - o,
						n = e - o;
					return a / (n = n < 0 ? 0 : n) < .25 ? 0 : Math.min(a / n, 1)
				}, t.prototype.ShowStartDesc = function() {
					switch (m.default.role.startTime = (new Date).getTime(), m.default.curMode) {
						case y.\u6a21\u5f0f.\u6545\u4e8b:
							this.ui.ShowStoryDesc(this.sd.name, this.sd.startDesc);
							var t = m.default.role.story.curSceneId;
							x.default.stageStart(t, "\u7ecf\u5178\u6a21\u5f0f");
							break;
						case y.\u6a21\u5f0f.\u6bd4\u8d5b:
							m.default.allSeeds.matchroles[R.default.enemyIdx] ? this.ui.PopDialog(m.default.allSeeds.matchroles[R.default.enemyIdx].startTxt, 2, R.default.enemyIdx) : console.log("UIMatch.enemyIdx", R.default.enemyIdx), x.default.stageStart(m.default.role.match.currentStep, "\u7ade\u8d5b\u6a21\u5f0f");
							break;
						case y.\u6a21\u5f0f.\u50f5\u5c38:
							1 != m.default.role.endless.curSceneId && this.ui.ShowEndless(), x.default.stageStart(m.default.role.endless.curSceneId, "\u65e0\u5c3d\u6a21\u5f0f")
					}
				}, t.prototype.CloseBattle = function() {
					for (var e = this, i = 0; i < e.units.length; i++) e.units[i].DeleteObject();
					e.units = null;
					for (i = 0; i < e.larchers.length; i++) e.larchers[i].DeleteObject();
					e.larchers = null;
					for (i = 0; i < e.rarchers.length; i++) e.rarchers[i].DeleteObject();
					e.rarchers = null;
					for (i = 0; i < e.arrows.length; i++) e.arrows[i].RemoveMe(0);
					e.arrows = null, e.TowerL.OnDestroy(), e.TowerL = null, e.TowerR.OnDestroy(), e.TowerR = null, e.fTeam0.Clear(), e.fTeam0 = null, e.fTeam1.Clear(), e.fTeam1 = null, e.roadblock && e.roadblock.OnDestroy(), e.roadblock = null, e.ui = null, null != e.ui.guideView.curGuide && e.ui.guideView.curGuide.PassGuide(), t.gb = null;
					for (i = 0; i < e.mineList.length; i++) e.mineList[i].OnDestroy();
					e.mineList = null
				}, t.prototype.CreateMine = function(t) {
					var e = new s.default(this.gbRoot.gActors);
					e.SetPos(t, b.GameUtil.RandomRange(50, 250)), this.mineList.push(e)
				}, t.prototype._SetupActorAnim = function(t, e) {
					for (var i = 0; i < t.length; i++) {
						var o = t[i];
						o.anim && (e ? (o.pauseTimeScale = o.anim.timeScale, o.anim.timeScale = 0) : o.anim.timeScale = o.pauseTimeScale)
					}
				}, t.prototype.Update = function() {
					var e = this;
					if (e._pauseGame != e._prevIsPause && (this._SetupActorAnim(e.units, e._pauseGame), this._SetupActorAnim(e.rarchers, e._pauseGame), this._SetupActorAnim(e.larchers, e._pauseGame), e._prevIsPause = e._pauseGame), !e._pauseGame && !t.IsBattleEnd() && (t.gb != e && (t.gb = e), e.prevTime = e.currTime, e.currTime += m.default.GetGameFPS(), e.passTime = m.default.GetGameFPS(), e.SyncActors(), e.UpdateTowerArcher(), e.UpdateUnitAI(), e.ai.UpdateEnemyTeamAI(), e.UpdateArrowRain(), e.UpdateBuilding(), e.UpdateTimeline(), e.CheckBattleEnd(), this.unitOnBuildingQueue.length > 0)) {
						var i = this.unitOnBuildingQueue[0],
							o = m.default.allSeeds.units[i];
						if (this.gd.teamDict[0].curPeople + o.people <= this.gd.teamDict[0].maxPeople) {
							var a = this.unitOnBuilding[i];
							if (a.buldingTime += m.default.GetGameFPS(), a.buldingTime >= a.needTime) {
								o = m.default.allSeeds.units[a.uid];
								this.CreateUnit(o, 0), a.queue--, a.buldingTime = 0, this.unitOnBuildingQueue.shift(), this.ui.UpdateUnitButtons(), this.gd.teamDict[0].curPeople == this.gd.teamDict[0].maxPeople && M.default.FireAchievement(M.EnumAchie.fullpeople);
								for (var n = 0, r = 0, s = 0, l = 0; l < e.units.length; l++) 0 == e.units[l].gd.team && (e.units[l] instanceof c.default ? n++ : e.units[l] instanceof u.default ? r++ : e.units[l] instanceof d.default && s++), n >= 8 && M.default.FireAchievement(M.EnumAchie.fullmoney), s >= 8 && M.default.FireAchievement(M.EnumAchie.box), r >= 12 && M.default.FireAchievement(M.EnumAchie.archerbox)
							}
						}
					}
				}, t.prototype.CancelUnitQueue = function(t) {
					var e = this.unitOnBuilding[t];
					if (e) {
						e.queue--;
						var i = this.gd.teamDict[0],
							o = this.GetCostBySkin(t);
						i.gold += o;
						var a = this.unitOnBuildingQueue.indexOf(t);
						if (this.unitOnBuildingQueue.splice(a, 1), this.unitOnBuildingQueue.length <= 0) e.buldingTime = 0;
						else this.unitOnBuildingQueue[0] != e.uid && (e.buldingTime = 0);
						this.ui.UpdateUnitButtons()
					}
				}, t.prototype.AddUnitQueue = function(t) {
					var e = this.unitOnBuilding[t];
					if (!e) {
						(e = new U.default).uid = t;
						var i = this.GetBuildingTimeBySkin(t);
						e.needTime = i, e.buldingTime = 0, e.queue = 0, this.unitOnBuilding[t] = e
					}
					var o = this.gd.teamDict[0],
						a = this.GetCostBySkin(t);
					if (o.gold >= a) {
						o.gold -= a, e.queue++, this.unitOnBuildingQueue.push(t), this.ui.UpdateUnitButtons();
						switch (t) {
							case y.EnumUnit.miner1:
								"\u77ff\u5de5";
								break;
							case y.EnumUnit.swordman2:
								"\u5251\u58eb";
								break;
							case y.EnumUnit.archer3:
								"\u5f13\u624b";
								break;
							case y.EnumUnit.sparda4:
								"\u67aa\u5175";
								break;
							case y.EnumUnit.mage5:
								"\u6cd5\u5e08";
								break;
							case y.EnumUnit.gaint6:
								"\u5de8\u4eba"
						}
					} else this.ui.ShowRes(), this.ui.RedAlert_Gold()
				}, t.prototype.SyncActors = function() {
					for (var t = this.gbRoot.gActors.children, e = 0; e < t.length; e++) {
						var i = t[e];
						i.zIndex = 10 * -i.y
					}
				}, t.prototype.UpdateUnitAI = function() {
					for (var t = 0; t < this.units.length; t++) {
						var e = this.units[t];
						e.IsDead() || e.Update()
					}
					for (t = 0; t < this.larchers.length; t++) this.larchers[t].Update();
					for (t = 0; t < this.rarchers.length; t++) this.rarchers[t].Update()
				}, t.prototype.UpdateTimeline = function() {
					var t = this;
					if (!t._isBattleEnd) {
						for (var e = t.gd.timeline.length - 1; e >= 0; e--) {
							if (0 == (o = t.gd.timeline[e]).timeAt && 1 == o.towerFireHpRate) {
								if ((r = m.default.allSeeds.units[o.uid]).job != y.EnumJob.tower) continue;
								t.gd.timeline.splice(e, 1);
								for (var i = 0; i < o.num; i++) {
									(s = t.CreateUnit(r, o.team)).gd.hpMaxPlus -= s.gd.GetSD().hp - s.gd.GetSD().hp * o.hpRate, s.gd.hp = s.gd.GetHPMax(), s.gd.atkPlus -= s.gd.GetSD().atk - s.gd.GetSD().atk * o.atkRate
								}
								null != o.popText && "" != o.popText && t.ui.PopDialog(o.popText, 2, o.popFaceId)
							}
						}
						for (e = t.gd.timeline.length - 1; e >= 0; e--) {
							var o, a = 0 == (o = t.gd.timeline[e]).team ? t.TowerL : t.TowerR,
								n = 1;
							if (n = null == a.gd || 0 == a.gd.sdId ? 0 : a.gd.hp / a.gd.GetHPMax(), o.timeAt <= t.prevTime && n <= o.towerFireHpRate) {
								t.gd.timeline.splice(e, 1);
								var r = m.default.allSeeds.units[o.uid];
								for (i = 0; i < o.num; i++) {
									var s;
									(s = t.CreateUnit(r, o.team)).gd.hpMaxPlus -= s.gd.GetSD().hp - s.gd.GetSD().hp * o.hpRate, s.gd.hp = s.gd.GetHPMax(), s.gd.atkPlus -= s.gd.GetSD().atk - s.gd.GetSD().atk * o.atkRate
								}
								null != o.popText && "" != o.popText && t.ui.PopDialog(o.popText, 2, o.popFaceId)
							}
						}
						t.isTimelineEnd = 0 == t.gd.timeline.length
					}
				}, t.prototype.UpdateArrowRain = function() {
					for (var t = 0; t < this.arrows.length; t++) this.arrows[t].Update();
					var e = this;
					if (!(e.GetItemDuration(y.EnumItem.i3) <= 0) && (e._arrowRainDt -= 1, e._arrowRainDt <= 0)) {
						var i = e.TowerL.x,
							o = e.TowerR.x,
							n = b.GameUtil.RandomRange(i, o),
							r = b.GameUtil.RandomRange(10, 235);
						a.default.GetArrow().SetupArrowRain(n, r), e._arrowRainDt = 2
					}
				}, t.prototype.CheckBattleEnd = function() {
					var t = this;
					if (-1 != t.gd.winType)
						if (t.TowerL.IsDead()) t.BattleEnd(1);
						else switch (t.gd.winType) {
							case 0:
								if (t.TowerR.IsDead()) return void t.BattleEnd(0);
								break;
							case 1:
								if (t.isTimelineEnd) {
									for (var e = !1, i = 0; i < t.units.length; i++)
										if (1 == t.units[i].gd.team && !t.units[i].IsDead()) {
											e = !0;
											break
										} if (!e) return void t.BattleEnd(0)
								}
						}
				}, t.prototype.BattleEnd = function(t) {
					var e = this;
					null != e.ui.guideView.curGuide && e.ui.guideView.curGuide.PassGuide(), e._isBattleEnd = !0;
					for (var i = 0; i < e.units.length; i++) e.units[i].gd.team == t ? null != e.units[i].aiData.animWin && e.units[i].PlayAnimLoop(e.units[i].aiData.animWin) : null != e.units[i].aiData.animStand && e.units[i].PlayAnimLoop(e.units[i].aiData.animStand);
					var o = t;
					this.gbRoot.cameraController.LookAtObject(0 == t ? e.TowerR.node : e.TowerL.node, e, function() {
						if (0 == t) {
							var i = e.TowerR.node.getChildByName("homeNode");
							cc.tween(i).to(2, {
								scaleY: 0
							}, {
								easing: "bounceInOut"
							}).start(), N.default.manager.CreateDestoryForg(i.x, i.y + 50, i.parent)
						} else {
							var a = e.TowerL.node.getChildByName("homeNode");
							cc.tween(a).to(2, {
								scaleY: 0
							}, {
								easing: "bounceInOut"
							}).start(), N.default.manager.CreateDestoryForg(a.x, a.y + 50, a.parent)
						}
						setTimeout(function() {
							e.LastEnd(o)
						}, 1500)
					})
				}, t.prototype.LastEnd = function(t) {
					0 == t ? (this.ui.End_Battle(!0), this.ui.uiWin.Show(this)) : (this.ui.End_Battle(!1), this.ui.uiLose.Show(this)), m.default.battleCount++, m.default.role.shopAd = {}, m.default.SaveGame()
				}, t.prototype.UpdateBuilding = function() {
					if (!this._isBattleEnd)
						for (var e = 0; e < 2; e++) {
							var i = this.gd.teamDict[e];
							if (!(i.buildList.length <= 0)) {
								var o = m.default.allSeeds.units[i.buildList[0]];
								i.buildDt > 0 && i.curPeople + o.people <= i.maxPeople && (i.buildDt -= m.default.GetGameFPS(), t.gb.GetItemDuration(y.EnumItem.i4) > 0 && 0 == e && (i.buildDt -= m.default.GetGameFPS()), i.buildDt = Math.max(0, i.buildDt), 0 == i.buildDt && (i.curPeople + o.people <= i.maxPeople ? (this.CreateUnit(o, e), i.buildList.shift(), i.buildList.length > 0 && (o = m.default.allSeeds.units[i.buildList[0]], i.buildDt = o.costTime * i.buildTimeRate)) : i.buildDt = o.costTime * i.buildTimeRate))
							}
						}
				}, t.prototype.CreateUnit = function(t, e, i) {
					void 0 === i && (i = null);
					var o = this,
						a = i || new v.default;
					i || (a.sdId = t.id, a.team = e);
					var n = t.job,
						s = null;
					switch (n) {
						case y.EnumJob.tower:
							(s = 0 == a.team ? o.TowerL : o.TowerR).visible = !0, s.job = y.EnumJob.tower;
							break;
						case y.EnumJob.roadblock:
							var f = new r.default;
							s = f, o.roadblock = f;
							break;
						case y.EnumJob.miner:
							s = new c.default(0 != a.team);
							break;
						case y.EnumJob.swordman:
							s = new _.default(0 != a.team);
							break;
						case y.EnumJob.archer:
							s = new u.default(0 != a.team);
							break;
						case y.EnumJob.sparda:
							s = new d.default(0 != a.team);
							break;
						case y.EnumJob.mage:
							s = new h.default(0 != a.team);
							break;
						case y.EnumJob.gaint:
							s = new S.default(0 != a.team);
							break;
						case y.EnumJob.meric:
							s = new p.default;
							break;
						case y.EnumJob.summon:
							s = new w.default(0 != a.team);
							break;
						case y.EnumJob.zombie:
							s = new D.default;
							break;
						case y.EnumJob.zombie_poison:
							s = new G.default;
							break;
						case y.EnumJob.zombie_under:
							s = new k.default;
							break;
						case y.EnumJob.zombie_dog:
							s = new A.default;
							break;
						case y.EnumJob.zombie_sparda:
							s = new I.default;
							break;
						case y.EnumJob.zombie_mage:
							s = new B.default;
							break;
						case y.EnumJob.zombie_gaint:
							s = new C.default;
							break;
						case y.EnumJob.zombie_gaint2:
							s = new P.default;
							break;
						case y.EnumJob.towerarcher:
							s = new l.default(0 != a.team);
							break;
						default:
							console.error("\u6ca1\u6709\u5bf9\u5e94\u5f53\u804c\u4e1a " + n)
					}
					switch (n) {
						case y.EnumJob.tower:
						case y.EnumJob.roadblock:
							break;
						default:
							s.x = -999, s.y = -999
					}
					if (s.InitData(a), s.InitTitle(), 1 == a.team) {
						var m = s.gd.GetSD().hp - s.gd.GetSD().hp * o.enemyDiffRate;
						m = Math.floor(m), a.hpMaxPlus = -m
					} else 0 == a.team && (a.hpMaxPlus = this.GetHPMaxPlusBySkin(a.sdId));
					(a.hp = s.gd.GetHPMax(), o.units.push(s), !s.aiData.isCloser || n != y.EnumJob.swordman && n != y.EnumJob.sparda && n != y.EnumJob.summon && n != y.EnumJob.zombie && n != y.EnumJob.zombie_sparda && n != y.EnumJob.gaint) || (0 == e ? o.fTeam0 : o.fTeam1).AddUnit(s);
					switch (n) {
						case y.EnumJob.roadblock:
						case y.EnumJob.tower:
							break;
						default:
							o.UpdateFormation(), s.SetVec2Pos(s.GetStartPos()), s.x += b.GameUtil.RandomRange(-100, 100)
					}
					if (0 != e && 1 != e || (o.gd.teamDict[e].curPeople += s.sd.people), s.poolObj && s.poolObj.HideStarTouch(), 0 == e && s.poolObj) switch (s.job) {
						case y.EnumJob.miner:
						case y.EnumJob.swordman:
						case y.EnumJob.archer:
						case y.EnumJob.sparda:
						case y.EnumJob.mage:
						case y.EnumJob.gaint:
							s.poolObj.SetOnTouch(s)
					}
					return s
				}, t.prototype.UseItem = function(t) {
					var e = this;
					if (e.GetItemDuration(t) <= 0) switch (m.default.SubItemNum(t), t) {
						case y.EnumItem.i4:
							e.AddBuff(t, 30);
							break;
						case y.EnumItem.i1:
						case y.EnumItem.i2:
						case y.EnumItem.i3:
						case y.EnumItem.i5:
							e.AddBuff(t, 15);
							break;
						case y.EnumItem.i6:
							e.AddHuman(y.EnumUnit.medic7);
							break;
						case y.EnumItem.i7:
							e.AddHuman(y.EnumUnit.unit13);
							break;
						case y.EnumItem.i8:
							for (var i = 0; i < 4; i++) e.AddHuman(y.EnumUnit.unit11), e.AddHuman(y.EnumUnit.unit12);
							break;
						case y.EnumItem.i9:
							e.AddHuman(y.EnumUnit.unit14)
					} else switch (m.default.SubItemNum(t), t) {
						case y.EnumItem.i4:
							e.AddItemDuration(t, 30);
							break;
						case y.EnumItem.i1:
						case y.EnumItem.i2:
						case y.EnumItem.i3:
						case y.EnumItem.i5:
							e.AddItemDuration(t, 15)
					}
					e.ui.UpdateItemBtns();
					m.default.allSeeds.items[t];
					m.default.SaveGame()
				}, t.prototype.CheckCost = function(t, e) {
					var i = this.gd.teamDict[e];
					return !(i.gold < t.cost || i.curPeople + t.people > i.maxPeople)
				}, t.prototype.AddHuman = function(t) {
					var e = m.default.allSeeds.units[t];
					return this.CreateUnit(e, 0)
				}, t.prototype.AddBuff = function(t, e) {
					this.useItemTick[t] = e + this.currTime;
					for (var i = 0; i < this.ui.uibuffs.length; i++) {
						var o = this.ui.uibuffs[i];
						if (o.itemId == t) {
							o.Show();
							break
						}
					}
				}, t.prototype.GetItemDuration = function(t) {
					var e = 0;
					return null != this.useItemTick[t] && (e = this.useItemTick[t]), e - this.currTime
				}, t.prototype.AddItemDuration = function(t, e) {
					var i = 0;
					null != this.useItemTick[t] && (i = this.useItemTick[t], this.useItemTick[t] = i + e)
				}, t.prototype.UpdateFormation = function() {
					var t = this;
					t.fTeam0.UpdateFPos(), t.fTeam1.UpdateFPos();
					for (var e = 0; e < 2; e++) {
						for (var i = 0, o = (0 == e ? t.fTeam0 : t.fTeam1, 0); o < t.units.length; o++) t.units[o].gd.team == e && t.units[o].aiData.isCloser && (t.units[o].offsetPos = t._CalcPosByIdx2(t.units[o], o), i++);
						i > 0 && (i += 4 - i % 4);
						for (o = 0; o < t.units.length; o++) t.units[o].gd.team == e && (t.units[o] instanceof h.default || t.units[o] instanceof p.default) && (t.units[o].offsetPos = t._CalcPosByIdx1(i, o, e), i++);
						i > 0 && (i += 4 - i % 4);
						for (o = 0; o < t.units.length; o++) t.units[o].gd.team == e && t.units[o] instanceof u.default && (t.units[o].offsetPos = t._CalcPosByIdx1(i, o, e), i++)
					}
				}, t.prototype._CalcPosByIdx1 = function(t, e, i) {
					var o = Math.floor(t / 4),
						a = 0 == i ? -70 * o : 70 * o,
						n = 60 * f.default.FList[t % 4] - 100;
					return new b.Vector2(a, n)
				}, t.prototype._CalcPosByIdx2 = function(t, e) {
					var i = t.formationPos,
						o = 0 == t.gd.team ? 100 * -i.x : 100 * i.x,
						a = 60 * i.y - 100;
					return new b.Vector2(o, a)
				}, t.prototype.UpdateTowerArcher = function() {
					for (var e = this, i = 0; i < 2; i++)
						if (t.aiMode[i] == y.AIMode.\u9632\u5b88) {
							for (var o = 0, a = 0; a < e.units.length; a++) e.units[a].IsDead() || e.units[a].gd.team != i || (e.units[a].x < this.TowerL.node.x - 370 || e.units[a].x > this.TowerR.x + 370) && o++;
							var n = 0 == i ? e.larchers : e.rarchers,
								r = Math.floor((o + 2) / 3);
							for (a = n.length; a < r; a++) {
								var s = new l.default(0 != i);
								s.poolObj.HideStarTouch();
								var c = 150 / (r + 1) * (a + 1);
								s.offsetPos = new b.Vector2(0, c), s.InitByTeam(i), s.InitTitle(), n.push(s)
							}
							for (a = 0; a < r; a++) {
								n[a].isOn = !0;
								c = 150 / (r + 1) * (a + 1);
								n[a].offsetPos = new b.Vector2(0, c)
							}
							for (a = r; a < n.length; a++) n[a].isOn = !1
						}
				}, t.IsBattleEnd = function() {
					return null == t.gb || t.gb._isBattleEnd
				}, t.prototype.BuildUnit = function(t, e) {
					var i = this.gd.teamDict[e],
						o = m.default.allSeeds.units[t];
					i.buildList.push(t), 1 == i.buildList.length && (i.buildDt = o.costTime * i.buildTimeRate), i.gold -= o.cost
				}, t.prototype.RemoveUnit = function(t) {
					for (var e = 0; e < this.units.length; e++) {
						if (this.units[e] == t) {
							0 != t.gd.team && 1 != t.gd.team || (this.gd.teamDict[t.gd.team].curPeople -= t.sd.people), this.units.splice(e, 1);
							break
						}
					}
					this.fTeam0.RemoveUnit(t), this.fTeam1.RemoveUnit(t)
				}, t.prototype.ResetGame = function() {
					T.default.StopBGM(), T.default.PlayBGM(), this.onResetBattle()
				}, t.prototype.ExitGame = function() {
					this.onExitBattle()
				}, t.prototype.GetCostBySkin = function(t) {
					var e = m.default.allSeeds.units[t].cost;
					return m.default.role.playerSkins.GetJobSkin(t) == y.EnumPlayerSkin.\u6811\u53f6 && (e *= .8), e
				}, t.prototype.GetBuildingTimeBySkin = function(t) {
					var e = m.default.allSeeds.units[t].costTime;
					return m.default.role.playerSkins.GetJobSkin(t) == y.EnumPlayerSkin.\u6811\u53f6 && (e *= .8), e
				}, t.prototype.GetHPMaxPlusBySkin = function(t) {
					var e = m.default.allSeeds.units[t],
						i = 0;
					switch (m.default.role.playerSkins.GetJobSkin(t)) {
						case y.EnumPlayerSkin.\u6811\u53f6:
						case y.EnumPlayerSkin.\u5bd2\u51b0:
						case y.EnumPlayerSkin.\u91ce\u517d:
						case y.EnumPlayerSkin.\u5ca9\u6d46:
							i = .2 * e.hp
					}
					return i
				}, t.bgIdx = 0, t.aiMode = null, t.diff = 1, t.gb = null, t.atkBP = 0, t.enableAI = !0, t
			}();
		i.default = O, cc._RF.pop()
	}, {
		"../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../GAchievement": "GAchievement",
		"../../UI/Match/UIMatch": "UIMatch",
		"../../aldSDK": "aldSDK",
		"../Actor/GUnit": "GUnit",
		"../Common/GAudio": "GAudio",
		"../Common/GameUtil": "GameUtil",
		"../Data/GD_Unit": "GD_Unit",
		"../Data/GEnums": "GEnums",
		"../MainData": "MainData",
		"./GBattleAI": "GBattleAI",
		"./GFormation": "GFormation",
		"./GUnitOnBuilding": "GUnitOnBuilding",
		"./Items/GArrow": "GArrow",
		"./Units/GArcher": "GArcher",
		"./Units/GGaint": "GGaint",
		"./Units/GMine": "GMine",
		"./Units/GMiner": "GMiner",
		"./Units/GPastor": "GPastor",
		"./Units/GRoadblock": "GRoadblock",
		"./Units/GSparta": "GSparta",
		"./Units/GSummon_man": "GSummon_man",
		"./Units/GSwordman": "GSwordman",
		"./Units/GTower": "GTower",
		"./Units/GTowerArcher": "GTowerArcher",
		"./Units/GWizard": "GWizard",
		"./Zombies/GZombie": "GZombie",
		"./Zombies/GZombie_Dog": "GZombie_Dog",
		"./Zombies/GZombie_Gaint": "GZombie_Gaint",
		"./Zombies/GZombie_Gaint2": "GZombie_Gaint2",
		"./Zombies/GZombie_Poison": "GZombie_Poison",
		"./Zombies/GZombie_Sparda": "GZombie_Sparda",
		"./Zombies/GZombie_Underland": "GZombie_Underland",
		"./Zombies/GZombie_Wizard": "GZombie_Wizard"
	}],
	GBlackHole: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "31884LYojdDh7EC4EK5669d", "GBlackHole");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../GBattle"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Actor/GActor"),
			s = t("../../MainData"),
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.target = null, e.spd = 1e3, e.team = 1, e
				}
				return o(e, t), e.GetGBlackHole = function() {
					return new e(n.default.manager.GetGBlackHole(a.default.gb.gbRoot.gActors))
				}, e.prototype.Setup = function(t, e) {
					this.target = t, this.team = e
				}, e.prototype.Update = function() {
					t.prototype.Update.call(this);
					var e = this;
					(null == e.target || e.target.IsDead()) && e.RemoveMe.call(e);
					var i = e.spd * s.default.GetGameFPS();
					if (Math.abs(e.x - e.target.x) < i) e.target.gd.team = e.team, e.x = e.target.x, e.y = e.target.y, e.RemoveMe.call(e);
					else {
						var o = e.target.x > e.x ? i : -i,
							a = e.target.y > e.y ? i : -i;
						e.x += o, e.y += a
					}
				}, e.prototype.RemoveMe = function() {
					this.poolObj.Release2Pool(), this.poolObj = null, this.target = null
				}, e
			}(r.default);
		i.default = l, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GActor": "GActor",
		"../../MainData": "MainData",
		"../GBattle": "GBattle"
	}],
	GBoxReward: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "7c0c5zPtQtA8bIJshzr2g0a", "GBoxReward");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../ADSDK"),
			s = t("../Game/GBattle/UIItemPop"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.boxup = null, e.bar = null, e.banner = !1, e.dec = 0, e
				}
				return o(e, t), e.prototype.Setup = function() {
					this.bar.node.width = 0
				}, e.prototype.BTN_Fetch = function() {
					this.boxup.getComponent(cc.Animation).play("OpenBox");
					var t = Math.floor(22 * Math.random());
					if (t < 10 && (t = 10), this.bar.node.width = this.bar.node.width + this.bar.node.parent.width * t / 100, this.bar.node.width >= .2 * this.bar.node.parent.width && !this.banner) {
						this.banner = !0, r.default.showBannerAd(), r.default.objCallBack = this, r.default.successCallBack = this.Fetch_help;
						var e = this;
						this.scheduleOnce(function() {
							e.node.active && r.default.destroyBannerAd()
						}, 10)
					}
					this.bar.node.width >= this.bar.node.parent.width && (this.bar.node.width, this.bar.node.parent.width, this.Fetch_help(!1))
				}, e.prototype.Fetch_help = function(t) {
					void 0 === t && (t = !0), n.default.role.rmb += 50, this.BTN_Delete(), s.default.Show(0, 50, t), n.default.SaveGame()
				}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, e.prototype.update = function(t) {
					this.dec = .012 * this.bar.node.parent.width, this.bar.node.width -= this.dec, this.bar.node.width <= 0 && (this.bar.node.width = 0)
				}, a([u(cc.Node)], e.prototype, "boxup", void 0), a([u(cc.Sprite)], e.prototype, "bar", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData"
	}],
	GButtonAudio: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "bb598Tg03FFgpkxd/hP4ZiT", "GButtonAudio");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n, r = t("../Game/Common/GAudio");
		(function(t) {
			t[t.button = 1] = "button"
		})(n || (n = {}));
		var s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.playAudio = "button", e.btn = null, e.toggle = null, e
				}
				return o(e, t), e.prototype.start = function() {
					if (this.btn = this.getComponent(cc.Button), this.toggle = this.getComponent(cc.Toggle), this.btn || this.toggle) {
						var t = new cc.Component.EventHandler;
						t.target = this.node, t.component = "GButtonAudio", t.handler = "OnClick", t.customEventData = "", this.btn && this.btn.clickEvents.push(t), this.toggle && this.toggle.clickEvents.push(t)
					}
				}, e.prototype.OnClick = function() {
					r.default.PlaySoundByName(this.playAudio)
				}, a([c({
					displayName: "\u97f3\u6548"
				})], e.prototype, "playAudio", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../Game/Common/GAudio": "GAudio"
	}],
	GClouds: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "17b9b9tWdZH54vc0O599ANz", "GClouds");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.cloud1 = null, e.cloud2 = null, e.cloud3 = null, e.cloud4 = null, e.cloud5 = null, e.clouds = null, e._dt = 0, e
				}
				return o(e, t), e.prototype.start = function() {
					this.clouds = [this.cloud1, this.cloud2, this.cloud3, this.cloud4, this.cloud5];
					for (var t = 0; t < this.clouds.length; t++) this.clouds[t].active = !1
				}, e.prototype.update = function(t) {
					if (this._dt -= t, this._dt <= 0)
						for (var e, i = function() {
								var t = o.clouds[a];
								if (t.active) return "continue";
								e = o.node.width / 20;
								var i = .5 * o.node.width + 256,
									n = -i;
								return t.active = !0, console.log(e), t.x = i, cc.tween(t).to(e, {
									x: n
								}).call(function() {
									t.active = !1
								}).start(), o._dt = 50 * Math.random() + 1, "break"
							}, o = this, a = 0; a < this.clouds.length; a++) {
							if ("break" === i()) break
						}
				}, a([s(cc.Node)], e.prototype, "cloud1", void 0), a([s(cc.Node)], e.prototype, "cloud2", void 0), a([s(cc.Node)], e.prototype, "cloud3", void 0), a([s(cc.Node)], e.prototype, "cloud4", void 0), a([s(cc.Node)], e.prototype, "cloud5", void 0), e = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	GDTurntable: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "1a091vfXDFGhbf/isvmAGkQ", "GDTurntable");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../ADSDK"),
			s = t("../Game/GBattle/UIItemPop"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.pointer = null, e.info = null, e.lb = null, e.ui = null, e.get_prob0 = [5, 5, 5, 5, 20, 60], e.get_prob1 = [5, 5, 5, 50, 30, 5], e.get_prob2 = [5, 5, 50, 30, 5, 5], e.get_prob3 = [20, 50, 16, 5, 5, 4], e.get_prob4 = [60, 17, 10, 5, 5, 3], e.get_prob5 = [70, 9, 10, 5, 4, 2], e.get_prob6 = [80, 6, 5, 5, 3, 1], e.get_prob = [], e.multi = [1.2, 1.5, 1.8, 2, 2.5, 3], e.cost = 0, e.index = 0, e.Turn = !0, e
				}
				return o(e, t), e.prototype.Setup = function(t) {
					this.ui = t, this.initPage()
				}, e.prototype.initPage = function() {
					switch (n.default.role.DturnTable > 1 ? this.info.getChildByName("AD").active = !0 : this.info.getChildByName("AD").active = !1, n.default.role.DturnTable) {
						case 0:
							this.cost = 100, this.lb.string = "100";
							break;
						case 1:
							this.cost = 200, this.lb.string = "200";
							break;
						case 2:
							this.cost = 500, this.lb.string = "500";
							break;
						case 3:
							this.cost = 1e3, this.lb.string = "1000";
							break;
						case 4:
							this.cost = 2e3, this.lb.string = "2000";
							break;
						case 5:
							this.cost = 3500, this.lb.string = "3500";
							break;
						case 6:
							this.cost = 5e3, this.lb.string = "5000"
					}
				}, e.prototype.BTN_Turn = function() {
					if (console.log(123), this.Turn && n.default.role.DturnTable < 7 && n.default.role.rmb >= this.cost)
						if (console.log(n.default.role.DturnTable), n.default.role.DturnTable <= 1) this.Turn = !1, this.Turn_help();
						else {
							var t = this;
							r.default.showVideoAD(this, function() {
								t.Turn_help()
							})
						}
				}, e.prototype.Turn_help = function() {
					switch (this.info.active = !1, n.default.role.DturnTable) {
						case 0:
							this.get_prob = this.get_prob0;
							break;
						case 1:
							this.get_prob = this.get_prob1;
							break;
						case 2:
							this.get_prob = this.get_prob2;
							break;
						case 3:
							this.get_prob = this.get_prob3;
							break;
						case 4:
							this.get_prob = this.get_prob4;
							break;
						case 5:
							this.get_prob = this.get_prob5;
							break;
						case 6:
							this.get_prob = this.get_prob6
					}
					for (var t = Math.floor(100 * Math.random()), e = 0, i = 0; i < this.get_prob.length; i++) {
						if (t >= e && t < e + this.get_prob[i]) {
							this.index = i;
							break
						}
						e += this.get_prob[i]
					}
					var o = 1800 + 60 * this.index;
					this.pointer.rotation %= 360;
					var a = cc.rotateTo(5, o).easing(cc.easeCubicActionInOut());
					this.pointer.runAction(cc.sequence(a, cc.callFunc(function() {})));
					var r = this,
						s = this.index;
					setTimeout(function() {
						r.Turn_help2(s)
					}, 5e3)
				}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, e.prototype.Turn_help2 = function(t) {
					if (n.default.role.DturnTable <= 1) var e = !1;
					else e = !0;
					console.log(this.cost), console.log(t);
					var i;
					i = Math.ceil(this.cost * (this.multi[t] - 1));
					var o = Math.ceil(this.cost * this.multi[t]);
					n.default.role.rmb += i, s.default.Show(0, o, e), n.default.role.DturnTable += 1, this.Turn = !0, n.default.role.DturnTable > 6 && this.BTN_Delete(), this.info.active = !0, this.initPage(), this.ui.UpdateView(), n.default.SaveGame()
				}, a([u(cc.Node)], e.prototype, "pointer", void 0), a([u(cc.Node)], e.prototype, "info", void 0), a([u(cc.Label)], e.prototype, "lb", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData"
	}],
	GD_Battle: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "4efe0Fi1AJOvaFrcYYaVrjy", "GD_Battle"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./GD_Team"),
			a = t("./SD_SceneTimeLine"),
			n = function() {
				function t() {
					this.sceneWidth = 0, this.teamDict = {}, this.timeline = [], this.startGold = 0, this.buildRate = 0, this.atkRate = 0, this.hpRate = 0, this.ourMine = 0, this.enemyMine = 0, this.centerMine = 0, this.lUnits = [], this.rUnits = [], this.winType = 0
				}
				return t.prototype.FromJSON = function(t) {
					var e = t.sceneWidth;
					void 0 != e && (this.sceneWidth = Number(e));
					var i = t.teamDict;
					if (void 0 != i)
						for (var n in this.teamDict = {}, i) {
							var r = new o.default;
							r.FromJSON(i[n]), this.teamDict[n] = r
						}
					var s = t.timeline;
					if (void 0 != s) {
						this.timeline = [];
						var l = s;
						if (null != l)
							for (var c = 0; c < l.length; c++)
								if (null != l[c]) {
									var u = new a.default;
									u.FromJSON(l[c]), this.timeline.push(u)
								}
					}
					var d = t.startGold;
					void 0 != d && (this.startGold = Number(d));
					var h = t.buildRate;
					void 0 != h && (this.buildRate = Number(h));
					var p = t.atkRate;
					void 0 != p && (this.atkRate = Number(p));
					var f = t.hpRate;
					void 0 != f && (this.hpRate = Number(f));
					var m = t.ourMine;
					void 0 != m && (this.ourMine = Number(m));
					var v = t.enemyMine;
					void 0 != v && (this.enemyMine = Number(v));
					var y = t.centerMine;
					void 0 != y && (this.centerMine = Number(y));
					var g = t.lUnits;
					void 0 != g && (this.lUnits = g);
					var b = t.rUnits;
					void 0 != b && (this.rUnits = b);
					var _ = t.winType;
					void 0 != _ && (this.winType = Number(_))
				}, t
			}();
		i.default = n, cc._RF.pop()
	}, {
		"./GD_Team": "GD_Team",
		"./SD_SceneTimeLine": "SD_SceneTimeLine"
	}],
	GD_Endless: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "3590cdbXNZCipdXv+/yQhl0", "GD_Endless"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./GD_Unit"),
			a = function() {
				function t() {
					this.sklP = 0, this.adsklP = 0, this.JobLvUp = {}, this.startGold = 0, this.curSceneId = 0, this.units = [], this.killCount = 0, this.passDay = 0
				}
				return t.prototype.FromJSON = function(t) {
					var e = t.sklP;
					void 0 != e && (this.sklP = Number(e));
					var i = t.adsklP;
					void 0 != i && (this.adsklP = Number(i));
					var a = t.JobLvUp;
					void 0 != a && (this.JobLvUp = a);
					var n = t.startGold;
					void 0 != n && (this.startGold = Number(n));
					var r = t.curSceneId;
					void 0 != r && (this.curSceneId = Number(r));
					var s = t.units;
					if (void 0 != s) {
						this.units = [];
						var l = s;
						if (null != l)
							for (var c = 0; c < l.length; c++)
								if (null != l[c]) {
									var u = new o.default;
									u.FromJSON(l[c]), this.units.push(u)
								}
					}
					var d = t.killCount;
					void 0 != d && (this.killCount = Number(d));
					var h = t.passDay;
					void 0 != h && (this.passDay = Number(h))
				}, t
			}();
		i.default = a, cc._RF.pop()
	}, {
		"./GD_Unit": "GD_Unit"
	}],
	GD_Match: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "33a2a0CoR5AN63la59Eajph", "GD_Match"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.sklP = 0, this.adsklP = 0, this.units = [], this.JobLvUp = {}, this.startGold = 0, this.players16 = [], this.players8 = [], this.players4 = [], this.players2 = [], this.winer = 0, this.currentStep = 0, this.matchMode = 0, this.diff = 0, this.playerRole = 0, this.cd = 0
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.sklP;
				void 0 != e && (this.sklP = Number(e));
				var i = t.adsklP;
				void 0 != i && (this.adsklP = Number(i));
				var o = t.units;
				void 0 != o && (this.units = o);
				var a = t.JobLvUp;
				void 0 != a && (this.JobLvUp = a);
				var n = t.startGold;
				void 0 != n && (this.startGold = Number(n));
				var r = t.players16;
				void 0 != r && (this.players16 = r);
				var s = t.players8;
				void 0 != s && (this.players8 = s);
				var l = t.players4;
				void 0 != l && (this.players4 = l);
				var c = t.players2;
				void 0 != c && (this.players2 = c);
				var u = t.winer;
				void 0 != u && (this.winer = Number(u));
				var d = t.currentStep;
				void 0 != d && (this.currentStep = Number(d));
				var h = t.matchMode;
				void 0 != h && (this.matchMode = Number(h));
				var p = t.diff;
				void 0 != p && (this.diff = Number(p));
				var f = t.playerRole;
				void 0 != f && (this.playerRole = Number(f));
				var m = t.cd;
				void 0 != m && (this.cd = Number(m))
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GD_PlayerSkin: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "43fdfiV6jFJZ6YmRKWYrqJG", "GD_PlayerSkin"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.jobSkin = {}, this.jobSkinState = []
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.jobSkin;
				void 0 != e && (this.jobSkin = e);
				var i = t.jobSkinState;
				void 0 != i && (this.jobSkinState = i)
			}, t.prototype.IsSkinBuyed = function(t, e) {
				if (0 == e) return !0;
				var i = 10 * t + e;
				return this.jobSkinState.indexOf(i) >= 0
			}, t.prototype.SetSkinBuyed = function(t, e) {
				var i = 10 * t + e;
				this.jobSkinState.push(i)
			}, t.prototype.GetJobSkin = function(t) {
				return t < 1 || t > 6 ? 0 : (this.jobSkin[t] || (this.jobSkin[t] = 0), this.jobSkin[t])
			}, t.prototype.SetJobSkin = function(t, e) {
				this.jobSkin[t] = e
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GD_Role: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "0fd68Qy59pG3amdyTnEL2XO", "GD_Role"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./GD_PlayerSkin"),
			a = t("./GD_Story"),
			n = t("./GD_Match"),
			r = t("./GD_Endless"),
			s = function() {
				function t() {
					this.uuid = 0, this.registerTime = 0, this.startTime = 0, this.channel = 0, this.chan_user = "", this.playerSkins = null, this.story = null, this.storySaves = [], this.match = null, this.endless = null, this.endlessdays = 0, this.items = {}, this.rmb = 0, this.achievements = {}, this.matchHistory = [], this.saveCount = 0, this.adTick = 0, this.ADVideoCount = 0, this.ADStaticCount = 0, this.prevTimeTick = 0, this.bigRewardRate = 0, this.signTime = 0, this.signCheck = 0, this.signSkin = 0, this.turnNum = 0, this.tickSaves = {}, this.freeDiamond = 0, this.winAdNum = 0, this.turnTable = 0, this.DturnTable = 0, this.CountDowm = 0, this.CountDowmTime = 0, this.MySGame = 0, this.DeskIcon = 0, this.Auth = 0, this.Auth_time = 0, this.NativeAdNum = 0, this.shopAd = {}, this.guide = {}, this.stringSaves = {}, this.userVer = 0, this.matchModel = 0, this.endlessModel = 0, this.dataGather = {}
				}
				return t.prototype.FromJSON = function(t) {
					var e = t.uuid;
					void 0 != e && (this.uuid = Number(e));
					var i = t.channel;
					void 0 != i && (this.channel = Number(i));
					var s = t.chan_user;
					void 0 != s && (this.chan_user = s);
					var l = t.startTime;
					void 0 != l && (this.startTime = Number(l));
					var c = t.registerTime;
					void 0 != c && (this.registerTime = Number(c));
					var u = t.playerSkins;
					void 0 != u && (null != u ? (null == this.playerSkins && (this.playerSkins = new o.default), this.playerSkins.FromJSON(u)) : this.playerSkins = null);
					var d = t.story;
					void 0 != d && (null != d ? (null == this.story && (this.story = new a.default), this.story.FromJSON(d)) : this.story = null);
					var h = t.storySaves;
					if (void 0 != h) {
						this.storySaves = [];
						var p = h;
						if (null != p)
							for (var f = 0; f < p.length; f++)
								if (null != p[f]) {
									var m = new a.default;
									m.FromJSON(p[f]), this.storySaves.push(m)
								}
					}
					var v = t.match;
					void 0 != v && (null != v ? (null == this.match && (this.match = new n.default), this.match.FromJSON(v)) : this.match = null);
					var y = t.endless;
					void 0 != y && (null != y ? (null == this.endless && (this.endless = new r.default), this.endless.FromJSON(y)) : this.endless = null);
					var g = t.endlessdays;
					void 0 != g && (this.endlessdays = Number(g));
					var b = t.items;
					void 0 != b && (this.items = b);
					var _ = t.rmb;
					void 0 != _ && (this.rmb = Number(_));
					var S = t.achievements;
					void 0 != S && (this.achievements = S);
					var w = t.matchHistory;
					void 0 != w && (this.matchHistory = w);
					var D = t.saveCount;
					void 0 != D && (this.saveCount = Number(D));
					var G = t.adTick;
					void 0 != G && (this.adTick = Number(G));
					var k = t.ADVideoCount;
					void 0 != k && (this.ADVideoCount = Number(k));
					var A = t.ADStaticCount;
					void 0 != A && (this.ADStaticCount = Number(A));
					var I = t.prevTimeTick;
					void 0 != I && (this.prevTimeTick = Number(I));
					var B = t.bigRewardRate;
					void 0 != B && (this.bigRewardRate = Number(B));
					var C = t.signTime;
					void 0 != C && (this.signTime = Number(C));
					var P = t.signCheck;
					void 0 != P && (this.signCheck = Number(P));
					var U = t.signSkin;
					void 0 != U && (this.signSkin = Number(U));
					var M = t.turnNum;
					void 0 != M && (this.turnNum = Number(M));
					var T = t.tickSaves;
					void 0 != T && (this.tickSaves = T);
					var R = t.freeDiamond;
					void 0 != R && (this.freeDiamond = Number(R));
					var N = t.winAdNum;
					void 0 != N && (this.winAdNum = Number(N));
					var x = t.turnTable;
					void 0 != x && (this.turnTable = Number(x));
					var O = t.DturnTable;
					void 0 != O && (this.DturnTable = Number(O));
					var E = t.CountDowm;
					void 0 != E && (this.CountDowm = Number(E));
					var F = t.CountDowmTime;
					void 0 != F && (this.CountDowmTime = Number(F));
					var j = t.MySGame;
					void 0 != j && (this.MySGame = Number(j));
					var L = t.DeskIcon;
					void 0 != L && (this.DeskIcon = Number(L));
					var V = t.Auth;
					void 0 != V && (this.Auth = Number(V));
					var H = t.Auth_time;
					void 0 != H && (this.Auth_time = Number(H));
					var J = t.NativeAdNum;
					void 0 != J && (this.NativeAdNum = Number(J));
					var W = t.shopAd;
					void 0 != W && (this.shopAd = W);
					var K = t.guide;
					void 0 != K && (this.guide = K);
					var Z = t.stringSaves;
					void 0 != Z && (this.stringSaves = Z);
					var X = t.userVer;
					void 0 != X && (this.userVer = Number(X));
					var z = t.matchModel;
					void 0 != z && (this.matchModel = Number(z));
					var q = t.endlessModel;
					void 0 != q && (this.endlessModel = Number(q));
					var Y = t.dataGather;
					void 0 != Y && (this.dataGather = Y)
				}, t
			}();
		i.default = s, cc._RF.pop()
	}, {
		"./GD_Endless": "GD_Endless",
		"./GD_Match": "GD_Match",
		"./GD_PlayerSkin": "GD_PlayerSkin",
		"./GD_Story": "GD_Story"
	}],
	GD_ServerConfig: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "985c4X5hnRCZK26Es/kqMt1", "GD_ServerConfig"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.luckywheel = 0, this.signday = 0, this.share = 0, this.bigreward = 0, this.freermb = 0, this.flybox = 0, this.bannerad = 0, this.gameBannerRate = 0, this.pageAD = 0, this.offlineAD = 0, this.moka = 0, this.moka_winView = 0, this.moka_refreshDelay = 5, this.moka_LRScale = 1, this.moka_LRPosX = 70, this.moka_LRPosY = 0, this.moka_TOPScale = 1, this.moka_TOPPosX = 0, this.moka_TOPPosY = 0, this.bannerad_fixy = 0, this.pageAdRate = 50, this.pageNativeAD_Rate = 50, this.pageADCount = 12, this.pageAD_GamePortalRate = 60, this.lockMatchAndEndless = 0, this.debugMode = 0, this.ver = 0, this.adScene = [], this.adScene_Rate = -1, this.gameHardOnly = 0, this.shareData = [], this.share_1dayNum = 0, this.share_2dayNum = 0, this.share_opList = [0], this.loginADSetting = null, this.userSubscribe = 0, this.nativePageADBugTouch = 0, this.subscribeIds = ["", "", ""], this.maxPeople = 20
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.luckywheel;
				void 0 != e && (this.luckywheel = Number(e));
				var i = t.signday;
				void 0 != i && (this.signday = Number(i));
				var o = t.share;
				void 0 != o && (this.share = Number(o));
				var a = t.bigreward;
				void 0 != a && (this.bigreward = Number(a));
				var n = t.freermb;
				void 0 != n && (this.freermb = Number(n));
				var r = t.flybox;
				void 0 != r && (this.flybox = Number(r));
				var s = t.bannerad;
				void 0 != s && (this.bannerad = Number(s));
				var l = t.gameBannerRate;
				void 0 != l && (this.gameBannerRate = Number(l));
				var c = t.pageAD;
				void 0 != c && (this.pageAD = Number(c));
				var u = t.pageAD_GamePortalRate;
				void 0 != u && (this.pageAD_GamePortalRate = Number(u));
				var d = t.offlineAD;
				void 0 != d && (this.offlineAD = Number(d));
				var h = t.moka;
				void 0 != h && (this.moka = Number(h));
				var p = t.moka_winView;
				void 0 != p && (this.moka_winView = Number(p));
				var f = t.moka_refreshDelay;
				void 0 != f && (this.moka_refreshDelay = Number(f));
				var m = t.moka_LRScale;
				void 0 != m && (this.moka_LRScale = Number(m));
				var v = t.moka_LRPosX;
				void 0 != v && (this.moka_LRPosX = Number(v));
				var y = t.moka_LRPosY;
				void 0 != y && (this.moka_LRPosY = Number(y));
				var g = t.moka_TOPScale;
				void 0 != g && (this.moka_TOPScale = Number(g));
				var b = t.moka_TOPPosX;
				void 0 != b && (this.moka_TOPPosX = Number(b));
				var _ = t.moka_TOPPosY;
				void 0 != _ && (this.moka_TOPPosY = Number(_));
				var S = t.bannerad_fixy;
				void 0 != S && (this.bannerad_fixy = Number(S));
				var w = t.pageAdRate;
				void 0 != w && (this.pageAdRate = Number(w));
				var D = t.pageNativeAD_Rate;
				void 0 != D && (this.pageNativeAD_Rate = Number(D));
				var G = t.pageADCount;
				void 0 != G && (this.pageADCount = Number(G));
				var k = t.debugMode;
				void 0 != k && (this.debugMode = Number(k));
				var A = t.lockMatchAndEndless;
				void 0 != A && (this.lockMatchAndEndless = Number(A));
				var I = t.ver;
				void 0 != I && (this.ver = Number(I));
				var B = t.adScene;
				void 0 != I && (this.adScene = B);
				var C = t.adScene_Rate;
				void 0 != C && (this.adScene_Rate = Number(C));
				var P = t.gameHardOnly;
				void 0 != P && (this.gameHardOnly = Number(P));
				var U = t.shareData;
				void 0 != U && (this.shareData = U);
				var M = t.share_1dayNum;
				void 0 != M && (this.share_1dayNum = Number(M));
				var T = t.share_2dayNum;
				void 0 != T && (this.share_2dayNum = Number(T)), this.share_opList = [0];
				var R = t.share_opList;
				void 0 != R && (this.share_opList = R);
				var N = t.loginADSetting;
				void 0 != N && (this.loginADSetting = N);
				var x = t.userSubscribe;
				void 0 != x && (this.userSubscribe = Number(x));
				var O = t.nativePageADBugTouch;
				void 0 != O && (this.nativePageADBugTouch = Number(O));
				var E = t.subscribeIds;
				void 0 != E && (this.subscribeIds = E);
				var F = t.maxPeople;
				void 0 != F && (this.maxPeople = F)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GD_Story: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "6bae1UXef9DuJlACnN1ante", "GD_Story"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.sklP = 0, this.adsklP = 0, this.units = [], this.JobLvUp = {}, this.startGold = 0, this.curSceneId = 0, this.diff = 0, this.useSeconds = 0, this.boxid = 0
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.sklP;
				void 0 != e && (this.sklP = Number(e));
				var i = t.adsklP;
				void 0 != i && (this.adsklP = Number(i));
				var o = t.units;
				void 0 != o && (this.units = o);
				var a = t.JobLvUp;
				void 0 != a && (this.JobLvUp = a);
				var n = t.startGold;
				void 0 != n && (this.startGold = Number(n));
				var r = t.curSceneId;
				void 0 != r && (this.curSceneId = Number(r));
				var s = t.diff;
				void 0 != s && (this.diff = Number(s));
				var l = t.useSeconds;
				void 0 != l && (this.useSeconds = Number(l));
				var c = t.boxid;
				void 0 != c && (this.boxid = Number(c))
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GD_Team: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "05969gS649FXpK8d+jQcanO", "GD_Team"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.team = 0, this.gold = 0, this.curPeople = 0, this.maxPeople = 0, this.JobLvUp = {}, this.buildList = [], this.buildDt = 0, this.buildTimeRate = 0
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.team;
				void 0 != e && (this.team = Number(e));
				var i = t.gold;
				void 0 != i && (this.gold = Number(i));
				var o = t.curPeople;
				void 0 != o && (this.curPeople = Number(o));
				var a = t.maxPeople;
				void 0 != a && (this.maxPeople = Number(a));
				var n = t.JobLvUp;
				void 0 != n && (this.JobLvUp = n);
				var r = t.buildList;
				void 0 != r && (this.buildList = r);
				var s = t.buildDt;
				void 0 != s && (this.buildDt = Number(s));
				var l = t.buildTimeRate;
				void 0 != l && (this.buildTimeRate = Number(l))
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GD_Unit: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "d0ceeKfI1JKrIh5sMAgiPWr", "GD_Unit"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("../MainData"),
			a = function() {
				function t() {
					this.sdId = 0, this.team = 0, this.hp = 0, this.spdPlus = 0, this.hpMaxPlus = 0, this.atkPlus = 0, this.defPlus = 0, this.atkSpdPlus = 0, this.costPlus = 0, this.costTimePlus = 0, this.sklCDPlus = 0, this.atkCDPlus = 0
				}
				return t.prototype.FromJSON = function(t) {
					var e = t.sdId;
					void 0 != e && (this.sdId = Number(e));
					var i = t.team;
					void 0 != i && (this.team = Number(i));
					var o = t.hp;
					void 0 != o && (this.hp = Number(o))
				}, t.prototype.GetSD = function() {
					return o.default.allSeeds.units[this.sdId]
				}, t.prototype.SPD = function() {
					return 100 * this.GetSD().spd + this.spdPlus
				}, t.prototype.GetHPMax = function() {
					return this.GetSD().hp + this.hpMaxPlus
				}, t.prototype.GetScanRange = function() {
					return 100 * this.GetSD().scanRange
				}, t.prototype.GetATK = function() {
					return this.GetSD().atk + this.atkPlus
				}, t.prototype.GetDEF = function() {
					return this.GetSD().def + this.defPlus
				}, t.prototype.GetAtkSpd = function() {
					return this.GetSD().atkSpd + this.atkSpdPlus
				}, t.prototype.GetCost = function() {
					return this.GetSD().cost + this.costPlus
				}, t.prototype.GetCostTime = function() {
					return this.GetSD().costTime + this.costTimePlus
				}, t.prototype.GetSklCD = function() {
					return this.GetSD().sklCD + this.sklCDPlus
				}, t.prototype.GetAtkCD = function() {
					return this.GetSD().atkCD + this.atkCDPlus
				}, t
			}();
		i.default = a, cc._RF.pop()
	}, {
		"../MainData": "MainData"
	}],
	GEnums: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "a66d5xF5b9M45nrQctFG1uq", "GEnums"), Object.defineProperty(i, "__esModule", {
				value: !0
			}), i.StandY = i.\u6a21\u5f0f = i.AIMode = i.EnumFallbackLogic = i.EnumAtkLogic = i.EnumUnit = i.EnumItem = i.EnumSkill = i.EnumProp = i.EnumJob = i.EnumPlayerSkin = void 0,
			function(t) {
				t[t["\u7ecf\u5178"] = 0] = "\u7ecf\u5178", t[t["\u6811\u53f6"] = 1] = "\u6811\u53f6", t[t["\u5bd2\u51b0"] = 2] = "\u5bd2\u51b0", t[t["\u91ce\u517d"] = 3] = "\u91ce\u517d", t[t["\u5ca9\u6d46"] = 4] = "\u5ca9\u6d46", t[t["\u55dc\u8840"] = 5] = "\u55dc\u8840"
			}(i.EnumPlayerSkin || (i.EnumPlayerSkin = {})),
			function(t) {
				t[t.miner = 1] = "miner", t[t.swordman = 2] = "swordman", t[t.archer = 3] = "archer", t[t.sparda = 4] = "sparda", t[t.mage = 5] = "mage", t[t.gaint = 6] = "gaint", t[t.meric = 7] = "meric", t[t.tower = 8] = "tower", t[t.mine = 9] = "mine", t[t.summon = 10] = "summon", t[t.roadblock = 11] = "roadblock", t[t.zombie = 12] = "zombie", t[t.zombie_poison = 13] = "zombie_poison", t[t.zombie_under = 14] = "zombie_under", t[t.zombie_dog = 15] = "zombie_dog", t[t.zombie_sparda = 16] = "zombie_sparda", t[t.zombie_mage = 17] = "zombie_mage", t[t.zombie_gaint = 18] = "zombie_gaint", t[t.zombie_gaint2 = 19] = "zombie_gaint2", t[t.towerarcher = 20] = "towerarcher"
			}(i.EnumJob || (i.EnumJob = {})),
			function(t) {
				t[t.hp = 1] = "hp", t[t.atk = 2] = "atk", t[t.def = 3] = "def", t[t.mineSpd = 4] = "mineSpd", t[t.mineBag = 5] = "mineBag", t[t.atkSpd = 6] = "atkSpd", t[t.summonSpd = 7] = "summonSpd", t[t.towerMoney = 8] = "towerMoney"
			}(i.EnumProp || (i.EnumProp = {})),
			function(t) {
				t[t.Miner_weapon = 1] = "Miner_weapon", t[t.Miner_bag = 2] = "Miner_bag", t[t.Swordman_sword = 3] = "Swordman_sword", t[t.Swordman_head = 4] = "Swordman_head", t[t.Archer_bow = 5] = "Archer_bow", t[t.Sparda_head = 6] = "Sparda_head", t[t.Sparda_shield = 7] = "Sparda_shield", t[t.Sparda_spear = 8] = "Sparda_spear", t[t.Mage_weapon = 9] = "Mage_weapon", t[t.Mage_head = 10] = "Mage_head", t[t.Gaint_weapon = 11] = "Gaint_weapon", t[t.Gaint_body = 12] = "Gaint_body", t[t.Tower_archer = 13] = "Tower_archer", t[t.Tower_hp = 14] = "Tower_hp", t[t.Tower_money = 15] = "Tower_money"
			}(i.EnumSkill || (i.EnumSkill = {})),
			function(t) {
				t[t.i1 = 1] = "i1", t[t.i2 = 2] = "i2", t[t.i3 = 3] = "i3", t[t.i4 = 4] = "i4", t[t.i5 = 5] = "i5", t[t.i6 = 6] = "i6", t[t.i7 = 7] = "i7", t[t.i8 = 8] = "i8", t[t.i9 = 9] = "i9"
			}(i.EnumItem || (i.EnumItem = {})),
			function(t) {
				t[t.miner1 = 1] = "miner1", t[t.swordman2 = 2] = "swordman2", t[t.archer3 = 3] = "archer3", t[t.sparda4 = 4] = "sparda4", t[t.mage5 = 5] = "mage5", t[t.gaint6 = 6] = "gaint6", t[t.medic7 = 7] = "medic7", t[t.playerTower8 = 8] = "playerTower8", t[t.mine9 = 9] = "mine9", t[t.tower10 = 10] = "tower10", t[t.unit11 = 11] = "unit11", t[t.unit12 = 12] = "unit12", t[t.unit13 = 13] = "unit13", t[t.unit14 = 14] = "unit14", t[t.unit15 = 15] = "unit15", t[t.unit16 = 16] = "unit16", t[t.roadblock = 17] = "roadblock", t[t.towerarcher = 18] = "towerarcher", t[t.unit19 = 19] = "unit19", t[t.unit20 = 20] = "unit20", t[t.unit21 = 21] = "unit21", t[t.unit22 = 22] = "unit22", t[t.unit23 = 23] = "unit23", t[t.unit24 = 24] = "unit24", t[t.unit25 = 25] = "unit25", t[t.unit26 = 26] = "unit26", t[t.unit27 = 27] = "unit27", t[t.unit28 = 28] = "unit28", t[t.unit29 = 29] = "unit29", t[t.unit30 = 30] = "unit30", t[t.unit31 = 31] = "unit31", t[t.unit32 = 32] = "unit32", t[t.unit33 = 33] = "unit33", t[t.unit34 = 34] = "unit34", t[t.unit35 = 35] = "unit35", t[t.unit36 = 36] = "unit36", t[t.unit37 = 37] = "unit37", t[t.unit38 = 38] = "unit38", t[t.unit39 = 39] = "unit39", t[t.unit40 = 40] = "unit40", t[t.unit41 = 41] = "unit41", t[t.unit42 = 42] = "unit42", t[t.unit43 = 43] = "unit43", t[t.unit44 = 44] = "unit44", t[t.unit45 = 45] = "unit45", t[t.unit46 = 46] = "unit46", t[t.unit47 = 47] = "unit47", t[t.unit48 = 48] = "unit48", t[t.unit49 = 49] = "unit49", t[t.unit50 = 50] = "unit50", t[t.unit51 = 51] = "unit51", t[t.unit52 = 52] = "unit52", t[t.unit53 = 53] = "unit53", t[t.unit54 = 54] = "unit54", t[t.unit55 = 55] = "unit55", t[t.unit56 = 56] = "unit56", t[t.unit57 = 57] = "unit57", t[t.unit58 = 58] = "unit58", t[t.unit59 = 59] = "unit59", t[t.unit60 = 60] = "unit60", t[t.unit61 = 61] = "unit61", t[t.unit62 = 62] = "unit62", t[t.unit63 = 63] = "unit63", t[t.unit64 = 64] = "unit64", t[t.unit65 = 65] = "unit65", t[t.unit66 = 66] = "unit66", t[t.unit67 = 67] = "unit67", t[t.unit68 = 68] = "unit68", t[t.unit69 = 69] = "unit69", t[t.unit70 = 70] = "unit70", t[t.unit71 = 71] = "unit71", t[t.unit82 = 82] = "unit82", t[t.unit83 = 83] = "unit83", t[t.unit84 = 84] = "unit84"
			}(i.EnumUnit || (i.EnumUnit = {})),
			function(t) {
				t[t.noAtk = 0] = "noAtk", t[t.fullPeopleAtk = 1] = "fullPeopleAtk", t[t.moreThanEnemyAtk = 2] = "moreThanEnemyAtk", t[t.alwaysAtk = 3] = "alwaysAtk"
			}(i.EnumAtkLogic || (i.EnumAtkLogic = {})),
			function(t) {
				t[t.noFallback = 0] = "noFallback", t[t.fallback5 = 1] = "fallback5", t[t.fallback8 = 2] = "fallback8"
			}(i.EnumFallbackLogic || (i.EnumFallbackLogic = {})),
			function(t) {
				t[t["\u9632\u5b88"] = 0] = "\u9632\u5b88", t[t["\u5f85\u547d"] = 1] = "\u5f85\u547d", t[t["\u8fdb\u653b"] = 2] = "\u8fdb\u653b"
			}(i.AIMode || (i.AIMode = {})),
			function(t) {
				t[t["\u6545\u4e8b"] = 0] = "\u6545\u4e8b", t[t["\u6bd4\u8d5b"] = 1] = "\u6bd4\u8d5b", t[t["\u50f5\u5c38"] = 2] = "\u50f5\u5c38"
			}(i.\u6a21\u5f0f || (i.\u6a21\u5f0f = {})), i.StandY = 150, cc._RF.pop()
	}, {}],
	GFormation: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "79e90MDXF1HlIrCWKmO3w5t", "GFormation"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./Units/GGaint"),
			a = function() {
				function t() {
					this.map = [
						[],
						[],
						[],
						[]
					]
				}
				return t.prototype.AddUnit = function(e) {
					for (var i = this, a = 0, n = i.map[t.FList[0]].length, r = 0; r < t.FList.length; r++) i.map[t.FList[r]].length < n && (a = r, n = i.map[t.FList[r]].length);
					e instanceof o.default ? i.map[t.FList[a]].unshift(e) : i.map[t.FList[a]].push(e)
				}, t.prototype.RemoveUnit = function(t) {
					for (var e = 0; e < this.map.length; e++)
						for (var i = 0; i < this.map[e].length; i++)
							if (this.map[e][i] == t) {
								this.map[e].splice(i, 1);
								break
							}
				}, t.prototype.Clear = function() {
					for (var t = 0; t < this.map.length; t++)
						for (var e = 0; e < this.map[t].length; e++) this.map[t][e] = null;
					this.map = null
				}, t.prototype.UpdateFPos = function() {
					for (var t = 0; t < this.map.length; t++)
						for (var e = 0; e < this.map[t].length; e++) this.map[t][e].formationPos.x = e, this.map[t][e].formationPos.y = t
				}, t.prototype.IsInFormation = function(t) {
					for (var e = 0; e < this.map.length; e++)
						for (var i = 0; i < this.map[e].length; i++)
							if (this.map[e][i] == t) return !0;
					return !1
				}, t.FList = [2, 1, 3, 0], t
			}();
		i.default = a, cc._RF.pop()
	}, {
		"./Units/GGaint": "GGaint"
	}],
	GGaint: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "84035dk4eBOqb7CkNSeHcAu", "GGaint");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Data/GEnums"),
			s = t("../../Common/GameUtil"),
			l = t("../AIData"),
			c = t("../GBattle"),
			u = t("./GRoadblock"),
			d = t("../../Actor/GActor"),
			h = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(r.EnumJob.gaint)) || this;
					return i.atkDis = 2, i.job = r.EnumJob.gaint, e ? i.anim.setSkin("Giant_Red") : i.anim.setSkin("Giant"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					var i = this;
					t.prototype.InitData.call(this, e), i.aiData.animStand = "Giant-Stand", i.aiData.animRun = "Giant-Walk", i.aiData.animWalk = "Giant-Walk", i.aiData.canBlock = !1, i.aiData.isCloser = !0, i.atkRange = 200, i.friction *= 5, a.default.SetupAnim(this.anim, r.EnumJob.gaint, e), 14 == e.sdId && (a.default.SetupAnimByPlayerSkins(r.EnumJob.gaint, 3, this.anim, "weapon", "Griffen_Club", !0), a.default.SetupAnimByPlayerSkins(r.EnumJob.gaint, 3, this.anim, "helm", "Griffen_Helm", !0)), i.gd.team, i.EquipSkill()
				}, e.prototype.SetPos = function(e, i) {
					t.prototype.SetPos.call(this, e, i);
					var o = this.GetUnitLv(r.EnumSkill.Gaint_body) * a.default.SkillPower;
					14 == this.gd.sdId && (o = 5);
					var n = .3 * ((300 - i) / 300) + .7 + .1 * o;
					this.scaleX = n, this.scaleY = n
				}, e.prototype.BeStrikeFly = function(t, e, i) {
					void 0 === i && (i = 0), this.PushIt(t, 0, i)
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this.GetUnitLv(r.EnumSkill.Gaint_body) * a.default.SkillPower;
					this.gd.hpMaxPlus = Math.floor(this.gd.GetSD().hp * e * .3)
				}, e.prototype.ChangeState = function(e) {
					d.default.show_uuid || (d.default.show_uuid = this.node.uuid), d.default.show_uuid == this.node.uuid && console.log(this.node.uuid, "ChangeState", this.AIState2String(this.sm.curState), " => ", this.AIState2String(e)), this.sm.curState != e && t.prototype.ChangeState.call(this, e)
				}, e.prototype.CanCastSkill = function() {
					return !1
				}, e.prototype.CheckHeadShot = function(t, e) {
					return !1
				}, e.prototype.UpdateAIModeChange = function() {
					c.default.aiMode[this.gd.team] == r.AIMode.\u9632\u5b88 ? this.aiData.aiMode != r.AIMode.\u5f85\u547d && (this.aiData.aiMode = r.AIMode.\u5f85\u547d, this._delayChangeMode = Math.abs(this.formationPos.x + 1 + this.formationPos.y) * s.GameUtil.RandomRange(.01, .05), this.aiData.fallBack = !1, this.ChangeState(l.AIState.Thinking)) : t.prototype.UpdateAIModeChange.call(this)
				}, e.prototype.AI_Enter_Atk = function() {
					var t = s.GameUtil.RandomRange(0, 100) < 50,
						e = t ? "Giant-Attack" : "Giant-Attack2";
					this.atkDis = t ? 200 : 150, this.PlayAnim(e, this.gd.GetAtkSpd()), null != this.aiData.atkTarget && this.LookUnit(this.aiData.atkTarget)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							o.sm.curState == l.AIState.Skl ? o.sklRange : o.atkRange;
							for (var a = 5, n = o.IsFrontRight() ? 50 : -50, d = o.x + (o.IsFrontRight() ? o.atkDis - 50 : 50 - o.atkDis), h = o.y, p = 0; p < c.default.gb.units.length; p++) {
								var f = c.default.gb.units[p];
								if (!f.IsDead() && f.gd.team != o.gd.team) {
									var m = 250,
										v = 70;
									if (f instanceof u.default && (m = 300, v = 99999), !(Math.abs(f.x - d) > m || Math.abs(f.y - h) > v)) {
										var y = o.gd.GetATK() - f.gd.GetDEF();
										if (y *= c.default.gb.GetItemDuration(r.EnumItem.i2) > 0 ? 2 : 1, f.Behurt(this, y, o.x, o.y, o.IsFlipX()), f.IsDead() || f.BeStrikeFly(n, s.GameUtil.RandomRange(-10, 10)), --a < 0) break
									}
								}
							}
							o.aiData.atkTarget = null
					}
				}, e.prototype.User_Atk = function() {
					var t = this;
					if (t.StateEnableUserControl() && !(t.aiData.atkCD > 0)) {
						t.lockUserControl = !0, t.aiData.isBlocking = !1;
						t.aiData.atkCD = t.gd.GetAtkCD(), t.PlayAnim("Giant-Attack", t.gd.GetAtkSpd()), t.ChangeState(l.AIState.Atk)
					}
				}, e
			}(a.default);
		i.default = h, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GActor": "GActor",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../AIData": "AIData",
		"../GBattle": "GBattle",
		"./GRoadblock": "GRoadblock"
	}],
	GMPoint: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "fa524ldHTtNW7N8D5v43Ny8", "GMPoint");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.sprites = [], e.sprites_comp = [], e.dots = [], e.btn = null, e.icon = null, e
				}
				return o(e, t), e.prototype.Setup = function(t, e) {
					this.ui = e, this.btn.enabled = !0, this.btn.interactable = t > 0, this.sceneLv = t;
					var i = t % this.sprites.length,
						o = n.default.role.story.curSceneId;
					this.node.parent.active = !0, o > t ? this.icon.spriteFrame = this.sprites_comp[i] : o == t ? this.icon.spriteFrame = this.sprites[i] : this.node.parent.active = !1
				}, e.prototype.SetupDot = function(t, e) {
					var i = n.default.role.story.curSceneId;
					if (this.node.active = !0, i < t) this.node.active = !1;
					else {
						this.btn.enabled = !1;
						var o = e % this.dots.length;
						this.icon.spriteFrame = this.dots[o], this.node.scale = .7
					}
				}, e.prototype.BTN_Click = function() {
					this.ui.SelectPoint(this)
				}, a([l([cc.SpriteFrame])], e.prototype, "sprites", void 0), a([l([cc.SpriteFrame])], e.prototype, "sprites_comp", void 0), a([l([cc.SpriteFrame])], e.prototype, "dots", void 0), a([l(cc.Button)], e.prototype, "btn", void 0), a([l(cc.Sprite)], e.prototype, "icon", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../Game/MainData": "MainData"
	}],
	GMapBox: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c4b8bXGmExGaYI0eQm3NLgg", "GMapBox");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../ADSDK"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.btn = null, e
				}
				return o(e, t), e.prototype.Setup = function(t) {
					this.ui = t
				}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, e.prototype.BTN_AD_Fetch = function() {
					var t = this;
					r.default.showVideoAD(this, function() {
						t.Ad_Box()
					})
				}, e.prototype.Ad_Box = function() {
					n.default.role.rmb += 100, n.default.role.story.boxid = n.default.role.story.curSceneId + 2, this.node.active = !1, this.ui.Ad_Box(), n.default.SaveGame()
				}, a([c([cc.Node])], e.prototype, "btn", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/MainData": "MainData"
	}],
	GMatchUtil: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "df501hmn2tADoLBwPwH7vPM", "GMatchUtil"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("../MainData"),
			a = function() {
				function t() {}
				return t.GetEnemy = function() {
					var t = null,
						e = o.default.role.match;
					switch (e.currentStep) {
						case 0:
							t = e.players16;
							break;
						case 1:
							t = e.players8;
							break;
						case 2:
							t = e.players4;
							break;
						case 3:
							t = e.players2
					}
					var i = t.indexOf(o.default.role.match.playerRole),
						a = t[i % 2 == 0 ? i + 1 : i - 1];
					return o.default.allSeeds.matchroles[a - 1]
				}, t.GetSkillLv = function(t) {
					null == o.default.role.match.JobLvUp && (o.default.role.match.JobLvUp = {});
					var e = 0;
					return null != o.default.role.match.JobLvUp[t] && (e = o.default.role.match.JobLvUp[t]), e
				}, t.SetSKillLv = function(t, e) {
					null == o.default.role.match.JobLvUp && (o.default.role.match.JobLvUp = {}), o.default.role.match.JobLvUp[t] = e
				}, t
			}();
		i.default = a, cc._RF.pop()
	}, {
		"../MainData": "MainData"
	}],
	GMiner: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "bf8dcyiU0dJLICEfcqL9Y2j", "GMiner");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../../Data/GEnums"),
			l = t("../../Common/GameUtil"),
			c = t("../AIData"),
			u = t("../../MainData"),
			d = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(s.EnumJob.miner)) || this;
					return i.curMines = 0, i.maxMine = 100, i.mineSpd = 1, i.onMine = null, i.OnGuide = !1, i.isUserNearMine = !1, i.onMining = !1, i.job = s.EnumJob.miner, e ? i.anim.setSkin("Miner_Red") : i.anim.setSkin("Miner"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Miner-Stand1", i.aiData.animRun = "Miner-Walk", i.aiData.animWalk = "Miner-Walk", i.aiData.canBlock = !1, i.aiData.isCloser = !1, a.default.SetupAnim(this.anim, s.EnumJob.miner, e), i.EquipSkill()
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this;
					e.maxMine = Math.floor(100 * (1 + .2 * e.GetUnitLv(s.EnumSkill.Miner_bag) * a.default.SkillPower)), 0 == e.gd.team && (e.mineSpd = 1 + .2 * e.GetUnitLv(s.EnumSkill.Miner_weapon) * a.default.SkillPower)
				}, e.prototype.AI_Thinking = function() {
					var t = this;
					if (!t.IsControlByUser())
						if (t.IsDead()) t.visible = !1;
						else {
							switch (t.aiData.nextState = c.AIState.Stand, null != t.onMine && t.onMine.mineCount <= 0 && (t.onMine.RemoveMiner(this), t.onMine = null), r.default.aiMode[t.gd.team]) {
								case s.AIMode.\u5f85\u547d:
								case s.AIMode.\u8fdb\u653b:
									t.AI_Mine();
									break;
								case s.AIMode.\u9632\u5b88:
									null != t.onMine && (t.onMine.RemoveMiner(this), t.onMine = null), t.moveDest = t.GetDefPos()
							}(t.moveDest.x != t.x || t.moveDest.y + t.y) && (t.aiData.nextState = c.AIState.Move), t.onMining && (t.aiData.nextState = c.AIState.Skl), t.sm.curState != t.aiData.nextState && t.ChangeState(t.aiData.nextState), t.PutMine()
						}
				}, e.prototype.UserControlUpdate = function() {
					var t = this,
						e = r.default.gb,
						i = r.default.gb.ui.playerPad;
					t.isUserNearMine = !1;
					for (var o = 0; o < e.mineList.length; o++) {
						var a = e.mineList[o];
						if (!(a.mineCount <= 0)) {
							var n = Math.abs(t.y - a.y),
								s = Math.abs(t.x - a.x);
							if (n < 20 && s < 100) {
								t.isUserNearMine = !0;
								break
							}
						}
					}
					i.btnMine.enabled = t.isUserNearMine
				}, e.prototype.UserControlMove = function(e, i, o) {
					t.prototype.UserControlMove.call(this, e, i, o);
					this.PutMine()
				}, e.prototype.User_Mine = function() {
					var t = this;
					t.isUserNearMine && t.StateEnableUserControl() && (t.sm.curState != c.AIState.Stand && t.sm.curState != c.AIState.Thinking || t.DO_Mine())
				}, e.prototype.PutMine = function() {
					var t = this,
						e = !1;
					if (0 == t.gd.team && t.x < r.default.gb.TowerL.x - 300 && (e = !0), 1 == t.gd.team && t.x > r.default.gb.TowerR.x + 300 && (e = !0), e && t.curMines > 0) {
						var i = t.y + 150 * t.scaleY;
						r.default.gb.ui.PopText("+" + t.curMines.toFixed(0), t.x, i, cc.Color.YELLOW, !0), r.default.gb.gd.teamDict[t.gd.team].gold += t.curMines, t.curMines = 0, t.title.SetWK(0), n.default.manager.CreateEffStar(t.x, t.y + 50, this.node.parent)
					}
				}, e.prototype.AI_Mine = function() {
					var t = this,
						e = r.default.gb.mineList,
						i = -1;
					switch (t.curMines >= t.maxMine && !t.onMining ? (t.curMines = t.maxMine, i = 0) : i = null != t.onMine ? 2 : 1, i) {
						case 0:
							null != t.onMine && (t.onMine.RemoveMiner(this), t.onMine = null), t.moveDest = t.GetHomePos();
							break;
						case 1:
							for (var o = null, a = 999999, n = 0; n < e.length; n++) {
								var s = e[n];
								if (!(s.mineCount <= 0)) {
									if (s.IsInThisMine(this)) {
										o = s;
										break
									}
									if (s.HasSlotFree()) {
										var u = l.Vector2.Distance(t.x, t.y, e[n].x, e[n].y);
										(a > u || null == o) && (o = s, a = u)
									}
								}
							}
							if (null != o) {
								o.IsNearMine(this) && o.SetMinerInSlot(this);
								var d = o.GetMinerPos(this);
								d.x == t.x && d.y == t.y ? t.onMine = o : t.moveDest = d
							} else t.aiData.nextState = c.AIState.Stand;
							break;
						case 2:
							t.LookUnit(t.onMine), t.DO_Mine()
					}
				}, e.prototype.DO_Mine = function() {
					this.ChangeState(c.AIState.Skl);
					var t = this.mineSpd;
					this.onMining = !0, r.default.gb.GetItemDuration(s.EnumItem.i1) > 0 && (t *= 2), this.PlayAnim("Miner-Mine", t)
				}, e.prototype.GetHomePos = function() {
					var t = 0 == this.gd.team ? r.default.gb.TowerL.x - 700 : r.default.gb.TowerR.x + 700;
					return new l.Vector2(t, this.y)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Mine":
							var a = 20;
							u.default.curMode == s.\u6a21\u5f0f.\u6bd4\u8d5b && 1 == u.default.role.match.playerRole && (a = 22), null != o.onMine && (o.onMine.mineCount -= a, o.onMine.mineCount = o.onMine.mineCount < 0 ? 0 : o.onMine.mineCount, o.onMine.mineCount <= 0 ? (o.onMine.ClearMiner(), o.onMine.visible = !1) : o.onMine.SyncScale()), o.curMines += a, o.title.wkMax = o.maxMine, o.title.SetWK(o.curMines);
							o.y, o.scaleY;
							var r = (o.IsFlipX() ? -100 : 100) * o.scaleX;
							n.default.manager.CreateEffStar(o.x + r, o.y + -10, this.node.parent)
					}
				}, e.prototype.OnAnimEnd = function(e) {
					t.prototype.OnAnimEnd.call(this, e), this.onMining = !1, (this.CanThinking() || this.sm.curState == c.AIState.Skl) && this.ChangeState(c.AIState.Thinking)
				}, e.prototype.Die = function() {
					null != this.onMine && (this.onMine.RemoveMiner(this), this.onMine = null), t.prototype.Die.call(this)
				}, e
			}(a.default);
		i.default = d, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../../MainData": "MainData",
		"../AIData": "AIData",
		"../GBattle": "GBattle"
	}],
	GMine: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "06924WybyhJfarDNMw4+bQW", "GMine");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Common/GameUtil"),
			s = t("../../Data/GEnums"),
			l = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetGMine(e), null) || this;
					return i.mineCount = 5e3, i.slot = [null, null], i.job = s.EnumJob.mine, i
				}
				return o(e, t), e.prototype.HasSlotFree = function() {
					return null == this.slot[0] || null == this.slot[1]
				}, e.prototype.IsInThisMine = function(t) {
					return this.slot[0] == t || this.slot[1] == t
				}, e.prototype.SetMinerInSlot = function(t) {
					this.IsInThisMine(t) || (null == this.slot[0] ? this.slot[0] = t : null == this.slot[1] && (this.slot[1] = t))
				}, e.prototype.RemoveMiner = function(t) {
					this.slot[0] == t && (this.slot[0] = null), this.slot[1] == t && (this.slot[1] = null)
				}, e.prototype.ClearMiner = function() {
					this.slot[0] = null, this.slot[1] = null
				}, e.prototype.GetMinerPos = function(t) {
					var e = -70 * this.scaleX,
						i = new r.Vector2(0, 0);
					return this.slot[0] == t ? i.SetXY(this.x + e, this.y - 5) : this.slot[1] == t ? i.SetXY(this.x - e, this.y - 5) : i.SetXY(this.x, this.y - 5), i
				}, e.prototype.IsNearMine = function(t) {
					var e = Math.abs(this.x - t.x),
						i = Math.abs(this.y - t.y);
					return e < 100 * this.scaleX && i < 20
				}, e.prototype.SyncScale = function() {
					this.SetPos(this.x, this.y);
					var t = this.scaleX;
					t *= this.mineCount / 5e3 * .3 + .7, this.scaleX = t, this.scaleY = t
				}, e
			}(a.default);
		i.default = l, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums"
	}],
	GNativeAD: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "00ff8GSmMxBN4DdKX7cL98Y", "GNativeAD");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../ADSDK"),
			s = t("../Game/GBattle/UIItemPop"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.title = null, e.lLable = null, e.bar = null, e.adIcon = null, e.adtitle = null, e.btnfetch = null, e
				}
				return o(e, t), e.prototype.onLoad = function() {
					this.adIcon.node.on(cc.Node.EventType.TOUCH_END, function() {
						r.default.NativeAd.reportAdClick({
							adId: r.default.NativeAdAdList.adId
						})
					}, this)
				}, e.prototype.Setup = function(t) {
					console.log("GNativeAD setup"), console.log(t), t ? (n.default.role.NativeAdNum < 5 && (n.default.role.NativeAdNum += 1, n.default.SaveGame()), this.title.string = "Chiến thắng lớn") : this.title.string = "Trận chiến đã hoàn thành", this.updateView(), this.initPage()
				}, e.prototype.initPage = function() {
					console.log(r.default.NativeAdAdList), this.setSpriteFrame(r.default.NativeAdAdList.imgUrlList[0], this.adIcon), this.setSpriteFrame(r.default.NativeAdAdList.logoUrl, this.adtitle)
				}, e.prototype.setSpriteFrame = function(t, e) {
					console.log("url"), -1 == t.indexOf("jpg") && -1 == t.indexOf("png") ? (console.log("11"), cc.assetManager.loadRemote(t, {
						ext: ".png"
					}, function(t, i) {
						t && console.log(t);
						var o = new cc.SpriteFrame(i);
						e.spriteFrame = o
					})) : (console.log("22"), cc.assetManager.loadRemote(t, function(t, i) {
						t && console.log(t);
						var o = new cc.SpriteFrame(i);
						e.spriteFrame = o
					}))
				}, e.prototype.BTN_Fetch = function() {
					n.default.role.NativeAdNum >= 5 && (n.default.role.rmb += 100, n.default.role.NativeAdNum = 0, s.default.Show(0, 100, !1), n.default.SaveGame(), this.updateView())
				}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, e.prototype.updateView = function() {
					n.default.role.NativeAdNum < 5 && (this.btnfetch.interactable = !1);
					var t = n.default.role.NativeAdNum;
					this.bar.node.width = this.bar.node.parent.width * t / 5, this.lLable.string = t.toString()
				}, a([u(cc.Label)], e.prototype, "title", void 0), a([u(cc.Label)], e.prototype, "lLable", void 0), a([u(cc.Sprite)], e.prototype, "bar", void 0), a([u(cc.Sprite)], e.prototype, "adIcon", void 0), a([u(cc.Sprite)], e.prototype, "adtitle", void 0), a([u(cc.Button)], e.prototype, "btnfetch", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData"
	}],
	GNativeBanner: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "4ee848xgXBNZIg6mP9SWv4U", "GNativeBanner");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../ADSDK"),
			r = t("../config"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.Banner = null, e.title = null, e.desc = null, e.adIcon = null, e.adtitle = null, e.btnDel = null, e
				}
				return o(e, t), e.prototype.onLoad = function() {
					this.Banner.on(cc.Node.EventType.TOUCH_END, function() {
						console.log(n.default.BannerAdAdList), n.default.BannerAd.reportAdClick({
							adId: n.default.BannerAdAdList.adId
						})
					}, this)
				}, e.prototype.Setup = function() {
					this.initPage()
				}, e.prototype.initPage = function() {
					this.btnDel.scale = r.default.BannerCloseBtn, this.setSpriteFrame(n.default.BannerAdAdList.imgUrlList[0], this.adIcon), this.setSpriteFrame(n.default.BannerAdAdList.logoUrl, this.adtitle), this.title.string = n.default.BannerAdAdList.title, this.desc.string = n.default.BannerAdAdList.desc
				}, e.prototype.setSpriteFrame = function(t, e) {
					-1 == t.indexOf("jpg") && -1 == t.indexOf("png") ? cc.assetManager.loadRemote(t, {
						ext: ".png"
					}, function(t, i) {
						t && console.log(t);
						var o = new cc.SpriteFrame(i);
						e.spriteFrame = o
					}) : cc.assetManager.loadRemote(t, function(t, i) {
						t && console.log(t);
						var o = new cc.SpriteFrame(i);
						e.spriteFrame = o
					})
				}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, a([c(cc.Node)], e.prototype, "Banner", void 0), a([c(cc.Label)], e.prototype, "title", void 0), a([c(cc.Label)], e.prototype, "desc", void 0), a([c(cc.Sprite)], e.prototype, "adIcon", void 0), a([c(cc.Sprite)], e.prototype, "adtitle", void 0), a([c(cc.Node)], e.prototype, "btnDel", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../config": "config"
	}],
	GPastor: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "ccfb6WiVkxAhrlJRhcVnUtv", "GPastor");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("./GRoadblock"),
			l = t("./GTower"),
			c = t("../../Data/GEnums"),
			u = t("../../Common/GameUtil"),
			d = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(c.EnumJob.meric)) || this;
					return e.job = c.EnumJob.meric, e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Stand", i.aiData.animRun = "Walk", i.aiData.animWalk = "Walk", i.aiData.animDeath = "Death", i.aiData.canBlock = !1, i.aiData.isCloser = !1, i.atkRange = 500
				}, e.prototype.CanCastSkillNoTarget = function() {
					return !1
				}, e.prototype.AI_Enter_Skill = function() {
					this.LookUnit(this.aiData.atkTarget), this.PlayAnim("Heal1")
				}, e.prototype.AI_Enter_Atk = function() {
					this.LookUnit(this.aiData.atkTarget), this.PlayAnim("Heal1", this.gd.GetAtkSpd())
				}, e.prototype.AI_FarScan = function() {
					var t = this;
					if (!t.IsInBattleArea(this)) return null;
					for (var e = null, i = t.x, o = (t.y, 0), a = 0; a < r.default.gb.units.length; a++) {
						var n = r.default.gb.units[a];
						if (t.IsInBattleArea(n) && !(n instanceof s.default || n instanceof l.default || n.gd.team != t.gd.team || n.gd.hp <= 0 || n.gd.hp >= n.gd.GetHPMax())) {
							var c = n.x,
								u = (n.y, Math.abs(i - c));
							u > t.gd.GetScanRange() || ((u -= 10 * (1 - t.gd.hp / t.gd.GetHPMax())) < o || null == e) && (e = n, o = u)
						}
					}
					return e
				}, e.prototype.AI_CalcFarAttackPos = function(t, e) {
					var i = this,
						o = u.Vector2.Zero(),
						a = i.x,
						n = i.y,
						r = t.x;
					t.y;
					if (Math.abs(a - r) < e) return o.x = i.x, o.y = t.y, o;
					var s = u.Vector2.CalcForward(t.x, t.y, i.x, i.y);
					return o.x = r + s.x * e * .9, o.y = n, o
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "hit":
							if (null != o.aiData.atkTarget && !o.aiData.atkTarget.IsDead()) {
								var a = o.x + (o.IsFlipX() ? -25 : 25),
									r = o.y + 120,
									s = n.default.manager.GetGCast(this.node.parent);
								s.node.x = a, s.node.y = r, s.spriteAnim.play("Cast", 0), s.spriteAnim.once("finished", function() {
									s.Release2Pool()
								}, this), o.aiData.atkTarget.BeHealth(o, o.gd.GetATK())
							}
					}
				}, e
			}(a.default);
		i.default = d, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../GBattle": "GBattle",
		"./GRoadblock": "GRoadblock",
		"./GTower": "GTower"
	}],
	GPoolObj: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "f6ccacnctFK163JUwXwJFyE", "GPoolObj");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.anim = null, e.headStar = null, e.footStar = null, e.touchNode = null, e.spriteAnim = null, e.myPool = null, e.objName = null, e._clickableObj = null, e._z0 = new cc.Vec2(0, 0), e._z1 = new cc.Vec2, e._touchDown = !1, e._isClick = !1, e._ddt = 0, e
				}
				return o(e, t), e.prototype.HideStarTouch = function() {
					this.headStar && (this.headStar.active = !1), this.footStar && (this.footStar.active = !1), this.touchNode && (this.touchNode.active = !1)
				}, e.prototype.Release2Pool = function() {
					this.myPool ? this.myPool.ReleaseObj(this) : this.node.destroy()
				}, e.prototype.AutoRelease = function(t) {
					var e = this;
					this.scheduleOnce(function() {
						e.node.removeFromParent(), e.Release2Pool()
					}, t)
				}, e.prototype.SetOnTouch = function(t) {
					this.touchNode && t && (this.touchNode.active = !0, this.touchNode && (this.touchNode.off(cc.Node.EventType.TOUCH_START, this.TouchDown, this), this.touchNode.off(cc.Node.EventType.TOUCH_END, this.TouchUp, this), this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this)), this.touchNode.on(cc.Node.EventType.TOUCH_START, this.TouchDown, this), this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this), this.touchNode.on(cc.Node.EventType.TOUCH_END, this.TouchUp, this), this._clickableObj = t)
				}, e.prototype.TouchDown = function(t) {
					this._ddt = 0, this._touchDown = !0, this._isClick = !0, this._z0.x = t._x, this._z0.y = t._y
				}, e.prototype.TouchMove = function(t) {
					this._touchDown && this._isClick && (this._z1.x = t._x, this._z1.y = t._y, cc.Vec2.squaredDistance(this._z0, this._z1) > 25 && (this._isClick = !1))
				}, e.prototype.TouchUp = function(t) {
					this._touchDown && this._isClick && this._clickableObj && this._clickableObj.OnClick && this._clickableObj.OnClick(), this._touchDown = !1, this._isClick = !1
				}, e.prototype.TouchCancel = function(t) {
					this._touchDown = !1, this._isClick = !1
				}, e.prototype.update = function(t) {
					this._touchDown && this._isClick && (this._ddt += t, this._ddt > .3 && (this._isClick = !1))
				}, a([s(sp.Skeleton)], e.prototype, "anim", void 0), a([s(cc.Node)], e.prototype, "headStar", void 0), a([s(cc.Node)], e.prototype, "footStar", void 0), a([s(cc.Node)], e.prototype, "touchNode", void 0), a([s(cc.Animation)], e.prototype, "spriteAnim", void 0), e = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	GPrefabManager: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "0a2b2atJL9EM7HEligPWEMC", "GPrefabManager");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.GPrefabPool = void 0;
		var n = t("./GPoolObj"),
			r = t("../Game/Data/GEnums"),
			s = t("../Game/GBattle/GBattle"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.GActor = null, e.GGaint = null, e.GMeric = null, e.GMine = null, e.GArrow = null, e.GArrowTail = null, e.GSpear = null, e.GGut = null, e.GBlackHole = null, e.GBlood = null, e.GSummon = null, e.GCast = null, e.GMageAtk = null, e.GZombie = null, e.GEffBoom = null, e.EffStar = null, e.EffStarSend = null, e.destoryFrog = null, e.pools = {}, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					this.node.active = !1, i.manager = this;
					for (var t = [this.GActor, this.GGaint, this.GMeric, this.GMine, this.GArrow, this.GSpear, this.GGut, this.GBlackHole, this.GBlood, this.GZombie, this.GEffBoom, this.GArrowTail, this.GSummon, this.GCast, this.GMageAtk], e = 0; e < t.length; e++) {
						var o = t[e];
						this.pools[o.node.name] = new h(o)
					}
				}, e.prototype.GetPool = function(t) {
					var e = this.pools[t];
					return e || console.error("\u627e\u4e0d\u5230\u5bf9\u8c61\u6c60", t), e
				}, e.prototype.GetGObj = function(t, e) {
					var i = this.GetPool(e.node.name).GetObj();
					return t && (i.node.parent && i.node.parent.removeChild(i.node, !1), t.addChild(i.node)), i
				}, e.prototype.GetGActor = function(t) {
					return this.GetGObj(t, this.GActor)
				}, e.prototype.GetGGaint = function(t) {
					return this.GetGObj(t, this.GGaint)
				}, e.prototype.GetGZombie = function(t) {
					return this.GetGObj(t, this.GZombie)
				}, e.prototype.GetGMeric = function(t) {
					return this.GetGObj(t, this.GMeric)
				}, e.prototype.GetGMine = function(t) {
					return this.GetGObj(t, this.GMine)
				}, e.prototype.GetGArrow = function(t) {
					return this.GetGObj(t, this.GArrow)
				}, e.prototype.GetGSpear = function(t) {
					return this.GetGObj(t, this.GSpear)
				}, e.prototype.GetGGut = function(t) {
					return this.GetGObj(t, this.GGut)
				}, e.prototype.GetGBlackHole = function(t) {
					return this.GetGObj(t, this.GBlackHole)
				}, e.prototype.GetGEffBoom = function(t) {
					return this.GetGObj(t, this.GEffBoom)
				}, e.prototype.GetGArrowTail = function(t) {
					return this.GetGObj(t, this.GArrowTail)
				}, e.prototype.GetGBlood = function(t) {
					for (var e = this.GetGObj(t, this.GBlood), i = e.node, o = Math.floor(1e3 * Math.random()) % i.children.length, a = 0; a < i.children.length; a++) i.children[a].active = o == a;
					return e
				}, e.prototype.GetGSummon = function(t) {
					return this.GetGObj(t, this.GSummon)
				}, e.prototype.GetGCast = function(t) {
					return this.GetGObj(t, this.GCast)
				}, e.prototype.GetGMageAtk = function(t) {
					return this.GetGObj(t, this.GMageAtk)
				}, e.prototype.CreateEffStar = function(t, e, i) {
					var o = cc.instantiate(this.EffStar);
					o.parent = i, o.x = t, o.y = e, o.active = !0
				}, e.prototype.CreateEffStarSend = function(t, e, i) {
					var o = cc.instantiate(this.EffStarSend);
					o.parent = i, o.x = t, o.y = e, o.active = !0
				}, e.prototype.CreateDestoryForg = function(t, e, i) {
					var o = cc.instantiate(this.destoryFrog);
					o.parent = i, o.x = t, o.y = e, o.active = !0, console.log(o.x + "  " + o.y + " " + o.name)
				}, e.prototype.GetPrefabByJob = function(t) {
					var e = s.default.gb,
						i = null;
					switch (t) {
						case r.EnumJob.meric:
							i = this.GetGMeric(e.gbRoot.gActors);
							break;
						case r.EnumJob.gaint:
							i = this.GetGGaint(e.gbRoot.gActors);
							break;
						case r.EnumJob.zombie:
						case r.EnumJob.zombie_poison:
						case r.EnumJob.zombie_under:
						case r.EnumJob.zombie_dog:
						case r.EnumJob.zombie_sparda:
						case r.EnumJob.zombie_mage:
						case r.EnumJob.zombie_gaint:
						case r.EnumJob.zombie_gaint2:
							i = this.GetGZombie(e.gbRoot.gActors);
							break;
						default:
							i = this.GetGActor(e.gbRoot.gActors)
					}
					return i
				}, a([u(n.default)], e.prototype, "GActor", void 0), a([u(n.default)], e.prototype, "GGaint", void 0), a([u(n.default)], e.prototype, "GMeric", void 0), a([u(n.default)], e.prototype, "GMine", void 0), a([u(n.default)], e.prototype, "GArrow", void 0), a([u(n.default)], e.prototype, "GArrowTail", void 0), a([u(n.default)], e.prototype, "GSpear", void 0), a([u(n.default)], e.prototype, "GGut", void 0), a([u(n.default)], e.prototype, "GBlackHole", void 0), a([u(n.default)], e.prototype, "GBlood", void 0), a([u(n.default)], e.prototype, "GSummon", void 0), a([u(n.default)], e.prototype, "GCast", void 0), a([u(n.default)], e.prototype, "GMageAtk", void 0), a([u(n.default)], e.prototype, "GZombie", void 0), a([u(n.default)], e.prototype, "GEffBoom", void 0), a([u(cc.Node)], e.prototype, "EffStar", void 0), a([u(cc.Node)], e.prototype, "EffStarSend", void 0), a([u(cc.Node)], e.prototype, "destoryFrog", void 0), e = i = a([c], e)
			}(cc.Component);
		i.default = d;
		var h = function() {
			function t(t) {
				this.seed = t, this.pool = []
			}
			return t.prototype.GetObj = function() {
				var t = null;
				this.pool.length > 0 ? t = this.pool.pop() : t = cc.instantiate(this.seed.node).getComponent(n.default);
				return t._myPool = this, t.node && (t.node.active = !0), t
			}, t.prototype.ReleaseObj = function(t) {
				t.node.parent && t.node.parent.removeChild(t.node, !1), t.node && (t.node.active = !1), d.manager.node.addChild(t.node), this.pool.push(t)
			}, t
		}();
		i.GPrefabPool = h, cc._RF.pop()
	}, {
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"./GPoolObj": "GPoolObj"
	}],
	GRoadblock: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "51450UeM3hO3LUpZSLRLw75", "GRoadblock");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../GBattle"),
			r = t("../../Data/GD_Unit"),
			s = t("../../Data/GEnums"),
			l = t("../AIData"),
			c = function(t) {
				function e() {
					var e = t.call(this, null, n.default.gb.gbRoot.RoadBlock) || this;
					return e.job = s.EnumJob.roadblock, e.node.active = !0, e
				}
				return o(e, t), e.prototype.InitData = function(t) {
					var e = this;
					e.gd = new r.default, e.aiData = new l.AIData, e.gd.sdId = s.EnumUnit.roadblock, e.gd.hp = e.HpMax(), e.gd.team = -1, e.canBePush = !1, e.aiData.animDeath = "death", e.job = s.EnumJob.roadblock
				}, e.prototype.SetOnPosion = function(t) {}, e.prototype.SetOnShutdown = function() {}, e.prototype.SetOnIce = function() {}, e.prototype.SetOnFire = function(t) {}, e.prototype.HpMax = function() {
					return 5e3
				}, e.prototype.Die = function() {
					null != this.title && (this.title.node.active = !1), this.gd.hp = 0, n.default.gb.RemoveUnit(this), n.default.gb.roadblock = null, this.node.destroy()
				}, e.prototype.Behurt = function(e, i, o, a, n, r, s) {
					void 0 === s && (s = 1), this.IsDead() || t.prototype.Behurt.call(this, e, i, o, a, n, r, s)
				}, e.prototype.CheckBackHit = function(t) {
					return !1
				}, e.prototype.CheckHeadShot = function(t, e) {
					return !1
				}, e.prototype.UpdateAIModeChange = function() {}, e.prototype.IsArrowHurtMe = function(t) {
					var e = this.size.x * this.scaleX;
					return Math.abs(t.x - this.x) < e
				}, e
			}(a.default);
		i.default = c, cc._RF.pop()
	}, {
		"../../Actor/GUnit": "GUnit",
		"../../Data/GD_Unit": "GD_Unit",
		"../../Data/GEnums": "GEnums",
		"../AIData": "AIData",
		"../GBattle": "GBattle"
	}],
	GSaveBox: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "65ee0hfGoVFw613z9unafYn", "GSaveBox");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../Game/Common/GameUtil"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.lvIcon = null, e.tableNEW = null, e.tableOLD = null, e.tableEND = null, e.tableDEL = null, e.btnDelete = null, e.txtTime = null, e.ltxtEND = null, e.ltxtOLD = null, e.onwer = null, e
				}
				return o(e, t), e.prototype.Setup = function(t) {
					this.idx = t, this.lvIcon.node.active = !1, this.tableNEW.active = !1, this.tableOLD.active = !1, this.tableEND.active = !1, this.tableDEL.active = !1, this.btnDelete.active = !1, this.txtTime.node.active = !1;
					var e = n.default.role.storySaves[t];
					if (e) {
						this.lvIcon.node.active = !0, this.txtTime.node.active = !0, this.btnDelete.active = !0;
						var i = r.GameUtil.FormatTime_HHMMSS(1e3 * e.useSeconds);
						switch (e.diff) {
							case 1:
								this.txtTime.string = "Thường:(" + i + ")";
								break;
							case 2:
								this.txtTime.string = "Khó:(" + i + ")";
								break;
							case 3:
								this.txtTime.string = "Điên rồ(" + i + ")"
						}
						var o = 100 * (e.curSceneId - 1) / 12;
						e.curSceneId >= 13 ? (this.tableEND.active = !0, this.ltxtEND.string = "Chiến dịch đã hoàn thành\n" + o.toFixed(0) + "%") : (this.tableOLD.active = !0, this.ltxtOLD.string = "Tiếp tục cuộc chiến\n" + o.toFixed(0) + "%")
					} else this.tableNEW.active = !0
				}, e.prototype.BTN_CellCLICK = function() {
					this.onwer.SaveBox_OnClick(this.idx)
				}, e.prototype.BTN_ShowTableDELETE = function() {
					this.tableDEL.active = !0
				}, e.prototype.BTN_HideTableDELETE = function() {
					this.tableDEL.active = !1
				}, e.prototype.BTN_DeleteData = function() {
					this.BTN_HideTableDELETE(), this.onwer.SaveBox_DelSave(this.idx), n.default.SaveGame()
				}, a([c(cc.Sprite)], e.prototype, "lvIcon", void 0), a([c(cc.Node)], e.prototype, "tableNEW", void 0), a([c(cc.Node)], e.prototype, "tableOLD", void 0), a([c(cc.Node)], e.prototype, "tableEND", void 0), a([c(cc.Node)], e.prototype, "tableDEL", void 0), a([c(cc.Node)], e.prototype, "btnDelete", void 0), a([c(cc.Label)], e.prototype, "txtTime", void 0), a([c(cc.Label)], e.prototype, "ltxtEND", void 0), a([c(cc.Label)], e.prototype, "ltxtOLD", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/MainData": "MainData"
	}],
	GShopCell: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "5d830vM6pxBMZ1rl69uuC+d", "GShopCell");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.selected = null, e.icon = null, e.lPrice = null, e
				}
				return o(e, t), e.prototype.Setup = function(t, e) {
					this.ui = e, this.itemId = t;
					var i = n.default.allSeeds.items[t];
					this.lPrice.string = i.price.toFixed(), this.nodeHasNum = this.node.getChildByName("hasNum");
					var o = n.default.GetItemNum(t);
					o <= 0 ? this.nodeHasNum.active = !1 : (this.nodeHasNum.active = !0, this.nodeHasNum.getComponentInChildren(cc.Label).string = o.toFixed())
				}, e.prototype.SetSelect = function(t) {
					this.selected.active = t
				}, e.prototype.BTN_OnClick = function() {
					this.ui.OnSelectCell(this)
				}, a([l(cc.Node)], e.prototype, "selected", void 0), a([l(cc.Sprite)], e.prototype, "icon", void 0), a([l(cc.Label)], e.prototype, "lPrice", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../Game/MainData": "MainData"
	}],
	GSign: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "2a1f7XSEOxDE5wfck76aLeT", "GSign");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../Game/Common/GameUtil"),
			s = t("../UI/Shop/UISkinShop"),
			l = t("../ADSDK"),
			c = t("../Game/GBattle/UIItemPop"),
			u = cc._decorator,
			d = u.ccclass,
			h = u.property,
			p = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.btnDelete = null, e.btnAdReward = null, e.items = [], e
				}
				return o(e, t), e.prototype.Setup = function(t) {
					this.ui = t;
					for (var e = n.default.role.signTime, i = r.GameUtil.SystemDay(), o = n.default.GetTimeTick(1), a = 0; a < this.items.length; a++) {
						if (e > a) this.items[a].getChildByName("check").active = !0;
						if (e == a && o < i) this.items[a].getChildByName("fetch_icon").active = !0
					}
					o >= i && (this.btnAdReward.interactable = !1), this.initPage()
				}, e.prototype.initPage = function() {}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, e.prototype.BTN_AD_Fetch = function() {
					if (r.GameUtil.SystemDay() > n.default.GetTimeTick(1)) {
						var t = this;
						l.default.showVideoAD(this, function() {
							t.Fetch_Reward(!0)
						})
					}
				}, e.prototype.Ad_Fetch_help = function() {
					this.Fetch_Reward(!0)
				}, e.prototype.BTN_Fetch0 = function() {
					this.BTN_Fetch(0)
				}, e.prototype.BTN_Fetch1 = function() {
					this.BTN_Fetch(1)
				}, e.prototype.BTN_Fetch2 = function() {
					this.BTN_Fetch(2)
				}, e.prototype.BTN_Fetch3 = function() {
					this.BTN_Fetch(3)
				}, e.prototype.BTN_Fetch4 = function() {
					this.BTN_Fetch(4)
				}, e.prototype.BTN_Fetch5 = function() {
					this.BTN_Fetch(5)
				}, e.prototype.BTN_Fetch6 = function() {
					this.BTN_Fetch(6)
				}, e.prototype.BTN_Fetch = function(t) {
					t == n.default.role.signTime && (r.GameUtil.SystemDay() > n.default.GetTimeTick(1) && this.Fetch_Reward(!1))
				}, e.prototype.Fetch_Reward = function(t) {
					var e = r.GameUtil.SystemDay(),
						i = n.default.role.signTime;
					switch (i) {
						case 0:
							n.default.role.rmb += 100, c.default.Show(0, 100, t);
							break;
						case 1:
							n.default.AddItemNum(6, 1, !1, t);
							break;
						case 2:
							n.default.role.rmb += 200, c.default.Show(0, 200, t);
							break;
						case 3:
							n.default.AddItemNum(7, 1, !1, t);
							break;
						case 4:
							n.default.role.rmb += 300, c.default.Show(0, 300, t);
							break;
						case 5:
							n.default.AddItemNum(8, 1, !1, t);
							break;
						case 6:
							0 == n.default.role.signSkin ? (n.default.role.signSkin = 1, s.default.BuySetSkin(1), c.default.Show(11, 1, t)) : (n.default.role.rmb += 1e3, c.default.Show(0, 100, t))
					}
					n.default.SetTimeTick(1, e), n.default.role.signTime += 1, t && (n.default.role.rmb += 100, c.default.Show(0, 100, t)), n.default.SaveGame(), this.node.active = !1
				}, a([h(cc.Node)], e.prototype, "btnDelete", void 0), a([h(cc.Button)], e.prototype, "btnAdReward", void 0), a([h([cc.Node])], e.prototype, "items", void 0), e = a([d], e)
			}(cc.Component);
		i.default = p, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData",
		"../UI/Shop/UISkinShop": "UISkinShop"
	}],
	GSingleAchievement: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "dd527YsP0VK3469kvbAqkzS", "GSingleAchievement");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.fill = null, e.Title = null, e.Content = null, e.icon = null, e
				}
				return o(e, t), e.prototype.Setup = function(t, e) {
					var i = this;
					this.ui = e, this.id = t;
					var o = n.default.allSeeds.achievements[t],
						a = o.name,
						r = o.desc;
					this.Title.string = a, this.Content.string = r, cc.resources.load("uiimgs/ach" + o.id, cc.SpriteFrame, function(t, e) {
						t && console.log(t), i.icon.spriteFrame = e
					}), 1 != n.default.role.achievements[t] && (this.fill.active = !1)
				}, a([l(cc.Node)], e.prototype, "fill", void 0), a([l(cc.Label)], e.prototype, "Title", void 0), a([l(cc.Label)], e.prototype, "Content", void 0), a([l(cc.Sprite)], e.prototype, "icon", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../Game/MainData": "MainData"
	}],
	GSparta: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "009ecZNWI5KrpEoAts1TcCq", "GSparta");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../Items/GArrow"),
			l = t("../../Data/GEnums"),
			c = t("../../Common/GameUtil"),
			u = t("../AIData"),
			d = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(l.EnumJob.sparda)) || this;
					return i.blockRate = .1, i.job = l.EnumJob.sparda, e ? i.anim.setSkin("Spearton_Red") : i.anim.setSkin("Spearton"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e), this.showDebug = !0;
					var i = this;
					i.aiData.animBlock = "Spearton-Block", i.aiData.animStand = "Spearton-Stand1", i.aiData.animRun = "Spearton-Run", i.aiData.animWalk = "Spearton-Block-Walk", i.atkRange = 260, i.aiData.canBlock = !0, i.aiData.isCloser = !0, a.default.SetupAnim(this.anim, l.EnumJob.sparda, e), i.sklRange = 500, 83 == e.sdId && (a.default.SetupAnimByPlayerSkins(l.EnumJob.sparda, 0, this.anim, "weapon", "upgrades/speartanspear2", !0), a.default.SetupAnimByPlayerSkins(l.EnumJob.sparda, 0, this.anim, "helm", "classic-spearton-helm-2", !0), a.default.SetupAnimByPlayerSkins(l.EnumJob.sparda, 0, this.anim, "Arrow1", "classic-spearton-shield-3", !0)), 13 == e.sdId && (a.default.SetupAnimByPlayerSkins(l.EnumJob.sparda, 0, this.anim, "weapon", "upgrades/golden-spearton-spear", !0), a.default.SetupAnimByPlayerSkins(l.EnumJob.sparda, 0, this.anim, "helm", "upgrades/golden-spearton-helm", !0), a.default.SetupAnimByPlayerSkins(l.EnumJob.sparda, 0, this.anim, "Arrow1", "upgrades/golden-spearton-shield", !0)), i.EquipSkill()
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this,
						i = e.gd.GetSD().hp,
						o = e.GetUnitLv(l.EnumSkill.Sparda_head) * a.default.SkillPower;
					e.gd.hpMaxPlus = Math.floor(i * o * .2);
					var n = e.GetUnitLv(l.EnumSkill.Sparda_shield) * a.default.SkillPower;
					e.gd.hpMaxPlus += Math.floor(i * n * .1), e.blockRate = e.blockRate + .1 * n;
					var r = e.GetUnitLv(l.EnumSkill.Sparda_spear) * a.default.SkillPower;
					e.gd.atkPlus = Math.floor(e.gd.GetSD().atk * r * .25)
				}, e.prototype.Behurt = function(e, i, o, a, n, s, l) {
					void 0 === l && (l = 1);
					var u = this;
					if (u.IsBlocking() && c.GameUtil.RandomRange(0, 1) <= u.blockRate) {
						var d = u.y - 150 * u.scaleY;
						r.default.gb.ui.PopText("\u683c\u6321", u.x, d, cc.Color.WHITE, !0)
					} else t.prototype.Behurt.call(this, e, i, o, a, n, s, l)
				}, e.prototype.GetBlockAnim = function() {
					return 0 == this.formationPos.x ? "Spearton-Block" : 1 == this.formationPos.x ? "Spearton-Block2" : "Spearton-Block3"
				}, e.prototype.CanCastSkill = function() {
					return 0 == this.aiData.sklCD && this.aiData.disY < 20 && this.aiData.disX <= this.aiData.sklRange && this.aiData.disX > 2
				}, e.prototype.AI_Enter_Atk = function() {
					var t = this,
						e = t.IsBlocking() ? "Spearton-Block-Attack1" : "Spearton-Attack1",
						i = 0 == t.gd.team ? r.default.gb.fTeam0 : r.default.gb.fTeam1;
					1 == t.formationPos.x && i.map[t.formationPos.y][t.formationPos.x - 1].aiData.atkTarget == t.aiData.atkTarget && (e = "Spearton-Block-Attack3"), t.PlayAnim(e, t.gd.GetAtkSpd())
				}, e.prototype.AI_Enter_Skill = function() {
					this.PlayAnim("Spearton-Throw")
				}, e.prototype.Update = function() {
					t.prototype.Update.call(this)
				}, e.prototype.GetAttackPos = function() {
					var t = this,
						e = new c.Vector2(0, 0);
					if (0 == t.formationPos.x) e = 0 == t.gd.team ? e.SetXY(r.default.gb.TowerR.x, l.StandY) : e.SetXY(r.default.gb.TowerL.x, l.StandY);
					else {
						var i = 0 == t.gd.team ? r.default.gb.fTeam0 : r.default.gb.fTeam1,
							o = i.map[t.formationPos.y][t.formationPos.x - 1].x,
							a = t.offsetPos.y + l.StandY;
						1 == t.formationPos.x ? (o += (0 == t.gd.team ? -40 : 40) * t.scaleX, a = i.map[t.formationPos.y][t.formationPos.x - 1].y + 3) : o += (0 == t.gd.team ? -12 : 12) * t.scaleX, e.SetXY(o - t.offsetPos.x, a - t.offsetPos.y)
					}
					return e.y -= 30, e.x += t.offsetPos.x, e.y += t.offsetPos.y, e
				}, e.prototype.ShootTarget = function() {
					var t = s.default.GetGSpear();
					this.IsControlByUser() ? t.SetupNoTarget(this, this.x + (this.IsFlipX() ? -500 : 500), this.y, this.y) : t.Setup(this, this.aiData.atkTarget)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (o.sm.curState == u.AIState.Skl) o.ShootTarget();
							else if (o.IsControlByUser() && o.GetClosestTarget(), null != o.aiData.atkTarget && o.CanAttack()) {
								var a = r.default.gb.GetItemDuration(l.EnumItem.i2) > 0 ? 2 : 1,
									n = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								n *= a, o.aiData.atkTarget.Behurt(this, n, o.x, o.y, o.IsFlipX())
							}
					}
				}, e.prototype.UserControlUpdate = function() {
					var t = this,
						e = r.default.gb,
						i = e.ui.playerPad;
					t.aiData.atkTarget = null;
					for (var o = 0; o < e.units.length; o++) {
						var a = e.units[o];
						if (0 != a.gd.team && !a.IsDead() && t.CanAttack(a)) {
							t.aiData.atkTarget = a;
							break
						}
					}
					t.sm.curState == u.AIState.Skl && t.AI_Update_Skill(), i.UpdateButtonCD(i.btnThrow, t.aiData.sklCD / t.gd.GetSklCD())
				}, e.prototype.AI_BlockTest = function() {
					t.prototype.AI_BlockTest.call(this), null != this.AI_CloseScan() && (this.aiData.isBlocking = !1), this.aiData.aiMode != l.AIMode.\u8fdb\u653b && null == this.aiData.atkTarget || (this.aiData.isBlocking = !1)
				}, e.prototype.User_Atk = function() {
					var t = this;
					if (t.StateEnableUserControl() && !(t.aiData.atkCD > 0)) {
						t.lockUserControl = !0, t.aiData.isBlocking = !1, t.aiData.atkCD = t.gd.GetAtkCD();
						t.PlayAnim("Spearton-Attack1", t.gd.GetAtkSpd()), t.ChangeState(u.AIState.Atk)
					}
				}, e.prototype.User_Skill = function() {
					var t = this;
					t.StateEnableUserControl() && (t.aiData.sklCD > 0 || (t.aiData.sklCD = t.gd.GetSklCD(), t.lockUserControl = !0, t.aiData.isBlocking = !1, t.PlayAnim("Spearton-Throw", 1), t.ChangeState(u.AIState.Skl)))
				}, e
			}(a.default);
		i.default = d, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../AIData": "AIData",
		"../GBattle": "GBattle",
		"../Items/GArrow": "GArrow"
	}],
	GSpineSpriteEx: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "28df2Gu9fRAbIo0n+XbhwQ+", "GSpineSpriteEx");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../UI/Shop/UISkinShop"),
			r = t("./GSpineSprite"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = s.executeInEditMode,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.texture = null, e.anim = null, e.slotName = "", e.skinName = "", e.job = -1, e.skinType = -1, e.lv = -1, e._prevSkinName = null, e._prevSlotName = null, e._prevJob = -1, e._prevLv = -1, e._prevSkinType = -1, e
				}
				return o(e, t), e.prototype.update = function(t) {
					if (this.mask && this.img && this.anim && this.slotName && this.skinName && this.texture && (this._prevSkinName != this.skinName || this._prevSlotName != this.slotName || this._prevJob != this.job || this._prevLv != this.lv || this._prevSkinType != this.skinType)) {
						if (this._prevSkinName = this.skinName, this._prevSlotName = this.slotName, this._prevJob = this.job, this._prevLv = this.lv, this._prevSkinType = this.skinType, this.job >= 0 && this.lv >= 0 && this.skinType >= 0) {
							var e = n.default._unitData[this.job - 1],
								i = e.slots.indexOf(this.slotName),
								o = e.skins[this.skinType][i];
							o = o.replace("-3", "-" + this.lv), 2 == this.job && (o = o.replace("-4", "-" + (this.lv + 1))), this.skinName = o
						}
						var a = this.anim.skeletonData.getRuntimeData(),
							r = a.defaultSkin,
							s = a.findSlotIndex(this.slotName);
						if (s) {
							var l = r.getAttachment(s, this.skinName);
							if (l) {
								var c = this.anim.getTextureAtlas(l);
								this.SetupFrame(c, [this.texture])
							}
						}
					}
				}, a([c(cc.SpriteFrame)], e.prototype, "texture", void 0), a([c(sp.Skeleton)], e.prototype, "anim", void 0), a([c(cc.String)], e.prototype, "slotName", void 0), a([c(cc.String)], e.prototype, "skinName", void 0), a([c(cc.Integer)], e.prototype, "job", void 0), a([c(cc.Integer)], e.prototype, "skinType", void 0), a([c(cc.Integer)], e.prototype, "lv", void 0), e = a([l, u], e)
			}(r.default);
		i.default = d, cc._RF.pop()
	}, {
		"../UI/Shop/UISkinShop": "UISkinShop",
		"./GSpineSprite": "GSpineSprite"
	}],
	GSpineSprite: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "69a77i3pFpOa4+bdeUdkA9F", "GSpineSprite");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.mask = null, e.img = null, e
				}
				return o(e, t), e.prototype.SetupFrame = function(t, e, i, o) {
					void 0 === i && (i = 1), void 0 === o && (o = 0);
					var a = t.page.name;
					a = a.replace(".png", "");
					for (var n = 0; n < e.length; n++)
						if (e[n].name == a) {
							this.img.spriteFrame = e[n], this.img.node.width = t.page.width, this.img.node.height = t.page.height;
							break
						} this.mask.node.angle = o, this.mask.node.scale = i, this.mask.node.width = t.originalWidth, this.mask.node.height = t.originalHeight, this.img.node.x = -t.x - .5 * t.originalWidth, this.img.node.y = t.y + .5 * t.originalHeight
				}, a([s(cc.Mask)], e.prototype, "mask", void 0), a([s(cc.Sprite)], e.prototype, "img", void 0), e = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	GSpritesData: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "a61a2Nv5rVOR5hTl+0qIADg", "GSpritesData"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {}
			return t.CreateEff = function(t, e, i, o) {}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GSummon_man: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "6b358uFT75CU5RO+gRep4Uv", "GSummon_man");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../../Data/GEnums"),
			l = t("../../Common/GameUtil"),
			c = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(s.EnumJob.summon)) || this;
					return i.job = s.EnumJob.summon, e ? i.anim.setSkin("Swordwrath_Red") : i.anim.setSkin("Swordwrath"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animBlock = "Swordwrath-Block", i.aiData.animStand = "Swordwrath-Stand1", i.aiData.animRun = "Swordwrath-Run", i.aiData.animWalk = "Swordwrath-Walk", i.aiData.canBlock = !1, i.aiData.isCloser = !0, i.gd.team
				}, e.prototype.AI_Enter_Atk = function() {
					this.LookUnit(this.aiData.atkTarget);
					var t = l.GameUtil.RandomRange(0, 100) < 50 ? "Swordwrath-Attack1" : "Swordwrath-Attack2";
					this.PlayAnim(t, this.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (o.IsControlByUser() && o.GetClosestTarget(), null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = r.default.gb.GetItemDuration(s.EnumItem.i2) > 0 ? 2 : 1,
									n = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								n *= a, o.aiData.atkTarget.Behurt(this, n, o.x, o.y, o.IsFlipX())
							}
					}
				}, e.prototype.Die = function() {
					t.prototype.Die.call(this), r.default.gb.sumSummon--
				}, e
			}(a.default);
		i.default = c, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../GBattle": "GBattle"
	}],
	GSwordman: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "ee94bp1dp9LJ6CnYdi8220J", "GSwordman");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../../Data/GEnums"),
			l = t("../../Common/GameUtil"),
			c = t("../AIData"),
			u = t("../../MainData"),
			d = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(s.EnumJob.swordman)) || this;
					return i.jumpSpdEndX = 0, i.jumpSpd = 0, i.job = s.EnumJob.swordman, e ? i.anim.setSkin("Swordwrath_Red") : i.anim.setSkin("Swordwrath"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this,
						o = i.GetUnitLv(s.EnumSkill.Swordman_sword);
					0 == e.team && i.anim.setSkin(o > 0 || u.default.role.story.curSceneId > 3 ? "SwordwrathUnlocked" : "Swordwrath"), i.aiData.animBlock = "Swordwrath-Block", i.aiData.animStand = "Swordwrath-Stand1", i.aiData.animRun = "Swordwrath-Run", i.aiData.animWalk = "Swordwrath-Walk", i.aiData.canBlock = !0, i.aiData.isCloser = !0, a.default.SetupAnim(this.anim, s.EnumJob.swordman, e), i.sklRange = 500, i.atkRange = 180, i.gd.team, i.EquipSkill()
				}, e.prototype.SetSlotBySkillLv = function(t, e, i) {
					this.GetUnitLv(t);
					var o = this.anim.findSlot(e),
						a = this.anim.skeletonData.getRuntimeData(),
						n = a.defaultSkin,
						r = a.findSlotIndex(e),
						s = n.getAttachment(r, i[1]);
					console.log(a), console.log(n), o && s ? o.setAttachment(s) : cc.error(o && s, "slots: " + e + ", attach: " + i[1] + " not exists!")
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this.GetUnitLv(s.EnumSkill.Swordman_head) * a.default.SkillPower;
					this.gd.hpMaxPlus = Math.floor(this.gd.GetSD().hp * e * .2), this.gd.spdPlus = Math.floor(100 * this.gd.GetSD().spd * e * .1);
					var i = this.GetUnitLv(s.EnumSkill.Swordman_sword) * a.default.SkillPower;
					this.gd.atkPlus = Math.floor(this.gd.GetSD().atk * i * .2)
				}, e.prototype.AI_BlockTest = function() {
					t.prototype.AI_BlockTest.call(this), null != this.AI_CloseScan() && (this.aiData.isBlocking = !1), this.aiData.aiMode != s.AIMode.\u8fdb\u653b && null == this.aiData.atkTarget || (this.aiData.isBlocking = !1)
				}, e.prototype.CanCastSkill = function() {
					return 0 == this.aiData.sklCD && this.aiData.disY < 5 && this.aiData.disX <= this.aiData.sklRange && this.aiData.disX > 300 && 0 == this.formationPos.x
				}, e.prototype.AI_Enter_Atk = function() {
					this.IsControlByUser() || this.LookUnit(this.aiData.atkTarget);
					var t = l.GameUtil.RandomRange(0, 100) < 50 ? "Swordwrath-Attack1" : "Swordwrath-Attack2";
					this.PlayAnim(t, 1 * this.gd.GetAtkSpd())
				}, e.prototype.AI_Enter_Skill = function() {
					this.jumpSpdEndX = this.sklRange, this.IsFlipX() && (this.jumpSpdEndX = -this.jumpSpdEndX), this.jumpSpdEndX += this.x, this.moveDest.SetXY(this.jumpSpdEndX, this.y);
					this.PlayAnim("Swordwrath-Jump", 1 * this.gd.GetAtkSpd())
				}, e.prototype.AI_Update_Skill = function() {
					this.MoveTo(this.moveDest, this.gd.SPD(), null)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (o.IsControlByUser() && o.GetClosestTarget(), null != o.aiData.atkTarget && o.CanAttack()) {
								var a = r.default.gb.GetItemDuration(s.EnumItem.i2) > 0 ? 2 : 1,
									n = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								if (o.sm.curState == c.AIState.Skl) {
									n = 30;
									var l = o.aiData.atkTarget.x > o.x ? 50 : -50;
									o.aiData.atkTarget.PushIt(l, 0)
								}
								n *= a, o.aiData.atkTarget.Behurt(o, n, o.x, o.y, o.IsFlipX())
							}
					}
				}, e.prototype.OnAnimEnd = function(e) {
					t.prototype.OnAnimEnd.call(this, e)
				}, e.prototype.UserControlUpdate = function() {
					var t = this,
						e = r.default.gb,
						i = e.ui.playerPad;
					t.aiData.atkTarget = null;
					for (var o = 0; o < e.units.length; o++) {
						var a = e.units[o];
						if (0 != a.gd.team && !a.IsDead() && t.CanAttack(a)) {
							t.aiData.atkTarget = a;
							break
						}
					}
					t.sm.curState == c.AIState.Skl && t.AI_Update_Skill(), i.UpdateButtonCD(i.btnJump, t.aiData.sklCD / t.gd.GetSklCD())
				}, e.prototype.User_Atk = function() {
					var t = this;
					if (t.StateEnableUserControl() && !(t.aiData.atkCD > 0)) {
						t.lockUserControl = !0, t.aiData.isBlocking = !1, t.aiData.atkCD = t.gd.GetAtkCD();
						var e = l.GameUtil.RandomRange(0, 100) < 50 ? "Swordwrath-Attack1" : "Swordwrath-Attack2";
						t.PlayAnim(e, 1 * t.gd.GetAtkSpd()), t.ChangeState(c.AIState.Atk)
					}
				}, e.prototype.User_Skill = function() {
					var t = this;
					if (t.StateEnableUserControl() && !(t.aiData.sklCD > 0)) {
						t.jumpSpd = t.sklRange - 50, t.aiData.sklCD = t.gd.GetSklCD(), t.lockUserControl = !0, t.aiData.isBlocking = !1;
						var e = l.GameUtil.RandomRange(0, 100) < 50 ? "Swordwrath-Jump" : "Swordwrath-Jump2";
						t.PlayAnim(e, 1), t.ChangeState(c.AIState.Skl)
					}
				}, e
			}(a.default);
		i.default = d, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../../MainData": "MainData",
		"../AIData": "AIData",
		"../GBattle": "GBattle"
	}],
	GTowerArcher: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "0142bKWCtVAfrl/jHT8CIEJ", "GTowerArcher");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Data/GEnums"),
			s = t("../AIData"),
			l = t("../../Data/GD_Unit"),
			c = t("../../Common/GameUtil"),
			u = t("../GBattle"),
			d = t("../Items/GArrow"),
			h = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(r.EnumJob.towerarcher)) || this;
					return i.isOn = !0, i.hasArrow = !1, i.hasDrawn = !1, i.job = r.EnumJob.towerarcher, e ? i.anim.setSkin("Archidon_Red") : i.anim.setSkin("Archidon"), i
				}
				return o(e, t), e.prototype.InitByTeam = function(t) {
					this.gd = new l.default, this.gd.team = t, this.gd.sdId = r.EnumUnit.towerarcher, this.InitData(this.gd)
				}, e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.atkRange = i.gd.GetScanRange(), i.aiData.animStand = "Archidon-Stand1", i.aiData.animRun = "Archidon-Run", i.aiData.animWalk = "Archidon-Walk", i.aiData.animCurDrawing = "Archidon-Draw-For-Intro", i.aiData.canBlock = !1, i.aiData.isCloser = !1, i.aiData.canDrawing = !0, i.shootRangeY = 100, a.default.SetupAnim(this.anim, r.EnumJob.towerarcher, e);
					var o = i.GetStartPos();
					i.x = o.x, i.y = o.y, i.EquipSkill()
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this.GetUnitLv(r.EnumSkill.Tower_archer) * a.default.SkillPower;
					this.gd.atkPlus = Math.floor(this.gd.GetATK() * e * .25)
				}, e.prototype.AI_CalcFarAttackPos = function(e, i) {
					var o = t.prototype.AI_CalcFarAttackPos.call(this, e, i),
						a = this.GetDefPos();
					return o.x = a.x, o
				}, e.prototype.AI_FarScan = function() {
					return this.aiData.aiMode == r.AIMode.\u9632\u5b88 ? t.prototype.AI_FarScan.call(this) : null
				}, e.prototype.UpdateAIModeChange = function() {
					this.isOn ? t.prototype.UpdateAIModeChange.call(this) : (this.aiData.aiMode = r.AIMode.\u5f85\u547d, this.aiData.atkTarget = null)
				}, e.prototype.IsDead = function() {
					return !1
				}, e.prototype.GetDefPos = function() {
					var t = u.default.gb,
						e = new c.Vector2(0, 0);
					return 0 == this.gd.team ? e.SetXY(t.TowerL.x - 370, 100) : e.SetXY(t.TowerR.x + 370, 100), e.x += this.offsetPos.x, e.y += this.offsetPos.y, e
				}, e.prototype.GetIdlePos = function() {
					var t = u.default.gb;
					if (null == t || null == t.TowerL || null == t.TowerR) return c.Vector2.Zero();
					var e = new c.Vector2(0, 0);
					return 0 == this.gd.team ? e.SetXY(t.TowerL.x - 700, 100) : e.SetXY(t.TowerR.x + 700, 100), e.x += this.offsetPos.x, e.y += this.offsetPos.y, e
				}, e.prototype.GetStartPos = function() {
					return this.GetIdlePos()
				}, e.prototype.GetAttackPos = function() {
					return this.GetIdlePos()
				}, e.prototype.InitTitle = function() {
					t.prototype.InitTitle.call(this), null != this.title && (this.title.node.active = !1)
				}, e.prototype.AI_Enter_DrawBow = function() {
					this.hasArrow = !0, this.hasDrawn = !1
				}, e.prototype.AI_Enter_DrawBow_Hold = function() {
					this.hasArrow = !0, this.hasDrawn = !0
				}, e.prototype.AI_Update_DrawBow_Hold = function() {
					t.prototype.AI_Update_DrawBow_Hold.call(this);
					var e = this;
					e.aiData.disY < .1 && e.aiData.disX <= e.atkRange && null != e.aiData.atkTarget && e.aiData.atkTarget.IsDead(), e.ChangeState(s.AIState.Thinking)
				}, e.prototype.CanAttack = function(e, i, o) {
					void 0 === e && (e = null), void 0 === i && (i = 1), void 0 === o && (o = !1), i *= .5;
					var a = t.prototype.CanAttack.call(this, e, i, o);
					return !(Math.abs(this.GetDefPos().x - this.x) > 5) && (a && this.aiData.disY < 100)
				}, e.prototype.AI_Enter_Atk = function() {
					this.anim.getCurrent(1) != this.aiData.animCurDrawing ? (this.PlayAnim(this.aiData.animCurDrawing), null != this.aiData.atkTarget && this.LookUnit(this.aiData.atkTarget)) : this.ChangeState(s.AIState.Stand)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							o.Shoot(), o.hasArrow = !1, o.hasDrawn = !1, o.aiData.isDrawing = !1, o.aiData.atkTarget = null;
							break;
						case "Drawn":
							o.hasArrow = !0, o.hasDrawn = !0, o.aiData.atkTarget && o.aiData.atkTarget.node || o.ChangeState(s.AIState.Stand)
					}
				}, e.prototype.OnAnimEnd = function(e) {
					t.prototype.OnAnimEnd.call(this, e), "Archidon-Draw" == this.prevAnimName && this.ChangeState(s.AIState.Thinking)
				}, e.prototype.Shoot = function() {
					null != this.aiData.atkTarget && d.default.GetArrow().Setup(this, this.aiData.atkTarget)
				}, e
			}(a.default);
		i.default = h, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GD_Unit": "GD_Unit",
		"../../Data/GEnums": "GEnums",
		"../AIData": "AIData",
		"../GBattle": "GBattle",
		"../Items/GArrow": "GArrow"
	}],
	GTower: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "1df40/o/DdP9LMN2P42ADlW", "GTower");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../Data/GEnums"),
			r = t("../AIData"),
			s = t("../GBattle"),
			l = t("../../MainData"),
			c = t("../../Common/SimpleStateMachine"),
			u = function(t) {
				function e(e) {
					var i = t.call(this, null, e) || this;
					return i.walls = [], i.goldPre10 = 20, i.dt = 10, i.hhh = 0, e.parent && e.parent.removeChild(e), s.default.gb.gbRoot.gActors.addChild(e), i.job = n.EnumJob.tower, i
				}
				return o(e, t), e.prototype.InitData = function(t) {
					this.gd = t, this.aiData = new r.AIData, this.canBePush = !1, this.aiData.animDeath = "death", a.default.SetupAnim(null, n.EnumJob.tower, t, this.node), this.sm = new c.default, this.EquipSkill()
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this), this.size.x = 160, this.size.y = 300;
					var e = this.GetUnitLv(n.EnumSkill.Tower_money) * a.default.SkillPower;
					this.goldPre10 += Math.floor(20 * e);
					var i = 1 + .1 * (this.GetUnitLv(n.EnumSkill.Tower_hp) * a.default.SkillPower);
					this.scaleX *= i, this.scaleY *= i
				}, e.prototype.SetOnPosion = function(t) {}, e.prototype.Die = function() {}, e.prototype.Update = function() {
					t.prototype.Update.call(this)
				}, e.prototype.Update_AI = function() {
					s.default.IsBattleEnd() || 0 != this.visible && (t.prototype.Update_AI.call(this), this.dt > 0 ? this.dt -= l.default.GetGameFPS() : (this.dt = 10, s.default.gb.ui.PopText("+" + this.goldPre10.toFixed(0), this.x, this.y + 300, cc.Color.YELLOW, !0), s.default.gb.gd.teamDict[this.gd.team].gold += this.goldPre10))
				}, e.prototype.CheckHeadShot = function(t, e) {
					return !1
				}, e.prototype.CheckBackHit = function(t) {
					return !1
				}, e.prototype.Behurt = function(e, i, o, a, r, l, c) {
					void 0 === c && (c = 1), this.IsDead() || (this.gd.team, this.gd.hp / this.gd.GetHPMax() <= .5 && 0 == this.gd.team && s.default.gb.ui.ShowBattle(), s.default.gb.GetItemDuration(n.EnumItem.i5) > 0 || t.prototype.Behurt.call(this, e, i, o, a, r, l, c))
				}, e.prototype.AI_Thinking = function() {
					if (t.prototype.AI_Thinking.call(this), !this.IsDead() && s.default.gb.GetItemDuration(n.EnumItem.i5) > 0 && (this.hhh += l.default.GetGameFPS() * this.gd.GetHPMax() * .01, this.hhh > 1)) {
						var e = Math.floor(this.hhh);
						this.hhh -= e, this.gd.hp += e
					}
				}, e
			}(a.default);
		i.default = u, cc._RF.pop()
	}, {
		"../../Actor/GUnit": "GUnit",
		"../../Common/SimpleStateMachine": "SimpleStateMachine",
		"../../Data/GEnums": "GEnums",
		"../../MainData": "MainData",
		"../AIData": "AIData",
		"../GBattle": "GBattle"
	}],
	GTurntable: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "3f966qPoSRMyK7q3vytKB91", "GTurntable");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../ADSDK"),
			s = t("../Game/GBattle/UIItemPop"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.btnDel = null, e.btnFetch = null, e.btnTurn = null, e.pointer = null, e.lLable = null, e.bar = null, e.items = [], e.Turn = !0, e
				}
				return o(e, t), e.prototype.Setup = function() {
					this.updateView(), this.initPage()
				}, e.prototype.initPage = function() {
					n.default.role.turnTable > 0 ? (this.btnTurn.getChildByName("ADIcon").active = !0, this.btnTurn.getChildByName("AdLabel").active = !0, this.btnTurn.getChildByName("FreeLable").active = !1) : (this.btnTurn.getChildByName("ADIcon").active = !1, this.btnTurn.getChildByName("AdLabel").active = !1, this.btnTurn.getChildByName("FreeLable").active = !0)
				}, e.prototype.BTN_Fetch = function() {
					n.default.role.turnNum >= 3 && (n.default.role.rmb += 50, n.default.role.turnNum = 0, s.default.Show(0, 50, !1), n.default.SaveGame(), this.updateView())
				}, e.prototype.BTN_Turn = function() {
					if (this.Turn)
						if (0 == n.default.role.turnTable) this.Turn = !1, this.Turn_help();
						else {
							var t = this;
							r.default.showVideoAD(this, function() {
								t.Turn_help()
							})
						}
				}, e.prototype.Turn_help = function() {
					var t = Math.floor(6 * Math.random()),
						e = 1800 + 60 * t;
					this.pointer.rotation %= 360;
					var i = cc.rotateTo(5, e).easing(cc.easeCubicActionInOut());
					this.pointer.runAction(cc.sequence(i, cc.callFunc(function() {})));
					var o = this;
					setTimeout(function() {
						o.Turn_help2(t)
					}, 5e3)
				}, e.prototype.BTN_Delete = function() {
					this.node.active = !1
				}, e.prototype.Turn_help2 = function(t) {
					if (0 == n.default.role.turnTable);
					else;
					switch (t) {
						case 0:
							n.default.AddItemNum(9, 1, !1, !1);
							break;
						case 1:
							n.default.role.rmb += 10, s.default.Show(0, 10, !1);
							break;
						case 2:
							n.default.AddItemNum(1, 1, !1, !1);
							break;
						case 3:
							n.default.role.rmb += 100, s.default.Show(0, 100, !1);
							break;
						case 4:
							n.default.AddItemNum(3, 1, !1, !1);
							break;
						case 5:
							n.default.role.rmb += 50, s.default.Show(0, 50, !1)
					}
					n.default.role.turnTable += 1, this.Turn = !0, n.default.role.turnNum >= 3 ? n.default.role.turnNum = 3 : n.default.role.turnNum += 1, this.updateView(), this.initPage(), n.default.SaveGame()
				}, e.prototype.updateView = function() {
					var t = n.default.role.turnNum;
					this.btnFetch.active = t >= 3, this.bar.node.width = this.bar.node.parent.width * t / 3, this.lLable.string = t.toString()
				}, a([u(cc.Node)], e.prototype, "btnDel", void 0), a([u(cc.Node)], e.prototype, "btnFetch", void 0), a([u(cc.Node)], e.prototype, "btnTurn", void 0), a([u(cc.Node)], e.prototype, "pointer", void 0), a([u(cc.Label)], e.prototype, "lLable", void 0), a([u(cc.Sprite)], e.prototype, "bar", void 0), a([u([cc.Node])], e.prototype, "items", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData"
	}],
	GUnitOnBuilding: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "1c672Val+1OBbuaYzeAXzNI", "GUnitOnBuilding"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			return function() {}
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	GUnit: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c7cf9HphaRDyoKPWf9bV0t4", "GUnit");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("./GActor"),
			n = t("../MainData"),
			r = t("../Common/GameUtil"),
			s = t("../Data/GEnums"),
			l = t("../GBattle/AIData"),
			c = t("../Common/SimpleStateMachine"),
			u = t("../GBattle/GBattle"),
			d = t("../../CCScripts/UIUnitTitle"),
			h = t("../Common/GSpritesData"),
			p = t("../../CCScripts/GPrefabManager"),
			f = t("../../UI/Shop/UISkinShop"),
			m = t("../Common/GAudio"),
			v = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.showDebug = !1, e.offsetPos = new r.Vector2(0, 0), e.sm = null, e.formationPos = new r.Vector2(0, 0), e.moveDest = new r.Vector2(0, 0), e.atkRange = 180, e.sklRange = 500, e.shootRangeY = 10, e.aiData = null, e.bodySize = 1, e.job = s.EnumJob.meric, e.buff_ice = 0, e.buff_shutdown = 0, e.buff_fire = 0, e.buff_firedmg = 0, e.buff_posion = 0, e.title = null, e.initTitle = !0, e.lockUserControl = !1, e._moveDest = new r.Vector2(0, 0), e._moveSpd = 0, e._anim2 = null, e._dontStand = !1, e._lookAtDest = !0, e.safeDistance = 300, e.curMoveSpd = 0, e.isHeadShot_ArrowL = !1, e.isHeadShot_SpearL = !1, e.isHeadShot_ArrowR = !1, e.isHeadShot_SpearR = !1, e.isFlying = !1, e.canBePush = !0, e.pushPower = new r.Vector2(0, 0), e.friction = 20, e.launchY = 0, e.landTime = 0, e._timePreSec = 0, e.prevPos = new r.Vector2(0, 0), e._delayChangeMode = 0, e.hitFlyEnd = !1, e
				}
				return o(e, t), Object.defineProperty(e.prototype, "sd", {
					get: function() {
						return n.default.allSeeds.units[this.gd.sdId]
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.InitData = function(t) {
					if (this.gd = t, this.aiData = new l.AIData, this.sm = new c.default, this.sm.Register(this, l.AIState.Stand, this.AI_Enter_Stand, null, null), this.sm.Register(this, l.AIState.Atk, this.AI_Enter_Atk, null, null), this.sm.Register(this, l.AIState.Skl, this.AI_Enter_Skill, null, this.AI_Update_Skill), this.sm.Register(this, l.AIState.Move, null, null, this.AI_Update_Move), this.sm.Register(this, l.AIState.Die, this.AI_Enter_Die, null, null), this.sm.Register(this, l.AIState.DrawBow, this.AI_Enter_DrawBow, null, null), this.sm.Register(this, l.AIState.Reload, this.AI_Enter_Reload, null, null), this.sm.Register(this, l.AIState.DrawBowHold, this.AI_Enter_DrawBow_Hold, null, null), this.sm.Register(this, l.AIState.HitFly, this.AI_Enter_HitFly, null, this.AI_Update_HitFly), this.sm.Register(this, l.AIState.StandUp, this.AI_Enter_StandUp, null, null), this.ChangeState(l.AIState.Thinking), this.aiData.animBlock = "", this.aiData.animDeath = r.GameUtil.RandomRange(0, 100) ? "Death1" : "Death2", this.aiData.animStrikeFly = "Generic-Fallback", this.aiData.animDeath_ArrowL = "Death-Headshot", this.aiData.animDeath_ArrowR = "Death-Headshot-Forward", this.aiData.animDeath_SpearL = "Death-Headshot-Spear", this.aiData.animDeath_SpearR = "Death-Headshot-Forward-Spear", this.aiData.animWin = "Swordwrath-Leader", 1 == this.sd.equipSklLvUp && this.EquipSkill(), this.anim) {
						var e = this.anim.skeletonData.skeletonJson.animations;
						for (var i in e)
							for (var o in e) i != o && this.anim.setMix(i, o, .2)
					}
				}, e.prototype.ChangeState = function(t) {
					this.sm.ChangeState(t)
				}, e.prototype.GetUnitLv = function(t) {
					var e = 0;
					return null != u.default.gb.gd.teamDict[this.gd.team].JobLvUp[t] && (e = u.default.gb.gd.teamDict[this.gd.team].JobLvUp[t]), e
				}, e.prototype.SetOnPosion = function(t) {
					if (t) {
						if (5 == n.default.role.playerSkins.GetJobSkin(this.job)) return;
						this.buff_posion += 5
					} else this.buff_posion = 0
				}, e.prototype.SetOnShutdown = function() {
					switch (this.buff_shutdown = .5, this.sm.curState) {
						case l.AIState.Atk:
						case l.AIState.Skl:
						case l.AIState.HitFly:
						case l.AIState.StandUp:
						case l.AIState.StandUpUnderFloor:
							break;
						default:
							this.ChangeState(l.AIState.Stand)
					}
				}, e.prototype.SetOnIce = function() {
					this.buff_ice = 2
				}, e.prototype.SetOnFire = function(t) {
					var e = this.buff_firedmg * this.buff_fire + 3 * t;
					this.buff_fire = 3, this.buff_firedmg = e / this.buff_fire
				}, e.prototype.EquipSkill = function() {}, e.prototype.InitTitle = function() {
					if (this.initTitle) {
						this.initTitle = !1;
						var t = this.node.getChildByName("Title");
						t && (this.title = t.getComponent(d.default), this.title.node.active = !1, this.title.hpMax = this.gd.GetHPMax(), this.title.SetHP(this.gd.hp, this.gd.team), this.title.wkMax = 1, this.title.SetWK(0))
					}
				}, e.prototype.IsDead = function() {
					return this.gd.hp <= 0
				}, e.prototype.AI_Enter_Stand = function() {
					this.IsBlocking() ? this.PlayAnimLoop2(this.aiData.animBlock, this.aiData.animStand) : this.IsDrawing() ? this.PlayAnimLoop2(this.aiData.animCurDrawing, this.aiData.animStand) : this.PlayAnimLoop(this.aiData.animStand), this.aiData.fallBack = !1
				}, e.prototype.PlayAnim = function(e, i) {
					if (void 0 === i && (i = 1), t.prototype.PlayAnim.call(this, e, i, !1)) {
						var o = this;
						o.anim.setEventListener(function(t, e) {
							o.UpdateEvent.call(o, t, e)
						}), o.anim.setCompleteListener(function(t) {
							o.OnAnimEnd.call(o, t)
						})
					}
				}, e.prototype.PlayAnimLoop = function(e, i) {
					if (void 0 === i && (i = 1), t.prototype.PlayAnim.call(this, e, i, !0)) {
						var o = this;
						o.anim.setEventListener(function(t, e) {
							o.UpdateEvent.call(o, t, e)
						})
					}
				}, e.prototype.PlayAnim2 = function(e, i, o) {
					if (void 0 === o && (o = 1), t.prototype.PlayAnim2.call(this, e, i, o, !1)) {
						var a = this;
						a.anim.setEventListener(function(t, e) {
							a.UpdateEvent.call(a, t, e)
						}), a.anim.setCompleteListener(function(t) {
							a.OnAnimEnd.call(a, t)
						})
					}
				}, e.prototype.PlayAnimLoop2 = function(e, i, o) {
					if (void 0 === o && (o = 1), t.prototype.PlayAnim2.call(this, e, i, o, !0)) {
						var a = this;
						a.anim.setEventListener(function(t, e) {
							a.UpdateEvent.call(a, t, e)
						})
					}
				}, e.prototype.StateEnableUserControl = function() {
					if (this.lockUserControl) return !1;
					switch (this.sm.curState) {
						case l.AIState.Thinking:
						case l.AIState.Move:
						case l.AIState.Stand:
							return !0
					}
					return !1
				}, e.prototype.UserControlMove = function(t, e, i) {
					var o = this;
					if (o.StateEnableUserControl())
						if (i) o.ChangeState(l.AIState.Stand);
						else {
							var a = 1.5 * o.gd.SPD();
							o.moveDest.x = o.x + t * a, o.moveDest.y = o.y + e * a, o.IsBlocking() ? o.MoveTo2(o.moveDest, .5 * o.gd.SPD(), o.aiData.animBlock, o.aiData.animWalk) : o.IsDrawing() ? o.MoveTo2(o.moveDest, .5 * o.gd.SPD(), o.aiData.animCurDrawing, o.aiData.animWalk) : o.MoveTo(o.moveDest, o.gd.SPD(), o.aiData.animRun), o.sm.curState != l.AIState.Move && o.ChangeState(l.AIState.Move)
						}
				}, e.prototype.MoveTo = function(t, e, i) {
					this._dontStand = null == i, this._moveDest.x = t.x, this._moveDest.y = t.y, this._moveSpd = e, this._anim2 = null, this._lookAtDest = !0, null != i && this.ANIM_Move(i, this.MovePlayScale(e)), this.UpdateMove()
				}, e.prototype.MoveTo2 = function(t, e, i, o, a) {
					void 0 === a && (a = !0), this._dontStand = !1, this._moveDest.x = t.x, this._moveDest.y = t.y, this._moveSpd = e, this._lookAtDest = a, this._anim2 = o, this.PlayAnimLoop2(i, o, this.MovePlayScale(e)), this.UpdateMove()
				}, e.prototype.MovePlayScale = function(t) {
					return 1, 1
				}, e.prototype.UpdateMove = function() {
					var t = this;
					if (t.curMoveSpd = 0, t.x != t._moveDest.x || t.y != t._moveDest.y) {
						var e = r.Vector2.CalcForward(t.x, t.y, t._moveDest.x, t._moveDest.y);
						t.curMoveSpd = t._moveSpd * e.x;
						var i = n.default.GetGameFPS();
						this.buff_ice > 0 && (i *= .7);
						var o = e.x * t._moveSpd * i,
							a = e.y * t._moveSpd * i;
						0 != o && this._lookAtDest && this.SetFlipX(o < 0);
						var s = r.Vector2.Distance(0, 0, o, a),
							l = r.Vector2.Distance(this.x, this.y, this._moveDest.x, this._moveDest.y),
							c = this.x,
							d = this.y;
						this.IsControlByUser() ? c < u.default.gb.TowerL.x - this.safeDistance && o < 0 ? o = 0 : c > u.default.gb.TowerR.x + this.safeDistance && o > 0 && (o = 0) : c < u.default.gb.TowerL.x - this.safeDistance && o < 0 && 1 == this.gd.team ? o = 0 : c > u.default.gb.TowerR.x + this.safeDistance && o > 0 && 0 == this.gd.team && (o = 0), s < l ? (c += o, d += a) : (c = this._moveDest.x, d = this._moveDest.y);
						var h = u.default.gb.roadblock;
						if (null != h && (0 != o || 0 != a)) {
							c = t.x < h.x ? c > h.x - 100 ? h.x - 100 : c : c < h.x + 100 ? h.x + 100 : c
						}
						d = (d = d > 270 ? 270 : d) < 0 ? 0 : d, this.SetPos(c, d)
					}
				}, e.prototype.SetPos = function(e, i) {
					t.prototype.SetPos.call(this, e, i);
					var o = .3 * ((300 - i) / 300) + .7;
					this.scaleX = o, this.scaleY = o
				}, e.prototype.CheckFront = function() {
					var t = this;
					t.aiData.aiMode == s.AIMode.\u5f85\u547d && (0 == t.gd.team && t.IsFrontLeft() || 1 == t.gd.team && t.IsFrontRight()) && t.SetFlipX(!t.IsFlipX())
				}, e.prototype.Die = function() {
					var t = this,
						e = u.default.gb;
					t.IsControlByUser() && e.ui.playerPad.Free_Unit(), n.default.curMode == s.\u6a21\u5f0f.\u50f5\u5c38 && 1 == t.gd.team && null != n.default.role && null != n.default.role.endless && (n.default.role.endless.killCount++, u.default.gb.killCount++), t.gd.hp = 0, e.RemoveUnit(t), e.UpdateFormation();
					var i = u.default.gb.GetEffVolume(this.node.x);
					switch (m.default.PlaySoundByName("Death_1", i), t.sm.curState) {
						case l.AIState.HitFly:
							t.DeleteObject();
							break;
						case l.AIState.Die:
							break;
						default:
							t.ChangeState(l.AIState.Die)
					}
					null != t.title && t.title.node.active && (t.title.node.active = !1)
				}, e.prototype.DeleteObject = function() {
					this.lockUserControl = !0, this.IsControlByUser() && u.default.gb.ui.playerPad.Free_Unit(), null != this.parent && this.node.removeFromParent(), this.OnDestroy()
				}, e.prototype.IsCloser = function(t) {
					return t.job == s.EnumJob.swordman || t.job == s.EnumJob.sparda || t.job == s.EnumJob.summon
				}, e.prototype.IsControlByUser = function() {
					var t = u.default.gb;
					return null != t && t.ui.playerPad.curUnit == this
				}, e.prototype.SetFlipX = function(t) {
					var e = Math.abs(this.anim.node.scaleX);
					this.anim.node.scaleX = t ? -e : e
				}, e.prototype.IsFlipX = function() {
					return this.anim.node.scaleX < 0
				}, e.prototype.AI_Update_Move = function() {
					var t = this;
					t.IsControlByUser() || (t.IsBlocking() ? t.MoveTo2(t.moveDest, .5 * t.gd.SPD(), t.aiData.animBlock, t.aiData.animWalk) : t.IsDrawing() ? t.MoveTo2(t.moveDest, .5 * t.gd.SPD(), t.aiData.animCurDrawing, t.aiData.animWalk) : t.MoveTo(t.moveDest, t.gd.SPD(), t.aiData.animRun), t.x == t.moveDest.x && t.y == t.moveDest.y && (t.aiData.moveCD = .3, t.LookUnit(null), t.ChangeState(l.AIState.Thinking)))
				}, e.prototype.ANIM_Move = function(t, e) {
					this.PlayAnimLoop(t, e)
				}, e.prototype.IsOutIdleSize = function(t) {
					return this.aiData.aiMode == s.AIMode.\u5f85\u547d && (null == t || null != t && (0 == this.gd.team && t.x > u.default.gb.TowerL.x + 2500 || 1 == this.gd.team && t.x < u.default.gb.TowerR.x - 2500))
				}, e.prototype.LookUnit = function(t) {
					null != t ? this.x > t.x ? this.SetFlipX(!0) : this.x < t.x && this.SetFlipX(!1) : this.SetFlipX(0 != this.gd.team)
				}, e.prototype.AI_Enter_Atk = function() {}, e.prototype.AI_Enter_Skill = function() {}, e.prototype.AI_Update_Skill = function() {}, e.prototype.AI_Enter_DrawBow = function() {}, e.prototype.AI_Enter_DrawBow_Hold = function() {}, e.prototype.AI_Update_DrawBow_Hold = function() {}, e.prototype.AI_Enter_Reload = function() {}, e.prototype.AI_Enter_HitFly = function() {
					this.hitFlyEnd = !1, this.PlayAnim(this.aiData.animStrikeFly)
				}, e.prototype.AI_Update_HitFly = function() {
					this.isFlying || (this.hitFlyEnd || this.landTime >= 1) && (this.hitFlyEnd = !0, this.IsDead() ? this.Die() : (this.lockUserControl = !0, this.ChangeState(l.AIState.StandUp)))
				}, e.prototype.AI_Enter_Die = function() {
					this.isHeadShot_ArrowL ? this.PlayAnim(this.aiData.animDeath_ArrowL) : this.isHeadShot_ArrowR ? this.PlayAnim(this.aiData.animDeath_ArrowR) : this.isHeadShot_SpearL ? this.PlayAnim(this.aiData.animDeath_SpearL) : this.isHeadShot_SpearR ? this.PlayAnim(this.aiData.animDeath_SpearR) : this.PlayAnim(this.aiData.animDeath)
				}, e.prototype.AI_Enter_StandUp = function() {
					this.PlayAnim(this.aiData.animStand)
				}, e.prototype.IsBlocking = function() {
					return this.aiData.isBlocking
				}, e.prototype.IsDrawing = function() {
					return this.aiData.isDrawing
				}, e.prototype.GetAttackPos = function() {
					var t = this,
						i = new r.Vector2(0, 0);
					if (t.IsCloser(this) && 0 == t.formationPos.x || t.aiData.isZombie) 0 == t.gd.team ? i.SetXY(u.default.gb.TowerR.x, u.default.gb.TowerR.y) : i.SetXY(u.default.gb.TowerL.x, u.default.gb.TowerL.y);
					else if (t.IsCloser(this)) {
						var o = (0 == t.gd.team ? u.default.gb.fTeam0 : u.default.gb.fTeam1).map[t.formationPos.y][t.formationPos.x - 1].x;
						o += (0 == t.gd.team ? -100 : 100) * t.scaleX, i.SetXY(o - t.offsetPos.x, 0)
					} else {
						for (var a = e.RightX, n = e.LeftX, l = 0; l < u.default.gb.units.length; l++) {
							var c = u.default.gb.units[l];
							!c.IsDead() && c.job != s.EnumJob.miner && c.IsCloser(c) && (0 == c.gd.team && c.x > a && 0 == c.formationPos.x ? a = c.x : 1 == c.gd.team && c.x < n && 0 == c.formationPos.x && (n = c.x))
						}
						if (0 == t.gd.team ? i.SetXY(a, 0) : i.SetXY(n, 0), 9999 == i.x || -9999 == i.x) {
							o = (0 == t.gd.team ? u.default.gb.TowerR : u.default.gb.TowerL).x;
							o += 0 == t.gd.team ? -100 : 100, i.SetXY(o - t.offsetPos.x, 0)
						}
						i.x *= this.scaleX
					}
					return i.y = s.StandY, i.x += this.offsetPos.x, i.y += this.offsetPos.y, i.x < e.LeftX && (i.x = e.LeftX), i.x > e.RightX && (i.x = e.RightX), i
				}, e.prototype.GetDefPos = function() {
					var t = new r.Vector2(0, 0);
					return 0 == this.gd.team ? t.SetXY(u.default.gb.TowerL.x - 800, 0) : t.SetXY(u.default.gb.TowerR.x + 800, 0), t.y = s.StandY, t.x += this.offsetPos.x, t.y += this.offsetPos.y, this.job == s.EnumJob.miner && (t.y = this.y), t
				}, e.prototype.GetIdlePos = function() {
					var t = new r.Vector2(0, 0);
					return 0 == this.gd.team ? t.SetXY(u.default.gb.TowerL.x + 800, 0) : t.SetXY(u.default.gb.TowerR.x - 800, 0), t.y = s.StandY, t.x += this.offsetPos.x, t.y += this.offsetPos.y, t
				}, e.prototype.GetStartPos = function() {
					var t = this.GetDefPos();
					return t.y = s.StandY, t.x += this.offsetPos.x, t.y += this.offsetPos.y, t
				}, e.prototype.IsArrowHurtMe = function(t) {
					var e = this;
					if (t.team == e.gd.team) return !1;
					var i = e.size.x * Math.abs(e.scaleX) * .5,
						o = e.size.y * e.scaleY;
					return e.job == s.EnumJob.roadblock && (o = 999), Math.abs(t.x - e.x) < i && t.y - e.y < o
				}, e.prototype.CheckAtkerPlayerSkin = function(t, e) {
					switch (n.default.role.playerSkins.GetJobSkin(t.job)) {
						case 0:
						case 1:
							break;
						case 2:
							this.SetOnIce();
							break;
						case 3:
							break;
						case 4:
							this.SetOnFire(.05 * e);
							break;
						case 5:
							t && t.BeHealth(t, .05 * e)
					}
				}, e.prototype.Behurt = function(t, e, i, o, a, n, r) {
					if (void 0 === n && (n = !0), void 0 === r && (r = 1), null == t || !(t.IsDead() || this.IsDead() || this.destroyed || t.destroyed)) {
						var c = u.default.gb;
						this.isHeadShot_ArrowL = !1, this.isHeadShot_SpearL = !1, this.isHeadShot_ArrowR = !1, this.isHeadShot_SpearR = !1;
						var d = !1;
						this.CheckHeadShot(i, o) && (e += 22, n ? this.CheckBackHit(a) ? this.isHeadShot_ArrowR = !0 : this.isHeadShot_ArrowL = !0 : this.CheckBackHit(a) ? this.isHeadShot_SpearR = !0 : this.isHeadShot_SpearL = !0, d = !0, h.default.CreateEff(7, this.parent, this.x, this.y)), 0 == this.gd.team && (e *= c.enemyDiffRate), null != t && t.IsControlByUser() && (e *= 2), null == t || this.job != s.EnumJob.tower && this.job != s.EnumJob.roadblock || (e *= t.sd.dmgRateForStatus), this.job != s.EnumJob.tower && this.job != s.EnumJob.roadblock || (e *= r);
						var f = !1;
						this.CheckBackHit(a) && (e *= 2, f = !0);
						var m = this.y + 200 * this.scaleY,
							v = 0;
						null != t && (v = t.node.x - this.node.x < 0 ? 100 : -100), d && f ? c.ui.PopTextHurt("Chặn", this.x, m, v) : d ? c.ui.PopTextHurt("\u66b4\u51fb", this.x, m, v) : f && c.ui.PopTextHurt("Phản", this.x, m, v), this.IsBlocking() && (e *= .3), (e = Math.floor(e)) < 1 && (e = 1), this.gd.hp -= e, m = this.y + 150 * this.scaleY, c.ui.PopTextHurt("-" + e, this.x, m, v), t && 0 == t.gd.team && this.CheckAtkerPlayerSkin(t, e), this.title.hpMax = this.gd.GetHPMax(), this.title.SetHP(this.gd.hp, this.gd.team);
						var y = !0;
						if (null != this.sm && (y = this.sm.curState != l.AIState.HitFly), this.gd.hp <= 0 && y) this.Die();
						else if (Math.random() < .5) {
							var g = p.default.manager.GetGBlood(c.gbRoot.gShadows);
							g.node.scaleX = Math.abs(g.node.scaleX), this.scaleX < 0 && (g.node.scaleX = -g.node.scaleX), g.node.x = this.x, g.node.y = this.y, g.AutoRelease(3)
						}
					}
				}, e.prototype.CheckHeadShot = function(t, e) {
					var i = -(e - this.y),
						o = .8 * this.size.y * this.scaleX,
						a = this.size.y * this.scaleY;
					return i >= o && i <= a
				}, e.prototype.CheckBackHit = function(t) {
					return t == this.IsFlipX()
				}, e.prototype.PushIt = function(t, e, i) {
					void 0 === i && (i = 0), this.canBePush && (0 == this.pushPower.x && 0 == this.pushPower.y && (this.launchY = this.y + i), this.pushPower.x = t, this.pushPower.y = e, 0 == this.pushPower.x && 0 == this.pushPower.y && (this.isFlying = !0, this.landTime = 0))
				}, e.prototype.Update = function() {
					if (null != this.aiData && null != this.sm) {
						t.prototype.Update.call(this), this.Update_Phy(), this.Update_AI();
						var e = n.default.GetGameFPS();
						this._timePreSec -= e;
						var i = this._timePreSec < 0;
						this._timePreSec < 0 && (this._timePreSec = 1), this.buff_posion > 0 && (this.buff_posion -= e, i && this.Behurt(null, 1, 0, 0, this.IsFlipX())), this.buff_fire > 0 && (this.buff_fire -= e, i && this.Behurt(null, this.buff_firedmg, 0, 0, this.IsFlipX())), this.buff_ice > 0 && (this.buff_ice -= e), this.buff_shutdown > 0 && (this.buff_shutdown -= e), this.title && this.title.CheckBuffImg(this)
					}
				}, e.prototype.Update_Phy = function() {
					if (this.canBePush && (0 != this.pushPower.x || 0 != this.pushPower.y)) {
						var t = this.pushPower.x * n.default.GetGameFPS(),
							e = this.pushPower.y * n.default.GetGameFPS(),
							i = this.x,
							o = this.y;
						i += t, o += e, (o = Math.max(this.launchY, o)) == this.launchY ? (this.pushPower.y = 0, this.pushPower.x > 0 ? this.pushPower.x = Math.max(0, this.pushPower.x - n.default.GetGameFPS() * this.friction) : this.pushPower.x = Math.min(0, this.pushPower.x + n.default.GetGameFPS() * this.friction), this.landTime += n.default.GetGameFPS()) : o > 0 && (this.landTime = 0, this.pushPower.y -= 9.8 * n.default.GetGameFPS()), Math.abs(this.pushPower.x) < 1 && 0 == this.pushPower.y && (this.pushPower.x = 0, this.pushPower.y = 0, this.isFlying = !1), this.x = i, this.y = o
					}
				}, e.prototype.Update_AI = function() {
					u.default.IsBattleEnd() || (this.prevPos.x = this.x, this.prevPos.y = this.y, this.aiData.sklCD > 0 && (this.aiData.sklCD -= n.default.GetGameFPS()), this.aiData.sklCD < 0 && (this.aiData.sklCD = 0), this.aiData.atkCD > 0 && (this.aiData.atkCD -= n.default.GetGameFPS()), this.aiData.atkCD < 0 && (this.aiData.atkCD = 0), this.IsControlByUser() || (this.aiData.nextState = l.AIState.Stand, this.UpdateAIModeChange(), this.aiData.canBlock && this.AI_BlockTest(), this.aiData.canDrawing && this.AI_DrawBowTest(), this.CanThinking() && this.AI_Thinking()), this.sm.Update())
				}, e.prototype.AI_BlockTest = function() {
					var t = this,
						e = t.aiData.isBlocking;
					if (t.aiData.isBlocking = !1, t.aiData.aiMode == s.AIMode.\u9632\u5b88 || t.sm.curState == l.AIState.Atk) t.aiData.isBlocking = !1;
					else if (!t.aiData.fallBack) {
						for (var i = 0; i < u.default.gb.units.length; i++) {
							var o = u.default.gb.units[i];
							if (o.gd.team != t.gd.team && !o.IsDead())
								if (o.aiData.aiMode != s.AIMode.\u9632\u5b88)
									if (o.aiData.aiMode != s.AIMode.\u5f85\u547d || !o.aiData.fallBack)
										if (Math.abs(this.x - o.x) < 15) {
											this.aiData.isBlocking = !0;
											break
										}
						}
						if (!t.aiData.isBlocking)
							for (i = 0; i < u.default.gb.arrows.length; i++) {
								var a = u.default.gb.arrows[i];
								if (a.team != this.gd.team)
									if (Math.abs(this.x - a.x) < 15) {
										this.aiData.isBlocking = !0;
										break
									}
							}
					}
					t.IsControlByUser() && (this.aiData.isBlocking = !1), t.aiData.needBlockAction = e != t.aiData.isBlocking
				}, e.prototype.AI_DrawBowTest = function() {
					var t = this.aiData.isDrawing,
						e = this.aiData.atkTarget;
					this.aiData.isDrawing = !1, e && this.CanAttack(e, .8, !0) && this.EnoughClose(e) && !this.aiData.fallBack && (this.aiData.isDrawing = !0), this.aiData.needDrawAction = t != this.aiData.isDrawing
				}, e.prototype.IsInBattleArea = function(t) {
					var i = t.x;
					return i >= e.LeftX && i <= e.RightX
				}, e.prototype.AI_Thinking = function() {
					var t = this;
					switch (t.aiData.aiMode) {
						case s.AIMode.\u5f85\u547d:
							t.moveDest = t.GetIdlePos();
							break;
						case s.AIMode.\u8fdb\u653b:
							t.moveDest = t.GetAttackPos();
							break;
						case s.AIMode.\u9632\u5b88:
							t.moveDest = t.GetDefPos()
					}
					t.moveDest.x == t.x && t.moveDest.y == t.y || t.SetMoveNext();
					var e = null;
					switch (t.aiData.atkTarget = null, t.aiData.aiMode) {
						case s.AIMode.\u8fdb\u653b:
							e = t.aiData.isCloser ? t.AI_CloseScan() : t.AI_FarScan();
							break;
						case s.AIMode.\u5f85\u547d:
							var i = 0 == t.gd.team ? u.default.gb.TowerL : u.default.gb.TowerR;
							0 == t.gd.team && t.x > i.x + 2100 ? t.aiData.fallBack = !0 : 1 == t.gd.team && t.x < i.x - 2100 ? t.aiData.fallBack = !0 : t.aiData.fallBack || (e = t.aiData.isCloser ? t.AI_CloseScan() : t.AI_FarScan()), t.IsOutIdleSize(e) && (e = null);
							break;
						case s.AIMode.\u9632\u5b88:
							t.job == s.EnumJob.towerarcher && (e = t.AI_FarScan())
					}
					if (t.CanCastSkillNoTarget()) t.aiData.isBlocking = !1, t.aiData.sklCD = t.gd.GetSklCD(), t.aiData.nextState = l.AIState.Skl;
					else if (null != e) {
						if (!t.CanCloseToTarget(e) && t.aiData.isCloser)
							for (var o = 0; o < u.default.gb.units.length; o++) {
								var a = u.default.gb.units[o];
								if (!a.IsDead() && a.gd.team != t.gd.team)
									if (a.job == s.EnumJob.tower) Math.abs(a.x - t.x) < t.gd.GetScanRange() && (e = a)
							}
						t.aiData.disX = Math.abs(e.x - t.x), t.aiData.disY = Math.abs(e.y - t.y), e.job == s.EnumJob.roadblock && (t.aiData.disY = 0), t.IsCloser(t) ? t.aiData.atkRange = t.atkRange * t.scaleX : t.aiData.atkRange = t.atkRange, t.aiData.sklRange = t.sklRange * t.scaleX, t.CanCastSkill() ? (t.aiData.isBlocking = !1, t.aiData.atkTarget = e, t.aiData.sklCD = t.gd.GetSklCD(), t.aiData.nextState = l.AIState.Skl) : t.CanAttack(e, .8, !0) && t.EnoughClose(e) ? (t.aiData.atkCD = t.gd.GetAtkCD(), t.aiData.isBlocking = !1, t.aiData.atkTarget = e, t.aiData.nextState = l.AIState.Atk) : t.CanCloseToTarget(e) && t.aiData.isCloser ? (t.moveDest = t.AI_CalcCloseAttackPos(e, t.aiData.atkRange), t.moveDest.x == t.x && t.moveDest.y == t.y || t.SetMoveNext()) : t.aiData.isCloser ? (t.moveDest = t.GetAttackPos(), t.moveDest.x == t.x && t.moveDest.y == t.y || t.SetMoveNext()) : (t.aiData.atkTarget = e, t.moveDest = t.AI_CalcFarAttackPos(e, t.aiData.atkRange), t.LookUnit(e), t.moveDest.x == t.x && t.moveDest.y == t.y || (t.aiData.nextState = l.AIState.Move))
					}
					t.moveDest.x == t.x && t.moveDest.y == t.y && t.aiData.nextState == l.AIState.Move && (t.aiData.nextState = l.AIState.Stand, t.aiData.fallBack = !1), t.aiData.moveCD -= n.default.GetGameFPS(), t.aiData.nextState == l.AIState.Move && t.aiData.moveCD > 0 && (t.aiData.nextState = t.sm.curState), (t.aiData.nextState != t.sm.curState || t.aiData.needBlockAction || t.aiData.needDrawAction) && t.ChangeState(t.aiData.nextState)
				}, e.prototype.UpdateAIModeChange = function() {
					this.aiData.aiMode != u.default.aiMode[this.gd.team] && (this._delayChangeMode -= n.default.GetGameFPS(), this._delayChangeMode <= 0 && (this.aiData.aiMode = u.default.aiMode[this.gd.team], this._delayChangeMode = Math.abs(this.formationPos.x + 1 + this.formationPos.y) * r.GameUtil.RandomRange(.01, .05), this.aiData.fallBack = !1, this.ChangeState(l.AIState.Thinking)))
				}, e.prototype.SetMoveNext = function() {
					this.aiData.moveCD <= 0 && (this.aiData.nextState = l.AIState.Move)
				}, e.prototype.AI_CalcFarAttackPos = function(t, e) {
					var i = this,
						o = new r.Vector2(0, 0),
						a = i.x,
						n = (i.y, t.x),
						s = t.y;
					return Math.abs(a - n) < e ? o.SetXY(i.x, i.y) : (o.SetXY(n - a, 0), o.normalization(), o.SetXY(n - o.x * e, s)), o.y = i.y, o
				}, e.prototype.AI_CalcCloseAttackPos = function(t, e) {
					var i = this,
						o = new r.Vector2(0, 0),
						a = i.x,
						n = i.y,
						l = t.x,
						c = t.y,
						u = e * i.scaleX * .5,
						d = new r.Vector2(l - a, c - n);
					return d.y = 0, d.normalization(), d.mul(i.scaleX), o.x = l - d.x * u, o.y = c, t.job == s.EnumJob.roadblock ? (c = n, d.SetXY(l - a, c - n), d.normalization(), o.x = l - d.x * u, o.y = n) : t.job == s.EnumJob.miner ? o.x = l - .1 * d.x : i.formationPos.y > t.formationPos.y ? o.y += 1 : i.formationPos.y < t.formationPos.y && (o.y -= 1), o
				}, e.prototype.EnoughClose = function(t) {
					if (null == t) return !1;
					if (t.job == s.EnumJob.miner) {
						var e = Math.abs(this.x - t.x),
							i = Math.abs(this.y - t.y);
						return e <= 5e3 && i <= 1200
					}
					return !0
				}, e.prototype.IsFrontRight = function() {
					return !this.IsFlipX()
				}, e.prototype.IsFrontLeft = function() {
					return this.IsFlipX()
				}, e.prototype.BeStrikeFly = function(t, e) {
					null != this.sm && this.sm.curState != l.AIState.Die && (0 == t && (t = this.IsFlipX() ? 1 : -1), 0 == t && (e = 1), this.PushIt(t, e), this.canBePush && this.ChangeState(l.AIState.HitFly))
				}, e.prototype.BeHealth = function(t, e) {
					var i = this;
					i.gd.hp += e, i.title.SetHP(i.gd.hp, i.gd.team), u.default.gb.ui.PopText("+" + e.toFixed(0), i.x, i.y + 150, cc.Color.GREEN, !0), h.default.CreateEff(8, i.parent, i.x, i.y)
				}, e.prototype.GetClosestTarget = function() {
					for (var t = this, e = 9999, i = null, o = t.atkRange * t.scaleX, a = 0; a < u.default.gb.units.length; a++) {
						var n = u.default.gb.units[a];
						if (n.gd.team != t.gd.team) {
							if (n.job == s.EnumJob.roadblock);
							else if (Math.abs(n.y - t.y) > t.shootRangeY) continue;
							var r = Math.abs(n.x - t.x);
							r > o || r < e && (e = r, i = n)
						}
					}
					t.aiData.atkRange = o, t.aiData.disY = 0, t.aiData.disX = e, t.aiData.atkTarget = i
				}, e.prototype.CanAttack = function(t, e, i) {
					void 0 === t && (t = null), void 0 === e && (e = 1), void 0 === i && (i = !1);
					var o = this;
					if (null != o) {
						if (null != t && null != t.node || (t = o.aiData.atkTarget), null == t || null == t.node) return !1;
						if (i && o.aiData.atkCD > 0) return !1;
						o.aiData.disX = Math.abs(o.x - t.x), o.aiData.disY = Math.abs(o.y - t.y), t.job == s.EnumJob.tower ? o.aiData.atkRange += .5 : t.job == s.EnumJob.roadblock && (o.aiData.disY = 0, o.aiData.atkRange += 1), o.IsCloser(o) || (e = 1);
						var a = o.aiData.atkRange * e;
						return o.aiData.disY < o.shootRangeY && o.aiData.disX <= a
					}
				}, e.prototype.CanCloseToTarget = function(t) {
					return t.job == s.EnumJob.roadblock || (t.job == s.EnumJob.tower || (t.job == s.EnumJob.gaint && this.formationPos.x < 3 || this.formationPos.x < 1))
				}, e.prototype.CanCastSkill = function() {
					return !1
				}, e.prototype.CanCastSkillNoTarget = function() {
					return !1
				}, e.prototype.AI_CloseScan = function() {
					var t = this;
					if (!t.IsInBattleArea(t) && t.job != s.EnumJob.towerarcher) return null;
					for (var e = null, i = t.x, o = t.y, a = 0, n = 0; n < u.default.gb.units.length; n++) {
						var r = u.default.gb.units[n];
						if (!t.IsOutIdleSize(r) && t.IsInBattleArea(r)) {
							if (r.job == s.EnumJob.roadblock && 1 == t.gd.team && Math.abs(t.x - r.x) < t.gd.GetScanRange()) return r;
							if (r.job != s.EnumJob.miner && r.job != s.EnumJob.tower && r.gd.team != t.gd.team && !r.IsDead()) {
								var l = r.x,
									c = r.y;
								(d = Math.abs(i - l)) > t.gd.GetScanRange() || (d += Math.abs(c - o), r.formationPos.y != t.formationPos.y && r.job != s.EnumJob.roadblock || (d -= 500), (d < a || null == e) && (e = r, a = d))
							}
						}
					}
					if (null == e)
						for (n = 0; n < u.default.gb.units.length; n++) {
							r = u.default.gb.units[n];
							if (!t.IsOutIdleSize(r) && (t.IsInBattleArea(r) && r.job == s.EnumJob.miner)) {
								if (r.gd.team == t.gd.team || r.IsDead()) continue;
								l = r.x, c = r.y;
								if ((d = Math.abs(i - l)) > t.gd.GetScanRange()) continue;
								((d += Math.abs(c - o)) < a || null == e) && (e = r, a = d)
							}
						}
					if (null == e)
						for (n = 0; n < u.default.gb.units.length; n++) {
							r = u.default.gb.units[n];
							if (!t.IsOutIdleSize(r) && (t.IsInBattleArea(r) && r.job == s.EnumJob.tower)) {
								if (r.gd.team == t.gd.team || r.IsDead()) continue;
								var d;
								l = r.x, c = r.y;
								if ((d = Math.abs(i - l)) > t.gd.GetScanRange()) continue;
								((d += Math.abs(c - o)) < a || null == e) && (e = r, a = d)
							}
						}
					return e
				}, e.prototype.AI_FarScan = function() {
					var t = this;
					if (!t.IsInBattleArea(t) && t.job != s.EnumJob.towerarcher) return null;
					for (var e = null, i = t.x, o = t.y, a = 0, n = 0; n < u.default.gb.units.length; n++) {
						var r = u.default.gb.units[n];
						if (!t.IsOutIdleSize(r) && t.IsInBattleArea(r)) {
							if (r.job == s.EnumJob.roadblock && 1 == t.gd.team && Math.abs(t.x - r.x) < t.gd.GetScanRange()) return r;
							if (r.gd.team != t.gd.team && !(r.gd.hp <= 0)) {
								var l = r.x,
									c = r.y,
									d = Math.abs(i - l);
								d > t.gd.GetScanRange() || (d += 300 * Math.abs(c - o), r == t.aiData.atkTarget && (d -= 100), (d < a || null == e) && (e = r, a = d))
							}
						}
					}
					return e
				}, e.prototype.CanThinking = function() {
					if (this.buff_shutdown > 0) return !1;
					switch (this.sm.curState) {
						case l.AIState.Atk:
						case l.AIState.Skl:
						case l.AIState.Die:
						case l.AIState.HitFly:
						case l.AIState.StandUp:
						case l.AIState.StandUpUnderFloor:
							return !1
					}
					return !0
				}, e.prototype.OnClick = function() {
					e.enableControlUnit && u.default.gb.ui.playerPad.Control_Unit(this)
				}, e.prototype.UpdateEvent = function(t, e) {
					if (this.node && e && e.data) switch (e.data.name) {
						case "Sound":
							var i = u.default.gb.GetEffVolume(this.node.x);
							m.default.PlaySoundBySoundString(e.stringValue, i);
							break;
						case "Mine":
							if (this.sd.job == s.EnumJob.sparda && "Spearton-Throw" == t) break;
							i = u.default.gb.GetEffVolume(this.node.x);
							m.default.PlaySoundByAction(t.animation.name, i);
							break;
						case "Hit":
							if (this.sd.job == s.EnumJob.gaint || this.sd.job == s.EnumJob.archer || this.sd.job == s.EnumJob.mage || this.sd.job == s.EnumJob.meric) {
								i = u.default.gb.GetEffVolume(this.node.x);
								m.default.PlaySoundByAction(t.animation.name, i)
							}
							if (this.sd.job == s.EnumJob.sparda && "Spearton-Throw" == t) {
								i = u.default.gb.GetEffVolume(this.node.x);
								m.default.PlaySoundByAction(t.animation.name, i)
							}
							break;
						case "hit":
							if (this.sd.job == s.EnumJob.meric) {
								i = u.default.gb.GetEffVolume(this.node.x);
								m.default.PlaySoundByAction(t.animation.name, i)
							}
					}
				}, e.prototype.OnAnimEnd = function(t) {
					var e = this;
					switch (this.showDebug && console.log(t.animation.name), e.sm.curState) {
						case l.AIState.Skl:
						case l.AIState.Atk:
						case l.AIState.StandUp:
						case l.AIState.StandUpUnderFloor:
							e.lockUserControl = !1, e.IsControlByUser() ? (this.prevAnimName = null, this.prevAnimName2 = null, this.anim.clearTracks(), e.ChangeState(l.AIState.Stand), e.aiData.isBlocking || e.PlayAnim(e.aiData.animStand)) : (this.prevAnimName = null, this.prevAnimName2 = null, this.anim.clearTracks(), e.ChangeState(l.AIState.Thinking));
							break;
						case l.AIState.Die:
							t.animation.name != this.aiData.animDeath && t.animation.name != this.aiData.animDeath_ArrowL && t.animation.name != this.aiData.animDeath_ArrowR && t.animation.name != this.aiData.animDeath_SpearL && t.animation.name != this.aiData.animDeath_SpearR || e.DeleteObject();
							break;
						case l.AIState.HitFly:
							e.hitFlyEnd = !0, e.IsDead() && e.Die()
					}
				}, e.SetupAnim = function(t, e, i, o, a, r) {
					void 0 === o && (o = null), void 0 === a && (a = n.default.curMode), void 0 === r && (r = !1);
					for (var l = this.slotJobSkills[e], c = [], u = 0; u < l.length; u++) c.push(this.GetUnitLvByMode(l[u], a));
					for (u = 0; u < l.length; u++) {
						var d = l[u],
							h = c[u];
						switch (d) {
							case s.EnumSkill.Gaint_body:
								var p = .7 + .1 * h;
								t.node.scaleX = t.node.scaleX > 0 ? p : -p, t.node.scaleY = p;
								break;
							case s.EnumSkill.Tower_hp:
								p = 1 + .1 * h;
								o.scaleX = o.scaleX > 0 ? p : -p, o.scaleY = p;
								break;
							case s.EnumSkill.Tower_money:
								var f = h - 1;
								for (u = 0; u < 4; u++) o.children[0].children[u].active = u == f
						}
						if (i && 0 == i.team || r) {
							var m = this.slotNames[d],
								v = this.slotLvs[d];
							h >= v.length && (h = v.length - 1);
							var y = v[h];
							null == o && (e == s.EnumJob.gaint ? (this.SetupAnimByPlayerSkins(e, h, t, "weapon", this.slotLvs[11][h]), this.SetupAnimByPlayerSkins(e, h, t, "giant-helm", this.slotLvs[12][h])) : m && this.SetupAnimByPlayerSkins(e, h, t, m, y))
						}
						if (i && 1 == i.team) {
							var g = n.default.allSeeds.units[i.sdId];
							this.SetupUnitSkin(e, g.skinName, t)
						}
					}
				}, e.prototype.AIState2String = function(t) {
					switch (t) {
						case l.AIState.Thinking:
							return "\u601d\u8003";
						case l.AIState.Stand:
							return "\u7ad9\u7acb";
						case l.AIState.Atk:
							return "\u653b\u51fb";
						case l.AIState.Move:
							return "\u79fb\u52a8";
						case l.AIState.Skl:
							return "\u6280\u80fd";
						case l.AIState.Die:
							return "\u6b7b\u4ea1";
						case l.AIState.DrawBow:
							return "\u62c9\u5f13";
						case l.AIState.DrawBowHold:
							return "\u62c9\u5f13_Hold";
						case l.AIState.Reload:
							return "\u88c5\u5f39";
						case l.AIState.HitFly:
							return "\u51fb\u98de";
						case l.AIState.StandUp:
							return "\u722c\u8d77\u6765";
						case l.AIState.StandUpUnderFloor:
							return "\u4ece\u5730\u4e0b\u722c\u51fa\u6765"
					}
				}, e.GetUnitLvByMode = function(t, e) {
					var i = null,
						o = null;
					switch (e) {
						case s.\u6a21\u5f0f.\u6545\u4e8b:
							o = n.default.role.story.JobLvUp;
							break;
						case s.\u6a21\u5f0f.\u50f5\u5c38:
							o = n.default.role.endless.JobLvUp;
							break;
						case s.\u6a21\u5f0f.\u6bd4\u8d5b:
							o = n.default.role.match.JobLvUp
					}
					return (i = o[t]) || (i = 0), i
				}, e.SetupAnimByPlayerSkins = function(t, e, i, o, a, r) {
					void 0 === r && (r = !1);
					var s = n.default.role.playerSkins.GetJobSkin(t);
					if (s > 0 && t <= 6 && !r) f.default.SetupAnimByJobLv(t, s, i, o, e);
					else {
						var l = i.findSlot(o);
						if (a && "none" != a) {
							var c = i.skeletonData.getRuntimeData(),
								u = c.defaultSkin,
								d = c.findSlotIndex(o),
								h = u.getAttachment(d, a);
							if (!l || !h) return void cc.error(l && h, "slots: " + o + ", attach: " + a + " not exists!");
							l.setAttachment(h)
						} else a || l.setAttachment(null)
					}
				}, e.SetupUnitSkin = function(t, e, i) {
					if ("" != e) switch (t) {
						case 1:
							switch (e) {
								case "leaf":
									this.SetupAnimByPlayerSkins(t, 0, i, "weapon", "upgrades/" + e + "pick", !0);
									break;
								case "gold":
									this.SetupAnimByPlayerSkins(t, 0, i, "weapon", "upgrades/miner" + e + "pick", !0)
							}
							this.SetupAnimByPlayerSkins(t, 0, i, "bag", "upgrades/miner" + e + "bag", !0);
							break;
						case 2:
							switch (e) {
								case "leaf":
									this.SetupAnimByPlayerSkins(t, 0, i, "weapon", "upgrades/speartan" + e + "sword", !0);
									break;
								default:
									this.SetupAnimByPlayerSkins(t, 0, i, "weapon", "upgrades/" + e + "sword", !0)
							}
							switch (e) {
								case "native":
									this.SetupAnimByPlayerSkins(t, 0, i, "helm", "upgrades/" + e + "helm", !0);
									break;
								default:
									this.SetupAnimByPlayerSkins(t, 0, i, "helm", "upgrades/sword" + e + "helm", !0)
							}
							break;
						case 3:
							this.SetupAnimByPlayerSkins(t, 0, i, "Quiver1", "upgrades/archidon" + e + "quiver", !0), this.SetupAnimByPlayerSkins(t, 0, i, "helm", "upgrades/archidon" + e + "helm", !0);
							break;
						case 4:
							this.SetupAnimByPlayerSkins(t, 0, i, "weapon", "upgrades/speartan" + e + "spear", !0), this.SetupAnimByPlayerSkins(t, 0, i, "helm", "upgrades/speartan" + e + "helm", !0), this.SetupAnimByPlayerSkins(t, 0, i, "Arrow1", "upgrades/speartan" + e + "shield", !0);
							break;
						case 5:
							this.SetupAnimByPlayerSkins(t, 0, i, "weapon", "upgrades/magikill" + e + "staff", !0), this.SetupAnimByPlayerSkins(t, 0, i, "helm", "upgrades/magikill" + e + "hat", !0);
							break;
						default:
							return
					}
				}, e.SkillPower = 1, e.LeftX = 0, e.RightX = 0, e.enableControlUnit = !0, e.slotJobSkills = {
					1: [s.EnumSkill.Miner_weapon, s.EnumSkill.Miner_bag],
					2: [s.EnumSkill.Swordman_head, s.EnumSkill.Swordman_sword],
					3: [s.EnumSkill.Archer_bow],
					4: [s.EnumSkill.Sparda_head, s.EnumSkill.Sparda_shield, s.EnumSkill.Sparda_spear],
					5: [s.EnumSkill.Mage_head, s.EnumSkill.Mage_weapon],
					6: [s.EnumSkill.Gaint_body],
					7: [],
					8: [s.EnumSkill.Tower_hp, s.EnumSkill.Tower_money],
					9: [],
					10: [],
					11: [],
					12: [],
					13: [],
					14: [],
					15: [],
					16: [],
					17: [],
					18: [],
					19: [],
					20: [s.EnumSkill.Tower_archer]
				}, e.slotNames = {
					1: "weapon",
					2: "bag",
					3: "weapon",
					4: "helm",
					5: "Quiver1",
					6: "helm",
					7: "Arrow1",
					8: "weapon",
					9: "weapon",
					10: "helm",
					11: "weapon",
					12: "giant-helm",
					13: "helm",
					14: null,
					15: null
				}, e.slotLvs = {
					1: ["none", "upgrades/miner1", "upgrades/miner2", "upgrades/miner3"],
					2: ["none", "upgrades/minerbag1", "upgrades/minerbag2", "upgrades/minerbag3"],
					3: ["none", "upgrades/Sword1", "upgrades/Sword2", "upgrades/Sword3"],
					4: ["none", "upgrades/swordhelm1", "upgrades/swordhelm2", "upgrades/swordhelm3"],
					5: ["none", "upgrades/archidonquiver1", "upgrades/archidonquiver2", "upgrades/archidonquiver3"],
					6: ["none", "classic-spearton-helm-1", "classic-spearton-helm-2", "classic-spearton-helm-3"],
					7: ["none", "classic-spearton-shield-1", "classic-spearton-shield-2", "classic-spearton-shield-3"],
					8: ["none", "classic-spearton-spear-1", "classic-spearton-spear-2", "classic-spearton-spear-3"],
					9: ["none", "upgrades/magikillstaff1", "upgrades/magikillstaff2", "upgrades/magikillstaff3"],
					10: ["none", "upgrades/magikillhat1", "upgrades/magikillhat2", "upgrades/magikillhat3"],
					11: ["pickaxe", "upgrades/giant1", "upgrades/giant2", "upgrades/giant3"],
					12: [null, null, null, null],
					13: ["upgrades/castlearcherhelm1", "upgrades/castlearcherhelm1", "upgrades/castlearcherhelm2", "upgrades/castlearcherhelm3"],
					14: ["none"],
					15: ["none"]
				}, e
			}(a.default);
		i.default = v, cc._RF.pop()
	}, {
		"../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../CCScripts/UIUnitTitle": "UIUnitTitle",
		"../../UI/Shop/UISkinShop": "UISkinShop",
		"../Common/GAudio": "GAudio",
		"../Common/GSpritesData": "GSpritesData",
		"../Common/GameUtil": "GameUtil",
		"../Common/SimpleStateMachine": "SimpleStateMachine",
		"../Data/GEnums": "GEnums",
		"../GBattle/AIData": "AIData",
		"../GBattle/GBattle": "GBattle",
		"../MainData": "MainData",
		"./GActor": "GActor"
	}],
	GUpgradeBox: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "9357cfd0mlMsoe7ugRoJRmn", "GUpgradeBox");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.onSelEff = null, e.onSel = null, e.nodeMax = null, e.fill = null, e
				}
				return o(e, t), e.prototype.Setup = function(t) {
					this.jobId = t;
					var e = n.default.allSeeds.joblvups[t - 1].maxLv,
						i = n.default.GetSkillLv(t, n.default.curMode),
						o = i / e;
					this.fill.height = 40 * o, this.nodeMax.active = i >= e, this.fill.active = !this.nodeMax.active
				}, e.prototype.SetSelect = function(t) {
					this.onSel.active = t
				}, e.prototype.BTN_OnClick = function() {
					this.ui.SelectBox(this)
				}, a([l(cc.Node)], e.prototype, "onSelEff", void 0), a([l(cc.Node)], e.prototype, "onSel", void 0), a([l(cc.Node)], e.prototype, "nodeMax", void 0), a([l(cc.Node)], e.prototype, "fill", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../Game/MainData": "MainData"
	}],
	GWizard: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "6f9c0qaom1G4IWlI+pttsk9", "GWizard");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("./GRoadblock"),
			l = t("../../Data/GEnums"),
			c = t("../../Common/GameUtil"),
			u = t("../AIData"),
			d = t("../../MainData"),
			h = function(t) {
				function e(e) {
					var i = t.call(this, n.default.manager.GetPrefabByJob(l.EnumJob.mage)) || this;
					return i.sumList = [], i.maxSumCount = 2, i.job = l.EnumJob.mage, e ? i.anim.setSkin("Magikill_Red") : i.anim.setSkin("Magikill"), i
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Magikill-Stand", i.aiData.animRun = "Magikill-Walk", i.aiData.animWalk = "Magikill-Walk", i.aiData.canBlock = !1, i.aiData.isCloser = !1, i.atkRange = 200, i.shootRangeY = 2e3, a.default.SetupAnim(this.anim, l.EnumJob.mage, e), i.EquipSkill()
				}, e.prototype.EquipSkill = function() {
					t.prototype.EquipSkill.call(this);
					var e = this.GetUnitLv(l.EnumSkill.Mage_head) * a.default.SkillPower;
					this.maxSumCount = 2 + e;
					var i = this.GetUnitLv(l.EnumSkill.Mage_weapon) * a.default.SkillPower;
					this.gd.atkPlus = Math.floor(this.gd.GetATK() * i * .15)
				}, e.prototype.CanCastSkillNoTarget = function() {
					var t = this;
					if (r.default.gb.sumSummon >= 32) return !1;
					for (var e = t.sumList.length - 1; e >= 0; e--)(null == t.sumList[e] || t.sumList[e].IsDead()) && t.sumList.splice(e, 1);
					return t.aiData.sklCD <= 0 && t.sumList.length < t.maxSumCount
				}, e.prototype.AI_Enter_Skill = function() {
					this.PlayAnim("Magikill-Spell2")
				}, e.prototype.AI_Enter_Atk = function() {
					null != this.aiData.atkTarget && this.LookUnit(this.aiData.atkTarget), this.PlayAnim("Magikill-Spell1", this.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (o.sm.curState == u.AIState.Skl) {
								o.aiData.sklCD = o.gd.GetSklCD();
								var a = d.default.allSeeds.units[l.EnumUnit.unit15];
								(b = r.default.gb.CreateUnit(a, o.gd.team)).x = o.x + (0 == o.gd.team ? 100 : -100), b.y = o.y, o.sumList.push(b);
								var h = (o.IsFlipX() ? -100 : 100) * o.scaleX,
									p = n.default.manager.GetGSummon(this.node.parent);
								p.node.x = o.x + h, p.node.y = o.y + -10, p.spriteAnim.play("Summon", 0), p.spriteAnim.once("finished", function() {
									p.Release2Pool()
								}, this), r.default.gb.sumSummon++
							} else {
								for (var f = 3, m = o.x + (o.IsFlipX() ? -200 : 200), v = o.y, y = 0; y < r.default.gb.units.length; y++) {
									if (!(b = r.default.gb.units[y]).IsDead())
										if (b.gd.team != o.gd.team) c.Vector2.Distance(o.x, o.y, b.x, b.y) < 5 && (m = b.x, v = b.y + 75), b instanceof s.default && (v = o.y)
								}
								var g = n.default.manager.GetGMageAtk(this.node.parent);
								g.node.x = m, g.node.y = v, g.spriteAnim.play("MageAtk", 0), g.spriteAnim.once("finished", function() {
									g.Release2Pool()
								}, this);
								for (y = 0; y < r.default.gb.units.length; y++) {
									var b;
									if (!(b = r.default.gb.units[y]).IsDead() && b.gd.team != o.gd.team) {
										var _ = b.y;
										if (b instanceof s.default && (_ = v), !(c.Vector2.Distance(m, v, b.x, _) > 125)) {
											var S = b.x - o.x,
												w = b.y - o.y,
												D = Math.sqrt(Math.pow(S, 2) + Math.pow(w, 2));
											S /= D, w /= D;
											var G = r.default.gb.GetItemDuration(l.EnumItem.i2) > 0 ? 2 : 1,
												k = o.gd.GetATK() * G;
											if (b.Behurt(this, k, o.x, o.y, o.IsFlipX()), b.IsDead() || b.BeStrikeFly(2 * S, 2 * w), --f <= 0) break
										}
									}
								}
							}
					}
				}, e.prototype.UserControlUpdate = function() {
					var t = this,
						e = r.default.gb,
						i = e.ui.playerPad;
					t.aiData.atkTarget = null;
					for (var o = 0; o < e.units.length; o++) {
						var a = e.units[o];
						if (0 != a.gd.team && !a.IsDead() && t.CanAttack(a)) {
							t.aiData.atkTarget = a;
							break
						}
					}
					i.UpdateButtonCD(i.btnStun, t.aiData.atkCD / t.gd.GetAtkCD()), i.UpdateButtonCD(i.btnSummon, t.aiData.sklCD / t.gd.GetSklCD())
				}, e.prototype.User_Atk = function() {
					var t = this;
					if (t.StateEnableUserControl() && !(t.aiData.atkCD > 0)) {
						t.lockUserControl = !0, t.aiData.isBlocking = !1, t.aiData.atkCD = t.gd.GetAtkCD();
						t.PlayAnim("Magikill-Spell1", t.gd.GetAtkSpd()), t.ChangeState(u.AIState.Atk)
					}
				}, e.prototype.User_Skill = function() {
					var t = this;
					t.StateEnableUserControl() && t.CanCastSkillNoTarget() && (t.aiData.sklCD > 0 || (t.aiData.sklCD = t.gd.GetSklCD(), t.lockUserControl = !0, t.aiData.isBlocking = !1, t.PlayAnim("Magikill-Spell2", 1), t.ChangeState(u.AIState.Skl)))
				}, e
			}(a.default);
		i.default = h, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../../MainData": "MainData",
		"../AIData": "AIData",
		"../GBattle": "GBattle",
		"./GRoadblock": "GRoadblock"
	}],
	GZombie_Dog: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "41da9aB2UxO4ok1m9YOXtfe", "GZombie_Dog");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../Units/GRoadblock"),
			l = t("../Units/GArcher"),
			c = t("../Units/GWizard"),
			u = t("../Units/GMiner"),
			d = t("../Units/GTower"),
			h = t("../../Common/GameUtil"),
			p = t("../../Data/GEnums"),
			f = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(p.EnumJob.zombie_dog)) || this;
					return e.job = p.EnumJob.zombie_dog, e.anim.setSkin("Zombie-Grey"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Zombie-Stand", i.aiData.animRun = "Zombie-Pounce-Walk", i.aiData.animWalk = "Zombie-Pounce-Walk", i.aiData.animDeath = (h.GameUtil.RandomRange(0, 100), "Zombie-Death1"), i.aiData.animStrikeFly = "Zombie-Generic-Fall-Flip", i.aiData.canBlock = !1, i.aiData.isCloser = !0
				}, e.prototype.AI_CloseScan = function() {
					var t = this;
					if (!t.IsInBattleArea(t)) return null;
					for (var e = null, i = t.x, o = t.y, a = 999999, n = 0; n < r.default.gb.units.length; n++) {
						var h = r.default.gb.units[n];
						if (t.IsInBattleArea(h)) {
							if (h instanceof s.default) return h;
							if (h.gd.team != t.gd.team && !h.IsDead()) {
								var p = h.x,
									f = h.y;
								(m = Math.abs(i - p)) > t.gd.GetScanRange() || (m += Math.abs(f - o), h.formationPos.y == t.formationPos.y && (m -= 500), (h instanceof l.default || h instanceof c.default) && (m -= 2e3), h instanceof u.default && (m -= 1e3), (m < a || null == e) && (e = h, a = m))
							}
						}
					}
					if (null == e)
						for (n = 0; n < r.default.gb.units.length; n++) {
							h = r.default.gb.units[n];
							if (t.IsInBattleArea(h) && h instanceof u.default) {
								if (h.gd.team == t.gd.team || h.IsDead()) continue;
								p = h.x, f = h.y;
								if ((m = Math.abs(i - p)) > t.gd.GetScanRange()) continue;
								((m += Math.abs(f - o)) < a || null == e) && (e = h, a = m)
							}
						}
					if (null == e)
						for (n = 0; n < r.default.gb.units.length; n++) {
							h = r.default.gb.units[n];
							if (t.IsInBattleArea(h) && h instanceof d.default) {
								if (h.gd.team == t.gd.team || h.IsDead()) continue;
								var m;
								p = h.x, f = h.y;
								if ((m = Math.abs(i - p)) > t.gd.GetScanRange()) continue;
								((m += Math.abs(f - o)) < a || null == e) && (e = h, a = m)
							}
						}
					return e
				}, e.prototype.AI_Enter_Atk = function() {
					this.LookUnit(this.aiData.atkTarget);
					var t = h.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Attack1" : "Zombie-Attack2";
					this.PlayAnim(t, this.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								o.aiData.atkTarget.Behurt(o, a, o.x, o.y, o.IsFlipX())
							}
					}
				}, e
			}(a.default);
		i.default = f, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../GBattle": "GBattle",
		"../Units/GArcher": "GArcher",
		"../Units/GMiner": "GMiner",
		"../Units/GRoadblock": "GRoadblock",
		"../Units/GTower": "GTower",
		"../Units/GWizard": "GWizard"
	}],
	GZombie_Gaint2: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "69414wQuyVBHLO5XwVjhUn3", "GZombie_Gaint2");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../../Common/GameUtil"),
			l = t("../../Data/GEnums"),
			c = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(l.EnumJob.zombie_gaint2)) || this;
					return e.atkDis = 150, e.job = l.EnumJob.zombie_gaint2, e.anim.setSkin("Giant"), e.node.scaleX = 2, e.node.scaleY = 2, e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Giant-Stand", i.aiData.animRun = "Giant-Walk", i.aiData.animWalk = "Giant-Walk", i.aiData.canBlock = !1, i.aiData.isCloser = !0, i.atkRange = 3, i.friction *= 5
				}, e.prototype.Behurt = function(e, i, o, a, n, l, c) {
					void 0 === c && (c = 1);
					this.IsBlocking() && s.GameUtil.RandomRange(0, 100) <= 25 ? r.default.gb.ui.PopText("\u683c\u6321", this.x, this.y - 150, cc.Color.WHITE, !0) : t.prototype.Behurt.call(this, e, i, o, a, n, l, c)
				}, e.prototype.BeStrikeFly = function(t, e, i) {
					void 0 === i && (i = 0), this.PushIt(t, 0)
				}, e.prototype.CanCastSkill = function() {
					return !1
				}, e.prototype.CheckHeadShot = function(t, e) {
					return !1
				}, e.prototype.AI_Enter_Atk = function() {
					var t = s.GameUtil.RandomRange(0, 100) < 50,
						e = t ? "Giant-Attack" : "Giant-Attack2";
					this.atkDis = t ? 200 : 150, this.PlayAnim(e, this.gd.GetAtkSpd()), null != this.aiData.atkTarget && this.LookUnit(this.aiData.atkTarget)
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								o.aiData.atkTarget.Behurt(o, a, o.x, o.y, o.IsFlipX())
							}
					}
				}, e
			}(a.default);
		i.default = c, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../GBattle": "GBattle"
	}],
	GZombie_Gaint: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "61040KsvrZBfbPz1/3Z244Y", "GZombie_Gaint");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Common/GameUtil"),
			s = t("../../Data/GEnums"),
			l = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(s.EnumJob.zombie_gaint)) || this;
					return e.job = s.EnumJob.zombie_gaint, e.anim.setSkin("Zombie"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Zombie-Stand", i.aiData.animRun = "Zombie-Walk", i.aiData.animWalk = "Zombie-Walk", i.aiData.animDeath = r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Death1" : "Zombie-Death2", i.aiData.animStrikeFly = "Zombie-Generic-Fall", i.aiData.canBlock = !1, i.aiData.isCloser = !0, i.atkRange = 3, i.friction *= 5
				}, e.prototype.BeStrikeFly = function(t, e, i) {
					void 0 === i && (i = 0), this.PushIt(t, 0)
				}, e.prototype.CanCastSkill = function() {
					return !1
				}, e.prototype.CheckHeadShot = function(t, e) {
					return !1
				}, e.prototype.AI_Enter_Atk = function() {
					var t = this,
						e = "";
					e = "Zombie-Stand" == t.aiData.animStand ? r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Attack1" : "Zombie-Attack2" : r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Crawler-Attack1" : "Zombie-Crawler-Attack2", t.LookUnit(t.aiData.atkTarget), t.PlayAnim(e, t.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								o.aiData.atkTarget.Behurt(o, a, o.x, o.y, o.IsFlipX())
							}
					}
				}, e
			}(a.default);
		i.default = l, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums"
	}],
	GZombie_Poison: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "48906zySNVAmrrHxe1O0QTC", "GZombie_Poison");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../Items/GArrow"),
			s = t("../Units/GRoadblock"),
			l = t("../../Common/GameUtil"),
			c = t("../../Data/GEnums"),
			u = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(c.EnumJob.zombie_poison)) || this;
					return e.predis = 6, e.job = c.EnumJob.zombie_poison, e.anim.setSkin("Zombie-Green"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Zombie-Stand", i.aiData.animRun = "Zombie-Walk", i.aiData.animWalk = "Zombie-Walk", i.aiData.animDeath = l.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Death1" : "Zombie-Death2", i.aiData.animStrikeFly = "Zombie-Generic-Fall", i.aiData.animDeath_ArrowL = "Zombie-Headshot", i.aiData.animDeath_ArrowR = "Zombie-Headshot-Forward", i.aiData.animDeath_SpearL = "Zombie-Headshot_Spearton", i.aiData.animDeath_SpearR = "Zombie-Headshot-Forward_Spearton", i.aiData.canBlock = !1, i.aiData.isCloser = !1, i.atkRange = 1500
				}, e.prototype.AI_Enter_Atk = function() {
					this.LookUnit(this.aiData.atkTarget), this.PlayAnim("Zombie-Attack1", this.gd.GetAtkSpd())
				}, e.prototype.Shoot = function() {
					var t = this;
					if (null != t.aiData.atkTarget) {
						var e = t.IsFlipX() == t.aiData.atkTarget.IsFlipX() ? 2 * t.predis : t.predis,
							i = new l.Vector2(0, 0).addVec2(t.aiData.atkTarget.prevPos).addXY(-t.aiData.atkTarget.x, -t.aiData.atkTarget.y).normalization().mul(Math.abs(this.x - t.aiData.atkTarget.x) / e).x * t.aiData.atkTarget.scaleX;
						Math.abs(t.x - t.aiData.atkTarget.x) < 500 && (i = 0);
						new l.Vector2(this.x, this.y - 116 * t.aiData.atkTarget.scaleX);
						var o = new l.Vector2(t.aiData.atkTarget.x + i, t.aiData.atkTarget.y),
							a = r.default.GetGGut(),
							n = t.aiData.atkTarget.y;
						t.aiData.atkTarget instanceof s.default && (n = this.y, o.y = n), a.Setup(this, t.aiData.atkTarget)
					}
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					switch (i.data.name) {
						case "Hit":
							this.Shoot()
					}
				}, e
			}(a.default);
		i.default = u, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../Items/GArrow": "GArrow",
		"../Units/GRoadblock": "GRoadblock"
	}],
	GZombie_Sparda: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "5d616SENhRGL7L3pUEQojvf", "GZombie_Sparda");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../../Data/GEnums"),
			l = t("../../Common/GameUtil"),
			c = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(s.EnumJob.zombie_sparda)) || this;
					return e.job = s.EnumJob.zombie_sparda, e.anim.setSkin("Zombie-Spearton"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Zombie-Spearton-Stand", i.aiData.animRun = l.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Walk" : "Zombie-Walk2", i.aiData.animWalk = l.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Walk" : "Zombie-Walk2", i.aiData.animDeath = l.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Death1" : "Zombie-Death2", i.aiData.animStrikeFly = "Zombie-Generic-Fall", i.aiData.canBlock = !1, i.aiData.isCloser = !0
				}, e.prototype.Behurt = function(e, i, o, a, n, s, c) {
					void 0 === c && (c = 1);
					this.IsBlocking() && l.GameUtil.RandomRange(0, 100) <= 25 ? r.default.gb.ui.PopText("\u683c\u6321", this.x, this.y - 150, cc.Color.WHITE, !0) : t.prototype.Behurt.call(this, e, i, o, a, n, s, c)
				}, e.prototype.AI_Enter_Atk = function() {
					this.LookUnit(this.aiData.atkTarget), this.PlayAnim("Zombie-Spearton-Attack1", this.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								o.aiData.atkTarget.Behurt(o, a, o.x, o.y, o.IsFlipX())
							}
					}
				}, e
			}(a.default);
		i.default = c, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../GBattle": "GBattle"
	}],
	GZombie_Underland: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "9421bvQHkpOppxK+AtrlEsh", "GZombie_Underland");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../Units/GTower"),
			l = t("../Units/GRoadblock"),
			c = t("../../Common/GameUtil"),
			u = t("../../Common/GSpritesData"),
			d = t("../../Data/GEnums"),
			h = t("../AIData"),
			p = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(d.EnumJob.zombie_under)) || this;
					return e.job = d.EnumJob.zombie_under, e.anim.setSkin("Zombie-Brown"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					c.GameUtil.RandomRange(0, 100) < 50 ? (i.aiData.animStand = "Zombie-Stand", i.aiData.animRun = "Zombie-Walk", i.aiData.animWalk = "Zombie-Walk", i.aiData.animDeath = (c.GameUtil.RandomRange(0, 100), "Zombie-Death1"), i.aiData.animStrikeFly = "Zombie-Generic-Fall") : (i.aiData.animStand = "Zombie-Idle", i.aiData.animRun = "Zombie-Crawl", i.aiData.animWalk = "Zombie-Crawl", i.aiData.animDeath = "Zombie-Crawl-death", i.aiData.animStrikeFly = "Zombie-Generic-Fall", e.spdPlus = .5 * -i.gd.SPD()), i.aiData.canBlock = !1, i.aiData.isCloser = !0, i.aiData.isZombie = !0, i.sm.Register(i, h.AIState.StandUpUnderFloor, i.AI_Enter_StandUnder, null, null), i.ChangeState(h.AIState.StandUpUnderFloor)
				}, e.prototype.AI_Enter_StandUnder = function() {
					var t = this;
					t.PlayAnim("Zombie-Stand" == t.aiData.animStand ? "Zombie-Rise-Up-Stand" : "Zombie-Rise-Up");
					for (var e = [], i = 0; i < r.default.gb.units.length; i++) {
						var o = r.default.gb.units[i];
						null == o || o.IsDead() || o.gd.team != t.gd.team && (o instanceof s.default || o instanceof l.default || e.push(o))
					}
					e.length <= 0 && e.push(r.default.gb.TowerL);
					var a = Math.floor(c.GameUtil.RandomRange(0, 1e3)) % e.length,
						n = e[a].x,
						d = e[a].y;
					n += c.GameUtil.RandomRange(0, -200), d += c.GameUtil.RandomRange(-100, 100), t.x = n, t.y = d, u.default.CreateEff(12, r.default.gb.gbRoot.gActors, t.x, t.y)
				}, e.prototype.GetStartPos = function() {
					return new c.Vector2(this.x, this.y)
				}, e.prototype.IsArrowHurtMe = function(e) {
					return this.sm.curState != h.AIState.StandUpUnderFloor && t.prototype.IsArrowHurtMe.call(this, e)
				}, e.prototype.AI_CloseScan = function() {
					for (var t = null, e = this, i = e.x, o = e.y, a = 0, n = 0; n < r.default.gb.units.length; n++) {
						var s = r.default.gb.units[n];
						if (e.IsInBattleArea(s) && (s.gd.team != e.gd.team && !(s.gd.hp <= 0))) {
							var l = s.x,
								c = s.y,
								u = Math.abs(i - l);
							u > e.gd.GetScanRange() || (u += 3 * Math.abs(c - o), s == e.aiData.atkTarget && (u -= 100), (u < a || null == t) && (t = s, a = u))
						}
					}
					return t
				}, e.prototype.AI_Enter_HitFly = function() {
					t.prototype.AI_Enter_HitFly.call(this);
					var e = this;
					e.aiData.animStand = "Zombie-Idle", e.aiData.animRun = "Zombie-Crawl", e.aiData.animWalk = "Zombie-Crawl", e.aiData.animDeath = "Zombie-Crawl-death", e.aiData.animStrikeFly = "Zombie-Generic-Fall", e.gd.spdPlus = .5 * -e.gd.SPD()
				}, e.prototype.AI_Enter_Atk = function() {
					var t = this,
						e = "";
					e = "Zombie-Stand" == t.aiData.animStand ? c.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Attack1" : "Zombie-Attack2" : c.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Crawler-Attack1" : "Zombie-Crawler-Attack2", t.LookUnit(t.aiData.atkTarget), t.PlayAnim(e, t.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								o.aiData.atkTarget.Behurt(o, a, o.x, o.y, o.IsFlipX())
							}
					}
				}, e
			}(a.default);
		i.default = p, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GSpritesData": "GSpritesData",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../AIData": "AIData",
		"../GBattle": "GBattle",
		"../Units/GRoadblock": "GRoadblock",
		"../Units/GTower": "GTower"
	}],
	GZombie_Wizard: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "de250HrvVdKBLlEXCP1k7+Q", "GZombie_Wizard");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../GBattle"),
			s = t("../../Common/GameUtil"),
			l = t("../../Common/GSpritesData"),
			c = t("../../Data/GEnums"),
			u = t("../../MainData"),
			d = t("../AIData"),
			h = t("../Items/GArrow"),
			p = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(c.EnumJob.zombie_mage)) || this;
					return e.sumList = [], e.maxSumCount = 5, e.job = c.EnumJob.zombie_mage, e.anim.setSkin("Zombie-Leader"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					i.aiData.animStand = "Zombie-Kai-Stand", i.aiData.animRun = "Zombie-Kai-Walk2", i.aiData.animWalk = "Zombie-Kai-Walk2", i.aiData.animDeath = s.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Death1" : "Zombie-Death2", i.aiData.animStrikeFly = "Zombie-Generic-Fall", i.aiData.canBlock = !1, i.aiData.isCloser = !1, i.aiData.atkRange = 2500
				}, e.prototype.CanCastSkillNoTarget = function() {
					var t = this;
					if (r.default.gb.sumSummon >= 32) return !1;
					for (var e = t.sumList.length - 1; e >= 0; e--)(null == t.sumList[e] || t.sumList[e].IsDead()) && t.sumList.splice(e, 1);
					return t.aiData.sklCD <= 0 && t.sumList.length < t.maxSumCount
				}, e.prototype.AI_Enter_Skill = function() {
					this.PlayAnim("Zombie-Kai-Summon")
				}, e.prototype.AI_Enter_Atk = function() {
					this.LookUnit(this.aiData.atkTarget), this.PlayAnim("Zombie-Attack1", this.gd.GetAtkSpd())
				}, e.prototype.Shoot = function() {
					if (null != this.aiData.atkTarget) {
						var t = h.default.GetGGut();
						t.x = this.x, t.y = this.y - 116, t.Setup(this, this.aiData.atkTarget)
					}
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (o.sm.curState == d.AIState.Skl) {
								o.aiData.sklCD = o.gd.GetSklCD();
								var a = u.default.allSeeds.units[c.EnumUnit.unit46],
									n = r.default.gb.CreateUnit(a, o.gd.team);
								n.x = o.x + (0 == o.gd.team ? 150 : -150), n.y = o.y, o.sumList.push(n), l.default.CreateEff(10, r.default.gb.gbRoot.gActors, n.x, n.y)
							} else null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead() && o.Shoot()
					}
				}, e
			}(a.default);
		i.default = p, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GSpritesData": "GSpritesData",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums",
		"../../MainData": "MainData",
		"../AIData": "AIData",
		"../GBattle": "GBattle",
		"../Items/GArrow": "GArrow"
	}],
	GZombie: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "4f847H5anxNzraZQds1MLMQ", "GZombie");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = t("../../Actor/GUnit"),
			n = t("../../../CCScripts/GPrefabManager"),
			r = t("../../Common/GameUtil"),
			s = t("../../Data/GEnums"),
			l = function(t) {
				function e() {
					var e = t.call(this, n.default.manager.GetPrefabByJob(s.EnumJob.zombie)) || this;
					return e.job = s.EnumJob.zombie, e.anim.setSkin("Zombie"), e
				}
				return o(e, t), e.prototype.InitData = function(e) {
					t.prototype.InitData.call(this, e);
					var i = this;
					r.GameUtil.RandomRange(0, 100) < 50 ? (i.aiData.animStand = "Zombie-Stand", i.aiData.animRun = r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Walk" : "Zombie-Walk2", i.aiData.animWalk = r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Walk" : "Zombie-Walk2", i.aiData.animDeath = (r.GameUtil.RandomRange(0, 100), "Zombie-Death1"), i.aiData.animStrikeFly = "Zombie-Generic-Fall") : (i.aiData.animStand = "Zombie-Idle", i.aiData.animRun = "Zombie-Crawl", i.aiData.animWalk = "Zombie-Crawl", i.aiData.animDeath = "Zombie-Crawl-death", i.aiData.animStrikeFly = "Zombie-Generic-Fall", e.spdPlus = .5 * -i.gd.SPD()), i.aiData.animDeath_ArrowL = "Zombie-Headshot", i.aiData.animDeath_ArrowR = "Zombie-Headshot-Forward", i.aiData.animDeath_SpearL = "Zombie-Headshot_Spearton", i.aiData.animDeath_SpearR = "Zombie-Headshot-Forward_Spearton", i.aiData.canBlock = !1, i.aiData.isCloser = !0, i.aiData.isZombie = !0
				}, e.prototype.AI_Enter_HitFly = function() {
					t.prototype.AI_Enter_HitFly.call(this);
					var e = this;
					e.aiData.animStand = "Zombie-Idle", e.aiData.animRun = "Zombie-Crawl", e.aiData.animWalk = "Zombie-Crawl", e.aiData.animDeath = "Zombie-Crawl-death", e.aiData.animStrikeFly = "Zombie-Generic-Fall", e.gd.spdPlus = .5 * -e.gd.SPD()
				}, e.prototype.AI_Enter_Atk = function() {
					var t = this,
						e = "";
					e = "Zombie-Stand" == t.aiData.animStand ? r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Attack1" : "Zombie-Attack2" : r.GameUtil.RandomRange(0, 100) < 50 ? "Zombie-Crawler-Attack1" : "Zombie-Crawler-Attack2", t.LookUnit(t.aiData.atkTarget), t.PlayAnim(e, t.gd.GetAtkSpd())
				}, e.prototype.UpdateEvent = function(e, i) {
					t.prototype.UpdateEvent.call(this, e, i);
					var o = this;
					switch (i.data.name) {
						case "Hit":
							if (null != o.aiData && null != o.aiData.atkTarget && o.CanAttack() && !o.aiData.atkTarget.IsDead()) {
								var a = o.gd.GetATK() - o.aiData.atkTarget.gd.GetDEF();
								o.aiData.atkTarget.Behurt(o, a, o.x, o.y, o.IsFlipX())
							}
					}
				}, e
			}(a.default);
		i.default = l, cc._RF.pop()
	}, {
		"../../../CCScripts/GPrefabManager": "GPrefabManager",
		"../../Actor/GUnit": "GUnit",
		"../../Common/GameUtil": "GameUtil",
		"../../Data/GEnums": "GEnums"
	}],
	GameUtil: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "8cc37jnuItKH5EiqmhxcUEf", "GameUtil"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.Vector2 = i.GameUtil = i.Color = void 0;
		var o = function() {
			function t(t, e, i, o) {
				this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.r = t, this.g = e, this.b = i, this.a = o
			}
			return t.prototype.DColor = function() {
				this.r = 1 - this.r, this.g = 1 - this.g, this.b = 1 - this.b, this.a = 1 - this.a
			}, t.Lerp = function(e, i, o) {
				var n = new t(1, 1, 1, 1);
				return n.r = a.Lerp(e.r, i.r, o), n.g = a.Lerp(e.g, i.g, o), n.b = a.Lerp(e.b, i.b, o), n.a = a.Lerp(e.a, i.a, o), n
			}, t
		}();
		i.Color = o;
		var a = function() {
			function t() {}
			return t.Contains = function(t, e) {
				for (var i = 0; i < t.length; i++)
					if (t[i] == e) return !0;
				return !1
			}, t.NumberEx = function(t) {
				return t *= 10, t = Math.floor(t), t /= 10
			}, t.FormatMoney = function(t) {
				var e = t.toString();
				return t > 1e9 ? Math.floor(t / 1e8) + "\u4ebf" : t > 1e8 ? e.substr(0, 1) + "." + e.substr(1, 1) + "\u4ebf" : t > 1e5 ? Math.floor(t / 1e4) + "\u4e07" : Math.floor(t).toString()
			}, t.FormatTime_HHMMSS = function(t) {
				var e = t / 1e3,
					i = (Array(2).join("0") + Math.floor(e / 3600)).slice(-2),
					o = (Array(2).join("0") + Math.floor(e % 3600 / 60)).slice(-2),
					a = (Array(2).join("0") + Math.floor(e) % 60).slice(-2);
				return "00" == i ? o + ":" + a : i + ":" + o + ":" + a
			}, t.FormatTime_DDHHMMSS = function(t) {
				var e = t / 1e3,
					i = e % 60,
					o = (e = Math.floor(e / 60)) % 60,
					a = (e = Math.floor(e / 60)) % 24,
					n = (e = Math.floor(e / 24), "");
				return e > 0 ? (n = e + "\u5929", a > 0 && (n += a + "\u5c0f\u65f6")) : (a > 0 && (n += a + "\u5c0f\u65f6"), o > 0 ? n += o + "\u5206" : a > 0 && (n += "\u96f6"), i > 0 && (n += Math.floor(i) + "\u79d2")), n
			}, t.BigNumber = function(t) {
				var e = t.toString();
				if (e.indexOf("e") > 0) {
					var i = e.split("e"),
						o = Number(i[1]),
						a = (r = i[0].split("."))[0];
					if (r.length > 1 && (a += r[1], o -= r[1].length), o < 0) a.substr(0, a.length - 1);
					else
						for (var n = 0; n < o; n++) a += "0";
					return this._string2BigNumberString(a)
				}
				if (e.indexOf(".") > 0) {
					var r = e.split(".");
					return this._string2BigNumberString(r[0])
				}
				return this._string2BigNumberString(e)
			}, t.LookAt = function(t, e, i) {
				var o = 57.29578 * Math.atan2(i, e);
				t.angle = o
			}, t._GetExt_24 = function(t) {
				var e;
				if (t <= 3) e = this._exts_24[t];
				else {
					for (e = "", t -= 3; t > 0;) {
						var i = t % 24;
						t = Math.floor(t / 24), e = String.fromCharCode(96 + i) + e
					}
					1 == e.length && (e = "a" + e)
				}
				return e
			}, t._string2BigNumberString = function(t) {
				for (var e = t.length, i = e % 3, o = 3 - (i = 0 == i ? 3 : i), a = Math.floor((e - 1) / 3), n = "", r = 0; r < i; r++) n += t.charAt(r);
				if (a > 0)
					for (r = i; r < i + o; r++) r == i && (n += "."), n += t.charAt(r);
				return n += this._GetExt_24(a)
			}, t.BinUTF8ToString = function(t, e) {
				var i = 0,
					o = "",
					a = 0,
					n = 0;
				for (i = e; i < t.length;)(n = t[i]) >>> 7 == 0 ? (o += String.fromCharCode(t[i]), i += 1) : 252 == (252 & n) ? (a = (3 & t[i]) << 30, a |= (63 & t[i + 1]) << 24, a |= (63 & t[i + 2]) << 18, a |= (63 & t[i + 3]) << 12, a |= (63 & t[i + 4]) << 6, a |= 63 & t[i + 5], o += String.fromCharCode(a), i += 6) : 248 == (248 & n) ? (a = (7 & t[i]) << 24, a |= (63 & t[i + 1]) << 18, a |= (63 & t[i + 2]) << 12, a |= (63 & t[i + 3]) << 6, a |= 63 & t[i + 4], o += String.fromCharCode(a), i += 5) : 240 == (240 & n) ? (a = (15 & t[i]) << 18, a |= (63 & t[i + 1]) << 12, a |= (63 & t[i + 2]) << 6, a |= 63 & t[i + 3], o += String.fromCharCode(a), i += 4) : 224 == (224 & n) ? (a = (31 & t[i]) << 12, a |= (63 & t[i + 1]) << 6, a |= 63 & t[i + 2], o += String.fromCharCode(a), i += 3) : 192 == (192 & n) ? (a = (63 & t[i]) << 6, a |= 63 & t[i + 1], o += String.fromCharCode(a), i += 2) : (o += String.fromCharCode(t[i]), i += 1);
				return o
			}, t.SystemTime = function(t) {
				return void 0 === t && (t = !0), (0 == this._curTime || t) && this.UpdateSystemTime(), this._curTime
			}, t.UpdateSystemTime = function() {
				this._curTime = (new Date).getTime() + this.fixedServerTime
			}, t.SystemTimeHHMMSS = function(e) {
				void 0 === e && (e = !0);
				var i = this.SystemTime(e),
					o = i.toString();
				return o = o.substr(o.length - 4), t.FormatTime_HHMMSS(i) + " " + o
			}, t.SyncServerTime = function(t) {
				this.serverTime = t, this.fixedServerTime = t - (new Date).getTime()
			}, t.SystemDay = function() {
				return this.GetDay(t.SystemTime())
			}, t.GetDay = function(t) {
				var e = t / 1e3;
				return e /= 60, e /= 60, e += 8, e /= 24, e = Math.floor(e)
			}, t.RandomRange = function(t, e) {
				var i = e - t;
				return Math.random() * i + t
			}, t.RandomRangeInt = function(t, e) {
				var i = e - t;
				return i = Math.floor(i), Math.floor(1e4 * Math.random()) % i + t
			}, t.FlyIcon = function(t, e, i, o) {
				t.active = !1;
				for (var a, n, r, s, l, c, u, d, h, p, f = function() {
						var o = cc.instantiate(t);
						o.active = !0, t.parent.addChild(o), a = 360 * Math.random(), n = 50 * Math.random() + 20, r = Math.cos(a) * n, s = Math.sin(a) * n, l = Math.sqrt(r * r + s * s), r += e.x, s += e.y, c = i.x - r, u = i.y - s, d = Math.sqrt(c * c + u * u), h = l / 100, p = d / 1e3, cc.tween(o).delay(.01 * m).to(h, {
							x: r,
							y: s
						}).to(p, {
							x: i.x,
							y: i.y
						}).call(function() {
							o.active = !1, o.destroy()
						}).start()
					}, m = 0; m < o; m++) f()
			}, t.Lerp = function(t, e, i) {
				return t + (e - t) * i
			}, t.isInArray = function(t, e) {
				if (null != t && void 0 != t) return t.indexOf(e) >= 0
			}, t.isNullOrUndefined = function(t) {
				return null == t || void 0 == t
			}, t._exts_24 = ["", "k", "m", "b"], t.fixedServerTime = 0, t.serverTime = 0, t._curTime = 0, t
		}();
		i.GameUtil = a;
		var n = function() {
			function t(t, e) {
				this.x = t, this.y = e
			}
			return t.Zero = function() {
				return new t(0, 0)
			}, t.Vec2 = function(e) {
				return new t(e.x, e.y)
			}, t.prototype.normalization = function() {
				var t = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
				return 0 == t ? (this.x = 0, this.y = 0) : (this.x = this.x / t, this.y = this.y / t), this
			}, t.prototype.SetXY = function(t, e) {
				return this.x = t, this.y = e, this
			}, t.prototype.mul = function(t) {
				return this.x *= t, this.y *= t, this
			}, t.prototype.addXY = function(t, e) {
				return this.x += t, this.y += e, this
			}, t.prototype.addVec2 = function(t) {
				return this.x += t.x, this.y += t.y, this
			}, t.lerp = function(e, i, o) {
				return new t((i.x - e.x) * o + e.x, (i.y - e.y) * o + e.y)
			}, t.DistanceVec2 = function(t, e) {
				return this.Distance(t.x, t.y, e.x, e.y)
			}, t.Distance = function(t, e, i, o) {
				return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - o, 2))
			}, t.DistanceSQRT = function(t, e, i, o) {
				return Math.pow(t - i, 2) + Math.pow(e - o, 2)
			}, t.CalcForward = function(t, e, i, o) {
				var a = i - t,
					n = o - e,
					r = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
				if (0 == r) return this.tmpVec2.SetXY(0, 0), this.tmpVec2;
				var s = a / r,
					l = n / r;
				return this.tmpVec2.SetXY(s, l), this.tmpVec2
			}, t.tmpVec2 = new t(0, 0), t
		}();
		i.Vector2 = n, cc._RF.pop()
	}, {}],
	GuideScene1: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "37696fCqQVM65B6H2dAjRgK", "GuideScene1");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n, r = t("../Game/Actor/GUnit"),
			s = t("../Game/Common/SimpleStateMachine"),
			l = t("../Game/Data/GEnums"),
			c = t("../Game/GBattle/GBattle"),
			u = t("../Game/MainData"),
			d = t("./Guide"),
			h = t("./UIGuideView");
		(function(t) {
			t[t.wait = -1] = "wait", t[t.tobuildminer = 0] = "tobuildminer", t[t.buildswordman = 1] = "buildswordman", t[t.dragscreen = 2] = "dragscreen", t[t.clickatk = 3] = "clickatk", t[t.dragscreen2 = 4] = "dragscreen2", t[t.endguide = 5] = "endguide"
		})(n || (n = {}));
		var p = cc._decorator,
			f = p.ccclass,
			m = p.property,
			v = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewNode = null, e.view = null, e.btn1 = null, e.btn2 = null, e.btn3 = null, e.spellRoot = null, e.btnSpell = null, e.btnAtk = null, e.theMiner = null, e.sm = new s.default, e.delayTime = 0, e.nextState = 0, e.repeat1 = !1, e
				}
				return o(e, t), e.prototype.InitGuide = function() {
					var t = this,
						e = c.default.gb;
					this.view = this.viewNode.getComponent(h.default), e.gbRoot.cameraController.enablePlayerTouch = !1, r.default.enableControlUnit = !1, this.spellRoot.active = !1, this.btnSpell.active = !1, c.default.enableAI = !1;
					var i = e.gd.teamDict[0].JobLvUp[l.EnumSkill.Swordman_sword] > 0;
					this.btn2 = i ? this.btn3 : this.btn2, this.btn2.node.active = !1, this.btn3.node.active = !1, this.sm.Register(this, n.wait, null, null, function() {
						t.delayTime -= u.default.GetGameFPS(), t.delayTime <= 0 && t.sm.ChangeState(t.nextState)
					}), this.sm.Register(this, n.tobuildminer, function() {
						0 == t.CountBuilding(l.EnumUnit.miner1) && (t.view.LockTargetShowArrow(t.btn1, !0), t.view.ShowDialog("Tuyển 1 thợ mỏ để đào thêm vàng."), t.view.ScaleDialog(), 0 == u.default.GetGuide(1) && (u.default.SetGuide(1, 1), u.default.SaveGame()))
					}, null, function() {
						t.CountBuilding(l.EnumUnit.miner1) > 0 && (t.view.HideArrow(), t.view.HideDialog());
						for (var i = 0; i < e.units.length; i++)
							if (0 == e.units[i].gd.team && e.units[i].job == l.EnumJob.miner) {
								t.theMiner = e.units[i], t.theMiner.OnGuide = !0, t.SetNextAction(n.buildswordman, 1);
								break
							}
					}), this.sm.Register(this, n.buildswordman, function() {
						e.gd.teamDict[0].gold = 300, t.btn2.node.active = !0, t.view.LockTargetShowArrow(t.btn2, !0), t.view.ShowDialog("Huấn luyện 1 người que"), t.view.ScaleDialog(), e.gbRoot.cameraController.enablePlayerTouch = !1, 0 == u.default.GetGuide(2) && (u.default.SetGuide(2, 1), u.default.SaveGame())
					}, null, function() {
						for (var i = 0, o = 0; o < e.units.length; o++) 0 == e.units[o].gd.team && e.units[o].job == l.EnumJob.swordman && i++;
						i >= 1 && !t.repeat1 && (t.view.ShowDialog("Huấn luyện 1 stickman khác"), t.repeat1 = !0, 0 == u.default.GetGuide(3) && (u.default.SetGuide(3, 1), u.default.SaveGame())), i >= 2 && t.SetNextAction(n.dragscreen, 0)
					}), this.sm.Register(this, n.dragscreen, function() {
						e.gbRoot.cameraController.enablePlayerTouch = !0, t.view.ShowDialog("Để xem kẻ thù ở đâu"), t.view.ScaleDialog(), t.view.gHand.active = !0, t.view.HideArrow(), 0 == u.default.GetGuide(4) && (u.default.SetGuide(4, 1), u.default.SaveGame())
					}, null, function() {
						e.gbRoot.cameraController.targetCamera.x > 400 && (t.SetNextAction(n.clickatk, 0), t.view.gHand.active = !1)
					}), this.sm.Register(this, n.clickatk, function() {
						t.view.ShowDialog("Phát hiện kẻ thù và tấn công!"), t.view.ScaleDialog(), t.view.LockTargetShowArrow(t.btnAtk, !0), 0 == u.default.GetGuide(5) && (u.default.SetGuide(5, 1), u.default.SaveGame())
					}, null, function() {
						c.default.aiMode[0] == l.AIMode.\u8fdb\u653b && t.SetNextAction(n.dragscreen2, 0)
					}), this.sm.Register(this, n.dragscreen2, function() {
						t.view.HideArrow(), t.view.HideDialog(), null != t.theMiner && (t.theMiner.OnGuide = !1), c.default.enableAI = !0, e.gbRoot.cameraController.LookAtObject(e.TowerR.node, t, function() {
							t.view.ShowDialog("Phá hủy bức tượng! Chiến thắng!"), t.view.ScaleDialog(), t.SetNextAction(n.endguide, 5), 0 == u.default.GetGuide(6) && (u.default.SetGuide(6, 1), u.default.SaveGame())
						})
					}, null, null), this.sm.Register(this, n.endguide, function() {
						t.view.HideArrow(), t.view.HideDialog(), r.default.enableControlUnit = !0, t.view.node.active = !1
					}, null, null), this.SetNextAction(n.tobuildminer, 1), this.isPlaying = !0
				}, e.prototype.PassGuide = function() {
					null != this.theMiner && (this.theMiner.OnGuide = !1);
					var t = c.default.gb;
					c.default.enableAI = !0, this.btn2.node.active = !0, t.gbRoot.cameraController.enablePlayerTouch = !0, r.default.enableControlUnit = !0, this.sm.ChangeState(n.endguide), this.view.HideArrow(), this.view.HideDialog(), this.view.ResumeGame(), this.view.gHand.active = !1, this.view.node.active = !1, this.isPlaying = !1
				}, e.prototype.SetNextAction = function(t, e) {
					0 == e ? this.sm.ChangeState(t) : (this.sm.ChangeState(n.wait), this.delayTime = e, this.nextState = t)
				}, e.prototype.update = function(t) {
					this.isPlaying && (null == c.default.gb ? this.PassGuide() : this.sm.Update())
				}, a([m(cc.Node)], e.prototype, "viewNode", void 0), a([m(cc.Button)], e.prototype, "btn1", void 0), a([m(cc.Button)], e.prototype, "btn2", void 0), a([m(cc.Button)], e.prototype, "btn3", void 0), a([m(cc.Node)], e.prototype, "spellRoot", void 0), a([m(cc.Node)], e.prototype, "btnSpell", void 0), a([m(cc.Toggle)], e.prototype, "btnAtk", void 0), e = a([f], e)
			}(d.default);
		i.default = v, cc._RF.pop()
	}, {
		"../Game/Actor/GUnit": "GUnit",
		"../Game/Common/SimpleStateMachine": "SimpleStateMachine",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/MainData": "MainData",
		"./Guide": "Guide",
		"./UIGuideView": "UIGuideView"
	}],
	GuideScene2: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "5593b+f3JVAybuwaNdkynNf", "GuideScene2");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.GuideScene2 = void 0;
		var n, r = t("../Game/Common/SimpleStateMachine"),
			s = t("../Game/Data/GEnums"),
			l = t("../Game/GBattle/GBattle"),
			c = t("../Game/MainData"),
			u = t("./Guide"),
			d = t("./UIGuideView");
		(function(t) {
			t[t.wait = -1] = "wait", t[t.zbtip = 0] = "zbtip", t[t.clickItem = 1] = "clickItem", t[t.minerSpdup = 2] = "minerSpdup", t[t.waitenemy = 3] = "waitenemy", t[t.enemyspadie = 4] = "enemyspadie", t[t.clickfallback = 5] = "clickfallback", t[t.clickdef = 6] = "clickdef", t[t.formoney = 7] = "formoney", t[t.endguide = 8] = "endguide"
		})(n || (n = {}));
		var h = cc._decorator,
			p = h.ccclass,
			f = h.property,
			m = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewNode = null, e.view = null, e.btnDef = null, e.btnIDLE = null, e.spellRoot = null, e.btnSpell = null, e.btnItem1 = null, e.sm = new r.default, e.delayTime = 0, e.nextState = 0, e.lockTimeline = !0, e.repeat1 = !1, e.repeat2 = !1, e.repeat3 = !1, e
				}
				return o(e, t), e.prototype.InitGuide = function() {
					var t = this,
						e = this;
					this.view = this.viewNode.getComponent(d.default), e.btnSpell.node.active = !1, e.spellRoot.active = !1, e.lockTimeline = !0, e.sm.Register(e, n.wait, null, null, function() {
						e.delayTime -= c.default.GetGameFPS(), e.delayTime <= 0 && e.sm.ChangeState(e.nextState)
					}), e.sm.Register(e, n.zbtip, function() {
						e.view.ShowDialog("Thời gian của chúng ta sắp hết! Chuẩn bị phòng thủ!"), t.view.ScaleDialog(), e.SetNextAction(n.clickItem, 2), 0 == c.default.GetGuide(7) && (c.default.SetGuide(7, 1), c.default.SaveGame())
					}, null, null);
					var i = c.default.GetItemNum(1);
					c.default.AddItemNum(1, 1, !0), l.default.gb.ui.UpdateItemBtns(), e.sm.Register(e, n.clickItem, function() {
						e.btnSpell.node.active = !0, e.spellRoot.active = !0
					}, null, function() {
						c.default.GetItemNum(1) == i ? (e.view.HideDialog(), e.view.HideArrow(), e.SetNextAction(n.waitenemy, 0)) : 1 != e.spellRoot.scaleX || t.repeat2 ? 0 != e.spellRoot.scaleX || t.repeat1 || (t.repeat1 = !0, e.view.ShowDialog("Nhấn vào đây để mở hộp vật phẩm của bạn"), e.view.LockTargetShowArrow(e.btnSpell, !1), 0 == c.default.GetGuide(8) && (c.default.SetGuide(8, 1), c.default.SaveGame())) : (t.repeat2 = !0, e.view.ShowDialog("Dùng cuốc vàng để nhanh chóng gia tăng sức mạnh kinh tế"), e.view.LockTargetShowArrow(e.btnItem1, !1, 30, 30), 0 == c.default.GetGuide(9) && (c.default.SetGuide(9, 1), c.default.SaveGame()))
					}), e.sm.Register(e, n.waitenemy, null, null, function() {
						e.lockTimeline = !1, l.default.gb.currTime > 10 && (e.delayTime = 2, e.SetNextAction(n.enemyspadie, 0))
					}), e.sm.Register(e, n.enemyspadie, function() {
						l.default.gb.gbRoot.cameraController.LookAtObject(l.default.gb.TowerR.node, null, null), e.view.ShowDialog("Kẻ thù đang đến!"), t.view.ScaleDialog(), e.SetNextAction(n.clickfallback, 3), 0 == c.default.GetGuide(10) && (c.default.SetGuide(10, 1), c.default.SaveGame())
					}, null, null), e.sm.Register(e, n.clickfallback, function() {
						l.default.gb.gbRoot.cameraController.LookAtObject(l.default.gb.TowerL.node, null, null), e.view.ShowDialog("Bấm vào đây để rút khỏi Castle Defense"), t.view.ScaleDialog(), e.view.LockTargetImageShowArrow(e.btnDef, !0), 0 == c.default.GetGuide(11) && (c.default.SetGuide(11, 1), c.default.SaveGame())
					}, null, function() {
						l.default.aiMode[0] != s.AIMode.\u9632\u5b88 || t.repeat3 || (t.repeat3 = !0, e.view.ShowDialog("Làm suy yếu kẻ thù bằng các cung thủ lâu đài và bảo toàn sức mạnh"), e.view.HideArrow(), 0 == c.default.GetGuide(12) && (c.default.SetGuide(12, 1), c.default.SaveGame()));
						for (var i = 0, o = 0; o < l.default.gb.units.length; o++) 1 != l.default.gb.units[o].gd.team || l.default.gb.units[o].IsDead() || i++;
						0 == i && e.SetNextAction(n.clickdef, 0)
					}), e.sm.Register(e, n.clickdef, function() {
						e.view.ShowDialog("Hiện tại có thể đi ra ngoài"), t.view.ScaleDialog(), e.view.LockTargetImageShowArrow(e.btnIDLE, !0), l.default.gb.gbRoot.cameraController.enablePlayerTouch = !0, 0 == c.default.GetGuide(13) && (c.default.SetGuide(13, 1), c.default.SaveGame())
					}, null, function() {
						l.default.aiMode[0] == s.AIMode.\u5f85\u547d && (e.view.HideArrow(), e.SetNextAction(n.formoney, 0))
					}), e.sm.Register(e, n.formoney, function() {
						e.view.ShowDialog("Sự phát triển trong tương lai là tùy thuộc vào bạn, hãy dự trữ thêm một số vàng!"), t.view.ScaleDialog(), e.SetNextAction(n.endguide, 5), 0 == c.default.GetGuide(14) && (c.default.SetGuide(14, 1), c.default.SaveGame())
					}, null, null), e.sm.Register(e, n.endguide, function() {
						e.view.HideDialog(), e.view.HideArrow(), e.view.node.active = !1
					}, null, null), e.SetNextAction(n.zbtip, .5)
				}, e.prototype.PassGuide = function() {
					t.prototype.PassGuide.call(this);
					var e = this;
					e.lockTimeline = !1, e.btnSpell.node.active = !0, e.spellRoot.active = !0, l.default.gb.gbRoot.cameraController.enablePlayerTouch = !0, e.sm.ChangeState(n.endguide), e.view.HideArrow(), e.view.HideDialog(), e.view.ResumeGame(), e.view.node.active = !1
				}, e.prototype.SetNextAction = function(t, e) {
					0 == e ? this.sm.ChangeState(t) : (this.sm.ChangeState(n.wait), this.delayTime = e, this.nextState = t)
				}, e.prototype.update = function(t) {
					null == l.default.gb ? this.PassGuide() : (this.sm.Update(), this.lockTimeline && (l.default.gb.passTime = .2, l.default.gb.prevTime = 0, l.default.gb.currTime = .2))
				}, a([f(cc.Node)], e.prototype, "viewNode", void 0), a([f(cc.Node)], e.prototype, "btnDef", void 0), a([f(cc.Node)], e.prototype, "btnIDLE", void 0), a([f(cc.Node)], e.prototype, "spellRoot", void 0), a([f(cc.Button)], e.prototype, "btnSpell", void 0), a([f(cc.Button)], e.prototype, "btnItem1", void 0), e = a([p], e)
			}(u.default);
		i.GuideScene2 = m, cc._RF.pop()
	}, {
		"../Game/Common/SimpleStateMachine": "SimpleStateMachine",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/MainData": "MainData",
		"./Guide": "Guide",
		"./UIGuideView": "UIGuideView"
	}],
	GuideScene6: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "22836xqxUBIFpPGLr/HHX78", "GuideScene6");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n, r = t("../Game/Common/SimpleStateMachine"),
			s = t("../Game/Data/GEnums"),
			l = t("../Game/GBattle/GBattle"),
			c = t("../Game/MainData"),
			u = t("./Guide"),
			d = t("./UIGuideView");
		(function(t) {
			t[t.wait = -1] = "wait", t[t.clickBtn = 0] = "clickBtn", t[t.clickGaint = 1] = "clickGaint", t[t.endguide = 2] = "endguide"
		})(n || (n = {}));
		var h = cc._decorator,
			p = h.ccclass,
			f = h.property,
			m = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewNode = null, e.view = null, e.btn = null, e.btnSpell = null, e.sm = new r.default, e.delayTime = 0, e.nextState = 0, e
				}
				return o(e, t), e.prototype.InitGuide = function() {
					var t = this,
						e = this;
					this.view = this.viewNode.getComponent(d.default), e.sm.Register(e, n.wait, null, null, function() {
						e.delayTime -= c.default.GetGameFPS(), e.delayTime <= 0 && e.sm.ChangeState(e.nextState)
					}), e.sm.Register(e, n.clickBtn, function() {
						e.view.ShowDialog("Sử dụng Skeletons of Giants, triệu hồi những người khổng lồ cổ đại hùng mạnh"), t.view.ScaleDialog(), e.view.LockTargetShowArrow(e.btnSpell, !1), c.default.AddItemNum(9, 1, !0), l.default.gb.ui.UpdateItemBtns(), 0 == c.default.GetGuide(15) && (c.default.SetGuide(15, 1), c.default.SaveGame())
					}, null, function() {
						1 == l.default.gb.ui.spellRoot.active && e.SetNextAction(n.clickGaint, 0)
					}), e.sm.Register(e, n.clickGaint, function() {
						e.view.LockTargetShowArrow(e.btn, !0, 20, -40)
					}, null, function() {
						for (var t = 0; t < l.default.gb.units.length; t++) {
							var i = l.default.gb.units[t].gd;
							0 == i.team && i.sdId == s.EnumUnit.unit14 && e.PassGuide()
						}
					}), e.SetNextAction(n.clickBtn, 3)
				}, e.prototype.PassGuide = function() {
					t.prototype.PassGuide.call(this);
					var e = this;
					l.default.gb.gbRoot.cameraController.enablePlayerTouch = !0, e.sm.ChangeState(n.endguide), e.view.HideArrow(), e.view.HideDialog(), e.view.ResumeGame(), e.view.node.active = !1
				}, e.prototype.SetNextAction = function(t, e) {
					0 == e ? this.sm.ChangeState(t) : (this.sm.ChangeState(n.wait), this.delayTime = e, this.nextState = t)
				}, e.prototype.update = function(t) {
					null == l.default.gb ? this.PassGuide() : this.sm.Update()
				}, a([f(cc.Node)], e.prototype, "viewNode", void 0), a([f(cc.Button)], e.prototype, "btn", void 0), a([f(cc.Button)], e.prototype, "btnSpell", void 0), e = a([p], e)
			}(u.default);
		i.default = m, cc._RF.pop()
	}, {
		"../Game/Common/SimpleStateMachine": "SimpleStateMachine",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/MainData": "MainData",
		"./Guide": "Guide",
		"./UIGuideView": "UIGuideView"
	}],
	Guide: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "394c3qsxZNGAouMy03ai5n7", "Guide");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/GBattle/GBattle"),
			r = cc._decorator,
			s = r.ccclass,
			l = (r.property, function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.isPlaying = !1, e
				}
				return o(e, t), e.prototype.InitGuide = function() {}, e.prototype.PassGuide = function() {}, e.prototype.CountBuilding = function(t) {
					for (var e = n.default.gb.gd.teamDict[0], i = 0, o = 0; o < e.buildList.length; o++) e.buildList[o] == t && i++;
					return i
				}, e = a([s], e)
			}(cc.Component));
		i.default = l, cc._RF.pop()
	}, {
		"../Game/GBattle/GBattle": "GBattle"
	}],
	HTvertical: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c33b1onGKNL+YPTzMAWHvax", "HTvertical");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.hutui = null, e.view = null, e.jumpArr = [], e.title = "", e.content = null, e.copyContent = null, e.isUP = !0, e
				}
				var i;
				return o(e, t), i = e, e.huiTUIInit = function(t) {
					cc.resources.load("UI/HTvertical", function(e, o) {
						if (e) console.error(e);
						else {
							var a = cc.instantiate(o),
								n = a.getComponent(i),
								r = cc.find("Canvas"),
								s = r.getChildByName("Main Camera");
							if (s.getChildByName("HTvertical") || r.getChildByName("HTvertical")) return;
							n.jumpArr = t, s ? s.addChild(a) : r.addChild(a)
						}
					})
				}, e.prototype.start = function() {
					for (var t, e = this, i = 2 * (t = this.jumpArr.concat(this.jumpArr)).length, o = 0, a = t.length; o < a; o++) {
						var n = cc.instantiate(this.hutui);
						n.getComponent("HuTuiIcon").changeIconImg(t[o]), this.view.content.addChild(n)
					}
					this.view.scrollToBottom(i, !1), this.view.scheduleOnce(function() {
						e.onScrollEnd(e.view, i)
					}, i / 2 + 4)
				}, e.prototype.onScrollEnd = function(t, e) {
					var i = this;
					t.content.x = 10, t.scrollToTop(e, !1), t.scheduleOnce(function() {
						i.onScrollTop(t, e)
					}, e / 2 + 4)
				}, e.prototype.onScrollTop = function(t, e) {
					var i = this;
					t.scrollToBottom(e, !1), t.scheduleOnce(function() {
						i.onScrollEnd(t, e)
					}, e / 2 + 4)
				}, e.prototype.CloseUI = function() {
					this.node.active = !1, this.node.destroy()
				}, e.prototype.update = function(t) {}, a([s(cc.Prefab)], e.prototype, "hutui", void 0), a([s(cc.ScrollView)], e.prototype, "view", void 0), e = i = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	Hts: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "1d6b8M61QJKMoMV3GvBSqJ7", "Hts"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.hts = void 0;
		var o = t("htSdk"),
			a = function() {
				function t() {
					this.htSdk = o.default
				}
				return t.instance = function() {
					return t.me ? t.me : (t.me = new t, t.me)
				}, t.prototype.getUid = function() {
					return this.htSdk.getUid()
				}, t.prototype.init = function(t, e, i) {
					this.htSdk.init(t, e, i)
				}, t.prototype.getBox = function(t, e) {
					this.htSdk.getBox(t, e)
				}, t.prototype.navFrom = function(t, e) {
					this.htSdk.navFrom(t, e)
				}, t.prototype.navTo = function(t, e, i, o) {
					this.htSdk.navTo(t, e, i, o)
				}, t.prototype.jlog = function(t, e, i) {
					this.htSdk.jlog(t, e, i)
				}, t.prototype.getSharePic = function(t, e) {
					this.htSdk.getSharePic(t, e)
				}, t.prototype.shareTo = function(t) {
					this.htSdk.shareTo(t)
				}, t.prototype.shareFrom = function(t) {
					this.htSdk.shareFrom(t)
				}, t.prototype.jreq = function(t, e, i) {
					this.htSdk.jreq(t, e, i)
				}, t
			}();
		i.hts = a.instance(), cc._RF.pop()
	}, {
		htSdk: "htSdk"
	}],
	HuTuiIcon: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "3e7036miOZM6p2VRgeckxDr", "HuTuiIcon");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.HuTuiIcon = void 0;
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = t("../../config"),
			c = t("../../Game/MainData"),
			u = t("../../Hts"),
			d = t("../../HutuiSDK"),
			h = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.nameLb = null, e.iconImg = null, e.markLb = null, e.markImg = null, e.currentIndex = 0, e.iconArr = [], e.index = 0, e
				}
				return o(e, t), e.prototype.start = function() {}, e.prototype.Setup = function(t) {
					var e = this;
					this.iconArr = t, this.changeIconImg(this.iconArr[this.index]), this.index++, this.index >= t.length && (this.index = 0), this.scheduleOnce(function() {
						e.Setup(e.iconArr)
					}, 3)
				}, e.prototype.init = function(t) {
					this._spriteAltas = t
				}, e.prototype.changeIconImg = function(t) {
					var e = this,
						i = cc.scaleTo(.2, 0, 0),
						o = cc.callFunc(function() {
							e.nameLb.node.active && (e.nameLb.string = t.txt.replace(/([\s\S]{6})([\s\S]*)/, "$1...")), t.mark ? (e.markImg.node.active = !0, e.markLb.node.active = !0, e.markLb.string = t.mark) : (e.markImg.node.active = !1, e.markLb.node.active = !1), e.iconImg.spriteFrame = t.icon
						});
					this.iconImg.node.off(cc.Node.EventType.TOUCH_END), this.iconImg.node.on(cc.Node.EventType.TOUCH_END, function() {
						console.log("===> jump to:" + t.jumpKey + " query:" + t.query);
						var e = d.default.gid;
						switch (l.default.Channel) {
							case "wx":
								var i = window.wx;
								i && i.navigateToMiniProgram({
									appId: t.jumpKey,
									path: "?" + t.query,
									success: function() {
										u.hts.navTo(e, t.bid, t.mid)
									},
									fail: function(t) {
										c.default.role.story.curSceneId > 2 && d.default.showBox()
									}
								});
								break;
							case "oppo":
								if (window.qg) window.qg.navigateToMiniGame({
									pkgName: t.jumpKey,
									path: "?" + t.query,
									success: function() {
										u.hts.navTo(e, t.bid, t.mid)
									},
									fail: function(i) {
										console.log(JSON.stringify(i)), u.hts.navTo(e, t.bid, t.mid, !0)
									}
								})
						}
					});
					var a = cc.scaleTo(.2, 1, 1);
					this.node.runAction(cc.sequence(i, o, a))
				}, a([s(cc.Label)], e.prototype, "nameLb", void 0), a([s(cc.Sprite)], e.prototype, "iconImg", void 0), a([s(cc.Label)], e.prototype, "markLb", void 0), a([s(cc.Sprite)], e.prototype, "markImg", void 0), e = a([r], e)
			}(cc.Component);
		i.HuTuiIcon = h, cc._RF.pop()
	}, {
		"../../Game/MainData": "MainData",
		"../../Hts": "Hts",
		"../../HutuiSDK": "HutuiSDK",
		"../../config": "config"
	}],
	HuTuiSortUI: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "69d89jjtY1JQ59UfgcnYcfE", "HuTuiSortUI");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.HuTuiSortUI = void 0;
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.hutui = null, e.List1 = null, e.List2 = null, e.jumpArr1 = [], e.jumpArr2 = [], e.jumpArr = [], e
				}
				var i;
				return o(e, t), i = e, e.huiTUIInit = function(t) {
					cc.resources.load("UI/SortHutuiParent", function(e, o) {
						if (e) console.error(e);
						else {
							var a = cc.instantiate(o),
								n = a.getComponent(i),
								r = cc.find("Canvas"),
								s = r.getChildByName("Main Camera");
							if (s.getChildByName("HuTuiSortUI") || r.getChildByName("HuTuiSortUI")) return;
							for (var l = 0, c = t.length; l < c; l++) t.length > 0 && l % 2 == 0 && n.jumpArr1.push(t[l]), t.length > 0 && l % 2 != 0 && n.jumpArr2.push(t[l]);
							n.jumpArr = t, s ? s.addChild(a) : r.addChild(a)
						}
					})
				}, e.prototype.CloseUI = function() {
					this.node.active = !1, this.node.destroy()
				}, e.prototype.start = function() {
					for (var t = this, e = 0, i = this.jumpArr1.length; e < i; e++) {
						(o = cc.instantiate(this.hutui)).getComponent("HuTuiIcon").changeIconImg(this.jumpArr1[e]), this.List1.content.addChild(o)
					}
					for (e = 0, i = this.jumpArr2.length; e < i; e++) {
						var o;
						(o = cc.instantiate(this.hutui)).getComponent("HuTuiIcon").changeIconImg(this.jumpArr2[e]), this.List2.content.addChild(o)
					}
					this.List1.scrollToRight(10, !1), this.List1.scheduleOnce(function() {
						t.onScrollRight(t.List1)
					}, 10), this.List2.scrollToRight(10, !1), this.List2.scheduleOnce(function() {
						t.onScrollRight(t.List2)
					}, 10)
				}, e.prototype.onScrollRight = function(t) {
					var e = this;
					t.scrollToLeft(10, !1), t.scheduleOnce(function() {
						e.onScrollLeft(t)
					}, 10)
				}, e.prototype.onScrollLeft = function(t) {
					var e = this;
					t.scrollToRight(10, !1), t.scheduleOnce(function() {
						e.onScrollRight(t)
					}, 10)
				}, a([s(cc.Prefab)], e.prototype, "hutui", void 0), a([s(cc.ScrollView)], e.prototype, "List1", void 0), a([s(cc.ScrollView)], e.prototype, "List2", void 0), e = i = a([r], e)
			}(cc.Component);
		i.HuTuiSortUI = l, cc._RF.pop()
	}, {}],
	HutuiSDK: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c7d8fIbcuRCcK05dZmaXX3j", "HutuiSDK");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./Hts"),
			r = t("./config"),
			s = t("./UI/HT/HuTuiSortUI"),
			l = t("./UI/HT/HTvertical"),
			c = cc._decorator,
			u = c.ccclass,
			d = (c.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var i;
				return o(e, t), i = e, e.initHt = function() {
					var t = this,
						e = null;
					switch (r.default.Channel) {
						case "wx":
						case "oppo":
							switch (r.default.Channel) {
								case "wx":
									i.gid = i.wx_gid, i.icon_bid = i.wx_icon_bid;
									break;
								case "oppo":
									i.gid = i.oppo_gid, i.icon_bid = i.oppo_icon_bid
							}
							e = r.default.IsDeBug ? null : this.getLauchFromQuery(), n.hts.init(i.gid, e, function(e, i) {
								e || t.downloadPicsAndCache(i, function(t, e) {
									t && console.log(t)
								})
							})
					}
				}, e.joinQuery = function(t) {
					var e = "";
					for (var i in t) {
						e += "&" + i + "=" + t[i]
					}
					return e ? "?" + e.substring(1) : e
				}, e.getLauchFromQuery = function() {
					var t = null;
					switch (r.default.Channel) {
						case "wx":
							var e = window.wx;
							if (!e || !e.getLaunchOptionsSync) return null;
							var o = e.getLaunchOptionsSync();
							return o && o.query && ("object" == typeof o.query ? t = i.joinQuery(t) : "string" == typeof o.query && (t = "?" + o.query)), t;
						case "oppo":
							var a = window.qg;
							if (!a || !a.getLaunchOptionsSync) return null;
							var n = a.getLaunchOptionsSync();
							return n && n.query && ("object" == typeof n.query ? t = i.joinQuery(t) : "string" == typeof n.query && (t = "?" + n.query)), t
					}
				}, e.downloadPicsAndCache = function(t, e) {
					for (var i = this, o = [], a = 0; a < t.length; a++) {
						var n = t[a];
						this.midMap[n.mid] || (this.midMap[n.mid] = {
							iconUrl: n.iconUrl
						}, this.iconUrlmap[n.iconUrl] = n.mid, o.push(n.iconUrl))
					}
					if (0 !== o.length) {
						var r = 0,
							s = function(t) {
								cc.assetManager.loadRemote(o[t], function(e, a) {
									var n = o[t],
										s = new cc.SpriteFrame(a);
									i.midMap[i.iconUrlmap[n]].frame = s, r++
								})
							};
						for (var l in o) s(l);
						e(null, r)
					} else e(null, 0)
				}, e.showIcon = function(t) {
					var e = this,
						i = this.icon_bid;
					n.hts.getBox(i, function(o, a) {
						if (o) t.node.active = !1;
						else if (a.length <= 0) t.node.active = !1;
						else {
							t.node.active = !0;
							var n = [],
								r = e.createJumpInfoArr(a, n, i);
							n.length <= 0 ? t.Setup(r) : e.downloadPicsAndCache(n, function(o, n) {
								console.log("\u5b8c\u6210\u56fe\u7247\u7f13\u5b58\u6570:" + n), t.Setup(e.createJumpInfoArr(a, [], i))
							})
						}
					})
				}, e.showBox = function() {
					var t = this,
						e = this.box_bid;
					n.hts.getBox(e, function(i, o) {
						if (!(i || o.length <= 0)) {
							var a = [],
								n = t.createJumpInfoArr(o, a, e);
							a.length <= 0 ? s.HuTuiSortUI.huiTUIInit(n) : t.downloadPicsAndCache(a, function(i, a) {
								console.log("\u5b8c\u6210\u56fe\u7247\u7f13\u5b58\u6570:" + a), s.HuTuiSortUI.huiTUIInit(t.createJumpInfoArr(o, [], e))
							})
						}
					})
				}, e.showscroll = function(t, e) {
					var i = this,
						o = this.scroll_bid;
					n.hts.getBox(o, function(a, n) {
						if (a) return e.node.parent.active = !1, e.node.active = !1, void console.log(a);
						if (n.length <= 0) return e.node.parent.active = !1, void(e.node.active = !1);
						var r = [],
							s = i.createJumpInfoArr(n, r, o);
						r.length <= 0 ? t.huiTUIInit(s) : i.downloadPicsAndCache(r, function(e, a) {
							console.log("\u5b8c\u6210\u56fe\u7247\u7f13\u5b58\u6570:" + a), t.huiTUIInit(i.createJumpInfoArr(n, [], o))
						})
					})
				}, e.showmoregame = function() {
					var t = this,
						e = this.more_game_bid;
					n.hts.getBox(e, function(i, o) {
						if (!(i || o.length <= 0)) {
							var a = [],
								n = t.createJumpInfoArr(o, a, e);
							a.length <= 0 ? l.default.huiTUIInit(n) : t.downloadPicsAndCache(a, function(i, a) {
								console.log("\u5b8c\u6210\u56fe\u7247\u7f13\u5b58\u6570:" + a), l.default.huiTUIInit(t.createJumpInfoArr(o, [], e))
							})
						}
					})
				}, e.createJumpInfoArr = function(t, e, i) {
					for (var o = [], a = 0; a < t.length; a++)
						for (var n = t[a], r = 0; r < n.length; r++) {
							var s = n[r],
								l = {
									icon: null,
									jumpKey: s.jumpKey,
									po: a,
									query: s.query,
									txt: s.txt,
									bid: i,
									mid: s.mid,
									mark: s.mark
								};
							this.midMap[s.mid] ? l.icon = this.midMap[s.mid].frame : e.push({
								iconUrl: s.iconUrl,
								mid: s.mid
							}), o.push(l)
						}
					return o
				}, e.midMap = {}, e.iconUrlmap = {}, e.gid = "", e.wx_gid = "5fcf2d7cc0222c24efd2437a", e.oppo_gid = "5ffbc70c76603e2317cee5d9", e.icon_bid = "", e.wx_icon_bid = "5fcf2dabc0222c24efd24386", e.oppo_icon_bid = "5ffbc73676603e2317cee5db", e.box_bid = "5fcf2de3c0222c24efd24392", e.scroll_bid = "5fd827390a056871e6594d03", e.more_game_bid = "5fcf2de3c0222c24efd24392", e = i = a([u], e)
			}(cc.Component));
		i.default = d, cc._RF.pop()
	}, {
		"./Hts": "Hts",
		"./UI/HT/HTvertical": "HTvertical",
		"./UI/HT/HuTuiSortUI": "HuTuiSortUI",
		"./config": "config"
	}],
	ISDK: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "628beFjIN9C5aGdX3RcHKGp", "ISDK"), cc._RF.pop()
	}, {}],
	MainData: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "966e2UtATJMq7ffWQ7oTPxO", "MainData");
		var o = this && this.__awaiter || function(t, e, i, o) {
				function a(t) {
					return t instanceof i ? t : new i(function(e) {
						e(t)
					})
				}
				return new(i || (i = Promise))(function(i, n) {
					function r(t) {
						try {
							l(o.next(t))
						} catch (t) {
							n(t)
						}
					}

					function s(t) {
						try {
							l(o.throw(t))
						} catch (t) {
							n(t)
						}
					}

					function l(t) {
						t.done ? i(t.value) : a(t.value).then(r, s)
					}
					l((o = o.apply(t, e || [])).next())
				})
			},
			a = this && this.__generator || function(t, e) {
				var i, o, a, n, r = {
					label: 0,
					sent: function() {
						if (1 & a[0]) throw a[1];
						return a[1]
					},
					trys: [],
					ops: []
				};
				return n = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
					return this
				}), n;

				function s(t) {
					return function(e) {
						return l([t, e])
					}
				}

				function l(n) {
					if (i) throw new TypeError("Generator is already executing.");
					for (; r;) try {
						if (i = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
						switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
							case 0:
							case 1:
								a = n;
								break;
							case 4:
								return r.label++, {
									value: n[1],
									done: !1
								};
							case 5:
								r.label++, o = n[1], n = [0];
								continue;
							case 7:
								n = r.ops.pop(), r.trys.pop();
								continue;
							default:
								if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
									r = 0;
									continue
								}
								if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
									r.label = n[1];
									break
								}
								if (6 === n[0] && r.label < a[1]) {
									r.label = a[1], a = n;
									break
								}
								if (a && r.label < a[2]) {
									r.label = a[2], r.ops.push(n);
									break
								}
								a[2] && r.ops.pop(), r.trys.pop();
								continue
						}
						n = e.call(t, r)
					} catch (t) {
						n = [6, t], o = 0
					} finally {
						i = a = 0
					}
					if (5 & n[0]) throw n[1];
					return {
						value: n[0] ? n[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./Common/GameUtil"),
			r = t("./Data/SD_AllSeeds"),
			s = t("./Data/GD_Role"),
			l = t("./Data/GEnums"),
			c = t("../GAchievement"),
			u = t("./Data/GD_PlayerSkin"),
			d = t("./GBattle/UIItemPop"),
			h = t("../aldSDK"),
			p = t("../config"),
			f = function() {
				function t() {}
				return t.GetGameFPS = function() {
					return t.GameFPS * t.spdScale
				}, t.GetSkillLv = function(e, i) {
					var o = 0,
						a = null;
					switch (i) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							a = t.role.story.JobLvUp;
							break;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							a = t.role.match.JobLvUp;
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							a = t.role.endless.JobLvUp
					}
					return null != a[e] && (o = a[e]), o
				}, t.SetSkillLv = function(e, i, o) {
					switch (o) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							t.role.story.JobLvUp[e] = i, c.default.UpdateUpgrade(t.role.story.JobLvUp);
							break;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							t.role.match.JobLvUp[e] = i, c.default.UpdateUpgrade(t.role.match.JobLvUp);
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							t.role.endless.JobLvUp[e] = i, c.default.UpdateUpgrade(t.role.endless.JobLvUp)
					}
				}, t.GetSkillPoint = function(e) {
					switch (e) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							return t.role.story.sklP;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							return t.role.match.sklP;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							return t.role.endless.sklP
					}
					return 0
				}, t.SetSkillPoint = function(e, i) {
					switch (i) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							t.role.story.sklP = e;
							break;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							t.role.match.sklP = e;
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							t.role.endless.sklP = e
					}
				}, t.GetAdSkillPoint = function(e) {
					switch (e) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							return t.role.story.adsklP;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							return t.role.match.adsklP;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							return t.role.endless.adsklP
					}
					return 0
				}, t.SetAdSkillPoint = function(e, i) {
					switch (i) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							t.role.story.adsklP = e;
							break;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							t.role.match.adsklP = e;
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							t.role.endless.adsklP = e
					}
				}, t.LoadAllSeeds = function(e) {
					t.allSeeds = new r.default, t.allSeeds.FromJSON(e.json), console.log("Đọc thành công số phiên bản hạt giống:" + this.allSeeds.version + "Được tạo ra:" + this.allSeeds.createTime)
				}, t.LoadAllSeeds_Debug = function() {
					cc.resources.load("Data/SD_AllSeeds", cc.JsonAsset, function(e, i) {
						t.LoadAllSeeds(i), t.LoadGame()
					})
				}, t.SaveGame = function() {
					if (t.enableSave && null != t.role) {
						t.role.saveCount++;
						var e = JSON.stringify(t.role);
						cc.sys.localStorage.setItem(t.SaveFileName, e)
					}
				}, t.LoadGame = function() {
					var e = cc.sys.localStorage.getItem(t.SaveFileName);
					if (null != e && "" != e) try {
						var i = JSON.parse(e);
						t.role = new s.default, t.role.FromJSON(i), t.role.playerSkins || (t.role.playerSkins = new u.default), console.log("==> Tải cục bộ lưu." + t.role.saveCount)
					} catch (t) {
						console.error(t), console.error("\u5b58\u6863\u8bfb\u53d6\u5931\u8d25"), this.InitRole(), console.log(" ==> \u672c\u5730\u6ca1\u6709\u5b58\u6863\uff0c\u521b\u5efa\u65b0\u7684\u5b58\u6863\u3002")
					} else this.InitRole(), this.SaveGame(), console.log(" ==> \u672c\u5730\u6ca1\u6709\u5b58\u6863\uff0c\u521b\u5efa\u65b0\u7684\u5b58\u6863\u3002");
					this.Debug()
				}, t.Debug = function() {}, t.CheckUnlockUnit = function() {
					for (var e = 0; e < t.role.storySaves.length; e++) {
						var i = t.role.storySaves[e];
						null != i && null != i.curSceneId && (i.curSceneId > 1 && (t.role.dataGather["unlock_\u5f13\u7bad\u624b"] = 1), i.curSceneId > 4 && (t.role.dataGather["unlock_\u77db\u58eb"] = 1), i.curSceneId > 6 && (t.role.dataGather["unlock_\u6cd5\u5e08"] = 1), i.curSceneId > 10 && (t.role.dataGather["unlock_\u5de8\u4eba"] = 1))
					}
				}, t.delay = function(t) {
					return o(this, void 0, void 0, function() {
						return a(this, function(e) {
							return [2, new Promise(function(e) {
								return setTimeout(e, t)
							})]
						})
					})
				}, t.InitRole = function() {
					var e = this;
					e.role = new s.default, e.role.items = {}, e.role.registerTime = (new Date).getTime(), e.role.rmb = 0, e.role.story = null, e.role.match = null, e.role.endless = null, e.role.playerSkins = new u.default, e.role.achievements = {}, e.role.storySaves = [null, null, null];
					var i = t.version,
						o = Number(i);
					o > 100 && o < 1e3 && (o *= 10), p.default.isLoginReport = !0, e.role.userVer = o;
					var a = (new Date).getTime() / 1e3;
					setTimeout(function() {
						h.default.sendEvent("\u5341\u79d2\u7edf\u8ba1", "\u65f6\u95f4/\u79d2", a.toString())
					}, 1e4), setTimeout(function() {
						h.default.sendEvent("\u4e8c\u5341\u79d2\u7edf\u8ba1", "\u65f6\u95f4/\u79d2", a.toString())
					}, 2e4), setTimeout(function() {
						h.default.sendEvent("\u4e09\u5341\u79d2\u7edf\u8ba1", "\u65f6\u95f4/\u79d2", a.toString())
					}, 3e4)
				}, t.GetItemNum = function(e) {
					null == t.role.items && (t.role.items = {});
					var i = 0;
					null != t.role.items[e] && (i = t.role.items[e]) < 0 && (i = 0, t.role.items[e] = 0);
					var o = 0;
					return null != t.tmpItems[e] && (o = t.tmpItems[e]), o < 0 && (o = 0), i + o
				}, t.AddItemNum = function(e, i, o, a) {
					if (void 0 === a && (a = !1), o) {
						var n = 0;
						null != t.tmpItems[e] && (n = t.tmpItems[e]), n += i, t.tmpItems[e] = n, console.log(t.tmpItems[e] + "--------------")
					} else {
						var r = 0;
						null != t.role.items[e] && (r = t.role.items[e]), r += i, t.role.items[e] = r
					}
					d.default.Show(e, i, a)
				}, t.SubItemNum = function(e) {
					null == t.role.items && (t.role.items = {});
					var i = 0;
					null != t.tmpItems[e] && (i = t.tmpItems[e]);
					var o = 0;
					null != t.role.items[e] && (o = t.role.items[e]), i > 0 ? (i--, t.tmpItems[e] = i) : (o--, t.role.items[e] = o)
				}, t.GetTimeTick = function(e) {
					var i = 0;
					return null != t.role.tickSaves[e] && (i = t.role.tickSaves[e]), i
				}, t.SetTimeTick = function(e, i) {
					t.role.tickSaves[e] = i
				}, t.GetShopAdNum = function(e) {
					var i = 0;
					return null != t.role.shopAd[e] && (i = t.role.shopAd[e]), i
				}, t.SetShopAdNum = function(e, i) {
					t.role.shopAd[e] = i
				}, t.GetGuide = function(e) {
					var i = 0;
					return null != t.role.guide[e] && (i = t.role.guide[e]), i
				}, t.SetGuide = function(e, i) {
					t.role.guide[e] = i
				}, t.GetData = function(e) {
					return null == t.role.dataGather ? null : t.role.dataGather[e]
				}, t.GetNumberData = function(e) {
					var i = t.GetData(e);
					return null != i ? i : 0
				}, t.AddDiamond = function(e) {
					t.role.rmb += e
				}, t.SetData = function(e, i) {
					t.role.dataGather[e] = i
				}, t.UpdateADTick = function() {
					var e = n.GameUtil.SystemDay(),
						i = e - t.role.adTick;
					if (e.toString().length != t.role.adTick.toString().length && (t.role.adTick = 0), console.log("\u4e0a\u6b21\u5237\u65b0\u65e5\u671f:" + t.role.adTick), console.log("\u5f53\u524d\u65e5\u671f:" + e), console.log("PassDay:" + i), i >= 1) {
						if (t.role.adTick = e, t.role.ADVideoCount = 0, t.role.ADStaticCount = 0, t.role.dataGather.video_free_i8 = 0, t.role.dataGather.video_free_i9 = 0, t.role.dataGather.share_1dayNum = 0, t.role.dataGather.share_2dayNum = 0, null != t.role.dataGather.playDays) {
							var o = t.role.dataGather.playDays;
							o += 1, t.role.dataGather.playDays = o
						} else t.role.dataGather.playDays = 3;
						t.role.dataGather.FuckADDayCount = 0, t.SaveGame()
					}
				}, t.spdScale = 1, t.uiPack = null, t.GameFPS = 1 / 60, t.SaveFileName = "WB09S", t.version = "100", t.enableSave = !0, t.curMode = 0, t.diff = 1, t.battleCount = 0, t.battleCount2 = 0, t.serverConfig = null, t.showLoginFuckAD = !0, t.MyMaxPeople = 50, t.tmpItems = {}, t
			}();
		i.default = f, cc._RF.pop()
	}, {
		"../GAchievement": "GAchievement",
		"../aldSDK": "aldSDK",
		"../config": "config",
		"./Common/GameUtil": "GameUtil",
		"./Data/GD_PlayerSkin": "GD_PlayerSkin",
		"./Data/GD_Role": "GD_Role",
		"./Data/GEnums": "GEnums",
		"./Data/SD_AllSeeds": "SD_AllSeeds",
		"./GBattle/UIItemPop": "UIItemPop"
	}],
	SD_Achievement: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "a247fnjPKFPSJm/9Yy30MQl", "SD_Achievement"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.name = "", this.desc = ""
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.name;
				void 0 != i && (this.name = i);
				var o = t.desc;
				void 0 != o && (this.desc = o)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_AllSeeds: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "9ab9baSDn9PhJmhyNlj0lzW", "SD_AllSeeds"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./SD_Scene"),
			a = t("./SD_Unit"),
			n = t("./SD_JobLvUp"),
			r = t("./SD_Item"),
			s = t("./SD_MatchRole"),
			l = t("./SD_MatchHead"),
			c = t("./SD_SoundDict"),
			u = t("./SD_Achievement"),
			d = t("./SD_FreeDiamond"),
			h = function() {
				function t() {
					this.version = 0, this.createTime = "", this.scenes = {}, this.endlessScenes = {}, this.matchScenes = {}, this.units = {}, this.joblvups = [], this.items = {}, this.matchroles = [], this.matchheads = [], this.soundDict = null, this.achievements = {}, this.freeDiamond = {}
				}
				return t.prototype.FromJSON = function(t) {
					var e = t.version;
					void 0 != e && (this.version = Number(e));
					var i = t.createTime;
					void 0 != i && (this.createTime = i);
					var h = t.scenes;
					if (void 0 != h)
						for (var p in this.scenes = {}, h) {
							var f = new o.default;
							f.FromJSON(h[p]), this.scenes[p] = f
						}
					var m = t.endlessScenes;
					if (void 0 != m)
						for (var p in this.endlessScenes = {}, m) {
							var v = new o.default;
							v.FromJSON(m[p]), this.endlessScenes[p] = v
						}
					var y = t.matchScenes;
					if (void 0 != y)
						for (var p in this.matchScenes = {}, y) {
							var g = new o.default;
							g.FromJSON(y[p]), this.matchScenes[p] = g
						}
					var b = t.units;
					if (void 0 != b)
						for (var p in this.units = {}, b) {
							var _ = new a.default;
							_.FromJSON(b[p]), this.units[p] = _
						}
					var S = t.joblvups;
					if (void 0 != S) {
						this.joblvups = [];
						var w = S;
						if (null != w)
							for (var D = 0; D < w.length; D++) {
								if (null != w[D])(P = new n.default).FromJSON(w[D]), this.joblvups.push(P)
							}
					}
					var G = t.items;
					if (void 0 != G)
						for (var p in this.items = {}, G) {
							var k = new r.default;
							k.FromJSON(G[p]), this.items[p] = k
						}
					var A = t.matchroles;
					if (void 0 != A) {
						this.matchroles = [];
						var I = A;
						if (null != I)
							for (D = 0; D < I.length; D++) {
								if (null != I[D])(P = new s.default).FromJSON(I[D]), this.matchroles.push(P)
							}
					}
					var B = t.matchheads;
					if (void 0 != B) {
						this.matchheads = [];
						var C = B;
						if (null != C)
							for (D = 0; D < C.length; D++) {
								var P;
								if (null != C[D])(P = new l.default).FromJSON(C[D]), this.matchheads.push(P)
							}
					}
					var U = t.soundDict;
					void 0 != U && (null != U ? (null == this.soundDict && (this.soundDict = new c.default), this.soundDict.FromJSON(U)) : this.soundDict = null);
					var M = t.achievements;
					if (void 0 != M)
						for (var p in this.achievements = {}, M) {
							var T = new u.default;
							T.FromJSON(M[p]), this.achievements[p] = T
						}
					var R = t.freeDiamond;
					if (void 0 != R)
						for (var p in this.freeDiamond = {}, R) {
							var N = new d.default;
							N.FromJSON(R[p]), this.freeDiamond[p] = N
						}
				}, t
			}();
		i.default = h, cc._RF.pop()
	}, {
		"./SD_Achievement": "SD_Achievement",
		"./SD_FreeDiamond": "SD_FreeDiamond",
		"./SD_Item": "SD_Item",
		"./SD_JobLvUp": "SD_JobLvUp",
		"./SD_MatchHead": "SD_MatchHead",
		"./SD_MatchRole": "SD_MatchRole",
		"./SD_Scene": "SD_Scene",
		"./SD_SoundDict": "SD_SoundDict",
		"./SD_Unit": "SD_Unit"
	}],
	SD_FreeDiamond: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "92a09N6uZtEQphPtpwpfGet", "SD_FreeDiamond"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.adTimes = 0, this.diamondNum = 0
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.adTimes;
				void 0 != i && (this.adTimes = Number(i));
				var o = t.diamondNum;
				void 0 != o && (this.diamondNum = Number(o))
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_Item: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "a88c3iE+CVIwYu1fnnoO/Q2", "SD_Item"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.name = "", this.desc = "", this.price = 0, this.adFreeTimes = 0, this.icon = ""
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.name;
				void 0 != i && (this.name = i);
				var o = t.desc;
				void 0 != o && (this.desc = o);
				var a = t.price;
				void 0 != a && (this.price = Number(a));
				var n = t.adFreeTimes;
				void 0 != n && (this.adFreeTimes = Number(n));
				var r = t.icon;
				void 0 != r && (this.icon = r)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_JobLvUp: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "e19737vQgxHx6Qr5aAcWw4y", "SD_JobLvUp"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.name = "", this.jobId = 0, this.maxLv = 0, this.unlocklv = 0, this.desc = ""
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.name;
				void 0 != i && (this.name = i);
				var o = t.jobId;
				void 0 != o && (this.jobId = Number(o));
				var a = t.maxLv;
				void 0 != a && (this.maxLv = Number(a));
				var n = t.unlocklv;
				void 0 != n && (this.unlocklv = Number(n));
				var r = t.desc;
				void 0 != r && (this.desc = r)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_MatchHead: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "d0f3bC1NcpOmarmM/8Z2psE", "SD_MatchHead"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.name = "", this.desc = "", this.needWinCount = 0
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.name;
				void 0 != i && (this.name = i);
				var o = t.desc;
				void 0 != o && (this.desc = o);
				var a = t.needWinCount;
				void 0 != a && (this.needWinCount = Number(a))
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_MatchRole: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "0a673PWOqpGyY5XTX8axLF8", "SD_MatchRole"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.name = "", this.skin = 0, this.startTxt = "", this.winTxt = "", this.failTxt = ""
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.name;
				void 0 != i && (this.name = i);
				var o = t.skin;
				void 0 != o && (this.skin = Number(o));
				var a = t.startTxt;
				void 0 != a && (this.startTxt = a);
				var n = t.winTxt;
				void 0 != n && (this.winTxt = n);
				var r = t.failTxt;
				void 0 != r && (this.failTxt = r)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_SceneTimeLine: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "2b5b0ZY7qROHKIZyeytM6Kh", "SD_SceneTimeLine"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.sceneId = 0, this.timeAt = 0, this.uid = 0, this.num = 0, this.team = 0, this.offX = 0, this.towerFireHpRate = 0, this.hpRate = 0, this.atkRate = 0, this.popText = "", this.popFaceId = 0
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.sceneId;
				void 0 != e && (this.sceneId = Number(e));
				var i = t.timeAt;
				void 0 != i && (this.timeAt = Number(i));
				var o = t.uid;
				void 0 != o && (this.uid = Number(o));
				var a = t.num;
				void 0 != a && (this.num = Number(a));
				var n = t.team;
				void 0 != n && (this.team = Number(n));
				var r = t.offX;
				void 0 != r && (this.offX = Number(r));
				var s = t.towerFireHpRate;
				void 0 != s && (this.towerFireHpRate = Number(s));
				var l = t.hpRate;
				void 0 != l && (this.hpRate = Number(l));
				var c = t.atkRate;
				void 0 != c && (this.atkRate = Number(c));
				var u = t.popText;
				void 0 != u && (this.popText = u);
				var d = t.popFaceId;
				void 0 != d && (this.popFaceId = Number(d))
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_Scene: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "589a5/b8RJGCot3IG7Rr8FA", "SD_Scene"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = t("./SD_SceneTimeLine"),
			a = function() {
				function t() {
					this.id = 0, this.name = "", this.ourMines = 0, this.enemyMines = 0, this.centerMines = 0, this.sceneWidth = 0, this.sceneType = 0, this.startGold = 0, this.enemyGold = 0, this.sceneBG = 0, this.ourUnits = [], this.enemyUnits = [], this.ourBuildCostTime = 0, this.enemyBuildCostTime = 0, this.enemyMaxPeople = 0, this.atkBP = 0, this.AIAttack = 0, this.AIFallback = 0, this.timeLine = [], this.startDesc = "", this.startBP = 0, this.winString = "", this.failString = "", this.rewardRMB = 0, this.unlocks = ""
				}
				return t.prototype.FromJSON = function(t) {
					var e = t.id;
					void 0 != e && (this.id = Number(e));
					var i = t.name;
					void 0 != i && (this.name = i);
					var a = t.ourMines;
					void 0 != a && (this.ourMines = Number(a));
					var n = t.enemyMines;
					void 0 != n && (this.enemyMines = Number(n));
					var r = t.centerMines;
					void 0 != r && (this.centerMines = Number(r));
					var s = t.sceneWidth;
					void 0 != s && (this.sceneWidth = Number(s));
					var l = t.sceneType;
					void 0 != l && (this.sceneType = Number(l));
					var c = t.startGold;
					void 0 != c && (this.startGold = Number(c));
					var u = t.enemyGold;
					void 0 != u && (this.enemyGold = Number(u));
					var d = t.sceneBG;
					void 0 != d && (this.sceneBG = Number(d));
					var h = t.ourUnits;
					void 0 != h && (this.ourUnits = h);
					var p = t.enemyUnits;
					void 0 != p && (this.enemyUnits = p);
					var f = t.ourBuildCostTime;
					void 0 != f && (this.ourBuildCostTime = Number(f));
					var m = t.enemyBuildCostTime;
					void 0 != m && (this.enemyBuildCostTime = Number(m));
					var v = t.enemyMaxPeople;
					void 0 != v && (this.enemyMaxPeople = Number(v));
					var y = t.atkBP;
					void 0 != y && (this.atkBP = Number(y));
					var g = t.AIAttack;
					void 0 != g && (this.AIAttack = Number(g));
					var b = t.AIFallback;
					void 0 != b && (this.AIFallback = Number(b));
					var _ = t.timeLine;
					if (void 0 != _) {
						this.timeLine = [];
						var S = _;
						if (null != S)
							for (var w = 0; w < S.length; w++)
								if (null != S[w]) {
									var D = new o.default;
									D.FromJSON(S[w]), this.timeLine.push(D)
								}
					}
					var G = t.startDesc;
					void 0 != G && (this.startDesc = G);
					var k = t.startBP;
					void 0 != k && (this.startBP = Number(k));
					var A = t.winString;
					void 0 != A && (this.winString = A);
					var I = t.failString;
					void 0 != I && (this.failString = I);
					var B = t.rewardRMB;
					void 0 != B && (this.rewardRMB = Number(B));
					var C = t.unlocks;
					void 0 != C && (this.unlocks = C)
				}, t
			}();
		i.default = a, cc._RF.pop()
	}, {
		"./SD_SceneTimeLine": "SD_SceneTimeLine"
	}],
	SD_SoundDict: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "90fa4XbHTZNjb2ygGuIkk/y", "SD_SoundDict"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.dict = {}
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.dict;
				void 0 != e && (this.dict = e)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SD_Unit: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "e4490njRslMD6E9SRC9cLzU", "SD_Unit"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.id = 0, this.name = "", this.job = 0, this.hp = 0, this.atk = 0, this.def = 0, this.spd = 0, this.atkSpd = 0, this.scanRange = 0, this.cost = 0, this.people = 0, this.costTime = 0, this.sklCD = 0, this.atkCD = 0, this.dmgRateForStatus = 0, this.closeAtk = 0, this.equipSklLvUp = 0, this.skinName = ""
			}
			return t.prototype.FromJSON = function(t) {
				var e = t.id;
				void 0 != e && (this.id = Number(e));
				var i = t.name;
				void 0 != i && (this.name = i);
				var o = t.job;
				void 0 != o && (this.job = Number(o));
				var a = t.hp;
				void 0 != a && (this.hp = Number(a));
				var n = t.atk;
				void 0 != n && (this.atk = Number(n));
				var r = t.def;
				void 0 != r && (this.def = Number(r));
				var s = t.spd;
				void 0 != s && (this.spd = Number(s));
				var l = t.atkSpd;
				void 0 != l && (this.atkSpd = Number(l));
				var c = t.scanRange;
				void 0 != c && (this.scanRange = Number(c));
				var u = t.cost;
				void 0 != u && (this.cost = Number(u));
				var d = t.people;
				void 0 != d && (this.people = Number(d));
				var h = t.costTime;
				void 0 != h && (this.costTime = Number(h));
				var p = t.sklCD;
				void 0 != p && (this.sklCD = Number(p));
				var f = t.atkCD;
				void 0 != f && (this.atkCD = Number(f));
				var m = t.dmgRateForStatus;
				void 0 != m && (this.dmgRateForStatus = Number(m));
				var v = t.closeAtk;
				void 0 != v && (this.closeAtk = Number(v));
				var y = t.equipSklLvUp;
				void 0 != y && (this.equipSklLvUp = Number(y));
				var g = t.skinName;
				void 0 != g && (this.skinName = g)
			}, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	SimpleStateMachine: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c7ca6GmvixCzYgfhPuWO8eq", "SimpleStateMachine"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.SimpleStateMachineState = void 0;
		var o = function() {
			return function(t, e, i, o, a) {
				this.enter = null, this.exit = null, this.update = null, this.thisObj = null, this.state = e, this.enter = i, this.exit = o, this.update = a, this.thisObj = t
			}
		}();
		i.SimpleStateMachineState = o;
		var a = function() {
			function t() {
				this.states = {}, this.firstUpdate = !0
			}
			return t.prototype.Register = function(t, e, i, a, n) {
				this.states[e] = new o(t, e, i, a, n)
			}, t.prototype.ChangeState = function(t) {
				null != this._curState && null != this._curState.exit && this._curState.exit.call(this._curState.thisObj), this.preState = this.curState, this.curState = t, this.firstUpdate = !0, this._curState = this.states[t], null != this._curState && null != this._curState.enter && this._curState.enter.call(this._curState.thisObj)
			}, t.prototype.Update = function() {
				null != this._curState && null != this._curState.update && this._curState.update.call(this._curState.thisObj), this.firstUpdate = !1
			}, t
		}();
		i.default = a, cc._RF.pop()
	}, {}],
	StartScene: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "80a2b1hfhBGCIaVGo1mM8LL", "StartScene");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./ADSDK"),
			r = t("./CCScripts/GBattleMapLoader"),
			s = t("./Game/Common/GAudio"),
			l = t("./Game/MainData"),
			c = t("./UI/UILoading"),
			u = t("./aldSDK"),
			d = t("./HutuiSDK"),
			h = cc._decorator,
			p = h.ccclass,
			f = h.property,
			m = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.loadingText = null, e.loadingBar = null, e.now = (new Date).getTime() / 1e3, e.steps = -1, e.plist = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					var t = cc.sys.localStorage.getItem(l.default.SaveFileName);
					null != t && "" != t || (i.new_usr = !0), i.new_usr && u.default.sendEvent("\u6253\u5f00\u6e38\u620f", "\u5f00\u59cb\u65f6\u95f4/\u79d2", this.now.toString()), this.steps = -1, this.LoadSubPackages(["Spine", "UIPacks", "sounds"], function() {
						c.default.LoadScene("GLogin"), cc.resources.load("Data/SD_AllSeeds", cc.JsonAsset, function(t, e) {
							l.default.LoadAllSeeds(e), l.default.LoadGame()
						})
					}, this), n.default.initAD(), d.default.initHt()
				}, e.prototype.update = function() {
					this.loadingBar.node.width += 1
				}, e.prototype.LoadSubPackages = function(t, e, o) {
					i.new_usr && u.default.sendEvent("\u8fdb\u5165\u52a0\u8f7d", "\u5f00\u59cb\u65f6\u95f4/\u79d2", this.now.toString()), this.plist = t, this.loadNextP(e, o)
				}, e.prototype.loadNextP = function(t, e) {
					if (this.plist.length <= 0) i.new_usr && u.default.sendEvent("\u52a0\u8f7d\u5b8c\u6210", "\u7ed3\u675f\u65f6\u95f4/\u79d2", this.now.toString()), t.call(e);
					else {
						var o = this,
							a = this.plist.pop();
						this.loadingBar.node.width = this.loadingBar.node.parent.width * this.steps / 3, this.loadingText.string = "Đang tải " + a, this.steps++;
						cc.assetManager.loadBundle(a, {}, function(i, n) {
							switch (i && console.log(i), a) {
								case "UIPacks":
									l.default.uiPack = n;
									break;
								case "sounds":
									s.default.soundsPack = n;
									break;
								case "SceneMap":
									r.default.mapPack = n
							}
							o.loadNextP(t, e)
						})
					}
				}, e.new_usr = !1, a([f(cc.Label)], e.prototype, "loadingText", void 0), a([f(cc.Sprite)], e.prototype, "loadingBar", void 0), e = i = a([p], e)
			}(cc.Component);
		i.default = m, cc._RF.pop()
	}, {
		"./ADSDK": "ADSDK",
		"./CCScripts/GBattleMapLoader": "GBattleMapLoader",
		"./Game/Common/GAudio": "GAudio",
		"./Game/MainData": "MainData",
		"./HutuiSDK": "HutuiSDK",
		"./UI/UILoading": "UILoading",
		"./aldSDK": "aldSDK"
	}],
	TogglePlus: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "33f59AMMZ9D4qVuvJmHC+JN", "TogglePlus");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e._isSelected = !1, e.selectedNode = null, e.mask = null, e.img = null, e
				}
				return o(e, t), Object.defineProperty(e.prototype, "isSelected", {
					get: function() {
						return this._isSelected
					},
					set: function(t) {
						this._isSelected = t, this.selectedNode && (this.selectedNode.active = t)
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.SetupFrame = function(t, e, i, o) {
					void 0 === i && (i = 1), void 0 === o && (o = 0);
					var a = t.page.name;
					a = a.replace(".png", "");
					for (var n = 0; n < e.length; n++)
						if (e[n].name == a) {
							this.img.spriteFrame = e[n], this.img.node.width = t.page.width, this.img.node.height = t.page.height;
							break
						} this.mask.node.angle = o, this.mask.node.scale = i, this.mask.node.width = t.originalWidth, this.mask.node.height = t.originalHeight, this.img.node.x = -t.x - .5 * t.originalWidth, this.img.node.y = t.y + .5 * t.originalHeight
				}, a([s(cc.Node)], e.prototype, "selectedNode", void 0), a([s(cc.Mask)], e.prototype, "mask", void 0), a([s(cc.Sprite)], e.prototype, "img", void 0), e = a([r], e)
			}(cc.Toggle);
		i.default = l, cc._RF.pop()
	}, {}],
	UIAchievement: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "5c991rtfxRHYLLNG/cgoag3", "UIAchievement");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("./UILoading"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.AchievementList = null, e.selectView = null, e.SingleAchievement = null, e
				}
				return o(e, t), e.prototype.start = function() {
					for (var t = 0; null != n.default.allSeeds.achievements[t];) {
						var e = cc.instantiate(this.SingleAchievement);
						e.getComponent("GSingleAchievement").Setup(t, this), this.AchievementList.content.addChild(e), t++
					}
				}, e.prototype.BTN_BACK = function() {
					r.default.LoadScene("GLogin")
				}, e.backScene = null, a([c(cc.ScrollView)], e.prototype, "AchievementList", void 0), a([c(cc.Node)], e.prototype, "selectView", void 0), a([c(cc.Prefab)], e.prototype, "SingleAchievement", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../Game/MainData": "MainData",
		"./UILoading": "UILoading"
	}],
	UIAchievemetnPop: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "6d4159QLKlIU58VUQ77HiAC", "UIAchievemetnPop");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../MainData"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.title = null, e.icon = null, e
				}
				var i;
				return o(e, t), i = e, e.Show = function(t) {
					cc.resources.load("UI/UIAchievementPop", function(e, o) {
						if (e) console.error(e);
						else {
							var a = cc.instantiate(o),
								r = a.getComponent(i),
								s = cc.find("Canvas"),
								l = s.getChildByName("Main Camera");
							r.title.string = n.default.allSeeds.achievements[t].name, cc.resources.load("uiimgs/ach" + t, cc.SpriteFrame, function(t, e) {
								t && console.log(t), r.icon.spriteFrame = e
							});
							cc.Camera.findCamera(s);
							l ? l.addChild(a) : s.addChild(a)
						}
					})
				}, e.prototype.start = function() {
					var t = this;
					cc.tween(this.node).to(2, {
						opacity: 255
					}).call(function() {
						cc.tween(t.node).to(1, {
							opacity: 0
						}).call(function() {
							t.CloseUI()
						}).start()
					}).start()
				}, e.prototype.CloseUI = function() {
					this.node.active = !1, this.node.destroy()
				}, a([l(cc.Label)], e.prototype, "title", void 0), a([l(cc.Sprite)], e.prototype, "icon", void 0), e = i = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../MainData": "MainData"
	}],
	UIArmory: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "d3bd7pT+JdAn6wkHk2zXrNH", "UIArmory");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Prefabs/GUpgradeBox"),
			r = t("../Game/MainData"),
			s = t("../Game/Data/GEnums"),
			l = t("./UILoading"),
			c = t("../Game/Actor/GUnit"),
			u = t("./Shop/UIShop"),
			d = t("../Game/Data/GD_Unit"),
			h = t("./Shop/UISkinShop"),
			p = t("../CCScripts/UIPopDialog"),
			f = t("../ADSDK"),
			m = t("./HT/HuTuiIcon"),
			v = t("../Game/GBattle/UITips"),
			y = cc._decorator,
			g = y.ccclass,
			b = y.property,
			_ = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.home = null, e.miner = null, e.swordman = null, e.archer = null, e.sparda = null, e.mage = null, e.gaint = null, e.homearcher = null, e.home_helm = null, e.home_size = null, e.home_archer = null, e.miner_bag = null, e.miner_picxace = null, e.swordman_helm = null, e.swordman_sword = null, e.archer_arrow = null, e.sparda_helm = null, e.sparda_sword = null, e.sparda_shied = null, e.mage_helm = null, e.mage_sword = null, e.gaint_size = null, e.skillDesc = null, e.sp = null, e.select = null, e.btnAdUpgrade = null, e.btnAdUpgradeOver = null, e.HutuiNode = null, e.HuTuiIcon = null, e.hutui = null, e.Box = null, e.RewardBox = null, e.selBox = null, e
				}
				return o(e, t), e.prototype.start = function() {
					this.boxs = [this.home_helm, this.home_size, this.home_archer, this.miner_bag, this.miner_picxace, this.swordman_helm, this.swordman_sword, this.archer_arrow, this.sparda_helm, this.sparda_shied, this.sparda_sword, this.mage_helm, this.mage_sword, this.gaint_size], this.jobIds = [15, 14, 13, 2, 1, 4, 3, 5, 6, 7, 8, 10, 9, 12], this.skillDesc.string = "";
					for (var t = 0; t < this.boxs.length; t++) this.boxs[t].ui = this, this.boxs[t].Setup(this.jobIds[t]), this.boxs[t].SetSelect(!1);
					this.UpdateView(), this.initPage(), this.SelectBox(this.miner_picxace)
				}, e.prototype.initPage = function() {}, e.prototype.huiTUIInit = function(t) {
					for (var e, i = this, o = 2 * (e = t.concat(t)).length, a = 0, n = e.length; a < n; a++) {
						var r = cc.instantiate(this.hutui);
						r.getComponent("HuTuiIcon").changeIconImg(e[a]), this.HutuiNode.content.addChild(r)
					}
					this.HutuiNode.scrollToRight(o, !1), this.HutuiNode.scheduleOnce(function() {
						i.onScrollEnd(i.HutuiNode, o)
					}, o / 2 + 4)
				}, e.prototype.onScrollEnd = function(t, e) {
					var i = this;
					t.content.x = 10, t.scrollToRight(e, !1), t.scheduleOnce(function() {
						i.onScrollEnd(t, e)
					}, e / 2 + 4)
				}, e.prototype.UpdateView = function() {
					for (var t = 0; t < this.boxs.length; t++) this.boxs[t].Setup(this.boxs[t].jobId);
					this.sp.string = r.default.GetSkillPoint(r.default.curMode).toFixed();
					var e = new d.default;
					e.team = 0, c.default.SetupAnim(null, s.EnumJob.tower, e, this.home), c.default.SetupAnim(this.miner, s.EnumJob.miner, e), c.default.SetupAnim(this.swordman, s.EnumJob.swordman, e), c.default.SetupAnim(this.archer, s.EnumJob.archer, e), c.default.SetupAnim(this.sparda, s.EnumJob.sparda, e), c.default.SetupAnim(this.mage, s.EnumJob.mage, e), c.default.SetupAnim(this.gaint, s.EnumJob.gaint, e), c.default.SetupAnim(this.homearcher, s.EnumJob.towerarcher, e), r.default.curMode == s.\u6a21\u5f0f.\u6545\u4e8b && (1 != r.default.role.dataGather["unlock_\u5f13\u7bad\u624b"] && (this.archer.node.active = !1, this.boxs[7].node.active = !1), 1 != r.default.role.dataGather["unlock_\u77db\u58eb"] && (this.sparda.node.active = !1, this.boxs[8].node.active = !1, this.boxs[9].node.active = !1, this.boxs[10].node.active = !1), 1 != r.default.role.dataGather["unlock_\u6cd5\u5e08"] && (this.mage.node.active = !1, this.boxs[11].node.active = !1, this.boxs[12].node.active = !1), 1 != r.default.role.dataGather["unlock_\u5de8\u4eba"] && (this.gaint.node.active = !1, this.boxs[13].node.active = !1)), r.default.GetAdSkillPoint(r.default.curMode) > 2 && (this.btnAdUpgrade.active = !1, this.btnAdUpgradeOver.active = !0)
				}, e.prototype.SelectBox = function(t) {
					for (var e = 0; e < this.boxs.length; e++) this.boxs[e].SetSelect(t == this.boxs[e]);
					var i = r.default.allSeeds.joblvups[t.jobId - 1];
					r.default.GetSkillLv(t.jobId, r.default.curMode);
					this.skillDesc.string = i.name + "\n" + i.desc, this.selBox = t, this.select.parent = t.node, this.select.x = 0, this.select.y = 0, this.select.active = !0
				}, e.prototype.BTN_Shop = function() {
					u.default.backScene = "GArmory", l.default.LoadScene("GShop")
				}, e.prototype.BTN_Skin = function() {
					h.default.backScene = "GArmory", l.default.LoadScene("GSkinShop")
				}, e.prototype.BTN_Upgrade = function() {
					if (this.selBox) {
						var t = this.selBox,
							e = r.default.GetSkillPoint(r.default.curMode),
							i = r.default.allSeeds.joblvups[t.jobId - 1],
							o = r.default.GetSkillLv(t.jobId, r.default.curMode);
						e <= 0 || (o >= i.maxLv ? v.default.Show("Kỹ năng này đã đạt đến mức cao nhất") : (r.default.SetSkillPoint(e - 1, r.default.curMode), r.default.SetSkillLv(t.jobId, o + 1, r.default.curMode), r.default.SaveGame(), this.UpdateView()))
					}
				}, e.prototype.BTN_Ad_Upgrade = function() {
					var t = r.default.GetAdSkillPoint(r.default.curMode);
					if (this.selBox && !(t > 3)) {
						var e = this.selBox,
							i = r.default.allSeeds.joblvups[e.jobId - 1];
						if (r.default.GetSkillLv(e.jobId, r.default.curMode) >= i.maxLv) v.default.Show("Kỹ năng này đã đạt đến mức cao nhất");
						else {
							var o = this;
							f.default.showVideoAD(this, function() {
								o.Ad_Upgrade()
							})
						}
					}
				}, e.prototype.Ad_Upgrade = function() {
					var t = r.default.GetAdSkillPoint(r.default.curMode),
						e = this.selBox,
						i = (r.default.allSeeds.joblvups[e.jobId - 1], r.default.GetSkillLv(e.jobId, r.default.curMode));
					(t += 1) > 2 && (this.btnAdUpgrade.active = !1, this.btnAdUpgradeOver.active = !0), r.default.SetAdSkillPoint(t, r.default.curMode), r.default.SetSkillLv(e.jobId, i + 1, r.default.curMode), this.UpdateView(), r.default.SaveGame()
				}, e.prototype.BTN_Ready = function() {
					switch (r.default.curMode) {
						case s.\u6a21\u5f0f.\u6545\u4e8b:
							r.default.GetSkillPoint(r.default.curMode) > 0 ? p.default.ShowOKCancel("Bạn vẫn còn điểm lệnh chưa sử dụng hết. Bạn có muốn tiếp tục không?", function() {
								l.default.LoadScene("GStoryMap")
							}, null, this) : l.default.LoadScene("GStoryMap");
							break;
						case s.\u6a21\u5f0f.\u6bd4\u8d5b:
						case s.\u6a21\u5f0f.\u50f5\u5c38:
							l.default.LoadScene("GBattle")
					}
				}, e.prototype.BTN_Box = function() {
					var t = cc.instantiate(this.Box);
					t.x = 0, t.y = 0, t.getComponent("GBoxReward").Setup(), this.node.parent.addChild(t)
				}, a([b(cc.Node)], e.prototype, "home", void 0), a([b(sp.Skeleton)], e.prototype, "miner", void 0), a([b(sp.Skeleton)], e.prototype, "swordman", void 0), a([b(sp.Skeleton)], e.prototype, "archer", void 0), a([b(sp.Skeleton)], e.prototype, "sparda", void 0), a([b(sp.Skeleton)], e.prototype, "mage", void 0), a([b(sp.Skeleton)], e.prototype, "gaint", void 0), a([b(sp.Skeleton)], e.prototype, "homearcher", void 0), a([b(n.default)], e.prototype, "home_helm", void 0), a([b(n.default)], e.prototype, "home_size", void 0), a([b(n.default)], e.prototype, "home_archer", void 0), a([b(n.default)], e.prototype, "miner_bag", void 0), a([b(n.default)], e.prototype, "miner_picxace", void 0), a([b(n.default)], e.prototype, "swordman_helm", void 0), a([b(n.default)], e.prototype, "swordman_sword", void 0), a([b(n.default)], e.prototype, "archer_arrow", void 0), a([b(n.default)], e.prototype, "sparda_helm", void 0), a([b(n.default)], e.prototype, "sparda_sword", void 0), a([b(n.default)], e.prototype, "sparda_shied", void 0), a([b(n.default)], e.prototype, "mage_helm", void 0), a([b(n.default)], e.prototype, "mage_sword", void 0), a([b(n.default)], e.prototype, "gaint_size", void 0), a([b(cc.Label)], e.prototype, "skillDesc", void 0), a([b(cc.Label)], e.prototype, "sp", void 0), a([b(cc.Node)], e.prototype, "select", void 0), a([b(cc.Node)], e.prototype, "btnAdUpgrade", void 0), a([b(cc.Node)], e.prototype, "btnAdUpgradeOver", void 0), a([b(cc.ScrollView)], e.prototype, "HutuiNode", void 0), a([b(m.HuTuiIcon)], e.prototype, "HuTuiIcon", void 0), a([b(cc.Prefab)], e.prototype, "hutui", void 0), a([b(cc.Prefab)], e.prototype, "Box", void 0), a([b(cc.Node)], e.prototype, "RewardBox", void 0), e = a([g], e)
			}(cc.Component);
		i.default = _, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../CCScripts/UIPopDialog": "UIPopDialog",
		"../Game/Actor/GUnit": "GUnit",
		"../Game/Data/GD_Unit": "GD_Unit",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/UITips": "UITips",
		"../Game/MainData": "MainData",
		"../Prefabs/GUpgradeBox": "GUpgradeBox",
		"./HT/HuTuiIcon": "HuTuiIcon",
		"./Shop/UIShop": "UIShop",
		"./Shop/UISkinShop": "UISkinShop",
		"./UILoading": "UILoading"
	}],
	UIBattle_Buff: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "d9ca8Q3+YVNC6hKbMvzMxJL", "UIBattle_Buff");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/GBattle/GBattle"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.label = null, e.itemId = 0, e._prevDur = 0, e
				}
				return o(e, t), e.prototype.start = function() {
					this._prevDur = -1, this.update(0)
				}, e.prototype.Show = function() {
					this.node.active = !0, this._prevDur = -1, this.update(0)
				}, e.prototype.update = function(t) {
					var e = n.default.gb;
					if (e) {
						var i = e.GetItemDuration(this.itemId);
						(i = Math.round(i)) > 0 ? this._prevDur != i && (this._prevDur = i, this.label.string = i + "s") : this.node.active = !1
					} else this.node.active = !1
				}, a([l(cc.Label)], e.prototype, "label", void 0), a([l], e.prototype, "itemId", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../Game/GBattle/GBattle": "GBattle"
	}],
	UIBattle_ContolerPad: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "a12296FYtZBibncd1C3G1pA", "UIBattle_ContolerPad");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/Data/GEnums"),
			r = t("../Game/GBattle/GBattle"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.curUnit = null, e.joyPoint = null, e.joyTouch = null, e.joyBase = null, e.btns = null, e.btnMelee = null, e.btnMine = null, e.btnArrow = null, e.btnJump = null, e.btnThrow = null, e.btnSummon = null, e.btnStun = null, e.z0 = new cc.Vec2(0, 0), e.z1 = new cc.Vec2, e._downButton = null, e.keyBtnNameForJ = "", e.keyBtnNameForK = "", e
				}
				return o(e, t), e.prototype.start = function() {
					var t = this;
					if (!this.btns) {
						this.node.active = !1, this.btns = [this.btnMelee, this.btnMine, this.btnArrow, this.btnJump, this.btnThrow, this.btnSummon, this.btnStun];
						for (var e = function() {
								var e = i.btns[o];
								e.node.on(cc.Node.EventType.TOUCH_START, function() {
									t.OnButtonDown(e)
								}, i), e.node.on(cc.Node.EventType.TOUCH_END, function() {
									t.OnButtonUp(e)
								}, i), e.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
									t.OnButtonUp(e)
								}, i), e.node.active = !1
							}, i = this, o = 0; o < this.btns.length; o++) e();
						this.joyTouch.active = !0, this.joyTouch.on(cc.Node.EventType.TOUCH_START, this.JoystickDown, this), this.joyTouch.on(cc.Node.EventType.TOUCH_MOVE, this.JoystickMove, this), this.joyTouch.on(cc.Node.EventType.TOUCH_END, this.JoystickUp, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.OnKeyUp, this)
					}
				}, e.prototype.HideAllButtons = function() {
					for (var t = 0; t < this.btns.length; t++) {
						this.btns[t].node.active = !1
					}
				}, e.prototype.Control_Unit = function(t) {
					if (this.btns || this.start(), this.node.active = !0, !this.curUnit) switch (this.curUnit = t, this.curUnit.poolObj.footStar.active = !0, this.curUnit.poolObj.headStar.active = !0, this.curUnit.UserControlMove(0, 0, !0), r.default.gb.gbRoot.cameraController.SetFollowUnit(t), this.HideAllButtons(), t.job) {
						case n.EnumJob.miner:
							this.keyBtnNameForJ = "BtnMine", this.btnMine.node.active = !0;
							break;
						case n.EnumJob.archer:
							this.keyBtnNameForJ = "BtnArrow", this.btnArrow.node.active = !0;
							break;
						case n.EnumJob.swordman:
							this.keyBtnNameForJ = "BtnMelee", this.keyBtnNameForK = "BtnJump", this.btnMelee.node.active = !0, this.btnJump.node.active = !0;
							break;
						case n.EnumJob.sparda:
							this.keyBtnNameForJ = "BtnMelee", this.keyBtnNameForK = "BtnThrow", this.btnMelee.node.active = !0, this.btnThrow.node.active = !0;
							break;
						case n.EnumJob.mage:
							this.keyBtnNameForJ = "BtnStun", this.keyBtnNameForK = "BtnSummon", this.btnStun.node.active = !0, this.btnSummon.node.active = !0;
							break;
						case n.EnumJob.gaint:
						case n.EnumJob.meric:
							this.keyBtnNameForJ = "BtnMelee", this.btnMelee.node.active = !0
					}
				}, e.prototype.Free_Unit = function() {
					this.curUnit && (this.curUnit.poolObj.footStar.active = !1, this.curUnit.poolObj.headStar.active = !1, this.curUnit = null, this.node.active = !1, this._downButton = null, r.default.gb.gbRoot.cameraController.SetFollowUnit(null))
				}, e.prototype.SetJoyPoint = function(t, e) {
					this.z1.x = t, this.z1.y = e, cc.Vec2.squaredDistance(this.z0, this.z1) > 6400 && (this.z1.normalize(this.z1), this.z1.x *= 80, this.z1.y *= 80), this.joyPoint.x = this.z1.x, this.joyPoint.y = this.z1.y
				}, e.prototype.JoystickDown = function(t) {
					this.SetJoyPoint(t.touch._point.x - 150, t.touch._point.y - 150)
				}, e.prototype.JoystickMove = function(t) {
					this.SetJoyPoint(t.touch._point.x - 150, t.touch._point.y - 150)
				}, e.prototype.JoystickUp = function(t) {
					this.joyPoint.x = 0, this.joyPoint.y = 0, this.z1.x = 0, this.z1.y = 0, this.curUnit && this.curUnit.UserControlMove(0, 0, !0)
				}, e.prototype.update = function() {
					if (this.curUnit) {
						var t = this.curUnit;
						if (0 == this.z1.x && 0 == this.z1.y || this.curUnit.UserControlMove(this.z1.x, this.z1.y, !1), t) {
							switch (this._downButton) {
								case "BtnArrow":
									t.User_Shoot();
									break;
								case "BtnMine":
									t.User_Mine();
									break;
								case "BtnMelee":
									t.User_Atk();
									break;
								case "BtnStun":
									if (this.curUnit.sd.job == n.EnumJob.mage) {
										t.User_Atk();
										break
									}
									if (this.curUnit.sd.job == n.EnumJob.gaint) {
										t.User_Skill();
										break
									}
									break;
								case "BtnJump":
								case "BtnThrow":
								case "BtnSummon":
									t.User_Skill()
							}
							t.UserControlUpdate && t.UserControlUpdate()
						} else console.log("this.curUnit", this.curUnit)
					}
				}, e.prototype.UpdateButtonCD = function(t, e) {
					t.node.children[0].height = 200 * e
				}, e.prototype.OnButtonDown = function(t) {
					this._downButton = t.node.name
				}, e.prototype.OnButtonUp = function(t) {
					this._downButton = null
				}, e.prototype.OnKeyDown = function(t) {
					switch (t.keyCode) {
						case cc.macro.KEY.w:
							this.SetJoyPoint(this.z1.x, 70);
							break;
						case cc.macro.KEY.a:
							this.SetJoyPoint(-70, this.z1.y);
							break;
						case cc.macro.KEY.s:
							this.SetJoyPoint(this.z1.x, -70);
							break;
						case cc.macro.KEY.d:
							this.SetJoyPoint(70, this.z1.y);
							break;
						case cc.macro.KEY.j:
							this._downButton = this.keyBtnNameForJ;
							break;
						case cc.macro.KEY.k:
							this._downButton = this.keyBtnNameForK
					}
				}, e.prototype.OnKeyUp = function(t) {
					switch (t.keyCode) {
						case cc.macro.KEY.w:
							this.SetJoyPoint(this.z1.x, 0), 0 === this.z1.x && this.curUnit && this.curUnit.UserControlMove(0, 0, !0);
							break;
						case cc.macro.KEY.a:
							this.SetJoyPoint(0, this.z1.y), 0 === this.z1.y && this.curUnit && this.curUnit.UserControlMove(0, 0, !0);
							break;
						case cc.macro.KEY.s:
							this.SetJoyPoint(this.z1.x, 0), 0 === this.z1.x && this.curUnit && this.curUnit.UserControlMove(0, 0, !0);
							break;
						case cc.macro.KEY.d:
							this.SetJoyPoint(0, this.z1.y), 0 === this.z1.y && this.curUnit && this.curUnit.UserControlMove(0, 0, !0)
					}
					this._downButton = null
				}, a([c(cc.Node)], e.prototype, "joyPoint", void 0), a([c(cc.Node)], e.prototype, "joyTouch", void 0), a([c(cc.Node)], e.prototype, "joyBase", void 0), a([c(cc.Button)], e.prototype, "btnMelee", void 0), a([c(cc.Button)], e.prototype, "btnMine", void 0), a([c(cc.Button)], e.prototype, "btnArrow", void 0), a([c(cc.Button)], e.prototype, "btnJump", void 0), a([c(cc.Button)], e.prototype, "btnThrow", void 0), a([c(cc.Button)], e.prototype, "btnSummon", void 0), a([c(cc.Button)], e.prototype, "btnStun", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle"
	}],
	UIBattle_EndlessView: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "fcc0b+Lf45AF5F7rb8985fM", "UIBattle_EndlessView");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/Actor/GUnit"),
			r = t("../Game/Data/GEnums"),
			s = t("../Game/MainData"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.cellSeed = null, e
				}
				return o(e, t), e.prototype.Show = function() {
					this.node.active = !0, this.cellSeed.active = !1;
					for (var t = s.default.role.endless.units, e = {}, i = {}, o = 0; o < t.length; o++) {
						e[(l = t[o]).sdId] || (e[l.sdId] = 0);
						var a = e[l.sdId] + 1;
						e[l.sdId] = a, i[l.sdId] = l
					}
					for (var n in e) {
						var l = i[n];
						a = e[n];
						l.sdId != r.EnumJob.tower && this._createCell(l.sdId, a)
					}
				}, e.prototype._createCell = function(t, e) {
					var i = cc.instantiate(this.cellSeed);
					i.parent = this.cellSeed.parent, i.active = !0;
					var o = i.children[0],
						a = i.children[1],
						s = i.children[2],
						l = i.children[3];
					o.active = !1, a.active = !1, s.active = !1;
					var c = null;
					switch (l.getComponent(cc.Label).string = "x" + e, t) {
						case 14:
						case r.EnumJob.gaint:
							a.active = !0, c = a.getComponent(sp.Skeleton);
							break;
						case r.EnumJob.meric:
							c = s.getComponent(sp.Skeleton), s.active = !0;
							break;
						default:
							o.active = !0, c = o.getComponent(sp.Skeleton)
					}
					switch (t) {
						case r.EnumJob.miner:
							c.setSkin("Miner"), c.setAnimation(0, "Miner-Stand1", !0), n.default.SetupAnim(c, t, null, null, r.\u6a21\u5f0f.\u50f5\u5c38, !0);
							break;
						case r.EnumJob.swordman:
							c.setSkin("Swordwrath"), c.setAnimation(0, "Swordwrath-Stand1", !0), n.default.SetupAnim(c, t, null, null, r.\u6a21\u5f0f.\u50f5\u5c38, !0);
							break;
						case r.EnumJob.archer:
							c.setSkin("Archidon"), c.setAnimation(0, "Archidon-Stand1", !0), n.default.SetupAnim(c, t, null, null, r.\u6a21\u5f0f.\u50f5\u5c38, !0);
							break;
						case r.EnumJob.sparda:
							c.setSkin("Spearton"), c.setAnimation(0, "Spearton-Stand1", !0), n.default.SetupAnim(c, t, null, null, r.\u6a21\u5f0f.\u50f5\u5c38, !0);
							break;
						case r.EnumJob.mage:
							c.setSkin("Magikill"), c.setAnimation(0, "Magikill-Stand", !0), n.default.SetupAnim(c, t, null, null, r.\u6a21\u5f0f.\u50f5\u5c38, !0);
							break;
						case r.EnumJob.gaint:
							c.setSkin("Giant"), c.setAnimation(0, "Giant-Stand", !0), n.default.SetupAnim(c, t, null, null, r.\u6a21\u5f0f.\u50f5\u5c38, !0);
							break;
						case 11:
							c.setSkin("Spearton"), c.setAnimation(0, "Spearton-Stand1", !0);
							break;
						case 12:
							c.setSkin("Archidon"), c.setAnimation(0, "Archidon-Stand1", !0);
							break;
						case 14:
							c.setSkin("Giant"), c.setAnimation(0, "Giant-Stand", !0), n.default.SetupAnimByPlayerSkins(r.EnumJob.gaint, 3, c, "weapon", "skins/purple/giant-purple/giant_club_purple-3"), n.default.SetupAnimByPlayerSkins(r.EnumJob.gaint, 3, c, "giant-helm", "skins/purple/giant-purple/giant_helm_purple-3");
							break;
						case 83:
							c.setSkin("Spearton"), c.setAnimation(0, "Spearton-Stand1", !0);
							break;
						case r.EnumJob.meric:
							c.setAnimation(0, "Magikill-Stand1", !0);
							break;
						default:
							console.error("\u672a\u77e5JOB", t)
					}
				}, a([u(cc.Node)], e.prototype, "cellSeed", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../Game/Actor/GUnit": "GUnit",
		"../Game/Data/GEnums": "GEnums",
		"../Game/MainData": "MainData"
	}],
	UIBattle_Lose: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "3bd01SNBR9EarI9Fx9gfS2K", "UIBattle_Lose");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/GBattle/GBattle"),
			r = t("../Game/MainData"),
			s = t("../Game/Data/GEnums"),
			l = t("../Game/Common/GameUtil"),
			c = t("../UI/UILoading"),
			u = t("../UI/Match/UIMatch"),
			d = t("../UI/Endless/UIEndless"),
			h = t("../aldSDK"),
			p = cc._decorator,
			f = p.ccclass,
			m = p.property,
			v = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewStory = null, e.lDesc = null, e.Auth = null, e
				}
				return o(e, t), e.prototype.Show = function(t) {
					this.viewStory.active = !1;
					l.GameUtil.GetDay(r.default.role.registerTime), l.GameUtil.GetDay(r.default.role.startTime), Math.floor((new Date).getTime() - r.default.role.startTime);
					switch (r.default.curMode) {
						case s.\u6a21\u5f0f.\u6545\u4e8b:
							this.node.active = !0, this.viewStory.active = !0;
							var e = r.default.role.story,
								i = r.default.allSeeds.scenes[t.sd.id];
							if (this.lDesc.string = i.failString, e.curSceneId, 1 == e.curSceneId && 0 == r.default.role.Auth) {
								var o = cc.instantiate(this.Auth);
								o.x = 0, o.y = 0, o.getComponent("GAuth").Setup(), this.node.parent.addChild(o)
							}
							e.curSceneId, h.default.stageEnd(r.default.role.story.curSceneId, "\u7ecf\u5178\u6a21\u5f0f", !1);
							break;
						case s.\u6a21\u5f0f.\u50f5\u5c38:
							d.default.BattleFailed = !0, r.default.role.endless.curSceneId, h.default.stageEnd(r.default.role.endless.curSceneId, "\u65e0\u5c3d\u6a21\u5f0f", !1), c.default.LoadScene("GEndless");
							break;
						case s.\u6a21\u5f0f.\u6bd4\u8d5b:
							this.node.active = !1;
							var a = "";
							r.default.allSeeds.matchroles[u.default.enemyIdx] ? a = r.default.allSeeds.matchroles[u.default.enemyIdx].winTxt : (console.log("UIMatch.enemyIdx", u.default.enemyIdx), a = "");
							var p = !1,
								f = this;
							n.default.gb.ui.PopDialog(a, 3, u.default.enemyIdx, function() {
								p || (p = !0, f.LoadMatchScene())
							}, f), h.default.stageEnd(r.default.role.match.currentStep, "\u7ade\u8d5b\u6a21\u5f0f", !1), setTimeout(function() {
								p || (n.default.gb.ui.BTN_HidePopDialog(), p = !0, f.LoadMatchScene())
							}, 3e3)
					}
				}, e.prototype.LoadMatchScene = function() {
					u.default.isBattleFail = !0, c.default.LoadScene("GMatch")
				}, e.prototype.BTN_ResetGame = function() {
					c.default.LoadScene("GBattle")
				}, e.prototype.BTN_Home = function() {
					c.default.LoadScene("GLogin")
				}, e.prototype.BTN_Shop = function() {
					n.default.gb.ui.BTN_Shop()
				}, a([m(cc.Node)], e.prototype, "viewStory", void 0), a([m(cc.Label)], e.prototype, "lDesc", void 0), a([m(cc.Prefab)], e.prototype, "Auth", void 0), e = a([f], e)
			}(cc.Component);
		i.default = v, cc._RF.pop()
	}, {
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/MainData": "MainData",
		"../UI/Endless/UIEndless": "UIEndless",
		"../UI/Match/UIMatch": "UIMatch",
		"../UI/UILoading": "UILoading",
		"../aldSDK": "aldSDK"
	}],
	UIBattle_Pause: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "546d64QT35GbaNiEmACyUiy", "UIBattle_Pause");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../aldSDK"),
			r = t("../Game/Common/GameUtil"),
			s = t("../Game/Common/GAudio"),
			l = t("../Game/Data/GEnums"),
			c = t("../Game/GBattle/GBattle"),
			u = t("../Game/MainData"),
			d = t("../UI/Endless/UIEndless"),
			h = t("../UI/Match/UIMatch"),
			p = t("../UI/UILoading"),
			f = cc._decorator,
			m = f.ccclass,
			v = f.property,
			y = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.togMusic = null, e.togSound = null, e.modes = [], e
				}
				return o(e, t), e.prototype.Show = function() {
					this.node.active = !0, c.default.gb.PauseGame(!0);
					for (var t = 0; t < this.modes.length; t++) this.modes[t].active = t == u.default.curMode;
					this.UpdateView()
				}, e.prototype.UpdateView = function() {
					this.togMusic.isChecked = s.default.bgmOn, this.togSound.isChecked = s.default.soundOn
				}, e.prototype.BTN_Music = function() {
					s.default.bgmOn = !s.default.bgmOn, s.default.bgmOn ? s.default.ResumeBGM() : s.default.PauseBGM(), this.UpdateView()
				}, e.prototype.BTN_Sound = function() {
					s.default.soundOn = !s.default.soundOn, this.UpdateView()
				}, e.prototype.BTN_Hide = function() {
					c.default.gb.PauseGame(!1), this.node.active = !1
				}, e.prototype.BTN_Exit = function() {
					c.default.gb.PauseGame(!1);
					r.GameUtil.GetDay(u.default.role.registerTime), r.GameUtil.GetDay(u.default.role.startTime), Math.floor((new Date).getTime() - u.default.role.startTime);
					switch (u.default.curMode) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							u.default.role.story.curSceneId, n.default.stageEnd(u.default.role.story.curSceneId, "\u7ecf\u5178\u6a21\u5f0f", !1), p.default.LoadScene("GStoryMap");
							break;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							h.default.isBattleFail = !0, n.default.stageEnd(u.default.role.match.currentStep, "\u7ade\u8d5b\u6a21\u5f0f", !1), p.default.LoadScene("GMatch");
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							u.default.role.endless.curSceneId, n.default.stageEnd(u.default.role.endless.curSceneId, "\u65e0\u5c3d\u6a21\u5f0f", !1), p.default.LoadScene("GEndless")
					}
				}, e.prototype.BTN_Aband = function() {
					switch (c.default.gb.PauseGame(!1), u.default.curMode) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							d.default.BattleFailed = !0, n.default.stageEnd(u.default.role.endless.curSceneId, "\u65e0\u5c3d\u6a21\u5f0f", !1), p.default.LoadScene("GEndless")
					}
				}, e.prototype.BTN_Restart = function() {
					switch (c.default.gb.PauseGame(!1), u.default.curMode) {
						case l.\u6a21\u5f0f.\u6545\u4e8b:
							n.default.stageEnd(u.default.role.story.curSceneId, "\u7ecf\u5178\u6a21\u5f0f", !1, !0);
							break;
						case l.\u6a21\u5f0f.\u6bd4\u8d5b:
							n.default.stageEnd(u.default.role.match.currentStep, "\u7ade\u8d5b\u6a21\u5f0f", !1, !0);
							break;
						case l.\u6a21\u5f0f.\u50f5\u5c38:
							n.default.stageEnd(u.default.role.endless.curSceneId, "\u65e0\u5c3d\u6a21\u5f0f", !1, !0)
					}
					p.default.LoadScene("GBattle")
				}, a([v(cc.Toggle)], e.prototype, "togMusic", void 0), a([v(cc.Toggle)], e.prototype, "togSound", void 0), a([v([cc.Node])], e.prototype, "modes", void 0), e = a([m], e)
			}(cc.Component);
		i.default = y, cc._RF.pop()
	}, {
		"../Game/Common/GAudio": "GAudio",
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/MainData": "MainData",
		"../UI/Endless/UIEndless": "UIEndless",
		"../UI/Match/UIMatch": "UIMatch",
		"../UI/UILoading": "UILoading",
		"../aldSDK": "aldSDK"
	}],
	UIBattle_Win: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "d009aoZTWtBMKQ6ugKSsoGb", "UIBattle_Win");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/MainData"),
			r = t("../Game/Data/GEnums"),
			s = t("../Game/Common/GameUtil"),
			l = t("../Game/GBattle/GBattle"),
			c = t("../UI/UILoading"),
			u = t("../UI/UIStoryMap"),
			d = t("../UI/Match/UIMatch"),
			h = t("../UI/UIStoryWin"),
			p = t("../GAchievement"),
			f = t("../ADSDK"),
			m = t("../Game/GBattle/UIItemPop"),
			v = t("../aldSDK"),
			y = cc._decorator,
			g = y.ccclass,
			b = y.property,
			_ = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewStory = null, e.viewEndless = null, e.lDesc = null, e.lRMB = null, e.lTIME = null, e.lDesc2 = null, e.lRMB2 = null, e.lTIME2 = null, e.gem = null, e.lTimes = null, e.bar = null, e.btnOKStory = null, e.btnOKEndless = null, e.btnfetchEx = null, e.Auth = null, e.rmb = 0, e
				}
				return o(e, t), e.prototype.Show = function(t) {
					var e = this;
					this.node.active = !0, this.viewStory.active = !1, this.viewEndless.active = !1;
					s.GameUtil.GetDay(n.default.role.registerTime), s.GameUtil.GetDay(n.default.role.startTime), Math.floor((new Date).getTime() - n.default.role.startTime);
					switch (n.default.curMode) {
						case r.\u6a21\u5f0f.\u6545\u4e8b:
							v.default.stageEnd(n.default.role.story.curSceneId, "\u7ecf\u5178\u6a21\u5f0f", !0), this.viewStory.active = !0;
							var i = n.default.role.story,
								o = n.default.allSeeds.scenes[t.sd.id];
							if (n.default.role.winAdNum < 3 && (n.default.role.winAdNum += 1), this.lDesc.string = o.winString, this.lRMB.string = o.rewardRMB.toFixed(0), this.lTIME.string = s.GameUtil.FormatTime_HHMMSS(1e3 * t.currTime), this.lTimes.string = n.default.role.winAdNum.toString(), this.bar.node.width = this.bar.node.parent.width * n.default.role.winAdNum / 3, i.curSceneId, i.curSceneId <= 12 && i.curSceneId++, i.sklP += 2, i.adsklP = 0, i.useSeconds += t.currTime, n.default.role.rmb += o.rewardRMB, this.rmb = o.rewardRMB, i.curSceneId > 12) {
								switch (i.diff) {
									case 1:
										p.default.FireAchievement(p.EnumAchie.easypass), 1 != n.default.role.matchModel && (n.default.role.matchModel = 1);
										break;
									case 2:
										p.default.FireAchievement(p.EnumAchie.normalpass), 1 != n.default.role.endlessModel && (n.default.role.endlessModel = 1);
										break;
									case 3:
										p.default.FireAchievement(p.EnumAchie.hardpass)
								}
								i.JobLvUp == [] && p.default.FireAchievement(p.EnumAchie.noup)
							}
							e.Show_Btn("\u6545\u4e8b");
							break;
						case r.\u6a21\u5f0f.\u50f5\u5c38:
							v.default.stageEnd(n.default.role.endless.curSceneId, "\u65e0\u5c3d\u6a21\u5f0f", !0), this.viewEndless.active = !0;
							var a = t.killCount,
								c = n.default.role.endless.killCount,
								u = "\u4eca\u665a\u6740\u6b7b " + a.toFixed() + " \u4e2a\u50f5\u5c38\n\u4e00\u5171\u6740\u6b7b " + c.toFixed() + " \u4e2a\u50f5\u5c38(\u603b\u6570)";
							this.lDesc2.string = u, this.lRMB2.string = "20", this.lTIME2.string = s.GameUtil.FormatTime_HHMMSS(1e3 * t.currTime), n.default.role.endless.units = [];
							for (var h = 0; h < l.default.gb.units.length; h++) {
								var f = l.default.gb.units[h];
								if (!f.IsDead() && 0 == f.gd.team) switch (f.job) {
									case r.EnumJob.miner:
									case r.EnumJob.swordman:
									case r.EnumJob.archer:
									case r.EnumJob.sparda:
									case r.EnumJob.mage:
									case r.EnumJob.gaint:
									case r.EnumJob.meric:
									case r.EnumJob.tower:
										n.default.role.endless.units.push(f.gd)
								}
							}
							switch (n.default.role.endless.curSceneId > n.default.role.endless.passDay && (n.default.role.endless.passDay = n.default.role.endless.curSceneId, n.default.role.endlessdays = n.default.role.endless.passDay), n.default.role.endless.sklP += 2, n.default.role.endless.adsklP = 0, n.default.role.endless.curSceneId, n.default.role.endless.curSceneId++, n.default.role.rmb += 20, this.rmb = 20, n.default.role.endless.curSceneId) {
								case 1:
									p.default.FireAchievement(p.EnumAchie.endless1);
									break;
								case 5:
									p.default.FireAchievement(p.EnumAchie.endless5);
									break;
								case 10:
									p.default.FireAchievement(p.EnumAchie.endless10);
									break;
								case 20:
									p.default.FireAchievement(p.EnumAchie.endless20);
									break;
								case 100:
									p.default.FireAchievement(p.EnumAchie.endless100);
									break;
								case 1e3:
									p.default.FireAchievement(p.EnumAchie.endless1000)
							}
							e.Show_Btn("\u50f5\u5c38");
							break;
						case r.\u6a21\u5f0f.\u6bd4\u8d5b:
							v.default.stageEnd(n.default.role.match.currentStep, "\u7ade\u8d5b\u6a21\u5f0f", !0), this.node.active = !1;
							var m = "";
							n.default.allSeeds.matchroles[d.default.enemyIdx] ? m = n.default.allSeeds.matchroles[d.default.enemyIdx].failTxt : (console.log("UIMatch.enemyIdx", d.default.enemyIdx), m = "");
							var y = !1;
							if (n.default.role.match.currentStep++, n.default.role.match.matchMode = s.GameUtil.RandomRangeInt(1, 5), n.default.role.match.adsklP = 0, 4 == n.default.role.match.currentStep) {
								switch (n.default.role.match.diff) {
									case 1:
										p.default.FireAchievement(p.EnumAchie.matcheasy), n.default.role.matchHistory[0]++;
										break;
									case 2:
										p.default.FireAchievement(p.EnumAchie.matchnormal), n.default.role.matchHistory[1]++;
										break;
									case 3:
										p.default.FireAchievement(p.EnumAchie.matchhard), n.default.role.matchHistory[2]++
								}
								switch (n.default.role.matchHistory[0] + n.default.role.matchHistory[1] + n.default.role.matchHistory[2]) {
									case 1:
										p.default.FireAchievement(p.EnumAchie.unlockarcher);
										break;
									case 2:
										p.default.FireAchievement(p.EnumAchie.unlocksparda);
										break;
									case 5:
										p.default.FireAchievement(p.EnumAchie.unlockmage);
										break;
									case 9:
										p.default.FireAchievement(p.EnumAchie.unloadgaint), p.default.FireAchievement(p.EnumAchie.unlockallhead)
								}
							}
							l.default.gb.ui.PopDialog(m, 3, d.default.enemyIdx, function() {
								y || (y = !0, e.LoadMatchScene())
							}, e), setTimeout(function() {
								y || (l.default.gb.ui.BTN_HidePopDialog(), y = !0, e.LoadMatchScene())
							}, 3e3)
					}
					this.initPage(), n.default.SaveGame()
				}, e.prototype.initPage = function() {}, e.prototype.LoadMatchScene = function() {
					d.default.isBattleWin = !0, c.default.LoadScene("GMatch")
				}, e.prototype.Show_Btn = function(t) {
					switch (t) {
						case "\u6545\u4e8b":
							this.btnOKStory.active = !0;
							break;
						case "\u50f5\u5c38":
							this.btnOKEndless.active = !0
					}
				}, e.prototype.BTN_Home = function() {
					switch (n.default.curMode) {
						case r.\u6a21\u5f0f.\u6545\u4e8b:
							u.default.showAnim = !0;
							var t = n.default.role.story.curSceneId - 1;
							if (1 == t && 1 != n.default.role.dataGather["unlock_\u5f13\u7bad\u624b"]) l.default.gb.ui.uiUnlock.node.active = !0, n.default.role.dataGather["unlock_\u5f13\u7bad\u624b"] = 1, l.default.gb.ui.uiUnlock.Show(r.EnumUnit.archer3);
							else if (4 == t && 1 != n.default.role.dataGather["unlock_\u77db\u58eb"]) l.default.gb.ui.uiUnlock.node.active = !0, n.default.role.dataGather["unlock_\u77db\u58eb"] = 1, l.default.gb.ui.uiUnlock.Show(r.EnumUnit.sparda4);
							else if (6 == t && 1 != n.default.role.dataGather["unlock_\u6cd5\u5e08"]) l.default.gb.ui.uiUnlock.node.active = !0, n.default.role.dataGather["unlock_\u6cd5\u5e08"] = 1, l.default.gb.ui.uiUnlock.Show(r.EnumUnit.mage5);
							else if (10 == t && 1 != n.default.role.dataGather["unlock_\u5de8\u4eba"]) l.default.gb.ui.uiUnlock.node.active = !0, n.default.role.dataGather["unlock_\u5de8\u4eba"] = 1, l.default.gb.ui.uiUnlock.Show(r.EnumUnit.gaint6);
							else if (12 == t) {
								switch (n.default.diff) {
									case 1:
										h.default.txtDiff = "\u96be\u5ea6  \u666e\u901a";
										break;
									case 2:
										h.default.txtDiff = "\u96be\u5ea6  \u56f0\u96be";
										break;
									case 3:
										h.default.txtDiff = "\u96be\u5ea6  \u5730\u72f1"
								}
								h.default.txtTime = "\u65f6\u95f4  " + s.GameUtil.FormatTime_HHMMSS(1e3 * n.default.role.story.useSeconds), c.default.LoadScene("GStoryWin")
							} else 12 == t ? c.default.LoadScene("GStoryMap") : c.default.LoadScene("GArmory");
							break;
						case r.\u6a21\u5f0f.\u6bd4\u8d5b:
							c.default.LoadScene("GMatch");
							break;
						case r.\u6a21\u5f0f.\u50f5\u5c38:
							c.default.LoadScene("GEndless")
					}
					n.default.SaveGame()
				}, e.prototype.BTN_Ad_Home = function() {
					var t = this;
					f.default.showVideoAD(this, function() {
						t.Ad_Home()
					})
				}, e.prototype.Ad_Home = function() {
					n.default.role.rmb += this.rmb, m.default.Show(0, this.rmb, !0), n.default.SaveGame(), this.BTN_Home()
				}, e.prototype.BTN_Fetch_Ex = function() {
					if (n.default.role.winAdNum >= 3) {
						var t = this;
						f.default.showVideoAD(this, function() {
							t.Fetch_Ex()
						})
					}
				}, e.prototype.Fetch_Ex = function() {
					n.default.role.rmb += 300, n.default.role.winAdNum = 0, this.bar.node.width = 0, this.lTimes.string = "0", this.btnfetchEx.active = !1, m.default.Show(0, 300, !0), n.default.SaveGame()
				}, a([b(cc.Node)], e.prototype, "viewStory", void 0), a([b(cc.Node)], e.prototype, "viewEndless", void 0), a([b(cc.Label)], e.prototype, "lDesc", void 0), a([b(cc.Label)], e.prototype, "lRMB", void 0), a([b(cc.Label)], e.prototype, "lTIME", void 0), a([b(cc.Label)], e.prototype, "lDesc2", void 0), a([b(cc.Label)], e.prototype, "lRMB2", void 0), a([b(cc.Label)], e.prototype, "lTIME2", void 0), a([b(cc.Sprite)], e.prototype, "gem", void 0), a([b(cc.Label)], e.prototype, "lTimes", void 0), a([b(cc.Sprite)], e.prototype, "bar", void 0), a([b(cc.Node)], e.prototype, "btnOKStory", void 0), a([b(cc.Node)], e.prototype, "btnOKEndless", void 0), a([b(cc.Node)], e.prototype, "btnfetchEx", void 0), a([b(cc.Prefab)], e.prototype, "Auth", void 0), e = a([g], e)
			}(cc.Component);
		i.default = _, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../GAchievement": "GAchievement",
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData",
		"../UI/Match/UIMatch": "UIMatch",
		"../UI/UILoading": "UILoading",
		"../UI/UIStoryMap": "UIStoryMap",
		"../UI/UIStoryWin": "UIStoryWin",
		"../aldSDK": "aldSDK"
	}],
	UIBattle: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "fcf56jY4z5MT40zF0jUNuFO", "UIBattle");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/GBattle/GBattle"),
			r = t("../Game/MainData"),
			s = t("../Game/Data/GEnums"),
			l = t("./UIBattle_Win"),
			c = t("./UIBattle_Lose"),
			u = t("./UIBattle_Pause"),
			d = t("./UIBattle_ContolerPad"),
			h = t("../UI/Shop/UIShop"),
			p = t("./UIUnlock"),
			f = t("./UIBattle_Buff"),
			m = t("./UIBattle_EndlessView"),
			v = t("../Guide/UIGuideView"),
			y = t("../UI/Match/UIMatch"),
			g = t("../Game/Common/GAudio"),
			b = t("../ADSDK"),
			_ = t("../Game/GBattle/UIItemPop"),
			S = t("../config"),
			w = t("../UI/HT/HuTuiIcon"),
			D = cc._decorator,
			G = D.ccclass,
			k = D.property,
			A = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.txtMoney = null, e.txtPeople = null, e.uiTextLayer = null, e.popTextSeed = null, e.popNumberSeed = null, e.iconGold = null, e.uiPause = null, e.uiWin = null, e.uiLose = null, e.playerPad = null, e.uiUnlock = null, e.btnMiner = null, e.btnCubeman = null, e.btnSwordwrath = null, e.btnArchidon = null, e.btnSpeartan = null, e.btmMagikill = null, e.btnGiant = null, e.uishop = null, e.spellRoot = null, e.tableDesc = null, e.FreeBattle = null, e.FreeSkin = null, e.storydesc = null, e.storydesc_title = null, e.storydesc_context = null, e.viewEndless = null, e.popDialog = null, e.popDialogHead = null, e.guideView = null, e.uibuffs = [], e.items = [], e.btnAdRes = null, e.AdRes = null, e.btnAdBattle = null, e.AdBattle = null, e.btnPass = null, e.HutuiNode = null, e.btnHide = null, e.NativeAd = null, e.btns = {}, e.title = null, e.desc = null, e.fetched = !1, e.is_skined = !1, e.ori_skin = 0, e._spaction = null, e._showSpell = !1, e._onPopDlgClose = null, e._onPopDlgCaller = null, e._popDuration = 0, e._redAlert = null, e._btn_queue = {}, e._btn_cancel = {}, e._btn_cd = {}, e.hurtPool = [], e.is_AdRes = !1, e.is_AdBattle = !1, e.start_AdRes = !1, e.start_AdBattle = !1, e
				}
				var i;
				return o(e, t), i = e, e.prototype.SetData = function(t, e) {
					if (this.uiUnlock.node.active = !1, this.gdTeam = t, this.units = e, this.popTextSeed.node.active = !1, this.popNumberSeed.node.active = !1, this.uiWin.node.active = !1, this.uiLose.node.active = !1, this.uiPause.node.active = !1, this.viewEndless.node.active = !1, this.guideView.node.active = !1, this.FreeBattle.active = !1, this.FreeSkin.active = !1, this.btnAdRes.active = !1, this.AdRes.active = !1, this.btnAdBattle.active = !1, this.AdBattle.active = !1, this.btnMiner.active = e.indexOf(s.EnumUnit.miner1) >= 0, this.btns[s.EnumUnit.miner1] = this.btnMiner, this.btnCubeman.active = e.indexOf(s.EnumUnit.swordman2) >= 0, this.btnSwordwrath.active = e.indexOf(s.EnumUnit.swordman2) >= 0, this.btnCubeman.active) {
						var i = !1;
						r.default.role.story && (i = t.JobLvUp[s.EnumSkill.Swordman_sword] > 0 || r.default.role.story.curSceneId > 3), this.btnCubeman.active = !i, this.btnSwordwrath.active = i
					}
					for (var o in this.btns[s.EnumUnit.swordman2] = this.btnCubeman.active ? this.btnCubeman : this.btnSwordwrath, this.btnArchidon.active = e.indexOf(s.EnumUnit.archer3) >= 0, this.btns[s.EnumUnit.archer3] = this.btnArchidon, this.btnSpeartan.active = e.indexOf(s.EnumUnit.sparda4) >= 0, this.btns[s.EnumUnit.sparda4] = this.btnSpeartan, this.btmMagikill.active = e.indexOf(s.EnumUnit.mage5) >= 0, this.btns[s.EnumUnit.mage5] = this.btmMagikill, this.btnGiant.active = e.indexOf(s.EnumUnit.gaint6) >= 0, this.btns[s.EnumUnit.gaint6] = this.btnGiant, this.btns) {
						var a = this.btns[o].getChildByName("Background").getChildByName("cost").getComponent(cc.Label),
							l = Number(o),
							c = n.default.gb.GetCostBySkin(l);
						a.string = c.toFixed()
					}
					this.spellRoot.scaleX = 0, this.spellRoot.active = !1, console.log("hide tableDesc."), this.tableDesc.active = !1, this.UpdateItemBtns(), this.UpdateUnitButtons(), this.initPage()
				}, e.prototype.initPage = function() {}, e.prototype.ShowStoryDesc = function(t, e) {
					var i = r.default.role.story.curSceneId;
					this.title = t, this.desc = e, i > 1 ? (n.default.gb.PauseGame(!0), this.showFreeBattle()) : this.ShowStoryDesc2(t, e)
				}, e.prototype.UpdateFreeBattle = function(t, e) {
					r.default.role.story.curSceneId > 2 && (this.items[t].getChildByName("fetchfree").active = !1, this.items[t].getChildByName("fetchad").active = !0, this.items[e].getChildByName("fetchfree").active = !1, this.items[e].getChildByName("fetchad").active = !0)
				}, e.prototype.showFreeBattle = function() {
					2 == r.default.role.story.curSceneId ? (this.FreeBattle.getChildByName("FetchAll").getChildByName("ad").active = !1, this.FreeBattle.getChildByName("FetchAll").getChildByName("free").active = !0) : (this.FreeBattle.getChildByName("FetchAll").getChildByName("ad").active = !0, this.FreeBattle.getChildByName("FetchAll").getChildByName("free").active = !1), this.FreeBattle.getChildByName("FetchAll").active = !1, this.btnPass.active = !1, this.FreeBattle.active = !0
				}, e.prototype.BTN_FreeBattle = function() {
					if (2 == r.default.role.story.curSceneId) this.FreeBattleHelp();
					else {
						var t = this;
						b.default.showVideoAD(this, function() {
							t.FreeBattleHelp()
						})
					}
				}, e.prototype.FreeBattleHelp = function() {
					r.default.role.story.curSceneId;
					for (var t = 0; t < this.items.length; t++) {
						var e = this.items[t].getChildByName("fetchfree"),
							i = this.items[t].getChildByName("fetchad");
						if (e.active || i.active) switch (t) {
							case 0:
								n.default.gb.AddHuman(s.EnumUnit.miner1), n.default.gb.AddHuman(s.EnumUnit.miner1);
								break;
							case 1:
								n.default.gb.AddHuman(s.EnumUnit.swordman2), n.default.gb.AddHuman(s.EnumUnit.swordman2);
								break;
							case 2:
								n.default.gb.gd.teamDict[0].gold += 500
						}
					}
					this.BTN_PassBattleAd()
				}, e.prototype.ShowFetchAll = function() {
					var t = this;
					this.FreeBattle.getChildByName("FetchAll").active = !0, this.scheduleOnce(function() {
						t.btnPass.active = !0
					}, S.default.ReinforceDelay / 1e3)
				}, e.prototype.BTN_FreeBattle1 = function() {
					this.items[0].getChildByName("fetchfree").active = !1, this.UpdateFreeBattle(1, 2), this.ShowFetchAll(), n.default.gb.AddHuman(s.EnumUnit.miner1), n.default.gb.AddHuman(s.EnumUnit.miner1)
				}, e.prototype.BTN_FreeBattle2 = function() {
					this.items[1].getChildByName("fetchfree").active = !1, this.UpdateFreeBattle(0, 2), this.ShowFetchAll(), n.default.gb.AddHuman(s.EnumUnit.swordman2), n.default.gb.AddHuman(s.EnumUnit.swordman2)
				}, e.prototype.BTN_FreeBattle3 = function() {
					this.items[2].getChildByName("fetchfree").active = !1, this.UpdateFreeBattle(0, 1), this.ShowFetchAll(), n.default.gb.gd.teamDict[0].gold += 500
				}, e.prototype.BTN_AdBattle1 = function() {
					var t = this;
					b.default.showVideoAD(this, function() {
						t.AdBattle1()
					})
				}, e.prototype.AdBattle1 = function() {
					this.items[0].getChildByName("fetchad").active = !1, n.default.gb.AddHuman(s.EnumUnit.miner1), n.default.gb.AddHuman(s.EnumUnit.miner1)
				}, e.prototype.BTN_AdBattle2 = function() {
					var t = this;
					b.default.showVideoAD(this, function() {
						t.AdBattle2()
					})
				}, e.prototype.AdBattle2 = function() {
					this.items[1].getChildByName("fetchad").active = !1, n.default.gb.AddHuman(s.EnumUnit.swordman2), n.default.gb.AddHuman(s.EnumUnit.swordman2)
				}, e.prototype.BTN_AdBattle3 = function() {
					var t = this;
					b.default.showVideoAD(this, function() {
						t.AdBattle3()
					})
				}, e.prototype.AdBattle3 = function() {
					this.items[2].getChildByName("fetchad").active = !1, n.default.gb.gd.teamDict[0].gold += 500
				}, e.prototype.BTN_PassBattleAd = function() {
					var t = r.default.role.story.curSceneId;
					(this.FreeBattle.active = !1, t > 2 && t % 2 != 0) ? r.default.role.playerSkins.IsSkinBuyed(6, 5) || this.is_skined ? this.ShowStoryDesc2(this.title, this.desc) : this.FreeSkin.active = !0: this.ShowStoryDesc2(this.title, this.desc)
				}, e.prototype.BTN_SkinAd = function() {
					var t = this;
					b.default.showVideoAD(this, function() {
						t.SkinAd_Help()
					})
				}, e.prototype.SkinAd_Help = function() {
					this.FreeSkin.active = !1, this.is_skined = !0;
					var t = r.default.role.playerSkins;
					this.ori_skin = t.GetJobSkin(6), t.SetJobSkin(6, 5), 1 != r.default.role.dataGather["unlock_\u5de8\u4eba"] && (this.btnGiant.active = !0), _.default.Show(11, 1, !0), this.ShowStoryDesc2(this.title, this.desc)
				}, e.prototype.BTN_PassSkinAd = function() {
					this.FreeSkin.active = !1, this.is_skined = !0, this.ShowStoryDesc2(this.title, this.desc)
				}, e.prototype.End_Battle = function(t) {
					var e = cc.find("Canvas"),
						i = e.getChildByName("Main Camera");
					i.getChildByName("GNativeBanner") ? (i.getChildByName("GNativeBanner").active = !1, i.getChildByName("GNativeBanner").destroy()) : e.getChildByName("GNativeBanner") && (e.getChildByName("GNativeBanner").active = !1, e.getChildByName("GNativeBanner").destroy()), r.default.role.playerSkins.SetJobSkin(6, this.ori_skin), this.is_AdRes = !1, this.is_AdBattle = !1, this.start_AdRes = !1, this.start_AdBattle = !1, t && (this.is_skined = !1)
				}, e.prototype.ShowStoryDesc2 = function(t, e) {
					for (n.default.gb.PauseGame(!0); e.indexOf("<BR>") >= 0;) e = e.replace("<BR>", "\n");
					this.tableDesc.active = !0, this.storydesc_title.string = t, this.storydesc_context.string = e
				}, e.prototype.mistakeBanner = function() {
					this.btnHide.y += 68, b.default.BannerAd.show()
				}, e.prototype.ShowEndless = function() {
					n.default.gb.PauseGame(!0), this.tableDesc.active = !0, this.storydesc_title.string = "Đêm thứ " + r.default.role.endless.curSceneId /* + "\u591c" */, this.storydesc_context.string = "", this.viewEndless.Show()
				}, e.prototype.BTN_SetSpellsTable = function() {
					this.SetSpellsTable(!this._showSpell)
				}, e.prototype.SetSpellsTable = function(t) {
					if (this._showSpell != t) {
						this._spaction && (this._spaction.stop(), this._spaction.removeSelf(), this._spaction = null), this._showSpell = t;
						var e = this;
						this._showSpell ? (this.spellRoot.active = !0, this._spaction = cc.tween(this.spellRoot).to(.2, {
							scaleX: 1
						})) : this._spaction = cc.tween(this.spellRoot).to(.2, {
							scaleX: 0
						}).call(function() {
							e.spellRoot.active = !1
						}), this._spaction.start()
					}
				}, e.prototype.BTN_HidePopDialog = function() {
					n.default.gb.PauseGame(!1), this.popDialog.node.parent.active = !1;
					var t = this._onPopDlgClose,
						e = this._onPopDlgCaller;
					this._onPopDlgClose = null, this._onPopDlgCaller = null, t && t.call(e)
				}, e.prototype.PopDialog = function(t, e, i, o, a) {
					var n = this;
					void 0 === o && (o = null), void 0 === a && (a = null), this.popDialog.node.parent.active = !0, this.popDialog.string = t, this._onPopDlgClose = o, this._onPopDlgCaller = a, this._popDuration = e, console.log("falceid=====" + i), 0 != i ? r.default.uiPack.load("MatchIcons/" + y.default.pngNames[i], cc.SpriteFrame, function(t, e) {
						n.popDialogHead.spriteFrame = e
					}) : r.default.uiPack.load("MatchIcons/Giant", cc.SpriteFrame, function(t, e) {
						n.popDialogHead.spriteFrame = e
					})
				}, e.prototype.BTN_HideDescTable = function() {
					console.log("hide tableDesc."), this.tableDesc.active = !1, n.default.gb.PauseGame(!1), g.default.StopBGM(), g.default.PlayBGM(), this.guideView.Show(), r.default.role.story.curSceneId
				}, e.prototype.BTN_Pause = function() {
					this.uiPause.Show()
				}, e.prototype.BTN_UseItem1 = function() {
					this.BTN_UseItem(1)
				}, e.prototype.BTN_UseItem2 = function() {
					this.BTN_UseItem(2)
				}, e.prototype.BTN_UseItem3 = function() {
					this.BTN_UseItem(3)
				}, e.prototype.BTN_UseItem4 = function() {
					this.BTN_UseItem(4)
				}, e.prototype.BTN_UseItem5 = function() {
					this.BTN_UseItem(5)
				}, e.prototype.BTN_UseItem6 = function() {
					this.BTN_UseItem(6)
				}, e.prototype.BTN_UseItem7 = function() {
					this.BTN_UseItem(7)
				}, e.prototype.BTN_UseItem8 = function() {
					this.BTN_UseItem(8)
				}, e.prototype.BTN_UseItem9 = function() {
					this.BTN_UseItem(9)
				}, e.prototype.BTN_UseItem = function(t) {
					var e = r.default.role.items[t],
						o = +r.default.tmpItems[t];
					o && o > 0 ? n.default.gb.UseItem(t) : e && e > 0 ? n.default.gb.UseItem(t) : (i.selectId = t - 1, this.BTN_UseItem_Shop())
				}, e.prototype.UpdateItemBtns = function() {
					for (var t = this.spellRoot.getChildByName("root"), e = 0; e < t.children.length - 1; e++) {
						var i = e + 1,
							o = t.children[e].getChildByName("NUML").getChildByName("num").getComponent(cc.Label),
							a = r.default.GetItemNum(i);
						o.string = a.toFixed()
					}
				}, e.prototype.BTN_UseItem_Shop = function() {
					n.default.gb.PauseGame(!0), this.BTN_Shop(), this.SetSpellsTable(!1)
				}, e.prototype.update = function(t) {
					this.gdTeam && (this._money != this.gdTeam.gold && (this._money = this.gdTeam.gold, this.txtMoney.string = this._money.toFixed(0)), this._people == this.gdTeam.curPeople && this._maxPeople == this.gdTeam.maxPeople || (this._people = this.gdTeam.curPeople, this._maxPeople = this.gdTeam.maxPeople, this.txtPeople.string = this._people.toFixed(0) + "/" + this._maxPeople), this._popDuration > 0 && (this._popDuration -= r.default.GetGameFPS(), this._popDuration <= 0 && this.BTN_HidePopDialog()), this.UpdateUnitButtons())
				}, e.prototype.BTN_Shop = function() {
					var t = this;
					h.default.isOnbattle = !0, h.default.onBackCaller = this, h.default.onBackFunc = function() {
						n.default.gb.PauseGame(!1), t.UpdateItemBtns()
					};
					var e = cc.instantiate(this.uishop);
					this.node.parent.addChild(e)
				}, e.prototype.DEBUG_BTN_HITFLY = function() {
					for (var t = 0; t < n.default.gb.units.length; t++) {
						n.default.gb.units[t].BeStrikeFly(0, 0)
					}
				}, e.prototype.DEBUG_BTN_SpdUp = function() {
					1 == r.default.spdScale ? r.default.spdScale = 2 : r.default.spdScale = 1, this.PopText("\u901f\u5ea6\u53d8\u4e3a" + r.default.spdScale + "fps=" + r.default.GetGameFPS(), 667, 325, cc.Color.GREEN)
				}, e.prototype.BtnAttack = function() {
					n.default.gb.ai.SetAIMode(s.AIMode.\u8fdb\u653b, 0)
				}, e.prototype.BtnDefend = function() {
					n.default.gb.ai.SetAIMode(s.AIMode.\u5f85\u547d, 0)
				}, e.prototype.BtnGarrison = function() {
					n.default.gb.ai.SetAIMode(s.AIMode.\u9632\u5b88, 0)
				}, e.prototype.BtnMiner = function() {
					n.default.gb.AddUnitQueue(s.EnumUnit.miner1)
				}, e.prototype.BtnSwordMan = function() {
					n.default.gb.AddUnitQueue(s.EnumUnit.swordman2)
				}, e.prototype.BtnArcher = function() {
					n.default.gb.AddUnitQueue(s.EnumUnit.archer3)
				}, e.prototype.BtnSparda = function() {
					n.default.gb.AddUnitQueue(s.EnumUnit.sparda4)
				}, e.prototype.BtnMage = function() {
					n.default.gb.AddUnitQueue(s.EnumUnit.mage5)
				}, e.prototype.BtnGaint = function() {
					n.default.gb.AddUnitQueue(s.EnumUnit.gaint6)
				}, e.prototype.BtnMiner_Cancel = function() {
					n.default.gb.CancelUnitQueue(s.EnumUnit.miner1)
				}, e.prototype.BtnSwordMan_Cancel = function() {
					n.default.gb.CancelUnitQueue(s.EnumUnit.swordman2)
				}, e.prototype.BtnArcher_Cancel = function() {
					n.default.gb.CancelUnitQueue(s.EnumUnit.archer3)
				}, e.prototype.BtnSparda_Cancel = function() {
					n.default.gb.CancelUnitQueue(s.EnumUnit.sparda4)
				}, e.prototype.BtnMage_Cancel = function() {
					n.default.gb.CancelUnitQueue(s.EnumUnit.mage5)
				}, e.prototype.BtnGaint_Cancel = function() {
					n.default.gb.CancelUnitQueue(s.EnumUnit.gaint6)
				}, e.prototype.RedAlert_Gold = function() {
					this.iconGold.node.color = cc.Color.WHITE, this._redAlert && this._redAlert.removeSelf(), this._redAlert = cc.tween(this.iconGold.node).to(.2, {
						color: cc.Color.RED
					}).to(.2, {
						color: cc.Color.WHITE
					}).to(.2, {
						color: cc.Color.RED
					}).to(.2, {
						color: cc.Color.WHITE
					}).start()
				}, e.prototype.UpdateUnitButtons = function() {
					var t = n.default.gb,
						e = -1;
					for (var i in t.unitOnBuildingQueue.length > 0 && (e = t.unitOnBuildingQueue[0]), this.btns) {
						var o = t.unitOnBuilding[i],
							a = o ? o.queue : 0,
							r = o ? o.uid : -2,
							s = o ? o.buldingTime / o.needTime : 0;
						s > 1 && (s = 1), this._btn_queue[i] || (this._btn_queue[i] = this.btns[i].getChildByName("Queue").getComponent(cc.Label));
						var l = this._btn_queue[i];
						this._btn_cancel[i] || (this._btn_cancel[i] = this.btns[i].getChildByName("BtnCancelUnit"));
						var c = this._btn_cancel[i];
						this._btn_cd[i] || (this._btn_cd[i] = this.btns[i].getChildByName("Background").getChildByName("CDMask"));
						var u = this._btn_cd[i];
						u.height = 100 - 100 * s, l.node.active = a > 1 || r != e && a > 0, u.active = a > 0, c.active = l.node.active, l.node.active && (l.string = a.toFixed())
					}
				}, e.prototype.PopTextHurt = function(t, e, i, o) {
					return void 0 === o && (o = 0), this.PopText(t, e, i, cc.Color.RED, !0, o)
				}, e.prototype.PopText = function(t, e, i, o, a, n) {
					void 0 === a && (a = !1), void 0 === n && (n = 0);
					for (var r = null, s = 0; s < this.hurtPool.length; s++)
						if (null == this.hurtPool[s].node.parent) {
							r = this.hurtPool[s];
							break
						} if (null == r) {
						if (0 == a) var l = cc.instantiate(this.popTextSeed.node);
						else l = cc.instantiate(this.popNumberSeed.node);
						l.active = !0, r = l.getComponent(cc.Label), this.hurtPool.push(r)
					}
					this.uiTextLayer.addChild(r.node), r.string = t, r.node.color = o, r.node.x = e, r.node.y = i;
					var c = i + 50;
					return cc.tween(r.node).to(.25, {
						x: e + n / 2,
						y: c
					}).call(function() {
						cc.tween(r.node).to(.25, {
							x: e + n,
							y: c - 25
						}).call(function() {
							r.node.removeFromParent()
						}).start()
					}).start(), r
				}, e.prototype.ShowRes = function() {
					this.is_AdRes || (this.btnAdRes.active = !0, this.start_AdRes || (this.BtnAdRes(), this.start_AdRes = !0))
				}, e.prototype.ShowBattle = function() {
					this.is_AdBattle || (this.btnAdBattle.active = !0, this.start_AdBattle || (this.BtnAdRes(), this.start_AdBattle = !0))
				}, e.prototype.BtnAdRes = function() {
					this.AdRes.active || this.is_AdRes || (n.default.gb.PauseGame(!0), this.AdRes.active = !0)
				}, e.prototype.BtnAdBattle = function() {
					this.AdBattle.active || this.is_AdBattle || (n.default.gb.PauseGame(!0), this.AdBattle.active = !0)
				}, e.prototype.BtnAdResDel = function() {
					this.AdRes.active = !1, n.default.gb.PauseGame(!1)
				}, e.prototype.BtnAdBattleDel = function() {
					this.AdBattle.active = !1, n.default.gb.PauseGame(!1)
				}, e.prototype.BtnFetchAdRes = function() {
					var t = this;
					b.default.showVideoAD(this, function() {
						t.FetchAdRes()
					})
				}, e.prototype.FetchAdRes = function() {
					this.is_AdRes = !0, this.btnAdRes.active = !1, this.AdRes.active = !1, r.default.role.rmb += 50, n.default.gb.gd.teamDict[0].gold += 1e3, _.default.Show(0, 50, !0), _.default.Show(10, 1e3, !0), n.default.gb.PauseGame(!1), r.default.SaveGame()
				}, e.prototype.BtnFetchAdBattle = function() {
					var t = this;
					b.default.showVideoAD(this, function() {
						t.FetchAdBattle()
					})
				}, e.prototype.FetchAdBattle = function() {
					this.is_AdBattle = !0, this.btnAdBattle.active = !1, this.AdBattle.active = !1, n.default.gb.AddHuman(s.EnumUnit.sparda4), n.default.gb.AddHuman(s.EnumUnit.sparda4), n.default.gb.AddHuman(s.EnumUnit.sparda4), n.default.gb.AddHuman(s.EnumUnit.archer3), n.default.gb.AddHuman(s.EnumUnit.archer3), n.default.gb.AddHuman(s.EnumUnit.archer3), n.default.gb.PauseGame(!1)
				}, e.selectId = 0, a([k(cc.Label)], e.prototype, "txtMoney", void 0), a([k(cc.Label)], e.prototype, "txtPeople", void 0), a([k(cc.Node)], e.prototype, "uiTextLayer", void 0), a([k(cc.Label)], e.prototype, "popTextSeed", void 0), a([k(cc.Label)], e.prototype, "popNumberSeed", void 0), a([k(cc.Sprite)], e.prototype, "iconGold", void 0), a([k(u.default)], e.prototype, "uiPause", void 0), a([k(l.default)], e.prototype, "uiWin", void 0), a([k(c.default)], e.prototype, "uiLose", void 0), a([k(d.default)], e.prototype, "playerPad", void 0), a([k(p.default)], e.prototype, "uiUnlock", void 0), a([k(cc.Node)], e.prototype, "btnMiner", void 0), a([k(cc.Node)], e.prototype, "btnCubeman", void 0), a([k(cc.Node)], e.prototype, "btnSwordwrath", void 0), a([k(cc.Node)], e.prototype, "btnArchidon", void 0), a([k(cc.Node)], e.prototype, "btnSpeartan", void 0), a([k(cc.Node)], e.prototype, "btmMagikill", void 0), a([k(cc.Node)], e.prototype, "btnGiant", void 0), a([k(cc.Prefab)], e.prototype, "uishop", void 0), a([k(cc.Node)], e.prototype, "spellRoot", void 0), a([k(cc.Node)], e.prototype, "tableDesc", void 0), a([k(cc.Node)], e.prototype, "FreeBattle", void 0), a([k(cc.Node)], e.prototype, "FreeSkin", void 0), a([k(cc.Node)], e.prototype, "storydesc", void 0), a([k(cc.Label)], e.prototype, "storydesc_title", void 0), a([k(cc.Label)], e.prototype, "storydesc_context", void 0), a([k(m.default)], e.prototype, "viewEndless", void 0), a([k(cc.Label)], e.prototype, "popDialog", void 0), a([k(cc.Sprite)], e.prototype, "popDialogHead", void 0), a([k(v.default)], e.prototype, "guideView", void 0), a([k([f.default])], e.prototype, "uibuffs", void 0), a([k([cc.Node])], e.prototype, "items", void 0), a([k(cc.Node)], e.prototype, "btnAdRes", void 0), a([k(cc.Node)], e.prototype, "AdRes", void 0), a([k(cc.Node)], e.prototype, "btnAdBattle", void 0), a([k(cc.Node)], e.prototype, "AdBattle", void 0), a([k(cc.Node)], e.prototype, "btnPass", void 0), a([k(w.HuTuiIcon)], e.prototype, "HutuiNode", void 0), a([k(cc.Node)], e.prototype, "btnHide", void 0), a([k(cc.Prefab)], e.prototype, "NativeAd", void 0), e = i = a([G], e)
			}(cc.Component);
		i.default = A, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../Game/Common/GAudio": "GAudio",
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData",
		"../Guide/UIGuideView": "UIGuideView",
		"../UI/HT/HuTuiIcon": "HuTuiIcon",
		"../UI/Match/UIMatch": "UIMatch",
		"../UI/Shop/UIShop": "UIShop",
		"../config": "config",
		"./UIBattle_Buff": "UIBattle_Buff",
		"./UIBattle_ContolerPad": "UIBattle_ContolerPad",
		"./UIBattle_EndlessView": "UIBattle_EndlessView",
		"./UIBattle_Lose": "UIBattle_Lose",
		"./UIBattle_Pause": "UIBattle_Pause",
		"./UIBattle_Win": "UIBattle_Win",
		"./UIUnlock": "UIUnlock"
	}],
	UIClassicMain: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "22826KWidxJkLqSp3gKmrCB", "UIClassicMain");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./UILoading"),
			r = t("../Prefabs/GSaveBox"),
			s = t("../Game/MainData"),
			l = t("../Game/Data/GD_Story"),
			c = t("../CCScripts/GBattle_Root"),
			u = t("../Game/Data/GEnums"),
			d = t("../GAchievement"),
			h = cc._decorator,
			p = h.ccclass,
			f = h.property,
			m = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.topView = null, e.bottomView = null, e.topView2 = null, e.bottomView2 = null, e.box1 = null, e.box2 = null, e.box3 = null, e.btn2 = null, e.btn3 = null, e._prevIdx = -1, e
				}
				return o(e, t), e.prototype.start = function() {
					this.topView2.active = !1, this.bottomView2.active = !1, this.boxs = [this.box1, this.box2, this.box3], this.UpdateCells(), this._animView(!0), this.init_view(), s.default.curMode = u.\u6a21\u5f0f.\u6545\u4e8b
				}, e.prototype.init_view = function() {
					1 != s.default.role.achievements[d.EnumAchie.easypass] ? (this.btn2.interactable = !1, this.btn2.node.getChildByName("LockLever").active = !0) : this.btn2.node.getChildByName("LockLever").active = !1, 1 != s.default.role.achievements[d.EnumAchie.normalpass] ? (this.btn3.interactable = !1, this.btn3.node.getChildByName("LockLever").active = !0) : this.btn3.node.getChildByName("LockLever").active = !1
				}, e.prototype.UpdateCells = function() {
					for (var t = 0; t < this.boxs.length; t++) this.boxs[t].onwer = this, this.boxs[t].Setup(t)
				}, e.prototype.BTN_Back = function() {
					this._animView(!1), n.default.LoadScene("GLogin")
				}, e.prototype._animView = function(t) {
					var e = this.node;
					t ? (this.topView.active = !0, this.bottomView.active = !0, this.topView.y = e.height, this.bottomView.y = -e.height, cc.tween(this.topView).to(.2, {
						y: 0
					}).start(), cc.tween(this.bottomView).to(.2, {
						y: 0
					}).start()) : (this.topView.y = 0, this.bottomView.y = 0, cc.tween(this.topView).to(.2, {
						y: e.height
					}).start(), cc.tween(this.bottomView).to(.2, {
						y: -e.height
					}).start())
				}, e.prototype._animView2 = function(t) {
					var e = this.node;
					t ? (this.topView2.active = !0, this.bottomView2.active = !0, this.topView2.y = e.height, this.bottomView2.y = -e.height, cc.tween(this.topView2).to(.2, {
						y: 0
					}).start(), cc.tween(this.bottomView2).to(.2, {
						y: 0
					}).start()) : (this.topView2.y = 0, this.bottomView2.y = 0, cc.tween(this.topView2).to(.2, {
						y: e.height
					}).start(), cc.tween(this.bottomView2).to(.2, {
						y: -e.height
					}).start())
				}, e.prototype.BTN_DIFF1 = function() {
					this._startNewGameByDiff(1)
				}, e.prototype.BTN_DIFF2 = function() {
					this._startNewGameByDiff(2)
				}, e.prototype.BTN_DIFF3 = function() {
					this._startNewGameByDiff(3)
				}, e.prototype.BTN_View2Back = function() {
					this._animView(!0), this._animView2(!1)
				}, e.prototype.SaveBox_OnClick = function(t) {
					this._prevIdx = t;
					var e = s.default.role.storySaves[t];
					e ? (s.default.role.story = e, n.default.LoadScene("GStoryMap")) : (this._animView2(!0), this._animView(!1))
				}, e.prototype.SaveBox_DelSave = function(t) {
					s.default.role.storySaves[t] = null, this.UpdateCells()
				}, e.prototype._startNewGameByDiff = function(t) {
					var e = new l.default;
					switch (e.diff = t, e.JobLvUp = [], e.curSceneId = 1, s.default.role.storySaves[this._prevIdx] = e, s.default.role.story = e, s.default.role.story.sklP = 0, 1 == e.curSceneId ? (c.default.curSelSceneId = 1, n.default.LoadScene("GBattle")) : n.default.LoadScene("GStoryMap"), t) {
						case 1:
							"\u7b80\u5355";
							break;
						case 2:
							"\u666e\u901a";
							break;
						case 3:
							"\u56f0\u96be"
					}
				}, a([f(cc.Node)], e.prototype, "topView", void 0), a([f(cc.Node)], e.prototype, "bottomView", void 0), a([f(cc.Node)], e.prototype, "topView2", void 0), a([f(cc.Node)], e.prototype, "bottomView2", void 0), a([f(r.default)], e.prototype, "box1", void 0), a([f(r.default)], e.prototype, "box2", void 0), a([f(r.default)], e.prototype, "box3", void 0), a([f(cc.Button)], e.prototype, "btn2", void 0), a([f(cc.Button)], e.prototype, "btn3", void 0), e = a([p], e)
			}(cc.Component);
		i.default = m, cc._RF.pop()
	}, {
		"../CCScripts/GBattle_Root": "GBattle_Root",
		"../GAchievement": "GAchievement",
		"../Game/Data/GD_Story": "GD_Story",
		"../Game/Data/GEnums": "GEnums",
		"../Game/MainData": "MainData",
		"../Prefabs/GSaveBox": "GSaveBox",
		"./UILoading": "UILoading"
	}],
	UIEndless: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "db8eecwqflFPqkRU9JoSPuB", "UIEndless");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../ADSDK"),
			r = t("../../Game/Data/GD_Endless"),
			s = t("../../Game/Data/GEnums"),
			l = t("../../Game/MainData"),
			c = t("../UILoading"),
			u = cc._decorator,
			d = u.ccclass,
			h = u.property,
			p = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewContinue = null, e.viewEnd = null, e.lKillCount = null, e.lDayCount = null, e.lDay = null, e.end_lDay = null, e.btnContinue = null, e.btnNew = null, e.btnNew2 = null, e.view_enter = null, e.btn_enter = null, e.btn_not_enter = null, e.label_new = null, e.label_continue = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					if (l.default.curMode = s.\u6a21\u5f0f.\u50f5\u5c38, this.viewContinue.active = !0, this.viewEnd.active = !1, this.view_enter.active = !1, l.default.role.endless) i.BattleFailed ? (this.viewContinue.active = !1, this.viewEnd.active = !0, i.BattleFailed = !1, this.UpdateView(), l.default.role.endless = null, l.default.SaveGame()) : (this.btnContinue.active = !0, this.btnNew.active = !0, this.btnNew2.active = !1, this.UpdateView());
					else {
						var t = new r.default;
						l.default.role.endless = t, t.passDay = l.default.role.endlessdays, t.killCount = 0, t.sklP = 0, t.startGold = 300, t.curSceneId = 1, t.units = [], this.btnContinue.active = !1, this.btnNew.active = !1, this.btnNew2.active = !0, this.UpdateView()
					}
				}, e.prototype.UpdateView = function() {
					var t = l.default.role.endless;
					this.lKillCount.string = "Tổng số Zombie đã hạ: " + t.killCount, this.lDayCount.string = "Đêm sống sót tối đa: " + t.passDay, this.lDay.string = "(Đêm thứ " + t.curSceneId + ")", this.end_lDay.string = "Đã sống sót " + (t.curSceneId - 1) + " ngày"
				}, e.prototype.BTN_Continue = function() {
					this.new_game = !1, this.view_enter.active = !0, this.View_Enter()
				}, e.prototype.BTN_New = function() {
					this.new_game = !0, this.view_enter.active = !0, this.View_Enter()
				}, e.prototype.BTN_Back = function() {
					c.default.LoadScene("GLogin")
				}, e.prototype.View_Enter = function() {
					this.new_game ? (this.label_new.active = !0, this.label_continue.active = !1) : (this.label_new.active = !1, this.label_continue.active = !0)
				}, e.prototype.mistakeBanner = function() {
					this.btn_enter.y += 68, this.btn_not_enter.y += 68, n.default.BannerAd.show()
				}, e.prototype.BTN_Enter = function() {
					if (this.new_game) {
						i.BattleFailed = !1;
						var t = new r.default;
						t.units = [], t.sklP = 0, t.killCount = 0, t.startGold = 300, t.curSceneId = 1, l.default.role.endless = t, c.default.LoadScene("GBattle")
					} else c.default.LoadScene("GArmory")
				}, e.prototype.BTN_Close = function() {
					this.view_enter.active = !1
				}, e.BattleFailed = !1, a([h(cc.Node)], e.prototype, "viewContinue", void 0), a([h(cc.Node)], e.prototype, "viewEnd", void 0), a([h(cc.Label)], e.prototype, "lKillCount", void 0), a([h(cc.Label)], e.prototype, "lDayCount", void 0), a([h(cc.Label)], e.prototype, "lDay", void 0), a([h(cc.Label)], e.prototype, "end_lDay", void 0), a([h(cc.Node)], e.prototype, "btnContinue", void 0), a([h(cc.Node)], e.prototype, "btnNew", void 0), a([h(cc.Node)], e.prototype, "btnNew2", void 0), a([h(cc.Node)], e.prototype, "view_enter", void 0), a([h(cc.Node)], e.prototype, "btn_enter", void 0), a([h(cc.Node)], e.prototype, "btn_not_enter", void 0), a([h(cc.Node)], e.prototype, "label_new", void 0), a([h(cc.Node)], e.prototype, "label_continue", void 0), e = i = a([d], e)
			}(cc.Component);
		i.default = p, cc._RF.pop()
	}, {
		"../../ADSDK": "ADSDK",
		"../../Game/Data/GD_Endless": "GD_Endless",
		"../../Game/Data/GEnums": "GEnums",
		"../../Game/MainData": "MainData",
		"../UILoading": "UILoading"
	}],
	UIFlyIcon: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "52bd6g4LJBGsZv2S3nh3ryL", "UIFlyIcon");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/Common/GameUtil"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.fromNode = null, e.toNode = null, e
				}
				return o(e, t), e.prototype.start = function() {
					n.GameUtil.FlyIcon(this.fromNode, new cc.Vec2(this.fromNode.x, this.fromNode.y), new cc.Vec2(this.toNode.x, this.toNode.y), 30)
				}, a([l(cc.Node)], e.prototype, "fromNode", void 0), a([l(cc.Node)], e.prototype, "toNode", void 0), e = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"../Game/Common/GameUtil": "GameUtil"
	}],
	UIGuideView: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "837a7fb3htFN7W9RC2AUn0h", "UIGuideView");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../aldSDK"),
			r = t("../Game/Data/GEnums"),
			s = t("../Game/GBattle/GBattle"),
			l = t("../Game/MainData"),
			c = t("./GuideScene1"),
			u = t("./GuideScene2"),
			d = t("./GuideScene6"),
			h = cc._decorator,
			p = h.ccclass,
			f = h.property,
			m = function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.l = null, e.r = null, e.t = null, e.b = null, e.gHand = null, e.gArrow = null, e.gPopDialog = null, e.gPopLabel = null, e.s1 = null, e.s2 = null, e.s6 = null, e.guide = 0, e.curGuide = null, e
				}
				return o(e, t), e.prototype.start = function() {
					this.gArrow.active = !1, this.gHand.active = !1, this.gPopDialog.active = !1, this.s1.node.active = !1, this.s2.node.active = !1, this.s6.node.active = !1
				}, e.prototype.Show = function() {
					if (l.default.curMode == r.\u6a21\u5f0f.\u6545\u4e8b) {
						switch (l.default.role.story.curSceneId) {
							case 1:
								this.curGuide = this.s1, this.guide = 1;
								break;
							case 2:
								this.curGuide = this.s2, this.guide = 2;
								break;
							case 3:
								this.curGuide = this.s6, this.guide = 3;
								break;
							default:
								return
						}
						this.node.active = !1, null == this.curGuide || (this.node.active = !0, this.curGuide.node.active = !0, this.curGuide.InitGuide(), n.default.sendEvent("\u65b0\u624b\u5f15\u5bfc", "\u7b2c\u51e0\u6b65", this.guide.toString()))
					}
				}, e.prototype.BtnPassGuide = function() {
					this.curGuide.PassGuide()
				}, e.prototype.ShowDialog = function(t) {
					this.gPopDialog.active = !0, this.gPopLabel.string = t
				}, e.prototype.ScaleDialog = function() {
					var t = this;
					cc.tween(this.gPopDialog).to(.2, {
						scale: 1.5
					}).call(function() {
						cc.tween(t.gPopDialog).to(.2, {
							scale: 1
						}).call(function() {}).start()
					}).start()
				}, e.prototype.HideDialog = function() {
					this.gPopDialog.active = !1
				}, e.prototype.LockTargetShowArrow = function(t, e, i, o) {
					void 0 === i && (i = 0), void 0 === o && (o = 0), this.gArrow.scaleY = e ? 1 : -1, this.gArrow.parent = t.node, this.gArrow.x = i, this.gArrow.y = o, this.gArrow.active = !0
				}, e.prototype.LockTargetImageShowArrow = function(t, e, i, o) {
					void 0 === i && (i = 0), void 0 === o && (o = 0), this.gArrow.scaleY = e ? 1 : -1, this.gArrow.parent = t, this.gArrow.x = i, this.gArrow.y = o, this.gArrow.active = !0
				}, e.prototype.HideArrow = function() {
					this.gArrow.parent = this.node, this.gArrow.active = !1
				}, e.prototype.PauseGame = function() {
					console.log("Pause game."), s.default.gb.PauseGame(!0)
				}, e.prototype.ResumeGame = function() {
					console.log("Resume game."), s.default.gb.PauseGame(!1)
				}, a([f(cc.Node)], e.prototype, "l", void 0), a([f(cc.Node)], e.prototype, "r", void 0), a([f(cc.Node)], e.prototype, "t", void 0), a([f(cc.Node)], e.prototype, "b", void 0), a([f(cc.Node)], e.prototype, "gHand", void 0), a([f(cc.Node)], e.prototype, "gArrow", void 0), a([f(cc.Node)], e.prototype, "gPopDialog", void 0), a([f(cc.Label)], e.prototype, "gPopLabel", void 0), a([f(c.default)], e.prototype, "s1", void 0), a([f(u.GuideScene2)], e.prototype, "s2", void 0), a([f(d.default)], e.prototype, "s6", void 0), e = a([p], e)
			}(cc.Component);
		i.default = m, cc._RF.pop()
	}, {
		"../Game/Data/GEnums": "GEnums",
		"../Game/GBattle/GBattle": "GBattle",
		"../Game/MainData": "MainData",
		"../aldSDK": "aldSDK",
		"./GuideScene1": "GuideScene1",
		"./GuideScene2": "GuideScene2",
		"./GuideScene6": "GuideScene6"
	}],
	UIItemPop: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c66a26cD/VPOLdvMbz3WSAo", "UIItemPop");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../ADSDK"),
			r = t("../MainData"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.Item = null, e.AdItem = null, e.name1 = null, e.num1 = null, e.icon1 = null, e.name2 = null, e.num2 = null, e.icon2 = null, e
				}
				var i;
				return o(e, t), i = e, e.Show = function(t, e, o) {
					var a = this;
					cc.resources.load("UI/UIItemPop", function(s, l) {
						if (s) console.error(s);
						else {
							a.is_Ad = o;
							var c = cc.instantiate(l),
								u = c.getComponent(i),
								d = cc.find("Canvas"),
								h = d.getChildByName("Main Camera"),
								p = r.default.allSeeds.items[t].name,
								f = r.default.allSeeds.items[t].icon;
							if (o) {
								var m = u.AdItem;
								u.Item.active = !1, m.active = !0, u.name2.string = p, u.num2.string = e.toString(), cc.resources.load("UIBattle/" + f, cc.SpriteFrame, function(t, e) {
									t && console.log(t), u.icon2.spriteFrame = e
								})
							} else {
								(m = u.Item).active = !0, m.y += n.default.BannerAdHeight, u.AdItem.active = !1, u.name1.string = p, u.num1.string = e.toString(), cc.resources.load("UIBattle/" + f, cc.SpriteFrame, function(t, e) {
									t && console.log(t), u.icon1.spriteFrame = e
								})
							}
							h ? h.addChild(c) : d.addChild(c)
						}
					})
				}, e.prototype.start = function() {
					var t = this;
					i.is_Ad || cc.tween(this.node).to(2, {
						opacity: 255
					}).call(function() {
						cc.tween(t.node).to(1, {
							opacity: 0
						}).call(function() {
							t.CloseUI()
						}).start()
					}).start()
				}, e.prototype.CloseUI = function() {
					this.node.active = !1, this.node.destroy()
				}, e.is_Ad = !1, a([c(cc.Node)], e.prototype, "Item", void 0), a([c(cc.Node)], e.prototype, "AdItem", void 0), a([c(cc.Label)], e.prototype, "name1", void 0), a([c(cc.Label)], e.prototype, "num1", void 0), a([c(cc.Sprite)], e.prototype, "icon1", void 0), a([c(cc.Label)], e.prototype, "name2", void 0), a([c(cc.Label)], e.prototype, "num2", void 0), a([c(cc.Sprite)], e.prototype, "icon2", void 0), e = i = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../../ADSDK": "ADSDK",
		"../MainData": "MainData"
	}],
	UILoading: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "77707v9dIBPS6jlNSmJcyus", "UILoading");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.loadingView = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					var t = this;
					this._animLoadingView(!0);
					var e = this.node;
					cc.game.addPersistRootNode(e), e.opacity = 0, cc.tween(e).to(.2, {
						opacity: 255
					}).call(function() {
						cc.director.loadScene(i._nextScene, function() {
							t._animLoadingView(!1), cc.tween(e).to(.2, {
								opacity: 0
							}).call(function() {
								e.removeFromParent(!0)
							}).start()
						})
					}).start()
				}, e.prototype._animLoadingView = function(t) {
					t ? (this.loadingView.scale = 0, cc.tween(this.loadingView).to(.5, {
						scale: 1
					}, {
						easing: "elasticOut"
					}).start()) : (this.loadingView.scale = 1, cc.tween(this.loadingView).to(.5, {
						scale: 0
					}).start())
				}, e.LoadScene = function(t, e, o) {
					void 0 === e && (e = null), void 0 === o && (o = null), i._nextScene = t, i._caller = e, i._onComp = o, cc.director.loadScene("GLoading")
				}, a([s(cc.Node)], e.prototype, "loadingView", void 0), e = i = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	UILogin: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "ec5caF3351E2Y0G20qjpMCg", "UILogin");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./UILoading"),
			r = t("../Game/MainData"),
			s = t("./Shop/UISkinShop"),
			l = t("../Game/Common/GAudio"),
			c = t("../Game/Common/GameUtil"),
			u = t("../aldSDK"),
			d = t("../HutuiSDK"),
			h = t("./HT/HuTuiIcon"),
			p = t("../StartScene"),
			f = t("../ADSDK"),
			m = t("../config"),
			v = t("../Game/GBattle/UIItemPop"),
			y = t("../Hts"),
			g = t("../GAchievement"),
			b = cc._decorator,
			_ = b.ccclass,
			S = b.property,
			w = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.topView = null, e.leftView = null, e.rightView = null, e.selectView = null, e.Sign = null, e.Turntable = null, e.HutuiNode = null, e.PackageView = null, e.btnArena = null, e.btnZombie = null, e.btnMoreGame = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.onLoad = function() {
					cc.game.on(cc.game.EVENT_HIDE, this.onPause), cc.game.on(cc.game.EVENT_SHOW, this.onResume)
				}, e.prototype.onPause = function() {
					console.log("Tạm dừng trò chơi"), l.default.PauseBGM()
				}, e.prototype.onResume = function() {
					console.log("Cut Backstage is Back"), f.default.RewardedVideoShow || l.default.ResumeBGM()
				}, e.prototype.start = function() {
					var t = this,
						e = (new Date).getTime() / 1e3;
					p.default.new_usr && u.default.sendEvent("\u8fdb\u5165\u4e3b\u9875\u9762", "\u65f6\u95f4/\u79d2", e.toString()), this.PackageView.active = !1, this.selectView.active = !1, this.leftView.active = !1, this.rightView.active = !1, this.topView.active = !1, this._animMenu(!0);
					var o = function() {
						0 != r.default.role.uuid && (window.wx && window.wx.aldSendOpenid(r.default.role.uuid.toString()), this.unschedule(o))
					};
					this.schedule(o, 3), i._finit && (l.default.PlayBGM(), i._finit = !1);
					var a = c.GameUtil.SystemDay(),
						n = r.default.GetTimeTick(1),
						s = r.default.role.signTime;
					switch (a > r.default.role.prevTimeTick && this.refresh_daily(), s < 7 && a > n && this.BTN_Sign(), this.init_view(), m.default.Channel) {
						case "wx":
							if (window.wx) switch (window.wx.getLaunchOptionsSync().scene) {
								case 1001:
								case 1089:
									0 == r.default.role.MySGame && (r.default.role.MySGame = 1, r.default.SaveGame());
									break;
								case 1023:
									0 == r.default.role.DeskIcon && (r.default.role.DeskIcon = 1, r.default.SaveGame())
							}
							case "oppo": var h = d.default.more_game_bid;
							y.hts.getBox(h, function(e, i) {
								e ? t.btnMoreGame.active = !1 : i.length <= 0 && (t.btnMoreGame.active = !1)
							})
					}
				}, e.prototype.BTN_Start = function() {
					this._animMenu(!1), this._animSelectView(!0)
				}, e.prototype.BTN_Skin = function() {
					s.default.backScene = "GLogin", n.default.LoadScene("GSkinShop")
				}, e.prototype.BTN_Achievement = function() {
					n.default.LoadScene("GAchievement")
				}, e.prototype.BTN_HideSelectView = function() {
					this._animSelectView(!1), this._animMenu(!0)
				}, e.prototype.BTN_Classic = function() {
					n.default.LoadScene("GClassicMain")
				}, e.prototype.BTN_Match = function() {
					n.default.LoadScene("GMatch")
				}, e.prototype.BTN_Endless = function() {
					n.default.LoadScene("GEndless")
				}, e.prototype.BTN_Sign = function() {
					var t = cc.instantiate(this.Sign);
					t.x = 0, t.y = 0, t.getComponent("GSign").Setup(this), this.node.parent.addChild(t)
				}, e.prototype.BTN_Turntable = function() {
					var t = cc.instantiate(this.Turntable);
					t.x = 0, t.y = 0, t.getComponent("GTurntable").Setup(), this.node.parent.addChild(t)
				}, e.prototype.BTN_ShowPackage = function() {
					this.PackageView.active = !0, this.init_package_view()
				}, e.prototype.BTN_DelPackage = function() {
					this.PackageView.active = !1
				}, e.prototype.BTN_ShowMoreGame = function() {
					switch (m.default.Channel) {
						case "wx":
							d.default.showmoregame()
					}
				}, e.prototype.signView = function() {
					this.rightView.getChildByName("BtnSign").active = !1
				}, e.prototype.refresh_daily = function() {
					var t = c.GameUtil.SystemDay(),
						e = r.default.role.signTime;
					e >= 7 && (r.default.role.signTime = 0, e = 0), r.default.role.prevTimeTick = t, r.default.role.freeDiamond = 0, r.default.role.turnTable = 0, r.default.role.CountDowm = 0, r.default.role.CountDowmTime = 0, 1 == r.default.role.Auth && c.GameUtil.GetDay(r.default.role.Auth_time) < c.GameUtil.GetDay((new Date).getTime()) && r.default.role.Auth_time > 0 && (r.default.role.Auth = 2), 3 == r.default.role.Auth && (r.default.role.Auth = 1)
				}, e.prototype._animSelectView = function(t) {
					if (t) {
						this.selectView.active = !0, this.selectView.y = 2 * this.node.height;
						var e = .5 * this.node.height;
						cc.tween(this.selectView).to(.2, {
							y: e
						}).start()
					} else {
						var i = .5 * this.node.height;
						e = 2 * this.node.height;
						this.selectView.y = i, cc.tween(this.selectView).to(.3, {
							y: e
						}).start()
					}
				}, e.prototype._animMenu = function(t) {
					if (t) {
						this.leftView.active = !0, this.rightView.active = !0, this.topView.active = !0;
						var e = this.node.width;
						this.leftView.x = -e, i = cc.moveTo(.2, 0, 0), this.leftView.runAction(i), this.rightView.x = e, i = cc.moveTo(.2, 0, 0), this.rightView.runAction(i), this.topView.y = this.node.height, cc.tween(this.topView).to(.2, {
							y: 0
						}).start()
					} else {
						var i;
						e = this.node.width;
						this.leftView.x = 0, i = cc.moveTo(.2, -e, 0), this.leftView.runAction(i), this.rightView.x = 0, i = cc.moveTo(.2, e, 0), this.rightView.runAction(i), this.topView.y = this.node.height, cc.tween(this.topView).to(.3, {
							y: this.node.height
						}).start()
					}
				}, e.prototype.init_view = function() {
					1 != r.default.role.matchModel && 1 == r.default.role.achievements[g.EnumAchie.easypass] && (r.default.role.matchModel = 1, r.default.SaveGame()), 1 != r.default.role.endlessModel && 1 == r.default.role.achievements[g.EnumAchie.normalpass] && (r.default.role.endlessModel = 1, r.default.SaveGame()), 1 != r.default.role.matchModel ? (this.btnArena.interactable = !1, this.btnArena.node.getChildByName("LockLever").active = !0, this.btnArena.node.getChildByName("LockLever").getChildByName("BtnUnLock").active = !0) : (this.btnArena.interactable = !0, this.btnArena.node.getChildByName("LockLever").active = !1, this.btnArena.node.getChildByName("LockLever").getChildByName("BtnUnLock").active = !1), 1 != r.default.role.endlessModel ? (this.btnZombie.interactable = !1, this.btnZombie.node.getChildByName("LockLever").active = !0, this.btnArena.node.getChildByName("LockLever").getChildByName("BtnUnLock").active = !0) : (this.btnZombie.interactable = !0, this.btnZombie.node.getChildByName("LockLever").active = !1, this.btnArena.node.getChildByName("LockLever").getChildByName("BtnUnLock").active = !1), m.default.Channel
				}, e.prototype.init_package_view = function() {
					this.PackageView.getChildByName("MygameGuide").active = !0, this.PackageView.getChildByName("DeckIconGuide").active = !0, this.PackageView.getChildByName("AuthGuide").active = !0, this.PackageView.getChildByName("DeskIcon").active = !1, this.PackageView.getChildByName("MyGame").active = !1, 0 == r.default.role.MySGame ? (this.PackageView.getChildByName("MygameGuide").getChildByName("BtnGuide").active = !0, this.PackageView.getChildByName("MygameGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("MygameGuide").getChildByName("Complete").active = !1) : 1 == r.default.role.MySGame ? (this.PackageView.getChildByName("MygameGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("MygameGuide").getChildByName("BtnFetch").active = !0, this.PackageView.getChildByName("MygameGuide").getChildByName("Complete").active = !1) : (this.PackageView.getChildByName("MygameGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("MygameGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("MygameGuide").getChildByName("Complete").active = !0), 0 == r.default.role.DeskIcon ? (this.PackageView.getChildByName("DeckIconGuide").getChildByName("BtnGuide").active = !0, this.PackageView.getChildByName("DeckIconGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("DeckIconGuide").getChildByName("Complete").active = !1) : 1 == r.default.role.DeskIcon ? (this.PackageView.getChildByName("DeckIconGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("DeckIconGuide").getChildByName("BtnFetch").active = !0, this.PackageView.getChildByName("DeckIconGuide").getChildByName("Complete").active = !1) : (this.PackageView.getChildByName("DeckIconGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("DeckIconGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("DeckIconGuide").getChildByName("Complete").active = !0), 0 == r.default.role.Auth ? (this.PackageView.getChildByName("AuthGuide").getChildByName("BtnGuide").active = !0, this.PackageView.getChildByName("AuthGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("Complete").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("WaitTomorrow").active = !1) : 1 == r.default.role.Auth ? (this.PackageView.getChildByName("AuthGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("Complete").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("WaitTomorrow").active = !0) : 2 == r.default.role.Auth ? (this.PackageView.getChildByName("AuthGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("BtnFetch").active = !0, this.PackageView.getChildByName("AuthGuide").getChildByName("Complete").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("WaitTomorrow").active = !1) : (this.PackageView.getChildByName("AuthGuide").getChildByName("BtnGuide").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("BtnFetch").active = !1, this.PackageView.getChildByName("AuthGuide").getChildByName("Complete").active = !0, this.PackageView.getChildByName("AuthGuide").getChildByName("WaitTomorrow").active = !1)
				}, e.prototype.showMyGameGuide = function() {
					this.PackageView.active && (this.PackageView.getChildByName("MygameGuide").active = !1, this.PackageView.getChildByName("DeckIconGuide").active = !1, this.PackageView.getChildByName("AuthGuide").active = !1, this.PackageView.getChildByName("DeskIcon").active = !1, this.PackageView.getChildByName("MyGame").active = !0)
				}, e.prototype.FetchMyGame = function() {
					this.PackageView.active && 1 == r.default.role.MySGame && (r.default.role.rmb += 100, r.default.role.MySGame = 2, r.default.SaveGame(), v.default.Show(0, 100, !1), this.init_package_view())
				}, e.prototype.showDeskIconGuide = function() {
					this.PackageView.active && (this.PackageView.getChildByName("MygameGuide").active = !1, this.PackageView.getChildByName("DeckIconGuide").active = !1, this.PackageView.getChildByName("AuthGuide").active = !1, this.PackageView.getChildByName("DeskIcon").active = !0, this.PackageView.getChildByName("MyGame").active = !1)
				}, e.prototype.FetchDeskIcon = function() {
					this.PackageView.active && 1 == r.default.role.DeskIcon && (r.default.role.rmb += 100, r.default.role.DeskIcon = 2, r.default.SaveGame(), v.default.Show(0, 100, !1), this.init_package_view())
				}, e.prototype.FetchAuth = function() {
					this.PackageView.active && 2 == r.default.role.Auth && (r.default.role.rmb += 100, r.default.role.Auth = 1, r.default.SaveGame(), v.default.Show(0, 100, !1), this.init_package_view())
				}, e.prototype.showAuthGuide = function() {
					if (0 == r.default.role.Auth) switch (m.default.Channel) {
						case "wx":
							if (window.wx) {
								var t = window.wx;
								console.log("\u8c03\u8d77\u5ba2\u6237\u7aef\u5c0f\u6e38\u620f\u7b7e\u5230\u8ba2\u9605\u6d88\u606f\u754c\u9762");
								var e = this;
								t.requestSubscribeMessage({
									tmplIds: ["KoZtaNWSdMzJfV6cdhvTccARz73NgdnoMoe4RzGllxs"],
									success: function(t) {
										"accept" == t.KoZtaNWSdMzJfV6cdhvTccARz73NgdnoMoe4RzGllxs && (e.PackageView.active = !1)
									}
								})
							}
					}
				}, e.prototype.BTN_Unlock_Match = function() {
					var t = this;
					f.default.showVideoAD(this, function() {
						t.Unlock_Match()
					})
				}, e.prototype.Unlock_Match = function() {
					r.default.role.matchModel = 1, r.default.SaveGame(), this.init_view()
				}, e.prototype.BTN_Unlock_Endless = function() {
					var t = this;
					f.default.showVideoAD(this, function() {
						t.Unlock_Endless()
					})
				}, e.prototype.Unlock_Endless = function() {
					r.default.role.endlessModel = 1, r.default.SaveGame(), this.init_view()
				}, e._finit = !0, a([S(cc.Node)], e.prototype, "topView", void 0), a([S(cc.Node)], e.prototype, "leftView", void 0), a([S(cc.Node)], e.prototype, "rightView", void 0), a([S(cc.Node)], e.prototype, "selectView", void 0), a([S(cc.Prefab)], e.prototype, "Sign", void 0), a([S(cc.Prefab)], e.prototype, "Turntable", void 0), a([S(h.HuTuiIcon)], e.prototype, "HutuiNode", void 0), a([S(cc.Node)], e.prototype, "PackageView", void 0), a([S(cc.Button)], e.prototype, "btnArena", void 0), a([S(cc.Button)], e.prototype, "btnZombie", void 0), a([S(cc.Node)], e.prototype, "btnMoreGame", void 0), e = i = a([_], e)
			}(cc.Component);
		i.default = w, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../GAchievement": "GAchievement",
		"../Game/Common/GAudio": "GAudio",
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData",
		"../Hts": "Hts",
		"../HutuiSDK": "HutuiSDK",
		"../StartScene": "StartScene",
		"../aldSDK": "aldSDK",
		"../config": "config",
		"./HT/HuTuiIcon": "HuTuiIcon",
		"./Shop/UISkinShop": "UISkinShop",
		"./UILoading": "UILoading"
	}],
	UIMatch_ViewMatch: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "fc538NEZDdDFqgQq7gShBFA", "UIMatch_ViewMatch");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/MainData"),
			r = t("./UIMatch"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.uiMatch = null, e.scrollView = null, e.L8 = null, e.R8 = null, e.L4 = null, e.R4 = null, e.L2 = null, e.R2 = null, e.L1 = null, e.R1 = null, e.winerNode = null, e.forceNode = null, e
				}
				return o(e, t), e.prototype.Show = function() {
					var t = n.default.role.match;
					if (0 == t.currentStep && (!t.players16 || 0 == t.players16.length)) {
						var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
						e.sort(function(t, e) {
							return Math.random() < .5 ? -1 : 1
						}), e.pop(), e.pop(), e.indexOf(t.playerRole) < 0 && (e.pop(), e.push(t.playerRole)), e.sort(function(t, e) {
							return Math.random() < .5 ? -1 : 1
						}), t.players16 = e
					}
					1 != t.currentStep || t.players8 && 0 != t.players8.length || (t.players8 = this.CheckMatchLv(t.players16)), 2 != t.currentStep || t.players4 && 0 != t.players4.length || (t.players4 = this.CheckMatchLv(t.players8)), 3 != t.currentStep || t.players2 && 0 != t.players2.length || (t.players2 = this.CheckMatchLv(t.players4)), 4 == t.currentStep || (this.UpdateView(), this.ForcePlayer()), this.node.active = !0
				}, e.prototype.ForcePlayer = function() {
					var t = null,
						e = this.forceNode.parent.children.indexOf(this.forceNode);
					t = e % 2 == 0 ? this.forceNode.parent.children[e + 1] : this.forceNode.parent.children[e - 1];
					var i = new cc.Vec2,
						o = this.forceNode.x,
						a = this.forceNode.y;
					t && (o += .5 * (t.x - this.forceNode.x), a += .5 * (t.y - this.forceNode.y)), i.x = o + 2e3, i.y = 1350 - a, i.x -= .5 * this.node.width, i.y -= .5 * this.node.height, this.scrollView.scrollToOffset(i, .5)
				}, e.prototype.CheckMatchLv = function(t) {
					for (var e = n.default.role.match, i = [], o = 0; o < t.length; o += 2) {
						var a = t[o],
							r = t[o + 1];
						a == e.playerRole ? i.push(a) : r == e.playerRole ? i.push(r) : i.push(Math.random() < .5 ? a : r)
					}
					return i
				}, e.prototype.UpdateView = function() {
					var t = n.default.role.match;
					this.UpdateCells(this.L8, this.R8, t.players16, t.players8, 8), t.currentStep >= 1 ? this.UpdateCells(this.L4, this.R4, t.players8, t.players4, 4) : this.UpdateCells(this.L4, this.R4, null, null, 4), t.currentStep >= 2 ? this.UpdateCells(this.L2, this.R2, t.players4, t.players2, 2) : this.UpdateCells(this.L2, this.R2, null, null, 2), t.currentStep >= 3 ? this.UpdateCells(this.L1, this.R1, t.players2, null, 1) : this.UpdateCells(this.L1, this.R1, null, null, 1), t.currentStep >= 4 ? this.SetupCell(this.winerNode, t.winer, !0) : this.SetupCell(this.winerNode, -1, !0)
				}, e.prototype.UpdateCells = function(t, e, i, o, a) {
					for (var n = 0; n < a; n++) {
						var r = n,
							s = n + a,
							l = !0,
							c = -1,
							u = t.children[n];
						i && (o && o.length > 0 && (l = o.indexOf(i[r]) >= 0), i && (c = i[r])), this.SetupCell(u, c, l);
						var d = e.children[n];
						i && (o && o.length > 0 && (l = o.indexOf(i[s]) >= 0), i && (c = i[s])), this.SetupCell(d, c, l)
					}
				}, e.prototype.SetupCell = function(t, e, i) {
					var o = t.getChildByName("Fill").getChildByName("lWho").getComponent(cc.Label),
						a = t.getChildByName("Profile").getChildByName("Mask").getChildByName("icon").getComponent(cc.Sprite);
					e >= 0 ? (a.node.active = !0, n.default.uiPack.load("MatchIcons/" + r.default.pngNames[e], cc.SpriteFrame, function(t, e) {
						t && console.error(t), a.spriteFrame = e
					}), n.default.role.match.playerRole == e ? (o.string = "Bạn", this.forceNode = t) : o.string = r.default.plyNames[e], i ? a.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite")) : a.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"))) : (a.node.active = !1, o.string = "")
				}, e.prototype.BTN_Close = function() {
					this.node.active = !1
				}, e.prototype.BTN_Start = function() {
					this.uiMatch.viewVS.Show()
				}, a([c(cc.ScrollView)], e.prototype, "scrollView", void 0), a([c(cc.Node)], e.prototype, "L8", void 0), a([c(cc.Node)], e.prototype, "R8", void 0), a([c(cc.Node)], e.prototype, "L4", void 0), a([c(cc.Node)], e.prototype, "R4", void 0), a([c(cc.Node)], e.prototype, "L2", void 0), a([c(cc.Node)], e.prototype, "R2", void 0), a([c(cc.Node)], e.prototype, "L1", void 0), a([c(cc.Node)], e.prototype, "R1", void 0), a([c(cc.Node)], e.prototype, "winerNode", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../../Game/MainData": "MainData",
		"./UIMatch": "UIMatch"
	}],
	UIMatch_ViewSelectRole: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "1682bkJC49H+53E+CBkXW0X", "UIMatch_ViewSelectRole");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/MainData"),
			r = t("../../ADSDK"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.uiMatch = null, e.lname = null, e.ldesc = null, e.cells = [], e.bigIcons = [], e.bigIcon = null, e.view_current = null, e.cbtn = null, e.cname = null, e.curSel = 0, e.curLock = !1, e
				}
				return o(e, t), e.prototype.Show = function() {
					this.node.active = !0
				}, e.prototype.start = function() {
					this.view_current.active = !1, this.UpdateView()
				}, e.prototype.UpdateView = function() {
					for (var t = n.default.allSeeds.matchheads, e = [], i = [], o = [], a = 0; a < 3; a++) n.default.role.matchHistory[a] || (n.default.role.matchHistory[a] = 0);
					for (var r = 0; r < t.length; r++) e[r] = t[r].desc, i[r] = t[r].name, o[r] = t[r].needWinCount;
					var s = n.default.role.matchHistory[0] + n.default.role.matchHistory[1] + n.default.role.matchHistory[2];
					s || (s = 0);
					for (var l = 0; l < this.cells.length; l++) {
						var c = this.cells[l],
							u = c.getChildByName("selected"),
							d = c.getChildByName("LockLever");
						d.active = s < t[l].needWinCount, u.active = this.curSel == l, u.active && (this.bigIcon.spriteFrame = this.bigIcons[l], this.lname.string = i[l], this.ldesc.string = e[l], this.curLock = d.active, s < t[l].needWinCount && (this.ldesc.string = "Thắng " + s + "/" + t[l].needWinCount + " lần để mở khóa"))
					}
				}, e.prototype.SelectCell = function(t) {
					this.curSel = t - 1, this.UpdateView()
				}, e.prototype.BTN_SelCell1 = function() {
					this.SelectCell(1)
				}, e.prototype.BTN_SelCell2 = function() {
					this.SelectCell(2)
				}, e.prototype.BTN_SelCell3 = function() {
					this.SelectCell(3)
				}, e.prototype.BTN_SelCell4 = function() {
					this.SelectCell(4)
				}, e.prototype.BTN_SelCell5 = function() {
					this.SelectCell(5)
				}, e.prototype.BTN_SelCell6 = function() {
					this.SelectCell(6)
				}, e.prototype.BTN_Close = function() {
					this.node.active = !1
				}, e.prototype.BTN_SelectRole = function() {
					if (!this.curLock) {
						var t = n.default.allSeeds.matchheads;
						this.cname.string = t[this.curSel].name, this.view_current.active = !0
					}
				}, e.prototype.mistakeBanner = function() {
					this.cbtn.y += 68, r.default.BannerAd.show()
				}, e.prototype.BTN_CurrentSelectRole = function() {
					this.curLock || (this.node.active = !1, this.uiMatch.SelectRole(this.curSel + 1))
				}, e.prototype.BTN_Close_View = function() {
					this.view_current.active = !1
				}, a([c(cc.Label)], e.prototype, "lname", void 0), a([c(cc.Label)], e.prototype, "ldesc", void 0), a([c([cc.Node])], e.prototype, "cells", void 0), a([c([cc.SpriteFrame])], e.prototype, "bigIcons", void 0), a([c(cc.Sprite)], e.prototype, "bigIcon", void 0), a([c(cc.Node)], e.prototype, "view_current", void 0), a([c(cc.Node)], e.prototype, "cbtn", void 0), a([c(cc.Label)], e.prototype, "cname", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../../ADSDK": "ADSDK",
		"../../Game/MainData": "MainData"
	}],
	UIMatch_ViewVS: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "e035ePVsAhGn53OZFyPwTcI", "UIMatch_ViewVS");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/MainData"),
			r = t("../UILoading"),
			s = t("./UIMatch"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.uiMatch = null, e.iconL = null, e.lnameL = null, e.iconR = null, e.lnameR = null, e.lMatchMode = null, e.lMatchDesc = null, e.lView = null, e.rView = null, e
				}
				return o(e, t), e.prototype.Show = function() {
					var t, e = this,
						i = n.default.role.match;
					switch (i.currentStep) {
						case 0:
							t = i.players16;
							break;
						case 1:
							t = i.players8;
							break;
						case 2:
							t = i.players4;
							break;
						case 3:
							t = i.players2
					}
					var o = t.indexOf(i.playerRole),
						a = -1;
					a = o % 2 == 0 ? t[o + 1] : t[o - 1], s.default.enemyIdx = a, this.lnameL.string = "Bạn", this.lnameR.string = s.default.plyNames[a], n.default.uiPack.load("MatchIcons/" + s.default.pngNames[i.playerRole] + "Full", cc.SpriteFrame, function(t, i) {
						e.iconL.spriteFrame = i
					}), n.default.uiPack.load("MatchIcons/" + s.default.pngNames[a] + "Full", cc.SpriteFrame, function(t, i) {
						e.iconR.spriteFrame = i
					}), this.node.active = !0;
					var r = n.default.allSeeds.matchScenes[i.matchMode];
					this.lMatchMode.string = r.name, i.sklP = r.startBP, this.lMatchDesc.string = n.default.allSeeds.matchScenes[i.matchMode].startDesc, this.lView.x = -1e3, this.rView.x = 1e3, cc.tween(this.lView).to(.5, {
						x: 0
					}, {
						easing: "elasticOut"
					}).start(), cc.tween(this.rView).to(.5, {
						x: 0
					}, {
						easing: "elasticOut"
					}).start()
				}, e.prototype.BTN_Close = function() {
					this.node.active = !1
				}, e.prototype.BTN_StartBattle = function() {
					r.default.LoadScene("GArmory")
				}, a([u(cc.Sprite)], e.prototype, "iconL", void 0), a([u(cc.Label)], e.prototype, "lnameL", void 0), a([u(cc.Sprite)], e.prototype, "iconR", void 0), a([u(cc.Label)], e.prototype, "lnameR", void 0), a([u(cc.Label)], e.prototype, "lMatchMode", void 0), a([u(cc.Label)], e.prototype, "lMatchDesc", void 0), a([u(cc.Node)], e.prototype, "lView", void 0), a([u(cc.Node)], e.prototype, "rView", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../../Game/MainData": "MainData",
		"../UILoading": "UILoading",
		"./UIMatch": "UIMatch"
	}],
	UIMatch_ViewWin: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "308a579nU9C8pgrry9A0K0w", "UIMatch_ViewWin");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../UILoading"),
			r = t("./UIMatch"),
			s = cc._decorator,
			l = s.ccclass,
			c = (s.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return o(e, t), e.prototype.BTN_Back = function() {
					r.default.isBattleWin = !1, console.log(r.default.isBattleWin), n.default.LoadScene("GLogin")
				}, e = a([l], e)
			}(cc.Component));
		i.default = c, cc._RF.pop()
	}, {
		"../UILoading": "UILoading",
		"./UIMatch": "UIMatch"
	}],
	UIMatch_WaitCD: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "9c52dC2DRBGOrIr3M0+4Eml", "UIMatch_WaitCD");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/Common/GameUtil"),
			r = t("../../Game/MainData"),
			s = cc._decorator,
			l = s.ccclass,
			c = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.uiMatch = null, e.lTime = null, e.lCost = null, e.cost = 0, e._cost = 0, e
				}
				return o(e, t), e.prototype.Show = function() {
					this.node.active = !0, this.update(0)
				}, e.prototype.update = function(t) {
					var e = r.default.role.match,
						i = n.GameUtil.SystemTime(),
						o = e.cd - i;
					o > 0 ? n.GameUtil.FormatTime_HHMMSS(o) : this.BTN_Fast(), this.cost = o / 3e5, this._cost != this.cost && (this._cost = this.cost, this.lCost.string = this.cost.toFixed(), this.lTime.string = n.GameUtil.FormatTime_HHMMSS(o))
				}, e.prototype.BTN_Fast = function() {
					this.uiMatch.ResetMatchCD()
				}, a([c(cc.Label)], e.prototype, "lTime", void 0), a([c(cc.Label)], e.prototype, "lCost", void 0), e = a([l], e)
			}(cc.Component);
		i.default = u, cc._RF.pop()
	}, {
		"../../Game/Common/GameUtil": "GameUtil",
		"../../Game/MainData": "MainData"
	}],
	UIMatch: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "7669fkA4nJMkoA+MJnAmvm0", "UIMatch");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/Common/GameUtil"),
			r = t("../../Game/Data/GD_Match"),
			s = t("../../Game/Data/GEnums"),
			l = t("../../Game/MainData"),
			c = t("../UILoading"),
			u = t("./UIMatch_ViewMatch"),
			d = t("./UIMatch_ViewSelectRole"),
			h = t("./UIMatch_ViewVS"),
			p = t("./UIMatch_WaitCD"),
			f = cc._decorator,
			m = f.ccclass,
			v = f.property,
			y = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.viewBase = null, e.base_SelectDiff = null, e.base_Continue = null, e.base_WaitCD = null, e.viewSelectRole = null, e.viewMatch = null, e.viewVS = null, e.lMathRound = null, e.lDiff = null, e.viewFail = null, e.viewWin = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					this.UpdateView()
				}, e.prototype.UpdateView = function() {
					l.default.curMode = s.\u6a21\u5f0f.\u6bd4\u8d5b, this.viewSelectRole.node.active = !1, this.viewBase.active = !0, this.viewMatch.node.active = !1, this.viewVS.node.active = !1, this.viewSelectRole.uiMatch = this, this.viewMatch.uiMatch = this, this.viewVS.uiMatch = this, this.base_WaitCD.uiMatch = this, this.base_SelectDiff.active = null == l.default.role.match, this.base_Continue.active = !this.base_SelectDiff.active, this.base_WaitCD.node.active = !1, this.viewFail.active = !1, this.viewWin.active = !1;
					var t = l.default.role.match;
					if (t) {
						this.lDiff.string = ["", "Thường", "Khó", "Điên rồ"][t.diff];
						this.lMathRound.string = ["Vòng một", "Tứ bốn", "Bán kết", "Chung kết"][t.currentStep], 4 == t.currentStep ? i.isBattleWin ? (this.viewBase.active = !1, this.viewWin.active = !0) : (this.base_SelectDiff.active = !1, this.base_Continue.active = !1, this.base_WaitCD.node.active = !0, this.base_WaitCD.Show()) : i.isBattleWin && this.viewMatch.Show()
					}
					i.isBattleFail && (this.viewBase.active = !1, this.viewFail.active = !0)
				}, e.prototype.BTN_Diff1 = function() {
					this.SelectDiff(1)
				}, e.prototype.BTN_Diff2 = function() {
					this.SelectDiff(2)
				}, e.prototype.BTN_Diff3 = function() {
					this.SelectDiff(3)
				}, e.prototype.SelectDiff = function(t) {
					var e = new r.default;
					switch (l.default.role.match = e, e.diff = t, e.playerRole = 1, e.matchMode = n.GameUtil.RandomRangeInt(1, 5), e.cd = n.GameUtil.SystemTime(!0) + 432e5, this.viewSelectRole.node.active = !0, this.viewSelectRole.Show(), t) {
						case 1:
							"\u7b80\u5355";
							break;
						case 2:
							"\u666e\u901a";
							break;
						case 3:
							"\u56f0\u96be"
					}
				}, e.prototype.SelectRole = function(t) {
					l.default.role.match.playerRole = t, this.viewMatch.Show();
					l.default.allSeeds.matchheads[t]
				}, e.prototype.ResetMatchCD = function() {
					l.default.role.match = null, this.base_WaitCD.node.active = !1, this.base_SelectDiff.active = !0, this.base_Continue.active = !1
				}, e.prototype.BTN_Continue = function() {
					this.viewMatch.Show()
				}, e.prototype.BTN_Back = function() {
					c.default.LoadScene("GLogin")
				}, e.prototype.BTN_Aband = function() {
					i.isBattleFail = !1, l.default.role.match.currentStep = 4, this.viewFail.active = !1, this.UpdateView(), l.default.SaveGame()
				}, e.prototype.BTN_RMBContinue = function() {
					i.isBattleFail = !1, this.viewFail.active = !1, this.UpdateView(), l.default.SaveGame()
				}, e.isBattleWin = !1, e.isBattleFail = !1, e.enemyIdx = 0, e.pngNames = ["null", "Miner", "Swordwrath", "Archidon", "Spearton", "Magikill", "Giant", "Biker", "Bro", "Cheerleader", "Climber", "CrazyJay", "Footballer", "Gamer", "Goth", "Grandma", "Nerd", "Pro", "Skater"], e.plyNames = ["null", "Thợ mỏ", "Cây gậy", "Cung thủ", "Thương", "Pháp sư", "Khổng lồ", "Biker", "Bro", "Cheerleader", "Climber", "CrazyJay", "Footballer", "Gamer", "Goth", "Grandma", "Nerd", "Pro", "Skater"], a([v(cc.Node)], e.prototype, "viewBase", void 0), a([v(cc.Node)], e.prototype, "base_SelectDiff", void 0), a([v(cc.Node)], e.prototype, "base_Continue", void 0), a([v(p.default)], e.prototype, "base_WaitCD", void 0), a([v(d.default)], e.prototype, "viewSelectRole", void 0), a([v(u.default)], e.prototype, "viewMatch", void 0), a([v(h.default)], e.prototype, "viewVS", void 0), a([v(cc.Label)], e.prototype, "lMathRound", void 0), a([v(cc.Label)], e.prototype, "lDiff", void 0), a([v(cc.Node)], e.prototype, "viewFail", void 0), a([v(cc.Node)], e.prototype, "viewWin", void 0), e = i = a([m], e)
			}(cc.Component);
		i.default = y, cc._RF.pop()
	}, {
		"../../Game/Common/GameUtil": "GameUtil",
		"../../Game/Data/GD_Match": "GD_Match",
		"../../Game/Data/GEnums": "GEnums",
		"../../Game/MainData": "MainData",
		"../UILoading": "UILoading",
		"./UIMatch_ViewMatch": "UIMatch_ViewMatch",
		"./UIMatch_ViewSelectRole": "UIMatch_ViewSelectRole",
		"./UIMatch_ViewVS": "UIMatch_ViewVS",
		"./UIMatch_WaitCD": "UIMatch_WaitCD"
	}],
	UIPopDialog: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "724d9ycL/NI3LuijmAXsMpa", "UIPopDialog");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.btnOK = null, e.btnOK2 = null, e.btnCANCEl = null, e.tLabel = null, e.mode = 0, e.onComp = null, e.onCancel = null, e.caller = null, e
				}
				var i;
				return o(e, t), i = e, e.ShowOKOnly = function(t, e, o) {
					i.Show(t, e, null, o, 0)
				}, e.ShowOKCancel = function(t, e, o, a) {
					i.Show(t, e, o, a, 1)
				}, e.Show = function(t, e, o, a, n) {
					cc.resources.load("UI/UIPopDialog", function(r, s) {
						if (r) console.error(r);
						else {
							var l = cc.instantiate(s),
								c = l.getComponent(i);
							c.txt = t, c.onComp = e, c.onCancel = o, c.caller = a, c.mode = n, cc.find("Canvas").addChild(l)
						}
					})
				}, e.prototype.start = function() {
					this.btnOK.active = 1 == this.mode, this.btnOK2.active = 0 == this.mode, this.btnCANCEl.active = 1 == this.mode, this.tLabel.string = this.txt
				}, e.prototype.BTN_OK = function() {
					this.onComp && this.onComp.call(this.caller), this.CloseUI()
				}, e.prototype.BTN_CANCEL = function() {
					this.onCancel && this.onCancel.call(this.caller), this.CloseUI()
				}, e.prototype.CloseUI = function() {
					this.node.active = !1, this.node.destroy()
				}, a([s(cc.Node)], e.prototype, "btnOK", void 0), a([s(cc.Node)], e.prototype, "btnOK2", void 0), a([s(cc.Node)], e.prototype, "btnCANCEl", void 0), a([s(cc.Label)], e.prototype, "tLabel", void 0), e = i = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	UIPopText: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "807f11Zvc1MJag565we1/12", "UIPopText");
		var o = this && this.__extends || function() {
			var t = function(e, i) {
				return (t = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function(e, i) {
				function o() {
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var a = function(t) {
			function e() {
				var e = t.call(this) || this;
				return e.hasInit = !1, e
			}
			return o(e, t), e.prototype.childrenCreated = function() {}, e.prototype.UpdateView = function() {}, e.prototype.SetData = function(t, e) {
				this.text = t, this.color = e, this.UpdateView()
			}, e
		}(cc.Component);
		i.default = a, cc._RF.pop()
	}, {}],
	UIShop: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "ccc98GQLJpPfIplSaPHWQyv", "UIShop");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/MainData"),
			r = t("../../Prefabs/GShopCell"),
			s = t("../UILoading"),
			l = t("./UISkinShop"),
			c = t("../../CCScripts/UIBattle"),
			u = t("../../ADSDK"),
			d = cc._decorator,
			h = d.ccclass,
			p = d.property,
			f = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.lRMB = null, e.lItemDesc = null, e.lItemPrice = null, e.lFreeDiamond = null, e.lAd = null, e.btnBuy = null, e.btnAdBuy = null, e.tableNoBattle = null, e.btnFreeDiamond = null, e.FreeDiamond = null, e.delFreeDiamond = null, e.btnDTurnTable = null, e.DTurntable = null, e.cells = [], e.curCell = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					for (var t = 0; t < this.cells.length; t++) this.cells[t].Setup(t + 1, this), this.cells[t].SetSelect(!1);
					this.lItemDesc.string = "", this.btnBuy.active = !1, this.btnAdBuy.active = !1, this.tableNoBattle.getChildByName("button_skins_blank").active = !i.isOnbattle, this.FreeDiamond.active = !1;
					var e = null != c.default.selectId ? c.default.selectId : 0;
					this.OnSelectCell(this.cells[e]), this.UpdateView(), u.default.showBannerAd()
				}, e.prototype.initPage = function() {
					var t = n.default.role.freeDiamond;
					null != n.default.allSeeds.freeDiamond[t + 1] && (n.default.allSeeds.freeDiamond[t + 1].adTimes > 0 ? (this.btnFreeDiamond.getChildByName("AdIcon").active = !0, this.btnFreeDiamond.getChildByName("Label").active = !0, this.btnFreeDiamond.getChildByName("Free").active = !1) : (this.btnFreeDiamond.getChildByName("AdIcon").active = !1, this.btnFreeDiamond.getChildByName("Label").active = !1, this.btnFreeDiamond.getChildByName("Free").active = !0));
					n.default.role.DturnTable > 6 && (this.btnDTurnTable.active = !1)
				}, e.prototype.UpdateView = function() {
					for (var t = 0; t < this.cells.length; t++) this.cells[t].Setup(t + 1, this);
					this.lRMB.string = n.default.role.rmb.toFixed();
					var e = this.curCell;
					if (null != e) {
						var i = n.default.allSeeds.items[e.itemId];
						n.default.GetShopAdNum(e.itemId) >= i.adFreeTimes ? this.btnAdBuy.active = !1 : this.lAd.string = (i.adFreeTimes - n.default.GetShopAdNum(e.itemId)).toString()
					}
					this.FreeDiamond.active && (null != n.default.allSeeds.freeDiamond[n.default.role.freeDiamond + 1] ? this.lFreeDiamond.string = n.default.allSeeds.freeDiamond[n.default.role.freeDiamond + 1].diamondNum.toString() : (this.lFreeDiamond.string = n.default.allSeeds.freeDiamond[n.default.role.freeDiamond].diamondNum.toString(), this.btnFreeDiamond.active = !1, this.FreeDiamond.getChildByName("NoTime").active = !0));
					this.initPage()
				}, e.prototype.BTN_Back = function() {
					if (i.backScene) {
						var t = i.backScene;
						i.backScene = null, s.default.LoadScene(t)
					} else i.isOnbattle = !1, this.node.destroy();
					if (i.onBackFunc) {
						var e = i.onBackFunc,
							o = i.onBackCaller;
						i.onBackCaller = null, i.onBackFunc = null, e.call(o)
					}
				}, e.prototype.BTN_Buy = function() {
					var t = n.default.allSeeds.items[this.curCell.itemId].price;
					t <= n.default.role.rmb ? (n.default.AddItemNum(this.curCell.itemId, 1, !1), n.default.role.rmb -= t, this.UpdateView()) : null != n.default.allSeeds.freeDiamond[n.default.role.freeDiamond + 1] && (this.FreeDiamond.active = !0), n.default.SaveGame(), this.UpdateView()
				}, e.prototype.BTN_Ad_Buy = function() {
					var t = this;
					u.default.showVideoAD(this, function() {
						t.Ad_Buy_Help()
					})
				}, e.prototype.Ad_Buy_Help = function() {
					var t = n.default.allSeeds.items[this.curCell.itemId],
						e = n.default.GetShopAdNum(this.curCell.itemId);
					(e += 1) == t.adFreeTimes ? (n.default.AddItemNum(this.curCell.itemId, 1, !1, !0), n.default.SetShopAdNum(this.curCell.itemId, e)) : n.default.SetShopAdNum(this.curCell.itemId, e), this.UpdateView(), n.default.SaveGame()
				}, e.prototype.BTN_Ad_Free_Diamond = function() {
					var t = n.default.role.freeDiamond;
					if (null != n.default.allSeeds.freeDiamond[t + 1])
						if (n.default.allSeeds.freeDiamond[t + 1].adTimes > 0) {
							var e = this;
							u.default.showVideoAD(this, function() {
								e.Ad_Free_Diamond_Help()
							})
						} else this.Ad_Free_Diamond_Help()
				}, e.prototype.Ad_Free_Diamond_Help = function() {
					var t = n.default.role.freeDiamond,
						e = n.default.allSeeds.freeDiamond[t + 1];
					n.default.role.rmb += e.diamondNum, n.default.role.freeDiamond += 1, this.FreeDiamond.active = !1, this.UpdateView(), n.default.SaveGame()
				}, e.prototype.BTN_Del_Free_Diamond = function() {
					this.FreeDiamond.active = !1
				}, e.prototype.BTN_Gem = function() {
					this.FreeDiamond.active = !0, this.UpdateView()
				}, e.prototype.BTN_SkinShop = function() {
					l.default.backScene = i.backScene, s.default.LoadScene("GSkinShop")
				}, e.prototype.BTN_DTurnTable = function() {
					var t = cc.instantiate(this.DTurntable);
					t.x = 0, t.y = 80, t.scaleX = .9, t.scaleY = .9, t.getComponent("GDTurntable").Setup(this), this.node.addChild(t)
				}, e.prototype.OnSelectCell = function(t) {
					this.curCell = t, this.btnBuy.active = !0, this.btnAdBuy.active = !0;
					for (var e = 0; e < this.cells.length; e++) this.cells[e].SetSelect(t == this.cells[e]);
					var i = n.default.allSeeds.items[t.itemId];
					this.lItemDesc.string = i.desc, this.lItemPrice.string = i.price.toFixed(), n.default.GetShopAdNum(t.itemId) >= i.adFreeTimes ? this.btnAdBuy.active = !1 : this.lAd.string = (i.adFreeTimes - n.default.GetShopAdNum(t.itemId)).toString()
				}, e.backScene = null, e.isOnbattle = !1, e.onBackFunc = null, e.onBackCaller = null, a([p(cc.Label)], e.prototype, "lRMB", void 0), a([p(cc.Label)], e.prototype, "lItemDesc", void 0), a([p(cc.Label)], e.prototype, "lItemPrice", void 0), a([p(cc.Label)], e.prototype, "lFreeDiamond", void 0), a([p(cc.Label)], e.prototype, "lAd", void 0), a([p(cc.Node)], e.prototype, "btnBuy", void 0), a([p(cc.Node)], e.prototype, "btnAdBuy", void 0), a([p(cc.Node)], e.prototype, "tableNoBattle", void 0), a([p(cc.Node)], e.prototype, "btnFreeDiamond", void 0), a([p(cc.Node)], e.prototype, "FreeDiamond", void 0), a([p(cc.Node)], e.prototype, "delFreeDiamond", void 0), a([p(cc.Node)], e.prototype, "btnDTurnTable", void 0), a([p(cc.Prefab)], e.prototype, "DTurntable", void 0), a([p([r.default])], e.prototype, "cells", void 0), e = i = a([h], e)
			}(cc.Component);
		i.default = f, cc._RF.pop()
	}, {
		"../../ADSDK": "ADSDK",
		"../../CCScripts/UIBattle": "UIBattle",
		"../../Game/MainData": "MainData",
		"../../Prefabs/GShopCell": "GShopCell",
		"../UILoading": "UILoading",
		"./UISkinShop": "UISkinShop"
	}],
	UISkinShop: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "10c8eJvJwZPXLS2CJ367CxL", "UISkinShop");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../../Game/MainData"),
			r = t("../../Utils/GSpineSprite"),
			s = t("../../Utils/GSpineSpriteEx"),
			l = t("../UILoading"),
			c = t("./TogglePlus"),
			u = t("./UIShop"),
			d = cc._decorator,
			h = d.ccclass,
			p = d.property,
			f = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.lRMB = null, e.table_baseskins = null, e.table_otherskins = null, e.title = null, e.desc = null, e.btnsRoot = null, e.logoRoot = null, e.titlebar = null, e.TCost = null, e.txtCost = null, e.btnEquip = null, e.animUnits = [], e.togUnits = [], e.togSkins = [], e.txtCosts = [], e.spfs = [], e.curUnitIdx = 0, e.curSkinIdx = 0, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					this.titlebar.active = "GShop" == i.backScene;
					for (var t = 0; t < this.animUnits.length; t++)
						for (var e = this.animUnits[t], o = t + 1, a = n.default.role.playerSkins.GetJobSkin(o), r = i._unitData[t], s = r.slots, l = r.skins[a], c = 0; c < s.length; c++) i._SetupAnim(e, s[c], l[c]);
					this.UpdateView()
				}, e.prototype.SelectUnit = function() {
					for (var t = 0; t < this.togUnits.length; t++)
						if (this.togUnits[t].isChecked) return void(this.curUnitIdx = t)
				}, e.prototype.SelectSkin = function() {
					for (var t = 0; t < this.togSkins.length; t++)
						if (this.togSkins[t].isChecked) return void(this.curSkinIdx = t)
				}, e.prototype.BTN_Shop = function() {
					u.default.backScene = i.backScene, l.default.LoadScene("GShop")
				}, e.prototype.BTN_Gem = function() {}, e.prototype.BTN_SelectUnit = function() {
					this.SelectUnit(), this.curSkinIdx = n.default.role.playerSkins.GetJobSkin(this.curUnitIdx + 1), this.togSkins[this.curSkinIdx].isChecked = !0, this.UpdateView()
				}, e.prototype.BTN_SelectSkin = function() {
					this.SelectSkin(), this.UpdateView()
				}, e.prototype.BTN_Back = function() {
					l.default.LoadScene(i.backScene)
				}, e.BuySetSkin = function(t) {
					for (var e = 0; e < this._unitData.length; e++) {
						var i = e + 1;
						n.default.role.playerSkins.SetSkinBuyed(i, t), n.default.role.playerSkins.SetJobSkin(i, t)
					}
				}, e.prototype.BTN_Buy = function() {
					console.log("\u8d2d\u4e70");
					var t = i._unitData[this.curUnitIdx].cost[this.curSkinIdx];
					if (n.default.role.rmb >= t) {
						n.default.role.rmb -= t;
						var e = this.curUnitIdx + 1;
						n.default.role.playerSkins.SetSkinBuyed(e, this.curSkinIdx), this.BTN_Equip(), n.default.SaveGame()
					}
				}, e.prototype.BTN_Equip = function() {
					console.log("\u88c5\u5907");
					var t = this.curUnitIdx + 1;
					n.default.role.playerSkins.SetJobSkin(t, this.curSkinIdx), this.UpdateView()
				}, e.prototype.UpdateView = function() {
					var t = n.default.role.playerSkins,
						e = this.curUnitIdx + 1,
						o = t.GetJobSkin(e);
					this.lRMB.string = n.default.role.rmb.toFixed(), this.title.string = i._skinDesc[this.curSkinIdx][0], this.desc.string = i._skinDesc[this.curSkinIdx][1];
					for (var a = this.animUnits[this.curUnitIdx], l = i._unitData[this.curUnitIdx], c = 0; c < this.txtCosts.length; c++) this.txtCosts[c].string = l.cost[c];
					var u = l.slots,
						d = l.skins[o];
					for (c = 0; c < u.length; c++) i._SetupAnim(a, u[c], d[c]);
					for (c = 0; c < this.logoRoot.children.length; c++) this.logoRoot.children[c].active = c == this.curUnitIdx;
					this.TCost.active = !t.IsSkinBuyed(e, this.curSkinIdx), this.txtCost.string = l.cost[this.curSkinIdx], this.btnEquip.active = !this.TCost.active && o != this.curSkinIdx;
					var h = [1, .7, .7, .5, .7, .5],
						p = [0, 0, 0, 45, 0, 0];
					for (c = 0; c < this.togSkins.length; c++) {
						var f = this.togSkins[c];
						if (f.isSelected = o == c, f.node.active) {
							var m = a.skeletonData.getRuntimeData(),
								v = m.defaultSkin,
								y = m.findSlotIndex(u[0]),
								g = v.getAttachment(y, l.skins[c][0]),
								b = a.getTextureAtlas(g);
							3 == this.curUnitIdx && 0 == c ? f.SetupFrame(b, this.spfs, .3, -30) : f.SetupFrame(b, this.spfs, h[this.curUnitIdx], p[this.curUnitIdx]);
							for (var _ = f.getComponentsInChildren(r.default), S = 0; S < _.length; S++) 3 == this.curUnitIdx && 0 == c ? _[S].SetupFrame(b, this.spfs, .3, -30) : _[S].SetupFrame(b, this.spfs, h[this.curUnitIdx], p[this.curUnitIdx])
						}
					}
					for (c = 0; c < this.btnsRoot.children.length; c++) {
						this.btnsRoot.children[c].getChildByName("TCost").active = !t.IsSkinBuyed(e, c)
					}
					if (0 == this.curSkinIdx) {
						this.table_baseskins.active = !0, this.table_otherskins.active = !1;
						for (c = 0; c < this.table_baseskins.children.length; c++) this.table_baseskins.children[c].active = this.curUnitIdx == c
					} else {
						this.table_baseskins.active = !1, this.table_otherskins.active = !0;
						for (c = 0; c < this.table_otherskins.children.length; c++)
							if (this.table_otherskins.children[c].active = this.curUnitIdx == c, this.curUnitIdx == c) {
								var w = this.table_otherskins.children[c].getComponentsInChildren(s.default);
								for (S = 0; S < w.length; S++) w[S].skinType = this.curSkinIdx
							}
					}
				}, e.SetupAnimByJobLv = function(t, e, i, o, a) {
					var n = this._unitData[t - 1],
						r = n.slots.indexOf(o),
						s = n.skins[e][r];
					s = s.replace("-3", "-" + a), this._SetupAnim(i, o, s)
				}, e._SetupAnim = function(t, e, i) {
					var o = t.findSlot(e),
						a = t.skeletonData.getRuntimeData(),
						n = a.defaultSkin,
						r = a.findSlotIndex(e);
					if (i) {
						var s = n.getAttachment(r, i);
						if (!o || !s) return void cc.error(o && s, "slots: " + e + ", attach: " + i + " not exists!");
						o.setAttachment(s)
					} else o.setAttachment(null)
				}, e.backScene = null, e._skinDesc = [
					["Cổ điển", "+ Hình cổ điển"],
					["Đi rừng", "+ tốc độ xây dựng tăng\n+ chi phí xây dựng giảm\n+ thời gian sống thêm"],
					["Băng", "+ Tốc độ đơn vị địch làm chậm\n+ Điều khiển người chơi đóng băng ngắn\n+ Máu cộng thêm"],
					["Quái thú", "+ Giảm choáng\n + Tăng tốc độ đánh\n + Máu cộng thêm"],
					["Magma", "+ Damage phản chiếu\n+ Scorchn điều khiển người chơi\n+ Máu thêm"],
					["Khát máu", "+ Hút máu\n+ Kháng độc\n+ Splash do người chơi điều khiển"]
				], e._unitData = [{
					slots: ["weapon", "bag"],
					skins: [
						["upgrades/miner3", "upgrades/minerbag3"],
						["skins/leaf/miner-leaf/miner-pickaxe-leaf-3", "skins/leaf/miner-leaf/miner-bag-leaf-3"],
						["skins/ice/miner-ice/miner-pickaxe-ice-3", "skins/ice/miner-ice/miner-bag-ice-3"],
						["skins/fur/miner-fur/miner-pickaxe-fur-3", "skins/fur/miner-fur/miner-bag-fur-3"],
						["skins/lava/miner-lava/miner-pickaxe-lava-3", "skins/lava/miner-lava/miner-bag-lava-3"],
						["skins/purple/miner-purple/miner-pickaxe-purple-3", "skins/purple/miner-purple/miner-bag-purple-3"]
					],
					cost: [0, 100, 200, 300, 400, 500]
				}, {
					slots: ["weapon", "helm"],
					skins: [
						["upgrades/Sword3", "upgrades/swordhelm3"],
						["skins/leaf/swordwrath-leaf/swordwrath-sword-leaf-4", "skins/leaf/swordwrath-leaf/swordwrath-helm-leaf-3"],
						["skins/ice/swordwrath-ice/swordwrath-sword-ice-4", "skins/ice/swordwrath-ice/swordwrath-helm-ice-3"],
						["skins/fur/swordwrath-fur/swordwrath-sword-fur-4", "skins/fur/swordwrath-fur/swordwrath-helm-fur-3"],
						["skins/lava/swordwrath-lava/swordwrath-sword-lava-4", "skins/lava/swordwrath-lava/swordwrath-helm-lava-3"],
						["skins/purple/swordwrath-purple/swordwrath-sword-purple-4", "skins/purple/swordwrath-purple/swordwrath-helm-purple-3"]
					],
					cost: [0, 100, 200, 300, 400, 500]
				}, {
					slots: ["Quiver1"],
					skins: [
						["upgrades/archidonquiver3"],
						["skins/leaf/archidon-leaf/archidon-quiver-leaf-3"],
						["skins/ice/archidon-ice/archidon-quiver-ice-3"],
						["skins/fur/archidon-fur/archidon-quiver-fur-3"],
						["skins/lava/archidon-lava/archidon-quiver-lava-3"],
						["skins/purple/archidon-purple/archidon-quiver-purple-3"]
					],
					cost: [0, 100, 200, 300, 400, 500]
				}, {
					slots: ["weapon", "helm", "Arrow1"],
					skins: [
						["classic-spearton-spear-3", "classic-spearton-helm-3", "classic-spearton-shield-3"],
						["skins/leaf/spearton-leaf/spearton-spear-leaf-3", "skins/leaf/spearton-leaf/spearton-helm-leaf-3", "skins/leaf/spearton-leaf/spearton-shield-leaf-3"],
						["skins/ice/spearton-ice/spearton-spear-ice-3", "skins/ice/spearton-ice/spearton-helmet-ice-3", "skins/ice/spearton-ice/spearton-shield-ice-3"],
						["skins/fur/spearton-fur/spearton-spear-fur-3", "skins/fur/spearton-fur/spearton-helm-fur-3", "skins/fur/spearton-fur/spearton-shield-fur-3"],
						["skins/lava/spearton-lava/spearton-spear-lava-3", "skins/lava/spearton-lava/spearton-helm-lava-3", "skins/lava/spearton-lava/spearton-shield-lava-3"],
						["skins/purple/spearton-purple/spearton-spear-purple-3", "skins/purple/spearton-purple/spearton-helm-purple-3", "skins/purple/spearton-purple/spearton-shield-purple-3"]
					],
					cost: [0, 100, 200, 300, 400, 500]
				}, {
					slots: ["weapon", "helm"],
					skins: [
						["upgrades/magikillstaff3", "upgrades/magikillhat3"],
						["skins/leaf/magikill-leaf/magikill-staff-leaf-3", "skins/leaf/magikill-leaf/magikill-hat-leaf-3"],
						["skins/ice/magikill-ice/magikill-staff-ice-3", "skins/ice/magikill-ice/magikill-hat-ice-3"],
						["skins/fur/magikill-fur/magikill-staff-fur-3", "skins/fur/magikill-fur/magikill-hat-fur-3"],
						["skins/lava/magikill-lava/magikill-staff-lava-3", "skins/lava/magikill-lava/magikill-hat-lava-3"],
						["skins/purple/magikill-purple/magikill-staff-purple-3", "skins/purple/magikill-purple/magikill-hat-purple-3"]
					],
					cost: [0, 100, 200, 300, 400, 500]
				}, {
					slots: ["weapon", "giant-helm"],
					skins: [
						["upgrades/giant3", null],
						["skins/leaf/giant-leaf/giant_club_leaf-3", "skins/leaf/giant-leaf/giant_helm_leaf-3"],
						["skins/ice/giant-ice/giant_club_ice-3", "skins/ice/giant-ice/giant_helm_ice-3"],
						["skins/fur/giant-fur/giant_club_fur-3", "skins/fur/giant-fur/giant_helm_fur-3"],
						["skins/lava/giant-lava/giant_club_lava-3", "skins/lava/giant-lava/giant_helm_lava-3"],
						["skins/purple/giant-purple/giant_club_purple-3", "skins/purple/giant-purple/giant_helm_purple-3"]
					],
					cost: [0, 100, 200, 300, 400, 500]
				}], a([p(cc.Label)], e.prototype, "lRMB", void 0), a([p(cc.Node)], e.prototype, "table_baseskins", void 0), a([p(cc.Node)], e.prototype, "table_otherskins", void 0), a([p(cc.Label)], e.prototype, "title", void 0), a([p(cc.Label)], e.prototype, "desc", void 0), a([p(cc.Node)], e.prototype, "btnsRoot", void 0), a([p(cc.Node)], e.prototype, "logoRoot", void 0), a([p(cc.Node)], e.prototype, "titlebar", void 0), a([p(cc.Node)], e.prototype, "TCost", void 0), a([p(cc.Label)], e.prototype, "txtCost", void 0), a([p(cc.Node)], e.prototype, "btnEquip", void 0), a([p([sp.Skeleton])], e.prototype, "animUnits", void 0), a([p([cc.Toggle])], e.prototype, "togUnits", void 0), a([p([c.default])], e.prototype, "togSkins", void 0), a([p([cc.Label])], e.prototype, "txtCosts", void 0), a([p({
					type: [cc.SpriteFrame]
				})], e.prototype, "spfs", void 0), e = i = a([h], e)
			}(cc.Component);
		i.default = f, cc._RF.pop()
	}, {
		"../../Game/MainData": "MainData",
		"../../Utils/GSpineSprite": "GSpineSprite",
		"../../Utils/GSpineSpriteEx": "GSpineSpriteEx",
		"../UILoading": "UILoading",
		"./TogglePlus": "TogglePlus",
		"./UIShop": "UIShop"
	}],
	UIStoryMap: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "f50806iueNLCrJbk0ivpC+Y", "UIStoryMap");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Prefabs/GMPoint"),
			r = t("./UILoading"),
			s = t("../Game/Common/GameUtil"),
			l = t("../Game/MainData"),
			c = t("../CCScripts/GBattle_Root"),
			u = t("./Shop/UIShop"),
			d = t("../ADSDK"),
			h = t("../Game/GBattle/UIItemPop"),
			p = cc._decorator,
			f = p.ccclass,
			m = p.property,
			v = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.flag = null, e.lSp = null, e.lRMB = null, e.pprefab = null, e.pointsRoot = null, e.roadRoot = null, e.cloud_left = null, e.cloud_right = null, e.Box = null, e.countDown = null, e.countDownLabel = null, e.boxes = [], e._curCell = null, e.canSelectMap = !1, e.box_scene = 0, e.all_box_del = !0, e.box = null, e
				}
				return o(e, t), e.prototype.start = function() {
					this.points = [];
					for (var t = 0; t < this.pointsRoot.childrenCount; t++) {
						var e = this.pointsRoot.children[t],
							i = cc.instantiate(this.pprefab);
						i.active = !0, e.addChild(i), i.x = 0, i.y = 0;
						var o = i.getComponent(n.default),
							a = t;
						o.Setup(a, this), this.points.push(o), null != o ? (t > 0 && this._CreateLine(this.roadRoot, this.pointsRoot.children[t - 1], this.pointsRoot.children[t], a), l.default.role.story.curSceneId == o.sceneLv && this.SelectPoint(o, !0)) : console.log("gmp is null!!!!!!" + t)
					}
					l.default.role.story.curSceneId > 12 && (this.canSelectMap = !0, o.Setup(12, this), this.points.push(o), this.SelectPoint(o, !0));
					var r = l.default.GetSkillPoint(l.default.curMode),
						s = l.default.role.rmb;
					if (this.lSp.string = r.toFixed(), this.lRMB.string = s.toFixed(), l.default.role.story.curSceneId > 1)
						if (this.check_box(), this.all_box_del && l.default.role.story.curSceneId >= l.default.role.story.boxid) {
							var c = Math.floor(7 * Math.random());
							this.boxes[c].active = !0
						} else null != this.box && (this.boxes[this.box].active = !0);
					l.default.role.CountDowm > 5 ? this.countDown.active = !1 : this.updateCountDown()
				}, e.prototype._CreateLine = function(t, e, i, o) {
					var a = s.Vector2.Distance(e.x, e.y, i.x, i.y),
						r = new cc.Vec2(i.x - e.x, i.y - e.y);
					r = r.normalizeSelf();
					for (var l = Math.floor(a / 30) - 1, c = (a - 30 * l) / (l + 1), u = 0; u < l; u++) {
						var d = (u + 1) * c + 30 * u + 15,
							h = cc.instantiate(this.pprefab);
						h.active = !0, t.addChild(h), h.getComponent(n.default).SetupDot(o, u), h.x = r.x * d + e.x, h.y = r.y * d + e.y
					}
				}, e.prototype.SelectPoint = function(t, e) {
					var i = this;
					if (void 0 === e && (e = !1), this.canSelectMap || e) {
						this._curCell = t;
						var o = t.node.parent.x,
							a = t.node.parent.y;
						e ? (this.flag.x = o, this.flag.y = a) : (this.flag.stopAllActions(), cc.tween(this.flag).to(.2, {
							x: o,
							y: a
						}, {
							easing: "expoOut"
						}).start(), cc.tween(this.flag).to(.1, {
							scaleX: 1.2,
							scaleY: .8
						}, {
							easing: "expoOut"
						}).call(function() {
							cc.tween(i.flag).to(.1, {
								scaleX: .9,
								scaleY: 1.1
							}, {
								easing: "expoOut"
							}).call(function() {
								cc.tween(i.flag).to(.1, {
									scaleX: 1,
									scaleY: 1
								}, {
									easing: "expoOut"
								}).start()
							}).start()
						}).start())
					}
				}, e.prototype.BTN_STARTBATTLE = function() {
					c.default.curSelSceneId = this._curCell.sceneLv, r.default.LoadScene("GBattle")
				}, e.prototype.BTN_BACK = function() {
					r.default.LoadScene("GLogin")
				}, e.prototype.BTN_WEAPON = function() {
					r.default.LoadScene("GArmory")
				}, e.prototype.BTN_SHOP = function() {
					u.default.backScene = "GStoryMap", r.default.LoadScene("GShop")
				}, e.prototype.BTN_Ad_Box = function() {
					var t = cc.instantiate(this.Box);
					t.x = 100, t.y = -10, t.getComponent("GMapBox").Setup(this), this.node.parent.addChild(t)
				}, e.prototype.Ad_Box = function() {
					this.close_all_box(), this.all_box_del = !0, this.lRMB.string = l.default.role.rmb.toFixed()
				}, e.prototype.close_all_box = function() {
					for (var t = 0; t < this.boxes.length; t++) this.boxes[t].active && (this.boxes[t].active = !1)
				}, e.prototype.check_box = function() {
					for (var t = 0; t < this.boxes.length; t++)
						if (this.boxes[t].active) {
							this.all_box_del = !1, this.box = t;
							break
						}
				}, e.prototype.BTN_CountDown = function() {
					var t = (new Date).getTime() / 1e3;
					if (l.default.role.CountDowm <= 0 || l.default.role.CountDowmTime > 0 && l.default.role.CountDowmTime <= t)
						if (l.default.role.CountDowm > 2) {
							var e = this;
							d.default.showVideoAD(this, function() {
								e.CountDown_help()
							})
						} else this.CountDown_help()
				}, e.prototype.CountDown_help = function() {
					var t = (new Date).getTime() / 1e3,
						e = !1;
					switch (l.default.role.CountDowm > 2 && (e = !0), l.default.role.CountDowm) {
						case 0:
							l.default.role.rmb += 10, l.default.role.CountDowm += 1, l.default.role.CountDowmTime = t + 60, h.default.Show(0, 10, e);
							break;
						case 1:
							l.default.role.rmb += 20, l.default.role.CountDowm += 1, l.default.role.CountDowmTime = t + 180, h.default.Show(0, 20, e);
							break;
						case 2:
							l.default.role.rmb += 50, l.default.role.CountDowm += 1, l.default.role.CountDowmTime = t + 300, h.default.Show(0, 50, e);
							break;
						case 3:
							l.default.role.rmb += 100, l.default.role.CountDowm += 1, l.default.role.CountDowmTime = t + 480, h.default.Show(0, 100, e);
							break;
						case 4:
							l.default.role.rmb += 200, l.default.role.CountDowm += 1, l.default.role.CountDowmTime = t + 720, h.default.Show(0, 200, e);
							break;
						case 5:
							l.default.role.rmb += 300, l.default.role.CountDowm += 1, h.default.Show(0, 300, e)
					}
					this.lRMB.string = l.default.role.rmb.toFixed(), l.default.SaveGame(), l.default.role.CountDowm > 5 ? this.countDown.active = !1 : this.updateCountDown()
				}, e.prototype.updateCountDown = function() {
					var t = this,
						e = !1;
					l.default.role.CountDowm > 2 && (e = !0);
					var i = (new Date).getTime() / 1e3;
					if (l.default.role.CountDowmTime <= i) this.countDown.getChildByName("CountLable").active = !1, e ? (this.countDown.getChildByName("BtnLable").active = !1, this.countDown.getChildByName("BtnLableAD").active = !0) : (this.countDown.getChildByName("BtnLable").active = !0, this.countDown.getChildByName("BtnLableAD").active = !1), this.countDownLabel.node.active = !1;
					else {
						this.countDown.getChildByName("CountLable").active = !0, this.countDown.getChildByName("BtnLable").active = !1, this.countDown.getChildByName("BtnLableAD").active = !1, this.countDownLabel.node.active = !0;
						var o = l.default.role.CountDowmTime - i,
							a = Math.floor(o / 60),
							n = Math.floor(o % 60);
						this.countDownLabel.string = n < 10 ? a + ":0" + n : a + ":" + n, this.scheduleOnce(function() {
							t.updateCountDown()
						}, 1)
					}
				}, e.prototype.BTN_Desk = function() {
					d.default.AddDeskIcon()
				}, e.showAnim = !1, a([m(cc.Node)], e.prototype, "flag", void 0), a([m(cc.Label)], e.prototype, "lSp", void 0), a([m(cc.Label)], e.prototype, "lRMB", void 0), a([m(cc.Prefab)], e.prototype, "pprefab", void 0), a([m(cc.Node)], e.prototype, "pointsRoot", void 0), a([m(cc.Node)], e.prototype, "roadRoot", void 0), a([m(cc.Node)], e.prototype, "cloud_left", void 0), a([m(cc.Node)], e.prototype, "cloud_right", void 0), a([m(cc.Prefab)], e.prototype, "Box", void 0), a([m(cc.Node)], e.prototype, "countDown", void 0), a([m(cc.Label)], e.prototype, "countDownLabel", void 0), a([m([cc.Node])], e.prototype, "boxes", void 0), e = a([f], e)
			}(cc.Component);
		i.default = v, cc._RF.pop()
	}, {
		"../ADSDK": "ADSDK",
		"../CCScripts/GBattle_Root": "GBattle_Root",
		"../Game/Common/GameUtil": "GameUtil",
		"../Game/GBattle/UIItemPop": "UIItemPop",
		"../Game/MainData": "MainData",
		"../Prefabs/GMPoint": "GMPoint",
		"./Shop/UIShop": "UIShop",
		"./UILoading": "UILoading"
	}],
	UIStoryWin: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "322aaWDGh9JtY6L4qyZk3/6", "UIStoryWin");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./UILoading"),
			r = cc._decorator,
			s = r.ccclass,
			l = r.property,
			c = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.tDiff = null, e.tTime = null, e
				}
				var i;
				return o(e, t), i = e, e.prototype.start = function() {
					this.tDiff.string = i.txtDiff, this.tTime.string = i.txtTime
				}, e.prototype.BTN_HOME = function() {
					n.default.LoadScene("GLogin")
				}, a([l(cc.Label)], e.prototype, "tDiff", void 0), a([l(cc.Label)], e.prototype, "tTime", void 0), e = i = a([s], e)
			}(cc.Component);
		i.default = c, cc._RF.pop()
	}, {
		"./UILoading": "UILoading"
	}],
	UITips: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "64a5e7qLkxLwq6wui/2MoPJ", "UITips");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.title = null, e
				}
				var i;
				return o(e, t), i = e, e.Show = function(t) {
					!i.isShow && cc.resources.load("UI/UITips", function(e, o) {
						if (e) console.error(e);
						else {
							var a = cc.instantiate(o),
								n = a.getComponent(i),
								r = cc.find("Canvas");
							n.title.string = t, r && r.addChild(a)
						}
					})
				}, e.prototype.start = function() {
					var t = this;
					i.isShow = !0, cc.tween(this.node).to(2, {
						opacity: 255
					}).call(function() {
						cc.tween(t.node).to(1, {
							opacity: 0
						}).call(function() {
							t.CloseUI()
						}).start()
					}).start()
				}, e.prototype.CloseUI = function() {
					i.isShow = !1, this.node.active = !1, this.node.destroy()
				}, e.isShow = !1, a([s(cc.Label)], e.prototype, "title", void 0), e = i = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	UIUnitTitle: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "81587lIgCxNILbXlAFfAeb8", "UIUnitTitle");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = n.property,
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.imgHP = null, e.imgHPEnemy = null, e.imgSK = null, e.imgHPBG = null, e.imgSKBG = null, e.imgBurn = null, e.imgIce = null, e.imgPosion = null, e.hpMax = 0, e.wkMax = 0, e
				}
				return o(e, t), e.prototype.SetHP = function(t, e) {
					switch (e) {
						case 0:
							if (!this.imgHP || !this.imgHPBG) return;
							(i = t / this.hpMax) > 1 && (i = 1), i < 0 && (i = 0), this.imgHP.node.setContentSize(50 * i, 6), this.imgHP.node.active = 1 != i && 0 != i;
							break;
						case 1:
							if (!this.imgHPEnemy || !this.imgHPBG) return;
							var i;
							(i = t / this.hpMax) > 1 && (i = 1), i < 0 && (i = 0), this.imgHPEnemy.node.setContentSize(50 * i, 6), this.imgHPEnemy.node.active = 1 != i && 0 != i
					}
					this.imgHPBG.node.active = 1 != i && 0 != i, this.CheckActive()
				}, e.prototype.SetWK = function(t) {
					if (this.imgSK && this.imgSKBG) {
						var e = t / this.wkMax;
						e > 1 && (e = 1), e < 0 && (e = 0), this.imgSK.node.setContentSize(50 * e, 6), this.imgSK.node.active = 0 != e, this.imgSKBG.node.active = 0 != e, this.CheckActive()
					}
				}, e.prototype.CheckBuffImg = function(t) {
					this.imgBurn && (this.imgBurn.node.active = t.buff_fire > 0), this.imgIce && (this.imgIce.node.active = t.buff_ice > 0), this.imgPosion && (this.imgPosion.node.active = t.buff_posion > 0)
				}, e.prototype.CheckActive = function() {
					var t = this.imgHPBG && this.imgHPBG.node.active,
						e = this.imgSKBG && this.imgSKBG.node.active;
					this.node.active = t || e
				}, a([s(cc.Sprite)], e.prototype, "imgHP", void 0), a([s(cc.Sprite)], e.prototype, "imgHPEnemy", void 0), a([s(cc.Sprite)], e.prototype, "imgSK", void 0), a([s(cc.Sprite)], e.prototype, "imgHPBG", void 0), a([s(cc.Sprite)], e.prototype, "imgSKBG", void 0), a([s(cc.Sprite)], e.prototype, "imgBurn", void 0), a([s(cc.Sprite)], e.prototype, "imgIce", void 0), a([s(cc.Sprite)], e.prototype, "imgPosion", void 0), e = a([r], e)
			}(cc.Component);
		i.default = l, cc._RF.pop()
	}, {}],
	UIUnlock: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "0c859x8C+lIvL30DUw9SaWB", "UIUnlock");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("../Game/Data/GEnums"),
			r = t("../UI/UILoading"),
			s = t("../Game/MainData"),
			l = cc._decorator,
			c = l.ccclass,
			u = l.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.anim = null, e.actor = null, e.gaint = null, e.ltitle = null, e.ldesc = null, e.needClose = !1, e
				}
				return o(e, t), e.prototype.start = function() {
					this.actor.node.active = !1, this.gaint.node.active = !1, this.anim.node.active = !1
				}, e.prototype.Show = function(t) {
					switch (t) {
						case n.EnumUnit.archer3:
							this.actor.node.active = !0, this.actor.setSkin("Archidon"), this.actor.setAnimation(0, "Archidon-Stand1", !0), this.ltitle.string = "Mở khóa: Archer", this.ldesc.string = "Cung thủ có thể tấn công kẻ thù từ xa";
							break;
						case n.EnumUnit.sparda4:
							this.actor.node.active = !0, this.actor.setSkin("Spearton"), this.actor.setAnimation(0, "Spearton-Stand1", !0), this.ltitle.string = "Mở khóa: Spearmen", this.ldesc.string = "Spearmen có khả năng phòng thủ mạnh mẽ hơn n Ranged Spears";
							break;
						case n.EnumUnit.mage5:
							this.actor.node.active = !0, this.actor.setSkin("Magikill"), this.actor.setAnimation(0, "Magikill-Stand", !0), this.ltitle.string = "Mở khóa: Mage", this.ldesc.string = "Mage có thể triệu hồi tay sai\nsát thương phép tầm xa";
							break;
						case n.EnumUnit.gaint6:
							this.gaint.node.active = !0, this.ltitle.string = "Mở khóa: Người khổng lồ", this.ldesc.string = "Người khổng lồ có siêu máu\nđòn tấn công phạm vi rộngnhạ gục kẻ thù xung quanh";
							break;
						case n.EnumUnit.towerarcher:
							this.gaint.node.active = !1, this.actor.node.active = !0, this.actor.setSkin("Castle_Archidon"), this.actor.setAnimation(0, "Archidon-Stand1", !0), this.ltitle.string = "Mở khóa: Castle Archer", this.ldesc.string = "Các đơn vị đóng quân trong lâu đài sẽ trở thành cung thủ trong lâu đài\nkhoảng cách tấn công siêu xa\nsẽ không bị kẻ thù tấn công", this.needClose = !0
					}
					this.node.active = !0, this.anim.node.active = !0, this.anim.play()
				}, e.prototype.BTN_OK = function() {
					2 != s.default.role.story.curSceneId || this.needClose ? r.default.LoadScene("GArmory") : this.Show(n.EnumUnit.towerarcher)
				}, a([u(cc.Animation)], e.prototype, "anim", void 0), a([u(sp.Skeleton)], e.prototype, "actor", void 0), a([u(sp.Skeleton)], e.prototype, "gaint", void 0), a([u(cc.Label)], e.prototype, "ltitle", void 0), a([u(cc.Label)], e.prototype, "ldesc", void 0), e = a([c], e)
			}(cc.Component);
		i.default = d, cc._RF.pop()
	}, {
		"../Game/Data/GEnums": "GEnums",
		"../Game/MainData": "MainData",
		"../UI/UILoading": "UILoading"
	}],
	aldSDK: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "e32acBLU+BLA6CW8yavJswl", "aldSDK");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = t("./config"),
			r = cc._decorator,
			s = r.ccclass,
			l = (r.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return o(e, t), e.sendEvent = function(t, e, i) {
					n.default.IsDeBug ? console.log(t + ":" + e + ":" + i) : window.wx && window.wx.aldSendEvent(t, {
						param: i
					})
				}, e.stageStart = function(t, e) {
					if (n.default.IsDeBug) console.log("\u5173\u5361\u5f00\u59cb" + e + t);
					else if (window.wx) {
						var i = 0;
						switch (e) {
							case "\u7ecf\u5178\u6a21\u5f0f":
								i = 1;
							case "\u7ade\u8d5b\u6a21\u5f0f":
								i = 2;
							case "\u65e0\u5c3d\u6a21\u5f0f":
								i = 3
						}
						window.wx.aldStage.onStart({
							stageId: i + "." + t,
							stageName: e + "\u7b2c" + t + "\u5173"
						})
					}
				}, e.stageEnd = function(t, e, i, o) {
					if (void 0 === o && (o = !1), n.default.IsDeBug) console.log("\u5173\u5361\u7ed3\u675f" + e + t);
					else if (window.wx) {
						var a = 0;
						switch (e) {
							case "\u7ecf\u5178\u6a21\u5f0f":
								a = 1;
							case "\u7ade\u8d5b\u6a21\u5f0f":
								a = 2;
							case "\u65e0\u5c3d\u6a21\u5f0f":
								a = 3
						}
						var r = "",
							s = "";
						i ? (r = "complete", s = "\u80dc\u5229") : (r = "fail", s = o ? "\u91cd\u73a9" : "\u9000\u51fa/\u653e\u5f03"), window.wx.aldStage.onEnd({
							stageId: a + "." + t,
							stageName: e + "\u7b2c" + t + "\u5173",
							event: r,
							params: {
								desc: s
							}
						})
					}
				}, e.stageRunning = function(t, e, i, o) {
					void 0 === o && (o = 0)
				}, e = a([s], e)
			}(cc.Component));
		i.default = l, cc._RF.pop()
	}, {
		"./config": "config"
	}],
	cocosAndNative: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "c7da3TxV9FNVJgQkUwq2qn8", "cocosAndNative"), Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var o = function() {
			function t() {
				this.sdkCallbacks = null
			}
			return t.getInstance = function() {
				return this.instance ? this.instance : (this.instance = new t, this.instance.sdkCallbacks = new Map, cc.sys.os === cc.sys.OS_ANDROID ? this.instance.OnNativeClass = "Laya/Native" : cc.sys.os === cc.sys.OS_IOS && (this.instance.OnNativeClass = "OcNativeClass"), this.instance)
			}, t.prototype.debug = function() {
				return cc.sys.os !== cc.sys.OS_ANDROID && cc.sys.os !== cc.sys.OS_IOS
			}, t.prototype.cocosToSDK = function(t, e, i, o, a) {
				if (this.sdkCallbacks.set(t, o), cc.sys.os !== cc.sys.OS_ANDROID && cc.sys.os !== cc.sys.OS_IOS && i && o) o.call(i, a);
				else {
					var n = new Map;
					n.set("cmd", t), n.set("data", e);
					for (var r = {}, s = 0, l = n; s < l.length; s++) {
						var c = l[s],
							u = c[0],
							d = c[1];
						r[u] = d
					}
					var h = "cocosToSDK:";
					cc.sys.os === cc.sys.OS_ANDROID && (h = "cocosToSDK"), jsb.reflection.callStaticMethod(this.OnNativeClass, h, JSON.stringify(r))
				}
			}, t.prototype.sdkToCocos = function(t) {
				var e = JSON.parse(t);
				this.sdkCallbacks.get(e.cmd)(e.data)
			}, t.instance = null, t
		}();
		i.default = o, cc._RF.pop()
	}, {}],
	config: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "972f3wZgqNGooBv2R20L2v6", "config");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = (n.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return o(e, t), e.secretkey = "passWord", e.congifid = "userData11", e.IsDeBug = !1, e.ishideLoading = !1, e.Channel = "4399", e.ADInterval = 6e4, e.againShowBannerAd = 3e4, e.cacheVesion = 1, e.isLoginReport = !1, e.mistakeBox = 0, e.mistakeBanner = 0, e.bannerDelay = 0, e.oppoVersion = 0, e.OriginBannerAD = 0, e.OriginBannerADrefreshtime = 0, e.OriginImplantAD = 0, e.OriginImplantADDelay = 0, e.BannerCloseBtn = 1, e.mapmistakeBox = 0, e.ChampionshipsmistakeBanner = 0, e.ChampionshipsbannerDelay = 0, e.zombiesmistakeBanner = 0, e.zombiesbannerDelay = 0, e.FullscreenOriginAD = 0, e.FullscreenOriginADDelay = 0, e.ReinforceDelay = 0, e = a([r], e)
			}(cc.Component));
		i.default = s, cc._RF.pop()
	}, {}],
	fbirdSDK: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "e7d3aVeE+tE0r42ItNEofQx", "fbirdSDK");
		var o = this && this.__extends || function() {
				var t = function(e, i) {
					return (t = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function(e, i) {
					function o() {
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
				}
			}(),
			a = this && this.__decorate || function(t, e, i, o) {
				var a, n = arguments.length,
					r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
				else
					for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(e, i, r) : a(e, i)) || r);
				return n > 3 && r && Object.defineProperty(e, i, r), r
			};
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var n = cc._decorator,
			r = n.ccclass,
			s = (n.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return o(e, t), e.gameConfig = {
					gameId: "7",
					sdk: "1",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.WxgameConfig = {
					gameId: "7",
					sdk: "1",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.QQgameConfig = {
					gameId: "7",
					sdk: "2",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.VivogameConfig = {
					gameId: "7",
					sdk: "3",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.OPPOgameConfig = {
					gameId: "7",
					sdk: "5",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.Game4399gameConfig = {
					gameId: "7",
					sdk: "6",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.BaidugameConfig = {
					gameId: "7",
					sdk: "11",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.ZijiegameConfig = {
					gameId: "7",
					sdk: "19",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.MZgameConfig = {
					gameId: "7",
					sdk: "24",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.HuaweigameConfig = {
					gameId: "7",
					sdk: "27",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.XiaomigameConfig = {
					gameId: "7",
					sdk: "34",
					platform: "3",
					debug: !0,
					api: "/event_report_v2"
				}, e.url = "", e.version = 100, e = a([r], e)
			}(cc.Component));
		i.default = s, cc._RF.pop()
	}, {}],
	htSdk: [function(t, e, i) {
		"use strict";
		cc._RF.push(e, "40f9aeK4KNMoZkelMKcSd34", "htSdk"),
			function(t, e) {
				for (var i in e) t[i] = e[i]
			}(i, function(t) {
				var e = {};

				function i(o) {
					if (e[o]) return e[o].exports;
					var a = e[o] = {
						i: o,
						l: !1,
						exports: {}
					};
					return t[o].call(a.exports, a, a.exports, i), a.l = !0, a.exports
				}
				return i.m = t, i.c = e, i.d = function(t, e, o) {
					i.o(t, e) || Object.defineProperty(t, e, {
						configurable: !1,
						enumerable: !0,
						get: o
					})
				}, i.r = function(t) {
					Object.defineProperty(t, "__esModule", {
						value: !0
					})
				}, i.n = function(t) {
					var e = t && t.__esModule ? function() {
						return t.default
					} : function() {
						return t
					};
					return i.d(e, "a", e), e
				}, i.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}, i.p = "", i(i.s = 1)
			}([function(t, e, i) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var o = function() {
					function t() {}
					return t.lerr = function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						t.unshift("====>"), console.error.apply(window, t)
					}, t.llog = function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						t.unshift("====>"), console.log.apply(window, t)
					}, t.twoInt = function(t) {
						return t < 10 ? "0" + t : t
					}, t.todayStr = function() {
						var e = new Date;
						return "" + e.getFullYear() + t.twoInt(e.getMonth() + 1) + t.twoInt(e.getDate())
					}, t.randomInt = function(t, e) {
						return Math.floor(Math.random() * (e - t + 1) + t)
					}, t.saveData = function(t, e) {
						var i = window.localStorage;
						i && i.setItem("kcSdk_" + t, e)
					}, t.loadData = function(t) {
						var e = window.localStorage;
						if (e) {
							var i = e.getItem("kcSdk_" + t);
							if (i) return i
						}
						return null
					}, t.encodeUTF8 = function(t) {
						var e, i, o, a = [];
						for (e = 0; e < t.length; e++)(i = t.charCodeAt(e)) < 128 ? a.push(i) : i < 2048 ? a.push(192 + (i >> 6 & 31), 128 + (63 & i)) : ((o = 55296 ^ i) >> 10 == 0 ? (i = (o << 10) + (56320 ^ t.charCodeAt(++e)) + 65536, a.push(240 + (i >> 18 & 7), 128 + (i >> 12 & 63))) : a.push(224 + (i >> 12 & 15)), a.push(128 + (i >> 6 & 63), 128 + (63 & i)));
						return a
					}, t.s = function(e) {
						var i, o, a, n = new Uint8Array(t.encodeUTF8(e)),
							r = 16 + (n.length + 8 >>> 6 << 4);
						for ((e = new Uint8Array(r << 2)).set(new Uint8Array(n.buffer)), e = new Uint32Array(e.buffer), a = new DataView(e.buffer), i = 0; i < r; i++) e[i] = a.getUint32(i << 2);
						e[n.length >> 2] |= 128 << 24 - 8 * (3 & n.length), e[r - 1] = n.length << 3;
						var s = [],
							l = [function() {
								return d[1] & d[2] | ~d[1] & d[3]
							}, function() {
								return d[1] ^ d[2] ^ d[3]
							}, function() {
								return d[1] & d[2] | d[1] & d[3] | d[2] & d[3]
							}, function() {
								return d[1] ^ d[2] ^ d[3]
							}],
							c = function(t, e) {
								return t << e | t >>> 32 - e
							},
							u = [1518500249, 1859775393, -1894007588, -899497514],
							d = [1732584193, -271733879, null, null, -1009589776];
						for (d[2] = ~d[0], d[3] = ~d[1], i = 0; i < e.length; i += 16) {
							var h = d.slice(0);
							for (o = 0; o < 80; o++) s[o] = o < 16 ? e[i + o] : c(s[o - 3] ^ s[o - 8] ^ s[o - 14] ^ s[o - 16], 1), a = c(d[0], 5) + l[o / 20 | 0]() + d[4] + s[o] + u[o / 20 | 0] | 0, d[1] = c(d[1], 30), d.pop(), d.unshift(a);
							for (o = 0; o < 5; o++) d[o] = d[o] + h[o] | 0
						}
						for (a = new DataView(new Uint32Array(d).buffer), i = 0; i < 5; i++) d[i] = a.getUint32(i << 2);
						return Array.prototype.map.call(new Uint8Array(new Uint32Array(d).buffer), function(t) {
							return (t < 16 ? "0" : "") + t.toString(16)
						}).join("")
					}, t.b = function(t) {
						var e = [];
						for (var i in t) e.push(i);
						e = e.sort();
						for (var o = "", a = 0; a < e.length; a++) {
							var n = t[e[a]];
							"object" == typeof n && (n = this.b(n)), o += e[a] + n
						}
						return o
					}, t.a = function(e, i, o) {
						var a = [];
						for (var n in e) null !== e[n] && void 0 !== e[n] ? a.push(n) : delete e[n];
						a = a.sort();
						var r = t.b(e);
						return i && (r += i), r += o || "pH0Xhyenu2e1zdUg", t.s(r)
					}, t.jax = function(e, i, o) {
						o || (o = function(e) {
							if (e) return t.lerr(e)
						});
						var a = new XMLHttpRequest,
							n = (new Date).getTime();
						i.s = t.a(i, n), a.open("POST", e, !0), a.setRequestHeader("Content-Type", "application/json; charset=utf-8"), a.setRequestHeader("ts", "" + n);
						var r = JSON.stringify(i);
						a.send(r), a.onload = function() {
							if (200 == a.status) {
								var e = {
									jaxERR: "" + a.responseText
								};
								try {
									e = JSON.parse(a.responseText)
								} catch (e) {
									return t.lerr(e), o(null, {
										re: "1111",
										err: "jsonErr:" + a.responseText
									})
								}
								return o(null, e)
							}
							return o(null, {
								re: "9" + a.status
							})
						}
					}, t
				}();
				e.jax = o.jax, e.llog = o.llog, e.lerr = o.lerr, e.saveData = o.saveData, e.loadData = o.loadData, e.randomInt = o.randomInt, e.todayStr = o.todayStr
			}, function(t, e, i) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var o = i(0),
					a = function() {
						function t() {
							this.version = "1.2.0", this.navGap = 3e3, this.lastNavT = 0, this.htHost = "", this.picType = "jpg"
						}
						return t.instance = function() {
							return t.me ? t.me : (t.me = new t, t.me)
						}, t.prototype.getUid = function() {
							return t.Uid ? t.Uid : (t.Uid = o.loadData("uid"), t.Uid || "null")
						}, t.prototype.setUid = function(e) {
							e && t.Uid !== e && (t.Uid = e, o.saveData("uid", e))
						}, t.prototype.jht = function(t, e, i) {
							e.v = this.version, o.jax(this.htHost + t, e, function(t, e) {
								return t || !e ? (o.llog("jhtERR", t), i(t || new Error("no re"))) : 0 !== e.re ? (o.llog("jht FAILED!" + JSON.stringify(e)), i(new Error("err:" + e.re))) : void i(null, e)
							})
						}, t.prototype.init = function(e, i, a) {
							var n = this;
							o.llog("HTS init v:" + this.version + "," + e), t.Gid = e;
							var r = o.loadData("htHost");
							r && (this.htHost = r);
							var s = o.loadData("picType");
							s && (this.picType = s);
							var l = {
								gid: e,
								uid: this.getUid(),
								query: i || "null"
							};
							o.llog("init start..." + this.picType + "," + this.htHost), this.jht("init", l, function(e, i) {
								if (e) a(e);
								else {
									o.llog("init done:" + i.re), n.setUid(i.uid), i.iconPre && (t.IconPre = i.iconPre), i.picType && (n.picType = i.picType, o.saveData("picType", i.picType)), i.navGap && (n.navGap = i.navGap);
									for (var r = [], s = 0; s < i.midArr.length; s++) {
										var l = i.midArr[s],
											c = "";
										i.vArr && i.vArr.length === i.midArr.length && 0 !== parseInt(i.vArr[s]) && (c = "_" + i.vArr[s]), r.push({
											iconUrl: i.iconPre + l + c + "." + n.picType,
											mid: l
										})
									}
									a(null, r), i.htHost && i.htHost !== n.htHost && (n.htHost = i.htHost, o.saveData("htHost", i.htHost))
								}
							})
						}, t.prototype.getBox = function(e, i) {
							var a = this;
							if (!t.IconPre) return o.llog("htSdk \u672a\u521d\u59cb\u5316!!" + t.IconPre), i(new Error("htSdk \u672a\u521d\u59cb\u5316"));
							var n = {
								bid: e
							};
							this.jht("getBox", n, function(o, n) {
								if (o) return i(o);
								if (!n.arr || n.arr.length <= 0) return i(new Error("\u670d\u52a1\u914d\u7f6e\u6709\u8befbid:" + e));
								for (var r = [], s = 0; s < n.arr.length; s++) {
									for (var l = n.arr[s], c = [], u = 0; u < l.length; u++) {
										var d = l[u].split("@"),
											h = "",
											p = "";
										d.length >= 4 && "0" !== d[3] && (h = "_" + d[3]), d.length >= 5 && (p = d[4]), c.push({
											jumpKey: d[1],
											mid: d[0],
											iconUrl: t.IconPre + d[0] + h + "." + a.picType,
											txt: d[2],
											mark: p,
											query: "mid=" + d[0] + "&bid=" + e + "&uid=" + t.Uid + "&po=" + s
										})
									}
									r.push(c)
								}
								i(null, r)
							})
						}, t.prototype.navTo = function(e, i, a, n) {
							var r = this,
								s = (new Date).getTime();
							if (s - this.lastNavT < this.navGap) o.llog("navTo too");
							else {
								this.lastNavT = s;
								var l = {
									gid: e || t.Gid,
									uid: this.getUid(),
									bid: i,
									mid: a
								};
								i ? a ? (n && (l.fail = "true"), o.llog("navTo", JSON.stringify(l)), this.jht("navTo", l, function(t, e) {
									t || r.setUid(e.uid)
								})) : o.llog("navTo \u65e0mid") : o.llog("navTo \u65e0bid")
							}
						}, t.prototype.navFrom = function(e, i) {
							var a = this;
							if (i) {
								t.Gid = e;
								var n = {
									gid: e,
									uid: this.getUid(),
									query: i || "null"
								};
								o.llog("navFrom", JSON.stringify(n)), this.jht("navFrom", n, function(t, e) {
									t || a.setUid(e.uid)
								})
							} else o.llog("navFrom query is empty!" + i)
						}, t.prototype.jlog = function(e, i, a) {
							var n = this;
							if (t.Gid) {
								var r = {
									act: e,
									gid: t.Gid,
									uid: this.getUid(),
									data: i,
									user: a
								};
								o.llog("jlog", JSON.stringify(r)), this.jht("jlog", r, function(t, e) {
									t || n.setUid(e.uid)
								})
							} else o.llog("jlog no gid", e, i)
						}, t.prototype.getSharePic = function(t, e) {
							this.jht("getSharePic", {
								game: t
							}, e)
						}, t.prototype.shareTo = function(t) {
							this.jht("shareTo", {
								wxPicId: t
							}, function(e) {
								e ? o.lerr(e) : o.llog("shareTo OK," + t)
							})
						}, t.prototype.shareFrom = function(t) {
							this.jht("shareFrom", {
								wxPicId: t
							}, function(e) {
								e ? o.lerr(e) : o.llog("shareFrom OK," + t)
							})
						}, t.prototype.jreq = function(t, e, i) {
							o.jax(t, e, i)
						}, t
					}();
				e.default = a.instance()
			}])), cc._RF.pop()
	}, {}]
}, {}, ["ADSDK", "GBattleMapLoader", "GBattle_CameraController", "GBattle_Root", "GButtonAudio", "GPoolObj", "GPrefabManager", "UIBattle", "UIBattle_Buff", "UIBattle_ContolerPad", "UIBattle_EndlessView", "UIBattle_Lose", "UIBattle_Pause", "UIBattle_Win", "UIFlyIcon", "UIPopDialog", "UIUnitTitle", "UIUnlock", "GAchievement", "GActor", "GUnit", "GAudio", "GSpritesData", "GameUtil", "SimpleStateMachine", "GD_Battle", "GD_Endless", "GD_Match", "GD_PlayerSkin", "GD_Role", "GD_ServerConfig", "GD_Story", "GD_Team", "GD_Unit", "GEnums", "SD_Achievement", "SD_AllSeeds", "SD_FreeDiamond", "SD_Item", "SD_JobLvUp", "SD_MatchHead", "SD_MatchRole", "SD_Scene", "SD_SceneTimeLine", "SD_SoundDict", "SD_Unit", "AIData", "GBattle", "GBattleAI", "GBattle_CreateBattle", "GFormation", "GMatchUtil", "GUnitOnBuilding", "GArrow", "GBlackHole", "UIAchievemetnPop", "UIItemPop", "UIPopText", "UITips", "GArcher", "GGaint", "GMine", "GMiner", "GPastor", "GRoadblock", "GSparta", "GSummon_man", "GSwordman", "GTower", "GTowerArcher", "GWizard", "GZombie", "GZombie_Dog", "GZombie_Gaint", "GZombie_Gaint2", "GZombie_Poison", "GZombie_Sparda", "GZombie_Underland", "GZombie_Wizard", "MainData", "Guide", "GuideScene1", "GuideScene2", "GuideScene6", "UIGuideView", "Hts", "HutuiSDK", "ISDK", "GAuth", "GBoxReward", "GClouds", "GDTurntable", "GMPoint", "GMapBox", "GNativeAD", "GNativeBanner", "GSaveBox", "GShopCell", "GSign", "GSingleAchievement", "GTurntable", "GUpgradeBox", "StartScene", "UIEndless", "HTvertical", "HuTuiIcon", "HuTuiSortUI", "UIMatch", "UIMatch_ViewMatch", "UIMatch_ViewSelectRole", "UIMatch_ViewVS", "UIMatch_ViewWin", "UIMatch_WaitCD", "TogglePlus", "UIShop", "UISkinShop", "UIAchievement", "UIArmory", "UIClassicMain", "UILoading", "UILogin", "UIStoryMap", "UIStoryWin", "GAutoRotation", "GSpineSprite", "GSpineSpriteEx", "aldSDK", "cocosAndNative", "config", "fbirdSDK", "htSdk"]);