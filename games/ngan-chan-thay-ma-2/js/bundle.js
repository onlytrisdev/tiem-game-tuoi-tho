"use strict";
(() => {
	var e = Object.defineProperty,
		a = Object.getOwnPropertyDescriptor,
		t = (t, s, o, i) => {
			for (var n, r = i > 1 ? void 0 : i ? a(s, o) : s, h = t.length - 1; h >= 0; h--)(n = t[h]) && (r = (i ? n(s, o, r) : n(r)) || r);
			return i && r && e(s, o, r), r
		},
		{
			regClass: s,
			property: o
		} = Laya,
		i = class extends Laya.Script {
			constructor() {
				super()
			}
			onEnable() {}
			onTriggerEnter(e, a, t) {
				this.owner.removeSelf()
			}
			onUpdate() {
				this.owner.y < 20 && this.owner.removeSelf(), this.owner.x > Laya.stage.width && this.owner.removeSelf(), this.owner.x < 0 && this.owner.removeSelf()
			}
			onDisable() {
				"buttle1" == this.owner.name ? Laya.Pool.recover("Bullet1", this.owner) : "buttle2" == this.owner.name ? Laya.Pool.recover("Bullet2", this.owner) : "buttle3" == this.owner.name && Laya.Pool.recover("Bullet3", this.owner)
			}
		};
	i = t([s("VT5coeRnQ5iE2er68FxBaA")], i);
	var n = class {};
	n.yyh = null, n.stopFtp = !1, n.overBoon = !1, n.paoNum = 1, n.moneyNum = 5, n.jsNowNum = 0, n.jsKillNum = 0, n.jsTotale = 1, n.jsSpeed = 100, n.jsGaiLu = null, n.jsMoveS = null, n.lockPao2 = 5, n.lockPao3 = 10;
	var {
		regClass: r,
		property: h
	} = Laya, l = class extends Laya.EventDispatcher {
		static generateUniqueRandomNumbers(e, a) {
			const t = new Set;
			for (; t.size < e;) {
				const e = Math.floor(Math.random() * a);
				t.add(e)
			}
			return Array.from(t)
		}
		static getTwoPointAngle(e, a, t, s) {
			const o = t - e,
				i = s - a;
			return Math.atan2(i, o) * (180 / Math.PI)
		}
	};
	l.yyh = null, t([h(String)], l, "yyh", 2), l = t([r("IhpuOsdWQxKMDaFf9vn94A")], l);
	var {
		regClass: u,
		property: g
	} = Laya, y = class extends Laya.Script {
		constructor() {
			super(...arguments), this.timeNum = 1
		}
		onEnable() {
			this._gameBox = this.owner.getChildByName("gameBox"), this._gameJS = this.owner.getChildByName("zombieOne"), this._gameClickArea = this.owner.getChildByName("areaClick"), this._paoMc = this.owner.getChildByName("paoMc"), this._gameClickArea.on(Laya.Event.MOUSE_DOWN, this, this.onAreaClick), Laya.timer.frameLoop(1, this, this.onFrame), this.owner.getChildByName("OverBox").x = this._gameClickArea.x
		}
		onAreaClick(e = null) {
			let a = n.paoNum,
				t = null,
				s = !0;
			if (1 == a ? n.moneyNum < 1 ? s = !1 : (s = !0, n.moneyNum -= 1, m.instance.popFun({
					"类型": "金币提示",
					"内容": "-1"
				}), t = Laya.Pool.getItemByCreateFun("Bullet1", this.bullet.create, this.bullet)) : 2 == a ? n.moneyNum < 2 ? s = !1 : (s = !0, n.moneyNum -= 2, m.instance.popFun({
					"类型": "金币提示",
					"内容": "-2"
				}), t = Laya.Pool.getItemByCreateFun("Bullet2", this.bulletTwo.create, this.bulletTwo)) : 3 == a && (n.moneyNum < 3 ? s = !1 : (s = !0, n.moneyNum -= 3, m.instance.popFun({
					"类型": "金币提示",
					"内容": "-3"
				}), t = Laya.Pool.getItemByCreateFun("Bullet3", this.bulletThree.create, this.bulletThree))), 0 == s) return void m.instance.popFun({
				"类型": "金币提示",
				"内容": "金币不足"
			});
			t.pos(this._paoMc.x + t.width / 2, this._paoMc.y);
			let o = l.getTwoPointAngle(Laya.stage.width / 2, Laya.stage.height - 40, Laya.stage.mouseX, Laya.stage.mouseY);
			t.rotation = -90 + o, this._gameBox.addChild(t), this._paoMc.rotation = 90 + o, m.instance.txtShow("money"), Laya.SoundManager.playSound("resources/sound/fire.mp3")
		}
		onFrame() {
			if (1 != n.stopFtp && 1 != n.overBoon) {
				this.timeNum += 1;
				for (let e = 0; e < this._gameBox.numChildren; e++) {
					let a = this._gameBox.getChildAt(e),
						t = 1;
					"buttle1" == a.name ? t = 10 : "buttle2" == a.name ? t = 8 : "buttle3" == a.name && (t = 6), a.x += Math.cos(Math.abs(a.rotation + 90) / 180 * Math.PI) * t, a.y -= Math.sin(Math.abs(a.rotation + 90) / 180 * Math.PI) * t
				}
				for (let e = 0; e < this._gameJS.numChildren; e++) {
					let a = this._gameJS.getChildAt(e);
					"jiangShi1" == a.name ? a.x -= Number(n.jsMoveS[5]) : "jiangShi2" == a.name ? a.x -= Number(n.jsMoveS[4]) : "jiangShi3" == a.name ? a.x -= Number(n.jsMoveS[3]) : "jiangShi4" == a.name ? a.x -= Number(n.jsMoveS[2]) : "jiangShi5" == a.name ? a.x -= Number(n.jsMoveS[1]) : "jiangShi6" == a.name && (a.x -= Number(n.jsMoveS[0]))
				}
				this.timeNum % n.jsSpeed == 0 && this.addJSFun()
			}
		}
		addJSFun() {
			if (n.jsNowNum >= n.jsTotale) return;
			let e = 1,
				a = Math.floor(100 * Math.random()),
				t = null;
			a < Number(n.jsGaiLu[0]) ? (e = 6, t = Laya.Pool.getItemByCreateFun("Zombie6", this.jsSix.create, this.jsSix), t.pos(this._gameClickArea.x + 800, 235 * Math.random() + 140)) : a < Number(n.jsGaiLu[1]) ? (e = 5, t = Laya.Pool.getItemByCreateFun("Zombie5", this.jsFive.create, this.jsFive), t.pos(this._gameClickArea.x + 800, 240 * Math.random() + 130)) : a < Number(n.jsGaiLu[2]) ? (e = 4, t = Laya.Pool.getItemByCreateFun("Zombie4", this.jsFour.create, this.jsFour), t.pos(this._gameClickArea.x + 800, 235 * Math.random() + 155)) : a < Number(n.jsGaiLu[3]) ? (e = 3, t = Laya.Pool.getItemByCreateFun("Zombie3", this.jsThree.create, this.jsThree), t.pos(this._gameClickArea.x + 800, 235 * Math.random() + 155)) : a < Number(n.jsGaiLu[4]) ? (e = 2, t = Laya.Pool.getItemByCreateFun("Zombie2", this.jsTwo.create, this.jsTwo), t.pos(this._gameClickArea.x + 800, 240 * Math.random() + 155)) : (e = 1, t = Laya.Pool.getItemByCreateFun("Zombie1", this.jsOne.create, this.jsOne), t.pos(this._gameClickArea.x + 800, 240 * Math.random() + 180)), this._gameJS.addChild(t), n.jsNowNum += 1
		}
		gameStop() {
			n.overBoon = !0
		}
		gameOver() {
			n.overBoon = !0, this._gameBox.removeChildren(), this._gameJS.removeChildren()
		}
	};
	t([g({
		type: Laya.Prefab
	})], y.prototype, "bullet", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "bulletTwo", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "bulletThree", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "jsOne", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "jsTwo", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "jsThree", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "jsFour", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "jsFive", 2), t([g({
		type: Laya.Prefab
	})], y.prototype, "jsSix", 2), y = t([u("ISXyUaOJQW-ogk8HXsiNcg")], y);
	var c = class extends Laya.Scene {},
		{
			regClass: p
		} = Laya,
		m = class extends c {
			constructor() {
				super(), this.tween = null, this.tweenT = null, this.lastIndex = 0, this.guanNow = 1, this.guanTotale = 1, this.guanMoney = 5, this.musicBoon = !0, m.instance = this
			}
			onAwake() {}
			onEnable() {
				console.log("Vào trò chơi"), this._control = this.getComponent(y), this.guanMoney = n.moneyNum;
				Laya.loader.fetch("resources/json/bagList.json", "json").then((e => {
					if (e.bagList && e.bagList.length > 0) {
						this.guanTotale = e.bagList.length, n.jsKillNum = 0, n.jsNowNum = 0;
						let a = "",
							t = "";
						if (this.guanNow > this.guanTotale) {
							let s = this.guanNow - this.guanTotale;
							n.jsTotale = e.bagList[this.guanTotale - 1].jsNum + 2 * s, n.jsSpeed = e.bagList[this.guanTotale - 1].speed - s, n.jsSpeed < 20 && (n.jsSpeed = 20), a = e.bagList[this.guanTotale - 1].glNum, t = e.bagList[this.guanTotale - 1].move
						} else n.jsTotale = e.bagList[this.guanNow - 1].jsNum, n.jsSpeed = e.bagList[this.guanNow - 1].speed, a = e.bagList[this.guanNow - 1].glNum, t = e.bagList[this.guanTotale - 1].move;
						n.jsGaiLu = a.split(","), n.jsMoveS = t.split(","), this.txtShow("all"), this._control.addJSFun()
					}
				})), this.tsMc.alpha = 0, this.tsJSMc.alpha = 0, this.tsLockMc.alpha = 0, this.lastIndex = n.paoNum - 1, this.paoImage.skin = "resources/image/pao/0" + n.paoNum + ".png", this.paoList.array = [];
				let e = {};
				for (let a = 0; a < 3; a++) e = {
					listimg: {
						skin: "resources/image/pao/paoInfo0" + a + ".png"
					}
				}, this.paoList.array.splice(a, 0, e);
				this.paoList.renderHandler = new Laya.Handler(this, this.onListRender), this.paoList.selectHandler = new Laya.Handler(this, this.onListSelect), this.paoList.mouseHandler = new Laya.Handler(this, this.onListMouse), this.paoList.vScrollBarSkin = "", Laya.timer.loop(3e3, this, this.loopfun), this.closeBtn.on(Laya.Event.CLICK, this, this.colseClick), this.musicBtn.on(Laya.Event.CLICK, this, this.musicClick), n.overBoon = !1, this.bgSound.source = "resources/sound/bgSound.mp3", this.bgSound.loop = 0, this.bgSound.autoPlay = !0, this.bgSound.isMusic = !0, this.musicBoon = !0, this.musicBtn.skin = "resources/image/btn/music01.png", this.bgSound.play(0)
			}
			musicClick(e) {
				Laya.SoundManager.playSound("resources/sound/hit.mp3"), 1 == this.musicBoon ? (e.currentTarget.skin = "resources/image/btn/music02.png", this.bgSound.stop(), this.musicBoon = !1) : (e.currentTarget.skin = "resources/image/btn/music01.png", this.bgSound.play(0), this.musicBoon = !0)
			}
			txtShow(e) {
				"money" == e ? this.moneyTxt.text = "×" + n.moneyNum : "jiangshi" == e ? (this.jsTxt.text = "Zombie: " + n.jsKillNum + "/" + n.jsTotale, n.jsKillNum >= n.jsTotale && this.overPopFun({
					"结果": "过关",
					"原因": "完成任务"
				})) : (this.guanTxt.text = "Cấp " + this.guanNow /* + "关" */, this.jsTxt.text = "Zombie: " + n.jsKillNum + "/" + n.jsTotale, this.moneyTxt.text = "×" + n.moneyNum)
			}
			onListRender(e, a) {
				if (a > this.paoList.array.length || a < 0) return;
				if (0 == this.cheackLock(a)) return;
				const t = e.getChildByName("bg");
				a === this.lastIndex ? t.skin = "resources/image/pao/pao_bg01.png" : t.skin = "resources/image/pao/pao_bg02.png";
				const s = e.getChildByName("lock");
				(0 == a || 1 == a && this.guanNow >= n.lockPao2 || 2 == a && this.guanNow >= n.lockPao3) && (s.visible = !1)
			}
			onListSelect(e) {
				0 != this.cheackLock(e) && (this.lastIndex = e, this.paoList.refresh())
			}
			onListMouse(e, a) {
				e.type == Laya.Event.MOUSE_DOWN && (this.cheackLock(a) ? (Laya.SoundManager.playSound("resources/sound/hit.mp3"), this.paoImage.skin = "resources/image/pao/0" + (a + 1) + ".png", n.paoNum = a + 1) : 1 == a ? this.popFun({
					"类型": "炮塔解锁",
					"内容": "Cấp " + n.lockPao2 + " mở khóa",
					"坐标": [this.paoList.x + 60]
				}) : this.popFun({
					"类型": "炮塔解锁",
					"内容": "Cấp " + n.lockPao3 + " mở khóa",
					"坐标": [this.paoList.x + 120]
				}))
			}
			cheackLock(e) {
				let a = !1;
				return (0 == e || 1 == e && this.guanNow >= n.lockPao2 || 2 == e && this.guanNow >= n.lockPao3) && (a = !0), a
			}
			colseClick(e) {
				Laya.SoundManager.playSound("resources/sound/hit.mp3"), this.removeEvt("over"), Laya.Scene.open("scenes/index.ls")
			}
			loopfun() {
				n.moneyNum += 1, this.txtShow("money"), this.popFun({
					"类型": "金币提示",
					"内容": "+1"
				})
			}
			popFun(e) {
				"僵尸消灭" == e["类型"] && (this.tsJSTxt.text = "" + e["内容"], this.tsJSMc.x = Math.floor(e["坐标"][0]), this.tsJSMc.y = Math.floor(e["坐标"][1]), this.tsJSMc.alpha = 1, Laya.Tween.to(this.tsJSMc, {
					alpha: 0,
					y: this.tsJSMc.y - 40
				}, 1e3)), "炮塔解锁" == e["类型"] ? (this.tsLockTxt.text = "" + e["内容"], this.tsLockMc.x = Math.floor(e["坐标"][0]), this.tsLockMc.y = 540, this.tsLockMc.alpha = 1, Laya.Tween.to(this.tsLockMc, {
					alpha: 0,
					y: this.tsLockMc.y - 30
				}, 800)) : (this.tsTxt.text = "" + e["内容"], this.tsMc.y = 550, this.tsMc.alpha = 1, Laya.Tween.to(this.tsMc, {
					alpha: 0,
					y: this.tsMc.y - 40
				}, 1e3))
			}
			overPopFun(e) {
				this.removeEvt("stop"), Laya.loader.load("prefab/dialog.lh").then((a => {
					let t = a.create();
					t.x = .5 * (Laya.stage.width - t.width), t.y = .5 * (Laya.stage.height - t.height), Laya.stage.addChild(t);
					let s = e["结果"],
						o = {};
					"过关" == s ? (o = {
						"结果": "过关",
						"关数": this.guanNow,
						"金币": n.moneyNum
					}, Laya.SoundManager.playSound("resources/sound/win.mp3")) : "失败" == s && (o = {
						"结果": "失败",
						"关数": this.guanNow,
						"金币": n.moneyNum
					}, Laya.SoundManager.playSound("resources/sound/loss.mp3")), t.setInfo(o), t.nextBtn.on(Laya.Event.CLICK, this, this.nextClickFun), t.gameRestBtn.on(Laya.Event.CLICK, this, this.restClickFun), t.socreBtn.on(Laya.Event.CLICK, this, this.scoreClickFun), t.backBtn.on(Laya.Event.CLICK, this, this.backClickFun)
				}))
			}
			backClickFun(e) {
				Laya.SoundManager.playSound("resources/sound/hit.mp3"), this.removeEvt("over"), Laya.stage.getChildByName("popMc").removeSelf(), Laya.Scene.open("scenes/index.ls")
			}
			nextClickFun(e) {
				Laya.SoundManager.playSound("resources/sound/hit.mp3"), this.removeEvt("over"), Laya.stage.getChildByName("popMc").removeSelf(), this.guanNow += 1, this.onEnable()
			}
			restClickFun(e) {
				console.info('222');
				//Laya.Browser.window.h5api.playAd(this.adCallBack), Laya.SoundManager.playSound("resources/sound/hit.mp3")
			}
			adCallBack(e) {
				console.info('555');
				Laya.Browser.window.console.log("代码:" + e.code + ",消息:" + e.message), 1e4 == e.code ? Laya.Browser.window.console.log("开始播放") : 10001 == e.code ? (Laya.Browser.window.console.log("播放结束"), m.instance.guanGao()) : (Laya.Browser.window.console.log("广告异常+继续游戏"), m.instance.guanRest())
			}
			guanGao() {
				this.removeEvt("over"), Laya.stage.getChildByName("popMc").removeSelf(), n.moneyNum = this.guanMoney, this.onEnable(), Laya.timer.once(1200, this, (() => {
					this.musicBoon && this.bgSound.play(0)
				}))
			}
			guanRest() {
				this.removeEvt("over"), Laya.stage.getChildByName("popMc").removeSelf(), n.moneyNum = 5, this.guanNow = 1, n.paoNum = 1, this.onEnable()
			}
			scoreClickFun(e) {
				console.info('333');
				//Laya.Browser.window.h5api.submitRankScore(981, this.guanNow, this.callback)
			}
			callback(e) {
				console.info('444');
				1e3 == e.code ? (Laya.Browser.window.console.log("分数提交成功"), Laya.Browser.window.h5api.showRankList()) : Laya.Browser.window.console.log("分数提交失败")
			}
			removeEvt(e) {
				this.bgSound.stop(), Laya.loader.clearUnLoaded(), this.closeBtn.offAllCaller(this), Laya.timer.clearAll(this), this.tween && this.tween.clear(), this.tweenT && this.tweenT.clear(), "over" == e ? this._control.gameOver() : this._control.gameStop()
			}
			onDestroy() {
				console.log("*****场景关闭-自动销毁所有节点********")
			}
		};
	m = t([p("kmRVSukCQXaEwCs0o-8BQQ")], m);
	var {
		regClass: L,
		property: d
	} = Laya, S = class extends Laya.Script {
		constructor() {
			super(), this.jiangShiHP = 1, this.hpWidth = 10
		}
		onEnable() {
			let e = this.owner.name;
			"jiangShi1" == e ? this.jiangShiHP = 1 : "jiangShi2" == e ? this.jiangShiHP = 2 : "jiangShi3" == e ? this.jiangShiHP = 3 : "jiangShi4" == e ? this.jiangShiHP = 4 : "jiangShi5" == e ? this.jiangShiHP = 5 : "jiangShi6" == e && (this.jiangShiHP = 6), this.hpBox = this.owner.getChildByName("hpUp"), this.hpBox.width = this.hpWidth * this.jiangShiHP
		}
		onStart() {
			this.imgAni = this.owner.getChildByName("imgAni"), this.imgAni.autoPlay = !0, this.imgAni.wrapMode = 0, this.imgAni.interval = 60
		}
		onTriggerEnter(e, a, t) {
			if ("overLine" == e.label) return void m.instance.overPopFun({
				"结果": "失败",
				"原因": "僵尸获胜"
			});
			if (this.getHP(e) < 1) {
				n.jsKillNum += 1;
				let e = this.getMoney();
				n.moneyNum += e, m.instance.txtShow("money"), m.instance.popFun({
					"类型": "僵尸消灭",
					"内容": "+" + e,
					"坐标": [this.owner.x, this.owner.y]
				}), this.owner.removeSelf(), m.instance.txtShow("jiangshi")
			}
		}
		getHP(e) {
			return "bulletOne" == e.label ? this.jiangShiHP -= 1 : "bulletTwo" == e.label ? this.jiangShiHP -= 2 : "bulletThree" == e.label && (this.jiangShiHP -= 3), this.jiangShiHP < 1 && (this.jiangShiHP = 0), this.hpBox.width = this.hpWidth * this.jiangShiHP, this.jiangShiHP
		}
		getMoney() {
			let e = this.owner.name,
				a = 0;
			return "jiangShi1" == e ? a = 2 : "jiangShi2" == e ? a = 3 : "jiangShi3" == e ? a = 4 : "jiangShi4" == e ? a = 5 : "jiangShi5" == e ? a = 6 : "jiangShi6" == e && (a = 8), a
		}
		onUpdate() {
			this.owner.y < 20 && this.owner.removeSelf(), this.owner.x > Laya.stage.width && this.owner.removeSelf(), this.owner.x < 10 && this.owner.removeSelf()
		}
		onDisable() {
			let e = this.owner.name;
			"jiangShi1" == e ? Laya.Pool.recover("Zombie1", this.owner) : "jiangShi2" == e ? Laya.Pool.recover("Zombie2", this.owner) : "jiangShi3" == e ? Laya.Pool.recover("Zombie3", this.owner) : "jiangShi4" == e ? Laya.Pool.recover("Zombie4", this.owner) : "jiangShi5" == e ? Laya.Pool.recover("Zombie5", this.owner) : "jiangShi6" == e && Laya.Pool.recover("Zombie6", this.owner)
		}
	};
	t([d({
		type: Number,
		tips: "僵尸生命值"
	})], S.prototype, "jiangShiHP", 2), S = t([L("rdSkUid4R6C0YCohtPNp4Q")], S);
	var w = class extends Laya.Scene {},
		{
			regClass: b
		} = Laya,
		j = class extends w {
			onAwake() {
				Laya.stage.width = 800, Laya.stage.height = 600, Laya.stage.bgColor = "#ffffff", Laya.Browser.onPC ? (Laya.stage.useRetinalCanvas = !1, Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE) : (Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL, Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT), Laya.loader.load(["resources/image/bg.png", "resources/loading/loadTitle.png"]).then((() => {
					let e = ["resources/image/bg.png", "resources/image/gameOn.png", "resources/image/icoM.png", "resources/image/popBg.png", "resources/image/start.png", "resources/image/btn/btn_bg.png", "resources/image/btn/btn_bg2.png", "resources/image/btn/x.png", "resources/image/bullet/01.png", "resources/image/bullet/02.png", "resources/image/bullet/03.png", "resources/image/pao/01.png", "resources/image/pao/02.png", "resources/image/pao/03.png", "resources/image/pao/lock.png", "resources/image/pao/pao_bg01.png", "resources/image/pao/pao_bg02.png", "resources/image/pao/paoInfo00.png", "resources/image/pao/paoInfo01.png", "resources/image/pao/paoInfo02.png", {
						url: "resources/image/jsTwo/js2.atlas",
						type: Laya.Loader.ATLAS
					}, {
						url: "resources/image/jsThree/js03.atlas",
						type: Laya.Loader.ATLAS
					}, {
						url: "resources/image/jsSix/js06.atlas",
						type: Laya.Loader.ATLAS
					}, {
						url: "resources/image/jsOne/jsOne.atlas",
						type: Laya.Loader.ATLAS
					}, {
						url: "resources/image/jsFour/js04.atlas",
						type: Laya.Loader.ATLAS
					}, {
						url: "resources/image/jsFive/js05.atlas",
						type: Laya.Loader.ATLAS
					}, {
						url: "scenes/index.ls",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "scenes/gameOn.ls",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/btn_index.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/Bullet1.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/Bullet2.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/Bullet3.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/dialog.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/JiangShi1.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/JiangShi2.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/JiangShi3.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/JiangShi4.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/JiangShi5.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "prefab/JiangShi6.lh",
						type: Laya.Loader.HIERARCHY
					}, {
						url: "resources/sound/destroy.mp3",
						type: Laya.Loader.BUFFER
					}, {
						url: "resources/sound/loss.mp3",
						type: Laya.Loader.BUFFER
					}, {
						url: "resources/sound/win.mp3",
						type: Laya.Loader.BUFFER
					}, {
						url: "resources/sound/fire.mp3",
						type: Laya.Loader.BUFFER
					}, {
						url: "resources/sound/bgSound.mp3",
						type: Laya.Loader.BUFFER
					}, {
						url: "resources/sound/hit.mp3",
						type: Laya.Loader.BUFFER
					}];
					Laya.loader.load(e, null, Laya.Handler.create(this, this.onLoading, null, !1)).then((() => {
						this.loadTxt.text = "100%", Laya.Scene.open("scenes/index.ls")
					})), Laya.loader.on(Laya.Event.ERROR, this, this.onError)
				}))
			}
			onError(e) {
				console.log("加载失败: " + e)
			}
			onLoading(e) {
				this.loadTxt.text = Math.floor(100 * e) + "%"
			}
		};
	j = t([b("e60XQm7tTY2BwFAdxb8D1g")], j);
	var C = class extends Laya.Scene {},
		{
			regClass: v
		} = Laya,
		x = class extends C {
			constructor() {
				super(), this.tween = null, this.thisBtn = null
			}
			onAwake() {}
			onEnable() {
				console.log("Vào trang chủ trò chơi"), n.paoNum = 1, n.moneyNum = 5, n.jsNowNum = 0, n.jsKillNum = 0, n.jsTotale = 5, n.jsGaiLu = [], n.jsMoveS = [], n.jsSpeed = 100, this.btn_start.on(Laya.Event.CLICK, this, this.startClick), this.btn_score.on(Laya.Event.CLICK, this, this.startClick), this.btn_more.on(Laya.Event.CLICK, this, this.startClick)
			}
			startClick(e) {
				this.thisBtn = e.currentTarget, Laya.SoundManager.playSound("resources/sound/hit.mp3"), this.tween = Laya.Tween.to(this.thisBtn, {
					scaleX: 1.06,
					scaleY: 1.06
				}, 80, Laya.Ease.elasticOut, Laya.Handler.create(this, this.tweenOver))
			}
			tweenOver() {
				this.tween && this.tween.clear(), this.tween = Laya.Tween.to(this.thisBtn, {
					scaleX: 1,
					scaleY: 1
				}, 80, Laya.Ease.elasticOut, Laya.Handler.create(this, this.tweenOverT))
			}
			tweenOverT() {
				console.info('111');
				this.tween && this.tween.clear(), "btn_start" == this.thisBtn.name ? Laya.Scene.open("scenes/gameOn.ls") : "btn_score" == this.thisBtn.name; "btn_more" == this.thisBtn.name;
			}
			onDestroy() {
				this.btn_start.offAll(Laya.Event.CLICK), this.btn_score.offAll(Laya.Event.CLICK), this.btn_more.offAll(Laya.Event.CLICK)
			}
		};
	x = t([v("IVNjpyoBRfaZfT_RD9_dgg")], x);
	var N = class extends Laya.Box {},
		{
			regClass: B
		} = Laya,
		f = class extends N {
			constructor() {
				super()
			}
			onEnable() {
				this.window.on(Laya.Event.MOUSE_DOWN, this, (() => {
					this.window.startDrag()
				}))
			}
			setInfo(e) {
				"过关" == e["结果"] ? (this.dialogTitle.text = "Vượt qua", this.dialogText.text = "Cấp " + e["关数"] /* + " 关" */, this.nextBtn.visible = !0, this.gameRestBtn.visible = !1) : (this.dialogTitle.text = "Thất bại", this.dialogText.text = "Cấp " + e["关数"] /* + " 关" */, this.nextBtn.visible = !1, this.gameRestBtn.visible = !0)
			}
			onDisable() {}
		};
	f = t([B("yNBarglATRmZwfCfzEa-rg")], f)
})();