! function(t, e, i) {
	"use strict";
	var n = function(t) {
			function e(e, i, n, o) {
				t.call(this), this.$ = e, this.root = i, this.commonData = n, this.gameData = o
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.startGame = function() {
				this.root.emit("startGame")
			}, e.prototype.nextScene = function() {
				this.root.emit("nextScene")
			}, e.prototype.reloadScene = function() {
				this.root.emit("reloadScene")
			}, e.prototype.playGame = function() {
				this.root.emit("playGame")
			}, e.prototype.quitGame = function() {
				this.root.emit("quitGame")
			}, e.prototype.sendScore = function() {
				this.root.emit("sendScore")
			}, e
		}(t.Container),
		o = function(t) {
			function i(i) {
				t.call(this), this.addChild(new e.Sprite(i.resources.images["background.png"]))
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i
		}(t.Container),
		r = function(t) {
			function i(i, n, o) {
				var r = this;
				void 0 === o && (o = 0), t.call(this), this.graphic = new e.Graphics, this.graphic.beginFill(16777215), this.graphic.drawRect(0, 0, i.vars.additional.width, i.vars.additional.height), this.graphic.endFill(), this.graphic.tint = n, this.graphic.alpha = o, this.on("pointertap", (function(t) {
					r.emit("tap", t.data.getLocalPosition(r.graphic))
				})), this.addChild(this.graphic)
			}
			t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
			var n = {
				blendMode: {
					configurable: !0
				}
			};
			return i.prototype.fadeIn = function(t, e, i) {
				var n = this;
				void 0 === e && (e = 1), void 0 === i && (i = function() {}), this.task.clear("fade"), this.task.on("fade", (function(o) {
					var r = o.delta / 60 / t;
					if (n.graphic.alpha + r >= e) return n.task.clear("fade"), n.graphic.alpha = e, void i();
					n.graphic.alpha += r
				}))
			}, i.prototype.fadeOut = function(t, e, i) {
				var n = this;
				void 0 === e && (e = 0), void 0 === i && (i = function() {}), this.task.clear("fade"), this.task.on("fade", (function(o) {
					var r = o.delta / 60 / t;
					if (n.graphic.alpha - r <= e) return n.task.clear("fade"), n.graphic.alpha = e, void i();
					n.graphic.alpha -= r
				}))
			}, n.blendMode.set = function(t) {
				var i;
				switch (t) {
					default:
						i = e.BLEND_MODES.NORMAL;
						break;
					case "add":
						i = e.BLEND_MODES.ADD;
						break;
					case "multiply":
						i = e.BLEND_MODES.MULTIPLY;
						break;
					case "screen":
						i = e.BLEND_MODES.SCREEN
				}
				this.graphic.blendMode = i
			}, Object.defineProperties(i.prototype, n), i
		}(t.Container),
		s = function() {};
	s.play = function(t, e, i, n) {
		void 0 === i && (i = 1), void 0 === n && (n = 1), t.vars.additional.sound && (t.resources.sounds[e].volume(i), t.resources.sounds[e].rate(n), t.resources.sounds[e].play())
	}, s.stop = function(t, e) {
		t.resources.sounds[e].stop()
	}, s.playBGM = function(t, e, i) {
		void 0 === i && (i = 1), s.stop(t, e), t.vars.additional.sound && (t.resources.sounds[e].loop(!0), t.resources.sounds[e].volume(i), t.resources.sounds[e].play())
	}, s.pauseMuteBGM = function(t, e) {
		t.resources.sounds[e].volume(0)
	}, s.playMuteBGM = function(t, e, i) {
		void 0 === i && (i = 1), t.resources.sounds[e].volume(i)
	};
	var a = function(t) {
			function i(i, n, o) {
				void 0 === o && (o = e.Texture.EMPTY);
				var r = new e.Sprite(n);
				t.call(this, i, r), this.onTexture = e.Texture.EMPTY, this.offTexture = e.Texture.EMPTY, this.isToggleButton = !1, this.toggle = !1, this.sprite = r, o != e.Texture.EMPTY && (this.isToggleButton = !0, this.toggle = !0, this.onTexture = n, this.offTexture = o)
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.getToggle = function() {
				return this.toggle
			}, i.prototype.setToggle = function(t) {
				this.toggle = t, this.sprite.texture = t ? this.onTexture : this.offTexture
			}, i.prototype.switchToggle = function() {
				var t = !this.toggle;
				return this.setToggle(t), t
			}, i.prototype.setEnable = function(t) {
				this.enable = t;
				var i = function(n) {
					n instanceof e.Sprite && (n.tint = t ? 16777215 : 7368816), n.children.forEach((function(t) {
						t instanceof e.Container && i(t)
					}))
				};
				i(this.sprite)
			}, i
		}(function(t) {
			function i(i, n) {
				var o = this;
				t.call(this), this.enable = !0, this.target = n, this.target.pivot.set(this.target.width / 2, this.target.height / 2), this.collider = new e.Graphics, this.collider.beginFill(255, .4), this.collider.drawRect(-this.target.width / 2, -this.target.height / 2, this.target.width, this.target.height), this.collider.endFill(), this.collider.alpha = 0;
				var r = !1,
					a = 0;
				this.collider.interactive = !0, this.collider.on("pointertap", (function() {
					o.enable && (o.emit("buttontap"), s.play(i, "button"), o.pointerTap())
				})), this.collider.on("pointerdown", (function() {
					o.enable && (r = !0, o.pointerDown())
				})), this.collider.on("pointerup", (function() {
					r = !1, o.pointerUp()
				})), this.collider.on("pointerupoutside", (function() {
					r = !1, o.pointerUp()
				}));
				this.task.on("buttonAnimationTask", (function(t) {
					var e = t.delta,
						i = a / 5;
					o.target.scale.set(1 - i * (1 - .85)), a = r ? a < 5 ? a + e : 5 : a > 0 ? a - e : 0
				})), this.addChild(this.target), this.addChild(this.collider)
			}
			t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
			var n = {
				pressable: {
					configurable: !0
				},
				showCollider: {
					configurable: !0
				}
			};
			return i.prototype.getEnable = function() {
				return this.enable
			}, i.prototype.setEnable = function(t) {
				this.enable = t
			}, n.pressable.set = function(t) {
				this.collider.interactive = t
			}, n.showCollider.set = function(t) {
				this.collider.alpha = t ? 1 : 0
			}, i.prototype.pointerTap = function() {}, i.prototype.pointerDown = function() {}, i.prototype.pointerUp = function() {}, Object.defineProperties(i.prototype, n), i
		}(t.Container)),
		h = function(t) {
			function e(e, i, n, s) {
				var h = this;
				t.call(this, e, i, n, s);
				var c = new r(e, 0, .8),
					p = new PIXI.Sprite(e.resources.images.asobikata);
				p.anchor.set(.5), p.x = e.vars.additional.width / 2, p.y = e.vars.additional.height / 2 - 50, this.next = new a(e, e.resources.spritesheets.text["next_button.png"]), this.next.x = e.vars.additional.width / 2, this.next.y = .925 * e.vars.additional.height, this.next.on("buttontap", (function() {
					h.startGame()
				})), this.addChild(new o(e)), this.addChild(c), this.addChild(p), this.addChild(this.next)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(n),
		c = function(t) {
			function i(i, n, o, r) {
				t.call(this);
				var s = i.vars.env.languages;
				if (!(s.length < 2)) {
					var a = new p(i, i.resources.spritesheets.langui.button, i.resources.spritesheets.langui.close);
					a.scale.set(.8);
					var h = a.width / 2 + o,
						c = a.height / 2 + r;
					o <= 0 && (h = i.vars.additional.width - a.width / 2 + o), r <= 0 && (c = i.vars.additional.height - a.height / 2 + r), a.position.set(h, c);
					var u = new e.Graphics;
					u.beginFill(0, .75), u.drawRect(0, 0, i.vars.additional.width, i.vars.additional.height), u.endFill(), u.interactive = !0;
					for (var l = new e.Sprite(i.resources.spritesheets.langui.pop), d = new e.Sprite(i.resources.spritesheets.langui.title), f = i.vars.api.getLanguage(), v = [], m = function(t) {
							var o = s[t],
								r = f == o,
								a = new p(i, i.resources.spritesheets.langui[r ? "select" : "other"]),
								h = new e.Sprite(i.resources.spritesheets.lang[o]);
							h.anchor.set(.5);
							a.y = 180 * (t - (s.length - 1) / 2), a.on("buttontap", (function() {
								r || n.emit("changeLang", o)
							})), a.sprite.addChild(h), v.push(a)
						}, g = 0; g < s.length; g++) m(g);
					l.anchor.set(.5), d.anchor.set(.5), l.scale.set(.8), l.position.set(i.vars.additional.width / 2, i.vars.additional.height / 2), d.y = -380, u.visible = !1, l.visible = !1, a.on("buttontap", (function() {
						var t = !a.switchToggle();
						u.visible = t, l.visible = t
					})), this.addChild(u), this.addChild(a), l.addChild(d), this.addChild(l);
					for (var y = 0; y < v.length; y++) l.addChild(v[y]);
					return this
				}
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i
		}(t.Container),
		p = function(t) {
			function i(i, n, o) {
				var r = this;
				void 0 === o && (o = e.Texture.EMPTY), t.call(this), this.onTexture = e.Texture.EMPTY, this.offTexture = e.Texture.EMPTY, this.enable = !0, this._toggle = !1, this.sprite = new e.Sprite(n), this.sprite.anchor.set(.5), this.collider = new e.Graphics, this.collider.beginFill(255, .4), this.collider.drawRect(-this.sprite.width / 2, -this.sprite.height / 2, this.sprite.width, this.sprite.height), this.collider.endFill(), this.collider.alpha = 0, o != e.Texture.EMPTY && (this._toggle = !0, this.onTexture = n, this.offTexture = o);
				var a = !1,
					h = 0;
				this.collider.interactive = !0, this.collider.on("pointertap", (function() {
					r.enable && (r.emit("buttontap"), s.play(i, "button"))
				})), this.collider.on("pointerdown", (function() {
					r.enable && (a = !0)
				})), this.collider.on("pointerup", (function() {
					a = !1
				})), this.collider.on("pointerupoutside", (function() {
					a = !1
				}));
				this.task.on("buttonAnimationTask", (function(t) {
					var e = t.delta,
						i = h / 5;
					r.sprite.scale.set(1 - i * (1 - .85)), h = a ? h < 5 ? h + e : 5 : h > 0 ? h - e : 0
				})), this.addChild(this.sprite), this.addChild(this.collider)
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.switchToggle = function() {
				var t = !this._toggle;
				return this._toggle = t, this.sprite.texture = t ? this.onTexture : this.offTexture, t
			}, i
		}(t.Container),
		u = function(t) {
			function i(i, n, o, r, s) {
				void 0 === r && (r = 0), void 0 === s && (s = 30), t.call(this);
				var a = new e.Point(2 * i.width, 2 * i.height),
					h = new e.Text("" + i.vars.env.version, new e.TextStyle({
						fill: r,
						fontSize: s
					}));
				h.position.set(a.x * n, a.y * o), h.pivot.set(h.width * n, h.height * o), this.addChild(h)
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i
		}(t.Container),
		l = function() {};
	l.timeout = function(t, e, i, n) {
		void 0 === n && (n = null);
		var o = null == n ? Math.random().toString(16).substring(2, 10) : n,
			r = 0;
		t.task.clear(o), t.task.on(o, (function(n) {
			if (r >= i) return t.task.clear(o), void e();
			r += n.delta / 60
		}))
	}, l.tween = function(t, e, i, n, o, r, s, a, h, c) {
		void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === o && (o = 1), void 0 === r && (r = function() {}), void 0 === s && (s = function(t) {
			return t
		}), void 0 === a && (a = function() {}), void 0 === h && (h = 1), void 0 === c && (c = !0);
		var p = null == e ? Math.random().toString(16).substring(2, 10) : e,
			u = 0,
			d = i,
			f = n;
		t.task.clear(p), r(d), t.task.on(p, (function(e) {
			var i = function(t, e, i) {
				return e < t ? t : e > i ? i : e
			}(0, function(t) {
				return c ? 1 - Math.abs(1 - t / 2 % 1 * 2) : t % 1
			}(u / o), 1);
			if (0 !== h && u >= o * h) return r(h % 2 == 1 ? f : d), t.task.clear(p), void a();
			r(function(t) {
				return t * (f - d) + d
			}(s(i))), u += e.delta / 60 * l.speed
		}))
	}, l.move = function(t, e, i, n, o, r, s, a, h, c) {
		void 0 === r && (r = 1), void 0 === s && (s = function(t) {
			return t
		}), void 0 === a && (a = function() {}), void 0 === h && (h = 1), void 0 === c && (c = !0);
		var p = n.clone(),
			u = o.clone();
		l.tween(t, i, 0, 1, r, (function(t) {
			e.x = u.x * t + p.x * (1 - t), e.y = u.y * t + p.y * (1 - t)
		}), s, a, h, c)
	}, l.vector = function(t, e, i, n, o, r, s, a, h) {
		void 0 === o && (o = 1), void 0 === r && (r = function(t) {
			return t
		}), void 0 === s && (s = function() {}), void 0 === a && (a = 1), void 0 === h && (h = !0);
		var c = e.position.clone(),
			p = e.position.clone();
		p.x += n.x, p.y += n.y, l.move(t, e, i, c, p, o, r, s, a, h)
	}, l.moveTo = function(t, e, i, n, o, r, s, a, h) {
		void 0 === o && (o = 1), void 0 === r && (r = function(t) {
			return t
		}), void 0 === s && (s = function() {}), void 0 === a && (a = 1), void 0 === h && (h = !0);
		var c = e.position.clone();
		l.move(t, e, i, c, n, o, r, s, a, h)
	}, l.scale = function(t, e, i, n, o, r, s, a, h, c) {
		void 0 === r && (r = 1), void 0 === s && (s = function(t) {
			return t
		}), void 0 === a && (a = function() {}), void 0 === h && (h = 1), void 0 === c && (c = !0), l.tween(t, i, n, o, r, (function(t) {
			return e.scale.set(t)
		}), s, a, h, c)
	}, l.alpha = function(t, e, i, n, o, r, s, a, h, c) {
		void 0 === r && (r = 1), void 0 === s && (s = function(t) {
			return t
		}), void 0 === a && (a = function() {}), void 0 === h && (h = 1), void 0 === c && (c = !0), l.tween(t, i, n, o, r, (function(t) {
			return e.alpha = t
		}), s, a, h, c)
	}, l.speed = 1, l.Ease = {
		linear: function(t) {
			return t
		},
		accel: function(t) {
			return Math.pow(t, 2)
		},
		decel: function(t) {
			return -Math.pow(t, 2) + 2 * t
		},
		cubic: function(t) {
			return -2 * Math.pow(t, 3) + 3 * Math.pow(t, 2)
		},
		stay: function(t) {
			return 4 * Math.pow(t, 3) - 6 * Math.pow(t, 2) + 3 * t
		},
		cosine: function(t) {
			return .5 * (Math.cos(Math.PI * (t - 1)) + 1)
		},
		quadratic: function(t) {
			return function(e) {
				return t * e * e + (1 - t) * e
			}
		},
		inflection: function(t, e) {
			var i = 3 * (1 - e) / (3 * t * t - 3 * t + 1),
				n = i / 3,
				o = -i * t,
				r = i * t * t + e;
			return function(t) {
				return n * t * t * t + o * t * t + r * t
			}
		}
	};
	var d = function(t) {
		function e(i, n) {
			t.call(this), this.$ = i, this.id = n;
			var o = i.resources.spritesheets.item["item_" + e.ID_TABLE[n] + ".png"];
			this.sprite = new PIXI.Sprite(o), this.sprite.anchor.set(.5), this.sprite.scale.set(e.SCALE), this.shadowSprite = new PIXI.Sprite(o), this.shadowSprite.anchor.set(.5), this.shadowSprite.scale.set(e.SCALE), this.shadowSprite.tint = 0, this.shadowSprite.alpha = .3, this.black = new PIXI.Sprite(o), this.black.anchor.set(.5), this.black.scale.set(e.SCALE), this.black.tint = 0, this.black.alpha = 0, this.addChild(this.shadowSprite), this.addChild(this.sprite), this.addChild(this.black)
		}
		t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
		var i = {
			shadow: {
				configurable: !0
			},
			shade: {
				configurable: !0
			}
		};
		return e.prototype.bound = function(t) {
			void 0 === t && (t = function() {}), l.vector(this, this, "move", new PIXI.Point(0, -8 * this.scale.x), .025, l.Ease.linear, t, 4)
		}, e.prototype.expand = function(t) {
			void 0 === t && (t = function() {}), l.scale(this, this, "scale", 1, 1.2, .125, l.Ease.linear, t, 2)
		}, i.shadow.set = function(t) {
			this.shadowSprite.visible = 0 !== t, this.shadowSprite.x = 5 * t
		}, i.shade.get = function() {
			return this.black.alpha
		}, i.shade.set = function(t) {
			this.black.alpha = t
		}, Object.defineProperties(e.prototype, i), e
	}(t.Container);
	d.ID_TABLE = [], d.SCALE = .55;
	var f = function(t) {
			function e(e) {
				var i = this;
				t.call(this);
				var n = new PIXI.Container;
				n.scale.set(.35);
				for (var o = new PIXI.Sprite(e.resources.spritesheets.game["item_hikari3.png"]), r = new PIXI.Sprite(e.resources.spritesheets.game["item_hikari.png"]), s = [], a = 0; a < 8; a++) {
					var h = new PIXI.Sprite(e.resources.spritesheets.game["item_hikari2.png"]);
					h.anchor.set(.5), h.scale.set(.3);
					var c = a / 8 * Math.PI * 2;
					h.position = new PIXI.Point(110 * Math.cos(c), 110 * Math.sin(c)), s.push(h)
				}
				o.anchor.set(.5), r.anchor.set(.5), r.alpha = 0, l.scale(this, o, "ball_scale", .2, 1, .1, l.Ease.linear, (function() {
					l.alpha(i, o, "ball_alpha", 1, 0, .1);
					for (var t = 0; t < 8; t++) {
						var e = s[t],
							n = t / 8 * Math.PI * 2,
							a = new PIXI.Point(30 * Math.cos(n), 30 * Math.sin(n));
						l.scale(i, e, "star_scale" + t, .3, .1, .4, l.Ease.accel), l.vector(i, e, "star_move" + t, a, .4, l.Ease.decel)
					}
					l.scale(i, r, "bubble_scale", 1, 1.5, .4, l.Ease.decel), l.alpha(i, r, "bubble_alpha", 1, 0, .4, l.Ease.accel, (function() {
						i.task.clear(), i.destroy()
					}))
				})), r.addChild.apply(r, s), n.addChild(r), n.addChild(o), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(t.Container),
		v = function(t) {
			function e(e, i, n, o, r) {
				t.call(this), this.$ = e, this.board = i, this.id = n, this.items = o, this.depth = r;
				var s = this.id % 2;
				this.collider = new PIXI.Graphics, this.collider.beginFill(255, .35), this.collider.drawRect(0, 0, 350, 125), this.collider.endFill(), this.collider.alpha = 0, this.box = new PIXI.Sprite(e.resources.spritesheets.game["item_box.png"]), this.box.anchor.set(.5, 1), this.box.position.set(this.collider.width / 2 - 20 * (1 - 2 * s), this.collider.height), this.shelf = new PIXI.Sprite(e.resources.spritesheets.game[1 === s ? "shelf_r.png" : "shelf_l.png"]), this.shelf.y = this.box.height + 35, this.addChild(this.collider), this.addChild(this.box), this.addChild(this.shelf), this.pivot.set(s * this.collider.width, this.collider.height), this.x = s * e.vars.additional.width
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				enable: {
					configurable: !0
				},
				shelfEnable: {
					configurable: !0
				},
				filled: {
					configurable: !0
				},
				complete: {
					configurable: !0
				},
				clear: {
					configurable: !0
				},
				empty: {
					configurable: !0
				},
				space: {
					configurable: !0
				},
				count: {
					configurable: !0
				},
				top: {
					configurable: !0
				},
				topCount: {
					configurable: !0
				}
			};
			return e.prototype.getItemPos = function(t) {
				var e = 1 - this.id % 2 * 2,
					i = this.position.clone();
				return i.x += 46.5 * e + e * t * 70, i
			}, e.prototype.clearEffect = function(t, e) {
				var i = this;
				void 0 === t && (t = function() {}), void 0 === e && (e = !0);
				var n = this.board.itemContainer.getChildIndex(this.top);
				e && s.play(this.$, "sorted1");
				for (var o = function(o) {
						var r = i.items.length - 1 - o,
							a = i.items[r];
						setTimeout((function() {
							o > 0 && i.board.itemContainer.setChildIndex(a, n), a.expand((function() {
								for (var t = i.items.length - 1; t >= r; t--) i.board.itemContainer.setChildIndex(i.items[t], n - 4 + t)
							}))
						}), 100 * o), setTimeout((function() {
							e && 0 === o && s.play(i.$, "sorted2");
							var n = new f(i.$);
							n.position = a.position.clone(), i.board.effectContainer.addChild(n), setTimeout((function() {
								i.shelfEnable = !1, l.tween(a, null, 0, .65, .1, (function(t) {
									return a.shade = t
								}), l.Ease.linear, (function() {
									0 === o && t()
								}))
							}), 600)
						}), 500)
					}, r = 0; r < i.items.length; r++) o(r)
			}, e.prototype.addItem = function() {
				for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
				for (var i = 0; i < t.length; i++) {
					if (this.filled) return i;
					var n = new d(this.$, t[i]);
					this.decorateItem(n), this.items.push(n), this.board.itemContainer.addChild(n)
				}
				return this.board.refresh(), t.length
			}, e.prototype.decorateItem = function(t) {
				if (this.filled) return !1;
				var e = this.getItemPos(this.count);
				return e.y += -t.height / 2, t.position = e, t.shadow = this.id % 2 * 2 - 1, !0
			}, e.prototype.toEmpty = function() {
				for (var t = this.items.length - 1; t >= 0; t--) this.items[t].destroy(), this.items.pop()
			}, i.enable.get = function() {
				return this.interactive
			}, i.enable.set = function(t) {
				this.collider.tint = t ? 16777215 : 2105376, this.interactive = t, this.box.alpha = t ? 0 : 1, this.shelfEnable = t
			}, i.shelfEnable.set = function(t) {
				this.shelf.tint = t ? 16777215 : 6316128
			}, e.prototype.open = function() {
				l.vector(this, this.box, "box_move", new PIXI.Point(0, -20), .2), l.alpha(this, this.box, "box_alpha", 1, 0, .2)
			}, i.filled.get = function() {
				return this.count >= this.depth
			}, i.complete.get = function() {
				return !!this.filled && this.topCount === this.depth
			}, i.clear.get = function() {
				return this.empty || this.complete
			}, i.empty.get = function() {
				return 0 === this.count
			}, i.space.get = function() {
				return this.depth - this.count
			}, i.count.get = function() {
				return this.items.length
			}, i.top.get = function() {
				return this.items[this.items.length - 1]
			}, i.topCount.get = function() {
				if (this.empty) return 0;
				for (var t = 1, e = this.top.id, i = this.items.length - 2; i >= 0 && this.items[i].id === e; i--) t++;
				return t
			}, Object.defineProperties(e.prototype, i), e
		}(t.Container),
		m = function() {};
	m.Index = function(t) {
		return Math.floor(t.length * Math.random())
	};
	var g = function() {};
	g.shuffle = function(t) {
		for (var e = 0; e < t.length; e++) {
			var i = m.Index(t),
				n = t[i];
			t[i] = t[e], t[e] = n
		}
		return t
	}, g.rotate = function(t) {
		for (var e = [], i = 0; i < t[0].length; i++) {
			for (var n = [], o = 0; o < t.length; o++) n.push(t[t.length - 1 - o][i]);
			e.push(n)
		}
		return e
	}, g.mirror = function(t, e, i) {
		var n, o, r = g.clone2D(t);
		if (e)
			for (var s = 0; s < r.length; s++)
				for (var a = 0; a < Math.floor(r[0].length / 2); a++) {
					var h = r[0].length - 1 - a;
					n = [r[s][h], r[s][a]], r[s][a] = n[0], r[s][h] = n[1]
				}
		if (i)
			for (var c = 0; c < r[0].length; c++)
				for (var p = 0; p < Math.floor(r.length / 2); p++) {
					var u = r.length - 1 - p;
					o = [r[u][c], r[p][c]], r[p][c] = o[0], r[u][c] = o[1]
				}
		return r
	}, g.loop = function(t, e, i) {
		return t[e < i ? e : i + (e - i) % (t.length - i)]
	}, g.clone2D = function(t) {
		for (var e = [], i = 0; i < t.length; i++) e.push(t[i].concat());
		return e
	}, g.natural = function(t) {
		for (var e = [], i = 0; i < t; i++) e.push(i);
		return e
	}, g.array = function(t, e) {
		for (var i = [], n = 0; n < t; n++) {
			var o = e;
			i.push(o)
		}
		return i
	}, g.array2D = function(t, e, i) {
		for (var n = [], o = 0; o < e; o++) {
			for (var r = [], s = 0; s < t; s++) {
				var a = i;
				r.push(a)
			}
			n.push(r)
		}
		return n
	};
	var y = function() {};
	y.int = function(t, e) {
		return void 0 === e && (e = void 0), void 0 === e ? Math.floor((t + 1) * Math.random()) : Math.floor((e - t + 1) * Math.random() + t)
	}, y.float = function(t, e) {
		return void 0 === t && (t = 1), void 0 === e && (e = void 0), void 0 === e ? t * Math.random() : (e - t) * Math.random() + t
	}, y.array = function(t) {
		return t[Math.floor(t.length * Math.random())]
	}, y.sign = function() {
		return 2 * Math.floor(2 * Math.random()) - 1
	}, y.bool = function() {
		return Boolean(Math.floor(2 * Math.random()))
	}, y.weight = function(t) {
		var e = 0;
		t.forEach((function(t) {
			e += t
		}));
		for (var i = y.float(e), n = 0, o = 0; o < t.length && !(i <= (n += t[o])); o++);
		return o
	}, y.plusFloat = function(t) {
		t = Math.floor(Math.max(1, t));
		for (var e = Math.random(), i = 1; i < t; i++) e += Math.random();
		return e / t
	}, y.test = function(t, e, i) {
		void 0 === e && (e = 0), void 0 === i && (i = 1e5);
		for (var n, o = {}, r = 0; r < i; r++) {
			var s = t(),
				a = (n = s, e <= 0 ? (Math.floor(n / Math.pow(10, e)) * Math.pow(10, e)).toFixed(-e) : (Math.floor(n / Math.pow(10, e)) * Math.pow(10, e)).toString());
			a in o ? o[a]++ : o[a] = 1
		}
		var h = {};
		for (var c in o) h[c] = (o[c] / i * 100).toFixed(2) + "%"
	};
	var _ = function(t, e) {
		this.depth = e, this.models = this.convertBoard_numericalModel(t)
	};
	_.prototype.convertBoard_numericalModel = function(t) {
		for (var e = [], i = 0; i < t.inventorys.length; i++) {
			var n = 0;
			if (!t.inventorys[i].enable) break;
			for (var o = t.inventorys[i].items, r = 0; r < o.length; r++) n = 10 * n + o[r].id + 1;
			e.push(n)
		}
		return e
	}, _.prototype.solvePath = function() {
		return this.m_solve_pivotOnce(this.models)[0]
	}, _.prototype.m_solve_pivotOnce = function(t) {
		for (var e = [], i = t.length, n = [], o = 0; o < i; o++) {
			var r = t.concat(),
				s = r[o];
			if (!this.m_isEmpty(s) && !this.m_isOneColor(s)) {
				var a = this.m_getEmptysId(r);
				if (0 === a.length) break;
				var h = a[0],
					c = this.m_move(r[o], r[h]);
				r[o] = c.from, r[h] = c.to;
				var p = [{
					from: o,
					to: h
				}].concat(this.m_path_straight(r));
				if (this.m_isGameClear(r)) e.push(p);
				else {
					if (0 === this.m_getEmptysId(r).length) continue;
					n.push({
						models: r,
						path: p
					})
				}
			}
		}
		for (var u = 0; u < i; u++)
			for (var l = 0; l < i; l++) {
				var d = t.concat(),
					f = d[u];
				if (!this.m_isEmpty(f) && !this.m_isOneColor(f)) {
					var v = d[l];
					if (!this.m_isEmpty(v) && !this.m_isOneColor(v)) {
						var m = this.m_getEmptysId(d);
						if (m.length < 2) break;
						var g = m[0],
							y = m[1],
							_ = this.m_move(d[u], d[g]);
						d[u] = _.from, d[g] = _.to;
						var w = this.m_move(d[l], d[y]);
						d[l] = w.from, d[y] = w.to;
						var b = [{
							from: u,
							to: g
						}, {
							from: l,
							to: y
						}].concat(this.m_path_straight(d));
						if (this.m_isGameClear(d)) e.push(b);
						else {
							if (0 === this.m_getEmptysId(d).length) continue;
							n.push({
								models: d,
								path: b
							})
						}
					}
				}
			}
		for (var C = 0; C < n.length; C++)
			for (var I = 0; I < i; I++) {
				var x = n[C].models.concat(),
					P = x[I];
				if (!this.m_isEmpty(P) && !this.m_isOneColor(P)) {
					var E = this.m_getEmptysId(x);
					if (0 === E.length) break;
					var S = E[0],
						M = this.m_move(x[I], x[S]);
					x[I] = M.from, x[S] = M.to;
					var T = n[C].path.concat();
					T.push({
						from: I,
						to: S
					});
					var k = T.concat(this.m_path_straight(x));
					if (this.m_isGameClear(x)) e.push(k);
					else {
						if (0 === this.m_getEmptysId(x).length) continue;
						n.push({
							models: x,
							path: k
						})
					}
				}
			}
		return e.sort((function(t, e) {
			return t.length - e.length
		})), e
	}, _.prototype.m_path_straight = function(t) {
		for (var e = this, i = [];;) {
			for (var n = t.length, o = [], r = 0; r < n; r++) {
				var s = t[r];
				if (!this.m_isEmpty(s) && !this.m_isFill(s))
					for (var a = (r + 1) % n; a !== r; a = (a + 1) % n) {
						var h = t[a];
						if (this.m_moveableToNotEmpty(h, s)) {
							var c = {
								from: a,
								to: r
							};
							o.push(c)
						}
					}
			}
			if (0 === o.length) break;
			o.sort((function(i, n) {
				var o = t[i.from],
					r = t[i.to],
					s = t[n.from],
					a = t[n.to],
					h = e.m_isOneColor(a);
				if (e.m_isOneColor(r) !== h) return h ? 1 : -1;
				var c = e.m_space(r),
					p = e.m_space(a);
				if (c !== p) return p - c;
				var u = e.m_topCount(o),
					l = e.m_topCount(s);
				if (u !== l) return l - u;
				var d = e.m_topCount(r),
					f = e.m_topCount(a);
				if (d !== f) return f - d;
				var v = e.m_space(o),
					m = e.m_space(s);
				if (v !== m) return m - v;
				var g = e.m_nextMoveableToNotEmpty(s, t);
				return e.m_nextMoveableToNotEmpty(o, t) !== g ? g ? 1 : -1 : 0
			}));
			var p = o[0],
				u = this.m_move(t[p.from], t[p.to]);
			t[p.from] = u.from, t[p.to] = u.to, i.push(p)
		}
		return i
	}, _.prototype.m_shortest_startFrom = function(t) {
		for (var e = [], i = t.length, n = 0; n < i; n++) {
			var o = t[n];
			if (!this.m_isEmpty(o) && !this.m_isClear(o))
				for (var r = (n + 1) % i; r !== n; r = (r + 1) % i) {
					var s = t[r];
					if (this.m_moveable(o, s) && !this.m_isNonsense(o, s) && this.m_doubledEmptyId(t) !== r) {
						var a = {
							from: n,
							to: r
						};
						e.push([a])
					}
				}
		}
		for (var h = 0; h < 50; h++) {
			for (var c = [], p = 0; p < e.length; p++) {
				for (var u = e[p], l = t.concat(), d = 0; d < u.length; d++) {
					var f = u[d],
						v = this.m_move(l[f.from], l[f.to]);
					l[f.from] = v.from, l[f.to] = v.to
				}
				if (this.m_isGameClear(l)) return u;
				for (var m = 0; m < i; m++) {
					var g = l[m];
					if (!this.m_isEmpty(g) && !this.m_isClear(g)) {
						for (var y = [], _ = [], w = (m + 1) % i; w !== m; w = (w + 1) % i) {
							var b = l[w];
							if (this.m_moveable(g, b) && !this.m_isNonsense(g, b) && this.m_doubledEmptyId(t) !== m && (m !== u[u.length - 1].to || w !== u[u.length - 1].from)) {
								var C = {
										from: m,
										to: w
									},
									I = u.concat(C);
								this.m_isOneColor(b) ? _.push(I) : y.push(I)
							}
						}
						for (var x = _.length > 0 ? _ : y, P = 0; P < x.length; P++) c.push(x[P])
					}
				}
			}
			e = c
		}
		return []
	}, _.prototype.pow10 = function(t) {
		for (var e = 1, i = 0; i < t; i++) e *= 10;
		return e
	}, _.prototype.digit = function(t) {
		for (var e = 0; t >= 1; t /= 10) e++;
		return e
	}, _.prototype.m_move = function(t, e) {
		var i = this.pow10(this.m_topCount(t)),
			n = t % i;
		return {
			from: t = Math.floor(t / i),
			to: e = e * i + n
		}
	}, _.prototype.m_topId = function(t) {
		return t % 10
	}, _.prototype.m_topCount = function(t) {
		var e = this;
		if (this.m_isEmpty(t)) return 0;
		for (var i, n, o = 1, r = this.m_topId(t), s = 1; s < this.digit(t); s++) {
			if (i = t, n = s, Math.floor(i / e.pow10(n)) % 10 !== r) return o;
			o++
		}
		return o
	}, _.prototype.m_isEmpty = function(t) {
		return 0 === t
	}, _.prototype.m_space = function(t) {
		return this.depth - this.digit(t)
	}, _.prototype.m_isFill = function(t) {
		return this.digit(t) === this.depth
	}, _.prototype.m_isOneColor = function(t) {
		return !this.m_isEmpty(t) && this.m_topCount(t) === this.digit(t)
	}, _.prototype.m_isClear = function(t) {
		return this.m_isFill(t) && this.m_isOneColor(t)
	}, _.prototype.m_moveable = function(t, e) {
		return !this.m_isEmpty(t) && !this.m_isFill(e) && !this.m_isClear(t) && (this.m_isEmpty(e) || this.m_topId(t) === this.m_topId(e) && this.m_topCount(t) <= this.m_space(e))
	}, _.prototype.m_moveableToNotEmpty = function(t, e) {
		return !this.m_isEmpty(e) && this.m_moveable(t, e)
	}, _.prototype.m_next = function(t) {
		var e = this.pow10(this.m_topCount(t));
		return Math.floor(t / e)
	}, _.prototype.m_nextOneColor = function(t) {
		return this.m_isOneColor(this.m_next(t))
	}, _.prototype.m_nextMoveable = function(t, e) {
		var i = this;
		return e.some((function(e) {
			return i.m_moveable(i.m_next(t), e)
		}))
	}, _.prototype.m_nextMoveableToNotEmpty = function(t, e) {
		var i = this;
		return e.some((function(e) {
			return i.m_moveableToNotEmpty(i.m_next(t), e)
		}))
	}, _.prototype.m_isNonsense = function(t, e) {
		return this.m_isOneColor(t) && this.m_isEmpty(e)
	}, _.prototype.m_isGameClear = function(t) {
		var e = this;
		return t.every((function(t) {
			return e.m_isEmpty(t) || e.m_isClear(t)
		}))
	}, _.prototype.m_isStalemate = function(t) {
		for (var e = t.length, i = 0; i < e; i++)
			for (var n = t[i], o = (i + 1) % e; o !== i; o = (o + 1) % e) {
				var r = t[o];
				if (this.m_moveable(n, r)) return !1
			}
		return !0
	}, _.prototype.m_doubledEmptyId = function(t) {
		for (var e = 0, i = 0; i < t.length; i++)
			if (this.m_isEmpty(t[i]) && ++e >= 2) return i;
		return -1
	}, _.prototype.m_getEmptysId = function(t) {
		for (var e = [], i = 0; i < t.length; i++) this.m_isEmpty(t[i]) && e.push(i);
		return e
	};
	var w = function(t) {
		function e(i, n) {
			var o, r = this;
			void 0 === n && (n = !0), t.call(this), this.$ = i, this.inventorys = [], this.filled = 4, this.items = [], this.hand = [], this.historys = [], this.startState = [], this.taken = -1, this.moving = !1, this.prePoint = -1, this.alphaItems = [], this.takeHeight = 20;
			var a = new PIXI.Container;
			this.itemContainer = new PIXI.Container, this.alphaItemContainer = new PIXI.Container, this.alphaItemContainer.alpha = .3, this.effectContainer = new PIXI.Container, this.takePoint = new PIXI.Point(i.vars.additional.width / 2, i.vars.additional.height - 125), this.filled = e.STAGE.filled, this.opened = this.filled + 2;
			var h = new PIXI.Graphics;
			h.beginFill(255, .5), h.drawRect(-150, -100, 300, 200), h.endFill(), h.position = this.takePoint.clone(), h.alpha = 0, h.interactive = !0, this.cross = new PIXI.Sprite(i.resources.spritesheets.game["item_x.png"]), this.cross.anchor.set(.5), this.cross.alpha = 0;
			for (var c = function(t) {
					var n = [],
						o = new v(i, r, t, n, e.DEPTH);
					e.STAGE.filled < 9 ? o.y = t < 10 ? 425 + 145 * Math.floor(t / 2) : 280 : o.y = t % 2 == 0 ? 280 + 145 * Math.floor(t / 2) : t < 10 ? 425 + 145 * Math.floor(t / 2) : 280;
					var h = function() {
							r.prePoint >= 0 && (c(r.inventorys[r.prePoint]), r.prePoint = -1)
						},
						c = function(e) {
							if (!e.complete)
								if (r.moving) r.prePoint = t;
								else if (r.have)
								if (r.taken === e.id) r.putItems(e, h), r.emit("move");
								else if (e.empty || !e.filled && r.handTop.id === e.top.id) {
								var n = r.putItems(e, (function() {
										e.complete && (r.emit("clearEffectStart"), e.clearEffect((function() {
											r.emit("clearEffectEnd")
										}))), r.gameClear ? (r.emit("stopTimer"), setTimeout((function() {
											for (var t = !1, e = 0; e < r.inventorys.length; e++) {
												var i = r.inventorys[e];
												if (i.complete) {
													for (var n = function(t) {
															var e = i.items[t];
															l.tween(e, null, e.shade, 0, .2, (function(t) {
																return e.shade = t
															}))
														}, o = 0; o < i.items.length; o++) n(o);
													t ? i.clearEffect((function() {}), !1) : (t = !0, i.clearEffect((function() {
														r.emit("gameclear")
													})))
												}
											}
										}), 1500)) : h()
									})),
									o = {
										from: r.taken,
										to: e.id,
										count: n
									};
								r.writeHistory(o), r.emit("move")
							} else r.appearCross(e), s.play(i, "miss");
							else r.takeItems(e, e.topCount, h)
						};
					o.on("pointertap", (function() {
						c(o)
					})), o.enable = t < r.filled + 2, a.addChild(o), r.inventorys.push(o), r.items.push(n)
				}, p = 0; p < 12; p++) c(p);
			for (var u = 0; u < e.ORDER.length; u++)(o = this.inventorys[u]).addItem.apply(o, e.ORDER[u]);
			if (this.registerStartState(), n) {
				var d = new _(this, e.DEPTH).solvePath();
				this.solveLength = null == d ? 40 : d.length
			} else this.solveLength = 100;
			this.shadeItems = .65, h.on("pointertap", (function() {
				r.have && !r.moving && (r.putItems(r.inventorys[r.taken]), r.emit("move"))
			})), this.addChild(a), this.addChild(h), this.addChild(this.alphaItemContainer), this.addChild(this.itemContainer), this.addChild(this.cross), this.addChild(this.effectContainer)
		}
		t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
		var i = {
			have: {
				configurable: !0
			},
			handTop: {
				configurable: !0
			},
			gameClear: {
				configurable: !0
			},
			isFirst: {
				configurable: !0
			},
			pathCount: {
				configurable: !0
			},
			shadeItems: {
				configurable: !0
			}
		};
		return e.setRandomOrder = function(t, i) {
			for (var n, o = i.gotItem, r = [], s = 0; s < o.length; s++) "1" === o[s] && r.push(s + 1);
			d.ID_TABLE = r, g.shuffle(d.ID_TABLE);
			var a = t.resources.jsons.stages;
			e.STAGE = g.loop(a.stages, i.stageId, a.beginLoop - 1);
			for (var h = e.STAGE.filled, c = [], p = 0; p < h * e.DEPTH; p++) c.push(Math.floor(p / e.DEPTH));
			g.shuffle(c);
			for (var u = 0; u < h; u++) {
				var l = u * e.DEPTH;
				if (function(t) {
						for (var i = c[t], n = 1; n < e.DEPTH; n++)
							if (c[t + n] !== i) return !1;
						return !0
					}(l)) {
					var f = l + y.int(e.DEPTH - 1),
						v = (l + e.DEPTH + y.int(e.DEPTH - 1)) % (h * e.DEPTH);
					n = [c[v], c[f]], c[f] = n[0], c[v] = n[1]
				}
			}
			for (var m = [], _ = 0; _ < h; _++) {
				for (var w = [], b = 0; b < e.DEPTH; b++) w.push(c[_ * e.DEPTH + b]);
				m.push(w)
			}
			e.ORDER = m
		}, e.prototype.getClearedOrder = function() {
			for (var t = this.filled, i = [], n = 0; n < t * e.DEPTH; n++) i.push(Math.floor(n / e.DEPTH));
			for (var o = [], r = 0; r < t; r++) {
				for (var s = [], a = 0; a < e.DEPTH; a++) s.push(i[r * e.DEPTH + a]);
				o.push(s)
			}
			return o
		}, e.prototype.clearAlphaItems = function(t) {
			void 0 === t && (t = 10), t = Math.min(t, this.alphaItems.length);
			for (var e = 0; e < t; e++) {
				var i = this.alphaItems[e];
				i.destroy(), this.alphaItemContainer.removeChild(i)
			}
			this.alphaItems.splice(0, t)
		}, e.prototype.showAlphaItems = function() {
			this.clearAlphaItems();
			for (var t = 0; t < this.hand.length; t++) {
				var e = this.hand[t],
					i = new PIXI.Sprite(this.$.resources.spritesheets.item["item_" + d.ID_TABLE[e.id] + ".png"]);
				i.anchor.set(.5), i.scale.set(e.sprite.scale.x), i.position = e.position.clone(), this.alphaItemContainer.addChild(i), this.alphaItems.push(i)
			}
		}, e.prototype.takeItems = function(t, e, i) {
			var n = this;
			if (void 0 === i && (i = function() {}), 0 === (e = Math.min(e, t.count))) return 0;
			var o = 0;
			this.moving = !0, this.taken = t.id, s.play(this.$, "take");
			for (var r = function(r) {
					var a = t.top;
					t.items.pop(), n.hand.push(a), a.shadow = 0;
					var h = 70 * (r - (e - 1) / 2),
						c = n.takePoint.clone();
					c.x += h, n.refresh(), l.vector(n, a, null, new PIXI.Point(0, -n.takeHeight), .1, l.Ease.linear, (function() {
						l.scale(n, a, null, 1, 1 / d.SCALE, .1), l.moveTo(n, a, null, c, .1, l.Ease.linear, (function() {
							0 === r && s.play(n.$, "put"), a.bound((function() {
								0 === r && (n.moving = !1, i())
							}))
						}))
					})), o++
				}, a = 0; a < e; a++) r(a);
			return this.showAlphaItems(), o
		}, e.prototype.putItems = function(t, e) {
			var i = this;
			void 0 === e && (e = function() {});
			var n = Math.min(this.hand.length, t.space);
			if (0 === n) return 0;
			var o = 0;
			this.clearAlphaItems(n), this.moving = !0, s.play(this.$, "take");
			for (var r = function(n) {
					var r = i.handTop,
						a = t.getItemPos(t.count);
					a.y += -r.height * d.SCALE / 2 - i.takeHeight, r.shadow = t.id % 2 * 2 - 1, t.items.push(r), i.hand.pop(), l.scale(i, r, null, 1 / d.SCALE, 1, .1), l.moveTo(i, r, null, a, .1, l.Ease.linear, (function() {
						i.refresh(), l.vector(i, r, null, new PIXI.Point(0, i.takeHeight), .1, l.Ease.linear, (function() {
							0 === n && s.play(i.$, "put"), r.bound((function() {
								0 === n && (i.moving = !1, e())
							}))
						}))
					})), o++
				}, a = 0; a < n; a++) r(a);
			return o
		}, e.prototype.undoItems = function(t, e) {
			var i = this;
			void 0 === e && (e = function() {});
			var n = this.inventorys[t.from],
				o = this.inventorys[t.to],
				r = Math.min(t.count, o.count);
			if (0 === r) return !1;
			this.moving = !0, this.taken = o.id;
			var a = o.items.splice(-r);
			s.play(this.$, "take");
			for (var h = function(t) {
					var o = a[t],
						r = n.getItemPos(n.count);
					r.y += -o.height / 2 - i.takeHeight, o.shadow = 0, n.items.push(o), i.itemContainer.setChildIndex(o, i.itemContainer.children.length - 1), l.vector(i, o, null, new PIXI.Point(0, -i.takeHeight), .1, l.Ease.linear, (function() {
						l.moveTo(i, o, null, r, .1, l.Ease.linear, (function() {
							i.refresh(), o.shadow = n.id % 2 * 2 - 1, l.vector(i, o, null, new PIXI.Point(0, i.takeHeight), .1, l.Ease.linear, (function() {
								0 === t && s.play(i.$, "put"), o.bound((function() {
									0 === t && (i.moving = !1, e())
								}))
							}))
						}))
					}))
				}, c = 0; c < a.length; c++) h(c);
			return !0
		}, e.prototype.appearCross = function(t) {
			var e = this;
			this.cross.position = t.position.clone(), this.cross.y += -55, this.cross.x += (1 - t.id % 2 * 2) * (t.width - 17.5), l.alpha(this, this.cross, "crossAlpha", 0, 1, .1, l.Ease.linear, (function() {
				l.timeout(e, (function() {
					l.alpha(e, e.cross, "crossAlpha", 1, 0, .5, l.Ease.linear, (function() {}))
				}), .75, "crossAlpha")
			}))
		}, e.prototype.takeable = function(t) {
			return !this.have || this.hand[0].id === t.id
		}, e.prototype.getTopHandPos = function() {
			var t = 70 * ((this.hand.length - 1) / 2),
				e = this.takePoint.clone();
			return e.x += t, e
		}, e.prototype.getHandPoses = function() {
			for (var t = [], e = 0; e < this.hand.length; e++) {
				var i = 70 * (e - (this.hand.length - 1) / 2),
					n = this.takePoint.clone();
				n.x += i, t.push(n)
			}
			return t
		}, e.prototype.refresh = function() {
			for (var t = 0; t < this.items.length; t++)
				for (var i = 0; i < this.items[t].length; i++) this.items[t][i].zIndex = i;
			for (var n = 0; n < this.hand.length; n++) this.hand[n].zIndex = e.DEPTH;
			this.itemContainer.sortChildren()
		}, e.prototype.registerStartState = function() {
			this.startState.splice(0);
			for (var t = 0; t < this.inventorys.length; t++) {
				for (var e = this.inventorys[t].items, i = [], n = 0; n < e.length; n++) i.push(e[n].id);
				this.startState.push(i)
			}
		}, e.prototype.reset = function() {
			for (var t, e = this.hand.length - 1; e >= 0; e--) this.hand[e].destroy(), this.hand.pop();
			for (var i = 0; i < this.inventorys.length; i++) {
				var n = this.inventorys[i];
				n.toEmpty(), n.shelfEnable = i < this.opened
			}
			for (var o = 0; o < this.startState.length; o++)(t = this.inventorys[o]).addItem.apply(t, this.startState[o]);
			this.clearAlphaItems(), this.historys.splice(0), this.emit("move")
		}, e.prototype.writeHistory = function(t) {
			this.historys.push(t), this.emit("writeHistory")
		}, e.prototype.undo = function() {
			var t = this;
			if (this.moving) return !1;
			var e = this.historys.pop();
			if (void 0 === e) return !1;
			this.clearAlphaItems(), this.emit("undoStart");
			var i = function() {
				var i = t.inventorys[e.to];
				if (i.complete) {
					i.shelfEnable = !0;
					var n = i.items.concat();
					l.tween(i, "undoShade", .65, 0, .1, (function(t) {
						for (var e = 0; e < n.length; e++) n[e].shade = t
					}))
				}
				t.undoItems(e, (function() {
					t.emit("undoEnd")
				}))
			};
			return this.have ? t.putItems(t.inventorys[t.taken], i) : i(), this.emit("move"), !0
		}, e.prototype.addInventory = function() {
			if (this.opened >= 12) return !1;
			var t = this.opened++;
			return this.inventorys[t].enable = !0, this.inventorys[t].open(), !0
		}, e.prototype.fadeOutShadeItems = function() {
			var t = this;
			l.tween(this, null, .65, 0, .1, (function(e) {
				return t.shadeItems = e
			}))
		}, i.have.get = function() {
			return this.hand.length > 0
		}, i.handTop.get = function() {
			return this.hand[this.hand.length - 1]
		}, i.gameClear.get = function() {
			return this.inventorys.every((function(t) {
				return t.clear
			}))
		}, i.isFirst.get = function() {
			return 0 === this.historys.length
		}, i.pathCount.get = function() {
			return this.historys.length
		}, i.shadeItems.set = function(t) {
			for (var e = 0; e < this.items.length; e++)
				for (var i = 0; i < this.items[e].length; i++) this.items[e][i].shade = t
		}, Object.defineProperties(e.prototype, i), e
	}(t.Container);
	w.ORDER = [], w.DEPTH = 4;
	var b = function(t) {
			function i(i, n, o, r) {
				void 0 === r && (r = 0), t.call(this), this.textures = [], this.sprites = [], this._margin = 0, this._number = 0, this.number_bfr = 0, this._padding = 1, this.anchor = new e.Point(0, 0);
				for (var s = 0; s <= 9; s++) this.textures.push(i[n + s + o]);
				this.number = r
			}
			t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
			var n = {
				number: {
					configurable: !0
				},
				margin: {
					configurable: !0
				},
				padding: {
					configurable: !0
				},
				tint: {
					configurable: !0
				}
			};
			return n.number.get = function() {
				return this._number
			}, n.number.set = function(t) {
				this.number_bfr = this._number, this._number = t, this.drawNumber(t)
			}, i.prototype.animateNumber = function(t, e, i) {
				void 0 === e && (e = 0), void 0 === i && (i = 1), this.number = t, e <= 0 ? this.drawNumber(t) : this.animate(e, i)
			}, i.prototype.setAnchor = function(t, e) {
				void 0 === e && (e = void 0), void 0 !== e ? (this.anchor.x = t, this.anchor.y = e) : (this.anchor.x = t, this.anchor.y = t), this.number = this._number
			}, n.margin.get = function() {
				return this._margin
			}, n.margin.set = function(t) {
				this._margin = t, this.number = this._number
			}, n.padding.get = function() {
				return this._padding
			}, n.padding.set = function(t) {
				this._padding = t, this.number = this._number
			}, n.tint.set = function(t) {
				this.number = this._number, this.sprites.forEach((function(e) {
					return e.tint = t
				}))
			}, i.prototype.getTexture = function(t) {
				return this.textures[t]
			}, i.prototype.drawNumber = function(t) {
				var i, n = this.sprites.length,
					o = t.toFixed().padStart(this._padding, "0");
				this._number = t;
				for (var r = 0, s = 0; s < o.length || s < n; s++)
					if (s >= n && s < o.length) {
						var a = new e.Sprite(this.getTexture(Number(o[s]))),
							h = a.height;
						a.pivot.y = h, h > r && (r = h), this.addChild(a), this.sprites.push(a)
					} else if (s >= o.length && s < n) null === (i = this.sprites.pop()) || void 0 === i || i.destroy();
				else {
					var c = this.sprites[s];
					c.texture = this.getTexture(Number(o[s]));
					var p = c.height;
					c.pivot.y = p, p > r && (r = p)
				}
				for (var u = 0, l = 0; l < this.sprites.length; l++) this.sprites[l].x = u, this.sprites[l].y = r, u += this.sprites[l].width + this._margin;
				this.pivot.set(this.width * this.anchor.x / this.scale.x, this.height * this.anchor.y / this.scale.y)
			}, i.prototype.animate = function(t, e) {
				var i = this;
				this.task.clear();
				var n = 0,
					o = this._number,
					r = this.number_bfr;
				this.task.on("animation", (function(s) {
					var a = s.delta;
					n > e && (n = e);
					var h = n / e,
						c = function(t, e, i) {
							return (e - t) * i + t
						}(r, o, function(e) {
							switch (t) {
								case 1:
									return e;
								case 2:
									return -e * e + 2 * e;
								case 3:
									return -2 * e * e * e + 3 * e * e
							}
							return 1
						}(h));
					i.drawNumber(c), h >= 1 ? (i.emit("endAnimation"), i.task.clear()) : n += a / 60
				}))
			}, Object.defineProperties(i.prototype, n), i
		}(t.Container),
		C = function(t) {
			function e(e) {
				t.call(this), this.$ = e;
				var i = new PIXI.Point(e.vars.additional.width / 2, e.vars.additional.height / 2);
				this.doors = [new PIXI.Sprite(e.resources.images["gamestart_door_l.png"]), new PIXI.Sprite(e.resources.images["gamestart_door_r.png"])], this.doors[0].anchor.set(1, 0), this.doors[0].position.set(i.x, -1), this.doors[1].position.set(i.x, -1), this.addChild(this.doors[0], this.doors[1])
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.open = function(t) {
				var e = this;
				void 0 === t && (t = function() {});
				var i = new PIXI.Point(this.$.vars.additional.width / 2, this.$.vars.additional.height / 2);
				s.play(this.$, "start"), l.tween(this, "doorsAnime", 0, 1, .2, (function(t) {
					for (var n = 0; n <= 1; n++) e.doors[n].x = i.x + (2 * n - 1) * t * i.x, e.doors[n].alpha = 1 - t
				}), l.Ease.linear, t)
			}, e
		}(t.Container),
		I = function(e) {
			function i(i, n) {
				e.call(this), this.$ = i, this._isShow = !1, this.screen = new r(i, 0), this.dontTap = new r(i, 0, 0), this.dontTap.interactive = !1, this.main = new t.Container, this.main.position.set(i.vars.additional.width / 2, i.vars.additional.height / 2), this.main.visible = !1, this.addChild(this.dontTap), this.addChild(this.screen), this.main.addChild(n), this.addChild(this.main), this.main.pivot.set(n.width / 2, n.height / 2)
			}
			e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
			var n = {
				allowBackTap: {
					configurable: !0
				},
				isShow: {
					configurable: !0
				}
			};
			return i.prototype.show = function(t, e) {
				var i = this;
				void 0 === t && (t = function() {}), void 0 === e && (e = !0), this._isShow = !0, this.main.interactiveChildren = !1, e && this.visibleBack(!0), this.dontTap.interactive = !0, this.main.visible = !0, l.tween(this.main, "fade", 0, 1, .3, (function(t) {
					return i.main.scale.set(t)
				}), l.Ease.quadratic(-2), (function() {
					i.main.interactiveChildren = !0, t()
				})), l.alpha(this.main, this.main, "fadeAlpha", 0, 1, .3)
			}, i.prototype.hide = function(t, e) {
				var i = this;
				void 0 === t && (t = function() {}), void 0 === e && (e = !0), this._isShow = !1, this.main.interactiveChildren = !1, e && this.visibleBack(!1), l.tween(this.main, "fade", 1, 0, .3, (function(t) {
					return i.main.scale.set(t)
				}), l.Ease.decel, (function() {
					i.dontTap.interactive = !1, i.main.interactiveChildren = !0, i.main.visible = !1, t()
				})), l.alpha(this.main, this.main, "fadeAlpha", 1, 0, .3)
			}, i.prototype.visibleBack = function(t, e) {
				void 0 === e && (e = function() {});
				t ? this.screen.fadeIn(.2, .75, e) : this.screen.fadeOut(.2, 0, e)
			}, n.allowBackTap.set = function(t) {
				this.dontTap.interactive = !t
			}, n.isShow.get = function() {
				return this._isShow
			}, Object.defineProperties(i.prototype, n), i
		}(t.Container),
		x = function(t) {
			function i(i, n, o, r, s, a) {
				var h = this;
				void 0 === s && (s = 0), void 0 === a && (a = 140);
				var c = new e.Sprite(n);
				c.y = -50;
				var p = new e.Container;
				if (p.position.set(c.width / 2, c.height / 2 + s), null !== o) {
					var u = new e.Sprite(o.texture);
					u.anchor.set(.5), u.position.set(c.width / 2, o.y), c.addChild(u)
				}
				for (var l = {}, d = r.length, f = function(t) {
						var e = r[t],
							i = e.button;
						i.y = (t - (d - 1) / 2) * a, i.on("buttontap", (function() {
							h.emit(e.name)
						})), l[e.name] = i, p.addChild(i)
					}, v = 0; v < d; v++) f(v);
				c.addChild(p), t.call(this, i, c), this.buttons = {}, this.buttons = l
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.show = function(t, e) {
				var i = this;
				void 0 === t && (t = function() {}), void 0 === e && (e = !0), this._isShow = !0, this.main.interactiveChildren = !1, e && this.visibleBack(!0), this.dontTap.interactive = !0, this.main.visible = !0, l.tween(this.main, "fade", 0, 1, .3, (function(t) {
					return i.main.scale.set(t)
				}), l.Ease.decel, (function() {
					i.main.interactiveChildren = !0, t()
				})), l.alpha(this.main, this.main, "fadeAlpha", 0, 1, .3)
			}, i.prototype.hide = function(t, e) {
				var i = this;
				void 0 === t && (t = function() {}), void 0 === e && (e = !0), this._isShow = !1, this.main.interactiveChildren = !1, e && this.visibleBack(!1), l.tween(this.main, "fade", 1, 0, .3, (function(t) {
					return i.main.scale.set(t)
				}), l.Ease.accel, (function() {
					i.dontTap.interactive = !1, i.main.interactiveChildren = !0, i.main.visible = !1, t()
				})), l.alpha(this.main, this.main, "fadeAlpha", 1, 0, .3)
			}, i.prototype.getButton = function(t) {
				return this.buttons[t]
			}, i
		}(I),
		P = function(t, e, i) {
			void 0 === i && (i = function() {}), s.pauseMuteBGM(t, "bgm"), t.vars.api.viewRewardAdAsync().then((function(i) {
				s.playMuteBGM(t, "bgm"), e()
			})).catch((function(e) {
				e.type === t.vars.enum.errors.AdSkipped ? (s.playMuteBGM(t, "bgm"), i(!1)) : (s.playMuteBGM(t, "bgm"), i(!0))
			}))
		},
		E = function(t, e) {
			s.pauseMuteBGM(t, "bgm");
			var i = function(i) {
				s.playMuteBGM(t, "bgm"), e()
			};
			t.vars.api.viewAdAsync().then(i).catch(i)
		},
		S = function(t) {
			function i(i) {
				t.call(this);
				var n = new e.Sprite(i.resources.spritesheets.text["spacecharge_text2.png"]);
				n.anchor.set(.5), i.vars.env.hasRewardAd && this.addChild(n)
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i
		}(t.Container),
		M = function(e) {
			function i(i, n, o) {
				var r = this,
					s = new t.Container,
					h = new PIXI.Sprite(i.resources.images["popup.png"]);
				h.y = 30;
				var c = new PIXI.Container;
				c.position.set(h.width / 2, h.height / 2);
				var p = new PIXI.Sprite(n.texture),
					u = new PIXI.Sprite(o.texture),
					l = new a(i, i.resources.spritesheets.game["spacecharge_okbutton.png"]),
					d = new S(i),
					f = new a(i, i.resources.spritesheets.text["spacecharge_cancelbutton.png"]);
				p.anchor.set(.5), u.anchor.set(.5), p.y = n.y, u.y = o.y, l.y = 240, d.y = 340, f.y = 575, l.on("buttontap", (function() {
					l.setEnable(!1), new P(i, (function() {
						r.hide(), r.emit("complete")
					}), (function() {
						l.setEnable(!0)
					}))
				})), f.on("buttontap", (function() {
					r.hide((function() {
						r.emit("cancel")
					}))
				})), c.addChild(u), c.addChild(d), c.addChild(f), c.addChild(l), c.addChild(p), h.addChild(c), s.addChild(h), e.call(this, i, s), this.photo = p, this.ok = l, this.warn = d, this.cancel = f
			}
			return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i.prototype.show = function() {
				var t = this;
				this.initialize(), e.prototype.show.call(this, (function() {
					t.animation()
				}))
			}, i.prototype.initialize = function() {
				this.ok.setEnable(!0), this.photo.alpha = 0, this.ok.alpha = 0, this.warn.alpha = 0, this.cancel.alpha = 0
			}, i.prototype.animation = function() {
				var t = this;
				l.tween(this, "contentsAlpha", 0, 1, .2, (function(e) {
					t.photo.alpha = e, t.ok.alpha = e, t.warn.alpha = e, t.cancel.alpha = e
				})), l.scale(this, this.photo, "photoScale", 2, 1, .2), l.tween(this, "contensScale", 0, 1, .2, (function(e) {
					t.ok.scale.set(e), t.warn.scale.set(e), t.cancel.scale.set(e)
				}), l.Ease.quadratic(-2))
			}, i
		}(I),
		T = function(t) {
			function e() {
				t.call(this);
				var e = y.float(10, 25),
					i = new PIXI.Point(1.4 * e, e),
					n = i.x * y.float(0, .5);
				this.graphic = new PIXI.Graphics, this.graphic.beginFill(y.array([16711680, 65280, 255, 16776960, 16711935, 65535, 32768])), this.graphic.lineTo(i.x, 0), this.graphic.lineTo(i.x + n, i.y), this.graphic.lineTo(n, i.y), this.graphic.lineTo(0, 0), this.graphic.endFill(), this.graphic.pivot.set(this.graphic.width / 2, this.graphic.height / 2), this.graphic.rotation = y.float(2 * Math.PI), this.addChild(this.graphic)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.rotate = function() {
				var t = this;
				l.tween(this, "flutter", 0, y.sign() * Math.PI, y.float(1, 3), (function(e) {
					return t.graphic.scale.y = Math.cos(e)
				}), l.Ease.linear, (function() {}), 0)
			}, e
		}(t.Container),
		k = function(t) {
			function e(e) {
				var i = this;
				t.call(this);
				for (var n = function(t) {
						var n = new T,
							o = Math.floor(2 * Math.random());
						n.x = e.vars.additional.width * o + 50 * (2 * o - 1), n.y = e.vars.additional.height + 50;
						var r = new PIXI.Point(0, Math.random() * e.vars.additional.height);
						r.x = y.float(0, .7 * e.vars.additional.width) + o * e.vars.additional.width * .5, l.moveTo(n, n, "move", r, y.float(.4, .5), l.Ease.decel, (function() {
							n.rotate();
							var t = e.vars.additional.height,
								i = y.float(-Math.PI / 8, Math.PI / 4) + Math.PI / 2,
								o = new PIXI.Point(t * Math.cos(i), t * Math.sin(i));
							l.vector(n, n, "move", o, 5, l.Ease.linear, (function() {
								n.task.clear(), n.destroy()
							}))
						})), i.addChild(n)
					}, o = 0; o < 100; o++) n()
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(t.Container),
		A = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = function() {}), t.call(this);
				var o = new k(e),
					r = new PIXI.Sprite(e.resources.spritesheets.game["clear_text_1.png"]),
					s = new PIXI.Sprite(e.resources.spritesheets.game["clear_text_2.png"]);
				r.anchor.set(.5), s.anchor.set(.5), r.position.set(e.vars.additional.width / 2, e.vars.additional.height / 2);
				var a = .2;
				l.scale(this, r, null, .5, 1, a), l.alpha(this, r, null, 0, 1, a), l.alpha(this, s, null, 0, 1, a, l.Ease.linear, (function() {
					l.scale(n, s, null, 1, 1.2, a), l.alpha(n, s, null, 1, 0, a)
				})), setTimeout((function() {
					l.vector(n, r, null, new PIXI.Point(0, 100), .16), l.alpha(n, r, null, 1, 0, .16, l.Ease.linear, i)
				}), 1e3), setTimeout((function() {
					l.alpha(n, o, null, 1, 0, .5, l.Ease.linear, (function() {
						n.task.clear(), n.destroy()
					}))
				}), 1500), this.addChild(o), r.addChild(s), this.addChild(r)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(t.Container),
		O = function(e) {
			function i(i, n, o) {
				var h = this;
				e.call(this);
				var c = new r(i, 0);
				c.interactive = !0;
				var p = function(e) {
					var n = new t.Container,
						o = new PIXI.Sprite(i.resources.spritesheets.game["itemget_hikari1.png"]),
						r = new PIXI.Sprite(i.resources.spritesheets.game["itemget_hikari2.png"]),
						s = new PIXI.Sprite(i.resources.spritesheets.item["item_" + e + ".png"]);
					return o.anchor.set(.5), r.anchor.set(.5), s.anchor.set(.5), s.scale.set(.85), o.blendMode = PIXI.BLEND_MODES.ADD, r.blendMode = PIXI.BLEND_MODES.ADD, o.alpha = .95, r.alpha = .6, l.tween(n, "light_rot", 0, 2 * Math.PI, 6, (function(t) {
						return r.rotation = t
					}), l.Ease.linear, (function() {}), 0, !1), l.scale(n, n, "scale", 0, 1, .25, l.Ease.quadratic(-2)), l.alpha(n, n, "alpha", 0, 1, .2), n.addChild(r), n.addChild(o), n.addChild(s), n
				};
				c.fadeIn(.2, .8, (function() {
					s.play(i, "get");
					for (var t = [
							[new PIXI.Point(0, -85)],
							[new PIXI.Point(-160, -85), new PIXI.Point(160, -85)],
							[new PIXI.Point(0, -220), new PIXI.Point(-160, 50), new PIXI.Point(160, 50)]
						], e = new PIXI.Point(i.vars.additional.width / 2, i.vars.additional.height / 2), r = 0; r < n.length; r++) {
						var c = n[r],
							u = p(c),
							d = t[n.length - 1][r];
						u.position.set(e.x + d.x, e.y + d.y), h.addChild(u)
					}
					setTimeout((function() {
						var t = new PIXI.Sprite(i.resources.spritesheets.game["get_text1.png"]),
							n = new PIXI.Sprite(i.resources.spritesheets.game["get_text1_2.png"]),
							r = new PIXI.Sprite(i.resources.spritesheets.text["get_text2.png"]);
						t.anchor.set(.5), n.anchor.set(.5), r.anchor.set(.5), t.position.set(e.x, 150), r.position.set(e.x, e.y + 275);
						var s = .2;
						l.scale(h, t, null, .5, 1, s), l.alpha(h, t, null, 0, 1, s), l.alpha(h, n, null, 0, 1, s, l.Ease.linear, (function() {
							l.scale(h, n, null, 1, 1.75, s), l.alpha(h, n, null, 1, 0, s)
						})), l.alpha(h, r, null, 0, 1, s), setTimeout((function() {
							var t = new a(i, i.resources.spritesheets.game["ok_button.png"]);
							t.position.set(e.x, i.vars.additional.height - 100), l.scale(h, t, null, 0, 1, .25, l.Ease.quadratic(-2)), l.alpha(h, t, null, 0, 1, .2), t.on("buttontap", (function() {
								l.alpha(h, h, "alpha", 1, 0, .15, l.Ease.linear, (function() {
									h.task.clear(), o(), h.destroy()
								}))
							})), h.addChild(t)
						}), 650), t.addChild(n), h.addChild(t), h.addChild(r)
					}), 250)
				})), this.addChild(c)
			}
			return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i
		}(t.Container),
		X = function(t) {
			function i(i, n, o, r) {
				void 0 === r && (r = 0), t.call(this), this.textures = [], this.sprites = [], this._margin = 0, this._number = 0, this.number_bfr = 0, this.anchor = new e.Point(0, 0);
				for (var s = 0; s <= 9; s++) this.textures.push(i[n + s + o]);
				this.textures.push(i[n + "ten" + o]), this.number = r
			}
			t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
			var n = {
				number: {
					configurable: !0
				},
				margin: {
					configurable: !0
				},
				tint: {
					configurable: !0
				}
			};
			return n.number.get = function() {
				return this._number
			}, n.number.set = function(t) {
				this.number_bfr = this._number, this._number = t, this.drawNumber(t)
			}, i.prototype.animateNumber = function(t, e, i) {
				void 0 === e && (e = 0), void 0 === i && (i = 1), this.number = t, e <= 0 ? this.drawNumber(t) : this.animate(e, i)
			}, i.prototype.setAnchor = function(t, e) {
				void 0 === e && (e = void 0), void 0 !== e ? (this.anchor.x = t, this.anchor.y = e) : (this.anchor.x = t, this.anchor.y = t), this.number = this._number
			}, n.margin.get = function() {
				return this._margin
			}, n.margin.set = function(t) {
				this._margin = t, this.number = this._number
			}, n.tint.set = function(t) {
				this.number = this._number, this.sprites.forEach((function(e) {
					return e.tint = t
				}))
			}, i.prototype.getTexture = function(t) {
				var e = Number(t);
				return isNaN(e) ? this.textures[10] : this.textures[e]
			}, i.prototype.drawNumber = function(t) {
				var i, n = this.sprites.length,
					o = t.toFixed();
				this._number = t;
				for (var r = Math.floor((o.length - 1) / 3), s = 0; s < r; s++) {
					var a = o.length - 3 * (s + 1) - s;
					o = o.slice(0, a) + "," + o.slice(a)
				}
				for (var h = 0, c = 0; c < o.length || c < n; c++)
					if (c >= n && c < o.length) {
						var p = new e.Sprite(this.getTexture(o[c])),
							u = p.height;
						p.pivot.y = u, u > h && (h = u), this.addChild(p), this.sprites.push(p)
					} else if (c >= o.length && c < n) null === (i = this.sprites.pop()) || void 0 === i || i.destroy();
				else {
					var l = this.sprites[c];
					l.texture = this.getTexture(o[c]);
					var d = l.height;
					l.pivot.y = d, d > h && (h = d)
				}
				for (var f = 0, v = 0; v < this.sprites.length; v++) this.sprites[v].x = f, this.sprites[v].y = h, f += this.sprites[v].width + this._margin;
				this.pivot.set(this.width * this.anchor.x / this.scale.x, this.height * this.anchor.y / this.scale.y)
			}, i.prototype.animate = function(t, e) {
				var i = this;
				this.task.clear();
				var n = 0,
					o = this._number,
					r = this.number_bfr;
				this.task.on("animation", (function(s) {
					var a = s.delta;
					n > e && (n = e);
					var h = n / e,
						c = function(t, e, i) {
							return (e - t) * i + t
						}(r, o, function(e) {
							switch (t) {
								case 1:
									return e;
								case 2:
									return -e * e + 2 * e;
								case 3:
									return -2 * e * e * e + 3 * e * e
							}
							return 1
						}(h));
					i.drawNumber(c), h >= 1 ? (i.emit("endAnimation"), i.task.clear()) : n += a / 60
				}))
			}, Object.defineProperties(i.prototype, n), i
		}(t.Container),
		D = function(t) {
			function e(e, i, n, o) {
				t.call(this), this.$ = e, this.commonData = i;
				var r = new PIXI.Container,
					s = new PIXI.Sprite(e.resources.images["result_popup.png"]),
					a = new PIXI.Sprite(e.resources.spritesheets.text["result_popup_title.png"]),
					h = new PIXI.Sprite(e.resources.spritesheets.text["result_popup_text.png"]),
					c = new PIXI.Sprite(e.resources.spritesheets.game["result_popup_clip.png"]),
					p = function(t) {
						return s.width / 2 - t.width / 2
					};
				a.position.set(p(a), 130), h.position.set(p(h), a.y + a.height + 15), c.position.set(p(c), -40), r.addChild(s), r.addChild(a), r.addChild(h), r.addChild(c);
				var u = new PIXI.Container;
				u.position.set(r.width / 2, r.height / 2), this.pointcardContainer = new PIXI.Container;
				var d = n.score > i.highScore;
				d && (i.highScore = n.score);
				var f = new PIXI.Sprite(e.resources.spritesheets.text["result_stage_text.png"]),
					v = new PIXI.Sprite(e.resources.spritesheets.text["result_score_text.png"]),
					m = new PIXI.Sprite(e.resources.spritesheets.text["result_bestscore_text.png"]),
					g = new b(e.resources.spritesheets.number, "result_text_no", ".png", i.stageId + 1),
					y = new X(e.resources.spritesheets.number, "result_text_no", ".png", n.score),
					_ = new X(e.resources.spritesheets.number, "result_text_no", ".png", i.highScore);
				this.pointcard = this.addPointcard(), this.pointcard.stamp(o), f.anchor.set(0, .5), v.anchor.set(0, 1), m.anchor.set(0, .5), g.setAnchor(1, .5), y.setAnchor(1, 1), _.setAnchor(1, .5), g.scale.set(.5);
				y.width > 300 && y.scale.set(300 / y.width), _.scale.set(.5);
				var w = -220;
				f.position.set(w, -210), v.position.set(w, -35), m.position.set(w, 15), g.position.set(230, f.y), y.position.set(230, v.y + 10), _.position.set(230, m.y), this.pointcardContainer.y = 220, i.stageId++, r.position.set(e.vars.additional.width / 2, e.vars.additional.height / 2 - 10), r.pivot.set(r.width / 2, r.height / 2), l.tween(this, "fade", 0, 1, .2, (function(t) {
					return r.scale.set(t)
				}), l.Ease.quadratic(-2), (function() {
					d && setTimeout((function() {
						var t = new j(e);
						t.position.set(260, -140), u.addChild(t)
					}), 100)
				})), l.alpha(this, r, "fadeAlpha", 0, 1, .15), u.addChild(f), u.addChild(v), u.addChild(m), u.addChild(g), u.addChild(y), u.addChild(_), u.addChild(this.pointcardContainer), r.addChild(u), this.addChild(r)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.addPointcard = function() {
				var t = this,
					e = new G(this.$, this.commonData);
				return e.on("stamped", (function() {
					setTimeout((function() {
						return t.emit("resultEnd")
					}), 300)
				})), e.on("filled", (function() {
					setTimeout((function() {
						return t.emit("pointcardMax")
					}), 300)
				})), this.pointcardContainer.addChild(e), e
			}, e.prototype.nextPointcard = function() {
				var t = this,
					e = this.commonData.stamp % 10;
				this.commonData.stamp = 0;
				l.alpha(this, this.pointcard, "pointcardAlpha", 1, 0, .1), l.vector(this, this.pointcard, "pointcardMove", new PIXI.Point(0, 100), .1, l.Ease.linear, (function() {
					t.pointcard.task.clear(), t.pointcard.destroy(), t.pointcard = t.addPointcard(), l.alpha(t, t.pointcard, "pointcard2Alpha", 0, 1, .1), l.scale(t, t.pointcard, "pointcard2Scale", 1.25, 1, .1, l.Ease.accel, (function() {
						t.pointcard.stamp(e)
					}))
				}))
			}, e
		}(t.Container),
		j = function(t) {
			function e(e) {
				var i = this;
				t.call(this);
				var n = new PIXI.Sprite(e.resources.spritesheets.text["bestscore_badge.png"]),
					o = new PIXI.Sprite(e.resources.spritesheets.game["bestscore_badge1.png"]);
				n.anchor.set(.5), o.anchor.set(.5), o.visible = !1, l.scale(this, n, null, 1.5, 1, .16), l.alpha(this, n, null, 0, 1, .16, l.Ease.linear, (function() {
					setTimeout((function() {
						o.visible = !0;
						var t = 1;
						i.task.on("lighting", (function() {
							if (o.texture = e.resources.spritesheets.game["bestscore_badge" + t++ + ".png"], t > 14) return o.visible = !1, void i.task.clear("lighting")
						}))
					}), 100)
				})), this.addChild(n), this.addChild(o)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(t.Container),
		G = function(t) {
			function e(e, i) {
				var n;
				t.call(this), this.$ = e, this.commonData = i, this.stamps = [], this.main = new PIXI.Sprite(e.resources.spritesheets.text["pointcard.png"]), this.main.anchor.set(.5);
				for (var o = i.stamp, r = i.gotItem, s = [], a = 0; a < r.length; a++) "0" === r[a] && s.push(a + 1);
				this.collectAll = 0 === s.length;
				var h = 6316128;
				this.collectAll && (this.main.tint = h);
				var c = new PIXI.Sprite(e.resources.spritesheets.text["result_pointcard_title.png"]);
				c.anchor.set(.5);
				for (var p = new PIXI.Point(81.5, 81.5), u = new PIXI.Point(2.5, -4), l = 0; l < 10; l++) {
					var d = new PIXI.Sprite(e.resources.spritesheets.game["pointcard_stamp.png"]);
					d.anchor.set(.5), d.scale.set(.4);
					var f = l % 5,
						v = Math.floor(l / 5);
					d.position.set(-162, 3), d.x += f * p.x + v * u.x, d.y += v * p.y + f * u.y, d.alpha = l < o ? 1 : 0, this.collectAll && (d.alpha = 1, d.tint = h), this.stamps.push(d)
				}
				this.addChild(this.main), (n = this.main).addChild.apply(n, this.stamps), this.collectAll && this.main.addChild(c)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.stamp = function(t) {
				var e = this;
				if (void 0 === t && (t = 1), this.collectAll || t <= 0) this.emit("stamped");
				else
					for (var i = this.commonData.stamp, n = Math.min(i + t, 10) - 1, o = function(o) {
							var r = e.stamps[o];
							r.alpha = 0, setTimeout((function() {
								e.stamping(r, (function() {
									s.play(e.$, "stamp"), o === n && (e.commonData.stamp += t, e.commonData.stamp < 10 ? e.emit("stamped") : e.emit("filled"))
								}))
							}), 300 * (o - i) + 1e3)
						}, r = i; r <= n; r++) o(r)
			}, e.prototype.stamping = function(t, e) {
				void 0 === e && (e = function() {}), l.alpha(this, t, null, 0, 1, .3), l.scale(this, t, null, 1, .4, .3, l.Ease.accel, e)
			}, e
		}(t.Container),
		B = function(t) {
			function e(e, i) {
				t.call(this, e.resources.spritesheets.game["ui_gauge_2.png"], e.resources.spritesheets.game["ui_gauge_1.png"]), this.$ = e, this.points = i, this.stamps = [];
				for (var n = new PIXI.Container, o = 0; o < i.length; o++) {
					var r = new PIXI.Sprite(e.resources.spritesheets.game["ui_spin_1.png"]);
					r.anchor.set(.5, 1), r.x = -this.gauge.width / 2 + this.gauge.width * i[o], r.y = 5, n.addChild(r), this.stamps.push(r)
				}
				this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setValue = function(e) {
				var i = this;
				t.prototype.setValue.call(this, e);
				for (var n = function(t) {
						var e = t ? "ui_spin_1.png" : "ui_spin_2.png";
						return i.$.resources.spritesheets.game[e]
					}, o = 0; o < this.points.length; o++) {
					var r = this.getValue() >= this.points[o];
					this.stamps[o].texture = n(r)
				}
			}, e
		}(function(t) {
			function i(i, n, o) {
				void 0 === o && (o = 1), t.call(this), this.header = new e.Sprite(i), this.gauge = new e.Sprite(n), this._value = o, this.header.anchor.set(.5), this.gauge.anchor.set(.5), this.gaugeMask = new e.Graphics, this.gaugeMask.beginFill(16777215), this.gaugeMask.drawRect(0, 0, this.gauge.width, this.gauge.height), this.gaugeMask.endFill(), this.gaugeMask.pivot.y = this.gaugeMask.height / 2, this.gaugeMask.x = -this.gaugeMask.width / 2, this.gauge.mask = this.gaugeMask, this.addChild(this.header), this.addChild(this.gauge), this.addChild(this.gaugeMask)
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.getValue = function() {
				return this._value
			}, i.prototype.setValue = function(t) {
				this._value = t;
				var e = t > 1 ? 1 : t < 0 ? 0 : t;
				this.gaugeMask.scale.x = e
			}, i
		}(t.Container)),
		L = function(t) {
			function i(n, c, p, u) {
				var d = this;
				t.call(this, n, c, p, u), u.score = 0, s.playBGM(n, "bgm");
				new e.Point(n.vars.additional.width / 2, n.vars.additional.height / 2);
				var f = new C(n);
				i.viaTop || setTimeout((function() {
					f.open()
				}), 200);
				var v = new r(n, 0, 0),
					m = new e.Sprite(n.resources.spritesheets.game["ui_stageplate.png"]);
				m.anchor.set(.5, 0), m.x = 200, m.y = -m.height;
				var y = new e.Container,
					_ = new e.Sprite(n.resources.spritesheets.text["stage_text.png"]),
					I = new b(n.resources.spritesheets.number, "stage_no_", ".png", p.stageId + 1);
				I.padding = 2, I.margin = -2, I.setAnchor(0, .5), I.x = _.width + 5, I.y = _.height / 2, y.addChild(_), y.addChild(I), y.pivot.set(y.width / 2, y.height / 2), y.y = 110;
				var P = .8 * m.width;
				y.width > P && (y.scale.x = P / y.width), m.addChild(y);
				for (var S = function() {
						var t = w.STAGE.score,
							e = t.solveAdd,
							i = 0,
							n = Math.max(0, N.pathCount - N.solveLength);
						n < e.length && (i = e[n]);
						var o = t.baseMax,
							r = t.baseMin,
							s = t.maxTime;
						return Math.floor((o - r) * Math.pow(1 - Math.min(F, s) / s, 2.5) + r + i)
					}, T = function(t) {
						var e = w.STAGE.score,
							i = e.solveAdd[0] ? e.solveAdd[0] : 0,
							n = e.baseMax,
							o = e.baseMin;
						return Math.pow((t - o) / (n - o + i), .4)
					}, k = [0], X = w.STAGE.stampNorma, j = 0; j < X.length; j++) {
					var G = T(X[j]);
					k.push(Math.pow(G, 3))
				}
				var L = new B(n, k);
				L.x = n.vars.additional.width - 260, L.y = -L.height / 2 + 25;
				l.vector(this, m, "stagePlateMove", new e.Point(0, m.height - 40), .2, l.Ease.quadratic(-1.5)), l.vector(this, L, "gaugeMove", new e.Point(0, L.height), .2, l.Ease.quadratic(-1.5));
				var F = 0,
					N = new w(n, !1),
					H = new a(n, n.resources.spritesheets.game["uibutton_pause.png"]);
				H.position.set(n.vars.additional.width - H.width / 2, H.height / 2);
				var $ = new x(n, n.resources.images["popup.png"], {
						texture: n.resources.spritesheets.text["pause_text.png"],
						y: 250
					}, [{
						name: "continue",
						button: new a(n, n.resources.spritesheets.text["pause_button1.png"])
					}, {
						name: "howto",
						button: new a(n, n.resources.spritesheets.text["pause_button2.png"])
					}, {
						name: "quit",
						button: new a(n, n.resources.spritesheets.text["pause_button3.png"])
					}], 110, 165),
					R = new a(n, n.resources.spritesheets.game["uibutton_reset.png"]),
					q = new a(n, n.resources.spritesheets.game["uibutton_plus.png"]),
					Y = new a(n, n.resources.spritesheets.game["uibutton_return.png"]),
					V = new M(n, {
						texture: n.resources.spritesheets.game["spacecharge_photograph.png"],
						y: -175
					}, {
						texture: n.resources.spritesheets.text["spacecharge_text.png"],
						y: 80
					}),
					z = new M(n, {
						texture: n.resources.spritesheets.game["backonestep_photograph.png"],
						y: -140
					}, {
						texture: n.resources.spritesheets.text["backonestep_text.png"],
						y: 125
					}),
					U = n.vars.additional.height - R.height / 2;
				R.position.set(R.width / 2, U), q.position.set(n.vars.additional.width - q.width / 2, U), Y.position.set(q.x - .82 * Y.width, U);
				var J = 3,
					K = function(t) {
						return n.resources.spritesheets.game["uibutton_badge_" + t + ".png"]
					},
					Q = new e.Sprite(K(J));
				Q.anchor.set(.5);
				Q.position.set(.725 * Y.width, .275 * Y.height), n.vars.env.isAdPlatform && Y.sprite.addChild(Q), Y.setEnable(!1);
				var W = new h(n, c, p, u);
				W.interactive = !0, W.visible = !1, W.next.removeListener("buttontap"), H.alpha = 0, R.alpha = 0, q.alpha = 0, Y.alpha = 0, N.fadeOutShadeItems(), l.tween(this, "startGame", 0, 1, .1, (function(t) {
					var e = .5 * t + .5;
					H.alpha = t, R.alpha = t, q.alpha = t, Y.alpha = t, H.scale.set(e), R.scale.set(e), q.scale.set(e), Y.scale.set(e)
				})), this.task.on("timer", (function(t) {
					var e, i, n;
					$.isShow || z.isShow || V.isShow || (F += t.delta / 60, u.score = S(), e = T(u.score), i = e > 1 ? 1 : e < 0 ? 0 : e, n = Math.pow(i, 3), L.setValue(n))
				})), H.on("buttontap", (function() {
					$.show()
				})), $.on("continue", (function() {
					$.hide()
				})), $.on("howto", (function() {
					W.visible = !0, l.alpha(d, W, null, 0, 1, .3, l.Ease.linear, (function() {
						W.next.pressable = !0
					}))
				})), $.on("quit", (function() {
					d.quitGame()
				})), W.next.on("buttontap", (function() {
					W.next.pressable = !1, l.alpha(d, W, null, 1, 0, .3, l.Ease.linear, (function() {
						W.visible = !1
					}))
				})), N.on("undoStart", (function() {
					return Y.interactiveChildren = !1
				})), N.on("clearEffectStart", (function() {
					return Y.interactiveChildren = !1
				})), N.on("undoEnd", (function() {
					return Y.interactiveChildren = !0
				})), N.on("clearEffectEnd", (function() {
					return Y.interactiveChildren = !0
				})), N.on("writeHistory", (function() {
					Y.setEnable(!0)
				}));
				var Z = function() {
					var t = new r(n, 0);
					t.fadeIn(.2, .8), t.interactive = !0;
					s.play(n, "clear");
					var e = new A(n, (function() {
						var t = new D(n, p, u, function(t) {
								for (var e = w.STAGE.stampNorma, i = 0; i < e.length; i++)
									if (t < e[i]) return i + 1;
								return e.length + 1
							}(u.score)),
							e = new M(n, {
								texture: n.resources.spritesheets.game["pointcard_stamp.png"],
								y: -150
							}, {
								texture: n.resources.spritesheets.text["stampget_text.png"],
								y: 60
							});
						t.on("pointcardMax", (function() {
							for (var e = p.gotItem, i = [], o = 0; o < e.length; o++) "0" === e[o] && i.push(o + 1);
							if (0 !== i.length) {
								for (var r = [3, 3, 3, 2, 2, 2, 1], s = e.length - i.length - 9, a = 0, h = 0, c = 0; c < r.length - 1 && !(s <= a); c++) a += r[c], h++;
								var u = r[h];
								g.shuffle(i);
								for (var l, f = Math.min(u, i.length), v = 0; v < f; v++) l = i[v], p.gotItem = p.gotItem.slice(0, l - 1) + "1" + p.gotItem.slice(l);
								var m = new O(n, i.slice(0, f), (function() {
									t.nextPointcard()
								}));
								d.addChild(m)
							}
						}));
						var i = !1;
						t.on("resultEnd", (function() {
							!n.vars.env.isAdPlatform || t.pointcard.collectAll || i ? d.sendScore() : (e.show(), i = !0)
						})), e.on("complete", (function() {
							t.pointcard.stamp(1)
						})), e.on("cancel", (function() {
							d.sendScore()
						})), d.addChild(t), d.addChild(e)
					}));
					d.addChild(t), d.addChild(e)
				};
				N.on("stopTimer", (function() {
					d.task.clear("timer")
				})), N.on("gameclear", (function() {
					u.score = S(), setTimeout(Z, 500)
				})), this.on("sentScore", (function() {
					var t = new a(n, n.resources.spritesheets.text["next_button.png"]);
					t.position.set(n.vars.additional.width / 2, n.vars.additional.height - 100), t.interactiveChildren = !1, l.alpha(d, t, null, 0, 1, .15), l.scale(d, t, null, 0, 1, .2, l.Ease.quadratic(-2), (function() {
						t.interactiveChildren = !0
					})), t.once("buttontap", (function() {
						t.setEnable(!1), i.viaTop = !1, w.setRandomOrder(n, p), d.nextScene()
					})), d.addChild(t)
				})), R.on("buttontap", (function() {
					s.pauseMuteBGM(n, "bgm"), d.interactiveChildren = !1, v.fadeIn(.2, 1, (function() {
						new E(n, (function() {
							s.playMuteBGM(n, "bgm"), N.reset(), Y.setEnable(!1), F = 0, J = 3, Q.texture = K(J), v.fadeOut(.2, 0, (function() {
								d.interactiveChildren = !0, F = 0
							}))
						}))
					}))
				})), Y.on("buttontap", (function() {
					J > 0 ? N.undo() && (n.vars.env.isAdPlatform && J--, Q.texture = K(J), Y.setEnable(!(J > 0 && N.isFirst))) : z.show()
				})), z.on("complete", (function() {
					J = 3, Q.texture = K(J), Y.setEnable(!N.isFirst)
				})), q.on("buttontap", (function() {
					V.show()
				})), V.on("complete", (function() {
					q.setEnable(!1), setTimeout((function() {
						N.addInventory()
					}), 200)
				})), this.addChild(new o(n)), this.addChild(N), this.addChild(m), this.addChild(L), this.addChild(R), n.vars.env.isAdPlatform && this.addChild(q), this.addChild(Y), this.addChild(H), this.addChild($), this.addChild(W), this.addChild(v), this.addChild(V), this.addChild(z), i.viaTop || this.addChild(f)
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i
		}(n);
	L.viaTop = !1;
	var F = function(t) {
			function i(i, n, h, p) {
				var d = this;
				t.call(this, i, n, h, p), s.stop(i, "bgm");
				var f = new e.Point(i.vars.additional.width / 2, i.vars.additional.height / 2),
					v = new e.Sprite(i.resources.images["titlelogo.png"]);
				v.anchor.set(.5), v.position.set(f.x, f.y - 125), v.scale.set(0), setTimeout((function() {
					l.scale(d, v, "titleScale", 0, 1, .2, l.Ease.quadratic(-2)), l.alpha(d, v, "titleAlpha", 0, 1, .1)
				}), 200);
				var m = new e.Sprite(i.resources.spritesheets.game["gamestart_signboard.png"]);
				m.anchor.set(.5, .04), m.position.set(f.x, f.y + 75);
				l.tween(this, "signBoardSwing", 0, -20, .8, (function(t) {
					return m.rotation = t * Math.PI / 180
				}), l.Ease.decel, (function() {
					l.tween(d, "signBoardSwing", -20, 20, 1.6, (function(t) {
						return m.rotation = t * Math.PI / 180
					}), l.Ease.cosine, (function() {}), 0)
				}));
				var g = new e.Container;
				g.y = 215;
				var y = new e.Sprite(i.resources.spritesheets.game["topstage_text.png"]),
					_ = new b(i.resources.spritesheets.number, "topstage_no", ".png", h.stageId + 1);
				y.anchor.set(0, .5), _.setAnchor(0, .5), _.margin = 1, _.padding = 3, _.x = y.width + 10, g.addChild(y), g.addChild(_), g.pivot.x = g.width / 2, L.viaTop = !0, w.setRandomOrder(i, h);
				var I = new w(i, !1);
				I.interactiveChildren = !1;
				var x = new r(i, 255);
				x.interactive = !0;
				var P = new C(i),
					E = new a(i, i.resources.spritesheets.game["uibuttonvolume_1.png"], i.resources.spritesheets.game["uibuttonvolume_2.png"]);
				E.setToggle(i.vars.additional.sound), E.x = i.vars.additional.width - E.width / 2 - 15, E.y = E.height / 2 + 15;
				var S = new c(i, n, 10, -10),
					M = new u(i, .5, 1, 1131541);
				E.on("buttontap", (function() {
					var t = E.switchToggle();
					i.vars.additional.sound = t
				})), x.on("tap", (function() {
					var t;
					s.play(i, "button"), t = function() {
						P.open((function() {
							d.playGame()
						}))
					}, d.interactiveChildren = !1, l.tween(d, "fadeoutUi", 1, 0, .15, (function(t) {
						var e = .5 * t + .5;
						E.alpha = t, m.alpha = t, v.alpha = t, S.alpha = t, M.alpha = t, E.scale.set(e), v.scale.set(e)
					})), l.vector(d, m, "signBoardmove", new e.Point(0, 200), .15, l.Ease.linear, t)
				})), this.addChild(new o(i)), this.addChild(I), this.addChild(x), this.addChild(P), m.addChild(g), this.addChild(m), this.addChild(E), this.addChild(v), this.addChild(M), this.addChild(S), I.cacheAsBitmap = !0
			}
			return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i
		}(n),
		N = function(t) {
			this.image = {}, this.sheet = {}, this.imagedefine = {}, this.sheetdefine = {}, this.$ = t
		};
	N.prototype.resourceTakeout = function(t) {
		var e = {};
		for (var i in t) e[i] = t[i].data;
		return e
	}, N.prototype.defineImages = function(t) {
		this.imagedefine = t
	}, N.prototype.defineSpritesheets = function(t) {
		this.sheetdefine = t
	}, N.prototype.loadAllResources = function() {
		var e = this,
			i = new t.TextureLoader,
			n = new t.SpritesheetLoader,
			o = {},
			r = {},
			s = this.$.vars.api.getLanguage(),
			a = [];
		for (var h in this.imagedefine) o[h] = this.imagedefine[h].replace(/\?/, s);
		for (var c in this.sheetdefine) r[c] = this.sheetdefine[c].replace(/\?/, s);
		var p = {
			basepath: this.$.vars.env.basepath,
			version: this.$.vars.env.version + ""
		};
		return a.push(i.loadAllAsync(o, p).then((function(t) {
			e.image = e.resourceTakeout(t)
		}))), a.push(n.loadAllAsync(r, p).then((function(t) {
			e.sheet = e.resourceTakeout(t)
		}))), Promise.all(a)
	};
	var H = function(e) {
			function i(i) {
				var n = this;
				e.call(this);
				var o = !1,
					r = function(t) {
						i.vars.api.changeLanguageAsync(t).then((function() {
							var t = new N(i);
							t.defineImages({
								"titlelogo.png": "assets/languages/?/titlelogo.png",
								asobikata: "assets/languages/?/asobikata.png"
							}), t.defineSpritesheets({
								text: "assets/languages/?/text.json"
							}), t.loadAllResources().then((function() {
								for (var e in t.image) i.resources.images[e] = t.image[e];
								for (var n in t.sheet) i.resources.spritesheets[n] = t.sheet[n];
								d()
							}))
						}))
					};
				this.scale.set(.5), i.vars.additional.width = 2 * i.width, i.vars.additional.height = 2 * i.height, i.vars.additional.sound = !0;
				for (var s = "", a = 0; a < 9; a++) s += "1";
				for (var c = 9; c < 79; c++) s += "0";
				var p = {
						stageId: 0,
						highScore: 0,
						stamp: 0,
						gotItem: s
					},
					u = i.vars.data.saveData;
				u && Object.keys(u).length === Object.keys(p).length && i.vars.data.saveData.gotItem.length === s.length && (p = i.vars.data.saveData);
				var l = {
						score: 0
					},
					d = function(e) {
						var s, a = new t.Container,
							c = "",
							u = {};
						u.manual = h, u.top = F, u.game = L;
						var d = [];
						for (var f in u) d.push(f);
						var v = function(t) {
								return d.findIndex((function(e) {
									return e === t
								}))
							},
							m = function(t) {
								c = t, s = new u[t](i, n, p, l), a.addChild(s)
							},
							g = function(t, e) {
								void 0 === t && (t = function() {}), void 0 === e && (e = function() {}), s.interactiveChildren = !1;
								var o = new $(i);
								o.FadeIn((function() {
									s.task.clear(), s.destroy(), t(), o.FadeOut((function() {
										n.removeChild(o), o.task.clear(), o.destroy(), e()
									}))
								})), n.addChild(o)
							};
						n.removeAllListeners();
						var y = function() {
							if (v(c) < Object.keys(u).length - 1) {
								var t = d[v(c) + 1];
								g((function() {
									m(t)
								}))
							} else g((function() {
								i.vars.api.callAsync("playGame").then((function() {
									m("game")
								}))
							}))
						};
						n.on("startGame", (function() {
							o ? y() : i.vars.api.callAsync("startGame").then(y), o = !0
						})), n.on("nextScene", y), n.on("playGame", (function() {
							s.interactiveChildren = !1, s.task.clear(), i.vars.api.callAsync("playGame").then((function() {
								s.destroy(), m("game")
							}))
						})), n.on("quitGame", (function() {
							g((function() {
								i.vars.api.callAsync("quitGame").then((function() {
									i.vars.api.viewAdAsync().then((function(t) {
										m("top")
									})).catch((function(t) {
										m("top")
									}))
								}))
							}))
						}));
						var _ = function(t) {
							void 0 === t && (t = function() {}), i.vars.api.sendScoreAsync(l.score).then((function() {
								i.vars.api.callAsync("finishPlay").then(t)
							})).catch(_)
						};
						n.on("sendScore", (function() {
							var t = function() {
								_((function() {
									s.emit("sentScore")
								}))
							};
							i.vars.api.setDataAsync("saveData", p, "always").then(t).catch(t)
						})), n.on("changeLang", (function(t) {
							g((function() {
								r(t)
							}))
						})), m("manual"), n.addChild(a)
					};
				r(i.vars.api.getLanguage())
			}
			return e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i, i
		}(t.Container),
		$ = function(t) {
			function e(e) {
				t.call(this), this.graphic = new PIXI.Graphics, this.graphic.beginFill(0), this.graphic.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height), this.graphic.endFill(), this.graphic.alpha = 0, this.addChild(this.graphic)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.FadeIn = function(t) {
				var e = this;
				void 0 === t && (t = function() {});
				var i = 0;
				this.graphic.alpha = 0, this.task.clear("fade"), this.task.on("fade", (function(n) {
					var o = n.delta / 60,
						r = i / .165;
					if (i >= .165) return e.task.clear("fade"), e.graphic.alpha = 1, void t();
					e.graphic.alpha = r, i += o
				}))
			}, e.prototype.FadeOut = function(t) {
				var e = this;
				void 0 === t && (t = function() {});
				var i = 0;
				this.graphic.alpha = 1, this.task.clear("fade"), this.task.on("fade", (function(n) {
					var o = n.delta / 60,
						r = i / .165;
					if (i >= .165) return e.task.clear("fade"), e.graphic.alpha = 0, void t();
					e.graphic.alpha = 1 - r, i += o
				}))
			}, e
		}(t.Container),
		R = t.Content.create();
	R.setConfig({
		width: 360,
		height: 640
	}), R.defineImages({
		"background.png": "assets/images/background.png",
		"gamestart_door_l.png": "assets/images/gamestart_door_l.png",
		"gamestart_door_r.png": "assets/images/gamestart_door_r.png",
		"popup.png": "assets/images/popup.png",
		"result_popup.png": "assets/images/result_popup.png"
	}), R.defineSpritesheets({
		number: "assets/spritesheets/number.json",
		item: "assets/spritesheets/item.json",
		game: "assets/spritesheets/game.json",
		lang: "assets/languages/languages.json",
		langui: "assets/languages/languageui.json"
	}), R.defineSounds({
		bgm: "assets/sounds/bgm.mp3",
		button: "assets/sounds/se_button.mp3",
		clear: "assets/sounds/se_clear.mp3",
		get: "assets/sounds/se_get.mp3",
		miss: "assets/sounds/se_miss.mp3",
		take: "assets/sounds/se_motsu.mp3",
		put: "assets/sounds/se_oku.mp3",
		sorted1: "assets/sounds/se_sorou.mp3",
		sorted2: "assets/sounds/se_sorouhikaru.mp3",
		stamp: "assets/sounds/se_stamp.mp3",
		start: "assets/sounds/se_start.mp3"
	}), R.defineJsons({
		stages: "assets/jsons/stages.json"
	}), R.defineLibraries({
		root: H
	}), i.defineAnimatesTo(R, {}), SCG.startAsync({
		Content: R,
		width: 360,
		height: 640
	})
}(Pixim, PIXI, Pixim.animate);