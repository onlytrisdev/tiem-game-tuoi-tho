(function() {
	var e = {
			419: function() {
				HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
					value: function(e, t, n) {
						for (var i = atob(this.toDataURL(t, n).split(",")[1]), a = i.length, r = a >> 2, s = new Uint8Array(a), o = new Uint32Array(s.buffer, 0, r), c = 0, u = 0; c < r; c++) o[c] = i.charCodeAt(u++) | i.charCodeAt(u++) << 8 | i.charCodeAt(u++) << 16 | i.charCodeAt(u++) << 24;
						for (var l = 3 & a; l--;) s[u] = i.charCodeAt(u++);
						e(new Blob([s], {
							type: t || "image/png"
						}))
					}
				})
			},
			605: function(e, t, n) {
				"use strict";
				n.d(t, {
					J: function() {
						return g
					}
				});
				var i = n(3),
					a = n(84),
					r = n.n(a),
					s = n(51),
					o = n.n(s),
					c = n(2),
					u = n.n(c),
					l = n(609),
					h = n(606),
					d = n(608),
					p = GameCore.Configs.Notification,
					f = p.GameTitle,
					m = p.GameImage,
					g = function() {
						function e() {}
						var t = e.prototype;
						return t.createAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.tournament.createAsync(t);
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.shareAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.tournament.shareAsync(t);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.joinAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.tournament.joinAsync(t);
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.postScoreAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.tournament.postScoreAsync(t);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.getTournamentsAsync = function() {
							var e = (0, i.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.tournament.getTournamentsAsync();
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), e
					}(),
					v = function() {
						function e(e) {
							var t = this;
							this.facebook = void 0, this.isCalledSubscribeBot = !1, this.isCalledCreateShortcut = !1, this.requestTournamentAsync = function() {
								var e = (0, i.Z)(u().mark((function e(n) {
									var i;
									return u().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return e.prev = 0, e.next = 3, t.facebook.getTournamentAsync();
											case 3:
												return e.next = 5, t.facebook.tournament.shareAsync({
													score: n
												});
											case 5:
												e.next = 12;
												break;
											case 7:
												return e.prev = 7, e.t0 = e.catch(0), i = GameSDK.player.getName(), e.next = 12, t.facebook.tournament.createAsync({
													initialScore: n,
													config: {
														tournamentTitle: i + "'s Tournament"
													}
												});
											case 12:
											case "end":
												return e.stop()
										}
									}), e, null, [
										[0, 7]
									])
								})));
								return function(t) {
									return e.apply(this, arguments)
								}
							}(), this.facebook = e
						}
						var t = e.prototype;
						return t.switchAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameCore.Utils.Valid.isValueChangeAsync(window.__fbGameReady, !0);
										case 2:
											return e.next = 4, GameSDK.context.switchAsync(t);
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.chooseAsync = function() {
							var e = (0, i.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, GameCore.Utils.Valid.isValueChangeAsync(window.__fbGameReady, !0);
										case 3:
											return e.next = 5, GameSDK.context.chooseAsync({
												filters: ["INCLUDE_EXISTING_CHALLENGES"],
												minSize: 2,
												maxSize: 2
											});
										case 5:
										case 15:
											return e.abrupt("return", GameSDK.context.getID());
										case 8:
											if (e.prev = 8, e.t0 = e.catch(0), !(e.t0 instanceof Object && GameCore.Utils.Object.hasOwn(e.t0, "code"))) {
												e.next = 16;
												break
											}
											e.t1 = e.t0.code, e.next = "USER_INPUT" === e.t1 ? 14 : "SAME_CONTEXT" === e.t1 ? 15 : 16;
											break;
										case 14:
											return e.abrupt("return", !1);
										case 16:
											return e.abrupt("return", null);
										case 17:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 8]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t.createAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, GameCore.Utils.Valid.isValueChangeAsync(window.__fbGameReady, !0);
										case 3:
											return e.next = 5, GameSDK.context.createAsync("" + t);
										case 5:
										case 15:
											return e.abrupt("return", GameSDK.context.getID());
										case 8:
											if (e.prev = 8, e.t0 = e.catch(0), !(e.t0 instanceof Object && GameCore.Utils.Object.hasOwn(e.t0, "code"))) {
												e.next = 16;
												break
											}
											e.t1 = e.t0.code, e.next = "USER_INPUT" === e.t1 ? 14 : "SAME_CONTEXT" === e.t1 ? 15 : 16;
											break;
										case 14:
											return e.abrupt("return", !1);
										case 16:
											return e.abrupt("return", null);
										case 17:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 8]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.getPlayerToken = function() {
							var e = (0, i.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.player.getSignedPlayerInfoAsync();
										case 2:
											return t = e.sent, e.abrupt("return", t.getSignature());
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t.getContextPlayers = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								var n, i;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, GameSDK.context.getPlayersAsync();
										case 3:
											return n = e.sent, i = [], n.forEach((function(e) {
												var n = e.getID();
												if (n !== t) {
													var a = e.getName();
													if (a) {
														var r = e.getPhoto();
														i.push(new h.Z(n, a, r).toObject())
													}
												}
											})), e.abrupt("return", GameCore.Utils.Array.unique(i));
										case 9:
											return e.prev = 9, e.t0 = e.catch(0), console.warn("getPlayersAsync", {
												error: e.t0
											}), e.abrupt("return", []);
										case 13:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 9]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.shareAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.shareAsync(t);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.sendMessage = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								var n, i, a, r, s, o;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = t.data, i = t.image, a = t.template, r = t.cta, s = t.text, o = {
												data: n,
												image: i,
												action: "CUSTOM",
												template: a,
												cta: r,
												text: s,
												strategy: "IMMEDIATE",
												notification: "PUSH"
											}, e.next = 4, GameSDK.updateAsync(o);
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.inviteAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.inviteAsync(t);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.postSessionScoreAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.postSessionScoreAsync(t);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.getRewardedVideoAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.getRewardedVideoAsync(t);
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.getInterstitialAdAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.getInterstitialAdAsync(t);
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), t.getContextID = function() {
							return GameSDK.context.getID()
						}, t.attemptToAddShortcut = function() {
							var e = (0, i.Z)(u().mark((function e() {
								var t, n, i, a, s, o;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!this.isCalledCreateShortcut) {
												e.next = 2;
												break
											}
											return e.abrupt("return", !1);
										case 2:
											if (e.prev = 2, "ANDROID" !== GameSDK.getPlatform()) {
												e.next = 6;
												break
											}
											return e.abrupt("return", !1);
										case 6:
											return e.next = 8, GameSDK.player.getDataAsync(["lastCallCreateShortcut"]);
										case 8:
											if (e.t0 = e.sent, e.t0) {
												e.next = 11;
												break
											}
											e.t0 = {};
										case 11:
											if (n = e.t0, !(i = n.lastCallCreateShortcut) || !(0, d.Gm)(+i)) {
												e.next = 15;
												break
											}
											return e.abrupt("return", !1);
										case 15:
											if (a = Date.now(), GameSDK.player.setDataAsync({
													lastCallCreateShortcut: a
												}), r()(t = GameSDK.getSupportedAPIs()).call(t, "canCreateShortcutAsync")) {
												e.next = 20;
												break
											}
											return e.abrupt("return", !1);
										case 20:
											return e.next = 22, GameSDK.canCreateShortcutAsync();
										case 22:
											if (!e.sent) {
												e.next = 40;
												break
											}
											return s = l._.SHORTCUT_CREATE, o = l._.SHORTCUT_CREATE_POPUP, this.isCalledCreateShortcut = !0, window.game.analytics.event(o), e.prev = 27, e.next = 30, GameCore.Utils.Valid.isValueChangeAsync(window.__fbGameReady, !0);
										case 30:
											return e.next = 32, GameSDK.createShortcutAsync();
										case 32:
											return window.game.analytics.event(s, {
												success: !0
											}), e.abrupt("return", !0);
										case 36:
											return e.prev = 36, e.t1 = e.catch(27), window.game.analytics.event(s, {
												success: !1
											}), e.abrupt("return", !1);
										case 40:
											return e.abrupt("return", !1);
										case 43:
											return e.prev = 43, e.t2 = e.catch(2), e.abrupt("return", !1);
										case 46:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[2, 43],
									[27, 36]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t.attemptToSubscribeBot = function() {
							var e = (0, i.Z)(u().mark((function e() {
								var t, n, i, a, s, o;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!this.isCalledSubscribeBot) {
												e.next = 2;
												break
											}
											return e.abrupt("return", !1);
										case 2:
											if (e.prev = 2, r()(t = GameSDK.getSupportedAPIs()).call(t, "player.canSubscribeBotAsync")) {
												e.next = 6;
												break
											}
											return e.abrupt("return", !1);
										case 6:
											return e.next = 8, GameSDK.player.canSubscribeBotAsync();
										case 8:
											if (!e.sent) {
												e.next = 37;
												break
											}
											return e.next = 12, GameSDK.player.getDataAsync(["lastCallSubscribeBot"]);
										case 12:
											if (e.t0 = e.sent, e.t0) {
												e.next = 15;
												break
											}
											e.t0 = {};
										case 15:
											if (n = e.t0, !(i = n.lastCallSubscribeBot) || !(0, d.Gm)(+i)) {
												e.next = 19;
												break
											}
											return e.abrupt("return", !1);
										case 19:
											return a = Date.now(), GameSDK.player.setDataAsync({
												lastCallSubscribeBot: a
											}), s = l._.BOT_SUBSCRIBE, o = l._.BOT_SUBSCRIBE_POPUP, this.isCalledSubscribeBot = !0, window.game.analytics.event(o), e.prev = 24, e.next = 27, GameCore.Utils.Valid.isValueChangeAsync(window.__fbGameReady, !0);
										case 27:
											return e.next = 29, GameSDK.player.subscribeBotAsync();
										case 29:
											return window.game.analytics.event(s, {
												success: !0
											}), e.abrupt("return", !0);
										case 33:
											return e.prev = 33, e.t1 = e.catch(24), window.game.analytics.event(s, {
												success: !1
											}), e.abrupt("return", !1);
										case 37:
											return e.abrupt("return", !1);
										case 40:
											return e.prev = 40, e.t2 = e.catch(2), e.abrupt("return", !1);
										case 43:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[2, 40],
									[24, 33]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t.matchPlayerAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t, n, i) {
								var a;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (e.prev = 0, r()(a = GameSDK.getSupportedAPIs()).call(a, "checkCanPlayerMatchAsync")) {
												e.next = 4;
												break
											}
											return e.abrupt("return", !1);
										case 4:
											return e.next = 6, GameSDK.checkCanPlayerMatchAsync();
										case 6:
											if (e.sent) {
												e.next = 9;
												break
											}
											return e.abrupt("return", !1);
										case 9:
											return e.next = 11, GameSDK.matchPlayerAsync(t, n, i);
										case 11:
											return e.abrupt("return", !0);
										case 14:
											return e.prev = 14, e.t0 = e.catch(0), e.abrupt("return", !1);
										case 17:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 14]
								])
							})));
							return function(t, n, i) {
								return e.apply(this, arguments)
							}
						}(), t.setLoadingProgress = function(e) {
							GameSDK.setLoadingProgress(e)
						}, t.getLocale = function() {
							return GameSDK.getLocale() || "en"
						}, t.injectTournament = function() {
							var e = (0, i.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!GameCore.Configs.Tournament.UseMock) {
												e.next = 8;
												break
											}
											return e.next = 4, n.e(543).then(n.bind(n, 595));
										case 4:
											t = e.sent.default, this.facebook.tournament = new t, e.next = 9;
											break;
										case 8:
											this.facebook.tournament = new g;
										case 9:
											this.facebook.getTournamentAsync = this.getTournamentAsync, this.facebook.requestTournamentAsync = this.requestTournamentAsync;
										case 11:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t.getTournamentAsync = function() {
							var e = (0, i.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, GameSDK.getTournamentAsync();
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t.sendNotificationAsync = function() {
							var e = (0, i.Z)(u().mark((function e(t) {
								var n, i;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, console.log("\ud83e\udd16 ? sendNotificationAsync", t), n = t.message, i = t.delayTime, e.next = 5, FBInstant.graphApi.requestAsync("/me/notifications", "POST", {
												message: o()({
													title: f,
													body: n,
													media_url: m
												}),
												schedule_interval: i
											});
										case 5:
											e.next = 10;
											break;
										case 7:
											e.prev = 7, e.t0 = e.catch(0), console.error("\ud83e\udd16 ? sendNotificationAsync", e.t0);
										case 10:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 7]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), e
					}();
				t.Z = v
			},
			436: function(e, t, n) {
				"use strict";
				var i = n(55),
					a = n.n(i),
					r = n(34),
					s = n.n(r),
					o = function(e, t) {
						return void 0 === t && (t = 1), a()({
							length: Math.ceil(e.length / t)
						}, (function(n, i) {
							return s()(e).call(e, i * t, i * t + t)
						}))
					},
					c = n(31),
					u = n.n(c),
					l = n(84),
					h = n.n(l),
					d = function(e, t) {
						return u()(e).call(e, (function(e) {
							return !h()(t).call(t, e)
						}))
					},
					p = function(e) {
						for (var t = e.length - 1; t > 0; t--) {
							var n = Math.floor(Math.random() * (t + 1)),
								i = [e[n], e[t]];
							e[t] = i[0], e[n] = i[1]
						}
					},
					f = n(18),
					m = n.n(f),
					g = function(e, t, n) {
						return m()(n).call(n, e) === t && null !== e && void 0 !== e
					},
					v = function(e) {
						return u()(e).call(e, g)
					},
					y = {
						chunk: o,
						difference: d,
						shuffle: p,
						unique: v
					},
					S = n(46),
					b = n.n(S),
					E = n(251),
					A = n.n(E),
					w = A()((function(e, t) {
						if ("string" === typeof e) {
							var n = t[e.toLowerCase()];
							if ("string" === typeof n) return n
						}
						return "?"
					})),
					T = A()((function(e) {
						for (var t = null, n = [], i = /:([A-Z0-9?]+)/gm; null !== (t = i.exec(e));) n.push(t[1]);
						return n
					})),
					C = A()((function(e) {
						for (var t = null, n = [], i = /([0-9]+[A-Z?]{1}|[A-Z?]{1})/gm; null !== (t = i.exec(e));) {
							var a = t[0];
							if (a.length >= 2) {
								var r, o = a.length,
									c = s()(a).call(a, 0, o - 1),
									u = a[o - 1],
									l = b()(r = new Array(+c)).call(r, u);
								n.push.apply(n, l)
							} else n.push(a)
						}
						return n
					})),
					P = function(e, t) {
						var n = e,
							i = GameCore.Utils.Object.invert(t),
							a = {},
							r = 0,
							s = 0;
						return T(n).forEach((function(e) {
							r = 0, s++, a[s] || (a[s] = {}), C(e).forEach((function(e) {
								r++, a[s][r] = w(e, i)
							}))
						})), a
					},
					I = A()((function(e, t) {
						var n = t[e];
						return "string" === typeof n ? "" + n.toUpperCase() : "?"
					})),
					k = function e(t, n, i) {
						void 0 === i && (i = !1);
						var a = "";
						if (!GameCore.Utils.Valid.isObject(t)) return a;
						var r = "",
							o = 1;
						for (var c in t)
							if (GameCore.Utils.Object.hasOwn(t, c)) {
								var u = t[c];
								if (GameCore.Utils.Valid.isObject(u)) a += ":" + e(u, n, !0);
								else if (GameCore.Utils.Valid.isString(u)) {
									var l = I(u, n);
									l === r ? (o++, a = s()(a).call(a, 0, -2)) : o = 1, a += "" + o + l, r = l
								}
							} return a = a.replace(/1([A-Z])/g, "$1")
					},
					x = function(e) {
						try {
							return atob(e)
						} catch (t) {
							return ""
						}
					},
					O = {
						decodeMap: P,
						encodeMap: k,
						hashToString: x,
						stringToHash: function(e) {
							try {
								return btoa(e)
							} catch (t) {
								return ""
							}
						}
					},
					R = function(e) {
						try {
							return JSON.parse(e)
						} catch (t) {
							return null
						}
					},
					_ = n(51),
					B = n.n(_),
					D = function(e) {
						try {
							return B()(e, null, 0)
						} catch (t) {
							return ""
						}
					},
					N = function(e) {
						return R(D(e))
					},
					M = {
						clone: N,
						decode: R,
						encode: D
					},
					L = function(e) {
						var t = "object" === typeof e || "function" === typeof e,
							n = Array.isArray(e);
						return null !== e && t && !n
					},
					F = function(e) {
						return void 0 === e || null === e
					},
					G = function e(t) {
						if (!L(t)) return t;
						for (var n in t) {
							F(t[n]) && delete t[n];
							var i = t[n];
							L(i) && (t[n] = e(i))
						}
						return t
					},
					Z = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					},
					U = n(25),
					H = n.n(U),
					V = function(e) {
						var t = {};
						return H()(e).forEach((function(n) {
							if (Z(e, n)) {
								var i = e[n];
								"string" === typeof i && (t[i] = n)
							}
						})), t
					},
					Y = function(e, t) {
						if (!Array.isArray(e)) return {};
						var n = {};
						return e.forEach((function(e) {
							if (Z(e, t)) {
								var i = e[t];
								"string" === typeof i && (n[i] = e)
							}
						})), n
					},
					W = {
						clear: G,
						hasOwn: Z,
						invert: V,
						keyBy: Y
					},
					z = function(e) {
						return e ? e[0].toUpperCase() + s()(e).call(e, 1) : e
					},
					K = function(e) {
						var t = 0;
						if (0 == e.length) return t;
						for (var n = 0; n < e.length; n++) {
							t = (t << 5) - t + e.charCodeAt(n), t &= t
						}
						return t
					},
					j = n(148),
					X = n.n(j),
					q = function(e) {
						var t;
						return X()(t = H()(e)).call(t, (function(t, n) {
							var i = e[n];
							return void 0 !== i && t.push(n + "=" + i), t
						}), []).join("&")
					},
					Q = function(e) {
						void 0 === e && (e = "0x");
						for (var t = e, n = 0; n < 6; n++) t += "0123456789ABCDEF" [Math.floor(16 * Math.random())];
						return t
					},
					J = function(e, t) {
						var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#%&!",
							i = "",
							a = e;
						void 0 != t && (a -= t.length, i += t);
						for (var r = 0; r < a; r++) {
							var s = Math.floor(67 * Math.random());
							i += n.charAt(s)
						}
						return i
					},
					$ = function(e) {
						return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0111\u0110]/g, (function(e) {
							return "\u0111" === e ? "d" : "D"
						}))
					},
					ee = n(8),
					te = n.n(ee),
					ne = n(429),
					ie = n.n(ne),
					ae = function(e, t) {
						var n, i = e.split(" "),
							a = (i.length <= 1 ? te()(n = []).call(n, i) : [i[0], i.pop()]).join(" "),
							r = ie()(a).call(a, " ") || 0,
							s = r >= 0 ? r : t;
						return (a.length > t ? a.substring(0, s) : a).substring(0, t)
					},
					re = n(258),
					se = n.n(re),
					oe = {
						capitalize: z,
						hashCode: K,
						params: q,
						toCamelCase: function(e) {
							var t = e.replace(/[-_\s.]+(.)?/g, (function(e, t) {
								return t ? t.toUpperCase() : ""
							}));
							return t.substr(0, 1).toLowerCase() + t.substr(1)
						},
						toUpperCamelCase: function(e) {
							var t = e.replace(/[-_\s.]+(.)?/g, (function(e, t) {
								return t ? t.toUpperCase() : ""
							}));
							return t.substr(0, 1).toUpperCase() + t.substr(1)
						},
						randomColor: Q,
						random: J,
						removeDiacritics: $,
						getShortName: ae,
						generateObjectId: function(e) {
							void 0 === e && (e = 16);
							var t = function(t) {
								return Math.floor(t).toString(e)
							};
							return t(Date.now() / 1e3) + se()(" ").call(" ", e).replace(/./g, (function() {
								return t(Math.random() * e)
							}))
						}
					},
					ce = function(e) {
						return "boolean" === typeof e
					},
					ue = function() {
						return false
					},
					le = function(e) {
						return "function" === typeof e
					},
					he = function(e) {
						return "number" === typeof e
					},
					de = function(e) {
						var t;
						return m()(t = ["string", "number", "symbol"]).call(t, typeof e) > -1
					},
					pe = function(e) {
						return "string" === typeof e
					},
					fe = n(26),
					me = n.n(fe),
					ge = function(e, t, n) {
						var i = n || {},
							a = i.timeout,
							r = void 0 === a ? 1e3 : a,
							s = i.checkInterval,
							o = void 0 === s ? 100 : s;
						return new(me())((function(n) {
							var i = setInterval((function() {
								("function" === typeof e ? e() : e) === ("function" === typeof t ? t() : t) && (clearInterval(i), n(!0))
							}), o);
							r > 0 && setTimeout((function() {
								clearInterval(i), n(!1)
							}), r)
						}))
					},
					ve = function(e) {
						if (m()(e).call(e, ".") < 0) return e;
						for (var t = e.length - 1; t >= 0; t--) {
							if ("." == e[t]) return e.substring(0, t);
							if ("0" != e[t]) return e.substring(0, t + 1)
						}
						return e
					},
					ye = function(e, t) {
						var n = t || {},
							i = n.fractionalDigits,
							a = void 0 === i ? 0 : i,
							r = n.startAbbreviate,
							s = void 0 === r ? 1e3 : r,
							o = n.abbreviateStep,
							c = void 0 === o ? 3 : o,
							u = n.maxLength,
							l = void 0 === u ? -1 : u,
							h = n.removeLastZero,
							d = void 0 === h || h,
							p = n.suffixes,
							f = void 0 === p ? ["", "k", "m", "b", "t", "q"] : p,
							m = -1 === l ? 99999999 : l;
						if (e >= s) {
							var g = Math.floor(e / Math.pow(10, c)),
								v = Math.floor((g.toString().length - 1) / c) + 1,
								y = (e / Math.pow(Math.pow(10, c), v)).toFixed(a),
								S = m - f[v].length,
								b = y.substring(0, S);
							return (d ? ve(b) : b) + f[v]
						}
						var E = e.toFixed(a),
							A = m - f[0].length,
							w = E.substring(0, A);
						return d ? ve(w) : w + f[0]
					},
					Se = {
						Array: y,
						Hash: O,
						Json: M,
						Object: W,
						String: oe,
						Valid: {
							isBoolean: ce,
							isDebugger: ue,
							isFunction: le,
							isNumber: he,
							isObject: L,
							isPropertyKey: de,
							isString: pe,
							isValueChangeAsync: ge
						},
						Image: {
							drawCircle: function(e) {
								var t = e.scene,
									n = e.key,
									i = e.newKey,
									a = t.textures.get(n).getSourceImage();
								if (!a) return !1;
								var r = Math.min(a.width, a.height);
								i || t.textures.removeKey(n);
								var s = t.textures.createCanvas(i || n, r, r),
									o = s.context;
								return o.beginPath(), o.arc(r / 2, r / 2, r / 2, 0, 2 * Math.PI, !1), o.clip(), s.draw((a.width - r) / 2, (a.height - r) / 2, a), !0
							},
							drawBorder: function(e) {
								var t = e.scene,
									n = e.key,
									i = e.newKey,
									a = e.radius,
									r = e.width,
									s = e.height,
									o = t.textures.get(n).getSourceImage();
								if (!o) return !1;
								r || (r = o.width % 512 == 0 ? o.width + 1 : o.width), s || (s = o.height % 512 == 0 ? o.height + 1 : o.height), i || t.textures.removeKey(n);
								var c = t.textures.createCanvas(i || n, r, s),
									u = c.context,
									l = Math.min(r, s) / 100 * a / 2;
								return u.beginPath(), u.moveTo(0 + l, 0), u.lineTo(0 + r - l, 0), u.quadraticCurveTo(0 + r, 0, 0 + r, 0 + l), u.lineTo(0 + r, 0 + s - l), u.quadraticCurveTo(0 + r, 0 + s, 0 + r - l, 0 + s), u.lineTo(0 + l, 0 + s), u.quadraticCurveTo(0, 0 + s, 0, 0 + s - l), u.lineTo(0, 0 + l), u.quadraticCurveTo(0, 0, 0 + l, 0), u.closePath(), u.clip(), c.draw(0, 0, o), !0
							}
						},
						Number: {
							toAbbreviatedString: ye,
							padStart: function(e, t, n) {
								void 0 === n && (n = "0");
								for (var i = e.toString(), a = i.length, r = 0; r < t - a; r++) i = n + i;
								return i
							},
							padEnd: function(e, t, n) {
								void 0 === n && (n = "0");
								for (var i = e.toString(), a = i.length, r = 0; r < t - a; r++) i += n;
								return i
							}
						},
						Device: {
							isDesktop: function() {
								var e = navigator.userAgent;
								return /Windows|Mac OS/i.test(e) && !/like Mac OS/.test(e)
							},
							isMobile: function() {
								var e = navigator.userAgent;
								return /Android|iP[ao]d|iPhone/i.test(e)
							},
							isAndroid: function() {
								return "ANDROID" === FBInstant.getPlatform()
							},
							isIOS: function() {
								return "IOS" === FBInstant.getPlatform()
							},
							isMobileWeb: function() {
								return "MOBILE_WEB" === FBInstant.getPlatform()
							},
							pixelRatio: function() {
								return Math.round(window.devicePixelRatio) || 1
							}
						}
					},
					be = n(5),
					Ee = n(600),
					Ae = {
						AppId: "fa368d2c1fe144df9a294c096429e47b",
						ApiHost: "https://fbig-singleplay-apps.citigo.site",
						OtherHost: "https://fbig-leaderboards.citigo.site",
						Ads: {
							BannerAdOptions: []
						},
						Game: {
							DisableLandscape: !0
						},
						LeadersBoard: {
							LeaderboardId: ""
						},
						Match: {
							MaxRescueCount: 1,
							RescueGamePopupTimeout: 15,
							DelayNoThank: 2e3,
							ContinueSingleMatchEnabled: !1
						}
					},
					we = {
						AppId: "fa368d2c1fe144df9a294c096429e47b",
						ApiHost: "https://fbig-singleplay-apps.citigo.site",
						OtherHost: "https://fbig-leaderboards.citigo.site",
						Ads: {
							BannerAdOptions: []
						},
						Game: {
							DisableLandscape: !0
						},
						LeadersBoard: {
							LeaderboardId: ""
						},
						Match: {
							MaxRescueCount: 1,
							RescueGamePopupTimeout: 15,
							DelayNoThank: 2e3,
							ContinueSingleMatchEnabled: !1
						}
					},
					Te = {
						ENV: "development",
						AppId: "1553561108173733",
						ApiHost: "https://fbig-singleplay-apps-dev.sunstudio.io",
						OtherHost: "https://leaderboards-dev.sunstudio.io",
						SyncProfileFromAPI: !0,
						Notification: {
							Enable: !1,
							ApiUrl: "https://notifications.sunstudio.io",
							GameTitle: "Sun Studio",
							GameImage: "https://sunstudio.io/images/logo.png"
						},
						PlayerMock: {
							id: "",
							signature: ""
						},
						OpponentMock: {
							id: "",
							signature: ""
						},
						MatchMockFailRate: 5,
						Gameplay: {
							StartLevel: 1,
							StartScore: 0,
							StartDiamonds: 0,
							DefaultDiamondsForNewUser: 300,
							LevelDifficultRate: {
								FromUnder30: 1.07,
								FromUnder35: 1.05,
								FromUnder45: 1.05,
								FromUnder200: 1.1
							},
							StartAdAtLevel: 2,
							GiftTime: 10800,
							AwardDiamonds: 100,
							FreeItems: !1,
							DelayStart: 2e3,
							DelayLevelUp: 1800,
							DelayFinishGame: 500,
							EnableVibrate: !0,
							VibrateValue: [0, 150, 250, 350, 450, 550, 650]
						},
						Tutorial: {
							ForceUseTutorial: !1,
							NumberOfTutorial: {
								FirstMove: 3,
								TargetScore: 1,
								CurrentScore: 1,
								ColorfulGem: 1,
								ItemPaint: 1,
								ItemHammer: 1,
								ItemShuffle: 1
							}
						},
						PlayerDataStore: "playerData",
						Game: {
							AutoResize: !0,
							PortraitRatio: 375 / 667,
							PortraitWidth: 375,
							PortraitHeight: 667,
							LandscapeRatio: 760 / 450,
							LandscapeWidth: 760,
							LandscapeHeight: 500,
							ForcePixelRatio: 0,
							AutoDropFps: !1,
							DisableLandscape: !1,
							FullSizeOnLandscape: !1
						},
						Debugger: {
							ShowInspector: !1,
							ShowMonitoring: !1,
							ShowConsole: !1,
							Expanded: !0,
							AutoRefresh: !0,
							InspectorAutoUpdate: !0,
							Opacity: .8
						},
						Statistics: {
							Enable: !1,
							DisplayMode: 0,
							FPS: !0,
							MS: !0,
							MB: !0,
							Opacity: .8,
							ShowFPSInGame: !0,
							ShowMemoryInGame: !1
						},
						ParticleEditor: {
							Enable: !1,
							Opacity: .8,
							Expanded: !0
						},
						ProfilerPlugin: {
							Enable: !1
						},
						Match: {
							MaxRescueCount: 1,
							RescueGamePopupTimeout: 5,
							DelayNoThank: 1e3,
							ContinueSingleMatchEnabled: !1,
							SingleMatchStore: "singleMatch",
							LocalSingleMatchDefault: {
								_id: "12345678890",
								status: "open",
								playerId: "",
								score: 0,
								level: 1,
								startedAt: 0,
								updateAt: 0,
								finishAt: 0,
								data: {}
							}
						},
						DailyRewards: {
							MaxDays: 6,
							MockTime: 0,
							CheckInterrupt: !0
						},
						DailyTasks: {
							Duration: 86400
						},
						Tournament: {
							UseMock: !1,
							ForcePlay: !1,
							UseLeaderboard: !1,
							TournamentContextIds: []
						},
						LeadersBoard: {
							Name: null,
							UseMock: !1,
							Prefix: "leaderboards",
							LeaderboardId: "",
							Limit: 50
						},
						LanguageSupport: {
							en: "en"
						},
						EnableEffectSceneTransition: !0,
						DefaultTheme: "default",
						ThemeSupport: {
							default: "default"
						},
						Ads: {
							Enabled: !0,
							CalculateSafeAreaBottom: !0,
							EnableRewardVideoResetInterstitial: !1,
							Mockup: {
								Enable: !1,
								ErrorRate: 5,
								GiphyApiKey: ""
							},
							InterstitialAdOptions: {
								pID: "",
								showWhenStartGame: !0,
								secondsFirstTime: 0,
								secondsBetweenAds: 0
							},
							RewardAdOptions: {
								pID: "",
								secondsFirstTime: 0,
								secondsBetweenAds: 0
							},
							BannerAdOptions: [{
								placementId: "gd_banner_desktop",
								position: "left",
								bannerWidth: 120,
								bannerHeight: 600,
								platform: "DESKTOP",
								secondsReload: 70
							}]
						},
						Network: {
							MaximumRequest: 6,
							Timeout: 15e3,
							Retries: 3
						},
						Analytics: {
							GoogleAnalytics: {
								consoleLog: !1
							},
							FacebookAnalytics: {
								prefix: "fba",
								consoleLog: !1
							}
						},
						MagnetItem: {
							key: "magnet-item",
							scoreForOnePercent: 4,
							maxMagnetPerMatch: 5
						},
						Board: {
							cols: 8,
							rows: 8
						},
						Sentry: {
							errorCodes: {
								accepted: [],
								ignored: ["USER_INPUT", "NETWORK_FAILURE"]
							},
							errorMessages: {
								accepted: [],
								ignored: ["Load image failed"]
							}
						},
						Rollbar: {
							Enable: !1,
							UseMockup: !1,
							FilterError: {
								Codes: {
									accepted: [],
									ignored: ["USER_INPUT", "NETWORK_FAILURE"]
								},
								Messages: {
									accepted: [],
									ignored: ["Load image failed", "Request failed to be processed"]
								}
							},
							ListPlayerDevIds: []
						},
						Performance: {
							Enable: !1,
							trackingSceneKeys: ["DASHBOARD_SCENE", "GAME_SCENE"],
							minQuality: 1,
							maxQuality: 2,
							fpsThreshold: 48,
							checkInterval: 2e3,
							qualityAdjustStep: .1,
							autoUpgradeQuality: !0,
							onlyUpdateWhenSwitchScene: !0
						}
					};
				Te = (0, Ee.TS)((0, be.Z)({}, Te), we);
				var Ce = Te = (0, Ee.TS)((0, be.Z)({}, Te), Ae),
					Pe = function(e) {
						return function(t) {
							try {
								var n = window.game,
									i = t.module;
								if (n.scene.getScenes(!0)[0].scene.key !== e) return;
								var a = i.default;
								n.scene.remove(e), n.scene.add(e, a, !0), n.scene.bringToTop(n.globalScene), console.log("%c HotScene: ", "font-size:12px;background-color: #465975;color:#fff;", e)
							} catch (s) {
								var r;
								null == (r = void 0) || r.invalidate()
							}
						}
					},
					Ie = n(432),
					ke = n.n(Ie),
					xe = n(433),
					Oe = n.n(xe),
					Re = n(434),
					_e = n.n(Re),
					Be = n(601),
					De = !1,
					Ne = function e(t, n, i) {
						n.forEach((function(n) {
							if (n.name) {
								var a = null;
								if (a = i ? i.getByName(n.name) : t.children.getByName(n.name), De && console.log("%c Checking object: ", "font-size:12px;background-color: #465975;color:#fff;", n.name, n.type), a) {
									if ("Container" === n.type) {
										var r = a,
											s = n.getAll();
										if (e(t, s, r), !r.hotContainer) return;
										console.log("%c Update container: ", "font-size:12px;background-color: #33A5FF;color:#fff;", r.name)
									}
									var o = ke()(n),
										c = ["_events", "_sysEvents", "input", "localTransform", "list", "displayList"],
										l = u()(o).call(o, (function(e) {
											if ("string" !== typeof e) return !1;
											if (m()(c).call(c, e) >= 0) return !1;
											if (!a) return !1;
											var t = Oe()(n, e);
											return !(t instanceof Function) && (!(t instanceof Phaser.Scene) && (!(t instanceof Phaser.GameObjects.Group) && (!(t instanceof Phaser.GameObjects.GameObject) && t === Oe()(a, e))))
										}));
									l.length < 1 || (De && console.log("%c HotObject: ", "font-size:12px;background-color: #2EAFB0;color:#fff;", n.name, l), l.forEach((function(e) {
										if (a) {
											var t = Oe()(n, e),
												i = Oe()(a, e),
												r = _e()(a, e, t);
											De && console.log("%c Update property: ", "font-size:12px;background-color: #B03734;color:#fff;", r, e, {
												oldValue: i,
												newValue: t
											})
										}
									})))
								}
							}
						}))
					},
					Me = {
						Configs: Ce,
						Utils: Se,
						LiveUpdate: {
							Scene: Pe,
							SceneObjects: function(e, t) {
								return void 0 === t && (t = De),
									function(n) {
										try {
											var i = window.game,
												a = n.module,
												r = i.scene.getScenes(!0)[0];
											if (r.scene.key !== e) return;
											De = t;
											var s = a.default,
												o = e + "-draft";
											i.scene.remove(o);
											var c = i.scene.add(o, s);
											console.log("%c HotSceneObjects: ", "font-size:12px;background-color: #465975;color:#fff;", e), r = i.scene.getScene(e), c.events.once(Phaser.Scenes.Events.RENDER, (0, Be.D)((function() {
												var e = c.children.getAll();
												Ne(r, e), i.scene.remove(o)
											})), 50), i.scene.run(o), i.scene.bringToTop(r), i.scene.bringToTop(i.globalScene)
										} catch (u) {
											console.warn(u)
										}
									}
							}
						}
					};
				window.GameCore = Me;
				console.warn("production", {
					Configs: Ce,
					isDebugger: Se.Valid.isDebugger()
				})
			},
			631: function(e, t, n) {
				"use strict";
				var i = n(3),
					a = n(0),
					r = n(2),
					s = n.n(r),
					o = n(620),
					c = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t) || this).instance = void 0, i.placementId = void 0, i.instance = null, i.placementId = n, i
						}(0, a.Z)(t, e), t.setGame = function(e) {
							self.game = e
						};
						var n = t.prototype;
						return n.loadAsync = function() {
							var e = (0, i.Z)(s().mark((function e() {
								return s().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.status === GameCore.Ads.Status.IDLE) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return e.prev = 2, this.status = GameCore.Ads.Status.LOADING, e.next = 6, this.createInstanceByType(this.type);
										case 6:
											if (this.instance = e.sent, null !== this.instance) {
												e.next = 9;
												break
											}
											throw new GameCore.Ads.AdError("AD_INSTANCE_NOT_INITIATED", "Ad instance didn't initiated.");
										case 9:
											return e.next = 11, this.instance.loadAsync();
										case 11:
											this.status = GameCore.Ads.Status.FILLED, e.next = 19;
											break;
										case 14:
											throw e.prev = 14, e.t0 = e.catch(2), this.status = GameCore.Ads.Status.IDLE, this.instance = null, e.t0;
										case 19:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[2, 14]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.showAsync = function() {
							var e = (0, i.Z)(s().mark((function e() {
								var t, n;
								return s().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (e.prev = 0, this.status === GameCore.Ads.Status.FILLED) {
												e.next = 3;
												break
											}
											throw new GameCore.Ads.AdError("AD_NOT_FILLED", "Ads no fill.");
										case 3:
											if (this.status = GameCore.Ads.Status.SHOWING, null !== this.instance) {
												e.next = 6;
												break
											}
											throw new GameCore.Ads.AdError("AD_INSTANCE_NOT_INITIATED", "Ad instance didn't initiated.");
										case 6:
											return e.next = 8, this.instance.showAsync();
										case 8:
											t = this.getSceneName(), this.type === GameCore.Ads.Types.PRE_ROLL && self.game.analytics.showInterstitialAd(t), this.type === GameCore.Ads.Types.MID_ROLL && self.game.analytics.showInterstitialAd(t), this.type === GameCore.Ads.Types.REWARDED && self.game.analytics.showRewardedVideoAd(t), this.status = GameCore.Ads.Status.IDLE, this.instance = null, e.next = 22;
											break;
										case 16:
											throw e.prev = 16, e.t0 = e.catch(0), e.t0 instanceof Object && GameCore.Utils.Object.hasOwn(e.t0, "code") && "ADS_NOT_LOADED" === e.t0.code ? this.status = GameCore.Ads.Status.FILLED : (this.status = GameCore.Ads.Status.IDLE, this.instance = null), n = this.getSceneName(), self.game.analytics.showAdFail(this.type, n, e.t0), e.t0;
										case 22:
											return e.prev = 22, window.focus(), e.finish(22);
										case 25:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[0, 16, 22, 25]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.getStatus = function() {
							return this.status
						}, n.createInstanceByType = function() {
							var e = (0, i.Z)(s().mark((function e(t) {
								var n;
								return s().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											n = self.game.facebook, e.t0 = t, e.next = e.t0 === GameCore.Ads.Types.MID_ROLL || e.t0 === GameCore.Ads.Types.PRE_ROLL ? 4 : e.t0 === GameCore.Ads.Types.REWARDED ? 7 : 10;
											break;
										case 4:
											return e.next = 6, n.getInterstitialAdAsync(this.placementId);
										case 6:
										case 9:
											return e.abrupt("return", e.sent);
										case 7:
											return e.next = 9, n.getRewardedVideoAsync(this.placementId);
										case 10:
											return e.abrupt("return", null);
										case 11:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.getSceneName = function() {
							try {
								var e = self.game.globalScene;
								return e instanceof o.Z ? e.getCurrentScene().scene.getSceneName() : "unknown"
							} catch (t) {
								return "unknown"
							}
						}, t
					}(GameCore.Ads.AdInstance);
				t.Z = c
			},
			613: function(e, t, n) {
				"use strict";
				n.d(t, {
					DW: function() {
						return c
					},
					EH: function() {
						return r
					},
					fJ: function() {
						return a
					},
					kL: function() {
						return i
					},
					qj: function() {
						return s
					},
					rh: function() {
						return o
					}
				});
				var i = "CONTEXT_RECEIVED",
					a = "CONTEXT_PROCESSED",
					r = "CONTEXT_GAME_MODE_DETECTED",
					s = "MESSAGES_SENT_UPDATE",
					o = "MESSAGES_SENT_REMOVE",
					c = "SCENE_KEY_UPDATE"
			},
			624: function(e, t, n) {
				"use strict";
				var i = n(600),
					a = function() {
						function e(e, t) {
							if (this.scene = void 0, this.config = void 0, this.isStarted = void 0, this.tween = void 0, !(t.targets.length < 1)) {
								this.buildConfig(e, t);
								var n = this.config.targets[0].scene;
								n && (this.scene = n, this.isStarted = !1, this.tween = n.tweens.create(this.config))
							}
						}
						var t = e.prototype;
						return t.buildConfig = function(e, t) {
							this.config = (0, i.TS)(e, t)
						}, t.play = function() {
							this.tween && (this.isStarted && this.tween.hasStarted ? this.restart() : (this.tween.play(), this.isStarted = !0))
						}, t.restart = function() {
							var e;
							null == (e = this.tween) || e.restart()
						}, t.stop = function() {
							var e;
							null == (e = this.tween) || e.stop()
						}, t.remove = function() {
							var e;
							null == (e = this.tween) || e.remove()
						}, t.next = function(e) {
							return this.tween ? (this.tween.off(Phaser.Tweens.Events.TWEEN_COMPLETE, e), this.tween.once(Phaser.Tweens.Events.TWEEN_COMPLETE, e), this.tween) : null
						}, e
					}();
				t.Z = a
			},
			623: function(e, t, n) {
				"use strict";
				var i = n(0),
					a = n(624),
					r = {
						targets: [],
						duration: 600,
						ease: Phaser.Math.Easing.Linear,
						props: {
							angle: {
								from: 0,
								to: 360
							}
						}
					},
					s = function(e) {
						function t(t) {
							return e.call(this, r, t) || this
						}
						return (0, i.Z)(t, e), t
					}(a.Z);
				t.Z = s
			},
			626: function(e, t, n) {
				"use strict";
				var i = n(188),
					a = n.n(i)()(.48, 1.57, .6, .83);
				t.Z = a
			},
			628: function(e, t, n) {
				"use strict";
				var i = n(0),
					a = n(624),
					r = {
						targets: [],
						duration: 600,
						ease: Phaser.Math.Easing.Quadratic.Out,
						props: {
							alpha: {
								start: 1,
								from: 1,
								to: 0
							}
						}
					},
					s = function(e) {
						function t(t) {
							return e.call(this, r, t) || this
						}
						return (0, i.Z)(t, e), t
					}(a.Z);
				t.Z = s
			},
			625: function(e, t, n) {
				"use strict";
				var i = n(0),
					a = n(624),
					r = {
						targets: [],
						duration: 300,
						ease: n(626).Z,
						props: {
							scale: {
								from: 1.2,
								to: 1
							}
						}
					},
					s = function(e) {
						function t(t) {
							return e.call(this, r, t) || this
						}
						return (0, i.Z)(t, e), t
					}(a.Z);
				t.Z = s
			},
			621: function(e, t, n) {
				"use strict";
				var i = n(622),
					a = n(0),
					r = n(619),
					s = n(623),
					o = r.Z.DEFAULT,
					c = o.KEY,
					u = o.FRAME,
					l = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, 0, 0, c, u.PRELOADER) || this).anim = void 0, n.runAnimation(), n.setWorldSize(60, 60), n.scene.add.existing((0, i.Z)(n)), n
						}(0, a.Z)(t, e);
						var n = t.prototype;
						return n.runAnimation = function() {
							var e;
							null == (e = this.anim) || e.remove(), this.anim = new s.Z({
								targets: [this],
								repeat: -1,
								duration: 1200
							}), this.anim.play()
						}, n.setVisible = function(t) {
							return e.prototype.setVisible.call(this, t), t ? this.runAnimation() : this.anim.stop(), this
						}, t
					}(Phaser.GameObjects.Image);
				t.Z = l
			},
			627: function(e, t) {
				"use strict";
				t.Z = {
					BACKGROUND: 1,
					FIREWORKS: 5,
					ITEM: 10,
					LOGO: 15,
					BUTTON: 20,
					TILE: 25,
					TEXT: 30,
					ENCOURAGING: 31,
					EFFECT: 32,
					MESSAGE: 33,
					POPUP: 999,
					PRIORITY: 80,
					DEBUG: 90,
					DICE: 99,
					PIECE: 99,
					ON_TOP: 1e4
				}
			},
			630: function(e, t) {
				"use strict";
				t.Z = {
					min: 18,
					max: 60
				}
			},
			618: function(e, t) {
				"use strict";
				t.Z = {
					PRIMARY: {
						KEY: "font-main",
						TEXTURE: "./assets/fonts/primary.png",
						DATA: "./assets/fonts/primary.fnt"
					},
					PRIMARY_LIGHT: {
						KEY: "font-main-light",
						TEXTURE: "./assets/fonts/primary-light.png",
						DATA: "./assets/fonts/primary-light.fnt"
					},
					NUMBER_GOLD: {
						KEY: "number-gold",
						TEXTURE: "./assets/fonts/number-gold.png",
						DATA: "./assets/fonts/number-gold.xml"
					},
					FONT_FAMILY: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif'
				}
			},
			607: function(e, t, n) {
				"use strict";
				var i = {
					AVATAR: {
						KEY: "avatar",
						FILE: "./assets/images/others/avatar.png",
						CONFIG: {}
					},
					ICON_EARTH: {
						KEY: "icon-earth",
						FILE: "./assets/images/others/icon-earth.png",
						CONFIG: {}
					},
					BACKGROUND: {
						KEY: "background",
						FILE: "./assets/images/" + (0, n(435).t)() + "x/bg.jpg",
						CONFIG: {}
					}
				};
				t.Z = i
			},
			619: function(e, t, n) {
				"use strict";
				var i = n(5),
					a = (0, n(435).t)(),
					r = {
						TUTORIAL: {
							KEY: "tutorial-resources",
							TEXTURE: "./assets/textures/" + a + "x/tutorial-resources.png",
							JSON: "./assets/textures/" + a + "x/tutorial-resources.json",
							FRAME: {
								HAND: "hand",
								BLANK: "blank",
								STEP_1: "step-1",
								STEP_1_1: "step-1-1",
								STEP_2: "step-2",
								STEP_2_1: "step-2-1",
								STEP_2_2: "step-2-2",
								STEP_2_3: "step-2-3"
							}
						},
						DEFAULT: {
							KEY: "default-resources",
							TEXTURE: "./assets/textures/" + a + "x/default-resources.png",
							JSON: "./assets/textures/" + a + "x/default-resources.json",
							URL: "./assets/textures/" + a + "x/",
							FRAME: {
								BLANK: "blank",
								LOGO: "title-logo",
								GEMS: "title-gems",
								TEXT_LOADING: "loading",
								BOTTOM_BG: "bottom-bg",
								BOTTOM_LINE: "bottom-line",
								GLARE: "glare",
								TITLE_YOUR_SCORE: "title-your-score",
								BG_YOUR_SCORE: "bg-your-score",
								PRELOADER: "preloader/dual-ring",
								LEADERBOARD_TAB_ON: "leaderboards/tab-on",
								LEADERBOARD_TAB_OFF: "leaderboards/tab-off",
								LEADERBOARD_BG_DARK: "leaderboards/bg-dark",
								LEADERBOARD_BG_LIGHT: "leaderboards/bg-light",
								RIBBON_MAIN: "ribbon/main",
								RIBBON_GAME_OVER: "ribbon/game-over",
								AVATAR_BORDER: "avatar/border",
								AVATAR_BORDER_ORANGE_THICK: "avatar/border-orange-thick",
								AVATAR_BORDER_ORANGE_THIN: "avatar/border-orange-thin",
								AVATAR_BORDER_YELLOW: "avatar/border-yellow",
								AVATAR_BACKGROUND: "avatar/background",
								POPUP_TOP: "popup/top",
								POPUP_MID: "popup/middle",
								POPUP_BOTTOM: "popup/bottom",
								ICON_ADS: "icons/flat-ad",
								ICON_CUP_GOLD: "icons/cup-gold",
								ICON_CUP_SILVER: "icons/cup-silver",
								ICON_CUP_COPPER: "icons/cup-bronze",
								ICON_SOUND: "icons/sound",
								ICON_VIBRATE: "icons/vibrate",
								ICON_MUSIC: "icons/music",
								ICON_WHITE_SWORD: "icons/white-sword",
								ICON_RANK: "icons/rank",
								ICON_CUP_BG: "icons/cup-bg",
								ICON_PLAY: "icons/play",
								ICON_SHARE: "icons/share",
								ICON_ROPE: "icons/rope",
								ICON_THUNDER: "icons/thunder",
								ICON_INVITE: "icons/invite",
								ICON_CROWN: "icons/crown",
								BUTTON_CLOSE: "buttons/close",
								BUTTON_RED: "buttons/red",
								BUTTON_BLUE: "buttons/blue",
								BUTTON_BLUE_SMALL: "buttons/blue-small",
								BUTTON_BLUE_BIG: "buttons/blue-big",
								BUTTON_BLUE_MEDIUM: "buttons/blue-medium",
								BUTTON_GREEN: "buttons/green",
								BUTTON_BROWN: "buttons/brown",
								BUTTON_GREEN_RIM: "buttons/green-rim",
								BUTTON_GREEN_SMALL: "buttons/green-small",
								BUTTON_GREEN_BIG: "buttons/green-big",
								BUTTON_BG_WOODEN_ON: "buttons/bg-wood-on",
								BUTTON_BG_WOODEN_OFF: "buttons/bg-wood-off",
								BUTTON_PLAY: "buttons/play",
								BUTTON_RANDOM: "buttons/random",
								BUTTON_RESTART: "buttons/restart",
								BUTTON_BACK: "buttons/back",
								BUTTON_CHALLENGE_DARK: "buttons/challenge_dark",
								BUTTON_CHALLENGE_LIGHT: "buttons/challenge_light",
								BUTTON_SHARE_DARK: "buttons/share",
								BUTTON_HOME: "buttons/button-home",
								NO_THANK_TEXT: "texts/no-thank",
								TEXT_SECOND_CHANGE: "texts/second-chance",
								TEXT_VS: "texts/vs",
								TEXT_LOSE: "texts/lose",
								TEXT_WIN: "texts/win",
								TEXT_DRAW: "texts/draw",
								TEXT_PLAY_WITH_FRIEND: "texts/play-with-friend",
								TEXT_PLAY_WITH: "texts/play-with",
								TEXT_SOLO: "texts/solo",
								TEXT_LET_PLAY: "texts/let-play",
								TEXT_GAME_OVER: "texts/game-over",
								TEXT_SCORE: "texts/text-score",
								TEXT_SCORE_2: "texts/score",
								TEXT_BEST: "texts/text-best",
								TEXT_PLAY: "texts/play",
								TEXT_SHARE: "texts/share",
								TEXT_BEST_SCORE: "texts/best-score",
								TEXT_PLAY_WITH_FRIENDS: "texts/play-with-friends",
								TEXT_CONTINUE: "texts/continue",
								TEXT_LEADER_BOARD: "texts/leader-board",
								TEXT_WORLD: "texts/world",
								TEXT_FRIENDS: "texts/friends",
								TEXT_INVITE: "texts/invite",
								TEXT_NEW_GAME: "texts/new-game",
								TEXT_SECOND_CHANCE: "texts/second-chance",
								HORIZONTAL_LUCKY_BAR: "lucky-bar/horizontal-lucky-bar",
								HORIZONTAL_ARROW: "lucky-bar/horizontal-arrow",
								ARC_LUCKY_BAR: "lucky-bar/arc-lucky-bar",
								ARC_ARROW: "lucky-bar/arc-arrow"
							}
						},
						EFFECTS: {
							KEY: "effects-resources",
							PATH: "./assets/textures/" + a + "x/effects-resources.png",
							JSON: "./assets/textures/" + a + "x/effects-resources.json",
							FRAME: {
								BLANK: "blank",
								FX_STAR: "star",
								FX_CONFETTI_SMALL_1: "confetti/small-1",
								FX_CONFETTI_SMALL_2: "confetti/small-2",
								FX_CONFETTI_SMALL_3: "confetti/small-3",
								FX_CONFETTI_SMALL_4: "confetti/small-4",
								FX_CONFETTI_HEXAGON: "confetti/hexagon-",
								FX_CONFETTI_STAR_X: "confetti/star-x/star-",
								FX_CONFETTI_STAR_Y: "confetti/star-y/star-",
								FX_CONFETTI_RIBBON: "ribbon",
								TEXT_COOL: "text/text_cool",
								TEXT_EXCELLENT: "text/text_excellent",
								TEXT_GOOD: "text/text_good",
								PREFIX_ANIMATION_RIBBON_CONFETTI_A: "ribbon/falling-confetti/confetti-a/confetti-a-",
								PREFIX_ANIMATION_RIBBON_CONFETTI_B: "ribbon/falling-confetti/confetti-b/confetti-b-",
								PREFIX_ANIMATION_RIBBON_CONFETTI_C: "ribbon/falling-confetti/confetti-c/confetti-c-",
								PREFIX_ANIMATION_RIBBON_CONFETTI_D: "ribbon/falling-confetti/confetti-d/confetti-d-",
								ANIMATION_STAR_X: "star-x/star-",
								ANIMATION_STAR_Y: "star-y/star-"
							}
						},
						GAMEPLAY_JPG: {
							KEY: "gameplay_jpg",
							TEXTURE: "./assets/textures/" + a + "x/gameplay_jpg.jpg",
							JSON: "./assets/textures/" + a + "x/gameplay_jpg.json",
							FRAME: {
								BOARD_TOP_BG: "top.png",
								BOARD_CENTER_BG: "middle.png",
								BOARD_BOTTOM_BG: "bottom.png",
								PANEL_BOTTOM_2: "panel_bottom_2.png",
								PANEL_TOP_1: "panel_top_1.png"
							}
						},
						ANIMATION_SCENE: {
							KEY: "effects-resources",
							PATH: "./assets/textures/" + a + "x/",
							JSON: "./assets/textures/" + a + "x/animation-scene-resources.json",
							FRAME: {
								BLANK: "blank",
								COIN: "coins/coin",
								COIN_SMALL: "coins/coin-small",
								COIN_SMALL_GREY: "coins/coin-small-grey",
								ANIMATION_STAR_X: "star-x/star-",
								ANIMATION_STAR_Y: "star-y/star-",
								FX_SPARK_YELLOW: "yellow-spark",
								FX_CONFETTI_RIBBON: "ribbon/ribbon",
								PREFIX_ANIMATION_RIBBON_CONFETTI_A: "ribbon/falling-confetti/confetti-a/confetti-a-",
								PREFIX_ANIMATION_RIBBON_CONFETTI_B: "ribbon/falling-confetti/confetti-b/confetti-b-",
								PREFIX_ANIMATION_RIBBON_CONFETTI_C: "ribbon/falling-confetti/confetti-c/confetti-c-",
								PREFIX_ANIMATION_RIBBON_CONFETTI_D: "ribbon/falling-confetti/confetti-d/confetti-d-"
							}
						},
						GAMEPLAY: {
							KEY: "gameplay-resources",
							TEXTURE: "./assets/textures/" + a + "x/gameplay-resources.png",
							JSON: "./assets/textures/" + a + "x/gameplay-resources.json",
							FRAME: {
								BLANK: "blank",
								PANEL_BOTTOM_1: "panel_bottom_1",
								PANEL_TOP_2: "panel_top_2",
								BG_SCORE: "bg-score",
								AVATAR_BORDER: "avatars/border",
								AVATAR_BACKGROUND: "avatars/background",
								ICON_PAUSE: "icons/pause",
								ICON_CUP: "icons/cup",
								ICON_BATTLE: "icons/battle",
								TEXT_SCORE: "text/text-score",
								TEXT_BEST: "text/text-best",
								GEM: "gem/gem",
								GEM_SILVER: "gem/gem_silver",
								GEM_TRANSPARENT: "gem/gem_transparent"
							}
						},
						DEMO_SPINE: {
							KEY: "demo-spine",
							jsonPATH: "./assets/spines/demo/demo.json",
							atlasPATH: "./assets/spines/demo/demo.atlas"
						}
					};
				GameCore.Utils.Valid.isDebugger() && (r.EFFECTS.FRAME = (0, i.Z)({}, r.ANIMATION_SCENE.FRAME, r.EFFECTS.FRAME)), t.Z = r
			},
			615: function(e, t, n) {
				"use strict";
				n.d(t, {
					C: function() {
						return a
					},
					K: function() {
						return r
					}
				});
				var i = n(88),
					a = {
						BOOT_SCENE: "BOOT_SCENE",
						LOAD_SCENE: "LOAD_SCENE",
						GAME_SCENE: "GAME_SCENE",
						GLOBAL_SCENE: "GLOBAL_SCENE",
						DASHBOARD_SCENE: "DASHBOARD_SCENE",
						GAME_OVER_SCENE: "GAME_OVER_SCENE",
						LEADERBOARD_SCENE: "LEADERBOARD_SCENE",
						TEST_SCENE: "TEST_SCENE",
						ANIMATIONS_SCENE: "ANIMATIONS_SCENE"
					},
					r = {
						SWITCH: n.n(i)()("SWITCH")
					}
			},
			617: function(e, t, n) {
				"use strict";
				n.d(t, {
					Ks: function() {
						return a
					},
					o4: function() {
						return i
					}
				});
				var i = {
						DASH_BOARD_SCREEN: "DASH_BOARD_SCREEN",
						NOTIFY_SCREEN: "NOTIFY_SCREEN",
						REWARD_SCREEN: "REWARD_SCREEN",
						RESCUE_SCREEN: "RESCUE_SCREEN",
						SETTINGS_SCREEN: "SETTINGS_SCREEN",
						BEST_SCORE_SCREEN: "BEST_SCORE_SCREEN",
						RESULT_SCREEN: "RESULT_SCREEN",
						DAILY_REWARD_SCREEN: "DAILY_REWARD_SCREEN",
						DAILY_MISSIONS_SCREEN: "DAILY_MISSIONS_SCREEN",
						GAME_OVER_SCREEN: "GAME_OVER_SCREEN",
						LUCKY_REWARD_SCREEN: "LUCKY_REWARD_SCREEN"
					},
					a = {
						SCREEN: 200,
						POPUP: 300,
						PRIORITY: 999
					}
			},
			629: function(e, t, n) {
				"use strict";
				n.d(t, {
					Z: function() {
						return h
					}
				});
				var i = n(0),
					a = n(31),
					r = n.n(a),
					s = n(609),
					o = function(e) {
						function t(t, n, i) {
							var a;
							return (a = e.call(this, t, 0, 0, n, i) || this).setOrigin(0, 0), a
						}
						return (0, i.Z)(t, e), t
					}(Phaser.GameObjects.Zone),
					c = n(630),
					u = n(615),
					l = GameCore.Configs.Game,
					h = function(e) {
						function t() {
							var t;
							return (t = e.call(this, {
								visible: !1
							}) || this).unsubscribeList = void 0, t.gameZone = void 0, t.background = void 0, t.handleOpenScene = function() {
								t.logPageviewOnOpen(), t.logEventOpen()
							}, t.removeStateChange = function() {
								t.unsubscribeList.forEach((function(e) {
									return e()
								}))
							}, t
						}(0, i.Z)(t, e);
						var n = t.prototype;
						return n.create = function() {
							var e = this;
							this.events.on("wake", this.handleOpenScene), this.events.on("resume", this.handleOpenScene), this.events.on("create", this.handleOpenScene), this.scaleGame(), this.createGameZone(), this.events.on(Phaser.Scenes.Events.UPDATE, (function() {
								l.AutoDropFps && e.autoUpdateFPS()
							}))
						}, n.scaleGame = function() {
							var e = this.getCamera("main"),
								t = this.world.getZoomRatio(),
								n = this.world.getWorldSize(),
								i = n.width,
								a = n.height;
							e.setZoom(t), e.centerOn(i / 2, a / 2)
						}, n.createGameZone = function() {
							var e = this.world.getWorldSize(),
								t = e.width,
								n = e.height;
							this.gameZone = new o(this, t, n)
						}, n.autoUpdateFPS = function() {
							this.scene.key !== u.C.GLOBAL_SCENE && (this.tweenPlaying() || this.particlePlaying() ? this.game.updateFps(c.Z.max) : this.game.updateFps(c.Z.min))
						}, n.tweenPlaying = function() {
							for (var e = this.tweens.getAllTweens(), t = 0; t < e.length; t++)
								if (e[t].isPlaying()) return !0;
							return !1
						}, n.particlePlaying = function() {
							var e = this.getAllParticles();
							if (!e) return !0;
							var t = !1;
							return e.forEach((function(e) {
								e.emitters.list.forEach((function(e) {
									e.alive && e.alive.length > 0 && (t = !0)
								}))
							})), t
						}, n.getAllParticles = function() {
							if (this.input.enabled && this.scene.isActive() && !this.scene.isPaused()) {
								var e = this.children.list;
								return !e || e.length <= 0 ? [] : r()(e).call(e, (function(e) {
									return "ParticleEmitterManager" === e.type
								}))
							}
						}, n.getCamera = function(e) {
							return "main" === e ? this.cameras.main : this.cameras.getCamera(e)
						}, n.createMask = function(e) {
							void 0 === e && (e = 1), this.getCamera("main").setBackgroundColor("rgba(0, 0, 0, " + e + ")")
						}, n.fontSize = function(e) {
							return e / 2.4
						}, n.createBackground = function(e, t, n, i) {
							try {
								this.background ? (this.background.setTexture(e), t && this.background.setFrame(t)) : this.background = this.make.image({
									key: e,
									frame: t
								}), this.background.setName(e);
								var a = this.gameZone,
									r = a.displayWidth,
									s = a.displayHeight;
								this.background.setDisplaySize(r, s), GameCore.Utils.Valid.isNumber(n) && this.background.setAlpha(n), GameCore.Utils.Valid.isNumber(i) && this.background.setTint(i), Phaser.Display.Align.In.Center(this.background, this.gameZone)
							} catch (o) {
								console.log("Ex === ", o)
							}
						}, n.handleStateChange = function(e) {
							var t = this;
							this.unsubscribeList = [], e.forEach((function(e) {
								var n = e.selector,
									i = e.callback,
									a = t.storage.watch(n, i);
								t.unsubscribeList.push(a)
							})), this.events.once("sleep", this.removeStateChange), this.events.once("destroy", this.removeStateChange), this.events.once("shutdown", this.removeStateChange)
						}, n.logPageviewOnOpen = function() {
							this.analytics.pageview(this.scene.key)
						}, n.logEventOpen = function() {
							this.analytics.event(s._.SCREEN_OPEN, {
								screen_name: this.getSceneName()
							})
						}, n.getSceneName = function() {
							return GameCore.Utils.String.toUpperCamelCase(this.scene.key.toLowerCase())
						}, t
					}(Phaser.Scene)
			},
			620: function(e, t, n) {
				"use strict";
				n.d(t, {
					Z: function() {
						return M
					}
				});
				var i = n(52),
					a = n(0),
					r = n(8),
					s = n.n(r),
					o = n(624),
					c = {
						targets: [],
						duration: 600,
						ease: Phaser.Math.Easing.Cubic.Out,
						props: {
							alpha: {
								start: 0,
								from: 0,
								to: 1
							}
						}
					},
					u = function(e) {
						function t(t) {
							return e.call(this, c, t) || this
						}
						return (0, a.Z)(t, e), t
					}(o.Z),
					l = n(628),
					h = n(619),
					d = n(615),
					p = n(617),
					f = n(616),
					m = (0, n(614).P1)([function(e) {
						return e.scene.currentSceneKey
					}], (function(e) {
						return e
					})),
					g = n(604),
					v = n(629),
					y = n(622),
					S = n(618),
					b = n(627),
					E = h.Z.DEFAULT,
					A = E.KEY,
					w = E.FRAME,
					T = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, 0, 0) || this).fps = 0, n.fpsString = "FPS: %1", n.fpsText = void 0, n.background = void 0, n.lastUpdate = void 0, n.update = function(e) {
								if (!(e - n.lastUpdate < 800)) {
									n.lastUpdate = e;
									var t = Math.floor(n.scene.game.loop.actualFps);
									n.setFps(t)
								}
							}, n.createFps(), n.setDepth(b.Z.DEBUG), n.scene.add.existing((0, y.Z)(n)), n.scene.events.on(Phaser.Scenes.Events.UPDATE, n.update), n
						}(0, a.Z)(t, e);
						var n = t.prototype;
						return n.setFps = function(e) {
							this.fps = e;
							var t = Phaser.Utils.String.Format(this.fpsString, [e]);
							this.fpsText.setText(t)
						}, n.createFps = function() {
							this.background = this.scene.make.image({
								key: A,
								frame: w.BLANK
							}), this.background.setName("BG"), this.background.setTint(13801480), this.background.setWorldSize(45, 25), this.fpsText = this.scene.make.bitmapText({
								size: this.scene.fontSize(14),
								text: this.fpsString,
								font: S.Z.PRIMARY.KEY,
								origin: {
									x: .5,
									y: .5
								}
							}), this.fpsText.setName("FPS Meter"), Phaser.Display.Align.In.Center(this.fpsText, this.background), this.add([this.background, this.fpsText]), this.setFps(0)
						}, t
					}(Phaser.GameObjects.Container),
					C = T,
					P = function(e) {
						function t(t) {
							var n;
							if ((n = e.call(this, t, 0, 0) || this).performance = void 0, n.memory = 0, n.maxMemoryLimit = void 0, n.maxPercentThreshold = void 0, n.normalColor = 3459162, n.warningColor = 16768343, n.alarmColor = 15812200, n.memoryString = "Memory: %1MB / %2MB", n.memoryText = void 0, n.lastUpdate = void 0, n.update = function(e) {
									if (!(e - n.lastUpdate < 1e3)) {
										n.lastUpdate = e;
										var t = n.performance.memory.usedJSHeapSize,
											i = 1048576 * n.maxMemoryLimit,
											a = Math.round(t / 1048576);
										n.setMemory(a), n.memoryText.setTint(n.normalColor), t > n.maxPercentThreshold / 100 * i && n.memoryText.setTint(n.warningColor), t > i && n.memoryText.setTint(n.alarmColor)
									}
								}, n.performance = window.performance, n.createMemory(), n.setDepth(b.Z.DEBUG), n.scene.add.existing((0, y.Z)(n)), !n.isSupport()) return n.memoryText.setText("Memory: not supported!"), (0, y.Z)(n);
							var i = n.performance.memory.jsHeapSizeLimit;
							return n.maxPercentThreshold = 90, n.setMaxMemory(i / 1048576), n.scene.events.on(Phaser.Scenes.Events.UPDATE, n.update), n
						}(0, a.Z)(t, e);
						var n = t.prototype;
						return n.isSupport = function() {
							var e;
							return this.performance && !(null == (e = this.performance) || !e.memory)
						}, n.setMaxMemory = function(e) {
							this.maxMemoryLimit = Math.round(e)
						}, n.setMemory = function(e) {
							this.memory = e;
							var t = Phaser.Utils.String.Format(this.memoryString, [e, this.maxMemoryLimit]);
							this.memoryText.setText(t)
						}, n.createMemory = function() {
							this.memoryText = this.scene.make.bitmapText({
								size: this.scene.fontSize(14),
								text: this.memoryString,
								font: S.Z.PRIMARY.KEY,
								depth: 2e3
							}), this.memoryText.setName("Memory Meter"), this.add(this.memoryText), this.setMemory(0)
						}, t
					}(Phaser.GameObjects.Container),
					I = P,
					k = n(625),
					x = n(621),
					O = function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).loadingIcon = void 0, r.messageText = void 0, r.openAnimation = void 0, r.closeTimerEvent = void 0, r.addLoadingIcon(), r.addMessageText(), r.setDepth(p.Ks.PRIORITY), r.background.setAlpha(.8), r
						}(0, a.Z)(t, e);
						var n = t.prototype;
						return n.open = function(t) {
							var n, i = this;
							e.prototype.open.call(this, t);
							var a = this.getData(["message", "duration", "loading"]),
								r = a[0],
								s = void 0 === r ? "" : r,
								o = a[1],
								c = void 0 === o ? 0 : o,
								u = a[2],
								l = void 0 !== u && u;
							this.setMessage(s), this.showLoading(l), null == (n = this.closeTimerEvent) || n.remove(), c > 0 && (this.closeTimerEvent = this.scene.time.addEvent({
								delay: c,
								callback: function() {
									i.visible && i.scene.screen.close(i.name)
								}
							})), this.runOpenAnimation()
						}, n.addLoadingIcon = function() {
							this.loadingIcon = new x.Z(this.scene), this.add(this.loadingIcon), Phaser.Display.Align.In.Center(this.loadingIcon, this.zone)
						}, n.addMessageText = function() {
							this.messageText = this.scene.make.bitmapText({
								size: this.scene.fontSize(60),
								font: S.Z.PRIMARY.KEY,
								origin: {
									x: .5,
									y: .5
								}
							}), this.messageText.setCenterAlign(), this.add(this.messageText)
						}, n.setMessage = function(e) {
							this.messageText.setText(e)
						}, n.showLoading = function(e) {
							this.loadingIcon.setVisible(e);
							var t = !1 === e ? 20 : 80;
							Phaser.Display.Align.In.Center(this.messageText, this.zone, 0, t)
						}, n.runOpenAnimation = function() {
							var e, t;
							null == (e = this.openAnimation) || e.stop(), null == (t = this.openAnimation) || t.remove(), this.openAnimation = new k.Z({
								targets: [this.messageText, this.loadingIcon],
								props: {
									scale: {
										getStart: function(e) {
											return e.scale - .3
										},
										getEnd: function(e) {
											return e.scale
										}
									}
								}
							}), this.openAnimation.play()
						}, n.logPageviewOnOpen = function() {}, n.logPageviewOnClose = function() {}, t
					}(GameCore.Screen),
					R = O,
					_ = h.Z.DEFAULT,
					B = _.KEY,
					D = _.FRAME,
					N = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, s()(t = [this]).call(t, a)) || this).mask = void 0, n.fadeInAnim = void 0, n.fadeOutAnim = void 0, n.fpsMeter = void 0, n.memoryMeter = void 0, n.switchScene = function(e) {
								n.currentScene.switch(e)
							}, n.emitGameEventStartScene = function(e) {
								var t = e.scene.key;
								console.info("%cScene start", "color: #D27D2D", t), n.updateSceneState(), n.runMaskFadeOutAnimation(), n.updateActiveSceneKey(t), n.game.events.emit(Phaser.Scenes.Events.START, t), (0, g.sw)("scene", "Start scene: " + t)
							}, n.emitGameEventSleepScene = function(e) {
								var t = e.scene.scene.key;
								console.info("%cScene sleep", "color: #D27D2D", t), t !== d.C.LOAD_SCENE && (n.runMaskFadeInAnimation(), n.game.events.emit(Phaser.Scenes.Events.SLEEP, t))
							}, n.emitGameEventWakeScene = function(e) {
								var t = e.scene.scene.key;
								console.info("%cScene wake", "color: #D27D2D", t), t !== d.C.LOAD_SCENE && (n.updateSceneState(), n.runMaskFadeOutAnimation(), n.updateActiveSceneKey(t), n.game.events.emit(Phaser.Scenes.Events.WAKE, t))
							}, n.emitGameEventPauseScene = function(e) {
								var t = e.scene.scene.key;
								console.info("%cScene pause", "color: #D27D2D", t), n.game.events.emit(Phaser.Scenes.Events.PAUSE, t)
							}, n.emitGameEventResumeScene = function(e) {
								var t = e.scene.key;
								console.info("%cScene resume", "color: #D27D2D", t), n.game.events.emit(Phaser.Scenes.Events.RESUME, t)
							}, n.emitGameEventShutdownScene = function(e) {
								var t = e.scene.scene.key;
								console.info("%cScene shutdown", "color: #D27D2D", t), n.game.events.emit(Phaser.Scenes.Events.SHUTDOWN, t)
							}, n
						}(0, a.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.listenScenesEvents(), this.game.globalScene = this
						}, n.setup = function() {
							this.scaleGame(), this.addMask(), this.addNotifyScreen(), this.addFPS(), this.addMemory()
						}, n.addNotifyScreen = function() {
							var e = this.screen.add(p.o4.NOTIFY_SCREEN, R);
							Phaser.Display.Align.In.Center(e, this.gameZone)
						}, n.addMask = function() {
							this.mask = this.make.image({
								key: B,
								frame: D.BLANK
							});
							var e = this.gameZone,
								t = e.width,
								n = e.height;
							this.mask.setAlpha(0), this.mask.setOrigin(0, 0), this.mask.setTint(0), this.mask.setWorldSize(t, n)
						}, n.addFPS = function() {
							GameCore.Configs.Statistics.ShowFPSInGame && (this.fpsMeter = new C(this), Phaser.Display.Align.In.TopLeft(this.fpsMeter, this.gameZone, -20, -10))
						}, n.addMemory = function() {
							GameCore.Configs.Statistics.ShowMemoryInGame && (this.memoryMeter = new I(this), Phaser.Display.Align.In.TopLeft(this.memoryMeter, this.gameZone, -45, -3))
						}, n.updateSceneState = function() {
							this.setGlobalSceneOnTop()
						}, n.setGlobalSceneOnTop = function() {
							this.scene.bringToTop(this)
						}, n.runMaskFadeInAnimation = function() {
							var e, t;
							this.mask && GameCore.Configs.EnableEffectSceneTransition && (null == (e = this.fadeInAnim) || e.remove(), null == (t = this.fadeOutAnim) || t.remove(), this.fadeInAnim = new u({
								targets: [this.mask],
								duration: 400,
								ease: Phaser.Math.Easing.Cubic.In,
								props: {
									alpha: {
										start: 0,
										from: 0,
										to: .6
									}
								}
							}), this.mask.setAlpha(0), this.fadeInAnim.play())
						}, n.runMaskFadeOutAnimation = function() {
							var e, t;
							this.mask && GameCore.Configs.EnableEffectSceneTransition && (null == (e = this.fadeInAnim) || e.remove(), null == (t = this.fadeOutAnim) || t.remove(), this.fadeOutAnim = new l.Z({
								targets: [this.mask],
								duration: 400,
								ease: Phaser.Math.Easing.Cubic.Out,
								props: {
									alpha: {
										start: .6,
										from: .6,
										to: 0
									}
								}
							}), this.mask.setAlpha(1), this.fadeOutAnim.play())
						}, n.listenScenesEvents = function() {
							var e = this;
							this.scene.manager.getScenes(!1).forEach((function(t) {
								t.events.on(Phaser.Scenes.Events.CREATE, e.emitGameEventStartScene), t.events.on(Phaser.Scenes.Events.SLEEP, e.emitGameEventSleepScene), t.events.on(Phaser.Scenes.Events.WAKE, e.emitGameEventWakeScene), t.events.on(Phaser.Scenes.Events.PAUSE, e.emitGameEventPauseScene), t.events.on(Phaser.Scenes.Events.RESUME, e.emitGameEventResumeScene), t.events.on(Phaser.Scenes.Events.SHUTDOWN, e.emitGameEventShutdownScene)
							})), this.events.on(d.K.SWITCH, this.switchScene)
						}, n.getActiveScene = function() {
							return this.scene.manager.getScenes(!0)[0]
						}, n.getCurrentScene = function() {
							return this.currentScene
						}, n.updateActiveSceneKey = function(e) {
							e !== d.C.GLOBAL_SCENE && this.storage.dispatch((0, f.I)(e))
						}, n.logEventOpen = function() {}, n.logPageviewOnOpen = function() {}, (0, i.Z)(t, [{
							key: "currentScene",
							get: function() {
								var e = this.storage.getState(),
									t = m(e);
								return (t ? this.scene.manager.getScene(t) : this.getActiveScene()).scene
							}
						}]), t
					}(v.Z),
					M = N
			},
			538: function(e, t, n) {
				"use strict";
				var i = n(604),
					a = n(104),
					r = n(5),
					s = n(3),
					o = n(0),
					c = n(2),
					u = n.n(c),
					l = n(605),
					h = 0,
					d = 0,
					p = function() {
						function e(e) {
							this.game = void 0, this.progressFbTimeEvent = void 0, this.game = e
						}
						var t = e.prototype;
						return t.loadingProgressFbBootScene = function() {
							var e = this,
								t = 100;
							d = 30;
							! function n() {
								t <= 0 ? clearTimeout(e.progressFbTimeEvent) : e.progressFbTimeEvent = setTimeout((function() {
									e.game.facebook.setLoadingProgress(Math.round(d)), d += 30 / t, t--, n()
								}), 50)
							}()
						}, t.finishLoadingProgressFbBootScene = function() {
							clearTimeout(this.progressFbTimeEvent)
						}, t.loadingProgressFbLoadScene = function() {
							var e = this;
							(!d || d < 30) && (d = 60), h = d;
							! function t() {
								e.progressFbTimeEvent = setTimeout((function() {
									e.game.facebook.setLoadingProgress(Math.round(d)), d += .1, t()
								}), 50)
							}()
						}, t.onProgress = function(e) {
							var t = 100 - d,
								n = Math.round(e * t + d);
							n > h && clearTimeout(this.progressFbTimeEvent), this.game.facebook.setLoadingProgress(n)
						}, e
					}(),
					f = p,
					m = function() {
						function e(e) {
							this.game = void 0, this.game = e
						}
						var t = e.prototype;
						return t.addKillRevive = function() {
							var e = this;
							[Phaser.GameObjects.Container, Phaser.GameObjects.Image, Phaser.GameObjects.Sprite, Phaser.GameObjects.Graphics, Phaser.GameObjects.Text, Phaser.GameObjects.BitmapText, Phaser.GameObjects.Particles.ParticleEmitter, Phaser.GameObjects.Particles.ParticleEmitterManager].forEach((function(t) {
								t.prototype.kill = e.kill, t.prototype.revive = e.revive
							}))
						}, t.addKillReviveGroup = function() {
							Phaser.GameObjects.Group.prototype.killGroup = this.killGroup, Phaser.GameObjects.Group.prototype.reviveGroup = this.reviveGroup
						}, t.addSetWorldSize = function() {
							var e = this;
							[Phaser.GameObjects.Image, Phaser.GameObjects.Sprite].forEach((function(t) {
								t.prototype.setWorldSize = e.setWorldSize
							}))
						}, t.addSetWorldSizeForContainer = function() {
							var e = this;
							[Phaser.GameObjects.Container].forEach((function(t) {
								t.prototype.setWorldSize = e.setWorldSizeForContainer
							}))
						}, t.addGetWorldPosition = function() {
							var e = this;
							[Phaser.GameObjects.Container, Phaser.GameObjects.Image, Phaser.GameObjects.Sprite, Phaser.GameObjects.Graphics, Phaser.GameObjects.Text, Phaser.GameObjects.BitmapText].forEach((function(t) {
								t.prototype.getWorldPosition = e.getWorldPosition
							}))
						}, t.addDrawDebugBox = function() {
							var e = this;
							[Phaser.GameObjects.Container, Phaser.GameObjects.Image, Phaser.GameObjects.Sprite, Phaser.GameObjects.Graphics, Phaser.GameObjects.Text, Phaser.GameObjects.BitmapText, Phaser.GameObjects.Zone].forEach((function(t) {
								t.prototype.drawDebugBox = e.drawDebugBox
							}))
						}, t.addHighQuality = function() {
							var e = this;
							[Phaser.GameObjects.Text].forEach((function(t) {
								t.prototype.setHighQuality = e.setHighQuality
							}))
						}, t.kill = function() {
							this.setActive(!1), this.setVisible(!1)
						}, t.revive = function() {
							this.setActive(!0), this.setVisible(!0)
						}, t.killGroup = function() {
							this.getChildren().forEach((function(e) {
								e.setActive(!1), e.setVisible(!1)
							}))
						}, t.reviveGroup = function() {
							this.getChildren().forEach((function(e) {
								e.setActive(!0), e.setVisible(!0)
							}))
						}, t.setWorldSize = function(e, t) {
							this.setSize(e, t), this.setDisplaySize(e, t)
						}, t.setWorldSizeForContainer = function(e, t, n) {
							void 0 === n && (n = 2), this.setSize(e * n, t * n), this.setDisplaySize(e, t)
						}, t.getWorldPosition = function() {
							var e = this.getWorldTransformMatrix().decomposeMatrix();
							return {
								x: e.translateX,
								y: e.translateY
							}
						}, t.drawDebugBox = function(e, t) {
							var n = this.x,
								i = this.y,
								a = this.width,
								r = this.height,
								s = this.depth,
								o = this.originX,
								c = this.originY,
								u = this.scene.add.rectangle(n, i, a, r, e, t);
							u.setName("Debug Box"), u.setDepth(s);
							var l = GameCore.Utils.Valid.isNumber;
							return l(o) && l(c) && u.setOrigin(o, c), u
						}, t.setHighQuality = function() {
							return this.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer ? this.setResolution(2 * this.scene.game.world.getZoomRatio()) : this
						}, e
					}(),
					g = m,
					v = n(8),
					y = n.n(v),
					S = n(347),
					b = n.n(S),
					E = GameCore.Configs.Ads.Mockup.GiphyApiKey,
					A = function() {
						function e() {}
						return e.loadBannerAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t, n, i, a, r;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getAdContentAsync();
										case 2:
											if (t = e.sent, !(n = document.getElementById("mock-banner-ads"))) {
												e.next = 11;
												break
											}
											if ((i = n.getElementsByTagName("img")) && !(i.length <= 0)) {
												e.next = 8;
												break
											}
											return e.abrupt("return");
										case 8:
											i[0].src = t, e.next = 36;
											break;
										case 11:
											(a = document.createElement("div")).id = "mock-banner-ads", a.style.width = "100%", a.style.height = "50px", a.style.bottom = "var(--sab)", a.style.position = "fixed", a.style.background = "#fff url(" + t + ") center center/auto no-repeat", a.style.outline = "2px solid #ffffff40", a.style.outlineOffset = "-2px", a.style.bottom = "0px", a.style.right = "0px", a.style.top = "0px", a.style.margin = "auto", a.style.height = "100%", a.style.width = "160px", a.style.position = "fixed", a.style.zIndex = "1000000", a.style.overflow = "hidden", r = document.createElement("style"), (document.head || document.getElementsByTagName("head")[0]).appendChild(r), "@keyframes fake-gif {\n                0%,10% {\n                    background-position-y: top\n                }\n                60% {\n                    background-position-y: center\n                }\n                100% {\n                    background-position-y: bottom\n                }\n            }", r.appendChild(document.createTextNode("@keyframes fake-gif {\n                0%,10% {\n                    background-position-y: top\n                }\n                60% {\n                    background-position-y: center\n                }\n                100% {\n                    background-position-y: bottom\n                }\n            }")), a.style.animation = "fake-gif 6s ease-in-out 0s infinite alternate both", document.body.appendChild(a);
										case 36:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), e.getAdContentAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t, n, i, a, r;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = "https://api.giphy.com/v1/gifs/trending?api_key=" + E + "&rate=pg&bundle=low_bandwidth", e.next = 3, fetch(t, {
												method: "GET"
											});
										case 3:
											return n = e.sent, e.next = 6, n.json();
										case 6:
											if (i = e.sent, GameCore.Utils.Valid.isObject(i)) {
												e.next = 9;
												break
											}
											return e.abrupt("return", "");
										case 9:
											return a = i.data, r = Math.floor(Math.random() * a.length), e.abrupt("return", a[r].images.downsized.url);
										case 12:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), e.hideBannerAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = document.getElementById("mock-banner-ads")) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											t.remove();
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), e
					}(),
					w = {
						LOADED: "loaded",
						DISPLAYED: "displayed"
					},
					T = function(e) {
						return e.IDLE = "idle", e.LOADING = "loading", e.FILLED = "filled", e.SHOWING = "showing", e
					}(T || {}),
					C = T,
					P = function(e) {
						return e.REWARDED = "rewarded", e.PRE_ROLL = "pre-roll", e.MID_ROLL = "mid-roll", e
					}(P || {}),
					I = P,
					k = n(21),
					x = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, n) || this).code = void 0, i.code = t, i.message = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					O = function(e) {
						this.type = void 0, this.status = void 0, this.type = e, this.status = C.IDLE
					};
				GameCore.Ads = {
					Types: I,
					Status: C,
					Events: w,
					AdError: x,
					AdInstance: O
				};
				var R = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).events = void 0, n.enabled = void 0, n.config = void 0, n.lastInterAdShownTime = void 0, n.lastRewardAdShownTime = void 0, n.preRollAd = void 0, n.midRollAd = void 0, n.rewardedVideo = void 0, n.safeAreaBottom = void 0, n.showingBannerAd = void 0, n.reloadBannerAdIntervals = void 0, n.bannerAdConfig = void 0, n.isHaveBannerAdOptions = void 0, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.events = new Phaser.Events.EventEmitter, this.safeAreaBottom = 0, this.lastInterAdShownTime = 0, this.lastRewardAdShownTime = 0, this.showingBannerAd = {}, this.reloadBannerAdIntervals = {}, this.isHaveBannerAdOptions = !0
						}, n.calculateSafeAreaBottom = function() {
							try {
								if (!this.config.CalculateSafeAreaBottom) return;
								this.safeAreaBottom = b()(getComputedStyle(document.documentElement).getPropertyValue("--sab")), isNaN(this.safeAreaBottom) && (this.safeAreaBottom = 0)
							} catch (e) {
								this.safeAreaBottom = 0
							}
						}, n.configure = function(e, t) {
							this.enabled = t.Enabled, this.config = t, 0 === this.config.BannerAdOptions.length && (this.isHaveBannerAdOptions = !1), this.setAdInstance(e), this.calculateSafeAreaBottom()
						}, n.setAdInstance = function(e) {
							this.preRollAd = new e(I.PRE_ROLL, "pre-roll"), this.midRollAd = new e(I.MID_ROLL, "mid-roll"), this.rewardedVideo = new e(I.REWARDED, "rewarded")
						}, n.preloadPreRollAdAsync = function() {
							return this.preloadAdAsync(I.PRE_ROLL)
						}, n.showPreRollAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.canbeShowInterstitialAd()) {
												e.next = 2;
												break
											}
											throw new x("INTERSTITIAL_AD_CAN_NOT_SHOW", "Can't show interstitial ad");
										case 2:
											return e.next = 4, this.showAdAsync(I.PRE_ROLL);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.preloadMidRollAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.preloadAdAsync(I.MID_ROLL);
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.showMidRollAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.canbeShowInterstitialAd()) {
												e.next = 2;
												break
											}
											throw new x("INTERSTITIAL_AD_CAN_NOT_SHOW", "Can't show interstitial ad");
										case 2:
											return e.next = 4, this.showAdAsync(I.MID_ROLL);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.preloadRewardedVideoAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.preloadAdAsync(I.REWARDED);
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.showRewardedVideoAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.canbeShowRewardAd()) {
												e.next = 2;
												break
											}
											throw new x("REWARDED_VIDEO_CAN_NOT_SHOW", "Can't show rewarded video");
										case 2:
											return e.next = 4, this.showAdAsync(I.REWARDED);
										case 4:
											this.lastRewardAdShownTime = window.performance.now() / 1e3;
										case 5:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.getRemainingRewardTime = function() {
							var e = window.performance.now() / 1e3,
								t = this.config.RewardAdOptions.secondsBetweenAds,
								n = e - this.lastRewardAdShownTime;
							return n < t ? t - n : 0
						}, n.preloadAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.enabled) {
												e.next = 2;
												break
											}
											throw new x("ADS_NOT_ENABLED", "Ads is't enabled");
										case 2:
											if (null !== (n = this.getAdInstanceByType(t))) {
												e.next = 5;
												break
											}
											throw new x("AD_INSTANCE_NOT_INITIATED", "The instance ads not yet initiated");
										case 5:
											return e.next = 7, n.loadAsync();
										case 7:
											this.events.emit(w.LOADED, t);
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.showAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.enabled) {
												e.next = 2;
												break
											}
											throw new x("ADS_NOT_ENABLED", "Ads is't enabled");
										case 2:
											if (null !== (n = this.getAdInstanceByType(t))) {
												e.next = 5;
												break
											}
											throw new x("AD_INSTANCE_NOT_INITIATED", "The instance ads not yet initiated");
										case 5:
											return t !== I.PRE_ROLL && t !== I.MID_ROLL || (this.lastInterAdShownTime = window.performance.now() / 1e3), t === I.REWARDED && (this.lastRewardAdShownTime = window.performance.now() / 1e3, this.config.EnableRewardVideoResetInterstitial && (this.lastInterAdShownTime = this.lastRewardAdShownTime)), e.next = 9, n.showAsync();
										case 9:
											this.events.emit(w.DISPLAYED, t);
										case 10:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.getAdStatus = function(e) {
							var t = this.getAdInstanceByType(e);
							return t ? t.getStatus() : null
						}, n.getAdInstanceByType = function(e) {
							switch (e) {
								case I.PRE_ROLL:
									return this.preRollAd;
								case I.MID_ROLL:
									return this.midRollAd;
								case I.REWARDED:
									return this.rewardedVideo;
								default:
									return null
							}
						}, n.canbeShowInterstitialAd = function() {
							return this.canbeShowInterstitialAdByTime()
						}, n.canbeShowInterstitialAdByTime = function() {
							var e = window.performance.now() / 1e3,
								t = this.config.InterstitialAdOptions,
								n = t.secondsFirstTime,
								i = t.secondsBetweenAds,
								a = Math.floor(e - this.lastInterAdShownTime);
							return this.lastInterAdShownTime > 0 ? a >= i : a >= n
						}, n.canbeShowRewardAd = function() {
							var e = window.performance.now() / 1e3,
								t = this.config.RewardAdOptions,
								n = t.secondsFirstTime,
								i = t.secondsBetweenAds,
								a = Math.floor(e - this.lastRewardAdShownTime);
							return this.lastRewardAdShownTime > 0 ? a >= i : a >= n
						}, n.canShowBannerAd = function() {
							if (!this.isHaveBannerAdOptions) return !1;
							for (var e = this.config.BannerAdOptions, t = GameCore.Utils.Device.isDesktop(), n = 0; n < e.length; n++) {
								var i = e[n],
									a = i.platform;
								if ("ALL" == a || "DESKTOP" == a && t || "MOBILE" == a && !t) return this.bannerAdConfig = i, !0
							}
							return !1
						}, n.showBannerAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n, i, a, s = this;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.enabled) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (this.canShowBannerAd()) {
												e.next = 4;
												break
											}
											return e.abrupt("return");
										case 4:
											if (this.reloadBannerAdIntervals = this.reloadBannerAdIntervals || {}, t && (this.bannerAdConfig = (0, r.Z)({}, this.bannerAdConfig, t)), console.log("showBannerAdAsync", this.bannerAdConfig), n = this.bannerAdConfig, i = n.placementId, a = n.secondsReload, i && "" != i) {
												e.next = 10;
												break
											}
											return e.abrupt("return");
										case 10:
											if (!(a > 0)) {
												e.next = 16;
												break
											}
											if (!this.reloadBannerAdIntervals[i]) {
												e.next = 13;
												break
											}
											return e.abrupt("return");
										case 13:
											return this.loadBannerAdAsync(i), this.reloadBannerAdIntervals[i] = setInterval((function() {
												s.loadBannerAdAsync(i)
											}), 1e3 * a), e.abrupt("return");
										case 16:
											return this.loadBannerAdAsync(i), e.abrupt("return");
										case 18:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.loadBannerAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.enabled) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (e.prev = 2, !GameCore.Configs.Ads.Mockup.Enable) {
												e.next = 9;
												break
											}
											return e.next = 7, A.loadBannerAdAsync();
										case 7:
											e.next = 11;
											break;
										case 9:
											return e.next = 11, GameSDK.loadBannerAdAsync(t, this.bannerAdConfig);
										case 11:
											this.showingBannerAd[t] = !0, e.next = 17;
											break;
										case 14:
											e.prev = 14, e.t0 = e.catch(2), console.log(e.t0);
										case 17:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[2, 14]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.hideBannerAdAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t = this;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (this.enabled) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (this.isHaveBannerAdOptions) {
												e.next = 4;
												break
											}
											return e.abrupt("return");
										case 4:
											if (e.prev = 4, !GameCore.Configs.Ads.Mockup.Enable) {
												e.next = 11;
												break
											}
											return e.next = 9, A.hideBannerAdAsync();
										case 9:
											e.next = 15;
											break;
										case 11:
											return this.config.BannerAdOptions.forEach((function(e) {
												var n = e.placementId,
													i = t.reloadBannerAdIntervals[n];
												i && (clearInterval(i), t.reloadBannerAdIntervals[n] = null), t.showingBannerAd[n] = !1
											})), e.next = 15, GameSDK.hideBannerAdAsync();
										case 15:
											e.next = 20;
											break;
										case 17:
											e.prev = 17, e.t0 = e.catch(4), console.log(e.t0);
										case 20:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[4, 17]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.getBannerHeight = function() {
							if (!this.enabled) return 0;
							if (!this.canShowBannerAd()) return 0;
							var e = this.bannerAdConfig || {},
								t = e.position,
								n = e.bannerHeight;
							if ("bottom" !== t) return 0;
							var i = (void 0 === n ? 0 : n) + this.safeAreaBottom;
							if (this.game.world) {
								var a = this.game.world,
									r = a.getPixelRatio(),
									s = a.getZoomRatio();
								return this.game.world.getPhysicPixels(i, r / s)
							}
							return i
						}, t
					}(Phaser.Plugins.BasePlugin),
					_ = R,
					B = function() {
						function e(e, t, n) {
							this.name = void 0, this.color = void 0, this.selfLog = void 0, this.options = void 0, this.name = e, this.color = n || "#FFF", this.options = t, this.selfLog = !0, console.info("%c" + this.name + ": init", "color: " + this.color, this.options)
						}
						var t = e.prototype;
						return t.event = function(e, t, n) {
							this.processEvent(e, t, n), this.selfLog && console.info("%c" + this.name + ": event", "color: " + this.color, {
								name: e,
								value: n,
								payload: t
							})
						}, t.pageview = function(e) {
							var t = this.getPageByKey(e);
							this.processPageView(t), this.selfLog && console.info("%c" + this.name + ": pageview", "color: " + this.color, {
								page: t
							})
						}, t.levelStart = function(e, t, n) {
							this.processLevelStart(e, t, n), this.selfLog && console.info("%c" + this.name + ": level start", "color: " + this.color, {
								level: e,
								score: t,
								levelName: n
							})
						}, t.levelFail = function(e, t, n) {
							this.processLevelFail(e, t, n), this.selfLog && console.info("%c" + this.name + ": level fail", "color: " + this.color, {
								level: e,
								score: t,
								levelName: n
							})
						}, t.levelRescue = function(e, t, n) {
							this.processLevelRescue(e, t, n), this.selfLog && console.info("%c" + this.name + ": level rescue", "color: " + this.color, {
								level: e,
								score: t,
								levelName: n
							})
						}, t.levelComplete = function(e, t, n) {
							this.processLevelComplete(e, t, n), this.selfLog && console.info("%c" + this.name + ": level complete", "color: " + this.color, {
								level: e,
								score: t,
								levelName: n
							})
						}, t.showInterstitialAd = function(e) {
							this.processShowInterstitialAd(e), this.selfLog && console.info("%c" + this.name + ": show interstitial ad", "color: " + this.color, {
								placement: e
							})
						}, t.showRewardedVideoAd = function(e) {
							this.processShowRewardedVideoAd(e), this.selfLog && console.info("%c" + this.name + ": show rewarded video ad", "color: " + this.color, {
								placement: e
							})
						}, t.receiveReward = function(e) {
							this.processReceiveReward(e), this.selfLog && console.info("%c" + this.name + ": receive reward", "color: " + this.color, {
								placement: e
							})
						}, t.showAdFail = function(e, t, n) {
							this.processShowAdFail(e, t, n), this.selfLog && console.info("%c" + this.name + ": show ad fail", "color: " + this.color, {
								type: e,
								placement: t,
								reason: n
							})
						}, t.getPageByKey = function(e) {
							var t = e.replace(/_/g, "-");
							return t = t.toLowerCase()
						}, t.processLevelStart = function(e, t, n) {}, t.processLevelFail = function(e, t, n) {}, t.processLevelRescue = function(e, t, n) {}, t.processLevelComplete = function(e, t, n) {}, t.processShowInterstitialAd = function(e) {}, t.processShowRewardedVideoAd = function(e) {}, t.processReceiveReward = function(e) {}, t.processShowAdFail = function(e, t, n) {}, e
					}();
				GameCore.Analytics = {
					BaseAnalytics: B
				};
				var D = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).analytics = void 0, n.pageview = function(e) {
								n.isActive() && n.analytics.forEach((function(t) {
									t.pageview(e)
								}))
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.analytics = []
						}, n.add = function(e) {
							this.analytics.push(e)
						}, n.event = function(e, t, n) {
							this.isActive() && this.analytics.forEach((function(i) {
								i.event(e, t, n)
							}))
						}, n.levelStart = function(e, t, n) {
							this.isActive() && this.analytics.forEach((function(i) {
								i.levelStart(e, t, n)
							}))
						}, n.levelRescue = function(e, t, n) {
							this.isActive() && this.analytics.forEach((function(i) {
								i.levelRescue(e, t, n)
							}))
						}, n.levelFail = function(e, t, n) {
							this.isActive() && this.analytics.forEach((function(i) {
								i.levelFail(e, t, n)
							}))
						}, n.levelComplete = function(e, t, n) {
							this.isActive() && this.analytics.forEach((function(i) {
								i.levelComplete(e, t, n)
							}))
						}, n.showInterstitialAd = function(e) {
							this.isActive() && this.analytics.forEach((function(t) {
								t.showInterstitialAd(e)
							}))
						}, n.showRewardedVideoAd = function(e) {
							this.isActive() && this.analytics.forEach((function(t) {
								t.showRewardedVideoAd(e)
							}))
						}, n.receiveReward = function(e) {
							this.isActive() && this.analytics.forEach((function(t) {
								t.receiveReward(e)
							}))
						}, n.showAdFail = function(e, t, n) {
							this.isActive() && this.analytics.forEach((function(i) {
								i.showAdFail(e, t, n)
							}))
						}, n.isActive = function() {
							return this.analytics.length >= 1
						}, t
					}(Phaser.Plugins.BasePlugin),
					N = D,
					M = function() {
						function e(e, t, n) {
							var i = this;
							this.name = void 0, this.game = void 0, this.isSprite = void 0, this.audio = void 0, this.markers = void 0, this.volume = void 0, this.isMusicEnabled = function() {
								return !!i.game.player.getPlayerSetting("music")
							}, this.isSoundEnabled = function() {
								return !!i.game.player.getPlayerSetting("sound")
							}, this.name = t, this.game = e, this.markers = {}, this.isSprite = n, this.isSprite || (this.audio = this.game.sound.add(this.name))
						}
						var t = e.prototype;
						return t.play = function(e, t) {
							var n, i, a, s = (0, r.Z)({
								volume: this.volume
							}, t || {});
							if (s.volume !== this.volume && (s.volume *= this.volume), !this.isSprite) return (null == (i = this.audio) ? void 0 : i.seek) > 0 ? void this.audio.resume() : void(null == (a = this.audio) || a.play(e, s));
							this.createMaker(e), null == (n = this.markers[e]) || n.play(e, s)
						}, t.pause = function(e) {
							var t, n;
							this.isSprite ? null == (t = this.markers[e]) || t.pause() : null == (n = this.audio) || n.pause()
						}, t.stop = function(e) {
							var t, n;
							this.isSprite ? null == (t = this.markers[e]) || t.stop() : null == (n = this.audio) || n.stop()
						}, t.setVolume = function(e) {
							this.volume = e
						}, t.createMaker = function(e) {
							if (!this.markers[e]) try {
								this.markers[e] = this.game.sound.addAudioSprite(this.name)
							} catch (t) {
								console.warn("createMaker", t)
							}
						}, e
					}(),
					L = M,
					F = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).soundManager = void 0, n.musicManager = void 0, n.isMuteAll = void 0, n.initMusic = function(e) {
								n.musicManager = new L(n.game, e, !1), n.setMusicVolume(1)
							}, n.initSound = function(e) {
								n.soundManager = new L(n.game, e, !0), n.setSoundVolume(1)
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.playSound = function(e, t) {
							try {
								if (!this.soundManager || this.isMuteAll || !this.game.visibility.isGameVisible()) return;
								if (!this.soundManager.isSoundEnabled()) return;
								this.soundManager.play(e, t)
							} catch (n) {}
						}, n.stopSound = function(e) {
							try {
								this.soundManager.stop(e)
							} catch (t) {}
						}, n.playMusic = function(e) {
							void 0 === e && (e = {});
							try {
								if (!this.musicManager || this.isMuteAll || !this.game.visibility.isGameVisible()) return;
								if (!this.musicManager.isMusicEnabled()) return;
								this.musicManager.play("", (0, r.Z)({
									loop: !0,
									volume: .2
								}, e))
							} catch (t) {}
						}, n.pauseMusic = function() {
							try {
								if (!this.musicManager) return;
								this.musicManager.pause("")
							} catch (e) {}
						}, n.stopMusic = function() {
							try {
								if (!this.musicManager) return;
								this.musicManager.stop("")
							} catch (e) {}
						}, n.setSoundVolume = function(e) {
							try {
								if (!this.soundManager) return;
								this.soundManager.setVolume(e)
							} catch (t) {
								console.warn("setSoundVolume", t)
							}
						}, n.setMusicVolume = function(e) {
							try {
								if (!this.musicManager) return;
								this.musicManager.setVolume(e)
							} catch (t) {
								console.warn("setMusicVolume", t)
							}
						}, n.muteAll = function() {
							this.isMuteAll = !0, this.game.sound.mute = !0
						}, n.unmuteAll = function() {
							this.isMuteAll = !1, this.game.sound.mute = !1
						}, t
					}(Phaser.Plugins.BasePlugin),
					G = F,
					Z = n(52),
					U = "AUTH_TOKEN_REQUEST",
					H = "AUTH_TOKEN_RECEIVED",
					V = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t) || this).payload = void 0, i.name = "RequestTokenFail", i.message = t || "Request token fail", i.payload = n || {}, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					Y = n(614),
					W = "auth",
					z = (0, Y.P1)([function(e) {
						return e[W].token
					}], (function(e) {
						return e
					})),
					K = (0, Y.P1)([function(e) {
						return e[W].isRequesting
					}], (function(e) {
						return e
					})),
					j = function(e) {
						return {
							type: H,
							payload: {
								token: e
							}
						}
					},
					X = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.requestToken = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = this.game.storage, e.next = 3, t.dispatch(function() {
												var e = (0, s.Z)(u().mark((function e(t, n) {
													var a, r, s, o;
													return u().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																if (e.prev = 0, a = window.game.facebook, r = n(), s = z(r), !K(r) && "" === s) {
																	e.next = 7;
																	break
																}
																return e.abrupt("return");
															case 7:
																return t({
																	type: U,
																	payload: {}
																}), e.next = 10, a.getPlayerToken();
															case 10:
																o = e.sent, t(j(o)), e.next = 25;
																break;
															case 14:
																if (e.prev = 14, e.t0 = e.catch(0), !(e.t0 instanceof Object && GameCore.Utils.Object.hasOwn(e.t0, "code"))) {
																	e.next = 19;
																	break
																}
																if ("PENDING_REQUEST" !== e.t0.code) {
																	e.next = 19;
																	break
																}
																return e.abrupt("return");
															case 19:
																if (t(j("")), !(e.t0 instanceof Object && GameCore.Utils.Object.hasOwn(e.t0, "message"))) {
																	e.next = 24;
																	break
																}
																if ("string" !== typeof e.t0.message) {
																	e.next = 24;
																	break
																}
																return (0, i.tO)(new Error(e.t0.message)), e.abrupt("return");
															case 24:
																(0, i.tO)(new V);
															case 25:
															case "end":
																return e.stop()
														}
													}), e, null, [
														[0, 14]
													])
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}());
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.getToken = function() {
							return z(this.state)
						}, (0, Z.Z)(t, [{
							key: "state",
							get: function() {
								return this.game.storage.getState()
							}
						}]), t
					}(Phaser.Plugins.BasePlugin),
					q = X,
					Q = n(25),
					J = n.n(Q),
					$ = n(26),
					ee = n.n($),
					te = function(e, t) {
						void 0 === t && (t = 1);
						var n = new Image;
						n.onload = function() {
							var n, i, a = (n = this.width * t, i = this.height * t, {
								string: "+",
								style: "font-size: 1px; padding: " + Math.floor(i / 2) + "px " + Math.floor(n / 2) + "px;"
							});
							console.info("%c " + a.string, a.style + " background: transparent url(" + e + ") no-repeat center center; background-size: " + this.width * t + "px " + this.height * t + "px;")
						}, n.src = e
					},
					ne = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).width = void 0, n.height = void 0, n.renderOptions = void 0, n.canvas = void 0, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.preload = function(e) {
							var t = this,
								n = J()(e);
							n.length < 1 || (n.forEach((function(n) {
								t.scene.load.image(n, e[n])
							})), this.scene.load.start())
						}, n.capture = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n, i, a;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = t.width, i = t.height, a = t.renderOptions, this.width = n, this.height = i, this.renderOptions = a, this.createCanvas(), e.next = 7, this.loadImages();
										case 7:
											return this.drawObjects(), e.abrupt("return", this.snapshotFrame());
										case 9:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.createCanvas = function() {
							this.canvas || (this.canvas = this.game.textures.createCanvas("FrameCaptureCanvas")), this.canvas.clear(), this.canvas.setSize(this.width, this.height)
						}, n.loadImages = function() {
							var e = this;
							return new(ee())((function(t, n) {
								for (var i in e.renderOptions) {
									var a = e.renderOptions[i],
										r = a.name,
										s = a.image;
									if (s) e.scene.textures.get(r).key !== r && e.scene.load.image(r, s)
								}
								e.scene.load.on(Phaser.Loader.Events.COMPLETE, t), e.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, (function() {
									var e = new Error("Load image failed");
									n(e)
								})), e.scene.load.start()
							}))
						}, n.drawObjects = function() {
							for (var e in this.renderOptions) {
								var t = this.renderOptions[e];
								switch (t.type) {
									case "text":
										this.drawText(t);
										break;
									case "image":
										this.drawImage(t)
								}
							}
						}, n.drawText = function(e) {
							var t = this.canvas.context,
								n = e.x,
								i = e.y,
								a = e.font,
								r = e.text,
								s = e.fillStyle,
								o = e.lineWidth,
								c = e.textAlign;
							t.font = a + ' nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif', t.fillStyle = s || "#ffffff", o && (t.lineWidth = o), c && (t.textAlign = c), t.fillText(r, n, i)
						}, n.drawImage = function(e) {
							var t = this.canvas.context,
								n = e.x,
								i = e.y,
								a = e.name,
								r = e.frame,
								s = e.width,
								o = e.height,
								c = e.fallbackWithImage,
								u = this.scene.textures.get(a),
								l = u.getSourceImage(r);
							"__MISSING" === u.key && c && (l = (u = this.scene.textures.get(c)).getSourceImage()), t.drawImage(l, n, i, s, o)
						}, n.snapshotFrame = function() {
							var e = this.canvas.getCanvas().toDataURL("image/jpeg", .85);
							return GameCore.Utils.Valid.isDebugger() && te(e), e
						}, t
					}(Phaser.Plugins.ScenePlugin),
					ie = ne,
					ae = n(84),
					re = n.n(ae),
					se = function(e) {
						function t(t, n, i) {
							var a;
							return (a = e.call(this) || this).game = void 0, a.options = void 0, a.performance = void 0, a.isRunning = !1, a.checkTimer = void 0, a.fpsHistory = void 0, a.start = function() {
								if (!a.isRunning) {
									a.isRunning = !0;
									var e = a.options.checkInterval;
									a.checkTimer = e, a.fpsHistory = [], a.game.events.on(Phaser.Core.Events.POST_STEP, a.onPostStep)
								}
							}, a.stop = function() {
								a.isRunning && (a.isRunning = !1, a.game.events.off(Phaser.Core.Events.POST_STEP, a.onPostStep), a.options.onlyUpdateWhenSwitchScene && a.checkFps())
							}, a.onPostStep = function(e, t) {
								if (a.checkTimer -= t, !(a.checkTimer > 0)) {
									var n = a.options,
										i = n.checkInterval,
										r = n.onlyUpdateWhenSwitchScene;
									a.checkTimer += i, a.fpsHistory.push(a.game.loop.actualFps), !1 === r && a.fpsHistory.length >= 5 && a.checkFps()
								}
							}, a.game = t, a.options = i, a.performance = n, a
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.checkFps = function() {
							if (0 !== this.fpsHistory.length) {
								var e = this.options.autoUpgradeQuality,
									t = !1;
								this.isLowFps() ? t = this.performance.downgradeGraphicsQuality() : e && this.isHighFps() && (t = this.performance.upgradeGraphicsQuality()), t && (this.fpsHistory = [])
							}
						}, n.getFpsMedian = function() {
							return Phaser.Math.Median(this.fpsHistory)
						}, n.isLowFps = function() {
							return this.getFpsMedian() < this.options.fpsThreshold
						}, n.isHighFps = function() {
							return this.getFpsMedian() > 1.2 * this.options.fpsThreshold
						}, t
					}(Phaser.Events.EventEmitter),
					oe = se,
					ce = ["pixelRatio", "minQuality", "maxQuality", "qualityAdjustStep", "trackingSceneKeys"],
					ue = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).fpsTracker = void 0, n.pixelRatio = void 0, n.minQuality = void 0, n.maxQuality = void 0, n.qualityAdjustStep = void 0, n.trackingSceneKeys = [], n.trackingScene = function(e) {
								var t;
								if (re()(t = n.trackingSceneKeys).call(t, e)) {
									var i = n.game.scene.getScene(e);
									i.events.once(Phaser.Scenes.Events.UPDATE, n.fpsTracker.start), i.events.once(Phaser.Scenes.Events.SLEEP, n.fpsTracker.stop)
								}
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.configure = function(e) {
							var t = e.pixelRatio,
								n = e.minQuality,
								i = e.maxQuality,
								r = e.qualityAdjustStep,
								s = e.trackingSceneKeys,
								o = (0, a.Z)(e, ce);
							this.pixelRatio = t, this.minQuality = n, this.maxQuality = i, this.qualityAdjustStep = r, this.trackingSceneKeys = s, this.fpsTracker = new oe(this.game, this, o)
						}, n.active = function() {
							this.game.events.on(Phaser.Scenes.Events.WAKE, this.trackingScene), this.game.events.on(Phaser.Scenes.Events.START, this.trackingScene)
						}, n.downgradeGraphicsQuality = function() {
							var e = this.pixelRatio;
							if (e <= this.minQuality) return !1;
							var t = +(e - this.qualityAdjustStep).toFixed(2);
							return !(t < this.minQuality) && (this.pixelRatio = t, this.game.world.resize(this.pixelRatio), console.warn("\ud83d\udcab Graphics quality was downgraded! (" + e + " -> " + t + ")"), !0)
						}, n.upgradeGraphicsQuality = function() {
							var e = this.pixelRatio;
							if (e >= this.maxQuality) return !1;
							var t = +(e + this.qualityAdjustStep).toFixed(2);
							return !(t > this.maxQuality) && (this.pixelRatio = t, this.game.world.resize(this.pixelRatio), console.warn("\ud83d\ude80 Graphics quality was upgraded! (" + e + " -> " + t + ")"), !0)
						}, t
					}(Phaser.Plugins.BasePlugin),
					le = ue,
					he = {
						sound: !0,
						music: !0,
						vibrate: !0,
						language: "en",
						theme: GameCore.Configs.DefaultTheme
					},
					de = n(31),
					pe = n.n(de),
					fe = n(27),
					me = n.n(fe),
					ge = he.sound,
					ve = he.music,
					ye = he.vibrate,
					Se = he.language,
					be = he.theme,
					Ee = function() {
						function e(e) {
							this.sound = void 0, this.music = void 0, this.vibrate = void 0, this.language = void 0, this.theme = void 0;
							var t = e || {},
								n = t.sound,
								i = t.music,
								a = t.vibrate,
								r = t.language,
								s = t.theme;
							this.sound = GameCore.Utils.Valid.isBoolean(n) ? n : ge, this.music = GameCore.Utils.Valid.isBoolean(i) ? i : ve, this.vibrate = GameCore.Utils.Valid.isBoolean(a) ? a : ye, this.language = GameCore.Utils.Valid.isString(r) ? r : Se, this.theme = GameCore.Utils.Valid.isString(s) ? s : be
						}
						return e.prototype.toObject = function() {
							return {
								sound: this.sound,
								music: this.music,
								vibrate: this.vibrate,
								language: this.language,
								theme: this.theme
							}
						}, e
					}(),
					Ae = Ee,
					we = GameCore.Utils,
					Te = we.Valid,
					Ce = we.Object,
					Pe = function() {
						function e(e) {
							this.score = void 0, this.settings = void 0, this.gameData = void 0, this.userGuideDisplays = void 0, this.setupDefaultData(), this.updateScore(e), this.updateSettings(e), this.updateGameData(e), this.updateUserGuideDisplays(e)
						}
						var t = e.prototype;
						return t.setupDefaultData = function() {
							this.score = 0, this.settings = (0, r.Z)({}, he), this.gameData = {
								coins: 0,
								diamond: 0,
								lastReceiveGift: 0,
								dailyRewarded: {
									lastRewarded: 0,
									logDays: []
								},
								dailyTasks: {
									startedTime: 0,
									logTasks: {}
								}
							}, this.userGuideDisplays = 0
						}, t.updateScore = function(e) {
							var t = e.score;
							!1 !== Te.isNumber(t) && (this.score = t)
						}, t.updateSettings = function(e) {
							var t = e.settings;
							if (!1 !== Te.isObject(t)) {
								var n = new Ae(t).toObject();
								this.settings = n
							}
						}, t.updateGameData = function(e) {
							var t = e.gameData;
							if (!1 !== Te.isObject(t)) {
								if (Ce.hasOwn(t, "coins") && Te.isNumber(t.coins) && (this.gameData.coins = t.coins), Ce.hasOwn(t, "diamond") && Te.isNumber(t.diamond) && (this.gameData.diamond = t.diamond), Ce.hasOwn(t, "lastReceiveGift") && Te.isNumber(t.lastReceiveGift) && (this.gameData.lastReceiveGift = t.lastReceiveGift), Ce.hasOwn(t, "dailyRewarded") && Te.isObject(t.dailyRewarded)) {
									var n = t.dailyRewarded;
									Ce.hasOwn(n, "lastRewarded") && Te.isNumber(n.lastRewarded) && (this.gameData.dailyRewarded.lastRewarded = n.lastRewarded), Ce.hasOwn(n, "logDays") && Array.isArray(n.logDays) && (this.gameData.dailyRewarded.logDays = n.logDays)
								}
								if (Ce.hasOwn(t, "dailyTasks") && Te.isObject(t.dailyTasks)) {
									var i = t.dailyTasks;
									Ce.hasOwn(i, "startedTime") && Te.isNumber(i.startedTime) && (this.gameData.dailyTasks.startedTime = i.startedTime), Ce.hasOwn(i, "logTasks") && Te.isObject(i.logTasks) && (this.gameData.dailyTasks.logTasks = i.logTasks)
								}
							}
						}, t.updateUserGuideDisplays = function(e) {
							var t = e.userGuideDisplays;
							!1 !== Te.isNumber(t) && (this.userGuideDisplays = t)
						}, t.toObject = function() {
							return {
								score: this.score,
								settings: this.settings,
								gameData: this.gameData,
								userGuideDisplays: this.userGuideDisplays
							}
						}, t.convertToPlayerData = function() {
							var e = this.gameData,
								t = e.coins,
								n = e.diamond,
								i = e.dailyTasks,
								a = e.dailyRewarded,
								r = e.lastReceiveGift;
							return {
								score: this.score,
								settings: this.settings,
								customFields: {
									coins: t,
									diamond: n,
									dailyTasks: i,
									dailyRewarded: a,
									lastReceiveGift: r
								},
								userGuideDisplays: this.userGuideDisplays
							}
						}, t.convertToFacebookData = function(e) {
							var t = e.score,
								n = e.settings,
								i = e.customFields,
								a = e.userGuideDisplays;
							return this.updateScore({
								score: t
							}), this.updateSettings({
								settings: n
							}), this.updateGameData({
								gameData: i
							}), this.updateUserGuideDisplays({
								userGuideDisplays: a
							}), this.toObject()
						}, e
					}(),
					Ie = (GameCore.Configs.ApiHost, function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.abrupt("return", null);
									case 3:
										return n = e.sent, e.abrupt("return", (null == n ? void 0 : n.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()),
					ke = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.abrupt("return", null);
									case 3:
										return n = e.sent, e.abrupt("return", (null == n ? void 0 : n.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					xe = "PLAYER_RECEIVED",
					Oe = "PLAYER_DATA_UPDATE",
					Re = "PLAYER_SCORE_UPDATE",
					_e = "PLAYER_PROFILE_UPDATE",
					Be = "PLAYER_SETTING_UPDATE",
					De = "PLAYER_CONNECTED_PLAYERS_UPDATE",
					Ne = n(606),
					Me = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t) || this).payload = void 0, i.name = "PlayerDataNameNotSupport", i.message = t || "The name of player data is not supported", i.payload = n || {}, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					Le = n(34),
					Fe = n.n(Le),
					Ge = "player",
					Ze = (0, Y.P1)([function(e) {
						return e[Ge]
					}], (function(e) {
						return e
					})),
					Ue = (0, Y.P1)([Ze], (function(e) {
						return e.playerId
					})),
					He = (0, Y.P1)([Ze], (function(e) {
						return e.ASID
					})),
					Ve = (0, Y.P1)([function(e) {
						return e[Ge].data
					}], (function(e) {
						return e
					})),
					Ye = ((0, Y.P1)([Ve], (function(e) {
						return e.settings
					})), (0, Y.P1)([function(e) {
						return e[Ge].connectedPlayers
					}], (function(e) {
						return e
					}))),
					We = (0, Y.P1)([Ye, function(e, t) {
						return t.limit
					}, function(e, t) {
						return t.offset
					}], (function(e, t, n) {
						if ("number" !== typeof t) return [];
						if ("number" !== typeof n) return [];
						var i = J()(e);
						return Fe()(i).call(i, n, t + n) || []
					})),
					ze = (0, Y.P1)([Ve], (function(e) {
						return e.score
					})),
					Ke = (0, Y.P1)([Ve], (function(e) {
						return e.customFields
					})),
					je = GameCore.Configs,
					Xe = je.AppId,
					qe = je.Tutorial,
					Qe = function(e, t) {
						return function(n) {
							var i = e.playerId,
								a = e.name,
								r = e.photo,
								s = e.locale;
							n({
								type: xe,
								payload: {
									playerId: i,
									name: a,
									photo: r,
									locale: s,
									data: t || {}
								}
							})
						}
					},
					Je = function(e) {
						return {
							type: De,
							payload: {
								connectedPlayers: e
							}
						}
					},
					$e = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return n.prev = 0, n.next = 3, a({
												type: Be,
												payload: {
													name: e,
													value: t
												}
											});
										case 3:
											s = r(), o = Ve(s), c = new Pe({}).convertToFacebookData(o), FBInstant.player.setDataAsync(c), n.next = 12;
											break;
										case 9:
											n.prev = 9, n.t0 = n.catch(0), (0, i.tO)(n.t0);
										case 12:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[0, 9]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					et = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c, l, h;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return n.prev = 0, o = {
												customFields: (s = {}, s[e] = t, s)
											}, n.next = 4, a(nt(o));
										case 4:
											c = r(), l = Ve(c), h = new Pe({}).convertToFacebookData(l), FBInstant.player.setDataAsync(h), n.next = 15;
											break;
										case 10:
											if (n.prev = 10, n.t0 = n.catch(0), !(n.t0 instanceof Me)) {
												n.next = 14;
												break
											}
											return n.abrupt("return");
										case 14:
											(0, i.tO)(n.t0);
										case 15:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[0, 10]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					tt = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n, a) {
								var r, s, o, c;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, r = {
												customFields: e
											}, t.next = 4, n(nt(r));
										case 4:
											s = a(), o = Ve(s), c = new Pe({}).convertToFacebookData(o), FBInstant.player.setDataAsync(c), t.next = 16;
											break;
										case 10:
											if (t.prev = 10, t.t0 = t.catch(0), console.log("\ud83e\udd16 ? error", t.t0), !(t.t0 instanceof Me)) {
												t.next = 15;
												break
											}
											return t.abrupt("return");
										case 15:
											(0, i.tO)(t.t0);
										case 16:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 10]
								])
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}()
					},
					nt = function(e) {
						return {
							type: Oe,
							payload: {
								data: e
							}
						}
					},
					it = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n, a) {
								var r, s, o;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, t.next = 3, n({
												type: Re,
												payload: {
													score: e
												}
											});
										case 3:
											Ie({
												score: e
											}), r = a(), s = Ve(r), o = new Pe({}).convertToFacebookData(s), FBInstant.player.setDataAsync(o), t.next = 13;
											break;
										case 10:
											t.prev = 10, t.t0 = t.catch(0), (0, i.tO)(t.t0);
										case 13:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 10]
								])
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}()
					},
					at = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.incUserGuideDisplays = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = this.game.storage, e.next = 3, t.dispatch(function() {
												var e = (0, s.Z)(u().mark((function e(t, n) {
													var a, r, s, o;
													return u().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																if (e.prev = 0, !qe.ForceUseTutorial) {
																	e.next = 3;
																	break
																}
																return e.abrupt("return");
															case 3:
																return e.next = 5, t(nt({
																	userGuideDisplays: 1
																}));
															case 5:
																a = n(), r = Ue(a), s = Ve(a), o = new Pe({}).convertToFacebookData(s), FBInstant.player.setDataAsync(o), ke(r), e.next = 16;
																break;
															case 13:
																e.prev = 13, e.t0 = e.catch(0), (0, i.tO)(e.t0);
															case 16:
															case "end":
																return e.stop()
														}
													}), e, null, [
														[0, 13]
													])
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}());
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.receiveData = function() {
							var e = (0, s.Z)(u().mark((function e(t, n) {
								var i;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return i = this.game.storage, e.next = 3, i.dispatch(Qe(t, n));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(), n.updateData = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = this.game.storage, e.next = 3, t.dispatch(function() {
												var e = (0, s.Z)(u().mark((function e(t, n) {
													var a, r, s, o, c, l, h, d;
													return u().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																return e.prev = 0, a = n(), r = Ze(a), s = r.playerId, o = r.name, c = r.photo, l = r.locale, e.next = 6, FBInstant.player.getASIDAsync();
															case 6:
																return h = e.sent, d = {
																	appId: Xe,
																	playerId: s,
																	name: o,
																	photo: c,
																	locale: l,
																	ASID: h
																}, e.next = 10, t({
																	type: _e,
																	payload: {
																		profile: d
																	}
																});
															case 10:
																return e.next = 12, Ie(d);
															case 12:
																e.next = 17;
																break;
															case 14:
																e.prev = 14, e.t0 = e.catch(0), (0, i.tO)(e.t0);
															case 17:
															case "end":
																return e.stop()
														}
													}), e, null, [
														[0, 14]
													])
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}());
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.setBestScore = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = this.game.storage, e.next = 3, n.dispatch(it(t));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.setSetting = function() {
							var e = (0, s.Z)(u().mark((function e(t, n) {
								var i;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return i = this.game.storage, e.next = 3, i.dispatch($e(t, n));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(), n.setCustomData = function() {
							var e = (0, s.Z)(u().mark((function e(t, n) {
								var i;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return i = this.game.storage, e.next = 3, i.dispatch(et(t, n));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(), n.setMultiCustomData = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = this.game.storage, e.next = 3, n.dispatch(tt(t));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.requestConnectedPlayers = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = this.game.storage, e.next = 3, t.dispatch(function() {
												var e = (0, s.Z)(u().mark((function e(t) {
													var n, a, r, s, o;
													return u().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																return e.prev = 0, a = window.game.facebook, e.next = 4, new(ee())((function(e, t) {
																	a.once("players", (function(t) {
																		e(t)
																	})), a.once("playersfail", (function() {
																		return t([])
																	})), a.getPlayers()
																}));
															case 4:
																if (r = e.sent, s = function(e) {
																		return !!e
																	}, o = pe()(n = me()(r).call(r, (function(e) {
																		var t = e.getID(),
																			n = e.getName(),
																			i = e.getPhoto();
																		return t && n && i ? new Ne.Z(t, n, i).toObject() : null
																	}))).call(n, s), !(o.length < 1)) {
																	e.next = 9;
																	break
																}
																return e.abrupt("return");
															case 9:
																t(Je(o)), e.next = 15;
																break;
															case 12:
																e.prev = 12, e.t0 = e.catch(0), (0, i.tO)(e.t0);
															case 15:
															case "end":
																return e.stop()
														}
													}), e, null, [
														[0, 12]
													])
												})));
												return function(t) {
													return e.apply(this, arguments)
												}
											}());
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.updateConnectedPlayers = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = this.game.storage, e.next = 3, n.dispatch(Je(t));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.getPlayer = function() {
							return Ze(this.state)
						}, n.getPlayerId = function() {
							return this.getPlayer().playerId
						}, n.getPlayerASID = function() {
							return He(this.state)
						}, n.getPlayerData = function() {
							return this.getPlayer().data
						}, n.getPlayerSetting = function(e) {
							var t = this.getPlayerSettings();
							return "string" !== typeof e ? null : GameCore.Utils.Object.hasOwn(t, e) ? t[e] : GameCore.Utils.Object.hasOwn(he, e) ? he[e] : null
						}, n.getPlayerSettings = function() {
							return this.getPlayerData().settings
						}, n.getPlayerIsNew = function() {
							return this.getPlayer().isUserNew
						}, n.getDiamond = function() {
							var e = this.getCustomData("diamond");
							return GameCore.Utils.Valid.isNumber(e) ? e : 0
						}, n.getBestScore = function() {
							return ze(this.state)
						}, n.getCustomData = function(e) {
							var t = Ke(this.state);
							return GameCore.Utils.Valid.isObject(t) && GameCore.Utils.Object.hasOwn(t, e) ? t[e] : null
						}, n.getConnectedPlayers = function() {
							return Ye(this.state)
						}, n.getConnectedPlayerIds = function(e, t) {
							return We(this.state, {
								limit: e,
								offset: t
							})
						}, (0, Z.Z)(t, [{
							key: "state",
							get: function() {
								return this.game.storage.getState()
							}
						}]), t
					}(Phaser.Plugins.BasePlugin),
					rt = at,
					st = n(51),
					ot = n.n(st),
					ct = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "BadRequest", i.message = t || "This request is bad", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					ut = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "RequestTimeout", i.message = t || "This request is timeout", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					lt = n(608),
					ht = GameCore.Configs,
					dt = ht.AppId,
					pt = ht.Network,
					ft = function(e) {
						if (!e.ok) throw new ct(null, {
							response: e
						})
					},
					mt = function() {
						var e = window.game.auth.getToken();
						return {
							token: e,
							timeout: pt.Timeout,
							headers: {
								Authorization: "Bearer " + e,
								"Content-Type": "application/json"
							}
						}
					},
					gt = function(e, t, n, i) {
						/* return (0, s.Z)(u().mark((function a() {
							var r, s, o, c, l;
							return u().wrap((function(a) {
								for (;;) switch (a.prev = a.next) {
									case 0:
										return a.prev = 0, r = e + "/apps/" + dt + "/" + t, s = new AbortController, n.signal = s.signal, o = setTimeout((function() {
											s.abort()
										}), n.timeout), GameCore.Utils.Valid.isObject(i) && (n.body = ot()(i)), a.next = 8, fetch(r, n);
									case 8:
										return c = a.sent, clearTimeout(o), ft(c), a.next = 13, c.json();
									case 13:
										if (a.t0 = a.sent, a.t0) {
											a.next = 16;
											break
										}
										a.t0 = {};
									case 16:
										return l = a.t0, a.abrupt("return", l);
									case 20:
										if (a.prev = 20, a.t1 = a.catch(0), !(a.t1 instanceof ct)) {
											a.next = 24;
											break
										}
										return a.abrupt("return", null);
									case 24:
										if (!(a.t1 instanceof Object && GameCore.Utils.Object.hasOwn(a.t1, "name"))) {
											a.next = 27;
											break
										}
										if ("AbortError" !== a.t1.name) {
											a.next = 27;
											break
										}
										throw new ut(null);
									case 27:
										throw a.t1;
									case 28:
									case "end":
										return a.stop()
								}
							}), a, null, [
								[0, 20]
							])
						}))) */
						console.log("1111",e, t, n, i);
					},
					vt = function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.abrupt("return", t());
									case 4:
										if (e.prev = 4, e.t0 = e.catch(0), !(e.t0 instanceof ut && n > 0)) {
											e.next = 18;
											break
										}
										return e.prev = 7, e.next = 10, (0, lt.qZ)(600);
									case 10:
										return e.next = 12, vt(t, n - 1);
									case 12:
										return e.abrupt("return", e.sent);
									case 15:
										return e.prev = 15, e.t1 = e.catch(7), e.abrupt("return", {});
									case 18:
										if (!(e.t0 instanceof ut)) {
											e.next = 20;
											break
										}
										return e.abrupt("return", {});
									case 20:
										return console.warn(e.t0), e.abrupt("return", {});
									case 22:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 4],
								[7, 15]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					yt = function() {
						var e = (0, s.Z)(u().mark((function e(t, n, i, a) {
							var s, o;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return void 0 === n && (n = {}), void 0 === a && (a = pt.Retries), e.prev = 2, s = (0, r.Z)({}, mt(), n, {
											method: "GET"
										}), o = gt(i, t, s), e.next = 7, vt(o, a);
									case 7:
										return e.abrupt("return", e.sent);
									case 10:
										return e.prev = 10, e.t0 = e.catch(2), console.warn(e.t0), e.abrupt("return", {});
									case 14:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, 10]
							])
						})));
						return function(t, n, i, a) {
							return e.apply(this, arguments)
						}
					}(),
					St = function() {
						var e = (0, s.Z)(u().mark((function e(t, n, i, a, s) {
							var o, c;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return void 0 === i && (i = {}), void 0 === s && (s = pt.Retries), e.prev = 2, o = (0, r.Z)({}, mt(), i, {
											method: "POST"
										}), c = gt(a, t, o, n), e.next = 7, vt(c, s);
									case 7:
										return e.abrupt("return", e.sent);
									case 10:
										return e.prev = 10, e.t0 = e.catch(2), console.warn(e.t0), e.abrupt("return", {});
									case 14:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, 10]
							])
						})));
						return function(t, n, i, a, r) {
							return e.apply(this, arguments)
						}
					}(),
					bt = GameCore.Configs.ApiHost,
					Et = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = GameCore.Utils.String.params(t), e.next = 3, yt("players?" + n, {}, bt);
									case 3:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || []);
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					At = "PROFILES_DATA_UPDATE",
					wt = "profile",
					Tt = (0, Y.P1)([function(e) {
						return e[wt].data
					}], (function(e) {
						return e
					})),
					Ct = (0, Y.P1)([function(e) {
						return e[wt].profileIds
					}], (function(e) {
						return e
					})),
					Pt = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n, a) {
								var r, s, o, c;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (t.prev = 0, r = a(), s = Ct(r), !((o = GameCore.Utils.Array.difference(e, s)).length < 1)) {
												t.next = 6;
												break
											}
											return t.abrupt("return");
										case 6:
											return t.next = 8, Et({
												playerIds: o
											});
										case 8:
											c = t.sent, n({
												type: At,
												payload: {
													data: c
												}
											}), t.next = 15;
											break;
										case 12:
											t.prev = 12, t.t0 = t.catch(0), (0, i.tO)(t.t0);
										case 15:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 12]
								])
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}()
					},
					It = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.requestProfiles = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = this.game.storage, e.next = 3, n.dispatch(Pt(t));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), n.getProfiles = function() {
							return Tt(this.state)
						}, (0, Z.Z)(t, [{
							key: "state",
							get: function() {
								return this.game.storage.getState()
							}
						}]), t
					}(Phaser.Plugins.BasePlugin),
					kt = It,
					xt = n(18),
					Ot = n.n(xt),
					Rt = n(186),
					_t = n.n(Rt),
					Bt = ["player", "match"],
					Dt = "null",
					Nt = GameCore.Configs.Rollbar,
					Mt = Nt.UseMockup,
					Lt = Nt.FilterError,
					Ft = Nt.ListPlayerDevIds,
					Gt = function(e) {
						function t() {
							for (var t, n, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
							return (n = e.call.apply(e, y()(t = [this]).call(t, r)) || this).enable = void 0, n.rollbar = void 0, n.events = [], n.beforeSend = function(e, t, i) {
								Mt && n.showPopupError(i)
							}, n.checkIgnore = function(e, t, i) {
								try {
									return !!n.isErrorIgnore(t) && (console.warn(t), !0)
								} catch (a) {
									return !1
								}
							}, n.showPopupError = function(e) {
								var t, i, a, r, s, o = null == e || null == (t = e.body) || null == (i = t.trace) ? void 0 : i.exception;
								o && n.events.push(o);
								var c = (null == e || null == (a = e.body) || null == (r = a.trace) ? void 0 : r.frames) || [];
								(s = n.events).push.apply(s, c);
								var u = document.getElementById("popup-error");
								u || ((u = document.createElement("div")).id = "popup-error", document.body.appendChild(u)), u.innerHTML = '<div style="color: #fff; display: flex; flex-flow: column; align-items: center; ">\n      <pre id="json" style="overflow: auto; background-color: rgb(195 112 97 / 80%); padding: 10px; max-height: 80vh; max-width: 90vw; border: 5px solid #545454;">' + ot()(n.events, null, 2) + '</pre>\n      <button id="close" style="cursor: pointer; padding: 10px 20px; border-radius: 100px;">Close</button>\n      </div>', u.style = "top: 0px; z-index: 10000; width: 100vw; max-height: 100vh; position: absolute; display: flex; align-items: center; justify-content: center;";
								var l = document.getElementById("close");
								l && (l.onclick = n.closePopup)
							}, n.closePopup = function() {
								n.events = [{}];
								var e = document.getElementById("popup-error");
								null == e || e.remove()
							}, n.isNoneErrorEvent = function(e) {
								if (!e || 0 === e.length) return !1;
								if (!e[0].message) return !1;
								return "Non-Error promise rejection captured with keys: code, message" === e[0].message
							}, n.isErrorIgnore = function(e) {
								if (!e || 0 === e.length) return !1;
								var t = !1,
									i = e[0];
								return i instanceof Object && (t = n.isIgnoreByCode(i) || n.isIgnoreByMessage(i)), t
							}, n.isIgnoreByCode = function(e) {
								if (GameCore.Utils.Object.hasOwn(e, "code")) {
									var t = e.code,
										n = Lt.Codes,
										i = n.accepted,
										a = n.ignored;
									if ("string" === typeof t) {
										if (Ot()(i).call(i, t) >= 0) return !1;
										if (Ot()(a).call(a, t) >= 0) return !0
									}
								} else if (GameCore.Utils.Object.hasOwn(e, "name")) {
									var r = e.name,
										s = Lt.Codes,
										o = s.accepted,
										c = s.ignored;
									if ("string" === typeof r) {
										if (Ot()(o).call(o, r) >= 0) return !1;
										if (Ot()(c).call(c, r) >= 0) return !0
									}
								}
								return !1
							}, n.isIgnoreByMessage = function(e) {
								if (GameCore.Utils.Object.hasOwn(e, "message")) {
									var t = e.message,
										n = Lt.Messages,
										i = n.accepted,
										a = n.ignored;
									if ("string" === typeof t) {
										if (Ot()(i).call(i, t) >= 0) return !1;
										if (Ot()(a).call(a, t) >= 0) return !0
									}
								}
								return !1
							}, n.addExtraState = function() {
								try {
									if (!GameCore.Utils.Object.hasOwn(window, "game")) return;
									if (!GameCore.Utils.Object.hasOwn(window.game, "storage")) return;
									if (!GameCore.Utils.Object.hasOwn(window.game.storage, "getState")) return;
									var e = (0, window.game.storage.getState)() || {},
										t = e.player,
										i = e.match,
										r = (0, a.Z)(e, Bt);
									n.rollbar.configure({
										payload: {
											player: t,
											match: i,
											other: r
										}
									})
								} catch (s) {
									console.warn("%c addExtraState: ", "font-size:12px;background-color: #42b983;color:#fff;", s)
								}
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.setup = function() {
							this.rollbar = new(_t())({
								accessToken: Dt,
								checkIgnore: this.checkIgnore,
								onSendCallback: this.beforeSend,
								captureUncaught: !0,
								scrubTelemetryInputs: !0,
								captureUnhandledRejections: !0,
								autoInstrument: {
									dom: !1,
									navigation: !1
								},
								payload: {
									environment: "production",
									client: {
										javascript: {
											code_version: "2"
										}
									},
									server: {
										root: "webpack:///./",
										branch: "master"
									}
								}
							}), this.enable = !0, this.sendTestException()
						}, n.configure = function(e) {
							this.rollbar && this.rollbar.configure(e)
						}, n.sendTestException = function() {
							var e = this.game.facebook.getPlayerID();
							re()(Ft).call(Ft, e) && this.rollbar.debug(new Error("Test rollbar"), {
								playerID: e
							})
						}, n.sendException = function(e, t) {
							e && (this.enable ? this.rollbar && (this.addExtraState(), this.rollbar.error(e, t)) : console.error(e))
						}, t
					}(Phaser.Plugins.BasePlugin),
					Zt = Gt,
					Ut = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return (0, o.Z)(t, e), t.prototype.emit = function(t, n) {
							return e.prototype.emit.call(this, t, n)
						}, t
					}(Phaser.Events.EventEmitter),
					Ht = Ut,
					Vt = n(609),
					Yt = function(e) {
						function t(t, n, i, a) {
							var r;
							(r = e.call(this, t) || this).zone = void 0, r.background = void 0, r.setName(n), r.setVisible(!1);
							var s = r.scene.world.getWorldSize(),
								o = s.width,
								c = s.height;
							return r.setSize(i || o, a || c), r.addZone(), r.addBackground(), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.open = function(e) {
							GameCore.Utils.Valid.isObject(e) && (this.setDataEnabled(), this.setData(e)), this.setBlockInputOutsideEnabled(!0), this.scene.screen.bringToTop(this.name), this.visible || (this.setVisible(!0), this.logPageviewOnOpen(), this.logEventOpen())
						}, n.close = function() {
							this.setBlockInputOutsideEnabled(!1), this.visible && (this.setVisible(!1), this.logPageviewOnClose())
						}, n.incY = function(e) {
							this.y += e, this.background.y -= e
						}, n.incX = function(e) {
							this.x += e, this.background.x -= e
						}, n.incScale = function(e) {
							this.scale += e, this.background.scale -= e ^ e * (100 / e)
						}, n.setBlockInputOutsideEnabled = function(e) {
							this.scene.input.setTopOnly(e)
						}, n.addZone = function() {
							this.zone = this.scene.add.zone(0, 0, this.width, this.height), this.zone.setInteractive({}), this.add(this.zone)
						}, n.addBackground = function() {
							var e = "screen-background";
							if (!this.scene.textures.exists(e)) {
								var t = this.width + 2,
									n = this.height + 2,
									i = this.scene.add.graphics();
								i.fillStyle(0, 1), i.fillRect(0, 0, t, n), i.generateTexture(e, t, n), i.destroy()
							}
							this.background = this.scene.add.image(0, 0, e), this.add(this.background)
						}, n.logPageviewOnOpen = function() {
							this.scene.analytics.pageview(this.name)
						}, n.logPageviewOnClose = function() {
							this.scene.analytics.pageview(this.scene.scene.key)
						}, n.logEventOpen = function() {
							this.scene.analytics.event(Vt._.SCREEN_OPEN, {
								screen_name: this.getScreenName()
							})
						}, n.getScreenName = function() {
							return GameCore.Utils.String.toUpperCamelCase(this.name.toLowerCase())
						}, t
					}(Phaser.GameObjects.Container),
					Wt = Yt,
					zt = {
						OPEN: "open",
						CLOSE: "close",
						CREATED: "created"
					};
				GameCore.Screen = Wt, GameCore.Screens = {
					Events: zt
				};
				var Kt = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).events = void 0, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.boot = function() {
							this.events = new Ht, this.registryScreenFactory()
						}, n.get = function(e) {
							var t = this.scene.children.getByName(e);
							return null === t ? null : t
						}, n.add = function(e, t, n, i) {
							var a = this.get(e);
							return a || (a = this.scene.add.screen(e, t, n, i), this.events.emit(GameCore.Screens.Events.CREATED, a), a)
						}, n.open = function(e, t) {
							var n = this.get(e);
							return !!n && (n.open(t), n.emit(GameCore.Screens.Events.OPEN, n), this.events.emit(GameCore.Screens.Events.OPEN, n), console.log("Screen open", e, t), !0)
						}, n.close = function(e) {
							var t = this.get(e);
							return !!t && (t.close(), t.emit(GameCore.Screens.Events.CLOSE, t), this.events.emit(GameCore.Screens.Events.CLOSE, t), console.log("Screen close", e), !0)
						}, n.bringToTop = function(e) {
							var t = this.scene.children.getByName(e);
							t && this.scene.children.bringToTop(t)
						}, n.registryScreenFactory = function() {
							Phaser.GameObjects.GameObjectFactory.register("screen", this.createScreen)
						}, n.createScreen = function(e, t, n, i) {
							var a = new t(this.scene, e, n, i);
							return Phaser.Display.Align.In.Center(a, this.scene.gameZone), this.existing(a), a
						}, t
					}(Phaser.Plugins.ScenePlugin),
					jt = Kt,
					Xt = n(385),
					qt = n.n(Xt),
					Qt = n(610),
					Jt = n(611),
					$t = n(613),
					en = n(612),
					tn = {
						currentSceneKey: "",
						prevSceneKey: ""
					};
				(0, en.pV)();
				var nn, an, rn, sn, on, cn, un, ln, hn, dn = {
						processed: !1,
						contextId: "",
						contextType: "SOLO",
						entryPointData: {},
						currentGameMode: ""
					},
					pn = dn,
					fn = {
						data: {}
					},
					mn = {
						token: "",
						isRequesting: !1
					},
					gn = (nn = {}, nn[W] = function(e, t) {
						return void 0 === e && (e = mn), (0, en.ZP)(e, (function(e) {
							var n = t.payload;
							if (n) {
								var i = n.token;
								switch (t.type) {
									case U:
										e.isRequesting = !0;
										break;
									case H:
										e.token = i, e.isRequesting = !1
								}
							}
						}))
					}, nn),
					vn = n(600),
					yn = {
						ASID: "",
						playerId: "",
						name: "",
						photo: "",
						locale: "",
						connectedPlayers: {},
						data: {
							score: 0,
							settings: he,
							userGuideDisplays: 0,
							customFields: {}
						},
						isUserNew: !0
					},
					Sn = (an = {}, an[Ge] = function(e, t) {
						return void 0 === e && (e = yn), (0, en.ZP)(e, (function(n) {
							var i = t.payload;
							if (i) {
								var a = i.name,
									r = i.value,
									s = i.data,
									o = void 0 === s ? {} : s,
									c = i.score,
									u = i.connectedPlayers,
									l = void 0 === u ? [] : u,
									h = i.profile;
								switch (t.type) {
									case xe:
										var d = i.playerId,
											p = i.name,
											f = i.photo,
											m = i.locale,
											g = i.data;
										if (n.playerId = d, n.name = p, n.photo = f, n.locale = m, GameCore.Utils.Valid.isObject(g)) {
											var v = g;
											n.data = (0, vn.TS)(e.data, v)
										}
										g.userGuideDisplays > 0 && (n.isUserNew = !1);
										break;
									case _e:
										var y = h.playerId,
											S = h.name,
											b = h.photo,
											E = h.locale,
											A = h.ASID;
										n.ASID = A, n.playerId = y, n.name = S, n.photo = b, n.locale = E;
										break;
									case Re:
										n.data.score = c;
										break;
									case Be:
										if (!GameCore.Utils.Object.hasOwn(n.data.settings, a)) break;
										n.data.settings[a] = r;
										break;
									case Oe:
										n.data = (0, vn.TS)(e.data, o), o.userGuideDisplays > 0 && (n.isUserNew = !1);
										break;
									case De:
										if (l.length <= 0) break;
										var w = GameCore.Utils.Object.keyBy(l, "playerId");
										n.connectedPlayers = (0, vn.TS)(e.connectedPlayers, w)
								}
							}
						}))
					}, an),
					bn = n(542),
					En = n.n(bn),
					An = {
						data: {},
						profileIds: []
					},
					wn = (rn = {}, rn[wt] = function(e, t) {
						return void 0 === e && (e = An), (0, en.ZP)(e, (function(n) {
							var i = t.payload;
							if (i) {
								var a = i.data,
									s = void 0 === a ? [] : a;
								if (t.type === At) {
									var o, c, u = GameCore.Utils.Object.keyBy(s, "playerId"),
										l = J()(u);
									n.data = (0, vn.TS)((0, r.Z)({}, e.data), u), n.profileIds = y()(o = []).call(o, new(En())(y()(c = []).call(c, e.profileIds, l)))
								}
							}
						}))
					}, rn),
					Tn = "match",
					Cn = "MATCH_GAMEPLAY_INITIALIZE",
					Pn = "MATCH_GAMEPLAY_START",
					In = "MATCH_GAMEPLAY_FINISH",
					kn = "MATCH_GAMEPLAY_UPDATE",
					xn = "MATCH_GAMEPLAY_RESCUE",
					On = "MATCH_STATS_DATA_CLEAR",
					Rn = "MATCH_STATS_DATA_UPDATE",
					_n = "MATCH_STATS_CURRENT_UPDATE",
					Bn = "MATCH_SINGLE_CREATE_REQUEST",
					Dn = "MATCH_SINGLE_DETAIL_REQUEST",
					Nn = "MATCH_SINGLE_MOVE_UPDATED",
					Mn = "MATCH_SINGLE_DATA_RECEIVED",
					Ln = "MATCH_SINGLE_DATA_CLEAR",
					Fn = "MATCH_CHALLENGE_JOIN_REQUEST",
					Gn = "MATCH_CHALLENGE_CREATE_REQUEST",
					Zn = "MATCH_CHALLENGE_FINISH_REQUEST",
					Un = "MATCH_CHALLENGE_CONTINUE_REQUEST",
					Hn = "MATCH_CHALLENGE_DATA_RECEIVED",
					Vn = "MATCH_CHALLENGE_DATA_CLEAR",
					Yn = "MATCH_GROUP_CREATE_REQUEST",
					Wn = "MATCH_GROUP_FINISH_REQUEST",
					zn = "MATCH_ONLINE_CREATE_REQUEST",
					Kn = "MATCH_ONLINE_DATA_RECEIVED",
					jn = "open",
					Xn = "active",
					qn = "finished",
					Qn = {
						mode: "",
						status: jn,
						rescued: 0,
						startAt: 0,
						finishAt: 0
					},
					Jn = {
						single: {
							_id: "",
							data: {
								fen: ""
							},
							playerId: "",
							status: jn
						},
						group: {
							status: jn,
							opponentInfo: {
								playerId: "",
								name: "",
								photo: ""
							}
						},
						challenge: {
							_id: "",
							status: jn,
							whitePlayerId: "",
							blackPlayerId: "",
							opponentInfo: {
								playerId: "",
								name: "",
								photo: ""
							}
						},
						online: {
							_id: "",
							status: jn,
							players: {}
						},
						updateAt: 0,
						isRequesting: !1
					},
					$n = {
						current: {
							updateAt: 0
						},
						data: {
							updateAt: 0
						},
						isRequesting: !1
					},
					ei = ((sn = {})[Tn] = (0, Qt.UY)({
						gameplay: function(e, t) {
							return void 0 === e && (e = Qn), (0, en.ZP)(e, (function(n) {
								var i = t.payload;
								if (i) {
									var a = i.mode,
										r = i.status;
									switch (t.type) {
										case Cn:
											n.status = jn, n.mode = Qn.mode, n.rescued = Qn.rescued, n.startAt = Qn.startAt, n.finishAt = Qn.finishAt, n.opponentInfo = Qn.opponentInfo;
											break;
										case Pn:
											n.mode = a, n.status = Xn, n.rescued = Qn.rescued, n.startAt = Date.now();
											break;
										case kn:
											n.mode = "string" === typeof a ? a : e.mode, n.status = r || e.status;
											break;
										case In:
											n.status = qn, n.finishAt = Date.now();
											break;
										case xn:
											n.rescued += 1
									}
								}
							}))
						},
						match: function(e, t) {
							return void 0 === e && (e = Jn), (0, en.ZP)(e, (function(n) {
								var i = t.payload;
								if (i) {
									var a = i.match,
										s = i.opponentInfo,
										o = i.players;
									switch (t.type) {
										case Bn:
										case Dn:
										case Fn:
										case Zn:
										case zn:
											n.isRequesting = !0;
											break;
										case Nn:
											n.single = (0, r.Z)({}, e.single, a), n.updateAt = Date.now();
											break;
										case Mn:
											n.isRequesting = !1, n.single = a || Jn.single;
											break;
										case Ln:
											n.isRequesting = !1, n.single = Jn.single;
											break;
										case Gn:
										case Un:
											n.isRequesting = !0, n.challenge.opponentInfo = s;
											break;
										case Hn:
											n.isRequesting = !1, n.challenge = (0, r.Z)({}, a || Jn.challenge), n.challenge.opponentInfo = e.challenge.opponentInfo;
											break;
										case Vn:
											n.isRequesting = !1, n.challenge = Jn.challenge;
											break;
										case Yn:
											n.group.status = Xn, s && (n.group.opponentInfo = s);
											break;
										case Wn:
											n.group.status = qn;
											break;
										case "MATCH_ONLINE_DATA_CLEAR":
											n.online.status = Jn.online.status, n.online.players = Jn.online.players;
											break;
										case Kn:
											n.online.status = Xn, n.online.players = o;
											break;
										case "MATCH_ONLINE_FINISH_REQUEST":
											n.online.status = qn
									}
								}
							}))
						},
						stats: function(e, t) {
							return void 0 === e && (e = $n), (0, en.ZP)(e, (function(n) {
								var i = t.payload;
								if (i) {
									var a = i.playerId,
										s = i.stats,
										o = i.match,
										c = i.current,
										u = i.players,
										l = i.leaders;
									switch (t.type) {
										case On:
											delete n.data[a], n.current = $n.current;
											break;
										case "MATCH_STATS_CONTEXT_REQUEST":
											n.data = $n.data, n.isRequesting = !0;
											break;
										case "MATCH_STATS_CONTEXT_RECEIVED":
											n.data = s, n.isRequesting = !1;
											break;
										case Rn:
											n.data[a] = s;
											break;
										case _n:
											n.current = (0, vn.TS)((0, r.Z)({}, e.current), s);
											break;
										case Kn:
											J()(u).forEach((function(e) {
												n.data[e] = {
													score: 0
												}
											}));
											break;
										case "MATCH_ONLINE_STATS_UPDATE":
											l.forEach((function(e) {
												var t = e.playerId,
													i = e.score,
													a = e.rank;
												n.data[t] = {
													score: i,
													rank: a
												}
											}));
											break;
										case Hn:
											var h = o || {},
												d = h.blackPlayerId,
												p = h.blackPlayerScore,
												f = h.whitePlayerId,
												m = h.whitePlayerScore,
												g = h.whitePlayerLevel,
												v = h.blackPlayerLevel;
											if (!d || !f) break;
											c && (n.current = c), n.data[d] = {
												score: p,
												level: v
											}, n.data[f] = {
												score: m,
												level: g
											}
									}
								}
							}))
						}
					}), sn),
					ti = "TOURNAMENT_ACTIVE",
					ni = "TOURNAMENT_REQUEST",
					ii = "TOURNAMENT_RECEIVED",
					ai = {
						active: !1,
						tournamentId: null,
						bestSessionScore: 0,
						isRequesting: !1
					},
					ri = ((on = {}).tournament = function(e, t) {
						return void 0 === e && (e = ai), (0, en.ZP)(e, (function(n) {
							var i = t.payload;
							if (i) {
								var a = i.score,
									r = void 0 === a ? 0 : a,
									s = i.tournamentId;
								switch (t.type) {
									case ti:
										n.active = !0, n.tournamentId = s;
										break;
									case ni:
										n.isRequesting = !0;
										break;
									case ii:
										n.isRequesting = !1, r > e.bestSessionScore && (n.bestSessionScore = r)
								}
							}
						}))
					}, on),
					si = "leaderboards",
					oi = n(183),
					ci = n.n(oi),
					ui = n(103),
					li = n.n(ui),
					hi = "LEADERBOARD_DATA_REQUEST",
					di = "LEADERBOARD_DATA_UPDATE",
					pi = "LEADERBOARD_DATA_CLEAR",
					fi = {
						leaderboardId: "",
						type: "",
						limit: 0,
						offset: 0,
						leaders: {},
						isRequesting: !1
					},
					mi = ((cn = {})[si] = function(e, t) {
						return void 0 === e && (e = fi), (0, en.ZP)(e, (function(n) {
							var i = t.payload;
							if (i) {
								var a = i.leaderboardId,
									s = i.type,
									o = i.limit,
									c = i.offset,
									u = i.leaders;
								switch (t.type) {
									case hi:
										e.type !== s && 0 === c && (n.leaders = fi.leaders), n.isRequesting = !0, n.leaderboardId = a, n.type = s, n.limit = o, n.offset = c;
										break;
									case di:
										if (n.isRequesting = !1, e.type !== s) break;
										var l = GameCore.Utils.Json.clone((0, r.Z)({}, e.leaders, u)),
											h = ci()(l),
											d = pe()(h).call(h, (function(e) {
												return !!e.name && !!e.photo
											}));
										li()(d).call(d, (function(e, t) {
											return +t.score - +e.score
										})), d.forEach((function(t, i) {
											t.rank = i + 1, e.leaders[t.playerId] || (n.leaders[t.playerId] = t)
										}));
										break;
									case pi:
										n.isRequesting = !1, n.type = fi.type, n.limit = fi.limit, n.offset = fi.offset, n.leaders = fi.leaders, n.leaderboardId = fi.leaderboardId
								}
							}
						}))
					}, cn),
					gi = "missions",
					vi = "MISSIONS_DATA_REQUEST",
					yi = "MISSIONS_DATA_RECEIVE",
					Si = "MISSION_UPDATE",
					bi = "MISSION_COMPLETED",
					Ei = {
						mission: null,
						missions: null,
						isRequesting: !1
					},
					Ai = ((un = {})[gi] = function(e, t) {
						return void 0 === e && (e = Ei), (0, en.ZP)(e, (function(n) {
							var i, a, r = t.payload;
							if (r) {
								var s = r.name,
									o = r.type,
									c = r.value,
									u = r.missions;
								switch (t.type) {
									case vi:
										n.isRequesting = !0;
										break;
									case yi:
										if (n.isRequesting = !1, u.length < 1) return;
										n.missions = {}, u.forEach((function(e) {
											n.missions[e.name] = e
										}));
										break;
									case "MISSION_START":
										if (null === e.missions) break;
										var l = e.missions[s];
										n.mission = {
											name: s,
											process: {},
											require: l.require,
											reward: l.reward
										}, J()(l.require).forEach((function(e) {
											n.mission.process[e] = 0
										}));
										break;
									case Si:
										if ((null == (i = e.mission) ? void 0 : i.name) !== s) break;
										n.mission.process[o] += c;
										break;
									case bi:
										if ((null == (a = e.mission) ? void 0 : a.name) !== s) break;
										n.mission = null
								}
							}
						}))
					}, un),
					wi = "dailyTasks",
					Ti = "DAILY_TASKS_DATA_REQUEST",
					Ci = "DAILY_TASKS_DATA_RECEIVE",
					Pi = "DAILY_TASKS_PROCESS_UPDATE",
					Ii = "DAILY_TASK_VALUE_ADD",
					ki = "DAILY_TASK_FINISHED",
					xi = {
						tasks: [],
						process: [],
						isRequesting: !1,
						isNotice: !1
					},
					Oi = ((ln = {})[wi] = function(e, t) {
						return void 0 === e && (e = xi), (0, en.ZP)(e, (function(n) {
							var i = t.payload;
							if (i) {
								var a = i.id,
									r = i.type,
									s = i.value,
									o = i.tasks,
									c = i.process;
								switch (t.type) {
									case Ti:
										n.isRequesting = !0;
										break;
									case Ci:
										n.isRequesting = !1, n.tasks = o;
										break;
									case Pi:
										n.process = c;
										break;
									case Ii:
										if (!e.process[a]) break;
										n.process[a][r] += s;
										break;
									case "DAILY_TASK_REWARDED":
										if (!e.process[a]) break;
										n.process[a].rewarded = !0;
										break;
									case "DAILY_TASKS_SEEN":
										n.isNotice = !1;
										break;
									case ki:
										n.isNotice = !0
								}
							}
						}))
					}, ln),
					Ri = {
						rewards: [],
						isRequesting: !1
					},
					_i = ((hn = {}).dailyRewards = function(e, t) {
						return void 0 === e && (e = Ri), (0, en.ZP)(e, (function(e) {
							var n = t.payload;
							if (n) {
								var i = n.rewards;
								switch (t.type) {
									case "DAILY_REWARDS_REQUEST":
										e.isRequesting = !0;
										break;
									case "DAILY_REWARDS_RECEIVE":
										e.isRequesting = !1, e.rewards = i
								}
							}
						}))
					}, hn),
					Bi = (0, Qt.UY)((0, r.Z)({
						scene: function(e, t) {
							return void 0 === e && (e = tn), (0, en.ZP)(e, (function(n) {
								var i = t.payload;
								if (i) {
									var a = i.sceneKey;
									if (t.type === $t.DW) n.currentSceneKey = a, n.prevSceneKey = e.currentSceneKey
								}
							}))
						},
						context: function(e, t) {
							return void 0 === e && (e = dn), (0, en.ZP)(e, (function(e) {
								var n = t.payload;
								if (n) {
									var i = n.gameMode,
										a = n.contextId,
										r = n.contextType,
										s = n.entryPointData;
									switch (t.type) {
										case $t.kL:
											e.contextId = a, e.contextType = r, e.entryPointData = s;
											break;
										case $t.fJ:
											e.contextId = a, e.contextType = r, e.processed = !0;
											break;
										case $t.EH:
											e.currentGameMode = i
									}
								}
							}))
						},
						messages: function(e, t) {
							return void 0 === e && (e = fn), (0, en.ZP)(e, (function(n) {
								var i = t.payload;
								if (i) {
									var a = i.opponentId;
									if ("string" === typeof a) switch (t.type) {
										case $t.qj:
											e.data[a] ? n.data[a].sent = !0 : n.data[a] = {
												sent: !0
											};
											break;
										case $t.rh:
											e.data[a] ? n.data[a].sent = !1 : n.data[a] = {
												sent: !1
											}
									}
								}
							}))
						}
					}, gn, Sn, wn, ei, ri, mi, Ai, Oi, _i)),
					Di = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					Ni = Qt.qC,
					Mi = function(e) {
						Di && (Ni = Di({
							trace: !0,
							traceLimit: 25
						}) || Qt.qC);
						var t = Ni((0, Qt.md)(Jt.Z));
						return (0, Qt.MT)(Bi, e, t)
					},
					Li = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).store = void 0, n.initiator = void 0, n.dispatch = function(e) {
								return n.store.dispatch(e)
							}, n.getState = function() {
								return n.store.getState()
							}, n.subscribe = function(e) {
								return n.store.subscribe(e)
							}, n.watch = function(e, t) {
								var i = qt()((function() {
									var t = n.getState();
									return e(t)
								}));
								return n.subscribe(i((function(e) {
									t(e)
								})))
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.store = Mi({})
						}, n.setInitiator = function(e) {
							this.initiator = e
						}, n.syncStore = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.initiator.initContext(), e.next = 3, this.initiator.initPlayer();
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t
					}(Phaser.Plugins.BasePlugin),
					Fi = Li,
					Gi = n(583),
					Zi = n.n(Gi),
					Ui = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, {
								type: "webfont",
								key: n.type
							}) || this).payload = void 0, i.payload = n, i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.load = function() {
							var e;
							switch (this.payload.type) {
								case "google":
									e = this.getGoogleFontConfig(this.payload);
									break;
								case "local":
									e = this.getLocalFontConfig(this.payload)
							}
							Zi().load(e)
						}, n.getGoogleFontConfig = function(e) {
							var t = this,
								n = e.character,
								i = e.fontName,
								a = e.fontWeight;
							return {
								google: {
									families: [i + ":" + (void 0 === a ? 400 : a)],
									text: n
								},
								active: function() {
									t.loader.nextFile(t, !0)
								},
								timeout: 15e3
							}
						}, n.getLocalFontConfig = function(e) {
							var t = this,
								n = e.fontName,
								i = e.fontType,
								a = document.createElement("style");
							document.head.appendChild(a);
							var r = a.sheet;
							if (r) {
								var s = '@font-face { font-family: "' + n + '"; src: url("assets/fonts/' + n + ("opentype" === i ? ".otf" : ".ttf") + '") format("' + i + '"); }';
								r.insertRule(s, 0)
							}
							return {
								custom: {
									families: [n]
								},
								active: function() {
									t.loader.nextFile(t, !0)
								},
								timeout: 15e3
							}
						}, t
					}(Phaser.Loader.File),
					Hi = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return (0, o.Z)(t, e), t.prototype.addFont = function(e) {
							var t = new Ui(this.scene.load, e);
							this.scene.load.addFile(t)
						}, t
					}(Phaser.Plugins.ScenePlugin),
					Vi = Hi,
					Yi = n(601),
					Wi = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).portraitRatio = void 0, n.portraitWidth = void 0, n.portraitHeight = void 0, n.landscapeRatio = void 0, n.landscapeWidth = void 0, n.landscapeHeight = void 0, n.worldWidth = void 0, n.worldHeight = void 0, n.worldRatio = void 0, n.autoResize = void 0, n.disableLandscape = void 0, n.fullSizeOnLandscape = void 0, n.forcePixelRatio = void 0, n.handleResize = (0, Yi.D)((function() {
								n.resize()
							}), 300), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.configure = function(e) {
							var t = e.autoResize,
								n = e.portraitRatio,
								i = e.portraitWidth,
								a = e.portraitHeight,
								r = e.landscapeWidth,
								s = e.landscapeHeight,
								o = e.landscapeRatio,
								c = e.disableLandscape,
								u = e.fullSizeOnLandscape;
							this.autoResize = t, this.disableLandscape = c, this.fullSizeOnLandscape = u, this.portraitRatio = n, this.portraitWidth = i, this.portraitHeight = a, this.landscapeRatio = o, this.landscapeWidth = r, this.landscapeHeight = s, this.initWorldSize(), this.addEventResize()
						}, n.resize = function(e) {
							var t = this;
							e && e > 0 && (this.forcePixelRatio = e);
							var n = this.getCanvasSizeFixedRatio(this.worldRatio),
								i = n.width,
								a = n.height;
							this.resizeCanvas(i, a), this.game.scene.scenes.forEach((function(e) {
								var n = e.cameras.main;
								if (n) {
									var i = t.getZoomRatio(),
										a = t.getWorldSize(),
										r = a.width,
										s = a.height;
									n.setZoom(i), n.centerOn(r / 2, s / 2)
								}
							}))
						}, n.resizeCanvas = function(e, t) {
							this.game.canvas.width = e, this.game.canvas.height = t, this.game.scale.resize(e, t)
						}, n.getWorldSize = function() {
							return {
								width: this.worldWidth,
								height: this.worldHeight
							}
						}, n.initWorldSize = function() {
							if (this.worldWidth = this.portraitWidth, this.worldHeight = this.portraitHeight, this.isScreenSmallerRatio(this.portraitRatio)) this.worldHeight = this.worldWidth / this.getScreenRatio();
							else if (!this.disableLandscape && (this.worldWidth = this.landscapeWidth, this.worldHeight = this.landscapeHeight, this.fullSizeOnLandscape)) {
								this.worldRatio = this.worldWidth / this.worldHeight, this.landscapeRatio = this.getScreenRatio();
								var e = this.getCanvasSizeFixedRatio(this.landscapeRatio),
									t = e.width,
									n = e.height,
									i = this.getZoomRatio();
								this.worldWidth = t / i, this.worldHeight = n / i
							}
							this.worldRatio = this.worldWidth / this.worldHeight, console.info("\ud83d\ude80 > this.worldRatio", this.worldRatio)
						}, n.getZoomRatio = function() {
							var e = this.getWorldSize().width;
							return this.getCanvasSizeFixedRatio(this.worldRatio).width / e
						}, n.getPixelRatio = function() {
							if (this.forcePixelRatio > 0) return this.forcePixelRatio;
							if (GameCore.Utils.Device.isDesktop()) return 2;
							var e = GameCore.Utils.Device.pixelRatio();
							return e > 2 && (e = 2), e
						}, n.getPhysicPixels = function(e, t) {
							return e * t
						}, n.getCanvasSizeFixedRatio = function(e) {
							var t = this.getPixelRatio(),
								n = this.getScreenWidth() * t,
								i = this.getScreenHeight() * t;
							return this.isScreenSmallerRatio(e) ? i = n / e : n = i * e, {
								width: n,
								height: i
							}
						}, n.getScreenRatio = function() {
							return this.getScreenWidth() / this.getScreenHeight()
						}, n.getScreenHeight = function() {
							var e = document,
								t = e.body,
								n = e.documentElement,
								i = t.clientHeight,
								a = n.clientHeight;
							return Math.max(a, i) || 0
						}, n.getScreenWidth = function() {
							var e = document,
								t = e.body,
								n = e.documentElement,
								i = t.clientWidth,
								a = n.clientWidth;
							return Math.max(a, i) || 0
						}, n.isScreenSmallerRatio = function(e) {
							return this.getScreenRatio() < e
						}, n.addEventResize = function() {
							this.autoResize && window.addEventListener("resize", this.handleResize)
						}, n.isLandscape = function() {
							return !this.disableLandscape && this.worldRatio > this.portraitRatio
						}, t
					}(Phaser.Plugins.BasePlugin),
					zi = Wi,
					Ki = function() {
						function e(e, t, n) {
							this.contextId = void 0, this.contextType = void 0, this.entryPointData = void 0, this.contextId = e || pn.contextId, this.contextType = t || pn.contextType, this.entryPointData = n || pn.entryPointData
						}
						return e.prototype.toObject = function() {
							return {
								contextId: this.contextId,
								contextType: this.contextType,
								entryPointData: this.entryPointData
							}
						}, e
					}(),
					ji = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidPlayerId", i.message = t || "The playerId is not valid", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					Xi = "share_invite",
					qi = "tournament",
					Qi = "challenge_friend_match",
					Ji = "matching_group_match",
					$i = n(607),
					ea = new Ne.Z("10", "Your Friend", $i.Z.AVATAR.FILE).toObject(),
					ta = "single",
					na = "challenge-friends",
					ia = "matching-group",
					aa = "tournaments",
					ra = (0, Y.P1)([function(e) {
						return e.context
					}], (function(e) {
						return e
					})),
					sa = (0, Y.P1)([function(e) {
						return e.context.currentGameMode
					}], (function(e) {
						return e
					})),
					oa = function(e, t) {
						return {
							type: $t.fJ,
							payload: {
								contextId: e,
								contextType: t
							}
						}
					},
					ca = function(e) {
						return function(t) {
							t({
								type: $t.EH,
								payload: {
									gameMode: e
								}
							}), (0, i.sw)("game-mode", e)
						}
					},
					ua = {
						score: "score",
						settings: "settings",
						gameData: "gameData",
						userGuideDisplays: "userGuideDisplays"
					},
					la = GameCore.Configs.SyncProfileFromAPI,
					ha = function(e) {
						var t = this;
						this.game = void 0, this.initContext = function() {
							var e = window.GameSDK.context.getID(),
								n = window.GameSDK.context.getType(),
								i = window.GameSDK.getEntryPointData(),
								a = new Ki(e, n, i).toObject(),
								r = a.contextId,
								s = a.contextType,
								o = a.entryPointData;
							t.game.storage.dispatch(function(e, t, n) {
								return {
									type: $t.kL,
									payload: {
										contextId: e,
										contextType: t,
										entryPointData: n
									}
								}
							}(r, s, o))
						}, this.initPlayer = (0, s.Z)(u().mark((function e() {
							var n, i, a, r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = t.game.player, i = t.getPlayerInfo(), a = ci()(ua), e.next = 5, FBInstant.player.getDataAsync(a);
									case 5:
										return r = e.sent, console.info("\ud83d\ude80 > rawData", r), s = new Pe(r), console.info("\ud83d\ude80 > playerData", s), e.next = 11, t.maintainDataStructure(s);
									case 11:
										return s = e.sent, !0 === s.toObject().settings.music && window.game.audio.playMusic(), e.next = 16, n.receiveData(i, s.convertToPlayerData());
									case 16:
									case "end":
										return e.stop()
								}
							}), e)
						}))), this.maintainDataStructure = function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n, i, a, s;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (e.prev = 0, la) {
												e.next = 3;
												break
											}
											return e.abrupt("return", t);
										case 3:
											return e.next = 5, FBInstant.player.getDataAsync(["isSynced", "customFields"]);
										case 5:
											if (e.t0 = e.sent, e.t0) {
												e.next = 8;
												break
											}
											e.t0 = {};
										case 8:
											if (n = e.t0, !0 !== (n.isSynced || !1)) {
												e.next = 12;
												break
											}
											return e.abrupt("return", t);
										case 12:
											if (i = n.customFields || !1) {
												e.next = 15;
												break
											}
											return e.abrupt("return", t);
										case 15:
											return (a = t.convertToPlayerData()).customFields = i, s = new Pe({}).convertToFacebookData(a), e.next = 20, FBInstant.player.setDataAsync((0, r.Z)({}, s, {
												isSynced: !0
											}));
										case 20:
											return e.abrupt("return", new Pe(s));
										case 23:
											return e.prev = 23, e.t1 = e.catch(0), console.warn(e.t1), e.abrupt("return", t);
										case 27:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 23]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), this.getPlayerInfo = function() {
							try {
								var e = window.GameSDK.player.getID(),
									t = window.GameSDK.player.getName(),
									n = window.GameSDK.player.getPhoto(),
									i = window.GameSDK.getLocale();
								if (!GameCore.Utils.Valid.isString(e)) throw new ji(null, {
									playerId: e
								});
								return GameCore.Utils.Valid.isString(t) || (t = "You"), new Ne.Z(e, t, n, i).toObject()
							} catch (a) {
								return new Ne.Z("123", "You").toObject()
							}
						}, this.game = e
					},
					da = n(615),
					pa = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).Text = void 0, n.Texture = void 0, n.currentLocale = void 0, n.supportedLanguages = void 0, n.data = void 0, n.options = void 0, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.configure = function(e) {
							this.applyOptions(e)
						}, n.getCurrentLanguage = function() {
							return this.currentLocale
						}, n.switchLanguage = function(e) {
							void 0 === e && (e = "en");
							var t = this.getCorrectLocale(e);
							this.currentLocale = t, this.Text = this.data[t].Text, this.Texture = this.data[t].Texture
						}, n.getText = function(e) {
							if ("object" == typeof e) {
								var t = e.key,
									n = e.variables,
									i = void 0 === n ? [] : n,
									a = e.locale,
									r = void 0 === a ? this.currentLocale : a,
									s = this.getCorrectLocale(r),
									o = this.data[s].Text[t];
								return this.replaceVariables(o, i)
							}
							return this.Text[e]
						}, n.getTexture = function(e) {
							if ("object" == typeof e) {
								var t = e.key,
									n = e.variables,
									i = void 0 === n ? [] : n,
									a = e.locale,
									r = void 0 === a ? this.currentLocale : a,
									s = this.getCorrectLocale(r),
									o = this.data[s].Texture[t];
								return this.replaceVariables(o, i)
							}
							return this.Texture[e]
						}, n.isSupportLanguage = function(e) {
							var t;
							return Ot()(t = this.supportedLanguages).call(t, e) >= 0
						}, n.applyOptions = function(e) {
							this.options = (0, r.Z)({}, e);
							var t = e.data,
								n = e.locale,
								i = void 0 === n ? "en" : n,
								a = e.upperCaseText,
								s = void 0 !== a && a;
							this.data = t, this.supportedLanguages = J()(t);
							var o = this.getCorrectLocale(i);
							if (this.currentLocale = o, this.Text = t[o].Text, this.Texture = t[o].Texture, s)
								for (var c in this.Text) this.Text[c] = this.Text[c].toUpperCase()
						}, n.replaceVariables = function(e, t) {
							var n = t.length;
							if (0 == n) return e;
							var i = 0;
							return e.replace(/{.*}/, (function() {
								return String(t[Math.min(i++, n - 1)])
							}))
						}, n.getCorrectLocale = function(e) {
							var t = e;
							return this.isSupportLanguage(e) || (t = "en"), t
						}, t
					}(Phaser.Plugins.BasePlugin),
					fa = {
						en: JSON.parse('{"Text":{"empty_{X}":"empty_{X}"},"Texture":{"empty_2_{abc}":"empty_2_{abc}"}}')
					},
					ma = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return (0, o.Z)(t, e), t.prototype.configure = function(t) {
							e.prototype.configure.call(this, (0, r.Z)({
								data: fa,
								locale: "en",
								upperCaseText: !1
							}, t))
						}, t
					}(pa),
					ga = ma,
					va = [Vt._.SCREEN_OPEN],
					ya = function(e) {
						function t(t, n) {
							var i;
							(i = e.call(this, "GoogleAnalytics", (0, r.Z)({}, n), "#E35335") || this).game = void 0, i.trackingId = void 0, i.currentPath = "/";
							var a = n.trackingId;
							i.game = t;
							var s = (GameCore.Configs.Analytics.GoogleAnalytics || {}).consoleLog;
							return i.selfLog = !!s, i.trackingId = a, i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.processEvent = function(e, t, n) {
							if (!(Ot()(va).call(va, e) >= 0)) {
								var i = this.formatEventName(e),
									a = t ? (0, r.Z)({}, t) : {};
								a = n ? (0, r.Z)({}, a, {
									value: n
								}) : a, a = (0, r.Z)({}, a, {
									page_path: this.currentPath,
									send_to: "GA"
								}), gtag("event", i, a)
							}
						}, n.processLevelStart = function(e, t, n) {
							this.processEvent(Vt._.LEVEL_START, {
								level: e,
								score: t,
								level_name: n
							})
						}, n.processLevelRescue = function(e, t, n) {
							this.processEvent(Vt._.LEVEL_RESCUE, {
								level: e,
								score: t,
								level_name: n
							})
						}, n.processLevelFail = function(e, t, n) {
							this.processEvent(Vt._.LEVEL_END, {
								level: e,
								score: t,
								level_name: n,
								success: !1
							})
						}, n.processLevelComplete = function(e, t, n) {
							this.processEvent(Vt._.LEVEL_END, {
								level: e,
								score: t,
								level_name: n,
								success: !0
							})
						}, n.processShowInterstitialAd = function(e) {
							this.processEvent(Vt._.AD_SHOW, {
								ad_type: "interstitial",
								screen_name: "" + e
							}), this.processEvent(Vt._.AD_IMPRESSION, {
								ad_format: "Interstitial"
							})
						}, n.processShowRewardedVideoAd = function(e) {
							this.processEvent(Vt._.AD_SHOW, {
								ad_type: "rewarded_video",
								screen_name: "" + e
							}), this.processEvent(Vt._.AD_IMPRESSION, {
								ad_format: "Rewarded"
							})
						}, n.processShowAdFail = function(e, t) {
							var n = e === GameCore.Ads.Types.REWARDED ? "rewarded_video" : "interstitial";
							this.processEvent(Vt._.AD_SHOW_FAILED, {
								ad_type: n,
								screen_name: "" + t
							})
						}, n.processPageView = function(e) {
							var t = "/" + this.getGameplayMode() + "/" + e;
							this.currentPath = t, gtag("event", "page_view", {
								page_path: this.currentPath,
								send_to: ["GA", this.trackingId]
							})
						}, n.getGameplayMode = function() {
							var e = this.game.storage.getState();
							return sa(e)
						}, n.formatEventName = function(e) {
							return e.toLowerCase().replace(/:/g, "_")
						}, n.formatPageTitle = function(e, t) {
							return this.toUpperCamelCaseWithSpace(e) + "::" + this.toUpperCamelCaseWithSpace(t)
						}, n.toUpperCamelCaseWithSpace = function(e) {
							var t = e.replace(/[-_\s.]+(.)?/g, (function(e, t) {
								return t ? " " + t.toUpperCase() : ""
							}));
							return t.substr(0, 1).toUpperCase() + t.substr(1)
						}, t
					}(GameCore.Analytics.BaseAnalytics),
					Sa = ya,
					ba = "G-591XHJ2XDW",
					Ea = "UA-261518513-13",
					Aa = function(e) {
						function t() {
							for (var t, n, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
							return (n = e.call.apply(e, y()(t = [this]).call(t, r)) || this).startGame = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, n.auth.requestToken();
										case 3:
											return e.next = 5, n.storage.syncStore();
										case 5:
											n.configureSentry(), n.configureRollbar(), n.detectGameMode(), n.initAnalytics(), n.analytics.event(Vt._.LOAD_START), n.scene.launch(da.C.GLOBAL_SCENE), n.scene.start(da.C.LOAD_SCENE), n.analytics.pageview(da.C.LOAD_SCENE), e.next = 18;
											break;
										case 15:
											e.prev = 15, e.t0 = e.catch(0), (0, i.tO)(e.t0);
										case 18:
											return e.prev = 18, n.facebook.progressLoading.finishLoadingProgressFbBootScene(), n.scene.sleep(da.C.BOOT_SCENE), e.finish(18);
										case 22:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 15, 18, 22]
								])
							}))), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.create = function() {
							this.facebook.progressLoading.loadingProgressFbBootScene(), this.startGame(), this.ads.showBannerAdAsync({
								position: "right"
							}).catch((function(e) {
								console.warn(e)
							}))
						}, n.configureSentry = function() {
							var e = this.player.getPlayer();
							(0, i.Tv)({
								id: e.playerId,
								username: e.name
							})
						}, n.configureRollbar = function() {
							if (this.rollbar) {
								var e = this.player.getPlayer();
								this.rollbar.configure({
									payload: {
										person: {
											id: e.playerId,
											name: e.name
										}
									}
								})
							}
						}, n.detectGameMode = function() {
							this.storage.dispatch((function(e, t) {
								var n, i = t(),
									a = ra(i),
									r = window.game.player.getPlayerId(),
									s = a.contextId,
									o = a.entryPointData || {},
									c = o.type,
									u = o.matchId,
									l = o.playerId,
									h = o.opponentId,
									d = void 0 === h ? ea.playerId : h,
									p = o.tournamentContextId,
									f = r === l,
									m = d === ea.playerId || Ot()(n = [d, l]).call(n, r) >= 0,
									g = ta;
								!s || void 0 !== c && c !== qi || (g = aa), c === qi && p && (g = aa), s && c === Xi && !f && (g = na), u && s && m && c === Qi && (g = na), s && c === Ji && (g = ia), e(ca(g))
							}))
						}, n.initAnalytics = function() {
							var e = this.player.getPlayerId();
							this.analytics.add(new Sa(this.game, {
								userId: e,
								trackingId: Ea,
								measuringId: ba,
								version: "2"
							}))
						}, t
					}(Phaser.Scene),
					wa = Aa,
					Ta = "best_score_screen_close",
					Ca = "result_screen_close",
					Pa = "result_replay",
					Ia = "switch-leader-board",
					ka = n(627),
					xa = n(630),
					Oa = n(619),
					Ra = n(617),
					_a = {
						BUTTON_CLICK: "button_click",
						CONGRATULATION: "congratulation",
						DAILY_REWARD: "daily_reward",
						GAME_OVER_SCENE: "game_over_scene",
						GAME_OVER: "game_over",
						POPUP_OFF: "popup_off",
						POPUP_SHOW: "popup_show",
						SCORE_COUNT: "score_count",
						PIECE_PICK: "piece_pick",
						PIECE_DROP: "piece_drop",
						PIECE_INVALID_MOVE: "piece_invalid_move",
						BOARD_GAME_OVER: "board_end",
						BOARD_GAME_START: "board_start",
						RESCUE: "rescue",
						EAT_ONE: "eat_1",
						EAT_TWO: "eat_2",
						EAT_THREE: "eat_3",
						EAT_FOUR: "eat_4",
						EAT_FIVE: "eat_5",
						EAT_SIX: "eat_6",
						GOOD: "good",
						COOL: "cool",
						EXCELLENT: "excellent",
						WAIT_OPPONENT: "wait_opponent",
						WIN: "win",
						LOSE: "lose",
						DRAW: "draw"
					},
					Ba = n(622),
					Da = Oa.Z.EFFECTS,
					Na = Da.KEY,
					Ma = Da.FRAME,
					La = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, Na, Ma.BLANK) || this).config = void 0, i.emitter = void 0, i.config = n || {}, i.scene.add.existing((0, Ba.Z)(i)), i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createEmitters = function() {
							var e = Ma.FX_CONFETTI_SMALL_1,
								t = Ma.FX_CONFETTI_SMALL_2,
								n = Ma.FX_CONFETTI_SMALL_3,
								i = Ma.FX_CONFETTI_SMALL_4,
								a = 1 / this.scene.world.getPixelRatio(),
								r = {
									on: !1,
									particleBringToTop: !0,
									frame: [e, t, n, i],
									tint: [14892386, 2838983, 6146101, 8667376, 13491259],
									timeScale: 1,
									frequency: 300,
									maxParticles: 120,
									gravityY: -10,
									speedX: {
										min: -100,
										max: 100
									},
									speedY: {
										min: 80,
										max: 250
									},
									alpha: {
										start: 1,
										end: .8
									},
									rotate: {
										start: 0,
										end: 1080
									},
									scale: {
										min: .8 * a,
										max: 2 * a
									},
									angle: {
										min: 20,
										max: 160
									},
									lifespan: {
										min: 8e3,
										max: 12e3
									}
								},
								s = (0, vn.TS)(r, this.config);
							this.emitter = this.createEmitter(s)
						}, n.run = function(e, t, n) {
							this.stop(), this.emitter.setQuantity(e), this.emitter.setPosition(t, n), this.emitter.start()
						}, n.explode = function(e, t, n) {
							this.emitter || this.createEmitters(), this.emitter.explode(e, t, n)
						}, n.stop = function() {
							var e, t, n;
							null == (e = this.emitter) || e.killAll(), null == (t = this.emitter) || t.stop(), null == (n = this.emitter) || n.remove(), this.createEmitters()
						}, t
					}(Phaser.GameObjects.Particles.ParticleEmitterManager),
					Fa = La,
					Ga = n(46),
					Za = n.n(Ga),
					Ua = n(55),
					Ha = n.n(Ua),
					Va = n(88),
					Ya = n.n(Va),
					Wa = n(115),
					za = n.n(Wa),
					Ka = "global",
					ja = "friend",
					Xa = GameCore.Configs,
					qa = Xa.ApiHost,
					Qa = Xa.OtherHost,
					Ja = Xa.LeadersBoard,
					$a = Ja.Prefix,
					er = Ja.LeaderboardId,
					tr = Ja.Name,
					nr = $a + "/" + er + "/leaders",
					ir = $a + "/" + er + "/players",
					ar = function(e) {
						var t = "";
						return er ? (e === Ka ? t = nr : e === ja && (t = ir), t) : t
					},
					rr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, s, o, c;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return i = me()(t).call(t, (function(e) {
											return e.playerId
										})), a = GameCore.Utils.Object.keyBy(t, "playerId"), s = GameCore.Utils.String.params({
											playerIds: i
										}), e.next = 5, yt("players?" + s, {}, qa);
									case 5:
										return o = e.sent, c = me()(n = o.data).call(n, (function(e) {
											var t = a[e.playerId];
											return (0, r.Z)({}, e, {
												score: t.score,
												rank: t.rank,
												getScore: function() {
													return t.score
												},
												getFormattedScore: function() {
													return ""
												},
												getTimestamp: function() {
													return (new Date).valueOf()
												},
												getRank: function() {
													return t.rank
												},
												getExtraData: function() {
													return t.extraData
												},
												getPlayer: function() {
													return {
														getName: function() {
															return e.name
														},
														getPhoto: function() {
															return e.photo
														},
														getID: function() {
															return e.playerId
														}
													}
												}
											})
										})), e.abrupt("return", c);
									case 8:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					sr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (void 0 === t && (t = {}), null == er) {
											e.next = 3;
											break
										}
										return e.abrupt("return", or(t));
									case 3:
										return e.abrupt("return", cr(t));
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					or = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (void 0 === t && (t = {}), n = [], i = ar(Ka)) {
											e.next = 5;
											break
										}
										return e.abrupt("return", n);
									case 5:
										return a = GameCore.Utils.String.params(t), e.next = 8, yt(i + "?" + a, {}, Qa);
									case 8:
										if (r = e.sent, !((s = (null == r ? void 0 : r.data) || []).length < 1)) {
											e.next = 12;
											break
										}
										return e.abrupt("return", n);
									case 12:
										return n = s, e.abrupt("return", rr(n));
									case 14:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					cr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return void 0 === t && (t = {}), i = (n = t).limit, a = n.offset, e.next = 4, window.GameSDK.getLeaderboardAsync(tr);
									case 4:
										return r = e.sent, e.next = 7, r.getEntriesAsync(i, a);
									case 7:
										return s = e.sent, e.abrupt("return", s);
									case 9:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					ur = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (void 0 === t && (t = {}), null == er) {
											e.next = 3;
											break
										}
										return e.abrupt("return", lr(t));
									case 3:
										return e.abrupt("return", hr(t));
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					lr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (void 0 === t && (t = {}), n = [], i = ar(ja)) {
											e.next = 5;
											break
										}
										return e.abrupt("return", n);
									case 5:
										return a = GameCore.Utils.String.params(t), e.next = 8, yt(i + "?" + a, {}, Qa);
									case 8:
										if (r = e.sent, !((s = (null == r ? void 0 : r.data) || []).length < 1)) {
											e.next = 12;
											break
										}
										return e.abrupt("return", n);
									case 12:
										return n = s, e.abrupt("return", rr(n));
									case 14:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					hr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return void 0 === t && (t = {}), i = (n = t).limit, a = n.offset, e.next = 4, window.GameSDK.getLeaderboardAsync(tr);
									case 4:
										return r = e.sent, e.next = 7, r.getConnectedPlayerEntriesAsync(i, a);
									case 7:
										return s = e.sent, e.abrupt("return", s);
									case 9:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					dr = (function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (null == er) {
											e.next = 2;
											break
										}
										return e.abrupt("return", dr(t));
									case 2:
										return e.abrupt("return", pr());
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})))
					}(), function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = null, t) {
											e.next = 3;
											break
										}
										return e.abrupt("return", n);
									case 3:
										if (i = ar(ja)) {
											e.next = 6;
											break
										}
										return e.abrupt("return", n);
									case 6:
										return a = GameCore.Utils.String.params({
											playerIds: t
										}), e.next = 9, yt(i + "?" + a, {}, Qa);
									case 9:
										if (r = e.sent, !((s = (null == r ? void 0 : r.data) || []).length < 1)) {
											e.next = 13;
											break
										}
										return e.abrupt("return", n);
									case 13:
										return e.next = 15, rr(s);
									case 15:
										return n = e.sent[0], e.abrupt("return", n);
									case 17:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()),
					pr = function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t, n;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, window.GameSDK.getLeaderboardAsync(tr);
									case 2:
										return t = e.sent, e.next = 5, t.getPlayerEntryAsync();
									case 5:
										return n = e.sent, e.abrupt("return", n);
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					fr = function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (null == er) {
											e.next = 2;
											break
										}
										return e.abrupt("return", mr(t, n));
									case 2:
										return e.abrupt("return", gr(n));
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					mr = function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							var i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, St("leaderboards/" + er + "/players/" + t, {
											score: n
										}, {}, Qa);
									case 2:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || {});
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					gr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, window.GameSDK.getLeaderboardAsync(tr);
									case 2:
										return n = e.sent, e.next = 5, n.setScoreAsync(t);
									case 5:
										return e.abrupt("return", e.sent);
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}();

				function vr(e, t) {
					var n = "undefined" !== typeof Ya() && za()(e) || e["@@iterator"];
					if (n) return (n = n.call(e)).next.bind(n);
					if (Array.isArray(e) || (n = function(e, t) {
							var n;
							if (!e) return;
							if ("string" === typeof e) return yr(e, t);
							var i = Fe()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
							"Object" === i && e.constructor && (i = e.constructor.name);
							if ("Map" === i || "Set" === i) return Ha()(e);
							if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return yr(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var i = 0;
						return function() {
							return i >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[i++]
							}
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}

				function yr(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
					return i
				}
				var Sr = GameCore.Configs.LeadersBoard,
					br = Sr.UseMock,
					Er = Sr.Limit,
					Ar = function(e, t, n, a) {
						return void 0 === n && (n = Er), void 0 === a && (a = 0),
							function() {
								var r = (0, s.Z)(u().mark((function r(s) {
									var o, c, l, h, d, p, f, m, g, v, y, S, b, E, A, w, T, C;
									return u().wrap((function(r) {
										for (;;) switch (r.prev = r.next) {
											case 0:
												if (r.prev = 0, o = window.game.player, c = o.getPlayerId(), s(Tr()), s({
														type: hi,
														payload: {
															leaderboardId: e,
															type: t,
															limit: n,
															offset: a
														}
													}), !br) {
													r.next = 12;
													break
												}
												return r.next = 8, (0, lt.qZ)(1e3);
											case 8:
												return 145, d = me()(l = Za()(h = new Array(n)).call(h, null)).call(l, (function(e, t) {
													var n = (t + 1) * (a + 1);
													return {
														playerId: 145 === t ? c : "0" + n,
														name: 145 === t ? "Current Player" : "MPlayer " + n,
														photo: "./assets/images/others/avatar.png",
														rank: n,
														score: Math.floor(1e5 / n)
													}
												})), s(wr(d, t)), r.abrupt("return");
											case 12:
												if (p = [], t !== Ka) {
													r.next = 19;
													break
												}
												return r.next = 16, sr({
													limit: n,
													offset: a
												});
											case 16:
												p = r.sent, r.next = 27;
												break;
											case 19:
												if (t !== ja) {
													r.next = 27;
													break
												}
												return (f = o.getConnectedPlayerIds(n, a)).push(c), m = GameCore.Utils.Array.unique(f), r.next = 25, ur({
													playerIds: m,
													limit: m.length
												});
											case 25:
												p = r.sent, m.forEach((function(e) {
													var t = pe()(p).call(p, (function(t) {
														return t.playerId === e
													}));
													t && 0 !== t.length || p.push({
														playerId: e,
														score: 0
													})
												}));
											case 27:
												for (g = {}, v = vr(p); !(y = v()).done;) S = y.value, b = S.playerId, E = S.score, A = S.rank, w = S.getPlayer(), T = w.getPhoto(), C = w.getName(), g[b] = {
													playerId: b,
													name: C,
													photo: T,
													score: E,
													rank: A
												};
												console.log("Request leaderboard data", g), s(wr(g, t)), r.next = 37;
												break;
											case 33:
												r.prev = 33, r.t0 = r.catch(0), s(wr([], t)), (0, i.tO)(r.t0);
											case 37:
											case "end":
												return r.stop()
										}
									}), r, null, [
										[0, 33]
									])
								})));
								return function(e) {
									return r.apply(this, arguments)
								}
							}()
					},
					wr = function(e, t) {
						return {
							type: di,
							payload: {
								leaders: e,
								type: t
							}
						}
					},
					Tr = function() {
						return {
							type: pi,
							payload: {}
						}
					},
					Cr = function(e) {
						return e[si]
					},
					Pr = ((0, Y.P1)([function(e) {
						return Cr(e).leaderboardId
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Cr(e).leaders
					}], (function(e) {
						return e
					}))),
					Ir = (0, Y.P1)([function(e) {
						return Cr(e).isRequesting
					}], (function(e) {
						return e
					})),
					kr = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidContextId", i.message = t || "This contextId is not valid", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					xr = kr,
					Or = {
						START_GAME: "start-game",
						REPLAY: "replay",
						RESCUE: "rescue",
						RECEIVE_DIAMONDS: "receive-diamonds",
						GAME_OVER: "game-over"
					},
					Rr = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "NewScoreIsBad", i.message = t || "The new score is bad", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					_r = Rr,
					Br = function(e) {
						return e[Tn]
					},
					Dr = (0, Y.P1)([function(e) {
						return Br(e).gameplay.mode
					}], (function(e) {
						return e
					})),
					Nr = ((0, Y.P1)([function(e) {
						return Br(e).gameplay.status
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Br(e).gameplay.rescued
					}], (function(e) {
						return e
					}))),
					Mr = (0, Y.P1)([function(e) {
						return Br(e).gameplay.startAt
					}], (function(e) {
						return e
					})),
					Lr = (0, Y.P1)([function(e) {
						return Br(e).gameplay.finishAt
					}], (function(e) {
						return e
					})),
					Fr = GameCore.Configs,
					Gr = Fr.AppId,
					Zr = Fr.OtherHost,
					Ur = Fr.LeadersBoard,
					Hr = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = {
												appId: Gr,
												resetScore: 0,
												numberOfLeaders: 15,
												timezone: "utc+0",
												sortOrder: "desc",
												statistics: "max",
												resettable: "manually",
												description: "no description"
											}, !Ur.UseMock) {
											e.next = 5;
											break
										}
										return e.next = 4, (0, lt.qZ)(1e3);
									case 4:
										return e.abrupt("return", (0, r.Z)({}, n, t, {
											_id: Ur.LeaderboardId,
											type: "app_leaderboard",
											description: "mockup_leaderboard",
											createdAt: new Date(Date.now()).toISOString(),
											updatedAt: new Date(Date.now()).toISOString()
										}));
									case 5:
										return "leaderboards", e.next = 8, St("leaderboards", (0, r.Z)({}, n, t), {}, Zr);
									case 8:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || {});
									case 10:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Vr = (function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							var i, a, r, s, o, c, l, h, d, p, f, m;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (void 0 === n && (n = {}), i = [], !Ur.UseMock) {
											e.next = 7;
											break
										}
										return e.next = 5, (0, lt.qZ)(1e3);
									case 5:
										return o = (s = n).limit, c = void 0 === o ? 10 : o, l = s.offset, h = void 0 === l ? 0 : l, e.abrupt("return", me()(a = Za()(r = new Array(c)).call(r, null)).call(a, (function(e, t) {
											var n = (t + 1) * (h + 1);
											return {
												playerId: "player-0" + n,
												name: "MPlayer " + n,
												photo: "./assets/images/others/avatar.jpg",
												rank: n,
												score: Math.floor(1e5 / n + 1e4 * Math.random())
											}
										})));
									case 7:
										return d = GameCore.Utils.String.params(n), p = "leaderboards/" + t + "/leaders", e.next = 11, yt(p + "?" + d, {}, Zr);
									case 11:
										if ((f = e.sent) && (null == f || !f.error)) {
											e.next = 14;
											break
										}
										throw new Error((null == f ? void 0 : f.error) || "Leaderboard not found");
									case 14:
										if (!((m = (null == f ? void 0 : f.data) || []).length < 1)) {
											e.next = 17;
											break
										}
										return e.abrupt("return", i);
									case 17:
										return i = m, e.abrupt("return", i);
									case 19:
									case "end":
										return e.stop()
								}
							}), e)
						})))
					}(), function() {
						var e = (0, s.Z)(u().mark((function e(t, n, i) {
							var a;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, St("leaderboards/" + t + "/players/" + n, {
											score: i
										}, {}, Zr);
									case 2:
										return a = e.sent, e.abrupt("return", (null == a ? void 0 : a.data) || {});
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n, i) {
							return e.apply(this, arguments)
						}
					}()),
					Yr = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "CurrentTournamentScoreIsNotBest", i.message = t || "The new score is not best", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					Wr = Yr,
					zr = GameCore.Configs.Tournament.UseLeaderboard,
					Kr = function(e) {
						return {
							type: ti,
							payload: {
								tournamentId: e
							}
						}
					},
					jr = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n) {
								var a, r, s, o, c, l, h, d, p;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, a = window.game.facebook, r = e.playerId, s = e.playerName, o = e.score, c = e.autoStartGame, l = s + "'s Tournament", h = GameCore.Utils.String.generateObjectId(), t.next = 7, a.tournament.createAsync({
												initialScore: o,
												config: {
													title: l,
													tournamentTitle: l
												},
												data: {
													playerId: r,
													playerName: s,
													leaderboardId: h
												}
											});
										case 7:
											return d = t.sent, p = d.getID(), c && (n(Kr(p)), n(Uo())), t.next = 12, Hr({
												_id: h,
												createdBy: r,
												name: p,
												description: l,
												expireTime: 6048e5
											});
										case 12:
											if (t.sent._id !== h) {
												t.next = 16;
												break
											}
											return t.next = 16, Vr(h, r, o);
										case 16:
											t.next = 21;
											break;
										case 18:
											t.prev = 18, t.t0 = t.catch(0), (0, i.tO)(t.t0);
										case 21:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 18]
								])
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}()
					},
					Xr = function(e) {
						return (0, s.Z)(u().mark((function t() {
							var n, i, a, r, s;
							return u().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return n = window.game.facebook, i = e.playerId, a = e.playerName, r = e.leaderboardId, s = e.score, r && Vr(r, i, s), t.next = 5, n.tournament.shareAsync({
											score: s,
											data: {
												type: qi,
												playerId: i,
												playerName: a
											}
										});
									case 5:
										Vr(r, i, s);
									case 6:
									case "end":
										return t.stop()
								}
							}), t)
						})))
					},
					qr = function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t, n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, t = window.game.facebook, e.next = 4, t.getTournamentAsync();
									case 4:
										return n = e.sent, i = JSON.parse(n.getPayload() || "{}"), e.abrupt("return", i.leaderboardId);
									case 9:
										return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", null);
									case 12:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 9]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					Qr = function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, t = window.game.facebook, e.next = 4, t.getTournamentAsync();
									case 4:
										return e.abrupt("return", e.sent);
									case 7:
										return e.prev = 7, e.t0 = e.catch(0), console.warn("getCurrentTournament ~ error", e.t0), e.abrupt("return", null);
									case 11:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 7]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					Jr = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n, i) {
								var a, r, s, o, c, l, h, d, p, f, m, g, v, y;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (a = null, r = window.game, s = r.player, o = r.facebook, c = r.analytics, t.prev = 2, h = i(), d = Dr(h), re()(l = [ta, aa]).call(l, d)) {
												t.next = 7;
												break
											}
											return t.abrupt("return");
										case 7:
											return n({
												type: ni,
												payload: {}
											}), p = s.getPlayer(), f = p.playerId, m = p.name, t.next = 11, Qr();
										case 11:
											if (!t.sent) {
												t.next = 23;
												break
											}
											if (a = Vt._.TOURNAMENT_SHARE, !zr) {
												t.next = 21;
												break
											}
											return t.next = 17, qr();
										case 17:
											return g = t.sent, v = {
												playerId: f,
												playerName: m,
												score: e,
												leaderboardId: g
											}, t.next = 21, n(Xr(v));
										case 21:
											t.next = 28;
											break;
										case 23:
											if (a = Vt._.TOURNAMENT_CREATE, !zr) {
												t.next = 28;
												break
											}
											return y = {
												playerId: f,
												playerName: m,
												score: e,
												autoStartGame: !1
											}, t.next = 28, n(jr(y));
										case 28:
											if (c.event(a, {
													success: !0
												}), !1 !== zr) {
												t.next = 32;
												break
											}
											return t.next = 32, o.requestTournamentAsync(e);
										case 32:
											n($r(e)), t.next = 40;
											break;
										case 35:
											if (t.prev = 35, t.t0 = t.catch(2), !(t.t0 instanceof Wr)) {
												t.next = 39;
												break
											}
											return t.abrupt("return");
										case 39:
											a && c.event(a, {
												success: !1
											});
										case 40:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[2, 35]
								])
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}()
					},
					$r = function(e) {
						return {
							type: ii,
							payload: {
								score: e
							}
						}
					},
					es = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidOpponentId", i.message = t || "This opponentId is not valid", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					ts = es,
					ns = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "WideFrameRenderFail", i.message = t || "Wide frame render fail", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					is = ns,
					as = {
						PASS_LEVELS: {
							ID: "pass-levels",
							EVENTS: {
								PASS_LEVEL: "pass-level"
							}
						},
						COLLECT_DIAMONDS: {
							ID: "collect-diamonds",
							EVENTS: {
								COLLECT_DIAMONDS: "collect-diamonds"
							}
						},
						INVITE_FRIENDS: {
							ID: "invite-friends",
							EVENTS: {
								INVITED_FRIEND: "INVITED_FRIEND"
							}
						},
						REACH_SCORE: {
							ID: "reach-score",
							EVENTS: {
								ADD_SCORE: "add-score"
							}
						},
						EVENTS: {
							TASKS_RESET: "tasks-reset",
							NOTICE_UPDATE: "notice-update"
						}
					},
					rs = function(e, t) {
						return t.playerId
					},
					ss = ((0, Y.P1)([function(e) {
						return Br(e).match.isRequesting
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Br(e).match.single
					}], (function(e) {
						return e
					}))),
					os = (0, Y.P1)([function(e) {
						return Br(e).match.single._id
					}], (function(e) {
						return e
					})),
					cs = (0, Y.P1)([function(e) {
						return Br(e).match.single.score
					}], (function(e) {
						return e || 0
					})),
					us = ((0, Y.P1)([function(e) {
						return Br(e).match.single.level
					}], (function(e) {
						return e || 0
					})), (0, Y.P1)([function(e) {
						var t;
						return null == (t = Br(e).match.single.data) ? void 0 : t.diamond
					}], (function(e) {
						return e || 0
					})), (0, Y.P1)([function(e) {
						var t;
						return null == (t = Br(e).match.single.data) ? void 0 : t.fen
					}], (function(e) {
						return e || null
					})), (0, Y.P1)([function(e) {
						return Br(e).match.single.status
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Br(e).match.single.playerId
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Br(e).match.challenge
					}], (function(e) {
						return e
					}))),
					ls = (0, Y.P1)([function(e) {
						return Br(e).match.challenge._id
					}], (function(e) {
						return e
					})),
					hs = (0, Y.P1)([function(e) {
						return Br(e).match.challenge.status
					}], (function(e) {
						return e
					})),
					ds = (0, Y.P1)([function(e) {
						return Br(e).match.challenge.opponentInfo
					}], (function(e) {
						return e
					})),
					ps = ((0, Y.P1)([function(e) {
						return Br(e).match.challenge.whitePlayerId
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Br(e).match.challenge.blackPlayerId
					}], (function(e) {
						return e
					})), (0, Y.P1)([us, rs], (function(e, t) {
						var n = e.whitePlayerId,
							i = e.blackPlayerId;
						return n !== t && i === t ? n : i !== t && n === t ? i : ""
					})), (0, Y.P1)([us, rs], (function(e, t) {
						var n = e.whitePlayerId,
							i = e.blackPlayerId;
						return n === t ? n : i === t ? i : ea.playerId
					}))),
					fs = (0, Y.P1)([us, rs], (function(e, t) {
						var n = e.whitePlayerId,
							i = e.blackPlayerId,
							a = e.whitePlayerFinish,
							r = e.blackPlayerFinish;
						return t && n === t ? a : !(!t || i !== t) && r
					})),
					ms = (0, Y.P1)([us, function(e, t) {
						return t.opponentId
					}], (function(e, t) {
						var n = e.whitePlayerId,
							i = e.blackPlayerId,
							a = e.whitePlayerFinish,
							r = e.blackPlayerFinish;
						return t && n === t ? a : !(!t || i !== t) && r
					})),
					gs = (0, Y.P1)([function(e) {
						return Br(e).match.group.opponentInfo
					}], (function(e) {
						return e
					})),
					vs = ((0, Y.P1)([function(e) {
						return Br(e).match.online.players
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return Br(e).stats.data
					}], (function(e) {
						return e
					}))),
					ys = (0, Y.P1)([function(e) {
						return Br(e).stats.current
					}], (function(e) {
						return e
					})),
					Ss = ((0, Y.P1)([function(e) {
						return Br(e).stats.isRequesting
					}], (function(e) {
						return e
					})), (0, Y.P1)([function(e) {
						return e.messages.data
					}], (function(e) {
						return e
					}))),
					bs = (0, Y.P1)([Ss, function(e, t) {
						return t.opponentId
					}], (function(e, t) {
						return !!GameCore.Utils.Valid.isString(t) && (!!GameCore.Utils.Object.hasOwn(e, t) && e[t].sent)
					})),
					Es = n(410),
					As = new(n.n(Es)()),
					ws = n(338),
					Ts = n.n(ws),
					Cs = function(e) {
						if ("string" !== typeof e || !e) throw new is(null, {
							imageShare: e
						})
					},
					Ps = function() {
						return (0, s.Z)(u().mark((function e() {
							var t, n, a, r, s, o, c, l, h, d;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = window.game, n = t.player, a = t.analytics, r = t.facebook, s = t.globalScene, e.prev = 1, s.screen.open(Ra.o4.NOTIFY_SCREEN, {
											message: "Loading...",
											loading: !0
										}), e.next = 5, Is();
									case 5:
										return o = e.sent, Cs(o), c = n.getPlayer(), l = c.playerId, h = c.name, d = c.photo, e.next = 10, r.shareAsync({
											text: "Great! I have a best score!",
											intent: "SHARE",
											image: o || "",
											data: {
												playerId: l,
												playerName: h,
												playerPhoto: d,
												type: Xi
											}
										});
									case 10:
										a.event(Vt._.SHARE, {
											share_content_type: "BestScore",
											success: !0
										}), e.next = 17;
										break;
									case 13:
										e.prev = 13, e.t0 = e.catch(1), a.event(Vt._.SHARE, {
											share_content_type: "BestScore",
											success: !1
										}), (0, i.tO)(e.t0);
									case 17:
										return e.prev = 17, s.screen.close(Ra.o4.NOTIFY_SCREEN), e.finish(17);
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 13, 17, 20]
							])
						})))
					},
					Is = function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t, n, i, a, r, s, o, c, l, h;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (t = window.game, n = t.player, i = t.globalScene, a = n.getPlayer(), r = a.playerId, s = a.photo, o = a.data, c = (o || {}).score, l = xs({
												playerId: r,
												playerPhoto: s,
												playerScore: c
											})) {
											e.next = 7;
											break
										}
										return console.warn("getRenderOptionsBestScore"), e.abrupt("return");
									case 7:
										return h = {
											name: "share-best-score",
											width: 952,
											height: 492,
											renderOptions: l
										}, e.next = 10, i.frameCapture.capture(h);
									case 10:
										return e.abrupt("return", e.sent);
									case 11:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					ks = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s, o, c, l, h, d, p;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = window.game, i = n.player, a = n.globalScene, r = vs(t), s = i.getPlayer(), o = s.playerId, c = s.photo, l = r[o] || {}, h = l.score, d = xs({
												playerId: o,
												playerPhoto: c,
												playerScore: h
											})) {
											e.next = 8;
											break
										}
										return console.warn("getRenderOptionsCurrentScore"), e.abrupt("return");
									case 8:
										return p = {
											name: "share-current-score",
											width: 952,
											height: 492,
											renderOptions: d
										}, e.next = 11, a.frameCapture.capture(p);
									case 11:
										return e.abrupt("return", e.sent);
									case 12:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					xs = function(e) {
						var t = e.playerId,
							n = void 0 === t ? "10" : t,
							i = e.playerPhoto,
							a = void 0 === i ? "" : i,
							r = e.playerScore,
							s = void 0 === r ? 0 : r;
						return "string" !== typeof n || "string" !== typeof a || "number" !== typeof s ? null : {
							avatar: {
								name: "" + n,
								type: "image",
								x: 115,
								y: 135,
								image: a,
								width: 200,
								height: 200,
								fallbackWithImage: $i.Z.AVATAR.KEY
							},
							wideFrame: {
								name: "wide-frame-message-win",
								type: "image",
								x: 0,
								y: 0,
								image: "",
								width: 952,
								height: 492
							},
							playerScoreShadow: {
								type: "text",
								x: 214,
								y: 437,
								font: "600 70px",
								fillStyle: "#c4683f",
								text: "" + s,
								textAlign: "center"
							},
							playerScore: {
								type: "text",
								x: 214,
								y: 437,
								font: "600 70px",
								fillStyle: "#f2a62e",
								text: "" + s,
								textAlign: "center"
							}
						}
					},
					Os = function() {
						return (0, s.Z)(u().mark((function e() {
							var t, n, a, r, s, o, c, l, h, d;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = window.game, n = t.player, a = t.analytics, r = t.facebook, s = t.globalScene, e.prev = 1, s.screen.open(Ra.o4.NOTIFY_SCREEN, {
											message: "Loading...",
											loading: !0
										}), e.next = 5, Rs();
									case 5:
										return o = e.sent, Cs(o), c = n.getPlayer(), l = c.playerId, h = c.name, d = c.photo, e.next = 10, r.shareAsync({
											text: "A ha, I'm the best!",
											intent: "CHALLENGE",
											image: o || "",
											data: {
												playerId: l,
												playerName: h,
												playerPhoto: d,
												type: Xi
											}
										});
									case 10:
										a.event(Vt._.SHARE, {
											share_content_type: "Leaderboard",
											success: !0
										}), e.next = 17;
										break;
									case 13:
										e.prev = 13, e.t0 = e.catch(1), a.event(Vt._.SHARE, {
											share_content_type: "Leaderboard",
											success: !1
										}), (0, i.tO)(e.t0);
									case 17:
										return e.prev = 17, s.screen.close(Ra.o4.NOTIFY_SCREEN), e.finish(17);
									case 20:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 13, 17, 20]
							])
						})))
					},
					Rs = function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t, n, i, a, r, s, o, c, l, h, d, p, f, m, g, v, y, S, b, E;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = window.game, n = t.player, i = t.profile, a = t.globalScene, r = n.getPlayer(), s = r.playerId, o = r.name, c = r.photo, (l = n.getConnectedPlayerIds(99, 0)).push(s), h = [], e.next = 7, ur({
											playerIds: GameCore.Utils.Array.unique(l),
											limit: l.length
										});
									case 7:
										d = e.sent, p = GameCore.Utils.Object.keyBy(d, "playerId"), f = {
											playerId: s,
											name: o,
											photo: c,
											score: 0
										}, GameCore.Utils.Object.hasOwn(p, s) && (f = p[s]), h.push(f), e.t0 = Ts()(u()).call(u(), p);
									case 14:
										if ((e.t1 = e.t0()).done) {
											e.next = 27;
											break
										}
										if (m = e.t1.value, !GameCore.Utils.Object.hasOwn(p, m)) {
											e.next = 25;
											break
										}
										if (g = p[m], 3 !== h.length) {
											e.next = 20;
											break
										}
										return e.abrupt("break", 27);
									case 20:
										if (g.playerId !== s) {
											e.next = 22;
											break
										}
										return e.abrupt("continue", 14);
									case 22:
										if (!(Number(g.score) > Number(f.score))) {
											e.next = 24;
											break
										}
										return e.abrupt("continue", 14);
									case 24:
										h.push(g);
									case 25:
										e.next = 14;
										break;
									case 27:
										return v = GameCore.Utils.Array.unique(l), e.next = 30, i.requestProfiles(v);
									case 30:
										if (y = i.getProfiles(), h.forEach((function(e, t) {
												var n = e.playerId;
												if (GameCore.Utils.Object.hasOwn(y, n)) {
													var i = y[n],
														a = i.name,
														r = i.photo;
													h[t].name = a, h[t].photo = r
												}
											})), h.length < 3)
											for (S = 0; S <= 3 - h.length;) h.push({
												playerId: "bot" + S,
												name: "???",
												score: 0,
												photo: "./assets/images/others/avatar.png"
											}), S++;
										if (b = _s({
												playerId: s,
												playerName: o,
												playerPhoto: c,
												listLeaders: h
											})) {
											e.next = 37;
											break
										}
										return console.warn("getRenderOptionsLeaderboard"), e.abrupt("return");
									case 37:
										return E = {
											name: "share-leaderboard",
											width: 1500,
											height: 2e3,
											renderOptions: b
										}, e.next = 40, a.frameCapture.capture(E);
									case 40:
										return e.abrupt("return", e.sent);
									case 41:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					_s = function(e) {
						var t = e.playerId,
							n = void 0 === t ? "10" : t,
							i = e.playerPhoto,
							a = void 0 === i ? "" : i,
							r = e.listLeaders,
							s = void 0 === r ? [] : r;
						if (!Array.isArray(s)) return null;
						if ("string" !== typeof n) return null;
						if ("string" !== typeof a) return null;
						var o = {
							avatar: {
								name: "" + n,
								type: "image",
								x: 500,
								y: 200,
								image: a,
								width: 525,
								height: 525,
								fallbackWithImage: $i.Z.AVATAR.KEY
							}
						};
						return s.forEach((function(e, t) {
							var n = e.playerId,
								i = e.photo;
							o["photo_" + n] = {
								name: "" + n,
								type: "image",
								x: 400,
								y: 1135 + 185 * t,
								image: i,
								width: 116,
								height: 116,
								fallbackWithImage: $i.Z.AVATAR.KEY
							}
						})), o.wideFrame = {
							name: "wide-frame-share",
							type: "image",
							x: 0,
							y: 0,
							image: "",
							width: 1500,
							height: 2e3
						}, s.forEach((function(e, t) {
							var n = e.playerId,
								i = e.name,
								a = e.score;
							o["name_" + n] = {
								type: "text",
								x: 600,
								y: 1215 + 185 * t,
								font: "600 48px",
								text: i,
								fillStyle: "#b18151"
							}, o["score_" + n] = {
								type: "text",
								x: 1e3,
								y: 1215 + 185 * t,
								font: "600 48px",
								text: a,
								fillStyle: "#b18151"
							}
						})), o
					},
					Bs = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s, o, c, l, h, d, p, f, m, g, v, y, S, b;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = window.game, i = n.player, a = n.globalScene, r = vs(t), s = i.getPlayer(), o = s.photo, c = s.playerId, l = ds(t), h = l.playerId, d = l.photo, p = fs(t, {
												playerId: c
											}), f = ms(t, {
												opponentId: h
											}), m = r[c] || {}, g = m.score, v = r[h] || {}, y = v.score, S = Ns({
												playerId: c,
												playerPhoto: o,
												playerScore: g,
												opponentId: h,
												opponentPhoto: d,
												opponentScore: y,
												isPlayerFinished: p,
												isOpponentFinished: f
											})) {
											e.next = 12;
											break
										}
										return console.warn("getRenderOptionsLeaderboard"), e.abrupt("return");
									case 12:
										return b = {
											name: "share-game-result",
											width: 952,
											height: 492,
											renderOptions: S
										}, e.next = 15, a.frameCapture.capture(b);
									case 15:
										return e.abrupt("return", e.sent);
									case 16:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Ds = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, s, o, c, l, h, d, p, f, m, g, v;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = window.game, i = n.player, a = n.globalScene, r = vs(t), s = i.getPlayer(), o = s.photo, c = s.playerId, l = gs(t), h = l.playerId, d = l.photo, p = l.score, f = r[c] || {}, m = f.score, g = Ns({
												playerId: c,
												playerPhoto: o,
												playerScore: m,
												opponentId: h,
												opponentPhoto: d,
												opponentScore: p
											})) {
											e.next = 9;
											break
										}
										return console.warn("getRenderOptionsGroupResult"), e.abrupt("return");
									case 9:
										return v = {
											name: "share-group-match-result",
											width: 952,
											height: 492,
											renderOptions: g
										}, e.next = 12, a.frameCapture.capture(v);
									case 12:
										return e.abrupt("return", e.sent);
									case 13:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Ns = function(e) {
						var t = e.playerId,
							n = void 0 === t ? "10" : t,
							i = e.playerPhoto,
							a = void 0 === i ? "" : i,
							r = e.playerScore,
							s = void 0 === r ? 0 : r,
							o = e.opponentId,
							c = void 0 === o ? "20" : o,
							u = e.opponentPhoto,
							l = void 0 === u ? "" : u,
							h = e.opponentScore,
							d = void 0 === h ? 0 : h,
							p = e.isPlayerFinished,
							f = e.isOpponentFinished;
						if ("string" !== typeof n) return null;
						if ("string" !== typeof a) return null;
						if ("number" !== typeof s) return null;
						if ("string" !== typeof c) return null;
						if ("string" !== typeof l) return null;
						if ("number" !== typeof d) return null;
						if ("boolean" !== typeof p) return null;
						if ("boolean" !== typeof f) return null;
						var m = s === d,
							g = s > d,
							v = p || f,
							y = p && f,
							S = {
								leftPhoto: {
									name: "" + n,
									type: "image",
									x: 28,
									y: 130,
									image: a,
									width: 200,
									height: 200,
									fallbackWithImage: $i.Z.AVATAR.KEY
								},
								rightPhoto: {
									name: "" + c,
									type: "image",
									x: 727,
									y: 130,
									image: l,
									width: 200,
									height: 200,
									fallbackWithImage: $i.Z.AVATAR.KEY
								},
								wideFrame: {
									name: "wide-frame-game-result",
									type: "image",
									x: 0,
									y: 0,
									image: "",
									width: 952,
									height: 492
								}
							};
						return v && (S.leftScoreShadow = {
							type: "text",
							x: 128,
							y: 423,
							font: "600 70px",
							fillStyle: "#c4683f",
							text: p ? "" + s : "???",
							textAlign: "center"
						}, S.leftScore = {
							type: "text",
							x: 128,
							y: 423,
							font: "600 70px",
							fillStyle: "#f2a62e",
							text: p ? "" + s : "???",
							textAlign: "center"
						}, S.rightScoreShadow = {
							type: "text",
							x: 828,
							y: 423,
							font: "600 70px",
							fillStyle: "#c4683f",
							text: f ? "" + d : "???",
							textAlign: "center"
						}, S.rightScore = {
							type: "text",
							x: 828,
							y: 423,
							font: "600 70px",
							fillStyle: "#f2a62e",
							text: f ? "" + d : "???",
							textAlign: "center"
						}), !m && y && (g ? S.leftCrown = {
							name: "crown-icon",
							type: "image",
							x: 72,
							y: 72,
							image: "./assets/images/others/crown-icon.png",
							width: 106,
							height: 78
						} : S.rightCrown = {
							name: "crown-icon",
							type: "image",
							x: 774,
							y: 72,
							image: "./assets/images/others/crown-icon.png",
							width: 106,
							height: 78
						}), S
					},
					Ms = function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t, n, i, a, r, s, o, c, l;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (t = window.game, n = t.player, i = t.globalScene, a = n.getPlayer(), r = a.playerId, s = a.photo, o = n.getBestScore(), c = Ls({
												playerId: r,
												playerPhoto: s,
												playerScore: o
											})) {
											e.next = 7;
											break
										}
										return console.warn("getRenderOptionsBestScore"), e.abrupt("return");
									case 7:
										return l = {
											name: "share-score",
											width: 952,
											height: 492,
											renderOptions: c
										}, e.next = 10, i.frameCapture.capture(l);
									case 10:
										return e.abrupt("return", e.sent);
									case 11:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					Ls = function(e) {
						var t = e.playerId,
							n = void 0 === t ? "10" : t,
							i = e.playerPhoto,
							a = void 0 === i ? "" : i,
							r = e.playerScore,
							s = void 0 === r ? 0 : r;
						return "string" !== typeof n || "string" !== typeof a || "number" !== typeof s ? null : {
							avatar: {
								name: "" + n,
								type: "image",
								x: 115,
								y: 135,
								image: a,
								width: 200,
								height: 200,
								fallbackWithImage: $i.Z.AVATAR.KEY
							},
							wideFrame: {
								name: "wide-frame-message-win",
								type: "image",
								x: 0,
								y: 0,
								image: "",
								width: 952,
								height: 492
							},
							playerScoreShadow: {
								type: "text",
								x: 214,
								y: 437,
								font: "600 70px",
								fillStyle: "#c4683f",
								text: "" + s,
								textAlign: "center"
							},
							playerScore: {
								type: "text",
								x: 214,
								y: 437,
								font: "600 70px",
								fillStyle: "#f2a62e",
								text: "" + s,
								textAlign: "center"
							}
						}
					},
					Fs = function(e) {
						var t = e.contextId;
						if ("" === t || "string" !== typeof t) throw new xr(null, {
							contextId: t
						})
					},
					Gs = function(e) {
						var t = e.opponentId,
							n = e.contextId;
						if ("" === t || "string" !== typeof t) throw new ts(null, {
							opponentId: t
						});
						if ("" === n || "string" !== typeof n) throw new xr(null, {
							contextId: n
						})
					},
					Zs = function(e) {
						if (null === e.imageShare) throw new is
					},
					Us = function(e, t) {
						return void 0 === t && (t = !0),
							function(n, i) {
								var a, r = i(),
									s = Ss(r);
								if (t) {
									var o;
									if (null != (o = s[e]) && o.sent) return;
									n(Hs(e))
								}
								null != (a = s[e]) && a.sent && n(Vs(e))
							}
					},
					Hs = function(e) {
						return {
							type: $t.qj,
							payload: {
								opponentId: e
							}
						}
					},
					Vs = function(e) {
						return {
							type: $t.rh,
							payload: {
								opponentId: e
							}
						}
					},
					Ys = function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							var a, r;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (e.prev = 0, a = window.game.facebook, Gs({
												opponentId: t,
												contextId: n
											}), (r = FBInstant.context.getID()) !== n || "" === n) {
											e.next = 6;
											break
										}
										return e.abrupt("return", r);
									case 6:
										if ("10" !== t || "" === n) {
											e.next = 8;
											break
										}
										return e.abrupt("return", n);
									case 8:
										if (!n) {
											e.next = 12;
											break
										}
										return e.next = 11, a.switchAsync(n);
									case 11:
										return e.abrupt("return", FBInstant.context.getID());
									case 12:
										e.next = 17;
										break;
									case 14:
										e.prev = 14, e.t0 = e.catch(0), (0, i.tO)(e.t0);
									case 17:
										return e.abrupt("return", "");
									case 18:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 14]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					Ws = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c, l, h, d, p, f, m, g, v, y;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return s = window.game, o = s.player, c = s.analytics, l = s.facebook, n.prev = 1, h = t.matchId, d = t.contextId, n.next = 5, Ys(e, d);
										case 5:
											return p = n.sent, Fs({
												contextId: p
											}), f = r(), n.next = 10, Bs(f);
										case 10:
											return m = n.sent, Zs({
												imageShare: m
											}), g = o.getPlayer(), v = g.name, y = g.playerId, n.next = 15, l.sendMessage({
												cta: {
													default: "Play",
													localizations: {
														en_US: "Play",
														vi_VN: "Ch\u01a1i ngay"
													}
												},
												text: {
													default: v + " challenges you",
													localizations: {
														en_US: v + " challenges you",
														vi_VN: v + " th\u1eed th\xe1ch b\u1ea1n trong tr\u1eadn \u0111\u1ea5u n\xe0y. Ch\u01a1i ngay!"
													}
												},
												image: m || "",
												template: "challenge",
												data: {
													type: Qi,
													matchId: h,
													playerId: y,
													opponentId: e,
													status: Xn
												}
											});
										case 15:
											a(Us(e)), c.event(Vt._.MESSAGE, {
												message_content_type: "Invite",
												success: !0
											}), As.emit(as.INVITE_FRIENDS.EVENTS.INVITED_FRIEND, {
												type: "friend",
												value: 1,
												opponentId: e
											}), n.next = 24;
											break;
										case 20:
											n.prev = 20, n.t0 = n.catch(1), c.event(Vt._.MESSAGE, {
												message_content_type: "Invite",
												success: !1
											}), (0, i.tO)(n.t0);
										case 24:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[1, 20]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					zs = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c, l, h, d, p, f, m, g, v, y;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return s = window.game, o = s.player, c = s.analytics, l = s.facebook, n.prev = 1, h = t.matchId, d = t.contextId, n.next = 5, Ys(e, d);
										case 5:
											return p = n.sent, Fs({
												contextId: p
											}), f = r(), n.next = 10, Bs(f);
										case 10:
											return m = n.sent, Zs({
												imageShare: m
											}), g = o.getPlayer(), v = g.name, y = g.playerId, n.next = 15, l.sendMessage({
												cta: {
													default: "See result",
													localizations: {
														en_US: "See result",
														vi_VN: "Xem k\u1ebft qu\u1ea3"
													}
												},
												text: {
													default: v + " just finished. Check them now.",
													localizations: {
														en_US: v + " just finished. Check them now.",
														vi_VN: v + " v\u1eeba ho\xe0n th\xe0nh m\xe0n ch\u01a1i. Nh\u1ea5n \u0111\u1ec3 xem k\u1ebft qu\u1ea3 tr\u1eadn \u0111\u1ea5u."
													}
												},
												image: m || "",
												template: "finished",
												data: {
													type: Qi,
													matchId: h,
													playerId: y,
													opponentId: e,
													status: qn
												}
											});
										case 15:
											a(Us(e)), c.event(Vt._.MESSAGE, {
												message_content_type: "FinishMatch",
												success: !0
											}), n.next = 23;
											break;
										case 19:
											n.prev = 19, n.t0 = n.catch(1), c.event(Vt._.MESSAGE, {
												message_content_type: "FinishMatch",
												success: !1
											}), (0, i.tO)(n.t0);
										case 23:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[1, 19]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					Ks = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c, l, h, d, p, f, m, g, v, y, S, b, E, A;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return s = window.game, o = s.player, c = s.analytics, l = s.facebook, n.prev = 1, h = t.matchId, d = t.contextId, n.next = 5, Ys(e, d);
										case 5:
											return p = n.sent, Fs({
												contextId: p
											}), f = r(), n.next = 10, Bs(f);
										case 10:
											return m = n.sent, Zs({
												imageShare: m
											}), g = o.getPlayer(), v = g.name, y = g.playerId, S = vs(f), b = S[y] || {}, E = b.score, A = void 0 === E ? 0 : E, n.next = 17, l.sendMessage({
												cta: {
													default: "See result",
													localizations: {
														en_US: "See result",
														vi_VN: "Xem k\u1ebft qu\u1ea3"
													}
												},
												text: {
													default: v + " beat your high score. Their score: " + A,
													localizations: {
														en_US: v + " beat your high score. Their score: " + A,
														vi_VN: v + " \u0111\xe3 v\u01b0\u1ee3t qua \u0111i\u1ec3m s\u1ed1 c\u1ee7a b\u1ea1n, v\u1edbi " + A + " \u0111i\u1ec3m!"
													}
												},
												image: m || "",
												template: "pass_score",
												data: {
													type: Qi,
													matchId: h,
													playerId: y,
													opponentId: e,
													status: qn
												}
											});
										case 17:
											a(Us(e)), c.event(Vt._.MESSAGE, {
												message_content_type: "BestScore",
												success: !0
											}), n.next = 25;
											break;
										case 21:
											n.prev = 21, n.t0 = n.catch(1), c.event(Vt._.MESSAGE, {
												message_content_type: "BestScore",
												success: !1
											}), (0, i.tO)(n.t0);
										case 25:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[1, 21]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					js = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c, l, h, d, p, f, m, g, v, y, S;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return s = window.game, o = s.player, c = s.analytics, l = s.facebook, n.prev = 1, h = t.matchId, d = t.contextId, p = t.score, n.next = 5, Ys(e, d);
										case 5:
											return f = n.sent, Fs({
												contextId: f
											}), m = r(), n.next = 10, Bs(m);
										case 10:
											return g = n.sent, Zs({
												imageShare: g
											}), v = o.getPlayer(), y = v.name, S = v.playerId, n.next = 15, l.sendMessage({
												cta: {
													default: "Play",
													localizations: {
														en_US: "Play",
														vi_VN: "Ch\u01a1i ngay"
													}
												},
												text: {
													default: y + " got " + p + " scores. So easy! Can you?",
													localizations: {
														en_US: y + " got " + p + " scores. So easy! Can you?",
														vi_VN: y + " \u0111\xe3 \u0111\u1ea1t " + p + " \u0111i\u1ec3m! Nh\u1ea5n Ch\u01a1i \u0111\u1ec3 so t\xe0i!"
													}
												},
												image: g || "",
												template: "play_turn",
												data: {
													type: Qi,
													matchId: h,
													playerId: S,
													opponentId: e,
													status: Xn
												}
											});
										case 15:
											a(Us(e)), c.event(Vt._.MESSAGE, {
												message_content_type: "FinishTurn",
												success: !0
											}), n.next = 25;
											break;
										case 19:
											if (n.prev = 19, n.t0 = n.catch(1), c.event(Vt._.MESSAGE, {
													message_content_type: "FinishTurn",
													success: !1
												}), !(n.t0 instanceof xr)) {
												n.next = 24;
												break
											}
											return n.abrupt("return");
										case 24:
											(0, i.tO)(n.t0);
										case 25:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[1, 19]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					Xs = function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							var a, r, s, o, c, l, h, d, p, f;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, a = window.game, r = a.player, s = a.facebook, o = r.getPlayer(), c = o.playerId, l = o.name, h = o.photo, d = ys(n), p = d.score, f = {
											type: Ji,
											playerId: c,
											playerName: l,
											playerPhoto: h,
											playerScore: p
										}, e.next = 7, s.sendMessage({
											cta: {
												default: "Play",
												localizations: {
													en_US: "Play",
													vi_VN: "Ch\u01a1i"
												}
											},
											text: {
												default: l + " beats your high score. Their score: " + p + ".",
												localizations: {
													en_US: l + " beats your high score. Their score: " + p + ".",
													vi_VN: l + " v\u1eeba v\u01b0\u1ee3t \u0111i\u1ec3m s\u1ed1 cao nh\u1ea5t c\u1ee7a b\u1ea1n! Ch\u01a1i l\u1ea7n n\u1eefa ch\u1ee9?"
												}
											},
											image: t || "",
											template: "play_turn",
											data: f
										});
									case 7:
										e.next = 12;
										break;
									case 9:
										e.prev = 9, e.t0 = e.catch(0), (0, i.tO)(e.t0);
									case 12:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 9]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					qs = function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							var a, r, s, o, c, l, h, d, p, f;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a = window.game, r = a.player, s = a.facebook, e.prev = 1, o = r.getPlayer(), c = o.playerId, l = o.name, h = o.photo, d = ys(n), p = d.score, f = {
											type: Ji,
											playerId: c,
											playerName: l,
											playerPhoto: h,
											playerScore: p
										}, e.next = 7, s.sendMessage({
											cta: {
												default: "Play",
												localizations: {
													en_US: "Play",
													vi_VN: "Ch\u01a1i ngay"
												}
											},
											text: {
												default: l + " got " + p + " scores. So easy! Can you?",
												localizations: {
													en_US: l + " got " + p + " scores. So easy! Can you?",
													vi_VN: l + " \u0111\xe3 \u0111\u1ea1t " + p + " \u0111i\u1ec3m! Qu\xe1 d\u1ec5 lu\xf4n. Ch\u01a1i l\u1ea1i n\xe0o!"
												}
											},
											image: t || "",
											template: "play_turn",
											data: f
										});
									case 7:
										e.next = 12;
										break;
									case 9:
										e.prev = 9, e.t0 = e.catch(1), (0, i.tO)(e.t0);
									case 12:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 9]
							])
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					Qs = function() {
						return function() {
							var e = (0, s.Z)(u().mark((function e(t, n) {
								var a, r, s, o, c, l, h, d, p, f, m, g, v;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (a = window.game, r = a.player, s = a.analytics, o = a.facebook, e.prev = 1, !FBInstant.context.getID()) {
												e.next = 5;
												break
											}
											return e.abrupt("return");
										case 5:
											return c = n(), e.next = 8, Is();
										case 8:
											return l = e.sent, Zs({
												imageShare: l
											}), h = r.getPlayer(), d = h.playerId, p = h.name, f = h.photo, m = ys(c), g = m.score, v = {
												type: Xi,
												playerId: d,
												playerName: p,
												playerPhoto: f,
												playerScore: g
											}, e.next = 15, o.sendMessage({
												cta: {
													default: "Play",
													localizations: {
														en_US: "Play",
														vi_VN: "Ch\u01a1i ngay"
													}
												},
												text: {
													default: p + " got " + g + " scores. So easy! Can you?",
													localizations: {
														en_US: p + " got " + g + " scores. So easy! Can you?",
														vi_VN: p + " \u0111\xe3 \u0111\u1ea1t " + g + " \u0111i\u1ec3m m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng. B\u1ea1n th\xec sao?"
													}
												},
												image: l || "",
												template: "play_turn",
												data: v
											});
										case 15:
											s.event(Vt._.MESSAGE, {
												message_content_type: "BestScoreContextSolo",
												success: !0
											}), e.next = 22;
											break;
										case 18:
											e.prev = 18, e.t0 = e.catch(1), s.event(Vt._.MESSAGE, {
												message_content_type: "BestScoreContextSolo",
												success: !1
											}), (0, i.tO)(e.t0);
										case 22:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 18]
								])
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}()
					},
					Js = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidMatchId", i.message = t || "Invalid match id", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					$s = n(603),
					eo = GameCore.Configs.ApiHost,
					to = (function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return "single-matches", e.next = 3, St("single-matches", t, {}, eo);
									case 3:
										return n = e.sent, e.abrupt("return", (null == n ? void 0 : n.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})))
					}(), function() {
						var e = (0, s.Z)(u().mark((function e() {
							var t;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return "single-matches/active", e.next = 3, yt("single-matches/active", {}, eo);
									case 3:
										return t = e.sent, e.abrupt("return", (null == t ? void 0 : t.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})))
					}(), function() {
						var e = (0, s.Z)(u().mark((function e(t, n) {
							var i, a;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return i = "single-matches/" + t + "/move", e.next = 3, St(i, n, {}, eo);
									case 3:
										return a = e.sent, e.abrupt("return", (null == a ? void 0 : a.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})))
					}(), function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = "single-matches/" + t + "/finish", e.next = 3, St(n, {}, {}, eo);
									case 3:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})))
					}(), function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return "matches", e.next = 3, St("matches", {
											opponentPlayerId: t
										}, {}, eo);
									case 3:
										return n = e.sent, e.abrupt("return", (null == n ? void 0 : n.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()),
					no = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = "matches/" + t + "/join", e.next = 3, St(n, {}, {}, eo);
									case 3:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					io = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = "matches/" + t, e.next = 3, yt(n, {}, eo);
									case 3:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					ao = function() {
						var e = (0, s.Z)(u().mark((function e(t, n, i, a) {
							var r, s;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return r = "matches/" + t + "/finish", e.next = 3, St(r, {
											matchId: t,
											score: n,
											level: i,
											extraData: a
										}, {}, eo);
									case 3:
										return s = e.sent, e.abrupt("return", (null == s ? void 0 : s.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n, i, a) {
							return e.apply(this, arguments)
						}
					}(),
					ro = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidMatchStatus", i.message = t || "The match status is not valid", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					so = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidOpponentId", i.message = t || "Invalid opponent id", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					oo = so,
					co = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidBlackPlayerId", i.message = t || "Invalid black player id", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					uo = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidRequestedMatchId", i.message = t || "The matchId in match data not matched with requested matchId", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					lo = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidScore", i.message = t || "The score is not valid", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					ho = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "InvalidWhitePlayerId", i.message = t || "Invalid white player id", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					po = function(e) {
						var t = e.matchId,
							n = e.currentMatchId;
						if ("" === t || "string" !== typeof t) throw new Js(null, {
							matchId: t
						});
						if ("" === n || "string" !== typeof n) throw new Js(null, {
							currentMatchId: n
						});
						if (t !== n) throw new uo(null, {
							matchId: t,
							currentMatchId: n
						})
					},
					fo = function(e) {
						var t = e.playerId,
							n = e.match,
							i = n._id,
							a = n.playerId,
							r = n.status;
						if ("" === i || "string" !== typeof i) throw new Js(null, {
							matchId: i
						});
						if ("finished" === r || "string" !== typeof r) throw new ro("This match is finished", {
							status: r
						});
						if (a !== t) throw new ji(null, {
							playerId: a,
							currentPlayerId: t
						})
					},
					mo = function(e) {
						var t = e.opponentId;
						if ("" === t || "string" !== typeof t) throw new oo(null, {
							opponentId: t
						})
					},
					go = function(e) {
						var t = e.matchId;
						if ("" === t || "string" !== typeof t) throw new Js(null, {
							matchId: t
						})
					},
					vo = function(e) {
						var t = e.match,
							n = t._id,
							i = t.whitePlayerId,
							a = t.blackPlayerId;
						if ("" === n || "string" !== typeof n) throw new Js(null, {
							matchId: n
						});
						if ("" === i || "string" !== typeof i) throw new ho(null, {
							whitePlayerId: i
						});
						if ("" === a || "string" !== typeof a) throw new co(null, {
							blackPlayerId: a
						})
					},
					yo = GameCore.Configs,
					So = yo.Match,
					bo = yo.SyncProfileFromAPI,
					Eo = function(e) {
						try {
							return GameCore.Utils.Hash.stringToHash(ot()(e))
						} catch (t) {
							return ""
						}
					},
					Ao = function(e) {
						try {
							return JSON.parse(GameCore.Utils.Hash.hashToString(e))
						} catch (t) {
							return ""
						}
					},
					wo = function() {
						return function() {
							var e = (0, s.Z)(u().mark((function e(t) {
								var n, a, s, o, c;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											e.prev = 0, n = window.game, a = n.player, n.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), t({
												type: Bn,
												payload: {}
											}), s = a.getPlayerId(), o = (0, r.Z)({}, So.LocalSingleMatchDefault, {
												status: "active",
												playerId: s,
												startedAt: Date.now()
											}), fo({
												playerId: s,
												match: o
											}), t(Po(o)), bo ? ((c = {})[So.SingleMatchStore] = o, window.FBInstant.player.setDataAsync(c)) : (0, $s.vk)(So.SingleMatchStore, o), e.next = 19;
											break;
										case 11:
											if (e.prev = 11, e.t0 = e.catch(0), t(Po(null)), !(e.t0 instanceof Js)) {
												e.next = 16;
												break
											}
											return e.abrupt("return");
										case 16:
											if (!(e.t0 instanceof ro)) {
												e.next = 18;
												break
											}
											return e.abrupt("return");
										case 18:
											(0, i.tO)(e.t0);
										case 19:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 11]
								])
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}()
					},
					To = function(e, t) {
						return function(n, a) {
							try {
								! function(e) {
									var t = e.matchId,
										n = e.score;
									if ("" === t || "string" !== typeof t) throw new Js(null, {
										matchId: t
									});
									if ("number" !== typeof n) throw new lo(null, {
										score: n
									})
								}((0, r.Z)({
									matchId: e
								}, t));
								var s = a(),
									o = os(s),
									c = ss(s);
								! function(e) {
									var t = e.matchId,
										n = e.currentMatchId;
									if ("" === t || "string" !== typeof t) throw new Js(null, {
										matchId: t
									});
									if ("" === n || "string" !== typeof n) throw new Js(null, {
										currentMatchId: n
									});
									if (t !== n) throw new uo(null, {
										matchId: t,
										currentMatchId: n
									})
								}({
									matchId: e,
									currentMatchId: o
								}), n({
									type: Nn,
									payload: {
										match: t
									}
								});
								var u = t.data;
								if (t.data = Eo(u), bo) {
									var l = {};
									l[So.SingleMatchStore] = (0, r.Z)({}, c, t, {
										_id: o
									}), window.FBInstant.player.setDataAsync(l)
								} else(0, $s.vk)(So.SingleMatchStore, t)
							} catch (h) {
								if (h instanceof Js) return;
								(0, i.tO)(h)
							}
						}
					},
					Co = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n, a) {
								var s, o, c, l, h, d, p, f, m;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											t.prev = 0, s = window.game.player, go({
												matchId: e
											}), o = a(), c = os(o), l = s.getPlayerId(), po({
												matchId: e,
												currentMatchId: c
											}), n({
												type: "MATCH_SINGLE_FINISH_REQUEST",
												payload: {
													matchId: e
												}
											}), h = ss(o), fo({
												playerId: l,
												match: h
											}), d = (0, r.Z)({}, So.LocalSingleMatchDefault, h, {
												_id: e,
												status: "finished",
												playerId: l,
												finishAt: Date.now()
											}), n(Po(d)), p = d.data, (f = (0, r.Z)({}, d)).data = Eo(p), bo ? ((m = {})[So.SingleMatchStore] = f, window.FBInstant.player.setDataAsync(m)) : (0, $s.vk)(So.SingleMatchStore, f), t.next = 26;
											break;
										case 18:
											if (t.prev = 18, t.t0 = t.catch(0), n(Po(null)), !(t.t0 instanceof Js)) {
												t.next = 23;
												break
											}
											return t.abrupt("return");
										case 23:
											if (!(t.t0 instanceof ro)) {
												t.next = 25;
												break
											}
											return t.abrupt("return");
										case 25:
											(0, i.tO)(t.t0);
										case 26:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 18]
								])
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}()
					},
					Po = function(e) {
						return {
							type: Mn,
							payload: {
								match: e
							}
						}
					},
					Io = function() {
						return {
							type: Ln,
							payload: {}
						}
					},
					ko = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n) {
								var a, r, s, o;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, a = window.game, r = a.profile, a.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), s = e.playerId, mo({
												opponentId: s
											}), n({
												type: Gn,
												payload: {
													opponentInfo: e
												}
											}), t.next = 8, to(s);
										case 8:
											return o = t.sent, vo({
												match: o
											}), t.next = 12, r.requestProfiles([s]);
										case 12:
											n(_o(o)), t.next = 23;
											break;
										case 15:
											if (t.prev = 15, t.t0 = t.catch(0), n(_o(null)), !(t.t0 instanceof Js)) {
												t.next = 20;
												break
											}
											return t.abrupt("return");
										case 20:
											if (!(t.t0 instanceof oo)) {
												t.next = 22;
												break
											}
											return t.abrupt("return");
										case 22:
											(0, i.tO)(t.t0);
										case 23:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 15]
								])
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}()
					},
					xo = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n) {
								var a, r, s, o, c, l, h, d, p;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, a = window.game, r = a.player, s = a.profile, a.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), go({
												matchId: e
											}), n({
												type: Fn,
												payload: {
													matchId: e
												}
											}), t.next = 7, no(e);
										case 7:
											if (o = t.sent, vo({
													match: o
												}), c = o.status, l = o.whitePlayerId, h = o.blackPlayerId, c !== Xn) {
												t.next = 16;
												break
											}
											return d = r.getPlayerId(), p = d === l ? h : l, t.next = 16, s.requestProfiles([p]);
										case 16:
											n(_o(o)), t.next = 25;
											break;
										case 19:
											if (t.prev = 19, t.t0 = t.catch(0), n(_o(null)), !(t.t0 instanceof Js)) {
												t.next = 24;
												break
											}
											return t.abrupt("return");
										case 24:
											(0, i.tO)(t.t0);
										case 25:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 19]
								])
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}()
					},
					Oo = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a) {
								var r, s, o, c, l, h, d, p, f;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return n.prev = 0, r = window.game, s = r.player, r.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), go({
												matchId: e
											}), a({
												type: Un,
												payload: {
													matchId: e,
													opponentInfo: t
												}
											}), n.next = 7, io(e);
										case 7:
											o = n.sent, vo({
												match: o
											}), c = o.whitePlayerId, l = o.whitePlayerScore, h = o.blackPlayerScore, d = s.getPlayerId(), p = s.getPlayerData(), f = p.score, a(_o(o, {
												score: d === c ? l : h,
												bestScore: f
											})), n.next = 23;
											break;
										case 17:
											if (n.prev = 17, n.t0 = n.catch(0), a(_o(null)), !(n.t0 instanceof Js)) {
												n.next = 22;
												break
											}
											return n.abrupt("return");
										case 22:
											(0, i.tO)(n.t0);
										case 23:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[0, 17]
								])
							})));
							return function(e) {
								return n.apply(this, arguments)
							}
						}()
					},
					Ro = function(e, t, n) {
						return function() {
							var a = (0, s.Z)(u().mark((function a(r) {
								var s, o;
								return u().wrap((function(a) {
									for (;;) switch (a.prev = a.next) {
										case 0:
											return a.prev = 0, window.game.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), go({
												matchId: e
											}), r({
												type: Zn,
												payload: {
													matchId: e,
													score: t,
													extraData: n
												}
											}), s = n.level, a.next = 8, ao(e, t, s, n);
										case 8:
											return o = a.sent, vo({
												match: o
											}), a.next = 12, r(_o(o));
										case 12:
											a.next = 20;
											break;
										case 14:
											if (a.prev = 14, a.t0 = a.catch(0), r(_o(null)), !(a.t0 instanceof Js)) {
												a.next = 19;
												break
											}
											return a.abrupt("return");
										case 19:
											(0, i.tO)(a.t0);
										case 20:
										case "end":
											return a.stop()
									}
								}), a, null, [
									[0, 14]
								])
							})));
							return function(e) {
								return a.apply(this, arguments)
							}
						}()
					},
					_o = function(e, t, n) {
						return void 0 === n && (n = null), {
							type: Hn,
							payload: {
								match: e,
								opponentInfo: t,
								current: n
							}
						}
					},
					Bo = function(e) {
						return {
							type: Yn,
							payload: {
								opponentInfo: e
							}
						}
					},
					Do = function(e, t) {
						return {
							type: Kn,
							payload: {
								matchId: e,
								players: t
							}
						}
					},
					No = function(e) {
						return {
							type: On,
							payload: {
								playerId: e
							}
						}
					},
					Mo = function(e, t) {
						return {
							type: Rn,
							payload: {
								playerId: e,
								stats: t
							}
						}
					},
					Lo = function(e) {
						return {
							type: _n,
							payload: {
								stats: e
							}
						}
					},
					Fo = function(e) {
						var t = e.contextId;
						if ("" === t || "string" !== typeof t) throw new xr(null, {
							contextId: t
						})
					},
					Go = null,
					Zo = function(e) {
						clearTimeout(Go), Go = setTimeout((function() {
							window.game.globalScene.screen.close(Ra.o4.NOTIFY_SCREEN)
						}), e)
					},
					Uo = function() {
						return function(e) {
							try {
								e(Io()), e(qo(aa))
							} catch (t) {
								(0, i.tO)(t)
							}
						}
					},
					Ho = function() {
						return function(e) {
							try {
								e(Io()), e(qo(ta))
							} catch (t) {
								(0, i.tO)(t)
							}
						}
					},
					Vo = function() {
						return function() {
							var e = (0, s.Z)(u().mark((function e(t, n) {
								var a, r, s, o;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, window.game.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), r = n(), s = Dr(r), Ot()(a = [ta, aa]).call(a, s) >= 0 && (t(Io()), t(wo())), o = null, s === na && (o = ds(r), t({
												type: Vn,
												payload: {}
											})), t(No()), e.next = 11, t(qo(s, o));
										case 11:
											e.next = 16;
											break;
										case 13:
											e.prev = 13, e.t0 = e.catch(0), (0, i.tO)(e.t0);
										case 16:
											return e.prev = 16, Zo(300), e.finish(16);
										case 19:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 13, 16, 19]
								])
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}()
					},
					Yo = function(e, t) {
						return void 0 === e && (e = "10"), void 0 === t && (t = !1),
							function(n) {
								try {
									n(Wo("reset", e, t))
								} catch (a) {
									(0, i.tO)(a)
								}
							}
					},
					Wo = function(e, t, n) {
						return void 0 === t && (t = "10"), void 0 === n && (n = !1),
							function() {
								var a = (0, s.Z)(u().mark((function a(r) {
									var s, o, c, l, h, d, p, f, m, g, v, y, S, b, E, A, w;
									return u().wrap((function(a) {
										for (;;) switch (a.prev = a.next) {
											case 0:
												if (a.prev = 0, s = window.game, o = s.player, c = s.facebook, (l = s.globalScene).screen.open(Ra.o4.NOTIFY_SCREEN, {
														message: "Loading...",
														loading: !0
													}), h = e, d = c.contextType, t || (p = GameCore.Configs.PlayerIdMock, f = GameCore.Configs.PlayerIdMock2, t = o.getPlayerId() === p ? f : p), e) {
													a.next = 17;
													break
												}
												return a.next = 9, c.chooseAsync();
											case 9:
												if (!1 !== (h = a.sent)) {
													a.next = 15;
													break
												}
												return n && l.events.emit(da.K.SWITCH, da.C.DASHBOARD_SCENE), a.next = 14, r(qo(ta));
											case 14:
												return a.abrupt("return");
											case 15:
												a.next = 27;
												break;
											case 17:
												if (!t || t === ea.playerId) {
													a.next = 25;
													break
												}
												return a.next = 20, c.createAsync(t);
											case 20:
												if (!1 !== (h = a.sent)) {
													a.next = 24;
													break
												}
												return n && l.events.emit(da.K.SWITCH, da.C.DASHBOARD_SCENE), a.abrupt("return");
											case 24:
												h || "reset" === e || (h = e);
											case 25:
												d = c.contextType, r(oa(h, d));
											case 27:
												return Fo({
													contextId: h
												}), m = o.getPlayerId(), g = o.getConnectedPlayers(), a.next = 32, c.getContextPlayers(m);
											case 32:
												return v = a.sent, t !== (y = ea).playerId && g[t] ? y = g[t] : 1 === v.length && (y = v[0]), r(No()), b = (S = y).playerId, E = S.name, A = S.photo, w = {
													playerId: b,
													name: E,
													photo: A
												}, a.next = 40, r(qo(na, w));
											case 40:
												r(oa(h, d)), a.next = 52;
												break;
											case 43:
												if (a.prev = 43, a.t0 = a.catch(0), !(a.t0 instanceof xr)) {
													a.next = 47;
													break
												}
												return a.abrupt("return");
											case 47:
												if ("USER_INPUT" !== (null == a.t0 ? void 0 : a.t0.code)) {
													a.next = 49;
													break
												}
												return a.abrupt("return");
											case 49:
												if ("INVALID_OPERATION" !== (null == a.t0 ? void 0 : a.t0.code)) {
													a.next = 51;
													break
												}
												return a.abrupt("return");
											case 51:
												(0, i.tO)(a.t0);
											case 52:
												return a.prev = 52, Zo(1e3), a.finish(52);
											case 55:
											case "end":
												return a.stop()
										}
									}), a, null, [
										[0, 43, 52, 55]
									])
								})));
								return function(e) {
									return a.apply(this, arguments)
								}
							}()
					},
					zo = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n) {
								var a, r, s, o, c;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, a = window.game, r = a.facebook, s = a.globalScene, o = a.analytics, s.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), c = r.getContextID(), Fo({
												contextId: c
											}), o.event(Vt._.JOIN_GROUP, {
												group_id: c
											}), t.next = 8, n(qo(ia, e));
										case 8:
											t.next = 17;
											break;
										case 10:
											if (t.prev = 10, t.t0 = t.catch(0), !(t.t0 instanceof xr)) {
												t.next = 14;
												break
											}
											return t.abrupt("return");
										case 14:
											if ("INVALID_OPERATION" !== (null == t.t0 ? void 0 : t.t0.code)) {
												t.next = 16;
												break
											}
											return t.abrupt("return");
										case 16:
											(0, i.tO)(t.t0);
										case 17:
											return t.prev = 17, Zo(1e3), t.finish(17);
										case 20:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 10, 17, 20]
								])
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}()
					},
					Ko = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(a, r) {
								var s, o, c, l, h, d, p, f, m, g, v, y, S, b, E;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											if (n.prev = 0, s = window.game, o = s.player, c = s.profile, l = s.facebook, (h = s.globalScene).screen.open(Ra.o4.NOTIFY_SCREEN, {
													message: "Loading...",
													loading: !0
												}), d = r(), p = o.getPlayerId(d), !((f = o.getConnectedPlayers(d)).length > 0) || f[t]) {
												n.next = 9;
												break
											}
											return h.events.emit(da.K.SWITCH, da.C.DASHBOARD_SCENE), n.abrupt("return");
										case 9:
											return m = ea, n.next = 12, l.getContextPlayers(p);
										case 12:
											if (g = n.sent, t === p || t === m.playerId || !f[t]) {
												n.next = 17;
												break
											}
											m = f[t], n.next = 25;
											break;
										case 17:
											if (1 !== g.length) {
												n.next = 21;
												break
											}
											m = g[0], n.next = 25;
											break;
										case 21:
											return n.next = 23, c.requestProfiles([t]);
										case 23:
											(v = c.getProfiles())[t] && (m = v[t]);
										case 25:
											return n.next = 27, a(Oo(e, m));
										case 27:
											if (d = r(), ps(d, {
													playerId: p
												}) !== ea.playerId) {
												n.next = 32;
												break
											}
											return n.next = 32, a(xo(e));
										case 32:
											if (d = r(), ps(d, {
													playerId: p
												}) === p || !f[t]) {
												n.next = 37;
												break
											}
											return a(Yo(t, !0)), n.abrupt("return");
										case 37:
											if (ls(d) === e) {
												n.next = 41;
												break
											}
											return h.events.emit(da.K.SWITCH, da.C.DASHBOARD_SCENE), n.abrupt("return");
										case 41:
											if (y = hs(d), S = fs(d, {
													playerId: p
												}), a(Jo({
													mode: na,
													status: y
												})), b = l.getContextID(), E = l.contextType, a(oa(b, E)), !S) {
												n.next = 50;
												break
											}
											return h.events.emit(da.K.SWITCH, da.C.GAME_SCENE), n.abrupt("return");
										case 50:
											h.events.emit(da.K.SWITCH, da.C.GAME_SCENE), n.next = 56;
											break;
										case 53:
											n.prev = 53, n.t0 = n.catch(0), (0, i.tO)(n.t0);
										case 56:
											return n.prev = 56, Zo(1e3), n.finish(56);
										case 59:
										case "end":
											return n.stop()
									}
								}), n, null, [
									[0, 53, 56, 59]
								])
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					jo = function(e) {
						return function() {
							var t = (0, s.Z)(u().mark((function t(n, a) {
								var r, o, c, l, h, d, p, f, m, g, v, y, S, b, E, A, w, T, C, P, I, k, x, O, R, _, B, D, N;
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, r = window.game, o = r.analytics, c = r.facebook, l = r.globalScene, h = r.player, l.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), d = a(), p = Dr(d), f = h.getPlayerData(), m = f.score, g = ys(d), v = g.score, y = void 0 === v ? 0 : v, S = g.level, b = void 0 === S ? 0 : S, E = 0, m < y && (E = 2e3), setTimeout((function() {
												e && n(Jr(y))
											}), E), n(Xo(y)), t.next = 14, n(Qo(p, {
												score: y
											}));
										case 14:
											if (d = a(), A = Mr(d), w = Lr(d), T = Math.floor((w - A) / 1e3), o.event(Vt._.MATCH_END, {
													game_mode: GameCore.Utils.String.toUpperCamelCase(p),
													level: b,
													level_name: "level_" + b,
													time_played: T
												}), C = c.getContextID(), p === ia && C && n(function() {
													var e = (0, s.Z)(u().mark((function e(t, n) {
														var a, r, s, o, c, l, h, d, p;
														return u().wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	if (a = window.game.analytics, e.prev = 1, r = FBInstant.context.getID(), Fs({
																			contextId: r
																		}), s = n(), o = gs(s), c = o.playerId, l = o.score, h = ys(s), d = h.score, !c || c === ea.playerId) {
																		e.next = 25;
																		break
																	}
																	if (!(d > l)) {
																		e.next = 18;
																		break
																	}
																	return e.next = 13, Ds(s);
																case 13:
																	return p = e.sent, e.next = 16, Xs(p, s);
																case 16:
																	e.next = 23;
																	break;
																case 18:
																	return e.next = 20, ks(s);
																case 20:
																	return p = e.sent, e.next = 23, qs(p, s);
																case 23:
																	e.next = 30;
																	break;
																case 25:
																	return e.next = 27, ks(s);
																case 27:
																	return p = e.sent, e.next = 30, qs(p, s);
																case 30:
																	Zs({
																		imageShare: p
																	}), a.event(Vt._.MESSAGE, {
																		message_content_type: "InviteGroup",
																		success: !0
																	}), e.next = 38;
																	break;
																case 34:
																	e.prev = 34, e.t0 = e.catch(1), a.event(Vt._.MESSAGE, {
																		message_content_type: "InviteGroup",
																		success: !0
																	}), (0, i.tO)(e.t0);
																case 38:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[1, 34]
														])
													})));
													return function(t, n) {
														return e.apply(this, arguments)
													}
												}()), !C || p !== na) {
												t.next = 30;
												break
											}
											if (P = ds(d), (I = P.playerId) && I !== ea.playerId) {
												t.next = 25;
												break
											}
											return t.abrupt("return");
										case 25:
											k = vs(d), x = k[I] || {}, O = x.score, R = void 0 === O ? 0 : O, _ = us(d), B = _._id, D = _.whitePlayerFinish, N = _.blackPlayerFinish, n(D && N ? y > R ? Ks(I, {
												matchId: B,
												contextId: C
											}) : zs(I, {
												matchId: B,
												contextId: C
											}) : js(I, {
												matchId: B,
												contextId: C,
												score: y
											}));
										case 30:
											t.next = 35;
											break;
										case 32:
											t.prev = 32, t.t0 = t.catch(0), (0, i.tO)(t.t0);
										case 35:
											return t.prev = 35, Zo(300), t.finish(35);
										case 38:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[0, 32, 35, 38]
								])
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}()
					},
					Xo = function(e) {
						return function(t) {
							try {
								var n = window.game.player,
									a = n.getPlayerId();
								fr(a, e).catch((function(e) {
									(0, i.tO)(new Error(e))
								}));
								var r = n.getPlayerData(),
									s = r.score,
									o = void 0 === s ? 0 : s,
									c = r.level;
								o < e && n.setBestScore(e);
								var u = {
									score: e,
									level: c
								};
								t(Mo(a, u)), t(Lo(u))
							} catch (l) {
								if (l instanceof _r) return;
								(0, i.tO)(l)
							}
						}
					},
					qo = function(e, t) {
						return void 0 === t && (t = null),
							function() {
								var n = (0, s.Z)(u().mark((function n(a, o) {
									var c, l, h, d, p, f, m, g, v, y, S, b, E, A, w;
									return u().wrap((function(n) {
										for (;;) switch (n.prev = n.next) {
											case 0:
												if (n.prev = 0, l = window.game, h = l.player, d = l.analytics, p = l.facebook, f = l.globalScene, m = p.getContextID(), g = 0, v = o(), d.event(Vt._.MATCH_START, {
														game_mode: GameCore.Utils.String.toUpperCamelCase(e),
														level: 1,
														level_name: "level_1"
													}), a({
														type: Cn,
														payload: {}
													}), -1 === Ot()(c = [ta, aa]).call(c, e)) {
													n.next = 16;
													break
												}
												return n.next = 10, a(function() {
													var e = (0, s.Z)(u().mark((function e(t) {
														var n, a, s, o;
														return u().wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	if (e.prev = 0, n = window.game.player, t({
																			type: Dn,
																			payload: {}
																		}), a = n.getPlayerId(), s = {}, !bo) {
																		e.next = 15;
																		break
																	}
																	return e.next = 8, window.FBInstant.player.getDataAsync([So.SingleMatchStore]);
																case 8:
																	if (e.t0 = e.sent, e.t0) {
																		e.next = 11;
																		break
																	}
																	e.t0 = {};
																case 11:
																	e.t1 = So.SingleMatchStore, s = e.t0[e.t1], e.next = 16;
																	break;
																case 15:
																	s = (0, $s.Th)(So.SingleMatchStore) || {};
																case 16:
																	console.log("match ================= ", s), o = s.data, s = (0, r.Z)({}, s, {
																		data: Ao(o)
																	}), console.log("match 111111 ================= ", s), fo({
																		playerId: a,
																		match: s
																	}), console.log("match recccccccc ================= ", s), t(Po(s)), e.next = 36;
																	break;
																case 25:
																	if (e.prev = 25, e.t2 = e.catch(0), console.log("error ========= ", e.t2), t(Po(null)), !(e.t2 instanceof Js)) {
																		e.next = 31;
																		break
																	}
																	return e.abrupt("return");
																case 31:
																	if (!(e.t2 instanceof ji)) {
																		e.next = 33;
																		break
																	}
																	return e.abrupt("return");
																case 33:
																	if (!(e.t2 instanceof ro)) {
																		e.next = 35;
																		break
																	}
																	return e.abrupt("return");
																case 35:
																	(0, i.tO)(e.t2);
																case 36:
																case "end":
																	return e.stop()
															}
														}), e, null, [
															[0, 25]
														])
													})));
													return function(t) {
														return e.apply(this, arguments)
													}
												}());
											case 10:
												if (v = o(), os(v)) {
													n.next = 15;
													break
												}
												return n.next = 15, a(wo());
											case 15:
												g = cs(v);
											case 16:
												if (e === ia && a(Bo(t)), e !== na) {
													n.next = 26;
													break
												}
												return n.next = 20, a(ko(t));
											case 20:
												v = o(), y = ls(v), S = ds(v), b = S.playerId, m || (m = window.FBInstant.context.getID()), E = bs(v, {
													opponentId: b
												}), m && b && !E && a(Ws(b, {
													contextId: m,
													matchId: y
												}));
											case 26:
												"online" === e && a(function() {
													var e = (0, s.Z)(u().mark((function e(t) {
														var n, i, a, r, s, o, c, l;
														return u().wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	a = window.game.player, r = a.getPlayer(), s = r.playerId, o = r.name, c = r.photo, t({
																		type: zn,
																		payload: {
																			playerId: s
																		}
																	}), l = {}, me()(n = Za()(i = new Array(20)).call(i, null)).call(n, (function(e, t) {
																		var n = "0" + (t + 1);
																		l[n] = {
																			playerId: n,
																			name: "MPlayer " + n,
																			photo: "./assets/images/others/avatar.png"
																		}
																	})), l[s] = {
																		playerId: s,
																		name: o,
																		photo: c
																	}, t(Do("mock", l));
																case 7:
																case "end":
																	return e.stop()
															}
														}), e)
													})));
													return function(t) {
														return e.apply(this, arguments)
													}
												}()), A = h.getPlayerData(v), w = A.score, a(Lo({
													score: g,
													bestScore: void 0 === w ? 0 : w
												})), a({
													type: Pn,
													payload: {
														mode: e,
														contextId: m
													}
												}), a(ca(e)), f.events.emit(da.K.SWITCH, da.C.GAME_SCENE), As.emit(Or.START_GAME), n.next = 42;
												break;
											case 35:
												if (n.prev = 35, n.t0 = n.catch(0), !(n.t0 instanceof Js)) {
													n.next = 41;
													break
												}
												return window.game.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
													message: "Sorry!, you can now\ncreate this match!",
													duration: 2500,
													loading: !1
												}), n.abrupt("return");
											case 41:
												(0, i.tO)(n.t0);
											case 42:
												return n.prev = 42, Zo(0), n.finish(42);
											case 45:
											case "end":
												return n.stop()
										}
									}), n, null, [
										[0, 35, 42, 45]
									])
								})));
								return function(e, t) {
									return n.apply(this, arguments)
								}
							}()
					},
					Qo = function(e, t) {
						return function() {
							var n = (0, s.Z)(u().mark((function n(i, a) {
								var r, s, o, c, l, h, d, p, f, m, g;
								return u().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											if (s = window.game, o = s.player, s.globalScene, c = t.score, l = void 0 === c ? 0 : c, h = t.level, d = void 0 === h ? 0 : h, p = a(), !(Ot()(r = [ta, aa]).call(r, e) >= 0)) {
												n.next = 7;
												break
											}
											return f = os(p), n.next = 7, i(Co(f));
										case 7:
											if (e === ia && (i({
													type: Wn,
													payload: {}
												}), m = o.getPlayerId(), i(Mo(m, t))), e !== na) {
												n.next = 12;
												break
											}
											return g = ls(p), n.next = 12, i(Ro(g, l, {
												level: d
											}));
										case 12:
											i({
												type: In,
												payload: {
													mode: e
												}
											}), As.emit(Or.GAME_OVER);
										case 14:
										case "end":
											return n.stop()
									}
								}), n)
							})));
							return function(e, t) {
								return n.apply(this, arguments)
							}
						}()
					},
					Jo = function(e) {
						return function(t) {
							var n = e.mode,
								a = e.status;
							t({
								type: kn,
								payload: {
									mode: n,
									status: a
								}
							}), (0, i.sw)("game-mode", n)
						}
					},
					$o = function() {
						return function(e, t) {
							var n = t(),
								i = ys(n).level,
								a = void 0 === i ? 0 : i,
								r = Dr(n);
							window.game.analytics.event(Vt._.MATCH_RESCUE, {
								game_mode: GameCore.Utils.String.toUpperCamelCase(r),
								level: a,
								level_name: "level_" + a
							}), e({
								type: xn,
								payload: {}
							})
						}
					},
					ec = n(629),
					tc = n(624),
					nc = {
						targets: [],
						duration: 600,
						ease: Phaser.Math.Easing.Back.Out,
						props: {
							y: {
								from: 500,
								to: 0
							}
						}
					},
					ic = function(e) {
						function t(t) {
							return e.call(this, nc, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					ac = function(e) {
						var t = e ? e.split("_") : [],
							n = t.length > 0 ? t[0] : "en_US";
						switch (n) {
							case "id":
							case "in":
								n = "id"
						}
						return n
					},
					rc = n(621),
					sc = function(e) {
						function t(t, n) {
							var i;
							(i = e.call(this, t) || this).payload = void 0, i.loading = void 0, i.photo = void 0, i.avtFrame = void 0, i.background = void 0, i.loadPhotoTimer = void 0, i.handleLoadPhotoAfterDelay = function(e, t) {
								return function() {
									var n = i.scene.textures.get(e);
									n && n.key === e ? i.handleLoadComplete(e) : (i.scene.load.once("filecomplete-image-" + e, i.handleLoadComplete), i.scene.load.image(e, t), i.scene.load.start())
								}
							}, i.handleLoadComplete = function(e) {
								if (i.scene) {
									var t = i.payload,
										n = t.id,
										a = t.radius,
										r = void 0 === a ? 0 : a;
									if (n && n === e) {
										var s = n + "_bordered_" + r,
											o = r > 0 ? s : n,
											c = i.scene.textures.get(o);
										if (c && c.key === o) i.setPhoto(c.key);
										else if (0 != r && r < 100) {
											if (!GameCore.Utils.Image.drawBorder({
													scene: i.scene,
													key: n,
													newKey: s,
													radius: r
												})) return void i.showLoading(!1);
											i.setPhoto(s)
										} else if (100 == r) {
											if (!GameCore.Utils.Image.drawCircle({
													scene: i.scene,
													key: n,
													newKey: s
												})) return void i.showLoading(!1);
											i.setPhoto(s)
										} else i.setPhoto(n)
									}
								}
							}, i.handleLoadPhotoFailed = function(e) {
								e.key === i.payload.id && i.setDefaultAvatar(e.key)
							}, i.scene.add.existing((0, Ba.Z)(i)), i.payload = n, i.setSize(n.width, n.height), i.createBackground(), i.createLoading(), i.createPhoto(), i.createFrame();
							var a = i.payload,
								r = a.id,
								s = a.url,
								o = a.radius;
							return r && s && i.loadPhoto(r, s, o), i.addDefaultListeners(), i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.setFrame = function(e) {
							this.avtFrame.setFrame(e), this.avtFrame.setVisible(!0)
						}, n.setBackground = function(e) {
							this.background.setFrame(e)
						}, n.loadPhoto = function(e, t, n) {
							var i;
							if (void 0 === n && (n = 0), this.payload.id = e, this.payload.url = t, this.payload.radius = n, null == (i = this.loadPhotoTimer) || i.remove(), e && t) {
								var a = this.scene.textures.get(e);
								if (a && a.key === e) this.handleLoadComplete(e);
								else {
									this.showLoading(!0);
									var r = this.payload.loadDelay || 0;
									this.loadPhotoTimer = this.scene.time.delayedCall(r, this.handleLoadPhotoAfterDelay(e, t))
								}
							} else this.setPhoto($i.Z.AVATAR.KEY)
						}, n.addDefaultListeners = function() {
							var e = this;
							this.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, this.handleLoadPhotoFailed), this.on(Phaser.GameObjects.Events.DESTROY, (function() {
								var t;
								null == (t = e.loadPhotoTimer) || t.remove(), e.scene.load.off(Phaser.Loader.Events.FILE_LOAD_ERROR, e.handleLoadPhotoFailed)
							}))
						}, n.setDefaultAvatar = function(e) {
							this.loadPhoto(e, $i.Z.AVATAR.FILE, this.payload.radius)
						}, n.createBackground = function() {
							var e = this.payload,
								t = e.key,
								n = e.background,
								i = e.borderWidth,
								a = void 0 === i ? 0 : i;
							this.background = this.scene.make.image({
								key: t,
								frame: n
							}), this.background.setWorldSize(this.width - a, this.height - a), this.add(this.background)
						}, n.createLoading = function() {
							this.loading = new rc.Z(this.scene), this.loading.setWorldSize(.75 * this.width, .75 * this.height), this.loading.setVisible(!1), this.add(this.loading)
						}, n.createPhoto = function() {
							this.photo = this.scene.make.image({
								x: 0,
								y: 0,
								origin: {
									x: .5,
									y: .5
								},
								visible: !1
							}), this.add(this.photo)
						}, n.createFrame = function() {
							var e = this.payload,
								t = e.key,
								n = e.frame,
								i = e.width,
								a = e.height;
							n ? (this.avtFrame = this.scene.make.image({
								key: t,
								frame: n
							}), this.avtFrame.setWorldSize(i, a)) : this.avtFrame = this.scene.make.image({
								x: 0,
								y: 0,
								origin: {
									x: .5,
									y: .5
								},
								visible: !1
							}), this.add(this.avtFrame)
						}, n.showLoading = function(e) {
							this.photo.setVisible(!e), this.loading.setVisible(e)
						}, n.setPhoto = function(e) {
							this.showLoading(!1), this.photo.setTexture(e), this.photo.setFrame(0);
							var t = this.payload,
								n = t.width,
								i = t.height,
								a = Math.min(n, i) - (this.payload.borderWidth || 8);
							this.photo.setWorldSize(a, a), Phaser.Display.Align.In.Center(this.photo, this.background)
						}, t
					}(Phaser.GameObjects.Container),
					oc = sc,
					cc = Oa.Z.DEFAULT,
					uc = cc.KEY,
					lc = cc.FRAME,
					hc = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, {
								key: uc,
								frame: lc.AVATAR_BORDER,
								background: lc.AVATAR_BACKGROUND,
								width: 66,
								height: 66,
								borderWidth: 8
							}) || this).scene = void 0, n.scene = t, n
						}
						return (0, o.Z)(t, e), t
					}(oc),
					dc = hc,
					pc = Oa.Z.DEFAULT,
					fc = pc.KEY,
					mc = pc.FRAME,
					gc = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t) || this).scene = void 0, i.avatar = void 0, i.payload = void 0, i.buttonPlay = void 0, i.playerScore = void 0, i.scene = t, i.createAvatar(), i.createButtonPlay(), n && i.updateInfo(n), i.scene.add.existing((0, Ba.Z)(i)), i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateInfo = function(e) {
							this.payload = e, this.updateAvatar()
						}, n.setScore = function(e) {
							this.playerScore.setText(e)
						}, n.createAvatar = function() {
							this.avatar = new dc(this.scene), Phaser.Display.Align.In.Center(this.avatar, this, 0, -20), this.add(this.avatar)
						}, n.updateAvatar = function() {
							var e = this.payload,
								t = e.playerId,
								n = e.photo;
							this.avatar.loadPhoto(t, n, 50)
						}, n.createButtonPlay = function() {
							this.buttonPlay = this.scene.make.image({
								key: fc,
								frame: mc.BUTTON_PLAY
							}), this.buttonPlay.setName("Play"), this.buttonPlay.setWorldSize(66, 33), this.add(this.buttonPlay), Phaser.Display.Align.In.BottomCenter(this.buttonPlay, this.avatar, 0, 42), this.add(this.buttonPlay)
						}, n.setFrameButtonPlay = function(e) {
							this.buttonPlay.setFrame(e)
						}, n.hideButtonPlay = function() {
							this.buttonPlay.setVisible(!1)
						}, (0, Z.Z)(t, [{
							key: "onClick",
							set: function(e) {
								this.setSize(66, 100), this.setInteractive({
									useHandCursor: !0
								}), this.off(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN), this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, e)
							}
						}]), t
					}(Phaser.GameObjects.Container),
					vc = gc,
					yc = Oa.Z.DEFAULT.FRAME,
					Sc = function(e) {
						function t(t, n) {
							var a;
							return (a = e.call(this, t) || this).scene = void 0, a.payload = void 0, a.leaderBlocks = void 0, a.entrancesAnimation = void 0, a.listLeaderBlocks = void 0, a.handleChallengeFriend = function(e) {
								return function() {
									a.scene.storage.dispatch(Yo(e))
								}
							}, a.handleShareLeaderboard = function() {
								a.scene.audio.playSound(_a.BUTTON_CLICK), a.scene.storage.dispatch(Os())
							}, a.handleMatchingGroup = (0, s.Z)(u().mark((function e() {
								var t, n, r, s, o, c, l, h, d;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = a.scene, n = t.player, r = t.storage, s = t.game, o = t.facebook, e.prev = 1, s.globalScene.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading...",
												loading: !0
											}), c = n.getPlayer(), l = "global", "en" === (h = ac(c.locale)) && (l = "en"), "in" === h && (l = "in"), e.next = 10, o.matchPlayerAsync(l, !0, !0);
										case 10:
											if (d = e.sent, s.globalScene.screen.close(Ra.o4.NOTIFY_SCREEN), d) {
												e.next = 14;
												break
											}
											return e.abrupt("return");
										case 14:
											r.dispatch(zo()), e.next = 21;
											break;
										case 17:
											e.prev = 17, e.t0 = e.catch(1), s.globalScene.screen.close(Ra.o4.NOTIFY_SCREEN), e.t0 instanceof Error && (0, i.tO)(e.t0);
										case 21:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 17]
								])
							}))), a.scene = t, a.setName("LeadersBar"), a.listLeaderBlocks = [], a.createLeaderBlocks(), a.createEntrancesAnimation(), n && a.updateInfo(n), a.scene.add.existing((0, Ba.Z)(a)), a
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateInfo = function(e) {
							var t = this;
							this.payload = e;
							var n, i = !1,
								a = this.payload;
							a.playerId;
							(a.leaders.forEach((function(e) {
								var n, a = t.leaderBlocks.getFirstDead(!0);
								a.updateInfo(e), -1 === e.score ? (a.setFrameButtonPlay(yc.BUTTON_RANDOM), a.onClick = t.handleMatchingGroup) : e.playerId === t.payload.playerId ? a.onClick = t.handleShareLeaderboard : (a.setFrameButtonPlay(yc.BUTTON_PLAY), a.onClick = t.handleChallengeFriend(e.playerId)), t.add(a), a.setVisible(!0), a.setActive(!0), Ot()(n = t.listLeaderBlocks).call(n, a) < 0 && (i = !0)
							})), this.alignBlocks(), i) && (this.listLeaderBlocks = pe()(n = this.leaderBlocks.getChildren()).call(n, (function(e) {
								return e.active
							})), this.createEntrancesAnimation());
							this.runAnimation()
						}, n.killAndHideAll = function() {
							var e = this;
							this.removeAll(!1), this.leaderBlocks.getChildren().forEach((function(t) {
								return e.leaderBlocks.killAndHide(t)
							}))
						}, n.runAnimation = function() {
							this.leaderBlocks.setAlpha(0), this.entrancesAnimation.play()
						}, n.createEntrancesAnimation = function() {
							this.entrancesAnimation = new ic({
								targets: this.listLeaderBlocks,
								delay: this.scene.tweens.stagger(50, {
									start: 400
								}),
								props: {
									y: {
										from: 100,
										to: 0
									},
									alpha: {
										from: 0,
										to: 1
									}
								}
							})
						}, n.alignBlocks = function() {
							var e = -(this.leaderBlocks.getLength() - 1) / 2 * 90;
							this.leaderBlocks.setX(e, 90)
						}, n.createLeaderBlocks = function() {
							this.leaderBlocks = this.scene.add.group({
								classType: vc
							})
						}, t
					}(Phaser.GameObjects.Container),
					bc = Sc,
					Ec = Oa.Z.DEFAULT,
					Ac = Ec.KEY,
					wc = Ec.FRAME,
					Tc = function(e) {
						function t(t, n, i, a, r) {
							var s;
							return (s = e.call(this, t, n, i) || this).top = void 0, s.mid = void 0, s.bottom = void 0, s.setSize(a, r), s.scene.add.existing((0, Ba.Z)(s)), s.createBackground(), s.updatePopupSize(), s.alignPopupImages(), s
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createBackground = function() {
							this.top = this.scene.make.image({
								key: Ac,
								frame: wc.POPUP_TOP
							}), this.mid = this.scene.make.image({
								key: Ac,
								frame: wc.POPUP_MID
							}), this.bottom = this.scene.make.image({
								key: Ac,
								frame: wc.POPUP_BOTTOM
							}), this.add([this.top, this.mid, this.bottom])
						}, n.updatePopupSize = function() {
							this.top.setWorldSize(this.width, this.width * this.top.height / this.top.width), this.bottom.setWorldSize(this.width, this.width * this.bottom.height / this.bottom.width), this.mid.setWorldSize(this.width, this.height - this.top.displayHeight - this.bottom.displayHeight)
						}, n.alignPopupImages = function() {
							Phaser.Display.Align.In.Center(this.top, this, 0, -this.mid.displayHeight / 2 - this.top.displayHeight / 2), Phaser.Display.Align.In.Center(this.mid, this), Phaser.Display.Align.In.Center(this.bottom, this, 0, this.mid.displayHeight / 2 + this.bottom.displayHeight / 2)
						}, t
					}(Phaser.GameObjects.Container),
					Cc = Tc,
					Pc = {
						targets: [],
						yoyo: !0,
						duration: 120,
						ease: Phaser.Math.Easing.Circular.Out,
						props: {
							scale: {
								from: 1,
								to: 1.3
							}
						}
					},
					Ic = function(e) {
						function t(t) {
							return e.call(this, Pc, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					kc = n(626),
					xc = {
						targets: [],
						duration: 400,
						ease: kc.Z,
						props: {
							scale: "-=0.1"
						}
					},
					Oc = function(e) {
						function t(t) {
							return e.call(this, xc, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					Rc = function(e) {
						function t(t, n, i, a, r, s) {
							var o;
							return void 0 === s && (s = !1), (o = e.call(this, t) || this).useSound = !0, o.isClicked = !1, o.scaleUp = -1, o.scaleDown = -1, o.button = void 0, o.upAnimation = void 0, o.downAnimation = void 0, o.isUsePixelPerfect = !1, o.hitArea = void 0, o.hitZone = void 0, o.scaleDownPress = void 0, o.parentName = void 0, o.handelObjectDestroy = function() {
								o.scene && o.scene.events.off(Phaser.Scenes.Events.SLEEP, o.handleSceneSleep)
							}, o.handleSceneSleep = function() {
								o.scene && o.scene.tweens.killTweensOf((0, Ba.Z)(o))
							}, o.handlePointerDown = function() {
								var e, t;
								o.isClicked || null != (e = o.upAnimation) && null != (t = e.tween) && t.isPlaying() || (o.isClicked = !0, o.runDownAnimation())
							}, o.handleOnClick = function(e) {
								return function() {
									var t, n, i, a;
									o.isClicked && (null != (t = o.upAnimation) && null != (n = t.tween) && n.isPlaying() || (o.isClicked = !1, o.runUpAnimation(), null == (i = o.upAnimation) || null == (a = i.tween) || a.once(Phaser.Tweens.Events.TWEEN_COMPLETE, (function() {
										o.logButtonEvent(), o.addDebugData(), o.processCallback(e)
									}))))
								}
							}, o.handlePointerOut = function() {
								var e, t;
								o.isClicked && (null != (e = o.upAnimation) && null != (t = e.tween) && t.isPlaying() || (o.isClicked = !1, o.runUpAnimation()))
							}, o.runDownAnimation = function() {
								var e; - 1 === o.scaleDown && (o.scaleUp = o.scale, o.scaleDown = o.scaleDownPress), o.useSound && o.scene.audio.playSound(_a.BUTTON_CLICK), null == (e = o.downAnimation) || e.remove(), o.downAnimation = new Oc({
									targets: [(0, Ba.Z)(o)],
									duration: 150,
									props: {
										scale: o.scaleDown
									},
									onUpdate: function() {
										o.hitZone.scale = 1 / o.scale
									}
								}), o.downAnimation.play()
							}, o.runUpAnimation = function() {
								var e; - 1 !== o.scaleUp && (null == (e = o.upAnimation) || e.remove(), o.upAnimation = new Oc({
									targets: [(0, Ba.Z)(o)],
									duration: 150,
									props: {
										scale: o.scaleUp
									},
									onUpdate: function() {
										o.hitZone.scale = 1 / o.scale
									}
								}), o.upAnimation.play())
							}, o.isUsePixelPerfect = s, o.setDepth(ka.Z.BUTTON), o.createButton(n, i, a, r), o.updateSize(), o.listenEvents(), o.scene.add.existing((0, Ba.Z)(o)), o
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.listenEvents = function() {
							this.scene.events.on(Phaser.Scenes.Events.SLEEP, this.handleSceneSleep), this.once(Phaser.GameObjects.Events.DESTROY, this.handelObjectDestroy)
						}, n.processCallback = function(e) {
							var t, n, i;
							null == (t = this.upAnimation) || t.stop(), null == (n = this.downAnimation) || n.stop(), null == (i = this.scene) || i.tweens.killTweensOf(this), -1 !== this.scaleUp && this.setScale(this.scaleUp), e()
						}, n.setDisabled = function(e) {
							var t, n;
							e ? (this.setAlpha(.5), null == (t = this.hitArea) || t.disableInteractive()) : (this.setAlpha(1), null == (n = this.hitArea) || n.setInteractive())
						}, n.createButton = function(e, t, n, i) {
							this.button = this.scene.add.image(0, 0, e, t), n && i && this.button.setWorldSize(n, i), this.scaleDownPress = this.scale - .1;
							var a = this.button,
								r = a.displayWidth,
								s = a.displayHeight;
							this.hitZone = this.scene.make.zone({
								displayWidth: r,
								displayHeight: s
							}), this.add([this.button, this.hitZone])
						}, n.updateSize = function() {
							var e = this.button,
								t = e.width,
								n = e.height,
								i = t / 100 * 10,
								a = n / 100 * 10,
								r = i < 10 ? i : 10,
								s = a < 10 ? a : 10;
							this.setSize(t + r, n + s), this.hitZone.setSize(t + r, n + s)
						}, n.addDebugData = function() {
							var e = this.getParentName(),
								t = this.name;
							(0, i.sw)("ui-click", e + ":" + t)
						}, n.logButtonEvent = function() {
							var e = this.getParentName(),
								t = this.name;
							this.scene.analytics.event(Vt._.BUTTON_CLICK, {
								button_name: t,
								screen_name: e
							})
						}, n.getParentName = function() {
							if (this.parentName) return this.parentName;
							for (var e = this.parentContainer; e;) {
								if (e instanceof GameCore.Screen) {
									var t = e;
									return this.parentName = t.getScreenName(), this.parentName
								}
								e = e.parentContainer
							}
							return this.parentName = this.scene.getSceneName(), this.parentName
						}, (0, Z.Z)(t, [{
							key: "onClick",
							set: function(e) {
								this.isUsePixelPerfect ? (this.hitArea = this.button, this.hitArea.setInteractive({
									useHandCursor: !0,
									pixelPerfect: !0
								})) : (this.hitArea = this.hitZone, this.updateSize(), this.hitArea.setInteractive({
									useHandCursor: !0
								})), this.hitArea.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.handlePointerDown), this.hitArea.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.handleOnClick(e)), this.hitArea.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, this.handlePointerOut)
							}
						}, {
							key: "isUsePixelPerFect",
							get: function() {
								return this.isUsePixelPerfect
							}
						}]), t
					}(Phaser.GameObjects.Container),
					_c = Rc,
					Bc = n(618),
					Dc = Oa.Z.DEFAULT,
					Nc = Dc.KEY,
					Mc = Dc.FRAME,
					Lc = function(e) {
						function t(t, n, i, a, r) {
							var s;
							return (s = e.call(this, t, n, i) || this).buttonPlay = void 0, s.buttonShare = void 0, s.buttonClose = void 0, s.counterAnimation = void 0, s.scoreAnimation = void 0, s.entrancesAnimation = void 0, s.tweenIconCup = void 0, s.tweenScore = void 0, s.tweenBestScore = void 0, s.payload = void 0, s.top = void 0, s.mid = void 0, s.bottom = void 0, s.iconCup = void 0, s.textScore = void 0, s.textBestScore = void 0, s.scoreBlock = void 0, s.bestScoreBlock = void 0, s.setSize(a, r), s.createBackground(), s.createTitle(), s.createIconCup(), s.createScoreBlock(), s.createBestScoreBlock(), s.createButtonPlay(), s.createButtonShare(), s.updatePopupSize(), s.alignPopupImages(), s.createScoreAnimation(), s.createButtonClose(), s.scene.add.existing((0, Ba.Z)(s)), s
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createButtonClose = function() {
							this.buttonClose = new _c(this.scene, Nc, Mc.BUTTON_CLOSE, 25, 25), this.buttonClose.setName("Close"), this.add(this.buttonClose), Phaser.Display.Align.In.TopRight(this.buttonClose, this, 5, 35)
						}, n.createBackground = function() {
							this.top = this.scene.make.image({
								key: Nc,
								frame: Mc.POPUP_TOP
							}), this.mid = this.scene.make.image({
								key: Nc,
								frame: Mc.POPUP_MID
							}), this.bottom = this.scene.make.image({
								key: Nc,
								frame: Mc.POPUP_BOTTOM
							}), this.add([this.top, this.mid, this.bottom])
						}, n.createTitle = function() {
							var e = this.scene.add.container(),
								t = this.scene.make.image({
									key: Nc,
									frame: Mc.RIBBON_GAME_OVER
								});
							t.setWorldSize(290, 88), e.add(t), Phaser.Display.Align.In.Center(t, e);
							var n = this.scene.make.image({
								key: Nc,
								frame: Mc.TEXT_GAME_OVER
							});
							n.setWorldSize(221, 32), e.add(n), Phaser.Display.Align.In.Center(n, t, 0, -8), this.add(e), Phaser.Display.Align.In.TopCenter(e, this, 0, -41)
						}, n.createIconCup = function() {
							this.iconCup = this.scene.make.image({
								key: Nc,
								frame: Mc.ICON_CUP_BG
							}), this.iconCup.setWorldSize(52, 52);
							var e = this.iconCup.scale;
							this.iconCup.setAlpha(0).setScale(0), this.add(this.iconCup), Phaser.Display.Align.In.Center(this.iconCup, this, 0, -35), this.tweenIconCup = this.scene.tweens.add({
								targets: this.iconCup,
								paused: !0,
								duration: 200,
								scale: {
									from: 0,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createScoreBlock = function() {
							this.scoreBlock = this.scene.add.container();
							var e = this.scene.make.image({
								key: Nc,
								frame: Mc.TEXT_SCORE
							});
							e.setWorldSize(73.5, 16.5), this.scoreBlock.add(e), Phaser.Display.Align.In.Center(e, this.scoreBlock), this.textScore = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(65),
								origin: {
									x: .5,
									y: .5
								},
								text: "0"
							}), this.scoreBlock.add(this.textScore), Phaser.Display.Align.In.Center(this.textScore, e, 0, 35), this.add(this.scoreBlock), Phaser.Display.Align.In.Center(this.scoreBlock, this, -80, 10), this.scoreBlock.setAlpha(0).setScale(0), this.tweenScore = this.scene.tweens.add({
								targets: [this.scoreBlock],
								paused: !0,
								duration: 200,
								delay: 100,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createBestScoreBlock = function() {
							this.bestScoreBlock = this.scene.add.container();
							var e = this.scene.make.image({
								key: Nc,
								frame: Mc.TEXT_BEST
							});
							e.setWorldSize(57, 16.5), this.bestScoreBlock.add(e), Phaser.Display.Align.In.Center(e, this.bestScoreBlock), this.textBestScore = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(65),
								origin: {
									x: .5,
									y: .5
								},
								text: "0"
							}), this.bestScoreBlock.add(this.textBestScore), Phaser.Display.Align.In.Center(this.textBestScore, e, 0, 35), this.add(this.bestScoreBlock), Phaser.Display.Align.In.Center(this.bestScoreBlock, this, 80, 10), this.bestScoreBlock.setAlpha(0).setScale(0), this.tweenBestScore = this.scene.tweens.add({
								targets: [this.bestScoreBlock],
								paused: !0,
								duration: 200,
								delay: 200,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createButtonPlay = function() {
							this.buttonPlay = new _c(this.scene, Nc, Mc.BUTTON_GREEN_BIG, 123.5, 54), this.buttonPlay.setName("Play"), this.scoreBlock.add(this.buttonPlay);
							var e = this.scene.make.image({
								key: Nc,
								frame: Mc.ICON_PLAY
							});
							e.setWorldSize(23.5, 25.5), this.buttonPlay.add(e), Phaser.Display.Align.In.LeftCenter(e, this.buttonPlay, -22, -5);
							var t = this.scene.make.image({
								key: Nc,
								frame: Mc.TEXT_PLAY
							});
							t.setWorldSize(54, 25), this.buttonPlay.add(t), Phaser.Display.Align.In.Center(t, this.buttonPlay, 14, -3), Phaser.Display.Align.In.Center(this.buttonPlay, this.textScore, 0, 52)
						}, n.createButtonShare = function() {
							this.buttonShare = new _c(this.scene, Nc, Mc.BUTTON_BLUE_BIG, 123.5, 54), this.buttonShare.setName("Share"), this.bestScoreBlock.add(this.buttonShare);
							var e = this.scene.make.image({
								key: Nc,
								frame: Mc.ICON_SHARE
							});
							e.setWorldSize(21, 25.5), this.buttonShare.add(e), Phaser.Display.Align.In.LeftCenter(e, this.buttonShare, -18, -4);
							var t = this.scene.make.image({
								key: Nc,
								frame: Mc.TEXT_SHARE
							});
							t.setWorldSize(67, 21.5), this.buttonShare.add(t), Phaser.Display.Align.In.Center(t, this.buttonShare, 14, -5), Phaser.Display.Align.In.Center(this.buttonShare, this.textScore, 0, 52)
						}, n.updatePopupSize = function() {
							this.top.setWorldSize(this.width, this.width * this.top.height / this.top.width), this.bottom.setWorldSize(this.width, this.width * this.bottom.height / this.bottom.width), this.mid.setWorldSize(this.width, this.height - this.top.displayHeight - this.bottom.displayHeight)
						}, n.alignPopupImages = function() {
							Phaser.Display.Align.In.Center(this.top, this, 0, -this.mid.displayHeight / 2 - this.top.displayHeight / 2), Phaser.Display.Align.In.Center(this.mid, this), Phaser.Display.Align.In.Center(this.bottom, this, 0, this.mid.displayHeight / 2 + this.bottom.displayHeight / 2)
						}, n.runScoreCounter = function() {
							var e, t = this,
								n = this.payload,
								i = n.bestScore,
								a = n.currentScore;
							null == (e = this.counterAnimation) || e.remove(), this.counterAnimation = this.scene.tweens.addCounter({
								from: 0,
								to: a,
								delay: 700,
								duration: 2e3,
								completeDelay: 300,
								onUpdate: function(e) {
									t.scene.audio.playSound(_a.SCORE_COUNT);
									var n = Math.floor(e.getValue());
									t.runScoreAnimation(), t.setCurrentScore(n)
								},
								onComplete: function() {
									t.setBestScore(i), t.setCurrentScore(a), t.scene.audio.playSound(_a.GAME_OVER)
								}
							})
						}, n.setBestScore = function(e) {
							e && void 0 !== e || (e = 0), this.textBestScore.setText("" + e)
						}, n.setCurrentScore = function(e) {
							this.textScore.setText("" + e)
						}, n.createScoreAnimation = function() {
							this.scoreAnimation = new Ic({
								targets: [this.textScore],
								props: {
									scale: {
										from: 1,
										to: 1.3
									}
								}
							})
						}, n.runAnimation = function() {
							this.runScoreCounter(), this.scene.time.delayedCall(1300, (function() {}))
						}, n.runScoreAnimation = function() {
							this.scoreAnimation.play()
						}, n.runAnimContent = function() {
							this.tweenIconCup.play(), this.tweenScore.play(), this.tweenBestScore.play()
						}, n.hideContent = function() {
							this.iconCup.setAlpha(0).setScale(0), this.scoreBlock.setAlpha(0).setScale(0), this.bestScoreBlock.setAlpha(0).setScale(0)
						}, n.updateData = function(e) {
							this.payload = e;
							var t = e.bestScore,
								n = e.currentScore;
							if (n <= t) return this.setBestScore(t), this.setCurrentScore(n), this.runScoreAnimation(), void(n > 0 ? this.runScoreCounter() : this.counterAnimation = null);
							this.runAnimation()
						}, t
					}(Phaser.GameObjects.Container),
					Fc = Lc,
					Gc = Oa.Z.DEFAULT,
					Zc = Gc.KEY,
					Uc = Gc.FRAME,
					Hc = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.infoBlock = void 0, n.challengeBlock = void 0, n.animShow = void 0, n.animHide = void 0, n.onComplete = void 0, n.scene = t, n.createInfoBlock(), n.createChallengeBlock(), n.createRope(), n.createAnimShow(), n.createAnimHide(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createInfoBlock = function() {
							this.infoBlock = new Fc(this.scene, 0, 0, 326, 310.5), this.add(this.infoBlock), Phaser.Display.Align.In.Center(this.infoBlock, this, 0, -75)
						}, n.createRope = function() {
							var e = this.scene.make.image({
								key: Zc,
								frame: Uc.ICON_ROPE
							});
							e.setWorldSize(15, 51), this.add(e), Phaser.Display.Align.In.Center(e, this.infoBlock, -100, 155);
							var t = this.scene.make.image({
								key: Zc,
								frame: Uc.ICON_ROPE
							});
							t.setWorldSize(15, 51), this.add(t), Phaser.Display.Align.In.Center(t, this.infoBlock, 100, 155)
						}, n.createChallengeBlock = function() {
							this.challengeBlock = new Cc(this.scene, 0, 0, 326, 163), this.add(this.challengeBlock), Phaser.Display.Align.In.Center(this.challengeBlock, this.infoBlock, 0, 237)
						}, n.createAnimShow = function() {
							var e = this,
								t = this.scene.gameZone.height / 2,
								n = t + 100;
							this.animShow = this.scene.tweens.add({
								targets: this,
								paused: !0,
								duration: 300,
								delay: 300,
								ease: Phaser.Math.Easing.Back.Out,
								y: {
									from: n,
									to: t
								},
								scale: {
									from: .9,
									to: 1
								},
								alpha: {
									start: 0,
									from: 0,
									to: 1
								},
								onComplete: function() {
									e.infoBlock.runAnimContent()
								}
							})
						}, n.createAnimHide = function() {
							var e = this;
							this.animHide = this.scene.tweens.add({
								targets: this,
								paused: !0,
								duration: 200,
								ease: Phaser.Math.Easing.Sine,
								scale: {
									from: 1,
									to: 0
								},
								alpha: {
									start: 1,
									from: 1,
									to: 0
								},
								onComplete: function() {
									e.infoBlock.hideContent(), e.onComplete && e.onComplete(), e.onComplete = null
								}
							})
						}, n.hideContent = function(e) {
							this.onComplete = e, this.animHide.play()
						}, t
					}(Phaser.GameObjects.Container),
					Vc = Hc,
					Yc = n(628),
					Wc = n(625),
					zc = {
						targets: [],
						duration: 600,
						ease: Phaser.Math.Easing.Back.Out,
						props: {
							y: {
								from: 250,
								to: 0
							},
							scale: {
								from: .9,
								to: 1
							},
							alpha: {
								start: 0,
								from: 0,
								to: 1
							}
						}
					},
					Kc = function(e) {
						function t(t) {
							return e.call(this, zc, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					jc = Oa.Z.DEFAULT,
					Xc = jc.KEY,
					qc = jc.FRAME,
					Qc = function(e) {
						function t(t, n, i, a, r) {
							var s;
							return (s = e.call(this, t, n, i) || this).top = void 0, s.mid = void 0, s.bottom = void 0, s.setSize(a, r), s.setDepth(ka.Z.POPUP), s.createPopup(), s.scene.add.existing((0, Ba.Z)(s)), s
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createPopup = function() {
							this.createPopupImages(), this.updatePopupSize(), this.alignPopupImages()
						}, n.createPopupImages = function() {
							this.top = this.scene.add.image(0, 0, Xc, qc.POPUP_TOP), this.mid = this.scene.add.image(0, 0, Xc, qc.POPUP_MID), this.bottom = this.scene.add.image(0, 0, Xc, qc.POPUP_BOTTOM), this.add([this.top, this.mid, this.bottom])
						}, n.updatePopupSize = function() {
							this.top.setWorldSize(this.width, this.width * this.top.height / this.top.width), this.bottom.setWorldSize(this.width, this.width * this.bottom.height / this.bottom.width), this.mid.setWorldSize(this.width, this.height - this.top.displayHeight - this.bottom.displayHeight)
						}, n.alignPopupImages = function() {
							Phaser.Display.Align.In.Center(this.top, this, 0, -this.mid.displayHeight / 2 - this.top.displayHeight / 2), Phaser.Display.Align.In.Center(this.mid, this), Phaser.Display.Align.In.Center(this.bottom, this, 0, this.mid.displayHeight / 2 + this.bottom.displayHeight / 2)
						}, (0, Z.Z)(t, [{
							key: "onClose",
							set: function(e) {
								this.setInteractive({
									useHandCursor: !0
								}), this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, e)
							}
						}]), t
					}(Phaser.GameObjects.Container),
					Jc = Qc,
					$c = n(623),
					eu = Oa.Z.DEFAULT,
					tu = eu.KEY,
					nu = eu.FRAME,
					iu = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, 0, 0, tu, nu.GLARE) || this).anim = void 0, n.setWorldSize(340, 340), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.runAnimation = function() {
							var e;
							null == (e = this.anim) || e.remove(), this.anim = new $c.Z({
								targets: [this],
								repeat: -1,
								duration: 3e3
							}), this.anim.play()
						}, n.setVisible = function(t) {
							var n;
							(e.prototype.setVisible.call(this, t), t) ? this.runAnimation(): null == (n = this.anim) || n.stop();
							return this
						}, t
					}(Phaser.GameObjects.Image),
					au = iu,
					ru = n(577),
					su = n.n(ru),
					ou = function(e, t, n) {
						return void 0 === t && (t = .1), void 0 === n && (n = .04), t * e + su()(e) * n * e * e
					},
					cu = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).windX = 1, n.airFrictionX = .05, n.airFrictionY = .01, n._lastRotaion = 0, n.rotationRate = Math.random() < .5 ? -1 : 1, n.airFrictionX = .01 * Math.random() + .007, n.airFrictionY = .004 * Math.random() + .006, (0, Ba.Z)(n) || (0, Ba.Z)(n)
						}
						return (0, o.Z)(t, e), t.prototype.update = function(t, n, i) {
							for (var a = e.prototype.update.call(this, t, n, i), r = .01, s = t; s > 16.67;) this.velocityX -= ou(this.velocityX, r, this.airFrictionX) / 60 * 2, this.velocityY -= ou(this.velocityY, r, this.airFrictionY) / 60 * 2, s -= 16.67;
							return this.velocityX -= ou(this.velocityX, r, this.airFrictionX) * s / 1e3, this.velocityY -= ou(this.velocityY, r, this.airFrictionY) * s / 1e3, this.rotation = this._lastRotaion + this.rotationRate * Math.random() * Math.PI / 180 * 4, this._lastRotaion = this.rotation, a
						}, t
					}(Phaser.GameObjects.Particles.Particle),
					uu = Oa.Z.EFFECTS,
					lu = uu.KEY,
					hu = uu.FRAME,
					du = function() {
						function e(e) {
							this.listEmitter = void 0, this.emitter1 = void 0, this.emitter2 = void 0, this.gameWidth = void 0, this.gameHeight = void 0, this.delay = void 0, this.scene = void 0, this.scene = e, this.delay = 100, this.init()
						}
						var t = e.prototype;
						return t.init = function() {
							var t = [hu.FX_CONFETTI_SMALL_1, hu.FX_CONFETTI_SMALL_2, hu.FX_CONFETTI_SMALL_3, hu.FX_CONFETTI_SMALL_4];
							e.particle || (e.particle = this.scene.add.particles(lu).setDepth(ka.Z.ON_TOP));
							var n = this.scene.gameZone,
								i = n.width,
								a = n.height,
								r = this.scene.world.getZoomRatio();
							this.emitter1 = e.particle.createEmitter({
								frame: t,
								x: -20,
								y: a / 2 - 70,
								speed: {
									min: 250 / r,
									max: 3e3 / r
								},
								gravityY: 600 / r,
								scale: {
									start: .55 / r,
									end: .9 / r,
									ease: Phaser.Math.Easing.Expo.Out
								},
								angle: {
									min: 270,
									max: 360
								},
								alpha: {
									start: 1,
									end: 0,
									ease: Phaser.Math.Easing.Expo.In
								},
								lifespan: {
									min: 2e3,
									max: 4e3
								},
								maxParticles: 0,
								on: !1,
								particleClass: cu
							}), this.emitter2 = e.particle.createEmitter({
								frame: t,
								x: i + 20,
								y: a / 2 - 70,
								speed: {
									min: 250 / r,
									max: 3e3 / r
								},
								gravityY: 600 / r,
								scale: {
									start: .55 / r,
									end: .9 / r,
									ease: Phaser.Math.Easing.Expo.Out
								},
								angle: {
									min: 180,
									max: 270
								},
								alpha: {
									start: 1,
									end: 0,
									ease: Phaser.Math.Easing.Expo.In
								},
								lifespan: {
									min: 2e3,
									max: 4e3
								},
								maxParticles: 0,
								on: !1,
								particleClass: cu
							}), this.listEmitter = [this.emitter1, this.emitter2]
						}, t.start = function() {
							this.emitter1.flow(1e4, 45), this.emitter2.flow(1e4, 45), this.scene.time.delayedCall(500, this.stop.bind(this))
						}, t.stop = function() {
							this.listEmitter.forEach((function(e) {
								e.stop()
							}))
						}, t.killAll = function() {
							var e = this;
							this.listEmitter.forEach((function(t) {
								t.killAll(), t.forEachDead((function(e) {
									e.resetPosition()
								}), e)
							}))
						}, t.hide = function() {
							this.emitter1.setVisible(!1), this.emitter2.setVisible(!1)
						}, e
					}();
				du.particle = void 0, du.ribbonParticle = void 0;
				var pu = du,
					fu = Oa.Z.DEFAULT,
					mu = fu.KEY,
					gu = fu.FRAME,
					vu = function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).glare = void 0, r.popup = void 0, r.avatar = void 0, r.title = void 0, r.contents = void 0, r.buttonShare = void 0, r.bestScoreText = void 0, r.tweenGlare = void 0, r.tweenScoreText = void 0, r.popupShowUpAnimation = void 0, r.contentShowUpAnimation = void 0, r.popupFadeOutAnimation = void 0, r.confetti = void 0, r.scene = void 0, r.open = function(t) {
								e.prototype.open.call((0, Ba.Z)(r), t), r.setVisible(!0), r.runAnim();
								var n = r.scene.player.getBestScore() || 0,
									i = r.scene.player.getPlayer(),
									a = i.playerId,
									s = i.photo;
								try {
									window.ArcadeScore && "function" == typeof window.ArcadeScore.saveScoreOnce && window.ArcadeScore.saveScoreOnce(n)
								} catch (o) {}
								r.setBestScore(n), r.avatar.loadPhoto(a, s), r.scene.time.delayedCall(2e3, (function() {
									r.scene.storage.dispatch(Qs())
								})), r.runOpenAnimation(), r.scene.audio.playSound(_a.CONGRATULATION), r.scene.analytics.pageview(r.name)
							}, r.handleClosePopup = function() {
								r.scene.audio.playSound(_a.POPUP_OFF, {
									volume: .6
								}), r.runCloseAnimation(), r.popupFadeOutAnimation.next((function() {
									r.scene.screen.close(r.name)
								})), As.emit(Ta)
							}, r.handleShareBestScore = function() {
								r.scene.storage.dispatch(Ps())
							}, r.setVisible(!1), r.scene = t, r.setDepth(Ra.Ks.POPUP), r.createPopup(), r.createConfetti(), r.createPopupContent(), r.background.setAlpha(.6), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createConfetti = function() {
							this.confetti = new pu(this.scene)
						}, n.runAnim = function() {
							this.glare.setScale(0).setAlpha(0), this.bestScoreText.setScale(0).setAlpha(0), this.tweenScoreText.play(), this.tweenGlare.play()
						}, n.createPopup = function() {
							this.popup = new Jc(this.scene, 0, 0, 325, 300), this.add(this.popup), Phaser.Display.Align.In.Center(this.popup, this.zone)
						}, n.createPopupContent = function() {
							this.createTitle(), this.createAvatar(), this.createButtonShare(), this.createGlare(), this.createBestScoreText(), this.popup.add([this.title]), this.contents = this.scene.make.group({}), this.contents.addMultiple([this.avatar, this.buttonShare])
						}, n.createTitle = function() {
							this.title = this.scene.add.container();
							var e = this.scene.make.image({
								key: mu,
								frame: gu.RIBBON_MAIN
							});
							e.setWorldSize(260, 57);
							var t = this.scene.make.image({
								key: mu,
								frame: gu.TEXT_BEST_SCORE
							});
							t.setWorldSize(143, 21), Phaser.Display.Align.In.Center(t, e, 0, -3);
							var n = new _c(this.scene, mu, gu.BUTTON_CLOSE, 25, 25);
							n.useSound = !1, n.onClick = this.handleClosePopup, n.setName("Close"), Phaser.Display.Align.In.RightCenter(n, e, 36, -19), this.title.add([e, t, n]), this.popup.add(this.title), Phaser.Display.Align.In.TopCenter(this.title, this.popup, 0, -2)
						}, n.createButtonShare = function() {
							this.buttonShare = new _c(this.scene, mu, gu.BUTTON_BLUE_BIG, 122, 54), this.buttonShare.setName("Share");
							var e = this.scene.make.image({
								key: mu,
								frame: gu.TEXT_SHARE
							});
							e.setWorldSize(69, 21), this.buttonShare.add(e), Phaser.Display.Align.In.Center(e, this.buttonShare, 14, -5);
							var t = this.scene.make.image({
								key: mu,
								frame: gu.ICON_SHARE
							});
							t.setWorldSize(22.5, 27), this.buttonShare.add(t), Phaser.Display.Align.In.LeftCenter(t, this.buttonShare, -16, -5), this.popup.add(this.buttonShare), Phaser.Display.Align.In.Center(this.buttonShare, this.avatar, 0, 85), this.buttonShare.onClick = this.handleShareBestScore
						}, n.createBestScoreText = function() {
							this.bestScoreText = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(160),
								origin: {
									x: .5,
									y: .5
								}
							}), this.popup.add(this.bestScoreText), Phaser.Display.Align.In.Center(this.bestScoreText, this.popup, 0, -63), this.bestScoreText.setScale(0).setAlpha(0), this.tweenScoreText = this.scene.tweens.add({
								targets: this.bestScoreText,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Sine
							})
						}, n.createGlare = function() {
							this.glare = new au(this.scene), this.popup.add(this.glare), Phaser.Display.Align.In.Center(this.glare, this.popup, 0, -70);
							var e = this.glare.scale;
							this.glare.setScale(0).setAlpha(0), this.tweenGlare = this.scene.tweens.add({
								targets: this.glare,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 0,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Sine
							})
						}, n.createAvatar = function() {
							this.avatar = new oc(this.scene, {
								key: mu,
								frame: gu.AVATAR_BORDER_ORANGE_THIN,
								background: gu.AVATAR_BACKGROUND,
								width: 88,
								height: 90,
								borderWidth: 8
							}), this.popup.add(this.avatar), Phaser.Display.Align.In.Center(this.avatar, this.popup, 0, 20)
						}, n.runCloseAnimation = function() {
							this.runPopupExitsAnimation(0, 200)
						}, n.runPopupExitsAnimation = function(e, t) {
							var n, i = this;
							this.popupFadeOutAnimation || (this.popupFadeOutAnimation = new Yc.Z({
								targets: [this.popup],
								delay: e,
								duration: t,
								props: {
									y: 250,
									scale: 0
								},
								onComplete: function() {
									i.popup.setY(0)
								}
							})), null == (n = this.popupFadeOutAnimation) || n.play()
						}, n.setBestScore = function(e) {
							this.bestScoreText.setText("" + e)
						}, n.runOpenAnimation = function() {
							this.scene.audio.playSound(_a.POPUP_SHOW), this.runPopupEntrancesAnimation(0, 300), this.runPopupContentEntrancesAnimation(200, 300)
						}, n.runPopupEntrancesAnimation = function(e, t) {
							var n = this;
							if (!this.popupShowUpAnimation) {
								var i = this.popup,
									a = i.y,
									r = i.scale;
								this.popupShowUpAnimation = new Kc({
									targets: [this.popup],
									delay: e,
									duration: t,
									props: {
										y: {
											from: 350,
											to: a
										},
										alpha: {
											start: 1,
											from: 1,
											to: 1
										},
										scale: {
											start: 0,
											from: 0,
											to: r
										}
									},
									onComplete: function() {
										n.confetti.start()
									}
								})
							}
							this.popupShowUpAnimation.play()
						}, n.runPopupContentEntrancesAnimation = function(e, t) {
							this.contentShowUpAnimation || (this.contentShowUpAnimation = new Wc.Z({
								targets: this.contents.getChildren(),
								duration: t,
								delay: this.scene.tweens.stagger(80, {
									start: e
								}),
								props: {
									alpha: {
										start: 0,
										from: 0,
										to: 1
									}
								}
							})), this.contentShowUpAnimation.play()
						}, t
					}(GameCore.Screen),
					yu = vu,
					Su = Oa.Z.DEFAULT,
					bu = Su.KEY,
					Eu = Su.FRAME,
					Au = function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).popup = void 0, r.avatarMe = void 0, r.textScoreMe = void 0, r.avatarOpponent = void 0, r.textScoreOpponent = void 0, r.title = void 0, r.titleFrame = void 0, r.textMessage = void 0, r.contents = void 0, r.popupShowUpAnimation = void 0, r.contentShowUpAnimation = void 0, r.popupFadeOutAnimation = void 0, r.buttonShare = void 0, r.tweenButtonShare = void 0, r.buttonRestart = void 0, r.tweenButtonRestart = void 0, r.myInfoBlock = void 0, r.tweenMyInfoBlock = void 0, r.opponentInfoBlock = void 0, r.tweenOpponentInfoBlock = void 0, r.icon = void 0, r.tweenIcon = void 0, r.open = function(t) {
								e.prototype.open.call((0, Ba.Z)(r), t), r.setVisible(!0), r.updateInfo(), r.loadAvatars(), r.runAnim(), r.scene.time.delayedCall(2e3, (function() {
									r.scene.storage.dispatch(Qs())
								})), r.runOpenAnimation(), r.scene.analytics.pageview(r.name)
							}, r.close = function() {
								e.prototype.close.call((0, Ba.Z)(r)), r.icon.setAlpha(0).setVisible(!1), r.myInfoBlock.setAlpha(0).setVisible(!1), r.opponentInfoBlock.setAlpha(0).setVisible(!1), r.buttonRestart.setAlpha(0).setScale(0).setVisible(!1), r.buttonShare.setAlpha(0).setScale(0).setVisible(!1)
							}, r.handleClosePopup = function() {
								r.scene.audio.playSound(_a.POPUP_OFF, {
									volume: .6
								}), r.runCloseAnimation(), r.popupFadeOutAnimation.next((function() {
									r.scene.screen.close(r.name)
								})), As.emit(Ca)
							}, r.handleShareBestScore = function() {
								r.scene.storage.dispatch(Ps())
							}, r.handleRestart = function() {
								r.scene.screen.close(r.name), r.scene.storage.dispatch(Vo()), As.emit(Or.REPLAY), As.emit(Pa)
							}, r.setVisible(!1), r.setDepth(Ra.Ks.POPUP), r.createPopup(), r.createPopupContent(), r.background.setAlpha(0), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateInfo = function() {
							var e = this.scene.storage.getState(),
								t = vs(e),
								n = this.scene.player.getPlayer().playerId,
								i = ds(e).playerId,
								a = fs(e, {
									playerId: n
								}),
								r = ms(e, {
									opponentId: i
								}),
								s = (t[n] || {}).score,
								o = void 0 === s ? 0 : s,
								c = (t[i] || {}).score,
								u = void 0 === c ? 0 : c;
							return this.textScoreMe.setText(String(o)), this.textScoreOpponent.setText(String(u)), a && r ? (this.buttonShare.setVisible(!0), this.tweenButtonShare.play(), Phaser.Display.Align.In.Center(this.buttonRestart, this.popup, -86, 100), o === u ? (this.textMessage.setVisible(!1), this.titleFrame.setFrame(Eu.TEXT_DRAW), this.titleFrame.setWorldSize(130, 35), this.icon.setFrame(Eu.TEXT_VS), this.icon.setWorldSize(62, 35), void this.scene.audio.playSound(_a.DRAW)) : o > u ? (this.textMessage.setVisible(!1), this.titleFrame.setFrame(Eu.TEXT_WIN), this.titleFrame.setWorldSize(81, 35), this.icon.setFrame(Eu.TEXT_VS), this.icon.setWorldSize(62, 35), void this.scene.audio.playSound(_a.WIN)) : o < u ? (this.textMessage.setVisible(!1), this.titleFrame.setFrame(Eu.TEXT_LOSE), this.titleFrame.setWorldSize(109, 35), this.icon.setFrame(Eu.TEXT_VS), this.icon.setWorldSize(62, 35), void this.scene.audio.playSound(_a.LOSE)) : void 0) : (this.textMessage.setVisible(!0), this.titleFrame.setFrame(Eu.TEXT_PLAY_WITH_FRIENDS), this.titleFrame.setWorldSize(211, 19), this.icon.setFrame(Eu.ICON_THUNDER), this.icon.setWorldSize(42, 59), this.buttonShare.setVisible(!1), Phaser.Display.Align.In.Center(this.buttonRestart, this.popup, 0, 100), void this.scene.audio.playSound(_a.WAIT_OPPONENT))
						}, n.runAnim = function() {
							this.icon.setVisible(!0), this.myInfoBlock.setVisible(!0), this.opponentInfoBlock.setVisible(!0), this.tweenIcon.play(), this.tweenMyInfoBlock.play(), this.tweenOpponentInfoBlock.play(), this.buttonRestart.setVisible(!0), this.tweenButtonRestart.play()
						}, n.loadAvatars = function() {
							var e = this.scene.storage.getState(),
								t = this.scene.player.getPlayer(),
								n = t.photo,
								i = t.playerId,
								a = ds(e),
								r = a.playerId,
								s = a.photo;
							this.avatarMe.loadPhoto(i, n, 5), this.avatarOpponent.loadPhoto(r, s, 5)
						}, n.createPopup = function() {
							this.popup = new Jc(this.scene, 0, 0, 325, 300), this.add(this.popup), Phaser.Display.Align.In.Center(this.popup, this.zone)
						}, n.createPopupContent = function() {
							this.createTitle(), this.createTextMessage(), this.createMyInfoBlock(), this.createOpponentInfoBlock(), this.createIcon(), this.createButtonShare(), this.createButtonRestart(), this.popup.add([this.title]), this.contents = this.scene.make.group({}), this.contents.addMultiple([this.buttonShare])
						}, n.createTitle = function() {
							this.title = this.scene.add.container();
							var e = this.scene.make.image({
								key: bu,
								frame: Eu.RIBBON_MAIN
							});
							e.setWorldSize(260, 57), this.titleFrame = this.scene.make.image({
								key: bu,
								frame: Eu.TEXT_PLAY_WITH_FRIENDS
							}), this.titleFrame.setWorldSize(143, 21), Phaser.Display.Align.In.Center(this.titleFrame, e, 0, -3);
							var t = new _c(this.scene, bu, Eu.BUTTON_CLOSE, 25, 25);
							t.useSound = !1, t.onClick = this.handleClosePopup, t.setName("Close"), Phaser.Display.Align.In.RightCenter(t, e, 36, -19), this.title.add([e, this.titleFrame, t]), this.popup.add(this.title), Phaser.Display.Align.In.TopCenter(this.title, this.popup, 0, -2)
						}, n.createTextMessage = function() {
							this.textMessage = this.scene.add.text(0, 0, "Waiting for your opponent", {
								font: "17.5px Arial",
								color: "#000000"
							}), this.popup.add(this.textMessage), Phaser.Display.Align.In.Center(this.textMessage, this.popup, 0, -101)
						}, n.createButtonShare = function() {
							this.buttonShare = new _c(this.scene, bu, Eu.BUTTON_BLUE_BIG, 122, 54), this.buttonShare.setName("Share");
							var e = this.scene.make.image({
								key: bu,
								frame: Eu.TEXT_SHARE
							});
							e.setWorldSize(69, 21), this.buttonShare.add(e), Phaser.Display.Align.In.Center(e, this.buttonShare, 14, -5);
							var t = this.scene.make.image({
								key: bu,
								frame: Eu.ICON_SHARE
							});
							t.setWorldSize(22.5, 27), this.buttonShare.add(t), Phaser.Display.Align.In.LeftCenter(t, this.buttonShare, -16, -5), this.popup.add(this.buttonShare), Phaser.Display.Align.In.Center(this.buttonShare, this.popup, 86, 100), this.buttonShare.onClick = this.handleShareBestScore, this.buttonShare.setScale(0).setAlpha(0), this.tweenButtonShare = this.scene.tweens.add({
								targets: this.buttonShare,
								paused: !0,
								duration: 200,
								delay: 700,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createButtonRestart = function() {
							this.buttonRestart = new _c(this.scene, bu, Eu.BUTTON_RESTART, 122, 54), this.buttonRestart.setName("Restart"), this.popup.add(this.buttonRestart), Phaser.Display.Align.In.Center(this.buttonRestart, this.popup, 0, 100), this.buttonRestart.onClick = this.handleRestart, this.buttonRestart.setScale(0).setAlpha(0), this.tweenButtonRestart = this.scene.tweens.add({
								targets: this.buttonRestart,
								paused: !0,
								duration: 200,
								delay: 700,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createMyInfoBlock = function() {
							this.myInfoBlock = this.scene.add.container(), this.avatarMe = new oc(this.scene, {
								key: bu,
								frame: Eu.AVATAR_BORDER_ORANGE_THICK,
								background: Eu.AVATAR_BACKGROUND,
								width: 100,
								height: 100,
								borderWidth: 10
							}), this.myInfoBlock.add(this.avatarMe), Phaser.Display.Align.In.Center(this.avatarMe, this.myInfoBlock, 0, 0), this.textScoreMe = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(74),
								text: "0",
								origin: {
									x: .5,
									y: .5
								}
							}), this.textScoreMe.setTint(14396272), this.myInfoBlock.add(this.textScoreMe), Phaser.Display.Align.In.Center(this.textScoreMe, this.avatarMe, 0, 80), this.popup.add(this.myInfoBlock), Phaser.Display.Align.In.Center(this.myInfoBlock, this.popup, -95, -28), this.myInfoBlock.setAlpha(0), this.tweenMyInfoBlock = this.scene.tweens.add({
								targets: this.myInfoBlock,
								paused: !0,
								duration: 200,
								delay: 400,
								scale: {
									from: 1.5,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createOpponentInfoBlock = function() {
							this.opponentInfoBlock = this.scene.add.container(), this.avatarOpponent = new oc(this.scene, {
								key: bu,
								frame: Eu.AVATAR_BORDER_ORANGE_THICK,
								background: Eu.AVATAR_BACKGROUND,
								width: 100,
								height: 100,
								borderWidth: 10
							}), this.opponentInfoBlock.add(this.avatarOpponent), Phaser.Display.Align.In.Center(this.avatarOpponent, this.opponentInfoBlock, 0, 0), this.textScoreOpponent = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(74),
								text: "0",
								origin: {
									x: .5,
									y: .5
								}
							}), this.textScoreOpponent.setTint(14396272), this.opponentInfoBlock.add(this.textScoreOpponent), Phaser.Display.Align.In.Center(this.textScoreOpponent, this.avatarOpponent, 0, 80), this.popup.add(this.opponentInfoBlock), Phaser.Display.Align.In.Center(this.opponentInfoBlock, this.popup, 95, -28), this.opponentInfoBlock.setAlpha(0), this.tweenOpponentInfoBlock = this.scene.tweens.add({
								targets: this.opponentInfoBlock,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 1.5,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createIcon = function() {
							this.icon = this.scene.make.image({
								key: bu,
								frame: Eu.ICON_THUNDER
							}), this.icon.setWorldSize(38, 54);
							var e = this.icon.scale;
							this.popup.add(this.icon), Phaser.Display.Align.In.Center(this.icon, this.popup, 0, -30), this.icon.setAlpha(0), this.tweenIcon = this.scene.tweens.add({
								targets: this.icon,
								paused: !0,
								duration: 200,
								delay: 300,
								scale: {
									from: 1.5,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.runCloseAnimation = function() {
							this.runPopupExitsAnimation(0, 200)
						}, n.runPopupExitsAnimation = function(e, t) {
							var n, i = this;
							this.popupFadeOutAnimation || (this.popupFadeOutAnimation = new Yc.Z({
								targets: [this.popup],
								delay: e,
								duration: t,
								props: {
									y: 250,
									scale: 0
								},
								onComplete: function() {
									i.popup.setY(0)
								}
							})), null == (n = this.popupFadeOutAnimation) || n.play()
						}, n.runOpenAnimation = function() {
							this.scene.audio.playSound(_a.POPUP_SHOW), this.runPopupEntrancesAnimation(0, 300), this.runPopupContentEntrancesAnimation(200, 300)
						}, n.runPopupEntrancesAnimation = function(e, t) {
							if (!this.popupShowUpAnimation) {
								var n = this.popup,
									i = n.y,
									a = n.scale;
								this.popupShowUpAnimation = new Kc({
									targets: [this.popup],
									delay: e,
									duration: t,
									props: {
										y: {
											from: 350,
											to: i
										},
										alpha: {
											start: 1,
											from: 1,
											to: 1
										},
										scale: {
											start: 0,
											from: 0,
											to: a
										}
									}
								})
							}
							this.popupShowUpAnimation.play()
						}, n.runPopupContentEntrancesAnimation = function(e, t) {
							this.contentShowUpAnimation || (this.contentShowUpAnimation = new Wc.Z({
								targets: this.contents.getChildren(),
								duration: t,
								delay: this.scene.tweens.stagger(80, {
									start: e
								}),
								props: {
									alpha: {
										start: 0,
										from: 0,
										to: 1
									}
								}
							})), this.contentShowUpAnimation.play()
						}, t
					}(GameCore.Screen),
					wu = Au,
					Tu = GameCore.Configs,
					Cu = Tu.LeadersBoard,
					Pu = Tu.Network,
					Iu = Oa.Z.DEFAULT,
					ku = Iu.KEY,
					xu = Iu.FRAME,
					Ou = function(e) {
						function t() {
							for (var t, n, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
							return (n = e.call.apply(e, y()(t = [this]).call(t, r)) || this).bestScore = void 0, n.currentScore = void 0, n.leadersBar = void 0, n.main = void 0, n.confettiLeftEffect = void 0, n.confettiRightEffect = void 0, n.queueScreens = [], n.isQueueScreensUpdated = void 0, n.isAdShowed = void 0, n.run = function() {
								n.registry.set("KEY_SCENE_RUNNING", da.C.GAME_OVER_SCENE), n.background.setVisible(!0), n.updateScore(), n.updateQueueScreens(), n.queueScreens.length > 0 ? n.showQueueScreens() : (n.updateLeaders(), n.showMainBlock(), n.audio.playSound(_a.GAME_OVER_SCENE), n.analytics.pageview(n.scene.key), n.input.setTopOnly(!0))
							}, n.runConfettiEffect = function() {
								var e = n.gameZone.displayWidth;
								n.confettiLeftEffect.stop(), n.confettiRightEffect.stop(), n.children.bringToTop(n.confettiLeftEffect), n.children.bringToTop(n.confettiRightEffect), n.confettiLeftEffect.run(1, 0, -100), n.confettiRightEffect.run(1, 0 + e, -100), n.tweens.addCounter({
									delay: 1e4,
									from: 100,
									to: 0,
									ease: Phaser.Math.Easing.Cubic.Out,
									duration: 400,
									onUpdate: function(e) {
										var t, i, a = e.getValue() / 100;
										null == (t = n.confettiLeftEffect.emitter) || t.setAlpha(a), null == (i = n.confettiRightEffect.emitter) || i.setAlpha(a)
									},
									onComplete: function() {
										var e, t;
										null == (e = n.confettiLeftEffect.emitter) || e.setAlpha(1), null == (t = n.confettiRightEffect.emitter) || t.setAlpha(1), n.confettiLeftEffect.stop(), n.confettiRightEffect.stop()
									}
								})
							}, n.handlePlayWithFriend = function() {
								n.storage.dispatch(Wo())
							}, n.handlePlay = function() {
								n.game.updateFps(xa.Z.max);
								n.main.hideContent((function() {
									n.isAdShowed = !1, n.isQueueScreensUpdated = !1, n.queueScreens = [], n.scene.sleep(), n.storage.dispatch(Ho())
								}))
							}, n.handleShare = function() {
								n.storage.dispatch(Ps())
							}, n.handleShowMidRollAd = function() {
								var e = (0, s.Z)(u().mark((function e(t) {
									var a;
									return u().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												if (void 0 === t && (t = !0), !n.isAdShowed) {
													e.next = 3;
													break
												}
												return e.abrupt("return");
											case 3:
												if (n.isAdShowed = !0, a = n.game.globalScene, e.prev = 5, n.audio.pauseMusic(), n.ads.canbeShowInterstitialAd()) {
													e.next = 9;
													break
												}
												return e.abrupt("return");
											case 9:
												return a.screen.open(Ra.o4.NOTIFY_SCREEN, {
													message: "Loading ads...",
													duration: Pu.Timeout,
													loading: !0
												}), e.next = 12, n.ads.showMidRollAdAsync();
											case 12:
												n.analytics.showInterstitialAd(n.getSceneName()), e.next = 18;
												break;
											case 15:
												return e.prev = 15, e.t0 = e.catch(5), e.abrupt("return");
											case 18:
												return e.prev = 18, n.postSessionScore(), a.screen.close(Ra.o4.NOTIFY_SCREEN), n.audio.playMusic(), n.ads.preloadMidRollAdAsync().catch(i.tO), e.finish(18);
											case 24:
											case "end":
												return e.stop()
										}
									}), e, null, [
										[5, 15, 18, 24]
									])
								})));
								return function(t) {
									return e.apply(this, arguments)
								}
							}(), n.showNotifySkipAds = function() {
								var e = n.game.globalScene;
								e.screen.events.off(GameCore.Screens.Events.CLOSE), e.screen.open(Ra.o4.NOTIFY_SCREEN, {
									message: "Sorry, No Rewards!\nYou have cancelled the ad!",
									duration: 1500,
									loading: !1
								})
							}, n.showNotifyNoAds = function(e) {
								if (!e || e.name === Ra.o4.NOTIFY_SCREEN) {
									var t = n.game.globalScene;
									t.screen.events.off(GameCore.Screens.Events.CLOSE), t.screen.open(Ra.o4.NOTIFY_SCREEN, {
										message: "No ads to display!",
										duration: 1200,
										loading: !1
									})
								}
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.preload = function() {
							var e = this;
							this.events.on("resume", (function() {
								e.updateScore()
							})), this.events.on("wake", this.run), this.events.on("create", this.run)
						}, n.create = function() {
							e.prototype.create.call(this), this.createBackground(ku, xu.BLANK, .6, 0);
							var t = this.player.getBestScore();
							this.bestScore = t, this.currentScore = 0, this.createMain(), this.createLeadersBar(), this.createBestScoreScreen(), this.createResultScreen(), this.createConfettiSmallAnimation(), this.listenEvents(), this.preLoadAds()
						}, n.preLoadAds = function() {
							this.ads.preloadMidRollAdAsync().catch((function(e) {
								return console.log(e)
							})), this.ads.preloadRewardedVideoAsync().catch((function(e) {
								return console.log(e)
							}))
						}, n.listenEvents = function() {
							this.background.setInteractive(), As.on(Ta, this.handleCloseScreen.bind(this)), As.on(Ca, this.handleCloseScreen.bind(this)), As.on(Pa, this.handleResultReplay.bind(this))
						}, n.handleCloseScreen = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.handleShowMidRollAd();
										case 2:
											this.run();
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.handleResultReplay = function() {
							this.isQueueScreensUpdated = !1, this.scene.sleep()
						}, n.showQueueScreens = function() {
							var e = this.queueScreens.pop();
							e && this.screen.open(e)
						}, n.updateQueueScreens = function() {
							this.isQueueScreensUpdated || (this.isQueueScreensUpdated = !0, this.updateQueueResultScreen(), this.updateQueueBestScoreScreen())
						}, n.updateQueueResultScreen = function() {
							var e, t = this.storage.getState(),
								n = Dr(t);
							if (-1 !== Ot()(e = [na, ia]).call(e, n) && ls(t)) {
								var i = ds(t).playerId;
								n === ia && i === ea.playerId || this.queueScreens.push(Ra.o4.RESULT_SCREEN)
							}
						}, n.updateQueueBestScoreScreen = function() {
							this.currentScore && (this.currentScore <= this.bestScore || this.queueScreens.push(Ra.o4.BEST_SCORE_SCREEN))
						}, n.updateLeaders = function() {
							var e = this;
							this.leadersBar.killAndHideAll();
							var t = [{
								selector: Ir,
								callback: function(t) {
									if (!1 === t) {
										var n = window.game.player.getPlayerId(),
											i = e.getLeadersExcludeIds([n]);
										e.updateLeaderBar(i)
									}
								}
							}];
							this.handleStateChange(t), this.storage.dispatch(Ar(Cu.LeaderboardId, ja, 20))
						}, n.getLeadersExcludeIds = function(e) {
							var t = this.storage.getState(),
								n = Pr(t),
								i = {};
							if (!e || 0 === e.length) return n;
							for (var a in n)
								if (Ot()(e).call(e, a) < 0) {
									var r = n[a],
										s = r.playerId,
										o = r.photo,
										c = r.score,
										u = r.rank,
										l = r.name;
									i[a] = {
										playerId: s,
										photo: o,
										score: c,
										rank: u,
										name: l
									}
								} return i
						}, n.updateScore = function() {
							var e = this.storage.getState(),
								t = ys(e),
								n = t.score,
								i = t.bestScore;
							void 0 === n && void 0 === i && (n = vs(e)[this.player.getPlayerId()].score, i = this.player.getBestScore());
							this.bestScore = i < this.bestScore ? this.bestScore : i, this.currentScore = n, this.main.infoBlock.updateData({
								bestScore: this.bestScore,
								currentScore: this.currentScore
							})
						}, n.createMain = function() {
							this.bestScore = 0, this.main = new Vc(this), this.main.setVisible(!1).setScale(0).setAlpha(0), this.main.infoBlock.buttonPlay.onClick = this.handlePlay, this.main.infoBlock.buttonShare.onClick = this.handleShare, this.main.infoBlock.buttonClose.onClick = this.handlePlay, Phaser.Display.Align.In.Center(this.main, this.gameZone)
						}, n.createLeadersBar = function() {
							this.leadersBar = new bc(this), Phaser.Display.Align.In.Center(this.leadersBar, this.gameZone, 0, 165)
						}, n.updateLeaderBar = function(e) {
							var t = {
								playerId: this.player.getPlayerId(),
								leaders: []
							};
							for (var n in e) {
								if (t.leaders.length >= 3) break;
								var i = e[n],
									a = i.playerId,
									r = i.photo,
									s = i.score,
									o = i.rank,
									c = i.name;
								this.isLeadersHasItem(t.leaders, a) || t.leaders.push({
									playerId: a,
									photo: r,
									score: s,
									rank: o,
									name: c
								})
							}
							this.isLeadersHasItem(t.leaders, $i.Z.ICON_EARTH.KEY) || t.leaders.push({
								playerId: $i.Z.ICON_EARTH.KEY,
								photo: $i.Z.ICON_EARTH.FILE,
								rank: 4,
								score: -1,
								name: ""
							}), this.leadersBar.updateInfo(t)
						}, n.isLeadersHasItem = function(e, t) {
							if (!e || 0 === e.length) return !1;
							var n = pe()(e).call(e, (function(e) {
								return e.playerId === t
							}));
							return n && n.length > 0
						}, n.createBestScoreScreen = function() {
							this.screen.add(Ra.o4.BEST_SCORE_SCREEN, yu)
						}, n.createResultScreen = function() {
							this.screen.add(Ra.o4.RESULT_SCREEN, wu)
						}, n.createConfettiSmallAnimation = function() {
							this.confettiLeftEffect = new Fa(this, {
								speedX: {
									min: -20,
									max: 100
								},
								rotate: {
									start: -1080,
									end: 0
								}
							}), this.confettiRightEffect = new Fa(this, {
								speedX: {
									min: 20,
									max: -100
								},
								rotate: {
									start: 0,
									end: 1080
								}
							}), this.confettiLeftEffect.setDepth(ka.Z.ON_TOP), this.confettiRightEffect.setDepth(ka.Z.ON_TOP)
						}, n.showMainBlock = function() {
							this.main.setVisible(!0), this.main.animShow.play()
						}, n.postSessionScore = function() {
							var e = this.storage.getState(),
								t = ys(e).score,
								n = void 0 === t ? 0 : t;
							this.storage.dispatch(Jr(n))
						}, n.update = function() {}, t
					}(ec.Z);
				var Ru = Ou,
					_u = n(101),
					Bu = n.n(_u),
					Du = Math.sin,
					Nu = Math.cos,
					Mu = function(e, t, n) {
						return e * Nu(t) * n
					},
					Lu = function(e, t, n, i) {
						return void 0 === i && (i = 10), e * Du(t) * n - .5 * i * Math.pow(n, 2)
					},
					Fu = Oa.Z.GAMEPLAY,
					Gu = Fu.KEY,
					Zu = Fu.FRAME,
					Uu = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n.x + (n.padding || 0), n.y + (n.padding || 0), Gu, Zu.GEM) || this).scene = void 0, i.canCapture = {
								direction: "bottom",
								angle: 0
							}, i.woodenEffect = void 0, i.status = void 0, i.rateShaking = 1, i.imageGameOver = void 0, i.tweenImageGameOver = void 0, i.t0 = 0, i.x0 = void 0, i.y0 = void 0, i.v0 = void 0, i.alpha0 = void 0, i.scale0 = void 0, i.maxScale0 = void 0, i.scaleRate0 = void 0, i.imageBreak = void 0, i.setWorldSize(n.width, n.height), i.x0 = n.x + (n.padding || 0), i.y0 = n.y + (n.padding || 0), i.scale0 = i.scale, i.scene = t, i.createImageBreak(), i.createImageGameOver(), i.createTweenImageGameOver(), t.add.existing((0, Ba.Z)(i)), i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createImageBreak = function() {
							this.imageBreak = this.scene.make.image({
								key: Gu,
								frame: Zu.GEM
							}), this.imageBreak.setDepth(ka.Z.ON_TOP), this.imageBreak.setVisible(!1), this.imageBreak.setScale(this.scale), this.imageBreak.setPosition(this.x, this.y)
						}, n.isShaking = function() {
							return "SHAKING" === this.status
						}, n.playAnimShaking = function() {
							this.status = "SHAKING"
						}, n.playTweenBreaking = function() {
							this.status = "BREAKING"
						}, n.setRateShaking = function(e) {
							this.rateShaking = e
						}, n.stopAnimShaking = function() {
							this.rotation = 0, this.status = ""
						}, n.resetImageBreak = function() {
							this.imageBreak.x = this.x0, this.imageBreak.y = this.y0, this.imageBreak.rotation = 0, this.imageBreak.scale = this.scale0, this.imageBreak.setVisible(!1)
						}, n.hideImageGameOver = function() {
							this.imageGameOver.setVisible(!1)
						}, n.preUpdate = function() {
							if ("SHAKING" === this.status) this.rotation += .015 * this.rateShaking, this.rotation > .1 && (this.rateShaking = -1), this.rotation < -.1 && (this.rateShaking = 1)
						}, n.handleTweenBreaking = function() {
							var e = this.alpha0 < 90 ? 1 : -1;
							this.t0 += 3e3 / 1900;
							var t = .016 * this.t0,
								n = Mu(this.v0, this.alpha0, t),
								i = Lu(this.v0, this.alpha0, t);
							this.imageBreak.x = this.x0 + n, this.imageBreak.y = this.y0 - i, console.log("this.imageBreak.y === ", t, this.t0, this.imageBreak.y), this.imageBreak.rotation += .04 * e, this.imageBreak.scale > .4 ? this.imageBreak.scale -= this.scale0 : this.imageBreak.scale = .4;
							var a = this.scene.gameZone,
								r = a.width,
								s = a.height;
							(this.imageBreak.x - this.imageBreak.displayWidth / 2 < 0 || this.imageBreak.x + this.imageBreak.displayWidth / 2 > r || this.imageBreak.y - this.imageBreak.displayHeight / 2 > s) && (this.status = "")
						}, n.createImageGameOver = function() {
							this.imageGameOver = this.scene.make.image({
								key: Gu,
								frame: Zu.GEM_SILVER
							}), this.imageGameOver.setDepth(this.depth + 1), this.imageGameOver.setVisible(!1), this.imageGameOver.setScale(this.scale0), this.imageGameOver.setPosition(this.x, this.y)
						}, n.createTweenImageGameOver = function() {
							this.tweenImageGameOver = this.scene.add.tween({
								targets: [this.imageGameOver],
								duration: 1200,
								ease: Phaser.Math.Easing.Quadratic.InOut,
								alpha: {
									from: 0,
									to: 1,
									start: 0
								},
								paused: !0
							})
						}, n.playAnimImageGameOver = function() {
							this.imageGameOver.setVisible(!0).setAlpha(0), this.tweenImageGameOver.play()
						}, t
					}(Phaser.GameObjects.Image),
					Hu = Uu,
					Vu = n(179),
					Yu = n.n(Vu),
					Wu = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 277, 610, 887],
					zu = [{
						minCol: 0,
						minRow: 0,
						cols: 4,
						rows: 4
					}, {
						minCol: 4,
						minRow: 0,
						cols: 4,
						rows: 4
					}, {
						minCol: 0,
						minRow: 4,
						cols: 4,
						rows: 4
					}, {
						minCol: 4,
						minRow: 4,
						cols: 4,
						rows: 4
					}],
					Ku = [{
						minCol: 0,
						minRow: 0,
						cols: 5,
						rows: 5
					}, {
						minCol: 3,
						minRow: 0,
						cols: 5,
						rows: 5
					}, {
						minCol: 0,
						minRow: 3,
						cols: 5,
						rows: 5
					}, {
						minCol: 3,
						minRow: 3,
						cols: 5,
						rows: 5
					}],
					ju = "vertical",
					Xu = "horizontal",
					qu = "left",
					Qu = "right",
					Ju = "top",
					$u = "bottom",
					el = "vertical_left",
					tl = "vertical_right",
					nl = "horizontal_left",
					il = "horizontal_right",
					al = "gem/gem",
					rl = "gem/gem",
					sl = "gem/gem",
					ol = "gem/gem",
					cl = "gem/gem",
					ul = "gem/gem",
					ll = "gem/gem",
					hl = "gem/gem",
					dl = "gem/gem",
					pl = [{
						level: 1,
						frames: [],
						width: 480,
						height: 189
					}, {
						level: 2,
						frames: [Oa.Z.EFFECTS.FRAME.TEXT_COOL],
						width: 480,
						height: 189
					}, {
						level: 3,
						frames: [Oa.Z.EFFECTS.FRAME.TEXT_GOOD],
						width: 579,
						height: 189
					}, {
						level: 4,
						frames: [Oa.Z.EFFECTS.FRAME.TEXT_EXCELLENT],
						width: 906,
						height: 189
					}, {
						level: 5,
						frames: [Oa.Z.EFFECTS.FRAME.TEXT_EXCELLENT],
						width: 906,
						height: 189
					}, {
						level: 6,
						frames: [Oa.Z.EFFECTS.FRAME.TEXT_EXCELLENT],
						width: 906,
						height: 189
					}],
					fl = [{
						level: 1,
						scale: .5,
						speed: .5,
						quantity: .5
					}, {
						level: 2,
						scale: .6,
						speed: .6,
						quantity: .6
					}, {
						level: 3,
						scale: .7,
						speed: .7,
						quantity: .7
					}, {
						level: 4,
						scale: .8,
						speed: .8,
						quantity: .8
					}, {
						level: 5,
						scale: .9,
						speed: .9,
						quantity: .9
					}, {
						level: 6,
						scale: 1,
						speed: 1,
						quantity: 1
					}],
					ml = "l",
					gl = "l_1",
					vl = "l_3",
					yl = "line_2",
					Sl = "line_3",
					bl = "line_4",
					El = "line_5",
					Al = "square_1",
					wl = "square_2",
					Tl = "square_3",
					Cl = "trapezoid",
					Pl = "triangle",
					Il = [ml, gl, vl, yl, Sl, bl, El, Al, wl, Tl, Pl, Cl],
					kl = [{
						type: ml,
						rate: 1
					}, {
						type: gl,
						rate: 1
					}, {
						type: vl,
						rate: 1
					}, {
						type: yl,
						rate: 4
					}, {
						type: Sl,
						rate: 4
					}, {
						type: bl,
						rate: 4
					}, {
						type: El,
						rate: 2
					}, {
						type: Al,
						rate: 4
					}, {
						type: wl,
						rate: 4
					}, {
						type: Tl,
						rate: 2
					}, {
						type: Pl,
						rate: 1
					}, {
						type: Cl,
						rate: 1
					}],
					xl = [
						[1, 0],
						[1, 0],
						[1, 1]
					],
					Ol = [
						[0, 1],
						[0, 1],
						[1, 1]
					],
					Rl = [
						[1, 0],
						[1, 1]
					],
					_l = [
						[1, 0, 0],
						[1, 0, 0],
						[1, 1, 1]
					],
					Bl = [
						[1, 1, 1],
						[1, 0, 0]
					],
					Dl = [
						[1, 1, 1],
						[0, 0, 1]
					],
					Nl = [
						[1, 1],
						[1, 0]
					],
					Ml = [
						[1, 1, 1],
						[1, 0, 0],
						[1, 0, 0]
					],
					Ll = [
						[1, 1],
						[0, 1],
						[0, 1]
					],
					Fl = [
						[1, 1],
						[1, 0],
						[1, 0]
					],
					Gl = [
						[1, 1],
						[0, 1]
					],
					Zl = [
						[1, 1, 1],
						[0, 0, 1],
						[0, 0, 1]
					],
					Ul = [
						[0, 0, 1],
						[1, 1, 1]
					],
					Hl = [
						[1, 0, 0],
						[1, 1, 1]
					],
					Vl = [
						[0, 1],
						[1, 1]
					],
					Yl = [
						[0, 0, 1],
						[0, 0, 1],
						[1, 1, 1]
					],
					Wl = [
						[1],
						[1]
					],
					zl = [
						[1, 1]
					],
					Kl = [
						[1],
						[1],
						[1]
					],
					jl = [
						[1, 1, 1]
					],
					Xl = [
						[1],
						[1],
						[1],
						[1]
					],
					ql = [
						[1, 1, 1, 1]
					],
					Ql = [
						[1],
						[1],
						[1],
						[1],
						[1]
					],
					Jl = [
						[1, 1, 1, 1, 1]
					],
					$l = [
						[1]
					],
					eh = [
						[1, 1],
						[1, 1]
					],
					th = [
						[1, 1, 1],
						[1, 1, 1],
						[1, 1, 1]
					],
					nh = [
						[1, 0],
						[1, 1],
						[0, 1]
					],
					ih = [
						[0, 1],
						[1, 1],
						[1, 0]
					],
					ah = [
						[1, 1, 0],
						[0, 1, 1]
					],
					rh = [
						[0, 1, 1],
						[1, 1, 0]
					],
					sh = [
						[0, 1],
						[1, 1],
						[0, 1]
					],
					oh = [
						[1, 0],
						[1, 1],
						[1, 0]
					],
					ch = [
						[0, 1, 0],
						[1, 1, 1]
					],
					uh = [
						[1, 1, 1],
						[0, 1, 0]
					],
					lh = GameCore.Configs.Board,
					hh = (lh.cols, lh.rows),
					dh = void 0 === hh ? 8 : hh,
					ph = function(e) {
						for (var t = [], n = e.length, i = e[0].length, a = [], r = [], s = function(n) {
								for (var r = !0, s = 0; s < i; s++) 0 === e[n][s].value && (r = !1);
								if (r) {
									a.push(n);
									for (var o = function(e) {
											t.some((function(t) {
												return t.x === e && t.y === n
											})) || t.push({
												x: e,
												y: n
											})
										}, c = 0; c < i; c++) o(c)
								}
							}, o = 0; o < n; o++) s(o);
						for (var c = function(i) {
								for (var a = !0, s = 0; s < n; s++) 0 === e[s][i].value && (a = !1);
								if (a) {
									r.push(i);
									for (var o = function(e) {
											t.some((function(t) {
												return t.x === i && t.y === e
											})) || t.push({
												x: i,
												y: e
											})
										}, c = 0; c < n; c++) o(c)
								}
							}, u = 0; u < i; u++) c(u);
						return t
					},
					fh = function(e, t) {
						var n = e.length,
							i = e[0].length;
						if (0 === t.length) return !1;
						for (var a = 0; a < n; a++)
							for (var r = 0; r < i; r++)
								for (var s = 0; s < t.length; s++)
									if (mh(e, r, a, t[s])) return !1;
						return !0
					},
					mh = function(e, t, n, i) {
						for (var a = !0, r = 0; r < i.data.length; r++)
							for (var s = 0; s < i.data[r].length; s++) i.data[r][s].texture && (e[n + r] && e[n + r][t + s] && 0 === e[n + r][t + s].value || (a = !1));
						return a
					},
					gh = function(e, t) {
						for (var n = e.length, i = e[0].length, a = 0; a < n; a++)
							for (var r = 0; r < i; r++)
								if (mh(e, r, a, t)) return !0;
						return !1
					},
					vh = function(e) {
						var t = e;
						switch (e) {
							case al:
								t = "b";
								break;
							case rl:
								t = "c";
								break;
							case sl:
								t = "d";
								break;
							case ol:
								t = "g";
								break;
							case cl:
								t = "o";
								break;
							case ul:
								t = "p";
								break;
							case ll:
								t = "q";
								break;
							case hl:
								t = "r";
								break;
							case dl:
								t = "y";
								break;
							case ml:
								t = "l";
								break;
							case gl:
								t = "l1";
								break;
							case vl:
								t = "l3";
								break;
							case yl:
								t = "e2";
								break;
							case Sl:
								t = "e3";
								break;
							case bl:
								t = "e4";
								break;
							case El:
								t = "e5";
								break;
							case Al:
								t = "s1";
								break;
							case wl:
								t = "s2";
								break;
							case Tl:
								t = "s3";
								break;
							case Cl:
								t = "tz";
								break;
							case Pl:
								t = "ta";
								break;
							case Ju:
								t = "dt";
								break;
							case qu:
								t = "dl";
								break;
							case Qu:
								t = "dr";
								break;
							case $u:
								t = "db";
								break;
							case ju:
								t = "v";
								break;
							case Xu:
								t = "h";
								break;
							case el:
								t = "vl";
								break;
							case tl:
								t = "vr";
								break;
							case nl:
								t = "hl";
								break;
							case il:
								t = "hr"
						}
						return t
					},
					yh = function(e) {
						var t = e;
						switch (e) {
							case "b":
								t = al;
								break;
							case "c":
								t = rl;
								break;
							case "d":
								t = sl;
								break;
							case "g":
								t = ol;
								break;
							case "o":
								t = cl;
								break;
							case "p":
								t = ul;
								break;
							case "q":
								t = ll;
								break;
							case "r":
								t = hl;
								break;
							case "y":
								t = dl;
								break;
							case "l":
								t = ml;
								break;
							case "l1":
								t = gl;
								break;
							case "l3":
								t = vl;
								break;
							case "e2":
								t = yl;
								break;
							case "e3":
								t = Sl;
								break;
							case "e4":
								t = bl;
								break;
							case "e5":
								t = El;
								break;
							case "s1":
								t = Al;
								break;
							case "s2":
								t = wl;
								break;
							case "s3":
								t = Tl;
								break;
							case "tz":
								t = Cl;
								break;
							case "ta":
								t = Pl;
								break;
							case "dt":
								t = Ju;
								break;
							case "dl":
								t = qu;
								break;
							case "dr":
								t = Qu;
								break;
							case "db":
								t = $u;
								break;
							case "v":
								t = ju;
								break;
							case "h":
								t = Xu;
								break;
							case "vl":
								t = el;
								break;
							case "vr":
								t = tl;
								break;
							case "hl":
								t = nl;
								break;
							case "hr":
								t = il
						}
						return t
					},
					Sh = function(e) {
						for (var t = [], n = "1234567x", i = e.split(""), a = 0; a < i.length; a++)
							if (Ot()(n).call(n, i[a]) >= 0)
								for (var r = "x" === i[a] ? dh : Number(i[a]), s = 0; s < r; s++) t.push({
									value: 0,
									frame: "gem/gem_transparent"
								});
							else t.push({
								value: 1,
								frame: yh(i[a])
							});
						return t
					},
					bh = function(e) {
						var t = e.split(","),
							n = t[0].split("-");
						if (n.length <= 0) throw new Error("Invalid piece");
						return {
							type: yh(n[0]),
							direction: yh(n[1]) || null,
							isReverse: n[2] && "r" === n[2] || !1,
							frame: yh(t[1])
						}
					},
					Eh = function() {
						function e(e) {
							this.angle = void 0, this.scene = void 0, this.scaleUpTween = void 0, this.breakingTween = void 0, this.breakingDelay = 50, this.captureCells = void 0, this.timerEventRemoveCaptureCells = void 0, this.scene = e, this.init()
						}
						var t = e.prototype;
						return t.init = function() {
							this.createTweenBreaking(), this.createScaleUpTween()
						}, t.handleShowEffect = function(e) {
							var t = this;
							e && 0 !== e.length && (this.removeCaptureCell(), this.captureCells = e, this.setValueCaptureCell(), this.breakingTween.resetTweenData(!1), this.scaleUpTween.restart(), this.breakingTween.restart(), this.timerEventRemoveCaptureCells && this.timerEventRemoveCaptureCells.remove(), this.timerEventRemoveCaptureCells = this.scene.time.addEvent({
								delay: 500,
								callback: function() {
									t.breakingTween.isPlaying() || t.removeCaptureCell()
								}
							}))
						}, t.onCaptureCellComplete = function() {
							if (this.captureCells && this.scene.main && this.scene.main.board)
								for (var e = this.scene.main.board.dataBoard, t = 0; t < this.captureCells.length; t++) {
									var n = this.captureCells[t],
										i = n.x;
									e[n.y][i].cell.resetImageBreak()
								}
						}, t.removeCaptureCell = function() {
							var e = this.scene.main.board.dataBoard;
							if (this.captureCells)
								for (var t = 0; t < this.captureCells.length; t++) {
									var n = this.captureCells[t],
										i = n.x;
									e[n.y][i].cell.resetImageBreak()
								}
						}, t.setValueCaptureCell = function() {
							for (var e = this.scene.main.board.dataBoard, t = 1 / this.scene.world.getPixelRatio(), n = Math.round(80 * (1 + this.captureCells.length / 8 * .05)), i = 0; i < this.captureCells.length; i++) {
								var a = Phaser.Math.Between(50, n),
									r = Phaser.Math.Between(82, 98) * Math.PI / 180,
									s = Phaser.Math.Between(3, 10) / 1e3 * t,
									o = this.captureCells[i],
									c = o.x,
									u = e[o.y][c].cell;
								u.maxScale0 = .4, u.imageBreak.setVisible(!0), u.v0 = a * t, u.alpha0 = r, u.scaleRate0 = s
							}
						}, t.createTweenBreaking = function() {
							var e = this,
								t = 1 / this.scene.world.getPixelRatio();
							this.breakingTween = this.scene.tweens.addCounter({
								from: 0,
								to: 3e3,
								onUpdate: function(n) {
									if (e.captureCells)
										for (var i = e.scene.main.board.dataBoard, a = 0; a < e.captureCells.length; a++) {
											e.angle = Phaser.Math.Between(-15, 15);
											var r = e.captureCells[a],
												s = r.x,
												o = i[r.y][s].cell,
												c = o.imageBreak,
												u = o.maxScale0,
												l = o.alpha0 < 90 ? 1 : -1,
												h = .016 * n.getValue(),
												d = Mu(o.v0, o.alpha0, h),
												p = Lu(o.v0, o.alpha0, h, 10 * t);
											c.setVisible(!0), c.x = o.x0 + d, c.y = o.y0 + -p, c.rotation += .04 * l, c.scale > u ? c.scale -= o.scaleRate0 : c.scale = u
										}
								},
								onComplete: function() {},
								delay: this.breakingDelay,
								duration: 3e3
							}).stop()
						}, t.createScaleUpTween = function() {
							var e = this,
								t = 1 / this.scene.world.getPixelRatio();
							this.scaleUpTween = this.scene.tweens.addCounter({
								from: 0,
								to: 1,
								onUpdate: function() {
									if (e.captureCells)
										for (var n = e.scene.main.board.dataBoard, i = 0; i < e.captureCells.length; i++) {
											e.angle = Phaser.Math.Between(-15, 15);
											var a = e.captureCells[i],
												r = a.x,
												s = n[a.y][r].cell.imageBreak;
											s.scale += Phaser.Math.Easing.Sine.In(1.3 * t - s.scale)
										}
								},
								ease: Phaser.Math.Easing.Sine.In,
								duration: 50,
								onComplete: function() {
									e.scaleUpTween.stop()
								}
							}).stop()
						}, e
					}(),
					Ah = Eh,
					wh = Oa.Z.GAMEPLAY,
					Th = wh.KEY,
					Ch = wh.FRAME,
					Ph = Oa.Z.GAMEPLAY_JPG,
					Ih = Ph.KEY,
					kh = Ph.FRAME,
					xh = GameCore.Configs.Board,
					Oh = xh.cols,
					Rh = xh.rows,
					_h = function(e) {
						function t(t, n, i) {
							var a;
							return (a = e.call(this, t) || this).scene = void 0, a.suggestCells = [], a.pX = void 0, a.pY = void 0, a.borderSize = 6, a.cellSize = void 0, a.cellPadding = void 0, a.boardSize = void 0, a.diceSize = void 0, a.dataBoard = [], a.cellsHighlight = [], a.cellSharking = [], a.cellHighlightCanCapture = [], a.backgroundTop = void 0, a.backgroundMiddle = void 0, a.backgroundBottom = void 0, a.woodenEffect = void 0, a.footerHeight = void 0, a.headerHeight = void 0, a.mainHeight = void 0, a.canCaptureLines = function(e, t) {
								void 0 === t && (t = 5);
								for (var n = e.length, i = e[0].length, a = [], s = [], o = [], c = 0; c < n; c++) {
									for (var u = 0, l = {
											x: -1,
											y: -1
										}, h = 0; h < i; h++) 0 === c && (o[h] = {
										count: 0,
										x: -1,
										y: -1
									}), 1 === e[c][h].value ? (o[h].count++, u++) : (l.x = h, l.y = c, o[h].x = h, o[h].y = c);
									if (u === i - 1 && s.push((0, r.Z)({
											row: c
										}, l)), c === n - 1)
										for (var d = 0; d < i; d++) o[d].count === n - 1 && a.push((0, r.Z)({
											col: d
										}, o[d]))
								}
								if (s.length >= t)
									for (var p = 0, f = {
											x: -1,
											y: -1
										}, m = 0; m < s.length; m++)
										if (0 !== m) {
											if (s[m].x === f.x && s[m].y === f.y + 1 ? (f.x = s[m].x, f.y = s[m].y, p++) : p = 1, p >= t) return {
												isCapture: !0,
												direction: "vertical",
												minLine: t
											}
										} else f.x = s[m].x, f.y = s[m].y, p++;
								if (a.length >= t)
									for (var g = 0, v = {
											x: -1,
											y: -1
										}, y = 0; y < a.length; y++)
										if (0 !== y) {
											if (a[y].x === v.x + 1 && a[y].y === v.y ? (v.x = a[y].x, v.y = a[y].y, g++) : g = 1, g >= t) return {
												isCapture: !0,
												direction: "horizontal",
												minLine: t
											}
										} else v.x = a[y].x, v.y = a[y].y, g++;
								return {
									isCapture: !1,
									direction: "",
									minLine: t
								}
							}, a.scene = t, a.setSize(n, i), a.initSize(), a.woodenEffect = new Ah(a.scene), a.init(), a
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initSize = function() {
							var e = this.scene.ads.getBannerHeight(),
								t = this.scene.world.getWorldSize().height;
							this.footerHeight = e + 130, this.headerHeight = 96, this.mainHeight = t - this.footerHeight - this.headerHeight, this.mainHeight < 336 && (this.mainHeight = 336, this.headerHeight = t - this.footerHeight - this.mainHeight), console.log(this.headerHeight, this.mainHeight, this.footerHeight)
						}, n.init = function() {
							this.createMiddleBackground(), this.createTopBackground(), this.createBottomBackground(), this.calcCellLength(), this.initDataBoard()
						}, n.createTopBackground = function() {
							var e = this.backgroundMiddle,
								t = e.x,
								n = e.y,
								i = e.displayHeight;
							this.backgroundTop = this.scene.make.image({
								x: t,
								y: n - i / 2 - 74.5,
								key: Ih,
								frame: kh.BOARD_TOP_BG
							}), this.backgroundTop.setWorldSize(375, 149)
						}, n.createMiddleBackground = function() {
							var e = this.headerHeight + this.mainHeight / 2;
							this.backgroundMiddle = this.scene.make.image({
								x: 187.5,
								y: e,
								key: Ih,
								frame: kh.BOARD_CENTER_BG
							}), this.backgroundMiddle.setWorldSize(375, 336)
						}, n.createBottomBackground = function() {
							var e = this.backgroundMiddle,
								t = e.x,
								n = e.y,
								i = e.displayHeight;
							this.backgroundBottom = this.scene.make.image({
								x: t,
								y: n + i / 2 + 74.5,
								key: Ih,
								frame: kh.BOARD_BOTTOM_BG
							}), this.backgroundBottom.setWorldSize(375, 149)
						}, n.calcCellLength = function() {
							this.boardSize = 310, this.cellSize = this.boardSize / Rh
						}, n.initDataBoard = function() {
							this.cellPadding = 1.5;
							for (var e = 19.5 + this.backgroundMiddle.x - this.backgroundMiddle.displayWidth / 2 + this.cellSize / 2 + this.borderSize, t = this.backgroundMiddle.y - this.backgroundMiddle.displayHeight / 2 + this.cellSize / 2 + this.borderSize, n = 0; n < Rh; n++) {
								this.dataBoard[n] = [];
								for (var i = 0; i < Oh; i++) {
									var a = e + i * this.cellSize + this.cellPadding * i,
										r = t + n * this.cellSize + this.cellPadding * n,
										s = {
											x: a,
											y: r,
											width: this.cellSize,
											height: this.cellSize,
											texture: Th,
											frame: Ch.GEM_TRANSPARENT,
											depth: ka.Z.PIECE - .1,
											padding: this.cellPadding,
											isWoodenEffect: !0
										},
										o = new Hu(this.scene, s);
									o.setVisible(!1), this.dataBoard[n][i] = {
										x: a,
										y: r,
										width: this.cellSize,
										height: this.cellSize,
										frame: Ch.GEM_TRANSPARENT,
										value: 0,
										cell: o
									}
								}
							}
						}, n.handleHighlight = function(e) {
							this.cellsHighlight = e;
							for (var t = 0; t < e.length; t++) {
								var n = e[t],
									i = n.x,
									a = n.y;
								if (this.dataBoard[a] && this.dataBoard[a][i] && 0 === this.dataBoard[a][i].value) {
									var r = this.dataBoard[a][i].cell;
									this.dataBoard[a][i].frame = Ch.GEM, r.setVisible(!0), r.setFrame(Ch.GEM), r.setAlpha(.4)
								}
							}
							this.canCaptureCells(e)
						}, n.handleCapturePiece = function(e) {
							try {
								if (!e || e.length <= 0) throw new Error("Invalid Capture");
								this.woodenEffect.handleShowEffect(e);
								for (var t = 0; t < e.length; t++) {
									var n = e[t],
										i = n.x,
										a = n.y,
										r = this.dataBoard[a][i].cell;
									r.stopAnimShaking(), r.setVisible(!1), this.dataBoard[a][i].frame = Ch.GEM_TRANSPARENT, this.dataBoard[a][i].value = 0
								}
							} catch (s) {}
						}, n.checkPositionCellOnCaptureCell = function(e, t) {
							var n = pe()(t).call(t, (function(t) {
								return t.x === e.x && t.y === e.y
							}));
							return n && n.length > 0
						}, n.handlePraise = function(e, t) {
							if (t && 0 !== t.length) {
								for (var n = function(e) {
										var t = Math.ceil(e / 8);
										return 8 * Wu[t - 1]
									}(t.length), i = t.length > 0 ? Math.ceil(t.length / Rh) : 1, a = [], r = 0; r < e.length; r++) {
									var s = e[r];
									this.checkPositionCellOnCaptureCell(s, t) && a.push(s)
								}
								if (0 !== a.length) {
									for (var o = a[0].pX, c = 0, u = a[0].pY, l = 0, h = 0; h < a.length; h++) {
										var d = a[h];
										d.pX < o && (o = d.pX), d.pX > c && (c = d.pX), d.pY < u && (u = d.pY), d.pY > l && (l = d.pY)
									}
									var p = o + (c - o) / 2,
										f = u + (l - u) / 2;
									this.scene.main.praise.handlePraise(p, f, n, i), this.playEatSound(i)
								}
							}
						}, n.playEatSound = function(e) {
							switch (e) {
								case 1:
									this.scene.audio.playSound(_a.EAT_ONE);
									break;
								case 2:
									this.scene.audio.playSound(_a.EAT_TWO), this.scene.audio.playSound(_a.GOOD);
									break;
								case 3:
									this.scene.audio.playSound(_a.EAT_THREE), this.scene.audio.playSound(_a.COOL);
									break;
								case 4:
									this.scene.audio.playSound(_a.EAT_FOUR), this.scene.audio.playSound(_a.EXCELLENT);
									break;
								case 5:
									this.scene.audio.playSound(_a.EAT_FIVE), this.scene.audio.playSound(_a.EXCELLENT);
									break;
								case 6:
									this.scene.audio.playSound(_a.EAT_SIX), this.scene.audio.playSound(_a.EXCELLENT)
							}
						}, n.handleRemoveHighlight = function() {
							try {
								if (!this.cellsHighlight) return;
								for (var e = 0; e < this.cellsHighlight.length; e++) {
									var t = this.cellsHighlight[e],
										n = t.x,
										i = t.y;
									if (this.dataBoard[i] && this.dataBoard[i][n] && 0 === this.dataBoard[i][n].value) {
										var a = this.dataBoard[i][n].cell;
										this.dataBoard[i][n].frame = Ch.GEM_TRANSPARENT, a.setVisible(!1), a.setFrame(Ch.GEM_TRANSPARENT), a.setAlpha(1)
									}
								}
								this.cellsHighlight = []
							} catch (r) {
								console.log(r)
							}
						}, n.canCaptureCells = function(e) {
							for (var t = this, n = this.dataBoard, i = [], a = 0; a < n.length; a++) {
								i[a] = [];
								for (var s = 0; s < n[a].length; s++) i[a][s] = (0, r.Z)({}, n[a][s])
							}
							for (var o = 0; o < e.length; o++) {
								var c = e[o],
									u = c.x;
								i[c.y][u].value = 1
							}
							this.removeAnimCanCaptureCells(i), this.cellHighlightCanCapture = [];
							var l = ph(i);
							if (!l || l.length <= 0) return !1;
							this.cellHighlightCanCapture = l;
							for (var h = function() {
									var n = l[d],
										i = n.x,
										a = n.y;
									e.some((function(e) {
										return e.x === i && e.y === a
									})) || t.cellSharking.push((0, r.Z)({}, l[d]))
								}, d = 0; d < l.length; d++) h();
							for (var p = 0; p < this.cellSharking.length; p++) {
								var f = this.cellSharking[p],
									m = f.x,
									g = f.y,
									v = this.dataBoard[g][m].cell;
								v.isShaking() || (v.setRateShaking(p % 2 === 0 ? 1 : -1), v.playAnimShaking())
							}
						}, n.removeAnimCanCaptureCells = function(e) {
							if (0 !== this.cellSharking.length) {
								for (var t = function(e) {
										for (var t = e.length, n = e[0].length, i = [], a = 0; a < t; a++) {
											for (var r = !0, s = 0; s < n; s++) 0 === e[a][s].value && (r = !1);
											r && i.push(a)
										}
										return i
									}(e), n = function(e) {
										for (var t = e.length, n = e[0].length, i = [], a = 0; a < n; a++) {
											for (var r = !0, s = 0; s < t; s++) 0 === e[s][a].value && (r = !1);
											r && i.push(a)
										}
										return i
									}(e), i = 0; i < this.cellSharking.length; i++) {
									var a = this.cellSharking[i],
										r = a.x,
										s = a.y,
										o = this.dataBoard[s][r].cell; - 1 === Ot()(t).call(t, s) && -1 === Ot()(n).call(n, r) && o.stopAnimShaking()
								}
								this.cellSharking = []
							}
						}, n.removeAllCanCaptureCells = function() {
							if (0 !== this.cellSharking.length) {
								for (var e = 0; e < this.cellSharking.length; e++) {
									var t = this.cellSharking[e],
										n = t.x,
										i = t.y;
									this.dataBoard[i][n].cell.stopAnimShaking()
								}
								this.cellSharking = []
							}
						}, n.handleSuggestMove = function(e) {
							try {
								this.suggestCells = e;
								for (var t = 0; t < e.length; t++) {
									var n = e[t],
										i = n.x,
										a = n.y,
										r = this.dataBoard[a][i].cell;
									r.setFrame(Ch.GEM), r.setVisible(!0), r.setAlpha(.4)
								}
							} catch (s) {
								console.log(s)
							}
						}, n.handleRemoveSuggestMove = function() {
							try {
								for (var e = 0; e < this.suggestCells.length; e++) {
									var t = this.suggestCells[e],
										n = t.x,
										i = t.y,
										a = this.dataBoard[i][n].cell;
									this.isCellHighlight(a) || (a.setFrame(Ch.GEM_TRANSPARENT), a.setVisible(!1), a.setAlpha(0))
								}
								this.suggestCells = []
							} catch (r) {
								console.log(r)
							}
						}, n.handleMove = function(e, t) {
							try {
								for (var n = 0; n < e.length; n++) {
									var i = e[n],
										a = i.x,
										r = i.y;
									if (this.dataBoard[r] && this.dataBoard[r][a]) {
										this.dataBoard[r][a].frame = Ch.GEM, this.dataBoard[r][a].value = 1;
										var s = this.dataBoard[r][a].cell;
										s.setVisible(!0), s.setFrame(Ch.GEM), s.setAlpha(1)
									}
								}
								var o = ph(this.dataBoard);
								this.handleCapturePiece(o), this.handlePraise(e, o), t && t(), this.scene.updateMatchData(), this.handleGameOver()
							} catch (c) {
								console.log(c)
							}
						}, n.handleGameOver = function() {
							for (var e = [], t = this.scene.footer.pieces.piecesActive, n = this.scene.footer.pieces.allPieces, i = 0; i < t.length; i++) {
								var a = t[i],
									r = a.position;
								if (!a.used) {
									var s = n[r];
									e.push({
										data: s.data,
										type: s.type,
										direction: s.direction,
										isReverse: s.isReverse,
										frame: s.frame
									})
								}
							}
							fh(this.dataBoard, e) && this.runAnimationGameOver()
						}, n.runAnimationGameOver = function() {
							var e = this;
							try {
								this.scene.audio.playSound(_a.BOARD_GAME_OVER);
								for (var t = [], n = 0; n < Rh; n++)
									for (var i = 0; i < Oh; i++)
										if (this.dataBoard[n] && this.dataBoard[n][i] && 1 === this.dataBoard[n][i].value) {
											var a = Math.floor(1e3 * Math.random() + 50);
											t.push({
												delay: a,
												x: i,
												y: n
											})
										} li()(t).call(t, (function(e, t) {
									return e.delay - t.delay
								}));
								for (var r = function() {
										var n = t[s],
											i = n.delay,
											a = n.x,
											r = n.y;
										e.scene.time.addEvent({
											delay: i,
											callback: function() {
												e.dataBoard[r][a].cell.playAnimImageGameOver()
											}
										})
									}, s = 0; s < t.length; s++) r();
								this.scene.time.addEvent({
									delay: t[t.length - 1].delay + 100,
									callback: function() {
										e.scene.handleRequestFinishGame()
									}
								})
							} catch (o) {
								console.log(o)
							}
						}, n.rescue = function() {
							for (var e = 0; e < this.dataBoard.length; e++)
								for (var t = 0; t < this.dataBoard[e].length; t++)
									if (this.dataBoard[e]) {
										var n = this.dataBoard[e][t];
										n && 1 === n.value && (this.dataBoard[e][t].cell.setFrame(Ch.GEM), this.dataBoard[e][t].cell.hideImageGameOver())
									} this.handleUseBomb()
						}, n.hasPieceL5 = function() {
							var e = this.scene.footer.pieces.piecesActive;
							return pe()(e).call(e, (function(e) {
								return e.type === El
							})).length > 0
						}, n.handleUseBomb = function() {
							try {
								for (var e = this.hasPieceL5(), t = Math.floor(Math.random() * zu.length), n = e ? Ku[t] : zu[t], i = [], a = n.minRow; a < n.minRow + n.rows; a++)
									for (var r = n.minCol; r < n.minCol + n.cols; r++) this.dataBoard[a][r].frame !== Ch.GEM_TRANSPARENT && i.push({
										x: r,
										y: a
									});
								for (var s = 0; s < i.length; s++) {
									var o = i[s],
										c = o.x,
										u = o.y,
										l = this.dataBoard[u][c];
									l.frame = Ch.GEM_TRANSPARENT, l.value = 0, l.cell.setFrame(Ch.GEM_TRANSPARENT), l.cell.setVisible(!1)
								}
								this.woodenEffect.handleShowEffect(i), this.scene.footer.pieces.setActivePieces(), this.scene.updateMatchData()
							} catch (h) {
								console.log(h)
							}
						}, n.getBoardByFen = function(e) {
							var t = [],
								n = e.split(" ");
							if (n.length < 2) throw new Error("Invalid fen");
							for (var i = n[0].split("/"), a = i.length, r = 0; r < a; r++) {
								t[r] = [];
								for (var s = Sh(i[r]), o = 0; o < s.length; o++) t[r][o] = s[o]
							}
							return t
						}, n.getFenByBoard = function() {
							for (var e = "", t = 0; t < Rh; t++) {
								for (var n = 0, i = "", a = 0; a < Oh; a++) {
									if (0 === this.dataBoard[t][a].value && n++, 1 === this.dataBoard[t][a].value) n > 0 && (i += n >= Rh ? "x" : "" + n, n = 0), i += "" + vh(this.dataBoard[t][a].frame);
									a === this.dataBoard[t].length - 1 && n > 0 && (i += n >= Rh ? "x" : "" + n)
								}
								e += t === this.dataBoard.length - 1 ? "" + i : i + "/"
							}
							return e
						}, n.startGame = function(e) {
							if (e)
								for (var t = 0; t < e.length; t++)
									for (var n = 0; n < e[t].length; n++) {
										var i = e[t][n],
											a = i.value,
											r = i.frame,
											s = this.dataBoard[t][n];
										1 === a && (s.value = 1, s.frame = r, s.cell.setFrame(Ch.GEM), s.cell.setVisible(!0))
									}
						}, n.clearBoard = function() {
							for (var e = 0; e < Rh; e++)
								for (var t = 0; t < Oh; t++) {
									var n = this.dataBoard[e][t];
									n.value = 0, n.frame = Ch.GEM_TRANSPARENT, n.cell.setFrame(Ch.GEM_TRANSPARENT), n.cell.setVisible(!1), n.cell.hideImageGameOver()
								}
						}, n.isCellHighlight = function(e) {
							var t, n = pe()(t = this.cellsHighlight).call(t, (function(t) {
								return t.x === e.x && t.y && e.y
							}));
							return !!(n && n.length > 0)
						}, t
					}(Phaser.GameObjects.Container),
					Bh = function() {
						var e = GameCore.Utils.Device,
							t = window.navigator.vibrate;
						return e.isAndroid() && "function" === typeof t || e.isMobileWeb() && "function" === typeof t
					},
					Dh = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i, a, r, o;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										n = Math.round(t / 80), i = 0, a = function() {
											var e = (0, s.Z)(u().mark((function e() {
												return u().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.prev = 0, e.next = 3, FBInstant.performHapticFeedbackAsync();
														case 3:
															e.next = 8;
															break;
														case 5:
															e.prev = 5, e.t0 = e.catch(0), console.log("can not haptic");
														case 8:
														case "end":
															return e.stop()
													}
												}), e, null, [
													[0, 5]
												])
											})));
											return function() {
												return e.apply(this, arguments)
											}
										}();
									case 3:
										if (!(i < n)) {
											e.next = 11;
											break
										}
										return r = a(), o = (0, lt.qZ)(80), i += 1, e.next = 9, ee().all([r, o]);
									case 9:
										e.next = 3;
										break;
									case 11:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Nh = function(e) {
						window.navigator.vibrate(0), window.navigator.vibrate(e)
					},
					Mh = function(e) {
						try {
							if (!Bh()) return !1;
							var t = GameCore.Utils.Device;
							t.isAndroid() || t.isMobileWeb() ? Nh(e) : t.isIOS() && Dh(e).catch((function(e) {
								return console.log(e)
							}))
						} catch (n) {}
					},
					Lh = GameCore.Configs.Gameplay.VibrateValue,
					Fh = Oa.Z.EFFECTS,
					Gh = Fh.KEY,
					Zh = Fh.FRAME,
					Uh = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.listScore = [], n.score = void 0, n.startX = void 0, n.startY = void 0, n.scoreText = void 0, n.tweenShowScoreText = void 0, n.tweenHideScoreText = void 0, n.tweenShowPraiseFrame = void 0, n.tweenHidePraiseFrame = void 0, n.praiseFrame = void 0, n.praiseScoreText = void 0, n.particle = void 0, n.emitter = void 0, n.scene = t, t.add.existing((0, Ba.Z)(n)), n.setVisible(!1).setAlpha(0), n.init(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.createScoreText(), this.createTweenScoreText(), this.createPraiseFrame(), this.createPraiseScoreText(), this.createParticle(), this.createEmitter()
						}, n.createParticle = function() {
							this.particle = this.scene.add.particles(Gh), this.particle.setDepth(ka.Z.ON_TOP + 1)
						}, n.createEmitter = function() {
							this.emitter = this.particle.createEmitter({
								x: 0,
								y: 0,
								scale: {
									start: .05,
									end: .2
								},
								speed: {
									min: 20,
									max: 70
								},
								lifespan: {
									min: 500,
									max: 1e3
								},
								quantity: 20,
								on: !1,
								tint: [16441092, 16422659],
								frame: Zh.FX_STAR,
								delay: 350
							})
						}, n.createScoreText = function() {
							this.scoreText = this.scene.make.bitmapText({
								font: Bc.Z.NUMBER_GOLD.KEY,
								size: this.scene.fontSize(100),
								text: "+0",
								origin: {
									x: .5,
									y: .5
								}
							}), this.scoreText.setScale(0).setAlpha(0), this.scoreText.setDepth(ka.Z.ON_TOP), this.scoreText.setVisible(!1)
						}, n.createTweenScoreText = function() {
							var e, t = this,
								n = this.scene.storage.getState(),
								i = Dr(n),
								a = 265;
							Ot()(e = [ia, na, aa]).call(e, i) >= 0 && (a = 105), this.tweenShowScoreText = this.scene.tweens.add({
								paused: !0,
								targets: this.scoreText,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								duration: 300,
								onComplete: function() {
									t.tweenHideScoreText = t.scene.tweens.add({
										targets: t.scoreText,
										scale: {
											from: 1,
											to: .5
										},
										alpha: {
											from: 1,
											to: .5
										},
										x: a,
										y: 65,
										delay: 1e3,
										duration: 300,
										onComplete: function() {
											t.scoreText.setVisible(!1), t.scoreText.setAlpha(0), t.scoreText.setScale(0), t.scene.handleAddScoreAnim(t.score || 0)
										}
									})
								}
							})
						}, n.playAnimShowScoreText = function() {
							if (this.tweenHideScoreText && this.tweenHideScoreText.isPlaying()) {
								var e;
								this.tweenHideScoreText.stop(), this.scoreText.setPosition(this.startX, this.startY);
								var t = this.scene.storage.getState(),
									n = Dr(t),
									i = 0;
								n === ta ? (i = this.scene.header.mainScoreBlock.score, this.scene.header.mainScoreBlock.setScore(i + (this.score || 0)), this.scene.header.mainScoreBlock.setScoreText(i + (this.score || 0))) : Ot()(e = [ia, na, aa]).call(e, n) >= 0 && (i = this.scene.header.myScoreBlock.score, this.scene.header.myScoreBlock.setScore(i + (this.score || 0)), this.scene.header.myScoreBlock.setScoreText(i + (this.score || 0)))
							}
							this.score = this.listScore.shift() || 0, this.scene.handleUpdateScore(this.score), this.scoreText.setScale(0).setAlpha(0).setVisible(!0), this.tweenShowScoreText.play()
						}, n.createPraiseFrame = function() {
							this.praiseFrame = this.scene.make.image({
								x: 0,
								y: 0,
								key: Gh
							}), this.praiseFrame.setScale(0), this.praiseFrame.setAlpha(0), this.praiseFrame.setDepth(ka.Z.ON_TOP), this.praiseFrame.setVisible(!1)
						}, n.createTweenPraiseFrame = function() {
							var e = this;
							if (!this.tweenShowPraiseFrame || !this.tweenHidePraiseFrame) {
								var t = this.praiseFrame.scale;
								this.tweenShowPraiseFrame = this.scene.tweens.add({
									paused: !0,
									targets: this.praiseFrame,
									scale: {
										from: 0,
										to: t
									},
									alpha: {
										from: 0,
										to: 1
									},
									duration: 300,
									delay: 100,
									ease: Phaser.Math.Easing.Back.Out,
									onComplete: function() {
										e.tweenHidePraiseFrame.play()
									}
								}), this.tweenHidePraiseFrame = this.scene.tweens.add({
									paused: !0,
									targets: this.praiseFrame,
									scale: {
										from: t,
										to: 0
									},
									alpha: {
										from: 1,
										to: 0
									},
									duration: 300,
									delay: 1e3,
									onComplete: function() {
										e.praiseFrame.setScale(0), e.praiseFrame.setAlpha(0), e.praiseFrame.setVisible(!1)
									}
								})
							}
						}, n.playAnimShowPraiseFrame = function() {
							this.createTweenPraiseFrame(), (this.tweenShowPraiseFrame.isPlaying() || this.tweenHidePraiseFrame.isPlaying()) && (this.tweenShowPraiseFrame.resetTweenData(!1), this.tweenHidePraiseFrame.resetTweenData(!1)), this.praiseFrame.setScale(0).setAlpha(0).setVisible(!0), this.tweenShowPraiseFrame.play()
						}, n.createPraiseScoreText = function() {
							this.praiseScoreText = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(30),
								origin: {
									x: .5,
									y: .5
								}
							}), this.praiseScoreText.setDepth(ka.Z.ON_TOP), this.add(this.praiseScoreText), Phaser.Display.Align.In.Center(this.praiseScoreText, this, 0, 20)
						}, n.handlePraise = function(e, t, n, i) {
							this.startX = e, this.startY = t + 15, this.listScore.push(n);
							var a = e - 10;
							this.scoreText.setPosition(a, t + 15), this.scoreText.setText("+" + n), a - this.scoreText.fontSize / 2 < 0 && (a += this.scoreText.fontSize / 2, this.scoreText.setPosition(a, t + 15)), this.playAnimShowScoreText(), this.handlePraiseFrameText(e, t, i);
							var r = this.getVibrateByLevel(i);
							this.scene.player.getPlayerSettings().vibrate && Mh(r), i <= 1 || this.changeExplode(a, t, i)
						}, n.getVibrateByLevel = function(e) {
							return Lh[e] || 0
						}, n.changeExplode = function(e, t, n) {
							var i = this.getExplodeByLevel(n);
							i && (this.emitter.setScale({
								start: .05 * i.scale,
								end: .2 * i.scale
							}), this.emitter.setSpeed({
								min: 30 * i.speed,
								max: 80 * i.speed
							}), this.emitter.setQuantity(20 * i.quantity)), this.emitter.explode(20 * i.quantity, e, t)
						}, n.handlePraiseFrameText = function(e, t, n) {
							var i = this.getMainFrameByLevel(n);
							if (i) {
								var a = 0,
									r = 0;
								switch (i) {
									case Zh.TEXT_COOL:
										a = 84, r = 30;
										break;
									case Zh.TEXT_GOOD:
										a = 115.5, r = 30;
										break;
									case Zh.TEXT_EXCELLENT:
										a = 207, r = 30
								}
								this.praiseFrame.setFrame(i), this.praiseFrame.setWorldSize(a, r), this.praiseFrame.setPosition(e - a / 2 < 0 ? a / 2 : e, t - 40), this.playAnimShowPraiseFrame()
							}
						}, n.getExplodeByLevel = function(e) {
							return fl[e - 1] || fl[0] || null
						}, n.getMainFrameByLevel = function(e) {
							var t = pl[e - 1] || pl[0];
							return Phaser.Utils.Array.GetRandom(t.frames)
						}, n.reset = function() {
							this.createTweenScoreText()
						}, t
					}(Phaser.GameObjects.Container),
					Hh = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.board = void 0, n.praise = void 0, n.scene = t, t.add.existing((0, Ba.Z)(n)), n.init(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.createBoard(), this.createPraise()
						}, n.createBoard = function() {
							this.board = new _h(this.scene, 375, 336), this.board.setPosition(0, 25)
						}, n.createPraise = function() {
							this.praise = new Uh(this.scene)
						}, n.getHeaderHeight = function() {
							return this.board.headerHeight
						}, t
					}(Phaser.GameObjects.Container),
					Vh = Hh,
					Yh = Oa.Z.GAMEPLAY,
					Wh = Yh.KEY,
					zh = Yh.FRAME,
					Kh = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).titleSprite = void 0, n.background = void 0, n.textScore = void 0, n.avatar = void 0, n.score = void 0, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initScoreBlockTitle = function() {
							this.createTitleSprite(), this.createBackgroundScore(), this.createScoreText(), this.setScore(0), this.setScoreText(0)
						}, n.initScoreBlockAvatar = function() {
							this.createAvatar(), this.createBackgroundScore(), this.createScoreText(), this.setScore(0), this.setScoreText(0)
						}, n.createTitleSprite = function() {
							this.titleSprite = this.scene.make.image({
								key: Wh,
								frame: zh.TEXT_SCORE
							}), this.add(this.titleSprite), Phaser.Display.Align.In.Center(this.titleSprite, this)
						}, n.createAvatar = function() {
							this.avatar = new oc(this.scene, {
								key: Wh,
								frame: zh.AVATAR_BORDER,
								background: zh.AVATAR_BACKGROUND,
								width: 37.5,
								height: 37.5,
								radius: 37.5,
								borderWidth: 5
							}), this.add(this.avatar), Phaser.Display.Align.In.Center(this.avatar, this, 0, -7)
						}, n.createBackgroundScore = function() {
							this.background = this.scene.make.image({
								key: Wh,
								frame: zh.BG_SCORE
							}), this.background.setWorldSize(80, 27), this.add(this.background), Phaser.Display.Align.In.Center(this.background, this, 0, 25)
						}, n.createScoreText = function() {
							this.textScore = this.scene.make.bitmapText({
								font: Bc.Z.NUMBER_GOLD.KEY,
								size: this.scene.fontSize(70),
								text: "0",
								origin: {
									x: .5,
									y: .5
								}
							}), this.add(this.textScore), Phaser.Display.Align.In.Center(this.textScore, this.background, 0, 6)
						}, n.setScore = function(e) {
							this.score = e
						}, n.setScoreText = function(e) {
							this.textScore.setText(String(e))
						}, t
					}(Phaser.GameObjects.Container),
					jh = Kh,
					Xh = Oa.Z.GAMEPLAY.FRAME,
					qh = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).title = void 0, n.bestScoreText = void 0, n.tweenShow = void 0, n.tweenHide = void 0, n.initScoreBlockTitle(), n.scene.add.existing((0, Ba.Z)(n)), n.updateTextFrame(), n
						}
						return (0, o.Z)(t, e), t.prototype.updateTextFrame = function() {
							this.titleSprite.setFrame(Xh.TEXT_BEST), this.titleSprite.setWorldSize(39, 12)
						}, t
					}(jh),
					Qh = qh,
					Jh = Oa.Z.GAMEPLAY.FRAME,
					$h = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.title = void 0, n.bestScoreText = void 0, n.tweenShow = void 0, n.tweenHide = void 0, n.addScore = void 0, n.scene = t, n.initScoreBlockTitle(), n.scene.add.existing((0, Ba.Z)(n)), n.updateTextFrame(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateTextFrame = function() {
							this.titleSprite.setFrame(Jh.TEXT_SCORE), this.titleSprite.setWorldSize(45, 12)
						}, n.animAddScore = function(e) {
							var t = this;
							if (this.addScore && this.addScore.isPlaying()) {
								this.addScore.stop();
								var n = this.score + e;
								this.setScore(n), this.setScoreText(n)
							}
							this.addScore = this.scene.tweens.addCounter({
								from: 0,
								to: e,
								duration: 500,
								onUpdate: function(e) {
									var n = t.score + Math.floor(e.getValue());
									t.setScoreText(n)
								},
								onComplete: function() {
									var n = t.score + e;
									t.setScore(n), t.setScoreText(n), t.scene.tutorialManager.isRunning() && t.scene.tutorialManager.nextTutorial()
								}
							})
						}, t
					}(jh),
					ed = $h,
					td = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).addScore = void 0, n.initScoreBlockAvatar(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateInfo = function() {
							var e = this.scene.player.getPlayer(),
								t = e.playerId,
								n = e.photo;
							this.avatar.loadPhoto(t, n)
						}, n.animAddScore = function(e) {
							var t = this;
							if (this.addScore && this.addScore.isPlaying()) {
								this.addScore.stop();
								var n = this.score + e;
								this.setScore(n), this.setScoreText(n)
							}
							this.addScore = this.scene.tweens.addCounter({
								from: 0,
								to: e,
								duration: 1e3,
								onUpdate: function(e) {
									var n = t.score + Math.floor(e.getValue());
									t.setScoreText(n)
								},
								onComplete: function() {
									var n = t.score + e;
									t.setScore(n), t.setScoreText(n)
								}
							})
						}, t
					}(jh),
					nd = td,
					id = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).initScoreBlockAvatar(), n.scene.add.existing((0, Ba.Z)(n)), n
						}
						return (0, o.Z)(t, e), t.prototype.updateInfo = function() {
							var e = this.scene.storage.getState(),
								t = vs(e),
								n = ds(e),
								i = n.playerId,
								a = n.photo,
								r = (t[i] || {}).score,
								s = void 0 === r ? 0 : r;
							this.textScore.setText(String(s)), this.avatar.loadPhoto(i, a)
						}, t
					}(jh),
					ad = id,
					rd = Oa.Z.GAMEPLAY,
					sd = rd.KEY,
					od = rd.FRAME,
					cd = Oa.Z.GAMEPLAY_JPG,
					ud = cd.KEY,
					ld = cd.FRAME,
					hd = function(e) {
						function t(t) {
							var n;
							(n = e.call(this, t) || this).scene = void 0, n.buttonSetting = void 0, n.bestScoreBlock = void 0, n.mainScoreBlock = void 0, n.myScoreBlock = void 0, n.opponentScoreBlock = void 0, n.icon = void 0, n.defaultHeight = 96, n.deltaY = void 0, n.scene = t;
							var i = Math.min(n.scene.main.getHeaderHeight(), n.defaultHeight);
							return n.deltaY = i - n.defaultHeight, console.log(n.deltaY), t.add.existing((0, Ba.Z)(n)), n.createBackground(), n.createBottomBackground(), n.createIcon(), n.createBestScoreBlock(), n.createMainScoreBlock(), n.createMyScoreBlock(), n.createOpponentScoreBlock(), n.createSettingButton(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createBackground = function() {
							var e = this.scene.make.image({
								x: 0,
								y: 0,
								key: ud,
								frame: ld.PANEL_TOP_1
							});
							e.setWorldSize(375, 50), this.add(e), Phaser.Display.Align.In.Center(e, this, 0, 25 + this.deltaY)
						}, n.createBottomBackground = function() {
							var e = this.scene.make.image({
								x: 0,
								y: 0,
								key: sd,
								frame: od.PANEL_TOP_2
							});
							e.setWorldSize(375, 48), this.add(e), Phaser.Display.Align.In.Center(e, this, 0, 74 + this.deltaY)
						}, n.createIcon = function() {
							this.icon = this.scene.make.image({
								x: 0,
								y: 0,
								key: sd,
								frame: od.ICON_CUP
							}), this.icon.setWorldSize(39, 36), this.add(this.icon), Phaser.Display.Align.In.Center(this.icon, this, 0, 60 + this.deltaY)
						}, n.createBestScoreBlock = function() {
							this.bestScoreBlock = new Qh(this.scene), this.add(this.bestScoreBlock), Phaser.Display.Align.In.LeftCenter(this.bestScoreBlock, this, 83, 40 + this.deltaY)
						}, n.createMainScoreBlock = function() {
							this.mainScoreBlock = new ed(this.scene), this.add(this.mainScoreBlock), Phaser.Display.Align.In.RightCenter(this.mainScoreBlock, this, 83, 40 + this.deltaY)
						}, n.createMyScoreBlock = function() {
							this.myScoreBlock = new nd(this.scene), this.myScoreBlock.setVisible(!1), this.add(this.myScoreBlock), Phaser.Display.Align.In.LeftCenter(this.myScoreBlock, this, 83, 45 + this.deltaY)
						}, n.createOpponentScoreBlock = function() {
							this.opponentScoreBlock = new ad(this.scene), this.opponentScoreBlock.setVisible(!1), this.add(this.opponentScoreBlock), Phaser.Display.Align.In.RightCenter(this.opponentScoreBlock, this, 83, 45 + this.deltaY)
						}, n.createSettingButton = function() {
							this.buttonSetting = new _c(this.scene, sd, od.ICON_PAUSE, 42, 42), this.buttonSetting.setName("Setting"), this.add(this.buttonSetting), Phaser.Display.Align.In.LeftCenter(this.buttonSetting, this, 175, 55 + this.deltaY)
						}, n.setIconCup = function() {
							this.icon.setFrame(od.ICON_CUP), this.icon.setWorldSize(39, 36)
						}, n.setIconBattle = function() {
							this.icon.setFrame(od.ICON_BATTLE), this.icon.setWorldSize(35.5, 37)
						}, t
					}(Phaser.GameObjects.Container),
					dd = hd,
					pd = function() {
						var e, t = window.game.facebook;
						return t ? (null == (e = t.platform) ? void 0 : e.toLowerCase()) || "" : null
					},
					fd = Oa.Z.GAMEPLAY,
					md = fd.KEY,
					gd = fd.FRAME,
					vd = 8,
					yd = 8,
					Sd = function(e) {
						function t(n, i, a) {
							var r;
							return (r = e.call(this, n) || this).scene = void 0, r.type = void 0, r.direction = void 0, r.isReverse = !1, r.data = [], r.matrixData = void 0, r.texture = void 0, r.frame = void 0, r.maxHeight = void 0, r.cellItems = [], r.originalData = void 0, r.isSetDrag = !1, r.isCreateCell = !1, r.wrap = void 0, r.wrapPiece = void 0, r.isDragEndRunning = !1, r.isActive = !0, r.isVisible = !0, r.pointerY = void 0, r.parentHeight = void 0, r.index = void 0, r.props = void 0, r.cells = [], r.parent = void 0, r.moveTopNumber = 75, r.backupPx = void 0, r.backupPy = void 0, r.animMoveTopAndScaleUp = void 0, r.animMoveDownAndScaleDown = void 0, r.animShow = void 0, r.distancePY = void 0, r.cellShaking = [], r.props = a, r.type = a.type, r.matrixData = a.matrixData, r.data = t.buildData(r.matrixData), r.direction = a.direction || null, r.parentHeight = a.parentHeight || 0, r.isReverse = a.isReverse || !1, r.parent = i, r.scene = n, r.scene.add.existing((0, Ba.Z)(r)), r.createWrapPiece(), r.listenEvents(), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createWrapPiece = function() {
							var e = this.scene.gameZone.width / 3;
							this.wrapPiece = this.scene.make.image({
								x: e / 2,
								y: e / 2,
								key: md,
								frame: gd.GEM_TRANSPARENT
							}), this.wrapPiece.setWorldSize(e, e)
						}, n.updatePosition = function(e, t) {
							var n = this.getContainerSize(),
								i = n.width,
								a = n.height,
								r = this.parent.cellSize,
								s = this.scene.gameZone.width;
							this.setPosition(e + s / 6 - i / 2 + r / 2, t + s / 6 - a / 2 + r / 2), this.wrapPiece.setPosition(e + this.wrapPiece.displayWidth / 2, t + this.wrapPiece.displayHeight / 2 - 45), this.backupPx = this.x, this.backupPy = this.y
						}, n.listenEvents = function() {
							var e = this;
							this.setInteractiveContainer(), this.wrapPiece.on(Phaser.Input.Events.POINTER_DOWN, (function() {
								e.parent.playTweenToEnableMaxFps()
							})), this.wrapPiece.on(Phaser.Input.Events.DRAG_START, (function(t) {
								e.handleDragStart(t)
							})), this.wrapPiece.on(Phaser.Input.Events.DRAG, (function(t) {
								e.handleDrag(t)
							})), this.wrapPiece.on(Phaser.Input.Events.DRAG_END, (function() {
								e.handleDragEnd(), e.parent.stopTweenToEnableMaxFps()
							}))
						}, n.setIndex = function(e) {
							this.index = e
						}, n.setInteractiveContainer = function() {
							var e = this.scene.gameZone.width / 3;
							this.wrapPiece.setInteractive().input.hitArea.setTo(0, 0, e / this.wrapPiece.scale, 180 / this.wrapPiece.scale), this.scene.input.setDraggable(this.wrapPiece)
						}, n.handleDragStart = function(e) {
							var t = this;
							if (!this.scene.gameOver) {
								this.animMoveDownAndScaleDown && this.animMoveDownAndScaleDown.isPlaying() && (this.animMoveDownAndScaleDown.stop(), this.setScale(1)), this.scene.tutorialManager.isRunning() && this.scene.tutorialManager.dragStart(), this.scene.audio.playSound(_a.PIECE_PICK);
								var n = this.scene.main.board.cellSize / this.parent.cellSize,
									i = this.getContainerSize(),
									a = i.width,
									r = i.height,
									s = e.worldX + this.parent.cellSize * n / 2 - a * n / 2,
									o = e.worldY + this.parent.cellSize - this.moveTopNumber - r * n;
								"web" == pd() && (o = e.worldY + this.parent.cellSize * n / 2 - r * n), this.distancePY = o - e.worldY, this.animMoveTopAndScaleUp = this.scene.tweens.add({
									x: s,
									y: o,
									scale: n,
									duration: 150,
									targets: this,
									ease: "Sine.easeInOut",
									delay: 20,
									onComplete: function() {
										t.setPosition(s, o);
										var e = t.getCellsHighlight();
										t.scene.main.board.handleRemoveHighlight(), t.scene.main.board.handleHighlight(e)
									}
								}), this.drawSuggestCells()
							}
						}, n.handleDrag = function(e) {
							if (!this.scene.gameOver) try {
								this.animShow && this.animShow.isPlaying() && (this.animShow.stop(), this.setAlpha(1).setScale(1).setPosition(this.x, this.y)), this.animMoveTopAndScaleUp && this.animMoveTopAndScaleUp.isPlaying() && (this.animMoveTopAndScaleUp.stop(), this.setScale(2)), this.scene.game.updateFps(xa.Z.max);
								var t = this.getContainerSize(),
									n = (t.height, t.width),
									i = e.worldX + this.parent.cellSize * this.scale / 2 - n / 2,
									a = e.worldY + this.distancePY;
								this.setPosition(i, a), this.canMove();
								var r = this.getCellsHighlight();
								this.scene.main.board.handleRemoveHighlight(), this.scene.main.board.handleHighlight(r), this.shakingCellInPieceCanCapture()
							} catch (s) {
								this.handleDragPieceInvalidMove()
							}
						}, n.shakingCellInPieceCanCapture = function() {
							var e = this;
							this.removeAnimCanCaptureCells();
							for (var t = this.getCellsHighlight(), n = this.scene.main.board.cellHighlightCanCapture, i = function() {
									var i = t[a],
										r = i.x,
										s = i.y;
									if (n.some((function(e) {
											return e.x === r && e.y === s
										}))) {
										var o = t[a],
											c = o.rowInPiece,
											u = o.colInPiece,
											l = e.cells[c][u];
										l.setRateShaking(a % 2 === 0 ? 1 : -1), l.playAnimShaking(), e.cellShaking.push(l)
									}
								}, a = 0; a < t.length; a++) i()
						}, n.removeAnimCanCaptureCells = function() {
							for (var e = 0; e < this.cellShaking.length; e++) {
								this.cellShaking[e].stopAnimShaking()
							}
							this.cellShaking = []
						}, n.handleDragPieceInvalidMove = function() {
							this.scene.main.board.handleRemoveHighlight(), this.scene.main.board.removeAllCanCaptureCells(), this.removeAnimCanCaptureCells()
						}, n.handleDragEnd = function() {
							this.scene.main.board.handleRemoveSuggestMove(), this.scene.main.board.removeAllCanCaptureCells();
							try {
								this.canMove(), this.scene.audio.playSound(_a.PIECE_DROP), this.handleBoardMoveCompleted(), this.removeAnimCanCaptureCells()
							} catch (e) {
								this.handleInvalidMove()
							}
						}, n.handleBoardMoveCompleted = function() {
							var e = this,
								t = this.getPositionTopLeftInBoard();
							if (t) {
								var n = t.x,
									i = t.y,
									a = this.scene.main.board.dataBoard[i][n],
									r = a.x + this.scene.main.board.cellPadding,
									s = a.y + this.scene.main.board.cellPadding,
									o = this.getCellsHighlight();
								this.scene.add.tween({
									targets: this,
									x: r,
									y: s,
									duration: 50,
									onComplete: function() {
										e.scene.main.board.handleRemoveHighlight(), e.hide(), e.setScale(1), e.parent.removeActivePiece(e.index), e.scene.main.board.handleMove(o, e.onBoardHandleMoveCompleted.bind(e))
									}
								})
							} else this.scene.main.board.handleRemoveHighlight()
						}, n.hide = function() {
							this.setVisible(!1), this.wrapPiece.setVisible(!1)
						}, n.show = function() {
							this.setVisible(!0), this.wrapPiece.setVisible(!0)
						}, n.playAnimShow = function() {
							this.setAlpha(0).setScale(0), this.show(), this.animShow.play()
						}, n.onBoardHandleMoveCompleted = function() {
							this.scene.tutorialManager.isRunning() || (this.parent.setActivePieces(), this.parent.existPiecesActive() || this.parent.showNewPieces())
						}, n.drawSuggestCells = function() {
							var e = function(e, t) {
								for (var n = e.length, i = e[0].length, a = 0, r = 0, s = 0, o = 0; o < n; o++)
									for (var c = 0; c < i; c++)
										if (mh(e, c, o, t) && (r = c, s = o, ++a > 1)) return null;
								if (0 === a) return null;
								for (var u = [], l = 0; l < t.data.length; l++)
									for (var h = 0; h < t.data[l].length; h++) t.data[l][h].texture && u.push({
										x: r + h,
										y: s + l
									});
								return u && u.length > 0 ? u : null
							}(this.scene.main.board.dataBoard, {
								data: this.data
							});
							e && this.scene.main.board.handleSuggestMove(e)
						}, n.getPositionFirstCellHighlight = function() {
							var e = this.scene.main.board.dataBoard,
								t = this.getPositionTopLeftInBoard();
							if (!t) return {
								x: 0,
								y: 0
							};
							var n = t.x,
								i = t.y;
							return t ? {
								x: e[i][n].x,
								y: -(this.scene.scale.height - this.parentHeight - e[i][n].y)
							} : {
								x: 0,
								y: 0
							}
						}, n.handleInvalidMove = function() {
							this.scene.audio.playSound(_a.PIECE_INVALID_MOVE), this.scene.tutorialManager.isRunning() && this.scene.tutorialManager.invalidMove(), this.animMoveDownAndScaleDown = this.scene.tweens.add({
								x: this.backupPx,
								y: this.backupPy,
								scaleX: 1,
								scaleY: 1,
								duration: 300,
								targets: this,
								ease: "Sine.easeInOut",
								delay: 20
							})
						}, n.canMove = function() {
							var e = this.scene.main.board.dataBoard,
								t = this.getCellsHighlight();
							if (0 === t.length) throw new Error("Invalid Move");
							for (var n = !0, i = 0; i < t.length; i++) {
								var a = t[i],
									r = a.x,
									s = a.y;
								if (!e[s] || !e[s][r] || 0 !== e[s][r].value) {
									n = !1;
									break
								}
							}
							if (!n || 0 === t.length) throw new Error("Invalid Move");
							return n
						}, n.getCellsHighlight = function() {
							var e = this.scene.main.board.dataBoard,
								t = [],
								n = this.getPositionTopLeftInBoard();
							if (null === n) return t;
							if (this.scene.tutorialManager.isRunning() && !this.scene.tutorialManager.validTargetPosition(n)) return t;
							for (var i = 0; i < this.data.length; i++)
								for (var a = 0; a < this.data[i].length; a++)
									if (this.data[i][a].texture) {
										var r = a + n.x,
											s = i + n.y,
											o = e[s] && e[s][r] ? e[s][r].x : 0,
											c = e[s] && e[s][r] ? e[s][r].y : 0;
										if (s >= vd || r >= yd || !e[s][r] || 1 === e[s][r].value) return [];
										t.push({
											x: r,
											y: s,
											pX: o,
											pY: c,
											rowInPiece: i,
											colInPiece: a
										})
									} return t
						}, n.getPositionTopLeftInBoard = function() {
							for (var e = this.scene.main.board.dataBoard, t = this.x + this.parent.cellSize * this.scale / 2, n = this.y + this.parent.cellSize * this.scale / 2, i = this.scene.main.board.cellPadding, a = -1, r = -1, s = 0; s < vd; s++)
								for (var o = 0; o < yd; o++)
									if (e[s][o].x - i / 2 <= t && e[s][o].x + e[s][o].width + i / 2 >= t && e[s][o].y - i / 2 <= n && e[s][o].y + e[s][o].height + i / 2 >= n) {
										a = o, r = s;
										break
									} return a < 0 || a > yd - 1 || r < 0 || r > vd - 1 ? null : {
								x: a,
								y: r
							}
						}, t.buildData = function(e) {
							for (var t = [], n = 0; n < e.length; n++) {
								t[n] = [];
								for (var i = 0; i < e[n].length; i++) {
									var a = 1 === e[n][i] ? gd.GEM : null;
									t[n][i] = {
										x: i,
										y: n,
										texture: a
									}
								}
							}
							return t
						}, n.getPaddingCell = function() {
							return this.height / this.data.length / 40
						}, n.drawPiece = function() {
							return this.isCreateCell || this.createCells(.075), this.createAnimShow(), this.playAnimShow(), this
						}, n.createAnimShow = function() {
							this.animShow = this.scene.tweens.add({
								paused: !0,
								duration: 300,
								targets: this,
								alpha: {
									from: 0,
									to: this.alpha
								},
								scale: {
									from: 0,
									to: 1
								},
								x: {
									from: -30,
									to: this.x
								},
								y: {
									from: this.y - 100,
									to: this.y
								}
							})
						}, n.createCells = function(e) {
							for (var t = this.parent.cellSize, n = 0; n < this.data.length; n++) {
								this.cells[n] = [];
								for (var i = 0; i < this.data[n].length; i++)
									if (this.data[n][i].texture) {
										var a = {
												x: Math.floor(0 + i * t + e),
												y: Math.floor(0 + n * t + e),
												width: Math.floor(t - 2 * e),
												height: Math.floor(t - 2 * e)
											},
											r = new Hu(this.scene, a);
										r.setVisible(!0), this.cells[n][i] = r, this.cellItems.push(r), this.add(r)
									}
							}
							this.isCreateCell = !0
						}, n.getContainerSize = function() {
							for (var e = 0, t = this.data.length, n = 0; n < this.data.length; n++) this.data[n].length > e && (e = this.data[n].length);
							var i = this.parent.cellSize;
							return {
								width: e * i * this.scale,
								height: t * i * this.scale
							}
						}, n.resetPropsCells = function(e) {
							for (var t = this.parent.cellSize, n = 0; n < this.data.length; n++)
								for (var i = 0; i < this.data[n].length; i++)
									if (this.data[n][i].texture) Math.floor(0 + i * t + e), Math.floor(t - 2 * e), Math.floor(t - 2 * e), this.texture, this.frame, ka.Z.PIECE, Math.floor(0 + i * t + e), Math.floor(t - 2 * e), Math.floor(t - 2 * e), this.texture, this.frame, this.type, this.direction, this.isReverse
						}, t
					}(Phaser.GameObjects.Container),
					bd = function(e) {
						function t(n, i, a) {
							return e.call(this, n, i, (0, r.Z)({}, a, {
								matrixData: t.getMatrixData(a.type, a.direction, a.isReverse)
							})) || this
						}
						return (0, o.Z)(t, e), t.getMatrixData = function(e, t, n) {
							void 0 === n && (n = !1);
							var i = [];
							switch (t) {
								case qu:
									n ? i = Hl : (i = Ul, e === gl && (i = Vl), e === vl && (i = Yl));
									break;
								case Qu:
									n ? i = Dl : (i = Bl, e === gl && (i = Nl), e === vl && (i = Ml));
									break;
								case Ju:
									if (n) {
										i = Ol;
										break
									}
									i = xl, e === gl && (i = Rl), e === vl && (i = _l);
									break;
								case $u:
									n ? i = Fl : (i = Ll, e === gl && (i = Gl), e === vl && (i = Zl))
							}
							return i
						}, t.getData = function(e, n, i) {
							return void 0 === i && (i = !1), t.buildData(t.getMatrixData(e, n, i))
						}, t
					}(Sd),
					Ed = bd,
					Ad = function(e) {
						function t(n, i, a) {
							return e.call(this, n, i, (0, r.Z)({}, a, {
								matrixData: t.getMatrixData(a.type, a.direction)
							})) || this
						}
						return (0, o.Z)(t, e), t.getMatrixData = function(e, t) {
							var n = [];
							switch (e) {
								case El:
									n = t === ju ? Ql : Jl;
									break;
								case bl:
									n = t === ju ? Xl : ql;
									break;
								case yl:
									n = t === ju ? Wl : zl;
									break;
								case Sl:
									n = t === ju ? Kl : jl
							}
							return n
						}, t.getData = function(e, n) {
							return t.buildData(t.getMatrixData(e, n))
						}, t
					}(Sd),
					wd = Ad,
					Td = function(e) {
						function t(n, i, a) {
							return e.call(this, n, i, (0, r.Z)({}, a, {
								matrixData: t.getMatrixData(a.type)
							})) || this
						}
						return (0, o.Z)(t, e), t.getMatrixData = function(e) {
							var t = [];
							switch (e) {
								case Al:
									t = $l;
									break;
								case wl:
									t = eh;
									break;
								case Tl:
									t = th
							}
							return t
						}, t.getData = function(e) {
							return t.buildData(t.getMatrixData(e))
						}, t
					}(Sd),
					Cd = Td,
					Pd = function(e) {
						function t(n, i, a) {
							return e.call(this, n, i, (0, r.Z)({}, a, {
								matrixData: t.getMatrixData(a.direction)
							})) || this
						}
						return (0, o.Z)(t, e), t.getMatrixData = function(e) {
							var t = [];
							switch (e) {
								case "left":
								default:
									t = sh;
									break;
								case "right":
									t = oh;
									break;
								case "top":
									t = ch;
									break;
								case "bottom":
									t = uh
							}
							return t
						}, t.getData = function(e) {
							return t.buildData(t.getMatrixData(e))
						}, t
					}(Sd),
					Id = Pd,
					kd = function(e) {
						function t(n, i, a) {
							return e.call(this, n, i, (0, r.Z)({}, a, {
								matrixData: t.getMatrixData(a.direction)
							})) || this
						}
						return (0, o.Z)(t, e), t.getMatrixData = function(e) {
							var t = [];
							switch (e) {
								case "vertical_left":
								default:
									t = nh;
									break;
								case "vertical_right":
									t = ih;
									break;
								case "horizontal_right":
									t = rh;
									break;
								case "horizontal_left":
									t = ah
							}
							return t
						}, t.getData = function(e) {
							return t.buildData(t.getMatrixData(e))
						}, t
					}(Sd),
					xd = kd,
					Od = function() {
						function e() {}
						return e.create = function(e, t, n) {
							var i;
							switch (n.type) {
								case ml:
								case gl:
								case vl:
									i = new Ed(e, t, n);
									break;
								case yl:
								case Sl:
								case bl:
								case El:
									i = new wd(e, t, n);
									break;
								case Al:
								case wl:
								case Tl:
									i = new Cd(e, t, n);
									break;
								case Pl:
									i = new Id(e, t, n);
									break;
								case Cl:
									i = new xd(e, t, n);
									break;
								default:
									i = new Cd(e, t, n)
							}
							return i
						}, e
					}(),
					Rd = Od,
					_d = Oa.Z.GAMEPLAY,
					Bd = _d.KEY,
					Dd = _d.FRAME,
					Nd = Oa.Z.GAMEPLAY_JPG,
					Md = Nd.KEY,
					Ld = Nd.FRAME,
					Fd = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.tweenToEnableMaxFps = void 0, n.cellSize = void 0, n.canCaptureLines = void 0, n.allPieces = [], n.allPiecesGroup = [], n.piecesActive = [], t.add.existing((0, Ba.Z)(n)), n.scene = t, n.canCaptureLines = {
								isCapture: !1,
								direction: "",
								minLine: 5
							}, n.init(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.initCellSize(), this.createBorder(), this.createBackground(), this.createAllPieces(), this.createAllPiecesGroup(), this.createTweenToEnableMaxFps()
						}, n.initCellSize = function() {
							this.cellSize = 20
						}, n.createBorder = function() {
							var e = this.scene.ads.getBannerHeight(),
								t = this.scene.make.image({
									x: 100,
									y: 100,
									key: Bd,
									frame: Dd.PANEL_BOTTOM_1
								});
							t.setWorldSize(375, 11), this.add(t), Phaser.Display.Align.In.Center(t, this, 0, -65 - e / 2)
						}, n.createBackground = function() {
							var e = this.scene.ads.getBannerHeight(),
								t = this.scene.make.image({
									x: 0,
									y: 0,
									key: Md,
									frame: Ld.PANEL_BOTTOM_2
								});
							t.setWorldSize(375, 119 + e), this.add(t), Phaser.Display.Align.In.Center(t, this)
						}, n.setContentPosition = function(e, t) {
							this.setPosition(e, t)
						}, n.createTweenToEnableMaxFps = function() {
							this.tweenToEnableMaxFps = this.scene.add.tween({
								targets: [],
								duration: 300,
								loop: -1,
								paused: !0
							})
						}, n.playTweenToEnableMaxFps = function() {
							this.tweenToEnableMaxFps.play()
						}, n.stopTweenToEnableMaxFps = function() {
							this.tweenToEnableMaxFps.stop()
						}, n.getDirectionsByType = function(e) {
							if ([Al, wl, Tl].some((function(t) {
									return t === e
								}))) return [];
							var t = [];
							switch (e) {
								case ml:
								case gl:
								case vl:
									t = [Ju, qu, Qu, $u];
									break;
								case yl:
								case Sl:
								case bl:
								case El:
									t = [ju, Xu];
									break;
								case Pl:
									t = [Ju, qu, Qu, $u];
									break;
								case Cl:
									t = [el, tl, nl, il]
							}
							return t
						}, n.createAllPieces = function() {
							for (var e = this.cellSize, t = [], n = 0; n < Il.length; n++) {
								var i = this.getDirectionsByType(Il[n]);
								if (i.length <= 0) t.push({
									type: Il[n]
								});
								else {
									for (var a = 0; a < i.length; a++) t.push({
										type: Il[n],
										direction: i[a]
									});
									if (ml === Il[n])
										for (var s = 0; s < i.length; s++) t.push({
											type: Il[n],
											direction: i[s],
											isReverse: !0
										})
								}
							}
							for (var o = 0; o < t.length; o++) {
								var c = (0, r.Z)({}, t[o], {
										texture: Bd,
										frame: Dd.GEM,
										x: Math.floor(this.x),
										y: Math.floor(this.y),
										width: Math.floor(e / 2),
										height: Math.floor(e / 2),
										cellLength: Math.floor(e / 2),
										parentHeight: this.height,
										wrap: {
											x: Math.floor(this.x),
											y: Math.floor(this.y),
											width: Math.floor(e / 2),
											height: Math.floor(e / 2)
										}
									}),
									u = Rd.create(this.scene, this, c);
								u.hide(), this.allPieces.push(u)
							}
						}, n.createAllPiecesGroup = function() {
							for (var e = 0; e < this.allPieces.length; e++) {
								var t = this.allPieces[e];
								this.allPiecesGroup[t.type] || (this.allPiecesGroup[t.type] = []), this.allPiecesGroup[t.type].push(e)
							}
						}, n.randomPieces = function() {
							var e = this;
							this.scene.game.updateFps(xa.Z.max);
							for (var t = this.buildPieceRates(!1), n = [], i = function() {
									var i = Math.floor(Math.random() * t.length),
										a = t[i];
									if (!e.allPiecesGroup[a]) return "continue";
									var r = Math.floor(Math.random() * e.allPiecesGroup[a].length),
										s = e.allPiecesGroup[a][r],
										o = [bl, El].some((function(e) {
											return e === a
										}));
									if (e.canCaptureLines.isCapture && o) {
										for (var c = 0; c < e.allPiecesGroup[a].length; c++) {
											var u = e.allPiecesGroup[a][c];
											if (e.allPieces[u] && e.allPieces[u].direction === e.canCaptureLines.direction) {
												s = u;
												break
											}
										}
										t = e.buildPieceRates(!1)
									}
									n.some((function(e) {
										return e.index === s
									})) || n.push({
										index: s,
										type: a
									})
								}; n.length < 3;) i();
							for (var a = [], r = 0; r < n.length; r++) {
								var s = n[r].index,
									o = this.allPieces[s];
								a.push({
									position: s,
									texture: Bd,
									frame: Dd.GEM,
									type: o.type,
									direction: o.direction,
									isReverse: o.isReverse
								})
							}
							this.piecesActive = a
						}, n.buildPieceRates = function(e) {
							void 0 === e && (e = !0);
							for (var t = [], n = 0; n < kl.length; n++) t.push((0, r.Z)({}, kl[n]));
							if (e) {
								var i = this.scene.main.board.dataBoard,
									a = 5;
								if (this.canCaptureLines = this.scene.main.board.canCaptureLines(i, a), this.canCaptureLines.isCapture)
									for (var s = 0; s < t.length; s++) t[s].type === El && (t[s].rate = 8);
								else if (a = 4, this.canCaptureLines = this.scene.main.board.canCaptureLines(i, a), this.canCaptureLines.isCapture)
									for (var o = 0; o < t.length; o++) t[o].type === bl && (t[o].rate = 8)
							}
							for (var c = [], u = 0; u < t.length; u++)
								for (var l = t[u], h = l.type, d = l.rate, p = 0; p < d; p++) c.push(h);
							return c
						}, n.drawPieces = function() {
							for (var e = this.scene.gameZone, t = e.width, n = e.height, i = [0, t / 3, 2 * t / 3], a = this.scene.ads.getBannerHeight(), r = 0; r < this.piecesActive.length; r++) {
								var s = this.allPieces[this.piecesActive[r].position],
									o = i[r];
								s.updatePosition(o, n - 121 - a), s.drawPiece(), s.setIndex(r), this.allPieces[this.piecesActive[r].position] = s
							}
						}, n.removeActivePiece = function(e) {
							this.piecesActive[e].used = !0
						}, n.existPiecesActive = function() {
							var e, t = pe()(e = this.piecesActive).call(e, (function(e) {
								return !e.used
							}));
							return t && t.length > 0
						}, n.showNewPieces = function() {
							for (var e = 0; e < this.allPieces.length; e++) this.allPieces[e].setVisible(!1);
							this.randomPieces(), this.setActivePieces(), this.drawPieces()
						}, n.calculatePieceInfo = function() {
							for (var e = 0, t = 0, n = this.cellSize, i = 0; i < this.piecesActive.length; i++) {
								var a = this.allPieces[this.piecesActive[i].position].data;
								e += a[0].length, a.length > t && (t = a.length)
							}
							return {
								cellLength: n / 2,
								cols: e
							}
						}, n.setActivePieces = function() {
							for (var e = this.scene.main.board.dataBoard, t = 0; t < this.piecesActive.length; t++) {
								var n = this.piecesActive[t].position;
								gh(e, this.allPieces[n]) ? this.allPieces[n].setAlpha(1) : this.allPieces[n].setAlpha(.4)
							}
						}, n.getPiecesByFen = function(e) {
							var t = [],
								n = e.split(" ");
							if (n.length < 2) throw new Error("Invalid fen");
							for (var i = Bu()(n).call(n, 2), a = 0; a < i.length; a++) {
								var r, s;
								if ("l" !== Yu()(r = i[a]).call(r)) {
									var o = bh(Yu()(s = i[a]).call(s));
									t.push(o)
								}
							}
							return t
						}, n.getFenByPieces = function() {
							for (var e = "l", t = 0; t < this.piecesActive.length; t++) {
								var n = this.piecesActive[t],
									i = n.type,
									a = n.direction,
									r = n.isReverse,
									s = n.frame;
								if (!n.used) {
									var o = vh(i);
									a && "" !== a && (o += "-" + vh(a)), r && (o += "-r"), e += " " + o + "," + vh(s)
								}
							}
							return e
						}, n.clearPieces = function() {
							for (var e = 0; e < this.piecesActive.length; e++) {
								var t = this.piecesActive[e].position;
								this.allPieces[t].hide()
							}
							this.piecesActive = []
						}, n.showAvailablePieces = function(e) {
							if (e && !(e.length <= 0)) {
								for (var t = [], n = 0; n < e.length; n++)
									for (var i = e[n], a = i.type, r = i.direction, s = i.isReverse, o = i.frame, c = 0; c < this.allPieces.length; c++) {
										var u = this.allPieces[c];
										if (a === u.type && r === u.direction && s === u.isReverse) {
											t.push({
												position: c,
												texture: Bd,
												frame: o,
												type: u.type,
												direction: u.direction,
												isReverse: u.isReverse
											});
											break
										}
									}
								this.piecesActive = t, this.setActivePieces(), this.drawPieces()
							}
						}, t
					}(Phaser.GameObjects.Container),
					Gd = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.pieces = void 0, n.scene = t, n.setSize(n.scene.gameZone.width, 60), n.scene = t, t.add.existing((0, Ba.Z)(n)), n.init(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.init = function() {
							this.createPieces()
						}, n.createPieces = function() {
							var e = this.scene.ads.getBannerHeight(),
								t = this.scene.gameZone.height;
							this.pieces = new Fd(this.scene), this.pieces.setContentPosition(this.scene.gameZone.width / 2, t - 59.5 - e / 2)
						}, t
					}(Phaser.GameObjects.Container),
					Zd = Gd,
					Ud = n(188),
					Hd = {
						targets: [],
						yoyo: !0,
						repeat: -1,
						duration: 600,
						repeatDelay: 50,
						ease: n.n(Ud)()(.55, .47, .43, .91),
						easeParams: [0, .9],
						props: {
							scale: {
								from: 1,
								to: 1.2
							}
						}
					},
					Vd = function(e) {
						function t(t) {
							return e.call(this, Hd, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					Yd = Oa.Z.DEFAULT,
					Wd = Yd.KEY,
					zd = Yd.FRAME,
					Kd = GameCore.Configs,
					jd = Kd.Network,
					Xd = Kd.Match,
					qd = function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).scene = void 0, r.isUseRescue = void 0, r.countdownCount = void 0, r.skipText = void 0, r.continueButton = void 0, r.tweenContinueButton = void 0, r.continueButtonAnimation = void 0, r.progressSize = 13.5, r.progressRadius = 63, r.textScoreLabel = void 0, r.tweenTextScoreLabel = void 0, r.textScoreNumber = void 0, r.tweenTextScoreNumber = void 0, r.textSecondChance = void 0, r.tweenShowCircle = void 0, r.tweenTextSecondChance = void 0, r.progressCircle = void 0, r.bgProgressCircle = void 0, r.skipTextTween = void 0, r.adsTimer = void 0, r.open = function() {
								e.prototype.open.call((0, Ba.Z)(r)), r.scene.audio.playSound(_a.RESCUE), r.runAnim(), r.updateInfo(), r.isUseRescue = !1, r.countdownCount = Xd.RescueGamePopupTimeout, r.runCountdown()
							}, r.close = function() {
								e.prototype.close.call((0, Ba.Z)(r)), r.textScoreLabel.setScale(0).setAlpha(0), r.textScoreNumber.setScale(0).setAlpha(0), r.textSecondChance.setScale(0).setAlpha(0), r.continueButtonAnimation.stop()
							}, r.handleShowRewardedVideoAd = (0, s.Z)(u().mark((function e() {
								var t, n, i, a;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = r.scene.game, n = t.globalScene, i = t.audio, e.prev = 1, !r.isUseRescue) {
												e.next = 4;
												break
											}
											return e.abrupt("return");
										case 4:
											return r.scene.storage.dispatch($o()), r.isUseRescue = !0, n.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading ads...",
												duration: 0,
												loading: !0
											}), i.pauseMusic(), i.muteAll(), e.next = 13, new(ee())((function(e, t) {
												if ("function" == typeof window.GVAdBreak) try {
													return void window.GVAdBreak((function() {
														e()
													}))
												} catch (n) {
													return console.warn("[Arcade] GVAdBreak lỗi", n), void e()
												}
												var a;
												null == (a = r.adsTimer) || a.remove(), r.adsTimer = r.scene.time.delayedCall(jd.Timeout, t), r.scene.ads.getAdStatus(GameCore.Ads.Types.REWARDED) === GameCore.Ads.Status.LOADING ? r.scene.ads.events.once(GameCore.Ads.Events.LOADED, (function() {
													r.scene.ads.showRewardedVideoAsync().then(e).catch(t)
												})) : r.scene.ads.preloadRewardedVideoAsync().then((function() {
													return r.scene.ads.showRewardedVideoAsync()
												})).then(e).catch(t)
											}));
										case 13:
											n.screen.events.off(GameCore.Screens.Events.CLOSE), As.emit(Or.RESCUE), i.playSound(_a.DAILY_REWARD), n.screen.close(Ra.o4.NOTIFY_SCREEN), e.next = 26;
											break;
										case 19:
											if (e.prev = 19, e.t0 = e.catch(1), !(e.t0 instanceof Object && GameCore.Utils.Object.hasOwn(e.t0, "code"))) {
												e.next = 25;
												break
											}
											if ("USER_INPUT" !== e.t0.code) {
												e.next = 25;
												break
											}
											return r.showNotifySkipAds(), e.abrupt("return");
										case 25:
											r.showNotifyNoAds();
										case 26:
											return e.prev = 26, null == (a = r.adsTimer) || a.destroy(), i.unmuteAll(), i.playMusic(), r.scene.screen.close(r.name), r.scene.ads.preloadRewardedVideoAsync().catch((function(e) {})), e.finish(26);
										case 33:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 19, 26, 33]
								])
							}))), r.showNotifyNoAds = function(e) {
								if (!e || e.name === Ra.o4.NOTIFY_SCREEN) {
									var t = r.scene.game.globalScene;
									t.screen.events.off(GameCore.Screens.Events.CLOSE), t.screen.events.once(GameCore.Screens.Events.CLOSE, r.showGameOver), t.screen.open(Ra.o4.NOTIFY_SCREEN, {
										message: "No ads to display!",
										duration: 2e3,
										loading: !1
									})
								}
							}, r.showNotifySkipAds = function() {
								var e = r.scene.game.globalScene;
								e.screen.events.off(GameCore.Screens.Events.CLOSE), e.screen.events.once(GameCore.Screens.Events.CLOSE, r.showGameOver), e.screen.open(Ra.o4.NOTIFY_SCREEN, {
									message: "Sorry, No Rewards!\nYou have cancelled the ad!",
									duration: 3e3,
									loading: !1
								})
							}, r.showGameOver = function(e) {
								e && e.name !== Ra.o4.NOTIFY_SCREEN || (r.scene.screen.close(r.name), r.scene.endGame())
							}, r.handleSkip = function() {
								r.scene.screen.close(r.name), r.scene.endGame()
							}, r.handleRunCountdown = function() {
								r.countdownCount -= 1, r.countdownCount <= 0 && r.rescueTimeout()
							}, r.scene = t, r.countdownCount = Xd.MaxRescueCount, r.setDepth(Ra.Ks.POPUP), r.background.setAlpha(.8), r.createContent(), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.runAnim = function() {
							this.tweenTextScoreLabel.play(), this.tweenTextScoreNumber.play(), this.tweenShowCircle.play(), this.tweenTextSecondChance.play(), this.skipText.setVisible(!0), this.skipTextTween.play(), this.tweenContinueButton.play()
						}, n.updateInfo = function() {
							var e = this.scene.storage.getState(),
								t = ys(e);
							this.textScoreNumber.setText(String(t.score || 0))
						}, n.createContent = function() {
							this.createTextScore(), this.createTextScoreNumber(), this.createBgProgressCircle(), this.createProgressCircle(), this.createSecondChangeText(), this.createContinueButton(), this.createSkipText()
						}, n.createTextScore = function() {
							this.textScoreLabel = this.scene.make.image({
								key: Wd,
								frame: zd.TEXT_SCORE_2
							}), this.textScoreLabel.setWorldSize(99, 21);
							var e = this.textScoreLabel.scale;
							this.textScoreLabel.setScale(0).setAlpha(0), this.add(this.textScoreLabel), Phaser.Display.Align.In.Center(this.textScoreLabel, this, 0, -214), this.tweenTextScoreLabel = this.scene.tweens.add({
								targets: this.textScoreLabel,
								paused: !0,
								duration: 200,
								scale: {
									from: 0,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createTextScoreNumber = function() {
							this.textScoreNumber = this.scene.add.text(0, 0, "0", {
								font: "bold 38px Arial"
							}), this.textScoreNumber.setOrigin(.5).setScale(0).setAlpha(0), this.add(this.textScoreNumber), Phaser.Display.Align.In.Center(this.textScoreNumber, this.textScoreLabel, 0, 45), this.tweenTextScoreNumber = this.scene.tweens.add({
								delay: 100,
								targets: this.textScoreNumber,
								paused: !0,
								duration: 200,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createProgressCircle = function() {
							this.progressCircle = this.scene.add.graphics(), this.progressCircle.setScale(0).setAlpha(0), this.add(this.progressCircle)
						}, n.setProgressCircle = function(e) {
							var t = Phaser.Math.DegToRad(-90),
								n = Phaser.Math.DegToRad(e - 360 - 90);
							this.progressCircle.clear(), this.progressCircle.beginPath(), this.progressCircle.lineStyle(this.progressSize, 4249855), this.progressCircle.arc(0, -44, this.progressRadius, t, n, !0, .02), this.progressCircle.strokePath(), this.progressCircle.closePath()
						}, n.runCountdown = function() {
							this.startProgressCircle()
						}, n.startProgressCircle = function() {
							var e = this;
							this.scene.tweens.addCounter({
								from: 360,
								to: 0,
								delay: 200,
								duration: 1e3 * Xd.RescueGamePopupTimeout,
								onUpdate: function(t) {
									var n = +t.getValue().toFixed(2);
									e.setProgressCircle(n)
								},
								onComplete: function() {
									e.setProgressCircle(0), e.progressCircle.setAlpha(1)
								}
							})
						}, n.createBgProgressCircle = function() {
							var e = Phaser.Math.DegToRad(360),
								t = Phaser.Math.DegToRad(0);
							this.bgProgressCircle = this.scene.add.graphics(), this.bgProgressCircle.clear(), this.bgProgressCircle.beginPath(), this.bgProgressCircle.lineStyle(this.progressSize, 1313543), this.bgProgressCircle.arc(0, -44, this.progressRadius, e, t, !1), this.bgProgressCircle.strokePath(), this.bgProgressCircle.setScale(0).setAlpha(0), this.add(this.bgProgressCircle)
						}, n.createSecondChangeText = function() {
							this.textSecondChance = this.scene.make.image({
								key: Wd,
								frame: zd.TEXT_SECOND_CHANCE
							}), this.textSecondChance.setWorldSize(72, 28);
							var e = this.textSecondChance.scale;
							this.textSecondChance.setScale(0).setAlpha(0), this.add(this.textSecondChance), Phaser.Display.Align.In.Center(this.textSecondChance, this.textScoreNumber, 0, 124), this.tweenShowCircle = this.scene.add.tween({
								paused: !0,
								targets: [this.progressCircle, this.bgProgressCircle],
								delay: 200,
								duration: 300,
								ease: Phaser.Math.Easing.Back.Out,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 0,
										to: 1
									}
								}
							}), this.tweenTextSecondChance = this.scene.add.tween({
								paused: !0,
								targets: this.textSecondChance,
								delay: 200,
								duration: 300,
								ease: Phaser.Math.Easing.Back.Out,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 0,
										to: e
									}
								}
							})
						}, n.rescueTimeout = function() {
							this.scene.screen.close(this.name), this.scene.endGame()
						}, n.createContinueButton = function() {
							var e = this;
							this.continueButton = new _c(this.scene, Wd, zd.BUTTON_GREEN_SMALL, 205, 66), this.continueButton.setName("Continue"), this.add(this.continueButton), this.continueButton.onClick = this.handleShowRewardedVideoAd;
							var t = this.scene.add.image(0, 0, Wd, zd.ICON_ADS);
							t.setWorldSize(39, 36), Phaser.Display.Align.In.Center(t, this.continueButton, -60, -3), this.continueButton.add(t);
							var n = this.scene.make.image({
								key: Wd,
								frame: zd.TEXT_CONTINUE
							});
							n.setWorldSize(107, 19.5), this.continueButton.add(n), Phaser.Display.Align.In.Center(n, this.continueButton, 26, -3), Phaser.Display.Align.In.Center(this.continueButton, this.textSecondChance, 0, 144), this.continueButton.setScale(0).setAlpha(0), this.tweenContinueButton = this.scene.tweens.add({
								paused: !0,
								targets: this.continueButton,
								ease: kc.Z,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 1.2,
										to: 1
									}
								},
								delay: 300,
								duration: 300,
								onComplete: function() {
									e.runContinueButtonAnimation()
								}
							})
						}, n.createSkipText = function() {
							this.skipText = new _c(this.scene, Wd, zd.NO_THANK_TEXT, 109, 17), this.skipText.setName("NoThanks"), this.add(this.skipText), this.skipText.onClick = this.handleSkip, Phaser.Display.Align.In.BottomCenter(this.skipText, this.continueButton, 0, 43), this.skipText.setVisible(!1).setAlpha(0), this.skipTextTween = this.scene.tweens.add({
								targets: this.skipText,
								delay: Xd.DelayNoThank,
								paused: !0,
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1",
								duration: 500
							})
						}, n.runContinueButtonAnimation = function() {
							var e;
							this.continueButtonAnimation || (this.continueButtonAnimation = new Vd({
								targets: [this.continueButton],
								props: {
									scale: "-=0.02"
								},
								delay: 200
							})), null == (e = this.continueButtonAnimation) || e.play()
						}, t
					}(GameCore.Screen),
					Qd = qd,
					Jd = {
						STATUS: {
							READY: "ready",
							RUNNING: "running",
							STOPPED: "stopped"
						}
					},
					$d = {
						STATUS: {
							READY: "ready",
							RUNNING: "running",
							STOPPED: "stopped"
						}
					}.STATUS,
					ep = function() {
						function e(e) {
							this.state = void 0, this.scene = void 0, this.scene = e
						}
						var t = e.prototype;
						return t.init = function() {
							this.setState($d.READY)
						}, t.start = function() {
							this.isRunning() || this.setState($d.RUNNING)
						}, t.stop = function() {
							this.isRunning() && this.setState($d.STOPPED)
						}, t.setState = function(e) {
							this.state = e
						}, t.isReady = function() {
							return this.state === $d.READY
						}, t.isRunning = function() {
							return this.state === $d.RUNNING
						}, t.isStopped = function() {
							return this.state === $d.STOPPED
						}, e
					}(),
					tp = ep,
					np = function() {
						function e(e) {
							this.scene = void 0, this.manager = void 0, this.tweenHand = void 0, this.dataInit = {
								fen: "x/x/x/x/x/x/bb2ryry/bb2ryry l s2,b",
								piece: wl,
								position: {
									x: 2,
									y: 6
								}
							}, this.scene = e.scene, this.manager = e
						}
						var t = e.prototype;
						return t.start = function() {
							this.initBoardData(), this.handleHighlight(), this.createTweenHand()
						}, t.initBoardData = function() {
							this.manager.handleGuidePlayStep(this.dataInit.fen)
						}, t.createTweenHand = function() {
							var e = this.scene.gameZone,
								t = e.width,
								n = e.height;
							this.manager.handFrame.setVisible(!0), this.manager.handFrame.setPosition(t / 2 - 120, n - 50), this.tweenHand = this.scene.add.tween({
								repeatDelay: 500,
								targets: this.manager.handFrame,
								repeat: -1,
								x: {
									from: t / 2 - 120,
									to: t / 2 - 30
								},
								y: {
									from: n - 50,
									to: n / 2 + 100
								},
								duration: 1500
							})
						}, t.handleHighlight = function() {
							for (var e = this.dataInit.position, t = e.x, n = e.y, i = 0; i < 2; i++)
								for (var a = 0; a < 2; a++) this.scene.main.board.dataBoard[n + i][t + a].cell.setFrame(Oa.Z.GAMEPLAY.FRAME.GEM).setAlpha(.4).setVisible(!0).stopAnimShaking()
						}, t.dragStart = function() {
							this.tweenHand.stop(), this.manager.handFrame.setVisible(!1)
						}, t.invalidMove = function() {
							this.manager.handFrame.setVisible(!0), this.tweenHand.play(), this.handleHighlight()
						}, t.nextLevel = function() {
							this.tweenHand.stop().remove()
						}, e
					}(),
					ip = np,
					ap = function() {
						function e(e) {
							this.scene = void 0, this.manager = void 0, this.tweenHand = void 0, this.dataInit = {
								fen: "3rr3/3bb3/3ry3/rrr2bbb/yyy2brb/3yy3/3yb3/3yb3 l s2,y",
								piece: wl,
								position: {
									x: 3,
									y: 3
								}
							}, this.scene = e.scene, this.manager = e
						}
						var t = e.prototype;
						return t.start = function() {
							this.initBoardData(), this.handleHighlight(), this.createTweenHand()
						}, t.initBoardData = function() {
							this.manager.handleGuidePlayStep(this.dataInit.fen)
						}, t.createTweenHand = function() {
							var e = this.scene.gameZone,
								t = e.width,
								n = e.height;
							this.manager.handFrame.setVisible(!0), this.manager.handFrame.setPosition(t / 2 - 120, n - 50), this.tweenHand = this.scene.add.tween({
								repeatDelay: 500,
								targets: this.manager.handFrame,
								repeat: -1,
								x: {
									from: t / 2 - 120,
									to: t / 2
								},
								y: {
									from: n - 50,
									to: n / 2
								},
								duration: 1500
							})
						}, t.handleHighlight = function() {
							for (var e = this.dataInit.position, t = e.x, n = e.y, i = 0; i < 2; i++)
								for (var a = 0; a < 2; a++) this.scene.main.board.dataBoard[n + i][t + a].cell.setFrame(Oa.Z.GAMEPLAY.FRAME.GEM).setAlpha(.4).setVisible(!0).stopAnimShaking()
						}, t.dragStart = function() {
							this.tweenHand.stop(), this.manager.handFrame.setVisible(!1)
						}, t.invalidMove = function() {
							this.manager.handFrame.setVisible(!0), this.tweenHand.play(), this.handleHighlight()
						}, t.nextLevel = function() {
							this.tweenHand.stop().remove()
						}, e
					}(),
					rp = ap,
					sp = function() {
						function e(e) {
							this.scene = void 0, this.manager = void 0, this.tweenHand = void 0, this.dataInit = {
								fen: "5rrr/5bbb/5ryb/5byr/5yyy/x/x/x l s3,r",
								piece: Tl,
								position: {
									x: 5,
									y: 5
								}
							}, this.scene = e.scene, this.manager = e
						}
						var t = e.prototype;
						return t.start = function() {
							this.initBoardData(), this.handleHighlight(), this.createTweenHand()
						}, t.initBoardData = function() {
							this.manager.handleGuidePlayStep(this.dataInit.fen)
						}, t.createTweenHand = function() {
							var e = this.scene.gameZone,
								t = e.width,
								n = e.height;
							this.manager.handFrame.setVisible(!0), this.manager.handFrame.setPosition(t / 2 - 120, n - 50), this.tweenHand = this.scene.add.tween({
								repeatDelay: 500,
								targets: this.manager.handFrame,
								repeat: -1,
								x: {
									from: t / 2 - 120,
									to: t / 2 + 110
								},
								y: {
									from: n - 50,
									to: n / 2 + 100
								},
								duration: 1500
							})
						}, t.handleHighlight = function() {
							for (var e = this.dataInit.position, t = e.x, n = e.y, i = 0; i < 3; i++)
								for (var a = 0; a < 3; a++) this.scene.main.board.dataBoard[n + i][t + a].cell.setFrame(Oa.Z.GAMEPLAY.FRAME.GEM).setAlpha(.4).setVisible(!0).stopAnimShaking()
						}, t.dragStart = function() {
							this.tweenHand.stop(), this.manager.handFrame.setVisible(!1)
						}, t.invalidMove = function() {
							this.manager.handFrame.setVisible(!0), this.tweenHand.play(), this.handleHighlight()
						}, t.nextLevel = function() {
							this.tweenHand.stop().remove()
						}, e
					}(),
					op = sp,
					cp = Jd.STATUS,
					up = Oa.Z.TUTORIAL,
					lp = up.KEY,
					hp = up.FRAME,
					dp = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.currentLevel = 1, n.tutorialId = void 0, n.inputType = void 0, n.handFrame = void 0, n.background = void 0, n.maskGraphics = void 0, n.stepOne = void 0, n.stepTwo = void 0, n.stepThree = void 0, n.showTutorialWhenStart = function() {
								switch (n.currentLevel) {
									case 1:
										n.stepOne.start();
										break;
									case 2:
										n.stepTwo.start();
										break;
									case 3:
										n.stepThree.start();
										break;
									default:
										n.scene.analytics.event(Vt._.TUTORIAL_COMPLETE), n.setState(cp.STOPPED), n.scene.main.praise.tweenShowScoreText.stop().remove(), n.scene.startGame()
								}
							}, n.nextTutorial = function() {
								switch (n.currentLevel) {
									case 1:
										n.stepOne.nextLevel();
										break;
									case 2:
										n.stepTwo.nextLevel();
										break;
									case 3:
										n.stepThree.nextLevel()
								}
								n.currentLevel++, n.showTutorialWhenStart()
							}, n.validTargetPosition = function(e) {
								var t = {
									x: 0,
									y: 0
								};
								switch (n.currentLevel) {
									case 1:
										t = n.stepOne.dataInit.position;
										break;
									case 2:
										t = n.stepTwo.dataInit.position;
										break;
									case 3:
										t = n.stepThree.dataInit.position
								}
								return t.x === e.x && t.y === e.y
							}, n.scene = t, n.createHand(), n.initTutorialStep(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initTutorialStep = function() {
							this.stepOne = new ip(this), this.stepTwo = new op(this), this.stepThree = new rp(this)
						}, n.start = function() {
							this.isRunning() || (this.setState(cp.RUNNING), this.scene.analytics.event(Vt._.TUTORIAL_BEGIN), this.showTutorialWhenStart())
						}, n.stop = function() {
							this.isRunning() && (this.scene.tweens.killTweensOf([this.background]), this.background.setVisible(!1), this.maskGraphics.setVisible(!1), this.setState(cp.STOPPED))
						}, n.createHand = function() {
							this.handFrame = this.scene.make.image({
								key: lp,
								frame: hp.HAND,
								origin: {
									x: .5,
									y: .5
								}
							}), this.handFrame.setVisible(!1).setDepth(ka.Z.ON_TOP), this.handFrame.setWorldSize(30, 46)
						}, n.isValidForTutorial = function() {
							return this.scene.game.player.getPlayerIsNew()
						}, n.dragStart = function() {
							switch (this.currentLevel) {
								case 1:
									this.stepOne.dragStart();
									break;
								case 2:
									this.stepTwo.dragStart();
									break;
								case 3:
									this.stepThree.dragStart()
							}
						}, n.skipTutorial = function() {
							this.isRunning() && (this.handFrame.setVisible(!1), this.setState(cp.STOPPED))
						}, n.invalidMove = function() {
							switch (this.currentLevel) {
								case 1:
									this.stepOne.invalidMove();
									break;
								case 2:
									this.stepTwo.invalidMove();
									break;
								case 3:
									this.stepThree.invalidMove()
							}
						}, n.handleGuidePlayStep = function(e) {
							try {
								this.scene.main.board.clearBoard(), this.scene.footer.pieces.clearPieces();
								var t = null,
									n = null;
								if (e) {
									var i = this.scene.main.board.getBoardByFen(e);
									t = this.scene.handleDynamicFenSize(i), n = this.scene.footer.pieces.getPiecesByFen(e)
								}
								this.scene.main.board.startGame(t), this.scene.footer.pieces.showAvailablePieces(n)
							} catch (a) {
								console.log(a)
							}
						}, t
					}(tp),
					pp = dp,
					fp = Oa.Z.DEFAULT.KEY,
					mp = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, fp, n.backgroundOn) || this).options = void 0, i.icon = void 0, i.getFrameByStatus = function() {
								var e = i.options,
									t = e.enable,
									n = e.frameOn,
									a = e.frameOff;
								return t ? n : a
							}, i.getBackgroundByStatus = function() {
								var e = i.options,
									t = e.enable,
									n = e.backgroundOn,
									a = e.backgroundOff;
								return t ? n : a
							}, i.createButton = function(e) {
								var t = i.getBackgroundByStatus();
								i.button = i.scene.add.image(0, 0, e, t), i.add(i.button)
							}, i.options = n, i.createIcon(), i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.processCallback = function(e) {
							var t = this.options.enable;
							this.updateStatus(!t), e(!t)
						}, n.updateStatus = function(e) {
							this.options.enable = e;
							var t = this.getFrameByStatus();
							this.icon.setFrame(t);
							var n = this.getBackgroundByStatus();
							this.button.setFrame(n)
						}, n.createIcon = function() {
							var e = this.getFrameByStatus();
							this.icon = this.scene.make.image({
								key: fp,
								frame: e
							}), this.add(this.icon), Phaser.Display.Align.In.Center(this.icon, this.button)
						}, n.logButtonEvent = function() {
							var e = this.getParentName(),
								t = this.name,
								n = !this.options.enable;
							this.scene.analytics.event(Vt._.BUTTON_CLICK, {
								button_name: t,
								screen_name: e,
								enable: n
							})
						}, t
					}(_c),
					gp = mp,
					vp = Oa.Z.DEFAULT,
					yp = vp.KEY,
					Sp = vp.FRAME,
					bp = (GameCore.Configs.Match, function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).buttonContinue = void 0, r.buttonSolo = void 0, r.popup = void 0, r.title = void 0, r.contents = void 0, r.popupShowUpAnimation = void 0, r.popupFadeOutAnimation = void 0, r.contentShowUpAnimation = void 0, r.tweenSettingMusic = void 0, r.tweenSettingSound = void 0, r.tweenSettingVibrate = void 0, r.tweenSettingLeaderboard = void 0, r.settingMusic = void 0, r.settingSound = void 0, r.settingVibrate = void 0, r.settingLeaderboard = void 0, r.open = function() {
								e.prototype.open.call((0, Ba.Z)(r)), r.popup.setVisible(!0), r.runOpenAnimation(), r.scene.analytics.pageview(r.name)
							}, r.handleClosePopup = function() {
								r.scene.audio.playSound(_a.POPUP_OFF, {
									volume: .6
								}), r.runCloseAnimation(), r.popupFadeOutAnimation.next((function() {
									r.scene.screen.close(r.name);
									var e = r.scene.storage.getState(),
										t = Dr(e);
									console.log("gamePlayMode === ", t), t && t !== ta || r.scene.storage.dispatch(Ho())
								}))
							}, r.handleLeaderBoard = function() {
								r.runCloseAnimation(), As.emit(Ia), r.scene.scene.switch(da.C.LEADERBOARD_SCENE)
							}, r.handleMusicSetting = function(e) {
								r.scene.player.setSetting("music", e), e ? r.scene.audio.playMusic() : r.scene.audio.pauseMusic()
							}, r.handleVibrateSetting = function(e) {
								r.scene.player.setSetting("vibrate", e)
							}, r.handleSoundSetting = function(e) {
								r.scene.player.setSetting("sound", e)
							}, r.createPopup(), r.createPopupContent(), r.createInput(), r.setDepth(Ra.Ks.POPUP), r.background.setAlpha(.6), r.popup.setVisible(!1), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateSettingButton = function() {
							var e = this.scene.player.getPlayerSettings(),
								t = e.music,
								n = e.sound,
								i = e.vibrate;
							this.settingMusic.updateStatus(t), this.settingSound.updateStatus(n), this.settingVibrate.updateStatus(i), this.alignButtonSetting()
						}, n.createInput = function() {
							this.buttonContinue.onClick = this.handlePlaySingle.bind(this), this.buttonSolo.onClick = this.handlePlaySingle.bind(this)
						}, n.handlePlaySingle = function() {
							var e = this;
							this.runCloseAnimation(), this.popupFadeOutAnimation.next((function() {
								e.scene.screen.close(e.name), e.scene.storage.dispatch(Ho())
							}))
						}, n.createPopup = function() {
							this.popup = new Jc(this.scene, 0, 0, 332, 301.5), this.add(this.popup), Phaser.Display.Align.In.Center(this.popup, this.zone)
						}, n.createPopupContent = function() {
							this.createTitle(), this.createButtonContinue(), this.createButtonPlaySingle(), this.createButtonsSetting(), this.popup.add([this.title])
						}, n.createTitle = function() {
							this.title = this.scene.add.container();
							var e = this.scene.make.image({
								key: yp,
								frame: Sp.RIBBON_MAIN
							});
							e.setWorldSize(262.5, 55.5);
							var t = this.scene.make.image({
								key: yp,
								frame: Sp.TEXT_LET_PLAY
							});
							t.setWorldSize(129.5, 19.5), Phaser.Display.Align.In.Center(t, e, 0, -3);
							var n = new _c(this.scene, yp, Sp.BUTTON_CLOSE, 25, 25);
							n.useSound = !1, n.onClick = this.handleClosePopup, n.setName("Restart"), Phaser.Display.Align.In.RightCenter(n, e, 36, -19), this.title.add([e, t, n]), Phaser.Display.Align.In.TopCenter(this.title, this.popup, 0, -2)
						}, n.createButtonContinue = function() {
							this.buttonContinue = new _c(this.scene, yp, Sp.BUTTON_GREEN, 223, 68.5), this.buttonContinue.setName("Continue");
							var e = this.scene.make.image({
								key: yp,
								frame: Sp.TEXT_CONTINUE
							});
							e.setWorldSize(140, 23), this.buttonContinue.add(e);
							var t = this.scene.make.image({
								key: yp,
								frame: Sp.ICON_WHITE_SWORD
							});
							t.setWorldSize(27, 28.5), this.buttonContinue.add(t), this.popup.add(this.buttonContinue), Phaser.Display.Align.In.Center(this.buttonContinue, this.popup, 0, -65);
							var n = t.width,
								i = e.width,
								a = n + i;
							Phaser.Display.Align.In.Center(t, this, -a / 2 + n / 2 - 5), Phaser.Display.Align.In.Center(e, this, a / 2 - i / 2 + 5)
						}, n.createButtonPlaySingle = function() {
							this.buttonSolo = new _c(this.scene, yp, Sp.BUTTON_BROWN, 223, 68.5), this.buttonSolo.setName("PlaySingle");
							var e = this.scene.make.image({
								key: yp,
								frame: Sp.TEXT_SOLO
							});
							e.setWorldSize(75, 23), this.buttonSolo.add(e), Phaser.Display.Align.In.Center(e, this.buttonSolo, 0, -4), this.popup.add(this.buttonSolo), Phaser.Display.Align.In.Center(this.buttonSolo, this.popup, 0, 23)
						}, n.createButtonsSetting = function() {
							var e = this.scene.player.getPlayerSettings(),
								t = e.music,
								n = e.sound,
								i = e.vibrate;
							this.createButtonMusic(t), this.createButtonVibrate(i), this.createButtonSound(n), this.createButtonLeaderboard(), this.alignButtonSetting()
						}, n.alignButtonSetting = function() {
							var e = -100,
								t = 100,
								n = 0,
								i = 47;
							Bh() ? (this.settingVibrate.setVisible(!0), e = -140, t = 140, n = -47, i = 47) : (this.settingVibrate.setVisible(!1), e = -100, t = 100, n = 0), Phaser.Display.Align.In.Center(this.settingMusic, this.popup, e, 104), this.settingLeaderboard && Phaser.Display.Align.In.Center(this.settingLeaderboard, this.popup, n, 104), Phaser.Display.Align.In.Center(this.settingVibrate, this.popup, i, 104), Phaser.Display.Align.In.Center(this.settingSound, this.popup, t, 104)
						}, n.createButtonMusic = function(e) {
							this.settingMusic = new gp(this.scene, {
								enable: e,
								frameOn: Sp.ICON_MUSIC,
								frameOff: Sp.ICON_MUSIC,
								backgroundOn: Sp.BUTTON_BG_WOODEN_ON,
								backgroundOff: Sp.BUTTON_BG_WOODEN_OFF
							}), this.settingMusic.icon.setWorldSize(24, 30), this.settingMusic.button.setWorldSize(60, 60), this.settingMusic.onClick = this.handleMusicSetting, this.tweenSettingMusic = this.scene.tweens.add({
								paused: !0,
								targets: this.settingMusic,
								delay: 350,
								duration: 300,
								ease: kc.Z,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 1.2,
										to: 1
									}
								}
							}), this.popup.add(this.settingMusic)
						}, n.createButtonVibrate = function(e) {
							this.settingVibrate = new gp(this.scene, {
								enable: e,
								frameOn: Sp.ICON_VIBRATE,
								frameOff: Sp.ICON_VIBRATE,
								backgroundOn: Sp.BUTTON_BG_WOODEN_ON,
								backgroundOff: Sp.BUTTON_BG_WOODEN_OFF
							}), this.settingVibrate.icon.setWorldSize(32, 30), this.settingVibrate.button.setWorldSize(60, 60), this.settingVibrate.onClick = this.handleVibrateSetting, this.tweenSettingVibrate = this.scene.tweens.add({
								paused: !0,
								targets: this.settingVibrate,
								delay: 400,
								duration: 300,
								ease: kc.Z,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 1.2,
										to: 1
									}
								}
							}), this.popup.add(this.settingVibrate)
						}, n.createButtonSound = function(e) {
							this.settingSound = new gp(this.scene, {
								enable: e,
								frameOn: Sp.ICON_SOUND,
								frameOff: Sp.ICON_SOUND,
								backgroundOn: Sp.BUTTON_BG_WOODEN_ON,
								backgroundOff: Sp.BUTTON_BG_WOODEN_OFF
							}), this.settingSound.icon.setWorldSize(30, 30), this.settingSound.button.setWorldSize(60, 60), this.settingSound.onClick = this.handleSoundSetting, this.tweenSettingSound = this.scene.tweens.add({
								paused: !0,
								targets: this.settingSound,
								delay: 450,
								duration: 300,
								ease: kc.Z,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 1.2,
										to: 1
									}
								}
							}), this.popup.add(this.settingSound)
						}, n.createButtonLeaderboard = function() {
							var e = this,
								t = this.scene,
								n = "gv-bxh";
							this.settingLeaderboard = new _c(t, yp, Sp.BUTTON_BG_WOODEN_ON, 60, 60), this.settingLeaderboard.setName("Leaderboard"), this.settingLeaderboard.onClick = function() {
								try {
									window.ArcadeUI && "function" == typeof window.ArcadeUI.openLeaderboard && window.ArcadeUI.openLeaderboard()
								} catch (e) {}
							}, this.tweenSettingLeaderboard = t.tweens.add({
								paused: !0,
								targets: this.settingLeaderboard,
								delay: 400,
								duration: 300,
								ease: kc.Z,
								props: {
									alpha: {
										from: 0,
										to: 1
									},
									scale: {
										from: 1.2,
										to: 1
									}
								}
							}), this.popup.add(this.settingLeaderboard);
							var i = function() {
								if (!e._gvBxhIcon && t.textures.exists(n)) {
									var a = t.add.image(0, 0, n);
									a.setDisplaySize(34, 34), e.settingLeaderboard.add(a), e._gvBxhIcon = a, Phaser.Display.Align.In.Center(a, e.settingLeaderboard.button)
								}
							};
							t.textures.exists(n) ? i() : (t.load.image(n, "assets/bxh-gv.png"), t.load.once("complete", i), t.load.start())
						}, n.runOpenAnimation = function() {
							this.scene.audio.playSound(_a.POPUP_SHOW), this.settingMusic.setScale(0).setAlpha(0), this.tweenSettingMusic.play(), this.settingSound.setScale(0).setAlpha(0), this.tweenSettingSound.play(), this.settingVibrate.setScale(0).setAlpha(0), this.tweenSettingVibrate.play(), this.settingLeaderboard && (this.settingLeaderboard.setScale(0).setAlpha(0), this.tweenSettingLeaderboard && this.tweenSettingLeaderboard.play()), this.runPopupEntrancesAnimation(0, 300)
						}, n.runCloseAnimation = function() {
							this.runPopupExitsAnimation(0, 200)
						}, n.runPopupEntrancesAnimation = function(e, t) {
							var n = this;
							if (!this.popupShowUpAnimation) {
								var i = this.popup,
									a = i.y,
									r = i.scale;
								this.popupShowUpAnimation = new Kc({
									targets: [this.popup],
									delay: e,
									duration: t,
									props: {
										y: {
											from: 350,
											to: a
										},
										alpha: {
											start: 1,
											from: 1,
											to: 1
										},
										scale: {
											start: 0,
											from: 0,
											to: r
										}
									},
									onComplete: function() {
										n.updateSettingButton()
									}
								})
							}
							this.popupShowUpAnimation.play()
						}, n.runPopupContentEntrancesAnimation = function(e, t) {
							this.contentShowUpAnimation || (this.contentShowUpAnimation = new Wc.Z({
								targets: this.contents.getChildren(),
								duration: t,
								delay: this.scene.tweens.stagger(80, {
									start: e
								}),
								props: {
									alpha: {
										start: 0,
										from: 0,
										to: 1
									}
								}
							})), this.contentShowUpAnimation.play()
						}, n.runPopupExitsAnimation = function(e, t) {
							var n, i = this;
							this.popupFadeOutAnimation || (this.popupFadeOutAnimation = new Yc.Z({
								targets: [this.popup],
								delay: e,
								duration: t,
								props: {
									y: 250,
									scale: 0
								},
								onComplete: function() {
									i.popup.setY(0)
								}
							})), null == (n = this.popupFadeOutAnimation) || n.play()
						}, t
					}(GameCore.Screen)),
					Ep = bp,
					Ap = Oa.Z.DEFAULT,
					wp = Ap.KEY,
					Tp = Ap.FRAME,
					Cp = function(e) {
						function t(t, n, i, a, r) {
							var s;
							return (s = e.call(this, t, n, i) || this).buttonPlay = void 0, s.buttonClose = void 0, s.counterAnimation = void 0, s.scoreAnimation = void 0, s.entrancesAnimation = void 0, s.tweenIconCup = void 0, s.tweenScore = void 0, s.tweenBestScore = void 0, s.payload = void 0, s.top = void 0, s.mid = void 0, s.bottom = void 0, s.iconCup = void 0, s.textScore = void 0, s.textBestScore = void 0, s.scoreBlock = void 0, s.bestScoreBlock = void 0, s.setSize(a, r), s.createBackground(), s.createTitle(), s.createIconCup(), s.createScoreBlock(), s.createBestScoreBlock(), s.createButtonPlay(), s.updatePopupSize(), s.alignPopupImages(), s.createScoreAnimation(), s.createButtonClose(), s.scene.add.existing((0, Ba.Z)(s)), s
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createButtonClose = function() {
							this.buttonClose = new _c(this.scene, wp, Tp.BUTTON_CLOSE, 25, 25), this.buttonClose.setName("Close"), this.add(this.buttonClose), Phaser.Display.Align.In.TopRight(this.buttonClose, this, 5, 35)
						}, n.createBackground = function() {
							this.top = this.scene.make.image({
								key: wp,
								frame: Tp.POPUP_TOP
							}), this.mid = this.scene.make.image({
								key: wp,
								frame: Tp.POPUP_MID
							}), this.bottom = this.scene.make.image({
								key: wp,
								frame: Tp.POPUP_BOTTOM
							}), this.add([this.top, this.mid, this.bottom])
						}, n.createTitle = function() {
							var e = this.scene.add.container(),
								t = this.scene.make.image({
									key: wp,
									frame: Tp.RIBBON_GAME_OVER
								});
							t.setWorldSize(290, 88), e.add(t), Phaser.Display.Align.In.Center(t, e);
							var n = this.scene.make.image({
								key: wp,
								frame: Tp.TEXT_GAME_OVER
							});
							n.setWorldSize(221, 32), e.add(n), Phaser.Display.Align.In.Center(n, t, 0, -8), this.add(e), Phaser.Display.Align.In.TopCenter(e, this, 0, -41)
						}, n.createIconCup = function() {
							this.iconCup = this.scene.make.image({
								key: wp,
								frame: Tp.ICON_CUP_BG
							}), this.iconCup.setWorldSize(52, 52);
							var e = this.iconCup.scale;
							this.iconCup.setAlpha(0).setScale(0), this.add(this.iconCup), Phaser.Display.Align.In.Center(this.iconCup, this, 0, -35), this.tweenIconCup = this.scene.tweens.add({
								targets: this.iconCup,
								paused: !0,
								duration: 200,
								scale: {
									from: 0,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createScoreBlock = function() {
							this.scoreBlock = this.scene.add.container();
							var e = this.scene.make.image({
								key: wp,
								frame: Tp.TEXT_SCORE
							});
							e.setWorldSize(73.5, 16.5), this.scoreBlock.add(e), Phaser.Display.Align.In.Center(e, this.scoreBlock), this.textScore = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(65),
								origin: {
									x: .5,
									y: .5
								},
								text: "0"
							}), this.scoreBlock.add(this.textScore), Phaser.Display.Align.In.Center(this.textScore, e, 0, 35), this.add(this.scoreBlock), Phaser.Display.Align.In.Center(this.scoreBlock, this, -80, 10), this.scoreBlock.setAlpha(0).setScale(0), this.tweenScore = this.scene.tweens.add({
								targets: [this.scoreBlock],
								paused: !0,
								duration: 200,
								delay: 100,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createBestScoreBlock = function() {
							this.bestScoreBlock = this.scene.add.container();
							var e = this.scene.make.image({
								key: wp,
								frame: Tp.TEXT_BEST
							});
							e.setWorldSize(57, 16.5), this.bestScoreBlock.add(e), Phaser.Display.Align.In.Center(e, this.bestScoreBlock), this.textBestScore = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(65),
								origin: {
									x: .5,
									y: .5
								},
								text: "0"
							}), this.bestScoreBlock.add(this.textBestScore), Phaser.Display.Align.In.Center(this.textBestScore, e, 0, 35), this.add(this.bestScoreBlock), Phaser.Display.Align.In.Center(this.bestScoreBlock, this, 80, 10), this.bestScoreBlock.setAlpha(0).setScale(0), this.tweenBestScore = this.scene.tweens.add({
								targets: [this.bestScoreBlock],
								paused: !0,
								duration: 200,
								delay: 200,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createButtonPlay = function() {
							this.buttonPlay = new _c(this.scene, wp, Tp.BUTTON_GREEN_BIG, 123.5, 54), this.buttonPlay.setName("Play"), this.add(this.buttonPlay);
							var e = this.scene.make.image({
								key: wp,
								frame: Tp.ICON_PLAY
							});
							e.setWorldSize(23.5, 25.5), this.buttonPlay.add(e), Phaser.Display.Align.In.LeftCenter(e, this.buttonPlay, -22, -5);
							var t = this.scene.make.image({
								key: wp,
								frame: Tp.TEXT_PLAY
							});
							t.setWorldSize(54, 25), this.buttonPlay.add(t), Phaser.Display.Align.In.Center(t, this.buttonPlay, 14, -3), Phaser.Display.Align.In.Center(this.buttonPlay, this, 0, 90)
						}, n.updatePopupSize = function() {
							this.top.setWorldSize(this.width, this.width * this.top.height / this.top.width), this.bottom.setWorldSize(this.width, this.width * this.bottom.height / this.bottom.width), this.mid.setWorldSize(this.width, this.height - this.top.displayHeight - this.bottom.displayHeight)
						}, n.alignPopupImages = function() {
							Phaser.Display.Align.In.Center(this.top, this, 0, -this.mid.displayHeight / 2 - this.top.displayHeight / 2), Phaser.Display.Align.In.Center(this.mid, this), Phaser.Display.Align.In.Center(this.bottom, this, 0, this.mid.displayHeight / 2 + this.bottom.displayHeight / 2)
						}, n.runScoreCounter = function() {
							var e, t = this,
								n = this.payload,
								i = n.bestScore,
								a = n.currentScore;
							null == (e = this.counterAnimation) || e.remove(), this.counterAnimation = this.scene.tweens.addCounter({
								from: 0,
								to: a,
								delay: 700,
								duration: 2e3,
								completeDelay: 300,
								onUpdate: function(e) {
									t.scene.audio.playSound(_a.SCORE_COUNT);
									var n = Math.floor(e.getValue());
									t.runScoreAnimation(), t.setCurrentScore(n)
								},
								onComplete: function() {
									t.setBestScore(i), t.setCurrentScore(a), t.scene.audio.playSound(_a.GAME_OVER)
								}
							})
						}, n.setBestScore = function(e) {
							e && void 0 !== e || (e = 0), this.textBestScore.setText("" + e)
						}, n.setCurrentScore = function(e) {
							this.textScore.setText("" + e)
						}, n.createScoreAnimation = function() {
							this.scoreAnimation = new Ic({
								targets: [this.textScore],
								props: {
									scale: {
										from: 1,
										to: 1.3
									}
								}
							})
						}, n.runAnimation = function() {
							this.runScoreCounter(), this.scene.time.delayedCall(1300, (function() {}))
						}, n.runScoreAnimation = function() {
							this.scoreAnimation.play()
						}, n.runAnimContent = function() {
							this.tweenIconCup.play(), this.tweenScore.play(), this.tweenBestScore.play()
						}, n.hideContent = function() {
							this.iconCup.setAlpha(0).setScale(0), this.scoreBlock.setAlpha(0).setScale(0), this.bestScoreBlock.setAlpha(0).setScale(0)
						}, n.updateData = function(e) {
							this.payload = e;
							var t = e.bestScore,
								n = e.currentScore;
							if (n <= t) return this.setBestScore(t), this.setCurrentScore(n), this.runScoreAnimation(), void(n > 0 ? this.runScoreCounter() : this.counterAnimation = null);
							this.runAnimation()
						}, t
					}(Phaser.GameObjects.Container),
					Pp = Cp,
					Ip = Oa.Z.DEFAULT,
					kp = (Ip.KEY, Ip.FRAME, function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.infoBlock = void 0, n.challengeBlock = void 0, n.animShow = void 0, n.animHide = void 0, n.onComplete = void 0, n.scene = t, n.createInfoBlock(), n.createAnimShow(), n.createAnimHide(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createInfoBlock = function() {
							this.infoBlock = new Pp(this.scene, 0, 0, 326, 310.5), this.add(this.infoBlock), Phaser.Display.Align.In.Center(this.infoBlock, this, 0, -75)
						}, n.createAnimShow = function() {
							var e = this,
								t = this.scene.gameZone.height / 2 + 100;
							this.animShow = this.scene.tweens.add({
								targets: this,
								paused: !0,
								duration: 300,
								delay: 300,
								ease: Phaser.Math.Easing.Back.Out,
								y: {
									from: t,
									to: 0
								},
								scale: {
									from: .9,
									to: 1
								},
								alpha: {
									start: 0,
									from: 0,
									to: 1
								},
								onComplete: function() {
									e.infoBlock.runAnimContent()
								}
							})
						}, n.createAnimHide = function() {
							var e = this;
							this.animHide = this.scene.tweens.add({
								targets: this,
								paused: !0,
								duration: 200,
								ease: Phaser.Math.Easing.Sine,
								scale: {
									from: 1,
									to: 0
								},
								alpha: {
									start: 1,
									from: 1,
									to: 0
								},
								onComplete: function() {
									e.infoBlock.hideContent(), e.onComplete && e.onComplete(), e.onComplete = null
								}
							})
						}, n.hideContent = function(e) {
							this.onComplete = e, this.animHide.play()
						}, t
					}(Phaser.GameObjects.Container)),
					xp = kp,
					Op = function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).bestScore = void 0, r.currentScore = void 0, r.main = void 0, r.confettiLeftEffect = void 0, r.confettiRightEffect = void 0, r.open = function() {
								e.prototype.open.call((0, Ba.Z)(r)), r.updateScore();
								try {
									window.ArcadeScore && "function" == typeof window.ArcadeScore.saveScoreOnce && window.ArcadeScore.saveScoreOnce(r.currentScore || r.bestScore || 0)
								} catch (t) {}
								r.runOpenAnimation(), r.scene.audio.playSound(_a.GAME_OVER_SCENE), r.scene.analytics.pageview(r.name)
							}, r.handlePlay = function() {
								r.main.hideContent((function() {
									r.close(), r.scene.storage.dispatch(Ho())
								}))
							}, r.initScore(), r.createMain(), r.createConfettiSmallAnimation(), r.setDepth(Ra.Ks.POPUP), r.background.setAlpha(.6), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createMain = function() {
							this.bestScore = 0, this.main = new xp(this.scene), this.main.setVisible(!1).setScale(0).setAlpha(0), this.main.infoBlock.buttonPlay.onClick = this.handlePlay, this.main.infoBlock.buttonClose.onClick = this.handlePlay, Phaser.Display.Align.In.Center(this.main, this), this.add(this.main)
						}, n.createConfettiSmallAnimation = function() {
							this.confettiLeftEffect = new Fa(this.scene, {
								speedX: {
									min: -20,
									max: 100
								},
								rotate: {
									start: -1080,
									end: 0
								}
							}), this.confettiRightEffect = new Fa(this.scene, {
								speedX: {
									min: 20,
									max: -100
								},
								rotate: {
									start: 0,
									end: 1080
								}
							}), this.confettiLeftEffect.setDepth(ka.Z.ON_TOP), this.confettiRightEffect.setDepth(ka.Z.ON_TOP)
						}, n.initScore = function() {
							var e = this.scene.player.getBestScore();
							this.bestScore = e, this.currentScore = 0
						}, n.updateScore = function() {
							var e = this.scene.storage.getState(),
								t = ys(e),
								n = t.score,
								i = t.bestScore;
							if (void 0 === n && void 0 === i) {
								var a = vs(e)[this.scene.player.getPlayerId()];
								n = (null == a ? void 0 : a.score) || 0, i = this.scene.player.getBestScore()
							}
							this.bestScore = (i || 0) < this.bestScore ? this.bestScore : i || 0, this.currentScore = n, this.main.infoBlock.updateData({
								bestScore: this.bestScore,
								currentScore: this.currentScore
							})
						}, n.runOpenAnimation = function() {
							this.scene.audio.playSound(_a.POPUP_SHOW), this.showMainBlock()
						}, n.showMainBlock = function() {
							this.main.setVisible(!0), this.main.animShow.play()
						}, t
					}(GameCore.Screen),
					Rp = Op,
					_p = Oa.Z.DEFAULT,
					Bp = _p.KEY,
					Dp = _p.FRAME,
					Np = function(e) {
						function t(t, n, a, r) {
							var o;
							return (o = e.call(this, t, n, a, r) || this).popup = void 0, o.avatarMe = void 0, o.textScoreMe = void 0, o.avatarOpponent = void 0, o.textScoreOpponent = void 0, o.title = void 0, o.titleFrame = void 0, o.iconCrown = void 0, o.tweenIconCrown = void 0, o.textMessage = void 0, o.popupShowUpAnimation = void 0, o.popupFadeOutAnimation = void 0, o.buttonShare = void 0, o.tweenButtonShare = void 0, o.buttonRestart = void 0, o.tweenButtonRestart = void 0, o.myInfoBlock = void 0, o.tweenMyInfoBlock = void 0, o.opponentInfoBlock = void 0, o.tweenOpponentInfoBlock = void 0, o.icon = void 0, o.tweenIcon = void 0, o.open = function(t) {
								e.prototype.open.call((0, Ba.Z)(o), t), o.setVisible(!0), o.updateInfo(), o.loadAvatars(), o.runAnim(), o.scene.time.delayedCall(2e3, (function() {
									o.scene.storage.dispatch(Qs())
								})), o.runOpenAnimation(), o.scene.analytics.pageview(o.name)
							}, o.close = function() {
								e.prototype.close.call((0, Ba.Z)(o)), o.icon.setAlpha(0).setVisible(!1), o.myInfoBlock.setAlpha(0).setVisible(!1), o.opponentInfoBlock.setAlpha(0).setVisible(!1), o.buttonRestart.setAlpha(0).setScale(0).setVisible(!1), o.buttonShare.setAlpha(0).setScale(0).setVisible(!1)
							}, o.handleClosePopup = function() {
								o.scene.audio.playSound(_a.POPUP_OFF, {
									volume: .6
								}), o.runCloseAnimation(), o.popupFadeOutAnimation.next((function() {
									o.scene.screen.close(o.name)
								})), As.emit(Ca)
							}, o.handleShareGameResult = function() {
								o.scene.storage.dispatch(function() {
									var e = (0, s.Z)(u().mark((function e(t, n) {
										var a, r, s, o, c, l, h, d, p, f, m;
										return u().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													return a = window.game, r = a.player, s = a.analytics, o = a.facebook, c = a.globalScene, e.prev = 1, c.screen.open(Ra.o4.NOTIFY_SCREEN, {
														message: "Loading...",
														loading: !0
													}), l = n(), e.next = 6, Bs(l);
												case 6:
													return h = e.sent, console.log("imageShare === ", h), Cs(h), d = r.getPlayer(), p = d.playerId, f = d.name, m = d.photo, e.next = 12, o.shareAsync({
														text: "Pheww, a great match!",
														intent: "SHARE",
														image: h || "",
														data: {
															playerId: p,
															playerName: f,
															playerPhoto: m,
															type: Xi
														}
													});
												case 12:
													s.event(Vt._.SHARE, {
														share_content_type: "MatchResult",
														success: !0
													}), e.next = 19;
													break;
												case 15:
													e.prev = 15, e.t0 = e.catch(1), s.event(Vt._.SHARE, {
														share_content_type: "MatchResult",
														success: !1
													}), (0, i.tO)(e.t0);
												case 19:
													return e.prev = 19, c.screen.close(Ra.o4.NOTIFY_SCREEN), e.finish(19);
												case 22:
												case "end":
													return e.stop()
											}
										}), e, null, [
											[1, 15, 19, 22]
										])
									})));
									return function(t, n) {
										return e.apply(this, arguments)
									}
								}())
							}, o.handleRestart = function() {
								o.scene.screen.close(o.name), o.scene.storage.dispatch(Vo()), As.emit(Or.REPLAY), As.emit(Pa)
							}, o.setVisible(!1), o.setDepth(Ra.Ks.POPUP), o.createPopup(), o.createPopupContent(), o.background.setAlpha(.6), o
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateInfo = function() {
							var e = this.scene.storage.getState(),
								t = vs(e),
								n = this.scene.player.getPlayer().playerId,
								i = ds(e).playerId,
								a = fs(e, {
									playerId: n
								}),
								r = ms(e, {
									opponentId: i
								}),
								s = (t[n] || {}).score,
								o = void 0 === s ? 0 : s,
								c = (t[i] || {}).score,
								u = void 0 === c ? 0 : c;
							return this.textScoreMe.setText(String(o)), this.textScoreOpponent.setText(String(u)), a && r ? (this.buttonShare.setVisible(!0), this.tweenButtonShare.play(), Phaser.Display.Align.In.Center(this.buttonRestart, this.popup, -86, 100), o === u ? (this.textMessage.setVisible(!1), this.titleFrame.setFrame(Dp.TEXT_DRAW), this.titleFrame.setWorldSize(130, 35), this.icon.setFrame(Dp.TEXT_VS), this.icon.setWorldSize(62, 35), this.iconCrown.setVisible(!1), void this.scene.audio.playSound(_a.DRAW)) : o > u ? (this.textMessage.setVisible(!1), this.titleFrame.setFrame(Dp.TEXT_WIN), this.titleFrame.setWorldSize(81, 35), this.icon.setFrame(Dp.TEXT_VS), this.icon.setWorldSize(62, 35), this.iconCrown.setVisible(!0), this.scene.audio.playSound(_a.WIN), void Phaser.Display.Align.In.Center(this.iconCrown, this.popup, -95, -90)) : o < u ? (this.textMessage.setVisible(!1), this.titleFrame.setFrame(Dp.TEXT_LOSE), this.titleFrame.setWorldSize(109, 35), this.icon.setFrame(Dp.TEXT_VS), this.icon.setWorldSize(62, 35), this.iconCrown.setVisible(!0), this.scene.audio.playSound(_a.LOSE), void Phaser.Display.Align.In.Center(this.iconCrown, this.popup, 95, -90)) : void 0) : (this.textMessage.setVisible(!0), this.titleFrame.setFrame(Dp.TEXT_PLAY_WITH_FRIENDS), this.titleFrame.setWorldSize(211, 19), this.icon.setFrame(Dp.ICON_THUNDER), this.icon.setWorldSize(42, 59), this.buttonShare.setVisible(!1), this.iconCrown.setVisible(!1), Phaser.Display.Align.In.Center(this.buttonRestart, this.popup, 0, 100), void this.scene.audio.playSound(_a.WAIT_OPPONENT))
						}, n.runAnim = function() {
							this.tweenIconCrown.play(), this.icon.setVisible(!0), this.myInfoBlock.setVisible(!0), this.opponentInfoBlock.setVisible(!0), this.tweenIcon.play(), this.tweenMyInfoBlock.play(), this.tweenOpponentInfoBlock.play(), this.buttonRestart.setVisible(!0), this.tweenButtonRestart.play()
						}, n.loadAvatars = function() {
							var e = this.scene.storage.getState(),
								t = this.scene.player.getPlayer(),
								n = t.photo,
								i = t.playerId,
								a = ds(e),
								r = a.playerId,
								s = a.photo;
							this.avatarMe.loadPhoto(i, n, 5), this.avatarOpponent.loadPhoto(r, s, 5)
						}, n.createPopup = function() {
							this.popup = new Jc(this.scene, 0, 0, 325, 300), this.add(this.popup), Phaser.Display.Align.In.Center(this.popup, this.zone)
						}, n.createPopupContent = function() {
							this.createTitle(), this.createTextMessage(), this.createMyInfoBlock(), this.createOpponentInfoBlock(), this.createIcon(), this.createIconCrown(), this.createButtonShare(), this.createButtonRestart(), this.popup.add([this.title])
						}, n.createTitle = function() {
							this.title = this.scene.add.container();
							var e = this.scene.make.image({
								key: Bp,
								frame: Dp.RIBBON_MAIN
							});
							e.setWorldSize(260, 57), this.titleFrame = this.scene.make.image({
								key: Bp,
								frame: Dp.TEXT_PLAY_WITH_FRIENDS
							}), this.titleFrame.setWorldSize(143, 21), Phaser.Display.Align.In.Center(this.titleFrame, e, 0, -3);
							var t = new _c(this.scene, Bp, Dp.BUTTON_CLOSE, 25, 25);
							t.useSound = !1, t.onClick = this.handleClosePopup, t.setName("Close"), Phaser.Display.Align.In.RightCenter(t, e, 36, -19), this.title.add([e, this.titleFrame, t]), this.popup.add(this.title), Phaser.Display.Align.In.TopCenter(this.title, this.popup, 0, -2)
						}, n.createTextMessage = function() {
							this.textMessage = this.scene.add.text(0, 0, "Waiting for your opponent", {
								font: "17.5px Arial",
								color: "#000000"
							}), this.popup.add(this.textMessage), Phaser.Display.Align.In.Center(this.textMessage, this.popup, 0, -101)
						}, n.createButtonShare = function() {
							this.buttonShare = new _c(this.scene, Bp, Dp.BUTTON_BLUE_BIG, 122, 54), this.buttonShare.setName("Share");
							var e = this.scene.make.image({
								key: Bp,
								frame: Dp.TEXT_SHARE
							});
							e.setWorldSize(69, 21), this.buttonShare.add(e), Phaser.Display.Align.In.Center(e, this.buttonShare, 14, -5);
							var t = this.scene.make.image({
								key: Bp,
								frame: Dp.ICON_SHARE
							});
							t.setWorldSize(22.5, 27), this.buttonShare.add(t), Phaser.Display.Align.In.LeftCenter(t, this.buttonShare, -16, -5), this.popup.add(this.buttonShare), Phaser.Display.Align.In.Center(this.buttonShare, this.popup, 86, 100), this.buttonShare.onClick = this.handleShareGameResult, this.buttonShare.setScale(0).setAlpha(0).setVisible(!1), this.tweenButtonShare = this.scene.tweens.add({
								targets: this.buttonShare,
								paused: !0,
								duration: 200,
								delay: 800,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createButtonRestart = function() {
							this.buttonRestart = new _c(this.scene, Bp, Dp.BUTTON_RESTART, 122, 54), this.buttonRestart.setName("Restart"), this.popup.add(this.buttonRestart), Phaser.Display.Align.In.Center(this.buttonRestart, this.popup, 0, 100), this.buttonRestart.onClick = this.handleRestart, this.buttonRestart.setScale(0).setAlpha(0), this.tweenButtonRestart = this.scene.tweens.add({
								targets: this.buttonRestart,
								paused: !0,
								duration: 200,
								delay: 700,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createMyInfoBlock = function() {
							this.myInfoBlock = this.scene.add.container(), this.avatarMe = new oc(this.scene, {
								key: Bp,
								frame: Dp.AVATAR_BORDER_ORANGE_THICK,
								background: Dp.AVATAR_BACKGROUND,
								width: 100,
								height: 100,
								borderWidth: 10
							}), this.myInfoBlock.add(this.avatarMe), Phaser.Display.Align.In.Center(this.avatarMe, this.myInfoBlock, 0, 0), this.textScoreMe = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(74),
								text: "0",
								origin: {
									x: .5,
									y: .5
								}
							}), this.textScoreMe.setTint(14396272), this.myInfoBlock.add(this.textScoreMe), Phaser.Display.Align.In.Center(this.textScoreMe, this.avatarMe, 0, 80), this.popup.add(this.myInfoBlock), Phaser.Display.Align.In.Center(this.myInfoBlock, this.popup, -95, -28), this.myInfoBlock.setAlpha(0), this.tweenMyInfoBlock = this.scene.tweens.add({
								targets: this.myInfoBlock,
								paused: !0,
								duration: 200,
								delay: 400,
								scale: {
									from: 1.5,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createOpponentInfoBlock = function() {
							this.opponentInfoBlock = this.scene.add.container(), this.avatarOpponent = new oc(this.scene, {
								key: Bp,
								frame: Dp.AVATAR_BORDER_ORANGE_THICK,
								background: Dp.AVATAR_BACKGROUND,
								width: 100,
								height: 100,
								borderWidth: 10
							}), this.opponentInfoBlock.add(this.avatarOpponent), Phaser.Display.Align.In.Center(this.avatarOpponent, this.opponentInfoBlock, 0, 0), this.textScoreOpponent = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(74),
								text: "0",
								origin: {
									x: .5,
									y: .5
								}
							}), this.textScoreOpponent.setTint(14396272), this.opponentInfoBlock.add(this.textScoreOpponent), Phaser.Display.Align.In.Center(this.textScoreOpponent, this.avatarOpponent, 0, 80), this.popup.add(this.opponentInfoBlock), Phaser.Display.Align.In.Center(this.opponentInfoBlock, this.popup, 95, -28), this.opponentInfoBlock.setAlpha(0), this.tweenOpponentInfoBlock = this.scene.tweens.add({
								targets: this.opponentInfoBlock,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 1.5,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Bounce.Out
							})
						}, n.createIcon = function() {
							this.icon = this.scene.make.image({
								key: Bp,
								frame: Dp.ICON_THUNDER
							}), this.icon.setWorldSize(38, 54);
							var e = this.icon.scale;
							this.popup.add(this.icon), Phaser.Display.Align.In.Center(this.icon, this.popup, 0, -30), this.icon.setAlpha(0), this.tweenIcon = this.scene.tweens.add({
								targets: this.icon,
								paused: !0,
								duration: 200,
								delay: 300,
								scale: {
									from: 1.5,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.createIconCrown = function() {
							this.iconCrown = this.scene.make.image({
								key: Bp,
								frame: Dp.ICON_CROWN
							}), this.iconCrown.setWorldSize(47, 35);
							var e = this.iconCrown.scale;
							this.popup.add(this.iconCrown), Phaser.Display.Align.In.Center(this.iconCrown, this.popup, 95, -90), this.iconCrown.setAlpha(0), this.tweenIconCrown = this.scene.tweens.add({
								targets: this.iconCrown,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 1.5,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: "Power1"
							})
						}, n.runCloseAnimation = function() {
							this.runPopupExitsAnimation(0, 200)
						}, n.runPopupExitsAnimation = function(e, t) {
							var n, i = this;
							this.popupFadeOutAnimation || (this.popupFadeOutAnimation = new Yc.Z({
								targets: [this.popup],
								delay: e,
								duration: t,
								props: {
									y: 250,
									scale: 0
								},
								onComplete: function() {
									i.popup.setY(0)
								}
							})), null == (n = this.popupFadeOutAnimation) || n.play()
						}, n.runOpenAnimation = function() {
							this.scene.audio.playSound(_a.POPUP_SHOW), this.runPopupEntrancesAnimation(0, 300)
						}, n.runPopupEntrancesAnimation = function(e, t) {
							if (!this.popupShowUpAnimation) {
								var n = this.popup,
									i = n.y,
									a = n.scale;
								this.popupShowUpAnimation = new Kc({
									targets: [this.popup],
									delay: e,
									duration: t,
									props: {
										y: {
											from: 350,
											to: i
										},
										alpha: {
											start: 1,
											from: 1,
											to: 1
										},
										scale: {
											start: 0,
											from: 0,
											to: a
										}
									}
								})
							}
							this.popupShowUpAnimation.play()
						}, t
					}(GameCore.Screen),
					Mp = Np,
					Lp = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).windX = 1, n.airFrictionX = .05, n.airFrictionY = .01, n._lastRotaion = 0, n.rotationRate = Math.random() < .5 ? -1 : 1, n.airFrictionX = .01 * Math.random() + .007, n.airFrictionY = .004 * Math.random() + .006, (0, Ba.Z)(n) || (0, Ba.Z)(n)
						}
						return (0, o.Z)(t, e), t.prototype.update = function(t, n, i) {
							for (var a = e.prototype.update.call(this, t, n, i), r = .01, s = t; s > 16.67;) this.velocityX -= ou(this.velocityX, r, this.airFrictionX) / 60 * 2, this.velocityY -= ou(this.velocityY, r, this.airFrictionY) / 60 * 2, s -= 16.67;
							return this.velocityX -= ou(this.velocityX, r, this.airFrictionX) * s / 1e3, this.velocityY -= ou(this.velocityY, r, this.airFrictionY) * s / 1e3, this.rotation = this._lastRotaion + this.rotationRate * Math.random() * Math.PI / 180 * 4, this._lastRotaion = this.rotation, a
						}, t
					}(Phaser.GameObjects.Particles.Particle),
					Fp = Oa.Z.EFFECTS,
					Gp = Fp.KEY,
					Zp = Fp.FRAME,
					Up = function() {
						function e(e) {
							this.particle = void 0, this.listEmitter = void 0, this.emitter1 = void 0, this.emitter2 = void 0, this.gameWidth = void 0, this.gameHeight = void 0, this.delay = void 0, this.scene = void 0, this.scene = e, this.delay = 100, this.init()
						}
						var t = e.prototype;
						return t.init = function() {
							var e = [Zp.FX_CONFETTI_SMALL_1, Zp.FX_CONFETTI_SMALL_2, Zp.FX_CONFETTI_SMALL_3, Zp.FX_CONFETTI_SMALL_4];
							this.particle = this.scene.add.particles(Gp).setDepth(ka.Z.ON_TOP);
							var t = this.scene.gameZone,
								n = t.width,
								i = (t.height, this.scene.world.getZoomRatio());
							this.emitter1 = this.particle.createEmitter({
								frame: e,
								x: -20 - n / 2,
								y: -70,
								speed: {
									min: 250 / i,
									max: 3e3 / i
								},
								gravityY: 600 / i,
								scale: {
									start: .55 / i,
									end: .9 / i,
									ease: Phaser.Math.Easing.Expo.Out
								},
								angle: {
									min: 270,
									max: 360
								},
								alpha: {
									start: 1,
									end: 0,
									ease: Phaser.Math.Easing.Expo.In
								},
								lifespan: {
									min: 2e3,
									max: 4e3
								},
								maxParticles: 0,
								on: !1,
								particleClass: Lp
							}), this.emitter2 = this.particle.createEmitter({
								frame: e,
								x: n / 2 + 20,
								y: -70,
								speed: {
									min: 250 / i,
									max: 3e3 / i
								},
								gravityY: 600 / i,
								scale: {
									start: .55 / i,
									end: .9 / i,
									ease: Phaser.Math.Easing.Expo.Out
								},
								angle: {
									min: 180,
									max: 270
								},
								alpha: {
									start: 1,
									end: 0,
									ease: Phaser.Math.Easing.Expo.In
								},
								lifespan: {
									min: 2e3,
									max: 4e3
								},
								maxParticles: 0,
								on: !1,
								particleClass: Lp
							}), this.listEmitter = [this.emitter1, this.emitter2]
						}, t.start = function() {
							this.emitter1.flow(1e4, 45), this.emitter2.flow(1e4, 45), this.scene.time.delayedCall(500, this.stop.bind(this))
						}, t.stop = function() {
							this.listEmitter.forEach((function(e) {
								e.stop()
							}))
						}, t.killAll = function() {
							var e = this;
							this.listEmitter.forEach((function(t) {
								t.killAll(), t.forEachDead((function(e) {
									e.resetPosition()
								}), e)
							}))
						}, t.hide = function() {
							this.emitter1.setVisible(!1), this.emitter2.setVisible(!1)
						}, e
					}();
				Up.particle = void 0, Up.ribbonParticle = void 0;
				var Hp = Up,
					Vp = Oa.Z.EFFECTS,
					Yp = Vp.KEY,
					Wp = Vp.FRAME,
					zp = {
						CONFETTI_HEXAGON: {
							KEY: "confetti-hexagon-animation",
							TEXTURE: Yp,
							PREFIX: Wp.FX_CONFETTI_HEXAGON,
							FRAME_RATE: 8,
							END: 5,
							ZERO_PAD: 0
						},
						CONFETTI_STAR_X: {
							KEY: "confetti-star-x",
							TEXTURE: Yp,
							PREFIX: Wp.ANIMATION_STAR_X,
							FRAME_RATE: 4,
							END: 4,
							ZERO_PAD: 0
						},
						CONFETTI_STAR_Y: {
							KEY: "confetti-star-y",
							TEXTURE: Yp,
							PREFIX: Wp.ANIMATION_STAR_Y,
							FRAME_RATE: 4,
							END: 4,
							ZERO_PAD: 0
						},
						RIBBON_A: {
							KEY: "animation-ribbon-a",
							TEXTURE: Yp,
							PREFIX: Wp.PREFIX_ANIMATION_RIBBON_CONFETTI_A,
							FRAME_RATE: 16,
							END: 3,
							ZERO_PAD: 0
						},
						RIBBON_B: {
							KEY: "animation-ribbon-b",
							TEXTURE: Yp,
							PREFIX: Wp.PREFIX_ANIMATION_RIBBON_CONFETTI_B,
							FRAME_RATE: 16,
							END: 4,
							ZERO_PAD: 0
						},
						RIBBON_C: {
							KEY: "animation-ribbon-c",
							TEXTURE: Yp,
							PREFIX: Wp.PREFIX_ANIMATION_RIBBON_CONFETTI_C,
							FRAME_RATE: 16,
							END: 4,
							ZERO_PAD: 0
						},
						RIBBON_D: {
							KEY: "animation-ribbon-d",
							TEXTURE: Yp,
							PREFIX: Wp.PREFIX_ANIMATION_RIBBON_CONFETTI_D,
							FRAME_RATE: 16,
							END: 4,
							ZERO_PAD: 0
						}
					},
					Kp = zp.RIBBON_A,
					jp = Kp.KEY,
					Xp = Kp.TEXTURE,
					qp = Kp.FRAME_RATE,
					Qp = Kp.END,
					Jp = Kp.PREFIX,
					$p = Kp.ZERO_PAD,
					ef = function(e) {
						function t(t) {
							var n = {
								repeat: -1,
								frameRate: qp,
								frames: t.generateFrameNames(Xp, {
									prefix: Jp,
									end: Qp,
									zeroPad: $p,
									start: 1
								}),
								yoyo: !0,
								showOnStart: !0
							};
							return e.call(this, t, jp, n) || this
						}
						return (0, o.Z)(t, e), t
					}(Phaser.Animations.Animation),
					tf = ef,
					nf = zp.RIBBON_B,
					af = nf.KEY,
					rf = nf.TEXTURE,
					sf = nf.FRAME_RATE,
					of = nf.END,
					cf = nf.PREFIX,
					uf = nf.ZERO_PAD,
					lf = function(e) {
						function t(t) {
							var n = {
								repeat: -1,
								frameRate: sf,
								frames: t.generateFrameNames(rf, {
									prefix: cf,
									end: of,
									zeroPad: uf,
									start: 1
								}),
								yoyo: !0,
								showOnStart: !0
							};
							return e.call(this, t, af, n) || this
						}
						return (0, o.Z)(t, e), t
					}(Phaser.Animations.Animation),
					hf = lf,
					df = zp.RIBBON_C,
					pf = df.KEY,
					ff = df.TEXTURE,
					mf = df.FRAME_RATE,
					gf = df.END,
					vf = df.PREFIX,
					yf = df.ZERO_PAD,
					Sf = function(e) {
						function t(t) {
							var n = {
								repeat: -1,
								frameRate: mf,
								frames: t.generateFrameNames(ff, {
									prefix: vf,
									end: gf,
									zeroPad: yf,
									start: 1
								}),
								yoyo: !0,
								showOnStart: !0
							};
							return e.call(this, t, pf, n) || this
						}
						return (0, o.Z)(t, e), t
					}(Phaser.Animations.Animation),
					bf = Sf,
					Ef = zp.RIBBON_D,
					Af = Ef.KEY,
					wf = Ef.TEXTURE,
					Tf = Ef.FRAME_RATE,
					Cf = Ef.END,
					Pf = Ef.PREFIX,
					If = Ef.ZERO_PAD,
					kf = function(e) {
						function t(t) {
							var n = {
								repeat: -1,
								frameRate: Tf,
								frames: t.generateFrameNames(wf, {
									prefix: Pf,
									end: Cf,
									zeroPad: If,
									start: 1
								}),
								yoyo: !0,
								showOnStart: !0
							};
							return e.call(this, t, Af, n) || this
						}
						return (0, o.Z)(t, e), t
					}(Phaser.Animations.Animation),
					xf = kf,
					Of = zp.CONFETTI_STAR_X,
					Rf = Of.KEY,
					_f = Of.TEXTURE,
					Bf = Of.FRAME_RATE,
					Df = Of.END,
					Nf = Of.PREFIX,
					Mf = Of.ZERO_PAD,
					Lf = function(e) {
						function t(t) {
							var n = {
								repeat: -1,
								frameRate: Bf,
								frames: t.generateFrameNames(_f, {
									prefix: Nf,
									end: Df,
									zeroPad: Mf,
									start: 1
								}),
								yoyo: !0,
								showOnStart: !0
							};
							return e.call(this, t, Rf, n) || this
						}
						return (0, o.Z)(t, e), t
					}(Phaser.Animations.Animation),
					Ff = Lf,
					Gf = zp.CONFETTI_STAR_Y,
					Zf = Gf.KEY,
					Uf = Gf.TEXTURE,
					Hf = Gf.FRAME_RATE,
					Vf = Gf.END,
					Yf = Gf.PREFIX,
					Wf = Gf.ZERO_PAD,
					zf = function(e) {
						function t(t) {
							var n = {
								repeat: -1,
								frameRate: Hf,
								frames: t.generateFrameNames(Uf, {
									prefix: Yf,
									end: Vf,
									zeroPad: Wf,
									start: 1
								}),
								showOnStart: !0
							};
							return e.call(this, t, Zf, n) || this
						}
						return (0, o.Z)(t, e), t
					}(Phaser.Animations.Animation),
					Kf = zf,
					jf = function(e) {
						function t(t) {
							var n, i, a;
							(a = e.call(this, t) || this).scene = void 0, a.ribbon = void 0, a.graphics = void 0, a.colorUse = void 0, a.lastChange = void 0, a.currentFrame = void 0, a.isYoyo = void 0, a.isGravityChanged = void 0, a.timePassed = 0, a.timeDeltaPassed = 0, a.points = void 0, a.scene = t.manager.scene;
							var r = a.emitter.manager,
								s = r.x,
								o = r.y;
							return a.points = me()(n = Za()(i = new Array(10)).call(i, null)).call(n, (function() {
								return {
									x: a.x + s,
									y: a.y + o
								}
							})), a.isYoyo = !1, a.isGravityChanged = !1, a.lastChange = 0, a.currentFrame = -1, a.createGraphics(), a.randomRibbonUsedWhenFall(), a
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.randomRibbonUsedWhenFall = function() {
							switch (Phaser.Math.Between(0, 3)) {
								case 0:
								default:
									this.ribbon = this.scene.anims.get(zp.RIBBON_A.KEY);
									break;
								case 1:
									this.ribbon = this.scene.anims.get(zp.RIBBON_B.KEY);
									break;
								case 2:
									this.ribbon = this.scene.anims.get(zp.RIBBON_C.KEY);
									break;
								case 3:
									this.ribbon = this.scene.anims.get(zp.RIBBON_D.KEY)
							}
						}, n.setRibbonPosition = function(e, t) {
							var n;
							me()(n = this.points).call(n, (function(n) {
								n.x = e, n.y = t
							}))
						}, n.createGraphics = function() {
							var e = [8443204, 2928867, 12013036, 16376097, 15285798];
							this.colorUse = e[Phaser.Math.Between(0, e.length - 1)], this.graphics = this.scene.add.graphics({
								lineStyle: {
									width: 3,
									color: this.colorUse
								}
							});
							var t = this.emitter.manager,
								n = t.x,
								i = t.y,
								a = t.depth;
							this.graphics.setDepth(a), this.graphics.setPosition(n, i)
						}, n.update = function(t, n, i) {
							var a = e.prototype.update.call(this, t, n, i);
							return this.updateFrames(t), this.updatePoints(), this.updateGraphics(), this.updateGravity(), this.updateColor(), this.updateAlpha(t, n), a
						}, n.updateFrames = function(e) {
							this.lastChange += e, this.lastChange >= this.ribbon.msPerFrame && (this.isYoyo ? this.currentFrame-- : this.currentFrame++, this.currentFrame < 0 && (this.isYoyo = !1, this.currentFrame = 1), this.currentFrame >= this.ribbon.frames.length && (this.isYoyo = !0, this.currentFrame -= 1), this.frame = this.ribbon.frames[this.currentFrame].frame, this.lastChange -= this.ribbon.msPerFrame)
						}, n.updatePoints = function() {
							this.graphics.visible && (this.points.shift(), this.points.push({
								x: this.x,
								y: this.y
							}))
						}, n.updateGraphics = function() {
							this.graphics.visible && (this.graphics.clear(), this.graphics.strokePoints(this.points))
						}, n.updateGravity = function() {}, n.updateAlpha = function(e, t) {
							var n;
							if (!this.isGravityChanged)
								if (this.timePassed < 1500) this.timePassed += e;
								else {
									this.timeDeltaPassed += e;
									var i = 1 - this.timeDeltaPassed / 1800;
									null == (n = this.graphics) || n.setAlpha(i), i <= 0 && (this.graphics.destroy(), this.isGravityChanged = !0), i <= .2 && (this.emitter.setVisible(!0), this.emitter.setGravityY(25))
								}
						}, n.updateVelocity = function() {
							this.graphics.visible && (this.lifeCurrent > this.life - 1800 ? this.velocityX += Phaser.Math.Between(-2, 2) : this.velocityX > 0 ? this.velocityX += Phaser.Math.Between(-10, 6) : this.velocityX += Phaser.Math.Between(-6, 10))
						}, n.updateColor = function() {
							this.graphics.visible || (this.tint = this.colorUse)
						}, t
					}(Phaser.GameObjects.Particles.Particle),
					Xf = jf,
					qf = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.isYoyo = void 0, n.isGravityChanged = void 0, n.lastChange = void 0, n.currentFrame = void 0, n.star = void 0, n.starX = void 0, n.starY = void 0, n.isYoyo = !1, n.isGravityChanged = !1, n.lastChange = 0, n.currentFrame = -1, n.scene = t.manager.scene, n.starX = n.scene.anims.get(zp.CONFETTI_STAR_X.KEY), n.starY = n.scene.anims.get(zp.CONFETTI_STAR_Y.KEY), n.star = n.starX, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.update = function(t, n, i) {
							var a = e.prototype.update.call(this, t, n, i);
							return this.updateGravity(), this.updateVelocity(), this.updateFrameRate(), this.updateFrames(t), a
						}, n.updateGravity = function() {
							this.lifeCurrent > this.life - 2e3 || this.isGravityChanged || (this.isGravityChanged = !0, this.emitter.setGravityY(15), this.emitter.setSpeedX(0))
						}, n.updateVelocity = function() {
							this.lifeCurrent > this.life - 2e3 || (this.velocityX > 0 ? this.velocityX += Phaser.Math.Between(-6, 3) : this.velocityX += Phaser.Math.Between(-3, 6))
						}, n.updateFrames = function(e) {
							if (this.lastChange += e, this.lastChange >= this.star.msPerFrame) {
								var t = Phaser.Math.RND.between(0, 1);
								this.star = t > 0 ? this.starX : this.starY, this.isYoyo ? this.currentFrame-- : this.currentFrame++, this.currentFrame < 0 && (this.isYoyo = !1, this.currentFrame = 1, this.emitter.setAlpha(1)), this.currentFrame >= this.star.frames.length && (this.isYoyo = !0, this.currentFrame -= 1, this.emitter.setAlpha(.8)), this.frame = this.star.frames[this.currentFrame].frame, this.lastChange -= this.star.msPerFrame
							}
						}, n.updateFrameRate = function() {
							this.lifeCurrent < this.life - 2e3 ? this.star.msPerFrame = 150 : this.star.msPerFrame = Phaser.Math.RND.between(300, 600)
						}, t
					}(Phaser.GameObjects.Particles.Particle),
					Qf = qf,
					Jf = Oa.Z.EFFECTS,
					$f = Jf.KEY,
					em = Jf.FRAME,
					tm = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, $f, em.BLANK) || this).emitterConfetti = void 0, n.emitterRibbons = void 0, n.ribbonConfig = void 0, n.confettiConfig = void 0, n.width = void 0, n.height = void 0, n.emitterRibbons = [], n.emitterConfetti = [], n.createConfigs(), n.createAnimations(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createConfigs = function() {
							var e = [8443204, 2928867, 12013036, 16376097, 15285798],
								t = 1 / this.scene.world.getPixelRatio();
							this.ribbonConfig = {
								on: !1,
								visible: !1,
								timeScale: 1.5,
								frame: em.BLANK,
								particleBringToTop: !0,
								speedY: {
									min: -370,
									max: -410
								},
								gravityY: 210,
								tint: e,
								lifespan: {
									min: 8e3,
									max: 15e3
								},
								rotate: {
									start: 0,
									end: 1800,
									random: !0
								},
								scale: {
									min: .6 * t,
									max: t
								},
								alpha: {
									min: 1,
									max: 0
								},
								particleClass: Xf
							}, this.confettiConfig = {
								on: !1,
								delay: 200,
								timeScale: 2,
								tint: e,
								particleBringToTop: !0,
								frame: em.PREFIX_ANIMATION_RIBBON_CONFETTI_A + "1",
								speedY: {
									min: -380,
									max: -420
								},
								gravityY: 210,
								lifespan: {
									min: 15e3,
									max: 18e3
								},
								rotate: {
									start: 0,
									end: 1080
								},
								scale: {
									min: .6 * t,
									max: t
								},
								particleClass: Qf
							}
						}, n.createAnimations = function() {
							if (!this.scene.anims.get(zp.CONFETTI_STAR_X.KEY)) {
								var e = new Ff(this.scene.anims);
								this.scene.anims.add(zp.CONFETTI_STAR_X.KEY, e)
							}
							if (!this.scene.anims.get(zp.CONFETTI_STAR_Y.KEY)) {
								var t = new Kf(this.scene.anims);
								this.scene.anims.add(zp.CONFETTI_STAR_Y.KEY, t)
							}
							if (!this.scene.anims.get(zp.RIBBON_A.KEY)) {
								var n = new tf(this.scene.anims);
								this.scene.anims.add(zp.RIBBON_A.KEY, n)
							}
							if (!this.scene.anims.get(zp.RIBBON_B.KEY)) {
								var i = new hf(this.scene.anims);
								this.scene.anims.add(zp.RIBBON_B.KEY, i)
							}
							if (!this.scene.anims.get(zp.RIBBON_C.KEY)) {
								var a = new bf(this.scene.anims);
								this.scene.anims.add(zp.RIBBON_C.KEY, a)
							}
							if (!this.scene.anims.get(zp.RIBBON_D.KEY)) {
								var r = new xf(this.scene.anims);
								this.scene.anims.add(zp.RIBBON_D.KEY, r)
							}
						}, n.run = function(e, t, n, i) {
							this.setPosition(e, t), this.width = n, this.height = i, this.createEmitters(), this.emitterConfetti.forEach((function(e) {
								e.emitParticle(25)
							})), this.emitterRibbons.forEach((function(e) {
								e.emitParticle(20)
							}))
						}, n.stop = function() {
							this.emitterConfetti.forEach((function(e) {
								e.killAll()
							})), this.emitterRibbons.forEach((function(e) {
								e.killAll()
							})), this.kill()
						}, n.createEmitters = function() {
							this.emitterRibbons = [], this.emitterConfetti = [], this.createConfettiLeftEmitter(), this.createConfettiRightEmitter(), this.createRibbonLeftEmitter(), this.createRibbonRightEmitter()
						}, n.createConfettiLeftEmitter = function() {
							var e = (0, r.Z)({}, this.confettiConfig, {
									speedX: {
										min: 50,
										max: 100
									}
								}),
								t = this.createEmitter(e);
							this.emitterConfetti.push(t)
						}, n.createConfettiRightEmitter = function() {
							var e = this.width,
								t = (0, r.Z)({}, this.confettiConfig, {
									x: e,
									speedX: {
										min: -50,
										max: -100
									}
								}),
								n = this.createEmitter(t);
							this.emitterConfetti.push(n)
						}, n.createRibbonLeftEmitter = function() {
							var e = (0, r.Z)({}, this.ribbonConfig, {
									speedX: {
										min: 40,
										max: 90
									},
									emitCallback: function(e) {
										e.setRibbonPosition(0, 0)
									}
								}),
								t = this.createEmitter(e);
							this.emitterRibbons.push(t)
						}, n.createRibbonRightEmitter = function() {
							var e = this.width,
								t = (0, r.Z)({}, this.ribbonConfig, {
									x: e,
									speedX: {
										min: -40,
										max: -90
									},
									emitCallback: function(t) {
										t.setRibbonPosition(e, 0)
									}
								}),
								n = this.createEmitter(t);
							this.emitterRibbons.push(n)
						}, t
					}(Phaser.GameObjects.Particles.ParticleEmitterManager),
					nm = tm,
					im = Oa.Z.DEFAULT,
					am = im.KEY,
					rm = im.FRAME,
					sm = function(e) {
						function t(t, n, i, a) {
							var r;
							return (r = e.call(this, t, n, i, a) || this).glare = void 0, r.popup = void 0, r.avatar = void 0, r.title = void 0, r.contents = void 0, r.buttonShare = void 0, r.bestScoreText = void 0, r.tweenGlare = void 0, r.tweenScoreText = void 0, r.popupShowUpAnimation = void 0, r.contentShowUpAnimation = void 0, r.popupFadeOutAnimation = void 0, r.confetti = void 0, r.paperFireworksCelebration = void 0, r.open = function(t) {
								e.prototype.open.call((0, Ba.Z)(r), t), r.setVisible(!0), r.runAnim();
								var n = r.scene.player.getBestScore() || 0,
									i = r.scene.player.getPlayer(),
									a = i.playerId,
									s = i.photo;
								try {
									window.ArcadeScore && "function" == typeof window.ArcadeScore.saveScoreOnce && window.ArcadeScore.saveScoreOnce(n)
								} catch (o) {}
								r.setBestScore(n), r.avatar.loadPhoto(a, s), r.scene.time.delayedCall(2e3, (function() {
									r.scene.storage.dispatch(Qs())
								})), r.runOpenAnimation(), r.scene.audio.playSound(_a.CONGRATULATION), r.scene.analytics.pageview(r.name)
							}, r.handleClosePopup = function() {
								r.scene.audio.playSound(_a.POPUP_OFF, {
									volume: .6
								}), r.runCloseAnimation(), r.popupFadeOutAnimation.next((function() {
									r.scene.screen.close(r.name)
								})), As.emit(Ta)
							}, r.handleShareBestScore = function() {
								r.scene.storage.dispatch(Ps())
							}, r.setVisible(!1), r.setDepth(Ra.Ks.POPUP), r.createPopup(), r.createConfetti(), r.createPopupContent(), r.background.setAlpha(.6), r
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createConfetti = function() {
							this.confetti = new Hp(this.scene), this.paperFireworksCelebration = new nm(this.scene), this.add(this.confetti.particle)
						}, n.runAnim = function() {
							this.glare.setScale(0).setAlpha(0), this.bestScoreText.setScale(0).setAlpha(0), this.tweenScoreText.play(), this.glare.setVisible(!0), this.tweenGlare.play()
						}, n.createPopup = function() {
							this.popup = new Jc(this.scene, 0, 0, 325, 280), this.add(this.popup), Phaser.Display.Align.In.Center(this.popup, this.zone)
						}, n.createPopupContent = function() {
							this.createTitle(), this.createAvatar(), this.createGlare(), this.createBestScoreText(), this.popup.add([this.title]), this.contents = this.scene.make.group({}), this.contents.addMultiple([this.avatar])
						}, n.createTitle = function() {
							this.title = this.scene.add.container();
							var e = this.scene.make.image({
								key: am,
								frame: rm.RIBBON_MAIN
							});
							e.setWorldSize(260, 57);
							var t = this.scene.make.image({
								key: am,
								frame: rm.TEXT_BEST_SCORE
							});
							t.setWorldSize(143, 21), Phaser.Display.Align.In.Center(t, e, 0, -3);
							var n = new _c(this.scene, am, rm.BLANK, 50, 50),
								i = this.scene.make.image({
									key: am,
									frame: rm.BUTTON_CLOSE
								});
							i.setWorldSize(25, 25), n.add(i), n.button.setVisible(!1), n.useSound = !1, n.onClick = this.handleClosePopup, n.setName("Close"), Phaser.Display.Align.In.Center(i, n, 0, 0), Phaser.Display.Align.In.RightCenter(n, e, 48.5, -19), this.title.add([e, t, n]), this.popup.add(this.title), Phaser.Display.Align.In.TopCenter(this.title, this.popup, 0, -2)
						}, n.createButtonShare = function() {
							this.buttonShare = new _c(this.scene, am, rm.BUTTON_BLUE_BIG, 122, 54), this.buttonShare.setName("Share");
							var e = this.scene.make.image({
								key: am,
								frame: rm.TEXT_SHARE
							});
							e.setWorldSize(69, 21), this.buttonShare.add(e), Phaser.Display.Align.In.Center(e, this.buttonShare, 14, -5);
							var t = this.scene.make.image({
								key: am,
								frame: rm.ICON_SHARE
							});
							t.setWorldSize(22.5, 27), this.buttonShare.add(t), Phaser.Display.Align.In.LeftCenter(t, this.buttonShare, -16, -5), this.popup.add(this.buttonShare), Phaser.Display.Align.In.Center(this.buttonShare, this.avatar, 0, 85), this.buttonShare.onClick = this.handleShareBestScore
						}, n.createBestScoreText = function() {
							this.bestScoreText = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(160),
								origin: {
									x: .5,
									y: .5
								}
							}), this.popup.add(this.bestScoreText), Phaser.Display.Align.In.Center(this.bestScoreText, this.popup, 0, -43), this.bestScoreText.setScale(0).setAlpha(0), this.tweenScoreText = this.scene.tweens.add({
								targets: this.bestScoreText,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 0,
									to: 1
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Sine
							})
						}, n.createGlare = function() {
							this.glare = new au(this.scene), this.glare.setVisible(!1), this.popup.add(this.glare), Phaser.Display.Align.In.Center(this.glare, this.popup, 0, -50);
							var e = this.glare.scale;
							this.glare.setScale(0).setAlpha(0), this.tweenGlare = this.scene.tweens.add({
								targets: this.glare,
								paused: !0,
								duration: 200,
								delay: 500,
								scale: {
									from: 0,
									to: e
								},
								alpha: {
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Sine
							})
						}, n.createAvatar = function() {
							this.avatar = new oc(this.scene, {
								key: am,
								frame: rm.AVATAR_BORDER_ORANGE_THIN,
								background: rm.AVATAR_BACKGROUND,
								width: 88,
								height: 90,
								borderWidth: 8
							}), this.popup.add(this.avatar), Phaser.Display.Align.In.Center(this.avatar, this.popup, 0, 60)
						}, n.runCloseAnimation = function() {
							this.runPopupExitsAnimation(0, 200)
						}, n.runPopupExitsAnimation = function(e, t) {
							var n, i = this;
							this.popupFadeOutAnimation || (this.popupFadeOutAnimation = new Yc.Z({
								targets: [this.popup],
								delay: e,
								duration: t,
								props: {
									y: 250,
									scale: 0
								},
								onComplete: function() {
									i.popup.setY(0), i.glare.setVisible(!1)
								}
							})), null == (n = this.popupFadeOutAnimation) || n.play()
						}, n.setBestScore = function(e) {
							this.bestScoreText.setText("" + e)
						}, n.runOpenAnimation = function() {
							this.scene.audio.playSound(_a.POPUP_SHOW), this.runPopupEntrancesAnimation(0, 300), this.runPopupContentEntrancesAnimation(200, 300)
						}, n.runPopupEntrancesAnimation = function(e, t) {
							var n = this;
							if (!this.popupShowUpAnimation) {
								var i = this.popup,
									a = i.y,
									r = i.scale;
								this.popupShowUpAnimation = new Kc({
									targets: [this.popup],
									delay: e,
									duration: t,
									props: {
										y: {
											from: 350,
											to: a
										},
										alpha: {
											start: 1,
											from: 1,
											to: 1
										},
										scale: {
											start: 0,
											from: 0,
											to: r
										}
									},
									onComplete: function() {
										n.paperFireworksCelebration.setDepth(ka.Z.ON_TOP), n.paperFireworksCelebration.run(0, n.popup.y + n.scene.gameZone.height / 2 + n.popup.height / 2, 375, 100)
									}
								})
							}
							this.popupShowUpAnimation.play()
						}, n.runPopupContentEntrancesAnimation = function(e, t) {
							this.contentShowUpAnimation || (this.contentShowUpAnimation = new Wc.Z({
								targets: this.contents.getChildren(),
								duration: t,
								delay: this.scene.tweens.stagger(80, {
									start: e
								}),
								props: {
									alpha: {
										start: 0,
										from: 0,
										to: 1
									}
								}
							})), this.contentShowUpAnimation.play()
						}, t
					}(GameCore.Screen),
					om = sm,
					cm = GameCore.Configs,
					um = cm.Match,
					lm = cm.Gameplay,
					hm = cm.Network,
					dm = cm.Tutorial,
					pm = cm.Board,
					fm = cm.Ads,
					mm = Oa.Z.GAMEPLAY.FRAME,
					gm = function(e) {
						function t() {
							for (var t, n, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
							return (n = e.call.apply(e, y()(t = [this]).call(t, r)) || this).lastTimeInputEnabled = 0, n.usedRescue = !1, n.isQueueScreensUpdated = void 0, n.queueScreens = [], n.isInterstitialAdShowed = void 0, n.isSwitchLeaderBoard = void 0, n.countForRequestedTournament = 0, n.isRequestedTournament = !1, n.header = void 0, n.main = void 0, n.footer = void 0, n.gameOver = void 0, n.tutorialManager = void 0, n.bestScore = 0, n.run = function() {
								if (n.ads.showBannerAdAsync().catch(i.tO), n.tutorialManager.isValidForTutorial() || dm.ForceUseTutorial) return n.handleStartTutorial(), void n.player.incUserGuideDisplays();
								var e = n.storage.getState(),
									t = n.player.getPlayerId(),
									a = Dr(e);
								if (fs(e, {
										playerId: t
									}) && a && a !== ta) return n.isQueueScreensUpdated = !0, n.updateQueueResultScreen(), void n.showQueueScreens();
								n.openDashboardScreen(), n.checkAndAddShortcut(), n.analytics.pageview(n.scene.key)
							}, n.create = function() {
								e.prototype.create.call((0, Ba.Z)(n));
								var t = n.player.getBestScore();
								n.bestScore = t, n.createMain(), n.createHeader(), n.createFooter(), n.createTutorialManager(), n.createScreens(), n.createInput(), n.listenEvents(), n.preLoadAds(), n.input.setTopOnly(!0)
							}, n.openDashboardScreen = function() {
								var e = n.storage.getState(),
									t = Dr(e);
								if (t && t !== ta) return n.isSwitchLeaderBoard ? (n.isSwitchLeaderBoard = !1, void n.closeDashboardScreen()) : void n.startGame();
								(0, Ba.Z)(n).screen.open(Ra.o4.DASH_BOARD_SCREEN)
							}, n.closeDashboardScreen = function() {
								(0, Ba.Z)(n).screen.close(Ra.o4.DASH_BOARD_SCREEN)
							}, n.closeGameOverScreen = function() {
								(0, Ba.Z)(n).screen.close(Ra.o4.GAME_OVER_SCREEN)
							}, n.handlePauseGame = function() {
								n.gameOver || (0, Ba.Z)(n).screen.open(Ra.o4.DASH_BOARD_SCREEN)
							}, n.handleShowMidRollAd = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = n.game.globalScene, e.prev = 1, n.audio.pauseMusic(), n.ads.canbeShowInterstitialAd()) {
												e.next = 5;
												break
											}
											return e.abrupt("return");
										case 5:
											return t.screen.open(Ra.o4.NOTIFY_SCREEN, {
												message: "Loading ads...",
												duration: hm.Timeout,
												loading: !0
											}), e.next = 8, n.ads.showMidRollAdAsync();
										case 8:
											n.analytics.showInterstitialAd(n.getSceneName()), e.next = 14;
											break;
										case 11:
											return e.prev = 11, e.t0 = e.catch(1), e.abrupt("return");
										case 14:
											return e.prev = 14, t.screen.close(Ra.o4.NOTIFY_SCREEN), n.audio.playMusic(), n.ads.preloadMidRollAdAsync().catch(i.tO), e.finish(14);
										case 19:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 11, 14, 19]
								])
							}))), n.rescued = function() {
								try {
									n.main.board.rescue(), n.usedRescue = !0
								} catch (e) {}
							}, n.replay = function() {
								n.restartGame(), n.startGame(), n.input.once(Phaser.Input.Events.POINTER_DOWN, (function() {
									n.input.off(Phaser.Input.Events.POINTER_DOWN)
								}))
							}, n.handleCloseBannerAds = function() {
								n.ads.hideBannerAdAsync().catch((function(e) {
									console.warn(e)
								}))
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.preload = function() {
							this.events.on(Phaser.Scenes.Events.WAKE, this.run), this.events.on(Phaser.Scenes.Events.CREATE, this.run), this.events.on(Phaser.Scenes.Events.SLEEP, this.handleCloseBannerAds)
						}, n.preLoadAds = function() {
							this.ads.preloadMidRollAdAsync().catch((function(e) {
								return console.log(e)
							})), this.ads.preloadRewardedVideoAsync().catch((function(e) {
								return console.log(e)
							}))
						}, n.createHeader = function() {
							this.header = new dd(this), Phaser.Display.Align.In.TopCenter(this.header, this.gameZone)
						}, n.createMain = function() {
							this.main = new Vh(this), Phaser.Display.Align.In.Center(this.main, this.gameZone)
						}, n.createFooter = function() {
							this.footer = new Zd(this), Phaser.Display.Align.In.BottomCenter(this.footer, this.gameZone, 0, -65)
						}, n.createTutorialManager = function() {
							this.tutorialManager = new pp(this)
						}, n.createInput = function() {
							this.header.buttonSetting.onClick = this.handlePauseGame
						}, n.createScreens = function() {
							this.createDashboardScreen(), this.createRescueScreen(), this.createGameOverScreen(), this.createResultScreen(), this.createBestScoreScreen()
						}, n.createDashboardScreen = function() {
							this.screen.add(Ra.o4.DASH_BOARD_SCREEN, Ep)
						}, n.startGame = function() {
							var e;
							try {
								window.ArcadeScore && "function" == typeof window.ArcadeScore.resetScoreSubmission && window.ArcadeScore.resetScoreSubmission()
							} catch (t) {}
							this.gameOver = !1, this.isInterstitialAdShowed = !1, this.checkAndAddShortcut(), this.tutorialManager.skipTutorial(), this.closeDashboardScreen(), this.closeGameOverScreen(), this.handleUsedRescue(), this.audio.playSound(_a.BOARD_GAME_START), this.enableInput(), this.restartGame();
							var t = this.storage.getState(),
								n = Dr(t);
							n === ta ? this.handleStartGameSingleMode() : Ot()(e = [ia, na, aa]).call(e, n) >= 0 && this.handleStartGameFriendMode(), this.updateCurrentBestScore()
						}, n.handleUsedRescue = function() {
							this.usedRescue && this.storage.dispatch($o())
						}, n.handleStartTutorial = function() {
							this.tutorialManager.start()
						}, n.handleStartGameSingleMode = function() {
							var e, t, n = this.storage.getState(),
								i = (null == (e = ss(n)) ? void 0 : e.data) || {},
								a = (null == (t = ss(n)) ? void 0 : t.score) || 0;
							if (i) {
								var r = i.fen,
									s = null,
									o = null;
								if (r) {
									var c = this.main.board.getBoardByFen(r);
									s = this.handleDynamicFenSize(c), o = this.footer.pieces.getPiecesByFen(r), this.isFenGameOver(s, o) && (s = null, o = null, this.storage.dispatch(No()), n = this.storage.getState(), a = 0)
								}
								this.main.board.clearBoard(), s && this.main.board.startGame(s), this.footer.pieces.clearPieces(), o ? this.footer.pieces.showAvailablePieces(o) : this.footer.pieces.showNewPieces(), this.header.mainScoreBlock.setVisible(!0), this.header.bestScoreBlock.setVisible(!0), this.header.myScoreBlock.setVisible(!1), this.header.opponentScoreBlock.setVisible(!1), this.header.mainScoreBlock.setScore(a), this.header.mainScoreBlock.setScoreText(a), this.header.setIconCup(), this.main.praise.reset()
							}
						}, n.handleStartGameFriendMode = function() {
							this.header.mainScoreBlock.setVisible(!1), this.header.bestScoreBlock.setVisible(!1), this.header.myScoreBlock.setVisible(!0), this.header.opponentScoreBlock.setVisible(!0), this.header.myScoreBlock.updateInfo(), this.header.opponentScoreBlock.updateInfo(), this.header.setIconBattle(), this.main.praise.reset(), this.main.board.clearBoard(), this.footer.pieces.clearPieces(), this.footer.pieces.showNewPieces()
						}, n.listenEvents = function() {
							As.on(Or.START_GAME, this.startGame.bind(this)), As.on(Or.RESCUE, this.rescued), As.on(Or.REPLAY, this.replay), As.on(Or.GAME_OVER, this.handleGameOver.bind(this)), As.on(Ia, this.handleSwitchLeaderBoard.bind(this)), As.on(Ca, this.handleCloseScreen.bind(this)), As.on(Ta, this.handleCloseScreen.bind(this)), As.on("handle_state_change", this.handleStateChange.bind(this))
						}, n.handleSwitchLeaderBoard = function() {
							this.isSwitchLeaderBoard = !this.isSwitchLeaderBoard
						}, n.handleCloseScreen = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.handleGameOver();
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.getFen = function() {
							return this.main.board.getFenByBoard() + " " + this.footer.pieces.getFenByPieces()
						}, n.createRescueScreen = function() {
							this.screen.add(Ra.o4.RESCUE_SCREEN, Qd)
						}, n.createGameOverScreen = function() {
							this.screen.add(Ra.o4.GAME_OVER_SCREEN, Rp)
						}, n.createResultScreen = function() {
							this.screen.add(Ra.o4.RESULT_SCREEN, Mp)
						}, n.createBestScoreScreen = function() {
							this.screen.add(Ra.o4.BEST_SCORE_SCREEN, om)
						}, n.updateCurrentBestScore = function() {
							var e = this.player.getBestScore(),
								t = this.storage.getState(),
								n = ys(t).bestScore,
								i = void 0 === n ? 0 : n,
								a = e > i ? e : i;
							this.header.bestScoreBlock.setScoreText(a)
						}, n.handleGameOver = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											this.gameOver = !0;
											try {
												var t = this.storage.getState(),
													n = ys(t),
													i = n && void 0 !== n.score ? n.score : 0,
													a = this.player.getBestScore() || 0,
													r = Math.max(0, Math.floor(Number(i) || 0), Math.floor(Number(a) || 0));
												window.ArcadeScore && "function" == typeof window.ArcadeScore.saveScoreOnce && window.ArcadeScore.saveScoreOnce(r)
											} catch (o) {}
											if (this.updateQueueScreens(), !(this.queueScreens.length > 0)) {
												e.next = 5;
												break
											}
											return this.showQueueScreens(), e.abrupt("return");
										case 5:
											this.screen.open(Ra.o4.GAME_OVER_SCREEN), this.screen.bringToTop(Ra.o4.GAME_OVER_SCREEN);
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.showQueueScreens = function() {
							var e = this.queueScreens.pop();
							e && this.screen.open(e)
						}, n.updateQueueScreens = function() {
							this.isQueueScreensUpdated || (this.isQueueScreensUpdated = !0, this.updateQueueBestScoreScreen(), this.updateQueueResultScreen())
						}, n.updateQueueResultScreen = function() {
							var e, t = this.storage.getState(),
								n = Dr(t);
							if (-1 !== Ot()(e = [na, ia]).call(e, n) && ls(t)) {
								var i = ds(t).playerId;
								n === ia && i === ea.playerId || this.queueScreens.push(Ra.o4.RESULT_SCREEN)
							}
						}, n.updateQueueBestScoreScreen = function() {
							var e = this.storage.getState(),
								t = ys(e),
								n = t.score,
								i = t.bestScore;
							if (void 0 === n && void 0 === i) {
								var a = vs(e)[this.player.getPlayerId()];
								n = (null == a ? void 0 : a.score) || 0, i = this.player.getBestScore()
							}
							this.bestScore = (i || 0) < this.bestScore ? this.bestScore : i || 0, n && (n <= this.bestScore || this.queueScreens.push(Ra.o4.BEST_SCORE_SCREEN))
						}, n.handleRequestFinishGame = function() {
							var e = this,
								t = this.storage.getState(),
								n = Nr(t);
							this.time.addEvent({
								delay: lm.DelayFinishGame,
								callback: function() {
									e.enableInput(), n < um.MaxRescueCount && fm.Enabled ? e.screen.open(Ra.o4.RESCUE_SCREEN) : (e.usedRescue = !1, e.endGame())
								}
							})
						}, n.checkAnimPlaying = function() {
							var e = this.tweens.getAllTweens();
							return !(!e || 0 === e.length)
						}, n.disableInput = function() {
							this.input.enabled = !1
						}, n.enableInput = function() {
							this.input.enabled = !0
						}, n.restartGame = function() {
							var e;
							this.isInterstitialAdShowed = !1, this.isQueueScreensUpdated = !1, this.queueScreens = [], null == (e = this.header.mainScoreBlock.addScore) || e.stop().remove(), this.header.mainScoreBlock.setScore(0), this.header.mainScoreBlock.setScoreText(0), this.header.myScoreBlock.setScore(0), this.header.myScoreBlock.setScoreText(0), this.main.praise.listScore = []
						}, n.endGame = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, this.handleShowMidRollAd().then(i.tO);
										case 3:
											return t = !1, (this.countForRequestedTournament + 1) % 3 == 0 || this.isRequestedTournament || (t = 1 == Phaser.Math.Between(0, 1), this.isRequestedTournament = t), (this.countForRequestedTournament + 1) % 3 == 0 && (this.isRequestedTournament || (t = !0), this.isRequestedTournament = !1), e.prev = 6, e.next = 9, this.facebook.tournament.getTournamentsAsync();
										case 9:
											e.sent.length > 0 && (this.isRequestedTournament = !0, t = !0), this.countForRequestedTournament++, e.next = 16;
											break;
										case 14:
											e.prev = 14, e.t0 = e.catch(6);
										case 16:
											this.storage.dispatch(jo(t)), e.next = 22;
											break;
										case 19:
											e.prev = 19, e.t1 = e.catch(0), console.log("errrrrrrrrrrrrrrr", e.t1);
										case 22:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[0, 19],
									[6, 14]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.handleUpdateScore = function(e) {
							var t;
							if (!this.tutorialManager.isRunning()) {
								var n = 0,
									i = this.storage.getState(),
									a = Dr(i);
								a === ta ? n = this.header.mainScoreBlock.score + e : Ot()(t = [ia, na, aa]).call(t, a) >= 0 && (n = this.header.myScoreBlock.score + e), this.storage.dispatch(Lo({
									score: n
								})), this.updateMatchData()
							}
						}, n.handleAddScoreAnim = function(e) {
							var t, n = this.storage.getState(),
								i = Dr(n);
							this.tutorialManager.isRunning() || i === ta ? this.header.mainScoreBlock.animAddScore(e) : Ot()(t = [ia, na, aa]).call(t, i) >= 0 && this.header.myScoreBlock.animAddScore(e)
						}, n.updateMatchData = function() {
							if (!this.tutorialManager.isRunning()) {
								var e = this.getFen(),
									t = this.storage.getState(),
									n = ss(t).data || {};
								if (Dr(t) === ta) {
									var i = os(t),
										a = ys(t).score,
										s = void 0 === a ? 0 : a;
									this.storage.dispatch(To(i, {
										score: s,
										data: (0, r.Z)({}, n, {
											fen: e
										}),
										updateAt: Date.now()
									}))
								}
							}
						}, n.update = function(e) {
							this.input.enabled || (this.checkAnimPlaying() ? this.lastTimeInputEnabled = e : e - this.lastTimeInputEnabled >= 3e3 && (this.input.enabled = !0, this.lastTimeInputEnabled = e))
						}, n.isFenGameOver = function(e, t) {
							for (var n = [], i = 0; i < t.length; i++) {
								var a = t[i],
									r = a.type,
									s = a.direction,
									o = a.isReverse;
								switch (r) {
									case ml:
									case gl:
									case vl:
										n.push({
											data: Ed.getData(r, s, o)
										});
										break;
									case yl:
									case Sl:
									case bl:
									case El:
										n.push({
											data: wd.getData(r, s)
										});
										break;
									case Al:
									case wl:
									case Tl:
										n.push({
											data: Cd.getData(r)
										});
										break;
									case Pl:
										n.push({
											data: Id.getData(s)
										});
										break;
									case Cl:
										n.push({
											data: xd.getData(s)
										})
								}
							}
							return fh(e, n)
						}, n.handleDynamicFenSize = function(e) {
							var t, n, i = 0;
							if ((n = e.length) && (i = e[0].length), 0 === n || 0 === i) return e;
							var a = y()(t = []).call(t, e);
							if (n > pm.rows) Bu()(a).call(a, pm.rows, n - pm.rows);
							else if (i < pm.rows)
								for (var r = 0; r < pm.rows - n; r++) {
									var s;
									a.push(Za()(s = new Array(n)).call(s, {
										value: 0,
										frame: mm.GEM_TRANSPARENT
									}))
								}
							return i > pm.cols ? a.forEach((function(e) {
								Bu()(e).call(e, pm.cols, i - pm.cols)
							})) : i < pm.cols && a.forEach((function(e) {
								for (var t = 0; t < pm.cols - i; t++) e.push({
									value: 0,
									frame: mm.GEM_TRANSPARENT
								})
							})), a
						}, n.checkAndAddShortcut = function() {
							if (!this.game.player.getPlayer().isUserNew) {
								var e = this.storage.getState();
								sa(e) != aa && this.facebook.attemptToAddShortcut()
							}
						}, t
					}(ec.Z);
				var vm = gm,
					ym = n(620),
					Sm = Oa.Z.DEFAULT,
					bm = Sm.KEY,
					Em = Sm.FRAME,
					Am = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, bm, Em.BUTTON_GREEN_BIG, 133, 58) || this).scene = void 0, n.scene = t, n.createIcon(), n.setName("PlayWithFriends"), n
						}
						return (0, o.Z)(t, e), t.prototype.createIcon = function() {
							var e = this.scene.make.image({
								key: bm,
								frame: Em.ICON_INVITE
							});
							e.setWorldSize(22, 31), this.add(e), Phaser.Display.Align.In.LeftCenter(e, this, -18, -4);
							var t = this.scene.make.image({
								key: bm,
								frame: Em.TEXT_INVITE
							});
							t.setWorldSize(71, 23), this.add(t), Phaser.Display.Align.In.Center(t, this, 14, -5)
						}, t
					}(_c),
					wm = Am,
					Tm = Oa.Z.DEFAULT,
					Cm = Tm.KEY,
					Pm = Tm.FRAME,
					Im = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, Cm, Pm.BUTTON_BLUE_BIG, 133, 58) || this).scene = void 0, n.scene = t, n.setName("Share"), n.createIcon(), n
						}
						return (0, o.Z)(t, e), t.prototype.createIcon = function() {
							var e = this.scene.make.image({
								key: Cm,
								frame: Pm.ICON_SHARE
							});
							e.setWorldSize(24, 32), this.add(e), Phaser.Display.Align.In.LeftCenter(e, this, -17, -4);
							var t = this.scene.make.image({
								key: Cm,
								frame: Pm.TEXT_SHARE
							});
							t.setWorldSize(76, 24), this.add(t), Phaser.Display.Align.In.Center(t, this, 12, -5)
						}, t
					}(_c),
					km = Im,
					xm = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.playButton = void 0, n.shareButton = void 0, n.scene = t, n.setName("FooterBar"), n.setSize(300, 60), n.createButtons(), n.alignButtons(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.alignButtons = function() {
							Phaser.Display.Align.In.Center(this.shareButton, this, -80), Phaser.Display.Align.In.Center(this.playButton, this, 80)
						}, n.createButtons = function() {
							this.createPlayButton(), this.createShareButton()
						}, n.createPlayButton = function() {
							this.playButton = new wm(this.scene), this.add(this.playButton)
						}, n.createShareButton = function() {
							this.shareButton = new km(this.scene), this.add(this.shareButton)
						}, t
					}(Phaser.GameObjects.Container),
					Om = xm,
					Rm = Oa.Z.DEFAULT,
					_m = Rm.KEY,
					Bm = Rm.FRAME,
					Dm = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.buttonBack = void 0, n.title = void 0, n.scene = t, n.createTitle(), n.createButtonBack(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createButtonBack = function() {
							this.buttonBack = new _c(this.scene, _m, Bm.BUTTON_BACK, 35, 35), this.buttonBack.setName("Back"), this.add(this.buttonBack), Phaser.Display.Align.In.LeftCenter(this.buttonBack, this.title, 50)
						}, n.createTitle = function() {
							this.title = this.scene.make.image({
								key: _m,
								frame: Bm.TEXT_LEADER_BOARD
							}), this.title.setWorldSize(234, 25), this.add(this.title), Phaser.Display.Align.In.Center(this.title, this)
						}, t
					}(Phaser.GameObjects.Container),
					Nm = Dm,
					Mm = {
						targets: [],
						repeat: -1,
						yoyo: !0,
						duration: 33,
						ease: Phaser.Math.Easing.Sine.InOut,
						props: {
							x: 5
						}
					},
					Lm = function(e) {
						function t(t) {
							var n, i, a;
							return (a = e.call(this, Mm, t) || this).posX = void 0, a.handleSwitchPosition = function() {
								var e;
								a.posX = -a.posX, null == (e = a.tween) || e.updateTo("x", -a.posX)
							}, null != (n = a.config) && n.props ? (a.posX = a.config.props.x, null == (i = a.tween) || i.on(Phaser.Tweens.Events.TWEEN_REPEAT, a.handleSwitchPosition), a) : (0, Ba.Z)(a)
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					Fm = n(148),
					Gm = n.n(Fm);

				function Zm(e, t) {
					var n = "undefined" !== typeof Ya() && za()(e) || e["@@iterator"];
					if (n) return (n = n.call(e)).next.bind(n);
					if (Array.isArray(e) || (n = function(e, t) {
							var n;
							if (!e) return;
							if ("string" === typeof e) return Um(e, t);
							var i = Fe()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
							"Object" === i && e.constructor && (i = e.constructor.name);
							if ("Map" === i || "Set" === i) return Ha()(e);
							if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Um(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var i = 0;
						return function() {
							return i >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[i++]
							}
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}

				function Um(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
					return i
				}
				var Hm = function(e) {
						function t(t, n) {
							var i, a;
							(a = e.call(this, t) || this).config = void 0, a.isEnable = void 0, a.maxHeight = void 0, a.isScrolling = void 0, a.boundTop = void 0, a.boundBottom = void 0, a.maskGraphics = void 0, a.objects = void 0, a._value = 0, a.velocity = 0, a.isScrollingSmooth = void 0, a.lastScrollY = void 0, a.isScrollingBack = void 0, a.scrollingBackTo = void 0, a.lastScrollYCount = 0, a.hitArea = void 0, a.onScrollEvents = [], a.update = function(e, t) {
								a.isScrollingSmooth && a.velocity && a.scrollingSmooth(t), a.isScrollingBack && a.scrollingBack(t)
							}, a.checkReachBound = function() {
								return a.isReachTop() || a.isReachBottom()
							}, a.onMouseScroll = (0, Yi.D)((function(e, t, n) {
								if (a.isEnable) {
									var i;
									if (a.isScrolling = !0, a.checkReachBound()) return a.lastScrollY = me()(i = a.lastScrollY).call(i, (function() {
										return 0
									})), void(a.isScrolling = !1);
									a.stopScrollingBack(), a.startScrollSmooth(-n * a.scrollSmooth / 15)
								}
							}), 100, {
								isImmediate: !0,
								maxWait: 100
							}), a.onTouchScroll = function(e) {
								if (a.isEnable) {
									a.velocity && a.stopScrollSmooth(), a.stopScrollingBack(), a.isScrolling = !0;
									var t = a.scene.game.world.getZoomRatio(),
										n = e.position,
										i = e.prevPosition,
										r = (n.y - i.y) / t,
										s = a.height * a.maxScrollOver,
										o = 1;
									if (a.lastScrollY[++a.lastScrollYCount % a.lastScrollY.length] = r, a.isReachTop() && r >= 0) {
										var c = (s - (a.value - a.marginTop)) / s;
										o = Math.min(o, c)
									}
									if (a.isReachBottom() && r <= 0) {
										var u = (s - (-a.maxHeight - a.value)) / s;
										o = Math.min(o, u)
									}
									var l = r * o,
										h = a.maxScrollOver * a.height;
									a.value + l > a.marginTop + h ? a.value = a.marginTop + h : a.value + l < -a.maxHeight - h ? a.value = -a.maxHeight - h : a.value += l, a.callOnScrollEvents(a.value, l)
								}
							}, a.onTouchDown = function() {
								a.isEnable && (a.velocity && a.stopScrollSmooth(), a.stopScrollingBack())
							}, a.onTouchEnd = function() {
								var e, t;
								if (a.isReachTop() && (a.startScrollingBack(a.marginTop), a.stopScrollSmooth()), a.isReachBottom() && (a.startScrollingBack(-a.maxHeight), a.stopScrollSmooth()), a.isScrolling) {
									var n = Gm()(e = a.lastScrollY).call(e, (function(e, t) {
										return e + t
									})) / a.lastScrollY.length;
									a.startScrollSmooth(n * a.scrollSmooth), a.lastScrollY = me()(t = a.lastScrollY).call(t, (function() {
										return 0
									}))
								}
							}, a.config = (0, r.Z)({
								marginTop: 0,
								marginBottom: 0,
								acceleration: 1400,
								maxScrollOver: .15,
								scrollSmooth: 40,
								scrollingBackRate: 5
							}, n);
							var s = n.width,
								o = n.height;
							return a.isEnable = !1, a.maxHeight = 0, a.lastScrollY = Za()(i = new Array(3)).call(i, 0), a.setSize(s, o), a.createGroup(), a.createInput(), a.createEvents(), a.scene.add.existing((0, Ba.Z)(a)), a
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.onScroll = function(e) {
							this.onScrollEvents.push(e)
						}, n.gotoTop = function() {
							this.value = this.config.marginTop
						}, n.reset = function() {
							this.maxHeight = 0, this.isScrolling = !1, this.isScrollingBack = !1, this.isScrollingSmooth = !1, this.gotoTop(), this.setEnable(!1)
						}, n.createDebug = function() {
							var e = this.drawDebugBox(16711680, .8);
							console.log(null == e ? void 0 : e.x, null == e ? void 0 : e.y, null == e ? void 0 : e.displayWidth, null == e ? void 0 : e.displayHeight)
						}, n.setEnable = function(e) {
							this.isEnable = e, e ? this.setInteractive({
								draggable: !0,
								useHandCursor: !0
							}) : this.disableInteractive()
						}, n.addItem = function(e) {
							this.addAt(e), this.objects.add(e);
							var t = e.y + e.height + this.marginBottom - this.height / 2;
							this.maxHeight = Math.max(this.maxHeight, t, 0), this.updateObjectVisible()
						}, n.addItems = function(e) {
							var t = this;
							this.addAt(e), this.objects.addMultiple(e);
							var n = me()(e).call(e, (function(e) {
								return e.y + e.height + t.marginBottom - t.height / 2
							}));
							this.maxHeight = Math.max(this.maxHeight, Math.max.apply(Math, n), 0), this.updateObjectVisible()
						}, n.clearItem = function() {
							this.objects.clear(!0, !0), this.reset()
						}, n.getChildren = function() {
							var e;
							return pe()(e = this.objects.getChildren()).call(e, (function(e) {
								return e.active
							}))
						}, n.createBound = function(e, t, n, i) {
							this.boundTop = this.scene.make.image({
								key: e,
								frame: t
							}), this.boundBottom = this.scene.make.image({
								key: e,
								frame: t
							}), i && (this.boundTop.setTint(i), this.boundBottom.setTint(i)), this.boundTop.setAlpha(0, 0, 0, 0), this.boundBottom.setAlpha(0, 0, 0, 0), this.boundTop.setDepth(ka.Z.PRIORITY), this.boundBottom.setDepth(ka.Z.PRIORITY);
							var a = this.width,
								r = n,
								s = this.getWorldPosition(),
								o = s.x,
								c = s.y;
							this.boundTop.setDisplaySize(a, r), this.boundBottom.setDisplaySize(a, r), this.boundTop.setY(-this.displayHeight / 2 + r / 2 + c - this.y - 1), this.boundBottom.setY(this.displayHeight / 2 - r / 2 + c - this.y + 1), this.boundTop.setX(o - this.x), this.boundBottom.setX(o - this.x), this.add([this.boundTop, this.boundBottom])
						}, n.createMask = function() {
							var e;
							null == (e = this.maskGraphics) || e.destroy(), this.maskGraphics = this.scene.make.graphics({
								fillStyle: {
									color: 255,
									alpha: 1
								},
								visible: !0
							}), this.maskGraphics.setName("MaskGraphics");
							var t = this.width,
								n = this.height;
							this.maskGraphics.fillRoundedRect(0 - t / 2, 0 - n / 2, t, n, 0), this.setMask(this.maskGraphics.createGeometryMask()), this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.updateMask, this), this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.updateMask, this)
						}, n.updateMask = function() {
							var e = this.getWorldPosition(),
								t = e.x,
								n = e.y;
							this.maskGraphics.setPosition(t, n)
						}, n.createGroup = function() {
							this.objects = this.scene.make.group({})
						}, n.updateObject = function(e) {
							this.objects.incY(e), this.updateObjectVisible()
						}, n.updateObjectVisible = function() {
							for (var e = this.objects.getChildren(), t = 0; t < e.length; t++) {
								var n = e[t];
								n.y + n.height < -this.height / 2 || n.y - n.height > this.height / 2 ? n.setVisible(!1) : n.setVisible(!0)
							}
						}, n.createInput = function() {
							this.setInteractive({
								draggable: !0,
								useHandCursor: !0
							}), this.on(Phaser.Input.Events.POINTER_WHEEL, this.onMouseScroll), this.on(Phaser.Input.Events.GAMEOBJECT_DRAG, this.onTouchScroll), this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.onTouchDown), this.scene.input.on(Phaser.Input.Events.POINTER_UP, this.onTouchEnd, this)
						}, n.createEvents = function() {
							this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update)
						}, n.callOnScrollEvents = function(e, t) {
							for (var n, i = Zm(this.onScrollEvents); !(n = i()).done;) {
								(0, n.value)(this, e, t)
							}
						}, n.scrollingBack = function(e) {
							var t = (this.scrollingBackTo - this.value) * e * this.scrollingBackRate / 1e3;
							this.value += t, Math.abs(this.scrollingBackTo - this.value) < .5 && (this.value = this.scrollingBackTo, this.stopScrollingBack()), this.callOnScrollEvents(this.value, t)
						}, n.startScrollingBack = function(e) {
							this.isScrollingBack = !0, this.scrollingBackTo = e
						}, n.stopScrollingBack = function() {
							this.isScrollingBack = !1
						}, n.scrollingSmooth = function(e) {
							var t = this.velocity * e / 1e3;
							this.value += t;
							var n = Math.abs(this.velocity) / this.velocity;
							this.velocity -= n * this.acceleration * e / 1e3, Math.abs(this.velocity) < this.acceleration * e / 1e3 && this.stopScrollSmooth(), this.isReachTop() && (this.startScrollingBack(this.marginTop), this.stopScrollSmooth()), this.isReachBottom() && (this.startScrollingBack(-this.maxHeight), this.stopScrollSmooth()), this.callOnScrollEvents(this.value, t)
						}, n.startScrollSmooth = function(e) {
							this.isScrollingSmooth = !0, e && (e * this.velocity > 0 ? this.velocity += e : this.velocity = e)
						}, n.stopScrollSmooth = function() {
							this.isScrollingSmooth = !1, this.isScrolling = !1, this.velocity = 0
						}, n.isReachTop = function() {
							return this.value > this.marginTop
						}, n.isReachBottom = function() {
							return -this.value > this.maxHeight
						}, (0, Z.Z)(t, [{
							key: "marginTop",
							get: function() {
								return this.config.marginTop
							}
						}, {
							key: "marginBottom",
							get: function() {
								return this.config.marginBottom
							}
						}, {
							key: "acceleration",
							get: function() {
								return this.config.acceleration
							}
						}, {
							key: "maxScrollOver",
							get: function() {
								return this.config.maxScrollOver
							}
						}, {
							key: "scrollSmooth",
							get: function() {
								return this.config.scrollSmooth
							}
						}, {
							key: "scrollingBackRate",
							get: function() {
								return this.config.scrollingBackRate
							}
						}, {
							key: "value",
							get: function() {
								return this._value
							},
							set: function(e) {
								var t = e - this._value;
								this._value = e, this.updateObject(t)
							}
						}]), t
					}(Phaser.GameObjects.Container),
					Vm = Hm,
					Ym = (function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, "UpdateAbleObject") || this).updateInfo = void 0, n
						}(0, o.Z)(t, e)
					}(Phaser.GameObjects.GameObject), function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).classType = void 0, i.listConfigs = void 0, i.padding = void 0, i.startObjectIndex = void 0, i.endObjectIndex = void 0, i.listObjects = void 0, i.classType = n.classType, i.listConfigs = n.listConfigs, i.padding = n.padding ? n.padding : 0, i.objects.classType = i.classType, i.updateConfig(i.listConfigs), i
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.reset = function() {
							e.prototype.reset.call(this), this.killAndHideAll()
						}, n.getChildren = function() {
							var e;
							return pe()(e = this.listObjects).call(e, (function(e) {
								return void 0 != e && e.active
							}))
						}, n.updateConfig = function(e) {
							var t;
							this.reset(), this.listConfigs = e, this.listObjects = Za()(t = new Array(e.length)).call(t, void 0), this.addObjectIndex(0, 0);
							var n = this.getEndObjectIndex();
							this.addObjectIndex(1, n), this.startObjectIndex = this.getStartObjectIndex(), this.endObjectIndex = this.getEndObjectIndex(), this.updateMaxHeight(), this.value = this.marginTop
						}, n.killAndHideAll = function() {
							var e, t = this;
							this.listObjects instanceof Array && me()(e = this.listObjects).call(e, (function(e) {
								void 0 !== e && t.objects.killAndHide(e)
							}))
						}, n.setItemPosition = function(e, t) {
							var n = e.height;
							e.setPosition(0, n / 2 + (n + this.padding) * t - this.height / 2)
						}, n.updateMaxHeight = function() {
							return this.maxHeight = Math.max(this.listConfigs.length * (this.objHeight + this.padding) - this.padding + this.marginBottom - this.height, 0)
						}, n.updateObject = function(e) {
							this.objects.incY(e);
							var t = this.getStartObjectIndex(),
								n = this.getEndObjectIndex();
							t != this.startObjectIndex && (t > this.startObjectIndex ? this.killObjectIndex(this.startObjectIndex, t - 1) : this.addObjectIndex(t, this.startObjectIndex - 1), this.startObjectIndex = t), n != this.endObjectIndex && (n < this.endObjectIndex ? this.killObjectIndex(n + 1, this.endObjectIndex) : this.addObjectIndex(this.endObjectIndex + 1, n), this.endObjectIndex = n)
						}, n.killObjectIndex = function(e, t) {
							for (var n = e; n <= t; n++) {
								var i = this.listObjects[n];
								i && (this.objects.killAndHide(i), this.listObjects[n] = void 0)
							}
						}, n.addObjectIndex = function(e, t) {
							for (var n = e; n <= t; n++) {
								var i = this.padding,
									a = this.listConfigs;
								if (n >= a.length) return;
								var r = this.objects.getFirstDead(!0),
									s = r.height,
									o = s / 2 + (s + i) * n + this.value - this.height / 2;
								r.updateInfo(a[n]), r.setPosition(0, o), r.setActive(!0), r.setVisible(!0), this.addAt(r), this.listObjects[n] = r
							}
						}, n.getStartObjectIndex = function() {
							var e = this.objHeight,
								t = this.padding;
							return Math.max(Math.floor((0 - this.value) / (e + t)), 0)
						}, n.getEndObjectIndex = function() {
							var e = this.objHeight,
								t = this.padding,
								n = this.listConfigs,
								i = e + t;
							return Math.min(Math.floor((this.height - this.value) / i), n.length)
						}, (0, Z.Z)(t, [{
							key: "objHeight",
							get: function() {
								var e = this.objects.getChildren();
								return 0 == e.length ? this.maxHeight = 0 : e[0].height
							}
						}]), t
					}(Vm)),
					Wm = {
						targets: [],
						props: {
							alpha: {
								duration: 500,
								value: {
									start: 0,
									from: 0,
									to: 1
								},
								ease: Phaser.Math.Easing.Cubic.Out
							},
							scale: {
								duration: 1e3,
								value: {
									start: .8,
									from: .8,
									to: 1
								},
								ease: Phaser.Math.Easing.Elastic.Out,
								easeParams: [.1, .45]
							}
						}
					},
					zm = function(e) {
						function t(t) {
							return e.call(this, Wm, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					Km = {
						targets: [],
						props: {
							alpha: {
								start: 0,
								to: 1,
								duration: 500,
								ease: Phaser.Math.Easing.Cubic.Out
							},
							scale: {
								start: .8,
								to: 1,
								duration: 1e3,
								ease: Phaser.Math.Easing.Elastic.Out,
								easeParams: [.1, .45]
							},
							y: {
								start: 0,
								to: 0,
								duration: 500,
								ease: Phaser.Math.Easing.Back.Out
							}
						},
						delay: 0
					},
					jm = function(e) {
						function t(t) {
							return e.call(this, Km, t) || this
						}
						return (0, o.Z)(t, e), t
					}(tc.Z),
					Xm = Oa.Z.DEFAULT,
					qm = Xm.KEY,
					Qm = Xm.FRAME,
					Jm = function(e) {
						function t(t, n) {
							var a;
							return (a = e.call(this, t) || this).buttonPlay = void 0, a.buttonShare = void 0, a.avatar = void 0, a.rankIcon = void 0, a.rankText = void 0, a.username = void 0, a.score = void 0, a.scoreText = void 0, a.background = void 0, a.showPopUp = void 0, a.showItems = void 0, a.payload = void 0, a.handleChallengeFriend = function() {
								var e = a.payload.playerId;
								a.scene.storage.dispatch(Yo(e))
							}, a.handleShare = function() {
								a.scene.storage.dispatch(function() {
									var e = (0, s.Z)(u().mark((function e(t) {
										var n, a, r, s, o, c, l, h, d, p;
										return u().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													return n = window.game, a = n.player, r = n.analytics, s = n.facebook, o = n.globalScene, e.prev = 1, o.screen.open(Ra.o4.NOTIFY_SCREEN, {
														message: "Loading...",
														loading: !0
													}), e.next = 5, Ms();
												case 5:
													return c = e.sent, Cs(c), l = a.getPlayer(), h = l.playerId, d = l.name, p = l.photo, e.next = 10, s.shareAsync({
														text: "Great! I have a score!",
														intent: "SHARE",
														image: c || "",
														data: {
															playerId: h,
															playerName: d,
															playerPhoto: p,
															type: Xi
														}
													});
												case 10:
													r.event(Vt._.SHARE, {
														share_content_type: "Score",
														success: !0
													}), e.next = 17;
													break;
												case 13:
													e.prev = 13, e.t0 = e.catch(1), r.event(Vt._.SHARE, {
														share_content_type: "Score",
														success: !1
													}), (0, i.tO)(e.t0);
												case 17:
													return e.prev = 17, o.screen.close(Ra.o4.NOTIFY_SCREEN), e.finish(17);
												case 20:
												case "end":
													return e.stop()
											}
										}), e, null, [
											[1, 13, 17, 20]
										])
									})));
									return function(t) {
										return e.apply(this, arguments)
									}
								}())
							}, a.createBackground(), a.updateSize(), a.createAvatar(), a.createRank(), a.createUsername(), a.createScore(), a.createButtonShare(), a.createButtonPlay(), n && a.updateInfo(n), a.scene.add.existing((0, Ba.Z)(a)), a
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.updateInfo = function(e) {
							this.payload = (0, r.Z)({
								scoreRight: !0,
								isHighlight: !1,
								useChallenge: !1
							}, e), this.updateBackground(), this.updateAvatar(), this.updateRank(), this.updateUsername(), this.updateScore(), this.updateButton()
						}, n.createBackground = function() {
							this.background = this.scene.make.image({
								key: qm,
								frame: Qm.LEADERBOARD_BG_LIGHT
							}), this.background.setWorldSize(350, 61), this.add(this.background)
						}, n.updateBackground = function() {
							var e = "";
							e = this.payload.isHighlight ? Qm.LEADERBOARD_BG_DARK : Qm.LEADERBOARD_BG_LIGHT, this.background.setFrame(e), this.background.setWorldSize(350, 61)
						}, n.updateSize = function() {
							var e = this.background,
								t = e.width,
								n = e.height;
							this.setSize(t, n)
						}, n.createAvatar = function() {
							this.avatar = new oc(this.scene, {
								key: qm,
								frame: Qm.AVATAR_BORDER,
								background: Qm.AVATAR_BACKGROUND,
								width: 40,
								height: 40,
								radius: 30,
								borderWidth: 6.5
							}), this.add(this.avatar), Phaser.Display.Align.In.LeftCenter(this.avatar, this, -45, -3)
						}, n.updateAvatar = function() {
							var e = this.payload,
								t = e.playerId,
								n = e.photo;
							this.avatar.loadPhoto(t, n)
						}, n.createRank = function() {
							this.createRankIcon(1), this.createRankText(1)
						}, n.updateRank = function() {
							var e = this.payload.rank;
							this.updateRankIcon(e), this.updateRankText(e)
						}, n.getRankIconFrame = function(e) {
							var t = Qm.ICON_CUP_GOLD;
							switch (e) {
								case 1:
									t = Qm.ICON_CUP_GOLD;
									break;
								case 2:
									t = Qm.ICON_CUP_SILVER;
									break;
								case 3:
									t = Qm.ICON_CUP_COPPER
							}
							return t
						}, n.createRankIcon = function(e) {
							var t = this.getRankIconFrame(e);
							this.rankIcon = this.scene.make.image({
								key: qm,
								frame: t
							}), this.rankIcon.setWorldSize(16, 25), this.add(this.rankIcon), Phaser.Display.Align.In.LeftCenter(this.rankIcon, this.background, -18, -3)
						}, n.updateRankIcon = function(e) {
							if (e > 3) this.rankIcon.setVisible(!1);
							else {
								this.rankIcon.setVisible(!0);
								var t = this.getRankIconFrame(e);
								switch (e) {
									case 1:
										this.rankIcon.setWorldSize(14, 33);
										break;
									case 2:
									case 3:
										this.rankIcon.setWorldSize(16, 30)
								}
								this.rankIcon.setFrame(t)
							}
						}, n.createRankText = function(e) {
							this.rankText = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(52),
								text: "" + e,
								origin: {
									x: .5,
									y: .5
								}
							}), this.add(this.rankText), Phaser.Display.Align.In.Center(this.rankText, this.rankIcon, 0, 3)
						}, n.updateRankText = function(e) {
							e <= 3 ? this.rankText.setVisible(!1) : (this.rankText.setVisible(!0), this.rankText.setText("" + e), this.payload.isHighlight ? this.rankText.setFont(Bc.Z.PRIMARY_LIGHT.KEY) : this.rankText.setFont(Bc.Z.PRIMARY.KEY))
						}, n.getShortName = function(e) {
							var t = e.substring(0, 7);
							return t.split(" ")[0] || t
						}, n.createUsername = function() {
							this.username = this.scene.make.text({
								text: this.getShortName("FRIEND NAME"),
								style: {
									fontFamily: Bc.Z.FONT_FAMILY,
									fontSize: this.scene.fontSize(44) + "px",
									fontStyle: "bold"
								}
							}), this.username.setTint(7485207), this.username.setHighQuality(), Phaser.Display.Align.In.Center(this.username, this.avatar, 70), this.add(this.username)
						}, n.updateUsername = function() {
							var e = this.payload,
								t = e.name,
								n = e.isHighlight;
							this.username.setText(this.getShortName(t)), n ? this.username.setTint(15643244) : this.username.setTint(7485207)
						}, n.createScore = function() {
							this.score = this.scene.add.container(), this.scoreText = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(46),
								text: "132500",
								origin: {
									x: .5,
									y: .5
								}
							}), this.score.add([this.scoreText]), this.add(this.score), Phaser.Display.Align.In.Center(this.score, this.avatar, 160, 3)
						}, n.updateScore = function() {
							var e = this.payload,
								t = e.score,
								n = e.isHighlight;
							this.scoreText.setText(t), n ? this.scoreText.setFont(Bc.Z.PRIMARY_LIGHT.KEY) : this.scoreText.setFont(Bc.Z.PRIMARY.KEY)
						}, n.createButtonPlay = function() {
							this.buttonPlay = new _c(this.scene, qm, Qm.BUTTON_CHALLENGE_LIGHT, 54, 36), this.buttonPlay.setName("ChallengeFriend"), Phaser.Display.Align.In.RightCenter(this.buttonPlay, this, -16, -2), this.buttonPlay.onClick = this.handleChallengeFriend, this.add(this.buttonPlay)
						}, n.createButtonShare = function() {
							this.buttonShare = new _c(this.scene, qm, Qm.BUTTON_SHARE_DARK, 54, 36), this.buttonShare.setName("Share"), Phaser.Display.Align.In.RightCenter(this.buttonShare, this, -16, -2), this.buttonShare.onClick = this.handleShare, this.add(this.buttonShare)
						}, n.updateButton = function() {
							this.payload.isHighlight ? (this.buttonShare.setVisible(!0), this.buttonPlay.setVisible(!1)) : (this.buttonShare.setVisible(!1), this.buttonPlay.setVisible(!0))
						}, n.runShowPopUpAnimation = function(e, t) {
							this.scene.tweens.killTweensOf(this), this.showPopUp = new jm({
								targets: [this],
								delay: e,
								duration: t,
								props: {
									y: {
										start: this.y + 70,
										to: this.y
									}
								}
							}), this.showPopUp.play()
						}, n.runShowItemAnimation = function(e, t) {
							var n = this.getAll();
							this.scene.tweens.killTweensOf(n), this.showItems = new zm({
								targets: n,
								duration: t,
								delay: this.scene.tweens.stagger(50, {
									start: e + 50
								}),
								props: {
									scale: {
										duration: 1e3,
										getStart: function(e) {
											return .8 * e.scale
										},
										getEnd: function(e) {
											return e.scale
										},
										ease: Phaser.Math.Easing.Elastic.Out,
										easeParams: [.1, .45]
									}
								}
							}), this.showItems.play()
						}, n.runShowUpAnimation = function(e, t) {
							void 0 === e && (e = 0), void 0 === t && (t = 300);
							var n = 100 * e;
							this.runShowPopUpAnimation(n, t), this.runShowItemAnimation(n, t)
						}, t
					}(Phaser.GameObjects.Container),
					$m = Jm;

				function eg(e, t) {
					var n = "undefined" !== typeof Ya() && za()(e) || e["@@iterator"];
					if (n) return (n = n.call(e)).next.bind(n);
					if (Array.isArray(e) || (n = function(e, t) {
							var n;
							if (!e) return;
							if ("string" === typeof e) return tg(e, t);
							var i = Fe()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
							"Object" === i && e.constructor && (i = e.constructor.name);
							if ("Map" === i || "Set" === i) return Ha()(e);
							if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return tg(e, t)
						}(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var i = 0;
						return function() {
							return i >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[i++]
							}
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}

				function tg(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
					return i
				}
				var ng = function(e) {
						function t(t) {
							var n;
							(n = e.call(this, t) || this).scene = void 0, n.currentPlayerId = void 0, n.scroller = void 0, n.scene = t;
							var i = n.scene.player;
							return n.currentPlayerId = i.getPlayerId(), n.createReuseScroller(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.createReuseScroller = function() {
							var e = this.scene.ads.getBannerHeight();
							this.scroller = new Ym(this.scene, {
								classType: $m,
								listConfigs: [],
								width: 350,
								height: 430 - e,
								padding: 7,
								marginTop: 10,
								marginBottom: 10
							}), this.scene.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer && this.scroller.createBound(Oa.Z.DEFAULT.KEY, Oa.Z.DEFAULT.FRAME.BLANK, 40, 16643027), this.scroller.createMask(), this.scroller.setPosition(0, -e / 2), this.add(this.scroller)
						}, n.updateData = function(e) {
							var t = ci()(e) || [];
							if (t.length < 1) return this.scene.isSwitchable = !0, void this.scene.board.showMessage(!0, "Leaderboard is empty!");
							for (var n, i = [], a = eg(li()(t).call(t, (function(e, t) {
									return +t.score - +e.score
								}))); !(n = a()).done;) {
								var r = n.value,
									s = r.playerId,
									o = r.photo,
									c = r.score,
									u = r.name,
									l = r.rank;
								if (s) {
									var h = this.currentPlayerId === s,
										d = {
											playerId: s,
											photo: o,
											name: u,
											rank: l,
											score: c,
											scoreRight: this.scene.tabId === Ka,
											useChallenge: !h && this.scene.tabId === ja,
											isHighlight: h
										};
									i.push(d)
								}
							}
							this.scroller.updateConfig(i), this.showLeaders()
						}, n.removeLeaders = function() {
							this.scroller.updateConfig([])
						}, n.getLeaders = function() {
							return this.scroller.getChildren()
						}, n.showLeaders = function() {
							var e = this,
								t = this.getLeaders();
							if (t.length < 1) return this.scene.isSwitchable = !0, void this.scene.board.showMessage(!0, "Leaderboard is empty!");
							for (var n = Math.min(t.length, 6), i = 0; i < n; i++) {
								var a = t[i];
								a && (a.setVisible(!0), a.runShowUpAnimation(i, 300))
							}
							var r = 300 + 100 * n + 250;
							this.scene.time.delayedCall(r, (function() {
								e.scene.isSwitchable = !0, e.scroller.setEnable(!0)
							}))
						}, t
					}(Phaser.GameObjects.Container),
					ig = ng,
					ag = Oa.Z.DEFAULT,
					rg = ag.KEY,
					sg = ag.FRAME,
					og = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.tabWorld = void 0, n.tabFriends = void 0, n.scene = t, n.createTabFriends(), n.createTabWorld(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.selectTabFriends = function() {
							this.tabFriends.button.setFrame(sg.LEADERBOARD_TAB_ON), this.tabWorld.button.setFrame(sg.LEADERBOARD_TAB_OFF)
						}, n.selectTabWorld = function() {
							this.tabFriends.button.setFrame(sg.LEADERBOARD_TAB_OFF), this.tabWorld.button.setFrame(sg.LEADERBOARD_TAB_ON)
						}, n.createTabFriends = function() {
							this.tabFriends = new _c(this.scene, rg, sg.LEADERBOARD_TAB_OFF), this.tabFriends.button.setWorldSize(125, 42);
							var e = this.scene.make.image({
								key: rg,
								frame: sg.TEXT_FRIENDS
							});
							this.tabFriends.setName("FriendsTab"), e.setWorldSize(65, 13), this.tabFriends.add(e), Phaser.Display.Align.In.Center(e, this.tabFriends), Phaser.Display.Align.In.Center(this.tabFriends, this, -85), this.add(this.tabFriends)
						}, n.createTabWorld = function() {
							this.tabWorld = new _c(this.scene, rg, sg.LEADERBOARD_TAB_OFF), this.tabWorld.button.setWorldSize(125, 42), this.tabWorld.button.flipX = !0;
							var e = this.scene.make.image({
								key: rg,
								frame: sg.TEXT_WORLD
							});
							this.tabWorld.setName("WorldTab"), e.setWorldSize(50, 13), this.tabWorld.add(e), Phaser.Display.Align.In.Center(e, this.tabWorld), Phaser.Display.Align.In.Center(this.tabWorld, this, 85), this.add(this.tabWorld)
						}, t
					}(Phaser.GameObjects.Container),
					cg = og,
					ug = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t) || this).scene = void 0, n.tabs = void 0, n.leaders = void 0, n.loading = void 0, n.message = void 0, n.messageAnimation = void 0, n.scene = t, n.setSize(310, 430), n.createLoading(), n.createMessage(), n.createContents(), n.createAnimation(), n.scene.add.existing((0, Ba.Z)(n)), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.showLoading = function(e) {
							this.loading.setVisible(e), this.showMessage(!1)
						}, n.showMessage = function(e, t) {
							this.message.setVisible(e), t && (this.message.setText(t), this.messageAnimation.play())
						}, n.createLoading = function() {
							this.loading = new rc.Z(this.scene), this.loading.setTint(12237498), this.loading.setWorldSize(113, 113), this.add(this.loading)
						}, n.createMessage = function() {
							this.message = this.scene.make.bitmapText({
								font: Bc.Z.PRIMARY.KEY,
								size: this.scene.fontSize(40),
								origin: {
									x: .5,
									y: .5
								}
							}), this.message.setTint(10317116), this.add(this.message), Phaser.Display.Align.In.Center(this.message, this)
						}, n.createContents = function() {
							this.createTabs(), this.createLeaders()
						}, n.createLeaders = function() {
							this.leaders = new ig(this.scene), this.add(this.leaders), Phaser.Display.Align.In.Center(this.leaders, this.tabs, 0, 240)
						}, n.createTabs = function() {
							this.tabs = new cg(this.scene), this.add(this.tabs), Phaser.Display.Align.In.TopCenter(this.tabs, this, 0, -15)
						}, n.createAnimation = function() {
							this.messageAnimation = new Lm({
								targets: [this.message],
								duration: 60,
								repeat: 2
							})
						}, t
					}(Phaser.GameObjects.Container),
					lg = ug,
					hg = GameCore.Configs.LeadersBoard,
					dg = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).board = void 0, n.footerBar = void 0, n.header = void 0, n.tabId = void 0, n.offset = void 0, n.isRequesting = void 0, n.isSwitchable = void 0, n.run = function() {
								n.isRequesting = !1;
								var e = [{
									selector: Ir,
									callback: function(e) {
										if (n.isRequesting = e, n.board.showLoading(e), !1 === e) {
											var t = n.game.storage.getState(),
												i = Pr(t);
											n.board.leaders.updateData(i)
										}
									}
								}];
								n.handleStateChange(e), n.selectWorldTab(), n.analytics.pageview(n.scene.key)
							}, n.handleSelectFriendTab = function() {
								n.isRequesting || n.isSwitchable && (n.isSwitchable = !1, n.selectFriendTab())
							}, n.handleSelectWorldTab = function() {
								n.isRequesting || n.isSwitchable && (n.isSwitchable = !1, n.selectWorldTab())
							}, n.handlePlayWithFriend = function() {
								n.storage.dispatch(Wo())
							}, n.handleHomeClick = function() {
								window.game.globalScene.events.emit(da.K.SWITCH, da.C.GAME_SCENE)
							}, n.handleShareLeaderboard = function() {
								n.storage.dispatch(Os())
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.preload = function() {
							this.events.on("wake", this.run), this.events.on("create", this.run)
						}, n.create = function() {
							e.prototype.create.call(this), this.gameZone.setPosition(0, 0), this.createBackground($i.Z.BACKGROUND.KEY, "0"), this.scene.bringToTop(), this.createHeader(), this.createBoard(), this.createFooterBar()
						}, n.createHeader = function() {
							this.header = new Nm(this), this.header.buttonBack.onClick = this.handleHomeClick, Phaser.Display.Align.In.TopCenter(this.header, this.gameZone, 0, -50)
						}, n.selectFriendTab = function() {
							this.tabId = ja, this.offset = 0, this.board.showLoading(!0), this.board.leaders.removeLeaders(), this.board.tabs.selectTabFriends(), this.storage.dispatch(Tr()), this.storage.dispatch(Ar(hg.LeaderboardId, ja, hg.Limit, this.offset))
						}, n.selectWorldTab = function() {
							this.tabId = Ka, this.offset = 0, this.board.showLoading(!0), this.board.leaders.removeLeaders(), this.board.tabs.selectTabWorld(), this.storage.dispatch(Tr()), this.storage.dispatch(Ar(hg.LeaderboardId, Ka, hg.Limit, this.offset))
						}, n.loadMoreTabFriend = function() {
							this.isRequesting || (this.offset += hg.Limit, this.storage.dispatch(Ar(hg.LeaderboardId, ja, hg.Limit, this.offset)))
						}, n.loadMoreTabWorld = function() {
							this.isRequesting || (this.offset += hg.Limit, this.storage.dispatch(Ar(hg.LeaderboardId, Ka, hg.Limit, this.offset)))
						}, n.createBoard = function() {
							this.board = new lg(this), Phaser.Display.Align.In.Center(this.board, this.gameZone, 0, -20), this.board.tabs.tabWorld.onClick = this.handleSelectWorldTab, this.board.tabs.tabFriends.onClick = this.handleSelectFriendTab
						}, n.createFooterBar = function() {
							var e = this.ads.getBannerHeight();
							this.footerBar = new Om(this), Phaser.Display.Align.In.Center(this.footerBar, this.gameZone, 0, this.gameZone.height / 2 - 55 - e), this.footerBar.playButton.onClick = this.handlePlayWithFriend, this.footerBar.shareButton.onClick = this.handleShareLeaderboard
						}, t
					}(ec.Z);
				var pg = dg,
					fg = GameCore.Configs.Notification.ApiUrl,
					mg = function() {
						var e = (0, s.Z)(u().mark((function e(t) {
							var n, i;
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = t.playerId, e.next = 3, St("players/" + n, t, {}, fg, 10);
									case 3:
										return i = e.sent, e.abrupt("return", (null == i ? void 0 : i.data) || {});
									case 5:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					gg = function(e) {
						function t(t, n) {
							var i;
							return (i = e.call(this, t, n) || this).name = "LoadResourceFail", i.message = t || "Load resource fail", i.payload = n, i
						}
						return (0, o.Z)(t, e), t
					}((0, k.Z)(Error)),
					vg = [{
						id: "pass-levels",
						title: "Pass 10 Levels",
						require: {
							level: 10
						},
						reward: {
							diamond: 100
						}
					}, {
						id: "collect-diamonds",
						title: "Collect 300 diamonds",
						require: {
							diamond: 300
						},
						reward: {
							diamond: 100
						}
					}, {
						id: "invite-friends",
						title: "Invite 2 friends",
						require: {
							friend: 2
						},
						reward: {
							diamond: 200
						}
					}, {
						id: "reach-score",
						title: "Reach Total Scores",
						require: {
							score: 1e5
						},
						reward: {
							diamond: 200
						}
					}],
					yg = function() {
						var e = (0, s.Z)(u().mark((function e() {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.abrupt("return", vg);
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					Sg = (0, Y.P1)([function(e) {
						var t;
						return null == (t = e[wi]) ? void 0 : t.tasks
					}], (function(e) {
						return e
					})),
					bg = (0, Y.P1)([function(e) {
						var t;
						return null == (t = e[wi]) ? void 0 : t.process
					}], (function(e) {
						return e
					})),
					Eg = (0, Y.P1)([function(e) {
						var t;
						return null == (t = e[wi]) ? void 0 : t.isRequesting
					}], (function(e) {
						return e
					})),
					Ag = ((0, Y.P1)([function(e) {
						var t;
						return null == (t = e[wi]) ? void 0 : t.isNotice
					}], (function(e) {
						return e
					})), GameCore.Configs.DailyTasks),
					wg = function(e) {
						return function(t) {
							t({
								type: Ci,
								payload: {
									tasks: e
								}
							});
							var n = window.game.player.getCustomData("dailyTasks") || {},
								i = n.startedTime,
								a = void 0 === i ? 0 : i,
								r = n.logTasks,
								s = void 0 === r ? {} : r;
							t((Date.now() - a) / 1e3 > Ag.Duration ? Tg(e) : Cg(s))
						}
					},
					Tg = function(e) {
						return function(t) {
							var n = {};
							e.forEach((function(e) {
								var t = e.id,
									i = e.require;
								n[t] = {}, J()(i).forEach((function(e) {
									var i;
									n[t] = ((i = {})[e] = 0, i.rewarded = !1, i)
								}))
							})), window.game.player.setCustomData("dailyTasks", {
								logTasks: n,
								startedTime: Date.now()
							}), t(Cg(n)), As.emit(as.EVENTS.TASKS_RESET)
						}
					},
					Cg = function(e) {
						return {
							type: Pi,
							payload: {
								process: e
							}
						}
					},
					Pg = n(584),
					Ig = n.n(Pg),
					kg = function() {
						var e = (window.game.player.getCustomData("dailyTasks") || {}).logTasks;
						return GameCore.Utils.Json.clone(e)
					},
					xg = function() {
						function e(e, t) {
							var n = this;
							this.game = void 0, this.id = void 0, this.taskData = void 0, this.requireTypes = void 0, this.process = function(e) {
								var t, i = e.type,
									a = e.value;
								if (!(a < 1) && (-1 !== Ot()(t = n.requireTypes).call(t, i) && !n.isPassRequiredTarget(i) && n.processMore(e))) {
									i = e.type, a = e.value;
									var r = n.getCorrectValue(i, a);
									n.game.storage.dispatch(function(e, t, n) {
										return function(i) {
											var a = kg();
											if (GameCore.Utils.Valid.isObject(a)) {
												var r = a;
												GameCore.Utils.Object.hasOwn(r, e) && (r[e].rewarded || (r[e][t] += n, window.game.player.setCustomData("dailyTasks", {
													logTasks: r
												}), i({
													type: Ii,
													payload: {
														id: e,
														type: t,
														value: n
													}
												})))
											}
										}
									}(n.id, i, r)), n.isTaskFinished(i) && n.game.storage.dispatch(function(e) {
										return function(t) {
											t({
												type: ki,
												payload: {
													id: e
												}
											}), As.emit(as.EVENTS.NOTICE_UPDATE)
										}
									}(n.id))
								}
							}, this.game = e, this.id = t, this.init()
						}
						var t = e.prototype;
						return t.init = function() {
							var e = this,
								t = this.game.storage.getState(),
								n = Sg(t) || [];
							if (!((null == n ? void 0 : n.length) < 1)) {
								var i = null == n ? void 0 : Ig()(n).call(n, (function(t) {
									return t.id === e.id
								}));
								i && (this.taskData = i, this.requireTypes = J()(this.taskData.require), this.initEvents())
							}
						}, t.getDataByType = function(e) {
							var t = this.game.storage.getState(),
								n = bg(t),
								i = {
									value: 0,
									target: 0
								};
							if (!n) return i;
							if (!GameCore.Utils.Object.hasOwn(n, this.taskData.id)) return i;
							var a = n[this.taskData.id];
							if (GameCore.Utils.Valid.isObject(a) && GameCore.Utils.Object.hasOwn(a, e)) {
								var r = a[e];
								"number" === typeof r && (i.value = r)
							}
							return i.target = this.taskData.require[e] || 0, i
						}, t.getCorrectValue = function(e, t) {
							var n = this.getDataByType(e),
								i = n.value,
								a = n.target,
								r = t;
							return i + t > a && (r = a - i), Math.round(r)
						}, t.isPassRequiredTarget = function(e) {
							var t = this.getDataByType(e);
							return t.value >= t.target
						}, t.isTaskFinished = function(e) {
							var t = this.getDataByType(e);
							return t.value >= t.target
						}, e
					}(),
					Og = xg,
					Rg = as.COLLECT_DIAMONDS,
					_g = Rg.ID,
					Bg = Rg.EVENTS,
					Dg = function(e) {
						function t(t) {
							return e.call(this, t, _g) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							As.off(Bg.COLLECT_DIAMONDS, this.process), As.on(Bg.COLLECT_DIAMONDS, this.process)
						}, n.processMore = function() {
							return !0
						}, t
					}(Og),
					Ng = Dg,
					Mg = as.INVITE_FRIENDS,
					Lg = Mg.ID,
					Fg = Mg.EVENTS,
					Gg = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, Lg) || this).invitedFriends = void 0, n.resetData = function() {
								n.invitedFriends = []
							}, n.resetData(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							var e = this;
							As.off(Fg.INVITED_FRIEND, this.process), As.on(Fg.INVITED_FRIEND, this.process), As.on(as.EVENTS.TASKS_RESET, (function() {
								e.resetData()
							}))
						}, n.processMore = function(e) {
							var t, n = e.opponentId;
							return !!n && (-1 === Ot()(t = this.invitedFriends).call(t, n) && (this.invitedFriends.push(n), !0))
						}, t
					}(Og),
					Zg = Gg,
					Ug = as.PASS_LEVELS,
					Hg = Ug.ID,
					Vg = Ug.EVENTS,
					Yg = function(e) {
						function t(t) {
							return e.call(this, t, Hg) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							As.off(Vg.PASS_LEVEL, this.process), As.on(Vg.PASS_LEVEL, this.process)
						}, n.processMore = function() {
							return !0
						}, t
					}(Og),
					Wg = Yg,
					zg = as.REACH_SCORE,
					Kg = zg.ID,
					jg = zg.EVENTS,
					Xg = function(e) {
						function t(t) {
							var n;
							return (n = e.call(this, t, Kg) || this).totalScore = void 0, n.lastUpdate = void 0, n.totalScore = 0, n.lastUpdate = Date.now(), n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							As.off(jg.ADD_SCORE, this.process), As.on(jg.ADD_SCORE, this.process)
						}, n.processMore = function(e) {
							var t = e.value,
								n = Date.now();
							return n - this.lastUpdate < 3e3 ? (this.totalScore += t, !1) : (e.value += this.totalScore, this.totalScore = 0, this.lastUpdate = n, !0)
						}, t
					}(Og),
					qg = Xg,
					Qg = function() {
						function e(e) {
							var t = this;
							this.game = void 0, this.eventsListener = void 0, this.init = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t.eventsListener = {}, e.next = 3, t.initData();
										case 3:
											t.initEvents();
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							}))), this.initData = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.game.storage.dispatch(function() {
												var e = (0, s.Z)(u().mark((function e(t, n) {
													var i, a;
													return u().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																if (i = n(), !Eg(i)) {
																	e.next = 4;
																	break
																}
																return e.abrupt("return");
															case 4:
																return t({
																	type: Ti,
																	payload: {}
																}), e.next = 7, yg();
															case 7:
																a = e.sent, t(wg(a));
															case 9:
															case "end":
																return e.stop()
														}
													}), e)
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}());
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							}))), this.game = e, this.init()
						}
						var t = e.prototype;
						return t.getEventListener = function(e) {
							return this.eventsListener[e]
						}, t.initEvents = function() {
							this.eventsListener[as.PASS_LEVELS.ID] = new Wg(this.game), this.eventsListener[as.REACH_SCORE.ID] = new qg(this.game), this.eventsListener[as.INVITE_FRIENDS.ID] = new Zg(this.game), this.eventsListener[as.COLLECT_DIAMONDS.ID] = new Ng(this.game)
						}, e
					}(),
					Jg = Qg,
					$g = [{
						name: "collect-red-gems",
						id: "collect-gems",
						require: {
							red: 5
						},
						reward: 50
					}, {
						name: "collect-blue-gems",
						id: "collect-gems",
						require: {
							blue: 5
						},
						reward: 50
					}, {
						name: "collect-pink-gems",
						id: "collect-gems",
						require: {
							pink: 5
						},
						reward: 50
					}, {
						name: "collect-green-gems",
						id: "collect-gems",
						require: {
							green: 5
						},
						reward: 50
					}, {
						name: "collect-yellow-gems",
						id: "collect-gems",
						require: {
							yellow: 5
						},
						reward: 50
					}, {
						name: "collect-red-blue-gems",
						id: "collect-gems",
						require: {
							red: 5,
							blue: 5
						},
						reward: 120
					}, {
						name: "collect-red-pink-gems",
						id: "collect-gems",
						require: {
							red: 5,
							pink: 5
						},
						reward: 120
					}, {
						name: "collect-red-green-gems",
						id: "collect-gems",
						require: {
							red: 5,
							green: 5
						},
						reward: 120
					}, {
						name: "collect-red-yellow-gems",
						id: "collect-gems",
						require: {
							red: 5,
							yellow: 5
						},
						reward: 120
					}, {
						name: "collect-blue-pink-gems",
						id: "collect-gems",
						require: {
							blue: 5,
							pink: 5
						},
						reward: 120
					}, {
						name: "collect-blue-green-gems",
						id: "collect-gems",
						require: {
							blue: 5,
							green: 5
						},
						reward: 120
					}, {
						name: "collect-blue-yellow-gems",
						id: "collect-gems",
						require: {
							blue: 5,
							yellow: 5
						},
						reward: 120
					}, {
						name: "collect-pink-green-gems",
						id: "collect-gems",
						require: {
							pink: 5,
							green: 5
						},
						reward: 120
					}, {
						name: "collect-pink-yellow-gems",
						id: "collect-gems",
						require: {
							pink: 5,
							yellow: 5
						},
						reward: 120
					}, {
						name: "collect-green-yellow-gems",
						id: "collect-gems",
						require: {
							green: 5,
							yellow: 5
						},
						reward: 120
					}, {
						name: "collect-red-blue-pink-gems",
						id: "collect-gems",
						require: {
							red: 5,
							blue: 5,
							pink: 5
						},
						reward: 210
					}, {
						name: "collect-red-blue-green-gems",
						id: "collect-gems",
						require: {
							red: 5,
							blue: 5,
							green: 5
						},
						reward: 210
					}, {
						name: "collect-red-blue-yellow-gems",
						id: "collect-gems",
						require: {
							red: 5,
							blue: 5,
							yellow: 5
						},
						reward: 210
					}, {
						name: "collect-red-pink-green-gems",
						id: "collect-gems",
						require: {
							red: 5,
							pink: 5,
							green: 5
						},
						reward: 210
					}, {
						name: "collect-red-pink-yellow-gems",
						id: "collect-gems",
						require: {
							red: 5,
							pink: 5,
							yellow: 5
						},
						reward: 210
					}, {
						name: "collect-red-green-yellow-gems",
						id: "collect-gems",
						require: {
							red: 5,
							green: 5,
							yellow: 5
						},
						reward: 210
					}, {
						name: "collect-blue-pink-green-gems",
						id: "collect-gems",
						require: {
							blue: 5,
							pink: 5,
							green: 5
						},
						reward: 210
					}, {
						name: "collect-blue-pink-yellow-gems",
						id: "collect-gems",
						require: {
							blue: 5,
							pink: 5,
							yellow: 5
						},
						reward: 210
					}, {
						name: "collect-blue-green-yellow-gems",
						id: "collect-gems",
						require: {
							blue: 5,
							green: 5,
							yellow: 5
						},
						reward: 210
					}, {
						name: "collect-pink-green-yellow-gems",
						id: "collect-gems",
						require: {
							pink: 5,
							green: 5,
							yellow: 5
						},
						reward: 210
					}],
					ev = function() {
						var e = (0, s.Z)(u().mark((function e() {
							return u().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.abrupt("return", $g);
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					tv = (0, Y.P1)([function(e) {
						var t;
						return null == (t = e[gi]) ? void 0 : t.missions
					}], (function(e) {
						return e
					})),
					nv = (0, Y.P1)([function(e) {
						var t;
						return null == (t = e[gi]) ? void 0 : t.isRequesting
					}], (function(e) {
						return e
					})),
					iv = ((0, Y.P1)([tv, function(e, t) {
						return t.name
					}], (function(e, t) {
						return e ? "string" !== typeof t ? null : GameCore.Utils.Object.hasOwn(e, t) ? e[t] : null : null
					})), function(e) {
						return {
							type: yi,
							payload: {
								missions: e
							}
						}
					}),
					av = {
						TYPES: {
							COLLECT_GEMS: "collect-gems",
							USE_ITEM: "use-item",
							COMBO: "combo"
						},
						EVENTS: {
							MISSION_START: "mission-start",
							MISSION_UPDATE: "mission-update",
							MISSION_FAILED: "mission-failed",
							MISSION_COMPLETED: "mission-completed"
						}
					},
					rv = (0, Y.P1)([function(e) {
						var t;
						return null == (t = e[gi]) ? void 0 : t.mission
					}], (function(e) {
						return e
					})),
					sv = ((0, Y.P1)([rv], (function(e) {
						return e ? e.name : null
					})), function() {
						function e(e, t, n) {
							var i = this;
							this.game = void 0, this.id = void 0, this.name = void 0, this.reward = void 0, this.process = function(e) {
								var t = e.id,
									n = e.type,
									a = e.value;
								a < 1 || i.id === t && i.isTypeRequired(n) && i.processMore(e) && (i.game.storage.dispatch(function(e, t, n) {
									return {
										type: Si,
										payload: {
											name: e,
											type: t,
											value: n
										}
									}
								}(i.name, n, a)), i.isMissionComplete() && (As.emit(av.EVENTS.MISSION_COMPLETED, {
									name: i.name,
									reward: i.reward
								}), i.game.storage.dispatch(function(e) {
									return {
										type: bi,
										payload: {
											name: e
										}
									}
								}(i.name))))
							}, this.id = t, this.name = n, this.game = e
						}
						var t = e.prototype;
						return t.start = function() {
							var e = this.game.storage.getState(),
								t = rv(e);
							t && t.name === this.name && (this.reward = t.reward, this.initEvents())
						}, t.getMissionData = function() {
							var e = this.game.storage.getState(),
								t = rv(e);
							return t ? t.name !== this.name ? null : t : null
						}, t.getDataByType = function(e) {
							var t = this.getMissionData();
							if (!t) return null;
							var n = t.require[e];
							return {
								value: t.process[e],
								target: n
							}
						}, t.isTypeRequired = function(e) {
							var t = this.getDataByType(e);
							return !!t && t.target > 0
						}, t.isMissionComplete = function() {
							var e = this.getMissionData();
							if (!e) return !0;
							var t = e.require,
								n = e.process,
								i = !0;
							return J()(t).forEach((function(e) {
								if (i) {
									var a = t[e];
									n[e] < a && (i = !1)
								}
							})), i
						}, e
					}()),
					ov = sv,
					cv = av.EVENTS,
					uv = av.TYPES,
					lv = function(e) {
						function t(t, n) {
							return e.call(this, t, uv.COLLECT_GEMS, n) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							As.off(cv.MISSION_UPDATE, this.process), As.on(cv.MISSION_UPDATE, this.process)
						}, n.processMore = function() {
							return !0
						}, t
					}(ov),
					hv = lv,
					dv = av.EVENTS,
					pv = av.TYPES,
					fv = function(e) {
						function t(t, n) {
							return e.call(this, t, pv.COMBO, n) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							As.off(dv.MISSION_UPDATE, this.process), As.on(dv.MISSION_UPDATE, this.process)
						}, n.processMore = function(e) {
							var t = this.getMissionData();
							if (!t) return !1;
							var n = e.type;
							return e.value >= t.require[n]
						}, t
					}(ov),
					mv = fv,
					gv = av.EVENTS,
					vv = av.TYPES,
					yv = function(e) {
						function t(t, n) {
							return e.call(this, t, vv.USE_ITEM, n) || this
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.initEvents = function() {
							As.off(gv.MISSION_UPDATE, this.process), As.on(gv.MISSION_UPDATE, this.process)
						}, n.processMore = function(e) {
							return console.log("UseItem", {
								payload: e
							}), !0
						}, t
					}(ov),
					Sv = yv,
					bv = function() {
						function e(e) {
							var t = this;
							this.game = void 0, this.listener = void 0, this.init = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.initData();
										case 2:
											t.initListeners(), t.initEvents();
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							}))), this.initData = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, t.game.storage.dispatch(function() {
												var e = (0, s.Z)(u().mark((function e(t, n) {
													var i, a;
													return u().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																if (i = n(), !nv(i)) {
																	e.next = 4;
																	break
																}
																return e.abrupt("return");
															case 4:
																return t({
																	type: vi,
																	payload: {}
																}), e.next = 7, ev();
															case 7:
																a = e.sent, t(iv(a));
															case 9:
															case "end":
																return e.stop()
														}
													}), e)
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}());
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							}))), this.startListener = function(e) {
								t.listener[e] && t.listener[e].start()
							}, this.game = e, this.init()
						}
						var t = e.prototype;
						return t.initListeners = function() {
							var e = this;
							this.listener = {};
							var t = this.game.storage.getState(),
								n = tv(t);
							n && J()(n).forEach((function(t) {
								switch (n[t].id) {
									case av.TYPES.COLLECT_GEMS:
										e.listener[t] = new hv(e.game, t);
										break;
									case av.TYPES.COMBO:
										e.listener[t] = new mv(e.game, t);
										break;
									case av.TYPES.USE_ITEM:
										e.listener[t] = new Sv(e.game, t)
								}
							}))
						}, t.initEvents = function() {
							As.off(av.EVENTS.MISSION_START, this.startListener), As.on(av.EVENTS.MISSION_START, this.startListener)
						}, e
					}(),
					Ev = bv,
					Av = n(616),
					wv = {
						BACKGROUND: {
							KEY: "background",
							FILE: "./assets/music/bg_music.mp3"
						},
						EFFECTS: {
							KEY: "effects",
							FILE: "./assets/sounds/effects.mp3",
							JSON: "./assets/sounds/effects.json"
						}
					},
					Tv = GameCore.Configs,
					Cv = Tv.AppId,
					Pv = Tv.Notification,
					Iv = function(e) {
						function t() {
							for (var t, n, a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
							return (n = e.call.apply(e, y()(t = [this]).call(t, r)) || this).handleFBInstantGameStarted = function() {
								window.__fbGameReady = !0, n.player.requestConnectedPlayers(), setTimeout(n.subscribebot, 500)
							}, n.processAfterUpdatePlayerProfile = function() {
								Pv.Enable && n.updatePlayerProfileToNotificationService()
							}, n.startGame = function() {
								n.analytics.event(Vt._.APP_READY), n.storage.dispatch((0, Av.I)(da.C.LOAD_SCENE)), n.storage.dispatch(function() {
									var e = (0, s.Z)(u().mark((function e(t, n) {
										var a, r, s, o, c, l, h, d, p, f, m, g, v, y, S, b, E, A, w, T, C, P, I;
										return u().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													if (a = n(), r = ra(a), s = sa(a), o = window.game, c = o.player, l = o.analytics, h = o.facebook, o.globalScene, d = c.getPlayer(), p = r.contextId, f = r.entryPointData, g = (m = f || {}).type, v = m.matchId, y = m.opponentId, S = m.playerId, b = m.playerName, E = m.playerPhoto, A = m.playerScore, w = d.playerId === S, T = ea, w || "string" !== typeof S || "string" !== typeof b || (T = {
															playerId: S,
															name: b,
															photo: "string" === typeof E ? E : "",
															locale: "en_US"
														}), d.isUserNew && l.event(Vt._.NEW_USER), s !== aa) {
														e.next = 25;
														break
													}
													return e.prev = 12, e.next = 15, h.getTournamentAsync();
												case 15:
													C = e.sent, P = C.getID().toString(), t(Kr(P)), e.next = 23;
													break;
												case 20:
													e.prev = 20, e.t0 = e.catch(12), (0, i.tO)(e.t0);
												case 23:
													return t(Uo()), e.abrupt("return");
												case 25:
													if (s !== na) {
														e.next = 34;
														break
													}
													if (g !== Xi) {
														e.next = 30;
														break
													}
													return w || c.updateConnectedPlayers([T]), t(Wo(p, T.playerId, !0)), e.abrupt("return");
												case 30:
													if (!(Ot()(I = [y, S]).call(I, d.playerId) >= 0) || g !== Qi) {
														e.next = 34;
														break
													}
													return t(Ko(v, w ? y : S)), e.abrupt("return");
												case 34:
													if (s !== ia) {
														e.next = 39;
														break
													}
													return t(Mo(S, {
														score: A,
														level: 0
													})), t(startMatchingGroupModeGame(T)), e.abrupt("return");
												case 39:
													if (!d.isUserNew) {
														e.next = 42;
														break
													}
													return t(Ho()), e.abrupt("return");
												case 42:
													window.game.globalScene.events.emit(da.K.SWITCH, da.C.GAME_SCENE);
												case 43:
												case "end":
													return e.stop()
											}
										}), e, null, [
											[12, 20]
										])
									})));
									return function(t, n) {
										return e.apply(this, arguments)
									}
								}())
							}, n.subscribebot = function() {
								n.facebook.attemptToSubscribeBot()
							}, n.handleLoadSoundCompleted = function() {
								n.audio.initSound(wv.EFFECTS.KEY)
							}, n.handleLoadMusicCompleted = function() {
								n.audio.initMusic(wv.BACKGROUND.KEY), n.audio.playMusic()
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.preload = function() {
							var e = this;
							this.facebook.progressLoading.loadingProgressFbLoadScene(), this.analytics.event(Vt._.SCREEN_OPEN, {
								screen_name: "LoadScene"
							}), this.load.on("progress", (function(t) {
								e.facebook.progressLoading.onProgress(t)
							})), this.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, (function(e) {
								var t = new gg("Load resources at LoadScene failed.");
								(0, i.R0)(t, {
									file: null == e ? void 0 : e.url
								})
							})), this.load.bitmapFont(Bc.Z.PRIMARY.KEY, Bc.Z.PRIMARY.TEXTURE, Bc.Z.PRIMARY.DATA), this.load.bitmapFont(Bc.Z.PRIMARY_LIGHT.KEY, Bc.Z.PRIMARY_LIGHT.TEXTURE, Bc.Z.PRIMARY_LIGHT.DATA), this.load.bitmapFont(Bc.Z.NUMBER_GOLD.KEY, Bc.Z.NUMBER_GOLD.TEXTURE, Bc.Z.NUMBER_GOLD.DATA), this.load.image($i.Z.AVATAR.KEY, $i.Z.AVATAR.FILE), this.load.image($i.Z.BACKGROUND.KEY, $i.Z.BACKGROUND.FILE), this.load.multiatlas(Oa.Z.DEFAULT.KEY, Oa.Z.DEFAULT.JSON, Oa.Z.DEFAULT.URL), this.load.atlas({
								key: Oa.Z.GAMEPLAY_JPG.KEY,
								textureURL: Oa.Z.GAMEPLAY_JPG.TEXTURE,
								atlasURL: Oa.Z.GAMEPLAY_JPG.JSON
							}), this.load.atlas({
								key: Oa.Z.GAMEPLAY.KEY,
								textureURL: Oa.Z.GAMEPLAY.TEXTURE,
								atlasURL: Oa.Z.GAMEPLAY.JSON
							}), this.load.atlas({
								key: Oa.Z.EFFECTS.KEY,
								textureURL: Oa.Z.EFFECTS.PATH,
								atlasURL: Oa.Z.EFFECTS.JSON
							}), this.load.atlas({
								key: Oa.Z.TUTORIAL.KEY,
								textureURL: Oa.Z.TUTORIAL.TEXTURE,
								atlasURL: Oa.Z.TUTORIAL.JSON
							}), this.player.updateData().then(this.processAfterUpdatePlayerProfile).catch(i.tO)
						}, n.create = function() {
							this.analytics.event(Vt._.LOAD_COMPLETE), this.facebook.on("startgame", this.handleFBInstantGameStarted), this.facebook.gameStarted(), this.initModules(), this.setupGlobalScene(), this.lazyLoadResource(), this.startGame()
						}, n.updatePlayerProfileToNotificationService = function() {
							var e = this.player.getPlayer(),
								t = e.playerId,
								n = e.name,
								i = e.photo,
								a = e.locale,
								r = e.ASID,
								s = {
									appId: Cv,
									playerId: t,
									name: n,
									photo: i,
									locale: a,
									ASID: r
								};
							console.info("\ud83d\ude80 > profileData", s), mg(s)
						}, n.sendNotificationForNewUser = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t, n;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (e.prev = 0, this.player.getPlayerIsNew()) {
												e.next = 4;
												break
											}
											return e.abrupt("return");
										case 4:
											if (t = this.player.getPlayerASID()) {
												e.next = 7;
												break
											}
											return e.abrupt("return");
										case 7:
											return e.next = 9, FBInstant.player.getDataAsync(["isNotificationFirstSent"]);
										case 9:
											if (e.t0 = e.sent, e.t0) {
												e.next = 12;
												break
											}
											e.t0 = {};
										case 12:
											if (n = e.t0, !0 !== n.isNotificationFirstSent) {
												e.next = 16;
												break
											}
											return e.abrupt("return");
										case 16:
											this.facebook.sendNotificationAsync({
												message: "Hi @[" + t + "] your friends are waiting to play with you, play now!",
												delayTime: 3600
											}), FBInstant.player.setDataAsync({
												isNotificationFirstSent: !0
											}), e.next = 23;
											break;
										case 20:
											e.prev = 20, e.t1 = e.catch(0), console.warn("\ud83d\ude80 > sendNotificationForNewUser", e.t1);
										case 23:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[0, 20]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), n.setupGlobalScene = function() {
							var e = this.scene.get(da.C.GLOBAL_SCENE);
							e instanceof ym.Z && e.setup()
						}, n.initModules = function() {
							new Ev(this.game), new Jg(this.game)
						}, n.lazyLoadResource = function() {
							var e = this;
							setTimeout((function() {
								e.scene.wake(), e.loadSounds(), e.load.once(Phaser.Loader.Events.COMPLETE, (function() {
									e.scene.sleep()
								}))
							}), 1500)
						}, n.loadSounds = function() {
							var e = Phaser.Loader.Events.FILE_KEY_COMPLETE;
							this.load.once(e + "audio-" + wv.EFFECTS.KEY, this.handleLoadSoundCompleted), this.load.once(e + "audio-" + wv.BACKGROUND.KEY, this.handleLoadMusicCompleted), this.load.audio(wv.BACKGROUND.KEY, wv.BACKGROUND.FILE), this.load.audioSprite(wv.EFFECTS.KEY, wv.EFFECTS.JSON, wv.EFFECTS.FILE), this.load.start()
						}, n.loadWideframesResource = function() {
							/* Arcade: assets/wideframes không tồn tại — bỏ preload để tránh 404 */
						}, t
					}(Phaser.Scene),
					kv = Iv,
					xv = function(e) {
						function t() {
							for (var t, n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
							return (n = e.call.apply(e, y()(t = [this]).call(t, a)) || this).isVisible = !0, n.browserPrefixes = ["moz", "ms", "o", "", "webkit"], n.visibleCallbacks = [], n.hiddenCallbacks = [], n.handleVisibilityChange = function(e) {
								if ("boolean" === typeof e) return e ? n.onVisibleEvent() : n.onHiddenEvent();
								var t = n.getBrowserPrefix(),
									i = n.getHiddenPropertyName(t);
								return document[i] ? n.onHiddenEvent() : n.onVisibleEvent()
							}, n
						}(0, o.Z)(t, e);
						var n = t.prototype;
						return n.configure = function() {
							var e = this,
								t = this.getBrowserPrefix(),
								n = this.getVisibilityEvent(t);
							document.addEventListener(n, this.handleVisibilityChange, !1), document.addEventListener("focus", (function() {
								e.handleVisibilityChange(!0)
							}), !1), document.addEventListener("blur", (function() {
								e.handleVisibilityChange(!1)
							}), !1), window.addEventListener("focus", (function() {
								e.handleVisibilityChange(!0)
							}), !1), window.addEventListener("blur", (function() {
								e.handleVisibilityChange(!1)
							}), !1)
						}, n.addEventVisible = function(e) {
							this.visibleCallbacks.push(e)
						}, n.addEventHidden = function(e) {
							this.hiddenCallbacks.push(e)
						}, n.isGameVisible = function() {
							return this.isVisible
						}, n.getHiddenPropertyName = function(e) {
							return e ? e + "Hidden" : "hidden"
						}, n.getVisibilityEvent = function(e) {
							return (e || "") + "visibilitychange"
						}, n.getBrowserPrefix = function() {
							for (var e = 0; e < this.browserPrefixes.length; e++)
								if (this.getHiddenPropertyName(this.browserPrefixes[e]) in document) return this.browserPrefixes[e];
							return ""
						}, n.onVisibleEvent = function() {
							this.isVisible || (this.isVisible = !0, console.log("visible"), this.visibleCallbacks.forEach((function(e) {
								e()
							})))
						}, n.onHiddenEvent = function() {
							this.isVisible && (this.isVisible = !1, console.log("hidden"), this.hiddenCallbacks.forEach((function(e) {
								e()
							})))
						}, t
					}(Phaser.Plugins.BasePlugin),
					Ov = xv,
					Rv = n(631),
					_v = ["Enable"],
					Bv = function(e) {
						function t(t) {
							return e.call(this, t) || this
						}(0, o.Z)(t, e);
						var c = t.prototype;
						return c.boot = function() {
							var t = (0, s.Z)(u().mark((function t() {
								return u().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return e.prototype.boot.call(this), this.addExtraGameObjectMethods(), this.addExtraFBInstantFunctions(), this.addPlugins(), t.next = 6, this.addDevPlugins();
										case 6:
											return t.next = 8, this.initAdsAsync();
										case 8:
											this.addScenes(), this.addDevScenes(), this.initWorld(), this.initStorage(), this.initLanguage(), this.initVisibilityChangeHandler(), this.initUtils(), this.initRollbar(), this.initConsole(), this.initDebugger(), this.initStatistics(), this.initParticleEditor(), this.initProfilerPlugin(), this.initAdaptivePerformance(), this.handleShowInterAdWhenStartGame();
										case 23:
										case "end":
											return t.stop()
									}
								}), t, this)
							})));
							return function() {
								return t.apply(this, arguments)
							}
						}(), c.start = function() {
							e.prototype.start.call(this)
						}, c.updateFps = function(e) {
							void 0 === e && (e = 60), this.getFps() !== e && this.setFps(e)
						}, c.getFps = function() {
							return this.scene.game && this.scene.game.loop && this.scene.game.loop.raf ? this.scene.game.loop.raf.fps : 5
						}, c.setFps = function(e) {
							this.scene.game && this.scene.game.loop && this.scene.game.loop.raf && "function" === typeof this.scene.game.loop.raf.updateFps && this.scene.game.loop.raf.updateFps(e)
						}, c.addExtraGameObjectMethods = function() {
							var e = new g(this);
							e.addKillRevive(), e.addKillReviveGroup(), e.addDrawDebugBox(), e.addSetWorldSize(), e.addSetWorldSizeForContainer(), e.addGetWorldPosition(), e.addHighQuality()
						}, c.addExtraFBInstantFunctions = function() {
							var e = new l.Z(this.facebook);
							this.facebook.getLocale = e.getLocale, this.facebook.shareAsync = e.shareAsync, this.facebook.inviteAsync = e.inviteAsync, this.facebook.switchAsync = e.switchAsync, this.facebook.chooseAsync = e.chooseAsync, this.facebook.createAsync = e.createAsync, this.facebook.sendMessage = e.sendMessage, this.facebook.getContextID = e.getContextID, this.facebook.getPlayerToken = e.getPlayerToken, this.facebook.matchPlayerAsync = e.matchPlayerAsync, this.facebook.getContextPlayers = e.getContextPlayers, this.facebook.setLoadingProgress = e.setLoadingProgress, this.facebook.attemptToAddShortcut = e.attemptToAddShortcut, this.facebook.attemptToSubscribeBot = e.attemptToSubscribeBot, this.facebook.postSessionScoreAsync = e.postSessionScoreAsync, this.facebook.getRewardedVideoAsync = e.getRewardedVideoAsync, this.facebook.sendNotificationAsync = e.sendNotificationAsync, this.facebook.getInterstitialAdAsync = e.getInterstitialAdAsync, e.injectTournament(), this.facebook.progressLoading = new f(this)
						}, c.addPlugins = function() {
							this.plugins.install("Storage", Fi, !0, "storage"), this.plugins.install("Rollbar", Zt, !0, "rollbar"), this.plugins.install("AdsManager", _, !0, "ads"), this.plugins.install("AuthManager", q, !0, "auth"), this.plugins.install("AudioManager", G, !0, "audio"), this.plugins.install("WorldManager", zi, !0, "world"), this.plugins.install("PlayerManager", rt, !0, "player"), this.plugins.install("LanguageManager", ga, !0, "lang"), this.plugins.install("ProfileManager", kt, !0, "profile"), this.plugins.install("AnalyticsManager", N, !0, "analytics"), this.plugins.install("AdaptivePerformance", le, !0, "performance"), this.plugins.install("VisibilityChangeHandler", Ov, !0, "visibility"), this.plugins.installScenePlugin("textStyler", Vi, "textStyler"), this.plugins.installScenePlugin("ScreenManager", jt, "screen"), this.plugins.installScenePlugin("FrameCapture", ie, "frameCapture"), window.SpinePlugin && this.plugins.installScenePlugin("SpinePlugin", SpinePlugin, "spine"), this.storage = this.plugins.get("Storage"), this.rollbar = this.plugins.get("Rollbar"), this.ads = this.plugins.get("AdsManager"), this.auth = this.plugins.get("AuthManager"), this.audio = this.plugins.get("AudioManager"), this.world = this.plugins.get("WorldManager"), this.player = this.plugins.get("PlayerManager"), this.lang = this.plugins.get("LanguageManager"), this.profile = this.plugins.get("ProfileManager"), this.analytics = this.plugins.get("AnalyticsManager"), this.performance = this.plugins.get("AdaptivePerformance"), this.visibility = this.plugins.get("VisibilityChangeHandler")
						}, c.addDevPlugins = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t, i, a, r, s;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (GameCore.Utils.Valid.isDebugger()) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return e.next = 4, Promise.all([n.e(7), n.e(942)]).then(n.bind(n, 585));
										case 4:
											return t = e.sent.default, e.next = 7, Promise.all([n.e(498), n.e(868), n.e(530)]).then(n.bind(n, 586));
										case 7:
											return i = e.sent.default, e.next = 10, n.e(401).then(n.bind(n, 589));
										case 10:
											return a = e.sent.default, e.next = 13, Promise.all([n.e(498), n.e(123)]).then(n.bind(n, 590));
										case 13:
											return r = e.sent.default, e.next = 16, Promise.all([n.e(498), n.e(803)]).then(n.bind(n, 591));
										case 16:
											s = e.sent.default, this.plugins.install("Console", t, !0, "console"), this.plugins.install("Debugger", i, !0, "debugger"), this.plugins.install("Statistics", a, !0, "statistics"), this.plugins.install("Profiler", r, !0, "profiler"), this.plugins.install("ParticleEditor", s, !0, "particle-editor"), this.eruda = this.plugins.get("Console"), this.debugger = this.plugins.get("Debugger"), this.statistics = this.plugins.get("Statistics"), this.profiler = this.plugins.get("Profiler"), this.particleEditor = this.plugins.get("ParticleEditor");
										case 27:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), c.addScenes = function() {
							this.scene.add(da.C.BOOT_SCENE, wa, !0), this.scene.add(da.C.LOAD_SCENE, kv, !1), this.scene.add(da.C.GAME_SCENE, vm, !1), this.scene.add(da.C.GAME_OVER_SCENE, Ru, !1), this.scene.add(da.C.LEADERBOARD_SCENE, pg, !1), this.scene.add(da.C.GLOBAL_SCENE, ym.Z, !1)
						}, c.addDevScenes = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (GameCore.Utils.Valid.isDebugger()) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return e.next = 4, n.e(638).then(n.bind(n, 593));
										case 4:
											t = e.sent.default, this.scene.add(da.C.TEST_SCENE, t, !1);
										case 6:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), c.initAdsAsync = function() {
							var e = (0, s.Z)(u().mark((function e() {
								var t, i, a, s;
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = GameCore.Configs.Ads, Rv.Z.setGame(this), i = Rv.Z, !t.Mockup.Enable) {
												e.next = 8;
												break
											}
											return e.next = 6, n.e(131).then(n.bind(n, 594));
										case 6:
											a = e.sent.default, i = a;
										case 8:
											(s = (0, r.Z)({}, t.InterstitialAdOptions)).showWhenStartGame && (s.secondsFirstTime = 0), this.ads.configure(i, (0, r.Z)({}, t, {
												InterstitialAdOptions: s
											})), this.ads.showBannerAdAsync();
										case 12:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), c.initWorld = function() {
							var e = GameCore.Configs.Game,
								t = e.AutoResize,
								n = e.PortraitRatio,
								i = e.PortraitWidth,
								a = e.PortraitHeight,
								r = e.LandscapeRatio,
								s = e.LandscapeWidth,
								o = e.LandscapeHeight,
								c = t,
								u = e.DisableLandscape,
								l = e.FullSizeOnLandscape,
								h = n,
								d = i,
								p = a,
								f = r,
								m = s,
								g = o;
							console.info("\ud83d\ude80 > portraitRatio", h), console.info("\ud83d\ude80 > landscapeRatio", f), this.world.configure({
								autoResize: c,
								portraitRatio: h,
								portraitWidth: d,
								portraitHeight: p,
								landscapeRatio: f,
								landscapeWidth: m,
								landscapeHeight: g,
								disableLandscape: u,
								fullSizeOnLandscape: l
							}), this.world.resize(e.ForcePixelRatio)
						}, c.initStorage = function() {
							var e = new ha(this);
							this.storage.setInitiator(e)
						}, c.initLanguage = function() {
							var e = this.facebook.getLocale();
							this.lang.configure({
								locale: e,
								upperCaseText: !0
							})
						}, c.initVisibilityChangeHandler = function() {
							this.visibility.configure()
						}, c.initUtils = function() {
							this.handlePauseAudio()
						}, c.initConsole = function() {
							GameCore.Utils.Valid.isDebugger() && (GameCore.Configs.Debugger.ShowConsole && this.eruda.configure({
								tool: ["console", "info"],
								defaults: {
									theme: "Dark"
								}
							}))
						}, c.initDebugger = function() {
							if (GameCore.Utils.Valid.isDebugger()) {
								var e = GameCore.Configs.Debugger,
									t = e.ShowInspector,
									n = e.ShowMonitoring;
								(t || n) && this.debugger.configure(GameCore.Configs.Debugger)
							}
						}, c.initStatistics = function() {
							GameCore.Utils.Valid.isDebugger() && (GameCore.Configs.Statistics.Enable && this.statistics.configure(GameCore.Configs.Statistics))
						}, c.initParticleEditor = function() {
							GameCore.Utils.Valid.isDebugger() && (GameCore.Configs.ParticleEditor.Enable && this.particleEditor.configure(GameCore.Configs.ParticleEditor))
						}, c.initProfilerPlugin = function() {
							GameCore.Utils.Valid.isDebugger() && (GameCore.Configs.ProfilerPlugin.Enable && this.profiler.configure())
						}, c.initAdaptivePerformance = function() {
							var e = GameCore.Configs.Performance,
								t = e.Enable,
								n = (0, a.Z)(e, _v);
							if (t) {
								var i = this.world.getPixelRatio();
								this.performance.configure((0, r.Z)({
									pixelRatio: i
								}, n)), this.performance.active()
							}
						}, c.initRollbar = function() {
							var e = GameCore.Configs.Rollbar.Enable;
							console.warn({
								isRollbarEnabled: e
							}), e && this.rollbar.setup()
						}, c.handlePauseAudio = function() {
							var e = this;
							this.sound.pauseOnBlur = !1, this.visibility.addEventVisible((function() {
								e.audio.playMusic()
							})), this.visibility.addEventHidden((function() {
								e.audio.pauseMusic()
							}))
						}, c.removeUnusedPipelines = function() {
							var e = this.renderer;
							if (e instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
								var t = e.pipelines,
									n = Phaser.Renderer.WebGL.Pipelines;
								if (n)[n.ROPE_PIPELINE, n.LIGHT_PIPELINE, n.POSTFX_PIPELINE, n.POINTLIGHT_PIPELINE, n.BITMAPMASK_PIPELINE].forEach((function(e) {
									var n;
									null == (n = t.get(e)) || n.destroy(), t.remove(e)
								}))
							}
						}, c.handleShowInterAdWhenStartGame = function() {
							var e = (0, s.Z)(u().mark((function e() {
								return u().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (GameCore.Configs.Ads.InterstitialAdOptions.showWhenStartGame) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											return e.prev = 3, this.audio.stopMusic(), this.audio.muteAll(), e.next = 8, this.ads.preloadPreRollAdAsync();
										case 8:
											return e.next = 10, this.ads.showPreRollAdAsync();
										case 10:
											e.next = 15;
											break;
										case 12:
											e.prev = 12, e.t0 = e.catch(3), (0, i.tO)(e.t0);
										case 15:
											return e.prev = 15, this.audio.unmuteAll(), this.audio.playMusic(), e.finish(15);
										case 19:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[3, 12, 15, 19]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(), t
					}(Phaser.Game),
					Dv = Bv,
					Nv = GameCore.Configs.Debugger.ShowInspector,
					Mv = {
						parent: "app",
						type: Phaser.AUTO,
						width: 0,
						height: 0,
						scale: {
							autoRound: !0
						},
						dom: {
							createContainer: !1
						},
						loader: {
							maxParallelDownloads: 6,
							crossOrigin: "no-cros"
						},
						audio: {},
						input: {
							gamepad: !1,
							keyboard: Nv,
							touch: {
								capture: !0
							},
							smoothFactor: 1,
							activePointers: 1,
							windowEvents: !1
						},
						disableContextMenu: !0,
						render: {
							pixelArt: !1,
							antialias: !0,
							antialiasGL: !0,
							transparent: !0,
							desynchronized: !1,
							clearBeforeRender: !1,
							roundPixels: !1,
							mipmapFilter: "LINER"
						},
						plugins: {
							global: []
						}
					};
				(0, i.j6)();
				var Lv = setInterval((function() {
					window.__analyticsInitiated && (window.__fbGameReady = !1, clearInterval(Lv), clearInterval(window.__fbInstantLoadingTimer), GameSDK.setLoadingProgress(30), gtag("event", "app_initialize", {
						send_to: ["GA"]
					}), function() {
						try {
							var e = new Dv(Mv);
							window.game = e
						} catch (t) {
							(0, i.tO)(t)
						}
					}())
				}), 50)
			},
			609: function(e, t, n) {
				"use strict";
				n.d(t, {
					_: function() {
						return i
					}
				});
				var i = {
					BUTTON_CLICK: "button_click",
					SCREEN_OPEN: "screen_open",
					LOAD_START: "load_start",
					LOAD_COMPLETE: "load_complete",
					APP_READY: "app_ready",
					TUTORIAL_BEGIN: "tutorial_begin",
					TUTORIAL_STEP: "tutorial_step",
					TUTORIAL_COMPLETE: "tutorial_complete",
					MATCH_START: "match_start",
					MATCH_RESCUE: "match_rescue",
					MATCH_END: "match_end",
					LEVEL_START: "level_start",
					LEVEL_RESCUE: "level_rescue",
					LEVEL_END: "level_end",
					SHARE: "share",
					MESSAGE: "message",
					INVITE: "invite",
					SHORTCUT_CREATE: "shortcut_create",
					SHORTCUT_CREATE_POPUP: "shortcut_create_popup",
					BOT_SUBSCRIBE: "bot_subscribe",
					BOT_SUBSCRIBE_POPUP: "bot_subscribe_popup",
					AD_SHOW: "ad_show",
					AD_SHOW_FAILED: "ad_show_failed",
					NEW_USER: "new_user",
					AD_IMPRESSION: "ad_impression",
					JOIN_GROUP: "join_group",
					TOURNAMENT_SHARE: "tournament_share",
					TOURNAMENT_CREATE: "tournament_create",
					TOURNAMENT_POST_SCORE: "tournament_post_score"
				}
			},
			606: function(e, t, n) {
				"use strict";
				var i = n(607),
					a = function() {
						function e(e, t, n, a) {
							this.playerId = void 0, this.name = void 0, this.photo = void 0, this.locale = void 0, this.playerId = e, this.name = t, this.photo = n || i.Z.AVATAR.FILE, this.locale = a || "en_US"
						}
						return e.prototype.toObject = function() {
							return {
								playerId: this.playerId,
								name: this.name,
								photo: this.photo,
								locale: this.locale
							}
						}, e
					}();
				t.Z = a
			},
			616: function(e, t, n) {
				"use strict";
				n.d(t, {
					I: function() {
						return a
					}
				});
				var i = n(613),
					a = function(e) {
						return {
							type: i.DW,
							payload: {
								sceneKey: e
							}
						}
					}
			},
			608: function(e, t, n) {
				"use strict";
				n.d(t, {
					Gm: function() {
						return s
					},
					qZ: function() {
						return r
					}
				});
				var i = n(26),
					a = n.n(i),
					r = (n(34), function(e) {
						return new(a())((function(t) {
							return setTimeout(t, e)
						}))
					}),
					s = function(e) {
						var t = new Date(e),
							n = new Date;
						return t.getDate() === n.getDate() && t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear()
					}
			},
			604: function(e, t, n) {
				"use strict";
				n.d(t, {
					R0: function() {
						return c
					},
					Tv: function() {
						return s
					},
					j6: function() {
						return a
					},
					sw: function() {
						return r
					},
					tO: function() {
						return u
					}
				});
				n(104), n(102), n(51), n(18);
				var i = !1,
					a = function() {
						var e = setInterval((function() {
							window.Sentry && (clearInterval(e), console.warn({
								isSentryEnabled: i
							}))
						}), 100)
					},
					r = function(e, t) {
						window.Sentry && window.Sentry.addBreadcrumb({
							category: e,
							message: t
						})
					},
					s = function(e) {
						window.Sentry && window.Sentry.setUser(e)
					},
					o = function(e) {
						//console.error(e)
						console.log("3333",e);
					},
					c = function(e, t) {
						e && window.Sentry.withScope((function(n) {
							n.setExtras(t), o(e)
						}))
					},
					u = function(e) {
						e && o(e)
					}
			},
			435: function(e, t, n) {
				"use strict";
				n.d(t, {
					t: function() {
						return i
					}
				});
				var i = function() {
					return GameCore.Utils.Device.isDesktop() || GameCore.Utils.Device.pixelRatio() > 1 ? 2 : 1
				}
			}
		},
		t = {};

	function n(i) {
		var a = t[i];
		if (void 0 !== a) return a.exports;
		var r = t[i] = {
			id: i,
			loaded: !1,
			exports: {}
		};
		return e[i].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
	}
	n.m = e, n.amdO = {},
		function() {
			var e = [];
			n.O = function(t, i, a, r) {
				if (!i) {
					var s = 1 / 0;
					for (l = 0; l < e.length; l++) {
						i = e[l][0], a = e[l][1], r = e[l][2];
						for (var o = !0, c = 0; c < i.length; c++)(!1 & r || s >= r) && Object.keys(n.O).every((function(e) {
							return n.O[e](i[c])
						})) ? i.splice(c--, 1) : (o = !1, r < s && (s = r));
						if (o) {
							e.splice(l--, 1);
							var u = a();
							void 0 !== u && (t = u)
						}
					}
					return t
				}
				r = r || 0;
				for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
				e[l] = [i, a, r]
			}
		}(), n.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return n.d(t, {
				a: t
			}), t
		}, n.d = function(e, t) {
			for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
				enumerable: !0,
				get: t[i]
			})
		}, n.f = {}, n.e = function(e) {
			return Promise.all(Object.keys(n.f).reduce((function(t, i) {
				return n.f[i](e, t), t
			}), []))
		}, n.u = function(e) {
			return e + ".bundle.js"
		}, n.g = function() {
			if ("object" === typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" === typeof window) return window
			}
		}(), n.hmd = function(e) {
			return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
				enumerable: !0,
				set: function() {
					throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
				}
			}), e
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		function() {
			var e = {},
				t = "game-core:";
			n.l = function(i, a, r, s) {
				if (e[i]) e[i].push(a);
				else {
					var o, c;
					if (void 0 !== r)
						for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
							var h = u[l];
							if (h.getAttribute("src") == i || h.getAttribute("data-webpack") == t + r) {
								o = h;
								break
							}
						}
					o || (c = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + r), o.src = i), e[i] = [a];
					var d = function(t, n) {
							o.onerror = o.onload = null, clearTimeout(p);
							var a = e[i];
							if (delete e[i], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((function(e) {
									return e(n)
								})), t) return t(n)
						},
						p = setTimeout(d.bind(null, void 0, {
							type: "timeout",
							target: o
						}), 12e4);
					o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), c && document.head.appendChild(o)
				}
			}
		}(), n.r = function(e) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		function() {
			var e;
			n.g.importScripts && (e = n.g.location + "");
			var t = n.g.document;
			if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
				var i = t.getElementsByTagName("script");
				i.length && (e = i[i.length - 1].src)
			}
			if (!e) throw new Error("Automatic publicPath is not supported in this browser");
			e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
		}(),
		function() {
			var e = {
				757: 0
			};
			n.f.j = function(t, i) {
				var a = n.o(e, t) ? e[t] : void 0;
				if (0 !== a)
					if (a) i.push(a[2]);
					else {
						var r = new Promise((function(n, i) {
							a = e[t] = [n, i]
						}));
						i.push(a[2] = r);
						var s = n.p + n.u(t),
							o = new Error;
						n.l(s, (function(i) {
							if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
								var r = i && ("load" === i.type ? "missing" : i.type),
									s = i && i.target && i.target.src;
								o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")", o.name = "ChunkLoadError", o.type = r, o.request = s, a[1](o)
							}
						}), "chunk-" + t, t)
					}
			}, n.O.j = function(t) {
				return 0 === e[t]
			};
			var t = function(t, i) {
					var a, r, s = i[0],
						o = i[1],
						c = i[2],
						u = 0;
					if (s.some((function(t) {
							return 0 !== e[t]
						}))) {
						for (a in o) n.o(o, a) && (n.m[a] = o[a]);
						if (c) var l = c(n)
					}
					for (t && t(i); u < s.length; u++) r = s[u], n.o(e, r) && e[r] && e[r][0](), e[r] = 0;
					return n.O(l)
				},
				i = self.webpackChunkgame_core = self.webpackChunkgame_core || [];
			i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
		}(), n.O(void 0, [216, 630, 542], (function() {
			return n(598)
		})), n.O(void 0, [216, 630, 542], (function() {
			return n(599)
		})), n.O(void 0, [216, 630, 542], (function() {
			return n(419)
		})), n.O(void 0, [216, 630, 542], (function() {
			return n(436)
		})), n.O(void 0, [216, 630, 542], (function() {
			return n(602)
		})), n.O(void 0, [216, 630, 542], (function() {
			return n(510)
		}));
	var i = n.O(void 0, [216, 630, 542], (function() {
		return n(538)
	}));
	i = n.O(i)
})();