window.__require = function t(e, o, c) {
	function n(i, s) {
		if (!o[i]) {
			if (!e[i]) {
				var r = i.split("/");
				if (r = r[r.length - 1], !e[r]) {
					var h = "function" == typeof __require && __require;
					if (!s && h) return h(r, !0);
					if (a) return a(r, !0);
					throw new Error("Cannot find module '" + i + "'")
				}
			}
			var u = o[i] = {
				exports: {}
			};
			e[i][0].call(u.exports, function(t) {
				return n(e[i][1][t] || t)
			}, u, u.exports, t, e, o, c)
		}
		return o[i].exports
	}
	for (var a = "function" == typeof __require && __require, i = 0; i < c.length; i++) n(c[i]);
	return n
}({
	Audio: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "5b4c4rLWqdEr5nUpEGv2d+q", "Audio"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = (c.property, t("./kernels/Props")),
			i = t("./Log"),
			s = t("./Caches"),
			r = t("./Utils"),
			h = function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.bgmHandle = -1, e.xSet("bgmVolume", s.default.getFloat("bgmVolume", 1)), e.xSet("sfxVolume", s.default.getFloat("sfxVolume", 1)), i.default.info("Khởi tạo quản lý âm thanh thành công!"), e
				}
				return __extends(e, t), e.prototype.playBGM = function(t, e) {
					var o = this;
					if (void 0 === e && (e = 1), t && 0 != t.length) {
						this.stopBGM();
						var c = this.xGet("bgmVolume");
						c *= e, "string" == typeof t ? c > .001 && cc.loader.loadRes(t, cc.AudioClip, function(t, e) {
							o.bgmHandle = cc.audioEngine.play(e, !0, c)
						}) : this.bgmHandle = cc.audioEngine.play(t, !0, c)
					}
				}, e.prototype.stopBGM = function() {
					-1 != this.bgmHandle && (cc.audioEngine.stop(this.bgmHandle), this.bgmHandle = -1)
				}, e.prototype.recoverBGM = function() {
					this.setBGMVolume(1)
				}, e.prototype.slientBgm = function() {
					this.stopBGM(), this.setBGMVolume(0)
				}, e.prototype.playSFX = function(t, e) {
					return void 0 === e && (e = !1), __awaiter(this, void 0, void 0, function() {
						var e, o, c;
						return __generator(this, function(n) {
							switch (n.label) {
								case 0:
									return t && 0 != t.length ? "string" != typeof t ? (e = this.xGet("sfxVolume"), cc.audioEngine.play(t, !1, e), [2]) : (o = this.xGet("sfxVolume")) > .001 ? [4, r.default.loadAudioClip(t)] : [3, 2] : [2];
								case 1:
									c = n.sent(), cc.audioEngine.play(c, !1, o), n.label = 2;
								case 2:
									return [2]
							}
						})
					})
				}, e.prototype.slientSFX = function() {
					this.setSFXVolume(0)
				}, e.prototype.recoverSFX = function() {
					this.setSFXVolume(1)
				}, e.prototype.setBGMVolume = function(t) {
					s.default.set("bgmVolume", t), this.xSet("bgmVolume", t), -1 != this.bgmHandle && cc.audioEngine.setVolume(this.bgmHandle, t)
				}, e.prototype.setSFXVolume = function(t) {
					s.default.set("sfxVolume", t), this.xSet("sfxVolume", t), -1 != this.bgmHandle && cc.audioEngine.setEffectsVolume(t)
				}, e.prototype.pauseAll = function() {
					i.default.info("\u58f0\u97f3\u6682\u505c"), cc.audioEngine.pauseAll()
				}, e.prototype.resumeAll = function() {
					i.default.info("\u58f0\u97f3\u6062\u590d"), cc.audioEngine.resumeAll()
				}, e.prototype.stopAll = function() {
					i.default.info("\u58f0\u97f3\u5173\u95ed"), cc.audioEngine.stopAll()
				}, e.prototype.stopAllEffects = function() {
					i.default.info("\u97f3\u6548\u5173\u95ed"), cc.audioEngine.stopAllEffects()
				}, e = __decorate([n], e)
			}(a.default);
		o.default = h, cc._RF.pop()
	}, {
		"./Caches": "Caches",
		"./Log": "Log",
		"./Utils": "Utils",
		"./kernels/Props": "Props"
	}],
	Caches: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "f1544SMU/NO26quJweu+WAK", "Caches"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("./Log"),
			n = function() {
				function t() {
					var e = new Date;
					c.default.info("\u542f\u52a8\u65e5\u671f:%s", e.toGMTString()), t.set("date_launch", e.getTime()), null == t.get("bgmusic") && t.set("bgmusic", !0), null == t.get("sounds") && t.set("sounds", !0), c.default.info("\u521d\u59cb\u5316\u7f13\u5b58\u7ba1\u7406\u6210\u529f!")
				}
				return t.prototype.destroy = function() {
					var e = new Date;
					t.storage.setItem("date_exit", e.getTime()), c.default.info("\u5173\u95ed\u65e5\u671f:%s", e.toGMTString())
				}, t.get = function(t, e) {
					void 0 === e && (e = "");
					var o = this.storage.getItem(t);
					return o = null == o || "" == o ? e : JSON.parse(o)
				}, t.getInt = function(e, o) {
					void 0 === o && (o = 0);
					var c = t.storage.getItem(e);
					return c = null == c || "" == c ? o : parseInt(c)
				}, t.getFloat = function(e, o) {
					void 0 === o && (o = 0);
					var c = t.storage.getItem(e);
					return "string" != typeof c || "" == c ? o : parseFloat(c)
				}, t.set = function(e, o) {
					return "object" == typeof o && (o = JSON.stringify(o)), t.storage.setItem(e, o), c.default.info("\u7f13\u5b58\u66f4\u65b0:%s -> %s", e, o), !0
				}, t.del = function(e) {
					return t.storage.removeItem(e), c.default.info("\u7f13\u5b58\u5220\u9664:%s", e), !0
				}, t.storage = cc.sys.localStorage, t
			}();
		o.default = n, cc._RF.pop()
	}, {
		"./Log": "Log"
	}],
	GameData: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2f990hCjzhIkpc+7KQ8xuB3", "GameData"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("./common/kernels/Props"),
			n = t("./common/Log"),
			a = cc._decorator,
			i = a.ccclass,
			s = (a.property, function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.initData(), e
				}
				return __extends(e, t), e.prototype.initData = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							return n.default.info("\u521d\u59cb\u5316\u6570\u636e\u7ba1\u7406\u6210\u529f!"), [2]
						})
					})
				}, e = __decorate([i], e)
			}(c.default));
		o.default = s, cc._RF.pop()
	}, {
		"./common/Log": "Log",
		"./common/kernels/Props": "Props"
	}],
	GameManager: [function(t, e, o) {
		"use strict";
		var c;
		cc._RF.push(e, "3ac26/NxLhP9IdJRaOgju8x", "GameManager");
		var n = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(t("./GameSys"));

		function a(t, e, o) {
			return e in t ? Object.defineProperty(t, e, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = o, t
		}
		cc.Class({
			extends: cc.Component,
			properties: (c = {
				bgmClip: {
					type: cc.AudioClip,
					default: null
				},
				s_OK: {
					type: cc.AudioClip,
					default: null
				},
				s_cl6_7_11: {
					type: cc.AudioClip,
					default: null
				},
				s_cl1: {
					type: cc.AudioClip,
					default: null
				},
				s_cl2: {
					type: cc.AudioClip,
					default: null
				},
				s_cl3: {
					type: cc.AudioClip,
					default: null
				},
				s_cl4: {
					type: cc.AudioClip,
					default: null
				},
				s_cl5: {
					type: cc.AudioClip,
					default: null
				},
				s_cl6: {
					type: cc.AudioClip,
					default: null
				},
				s_cl7: {
					type: cc.AudioClip,
					default: null
				},
				s_cl8: {
					type: cc.AudioClip,
					default: null
				},
				s_cl9: {
					type: cc.AudioClip,
					default: null
				},
				s_cl10: {
					type: cc.AudioClip,
					default: null
				},
				s_cl11: {
					type: cc.AudioClip,
					default: null
				},
				s_cl12: {
					type: cc.AudioClip,
					default: null
				},
				s_hummer: {
					type: cc.AudioClip,
					default: null
				},
				s_door_open: {
					type: cc.AudioClip,
					default: null
				},
				s_get: {
					type: cc.AudioClip,
					default: null
				},
				s_x: {
					type: cc.AudioClip,
					default: null
				},
				s_go1_4: {
					type: cc.AudioClip,
					default: null
				},
				s_guitar: {
					type: cc.AudioClip,
					default: null
				},
				s_ballon: {
					type: cc.AudioClip,
					default: null
				},
				s_locker: {
					type: cc.AudioClip,
					default: null
				},
				s_open: {
					type: cc.AudioClip,
					default: null
				},
				s_go6_8: {
					type: cc.AudioClip,
					default: null
				},
				s_poster: {
					type: cc.AudioClip,
					default: null
				},
				s_key_drop: {
					type: cc.AudioClip,
					default: null
				},
				s_booo: {
					type: cc.AudioClip,
					default: null
				},
				s_go7: {
					type: cc.AudioClip,
					default: null
				},
				s_dont_open: {
					type: cc.AudioClip,
					default: null
				},
				s_exclam: {
					type: cc.AudioClip,
					default: null
				}
			}, a(c, "s_go6_8", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani3_4", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_boss", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani5_6", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_go2", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_key_drop", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_rain", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_thunder", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_set", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_g09", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_go3_12", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_go10", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani7", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_rod", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani8", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_cream", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_TV", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_go5", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_camera", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_go11", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_cat", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_dog", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_mouse", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani9", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_pond", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_mat", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani1", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_rock", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_escape", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_damage", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_ani2", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_dead", {
				type: cc.AudioClip,
				default: null
			}), a(c, "s_close", {
				type: cc.AudioClip,
				default: null
			}), a(c, "Sound_s_OK", {
				type: cc.AudioClip,
				default: null
			}), c),
			onLoad: function() {
				0 != n.default.gameState ? (cc.Stage_data = new Uint32Array(30), cc.Item_data = new Uint32Array(34), cc.Stage_RCN = new Uint32Array(30), this.initData(), cc.PlatFormID = "pc") : cc.director.loadScene("loading")
			},
			initData: function() {
				cc.bgmClip = this.bgmClip, cc.Config_data = new cc.Object, cc.Config_data.soundon = cc.sys.localStorage.getItem("sound"), -1 != cc.Config_data.soundon && 1 != cc.Config_data.soundon && (cc.Config_data.soundon = 1), cc.maxStg = 0, cc.nextGetIndex = 0, cc.InterNum = 0;
				for (var t = 0; t < cc.Stage_data.length; t++) cc.Stage_data[t] = cc.sys.localStorage.getItem("stage" + t), 0 == cc.Stage_data[t] && 0 == cc.maxStg && (cc.maxStg = t, cc.log("maxstg:" + cc.maxStg));
				for (t = 0; t < cc.Stage_RCN.length; t++) cc.Stage_RCN[t] = cc.sys.localStorage.getItem("srcn" + t);
				console.log("cc.Stage_RCN", cc.Stage_RCN), cc.nextClick = 0, console.log("Số lần nhấp tích lũy hiện tại ở cấp độ tiếp theo", cc.nextClick), cc.log("stage_data", cc.Stage_data);
				for (t = 1; t <= cc.Item_data.length; t++) cc.Item_data[t] = cc.sys.localStorage.getItem("item" + t);
				cc.Const_data = new cc.Object, cc.needLoadStage = 0, cc.isFreshOver = cc.sys.localStorage.getItem("freshover"), this.initItemData(), this.initClearPicData(), this.initSoundData(), this.initHintData(), this.initNaviData(), cc.MyTool.playMusic(0)
			},
			initNaviData: function() {
				cc.NavaData = new cc.Object, cc.NavaData.Appid = new String(2), cc.NavaData.Appid[1] = "wxc1b5d81e4dad1efe", cc.NavaData.Appid[2] = "wx10fe1ed424d064dd"
			},
			initHintData: function() {
				cc.videoChange = 0, cc.HintLock = new Uint32Array(250), cc.Const_data.HintData = new String(250), cc.Const_data.HintDataNum = new Uint32Array(25), cc.Const_data.HintData[11] = "Có chìa khóa ẩn ở đâu đó?", cc.HintLock[11] = cc.sys.localStorage.getItem("hint11"), cc.Const_data.HintDataNum[1] = 1, cc.Const_data.HintData[21] = "Mang chìa khóa đến đây", cc.HintLock[21] = cc.sys.localStorage.getItem("hint21"), cc.Const_data.HintData[22] = "Có vẻ như chìa khóa có thể được lấy bằng cần câu", cc.HintLock[22] = cc.sys.localStorage.getItem("hint22"), cc.Const_data.HintDataNum[2] = 2, cc.Const_data.HintData[31] = "Có thể có chìa khóa ở những nơi bạn không mong đợi", cc.HintLock[31] = cc.sys.localStorage.getItem("hint31"), cc.Const_data.HintData[32] = "Bạn không nghĩ rằng trang trí Tanabata là kỳ lạ?", cc.HintLock[32] = cc.sys.localStorage.getItem("hint32"), cc.Const_data.HintDataNum[3] = 2, cc.Const_data.HintData[41] = "Hãy cho mọi người chuối và mọi thứ sẽ đơn giản và rõ ràng", cc.HintLock[41] = cc.sys.localStorage.getItem("hint41"), cc.Const_data.HintData[42] = "Chỉ có hai nhà vệ sinh, cả hai đều đang được sử dụng bởi những người khác. Phần còn lại sẽ đi về đâu?", cc.HintLock[42] = cc.sys.localStorage.getItem("hint42"), cc.Const_data.HintData[43] = "Hãy để ông chủ ăn chuối cuối cùng", cc.HintLock[43] = cc.sys.localStorage.getItem("hint43"), cc.Const_data.HintDataNum[4] = 3, cc.Const_data.HintData[51] = "Dấu vết này trên tường có phải là thứ đã được treo trước đó không?", cc.HintLock[51] = cc.sys.localStorage.getItem("hint51"), cc.Const_data.HintData[52] = "Để lấy chìa khóa mà không cần đến gần ông chủ, bạn cần sử dụng cần câu", cc.HintLock[52] = cc.sys.localStorage.getItem("hint52"), cc.Const_data.HintDataNum[5] = 2, cc.Const_data.HintData[61] = "Trong 3 viên đá này, phải có một viên cho phép bạn trốn thoát.", cc.HintLock[61] = cc.sys.localStorage.getItem("hint61"), cc.Const_data.HintDataNum[6] = 1, cc.Const_data.HintData[71] = "Chiếc tủ nào độc lạ hơn?", cc.HintLock[71] = cc.sys.localStorage.getItem("hint71"), cc.Const_data.HintData[72] = "Mời các bạn xem qua tấm áp phích", cc.HintLock[72] = cc.sys.localStorage.getItem("hint72"), cc.Const_data.HintDataNum[7] = 2, cc.Const_data.HintData[81] = "Dù sao, hãy gỡ bỏ tất cả các hình nền", cc.HintLock[81] = cc.sys.localStorage.getItem("hint81"), cc.Const_data.HintDataNum[8] = 1, cc.Const_data.HintData[91] = "Nếu đó là trường hợp khẩn cấp, người giám sát của bạn sẽ cho phép bạn nghỉ làm", cc.HintLock[91] = cc.sys.localStorage.getItem("hint91"), cc.Const_data.HintData[92] = "Muốn giả bộ bị trọng thương, nhất định phải dựa vào một ít gia vị", cc.HintLock[92] = cc.sys.localStorage.getItem("hint92"), cc.Const_data.HintDataNum[9] = 2, cc.Const_data.HintData[101] = "Hãy nhìn kỹ bức tường", cc.HintLock[101] = cc.sys.localStorage.getItem("hint101"), cc.Const_data.HintData[102] = "Sau khi bình tĩnh lại, bạn có nhìn thấy gì gần đó không?", cc.HintLock[102] = cc.sys.localStorage.getItem("hint102"), cc.Const_data.HintData[103] = "Trước khi mở cánh cửa tiếp theo, hãy nhìn xung quanh", cc.HintLock[103] = cc.sys.localStorage.getItem("hint103"), cc.Const_data.HintDataNum[10] = 3, cc.Const_data.HintData[111] = "Ông chủ trước cửa thực sự là một quả bóng bay...? Hãy để anh ta phá vỡ nó và cánh cửa sẽ mở ra.", cc.HintLock[111] = cc.sys.localStorage.getItem("hint111"), cc.Const_data.HintData[112] = "Muốn giấu một cái cây, hãy để nó trong rừng. Muốn giấu một âm thanh, phải dùng âm thanh to hơn để lấn át nó.", cc.HintLock[112] = cc.sys.localStorage.getItem("hint112"), cc.Const_data.HintDataNum[11] = 2, cc.Const_data.HintData[121] = "Thuyết phục họ bằng thứ họ thích.", cc.HintLock[121] = cc.sys.localStorage.getItem("hint121"), cc.Const_data.HintData[122] = "Hãy suy nghĩ về thứ tự mà bạn đặt hai.", cc.HintLock[122] = cc.sys.localStorage.getItem("hint122"), cc.Const_data.HintDataNum[12] = 2, cc.Const_data.HintData[131] = "Thùng carton, tôi có thể sử dụng nó ở đâu?", cc.HintLock[131] = cc.sys.localStorage.getItem("hint131"), cc.Const_data.HintData[132] = "Sắp đến giờ nhân viên lấy hàng rồi.", cc.HintLock[132] = cc.sys.localStorage.getItem("hint132"), cc.Const_data.HintDataNum[13] = 2, cc.Const_data.HintData[141] = "Boss ngủ quên...thử nhấp vào anh ta.", cc.HintLock[141] = cc.sys.localStorage.getItem("hint141"), cc.Const_data.HintData[142] = "Ném ông chủ khó chịu của bạn vào bồn tắm!", cc.HintLock[142] = cc.sys.localStorage.getItem("hint142"), cc.Const_data.HintDataNum[14] = 2, cc.Const_data.HintData[151] = "Ông chủ đội tóc giả, theo gió thổi bay đi.", cc.HintLock[151] = cc.sys.localStorage.getItem("hint151"), cc.Const_data.HintData[152] = "Hãy để thời tiết bên ngoài thay đổi trước.", cc.HintLock[152] = cc.sys.localStorage.getItem("hint152"), cc.Const_data.HintData[153] = "Khi trời mưa, hãy cẩn thận mở cửa sổ một lần nữa.", cc.HintLock[153] = cc.sys.localStorage.getItem("hint153"), cc.Const_data.HintDataNum[15] = 3, cc.Const_data.HintData[161] = "Tấm áp phích đó có phải là gia phả không? Tuy nhiên, có vẻ như thiếu một người.", cc.HintLock[161] = cc.sys.localStorage.getItem("hint161"), cc.Const_data.HintDataNum[16] = 1, cc.Const_data.HintData[171] = "Có ai đang tìm kính không?", cc.HintLock[171] = cc.sys.localStorage.getItem("hint171"), cc.Const_data.HintData[172] = "Không làm được cái gì, chạy khỏi cửa sổ?", cc.HintLock[172] = cc.sys.localStorage.getItem("hint172"), cc.Const_data.HintDataNum[17] = 2, cc.Const_data.HintData[181] = "Đó là một người rơm kỳ lạ, nó ở tư thế giống như một nữ nhân viên.", cc.HintLock[181] = cc.sys.localStorage.getItem("hint181"), cc.Const_data.HintData[182] = "Có lối thoát nào khác ngoài một cánh cửa không?", cc.HintLock[182] = cc.sys.localStorage.getItem("hint182"), cc.Const_data.HintData[183] = "Dùng dây thừng trốn đi!", cc.HintLock[183] = cc.sys.localStorage.getItem("hint183"), cc.Const_data.HintDataNum[18] = 3, cc.Const_data.HintData[191] = "Cái TV đó thực sự không chiếu gì sao?", cc.HintLock[191] = cc.sys.localStorage.getItem("hint191"), cc.Const_data.HintData[192] = "Nhìn một chút màn hình TV, trong đó sẽ xuất hiện cái gì?", cc.HintLock[192] = cc.sys.localStorage.getItem("hint192"), cc.Const_data.HintDataNum[19] = 2, cc.Const_data.HintData[201] = "Chìa khoá hình như giấu ở đâu?", cc.HintLock[201] = cc.sys.localStorage.getItem("hint201"), cc.Const_data.HintData[202] = "Kỳ quái, trước đây đã từng có cấp độ lâu như vậy sao?", cc.HintLock[202] = cc.sys.localStorage.getItem("hint202"), cc.Const_data.HintData[203] = "Công ty cấm hẹn hò, phải để lại bằng chứng...", cc.HintLock[203] = cc.sys.localStorage.getItem("hint203"), cc.Const_data.HintDataNum[20] = 3, cc.Const_data.HintData[211] = "Bên cạnh cửa áp phích trên, có cái gì dấu ấn...", cc.HintLock[211] = cc.sys.localStorage.getItem("hint211"), cc.Const_data.HintData[212] = "Thật là một tấm áp phích và tấm chăn đáng kinh ngạc. Không biết điều gì sẽ thay đổi, chỉ cần nhìn chằm chằm vào nó một lúc.", cc.HintLock[212] = cc.sys.localStorage.getItem("hint212"), cc.Const_data.HintData[213] = "Các blot có hai, chứng tỏ bạn có thể nhận được hai điều.", cc.HintLock[213] = cc.sys.localStorage.getItem("hint213"), cc.Const_data.HintDataNum[21] = 3, cc.Const_data.HintData[221] = "Chúng ta hãy làm việc cùng nhau để nhổ củ cà rốt lớn này", cc.HintLock[221] = cc.sys.localStorage.getItem("hint221"), cc.Const_data.HintData[222] = "Đơn đặt hàng...có vẻ như là cái lớn đang đứng trước mặt", cc.HintLock[222] = cc.sys.localStorage.getItem("hint222"), cc.Const_data.HintDataNum[22] = 2, cc.Const_data.HintData[231] = "Một cái gì đó dường như nổi lên từ hồ bơi.", cc.HintLock[231] = cc.sys.localStorage.getItem("hint231"), cc.Const_data.HintData[232] = "Quay đi quay lại để nhìn vào hồ bơi đó thêm vài lần nữa. Có thể thay đổi.", cc.HintLock[232] = cc.sys.localStorage.getItem("hint232"), cc.Const_data.HintData[233] = "Để lấy chìa khóa, bạn cần phải...", cc.HintLock[233] = cc.sys.localStorage.getItem("hint233"), cc.Const_data.HintDataNum[23] = 3, cc.Const_data.HintData[241] = "Hãy thử dùng logo xoay", cc.HintLock[241] = cc.sys.localStorage.getItem("hint241"), cc.Const_data.HintData[242] = "Hãy để nhân vật và thú nhồi bông quay mặt về cùng hướng với rãnh chữ C", cc.HintLock[242] = cc.sys.localStorage.getItem("hint242"), cc.Const_data.HintDataNum[24] = 2
			},
			initClearPicData: function() {
				cc.Const_data.ClearData = new Uint32Array(31), cc.Const_data.ClearData[1] = 1, cc.Const_data.ClearData[2] = 1, cc.Const_data.ClearData[3] = 1, cc.Const_data.ClearData[4] = 1, cc.Const_data.ClearData[5] = 1, cc.Const_data.ClearData[6] = 2, cc.Const_data.ClearData[7] = 2, cc.Const_data.ClearData[8] = 3, cc.Const_data.ClearData[9] = 1, cc.Const_data.ClearData[10] = 1, cc.Const_data.ClearData[11] = 4, cc.Const_data.ClearData[12] = 5, cc.Const_data.ClearData[13] = 6, cc.Const_data.ClearData[14] = 1, cc.Const_data.ClearData[15] = 1, cc.Const_data.ClearData[16] = 7, cc.Const_data.ClearData[17] = 8, cc.Const_data.ClearData[18] = 9, cc.Const_data.ClearData[19] = 10, cc.Const_data.ClearData[20] = 1, cc.Const_data.ClearData[21] = 9, cc.Const_data.ClearData[22] = 11, cc.Const_data.ClearData[23] = 12, cc.Const_data.ClearData[24] = 1
			},
			initItemData: function() {
				cc.Const_data.POP_ITEM_KEY = "m05_key_pop", cc.Const_data.POP_ITEM_UMBRELLA = "m13_umbrella_pop", cc.Const_data.POP_ITEM_CLUB = "m14_club_pop", cc.Const_data.POP_ITEM_REMOCON = "m20_remocon_pop", cc.Const_data.POP_ITEM_REMOCON2 = "m96_remocon2_pop", cc.Const_data.POP_ITEM_HERA = "m19_hera_pop", cc.Const_data.POP_ITEM_DRINK = "m15_drink_pop", cc.Const_data.POP_ITEM_PAPER1 = "m10_paper2_pop", cc.Const_data.POP_ITEM_PAPER2 = "m10_paper3_pop", cc.Const_data.POP_ITEM_COIN = "m36_100yen_pop", cc.Const_data.POP_ITEM_ONION = "m45_onion_pop", cc.Const_data.POP_ITEM_NEKOCAN = "m46_feed_pop", cc.Const_data.POP_ITEM_NEKOJARASI = "m38_neko_pop", cc.Const_data.POP_ITEM_ZURA = "m28_hairpiece_pop", cc.Const_data.POP_ITEM_NATA = "m58_nata_pop", cc.Const_data.POP_ITEM_KAGUYA = "m63_kaguya_pop", cc.Const_data.POP_ITEM_TEA = "m66_tea_pop", cc.Const_data.POP_ITEM_DANGO = "m67_dango_pop", cc.Const_data.POP_ITEM_WATER = "m70_water_pop", cc.Const_data.POP_ITEM_BIER = "m71_beer_pop", cc.Const_data.POP_ITEM_BOOK = "m177_book_pop", cc.Const_data.POP_ITEM_MOHIKAN = "m73_mohawk_pop", cc.Const_data.POP_ITEM_CLOTH = "m79_cloth_pop", cc.Const_data.POP_ITEM_DEVIL = "c44_majin1_pop", cc.Const_data.POP_ITEM_STEP = "m213_step_pop", cc.Const_data.POP_ITEM_NET = "m80_net_pop", cc.Const_data.POP_ITEM_FISHINGNET = "m111_fishing_pop", cc.Const_data.POP_ITEM_SPIDER = "m81_spider1_pop", cc.Const_data.POP_ITEM_ORANGE = "m93_orange_pop", cc.Const_data.POP_ITEM_SPOON = "m97_spoon_pop", cc.Const_data.POP_ITEM_HERO_GLASS = "m98_glasses_pop", cc.Const_data.POP_ITEM_HERO = "c50_hero_pop", cc.Const_data.POP_ITEM_BOSS18 = "c55_boss18_pop", cc.Const_data.POP_ITEM_BLUE_LENS = "m104_lens2_pop", cc.Const_data.POP_ITEM_RED_LENS = "m103_lens1_pop", cc.Const_data.POP_ITEM_FRAME = "m102_frame_pop", cc.Const_data.POP_ITEM_3D_GLASS = "m105_3dglasses_pop", cc.Const_data.POP_ITEM_PUMP = "m116_pump_pop", cc.Const_data.POP_ITEM_KAME = "m122_snapping_pop", cc.Const_data.POP_ITEM_FISHBONE = "m124_bone_pop", cc.Const_data.POP_ITEM_FISHFOOD = "m123_bait_pop", cc.Const_data.POP_ITEM_ROD = "m88_rod1_pop", cc.Const_data.POP_ITEM_FISH = "m125_fish_pop", cc.Const_data.POP_ITEM_RECORD1 = "m128_record1_pop", cc.Const_data.POP_ITEM_RECORD2 = "m129_record2_pop", cc.Const_data.POP_ITEM_RECORD3 = "m130_record3_pop", cc.Const_data.POP_ITEM_RECORD4 = "m131_record4_pop", cc.Const_data.POP_ITEM_COIN10 = "m144_10yen_pop", cc.Const_data.POP_ITEM_COIN50 = "m143_50yen_pop", cc.Const_data.POP_ITEM_JUICE1 = "m147_juice1_pop", cc.Const_data.POP_ITEM_JUICE2 = "m148_juice2_pop", cc.Const_data.POP_ITEM_SCISSOR = "m155_scissors_pop", cc.Const_data.POP_ITEM_ROPE = "m154_rope2_pop", cc.Const_data.POP_ITEM_SNOWMAN = "m161_snowman1_pop", cc.Const_data.POP_ITEM_BUCKET1 = "m164_bucket1_pop", cc.Const_data.POP_ITEM_BUCKET2 = "m165_bucket2_pop", cc.Const_data.POP_ITEM_HAMMER = "m215_hummer_pop", cc.Const_data.POP_ITEM_TOBACCO = "m169_tabaco_pop", cc.Const_data.POP_ITEM_BANANA = "m178_banana_pop", cc.Const_data.POP_ITEM_ZABUTON = "m176_cushion_pop", cc.Const_data.POP_ITEM_FLOWER = "m189_flower3_pop", cc.Const_data.POP_ITEM_VASE = "m186_vase1_pop", cc.Const_data.POP_ITEM_SPACESUIT = "m196_spacesuit_pop", cc.Const_data.POP_ITEM_ROCKET1 = "m191_rocket1_pop", cc.Const_data.POP_ITEM_ROCKET2 = "m192_rocket2_pop", cc.Const_data.POP_ITEM_ROCKET3 = "m193_rocket3_pop", cc.Const_data.POP_ITEM_ROCKET4 = "m194_rocket4_pop", cc.Const_data.POP_ITEM_ROCKET5 = "m195_rocket5_pop", cc.Const_data.POP_ITEM_DRIVER = "m203_driver_pop", cc.Const_data.POP_ITEM_IMPORTANT = "m207_picture_pop"
			},
			initSoundData: function() {
				cc.Const_data.Sound = new Array(100), cc.Const_data.Sound_s_damage = this.s_damage, cc.Const_data.Sound_s_dead = this.s_dead, cc.Const_data.Sound_s_exclam = this.s_exclam, cc.Const_data.Sound_s_x = this.s_x, cc.Const_data.Sound_s_set = this.s_set, cc.Const_data.Sound_s_thunder = this.s_thunder, cc.Const_data.Sound_s_balloon = this.s_ballon, cc.Const_data.Sound_s_booo = this.s_booo, cc.Const_data.Sound_s_boss = this.s_boss, cc.Const_data.Sound_s_camera = this.s_camera, cc.Const_data.Sound_s_cat = this.s_cat, cc.Const_data.Sound_s_cl1 = this.s_cl1, cc.Const_data.Sound_s_cl2 = this.s_cl2, cc.Const_data.Sound_s_cl3 = this.s_cl3, cc.Const_data.Sound_s_cl4 = this.s_cl4, cc.Const_data.Sound_s_cl5 = this.s_cl5, cc.Const_data.Sound_s_cl6_7_11 = this.s_cl6_7_11, cc.Const_data.Sound_s_cl8 = this.s_cl8, cc.Const_data.Sound_s_cl9 = this.s_cl9, cc.Const_data.Sound_s_cl10 = this.s_cl10, cc.Const_data.Sound_s_cl12 = this.s_cl12, cc.Const_data.Sound_s_close = this.s_close, cc.Const_data.Sound_s_dog = this.s_dog, cc.Const_data.Sound_s_dont_open = this.s_dont_open, cc.Const_data.Sound_s_door_open = this.s_door_open, cc.Const_data.Sound_s_escape = this.s_escape, cc.Const_data.Sound_s_get = this.s_get, cc.Const_data.Sound_s_go1_4 = this.s_go1_4, cc.Const_data.Sound_s_go2 = this.s_go2, cc.Const_data.Sound_s_go3_12 = this.s_go3_12, cc.Const_data.Sound_s_go5 = this.s_go5, cc.Const_data.Sound_s_go6_8 = this.s_go6_8, cc.Const_data.Sound_s_go7 = this.s_go7, cc.Const_data.Sound_s_go9 = this.s_go9, cc.Const_data.Sound_s_go10 = this.s_go10, cc.Const_data.Sound_s_go11 = this.s_go11, cc.Const_data.Sound_s_hummer = this.s_hummer, cc.Const_data.Sound_s_key_drop = this.s_key_drop, cc.Const_data.Sound_s_locker = this.s_locker, cc.Const_data.Sound_s_mat = this.s_mat, cc.Const_data.Sound_s_mouse = this.s_mouse, cc.Const_data.Sound_s_OK = this.s_OK, cc.Const_data.Sound_s_open = this.s_open, cc.Const_data.Sound_s_poster = this.s_poster, cc.Const_data.Sound_s_rain = this.s_rain, cc.Const_data.Sound_s_rock = this.s_rock, cc.Const_data.Sound_s_rod = this.s_rod, cc.Const_data.Sound_s_ani10 = this.s_ani10, cc.Const_data.Sound_s_ani1 = this.s_ani1, cc.Const_data.Sound_s_ani2 = this.s_ani2, cc.Const_data.Sound_s_ani3_4 = this.s_ani3_4, cc.Const_data.Sound_s_ani5_6 = this.s_ani5_6, cc.Const_data.Sound_s_ani7 = this.s_ani7, cc.Const_data.Sound_s_ani8 = this.s_ani8, cc.Const_data.Sound_s_ani9 = this.s_ani9, cc.Const_data.Sound_s_guitar = this.s_guitar, cc.Const_data.Sound_s_TV = this.s_TV, cc.Const_data.Sound_s_pond = this.s_pond
			}
		}), cc._RF.pop()
	}, {
		"./GameSys": "GameSys"
	}],
	GameSys: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "24d3eUHytxHSqnq+MJaIj6j", "GameSys"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("./Game"),
			n = t("./common/Audio"),
			a = cc._decorator,
			i = a.ccclass,
			s = (a.property, function() {
				function t() {}
				var e;
				return e = t, t.init = function() {
					var t = this;
					e.gameState = 1, e.game = new c.default, e.audio = new n.default;
					return __awaiter(t, void 0, void 0, function() {
							return __generator(this, function(t) {
								return o.remain && (e.videoTime = o.remain), [2]
								console.log("3333");
							})
							console.log("4444");
						})
					/* window.h5api.canPlayAd(function(o) {
						return __awaiter(t, void 0, void 0, function() {
							return __generator(this, function(t) {
								return o.remain && (e.videoTime = o.remain), [2]
							})
						})
					}) */
					console.log("2222");
				}, t.reduceVideoTime = function() {
					e.videoTime--, e.videoTime <= 0 && e.game.xSet("changeVideoProps", !1)
				}, t.gameState = 0, t.videoTime = 0, t.nowStage = 0, t.game = null, t.audio = null, t = e = __decorate([i], t)
				console.log("1111");
			}());
		o.default = s, cc._RF.pop()
	}, {
		"./Game": "Game",
		"./common/Audio": "Audio"
	}],
	Game: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "f59c5a5yalDGavq6q6us8B/", "Game"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("./common/kernels/Props"),
			n = cc._decorator,
			a = n.ccclass,
			i = (n.property, function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.xSet("changeVideoProps", null, !1), e
				}
				return __extends(e, t), e = __decorate([a], e)
			}(c.default));
		o.default = i, cc._RF.pop()
	}, {
		"./common/kernels/Props": "Props"
	}],
	HelloWorld: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld"), cc.Class({
			extends: cc.Component,
			toMenu: function() {
				cc.MyTool.btnClick(), cc.director.loadScene("Menu")
			},
			onTouchBox: function() {
				SDK.xSet("createAppBox")
			},
			onTouchBox1: function() {
				var t = qq.createAppBox({
					adUnitId: "be8aba69a7642ac0670b519995ca7f3a"
				});
				t.load().then(function() {
					t.show()
				})
			},
			toItem: function() {
				cc.MyTool.btnClick(), cc.director.loadScene("Item")
			},
			toDownload: function() {
				cc.MyTool.btnClick(), cc.sys.openURL("https://hf.gamecenter.vivo.com.cn/gameweb/index.html#/download?id=62102")
			},
			update: function(t) {}
		}), cc._RF.pop()
	}, {}],
	HowToManager: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "cfd074w2PRMWq43tKYMT3j7", "HowToManager"), cc.Class({
			extends: cc.Component,
			properties: {
				howToPanel: cc.Node,
				howToPic: cc.Node,
				howToPic2: cc.Node,
				nxtBtn: cc.Node,
				endBtn: cc.Node,
				imgKey: cc.Node,
				imgFinger: cc.Node,
				imgKeyDest: cc.Node,
				imgFingerDest: cc.Node,
				nxtPhase: cc.Integer,
				canTouch: cc.Boolean,
				tipLabel: cc.Label
			},
			onLoad: function() {
				this.nxtPhase = 0, this.canTouch = !0
			},
			onTapNxt: function() {
				if (this.canTouch) {
					if (0 == this.nxtPhase) {
						this.canTouch = !1;
						var t = cc.sequence(cc.rotateTo(.5, -30), cc.callFunc(function() {
							this.imgKey.active = !1, this.imgKeyDest.active = !0, this.canTouch = !0, this.nxtPhase++
						}, this));
						this.imgFinger.runAction(t)
					}
					if (1 == this.nxtPhase) {
						this.tipLabel.string = "Chạm vật phẩm để sử dụng!", this.canTouch = !1, this.imgFinger.active = !1, this.imgFingerDest.active = !0;
						t = cc.sequence(cc.moveTo(1, cc.v2(-30, 150)), cc.callFunc(function() {
							this.nxtPhase++, this.nxtBtn.active = !1, this.endBtn.active = !0, this.howToPic.active = !1, this.howToPic2.active = !0, this.canTouch = !0, this.imgKeyDest.active = !1
						}, this));
						this.imgKeyDest.runAction(t)
					}
				}
			},
			onTapExit: function() {
				this.canTouch && (this.howToPanel.active = !1, cc.sys.localStorage.setItem("freshover", 1), cc.isFreshOver = cc.sys.localStorage.getItem("freshover"))
			}
		}), cc._RF.pop()
	}, {}],
	Http: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "06b37BgPExIJ5clJ2qc5rWT", "Http"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = (c.property, t("../kernels/Props")),
			i = t("../Log"),
			s = t("./eCode"),
			r = function(t) {
				function e() {
					var e = t.call(this) || this;
					return e.onlineAdress = "", e.mId = 0, e.timeOut = 5e3, e.appVersion = "1.0.0", e
				}
				return __extends(e, t), e.prototype.isonline = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t = this;
						return __generator(this, function(e) {
							return [2, new Promise(function(e, o) {
								t._request("GET", "https://www.baidu.com", {}, function(t, o) {
									i.default.info("\u7f51\u7edc\u8fde\u63a5:%s", t ? "\u6b63\u5e38" : "\u4e0d\u901a"), e(t)
								}, function(t) {
									o(t)
								})
							})]
						})
					})
				}, e.prototype.get = function(t, e) {
					var o = this;
					return new Promise(function(c, n) {
						if (t.indexOf("http") >= 0) return i.default.error("\u53c2\u6570\u6709\u8bef \u53ea\u80fd\u5199\u8bbf\u95ee\u8def\u5f84\u4e0d\u80fd\u5199\u5b8c\u6574\u7684\u8bbf\u95ee\u5730\u5740"), void n(s.default.Error);
						var a = "";
						for (var r in e) "" == a ? a = "?" : a += "&", Array.isArray(e[r]) || "object" == typeof e[r] ? a += r + "=" + JSON.stringify(e[r]) : a += r + "=" + e[r];
						var h = o.onlineAdress + t + a;
						o._request("GET", h, {}, function(t) {
							c(t)
						}, function(t) {
							n(t)
						})
					})
				}, e.prototype.post = function(t, e) {
					var o = this;
					return new Promise(function(c, n) {
						if (t.indexOf("http") >= 0) n(s.default.Error);
						else {
							var a = o.onlineAdress + t;
							o._request("POST", a, e, function(t) {
								c(t)
							}, function(t) {
								n(t)
							})
						}
					})
				}, e.prototype._request = function(t, e, o, c, n) {
					var a = function(t) {
							i.default.error("error" + t), n(t)
						},
						r = cc.loader.getXMLHttpRequest();
					return r.mId = ++this.mId, r.onerror = function() {
						i.default.warn("%s:\u9519\u8bef[%d]", t, r.mId), r.abort(), a(s.default.Error)
					}, r.ontimeout = function() {
						i.default.warn("%s:\u8d85\u65f6[%d]", t, r.mId), r.abort(), a(s.default.TimeOut)
					}, r.onreadystatechange = function() {
						if (4 == r.readyState && 0 != r.status)
							if (r.status >= 200 && r.status < 300) {
								i.default.info("\u5b8c\u6210\u5904\u7406--");
								var e = void 0;
								i.default.info("%s:\u6536\u5230[%d]:%s", t, r.mId, r.responseText);
								try {
									e = JSON.parse(r.responseText)
								} catch (e) {
									return i.default.error("\u89e3\u6790json\u51fa\u9519%s: %s", t, e), void a(s.default.BadJson)
								}
								"object" != typeof e || "number" != typeof e.code || "object" != typeof e.data ? c(e) : e.code == s.default.Ok ? c(e.data) : a(e.code)
							} else i.default.info("%s:\u6536\u5230[%d]:%d", t, r.mId, r.status), 404 == r.status && a(s.default.NotFound)
					}, r.open(t, e, !0), r.setRequestHeader("Access-Control-Allow-Origin", "*"), r.setRequestHeader("Authorization", null), r.setRequestHeader("App-Version", this.appVersion), r.setRequestHeader("Repeated-Submission", (new Date).getTime() + ""), cc.sys.isNative && r.setRequestHeader("Accept-Encoding", "gzip,deflate"), r.timeout = this.timeOut, "POST" == t ? (r.setRequestHeader("Content-Type", "application/json"), r.send(o)) : r.send(), i.default.info("%s[%d]:%s", t, r.mId, e), r
				}, e = __decorate([n], e)
			}(a.default);
		o.default = r, cc._RF.pop()
	}, {
		"../Log": "Log",
		"../kernels/Props": "Props",
		"./eCode": "eCode"
	}],
	ItemCell: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9e773C92xZEg7shGgAQ007o", "ItemCell"), cc.Class({
			extends: cc.Component,
			properties: {
				itemIndex: cc.Integer,
				selfItem: cc.Node,
				itemPic: cc.Node,
				itemPath: cc.String
			},
			onLoad: function() {},
			update: function(t) {}
		}), cc._RF.pop()
	}, {}],
	ItemManager: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9616et279ZLLI+dwWUdnXry", "ItemManager"), cc.Class({
			extends: cc.Component,
			properties: {
				itemPanel: cc.Node,
				itemPic: cc.Node,
				itemPath: cc.String,
				itemList: [cc.Node],
				itemSpriteImage: cc.SpriteFrame,
				stageManager: cc.Node,
				noticeTarget: cc.Node,
				curStage: cc.Integer,
				inUse: [cc.Boolean]
			},
			onLoad: function() {
				cc.nextGetIndex = 0, this.noticeTarget = this.stageManager.getComponent("Stage" + this.curStage + "Action");
				for (var t = 0; t < 5; t++) this.inUse[t] = !1
			},
			onItemGet: function() {
				this.itemPanel.active = !1
			},
			addItemIndex: function() {
				cc.nextGetIndex++
			},
			onUseItemIndex: function(t) {
				this.inUse[t] = !1, cc.nextGetIndex = t, this.setMaxIndex()
			},
			setMaxIndex: function() {
				for (var t = 0; t < 5; t++)
					if (!this.inUse[t]) return cc.nextGetIndex = t, void cc.log("set next index:" + cc.nextGetIndex);
				cc.nextGetIndex = 5
			},
			showGetItem: function(t, e) {
				this.itemPath = e, this.itemPanel.active = !0;
				var o = this;
				cc.loader.loadRes("/popitem/" + this.itemPath, cc.SpriteFrame, function(t, e) {
					cc.log("err:" + t), o.itemPic.getComponent(cc.Sprite).spriteFrame = e
				})
			},
			saveGetItem: function() {
				this.itemPanel.active = !1, this.itemList[cc.nextGetIndex].active = !0, this.noticeTarget.onReciveGotItem(this.itemPath), cc.MyTool.playSE(cc.Const_data.Sound_s_OK), 24 == this.curStage && "m98_ST24_bear_POP" == this.itemPath && (cc.log("bear in"), this.noticeTarget.addBear(this.itemList[cc.nextGetIndex]));
				var t = this;
				cc.loader.loadRes("/popitem/" + this.itemPath, cc.SpriteFrame, function(e, o) {
					cc.log("err:" + e), t.itemList[cc.nextGetIndex].getComponent(cc.Sprite).spriteFrame = o, t.inUse[cc.nextGetIndex] = !0, t.setMaxIndex()
				}), this.itemPic.getComponent(cc.Sprite).spriteFrame = null
			}
		}), cc._RF.pop()
	}, {}],
	ItemPage: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "93aabHpUsdJGLy7/CCA4Elb", "ItemPage");
		var c = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(t("./GameSys"));
		cc.Class({
			extends: cc.Component,
			properties: {
				itemList: [cc.Node]
			},
			onLoad: function() {
				0 != c.default.gameState ? this.enableItems() : cc.director.loadScene("loading")
			},
			toStart: function() {
				cc.MyTool.btnClick(), cc.director.loadScene("helloworld")
			},
			enableItems: function() {
				for (var t = 1; t <= 32; t++) {
					var e = cc.Item_data[t];
					cc.log("isopen:" + t + "open:" + e), this.itemList[t - 1].active = 1 == e
				}
			}
		}), cc._RF.pop()
	}, {
		"./GameSys": "GameSys"
	}],
	Loading: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "46297LO4OhNDI7wfmhQKfDH", "Loading");
		var c = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(t("./GameSys"));
		cc.Class({
			extends: cc.Component,
			onLoad: function() {
				cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT), c.default.init(), cc.director.loadScene("helloworld")
			}
		}), cc._RF.pop()
	}, {
		"./GameSys": "GameSys"
	}],
	Log: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1533cA1bR9Gn7BRY4O3xKxA", "Log"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = 0,
			n = 1,
			a = 2,
			i = 3,
			s = function() {
				function t() {}
				return t.setLevel = function(e) {
					t.level = e
				}, t.debug = function() {
					for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
					t.level == c && t._output(1, t.formatS(e))
				}, t.info = function() {
					for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
					t.level > n || t._output(1, t.formatS(e))
				}, t.warn = function() {
					for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
					t.level > a || t._output(2, t.formatS(e))
				}, t.error = function() {
					for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
					t.level > i || t._output(3, t.formatS(e))
				}, t.getTime = function() {
					var t = new Date;
					return cc.js.formatStr("[%d.%d %d:%d:%d:%d]", t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
				}, t._output = function(e, o) {
					var c = cc.js.formatStr("%s-> %s", t.getTime(), o);
					switch (e) {
						case 2:
							console.warn(c);
							break;
						case 3:
							console.error(c);
							break;
						default:
							console.log(c)
					}
					this.caches.push(c), this.caches.length > this.limit && this.caches.splice(0, 100)
				}, t.formatS = function() {
					for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
					var c = e[0][0];
					return e[0].shift(), (t = cc.js).formatStr.apply(t, [c].concat(e[0]))
				}, t.caches = [], t.level = c, t.limit = 1e3, t
			}();
		o.default = s, cc._RF.pop()
	}, {}],
	MenuManager: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "5740dFD64JE67a3T0kzUX9k", "MenuManager"), cc.Class({
			extends: cc.Component,
			properties: {
				menuPanel: cc.Node,
				soundButton: cc.Node,
				sp_sound_on: cc.SpriteFrame,
				sp_sound_off: cc.SpriteFrame,
				hintPanel: cc.Node
			},
			onLoad: function() {
				this.checkSound()
			},
			onEnable: function() {},
			checkSound: function() {
				var t = this.soundButton.getComponent(cc.Sprite),
					e = this.soundButton.getComponent(cc.Button); - 1 != cc.Config_data.soundon ? (cc.log("soundon"), t.spriteFrame = this.sp_sound_on, e.normalSprite = this.sp_sound_on, e.pressedSprite = this.sp_sound_on) : (cc.log("soundoff"), t.spriteFrame = this.sp_sound_off, e.normalSprite = this.sp_sound_off, e.pressedSprite = this.sp_sound_off)
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onMenuClose: function() {
				cc.MyTool.btnClick(), this.menuPanel.active = !1
			},
			onHintClick: function() {
				cc.MyTool.btnClick(), this.hintPanel.active = !0
			},
			onRetryClick: function() {
				cc.MyTool.btnClick(), cc.audioEngine.stopAllEffects(), cc.needLoadStage = GameSys.nowStage, cc.director.loadScene("Menu")
			},
			onOtherClick: function() {
				cc.MyTool.btnClick(), cc.director.loadScene("Menu")
			},
			onSoundClick: function() {
				-1 != cc.Config_data.soundon ? (cc.Config_data.soundon = -1, cc.MyTool.stopMusic()) : 1 != cc.Config_data.soundon && (cc.Config_data.soundon = 1, cc.MyTool.playMusic(0)), cc.sys.localStorage.setItem("sound", cc.Config_data.soundon), this.checkSound()
			}
		}), cc._RF.pop()
	}, {}],
	Menu: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "dc1dd62ZkFHCbziQ19H6UEM", "Menu");
		var c = a(t("./GameSys")),
			n = a(t("./prefabs/select/selectItem"));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				loadPanel: cc.Node,
				leveltxt: cc.Label,
				pagePanel: cc.PageView,
				page_1: cc.Node,
				page_2: cc.Node,
				selectItemPre: cc.Prefab
			},
			onLoad: function() {
				if (0 != c.default.gameState) {
					for (var t = 0; t < 24; t++)
						if (t < 12) {
							var e = cc.instantiate(this.selectItemPre);
							e.getComponent(n.default).init(t + 1), this.page_1.addChild(e)
						} else {
							var o = cc.instantiate(this.selectItemPre);
							o.getComponent(n.default).init(t + 1), this.page_2.addChild(o)
						} cc.maxStg = 0;
					for (var a = 0; a < cc.Stage_data.length; a++) cc.Stage_data[a] = cc.sys.localStorage.getItem("stage" + a), 0 == cc.Stage_data[a] && 0 == cc.maxStg && (cc.maxStg = a, cc.log("maxstg:" + cc.maxStg));
					cc.maxStg >= 13 && cc.maxStg < 25 && this.pagePanel.scrollToPage(1, 0), cc.audioEngine.stopAllEffects(), cc.MyTool.playMusic(0), cc.log("needStage" + cc.needLoadStage), cc.needLoadStage > 0 && (this.toGame(), cc.needLoadStage = 0)
				} else cc.director.loadScene("loading")
			},
			toStart: function() {
				cc.MyTool.btnClick(), cc.director.loadScene("helloworld")
			},
			toGame: function() {
				this.loadPanel.active = !0, this.leveltxt.string = "Cấp độ " + c.default.nowStage;
				var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
					cc.nextGetIndex = 0, cc.director.loadScene("Stage" + c.default.nowStage)
				}, this));
				this.loadPanel.runAction(t)
			}
		}), cc._RF.pop()
	}, {
		"./GameSys": "GameSys",
		"./prefabs/select/selectItem": "selectItem"
	}],
	MoveCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0b11aRTXARG8bachKfDnJli", "MoveCtrl");
		var c = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}(t("./common/Log"));
		var n = cc.Class({
			extends: cc.Component,
			properties: {
				itemList: [cc.Node],
				initPos: cc.Vec2,
				itemIndex: cc.Integer,
				targetItem: [cc.Node],
				tarPage: [cc.Integer],
				curPage: cc.Integer,
				stageManager: cc.Node,
				noticeTarget: cc.Node,
				curStage: cc.Integer
			},
			hideAllItems: function() {
				for (var t = 0; t < this.targetItem.length; t++) this.itemList[t].active = !1
			},
			resetItem: function() {
				this.itemIndex > 0 && (this.itemList[this.itemIndex - 1].x = this.initPos.x, this.itemList[this.itemIndex - 1].y = this.initPos.y, this.itemIndex = 0)
			},
			manualChangePage: function(t) {
				cc.log("nowPage:" + this.curPage), this.curPage = t
			},
			changePage: function(t, e) {
				e === cc.PageView.EventType.PAGE_TURNING && (this.curPage = t.getCurrentPageIndex(), cc.log("nowPage:" + this.curPage))
			},
			onLoad: function() {
				var t = this;
				c.default.info("moveCtrl"), this.itemIndex = 0, this.bearNum = 0, this.noticeTarget = this.stageManager.getComponent("Stage" + this.curStage + "Action"), this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
					var o;
					(c.default.info("Drag stated ...:" + e.touch.getLocation().x + "y:" + e.touch.getLocation().y), e.touch.getLocation().x < 150) && ((o = t.getComponent(n)).noticeTarget.canTouch() && (1 != o.curStage && 3 != o.curStage || o.noticeTarget.checkKey() && (o.itemIndex = 1, cc.log("Drag stated ...index :" + o.itemList.length), cc.log("Drag stated ...:" + o.itemList[o.itemIndex - 1].position.x + "y:" + o.itemList[o.itemIndex - 1].position.y), o.initPos = new cc.Vec2(o.itemList[o.itemIndex - 1].position.x, o.itemList[o.itemIndex - 1].position.y)), (2 == o.curStage || o.curStage >= 4) && (cc.log("checkitem:" + o.noticeTarget.checkItems("0")), null != o.noticeTarget.checkItems("0") && (o.itemIndex = 1, cc.log("Drag stated ...index :" + o.itemIndex), cc.log("Drag stated ...:" + o.itemList[o.itemIndex - 1].position.x + "y:" + o.itemList[o.itemIndex - 1].position.y), o.initPos = new cc.Vec2(o.itemList[o.itemIndex - 1].position.x, o.itemList[o.itemIndex - 1].position.y)))));
					e.touch.getLocation().x >= 150 && e.touch.getLocation().x < 250 && ((o = t.getComponent(n)).noticeTarget.canTouch() && (2 == o.curStage || o.curStage >= 4) && null != o.noticeTarget.checkItems("1") && (o.itemIndex = 2, cc.log("Drag stated ...index :" + o.itemIndex), cc.log("Drag stated ...:" + o.itemList[o.itemIndex - 1].position.x + "y:" + o.itemList[o.itemIndex - 1].position.y), o.initPos = new cc.Vec2(o.itemList[o.itemIndex - 1].position.x, o.itemList[o.itemIndex - 1].position.y)));
					e.touch.getLocation().x >= 250 && e.touch.getLocation().x < 400 && ((o = t.getComponent(n)).noticeTarget.canTouch() && (2 == o.curStage || o.curStage >= 4) && null != o.noticeTarget.checkItems("2") && (o.itemIndex = 3, cc.log("Drag stated ...index :" + o.itemIndex), cc.log("Drag stated ...:" + o.itemList[o.itemIndex - 1].position.x + "y:" + o.itemList[o.itemIndex - 1].position.y), o.initPos = new cc.Vec2(o.itemList[o.itemIndex - 1].position.x, o.itemList[o.itemIndex - 1].position.y)));
					e.touch.getLocation().x >= 400 && e.touch.getLocation().x < 550 && ((o = t.getComponent(n)).noticeTarget.canTouch() && (2 == o.curStage || o.curStage >= 4) && null != o.noticeTarget.checkItems("3") && (o.itemIndex = 4, c.default.info("Drag stated ...index :" + o.itemIndex), c.default.info("Drag stated ...:" + o.itemList[o.itemIndex - 1].position.x + "y:" + o.itemList[o.itemIndex - 1].position.y), o.initPos = new cc.Vec2(o.itemList[o.itemIndex - 1].position.x, o.itemList[o.itemIndex - 1].position.y)));
					e.touch.getLocation().x >= 550 && ((o = t.getComponent(n)).noticeTarget.canTouch() && (2 == o.curStage || o.curStage >= 4) && null != o.noticeTarget.checkItems("4") && (o.itemIndex = 5, c.default.info("Drag stated ...index :" + o.itemIndex), c.default.info("Drag stated ...:" + o.itemList[o.itemIndex - 1].position.x + "y:" + o.itemList[o.itemIndex - 1].position.y), o.initPos = new cc.Vec2(o.itemList[o.itemIndex - 1].position.x, o.itemList[o.itemIndex - 1].position.y)));
					c.default.info("Drag stated ...initPos:" + o.initPos.x + "y:" + o.initPos.y)
				}), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
					var e = this.getComponent(n);
					if (e.itemIndex > 0 && null != e.itemList[e.itemIndex - 1]) {
						var o = t.touch.getDelta();
						e.itemList[e.itemIndex - 1].x += o.x, e.itemList[e.itemIndex - 1].y += o.y;
						for (var c = 0; c < e.targetItem.length; c++)
							if (null != e.targetItem[c])
								if (4 == c || 5 == c) {
									if (e.itemList[e.itemIndex - 1].x >= e.targetItem[c].position.x - e.targetItem[c].width / 2 && e.itemList[e.itemIndex - 1].x <= e.targetItem[c].position.x + e.targetItem[c].width / 2 && e.itemList[e.itemIndex - 1].y >= e.targetItem[c].position.y - e.targetItem[c].height / 2 && e.itemList[e.itemIndex - 1].y <= e.targetItem[c].position.y + e.targetItem[c].height / 2 && (this.isin = e.noticeTarget.useProp(e.itemIndex - 1 + "", c + ""), this.isin)) {
										e.itemList[e.itemIndex - 1].x = e.initPos.x, e.itemList[e.itemIndex - 1].y = e.initPos.y, e.itemList[e.itemIndex - 1].active = !1, e.itemIndex = 0;
										break
									}
								} else if (e.itemList[e.itemIndex - 1].x >= e.targetItem[c].position.x - e.targetItem[c].width / 2 + 360 && e.itemList[e.itemIndex - 1].x <= e.targetItem[c].position.x + e.targetItem[c].width / 2 + 360 && e.itemList[e.itemIndex - 1].y >= e.targetItem[c].position.y - e.targetItem[c].height / 2 + 640 && e.itemList[e.itemIndex - 1].y <= e.targetItem[c].position.y + e.targetItem[c].height / 2 + 640 && (1 != e.curStage && 3 != e.curStage || e.curPage != e.tarPage[0] || (e.noticeTarget.useKey(), e.itemList[e.itemIndex - 1].active = !1), (2 == e.curStage || e.curStage >= 4) && e.curPage == e.tarPage[c] && (this.isin = e.noticeTarget.useProp(e.itemIndex - 1 + "", c + ""), this.isin))) {
							e.itemList[e.itemIndex - 1].x = e.initPos.x, e.itemList[e.itemIndex - 1].y = e.initPos.y, e.itemList[e.itemIndex - 1].active = !1, e.itemIndex = 0;
							break
						}
					}
				}, this.node), this.node.on(cc.Node.EventType.TOUCH_END, function() {
					c.default.info("Drag end ...");
					var t = this.getComponent(n);
					t.itemIndex > 0 && (t.itemList[t.itemIndex - 1].x = t.initPos.x, t.itemList[t.itemIndex - 1].y = t.initPos.y, t.itemIndex = 0)
				}, this.node), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
					c.default.info("Drag cancle ...");
					var t = this.getComponent(n);
					t.itemIndex > 0 && (t.itemList[t.itemIndex - 1].x = t.initPos.x, t.itemList[t.itemIndex - 1].y = t.initPos.y, t.itemIndex = 0)
				}, this.node)
			}
		});
		cc._RF.pop()
	}, {
		"./common/Log": "Log"
	}],
	PageCtrl: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "76544vyRVpPR7fVFrIEeppX", "PageCtrl"), cc.Class({
			extends: cc.Component,
			properties: {
				pagePanel: cc.PageView
			},
			onLoad: function() {
				this.pagePanel.scrollToPage(1, 0)
			},
			update: function(t) {}
		}), cc._RF.pop()
	}, {}],
	PopUp: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "174b1rocZJGRKSwCN5kttHV", "PopUp"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = (c.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var o;
				return __extends(e, t), o = e, e.prototype.onLoad = function() {
					o.Instance = this
				}, e.Instance = null, e = o = __decorate([n], e)
			}(cc.Component));
		o.default = a, cc._RF.pop()
	}, {}],
	Props: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8613dbDRV1ItIVnlWXzUOVV", "Props"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../Log"),
			n = t("../Utils"),
			a = function() {
				function t() {
					this.flag = "", this.props = {}
				}
				return t.prototype.destroy = function() {
					this.vclear()
				}, t.prototype.xflag = function(t) {
					this.flag = t
				}, t.prototype.xSet = function(t, e, o) {
					if (void 0 === e && (e = null), void 0 === o && (o = !0), "" == t) return c.default.error("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u65e0\u6548\u7684\u5c5e\u6027\u540d!"), !1;
					var a = this.props[t];
					return null != a ? a.v = e : this.props[t] = {
						v: e,
						v2: e,
						t: []
					}, o && this._notify(this.props[t]), e && (this.props[t].v2 = n.default.clone(e)), !0
				}, t.prototype.xGet = function(t, e) {
					void 0 === e && (e = null);
					var o = this._query(t);
					return o ? o.v : e
				}, t.prototype.xBind = function(t, e, o) {
					if (void 0 === o && (o = ""), "" == o) return c.default.error("\u76d1\u542c\u5931\u8d25,\u6807\u8bb0\u5fc5\u987b\u662f\u6709\u6548\u5b57\u7b26\u4e32"), !1;
					var n = this._query(t);
					if (null == n) return c.default.warn("\u5c5e\u6027\u76d1\u542c\u5931\u8d25,\u53c2\u6570\u4e0d\u5339\u914d!"), !1;
					for (var a = 0; a < n.t.length; a++) {
						if (n.t[a] == e) return c.default.warn("\u91cd\u590d\u76d1\u542c:" + t), !1
					}
					return n.t.push({
						cb: e,
						tag: o
					}), !0
				}, t.prototype._query = function(t) {
					if ("" == t) return c.default.warn("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u65e0\u6548\u7684\u5c5e\u6027\u540d!"), null;
					var e = this.props[t];
					return void 0 === e ? (c.default.warn("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u4e0d\u5b58\u5728\u5c5e\u6027:" + t), null) : e
				}, t.prototype._notify = function(t) {
					for (var e in t.t) {
						var o = t.t[e];
						o && "function" == typeof o.cb && o.cb(t.v, t.v2)
					}
				}, t.prototype.xUnbind = function(t) {
					if (c.default.info("\u8fdb\u5165\u89e3\u7ed1"), "" == t) return c.default.error("\u76d1\u542c\u89e3\u9664\u5931\u8d25,\u6807\u8bb0\u5fc5\u987b\u662f\u6709\u6548\u5b57\u7b26\u4e32"), !1;
					var e = 0;
					for (var o in this.props)
						for (var n = this.props[o], a = n.t.length - 1; a >= 0; a--) {
							var i = n.t[a];
							i && i.tag == t && (n.t.splice(a, 1), e++)
						}
					return c.default.info("\u4e3a[%s]\u89e3\u9664\u76d1\u542c[%d]\u4e2a.", t, e), !0
				}, t.prototype.vclear = function() {
					this.props = {}
				}, t
			}();
		o.default = a, cc._RF.pop()
	}, {
		"../Log": "Log",
		"../Utils": "Utils"
	}],
	StagAction: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "31ff3uI3JxMv60yU54YIl0O", "StagAction"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../common/component/XCamera"),
			n = cc._decorator,
			a = n.ccclass,
			i = n.property,
			s = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.gameClearPanel = null, e.gameOverPanel = null, e.itemPanel = null, e.pagePanel = null, e.img_key = null, e.noLockTouch = !0, e
				}
				return __extends(e, t), e.prototype.onTapDoor = function() {
					if (this.canTouch()) {
						cc.log("open door");
						var t = cc.instantiate(this.gameClearPanel);
						c.default.Instance.node.addChild(t), t.getComponent("gameClearPanel").onSuccess()
					}
				}, e.prototype.onClickBoss = function() {
					if (this.canTouch()) {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4);
						var t = cc.instantiate(this.gameOverPanel);
						c.default.Instance.node.addChild(t), t.getComponent("gameOverPanel").onFail(1)
					}
				}, e.prototype.canTouch = function() {
					return this.noLockTouch
				}, e.prototype.popGameOver = function(t) {
					var e = cc.instantiate(this.gameOverPanel);
					c.default.Instance.node.addChild(e), e.getComponent("gameOverPanel").onFail(t)
				}, e.prototype.popGameClear = function() {
					var t = cc.instantiate(this.gameClearPanel);
					c.default.Instance.node.addChild(t), t.getComponent("gameClearPanel").onSuccess()
				}, __decorate([i({
					type: cc.Prefab,
					displayName: "\u901a\u5173\u9762\u677f"
				})], e.prototype, "gameClearPanel", void 0), __decorate([i({
					type: cc.Prefab,
					displayName: "\u5931\u8d25\u9762\u677f"
				})], e.prototype, "gameOverPanel", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u9053\u5177\u680f"
				})], e.prototype, "itemPanel", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u9875\u9762\u9762\u677f"
				})], e.prototype, "pagePanel", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], e.prototype, "img_key", void 0), e = __decorate([a], e)
			}(cc.Component);
		o.default = s, cc._RF.pop()
	}, {
		"../common/component/XCamera": "XCamera"
	}],
	Stage10Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "ded98UEnblNgLU/ilXY/pHA", "Stage10Action");
		var c = i(t("./stage/StagAction")),
			n = i(t("./GameData")),
			a = i(t("./GameSys"));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				Image_crack: cc.Node,
				Image_hammer: cc.Node,
				Image_crack2: cc.Node,
				Image_key: cc.Node,
				Image_Door: cc.Node,
				Image_DoorOpen: cc.Node,
				page1: cc.Node,
				page2: cc.Node,
				page3: cc.Node,
				page4: cc.Node,
				Image_Door_p2: cc.Node,
				Image_DoorOpen_p2: cc.Node,
				Image_Door_p3: cc.Node,
				Image_DoorOpen_p3: cc.Node,
				Image_Door_p32: cc.Node,
				Image_DoorOpen_p32: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				wasteDoor: cc.Integer,
				hascrack: cc.Boolean,
				hasItems: [cc.string],
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != a.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, this.tabid = 0, cc.nextGetIndex = 0, this.wasteDoor = 0, this.hascrack = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "hummer" == this.hasItems[t] && 0 == e && this.setCrack(), "key" == this.hasItems[t] && 1 == e ? (this.openDoor(), !0) : void 0
			},
			setCrack: function() {
				this.canTouch() && !this.hascrack && (this.hascrack = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_hummer), this.Image_crack.active = !1, this.Image_crack2.active = !0, this.Image_key.active = !0)
			},
			onTapOpenDoor: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1), this.bottomItemPanel.getComponent("MoveCtrl").hideAllItems();
					var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
						this.noLockTouch = !0, this.page1.active = !1, this.page2.active = !0
					}, this));
					this.page1.runAction(t)
				}
			},
			openDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_DoorOpen.active = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapHummer: function() {
				this.canTouch() && (cc.MyTool.onGetItem(7), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_hammer.active = !1, this.hasItems[cc.nextGetIndex] = "hummer")
			},
			onTapKey: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key")
			},
			onTapWasteDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door_p2.active = !1, this.Image_DoorOpen_p2.active = !0)
			},
			onTapWasteOpenDoor: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1;
					var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
						this.wasteDoor >= 2 ? (this.noLockTouch = !0, this.page2.active = !1, this.page3.active = !0) : (this.noLockTouch = !0, this.Image_Door_p2.active = !0, this.Image_DoorOpen_p2.active = !1, this.page2.runAction(cc.fadeIn(.5)), this.wasteDoor++)
					}, this));
					this.page2.runAction(t)
				}
			},
			onTapDoorP3: function() {
				this.Image_Door_p3.active = !1, this.Image_DoorOpen_p3.active = !0
			},
			onTapDoorOpenP3: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1;
					var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
						this.page3.active = !1, this.page4.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_x);
						var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
							cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
						}, this));
						this.node.runAction(t)
					}, this));
					this.page3.runAction(t)
				}
			},
			onTapDoorP32: function() {
				this.canTouch() && (this.Image_Door_p32.active = !1, this.Image_DoorOpen_p32.active = !0)
			},
			onTapDoorOpenP32: function() {
				this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./stage/StagAction": "StagAction"
	}],
	Stage11Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "bfa4fDikV5BkYB0Npir170y", "Stage11Action");
		var c = i(t("./stage/StagAction")),
			n = i(t("./GameData")),
			a = i(t("./GameSys"));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_locker: cc.Node,
				Image_locker_open: cc.Node,
				Image_boss: cc.Node,
				Image_Boss_broken: cc.Node,
				Image_spear: cc.Node,
				Image_man: cc.Node,
				Image_man_rock: cc.Node,
				Image_Boss_Run: cc.Node,
				Image_amor: cc.Node,
				Image_amor_anger: cc.Node,
				Image_gutar: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				haskey: cc.Boolean,
				hasspear: cc.Boolean,
				hasManRock: cc.Boolean,
				hasBossBroken: cc.Boolean,
				hasBossReady: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != a.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasspear = !1, this.hasManRock = !1, this.hasBossBroken = !1, this.hasBossReady = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "spear" == this.hasItems[t] && 0 == e && this.armourToBoss(), "gutar" == this.hasItems[t] && 1 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.guiTarToMan(), !0) : void 0
			},
			openDoor: function() {
				this.hasDoorOpen || (this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			guiTarToMan: function() {
				this.hasManRock || (cc.MyTool.playSE(cc.Const_data.Sound_s_guitar), this.Image_man.active = !1, this.Image_man_rock.active = !0, this.hasManRock = !0)
			},
			armourToBoss: function() {
				if (!this.hasBossBroken && !this.hasBossReady)
					if (this.Image_boss.active = !1, this.Image_Boss_broken.active = !0, this.hasManRock) this.hasBossReady = !0;
					else {
						cc.MyTool.playSE(cc.Const_data.Sound_s_ballon), this.hasBossBroken = !0, this.setPageEnable(!1), this.noLockTouch = !1, this.Image_Boss_Run.active = !0;
						var t = cc.sequence(cc.moveBy(.6, cc.v2(-389, 0)), cc.delayTime(1), cc.callFunc(function() {
							cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
						}, this));
						this.Image_Boss_Run.runAction(t)
					}
			},
			onTapLocker: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.Image_locker.active = !1, this.Image_locker_open.active = !0, this.hasspear || (this.Image_spear.active = !0))
			},
			onTapLockerOpen: function() {
				this.canTouch() && (this.Image_locker.active = !0, this.Image_locker_open.active = !1, this.Image_spear.active = !1)
			},
			onTapSpear: function() {
				this.canTouch() && (cc.MyTool.onGetItem(8), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_spear.active = !1, this.hasItems[cc.nextGetIndex] = "spear", this.hasspear = !0)
			},
			onTaparmor: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.noLockTouch = !1, this.setPageEnable(!1), this.Image_amor.active = !1, this.Image_amor_anger.active = !0;
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go6_8), this.popGameOver(6)
					}, this));
					this.node.runAction(t)
				}
			},
			onTapGuitar: function() {
				this.canTouch() && (cc.MyTool.onGetItem(9), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_gutar.active = !1, this.hasItems[cc.nextGetIndex] = "gutar")
			},
			onTapDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.hasBossReady && this.hasManRock && this.openDoor())
			},
			onTapDoorOpen: function() {
				this.canTouch() && this.hasDoorOpen && this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./stage/StagAction": "StagAction"
	}],
	Stage12Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "23451rzo81A07z0S4TH5Bpk", "Stage12Action");
		var c = a(t("./stage/StagAction")),
			n = a(t("./GameSys"));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_poster: cc.Node,
				Image_shelf: cc.Node,
				Image_shelf_open: cc.Node,
				Image_poster2: cc.Node,
				Image_book: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_man: cc.Node,
				Image_woman: cc.Node,
				Image_point2: cc.Node,
				Image_point1: cc.Node,
				Image_pointe1: cc.Node,
				Image_pointe2: cc.Node,
				Image_key: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				haskey: cc.Boolean,
				hasspear: cc.Boolean,
				hasman2Ship: cc.Boolean,
				hasBook2Man: cc.Boolean,
				hasPoster2WoMan: cc.Boolean,
				hasWoman: cc.Boolean,
				hasMan: cc.Boolean,
				hasbook: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != n.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), this.tabid = 0, cc.nextGetIndex = 0, this.hasspear = !1, this.hasWoman = !1, this.hasman2Ship = !1, this.hasBook2Man = !1, this.hasPoster2WoMan = !1, this.hasMan = !1, this.hasbook = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapBoss: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
			},
			onTapPoster: function() {
				cc.MyTool.onGetItem(10), cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.Image_poster.active = !1, this.Image_poster2.active = !0
			},
			onTapPoster2: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_poster2.active = !1, this.hasItems[cc.nextGetIndex] = "poster"
			},
			onTapBook: function() {
				cc.MyTool.onGetItem(11), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_book.active = !1, this.hasItems[cc.nextGetIndex] = "book", this.hasbook = !0
			},
			onTapKey: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key"
			},
			onTapShelf: function() {
				this.Image_shelf.active = !1, this.Image_shelf_open.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.hasbook || (this.Image_book.active = !0)
			},
			onTapShelfOpen: function() {
				this.Image_shelf.active = !0, this.Image_shelf_open.active = !1, this.Image_book.active = !1
			},
			useProp: function(t, e) {
				if (this.canTouch()) return cc.log("hastarid:" + e + "itemid:" + t + "itemname:" + this.hasItems[t]), "poster" == this.hasItems[t] && 1 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.poster2Woman(), !0) : "book" == this.hasItems[t] && 0 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.book2man(), !0) : "woman" == this.hasItems[t] && 2 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.woman2Ship(), !0) : "man" == this.hasItems[t] && 2 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.man2Ship(), !0) : "key" == this.hasItems[t] && 3 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.openDoor(), !0) : void 0
			},
			openDoor: function() {
				this.hasDoorOpen || (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			poster2Woman: function() {
				this.hasPoster2WoMan || (cc.log("post 2 woman:" + cc.nextGetIndex), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_woman.active = !1, this.hasItems[cc.nextGetIndex] = "woman", cc.MyTool.onGetItem(13), this.itemPanel.getComponent("ItemManager").showGetItem(null, "m_ST12_woman_POP"), this.hasPoster2WoMan = !0)
			},
			book2man: function() {
				this.hasBook2Man || (cc.log("book 2 man:" + cc.nextGetIndex), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_man.active = !1, this.hasItems[cc.nextGetIndex] = "man", cc.MyTool.onGetItem(12), this.itemPanel.getComponent("ItemManager").showGetItem(null, "m_ST12_man_POP"), this.hasBook2Man = !0)
			},
			man2Ship: function() {
				if (cc.log("man2ship"), !this.hasMan)
					if (this.hasMan = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.hasWoman) {
						this.Image_point2.active = !0, this.Image_key.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_key_drop);
						var t = cc.sequence(cc.moveBy(.3, cc.v2(0, -464)), cc.callFunc(function() {}, this));
						this.Image_key.runAction(t)
					} else this.Image_pointe1.active = !0
			},
			woman2Ship: function() {
				if (!this.hasWoman)
					if (this.hasWoman = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.hasMan) {
						this.Image_pointe2.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_booo), this.noLockTouch = !1, this.setPageEnable(!1);
						var t = cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
							cc.MyTool.playSE(cc.Const_data.Sound_s_go7), this.popGameOver(7)
						}, this));
						this.node.runAction(t)
					} else this.Image_point1.active = !0
			},
			onTapDoor: function() {
				this.canTouch() && (this.hasBossReady && this.hasManRock ? this.openDoor() : cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open))
			},
			onTapDoorOpen: function() {
				this.canTouch() && this.hasDoorOpen && this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameSys": "GameSys",
		"./stage/StagAction": "StagAction"
	}],
	Stage13Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3885brcRQxON7h8IodUkPhY", "Stage13Action");
		var c = i(t("./stage/StagAction")),
			n = i(t("./GameData")),
			a = i(t("./GameSys"));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_cardboard1: cc.Node,
				Image_cardboard12: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_ani: cc.Node,
				Image_ani_bak: cc.Node,
				Image_cardboard2: cc.Node,
				Image_cardboard_item: cc.Node,
				Image_cardboard2_out: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != a.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapcardboard2: function() {
				if (this.canTouch()) {
					this.Image_cardboard2.active = !1, this.Image_cardboard2_out.active = !0, this.setPageEnable(!1), this.noLockTouch = !1, cc.MyTool.playSE(cc.Const_data.Sound_s_exclam);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go6_8), this.popGameOver(8)
					}, this));
					this.node.runAction(t)
				}
			},
			onTapCardboard_item: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_cardboard_item.active = !1, cc.MyTool.onGetItem(14), this.hasItems[cc.nextGetIndex] = "box", this.itemPanel.getComponent("ItemManager").showGetItem(null, "m48_cardboard_POP"))
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return cc.log("hastarid:" + e + "itemid:" + t + "itemname:" + this.hasItems[t]), "box" == this.hasItems[t] && 0 == e ? (this.box2box(), !0) : void 0
			},
			openDoor: function() {
				this.hasDoorOpen || (this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			box2box: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_cardboard12.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set);
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.Image_ani.active = !0, cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani3_4);
					var t = this.Image_ani.getComponent(cc.Animation);
					t.on("finished", this.onbox1Finish, this), t.play("ani04")
				}, this));
				this.node.runAction(t)
			},
			onbox1Finish: function() {
				cc.log("ani survive finish"), this.Image_cardboard1.active = !1, this.Image_cardboard12.active = !1;
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					this.Image_ani.active = !1, this.Image_ani_bak.active = !0;
					var t = this.Image_ani_bak.getComponent(cc.Animation);
					t.on("finished", this.onbox2Finish, this), t.play("ani04-r")
				}, this));
				this.node.runAction(t)
			},
			onbox2Finish: function() {
				var t = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
					this.Image_ani_bak.active = !1, this.Image_Door_open.active = !1, this.Image_Door.active = !0;
					var t = cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
						this.popGameClear()
					}, this));
					this.node.runAction(t)
				}, this));
				this.node.runAction(t)
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./stage/StagAction": "StagAction"
	}],
	Stage14Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "00b97Vp0u5G3aC8bWj5Gx1Q", "Stage14Action");
		var c = i(t("./stage/StagAction")),
			n = i(t("./GameData")),
			a = i(t("./GameSys"));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_boss: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_man: cc.Node,
				ani_fail: cc.Node,
				ani_win: cc.Node,
				Image_key: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != a.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.onGetItem(15), cc.MyTool.playSE(cc.Const_data.Sound_s_boss), this.Image_boss.active = !1, this.hasItems[cc.nextGetIndex] = "boss")
			},
			onTapKey: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key")
			},
			onTapMan: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1), this.Image_man.active = !1, this.ani_fail.active = !0;
					var t = this.ani_fail.getComponent(cc.Animation);
					t.on("finished", this.onbox1Finish, this), t.play("ani05");
					var e = cc.sequence(cc.delayTime(1.1), cc.callFunc(function() {
						cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani5_6)
					}, this));
					this.node.runAction(e)
				}
			},
			onbox1Finish: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_go2), this.popGameOver(2)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "boss" == this.hasItems[t] && 0 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.boss2bath(), !0) : "key" == this.hasItems[t] && 1 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.openDoor(), !0) : void 0
			},
			openDoor: function() {
				this.hasDoorOpen || (this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			onTapOpenDoor: function() {
				this.canTouch() && this.popGameClear()
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			boss2bath: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1), this.ani_win.active = !0;
					var t = this.ani_win.getComponent(cc.Animation);
					t.on("finished", this.onbox2Finish, this), t.play("ani06");
					var e = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
						cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani5_6)
					}, this));
					this.node.runAction(e)
				}
			},
			onbox2Finish: function() {
				this.noLockTouch = !0, this.setPageEnable(!0), cc.MyTool.playSE(cc.Const_data.Sound_s_key_drop)
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./stage/StagAction": "StagAction"
	}],
	Stage15Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8dc26uS1kNKWIBoYd7PnKRJ", "Stage15Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_teru2: cc.Node,
				Image_hair: cc.Node,
				Image_window: cc.Node,
				Image_window2: cc.Node,
				Image_window3: cc.Node,
				Image_window4: cc.Node,
				Image_window5: cc.Node,
				Image_teru1: cc.Node,
				Image_key: cc.Node,
				Image_zura: cc.Node,
				Image_crack: cc.Node,
				Image_crack_open: cc.Node,
				Image_teru3: cc.Node,
				Image_shelf: cc.Node,
				Image_shelf_open: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_hammer: cc.Node,
				Image_hunged1: cc.Node,
				Image_hunged1_reverse: cc.Node,
				Image_hunged2: cc.Node,
				Image_hunged2_reverse: cc.Node,
				Image_hunged3: cc.Node,
				Image_hunged3_reverse: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				hungeSum: cc.Integer,
				hungeStage: [cc.Boolean],
				windowState: cc.Integer,
				windowOpenState: cc.Integer,
				hasteru1: cc.Boolean,
				hashummer: cc.Boolean,
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean,
				hasHairFly: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.windowOpenState = 0, this.windowState = 0, this.hungeSum = 0, this.hashummer = !1, this.hasteru1 = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, this.hasHairFly = !1) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				e === cc.PageView.EventType.PAGE_TURNING && (this.curPage = t.getCurrentPageIndex(), cc.log("nowPage:" + this.curPage), this.changeHair())
			},
			changeHair: function() {
				if (cc.log("windowState" + this.windowState), 0 == this.curPage && !this.hasHairFly && 3 == this.windowState && 1 == this.windowOpenState) {
					this.hasHairFly = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.moveTo(.8, cc.v2(233, 33)), cc.callFunc(function() {
						this.noLockTouch = !0, this.setPageEnable(!0), this.Image_hair.active = !1, this.Image_zura.active = !0, this.Image_key.active = !0
					}, this));
					this.Image_hair.runAction(t)
				}
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapOpenDoor: function() {
				this.canTouch() && this.popGameClear()
			},
			onTapKey: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key")
			},
			onTapteru2: function() {
				this.canTouch() && (cc.MyTool.onGetItem(16), cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.Image_teru2.active = !1, this.hasItems[cc.nextGetIndex] = "teru")
			},
			onTapteru1: function() {
				(this.canTouch() || this.hasteru1) && (cc.MyTool.onGetItem(16), cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.hasteru1 = !0, this.Image_teru1.active = !1, this.hasItems[cc.nextGetIndex] = "teru")
			},
			onTapteru3: function() {
				this.canTouch() && (cc.MyTool.onGetItem(16), cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.Image_teru3.active = !1, this.hasItems[cc.nextGetIndex] = "teru")
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1))
			},
			onTapWindow: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), 0 == this.windowOpenState ? this.windowOpenState = 1 : this.windowOpenState = 0, this.changeWindow())
			},
			changeWindow: function() {
				this.Image_window.active = !1, this.Image_window2.active = !1, this.Image_window3.active = !1, this.Image_window4.active = !1, this.Image_window5.active = !1, 2 == this.windowState ? cc.MyTool.playSE(cc.Const_data.Sound_s_rain) : 3 == this.windowState ? cc.MyTool.playSE(cc.Const_data.Sound_s_thunder) : cc.audioEngine.stopAllEffects(), 0 == this.windowOpenState ? this.Image_window.active = !0 : 0 == this.windowState ? this.Image_window2.active = !0 : 1 == this.windowState ? this.Image_window3.active = !0 : 2 == this.windowState ? (this.hasteru1 || (this.Image_teru1.active = !0), this.Image_window4.active = !0) : 3 == this.windowState && (this.Image_window5.active = !0), this.changeHair()
			},
			onTapshelf: function() {
				this.Image_shelf.active = !1, this.Image_shelf_open.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.hashummer || (this.Image_hammer.active = !0)
			},
			onTapHummer: function() {
				(this.canTouch() || this.hashummer) && (cc.MyTool.onGetItem(7), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_hammer.active = !1, this.hasItems[cc.nextGetIndex] = "hammer")
			},
			useProp: function(t, e) {
				if (this.canTouch()) return cc.log("hastarid:" + e + "itemid:" + t + "itemname:" + this.hasItems[t]), "hammer" == this.hasItems[t] && 0 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.hummer2Crack(), !0) : "key" == this.hasItems[t] && 1 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.openDoor(), !0) : "teru" == this.hasItems[t] && 2 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.teru2monohoshi(), !0) : void 0
			},
			teru2monohoshi: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.noLockTouch = !1;
					var t = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
						this.noLockTouch = !0
					}, this));
					this.node.runAction(t), 0 == this.hungeSum ? this.Image_hunged1.active = !0 : 1 == this.hungeSum ? this.Image_hunged2.active = !0 : 2 == this.hungeSum && (this.Image_hunged3.active = !0), this.hungeSum += 1
				}
			},
			hummer2Crack: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_hummer), this.Image_crack_open.active = !0, this.Image_teru3.active = !0)
			},
			openDoor: function() {
				this.hasDoorOpen || (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			checkWindow: function() {
				for (var t = 0, e = 0; e < 3; e++) this.hungeStage[e] && (t += 1);
				this.windowState = t, this.changeWindow()
			},
			onTaphunged1: function() {
				cc.log("this.hungeStage[0]" + this.hungeStage[0]), this.canTouch() && (cc.log("this.hungeStage[0]" + this.hungeStage[0]), 1 == this.hungeStage[0] ? (this.Image_hunged1.active = !0, this.Image_hunged1_reverse.active = !1) : (this.Image_hunged1.active = !1, this.Image_hunged1_reverse.active = !0), this.hungeStage[0] = !this.hungeStage[0], this.checkWindow())
			},
			onTaphunged2: function() {
				this.canTouch() && (1 == this.hungeStage[1] ? (this.Image_hunged2.active = !0, this.Image_hunged2_reverse.active = !1) : (this.Image_hunged2.active = !1, this.Image_hunged2_reverse.active = !0), this.hungeStage[1] = !this.hungeStage[1], this.checkWindow())
			},
			onTaphunged3: function() {
				this.canTouch() && (1 == this.hungeStage[2] ? (this.Image_hunged3.active = !0, this.Image_hunged3_reverse.active = !1) : (this.Image_hunged3.active = !1, this.Image_hunged3_reverse.active = !0), this.hungeStage[2] = !this.hungeStage[2], this.checkWindow())
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage16Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "3498ecB+LZIX7YPlF0fksjP", "Stage16Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				workingPanel: cc.Node,
				drinking: [cc.Node],
				Image_boss: cc.Node,
				Image_Familitree2: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_familytree: cc.Node,
				Image_sink1: cc.Node,
				Image_sink1_open: cc.Node,
				Image_Seaweed: cc.Node,
				Image_freezer: cc.Node,
				Image_freezer2: cc.Node,
				Image_freezer_open: cc.Node,
				Image_hair: cc.Node,
				Image_freezer2_open: cc.Node,
				Image_drink: cc.Node,
				Image_hair2: cc.Node,
				Image_boss2: cc.Node,
				Image_sea2: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				hassea: cc.Boolean,
				hashair: cc.Boolean,
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.hassea = !1, this.hashair = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.onGetItem(15), cc.MyTool.playSE(cc.Const_data.Sound_s_boss), this.Image_boss.active = !1, this.hasItems[cc.nextGetIndex] = "boss")
			},
			onTapHair: function() {
				this.canTouch() && (cc.MyTool.onGetItem(17), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_hair.active = !1, this.hashair = !0, this.hasItems[cc.nextGetIndex] = "hair")
			},
			onTapSea: function() {
				this.canTouch() && (cc.MyTool.onGetItem(18), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_Seaweed.active = !1, this.hasItems[cc.nextGetIndex] = "sea")
			},
			onTapsink1: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.Image_sink1.active = !1, this.Image_sink1_open.active = !0, this.hassea || (this.Image_Seaweed.active = !0))
			},
			onTapsinkOpen: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.Image_sink1.active = !0, this.Image_sink1_open.active = !1, this.Image_Seaweed.active = !1)
			},
			onTapFreezer: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.Image_freezer.active = !1, this.Image_freezer_open.active = !0, this.hashair || (this.Image_hair.active = !0))
			},
			onTapFreezerOpen: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.Image_freezer.active = !0, this.Image_freezer_open.active = !1, this.Image_hair.active = !1)
			},
			onTapFreezer2: function() {
				this.canTouch() && (this.Image_freezer2.active = !1, this.Image_freezer2_open.active = !0, this.Image_drink.active = !0)
			},
			onTapFreezer2Open: function() {
				this.canTouch() && (this.Image_freezer2.active = !0, this.Image_freezer2_open.active = !1, this.Image_drink.active = !1)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return cc.log("hastarid:" + e + "itemid:" + t + "itemname:" + this.hasItems[t]), "boss" == this.hasItems[t] && 0 == e ? (this.boss2map(), !0) : "hair" == this.hasItems[t] && 0 == e ? (this.hair2map(), !0) : "sea" == this.hasItems[t] && 0 == e ? (this.see2map(), !0) : void 0
			},
			openDoor: function() {
				this.hasDoorOpen || (this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			hair2map: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_hair2.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set), cc.MyTool.playSE(cc.Const_data.Sound_s_booo);
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					this.popGameOver(9)
				}, this));
				this.node.runAction(t)
			},
			boss2map: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_boss2.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set), cc.MyTool.playSE(cc.Const_data.Sound_s_booo);
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_g09), this.popGameOver(9)
				}, this));
				this.node.runAction(t)
			},
			see2map: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_sea2.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set);
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.Image_sea2.active = !1, this.Image_familytree.active = !1, this.Image_Familitree2.active = !0, this.Image_Door.active = !0, this.noLockTouch = !0, this.setPageEnable(!0)
				}, this));
				this.node.runAction(t)
			},
			onTapDrink: function() {
				this.canTouch() && (cc.MyTool.onGetItem(3), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_drink.active = !1, this.hasItems[cc.nextGetIndex] = "drink")
			},
			onTapDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.openDoor())
			},
			onTapOpenDoor: function() {
				this.canTouch() && this.popGameClear()
			},
			startDrink: function() {
				var t = this;
				this.noLockTouch = !1, this.setPageEnable(!1), this.workingPanel.active = !0;
				var e = 0,
					o = cc.delayTime(1),
					c = cc.callFunc(function() {
						e++, t.setDrink(e)
					}, this);
				this.node.runAction(cc.repeat(cc.sequence(o, c), 5))
			},
			setDrink: function(t) {
				1 == t && (this.drinking[0].active = !0, this.drinking[1].active = !1, this.drinking[2].active = !1), 2 == t && (this.drinking[0].active = !1, this.drinking[1].active = !0, this.drinking[2].active = !1), 3 == t && (this.drinking[0].active = !1, this.drinking[1].active = !1, this.drinking[2].active = !0), 5 == t && (this.noLockTouch = !0, this.setPageEnable(!0), this.workingPanel.active = !1, cc.MyTool.playSE(cc.Const_data.Sound_s_go3_12), this.popGameOver(3))
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage17Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2bfaeu6g9tBUqQGU9MNMQJv", "Stage17Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_glass: cc.Node,
				Image_window: cc.Node,
				Image_window2: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_takeheri: cc.Node,
				Image_boy1: cc.Node,
				Image_boy2: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				windowOpenState: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.windowOpenState = 0, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1))
			},
			onTapGlass: function() {
				this.canTouch() && (cc.MyTool.onGetItem(19), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_glass.active = !1, this.hashair = !0, this.hasItems[cc.nextGetIndex] = "glass")
			},
			onTapWindow: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), 0 == this.windowOpenState ? this.windowOpenState = 1 : this.windowOpenState = 0, this.changeWindow())
			},
			changeWindow: function() {
				this.Image_window.active = !1, this.Image_window2.active = !1, 0 == this.windowOpenState ? this.Image_window.active = !0 : this.Image_window2.active = !0
			},
			onTaptakeheri: function() {
				this.canTouch() && (cc.MyTool.onGetItem(20), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_takeheri.active = !1, this.hasItems[cc.nextGetIndex] = "takeheri")
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "takeheri" == this.hasItems[t] && 1 == e ? this.takeheri2window() : "glass" == this.hasItems[t] && 0 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.glass2boy(), !0) : void 0
			},
			openDoor: function() {
				if (!this.hasDoorOpen) {
					this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go10), this.popGameOver(10)
					}, this));
					this.node.runAction(t)
				}
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			glass2boy: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_boy1.active = !1, this.Image_boy2.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_set);
				var t = cc.sequence(cc.moveTo(.8, cc.v2(-500, -132)), cc.callFunc(function() {
					this.Image_boy2.active = !1, this.Image_takeheri.active = !0, this.noLockTouch = !0, this.setPageEnable(!0)
				}, this));
				this.Image_boy2.runAction(t)
			},
			takeheri2window: function() {
				return !(!this.canTouch() || 0 == this.windowOpenState) && (this.popGameClear(), !0)
			},
			onTapDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.openDoor())
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage18Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "7883988f9VAx5T7UPZqIPeV", "Stage18Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_hira: cc.Node,
				Image_boss: cc.Node,
				Image_window: cc.Node,
				Image_window2: cc.Node,
				Image_bossback: cc.Node,
				animes: cc.Node,
				Image_Door: cc.Node,
				Image_Door_nolock: cc.Node,
				Image_Door_open: cc.Node,
				Image_Door_open2: cc.Node,
				Image_womanpic: [cc.Node],
				Image_shelf: cc.Node,
				Image_shelf_open: cc.Node,
				Imagedoll: [cc.Node],
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				haswomanready: cc.Boolean,
				windowOpenState: cc.Boolean,
				shelfOpenState: cc.Boolean,
				dollState: cc.Integer,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.windowOpenState = 0, this.shelfOpenState = !1, this.dollState = 0, this.haswomanready = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, this.hasItems[cc.nextGetIndex] = "line", this.itemPanel.getComponent("ItemManager").addItemIndex()) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				if (e === cc.PageView.EventType.PAGE_TURNING && (this.curPage = t.getCurrentPageIndex(), cc.log("nowPage:" + this.curPage + "dollstate:" + this.dollState + "haswomanready:" + this.haswomanready), 1 == this.curPage && !this.haswomanready && 3 == this.dollState)) {
					this.noLockTouch = !1, this.setPageEnable(!1);
					var o = cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
						this.womanReady()
					}, this));
					this.node.runAction(o)
				}
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1))
			},
			onTapDoll: function() {
				this.canTouch() && (3 == this.dollState ? this.dollState = 0 : this.dollState++, this.changeDollStage())
			},
			changeDollStage: function() {
				for (var t = 0; t < 4; t++) this.Imagedoll[t].active = !1, this.Image_womanpic[t].active = !1;
				this.Imagedoll[this.dollState].active = !0, this.haswomanready || (this.Image_womanpic[this.dollState].active = !0)
			},
			onTapWindow: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), 0 == this.windowOpenState ? this.windowOpenState = 1 : this.windowOpenState = 0, this.changeWindow())
			},
			changeWindow: function() {
				this.Image_window.active = !1, this.Image_window2.active = !1, 0 == this.windowOpenState ? this.Image_window.active = !0 : this.Image_window2.active = !0
			},
			onTapShelf: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.shelfOpenState ? (this.Image_shelf.active = !0, this.Image_shelf_open.active = !1) : (this.Image_shelf.active = !1, this.Image_shelf_open.active = !0), this.shelfOpenState = !this.shelfOpenState)
			},
			womanReady: function() {
				cc.log("woman ready"), this.haswomanready = !0, this.Image_womanpic[this.dollState].active = !1, this.Image_Door.active = !1, this.animes.active = !0, this.Image_boss.active = !1, this.Image_hira.active = !1;
				var t = this.animes.getComponent(cc.Animation);
				t.on("finished", this.onbox1Finish, this), cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani7), t.play("ani07")
			},
			onbox1Finish: function() {
				this.noLockTouch = !0, this.setPageEnable(!0), this.Image_Door_nolock.active = !0, this.haswomanready = !0
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "line" == this.hasItems[t] && 0 == e ? this.line2window() : void 0
			},
			openDoor: function() {
				if (!this.hasDoorOpen) {
					this.Image_Door_nolock.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0, this.noLockTouch = !1, this.setPageEnable(!1), cc.MyTool.playSE(cc.Const_data.Sound_s_door_open);
					var t = cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
						this.Image_Door_open.active = !1, this.Image_Door_open2.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_exclam);
						var t = cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
							this.popGameOver(1)
						}, this));
						this.node.runAction(t)
					}, this));
					this.node.runAction(t)
				}
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			line2window: function() {
				if (!this.canTouch() || 0 == this.windowOpenState) return !1;
				if (cc.MyTool.playSE(cc.Const_data.Sound_s_rod), this.haswomanready) this.popGameClear();
				else {
					this.Image_boss.active = !1, this.Image_bossback.active = !0, this.noLockTouch = !1, this.setPageEnable(!1), cc.MyTool.playSE(cc.Const_data.Sound_s_exclam);
					var t = cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}
				return !0
			},
			onTapCloseDoor: function() {
				cc.log("open door:" + this.hasDoorOpen), this.canTouch() && cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapDoor: function() {
				cc.log("open door:" + this.hasDoorOpen), this.openDoor()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage19Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "79385vlUXRAWas/qw4cQYsW", "Stage19Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				Image_boss2: cc.Node,
				Image_boss: cc.Node,
				animes: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_shelf: cc.Node,
				Image_shelf_open: cc.Node,
				Image_remocon: cc.Node,
				Image_tv: cc.Node,
				Image_tv_after: cc.Node,
				tabid: cc.Integer,
				curPage: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				hasremocon: cc.Boolean,
				shelfOpenState: cc.Boolean,
				tvOpen: cc.Boolean,
				remainTVTime: cc.Integer,
				remainTVready: cc.Integer,
				hastvready: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.curPage = 0, this.shelfOpenState = !1, this.dollState = 0, this.remainTVTime = 8, this.remainTVready = this.remainTVTime, this.tvOpen = !1, this.hastvready = !1, this.hasremocon = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				e === cc.PageView.EventType.PAGE_TURNING && (this.curPage = t.getCurrentPageIndex(), 2 == this.curPage || this.hasDoorOpen || (this.remainTVready = this.remainTVTime))
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {
				this.hastvready && this.remainTVready > 0 && 2 == this.curPage && !this.hasDoorOpen && (this.remainTVready -= t, this.remainTVready <= 0 && this.tvReady())
			},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapBoss: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_exclam), this.Image_boss.active = !1, this.Image_boss2.active = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}
			},
			onTapRecom: function() {
				this.canTouch() && (cc.MyTool.onGetItem(22), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_remocon.active = !1, this.hasItems[cc.nextGetIndex] = "recom", this.hasremocon = !0)
			},
			onTapShelf: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.shelfOpenState ? (this.Image_shelf.active = !0, this.Image_shelf_open.active = !1, this.Image_remocon.active = !1) : (this.Image_shelf.active = !1, this.Image_shelf_open.active = !0, this.hasremocon || (this.Image_remocon.active = !0)), this.shelfOpenState = !this.shelfOpenState)
			},
			tvReady: function() {
				cc.log("woman ready"), this.noLockTouch = !1, this.setPageEnable(!1), this.animes.active = !0, cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani8);
				var t = this.animes.getComponent(cc.Animation);
				t.on("finished", this.onbox1Finish, this), t.play("ani08");
				var e = cc.sequence(cc.delayTime(5), cc.callFunc(function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_cream)
				}, this));
				this.node.runAction(e);
				var o = cc.sequence(cc.delayTime(8), cc.callFunc(function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), cc.MyTool.playSE(cc.Const_data.Sound_s_TV)
				}, this));
				this.node.runAction(o)
			},
			onbox1Finish: function() {
				this.noLockTouch = !0, this.setPageEnable(!0), this.animes.active = !1, this.openDoor()
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "recom" == this.hasItems[t] && 0 == e ? this.recom2tv() : void 0
			},
			openDoor: function() {
				this.hasDoorOpen || (this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			recom2tv: function() {
				this.canTouch() && (this.tvOpen ? (cc.audioEngine.stopAllEffects(), this.hastvready = !1, this.Image_tv.active = !0, this.Image_tv_after.active = !1) : (cc.MyTool.playSE(cc.Const_data.Sound_s_TV), this.hastvready = !0, this.Image_tv.active = !1, this.Image_tv_after.active = !0), this.remainTVready = this.remainTVTime, this.tvOpen = !this.tvOpen, cc.log("this.hastvready:" + this.hastvready), this.bottomItemPanel.getComponent("MoveCtrl").resetItem())
			},
			onTapOpenDoor: function() {
				this.canTouch() && this.popGameClear()
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage1Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "82ef1sgNyVJFZfVETkEpPL4", "Stage1Action"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("../common/Caches"),
			s = t("../common/Audio"),
			r = t("../common/component/XCamera"),
			h = t("../GameData"),
			u = t("./StagAction"),
			d = t("../GameSys"),
			l = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.howToPanel = null, e.img_pod = null, e.img_shelf = null, e.img_shelf_open = null, e.door_close = null, e.door_open = null, e.haskey = !1, e.ispodup = !1, e.tabid = 0, e.hasDoorOpen = !1, e.noLockTouch = !0, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					0 != d.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new i.default, new s.default, new h.default, this.tabid = 0, this.ispodup = !1, this.haskey = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, 1 != cc.isFreshOver && (this.howToPanel.active = !0)) : cc.director.loadScene("loading")
				}, e.prototype.checkKey = function() {
					return this.haskey
				}, e.prototype.canTouch = function() {
					return this.noLockTouch
				}, e.prototype.useKey = function() {
					this.canTouch() && (cc.log("chooseID in"), cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.haskey && !this.hasDoorOpen && (this.door_close.active = !1, this.door_open.active = !0))
				}, e.prototype.openDoor = function() {
					if (this.canTouch()) {
						cc.log("open door");
						var t = cc.instantiate(this.gameClearPanel);
						r.default.Instance.node.addChild(t), t.getComponent("gameClearPanel").onSuccess()
					}
				}, e.prototype.toStart = function() {
					cc.director.loadScene("helloworld")
				}, e.prototype.onReciveGotItem = function(t) {
					cc.log("recive item:" + t)
				}, e.prototype.onClickBoss = function() {
					if (this.canTouch()) {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4);
						var t = cc.instantiate(this.gameOverPanel);
						r.default.Instance.node.addChild(t), t.getComponent("gameOverPanel").onFail(1)
					}
				}, e.prototype.onTapKey = function() {
					this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_key.active = !1, this.haskey = !0)
				}, e.prototype.onTapDoor = function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
				}, e.prototype.onTapShelf = function() {
					this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.img_shelf_open.active = !0, this.img_shelf.active = !1, this.haskey || (this.img_key.active = !0))
				}, e.prototype.onTapShelfOpen = function() {
					this.canTouch() && (this.img_shelf_open.active = !1, this.img_shelf.active = !0, this.img_key.active = !1)
				}, e.prototype.onTapPod = function() {
					if (this.canTouch())
						if (this.noLockTouch = !1, cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.ispodup) {
							var t = cc.sequence(cc.moveTo(.2, cc.v2(-211, 306)), cc.callFunc(function() {
								this.ispodup = !1, this.noLockTouch = !0, this.haskey || (this.img_key.active = !1)
							}, this));
							this.img_pod.runAction(t)
						} else {
							this.haskey || (this.img_key.active = !0);
							t = cc.sequence(cc.moveTo(.2, cc.v2(-211, 340)), cc.callFunc(function() {
								this.ispodup = !0, this.noLockTouch = !0
							}, this));
							this.img_pod.runAction(t)
						}
				}, __decorate([a({
					type: cc.Node,
					displayName: "\u65b0\u624b\u6307\u5f15\u9762\u677f"
				})], e.prototype, "howToPanel", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5012\u8fc7\u6765\u7684\u82b1\u76c6"
				})], e.prototype, "img_pod", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5173\u7740\u7684\u67dc\u5b50"
				})], e.prototype, "img_shelf", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5f00\u7740\u7684\u67dc\u5b50"
				})], e.prototype, "img_shelf_open", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5173\u7740\u7684\u95e8"
				})], e.prototype, "door_close", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5f00\u7740\u7684\u95e8"
				})], e.prototype, "door_open", void 0), e = __decorate([n], e)
			}(u.default);
		o.default = l, cc._RF.pop()
	}, {
		"../GameData": "GameData",
		"../GameSys": "GameSys",
		"../common/Audio": "Audio",
		"../common/Caches": "Caches",
		"../common/component/XCamera": "XCamera",
		"./StagAction": "StagAction"
	}],
	Stage20Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "4e7f5Fy6udCpbdMMl3+/W6C", "Stage20Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				Image_Door: cc.Node,
				Image_DoorOpen: cc.Node,
				Image_key: cc.Node,
				Image_mat: cc.Node,
				Image_Door_p2: cc.Node,
				Image_DoorOpen_p2: cc.Node,
				Image_shelf: cc.Node,
				Image_shelf_open: cc.Node,
				Image_shelf2: cc.Node,
				Image_shelf2_open: cc.Node,
				Image_camera: cc.Node,
				Image_gun: cc.Node,
				Image_Door_p3: cc.Node,
				Image_DoorOpen_p3: cc.Node,
				Image_Door_p4: cc.Node,
				Image_DoorOpen_p4: cc.Node,
				Image_Door_p42: cc.Node,
				Image_DoorOpen_p42: cc.Node,
				page1: cc.Node,
				page2: cc.Node,
				page3: cc.Node,
				page4: cc.Node,
				page5: cc.Node,
				page6: cc.Node,
				Image_Door_p6: cc.Node,
				Image_DoorOpen_p6: cc.Node,
				Image_man: cc.Node,
				Image_woman: cc.Node,
				Image_man2: cc.Node,
				Image_woman2: cc.Node,
				Image_ManColider: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				wasteDoor: cc.Integer,
				hasmatmoved: cc.Boolean,
				shelfopen: cc.Boolean,
				shelfopen2: cc.Boolean,
				hasItems: [cc.string],
				haskey: cc.Boolean,
				hascamera: cc.Boolean,
				hasManReady: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.wasteDoor = 0, this.hasmatmoved = !1, this.hascrack = !1, this.hascamera = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, this.hasManReady = !1, this.shelfopen = !1, this.shelfopen2 = !1) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && (cc.MyTool.playSE(cc.Const_data.Sound_s_go5), this.popGameOver(5))
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "camera" == this.hasItems[t] && 1 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.camera2Man(), !0) : "key" == this.hasItems[t] && 0 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.openDoor(), !0) : void 0
			},
			onTapmat: function() {
				if (this.canTouch() && !this.hasmatmoved) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !0, this.hasmatmoved = !0;
					var t = cc.sequence(cc.moveBy(.3, cc.v2(0, -200)), cc.callFunc(function() {}, this));
					this.Image_mat.runAction(t)
				}
			},
			onTapKey: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key")
			},
			key2Door: function() {
				this.canTouch() && this.openDoor()
			},
			onTapOpenDoor: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
						this.noLockTouch = !0, this.setPageEnable(!0), this.page1.active = !1, this.page2.active = !0
					}, this));
					this.page1.runAction(t)
				}
			},
			openDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_DoorOpen.active = !0)
			},
			setPageEnable: function(t) {
				this.page1.getComponent(cc.PageView).enabled = t, this.page2.getComponent(cc.PageView).enabled = t, this.page3.getComponent(cc.PageView).enabled = t, this.page4.getComponent(cc.PageView).enabled = t, this.page5.getComponent(cc.PageView).enabled = t, this.page6.getComponent(cc.PageView).enabled = t
			},
			onTapHummer: function() {
				this.canTouch() && (this.Image_hammer.active = !1, this.hasItems[cc.nextGetIndex] = "hummer")
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapWasteDoor: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door_p2.active = !1, this.Image_DoorOpen_p2.active = !0)
			},
			onTapWasteOpenDoor: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1;
					var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
						this.wasteDoor >= 1 ? (this.noLockTouch = !0, this.page2.active = !1, this.page3.active = !0) : (this.noLockTouch = !0, this.Image_Door_p2.active = !0, this.Image_DoorOpen_p2.active = !1, this.page2.runAction(cc.fadeIn(.5)), this.wasteDoor++)
					}, this));
					this.page2.runAction(t)
				}
			},
			onTapDoorP3: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door_p3.active = !1, this.Image_DoorOpen_p3.active = !0
			},
			onTapDoorOpenP3: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1;
					var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
						this.page3.active = !1, this.page4.active = !0, this.noLockTouch = !0, this.setPageEnable(!0)
					}, this));
					this.page3.runAction(t)
				}
			},
			onTapShelf: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.shelfopen ? (this.Image_shelf.active = !0, this.Image_shelf_open.active = !1, this.Image_camera.active = !1) : (this.Image_shelf.active = !1, this.Image_shelf_open.active = !0, this.hascamera || (this.Image_camera.active = !0)), this.shelfopen = !this.shelfopen)
			},
			onTapShelf2: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.shelfopen2 ? (this.Image_shelf2.active = !0, this.Image_shelf2_open.active = !1, this.Image_gun.active = !1) : (this.Image_shelf2.active = !1, this.Image_shelf2_open.active = !0, this.Image_gun.active = !0), this.shelfopen2 = !this.shelfopen2)
			},
			onTapCamera: function() {
				this.canTouch() && (cc.MyTool.onGetItem(23), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_camera.active = !1, this.hascamera = !0, this.hasItems[cc.nextGetIndex] = "camera")
			},
			onTapGun: function() {
				this.canTouch() && (cc.MyTool.onGetItem(5), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_gun.active = !1, this.hasItems[cc.nextGetIndex] = "gun")
			},
			onTapDoorP4: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door_p4.active = !1, this.Image_DoorOpen_p4.active = !0)
			},
			onTapDoorOpenP4: function() {
				this.noLockTouch = !1, this.setPageEnable(!1);
				var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
					this.page4.active = !1, this.page5.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_x);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}, this));
				this.page4.runAction(t)
			},
			onTapDoorP42: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door_p42.active = !1, this.Image_DoorOpen_p42.active = !0)
			},
			onTapDoorOpenP42: function() {
				this.noLockTouch = !1, this.setPageEnable(!1);
				var t = cc.sequence(cc.fadeOut(1), cc.callFunc(function() {
					this.page4.active = !1, this.page6.active = !0, this.bottomItemPanel.getComponent("MoveCtrl").manualChangePage(0), this.noLockTouch = !0, this.setPageEnable(!0)
				}, this));
				this.page4.runAction(t)
			},
			camera2Man: function() {
				this.canTouch() && (this.hasManReady || (cc.MyTool.playSE(cc.Const_data.Sound_s_camera), this.Image_man.active = !1, this.Image_woman.active = !1, this.Image_man2.active = !0, this.Image_woman2.active = !0, this.Image_ManColider.active = !1, this.hasManReady = !0))
			},
			onTapDoorP6: function() {
				this.canTouch() && this.hasManReady && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door_p6.active = !1, this.Image_DoorOpen_p6.active = !0)
			},
			onTapDoorOpenP6: function() {
				this.canTouch() && this.popGameClear()
			},
			onTapMan: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_go11), this.popGameOver(11))
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage21Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c986aazpVpM17D9NkK+2sXS", "Stage21Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				Image_window: cc.Node,
				Image_window2: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_key: cc.Node,
				Image_rope: cc.Node,
				tabid: cc.Integer,
				curPage: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.string],
				hasremocon: cc.Boolean,
				windowOpenState: cc.Boolean,
				remainTime: cc.Integer,
				remainRope: cc.Integer,
				remainKey: cc.Integer,
				keyReady: cc.Boolean,
				RopeReady: cc.Boolean,
				hasRope: cc.Boolean,
				hasKey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.curPage = 0, this.windowOpenState = !1, this.remainTime = 5, this.remainRope = 2 * this.remainTime, this.remainKey = this.remainTime, this.keyReady = !1, this.RopeReady = !1, this.hasRope = !1, this.hasKey = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				if (e === cc.PageView.EventType.PAGE_TURNING) {
					if (this.curPage = t.getCurrentPageIndex(), 2 != this.curPage && !this.hasKey) {
						this.keyReady = !1, this.Image_key.stopAllActions();
						var o = cc.sequence(cc.fadeOut(0), cc.callFunc(function() {}, this));
						this.Image_key.runAction(o), this.remainKey = this.remainTime
					}
					if (2 != this.curPage && !this.hasRope) {
						this.RopeReady = !1, this.Image_rope.stopAllActions();
						o = cc.sequence(cc.fadeOut(0), cc.callFunc(function() {}, this));
						this.Image_rope.runAction(o), this.remainRope = 2 * this.remainTime
					}
				}
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {
				this.remainKey > 0 && 2 == this.curPage && !this.hasKey && (this.remainKey -= t, this.remainKey <= 0 && this.keyApear()), this.remainRope > 0 && 2 == this.curPage && !this.hasRope && (this.remainRope -= t, this.remainRope <= 0 && this.ropeApear())
			},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapKey: function() {
				this.canTouch() && this.keyReady && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key", this.hasKey = !0, this.itemPanel.getComponent("ItemManager").showGetItem(null, "m05_key_POP"))
			},
			onTapRope: function() {
				this.canTouch() && this.RopeReady && (cc.MyTool.onGetItem(21), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_rope.active = !1, this.hasItems[cc.nextGetIndex] = "rope", this.hasRope = !0, this.itemPanel.getComponent("ItemManager").showGetItem(null, "m80_ST18_rope_POP"))
			},
			onTapWindow: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.windowOpenState ? (this.Image_window.active = !0, this.Image_window2.active = !1) : (this.Image_window.active = !1, this.Image_window2.active = !0), this.windowOpenState = !this.windowOpenState)
			},
			keyApear: function() {
				cc.log("key apear");
				var t = cc.sequence(cc.fadeIn(5), cc.callFunc(function() {
					this.keyReady = !0
				}, this));
				this.Image_key.runAction(t)
			},
			ropeApear: function() {
				cc.log("rope apear");
				var t = cc.sequence(cc.fadeIn(5), cc.callFunc(function() {
					this.RopeReady = !0
				}, this));
				this.Image_rope.runAction(t)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "key" == this.hasItems[t] && 0 == e ? this.openDoor() : "rope" == this.hasItems[t] && 1 == e ? this.rope2Window() : void 0
			},
			openDoor: function() {
				if (!this.hasDoorOpen) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_exclam), this.popGameOver(1)
					}, this));
					return this.node.runAction(t), !0
				}
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			rope2Window: function() {
				return !(!this.canTouch() || !this.windowOpenState) && (cc.MyTool.playSE(cc.Const_data.Sound_s_rod), this.popGameClear(), !0)
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage22Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "775b2J90ItENIOdsNVTcYTU", "Stage22Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				Image_locker: cc.Node,
				Image_locker_open: cc.Node,
				Image_candy: cc.Node,
				Image_boy: cc.Node,
				Image_cheese: cc.Node,
				Image_locker2: cc.Node,
				Image_locker2_open: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_cat: cc.Node,
				Image_cat2: cc.Node,
				Image_dog: cc.Node,
				Image_dog2: cc.Node,
				Image_rat: cc.Node,
				Image_rat2: cc.Node,
				Image_cheese2: cc.Node,
				anims: cc.Node,
				Image_key: cc.Node,
				tabid: cc.Integer,
				curPage: cc.Integer,
				hasItems: [cc.string],
				locker1open: cc.Boolean,
				hasCandy: cc.Boolean,
				hasCat: cc.Boolean,
				itemGot: cc.Integer,
				nextAniIndex: cc.Integer,
				hasKey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean,
				keyReady: cc.Boolean,
				aniItemPositions: [cc.v2]
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, cc.nextGetIndex = 0, this.tabid = 0, this.curPage = 0, this.locker1open = !1, cc.nextGetIndex = 0, this.nextAniIndex = 0, this.hasCandy = !1, this.hasCat = !1, this.hasKey = !1, this.keyReady = !1, this.aniItemPositions[0] = cc.v2(234, -121), this.aniItemPositions[1] = cc.v2(325, -150), this.aniItemPositions[2] = cc.v2(367, -178), this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (cc.log("checkItems" + this.hasItems[t]), null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				e === cc.PageView.EventType.PAGE_TURNING && (this.curPage = t.getCurrentPageIndex())
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapKey: function() {
				this.canTouch() && this.keyReady && (cc.log("tap key"), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_key.active = !1, this.hasItems[cc.nextGetIndex] = "key", this.hasKey = !0, this.itemPanel.getComponent("ItemManager").showGetItem(null, "m05_key_POP"))
			},
			onTapCheese: function() {
				this.canTouch() && (cc.MyTool.onGetItem(26), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_cheese.active = !1, this.hasItems[cc.nextGetIndex] = "cheese")
			},
			onTapCat: function() {
				this.canTouch() && (cc.MyTool.onGetItem(28), this.hasCat = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_cat), this.Image_cat.active = !1, this.hasItems[cc.nextGetIndex] = "cat")
			},
			onTapDog: function() {
				this.canTouch() && (cc.MyTool.onGetItem(27), cc.MyTool.playSE(cc.Const_data.Sound_s_dog), this.Image_dog.active = !1, this.hasItems[cc.nextGetIndex] = "dog")
			},
			onTapRat: function() {
				this.canTouch() && (cc.MyTool.onGetItem(29), cc.MyTool.playSE(cc.Const_data.Sound_s_mouse), this.Image_rat.active = !1, this.hasItems[cc.nextGetIndex] = "rat")
			},
			onTapLocker: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.locker1open ? (this.Image_locker.active = !0, this.Image_locker_open.active = !1) : (this.Image_locker.active = !1, this.Image_locker_open.active = !0), this.locker1open = !this.locker1open)
			},
			onTapLocker2: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1), this.Image_locker2.active = !1, this.Image_locker2_open.active = !0;
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}
			},
			cheese2Hole: function() {
				return !!this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_mouse), this.Image_rat.active = !0, this.Image_cheese2.active = !0, !0)
			},
			dog2Drop: function() {
				if (!this.canTouch()) return !1;
				if (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_dog2.active = !0, 0 != this.nextAniIndex) {
					this.Image_dog2.setPosition(this.aniItemPositions[this.nextAniIndex]), this.noLockTouch = !1, this.setPageEnable(!1), cc.MyTool.playSE(cc.Const_data.Sound_s_booo);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go3_12), this.popGameOver(12)
					}, this));
					this.node.runAction(t)
				}
				return this.nextAniIndex++, !0
			},
			cat2Drop: function() {
				if (!this.canTouch()) return !1;
				if (cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.Image_cat2.active = !0, 1 != this.nextAniIndex) {
					this.Image_cat2.setPosition(this.aniItemPositions[this.nextAniIndex]), this.noLockTouch = !1, this.setPageEnable(!1), cc.MyTool.playSE(cc.Const_data.Sound_s_booo);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go3_12), this.popGameOver(12)
					}, this));
					this.node.runAction(t)
				}
				return this.nextAniIndex++, !0
			},
			rat2Drop: function() {
				if (!this.canTouch()) return !1;
				if (cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.Image_rat2.active = !0, cc.log("this.nextAniIndex:" + this.nextAniIndex), 2 != this.nextAniIndex) {
					this.Image_rat2.setPosition(this.aniItemPositions[this.nextAniIndex]), this.noLockTouch = !1, this.setPageEnable(!1), cc.MyTool.playSE(cc.Const_data.Sound_s_booo);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go3_12), this.popGameOver(12)
					}, this));
					this.node.runAction(t)
				} else {
					var e = this.anims.getComponent(cc.Animation);
					e.on("finished", this.onbox1Finish, this), e.play("ani09");
					t = cc.sequence(cc.delayTime(4), cc.callFunc(function() {
						cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani9)
					}, this));
					this.node.runAction(t)
				}
				return !0
			},
			onbox1Finish: function() {
				cc.log("ani finished"), this.noLockTouch = !0, this.setPageEnable(!0), this.keyReady = !0
			},
			useProp: function(t, e) {
				if (this.canTouch()) {
					if (cc.log("useitem:" + this.hasItems[t]), "key" == this.hasItems[t] && 0 == e) return this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.openDoor();
					var o;
					if ("dog" == this.hasItems[t])
						if (2 == e) return (o = this.dog2Drop()) && this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), o;
					if ("cat" == this.hasItems[t])
						if (2 == e) return (o = this.cat2Drop()) && this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), o;
					if ("rat" == this.hasItems[t])
						if (2 == e) return (o = this.rat2Drop()) && this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), o;
					if ("cheese" == this.hasItems[t])
						if (1 == e && this.hasCat) return (o = this.cheese2Hole()) && this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), o
				}
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_get)
			},
			openDoor: function(t) {
				if (!this.hasDoorOpen) return cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0, !0
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapDoorOpen: function() {
				this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage23Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "77a936FnrBDvpXQOYjcpUW6", "Stage23Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				Image_hari: cc.Node,
				Image_rod_zura: cc.Node,
				Image_locker: cc.Node,
				Image_locker_open: cc.Node,
				Image_rod: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_boss: cc.Node,
				anim10: cc.Node,
				anim11: cc.Node,
				Image_nessi: cc.Node,
				Image_key: cc.Node,
				Image_hari_pond: cc.Node,
				Image_rod_zura2: cc.Node,
				tabid: cc.Integer,
				curPage: cc.Integer,
				hasItems: [cc.string],
				locker1open: cc.Boolean,
				itemGot: cc.Integer,
				hasHair: cc.Boolean,
				hasOut: cc.Boolean,
				hasKey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean,
				keyReady: cc.Boolean,
				reminOut: cc.Integer,
				Scene3Count: cc.Integer
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, cc.nextGetIndex = 0, this.tabid = 0, this.curPage = 0, this.locker1open = !1, cc.nextGetIndex = 0, this.reminOut = 1e6, this.hasOut = !1, this.hasHair = !1, this.hasKey = !1, this.keyReady = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, this.Scene3Count = 0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (cc.log("checkItems" + this.hasItems[t]), null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				e === cc.PageView.EventType.PAGE_TURNING && (this.curPage = t.getCurrentPageIndex(), 2 == this.curPage && this.Scene3Count++, this.Scene3Count >= 3 && !this.hasOut && this.keyApear())
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {},
			keyApear: function() {
				cc.log("key apear"), this.hasOut = !0, this.keyReady = !0, this.Image_nessi.active = !0
			},
			keydisApear: function() {
				cc.log("key dis apear"), this.hasOut = !1, this.keyReady = !1, this.Image_nessi.active = !1
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(5)
			},
			onTapDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1))
			},
			onTapRod: function() {
				this.canTouch() && (cc.MyTool.onGetItem(1), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_rod.active = !1, this.hasRod = !0, this.hasItems[cc.nextGetIndex] = "rod")
			},
			onTapKey: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1);
					var t = this.anim10.getComponent(cc.Animation);
					t.on("finished", this.onbox1Finish, this), t.play("ani10")
				}
			},
			onbox1Finish: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_go2), this.popGameOver(2)
			},
			onTapLocker: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.locker1open ? (this.Image_locker.active = !0, this.Image_locker_open.active = !1, this.Image_rod.active = !1) : (this.Image_locker.active = !1, this.Image_locker_open.active = !0, this.hasRod || (this.Image_rod.active = !0)), this.locker1open = !this.locker1open)
			},
			rod2Hair: function() {
				if (!this.canTouch() || this.hasHair) return !1;
				cc.MyTool.playSE(cc.Const_data.Sound_s_rod), this.noLockTouch = !1, this.setPageEnable(!1), this.hasHair = !0, this.Image_rod_zura.active = !0;
				var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_rod_zura.active = !1, this.Image_hari.active = !1, this.noLockTouch = !0, this.setPageEnable(!0), this.Image_rod.active = !1, cc.MyTool.onGetItem(17), this.hasItems[cc.nextGetIndex] = "hair", this.itemPanel.getComponent("ItemManager").showGetItem(null, "m55_zura_POP")
				}, this));
				return this.node.runAction(t), !1
			},
			rod2pond: function() {
				if (!this.canTouch()) return !1;
				if (this.hasOut) {
					if (cc.MyTool.playSE(cc.Const_data.Sound_s_pond), this.hasKey) return !1;
					this.noLockTouch = !1, this.setPageEnable(!1), this.Image_rod_zura2.active = !0;
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						this.Image_rod_zura2.active = !1, this.Image_rod.active = !1, this.hasItems[cc.nextGetIndex] = "key", this.hasKey = !0, this.Image_key.active = !1, this.itemPanel.getComponent("ItemManager").showGetItem(null, "m05_key_POP"), this.noLockTouch = !0, this.setPageEnable(!0)
					}, this));
					this.node.runAction(t)
				} else {
					cc.MyTool.playSE(cc.Const_data.Sound_s_rod), this.anim11.active = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var e = this.anim11.getComponent(cc.Animation);
					e.on("finished", this.onbox1Finish, this), e.play("ani11");
					t = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
						cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani5_6)
					}, this));
					this.node.runAction(t)
				}
			},
			hair2pond: function() {
				if (!this.canTouch() || this.hasOut) return !1;
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_boss.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_pond);
				var t = cc.sequence(cc.moveTo(.5, cc.v2(-200, 136)), cc.callFunc(function() {
					this.popGameOver(1)
				}, this));
				this.Image_boss.runAction(t)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return cc.log("useitem:" + this.hasItems[t]), "key" == this.hasItems[t] && 0 == e ? this.openDoor() : "rod" == this.hasItems[t] && 1 == e ? this.rod2Hair() : "rod" == this.hasItems[t] && 2 == e ? this.rod2pond() : "hair" == this.hasItems[t] && 2 == e ? this.hair2pond() : void 0
			},
			openDoor: function(t) {
				if (!this.hasDoorOpen) return cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0, !0
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapDoorOpen: function() {
				this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage24Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2ed90spujZMrq5ZdnSG1LC6", "Stage24Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				bottomItemPanel: cc.Node,
				HiraPic: [cc.Node],
				HiraState: cc.Integer,
				BossPic: [cc.Node],
				BossState: cc.Integer,
				RobotPic: [cc.Node],
				RobotState: cc.Integer,
				KakasiPic: [cc.Node],
				KakasiState: cc.Integer,
				BearPic: [cc.Node],
				Bear1State: cc.Integer,
				Bear2State: cc.Integer,
				Image_siryokuhyou2: cc.Node,
				Image_Door: cc.Node,
				Image_Door_open: cc.Node,
				Image_siryokuhyou: cc.Node,
				Image_rotate_icon: cc.Node,
				Image_bear1: cc.Node,
				Image_locker1: cc.Node,
				Image_locker2: cc.Node,
				Image_locker1_2: cc.Node,
				Image_locker1_3: cc.Node,
				Image_locker2_open: cc.Node,
				Image_bear2: cc.Node,
				tabid: cc.Integer,
				curPage: cc.Integer,
				hasItems: [cc.string],
				bearNum: cc.Integer,
				locker1open: cc.Boolean,
				itemGot: cc.Integer,
				hasbear1: cc.Boolean,
				doorPrepare: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean,
				reminPrepare: cc.Integer
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, cc.nextGetIndex = 0, this.tabid = 0, this.curPage = 0, this.hasbear1 = !1, this.locker1open = !1, cc.nextGetIndex = 0, this.HiraState = 0, this.BossState = 0, this.RobotState = 0, this.KakasiState = 0, this.reminPrepare = 0, this.Bear1State = 1, this.Bear2State = 1, this.doorPrepare = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, this.bearNum = 0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (cc.log("checkItems" + this.hasItems[t]), null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				e === cc.PageView.EventType.PAGE_TURNING && (2 != this.curPage || 1 != t.getCurrentPageIndex() || this.hasOut ? 1 != t.getCurrentPageIndex() && (this.reminOut = 1e6) : this.reminOut = 6, this.curPage = t.getCurrentPageIndex())
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {
				this.reminPrepare > 0 && (this.reminPrepare -= 3 * t)
			},
			keyApear: function() {
				cc.log("key apear"), this.hasOut = !0, this.keyReady = !0, this.Image_nessi.active = !0
			},
			onReciveGotItem: function(t) {
				"m07_drink_POP" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(1)
			},
			onTapBoss: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1))
			},
			onTapLocker1: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_mat), this.Image_locker1.active = !1, this.Image_locker1_2.active = !0)
			},
			onTapLocker1_2: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_mat), this.Image_locker1_2.active = !1, this.Image_locker1_3.active = !0)
			},
			onTapBear1: function() {
				this.canTouch() && (cc.MyTool.onGetItem(30), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_bear1.active = !1, this.hasItems[cc.nextGetIndex] = "bear")
			},
			onTapBear2: function() {
				this.canTouch() && (cc.MyTool.onGetItem(30), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_bear2.active = !1, this.hasItems[cc.nextGetIndex] = "bear", this.hasbear1 = !0)
			},
			onTapRotate: function() {
				this.canTouch() && (cc.MyTool.onGetItem(31), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_rotate_icon.active = !1, this.hasItems[cc.nextGetIndex] = "rotate")
			},
			onTapLocker2: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.locker1open ? (this.Image_locker2.active = !0, this.Image_locker2_open.active = !1, this.Image_bear2.active = !1) : (this.Image_locker2.active = !1, this.Image_locker2_open.active = !0, this.hasbear1 || (this.Image_bear2.active = !0)), this.locker1open = !this.locker1open)
			},
			rotate2Hira: function() {
				if (!this.canTouch()) return !1;
				3 == this.HiraState ? this.HiraState = 0 : this.HiraState++, this.changeHiraState()
			},
			changeHiraState: function() {
				for (var t = 0; t < 4; t++) this.HiraPic[t].active = !1;
				cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.HiraPic[this.HiraState].active = !0, this.reminPrepare = 1, this.checkState()
			},
			rotate2Boss: function() {
				if (!this.canTouch()) return !1;
				3 == this.BossState ? this.BossState = 0 : this.BossState++, this.changeBossState()
			},
			changeBossState: function() {
				for (var t = 0; t < 4; t++) this.BossPic[t].active = !1;
				cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.BossPic[this.BossState].active = !0, this.reminPrepare = 1, this.checkState()
			},
			rotate2Robot: function() {
				if (!this.canTouch()) return !1;
				3 == this.RobotState ? this.RobotState = 0 : this.RobotState++, this.changeRobotState()
			},
			changeRobotState: function() {
				for (var t = 0; t < 4; t++) this.RobotPic[t].active = !1;
				cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.RobotPic[this.RobotState].active = !0, this.reminPrepare = 1, this.checkState()
			},
			rotate2Kakasi: function() {
				if (!this.canTouch()) return !1;
				3 == this.KakasiState ? this.KakasiState = 0 : this.KakasiState++, this.changeKakasiState()
			},
			changeKakasiState: function() {
				for (var t = 0; t < 4; t++) this.KakasiPic[t].active = !1;
				cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.KakasiPic[this.KakasiState].active = !0, this.reminPrepare = 1, this.checkState()
			},
			rotate2Bear1: function() {
				cc.log("rotate to bear1"), 4 == this.Bear1State ? this.Bear1State = 1 : this.Bear1State++, this.changeBear1State()
			},
			changeBear1State: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_poster);
				this.BearPic[0].getComponent(cc.Sprite);
				var t = this;
				cc.loader.loadRes("/Item/m98_beardoll" + this.Bear1State, cc.SpriteFrame, function(e, o) {
					cc.log("err:" + e), t.BearPic[0].getComponent(cc.Sprite).spriteFrame = o, t.BearPic[0].type = cc.Sprite.Type.SIMPLE, t.BearPic[0].sizeMode = cc.Sprite.SizeMode.CUSTOM, t.BearPic[0].width = 125, t.BearPic[0].height = 100
				}), this.reminPrepare = 1, this.checkState()
			},
			rotate2Bear2: function() {
				cc.log("rotate to bear2"), 4 == this.Bear2State ? this.Bear2State = 1 : this.Bear2State++, this.changeBear2State()
			},
			changeBear2State: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_poster);
				var t = this;
				cc.loader.loadRes("/Item/m98_beardoll" + this.Bear2State, cc.SpriteFrame, function(e, o) {
					cc.log("err:" + e), t.BearPic[1].getComponent(cc.Sprite).spriteFrame = o, t.BearPic[1].type = cc.Sprite.Type.SIMPLE, t.BearPic[1].sizeMode = cc.Sprite.SizeMode.CUSTOM, t.BearPic[1].width = 125, t.BearPic[1].height = 100
				}), this.reminPrepare = 1, this.checkState()
			},
			addBear: function(t) {
				this.bottomItemPanel.getComponent("MoveCtrl").targetItem[4 + this.bearNum] = t, this.BearPic[this.bearNum] = t, this.bearNum++
			},
			checkState: function() {
				this.doorPrepare || 2 == this.HiraState && 0 == this.BossState && 1 == this.RobotState && 2 == this.KakasiState && 1 == this.Bear1State && 4 == this.Bear2State && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_siryokuhyou.active = !1, this.Image_Door.active = !0, this.Image_siryokuhyou2.active = !0, this.doorPrepare = !0)
			},
			useProp: function(t, e) {
				if (this.canTouch() && !(this.reminPrepare > 0)) return cc.log("useitem:" + this.hasItems[t] + "targetid" + e), "rotate" == this.hasItems[t] && 0 == e ? this.rotate2Hira() : "rotate" == this.hasItems[t] && 1 == e ? this.rotate2Boss() : "rotate" == this.hasItems[t] && 2 == e ? this.rotate2Robot() : "rotate" == this.hasItems[t] && 3 == e ? this.rotate2Kakasi() : "rotate" == this.hasItems[t] && 4 == e ? this.rotate2Bear1() : "rotate" == this.hasItems[t] && 5 == e ? this.rotate2Bear2() : void 0
			},
			openDoor: function() {
				if (this.canTouch() && this.doorPrepare) return this.hasDoorOpen ? void 0 : (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_Door_open.active = !0, this.hasDoorOpen = !0, !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapDoorOpen: function() {
				this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage2Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "1ab97kJtVdKLojQUbWieuLN", "Stage2Action"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../common/component/XCamera"),
			n = t("../common/Utils"),
			a = t("./StagAction"),
			i = t("../GameSys"),
			s = cc._decorator,
			r = s.ccclass,
			h = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.img_rod = null, e.img_door_open = null, e.img_door = null, e.img_use_road = null, e.img_man = null, e.hasItems = [], e.itemGot = 0, e.haskey = !1, e.tabid = 0, e.isShelfOpened = !1, e.hasDoorOpen = !1, e.hasRod = !1, e.noLockTouch = !0, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					0 != i.default.gameState ? (cc.nextGetIndex = 0, cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL)) : cc.director.loadScene("loading")
				}, e.prototype.checkItems = function(t) {
					if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
				}, e.prototype.useProp = function(t, e) {
					if (cc.log("item:" + this.hasItems[t] + "to what" + e), this.canTouch()) return "rod" == this.hasItems[t] && 0 == e && this.onGotKey(), "key" == this.hasItems[t] && 1 == e ? (this.openDoor(), !0) : void 0
				}, e.prototype.openDoor = function() {
					cc.log("open door"), this.haskey && !this.hasDoorOpen && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.hasDoorOpen = !0, this.img_door.active = !1, this.img_door_open.active = !0)
				}, e.prototype.toStart = function() {
					cc.director.loadScene("helloworld")
				}, e.prototype.onReciveGotItem = function(t) {
					cc.log("recive item:" + t)
				}, e.prototype.onTapKey = function() {
					if (this.canTouch()) {
						cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.noLockTouch = !1, this.img_man.active = !0;
						var t = cc.sequence(cc.moveTo(1.4, cc.p(0, -214)), cc.callFunc(function() {
							cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani1)
						}, this));
						this.img_man.runAction(t);
						var e = this.img_man.getComponent(cc.Animation);
						e.on("finished", this.onFinished, this), e.play("ani01")
					}
				}, e.prototype.onFinished = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t, e;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return [4, n.default.loadPrefab("prefab/settle/gameOverPanel")];
								case 1:
									return t = o.sent(), e = cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
										cc.MyTool.playSE(cc.Const_data.Sound_s_go2);
										var e = cc.instantiate(t);
										c.default.Instance.node.addChild(e), e.getComponent("gameOverPanel").onFail(2)
									})), this.node.runAction(e), [2]
							}
						})
					})
				}, e.prototype.onTapRod = function() {
					this.canTouch() && (cc.MyTool.onGetItem(1), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_rod.active = !1, this.hasRod = !0, this.hasItems[cc.nextGetIndex] = "rod")
				}, e.prototype.onGotKey = function() {
					if (this.canTouch() && !this.haskey) {
						cc.MyTool.playSE(cc.Const_data.Sound_s_rod), this.noLockTouch = !1, this.img_use_road.active = !0;
						var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
							cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_key.active = !1, this.haskey = !0, this.hasItems[cc.nextGetIndex] = "key", this.noLockTouch = !0, this.img_use_road.active = !1, this.itemPanel.getComponent("ItemManager").showGetItem(null, "m05_key_POP")
						}, this));
						this.img_use_road.runAction(t)
					}
				}, __decorate([h({
					type: cc.Node,
					displayName: "\u9c7c\u7aff"
				})], e.prototype, "img_rod", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u5f00\u7740\u7684\u95e8"
				})], e.prototype, "img_door_open", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u5173\u7740\u7684\u95e8"
				})], e.prototype, "img_door", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u73a9\u5bb6\u7528\u7684\u9c7c\u7aff"
				})], e.prototype, "img_use_road", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u9b3c\u9b3c\u795f\u795f\u7684\u7537\u4eba"
				})], e.prototype, "img_man", void 0), __decorate([h({
					type: cc.String,
					displayName: ""
				})], e.prototype, "hasItems", void 0), e = __decorate([r], e)
			}(a.default);
		o.default = u, cc._RF.pop()
	}, {
		"../GameSys": "GameSys",
		"../common/Utils": "Utils",
		"../common/component/XCamera": "XCamera",
		"./StagAction": "StagAction"
	}],
	Stage3Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "e7c19VhdsxNb6Bwi6/yk971", "Stage3Action"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("./StagAction"),
			s = t("../GameData"),
			r = t("../common/Utils"),
			h = t("../common/component/XCamera"),
			u = t("../GameSys"),
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.img_pod = null, e.img_shelf = null, e.img_shelf_open = null, e.door_close = null, e.door_open = null, e.img_tree = null, e.img_tree_open = null, e.img_tree_yellow = null, e.haskey = !1, e.tabid = 0, e.ispodup = !1, e.hasDoorOpen = !1, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					0 != u.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new s.default, this.tabid = 0, this.ispodup = !1, this.haskey = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
				}, e.prototype.setPageEnable = function(t) {
					this.pagePanel.getComponent(cc.PageView).enabled = t
				}, e.prototype.checkKey = function() {
					return this.haskey
				}, e.prototype.canTouch = function() {
					return this.noLockTouch
				}, e.prototype.useKey = function() {
					this.canTouch() && this.haskey && !this.hasDoorOpen && (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.door_close.active = !1, this.door_open.active = !0)
				}, e.prototype.onOpenDoor = function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
				}, e.prototype.toStart = function() {
					cc.director.loadScene("helloworld")
				}, e.prototype.onReciveGotItem = function(t) {
					cc.log("recive item:" + t)
				}, e.prototype.onClickBoss = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t, e;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return this.canTouch() ? (cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), [4, r.default.loadPrefab("prefab/settle/gameOverPanel")]) : [2];
								case 1:
									return t = o.sent(), e = cc.instantiate(t), h.default.Instance.node.addChild(e), e.getComponent("gameOverPanel").onFail(1), [2]
							}
						})
					})
				}, e.prototype.onTapKey = function() {
					this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_key.active = !1, this.haskey = !0)
				}, e.prototype.onTapTreeYello = function() {
					this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.img_tree.active = !1, this.img_tree_yellow.active = !1, this.img_key.active = !0, this.img_tree_open.active = !0)
				}, e.prototype.onTapShelf = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t, e;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return this.canTouch() ? (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.img_shelf_open.active = !0, this.img_shelf.active = !1, this.noLockTouch = !1, this.setPageEnable(!1), [4, r.default.loadPrefab("prefab/settle/gameOverPanel")]) : [2];
								case 1:
									return t = o.sent(), e = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
										cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4);
										var e = cc.instantiate(t);
										h.default.Instance.node.addChild(e), e.getComponent("gameOverPanel").onFail(1)
									})), this.node.runAction(e), [2]
							}
						})
					})
				}, e.prototype.onTapShelfOpen = function() {
					this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_open), this.img_shelf_open.active = !1, this.img_shelf.active = !0)
				}, e.prototype.onTapPod = function() {
					if (this.canTouch())
						if (cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.noLockTouch = !1, this.ispodup) {
							var t = cc.sequence(cc.moveTo(.2, cc.v2(-225, 315)), cc.callFunc(function() {
								this.ispodup = !1, this.noLockTouch = !0
							}, this));
							this.img_pod.runAction(t)
						} else {
							t = cc.sequence(cc.moveTo(.2, cc.v2(-225, 350)), cc.callFunc(function() {
								this.ispodup = !0, this.noLockTouch = !0
							}, this));
							this.img_pod.runAction(t)
						}
				}, __decorate([a({
					type: cc.Node,
					displayName: "\u5012\u8fc7\u6765\u7684\u82b1\u76c6"
				})], e.prototype, "img_pod", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5173\u7740\u7684\u67dc\u5b50"
				})], e.prototype, "img_shelf", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5f00\u7740\u7684\u67dc\u5b50"
				})], e.prototype, "img_shelf_open", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5173\u7740\u7684\u95e8"
				})], e.prototype, "door_close", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u5f00\u7740\u7684\u95e8"
				})], e.prototype, "door_open", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u6811"
				})], e.prototype, "img_tree", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u70b9\u51fb\u540e\u7684\u6811"
				})], e.prototype, "img_tree_open", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u6811\u4e0a\u60ac\u6302\u7684\u9ec4\u8272\u5361\u7247"
				})], e.prototype, "img_tree_yellow", void 0), e = __decorate([n], e)
			}(i.default);
		o.default = d, cc._RF.pop()
	}, {
		"../GameData": "GameData",
		"../GameSys": "GameSys",
		"../common/Utils": "Utils",
		"../common/component/XCamera": "XCamera",
		"./StagAction": "StagAction"
	}],
	Stage4Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "d8420/Y3jlJtLeeAvqSpx4u", "Stage4Action"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("./StagAction"),
			s = t("../GameData"),
			r = t("../common/Utils"),
			h = t("../common/component/XCamera"),
			u = t("../GameSys"),
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.workingPanel = null, e.drinking = [], e.img_boss = null, e.img_boss_up = null, e.img_boss_anger = null, e.img_hira = null, e.img_hira_up = null, e.img_door = null, e.img_door_open = null, e.img_man = null, e.img_man_up = null, e.img_banana1 = null, e.img_banana2 = null, e.img_banana3 = null, e.img_drink = null, e.tabid = 0, e.itemGot = 0, e.hasItems = [], e.hasbossrun = !1, e.hashirarun = !1, e.hasmanrun = !1, e.hasDoorOpen = !1, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					0 != u.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new s.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasbossrun = !1, this.hashirarun = !1, this.hasmanrun = !1, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
				}, e.prototype.checkItems = function(t) {
					if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
				}, e.prototype.canTouch = function() {
					return this.noLockTouch
				}, e.prototype.changePage = function(t, e) {
					cc.PageView.EventType.PAGE_TURNING
				}, e.prototype.useProp = function(t, e) {
					if (this.canTouch() && "banana" == this.hasItems[t]) {
						if (0 == e) return this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.hiraUp(), !0;
						if (1 == e) return this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.BossUp(), !0;
						if (2 == e) return this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.ManUp(), !0
					}
				}, e.prototype.toStart = function() {
					cc.director.loadScene("helloworld")
				}, e.prototype.onReciveGotItem = function(t) {
					"m07_drink_POP" == t && this.startDrink()
				}, e.prototype.openDoor = function() {
					this.hasDoorOpen || (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.img_door_open.active = !0, this.img_door.active = !1, this.hasDoorOpen = !0)
				}, e.prototype.hiraUp = function() {
					if (this.canTouch() && !this.hashirarun) {
						this.setPageEnable(!1), this.noLockTouch = !1, this.hashirarun = !0, this.img_hira.active = !1, this.img_hira_up.active = !0;
						var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
							this.noLockTouch = !0, this.setPageEnable(!0), cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.img_hira_up.active = !1
						}, this));
						this.node.runAction(t)
					}
				}, e.prototype.BossUp = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t, e;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return this.canTouch() ? this.hasbossrun ? [3, 2] : (this.setPageEnable(!1), this.noLockTouch = !1, this.hasbossrun = !0, this.img_boss.active = !1, this.img_boss_up.active = !0, [4, r.default.loadPrefab("prefab/settle/gameOverPanel")]) : [2];
								case 1:
									t = o.sent(), e = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
										if (this.noLockTouch = !0, this.img_boss_up.active = !1, this.setPageEnable(!0), this.checkAllReady(), cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), !this.hasmanrun || !this.hashirarun) {
											this.noLockTouch = !1, this.setPageEnable(!1);
											var e = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
												this.img_boss_anger.active = !0;
												var e = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
													var e = cc.instantiate(t);
													h.default.Instance.node.addChild(e), e.getComponent("gameOverPanel").onFail(4)
												}, this));
												this.node.runAction(e)
											}, this));
											this.node.runAction(e)
										}
									}, this)), this.node.runAction(e), o.label = 2;
								case 2:
									return [2]
							}
						})
					})
				}, e.prototype.ManUp = function() {
					if (this.canTouch() && !this.hasmanrun) {
						this.setPageEnable(!1), this.noLockTouch = !1, this.hasmanrun = !0, this.img_man.active = !1, this.img_man_up.active = !0;
						var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
							this.noLockTouch = !0, this.setPageEnable(!0), cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.img_man_up.active = !1
						}, this));
						this.node.runAction(t)
					}
				}, e.prototype.checkAllReady = function() {
					this.hasmanrun && this.hasbossrun && this.hashirarun && this.openDoor()
				}, e.prototype.setPageEnable = function(t) {
					this.pagePanel.getComponent(cc.PageView).enabled = t
				}, e.prototype.onOpenDoor = function() {
					cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
				}, e.prototype.onTapBanana1 = function() {
					this.canTouch() && (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), cc.MyTool.onGetItem(2), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_banana1.active = !1, this.hasItems[cc.nextGetIndex] = "banana")
				}, e.prototype.onTapBanana2 = function() {
					this.canTouch() && (cc.MyTool.onGetItem(2), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_banana2.active = !1, this.hasItems[cc.nextGetIndex] = "banana")
				}, e.prototype.onTapBanana3 = function() {
					this.canTouch() && (cc.MyTool.onGetItem(2), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_banana3.active = !1, this.hasItems[cc.nextGetIndex] = "banana")
				}, e.prototype.onTapBottle = function() {
					this.canTouch() && (cc.MyTool.onGetItem(3), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_drink.active = !1, this.hasItems[cc.nextGetIndex] = "bottle")
				}, e.prototype.startDrink = function() {
					var t = this;
					this.noLockTouch = !1, this.setPageEnable(!1), this.workingPanel.active = !0;
					var e = 0,
						o = cc.delayTime(1),
						c = cc.callFunc(function() {
							e++, t.setDrink(e)
						}, this);
					this.node.runAction(cc.repeat(cc.sequence(o, c), 5))
				}, e.prototype.setDrink = function(t) {
					return __awaiter(this, void 0, void 0, function() {
						var e, o;
						return __generator(this, function(c) {
							switch (c.label) {
								case 0:
									return 1 == t && (this.drinking[0].active = !0, this.drinking[1].active = !1, this.drinking[2].active = !1), 2 == t && (this.drinking[0].active = !1, this.drinking[1].active = !0, this.drinking[2].active = !1), 3 == t && (this.drinking[0].active = !1, this.drinking[1].active = !1, this.drinking[2].active = !0), 5 != t ? [3, 2] : (this.noLockTouch = !0, this.setPageEnable(!0), this.workingPanel.active = !1, cc.MyTool.playSE(cc.Const_data.Sound_s_go3_12), [4, r.default.loadPrefab("prefab/settle/gameOverPanel")]);
								case 1:
									e = c.sent(), o = cc.instantiate(e), h.default.Instance.node.addChild(o), o.getComponent("gameOverPanel").onFail(3), c.label = 2;
								case 2:
									return [2]
							}
						})
					})
				}, __decorate([a({
					type: cc.Node,
					displayName: "\u52a0\u73ed\u9762\u677f"
				})], e.prototype, "workingPanel", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u996e\u6599"
				})], e.prototype, "drinking", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u8001\u677f"
				})], e.prototype, "img_boss", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u7ad9\u8d77\u6765\u7684\u8001\u677f"
				})], e.prototype, "img_boss_up", void 0), __decorate([a({
					type: cc.Node,
					displayName: "\u751f\u6c14\u7684\u8001\u677f"
				})], e.prototype, "img_boss_anger", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_hira", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_hira_up", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_door", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_door_open", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_man", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_man_up", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_banana1", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_banana2", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_banana3", void 0), __decorate([a({
					type: cc.Node,
					displayName: ""
				})], e.prototype, "img_drink", void 0), e = __decorate([n], e)
			}(i.default);
		o.default = d, cc._RF.pop()
	}, {
		"../GameData": "GameData",
		"../GameSys": "GameSys",
		"../common/Utils": "Utils",
		"../common/component/XCamera": "XCamera",
		"./StagAction": "StagAction"
	}],
	Stage5Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "60d98KlIPBCmIuHfVqcsKte", "Stage5Action");
		var c = h(t("./stage/StagAction")),
			n = h(t("./common/Caches")),
			a = h(t("./GameData")),
			i = h(t("./common/component/XCamera")),
			s = h(t("./common/Audio")),
			r = h(t("./GameSys"));

		function h(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				image_rod: cc.Node,
				Image_Door: cc.Node,
				Image_DoorOpen: cc.Node,
				Image_frame_B: cc.Node,
				Image_pic_B: cc.Node,
				image_boss: cc.Node,
				Image_frame_tar: cc.Node,
				Image_boss2: cc.Node,
				Image_boss3: cc.Node,
				Image_rodUse: cc.Node,
				Image_pic_B2: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.String],
				haspicready: cc.Boolean,
				hasBossRunning: cc.Boolean,
				hasBossReady: cc.Boolean,
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != r.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new s.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.haspicready = !1, this.hasDoorOpen = !1, this.noLockTouch = !0, this.hasBossRunning = !1, this.hasBossReady = !1) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "rod" == this.hasItems[t] && 0 == e && this.getKeyFromRod(), "paint" == this.hasItems[t] && 1 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.putPic(), !0) : "key" == this.hasItems[t] && 2 == e ? (this.itemPanel.getComponent("ItemManager").onUseItemIndex(t), this.openDoor(), !0) : void 0
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			update: function(t) {},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink()
			},
			getKeyFromRod: function() {
				if (this.canTouch() && this.hasBossRunning && !this.hasBossReady) {
					this.hasBossReady = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_rod), this.Image_rodUse.active = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						this.haskey = !0, this.img_key.active = !1, this.Image_rodUse.active = !1, this.hasItems[cc.nextGetIndex] = "key", cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.itemPanel.getComponent("ItemManager").showGetItem(null, "m05_key_POP"), this.noLockTouch = !0, this.setPageEnable(!0)
					}, this));
					this.node.runAction(t)
				}
			},
			startBossRun: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.image_boss.active = !1, this.Image_boss2.active = !0;
				var t = cc.sequence(cc.moveTo(1, cc.v2(0, 50)), cc.callFunc(function() {
					this.hasBossRunning = !0, this.noLockTouch = !0, this.setPageEnable(!0)
				}, this));
				this.Image_boss2.runAction(t)
			},
			openDoor: function() {
				this.hasDoorOpen || (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_DoorOpen.active = !0, this.hasDoorOpen = !0)
			},
			putPic: function() {
				this.haspicready || (cc.MyTool.playSE(cc.Const_data.Sound_s_set), this.Image_pic_B2.active = !0, this.haspicready = !0, this.startBossRun())
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapCloseDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapBoss: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4);
					var t = cc.instantiate(this.gameOverPanel);
					i.default.Instance.node.addChild(t), t.getComponent("gameOverPanel").onFail(1)
				}
			},
			onTapBoss2: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_exclam), this.Image_boss2.active = !1, this.Image_boss3.active = !0, this.noLockTouch = !1, this.setPageEnable(!1);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go3_12);
						var t = cc.instantiate(this.gameOverPanel);
						i.default.Instance.node.addChild(t), t.getComponent("gameOverPanel").onFail(3)
					}, this));
					this.node.runAction(t)
				}
			},
			onTapPic: function() {
				this.canTouch() && !this.haspicready && (cc.MyTool.onGetItem(4), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_pic_B.active = !1, this.hasItems[cc.nextGetIndex] = "paint", this.itemPanel.getComponent("ItemManager").showGetItem(null, "m19_picture_POP"))
			},
			onTapRod: function() {
				this.canTouch() && (cc.MyTool.onGetItem(1), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.image_rod.active = !1, this.hasItems[cc.nextGetIndex] = "rod")
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./common/component/XCamera": "XCamera",
		"./stage/StagAction": "StagAction"
	}],
	Stage6Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "7321axiDD9N+4fH+lblIyek", "Stage6Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				img_hole1: cc.Node,
				img_hole2: cc.Node,
				img_hole3: cc.Node,
				img_real_hole: cc.Node,
				img_gun: cc.Node,
				img_boss: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.String],
				noLockTouch: cc.Boolean,
				hole1Move: cc.Boolean,
				hole2Move: cc.Boolean,
				hole3Move: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.hole1Move = !1, this.hole2Move = !1, this.hole3Move = !1) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && (cc.MyTool.playSE(cc.Const_data.Sound_s_go5), this.popGameOver(5))
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapHole1: function() {
				if (this.canTouch() && !this.hole1Move) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_rock), this.img_real_hole.active = !0, this.noLockTouch = !1;
					var t = cc.sequence(cc.moveBy(.2, cc.v2(0, 150)), cc.callFunc(function() {
						this.hole1Move = !0, this.noLockTouch = !0
					}, this));
					this.img_hole1.runAction(t)
				}
			},
			onTapHole2: function() {
				if (this.canTouch() && !this.hole2Move) {
					this.img_boss.active = !0, this.noLockTouch = !1, cc.MyTool.playSE(cc.Const_data.Sound_s_rock);
					var t = cc.sequence(cc.moveBy(.2, cc.v2(0, 150)), cc.callFunc(function() {
						var t = cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
							cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
						}, this));
						this.node.runAction(t)
					}, this));
					this.img_hole2.runAction(t)
				}
			},
			onTapHole3: function() {
				if (this.canTouch() && !this.hole3Move) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_rock), this.img_gun.active = !0, this.noLockTouch = !1;
					var t = cc.sequence(cc.moveBy(.2, cc.v2(200, 0)), cc.callFunc(function() {
						this.hole3Move = !0, this.noLockTouch = !0
					}, this));
					this.img_hole3.runAction(t)
				}
			},
			onTapGun: function() {
				this.canTouch() && (cc.MyTool.onGetItem(5), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_gun.active = !1)
			},
			onTapRealHole: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_escape), this.popGameClear())
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage7Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c5ac4AvoSFN9Ye2TlhIcG3R", "Stage7Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_Door: cc.Node,
				Image_DoorOpen: cc.Node,
				Image_locker1: cc.Node,
				Image_locker1_open: cc.Node,
				Image_locker2: cc.Node,
				Image_locker2_open: cc.Node,
				Image_locker3: cc.Node,
				Image_locker3_open: cc.Node,
				Image_locker3_open_2: cc.Node,
				Image_touch_pic: cc.Node,
				Image_gun: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.String],
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "key" == this.hasItems[t] && (cc.log("open door"), 0 == e) ? (this.openDoor(), !0) : void 0
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && (cc.MyTool.playSE(cc.Const_data.Sound_s_go5), this.popGameOver(5))
			},
			openDoor: function() {
				this.hasDoorOpen || (cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), this.Image_Door.active = !1, this.Image_DoorOpen.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapGun: function() {
				this.canTouch() && (cc.MyTool.onGetItem(5), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_gun.active = !1, this.hasItems[cc.nextGetIndex] = "gun")
			},
			onTapLocker1: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.noLockTouch = !1, this.Image_locker1.active = !1, this.Image_locker1_open.active = !0, this.setPageEnable(!1);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}
			},
			onTapLocker2: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.Image_locker2.active = !1, this.Image_locker2_open.active = !0)
			},
			onTapLocker3: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_locker), this.Image_locker3.active = !1, this.Image_locker3_open.active = !0, this.Image_gun.active = !0, this.Image_touch_pic.active = !0)
			},
			onTapPaint: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.Image_locker3_open.active = !1, this.Image_locker3_open_2.active = !0, this.img_key.active = !0, this.Image_touch_pic.active = !1)
			},
			onTapKey: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.img_key.active = !1, this.hasItems[cc.nextGetIndex] = "key")
			},
			onTapCloseDoor: function() {
				cc.MyTool.playSE(cc.Const_data.Sound_s_dont_open)
			},
			onTapDoor: function() {
				this.canTouch() && this.popGameClear()
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage8Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "fef09zjbDBF1JvgmRkAUawM", "Stage8Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_wallpaper1: cc.Node,
				Image_doorwall1: cc.Node,
				Image_boss: cc.Node,
				Image_wallpaper1_open: cc.Node,
				Image_wallpaper2: cc.Node,
				Image_wallpaper2_open: cc.Node,
				Image_poster: cc.Node,
				Image_poster_2: cc.Node,
				Image_hole: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.String],
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onMenuClick: function() {
				this.canTouch() && (this.menuPanel.active = !0)
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(5)
			},
			openDoor: function() {
				this.hasDoorOpen || (this.Image_Door.active = !1, this.Image_DoorOpen.active = !0, this.hasDoorOpen = !0)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapwallpaper1: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.Image_wallpaper1.active = !1, this.Image_wallpaper1_open.active = !0, this.Image_doorwall1.active = !0)
			},
			onTapDoorWall: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), cc.MyTool.playSE(cc.Const_data.Sound_s_exclam), this.noLockTouch = !1, this.setPageEnable(!1), this.Image_doorwall1.active = !1, this.Image_boss.active = !0;
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}
			},
			onTapwallpaper2: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.Image_wallpaper2.active = !1, this.Image_wallpaper2_open.active = !0, this.Image_poster.active = !0)
			},
			onTapHole: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_escape), this.popGameClear())
			},
			onTapPoseter: function() {
				this.canTouch() && (cc.MyTool.playSE(cc.Const_data.Sound_s_poster), this.Image_poster.active = !1, this.Image_poster_2.active = !0, this.Image_hole.active = !0)
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	Stage9Action: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "708970uBypHXbWY+Nj4orU6", "Stage9Action");
		var c = r(t("./stage/StagAction")),
			n = r(t("./common/Caches")),
			a = r(t("./GameData")),
			i = r(t("./common/Audio")),
			s = r(t("./GameSys"));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		cc.Class({
			extends: c.default,
			properties: {
				Image_ketchup: cc.Node,
				Image_door: cc.Node,
				Image_door_open_ani: cc.Node,
				Image_door_open: cc.Node,
				Image_rope: cc.Node,
				Image_rope_after: cc.Node,
				image_dead: cc.Node,
				image_dead_reverse: cc.Node,
				image_survive_reverse: cc.Node,
				image_survive: cc.Node,
				Image_suvive_after: cc.Node,
				tabid: cc.Integer,
				itemGot: cc.Integer,
				hasItems: [cc.String],
				haskey: cc.Boolean,
				hasDoorOpen: cc.Boolean,
				noLockTouch: cc.Boolean
			},
			onLoad: function() {
				0 != s.default.gameState ? (cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL), new n.default, new i.default, new a.default, this.tabid = 0, cc.nextGetIndex = 0, this.hasDoorOpen = !1, this.noLockTouch = !0) : cc.director.loadScene("loading")
			},
			checkItems: function(t) {
				if (null != this.hasItems[t] && "" != this.hasItems[t]) return this.hasItems[t]
			},
			canTouch: function() {
				return this.noLockTouch
			},
			changePage: function(t, e) {
				cc.PageView.EventType.PAGE_TURNING
			},
			toStart: function() {
				cc.director.loadScene("helloworld")
			},
			onReciveGotItem: function(t) {
				"m15_drink_pop" == t && this.startDrink(), "m119_gun_POP" == t && this.popGameOver(5)
			},
			useProp: function(t, e) {
				if (this.canTouch()) return "bottle" == this.hasItems[t] && 0 == e ? (this.setSurvive(), !0) : void 0
			},
			setSurvive: function() {
				this.noLockTouch = !1, this.setPageEnable(!1), this.Image_rope.active = !1, this.Image_suvive_after.active = !0, this.Image_door_open_ani.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_damage);
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					this.image_survive.active = !0, cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani2);
					var t = this.image_survive.getComponent(cc.Animation);
					t.on("finished", this.onSurvive1Finish, this), t.play("ani02")
				}, this));
				this.node.runAction(t)
			},
			onSurvive1Finish: function() {
				cc.log("ani survive finish"), this.Image_suvive_after.active = !1, this.Image_rope.active = !0, this.image_survive.active = !1, this.image_survive_reverse.active = !0;
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					var t = this.image_survive_reverse.getComponent(cc.Animation);
					t.on("finished", this.onSurvive2Finish, this), t.play("ani02-r")
				}, this));
				this.node.runAction(t)
			},
			onSurvive2Finish: function() {
				var t = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
					this.image_survive_reverse.active = !1, this.Image_door_open_ani.active = !1;
					var t = cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
						this.popGameClear()
					}, this));
					this.node.runAction(t)
				}, this));
				this.node.runAction(t)
			},
			setPageEnable: function(t) {
				this.pagePanel.getComponent(cc.PageView).enabled = t
			},
			onTapketchup: function() {
				this.canTouch() && (cc.MyTool.onGetItem(6), cc.MyTool.playSE(cc.Const_data.Sound_s_get), this.Image_ketchup.active = !1, this.hasItems[cc.nextGetIndex] = "bottle")
			},
			onTapDoor: function() {
				if (this.canTouch()) {
					this.noLockTouch = !1, this.setPageEnable(!1), this.Image_door.active = !1, this.Image_door_open.active = !0, cc.MyTool.playSE(cc.Const_data.Sound_s_door_open), cc.MyTool.playSE(cc.Const_data.Sound_s_exclam);
					var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go1_4), this.popGameOver(1)
					}, this));
					this.node.runAction(t)
				}
			},
			onTaprope: function() {
				if (this.canTouch()) {
					cc.MyTool.playSE(cc.Const_data.Sound_s_dead), this.noLockTouch = !1, this.setPageEnable(!1), this.Image_rope.active = !1, this.Image_rope_after.active = !0, this.Image_door_open_ani.active = !0;
					var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
						this.image_dead.active = !0, cc.MyTool.playAnimeSE(cc.Const_data.Sound_s_ani3_4);
						var t = this.image_dead.getComponent(cc.Animation);
						t.on("finished", this.onDead1Finish, this), t.play("ani03")
					}, this));
					this.node.runAction(t)
				}
			},
			onDead1Finish: function() {
				cc.log("ani dead finish"), this.Image_rope_after.active = !1, this.Image_rope.active = !0;
				var t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					this.image_dead.active = !1, this.image_dead_reverse.active = !0;
					var t = this.image_dead_reverse.getComponent(cc.Animation);
					t.on("finished", this.onDead2Finish, this), t.play("ani03-r")
				}, this));
				this.node.runAction(t)
			},
			onDead2Finish: function() {
				var t = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
					this.image_dead_reverse.active = !1, this.Image_door_open_ani.active = !1;
					var t = cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
						cc.MyTool.playSE(cc.Const_data.Sound_s_go2), this.popGameOver(2)
					}, this));
					this.node.runAction(t)
				}, this));
				this.node.runAction(t)
			}
		}), cc._RF.pop()
	}, {
		"./GameData": "GameData",
		"./GameSys": "GameSys",
		"./common/Audio": "Audio",
		"./common/Caches": "Caches",
		"./stage/StagAction": "StagAction"
	}],
	State: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "aac47QCZTJOcogw3TkFtaND", "State"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = (c.property, function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.nowState = 0, e
				}
				return __extends(e, t), e.prototype.stateChange = function(t, e) {
					return __awaiter(this, void 0, void 0, function() {
						var e;
						return __generator(this, function(o) {
							for (e = 0; e < this.node.children.length; e++) this.node.children[e].active = !1;
							return t >= 0 && t < this.node.children.length ? (this.nowState = t, this.node.children[t].active = !0, [2, this.node.children[t]]) : [2]
						})
					})
				}, e = __decorate([n], e)
			}(cc.Component));
		o.default = a, cc._RF.pop()
	}, {}],
	Tool: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "45c3eHM5rRAHabicGHBH2hy", "Tool"), cc.MyTool = {};
		var c = {};
		cc.MyTool.captureScreen = function(t, e) {
			if (cc.sys.isBrowser) return JSON.stringify({
				type: 1
			});
			if (cc.sys.isNative) {
				var o = cc.RenderTexture.create(1280, 720);
				o.begin(), t._sgNode.visit(), o.end(), o.saveToFile("capture.png", cc.ImageFormat.PNG, !0, function() {
					cc.log("capture screen successfully!"), e(jsb.fileUtils.getWritablePath() + "capture.png")
				}), console.log(jsb.fileUtils.getWritablePath())
			}
		}, cc.MyTool.playMusic = function(t) {
			"wechat" == cc.PlatFormID ? cc.url.raw("resources/BGM/BGM_take2_192bit.aac") : cc.url.raw("resources/BGM/BGM_take2_192bit.mp3"), cc.audioEngine.stopAll(), -1 != cc.Config_data.soundon && cc.audioEngine.playMusic(cc.bgmClip, !0)
		}, cc.MyTool.onGetItem = function(t) {
			cc.sys.localStorage.setItem("item" + t, 1), cc.Item_data[t] = 1
		}, cc.MyTool.playSE = function(t) {
			-1 != cc.Config_data.soundon && (cc.log("cc.Const_data.Sound[path]" + cc.Const_data.Sound[t]), cc.audioEngine.playEffect(t, !1, 1))
		}, cc.MyTool.onSaveHint = function(t) {
			cc.sys.localStorage.setItem("hint" + t, 1), cc.HintLock[t] = 1
		}, cc.MyTool.playAnimeSE = function(t) {
			-1 != cc.Config_data.soundon && cc.audioEngine.playEffect(t, !1, 1)
		}, cc.MyTool.stopMusic = function() {
			cc.audioEngine.stopAll()
		}, cc.MyTool.btnClick = function() {
			-1 != cc.Config_data.soundon && cc.audioEngine.playEffect(cc.Const_data.Sound_s_OK, !1, 1)
		}, cc.MyTool.playChat = function(t, e) {
			var o;
			0 !== AppData.effectVolume && (o = 2 === e ? "1" : "0", cc.audioEngine.play(cc.url.raw("resources/sound/chat/fangyan_" + o + t + ".mp3"), !1, AppData.effectVolume))
		}, cc.MyTool.onNavi = function(t, e) {
			cc.log("navi appid:" + t), window.navi2(t, function(t) {
				cc.log("navi result:" + t), e(t)
			})
		}, cc.MyTool.showInter = function() {
			if (cc.InterNum % 2 == 0) {
				var t = cc.sequence(cc.delayTime(1), cc.callFunc(function() {
					window.showInterstitialAd()
				}, this));
				(new cc.Node).runAction(t)
			} else {
				t = cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
					window.showInterstitialAd()
				}, this));
				(new cc.Node).runAction(t)
			}
			cc.InterNum++
		}, cc.MyTool.getImage = function(t, e) {
			t && "" != t && (c[t] ? e(c[t]) : cc.loader.load({
				url: "http://wx.mocuz.com/byteImage.php?image=" + encodeURI(t),
				type: "png"
			}, function(o, n) {
				if (o) console.log("err:" + o);
				else {
					var a = new cc.SpriteFrame(n);
					c[t] = a, e(a)
				}
			}))
		}, cc._RF.pop()
	}, {}],
	UIManager: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "8ca2cxRaalMU4GV/djp0RJI", "UIManager"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../common/Utils"),
			n = t("../common/component/XCamera"),
			a = t("../GameSys"),
			i = cc._decorator,
			s = i.ccclass,
			r = (i.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				return __extends(e, t), e.prototype.start = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t, e, o, i;
						return __generator(this, function(s) {
							switch (s.label) {
								case 0:
									return 0 == a.default.gameState ? [2] : [4, c.default.loadPrefab("prefab/menu/menuBtn")];
								case 1:
									return t = s.sent(), (e = cc.instantiate(t)).position = cc.v2(this.node.width / 2 - e.width / 2 - 20, 380), [4, c.default.loadPrefab("prefab/hint/hintBtn")];
								case 2:
									return o = s.sent(), (i = cc.instantiate(o)).position = cc.v2(e.x, 280), n.default.Instance.node.addChild(e), n.default.Instance.node.addChild(i), [2]
							}
						})
					})
				}, e = __decorate([s], e)
			}(cc.Component));
		o.default = r, cc._RF.pop()
	}, {
		"../GameSys": "GameSys",
		"../common/Utils": "Utils",
		"../common/component/XCamera": "XCamera"
	}],
	Utils: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c37bezAQJVASZAoSBU8n9yJ", "Utils"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("./Log"),
			n = function() {
				function t() {}
				return t.clone = function(t) {
					if (!t || "object" != typeof t) return t;
					var e = t.constructor === Array ? [] : {},
						o = function(t, e) {
							for (var c in t) t[c] && "object" == typeof t[c] ? (t[c].constructor === Array ? e[c] = [] : e[c] = {}, o(t[c], e[c])) : e[c] = t[c];
							return e
						};
					return o(t, e)
				}, t.loadJson = function(t) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return [2, new Promise(function(e) {
								cc.loader.loadRes(t, cc.JsonAsset, function(t, o) {
									t ? (c.default.error(t), e({})) : e(o.json)
								})
							})]
						})
					})
				}, t.loadAudioClip = function(t) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return [2, new Promise(function(e) {
								cc.loader.loadRes(t, cc.AudioClip, function(t, o) {
									t ? (c.default.error(t), e(null)) : e(o)
								})
							})]
						})
					})
				}, t.loadPrefab = function(t) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return [2, new Promise(function(e) {
								cc.loader.loadRes(t, cc.Prefab, function(t, o) {
									t ? (c.default.error(t), e(null)) : e(o)
								})
							})]
						})
					})
				}, t.loadImage = function(t) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return [2, new Promise(function(e) {
								cc.loader.loadRes(t, cc.SpriteFrame, function(t, o) {
									t ? (c.default.error(t), e(null)) : e(o)
								})
							})]
						})
					})
				}, t
			}();
		o.default = n, cc._RF.pop()
	}, {
		"./Log": "Log"
	}],
	XAnim: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "2f94dlYxLdNdYAXHQ/72xy8", "XAnim"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c, n = cc._decorator,
			a = n.ccclass,
			i = n.property,
			s = t("../Utils"),
			r = t("./XCamera"),
			h = t("./PopUp");
		(function(t) {
			t[t.None = 0] = "None", t[t.Light = 1] = "Light", t[t.Pop = 2] = "Pop", t[t.FadeIn = 3] = "FadeIn", t[t.Rotate = 4] = "Rotate", t[t.DelayFadeIn = 5] = "DelayFadeIn", t[t.Click = 6] = "Click", t[t.Rock = 7] = "Rock"
		})(c || (c = {}));
		var u = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.animType = c.None, e.delayTime = 0, e
			}
			var o;
			return __extends(e, t), o = e, e.prototype.onLoad = function() {
				switch (this.animType) {
					case c.None:
						break;
					case c.Light:
						o.lightAnim(this.node);
						break;
					case c.Pop:
						o.popUpAnim(this.node);
						break;
					case c.FadeIn:
						o.fadeIn(this.node);
						break;
					case c.Rotate:
						o.rotate(this.node);
						break;
					case c.DelayFadeIn:
						o.delayFadeIn(this.node, this.delayTime);
						break;
					case c.Rock:
						o.rock(this.node)
				}
			}, e.popUpAnim = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2, new Promise(function(e) {
							t.opacity = 0, t.scale = .8, t.runAction(cc.sequence(cc.spawn(cc.fadeIn(.3), cc.scaleTo(.3, 1)), cc.callFunc(function() {
								e()
							})))
						})]
					})
				})
			}, e.popDownAnim = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2, new Promise(function(e) {
							t.opacity = 255, t.runAction(cc.sequence(cc.spawn(cc.moveBy(.3, cc.v2(0, 120)), cc.fadeOut(.3)), cc.callFunc(function() {
								e()
							})))
						})]
					})
				})
			}, e.fadeIn = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return t.opacity = 0, [2, new Promise(function(e) {
							t.runAction(cc.sequence(cc.fadeTo(.3, 200), cc.callFunc(function() {
								e()
							})))
						})]
					})
				})
			}, e.rotate = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return t.runAction(cc.sequence(cc.rotateTo(2, 90), cc.rotateTo(2, 180), cc.rotateTo(2, 270), cc.rotateTo(2, 360)).repeatForever()), [2]
					})
				})
			}, e.lightAnim = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return t.runAction(cc.sequence(cc.callFunc(function() {
							t.opacity = 0
						}), cc.fadeIn(.8), cc.callFunc(function() {
							t.opacity = 255
						}), cc.fadeOut(.8)).repeatForever()), [2]
					})
				})
			}, e.fadeInAnim = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2, new Promise(function(e) {
							t.opacity = 0, t.runAction(cc.spawn(cc.fadeTo(.2, 155), cc.callFunc(function() {
								e()
							})))
						})]
					})
				})
			}, e.delayFadeIn = function(t, e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(o) {
						return [2, new Promise(function(o) {
							t.opacity = 0, t.runAction(cc.sequence(cc.delayTime(e), cc.spawn(cc.fadeIn(1), cc.callFunc(function() {
								o()
							}))))
						})]
					})
				})
			}, e.fadeOutAnim = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2, new Promise(function(e) {
							t.runAction(cc.spawn(cc.fadeTo(.3, 0), cc.removeSelf(), cc.callFunc(function() {
								e()
							})))
						})]
					})
				})
			}, e.guildAnim = function(t, e, c, n, a, i) {
				return void 0 === a && (a = ""), __awaiter(this, void 0, void 0, function() {
					var r, u, d, l, _, p, m, g;
					return __generator(this, function(f) {
						switch (f.label) {
							case 0:
								return r = new cc.Node, h.default.Instance.node.addChild(r), r.position = t, r.width = 200, r.height = 200, u = new cc.Node, r.addChild(u), d = u.addComponent(cc.Label), u.color = cc.color(0, 0, 0), d.string = a, d.lineHeight = 35, d.fontSize = 30, u.position = n, o.lightAnim(u), l = new cc.Node, r.addChild(l), _ = new cc.Node, l.addChild(_), [4, s.default.loadImage("texture/ui/guild2")];
							case 1:
								return p = f.sent(), _.addComponent(cc.Sprite).spriteFrame = p, _.opacity = 0, _.position = e, m = new cc.Node, l.addChild(m), [4, s.default.loadImage("texture/ui/guild1")];
							case 2:
								return g = f.sent(), m.addComponent(cc.Sprite).spriteFrame = g, m.opacity = 0, m.position = cc.v2(_.x - 10, _.y + 50), [2, new Promise(function(t) {
									_.runAction(cc.sequence(cc.fadeIn(.4), cc.callFunc(function() {
										m.runAction(cc.sequence(cc.fadeIn(.3), cc.hide(), cc.callFunc(function() {
											l.runAction(cc.sequence(cc.moveTo(1.5, c), cc.delayTime(i), cc.callFunc(function() {
												r.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
													r.stopAllActions(), r.removeFromParent(), t()
												})))
											})))
										})))
									})))
								})]
						}
					})
				})
			}, e.popCenter = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					var e, o, c, n;
					return __generator(this, function(a) {
						switch (a.label) {
							case 0:
								return e = new cc.Node, h.default.Instance.node.addChild(e), e.width = r.default.Instance.node.width, e.height = 80, e.setScale(cc.v2(1, 0)), [4, s.default.loadImage("texture/ui/imgWhite")];
							case 1:
								return o = a.sent(), e.addComponent(cc.Sprite).spriteFrame = o, e.color = cc.color(0, 0, 0), e.width = r.default.Instance.node.width, e.height = 80, e.opacity = 188, c = new cc.Node, e.addChild(c), (n = c.addComponent(cc.Label)).string = t, n.fontSize = 40, n.lineHeight = 45, c.color = cc.color(255, 255, 255), e.runAction(cc.sequence(cc.delayTime(.2), cc.scaleTo(.2, 1), cc.delayTime(1.8), cc.scaleTo(.2, 1, 0), cc.removeSelf())), [2]
						}
					})
				})
			}, e.popTop = function(t) {
				return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
					var e, o, c, n;
					return __generator(this, function(a) {
						switch (a.label) {
							case 0:
								return e = new cc.Node, r.default.Instance.node.addChild(e), e.width = r.default.Instance.node.width, e.height = 80, [4, s.default.loadImage("texture/ui/imgWhite")];
							case 1:
								return o = a.sent(), e.addComponent(cc.Sprite).spriteFrame = o, e.color = cc.color(0, 0, 0), e.width = r.default.Instance.node.width, e.height = 80, e.opacity = 188, e.position = cc.v2(0, 280), c = new cc.Node, e.addChild(c), (n = c.addComponent(cc.Label)).string = t, n.fontSize = 38, n.lineHeight = 40, c.color = cc.color(255, 255, 255), e.runAction(cc.sequence(cc.callFunc(function() {
									e.opacity = 0
								}), cc.delayTime(.2), cc.spawn(cc.moveBy(.4, cc.v2(0, -80)), cc.fadeTo(.4, 188)), cc.delayTime(1.8), cc.spawn(cc.moveBy(.4, cc.v2(0, 80)), cc.fadeOut(.4)), cc.removeSelf())), [2]
						}
					})
				})
			}, e.hotAnim = function(t, e) {
				return __awaiter(this, void 0, void 0, function() {
					var o, c, n = this;
					return __generator(this, function(a) {
						switch (a.label) {
							case 0:
								return o = new cc.Node, t.addChild(o), [4, s.default.loadImage("texture/ui/dian")];
							case 1:
								return c = a.sent(), o.addComponent(cc.Sprite).spriteFrame = c, o.position = e, [2, new Promise(function(t) {
									n.lightAnim(o), t(o)
								})]
						}
					})
				})
			}, e.click = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					var e, o;
					return __generator(this, function(c) {
						switch (c.label) {
							case 0:
								return e = new cc.Node, [4, s.default.loadImage("texture/howtoplay/Finger")];
							case 1:
								return o = c.sent(), e.addComponent(cc.Sprite).spriteFrame = o, t.addChild(e), e.runAction(cc.sequence(cc.callFunc(function() {
									e.opacity = 255, e.position = cc.v2(-100, -50), e.scaleX = -1
								}), cc.moveTo(1, cc.v2(-45, -5)), cc.scaleTo(1, -.7, .7), cc.scaleTo(.5, -1, 1), cc.fadeOut(1), cc.delayTime(5)).repeatForever()), [2]
						}
					})
				})
			}, e.rock = function(t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return t.runAction(cc.sequence(cc.rotateBy(2, -20), cc.rotateBy(4, 40), cc.rotateBy(2, -20)).repeatForever()), [2]
					})
				})
			}, e.Instance = null, __decorate([i({
				type: cc.Enum(c),
				displayName: "\u52a8\u753b\u7c7b\u578b"
			})], e.prototype, "animType", void 0), __decorate([i({
				type: cc.Integer,
				displayName: "\u5ef6\u8fdf\u65f6\u95f4"
			})], e.prototype, "delayTime", void 0), e = o = __decorate([a], e)
		}(cc.Component);
		o.default = u, cc._RF.pop()
	}, {
		"../Utils": "Utils",
		"./PopUp": "PopUp",
		"./XCamera": "XCamera"
	}],
	XBGM: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "f61bbvF1QpIG7IHSJOwmFuy", "XBGM"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("../Audio"),
			s = t("../Log"),
			r = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.bgmAudio = null, e.slientPlay = !1, e.volumeRate = .8, e
				}
				return __extends(e, t), e.prototype.start = function() {
					var t = this;
					if (!this.bgmAudio) return s.default.error("\u6ca1\u6709\u6dfb\u52a0\u80cc\u666f\u97f3\u4e50"), void i.default.stopBGM();
					i.default.xGet("bgmVolume") <= .001 && !this.slientPlay ? s.default.info("\u97f3\u91cf\u592a\u5c0f\u6216\u6ca1\u6709\u5141\u8bb8\u64ad\u653e") : this.scheduleOnce(function() {
						s.default.info("\u5f00\u59cb\u64ad\u653e\u97f3\u4e50", t.bgmAudio), i.default.playBGM(t.bgmAudio, t.volumeRate)
					}, .05)
				}, __decorate([a({
					type: cc.AudioClip,
					displayName: "\u80cc\u666f\u97f3\u4e50"
				})], e.prototype, "bgmAudio", void 0), __decorate([a({
					type: cc.Boolean,
					displayName: "\u9759\u9ed8\u64ad\u653e"
				})], e.prototype, "slientPlay", void 0), __decorate([a({
					type: cc.Float,
					displayName: "\u97f3\u91cf\u6bd4"
				})], e.prototype, "volumeRate", void 0), e = __decorate([n], e)
			}(cc.Component);
		o.default = r, cc._RF.pop()
	}, {
		"../Audio": "Audio",
		"../Log": "Log"
	}],
	XButton: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "6bd789T9ShP6pN1TQ3jyNAX", "XButton"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("../../GameSys"),
			s = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.touchAudio = null, e.clickInterval = .4, e.touchEvents = [], e.touchStartEvents = [], e.touchCancelEvents = [], e.isDown = !1, e.rawScale = 0, e.clickTime = null, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					this.rawScale = this.node.scale, this.node.on("touchstart", this.touchStart.bind(this), this.node), this.node.on("touchend", this.touchEnd.bind(this), this.node), this.node.on("touchcancel", this.touchCancel.bind(this), this.node)
				}, e.prototype.touchStart = function(t) {
					0 != this.enabled && (this.isDown = !0, this.touchAudio && i.default.audio.playSFX(this.touchAudio), this.touchStartEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchStartEvents))
				}, e.prototype.touchEnd = function(t) {
					if (this.isDown = !1, 0 != this.enabled) {
						var e = new Date,
							o = 1e3 * this.clickInterval;
						e.getTime() - this.clickTime < o || (this.clickTime = e.getTime(), this.touchEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchEvents))
					}
				}, e.prototype.touchCancel = function(t) {
					this.isDown = !1, 0 != this.enabled && this.touchCancelEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchCancelEvents)
				}, e.prototype.addTouchStartEvent = function(t, e, o, c) {
					void 0 === c && (c = "");
					var n = new cc.Component.EventHandler;
					n.target = t, n.component = e, n.customEventData = c + "", n.handler = o, this.touchStartEvents.push(n)
				}, e.prototype.addTouchEvent = function(t, e, o, c) {
					void 0 === c && (c = "");
					var n = new cc.Component.EventHandler;
					n.target = t, n.component = e, n.customEventData = c + "", n.handler = o, this.touchEvents.push(n)
				}, e.prototype.addTouchCancelEvent = function(t, e, o, c) {
					void 0 === c && (c = "");
					var n = new cc.Component.EventHandler;
					n.target = t, n.component = e, n.customEventData = c + "", n.handler = o, this.touchCancelEvents.push(n)
				}, __decorate([a({
					type: cc.AudioClip,
					displayName: "\u89e6\u6478\u97f3"
				})], e.prototype, "touchAudio", void 0), __decorate([a({
					type: cc.Float,
					displayName: "\u70b9\u51fb\u95f4\u9694"
				})], e.prototype, "clickInterval", void 0), __decorate([a({
					type: cc.Component.EventHandler,
					displayName: "\u89e6\u6478\u56de\u8c03"
				})], e.prototype, "touchEvents", void 0), e = __decorate([n], e)
			}(cc.Component);
		o.default = s, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys"
	}],
	XCamera: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "a85d8rtRs1MWL8c7scwqTbe", "XCamera"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = (c.property, function(t) {
				function e() {
					return null !== t && t.apply(this, arguments) || this
				}
				var o;
				return __extends(e, t), o = e, e.prototype.onLoad = function() {
					o.Instance = this
				}, e.Instance = null, e = o = __decorate([n], e)
			}(cc.Component));
		o.default = a, cc._RF.pop()
	}, {}],
	eCode: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "06efdJKYBtGi6UVmn0nmyPV", "eCode"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = function() {
			function t() {}
			return t.Ok = 200, t.Error = 400, t.NotFound = 404, t.BadJson = 405, t.TimeOut = 1e4, t
		}();
		o.default = c, cc._RF.pop()
	}, {}],
	gameClearPanel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "959f8L+A2BGBqMwNBwLP3Us", "gameClearPanel"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../common/Utils"),
			n = t("../../common/component/XCamera"),
			a = t("../../GameSys"),
			i = cc._decorator,
			s = i.ccclass,
			r = i.property,
			h = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.clearPic = null, e.loadPanel = null, e.btnLabel = null, e.btnSpr = null, e.btnSprArr = [], e.hintPanel = null, e.next = null, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					this.next.active = !0
				}, e.prototype.onDestroy = function() {}, e.prototype.onTouchShare = function() {
					//window.h5api.share()
					console.log("3333",e);
				}, e.prototype.toStart = function() {
					cc.director.loadScene("helloworld")
				}, e.prototype.onSuccess = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t, e, o;
						return __generator(this, function(n) {
							switch (n.label) {
								case 0:
									return cc.Stage_data[a.default.nowStage] = 1, 24 == a.default.nowStage && (this.next.active = !1), cc.sys.localStorage.setItem("stage" + a.default.nowStage, 1), 1 != cc.Stage_data[a.default.nowStage + 1] && cc.sys.localStorage.setItem("stage" + (a.default.nowStage + 1), 2), (this._gvScoreHandled || (this._gvScoreHandled = !0, window.ArcadeTool && "function" == typeof window.ArcadeTool.onLevelComplete && window.ArcadeTool.onLevelComplete(a.default.nowStage))), t = "texture/clear/CL" + cc.Const_data.ClearData[a.default.nowStage], console.log(t), [4, c.default.loadImage(t)];
								case 1:
									return (e = n.sent()) && (this.clearPic.spriteFrame = e), 12 == (o = cc.Const_data.ClearData[a.default.nowStage]) && (o = 1), 6 == o || 7 == o || 11 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl6_7_11) : 1 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl1) : 2 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl2) : 3 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl3) : 4 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl4) : 5 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl5) : 8 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl8) : 9 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl9) : 10 == o ? cc.MyTool.playSE(cc.Const_data.Sound_s_cl10) : 12 == o && cc.MyTool.playSE(cc.Const_data.Sound_s_cl12), [2]
							}
						})
					})
				}, e.prototype.onNextClick = function() {
					cc.nextClick++, 5 == cc.nextClick && (cc.nextClick = 0), cc.MyTool.btnClick(), cc.audioEngine.stopAllEffects(), a.default.nowStage++;
					var t = cc.instantiate(this.loadPanel);
					n.default.Instance.node.addChild(t), t.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
						cc.director.loadScene("Stage" + a.default.nowStage)
					})))
				}, __decorate([r({
					type: cc.Sprite,
					displayName: "\u6210\u529f\u56fe\u7247"
				})], e.prototype, "clearPic", void 0), __decorate([r({
					type: cc.Prefab,
					displayName: "\u8fc7\u573a\u52a8\u753b"
				})], e.prototype, "loadPanel", void 0), __decorate([r({
					type: cc.Label,
					displayName: "\u6309\u94ae\u6587\u5b57"
				})], e.prototype, "btnLabel", void 0), __decorate([r({
					type: cc.Sprite,
					displayName: "\u6309\u94ae\u56fe\u7247"
				})], e.prototype, "btnSpr", void 0), __decorate([r({
					type: cc.SpriteFrame,
					displayName: "\u56fe\u7247\u96c6"
				})], e.prototype, "btnSprArr", void 0), __decorate([r({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], e.prototype, "hintPanel", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u4e0b\u4e00\u5173"
				})], e.prototype, "next", void 0), e = __decorate([s], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys",
		"../../common/Utils": "Utils",
		"../../common/component/XCamera": "XCamera"
	}],
	gameOverPanel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "78b06S6b3NK/6lVXeriUcyl", "gameOverPanel"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../common/Utils"),
			n = t("../../common/component/XCamera"),
			a = t("../../common/component/XAnim"),
			i = t("../../GameSys"),
			s = cc._decorator,
			r = s.ccclass,
			h = s.property,
			u = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.overPic = null, e.btnLabel = null, e.btnSpr = null, e.btnSprArr = [], e.hintPanel = null, e.reTry = null, e.tipNode = null, e.curPicId = 1, e.clickRetry = 0, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					i.default.videoTime <= 0 && (this.tipNode.active = !1), this.clickRetry = cc.sys.localStorage.getItem("srcn" + i.default.nowStage), this.reTry.active = !0
				}, e.prototype.onEnable = function() {
					i.default.game.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs_gameOverPanel")
				}, e.prototype.onDestroy = function() {
					i.default.game.xUnbind("zcbgs_gameOverPanel")
				}, e.prototype.onChange = function(t) {
					this.tipNode.active = t
				}, e.prototype.onTouchBtn = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(e) {
							return t = cc.instantiate(this.hintPanel), n.default.Instance.node.addChild(t), t.getComponent("hintManager").init(i.default.nowStage), [2]
						})
					})
				}, e.prototype.toStart = function() {
					cc.director.loadScene("helloworld")
				}, e.prototype.onFail = function(t) {
					return __awaiter(this, void 0, void 0, function() {
						var e;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return [4, c.default.loadImage("texture/clear/GO" + t)];
								case 1:
									return (e = o.sent()) && (this.overPic.getComponent(cc.Sprite).spriteFrame = e), [2]
							}
						})
					})
				}, e.prototype.onRetryClick = function() {
					if (this.retrying) return;
					this.retrying = !0;
					cc.MyTool.btnClick();
					cc.audioEngine.stopAllEffects();
					cc.needLoadStage = i.default.nowStage;
					cc.director.loadScene("Menu", function(error) {
						if (error) this.retrying = !1;
					}.bind(this))
				}, __decorate([h({
					type: cc.Node,
					displayName: "\u5931\u8d25\u56fe\u7247"
				})], e.prototype, "overPic", void 0), __decorate([h({
					type: cc.Label,
					displayName: "\u6309\u94ae\u6587\u5b57"
				})], e.prototype, "btnLabel", void 0), __decorate([h({
					type: cc.Sprite,
					displayName: "\u6309\u94ae\u56fe\u7247"
				})], e.prototype, "btnSpr", void 0), __decorate([h({
					type: cc.SpriteFrame,
					displayName: "\u56fe\u7247\u96c6"
				})], e.prototype, "btnSprArr", void 0), __decorate([h({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], e.prototype, "hintPanel", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u91cd\u6765\u6309\u94ae"
				})], e.prototype, "reTry", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u63d0\u793a\u6309\u94ae"
				})], e.prototype, "tipNode", void 0), e = __decorate([r], e)
			}(cc.Component);
		o.default = u, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys",
		"../../common/Utils": "Utils",
		"../../common/component/XAnim": "XAnim",
		"../../common/component/XCamera": "XCamera"
	}],
	hintBtn: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "06cf0jpjclOa4Ex4l07PUXd", "hintBtn"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("../../common/component/XCamera"),
			s = (t("../../common/component/XAnim"), t("../../GameSys")),
			r = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.hintPanel = null, e.stage = 0, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					s.default.videoTime <= 0 ? this.node.active = !1 : s.default.nowStage
				}, e.prototype.onEnable = function() {
					s.default.game.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs_hintBtn")
				}, e.prototype.onDestroy = function() {
					s.default.game.xUnbind("zcbgs_hintBtn")
				}, e.prototype.onChange = function(t) {
					this.node.active = t
				}, e.prototype.onTouchHint = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(e) {
							return t = cc.instantiate(this.hintPanel), i.default.Instance.node.addChild(t), t.getComponent("hintManager").init(s.default.nowStage), [2]
						})
					})
				}, __decorate([a({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], e.prototype, "hintPanel", void 0), e = __decorate([n], e)
			}(cc.Component);
		o.default = r, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys",
		"../../common/component/XAnim": "XAnim",
		"../../common/component/XCamera": "XCamera"
	}],
	hintLine: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "0dc0bplqIhI2YRNiPCPC0/u", "hintLine"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("./hintManager"),
			n = t("../../common/component/XCamera"),
			a = t("../../common/component/XAnim"),
			i = t("../../common/Caches"),
			s = t("../../GameSys"),
			r = cc._decorator,
			h = r.ccclass,
			u = r.property,
			d = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.btnPic = null, e.label = null, e.hintPanel = null, e.isLock = !0, e.stage = 0, e.index = 0, e
				}
				return __extends(e, t), e.prototype.init = function(t, e) {
					console.log("stage", t), console.log("index", e);
					var o = 10 * t + e;
					this.stage = t, this.index = e, 1 == cc.HintLock[o] ? (this.btnPic.active = !1, this.label.string = cc.Const_data.HintData[o], this.isLock = !1) : this.isLock = !0
				}, e.prototype.onTouchTip = function() {
					console.info('111');
					return __awaiter(this, void 0, void 0, function() {
						var t, e, o, s, r;
										return __generator(this, function(h) {
											switch (h.label) {
												case 0:
													t = !1, c.default.Instance.onCloseClick(), e = cc.instantiate(this.hintPanel), n.default.Instance.node.addChild(e), o = cc.Const_data.HintDataNum[this.stage], s = 0, h.label = 1;
												case 1:
													return s < o ? (r = 10 * this.stage + (s + 1), 0 != cc.HintLock[r] ? [3, 3] : (cc.HintLock[r] = 1, i.default.set("hint" + r, 1), t = !0, e.getComponent("hintManager").init(this.stage), [4, a.default.popUpAnim(e.getComponent("hintManager").hint)])) : [3, 4];
												case 2:
													return h.sent(), [3, 4];
												case 3:
													return s++, [3, 1];
												case 4:
													return t ? [3, 6] : (e.getComponent("hintManager").init(this.stage), [4, a.default.popUpAnim(e.getComponent("hintManager").hint)]);
												case 5:
													h.sent(), h.label = 6;
												case 6:
													return [2]
											}
										})
						/* var t = this;
						return __generator(this, function(e) {
							return s.default.reduceVideoTime(), window.h5api.playAd(function(e) {
								10001 === e.code && t.scheduleOnce(function() {
									return __awaiter(t, void 0, void 0, function() {
										var t, e, o, s, r;
										return __generator(this, function(h) {
											switch (h.label) {
												case 0:
													t = !1, c.default.Instance.onCloseClick(), e = cc.instantiate(this.hintPanel), n.default.Instance.node.addChild(e), o = cc.Const_data.HintDataNum[this.stage], s = 0, h.label = 1;
												case 1:
													return s < o ? (r = 10 * this.stage + (s + 1), 0 != cc.HintLock[r] ? [3, 3] : (cc.HintLock[r] = 1, i.default.set("hint" + r, 1), t = !0, e.getComponent("hintManager").init(this.stage), [4, a.default.popUpAnim(e.getComponent("hintManager").hint)])) : [3, 4];
												case 2:
													return h.sent(), [3, 4];
												case 3:
													return s++, [3, 1];
												case 4:
													return t ? [3, 6] : (e.getComponent("hintManager").init(this.stage), [4, a.default.popUpAnim(e.getComponent("hintManager").hint)]);
												case 5:
													h.sent(), h.label = 6;
												case 6:
													return [2]
											}
										})
									})
								}, .5)
							}), [2]
						}) */
					})
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u6309\u94ae\u56fe\u7247"
				})], e.prototype, "btnPic", void 0), __decorate([u({
					type: cc.Label,
					displayName: "\u63d0\u793a\u6587\u5b57"
				})], e.prototype, "label", void 0), __decorate([u({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], e.prototype, "hintPanel", void 0), e = __decorate([h], e)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys",
		"../../common/Caches": "Caches",
		"../../common/component/XAnim": "XAnim",
		"../../common/component/XCamera": "XCamera",
		"./hintManager": "hintManager"
	}],
	hintManager: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c1b0418DEZFCbTKyEr7U12y", "hintManager"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../common/component/XAnim"),
			n = cc._decorator,
			a = n.ccclass,
			i = n.property,
			s = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.bg = null, e.hint = null, e.content = null, e.hintPre = null, e
				}
				var o;
				return __extends(e, t), o = e, e.prototype.onLoad = function() {
					o.Instance = this
				}, e.prototype.onDestroy = function() {}, e.prototype.init = function(t) {
					for (var e = cc.Const_data.HintDataNum[t], o = 0; o < e; o++) {
						var c = cc.instantiate(this.hintPre);
						this.content.addChild(c), c.getComponent("hintLine").init(t, o + 1)
					}
				}, e.prototype.onCloseClick = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							switch (t.label) {
								case 0:
									return c.default.fadeOutAnim(this.bg), [4, c.default.popDownAnim(this.hint)];
								case 1:
									return t.sent(), this.node.removeFromParent(), [2]
							}
						})
					})
				}, e.Instance = null, __decorate([i({
					type: cc.Node,
					displayName: "\u80cc\u666f"
				})], e.prototype, "bg", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u63d0\u793a\u6846"
				})], e.prototype, "hint", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u5185\u5bb9\u533a\u57df"
				})], e.prototype, "content", void 0), __decorate([i({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9884\u5236"
				})], e.prototype, "hintPre", void 0), e = o = __decorate([a], e)
			}(cc.Component);
		o.default = s, cc._RF.pop()
	}, {
		"../../common/component/XAnim": "XAnim"
	}],
	menuBtn: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "9ca88hfzVxO/6O4ZOtDPLsn", "menuBtn"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = cc._decorator,
			n = c.ccclass,
			a = c.property,
			i = t("../../common/component/XCamera"),
			s = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.menuPanel = null, e
				}
				return __extends(e, t), e.prototype.onTouchMenu = function() {
					i.default.Instance.node.addChild(cc.instantiate(this.menuPanel))
				}, __decorate([a({
					type: cc.Prefab,
					displayName: "\u83dc\u5355\u9762\u677f"
				})], e.prototype, "menuPanel", void 0), e = __decorate([n], e)
			}(cc.Component);
		o.default = s, cc._RF.pop()
	}, {
		"../../common/component/XCamera": "XCamera"
	}],
	menuPanel: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "c5105e5HJ9GLZfPvehfmK1W", "menuPanel"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../common/component/XAnim"),
			n = t("../../common/component/XCamera"),
			a = t("../../GameSys"),
			i = cc._decorator,
			s = i.ccclass,
			r = i.property,
			h = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.panel = null, e.bg = null, e.hintPanel = null, e.soundButton = null, e.sp_sound_on = null, e.sp_sound_off = null, e.tipNode = null, e.stage = 0, e
				}
				return __extends(e, t), e.prototype.onLoad = function() {
					a.default.videoTime <= 0 && (this.tipNode.active = !1), this.checkSound(), window.ArcadeTool && "function" == typeof window.ArcadeTool.addResetButton && window.ArcadeTool.addResetButton(this.panel)
				}, e.prototype.nEnable = function() {
					a.default.game.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs_menuPanel")
				}, e.prototype.onDestroy = function() {
					a.default.game.xUnbind("zcbgs_menuPanel")
				}, e.prototype.onChange = function(t) {
					this.tipNode.active = t
				}, e.prototype.checkSound = function() {
					var t = this.soundButton.getComponent(cc.Sprite),
						e = this.soundButton.getComponent(cc.Button); - 1 != cc.Config_data.soundon ? (cc.log("soundon"), t.spriteFrame = this.sp_sound_on, e.normalSprite = this.sp_sound_on, e.pressedSprite = this.sp_sound_on) : (cc.log("soundoff"), t.spriteFrame = this.sp_sound_off, e.normalSprite = this.sp_sound_off, e.pressedSprite = this.sp_sound_off)
				}, e.prototype.onMenuClose = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							switch (t.label) {
								case 0:
									return c.default.fadeOutAnim(this.bg), [4, c.default.popDownAnim(this.panel)];
								case 1:
									return t.sent(), this.node.destroy(), [2]
							}
						})
					})
				}, e.prototype.onRetryClick = function() {
					cc.MyTool.btnClick(), cc.audioEngine.stopAllEffects(), cc.needLoadStage = a.default.nowStage, cc.director.loadScene("Menu")
				}, e.prototype.onOtherClick = function() {
					cc.director.loadScene("Menu")
				}, e.prototype.onSoundClick = function() {
					-1 != cc.Config_data.soundon ? (cc.Config_data.soundon = -1, cc.MyTool.stopMusic()) : 1 != cc.Config_data.soundon && (cc.Config_data.soundon = 1, console.log("\u4ecemenuPanel\u8fdb\u97f3\u4e50"), cc.MyTool.playMusic(0)), cc.sys.localStorage.setItem("sound", cc.Config_data.soundon), this.checkSound()
				}, e.prototype.onTouchHint = function() {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(e) {
							return t = cc.instantiate(this.hintPanel), n.default.Instance.node.addChild(t), cc.Const_data.HintDataNum[a.default.nowStage], t.getComponent("hintManager").init(a.default.nowStage), [2]
						})
					})
				}, __decorate([r({
					type: cc.Node,
					displayName: "\u5f39\u6846"
				})], e.prototype, "panel", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u80cc\u666f"
				})], e.prototype, "bg", void 0), __decorate([r({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u6846"
				})], e.prototype, "hintPanel", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u97f3\u4e50\u6309\u94ae"
				})], e.prototype, "soundButton", void 0), __decorate([r({
					type: cc.SpriteFrame,
					displayName: "on"
				})], e.prototype, "sp_sound_on", void 0), __decorate([r({
					type: cc.SpriteFrame,
					displayName: "off"
				})], e.prototype, "sp_sound_off", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u63d0\u793a\u6309\u94ae"
				})], e.prototype, "tipNode", void 0), e = __decorate([s], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys",
		"../../common/component/XAnim": "XAnim",
		"../../common/component/XCamera": "XCamera"
	}],
	selectItem: [function(t, e, o) {
		"use strict";
		cc._RF.push(e, "65b3fo/k5FAzYwLdc0ZsnEj", "selectItem"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = t("../../common/component/State"),
			n = t("../../common/Caches"),
			a = t("../../GameSys"),
			i = cc._decorator,
			s = i.ccclass,
			r = i.property,
			h = function(t) {
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.indexLabel = [], e.itemState = null, e.index = 0, e
				}
				return __extends(e, t), e.prototype.init = function(t) {
					for (var e in this.index = t, this.indexLabel) this.indexLabel[e].string = t + "";
					1 != t ? (2 != cc.Stage_data[t] && 1 != cc.Stage_data[t - 1] || this.itemState.stateChange(1, 0), 1 == cc.Stage_data[t] && this.itemState.stateChange(2, 0)) : 0 == cc.Stage_data[t] ? (n.default.set("stage" + t, 2), this.itemState.stateChange(1, 0)) : 1 == cc.Stage_data[t] ? this.itemState.stateChange(2, 0) : 2 == cc.Stage_data[t] && this.itemState.stateChange(1, 0)
				}, e.prototype.onTouch = function() {
					a.default.nowStage = this.index, cc.NextItemIndex = 0, cc.nextGetIndex = 0, cc.director.loadScene("Stage" + a.default.nowStage)
				}, __decorate([r({
					type: cc.Label,
					displayName: "\u4e0b\u6807"
				})], e.prototype, "indexLabel", void 0), __decorate([r({
					type: c.default
				})], e.prototype, "itemState", void 0), e = __decorate([s], e)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../../GameSys": "GameSys",
		"../../common/Caches": "Caches",
		"../../common/component/State": "State"
	}]
}, {}, ["Game", "GameData", "GameManager", "GameSys", "HelloWorld", "HowToManager", "ItemCell", "ItemManager", "ItemPage", "Loading", "Menu", "MenuManager", "MoveCtrl", "PageCtrl", "Stage10Action", "Stage11Action", "Stage12Action", "Stage13Action", "Stage14Action", "Stage15Action", "Stage16Action", "Stage17Action", "Stage18Action", "Stage19Action", "Stage20Action", "Stage21Action", "Stage22Action", "Stage23Action", "Stage24Action", "Stage5Action", "Stage6Action", "Stage7Action", "Stage8Action", "Stage9Action", "Tool", "Audio", "Caches", "Log", "Utils", "PopUp", "State", "XAnim", "XBGM", "XButton", "XCamera", "Props", "Http", "eCode", "UIManager", "hintBtn", "hintLine", "hintManager", "menuBtn", "menuPanel", "selectItem", "gameClearPanel", "gameOverPanel", "StagAction", "Stage1Action", "Stage2Action", "Stage3Action", "Stage4Action"]);