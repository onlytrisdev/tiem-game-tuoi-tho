window.__require = function e(t, n, o) {
	function i(s, c) {
		if (!n[s]) {
			if (!t[s]) {
				var r = s.split("/");
				if (r = r[r.length - 1], !t[r]) {
					var l = "function" == typeof __require && __require;
					if (!c && l) return l(r, !0);
					if (a) return a(r, !0);
					throw new Error("Cannot find module '" + s + "'")
				}
				s = r
			}
			var d = n[s] = {
				exports: {}
			};
			t[s][0].call(d.exports, function(e) {
				return i(t[s][1][e] || e)
			}, d, d.exports, e, t, n, o)
		}
		return n[s].exports
	}
	for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
	return i
}({
	AudioManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b6f40uyxI9D4IZShUA0zG9X", "AudioManager"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./GlobalManager"),
			i = cc._decorator,
			a = (i.ccclass, i.property, function() {
				function e() {}
				return e.getInstance = function() {
					return null == this.instance && (this.instance = new e), this.instance
				}, e.prototype.playBackgroundMusic = function() {
					cc.resources.load("dress/music/Game", cc.AudioClip, function(e, t) {
						cc.audioEngine.stopMusic(), cc.audioEngine.playMusic(t, !0)
					})
				}, e.prototype.playSoundEffect = function() {
					cc.resources.load("dress/music/Click", cc.AudioClip, function(e, t) {
						cc.audioEngine.playEffect(t, !1)
					}), this.loadSpecialEffects()
				}, e.prototype.playSuccessEffect = function() {
					cc.resources.load("dress/music/Success", cc.AudioClip, function(e, t) {
						cc.audioEngine.playEffect(t, !1)
					})
				}, e.prototype.playFailEffect = function() {
					cc.resources.load("dress/music/Fail", cc.AudioClip, function(e, t) {
						cc.audioEngine.playEffect(t, !1)
					})
				}, e.prototype.loadSpecialEffects = function() {
					cc.resources.load("dress/prefabs/SpecialEffects", cc.Prefab, function(e, t) {
						var n = cc.instantiate(t),
							i = cc.director.getScene();
						o.default.getInstance().isPkMode ? n.position = new cc.Vec3(525, 640) : n.position = new cc.Vec3(300, 640), n.parent = i, setTimeout(function() {
							n.destroy()
						}, 2e3)
					})
				}, e.instance = null, e
			}());
		n.default = a, cc._RF.pop()
	}, {
		"./GlobalManager": "GlobalManager"
	}],
	BodyChange: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ec7c3DeroRPqa9du7Xklih2", "BodyChange");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../AudioManager"),
			c = e("../GlobalManager"),
			r = cc._decorator,
			l = r.ccclass,
			d = (r.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hairChildren = null, t.onePieceChildren = null, t.topsChildren = null, t.bottomsChildren = null, t.overcoatChildren = null, t.headwearChildren = null, t.socksChildren = null, t.shoesChildren = null, t.bagChildren = null, t.jewelryChildren = null, t.faceChildren = null, t.backgroundChildren = null, t
				}
				return i(t, e), t.prototype.start = function() {
					var e = this;
					if (this.hairChildren = this.node.getChildByName("hair").children, this.onePieceChildren = this.node.getChildByName("onePiece").children, this.topsChildren = this.node.getChildByName("tops").children, this.bottomsChildren = this.node.getChildByName("bottoms").children, this.overcoatChildren = this.node.getChildByName("overcoat").children, this.headwearChildren = this.node.getChildByName("headwear").children, this.socksChildren = this.node.getChildByName("socks").children, this.shoesChildren = this.node.getChildByName("shoes").children, this.bagChildren = this.node.getChildByName("bag").children, this.jewelryChildren = this.node.getChildByName("jewelry").children, this.faceChildren = this.node.getChildByName("face").children, this.backgroundChildren = this.node.getChildByName("background").children, c.default.getInstance().getDressInfo().addOnValueChangedCallback("hair", function(t) {
							e.hairChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("onePiece", function(t) {
							e.onePieceChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("headwear", function(t) {
							e.headwearChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("overcoat", function(t) {
							e.overcoatChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("tops", function(t) {
							e.topsChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("bottoms", function(t) {
							e.bottomsChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("socks", function(t) {
							e.socksChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("shoes", function(t) {
							e.shoesChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("bag", function(t) {
							e.bagChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("jewelry", function(t) {
							e.jewelryChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("face", function(t) {
							e.faceChange(t)
						}), c.default.getInstance().getDressInfo().addOnValueChangedCallback("background", function(t) {
							e.backgroundChange(t)
						}), "home" == cc.director.getScene().name) {
						var t = cc.sys.localStorage.getItem("dress_temp");
						if (t) {
							var n = JSON.parse(t);
							c.default.getInstance().getDressInfo().background = n._background, c.default.getInstance().getDressInfo().bag = n._bag, c.default.getInstance().getDressInfo().bottoms = n._bottoms, c.default.getInstance().getDressInfo().face = n._face, c.default.getInstance().getDressInfo().hair = n._hair, c.default.getInstance().getDressInfo().headwear = n._headwear, c.default.getInstance().getDressInfo().jewelry = n._jewelry, c.default.getInstance().getDressInfo().onePiece = n._onePiece, c.default.getInstance().getDressInfo().overcoat = n._overcoat, c.default.getInstance().getDressInfo().shoes = n._shoes, c.default.getInstance().getDressInfo().socks = n._socks, c.default.getInstance().getDressInfo().tops = n._tops
						} else console.log("\u6ca1\u627e\u5230 dress_temp \u5b58\u6863")
					}
				}, t.prototype.hairChange = function(e) {
					for (var t = 0, n = this.hairChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.onePieceChange = function(e) {
					for (var t = 0, n = this.onePieceChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.headwearChange = function(e) {
					for (var t = 0, n = this.headwearChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.overcoatChange = function(e) {
					for (var t = 0, n = this.overcoatChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.topsChange = function(e) {
					for (var t = 0, n = this.topsChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.bottomsChange = function(e) {
					for (var t = 0, n = this.bottomsChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.socksChange = function(e) {
					for (var t = 0, n = this.socksChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.shoesChange = function(e) {
					for (var t = 0, n = this.shoesChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.bagChange = function(e) {
					for (var t = 0, n = this.bagChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.jewelryChange = function(e) {
					for (var t = 0, n = this.jewelryChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.faceChange = function(e) {
					for (var t = 0, n = this.faceChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.backgroundChange = function(e) {
					for (var t = 0, n = this.backgroundChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.loadSave = function(e, t) {
					c.default.getInstance().save = t;
					var n = cc.sys.localStorage.getItem("dress" + t);
					if (n) {
						var o = JSON.parse(n);
						c.default.getInstance().getDressInfo().background = o._background, c.default.getInstance().getDressInfo().bag = o._bag, c.default.getInstance().getDressInfo().bottoms = o._bottoms, c.default.getInstance().getDressInfo().face = o._face, c.default.getInstance().getDressInfo().hair = o._hair, c.default.getInstance().getDressInfo().headwear = o._headwear, c.default.getInstance().getDressInfo().jewelry = o._jewelry, c.default.getInstance().getDressInfo().onePiece = o._onePiece, c.default.getInstance().getDressInfo().overcoat = o._overcoat, c.default.getInstance().getDressInfo().shoes = o._shoes, c.default.getInstance().getDressInfo().socks = o._socks, c.default.getInstance().getDressInfo().tops = o._tops
					} else console.log("\u6ca1\u627e\u5230 dress" + t + " \u5b58\u6863");
					s.default.getInstance().playSoundEffect()
				}, t.prototype.init_body = function() {
					c.default.getInstance().getDressInfo().background = "01", c.default.getInstance().getDressInfo().bag = "00", c.default.getInstance().getDressInfo().bottoms = "00", c.default.getInstance().getDressInfo().face = "01", c.default.getInstance().getDressInfo().hair = "01", c.default.getInstance().getDressInfo().headwear = "00", c.default.getInstance().getDressInfo().jewelry = "00", c.default.getInstance().getDressInfo().onePiece = "00", c.default.getInstance().getDressInfo().overcoat = "00", c.default.getInstance().getDressInfo().shoes = "00", c.default.getInstance().getDressInfo().socks = "00", c.default.getInstance().getDressInfo().tops = "00"
				}, a([l], t)
			}(cc.Component));
		n.default = d, cc._RF.pop()
	}, {
		"../AudioManager": "AudioManager",
		"../GlobalManager": "GlobalManager"
	}],
	BodySave: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "993f3vu57FFQ7WUHKpWfmsS", "BodySave");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.saveNum = "", t.hairChildren = null, t.onePieceChildren = null, t.topsChildren = null, t.bottomsChildren = null, t.overcoatChildren = null, t.headwearChildren = null, t.socksChildren = null, t.shoesChildren = null, t.bagChildren = null, t.jewelryChildren = null, t.faceChildren = null, t.backgroundChildren = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					this.showDress()
				}, t.prototype.showDress = function() {
					var e = cc.sys.localStorage.getItem("dress" + this.saveNum);
					if (e) {
						var t = JSON.parse(e);
						this.hairChildren = this.node.getChildByName("hair").children, this.onePieceChildren = this.node.getChildByName("onePiece").children, this.topsChildren = this.node.getChildByName("tops").children, this.bottomsChildren = this.node.getChildByName("bottoms").children, this.overcoatChildren = this.node.getChildByName("overcoat").children, this.headwearChildren = this.node.getChildByName("headwear").children, this.socksChildren = this.node.getChildByName("socks").children, this.shoesChildren = this.node.getChildByName("shoes").children, this.bagChildren = this.node.getChildByName("bag").children, this.jewelryChildren = this.node.getChildByName("jewelry").children, this.faceChildren = this.node.getChildByName("face").children, this.backgroundChildren = this.node.getChildByName("background").children, this.hairChange(t._hair), this.onePieceChange(t._onePiece), this.headwearChange(t._headwear), this.overcoatChange(t._overcoat), this.topsChange(t._tops), this.bottomsChange(t._bottoms), this.socksChange(t._socks), this.shoesChange(t._shoes), this.bagChange(t._bag), this.jewelryChange(t._jewelry), this.faceChange(t._face), this.backgroundChange(t._background)
					}
				}, t.prototype.hairChange = function(e) {
					for (var t = 0, n = this.hairChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.onePieceChange = function(e) {
					for (var t = 0, n = this.onePieceChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.headwearChange = function(e) {
					for (var t = 0, n = this.headwearChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.overcoatChange = function(e) {
					for (var t = 0, n = this.overcoatChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.topsChange = function(e) {
					for (var t = 0, n = this.topsChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.bottomsChange = function(e) {
					for (var t = 0, n = this.bottomsChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.socksChange = function(e) {
					for (var t = 0, n = this.socksChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.shoesChange = function(e) {
					for (var t = 0, n = this.shoesChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.bagChange = function(e) {
					for (var t = 0, n = this.bagChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.jewelryChange = function(e) {
					for (var t = 0, n = this.jewelryChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.faceChange = function(e) {
					for (var t = 0, n = this.faceChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, t.prototype.backgroundChange = function(e) {
					for (var t = 0, n = this.backgroundChildren; t < n.length; t++) {
						var o = n[t];
						o.name == e ? o.active = !0 : o.active = !1
					}
				}, a([r], t.prototype, "saveNum", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	DressInfo: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7b79fi/nYtJWZwig5oByLt3", "DressInfo"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			i = (o.ccclass, o.property, function() {
				function e() {
					this._hair = "01", this._onePiece = "", this._face = "01", this._socks = "", this._tops = "", this._bottoms = "", this._shoes = "", this._overcoat = "", this._headwear = "", this._bag = "", this._jewelry = "", this._background = "01", this.onValueChangedCallbacks = {}
				}
				return Object.defineProperty(e.prototype, "hair", {
					get: function() {
						return this._hair
					},
					set: function(e) {
						this._hair = e, this.notifyValueChanged("hair", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onePiece", {
					get: function() {
						return this._onePiece
					},
					set: function(e) {
						this._onePiece = e, this.notifyValueChanged("onePiece", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "face", {
					get: function() {
						return this._face
					},
					set: function(e) {
						this._face = e, this.notifyValueChanged("face", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "socks", {
					get: function() {
						return this._socks
					},
					set: function(e) {
						this._socks = e, this.notifyValueChanged("socks", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "tops", {
					get: function() {
						return this._tops
					},
					set: function(e) {
						this._tops = e, this.notifyValueChanged("tops", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "bottoms", {
					get: function() {
						return this._bottoms
					},
					set: function(e) {
						this._bottoms = e, this.notifyValueChanged("bottoms", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "shoes", {
					get: function() {
						return this._shoes
					},
					set: function(e) {
						this._shoes = e, this.notifyValueChanged("shoes", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "overcoat", {
					get: function() {
						return this._overcoat
					},
					set: function(e) {
						this._overcoat = e, this.notifyValueChanged("overcoat", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "headwear", {
					get: function() {
						return this._headwear
					},
					set: function(e) {
						this._headwear = e, this.notifyValueChanged("headwear", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "bag", {
					get: function() {
						return this._bag
					},
					set: function(e) {
						this._bag = e, this.notifyValueChanged("bag", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "jewelry", {
					get: function() {
						return this._jewelry
					},
					set: function(e) {
						this._jewelry = e, this.notifyValueChanged("jewelry", e)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "background", {
					get: function() {
						return this._background
					},
					set: function(e) {
						this._background = e, this.notifyValueChanged("background", e)
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.addOnValueChangedCallback = function(e, t) {
					this.onValueChangedCallbacks[e] = t
				}, e.prototype.notifyValueChanged = function(e, t) {
					(0, this.onValueChangedCallbacks[e])(t)
				}, e
			}());
		n.default = i, cc._RF.pop()
	}, {}],
	GlobalManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "dc114LL/qJO87XTGlmaYQQJ", "GlobalManager"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./DressInfo"),
			i = cc._decorator,
			a = (i.ccclass, i.property, function() {
				function e() {
					this.dressInfo = new o.default, this._save = "01", this.isPkMode = !1
				}
				return e.getInstance = function() {
					return null == this.instance && (this.instance = new e), this.instance
				}, e.prototype.getDressInfo = function() {
					return this.dressInfo
				}, e.prototype.initDressInfo = function() {
					this.dressInfo.background = "01", this.dressInfo.bag = "00", this.dressInfo.bottoms = "00", this.dressInfo.face = "01", this.dressInfo.hair = "01", this.dressInfo.headwear = "00", this.dressInfo.jewelry = "00", this.dressInfo.onePiece = "00", this.dressInfo.overcoat = "00", this.dressInfo.shoes = "00", this.dressInfo.socks = "00", this.dressInfo.tops = "00"
				}, Object.defineProperty(e.prototype, "save", {
					get: function() {
						return this._save
					},
					set: function(e) {
						this._save = e
					},
					enumerable: !1,
					configurable: !0
				}), e
			}());
		n.default = a, cc._RF.pop()
	}, {
		"./DressInfo": "DressInfo"
	}],
	Huawei: [function(e, t) {
		"use strict";
		cc._RF.push(t, "f0ceacxFYxB7YEbt9Jd4q5s", "Huawei"), window.hwUtil = {
			shipinID: "testx9dtjwj8hp",
			bannerID: "testw6vs28auh3",
			yuanshengID1: "testu7m3hc4gvm",
			lastVideoTime: 0,
			videoAd: null,
			bannerAd: null,
			yuanshengADK: null,
			isValid: !0,
			successCB: null,
			gamelogin: function() {
				console.log("Sign-in"), qg.gameLogin({
					forceLogin: 1,
					appid: hwConfig.huaweiAppid,
					success: function() {
						console.log("game login: success"), window.hwLogin = !0, 1 == window.showYS && setTimeout(function() {
							window.jiankangzhonggao && window.jiankangzhonggao.loadGame()
						}, 1e3)
					},
					fail: function(e, t) {
						console.log("on gameLogin fail: " + e + "," + t), window.createDengluButton(function() {
							hwUtil.gamelogin()
						})
					},
					complete: function() {
						console.log("on gameLogin: complete")
					}
				})
			},
			ADInit: function(e) {
				null == hwUtil.videoAd && (hwUtil.videoAd = qg.createRewardedVideoAd({
					adUnitId: hwUtil.shipinID,
					success: function() {
						hwUtil.videoAd.onLoad(function() {
							hwUtil.videoAd.show()
						}), e && hwUtil.videoAd.load(), hwUtil.videoAd.onError(function() {
							cc.director.resume(), cc.audioEngine.resumeAll(), qg.showToast({
								title: "\u6682\u65e0\u5e7f\u544a",
								icon: "",
								duration: 1500
							})
						}), hwUtil.videoAd.onClose(function(e) {
							cc.director.resume(), cc.audioEngine.resumeAll(), 1 == e.isEnded ? hwUtil.successCB && (hwUtil.successCB(), hwUtil.successCB = null) : (hwUtil.successCB = null, 100 * Math.random() < window.celve.othergaiLv && hwUtil.showAd())
						})
					},
					fail: function(e, t) {
						console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd fail: " + e + "," + t)
					},
					complete: function() {
						console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd complete")
					}
				}), console.log("shipin id" + hwUtil.shipinID))
			},
			getVideoAd: function(e) {
				if (null != hwUtil.videoAd) {
					var t = (new Date).getTime();
					t - hwUtil.lastVideoTime < 500 || (hwUtil.lastVideoTime = t, hwUtil.successCB = e, cc.director.pause(), cc.audioEngine.pauseAll(), hwUtil.videoAd.load())
				} else hwUtil.ADInit(!0)
			},
			showAd: function() {
				console.log("huawei ad"), hwUtil.createNativeadChaping()
			},
			showzhuomian: function() {
				window.huawei && qg.hasShortcutInstalled({
					success: function(e) {
						0 == e && window.qg.installShortcut({
							message: "\u4e3a\u4e86\u65b9\u4fbf\u6e38\u620f,\u662f\u5426\u5c06\u521b\u5efa\u5feb\u6377\u56fe\u6807?",
							success: function() {
								node && (node.active = !1)
							}
						})
					},
					fail: function() {},
					complete: function() {}
				})
			},
			bannerTime: 0,
			showBanner: function() {},
			closeBanner: function() {},
			clearAD: function() {
				hwUtil.bannerAd && hwUtil.bannerAd.hide(), hwUtil.yuanshengADK && hwUtil.yuanshengADK.destroy()
			},
			chapingTime: 0,
			createNativeadChaping: function() {
				var e = (new Date).getTime();
				if (!(Math.abs(e - hwUtil.chapingTime) < 1e3)) {
					hwUtil.chapingTime = e, hwUtil.clearAD();
					var t = qg.createNativeAd({
						adUnitId: hwUtil.yuanshengID1
					});
					t.offLoad(), t.onLoad(function(e) {
						t.offLoad(), hwUtil.yuanshengADK || (t.reportAdShow({
							adId: e.adList[0].adId
						}), e.adList[0].addd = t, hwUtil.yuanshengADK = yuansheng.createChaping(e.adList[0].imgUrlList[0], function() {
							hwUtil.yuanshengADK = null
						}, function() {
							t.reportAdClick({
								adId: e.adList[0].adId
							}), hwUtil.yuanshengADK = null
						}, e.adList[0]))
					}), t.offError(), t.onError(function(e) {
						t.offError(), console.log(JSON.stringify(e))
					}), t.load()
				}
			},
			createNativeadBanner: function() {
				if (hwUtil.clearAD(), 1 == window.kaiguan) {
					var e = qg.createNativeAd({
						adUnitId: hwUtil.yuanshengID1
					});
					e.offLoad(), e.onLoad(function(t) {
						hwUtil.yuanshengADK || (e.reportAdShow({
							adId: t.adList[0].adId
						}), t.adList[0].addd = e, hwUtil.yuanshengADK = yuansheng.createBanner(t.adList[0].imgUrlList[0], function() {
							hwUtil.yuanshengADK = null
						}, function() {
							e.reportAdClick({
								adId: t.adList[0].adId
							}), hwUtil.yuanshengADK = null
						}, t.adList[0]))
					}), e.offError(), e.onError(function(e) {
						console.log(JSON.stringify(e)), hwUtil.showBanner()
					}), e.load()
				} else hwUtil.showBanner()
			}
		}, cc.sys.platform == cc.sys.VIVO_GAME ? window.vivo = !0 : cc.sys.platform == cc.sys.HUAWEI_GAME && (window.huawei = !0), window.huawei && (setTimeout(function() {
			hwUtil.gamelogin()
		}, 2e3), setTimeout(function() {
			cc.game.on(cc.game.EVENT_SHOW, function() {
				if (console.log("------------\u524d\u53f0\u4e86"), cc.find("Canvas").getChildByName("ysad")) {
					var e = cc.find("Canvas").getChildByName("ysad");
					e && e.getComponent("YS").hw_reportAdShow()
				}
			}, void 0)
		}, 500)), cc._RF.pop()
	}, {}],
	ItemAD: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e6f0dr25ElOcK7T/alG2VLc", "ItemAD");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ADNode = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this), this.node.getComponent(cc.Button).interactable = !1
				}, t.prototype.onClick = function() {
					var e = this;
					window.SDK.shipin(function() {
						e.ADNode.active = !1, e.node.getComponent(cc.Button).interactable = !0, e.node.off(cc.Node.EventType.TOUCH_END, e.onClick, e)
					})
				}, a([r(cc.Node)], t.prototype, "ADNode", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	Items: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "edeb1PCJNxEToDKa5c6FD6O", "Items");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../AudioManager"),
			c = e("../GlobalManager"),
			r = cc._decorator,
			l = r.ccclass,
			d = (r.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.dressInfo = c.default.getInstance().getDressInfo(), t
				}
				return i(t, e), t.prototype.clickHairBtn = function(e, t) {
					this.dressInfo.hair = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickOnePieceBtn = function(e, t) {
					this.dressInfo.overcoat = "00", this.dressInfo.tops = "00", this.dressInfo.bottoms = "00", this.dressInfo.onePiece == t ? this.dressInfo.onePiece = "00" : this.dressInfo.onePiece = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickFaceBtn = function(e, t) {
					this.dressInfo.face = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickSocksBtn = function(e, t) {
					this.dressInfo.socks == t ? this.dressInfo.socks = "00" : this.dressInfo.socks = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickTopsBtn = function(e, t) {
					this.dressInfo.onePiece = "00", this.dressInfo.tops == t ? this.dressInfo.tops = "00" : this.dressInfo.tops = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickBottomsBtn = function(e, t) {
					this.dressInfo.onePiece = "00", this.dressInfo.bottoms == t ? this.dressInfo.bottoms = "00" : this.dressInfo.bottoms = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickShoesBtn = function(e, t) {
					this.dressInfo.shoes == t ? this.dressInfo.shoes = "00" : this.dressInfo.shoes = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickOvercoatBtn = function(e, t) {
					this.dressInfo.onePiece = "00", this.dressInfo.overcoat == t ? this.dressInfo.overcoat = "00" : this.dressInfo.overcoat = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickHeadwearBtn = function(e, t) {
					this.dressInfo.headwear == t ? this.dressInfo.headwear = "00" : this.dressInfo.headwear = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickBagBtn = function(e, t) {
					this.dressInfo.bag == t ? this.dressInfo.bag = "00" : this.dressInfo.bag = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickJewelryBtn = function(e, t) {
					this.dressInfo.jewelry == t ? this.dressInfo.jewelry = "00" : this.dressInfo.jewelry = t, s.default.getInstance().playSoundEffect()
				}, t.prototype.clickBackgroundBtn = function(e, t) {
					this.dressInfo.background = t, s.default.getInstance().playSoundEffect()
				}, a([l], t)
			}(cc.Component));
		n.default = d, cc._RF.pop()
	}, {
		"../AudioManager": "AudioManager",
		"../GlobalManager": "GlobalManager"
	}],
	KsUtil: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3fb2bR7JA9NIJoUPq1nYWAw", "KsUtil"), window.KsUtil = {
			videoAd: null,
			videoCallback: null,
			getVideoAd: function(e) {
				ks.createRewardedVideoAd ? (KsUtil.videoCallback = e, KsUtil.videoAd.show().then(function() {
					return console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
				}).catch(function() {
					ks.showToast({
						title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
						icon: "none",
						duration: 1e3
					})
				})) : e()
			},
			AdSuccess: function() {
				null != KsUtil.videoCallback && (KsUtil.videoCallback(), KsUtil.videoCallback = null)
			},
			sceneTrue: function() {
				if (!ext.sceneID) return !1;
				for (var e = ks.getLaunchOptionsSync().from, t = ext.sceneID, n = 0; n < t.length; n++)
					if (e == t[n]) return !0;
				return !1
			},
			recorder: null,
			init: function() {
				KsUtil.videoAd = ks.createRewardedVideoAd({
					adUnitId: ksConfig.shipinID
				}), KsUtil.recorder = ks.getGameRecorder(), KsUtil.videoAd.onClose(function(e) {
					e && e.isEnded || void 0 === e ? KsUtil.AdSuccess() : ks.showToast({
						title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
						icon: "none",
						duration: 1e3
					})
				}), KsUtil.recorder.on("stop", function(e) {
					e.videoID && (KsUtil.videoID = e.videoID, window.CreateShareK(function() {
						KsUtil.recorder.publishVideo({
							video: KsUtil.videoID,
							callback: function(e) {
								null == e || null == e ? console.log("\u5206\u4eab\u5f55\u5c4f\u6210\u529f") : console.log("\u5206\u4eab\u5f55\u5c4f\u5931\u8d25: " + JSON.stringiwfy(e))
							}
						})
					}))
				})
			},
			showBanner: function() {},
			bannerHide: function() {},
			showChaping: function() {
				ks.createInterstitialAd({
					adUnitId: ksConfig.chapingID
				}).show()
			},
			luzhiKaishi: function() {
				KsUtil.recorder.stop(), KsUtil.recorder.start()
			},
			luzhijieshu: function() {
				KsUtil.recorder.stop()
			}
		}, window.ks && setTimeout(function() {
			KsUtil.init()
		}, 1), cc._RF.pop()
	}, {}],
	MGTVUtill: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3fb3fpXaPJJvIXRUY3rXkQd", "MGTVUtill"), window.mgUtill = {
			videoAd: null,
			videoCallback: null,
			getVideoAd: function(e) {
				mgUtill.videoCallback = e, cc.audioEngine.setMusicVolume(0), cc.audioEngine.setEffectsVolume(0), mgtvGameSdk.mgAd.getReward(mgConfig.shipinID, {
					onADExposure: function(e) {
						console.log("reward \u5e7f\u544a\u66dd\u5149\u6210\u529f", e)
					},
					onADClick: function(e) {
						console.log("reward \u5e7f\u544a\u53d1\u751f\u70b9\u51fb\u8df3\u8f6c\u7b49\u4e8b\u4ef6", e), cc.audioEngine.setMusicVolume(window.shengyindaxiao), cc.audioEngine.setEffectsVolume(window.shengyindaxiao)
					},
					onADClose: function(e) {
						console.log("reward \u5e7f\u544a\u88ab\u7528\u6237\u5173\u95ed", e), cc.audioEngine.setMusicVolume(window.shengyindaxiao), cc.audioEngine.setEffectsVolume(window.shengyindaxiao)
					},
					onError: function(e) {
						console.log("reward \u5e7f\u544a\u6e32\u67d3\u5f02\u5e38", e), cc.audioEngine.setMusicVolume(window.shengyindaxiao), cc.audioEngine.setEffectsVolume(window.shengyindaxiao)
					},
					onADStart: function(e) {
						console.log("reward \u5e7f\u544a\u89c6\u9891\u64ad\u653e\u9996\u5e27", e)
					},
					onADComplete: function(e) {
						console.log("reward \u5e7f\u544a\u89c6\u9891\u64ad\u653e\u5b8c\u6210", e), mgUtill.AdSuccess()
					},
					onADUpdateTime: function(e) {
						console.log("reward \u540c\u6b65\u5e7f\u544a\u64ad\u653e\u8fdb\u5ea6", e)
					}
				}).then(function(e) {
					console.log("hasAD:", e)
				})
			},
			AdSuccess: function() {
				null != mgUtill.videoCallback && (mgUtill.videoCallback(), mgUtill.videoCallback = null), cc.audioEngine.setMusicVolume(window.shengyindaxiao), cc.audioEngine.setEffectsVolume(window.shengyindaxiao)
			},
			init: function() {
				window.celve = {
					oppomoban: 50,
					time_chaping: 0,
					time_banner: 0,
					time_xitongcp: 0,
					overcount: 1,
					overgaiLv: 100,
					pausecount: 1,
					pausegaiLv: 100,
					inGamecount: 1,
					inGamegaiLv: 100,
					othercount: 1,
					othergaiLv: 100,
					xitongcount: 0,
					xitonggaiLv: 0,
					apk_time: 0
				}, mgtvGameSdk.init({
					appId: mgConfig.appid
				}, function(e) {
					console.log("initCallback", e), 1 == e.status ? console.log("\u8fdb\u5165\u6e38\u620f\u3002\u3002") : (console.log("\u521d\u59cb\u5316\u5931\u8d25"), setTimeout(function() {
						cc.director.loadScene("mgtv")
					}, 1e3)), mgtvGameSdk.loadResouceStart(), window.mgtvGameSdk.loadResouceComplete(1), mgtvGameSdk.enterGame({
						roleId: "1",
						roleName: "1",
						roleLevel: "1",
						serverName: "1",
						serverId: "1"
					}, function() {})
				}), mgtvGameSdk.initAd({
					cid: mgConfig.cid,
					mid: mgConfig.mid
				}, function(e) {
					console.log(e)
				}), window.shengyindaxiao = 1, mgtvGameSdk.volumeEventListener(function(e) {
					console.log("volumeEventListener", e), window.shengyindaxiao = e.ratio, cc.audioEngine.setMusicVolume(window.shengyindaxiao), cc.audioEngine.setEffectsVolume(window.shengyindaxiao), cc.sys.localStorage.setItem("shengyindaxiao", window.shengyindaxiao)
				}), mgtvGameSdk.getHYVolumeRatio, window.shengyindaxiao = cc.sys.localStorage.getItem("shengyindaxiao"), setInterval(function() {
					cc.audioEngine.setMusicVolume(window.shengyindaxiao), cc.audioEngine.setEffectsVolume(window.shengyindaxiao)
				}, 10)
			},
			showBanner: function() {
				mgtvGameSdk.mgAd.getImgBanner(mgConfig.bannerID, {
					onADExposure: function(e) {
						console.log("img-banner \u5e7f\u544a\u66dd\u5149\u6210\u529f", e)
					},
					onADClick: function(e) {
						console.log("img-banner \u5e7f\u544a\u53d1\u751f\u70b9\u51fb\u8df3\u8f6c\u7b49\u4e8b\u4ef6", e)
					},
					onADClose: function(e) {
						console.log("img-banner \u5e7f\u544a\u88ab\u7528\u6237\u5173\u95ed", e)
					},
					onError: function(e) {
						console.log("img-banner \u5e7f\u544a\u6e32\u67d3\u5f02\u5e38", e)
					}
				}).then(function(e) {
					console.log("hasAD:", e)
				})
			},
			bannerHide: function() {
				window.mgtvGameSdk.mgAd.hiddenImgBanner()
			},
			showChaping: function() {
				console.log("show mg chaping"), mgtvGameSdk.mgAd.getTitleBanner(mgConfig.chapingID, {
					onADExposure: function(e) {
						console.log("title-banner \u5e7f\u544a\u66dd\u5149\u6210\u529f", e)
					},
					onADClick: function(e) {
						console.log("title-banner \u5e7f\u544a\u53d1\u751f\u70b9\u51fb\u8df3\u8f6c\u7b49\u4e8b\u4ef6", e)
					},
					onADClose: function(e) {
						console.log("title-banner \u5e7f\u544a\u88ab\u7528\u6237\u5173\u95ed", e)
					},
					onError: function(e) {
						console.log("title-banner \u5e7f\u544a\u6e32\u67d3\u5f02\u5e38", e)
					}
				}).then(function(e) {
					console.log("hasAD:", e)
				})
			}
		}, window.mgtvGameSdk && setTimeout(function() {
			mgUtill.init()
		}, 1), cc._RF.pop()
	}, {}],
	OppoTools: [function(e, t) {
		"use strict";
		cc._RF.push(t, "9320bYkw/BITKVioaxHFMWF", "OppoTools"), window.qgUtil = {
			videoAd: null,
			bannerAd: null,
			hengfuAD: null,
			moban: null,
			yuanshengIndex: 0,
			yuanshengADK: null,
			successCB: null,
			ADInit: function() {
				console.log("222222222222222222222222222"), qg.initAdService({
					appId: oppoConfig.appID,
					isDebug: !0,
					success: function() {
						console.log("initAdService success")
					},
					fail: function(e) {
						console.log("initAdService fail:" + e.code + e.msg)
					},
					complete: function() {
						console.log("initAdService complete")
					}
				}), qg.createBannerAd && (qgUtil.bannerAd = qg.createBannerAd({
					posId: oppoConfig.bannerID
				}), qgUtil.bannerAd.onError(function(e) {
					console.log(e)
				})), qgUtil.hengfuAD = qg.createGameBannerAd({
					adUnitId: oppoConfig.htuihengfu
				})
			},
			shwoHengfu: function() {
				qgUtil.hengfuAD ? qgUtil.hengfuAD.show() : (qgUtil.hengfuAD = qg.createGameBannerAd({
					adUnitId: oppoConfig.htuihengfu
				}), qgUtil.hengfuAD.show())
			},
			showMoban: function(e) {
				var t = function() {
					var e = oppoConfig.moban;
					if (oppoConfig.moban1) {
						var t = [oppoConfig.moban1, oppoConfig.moban2, oppoConfig.moban3];
						qgUtil.yuanshengIndex += 1, qgUtil.yuanshengIndex >= t.length && (qgUtil.yuanshengIndex = 0), e = t[qgUtil.yuanshengIndex]
					}
					var n = qg.getSystemInfoSync().screenHeight / 2;
					qg.getSystemInfoSync().screenWidth > qg.getSystemInfoSync().screenHeight && (n = 100), qgUtil.moban = qg.createCustomAd({
						adUnitId: e,
						style: {
							top: n
						}
					}), qgUtil.moban.show().then(function() {
						console.log("show success")
					}).catch(function(e) {
						console.log("show fail with:" + e.errCode + "," + e.errMsg)
					})
				};
				e ? t() : 100 * Math.random() < celve.oppomoban ? t() : "undefined" === oppoConfig.yuanshengID1 || "" == oppoConfig.yuanshengID1 ? t() : qgUtil.createNativeadChaping()
			},
			getVideoAd: function(e) {
				console.log("getVideoAd"), qgUtil.successCB = e, qgUtil.videoAd = qg.createRewardedVideoAd({
					posId: oppoConfig.shipinID
				}), qgUtil.videoAd.onLoad(function() {
					console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), qgUtil.videoAd.show()
				}), qgUtil.videoAd.load(), qgUtil.videoAd.onError(function(e) {
					console.log(e), qg.showToast({
						title: "\u6682\u65e0\u5e7f\u544a",
						duration: 1500
					})
				}), qgUtil.videoAd.onClose(function(e) {
					console.log("onclose"), 1 == e.isEnded ? qgUtil.successCB && (qgUtil.successCB(), qgUtil.successCB = null) : (qgUtil.successCB = null, 100 * Math.random() < window.celve.othergaiLv && qgUtil.showAd())
				})
			},
			showAd: function() {
				console.log("oppo ad"), qgUtil.showMoban()
			},
			showzhuomian: function() {
				window.qg && qg.hasShortcutInstalled({
					success: function(e) {
						0 == e && qg.installShortcut({
							success: function() {},
							fail: function() {},
							complete: function() {}
						})
					},
					fail: function() {},
					complete: function() {}
				})
			},
			showPushBox: function() {
				qgUtil.clearAD();
				var e = window.qg.createGamePortalAd({
					adUnitId: oppoConfig.huituiheziID
				});
				e.onClose(function() {
					e.destroy()
				}), e.load().then(function() {
					e.show()
				}).catch(function() {
					qg.showToast({
						title: "\u8bf7\u7a0d\u540e...",
						duration: 1500
					}), e.destroy()
				})
			},
			showBanner: function() {
				100 * Math.random() < window.pushBoxgl ? qgUtil.shwoHengfu() : qgUtil.bannerAd && qgUtil.bannerAd.show()
			},
			closeBanner: function() {
				qgUtil.hengfuAD && qgUtil.hengfuAD.hide(), qgUtil.bannerAd && qgUtil.bannerAd.hide(), qgUtil.yuanshengADK && qgUtil.yuanshengADK.destroy()
			},
			clearAD: function() {
				qgUtil.hengfuAD && qgUtil.hengfuAD.hide(), qgUtil.bannerAd && qgUtil.bannerAd.hide(), qgUtil.yuanshengADK && qgUtil.yuanshengADK.destroy()
			},
			createNativeadChaping: function() {
				qgUtil.clearAD();
				var e = [oppoConfig.yuanshengID1, oppoConfig.yuanshengID2, oppoConfig.yuanshengID3];
				qgUtil.yuanshengIndex += 1, qgUtil.yuanshengIndex >= e.length && (qgUtil.yuanshengIndex = 0);
				var t = qg.createNativeAd({
					posId: e[qgUtil.yuanshengIndex]
				});
				t.onLoad(function(e) {
					t.reportAdShow({
						adId: e.adList[0].adId
					}), qgUtil.yuanshengADK && qgUtil.yuanshengADK.destroy();
					var n = e.adList[0].icon;
					"" != n && null != n || (n = e.adList[0].imgUrlList[0]), qgUtil.yuanshengADK = yuansheng.createChaping(n, function() {
						qgUtil.yuanshengADK = null, t.destroy(), qgUtil.createNativeadBanner()
					}, function() {
						t.reportAdClick({
							adId: e.adList[0].adId
						}), qgUtil.yuanshengADK = null, t.destroy(), qgUtil.createNativeadBanner()
					})
				}), t.onError(function(e) {
					console.log(JSON.stringify(e)), qgUtil.showMoban(!0)
				}), t.load()
			},
			createNativeadBanner: function() {
				qgUtil.clearAD();
				var e = [oppoConfig.yuanshengID1, oppoConfig.yuanshengID2, oppoConfig.yuanshengID3];
				qgUtil.yuanshengIndex += 1, qgUtil.yuanshengIndex >= e.length && (qgUtil.yuanshengIndex = 0);
				var t = qg.createNativeAd({
					posId: e[qgUtil.yuanshengIndex]
				});
				t.onLoad(function(e) {
					t.reportAdShow({
						adId: e.adList[0].adId
					}), qgUtil.yuanshengADK && qgUtil.yuanshengADK.destroy();
					var n = e.adList[0].icon;
					"" != n && null != n || (n = e.adList[0].imgUrlList[0])
				}), t.onError(function(e) {
					console.log(JSON.stringify(e)), qgUtil.showBanner()
				}), t.load()
			}
		}, cc.sys.platform == cc.sys.VIVO_GAME ? window.vivo = !0 : cc.sys.platform == cc.sys.HUAWEI_GAME && (window.huawei = !0), !window.qg || window.vivo || window.huawei || setTimeout(function() {
			qgUtil.ADInit()
		}, 1), cc._RF.pop()
	}, {}],
	PKMode: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b32a9YiMRhNcrV4QfNN0ECG", "PKMode");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../AudioManager"),
			c = e("../GlobalManager"),
			r = e("./ScoreLabel"),
			l = cc._decorator,
			d = l.ccclass,
			u = (l.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.PKData = null, t.dressInfo = null, t
				}
				return i(t, e), t.prototype.start = function() {
					var e = this;
					cc.resources.load("dress/data/PK", cc.JsonAsset, function(t, n) {
						e.PKData = n.json
					}), this.dressInfo = c.default.getInstance().getDressInfo()
				}, t.prototype.update = function() {
					c.default.getInstance().isPkMode && this.dressInfo && this.PKData && cc.find("Score", this.node).getComponent(r.default).setScore(this.countScore())
				}, t.prototype.initPKMode = function() {
					cc.find("enemyScore", this.node).getComponent(r.default).setScore(80 * Math.random() + 150), c.default.getInstance().initDressInfo()
				}, t.prototype.overPKMode = function() {
					cc.find("enemyScore", this.node).getComponent(r.default).clearScore()
				}, t.prototype.PKBtn = function() {
					var e = parseInt(cc.find("enemyScore", this.node).getComponent(cc.Label).string);
					parseInt(cc.find("Score", this.node).getComponent(cc.Label).string) > e ? (cc.find("Victory", this.node).active = !0, cc.find("Victory", this.node).getComponentInChildren(sp.Skeleton).setAnimation(1, "animation", !1), s.default.getInstance().playSuccessEffect(), window.SDK.showChaping_INGAME()) : (cc.find("Fail", this.node).active = !0, cc.find("Fail", this.node).getComponentInChildren(sp.Skeleton).setAnimation(1, "animation", !1), s.default.getInstance().playFailEffect(), window.SDK.showChaping_INGAME())
				}, t.prototype.restartBtn = function() {
					cc.find("Fail", this.node).active = !1, c.default.getInstance().initDressInfo()
				}, t.prototype.nextBtn = function() {
					var e = 80 * Math.random() + 160;
					cc.find("enemyScore", this.node).getComponent(r.default).setScore(e);
					for (var t = cc.find("enemy", this.node).children, n = 0; n < t.length; n++)
						if (t[n].active) {
							if (n != t.length - 1) {
								t[n].active = !1, t[n + 1].active = !0;
								break
							}
							t[n].active = !1, t[0].active = !0;
							break
						} cc.find("Victory", this.node).active = !1, cc.find("Score", this.node).getComponent(r.default).clearScore(), c.default.getInstance().initDressInfo()
				}, t.prototype.countScore = function() {
					var e = 0;
					return this.dressInfo.hair && this.PKData.hair[this.dressInfo.hair] && (e += this.PKData.hair[this.dressInfo.hair]), this.dressInfo.tops && this.PKData.tops[this.dressInfo.tops] && (e += this.PKData.tops[this.dressInfo.tops]), this.dressInfo.overcoat && this.PKData.overcoat[this.dressInfo.overcoat] && (e += this.PKData.overcoat[this.dressInfo.overcoat]), this.dressInfo.bottoms && this.PKData.bottoms[this.dressInfo.bottoms] && (e += this.PKData.bottoms[this.dressInfo.bottoms]), this.dressInfo.onePiece && this.PKData.onePiece[this.dressInfo.onePiece] && (e += this.PKData.onePiece[this.dressInfo.onePiece]), this.dressInfo.socks && this.PKData.socks[this.dressInfo.socks] && (e += this.PKData.socks[this.dressInfo.socks]), this.dressInfo.shoes && this.PKData.shoes[this.dressInfo.shoes] && (e += this.PKData.shoes[this.dressInfo.shoes]), this.dressInfo.headwear && this.PKData.headwear[this.dressInfo.headwear] && (e += this.PKData.headwear[this.dressInfo.headwear]), this.dressInfo.jewelry && this.PKData.jewelry[this.dressInfo.jewelry] && (e += this.PKData.jewelry[this.dressInfo.jewelry]), this.dressInfo.bag && this.PKData.bag[this.dressInfo.bag] && (e += this.PKData.bag[this.dressInfo.bag]), this.dressInfo.face && this.PKData.face[this.dressInfo.face] && (e += this.PKData.face[this.dressInfo.face]), e
				}, a([d], t)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {
		"../AudioManager": "AudioManager",
		"../GlobalManager": "GlobalManager",
		"./ScoreLabel": "ScoreLabel"
	}],
	PkBtnControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "28f29akh7NN67mq3nfbnpYt", "PkBtnControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../GlobalManager"),
			c = e("./PKMode"),
			r = cc._decorator,
			l = r.ccclass,
			d = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.clearBtn = null, t.zoomBtn = null, t.saveBtn = null, t.suitModeBtn = null, t.character = null, t.background = null, t.PKMode = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.initPkMode = function() {
					cc.tween(this.clearBtn).to(.2, {
						position: this.clearBtn.position.subtract(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.zoomBtn).to(.2, {
						position: this.zoomBtn.position.subtract(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.saveBtn).to(.2, {
						position: this.saveBtn.position.add(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.suitModeBtn).to(.2, {
						position: this.suitModeBtn.position.add(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.node).to(.2, {
						position: this.node.position.add(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.character).to(.2, {
						scale: .5,
						position: this.character.position.add(new cc.Vec3(200, -50, 0))
					}).start(), cc.tween(this.background).to(.2, {
						position: this.background.position.subtract(new cc.Vec3(950, 0, 0))
					}).start(), cc.tween(this.PKMode).to(.2, {
						position: this.PKMode.position.subtract(new cc.Vec3(950, 0, 0))
					}).start(), s.default.getInstance().isPkMode = !0, cc.director.getScene().getChildByName("Canvas").getChildByName("PKMode").getComponent(c.default).initPKMode()
				}, t.prototype.overPkMode = function() {
					cc.tween(this.clearBtn).to(.2, {
						position: this.clearBtn.position.add(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.zoomBtn).to(.2, {
						position: this.zoomBtn.position.add(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.saveBtn).to(.2, {
						position: this.saveBtn.position.subtract(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.suitModeBtn).to(.2, {
						position: this.suitModeBtn.position.subtract(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.node).to(.2, {
						position: this.node.position.subtract(new cc.Vec3(200, 0, 0))
					}).start(), cc.tween(this.character).to(.2, {
						scale: .6,
						position: this.character.position.subtract(new cc.Vec3(200, -50, 0))
					}).start(), cc.tween(this.background).to(.2, {
						position: this.background.position.add(new cc.Vec3(950, 0, 0))
					}).start(), cc.tween(this.PKMode).to(.2, {
						position: this.PKMode.position.add(new cc.Vec3(950, 0, 0))
					}).start(), s.default.getInstance().isPkMode = !1, cc.director.getScene().getChildByName("Canvas").getChildByName("PKMode").getComponent(c.default).overPKMode()
				}, a([d(cc.Node)], t.prototype, "clearBtn", void 0), a([d(cc.Node)], t.prototype, "zoomBtn", void 0), a([d(cc.Node)], t.prototype, "saveBtn", void 0), a([d(cc.Node)], t.prototype, "suitModeBtn", void 0), a([d(cc.Node)], t.prototype, "character", void 0), a([d(cc.Node)], t.prototype, "background", void 0), a([d(cc.Node)], t.prototype, "PKMode", void 0), a([l], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../GlobalManager": "GlobalManager",
		"./PKMode": "PKMode"
	}],
	SDKconfig: [function(e, t) {
		"use strict";
		cc._RF.push(t, "39e8bFy7gpL541/wAFjPOw0", "SDKconfig"), window.llaburl = "dn.bkbyxa.com/lab/tt/shanliangshaonvhuanghuanzhuagnxiu/lab100.json", window.GAME_NAME = "\u95ea\u4eae\u5c11\u5973\u6362\u88c5", window.GONGSI_NAME = "\u77f3\u5bb6\u5e84\u5927\u5e74\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8", window.xinxi_ruanzhuhao = "2023SA0041466", window.xinxi_zhuzuoquanren = "\u77f3\u5bb6\u5e84\u5927\u5e74\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8", window.ext = {}, window.hwConfig = {
			huaweiAppid: "105724545"
		}, window.ksConfig = {
			shipinID: "2300001242_01",
			chapingID: "2300001242_02"
		}, window.oppoConfig = {
			appID: "30887875",
			shipinID: "666721",
			bannerID: "666726",
			yuanshengID1: "666724",
			yuanshengID2: "666725",
			yuanshengID3: "666727",
			huituiheziID: "666723",
			htuihengfu: "666722",
			moban: "666728"
		}, window.qqConfig = {
			qq_bannerID: "c98673bdc22dc2e6b320750bcd33c0ee",
			qq_videoID: "ace521b9141d73617648782a61d6357c",
			qq_chapingID: "7d9091dbe09c224efb3689a24985b7e1",
			qq_heziID: "d49420928012b2563bee9151ebe8a382",
			qq_jimuID: "65c6f607110ae43ccb7ba9e684110e82"
		}, window.ttConfig = {
			bannerID: "2jd72eg3i611u2j69o",
			videoID: "9egbk4haf828543bp0",
			chapingID: "16kdd679p2jj3j117l",
			fenxianghuati: ["\u5854\u9632", "\u53d1\u80b2", "\u6296\u97f3\u5c0f\u6e38\u620f"]
		}, window.vivoConfig = {
			shipinID: "abf40d2010e448918bbdc67f8a32f6c1",
			chapingID: "2f0906a955b844c8ba51984d16601c22",
			bannerID: "502defe2bec5412781c24ad83553f6f5",
			yuanshengID1: "",
			yuanshengID2: "",
			yuanshengID3: "",
			hutui9gongge: "d91d286a58044d10bcfd656744027ebd",
			mobanID: "425e268bf2b0440c8b7951f6f043ce35"
		}, window.wxConfig = {
			_randomShareDatas: [{
				title: "",
				imageUrl: ""
			}]
		}, window.mgConfig = {
			appid: "729ab4f9921f4687baf93038b70397df",
			cid: "34970",
			mid: "628415",
			bannerID: "349708016",
			chapingID: "349709691",
			shipinID: "349707636"
		}, cc._RF.pop()
	}, {}],
	SDK: [function(e, t) {
		"use strict";
		cc._RF.push(t, "6322cyU559Czb0Sv7wZVyji", "SDK"), window.GAME_BANNER_TIME = 0, window.GAME_CHAPING_TIME = 0, window.GAME_XITONGCHAPING_TIME = 0, window.CHAPINGJISHU_over = 0, window.CHAPINGJISHU_pause = 0, window.CHAPINGJISHU_ingame = 0, window.CHAPINGJISHU_other = 0, window.CHAPINGXITONG_other = 0, window.ISVIVOAPK = !1, window.ISOPPOAPK = !1, window.IS233APK = !1, window.ISXIAOMIAPK = !1, window.sdkVersion = "1.5.0", console.log("SDK version" + window.sdkVersion), window.SDK = {
			apkMoreGame: !1,
			zhendong: function() {
				window.tt ? tt.vibrateShort() : window.qg ? qg.vibrateShort() : window.weixin ? wx.vibrateShort() : window.qq && qq.vibrateShort()
			},
			APK_SHOWAD: function() {
				celve.apk_time > 0 && setTimeout(function() {
					SDK.js2JavaEvent("showChaPing")
				}, celve.apk_time)
			},
			autuShowChaping: function() {
				if (console.log("---------------autuShowChaping"), console.log(window.celve.auto_chaping), window.celve.auto_chaping) {
					var e = parseInt(window.celve.auto_chaping);
					e > 3 && setInterval(function() {
						SDK.showChaping_INGAME()
					}, e)
				}
			},
			bannerShow: function() {
				console.log("---------------bannerShow"), (new Date).getTime() < window.GAME_BANNER_TIME + celve.time_banner || (window.GAME_BANNER_TIME = (new Date).getTime(), window.vivo ? vivoUtil.showBanner() : window.huawei ? hwUtil.showBanner() : window.qg ? qgUtil.showBanner() : window.tt ? TouTiaoTools.showBanner() : window.qq ? qqUtil.showBanner() : window.ks ? KsUtil.showBanner() : window.uc ? UCUtil.bannerShow() : window.weixin ? wxUtil.showBanner() : window.mgtvGameSdk && mgUtill.showBanner())
			},
			bannerHide: function() {
				console.log("---------------bannerHide"), window.vivo ? vivoUtil.closeBanner() : window.huawei ? hwUtil.closeBanner() : window.qg ? qgUtil.closeBanner() : window.tt ? TouTiaoTools.hideBanner() : window.qq ? qqUtil.hideBanner() : window.ks ? KsUtil.bannerHide() : window.uc ? UCUtil.bannerHide() : window.weixin ? wxUtil.hideBanner() : window.mgtvGameSdk && mgUtill.bannerHide()
			},
			showChaping_GAMEOVER: function() {
				console.log("---------------showChaping_GAMEOVER"), window.CHAPINGJISHU_over++, window.CHAPINGJISHU_over >= celve.overcount && (window.CHAPINGJISHU_over = 0, 100 * Math.random() < celve.overgaiLv && SDK.chapingAPI(1))
			},
			showChaping_PAUSE: function() {
				console.log("---------------showChaping_PAUSE"), window.CHAPINGJISHU_pause++, window.CHAPINGJISHU_pause >= celve.pausecount && (window.CHAPINGJISHU_pause = 0, 100 * Math.random() < celve.pausegaiLv && SDK.chapingAPI(2))
			},
			showChaping_INGAME: function() {
				console.log("---------------showChaping_INGAME"), window.CHAPINGJISHU_ingame++, window.CHAPINGJISHU_ingame >= celve.inGamecount && (window.CHAPINGJISHU_ingame = 0, 100 * Math.random() < celve.inGamegaiLv && SDK.chapingAPI(3))
			},
			showChaping_OTHER: function() {
				console.log("---------------showChaping_OTHER"), SDK.showChaping_XITONG(), window.CHAPINGJISHU_other++, window.CHAPINGJISHU_other >= celve.othercount && (window.CHAPINGJISHU_other = 0, 100 * Math.random() < celve.othergaiLv && SDK.chapingAPI(4))
			},
			showChaping_XITONG: function() {
				window.CHAPINGXITONG_other++, window.CHAPINGXITONG_other >= celve.xitongcount && (window.CHAPINGXITONG_other = 0, 100 * Math.random() < celve.xitonggaiLv && SDK.chapingAPI_xitong())
			},
			chapingAPI_xitong: function() {
				celve.apk_time > 0 || (new Date).getTime() < window.GAME_XITONGCHAPING_TIME || (window.GAME_XITONGCHAPING_TIME = (new Date).getTime() + celve.time_xitongcp)
			},
			chapingAPI: function() {
				celve.apk_time > 0 || (new Date).getTime() < window.GAME_CHAPING_TIME || (window.GAME_CHAPING_TIME = (new Date).getTime() + celve.time_chaping, console.log("show chaping"), window.vivo ? vivoUtil.createNativead() : window.huawei ? hwUtil.createNativeadChaping() : window.qg ? qgUtil.showAd() : window.tt ? TouTiaoTools.showChaPing() : window.qq ? qqUtil.showChaPing() : window.ks ? KsUtil.showChaping() : window.uc ? UCUtil.showChaping() : window.weixin ? wxUtil.showChaPing() : window.mgtvGameSdk && mgUtill.showChaping())
			},
			hideGrid: function() {
				console.log("---------------hideGrid"), window.qq && qqUtil.hideGrid()
			},
			showGrid: function() {
				console.log("---------------showGrid"), window.qq && qqUtil.showGrid()
			},
			haveShare: function() {
				return !!window.qq || !!window.tt
			},
			fengxiang: function(e, t) {
				console.log("---------------fengxiang"), window.qq ? qqUtil.share(e, t) : window.tt ? TouTiaoTools.fenxiangVideo(e, t) : window.wx && wxUtil.share(e, t)
			},
			adCB: null,
			shipin: function(e, t) {
				console.info('111',e,t);
				GVAdBreak(function(){
					e && e();
				})				
			},
			adSuccess: function() {
				null != SDK.adCB && (SDK.adCB(), SDK.adCB = null)
			},
			adFaild: function() {},
			luzhiKaishi: function() {
				console.log("---------------luzhiKaishi"), window.tt && TouTiaoTools.luzhiKaishi(), window.ks && KsUtil.luzhiKaishi()
			},
			luzhijieshu: function() {
				console.log("---------------luzhijieshu"), window.tt && TouTiaoTools.luzhijieshu(), window.ks && KsUtil.luzhijieshu()
			},
			sceneTrue: function() {
				return null == window.newuser && (1 != cc.sys.localStorage.getItem("newuser") ? (cc.sys.localStorage.setItem("newuser", 1), window.newuser = !0) : window.newuser = !1), !(0 == window.newuser && null == ext.newuser || (window.qq ? !qqUtil.sceneTrue() : window.tt ? !TouTiaoTools.sceneTrue() : window.ks ? !KsUtil.sceneTrue() : window.weixin && !wxUtil.sceneTrue()))
			},
			libaojishu: 0,
			showlibao: function(t) {
				if (SDK.sceneTrue() && ext.ecpm && 100 * Math.random() < ext.ecpm) {
					SDK.libaojishu += 1;
					var n = 1e4;
					if (ext.ecpmCount && (n = ext.ecpmCount), SDK.libaojishu > n) return void(t && t());
					var o = "yuansheng/libao/libao",
						i = cc.view.getVisibleSize();
					i.width > i.height && (o = "yuansheng/libao/libao_h"), cc.loader.loadRes(o, cc.Prefab, function(n, o) {
						var i = cc.find("Canvas");
						i || (i = cc.director.getScene());
						var a = cc.instantiate(o);
						a.parent = i, a.position = cc.v2(0, 0), a.zIndex = 9999, a.getComponent(e("ecpm")).setCallBack(t)
					}.bind(this))
				} else t && t()
			},
			gameStart: function(e) {
				console.log("---------------gameStart"), SDK.libaoID = 1, SDK.showlibao(e)
			},
			gameRestart: function(e) {
				console.log("---------------gameRestart"), SDK.libaoID = 2, SDK.showlibao(e)
			},
			gameFanhui: function(e) {
				console.log("---------------gameFanhui"), SDK.libaoID = 3, SDK.showlibao(e)
			},
			gameOver: function() {
				console.log("---------------gameOver"), window.qq && qqUtil.sceneTrue() && ext.randVideo && 100 * Math.random() < ext.randVideo && SDK.shipin(function() {}), window.weixin && wxUtil.sceneTrue() && ext.randVideo && 100 * Math.random() < ext.randVideo && SDK.shipin(function() {}), window.tt && TouTiaoTools.sceneTrue() && ext.randVideo && 100 * Math.random() < ext.randVideo && TouTiaoTools.getVideoAd(function() {}), window.ks && KsUtil.sceneTrue() && ext.randVideo && 100 * Math.random() < ext.randVideo && SDK.shipin(function() {}), window.vivo && ext.randVideo && 100 * Math.random() < ext.randVideo && SDK.shipin(function() {}), !window.qg || window.vivo || window.huawei || ext.randVideo && 100 * Math.random() < ext.randVideo && SDK.shipin(function() {}), window.kaiguan && ext.sendDesk && (Math.random(), ext.sendDesk)
			},
			showIcon: function() {
				console.log("---------------showIcon")
			},
			closeIcon: function() {
				console.log("---------------closeIcon")
			},
			showLoading: function() {
				window.IS_Down = !0, window.qq ? qq.showLoading({
					title: "\u52a0\u8f7d\u4e2d",
					mask: !0
				}) : window.tt ? tt.showLoading({
					title: "\u52a0\u8f7d\u4e2d...",
					success: function(e) {
						console.log("" + e)
					},
					fail: function() {
						console.log("showLoading\u8c03\u7528\u5931\u8d25")
					}
				}) : window.vivo ? qg.showLoading({
					message: "\u52a0\u8f7d\u4e2d"
				}) : window.qg ? qg.showLoading({
					title: "\u52a0\u8f7d\u4e2d"
				}) : window.weixin && wx.showLoading({
					title: "\u52a0\u8f7d\u4e2d",
					mask: !0
				})
			},
			hideLoading: function() {
				window.IS_Down = !1, window.qq ? qq.hideLoading() : window.tt ? tt.hideLoading() : window.qg ? qg.hideLoading({}) : window.weixin && wx.hideLoading()
			},
			java2JsEvent: function(e) {
				cc.log("----------------------- java2JsEvent:", e), "playADSuccess" == e ? this.adSuccess() : "playADFailed" == e && this.adFaild()
			},
			js2JavaEvent: function() {
				return cc.log("CC_JSB or jsb.reflection is undefined"), !1
			},
			laodSub: function(e, t) {
				var n, o, i, a = void 0;
				if (window.qg && (a = window.qg), window.tt && (a = window.tt), window.qq && (a = window.qq), a) {
					var s = function(e, t) {
						console.log(e), a.loadSubpackage({
							name: e,
							success: function() {
								console.log("jiazaifenbao success"), t()
							},
							fail: function() {
								console.log("jiazaifenbao fail")
							}
						})
					};
					o = function() {
						t()
					}, s((n = e)[i = 0], function e() {
						++i >= n.length ? o() : s(n[i], e)
					})
				} else t()
			}
		}, cc._RF.pop()
	}, {
		ecpm: "ecpm"
	}],
	ScoreLabel: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "657721lWHdJD5Tsnm9WpMQi", "ScoreLabel");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.scoreLabel = null, t.currentScore = 0, t.targetScore = 0, t.increment = 0, t
				}
				return i(t, e), t.prototype.start = function() {
					this.scoreLabel = this.node.getComponent(cc.Label)
				}, t.prototype.updateIncreaseScore = function() {
					this.currentScore < this.targetScore - this.increment ? (this.currentScore += this.increment, this.scoreLabel.string = this.currentScore.toString()) : this.currentScore < this.targetScore ? (this.currentScore += 1, this.scoreLabel.string = this.currentScore.toString()) : cc.director.getScheduler().unschedule(this.updateIncreaseScore, this)
				}, t.prototype.updateReduceScore = function() {
					this.currentScore > this.targetScore + this.increment ? (this.currentScore -= this.increment, this.scoreLabel.string = this.currentScore.toString()) : this.currentScore > this.targetScore ? (this.currentScore -= 1, this.scoreLabel.string = this.currentScore.toString()) : cc.director.getScheduler().unschedule(this.updateReduceScore, this)
				}, t.prototype.increaseScore = function(e) {
					this.targetScore = this.currentScore + e, cc.director.getScheduler().schedule(this.updateIncreaseScore, this, 0)
				}, t.prototype.reduceScore = function(e) {
					this.targetScore = this.currentScore - e, cc.director.getScheduler().schedule(this.updateReduceScore, this, 0)
				}, t.prototype.clearScore = function() {
					cc.director.getScheduler().unschedule(this.updateIncreaseScore, this), cc.director.getScheduler().unschedule(this.updateReduceScore, this), this.currentScore = 0
				}, t.prototype.setScore = function(e) {
					this.targetScore = e, this.targetScore >= this.currentScore ? this.increaseScore(this.targetScore - this.currentScore) : this.reduceScore(this.currentScore - this.targetScore)
				}, a([r], t.prototype, "increment", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	TDHttps: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c723dCWaUlKVIqw5fFhzbdz", "TDHttps");
		var n = function() {
			var e = "E20CEC08BEE248DDA5D53BE2557DBEF4",
				n = window.GAME_NAME;
			window.vivo ? n += "vivo" : window.qg ? n += "qg" : window.tt ? n += "tt" : window.qq ? n += "qq" : window.ks ? n += "ks" : window.uc ? n += "uc" : n = "test";
			var o = "h5.udrig.com/g/v1";

			function i(e) {
				return e.replace(/(^\s*)|(\s*$)/g, "")
			}

			function a() {
				y.addLoginCache("logout")
			}

			function s() {
				this.element = null, this.url = o, this.create(), this.opts = {}
			}
			window.sessionStorage = cc.sys.localStorage;
			var c = {
					sdkVersion: "1.0.5",
					sdkType: "mobile_web",
					installationTime: "",
					appDisplayName: "",
					sequenceNumber: ""
				},
				r = {
					deviceId: "",
					pixel: "",
					language: navigator.language
				},
				l = {},
				d = null,
				u = (new Date).getTime(),
				h = {
					level: null,
					time: null
				},
				f = {},
				g = (location.hostname, {
					addEventListener: function(e, t, n) {
						e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
					}
				}),
				p = [];
			g.addEventListener(window, "pagehide", a), g.addEventListener(window, "beforeunload", a),
				function(e, n, o) {
					void 0 !== t && t.exports ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : n.Fingerprint = o()
				}(0, f, function() {
					var e = function(e) {
						var t, n;
						t = Array.prototype.forEach, n = Array.prototype.map, this.each = function(e, n, o) {
							if (null !== e)
								if (t && e.forEach === t) e.forEach(n, o);
								else if (e.length === +e.length) {
								for (var i = 0, a = e.length; i < a; i++)
									if (n.call(o, e[i], i, e) === {}) return
							} else
								for (var s in e)
									if (e.hasOwnProperty(s) && n.call(o, e[s], s, e) === {}) return
						}, this.map = function(e, t, o) {
							var i = [];
							return null == e ? i : n && e.map === n ? e.map(t, o) : (this.each(e, function(e, n, a) {
								i[i.length] = t.call(o, e, n, a)
							}), i)
						}, "object" == typeof e ? (this.hasher = e.hasher, this.screen_resolution = e.screen_resolution, this.screen_orientation = e.screen_orientation, this.canvas = e.canvas, this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
					};
					return e.prototype = {
						get: function() {
							var e = [];
							return e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), this.screen_resolution && void 0 !== this.getScreenResolution() && e.push(this.getScreenResolution().join("x")), e.push((new Date).getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), e.push(!!window.indexedDB), document.body ? e.push(typeof document.body.addBehavior) : e.push("undefined"), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
						},
						murmurhash3_32_gc: function(e, t) {
							var n, o, i, a, s, c, r, l;
							for (n = 3 & e.length, o = e.length - n, i = t, s = 3432918353, c = 461845907, l = 0; l < o;) r = 255 & e.charCodeAt(l) | (255 & e.charCodeAt(++l)) << 8 | (255 & e.charCodeAt(++l)) << 16 | (255 & e.charCodeAt(++l)) << 24, ++l, i = 27492 + (65535 & (a = 5 * (65535 & (i = (i ^= r = (65535 & (r = (r = (65535 & r) * s + (((r >>> 16) * s & 65535) << 16) & 4294967295) << 15 | r >>> 17)) * c + (((r >>> 16) * c & 65535) << 16) & 4294967295) << 13 | i >>> 19)) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (a >>> 16) & 65535) << 16);
							switch (r = 0, n) {
								case 3:
									r ^= (255 & e.charCodeAt(l + 2)) << 16;
								case 2:
									r ^= (255 & e.charCodeAt(l + 1)) << 8;
								case 1:
									i ^= r = (65535 & (r = (r = (65535 & (r ^= 255 & e.charCodeAt(l))) * s + (((r >>> 16) * s & 65535) << 16) & 4294967295) << 15 | r >>> 17)) * c + (((r >>> 16) * c & 65535) << 16) & 4294967295
							}
							return i ^= e.length, i = 2246822507 * (65535 & (i ^= i >>> 16)) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i = 3266489909 * (65535 & (i ^= i >>> 13)) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^= i >>> 16) >>> 0
						},
						hasLocalStorage: function() {
							try {
								return !!window.localStorage
							} catch (e) {
								return !0
							}
						},
						hasSessionStorage: function() {
							try {
								return !!window.sessionStorage
							} catch (e) {
								return !0
							}
						},
						isCanvasSupported: function() {
							var e = document.createElement("canvas");
							return !(!e.getContext || !e.getContext("2d"))
						},
						isIE: function() {
							return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
						},
						getPluginsString: function() {
							return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
						},
						getRegularPluginsString: function() {
							return this.map(navigator.plugins, function(e) {
								var t = this.map(e, function(e) {
									return [e.type, e.suffixes].join("~")
								}).join(",");
								return [e.name, e.description, t].join("::")
							}, this).join(";")
						},
						getIEPluginsString: function() {
							return window.ActiveXObject ? this.map(["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"], function(e) {
								try {
									return new ActiveXObject(e), e
								} catch (e) {
									return null
								}
							}).join(";") : ""
						},
						getScreenResolution: function() {
							return this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
						},
						getCanvasFingerprint: function() {
							var e = document.createElement("canvas"),
								t = e.getContext("2d"),
								n = "www.talkingdata.com";
							return t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17), e.toDataURL()
						}
					}, e
				});
			var v = function(e, t, n) {
				if (void 0 === t) {
					var o = null;
					if (document.cookie && "" != document.cookie)
						for (var a = document.cookie.split(";"), s = 0; s < a.length; s++) {
							var c = i(a[s]);
							if (c.substring(0, e.length + 1) == e + "=") {
								o = decodeURIComponent(c.substring(e.length + 1));
								break
							}
						}
					return o
				}
				n = n || {}, null === t && (t = "", n.expires = -1);
				var r, l = "";
				n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (r = new Date).setTime(r.getTime() + 864e5 * n.expires) : r = n.expires, l = "; expires=" + r.toUTCString());
				var d = n.path ? "; path=" + n.path : "",
					u = n.domain ? "; domain=" + n.domain : "",
					h = n.secure ? "; secure" : "";
				document.cookie = [e, "=", encodeURIComponent(t), l, d, u, h].join("")
			};
			f.supportStore = {
				local: !0,
				session: !0,
				verifyStorage: function() {
					try {
						localStorage.setItem("__TD_localStorage", 1), localStorage.removeItem("__TD_localStorage"), this.local = !0
					} catch (i) {
						this.local = !1
					}
					try {
						sessionStorage.setItem("__TD_sessionStorage", 1), sessionStorage.removeItem("__TD_sessionStorage"), this.session = !0
					} catch (i) {
						this.session = !1
					}
				}
			}, f.supportStore.verifyStorage(), f.localStorage = {
				add: function(e, t) {
					this.addLocalStorage(e, t), "sessionId" != e && this.addCookie(e, t)
				},
				remove: function(e) {
					for (var t = e.split(","), n = 0, o = t.length; n < o; n++) t[n] && this.delLocalStorage(t[n])
				},
				get: function(e) {
					return this.getLocalStorage(e) || this._getCookie(e)
				},
				create: function() {
					v("__TD_LOCAL") || (this._addCookie(""), f.supportStore.local)
				},
				addCookie: function(e, t) {
					if (!f.supportStore.local) {
						this.create();
						var n = this.cookieList();
						n[e] = t;
						var o = [];
						for (var i in n) o.push(i + "=" + n[i]);
						this._addCookie(o.join(";"))
					}
				},
				_setCookie: function() {
					this.cookieList(), v("__TD_LOCAL", "", {
						expires: 1095,
						path: "/",
						domain: location.hostname
					})
				},
				_addCookie: function(e) {
					v("__TD_LOCAL", e, {
						expires: 1095,
						path: "/",
						domain: location.hostname
					})
				},
				_getCookie: function(e) {
					var t = this.cookieList();
					if (t && t[e]) return t[e]
				},
				delCookie: function() {},
				cookieList: function() {
					var e = v("__TD_LOCAL");
					return this.format(e)
				},
				addLocalStorage: function(e, t) {
					f.supportStore.local && ("sessionId" == e && f.supportStore.session ? sessionStorage.setItem("__TD_" + e, t) : localStorage["__TD_" + e] = t)
				},
				delLocalStorage: function(e) {
					f.supportStore.local && ("sessionId" == e && f.supportStore.session ? sessionStorage.removeItem("__TD_" + e) : localStorage.removeItem("__TD_" + e))
				},
				getLocalStorage: function(e) {
					if (f.supportStore.local) return "sessionId" == e && f.supportStore.session ? sessionStorage.getItem("__TD_" + e) : localStorage["__TD_" + e]
				},
				format: function(e) {
					var t = {};
					if (!e) return t;
					for (var n = e.split(";"), o = n.length, i = 0; i < o; i++) {
						var a = n[i].split("=");
						2 == a.length && (t[a[0]] = a[1])
					}
					return t
				}
			}, f.sessionStorage = {
				add: function(e, t) {
					f.supportStore.session && sessionStorage.setItem("__TD_" + e, t)
				},
				get: function(e) {
					return sessionStorage.getItem("__TD_" + e)
				},
				remove: function(e) {
					sessionStorage.removeItem("__TD_" + e)
				}
			}, s.prototype = {
				create: function() {},
				scriptCallback: function() {},
				set: function(e) {
					this.opts = e, this.send()
				},
				getConfig: function() {},
				send: function() {
					var e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
					e.open("POST", this.url, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange = function() {
						4 == e.readyState && e.status
					}, e.send(JSON.stringify(this.opts))
				}
			}, (new s).create();
			var w = {
				userInfo: {
					userID: 0,
					gameServer: "",
					level: -1
				},
				index: {
					G2: "gameInit",
					G3: "Login",
					G4: "Logout",
					G5: "Levelup",
					G7: "UpdateUserProfile",
					G8: "CustomEvent",
					"G9.1": "Charge",
					"G9.2": "Charge",
					G15: "Reward"
				},
				getEventData: function(e) {
					if (w.index, w.index[e]) return w[w.index[e]].getData(e)
				},
				getCommon: function() {
					return {
						appProfile: c,
						deviceProfile: r,
						events: []
					}
				}
			};
			w.gameInit = {
				getData: function() {
					return {
						eventOccurTime: (new Date).getTime(),
						eventData: {},
						eventID: "G2"
					}
				}
			}, w.Login = {
				getData: function() {
					var e = {
						eventOccurTime: (new Date).getTime(),
						eventData: {},
						eventID: "G3"
					};
					e.eventData = l;
					var t = w.getUserStateTime("logout");
					return t && (e.eventData.interval = t), e
				}
			}, w.Logout = {
				getData: function() {
					var e = {
							eventOccurTime: (new Date).getTime(),
							eventData: {},
							eventID: "G4"
						},
						t = d || l;
					t.gameSessionID && (e.eventData.gameSessionID = t.gameSessionID), t.userID && (e.eventData.userID = t.userID), t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer), e.eventData.gameSessionStart = u;
					var n = w.getUserStateTime("login");
					return n && (e.eventData.duration = n), e
				}
			}, w.getUserStateTime = function(e) {
				if (p.length > 0)
					for (var t = p.length - 1; t >= 0; t--) {
						var n = p[t];
						if (n[1] == e) {
							var o = n[2];
							return parseInt(((new Date).getTime() - o) / 1e3)
						}
					}
			}, w.Levelup = {
				getData: function() {
					var e = {
							eventOccurTime: (new Date).getTime(),
							eventData: {},
							eventID: "G5"
						},
						t = l || d;
					e.eventData.gameSessionID = t.gameSessionID || l.gameSessionID, t.userID && (e.eventData.userID = t.userID), t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer), h.level && (e.eventData.preLevel = h.level), h.time && (e.eventData.timeConsuming = parseInt(((new Date).getTime() - h.time) / 1e3)), e.eventData.gameSessionStart = u;
					var n = y.Mission.getMission();
					return n && (e.eventData.mission = n), e
				}
			}, w.UpdateUserProfile = {
				getData: function() {
					var e = w.Login.getData();
					return e.eventID = "G7", e
				}
			}, w.CustomEvent = {
				getData: function() {
					var e = {
							eventOccurTime: (new Date).getTime(),
							eventData: {},
							eventID: "G8"
						},
						t = l;
					t.gameSessionID && (e.eventData.gameSessionID = t.gameSessionID), t.userID && (e.eventData.userID = t.userID), t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer);
					var n = y.CustomEvent.info;
					return n.actionID && (e.eventData.actionID = n.actionID), n.actionData && (e.eventData.actionData = n.actionData), e
				}
			}, w.Charge = {
				getData: function() {
					var e = {
						eventOccurTime: (new Date).getTime(),
						eventData: {},
						eventID: "G9"
					};
					e.eventData = y.Charge.info;
					var t = y.Mission.getMission(),
						n = l;
					return n.gameSessionID && (e.eventData.gameSessionID = n.gameSessionID), n.userID && (e.eventData.userID = n.userID), n.level && (e.eventData.level = n.level), n.gameServer && (e.eventData.gameServer = n.gameServer), t && (e.eventData.mission = t), e
				}
			}, w.Reward = {
				getData: function() {
					var e = {
							eventOccurTime: (new Date).getTime(),
							eventData: {},
							eventID: "G15"
						},
						t = l;
					t.gameSessionID && (e.eventData.gameSessionID = t.gameSessionID), t.userID && (e.eventData.userID = t.userID), t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer);
					var n = y.Reward.info;
					return n.virtualCurrencyAmount && (e.eventData.virtualCurrencyAmount = n.virtualCurrencyAmount), n.reason && (e.eventData.reason = n.reason), n.mission && (e.eventData.mission = n.mission), e
				}
			}, w.Account = function() {
				sessionId
			}, w.Account.prototype = {
				getData: function() {}
			}, w.formatOpts = function(e) {
				var t = {};
				for (var n in e) t.key = e[n]
			}, w.loginCache = function() {
				l.userID || r.deviceId
			};
			var m = f.localStorage,
				y = {
					deviceId: 0,
					sessionId: 0,
					isSendG2: !1,
					changeSessionId: !1,
					isNewApp: !1,
					userInfoArr: ["userID", "account", "sex", "age", "accountType", "level", "gameServer"],
					installationTime: 0,
					init: function() {
						this.setDeviceId(), this.setPixel(), this.getAppFlag(), this.setSession(), this.setUser(), this.setLoginCache(), this.getLocalProfile(), this.isNewApp && (this.lastLogout(!0), this.resetLocalInfo(), this.setAppProfile()), this.sendGameInit(), this.setPartner(), this.isNewApp || this.lastLogout(), this.sendLogin(), this.addLoginCache("login")
					},
					resetLocalInfo: function() {
						for (var e = this.userInfoArr, t = 0, n = e.length; t < n; t++) delete l[e[t]], m.remove(e[t]);
						m.remove("login"), m.remove("leveluptime")
					},
					setDeviceId: function() {
						var e = localStorage.getItem("deviceId");
						e ? (this.deviceId = e, this.isSendG2 = !1) : (this.isSendG2 = !0, this.deviceId = 1e4 * Math.random() + "deviceId" + Number(Math.random().toString().substr(3, 1e3) + Date.now()).toString(36), m.add("deviceId", this.deviceId), localStorage.setItem("deviceId", this.deviceId), console.log("\u8bbe\u5907ID\uff1a" + this.deviceId)), r.deviceId = this.deviceId
					},
					setAppProfile: function() {
						var t = this.installationTime || (new Date).getTime();
						c.appDisplayName = "", c.sequenceNumber = e, m.add("appDisplayName", ""), m.add("appKey", e), m.add("installationTime", t)
					},
					getLocalProfile: function() {
						var e = m.get("appDisplayName"),
							t = m.get("appKey");
						if (c.appDisplayName = e || "", c.sequenceNumber = t, m.get("installationTime")) c.installationTime = m.get("installationTime");
						else {
							var n = (new Date).getTime();
							this.installationTime = n, c.installationTime = n
						}
					},
					setSession: function() {
						var e, t = this.deviceId;
						parseInt(t, 16), e = this.deviceId + "" + (new Date).getTime(), !f.sessionStorage.get("sessionId") || this.isNewApp ? (y.changeSessionId = !0, f.sessionStorage.add("sessionId", e)) : e = f.sessionStorage.get("sessionId"), l.gameSessionID = this.sessionId = e
					},
					setPixel: function() {
						var e = [720, 1280];
						window.devicePixelRatio && e.push(window.devicePixelRatio), r.pixel = e.join("*")
					},
					getAppFlag: function() {
						var t = m.get("appKey");
						e !== t ? (this.isNewApp = !0, this.isSendG2 = !0) : (this.isNewApp = !1, this.isSendG2 = !1)
					},
					sendLastApp: function() {},
					setUser: function() {
						var e = m.get("userID");
						d = d || {}, e && (l.userID = e, d.userID = e);
						var t = m.get("gameServer");
						t && (l.gameServer = d.gameServer = t);
						var n = m.get("level");
						n && (l.level = d.level = n);
						var o = m.get("accountType");
						o && (l.accountType = d.accountType = o);
						var i = m.get("age");
						i && (l.age = d.age = i);
						var a = m.get("account");
						a && (l.account = d.account = a);
						var s = m.get("sex");
						s && (l.sex = d.sex = s)
					},
					setPartner: function() {
						var e = "?td_channelid=" + n;
						if (e.indexOf("td_channelid") > -1)
							for (var t = e.replace("?", "").split("&"), o = 0; o < t.length; o++) t[o].indexOf("td_channelid=") > -1 && (c.partner = t[o].replace("td_channelid=", ""))
					},
					setLoginCache: function() {
						var e = m.get("login");
						e && (p = JSON.parse(e))
					},
					addLoginCache: function(e) {
						var t = l.userID || r.deviceId,
							n = [];
						n.push(t), n.push(e), n.push((new Date).getTime()), n.push(l.gameSessionID), p.push(n), p.length > 30 && (p = p.splice(1, p.length - 1)), m.add("login", JSON.stringify(p))
					},
					sendGameInit: function() {
						this.isSendG2 && y.EventBox.add("G2")
					},
					lastLogout: function(e) {
						if (p && y.changeSessionId) {
							for (var t = p, n = [], o = [], i = t.length - 1; i >= 0; i--) t[i].length < 3 || (0 == n.length && "logout" == t[i][1] ? n = t[i] : "login" == t[i][1] && t[i][3] == n[3] && (o = t[i]));
							var a, c;
							if (o.length > 0) {
								a = o[2], c = parseInt((n[2] - a) / 1e3);
								var r = {
										eventOccurTime: n[2],
										eventData: {},
										eventID: "G4"
									},
									d = e ? m.get("level") : l.level,
									u = e ? m.get("gameServer") : l.gameServer;
								r.eventData = {
									gameSessionID: n[3],
									userID: n[0],
									level: d,
									gameServer: u,
									gameSessionStart: a,
									duration: c
								};
								var h = w.getCommon();
								h.events.push(r), (new s).set(h)
							}
						}
					},
					sendLogin: function() {
						y.changeSessionId && y.EventBox.add("G3")
					}
				};
			y.EventBox = {
				eventNames: [],
				timer: null,
				add: function(e) {
					for (var t = "," + this.eventNames.join() + ",", n = e.split(","), o = 0; o < n.length; o++) - 1 == t.indexOf("," + n[o]) && this.eventNames.push(n[o]);
					this.send()
				},
				send: function() {
					var e = this;
					clearTimeout(e.timer), e.timer = setTimeout(function() {
						if (("," + e.eventNames.join() + ",").indexOf("G3,") > -1) {
							for (var t = [], n = 0; n < e.eventNames.length; n++) "G7" != e.eventNames[n] && "G5" != e.eventNames[n] && t.push(e.eventNames[n]);
							e.eventNames = t
						}
						var o = w.getCommon();
						for (n = 0; n < e.eventNames.length; n++) {
							var i = e.eventNames[n];
							w.index[i] && o.events.push(w[w.index[i]].getData(i))
						}
						0 != o.events.length && ((new s).set(o), e.eventNames = [])
					}, 20)
				}
			}, y.setUserInfo = function(e) {
				var t = l;
				return l.gameSessionID && (e.gameSessionID = l.gameSessionID), t.userID && (e.userID = t.userID), t.level && (e.level = parseInt(t.level)), t.gameServer && (e.gameServer = t.gameServer), e
			}, y.init(), window.TDGA = {}, TDGA.onPageLeave = function() {
				y.EventBox.add("G4")
			}, TDGA.getDeviceId = function() {
				return r.deviceId
			}, y.Account = {
				eventList: [],
				delInfo: [],
				set: function(e) {
					var t = "accountType,account,level,gender,age,gameServer,",
						n = null;
					for (var o in e) y.Account["set_" + o] && (e[o] || 0 === e[o]) && (o = "accountName" === o ? "account" : o, n = new RegExp(o + ",", "g"), t = t.replace(n, ""));
					for (var i in y.Account.delInfo = t.split(","), y.Account.clearOtherInfo(t), e) y.Account["set_" + i] && (e[i] || 0 === e[i]) && y.Account["set_" + i](e[i])
				},
				clearOtherInfo: function(e) {
					m.remove(e)
				},
				set_accountId: function(e) {
					var t = y.Account.delInfo;
					if (l.userID)
						if (l.userID == e);
						else {
							d.gameSessionID = l.gameSessionID, f.sessionStorage.remove("sessionId"), y.setSession(), d.userID = l.userID;
							for (var n = 0, o = t.length; n < o; n++) {
								var i = t[n];
								delete l[i]
							}
							m.add("userID", e), y.EventBox.add("G4,G3"), l.userID = e, y.addLoginCache("login")
						}
					else m.add("userID", e), l.userID = e, y.EventBox.add("G7")
				},
				set_accountType: function(e) {
					l.accountType != e && (m.add("accountType", e), l.accountType = e, y.EventBox.add("G7"))
				},
				set_accountName: function(e) {
					l.account != e && (m.add("account", e), l.account = e, y.EventBox.add("G7"))
				},
				set_level: function(e) {
					if (l.level && (d.level = l.level), l.level != e) {
						h.level = l.level, m.get("level");
						var t = m.get("leveluptime");
						t && (h.time = t), m.add("level", e), m.add("leveluptime", (new Date).getTime()), l.level = e, y.EventBox.add("G5")
					}
				},
				set_gender: function(e) {
					l.sex != e && (m.add("sex", e), l.sex = e, y.EventBox.add("G7"))
				},
				set_age: function(e) {
					l.age != e && (m.add("age", e), l.age = e, y.EventBox.add("G7"))
				},
				set_gameServer: function(e) {
					l.gameServer ? (d.gameServer = l.gameServer, l.gameServer != e && (f.sessionStorage.remove("sessionId"), y.setSession(), d.userID = l.userID, m.add("gameServer", e), l.gameServer = e, y.EventBox.add("G4,G3"), y.addLoginCache("login"))) : (m.add("gameServer", e), l.gameServer = e, y.EventBox.add("G7"))
				}
			}, TDGA.Account = y.Account.set, TDGA.Account.setAccount = y.Account.set_userID, TDGA.Account.setAccountType = y.Account.set_accountType, TDGA.Account.setAccountName = y.Account.set_accountName, TDGA.Account.setLevel = y.Account.set_level, TDGA.Account.setGender = y.Account.set_gender, TDGA.Account.setAge = y.Account.set_age, TDGA.Account.setGameServer = y.Account.set_gameServer, TDGA.AccountType = {
				ANONYMOUS: 0,
				REGISTERED: 1,
				SINA_WEIBO: 2,
				QQ: 3,
				TENCENT_WEIBO: 4,
				ND91: 5
			}, TDGA.Gender = {
				UNKNOWN: -1,
				MALE: 1,
				FEMALE: 2
			}, y.Mission = {
				info: {},
				MissionNum: {},
				list: {},
				selKey: "_key",
				begin: function(e) {
					if (e && "" != e) {
						var t = {};
						(t = y.setUserInfo(t)).mission = e, t.status = 1, y.Mission.add(t), y.Mission.send(t)
					}
				},
				completed: function(e) {
					if (e && "" != e) {
						var t = {
							mission: e
						};
						(t = y.setUserInfo(t)).mission = e, t.status = 2;
						var n, o = (n = y.Mission).list[t.mission + "_" + t.userID];
						if (o && o.length > 0)
							for (var i = o.length - 1; i >= 0; i--)
								if (1 == o[i].status && o[i].time) {
									var a = o[i].time,
										s = parseInt(((new Date).getTime() - a) / 1e3);
									t.timeConsuming = s;
									break
								}(n = y.Mission). add(t), n.send(t)
					}
				},
				failed: function(e, t) {
					if (e && "" != e) {
						var n = {
							mission: e
						};
						(n = y.setUserInfo(n)).mission = e, n.cause = t, n.status = 3;
						var o = y.Mission;
						o.add(n), o.send(n)
					}
				},
				init: function() {
					var e = m.get("mission");
					if (e) {
						var t = JSON.parse(e);
						this.list = t;
						var n = m.get("mission_Num");
						n && (this.MissionNum = JSON.parse(n))
					}
				},
				add: function(e) {
					e.time = (new Date).getTime(), this.list[e.mission + "_" + e.userID] || (this.list[e.mission + "_" + e.userID] = []), this.list[e.mission + "_" + e.userID].push(e), m.add("mission", JSON.stringify(this.list))
				},
				send: function(e) {
					var t = {
						eventOccurTime: (new Date).getTime(),
						eventData: {},
						eventID: "G6"
					};
					delete e.time;
					var n = e.userID;
					this.MissionNum["uid_" + n] = e.mission, m.add("mission_Num", JSON.stringify(this.MissionNum)), t.eventData = e;
					var o = w.getCommon();
					o.events.push(t), (new s).set(o)
				},
				getMission: function() {
					return this.MissionNum["uid_" + l.userID]
				}
			}, y.Mission.init(), TDGA.onMissionBegin = y.Mission.begin, TDGA.onMissionCompleted = y.Mission.completed, TDGA.onMissionFailed = y.Mission.failed, y.Reward = {
				info: {},
				send: function(e, t) {
					y.Reward.info = {};
					var n = {};
					e && (n.virtualCurrencyAmount = e), t && (n.reason = t);
					var o = y.Mission.getMission();
					o && (n.mission = o), y.Reward.info = n, y.EventBox.add("G15")
				}
			}, TDGA.onReward = y.Reward.send, y.CustomEvent = {
				info: {},
				send: function(e, t) {
					y.CustomEvent.info = {};
					var n = {};
					e && (n.actionID = e), t && (n.actionData = t), y.CustomEvent.info = n, y.EventBox.add("G8")
				}
			}, TDGA.onEvent = y.CustomEvent.send, y.Item = {
				purchase: function(e) {
					if (e && e.item) {
						var t = {};
						t.itemid = e.item, e.itemNumber && (t.itemnumber = parseInt(e.itemNumber)), e.priceInVirtualCurrency && (t.virtualCurrencyAmount = parseFloat(e.priceInVirtualCurrency));
						var n = y.Mission.getMission();
						n && (t.mission = n), t = y.setUserInfo(t), y.Item.send(t, "G10")
					}
				},
				use: function(e) {
					if (e && e.item) {
						var t = {};
						t.itemid = e.item, e.itemNumber && (t.itemnumber = e.itemNumber);
						var n = y.Mission.getMission();
						n && (t.mission = n), t = y.setUserInfo(t), y.Item.send(t, "G12")
					}
				},
				send: function(e, t) {
					var n = {
						eventOccurTime: (new Date).getTime(),
						eventData: {},
						eventID: t
					};
					n.eventData = e;
					var o = w.getCommon();
					o.events.push(n), (new s).set(o)
				}
			}, TDGA.onItemPurchase = y.Item.purchase, TDGA.onItemUse = y.Item.use, y.Charge = {
				info: {},
				orderList: {},
				selKey: "_key",
				request: function(e) {
					if (e.orderId && "" != e.orderId) {
						var t = this;
						t.info = {};
						for (var n = ["orderId", "iapId", "currencyAmount", "currencyType", "virtualCurrencyAmount", "paymentType"], o = 0; o < n.length; o++) e[n[o]] && (t.info[n[o]] = e[n[o]]);
						t.info.status = 1, y.Charge.info = t.info, y.EventBox.add("G9.1")
					}
				},
				successt: function(e) {
					if (e.orderId && "" != e.orderId) {
						var t = this;
						t.info = {};
						for (var n = ["orderId", "iapId", "currencyAmount", "currencyType", "virtualCurrencyAmount", "paymentType"], o = 0; o < n.length; o++) e[n[o]] && (t.info[n[o]] = e[n[o]]);
						t.info.status = 2, y.Charge.info = t.info, y.EventBox.add("G9.2")
					}
				},
				init: function() {
					var e = m.get("order");
					if (e && "undefined" != e) {
						var t = JSON.parse(e);
						this.addOrder(t)
					}
				},
				addOrder: function(e) {
					this.orderList[e.orderId + this.selKey] = e
				}
			}, y.Charge.init(), TDGA.onChargeRequest = y.Charge.request, TDGA.onChargeSuccess = y.Charge.successt
		};
		setTimeout(function() {
			try {
				n()
			} catch (e) {}
		}, 1), cc._RF.pop()
	}, {}],
	TD: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3796azR1q9Oebp9JDudDVpE", "TD");
		var n = function() {
			window.localStorage || (window.localStorage = cc.sys.localStorage), window.sessionStorage || (window.sessionStorage = cc.sys.localStorage);
			var e = "BE473430751A40D592545BD383FBFF68",
				t = window.GAME_NAME;
			window.vivo ? (e = "22A0CDC1C6EF48D4A94D692D4C9608DF", t += "vivo") : window.huawei ? (e = "9C56B9035FD04E9295DD7E14E34D43F4", t += "hw") : window.qg ? (e = "43CEC84B44634773AA200A63A6EBEDE1", t += "qg") : window.tt ? (e = "005CD0A061FF494D9C0912A08761E3A4", t += "tt") : window.qq ? (e = "AB1B3E6247584C3FB37328F798060250", t += "qq") : window.ks ? (e = "7A2157DFCCB14C959B65381CDCAF401D", t += "ks") : window.uc ? t += "uc" : window.weixin ? (e = "3B2212FB518045D99430EE004F80B7B1", t += "wx") : t = "test";
			var n = e,
				o = "h5.udrig.com/app/v1",
				i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				a = function(e) {
					var t, n, o = 0,
						a = e.document,
						s = /^(?:text|application)\/javascript/i,
						c = /^(?:text|application)\/xml/i,
						r = "application/json",
						l = "text/html",
						d = /^\s*$/,
						u = function o(i) {
							var a = I({}, i || {});
							for (t in o.settings) void 0 === a[t] && (a[t] = o.settings[t]);
							(_ = a).global && 0 == u.active++ && h(_), a.crossDomain || (a.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(a.url) && RegExp.$2 != e.location.host);
							var p = a.dataType;
							if (i = /=\?/.test(a.url), "jsonp" == p || i) return i || (a.url = w(a.url, "callback=?")), o.JSONP(a);
							a.url || (a.url = e.location.toString()), m(a);
							var y, _ = a.accepts[p],
								S = (i = {}, /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1 : e.location.protocol),
								C = o.settings.xhr();
							for (n in a.crossDomain || (i["X-Requested-With"] = "XMLHttpRequest"), _ && (-1 < (i.Accept = _).indexOf(",") && (_ = _.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(_)), (a.contentType || a.data && "GET" != a.type.toUpperCase()) && (i["Content-Type"] = a.contentType || "application/x-www-form-urlencoded"), a.headers = I(i, a.headers || {}), C.onreadystatechange = function() {
									if (4 == C.readyState) {
										clearTimeout(y);
										var e, t = !1;
										if (200 <= C.status && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == S) {
											p = p || (n = C.getResponseHeader("content-type")) && (n == l ? "html" : n == r ? "json" : s.test(n) ? "script" : c.test(n) && "xml") || "text", e = C.responseText;
											try {
												"script" == p ? (0, eval)(e) : "xml" == p ? e = C.responseXML : "json" == p && (e = d.test(e) ? null : JSON.parse(e))
											} catch (e) {
												t = e
											}
											t ? g(t, "parsererror", C, a) : f(e, C, a)
										} else g(null, "error", C, a)
									}
									var n
								}, i = !("async" in a) || a.async, C.open(a.type, a.url, i), a.headers) C.setRequestHeader(n, a.headers[n]);
							return !1 === function(e, t) {
								var n = t.context;
								if (!1 === t.beforeSend.call(n, e, t) || !1 === h(t)) return !1;
								h(t)
							}(C, a) ? (C.abort(), !1) : (0 < a.timeout && (y = setTimeout(function() {
								C.onreadystatechange = v, C.abort(), g(null, "timeout", C, a)
							}, a.timeout)), /* C.send(a.data || null), */ C)
						};

					function h(e) {
						if (e.global) return !0
					}

					function f(e, t, n) {
						var o = n.context,
							i = "success";
						n.success.call(o, e, i, t), h(n), p(i, t, n)
					}

					function g(e, t, n, o) {
						var i = o.context;
						o.error.call(i, n, t, e), h(o), p(t, n, o)
					}

					function p(e, t, n) {
						var o = n.context;
						n.complete.call(o, t, e), h(n), (n = n).global && !--u.active && h(n)
					}

					function v() {}

					function w(e, t) {
						return (e + "&" + t).replace(/[&?]{1,2}/, "?")
					}

					function m(e) {
						var t, n;
						"object" === i(e.data) && (e.data = (t = e.data, (n = []).add = function(e, t) {
							this.push(y(e) + "=" + y(t))
						}, function e(t, n, o, a) {
							var s = "array" == typeof n;
							for (var c in n) {
								var r = n[c];
								a && (c = o ? a : a + "[" + (s ? "" : c) + "]"), !a && s ? t.add(r.name, r.value) : (o ? "array" == typeof r : "object" === (void 0 === r ? "undefined" : i(r))) ? e(t, r, o, c) : t.add(c, r)
							}
						}(n, t, void 0), n.join("&").replace("%20", "+"))), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data))
					}
					u.active = 0, u.JSONP = function(t) {
						if (!("type" in t)) return u(t);
						var n, i = "jsonp" + ++o,
							s = a.createElement("script"),
							c = {
								abort: function() {
									i in e && (e[i] = v), p("abort", c, t)
								}
							},
							r = a.getElementsByTagName("head")[0] || a.documentElement;
						return t.error && (s.onerror = function() {
							c.abort(), t.error()
						}), e[i] = function(o) {
							clearTimeout(n), delete e[i], f(o, c, t)
						}, m(t), s.src = t.url.replace(/=\?/, "=" + i), r.insertBefore(s, r.firstChild), 0 < t.timeout && (n = setTimeout(function() {
							c.abort(), p("timeout", c, t)
						}, t.timeout)), c
					}, u.settings = {
						type: "GET",
						beforeSend: v,
						success: v,
						error: v,
						complete: v,
						context: null,
						global: !0,
						xhr: function() {
							return new e.XMLHttpRequest
						},
						accepts: {
							script: "text/javascript, application/javascript",
							json: r,
							xml: "application/xml, text/xml",
							html: l,
							text: "text/plain"
						},
						crossDomain: !1,
						timeout: 0
					}, u.get = function(e, t) {
						return u({
							url: e,
							success: t
						})
					}, u.post = function(e, t, n, o) {
						return "function" == typeof t && (o = o || n, n = t, t = null), u({
							type: "POST",
							url: e,
							data: t,
							success: n,
							dataType: o
						})
					}, u.getJSON = function(e, t) {
						return u({
							url: e,
							success: t,
							dataType: "json"
						})
					};
					var y = encodeURIComponent;

					function I(e) {
						return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
							for (t in n) void 0 !== n[t] && (e[t] = n[t])
						}), e
					}
					return {
						ajax: u
					}
				}(window),
				s = {
					deviceId: "",
					appkey: n || "",
					appProfile: {
						versionName: "",
						versionCode: "",
						initTime: "",
						sdkVersion: "H5+APP+v1.0.6",
						partner: ""
					},
					deviceProfile: {
						pixel: "",
						language: navigator.language,
						timezone: (new Date).getTimezoneOffset() / 60 * -1
					},
					msgs: []
				},
				c = {
					type: 2,
					data: {
						id: "",
						start: 0,
						duration: 0
					}
				},
				r = {
					autoTrack: !0
				};
			! function() {
				for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
					var n = e[t].getAttribute("td-autoTrack");
					if ("false" === n || !1 === n) {
						r.autoTrack = !1;
						break
					}
				}
			}();
			var l = (new Date).getTime();

			function d(e, t, n) {
				if (void 0 === t) {
					var o = null;
					if (document.cookie && "" != document.cookie)
						for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
							var s = i[a];
							if (s.substring(0, e.length + 1) == e + "=") {
								o = decodeURIComponent(s.substring(e.length + 1));
								break
							}
						}
					return o
				}
				n = n || {}, null === t && (t = "", n.expires = -1);
				var c = "";
				n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (l = new Date).setTime(l.getTime() + 864e5 * n.expires) : l = n.expires, c = "; expires=" + l.toUTCString());
				var r = n.path ? "; path=" + n.path : "",
					l = n.domain ? "; domain=" + n.domain : "";
				n = n.secure ? "; secure" : "", document.cookie = [e, "=", encodeURIComponent(t), c, r, l, n].join("")
			}
			r.localStorage = {
				add: function(e, t) {
					this.addLocalStorage(e, t), "sessionId" != e && this.addCookie(e, t)
				},
				get: function(e) {
					return this.getLocalStorage(e) || this._getCookie(e)
				},
				create: function() {
					d("__TD_LOCAL") || (this._addCookie(""), window.localStorage)
				},
				addCookie: function(e, t) {
					if (!window.localStorage) {
						this.create();
						var n = this.cookieList();
						n[e] = t;
						var o, i = [];
						for (o in n) i.push(o + "=" + n[o]);
						this._addCookie(i.join(";"))
					}
				},
				_setCookie: function() {
					this.cookieList(), d("__TD_LOCAL", "", {
						expires: 1095,
						path: "/",
						domain: location.hostname
					})
				},
				_addCookie: function(e) {
					d("__TD_LOCAL", e, {
						expires: 1095,
						path: "/",
						domain: location.hostname
					})
				},
				_getCookie: function(e) {
					var t = this.cookieList();
					if (t && t[e]) return t[e]
				},
				delCookie: function() {},
				cookieList: function() {
					var e = d("__TD_LOCAL");
					return this.format(e)
				},
				addLocalStorage: function(e, t) {
					window.localStorage && ("sessionId" == e && window.sessionStorage ? sessionStorage.setItem("__TD_" + e, t) : localStorage["__TD_" + e] = t)
				},
				delLocalStorage: function(e) {
					window.localStorage && localStorage.removeItem("__TD_" + e)
				},
				getLocalStorage: function(e) {
					if (window.localStorage) return "sessionId" == e && window.sessionStorage ? sessionStorage.getItem("__TD_" + e) : localStorage["__TD_" + e]
				},
				format: function(e) {
					var t = {};
					if (!e) return t;
					for (var n = e.split(";"), o = n.length, i = 0; i < o; i++) {
						var a = n[i].split("=");
						2 == a.length && (t[a[0]] = a[1])
					}
					return t
				}
			}, r.sessionStorage = {
				add: function(e, t) {
					window.sessionStorage && sessionStorage.setItem("__TD_" + e, t)
				},
				get: function(e) {
					return sessionStorage.getItem("__TD_" + e)
				},
				remove: function(e) {
					sessionStorage.removeItem("__TD_" + e)
				}
			};
			var u, h, f, g, p, v = !0,
				w = !1;

			function m() {
				this.url = o, this.opts = {}, this.requestArray = new Array
			}
			m.prototype = {
				getAjax: function(e, t, n, o, i) {
					(function(s) {
						var c, r;
						0 < navigator.userAgent.indexOf("MSIE 9.0") ? "MSIE6.0" == (c = navigator.appVersion.split(";")[1].replace(/[ ]/g, "")) || "MSIE7.0" == c ? alert("no support IE6,IE7") : window.XDomainRequest && ((r = new XDomainRequest) ? (s.error && "function" == typeof s.error && (r.onerror = function() {
							s.error()
						}), s.timeout && "function" == typeof s.timeout && (r.ontimeout = function() {
							s.timeout()
						}), s.success && "function" == typeof s.success && (r.onload = function() {
							s.dataType ? "json" == s.dataType.toLowerCase() && s.success(JSON.parse(r.responseText)) : s.success(r.responseText)
						}), r.open(s.type, s.url), r.send(s.param)) : alert("Failed to create XDomainRequest")) : v ? (y.add("td-unique", "true"), v = !1, u = a.ajax({
							type: e,
							url: t,
							data: JSON.stringify(n),
							dataType: "text",
							success: o,
							error: i,
							complete: function() {
								v = !(u = void 0), w && (_.getAjax(), w = !1), y.delLocalStorage("td-unique")
							}
						})) : w = !0
					})({
						url: this.url,
						type: "POST",
						param: JSON.stringify(n),
						success: o
					})
				},
				set: function(e, t, n) {
					this.opts = e, this.send(t, n)
				},
				send: function(e, t) {
					this.getAjax("post", this.url, this.opts, e, t)
				}
			}, (h = window).TDBASE = h.TDBASE || {}, TDBASE.cacheName = "cacheList", TDBASE.unique = function(e) {
				e.sort();
				for (var t = [e[0]], n = 1; n < e.length; n++) e[n] !== t[t.length - 1] && t.push(e[n]);
				return t
			}, TDBASE.getArgs = function() {
				for (var e = new Object, t = h.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
					var o, i = t[n].indexOf("="); - 1 != i && (o = t[n].substring(0, i), i = t[n].substring(i + 1), i = decodeURIComponent(i), e[o] = i)
				}
				return e
			}, TDBASE.getCommon = function(e) {
				var t = y.get("appkey") ? y.get("appkey") : s.appkey;
				return e = {
					deviceId: s.deviceId,
					appkey: t,
					appProfile: s.appProfile,
					deviceProfile: s.deviceProfile,
					msgs: e.msg
				}, s.appContext && (e.appContext = s.appContext), e
			}, TDBASE.getCommonMsg = function(e, t, n, o, i, a) {
				return {
					type: 2,
					data: {
						id: e,
						start: t,
						status: n,
						duration: o || 0,
						pages: a ? [a] : [],
						events: i || []
					}
				}
			}, TDBASE.addSessionStart = function(e, t) {
				y.add("lastSession", JSON.stringify({
					id: c.data.id,
					start: c.data.start
				})), n = (n = y.get("td-hold-event")) && JSON.parse(n);
				var n = TDBASE.getCommonMsg(c.data.id, c.data.start, t, e, n);
				TDBASE.addMsg(n), y.delLocalStorage("td-hold-event")
			}, TDBASE.equal = function(e, t) {
				if ((void 0 === e ? "undefined" : i(e)) != (void 0 === t ? "undefined" : i(t))) return !1;
				if (i(e.length) != i(t.length)) return !1;
				var n = !0,
					o = [],
					a = [];
				for (s in e) "count" === s || "start" === s || o.push(s);
				for (s in t) "count" === s || "start" === s || a.push(s);
				if (o.length != a.length) return !1;
				for (var s = 0, c = a.length; s < c; s++) o.push(a[s]);
				var r = TDBASE.unique(o);
				for (s = 0, c = r.length; s < c; s++) {
					if (!(r[s] in e && r[s] in t)) return !1;
					if ("object" == i(e[r[s]]) && "object" == i(t[r[s]])) n = TDBASE.equal(e[r[s]], t[r[s]]);
					else if (e[r[s]] !== t[r[s]]) return !1
				}
				return n
			}, TDBASE.addGenre = function(e, t, n) {
				if (y.get("sessionMsg")) {
					n && n(e);
					var o = (n = JSON.parse(y.get("sessionMsg"))).msg[n.msg.length - 1].data[t];
					if ("events" !== t) o.push(e), y.add("sessionMsg", JSON.stringify(n));
					else {
						if (0 != o.length) {
							for (var i = !1, a = 0; a < o.length; a++)
								if (TDBASE.equal(o[a], e)) {
									i = !0, o[a].count += 1, o[a].start = e.start;
									break
								} i || o.push(e)
						} else o.push(e);
						y.add("sessionMsg", JSON.stringify(n))
					}
				}
			}, TDBASE.lealSet = function(e) {
				y.add("leavetime", e), y.add("leaveSession", parseInt((e - I.get("SessionStart")) / 1e3))
			}, TDBASE.addMsg = function(e) {
				var t;
				y.get("sessionMsg") ? ((t = JSON.parse(y.get("sessionMsg"))).msg.push(e), y.add("sessionMsg", JSON.stringify(t))) : y.add("sessionMsg", JSON.stringify({
					msg: [e]
				}))
			}, (f = {
				currentPage: null,
				pageStartTime: 0,
				ref: "",
				logoutCalled: !1,
				init: function() {
					setTimeout(function() {
						f.pageLogout()
					}, 5e3), window.TDAPP = window.TDAPP || {}, window.TDAPP.onPage = f.onPage, r.autoTrack && (f.currentPage = window.location.href, f.ref = document.referrer)
				},
				onPage: function(e) {
					var t = (new Date).getTime();
					f.pageLogout("force"), f.pageEnter(e, f.currentPage, t), f.ref = f.currentPage, f.currentPage = e, f.pageStartTime = t, _.getAjax()
				},
				pageEnter: function(e, t, n) {
					t = {
						name: e,
						start: n,
						duration: 0,
						refer: t || document.referrer
					}, TDBASE.addGenre(t, "pages")
				},
				pageLogout: function(e) {
					if ("force" !== e) {
						if (f.logoutCalled) return;
						f.logoutCalled = !0
					}
					var t = null,
						n = 0,
						o = null;
					if (r.autoTrack) t = f.currentPage || window.location.href, n = f.pageStartTime || l, o = f.ref || document.referrer;
					else {
						if (!f.currentPage) return;
						t = f.currentPage, n = f.pageStartTime, o = f.ref || document.referrer
					}
					e = (new Date).getTime(), TDBASE.lealSet(e), TDBASE.addGenre({
						name: t,
						start: n,
						duration: 6,
						refer: o
					}, "pages")
				}
			}).init(), g = {
				init: function() {
					try {
						var e = r.localStorage.get("profile");
						e && (e = JSON.parse(e), e = g._transform(e), s.appContext = s.appContext || {}, s.appContext.account = e)
					} catch (e) {
						console.error(e)
					}
				},
				_transform: function(e) {
					return (e = JSON.parse(JSON.stringify(e))).accountId = e.profileId, e.type = e.profileType, delete e.profileType, delete e.profileId, e
				},
				_transformInverse: function(e) {
					return (e = JSON.parse(JSON.stringify(e))).profileId = e.accountId, e.profileType = e.type, delete e.type, delete e.accountId, e
				},
				login: function(e) {
					g._event(e, "login")
				},
				register: function(e) {
					g._event(e, "register")
				},
				updateProfile: function(e) {
					g._event(e, "update")
				},
				_chekProfile: function() {
					return "object" === i(s.appContext) && "object" === i(s.appContext.account) ? s.appContext.account : null
				},
				_event: function(e, t) {
					if (!e || "object" !== (void 0 === e ? "undefined" : i(e))) return console.log("profile\u6dc7\u2103\u4f05\u8e47\u546d\uff5e!");
					if ("update" !== t && !e.profileId && !/0{1}/.test(e.profileId)) return console.log("profileId \u6dc7\u2103\u4f05\u6d93\u54c4\u7e40\u6fc9\ufffd!");
					if ("update" !== t && "number" != typeof e.profileType) return console.log("profileType \u6d93\u54c4\u7e40\u6fc9\ufffd!");
					var n, o = g._getProfile(e, t),
						a = {
							profileId: "_setId",
							profileType: "_setProfileType",
							name: "_setName",
							gender: "_setGender",
							age: "_setAge"
						},
						c = new RegExp("^property[1-9]$");
					for (n in e) {
						var l, d = e[n],
							u = a[n];
						if (!u || "update" === t && "profileId" === n) {
							if ((c.test(n) || "property10" === n) && (l = g._setProperty(o, n, d))) return void console.log(l)
						} else if (l = g[u](o, d)) return void console.log(l)
					}
					s.appContext = s.appContext || {}, s.appContext.account = o;
					var h = g._transformInverse(o);
					r.localStorage.add("profile", JSON.stringify(h)), o = g._transform(o), h = g._transform(e), S.setProfile(h, t)
				},
				_getProfile: function(e, t) {
					var n = {};
					return s.appContext && s.appContext.account && (n = JSON.parse(JSON.stringify(s.appContext.account))), "update" == t || e.profileId === n.accountId ? n : {}
				},
				_setId: function(e, t) {
					if (!t && !/0{1}/.test(t)) return "profileId\u6d93\u54c4\u7e40\u6fc9\ue0a2\u74e7\u5a08\u7889\u7d12";
					e.accountId = t
				},
				_setProfileType: function(e, t) {
					if ("number" != typeof t || t != t || t < -1 || 6 < t && t < 11 || 20 < t) return "\u7487\u8702\u7b02\u6d7c\u72b3\ue11c\u7ead\ue1be\u6b91profileType";
					e.type = t
				},
				_setName: function(e, t) {
					if ("string" != typeof t) return "profile name \u7eeb\u8bf2\u7037\u95bf\u6b12\ue1e4";
					e.name = t
				},
				_setAge: function(e, t) {
					if ("number" != typeof t || t != t) return "profile age \u7eeb\u8bf2\u7037\u95bf\u6b12\ue1e4";
					e.age = t
				},
				_setGender: function(e, t) {
					if (0 !== t && 1 !== t & 2 !== t) return "profile gender \u7eeb\u8bf2\u7037\u95bf\u6b12\ue1e4";
					e.gender = t
				},
				_setProperty: function(e, t, n) {
					if ("number" == typeof n && n != n || "string" != typeof n && "number" != typeof n) return "profile property \u7eeb\u8bf2\u7037\u95bf\u6b12\ue1e4";
					e[t] = n
				}
			}, window.TDAPP = window.TDAPP || {}, window.TDAPP.login = g.login, window.TDAPP.register = g.register, window.TDAPP.updateProfile = g.updateProfile, window.TDAPP.ProfileType = {
				0: "ANONYMOUS",
				1: "REGISTERED",
				2: "SINA_WEIBO",
				3: "QQ",
				4: "QQ_WEIBO",
				5: "ND91",
				6: "WEIXIN",
				11: "TYPE1",
				12: "TYPE2",
				13: "TYPE3",
				14: "TYPE4",
				15: "TYPE5",
				16: "TYPE6",
				17: "TYPE7",
				18: "TYPE8",
				19: "TYPE9",
				20: "TYPE10"
			}, g.init(), p = {
				isObject: function(e) {
					return e && "object" === (void 0 === e ? "undefined" : i(e))
				},
				isStrNotEmpty: function(e) {
					return e || /0{1}/.test(e)
				},
				isNumber: function(e) {
					return "number" == typeof e && e == e
				},
				isCurrencyTypeAvailabal: function(e) {
					return e && "string" == typeof e && 3 === e.length
				},
				_checkParam: function(e) {
					return p.isObject(e) ? p.isStrNotEmpty(e.orderId) ? p.isNumber(e.amount) ? !!p.isCurrencyTypeAvailabal(e.currencyType) || (console.warn("\u7487\u75af\u7ded\u934f\u30e6\ue11c\u7ead\ue1be\u6b91currencyType!"), !1) : (console.warn("\u7487\u75af\u7ded\u934f\u30e6\ue11c\u7ead\ue1be\u6b91amount!"), !1) : (console.warn("\u7487\u75af\u7ded\u934f\u30e6\ue11c\u7ead\ue1be\u6b91orderId!"), !1) : (console.warn("\u7487\u75af\u7ded\u934f\u30e6\ue11c\u7ead\ue1be\u6b91\u9359\u509b\u669f!"), !1)
				},
				onPlaceOrder: function(e) {
					p._checkParam(e) && (e = {
						count: 1,
						start: (new Date).getTime(),
						domain: "iap",
						id: "placeOrder",
						params: e
					}, S._saveAndFetch(e))
				},
				onOrderPaySucc: function(e) {
					p._checkParam(e) && ((e = JSON.parse(JSON.stringify(e))).paymentType && p.isStrNotEmpty(e.paymentType) && (e.payType = e.paymentType), delete e.paymentType, e = {
						count: 1,
						start: (new Date).getTime(),
						domain: "iap",
						id: "pay",
						params: e
					}, S._saveAndFetch(e))
				},
				onCancelOrder: function(e) {
					p._checkParam(e) && (e = {
						count: 1,
						start: (new Date).getTime(),
						domain: "iap",
						id: "cancelOrder",
						params: e
					}, S._saveAndFetch(e))
				}
			}, window.TDAPP = window.TDAPP || {}, window.TDAPP.onPlaceOrder = p.onPlaceOrder, window.TDAPP.onOrderPaySucc = p.onOrderPaySucc, window.TDAPP.onCancelOrder = p.onCancelOrder;
			var y = r.localStorage,
				I = r.sessionStorage,
				_ = {
					timedif: void 0,
					state: 1,
					deviceId: 0,
					sessionId: 0,
					local: [],
					sendInit: 0,
					set: function() {
						try {
							this.setDeviceId(), this.setSession(), this.setSessionTime(), this.setInitTime(), this.setPartner(), this.setResolution(), this.addlastSession(), this.setPageEnter(), this.getAjax(1)
						} catch (e) {
							console.log(e)
						}
					},
					setDeviceId: function() {
						if (cc.sys.localStorage.getItem("_TD_deviceId")) this.deviceId = cc.sys.localStorage.getItem("_TD_deviceId");
						else {
							this.sendInit = 1;
							for (var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), t = [], n = e.length, o = 0; o < 16; o++) t[o] = e[0 | Math.random() * n];
							this.deviceId = t.join(""), cc.sys.localStorage.setItem("_TD_deviceId", this.deviceId)
						}
						s.deviceId = this.deviceId
					},
					setSession: function() {
						var e, t;
						if (I.get("sessionId") && y.get("appkey") == s.appkey ? t = I.get("sessionId") : (e = (new Date).getTime(), t = -1 < this.deviceId.indexOf("-") ? this.deviceId.split("-")[0] + e : this.deviceId + e, this.sendInit = 0 == this.sendInit ? 2 : this.sendInit, I.add("sessionId", t)), 0 < 32 - t.length)
							for (var n = 0, o = 32 - t.length; n < o; n++) t += "0";
						32 - t.length < 0 && (t = t.substring(0, 32)), c.data.id = this.sessionId = t
					},
					setSessionTime: function() {
						var e = (new Date).getTime();
						I.get("SessionStart") && y.get("appkey") == s.appkey ? e = I.get("SessionStart") : I.add("SessionStart", e), c.data.start = parseInt(e)
					},
					setInitTime: function() {
						y.get("initTime") ? s.appProfile.initTime = parseInt(y.get("initTime")) : (s.appProfile.initTime = l, y.add("initTime", l))
					},
					setPartner: function() {
						var e = I.get("td_channel"),
							n = t;
						e ? s.appProfile.partner = e : null != n && (I.add("td_channel", n), s.appProfile.partner = n)
					},
					setResolution: function() {
						var e = [window.screen.width, window.screen.height];
						window.devicePixelRatio && e.push(window.devicePixelRatio), s.deviceProfile.pixel = e.join("*")
					},
					addlastSession: function() {
						var e = y.get("lastSession");
						void 0 === e && (y.delLocalStorage("sessionMsg"), y.delLocalStorage("lastSession")), e ? (e = JSON.parse(e)).id != c.data.id && (e = TDBASE.getCommonMsg(e.id, e.start, 3, parseInt(y.get("leaveSession"))), TDBASE.addMsg(e), this.timedif = parseInt((c.data.start - y.get("leavetime")) / 1e3), y.get("appkey") && y.get("appkey") != s.appkey || (TDBASE.addSessionStart(this.timedif, 1), this.addAppInitEvent())) : (TDBASE.addSessionStart(0, 1), this.addAppInitEvent())
					},
					setPageEnter: function() {
						var e;
						r.autoTrack && (e = {
							name: "localhost:1111/",
							start: (new Date).getTime(),
							duration: 6,
							refer: "localhost:1111/"
						}, TDBASE.addGenre(e, "pages"))
					},
					addAppInitEvent: function() {
						var e;
						0 != this.sendInit && (e = {
							id: "init",
							domain: "app",
							start: l || (new Date).getTime(),
							count: 1,
							params: {
								first: !0
							}
						}, 2 == this.sendInit && (e.params.first = !1), TDBASE.addGenre(e, "events"))
					},
					getAjax: function() {
						var e = this,
							t = new m;
						localStorage.__TD_sessionMsg || TDBASE.addSessionStart(0, 2);
						var n, o = JSON.parse(y.get("sessionMsg")),
							i = TDBASE.getCommon(o),
							a = localStorage["__TD_td-init-event"];
						!a || (n = i.msgs[i.msgs.length - 1]) && (o = n.data.events, n.data.events = o.concat(JSON.parse(a))), y.delLocalStorage("td-init-event");
						for (var c = [], r = 0; r < i.msgs.length; r++) {
							var d = i.msgs[r];
							(2 !== d.data.status || d.data.pages && 0 !== d.data.pages.length || d.data.events && 0 !== d.data.events.length) && c.push(d)
						}
						0 !== c.length && (i.msgs = c, y.get("appkey") && y.get("appkey") != s.appkey ? t.set(i, function() {
							y.delLocalStorage("sessionMsg"), s.appProfile.initTime = l, y.add("initTime", l), TDBASE.addSessionStart(0, 1), e.addAppInitEvent(), e.getAjax()
						}, function(e) {
							console.log(e)
						}) : t.set(i, function() {
							y.delLocalStorage("sessionMsg"), TDBASE.addSessionStart(0, 2)
						}, function(e) {
							console.log(e)
						}), y.add("appkey", s.appkey))
					}
				};
			_.set();
			var S = {
				set: function(e, t, n, o) {
					var a;
					if (e || /0{1}/.test(e)) {
						if (0 < arguments.length) try {
							var s = {
								count: 1,
								start: (new Date).getTime()
							};
							if (null != e && (s.id = "string" != typeof e ? JSON.stringify(e) : e), s.label = null != t ? "string" != typeof t ? JSON.stringify(t) : t : "", null != n && ("object" != (void 0 === (a = n) ? "undefined" : i(a)) || "[object object]" != Object.prototype.toString.call(a).toLowerCase() || a.length || (s.params = n)), o && "smart" === o) s.type = "smart";
							else if (void 0 !== o) {
								if ("number" != typeof o || isNaN(o)) return void console.error("value\u9359\ue047\u5158\u6d93\u7c04umber");
								s.value = o
							}
							S._saveAndFetch(s)
						} catch (e) {}
					} else console.warn("event  Id\u6d93\u54c4\u7e40\u6fc9\ue0a2\u74e7\u5a08\u7889\u7d12")
				},
				setProfile: function(e, t) {
					e = {
						count: 1,
						start: (new Date).getTime(),
						domain: "account",
						id: t,
						params: e
					}, S._saveAndFetch(e)
				},
				_saveAndFetch: function(e) {
					u ? TDBASE.addGenre(e, "events", function(e) {
						var t = y.get("td-hold-event"),
							n = [];
						if (n.push(e), t) {
							t = JSON.parse(t);
							for (var o = 0; o < t.length; o++)
								if (TDBASE.equal(t[o], e)) {
									t[o].count += 1, t[o].start = e.start;
									break
								} y.add("td-hold-event", JSON.stringify(t))
						} else y.add("td-hold-event", JSON.stringify(n))
					}) : (TDBASE.addGenre(e, "events"), setTimeout(function() {
						_.getAjax()
					}, 500))
				},
				unload: function() {
					try {
						_.getAjax()
					} catch (e) {}
				}
			};
			window.TDAPP = window.TDAPP || {}, window.TDAPP.onEvent = S.set
		};
		setTimeout(function() {
			n()
		}, 100), setTimeout(function() {
			n()
		}, 4e3), cc._RF.pop()
	}, {}],
	TTGameConfig: [function(e, t) {
		"use strict";
		cc._RF.push(t, "dda69hLrJBNd4sq0Hm5T3DU", "TTGameConfig"), window.locationList = "", window.openRandShare = 0, window.closeBtnScale = 1, window.pushBoxgl = 0, window.kaiguan = !1, window.celve = {
			auto_chaping: 0,
			oppomoban: 50,
			time_chaping: 0,
			time_banner: 0,
			time_xitongcp: 0,
			overcount: 0,
			overgaiLv: 0,
			pausecount: 0,
			pausegaiLv: 0,
			inGamecount: 0,
			inGamegaiLv: 0,
			othercount: 0,
			othergaiLv: 0,
			xitongcount: 0,
			xitonggaiLv: 0,
			apk_time: 0
		}, window.openFlag = function(e) {
			null != e.openRandShare && (openRandShare = e.openRandShare), null != e.closeBtnScale && (closeBtnScale = e.closeBtnScale), null != e.pushBoxgl && (pushBoxgl = e.pushBoxgl), null != e.kaiguan && (kaiguan = e.kaiguan), null != e.celve && (celve = e.celve), null != e.ext && (ext = e.ext), window.tt && TouTiaoTools.sceneTrue() && ext.kaiping && 100 * Math.random() < ext.kaiping && TouTiaoTools.getVideoAd(function() {}), SDK.APK_SHOWAD(), SDK.autuShowChaping(), window.qq && qqUtil.sceneTrue() && ext.kaiping && 100 * Math.random() < ext.kaiping && SDK.shipin(function() {}), window.ks && KsUtil.sceneTrue() && ext.kaiping && 100 * Math.random() < ext.kaiping && SDK.shipin(function() {}), window.vivo && ext.kaiping && 100 * Math.random() < ext.kaiping && SDK.shipin(function() {}), !window.qg || window.vivo || window.huawei || ext.kaiping && 100 * Math.random() < ext.kaiping && SDK.shipin(function() {}), window.huawei && (ext.kaiping && 100 * Math.random() < ext.kaiping && SDK.shipin(function() {}), ext.shipinID && (hwUtil.shipinID = ext.shipinID, ext.bannerID && (hwUtil.bannerID = ext.bannerID), ext.yuanshengID1 && (hwUtil.yuanshengID1 = ext.yuanshengID1), hwUtil.ADInit())), window.weixin && (ext.wx_bannerID && (wxUtil.wx_bannerID = ext.wx_bannerID), ext.wx_videoID && (wxUtil.wx_videoID = ext.wx_videoID), ext.wx_chapingID && (wxUtil.wx_chapingID = ext.wx_chapingID), ext.wx_juzhenID && (wxUtil.wx_juzhenID = ext.wx_juzhenID))
		}, window.shengfenpingbi = function() {
			for (var e = 0; e < window.locationList.length; e++)
				if (-1 != window.myLocation.indexOf(window.locationList[e])) return !0;
			return !1
		}, window.loadLLab = function() {
			var e = new XMLHttpRequest;
			e.onreadystatechange = function() {
				if (4 == e.readyState && e.status >= 200 && e.status < 400) {
					var t = e.responseText,
						n = {};
					n.data = "string" == typeof t ? JSON.parse(t) : t, window.locationList = n.data.locationList, console.log("res.data.locationList = " + window.locationList), 1 == window.shengfenpingbi() || openFlag(n.data)
				}
			}, e.open("GET", window.llaburl, !0), e.send()
		}, window.myLocation = "", window.getMyLocation = function() {
			var e = new XMLHttpRequest;
			e.onreadystatechange = function() {
				if (4 == e.readyState && e.status >= 200 && e.status < 400) {
					var t = e.responseText,
						n = {};
					try {
						"string" == typeof t ? (console.log(t), n.data = JSON.parse(t)) : n.data = t
					} catch (o) {}
					n.data ? (myLocation = n.data.cityCode + "," + n.data.proCode, console.log(myLocation), loadLLab()) : (loadLLab(), console.log("get city error"))
				}
			}, e.open("GET", "whois.pconline.com.cn/ipJson.jsp?json=true", !0), e.send()
		}, window.getlabel = function() {
			(window.tt || window.qg || window.qq || window.weixin || window.ks) && (window.tt ? tt.getSystemInfo({
				success: function(e) {
					console.log(e), "ios" == e.platform ? (myLocation = "ios", loadLLab()) : window.getMyLocation()
				},
				fail: function() {
					window.getMyLocation()
				}
			}) : window.getMyLocation())
		}, setTimeout(function() {
			window.getlabel()
		}, 1), cc._RF.pop()
	}, {}],
	TouTiaoTools: [function(e, t) {
		"use strict";
		cc._RF.push(t, "85fe1SLKFZA6IcJRxvm1YQ0", "TouTiaoTools"), window.TouTiaoTools = {
			videoCallback: null,
			videoAd: null,
			sceneTrue: function() {
				if (!ext.sceneID) return !1;
				var e = tt.getLaunchOptionsSync().scene;
				if (ext.sceneID)
					for (var t = ext.sceneID, n = 0; n < t.length; n++)
						if (e == t[n]) return !0;
				return !1
			},
			getVideoAd: function(e) {
				tt.createRewardedVideoAd ? (TouTiaoTools.videoCallback = e, TouTiaoTools.videoAd.show().then(function() {
					return console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
				}).catch(function() {
					TouTiaoTools.videoAd.load().then(function() {
						return TouTiaoTools.videoAd.show()
					}).catch(function() {
						tt.showToast({
							title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
							icon: "none",
							duration: 1e3,
							success: function(e) {
								console.log("" + e)
							},
							fail: function() {
								console.log("showToast\u8c03\u7528\u5931\u8d25")
							}
						})
					})
				})) : e()
			},
			showBanner: function() {
				kaiguan && (TouTiaoTools.GAME_QQ_BANNER ? TouTiaoTools.GAME_QQ_BANNER.show() : (TouTiaoTools.GAME_QQ_BANNER = tt.createBannerAd({
					adUnitId: ttConfig.bannerID,
					style: {
						left: (tt.getSystemInfoSync().windowWidth - 200) / 2,
						top: tt.getSystemInfoSync().windowHeight - 200,
						width: 200
					},
					adIntervals: 30
				}), TouTiaoTools.GAME_QQ_BANNER.onResize(function(e) {
					TouTiaoTools.GAME_QQ_BANNER.style.top = tt.getSystemInfoSync().windowHeight - e.height, TouTiaoTools.GAME_QQ_BANNER.style.left = (tt.getSystemInfoSync().windowWidth - e.width) / 2
				}), TouTiaoTools.GAME_QQ_BANNER.onError(function() {}), TouTiaoTools.GAME_QQ_BANNER.show()))
			},
			hideBanner: function() {
				TouTiaoTools.sceneTrue() || TouTiaoTools.GAME_QQ_BANNER && TouTiaoTools.GAME_QQ_BANNER.hide()
			},
			share_successF: null,
			share_failF: null,
			GAME_SHARE_NOW: !1,
			share_startTime: 0,
			share_MaxTime: 0,
			Game_InScene: !1,
			GAME_QQ_BANNER: null,
			luzhiState: 1,
			GAME_CESHI_BANNER: null,
			recorder: null,
			recorderEndCB: null,
			initQQShow: function() {
				TouTiaoTools.recorder = tt.getGameRecorderManager(), TouTiaoTools.recorder.onStop(function(e) {
					console.log("\u5f55\u5c4f\u7ed3\u675f\uff1a" + e.videoPath), TouTiaoTools.endTime - TouTiaoTools.startTime <= 4e3 ? (TouTiaoTools.videoPath = "", TouTiaoTools.overvideo = !1, TouTiaoTools.recorderEndCB && (TouTiaoTools.recorderEndCB(!1), TouTiaoTools.recorderEndCB = null)) : (TouTiaoTools.recorderEndCB && (TouTiaoTools.recorderEndCB(!0), TouTiaoTools.recorderEndCB = null), TouTiaoTools.videoPath = e.videoPath, TouTiaoTools.overvideo = !0)
				}), tt.createRewardedVideoAd && (TouTiaoTools.videoAd = tt.createRewardedVideoAd({
					adUnitId: ttConfig.videoID
				}), TouTiaoTools.videoAd.load(), TouTiaoTools.videoAd.onClose(function(e) {
					1 == e.isEnded ? TouTiaoTools.AdSuccess() : tt.showToast({
						title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
						icon: "none",
						duration: 1e3,
						success: function(e) {
							console.log("" + e)
						},
						fail: function() {
							console.log("showToast\u8c03\u7528\u5931\u8d25")
						}
					})
				})), tt.showFavoriteGuide({
					type: "bar",
					content: "\u4e00\u952e\u6dfb\u52a0\u5230\u6211\u7684\u5c0f\u7a0b\u5e8f",
					position: "bottom",
					success: function() {
						console.log("\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u6210\u529f")
					},
					fail: function() {
						console.log("\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u5931\u8d25")
					}
				})
			},
			interstitialAd: null,
			showChaPing: function() {
				kaiguan && setTimeout(function() {
					TouTiaoTools.showChaPing1()
				}, 100)
			},
			showChaPing1: function() {
				TouTiaoTools.interstitialAd = tt.createInterstitialAd({
					adUnitId: ttConfig.chapingID
				}), TouTiaoTools.interstitialAd.load().then(function() {
					TouTiaoTools.interstitialAd.show().then(function() {
						console.log("-- TT \u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u6210\u529f\uff01")
					}).catch(function(e) {
						console.error("-- TT \u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u5931\u8d25\uff01err =", e)
					})
				}).catch(function(e) {
					console.error("-- TT \u52a0\u8f7d\u63d2\u5c4f\u5e7f\u544a\u5931\u8d25,err =", e)
				}), TouTiaoTools.interstitialAd.onClose(function() {})
			},
			AdSuccess: function() {
				null != TouTiaoTools.videoCallback && (TouTiaoTools.videoCallback(), TouTiaoTools.videoCallback = null)
			},
			startTime: 0,
			endTime: 0,
			luzhiKaishi: function(e) {
				TouTiaoTools.recorderEndCB = e, console.log("luzhikaishi"), TouTiaoTools.recorder.stop(), tt.onShow(function() {
					TouTiaoTools.recorder.resume()
				}), tt.onHide(function() {
					TouTiaoTools.recorder.pause()
				}), TouTiaoTools.recorder.onStart(function() {}), TouTiaoTools.overvideo = !1, setTimeout(TouTiaoTools.startLuzhi, 500)
			},
			startLuzhi: function() {
				console.log("\u5f55\u5c4f\u5f00\u59cb"), TouTiaoTools.recorder.start({
					duration: 3e4
				}), TouTiaoTools.videoPath = "", TouTiaoTools.startTime = (new Date).getTime()
			},
			videoPath: "",
			overvideo: !1,
			GaiLv: function(e) {
				return 1 + Math.floor(100 * Math.random()) <= e
			},
			luzhijieshu: function() {
				console.log("luzhijieshu"), tt.offShow(function() {}), tt.offHide(function() {}), TouTiaoTools.recorder.stop(), TouTiaoTools.endTime = (new Date).getTime()
			},
			fenxiangVideo: function(e, t) {
				if (0 == TouTiaoTools.overvideo || "" == TouTiaoTools.videoPath) return console.log("fenxiang meiyoushipin"), void tt.shareAppMessage({
					success: function() {
						e && e()
					},
					fail: function() {
						t && t()
					}
				});
				tt.shareAppMessage({
					channel: "video",
					title: "\u70b9\u8fd9\u91cc\u5f00\u59cb\u6e38\u620f\uff01",
					extra: {
						videoPath: TouTiaoTools.videoPath,
						videoTopics: ttConfig.fenxianghuati
					},
					success: function() {
						console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f111"), e && e()
					},
					fail: function(e) {
						console.log(e), t && t(), console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25")
					}
				})
			}
		}, window.tt && setTimeout(function() {
			TouTiaoTools.initQQShow()
		}, 1), cc._RF.pop()
	}, {}],
	UCUtil: [function(e, t) {
		"use strict";
		cc._RF.push(t, "681364NIDVAV7X4Wm8A4I5Z", "UCUtil"), window.UCUtil = {
			successCallBack: null,
			failureCallBack: null,
			Video: null,
			Banner: null,
			Interstitial: null,
			init: function() {
				var e = window.uc.getSystemInfoSync();
				if ("string" == typeof e) try {
					e = JSON.parse(e)
				} catch (n) {}
				UCUtil.Video = window.uc.createRewardVideoAd(), UCUtil.Video.load().then(function() {
					console.log("UC \u89c6\u9891\u7ec4\u4ef6\u52a0\u8f7d\u6210\u529f")
				}).catch(function(e) {
					console.log("UC \u89c6\u9891\u52a0\u8f7d\u5931\u8d25:", e), UCUtil.Video = null
				}), UCUtil.Video.onClose(function(e) {
					e && e.isEnded ? (console.log("\u89c6\u9891\u6b63\u5e38\u64ad\u653e\u5b8c\u6bd5"), UCUtil.executeSuccessHandle()) : (UCUtil.executeFailureHandle(), console.log("\u89c6\u9891\u4e2d\u9014\u9000\u51fa"))
				});
				var t = {
					style: {
						width: e.windowWidth,
						height: 200,
						gravity: 7
					}
				};
				UCUtil.Banner = window.uc.createBannerAd(t), UCUtil.Banner.onLoad(function() {
					console.log("UC Banner\u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f")
				}), UCUtil.Interstitial = window.uc.createInterstitialAd(), UCUtil.Interstitial.load().then(function() {
					console.log("UC Interstitial\u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f")
				}).catch(function() {
					console.log("UC Interstitial\u7ec4\u4ef6\u521d\u59cb\u5316\u5931\u8d25"), UCUtil.Interstitial = null
				})
			},
			bannerShow: function() {
				UCUtil.bannerHide(), console.log("\u663e\u793aBanner"), UCUtil.Banner.show()
			},
			bannerHide: function() {
				UCUtil.Banner.hide()
			},
			showChaping: function() {
				setTimeout(function() {
					UCUtil.Interstitial.show()
				}, 100)
			},
			shipin: function(e, t) {
				if (!UCUtil.Video) return console.log("\u7ebf\u4e0b\u7248\u672c\u6216\u89c6\u9891\u7ec4\u4ef6\u5f02\u5e38"), void(e && e());
				UCUtil.successCallBack = e, UCUtil.failureCallBack = t, cc.audioEngine.pauseAll(), cc.director.pause(), UCUtil.Video.show().then(function() {
					console.log("UC \u89c6\u9891\u7ec4\u4ef6\u663e\u793a\u6210\u529f")
				}).catch(function(e) {
					console.error("UC \u89c6\u9891\u7ec4\u4ef6\u663e\u793a\u5931\u8d25:", e), UCUtil.executeFailureHandle()
				})
			},
			executeSuccessHandle: function() {
				cc.audioEngine.resumeAll(), cc.director.resume(), UCUtil.successCallBack && UCUtil.successCallBack(), UCUtil.successCallBack = null
			},
			executeFailureHandle: function() {
				cc.audioEngine.resumeAll(), cc.director.resume(), UCUtil.failureCallBack && UCUtil.failureCallBack(), UCUtil.failureCallBack = null
			}
		}, window.uc && UCUtil.init(), cc._RF.pop()
	}, {}],
	YSButton: [function(e, t) {
		"use strict";
		cc._RF.push(t, "44b32gnFcdHJJS0T5kxW8az", "YSButton"), cc.Class({
			extends: cc.Component,
			properties: {
				zhuomian: cc.Node,
				moreGame: cc.Node,
				shiling: cc.Node
			},
			start: function() {
				if (window.vivo) {
					var e = this;
					this.zhuomian.on(cc.Node.EventType.TOUCH_END, function() {
						e.zhuomian.active = !1, vivoUtil.showzhuomian()
					}), qg.hasShortcutInstalled({
						success: function(t) {
							1 == t && (e.zhuomian.active = !1)
						}
					}), this.moreGame.active = !1, this.shiling.active = !1
				} else if (window.huawei) {
					var t = this;
					this.zhuomian.on(cc.Node.EventType.TOUCH_END, function() {
						t.zhuomian.active = !1, hwUtil.showzhuomian()
					}), qg.hasShortcutInstalled({
						success: function(e) {
							1 == e && (t.zhuomian.active = !1)
						}
					}), ext.zhuomian ? t.zhuomian.active = !0 : t.zhuomian.active = !1, this.moreGame.active = !1, this.shiling.active = !0
				} else if (window.qg) {
					var n = this;
					this.zhuomian.on(cc.Node.EventType.TOUCH_END, function() {
						qg.hasShortcutInstalled({
							success: function(e) {
								0 == e ? qg.installShortcut({
									success: function() {
										n.zhuomian.active = !1
									},
									fail: function() {
										qg.showToast({
											title: "\u521b\u5efa\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5",
											icon: "none",
											duration: 1500
										})
									},
									complete: function() {}
								}) : (n.zhuomian.active = !1, qg.showToast({
									title: "\u684c\u9762\u5df2\u5b58\u5728",
									icon: "none",
									duration: 1500
								}))
							},
							fail: function() {},
							complete: function() {}
						})
					}), qg.hasShortcutInstalled({
						success: function(e) {
							1 == e && (n.zhuomian.active = !1)
						}
					}), this.moreGame.on(cc.Node.EventType.TOUCH_END, function() {
						qgUtil.showPushBox()
					}), this.shiling.active = !0
				} else window.qq ? (this.zhuomian.active = !1, this.moreGame.on(cc.Node.EventType.TOUCH_END, function() {
					qqUtil.gengduoyouxi()
				}), this.shiling.active = !1) : window.tt ? (this.zhuomian.active = !1, "ios" !== tt.getSystemInfoSync().platform || (this.moreGame.active = !1), this.moreGame.on(cc.Node.EventType.TOUCH_END, function() {
					tt.showMoreGamesModal({
						appLaunchOptions: [],
						success: function(e) {
							console.log("success", e.errMsg)
						},
						fail: function(e) {
							console.log("fail", e.errMsg)
						}
					})
				}), this.shiling.active = !1) : (this.zhuomian.active = !1, this.moreGame.active = !1, this.shiling.active = !0)
			},
			update: function() {}
		}), cc._RF.pop()
	}, {}],
	YS: [function(e, t) {
		"use strict";
		cc._RF.push(t, "73532cAJ29BKozl3PptFmPA", "YS"), cc.Class({
			extends: cc.Component,
			properties: {},
			start: function() {},
			setURL: function(e, t, n, o) {
				var i = this;
				this.closeCB = t, this.clickCB = n, cc.loader.load({
					url: e,
					type: "png"
				}, function(e, t) {
					i.node.getChildByName("image").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				}), this.node.getChildByName("close").getChildByName("close").scale = window.closeBtnScale, o && (this.node.getChildByName("image").getChildByName("biaoti").getComponent(cc.Label).string = o.title, this.node.getChildByName("image").getChildByName("laiyuan").getComponent(cc.Label).string = o.source, this.adid = o.adId, this.addd = o.addd, i.node.getChildByName("chakan").active = !0)
			},
			hw_reportAdShow: function() {
				this.addd.reportAdShow({
					adId: this.adid
				})
			},
			close: function() {
				this.closeCB && this.closeCB(), this.node.destroy()
			},
			click: function() {
				this.clickCB && this.clickCB(), this.node.destroy()
			}
		}), setTimeout(function() {
			window.qg && (cc.loader.loadRes("yuansheng/yuansheng_chaping", cc.Prefab, function(e, t) {
				window.yuansheng_chaping = t
			}.bind(void 0)), cc.loader.loadRes("yuansheng/yuansheng_banner", cc.Prefab, function(e, t) {
				window.yuansheng_banner = t
			}.bind(void 0)))
		}, 500), window.yuansheng = {
			createChaping: function(e, t, n, o) {
				var i = cc.instantiate(window.yuansheng_chaping);
				return i.position = cc.v2(0, 0), i.parent = cc.find("Canvas"), i.zIndex = 1e4, i.name = "ysad", i.getComponent("YS").setURL(e, t, n, o), i
			},
			createBanner: function(e, t, n, o) {
				var i = cc.instantiate(window.yuansheng_banner);
				return i.position = cc.v2(0, 0), i.parent = cc.find("Canvas"), i.zIndex = 1e4, i.name = "ysad", i.getComponent("YS").setURL(e, t, n, o), i
			}
		}, window.CreateShareK = function(e) {
			SDK.bannerShow();
			var t = cc.view.getVisibleSize(),
				n = (t.width - 300) / 526,
				o = (cc.v2(t.width / 2, t.height / 2), new cc.Node);
			o.x = .5 * t.width, o.y = .5 * t.height, o.parent = cc.director.getScene(), o.zIndex = 9e3, o.setContentSize(cc.winSize);
			var i = new cc.Node;
			i.parent = o, i.opacity = 150, i.scale = 1e3, cc.loader.loadRes("yuansheng/image/mask", cc.SpriteFrame, function(e, t) {
				i.addComponent(cc.Sprite).spriteFrame = t
			}), i.on("touchend", function() {});
			var a = new cc.Node;
			a.parent = o, a.x = 0, a.y = 0, a.scale = n, cc.loader.loadRes("yuansheng/image/share", cc.SpriteFrame, function(e, t) {
				a.addComponent(cc.Sprite).spriteFrame = t
			});
			var s = new cc.Node;
			s.parent = o, s.x = 0, s.scale = n, s.y = -280 * n, cc.loader.loadRes("yuansheng/image/queding", cc.SpriteFrame, function(e, t) {
				s.addComponent(cc.Sprite).spriteFrame = t
			}), s.on(cc.Node.EventType.TOUCH_END, function() {
				e && e(), SDK.bannerHide(), o.removeFromParent()
			});
			var c = new cc.Node;
			c.parent = o, c.x = 170 * n, c.y = 320 * n, c.scale = n, cc.loader.loadRes("yuansheng/image/close", cc.SpriteFrame, function(e, t) {
				c.addComponent(cc.Sprite).spriteFrame = t
			}), c.scale = 0;
			var r = cc.delayTime(2),
				l = cc.scaleTo(.3, n, n).easing(cc.easeBackOut());
			return c.runAction(cc.sequence(r, l)), c.on(cc.Node.EventType.TOUCH_END, function() {
				console.log("closeBtn click"), 100 * Math.random() < openRandShare && e && e(), SDK.bannerHide(), o.removeFromParent()
			}), o.scale = 0, o.runAction(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut())), o
		}, window.createDengluButton = function(e) {
			var t = cc.view.getVisibleSize(),
				n = (cc.v2(t.width / 2, t.height / 2), new cc.Node);
			n.x = .5 * t.width, n.y = .5 * t.height, n.parent = cc.director.getScene(), n.zIndex = 9e3, n.setContentSize(cc.winSize);
			var o = new cc.Node;
			o.parent = n, o.opacity = 150, o.scale = 1e3, cc.loader.loadRes("yuansheng/image/mask", cc.SpriteFrame, function(e, t) {
				o.addComponent(cc.Sprite).spriteFrame = t
			}), o.on("touchend", function() {});
			var i = new cc.Node;
			return i.parent = n, i.x = 0, i.scale = 1, i.y = -280, cc.loader.loadRes("yuansheng/image/denglu", cc.SpriteFrame, function(e, t) {
				i.addComponent(cc.Sprite).spriteFrame = t
			}), i.on(cc.Node.EventType.TOUCH_END, function() {
				e && e(), n.removeFromParent()
			}), n
		}, cc._RF.pop()
	}, {}],
	bagControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7ed4f4UIqVPRLArc8mdccs2", "bagControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.bag_back = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					for (var e = 0, t = this.node.children; e < t.length; e++) {
						var n = t[e];
						1 == n.active && this.setBagBack(n.name)
					}
					this.areAllChildrenInactive(this.node) && this.setBagBack("00")
				}, t.prototype.setBagBack = function(e) {
					for (var t = e + "_back", n = 0, o = this.bag_back.children; n < o.length; n++) {
						var i = o[n];
						i.name == t ? i.active = !0 : i.active = !1
					}
				}, t.prototype.areAllChildrenInactive = function(e) {
					for (var t = 0, n = e.children; t < n.length; t++)
						if (n[t].active) return !1;
					return !0
				}, a([r(cc.Node)], t.prototype, "bag_back", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	ecpm1: [function(e, t) {
		"use strict";
		cc._RF.push(t, "af2dasGpbFDPICfeBsP25L+", "ecpm1"), cc.Class({
			extends: cc.Component,
			properties: {
				Armature: {
					default: null,
					type: dragonBones.ArmatureDisplay,
					displayName: "\u52a8\u753b"
				},
				Progress: {
					default: null,
					type: cc.ProgressBar
				},
				btnNode: cc.Node
			},
			onLoad: function() {
				SDK.bannerHide()
			},
			start: function() {
				console.log("\u8d70\u4e94\u70b9\u4e86"), this.Progress.progress = 0, this.num = 0, this.btnNode.on(cc.Node.EventType.TOUCH_START, this.oonBtnClickEvent, this), this.btnNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEndEvent2, this), this.btnNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndEvent2, this), this._clickTime = 0, this.ShowAd = !1, this.callback = function() {
					this.num > 0 && cc.tween(this.Progress).to(.1, {
						progress: this.num -= .08
					}).start()
				}
			},
			onDestroy: function() {},
			setCallBack: function(e) {
				this.endCB = e
			},
			oonBtnClickEvent: function() {
				var e = this;
				if (!this.ShowAd) {
					var t = this.num += .19;
					this._clickTime = 0, cc.tween(this.Progress).to(.3, {
						progress: t
					}).call(function() {
						if (e.num >= .5 && !e.ShowAd) return e.ShowAd = !0, SDK.shipin(function() {}), e.scheduleOnce(function() {
							this.endCB && this.endCB(), this.node.destroy()
						}.bind(e), 2), e.Armature.playAnimation("dakai", 1), setTimeout(function() {
							e.Armature.node.children[0].active = !0
						}, 500), void console.log("\u53ef\u4ee5\u51fa\u5e7f\u544a\u4e86")
					}).start()
				}
			},
			fadaoju: function() {
				this.node.destroy()
			},
			onTouchEndEvent2: function() {
				this.ShowAd || this.schedule(this.callback, .1)
			}
		}), cc._RF.pop()
	}, {}],
	ecpm: [function(e, t) {
		"use strict";
		cc._RF.push(t, "084b8lGqCNEoop9YS21hnM1", "ecpm"), cc.Class({
			extends: cc.Component,
			properties: {
				jindutiao: cc.ProgressBar
			},
			start: function() {
				var e = this;
				return this.value = 0, this.chufa = !1, this.type = 1, 1 == SDK.libaoID ? (null != ext.ecpmbanner1 && Math.random() < ext.ecpmbanner1 && (this.type = 2), -1 == ext.ecpmbanner1 && (this.type = 3), -2 == ext.ecpmbanner1 && (this.type = 4), -3 == ext.ecpmbanner1 && SDK.shipin(function() {})) : 2 == SDK.libaoID ? (null != ext.ecpmbanner2 && Math.random() < ext.ecpmbanner2 && (this.type = 2), -1 == ext.ecpmbanner2 && (this.type = 3), -2 == ext.ecpmbanner2 && (this.type = 4), -3 == ext.ecpmbanner2 && SDK.shipin(function() {})) : (null != ext.ecpmbanner3 && Math.random() < ext.ecpmbanner3 && (this.type = 2), -1 == ext.ecpmbanner3 && (this.type = 3), -2 == ext.ecpmbanner3 && (this.type = 4), -3 == ext.ecpmbanner3 && SDK.shipin(function() {})), 3 == this.type ? (SDK.shipin(function() {}), this.node.active = !1, void this.scheduleOnce(function() {
					this.endCB && this.endCB(), this.node.destroy()
				}.bind(this), .5)) : 4 == this.type ? (this.node.active = !1, void this.scheduleOnce(function() {
					this.endCB && this.endCB(), this.node.destroy()
				}.bind(this), .5)) : (SDK.bannerHide(), 2 == this.type && function() {
					var t = [3, 1, 3, 1, 2],
						n = [.5, .5, 1, .5, 2];
					null != ext.ecpmbannertime && (t = ext.ecpmbannertime), null != ext.ecpmbannertime1 && (n = ext.ecpmbannertime1);
					for (var o = cc.tween(e.node), i = function(i) {
							o = o.delay(t[i]).call(function() {
								this.showBanner(), this.scheduleOnce(function() {
									this.closeBanner(), i == t.length - 1 && (this.endCB && this.endCB(), this.node.destroy())
								}.bind(this), n[i])
							}, e)
						}, a = 0; a < t.length; a++) i(a);
					o.start()
				}(), this.dianjicishu = 0, this.zuihoudianjitime = 0, this.clickCount = 3, this.clickTime = 170, this.shipinyanchi = .3, null != ext.ecpmshipinyanchi && (this.shipinyanchi = ext.ecpmshipinyanchi), null != ext.ecpmclickcount && (this.clickCount = ext.ecpmclickcount), null != ext.ecpmclicktime && (this.clickTime = ext.ecpmclicktime), void(null != ext.ecpmclickrang && (this.clickCount += Math.floor(Math.random() * ext.ecpmclickrang))))
			},
			showBanner: function() {
				window.vivo ? vivoUtil.createNativeadBanner() : window.qg ? qgUtil.createNativeadBanner() : window.tt ? TouTiaoTools.showBanner(!0) : window.qq ? qqUtil.showBanner(!0) : window.ks ? this.type = 1 : window.uc && UCUtil.bannerShow(!0)
			},
			closeBanner: function() {
				SDK.bannerHide()
			},
			setCallBack: function(e) {
				this.endCB = e
			},
			buttonCB: function() {
				if (this.value += .18, 1 == this.type) {
					var e = (new Date).getTime();
					if (e - this.zuihoudianjitime < this.clickTime ? this.dianjicishu += 1 : this.dianjicishu = 0, this.zuihoudianjitime = e, this.dianjicishu >= this.clickCount && 0 == this.chufa) {
						this.chufa = !0, cc.tween(this.node).delay(this.shipinyanchi).call(function() {
							SDK.shipin(function() {})
						}).start();
						var t = 2;
						null != ext.ecpmtime && (t = ext.ecpmtime), this.scheduleOnce(function() {
							this.endCB && this.endCB(), this.node.destroy()
						}.bind(this), t)
					}
				}
			},
			update: function(e) {
				this.value -= .6 * e * (1 + 1 * this.value), this.value < 0 && (this.value = 0), this.jindutiao.progress = this.value
			}
		}), cc._RF.pop()
	}, {}],
	hairControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "465b9NVaTBPv6H+Zg37yBLG", "hairControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hair_back = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					for (var e = 0, t = this.node.children; e < t.length; e++) {
						var n = t[e];
						1 == n.active && this.setHairBack(n.name)
					}
				}, t.prototype.setHairBack = function(e) {
					for (var t = e + "_back", n = 0, o = this.hair_back.children; n < o.length; n++) {
						var i = o[n];
						i.name == t ? i.active = !0 : i.active = !1
					}
				}, a([r(cc.Node)], t.prototype, "hair_back", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	headwearControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "565fcj6W5FFxanVtYPIj0Yp", "headwearControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.item_back = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					for (var e = 0, t = this.node.children; e < t.length; e++) {
						var n = t[e];
						1 == n.active && this.setBagBack(n.name)
					}
					this.areAllChildrenInactive(this.node) && this.setBagBack("00")
				}, t.prototype.setBagBack = function(e) {
					for (var t = e + "_back", n = 0, o = this.item_back.children; n < o.length; n++) {
						var i = o[n];
						i.name == t ? i.active = !0 : i.active = !1
					}
				}, t.prototype.areAllChildrenInactive = function(e) {
					for (var t = 0, n = e.children; t < n.length; t++)
						if (n[t].active) return !1;
					return !0
				}, a([r(cc.Node)], t.prototype, "item_back", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	homeControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "af36e5TntNPUoEY43u9EKIU", "homeControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./GlobalManager"),
			c = e("./PKMode/PkBtnControl"),
			r = cc._decorator,
			l = r.ccclass,
			d = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.message = null, t.menu = null, t.character = null, t.zoomBtn = null, t.isScaled = !1, t
				}
				return i(t, e), t.prototype.start = function() {
					window.SDK.autuShowChaping()
				}, t.prototype.update = function() {}, t.prototype.onClick_backBtn = function() {
					s.default.getInstance().isPkMode ? (cc.director.getScene().getChildByName("Canvas").getChildByName("Btns").getChildByName("PKBtn").getComponent(c.default).overPkMode(), this.onclick_clearBtn()) : cc.director.loadScene("start")
				}, t.prototype.onClick_zoomBtn = function() {
					cc.tween(this.character).to(.2, {
						scale: this.isScaled ? .6 : .7,
						position: this.isScaled ? this.character.position.add(new cc.Vec3(0, 230, 0)) : this.character.position.subtract(new cc.Vec3(0, 230, 0))
					}).start(), cc.tween(this.menu).to(.2, {
						position: this.isScaled ? this.menu.position.add(new cc.Vec3(0, 460, 0)) : this.menu.position.subtract(new cc.Vec3(0, 460, 0))
					}).start(), this.isScaled = !this.isScaled
				}, t.prototype.onClick_saveBtn = function() {
					var e = s.default.getInstance().save,
						t = JSON.stringify(s.default.getInstance().getDressInfo());
					cc.sys.localStorage.setItem("dress" + e, t), this.showMessage("Đã lưu Mẫu số " + parseInt(e) + "~")
				}, t.prototype.onclick_clearBtn = function() {
					s.default.getInstance().initDressInfo()
				}, t.prototype.onclick_suitModeBtn = function() {
					var e = JSON.stringify(s.default.getInstance().getDressInfo());
					cc.sys.localStorage.setItem("dress_temp", e), cc.director.loadScene("suitMode")
				}, t.prototype.showMessage = function(e) {
					var t = this;
					this.message.active = !0, this.message.getComponentInChildren(cc.Label).string = e, this.scheduleOnce(function() {
						t.message.getComponentInChildren(cc.Label).string = "", t.message.active = !1
					}, .5)
				}, a([d(cc.Node)], t.prototype, "message", void 0), a([d(cc.Node)], t.prototype, "menu", void 0), a([d(cc.Node)], t.prototype, "character", void 0), a([d(cc.Button)], t.prototype, "zoomBtn", void 0), a([l], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"./GlobalManager": "GlobalManager",
		"./PKMode/PkBtnControl": "PkBtnControl"
	}],
	jewelryControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b4851c1gtFAd7yZrilJvaVZ", "jewelryControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.item_back = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					for (var e = 0, t = this.node.children; e < t.length; e++) {
						var n = t[e];
						1 == n.active && this.setBagBack(n.name)
					}
					this.areAllChildrenInactive(this.node) && this.setBagBack("00")
				}, t.prototype.setBagBack = function(e) {
					for (var t = e + "_back", n = 0, o = this.item_back.children; n < o.length; n++) {
						var i = o[n];
						i.name == t ? i.active = !0 : i.active = !1
					}
				}, t.prototype.areAllChildrenInactive = function(e) {
					for (var t = 0, n = e.children; t < n.length; t++)
						if (n[t].active) return !1;
					return !0
				}, a([r(cc.Node)], t.prototype, "item_back", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	jiankangzhonggao: [function(e, t) {
		"use strict";
		cc._RF.push(t, "42ceccKnPtHK6I4Pf5KS7sq", "jiankangzhonggao"), window.loadMain = !1, cc.Class({
			extends: cc.Component,
			properties: {
				zhuzuoquanren: cc.Label,
				ruanzhuhao: cc.Label
			},
			onLoad: function() {
				window.jiankangzhonggao = this, localStorage.setItem("showYS", "1"), this.scheduleOnce(function() {
					1 == window.showYS && this.loadGame()
				}, .1), window.vivo && (this.zhuzuoquanren.string = "", this.ruanzhuhao.string = ""), window.qq && (this.zhuzuoquanren.string = "", this.ruanzhuhao.string = ""), window.tt && (this.zhuzuoquanren.string = "", this.ruanzhuhao.string = ""), this.zhuzuoquanren.string = "\u8f6f\u4ef6\u8457\u4f5c\u6743\u4eba: " + window.xinxi_zhuzuoquanren, this.ruanzhuhao.string = "\u8f6f\u8457\u767b\u8bb0\u53f7\uff1a" + window.xinxi_ruanzhuhao
			},
			loadGame: function() {
				1 != window.huawei && (window.hwLogin = !0), 1 == window.hwLogin && 1 == window.showYS && ((window.ios = !0) && localStorage.setItem("showYS", "1"), window.jiankangzhonggao = null, 1 != window.loadMain && (window.loadMain = !1, this.scheduleOnce(function() {
					cc.director.loadScene("start")
				}, 2.5)))
			}
		}), cc._RF.pop()
	}, {}],
	layoutContentControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "724a83uCGNJpZdr/AS1QU16", "layoutContentControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.childWidth = 0, t.SpacingWidth = 0, t.contentNode = null, t.childrenActiveNum = 0, t.contentHight = 0, t
				}
				return i(t, e), t.prototype.start = function() {
					this.contentHight = this.contentNode.getContentSize().height;
					var e = cc.sys.localStorage.getItem("dress01"),
						t = cc.sys.localStorage.getItem("dress02"),
						n = cc.sys.localStorage.getItem("dress03");
					e && (this.contentNode.children[0].active = !0), this.contentNode.children[1].active = !!t, n ? (this.contentNode.children[2].active = !0, this.contentNode.getChildByName("itemAdd").active = !1) : this.contentNode.children[2].active = !1
				}, t.prototype.update = function() {
					this.updateContenWidth()
				}, t.prototype.updateContenWidth = function() {
					for (var e = 0, t = 0, n = this.contentNode.children; t < n.length; t++) 1 == n[t].active && e++;
					this.contentNode.setContentSize(e * (this.SpacingWidth + this.childWidth) + this.SpacingWidth, this.contentHight)
				}, t.prototype.clickItemAdd = function() {
					for (var e = 0, t = 0, n = this.contentNode.children; t < n.length; t++) 1 == n[t].active && e++;
					for (var o = this.contentNode.children, i = 0; i < e; i++) e >= 3 && (this.contentNode.getChildByName("itemAdd").active = !1), o[i].active = !0
				}, a([r], t.prototype, "childWidth", void 0), a([r], t.prototype, "SpacingWidth", void 0), a([r(cc.Node)], t.prototype, "contentNode", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	layoutGridContenControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b4384HP/AVGEZQ1+o/zMfpj", "layoutGridContenControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.itemWidth = 0, t.itemHight = 0, t.SpacingY = 0, t.layoutScroll = null, t.contentWidth = 0, t
				}
				return i(t, e), t.prototype.start = function() {
					this.updateContenHight(), this.layoutScroll.getComponent(cc.ScrollView).scrollToTop(.01)
				}, t.prototype.updateContenHight = function() {
					this.contentWidth = this.node.getContentSize().width;
					for (var e = 0, t = 0, n = this.node.children; t < n.length; t++) n[t].active && e++;
					this.node.setContentSize(this.contentWidth, Math.ceil(e / 5) * (this.itemHight + this.SpacingY))
				}, a([r], t.prototype, "itemWidth", void 0), a([r], t.prototype, "itemHight", void 0), a([r], t.prototype, "SpacingY", void 0), a([r(cc.Node)], t.prototype, "layoutScroll", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	layout: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f6a02djgt9Cnaom/9ikv54i", "layout");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = (s.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.item_click = function(e, t) {
					var n = this.node.children;
					4 != t ? (n[t - 1].active = !1, n[t].active = !0) : (n[t - 1].active = !1, cc.director.getScene().getChildByName("Canvas").getChildByName("sureBtn").active = !0)
				}, a([c], t)
			}(cc.Component));
		n.default = r, cc._RF.pop()
	}, {}],
	menuScrollViewControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ad396C7GYRIJ42kK5SfxeL4", "menuScrollViewControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.contentNode = null, t.layoutNode = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.node.getComponent(cc.ScrollView).scrollToLeft(.01)
				}, t.prototype.clickItems = function(e) {
					for (var t = e.currentTarget.name.slice(4), n = 0, o = this.layoutNode.children; n < o.length; n++) {
						var i = o[n];
						i.name.slice(6) == t ? i.active = !0 : i.active = !1
					}
				}, a([r(cc.Node)], t.prototype, "contentNode", void 0), a([r(cc.Node)], t.prototype, "layoutNode", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	onePieceControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "6efc5Ek39xN/JLR4Cgq89oY", "onePieceControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = s.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.topsNode = null, t.bottomsNode = null, t.item_back = null, t
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					for (var e = 0, t = this.node.children; e < t.length; e++) 1 == (i = t[e]).active && (this.takeOffTops(), this.takeOffBottoms());
					for (var n = 0, o = this.node.children; n < o.length; n++) {
						var i;
						1 == (i = o[n]).active && this.setBagBack(i.name)
					}
					this.areAllChildrenInactive(this.node) && this.setBagBack("00")
				}, t.prototype.takeOffTops = function() {
					for (var e = 0, t = this.topsNode.children; e < t.length; e++) t[e].active = !1
				}, t.prototype.takeOffBottoms = function() {
					for (var e = 0, t = this.bottomsNode.children; e < t.length; e++) t[e].active = !1
				}, t.prototype.setBagBack = function(e) {
					for (var t = e + "_back", n = 0, o = this.item_back.children; n < o.length; n++) {
						var i = o[n];
						i.name == t ? i.active = !0 : i.active = !1
					}
				}, t.prototype.areAllChildrenInactive = function(e) {
					for (var t = 0, n = e.children; t < n.length; t++)
						if (n[t].active) return !1;
					return !0
				}, a([r(cc.Node)], t.prototype, "topsNode", void 0), a([r(cc.Node)], t.prototype, "bottomsNode", void 0), a([r(cc.Node)], t.prototype, "item_back", void 0), a([c], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	qqUtil: [function(e, t) {
		"use strict";
		cc._RF.push(t, "2b77817N0NB+aNtpNWUpCq3", "qqUtil"), window.qqUtil = {
			videoCallbackSuccess: null,
			videoCallbackFaile: null,
			videoAd: null,
			getVideoAd: function(e, t) {
				console.log("shipin---------------------------"), this.videoCallbackSuccess = e, this.videoCallbackFaile = t, window.qq ? qqUtil.videoAd.show().then(function() {
					console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u6210\u529f"), cc.audioEngine.pauseAll(), cc.director.pause()
				}).catch(function() {
					qqUtil.videoAd.load().then(function() {
						qqUtil.videoAd.show(), cc.audioEngine.pauseAll(), cc.director.pause()
					}).catch(function() {
						qq.showToast({
							title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
							icon: "none",
							duration: 1e3,
							success: function(e) {
								console.log("" + e)
							},
							fail: function() {
								console.log("showToast \u8c03\u7528\u5931\u8d25")
							}
						}), cc.audioEngine.resumeAll(), cc.director.resume()
					})
				}) : qqUtil.AdSuccess()
			},
			sceneTrue: function() {
				var e = qq.getLaunchOptionsSync().scene;
				if (!ext.sceneID) return !1;
				for (var t = ext.sceneID, n = 0; n < t.length; n++)
					if (e == t[n]) return !0;
				return !1
			},
			showBanner: function() {
				qqUtil.hideBanner(), null != qqUtil.GAME_QQ_BANNER && qqUtil.GAME_QQ_BANNER.show()
			},
			hideBanner: function() {
				null != qqUtil.GAME_QQ_BANNER && qqUtil.GAME_QQ_BANNER.hide()
			},
			GAME_QQ_BANNER: null,
			initQQShow: function() {
				window.qq && (qqUtil.GAME_QQ_BANNER = qq.createBannerAd({
					adUnitId: qqConfig.qq_bannerID,
					style: {
						left: 0,
						top: qq.getSystemInfoSync().screenHeight - 90,
						width: qq.getSystemInfoSync().screenWidth
					},
					adIntervals: 30
				}), wx.showShareMenu({
					withShareTicket: !0
				}), wx.onShareAppMessage(function() {
					return {}
				})), window.qq && (qqUtil.videoAd = qq.createRewardedVideoAd({
					adUnitId: qqConfig.qq_videoID
				}), qqUtil.videoAd.onClose(function(e) {
					cc.audioEngine.resumeAll(), cc.director.resume(), 1 == e.isEnded ? qqUtil.AdSuccess() : qqUtil.AdFaile(), qqUtil.videoAd.load()
				}), qqUtil.videoAd.load())
			},
			Grid: null,
			hideGrid: function() {
				window.qq && qqUtil.Grid && (qqUtil.Grid.destroy(), qqUtil.Grid = null)
			},
			showGrid: function() {
				if (window.qq) {
					qqUtil.hideGrid();
					var e = window.qq.getSystemInfoSync();
					console.log("\u6784\u5efa\u79ef\u6728\u5e7f\u544a"), qqUtil.Grid = window.qq.createBlockAd({
						adUnitId: qqConfig.qq_jimuID,
						size: 1,
						orientation: "landscape",
						style: {
							left: 10,
							top: .6 * e.windowHeight
						}
					}), qqUtil.Grid.onResize(function() {}), qqUtil.Grid.onError(function(e) {
						console.log(JSON.stringify(e)), qqUtil.hideGrid()
					}), qqUtil.Grid.onLoad(function() {
						qqUtil.Grid.show()
					})
				}
			},
			interstitialAd: null,
			showChaPing: function() {
				qqUtil.showChaPing1()
			},
			gengduoyouxi: function() {
				if (window.qq) {
					var e = qq.createAppBox({
						adUnitId: qqConfig.qq_heziID
					});
					e.load().then(function() {
						e.show()
					})
				}
			},
			showChaPing1: function() {
				window.qq && (100 * Math.random() < pushBoxgl ? qqUtil.gengduoyouxi() : (qqUtil.interstitialAd && (qqUtil.interstitialAd.destroy(), qqUtil.interstitialAd = null), qqUtil.interstitialAd = qq.createInterstitialAd({
					adUnitId: qqConfig.qq_chapingID
				}), qqUtil.interstitialAd.load().catch(function(e) {
					console.error("load", e)
				}), qqUtil.interstitialAd.onLoad(function() {
					console.log("onLoad event emit"), qqUtil.interstitialAd.show().catch(function(e) {
						console.error("show", e)
					})
				}), qqUtil.interstitialAd.onClose(function() {
					console.log("close event emit"), qqUtil.interstitialAd.destroy(), qqUtil.interstitialAd = null
				}), qqUtil.interstitialAd.onError(function(e) {
					console.log("error", e)
				})))
			},
			AdSuccess: function() {
				null != qqUtil.videoCallbackSuccess && (qqUtil.videoCallbackSuccess(), qqUtil.videoCallbackSuccess = null)
			},
			AdFaile: function() {
				null != qqUtil.videoCallbackFaile && (qqUtil.videoCallbackFaile(), qqUtil.videoCallbackFaile = null)
			},
			zhuomian: function() {
				window.qq && 100 * Math.random() < openRandShare && (100 * Math.random() < 50 ? qq.saveAppToDesktop() : qq.isColorSignExistSync() || qq.addColorSign())
			},
			share: function(e, t) {
				qq.shareAppMessage({
					success: function() {
						e && e()
					},
					fail: function() {
						t && t()
					}
				})
			}
		}, window.qq && qqUtil.initQQShow(), cc._RF.pop()
	}, {}],
	showYS: [function(e, t) {
		"use strict";
		cc._RF.push(t, "7f089SmRL1Fpb7oPI5TYRc+", "showYS"), cc.Class({
			extends: cc.Component,
			properties: {},
			start: function() {
				cc.sys.localStorage.getItem("showYS_record") ? console.log("showedYS") : (cc.sys.localStorage.setItem("showYS_record", 1), this.ysButtonCB(), console.log("showYS"))
			},
			ysButtonCB: function() {
				cc.loader.loadRes("ysxy/ysxy", cc.Prefab, function(e, t) {
					var n = cc.instantiate(t);
					n.parent = cc.find("Canvas"), n.zIndex = 1e5, n.position = cc.v2(0, 0), window.showYS = 1
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {}],
	startControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f2a262yeklLgLGeiS54GW8r", "startControl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./AudioManager"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.start = function() {
					cc.audioEngine.isMusicPlaying() || s.default.getInstance().playBackgroundMusic(), cc.sys.localStorage.removeItem("dress_temp")
				}, t.prototype.onClick_StartBtn = function() {
					cc.director.loadScene("home")
				}, a([r], t)
			}(cc.Component));
		n.default = l, cc._RF.pop()
	}, {
		"./AudioManager": "AudioManager"
	}],
	suitMode: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ad732Hq90hMZZeK99Bx2zpk", "suitMode");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.SuitInfo = void 0;
		var s = e("../AudioManager"),
			c = e("../GlobalManager"),
			r = cc._decorator,
			l = r.ccclass,
			d = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.allSuitInfo = null, t.LevNumber = 10, t.initLev = 1, t
				}
				var n;
				return i(t, e), n = t, t.prototype.onLoad = function() {
					var e = this;
					cc.resources.load("dress/data/suit", cc.JsonAsset, function(t, n) {
						e.allSuitInfo = n.json
					})
				}, t.prototype.start = function() {
					var e = this;
					setTimeout(function() {
						n.levelNumber = e.initLev, e.init_level()
					}, 20)
				}, t.prototype.onDestroy = function() {
					this.saveGame()
				}, t.prototype.back_btn = function() {
					cc.director.loadScene("home")
				}, t.prototype.restart_btn = function() {
					this.node.getChildByName("Fail").active = !1, this.init_level()
				}, t.prototype.skip_btn = function() {
					var e = this;
					window.SDK.shipin(function() {
						e.next_btn()
					})
				}, t.prototype.sure_btn = function() {
					switch (n.levelNumber) {
						case 1:
							this.isVictory(this.allSuitInfo.lev1) ? this.Victory() : this.Fail();
							break;
						case 2:
							this.isVictory(this.allSuitInfo.lev2) ? this.Victory() : this.Fail();
							break;
						case 3:
							this.isVictory(this.allSuitInfo.lev3) ? this.Victory() : this.Fail();
							break;
						case 4:
							this.isVictory(this.allSuitInfo.lev4) ? this.Victory() : this.Fail();
							break;
						case 5:
							this.isVictory(this.allSuitInfo.lev5) ? this.Victory() : this.Fail();
							break;
						case 6:
							this.isVictory(this.allSuitInfo.lev6) ? this.Victory() : this.Fail();
							break;
						case 7:
							this.isVictory(this.allSuitInfo.lev7) ? this.Victory() : this.Fail();
							break;
						case 8:
							this.isVictory(this.allSuitInfo.lev8) ? this.Victory() : this.Fail();
							break;
						case 9:
							this.isVictory(this.allSuitInfo.lev9) ? this.Victory() : this.Fail();
							break;
						case 10:
							this.isVictory(this.allSuitInfo.lev10) ? this.Victory() : this.Fail()
					}
				}, t.prototype.next_btn = function() {
					n.levelNumber < this.LevNumber ? (n.levelNumber++, this.init_level()) : (n.levelNumber = 1, this.init_level()), this.node.getChildByName("Victory").active = !1, this.saveGame()
				}, t.prototype.isVictory = function(e) {
					var t = 0;
					return e.hair && c.default.getInstance().getDressInfo().hair == e.hair && t++, e.tops && c.default.getInstance().getDressInfo().tops == e.tops && t++, e.overcoat && c.default.getInstance().getDressInfo().overcoat == e.overcoat && t++, e.bottoms && c.default.getInstance().getDressInfo().bottoms == e.bottoms && t++, e.onePiece && c.default.getInstance().getDressInfo().onePiece == e.onePiece && t++, e.socks && c.default.getInstance().getDressInfo().socks == e.socks && t++, e.shoes && c.default.getInstance().getDressInfo().shoes == e.shoes && t++, e.headwear && c.default.getInstance().getDressInfo().headwear == e.headwear && t++, e.jewelry && c.default.getInstance().getDressInfo().jewelry == e.jewelry && t++, 4 == t
				}, t.prototype.Victory = function() {
					this.node.getChildByName("Victory").active = !0, this.node.getChildByName("Victory").getChildByName("bg").getComponent(sp.Skeleton).setAnimation(1, "animation", !1), s.default.getInstance().playSuccessEffect(), window.SDK.showChaping_INGAME()
				}, t.prototype.Fail = function() {
					this.node.getChildByName("Fail").active = !0, this.node.getChildByName("Fail").getChildByName("bg").getComponent(sp.Skeleton).setAnimation(1, "animation", !1), s.default.getInstance().playFailEffect(), window.SDK.showChaping_INGAME()
				}, t.prototype.init_level = function() {
					for (var e = 1; e <= this.LevNumber; e++) this.node.getChildByName("Lev" + e).children.forEach(function(e) {
						e.active = !1
					});
					for (var t = this.node.getChildByName("Lev" + n.levelNumber).children, o = 0, i = t; o < i.length; o++) i[o].active = !1;
					t[0].active = !0, cc.director.getScene().getChildByName("Canvas").getChildByName("sureBtn").active = !1, c.default.getInstance().initDressInfo()
				}, t.prototype.saveGame = function() {
					cc.sys.localStorage.setItem("game_SuitMode_Lev", n.levelNumber)
				}, t.prototype.loadGame = function() {
					return cc.sys.localStorage.getItem("game_SuitMode_Lev")
				}, t.levelNumber = 1, a([d], t.prototype, "LevNumber", void 0), a([d], t.prototype, "initLev", void 0), n = a([l], t)
			}(cc.Component);
		n.default = u;
		n.SuitInfo = function(e) {
			this.theme = e.theme, this.hair = e.hair, this.tops = e.tops, this.overcoat = e.overcoat, this.bottoms = e.bottoms, this.onePiece = e.onePiece, this.socks = e.socks, this.shoes = e.shoes, this.headwear = e.headwear, this.jewelry = e.jewelry
		}, cc._RF.pop()
	}, {
		"../AudioManager": "AudioManager",
		"../GlobalManager": "GlobalManager"
	}],
	themeLabel: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f6efb4eRGNKh6NQMxgCSkMs", "themeLabel");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./suitMode"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.allSuitInfo = null, t
				}
				return i(t, e), t.prototype.start = function() {
					var e = this;
					cc.resources.load("dress/data/suit", cc.JsonAsset, function(t, n) {
						e.allSuitInfo = n.json
					})
				}, t.prototype.update = function() {
					if (null != this.allSuitInfo) switch (s.default.levelNumber) {
						case 1:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev1.theme;
							break;
						case 2:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev2.theme;
							break;
						case 3:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev3.theme;
							break;
						case 4:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev4.theme;
							break;
						case 5:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev5.theme;
							break;
						case 6:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev6.theme;
							break;
						case 7:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev7.theme;
							break;
						case 8:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev8.theme;
							break;
						case 9:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev9.theme;
							break;
						case 10:
							this.node.getComponent(cc.Label).string = this.allSuitInfo.lev10.theme
					}
				}, a([r], t)
			}(cc.Component));
		n.default = l, cc._RF.pop()
	}, {
		"./suitMode": "suitMode"
	}],
	theme: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "004bbY/vwlG6Zxv4U/OGztz", "theme");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, a = arguments.length,
					s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s);
				return a > 3 && s && Object.defineProperty(t, n, s), s
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = cc._decorator,
			c = s.ccclass,
			r = (s.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.start = function() {}, t.prototype.update = function() {
					"theme" == this.node.name && this.node.setContentSize(this.node.getChildByName("themeLabel").getContentSize()), "themeBackground" == this.node.name && this.node.setContentSize(this.node.parent.getContentSize().width + 200, 100)
				}, a([c], t)
			}(cc.Component));
		n.default = r, cc._RF.pop()
	}, {}],
	vivoUtil: [function(e, t) {
		"use strict";
		cc._RF.push(t, "69babvC6gZP878xzW++KVfV", "vivoUtil"), window.vivoUtil = {
			videoAd: null,
			bannerAd: null,
			yuanshengIndex: 0,
			yuanshengADK: null,
			mobanAD: null,
			ADInit: function() {
				if (qg.createBoxPortalAd) {
					var e = qg.createBoxPortalAd({
						posId: vivoConfig.hutui9gongge,
						image: "",
						marginTop: 200
					});
					e.onError(function(e) {
						console.log("\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e)
					}), e.onClose(function() {
						console.log("close"), e.isDestroyed || e.show()
					}), e.onLoad(function() {
						console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), e.show()
					}), e.onShow(function(e) {
						console.log("onShow=", e)
					})
				} else console.log("\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API")
			},
			rewardedVideoAd: null,
			getVideoAd: function(e) {
				if (!qg.createRewardedVideoAd) return e(), void console.log("\u7248\u672c\u4f4e\u4e8e1041");
				null == vivoUtil.rewardedVideoAd ? vivoUtil.rewardedVideoAd = qg.createRewardedVideoAd({
					posId: vivoConfig.shipinID
				}) : (vivoUtil.rewardedVideoAd.offLoad(), vivoUtil.rewardedVideoAd.offError(), vivoUtil.rewardedVideoAd.offClose()), vivoUtil.rewardedVideoAd.load().then(function() {
					console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544aload\u6210\u529f"), vivoUtil.rewardedVideoAd.show().then(function() {
						console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f"), cc.audioEngine.setMusicVolume(0), cc.audioEngine.setEffectsVolume(0), cc.audioEngine.pauseAll(), cc.director.pause()
					}).catch(function(e) {
						console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", e), qg.showToast({
							message: "\u7a0d\u540e\u518d\u8bd5\u3002\u3002"
						})
					})
				}).catch(function(e) {
					console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544aload\u5931\u8d25" + JSON.stringify(e)), qg.showToast({
						message: "\u7a0d\u540e\u518d\u8bd5\u3002\u3002"
					})
				}), vivoUtil.rewardedVideoAd.onClose(function(t) {
					cc.audioEngine.setMusicVolume(1), cc.audioEngine.setEffectsVolume(1), cc.audioEngine.resumeAll(), cc.director.resume(), t && t.isEnded ? (e && e(), console.log("vivo videoad play success22222222222222")) : console.log("vivo videoad play cancel")
				})
			},
			showAd: function() {
				vivoUtil.clearAD(), "" === vivoConfig.yuanshengID1 ? vivoUtil.createNativead() : vivoUtil.createNativeadChaping()
			},
			showBanner: function() {
				vivoUtil.clearAD(), qg.createBoxBannerAd && (vivoUtil.bannerAd = qg.createBannerAd({
					posId: vivoConfig.bannerID
				}), vivoUtil.bannerAd.show().then(function() {
					console.log("bannerAd success")
				}))
			},
			closeBanner: function() {
				vivoUtil.clearAD()
			},
			showChaping: function() {
				vivoUtil.clearAD();
				var e = qg.createInterstitialAd({
					posId: vivoConfig.chapingID
				});
				e.onError(function() {}), e.onClose(function() {
					e.offClose()
				}), e.show()
			},
			clearAD: function() {
				vivoUtil.bannerAd && (vivoUtil.bannerAd.destroy(), vivoUtil.bannerAd = null), vivoUtil.yuanshengADK && vivoUtil.yuanshengADK.destroy(), vivoUtil.mobanAD && (vivoUtil.mobanAD.hide(), vivoUtil.mobanAD = null)
			},
			createNativeadChaping: function() {
				if (vivoUtil.clearAD(), window.closeBtnScale > .9) vivoUtil.showChaping();
				else {
					var e = [vivoConfig.yuanshengID1, vivoConfig.yuanshengID2, vivoConfig.yuanshengID3];
					vivoUtil.yuanshengIndex += 1, vivoUtil.yuanshengIndex >= e.length && (vivoUtil.yuanshengIndex = 0);
					var t = qg.createNativeAd({
						posId: e[vivoUtil.yuanshengIndex]
					});
					t.onLoad(function(e) {
						t.offLoad(), t.reportAdShow({
							adId: e.adList[0].adId
						}), vivoUtil.yuanshengADK && vivoUtil.yuanshengADK.destroy(), vivoUtil.yuanshengADK = yuansheng.createChaping(e.adList[0].imgUrlList[0], function() {
							vivoUtil.yuanshengADK = null, vivoUtil.createNativeadBanner()
						}, function() {
							t.reportAdClick({
								adId: e.adList[0].adId
							}), vivoUtil.yuanshengADK = null, vivoUtil.createNativeadBanner()
						})
					}), t.onError(function(e) {
						console.log(JSON.stringify(e)), vivoUtil.createNativead()
					}), t.load()
				}
			},
			createNativeadBanner: function() {
				if (vivoUtil.clearAD(), "" === vivoConfig.yuanshengID1) vivoUtil.showBanner();
				else {
					if (window.closeBtnScale > .9 && Math.random() < .5) return void vivoUtil.showBanner();
					var e = [vivoConfig.yuanshengID1, vivoConfig.yuanshengID2, vivoConfig.yuanshengID3];
					vivoUtil.yuanshengIndex += 1, vivoUtil.yuanshengIndex >= e.length && (vivoUtil.yuanshengIndex = 0);
					var t = qg.createNativeAd({
						posId: e[vivoUtil.yuanshengIndex]
					});
					t.onLoad(function(e) {
						t.offLoad(), t.reportAdShow({
							adId: e.adList[0].adId
						}), vivoUtil.yuanshengADK && vivoUtil.yuanshengADK.destroy(), vivoUtil.yuanshengADK = yuansheng.createBanner(e.adList[0].imgUrlList[0], function() {
							vivoUtil.yuanshengADK = null
						}, function() {
							t.reportAdClick({
								adId: e.adList[0].adId
							}), vivoUtil.yuanshengADK = null
						})
					}), t.onError(function(e) {
						console.log(JSON.stringify(e)), vivoUtil.showBanner()
					}), t.load()
				}
			},
			createNativead: function() {
				if (vivoUtil.clearAD(), window.closeBtnScale > .9 && Math.random() < .5) vivoUtil.showChaping();
				else if (qg.createCustomAd) {
					var e = qg.getSystemInfoSync().screenHeight / 2,
						t = 0;
					qg.getSystemInfoSync().screenWidth > qg.getSystemInfoSync().screenHeight && (e = qg.getSystemInfoSync().screenHeight / 4, t = qg.getSystemInfoSync().screenWidth / 4), vivoUtil.mobanAD = qg.createCustomAd({
						posId: vivoConfig.mobanID,
						style: {
							top: e,
							left: t
						}
					}), vivoUtil.mobanAD.onError(function(e) {
						vivoUtil.showChaping(), vivoUtil.mobanAD = null, console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e)
					}), vivoUtil.mobanAD.show().then(function() {
						console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
					}).catch(function(e) {
						vivoUtil.mobanAD = null, console.log("\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(e)), vivoUtil.showChaping()
					}), vivoUtil.mobanAD.onClose(function() {
						vivoUtil.mobanAD = null
					})
				}
			},
			showzhuomian: function() {
				window.vivo && qg.hasShortcutInstalled({
					success: function(e) {
						0 == e && qg.installShortcut({
							success: function() {},
							fail: function() {},
							complete: function() {}
						})
					},
					fail: function() {},
					complete: function() {}
				})
			}
		}, cc.sys.platform == cc.sys.VIVO_GAME ? window.vivo = !0 : cc.sys.platform == cc.sys.HUAWEI_GAME && (window.huawei = !0), window.vivo && setTimeout(function() {
			window.vivoUtil.ADInit()
		}, 1), cc._RF.pop()
	}, {}],
	wxUtil: [function(e, t) {
		"use strict";
		cc._RF.push(t, "58b36Z3KDhF2bKUw2VuVPDN", "wxUtil"), window.wxUtil = {
			wx_bannerID: "",
			wx_videoID: "",
			wx_chapingID: "",
			wx_juzhenID: "",
			videoAd: null,
			bannerAd: null,
			adCallBack_success: null,
			adCallBack_faile: null,
			sceneTrue: function() {
				var e = wx.getLaunchOptionsSync().scene;
				if (!ext.sceneID) return !1;
				for (var t = ext.sceneID, n = 0; n < t.length; n++)
					if (e == t[n]) return !0;
				return !1
			},
			ADInit: function() {
				window.weixin && (wxUtil.videoAd = wx.createRewardedVideoAd({
					adUnitId: wxUtil.wx_videoID
				}), wxUtil.videoAd.load(), wxUtil.videoAd.onClose(function(e) {
					1 == e.isEnded ? (cc.audioEngine.resumeAll(), cc.director.resume(), wxUtil.AdSuccess()) : (cc.audioEngine.resumeAll(), cc.director.resume(), wxUtil.AdFaild(), wx.showToast({
						title: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01",
						icon: "none",
						duration: 1e3,
						success: function(e) {
							console.log("" + e)
						},
						fail: function() {
							console.log("showToast\u8c03\u7528\u5931\u8d25")
						}
					}))
				}), wxUtil.videoAd.onError(function() {}))
			},
			AdFaild: function() {
				wxUtil.adCallBack_faile && (wxUtil.adCallBack_faile(), wxUtil.adCallBack_faile = null, wxUtil.adCallBack_success = null)
			},
			AdSuccess: function() {
				wxUtil.adCallBack_success && (wxUtil.adCallBack_success(), wxUtil.adCallBack_success = null, wxUtil.adCallBack_faile = null)
			},
			showVideo: function(e, t) {
				window.weixin ? (wxUtil.adCallBack_success = e, wxUtil.adCallBack_faile = t, "" != wxUtil.wx_videoID ? (null == wxUtil.videoAd && wxUtil.ADInit(), cc.audioEngine.pauseAll(), cc.director.pause(), wxUtil.videoAd.show().then(function() {
					return console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
				}).catch(function() {
					wxUtil.videoAd.load().then(function() {
						return wxUtil.videoAd.show()
					}).catch(function() {
						console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"), wx.showToast({
							title: "\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",
							icon: "none",
							duration: 1e3,
							success: function(e) {
								console.log("" + e)
							},
							fail: function() {
								console.log("showToast \u8c03\u7528\u5931\u8d25")
							}
						}), cc.audioEngine.resumeAll(), cc.director.resume()
					})
				})) : (cc.audioEngine.resumeAll(), cc.director.resume(), wxUtil.AdSuccess())) : e()
			},
			showBanner: function() {
				window.weixin && "" != wxUtil.wx_bannerID && ((null != wxUtil.bannerAd || wxUtil.bannerAd) && (wxUtil.bannerAd.destroy(), wxUtil.bannerAd = null), wxUtil.bannerAd = wx.createBannerAd({
					adUnitId: wxUtil.wx_bannerID,
					style: {
						left: 0,
						top: wx.getSystemInfoSync().screenHeight - 125,
						width: wx.getSystemInfoSync().screenWidth
					}
				}), wxUtil.bannerAd.onError(function() {}), wxUtil.bannerAd.show())
			},
			hideBanner: function() {
				window.weixin && (null != wxUtil.bannerAd || wxUtil.bannerAd) && (wxUtil.bannerAd.destroy(), wxUtil.bannerAd = null)
			},
			showChaPing: function() {
				if (window.weixin)
					if (100 * Math.random() < pushBoxgl) wxUtil.showJuzhen();
					else if ("" != wxUtil.wx_chapingID) {
					var e = null;
					wx.createInterstitialAd && (e = wx.createInterstitialAd({
						adUnitId: wxUtil.wx_chapingID
					})), e && (e.show().catch(function(e) {
						console.error(e)
					}), e.onError(function(e) {
						console.log(e)
					}), e.onClose(function() {
						console.log("\u63d2\u5c4f \u5e7f\u544a\u5173\u95ed")
					}))
				}
			},
			showJuzhen: function() {
				var e = arguments;
				if ("" != wxUtil.wx_juzhenID) {
					var t = wx.createCustomAd({
						adUnitId: wxUtil.wx_juzhenID,
						style: {
							left: 0,
							top: wx.getSystemInfoSync().windowHeight / 2 - 250,
							fixed: !1
						}
					});
					t.onError(function() {
						1 != e[0] && wxUtil.showChaPing(!0)
					}), t.show()
				}
			},
			share: function(e, t) {
				window.wxShareUtil.shareTo(e, t)
			}
		}, window.wxShareUtil = {
			share_successF: null,
			share_failF: null,
			GAME_SHARE_NOW: !1,
			share_startTime: 0,
			share_MaxTime: 0,
			initShare: function() {
				if (window.weixin && window.weixin) {
					var e = wxShareUtil.getShareData();
					if (!e || void 0 === e.title) return console.log("sdk share page....no data"), !1;
					wx.showShareMenu({
						withShareTicket: !0
					}), wx.onShareAppMessage(function() {
						return e
					}), wx.onShow(function(e) {
						if (console.log("\u663e\u793a:" + JSON.stringify(e)), wxShareUtil.GAME_SHARE_NOW) {
							wxShareUtil.GAME_SHARE_NOW = !1;
							var t = (new Date).valueOf() - wxShareUtil.share_startTime;
							console.log(t + "...\u82b1\u8d39\u65f6\u95f4"), t > 1e3 * wxShareUtil.share_MaxTime ? (wxShareUtil.shareCount++, console.log("\u5206\u4eab\u6210\u529f"), null != wxShareUtil.share_successF && (wxShareUtil.share_successF(), wxShareUtil.share_successF = null)) : (console.log("\u5206\u4eab\u5931\u8d251"), null != wxShareUtil.share_failF && (wxShareUtil.share_failF(), wxShareUtil.share_failF = null))
						}
					}), wx.onHide(function() {
						wxShareUtil.GAME_SHARE_NOW
					})
				}
			},
			getShareData: function() {
				var e = wxShareUtil.RandomInt(0, wxConfig._randomShareDatas.length);
				return e >= wxConfig._randomShareDatas.length && e--, wxConfig._randomShareDatas[e]
			},
			RandomInt: function(e, t) {
				return (t += 1) == e && (t = e, mid = 0), e + Math.floor(Math.random() * (t - e))
			},
			shareTo: function(e, t) {
				if (window.weixin) {
					var n = wxShareUtil.getShareData();
					wxShareUtil.share_successF = null, wxShareUtil.share_failF = null, wxShareUtil.GAME_SHARE_NOW = !0, wxShareUtil.share_successF = e, wxShareUtil.share_failF = t, window.weixin ? (wxShareUtil.share_MaxTime = wxShareUtil.getShareTime(), wxShareUtil.share_startTime = (new Date).valueOf(), wx.shareAppMessage(n)) : e && e()
				}
			},
			shareCount: 0,
			getShareTime: function() {
				return wxShareUtil.shareCount <= 0 ? 3 : wxShareUtil.shareCount >= 1 && wxShareUtil.shareCount <= 2 ? 3.5 : wxShareUtil.shareCount >= 3 && wxShareUtil.shareCount <= 4 ? 4 : wxShareUtil.shareCount >= 5 && wxShareUtil.shareCount <= 6 ? 4.5 : wxShareUtil.shareCount >= 7 && wxShareUtil.shareCount <= 8 ? 5 : wxShareUtil.shareCount >= 9 && wxShareUtil.shareCount <= 10 ? 5.5 : 6
			}
		}, window.tt || window.ks || window.qq || window.wx && (window.weixin = !0), wxShareUtil.initShare(), cc._RF.pop()
	}, {}],
	yinsixieyi: [function(e, t) {
		"use strict";
		cc._RF.push(t, "9d6a3Q4IixDGoKUOtKb7KUi", "yinsixieyi"), window.showYS = 0, cc.Class({
			extends: cc.Component,
			properties: {
				YES: cc.Node,
				NO: cc.Node,
				close: cc.Node,
				gameName: cc.Label,
				gongsiName: {
					default: [],
					type: [cc.Label]
				},
				lxr: {
					default: [],
					type: [cc.Label]
				},
				yonghuView: cc.Node,
				yinsiView: cc.Node
			},
			onLoad: function() {
				if (1 != window.showYS ? (this.YES.active = !0, this.NO.active = !0, this.close.active = !1) : (this.YES.active = !1, this.NO.active = !1, this.close.active = !0), this.gameName && (this.gameName.string = "\u300a" + window.GAME_NAME + "\u300b\u670d\u52a1\u534f\u8bae\u9690\u79c1\u653f\u7b56\u6761\u6b3e:"), this.gongsiName.length > 0)
					for (var e = 0; e < this.gongsiName.length; e++) this.gongsiName[e].string = window.GONGSI_NAME
			},
			start: function() {
				if (window.huawei)
					for (var e = 0; e < this.lxr.length; e++) this.lxr[e].node.active = !1;
				if (1 == window.showYS && window.huawei) {
					var t = new cc.Node;
					t.parent = this.node, t.y = -150, t.width = 120, t.height = 50;
					var n = new cc.Node;
					n.parent = t, n.addComponent(cc.Label).string = "\u6ce8\u9500\u8d26\u53f7", n.color = new cc.Color(255, 0, 0), t.on(cc.Node.EventType.TOUCH_END, function() {
						cc.sys.localStorage.clear(), cc.sys.localStorage.setItem("showYS", 0), cc.game.end()
					}, this)
				}
			},
			tongyiCB: function() {
				window.showYS = 1, cc.sys.localStorage.setItem("showYS", 1), this.node.destroy(), window.jiankangzhonggao && window.jiankangzhonggao.loadGame()
			},
			jujueCB: function() {
				ext.yinsiQuit ? this.tongyiCB() : window.vivo ? qg.exitApplication() : window.qq ? qq.exitMiniProgram() : cc.game.end()
			},
			yonghuxieyi: function() {
				this.yonghuView.active = !0
			},
			yinsizhengce: function() {
				this.yinsiView.active = !0
			},
			closeYonghu: function() {
				this.yonghuView.active = !1
			},
			closeYinsi: function() {
				this.yinsiView.active = !1
			}
		}), cc._RF.pop()
	}, {}],
	yszcButton: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c373cCUhuhMH5MCzZvp5mVV", "yszcButton"), cc.Class({
			extends: cc.Component,
			properties: {
				defNode: cc.Node,
				qqNode: cc.Node
			},
			start: function() {
				window.qq ? (this.qqNode.active = !0, this.defNode.active = !1) : (this.qqNode.active = !1, this.defNode.active = !0), window.showYS = cc.sys.localStorage.getItem("showYS"), window.qg || window.qq || window.mgtvGameSdk ? (this.node.active = !0, 1 != window.showYS && cc.loader.loadRes("ysxy/ysxy", cc.Prefab, function(e, t) {
					var n = cc.instantiate(t);
					n.parent = cc.find("Canvas"), n.zIndex = 1e5, n.position = cc.v2(0, 0)
				}.bind(this))) : this.node.active = !0
			},
			ysButtonCB: function() {
				cc.loader.loadRes("ysxy/ysxy", cc.Prefab, function(e, t) {
					var n = cc.instantiate(t);
					n.parent = cc.find("Canvas"), n.zIndex = 1e5, n.position = cc.v2(0, 0), window.showYS = 1
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {}]
}, {}, ["AudioManager", "DressInfo", "GlobalManager", "PKMode", "PkBtnControl", "ScoreLabel", "BodyChange", "BodySave", "bagControl", "hairControl", "headwearControl", "jewelryControl", "onePieceControl", "homeControl", "ItemAD", "Items", "layoutContentControl", "layoutGridContenControl", "menuScrollViewControl", "startControl", "layout", "suitMode", "theme", "themeLabel", "showYS", "yinsixieyi", "yszcButton", "SDKconfig", "YS", "YSButton", "jiankangzhonggao", "ecpm1", "ecpm", "Huawei", "KsUtil", "MGTVUtill", "OppoTools", "SDK", "TD", "TDHttps", "TTGameConfig", "TouTiaoTools", "UCUtil", "qqUtil", "vivoUtil", "wxUtil"]);